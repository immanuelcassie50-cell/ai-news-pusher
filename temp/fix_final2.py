import os

slidesDir = r'D:\新课开发\公众表达\01_AI说服情报挖掘：提前摸清对方的顾虑和反对理由\09_PPT\slides'
BACKSLASH = chr(92)
QUOTE = chr(34)
SINGLE = chr(39)
BACKTICK = chr(96)

def fix_js(content_str):
    result = []
    i = 0
    
    while i < len(content_str):
        char = content_str[i]
        
        if char == QUOTE:
            # Start of double-quoted string
            result.append(char)
            i += 1
            while i < len(content_str):
                c = content_str[i]
                if c == BACKSLASH:
                    # Escape sequence
                    result.append(c)
                    if i + 1 < len(content_str):
                        result.append(content_str[i + 1])
                        i += 2
                    else:
                        i += 1
                elif c == QUOTE:
                    # Quote found - check if it's closing or inner
                    # Look ahead for another quote with only whitespace between
                    j = i + 1
                    while j < len(content_str) and content_str[j] in ' \t':
                        j += 1
                    if j < len(content_str) and content_str[j] == QUOTE:
                        # Consecutive quotes - inner quote that needs escaping
                        result.append(BACKSLASH)
                        result.append(QUOTE)
                        i += 1
                    else:
                        # This quote closes the string
                        result.append(c)
                        i += 1
                        break
                else:
                    result.append(c)
                    i += 1
        elif char == SINGLE:
            result.append(char)
            i += 1
            while i < len(content_str):
                c = content_str[i]
                if c == BACKSLASH:
                    result.append(c)
                    if i + 1 < len(content_str):
                        result.append(content_str[i + 1])
                        i += 2
                    else:
                        i += 1
                elif c == SINGLE:
                    j = i + 1
                    while j < len(content_str) and content_str[j] in ' \t':
                        j += 1
                    if j < len(content_str) and content_str[j] == SINGLE:
                        result.append(BACKSLASH)
                        result.append(SINGLE)
                        i += 1
                    else:
                        result.append(c)
                        i += 1
                        break
                else:
                    result.append(c)
                    i += 1
        elif char == BACKTICK:
            result.append(char)
            i += 1
            while i < len(content_str):
                c = content_str[i]
                if c == BACKSLASH:
                    result.append(c)
                    if i + 1 < len(content_str):
                        result.append(content_str[i + 1])
                        i += 2
                    else:
                        i += 1
                elif c == BACKTICK:
                    result.append(c)
                    i += 1
                    break
                else:
                    result.append(c)
                    i += 1
        else:
            result.append(char)
            i += 1
    
    return ''.join(result)

# Process all JS files
files = [f for f in os.listdir(slidesDir) if f.endswith('.js') and f != 'compile.js']
fixed_count = 0

for filename in files:
    filepath = os.path.join(slidesDir, filename)
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    fixed = fix_js(content)
    
    if fixed != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(fixed)
        print(f'Fixed: {filename}')
        fixed_count += 1

print(f'Total files fixed: {fixed_count}')
