#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Fix GBK encoding issues in slide JS files.
Reads files as GBK binary, re-encodes as UTF-8.
"""

import os
import sys

slides_dir = r'D:\新课开发\电力\8-基层班组管理与新生代员工激活\授课PPT\slides'

# All affected files from the issue description
affected = [
    'slide-03.js', 'slide-05.js', 'slide-06.js', 'slide-08.js', 'slide-09.js',
    'slide-11.js', 'slide-12.js', 'slide-14.js', 'slide-15.js', 'slide-18.js',
    'slide-19.js', 'slide-22.js', 'slide-23.js', 'slide-24.js', 'slide-25.js',
    'slide-26.js', 'slide-27.js', 'slide-28.js', 'slide-29.js', 'slide-30.js',
    'slide-34.js', 'slide-35.js', 'slide-37.js', 'slide-38.js', 'slide-40.js',
    'slide-52.js', 'slide-54.js', 'slide-59.js', 'slide-64.js', 'slide-65.js',
    'slide-69.js', 'slide-70.js', 'slide-71.js', 'slide-73.js', 'slide-75.js',
    'slide-88.js', 'slide-90.js', 'slide-121.js', 'slide-122.js', 'slide-123.js',
    'slide-124.js', 'slide-125.js', 'slide-126.js', 'slide-127.js', 'slide-130.js',
    'slide-133.js', 'slide-135.js', 'slide-138.js', 'slide-140.js'
]

def has_chinese(text):
    """Check if text contains Chinese characters"""
    return any(0x4e00 <= ord(c) <= 0x9fff for c in text)

def try_fix_encoding(filepath):
    """Try to fix encoding of a single file"""
    with open(filepath, 'rb') as fp:
        raw = fp.read()

    # Try different encodings
    for encoding in ['gbk', 'gb18030']:
        try:
            content = raw.decode(encoding)
            # Check if it has valid Chinese characters (indicates it was actually GBK)
            if has_chinese(content):
                # Write back as UTF-8
                with open(filepath, 'w', encoding='utf-8') as fp:
                    fp.write(content)
                return f'Fixed ({encoding}): {os.path.basename(filepath)}'
        except (UnicodeDecodeError, LookupError):
            continue

    # If already valid UTF-8 with Chinese, just note it
    try:
        content = raw.decode('utf-8')
        if has_chinese(content):
            return f'Already UTF-8: {os.path.basename(filepath)}'
    except:
        pass

    return f'SKIPPED (no Chinese/invalid): {os.path.basename(filepath)}'

def main():
    fixed_count = 0
    skipped_count = 0
    already_utf8 = 0

    print(f"Processing {len(affected)} files...\n")

    for filename in affected:
        filepath = os.path.join(slides_dir, filename)
        if not os.path.exists(filepath):
            print(f'NOT FOUND: {filename}')
            skipped_count += 1
            continue

        result = try_fix_encoding(filepath)
        print(result)

        if 'Fixed' in result:
            fixed_count += 1
        elif 'Already UTF-8' in result:
            already_utf8 += 1
        else:
            skipped_count += 1

    print(f"\n--- Summary ---")
    print(f"Fixed (GBK->UTF-8): {fixed_count}")
    print(f"Already UTF-8: {already_utf8}")
    print(f"Skipped/Not found: {skipped_count}")
    print(f"Total: {fixed_count + already_utf8 + skipped_count}")

if __name__ == '__main__':
    main()