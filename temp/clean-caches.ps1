# Targeted cache cleanup: system caches + pip (npm/NuGet preserved)
# Uses proper tool commands where possible (pip cache purge, etc.)

$ErrorActionPreference = "Continue"
$freedSpace = 0
$userProfile = $env:USERPROFILE
$localApp = $env:LOCALAPPDATA
$appData = $env:APPDATA

function Format-Size {
    param([long]$Bytes)
    if ($Bytes -ge 1GB) { return "{0:N2} GB" -f ($Bytes / 1GB) }
    if ($Bytes -ge 1MB) { return "{0:N2} MB" -f ($Bytes / 1MB) }
    if ($Bytes -ge 1KB) { return "{0:N2} KB" -f ($Bytes / 1KB) }
    return "$Bytes B"
}

function Get-Size {
    param([string]$Path)
    if (-not (Test-Path $Path)) { return 0 }
    $s = (Get-ChildItem $Path -Recurse -File -Force -ErrorAction SilentlyContinue |
          Measure-Object -Property Length -Sum).Sum
    if ($null -eq $s) { 0 } else { [long]$s }
}

function Clean-Item {
    param(
        [string]$Name,
        [string]$Path,
        [string]$Pattern = $null
    )
    if (-not (Test-Path $Path)) {
        Write-Host ("  {0,-40} skipped (n/a)" -f $Name) -ForegroundColor DarkGray
        return
    }
    $size = Get-Size $Path
    if ($size -eq 0) {
        Write-Host ("  {0,-40} skipped (empty)" -f $Name) -ForegroundColor DarkGray
        return
    }
    Write-Host ("  Cleaning {0,-32} ({1,10})" -f $Name, (Format-Size $size)) -ForegroundColor Cyan -NoNewline
    if ($Pattern) {
        Get-ChildItem $Path -Filter $Pattern -Recurse -Force -ErrorAction SilentlyContinue |
            Remove-Item -Recurse -Force -ErrorAction SilentlyContinue
    } else {
        Get-ChildItem $Path -Force -ErrorAction SilentlyContinue |
            Remove-Item -Recurse -Force -ErrorAction SilentlyContinue
    }
    Write-Host "  OK" -ForegroundColor Green
    $script:freedSpace += $size
}

Write-Host ""
Write-Host "===== Targeted cache cleanup =====" -ForegroundColor Yellow
Write-Host "Scope: system logs, prefetch, browser cache, app caches, pip" -ForegroundColor DarkGray
Write-Host "Excluded: npm cache, NuGet packages (per user choice)" -ForegroundColor DarkGray
Write-Host ""

# --- pip cache: use the proper tool command ---
Write-Host "[pip] Using 'pip cache purge' (proper tool command)" -ForegroundColor Magenta
try {
    $beforePip = if (Test-Path "$localApp\pip\cache") {
        (Get-ChildItem "$localApp\pip\cache" -Recurse -File -Force -ErrorAction SilentlyContinue |
            Measure-Object -Property Length -Sum).Sum
    } else { 0 }
    if ($beforePip -gt 0) {
        pip cache purge 2>&1 | Out-Null
        Write-Host ("  Cleaned pip cache ({0})" -f (Format-Size $beforePip)) -ForegroundColor Green
        $freedSpace += $beforePip
    } else {
        Write-Host "  pip cache: empty" -ForegroundColor DarkGray
    }
} catch {
    Write-Host "  pip cache: $($_.Exception.Message)" -ForegroundColor DarkYellow
}

# --- System logs ---
Write-Host ""
Write-Host "[System] Windows logs" -ForegroundColor Magenta
Clean-Item -Name "C:\Windows\Logs" -Path "$env:WINDIR\Logs"
Clean-Item -Name "C:\Windows\System32\LogFiles" -Path "$env:WINDIR\System32\LogFiles"

# --- Prefetch ---
Write-Host ""
Write-Host "[System] Prefetch (causes brief slowdown for ~1 week)" -ForegroundColor Magenta
Clean-Item -Name "C:\Windows\Prefetch" -Path "$env:WINDIR\Prefetch"

# --- Browser caches ---
Write-Host ""
Write-Host "[Browsers]" -ForegroundColor Magenta
Clean-Item -Name "Chrome cache" -Path "$localApp\Google\Chrome\User Data\Default\Cache"
Clean-Item -Name "Chrome code cache" -Path "$localApp\Google\Chrome\User Data\Default\Code Cache"
Clean-Item -Name "Edge cache" -Path "$localApp\Microsoft\Edge\User Data\Default\Cache"
Clean-Item -Name "Edge code cache" -Path "$localApp\Microsoft\Edge\User Data\Default\Code Cache"
Clean-Item -Name "Firefox cache" -Path "$localApp\Mozilla\Firefox\Profiles"

# --- IDE / editor caches ---
Write-Host ""
Write-Host "[IDEs]" -ForegroundColor Magenta
Clean-Item -Name "VSCode Cache" -Path "$appData\Code\Cache"
Clean-Item -Name "VSCode CachedData" -Path "$appData\Code\CachedData"
Clean-Item -Name "VSCode GPUCache" -Path "$appData\Code\GPUCache"
Clean-Item -Name "VSCode Crashpad" -Path "$appData\Code\Crashpad"
Clean-Item -Name "Cursor Cache" -Path "$appData\Cursor\Cache"
Clean-Item -Name "Cursor CachedData" -Path "$appData\Cursor\CachedData"
Clean-Item -Name "Cursor GPUCache" -Path "$appData\Cursor\GPUCache"
Clean-Item -Name "Windsurf Cache" -Path "$appData\Windsurf\Cache"
Clean-Item -Name "Windsurf CachedData" -Path "$appData\Windsurf\CachedData"
Clean-Item -Name "Windsurf GPUCache" -Path "$appData\Windsurf\GPUCache"

# --- Other small items ---
Write-Host ""
Write-Host "[Misc]" -ForegroundColor Magenta
Clean-Item -Name "MSTeams LocalCache" -Path "$localApp\Packages\Microsoft.MSTeams_8wekyb3d8bbwe\LocalCache"

Write-Host ""
Write-Host "========================================" -ForegroundColor Green
Write-Host ("  Cleanup done, freed: {0}" -f (Format-Size $freedSpace)) -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""
