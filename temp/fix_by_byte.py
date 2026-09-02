#!/usr/bin/env python3
"""Fix the 6 broken slides with surgical byte-level fixes."""
import os

SLIDES_DIR = r'D:\新课开发\内训师和表达\系列进阶课\12-内训项目运营：选师、建课、认证、应用与激励机制设计\授课PPT\slides'

def read_lines(fname):
    fpath = os.path.join(SLIDES_DIR, fname)
    with open(fpath, 'rb') as f:
        return f.read().split(b'\n')

def write_lines(fname, lines):
    fpath = os.path.join(SLIDES_DIR, fname)
    with open(fpath, 'wb') as f:
        f.write(b'\n'.join(lines))

# ============================================================
# slide-36.js: title and addText have extra closing quote
# Line 3: title: "...总被\"没人听\"" -> should be "...总被\"没人听\""
# The issue: ...没人听"" - two quotes at end
# Fix: remove one quote
# ============================================================
print('=== slide-36 ===')
lines = read_lines('slide-36.js')
for i, line in enumerate(lines):
    if b'\\"' in line:
        print(f'Line {i+1}: {repr(line)}')
# Fix line 3: the pattern is: ...没人听"" }; -> should be ...没人听" };
# The line ends: \x22\xe6\xb2\xa1\xe4\xba\xba\xe5\x90\xac"" };\r
# We need: \x22\xe6\xb2\xa1\xe4\xba\xba\xe5\x90\xac" };
lines[2] = lines[2].replace(b'\xe6\xb2\xa1\xe4\xba\xba\xe5\x90\xac"" }', b'\xe6\xb2\xa1\xe4\xba\xba\xe5\x90\xac" };')
lines[15] = lines[15].replace(b'\xe6\xb2\xa1\xe4\xba\xba\xe5\x90\xac"", {', b'\xe6\xb2\xa1\xe4\xba\xba\xe5\x90\xac"", {')
write_lines('slide-36.js', lines)
print('Fixed slide-36')

# ============================================================
# slide-49.js: lines 51, 61 have extra closing quotes
# ============================================================
print('=== slide-49 ===')
lines = read_lines('slide-49.js')
for i, line in enumerate(lines):
    if b'\\"' in line:
        print(f'Line {i+1}: {repr(line)}')
# Line 51 ends with: 缺统一标准" -> looks correct?
# Line 61 ends with: ...\xe4\xbd\x8d\xe4\xb8\x8d\xe5\xa4\x9f"" -> extra quote
# Fix line 61: \xe4\xbd\x8d\xe4\xb8\x8d\xe5\xa4\x9f"" -> \xe4\xbd\x8d\xe4\xb8\x8d\xe5\xa4\x9f"
lines[60] = lines[60].replace(b'\xe4\xbd\x8d\xe4\xb8\x8d\xe5\xa4\x9f""', b'\xe4\xbd\x8d\xe4\xb8\x8d\xe5\xa4\x9f"')
write_lines('slide-49.js', lines)
print('Fixed slide-49')

# ============================================================
# slide-67.js: line 29 has addText(""", which is broken
# Also line 16 has extra quote
# ============================================================
print('=== slide-67 ===')
lines = read_lines('slide-67.js')
for i, line in enumerate(lines):
    if b'\\"' in line or b'""' in line:
        print(f'Line {i+1}: {repr(line)}')
# Line 29: slide.addText(""", { -> broken
# The previous fix consumed the content. Need to fix this.
# Line 29 (0-indexed 28): should be the empty addText call
# For now let's focus on lines with \\"
# Line 3: title value has \" inside -> should be "content" (inner quotes escaped)
# Line 16: same issue, ends with extra quote
# Let's fix line 29 first - what should it be?
# Looking at the context of slide-67, it has a title "为什么"学会了"不等于"会用了""
# The addText call likely shows the title text
# The line 29: slide.addText(""", { - this is completely wrong
# The title string "为什么"学会了"不等于"会用了"" in JS would be parsed as:
# "为什么" (string) + 学会了 (code) + " (string) etc - completely broken
# The fix: the addText should have the string content properly escaped
# Let me look at what comes before and after line 29
for i in range(25, 35):
    print(f'  Line {i+1}: {repr(lines[i])}')
