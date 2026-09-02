#!/usr/bin/env python3
import os

slides_dir = r'D:\新课开发\内训师和表达\系列进阶课\12-内训项目运营：选师、建课、认证、应用与激励机制设计\授课PPT\slides'

# Read slide-98 and find lines with odd number of unescaped quotes
fpath = os.path.join(slides_dir, 'slide-98.js')
with open(fpath, 'rb') as f:
    lines = f.read().split(b'\n')

print('Lines with odd number of unescaped quotes:')
for i, line in enumerate(lines):
    j = 0
    unescaped_quotes = 0
    while j < len(line):
        if line[j] == 0x22:  # quote
            # Check if preceded by backslash (escaped)
            if j > 0 and line[j-1] == 0x5c:
                # Escaped - skip
                j += 1
                continue
            unescaped_quotes += 1
        j += 1

    if unescaped_quotes % 2 != 0:
        print(f'Line {i+1}: ODD ({unescaped_quotes} quotes):')
        # Show where the quotes are
        for j, b in enumerate(line):
            if b == 0x22:
                preceded_by_bs = (j > 0 and line[j-1] == 0x5c)
                print(f'  pos {j}: quote (preceded by backslash={preceded_by_bs})')
        print(f'  Content: {repr(line[:100])}')

print('\nDone')
