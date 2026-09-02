import os, re

for fname in os.listdir('.'):
    if not (fname.startswith('slide-') and fname.endswith('.js')):
        continue
    with open(fname, 'rb') as f:
        data = f.read()
    try:
        content = data.decode('utf-8')
    except:
        content = data.decode('latin-1')
    original = content

    # Fix: \"\" inside JS strings (which came from corrupted Chinese curly quotes)
    # Pattern: \\\"\\\" (4 chars: backslash, quote, backslash, quote) - when this appears
    # inside a string value, it means the original \"\" got double-escaped
    # Fix: Replace with \\\" (just escape the quote properly)
    # But the issue is more subtle - the original had "" as Chinese quotes
    # which when parsed became just " inside the string, breaking the JS

    # The fix: Find all instances where we have: "text""text" or ""text""
    # These are patterns where Chinese curly quotes were interpreted as string terminators
    # Replace them with proper escaped quotes

    # Simplest approach: replace "" with \" (escaped quote) within string values
    # We can do this by finding all occurrences of "" inside {...} blocks
    # and replacing with \"

    # Actually, let's be more precise: replace \\\"\\\"  with \\\" (just one escaped quote)
    # since \\\"\\\" is two escaped quotes back-to-back which terminates then restarts string

    # Replace \\"\\" with \\" (two backslash-quotes become one backslash-quote)
    content = content.replace('\\"\\"', '\\"')

    if content != original:
        with open(fname, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f'Fixed: {fname}')
