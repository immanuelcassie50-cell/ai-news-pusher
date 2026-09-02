#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import os
import sys

# Search for Chinese curly quotes in JS files
# " (U+201C) and " (U+201D)

def check_file(path):
    try:
        with open(path, 'r', encoding='utf-8') as f:
            content = f.read()
    except:
        try:
            with open(path, 'rb') as f:
                content = f.read().decode('utf-8', errors='replace')
        except Exception as e:
            return None

    lines = content.split('\n')
    issues = []
    for i, line in enumerate(lines, 1):
        # Check if line contains Chinese curly quotes
        if '"' in line or '"' in line:
            issues.append((i, line[:100]))

    return issues

def main():
    if len(sys.argv) > 1:
        base_path = sys.argv[1]
    else:
        base_path = 'D:/CC'

    for root, dirs, files in os.walk(base_path):
        # Skip certain directories
        if any(skip in root for skip in ['node_modules', '.git', '__pycache__']):
            continue

        for f in files:
            if f.endswith('.js'):
                path = os.path.join(root, f)
                issues = check_file(path)
                if issues:
                    print(f'\n=== {path} ===')
                    for line_num, line_content in issues:
                        print(f'  Line {line_num}: {repr(line_content)}')

if __name__ == '__main__':
    main()