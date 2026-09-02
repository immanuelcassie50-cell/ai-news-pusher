import os
import re

slides_dir = r"D:/新课开发/企业大学/对内/1.企业大学重生：从内训中心到知识资产与智能体孵化枢纽的角色转型/PPT演示文稿/slides"

for f in sorted(os.listdir(slides_dir)):
    if f.startswith('slide-') and f.endswith('.js'):
        path = os.path.join(slides_dir, f)
        with open(path, 'r', encoding='utf-8') as file:
            content = file.read()

        original = content

        # Fix escaped quotes that shouldn't be escaped
        # \"Georgia\" -> "Georgia"
        # \"Microsoft YaHei\" -> "Microsoft YaHei"
        content = content.replace('\\"Georgia\\"', '"Georgia"')
        content = content.replace('\\"Microsoft YaHei\\"', '"Microsoft YaHei"')
        content = content.replace('\\"Arial\\"', '"Arial"')

        # Fix fontFace: \"...\"
        content = re.sub(r'fontFace: \\"([^"]+)\\"', r'fontFace: "\1"', content)

        # Fix other common escaped patterns
        content = content.replace('\\"', '"')

        if content != original:
            with open(path, 'w', encoding='utf-8') as file:
                file.write(content)
            print(f'Fixed: {f}')