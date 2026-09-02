# -*- coding: utf-8 -*-
"""Rebuild gen_pptx_part2.py from clean source - simple approach.

The bug pattern in append scripts:
  Pattern A: , ""TEXT"", (in tuple/arg list)
  Pattern B: = ""TEXT"", (in arg list)
  Pattern C: (""TEXT"", (in tuple start)
  Pattern D: (""TEXT"") (in tuple end)

These should be: , "TEXT",  = "TEXT",  ("TEXT",  ("TEXT")

For each ""TEXT"", we replace with "TEXT".
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

# Use tokenize to parse and fix
import io
import tokenize

# Write to a string buffer for tokenize
src = full

# Try parsing the raw source first
try:
    ast.parse(src)
    print('Source is already valid Python!')
except SyntaxError as e:
    print(f'Original SyntaxError: line {e.lineno} {e.msg}')

# Use tokenize to identify all STRING tokens
# We can then fix doubled quotes within each string literal
# But actually the issue is ""X"" at the lexical level (not within a string)

# Let me just use targeted regex: the bug ""X"" is a 4-char sequence
# where "" opens a (would-be) string, X is non-quote text, "" closes it
# If the original was supposed to be "X", we have:
#   Original: , "X", or , "X")  - 2 quotes
#   Bug:      , ""X"",           - 4 quotes
# The fix: convert ""X"" to "X" (just remove 2 of the 4 quotes)

# Simple regex: find any 4-quote sequence and reduce to 2
# This works because ""X"" (4 consecutive quotes with content in middle) is the bug

def fix_simple(text):
    """Convert ""X"" to "X" where X has no quote."""
    # Pattern: "" followed by non-quote chars, then ""
    # Use a state-aware regex
    # First, find all 4+ quote sequences with content
    result = []
    i = 0
    n = len(text)
    while i < n:
        if text[i] == '"':
            # Count consecutive quotes
            q_count = 0
            j = i
            while j < n and text[j] == '"':
                q_count += 1
                j += 1
            # j is now at first non-quote
            # If q_count is 2, check if there's another 2 later
            if q_count == 2 and j < n and text[j] != '"':
                # Find next content
                k = j
                while k < n and text[k] != '"':
                    k += 1
                # k is at next quote
                if k < n - 1 and text[k] == '"' and text[k+1] == '"':
                    # Check what comes after
                    m = k + 2
                    while m < n and text[m] in ' \t':
                        m += 1
                    if m < n and text[m] in ',)':
                        # This is ""X"" - reduce to "X"
                        result.append('"')
                        result.append(text[j:k])
                        result.append('"')
                        i = k + 2
                        continue
            # Default: just emit the quotes
            for _ in range(q_count):
                result.append('"')
            i = j
        else:
            result.append(text[i])
            i += 1
    return ''.join(result)

fixed = fix_simple(full)

try:
    ast.parse(fixed)
    print('OK syntax')
    with open('gen_pptx_part2.py', 'w', encoding='utf-8') as f:
        f.write(fixed)
    print('Saved')
except SyntaxError as e:
    print(f'SyntaxError: line {e.lineno} {e.msg}')
    lines = fixed.split('\n')
    if e.lineno:
        for i in range(max(0, e.lineno - 3), min(len(lines), e.lineno + 3)):
            print(f'  {i+1}: {lines[i][:200]}')
