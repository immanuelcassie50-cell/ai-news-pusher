#!/usr/bin/env python3
# Check for unescaped quotes inside JS strings that could cause issues

import os
import re
import sys

def check_js_file(path):
    """Check for potential quote issues in JS file"""
    issues = []

    try:
        with open(path, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        return None

    lines = content.split('\n')

    # Pattern to detect: a string that contains unescaped quotes inside
    # This regex looks for patterns like: "text"text" inside strings
    for i, line in enumerate(lines, 1):
        # Skip comments and require statements
        if line.strip().startswith('//') or line.strip().startswith('*'):
            continue

        # Look for patterns where we have string content with inner quotes
        # e.g., "some "quoted" text" - would be invalid
        # But first, let's check for Chinese curly quotes specifically

        # Check for Chinese curly quotes
        if '“' in line or '”' in line:
            issues.append({
                'line': i,
                'type': 'chinese_curly_quote',
                'content': line[:100]
            })

        # Check for ASCII quotes that appear to be unescaped inside strings
        # Pattern: something like "text"more" where the second " is not escaped
        # Simple heuristic: look for string followed by more text and another string
        if re.search(r'"[^"]*"[^"]*"', line):
            # This could be valid or invalid - need more context
            # But check if it looks like a problem
            if not re.search(r'\\"', line):  # No escaped quotes
                issues.append({
                    'line': i,
                    'type': 'possible_unescaped_quote',
                    'content': line[:100]
                })

    return issues if issues else None

def main():
    if len(sys.argv) > 1:
        base_path = sys.argv[1]
    else:
        base_path = '.'

    target_files = {
        'slide-35.js': 132,
        'slide-36.js': 51,
        'slide-80.js': 126,
        'slide-86.js': 37,
        'slide-88.js': 43,
        'slide-93.js': 112,
        'slide-97.js': 25,
        'slide-98.js': 55,
        'slide-99.js': 130,
        'slide-103.js': 87
    }

    print("Checking target slide files for quote issues...")
    print()

    for root, dirs, files in os.walk(base_path):
        # Skip certain directories
        if any(skip in root for skip in ['node_modules', '.git', '__pycache__']):
            continue

        for f in files:
            if f in target_files:
                path = os.path.join(root, f)
                issues = check_js_file(path)

                if issues:
                    print(f"\n=== {path} ===")
                    print(f"Target line {target_files[f]}:")
                    try:
                        with open(path, 'r', encoding='utf-8') as file:
                            lines = file.readlines()
                            if target_files[f] <= len(lines):
                                print(f"  {repr(lines[target_files[f]-1][:100])}")
                    except:
                        pass

                    print(f"\nIssues found ({len(issues)}):")
                    for issue in issues:
                        print(f"  Line {issue['line']}: [{issue['type']}] {repr(issue['content'])}")
                else:
                    # No issues, but show the target line anyway
                    try:
                        with open(path, 'r', encoding='utf-8') as file:
                            lines = file.readlines()
                            if target_files[f] <= len(lines):
                                print(f"\n{path} line {target_files[f]}: OK")
                                print(f"  {repr(lines[target_files[f]-1][:100])}")
                    except Exception as e:
                        print(f"\n{path}: Error reading - {e}")

if __name__ == '__main__':
    main()