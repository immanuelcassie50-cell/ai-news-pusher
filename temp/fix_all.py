import os
import re

slides_dir = r"D:/新课开发/企业大学/对内/1.企业大学重生：从内训中心到知识资产与智能体孵化枢纽的角色转型/PPT演示文稿/slides"

def fix_file(path):
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    original = content

    # Pattern 1: slide.addText(「text」, -> slide.addText("text",
    content = re.sub(r'slide\.addText\(「([^」]+)」,', r'slide.addText("\1",', content)

    # Pattern 2: slide.addText(「text」 { -> slide.addText("text", {
    content = re.sub(r'slide\.addText\(「([^」]+)」\s*\{', r'slide.addText("\1", {', content)

    # Pattern 3: slide.addText(「text with "quoted" text」 -> slide.addText("text with \"quoted\" text"
    # Handle escaped quotes inside
    content = re.sub(r'「([^」]+)"([^」]+)」', r'「\1\\"\2」', content)

    # Pattern 4: 「text「nested」text」 -> 「text【nested】text」
    content = re.sub(r'「([^「」]*)「([^」]*)」([^「」]*)」', r'「\1【\2】\3」', content)

    # Pattern 5: Fix remaining addText with corner brackets
    content = re.sub(r'slide\.addText\(「', 'slide.addText("', content)

    # Pattern 6: Fix trailing 」 after addText
    content = re.sub(r'」,\s*\{', '", {', content)
    content = re.sub(r'」,\s*\n', '",\n', content)

    # Pattern 7: Fix array items like: 「text」, -> "text",
    content = re.sub(r'「([^」]+)」,', r'"\1",', content)
    content = re.sub(r'「([^」]+)」\)', r'"\1")', content)

    if content != original:
        with open(path, 'w', encoding='utf-8') as f:
            f.write(content)
        return True
    return False

fixed = []
for f in sorted(os.listdir(slides_dir)):
    if f.startswith('slide-') and f.endswith('.js'):
        path = os.path.join(slides_dir, f)
        if fix_file(path):
            fixed.append(f)

print(f"Fixed {len(fixed)} files")
for f in fixed:
    print(f"  {f}")