import os
import re

slides_dir = r"D:/新课开发/企业大学/对内/1.企业大学重生：从内训中心到知识资产与智能体孵化枢纽的角色转型/PPT演示文稿/slides"

# 「 = E3 80 8C, 」 = E3 80 8D
corner_open = b'\xe3\x80\x8c'
corner_close = b'\xe3\x80\x8d'

fixed_count = 0
for f in sorted(os.listdir(slides_dir)):
    if f.startswith('slide-') and f.endswith('.js'):
        path = os.path.join(slides_dir, f)
        with open(path, 'rb') as file:
            content = file.read()

        # Replace 'text' with 「text」
        # Pattern: single quote, content, single quote
        new_content = re.sub(rb"'([^']+)'", lambda m: corner_open + m.group(1) + corner_close, content)

        if new_content != content:
            with open(path, 'wb') as file:
                file.write(new_content)
            print(f'Fixed: {f}')
            fixed_count += 1

print(f'\nTotal: {fixed_count} files fixed')