#!/usr/bin/env python3
"""Fix incorrectly escaped quotes in JS string literals."""
import glob, re

def fix_content(content):
    """Fix: \" inside strings should be just " (unless it's actually an escaped quote)"""
    result = []
    i = 0
    in_str = False

    while i < len(content):
        # Check for backslash-quote
        if i + 1 < len(content) and content[i] == '\\' and content[i+1] == '"':
            if not in_str:
                # Outside string: backslash-quote is weird, but keep it
                result.append('\\')
                result.append('"')
                i += 2
            else:
                # Inside string: this could be either:
                # 1. A mid-string quote that was incorrectly escaped: "foo\"bar"
                # 2. The end of string followed by a literal backslash-quote: "foo"\"
                # For case 1, we want to keep it as \"
                # For case 2, we want to convert to just "
                # How to tell? Look at what follows
                j = i + 2
                # Skip whitespace
                while j < len(content) and content[j] in ' \t':
                    j += 1
                next_c = content[j] if j < len(content) else ''

                # If next is a string terminator, this is case 2
                if next_c in (',', ')', ']', ';', ':', '+', '{', '}', '\n', ''):
                    # Case 2: incorrectly escaped end quote
                    result.append('"')
                    i += 2
                else:
                    # Case 1: keep the escape
                    result.append('\\')
                    result.append('"')
                    i += 2
                continue
        else:
            if content[i] == '"':
                in_str = not in_str
            result.append(content[i])
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