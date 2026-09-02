#!/usr/bin/env python3
"""
验证配置文件格式、必填字段、列名是否存在
"""

import argparse
import json
from pathlib import Path

import pandas as pd


def validate_config(config_path: str, bc_path: str) -> list:
    """验证配置文件，返回错误列表"""
    errors = []

    # 检查配置文件是否存在
    if not Path(config_path).exists():
        errors.append(f"配置文件不存在：{config_path}")
        return errors

    # 读取配置
    try:
        with open(config_path, encoding="utf-8") as f:
            config = json.load(f)
    except json.JSONDecodeError as e:
        errors.append(f"配置文件 JSON 格式错误：{e}")
        return errors

    # 检查必填字段
    required_fields = ["bc_file_structure", "field_mapping"]
    for field in required_fields:
        if field not in config:
            errors.append(f"缺少必填字段：{field}")

    # 检查 bc_file_structure
    valid_structures = ["single_sheet", "multi_file"]
    if config.get("bc_file_structure") not in valid_structures:
        errors.append(f"bc_file_structure 须为 {valid_structures} 之一")

    # 检查 BC 文件是否存在且可读
    if not Path(bc_path).exists():
        errors.append(f"BC 文件不存在：{bc_path}")
    else:
        # 检查列名是否存在
        try:
            df = pd.read_excel(bc_path)
            bc_columns = set(df.columns)
        except Exception as e:
            errors.append(f"读取 BC 文件失败：{e}")
            bc_columns = set()

        # 检查 field_mapping 中的列名
        fm = config.get("field_mapping", {})
        for placeholder, col_or_formula in fm.items():
            if not col_or_formula:
                continue
            # 处理公式（包含 - 的情况）
            if "-" in col_or_formula and col_or_formula not in bc_columns:
                parts = [p.strip() for p in col_or_formula.split("-")]
                for part in parts:
                    mapped = fm.get(part, part)
                    if mapped not in bc_columns and part not in bc_columns:
                        errors.append(f"字段映射「{placeholder}」引用的列「{part}」在 BC 文件中不存在")
            elif col_or_formula not in bc_columns:
                errors.append(f"字段映射「{placeholder}」引用的列「{col_or_formula}」在 BC 文件中不存在")

        # 检查 project_id_column 和 project_name_column
        id_col = config.get("project_id_column", "")
        name_col = config.get("project_name_column", "")
        if id_col and id_col not in bc_columns:
            errors.append(f"project_id_column「{id_col}」在 BC 文件中不存在")
        if name_col and name_col not in bc_columns:
            errors.append(f"project_name_column「{name_col}」在 BC 文件中不存在")

    # 检查 number_format
    nf = config.get("number_format", {})
    if nf:
        if "currency_symbol" in nf and not isinstance(nf["currency_symbol"], str):
            errors.append("number_format.currency_symbol 须为字符串")
        if "decimal_places" in nf and not isinstance(nf["decimal_places"], int):
            errors.append("number_format.decimal_places 须为整数")

    # 检查 alert_thresholds
    at = config.get("alert_thresholds", {})
    if at:
        for key in ["execution_rate_warning", "execution_rate_critical"]:
            if key in at:
                try:
                    v = float(at[key])
                    if not (0 <= v <= 2):
                        errors.append(f"alert_thresholds.{key} 值须在 0-2 之间")
                except (ValueError, TypeError):
                    errors.append(f"alert_thresholds.{key} 须为数字")

    return errors


def main():
    parser = argparse.ArgumentParser(description="验证 BC 邮件配置文件")
    parser.add_argument("config", help="配置文件路径")
    parser.add_argument("bc_file", help="BC 文件路径")
    args = parser.parse_args()

    errors = validate_config(args.config, args.bc_file)

    if errors:
        print("验证失败，发现以下问题：")
        for err in errors:
            print(f"  ❌ {err}")
        print(f"\n共 {len(errors)} 个错误，请修正后重新运行")
        return 1
    else:
        print("✅ 配置文件验证通过")
        print("\n下一步：运行 python scripts/generate_emails.py 生成邮件")
        return 0


if __name__ == "__main__":
    exit(main())