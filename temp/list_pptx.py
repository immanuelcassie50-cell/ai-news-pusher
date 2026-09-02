# -*- coding: utf-8 -*-
import os

dst_dir = r'D:\CC\temp'

files = os.listdir(dst_dir)
for f in files:
    if f.endswith('.pptx'):
        print(repr(f))
        print(f)
