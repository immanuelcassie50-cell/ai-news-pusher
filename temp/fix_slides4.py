import glob

def has_chinese(s):
    for c in s:
        o = ord(c)
        if 0x4e00 <= o <= 0x9fff:
            return True
    return False

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

        remaining = content[str_start+1:]
        quote_positions = []
        p = 0
        while p < len(remaining):
            if remaining[p] == '\\':
                p += 2
                continue
            if remaining[p] == '"':
                quote_positions.append(p)
                p += 1
            else:
                p += 1

        if not quote_positions:
            result.append(content[idx:str_start+1])
            i = str_start + 1
            continue

        end_quote_pos = None
        for qp in reversed(quote_positions):
            after = remaining[qp+1:qp+5].strip()
            if after.startswith(',') or after.startswith(')') or after == '':
                end_quote_pos = qp
                break

        if end_quote_pos is None:
            end_quote_pos = quote_positions[-1]

        inner = remaining[:end_quote_pos]

        if has_chinese(inner) and '"' in inner:
            fixed = []
            k = 0
            while k < len(inner):
                c = inner[k]
                if c == '"':
                    prev_c = inner[k-1] if k > 0 else ''
                    next_c = inner[k+1] if k < len(inner)-1 else ''

                    # Only replace if BOTH sides are Chinese
                    if (has_chinese(prev_c) and has_chinese(next_c)):
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
        i = str_start + 1 + end_quote_pos + 1

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
