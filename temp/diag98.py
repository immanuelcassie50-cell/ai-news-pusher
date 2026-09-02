#!/usr/bin/env python3
import os
slides_dir = r'D:\新课开发\内训师和表达\系列进阶课\12-内训项目运营：选师、建课、认证、应用与激励机制设计\授课PPT\slides'

fpath = os.path.join(slides_dir, 'slide-98.js')
with open(fpath, 'rb') as f:
    lines = f.read().split(b'\n')

print('All lines with backslash-quote in slide-98:')
for i, line in enumerate(lines):
    bs_pos = -1
    while True:
        bs_pos = line.find(b'\\"', bs_pos + 1)
        if bs_pos == -1:
            break
        ctx = line[max(0,bs_pos-5):bs_pos+10]
        print(f'  Line {i+1} pos {bs_pos}: ctx={repr(ctx)}')

print('\nAll lines with double-quote pairs (not preceded by backslash):')
for i, line in enumerate(lines):
    pos = 0
    while True:
        pos = line.find(b'""', pos)
        if pos == -1:
            break
        # Check if this "" is preceded by backslash
        if pos > 0 and line[pos-1:pos+1] == b'\\"':
            pos += 1
            continue
        ctx = line[max(0,pos-10):pos+15]
        print(f'  Line {i+1} pos {pos}: {repr(ctx)}')
        pos += 1
