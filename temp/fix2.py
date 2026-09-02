# -*- coding: utf-8 -*-
import re
import ast

with open('gen_pptx_part2.py', encoding='utf-8') as f:
    content = f.read()

# Replace ""...""" with "..."" (close the string properly)
# Pattern: when we have ""X"" where X contains no quote, replace with "X"
# But we need to handle multi-line too - look for ""X\nY"" style
# The simplest fix: replace any occurrence of "" with " if preceded/followed by chinese chars or non-quote

# Specific fix: " (quote) "" (double-quote) chinese => " (single) " (single) chinese
# i.e. change "" to " only when it's adjacent to non-quote characters

def fix_quotes(text):
    # Pattern: " followed immediately by another " not at end of string
    # This is tricky. Simpler approach: just replace ""X"" -> "X" if X is plain text
    # but not if X contains " (i.e. not an escaped quote inside a string)
    # In our case, all Chinese text doesn't contain ", so this is safe
    # Use regex: ""([^"]*?)"" -> "\1"
    return re.sub(r'""([^"]*?)""', r'"\1"', text)

new_content = fix_quotes(content)
# Run twice in case of nested issues (shouldn't be needed but safe)
new_content = fix_quotes(new_content)

with open('gen_pptx_part2.py', 'w', encoding='utf-8') as f:
    f.write(new_content)

# Verify
try:
    ast.parse(new_content)
    print('OK syntax')
except SyntaxError as e:
    print(f'SyntaxError: {e}')
    src_lines = new_content.split('\n')
    if e.lineno:
        for i in range(max(0, e.lineno - 2), min(len(src_lines), e.lineno + 2)):
            print(f'  {i+1}: {src_lines[i]}')
