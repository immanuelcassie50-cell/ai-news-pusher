#!/usr/bin/env python3
"""Check each failing slide with Node vm and report exact line."""
import subprocess, os, sys

SLIDES_DIR = r'D:\新课开发\内训师和表达\系列进阶课\12-内训项目运营：选师、建课、认证、应用与激励机制设计\授课PPT\slides'
FAILING = ['slide-36.js', 'slide-67.js', 'slide-76.js', 'slide-97.js', 'slide-98.js']

# Write a JS checker script
js_checker = r'''
const vm = require('vm');
const fs = require('fs');
const path = require('path');

const slidesDir = process.cwd();
const file = process.argv[1];
const fpath = path.join(slidesDir, file);

try {
  const code = fs.readFileSync(fpath, 'utf8');
  new vm.Script(code, { filename: file });
  console.log('OK:' + file);
} catch(e) {
  // Extract line info from stack
  let lineInfo = '';
  const m = e.stack.match(/line (\\d+)/);
  if (m) lineInfo = ' line:' + m[1];

  // Also try to parse the error message
  console.log('FAIL:' + file + ':' + e.message.replace(/\\n/g, ' ') + lineInfo);
}
'''

# Write the checker to the slides dir
checker_path = os.path.join(SLIDES_DIR, '_check_vm.js')
with open(checker_path, 'w', encoding='utf-8') as f:
    f.write(js_checker)

for fname in FAILING:
    result = subprocess.run(
        ['node', '_check_vm.js', fname],
        cwd=SLIDES_DIR,
        capture_output=True, text=True, errors='replace'
    )
    print(result.stdout.strip())
