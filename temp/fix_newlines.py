# -*- coding: utf-8 -*-
# Fix JSON file: replace raw newlines inside string values with \n escape sequence
# Also ensure any literal backslash-n sequences become proper \n escapes

import json, re

with open('D:/Downloads/xinjian/hangfa-training-proposal/document_outline.json', 'r', encoding='utf-8') as f:
    content = f.read()

# The content has literal \n (backslash + 'n') inside string values
# These appear as two chars: \ and n, which is what JSON expects for \n escape
# But there might also be actual raw newlines (which JSON doesn't allow in strings)
# Let's find and replace raw newlines within string contexts

# Approach: iterate through the string, track when we're inside a JSON string value
# When inside a string, replace any raw newlines with \n escape

fixed_chars = []
i = 0
in_string = False
slash_count = 0  # track consecutive backslashes before current char

while i < len(content):
    c = content[i]

    if c == '"' and (i == 0 or content[i-1] != '\\'):
        # Toggle string context, but need to count preceding backslashes
        in_string = not in_string
        fixed_chars.append(c)
    elif in_string and c == '\n':
        # Raw newline inside string - replace with \n escape
        fixed_chars.append('\\n')
    elif in_string and c == '\\':
        # Backslash in string - track it
        slash_count += 1
        fixed_chars.append(c)
    elif in_string and c != '\\' and c != '"':
        # Any other char in string resets slash count
        slash_count = 0
        fixed_chars.append(c)
    else:
        slash_count = 0
        fixed_chars.append(c)

    i += 1

fixed = ''.join(fixed_chars)
print(f"Fixed content length: {len(fixed)}")

# Validate JSON
try:
    obj = json.loads(fixed)
    print('JSON is VALID!')
    # Write properly formatted JSON back
    with open('D:/Downloads/xinjian/hangfa-training-proposal/document_outline.json', 'w', encoding='utf-8') as f:
        json.dump(obj, f, ensure_ascii=False, indent=2)
    print('File written with proper JSON formatting')
except json.JSONDecodeError as e:
    print(f'Invalid at pos {e.pos}, line {e.lineno}, col {e.colno}: {e.msg}')
    ctx_start = max(0, e.pos - 80)
    ctx_end = min(len(fixed), e.pos + 80)
    print(f'Context: {repr(fixed[ctx_start:ctx_end])}')
