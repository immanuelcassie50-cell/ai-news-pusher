#!/usr/bin/env python3
import os, re

# Fix: Chinese dialogue quotes inside strings weren't escaped
# Pattern: \"妻子：\"怎么...\" -> \"妻子：\"怎么...\" (escape inner quotes)

fixed_count = 0
for fname in os.listdir('.'):
    if not (fname.startswith('slide-') and fname.endswith('.js')):
        continue
    with open(fname, 'r', encoding='utf-8', errors='replace') as f:
        content = f.read()
    original = content

    # The issue: inside a JS string like "妻子：\"你怎么...\"",
    # the inner \" (from original Chinese curly quote conversion) is fine.
    # But the fixer script also created patterns like: "妻子："怎么..."
    # where the : is followed by a quote that's not escaped.

    # Find all lines and check if they have unescaped quotes inside strings
    lines = content.split('\n')
    new_lines = []
    for line in lines:
        new_line = line
        # Pattern: within a string, find Chinese text followed by unescaped "
        # e.g., "妻子："怎么..."  -> escape the inner quotes
        # Match: " Chinese_char : " Chinese -> escape the inner "
        # More general: find quotes that appear inside an already-opened string

        # Simple approach: if line has pattern like : " Chinese
        # and it looks like it's inside a string (has already opened), escape it
        # But this is complex. Let's use a simpler approach:
        # Replace patterns like ："  (colon followed by straight quote) with ：\"
        new_line = re.sub(r'："("?)', r'：\\"\1', new_line)
        # Replace patterns like ？""  (question mark followed by quote) inside strings
        new_line = re.sub(r'？("?)"', r'？\\"\1', new_line)

        new_lines.append(new_line)

    new_content = '\n'.join(new_lines)
    if new_content != original:
        with open(fname, 'w', encoding='utf-8') as f:
            f.write(new_content)
        fixed_count += 1
        print(f'Fixed: {fname}')

print(f'Total: {fixed_count}')
