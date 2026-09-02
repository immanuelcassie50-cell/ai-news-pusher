#!/usr/bin/env python3
import os

base = r"D:\新课开发\数字化转型\4.价值密度战略设计：从交付产品到交付结果\授课PPT\slides"

# Fix slide-78
path = os.path.join(base, "slide-78.js")
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# Fix line 39: ends with single quote ]
content = content.replace(
    '["利益相关方数量", "变量数量", "因果关系复杂度", "不确定性程度\']',
    '["利益相关方数量", "变量数量", "因果关系复杂度", "不确定性程度"]'
)
# Fix line 45
content = content.replace(
    '["矩阵热力图", "场景排名", "富矿坐标\']',
    '["矩阵热力图", "场景排名", "富矿坐标"]'
)

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)
print("Fixed slide-78")

# Fix slide-122
path = os.path.join(base, "slide-122.js")
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace(
    '["客服智能体", "数据分析智能体", "风控智能体", "...\']',
    '["客服智能体", "数据分析智能体", "风控智能体", "..."]'
)

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)
print("Fixed slide-122")