#!/usr/bin/env python3
import os

base = r"D:\新课开发\数字化转型\4.价值密度战略设计：从交付产品到交付结果\授课PPT\slides"

# Fix slide-30 line 122
path = os.path.join(base, "slide-30.js")
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()
content = content.replace(
    "'核心区别：产品思维问\"做了什么'，结果思维问'解决了什么\"'",
    '"核心区别：产品思维问\\"做了什么\\"，结果思维问\\"解决了什么\\""'
)
with open(path, 'w', encoding='utf-8') as f:
    f.write(content)
print("Fixed slide-30")

# Fix slide-32 line 186
path = os.path.join(base, "slide-32.js")
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()
content = content.replace(
    "'从\"功能交付'到'价值交付\"'",
    '"从\\"功能交付\\"到\\"价值交付\\""'
)
with open(path, 'w', encoding='utf-8') as f:
    f.write(content)
print("Fixed slide-32")

# Fix slide-137 line 163
path = os.path.join(base, "slide-137.js")
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()
content = content.replace(
    "'核心转变：从\"以人为主'到'人机协同\"，智能体承担重复性任务，人类专注创造性决策'",
    '"核心转变：从\\"以人为主\\"到\\"人机协同\\"，智能体承担重复性任务，人类专注创造性决策"'
)
with open(path, 'w', encoding='utf-8') as f:
    f.write(content)
print("Fixed slide-137")