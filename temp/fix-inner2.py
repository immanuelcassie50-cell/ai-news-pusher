import re
import os

slidesDir = 'D:/新课开发/党业融合/经营者讲党课/完整课程包/003-授课PPT/slides'
files = sorted([f for f in os.listdir(slidesDir) if f.startswith('slide-') and f.endswith('.js')], key=lambda x: int(re.search(r'\d+', x).group()))

fixes = 0
for fname in files:
    fpath = os.path.join(slidesDir, fname)
    with open(fpath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Fix: any remaining "Chinese" patterns that should use 「」
    # Match any quoted text that has Chinese characters
    # Use \p{Script=Han} or just match anything that's not ASCII quote
    
    # Pattern: find "TEXT" where TEXT contains at least one Chinese char
    # and replace with 「TEXT」
    
    def fix_inner_quotes(m):
        inner = m.group(1)
        # Only fix if inner contains Chinese characters
        if re.search(r'[一-鿿]', inner):
            return '「' + inner + '」'
        return '"' + inner + '"'
    
    # Fix quoted strings that are likely Chinese quotations
    content = re.sub(r'"([^"]+)"', fix_inner_quotes, content)
    
    with open(fpath, 'w', encoding='utf-8') as f:
        f.write(content)
    fixes += 1

print(f'Done - processed {fixes} files')
