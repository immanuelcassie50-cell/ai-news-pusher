#!/usr/bin/env python3
import os

# Find the correct path by listing directories
base = r'D:\新课开发\内训师和表达\系列进阶课'
for entry in os.listdir(base):
    if '12' in entry and '内训' in entry:
        print(f'Found: {entry}')
        slides_dir = os.path.join(base, entry, '授课PPT', 'slides')
        if os.path.exists(slides_dir):
            print(f'Path exists: {slides_dir}')
            # List slide-98.js
            f98 = os.path.join(slides_dir, 'slide-98.js')
            if os.path.exists(f98):
                with open(f98, 'rb') as f:
                    lines = f.read().split(b'\n')
                for i in [35, 37, 38]:
                    print(f'Line {i+1}: {lines[i].decode("utf-8", errors="replace")}')
