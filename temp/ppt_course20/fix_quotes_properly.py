import re

# Read slide-29
with open('slide-29.js', 'r', encoding='utf-8') as f:
    content = f.read()

# The problem: the steps array has Chinese text with embedded quotes
# like: { step: "3", text: "验逻辑：混淆"补充"与"必需" }
# The quotes around 补充 etc are breaking the JS string
# We need to escape them

# Find the steps array and fix it manually
# Pattern to find the broken lines
old_steps = '''    { step: "3", text: "验逻辑：混淆"补充"与"必需" },'''

new_steps = '''    { step: "3", text: "验逻辑：混淆\\"补充\\"与\\"必需\\"" },'''

content = content.replace(old_steps, new_steps)

# Also check for other slides with similar patterns
# Replace all instances of : "text"text" with : "text\"text\"

# More comprehensive: escape all quotes within string values
# that appear after : or in text properties

# Pattern: find "..." content that has unescaped quotes
# Match: " followed by Chinese characters/text and then more "
def fix_embedded_quotes(content):
    # Find all string values and check if they have embedded quotes
    result = []
    i = 0
    in_string = False
    string_start = -1

    while i < len(content):
        c = content[i]

        if not in_string:
            if c == '"':
                in_string = True
                string_start = i
                result.append(c)
            else:
                result.append(c)
        else:
            if c == '\\':
                # Skip escaped character
                result.append(c)
                i += 1
                if i < len(content):
                    result.append(content[i])
            elif c == '"':
                # Check if this is the end of string or an embedded quote
                # Look ahead to see if this is followed by Chinese/ASCII text and another quote
                # A simple heuristic: if after this quote there's Chinese text and then a quote, it's embedded

                j = i + 1
                # Skip whitespace
                while j < len(content) and content[j] in ' \t':
                    j += 1

                if j < len(content) and ord(content[j]) > 127:
                    # Next char is Chinese - this is an embedded quote
                    # Escape it
                    result.append('\\"')
                else:
                    # This is the end of the string
                    result.append(c)
                    in_string = False
            else:
                result.append(c)
        i += 1

    return ''.join(result)

content = fix_embedded_quotes(content)

with open('slide-29.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Fixed slide-29")

# Verify
with open('slide-29.js', 'r', encoding='utf-8') as f:
    verify = f.read()

if '\\"' in verify:
    print("Success: escaped quotes found")
else:
    print("Warning: no escaped quotes found")
