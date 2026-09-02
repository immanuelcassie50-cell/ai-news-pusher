# -*- coding: utf-8 -*-
"""Rebuild gen_pptx_part2.py: take P14-P20 from a previous backup (or skip them),
then P21-P130 from append scripts.

Strategy: use exec() to parse each append script and extract the function bodies,
then write them in correct Python format.
"""
import re
import os
import ast

# Initial P14-P20 content: re-derive from a clean source
# Since they're not available, we'll skip them and have 130-7=123 pages
# Actually, let me try to extract from the broken file using a forgiving parser

def extract_function_definitions(script_path):
    """Extract P function definitions from an _append_NN.py script."""
    with open(script_path, encoding='utf-8') as f:
        content = f.read()
    # Find code = r'''...''' section
    m = re.search(r"code = r'''(.*?)'''", content, re.DOTALL)
    if not m:
        return ''
    return m.group(1)

scripts_in_order = [
    '_append_part2.py',
    '_append2.py', '_append3.py', '_append4.py', '_append5.py',
    '_append6.py', '_append7.py', '_append8.py', '_append9.py',
    '_append10.py', '_append11.py', '_append12b.py',
    '_append13.py', '_append14.py', '_append15.py', '_append16.py',
]

# Build the file by extracting content from each script
# But first, the content inside r'''...''' IS the content as a string literal
# So if we extract it as Python code, we need to handle:
# 1. The "" bug - "" should be " in the original Python code
# 2. Special characters that may have been escaped

# The append script content is intended to be a Python source code fragment
# So we need to convert it back to valid Python

# Strategy: parse the string content as if it were Python source
# The "" patterns: "X" -> "X" (just remove the doubled)
# But if X contains an actual " (escape), it would be \\" - we should preserve

# Let me try: replace "" with " if it's not preceded/followed by \
# Actually, since r''' preserves everything literally, the "" in the source is
# already a problem with Python string syntax. The original writer likely meant
# to write " but accidentally wrote "".

# Let me try a different approach: replace ""X"" -> "X" iteratively but only
# when both ends look like string boundaries (i.e., X doesn't have " inside)

# Build full content
parts = []
for script in scripts_in_order:
    if os.path.exists(script):
        code = extract_function_definitions(script)
        parts.append(code)
        print(f'Loaded {script}: {len(code)} chars')

full_content = ''.join(parts)

# Fix: "..." -> "...", with care
def fix_quotes_v2(text):
    """Find "..." patterns and reduce to "..." if not escaped.
    Specifically, find " (a quote) followed by " (another quote, NOT at end of string)
    and reduce to a single " if the previous char is not a backslash.
    """
    result = []
    i = 0
    n = len(text)
    while i < n:
        ch = text[i]
        if ch == '"':
            # Check if next char is also " (and not escaped)
            if i + 1 < n and text[i+1] == '"':
                # Check if previous is backslash
                if i > 0 and text[i-1] == '\\':
                    result.append('"')
                    i += 1
                    continue
                # Skip one of the two
                result.append('"')
                i += 2
            else:
                result.append('"')
                i += 1
        else:
            result.append(ch)
            i += 1
    return ''.join(result)

# Wait - this is what I did before. The issue is that fixing the
# doubled quotes loses the comma between two strings: "a" "b" -> "a b"
# We need to preserve the structure

# Better approach: parse the content character by character with a state machine
# Track if we're inside a string, and only then handle quotes

def fix_quotes_state_machine(text):
    result = []
    i = 0
    n = len(text)
    in_string = False
    string_start = -1

    while i < n:
        ch = text[i]

        if not in_string:
            if ch == '"':
                in_string = True
                string_start = i
                result.append('"')
                i += 1
            else:
                result.append(ch)
                i += 1
        else:
            # We're inside a string
            if ch == '"':
                # Check if this is the end of the string OR a doubled quote
                # Look ahead: if next non-whitespace char is "," ")" or other
                # string-separator, this is end of string
                j = i + 1
                while j < n and text[j] in ' \t':
                    j += 1
                if j < n and text[j] in ',)':
                    # End of string
                    in_string = False
                    result.append('"')
                    i += 1
                elif j < n and text[j] == '"':
                    # Doubled quote - skip the second
                    i += 1
                else:
                    # Could be end of string followed by something else
                    # Just close the string
                    in_string = False
                    result.append('"')
                    i += 1
            else:
                result.append(ch)
                i += 1

    return ''.join(result)

# Actually, this is too complex. Let me try a different approach:
# Just process line by line. For each line, if it contains "" but is otherwise
# valid Python syntax, apply the fix.

# For each line, if "" appears in tx(s, ... ""xxx"" ...) or note(s, ""xxx""),
# fix it to "xxx"

def fix_line(line):
    # Pattern: in a function call or tuple, ""TEXT"" -> "TEXT"
    # We look for: , ""...pattern..." or =""...pattern...""
    # The pattern is: at least one whitespace, =, (, or , before "",
    # and at least one whitespace, ,, ), or ; after ""

    # Simpler: find all "" that are not at the start/end of a line
    # and that are preceded by non-quote and followed by non-quote

    # Most specific: "" followed by chinese chars, then "" before , or )
    # Pattern: ([非引号字符])""([一-鿿]+)""([\s,\)])
    line2 = re.sub(r'([^\s"\'])""([一-鿿，。、！？\s]+)""(\s*[,)])', r'\1"\2"\3', line)
    return line2

# Apply line by line
lines = full_content.split('\n')
fixed_lines = [fix_line(l) for l in lines]
fixed = '\n'.join(fixed_lines)

# Try to parse
try:
    ast.parse(fixed)
    print('OK syntax after fix')
    with open('gen_pptx_part2.py', 'w', encoding='utf-8') as f:
        f.write(fixed)
    print('Saved')
except SyntaxError as e:
    print(f'SyntaxError: {e}')
    src_lines = fixed.split('\n')
    if e.lineno:
        for i in range(max(0, e.lineno - 3), min(len(src_lines), e.lineno + 3)):
            print(f'  {i+1}: {src_lines[i]}')
