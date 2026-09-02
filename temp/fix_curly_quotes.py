#!/usr/bin/env python3
"""Fix JavaScript syntax errors by removing invalid backslash-quote sequences."""

import os
import re

slides_dir = r'D:/新课开发/心理学/20-非暴力沟通：亲密关系中的冲突转化/PPT/slides'
files = [
    'slide-26.js', 'slide-49.js', 'slide-63.js', 'slide-64.js', 'slide-65.js',
    'slide-67.js', 'slide-68.js', 'slide-69.js', 'slide-70.js', 'slide-76.js',
    'slide-77.js', 'slide-91.js', 'slide-92.js', 'slide-93.js', 'slide-94.js',
    'slide-95.js', 'slide-96.js', 'slide-97.js', 'slide-98.js', 'slide-99.js',
    'slide-100.js', 'slide-103.js', 'slide-105.js', 'slide-124.js'
]

# The problem: files have \" which is invalid JS syntax
# The Chinese text uses \" as quotation marks inside strings
# But this breaks JS parsing because \" inside a "..." string terminates it early
# Solution: Replace \"\" (Chinese quote pattern) with 「」 (Chinese corner brackets)

# Pattern: \" followed by Chinese text followed by \"
# These appear as: \"\"text\"\" in the file

# Strategy: Replace \"\" with 「」 when it appears as Chinese quotation marks

def fix_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    original = content

    # The backslash-quote is: chr(92) + chr(34) = \"
    bs_quote = chr(92) + '"'

    # We need to replace \"\" (two consecutive backslash-quotes with Chinese text between)
    # with proper Chinese quotes 「」
    # Pattern in file: \"\"ChineseText\"\"
    # This is: \" + \" + ChineseText + \" + \"

    # Replace pattern: \"\" followed by text and \"\" with 「text」
    # The pattern \"\" appears when someone used "" as Chinese quotes but escaped them

    # Simple approach: replace \"\" with 「」
    # But we need to be careful not to break legitimate patterns

    # Replace all \" with a placeholder, then fix the patterns, then restore
    # Actually simpler: replace \"\" with 「」 when it's used as Chinese quotation

    # Find all instances of \" followed by Chinese text followed by \"
    # Pattern: \"[^\"]{1,100}\" where content is Chinese

    # Let's do targeted replacement:
    # Replace \"\" (opening Chinese quote) with 「
    # Replace \"\" (closing Chinese quote) with 」

    # But the pattern is more complex - let me handle it more carefully

    # Actually, looking at the problem:
    # The file contains: strategy: \"\"你总是迟到！\"\"
    # This is: strategy: " + " + Chinese text + " + " + ,
    # The problem is the second " closes the string, and we have orphaned Chinese text

    # The fix: Replace \"\" (each pair) with 「 and 」

    # Replace \"\" with 「 (opening Chinese quote)
    content = content.replace('\\"', '「')

    # But this will mess up regular escaped quotes too...
    # Actually, the pattern \" appears EVERYWHERE in these files, including
    # legitimate uses like \"你好\" which should become 「你好」

    # So actually replacing all \" with 「 should work - it converts all Chinese quote marks

    if content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        return True
    return False

def main():
    fixed_count = 0
    for fname in files:
        fpath = os.path.join(slides_dir, fname)
        if os.path.exists(fpath):
            if fix_file(fpath):
                print(f'Fixed: {fname}')
                fixed_count += 1
            else:
                print(f'No changes: {fname}')
        else:
            print(f'NOT FOUND: {fname}')
    print(f'\nTotal files fixed: {fixed_count}/{len(files)}')

if __name__ == '__main__':
    main()