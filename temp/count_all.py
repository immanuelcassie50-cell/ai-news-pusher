#!/usr/bin/env python3
"""Check all slides for syntax issues - show all issues."""
import os

base = r'D:\新课开发\内训师和表达\系列进阶课'
target_dir = None
for entry in os.listdir(base):
    if '12' in entry and '内训' in entry:
        target_dir = os.path.join(base, entry, '授课PPT', 'slides')
        break

# Check all slides
print('=== ALL slides with odd quote counts ===')
for fname in sorted(os.listdir(target_dir), key=lambda x: (x.isdigit(), x)):
    if not fname.startswith('slide-') or not fname.endswith('.js'):
        continue
    if fname == 'compile.js' or fname.startswith('_'):
        continue
    fpath = os.path.join(target_dir, fname)
    with open(fpath, 'rb') as f:
        lines = f.read().split(b'\n')
    for i, line in enumerate(lines):
        j = 0
        unescaped = 0
        while j < len(line):
            if line[j] == 0x22 and not (j > 0 and line[j-1] == 0x5c):
                unescaped += 1
            j += 1
        if unescaped % 2 != 0:
            print(f'{fname} line {i+1}: {unescaped} quotes (ODD)')
