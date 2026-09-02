#!/usr/bin/env python3
import re, sys

fname = 'slide-29.js'
with open(fname, 'r', encoding='utf-8') as f:
    content = f.read()

# Show line 56 and context
lines = content.split('\n')
for i in range(50, 60):
    print(f'{i+1}: {lines[i][:120]}')

# Find unescaped quotes inside strings
print('\n--- Finding issues ---')
i = 0
in_string = False
issues = []
while i < len(content):
    c = content[i]
    if not in_string:
        if c == '"':
            in_string = True
        elif c == '\\':
            i += 2
            continue
    else:
        if c == '\\':
            i += 2
            continue
        if c == '"':
            issues.append(f'Unescaped quote at pos {i}, line {content[:i].count(chr(10))+1}')
            in_string = False
    i += 1

for issue in issues[:5]:
    print(issue)