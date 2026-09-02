import os

slides_dir = r"D:/新课开发/企业大学/对内/1.企业大学重生：从内训中心到知识资产与智能体孵化枢纽的角色转型/PPT演示文稿/slides"

def fix_file(path):
    with open(path, 'rb') as f:
        content = f.read()

    original = content

    # The problematic patterns are:
    # slide.addText('"', {  (bytes: 27 22 27)
    # slide.addText(''", {  (bytes: 27 27 22 27)
    # slide.addText('"', {  (single quote, curly quote, single quote)

    # Replace patterns where single quote + curly quote + single quote form a broken string
    # Replace the curly quote character (0x22 in certain contexts) with unicode escape

    # Pattern 1: ' " ' (0x27 0x22 0x27) -> "\u201C",
    # This is: slide.addText('"', {
    # Fix: replace with double-quoted unicode escape
    content = content.replace(b"slide.addText('\"\', {", b'slide.addText("\\u201C", {')

    # Pattern 2: slide.addText(''", {
    content = content.replace(b"slide.addText(''\", {", b'slide.addText("\\u201C", {')
    content = content.replace(b"slide.addText(''\",", b'slide.addText("\\u201C",')

    # Also handle closing curly quote: slide.addText('"', { (should be \u201D)
    content = content.replace(b"slide.addText('\"\', {", b'slide.addText("\\u201D", {')
    content = content.replace(b"slide.addText(''\", {", b'slide.addText("\\u201D", {')

    if content != original:
        with open(path, 'wb') as f:
            f.write(content)
        return True
    return False

# Scan and fix all files
for f in sorted(os.listdir(slides_dir)):
    if f.startswith('slide-') and f.endswith('.js'):
        path = os.path.join(slides_dir, f)
        if fix_file(path):
            print(f'Fixed: {f}')