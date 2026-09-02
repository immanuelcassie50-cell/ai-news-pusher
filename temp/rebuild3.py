# -*- coding: utf-8 -*-
"""Merge P14-P20 (from current file) with P21-P130 (from append scripts)."""
import re
import os
import ast

# Read current file
with open('gen_pptx_part2.py', encoding='utf-8') as f:
    current = f.read()

# Find where P21 starts
match = re.search(r'^def P21\(\):', current, re.MULTILINE)
if not match:
    print('No P21 in current file')
    exit(1)
initial = current[:match.start()]
print(f'Initial (P14-P20): {len(initial)} chars, {initial.count(chr(10))} lines')

# Read P21-P130 from append scripts
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

parts = [initial]
for script in scripts_in_order:
    if os.path.exists(script):
        code = extract_code(script)
        parts.append(code)

full = ''.join(parts)

# Now fix the "" issue.
# Apply targeted fix: "X"X" -> "X"X" (X is one or more non-quote chars)
# Specifically: in a Python string literal, " followed by " (no escape) means end+start,
# which is invalid. So ""X"" should be "X".

def fix_quotes_targeted(text):
    """Fix only the specific ""X"" pattern where X is non-quote chars."""
    # Find all instances of "" followed by non-quote, then "", then comma/paren
    # Pattern: "" not preceded by a backslash, not inside a multi-line string
    # We'll use a simple character-by-character scan

    result = []
    i = 0
    n = len(text)
    while i < n:
        ch = text[i]
        if ch == '"' and i + 1 < n and text[i+1] == '"':
            # Look back: was previous char a quote or backslash?
            if i > 0 and text[i-1] == '\\':
                result.append('"')
                i += 1
                continue
            # Look ahead: is this " the start of a new "" pattern?
            # A real doubled-quote-in-source situation is rare; treat as bug
            # Skip the second quote
            result.append('"')
            i += 2
        else:
            result.append(ch)
            i += 1
    return ''.join(result)

fixed = fix_quotes_targeted(full)

# Verify
try:
    ast.parse(fixed)
    print('OK syntax')
    with open('gen_pptx_part2.py', 'w', encoding='utf-8') as f:
        f.write(fixed)
    print(f'Saved {len(fixed)} chars, {fixed.count(chr(10))} lines')
except SyntaxError as e:
    print(f'SyntaxError: {e}')
    src_lines = fixed.split('\n')
    if e.lineno:
        for i in range(max(0, e.lineno - 3), min(len(src_lines), e.lineno + 3)):
            print(f'  {i+1}: {src_lines[i]}')
