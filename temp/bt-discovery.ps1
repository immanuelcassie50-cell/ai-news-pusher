Write-Host "=== Bluetooth Discovery Settings ==="
Write-Host ""
Write-Host "1. Checking registry for discovery/pairing settings:"
$paths = @(
    "HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\Bluetooth\Allow discovery",
    "HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\Bluetooth\Allow pairing"
)
foreach ($p in $paths) {
    if (Test-Path $p) {
        $v = Get-ItemProperty -Path $p -ErrorAction SilentlyContinue
        $val = $v.'(default)'
        Write-Host "  $p = $val"
    } else {
        Write-Host "  $p  ->  Not set (OK)"
    }
}

Write-Host ""
Write-Host "2. Finding Bluetooth adapter hardware ID:"
$btAdapters = Get-PnpDevice -Class Bluetooth -ErrorAction SilentlyContinue | Where-Object { $_.FriendlyName -match "Intel|Broadcom|Qualcomm|Atheros|Realtek" }
if ($btAdapters) {
    foreach ($a in $btAdapters) {
        Write-Host ("  " + $a.FriendlyName)
        Write-Host ("    Instance: " + $a.InstanceId)
    }
} else {
    Write-Host "  No standard Bluetooth adapters found"
}

Write-Host ""
Write-Host "3. All Bluetooth devices:"
$all = Get-PnpDevice -Class Bluetooth -ErrorAction SilentlyContinue
foreach ($d in $all) {
    $nm = $d.FriendlyName
    if ($nm -match "USB|Virtual|Protocol|Filter|Device") {
        Write-Host ("  " + $nm)
        Write-Host ("    Instance: " + $d.InstanceId)
    }
}