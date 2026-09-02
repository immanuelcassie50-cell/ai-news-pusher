# -*- coding: utf-8 -*-
import os

slides_dir = r"D:\新课开发\2026核心课\技控-绩效改进\完整课程包\02-授课PPT\slides"

for fname in ['slide-109.js', 'slide-116.js']:
    fpath = os.path.join(slides_dir, fname)
    with open(fpath, 'rb') as f:
        data = f.read()

    original = data

    # Line 36 of slide-109: desc: "不是我"学习AI",而是"解决某个业务问题"",
    # The inner " quotes around Chinese text need to be escaped
    # Pattern: look for desc: "text"moretext"moretext",
    # and escape the inner quotes

    # Strategy: decode, then for each line with a desc: or similar field
    # Find patterns where ASCII " appears inside a JS string value
    # We do this by counting quotes - odd-numbered inner quotes get escaped

    text = data.decode('utf-8', errors='replace')

    lines = text.split('\n')
    new_lines = []
    for line in lines:
        # Check if this line has the problematic pattern (ASCII " inside JS string)
        if not ('desc:' in line or 'title:' in line) or '\\u' in line or '\\"' in line:
            new_lines.append(line)
            continue

        # Count how many " we have in this segment of the line
        # We want to escape inner quotes but not the first or last
        # Simple approach: find the value between the first and last "
        # and escape any " inside those bounds

        # Find lines like: key: "value with "inner" quotes",
        # We process from the first unescaped " after : or =
        new_line = ''
        i = 0
        in_string = False
        first_quote_pos = -1

        while i < len(line):
            ch = line[i]

            if ch == '"' and not in_string:
                # Entering a string
                in_string = True
                first_quote_pos = len(new_line)
                new_line += ch
            elif ch == '"' and in_string:
                # Check if this is the closing quote or an inner quote
                # Count remaining unescaped " in the rest of the line
                rest = line[i+1:]
                remaining = rest.count('"') - rest.count('\\"')

                if remaining > 0:
                    # This is an inner quote - escape it
                    new_line += '\\"'
                else:
                    # This is the closing quote
                    in_string = False
                    new_line += ch
            else:
                new_line += ch

            i += 1

        line = new_line
        new_lines.append(line)

    text = '\n'.join(new_lines)
    data = text.encode('utf-8')

    if data != original:
        with open(fpath, 'wb') as f:
            f.write(data)
        print(f'Fixed: {fname}')
    else:
        print(f'No change: {fname}')
