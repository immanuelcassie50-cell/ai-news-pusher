#!/usr/bin/env python3
import os

slides_dir = r"D:\新课开发\内训师和表达\系列进阶课\12-内训项目运营：选师，建课、认证、应用与激励机制设计\授课PPT\slides"

with open(os.path.join(slides_dir, 'slide-36.js'), 'r', encoding='utf-8') as f:
    lines = f.readlines()

print('Line 33:', repr(lines[32]))
print('Line 38:', repr(lines[37]))
print('Line 43:', repr(lines[42]))

with open(os.path.join(slides_dir, 'slide-76.js'), 'r', encoding='utf-8') as f:
    lines76 = f.readlines()
for i, l in enumerate(lines76):
    if '\\"' in l:
        print(f'slide-76 line {i+1}: {repr(l[:100])}')
