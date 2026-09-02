import os, re

fixed_total = 0
for fname in os.listdir('.'):
    if not (fname.startswith('slide-') and fname.endswith('.js')):
        continue
    with open(fname, 'rb') as f:
        data = f.read()
    content = data.decode('utf-8', errors='replace')
    original = content

    # Fix 1: ""text"" -> "text" (double-quote delimiters that got corrupted)
    # Replace "" with " inside property values
    content = re.sub(r'""([^"]*)""', r'"\1"', content)

    # Fix 2: Any remaining Chinese curly quotes
    content = content.replace('“', '「')  # " -> 「
    content = content.replace('”', '」')  # " -> 」

    if content != original:
        with open(fname, 'w', encoding='utf-8') as f:
            f.write(content)
        fixed_total += 1
        print(f'Fixed: {fname}')

print(f'\nTotal files fixed: {fixed_total}')
