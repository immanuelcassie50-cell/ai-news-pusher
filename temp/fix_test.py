#!/usr/bin/env python3
with open('slide-29.js', 'r', encoding='utf-8') as f:
    content = f.read()

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
            elif c == string_char:
                in_string = False
                result.append(c)
                i += 1
            elif c == '"' and string_char == '"':
                result.append('\\')
                result.append(c)
                i += 1
            else:
                result.append(c)
                i += 1

    return ''.join(result)

fixed = fix_file(content)
print('Changed:', content != fixed)
print()
if content != fixed:
    lines = fixed.split('\n')
    print('Line 56 fixed:', repr(lines[55][:100]))