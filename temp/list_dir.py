# -*- coding: utf-8 -*-
import os

src_dir = r'D:\2026年课程\云南磷化\第一阶段作业\第六组作业\第六组作业\第一期作业—第六组—雷利'

print("Source dir exists:", os.path.exists(src_dir))

if os.path.exists(src_dir):
    files = os.listdir(src_dir)
    for f in files:
        print(f)
