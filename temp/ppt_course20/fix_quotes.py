import re, os

def fix_js_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Replace Chinese quotes with escaped quotes inside JS strings
    # This regex finds string literals and replaces Chinese quotes within them
    def fix_string(match):
        s = match.group(0)
        # Replace Chinese quotes within the string
        s = s.replace('\u201c', '\\"').replace('\u201d', '\\"')
        s = s.replace('\u2018', "\\'").replace('\u2019', "\\'")
        return s

    # Match JS strings (double, single, or template)
    pattern = r'"[^"\\]*(?:\\.[^"\\]*)*"|\'[^\'\\]*(?:\\.[^\'\\]*)*\'|`[^`]*`'
    fixed = re.sub(pattern, fix_string, content)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(fixed)

# Fix all slide files
for f in os.listdir('.'):
    if f.startswith('slide-') and f.endswith('.js'):
        try:
            fix_js_file(f)
            print(f'Fixed: {f}')
        except Exception as e:
            print(f'Error fixing {f}: {e}')