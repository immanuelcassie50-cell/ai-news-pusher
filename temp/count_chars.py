import re

with open(r'D:/2026年课程/竞越/绩效引擎：让战略真正落地的部门绩效全系统/完整课程包/09-场景库/培训HR_场景集.md', 'r', encoding='utf-8') as f:
    text = f.read()

clean = re.sub(r'[\s\n\r#*`>|\\-]', '', text)
print(f'总字符数(含空白): {len(text)}')
print(f'总字符数(去空白/标记): {len(clean)}')
print(f'行数: {text.count(chr(10)) + 1}')

# 统计场景数
scenes = re.findall(r'## 场景 \d+', text)
print(f'主场景数: {len(scenes)}')
# 反例
anti = re.findall(r'## 反例场景 \d+', text)
print(f'反例场景数: {len(anti)}')
