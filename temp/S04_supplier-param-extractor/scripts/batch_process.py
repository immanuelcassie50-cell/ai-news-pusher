"""步骤3-4：批量处理文件夹，调用提取器，生成 Excel 对比表"""
import argparse
import sys
from pathlib import Path
import pandas as pd

# 导入同目录下的提取模块
from extract_params import extract_from_file, get_supplier_name, load_config


def batch_process(input_folder, config_path, output_folder=None):
    """批量处理供应商文件并生成对比表"""
    input_path = Path(input_folder)
    config = load_config(config_path)

    if output_folder is None:
        output_folder = input_path / "output"
    else:
        output_folder = Path(output_folder)
    output_folder.mkdir(exist_ok=True)

    param_names = [p["name"] for p in config["parameters"]]
    all_results = {}
    skipped = []

    print(f"开始处理文件夹：{input_path}")
    print(f"配置文件：{config_path}\n")

    for file_path in sorted(input_path.iterdir()):
        if file_path.suffix.lower() not in (".pdf", ".docx", ".doc", ".xlsx", ".xls"):
            continue
        supplier = get_supplier_name(file_path)
        print(f"处理：{file_path.name} → 供应商标识：{supplier}")
        try:
            results = extract_from_file(file_path, config)
            all_results[supplier] = results
        except Exception as e:
            skipped.append(file_path.name)
            print(f"  ⚠️ 处理失败：{e}")

    if not all_results:
        print("错误：未能成功处理任何文件")
        sys.exit(1)

    # ---- 生成横向对比表 ----
    rows_main = []
    rows_conf = []
    rows_trace = []

    my_req = config.get("my_requirements", {})

    for param_name in param_names:
        row_main = {"参数": param_name, "我方需求": my_req.get(param_name, "")}
        row_conf = {"参数": param_name}
        row_trace = {"参数": param_name}

        for supplier, results in all_results.items():
            info = results.get(param_name, {})
            val = info.get("value", "⚠️ 文件未提及")
            conf = info.get("confidence", "—")
            ctx = info.get("context", "")

            if my_req.get(param_name) and val != "⚠️ 文件未提及":
                row_main[supplier] = f"{val} ✓" if my_req[param_name] in val else val
            else:
                row_main[supplier] = val

            row_conf[supplier] = conf
            row_trace[supplier] = ctx

        rows_main.append(row_main)
        rows_conf.append(row_conf)
        rows_trace.append(row_trace)

    df_main = pd.DataFrame(rows_main)
    df_conf = pd.DataFrame(rows_conf)
    df_trace = pd.DataFrame(rows_trace)

    # 生成待人工确认清单
    review_items = []
    for param_name in param_names:
        for supplier, results in all_results.items():
            info = results.get(param_name, {})
            val = info.get("value", "")
            conf = info.get("confidence", "")
            if "⚠️" in str(val) or conf == "low":
                review_items.append({
                    "供应商": supplier,
                    "参数": param_name,
                    "提取值": val,
                    "置信度": conf,
                    "原文片段": info.get("context", ""),
                    "建议": "⚠️ 请人工在原文中确认" if "⚠️" in str(val) else "⚡ 低置信度，建议核实"
                })
    df_review = pd.DataFrame(review_items) if review_items else pd.DataFrame()

    # 写入 Excel 多 Sheet
    output_path = output_folder / "供应商参数对比表.xlsx"
    with pd.ExcelWriter(output_path, engine="openpyxl") as writer:
        df_main.to_excel(writer, sheet_name="参数对比（主表）", index=False)
        df_conf.to_excel(writer, sheet_name="提取置信度", index=False)
        df_trace.to_excel(writer, sheet_name="原文溯源", index=False)
        if not df_review.empty:
            df_review.to_excel(writer, sheet_name="待人工确认", index=False)

    # ---- 输出汇报 ----
    print(f"\n{'='*50}")
    print(f"处理完成，输出文件位于：{output_path}")
    print(f"\n供应商参数对比表.xlsx — 包含四个 Sheet：")
    print(f"  • 参数对比（主表）：核心对比表，"⚠️ 文件未提及"需人工补充")
    print(f"  • 提取置信度：high=直接引用规格值 / medium=上下文推断 / low=需核实")
    print(f"  • 原文溯源：每个提取值对应的原文片段，便于核查")
    print(f"  • 待人工确认：置信度低或未提及的条目汇总")
    print(f"\n共处理：{len(all_results)} 份文件，涉及 {len(all_results)} 家供应商")

    if skipped:
        print(f"以下文件处理失败，已跳过：{skipped}")

    if not df_review.empty:
        print(f"待人工确认：{len(df_review)} 项（见"待人工确认" Sheet）")
    else:
        print("所有参数均已成功提取，无需人工确认")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="批量处理供应商文件并生成参数对比表")
    parser.add_argument("input_folder", help="供应商文件所在文件夹路径")
    parser.add_argument("config_path", help="参数提取配置文件路径")
    parser.add_argument("-o", "--output", default=None,
                        help="输出文件夹路径（默认：输入文件夹下的 output/）")
    args = parser.parse_args()

    batch_process(args.input_folder, args.config_path, args.output)