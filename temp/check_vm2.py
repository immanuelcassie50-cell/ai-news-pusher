#!/usr/bin/env python3
import subprocess, os

SLIDES_DIR = r'D:\新课开发\内训师和表达\系列进阶课\12-内训项目运营：选师、建课、认证、应用与激励机制设计\授课PPT\slides'
FAILING = ['slide-36.js', 'slide-67.js', 'slide-76.js', 'slide-97.js', 'slide-98.js']

js_checker = r'''
const vm = require('vm');
const fs = require('fs');
const path = require('path');
const file = process.argv[1];
const fpath = path.join(process.cwd(), file);
try {
  const code = fs.readFileSync(fpath, 'utf8');
  new vm.Script(code, { filename: file });
  console.log('OK:' + file);
} catch(e) {
  let lineInfo = '';
  const m = e.stack.match(/line (\d+)/);
  if (m) lineInfo = ' LINE:' + m[1];
  console.log('FAIL:' + file + ':' + e.message.replace(/\n/g,' ') + lineInfo);
}
'''

with open(os.path.join(SLIDES_DIR, '_check2.js'), 'w', encoding='utf-8') as f:
    f.write(js_checker)

results = []
for fname in FAILING:
    result = subprocess.run(
        ['node', '_check2.js', fname],
        cwd=SLIDES_DIR,
        capture_output=True, text=True, errors='replace'
    )
    results.append(result.stdout.strip())

with open(r'D:\CC\temp\vm_results.txt', 'w', encoding='utf-8', errors='replace') as f:
    f.write('\n'.join(results))
print(f'Checked {len(FAILING)} files, results in vm_results.txt')
