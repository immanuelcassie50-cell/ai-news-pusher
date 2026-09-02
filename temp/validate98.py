#!/usr/bin/env python3
"""Validate slide-98 using Node."""
import subprocess, os

base = r'D:\新课开发\内训师和表达\系列进阶课'
target_dir = None
for entry in os.listdir(base):
    if '12' in entry and '内训' in entry:
        target_dir = os.path.join(base, entry, '授课PPT', 'slides')
        break

slide98_path = os.path.join(target_dir, 'slide-98.js')

# Write node script to temp
code = r'''
const fs = require('fs');
const vm = require('vm');
const path = process.argv[1];
const code = fs.readFileSync(path, 'utf8');
try {
  new vm.Script(code, { filename: path });
  console.log('OK');
} catch(e) {
  const m = e.stack.match(/line (\d+)/);
  const line = m ? ' at line '+m[1] : '';
  console.log('ERROR: ' + e.message + line);
}
'''
with open(r'D:\CC\temp\_v98.js', 'w') as f:
    f.write(code)

result = subprocess.run(
    ['node', r'D:\CC\temp\_v98.js', slide98_path],
    capture_output=True, text=True, errors='replace'
)
print('stdout:', result.stdout)
print('stderr:', result.stderr[:300] if result.stderr else '')
