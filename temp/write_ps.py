$content = Get-Content -Path 'D:\CC\temp\handbook_gen.py' -Raw -Encoding UTF8
$content | Out-File -FilePath 'D:\CC\temp\handbook_final.py' -Encoding UTF8
Write-Host 'Done'
