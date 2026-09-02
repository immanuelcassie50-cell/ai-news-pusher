#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import os

slides_dir = r'D:\新课开发\变革管理\17-组织记忆与经验沉淀：让这次变革能复制到下一个部门\完整课程包\PPT演示课件\slides'
os.chdir(slides_dir)

files = [
    'slide-33.js', 'slide-40.js', 'slide-41.js', 'slide-42.js', 'slide-43.js',
    'slide-47.js', 'slide-49.js', 'slide-50.js', 'slide-51.js', 'slide-52.js',
    'slide-60.js', 'slide-61.js', 'slide-62.js', 'slide-65.js', 'slide-67.js',
    'slide-68.js', 'slide-80.js', 'slide-81.js', 'slide-82.js', 'slide-83.js',
    'slide-84.js', 'slide-92.js', 'slide-93.js', 'slide-103.js', 'slide-115.js',
    'slide-121.js', 'slide-125.js', 'slide-128.js', 'slide-136.js', 'slide-137.js'
]

for f in files:
    try:
        with open(f, 'r', encoding='utf-8') as file:
            content = file.read()
        
        original = content
        
        # The issue: files have \\" (two backslashes + quote) but should have \" (one backslash + quote)
        # Python repr shows \\ as two backslashes and \" as backslash-quote
        # So we need to replace \\ with \
        content = content.replace('\\', '\')
        
        if content != original:
            with open(f, 'w', encoding='utf-8') as file:
                file.write(content)
            print(f'Fixed: {f}')
        else:
            print(f'No change: {f}')
    except Exception as e:
        print(f'Error with {f}: {e}')
