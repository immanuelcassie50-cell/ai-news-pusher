content = open('D:/新课开发/变革管理/03-组织变革就绪度评估：这家企业现在适不适合做深水区变革/完整课程包/02-授课PPT/slides/slide-53.js', 'r', encoding='utf-8').read()
lines = content.split('\n')
line = lines[47]
print(f"Line 48: {repr(line[:100])}")

# Test my function on just this line
def fix_inner_quotes(content):
    result = []
    i = 0
    quote_char = None

    while i < len(content):
        c = content[i]

        if quote_char is None:
            if c == '"' or c == "'":
                quote_char = c
                result.append(c)
                i += 1
            else:
                result.append(c)
                i += 1
        else:
            if c == '\\':
                result.append(c)
                if i + 1 < len(content):
                    result.append(content[i + 1])
                    i += 2
                else:
                    i += 1
            elif c == quote_char:
                result.append(c)
                quote_char = None
                i += 1
            elif c == '"' and quote_char == '"':
                result.append('\u300c')  # 「
                i += 1
            elif c == "'" and quote_char == "'":
                result.append('\u300c')  # 「
                i += 1
            else:
                result.append(c)
                i += 1

    return ''.join(result)

fixed = fix_inner_quotes(line)
print(f"Fixed: {repr(fixed[:100])}")