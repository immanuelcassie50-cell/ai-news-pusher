import os
import re

slidesDir = 'D:/新课开发/党业融合/经营者讲党课/完整课程包/003-授课PPT/slides'
files = sorted([f for f in os.listdir(slidesDir) if re.match(r'^slide-\d+\.js$', f)], key=lambda x: int(re.search(r'\d+', x).group()))

for fname in files:
    fpath = os.path.join(slidesDir, fname)
    with open(fpath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Pattern: within addText strings, find "Chinese" and replace with 「Chinese」
    # The issue is we replaced 「」 with "" and now have nested quotes
    
    # Find all addText("..." content
    # Replace patterns like: "一岗双责" -> 「一岗双责」 when Chinese chars involved
    def fix_quotes(m):
        inner = m.group(1)
        # If inner contains Chinese characters, use Chinese brackets
        if re.search(r'[一-鿿]', inner):
            return '「' + inner + '」'  # 「」
        return '"' + inner + '"'
    
    # Match: "content" where content might have Chinese
    content = re.sub(r'"([^"]+)"', fix_quotes, content)
    
    with open(fpath, 'w', encoding='utf-8') as f:
        f.write(content)

print('Done')
