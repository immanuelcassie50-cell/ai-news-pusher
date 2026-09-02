# -*- coding: utf-8 -*-
"""Smart fix: handle two cases of "X" bugs in append scripts.

Case 1: ""X"" (4-quote pattern with X in middle) - in tuples/function args
  Fix: Replace with "X" (remove 2 of the 4 quotes)

Case 2: "X" inside a string (legitimate Chinese text uses "X" but the source
  has ASCII straight quotes) - the writer meant to use Chinese curly quotes
  but typed ASCII. Fix: Replace inner "X" with full-width "X" (U+201C / U+201D).

Strategy:
- For each line, count quote positions
- Identify the OUTERMOST string boundaries (Python string syntax)
- Within those boundaries, convert any inner "X" to curly Chinese quotes
"""
import re
import os

files = ['_append3.py', '_append_part2.py', '_append2.py', '_append4.py', '_append5.py',
    '_append6.py', '_append7.py', '_append8.py', '_append9.py',
    '_append10.py', '_append11.py', '_append12b.py',
    '_append13.py', '_append14.py', '_append15.py', '_append16.py']

def fix_line(line):
    """Fix a single line of Python source.

    Approach: parse character-by-character, tracking if we're inside a string.
    When we encounter a string, we close it. Inside the string, we convert
    any " to Chinese curly quote.
    """
    result = []
    i = 0
    n = len(line)
    in_string = False
    string_buf = []
    # Phase 1: identify string boundaries
    # A string starts with " and ends with " (with no escape)
    while i < n:
        ch = line[i]
        if not in_string:
            if ch == '"':
                in_string = True
                string_buf = ['"']
                i += 1
            else:
                result.append(ch)
                i += 1
        else:
            # Inside a string
            if ch == '\\':
                # Escape sequence
                if i + 1 < n:
                    string_buf.append(ch)
                    string_buf.append(line[i+1])
                    i += 2
                else:
                    string_buf.append(ch)
                    i += 1
            elif ch == '"':
                # Could be end of string OR inner quote
                # Look ahead: if next non-whitespace char is , ) etc, this is end
                j = i + 1
                while j < n and line[j] in ' \t':
                    j += 1
                if j < n and line[j] in ',)':
                    # End of string
                    string_buf.append('"')
                    result.append(''.join(string_buf))
                    in_string = False
                    string_buf = []
                    i += 1
                else:
                    # Inner quote - convert to Chinese curly quote
                    # Use 「」 style or " " (curly)
                    # Determine if opening or closing based on context
                    # Simple heuristic: if previous char is Chinese/punct, use closing
                    # Otherwise opening
                    prev_chars = ''.join(string_buf)
                    if prev_chars and prev_chars[-1] in ' \t\n（(【[':
                        string_buf.append('“')  # opening "
                    elif prev_chars and prev_chars[-1] in '，。！？；：）)】】':
                        string_buf.append('”')  # closing "
                    else:
                        # Default: use closing for any subsequent quote
                        string_buf.append('”')
                    i += 1
            else:
                string_buf.append(ch)
                i += 1

    # If still in string at end of line, close it
    if in_string:
        string_buf.append('"')
        result.append(''.join(string_buf))

    return ''.join(result)

# Process each file
for f in files:
    p = 'D:/CC/temp/' + f
    with open(p, encoding='utf-8') as fh:
        content = fh.read()
    lines = content.split('\n')
    new_lines = []
    # Track multi-line string state
    in_string = False
    string_buf = []
    for line in lines:
        if in_string:
            # Continue collecting
            new_content = ''.join(string_buf) + '\n' + line
            # Check if string ends on this line
            # Look for the last unescaped " followed by , or )
            fixed = fix_line(new_content)
            if '",' in fixed or '")' in fixed or '" ' in fixed:
                # String ended
                # Split back into lines
                parts = fixed.split('\n')
                # First part is the continuation
                if len(parts) > 1:
                    new_lines[-1] = parts[0]
                    for p2 in parts[1:]:
                        new_lines.append(p2)
                else:
                    new_lines[-1] = fixed
                in_string = False
                string_buf = []
            else:
                new_lines[-1] = fixed
        else:
            fixed = fix_line(line)
            # Check if string didn't end
            # Count quotes - if odd, string is unterminated
            quote_count = fixed.count('"') - fixed.count('\\"')
            # This is a rough check. Better: check if last char is " and no closing
            if fixed.rstrip().endswith('"') and not (fixed.rstrip().endswith('",') or fixed.rstrip().endswith('")')):
                # String might be unterminated
                # But the fix_line already handles this case
                pass
            new_lines.append(fixed)
            # Check if next line is continuation
            # (in note() with embedded \n, we don't have multi-line strings)
    new_content = '\n'.join(new_lines)
    with open(p, 'w', encoding='utf-8') as fh:
        fh.write(new_content)

print('Done')
