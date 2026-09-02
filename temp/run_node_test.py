#!/usr/bin/env python3
import os, subprocess

base = r'D:\新课开发\内训师和表达\系列进阶课'
slides_dir = None
for entry in os.listdir(base):
    if '12' in entry and '内训' in entry:
        slides_dir = os.path.join(base, entry, '授课PPT', 'slides')
        break

print('Slides dir:', slides_dir)
print('Exists:', os.path.exists(slides_dir))

# Write the Node.js test script
node_code = r'''const fs = require("fs");
const vm = require("vm");
const slidePath = __dirname + "/slide-98.js";
const code = fs.readFileSync(slidePath, "utf8");
const lines = code.split("\n");
const out = [];
out.push("=== Lines 36-39 ===");
for (let i = 35; i < 39; i++) {
    out.push("L" + (i+1) + ":" + JSON.stringify(lines[i]));
}
out.push("=== File encoding check ===");
out.push("First 50 chars: " + JSON.stringify(code.substring(0, 50)));
try {
    new vm.Script(code);
    out.push("vm.Script: OK");
} catch(e) {
    out.push("vm.Script: ERROR " + e.message);
}
try {
    require(slidePath);
    out.push("require: OK");
} catch(e) {
    out.push("require: ERROR " + e.message);
}
fs.writeFileSync("D:/CC/temp/node98_final.txt", out.join("\n"));
'''

test_path = os.path.join(slides_dir, '_node_test.js')
with open(test_path, 'w', encoding='utf-8') as f:
    f.write(node_code)

print('Test script written to:', test_path)
r = subprocess.run(['node', '_node_test.js'], cwd=slides_dir, capture_output=True, text=True)
print('RC:', r.returncode)
if r.stdout:
    print('STDOUT:', r.stdout[:200])
if r.stderr:
    print('STDERR:', r.stderr[:200])

out_path = 'D:/CC/temp/node98_final.txt'
if os.path.exists(out_path):
    with open(out_path, 'r', encoding='utf-8', errors='replace') as f:
        print('OUTPUT:')
        print(f.read())
else:
    print('Output file not found')
