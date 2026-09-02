#!/usr/bin/env python3
import sys
with open('slide-17.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()
line = lines[50]  # Line 51 (0-indexed)
print('Line 51:', repr(line))
# Check for backslash-quote patterns
import re
for m in re.finditer(r'\\[""\'`]', line):
    print(f'Backslash-quote at position {m.start()}: {repr(m.group())}')