#!/usr/bin/env python3
"""Comprehensive fix for all slide JS files"""
import re, os

base = r"D:\新课开发\数字化转型\4.价值密度战略设计：从交付产品到交付结果\授课PPT\slides"

def read(path):
    with open(path, 'r', encoding='utf-8') as f:
        return f.read()

def write(path, content):
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)

def fix_file(path):
    content = read(path)
    original = content

    # Fix 1: Module-level theme reference (e.g., `theme` in slideConfig outside function)
    content = re.sub(r'const slideConfig = \{[^}]*theme\s*\};?\n', '', content)

    # Fix 2: Arrays ending with single quote: ["a", "b', ...] -> ["a", "b", ...]
    # Pattern: ...item'" followed by ] or , ]
    lines = content.split('\n')
    fixed_lines = []
    for line in lines:
        # Look for array items ending with single quote before ] or ,
        if re.search(r'"\',?\s*\]|"\',?\s*,', line):
            # Replace trailing single quote in array items
            line = re.sub(r'"(\s*[,\]])', r'"\1', line)
        fixed_lines.append(line)
    content = '\n'.join(fixed_lines)

    # Fix 3: Strings with nested quotes
    def fix_nested(m):
        prefix = m.group(1)
        outer = m.group(2)
        inner = m.group(3)
        suffix = m.group(4)
        inner_double = inner.count('"')
        inner_single = inner.count("'")
        if inner_double > 0 and inner_single == 0:
            if outer == '"':
                return prefix + "'" + inner + "'" + suffix
        elif inner_single > 0 and inner_double == 0:
            if outer == "'":
                return prefix + '"' + inner + '"' + suffix
        return m.group(0)

    content = re.sub(
        r'(slide\.addText|slide\.addShape)\(((?:\"(?:[^\"\\]|\\.)*\"|\'(?:[^\'\\]|\\.)*\')|),(.*?)(,(?:\s*\{[^}]*\})?)\)',
        fix_nested,
        content,
        flags=re.DOTALL
    )

    # Fix 4: Wrong API (pptx.ShapeType.rect)
    content = content.replace('pptx.ShapeType.rect', 'pres.shapes.RECTANGLE')
    content = content.replace('pptx.ShapeType.ellipse', 'pres.shapes.OVAL')
    content = content.replace('pptx.ShapeType.', 'pres.shapes.')

    # Fix 5: return pptx instead of slide
    content = content.replace('return pptx;', 'return slide;')

    return content if content != original else None

files = sorted([f for f in os.listdir(base) if f.startswith('slide-') and f.endswith('.js')],
               key=lambda x: int(re.search(r'\d+', x).group()))

fixed_count = 0
for fname in files:
    path = os.path.join(base, fname)
    try:
        result = fix_file(path)
        if result:
            write(path, result)
            print(f"Fixed: {fname}")
            fixed_count += 1
    except Exception as e:
        print(f"Error {fname}: {e}")

print(f"\nTotal fixed: {fixed_count}")
