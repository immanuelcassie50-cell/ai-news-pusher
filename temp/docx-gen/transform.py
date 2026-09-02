import re
with open('Program.cs', 'r', encoding='utf-8') as f:
    code = f.read()

def transform_calls(code):
    result = []
    i = 0
    while i < len(code):
        m = re.search(r'MakeTable\(', code[i:])
        if not m:
            result.append(code[i:])
            break
        result.append(code[i:i+m.start()])
        i = i + m.start()
        depth = 0
        j = i
        in_str = False
        esc = False
        while j < len(code):
            ch = code[j]
            if esc:
                esc = False
            elif ch == '\\':
                esc = True
            elif ch == '"' and not esc:
                in_str = not in_str
            elif not in_str:
                if ch == '(':
                    depth += 1
                elif ch == ')':
                    depth -= 1
                    if depth == 0:
                        break
            j += 1
        block = code[i:j+1]
        args = []
        depth2 = 0
        in_str2 = False
        esc2 = False
        start = i + len('MakeTable(')
        for k in range(start, j):
            ch = code[k]
            if esc2:
                esc2 = False
            elif ch == '\\':
                esc2 = True
            elif ch == '"' and not esc2:
                in_str2 = not in_str2
            elif not in_str2:
                if ch == '(' or ch == '[':
                    depth2 += 1
                elif ch == ')' or ch == ']':
                    depth2 -= 1
                elif ch == ',' and depth2 == 0:
                    args.append(code[start:k])
                    start = k + 1
        args.append(code[start:j])
        if len(args) == 2:
            col_w = args[0].strip()
            rows = args[1].strip()
            if 'new[] { new[] {' in rows:
                row_items = []
                depth3 = 0
                in_str3 = False
                esc3 = False
                rs = 0
                for k in range(len(rows)):
                    ch = rows[k]
                    if esc3:
                        esc3 = False
                    elif ch == '\\':
                        esc3 = True
                    elif ch == '"' and not esc3:
                        in_str3 = not in_str3
                    elif not in_str3:
                        if ch == '[':
                            depth3 += 1
                        elif ch == ']':
                            depth3 -= 1
                            if depth3 == 0:
                                item = rows[rs:k+1].strip().rstrip(',').strip()
                                if item:
                                    row_items.append(item)
                                rs = k + 1
                new_rows = 'new string[][] {\n      ' + ',\n      '.join(row_items) + '\n    }'
                result.append(f'MakeTable(\n    {col_w},\n    {new_rows}\n  )')
            else:
                result.append(block)
        else:
            result.append(block)
        i = j + 1
    return ''.join(result)

new_code = transform_calls(code)
with open('Program.cs', 'w', encoding='utf-8') as f:
    f.write(new_code)
print('OK')
