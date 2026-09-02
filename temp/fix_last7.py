#!/usr/bin/env python3
"""Fix trailing inner-quote escapes in 7 broken slides."""
import re, os

SLIDES_DIR = r"D:\新课开发\内训师和表达\系列进阶课\12-内训项目运营：选师、建课、认证、应用与激励机制设计\授课PPT\slides"
FILES = ['slide-36.js','slide-49.js','slide-67.js','slide-76.js','slide-80.js','slide-97.js','slide-98.js']

CJK_RANGE = re.compile(r'[一-鿿]')

for fname in FILES:
    fpath = os.path.join(SLIDES_DIR, fname)
    if not os.path.exists(fpath):
        print(f'NOT FOUND: {fname}')
        continue

    with open(fpath, 'r', encoding='utf-8') as f:
        content = f.read()

    original = content

    # Strategy: find patterns like ChineseChar\" followed by " (end of string)
    # and fix them to ChineseChar" followed by "
    # The pattern in JS: desc:"content\""
    # Should be: desc:"content"

    # Fix: content ending with CJK followed by \" and then closing "
    # Replace: (CJK char) \" "  with: (CJK char) " "
    content = re.sub(r'([一-鿿])\\\"(\s*[\n\r]+)', r'\1"\2', content)
    content = re.sub(r'([一-鿿])\\\"(\s*[,;:\]\)\}])', r'\1"\2', content)
    # Fix trailing \" before end of line / closing quote
    content = re.sub(r'([一-鿿])\\\"(\s*[\n\r]*[\"\']*\s*[\n\r]*)', r'\1"\2', content)

    # More aggressive: find all instances of CJK\" followed by anything that ends a string
    # Match: CJK + backslash-quote + any whitespace + closing quote
    content = re.sub(r'(\s)([一-鿿])\\\"(\s*)"', r'\1\2"\3"', content)

    # General fix: if we see \" that's NOT preceded by a backslash already, and the preceding
    # char is CJK, and next char is the closing quote of a string, remove the backslash
    lines = content.split('\n')
    new_lines = []
    for line in lines:
        # Pattern: some content ending with CJK then \" then "
        # Example: desc:"有什么老师就开什么课，不是业务需要什么开什么\"
        # Should become: desc:"有什么老师就开什么课，不是业务需要什么开什么"
        new_line = re.sub(r'([一-鿿])\\\"(\s*)$', r'\1"\2', line)
        new_lines.append(new_line)

    content = '\n'.join(new_lines)

    if content != original:
        with open(fpath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f'Fixed: {fname}')
        # Show what changed
        for i, (old, new) in enumerate(zip(original.split('\n'), content.split('\n'))):
            if old != new:
                print(f'  Line {i+1}: {new.strip()[:80]}')
    else:
        print(f'No change: {fname}')

print('Done')