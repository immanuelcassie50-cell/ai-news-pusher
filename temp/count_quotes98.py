#!/usr/bin/env python3
import os

base = r'D:\新课开发\内训师和表达\系列进阶课'
target_dir = None
for entry in os.listdir(base):
    if '12' in entry and '内训' in entry:
        target_dir = os.path.join(base, entry, '授课PPT', 'slides')
        break

fpath = os.path.join(target_dir, 'slide-98.js')
with open(fpath, 'rb') as f:
    lines = f.read().split(b'\n')

# Print ALL lines with backslash-quote patterns and ALL lines with odd quotes
print('=== ALL lines with issues ===')
for i, line in enumerate(lines):
    has_bs_quotes = b'\\"' in line
    j = 0
    unescaped = 0
    while j < len(line):
        if line[j] == 0x22 and not (j > 0 and line[j-1] == 0x5c):
            unescaped += 1
        j += 1
    odd = unescaped % 2 != 0
    if has_bs_quotes or odd:
        print(f'Line {i+1}: odd={odd}, unescaped={unescaped}, hasBS={has_bs_quotes}')
        # Show context around backslash-quotes
        if has_bs_quotes:
            pos = 0
            while True:
                pos = line.find(b'\\"', pos)
                if pos == -1:
                    break
                print(f'  \\\\" at pos {pos}: {repr(line[max(0,pos-5):pos+10])}')
                pos += 1
