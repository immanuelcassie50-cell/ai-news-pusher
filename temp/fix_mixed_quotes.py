import os
import re

slides_dir = r"D:/新课开发/企业大学/对内/1.企业大学重生：从内训中心到知识资产与智能体孵化枢纽的角色转型/PPT演示文稿/slides"

for f in ['slide-94.js', 'slide-117.js', 'slide-140.js', 'slide-139.js', 'slide-141.js']:
    path = os.path.join(slides_dir, f)
    if not os.path.exists(path):
        continue
    with open(path, 'r', encoding='utf-8') as file:
        content = file.read()

    original = content

    # Fix: slide.addText('「", { -> slide.addText("「", {
    content = content.replace("slide.addText('「\", {", 'slide.addText("「", {')

    # Fix: slide.addText('「超越企业大学的方法论"", { -> slide.addText("「超越企业大学的方法论」", {
    content = content.replace("slide.addText('「超越企业大学的方法论\"\", {", 'slide.addText("「超越企业大学的方法论」", {')

    # Fix: slide.addText('「今天的结束，是行动的开始"", { -> slide.addText("「今天的结束，是行动的开始」", {
    content = content.replace("slide.addText('「今天的结束，是行动的开始\"\", {", 'slide.addText("「今天的结束，是行动的开始」", {')

    if content != original:
        with open(path, 'w', encoding='utf-8') as file:
            file.write(content)
        print(f'Fixed: {f}')