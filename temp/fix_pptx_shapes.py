import os

slides_dir = r"D:/新课开发/企业大学/对内/1.企业大学重生：从内训中心到知识资产与智能体孵化枢纽的角色转型/PPT演示文稿/slides"

for f in sorted(os.listdir(slides_dir)):
    if f.startswith('slide-') and f.endswith('.js'):
        path = os.path.join(slides_dir, f)
        with open(path, 'r', encoding='utf-8') as file:
            content = file.read()

        original = content

        # Fix pptx.ShapeType.XXX -> pptx.shapes.XXX
        content = content.replace('pptx.ShapeType.', 'pptx.shapes.')

        if content != original:
            with open(path, 'w', encoding='utf-8') as file:
                file.write(content)
            print(f'Fixed: {f}')