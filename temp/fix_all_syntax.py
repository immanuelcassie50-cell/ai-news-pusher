import os
import re

slides_dir = r"D:/新课开发/企业大学/对内/1.企业大学重生：从内训中心到知识资产与智能体孵化枢纽的角色转型/PPT演示文稿/slides"

def fix_file(content):
    """Fix Chinese curly quotes in addText and other string contexts."""
    lines = content.split('\n')
    fixed_lines = []
    changes = 0

    for line in lines:
        if 'addText' not in line and 'text:' not in line:
            fixed_lines.append(line)
            continue

        original = line

        # Fix patterns:
        # 1. slide.addText("text with "embedded" quotes", {...}) - broken
        # 2. slide.addText('text with 'embedded' quotes', {...}) - broken
        # 3. text: ""替代"" - broken

        # Replace Chinese curly quotes with escaped straight quotes or unicode escapes
        # " (U+201C) -> \u201C or escaped quote
        # " (U+201D) -> \u201D or escaped quote

        # Simple approach: replace all curly quotes with unicode escapes in string contexts
        # For addText calls, replace inside the string argument only

        # Find addText calls
        if 'addText' in line:
            # Pattern: addText("content", {options}) or addText('content', {options})
            # Find the string argument and fix quotes inside

            # Replace Chinese quotes with unicode escapes
            line = line.replace('\u201c', '\\u201C')  # "
            line = line.replace('\u201d', '\\u201D')  # "

        # Fix text property patterns like: text: ""替代""
        if 'text:' in line:
            line = line.replace('\u201c', '\\u201C')
            line = line.replace('\u201d', '\\u201D')

        if line != original:
            changes += 1
            fixed_lines.append(line)
        else:
            fixed_lines.append(line)

    return '\n'.join(fixed_lines), changes

# First, let's scan all files and identify which ones have the problematic chars
error_files = [
    'slide-101.js', 'slide-102.js', 'slide-103.js', 'slide-104.js', 'slide-108.js',
    'slide-110.js', 'slide-116.js', 'slide-117.js', 'slide-119.js', 'slide-139.js',
    'slide-140.js', 'slide-141.js', 'slide-29.js', 'slide-43.js', 'slide-49.js',
    'slide-52.js', 'slide-55.js', 'slide-65.js', 'slide-66.js', 'slide-70.js',
    'slide-81.js', 'slide-89.js', 'slide-91.js', 'slide-94.js', 'slide-97.js', 'slide-98.js'
]

total_changes = 0
for f in error_files:
    path = os.path.join(slides_dir, f)
    if not os.path.exists(path):
        print(f'Not found: {f}')
        continue

    with open(path, 'r', encoding='utf-8') as file:
        content = file.read()

    new_content, changes = fix_file(content)
    if changes > 0:
        with open(path, 'w', encoding='utf-8') as file:
            file.write(new_content)
        print(f'Fixed {changes} lines in {f}')
        total_changes += changes

print(f'\nTotal: Fixed {total_changes} lines')