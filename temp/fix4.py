# -*- coding: utf-8 -*-
import re
import ast

with open('gen_pptx_part2.py', encoding='utf-8') as f:
    content = f.read()

lines = content.split('\n')
new_lines = []
fixed_count = 0

for line in lines:
    new_line = line
    # Fix 1: "" at start of value
    new_line = re.sub(r'(, ?)"\"', r'\1"', new_line)
    new_line = re.sub(r'="\"', r'="', new_line)

    # Fix 2: "" at end of value
    new_line = re.sub(r'([一-鿿，。！？、；：\.\?\!a-zA-Z0-9])""(\s*[,)])', r'\1"\2', new_line)

    if new_line != line:
        fixed_count += 1
    new_lines.append(new_line)

new_content = '\n'.join(new_lines)

with open('gen_pptx_part2.py', 'w', encoding='utf-8') as f:
    f.write(new_content)

try:
    ast.parse(new_content)
    print('OK syntax')
    print(f'Fixed {fixed_count} lines')
except SyntaxError as e:
    print(f'SyntaxError: {e}')
    src_lines = new_content.split('\n')
    if e.lineno:
        for i in range(max(0, e.lineno - 2), min(len(src_lines), e.lineno + 2)):
            print(f'  {i+1}: {src_lines[i]}')
