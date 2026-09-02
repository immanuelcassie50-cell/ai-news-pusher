import os
import re

slides_dir = r"D:/新课开发/企业大学/对内/1.企业大学重生：从内训中心到知识资产与智能体孵化枢纽的角色转型/PPT演示文稿/slides"

# This script specifically fixes slide-29.js line 45 and similar patterns

def fix_embedded_quotes(content):
    """Fix addText calls where inner quotes break JS parsing."""
    lines = content.split('\n')
    fixed_lines = []
    changes = 0

    for i, line in enumerate(lines):
        if 'addText' not in line:
            fixed_lines.append(line)
            continue

        original = line

        # Find patterns like: addText('text with 'embedded' quotes', {...})
        # where single quotes inside are used as Chinese quotation marks

        # Pattern: look for addText followed by a single-quoted string with embedded single quotes
        # We'll use regex to find and fix this

        # Match: slide.addText('...', {...)
        # where the content between the outer single quotes contains unescaped single quotes

        # Regex: slide\.addText\('([^']*)',\s*\{
        # But the issue is when the string itself has embedded quotes that break parsing

        # Simple approach: find addText(' and then look for problematic patterns
        # Replace ' used as Chinese quotes with 「 and 」

        # Pattern: find ' used inside a string where it looks like a Chinese quote
        # Chinese quotes typically appear around Chinese text: '中文' or "中文"

        # Replace ' (single quote) that appears to be a Chinese open/close quote
        # with corner brackets 「」 which won't break JS

        # Heuristic: if a ' is preceded by a Chinese character, it's a closing Chinese quote
        # if a ' is followed by a Chinese character, it's an opening Chinese quote

        new_line = line
        line_bytes = line.encode('utf-8')

        # We'll do a byte-level approach to be safe
        # Find all positions of single quotes and analyze context

        positions = []
        for j, c in enumerate(line):
            if c == "'":
                positions.append(j)

        # If we have odd number of single quotes or 4+ single quotes, likely broken
        if len(positions) % 2 != 0 or len(positions) >= 4:
            # Try to fix by identifying which quotes are string delimiters vs content
            # String starts at positions[0], ends before positions[1], etc.

            # Build new line by fixing embedded quotes
            # Strategy: switch to double quotes for the outer string if there are embedded singles

            if len(positions) >= 4:
                # Find pairs - first pair is outer string, remaining are embedded
                # For slide.addText('content', {options})
                # positions[0] = opening delimiter
                # positions[1] = first content quote
                # positions[2] = second content quote
                # positions[3] = closing delimiter

                # Actually, the structure is: addText('string content', {options})
                # positions[0] = after addText( - opening delimiter
                # positions[1..n-1] = embedded quotes (Chinese quotes)
                # positions[n] = closing delimiter

                # If positions[0] and positions[-1] form the outer string,
                # and positions[1:-1] are embedded Chinese quotes

                # The embedded quotes should be replaced
                outer_open = positions[0]
                outer_close = positions[-1]

                # Content between positions is what we need to check
                # If content between any inner pair contains only Chinese text, those are Chinese quotes

                # For simplicity, let's just escape all single quotes in the content
                # by replacing the outer quotes with backticks or double quotes

                # Find the first comma after the string to determine string end
                string_end_comma = line.find(',', positions[0])
                if string_end_comma != -1 and string_end_comma > positions[-1]:
                    # The outer string is from positions[0] to positions[-1]+1
                    # Content is positions[0]+1 to positions[-1]
                    # We need to escape any single quotes in that range

                    before = line[:positions[0]]  # slide.addText(
                    string_content = line[positions[0]+1:positions[-1]]  # content (without outer quotes)
                    after = line[positions[-1]+1:]  # , {options})

                    # In string_content, replace any remaining single quotes with escaped version
                    # But also replace Chinese double quotes with something safe
                    string_content = string_content.replace('"', '\\"')

                    # Rebuild with double quotes
                    new_line = before + '"' + string_content + '"' + after

        if new_line != original:
            changes += 1
            print(f'Line {i+1}: {repr(original[:80])}')
            print(f'  -> {repr(new_line[:80])}')
            print()

        fixed_lines.append(new_line)

    return '\n'.join(fixed_lines), changes

for f in sorted(os.listdir(slides_dir)):
    if f.startswith('slide-') and f.endswith('.js'):
        path = os.path.join(slides_dir, f)
        with open(path, 'r', encoding='utf-8') as file:
            content = file.read()

        new_content, changes = fix_embedded_quotes(content)
        if changes > 0:
            with open(path, 'w', encoding='utf-8') as file:
                file.write(new_content)
            print(f'Fixed {changes} lines in {f}')