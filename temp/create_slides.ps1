param([string]$slidesDir, [string]$slideNum, [string]$content)
$filePath = Join-Path $slidesDir "slide-$slideNum.js"
[System.IO.File]::WriteAllText($filePath, $content, [System.Text.Encoding]::UTF8)
Write-Host "Created slide-$slideNum.js"
