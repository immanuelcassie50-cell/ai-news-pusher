import os
import re

slides_dir = r"D:/新课开发/企业大学/对内/1.企业大学重生：从内训中心到知识资产与智能体孵化枢纽的角色转型/PPT演示文稿/slides"

def fix_file(path):
    with open(path, 'rb') as f:
        content = f.read()

    original = content

    # Chinese curly quotes as bytes
    # U+201C " = E2 80 9C
    # U+201D " = E2 80 9D

    # Replace Chinese curly quotes with escaped double quotes within text contexts
    # Pattern: { text: ""替代""  or { text: ""word""
    # The issue is "" (curly quotes) interpreted as JS string delimiters

    # Strategy: Replace "" in text property values with escaped quotes
    # text: ""替代"" -> text: "\"\u201C替代\u201D\""
    # But that's complex. Simpler: just use single quotes for the outer string

    # Replace the Chinese curly quotes with Unicode escape sequences
    # This keeps the visual appearance but won't break JS parsing
    content = content.replace(b'\xe2\x80\x9c', b'\\u201C')  # " -> \u201C
    content = content.replace(b'\xe2\x80\x9d', b'\\u201D')  # " -> \u201D

    if content != original:
        with open(path, 'wb') as f:
            f.write(content)
        return True
    return False

# Fix all JS files
fixed_count = 0
for f in sorted(os.listdir(slides_dir)):
    if f.startswith('slide-') and f.endswith('.js'):
        path = os.path.join(slides_dir, f)
        if fix_file(path):
            print(f'Fixed: {f}')
            fixed_count += 1

print(f'\nTotal fixed: {fixed_count} files')