#!/usr/bin/env python3
"""Build 情景领导 Excel forms using XML approach."""

import os
import shutil
import zipfile
from xml.sax.saxutils import escape

SKILL_DIR = "C:/Users/Administrator/.claude/skills/Excel表格处理"
OUTPUT_DIR = "D:/Downloads/情景领导/传统版/完整课程包/15_配套表单Excel版"

def copy_template():
    """Copy minimal template to work dir."""
    src = os.path.join(SKILL_DIR, "templates", "minimal_xlsx")
    dst = "/tmp/xlsx_work"
    if os.path.exists(dst):
        shutil.rmtree(dst)
    shutil.copytree(src, dst)
    return dst

def build_shared_strings(strings):
    """Build sharedStrings.xml content."""
    count = len(strings)
    items = []
    for s in strings:
        escaped = escape(s).replace('"', '&quot;')
        items.append(f'<si><t xml:space="preserve">{escaped}</t></si>')
    return f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="{count}" uniqueCount="{count}">
    {''.join(items)}
</sst>'''

def build_form_sheet(rows, title, col_widths=None):
    """Build a form sheet with given rows."""
    if col_widths is None:
        col_widths = {"A": 18, "B": 45, "C": 25}

    cols_xml = ""
    for col, width in sorted(col_widths.items()):
        cols_xml += f'<col min="{ord(col)-64}" max="{ord(col)-64}" width="{width}" customWidth="1"/>\n'

    rows_xml = ""
    for r_idx, row in enumerate(rows, 1):
        row_xml = f'<row r="{r_idx}"'
        if row.get('height'):
            row_xml += f' ht="{row["height"]}" customHeight="1"'
        row_xml += ">"

        for cell in row.get('cells', []):
            addr = cell['addr']
            val = cell.get('v', '')
            typ = cell.get('t', 's')
            style = cell.get('s', '4')

            if typ == 's':
                row_xml += f'<c r="{addr}" t="s" s="{style}"><v>{val}</v></c>\n'
            elif typ == 'inlineStr':
                row_xml += f'<c r="{addr}" t="inlineStr" s="{style}"><is><t>{escape(val)}</t></is></c>\n'
            elif typ == 'f':
                row_xml += f'<c r="{addr}" s="{style}"><f>{val}</f><v></v></c>\n'
            else:
                row_xml += f'<c r="{addr}" s="{style}"><v>{val}</v></c>\n'

        row_xml += "</row>\n"
        rows_xml += row_xml

    return f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"/></sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25"
    xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols>{cols_xml}</cols>
  <sheetData>{rows_xml}</sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

def create_empty_forms():
    """Create the empty forms xlsx."""
    dst = copy_template()

    # All strings for sharedStrings
    strings = [
        "因人施教：经典情境带教法",
        "表单一：带教对象档案",
        "这个人是：",
        "（化名即可）",
        "TA目前的岗位/角色：",
        "我接下来想重点诊断的，是TA在哪一件具体任务上的状态：",
        "我目前对TA在这件事上的能力判断是：",
        "我目前对TA在这件事上的意愿判断是：",
        "我之所以想重新审视，是因为：",
        "表单二：能力诊断表",
        "针对这件具体任务，我打算用哪种方法验证TA的能力：",
        "看履历",
        "看过往结果",
        "试做检验",
        "看履历的具体追问问题：",
        "看过往结果的具体追问问题：",
        "如果用试做检验，我打算安排的小任务是：",
        "【验证后的结论】",
        "真实能力结论：高 / 低",
        "具体依据：",
        "表单三：意愿诊断表",
        "我观察到的行为信号是：",
        "我初步判断，意愿可能存在以下根源（可多选）：",
        "畏难不敢说",
        "缺乏认可",
        "人际矛盾",
        "个人状态",
        "意义感不足",
        "还不确定",
        "如果要进一步核实，我打算用哪种方法：",
        "观察行为信号",
        "一对一沟通",
        "信任试探",
        "具体打算怎么做：",
        "真实意愿结论：高 / 低",
        "具体根源：",
        "表单四：双轴四型定位表",
        "能力高",
        "能力低",
        "意愿低",
        "意愿高",
        "□倦怠型",
        "□成熟型",
        "□新手型",
        "□热血型",
        "根据前面的诊断，TA在这件事上的能力是：",
        "根据前面的诊断，TA在这件事上的意愿是：",
        "所以，TA当前属于：",
        "判断依据：",
        "表单五：带教打法行动脚本表",
        "TA属于：",
        "对应打法：",
        "手把手教",
        "边教边带",
        "多支持少指挥",
        "充分放权",
        "我接下来打算说的开场白：",
        "我打算安排的下一步具体动作：",
        "如果TA出现抵触或犹豫，我打算怎么接：",
        "表单六：灵活切换记录表",
        "【换新任务时重新诊断】",
        "新任务是：",
        "TA在这件新任务上的能力/意愿判断：",
        "【随成长调整打法】",
        "TA在原打法下，最近的进步表现是：",
        "我打算如何调整检查频率或自主空间：",
        "【警惕状态滑落】",
        "我最近的哪些具体管理动作，可能正在消耗TA的状态：",
        "表单七：完整带教行动方案（汇总版）",
        "研究对象：",
        "具体任务：",
        "【能力诊断】",
        "验证方法：",
        "结论：高 / 低",
        "依据：",
        "【意愿诊断】",
        "观察到的信号：",
        "可能根源：",
        "【定位结论】",
        "【行动打法】",
        "对应打法：",
        "开场白：",
        "下一步具体动作：",
        "【检验节点】",
        "检验时间：",
        "期待的变化信号：",
        "表单八：反思与跟进计划表",
        "【我的收获】",
        "这门课里，让我印象最深的三个收获是：",
        "回到岗位后，我打算第一个改变的具体动作是：",
        "【跟进计划】",
        "我打算在什么时间点，回头检查这份方案的执行情况：",
        "到那时候，我会重点检查：",
        "TA的定位有没有发生变化",
        "打法有没有起到预期效果",
        "是否需要随TA的成长调整打法",
    ]

    # Write sharedStrings.xml
    with open(os.path.join(dst, "xl", "sharedStrings.xml"), "w", encoding="utf-8") as f:
        f.write(build_shared_strings(strings))

    # Define each sheet's rows
    sheets_data = []

    # Sheet 1: 带教对象档案
    sheet1_rows = [
        {"cells": [{"addr": "A1", "v": 0, "s": "4"}, {"addr": "B1", "v": 1, "s": "4"}]},
        {"cells": [{"addr": "A3", "v": 2, "s": "1"}, {"addr": "B3", "v": 3, "s": "0"}]},
        {"cells": [{"addr": "A4", "v": 4, "s": "1"}]},
        {"cells": [{"addr": "A6", "v": 5, "s": "1"}]},
        {"cells": [{"addr": "A8", "v": 6, "s": "1"}]},
        {"cells": [{"addr": "A10", "v": 7, "s": "1"}]},
        {"cells": [{"addr": "A12", "v": 8, "s": "1"}]},
    ]
    sheets_data.append(("表一_带教对象档案", sheet1_rows, {"A": 35, "B": 50}))

    # Sheet 2: 能力诊断表
    sheet2_rows = [
        {"cells": [{"addr": "A1", "v": 9, "s": "4"}, {"addr": "B1", "v": 10, "s": "4"}]},
        {"cells": [{"addr": "A3", "v": 11, "s": "1"}, {"addr": "A4", "v": 12, "s": "1"}, {"addr": "A5", "v": 13, "s": "1"}]},
        {"cells": [{"addr": "A7", "v": 14, "s": "1"}]},
        {"cells": [{"addr": "A9", "v": 15, "s": "1"}]},
        {"cells": [{"addr": "A11", "v": 16, "s": "1"}]},
        {"cells": [{"addr": "A13", "v": 17, "s": "4"}, {"addr": "A14", "v": 18, "s": "1"}, {"addr": "A16", "v": 19, "s": "1"}]},
    ]
    sheets_data.append(("表二_能力诊断表", sheet2_rows, {"A": 45, "B": 50}))

    # Sheet 3: 意愿诊断表
    sheet3_rows = [
        {"cells": [{"addr": "A1", "v": 20, "s": "4"}]},
        {"cells": [{"addr": "A3", "v": 21, "s": "1"}]},
        {"cells": [{"addr": "A5", "v": 22, "s": "1"}, {"addr": "A6", "v": 23, "s": "1"}, {"addr": "A7", "v": 24, "s": "1"}, {"addr": "A8", "v": 25, "s": "1"}, {"addr": "A9", "v": 26, "s": "1"}, {"addr": "A10", "v": 27, "s": "1"}]},
        {"cells": [{"addr": "A12", "v": 28, "s": "1"}, {"addr": "A13", "v": 29, "s": "1"}, {"addr": "A14", "v": 30, "s": "1"}, {"addr": "A15", "v": 31, "s": "1"}]},
        {"cells": [{"addr": "A17", "v": 32, "s": "1"}]},
        {"cells": [{"addr": "A19", "v": 33, "s": "4"}, {"addr": "A20", "v": 34, "s": "1"}, {"addr": "A22", "v": 35, "s": "1"}]},
    ]
    sheets_data.append(("表三_意愿诊断表", sheet3_rows, {"A": 45, "B": 50}))

    # Sheet 4: 双轴四型定位表
    sheet4_rows = [
        {"cells": [{"addr": "A1", "v": 36, "s": "4"}]},
        {"height": 30, "cells": [{"addr": "B3", "v": 37, "s": "4"}, {"addr": "C3", "v": 38, "s": "4"}, {"addr": "D3", "v": 39, "s": "4"}, {"addr": "E3", "v": 40, "s": "4"}]},
        {"height": 30, "cells": [{"addr": "A4", "v": 41, "s": "4"}, {"addr": "B4", "v": 43, "s": "1"}, {"addr": "C4", "v": 42, "s": "1"}]},
        {"height": 30, "cells": [{"addr": "A5", "v": 42, "s": "4"}, {"addr": "B5", "v": 44, "s": "1"}, {"addr": "C5", "v": 45, "s": "1"}]},
        {"cells": [{"addr": "A7", "v": 46, "s": "1"}, {"addr": "A8", "v": 47, "s": "1"}]},
        {"cells": [{"addr": "A10", "v": 48, "s": "1"}]},
        {"cells": [{"addr": "A12", "v": 49, "s": "1"}]},
    ]
    sheets_data.append(("表四_双轴四型定位表", sheet4_rows, {"A": 20, "B": 18, "C": 18, "D": 18, "E": 18}))

    # Sheet 5: 带教打法行动脚本表
    sheet5_rows = [
        {"cells": [{"addr": "A1", "v": 50, "s": "4"}]},
        {"cells": [{"addr": "A3", "v": 51, "s": "1"}, {"addr": "B3", "v": 52, "s": "1"}, {"addr": "B4", "s": "1"}, {"addr": "B5", "s": "1"}, {"addr": "B6", "s": "1"}]},
        {"cells": [{"addr": "A8", "v": 53, "s": "1"}]},
        {"cells": [{"addr": "A10", "v": 54, "s": "1"}]},
        {"cells": [{"addr": "A12", "v": 55, "s": "1"}]},
        {"cells": [{"addr": "A14", "v": 56, "s": "1"}]},
    ]
    sheets_data.append(("表五_带教打法行动脚本表", sheet5_rows, {"A": 35, "B": 50}))

    # Sheet 6: 灵活切换记录表
    sheet6_rows = [
        {"cells": [{"addr": "A1", "v": 57, "s": "4"}]},
        {"cells": [{"addr": "A3", "v": 58, "s": "4"}]},
        {"cells": [{"addr": "A4", "v": 59, "s": "1"}]},
        {"cells": [{"addr": "A6", "v": 60, "s": "1"}]},
        {"cells": [{"addr": "A8", "v": 61, "s": "4"}]},
        {"cells": [{"addr": "A9", "v": 62, "s": "1"}]},
        {"cells": [{"addr": "A11", "v": 63, "s": "1"}]},
        {"cells": [{"addr": "A13", "v": 64, "s": "4"}]},
        {"cells": [{"addr": "A14", "v": 65, "s": "1"}]},
    ]
    sheets_data.append(("表六_灵活切换记录表", sheet6_rows, {"A": 40, "B": 50}))

    # Sheet 7: 完整带教行动方案
    sheet7_rows = [
        {"cells": [{"addr": "A1", "v": 66, "s": "4"}]},
        {"cells": [{"addr": "A3", "v": 67, "s": "1"}, {"addr": "B3", "v": 68, "s": "1"}]},
        {"cells": [{"addr": "A5", "v": 69, "s": "4"}]},
        {"cells": [{"addr": "A6", "v": 70, "s": "1"}, {"addr": "B6", "v": 71, "s": "1"}]},
        {"cells": [{"addr": "A8", "v": 72, "s": "4"}]},
        {"cells": [{"addr": "A9", "v": 73, "s": "1"}, {"addr": "B9", "v": 74, "s": "1"}]},
        {"cells": [{"addr": "A11", "v": 75, "s": "4"}]},
        {"cells": [{"addr": "A13", "v": 76, "s": "4"}]},
        {"cells": [{"addr": "A14", "v": 77, "s": "1"}, {"addr": "B14", "v": 78, "s": "1"}]},
        {"cells": [{"addr": "A16", "v": 79, "s": "4"}]},
        {"cells": [{"addr": "A17", "v": 80, "s": "1"}, {"addr": "B17", "v": 81, "s": "1"}]},
    ]
    sheets_data.append(("表七_完整带教行动方案", sheet7_rows, {"A": 25, "B": 50}))

    # Sheet 8: 反思与跟进计划表
    sheet8_rows = [
        {"cells": [{"addr": "A1", "v": 82, "s": "4"}]},
        {"cells": [{"addr": "A3", "v": 83, "s": "4"}]},
        {"cells": [{"addr": "A4", "v": 84, "s": "1"}]},
        {"cells": [{"addr": "A5", "v": 85, "s": "1"}]},
        {"cells": [{"addr": "A6", "v": 86, "s": "1"}]},
        {"cells": [{"addr": "A8", "v": 87, "s": "1"}]},
        {"cells": [{"addr": "A10", "v": 88, "s": "4"}]},
        {"cells": [{"addr": "A11", "v": 89, "s": "1"}]},
        {"cells": [{"addr": "A13", "v": 90, "s": "4"}]},
        {"cells": [{"addr": "A14", "v": 91, "s": "1"}]},
        {"cells": [{"addr": "A15", "v": 92, "s": "1"}]},
        {"cells": [{"addr": "A16", "v": 93, "s": "1"}]},
    ]
    sheets_data.append(("表八_反思与跟进计划表", sheet8_rows, {"A": 40, "B": 50}))

    # Build workbook.xml
    sheets_xml = ""
    for i, (name, _, _) in enumerate(sheets_data, 1):
        safe_name = name.replace("&", "&amp;")
        sheets_xml += f'<sheet name="{safe_name}" sheetId="{i}" r:id="rId{i}"/>\n'

    workbook_xml = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <fileVersion appName="xl" lastEdited="7" lowestEdited="7"/>
  <workbookPr defaultThemeVersion="166925"/>
  <bookViews><workbookView xWindow="0" yWindow="0" windowWidth="20140" windowHeight="10960"/></bookViews>
  <sheets>{sheets_xml}</sheets>
  <calcPr calcId="191029"/>
</workbook>'''

    with open(os.path.join(dst, "xl", "workbook.xml"), "w", encoding="utf-8") as f:
        f.write(workbook_xml)

    # Build workbook.xml.rels
    rels_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
  <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml"/>
