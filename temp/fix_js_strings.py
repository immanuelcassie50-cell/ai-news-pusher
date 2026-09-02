"""
Fix straight double-quote characters (0x22) that appear INSIDE JavaScript string literals
as content, causing "missing ) after argument list" errors.
The fix: replace inner quotes with single quotes (0x27).
"""

import os
import re

slides_dir = r'D:/新课开发/法学/29-她的法律课：女性权益保护专题/PPT/slides/'

# Pattern: inside addText("...") or addShape(..., {...})
# We need to find strings that have unescaped inner quotes.
# Strategy: for each .js file, find all addText("...") blocks and fix inner quotes.

def fix_js_inner_quotes(content):
    result = []
    i = 0
    changes = 0

    while i < len(content):
        # Find next addText( or addShape(
        m = re.search(r'(addText|addShape)\s*\(', content[i:])
        if not m:
            result.append(content[i:])
            break

        result.append(content[i:i + m.end()])
        i += m.end()

        # Now parse the argument list - find the first string argument
        # Skip whitespace
        while i < len(content) and content[i] in ' \t\n':
            result.append(content[i])
            i += 1

        if i >= len(content) or content[i] != '"':
            # Not a string argument, skip this arg and continue
            # Find next comma or closing paren
            depth = 1
            while i < len(content) and depth > 0:
                c = content[i]
                if c == '(':
                    depth += 1
                elif c == ')':
                    depth -= 1
                    if depth == 0:
                        i += 1
                        break
                i += 1
            continue

        # Found opening string quote
        result.append(content[i])  # opening "
        i += 1
        str_start = i

        # Read until closing quote (not preceded by backslash)
        while i < len(content):
            c = content[i]
            if c == '\\':
                # Escaped char - copy both chars
                result.append(content[i])
                i += 2
            elif c == '"':
                # Check if this is a closing quote or inner quote
                # If followed by comma, space, or close paren/brace, it's closing
                # If followed by Chinese/letter chars, it might be inner
                next_c = content[i+1] if i+1 < len(content) else ''
                if next_c in (',', ')', '}', ' ', '\n', '\t', '+', '\\'):
                    # This is the closing quote
                    result.append(content[i])
                    i += 1
                    break
                else:
                    # Inner quote - replace with single quote
                    result.append("'")
                    i += 1
                    changes += 1
            else:
                result.append(content[i])
                i += 1

    return ''.join(result), changes


total_changes = 0
fixed_files = []

for fname in sorted(os.listdir(slides_dir)):
    if not fname.endswith('.js') or fname == 'compile.js':
        continue
    fpath = os.path.join(slides_dir, fname)
    with open(fpath, 'r', encoding='utf-8') as f:
        content = f.read()

    new_content, changes = fix_js_inner_quotes(content)
    if changes > 0:
        with open(fpath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        fixed_files.append((fname, changes))
        total_changes += changes

print(f'Fixed {len(fixed_files)} files, {total_changes} total changes:')
for fname, count in fixed_files:
    print(f'  {fname}: {count} fixes')
