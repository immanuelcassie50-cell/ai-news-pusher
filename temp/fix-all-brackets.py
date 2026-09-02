import re
import os

slidesDir = 'D:/新课开发/党业融合/经营者讲党课/完整课程包/003-授课PPT/slides'
files = sorted([f for f in os.listdir(slidesDir) if f.startswith('slide-') and f.endswith('.js')], key=lambda x: int(re.search(r'\d+', x).group()))

fixed = 0
for fname in files:
    fpath = os.path.join(slidesDir, fname)
    with open(fpath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Replace Chinese brackets with single quotes (they were used as quotation marks in Chinese)
    # But inside JS strings we need to escape them - so replace with \'
    # Actually simpler: replace 「 with ' and 」 with ' 
    new_content = content.replace('「', "'").replace('」', "'")
    
    if new_content != content:
        with open(fpath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        fixed += 1

print(f'Fixed {fixed} files')
