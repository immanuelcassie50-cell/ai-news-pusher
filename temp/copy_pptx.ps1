$sourceDir = "D:\\2026年课程\\云南磷化\\第一阶段作业\\第六组作业\\第六组作业\\第一期作业—第六组—雷利"
$destDir = "D:\\CC\\temp"
$files = Get-ChildItem -Path $sourceDir -Filter "*.pptx"
foreach ($f in $files) {
    Write-Host "Found:" $f.Name
    $destPath = Join-Path $destDir $f.Name
    Copy-Item -Path $f.FullName -Destination $destPath -Force
    Write-Host "Copied to:" $destPath
}
