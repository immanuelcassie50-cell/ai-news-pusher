import re, os

def fix_js_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Fix lines that have broken string values due to Chinese quotes becoming regular quotes
    # Pattern: "text"text"text" inside JS strings

    # Strategy: For each line, find object properties like text: "..." or dim: "..."
    # and fix any unescaped quotes inside them

    lines = content.split('\n')
    fixed_lines = []

    for line in lines:
        # Check if this line has a string value that might be broken
        # Look for patterns like: "text"text" where quotes appear inside strings

        # Simple heuristic: if we have consecutive double quotes not at string boundaries
        # e.g., "text"more" - we need to escape the inner quotes

        # Find all occurrences of "..." values and check if they contain embedded quotes
        def fix_string_value(m):
            prefix = m.group(1)  # everything before the value
            value = m.group(2)   # the string content
            suffix = m.group(3)  # everything after

            # Count actual quotes in value - if more than 2 (open and close), some are embedded
            quote_count = value.count('"')
            if quote_count > 0:
                # There are embedded quotes - escape them
                # Replace each " with \"
                value = value.replace('"', '\\"')

            return prefix + value + suffix

        # Match: (something: ")(content)(")
        # This handles text: "...", dim: "...", etc.
        new_line = re.sub(r'(:\s*")([^"]*)(")', fix_string_value, line)

        # Also handle cases like: { step: "3", text: "..."}
        # where we might have quotes embedded

        fixed_lines.append(new_line)

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
