#!/usr/bin/env python3
"""Fix the 7 broken slides - remove spurious backslash before closing quote in strings."""
import re, os

SLIDES_DIR = r"D:\新课开发\内训师和表达\系列进阶课\12-内训项目运营：选师、建课、认证、应用与激励机制设计\授课PPT\slides"
FILES = ['slide-36.js','slide-49.js','slide-67.js','slide-76.js','slide-80.js','slide-97.js','slide-98.js']

# The problem: strings like desc:"...内容\"" where the \" is a spurious escape
# before what should be the closing double-quote.
# We need to change \" (before closing ") to just "
# But we must NOT touch actual escaped quotes like \" inside content

for fname in FILES:
    fpath = os.path.join(SLIDES_DIR, fname)
    if not os.path.exists(fpath):
        print(f'NOT FOUND: {fname}')
        continue

    with open(fpath, 'r', encoding='utf-8') as f:
        content = f.read()

    original = content

    # Find lines with the broken pattern and fix them.
    # The broken pattern is: a JS string value ending with CJK + \" + " (closing)
    # e.g. desc:"有什么老师就开什么课，不是业务需要什么开什么\"
    #       desc:"新员工和总经理学一样的东西\"
    # These should be: desc:"有什么老师就开什么课，不是业务需要什么开什么"
    #                  desc:"新员工和总经理学一样的东西"

    lines = content.split('\n')
    new_lines = []
    changes = []
    for i, line in enumerate(lines):
        # Match: any string value (after : or = or ,) that ends with CJK\" and then "
        # Pattern in the line: :"<content\>"\n or :"<content\>",\n etc.
        # We want to find CJK\" followed by end-of-string " and fix it

        # The regex: (?<=[一-鿿])" matches a quote preceded by CJK
        # But we need to find \x5c\x22 (backslash+quote) that appears just before the closing "
        # and remove the backslash

        # Pattern: a double-quoted string that ends with: CJK chars, then \" then "
        # The fix: change \" to " when it's right before the closing "

        # Simple approach: for each line, find the pattern CJK\" followed by closing "
        # and remove the backslash
        fixed = re.sub(r'([一-鿿])\\\"(\s*["\'])', r'\1"\2', line)
        if fixed != line:
            changes.append((i+1, line.strip()[:80], fixed.strip()[:80]))
            new_lines.append(fixed)
        else:
            new_lines.append(line)

    if changes:
        content = '\n'.join(new_lines)
        with open(fpath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f'Fixed: {fname}')
        for lineno, old, new in changes:
            print(f'  Line {lineno}: {new}')
    else:
        print(f'No pattern found: {fname}')

print('Done')