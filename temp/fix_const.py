import os
import re

path = 'D:/新课开发/地产/物业/7.业主信任与老龄化接受度-AI落地绕不开的人情关/授课PPT/slides/'

# Fix slides with "slideConfig = {" missing "const"
# Pattern: slideConfig = { -> const slideConfig = {

fixed_count = 0
for i in range(46, 51):
    fpath = path + f'slide-{i}.js'
    if os.path.exists(fpath):
        with open(fpath, 'r', encoding='utf-8') as f:
            content = f.read()
        # Replace "slideConfig = {" with "const slideConfig = {"
        new_content = re.sub(r'^slideConfig\s*=\s*\{', 'const slideConfig = {', content, flags=re.MULTILINE)
        if new_content != content:
            with open(fpath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            fixed_count += 1
            print(f'Fixed slide-{i}')

for i in range(56, 61):
    fpath = path + f'slide-{i}.js'
    if os.path.exists(fpath):
        with open(fpath, 'r', encoding='utf-8') as f:
            content = f.read()
        new_content = re.sub(r'^slideConfig\s*=\s*\{', 'const slideConfig = {', content, flags=re.MULTILINE)
        if new_content != content:
            with open(fpath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            fixed_count += 1
            print(f'Fixed slide-{i}')

for i in range(91, 121):
    fpath = path + f'slide-{i}.js'
    if os.path.exists(fpath):
        with open(fpath, 'r', encoding='utf-8') as f:
            content = f.read()
        new_content = re.sub(r'^slideConfig\s*=\s*\{', 'const slideConfig = {', content, flags=re.MULTILINE)
        if new_content != content:
            with open(fpath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            fixed_count += 1
            print(f'Fixed slide-{i}')

print(f'Total fixed: {fixed_count}')