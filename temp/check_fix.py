#!/usr/bin/env python3
import subprocess, os, sys

slides_dir = "/d/新课开发/内训师和表达/系列进阶课/12-内训项目运营：选师、建课、认证、应用与激励机制设计/授课PPT/slides"

# Check content
remaining = ['slide-36.js','slide-49.js','slide-67.js','slide-76.js','slide-80.js','slide-97.js','slide-98.js']
for fname in remaining:
    fpath = os.path.join(slides_dir, fname)
    if not os.path.exists(fpath):
        print(f"{fname}: NOT FOUND")
        continue
    with open(fpath, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    for i, line in enumerate(lines):
        if '\\"' in line and ('desc:' in line or 'title:' in line or 'tag:' in line):
            print(f"{fname}:{i+1}: {line.rstrip()[:120]}")
