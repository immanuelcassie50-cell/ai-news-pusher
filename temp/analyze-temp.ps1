$temp = $env:TEMP
Write-Host 'Top 20 largest items in %TEMP%:' -ForegroundColor Yellow
Write-Host ('  Path: ' + $temp) -ForegroundColor DarkGray
Write-Host ''

$items = Get-ChildItem $temp -Force -ErrorAction SilentlyContinue |
    ForEach-Object {
        $size = 0
        if ($_.PSIsContainer) {
            $size = (Get-ChildItem $_.FullName -Recurse -File -Force -ErrorAction SilentlyContinue |
                Measure-Object -Property Length -Sum).Sum
        } else {
            $size = $_.Length
        }
        [PSCustomObject]@{
            Name = $_.Name
            Type = if ($_.PSIsContainer) {'DIR '} else {'FILE'}
            SizeMB = [math]::Round($size / 1MB, 2)
        }
    } | Sort-Object SizeMB -Descending | Select-Object -First 20

$items | Format-Table -AutoSize | Out-String | Write-Host
