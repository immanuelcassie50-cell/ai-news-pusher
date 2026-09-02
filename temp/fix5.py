#!/usr/bin/env python3
import os

SLIDES_DIR = r"D:\新课开发\精益\8.数字孪生与仿真改善：在虚拟环境里做持续改善的预演题\授课PPT\slides"
os.chdir(SLIDES_DIR)

def fix_js_file(filepath):
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
    original = content
    result = []
    i = 0
    in_string = False
    string_char = None
    while i < len(content):
        c = content[i]
        if not in_string:
            if c in (""", "'"):
                in_string = True
                string_char = c
                result.append(c)
            else:
                result.append(c)
        else:
            if c == "\\":
                result.append(c)
                i += 1
                if i < len(content):
                    result.append(content[i])
                i += 1
                continue
            elif c == string_char:
                in_string = False
                result.append(c)
            elif c == """ and string_char == """:
                result.append("\\"")
            else:
                result.append(c)
        i += 1
    new_content = "".join(result)
    if new_content != original:
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(new_content)
        print(f"Fixed: {filepath}")
    else:
        print(f"No changes: {filepath}")

for f in ["slide-03.js", "slide-06.js", "slide-09.js", "slide-11.js", "slide-12.js"]:
    fix_js_file(f)
