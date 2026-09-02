import os

for f in ['slide-64.js']:
    with open(f, 'rb') as fh:
        data = fh.read()

    # Find problematic patterns - where content inside strings has unbalanced quotes
    # Strategy line looks like: strategy: ""你总是迟到！"" -- it has extra quotes
    content = data.decode('utf-8')

    # Find the specific pattern
    import re

    # Fix: strategy: ""text"" -> strategy: "text"
    # Pattern: within a string value, replace "" with "
    lines = content.split('\n')
    fixed_lines = []
    for line in lines:
        # Replace patterns like: ""text"" with: "text"
        if 'strategy:' in line and '""' in line:
            # This is the problematic line
            # Replace the entire value
            line = line.replace('""', '"')
        fixed_lines.append(line)

    new_content = '\n'.join(fixed_lines)
    if new_content != content:
        with open(f, 'w', encoding='utf-8') as fh:
            fh.write(new_content)
        print(f'Fixed: {f}')
    else:
        print(f'No change: {f}')
