# -*- coding: utf-8 -*-
"""Rebuild gen_pptx_part2.py using line-by-line Python-aware reconstruction.

Strategy: read each append script's code = r'''...''' content.
For each line, identify the function calls and tuples.
Replace any "" (4 quote pattern) at tuple boundaries with " (2 quotes).
Also fix unterminated strings by looking at line structure.
"""
import re
import os
import ast

scripts_in_order = [
    '_append_part2.py',
    '_append2.py', '_append3.py', '_append4.py', '_append5.py',
    '_append6.py', '_append7.py', '_append8.py', '_append9.py',
    '_append10.py', '_append11.py', '_append12b.py',
    '_append13.py', '_append14.py', '_append15.py', '_append16.py',
]

def extract_code(script_path):
    with open(script_path, encoding='utf-8') as f:
        content = f.read()
    m = re.search(r"code = r'''(.*?)'''", content, re.DOTALL)
    return m.group(1) if m else ''

parts = []
for script in scripts_in_order:
    path = os.path.join('D:\\CC\\temp', script)
    if os.path.exists(path):
        code = extract_code(path)
        parts.append(code)

full = ''.join(parts)

# Use a multi-pass approach:
# Pass 1: Find all patterns ""X"" where X has no internal quote
# Pass 2: Find patterns like "X"X" where missing comma+quote between two strings

def fix_pass1(text):
    """Fix ""X"" -> "X" (4 quotes with content -> 2 quotes with content).
    Look for: opening "" (after separator like , ( = space) and closing "" (before separator like , ))."""
    # Find the pattern: separator + "" + content + "" + separator
    # Use a non-greedy match
    # Pattern: ([(=,\s])("")(.*?)("")([,)\s])
    result = re.sub(r'([(=,\s])"\"([^\"]*?)\"\"([,)\s])',
                    lambda m: m.group(1) + '"' + m.group(2) + '"' + m.group(3),
                    text)
    return result

# Pass 1
fixed1 = fix_pass1(full)

# Verify
try:
    ast.parse(fixed1)
    print('Pass 1 OK')
    with open('gen_pptx_part2.py', 'w', encoding='utf-8') as f:
        f.write(fixed1)
    print(f'Saved {len(fixed1)} chars')
except SyntaxError as e:
    print(f'Pass 1 error: line {e.lineno} {e.msg}')
    lines = fixed1.split('\n')
    if e.lineno:
        for i in range(max(0, e.lineno - 3), min(len(lines), e.lineno + 3)):
            print(f'  {i+1}: {lines[i][:200]}')
