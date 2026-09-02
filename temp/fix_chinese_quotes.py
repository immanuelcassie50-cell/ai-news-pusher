# -*- coding: utf-8 -*-
import re
import os

os.chdir(r"D:/新课开发/工作手册/高潜员工加速成长路径设计/完整课程包/02-授课PPT/slides")

files = ['slide-22.js', 'slide-25.js', 'slide-26.js', 'slide-28.js', 'slide-29.js', 'slide-38.js',
         'slide-63.js', 'slide-74.js', 'slide-88.js', 'slide-91.js', 'slide-93.js', 'slide-101.js']

for f in files:
    if os.path.exists(f):
        with open(f, 'r', encoding='utf-8') as file:
            content = file.read()
        # Replace Chinese quotes with regular quotes escaped for JS strings
        content = content.replace('“', '\\"')  # left Chinese quote
        content = content.replace('”', '\\"')  # right Chinese quote
        with open(f, 'w', encoding='utf-8') as file:
            file.write(content)
        print(f'Fixed: {f}')

print("Done!")
