# Scripts 目录索引

> 本目录包含 LangGPT批量扫描补全专家 的核心自动化脚本

---

## 脚本清单

| 脚本 | 功能 | 依赖 | 入口方式 |
|------|------|------|----------|
| `scan_structure.py` | 扫描文件夹结构，生成扫描报告 | Python 3.8+ | `run_pipeline.py` 自动调用 |
| `gap_analyzer.py` | 缺口分析，生成补全建议 | Python 3.8+ | `run_pipeline.py` 自动调用 |
| `batch_generator.py` | 批量生成Prompt，保存.md文件 | Python 3.8+ | `run_pipeline.py` 自动调用 |
| `validator.py` | 多维质量验证，生成验证报告 | Python 3.8+ | `run_pipeline.py` 自动调用 |
| `run_pipeline.py` | 全流程串联，一键执行 | 其他4个脚本 | **直接运行此脚本** |

---

## run_pipeline.py — 一键执行全流程

```bash
# 基本用法
python run_pipeline.py "D:/path/to/source_folder"

# 指定输出目录
python run_pipeline.py "D:/path/to/source" "D:/path/to/output"

# Python调用
from run_pipeline import run_full_pipeline
result = run_full_pipeline("D:/path/to/source")
```

**流程**：扫描 → 缺口分析 → 用户确认 → 批量生成 → 质量验证 → 输出报告

---

## scan_structure.py — 文件夹扫描

```python
from scan_structure import scan_directory, format_scan_report

result = scan_directory("D:/path/to/folder")
print(format_scan_report(result))
```

**输出**：`ScanResult` 对象，含：
- `subfolders`: List[SubfolderResult]（每个子文件夹详情）
- `total_subfolders`: int
- `total_md_files`: int
- `scan_summary`: str

**SubfolderResult** 含：
- `name`, `path`, `md_files`, `total_prompts`
- `content_summary`, `maturity_level`（empty/sparse/medium/mature）
- `suggested_expansion`: int（建议补全数）

---

## gap_analyzer.py — 缺口分析

```python
from gap_analyzer import GapAnalyzer

analyzer = GapAnalyzer()
suggestions = analyzer.analyze_folder(subfolder_result)

for s in suggestions:
    print(f"  {s.suggested_name} [{s.pattern_type}] - {s.rationale}")
```

**输出**：`List[GapSuggestion]`，每项含：
- `suggested_name`: str
- `suggested_filename`: str（自动含序号）
- `pattern_type`: str（10种模式之一）
- `rationale`: str（补全理由）
- `priority`: int（1=高/2=中/3=低）
- `keywords`: List[str]

---

## batch_generator.py — 批量生成

```python
from batch_generator import BatchGenerator, PromptSpec

gen = BatchGenerator()
specs = [
    PromptSpec(
        name="简历优化专家",
        pattern="内容转换型",
        keywords=["简历", "求职"],
        category="职场",
        filename="03_简历优化专家.md",
    )
]
results = gen.generate_batch(specs, "D:/output/base/path")
```

**输出**：List[Dict]，每项含：
- `success`: bool
- `name`, `filename`, `path`
- `word_count`: int
- `category`: str

---

## validator.py — 质量验证

```python
from validator import validate_batch, format_validation_report

results = validate_batch(["file1.md", "file2.md"])
print(format_validation_report(results))
```

**输出**：`List[ValidationResult]`，每项含：
- `passed`: bool（error数=0则True）
- `overall_score`: float（0-100）
- `errors`, `warnings`, `infos`: int
- `issues`: List[ValidationIssue]（问题详情）
- `total_words`: int
- `module_count`: int

**ValidationIssue** 含：
- `severity`: error / warning / info
- `category`: 模块名或检查类型
- `message`: 问题描述
- `suggestion`: 修复建议

---

## 快速验证

```bash
cd D:/CC/.minimax/skills/langgpt-prompt-batch-complete/scripts

# 一键执行全流程
python run_pipeline.py "D:/path/to/test_folder"

# 单独测试某个脚本
python scan_structure.py "D:/path/to/test_folder"
```

---
