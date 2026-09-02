#!/usr/bin/env python3
"""Diagnose all 6 failing slides at byte level."""
import os, sys

SLIDES_DIR = r'D:\新课开发\内训师和表达\系列进阶课\12-内训项目运营：选师、建课、认证、应用与激励机制设计\授课PPT\slides'
FILES = ['slide-36.js','slide-49.js','slide-67.js','slide-76.js','slide-97.js','slide-98.js']

for fname in FILES:
    fpath = os.path.join(SLIDES_DIR, fname)
    with open(fpath, 'rb') as f:
        content = f.read()

    lines = content.split(b'\n')
    print(f'\n=== {fname} ===')
    for i, line in enumerate(lines):
        if b'\\"' in line or b'""' in line:
            print(f'  Line {i+1}: {repr(line[-100:])}')
