# -*- coding: utf-8 -*-
"""
Build script for 知行：学习落地工作坊 授课PPT
Merges gen_pptx.py + gen_pptx_part2.py and saves PPTX.
"""
import subprocess
import sys

# Run gen_pptx.py first (defines helpers + P1-P13 + prs)
print("[1/2] Executing gen_pptx.py (helpers + P1-P13)...")
exec_globals = {}
with open('gen_pptx.py', encoding='utf-8') as f:
    code1 = f.read()
exec(code1, exec_globals)
prs = exec_globals['prs']
print(f"  -> {len(prs.slides)} slides after part 1")

# Run gen_pptx_part2.py with shared globals
print("[2/2] Executing gen_pptx_part2.py (P14-P130)...")
with open('gen_pptx_part2.py', encoding='utf-8') as f:
    code2 = f.read()
exec(code2, exec_globals)

# Now call all P1-P130 functions
print("[Build] Calling P1-P130 functions...")
for i in range(1, 131):
    fn_name = f"P{i}"
    if fn_name in exec_globals:
        exec_globals[fn_name]()
        if i % 10 == 0 or i == 130:
            print(f"  -> {len(exec_globals['prs'].slides)} slides after P{i}")

# Save
out = r'D:\2026年课程\竞越\知行：学习落地工作坊\补充课程包\16_授课PPT\知行工作坊_授课PPT.pptx'
import os
os.makedirs(os.path.dirname(out), exist_ok=True)
exec_globals['prs'].save(out)
print(f"\n[Done] Saved to: {out}")
print(f"       Total slides: {len(exec_globals['prs'].slides)}")
size_mb = os.path.getsize(out) / (1024 * 1024)
print(f"       Size: {size_mb:.2f} MB")
