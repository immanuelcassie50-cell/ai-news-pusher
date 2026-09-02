#!/usr/bin/env python3
"""Generate all 13 Excel tool forms for 破题力 course."""

import os
import shutil

TEMPLATE_DIR = "C:/Users/Administrator/.claude/skills/Excel表格处理/templates/minimal_xlsx"
OUTPUT_DIR = "D:/新课开发/行动学习2026/破题力-思维课/课程包2-智慧版/07-工具表单"

def copy_template():
    """Copy minimal template to /tmp/xlsx_work/"""
    work_dir = "/tmp/xlsx_work"
    if os.path.exists(work_dir):
        shutil.rmtree(work_dir)
    shutil.copytree(TEMPLATE_DIR, work_dir)
    return work_dir

def write_xml(path, content):
    """Write XML content to file."""
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)

def create_shared_strings(strings):
    """Create sharedStrings.xml content."""
    unique = list(dict.fromkeys(strings))  # preserve order, remove dupes
    count = len(strings)
    unique_count = len(unique)
    si_items = ''
    for s in unique:
        escaped = s.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;')
        si_items += f'<si><t>{escaped}</t></si>\n'
    return f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="{count}" uniqueCount="{unique_count}">
{si_items}</sst>'''

def create_sheet_data(rows):
    """Create sheetData XML from list of row dicts.
    Each row: list of (col, value, type, style) tuples.
    col like 'A1', value is str, type 's' for shared string, '' for number, 'inlineStr' for inline.
    """
    xml_rows = ''
    for r_idx, row in enumerate(rows, 1):
        cells = ''
        for col, val, cell_type, style in row:
            if cell_type == 'inlineStr':
                escaped = str(val).replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;')
                cells += f'<c r="{col}" s="{style}" t="inlineStr"><is><t>{escaped}</t></is></c>\n'
            elif cell_type == 's':
                cells += f'<c r="{col}" s="{style}" t="s"><v>{val}</v></c>\n'
            else:
                cells += f'<c r="{col}" s="{style}"><v>{val}</v></c>\n'
        xml_rows += f'<row r="{r_idx}">\n{cells}</row>\n'
    return f'<sheetData>\n{xml_rows}</sheetData>'

def set_col_widths(sheet_path, widths):
    """Add column widths to sheet (insert cols element before sheetData)."""
    with open(sheet_path, 'r', encoding='utf-8') as f:
        content = f.read()
    cols_xml = '<cols>\n'
    for w in widths:
        cols_xml += f'  <col min="{w[0]}" max="{w[1]}" width="{w[2]}" customWidth="1"/>\n'
    cols_xml += '</cols>\n'
    content = content.replace('<sheetData>', cols_xml + '<sheetData>')
    with open(sheet_path, 'w', encoding='utf-8') as f:
        f.write(content)

# ==================== FILE 1: 工具包封面 ====================
def create_cover():
    work_dir = copy_template()

    # Update workbook.xml
    workbook = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <fileVersion appName="xl" lastEdited="7" lowestEdited="7"/>
  <workbookPr defaultThemeVersion="166925"/>
  <bookViews><workbookView xWindow="0" yWindow="0" windowWidth="20140" windowHeight="10960"/></bookViews>
  <sheets>
    <sheet name="工具包封面" sheetId="1" r:id="rId1"/>
  </sheets>
  <calcPr calcId="191029"/>
</workbook>'''
    write_xml(f"{work_dir}/xl/workbook.xml", workbook)

    strings = [
        "破题力：行动学习者的四维问题定义训练营",
        "工具包封面",
        "课程工具表单集",
        "第1讲：课题三层定义表",
        "第2讲：正确的废话自检清单",
        "第3讲：课题背后隐藏考题诊断表",
        "第4讲：类比模型识别清单",
        "第5讲：类比合理性三问清单",
        "第6讲：反面喻体法汇报模板",
        "第7讲：归因草率自检表",
        "第8讲：竞争性假说复盘表",
        "第9讲：调研方案三大误区自查表",
        "第10讲：判断标准梳理表",
        "第11讲：隐藏标准发现清单",
        "第12讲：价值观冲突定位表",
    ]
    write_xml(f"{work_dir}/xl/sharedStrings.xml", create_shared_strings(strings))

    # Create sheet with cover content
    sheet = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"/></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <sheetData>
    <row r="1"><c r="A1" s="4" t="s"><v>0</v></c></row>
    <row r="2"><c r="A2" s="4" t="s"><v>1</v></c></row>
    <row r="4"><c r="A4" s="4" t="s"><v>2</v></c></row>
    <row r="6"><c r="A6" s="1" t="s"><v>3</v></c></row>
    <row r="7"><c r="A7" s="1" t="s"><v>4</v></c></row>
    <row r="8"><c r="A8" s="1" t="s"><v>5</v></c></row>
    <row r="9"><c r="A9" s="1" t="s"><v>6</v></c></row>
    <row r="10"><c r="A10" s="1" t="s"><v>7</v></c></row>
    <row r="11"><c r="A11" s="1" t="s"><v>8</v></c></row>
    <row r="12"><c r="A12" s="1" t="s"><v>9</v></c></row>
    <row r="13"><c r="A13" s="1" t="s"><v>10</v></c></row>
    <row r="14"><c r="A14" s="1" t="s"><v>11</v></c></row>
    <row r="15"><c r="A15" s="1" t="s"><v>12</v></c></row>
    <row r="16"><c r="A16" s="1" t="s"><v>13</v></c></row>
    <row r="17"><c r="A17" s="1" t="s"><v>14</v></c></row>
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75"/>
</worksheet>'''
    write_xml(f"{work_dir}/xl/worksheets/sheet1.xml", sheet)
    set_col_widths(f"{work_dir}/xl/worksheets/sheet1.xml", [(1, 1, 40), (2, 10, 15)])

    # Pack
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    out_path = f"{OUTPUT_DIR}/工具包封面.xlsx"
    import subprocess
    subprocess.run(['python3', 'C:/Users/Administrator/.claude/skills/Excel表格处理/scripts/xlsx_pack.py', work_dir, out_path], check=True)
    print(f"Created: {out_path}")

# ==================== FILE 2-13: Tool Forms ====================
def create_tool_form(num, title, subtitle, headers, rows, example_row=None):
    """Generic tool form generator."""
    work_dir = copy_template()

    # Update workbook
    workbook = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <fileVersion appName="xl" lastEdited="7" lowestEdited="7"/>
  <workbookPr defaultThemeVersion="166925"/>
  <bookViews><workbookView xWindow="0" yWindow="0" windowWidth="20140" windowHeight="10960"/></bookViews>
  <sheets>
    <sheet name="工具表" sheetId="1" r:id="rId1"/>
  </sheets>
  <calcPr calcId="191029"/>
</workbook>'''
    write_xml(f"{work_dir}/xl/workbook.xml", workbook)

    # Build strings list
    all_strings = [title, subtitle] + headers
    if example_row:
        all_strings.extend(example_row)
    for row in rows:
        for cell in row:
            if isinstance(cell, str):
                all_strings.append(cell)

    write_xml(f"{work_dir}/xl/sharedStrings.xml", create_shared_strings(all_strings))

    # Build sheet data
    sheet_rows = []
    # Row 1: Title
    sheet_rows.append([('A1', '0', 's', '4'), ('B1', '1', 's', '4')])
    # Row 2: Subtitle/instructions
    sheet_rows.append([('A2', '2', 's', '1')])
    # Row 3: Header row
    header_cells = [('A3', '3', 's', '4')]
    for i, h in enumerate(headers[1:], 4):
        col = chr(64 + i) if i <= 26 else chr(64 + i // 26) + chr(64 + i % 26 + 1)
        sheet_rows.append([(f'{chr(65+i-1)}3', str(i+2), 's', '4')])
    # Actually let's rebuild properly

    # Simpler: build all rows manually
    sheet_rows = []
    # Row 1: Main title (merge cells visually via layout)
    sheet_rows.append([('A1', '0', 's', '4'), ('B1', '1', 's', '4')])
    # Row 2: Instructions
    sheet_rows.append([('A2', '2', 's', '1')])
    # Row 3: Column headers
    for i, h in enumerate(headers):
        col = chr(65 + i)
        sheet_rows.append([(f'{col}3', str(i + 3), 's', '4')])

    # Data rows (starting from row 4)
    str_idx = len(headers) + 3
    for row in rows:
        row_data = []
        for i, cell in enumerate(row):
            col = chr(65 + i)
            if isinstance(cell, str):
                row_data.append((f'{col}{len(sheet_rows)+4}', str(str_idx), 's', '1'))
                str_idx += 1
            else:
                row_data.append((f'{col}{len(sheet_rows)+4}', str(cell), '', '1'))
        sheet_rows.append(row_data)

    # Example row (if provided) - fill gap between headers and data
    if example_row:
        ex_row = []
        for i, cell in enumerate(example_row):
            col = chr(65 + i)
            if isinstance(cell, str):
                ex_row.append((f'{col}4', str(str_idx), 's', '2'))  # style 2 = formula/black
                str_idx += 1
            else:
                ex_row.append((f'{col}4', str(cell), '', '5'))  # style 5 = currency input blue
        # Insert as row 4

    sheet_data = '<sheetData>\n'
    for r_idx, row in enumerate(sheet_rows, 1):
        cells = ''
        for col, val, cell_type, style in row:
            if cell_type == 's':
                cells += f'<c r="{col}" s="{style}" t="s"><v>{val}</v></c>\n'
            else:
                cells += f'<c r="{col}" s="{style}"><v>{val}</v></c>\n'
        sheet_data += f'<row r="{r_idx}">\n{cells}</row>\n'
    sheet_data += '</sheetData>'

    sheet = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"/></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  {sheet_data}
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75"/>
</worksheet>'''
    write_xml(f"{work_dir}/xl/worksheets/sheet1.xml", sheet)

    # Set column widths
    widths = [(1, 1, 30)]
    for i in range(1, len(headers)):
        widths.append((i+1, i+1, 20))
    set_col_widths(f"{work_dir}/xl/worksheets/sheet1.xml", widths)

    # Pack
    out_path = f"{OUTPUT_DIR}/{num:02d}-{title.replace(':', '：').split('：')[0].split('（')[0].strip()}.xlsx"
    if '/' in out_path or '\\' in out_path:
        out_path = f"{OUTPUT_DIR}/{num:02d}-工具{num}.xlsx"

    import subprocess
    subprocess.run(['python3', 'C:/Users/Administrator/.claude/skills/Excel表格处理/scripts/xlsx_pack.py', work_dir, out_path], check=True)
    print(f"Created: {out_path}")
    return out_path

def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)

    # 1. 工具包封面
    create_cover()

    # 2. 课题三层定义表
    create_tool_form(
        1, "课题三层定义表", "定义课题的三个层次：现象层、问题层、求解层",
        ["层次", "定义", "示例", "本次填写"],
        [
            ["现象层", "观察到的具体现象或结果", "销售额下降20%", ""],
            ["问题层", "导致现象的根本原因", "客户需求理解偏差", ""],
            ["求解层", "需要找到的具体解决方案", "重新调研目标客群", ""],
        ],
        example_row=["现象层", "客户投诉率上升", "某产品退货率增加30%", ""]
    )

    # 3. 正确的废话自检清单
    create_tool_form(
        2, "正确的废话自检清单", "检查表述是否过于笼统、缺乏可操作性",
        ["序号", "废话类型", "典型表述", "问题诊断", "改进方向"],
        [
            ["1", "概念模糊", "加强管理", "未说明管什么、怎么管", "明确具体动作"],
            ["2", "缺乏数据", "大幅提升", "没有量化标准", "设定具体指标"],
            ["3", "不可衡量", "做到最好", "没有评判标准", "定义成功基准"],
        ]
    )

    # 4. 隐藏考题诊断表
    create_tool_form(
        3, "隐藏考题诊断表", "识别课题背后的真实考题",
        ["维度", "表面课题", "隐藏考题", "诊断依据", "本次分析"],
        [
            ["利益相关方", "如何提高利润", "如何平衡短期与长期利益", "追问'为什么现在提'", ""],
            ["约束条件", "如何开拓市场", "如何在资源有限下突围", "追问'限制是什么'", ""],
            ["判断标准", "如何选择供应商", "什么才是好的供应商", "追问'好的定义'", ""],
        ]
    )

    # 5. 类比模型识别清单
    create_tool_form(
        4, "类比模型识别清单", "识别类比中的模型结构",
        ["要素", "源域描述", "目标域对应", "类比映射", "匹配度评估"],
        [
            ["核心特征", "像一台精密机器", "企业管理", "系统性、协调性", ""],
            ["关键机制", "齿轮相互咬合", "部门协作", "依赖关系", ""],
            ["边界条件", "机器有使用寿命", "组织有生命周期", "资源约束", ""],
        ]
    )

    # 6. 类比三问清单
    create_tool_form(
        5, "类比三问清单", "检验类比合理性的三个关键问题",
        ["问题", "为什么问", "常见问题", "本次回答"],
        [
            ["本质相同吗", "类比要求本质相似而非表面相似", "看起来很像所以一样", ""],
            ["边界一致吗", "任何类比都有边界，边界不同则结论不同", "没有边界意识", ""],
            ["能证伪吗", "不能证伪的类比是无效的", "无法设计检验标准", ""],
        ]
    )

    # 7. 反面喻体法模板
    create_tool_form(
        6, "反面喻体法模板", "通过反面案例排除不合理方案",
        ["方案", "正面案例特征", "反面案例特征", "排除理由", "保留价值"],
        [
            ["方案A", "华为狼性文化", "某企业盲目模仿失败", "简单复制不可行", "精神内核可借鉴"],
            ["方案B", "海底捞极致服务", "服务过度导致成本失控", "需控制边界", "用户导向思维"],
        ]
    )

    # 8. 归因草率自检表
    create_tool_form(
        7, "归因草率自检表", "检查因果关系判断的严谨性",
        ["诊断维度", "草率归因表现", "本次分析", "正确归因要求", "核查结果"],
        [
            ["相关当因果", "A发生B也发生，所以A导致B", "", "需排除第三变量", ""],
            ["事后诸葛亮", "发生后解释原因，当作预测", "", "需事前假设验证", ""],
            ["单一原因论", "问题都由一个原因引起", "", "多因素综合分析", ""],
        ]
    )

    # 9. 竞争性假说复盘表
    create_tool_form(
        8, "竞争性假说复盘表", "多角度假设验证避免单一视角",
        ["假说", "支持证据", "反对证据", "证据权重", "最终判断"],
        [
            ["假说A：市场原因", "竞争对手在增长", "我们的产品确实老化", "70%", "主因"],
            ["假说B：渠道原因", "线上渠道下滑", "线下也在下滑", "30%", "次因"],
        ]
    )

    # 10. 调研误区自查表
    create_tool_form(
        9, "调研误区自查表", "检查调研设计和执行中的常见错误",
        ["误区类型", "具体表现", "自查问题", "本次排查"],
        [
            ["样本偏差", "只用熟悉的人", "样本有代表性吗", ""],
            ["引导性提问", "您是否满意我们的服务", "问题是中性的吗", ""],
            ["幸存者偏差", "只问成交客户", "未成交客户怎么说", ""],
        ]
    )

    # 11. 判断标准梳理表
    create_tool_form(
        10, "判断标准梳理表", "明确决策和评判的维度与标准",
        ["判断对象", "核心维度", "标准A（优秀）", "标准B（合格）", "标准C（不合格）"],
        [
            ["方案评估", "可行性", "资源充足、可快速落地", "需要额外资源", "资源无法获取"],
            ["方案评估", "效果", "显著提升核心指标", "有一定改善", "无明显改善"],
            ["方案评估", "风险", "风险可控有预案", "风险已知可接受", "风险未知或过高"],
        ]
    )

    # 12. 隐藏标准发现清单
    create_tool_form(
        11, "隐藏标准发现清单", "挖掘表面标准背后的隐性标准",
        ["表面标准", "隐性标准", "发现方法", "本次挖掘"],
        [
            ["学历要求", "实际是学习能力", "追问'为什么需要'", ""],
            ["经验要求", "实际是应变能力", "追问'遇到新问题怎么办'", ""],
            ["薪资预算", "实际是价值判断", "追问'为什么是这个数字'", ""],
        ]
    )

    # 13. 价值观冲突定位表
    create_tool_form(
        12, "价值观冲突定位表", "识别多方利益中的价值冲突",
        ["利益方", "核心诉求", "表面立场", "深层价值观", "冲突分析"],
        [
            ["股东", "投资回报", "高增长", "短期利益优先", ""],
            ["员工", "职业发展", "高工资", "长期保障优先", ""],
            ["客户", "产品价值", "低价格", "性价比优先", ""],
        ]
    )

if __name__ == "__main__":
    main()
