import re
import os

slidesDir = 'D:/新课开发/党业融合/经营者讲党课/完整课程包/003-授课PPT/slides'
files = sorted([f for f in os.listdir(slidesDir) if f.startswith('slide-') and f.endswith('.js')], key=lambda x: int(re.search(r'\d+', x).group()))

count = 0
for fname in files:
    fpath = os.path.join(slidesDir, fname)
    with open(fpath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Replace Chinese brackets with regular quotes
    content = content.replace('「', '"').replace('」', '"')
    
    with open(fpath, 'w', encoding='utf-8') as f:
        f.write(content)
    count += 1

print(f'Fixed {count} files')
