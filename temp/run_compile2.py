#!/usr/bin/env python3
import subprocess, os

slides_dir = r'D:\新课开发\内训师和表达\系列进阶课\12-内训项目运营：选师、建课、认证、应用与激励机制设计\授课PPT\slides'
result = subprocess.run(
    ['node', 'compile.js'],
    cwd=slides_dir,
    capture_output=True, text=True, errors='replace'
)

# Write full output to file
with open(r'D:\CC\temp\compile2_out.txt', 'w', encoding='utf-8', errors='replace') as f:
    f.write(result.stdout)
    f.write('\n=== STDERR ===\n')
    f.write(result.stderr)
    f.write(f'\n=== RC: {result.returncode} ===\n')

# Count OK and FAIL
oks = result.stdout.count(' loaded')
fails = result.stderr.count('FAILED')
print(f'Loaded: {oks}, Failed: {fails}, RC: {result.returncode}')
