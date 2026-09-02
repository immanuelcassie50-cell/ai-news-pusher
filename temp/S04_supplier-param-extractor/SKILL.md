---
name: supplier-param-extractor
description: >
  批量读取本地多份供应商技术文件（PDF/Word/Excel），按预设参数清单自动提取关键技术参数，
  汇总输出为统一格式的横向对比表，并标注置信度和原始出处，解决多供应商文件人工比对效率极低的问题。
  当用户提到以下需求时立即调用本 Skill：
  从供应商规格书中提取参数、批量比较多家供应商的技术指标、
  把多份供应商文件汇总成一张对比表、自动读取供应商产品手册、
  采购评估时整理各家参数——
  即便用户只说"帮我把这几份供应商资料整理一下"或"把各家的参数汇到一起"也应触发本 Skill。
---

# S04_供应商文件批量参数提取与汇总

## 它解决什么问题

采购和供应链团队在比较多家供应商时，需要从格式各异的技术文件（PDF 规格书、Word 说明文档、Excel 参数表）中逐份手动查找和记录参数。本 Skill 通过同义词匹配和多格式解析，实现"放入文件夹 → 得到统一对比表"的一键处理。

## 前置依赖

```bash
pip install pdfplumber python-docx pandas openpyxl rapidfuzz --break-system-packages
```

## 输入规格

1. **供应商文件文件夹路径**：支持 .pdf / .docx / .xlsx 混合
2. **参数提取配置**（首次使用引导创建）：定义需要提取哪些参数及同义词
3. **我方需求基准文件**（可选）：用于在对比表中标注是否满足需求
4. **单位统一规则**（可选）：自动换算单位

若尚未准备参数配置，先执行 `scripts/init_config.py` 生成模板。

## 工作流程

### 步骤 0：生成参数配置模板

```bash
python scripts/init_config.py
```

生成 `param_extract_config.json`，包含常见采购品类的参数模板和同义词列表。按实际需求修改后继续。

### 步骤 1：批量提取参数

```bash
python scripts/batch_process.py <文件夹路径> <配置文件路径>
```

核心流程：
- 调用 `scripts/extract_params.py` 解析多格式文件（PDF/DOCX/XLSX）
- 同义词匹配提取参数值，标注置信度
- 汇总生成四个 Sheet 的 Excel 对比表

### 步骤 2：输出结果

```
供应商参数对比表.xlsx 包含四个 Sheet：
  • 参数对比（主表）：核心对比表，"⚠️ 文件未提及"需人工补充
  • 提取置信度：high=直接引用规格值 / medium=上下文推断 / low=需核实
  • 原文溯源：每个提取值对应的原文片段，便于核查
  • 待人工确认：置信度低或未提及的条目汇总
```

## 核心脚本说明

| 脚本 | 职责 |
|------|------|
| `scripts/init_config.py` | 生成参数配置模板（含同义词和置信度关键词） |
| `scripts/extract_params.py` | 多格式文件解析、文本提取、同义词匹配参数提取 |
| `scripts/batch_process.py` | 批量处理文件夹、调用提取器、生成 Excel 对比表 |

## 参考文档

| 文档 | 内容 |
|------|------|
| `references/param-config-guide.md` | 如何配置参数：字段说明、同义词扩展方法、常见品类示例 |
| `references/confidence-guide.md` | 置信度体系：high/medium/low 判断标准、关键词说明 |

## 能力边界

- **扫描件 PDF 无法处理**：需先经 OCR 转为文字型
- **图表型参数无法提取**：仅提取文字型参数值
- **不自动判断是否满足需求**：数值范围比较须人工确认
- **同义词需持续维护**：首次使用待确认比例约 20~40%，每次补充词典后准确率提升

## 测试

```bash
python -m pytest evals/evals.json
```