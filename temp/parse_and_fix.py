# -*- coding: utf-8 -*-
# Strategy: load JSON allowing raw newlines (pre-process), then re-serialize properly

import re

with open('D:/Downloads/xinjian/hangfa-training-proposal/document_outline.json', 'r', encoding='utf-8') as f:
    content = f.read()

# Remove all raw newlines that appear inside string values by:
# 1. Find all string values (content between unescaped double quotes)
# 2. Within those, replace raw newlines with \n escape
# This is complex to do correctly with regex...

# Alternative: use a simple state machine to process character by character
# Track whether we're inside a string, handle escape sequences

fixed_chars = []
i = 0
in_string = False
pending_slash = False  # if True, we saw a backslash and next char determines escape

while i < len(content):
    c = content[i]

    if not in_string:
        # Outside string - just looking for string start
        if c == '"' and (i == 0 or content[i-1] != '\\'):
            in_string = True
            fixed_chars.append(c)
        elif c == '\\':
            # Backslash outside string (shouldn't happen in valid JSON, but handle)
            fixed_chars.append(c)
        elif c == '\n':
            # Raw newline outside string - skip or replace with space
            fixed_chars.append(c)
        else:
            fixed_chars.append(c)
    else:
        # Inside string
        if pending_slash:
            # Previous char was backslash, this char is the escaped char
            fixed_chars.append(c)
            pending_slash = False
        elif c == '\\':
            fixed_chars.append(c)
            pending_slash = True
        elif c == '"':
            # Check if this is an unescaped quote (not preceded by odd backslashes)
            # Count preceding backslashes
            num_bs = 0
            j = i - 1
            while j >= 0 and content[j] == '\\':
                num_bs += 1
                j -= 1
            if num_bs % 2 == 0:
                # Unescaped quote - end of string
                in_string = False
                fixed_chars.append(c)
            else:
                # Escaped quote - part of string content
                fixed_chars.append(c)
        elif c == '\n':
            # Raw newline inside string - replace with \n escape
            fixed_chars.append('\\n')
        else:
            fixed_chars.append(c)

    i += 1

fixed = ''.join(fixed_chars)

# Validate
import json
try:
    obj = json.loads(fixed)
    print('JSON is VALID!')
    with open('D:/Downloads/xinjian/hangfa-training-proposal/document_outline.json', 'w', encoding='utf-8') as f:
        json.dump(obj, f, ensure_ascii=False, indent=2)
    print('File written successfully')
except json.JSONDecodeError as e:
    print(f'Invalid at pos {e.pos}, line {e.lineno}, col {e.colno}: {e.msg}')
    ctx_start = max(0, e.pos - 100)
    ctx_end = min(len(fixed), e.pos + 100)
    print(f'Context: {repr(fixed[ctx_start:ctx_end])}')
