#!/usr/bin/env python3
import os

# Find the correct path
base = r'D:\新课开发\内训师和表达\系列进阶课'
target_dir = None
for entry in os.listdir(base):
    if '12' in entry and '内训' in entry:
        target_dir = os.path.join(base, entry, '授课PPT', 'slides')
        break

fpath = os.path.join(target_dir, 'slide-98.js')
with open(fpath, 'rb') as f:
    lines = f.read().split(b'\n')

# Find lines with backslash-quote
print('Lines with backslash-quote (\\"):')
for i, line in enumerate(lines):
    if b'\\"' in line:
        print(f'\nLine {i+1}:')
        # Show all \\" positions
        pos = 0
        while True:
            pos = line.find(b'\\"', pos)
            if pos == -1:
                break
            # Check what follows the \\"
            ctx = line[max(0,pos-3):pos+8]
            print(f'  pos {pos}: ctx={repr(ctx)} hex={ctx.hex()}')
            pos += 1
