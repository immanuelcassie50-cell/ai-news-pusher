#!/usr/bin/env python3
import subprocess, os

slides_dir = "/d/新课开发/内训师和表达/系列进阶课/12-内训项目运营：选师、建课、认证、应用与激励机制设计/授课PPT/slides"
remaining = ['slide-36.js','slide-49.js','slide-67.js','slide-76.js','slide-80.js','slide-97.js','slide-98.js']

# First check compile status
result = subprocess.run(['node', 'compile.js'], cwd=slides_dir, capture_output=True, text=True)
failed = [line.split()[1] for line in result.stderr.split('\n') if 'FAILED' in line]
print(f"Currently failing: {len(failed)}")
for f in failed:
    print(f"  {f}")

# Check content of problematic lines
for fname in remaining:
    fpath = os.path.join(slides_dir, fname)
    if not os.path.exists(fpath):
        print(f"{fname}: NOT FOUND")
        continue
    with open(fpath, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    for i, line in enumerate(lines):
        if '\\"' in line:
            print(f"{fname}:{i+1}: {line.rstrip()[:100]}")
