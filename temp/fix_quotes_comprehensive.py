#!/usr/bin/env python3
import os
import re

slides_dir = r"D:/新课开发/工作手册/隐性风险识别与日常稽核手册(岗位级)/完整课程包/04-授课PPT/slides"

# Get all slide files
slide_files = sorted([f for f in os.listdir(slides_dir) if f.startswith('slide-') and f.endswith('.js')])

fixed = []
 errors = []

for filename in slide_files:
    filepath = os.path.join(slides_dir, filename)
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original = content
        
        # Replace problematic curly quotes and other special chars that break JS strings
        # " and " (curly quotes) inside strings break JS - replace with fullwidth brackets
        content = content.replace('“', '「')  # " -> 「
        content = content.replace('”', '」')  # " -> 」
        
        # Also fix single curly quotes if they appear
        content = content.replace('‘', '‘')  # ' (keep as is, usually fine)
        content = content.replace('’', '’')  # ' (keep as is, usually fine)
        
        if content != original:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            fixed.append(filename)
    except Exception as e:
        errors.append(f"{filename}: {e}")

print(f"Fixed {len(fixed)} files:")
for f in fixed:
    print(f"  {f}")

if errors:
    print(f"\nErrors:")
    for e in errors:
        print(f"  {e}")
