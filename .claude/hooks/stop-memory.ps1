# Stop hook: write session to MEMORY.md
$memoryPath = 'D:\CC\MEMORY.md'
$timestamp = Get-Date -Format 'yyyy-MM-dd HH:mm'
$dateTag = Get-Date -Format 'yyyy-MM-dd'
$utf8NoBom = New-Object System.Text.UTF8Encoding $false

# Read stdin
$hookInput = ''
if ([Console]::IN.Peek() -ne -1) {
    $reader = [Console]::In
    $hookInput = $reader.ReadToEnd()
}

# Parse session info
$sessionNote = ''
if ($hookInput -and $hookInput.Trim() -ne '') {
    try {
        $data = $hookInput | ConvertFrom-Json
        $sessionNote = $data.summary
    } catch {}
}

# Build entry
$entry = "`n## Session $dateTag"
if ($sessionNote -and $sessionNote.Trim() -ne '') {
    $entry += "`n`n$sessionNote"
} else {
    $entry += "`n`n- Session at $timestamp"
}

# Append to MEMORY.md
[System.IO.File]::AppendAllText($memoryPath, $entry, $utf8NoBom)

# Play notification sound
[System.Media.SystemSounds]::Exclamation.Play()

# Output JSON response
@{ systemMessage = 'Session recorded to MEMORY.md' } | ConvertTo-Json -Compress
