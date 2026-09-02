import re
with open('Program.cs', 'r', encoding='utf-8') as f:
    code = f.read()

# 找所有 MakeTable 块：MakeTable(\n  ... \n  new[] { 6个数字 },\n  new[] { new[] {...} },\n  ...
# 我们要保持第一行是 colWidths，剩下是 rows，每行是 new[] { new[] {...} }
# 解决方法：把第一参数 colWidths 单独处理，把后续 new[] { new[] {...} } 包装成 new string[][] { ... }

# 用更简单方法：找到每个 `MakeTable(\n  ...,` 后的 colWidths 行，从下一行开始是数据行，
# 把后续的 new[] { new[] {...} } 全部收集起来，最后转成单一 new string[][] { ... } 形式

def transform(text):
    out = []
    i = 0
    while i < len(text):
        idx = text.find('MakeTable(', i)
        if idx == -1:
            out.append(text[i:])
            break
        out.append(text[i:idx])
        i = idx + len('MakeTable(')
        # 找到匹配的右括号
        depth = 0
        j = i
        in_s = False
        esc = False
        while j < len(text):
            ch = text[j]
            if esc:
                esc = False
            elif ch == '\\':
                esc = True
            elif ch == '"' and not esc:
                in_s = not in_s
            elif not in_s:
                if ch == '(':
                    depth += 1
                elif ch == ')':
                    depth -= 1
                    if depth == 0:
                        break
            j += 1
        block = text[i:j]
        # 分割参数 (按顶层逗号分割)
        params = []
        d2 = 0
        in_s2 = False
        esc2 = False
        s = 0
        for k in range(len(block)):
            ch = block[k]
            if esc2:
                esc2 = False
            elif ch == '\\':
                esc2 = True
            elif ch == '"' and not esc2:
                in_s2 = not in_s2
            elif not in_s2:
                if ch in '([':
                    d2 += 1
                elif ch in ')]':
                    d2 -= 1
                elif ch == ',' and d2 == 0:
                    params.append(block[s:k].strip())
                    s = k + 1
        params.append(block[s:].strip())
        if len(params) >= 2 and params[0].startswith('new[]') and any('new[] { new[] {' in p for p in params[1:]):
            col_w = params[0]
            rows = params[1:]
            new_rows = 'new string[][] {\n      ' + ',\n      '.join(rows) + '\n    }'
            out.append('MakeTable(\n    ' + col_w + ',\n    ' + new_rows + '\n  )')
        else:
            out.append('MakeTable(' + block + ')')
        i = j + 1
    return ''.join(out)

new_code = transform(code)
with open('Program.cs', 'w', encoding='utf-8') as f:
    f.write(new_code)
print('OK')
