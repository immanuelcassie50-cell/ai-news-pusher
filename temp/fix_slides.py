import re, glob

def has_chinese(s):
    return bool(re.search(r'[一-鿿]', s))

def fix_content(content):
    result = []
    i = 0
    changed = False

    while i < len(content):
        idx = content.find('addText(', i)
        if idx == -1:
            result.append(content[i:])
            break

        result.append(content[i:idx])
        str_start = idx + len('addText(')

        if str_start >= len(content) or content[str_start] != '"':
            result.append(content[idx:str_start])
            i = str_start
            continue

        j = str_start + 1
        chars = []
        while j < len(content):
            c = content[j]
            if c == '\\':
                chars.append(c)
                j += 2
                continue
            if c == '"':
                break
            chars.append(c)
            j += 1

        inner = ''.join(chars)

        if has_chinese(inner) and '"' in inner:
            fixed = []
            k = 0
            while k < len(inner):
                c = inner[k]
                if c == '"':
                    prev_c = inner[k-1] if k > 0 else ' '
                    next_c = inner[k+1] if k < len(inner)-1 else ' '

                    if has_chinese(prev_c) and not has_chinese(next_c) and next_c not in '"\\':
                        fixed.append('《')
                    elif has_chinese(next_c) and not has_chinese(prev_c) and prev_c not in '"\\':
                        fixed.append('》')
                    else:
                        fixed.append(c)
                else:
                    fixed.append(c)
                k += 1

            new_inner = ''.join(fixed)
            if new_inner != inner:
                inner = new_inner
                changed = True

        result.append('addText("' + inner + '"')
        i = j + 1

    return ''.join(result), changed

fixed_count = 0
for f in sorted(glob.glob('slide-*.js')):
    with open(f, 'r', encoding='utf-8') as fh:
        content = fh.read()

    new_content, changed = fix_content(content)

    if changed:
        with open(f, 'w', encoding='utf-8') as fh:
            fh.write(new_content)
        print(f'Fixed: {f}')
        fixed_count += 1

print(f'Total fixed: {fixed_count}')
