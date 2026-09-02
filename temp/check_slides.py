#!/usr/bin/env python3
"""Validate each slide JS file by parsing with Node.js syntax check."""
import subprocess, os

SLIDES_DIR = r'D:\新课开发\内训师和表达\系列进阶课\12-内训项目运营：选师、建课、认证、应用与激励机制设计\授课PPT\slides'

# Create a validation script that runs in the slides directory
val_code = r'''
const fs = require('fs');
const path = require('path');

const slidesDir = __dirname;
const files = fs.readdirSync(slidesDir).filter(f => /^slide-\d+\.js$/.test(f));

for (const file of files.sort()) {
  const code = fs.readFileSync(path.join(slidesDir, file), 'utf8');
  try {
    // Basic syntax check via Function constructor (doesn't execute)
    new Function(code);
    console.log('OK:' + file);
  } catch(e) {
    const msg = e.message.replace(/\n/g, ' ').substring(0, 100);
    console.log('FAIL:' + file + ':' + msg);
  }
}
'''

with open(os.path.join(SLIDES_DIR, '_validate.js'), 'w', encoding='utf-8') as f:
    f.write(val_code)

result = subprocess.run(
    ['node', '_validate.js'],
    cwd=SLIDES_DIR,
    capture_output=True, text=True, errors='replace'
)

# Write results to file
with open(r'D:\CC\temp\validate_results.txt', 'w', encoding='utf-8', errors='replace') as f:
    f.write(result.stdout)
    f.write('\n=== STDERR ===\n')
    f.write(result.stderr)

# Count
oks = sum(1 for l in result.stdout.split('\n') if l.startswith('OK:'))
fails = [l for l in result.stdout.split('\n') if l.startswith('FAIL:')]
print(f'OK: {oks}, FAIL: {len(fails)}')
for fl in fails[:20]:
    print(fl)
