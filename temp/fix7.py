#!/usr/bin/env python3
"""Fix 7 broken slides by proper string parsing."""
import re, os

SLIDES_DIR = r"D:\新课开发\内训师和表达\系列进阶课\12-内训项目运营：选师、建课、认证、应用与激励机制设计\授课PPT\slides"
FILES = ['slide-36.js','slide-49.js','slide-67.js','slide-76.js','slide-80.js','slide-97.js','slide-98.js']

def is_cjk(ch):
    return '一' <= ch <= '鿿'

def parse_and_fix(line):
    """Parse a JS line, identify string values, fix inner quotes."""
    result = []
    i = 0
    in_string = False
    string_char = None

    while i < len(line):
        ch = line[i]

        if not in_string:
            if ch in ('"', "'"):
                in_string = True
                string_char = ch
                result.append(ch)
                i += 1
            elif ch == '/' and i + 1 < len(line) and line[i + 1] == '/':
                # Comment - rest of line
                result.append(line[i:])
                break
            else:
                result.append(ch)
                i += 1
        else:
            if ch == '\\' and i + 1 < len(line) and line[i + 1] in ('"', "'", '\\', 'n', 't', 'r'):
                # Escaped char - keep as is
                result.append(ch)
                result.append(line[i + 1])
                i += 2
            elif ch == string_char:
                # End of string
                in_string = False
                string_char = None
                result.append(ch)
                i += 1
            elif ch == '"' and string_char == '"':
                # Unexcaped double quote inside double-quoted string = inner quote!
                # Check if it's between CJK chars
                prev_c = line[i - 1] if i > 0 else ''
                next_c = line[i + 1] if i + 1 < len(line) else ''
                if is_cjk(prev_c) or is_cjk(next_c):
                    # Inner quote - escape it
                    result.append('\\"')
                    i += 1
                else:
                    # Something else
                    result.append('\\"')
                    i += 1
            else:
                result.append(ch)
                i += 1

    return ''.join(result)

for fname in FILES:
    fpath = os.path.join(SLIDES_DIR, fname)
    if not os.path.exists(fpath):
        print(f'NOT FOUND: {fpath}')
        continue

    with open(fpath, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    new_lines = []
    changed = False
    for line in lines:
        stripped = line.rstrip('\r\n')
        if '"' in stripped and not stripped.startswith('//'):
            new_stripped = parse_and_fix(stripped)
            if new_stripped != stripped:
                line = new_stripped + '\n'
                changed = True
        new_lines.append(line)

    if changed:
        with open(fpath, 'w', encoding='utf-8') as f:
            f.writelines(new_lines)
        print(f'Fixed: {fname}')

print('Done')
