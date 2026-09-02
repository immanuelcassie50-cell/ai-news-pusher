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

line36 = lines[35]
print('Line 36 full hex:', line36.hex())
print('Line 36 full:', repr(line36))
print()

# List all quote positions
print('Quote positions in line 36:')
for i, b in enumerate(line36):
    if b == 0x22:
        preceded = 'BS' if (i > 0 and line36[i-1] == 0x5c) else '   '
        print(f'  pos {i:3d}: {preceded} 0x22')
