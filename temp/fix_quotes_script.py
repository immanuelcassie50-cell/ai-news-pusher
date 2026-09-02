#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Comprehensive quote fix for expand_ppt.py:
For each line, find single-quoted strings that contain unescaped single quotes inside,
and convert those strings to use double-quote delimiters instead.
"""

import sys

BACKSLASH = chr(92)

with open('expand_ppt.py', 'r', encoding='utf-8') as f:
    content = f.read()

lines = content.split('\n')
fixed_lines = []
fix_count = 0

for i, line in enumerate(lines):
    stripped = line.strip()
    # Skip comments
    if stripped.startswith('#'):
        fixed_lines.append(line)
        continue

    new_chars = []
    j = 0
    in_string = False
    quote_char = None

    while j < len(line):
        c = line[j]
        if not in_string:
            if c in ("'", '"'):
                in_string = True
                quote_char = c
                new_chars.append(c)
                j += 1
            else:
                new_chars.append(c)
                j += 1
        else:
            if c == BACKSLASH:
                new_chars.append(c)
                if j + 1 < len(line):
                    new_chars.append(line[j+1])
                j += 2
            elif c == quote_char:
                # Check if this is a real closing quote
                # Rule: closing quote must be followed by:
                # - End of line
                # - Whitespace + non-quote
                # - One of: , ) ] } : + - * / %
                next_idx = j + 1
                if next_idx >= len(line):
                    # End of line - closing
                    in_string = False
                    quote_char = None
                    new_chars.append(c)
                    j += 1
                else:
                    next_c = line[next_idx]
                    if next_c in ' ,)]}:+-*/%<>!=&|^\t':
                        # Closing quote
                        in_string = False
                        quote_char = None
                        new_chars.append(c)
                        j += 1
                    else:
                        # Inner quote
                        if c == "'":
                            prev = new_chars[-1] if new_chars else ''
                            if prev and (prev.isalpha() or '一' <= prev <= '鿿'):
                                new_chars.append('’')  # right curly
                            else:
                                new_chars.append('‘')  # left curly
                        else:
                            new_chars.append('”')
                        j += 1
            else:
                new_chars.append(c)
                j += 1

    new_line = ''.join(new_chars)
    if new_line != line:
        fix_count += 1
    fixed_lines.append(new_line)

with open('expand_ppt.py', 'w', encoding='utf-8') as f:
    f.write('\n'.join(fixed_lines))

print("Fixed", fix_count, "lines")