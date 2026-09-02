#!/usr/bin/env python3
import glob

def fix_file(content):
    result = []
    i = 0
    in_string = False
    string_char = None

    while i < len(content):
        c = content[i]

        if not in_string:
            if c == '"':
                in_string = True
                string_char = c
                result.append(c)
                i += 1
            elif c == '\\':
                result.append(c)
                if i + 1 < len(content):
                    result.append(content[i + 1])
                    i += 2
                else:
                    i += 1
            else:
                result.append(c)
                i += 1
        else:
            if c == '\\':
                result.append(c)
                if i + 1 < len(content):
                    result.append(content[i + 1])
                    i += 2
                else:
                    i += 1
            # Check for unescaped inner quote BEFORE checking for end-of-string
            elif c == '"' and string_char == '"':
                result.append('\\')
                result.append(c)
                i += 1
            elif c == string_char:
                in_string = False
                result.append(c)
                i += 1
            else:
                result.append(c)
                i += 1

    return ''.join(result)

fixed_count = 0
for fname in sorted(glob.glob('slide-*.js')):
    with open(fname, 'r', encoding='utf-8') as f:
        content = f.read()

    original = content
    content = fix_file(content)

    if content != original:
        with open(fname, 'w', encoding='utf-8') as f:
            f.write(content)
        fixed_count += 1
        print(f'Fixed: {fname}')

print(f'\nTotal fixed: {fixed_count} files')