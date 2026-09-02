#!/usr/bin/env python3
import os
slides_dir = r'D:\新课开发\内训师和表达\系列进阶课\12-内训项目运营：选师，建课、认证、应用与激励机制设计\授课PPT\slides'
fpath = os.path.join(slides_dir, 'slide-98.js')
with open(fpath, 'rb') as f:
    content = f.read()
lines = content.split(b'\n')
for i in [35, 37, 38]:
    print(f'Line {i+1}: {lines[i].decode("utf-8", errors="replace")}')
