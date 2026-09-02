# Scan common cache locations and report sizes
# Does NOT delete anything

$ErrorActionPreference = "SilentlyContinue"

function Get-Size {
    param([string]$Path)
    if (-not (Test-Path $Path)) { return 0 }
    $s = (Get-ChildItem $Path -Recurse -File -Force -ErrorAction SilentlyContinue |
          Measure-Object -Property Length -Sum).Sum
    if ($null -eq $s) { 0 } else { [long]$s }
}

function Show-Cache {
    param([string]$Name, [string]$Path)
    $size = Get-Size $Path
    if ($size -gt 0) {
        $gb = [math]::Round($size / 1GB, 2)
        $mb = [math]::Round($size / 1MB, 0)
        $display = if ($gb -ge 0.1) { "$gb GB" } else { "$mb MB" }
        $script:totalCache += $size
        Write-Host ("  {0,-40} {1,12}" -f $Name, $display) -ForegroundColor Cyan
    } else {
        Write-Host ("  {0,-40} {1,12}" -f $Name, "n/a") -ForegroundColor DarkGray
    }
}

$totalCache = 0
$userProfile = $env:USERPROFILE
$localApp = $env:LOCALAPPDATA
$appData = $env:APPDATA

Write-Host ""
Write-Host "===== Browser caches =====" -ForegroundColor Yellow
Show-Cache "Chrome cache" "$localApp\Google\Chrome\User Data\Default\Cache"
Show-Cache "Chrome code cache" "$localApp\Google\Chrome\User Data\Default\Code Cache"
Show-Cache "Edge cache" "$localApp\Microsoft\Edge\User Data\Default\Cache"
Show-Cache "Edge code cache" "$localApp\Microsoft\Edge\User Data\Default\Code Cache"
Show-Cache "Firefox cache (all profiles)" "$localApp\Mozilla\Firefox\Profiles"
Show-Cache "Brave cache" "$localApp\BraveSoftware\Brave-Browser\User Data\Default\Cache"

Write-Host ""
Write-Host "===== Dev tool caches =====" -ForegroundColor Yellow
Show-Cache "npm cache (npm)" "$appData\npm-cache"
Show-Cache "npm cache (local)" "$localApp\npm-cache"
Show-Cache "pip cache" "$localApp\pip\cache"
Show-Cache "NuGet packages" "$userProfile\.nuget\packages"
Show-Cache "NuGet http-cache" "$localApp\NuGet\Cache"
Show-Cache "Gradle caches" "$userProfile\.gradle\caches"
Show-Cache "Gradle wrapper dists" "$userProfile\.gradle\wrapper\dists"
Show-Cache "Cargo registry" "$userProfile\.cargo\registry"
Show-Cache "Cargo git" "$userProfile\.cargo\git"
Show-Cache "Maven local repo" "$userProfile\.m2\repository"
Show-Cache "Yarn cache" "$appData\Yarn\Cache"
Show-Cache "pnpm store" "$localApp\pnpm-store"
Show-Cache "Composer cache" "$appData\Composer\cache"
Show-Cache "Haskell stack" "$userProfile\.stack"
Show-Cache "sbt boot" "$userProfile\.sbt\boot"
Show-Cache "IntelliJ IDEA cache" "$localApp\JetBrains\IntelliJIdea*\caches"
Show-Cache "VSCode cache" "$appData\Code\Cache"
Show-Cache "VSCode CachedData" "$appData\Code\CachedData"
Show-Cache "VSCode GPUCache" "$appData\Code\GPUCache"
Show-Cache "Trae cache" "$localApp\Trae\Cache"
Show-Cache "Cursor cache" "$appData\Cursor\Cache"
Show-Cache "Windsurf cache" "$appData\Windsurf\Cache"

Write-Host ""
Write-Host "===== Docker / container caches =====" -ForegroundColor Yellow
Show-Cache "Docker Desktop data" "$localApp\Docker"
Show-Cache "Podman" "$localApp\containers\podman"

Write-Host ""
Write-Host "===== System / app caches (in %LOCALAPPDATA%) =====" -ForegroundColor Yellow
Show-Cache "Microsoft Teams cache" "$localApp\Microsoft\Teams\Cache"
Show-Cache "Microsoft Teams tmp" "$localApp\Microsoft\Teams\Tmp"
Show-Cache "Slack cache" "$appData\Slack\Cache"
Show-Cache "Discord cache" "$appData\discord\Cache"
Show-Cache "Spotify cache" "$appData\Spotify\Data"
Show-Cache "Zoom cache" "$appData\Zoom\cache"
Show-Cache "Steam htmlcache" "$localApp\Steam\htmlcache"
Show-Cache "Steam cached images" "$localApp\Steam\depotcache"

Write-Host ""
Write-Host "===== Windows additional caches =====" -ForegroundColor Yellow
Show-Cache "Windows Installer patch cache" "$env:WINDIR\Installer\$PatchCache$"
Show-Cache "Downloaded Installations" "$env:WINDIR\Downloaded Installations"
Show-Cache "Logs" "$env:WINDIR\Logs"
Show-Cache "System32 LogFiles" "$env:WINDIR\System32\LogFiles"
Show-Cache "Prefetch" "$env:WINDIR\Prefetch"

Write-Host ""
Write-Host "===== UWP / Microsoft Store apps =====" -ForegroundColor Yellow
if (Test-Path "$localApp\Packages") {
    $uwpTotal = 0
    $uwpCaches = @()
    Get-ChildItem "$localApp\Packages" -Directory -Force -ErrorAction SilentlyContinue | ForEach-Object {
        $pkg = $_.Name
        foreach ($sub in @("AC","LocalCache","LocalState\Cache","INetCache","Cache")) {
            $p = Join-Path $_.FullName $sub
            if (Test-Path $p) {
                $s = Get-Size $p
                if ($s -gt 0) {
                    $uwpCaches += [PSCustomObject]@{Pkg=$pkg; Sub=$sub; Size=$s}
                    $uwpTotal += $s
                }
            }
        }
    }
    $uwpCaches | Sort-Object Size -Descending | Select-Object -First 10 | ForEach-Object {
        $display = if ($_.Size -ge 1GB) { "{0:N2} GB" -f ($_.Size/1GB) } else { "{0:N0} MB" -f ($_.Size/1MB) }
        Write-Host ("  {0,-30} {1,-20} {2,12}" -f $_.Pkg, $_.Sub, $display) -ForegroundColor Cyan
    }
    Write-Host ("  ({0} more UWP cache entries not shown)" -f ($uwpCaches.Count - 10)) -ForegroundColor DarkGray
    $totalCache += $uwpTotal
    Write-Host ("  {0,-40} {1,12}" -f "UWP subcache TOTAL", ("{0:N2} GB" -f ($uwpTotal/1GB))) -ForegroundColor Yellow
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Green
if ($totalCache -ge 1GB) {
    Write-Host ("  TOTAL RECLAIMABLE: {0:N2} GB" -f ($totalCache/1GB)) -ForegroundColor Green
} else {
    Write-Host ("  TOTAL RECLAIMABLE: {0:N0} MB" -f ($totalCache/1MB)) -ForegroundColor Green
}
Write-Host "========================================" -ForegroundColor Green
Write-Host ""
