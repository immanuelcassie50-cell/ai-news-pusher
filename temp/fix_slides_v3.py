import os, re

fixed_total = 0
for fname in os.listdir('.'):
    if not (fname.startswith('slide-') and fname.endswith('.js')):
        continue
    with open(fname, 'r', encoding='utf-8', errors='replace') as f:
        content = f.read()
    original = content

    # Fix pattern: ""text"" inside property values -> "text"
    # More specifically: when a JS string contains "" (two straight double quotes),
    # it means Chinese quotes got merged with string delimiters
    # Fix: replace "" with \" inside string values
    # But we need to be careful about the structure

    # Strategy: find lines with problems and fix them
    lines = content.split('\n')
    fixed_lines = []
    for line in lines:
        # If line has "" that would break JS, fix the inner quotes
        # Pattern: "text"text"  -> "text\"text"
        # Use a regex to find double-quote pairs and escape inner ones
        if '""' in line:
            # Count quotes to understand structure
            stripped = line.strip()
            if stripped.startswith('//'):
                fixed_lines.append(line)
                continue
            # Try to fix: replace "" with \" only when they appear to be
            # Chinese quote pairs being interpreted as string delimiters
            # Pattern: "... "" ... "" ... " -> ... "..." (just merge)
            new_line = line
            # Replace "" with \" to escape properly
            new_line = re.sub(r'(?<!\\)"(?=[^"]+"(?!\\))', '\\"', new_line)
            if new_line != line:
                line = new_line
                fixed_total += 1
        fixed_lines.append(line)

    new_content = '\n'.join(fixed_lines)
    if new_content != original:
        with open(fname, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f'Fixed: {fname}')

print(f'\nTotal files fixed: {fixed_total}')
