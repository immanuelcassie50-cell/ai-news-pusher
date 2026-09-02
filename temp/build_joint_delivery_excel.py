#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Build 6 Excel tool forms for Joint Delivery Mode Design course.
输出路径: D:\新课开发\变革管理\15-联合交付模式设计：技术公司与管理咨询公司怎么配合\完整课程包\06-工具表单\
"""

import os
import shutil
import zipfile

TEMPLATE_DIR = "C:/Users/Administrator/.claude/skills/Excel表格处理/templates/minimal_xlsx"
OUTPUT_DIR = "D:/新课开发/变革管理/15-联合交付模式设计：技术公司与管理咨询公司怎么配合/完整课程包/06-工具表单"

# Colors in AARRGGBB format (AA=00 for opaque)
WINE_RED = "00800020"   # Header background #800020
NAVY_BLUE = "001F3864"  # Dark navy
CORPORATE_BLUE = "002F5496"  # Corporate blue
LIGHT_BLUE = "00D6E4F7"  # Light blue fill
CREAM = "00F5F5DC"       # Cream interior
WHITE = "00FFFFFF"
GRAY = "00F2F2F2"
DARK_GRAY = "00D9D9D9"
ORANGE = "00ED7D31"  # Orange accent
GREEN = "0070C0"  # Green for completed

def copy_template(work_dir):
    if os.path.exists(work_dir):
        shutil.rmtree(work_dir)
    shutil.copytree(TEMPLATE_DIR, work_dir)

def create_styles_xml(work_dir):
    styles_path = os.path.join(work_dir, "xl", "styles.xml")
    styles_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <fonts>
    <font><sz val="11"/><name val="Calibri"/></font>
    <font><sz val="11"/><name val="Calibri"/><b/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="000000FF"/></font>
    <font><sz val="11"/><name val="Calibri"/><b/><color rgb="00FFFFFF"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="000000FF"/></font>
    <font><sz val="11"/><name val="Calibri"/><b/><color rgb="001F3864"/></font>
    <font><sz val="10"/><name val="Calibri"/></font>
  </fonts>
  <fills>
    <fill><patternFill patternType="none"/></fill>
    <fill><patternFill patternType="gray125"/></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="00800020"/><bgColor indexed="64"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="00F5F5DC"/><bgColor indexed="64"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="001F3864"/><bgColor indexed="64"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="002F5496"/><bgColor indexed="64"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="00D6E4F7"/><bgColor indexed="64"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="00FFFFFF"/><bgColor indexed="64"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="00F2F2F2"/><bgColor indexed="64"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="00ED7D31"/><bgColor indexed="64"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="00E2EFDA"/><bgColor indexed="64"/></patternFill></fill>
  </fills>
  <borders>
    <border><left/><right/><top/><bottom/></border>
    <border>
      <left style="thin"><color rgb="00000000"/></left>
      <right style="thin"><color rgb="00000000"/></right>
      <top style="thin"><color rgb="00000000"/></top>
      <bottom style="thin"><color rgb="00000000"/></bottom>
    </border>
    <border>
      <left style="medium"><color rgb="00000000"/></left>
      <right style="medium"><color rgb="00000000"/></right>
      <top style="medium"><color rgb="00000000"/></top>
      <bottom style="medium"><color rgb="00000000"/></bottom>
    </border>
    <border>
      <left style="thin"><color rgb="00000000"/></left>
      <right style="thin"><color rgb="00000000"/></right>
      <top style="thin"><color rgb="00000000"/></top>
      <bottom style="thin"><color rgb="00000000"/></bottom>
    </border>
  </borders>
  <cellStyleXfs><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>
  <cellXfs>
    <xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/>
    <xf numFmtId="0" fontId="3" fillId="2" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1"/>
    <xf numFmtId="0" fontId="0" fillId="3" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1"/>
    <xf numFmtId="0" fontId="1" fillId="3" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1"/>
    <xf numFmtId="0" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1"/>
    <xf numFmtId="0" fontId="1" fillId="3" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1"/>
    <xf numFmtId="0" fontId="5" fillId="4" borderId="2" xfId="0" applyFont="1" applyFill="1" applyBorder="1"/>
    <xf numFmtId="0" fontId="5" fillId="5" borderId="2" xfId="0" applyFont="1" applyFill="1" applyBorder="1"/>
    <xf numFmtId="0" fontId="1" fillId="6" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1"/>
    <xf numFmtId="0" fontId="0" fillId="7" borderId="3" xfId="0" applyFont="1" applyFill="1" applyBorder="1"/>
    <xf numFmtId="0" fontId="0" fillId="8" borderId="3" xfId="0" applyFont="1" applyFill="1" applyBorder="1"/>
    <xf numFmtId="0" fontId="1" fillId="9" borderId="3" xfId="0" applyFont="1" applyFill="1" applyBorder="1"/>
    <xf numFmtId="0" fontId="6" fillId="5" borderId="2" xfId="0" applyFont="1" applyFill="1" applyBorder="1"/>
    <xf numFmtId="0" fontId="1" fillId="10" borderId="3" xfId="0" applyFont="1" applyFill="1" applyBorder="1"/>
    <xf numFmtId="0" fontId="1" fillId="4" borderId="2" xfId="0" applyFont="1" applyFill="1" applyBorder="1"/>
    <xf numFmtId="0" fontId="6" fillId="6" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1"/>
    <xf numFmtId="0" fontId="1" fillId="11" borderId="3" xfId="0" applyFont="1" applyFill="1" applyBorder="1"/>
  </cellXfs>
</styleSheet>'''
    with open(styles_path, 'w', encoding='utf-8') as f:
        f.write(styles_xml)

def create_shared_strings_xml(work_dir, strings):
    shared_path = os.path.join(work_dir, "xl", "sharedStrings.xml")
    items = []
    for s in strings:
        s = s.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;')
        items.append('  <si><t>' + s + '</t></si>')
    content = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="''' + str(len(strings)) + '''" uniqueCount="''' + str(len(strings)) + '''">
''' + '\n'.join(items) + '''
</sst>'''
    with open(shared_path, 'w', encoding='utf-8') as f:
        f.write(content)
    return {s: i for i, s in enumerate(strings)}

def update_workbook_xml(work_dir, sheets_info):
    workbook_path = os.path.join(work_dir, "xl", "workbook.xml")
    sheets_xml = []
    for i, (name, sheet_id, rid) in enumerate(sheets_info):
        name = name.replace('&', '&amp;')
        sheets_xml.append('    <sheet name="' + name + '" sheetId="' + str(sheet_id) + '" r:id="rId' + str(rid) + '"/>')
    content = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <fileVersion appName="xl" lastEdited="7" lowestEdited="7"/>
  <workbookPr defaultThemeVersion="166925"/>
  <bookViews><workbookView xWindow="0" yWindow="0" windowWidth="20140" windowHeight="10960"/></bookViews>
  <sheets>
''' + '\n'.join(sheets_xml) + '''
  </sheets>
  <calcPr calcId="191029"/>
</workbook>'''
    with open(workbook_path, 'w', encoding='utf-8') as f:
        f.write(content)

def update_workbook_rels(work_dir, sheets_info):
    rels_path = os.path.join(work_dir, "xl", "_rels", "workbook.xml.rels")
    rels = [
        '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>',
        '<Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>',
        '<Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml"/>'
    ]
    for i, (_, _, rid) in enumerate(sheets_info[1:], 1):
        rels.append('<Relationship Id="rId' + str(rid) + '" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet' + str(i+1) + '.xml"/>')
    content = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
''' + '\n'.join(rels) + '''
</Relationships>'''
    with open(rels_path, 'w', encoding='utf-8') as f:
        f.write(content)

def update_content_types(work_dir, num_sheets):
    ct_path = os.path.join(work_dir, "[Content_Types].xml")
    overrides = [
        '<Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>',
        '<Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>',
        '<Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/>'
    ]
    for i in range(1, num_sheets + 1):
        overrides.append('<Override PartName="/xl/worksheets/sheet' + str(i) + '.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>')
    content = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
''' + '\n'.join(overrides) + '''
</Types>'''
    with open(ct_path, 'w', encoding='utf-8') as f:
        f.write(content)

def pack_xlsx(work_dir, output_path):
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    with zipfile.ZipFile(output_path, 'w', zipfile.ZIP_DEFLATED) as zf:
        for root, dirs, files in os.walk(work_dir):
            for file in files:
                file_path = os.path.join(root, file)
                arcname = os.path.relpath(file_path, work_dir)
                zf.write(file_path, arcname)

def make_sheet_xml(rows, freeze=True, col_widths=None):
    rows_xml = []
    for row_idx, row_data in enumerate(rows, 1):
        cells = []
        for cell_data in row_data:
            col, value, style = cell_data[:3]
            if isinstance(value, str):
                cells.append('<c r="' + col + str(row_idx) + '" t="s" s="' + str(style) + '"><v>' + value + '</v></c>')
            else:
                cells.append('<c r="' + col + str(row_idx) + '" s="' + str(style) + '"><v>' + str(value) + '</v></c>')
        if cells:
            rows_xml.append('    <row r="' + str(row_idx) + '">' + ''.join(cells) + '</row>')

    freeze_pane = '<pane ySplit="1" topLeftCell="A2" activePane="bottomLeft" state="frozen"/>' if freeze and rows else ''

    cols_xml = ""
    if col_widths:
        cols = []
        for min_col, max_col, width in col_widths:
            cols.append('<col min="' + str(min_col) + '" max="' + str(max_col) + '" width="' + str(width) + '" customWidth="1"/>')
        cols_xml = "  <cols>\n    " + '\n    '.join(cols) + "\n  </cols>\n"

    return '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView workbookViewId="0">
      ''' + freeze_pane + '''
    </sheetView>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="18"/>
  ''' + cols_xml + '''  <sheetData>
''' + '\n'.join(rows_xml) + '''
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75"/>
</worksheet>'''

def build_form(output_path, strings, sheets_data, col_widths=None):
    work_dir = "/tmp/xlsx_build"
    copy_template(work_dir)
    create_styles_xml(work_dir)
    str_mapping = create_shared_strings_xml(work_dir, strings)

    updated_sheets = []
    for sheet_name, rows in sheets_data:
        updated_rows = []
        for row in rows:
            updated_row = []
            for cell in row:
                col, value, style = cell[:3]
                if isinstance(value, str) and value in str_mapping:
                    updated_row.append((col, str_mapping[value], style))
                else:
                    updated_row.append((col, value, style))
            updated_rows.append(updated_row)
        updated_sheets.append((sheet_name, updated_rows))

    widths = col_widths or [(1, 10, 15)]
    for i, (sheet_name, rows) in enumerate(updated_sheets, 1):
        sheet_path = os.path.join(work_dir, "xl", "worksheets", "sheet" + str(i) + ".xml")
        content = make_sheet_xml(rows, freeze=(i==1), col_widths=widths)
        with open(sheet_path, 'w', encoding='utf-8') as f:
            f.write(content)

    sheets_info = [(name, i+1, i+4) for i, (name, _) in enumerate(sheets_data)]
    update_workbook_xml(work_dir, sheets_info)
    update_workbook_rels(work_dir, sheets_info)
    update_content_types(work_dir, len(sheets_data))

    pack_xlsx(work_dir, output_path)
    print("Created: " + output_path)

# ===================== F01: 联合交付模式选择评估表 =====================
def build_f01():
    output = OUTPUT_DIR + "/F01 - 联合交付模式选择评估表.xlsx"
    strings = [
        "联合交付模式选择评估表",
        "Joint Delivery Mode Selection Assessment",
        "项目名称：____________________    评估日期：____________________",
        "一、项目特征评估",
        "请对以下特征进行1-5分评估（1=极低，5=极高）",
        "评估维度", "评分（1-5）", "评估说明",
        "技术复杂度", "技术实现难度、系统集成复杂度",
        "组织变革难度", "涉及部门调整、流程变化、人员角色变更",
        "客户成熟度", "客户对变革的接受度和准备度",
        "项目规模", "预算投入、参与人数、时间跨度",
        "风险程度", "不确定性、失败后果严重性",
        "利益相关方数量", "内部外部利益相关方数量和复杂度",
        "二、三种联合交付模式对比",
        "独立并行型", "主从协作型", "高度融合型",
        "模式定义", "技术公司与咨询公司独立运作，各自负责自己的交付范围，平行推进", "一方为主导，另一方为辅助，主导方协调整体进度", "双方团队深度融合，共同决策，共同承担责任",
        "适用场景", "双方业务边界清晰，客户需要分别对接的场景", "一方能力明显强于另一方，需要统一指挥", "双方能力互补，需要高度协同的复杂变革项目",
        "优势", "责任清晰，各自可控", "统一指挥，效率较高", "协同效应最大，价值整合度高",
        "劣势", "可能存在接口摩擦，信息不对称", "主从关系可能引发不满", "管理复杂度高，协调成本大",
        "评分权重", "权重", "独立并行型", "主从协作型", "高度融合型", "加权得分",
        "技术复杂度得分", "□", "□", "□", "□",
        "组织变革难度得分", "□", "□", "□", "□",
        "客户成熟度得分", "□", "□", "□", "□",
        "项目规模得分", "□", "□", "□", "□",
        "风险程度得分", "□", "□", "□", "□",
        "利益相关方数量得分", "□", "□", "□", "□",
        "综合推荐结果", "推荐模式：", "推荐理由：",
        "推荐结果与解读",
        "独立并行型", "适用于双方业务边界清晰、技术和咨询工作相对独立的场景",
        "主从协作型", "适用于一方能力明显强于另一方、需要统一协调的复杂项目",
        "高度融合型", "适用于需要深度协同、高度整合的综合性变革项目",
        "使用说明：1. 首先完成第一部分的项目特征评估；2. 根据各维度重要性设置权重（建议权重总和为100%）；3. 对每个模式在各维度进行评分；4. 系统自动计算加权得分；5. 根据得分和适用场景得出推荐结论。",
    ]

    cover_rows = [
        [("A1", "0", 6)],
        [("A2", "1", 13)],
        [("A4", "2", 3)],
    ]

    eval_rows = [
        [("A1", "3", 6)],
        [("A2", "4", 3)],
        [("A4", "5", 4), ("B4", "6", 4), ("C4", "7", 4)],
        [("A5", "8", 9), ("B5", "5", 10), ("C5", "9", 3)],
        [("A6", "10", 9), ("B6", "5", 10), ("C6", "11", 3)],
        [("A7", "12", 9), ("B7", "5", 10), ("C7", "13", 3)],
        [("A8", "14", 9), ("B8", "5", 10), ("C8", "15", 3)],
        [("A9", "16", 9), ("B9", "5", 10), ("C9", "17", 3)],
        [("A10", "18", 9), ("B10", "5", 10), ("C10", "19", 3)],
    ]

    compare_rows = [
        [("A1", "20", 6)],
        [("A3", "21", 4), ("B3", "22", 4), ("C3", "23", 4)],
        [("A4", "24", 4), ("B4", "25", 4), ("C4", "26", 4)],
        [("A5", "27", 4), ("B5", "28", 4), ("C5", "29", 4)],
        [("A6", "30", 4), ("B6", "31", 4), ("C6", "32", 4)],
        [("A7", "33", 4), ("B7", "34", 4), ("C7", "35", 4)],
    ]

    score_rows = [
        [("A1", "20", 6)],
        [("A2", "36", 4), ("B2", "37", 4), ("C2", "21", 4), ("D2", "22", 4), ("E2", "23", 4), ("F2", "38", 4)],
        [("A3", "39", 3), ("B3", "40", 11), ("C3", "□1 □2 □3 □4 □5", 9), ("D3", "□1 □2 □3 □4 □5", 9), ("E3", "□1 □2 □3 □4 □5", 9), ("F3", "", 9)],
        [("A4", "41", 3), ("B4", "40", 11), ("C4", "□1 □2 □3 □4 □5", 9), ("D4", "□1 □2 □3 □4 □5", 9), ("E4", "□1 □2 □3 □4 □5", 9), ("F4", "", 9)],
        [("A5", "42", 3), ("B5", "40", 11), ("C5", "□1 □2 □3 □4 □5", 9), ("D5", "□1 □2 □3 □4 □5", 9), ("E5", "□1 □2 □3 □4 □5", 9), ("F5", "", 9)],
        [("A6", "43", 3), ("B6", "40", 11), ("C6", "□1 □2 □3 □4 □5", 9), ("D6", "□1 □2 □3 □4 □5", 9), ("E6", "□1 □2 □3 □4 □5", 9), ("F6", "", 9)],
        [("A7", "44", 3), ("B7", "40", 11), ("C7", "□1 □2 □3 □4 □5", 9), ("D7", "□1 □2 □3 □4 □5", 9), ("E7", "□1 □2 □3 □4 □5", 9), ("F7", "", 9)],
        [("A8", "45", 3), ("B8", "40", 11), ("C8", "□1 □2 □3 □4 □5", 9), ("D8", "□1 □2 □3 □4 □5", 9), ("E8", "□1 □2 □3 □4 □5", 9), ("F8", "", 9)],
        [("A10", "46", 6)],
        [("A11", "47", 9), ("B11", "", 3)],
        [("A12", "48", 9), ("B12", "", 3)],
    ]

    result_rows = [
        [("A1", "49", 6)],
        [("A3", "50", 4), ("B3", "51", 4), ("C3", "52", 4)],
        [("A4", "53", 9), ("B4", "54", 3), ("C4", "55", 3)],
        [("A5", "56", 9), ("B5", "57", 3), ("C5", "58", 3)],
        [("A6", "59", 9), ("B6", "60", 3), ("C6", "61", 3)],
        [("A8", "62", 6)],
    ]

    sheets_data = [
        ("封面", cover_rows),
        ("项目特征评估", eval_rows),
        ("模式对比", compare_rows),
        ("评分与推荐", score_rows),
        ("结果与解读", result_rows),
    ]

    build_form(output, strings, sheets_data, col_widths=[(1,1,22),(2,2,18),(3,3,18),(4,4,18),(5,5,18),(6,6,18)])

# ===================== F02: 接口设计规划表 =====================
def build_f02():
    output = OUTPUT_DIR + "/F02 - 接口设计规划表.xlsx"
    strings = [
        "接口设计规划表",
        "Interface Design Planning Matrix",
        "项目名称：____________________    规划日期：____________________",
        "一、里程碑节点设计",
        "里程碑编号", "里程碑名称", "计划完成日期", "责任方", "交接条件", "状态",
        "M1", "", "", "□技术公司 □咨询公司 □联合", "", "□待完成 □进行中 □已完成",
        "M2", "", "", "□技术公司 □咨询公司 □联合", "", "□待完成 □进行中 □已完成",
        "M3", "", "", "□技术公司 □咨询公司 □联合", "", "□待完成 □进行中 □已完成",
        "M4", "", "", "□技术公司 □咨询公司 □联合", "", "□待完成 □进行中 □已完成",
        "M5", "", "", "□技术公司 □咨询公司 □联合", "", "□待完成 □进行中 □已完成",
        "M6", "", "", "□技术公司 □咨询公司 □联合", "", "□待完成 □进行中 □已完成",
        "二、交付物定义表",
        "交付物编号", "交付物名称", "交付内容描述", "格式要求", "提交方", "接收方", "截止日期",
        "D1", "", "", "", "□技术公司 □咨询公司", "□技术公司 □咨询公司", "",
        "D2", "", "", "", "□技术公司 □咨询公司", "□技术公司 □咨询公司", "",
        "D3", "", "", "", "□技术公司 □咨询公司", "□技术公司 □咨询公司", "",
        "D4", "", "", "", "□技术公司 □咨询公司", "□技术公司 □咨询公司", "",
        "D5", "", "", "", "□技术公司 □咨询公司", "□技术公司 □咨询公司", "",
        "三、验收标准表",
        "验收标准编号", "验收标准描述", "验收方式", "合格条件", "验收责任人", "验收日期",
        "A1", "", "", "□文件审核 □现场验收 □演示验收", "", "",
        "A2", "", "", "□文件审核 □现场验收 □演示验收", "", "",
        "A3", "", "", "□文件审核 □现场验收 □演示验收", "", "",
        "A4", "", "", "□文件审核 □现场验收 □演示验收", "", "",
        "A5", "", "", "□文件审核 □现场验收 □演示验收", "", "",
        "四、时间节点规划甘特图",
        "任务名称", "责任方", "Q1", "Q2", "Q3", "Q4", "备注",
        "技术公司任务", "□技术公司", "", "", "", "", "",
        "咨询公司任务", "□咨询公司", "", "", "", "", "",
        "联合任务", "□联合", "", "", "", "", "",
        "里程碑节点", "", "", "", "", "", "",
    ]

    cover_rows = [
        [("A1", "0", 6)],
        [("A2", "1", 13)],
        [("A4", "2", 3)],
    ]

    milestone_rows = [
        [("A1", "3", 6)],
        [("A2", "4", 4), ("B2", "5", 4), ("C2", "6", 4), ("D2", "7", 4), ("E2", "8", 4), ("F2", "9", 4)],
        [("A3", "10", 9), ("B3", "", 9), ("C3", "", 9), ("D3", "11", 9), ("E3", "", 9), ("F3", "12", 9)],
        [("A4", "13", 9), ("B4", "", 9), ("C4", "", 9), ("D4", "11", 9), ("E4", "", 9), ("F4", "12", 9)],
        [("A5", "14", 9), ("B5", "", 9), ("C5", "", 9), ("D5", "11", 9), ("E5", "", 9), ("F5", "12", 9)],
        [("A6", "15", 9), ("B6", "", 9), ("C6", "", 9), ("D6", "11", 9), ("E6", "", 9), ("F6", "12", 9)],
        [("A7", "16", 9), ("B7", "", 9), ("C7", "", 9), ("D7", "11", 9), ("E7", "", 9), ("F7", "12", 9)],
        [("A8", "17", 9), ("B8", "", 9), ("C8", "", 9), ("D8", "11", 9), ("E8", "", 9), ("F8", "12", 9)],
    ]

    deliverable_rows = [
        [("A1", "18", 6)],
        [("A2", "19", 4), ("B2", "20", 4), ("C2", "21", 4), ("D2", "22", 4), ("E2", "23", 4), ("F2", "24", 4), ("G2", "25", 4)],
        [("A3", "26", 9), ("B3", "", 9), ("C3", "", 9), ("D3", "", 9), ("E3", "27", 9), ("F3", "28", 9), ("G3", "", 9)],
        [("A4", "29", 9), ("B4", "", 9), ("C4", "", 9), ("D4", "", 9), ("E4", "27", 9), ("F4", "28", 9), ("G4", "", 9)],
        [("A5", "30", 9), ("B5", "", 9), ("C5", "", 9), ("D5", "", 9), ("E5", "27", 9), ("F5", "28", 9), ("G5", "", 9)],
        [("A6", "31", 9), ("B6", "", 9), ("C6", "", 9), ("D6", "", 9), ("E6", "27", 9), ("F6", "28", 9), ("G6", "", 9)],
        [("A7", "32", 9), ("B7", "", 9), ("C7", "", 9), ("D7", "", 9), ("E7", "27", 9), ("F7", "28", 9), ("G7", "", 9)],
    ]

    acceptance_rows = [
        [("A1", "33", 6)],
        [("A2", "34", 4), ("B2", "35", 4), ("C2", "36", 4), ("D2", "37", 4), ("E2", "38", 4), ("F2", "39", 4)],
        [("A3", "40", 9), ("B3", "", 9), ("C3", "41", 9), ("D3", "", 9), ("E3", "", 9), ("F3", "", 9)],
        [("A4", "42", 9), ("B4", "", 9), ("C4", "41", 9), ("D4", "", 9), ("E4", "", 9), ("F4", "", 9)],
        [("A5", "43", 9), ("B5", "", 9), ("C5", "41", 9), ("D5", "", 9), ("E5", "", 9), ("F5", "", 9)],
        [("A6", "44", 9), ("B6", "", 9), ("C6", "41", 9), ("D6", "", 9), ("E6", "", 9), ("F6", "", 9)],
        [("A7", "45", 9), ("B7", "", 9), ("C7", "41", 9), ("D7", "", 9), ("E7", "", 9), ("F7", "", 9)],
    ]

    gantt_rows = [
        [("A1", "46", 6)],
        [("A2", "47", 4), ("B2", "48", 4), ("C2", "Q1", 4), ("D2", "Q2", 4), ("E2", "Q3", 4), ("F2", "Q4", 4), ("G2", "49", 4)],
        [("A3", "50", 9), ("B3", "51", 9), ("C3", "", 9), ("D3", "", 9), ("E3", "", 9), ("F3", "", 9), ("G3", "", 9)],
        [("A4", "52", 9), ("B4", "53", 9), ("C4", "", 9), ("D4", "", 9), ("E4", "", 9), ("F4", "", 9), ("G4", "", 9)],
        [("A5", "54", 9), ("B5", "55", 9), ("C5", "", 9), ("D5", "", 9), ("E5", "", 9), ("F5", "", 9), ("G5", "", 9)],
        [("A6", "56", 9), ("B6", "", 9), ("C6", "", 9), ("D6", "", 9), ("E6", "", 9), ("F6", "", 9), ("G6", "", 9)],
    ]

    sheets_data = [
        ("封面", cover_rows),
        ("里程碑节点", milestone_rows),
        ("交付物定义", deliverable_rows),
        ("验收标准", acceptance_rows),
        ("甘特图规划", gantt_rows),
    ]

    build_form(output, strings, sheets_data, col_widths=[(1,1,15),(2,2,20),(3,3,15),(4,4,15),(5,5,15),(6,6,15),(7,7,15)])

# ===================== F03: 信息同步机制表 =====================
def build_f03():
    output = OUTPUT_DIR + "/F03 - 信息同步机制表.xlsx"
    strings = [
        "信息同步机制表",
        "Information Synchronization Mechanism Matrix",
        "项目名称：____________________    规划日期：____________________",
        "一、同步方式清单",
        "同步方式", "频率", "参与方", "主持人", "主要内容", "输出物", "备注",
        "每日站会", "每天", "双方项目团队", "轮值", "进度更新、问题识别", "站会纪要", "",
        "周例会", "每周", "双方项目经理及以上", "双方轮流", "本周进展、下周计划、风险预警", "会议纪要", "",
        "双周报", "每两周", "双方管理层", "主导方", "阶段性总结、里程碑评估", "双周报", "",
        "即时通讯群", "实时", "双方核心团队", "NA", "日常沟通、临时问题", "聊天记录", "",
        "月度评审会", "每月", "双方高层+客户", "主导方", "整体进度、重大决策", "会议纪要+决策记录", "",
        "专项沟通会", "按需", "相关方", "问题发起方", "专项议题讨论", "会议纪要", "",
        "二、同步内容定义",
        "信息类型", "内容描述", "更新频率", "更新方式", "接收人", "保密级别",
        "进度信息", "各模块完成情况、里程碑进度", "每周", "周报+周会", "双方项目经理", "内部",
        "风险信息", "已识别风险、风险状态变化", "实时", "即时通讯+周会", "双方项目经理", "内部",
        "变更信息", "范围变更、进度变更、资源变更", "实时", "正式书面通知", "双方管理层", "机密",
        "技术信息", "技术方案、架构决策、技术债务", "每月", "技术评审会", "双方技术负责人", "内部",
        "商务信息", "合同条款、付款进度、争议事项", "每月", "高层沟通", "双方高层", "机密",
        "客户反馈", "客户意见、客户满意度、投诉", "实时", "即时通讯+正式报告", "双方项目经理", "内部",
        "三、责任人分配表",
        "角色", "姓名", "职责描述", "联系方式", "backup联系人",
        "技术公司项目经理", "", "", "", "",
        "咨询公司项目经理", "", "", "", "",
        "技术公司接口人", "", "", "", "",
        "咨询公司接口人", "", "", "", "",
        "联合项目总监", "", "", "", "",
        "四、频率规划",
        "同步类型", "频率", "时间", "时长", "方式", "必须参加", "可选参加",
        "每日站会", "每天", "", "15分钟", "线上/线下", "双方核心团队", "项目经理",
        "周例会", "每周", "", "1小时", "线上/线下", "双方项目经理", "双方总监",
        "月度评审", "每月", "", "2小时", "线下优先", "双方高层+PM", "专项负责人",
    ]

    cover_rows = [
        [("A1", "0", 6)],
        [("A2", "1", 13)],
        [("A4", "2", 3)],
    ]

    sync_methods_rows = [
        [("A1", "3", 6)],
        [("A2", "4", 4), ("B2", "5", 4), ("C2", "6", 4), ("D2", "7", 4), ("E2", "8", 4), ("F2", "9", 4), ("G2", "10", 4)],
        [("A3", "11", 9), ("B3", "12", 9), ("C3", "13", 9), ("D3", "14", 9), ("E3", "15", 9), ("F3", "16", 9), ("G3", "", 9)],
        [("A4", "17", 9), ("B4", "18", 9), ("C4", "19", 9), ("D4", "20", 9), ("E4", "21", 9), ("F4", "22", 9), ("G4", "", 9)],
        [("A5", "23", 9), ("B5", "24", 9), ("C5", "25", 9), ("D5", "26", 9), ("E5", "27", 9), ("F5", "28", 9), ("G5", "", 9)],
        [("A6", "29", 9), ("B6", "30", 9), ("C6", "31", 9), ("D6", "32", 9), ("E6", "33", 9), ("F6", "34", 9), ("G6", "", 9)],
        [("A7", "35", 9), ("B7", "36", 9), ("C7", "37", 9), ("D7", "38", 9), ("E7", "39", 9), ("F7", "40", 9), ("G7", "", 9)],
    ]

    sync_content_rows = [
        [("A1", "41", 6)],
        [("A2", "42", 4), ("B2", "43", 4), ("C2", "44", 4), ("D2", "45", 4), ("E2", "46", 4), ("F2", "47", 4)],
        [("A3", "48", 9), ("B3", "49", 9), ("C3", "50", 9), ("D3", "51", 9), ("E3", "52", 9), ("F3", "53", 9)],
        [("A4", "54", 9), ("B4", "55", 9), ("C4", "56", 9), ("D4", "57", 9), ("E4", "58", 9), ("F4", "59", 9)],
        [("A5", "60", 9), ("B5", "61", 9), ("C5", "62", 9), ("D5", "63", 9), ("E5", "64", 9), ("F5", "65", 9)],
        [("A6", "66", 9), ("B6", "67", 9), ("C6", "68", 9), ("D6", "69", 9), ("E6", "70", 9), ("F6", "71", 9)],
        [("A7", "72", 9), ("B7", "73", 9), ("C7", "74", 9), ("D7", "75", 9), ("E7", "76", 9), ("F7", "77", 9)],
    ]

    owner_rows = [
        [("A1", "78", 6)],
        [("A2", "79", 4), ("B2", "80", 4), ("C2", "81", 4), ("D2", "82", 4), ("E2", "83", 4)],
        [("A3", "84", 9), ("B3", "", 9), ("C3", "", 9), ("D3", "", 9), ("E3", "", 9)],
        [("A4", "85", 9), ("B4", "", 9), ("C4", "", 9), ("D4", "", 9), ("E4", "", 9)],
        [("A5", "86", 9), ("B5", "", 9), ("C5", "", 9), ("D5", "", 9), ("E5", "", 9)],
        [("A6", "87", 9), ("B6", "", 9), ("C6", "", 9), ("D6", "", 9), ("E6", "", 9)],
        [("A7", "88", 9), ("B7", "", 9), ("C7", "", 9), ("D7", "", 9), ("E7", "", 9)],
    ]

    frequency_rows = [
        [("A1", "89", 6)],
        [("A2", "90", 4), ("B2", "91", 4), ("C2", "92", 4), ("D2", "93", 4), ("E2", "94", 4), ("F2", "95", 4), ("G2", "96", 4)],
        [("A3", "97", 9), ("B3", "98", 9), ("C3", "", 9), ("D3", "99", 9), ("E3", "100", 9), ("F3", "101", 9), ("G3", "102", 9)],
        [("A4", "103", 9), ("B4", "104", 9), ("C4", "", 9), ("D4", "105", 9), ("E4", "106", 9), ("F4", "107", 9), ("G4", "108", 9)],
        [("A5", "109", 9), ("B5", "110", 9), ("C5", "", 9), ("D5", "111", 9), ("E5", "112", 9), ("F5", "113", 9), ("G5", "114", 9)],
    ]

    sheets_data = [
        ("封面", cover_rows),
        ("同步方式清单", sync_methods_rows),
        ("同步内容定义", sync_content_rows),
        ("责任人分配", owner_rows),
        ("频率规划", frequency_rows),
    ]

    build_form(output, strings, sheets_data, col_widths=[(1,1,18),(2,2,15),(3,3,15),(4,4,15),(5,5,15),(6,6,15),(7,7,12)])

# ===================== F04: 话术统一对照表 =====================
def build_f04():
    output = OUTPUT_DIR + "/F04 - 话术统一对照表.xlsx"
    strings = [
        "话术统一对照表",
        "Unified Language Reference Matrix",
        "项目名称：____________________    规划日期：____________________",
        "一、术语对照表",
        "序号", "场景", "技术术语", "管理术语", "客户语言", "统一说法",
        "1", "", "", "", "", "",
        "2", "", "", "", "", "",
        "3", "", "", "", "", "",
        "4", "", "", "", "", "",
        "5", "", "", "", "", "",
        "6", "", "", "", "", "",
        "7", "", "", "", "", "",
        "8", "", "", "", "", "",
        "二、场景话术模板",
        "场景类型", "场景描述", "推荐话术模板", "注意事项",
        "客户需求沟通", "向客户解释技术方案或变革价值", "结合客户语言风格，使用类比和业务价值表述", "避免技术术语，使用客户熟悉的话语体系",
        "内部技术讨论", "技术团队内部讨论技术实现", "使用标准技术术语，确保准确性", "不需要翻译成管理语言",
        "跨团队协作沟通", "技术团队与咨询团队对接", "明确交接节点和交付标准", "使用双方约定的统一术语",
        "客户汇报演示", "向客户管理层汇报进展", "强调业务价值和成果，使用管理语言", "提前演练，确保术语一致",
        "问题升级沟通", "问题需要升级至管理层", "客观描述问题影响，提供建议方案", "避免相互指责，以解决问题为导向",
        "变更请求沟通", "客户提出范围变更", "评估变更影响，说明调整方案和代价", "记录变更请求，形成书面确认",
        "三、角色分工表",
        "角色", "主要职责", "对外发言范围", "对内发言范围", "话术审核人",
        "技术公司项目经理", "技术方案交付管理", "技术方案、进度、问题", "技术细节、团队协作", "",
        "咨询公司项目经理", "变革管理推进", "变革价值、推进计划、风险", "管理方法论、团队协作", "",
        "联合项目总监", "整体协调和决策", "战略层面、重大决策", "资源调配、争议裁决", "",
        "技术接口人", "技术信息传递", "技术术语解释", "技术方案说明", "",
        "管理接口人", "管理信息传递", "管理价值阐述", "变革进展说明", "",
        "四、禁忌词汇表",
        "类别", "禁用词汇/表达", "替代方案", "原因说明",
        "技术类", "系统架构", "整体方案设计", "客户可能不理解",
        "技术类", "API接口", "数据连接方式", "更易理解的表达",
        "管理类", "组织变革", "团队调整/工作方式优化", "减少抵触情绪",
        "管理类", "KPI", "目标/衡量指标", "避免压力感",
        "态度类", "这不归我们管", "这个需要和XX确认", "避免推诿印象",
        "态度类", "做不到", "挑战很大，我们需要...", "保持积极态度",
    ]

    cover_rows = [
        [("A1", "0", 6)],
        [("A2", "1", 13)],
        [("A4", "2", 3)],
    ]

    term_mapping_rows = [
        [("A1", "3", 6)],
        [("A2", "4", 4), ("B2", "5", 4), ("C2", "6", 4), ("D2", "7", 4), ("E2", "8", 4), ("F2", "9", 4)],
        [("A3", "10", 9), ("B3", "", 9), ("C3", "", 9), ("D3", "", 9), ("E3", "", 9), ("F3", "", 9)],
        [("A4", "11", 9), ("B4", "", 9), ("C4", "", 9), ("D4", "", 9), ("E4", "", 9), ("F4", "", 9)],
        [("A5", "12", 9), ("B5", "", 9), ("C5", "", 9), ("D5", "", 9), ("E5", "", 9), ("F5", "", 9)],
        [("A6", "13", 9), ("B6", "", 9), ("C6", "", 9), ("D6", "", 9), ("E6", "", 9), ("F6", "", 9)],
        [("A7", "14", 9), ("B7", "", 9), ("C7", "", 9), ("D7", "", 9), ("E7", "", 9), ("F7", "", 9)],
        [("A8", "15", 9), ("B8", "", 9), ("C8", "", 9), ("D8", "", 9), ("E8", "", 9), ("F8", "", 9)],
        [("A9", "16", 9), ("B9", "", 9), ("C9", "", 9), ("D9", "", 9), ("E9", "", 9), ("F9", "", 9)],
        [("A10", "17", 9), ("B10", "", 9), ("C10", "", 9), ("D10", "", 9), ("E10", "", 9), ("F10", "", 9)],
    ]

    script_template_rows = [
        [("A1", "18", 6)],
        [("A2", "19", 4), ("B2", "20", 4), ("C2", "21", 4), ("D2", "22", 4)],
        [("A3", "23", 9), ("B3", "24", 9), ("C3", "25", 9), ("D3", "26", 9)],
        [("A4", "27", 9), ("B4", "28", 9), ("C4", "29", 9), ("D4", "30", 9)],
        [("A5", "31", 9), ("B5", "32", 9), ("C5", "33", 9), ("D5", "34", 9)],
        [("A6", "35", 9), ("B6", "36", 9), ("C6", "37", 9), ("D6", "38", 9)],
        [("A7", "39", 9), ("B7", "40", 9), ("C7", "41", 9), ("D7", "42", 9)],
        [("A8", "43", 9), ("B8", "44", 9), ("C8", "45", 9), ("D8", "46", 9)],
    ]

    role_rows = [
        [("A1", "47", 6)],
        [("A2", "48", 4), ("B2", "49", 4), ("C2", "50", 4), ("D2", "51", 4), ("E2", "52", 4)],
        [("A3", "53", 9), ("B3", "", 9), ("C3", "", 9), ("D3", "", 9), ("E3", "", 9)],
        [("A4", "54", 9), ("B4", "", 9), ("C4", "", 9), ("D4", "", 9), ("E4", "", 9)],
        [("A5", "55", 9), ("B5", "", 9), ("C5", "", 9), ("D5", "", 9), ("E5", "", 9)],
        [("A6", "56", 9), ("B6", "", 9), ("C6", "", 9), ("D6", "", 9), ("E6", "", 9)],
        [("A7", "57", 9), ("B7", "", 9), ("C7", "", 9), ("D7", "", 9), ("E7", "", 9)],
    ]

    taboo_rows = [
        [("A1", "58", 6)],
        [("A2", "59", 4), ("B2", "60", 4), ("C2", "61", 4), ("D2", "62", 4)],
        [("A3", "63", 9), ("B3", "64", 9), ("C3", "65", 9), ("D3", "66", 9)],
        [("A4", "67", 9), ("B4", "68", 9), ("C4", "69", 9), ("D4", "70", 9)],
        [("A5", "71", 9), ("B5", "72", 9), ("C5", "73", 9), ("D5", "74", 9)],
        [("A6", "75", 9), ("B6", "76", 9), ("C6", "77", 9), ("D6", "78", 9)],
        [("A7", "79", 9), ("B7", "80", 9), ("C7", "81", 9), ("D7", "82", 9)],
    ]

    sheets_data = [
        ("封面", cover_rows),
        ("术语对照表", term_mapping_rows),
        ("话术模板", script_template_rows),
        ("角色分工", role_rows),
        ("禁忌词汇", taboo_rows),
    ]

    build_form(output, strings, sheets_data, col_widths=[(1,1,12),(2,2,20),(3,3,18),(4,4,18),(5,5,18),(6,6,20)])

# ===================== F05: 利益分配协议模板 =====================
def build_f05():
    output = OUTPUT_DIR + "/F05 - 利益分配协议模板.xlsx"
    strings = [
        "利益分配协议模板",
        "Profit Sharing Agreement Template",
        "项目名称：____________________    签订日期：____________________",
        "一、分配原则设定",
        "原则类型", "原则描述", "适用场景", "优先级",
        "投入比例原则", "按双方实际投入资源比例分配", "资源投入明确的阶段", "高",
        "价值贡献原则", "按对项目价值贡献大小分配", "价值贡献可量化的阶段", "高",
        "风险共担原则", "按风险承担比例分配", "高风险项目", "中",
        "协商约定原则", "按双方协商约定比例分配", "其他情况", "基础",
        "二、常见分配比例参考",
        "模式类型", "技术公司比例", "咨询公司比例", "说明",
        "技术主导型", "60-70%", "30-40%", "技术复杂度高，咨询为辅",
        "咨询主导型", "30-40%", "60-70%", "管理变革为主，技术为辅",
        "高度融合型", "45-55%", "45-55%", "双方深度协作，难分主次",
        "独立并行型", "各自100%", "各自100%", "各自独立交付，按合同分别结算",
        "三、收益分配明细",
        "收益类型", "总金额", "技术公司份额", "咨询公司份额", "计算依据", "备注",
        "项目收入", "", "", "", "", "",
        "后续维护收入", "", "", "", "", "",
        "增值服务收入", "", "", "", "", "",
        "客户介绍佣金", "", "", "", "", "",
        "其他收益", "", "", "", "", "",
        "合计", "", "", "", "=SUM(B4:B8)", "=SUM(C4:C8)", "=SUM(D4:D8)",
        "四、风险承担约定",
        "风险类型", "风险描述", "预防措施", "发生后的责任划分", "承担比例",
        "技术风险", "技术方案不可行或延期", "技术方案充分论证", "按责任比例承担", "技术公司70%/咨询公司30%",
        "管理风险", "变革推进困难或延期", "充分沟通和预期管理", "按责任比例承担", "技术公司30%/咨询公司70%",
        "市场风险", "市场环境变化影响项目", "合同中约定市场风险条款", "共同承担", "双方各50%",
        "客户风险", "客户付款能力或意愿问题", "客户信用评估和付款保障", "主要由引入方承担", "引入方70%/另一方30%",
        "五、争议解决机制",
        "争议类型", "解决方式", "第一负责人", "第二负责人", "时限要求",
        "商务争议", "协商→调解→仲裁", "双方项目经理", "双方高层", "30天内",
        "技术争议", "技术专家评审→协商", "技术接口人", "技术公司项目经理", "15天内",
        "管理争议", "管理专家评审→协商", "管理接口人", "咨询公司项目经理", "15天内",
        "合同争议", "协商→法律仲裁", "法务/高层", "外部律师", "60天内",
        "六、退出与终止条款",
        "条款类型", "触发条件", "通知期限", "补偿安排", "后续事宜处理",
        "主动退出", "一方严重违约", "30天书面通知", "按实际完成工作比例结算", "已完成工作归属、客户关系处理",
        "被动退出", "一方丧失合作能力", "即时通知", "按合同条款执行", "项目交接、客户沟通",
        "协商终止", "双方协商一致", "60天书面通知", "按约定补偿", "资源释放、文档交接",
    ]

    cover_rows = [
        [("A1", "0", 6)],
        [("A2", "1", 13)],
        [("A4", "2", 3)],
    ]

    principle_rows = [
        [("A1", "3", 6)],
        [("A2", "4", 4), ("B2", "5", 4), ("C2", "6", 4), ("D2", "7", 4)],
        [("A3", "8", 9), ("B3", "9", 9), ("C3", "10", 9), ("D3", "11", 9)],
        [("A4", "12", 9), ("B4", "13", 9), ("C4", "14", 9), ("D4", "11", 9)],
        [("A5", "15", 9), ("B5", "16", 9), ("C5", "17", 9), ("D5", "11", 9)],
        [("A6", "18", 9), ("B6", "19", 9), ("C6", "20", 9), ("D5", "11", 9)],
    ]

    ratio_rows = [
        [("A1", "21", 6)],
        [("A2", "22", 4), ("B2", "23", 4), ("C2", "24", 4), ("D2", "25", 4)],
        [("A3", "26", 9), ("B3", "27", 9), ("C3", "28", 9), ("D3", "29", 9)],
        [("A4", "30", 9), ("B4", "31", 9), ("C4", "32", 9), ("D4", "33", 9)],
        [("A5", "34", 9), ("B5", "35", 9), ("C5", "36", 9), ("D5", "37", 9)],
        [("A6", "38", 9), ("B6", "39", 9), ("C6", "40", 9), ("D6", "41", 9)],
    ]

    revenue_rows = [
        [("A1", "42", 6)],
        [("A2", "43", 4), ("B2", "44", 4), ("C2", "45", 4), ("D2", "46", 4), ("E2", "47", 4), ("F2", "48", 4)],
        [("A3", "49", 9), ("B3", "", 9), ("C3", "", 9), ("D3", "", 9), ("E3", "", 9), ("F3", "", 9)],
        [("A4", "50", 9), ("B4", "", 9), ("C4", "", 9), ("D4", "", 9), ("E4", "", 9), ("F4", "", 9)],
        [("A5", "51", 9), ("B5", "", 9), ("C5", "", 9), ("D5", "", 9), ("E5", "", 9), ("F5", "", 9)],
        [("A6", "52", 9), ("B6", "", 9), ("C6", "", 9), ("D6", "", 9), ("E6", "", 9), ("F6", "", 9)],
        [("A7", "53", 9), ("B7", "", 9), ("C7", "", 9), ("D7", "", 9), ("E7", "", 9), ("F7", "", 9)],
        [("A8", "54", 6), ("B8", "", 6), ("C8", "", 6), ("D8", "", 6), ("E8", "", 6), ("F8", "", 6)],
    ]

    risk_rows = [
        [("A1", "55", 6)],
        [("A2", "56", 4), ("B2", "57", 4), ("C2", "58", 4), ("D2", "59", 4), ("E2", "60", 4)],
        [("A3", "61", 9), ("B3", "62", 9), ("C3", "63", 9), ("D3", "64", 9), ("E3", "65", 9)],
        [("A4", "66", 9), ("B4", "67", 9), ("C4", "68", 9), ("D4", "69", 9), ("E4", "70", 9)],
        [("A5", "71", 9), ("B5", "72", 9), ("C5", "73", 9), ("D5", "74", 9), ("E5", "75", 9)],
        [("A6", "76", 9), ("B6", "77", 9), ("C6", "78", 9), ("D6", "79", 9), ("E6", "80", 9)],
    ]

    dispute_rows = [
        [("A1", "81", 6)],
        [("A2", "82", 4), ("B2", "83", 4), ("C2", "84", 4), ("D2", "85", 4), ("E2", "86", 4)],
        [("A3", "87", 9), ("B3", "88", 9), ("C3", "89", 9), ("D3", "90", 9), ("E3", "91", 9)],
        [("A4", "92", 9), ("B4", "93", 9), ("C4", "94", 9), ("D4", "95", 9), ("E4", "96", 9)],
        [("A5", "97", 9), ("B5", "98", 9), ("C5", "99", 9), ("D5", "100", 9), ("E5", "101", 9)],
        [("A6", "102", 9), ("B6", "103", 9), ("C6", "104", 9), ("D6", "105", 9), ("E6", "106", 9)],
    ]

    exit_rows = [
        [("A1", "107", 6)],
        [("A2", "108", 4), ("B2", "109", 4), ("C2", "110", 4), ("D2", "111", 4), ("E2", "112", 4)],
        [("A3", "113", 9), ("B3", "114", 9), ("C3", "115", 9), ("D3", "116", 9), ("E3", "117", 9)],
        [("A4", "118", 9), ("B4", "119", 9), ("C4", "120", 9), ("D4", "121", 9), ("E4", "122", 9)],
        [("A5", "123", 9), ("B5", "124", 9), ("C5", "125", 9), ("D5", "126", 9), ("E5", "127", 9)],
    ]

    sheets_data = [
        ("封面", cover_rows),
        ("分配原则", principle_rows),
        ("分配比例参考", ratio_rows),
        ("收益分配明细", revenue_rows),
        ("风险承担", risk_rows),
        ("争议解决", dispute_rows),
        ("退出终止", exit_rows),
    ]

    build_form(output, strings, sheets_data, col_widths=[(1,1,18),(2,2,20),(3,3,20),(4,4,20),(5,5,15),(6,6,18)])

# ===================== F06: 联合交付检查清单 =====================
def build_f06():
    output = OUTPUT_DIR + "/F06 - 联合交付检查清单.xlsx"
    strings = [
        "联合交付检查清单",
        "Joint Delivery Checklist",
        "项目名称：____________________    检查日期：____________________    检查人：____________________",
        "一、项目启动前检查项",
        "检查类别", "检查项", "检查标准", "完成情况", "备注",
        "合作模式确认", "联合交付模式选择", "已通过F01工具完成评估并达成一致", "□是 □否 □部分", "",
        "合作模式确认", "合作协议签署", "双方已签署正式合作协议", "□是 □否 □部分", "",
        "接口设计", "接口设计规划", "已通过F02工具完成接口设计", "□是 □否 □部分", "",
        "接口设计", "交接节点确认", "关键交接节点已明确定义", "□是 □否 □部分", "",
        "信息同步", "同步机制建立", "已通过F03工具规划同步方式", "□是 □否 □部分", "",
        "信息同步", "责任人指定", "双方接口人已指定并沟通", "□是 □否 □部分", "",
        "话术统一", "话术对照表完成", "已通过F04工具统一术语", "□是 □否 □部分", "",
        "话术统一", "角色分工明确", "各自对外对内发言范围已确定", "□是 □否 □部分", "",
        "利益分配", "分配协议达成", "已通过F05工具明确分配机制", "□是 □否 □部分", "",
        "利益分配", "风险承担约定", "风险类型和承担比例已明确", "□是 □否 □部分", "",
        "二、里程碑检查项",
        "里程碑编号", "里程碑名称", "计划完成日期", "实际完成日期", "完成标准核对", "问题记录", "验收签字",
        "M1", "", "", "", "□已完成 □未完成 □部分完成", "", "技术：___ 咨询：___",
        "M2", "", "", "", "□已完成 □未完成 □部分完成", "", "技术：___ 咨询：___",
        "M3", "", "", "", "□已完成 □未完成 □部分完成", "", "技术：___ 咨询：___",
        "M4", "", "", "", "□已完成 □未完成 □部分完成", "", "技术：___ 咨询：___",
        "M5", "", "", "", "□已完成 □未完成 □部分完成", "", "技术：___ 咨询：___",
        "三、风险预警清单",
        "风险编号", "风险描述", "风险等级", "应对策略", "责任人", "监控频率", "当前状态", "更新日期",
        "R1", "", "□高 □中 □低", "", "", "", "□监控中 □已解决 □恶化", "",
        "R2", "", "□高 □中 □低", "", "", "", "□监控中 □已解决 □恶化", "",
        "R3", "", "□高 □中 □低", "", "", "", "□监控中 □已解决 □恶化", "",
        "R4", "", "□高 □中 □低", "", "", "", "□监控中 □已解决 □恶化", "",
        "R5", "", "□高 □中 □低", "", "", "", "□监控中 □已解决 □恶化", "",
        "四、完成标准核对",
        "阶段", "完成标准", "自检结果", "互检结果", "客户确认",
        "项目启动", "所有启动前检查项均完成", "□通过 □未通过", "□通过 □未通过", "□确认 □有异议",
        "技术方案交付", "技术方案通过评审", "□通过 □未通过", "□通过 □未通过", "□确认 □有异议",
        "管理变革交付", "变革方案得到客户认可", "□通过 □未通过", "□通过 □未通过", "□确认 □有异议",
        "项目收尾", "所有交付物验收完成", "□通过 □未通过", "□通过 □未通过", "□确认 □有异议",
        "五、综合评估",
        "评估维度", "评估结果", "改进建议",
        "合作模式适配度", "□优秀 □良好 □一般 □需改进", "",
        "接口设计有效性", "□优秀 □良好 □一般 □需改进", "",
        "信息同步及时性", "□优秀 □良好 □一般 □需改进", "",
        "话术统一执行度", "□优秀 □良好 □一般 □需改进", "",
        "利益分配公平性", "□优秀 □良好 □一般 □需改进", "",
        "整体联合交付效果", "□优秀 □良好 □一般 □需改进", "",
    ]

    cover_rows = [
        [("A1", "0", 6)],
        [("A2", "1", 13)],
        [("A4", "2", 3)],
    ]

    startup_rows = [
        [("A1", "3", 6)],
        [("A2", "4", 4), ("B2", "5", 4), ("C2", "6", 4), ("D2", "7", 4), ("E2", "8", 4)],
        [("A3", "9", 9), ("B3", "10", 9), ("C3", "11", 9), ("D3", "12", 9), ("E3", "", 9)],
        [("A4", "13", 9), ("B4", "14", 9), ("C4", "15", 9), ("D4", "16", 9), ("E4", "", 9)],
        [("A5", "17", 9), ("B5", "18", 9), ("C5", "19", 9), ("D5", "20", 9), ("E5", "", 9)],
        [("A6", "21", 9), ("B6", "22", 9), ("C6", "23", 9), ("D6", "24", 9), ("E6", "", 9)],
        [("A7", "25", 9), ("B7", "26", 9), ("C7", "27", 9), ("D7", "28", 9), ("E7", "", 9)],
        [("A8", "29", 9), ("B8", "30", 9), ("C8", "31", 9), ("D8", "32", 9), ("E8", "", 9)],
        [("A9", "33", 9), ("B9", "34", 9), ("C9", "35", 9), ("D9", "36", 9), ("E9", "", 9)],
        [("A10", "37", 9), ("B10", "38", 9), ("C10", "39", 9), ("D10", "40", 9), ("E10", "", 9)],
        [("A11", "41", 9), ("B11", "42", 9), ("C11", "43", 9), ("D11", "44", 9), ("E11", "", 9)],
    ]

    milestone_rows = [
        [("A1", "45", 6)],
        [("A2", "46", 4), ("B2", "47", 4), ("C2", "48", 4), ("D2", "49", 4), ("E2", "50", 4), ("F2", "51", 4), ("G2", "52", 4)],
        [("A3", "53", 9), ("B3", "", 9), ("C3", "", 9), ("D3", "", 9), ("E3", "54", 9), ("F3", "", 9), ("G3", "", 9)],
        [("A4", "55", 9), ("B4", "", 9), ("C4", "", 9), ("D4", "", 9), ("E4", "54", 9), ("F4", "", 9), ("G4", "", 9)],
        [("A5", "56", 9), ("B5", "", 9), ("C5", "", 9), ("D5", "", 9), ("E5", "54", 9), ("F5", "", 9), ("G5", "", 9)],
        [("A6", "57", 9), ("B6", "", 9), ("C6", "", 9), ("D6", "", 9), ("E6", "54", 9), ("F6", "", 9), ("G6", "", 9)],
        [("A7", "58", 9), ("B7", "", 9), ("C7", "", 9), ("D7", "", 9), ("E7", "54", 9), ("F7", "", 9), ("G7", "", 9)],
    ]

    risk_rows = [
        [("A1", "59", 6)],
        [("A2", "60", 4), ("B2", "61", 4), ("C2", "62", 4), ("D2", "63", 4), ("E2", "64", 4), ("F2", "65", 4), ("G2", "66", 4), ("H2", "67", 4)],
        [("A3", "68", 9), ("B3", "", 9), ("C3", "69", 9), ("D3", "", 9), ("E3", "", 9), ("F3", "", 9), ("G3", "70", 9), ("H3", "", 9)],
        [("A4", "71", 9), ("B4", "", 9), ("C4", "72", 9), ("D4", "", 9), ("E4", "", 9), ("F4", "", 9), ("G4", "73", 9), ("H4", "", 9)],
        [("A5", "74", 9), ("B5", "", 9), ("C5", "75", 9), ("D5", "", 9), ("E5", "", 9), ("F5", "", 9), ("G5", "76", 9), ("H5", "", 9)],
        [("A6", "77", 9), ("B6", "", 9), ("C6", "78", 9), ("D6", "", 9), ("E6", "", 9), ("F6", "", 9), ("G6", "79", 9), ("H6", "", 9)],
        [("A7", "80", 9), ("B7", "", 9), ("C7", "81", 9), ("D7", "", 9), ("E7", "", 9), ("F7", "", 9), ("G7", "82", 9), ("H7", "", 9)],
    ]

    completion_rows = [
        [("A1", "83", 6)],
        [("A2", "84", 4), ("B2", "85", 4), ("C2", "86", 4), ("D2", "87", 4), ("E2", "88", 4)],
        [("A3", "89", 9), ("B3", "90", 9), ("C3", "91", 9), ("D3", "92", 9), ("E3", "93", 9)],
        [("A4", "94", 9), ("B4", "95", 9), ("C4", "96", 9), ("D4", "97", 9), ("E4", "98", 9)],
        [("A5", "99", 9), ("B5", "100", 9), ("C5", "101", 9), ("D5", "102", 9), ("E5", "103", 9)],
        [("A6", "104", 9), ("B6", "105", 9), ("C6", "106", 9), ("D6", "107", 9), ("E6", "108", 9)],
    ]

    eval_rows = [
        [("A1", "109", 6)],
        [("A2", "110", 4), ("B2", "111", 4), ("C2", "112", 4)],
        [("A3", "113", 9), ("B3", "114", 9), ("C3", "", 9)],
        [("A4", "115", 9), ("B4", "116", 9), ("C4", "", 9)],
        [("A5", "117", 9), ("B5", "118", 9), ("C5", "", 9)],
        [("A6", "119", 9), ("B6", "120", 9), ("C6", "", 9)],
        [("A7", "121", 9), ("B7", "122", 9), ("C7", "", 9)],
        [("A8", "123", 9), ("B8", "124", 9), ("C8", "", 9)],
    ]

    sheets_data = [
        ("封面", cover_rows),
        ("启动前检查", startup_rows),
        ("里程碑检查", milestone_rows),
        ("风险预警", risk_rows),
        ("完成标准", completion_rows),
        ("综合评估", eval_rows),
    ]

    build_form(output, strings, sheets_data, col_widths=[(1,1,18),(2,2,25),(3,3,20),(4,4,15),(5,5,15),(6,6,15),(7,7,18),(8,8,12)])

# Run all builds
if __name__ == "__main__":
    print("Building F01 - 联合交付模式选择评估表...")
    build_f01()
    print("Building F02 - 接口设计规划表...")
    build_f02()
    print("Building F03 - 信息同步机制表...")
    build_f03()
    print("Building F04 - 话术统一对照表...")
    build_f04()
    print("Building F05 - 利益分配协议模板...")
    build_f05()
    print("Building F06 - 联合交付检查清单...")
    build_f06()
    print("\nAll 6 Excel files created successfully!")
