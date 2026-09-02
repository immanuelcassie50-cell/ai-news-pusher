#!/usr/bin/env python3
import os

slides_dir = r'D:\新课开发\内训师和表达\系列进阶课\12-内训项目运营：选师、建课、认证、应用与激励机制设计\授课PPT\slides'

fpath = os.path.join(slides_dir, 'slide-98.js')
with open(fpath, 'rb') as f:
    data = f.read()

lines = data.split(b'\n')
line36 = lines[35]

# The issue: quote at position 69 is unescaped
# Fix: insert backslash (0x5c) before position 69
BS = b'\x5c'
new_line36 = line36[:69] + BS + line36[69:]

print('Original pos 65-75:', repr(line36[65:75]))
print('New pos 65-75:', repr(new_line36[65:75]))

# Verify: count unescaped quotes
def count_unescaped(line):
    j = 0
    count = 0
    while j < len(line):
        if line[j] == 0x22 and not (j > 0 and line[j-1] == 0x5c):
            count += 1
        j += 1
    return count

old_count = count_unescaped(line36)
new_count = count_unescaped(new_line36)
print(f'Unescaped quotes: old={old_count}, new={new_count}')

if new_count % 2 == 0:
    lines[35] = new_line36
    data_new = b'\n'.join(lines)
    with open(fpath, 'wb') as f:
        f.write(data_new)
    print('Fixed and wrote slide-98')
else:
    print('Still odd, not writing')
