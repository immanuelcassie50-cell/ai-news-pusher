#!/usr/bin/env python3
import os, re

# Fix all slides with unbalanced corner brackets
fixed_count = 0
for fname in os.listdir('.'):
    if not (fname.startswith('slide-') and fname.endswith('.js')):
        continue
    with open(fname, 'r', encoding='utf-8', errors='replace') as f:
        content = f.read()

    original = content

    # Fix specific known issues:
    # 1. 「每次都「 -> 「每次都」 (double opening bracket fix)
    content = content.replace('「每次都「', '「每次都」')
    content = content.replace('「无理取闹「', '「无理取闹」')

    # 2. Fix any pattern where 「 appears twice without closing
    # 「text「 -> 「text」
    content = re.sub(r'「([^」]*?)「([^」]*?)」', r'「\1\2」', content)

    if content != original:
        with open(fname, 'w', encoding='utf-8') as f:
            f.write(content)
        fixed_count += 1
        print(f'Fixed: {fname}')

print(f'Total: {fixed_count}')
