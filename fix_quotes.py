import os
import re

files_to_fix = [
    'slide-25.js', 'slide-27.js', 'slide-71.js', 'slide-72.js',
    'slide-73.js', 'slide-76.js', 'slide-77.js', 'slide-42.js', 'slide-82.js'
]

for fname in files_to_fix:
    if not os.path.exists(fname):
        print(f'{fname} not found')
        continue

    with open(fname, 'r', encoding='utf-8') as f:
        content = f.read()

    original = content

    # Replace Chinese curly quotes with escaped versions in JS strings
    # These are the problematic characters: " " (U+201C and U+201D)
    content = content.replace('“', '\\"')  # left double quote
    content = content.replace('”', '\\"')  # right double quote
    # Also handle 「 and 」 if present
    content = content.replace('「', '\\"')  # left corner bracket
    content = content.replace('」', '\\"')  # right corner bracket

    if content != original:
        with open(fname, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f'Fixed {fname}')
    else:
        print(f'No changes needed for {fname}')
