#!/usr/bin/env python3
import os, re

# Fix files where corner brackets got backslash-escaped
fixed = 0
for fname in os.listdir('.'):
    if not (fname.startswith('slide-') and fname.endswith('.js')):
        continue
    with open(fname, 'r', encoding='utf-8', errors='replace') as f:
        content = f.read()

    original = content

    # Fix \「 and \」 (backslash + corner bracket) -> just 「 」
    content = content.replace('\\「', '「')
    content = content.replace('\\」', '」')

    if content != original:
        with open(fname, 'w', encoding='utf-8') as f:
            f.write(content)
        fixed += 1
        print(f'Fixed: {fname}')

print(f'Total: {fixed} files')
