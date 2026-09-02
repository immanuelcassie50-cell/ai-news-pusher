import os, re

fixed_total = 0
for fname in os.listdir('.'):
    if not (fname.startswith('slide-') and fname.endswith('.js')):
        continue
    with open(fname, 'rb') as f:
        data = f.read()

    # Decode - try UTF-8, fall back to latin-1
    try:
        content = data.decode('utf-8')
    except UnicodeDecodeError:
        content = data.decode('latin-1')

    original = content

    # Replace U+201C (") and U+201D (") with corner brackets
    content = content.replace('“', '「')  # " -> 「
    content = content.replace('”', '」')  # " -> 」

    if content != original:
        with open(fname, 'w', encoding='utf-8') as f:
            f.write(content)
        fixed_total += 1
        print(f'Fixed: {fname}')

print(f'\nTotal files fixed: {fixed_total}')
