#!/usr/bin/env python3
"""
步骤 0：初始化邮件模板和配置文件
读取 BC 文件列名，生成初始模板和配置模板，用户确认后再继续
"""

import argparse
import json
from pathlib import Path

import pandas as pd


def main():
    parser = argparse.ArgumentParser(description="初始化 BC 邮件模板和配置文件")
    parser.add_argument("--bc-file", required=True, help="BC 成本结构 Excel 文件路径")
    parser.add_argument("--output", default=".", help="输出目录路径")
    parser.add_argument("--structure", choices=["single_sheet", "multi_file"],
                        default="single_sheet", help="BC 文件结构模式")
    args = parser.parse_args()

    bc_path = Path(args.bc_file)
    if not bc_path.exists():
        print(f"错误：BC 文件不存在：{bc_path}")
        return

    output_dir = Path(args.output)
    output_dir.mkdir(exist_ok=True)

    # 读取 BC 文件列名
    print(f"\n读取 BC 文件：{bc_path}")
    df = pd.read_excel(bc_path)

    print(f"\nBC 文件共 {len(df)} 条记录，{len(df.columns)} 列")
    print("\n列名列表：")
    for i, col in enumerate(df.columns):
        print(f"  {i + 1}. {col}")

    # 生成邮件模板示例
    template_example = """主题：【财务通知】{{项目名称}} - {{报告期}} 成本情况通报

{{收件人姓名}} 您好，

以下是 {{项目名称}}（{{项目编号}}）{{报告期}} 的成本结构情况，请查阅：

一、成本概览
  • 总预算：{{总预算_格式化}}
  • 实际支出：{{实际支出_格式化}}
  • 预算余额：{{预算余额_格式化}}
  • 预算执行率：{{执行率_格式化}}

二、主要成本科目明细
  • 直接材料：{{直接材料_格式化}}
  • 直接人工：{{直接人工_格式化}}
  • 制造费用：{{制造费用_格式化}}
  • 其他：{{其他费用_格式化}}

三、说明事项
  {{备注}}

如有疑问，请联系财务部。

财务部
{{生成日期}}
"""

    template_path = output_dir / "email_template.txt"
    with open(template_path, "w", encoding="utf-8") as f:
        f.write(template_example)
    print(f"\n邮件模板已生成：{template_path}")
    print("请修改模板中的字段占位符（{{...}} 部分）以匹配实际需求")

    # 生成字段映射配置
    config_template = {
        "bc_file_structure": args.structure,
        "project_id_column": "请填写项目编号列名",
        "project_name_column": "请填写项目名称列名",
        "report_period_column": "请填写报告期列名（如无则留空）",
        "field_mapping": {
            "总预算": "请填写BC文件中总预算的列名",
            "实际支出": "请填写实际支出列名",
            "预算余额": "请填写预算余额列名（如需计算则填写公式：总预算-实际支出）",
            "直接材料": "请填写直接材料列名",
            "直接人工": "请填写直接人工列名",
            "制造费用": "请填写制造费用列名",
            "其他费用": "请填写其他费用列名",
            "备注": "请填写备注列名（如无则留空）"
        },
        "number_format": {
            "currency_symbol": "¥",
            "decimal_places": 2,
            "thousands_separator": True
        },
        "alert_thresholds": {
            "execution_rate_warning": 0.9,
            "execution_rate_critical": 1.0
        },
        "output_folder": "email_output"
    }

    config_path = output_dir / "bc_email_config.json"
    with open(config_path, "w", encoding="utf-8") as f:
        json.dump(config_template, f, ensure_ascii=False, indent=2)
    print(f"配置文件已生成：{config_path}")
    print("请填写配置文件中的列名对应关系，然后继续")

    print("\n" + "=" * 50)
    print("初始化完成。下一步：")
    print("1. 修改 email_template.txt 中的占位符以匹配实际需求")
    print("2. 修改 bc_email_config.json 填入正确的列名")
    print("3. 运行 python scripts/validate_config.py 验证配置")
    print("4. 运行 python scripts/generate_emails.py 生成邮件")


if __name__ == "__main__":
    main()