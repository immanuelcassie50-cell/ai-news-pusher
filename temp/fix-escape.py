import os
import re

slidesDir = 'D:/新课开发/党业融合/经营者讲党课/完整课程包/003-授课PPT/slides'
files = sorted([f for f in os.listdir(slidesDir) if re.match(r'^slide-\d+\.js$', f)], key=lambda x: int(re.search(r'\d+', x).group()))

for fname in files:
    fpath = os.path.join(slidesDir, fname)
    with open(fpath, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    fixed_lines = []
    for line in lines:
        if 'addText' in line:
            # Count quotes in the line
            # If more than 4 (2 for string opener/closer + inner quotes), fix needed
            # Actually simpler: find any " that's between addText( and , {
            # and escape it
            
            # Find the addText content portion
            start = line.find('addText("')
            if start != -1:
                # Find the closing ", { pattern
                end = line.find('", {', start)
                if end != -1:
                    # Extract content between addText(" and ", {
                    content_start = start + len('addText("')
                    content_end = end
                    content = line[content_start:content_end]
                    
                    # Check if content has inner quotes (not escaped)
                    if '"' in content and not content.startswith('\\"'):
                        # Need to escape inner quotes
                        fixed_content = content.replace('"', '\\"')
                        line = line[:content_start] + fixed_content + line[content_end:]
        
        fixed_lines.append(line)
    
    with open(fpath, 'w', encoding='utf-8') as f:
        f.writelines(fixed_lines)

print('Done')
