#!/usr/bin/env python3
"""
步骤 1-4：批量生成 BC 财务邮件
读取 BC Excel，按配置映射字段，填充模板，批量输出邮件文件
"""

import argparse
import json
import re
from datetime import datetime
from pathlib import Path

import pandas as pd


def load_config(config_path: str) -> dict:
    with open(config_path, encoding="utf-8") as f:
        return json.load(f)


def load_bc_data(bc_path: str, config: dict) -> pd.DataFrame:
    """支持两种 BC 文件结构：single_sheet / multi_file"""
    structure = config.get("bc_file_structure", "single_sheet")
    p = Path(bc_path)

    if structure == "single_sheet":
        df = pd.read_excel(p)
        return df
    elif structure == "multi_file":
        all_data = []
        for f in p.iterdir():
            if f.suffix in (".xlsx", ".xls"):
                try:
                    df_i = pd.read_excel(f)
                    df_i["_source_file"] = f.name
                    all_data.append(df_i)
                except Exception as e:
                    print(f"跳过文件 {f.name}：{e}")
        return pd.concat(all_data, ignore_index=True) if all_data else pd.DataFrame()
    else:
        raise ValueError(f"不支持的文件结构配置：{structure}")


def format_currency(value, symbol="¥", decimals=2, thousands=True):
    try:
        v = float(value)
        if thousands:
            return f"{symbol}{v:,.{decimals}f}"
        return f"{symbol}{v:.{decimals}f}"
    except (ValueError, TypeError):
        return str(value) if pd.notna(value) else "—"


def format_percent(value, decimals=1):
    try:
        return f"{float(value) * 100:.{decimals}f}%"
    except (ValueError, TypeError):
        return "—"


def compute_derived_fields(row: pd.Series, config: dict, fm: dict) -> dict:
    """计算派生字段，支持简单加减公式，格式化数字"""
    nf = config.get("number_format", {})
    symbol = nf.get("currency_symbol", "¥")
    decimals = nf.get("decimal_places", 2)
    thousands = nf.get("thousands_separator", True)
    computed = {}

    for placeholder, col_or_formula in fm.items():
        if not col_or_formula:
            computed[placeholder] = ""
            computed[f"{placeholder}_格式化"] = "—"
            continue

        # 处理简单减法公式（如 "总预算-实际支出"）
        if "-" in col_or_formula and col_or_formula not in row.index:
            parts = [p.strip() for p in col_or_formula.split("-")]
            try:
                val = sum(
                    float(row.get(fm.get(parts[0], parts[0]), 0) or 0)
                    - float(row.get(fm.get(p, p), 0) or 0)
                    for p in parts[1:]
                )
            except Exception:
                val = None
        else:
            val = row.get(col_or_formula)

        computed[placeholder] = val
        computed[f"{placeholder}_格式化"] = format_currency(val, symbol, decimals, thousands)

    # 计算执行率
    budget_key = fm.get("总预算")
    actual_key = fm.get("实际支出")
    if budget_key and actual_key:
        try:
            budget = float(row.get(budget_key, 0) or 0)
            actual = float(row.get(actual_key, 0) or 0)
            rate = actual / budget if budget != 0 else 0
            computed["执行率"] = rate
            computed["执行率_格式化"] = format_percent(rate)
        except Exception:
            computed["执行率"] = None
            computed["执行率_格式化"] = "—"

    return computed


def load_template(template_path: str) -> str:
    with open(template_path, encoding="utf-8") as f:
        return f.read()


def load_pm_lookup(pm_file_path: str) -> dict:
    """读取项目经理通讯录 Excel（需包含 项目编号、姓名、邮箱 三列）"""
    if not pm_file_path or not Path(pm_file_path).exists():
        return {}
    df_pm = pd.read_excel(pm_file_path)
    lookup = {}
    for _, row in df_pm.iterrows():
        proj_id = str(row.get("项目编号", ""))
        lookup[proj_id] = {
            "姓名": row.get("姓名", ""),
            "邮箱": row.get("邮箱", ""),
        }
    return lookup


