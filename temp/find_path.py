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

# Line 36: insert backslash before pos 69
line36 = lines[35]
BS = b'\x5c'
# Before pos 69 (quote at pos 69): insert backslash
new_line36 = line36[:69] + BS + line36[69:]
lines[35] = new_line36

data_new = b'\n'.join(lines)
with open(fpath, 'wb') as f:
    f.write(data_new)

# Verify
with open(fpath, 'rb') as f:
    lines2 = f.read().split(b'\n')
line36_new = lines2[35]
print('Fixed. New line 36 last 100 bytes:', repr(line36_new[-100:]))

# Count quotes
j = 0
unescaped = 0
while j < len(line36_new):
    if line36_new[j] == 0x22 and not (j > 0 and line36_new[j-1] == 0x5c):
        unescaped += 1
    j += 1
print(f'Unescaped quotes: {unescaped}')
