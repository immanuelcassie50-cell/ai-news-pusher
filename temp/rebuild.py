# -*- coding: utf-8 -*-
"""Rebuild gen_pptx_part2.py by:
1. Reading P14-P20 (and any initial) from the broken file
2. Reading P21-P130 from append scripts in order
3. Applying minimal quote fix: only fix "..." -> ... -> "... pairs where they're adjacent
"""
import re
import os
import ast

# Initial content (P14-P20) - extract from current broken file
with open('gen_pptx_part2.py', encoding='utf-8') as f:
    current = f.read()

# Find the P21 def line
match = re.search(r'^def P21\(\):', current, re.MULTILINE)
if not match:
    print('No P21 found')
    exit(1)
initial = current[:match.start()]

# Verify initial has P14-P20
for n in range(14, 21):
    if f'def P{n}():' not in initial:
        print(f'P{n} not found in initial')

# Now read P21-P130 from append scripts in order
# Each script has code = r'''...''' with function defs
# Extract the content between r''' and '''
def extract_code(script_path):
    with open(script_path, encoding='utf-8') as f:
        content = f.read()
    # Find code = r''' ... '''
    m = re.search(r"code = r'''(.*?)'''", content, re.DOTALL)
    if m:
        return m.group(1)
    return ''

# Order: _append_part2.py first (P21-P28)
# Then _append2.py through _append16.py in order
scripts_in_order = [
    '_append_part2.py',  # P21-P28
    '_append2.py',       # P29-P35
    '_append3.py',       # P36-P45
    '_append4.py',       # P46-P53
    '_append5.py',       # P54-P60
    '_append6.py',       # P61-P67
    '_append7.py',       # P68-P73
    '_append8.py',       # P74-P80
    '_append9.py',       # P81-P86
    '_append10.py',      # P87-P90
    '_append11.py',      # P91-P97
    '_append12b.py',     # P98-P100
    '_append13.py',      # P101-P106
    '_append14.py',      # P107-P112
    '_append15.py',      # P113-P118
    '_append16.py',      # P119-P130
]

combined = initial
for script in scripts_in_order:
    if os.path.exists(script):
        code = extract_code(script)
        combined += code
        print(f'Added {script}: {len(code)} chars')
    else:
        print(f'MISSING: {script}')

# Apply MINIMAL fix: only fix the specific ""X"" pattern where X is non-quote
# But carefully: only when "" appears as a string boundary, not as part of legitimate text

# Strategy: in a tx() call, the format is:
#   tx(s, Inches(x), Inches(y), ..., "TEXT", sz=NN, c=COLOR, b=BOOL)
# The bug is "TEXT" should be "TEXT" but was written as ""TEXT""
# Same for note() and tuple entries
# We need to fix: "TEXT" -> "TEXT" but NOT "TEXT" TEXT "TEXT" -> "TEXT" TEXT "TEXT"

# Approach: find every "" that has non-quote chars on both sides
# and reduce to single "
def fix_doubled_quotes(text):
    # Iterate: any "" adjacent to non-quote becomes "
    # We do this carefully: only when "" is followed by a non-quote char (and same on both sides)
    result = []
    i = 0
    n = len(text)
    while i < n:
        if i + 1 < n and text[i] == '"' and text[i+1] == '"':
            # Check if this is a doubled quote (suspicious)
            # The previous char should be a non-quote (e.g., space, paren, comma, =)
            # The next char (after the "") should be a non-quote
            prev_ch = text[i-1] if i > 0 else ' '
            next_ch = text[i+2] if i + 2 < n else ' '
            if prev_ch != '"' and next_ch != '"':
                # Replace with single "
                result.append('"')
                i += 2
                continue
        result.append(text[i])
        i += 1
    return ''.join(result)

# Apply fix
fixed = fix_doubled_quotes(combined)

# Verify
try:
    ast.parse(fixed)
    print('OK syntax')
except SyntaxError as e:
    print(f'SyntaxError: {e}')
    src_lines = fixed.split('\n')
    if e.lineno:
        for i in range(max(0, e.lineno - 3), min(len(src_lines), e.lineno + 3)):
            print(f'  {i+1}: {src_lines[i]}')

# Save
with open('gen_pptx_part2.py', 'w', encoding='utf-8') as f:
    f.write(fixed)

print(f'Total lines: {len(fixed.split(chr(10)))}')
print(f'Total chars: {len(fixed)}')
