#Requires -RunAsAdministrator
<#
.SYNOPSIS
    C drive safe cleanup script - only removes system-rebuildable caches
.DESCRIPTION
    Targets only temp files and caches that the OS or apps will recreate.
    WinSxS, pagefile, hiberfil are NOT touched.
#>
[CmdletBinding()]
param(
    [switch]$Preview
)

$ErrorActionPreference = "Continue"
$freedSpace = 0

function Format-Size {
    param([long]$Bytes)
    if ($Bytes -ge 1GB) { return "{0:N2} GB" -f ($Bytes / 1GB) }
    if ($Bytes -ge 1MB) { return "{0:N2} MB" -f ($Bytes / 1MB) }
    if ($Bytes -ge 1KB) { return "{0:N2} KB" -f ($Bytes / 1KB) }
    return "$Bytes B"
}

function Get-FolderSize {
    param([string]$Path)
    if (-not (Test-Path $Path)) { return 0 }
    return (Get-ChildItem $Path -Recurse -File -Force -ErrorAction SilentlyContinue |
            Measure-Object -Property Length -Sum).Sum
}

function Invoke-Clean {
    param(
        [string]$Path,
        [string]$Name
    )
    if (-not (Test-Path $Path)) { return }
    $size = Get-FolderSize $Path
    if ($size -eq 0) {
        Write-Host ("  {0,-30} {1,12}" -f $Name, "0 B") -ForegroundColor DarkGray
        return
    }
    if ($Preview) {
        Write-Host ("  {0,-30} {1,12}" -f $Name, (Format-Size $size)) -ForegroundColor Cyan
        $script:freedSpace += $size
        return
    }
    Write-Host ("  Cleaning {0,-24} ({1,12})" -f $Name, (Format-Size $size)) -ForegroundColor Cyan -NoNewline
    Get-ChildItem $Path -Force -ErrorAction SilentlyContinue |
        Remove-Item -Recurse -Force -ErrorAction SilentlyContinue
    Write-Host "  OK" -ForegroundColor Green
    $script:freedSpace += $size
}

Write-Host ""
if ($Preview) {
    Write-Host "===== PREVIEW: reclaimable space =====" -ForegroundColor Yellow
} else {
    Write-Host "===== Starting C drive safe cleanup =====" -ForegroundColor Yellow
}
Write-Host ""

# 1. Recycle Bin
Write-Host "[1] Recycle Bin" -ForegroundColor Magenta
if ($Preview) {
    try {
        $shell = New-Object -ComObject Shell.Application
        $bin = $shell.NameSpace(0xA)
        $binSize = 0
        foreach ($it in $bin.Items()) { $binSize += $it.Size }
        Write-Host ("  {0,-30} {1,12}" -f "Recycle Bin", (Format-Size $binSize)) -ForegroundColor Cyan
        $freedSpace += $binSize
    } catch {
        Write-Host "  Recycle Bin: cannot read" -ForegroundColor DarkGray
    }
} else {
    try {
        Clear-RecycleBin -Force -ErrorAction Stop
        Write-Host "  Cleared OK" -ForegroundColor Green
    } catch {
        Write-Host "  Skipped: $($_.Exception.Message)" -ForegroundColor DarkYellow
    }
}

# 2. User temp
Write-Host ""
Write-Host "[2] User temp files" -ForegroundColor Magenta
Invoke-Clean -Path $env:TEMP -Name "%TEMP%"

# 3. System temp
Write-Host ""
Write-Host "[3] System temp files" -ForegroundColor Magenta
Invoke-Clean -Path "C:\Windows\Temp" -Name "C:\Windows\Temp"

# 4. Thumbnail cache (only thumbcache_*.db)
Write-Host ""
Write-Host "[4] Thumbnail cache" -ForegroundColor Magenta
$thumbPath = "$env:LOCALAPPDATA\Microsoft\Windows\Explorer"
if (Test-Path $thumbPath) {
    $thumbFiles = Get-ChildItem $thumbPath -Filter "thumbcache_*.db" -Force -ErrorAction SilentlyContinue
    $thumbSize = ($thumbFiles | Measure-Object -Property Length -Sum).Sum
    if ($Preview) {
        Write-Host ("  {0,-30} {1,12}" -f "Thumbnail cache", (Format-Size $thumbSize)) -ForegroundColor Cyan
        $freedSpace += $thumbSize
    } else {
        foreach ($f in $thumbFiles) {
            Remove-Item $f.FullName -Force -ErrorAction SilentlyContinue
        }
        Write-Host ("  Cleaning {0,-24} ({1,12})" -f "Thumbnail cache", (Format-Size $thumbSize)) -ForegroundColor Cyan -NoNewline
        Write-Host "  OK" -ForegroundColor Green
        $freedSpace += $thumbSize
    }
}

# 5. DirectX shader cache
Write-Host ""
Write-Host "[5] DirectX shader cache" -ForegroundColor Magenta
Invoke-Clean -Path "$env:LOCALAPPDATA\D3DSCache" -Name "D3DSCache"

# 6. Windows Error Reporting
Write-Host ""
Write-Host "[6] Windows Error Reporting" -ForegroundColor Magenta
Invoke-Clean -Path "C:\ProgramData\Microsoft\Windows\WER" -Name "System WER"
Invoke-Clean -Path "$env:LOCALAPPDATA\Microsoft\Windows\WER" -Name "User WER"

