---
name: bc-email-generator
description: >
  读取本地 BC（Business Case）成本结构 Excel 文件，按照指定邮件模板自动生成格式规范的
  财务通知邮件文本，支持批量按项目逐份生成，输出可直接复制发送的邮件文件。

  当用户提到以下需求时立即调用本 Skill：
  • 基于 BC 成本结构生成财务邮件
  • 自动给项目经理发财务通知
  • 批量生成项目成本通知
  • 把 Excel 里的财务数据转成邮件
  • 项目财务信息自动推送
  即便用户只是说"帮我把这份 BC 数据转成邮件"或"给各项目经理发成本数据"也应触发本 Skill。
---

# S03_项目财务BC邮件自动生成

## 工作流程

### 步骤 0（首次使用）：初始化模板和配置

运行前需准备：
- BC 成本结构 Excel 文件路径
- 邮件模板（.txt）
- 字段映射配置（.json）

首次使用或尚未准备模板时，执行 `scripts/init_template.py`：

```bash
python scripts/init_template.py
```

脚本会读取 BC 文件列名，生成初始邮件模板和配置模板，用户确认后再继续。

---

### 步骤 1：验证配置文件

生成配置后，运行 `scripts/validate_config.py` 验证格式：

```bash
python scripts/validate_config.py bc_email_config.json "BC文件路径.xlsx"
```

---

### 步骤 2：批量生成邮件

配置验证通过后，运行主脚本生成邮件：

```bash
python scripts/generate_emails.py \
  --config bc_email_config.json \
  --bc-file "BC文件路径.xlsx" \
  --template email_template.txt \
  --output output_emails
```

可选参数：
- `--pm-file` 项目经理通讯录 Excel（含 项目编号、姓名、邮箱 三列）
- `--scope` 仅处理指定项目编号，逗号分隔

---

### 步骤 3：检查输出

生成完成后：
1. 打开 `output_emails/生成摘要.txt` 查看处理结果
2. 检查 `{{⚠️ 未找到字段}}` 标记，调整配置后重新生成
3. 邮件文件以 `项目编号_项目名称_财务通知.txt` 命名，可直接复制到邮件客户端发送

---

## 输入规格

| 文件 | 说明 | 格式 |
|------|------|------|
| BC 文件 | 成本结构数据 | Excel (.xlsx/.xls) |
| 邮件模板 | 邮件正文，含 `{{字段名}}` 占位符 | .txt |
| 字段映射配置 | 列名与占位符对应关系 | .json |
| 项目经理通讯录 | 项目编号→姓名/邮箱映射 | Excel（可选） |

BC 文件结构支持两种模式：
- **single_sheet**：一个 Sheet 包含所有项目（每行一个项目）
- **multi_file**：每个项目一个 Excel 文件，放在同一文件夹内

---

## 文件结构

```
S03_bc-email-generator/
├── SKILL.md                          # 本文件
├── scripts/
│   ├── generate_emails.py           # 批量生成邮件主脚本
│   ├── init_template.py             # 初始化模板和配置（步骤0）
│   └── validate_config.py           # 验证配置文件
├── references/
│   ├── template-guide.md            # 邮件模板编写详细指南
│   └── config-guide.md              # 配置字段详细说明
└── evals/
    └── evals.json                   # 测试用例
```

---

## 能力边界

- **邮件模板须人工设计**：Skill 生成初始模板，但邮件措辞、结构需由财务团队确认
- **只生成文本文件，不发送邮件**：发送动作须人工完成
- **数字计算基于 Excel 中的数据**：BC 文件中的数据错误不会被识别和纠正
- **占位符区分大小写**：`{{总预算}}` 和 `{{总预算_格式化}}` 是不同占位符

## 前置依赖

```bash
pip install pandas openpyxl --break-system-packages
```