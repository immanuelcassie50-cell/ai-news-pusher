import os
import re

slides_dir = r"D:/新课开发/企业大学/对内/1.企业大学重生：从内训中心到知识资产与智能体孵化枢纽的角色转型/PPT演示文稿/slides"

# Mapping of lowercase to uppercase shape types
fixes = {
    'pres.shapes.rect': 'pres.shapes.RECTANGLE',
    'pres.shapes.ellipse': 'pres.shapes.OVAL',
    'pres.shapes.roundRect': 'pres.shapes.ROUNDED_RECTANGLE',
    'pptx.ShapeType.rect': 'pptx.ShapeType.RECTANGLE',
    'pptx.ShapeType.ellipse': 'pptx.ShapeType.OVAL',
    'pptx.ShapeType.roundRect': 'pptx.ShapeType.ROUNDED_RECTANGLE',
}

for f in sorted(os.listdir(slides_dir)):
    if f.startswith('slide-') and f.endswith('.js'):
        path = os.path.join(slides_dir, f)
        with open(path, 'r', encoding='utf-8') as file:
            content = file.read()

        original = content
        for old, new in fixes.items():
            content = content.replace(old, new)

        if content != original:
            with open(path, 'w', encoding='utf-8') as file:
                file.write(content)
            print(f'Fixed: {f}')