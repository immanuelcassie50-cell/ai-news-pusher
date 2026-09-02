import re

with open(r'D:\CC\temp\pack_gaoguan.py', 'r', encoding='utf-8') as f:
    content = f.read()

# Fix ASCII double quotes inside Python string literals (tuples) by replacing
# Chinese quotation marks in the content with corner brackets
# We need to find places where "text" appears inside a string literal
# Strategy: for Chinese text in interp tuples, replace " with 『 and 』

# Pattern: within Python string literals that are part of tuples,
# replace curly/smart double quotes with corner brackets
# But actually the issue is ASCII " inside multiline string literals

# Let's find lines with this pattern and fix them
lines = content.split('\n')
fixed_lines = []
for i, line in enumerate(lines):
    # If a line has Chinese text with embedded ASCII double quotes inside 
    # a tuple string, replace them
    if '("' in line or '",' in line or '")' in line:
        # Check if there are unescaped ASCII quotes inside string content
        # by scanning character by character
        new_line = []
        in_string = False
        j = 0
        while j < len(line):
            c = line[j]
            if not in_string and c == '"':
                in_string = True
                new_line.append(c)
            elif in_string and c == '"':
                # Is this closing the string or is it a Chinese quote within?
                # Look at context: if next char is comma/paren, it's likely closing
                next_c = line[j+1] if j+1 < len(line) else ''
                if next_c in (',', ')', '\n', ' '):
                    in_string = False
                    new_line.append(c)
                else:
                    # likely a quote inside the string, replace with corner bracket
                    new_line.append('「')  # 『
            else:
                new_line.append(c)
            j += 1
        fixed_lines.append(''.join(new_line))
    else:
        fixed_lines.append(line)

new_content = '\n'.join(fixed_lines)
with open(r'D:\CC\temp\pack_gaoguan.py', 'w', encoding='utf-8') as f:
    f.write(new_content)
print("Done")
