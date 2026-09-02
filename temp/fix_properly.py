import os
import re

slides_dir = r"D:/新课开发/企业大学/对内/1.企业大学重生：从内训中心到知识资产与智能体孵化枢纽的角色转型/PPT演示文稿/slides"

# 「 = E3 80 8C, 」 = E3 80 8D
corner_open = b'\xe3\x80\x8c'
corner_close = b'\xe3\x80\x8d'

def is_chinese(text):
    """Check if text contains Chinese characters."""
    for c in text:
        if '\u4e00' <= c <= '\u9fff':
            return True
    return False

def fix_single_quotes(content):
    """Replace single-quoted strings containing Chinese with corner brackets."""
    lines = content.split('\n')
    fixed_lines = []
    changes = 0

    for line in lines:
        # Only process lines that have single quotes
        if "'" not in line:
            fixed_lines.append(line)
            continue

        # Check if this line has Chinese text inside single quotes
        # Pattern: 'text' where text contains Chinese
        # We need to be careful not to replace legitimate strings

        # Find all single-quoted segments
        new_line = line
        for match in re.finditer(r"'([^']+)'", line):
            inner = match.group(1)
            if is_chinese(inner):
                # This needs to be fixed - Chinese text inside single quotes
                # Replace with corner brackets
                replacement = '\u300c' + inner + '\u300d'
                new_line = new_line[:match.start()] + replacement + new_line[match.end():]

        if new_line != line:
            changes += 1
            fixed_lines.append(new_line)
        else:
            fixed_lines.append(line)

    return '\n'.join(fixed_lines), changes

# Fix all slides
total_changes = 0
for f in sorted(os.listdir(slides_dir)):
    if f.startswith('slide-') and f.endswith('.js'):
        path = os.path.join(slides_dir, f)
        with open(path, 'r', encoding='utf-8') as file:
            content = file.read()

        new_content, changes = fix_single_quotes(content)
        if changes > 0:
            with open(path, 'w', encoding='utf-8') as file:
                file.write(new_content)
            print(f'{f}: {changes} fixes')
            total_changes += changes

print(f'\nTotal: {total_changes} lines fixed')