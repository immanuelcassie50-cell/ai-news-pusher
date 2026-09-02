import re, os

def fix_js_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Fix the issue where "" appears inside text property values
    # Pattern: text: ""something"" -> text: "\"something\""
    # This happens when Chinese quotes "..." were replaced with nothing

    # Find all { text: "..." patterns and fix the double quotes
    def fix_text_value(match):
        prefix = match.group(1)  # { text: "
        value = match.group(2)   # content
        suffix = match.group(3)  # ", options: ...

        # If value starts with " and we have issues, escape properly
        # The problem is empty quotes or doubled quotes
        if value == '':
            # Empty string, keep it
            return match.group(0)

        # Check if value contains problematic patterns
        # Replace any remaining Chinese quotes with escaped quotes
        value = value.replace('\u201c', '\\"').replace('\u201d', '\\"')
        value = value.replace('\u2018', "\\'").replace('\u2019', "\\'")

        return prefix + value + suffix

    # Match { text: "..." } patterns
    # This regex captures the prefix, content, and suffix
    pattern = r'(\{ text: ")([^"]*)(".*?\})'

    def replace_func(m):
        prefix = m.group(1)
        value = m.group(2)
        suffix = m.group(3)

        # If the value contains literal " characters (double quotes inside)
        # we need to escape them
        if '"' in value:
            value = value.replace('"', '\\"')

        # Also fix any remaining Chinese quotes
        value = value.replace('\u201c', '\\"').replace('\u201d', '\\"')
        value = value.replace('\u2018', "\\'").replace('\u2019', "\\'")

        return prefix + value + suffix

    fixed = re.sub(pattern, replace_func, content)

    # Also handle cases where we have """" patterns (empty quoted strings)
    # These happen when Chinese quotes got removed and left empty strings
    # Replace {{{ text: ""..." with { text: "\"..."
    fixed = re.sub(r'\{ text: ""', '{ text: "\\"', fixed)
    fixed = re.sub(r'""([^"]*?)""', '"\\"\\1\\"\\""', fixed)

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
