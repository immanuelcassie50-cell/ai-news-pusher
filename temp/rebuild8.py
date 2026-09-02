# -*- coding: utf-8 -*-
"""Use Python's tokenize module to identify string boundaries, then fix doubled quotes."""
import re
import os
import ast
import tokenize
import io

scripts_in_order = [
    '_append_part2.py', '_append2.py', '_append3.py', '_append4.py', '_append5.py',
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
    path = 'D:/CC/temp/' + script
    if os.path.exists(path):
        code = extract_code(path)
        parts.append(code)

full = ''.join(parts)

# Approach: use tokenize to find all STRING tokens
# But first, we need valid Python to tokenize
# Since the file is invalid, we need to add quoting around any unquoted content

# Alternative: use a simple tokenizer-like parser
# For each line, find string literals using a simple state machine
# Track when we're inside a string

def parse_lines(text):
    """Yield (line_no, line_content, in_string) tuples."""
    lines = text.split('\n')
    in_string = False
    for i, line in enumerate(lines):
        yield i + 1, line, in_string
        # Check if line has odd number of unescaped quotes
        # (rough heuristic)
        count = 0
        j = 0
        while j < len(line):
            if line[j] == '\\':
                j += 2
            elif line[j] == '"':
                count += 1
                j += 1
            else:
                j += 1
        if count % 2 == 1:
            in_string = not in_string

# Step 1: write the content to a file and try to compile
# Use compile with mode='exec' to get tokenization
# But we can't tokenize invalid Python. So let's do it manually.

# Smart fix: find every occurrence of "" in the source (4 consecutive quotes)
# In valid Python, "" (4 quotes in a row) is actually "" + "" = two empty strings
# but in our buggy source, ""X"" (5 chars: ", ", X, ", ") is the bug
# We want to convert ""X"" to "X"

# Let me try a simpler approach: assume every ""X"" with non-empty X
# (where X has no internal quote) is a bug to fix

# Pattern: "" followed by 1+ non-quote chars, then ""
# Replace with: " + content + "

# To avoid matching legitimate "" (empty string adjacent), check that X is non-empty
# and the surrounding context is in a function call / tuple

fixed = re.sub(r'""([^"\n]{1,2000}?)""', r'"\1"', full)

# Verify
try:
    ast.parse(fixed)
    print('OK syntax')
    with open('gen_pptx_part2.py', 'w', encoding='utf-8') as f:
        f.write(fixed)
    print(f'Saved {len(fixed)} chars, {fixed.count(chr(10))} lines')
except SyntaxError as e:
    print(f'SyntaxError: line {e.lineno} {e.msg}')
    lines = fixed.split('\n')
    if e.lineno:
        for i in range(max(0, e.lineno - 3), min(len(lines), e.lineno + 3)):
            print(f'  {i+1}: {lines[i][:300]}')
