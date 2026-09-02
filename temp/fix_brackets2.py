import os
import re

slides_dir = r"D:/新课开发/企业大学/对内/1.企业大学重生：从内训中心到知识资产与智能体孵化枢纽的角色转型/PPT演示文稿/slides"

for f in sorted(os.listdir(slides_dir)):
    if f.startswith('slide-') and f.endswith('.js'):
        path = os.path.join(slides_dir, f)
        with open(path, 'r', encoding='utf-8') as file:
            content = file.read()

        original = content

        # Fix: slide.addText(」text「, { -> slide.addText("text", {
        content = re.sub(r'slide\.addText\(」([^「」]*)「,', r'slide.addText("\1",', content)

        # Fix: slide.addText(」text「 -> slide.addText("text"
        content = re.sub(r'slide\.addText\(」([^「」]*)「\s*\{', r'slide.addText("\1", {', content)

        # Fix: closing bracket at start -> should be at end
        # Pattern: 」text -> "text"
        content = re.sub(r'」([^「」\n]+)「', r'"\1"', content)

        # Fix: slide.addText("text, { where text should end before options
        # Fix remaining issues with ) at end
        content = re.sub(r'slide\.addText\(([^)]+)\), \{', r'slide.addText(\1, {', content)

        if content != original:
            with open(path, 'w', encoding='utf-8') as file:
                file.write(content)
            print(f'Fixed: {f}')