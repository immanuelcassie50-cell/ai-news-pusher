#!/usr/bin/env python3
"""Use Node to validate just slide-98."""
import subprocess, os

base = r'D:\新课开发\内训师和表达\系列进阶课'
target_dir = None
for entry in os.listdir(base):
    if '12' in entry and '内训' in entry:
        target_dir = os.path.join(base, entry, '授课PPT', 'slides')
        break

# Write a node script to validate slide-98
code = r'''
const fs = require('fs');
const vm = require('vm');

const fname = process.argv[1];
const code = fs.readFileSync(fname, 'utf8');
try {
  new vm.Script(code, { filename: fname });
  console.log('OK:' + fname);
} catch(e) {
  // Try to find the line number
  const match = e.stack.match(/line (\d+)/);
  const lineInfo = match ? ' at line ' + match[1] : '';
  console.log('ERROR:' + fname + ':' + e.message + lineInfo);
}
'''

with open(os.path.join(target_dir, '_validate98.js'), 'w', encoding='utf-8') as f:
    f.write(code)

result = subprocess.run(
    ['node', '_validate98.js', os.path.join(target_dir, 'slide-98.js')],
    capture_output=True, text=True, errors='replace'
)

with open(r'D:\CC\temp\node98_result.txt', 'w', encoding='utf-8', errors='replace') as f:
    f.write(result.stdout)
    f.write('\n')
    f.write(result.stderr)

print('Result:', result.stdout.strip())
print('Stderr:', result.stderr[:200] if result.stderr else 'none')
