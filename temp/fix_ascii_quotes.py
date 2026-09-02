# -*- coding: utf-8 -*-
import os, re

slides_dir = r"D:\新课开发\2026核心课\技控-绩效改进\完整课程包\02-授课PPT\slides"

for fname in ['slide-109.js', 'slide-116.js', 'slide-41.js', 'slide-42.js', 'slide-43.js']:
    fpath = os.path.join(slides_dir, fname)
    if not os.path.exists(fpath):
        print(f'Skipping {fname} - not found')
        continue

    with open(fpath, 'rb') as f:
        data = f.read()

    original = data

    # Strategy: read as text with surrogateescape, find desc/title/etc lines
    # with unescaped ASCII quotes inside JS strings, and escape them
    text = data.decode('utf-8', errors='surrogateescape')

    # For each line containing desc:" or title:" patterns with embedded quotes
    # We need to escape inner double quotes that appear inside a JS string value
    #
    # Pattern: a JS string like "text with "embedded" quotes" where the inner
    # quotes are not escaped. We fix by escaping them.
    #
    # Simple approach: replace patterns like :"..."  where ... contains unescaped "
    # by escaping the inner quotes

    lines = text.split('\n')
    new_lines = []
    for line in lines:
        # Find JS string values that contain unescaped double quotes inside
        # We look for patterns like: key: "...text "more" here...",
        # where there are unescaped " inside the string

        # Replace the pattern: any " that appears inside a string value
        # (after : or = or ( and is preceded by content and followed by content)
        # We'll just escape ALL " that are between opening and closing quotes
        # of a JS string value, EXCEPT the first and last of the string

        if ':"' in line or 'desc:' in line or 'title:' in line or 'text:' in line:
            # Find the pattern more carefully
            # We want to find string values and escape inner quotes
            result = ''
            i = 0
            while i < len(line):
                if line[i] == '"':
                    # Check if this is an inner quote (not the first or last)
                    # Find the enclosing string boundaries
                    # Simple heuristic: if we're inside a string and see ",
                    # and there are more " later, this is an inner quote
                    result += '\\"'
                else:
                    result += line[i]
                i += 1
            line = result

        new_lines.append(line)

    text = '\n'.join(new_lines)
    data = text.encode('utf-8', errors='surrogateescape')

    if data != original:
        with open(fpath, 'wb') as f:
            f.write(data)
        print(f'Fixed: {fname}')
    else:
        print(f'No change: {fname}')
