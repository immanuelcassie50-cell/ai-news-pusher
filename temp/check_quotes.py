#!/usr/bin/env python3
import subprocess
import os

files = ['slide-04.js', 'slide-11.js', 'slide-12.js', 'slide-13.js', 'slide-14.js', 'slide-15.js', 'slide-16.js', 'slide-17.js', 'slide-18.js', 'slide-19.js']
base_dir = r"D:\新课开发\行动学习2026\催化师核心技术：提问与反思\完整课程包\04-授课PPT\slides"
os.chdir(base_dir)

curly_open = '“'  # "
curly_close = '”'  # "

for f in files:
    filepath = os.path.join(base_dir, f)
    with open(filepath, 'r', encoding='utf-8') as file:
        content = file.read()

    has_curly = curly_open in content or curly_close in content
    print(f'{f}:')
    print(f'  Curly quotes: {"YES" if has_curly else "NO"}')

    # Test require with node
    result = subprocess.run(['node', '-e', f'require("./{f}")'],
                          capture_output=True, text=True, cwd=base_dir)
    if result.returncode == 0:
        print(f'  Node require: OK')
    else:
        print(f'  Node require: FAILED')
        print(f'    Error: {result.stderr[:200]}')
    print()