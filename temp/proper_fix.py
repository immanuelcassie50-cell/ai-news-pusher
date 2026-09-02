import os

slidesDir = r'D:\新课开发\公众表达\01_AI说服情报挖掘：提前摸清对方的顾虑和反对理由\09_PPT\slides'

def fix_js_content(content):
    result = []
    i = 0
    in_string = False
    string_char = None
    
    while i < len(content):
        char = content[i]
        
        if not in_string:
            if char in ('"', "'", '`'):
                in_string = True
                string_char = char
                result.append(char)
                i += 1
            elif char == '\':
                result.append(char)
                if i + 1 < len(content):
                    result.append(content[i + 1])
                    i += 2
                else:
                    i += 1
            else:
                result.append(char)
                i += 1
        else:
            if char == '\':
                result.append(char)
                if i + 1 < len(content):
                    result.append(content[i + 1])
                    i += 2
                else:
                    i += 1
            elif char == string_char:
                in_string = False
                string_char = None
                result.append(char)
                i += 1
            elif char == '"' and string_char == '"':
                result.append('\\"')
                i += 1
            elif char == "'" and string_char == "'":
                result.append("\'")
                i += 1
            else:
                result.append(char)
                i += 1
    
    return ''.join(result)

# Get all JS files
files = [f for f in os.listdir(slidesDir) if f.endswith('.js') and f != 'compile.js']
fixed_count = 0

for filename in files:
    filepath = os.path.join(slidesDir, filename)
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original = content
    fixed = fix_js_content(content)
    
    if fixed != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(fixed)
        print(f'Fixed: {filename}')
        fixed_count += 1

print(f'\nTotal files fixed: {fixed_count}')
