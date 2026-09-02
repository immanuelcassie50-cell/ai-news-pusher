import re, os

def fix_js_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # The problem: Chinese quotes got replaced with regular quotes but weren't escaped
    # So we have strings like: "混淆"补充"与"必需"概念"
    # which should be: "混淆\"补充\"与\"必需\"概念"

    # Strategy: For each line, find the addText calls and fix the string content
    lines = content.split('\n')
    fixed_lines = []

    for line in lines:
        # Skip non-text lines
        if 'addText' not in line and 'text:' not in line:
            fixed_lines.append(line)
            continue

        # For lines with text content in addText, we need to escape internal quotes
        # Pattern: addText("content...") or text: "content..."
        # We need to find the string boundaries and escape any internal quotes

        # Match lines like: addText("...", ...) or text: "..."
        # and fix the quotes within the string values

        result = []
        i = 0
        while i < len(line):
            c = line[i]

            if c == '"':
                # Found a quote - collect the full string
                # Find the end of this string (next unescaped quote)
                j = i + 1
                string_chars = ['"']
                while j < len(line):
                    if line[j] == '\\':
                        # Skip escaped char
                        j += 2
                        continue
                    if line[j] == '"':
                        # End of string
                        break
                    j += 1

                # Check if there's content between i and j
                inner = line[i+1:j]

                # Check if inner contains unescaped quotes (Chinese or regular)
                # If inner has Chinese quotes that were replaced with regular quotes, we need to escape them
                # Actually, we need to check if inner has patterns like:
                # "text"text" or "text"text"text"
                # These happen when Chinese quotes were replaced

                # Find all occurrences of " inside inner that are NOT at boundaries
                # and NOT already escaped
                new_inner = []
                k = 0
                while k < len(inner):
                    if inner[k] == '"':
                        # This is an extra quote - escape it
                        new_inner.append('\\"')
                    else:
                        new_inner.append(inner[k])
                    k += 1

                result.append('"' + ''.join(new_inner) + '"')
                i = j + 1
            else:
                result.append(c)
                i += 1

        fixed_line = ''.join(result)

        # Also handle cases with Chinese quotes that remain
        # Replace any remaining Chinese quotes with escaped regular quotes
        fixed_line = fixed_line.replace('\u201c', '\\"').replace('\u201d', '\\"')
        fixed_line = fixed_line.replace('\u2018', "\\'").replace('\u2019', "\\'")

        fixed_lines.append(fixed_line)

    fixed_content = '\n'.join(fixed_lines)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(fixed_content)

# Fix all slide files
for f in os.listdir('.'):
    if f.startswith('slide-') and f.endswith('.js'):
        try:
            fix_js_file(f)
            print(f'Fixed: {f}')
        except Exception as e:
            print(f'Error fixing {f}: {e}')
