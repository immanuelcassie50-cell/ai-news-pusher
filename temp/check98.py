#!/usr/bin/env python3
import os

slides_dir = r'D:\新课开发\内训师和表达\系列进阶课\12-内训项目运营：选师、建课、认证、应用与激励机制设计\授课PPT\slides'
with open(os.path.join(slides_dir, 'slide-98.js'), 'rb') as f:
    lines = f.read().split(b'\n')

print('Line 36 full:', repr(lines[35]))
print('Line 36 hex:', lines[35].hex())
