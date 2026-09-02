$temp = $env:TEMP
Write-Host "Investigating wvm-* directories..." -ForegroundColor Yellow
Write-Host ""

# Pick the largest wvm folder and dig in
$largestWvm = Get-ChildItem $temp -Directory -Filter "wvm-*" -Force -ErrorAction SilentlyContinue |
    Sort-Object { (Get-ChildItem $_.FullName -Recurse -File -ErrorAction SilentlyContinue | Measure-Object Length -Sum).Sum } -Descending |
    Select-Object -First 1

if ($largestWvm) {
    Write-Host ("Largest wvm folder: " + $largestWvm.Name) -ForegroundColor Cyan
    Write-Host ("  Path: " + $largestWvm.FullName) -ForegroundColor DarkGray
    Write-Host ""

    # Look for clues: README, version files, executables
    Write-Host "Clue files (README, .exe, version info):" -ForegroundColor Magenta
    Get-ChildItem $largestWvm.FullName -Recurse -File -Force -ErrorAction SilentlyContinue |
        Where-Object { $_.Extension -in '.exe','.txt','.md','.json','.log','.yml','.yaml' } |
        Select-Object -First 15 |
        ForEach-Object {
            $info = $_.FullName.Substring($largestWvm.FullName.Length)
            Write-Host ("  {0,8} MB  {1}" -f [math]::Round($_.Length/1MB,2), $info)
        }

    Write-Host ""
    Write-Host "Top 5 files by size in this wvm folder:" -ForegroundColor Magenta
    Get-ChildItem $largestWvm.FullName -Recurse -File -Force -ErrorAction SilentlyContinue |
        Sort-Object Length -Descending |
        Select-Object -First 5 |
        ForEach-Object {
            $info = $_.FullName.Substring($largestWvm.FullName.Length)
            Write-Host ("  {0,8} MB  {1}" -f [math]::Round($_.Length/1MB,2), $info)
        }
}

Write-Host ""
Write-Host "Other interesting temp items:" -ForegroundColor Yellow
$interesting = @('workbuddy-update-x64', 'trae-user-x64', 'trae-cn-user-x64', 'Diagnostics', 'baidu')
foreach ($name in $interesting) {
    $item = Get-Item (Join-Path $temp $name) -ErrorAction SilentlyContinue
    if ($item) {
        $size = if ($item.PSIsContainer) {
            (Get-ChildItem $item.FullName -Recurse -File -Force -ErrorAction SilentlyContinue | Measure-Object Length -Sum).Sum
        } else { $item.Length }
        Write-Host ("  {0,-30} {1,8} MB" -f $name, [math]::Round($size/1MB,2))
    }
}

Write-Host ""
Write-Host "Checking wvm-* creation dates (latest 5):" -ForegroundColor Yellow
Get-ChildItem $temp -Directory -Filter "wvm-*" -Force -ErrorAction SilentlyContinue |
    Sort-Object CreationTime -Descending |
    Select-Object -First 5 |
    ForEach-Object {
        Write-Host ("  {0,-20} {1}" -f $_.Name, $_.CreationTime)
    }

Write-Host ""
Write-Host "Checking wvm-* last write times (oldest 5):" -ForegroundColor Yellow
Get-ChildItem $temp -Directory -Filter "wvm-*" -Force -ErrorAction SilentlyContinue |
    Sort-Object LastWriteTime |
    Select-Object -First 5 |
    ForEach-Object {
        Write-Host ("  {0,-20} {1}" -f $_.Name, $_.LastWriteTime)
    }
