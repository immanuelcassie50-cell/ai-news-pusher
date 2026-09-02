# -*- coding: utf-8 -*-
import shutil
import os
import glob

src_dir = r'D:\2026年课程\云南磷化\第一阶段作业\第六组作业\第六组作业\第一期作业—第六组—雷利'
dst_dir = r'D:\CC\temp'

# Find all pptx files
pattern = os.path.join(src_dir, '*.pptx')
files = glob.glob(pattern)
print("Found files:", files)

for src in files:
    fname = os.path.basename(src)
    dst = os.path.join(dst_dir, fname)
    print(f"Copying {src} to {dst}")
    shutil.copy2(src, dst)
    print(f"Copied: {os.path.exists(dst)}")
