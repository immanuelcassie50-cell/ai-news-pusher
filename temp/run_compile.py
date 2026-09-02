#!/usr/bin/env python3
import subprocess, os, sys

slides_dir = r'D:\新课开发\内训师和表达\系列进阶课\12-内训项目运营：选师、建课、认证、应用与激励机制设计\授课PPT\slides'
result = subprocess.run(['node', 'compile.js'], cwd=slides_dir, capture_output=True, text=True, errors='replace')

# Write output to a file to avoid encoding issues
with open(r'D:\CC\temp\compile_out.txt', 'w', encoding='utf-8', errors='replace') as f:
    f.write('STDOUT:\n')
    f.write(result.stdout)
    f.write('\nSTDERR:\n')
    f.write(result.stderr)
    f.write(f'\nRC: {result.returncode}\n')

# Count FAILED lines
failed_lines = [l for l in result.stderr.split('\n') if 'FAILED' in l]
print(f'Failed slides: {len(failed_lines)}')
for fl in failed_lines:
    print(fl)
print(f'RC: {result.returncode}')
