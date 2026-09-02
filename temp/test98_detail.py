#!/usr/bin/env python3
import subprocess, os

base = r'D:\新课开发\内训师和表达\系列进阶课'
target_dir = None
for entry in os.listdir(base):
    if '12' in entry and '内训' in entry:
        target_dir = os.path.join(base, entry, '授课PPT', 'slides')
        break

# Write a detailed test
code = r'''
const path = require('path');
const fs = require('fs');
const vm = require('vm');

const slidePath = path.join(__dirname, 'slide-98.js');
const code = fs.readFileSync(slidePath, 'utf8');

// Try Function constructor instead
try {
  new Function(code);
  console.log('Function constructor: OK');
} catch(e) {
  console.log('Function constructor ERROR:', e.message);
  const m = e.message.match(/line (\d+)/);
  if (m) console.log('Line:', m[1]);
}

// Try to find the issue by iterating lines
const lines = code.split('\\n');
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  try {
    new vm.Script(line, { filename: 'line' + i });
  } catch(e) {
    console.log('Problem at line', i+1, ':', e.message);
    console.log('Line content:', JSON.stringify(line.substring(0, 80)));
    break;
  }
}
'''

with open(os.path.join(target_dir, '_test98b.js'), 'w', encoding='utf-8') as f:
    f.write(code)

result = subprocess.run(
    ['node', '_test98b.js'],
    cwd=target_dir,
    capture_output=True, text=True, errors='replace'
)

with open(r'D:\CC\temp\test98b_result.txt', 'w', encoding='utf-8', errors='replace') as f:
    f.write(result.stdout)

print('Output written to test98b_result.txt')
print('First 500 chars of stdout:', result.stdout[:500] if result.stdout else 'empty')
