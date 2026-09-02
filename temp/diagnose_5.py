#!/usr/bin/env python3
"""Pure Python diagnostic of the 5 remaining failing slides."""
import os, re

SLIDES_DIR = r'D:\新课开发\内训师和表达\系列进阶课\12-内训项目运营：选师、建课、认证、应用与激励机制设计\授课PPT\slides'
FAILING = ['slide-36.js', 'slide-67.js', 'slide-76.js', 'slide-97.js', 'slide-98.js']

def show_problem_lines(fpath):
    with open(fpath, 'rb') as f:
        content = f.read()
    lines = content.split(b'\n')
    problems = []
    for i, line in enumerate(lines):
        # Show lines with problematic patterns
        if b'\\"' in line or b'""' in line:
            problems.append((i+1, line))
    return problems

for fname in FAILING:
    fpath = os.path.join(SLIDES_DIR, fname)
    problems = show_problem_lines(fpath)
    print(f'\n=== {fname} ===')
    for lineno, line in problems:
        # Show last 120 bytes to see the end of each problematic line
        print(f'  Line {lineno} (last 120): {repr(line[-120:])}')
