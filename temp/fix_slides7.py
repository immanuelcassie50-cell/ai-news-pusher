import os

def fix_js(content):
    result = []
    i = 0
    n = len(content)
    in_str = False
    str_char = None

    while i < n:
        c = content[i]
        if not in_str:
            if c == chr(34) or c == chr(39):
                in_str = True
                str_char = c
                result.append(c)
                i += 1
            else:
                result.append(c)
                i += 1
        else:
            if c == chr(92):
                result.append(c)
                i += 1
                if i < n:
                    result.append(content[i])
                    i += 1
            elif c == str_char:
                backslash_count = 0
                j = i - 1
                while j >= 0 and content[j] == chr(92):
                    backslash_count += 1
                    j -= 1
                if backslash_count % 2 == 1:
                    result.append(c)
                    i += 1
                else:
                    if i + 1 < n and content[i+1].isalnum():
                        result.append(chr(92) + c)
                        i += 1
                    else:
                        result.append(c)
                        in_str = False
                        i += 1
            else:
                result.append(c)
                i += 1
    return "".join(result)

dir = "D:/新课开发/行动学习2026/04-行动学习-创新解决方案/行动学习创新解决方案第二版/完整课程包/02_授课PPT/slides"

count = 0
for fn in sorted(os.listdir(dir)):
    if fn.startswith("slide-") and fn.endswith(".js"):
        fp = os.path.join(dir, fn)
        with open(fp, "r", encoding="utf-8") as f:
            c = f.read()
        fixed = fix_js(c)
        with open(fp, "w", encoding="utf-8") as f:
            f.write(fixed)
        count += 1
        print("Fixed:", fn)
print("Total:", count)