def fill_template(template: str, project_row: pd.Series, computed_fields: dict,
                  config: dict, pm_lookup: dict = None) -> str:
    """将模板中的 {{占位符}} 替换为实际数据"""
    text = template
    id_col = config.get("project_id_column", "")
    name_col = config.get("project_name_column", "")
    period_col = config.get("report_period_column", "")

    replacements = {
        "项目编号": str(project_row.get(id_col, "")) if id_col else "",
        "项目名称": str(project_row.get(name_col, "")) if name_col else "",
        "报告期": str(project_row.get(period_col, "")) if period_col else "",
        "生成日期": datetime.now().strftime("%Y年%m月%d日"),
    }

    # 项目经理信息
    if pm_lookup and id_col:
        proj_id = str(project_row.get(id_col, ""))
        pm_info = pm_lookup.get(proj_id, {})
        replacements["收件人姓名"] = pm_info.get("姓名", "项目经理")
        replacements["收件人邮箱"] = pm_info.get("邮箱", "")

    replacements.update(computed_fields)

    def replace_placeholder(match):
        key = match.group(1).strip()
        value = replacements.get(key, f"{{{{⚠️ 未找到字段: {key}}}}}")
        return str(value)

    text = re.sub(r"\{\{(.+?)\}\}", replace_placeholder, text)

    # 预警检测
    alert_threshold = config.get("alert_thresholds", {})
    rate = computed_fields.get("执行率")
    warnings = []
    if rate is not None:
        if rate >= alert_threshold.get("execution_rate_critical", 1.0):
            warnings.append("⚠️【预算已超支】请项目经理关注并说明原因")
        elif rate >= alert_threshold.get("execution_rate_warning", 0.9):
            warnings.append("⚡【预算接近上限】执行率已超 90%，请做好剩余控制")

    if warnings:
        text += "\n\n" + "\n".join(warnings)

    return text


def main():
    parser = argparse.ArgumentParser(description="批量生成 BC 财务通知邮件")
    parser.add_argument("--config", required=True, help="字段映射配置文件路径")
    parser.add_argument("--bc-file", required=True, help="BC 成本结构 Excel 文件路径")
    parser.add_argument("--template", required=True, help="邮件模板文件路径")
    parser.add_argument("--output", default="email_output", help="输出文件夹路径")
    parser.add_argument("--pm-file", default="", help="项目经理通讯录 Excel 路径（可选）")
    parser.add_argument("--scope", default="", help="仅处理指定项目编号，逗号分隔（可选）")
    args = parser.parse_args()

    config = load_config(args.config)
    df = load_bc_data(args.bc_file, config)
    template = load_template(args.template)
    pm_lookup = load_pm_lookup(args.pm_file)

    output_folder = Path(args.output)
    output_folder.mkdir(exist_ok=True)

    # 处理范围过滤
    id_col = config.get("project_id_column", "")
    scope = [s.strip() for s in args.scope.split(",") if s.strip()]
    if scope and id_col and id_col in df.columns:
        df_process = df[df[id_col].astype(str).isin(scope)]
        print(f"按指定范围过滤，处理 {len(df_process)} 个项目（原始共 {len(df)} 个）")
    else:
        df_process = df

    generated = []
    skipped = []
    alerts = []

    for _, row in df_process.iterrows():
        proj_id = str(row.get(id_col, "unknown")) if id_col else "unknown"
        try:
            fm = config.get("field_mapping", {})
            computed = compute_derived_fields(row, config, fm)
            email_text = fill_template(template, row, computed, config, pm_lookup)

            # 文件命名：项目编号_项目名称_财务通知.txt
            name_col = config.get("project_name_column", "")
            proj_name = str(row.get(name_col, ""))[:20] if name_col else ""
            safe_name = re.sub(r'[\\/:*?"<>|]', "_", f"{proj_id}_{proj_name}")
            out_path = output_folder / f"{safe_name}_财务通知.txt"

            with open(out_path, "w", encoding="utf-8") as f:
                f.write(email_text)
            generated.append(proj_id)

            if "⚠️" in email_text or "⚡" in email_text:
                alerts.append(proj_id)

        except Exception as e:
            skipped.append(proj_id)
            print(f"项目 {proj_id} 生成失败：{e}")

    # 生成摘要日志
    summary_lines = [
        f"生成时间：{datetime.now().strftime('%Y-%m-%d %H:%M')}",
        f"成功生成：{len(generated)} 份",
        f"生成失败：{len(skipped)} 份 → {skipped}",
        f"包含预算预警：{len(alerts)} 份 → {alerts}",
        f"输出目录：{output_folder.resolve()}",
    ]
    with open(output_folder / "生成摘要.txt", "w", encoding="utf-8") as f:
        f.write("\n".join(summary_lines))

    print("\n".join(summary_lines))
    print(f"\n处理完成，邮件文件位于：{output_folder.resolve()}")


if __name__ == "__main__":
    main()