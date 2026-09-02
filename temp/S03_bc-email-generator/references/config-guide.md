# 配置字段详细说明

## bc_email_config.json 结构

```json
{
  "bc_file_structure": "single_sheet",
  "project_id_column": "项目编号",
  "project_name_column": "项目名称",
  "report_period_column": "报告期",
  "field_mapping": { ... },
  "number_format": { ... },
  "alert_thresholds": { ... },
  "output_folder": "email_output"
}
```

## bc_file_structure

BC 文件结构模式，两种可选：

| 值 | 说明 | 适用场景 |
|----|------|----------|
| `single_sheet` | 一个 Sheet 包含所有项目（每行一个项目） | 单一 Excel 文件管理多项目 |
| `multi_file` | 每个项目一个 Excel 文件，放在同一文件夹内 | 每个项目单独一个文件 |

## project_id_column / project_name_column

用于生成文件名和标识项目的列名。

**single_sheet 模式必填**，**multi_file 模式建议填写**。

## report_period_column

报告期列名（如 `2025年10月`）。如无此列则留空。

## field_mapping

列名与邮件占位符的映射关系。

### 映射规则

- **key**：邮件模板中的占位符名称
- **value**：BC 文件中的实际列名，或公式

### 公式支持

简单的加减运算：`"总预算-实际支出"` → 自动计算

```json
"预算余额": "总预算-实际支出"
```

公式中的名称会递归查找映射，如 `总预算` 映射到 `预算总额`，则实际计算 `预算总额 - 实际支出`。

### 格式化字段

当占位符为 `{{字段名_格式化}}` 时，脚本自动格式化：
- 货币字段（如 `总预算_格式化`）→ `¥1,200,000.00`
- 百分比字段（如 `执行率_格式化`）→ `87.5%`

## number_format

数字格式化规则。

| 字段 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `currency_symbol` | string | `¥` | 货币符号 |
| `decimal_places` | int | `2` | 小数位数 |
| `thousands_separator` | bool | `true` | 是否使用千位分隔符 |

### 示例

```json
"number_format": {
  "currency_symbol": "¥",
  "decimal_places": 2,
  "thousands_separator": true
}
```

结果：`¥1,200,000.00`

## alert_thresholds

预算预警阈值（执行率）。

| 字段 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `execution_rate_warning` | float | `0.9` | 警告阈值（90%） |
| `execution_rate_critical` | float | `1.0` | 危险阈值（100%） |

- 执行率 ≥ critical：显示「预算已超支」警告
- 执行率 ≥ warning：显示「预算接近上限」警告

## output_folder

邮件输出目录路径，相对于运行目录。

## 完整配置示例

```json
{
  "bc_file_structure": "single_sheet",
  "project_id_column": "项目编号",
  "project_name_column": "项目名称",
  "report_period_column": "报告期",
  "field_mapping": {
    "总预算": "预算总额",
    "实际支出": "实际发生",
    "预算余额": "预算总额-实际支出",
    "直接材料": "材料费",
    "直接人工": "人工费",
    "制造费用": "制造费",
    "其他费用": "其他",
    "备注": "备注"
  },
  "number_format": {
    "currency_symbol": "¥",
    "decimal_places": 2,
    "thousands_separator": true
  },
  "alert_thresholds": {
    "execution_rate_warning": 0.9,
    "execution_rate_critical": 1.0
  },
  "output_folder": "email_output"
}
```