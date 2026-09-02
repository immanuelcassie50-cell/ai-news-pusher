#!/usr/bin/env python3
# Fix all broken slides - systematic approach
import os, re

broken = [
    'slide-10.js', 'slide-11.js', 'slide-12.js', 'slide-18.js', 'slide-19.js',
    'slide-20.js', 'slide-27.js', 'slide-42.js', 'slide-43.js', 'slide-44.js',
    'slide-45.js', 'slide-46.js', 'slide-48.js', 'slide-49.js', 'slide-53.js',
    'slide-54.js', 'slide-63.js', 'slide-67.js', 'slide-69.js', 'slide-73.js',
    'slide-76.js', 'slide-77.js', 'slide-79.js', 'slide-82.js', 'slide-86.js',
    'slide-89.js', 'slide-91.js', 'slide-92.js', 'slide-93.js', 'slide-94.js',
    'slide-95.js', 'slide-96.js', 'slide-97.js', 'slide-98.js', 'slide-99.js',
    'slide-100.js', 'slide-108.js', 'slide-109.js', 'slide-117.js', 'slide-124.js'
]

for fname in broken:
    with open(fname, 'rb') as f:
        raw = f.read()
    try:
        content = raw.decode('utf-8')
    except:
        content = raw.decode('latin-1')

    original = content

    # Strategy: find all instances of "text" where text contains Chinese characters
    # and the outer quotes are ASCII double quotes but the inner " are also ASCII double quotes
    # that should be corner brackets
    # Pattern: "Chinese_text"Chinese_text"  - inner quotes break the string

    # Approach: Find all string values (text between outer double quotes) that
    # contain inner double quotes. Replace inner quotes with 「 or 」

    # Find lines with potential issues
    lines = content.split('\n')
    new_lines = []
    for line in lines:
        # Count double quotes on this line
        # If count > 2 (excluding escaped), there might be issues
        # We want to find patterns like: "text"more"text"
        # where quotes appear inside a string value

        # Simple heuristic: if line has pattern "...text"text"text"...
        # replace inner " with corner brackets
        new_line = line
        # Find all Chinese characters between quotes
        # Pattern: "Chinese..." or Chinese..."Chinese
        if '"' in new_line:
            # Try to fix patterns where quotes are embedded in Chinese text
            # Replace " that appears between two Chinese characters with corner brackets
            # Pattern: Chinese"Chinese -> Chinese「Chinese
            new_line = re.sub(r'([一-鿿])"([一-鿿])', r'\1「\2', new_line)
            # Also: "Chinese" -> 「Chinese」
            new_line = re.sub(r'"([一-鿿]+)"', r'「\1」', new_line)
            # And: Chinese"text" -> Chinese「text」
            new_line = re.sub(r'([一-鿿])"([^"]+)"', r'\1「\2」', new_line)

        new_lines.append(new_line)

    new_content = '\n'.join(new_lines)

    if new_content != original:
        with open(fname, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f'Fixed: {fname}')
    else:
        print(f'No change: {fname}')
