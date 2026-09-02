#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Build Excel tool forms for 双带头人破局 course.
党建风格: 深红色表头 #C00000, 浅灰背景 #F2F2F2
"""

import os
import shutil
import zipfile

TEMPLATE_DIR = "C:/Users/Administrator/.claude/skills/Excel表格处理/templates/minimal_xlsx"
OUT_DIR = "D:/新课开发/党业融合/双带头人破局/完整课程包/06-工具表单"

# Colors in AARRGGBB format (AA=00 for opaque)
HEADER_RED = "00C00000"   # Deep red for header background
INPUT_BLUE = "000000FF"   # Blue for input text
WHITE = "00FFFFFF"
LIGHT_GRAY = "00F2F2F2"   # Light gray for example data background
DARK_GRAY = "00808080"    # Gray for borders

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
  </fonts>
  <fills>
    <fill><patternFill patternType="none"/></fill>
    <fill><patternFill patternType="gray125"/></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="00C00000"/><bgColor indexed="64"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="00F2F2F2"/><bgColor indexed="64"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="00FFFFFF"/><bgColor indexed="64"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="00FFF2CC"/><bgColor indexed="64"/></patternFill></fill>
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
  </borders>
  <cellStyleXfs><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>
  <cellXfs>
    <xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/>
    <xf numFmtId="0" fontId="3" fillId="2" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1"/>
    <xf numFmtId="0" fontId="0" fillId="3" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1"/>
    <xf numFmtId="0" fontId="4" fillId="2" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1"/>
    <xf numFmtId="0" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1"/>
    <xf numFmtId="0" fontId="1" fillId="3" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1"/>
    <xf numFmtId="0" fontId="1" fillId="5" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1"/>
    <xf numFmtId="0" fontId="0" fillId="4" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1"/>
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

def build_form(output_path, title, strings, sheets_data, col_widths=None):
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

    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    pack_xlsx(work_dir, output_path)
    print("Created: " + output_path)


# ===================== 01: 党建动作清单表 =====================
def build_01():
    output = OUT_DIR + "/党建动作清单表.xlsx"
    strings = [
        "党建动作清单表",
        "填写说明：横向为时间轴（周），纵向为动作类型。请记录实际发生的党建动作，用具体数字填写。",
        "【示例】某机械制造车间党支部 - 3月动作盘点",
        "动作类型", "第1周", "第2周", "第3周", "第4周", "本月合计",
        "支部党员大会", "1次", "0次", "0次", "0次", "1次",
        "支部委员会", "1次", "1次", "1次", "0次", "3次",
        "党小组会", "1次", "1次", "1次", "1次", "4次",
        "党课", "0次", "1次", "0次", "1次", "2次",
        "谈心谈话", "2人次", "3人次", "1人次", "2人次", "8人次",
        "主题党日", "0次", "1次", "0次", "0次", "1次",
        "党员责任区/示范岗", "2次", "2次", "2次", "2次", "8次",
        "民主评议党员", "0次", "0次", "0次", "0次", "0次",
        "志愿服务", "0次", "1次", "0次", "0次", "1次",
        "群众工作", "1次", "0次", "1次", "1次", "3次",
        "月/周动作盘点表示例",
        "动作类型", "第1周", "第2周", "第3周", "第4周", "本月合计",
        "支部党员大会", "", "", "", "", "",
        "支部委员会", "", "", "", "", "",
        "党小组会", "", "", "", "", "",
        "党课", "", "", "", "", "",
        "谈心谈话", "", "", "", "", "",
        "主题党日", "", "", "", "", "",
        "党员责任区/示范岗", "", "", "", "", "",
        "民主评议党员", "", "", "", "", "",
        "志愿服务", "", "", "", "", "",
        "群众工作", "", "", "", "", "",
        "三会一课记录模板",
        "会议/活动类型", "日期", "议题/主题", "参与人数", "关键决议/收获", "记录人",
        "支部委员会", "3月5日", "一季度设备故障率超标问题专题研究", "9人", "决议：设立党员先锋设备包机责任区，由党员分区包机负责设备日常点检", "李某",
        "", "", "", "", "", "",
        "", "", "", "", "", "",
        "", "", "", "", "", "",
        "谈心谈话记录模板",
        "谈话日期", "谈话人", "被谈话人", "谈话类型", "主要内容摘要", "约定事项", "跟进状态",
        "3月8日", "张书记", "王师傅", "关怀帮扶", "了解到其家中老人住院需照顾，情绪有些低落", "约定：工会慰问跟上，党费暖心工程跟上", "待跟进",
        "", "", "", "", "", "", "",
        "", "", "", "", "", "", "",
        "", "", "", "", "", "", "",
        "主题党日活动记录模板",
        "活动日期", "活动名称", "参与人数", "活动内容摘要", "亮点与不足", "照片/资料链接",
        "3月15日", "学雷锋·我为车间解难题", "23人", "1.重温入党誓词 2.安全隐患排查（发现3处）3.成立党员突击队解决2号产线效率问题", "突击队首战告捷，3天解决原计划2周解决的问题", "照片存于支部相册",
        "", "", "", "", "", "",
        "", "", "", "", "", "",
        "", "", "", "", "", "",
    ]

    # Sheet 1: 月/周动作盘点表示例
    sheet1_rows = [
        [("A1", "0", 4), ("B1", "", 2), ("C1", "【示例】某机械制造车间党支部 - 3月动作盘点", 2)],
        [("A2", "1", 2)],
        [("A3", "3", 4), ("B3", "4", 4), ("C3", "5", 4), ("D3", "6", 4), ("E3", "7", 4), ("F3", "8", 4), ("G3", "9", 4)],
        [("A4", "10", 7), ("B4", "1次", 7), ("C4", "0次", 7), ("D4", "0次", 7), ("E4", "0次", 7), ("F4", "1次", 7)],
        [("A5", "11", 7), ("B5", "1次", 7), ("C5", "1次", 7), ("D5", "1次", 7), ("E5", "0次", 7), ("F5", "3次", 7)],
        [("A6", "12", 7), ("B6", "1次", 7), ("C6", "1次", 7), ("D6", "1次", 7), ("E6", "1次", 7), ("F6", "4次", 7)],
        [("A7", "13", 7), ("B7", "0次", 7), ("C7", "1次", 7), ("D7", "0次", 7), ("E7", "1次", 7), ("F7", "2次", 7)],
        [("A8", "14", 7), ("B8", "2人次", 7), ("C8", "3人次", 7), ("D8", "1人次", 7), ("E8", "2人次", 7), ("F8", "8人次", 7)],
        [("A9", "15", 7), ("B9", "0次", 7), ("C9", "1次", 7), ("D9", "0次", 7), ("E9", "0次", 7), ("F9", "1次", 7)],
        [("A10", "16", 7), ("B10", "2次", 7), ("C10", "2次", 7), ("D10", "2次", 7), ("E10", "2次", 7), ("F10", "8次", 7)],
        [("A11", "17", 7), ("B11", "0次", 7), ("C11", "0次", 7), ("D11", "0次", 7), ("E11", "0次", 7), ("F11", "0次", 7)],
        [("A12", "18", 7), ("B12", "0次", 7), ("C12", "1次", 7), ("D12", "0次", 7), ("E12", "0次", 7), ("F12", "1次", 7)],
        [("A13", "19", 7), ("B13", "1次", 7), ("C13", "0次", 7), ("D13", "1次", 7), ("E13", "1次", 7), ("F13", "3次", 7)],
        [("A15", "20", 4), ("B15", "", 2), ("C15", "月/周动作盘点表示例", 2)],
        [("A16", "3", 4), ("B16", "4", 4), ("C16", "5", 4), ("D16", "6", 4), ("E16", "7", 4), ("F16", "8", 4), ("G16", "9", 4)],
        [("A17", "10", 3), ("B17", "", 3), ("C17", "", 3), ("D17", "", 3), ("E17", "", 3), ("F17", "", 3)],
        [("A18", "11", 3), ("B18", "", 3), ("C18", "", 3), ("D18", "", 3), ("E18", "", 3), ("F18", "", 3)],
        [("A19", "12", 3), ("B19", "", 3), ("C19", "", 3), ("D19", "", 3), ("E19", "", 3), ("F19", "", 3)],
        [("A20", "13", 3), ("B20", "", 3), ("C20", "", 3), ("D20", "", 3), ("E20", "", 3), ("F20", "", 3)],
        [("A21", "14", 3), ("B21", "", 3), ("C21", "", 3), ("D21", "", 3), ("E21", "", 3), ("F21", "", 3)],
        [("A22", "15", 3), ("B22", "", 3), ("C22", "", 3), ("D22", "", 3), ("E22", "", 3), ("F22", "", 3)],
        [("A23", "16", 3), ("B23", "", 3), ("C23", "", 3), ("D23", "", 3), ("E23", "", 3), ("F23", "", 3)],
        [("A24", "17", 3), ("B24", "", 3), ("C24", "", 3), ("D24", "", 3), ("E24", "", 3), ("F24", "", 3)],
        [("A25", "18", 3), ("B25", "", 3), ("C25", "", 3), ("D25", "", 3), ("E25", "", 3), ("F25", "", 3)],
        [("A26", "19", 3), ("B26", "", 3), ("C26", "", 3), ("D26", "", 3), ("E26", "", 3), ("F26", "", 3)],
    ]

    # Sheet 2: 三会一课记录模板
    sheet2_rows = [
        [("A1", "21", 4), ("B1", "", 2), ("C1", "三会一课记录模板", 2)],
        [("A3", "22", 4), ("B3", "23", 4), ("C3", "24", 4), ("D3", "25", 4), ("E3", "26", 4), ("F3", "27", 4)],
        [("A4", "28", 7), ("B4", "3月5日", 7), ("C4", "一季度设备故障率超标问题专题研究", 7), ("D4", "9人", 7), ("E4", "决议：设立党员先锋设备包机责任区", 7), ("F4", "李某", 7)],
        [("A5", "", 3), ("B5", "", 3), ("C5", "", 3), ("D5", "", 3), ("E5", "", 3), ("F5", "", 3)],
        [("A6", "", 3), ("B6", "", 3), ("C6", "", 3), ("D6", "", 3), ("E6", "", 3), ("F6", "", 3)],
        [("A7", "", 3), ("B7", "", 3), ("C7", "", 3), ("D7", "", 3), ("E7", "", 3), ("F7", "", 3)],
        [("A8", "", 3), ("B8", "", 3), ("C8", "", 3), ("D8", "", 3), ("E8", "", 3), ("F8", "", 3)],
        [("A9", "", 3), ("B9", "", 3), ("C9", "", 3), ("D9", "", 3), ("E9", "", 3), ("F9", "", 3)],
        [("A10", "", 3), ("B10", "", 3), ("C10", "", 3), ("D10", "", 3), ("E10", "", 3), ("F10", "", 3)],
    ]

    # Sheet 3: 谈心谈话记录模板
    sheet3_rows = [
        [("A1", "29", 4), ("B1", "", 2), ("C1", "谈心谈话记录模板", 2)],
        [("A3", "30", 4), ("B3", "31", 4), ("C3", "32", 4), ("D3", "33", 4), ("E3", "34", 4), ("F3", "35", 4), ("G3", "36", 4)],
        [("A4", "37", 7), ("B4", "3月8日", 7), ("C4", "张书记", 7), ("D4", "王师傅", 7), ("E4", "关怀帮扶", 7), ("F4", "了解到其家中老人住院需照顾", 7), ("G4", "待跟进", 7)],
        [("A5", "", 3), ("B5", "", 3), ("C5", "", 3), ("D5", "", 3), ("E5", "", 3), ("F5", "", 3), ("G5", "", 3)],
        [("A6", "", 3), ("B6", "", 3), ("C6", "", 3), ("D6", "", 3), ("E6", "", 3), ("F6", "", 3), ("G6", "", 3)],
        [("A7", "", 3), ("B7", "", 3), ("C7", "", 3), ("D7", "", 3), ("E7", "", 3), ("F7", "", 3), ("G7", "", 3)],
        [("A8", "", 3), ("B8", "", 3), ("C8", "", 3), ("D8", "", 3), ("E8", "", 3), ("F8", "", 3), ("G8", "", 3)],
        [("A9", "", 3), ("B9", "", 3), ("C9", "", 3), ("D9", "", 3), ("E9", "", 3), ("F9", "", 3), ("G9", "", 3)],
        [("A10", "", 3), ("B10", "", 3), ("C10", "", 3), ("D10", "", 3), ("E10", "", 3), ("F10", "", 3), ("G10", "", 3)],
    ]

    # Sheet 4: 主题党日活动记录模板
    sheet4_rows = [
        [("A1", "38", 4), ("B1", "", 2), ("C1", "主题党日活动记录模板", 2)],
        [("A3", "39", 4), ("B3", "40", 4), ("C3", "41", 4), ("D3", "42", 4), ("E3", "43", 4), ("F3", "44", 4)],
        [("A4", "45", 7), ("B4", "3月15日", 7), ("C4", "学雷锋·我为车间解难题", 7), ("D4", "23人", 7), ("E4", "1.重温入党誓词 2.安全隐患排查（发现3处）3.成立党员突击队解决2号产线效率问题", 7), ("F4", "突击队首战告捷", 7)],
        [("A5", "", 3), ("B5", "", 3), ("C5", "", 3), ("D5", "", 3), ("E5", "", 3), ("F5", "", 3)],
        [("A6", "", 3), ("B6", "", 3), ("C6", "", 3), ("D6", "", 3), ("E6", "", 3), ("F6", "", 3)],
        [("A7", "", 3), ("B7", "", 3), ("C7", "", 3), ("D7", "", 3), ("E7", "", 3), ("F7", "", 3)],
        [("A8", "", 3), ("B8", "", 3), ("C8", "", 3), ("D8", "", 3), ("E8", "", 3), ("F8", "", 3)],
        [("A9", "", 3), ("B9", "", 3), ("C9", "", 3), ("D9", "", 3), ("E9", "", 3), ("F9", "", 3)],
        [("A10", "", 3), ("B10", "", 3), ("C10", "", 3), ("D10", "", 3), ("E10", "", 3), ("F10", "", 3)],
    ]

    sheets_data = [
        ("月/周动作盘点表", sheet1_rows),
        ("三会一课记录", sheet2_rows),
        ("谈心谈话记录", sheet3_rows),
        ("主题党日记录", sheet4_rows),
    ]

    build_form(output, "0", strings, sheets_data, col_widths=[(1,1,22),(2,2,15),(3,3,15),(4,4,15),(5,5,15),(6,6,15),(7,7,15)])


# ===================== 02: 动作-指标映射表 =====================
def build_02():
    output = OUT_DIR + "/动作-指标映射表.xlsx"
    # Using 【】 instead of "" for Chinese quotes to avoid parsing issues
    strings = [
        "动作-指标映射表",
        "填写说明：每个党建动作都必须找到对应的业务场景和可量化的影响指标。",
        "【示例1：制造业-车间党支部】",
        "党建动作", "业务场景", "影响指标（量化前）", "影响指标（量化后）", "验证方式/数据来源", "映射确认",
        "党员先锋岗设备包机活动", "设备日常维护责任到人，减少非计划停机", "设备故障响应时间偏长", "故障响应时间：40分钟→25分钟；非计划停机：月均8次→3次", "设备科月度报表+支部台账对比", "√",
        "【示例2：服务业-银行网点党支部】",
        "我为群众办实事谈心谈话+服务改进承诺上墙", "客户等候时间长引发投诉", "客户投诉率偏高", "投诉率：季度15件→4件；一次性办结率：72%→91%", "客服系统数据+网点服务暗访", "√",
        "【示例3：工程类-项目部党支部】",
        "主题党日攻坚克难誓师大会", "某重点工程工期延误风险", "工期延误，安全管控压力大", "工期追回12天；安全事故0起", "项目周报+安全检查记录", "√",
        "【空白模板】请按以下格式填写",
        "序号", "党建动作", "业务场景描述", "影响指标（量化前）", "影响指标（量化后）", "验证方式/数据来源", "映射确认",
        "1", "", "", "", "", "", "",
        "2", "", "", "", "", "", "",
        "3", "", "", "", "", "", "",
        "4", "", "", "", "", "", "",
        "5", "", "", "", "", "", "",
        "6", "", "", "", "", "", "",
        "7", "", "", "", "", "", "",
        "8", "", "", "", "", "", "",
        "9", "", "", "", "", "", "",
        "10", "", "", "", "", "", "",
        "使用说明：",
        "1. 左列填写具体的党建动作，右列填写对应的业务场景",
        "2. 影响指标尽量量化，无法量化的要描述可观察的行为改变",
        "3. 验证方式要具体（如：设备科月度报表、客户投诉系统数据等）",
        "4. 每个党建动作都必须确认已找到对应的业务指标",
    ]

    # Sheet 1: 映射表示例
    sheet1_rows = [
        [("A1", "0", 4), ("B1", "", 2), ("C1", "动作-指标映射表示例（3条跨行业）", 2)],
        [("A3", "3", 4), ("B3", "【示例1：制造业-车间党支部】", 2)],
        [("A5", "4", 4), ("B5", "5", 4), ("C5", "6", 4), ("D5", "7", 4), ("E5", "8", 4), ("F5", "9", 4)],
        [("A6", "10", 7), ("B6", "党员先锋岗设备包机活动", 7), ("C6", "设备日常维护责任到人", 7), ("D6", "设备故障响应时间偏长", 7), ("E6", "40分钟→25分钟", 7), ("F6", "设备科月度报表", 7)],
        [("A8", "3", 4), ("B8", "【示例2：服务业-银行网点党支部】", 2)],
        [("A10", "4", 4), ("B10", "5", 4), ("C10", "6", 4), ("D10", "7", 4), ("E10", "8", 4), ("F10", "9", 4)],
        [("A11", "11", 7), ("B11", "我为群众办实事谈心谈话", 7), ("C11", "客户等候时间长引发投诉", 7), ("D11", "投诉率偏高", 7), ("E11", "15件→4件/季度", 7), ("F11", "客服系统数据", 7)],
        [("A13", "3", 4), ("B13", "【示例3：工程类-项目部党支部】", 2)],
        [("A15", "4", 4), ("B15", "5", 4), ("C15", "6", 4), ("D15", "7", 4), ("E15", "8", 4), ("F15", "9", 4)],
        [("A16", "12", 7), ("B16", "主题党日攻坚克难誓师大会", 7), ("C16", "工期延误风险", 7), ("D16", "工期延误", 7), ("E16", "追回12天", 7), ("F16", "项目周报", 7)],
    ]

    # Sheet 2: 空白映射表
    sheet2_rows = [
        [("A1", "0", 4), ("B1", "", 2), ("C1", "动作-指标映射表（空白模板）", 2)],
        [("A3", "13", 4), ("B3", "14", 4), ("C3", "15", 4), ("D3", "16", 4), ("E3", "17", 4), ("F3", "18", 4), ("G3", "19", 4)],
        [("A4", "1", 3), ("B4", "", 3), ("C4", "", 3), ("D4", "", 3), ("E4", "", 3), ("F4", "", 3), ("G4", "", 3)],
        [("A5", "2", 3), ("B5", "", 3), ("C5", "", 3), ("D5", "", 3), ("E5", "", 3), ("F5", "", 3), ("G5", "", 3)],
        [("A6", "3", 3), ("B6", "", 3), ("C6", "", 3), ("D6", "", 3), ("E6", "", 3), ("F6", "", 3), ("G6", "", 3)],
        [("A7", "4", 3), ("B7", "", 3), ("C7", "", 3), ("D7", "", 3), ("E7", "", 3), ("F7", "", 3), ("G7", "", 3)],
        [("A8", "5", 3), ("B8", "", 3), ("C8", "", 3), ("D8", "", 3), ("E8", "", 3), ("F8", "", 3), ("G8", "", 3)],
        [("A9", "6", 3), ("B9", "", 3), ("C9", "", 3), ("D9", "", 3), ("E9", "", 3), ("F9", "", 3), ("G9", "", 3)],
        [("A10", "7", 3), ("B10", "", 3), ("C10", "", 3), ("D10", "", 3), ("E10", "", 3), ("F10", "", 3), ("G10", "", 3)],
        [("A11", "8", 3), ("B11", "", 3), ("C11", "", 3), ("D11", "", 3), ("E11", "", 3), ("F11", "", 3), ("G11", "", 3)],
        [("A12", "9", 3), ("B12", "", 3), ("C12", "", 3), ("D12", "", 3), ("E12", "", 3), ("F12", "", 3), ("G12", "", 3)],
        [("A13", "10", 3), ("B13", "", 3), ("C13", "", 3), ("D13", "", 3), ("E13", "", 3), ("F13", "", 3), ("G13", "", 3)],
        [("A15", "20", 4), ("B15", "使用说明", 2)],
        [("A16", "21", 3)],
        [("A17", "22", 3)],
        [("A18", "23", 3)],
        [("A19", "24", 3)],
    ]

    sheets_data = [
        ("映射表示例", sheet1_rows),
        ("空白映射表", sheet2_rows),
    ]

    build_form(output, "1", strings, sheets_data, col_widths=[(1,1,8),(2,2,25),(3,3,22),(4,4,20),(5,5,20),(6,6,20),(7,7,12)])


# ===================== 03: 四步转化法自检清单 =====================
def build_03():
    output = OUT_DIR + "/四步转化法自检清单.xlsx"
    strings = [
        "四步转化法自检清单",
        "填写说明：对照四步转化法，逐项检查自己的完成情况。每步满分5分，综合得分=动作盘点×20%+业务映射×25%+经验萃取×30%+品牌固化×25%",
        "第一步：动作盘点",
        "检查项", "完成标准", "自评得分（1-5）",
        "已完整填写最近一个月的党建动作清单", "□是 □否", "",
        "每项动作都有具体日期和参与人数", "□是 □否", "",
        "动作类型覆盖三会一课、谈心谈话、主题党日等主要形式", "□是 □否", "",
        "第二步：业务映射",
        "每个党建动作都找到了对应的业务场景", "□是 □否", "",
        "每个业务场景都有可量化或可观察的指标", "□是 □否", "",
        "已收集能证明效果的数据/证据", "□是 □否", "",
        "第三步：经验萃取",
        "已提炼出可复制的方法要点（3条以上）", "□是 □否", "",
        "方法要点已形成初步打法卡片", "□是 □否", "",
        "关键注意事项/踩坑点已标注", "□是 □否", "",
        "第四步：品牌固化",
        "已确定支部品牌名称", "□是 □否", "",
        "已形成品牌四件套（名称+方法论+案例+数据）", "□是 □否", "",
        "品牌可持续传承机制已设计", "□是 □否", "",
        "综合评分", "权重", "得分",
        "动作盘点", "20%", "",
        "业务映射", "25%", "",
        "经验萃取", "30%", "",
        "品牌固化", "25%", "",
        "综合得分", "100%", "",
        "评级标准：90-100分=优秀 / 70-89分=良好 / 50-69分=及格 / 50分以下=待改进",
        "雷达图数据",
        "维度", "得分",
        "动作盘点", "0",
        "业务映射", "0",
        "经验萃取", "0",
        "品牌固化", "0",
    ]

    # Sheet 1: 四步自检清单
    sheet1_rows = [
        [("A1", "0", 4), ("B1", "", 2), ("C1", "四步转化法自检清单", 2)],
        [("A3", "1", 3), ("B3", "2", 3)],
        [("A5", "3", 4), ("B5", "第一步：动作盘点", 4)],
        [("A6", "4", 4), ("B6", "5", 4), ("C6", "6", 4)],
        [("A7", "7", 3), ("B7", "已完整填写最近一个月的党建动作清单", 3), ("C7", "□是 □否", 3)],
        [("A8", "8", 3), ("B8", "每项动作都有具体日期和参与人数", 3), ("C8", "□是 □否", 3)],
        [("A9", "9", 3), ("B9", "动作类型覆盖三会一课、谈心谈话、主题党日等主要形式", 3), ("C9", "□是 □否", 3)],
        [("A11", "10", 4), ("B11", "第二步：业务映射", 4)],
        [("A12", "4", 4), ("B12", "5", 4), ("C12", "6", 4)],
        [("A13", "11", 3), ("B13", "每个党建动作都找到了对应的业务场景", 3), ("C13", "□是 □否", 3)],
        [("A14", "12", 3), ("B14", "每个业务场景都有可量化或可观察的指标", 3), ("C14", "□是 □否", 3)],
        [("A15", "13", 3), ("B15", "已收集能证明效果的数据/证据", 3), ("C15", "□是 □否", 3)],
        [("A17", "14", 4), ("B17", "第三步：经验萃取", 4)],
        [("A18", "4", 4), ("B18", "5", 4), ("C18", "6", 4)],
        [("A19", "15", 3), ("B19", "已提炼出可复制的方法要点（3条以上）", 3), ("C19", "□是 □否", 3)],
        [("A20", "16", 3), ("B20", "方法要点已形成初步打法卡片", 3), ("C20", "□是 □否", 3)],
        [("A21", "17", 3), ("B21", "关键注意事项/踩坑点已标注", 3), ("C21", "□是 □否", 3)],
        [("A23", "18", 4), ("B23", "第四步：品牌固化", 4)],
        [("A24", "4", 4), ("B24", "5", 4), ("C24", "6", 4)],
        [("A25", "19", 3), ("B25", "已确定支部品牌名称", 3), ("C25", "□是 □否", 3)],
        [("A26", "20", 3), ("B26", "已形成品牌四件套（名称+方法论+案例+数据）", 3), ("C26", "□是 □否", 3)],
        [("A27", "21", 3), ("B27", "品牌可持续传承机制已设计", 3), ("C27", "□是 □否", 3)],
        [("A29", "22", 4), ("B29", "综合评分", 4)],
        [("A30", "23", 4), ("B30", "24", 4), ("C30", "25", 4)],
        [("A31", "26", 3), ("B31", "动作盘点", 3), ("C31", "20%", 3)],
        [("A32", "27", 3), ("B32", "业务映射", 3), ("C32", "25%", 3)],
        [("A33", "28", 3), ("B33", "经验萃取", 3), ("C33", "30%", 3)],
        [("A34", "29", 3), ("B34", "品牌固化", 3), ("C34", "25%", 3)],
        [("A35", "30", 4), ("B35", "综合得分", 4), ("C35", "100%", 4)],
        [("A37", "31", 3)],
        [("A39", "32", 4), ("B39", "评级标准：90-100分=优秀 / 70-89分=良好 / 50-69分=及格 / 50分以下=待改进", 3)],
    ]

    # Sheet 2: 雷达图数据
    sheet2_rows = [
        [("A1", "33", 4), ("B1", "", 2), ("C1", "综合评分雷达图数据", 2)],
        [("A3", "34", 4), ("B3", "35", 4)],
        [("A4", "36", 3), ("B4", "动作盘点", 3), ("C4", "0", 3)],
        [("A5", "37", 3), ("B5", "业务映射", 3), ("C5", "0", 3)],
        [("A6", "38", 3), ("B6", "经验萃取", 3), ("C6", "0", 3)],
        [("A7", "39", 3), ("B7", "品牌固化", 3), ("C7", "0", 3)],
        [("A9", "40", 3)],
    ]

    sheets_data = [
        ("四步自检清单", sheet1_rows),
        ("雷达图数据", sheet2_rows),
    ]

    build_form(output, "2", strings, sheets_data, col_widths=[(1,1,8),(2,2,45),(3,3,15)])


if __name__ == "__main__":
    build_01()
    build_02()
    build_03()
    print("\nAll 3 Excel files created successfully!")
