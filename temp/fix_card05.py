#!/usr/bin/env python3
"""Fix unescaped double quotes in card_05 JSON."""
import json

with open('D:/新课开发/管理者的AI课/管理者AI实战课制造业版教学文档/完整课程包/10_可打印工具卡/工具卡_05_对话准备_content.json', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace Chinese quotes first
content = content.replace(chr(0x201C), '"').replace(chr(0x201D), '"')

# Now fix unescaped interior quotes - find patterns like :"..."..."..." and escape interior quotes
lines = content.split('\n')
fixed_lines = []
for line in lines:
    # Check if this is a title or desc field with potential interior quotes
    if ('"title":' in line or '"desc":' in line) and line.strip().endswith(','):
        colon_idx = line.index(':')
        value_part = line[colon_idx+1:].strip()
        if value_part.startswith('"') and value_part.endswith('",'):
            inner = value_part[1:-2]  # remove starting " and ending ",
            # Escape interior quotes: any " that is between other characters
            escaped = []
            i = 0
            while i < len(inner):
                if inner[i] == '"':
                    # Escape if preceded by a letter, digit, or CJK character
                    prev_char = inner[i-1] if i > 0 else ''
                    if prev_char and (prev_char.isalnum() or ord(prev_char) > 0x2E7F):
                        escaped.append('\\"')
                    else:
                        escaped.append('"')
                else:
                    escaped.append(inner[i])
                i += 1
            new_inner = ''.join(escaped)
            new_value = '"' + new_inner + '",'
            line = line[:colon_idx+1] + ' ' + new_value
    fixed_lines.append(line)

fixed = '\n'.join(fixed_lines)

# Verify
try:
    json.loads(fixed)
    print('Fixed JSON parses OK')
    with open('D:/新课开发/管理者的AI课/管理者AI实战课制造业版教学文档/完整课程包/10_可打印工具卡/工具卡_05_对话准备_content.json', 'w', encoding='utf-8') as f:
        f.write(fixed)
    print('File written successfully')
except json.JSONDecodeError as e:
    print('Still fails:', e)
    print('Context:', repr(fixed[max(0,e.pos-20):e.pos+20]) if e.pos else 'N/A')