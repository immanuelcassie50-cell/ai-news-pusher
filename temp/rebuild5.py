# -*- coding: utf-8 -*-
"""Rebuild gen_pptx_part2.py from clean source.

Strategy: Read each append script. The code within r'''...''' is Python source.
The ""X"" pattern in source code is a SYNTAX BUG. The original was supposed to
be "X" but the writer wrote ""X"". We need to fix this to "X" only at
tuple/call boundaries.

The bug pattern: ", ""TEXT"" ," or " ""TEXT"" " (TEXT in doubled quotes)
Should be: ", "TEXT" ," or " "TEXT" "
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

# Read all parts
parts = []
for script in scripts_in_order:
    path = os.path.join('D:\\CC\\temp', script)
    if os.path.exists(path):
        code = extract_code(path)
        parts.append(code)
        print(f'Loaded {script}: {len(code)} chars')

full = ''.join(parts)
print(f'Total: {len(full)} chars, {full.count(chr(10))} lines')

# The ""X"" bug - in a function call like tx(s, "TEXT", sz=18), if the writer
# accidentally wrote ""TEXT"", that's a Python syntax error. The fix is "TEXT".
# But we must be careful: "X", "Y" is two strings, also valid Python.
# The bug specifically is: ""X"" should be "X"
# (Note: "X"X" - text-quote-text - is also a bug, should be "X", "X")

# Step 1: Fix ""X"" -> "X" (4 quotes -> 2 quotes)
# Pattern: "" followed by non-quote, then "", then separator
# Use a state-aware approach
def fix_doubled_quotes(text):
    """Fix ""X"" -> "X" where X contains no quote."""
    # In source code like tx(s, ""TEXT"", sz=18), we have:
    # , ""TEXT"",
    # The pattern: , "" (or =, or (), or space) followed by TEXT, then "", followed by , or )
    # We can use: find "" ... "" where the inner content has no quote
    result = []
    i = 0
    n = len(text)
    while i < n:
        ch = text[i]
        if ch == '"' and i + 1 < n and text[i+1] == '"':
            # Check context: previous char is not backslash, and we have a string context
            if i > 0 and text[i-1] == '\\':
                result.append('"')
                i += 1
                continue
            # Look for matching close
            j = i + 2
            while j < n - 1:
                if text[j] == '"' and text[j+1] == '"':
                    # Check what comes after
                    k = j + 2
                    while k < n and text[k] in ' \t':
                        k += 1
                    if k < n and text[k] in ',)':
                        # Found ""X"" pattern - replace with "X"
                        result.append('"')
                        # Find original start
                        start = i + 2
                        # If there are characters between i+2 and j that are not quotes, copy them
                        # But also handle if they contain other ""
                        result.append(text[start:j])
                        result.append('"')
                        i = j + 2
                        break
                    else:
                        # Not a closing - just skip one quote
                        j += 2
                else:
                    j += 1
            else:
                # No match found, treat as orphan
                result.append('"')
                i += 2
        else:
            result.append(ch)
            i += 1
    return ''.join(result)

fixed = fix_doubled_quotes(full)
print(f'After fix: {len(fixed)} chars')

# Step 2: Fix "X"Y" -> "X", "Y" (text-quote-text pattern)
# This happens when the original was "X", "Y" but lost the comma+quote
# Specifically: "X"——Y" or "X"…Y" or "X"y"
# We look for: quote, content, quote, content, quote (no separator between)
# Should be: "X", "Y" or "X" Y "Y"  (just missing a separator)
def fix_missing_comma(text):
    """Fix pattern: "X"Y" -> "X", "Y"."""
    # Pattern: " (some content with no internal ") " (some content with no internal ") "
    # We look for: "X"X"X" pattern
    result = []
    i = 0
    n = len(text)
    # This is tricky. The pattern: ...", "X"text", "Y"... where text is non-quote
    # e.g., '"X"text"Y"' - text is non-quote, and we want '"X", "textY"'
    # Actually: '"X""' should be '", "'
    # So: find patterns where "" appears in the middle of an unquoted region
    # E.g., 'X"X"X' - the first " starts a string, the second " ends it, then X is unquoted
    # But we need a string boundary
    while i < n:
        ch = text[i]
        if ch == '"' and i > 0 and i + 1 < n:
            # Look back to see if we're inside a string
            # If previous char is " or = or comma-space, this is opening
            prev = text[i-1]
            if prev in '=,( \t':
                # Opening quote
                result.append('"')
                i += 1
            elif prev in '"\'':
                # Previous was closing - this is opening of new string
                result.append('"')
                i += 1
            else:
                # Inside a string or in middle of text
                result.append(ch)
                i += 1
        else:
            result.append(ch)
            i += 1
    return ''.join(result)

# Skip step 2 for now
final = fixed

# Verify
try:
    ast.parse(final)
    print('OK syntax')
    # Also extract just the function definitions and add a header
    # But for now, save as-is
    with open('gen_pptx_part2.py', 'w', encoding='utf-8') as f:
        f.write(final)
    print('Saved')
except SyntaxError as e:
    print(f'SyntaxError: {e}')
    lines = final.split('\n')
    if e.lineno:
        for i in range(max(0, e.lineno - 3), min(len(lines), e.lineno + 3)):
            print(f'  {i+1}: {lines[i][:200]}')
