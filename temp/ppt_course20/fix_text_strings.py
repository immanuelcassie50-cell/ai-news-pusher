import re, os

def fix_js_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # The problem: text: ""content"" or text: ""content
    # These came from original Chinese quotes "..." being replaced with nothing

    # Strategy: Find all { text: "..." } patterns and fix them properly
    # Match the full { text: "..." } block

    def fix_text_block(match):
        full = match.group(0)
        # Replace any remaining Chinese quotes with regular escaped quotes
        full = full.replace('\u201c', '\\"').replace('\u201d', '\\"')
        full = full.replace('\u2018', "\\'").replace('\u2019', "\\'")

        # Now fix double quotes that appear after { text: "
        # Pattern: { text: "" -> { text: \"
        full = re.sub(r'\{ text: ""', '{ text: "\\"', full)

        # Also fix any case where we have text: "content"" where the closing is doubled
        # This is: text: "content"" -> text: "content\""
        full = re.sub(r'text: "([^"]*)""', r'text: "\\1\\"', full)

        return full

    # Find all { text: ... } blocks
    # Match from { text: to the closing }
    pattern = r'\{ text: "[^"]*"[^}]*\}'
    fixed = re.sub(pattern, fix_text_block, content)

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
