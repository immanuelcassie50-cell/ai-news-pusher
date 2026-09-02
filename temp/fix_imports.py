import os
import re

path = 'D:/新课开发/地产/物业/7.业主信任与老龄化接受度-AI落地绕不开的人情关/授课PPT/slides/'

fixed_count = 0
for i in list(range(46, 51)) + list(range(56, 61)) + list(range(91, 121)):
    fpath = path + f'slide-{i}.js'
    if os.path.exists(fpath):
        with open(fpath, 'r', encoding='utf-8') as f:
            content = f.read()

        # Check if it imports slideConfig from slide-base
        if "require('./slide-base.js')" in content and "const { createSlide, slideConfig }" in content:
            # Remove slideConfig from the import
            new_content = content.replace(
                "const { createSlide, slideConfig } = require('./slide-base.js');",
                "const { createSlide } = require('./slide-base.js');"
            )
            if new_content != content:
                with open(fpath, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                fixed_count += 1
                print(f'Fixed slide-{i}')

print(f'Total fixed: {fixed_count}')