'''
    for i in range(2, len(sheets_data) + 1):
        rels_xml += f'  <Relationship Id="rId{i+2}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet{i}.xml"/>\n'
    rels_xml += '</Relationships>'

    with open(os.path.join(dst, "xl", "_rels", "workbook.xml.rels"), "w", encoding="utf-8") as f:
        f.write(rels_xml)

    # Build [Content_Types].xml
    ct_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
  <Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>
  <Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/>
'''
    for i in range(1, len(sheets_data) + 1):
        ct_xml += f'  <Override PartName="/xl/worksheets/sheet{i}.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>\n'
    ct_xml += '</Types>'

    with open(os.path.join(dst, "[Content_Types].xml"), "w", encoding="utf-8") as f:
        f.write(ct_xml)

    # Build each sheet
    for i, (name, rows, col_widths) in enumerate(sheets_data, 1):
        sheet_xml = build_form_sheet(rows, name, col_widths)
        sheet_path = os.path.join(dst, "xl", "worksheets", f"sheet{i}.xml")
        with open(sheet_path, "w", encoding="utf-8") as f:
            f.write(sheet_xml)

    # Pack the xlsx
    output_path = os.path.join(OUTPUT_DIR, "表单_空表.xlsx")
    with zipfile.ZipFile(output_path, 'w', zipfile.ZIP_DEFLATED) as zf:
        for root, dirs, files in os.walk(dst):
            for file in files:
                file_path = os.path.join(root, file)
                arc_name = os.path.relpath(file_path, dst)
                zf.write(file_path, arc_name)

    print(f"Created: {output_path}")

if __name__ == "__main__":
    create_empty_forms()
