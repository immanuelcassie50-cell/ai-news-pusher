#!/usr/bin/env python3
"""Use Node.js vm to safely evaluate each slide and report errors."""
import subprocess, os, sys

SLIDES_DIR = r'D:\新课开发\内训师和表达\系列进阶课\12-内训项目运营：选师、建课、认证、应用与激励机制设计\授课PPT\slides'

# Slides to check
ALL_SLIDES = [f'slide-{i:02d}.js' for i in range(1, 131)]

for fname in ALL_SLIDES:
    fpath = os.path.join(SLIDES_DIR, fname)
    if not os.path.exists(fpath):
        continue

    # Use node to parse and report syntax errors
    code = f'''
const fs = require('fs');
const vm = require('vm');
try {{
  const src = fs.readFileSync('{fpath}', 'utf8');
  new vm.Script(src, {{ filename: '{fname}' }});
  console.log('OK');
}} catch(e) {{
  console.log('ERROR: ' + e.message);
}}
'''
    result = subprocess.run(
        ['node', '-e', code],
        capture_output=True, text=True,
        errors='replace'
    )
    if 'ERROR' in result.stdout:
        print(f'{fname}: {result.stdout.strip()}')
    elif 'OK' in result.stdout:
        pass  # silently OK
