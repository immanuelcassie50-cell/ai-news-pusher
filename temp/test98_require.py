#!/usr/bin/env python3
import subprocess, os

base = r'D:\新课开发\内训师和表达\系列进阶课'
target_dir = None
for entry in os.listdir(base):
    if '12' in entry and '内训' in entry:
        target_dir = os.path.join(base, entry, '授课PPT', 'slides')
        break

# Write a test script that mimics what compile.js does
code = r'''
const path = require('path');
const fs = require('fs');
const vm = require('vm');

// Load slide-98 the way compile.js does
const slidePath = path.join(__dirname, 'slide-98.js');
console.log('Loading:', slidePath);
try {
  const code = fs.readFileSync(slidePath, 'utf8');
  console.log('Read OK, length:', code.length);
  new vm.Script(code, { filename: 'slide-98.js' });
  console.log('vm.Script OK');
} catch(e) {
  console.log('vm.Script ERROR:', e.message);
  const m = e.stack.match(/line (\d+)/);
  if (m) console.log('Near line:', m[1]);
}

// Also try require
try {
  const m = require(slidePath);
  console.log('require OK');
} catch(e) {
  console.log('require ERROR:', e.message);
}
'''

with open(os.path.join(target_dir, '_test98.js'), 'w', encoding='utf-8') as f:
    f.write(code)

result = subprocess.run(
    ['node', '_test98.js'],
    cwd=target_dir,
    capture_output=True, text=True, errors='replace'
)

with open(r'D:\CC\temp\test98_result.txt', 'w', encoding='utf-8', errors='replace') as f:
    f.write(result.stdout)
    f.write('\nSTDERR:\n')
    f.write(result.stderr)

print('stdout:', result.stdout.strip())
print('stderr:', result.stderr[:200] if result.stderr else 'none')
