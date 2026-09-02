#!/usr/bin/env python3
import os

slides_dir = r'D:/新课开发/心理学/20-非暴力沟通：亲密关系中的冲突转化/PPT/slides'
files = [
    'slide-26.js', 'slide-49.js', 'slide-63.js', 'slide-64.js', 'slide-65.js',
    'slide-67.js', 'slide-68.js', 'slide-69.js', 'slide-70.js', 'slide-76.js',
    'slide-77.js', 'slide-91.js', 'slide-92.js', 'slide-93.js', 'slide-94.js',
    'slide-95.js', 'slide-96.js', 'slide-97.js', 'slide-98.js', 'slide-99.js',
    'slide-100.js', 'slide-103.js', 'slide-105.js', 'slide-124.js'
]

for fname in files:
    fpath = os.path.join(slides_dir, fname)
    if os.path.exists(fpath):
        with open(fpath, 'r', encoding='utf-8') as f:
            content = f.read()

        # Count backslash-quote patterns
        bs_quote = chr(92) + '"'  # \" as a string
        count = content.count(bs_quote)
        if count > 0:
            print(f'{fname}: {count} occurrences of backslash-quote')