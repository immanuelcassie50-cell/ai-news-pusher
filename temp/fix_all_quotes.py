import os

def fix_file(content):
    # Replace Chinese curly quotes with corner brackets inside JS strings
    # U+201C = "  U+201D = "
    content = content.replace('“', '「')  # " -> 「
    content = content.replace('”', '」')  # " -> 」
    return content

fixed = 0
for f in os.listdir('.'):
    if f.startswith('slide-') and f.endswith('.js'):
        with open(f, 'rb') as fh:
            raw = fh.read()
        try:
            content = raw.decode('utf-8')
        except:
            continue
        original = content
        content = fix_file(content)
        if content != original:
            with open(f, 'w', encoding='utf-8') as fh:
                fh.write(content)
            fixed += 1
            print(f'Fixed: {f}')
print(f'\nTotal: {fixed} files fixed')
