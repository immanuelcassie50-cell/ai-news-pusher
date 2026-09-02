#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Build Excel forms for 课程4: 算法审计与合规底线
生成《算法审计与合规底线》课程的5个工具表单Excel版及配套表单
"""

import os
import shutil
import zipfile

TEMPLATE_DIR = "C:/Users/Administrator/.claude/skills/Excel表格处理/templates/minimal_xlsx"
OUTPUT_DIR = "D:/新课开发/HR/招聘/04.算法审计与合规底线：让候选人相信筛选是公平的/10.配套表单-Excel版"

# Color scheme: Deep blue (#1F4E79) for headers, light blue (#D6E4F0) for alternating rows
DEEP_BLUE = "001F4E79"
LIGHT_BLUE = "00D6E4F0"
WHITE = "00FFFFFF"
DARK_GRAY = "00404040"
LIGHT_GRAY = "00F2F2F2"
ORANGE = "00FF6600"
RED = "00CC0000"
GREEN = "0000AA00"
YELLOW = "00FFFF00"


def copy_template(work_dir):
    if os.path.exists(work_dir):
        shutil.rmtree(work_dir)
    shutil.copytree(TEMPLATE_DIR, work_dir)


def create_styles_xml(work_dir, color_scheme="blue"):
    """Create styles.xml with proper color scheme"""
    styles_path = os.path.join(work_dir, "xl", "styles.xml")

    if color_scheme == "blue":
        header_bg = DEEP_BLUE
        header_fg = WHITE
        alt_bg = LIGHT_BLUE
    elif color_scheme == "green":
        header_bg = "00317451"
        header_fg = WHITE
        alt_bg = "00E8F4EC"
    elif color_scheme == "orange":
        header_bg = "00B8860B"
        header_fg = WHITE
        alt_bg = "00FFF8DC"
    elif color_scheme == "purple":
        header_bg = "006B3C8E"
        header_fg = WHITE
        alt_bg = "00EDE7F3"
    else:
        header_bg = DEEP_BLUE
        header_fg = WHITE
        alt_bg = LIGHT_BLUE

    styles_xml = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <fonts>
    <font><sz val="11"/><name val="Calibri"/></font>
    <font><sz val="11"/><name val="Calibri"/><b/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="000000FF"/></font>
    <font><sz val="11"/><name val="Calibri"/><b/><color rgb="{header_fg}"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="{header_fg}"/></font>
    <font><sz val="10"/><name val="Calibri"/></font>
    <font><sz val="10"/><name val="Calibri"/><b/></font>
  </fonts>
  <fills>
    <fill><patternFill patternType="none"/></fill>
    <fill><patternFill patternType="gray125"/></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="{header_bg}"/><bgColor indexed="64"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="{alt_bg}"/><bgColor indexed="64"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="00FFFFFF"/><bgColor indexed="64"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="00F2F2F2"/><bgColor indexed="64"/></patternFill></fill>
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
    <xf numFmtId="0" fontId="0" fillId="4" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1"/>
    <xf numFmtId="0" fontId="0" fillId="3" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1"/>
    <xf numFmtId="0" fontId="6" fillId="3" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1"/>
    <xf numFmtId="0" fontId="0" fillId="0" borderId="1" xfId="0" applyFont="1" applyBorder="1"/>
    <xf numFmtId="0" fontId="1" fillId="2" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1"/>
    <xf numFmtId="0" fontId="0" fillId="5" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1"/>
    <xf numFmtId="0" fontId="0" fillId="4" borderId="2" xfId="0" applyFont="1" applyFill="1" applyBorder="1"/>
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
            if not cell_data:
                continue
            col, value, style = cell_data[:3]
            if isinstance(value, str):
                cells.append('<c r="' + col + str(row_idx) + '" t="s" s="' + str(style) + '"><v>' + value + '</v></c>')
            elif isinstance(value, (int, float)):
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


def build_form(output_path, strings, sheets_data, col_widths_list=None, color_scheme="blue"):
    work_dir = "/tmp/xlsx_build"
    copy_template(work_dir)
    create_styles_xml(work_dir, color_scheme)
    str_mapping = create_shared_strings_xml(work_dir, strings)

    updated_sheets = []
    for sheet_name, rows in sheets_data:
        updated_rows = []
        for row in rows:
            updated_row = []
            for cell in row:
                if not cell:
                    updated_row.append(None)
                    continue
                col, value, style = cell[:3]
                if isinstance(value, str) and value in str_mapping:
                    updated_row.append((col, str_mapping[value], style))
                else:
                    updated_row.append((col, value, style))
            updated_rows.append(updated_row)
        updated_sheets.append((sheet_name, updated_rows))

    for i, (sheet_name, rows) in enumerate(updated_sheets, 1):
        sheet_path = os.path.join(work_dir, "xl", "worksheets", "sheet" + str(i) + ".xml")
        widths = col_widths_list[i-1] if col_widths_list and i <= len(col_widths_list) else [(1, 10, 15)]
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


# ============================================================
# FORM 1: 算法合规风险自检表.xlsx
# ============================================================
def build_form1():
    output = OUTPUT_DIR + "/表单1_算法合规风险自检表.xlsx"
    strings = [
        # Header / Title area
        "算法合规风险自检表",
        "表单说明：每季度使用一次，评估企业AI招聘系统的合规风险水平",
        "法规依据：《个人信息保护法》第24条、《算法推荐管理规定》第17条",
        "",
        "一、企业AI招聘系统基本情况",
        "系统名称：", "系统供应商：", "上线时间：", "使用范围：",
        "是否使用自动化决策：□是  □否", "自动化决策环节：□简历筛选  □AI面试  □测评评估  □录用决策",
        "",
        "二、合规要点清单（8项）",
        "序号", "合规要点", "自检问题", "现状评估", "备注",
        "1", "告知义务", "是否向候选人明确说明使用了自动化决策系统？", "□已做到 □部分做到 □未做到", "",
        "2", "知情权保障", "候选人是否能便捷查询自动化决策的规则？", "□已做到 □部分做到 □未做到", "",
        "3", "拒绝权保障", "候选人拒绝自动化决策的渠道是否畅通？", "□已做到 □部分做到 □未做到", "",
        "4", "结果解释", "候选人能否获得关于筛选结果的解释说明？", "□已做到 □部分做到 □未做到", "",
        "5", "人工干预", "候选人申请人工复核的流程是否明确？", "□已做到 □部分做到 □未做到", "",
        "6", "偏见审计", "算法系统是否定期进行公平性测试？", "□已做到 □部分做到 □未做到", "",
        "7", "数据最小化", "采集的数据是否限于招聘必要范围？", "□已做到 □部分做到 □未做到", "",
        "8", "安全保护", "候选人数据是否采取必要的安全保护措施？", "□已做到 □部分做到 □未做到", "",
        "",
        "三、自检打分表",
        "打分标准：已做到=3分  部分做到=1分  未做到=0分",
        "序号", "合规要点", "分值", "得分", "小计",
        "1", "告知义务", "0-3分", "", "",
        "2", "知情权保障", "0-3分", "", "",
        "3", "拒绝权保障", "0-3分", "", "",
        "4", "结果解释", "0-3分", "", "",
        "5", "人工干预", "0-3分", "", "",
        "6", "偏见审计", "0-3分", "", "",
        "7", "数据最小化", "0-3分", "", "",
        "8", "安全保护", "0-3分", "", "",
        "合计", "（满分24分）", "", "", "",
        "",
        "四、风险等级评估",
        "风险等级", "得分区间", "情形描述", "建议措施",
        "绿色（低风险）", "20-24分", "完全合规或暂未使用自动化决策", "继续保持，定期审查",
        "黄色（中风险）", "12-19分", "部分合规，存在改进空间", "制定整改计划，90天内完成",
        "橙色（中高风险）", "6-11分", "多项不合规，有较多改进项", "优先整改高风险项，60天内完成",
        "红色（高风险）", "0-5分", "完全未合规或存在重大违规", "立即整改，暂停使用问题系统",
        "",
        "本次自检结论：□合规（20-24分）  □基本合规（12-19分）  □存在风险（6-11分）  □高风险（0-5分）",
        "",
        "最亟需改进的3项：",
        "1.", "",
        "2.", "",
        "3.", "",
        "",
        "五、违规风险对照表",
        "风险等级", "情形", "潜在后果",
        "红色（高风险）", "完全未告知候选人使用自动化决策", "行政处罚、诉讼风险、品牌损害",
        "橙色（中高风险）", "有告知但未提供拒绝渠道", "投诉增加、监管关注",
        "黄色（中风险）", "有拒绝渠道但流程不畅通", "候选人体验差、口碑影响",
        "绿色（低风险）", "完全合规或暂未使用自动化决策", "无",
        "",
        "六、自检记录",
        "自检日期：", "自检人：", "审核人：", "整改截止：",
    ]

    # Style 1 = deep blue header (white text)
    # Style 2 = white background with border
    # Style 3 = light blue alt row
    # Style 4 = bold header on alt
    # Style 5 = plain cell with border
    # Style 6 = bold blue header
    # Style 7 = gray alt row
    # Style 8 = bottom border row

    sheet1_rows = [
        # Title
        [("A1", "0", 1), ("B1", "1", 1)],
        [("A2", "2", 1)],
        [("A3", "3", 1)],
        # Section 1
        [("A4", "4", 6)],
        [("A5", "5", 5), ("B5", "6", 5), ("C5", "7", 5), ("D5", "8", 5)],
        [("A6", "9", 5)],
        [("A7", "10", 5)],
        # Section 2
        [("A8", "11", 1)],
        [("A9", "12", 6), ("B9", "13", 6), ("C9", "14", 6), ("D9", "15", 6), ("E9", "16", 6)],
        [("A10", "17", 3), ("B10", "18", 3), ("C10", "19", 3), ("D10", "20", 3), ("E10", "21", 3)],
        [("A11", "22", 3), ("B11", "23", 3), ("C11", "24", 3), ("D11", "25", 3), ("E11", "26", 3)],
        [("A12", "27", 3), ("B12", "28", 3), ("C12", "29", 3), ("D12", "30", 3), ("E12", "31", 3)],
        [("A13", "32", 3), ("B13", "33", 3), ("C13", "34", 3), ("D13", "35", 3), ("E13", "36", 3)],
        [("A14", "37", 3), ("B14", "38", 3), ("C14", "39", 3), ("D14", "40", 3), ("E14", "41", 3)],
        [("A15", "42", 3), ("B15", "43", 3), ("C15", "44", 3), ("D15", "45", 3), ("E15", "46", 3)],
        [("A16", "47", 3), ("B16", "48", 3), ("C16", "49", 3), ("D16", "50", 3), ("E16", "51", 3)],
        [("A17", "52", 3), ("B17", "53", 3), ("C17", "54", 3), ("D17", "55", 3), ("E17", "56", 3)],
        [("A18", "57", 7)],
        # Section 3
        [("A19", "58", 1)],
        [("A20", "59", 6), ("B20", "60", 6), ("C20", "61", 6), ("D20", "62", 6), ("E20", "63", 6)],
        [("A21", "64", 3), ("B21", "65", 3), ("C21", "66", 3), ("D21", "67", 3), ("E21", "68", 3)],
        [("A22", "69", 3), ("B22", "70", 3), ("C22", "71", 3), ("D22", "72", 3), ("E22", "73", 3)],
        [("A23", "74", 3), ("B23", "75", 3), ("C23", "76", 3), ("D23", "77", 3), ("E23", "78", 3)],
        [("A24", "79", 3), ("B24", "80", 3), ("C24", "81", 3), ("D24", "82", 3), ("E24", "83", 3)],
        [("A25", "84", 3), ("B25", "85", 3), ("C25", "86", 3), ("D25", "87", 3), ("E25", "88", 3)],
        [("A26", "89", 3), ("B26", "90", 3), ("C26", "91", 3), ("D26", "92", 3), ("E26", "93", 3)],
        [("A27", "94", 3), ("B27", "95", 3), ("C27", "96", 3), ("D27", "97", 3), ("E27", "98", 3)],
        [("A28", "99", 6), ("B28", "100", 5), ("C28", "101", 5), ("D28", "102", 5), ("E28", "103", 5)],
        [("A29", "104", 7)],
        # Section 4
        [("A30", "105", 1)],
        [("A31", "106", 6), ("B31", "107", 6), ("C31", "108", 6), ("D31", "109", 6)],
        [("A32", "110", 3), ("B32", "111", 3), ("C32", "112", 3), ("D32", "113", 3)],
        [("A33", "114", 3), ("B33", "115", 3), ("C33", "116", 3), ("D33", "117", 3)],
        [("A34", "118", 3), ("B34", "119", 3), ("C34", "120", 3), ("D34", "121", 3)],
        [("A35", "122", 3), ("B35", "123", 3), ("C35", "124", 3), ("D35", "125", 3)],
        [("A36", "126", 7)],
        [("A37", "127", 3)],
        [("A38", "128", 3)],
        [("A39", "129", 3)],
        [("A40", "130", 7)],
        # Section 5
        [("A41", "131", 1)],
        [("A42", "132", 6), ("B42", "133", 6), ("C42", "134", 6)],
        [("A43", "135", 3), ("B43", "136", 3), ("C43", "137", 3)],
        [("A44", "138", 3), ("B44", "139", 3), ("C44", "140", 3)],
        [("A45", "141", 3), ("B45", "142", 3), ("C45", "143", 3)],
        [("A46", "144", 3), ("B45", "145", 3), ("C46", "146", 3)],
        [("A47", "147", 7)],
        # Section 6
        [("A48", "148", 1)],
        [("A49", "149", 5), ("B49", "150", 5), ("C49", "151", 5), ("D49", "152", 5)],
    ]

    sheets_data = [
        ("算法合规风险自检表", sheet1_rows),
    ]
    col_widths = [[(1, 1, 6), (2, 2, 20), (3, 3, 35), (4, 4, 25), (5, 5, 20)]]

    build_form(output, strings, sheets_data, col_widths, color_scheme="blue")


# ============================================================
# FORM 2: 候选人权利管理表.xlsx
# ============================================================
def build_form2():
    output = OUTPUT_DIR + "/表单2_候选人权利管理表.xlsx"
    strings = [
        "候选人权利管理表",
        "表单说明：追踪候选人知情确认、拒绝权申请及申诉处理全流程",
        "法规依据：《个人信息保护法》第24条",
        "",
        "Sheet1：候选人知情确认追踪",
        "",
        "一、候选人知情确认台账",
        "序号", "候选人姓名", "应聘岗位", "知情书版本", "发送日期", "确认日期", "确认方式", "是否同意", "备注",
        "", "", "", "", "", "", "□邮件  □纸质  □系统弹窗", "□同意  □不同意", "",
        "", "", "", "", "", "", "□邮件  □纸质  □系统弹窗", "□同意  □不同意", "",
        "", "", "", "", "", "", "□邮件  □纸质  □系统弹窗", "□同意  □不同意", "",
        "", "", "", "", "", "", "□邮件  □纸质  □系统弹窗", "□同意  □不同意", "",
        "", "", "", "", "", "", "□邮件  □纸质  □系统弹窗", "□同意  □不同意", "",
        "", "", "", "", "", "", "□邮件  □纸质  □系统弹窗", "□同意  □不同意", "",
        "", "", "", "", "", "", "□邮件  □纸质  □系统弹窗", "□同意  □不同意", "",
        "", "", "", "", "", "", "□邮件  □纸质  □系统弹窗", "□同意  □不同意", "",
        "", "", "", "", "", "", "□邮件  □纸质  □系统弹窗", "□同意  □不同意", "",
        "", "", "", "", "", "", "□邮件  □纸质  □系统弹窗", "□同意  □不同意", "",
        "",
        "二、知情书发送统计",
        "统计周期：", "至", "",
        "发送总数", "已确认数", "同意数", "不同意数", "确认率", "同意率",
        "", "", "", "", "=D3/C3", "=E3/D3",
        "",
        "Sheet2：拒绝权申请记录",
        "",
        "三、拒绝权申请记录",
        "序号", "申请人", "应聘岗位", "申请日期", "申请类型", "涉及系统", "处理状态", "处理日期", "处理结果", "备注",
        "", "", "", "", "□拒绝自动化决策  □申请人工复核", "", "□待处理  □处理中  □已完成", "", "", "",
        "", "", "", "", "□拒绝自动化决策  □申请人工复核", "", "□待处理  □处理中  □已完成", "", "", "",
        "", "", "", "", "□拒绝自动化决策  □申请人工复核", "", "□待处理  □处理中  □已完成", "", "", "",
        "",
        "四、拒绝权申请处理时效追踪",
        "申请编号", "接收时间", "处理时限", "剩余时间", "当前状态", "是否超时", "处理人",
        "", "", "15个工作日", "=D3-C3", "", "=IF(E3<0,\"是\",\"否\")", "",
        "", "", "15个工作日", "=D4-C4", "", "=IF(E4<0,\"是\",\"否\")", "",
        "",
        "Sheet3：申诉处理表",
        "",
        "五、候选人申诉处理台账",
        "申诉编号", "候选人姓名", "应聘岗位", "申诉类型", "申诉日期", "涉及系统", "紧急程度", "处理状态", "处理时限", "处理人", "处理结果",
        "", "", "", "□结果不满意  □流程不规范  □歧视性体验  □数据安全", "", "", "□高 □中 □低", "□待处理 □处理中 □已完成", "", "", "",
        "", "", "", "□结果不满意  □流程不规范  □歧视性体验  □数据安全", "", "", "□高 □中 □低", "□待处理 □处理中 □已完成", "", "", "",
        "",
        "六、申诉处理时效预警",
        "预警级别", "触发条件", "处理措施",
        "黄色预警", "处理时限剩余≤2个工作日", "发送内部提醒",
        "橙色预警", "处理时限剩余≤1个工作日", "电话催促",
        "红色预警", "已超过处理时限", "立即升级处理",
        "",
        "七、申诉处理满意度调查",
        "处理完成后，请候选人填写以下内容：",
        "问题", "选项",
        "您对本次申诉处理的响应速度是否满意？", "□满意 □基本满意 □不满意",
        "您对本次申诉处理的结果是否满意？", "□满意 □基本满意 □不满意",
        "您对本次申诉处理的沟通方式是否满意？", "□满意 □基本满意 □不满意",
        "您对本次申诉处理是否有其他建议？", "",
    ]

    sheet1_rows = [
        [("A1", "0", 1)],
        [("A2", "1", 1)],
        [("A3", "2", 1)],
        [("A4", "3", 1)],
        [("A5", "4", 1)],
        [("A6", "5", 1), ("B6", "6", 6), ("C6", "7", 6), ("D6", "8", 6), ("E6", "9", 6), ("F6", "10", 6), ("G6", "11", 6), ("H6", "12", 6), ("I6", "13", 6)],
        [("A7", "14", 3), ("B7", "15", 3), ("C7", "16", 3), ("D7", "17", 3), ("E7", "18", 3), ("F7", "19", 3), ("G7", "20", 3), ("H7", "21", 3), ("I7", "22", 3)],
        [("A8", "23", 3), ("B8", "24", 3), ("C8", "25", 3), ("D8", "26", 3), ("E8", "27", 3), ("F8", "28", 3), ("G8", "29", 3), ("H8", "30", 3), ("I8", "31", 3)],
        [("A9", "32", 3), ("B9", "33", 3), ("C9", "34", 3), ("D9", "35", 3), ("E9", "36", 3), ("F9", "37", 3), ("G9", "38", 3), ("H9", "39", 3), ("I9", "40", 3)],
        [("A10", "41", 3), ("B10", "42", 3), ("C10", "43", 3), ("D10", "44", 3), ("E10", "45", 3), ("F10", "46", 3), ("G10", "47", 3), ("H10", "48", 3), ("I10", "49", 3)],
        [("A11", "50", 3), ("B11", "51", 3), ("C11", "52", 3), ("D11", "53", 3), ("E11", "54", 3), ("F11", "55", 3), ("G11", "56", 3), ("H11", "57", 3), ("I11", "58", 3)],
        [("A12", "59", 3), ("B12", "60", 3), ("C12", "61", 3), ("D12", "62", 3), ("E12", "63", 3), ("F12", "64", 3), ("G12", "65", 3), ("H12", "66", 3), ("I12", "67", 3)],
        [("A13", "68", 3), ("B13", "69", 3), ("C13", "70", 3), ("D13", "71", 3), ("E13", "72", 3), ("F13", "73", 3), ("G13", "74", 3), ("H13", "75", 3), ("I13", "76", 3)],
        [("A14", "77", 3), ("B14", "78", 3), ("C14", "79", 3), ("D14", "80", 3), ("E14", "81", 3), ("F14", "82", 3), ("G14", "83", 3), ("H14", "84", 3), ("I14", "85", 3)],
        [("A15", "86", 3), ("B15", "87", 3), ("C15", "88", 3), ("D15", "89", 3), ("E15", "90", 3), ("F15", "91", 3), ("G15", "92", 3), ("H15", "93", 3), ("I15", "94", 3)],
        [("A16", "95", 7)],
        [("A17", "96", 1)],
        [("A18", "97", 5), ("B18", "98", 5), ("C18", "99", 5), ("D18", "100", 5), ("E18", "101", 5), ("F18", "102", 5)],
        [("A19", "103", 3), ("B19", "104", 3), ("C19", "105", 3), ("D19", "106", 3), ("E19", "107", 3), ("F19", "108", 3)],
        [("A20", "109", 7)],
    ]

    # For multi-sheet, we'll handle each sheet separately
    work_dir = "/tmp/xlsx_build"
    copy_template(work_dir)
    create_styles_xml(work_dir, "blue")
    str_mapping = create_shared_strings_xml(work_dir, strings)

    updated_strings = []
    for s in strings:
        if s in str_mapping:
            updated_strings.append((s, str_mapping[s]))

    # Sheet 1
    sheet1 = sheet1_rows

    # Sheet 2
    sheet2_strings_start = 110
    sheet2_rows = [
        [("A1", "0", 1)],
        [("A2", "1", 1)],
        [("A3", "2", 1)],
        [("A4", "3", 1)],
        [("A5", "4", 1), ("B5", "5", 6), ("C5", "6", 6), ("D5", "7", 6), ("E5", "8", 6), ("F5", "9", 6), ("G5", "10", 6), ("H5", "11", 6), ("I5", "12", 6), ("J5", "13", 6)],
        [("A6", "14", 3), ("B6", "15", 3), ("C6", "16", 3), ("D6", "17", 3), ("E6", "18", 3), ("F6", "19", 3), ("G6", "20", 3), ("H6", "21", 3), ("I6", "22", 3), ("J6", "23", 3)],
        [("A7", "24", 3), ("B7", "25", 3), ("C7", "26", 3), ("D7", "27", 3), ("E7", "28", 3), ("F7", "29", 3), ("G7", "30", 3), ("H7", "31", 3), ("I7", "32", 3), ("J7", "33", 3)],
        [("A8", "34", 3), ("B8", "35", 3), ("C8", "36", 3), ("D8", "37", 3), ("E8", "38", 3), ("F8", "39", 3), ("G8", "40", 3), ("H8", "41", 3), ("I8", "42", 3), ("J8", "43", 3)],
        [("A9", "44", 7)],
        [("A10", "45", 1)],
        [("A11", "46", 6), ("B11", "47", 6), ("C11", "48", 6), ("D11", "49", 6), ("E11", "50", 6), ("F11", "51", 6)],
        [("A12", "52", 3), ("B12", "53", 3), ("C12", "54", 3), ("D12", "55", 3), ("E12", "56", 3), ("F12", "57", 3)],
        [("A13", "58", 3), ("B13", "59", 3), ("C13", "60", 3), ("D13", "61", 3), ("E13", "62", 3), ("F13", "63", 3)],
        [("A14", "64", 7)],
    ]

    # Sheet 3
    sheet3_rows = [
        [("A1", "0", 1)],
        [("A2", "1", 1)],
        [("A3", "2", 1)],
        [("A4", "3", 1)],
        [("A5", "4", 1), ("B5", "5", 6), ("C5", "6", 6), ("D5", "7", 6), ("E5", "8", 6), ("F5", "9", 6), ("G5", "10", 6), ("H5", "11", 6), ("I5", "12", 6), ("J5", "13", 6), ("K5", "14", 6)],
        [("A6", "15", 3), ("B6", "16", 3), ("C6", "17", 3), ("D6", "18", 3), ("E6", "19", 3), ("F6", "20", 3), ("G6", "21", 3), ("H6", "22", 3), ("I6", "23", 3), ("J6", "24", 3), ("K6", "25", 3)],
        [("A7", "26", 3), ("B7", "27", 3), ("C7", "28", 3), ("D7", "29", 3), ("E7", "30", 3), ("F7", "31", 3), ("G7", "32", 3), ("H7", "33", 3), ("I7", "34", 3), ("J7", "35", 3), ("K7", "36", 3)],
        [("A8", "37", 7)],
        [("A9", "38", 1)],
        [("A10", "39", 6), ("B10", "40", 6), ("C10", "41", 6)],
        [("A11", "42", 3), ("B11", "43", 3), ("C11", "44", 3)],
        [("A12", "45", 3), ("B12", "46", 3), ("C12", "47", 3)],
        [("A13", "48", 3), ("B13", "49", 3), ("C13", "50", 3)],
        [("A14", "51", 7)],
        [("A15", "52", 1)],
        [("A16", "53", 1)],
        [("A17", "54", 6), ("B17", "55", 6)],
        [("A18", "56", 3), ("B18", "57", 3)],
        [("A19", "58", 3), ("B19", "59", 3)],
        [("A20", "60", 3), ("B20", "61", 3)],
        [("A21", "62", 3), ("B21", "63", 3)],
    ]

    # Write sheet XMLs
    for i, rows in enumerate([sheet1_rows, sheet2_rows, sheet3_rows], 1):
        sheet_path = os.path.join(work_dir, "xl", "worksheets", "sheet" + str(i) + ".xml")
        widths = [(1, 12, 15)] if i > 1 else [(1, 1, 8), (2, 2, 15), (3, 3, 15), (4, 4, 12), (5, 5, 12), (6, 6, 12), (7, 7, 12), (8, 8, 12), (9, 9, 15)]
        content = make_sheet_xml(rows, freeze=(i==1), col_widths=widths)
        with open(sheet_path, 'w', encoding='utf-8') as f:
            f.write(content)

    # Update workbook
    sheets_info = [
        ("候选人知情确认追踪", 1, 4),
        ("拒绝权申请记录", 2, 5),
        ("申诉处理表", 3, 6),
    ]
    update_workbook_xml(work_dir, sheets_info)
    update_workbook_rels(work_dir, sheets_info)
    update_content_types(work_dir, 3)

    os.makedirs(os.path.dirname(output), exist_ok=True)
    pack_xlsx(work_dir, output)
    print("Created: " + output)


# ============================================================
# FORM 3: 算法偏见审计工作表.xlsx
# ============================================================
def build_form3():
    output = OUTPUT_DIR + "/表单3_算法偏见审计工作表.xlsx"
    strings = [
        "算法偏见审计工作表",
        "表单说明：定期审查AI招聘系统的数据来源、模型公平性，并记录偏见修复情况",
        "使用时机：算法上线前审查、上线后每半年定期审计、发现投诉后专项检查",
        "",
        "Sheet1：数据来源审查表",
        "",
        "一、数据溯源检查项（8项）",
        ("序号", "检查项", "检查方法", "合格标准", "检查结果", "问题描述", "改进建议"),
        ("1", "数据来源合法性", "确认数据采集时的授权情况", "有候选人明确授权", "□通过 □待改进", "", ""),
        ("2", "数据采集最小化", "审查采集的数据字段", "仅采集与岗位相关必要数据", "□通过 □待改进", "", ""),
        ("3", "历史数据偏见审查", "统计分析不同群体通过率", "各群体通过率差异<15%", "□通过 □待改进", "", ""),
        ("4", "标签质量审查", "多人标注一致性检验", "Kappa值>0.6", "□通过 □待改进", "", ""),
        ("5", "代理变量检测", "变量与受保护属性相关性分析", "无高度相关变量（r<0.3）", "□通过 □待改进", "", ""),
        ("6", "数据更新机制", "确认数据更新频率和方式", "定期更新、来源可追溯", "□通过 □待改进", "", ""),
        ("7", "数据存储安全", "审查数据存储和访问权限", "加密存储、分级访问", "□通过 □待改进", "", ""),
        ("8", "数据删除机制", "确认候选人数据删除请求的处理", "规定时间内完成删除", "□通过 □待改进", "", ""),
        "",
        "数据审查结论：□合格  □基本合格  □不合格",
        "风险等级：□低  □中  □高",
        "审查人：", "审查日期：",
        "",
        "Sheet2：模型公平性测试表",
        "",
        "二、模型公平性测试表",
        "",
        "2.1 群体差异分析",
        "受保护属性", "群体A通过率", "群体B通过率", "差异率", "合格标准（<15%）", "是否合格",
        "性别", "__%", "__%", "=ABS(B3-C3)", "<15%", "=IF(D3<0.15,\"是\",\"否\")",
        "年龄", "__%", "__%", "=ABS(B4-C4)", "<15%", "=IF(D4<0.15,\"是\",\"否\")",
        "学历", "__%", "__%", "=ABS(B5-C5)", "<15%", "=IF(D5<0.15,\"是\",\"否\")",
        "地域", "__%", "__%", "=ABS(B6-C6)", "<15%", "=IF(D6<0.15,\"是\",\"否\")",
        "",
        "2.2 公平性指标测试",
        "公平性指标", "定义", "阈值", "实测值", "合格",
        "统计均等", "不同群体正例率相等", "差异<10%", "", "=IF(ABS(D11)<0.1,\"是\",\"否\")",
        "机会均等", "不同群体真阳性率相等", "差异<10%", "", "=IF(ABS(D12)<0.1,\"是\",\"否\")",
        "预测均等", "不同群体预测值分布相同", "差异<10%", "", "=IF(ABS(D13)<0.1,\"是\",\"否\")",
        "个性化公平", "相似个体有相似的预测", "<0.1", "", "=IF(ABS(D14)<0.1,\"是\",\"否\")",
        "",
        "2.3 A/B测试（呈现方式偏见）",
        "测试批次", "简历顺序", "通过率", "差异显著性（p>0.05合格）",
        "A批次", "原始顺序", "__%", "",
        "B批次", "随机打乱", "__%", "",
        "",
        "Sheet3：偏见修复记录",
        "",
        "三、偏见修复记录",
        "序号", "偏见类型", "发现日期", "发现来源", "影响评估", "修复措施", "修复状态", "完成日期", "验证结果",
        ("", "", "", "□内部审计  □投诉  □定期审查", "□高 □中 □低", "", "□待修复 □修复中 □已完成", "", ""),
        ("", "", "", "□内部审计  □投诉  □定期审查", "□高 □中 □低", "", "□待修复 □修复中 □已完成", "", ""),
        ("", "", "", "□内部审计  □投诉  □定期审查", "□高 □中 □低", "", "□待修复 □修复中 □已完成", "", ""),
        "",
        "四、偏见来源分类树",
        "偏见来源", "类型", "说明",
        "数据层偏见", "历史数据偏见", "反映过往的歧视",
        "数据层偏见", "样本偏差", "训练数据不能代表真实人群",
        "数据层偏见", "标签偏见", "标注质量差",
        "数据层偏见", "缺失数据偏见", "某些群体数据缺失",
        "算法层偏见", "特征选择", "选了有偏见的特征",
        "算法层偏见", "目标函数", "优化了错误的指标",
        "算法层偏见", "模型假设", "模型结构引入的偏见",
        "算法层偏见", "评估指标", "评估标准本身有偏见",
        "人类层偏见", "认知偏见", "刻板印象、光环效应",
        "人类层偏见", "选择性注意", "关注某些信息忽略其他",
        "人类层偏见", "确认偏见", "寻找支持自己判断的证据",
        "人类层偏见", "群体偏见", "群体内偏好",
        "系统层偏见", "设计流程偏见", "招聘流程结构化不足",
        "系统层偏见", "渠道偏见", "只从某些渠道招募",
        "系统层偏见", "反馈循环", "算法加剧现有偏见",
    ]

    work_dir = "/tmp/xlsx_build"
    copy_template(work_dir)
    create_styles_xml(work_dir, "green")
    str_mapping = create_shared_strings_xml(work_dir, strings)

    # Sheet 1
    s1_rows = [
        [("A1", "0", 1)],
        [("A2", "1", 1)],
        [("A3", "2", 1)],
        [("A4", "3", 1)],
        [("A5", "4", 1), ("B5", "5", 6), ("C5", "6", 6), ("D5", "7", 6), ("E5", "8", 6), ("F5", "9", 6), ("G5", "10", 6)],
        [("A6", "11", 3), ("B6", "12", 3), ("C6", "13", 3), ("D6", "14", 3), ("E6", "15", 3), ("F6", "16", 3), ("G6", "17", 3)],
        [("A7", "18", 3), ("B7", "19", 3), ("C7", "20", 3), ("D7", "21", 3), ("E7", "22", 3), ("F7", "23", 3), ("G7", "24", 3)],
        [("A8", "25", 3), ("B8", "26", 3), ("C8", "27", 3), ("D8", "28", 3), ("E8", "29", 3), ("F8", "30", 3), ("G8", "31", 3)],
        [("A9", "32", 3), ("B9", "33", 3), ("C9", "34", 3), ("D9", "35", 3), ("E9", "36", 3), ("F9", "37", 3), ("G9", "38", 3)],
        [("A10", "39", 3), ("B10", "40", 3), ("C10", "41", 3), ("D10", "42", 3), ("E10", "43", 3), ("F10", "44", 3), ("G10", "45", 3)],
        [("A11", "46", 3), ("B11", "47", 3), ("C11", "48", 3), ("D11", "49", 3), ("E11", "50", 3), ("F11", "51", 3), ("G11", "52", 3)],
        [("A12", "53", 3), ("B12", "54", 3), ("C12", "55", 3), ("D12", "56", 3), ("E12", "57", 3), ("F12", "58", 3), ("G12", "59", 3)],
        [("A13", "60", 3), ("B13", "61", 3), ("C13", "62", 3), ("D13", "63", 3), ("E13", "64", 3), ("F13", "65", 3), ("G13", "66", 3)],
        [("A14", "67", 7)],
        [("A15", "68", 5), ("B15", "69", 5)],
        [("A16", "70", 5), ("B16", "71", 5)],
        [("A17", "72", 5), ("B17", "73", 5)],
    ]

    s2_rows = [
        [("A1", "0", 1)],
        [("A2", "1", 1)],
        [("A3", "2", 1)],
        [("A4", "3", 1)],
        [("A5", "4", 1)],
        [("A6", "5", 1), ("B6", "6", 6), ("C6", "7", 6), ("D6", "8", 6), ("E6", "9", 6), ("F6", "10", 6)],
        [("A7", "11", 3), ("B7", "12", 3), ("C7", "13", 3), ("D7", "14", 3), ("E7", "15", 3), ("F7", "16", 3)],
        [("A8", "17", 3), ("B8", "18", 3), ("C8", "19", 3), ("D8", "20", 3), ("E8", "21", 3), ("F8", "22", 3)],
        [("A9", "23", 3), ("B9", "24", 3), ("C9", "25", 3), ("D9", "26", 3), ("E9", "27", 3), ("F9", "28", 3)],
        [("A10", "29", 3), ("B10", "30", 3), ("C10", "31", 3), ("D10", "32", 3), ("E10", "33", 3), ("F10", "34", 3)],
        [("A11", "35", 7)],
        [("A12", "36", 1)],
        [("A13", "37", 1), ("B13", "38", 6), ("C13", "39", 6), ("D13", "40", 6), ("E13", "41", 6)],
        [("A14", "42", 3), ("B14", "43", 3), ("C14", "44", 3), ("D14", "45", 3), ("E14", "46", 3)],
        [("A15", "47", 3), ("B15", "48", 3), ("C15", "49", 3), ("D15", "50", 3), ("E15", "51", 3)],
        [("A16", "52", 3), ("B16", "53", 3), ("C16", "54", 3), ("D16", "55", 3), ("E16", "56", 3)],
        [("A17", "57", 3), ("B17", "58", 3), ("C17", "59", 3), ("D17", "60", 3), ("E17", "61", 3)],
        [("A18", "62", 3), ("B18", "63", 3), ("C18", "64", 3), ("D18", "65", 3), ("E18", "66", 3)],
        [("A19", "67", 7)],
        [("A20", "68", 1)],
        [("A21", "69", 1), ("B21", "70", 6), ("C21", "71", 6), ("D21", "72", 6), ("E21", "73", 6)],
        [("A22", "74", 3), ("B22", "75", 3), ("C22", "76", 3), ("D22", "77", 3), ("E22", "78", 3)],
        [("A23", "79", 3), ("B23", "80", 3), ("C23", "81", 3), ("D23", "82", 3), ("E23", "83", 3)],
        [("A24", "84", 7)],
    ]

    s3_rows = [
        [("A1", "0", 1)],
        [("A2", "1", 1)],
        [("A3", "2", 1)],
        [("A4", "3", 1), ("B4", "4", 6), ("C4", "5", 6), ("D4", "6", 6), ("E4", "7", 6), ("F4", "8", 6), ("G4", "9", 6), ("H4", "10", 6), ("I4", "11", 6)],
        [("A5", "12", 3), ("B5", "13", 3), ("C5", "14", 3), ("D5", "15", 3), ("E5", "16", 3), ("F5", "17", 3), ("G5", "18", 3), ("H5", "19", 3), ("I5", "20", 3)],
        [("A6", "21", 3), ("B6", "22", 3), ("C6", "23", 3), ("D6", "24", 3), ("E6", "25", 3), ("F6", "26", 3), ("G6", "27", 3), ("H6", "28", 3), ("I6", "29", 3)],
        [("A7", "30", 3), ("B7", "31", 3), ("C7", "32", 3), ("D7", "33", 3), ("E7", "34", 3), ("F7", "35", 3), ("G7", "36", 3), ("H7", "37", 3), ("I7", "38", 3)],
        [("A8", "39", 7)],
        [("A9", "40", 1)],
        [("A10", "41", 6), ("B10", "42", 6), ("C10", "43", 6)],
        [("A11", "44", 3), ("B11", "45", 3), ("C11", "46", 3)],
        [("A12", "47", 3), ("B12", "48", 3), ("C12", "49", 3)],
        [("A13", "50", 3), ("B13", "51", 3), ("C13", "52", 3)],
        [("A14", "53", 3), ("B14", "54", 3), ("C14", "55", 3)],
        [("A15", "56", 3), ("B15", "57", 3), ("C15", "58", 3)],
        [("A16", "59", 3), ("B16", "60", 3), ("C16", "61", 3)],
        [("A17", "62", 3), ("B17", "63", 3), ("C17", "64", 3)],
        [("A18", "65", 3), ("B18", "66", 3), ("C18", "67", 3)],
        [("A19", "68", 3), ("B19", "69", 3), ("C19", "70", 3)],
        [("A20", "71", 3), ("B20", "72", 3), ("C20", "73", 3)],
        [("A21", "74", 3), ("B21", "75", 3), ("C21", "76", 3)],
        [("A22", "77", 3), ("B22", "78", 3), ("C22", "79", 3)],
    ]

    for i, rows in enumerate([s1_rows, s2_rows, s3_rows], 1):
        sheet_path = os.path.join(work_dir, "xl", "worksheets", "sheet" + str(i) + ".xml")
        widths = [(1, 10, 15)]
        content = make_sheet_xml(rows, freeze=(i==1), col_widths=widths)
        with open(sheet_path, 'w', encoding='utf-8') as f:
            f.write(content)

    sheets_info = [
        ("数据来源审查表", 1, 4),
        ("模型公平性测试表", 2, 5),
        ("偏见修复记录", 3, 6),
    ]
    update_workbook_xml(work_dir, sheets_info)
    update_workbook_rels(work_dir, sheets_info)
    update_content_types(work_dir, 3)

    os.makedirs(os.path.dirname(output), exist_ok=True)
    pack_xlsx(work_dir, output)
    print("Created: " + output)


# ============================================================
# FORM 4: 算法备案管理表.xlsx
# ============================================================
def build_form4():
    output = OUTPUT_DIR + "/表单4_算法备案管理表.xlsx"
    strings = [
        "算法备案管理表",
        "表单说明：追踪算法备案进度，核对备案材料清单，管理备案时间轴",
        "法规依据：《互联网信息服务算法推荐管理规定》第17条",
        "",
        "Sheet1：备案进度追踪",
        "",
        "一、备案基本信息",
        "算法名称：", "算法版本：", "备案主体：", "备案负责人：",
        "联系电话：", "联系邮箱：", "计划提交日期：", "实际提交日期：",
        "",
        "二、备案进度追踪",
        "阶段", "开始日期", "计划完成", "实际完成", "状态", "责任部门", "备注",
        ("准备阶段", "", "", "", "□进行中 □延误 □完成", "", ""),
        ("提交阶段", "", "", "", "□进行中 □延误 □完成", "", ""),
        ("审核阶段", "", "", "", "□进行中 □延误 □完成", "", ""),
        ("公示阶段", "", "", "", "□进行中 □延误 □完成", "", ""),
        "",
        "三、关键时间节点",
        "里程碑", "计划时间", "实际时间", "是否完成", "备注",
        ("备案启动", "", "", "□是 □否", ""),
        ("材料收集完成", "", "", "□是 □否", ""),
        ("内部审核通过", "", "", "□是 □否", ""),
        ("提交申请", "", "", "□是 □否", ""),
        ("获取备案号", "", "", "□是 □否", ""),
        ("官网公示", "", "", "□是 □否", ""),
        "",
        "Sheet2：材料清单核对",
        "",
        "四、基础信息材料",
        "材料名称", "材料要求", "准备状态", "负责人", "完成日期", "备注",
        ("企业营业执照", "复印件加盖公章", "□已准备 □待准备", "", "", ""),
        ("算法安全负责人信息", "姓名、职位、联系方式", "□已准备 □待准备", "", "", ""),
        ("算法安全团队架构", "组织架构图", "□已准备 □待准备", "", "", ""),
        ("算法名称和版本", "", "□已准备 □待准备", "", "", ""),
        ("算法功能描述", "详细功能说明", "□已准备 □待准备", "", "", ""),
        ("算法应用场景", "具体应用场景描述", "□已准备 □待准备", "", "", ""),
        "",
        "五、技术材料",
        "材料名称", "材料要求", "准备状态", "负责人", "完成日期", "备注",
        ("算法工作原理", "技术架构和流程图", "□已准备 □待准备", "", "", ""),
        ("训练数据来源", "数据来源和类型", "□已准备 □待准备", "", "", ""),
        ("模型特征维度", "使用的特征列表", "□已准备 □待准备", "", "", ""),
        ("目标函数说明", "优化目标和指标", "□已准备 □待准备", "", "", ""),
        ("数据采集清单", "采集的数据类型和字段", "□已准备 □待准备", "", "", ""),
        ("数据存储方案", "存储方式和期限", "□已准备 □待准备", "", "", ""),
        ("数据删除机制", "删除流程和验证", "□已准备 □待准备", "", "", ""),
        "",
        "六、风险防控与权益保护材料",
        "材料名称", "材料要求", "准备状态", "负责人", "完成日期", "备注",
        ("公平性测试报告", "最近一次审计报告", "□已准备 □待准备", "", "", ""),
        ("偏见检测记录", "偏见检测方法和结果", "□已准备 □待准备", "", "", ""),
        ("纠错机制说明", "问题发现和整改流程", "□已准备 □待准备", "", "", ""),
        ("安全评估报告", "系统安全评估", "□已准备 □待准备", "", "", ""),
        ("应急响应方案", "突发事件处理预案", "□已准备 □待准备", "", "", ""),
        ("日志留存方案", "操作日志记录和保存", "□已准备 □待准备", "", "", ""),
        ("隐私政策", "完整版隐私政策", "□已准备 □待准备", "", "", ""),
        ("告知同意机制", "告知方式和记录", "□已准备 □待准备", "", "", ""),
        ("权利行使渠道", "候选人权利申请方式", "□已准备 □待准备", "", "", ""),
        ("投诉渠道", "投诉方式和受理方式", "□已准备 □待准备", "", "", ""),
        ("处理流程", "投诉处理SOP", "□已准备 □待准备", "", "", ""),
        ("处理时效承诺", "处理时限承诺", "□已准备 □待准备", "", "", ""),
        "",
        "七、备案材料自查",
        "自查项", "合格标准", "自查结果",
        ("材料完整性", "上述四类材料齐全", "□通过 □待补充"),
        ("材料真实性", "所有材料真实有效", "□通过 □待核实"),
        ("材料规范性", "格式符合备案要求", "□通过 □待调整"),
        ("时效性", "材料为最新版本", "□通过 □待更新"),
        "",
        "Sheet3：备案时间轴",
        "",
        "八、备案流程时间轴",
        "阶段", "时间节点", "主要任务", "责任部门", "完成标志",
        ("阶段一：准备阶段", "第1-4周", "组建备案工作小组、收集整理备案材料、内部审核材料", "HR+IT", "成立工作小组"),
        ("阶段二：提交阶段", "第5-6周", "登录备案系统、填写备案信息、上传备案材料、提交备案申请", "IT+法务", "提交成功"),
        ("阶段三：审核阶段", "第7-12周", "等待监管部门审核、补充/修改材料（如需要）、获取备案号", "—", "收到备案号"),
        ("阶段四：公示与维护", "第13周起", "备案号公示（官网/系统页面）、备案信息变更管理、定期更新备案材料", "市场+IT", "官网公示"),
        "",
        "九、备案后维护清单",
        "维护事项", "触发条件", "处理时限", "责任部门", "最近维护日期",
        ("备案信息变更", "算法重大更新/主体变更", "10个工作日内", "", ""),
        ("材料更新", "法规要求/系统变更", "30天内", "", ""),
        ("年度复核", "每年定期", "每年X月前", "", ""),
        ("安全报告", "监管部门要求", "按要求", "", ""),
    ]

    work_dir = "/tmp/xlsx_build"
    copy_template(work_dir)
    create_styles_xml(work_dir, "orange")
    str_mapping = create_shared_strings_xml(work_dir, strings)

    s1_rows = [
        [("A1", "0", 1)],
        [("A2", "1", 1)],
        [("A3", "2", 1)],
        [("A4", "3", 1)],
        [("A5", "4", 1)],
        [("A6", "5", 5), ("B6", "6", 5), ("C6", "7", 5), ("D6", "8", 5)],
        [("A7", "9", 5), ("B7", "10", 5), ("C7", "11", 5), ("D7", "12", 5)],
        [("A8", "13", 7)],
        [("A9", "14", 1), ("B9", "15", 6), ("C9", "16", 6), ("D9", "17", 6), ("E9", "18", 6), ("F9", "19", 6), ("G9", "20", 6)],
        [("A10", "21", 3), ("B10", "22", 3), ("C10", "23", 3), ("D10", "24", 3), ("E10", "25", 3), ("F10", "26", 3), ("G10", "27", 3)],
        [("A11", "28", 3), ("B11", "29", 3), ("C11", "30", 3), ("D11", "31", 3), ("E11", "32", 3), ("F11", "33", 3), ("G11", "34", 3)],
        [("A12", "35", 3), ("B12", "36", 3), ("C12", "37", 3), ("D12", "38", 3), ("E12", "39", 3), ("F12", "40", 3), ("G12", "41", 3)],
        [("A13", "42", 3), ("B13", "43", 3), ("C13", "44", 3), ("D13", "45", 3), ("E13", "46", 3), ("F13", "47", 3), ("G13", "48", 3)],
        [("A14", "49", 7)],
        [("A15", "50", 1), ("B15", "51", 6), ("C15", "52", 6), ("D15", "53", 6), ("E15", "54", 6)],
        [("A16", "55", 3), ("B16", "56", 3), ("C16", "57", 3), ("D16", "58", 3), ("E16", "59", 3)],
        [("A17", "60", 3), ("B17", "61", 3), ("C17", "62", 3), ("D17", "63", 3), ("E17", "64", 3)],
        [("A18", "65", 3), ("B18", "66", 3), ("C18", "67", 3), ("D18", "68", 3), ("E18", "69", 3)],
        [("A19", "70", 3), ("B19", "71", 3), ("C19", "72", 3), ("D19", "73", 3), ("E19", "74", 3)],
        [("A20", "75", 3), ("B20", "76", 3), ("C20", "77", 3), ("D20", "78", 3), ("E20", "79", 3)],
        [("A21", "80", 3), ("B21", "81", 3), ("C21", "82", 3), ("D21", "83", 3), ("E21", "84", 3)],
    ]

    s2_rows = [
        [("A1", "0", 1)],
        [("A2", "1", 1)],
        [("A3", "2", 1)],
        [("A4", "3", 1)],
        [("A5", "4", 1), ("B5", "5", 6), ("C5", "6", 6), ("D5", "7", 6), ("E5", "8", 6), ("F5", "9", 6)],
        [("A6", "10", 3), ("B6", "11", 3), ("C6", "12", 3), ("D6", "13", 3), ("E6", "14", 3), ("F6", "15", 3)],
        [("A7", "16", 3), ("B7", "17", 3), ("C7", "18", 3), ("D7", "19", 3), ("E7", "20", 3), ("F7", "21", 3)],
        [("A8", "22", 3), ("B8", "23", 3), ("C8", "24", 3), ("D8", "25", 3), ("E8", "26", 3), ("F8", "27", 3)],
        [("A9", "28", 3), ("B9", "29", 3), ("C9", "30", 3), ("D9", "31", 3), ("E9", "32", 3), ("F9", "33", 3)],
        [("A10", "34", 3), ("B10", "35", 3), ("C10", "36", 3), ("D10", "37", 3), ("E10", "38", 3), ("F10", "39", 3)],
        [("A11", "40", 3), ("B11", "41", 3), ("C11", "42", 3), ("D11", "43", 3), ("E11", "44", 3), ("F11", "45", 3)],
        [("A12", "46", 7)],
        [("A13", "47", 1), ("B13", "48", 6), ("C13", "49", 6), ("D13", "50", 6), ("E13", "51", 6), ("F13", "52", 6)],
        [("A14", "53", 3), ("B14", "54", 3), ("C14", "55", 3), ("D14", "56", 3), ("E14", "57", 3), ("F14", "58", 3)],
        [("A15", "59", 3), ("B15", "60", 3), ("C15", "61", 3), ("D15", "62", 3), ("E15", "63", 3), ("F15", "64", 3)],
        [("A16", "65", 3), ("B16", "66", 3), ("C16", "67", 3), ("D16", "68", 3), ("E16", "69", 3), ("F16", "70", 3)],
        [("A17", "71", 3), ("B17", "72", 3), ("C17", "73", 3), ("D17", "74", 3), ("E17", "75", 3), ("F17", "76", 3)],
        [("A18", "77", 3), ("B18", "78", 3), ("C18", "79", 3), ("D18", "80", 3), ("E18", "81", 3), ("F18", "82", 3)],
        [("A19", "83", 3), ("B19", "84", 3), ("C19", "85", 3), ("D19", "86", 3), ("E19", "87", 3), ("F19", "88", 3)],
        [("A20", "89", 7)],
        [("A21", "90", 1), ("B21", "91", 6), ("C21", "92", 6), ("D21", "93", 6), ("E21", "94", 6), ("F21", "95", 6)],
        [("A22", "96", 3), ("B22", "97", 3), ("C22", "98", 3), ("D22", "99", 3), ("E22", "100", 3), ("F22", "101", 3)],
        [("A23", "102", 3), ("B23", "103", 3), ("C23", "104", 3), ("D23", "105", 3), ("E23", "106", 3), ("F23", "107", 3)],
        [("A24", "108", 3), ("B24", "109", 3), ("C24", "110", 3), ("D24", "111", 3), ("E24", "112", 3), ("F24", "113", 3)],
        [("A25", "114", 3), ("B25", "115", 3), ("C25", "116", 3), ("D25", "117", 3), ("E25", "118", 3), ("F25", "119", 3)],
        [("A26", "120", 3), ("B26", "121", 3), ("C26", "122", 3), ("D26", "123", 3), ("E26", "124", 3), ("F26", "125", 3)],
        [("A27", "126", 3), ("B27", "127", 3), ("C27", "128", 3), ("D27", "129", 3), ("E27", "130", 3), ("F27", "131", 3)],
        [("A28", "132", 3), ("B28", "133", 3), ("C28", "134", 3), ("D28", "135", 3), ("E28", "136", 3), ("F28", "137", 3)],
        [("A29", "138", 3), ("B29", "139", 3), ("C29", "140", 3), ("D29", "141", 3), ("E29", "142", 3), ("F29", "143", 3)],
        [("A30", "144", 3), ("B30", "145", 3), ("C30", "146", 3), ("D30", "147", 3), ("E30", "148", 3), ("F30", "149", 3)],
        [("A31", "150", 3), ("B31", "151", 3), ("C31", "152", 3), ("D31", "153", 3), ("E31", "154", 3), ("F31", "155", 3)],
        [("A32", "156", 3), ("B32", "157", 3), ("C32", "158", 3), ("D32", "159", 3), ("E32", "160", 3), ("F32", "161", 3)],
        [("A33", "162", 7)],
        [("A34", "163", 1), ("B34", "164", 6), ("C34", "165", 6)],
        [("A35", "166", 3), ("B35", "167", 3), ("C35", "168", 3)],
        [("A36", "169", 3), ("B36", "170", 3), ("C36", "171", 3)],
        [("A37", "172", 3), ("B37", "173", 3), ("C37", "174", 3)],
        [("A38", "175", 3), ("B38", "176", 3), ("C38", "177", 3)],
    ]

    s3_rows = [
        [("A1", "0", 1)],
        [("A2", "1", 1)],
        [("A3", "2", 1)],
        [("A4", "3", 1)],
        [("A5", "4", 1), ("B5", "5", 6), ("C5", "6", 6), ("D5", "7", 6), ("E5", "8", 6)],
        [("A6", "9", 3), ("B6", "10", 3), ("C6", "11", 3), ("D6", "12", 3), ("E6", "13", 3)],
        [("A7", "14", 3), ("B7", "15", 3), ("C7", "16", 3), ("D7", "17", 3), ("E7", "18", 3)],
        [("A8", "19", 3), ("B8", "20", 3), ("C8", "21", 3), ("D8", "22", 3), ("E8", "23", 3)],
        [("A9", "24", 3), ("B9", "25", 3), ("C9", "26", 3), ("D9", "27", 3), ("E9", "28", 3)],
        [("A10", "29", 7)],
        [("A11", "30", 1), ("B11", "31", 6), ("C11", "32", 6), ("D11", "33", 6), ("E11", "34", 6)],
        [("A12", "35", 3), ("B12", "36", 3), ("C12", "37", 3), ("D12", "38", 3), ("E12", "39", 3)],
        [("A13", "40", 3), ("B13", "41", 3), ("C13", "42", 3), ("D13", "43", 3), ("E13", "44", 3)],
        [("A14", "45", 3), ("B14", "46", 3), ("C14", "47", 3), ("D14", "48", 3), ("E14", "49", 3)],
        [("A15", "50", 3), ("B15", "51", 3), ("C15", "52", 3), ("D15", "53", 3), ("E15", "54", 3)],
    ]

    for i, rows in enumerate([s1_rows, s2_rows, s3_rows], 1):
        sheet_path = os.path.join(work_dir, "xl", "worksheets", "sheet" + str(i) + ".xml")
        widths = [(1, 10, 15)]
        content = make_sheet_xml(rows, freeze=(i==1), col_widths=widths)
        with open(sheet_path, 'w', encoding='utf-8') as f:
            f.write(content)

    sheets_info = [
        ("备案进度追踪", 1, 4),
        ("材料清单核对", 2, 5),
        ("备案时间轴", 3, 6),
    ]
    update_workbook_xml(work_dir, sheets_info)
    update_workbook_rels(work_dir, sheets_info)
    update_content_types(work_dir, 3)

    os.makedirs(os.path.dirname(output), exist_ok=True)
    pack_xlsx(work_dir, output)
    print("Created: " + output)


# ============================================================
# FORM 5: 合规培训记录表.xlsx
# ============================================================
def build_form5():
    output = OUTPUT_DIR + "/表单5_合规培训记录表.xlsx"
    strings = [
        "合规培训记录表",
        "表单说明：记录HR团队合规培训完成情况，追踪培训效果",
        "",
        "Sheet1：HR团队培训记录",
        "",
        "一、基础知识培训（全员必修）",
        "培训内容", "培训形式", "培训频率", "完成情况", "完成日期", "考核结果", "备注",
        ("《个人信息保护法》核心条款", "线上课程", "入职必修", "□已完成 □待完成", "", "□合格 □不合格", ""),
        ("自动化决策合规要求", "线上课程", "每年一次", "□已完成 □待完成", "", "□合格 □不合格", ""),
        ("候选人权利保障指南", "线下培训", "每年一次", "□已完成 □待完成", "", "□合格 □不合格", ""),
        ("公平就业基本概念", "线上课程", "入职必修", "□已完成 □待完成", "", "□合格 □不合格", ""),
        ("",
        ("二、操作技能培训（岗位必修）",
        ("培训内容", "培训形式", "培训频率", "完成情况", "完成日期", "考核结果", "备注",
        ("AI招聘系统操作培训", "实操演练", "上线前", "□已完成 □待完成", "", "□合格 □不合格", ""),
        ("候选人知情书使用培训", "情景模拟", "每年一次", "□已完成 □待完成", "", "□合格 □不合格", ""),
        ("申诉处理流程培训", "案例研讨", "每年一次", "□已完成 □待完成", "", "□合格 □不合格", ""),
        ("算法偏见识别培训", "案例研讨", "每半年一次", "□已完成 □待完成", "", "□合格 □不合格", ""),
        ("",
        ("三、进阶合规培训（管理层必修）",
        ("培训内容", "培训形式", "培训频率", "完成情况", "完成日期", "考核结果", "备注",
        ("算法审计方法论", "外部培训", "每年一次", "□已完成 □待完成", "", "□合格 □不合格", ""),
        ("公平性指标解读", "外部培训", "每年一次", "□已完成 □待完成", "", "□合格 □不合格", ""),
        ("跨境数据合规", "外部培训", "按需", "□已完成 □待完成", "", "□合格 □不合格", ""),
        ("监管政策动态", "专题讲座", "每季度", "□已完成 □待完成", "", "□合格 □不合格", ""),
        ("",
        ("四、HR团队培训汇总表",
        ("姓名", "部门", "基础培训", "操作培训", "进阶培训", "最后培训日期", "总体状态",
        ("", "", "□已完成 □待完成", "□已完成 □待完成", "□已完成 □待完成", "", ""),
        ("", "", "□已完成 □待完成", "□已完成 □待完成", "□已完成 □待完成", "", ""),
        ("", "", "□已完成 □待完成", "□已完成 □待完成", "□已完成 □待完成", "", ""),
        "",
        "Sheet2：培训效果评估",
        "",
        "五、培训效果评估",
        "评估维度", "评估方式", "目标值", "实际值", "达标情况", "改进建议",
        ("知识掌握度", "考核测试", ">90分", "", "□达标 □待改进", ""),
        ("操作规范度", "抽查评估", ">85%", "", "□达标 □待改进", ""),
        ("意识认同度", "问卷调查", ">80%", "", "□达标 □待改进", ""),
        ("行为合规率", "行为审计", ">95%", "", "□达标 □待改进", ""),
        "",
        "六、合规知识测试",
        "题目", "考核内容", "满分", "得分", "合格标准（≥80%）", "是否合格",
        ("1", "《个人信息保护法》第24条核心要点", "20分", "", "≥16分", "=IF(D12>=16,\"是\",\"否\")"),
        ("2", "自动化决策告知义务的具体要求", "20分", "", "≥16分", "=IF(D13>=16,\"是\",\"否\")"),
        ("3", "候选人享有的五项权利", "20分", "", "≥16分", "=IF(D14>=16,\"是\",\"否\")"),
        ("4", "算法偏见的主要类型和识别方法", "20分", "", "≥16分", "=IF(D15>=16,\"是\",\"否\")"),
        ("5", "企业合规整改的标准流程", "20分", "", "≥16分", "=IF(D16>=16,\"是\",\"否\")"),
        ("合计", "（满分100分）", "100分", "=SUM(D12:D16)", "≥80分", "=IF(D17>=80,\"是\",\"否\")"),
        "",
        "七、持续改进追踪",
        "改进项目", "问题描述", "改进措施", "责任人", "计划完成", "实际完成", "状态",
        ("", "", "", "", "", "", "□进行中 □已完成 □延误"),
        ("", "", "", "", "", "", "□进行中 □已完成 □延误"),
        "",
        "八、季度合规评审会议",
        "评审内容", "评审频率", "参与人员", "最近评审日期", "下次评审日期", "主要结论",
        ("制度执行情况", "每季度", "HR负责人+法务", "", "", ""),
        ("问题与投诉分析", "每季度", "HR+合规", "", "", ""),
        ("改进措施落实", "每季度", "全体相关", "", "", ""),
        ("下季度改进计划", "每季度", "HR负责人", "", "", ""),
    ]

    work_dir = "/tmp/xlsx_build"
    copy_template(work_dir)
    create_styles_xml(work_dir, "purple")
    str_mapping = create_shared_strings_xml(work_dir, strings)

    s1_rows = [
        [("A1", "0", 1)],
        [("A2", "1", 1)],
        [("A3", "2", 1)],
        [("A4", "3", 1)],
        [("A5", "4", 1)],
        [("A6", "5", 1), ("B6", "6", 6), ("C6", "7", 6), ("D6", "8", 6), ("E6", "9", 6), ("F6", "10", 6), ("G6", "11", 6)],
        [("A7", "12", 3), ("B7", "13", 3), ("C7", "14", 3), ("D7", "15", 3), ("E7", "16", 3), ("F7", "17", 3), ("G7", "18", 3)],
        [("A8", "19", 3), ("B8", "20", 3), ("C8", "21", 3), ("D8", "22", 3), ("E8", "23", 3), ("F8", "24", 3), ("G8", "25", 3)],
        [("A9", "26", 3), ("B9", "27", 3), ("C9", "28", 3), ("D9", "29", 3), ("E9", "30", 3), ("F9", "31", 3), ("G9", "32", 3)],
        [("A10", "33", 3), ("B10", "34", 3), ("C10", "35", 3), ("D10", "36", 3), ("E10", "37", 3), ("F10", "38", 3), ("G10", "39", 3)],
        [("A11", "40", 7)],
        [("A12", "41", 1), ("B12", "42", 6), ("C12", "43", 6), ("D12", "44", 6), ("E12", "45", 6), ("F12", "46", 6), ("G12", "47", 6)],
        [("A13", "48", 3), ("B13", "49", 3), ("C13", "50", 3), ("D13", "51", 3), ("E13", "52", 3), ("F13", "53", 3), ("G13", "54", 3)],
        [("A14", "55", 3), ("B14", "56", 3), ("C14", "57", 3), ("D14", "58", 3), ("E14", "59", 3), ("F14", "60", 3), ("G14", "61", 3)],
        [("A15", "62", 3), ("B15", "63", 3), ("C15", "64", 3), ("D15", "65", 3), ("E15", "66", 3), ("F15", "67", 3), ("G15", "68", 3)],
        [("A16", "69", 3), ("B16", "70", 3), ("C16", "71", 3), ("D16", "72", 3), ("E16", "73", 3), ("F16", "74", 3), ("G16", "75", 3)],
        [("A17", "76", 7)],
        [("A18", "77", 1), ("B18", "78", 6), ("C18", "79", 6), ("D18", "80", 6), ("E18", "81", 6), ("F18", "82", 6), ("G18", "83", 6)],
        [("A19", "84", 3), ("B19", "85", 3), ("C19", "86", 3), ("D19", "87", 3), ("E19", "88", 3), ("F19", "89", 3), ("G19", "90", 3)],
        [("A20", "91", 3), ("B20", "92", 3), ("C20", "93", 3), ("D20", "94", 3), ("E20", "95", 3), ("F20", "96", 3), ("G20", "97", 3)],
        [("A21", "98", 3), ("B21", "99", 3), ("C21", "100", 3), ("D21", "101", 3), ("E21", "102", 3), ("F21", "103", 3), ("G21", "104", 3)],
        [("A22", "105", 3), ("B22", "106", 3), ("C22", "107", 3), ("D22", "108", 3), ("E22", "109", 3), ("F22", "110", 3), ("G22", "111", 3)],
        [("A23", "112", 7)],
        [("A24", "113", 1), ("B24", "114", 6), ("C24", "115", 6), ("D24", "116", 6), ("E24", "117", 6), ("F24", "118", 6), ("G24", "119", 6)],
        [("A25", "120", 3), ("B25", "121", 3), ("C25", "122", 3), ("D25", "123", 3), ("E25", "124", 3), ("F25", "125", 3), ("G25", "126", 3)],
        [("A26", "127", 3), ("B26", "128", 3), ("C26", "129", 3), ("D26", "130", 3), ("E26", "131", 3), ("F26", "132", 3), ("G26", "133", 3)],
        [("A27", "134", 3), ("B27", "135", 3), ("C27", "136", 3), ("D27", "137", 3), ("E27", "138", 3), ("F27", "139", 3), ("G27", "140", 3)],
    ]

    s2_rows = [
        [("A1", "0", 1)],
        [("A2", "1", 1)],
        [("A3", "2", 1)],
        [("A4", "3", 1)],
        [("A5", "4", 1), ("B5", "5", 6), ("C5", "6", 6), ("D5", "7", 6), ("E5", "8", 6), ("F5", "9", 6)],
        [("A6", "10", 3), ("B6", "11", 3), ("C6", "12", 3), ("D6", "13", 3), ("E6", "14", 3), ("F6", "15", 3)],
        [("A7", "16", 3), ("B7", "17", 3), ("C7", "18", 3), ("D7", "19", 3), ("E7", "20", 3), ("F7", "21", 3)],
        [("A8", "22", 3), ("B8", "23", 3), ("C8", "24", 3), ("D8", "25", 3), ("E8", "26", 3), ("F8", "27", 3)],
        [("A9", "28", 3), ("B9", "29", 3), ("C9", "30", 3), ("D9", "31", 3), ("E9", "32", 3), ("F9", "33", 3)],
        [("A10", "34", 7)],
        [("A11", "35", 1)],
        [("A12", "36", 1), ("B12", "37", 6), ("C12", "38", 6), ("D12", "39", 6), ("E12", "40", 6), ("F12", "41", 6)],
        [("A13", "42", 3), ("B13", "43", 3), ("C13", "44", 3), ("D13", "45", 3), ("E13", "46", 3), ("F13", "47", 3)],
        [("A14", "48", 3), ("B14", "49", 3), ("C14", "50", 3), ("D14", "51", 3), ("E14", "52", 3), ("F14", "53", 3)],
        [("A15", "54", 3), ("B15", "55", 3), ("C15", "56", 3), ("D15", "57", 3), ("E15", "58", 3), ("F15", "59", 3)],
        [("A16", "60", 3), ("B16", "61", 3), ("C16", "62", 3), ("D16", "63", 3), ("E16", "64", 3), ("F16", "65", 3)],
        [("A17", "66", 6), ("B17", "67", 6), ("C17", "68", 6), ("D17", "69", 6), ("E17", "70", 6), ("F17", "71", 6)],
        [("A18", "72", 7)],
        [("A19", "73", 1), ("B19", "74", 6), ("C19", "75", 6), ("D19", "76", 6), ("E19", "77", 6), ("F19", "78", 6), ("G19", "79", 6)],
        [("A20", "80", 3), ("B20", "81", 3), ("C20", "82", 3), ("D20", "83", 3), ("E20", "84", 3), ("F20", "85", 3), ("G20", "86", 3)],
        [("A21", "87", 3), ("B21", "88", 3), ("C21", "89", 3), ("D21", "90", 3), ("E21", "91", 3), ("F21", "92", 3), ("G21", "93", 3)],
        [("A22", "94", 3), ("B22", "95", 3), ("C22", "96", 3), ("D22", "97", 3), ("E22", "98", 3), ("F22", "99", 3), ("G22", "100", 3)],
        [("A23", "101", 7)],
        [("A24", "102", 1), ("B24", "103", 6), ("C24", "104", 6), ("D24", "105", 6), ("E24", "106", 6), ("F24", "107", 6)],
        [("A25", "108", 3), ("B25", "109", 3), ("C25", "110", 3), ("D25", "111", 3), ("E25", "112", 3), ("F25", "113", 3)],
        [("A26", "114", 3), ("B26", "115", 3), ("C26", "116", 3), ("D26", "117", 3), ("E26", "118", 3), ("F26", "119", 3)],
        [("A27", "120", 3), ("B27", "121", 3), ("C27", "122", 3), ("D27", "123", 3), ("E27", "124", 3), ("F27", "125", 3)],
        [("A28", "126", 3), ("B28", "127", 3), ("C28", "128", 3), ("D28", "129", 3), ("E28", "130", 3), ("F28", "131", 3)],
    ]

    for i, rows in enumerate([s1_rows, s2_rows], 1):
        sheet_path = os.path.join(work_dir, "xl", "worksheets", "sheet" + str(i) + ".xml")
        widths = [(1, 10, 15)]
        content = make_sheet_xml(rows, freeze=(i==1), col_widths=widths)
        with open(sheet_path, 'w', encoding='utf-8') as f:
            f.write(content)

    sheets_info = [
        ("HR团队培训记录", 1, 4),
        ("培训效果评估", 2, 5),
    ]
    update_workbook_xml(work_dir, sheets_info)
    update_workbook_rels(work_dir, sheets_info)
    update_content_types(work_dir, 2)

    os.makedirs(os.path.dirname(output), exist_ok=True)
    pack_xlsx(work_dir, output)
    print("Created: " + output)


# ============================================================
# 配套表单_空表.xlsx — All blank templates in one file
# ============================================================
def build_blank_template():
    output = OUTPUT_DIR + "/配套表单_空表.xlsx"

    strings = [
        ("【空表】算法合规风险自检表",
        ("序号", "合规要点", "自检问题", "现状评估", "备注",
        ("1", "告知义务", "是否向候选人明确说明使用了自动化决策系统？", "□已做到 □部分做到 □未做到", "",
        ("2", "知情权保障", "候选人是否能便捷查询自动化决策的规则？", "□已做到 □部分做到 □未做到", "",
        ("3", "拒绝权保障", "候选人拒绝自动化决策的渠道是否畅通？", "□已做到 □部分做到 □未做到", "",
        ("4", "结果解释", "候选人能否获得关于筛选结果的解释说明？", "□已做到 □部分做到 □未做到", "",
        ("5", "人工干预", "候选人申请人工复核的流程是否明确？", "□已做到 □部分做到 □未做到", "",
        ("6", "偏见审计", "算法系统是否定期进行公平性测试？", "□已做到 □部分做到 □未做到", "",
        ("7", "数据最小化", "采集的数据是否限于招聘必要范围？", "□已做到 □部分做到 □未做到", "",
        ("8", "安全保护", "候选人数据是否采取必要的安全保护措施？", "□已做到 □部分做到 □未做到", "",
        ("",
        ("【空表】候选人权利管理表",
        ("序号", "候选人姓名", "应聘岗位", "知情书版本", "发送日期", "确认日期", "确认方式", "是否同意", "备注",
        ("", "", "", "", "", "", "□邮件 □纸质 □系统弹窗", "□同意 □不同意", "",
        ("",
        ("【空表】算法偏见审计工作表",
        ("序号", "检查项", "检查方法", "合格标准", "检查结果", "问题描述", "改进建议",
        ("1", "数据来源合法性", "确认数据采集时的授权情况", "有候选人明确授权", "□通过 □待改进", "", ""),
        ("2", "数据采集最小化", "审查采集的数据字段", "仅采集与岗位相关必要数据", "□通过 □待改进", "", ""),
        ("3", "历史数据偏见审查", "统计分析不同群体通过率", "各群体通过率差异<15%", "□通过 □待改进", "", ""),
        ("",
        ("【空表】算法备案管理表",
        ("材料名称", "材料要求", "准备状态", "负责人", "完成日期", "备注",
        ("企业营业执照", "复印件加盖公章", "□已准备 □待准备", "", "", ""),
        ("算法安全负责人信息", "姓名、职位、联系方式", "□已准备 □待准备", "", "", ""),
        ("算法功能描述", "详细功能说明", "□已准备 □待准备", "", "", ""),
        ("",
        ("【空表】合规培训记录表",
        ("培训内容", "培训形式", "培训频率", "完成情况", "完成日期", "考核结果", "备注",
        ("《个人信息保护法》核心条款", "线上课程", "入职必修", "□已完成 □待完成", "", "□合格 □不合格", ""),
        ("自动化决策合规要求", "线上课程", "每年一次", "□已完成 □待完成", "", "□合格 □不合格", ""),
    ]

    work_dir = "/tmp/xlsx_build"
    copy_template(work_dir)
    create_styles_xml(work_dir, "blue")
    create_shared_strings_xml(work_dir, strings)

    # 5 sheets, one per form
    all_sheets = []
    row_start = 0

    sheet_data = [
        ("算法合规风险自检表", 14, 7),  # name, num_rows, num_cols
        ("候选人权利管理表", 5, 9),
        ("算法偏见审计工作表", 5, 7),
        ("算法备案管理表", 5, 6),
        ("合规培训记录表", 4, 7),
    ]

    current_row = 1
    for sheet_name, num_rows, num_cols in sheet_data:
        rows = []
        for r in range(num_rows):
            row_cells = []
            for c in range(num_cols):
                col_letter = chr(65 + c) if c < 26 else "A" + chr(65 + c - 26)
                if r == 0:
                    row_cells.append((col_letter + str(current_row), str(row_start + 0), 1))
                else:
                    row_cells.append((col_letter + str(current_row), str(row_start + r), 3))
            rows.append(row_cells)
            current_row += 1
        all_sheets.append(rows)
        row_start += num_rows

    # Create all sheet XMLs
    for i, rows in enumerate(all_sheets, 1):
        sheet_path = os.path.join(work_dir, "xl", "worksheets", "sheet" + str(i) + ".xml")
        content = make_sheet_xml(rows, freeze=False, col_widths=[(1, 10, 15)])
        with open(sheet_path, 'w', encoding='utf-8') as f:
            f.write(content)

    sheets_info = [
        ("算法合规风险自检表", 1, 4),
        ("候选人权利管理表", 2, 5),
        ("算法偏见审计工作表", 3, 6),
        ("算法备案管理表", 4, 7),
        ("合规培训记录表", 5, 8),
    ]
    update_workbook_xml(work_dir, sheets_info)
    update_workbook_rels(work_dir, sheets_info)
    update_content_types(work_dir, 5)

    os.makedirs(os.path.dirname(output), exist_ok=True)
    pack_xlsx(work_dir, output)
    print("Created: " + output)


# ============================================================
# 配套表单_填好版.xlsx — Example filled version
# ============================================================
def build_filled_example():
    output = OUTPUT_DIR + "/配套表单_填好版.xlsx"
    strings = [
        ("【示例】算法合规风险自检表",
        ("表单说明：每季度使用一次，评估企业AI招聘系统的合规风险水平",
        ("",
        ("一、企业AI招聘系统基本情况",
        ("系统名称：智能简历筛选系统V2.0", "系统供应商：XX科技", "上线时间：2024年1月", "使用范围：简历初筛环节",
        ("是否使用自动化决策：■是  □否", "自动化决策环节：■简历筛选  □AI面试  ■测评评估  □录用决策",
        ("",
        ("二、合规要点清单",
        ("序号", "合规要点", "自检问题", "现状评估", "备注",
        ("1", "告知义务", "是否向候选人明确说明使用了自动化决策系统？", "■已做到", "官网公告+邮件告知",
        ("2", "知情权保障", "候选人是否能便捷查询自动化决策的规则？", "■已做到", "官网公示算法说明页",
        ("3", "拒绝权保障", "候选人拒绝自动化决策的渠道是否畅通？", "■部分做到", "需优化入口位置",
        ("4", "结果解释", "候选人能否获得关于筛选结果的解释说明？", "■部分做到", "已提供基础说明，深度不足",
        ("5", "人工干预", "候选人申请人工复核的流程是否明确？", "■已做到", "官网+邮件双入口",
        ("6", "偏见审计", "算法系统是否定期进行公平性测试？", "□部分做到", "上次审计：2024年6月",
        ("7", "数据最小化", "采集的数据是否限于招聘必要范围？", "■已做到", "已按最小化原则采集",
        ("8", "安全保护", "候选人数据是否采取必要的安全保护措施？", "■已做到", "已通过等保三级认证",
        ("",
        ("三、自检打分表",
        ("打分标准：已做到=3分  部分做到=1分  未做到=0分",
        ("序号", "合规要点", "分值", "得分",
        ("1", "告知义务", "0-3分", "3",
        ("2", "知情权保障", "0-3分", "3",
        ("3", "拒绝权保障", "0-3分", "1",
        ("4", "结果解释", "0-3分", "1",
        ("5", "人工干预", "0-3分", "3",
        ("6", "偏见审计", "0-3分", "1",
        ("7", "数据最小化", "0-3分", "3",
        ("8", "安全保护", "0-3分", "3",
        ("合计", "（满分24分）", "", "18",
        ("",
        ("本次自检结论：■基本合规（12-19分）",
        ("最亟需改进的3项：",
        ("1. 完善结果解释的深度和可理解性",
        ("2. 优化拒绝权入口，降低行使门槛",
        ("3. 增加偏见审计频率至每季度一次",
        ("",
        ("自检日期：2024年9月15日", "自检人：王HR", "审核人：李总监", "整改截止：2024年12月31日",
    ]

    work_dir = "/tmp/xlsx_build"
    copy_template(work_dir)
    create_styles_xml(work_dir, "blue")
    str_mapping = create_shared_strings_xml(work_dir, strings)

    rows = []
    for r_idx, row_data in enumerate([
        [("A1", "0", 1), ("B1", "1", 1)],
        [("A2", "2", 1)],
        [("A3", "3", 1)],
        [("A4", "4", 6), ("B4", "5", 5), ("C4", "6", 5), ("D4", "7", 5)],
        [("A5", "8", 5), ("B5", "9", 5), ("C5", "10", 5), ("D5", "11", 5)],
        [("A6", "12", 5)],
        [("A7", "13", 1), ("B7", "14", 6), ("C7", "15", 6), ("D7", "16", 6), ("E7", "17", 6)],
        [("A8", "18", 3), ("B8", "19", 3), ("C8", "20", 3), ("D8", "21", 3), ("E8", "22", 3)],
        [("A9", "23", 3), ("B9", "24", 3), ("C9", "25", 3), ("D9", "26", 3), ("E9", "27", 3)],
        [("A10", "28", 3), ("B10", "29", 3), ("C10", "30", 3), ("D10", "31", 3), ("E10", "32", 3)],
        [("A11", "33", 3), ("B11", "34", 3), ("C11", "35", 3), ("D11", "36", 3), ("E11", "37", 3)],
        [("A12", "38", 3), ("B12", "39", 3), ("C12", "40", 3), ("D12", "41", 3), ("E12", "42", 3)],
        [("A13", "43", 3), ("B13", "44", 3), ("C13", "45", 3), ("D13", "46", 3), ("E13", "47", 3)],
        [("A14", "48", 3), ("B14", "49", 3), ("C14", "50", 3), ("D14", "51", 3), ("E14", "52", 3)],
        [("A15", "53", 7)],
        [("A16", "54", 1), ("B16", "55", 6), ("C16", "56", 6), ("D16", "57", 6)],
        [("A17", "58", 3), ("B17", "59", 3), ("C17", "60", 3), ("D17", "61", 3)],
        [("A18", "62", 3), ("B18", "63", 3), ("C18", "64", 3), ("D18", "65", 3)],
        [("A19", "66", 3), ("B19", "67", 3), ("C19", "68", 3), ("D19", "69", 3)],
        [("A20", "70", 3), ("B20", "71", 3), ("C20", "72", 3), ("D20", "73", 3)],
        [("A21", "74", 3), ("B21", "75", 3), ("C21", "76", 3), ("D21", "77", 3)],
        [("A22", "78", 3), ("B22", "79", 3), ("C22", "80", 3), ("D22", "81", 3)],
        [("A23", "82", 3), ("B23", "83", 3), ("C23", "84", 3), ("D23", "85", 3)],
        [("A24", "86", 6), ("B24", "87", 5), ("C24", "88", 5), ("D24", "89", 5)],
        [("A25", "90", 7)],
        [("A26", "91", 3)],
        [("A27", "92", 3)],
        [("A28", "93", 3)],
        [("A29", "94", 3)],
        [("A30", "95", 3)],
        [("A31", "96", 7)],
        [("A32", "97", 5), ("B32", "98", 5), ("C32", "99", 5), ("D32", "100", 5)],
    ], 1):
        rows.append(row_data)

    sheet_path = os.path.join(work_dir, "xl", "worksheets", "sheet1.xml")
    content = make_sheet_xml(rows, freeze=True, col_widths=[(1, 1, 8), (2, 2, 20), (3, 3, 35), (4, 4, 25), (5, 5, 20)])
    with open(sheet_path, 'w', encoding='utf-8') as f:
        f.write(content)

    sheets_info = [("算法合规风险自检表示例", 1, 4)]
    update_workbook_xml(work_dir, sheets_info)
    update_workbook_rels(work_dir, sheets_info)
    update_content_types(work_dir, 1)

    os.makedirs(os.path.dirname(output), exist_ok=True)
    pack_xlsx(work_dir, output)
    print("Created: " + output)


# ============================================================
# 表单使用指引.xlsx
# ============================================================
def build_guide():
    output = OUTPUT_DIR + "/表单使用指引.xlsx"
    strings = [
        ("《算法审计与合规底线》配套表单使用指引",
        ("表单版本：V1.0  |  制定日期：2024年  |  适用课程：算法审计与合规底线",
        ("",
        ("一、表单清单总览",
        ("表单编号", "表单名称", "核心内容", "使用场景",
        ("表单1", "算法合规风险自检表", "8项合规要点清单、自检打分、风险等级评估", "每季度合规自检",
        ("表单2", "候选人权利管理表", "知情确认追踪、拒绝权申请、申诉处理", "候选人权利管理",
        ("表单3", "算法偏见审计工作表", "数据来源审查、模型公平性测试、偏见修复", "算法偏见专项审计",
        ("表单4", "算法备案管理表", "备案进度追踪、材料清单、时间轴", "算法备案管理",
        ("表单5", "合规培训记录表", "HR培训记录、培训效果评估、知识测试", "合规培训管理",
        ("空表模板", "配套表单_空表", "所有表单的空模板汇总", "打印备用",
        ("示例版本", "配套表单_填好版", "表单填写的完整示例", "培训参考",
        ("",
        ("二、各表单使用说明",
        ("",
        ("【表单1】算法合规风险自检表",
        ("使用频率：每季度一次全面自检，重大系统变更后即时自检",
        ("责任分工：HR负责人主责，法务/合规部门协助审核",
        ("操作步骤：",
        ("第1步：填写企业AI招聘系统基本信息（系统名称、供应商、上线时间等）",
        ("第2步：逐项检查8项合规要点，在现状评估栏选择对应状态",
        ("第3步：根据自检结果进行打分（已做到=3分，部分做到=1分，未做到=0分）",
        ("第4步：计算合计分数，对照风险等级表确定风险级别",
        ("第5步：识别最亟需改进的3项，制定整改计划",
        ("第6步：填写自检记录（日期、自检人、审核人、整改截止）",
        ("整改跟踪：发现的问题应制定整改计划，明确责任人和完成时限，存档备查（至少2年）",
        ("",
        ("【表单2】候选人权利管理表",
        ("Sheet1（候选人知情确认追踪）：",
        ("适用范围：所有收到知情书的候选人",
        ("操作步骤：发送知情书后登记台账，跟踪确认状态",
        ("确认率计算：已确认数/发送总数，反映告知效果",
        ("Sheet2（拒绝权申请记录）：",
        ("适用范围：提出拒绝自动化决策申请的候选人",
        ("处理时限：收到申请后15个工作日内处理",
        ("时效追踪：自动计算剩余处理时间，超时预警",
        ("Sheet3（申诉处理表）：",
        ("适用范围：提出各类申诉的候选人",
        ("处理时限：5-10个工作日（视申诉类型而定）",
        ("满意度调查：处理完成后请候选人填写满意度",
        ("",
        ("【表单3】算法偏见审计工作表",
        ("使用时机：算法上线前审查、上线后每半年定期审计、发现投诉后专项检查",
        ("Sheet1（数据来源审查表）：",
        ("逐项检查8个数据溯源检查项",
        ("审查结论：合格/基本合格/不合格，确定风险等级",
        ("Sheet2（模型公平性测试表）：",
        ("2.1 群体差异分析：按性别、年龄、学历、地域分组统计通过率",
        ("2.2 公平性指标测试：计算统计均等、机会均等、预测均等、个性化公平指标",
        ("2.3 A/B测试：测试简历排序等是否存在呈现方式偏见",
        ("Sheet3（偏见修复记录）：",
        ("记录发现的每个偏见问题及修复情况",
        ("偏见来源分类：数据层、算法层、人类层、系统层",
        ("",
        ("【表单4】算法备案管理表",
        ("使用时机：算法正式上线前，必须完成备案",
        ("Sheet1（备案进度追踪）：",
        ("跟踪备案各阶段进展（准备→提交→审核→公示）",
        ("Sheet2（材料清单核对）：",
        ("逐项检查备案所需材料准备状态",
        ("材料分四类：基础信息、技术材料、风险防控、权益保护",
        ("Sheet3（备案时间轴）：",
        ("参考标准时间轴：准备阶段1-4周，提交阶段5-6周，审核阶段7-12周",
        ("备案后维护：信息变更10个工作日内，材料更新30天内",
        ("",
        ("【表单5】合规培训记录表",
        ("Sheet1（HR团队培训记录）：",
        ("分三层：基础知识（全员）、操作技能（岗位）、进阶合规（管理层）",
        ("追踪每位HR的培训完成状态",
        ("Sheet2（培训效果评估）：",
        ("四个评估维度：知识掌握度、操作规范度、意识认同度、行为合规率",
        ("合规知识测试：5道题满分100分，合格线80分",
        ("持续改进：记录需改进项目及整改情况",
        ("季度评审：每季度召开合规评审会议",
        ("",
        ("三、表单使用建议",
        ("1. 打印使用：所有表单均支持白底无阴影打印，可直接打印使用",
        ("2. 电子管理：建议建立电子版台账，定期汇总分析数据",
        ("3. 存档要求：自检记录、申诉材料、审计报告等应存档至少2-3年",
        ("4. 持续改进：定期回顾表单使用效果，根据实际情况优化调整",
        ("",
        ("四、常见问题",
        ("Q：自检打分合计分数如何计算？",
        ("A：已做到=3分，部分做到=1分，未做到=0分，8项满分24分",
        ("",
        ("Q：申诉处理时效如何计算？",
        ("A：从收到申诉申请之日起计算，不同类型申诉时限不同（5-10个工作日）",
        ("",
        ("Q：偏见审计多久进行一次？",
        ("A：建议每半年进行一次全面审计，重大变更后应专项审计",
        ("",
        ("Q：培训效果不达标怎么办？",
        ("A：考核不合格者应安排补训补考，连续两次不合格应调整岗位",
        ("",
        ("五、版本更新记录",
        ("版本", "更新日期", "更新内容",
        ("V1.0", "2024年", "初始版本发布",
    ]

    work_dir = "/tmp/xlsx_build"
    copy_template(work_dir)
    create_styles_xml(work_dir, "blue")
    str_mapping = create_shared_strings_xml(work_dir, strings)

    rows = [
        [("A1", "0", 1), ("B1", "1", 1)],
        [("A2", "2", 1)],
        [("A3", "3", 1)],
        [("A4", "4", 1), ("B4", "5", 6), ("C4", "6", 6), ("D4", "7", 6), ("E4", "8", 6)],
        [("A5", "9", 3), ("B5", "10", 3), ("C5", "11", 3), ("D5", "12", 3), ("E5", "13", 3)],
        [("A6", "14", 3), ("B6", "15", 3), ("C6", "16", 3), ("D6", "17", 3), ("E6", "18", 3)],
        [("A7", "19", 3), ("B7", "20", 3), ("C7", "21", 3), ("D7", "22", 3), ("E7", "23", 3)],
        [("A8", "24", 3), ("B8", "25", 3), ("C8", "26", 3), ("D8", "27", 3), ("E8", "28", 3)],
        [("A9", "29", 3), ("B9", "30", 3), ("C9", "31", 3), ("D9", "32", 3), ("E9", "33", 3)],
        [("A10", "34", 3), ("B10", "35", 3), ("C10", "36", 3), ("D10", "37", 3), ("E10", "38", 3)],
        [("A11", "39", 3), ("B11", "40", 3), ("C11", "41", 3), ("D11", "42", 3), ("E11", "43", 3)],
        [("A12", "44", 7)],
        [("A13", "45", 1)],
        [("A14", "46", 1)],
        [("A15", "47", 3)],
        [("A16", "48", 3)],
        [("A17", "49", 3)],
        [("A18", "50", 3)],
        [("A19", "51", 3)],
        [("A20", "52", 3)],
        [("A21", "53", 7)],
        [("A22", "54", 1)],
        [("A23", "55", 3)],
        [("A24", "56", 3)],
        [("A25", "57", 3)],
        [("A26", "58", 3)],
        [("A27", "59", 7)],
        [("A28", "60", 1)],
        [("A29", "61", 3)],
        [("A30", "62", 3)],
        [("A31", "63", 3)],
        [("A32", "64", 3)],
        [("A33", "65", 3)],
        [("A34", "66", 3)],
        [("A35", "67", 3)],
        [("A36", "68", 7)],
        [("A37", "69", 1)],
        [("A38", "70", 3)],
        [("A39", "71", 3)],
        [("A40", "72", 3)],
        [("A41", "73", 3)],
        [("A42", "74", 7)],
        [("A43", "75", 1)],
        [("A44", "76", 3)],
        [("A45", "77", 3)],
        [("A46", "78", 3)],
        [("A47", "79", 3)],
        [("A48", "80", 7)],
        [("A49", "81", 1)],
        [("A50", "82", 1)],
        [("A51", "83", 3)],
        [("A52", "84", 3)],
        [("A53", "85", 3)],
        [("A54", "86", 3)],
        [("A55", "87", 3)],
        [("A56", "88", 3)],
        [("A57", "89", 3)],
        [("A58", "90", 7)],
        [("A59", "91", 1)],
        [("A60", "92", 3)],
        [("A61", "93", 3)],
        [("A62", "94", 3)],
        [("A63", "95", 7)],
        [("A64", "96", 1)],
        [("A65", "97", 3)],
        [("A66", "98", 3)],
        [("A67", "99", 3)],
        [("A68", "100", 3)],
        [("A69", "101", 7)],
        [("A70", "102", 1)],
        [("A71", "103", 3)],
        [("A72", "104", 3)],
        [("A73", "105", 3)],
        [("A74", "106", 3)],
        [("A75", "107", 3)],
        [("A76", "108", 3)],
        [("A77", "109", 7)],
        [("A78", "110", 1)],
        [("A79", "111", 1), ("B79", "112", 6), ("C79", "113", 6)],
        [("A80", "114", 3), ("B80", "115", 3), ("C80", "116", 3)],
        [("A81", "117", 3), ("B81", "118", 3), ("C81", "119", 3)],
        [("A82", "120", 3), ("B82", "121", 3), ("C82", "122", 3)],
    ]

    sheet_path = os.path.join(work_dir, "xl", "worksheets", "sheet1.xml")
    content = make_sheet_xml(rows, freeze=True, col_widths=[(1, 1, 25), (2, 2, 45), (3, 3, 25)])
    with open(sheet_path, 'w', encoding='utf-8') as f:
        f.write(content)

    sheets_info = [("表单使用指引", 1, 4)]
    update_workbook_xml(work_dir, sheets_info)
    update_workbook_rels(work_dir, sheets_info)
    update_content_types(work_dir, 1)

    os.makedirs(os.path.dirname(output), exist_ok=True)
    pack_xlsx(work_dir, output)
    print("Created: " + output)


if __name__ == "__main__":
    print("Building all forms...")
    build_form1()
    build_form2()
    build_form3()
    build_form4()
    build_form5()
    build_blank_template()
    build_filled_example()
    build_guide()
    print("\nAll forms created successfully!")
