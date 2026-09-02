import re
import os

slidesDir = 'D:/新课开发/党业融合/经营者讲党课/完整课程包/003-授课PPT/slides'
files = sorted([f for f in os.listdir(slidesDir) if f.startswith('slide-') and f.endswith('.js')], key=lambda x: int(re.search(r'\d+', x).group()))

fixed_count = 0
for fname in files:
    fpath = os.path.join(slidesDir, fname)
    with open(fpath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original = content
    
    # Pattern 1: \"Chinese\" inside a string - replace with 「Chinese」
    # This matches escaped quotes followed by Chinese chars and ending quote
    content = re.sub(r'\\"([^"]+)"', lambda m: '「' + m.group(1) + '」' if re.search(r'[一-鿿]', m.group(1)) else m.group(0), content)
    
    # Pattern 2: "Chinese" inside a string (unbalanced) 
    # Find addText calls and fix the string content
    def fix_addtext(m):
        prefix = m.group(1)
        text_content = m.group(2)
        suffix = m.group(3)
        
        # If text_content has unescaped Chinese quotation marks, fix them
        # The Chinese text might be wrapped in " but should use 「」
        if re.search(r'[一-鿿]', text_content):
            # Replace any remaining " that are acting as Chinese quotes with 「」
            fixed_text = re.sub(r'"([^"]+)"', lambda n: '「' + n.group(1) + '」' if re.search(r'[一-鿿]', n.group(1)) else '"' + n.group(1) + '"', text_content)
            return prefix + '"' + fixed_text + '"' + suffix
        return m.group(0)
    
    content = re.sub(r'^(.*addText\()"([^"]+)"(,\s*\{.*)$', fix_addtext, content, flags=re.MULTILINE)
    
    if content != original:
        with open(fpath, 'w', encoding='utf-8') as f:
            f.write(content)
        fixed_count += 1

print(f'Fixed {fixed_count} files')
