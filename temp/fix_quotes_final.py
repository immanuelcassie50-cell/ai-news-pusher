#!/usr/bin/env python3
"""Fix unescaped inner quotes in JS string literals."""
import re, glob

def fix_content(content):
    """Fix incorrectly escaped quotes by re-parsing properly."""
    result = []
    i = 0
    in_str = False
    str_char = None

    while i < len(content):
        c = content[i]

        if not in_str:
            if c in ('"', "'"):
                in_str = True
                str_char = c
                result.append(c)
            elif c == '\\' and i + 1 < len(content):
                # Outside string: keep escaped sequences
                result.append(c)
                result.append(content[i + 1])
                i += 2
                continue
            else:
                result.append(c)
        else:
            if c == '\\' and i + 1 < len(content):
                # Inside string: keep escaped sequences as-is
                result.append(c)
                result.append(content[i + 1])
                i += 2
                continue
            if c == str_char:
                # Check if this is end of string or inner quote
                # Look at what follows
                j = i + 1
                while j < len(content) and content[j] in ' \t':
                    j += 1
                next_c = content[j] if j < len(content) else ''

                if next_c in (',', ')', ']', ';', ':', '\n', '', '+'):
                    # This is end of string
                    in_str = False
                result.append(c)
            else:
                result.append(c)
        i += 1

    return ''.join(result)

fixed = []
for fname in sorted(glob.glob('slide-*.js')):
    with open(fname, 'r', encoding='utf-8') as f:
        content = f.read()

    original = content
    content = fix_content(content)

    if content != original:
        with open(fname, 'w', encoding='utf-8') as f:
            f.write(content)
        fixed.append(fname)

print(f'Fixed {len(fixed)} files')
for f in fixed[:20]:
    print(f'  {f}')
if len(fixed) > 20:
    print(f'  ... and {len(fixed) - 20} more')