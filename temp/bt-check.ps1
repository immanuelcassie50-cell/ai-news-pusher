Write-Host "=== Bluetooth Service Diagnostic ===" -ForegroundColor Cyan

Write-Host ""
Write-Host "[1/6] Checking Bluetooth services..."
$svcList = @("bthserv","BthA2dp","BthHFSrv","BluetoothUserService")
foreach ($svc in $svcList) {
    $s = Get-Service -Name $svc -ErrorAction SilentlyContinue
    if ($s) {
        Write-Host "  $svc -> Status: $($s.Status), StartType: $($s.StartType)"
    } else {
        Write-Host "  $svc -> Not found"
    }
}

Write-Host ""
Write-Host "[2/6] Fixing service startup type..."
$fix = Get-Service -Name bthserv -ErrorAction SilentlyContinue
if ($fix) {
    $oldType = $fix.StartType
    if ($fix.StartType -ne "Automatic") {
        try {
            Set-Service -Name bthserv -StartupType Automatic -ErrorAction Stop
            Write-Host ("  [FIXED] bthserv: $oldType -> Automatic")
        } catch {
            Write-Host ("  [FAILED] bthserv: " + $_.Exception.Message)
        }
    } else {
        Write-Host "  [OK] bthserv already Automatic"
    }
}

Write-Host ""
Write-Host "[3/6] Starting stopped services..."
$startList = @("bthserv","BthA2dp","BthHFSrv")
foreach ($svcName in $startList) {
    $s = Get-Service -Name $svcName -ErrorAction SilentlyContinue
    if ($s -and $s.Status -ne "Running") {
        try {
            Start-Service -Name $svcName -ErrorAction Stop
            Write-Host "  [STARTED] $svcName"
        } catch {
            $e = $_.Exception.Message
            Write-Host ("  [SKIP] " + $svcName + ": " + $e)
        }
    } elseif ($s) {
        Write-Host "  [OK] $svcName running"
    }
}

Write-Host ""
Write-Host "[4/6] Checking Bluetooth adapter..."
$found = $false
try {
    $btDev = Get-PnpDevice -Class Bluetooth -ErrorAction Stop
    foreach ($dev in $btDev) {
        $found = $true
        $st = $dev.Status
        $nm = $dev.FriendlyName
        $col = if ($st -eq "OK") { "Green" } elseif ($st -eq "Disabled") { "Red" } else { "Yellow" }
        Write-Host "  $st : $nm" -ForegroundColor $col
    }
} catch {
    Write-Host "  No Bluetooth devices found"
}

Write-Host ""
Write-Host "[5/6] Checking registry..."
$regPaths = @("HKLM:\SYSTEM\CurrentControlSet\Services\bthserv","HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\Bluetooth")
foreach ($path in $regPaths) {
    if (Test-Path $path) {
        Write-Host "  $path"
        $val = Get-ItemProperty -Path $path -ErrorAction SilentlyContinue
        foreach ($prop in $val.PSObject.Properties) {
            if ($prop.Name -match "Start|Disable") {
                Write-Host ("    " + $prop.Name + " = " + $prop.Value)
            }
        }
    } else {
        Write-Host "  [NOT FOUND] $path"
    }
}

Write-Host ""
Write-Host "[6/6] Summary"
$bthserv = Get-Service -Name bthserv -ErrorAction SilentlyContinue
if ($bthserv -and $bthserv.Status -eq "Running" -and $bthserv.StartType -eq "Automatic") {
    Write-Host "  [OK] Bluetooth Support Service running + Auto" -ForegroundColor Green
} else {
    Write-Host "  [ISSUE] Bluetooth Support Service needs attention"
}

Write-Host ""
Write-Host "=== Diagnostic Complete ===" -ForegroundColor Cyan
Write-Host ""
Write-Host "Next: If issues remain, run devmgmt.msc and check Bluetooth adapters" -ForegroundColor Magenta