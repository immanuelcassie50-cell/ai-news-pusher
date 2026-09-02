#!/usr/bin/env python3
import os
base = r'D:\新课开发\内训师和表达\系列进阶课'
for entry in os.listdir(base):
    if '12' in entry and '内训' in entry:
        slides_dir = os.path.join(base, entry, '授课PPT', 'slides')
        if os.path.exists(slides_dir):
            print('FOUND:', slides_dir)
            # Read compile.js
            compile_path = os.path.join(slides_dir, 'compile.js')
            if os.path.exists(compile_path):
                with open(compile_path, 'rb') as f:
                    content = f.read()
                print('compile.js exists, size:', len(content))
                # Show last 50 lines
                lines = content.split(b'\n')
                for line in lines[-20:]:
                    print(repr(line[-100:]))
