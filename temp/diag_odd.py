#!/usr/bin/env python3
import os

slides_dir = r'D:\新课开发\内训师和表达\系列进阶课\12-内训项目运营：选师、建课、认证、应用与激励机制设计\授课PPT\slides'

fpath = os.path.join(slides_dir, 'slide-98.js')
with open(fpath, 'rb') as f:
    lines = f.read().split(b'\n')

print('Checking all lines for odd unescaped quotes:')
for i, line in enumerate(lines):
    j = 0
    count = 0
    while j < len(line):
        if line[j] == 0x22 and not (j > 0 and line[j-1] == 0x5c):
            count += 1
        j += 1

    if count % 2 != 0:
        print(f'\nLine {i+1}: ODD ({count} quotes):')
        for j, b in enumerate(line):
            if b == 0x22:
                preceded = (j > 0 and line[j-1] == 0x5c)
                print(f'  pos {j}: {"escaped" if preceded else "UNESCAPED"}')
        print(f'  Full line: {repr(line)}')
