import os
import re

slides_dir = r"D:/新课开发/企业大学/对内/1.企业大学重生：从内训中心到知识资产与智能体孵化枢纽的角色转型/PPT演示文稿/slides"

for f in sorted(os.listdir(slides_dir)):
    if f.startswith('slide-') and f.endswith('.js'):
        path = os.path.join(slides_dir, f)
        with open(path, 'r', encoding='utf-8') as file:
            content = file.read()

        original = content

        # Fix 1: slide.addText("• 」 + item, { -> slide.addText("• " + item, {
        content = content.replace('"• 」 + item', '"• " + item')

        # Fix 2: slide.addText(」text「, { -> slide.addText("text", {
        content = re.sub(r'slide\.addText\(」([^「」]*)「,', r'slide.addText("\1",', content)

        # Fix 3: slide.addText(」text「 -> slide.addText("text"
        content = re.sub(r'slide\.addText\(」([^「」]*)「\s*\{', r'slide.addText("\1", {', content)

        # Fix 4: closing bracket at start -> should be at end 」text「 -> "text"
        content = re.sub(r'」([^「」\n]+)「', r'"\1"', content)

        # Fix 5: pres.layout = 「LAYOUT_16x9」; -> pres.layout = "LAYOUT_16x9";
        content = re.sub(r'pres\.layout = 「([^」]+)」;', r'pres.layout = "\1";', content)

        # Fix 6: title: 」text', -> title: "text",
        content = re.sub(r'title: 」([^』\n]+)[\'"]?,', r'title: "\1",', content)

        # Fix 7: slide.addText(」text, { -> slide.addText("text", {
        content = re.sub(r'slide\.addText\(」([^」]+)"\{', r'slide.addText("\1", {', content)

        # Fix 8: Fix remaining edge cases with nested quotes in arrays
        # "text with "quotes" inside" patterns
        content = re.sub(r'"([^"]*)」([^"]*)"([^"]*)"', r'"\1\2\3"', content)

        # Fix 9: Fix \" patterns that should be just "
        content = content.replace('\\"', '"')

        # Fix 10: Fix slide.addText(」... patterns
        content = re.sub(r'slide\.addText\(」([^)]+)\), \{', r'slide.addText(\1, {', content)

        if content != original:
            with open(path, 'w', encoding='utf-8') as file:
                file.write(content)
            print(f'Fixed: {f}')