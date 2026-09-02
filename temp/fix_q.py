import re
with open(r'D:\CC\temp\pack_gaoguan.py', 'r', encoding='utf-8') as f:
    content = f.read()
curly_l = '“'
curly_r = '”'
lines = content.split('\n')
for i, line in enumerate(lines):
    if curly_l in line or curly_r in line:
        print(f"Line {i+1}: {repr(line[:100])}")
