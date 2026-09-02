#!/usr/bin/env python3
"""Diagnose exact byte patterns in slide-36 lines 33, 38, 43."""
import os

slides_dir = r'D:\新课开发\内训师和表达\系列进阶课\12-内训项目运营：选师、建课、认证、应用与激励机制设计\授课PPT\slides'

fname = os.path.join(slides_dir, 'slide-36.js')
with open(fname, 'rb') as f:
    content = f.read()

lines = content.split(b'\n')
for lineno in [33, 38, 43]:
    line = lines[lineno - 1]
    print(f'\nLine {lineno} raw bytes (last 60):')
    print(repr(line[-60:]))
    print(f'Hex: {line[-60:].hex()}')

    # Find position of last double-quote
    last_quote = line.rfind(b'"')
    print(f'Last " at byte offset: {last_quote} from end (offset {len(line)-last_quote} from end)')

    # Look for backslash-quote pattern near end
    for i in range(len(line)-2, max(0, len(line)-20), -1):
        if line[i:i+2] == b'\\"':
            print(f'  \\" found at byte offset {i} from start, {len(line)-i} from end')
            print(f'  Context: {repr(line[max(0,i-5):i+4])}')