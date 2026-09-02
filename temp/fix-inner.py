import re
import os

slidesDir = 'D:/新课开发/党业融合/经营者讲党课/完整课程包/003-授课PPT/slides'
files = sorted([f for f in os.listdir(slidesDir) if f.startswith('slide-') and f.endswith('.js')], key=lambda x: int(re.search(r'\d+', x).group()))

fixes = 0
for fname in files:
    fpath = os.path.join(slidesDir, fname)
    with open(fpath, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    fixed_lines = []
    for line in lines:
        if 'addText' in line:
            m = re.match(r'^(.*addText\()(\".*?\",\s*\{)(.*)$', line)
            if m:
                prefix = m.group(1)
                content_and_opts = m.group(2)
                suffix = m.group(3)
                
                content_match = re.match(r'"(.*)",\s*\{', content_and_opts)
                if content_match:
                    text_content = content_match.group(1)
                    # Replace "Chinese" with 「Chinese」
                    text_content = re.sub(r'"([一-鿿]+)"', '「\1」', text_content)
                    text_content = re.sub(r'"([一-鿿]+)"', '「\1」', text_content)
                    
                    new_content_and_opts = '"' + text_content + '", {'
                    line = prefix + new_content_and_opts + suffix
                    fixes += 1
        
        fixed_lines.append(line)
    
    with open(fpath, 'w', encoding='utf-8') as f:
        f.writelines(fixed_lines)

print(f'Done - made {fixes} fixes')
