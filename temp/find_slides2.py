#!/usr/bin/env python3
import os, subprocess

# Find the correct path
base = r'D:\新课开发\内训师和表达\系列进阶课'
target_dir = None
for entry in os.listdir(base):
    if '12' in entry and '内训' in entry:
        target_dir = os.path.join(base, entry, '授课PPT', 'slides')
        break

print('Target dir:', target_dir)
print('Dir exists:', os.path.exists(target_dir))

# List all slide files
slides = [f for f in os.listdir(target_dir) if f.startswith('slide-') and f.endswith('.js')]
slides.sort()
print(f'Total slide files: {len(slides)}')

# Run compile and capture output
result = subprocess.run(
    ['node', 'compile.js'],
    cwd=target_dir,
    capture_output=True, text=True, errors='replace'
)

# Count loaded and failed
loaded = result.stdout.count(' loaded')
failed_lines = [l for l in result.stderr.split('\n') if 'FAILED' in l]
print(f'Loaded: {loaded}, Failed: {len(failed_lines)}')
for fl in failed_lines:
    print(' ', fl[:100])