# 7. IE / legacy Edge cache
Write-Host ""
Write-Host "[7] IE / legacy Edge cache" -ForegroundColor Magenta
Invoke-Clean -Path "$env:LOCALAPPDATA\Microsoft\Windows\INetCache" -Name "INetCache"
Invoke-Clean -Path "$env:LOCALAPPDATA\Microsoft\Windows\WebCache" -Name "WebCache"

# 8. Defender scan history
Write-Host ""
Write-Host "[8] Defender scan history" -ForegroundColor Magenta
Invoke-Clean -Path "C:\ProgramData\Microsoft\Windows Defender\Scans\History\Results" -Name "Defender Results"
Invoke-Clean -Path "C:\ProgramData\Microsoft\Windows Defender\Scans\History\Service" -Name "Defender Service"

# 9. Memory dumps
Write-Host ""
Write-Host "[9] Memory dump files" -ForegroundColor Magenta
$dumpFiles = @()
if (Test-Path "C:\Windows\Minidump") {
    $dumpFiles += Get-ChildItem "C:\Windows\Minidump\*.dmp" -ErrorAction SilentlyContinue
}
if (Test-Path "C:\Windows\MEMORY.DMP") {
    $dumpFiles += Get-Item "C:\Windows\MEMORY.DMP" -ErrorAction SilentlyContinue
}
$dumpSize = ($dumpFiles | Measure-Object -Property Length -Sum).Sum
if ($Preview) {
    Write-Host ("  {0,-30} {1,12}" -f "Memory dumps", (Format-Size $dumpSize)) -ForegroundColor Cyan
    $freedSpace += $dumpSize
} else {
    foreach ($f in $dumpFiles) {
        Remove-Item $f.FullName -Force -ErrorAction SilentlyContinue
    }
    Write-Host ("  Cleaning {0,-24} ({1,12})" -f "Memory dumps", (Format-Size $dumpSize)) -ForegroundColor Cyan -NoNewline
    Write-Host "  OK" -ForegroundColor Green
    $freedSpace += $dumpSize
}

# 10. Windows Update download cache (stop service first)
Write-Host ""
Write-Host "[10] Windows Update download cache" -ForegroundColor Magenta
$wuPath = "C:\Windows\SoftwareDistribution\Download"
$wuSize = Get-FolderSize $wuPath
if ($wuSize -gt 0) {
    if ($Preview) {
        Write-Host ("  {0,-30} {1,12}" -f "SoftwareDistribution\Download", (Format-Size $wuSize)) -ForegroundColor Cyan
        $freedSpace += $wuSize
    } else {
        Write-Host "  Stopping wuauserv and bits services..." -ForegroundColor DarkCyan
        $wuWasRunning = (Get-Service wuauserv -ErrorAction SilentlyContinue).Status -eq 'Running'
        $bitsWasRunning = (Get-Service bits -ErrorAction SilentlyContinue).Status -eq 'Running'
        Stop-Service -Name wuauserv -Force -ErrorAction SilentlyContinue
        Stop-Service -Name bits -Force -ErrorAction SilentlyContinue
        Start-Sleep -Seconds 2

        Get-ChildItem $wuPath -Force -ErrorAction SilentlyContinue |
            Remove-Item -Recurse -Force -ErrorAction SilentlyContinue

        if ($wuWasRunning) { Start-Service wuauserv -ErrorAction SilentlyContinue }
        if ($bitsWasRunning) { Start-Service bits -ErrorAction SilentlyContinue }

        Write-Host ("  Cleaning {0,-24} ({1,12})" -f "SoftwareDistribution\Download", (Format-Size $wuSize)) -ForegroundColor Cyan -NoNewline
        Write-Host "  OK" -ForegroundColor Green
        $freedSpace += $wuSize
    }
} else {
    Write-Host "  Empty" -ForegroundColor DarkGray
}

# 11. Delivery Optimization
Write-Host ""
Write-Host "[11] Delivery Optimization cache" -ForegroundColor Magenta
Invoke-Clean -Path "C:\Windows\SoftwareDistribution\DeliveryOptimization" -Name "DeliveryOptimization"

# Summary
Write-Host ""
Write-Host "========================================" -ForegroundColor Green
if ($Preview) {
    Write-Host ("  PREVIEW total reclaimable: {0}" -f (Format-Size $freedSpace)) -ForegroundColor Green
} else {
    Write-Host ("  Cleanup done, actually freed: {0}" -f (Format-Size $freedSpace)) -ForegroundColor Green
}
Write-Host "========================================" -ForegroundColor Green
Write-Host ""

$cDrive = Get-PSDrive C -ErrorAction SilentlyContinue
if ($cDrive) {
    $totalBytes = $cDrive.Used + $cDrive.Free
    $freePct = if ($totalBytes -gt 0) { [math]::Round(($cDrive.Free / $totalBytes) * 100, 1) } else { 0 }
    Write-Host "C drive status:" -ForegroundColor Yellow
    Write-Host ("  Total: {0}" -f (Format-Size $totalBytes)) -ForegroundColor White
    Write-Host ("  Used:  {0}" -f (Format-Size $cDrive.Used)) -ForegroundColor White
    Write-Host ("  Free:  {0} ({1}%)" -f (Format-Size $cDrive.Free), $freePct) -ForegroundColor White
}
Write-Host ""
