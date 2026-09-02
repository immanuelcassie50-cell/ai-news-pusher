#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import re
import os
import subprocess

def analyze_and_fix(filepath):
    """Analyze a file and fix byte-level corruption."""
    print(f"\n=== Analyzing {filepath} ===")

    with open(filepath, 'rb') as f:
        content = f.read()

    lines = content.split(b'\n')

    # Find problematic lines by checking with node
    result = subprocess.run(['node', '--check', filepath], capture_output=True)
    if result.returncode == 0:
        print(f"  {filepath} is OK")
        return True

    # Get error line number
    stderr = result.stderr.decode('utf-8', errors='replace')
    match = re.search(r'slide-\d+\.js:(\d+)', stderr)
    if not match:
        print(f"  Could not find error line for {filepath}")
        return False

    error_line = int(match.group(1))
    print(f"  Error at line {error_line}")

    line = lines[error_line - 1]  # 0-indexed

    # Find quote positions in this line
    quote_positions = [i for i, b in enumerate(line) if b == 0x22]
    print(f"  Quote positions: {quote_positions}")

    # Find Chinese quote positions (E2 80 9C or E2 80 9D)
    chinese_open_positions = []
    chinese_close_positions = []
    for i in range(len(line) - 2):
        if line[i:i+3] == b'\xe2\x80\x9c':
            chinese_open_positions.append(i)
        elif line[i:i+3] == b'\xe2\x80\x9d':
            chinese_close_positions.append(i)

    print(f"  Chinese open quotes at: {chinese_open_positions}")
    print(f"  Chinese close quotes at: {chinese_close_positions}")

    # Show the line content around quotes
    print(f"  Line hex (first 200 bytes): {line[:200].hex()}")

    return False

# Fix each file
files_info = [
    ('slide-07.js', 49),
    ('slide-10.js', 93),
    ('slide-11.js', 34),
    ('slide-12.js', 25),
    ('slide-13.js', 25),
    ('slide-15.js', 39),
    ('slide-16.js', 9),
]

slides_dir = "D:/新课开发/工作手册/上桌：与权威平等协作的价值交换法则/完整课程包/03-授课PPT/slides"
os.chdir(slides_dir)

for filename, error_line in files_info:
    filepath = os.path.join(slides_dir, filename)
    analyze_and_fix(filepath)
