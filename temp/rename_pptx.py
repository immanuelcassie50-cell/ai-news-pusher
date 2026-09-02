# -*- coding: utf-8 -*-
import os

dst_dir = r'D:\CC\temp'

files = os.listdir(dst_dir)
for f in files:
    if f.endswith('.pptx') and 'PPT' in f and 'A40F' in f:
        src = os.path.join(dst_dir, f)
        dst = os.path.join(dst_dir, 'volvo_work.pptx')
        print("Found:", repr(f))
        print("Source:", src)
        print("Source exists:", os.path.exists(src))
        os.rename(src, dst)
        print("Renamed to:", dst)
        print("Dest exists:", os.path.exists(dst))
        break
