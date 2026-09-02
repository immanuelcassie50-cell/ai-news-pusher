import os, re

fixed = 0
for fname in os.listdir('.'):
    if not (fname.startswith('slide-') and fname.endswith('.js')):
        continue
    with open(fname, 'r', encoding='utf-8', errors='replace') as f:
        content = f.read()
    original = content

    # Replace Chinese curly quotes with corner brackets inside strings
    # U+201C = "  U+201D = "
    # We want 「 and 」 instead
    content = content.replace('“', '「')  # " -> 「
    content = content.replace('”', '」')  # " -> 」

    if content != original:
        with open(fname, 'w', encoding='utf-8') as f:
            f.write(content)
        fixed += 1
        print(f'Fixed: {fname}')

print(f'Total: {fixed} files')
