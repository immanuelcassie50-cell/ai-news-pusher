#!/usr/bin/env python3
"""Fix incorrectly escaped quotes in JS string literals."""
import glob

def fix_file(content):
    """Fix cases like `"text\",` to `"text",` """
    result = []
    i = 0
    in_str = False

    while i < len(content):
        # Check for escaped quote pattern that ends a string
        if i + 1 < len(content) and content[i] == '\\' and content[i+1] == '"':
            # Backslash-quote - check if this is end of string
            j = i + 2
            while j < len(content) and content[j] in ' \t':
                j += 1
            next_c = content[j] if j < len(content) else ''

            if next_c in (',', ')', ']', ';', ':', '\n', '', '+', '{'):
                # This was an incorrectly escaped end quote - just output the quote
                result.append('"')
                i += 2
                continue
            else:
                # Inner escaped quote - keep escaped
                result.append('\\')
                result.append('"')
                i += 2
                continue

        if content[i] == '"' and not in_str:
            in_str = True
        elif content[i] == '"' and in_str:
            in_str = False

        result.append(content[i])
        i += 1

    return ''.join(result)

fixed = []
for fname in sorted(glob.glob('slide-*.js')):
    with open(fname, 'r', encoding='utf-8') as f:
        content = f.read()

    original = content
    content = fix_file(content)

    if content != original:
        with open(fname, 'w', encoding='utf-8') as f:
            f.write(content)
        fixed.append(fname)

print(f'Fixed {len(fixed)} files')
for f in fixed[:20]:
    print(f'  {f}')