# -*- coding: utf-8 -*-
"""More robust fix: handle ""X"Y"Z"" patterns where strings have embedded quotes."""
import re
import ast

with open('gen_pptx_part2.py', encoding='utf-8') as f:
    content = f.read()

# The bug pattern: tx(s, ..., ""chinese text"", sz=...) should be tx(s, ..., "chinese text", sz=...)
# Inside a tuple, the issue is in tuple string literals that start with "" and end with ""
# Detection: find lines where "" appears inside parens that are likely tx/note calls
# Strategy: parse line by line, identify "..." string literals at the wrong level

lines = content.split('\n')
new_lines = []
fixed_count = 0

for line in lines:
    # Pattern 1: (parens) ""chinese"" (parens/comma/sz=)
    # Match: , ""text"" , or , ""text"" )
    # Replace , "" with , " and "" , with " ,
    new_line = line
    # Multiple iterations to handle nested cases
    for _ in range(5):
        prev = new_line
        # Replace ""X"" with "X" (where X is non-quote)
        # This pattern is the common bug
        new_line = re.sub(r'""([^"]*?)""', r'"\1"', new_line)
        if new_line == prev:
            break
    if new_line != line:
        fixed_count += 1
    new_lines.append(new_line)

new_content = '\n'.join(new_lines)

with open('gen_pptx_part2.py', 'w', encoding='utf-8') as f:
    f.write(new_content)

# Verify
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
