# Agent D4 补漏Prompt（待命，仅在D1a/b/c任意一个产出不完整时启动）

## 触发条件
- 任何D1 agent完成后，对应HTML数量<预期
- 或D agent报告token限制/部分完成

## 工作方式
1. **先Read agent输出清单**，识别哪些HTML缺失
2. **针对缺失的HTML逐一补全**，沿用其他agent的视觉系统
3. **不要重做已完成的**，只补缺失

## 视觉系统参考
- 主色 #8b2828 / 辅色 #c9a96e / 强调 #d62828 / 背景 #f5f0e6 / 文字 #0a0a0a
- 字体：Fraunces + Noto Serif SC + Inter Tight + JetBrains Mono
- 已有HTML参考：
  - D:\Downloads\利益相关方影响和干预\完整课程包\05_场景库\03_场景库总览.html
  - D:\Downloads\利益相关方影响和干预\完整课程包\08_评估工具包\06_可视化评估看板.html
  - D:\Downloads\利益相关方影响和干预\完整课程包\00_课程总览\03_课程宣传海报.html

## 输出位置
按缺失HTML对应的子目录输出。

## 启动方式
主控发现D1某个agent产出不足时，启动此agent D4，并提供：
- 缺失HTML清单
- 已完成HTML路径（避免重复造轮子）
