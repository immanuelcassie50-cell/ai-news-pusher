#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import subprocess
import os

slides_dir = "D:/新课开发/工作手册/上桌：与权威平等协作的价值交换法则/完整课程包/03-授课PPT/slides"
os.chdir(slides_dir)

# Files to fix and their error lines
files_to_fix = {
    'slide-10.js': 93,
    'slide-11.js': 34,
    'slide-12.js': 25,
    'slide-13.js': 25,
    'slide-15.js': 39,
    'slide-16.js': 9,
}

for filename, error_line in files_to_fix.items():
    print(f"\n=== Fixing {filename} (error at line {error_line}) ===")

    # First, check if file is valid
    result = subprocess.run(['node', '--check', filename], capture_output=True)
    if result.returncode == 0:
        print(f"  {filename} is already valid!")
        continue

    # Get the error details
    stderr = result.stderr.decode('utf-8', errors='replace')
    print(f"  Error: {stderr.split(chr(10))[0]}")

    # Read the file
    with open(filename, 'r', encoding='utf-8', errors='replace') as f:
        lines = f.readlines()

    # Show the problematic line
    line_idx = error_line - 1
    print(f"  Line {error_line}: {repr(lines[line_idx][:100])}")

    # For each file, apply specific fixes based on what we know

    if filename == 'slide-10.js':
        # Line 93 has issue with 把注意力从"我配不配"转移到"我能交付什么"
        line = lines[line_idx]
        # Fix: replace inner ASCII quotes with Chinese quotes
        line = line.replace('"我配不配"', '\u201c我配不配\u201d')
        line = line.replace('"我能交付什么"', '\u201c我能交付什么\u201d')
        lines[line_idx] = line

    elif filename == 'slide-11.js':
        # Line 34 has issue with 把注意力占用给了"交付什么"
        line = lines[line_idx]
        line = line.replace('"交付什么"', '\u201c交付什么\u201d')
        lines[line_idx] = line

    elif filename == 'slide-12.js':
        # Line 25 has issue with "上下"是伪命题
        line = lines[line_idx]
        line = line.replace('"上下"是伪命题', '\u201c上下\u201d是伪命题')
        lines[line_idx] = line

    elif filename == 'slide-13.js':
        # Line 25 has issue with several Chinese quotes in questions
        line = lines[line_idx]
        line = line.replace('"证明自己"', '\u201c证明自己\u201d')
        line = line.replace('"我配不配"', '\u201c我配不配\u201d')
        line = line.replace('"我贵不贵"', '\u201c我贵不贵\u201d')
        lines[line_idx] = line

    elif filename == 'slide-15.js':
        # Line 39 has issue with "我够不够格认识你"
        line = lines[line_idx]
        line = line.replace('"我够不够格认识你"', '\u201c我够不够格认识你\u201d')
        lines[line_idx] = line

    elif filename == 'slide-16.js':
        # Line 9 has issue with "配不配"
        line = lines[line_idx]
        line = line.replace('"配不配"', '\u201c配不配\u201d')
        lines[line_idx] = line

    # Write the file
    with open(filename, 'w', encoding='utf-8') as f:
        f.writelines(lines)

    # Verify
    result = subprocess.run(['node', '--check', filename], capture_output=True)
    if result.returncode == 0:
        print(f"  {filename} fixed successfully!")
    else:
        print(f"  {filename} still has errors")
        stderr = result.stderr.decode('utf-8', errors='replace')
        print(f"  Error: {stderr.split(chr(10))[0]}")

print("\n=== Done ===")
