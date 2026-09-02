#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Build Excel tool forms for 课程3: 差异化洞察：说出网上查不到的话
浅色专业配色 (#F8F9FA 白底 / #2C3E50 深蓝灰标题 / #3498DB 蓝色强调)
"""

import os
import shutil
import zipfile

TEMPLATE_DIR = "C:/Users/Administrator/.claude/skills/Excel表格处理/templates/minimal_xlsx"

# Colors in AARRGGBB format
WHITE_BG = "00FFFFFF"        # 白底
LIGHT_GRAY = "00F8F9FA"      # 浅灰背景
HEADER_BG = "002C3E50"       # 深蓝灰标题背景
ACCENT_BLUE = "003498DB"     # 蓝色强调
ACCENT_GREEN = "0027AE75"    # 绿色
ACCENT_ORANGE = "00E67E22"   # 橙色
ACCENT_PURPLE = "009B59B0"   # 紫色
BORDER_COLOR = "00BDC3C7"    # 边框颜色

def copy_template(work_dir):
    if os.path.exists(work_dir):
        shutil.rmtree(work_dir)
    shutil.copytree(TEMPLATE_DIR, work_dir)

def create_styles_xml(work_dir, custom_fills=None):
    """Create styles.xml with course-specific colors"""
    styles_path = os.path.join(work_dir, "xl", "styles.xml")

    # Custom fills if provided
    fill_entries = ""
    if custom_fills:
        for cf in custom_fills:
            fill_entries += '<fill><patternFill patternType="solid"><fgColor rgb="' + cf + '"/><bgColor indexed="64"/></patternFill></fill>\n'

    styles_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <fonts>
    <font><sz val="11"/><name val="Calibri"/></font>
    <font><sz val="11"/><name val="Calibri"/><b/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="000000FF"/></font>
    <font><sz val="11"/><name val="Calibri"/><b/><color rgb="00FFFFFF"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="003498DB"/></font>
    <font><sz val="11"/><name val="Calibri"/><b/><color rgb="003498DB"/></font>
  </fonts>
  <fills>
    <fill><patternFill patternType="none"/></fill>
    <fill><patternFill patternType="gray125"/></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="00FFFFFF"/><bgColor indexed="64"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="00F0F4F8"/><bgColor indexed="64"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="002C3E50"/><bgColor indexed="64"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="003498DB"/><bgColor indexed="64"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="00E8F4FC"/><bgColor indexed="64"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="0027AE75"/><bgColor indexed="64"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="00FFF3E0"/><bgColor indexed="64"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="009B59B0"/><bgColor indexed="64"/></patternFill></fill>
  </fills>
  <borders>
    <border><left/><right/><top/><bottom/></border>
    <border>
      <left style="thin"><color rgb="00BDC3C7"/></left>
      <right style="thin"><color rgb="00BDC3C7"/></right>
      <top style="thin"><color rgb="00BDC3C7"/></top>
      <bottom style="thin"><color rgb="00BDC3C7"/></bottom>
    </border>
    <border>
      <left style="medium"><color rgb="002C3E50"/></left>
      <right style="medium"><color rgb="002C3E50"/></right>
      <top style="medium"><color rgb="002C3E50"/></top>
      <bottom style="medium"><color rgb="002C3E50"/></bottom>
    </border>
  </borders>
  <cellStyleXfs><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>
  <cellXfs>
    <!-- 0: Default style -->
    <xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/>
    <!-- 1: Header row - white text on dark bg -->
    <xf numFmtId="0" fontId="3" fillId="4" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1"/>
    <!-- 2: Light gray background, normal text -->
    <xf numFmtId="0" fontId="0" fillId="3" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1"/>
    <!-- 3: White background, blue text (input) -->
    <xf numFmtId="0" fontId="4" fillId="2" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1"/>
    <!-- 4: Section header - blue bg white text -->
    <xf numFmtId="0" fontId="3" fillId="5" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1"/>
    <!-- 5: Light blue tint row -->
    <xf numFmtId="0" fontId="0" fillId="6" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1"/>
    <!-- 6: Green header -->
    <xf numFmtId="0" fontId="3" fillId="7" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1"/>
    <!-- 7: Orange tint row -->
    <xf numFmtId="0" fontId="0" fillId="8" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1"/>
    <!-- 8: Purple header -->
    <xf numFmtId="0" fontId="3" fillId="9" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1"/>
    <!-- 9: Bold label -->
    <xf numFmtId="0" fontId="1" fillId="2" borderId="0" xfId="0" applyFont="1" applyFill="1"/>
    <!-- 10: Subheader - dark bg, white text, medium border -->
    <xf numFmtId="0" fontId="3" fillId="4" borderId="2" xfId="0" applyFont="1" applyFill="1" applyBorder="1"/>
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

def make_sheet_xml(rows, freeze=True, col_widths=None, auto_filter=None):
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

    auto_filter_xml = ""
    if auto_filter:
        auto_filter_xml = '  <autoFilter ref="' + auto_filter + '"/>'

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
  ''' + auto_filter_xml + '''
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

def build_single_sheet_form(output_path, title_strings, sheet_name, rows, col_widths=None):
    """Build a single-sheet Excel form"""
    work_dir = "/tmp/xlsx_build"
    copy_template(work_dir)
    create_styles_xml(work_dir)
    str_mapping = create_shared_strings_xml(work_dir, title_strings)

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

    widths = col_widths or [(1, 10, 15)]
    sheet_path = os.path.join(work_dir, "xl", "worksheets", "sheet1.xml")
    content = make_sheet_xml(updated_rows, freeze=True, col_widths=widths)
    with open(sheet_path, 'w', encoding='utf-8') as f:
        f.write(content)

    update_workbook_xml(work_dir, [(sheet_name, 1, 4)])
    update_workbook_rels(work_dir, [(sheet_name, 1, 4)])
    update_content_types(work_dir, 1)

    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    pack_xlsx(work_dir, output_path)
    print("Created: " + output_path)


# ===================== FILE 1: 洞察素材采集管理系统.xlsx =====================
def build_file1():
    output = "D:/新课开发/营销/一线销售/03 差异化洞察：说出网上查不到的话/08-配套表单Excel/洞察素材采集管理系统.xlsx"

    strings = [
        # 标题区
        "洞察素材采集管理系统",
        "课程3：差异化洞察 | 配套表单",
        "使用说明",
        "本表用于日常采集和整理一线销售洞察素材，支持分类管理和价值评估",
        "版本：V1.0 | 2026年",
        # Sheet 1: 素材数据库
        "【Sheet1】洞察素材数据库",
        "编号", "日期", "类别", "内容摘要", "情境描述", "价值评级", "情绪标签",
        "使用说明：请按日期顺序录入每日采集的洞察素材，标注价值等级和情绪标签",
        "价值评级标准：",
        "★★★★★", "顶级洞察：客户核心痛点，可直接转化为方案亮点",
        "★★★★", "高价值洞察：客户关注点，能引发深度讨论",
        "★★★", "中等价值：客户提及但未深入，可作为谈资",
        "★★", "一般参考：常见问题，补充信息用",
        "★", "低价值：常规信息，无独特性",
        "情绪标签说明：",
        "惊喜", "客户表现出超出预期的好反应",
        "困惑", "客户对某问题存在疑惑或误解",
        "不满", "客户抱怨或负面情绪表达",
        "期待", "客户对某产品/服务有明确期待",
        "决策", "客户在考虑做决定的关键时刻",
        # 五类素材分类
        "【Sheet2】五类素材分类汇总",
        "类别", "定义", "采集数量", "优质素材数", "代表素材",
        "客户痛点类", "客户在工作中遇到的核心困难和挑战",
        "决策障碍类", "客户做购买决策时遇到的阻力",
        "期望收益类", "客户期待通过某方案达成的效果",
        "竞争对比类", "客户提到的竞争对手或替代方案",
        "行业趋势类", "客户所在行业的发展动向和变化",
        "汇总", "全部五大类", "", "", "",
        # 月度采集统计
        "【Sheet3】月度采集统计表",
        "月份", "1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月",
        "采集数量", "", "", "", "", "", "", "", "", "", "", "",
        "优质素材数", "", "", "", "", "", "", "", "", "", "", "",
        "验证次数", "", "", "", "", "", "", "", "", "", "", "",
        "转化洞察数", "", "", "", "", "", "", "", "", "", "", "",
        "月度亮点", "", "", "", "", "", "", "", "", "", "", "",
        # 素材价值评估
        "【Sheet4】素材价值评估表",
        "评估维度", "权重", "评分标准", "自评得分", "导师点评",
        "真实性", "25%", "来自真实客户经历，非道听途说",
        "独特性", "25%", "网上不易查到，有独特视角",
        "实用性", "25%", "可直接用于销售转化",
        "可验证性", "25%", "可在后续拜访中验证",
        "综合得分", "100%", "加权平均分", "", "",
        "优秀素材案例",
        "素材标题", "", "", "", "",
        "情境", "", "", "", "",
        "核心洞察", "", "", "", "",
        "应用场景", "", "", "", "",
    ]

    # ===== Sheet 1: 素材数据库 =====
    s1_rows = [
        [("A1", "0", 1)], [("A2", "1", 1)], [("A3", "2", 1)],
        [("A4", "3", 2)], [("A5", "4", 2)], [("A6", "5", 2)],
        # 表头
        [("A7", "6", 4), ("B7", "7", 4), ("C7", "8", 4), ("D7", "9", 4), ("E7", "10", 4), ("F7", "11", 4), ("G7", "12", 4)],
        # 数据行（示例5行）
        [("A8", "1", 2), ("B8", "2026-08-01", 3), ("C8", "客户痛点类", 2), ("D8", "客户反映同行都在用AI做客户分析", 2), ("E8", "拜访中客户主动提起", 2), ("F8", "★★★★", 2), ("G8", "期待", 2)],
        [("A9", "2", 2), ("B9", "", 2), ("C9", "", 2), ("D9", "", 2), ("E9", "", 2), ("F9", "", 2), ("G9", "", 2)],
        [("A10", "3", 2), ("B10", "", 2), ("C10", "", 2), ("D10", "", 2), ("E10", "", 2), ("F10", "", 2), ("G10", "", 2)],
        [("A11", "4", 2), ("B11", "", 2), ("C11", "", 2), ("D11", "", 2), ("E11", "", 2), ("F11", "", 2), ("G11", "", 2)],
        [("A12", "5", 2), ("B12", "", 2), ("C12", "", 2), ("D12", "", 2), ("E12", "", 2), ("F12", "", 2), ("G12", "", 2)],
        # 更多行...
        [("A20", "6", 2)],
        # 价值评级说明
        [("A22", "13", 1)], [("A23", "14", 2)],
        [("A24", "15", 2), ("B24", "顶级洞察：客户核心痛点，可直接转化为方案亮点", 2)],
        [("A25", "16", 2), ("B25", "高价值洞察：客户关注点，能引发深度讨论", 2)],
        [("A26", "17", 2), ("B26", "中等价值：客户提及但未深入，可作为谈资", 2)],
        [("A27", "18", 2), ("B27", "一般参考：常见问题，补充信息用", 2)],
        [("A28", "19", 2), ("B28", "低价值：常规信息，无独特性", 2)],
        # 情绪标签说明
        [("A30", "20", 1)], [("A31", "21", 2)],
        [("A32", "22", 2), ("B32", "客户表现出超出预期的好反应", 2)],
        [("A33", "23", 2), ("B33", "客户对某问题存在疑惑或误解", 2)],
        [("A34", "24", 2), ("B34", "客户抱怨或负面情绪表达", 2)],
        [("A35", "25", 2), ("B35", "客户对某产品/服务有明确期待", 2)],
        [("A36", "26", 2), ("B36", "客户在考虑做决定的关键时刻", 2)],
    ]

    # ===== Sheet 2: 五类素材分类汇总 =====
    s2_rows = [
        [("A1", "27", 1)], [("A2", "28", 1)],
        [("A3", "29", 4), ("B3", "30", 4), ("C3", "31", 4), ("D3", "32", 4), ("E3", "33", 4)],
        [("A4", "34", 2), ("B4", "客户在工作中遇到的核心困难和挑战", 2), ("C4", "", 2), ("D4", "", 2), ("E4", "", 2)],
        [("A5", "35", 2), ("B5", "客户做购买决策时遇到的阻力", 2), ("C5", "", 2), ("D5", "", 2), ("E5", "", 2)],
        [("A6", "36", 2), ("B6", "客户期待通过某方案达成的效果", 2), ("C6", "", 2), ("D6", "", 2), ("E6", "", 2)],
        [("A7", "37", 2), ("B7", "客户提到的竞争对手或替代方案", 2), ("C7", "", 2), ("D7", "", 2), ("E7", "", 2)],
        [("A8", "38", 2), ("B8", "客户所在行业的发展动向和变化", 2), ("C8", "", 2), ("D8", "", 2), ("E8", "", 2)],
        [("A9", "39", 10), ("B9", "全部五大类", 10), ("C9", "", 10), ("D9", "", 10), ("E9", "", 10)],
    ]

    # ===== Sheet 3: 月度采集统计表 =====
    s3_rows = [
        [("A1", "40", 1)], [("A2", "41", 1)],
        [("A3", "42", 4), ("B3", "43", 4), ("C3", "44", 4), ("D3", "45", 4), ("E3", "46", 4), ("F3", "47", 4), ("G3", "48", 4), ("H3", "49", 4), ("I3", "50", 4), ("J3", "51", 4), ("K3", "52", 4), ("L3", "53", 4), ("M3", "54", 4)],
        [("A4", "55", 2), ("B4", "", 2), ("C4", "", 2), ("D4", "", 2), ("E4", "", 2), ("F4", "", 2), ("G4", "", 2), ("H4", "", 2), ("I4", "", 2), ("J4", "", 2), ("K4", "", 2), ("L4", "", 2), ("M4", "", 2)],
        [("A5", "56", 2), ("B5", "", 2), ("C5", "", 2), ("D5", "", 2), ("E5", "", 2), ("F5", "", 2), ("G5", "", 2), ("H5", "", 2), ("I5", "", 2), ("J5", "", 2), ("K5", "", 2), ("L5", "", 2), ("M5", "", 2)],
        [("A6", "57", 2), ("B6", "", 2), ("C6", "", 2), ("D6", "", 2), ("E6", "", 2), ("F6", "", 2), ("G6", "", 2), ("H6", "", 2), ("I6", "", 2), ("J6", "", 2), ("K6", "", 2), ("L6", "", 2), ("M6", "", 2)],
        [("A7", "58", 2), ("B7", "", 2), ("C7", "", 2), ("D7", "", 2), ("E7", "", 2), ("F7", "", 2), ("G7", "", 2), ("H7", "", 2), ("I7", "", 2), ("J7", "", 2), ("K7", "", 2), ("L7", "", 2), ("M7", "", 2)],
        [("A8", "59", 2), ("B8", "", 2), ("C8", "", 2), ("D8", "", 2), ("E8", "", 2), ("F8", "", 2), ("G8", "", 2), ("H8", "", 2), ("I8", "", 2), ("J8", "", 2), ("K8", "", 2), ("L8", "", 2), ("M8", "", 2)],
    ]

    # ===== Sheet 4: 素材价值评估表 =====
    s4_rows = [
        [("A1", "60", 1)], [("A2", "61", 1)],
        [("A3", "62", 4), ("B3", "63", 4), ("C3", "64", 4), ("D3", "65", 4), ("E3", "66", 4)],
        [("A4", "67", 2), ("B4", "25%", 2), ("C4", "来自真实客户经历，非道听途说", 2), ("D4", "", 3), ("E4", "", 2)],
        [("A5", "68", 2), ("B5", "25%", 2), ("C5", "网上不易查到，有独特视角", 2), ("D5", "", 3), ("E5", "", 2)],
        [("A6", "69", 2), ("B6", "25%", 2), ("C6", "可直接用于销售转化", 2), ("D6", "", 3), ("E6", "", 2)],
        [("A7", "70", 2), ("B7", "25%", 2), ("C7", "可在后续拜访中验证", 2), ("D7", "", 3), ("E7", "", 2)],
        [("A8", "71", 9), ("B8", "100%", 9), ("C8", "加权平均分", 9), ("D8", "", 9), ("E8", "", 9)],
        [("A10", "72", 1)],
        [("A11", "73", 4), ("B11", "74", 4), ("C11", "75", 4), ("D11", "76", 4)],
        [("A12", "77", 2), ("B12", "", 2), ("C12", "", 2), ("D12", "", 2)],
        [("A13", "78", 2), ("B13", "", 2), ("C13", "", 2), ("D13", "", 2)],
        [("A14", "79", 2), ("B14", "", 2), ("C14", "", 2), ("D14", "", 2)],
        [("A15", "80", 2), ("B15", "", 2), ("C15", "", 2), ("D15", "", 2)],
    ]

    # Build multi-sheet workbook
    work_dir = "/tmp/xlsx_build"
    copy_template(work_dir)
    create_styles_xml(work_dir)

    # Create combined shared strings
    all_strings = strings
    str_mapping = create_shared_strings_xml(work_dir, all_strings)

    # Create sheet 1
    def resolve_rows(rows):
        resolved = []
        for row in rows:
            new_row = []
            for col, val, style in row:
                if isinstance(val, str) and val in str_mapping:
                    new_row.append((col, str_mapping[val], style))
                else:
                    new_row.append((col, val, style))
            resolved.append(new_row)
        return resolved

    sheet1_path = os.path.join(work_dir, "xl", "worksheets", "sheet1.xml")
    content = make_sheet_xml(resolve_rows(s1_rows), freeze=True, col_widths=[(1,1,8),(2,2,12),(3,3,14),(4,4,30),(5,5,18),(6,6,10),(7,7,10)])
    with open(sheet1_path, 'w', encoding='utf-8') as f:
        f.write(content)

    # Create sheet 2
    sheet2_path = os.path.join(work_dir, "xl", "worksheets", "sheet2.xml")
    content = make_sheet_xml(resolve_rows(s2_rows), freeze=True, col_widths=[(1,1,14),(2,2,30),(3,3,12),(4,4,12),(5,5,20)])
    with open(sheet2_path, 'w', encoding='utf-8') as f:
        f.write(content)

    # Create sheet 3
    sheet3_path = os.path.join(work_dir, "xl", "worksheets", "sheet3.xml")
    content = make_sheet_xml(resolve_rows(s3_rows), freeze=True, col_widths=[(1,1,12)]+[(i,i,8) for i in range(2,14)])
    with open(sheet3_path, 'w', encoding='utf-8') as f:
        f.write(content)

    # Create sheet 4
    sheet4_path = os.path.join(work_dir, "xl", "worksheets", "sheet4.xml")
    content = make_sheet_xml(resolve_rows(s4_rows), freeze=True, col_widths=[(1,1,14),(2,2,10),(3,3,28),(4,4,12),(5,5,16)])
    with open(sheet4_path, 'w', encoding='utf-8') as f:
        f.write(content)

    update_workbook_xml(work_dir, [
        ("素材数据库", 1, 4), ("五类汇总", 2, 5), ("月度统计", 3, 6), ("价值评估", 4, 7)
    ])
    update_workbook_rels(work_dir, [
        ("素材数据库", 1, 4), ("五类汇总", 2, 5), ("月度统计", 3, 6), ("价值评估", 4, 7)
    ])
    update_content_types(work_dir, 4)

    os.makedirs(os.path.dirname(output), exist_ok=True)
    pack_xlsx(work_dir, output)
    print("Created: " + output)


# ===================== FILE 2: 洞察加工流程追踪表.xlsx =====================
def build_file2():
    output = "D:/新课开发/营销/一线销售/03 差异化洞察：说出网上查不到的话/08-配套表单Excel/洞察加工流程追踪表.xlsx"

    strings = [
        "洞察加工流程追踪表",
        "课程3：差异化洞察 | 配套表单",
        "使用说明",
        "追踪从原始信息到洞察输出的完整转化流程",
        "版本：V1.0 | 2026年",
        # Sheet 1: 洞察转化工作流
        "【Sheet1】洞察转化工作流",
        "阶段", "状态", "负责人", "开始日期", "完成日期", "关键产出",
        "第一阶段：原始信息采集", "□进行中 □已完成 □未开始", "", "", "", "",
        "第二阶段：信息过滤与筛选", "□进行中 □已完成 □未开始", "", "", "", "",
        "第三阶段：洞察提炼与形成", "□进行中 □已完成 □未开始", "", "", "", "",
        "第四阶段：洞察验证与优化", "□进行中 □已完成 □未开始", "", "", "", "",
        "第五阶段：洞察输出与应用", "□进行中 □已完成 □未开始", "", "", "", "",
        "工作流总览",
        "原始信息 → 过滤 → 洞察 → 验证 → 输出",
        "每个阶段的定义与标准",
        "阶段", "输入", "处理动作", "输出标准",
        "原始信息采集", "一线观察、客户反馈、市场信息", "记录、分类、标注来源", "原始素材文档，标注时间地点",
        "信息过滤与筛选", "原始素材", "去除重复、验证真实性、评估价值", "筛选后的高质量素材",
        "洞察提炼与形成", "高质量素材", "分析共性、提炼规律、形成观点", "初步洞察陈述",
        "洞察验证与优化", "初步洞察", "客户访谈、市场验证、逻辑检验", "经验证的成熟洞察",
        "洞察输出与应用", "成熟洞察", "撰写话术、准备案例、设计应用场景", "可交付的洞察成果",
        # Sheet 2: 各阶段完成状态追踪
        "【Sheet2】各阶段完成状态追踪",
        "任务项", "计划完成日", "实际完成日", "完成状态", "备注",
        "第一阶段：原始信息采集", "", "", "", "",
        "1.1 每日观察记录（连续7天）", "", "", "□已完成 □进行中 □未开始", "",
        "1.2 客户访谈记录（至少3次）", "", "", "□已完成 □进行中 □未开始", "",
        "1.3 市场信息收集整理", "", "", "□已完成 □进行中 □未开始", "",
        "1.4 原始素材汇总入库", "", "", "□已完成 □进行中 □未开始", "",
        "第二阶段：信息过滤与筛选", "", "", "", "",
        "2.1 去重与合并相似信息", "", "", "□已完成 □进行中 □未开始", "",
        "2.2 真实性验证", "", "", "□已完成 □进行中 □未开始", "",
        "2.3 价值初评与排序", "", "", "□已完成 □进行中 □未开始", "",
        "2.4 筛选结果确认", "", "", "□已完成 □进行中 □未开始", "",
        "第三阶段：洞察提炼与形成", "", "", "", "",
        "3.1 共性分析", "", "", "□已完成 □进行中 □未开始", "",
        "3.2 规律提炼", "", "", "□已完成 □进行中 □未开始", "",
        "3.3 洞察陈述撰写", "", "", "□已完成 □进行中 □未开始", "",
        "3.4 内部评审", "", "", "□已完成 □进行中 □未开始", "",
        "第四阶段：洞察验证与优化", "", "", "", "",
        "4.1 客户验证访谈", "", "", "□已完成 □进行中 □未开始", "",
        "4.2 市场数据对比", "", "", "□已完成 □进行中 □未开始", "",
        "4.3 逻辑检验", "", "", "□已完成 □进行中 □未开始", "",
        "4.4 洞察优化定稿", "", "", "□已完成 □进行中 □未开始", "",
        "第五阶段：洞察输出与应用", "", "", "", "",
        "5.1 销售话术设计", "", "", "□已完成 □进行中 □未开始", "",
        "5.2 案例整理", "", "", "□已完成 □进行中 □未开始", "",
        "5.3 应用场景设计", "", "", "□已完成 □进行中 □未开始", "",
        "5.4 成果汇报", "", "", "□已完成 □进行中 □未开始", "",
        # Sheet 3: 洞察质量评分表
        "【Sheet3】洞察质量评分表",
        "评估维度", "权重", "5分标准", "4分标准", "3分标准", "自评", "综合",
        "真实性", "30%", "来源可靠，可查证", "来源较可靠", "来源一般", "", "",
        "独特性", "25%", "网上几乎查不到", "少量类似", "较常见", "", "",
        "价值性", "25%", "直接促进成交", "有助推进", "一般参考", "", "",
        "可表达性", "20%", "客户能听懂并感兴趣", "需要解释", "难理解", "", "",
        "总得分", "100%", "", "", "", "", "",
        "评分标准说明",
        "维度", "5分", "4分", "3分", "2分", "1分",
        "真实性", "亲身经历，可视频验证", "有文字/录音记录", "他人转述但合理", "他人转述且存疑", "无法考证",
        "独特性", "全网独家", "竞品不知道", "行业小范围知道", "行业常识", "烂大街",
        "价值性", "直接带来百万级订单", "推进了关键客户", "提供了有用信息", "聊胜于无", "毫无价值",
        "可表达性", "一句话吸引客户", "三句话说明白", "需要案例辅助", "需要详细解释", "说不清",
        # Sheet 4: 迭代记录表
        "【Sheet4】迭代记录表",
        "版本", "日期", "迭代内容", "迭代原因", "迭代结果", "下次优化点",
        "V1.0", "", "初始版本", "首次提炼", "", "",
        "V1.1", "", "", "", "", "",
        "V1.2", "", "", "", "", "",
        "V2.0", "", "", "", "", "",
        "迭代总结",
        "共迭代次数", "", "当前版本", "",
        "主要优化方向", "", "", "",
        "最成功的优化", "", "", "",
        "需要继续改进", "", "", "",
    ]

    # ===== Sheet 1: 洞察转化工作流 =====
    s1_rows = [
        [("A1", "0", 1)], [("A2", "1", 1)], [("A3", "2", 1)],
        [("A4", "3", 2)], [("A5", "4", 2)],
        # 工作流总览
        [("A6", "5", 4), ("B6", "6", 4), ("C6", "7", 4), ("D6", "8", 4), ("E6", "9", 4), ("F6", "10", 4)],
        [("A7", "11", 5), ("B7", "□进行中 □已完成 □未开始", 2), ("C7", "", 2), ("D7", "", 2), ("E7", "", 2), ("F7", "", 2)],
        [("A8", "12", 5), ("B8", "□进行中 □已完成 □未开始", 2), ("C8", "", 2), ("D8", "", 2), ("E8", "", 2), ("F8", "", 2)],
        [("A9", "13", 5), ("B9", "□进行中 □已完成 □未开始", 2), ("C9", "", 2), ("D9", "", 2), ("E9", "", 2), ("F9", "", 2)],
        [("A10", "14", 5), ("B10", "□进行中 □已完成 □未开始", 2), ("C10", "", 2), ("D10", "", 2), ("E10", "", 2), ("F10", "", 2)],
        [("A11", "15", 5), ("B11", "□进行中 □已完成 □未开始", 2), ("C11", "", 2), ("D11", "", 2), ("E11", "", 2), ("F11", "", 2)],
        [("A13", "16", 1)],
        [("A14", "17", 2)],
        [("A15", "18", 4), ("B15", "19", 4), ("C15", "20", 4), ("D15", "21", 4)],
        [("A16", "22", 2), ("B16", "一线观察、客户反馈、市场信息", 2), ("C16", "记录、分类、标注来源", 2), ("D16", "原始素材文档，标注时间地点", 2)],
        [("A17", "23", 2), ("B17", "原始素材", 2), ("C17", "去除重复、验证真实性、评估价值", 2), ("D17", "筛选后的高质量素材", 2)],
        [("A18", "24", 2), ("B18", "高质量素材", 2), ("C18", "分析共性、提炼规律、形成观点", 2), ("D18", "初步洞察陈述", 2)],
        [("A19", "25", 2), ("B19", "初步洞察", 2), ("C19", "客户访谈、市场验证、逻辑检验", 2), ("D19", "经验证的成熟洞察", 2)],
        [("A20", "26", 2), ("B20", "成熟洞察", 2), ("C20", "撰写话术、准备案例、设计应用场景", 2), ("D20", "可交付的洞察成果", 2)],
    ]

    # ===== Sheet 2: 各阶段完成状态追踪 =====
    s2_rows = [
        [("A1", "27", 1)], [("A2", "28", 1)],
        [("A3", "29", 4), ("B3", "30", 4), ("C3", "31", 4), ("D3", "32", 4), ("E3", "33", 4)],
        # Phase 1
        [("A4", "34", 1), ("B4", "", 2), ("C4", "", 2), ("D4", "□已完成 □进行中 □未开始", 2), ("E4", "", 2)],
        [("A5", "35", 2), ("B5", "", 2), ("C5", "", 2), ("D5", "□已完成 □进行中 □未开始", 2), ("E5", "", 2)],
        [("A6", "36", 2), ("B6", "", 2), ("C6", "", 2), ("D6", "□已完成 □进行中 □未开始", 2), ("E6", "", 2)],
        [("A7", "37", 2), ("B7", "", 2), ("C7", "", 2), ("D7", "□已完成 □进行中 □未开始", 2), ("E7", "", 2)],
        # Phase 2
        [("A8", "38", 1), ("B8", "", 2), ("C8", "", 2), ("D8", "□已完成 □进行中 □未开始", 2), ("E8", "", 2)],
        [("A9", "39", 2), ("B9", "", 2), ("C9", "", 2), ("D9", "□已完成 □进行中 □未开始", 2), ("E9", "", 2)],
        [("A10", "40", 2), ("B10", "", 2), ("C10", "", 2), ("D10", "□已完成 □进行中 □未开始", 2), ("E10", "", 2)],
        [("A11", "41", 2), ("B11", "", 2), ("C11", "", 2), ("D11", "□已完成 □进行中 □未开始", 2), ("E11", "", 2)],
        # Phase 3
        [("A12", "42", 1), ("B12", "", 2), ("C12", "", 2), ("D12", "□已完成 □进行中 □未开始", 2), ("E12", "", 2)],
        [("A13", "43", 2), ("B13", "", 2), ("C13", "", 2), ("D13", "□已完成 □进行中 □未开始", 2), ("E13", "", 2)],
        [("A14", "44", 2), ("B14", "", 2), ("C14", "", 2), ("D14", "□已完成 □进行中 □未开始", 2), ("E14", "", 2)],
        [("A15", "45", 2), ("B15", "", 2), ("C15", "", 2), ("D15", "□已完成 □进行中 □未开始", 2), ("E15", "", 2)],
        # Phase 4
        [("A16", "46", 1), ("B16", "", 2), ("C16", "", 2), ("D16", "□已完成 □进行中 □未开始", 2), ("E16", "", 2)],
        [("A17", "47", 2), ("B17", "", 2), ("C17", "", 2), ("D17", "□已完成 □进行中 □未开始", 2), ("E17", "", 2)],
        [("A18", "48", 2), ("B18", "", 2), ("C18", "", 2), ("D18", "□已完成 □进行中 □未开始", 2), ("E18", "", 2)],
        [("A19", "49", 2), ("B19", "", 2), ("C19", "", 2), ("D19", "□已完成 □进行中 □未开始", 2), ("E19", "", 2)],
        # Phase 5
        [("A20", "50", 1), ("B20", "", 2), ("C20", "", 2), ("D20", "□已完成 □进行中 □未开始", 2), ("E20", "", 2)],
        [("A21", "51", 2), ("B21", "", 2), ("C21", "", 2), ("D21", "□已完成 □进行中 □未开始", 2), ("E21", "", 2)],
        [("A22", "52", 2), ("B22", "", 2), ("C22", "", 2), ("D22", "□已完成 □进行中 □未开始", 2), ("E22", "", 2)],
        [("A23", "53", 2), ("B23", "", 2), ("C23", "", 2), ("D23", "□已完成 □进行中 □未开始", 2), ("E23", "", 2)],
    ]

    # ===== Sheet 3: 洞察质量评分表 =====
    s3_rows = [
        [("A1", "54", 1)], [("A2", "55", 1)],
        [("A3", "56", 4), ("B3", "57", 4), ("C3", "58", 4), ("D3", "59", 4), ("E3", "60", 4), ("F3", "61", 4), ("G3", "62", 4)],
        [("A4", "63", 2), ("B4", "30%", 2), ("C4", "来源可靠，可查证", 2), ("D4", "来源较可靠", 2), ("E4", "来源一般", 2), ("F4", "", 3), ("G4", "", 2)],
        [("A5", "64", 2), ("B5", "25%", 2), ("C5", "网上几乎查不到", 2), ("D5", "少量类似", 2), ("E5", "较常见", 2), ("F5", "", 3), ("G5", "", 2)],
        [("A6", "65", 2), ("B6", "25%", 2), ("C6", "直接促进成交", 2), ("D6", "有助推进", 2), ("E6", "一般参考", 2), ("F6", "", 3), ("G6", "", 2)],
        [("A7", "66", 2), ("B7", "20%", 2), ("C7", "客户能听懂并感兴趣", 2), ("D7", "需要解释", 2), ("E7", "难理解", 2), ("F7", "", 3), ("G7", "", 2)],
        [("A8", "67", 9), ("B8", "100%", 9), ("C8", "", 9), ("D8", "", 9), ("E8", "", 9), ("F8", "", 9), ("G8", "", 9)],
        [("A10", "68", 1)],
        [("A11", "69", 4), ("B11", "70", 4), ("C11", "71", 4), ("D11", "72", 4), ("E11", "73", 4), ("F11", "74", 4)],
        [("A12", "75", 2), ("B12", "亲身经历，可视频验证", 2), ("C12", "有文字/录音记录", 2), ("D12", "他人转述但合理", 2), ("E12", "他人转述且存疑", 2), ("F12", "无法考证", 2)],
        [("A13", "76", 2), ("B13", "全网独家", 2), ("C13", "竞品不知道", 2), ("D13", "行业小范围知道", 2), ("E13", "行业常识", 2), ("F13", "烂大街", 2)],
        [("A14", "77", 2), ("B14", "直接带来百万级订单", 2), ("C14", "推进了关键客户", 2), ("D14", "提供了有用信息", 2), ("E14", "聊胜于无", 2), ("F14", "毫无价值", 2)],
        [("A15", "78", 2), ("B15", "一句话吸引客户", 2), ("C15", "三句话说明白", 2), ("D15", "需要案例辅助", 2), ("E15", "需要详细解释", 2), ("F15", "说不清", 2)],
    ]

    # ===== Sheet 4: 迭代记录表 =====
    s4_rows = [
        [("A1", "79", 1)], [("A2", "80", 1)],
        [("A3", "81", 4), ("B3", "82", 4), ("C3", "83", 4), ("D3", "84", 4), ("E3", "85", 4), ("F3", "86", 4)],
        [("A4", "87", 2), ("B4", "", 2), ("C4", "初始版本", 2), ("D4", "首次提炼", 2), ("E4", "", 2), ("F4", "", 2)],
        [("A5", "88", 2), ("B5", "", 2), ("C5", "", 2), ("D5", "", 2), ("E5", "", 2), ("F5", "", 2)],
        [("A6", "89", 2), ("B6", "", 2), ("C6", "", 2), ("D6", "", 2), ("E6", "", 2), ("F6", "", 2)],
        [("A7", "90", 2), ("B7", "", 2), ("C7", "", 2), ("D7", "", 2), ("E7", "", 2), ("F7", "", 2)],
        [("A9", "91", 1)],
        [("A10", "92", 2), ("B10", "", 2)],
        [("A11", "93", 2), ("B11", "", 2)],
        [("A12", "94", 2), ("B12", "", 2)],
        [("A13", "95", 2), ("B13", "", 2)],
    ]

    # Build
    work_dir = "/tmp/xlsx_build"
    copy_template(work_dir)
    create_styles_xml(work_dir)
    all_strings = strings
    str_mapping = create_shared_strings_xml(work_dir, all_strings)

    def resolve_rows(rows):
        resolved = []
        for row in rows:
            new_row = []
            for col, val, style in row:
                if isinstance(val, str) and val in str_mapping:
                    new_row.append((col, str_mapping[val], style))
                else:
                    new_row.append((col, val, style))
            resolved.append(new_row)
        return resolved

    sheet1_path = os.path.join(work_dir, "xl", "worksheets", "sheet1.xml")
    content = make_sheet_xml(resolve_rows(s1_rows), freeze=True, col_widths=[(1,1,22),(2,2,12),(3,3,12),(4,4,12),(5,5,12),(6,6,25)])
    with open(sheet1_path, 'w', encoding='utf-8') as f:
        f.write(content)

    sheet2_path = os.path.join(work_dir, "xl", "worksheets", "sheet2.xml")
    content = make_sheet_xml(resolve_rows(s2_rows), freeze=True, col_widths=[(1,1,28),(2,2,14),(3,3,14),(4,4,22),(5,5,18)])
    with open(sheet2_path, 'w', encoding='utf-8') as f:
        f.write(content)

    sheet3_path = os.path.join(work_dir, "xl", "worksheets", "sheet3.xml")
    content = make_sheet_xml(resolve_rows(s3_rows), freeze=True, col_widths=[(1,1,12),(2,2,8),(3,3,18),(4,3,14),(5,3,14),(6,3,8),(7,3,10)])
    with open(sheet3_path, 'w', encoding='utf-8') as f:
        f.write(content)

    sheet4_path = os.path.join(work_dir, "xl", "worksheets", "sheet4.xml")
    content = make_sheet_xml(resolve_rows(s4_rows), freeze=True, col_widths=[(1,1,10),(2,2,12),(3,3,22),(4,3,18),(5,3,18),(6,3,18)])
    with open(sheet4_path, 'w', encoding='utf-8') as f:
        f.write(content)

    update_workbook_xml(work_dir, [
        ("洞察转化工作流", 1, 4), ("状态追踪", 2, 5), ("质量评分", 3, 6), ("迭代记录", 4, 7)
    ])
    update_workbook_rels(work_dir, [
        ("洞察转化工作流", 1, 4), ("状态追踪", 2, 5), ("质量评分", 3, 6), ("迭代记录", 4, 7)
    ])
    update_content_types(work_dir, 4)

    os.makedirs(os.path.dirname(output), exist_ok=True)
    pack_xlsx(work_dir, output)
    print("Created: " + output)


# ===================== FILE 3: 30天洞察进化追踪表.xlsx =====================
def build_file3():
    output = "D:/新课开发/营销/一线销售/03 差异化洞察：说出网上查不到的话/08-配套表单Excel/30天洞察进化追踪表.xlsx"

    strings = [
        "30天洞察进化追踪表",
        "课程3：差异化洞察 | 配套表单",
        "使用说明",
        "分三阶段追踪30天内的洞察进化过程，每天一个任务，循序渐进",
        "版本：V1.0 | 2026年",
        # Sheet 1: 每日任务清单
        "【Sheet1】每日任务清单（三阶段）",
        "日期", "阶段", "核心任务", "完成情况", "自我评分", "备注",
        "第1天", "启动期", "确定3个重点客户，列出他们的核心痛点", "□已完成 □进行中", "/5", "",
        "第2天", "启动期", "记录与客户A的完整对话，标注情绪变化点", "□已完成 □进行中", "/5", "",
        "第3天", "启动期", "记录与客户B的完整对话，标注情绪变化点", "□已完成 □进行中", "/5", "",
        "第4天", "启动期", "记录与客户C的完整对话，标注情绪变化点", "□已完成 □进行中", "/5", "",
        "第5天", "启动期", "从3个对话中各提炼1个核心洞察", "□已完成 □进行中", "/5", "",
        "第6天", "启动期", "验证3个洞察：在下次拜访中试探性提及", "□已完成 □进行中", "/5", "",
        "第7天", "启动期", "复盘周成果：哪些洞察引起了客户兴趣", "□已完成 □进行中", "/5", "",
        "第8天", "成长期", "整理上周最有效的洞察，准备详细案例", "□已完成 □进行中", "/5", "",
        "第9天", "成长期", "设计3个洞察的呈现话术", "□已完成 □进行中", "/5", "",
        "第10天", "成长期", "在实际拜访中测试洞察话术", "□已完成 □进行中", "/5", "",
        "第11天", "成长期", "收集客户对洞察的真实反应", "□已完成 □进行中", "/5", "",
        "第12天", "成长期", "根据反馈优化洞察表述", "□已完成 □进行中", "/5", "",
        "第13天", "成长期", "将洞察整理成可复用的素材库", "□已完成 □进行中", "/5", "",
        "第14天", "成长期", "复盘两周成果，确定第二批洞察方向", "□已完成 □进行中", "/5", "",
        "第15天", "进阶期", "开始采集新的原始素材", "□已完成 □进行中", "/5", "",
        "第16天", "进阶期", "练习洞察的组合使用", "□已完成 □进行中", "/5", "",
        "第17天", "进阶期", "尝试用洞察引导客户需求", "□已完成 □进行中", "/5", "",
        "第18天", "进阶期", "记录客户的决策障碍点", "□已完成 □进行中", "/5", "",
        "第19天", "进阶期", "将决策障碍转化为洞察机会", "□已完成 □进行中", "/5", "",
        "第20天", "进阶期", "在实际场景中验证新洞察", "□已完成 □进行中", "/5", "",
        "第21天", "进阶期", "中期总结：整理可复用的洞察体系", "□已完成 □进行中", "/5", "",
        "第22天", "进阶期", "优化洞察呈现的节奏和顺序", "□已完成 □进行中", "/5", "",
        "第23天", "进阶期", "练习跨客户场景使用洞察", "□已完成 □进行中", "/5", "",
        "第24天", "进阶期", "记录不同客户对同一洞察的反应差异", "□已完成 □进行中", "/5", "",
        "第25天", "进阶期", "根据客户特点定制洞察表达", "□已完成 □进行中", "/5", "",
        "第26天", "进阶期", "将优秀洞察整理为标准话术", "□已完成 □进行中", "/5", "",
        "第27天", "进阶期", "准备最终的洞察展示材料", "□已完成 □进行中", "/5", "",
        "第28天", "进阶期", "向导师或同事展示洞察成果", "□已完成 □进行中", "/5", "",
        "第29天", "进阶期", "收集反馈，进行最后一轮优化", "□已完成 □进行中", "/5", "",
        "第30天", "总结期", "30天总结：梳理完整的洞察进化路径", "□已完成 □进行中", "/5", "",
        "三阶段目标",
        "阶段", "时间", "核心目标", "关键产出",
        "启动期", "第1-7天", "建立洞察采集习惯，找到感觉", "3-5个初始洞察",
        "成长期", "第8-14天", "验证和优化洞察，学会表达", "经过验证的成熟洞察",
        "进阶期", "第15-28天", "建立洞察体系，灵活运用", "可复制的洞察库",
        "总结期", "第29-30天", "复盘整理，形成方法论", "个人洞察方法论",
        # Sheet 2: 里程碑完成情况
        "【Sheet2】里程碑完成情况",
        "里程碑", "计划完成日", "实际完成日", "完成状态", "成果摘要",
        "M1：完成7天连续采集", "", "", "□已达成 □进行中 □未达成", "",
        "M2：形成3个可验证洞察", "", "", "□已达成 □进行中 □未达成", "",
        "M3：通过客户验证", "", "", "□已达成 □进行中 □未达成", "",
        "M4：建立个人素材库", "", "", "□已达成 □进行中 □未达成", "",
        "M5：完成中期复盘", "", "", "□已达成 □进行中 □未达成", "",
        "M6：洞察体系成型", "", "", "□已达成 □进行中 □未达成", "",
        "M7：完成最终展示", "", "", "□已达成 □进行中 □未达成", "",
        "里程碑进度", "0/7", "已完成0个里程碑，还需努力！",
        # Sheet 3: 关键指标追踪
        "【Sheet3】关键指标追踪",
        "指标类别", "指标名称", "第1周", "第2周", "第3周", "第4周", "变化趋势",
        "素材采集", "采集素材数", "", "", "", "", "",
        "素材采集", "优质素材数", "", "", "", "", "",
        "素材采集", "素材来源客户数", "", "", "", "", "",
        "洞察提炼", "初步洞察数", "", "", "", "", "",
        "洞察提炼", "经验证洞察数", "", "", "", "", "",
        "洞察提炼", "可复用洞察数", "", "", "", "", "",
        "实战验证", "验证次数", "", "", "", "", "",
        "实战验证", "客户正面反馈次数", "", "", "", "", "",
        "实战验证", "促进成交关联次数", "", "", "", "", "",
        "业务效果", "成交率变化", "", "", "", "", "",
        "业务效果", "客户拜访效率提升", "", "", "", "", "",
        "业务效果", "销售话术使用频次", "", "", "", "", "",
        "指标说明",
        "成交率变化", "使用洞察后的成交率相比之前的变化（百分点）",
        "客户拜访效率", "平均多少次拜访能获得一个有效洞察",
        "话术使用频次", "每周在拜访中使用洞察话术的次数",
        # Sheet 4: 雷达图数据
        "【Sheet4】雷达图数据（多维度能力评估）",
        "能力维度", "第1周初", "第2周末", "第3周末", "第4周末", "目标值",
        "洞察敏感度", "1", "", "", "", "5",
        "素材采集能力", "1", "", "", "", "5",
        "洞察提炼能力", "1", "", "", "", "5",
        "客户验证能力", "1", "", "", "", "5",
        "话术表达能力", "1", "", "", "", "5",
        "场景应用能力", "1", "", "", "", "5",
        "迭代优化能力", "1", "", "", "", "5",
        "能力评估标准",
        "维度", "1分", "2分", "3分", "4分", "5分",
        "洞察敏感度", "需要提醒才注意", "偶尔注意到", "经常注意到", "主动系统化采集", "形成条件反射",
        "素材采集能力", "很少记录", "偶尔记录", "有记录但不系统", "系统化采集", "形成习惯",
        "洞察提炼能力", "不知道如何提炼", "能提炼但较浅", "能提炼核心观点", "提炼精准有深度", "洞察独特有力",
        "客户验证能力", "不验证", "偶尔验证", "有时验证", "经常验证", "系统验证流程",
        "话术表达能力", "说不清楚", "能说但不生动", "表达清晰", "表达生动有感染力", "出口成章",
        "场景应用能力", "不会用", "偶尔用", "有时用", "经常用", "用得恰到好处",
        "迭代优化能力", "不优化", "偶尔优化", "有时优化", "经常优化", "持续迭代优化",
        "雷达图配置说明",
        "将以上数据复制到Excel的雷达图功能中，即可生成能力进化雷达图",
        "推荐使用：填充雷达图，数据点连接形成七边形轮廓",
        "四个时间段的数据用不同颜色区分，观察能力提升轨迹",
    ]

    # ===== Sheet 1: 每日任务清单 =====
    s1_rows = [
        [("A1", "0", 1)], [("A2", "1", 1)], [("A3", "2", 1)],
        [("A4", "3", 2)], [("A5", "4", 2)],
        # 表头
        [("A6", "5", 4), ("B6", "6", 4), ("C6", "7", 4), ("D6", "8", 4), ("E6", "9", 4), ("F6", "10", 4)],
        # 30天数据行
    ] + [
        [("A" + str(7+i), str(11+i*4), 2), ("B" + str(7+i), str(12+i*4), 2 if i < 7 else (5 if i < 14 else 8)), ("C" + str(7+i), str(13+i*4), 2), ("D" + str(7+i), "□已完成 □进行中", 2), ("E" + str(7+i), "/5", 3), ("F" + str(7+i), "", 2)]
        for i in range(30)
    ] + [
        # 三阶段目标
        [("A38", "131", 1)],
        [("A39", "132", 4), ("B39", "133", 4), ("C39", "134", 4), ("D39", "135", 4)],
        [("A40", "136", 2), ("B40", "第1-7天", 2), ("C40", "建立洞察采集习惯，找到感觉", 2), ("D40", "3-5个初始洞察", 2)],
        [("A41", "137", 2), ("B41", "第8-14天", 2), ("C41", "验证和优化洞察，学会表达", 2), ("D41", "经过验证的成熟洞察", 2)],
        [("A42", "138", 2), ("B42", "第15-28天", 2), ("C42", "建立洞察体系，灵活运用", 2), ("D42", "可复制的洞察库", 2)],
        [("A43", "139", 2), ("B43", "第29-30天", 2), ("C43", "复盘整理，形成方法论", 2), ("D43", "个人洞察方法论", 2)],
    ]

    # ===== Sheet 2: 里程碑完成情况 =====
    s2_rows = [
        [("A1", "140", 1)], [("A2", "141", 1)],
        [("A3", "142", 4), ("B3", "143", 4), ("C3", "144", 4), ("D3", "145", 4), ("E3", "146", 4)],
        [("A4", "147", 2), ("B4", "", 2), ("C4", "", 2), ("D4", "□已达成 □进行中 □未达成", 2), ("E4", "", 2)],
        [("A5", "148", 2), ("B5", "", 2), ("C5", "", 2), ("D5", "□已达成 □进行中 □未达成", 2), ("E5", "", 2)],
        [("A6", "149", 2), ("B6", "", 2), ("C6", "", 2), ("D6", "□已达成 □进行中 □未达成", 2), ("E6", "", 2)],
        [("A7", "150", 2), ("B7", "", 2), ("C7", "", 2), ("D7", "□已达成 □进行中 □未达成", 2), ("E7", "", 2)],
        [("A8", "151", 2), ("B8", "", 2), ("C8", "", 2), ("D8", "□已达成 □进行中 □未达成", 2), ("E8", "", 2)],
        [("A9", "152", 2), ("B9", "", 2), ("C9", "", 2), ("D9", "□已达成 □进行中 □未达成", 2), ("E9", "", 2)],
        [("A10", "153", 2), ("B10", "", 2), ("C10", "", 2), ("D10", "□已达成 □进行中 □未达成", 2), ("E10", "", 2)],
        [("A12", "154", 1)],
        [("A13", "155", 2), ("B13", "0/7", 2)],
        [("A14", "156", 2)],
    ]

    # ===== Sheet 3: 关键指标追踪 =====
    s3_rows = [
        [("A1", "157", 1)], [("A2", "158", 1)],
        [("A3", "159", 4), ("B3", "160", 4), ("C3", "161", 4), ("D3", "162", 4), ("E3", "163", 4), ("F3", "164", 4), ("G3", "165", 4)],
        # 素材采集
        [("A4", "166", 2), ("B4", "采集素材数", 2), ("C4", "", 2), ("D4", "", 2), ("E4", "", 2), ("F4", "", 2), ("G4", "", 2)],
        [("A5", "167", 2), ("B5", "优质素材数", 2), ("C5", "", 2), ("D5", "", 2), ("E5", "", 2), ("F5", "", 2), ("G5", "", 2)],
        [("A6", "168", 2), ("B6", "素材来源客户数", 2), ("C6", "", 2), ("D6", "", 2), ("E6", "", 2), ("F6", "", 2), ("G6", "", 2)],
        # 洞察提炼
        [("A7", "169", 2), ("B7", "初步洞察数", 2), ("C7", "", 2), ("D7", "", 2), ("E7", "", 2), ("F7", "", 2), ("G7", "", 2)],
        [("A8", "170", 2), ("B8", "经验证洞察数", 2), ("C8", "", 2), ("D8", "", 2), ("E8", "", 2), ("F8", "", 2), ("G8", "", 2)],
        [("A9", "171", 2), ("B9", "可复用洞察数", 2), ("C9", "", 2), ("D9", "", 2), ("E9", "", 2), ("F9", "", 2), ("G9", "", 2)],
        # 实战验证
        [("A10", "172", 2), ("B10", "验证次数", 2), ("C10", "", 2), ("D10", "", 2), ("E10", "", 2), ("F10", "", 2), ("G10", "", 2)],
        [("A11", "173", 2), ("B11", "客户正面反馈次数", 2), ("C11", "", 2), ("D11", "", 2), ("E11", "", 2), ("F11", "", 2), ("G11", "", 2)],
        [("A12", "174", 2), ("B12", "促进成交关联次数", 2), ("C12", "", 2), ("D12", "", 2), ("E12", "", 2), ("F12", "", 2), ("G12", "", 2)],
        # 业务效果
        [("A13", "175", 2), ("B13", "成交率变化", 2), ("C13", "", 2), ("D13", "", 2), ("E13", "", 2), ("F13", "", 2), ("G13", "", 2)],
        [("A14", "176", 2), ("B14", "客户拜访效率提升", 2), ("C14", "", 2), ("D14", "", 2), ("E14", "", 2), ("F14", "", 2), ("G14", "", 2)],
        [("A15", "177", 2), ("B15", "销售话术使用频次", 2), ("C15", "", 2), ("D15", "", 2), ("E15", "", 2), ("F15", "", 2), ("G15", "", 2)],
        # 指标说明
        [("A17", "178", 1)],
        [("A18", "179", 2), ("B18", "使用洞察后的成交率相比之前的变化（百分点）", 2)],
        [("A19", "180", 2), ("B19", "平均多少次拜访能获得一个有效洞察", 2)],
        [("A20", "181", 2), ("B20", "每周在拜访中使用洞察话术的次数", 2)],
    ]

    # ===== Sheet 4: 雷达图数据 =====
    s4_rows = [
        [("A1", "182", 1)], [("A2", "183", 1)],
        [("A3", "184", 4), ("B3", "185", 4), ("C3", "186", 4), ("D3", "187", 4), ("E3", "188", 4), ("F3", "189", 4)],
        [("A4", "190", 2), ("B4", "1", 2), ("C4", "", 2), ("D4", "", 2), ("E4", "", 2), ("F4", "5", 2)],
        [("A5", "191", 2), ("B5", "1", 2), ("C5", "", 2), ("D5", "", 2), ("E5", "", 2), ("F5", "5", 2)],
        [("A6", "192", 2), ("B6", "1", 2), ("C6", "", 2), ("D6", "", 2), ("E6", "", 2), ("F6", "5", 2)],
        [("A7", "193", 2), ("B7", "1", 2), ("C7", "", 2), ("D7", "", 2), ("E7", "", 2), ("F7", "5", 2)],
        [("A8", "194", 2), ("B8", "1", 2), ("C8", "", 2), ("D8", "", 2), ("E8", "", 2), ("F8", "5", 2)],
        [("A9", "195", 2), ("B9", "1", 2), ("C9", "", 2), ("D9", "", 2), ("E9", "", 2), ("F9", "5", 2)],
        [("A10", "196", 2), ("B10", "1", 2), ("C10", "", 2), ("D10", "", 2), ("E10", "", 2), ("F10", "5", 2)],
        # 评估标准
        [("A12", "197", 1)],
        [("A13", "198", 4), ("B13", "199", 4), ("C13", "200", 4), ("D13", "201", 4), ("E13", "202", 4), ("F13", "203", 4)],
        [("A14", "204", 2), ("B14", "需要提醒才注意", 2), ("C14", "偶尔注意到", 2), ("D14", "经常注意到", 2), ("E14", "主动系统化采集", 2), ("F14", "形成条件反射", 2)],
        [("A15", "205", 2), ("B15", "很少记录", 2), ("C15", "偶尔记录", 2), ("D15", "有记录但不系统", 2), ("E15", "系统化采集", 2), ("F15", "形成习惯", 2)],
        [("A16", "206", 2), ("B16", "不知道如何提炼", 2), ("C16", "能提炼但较浅", 2), ("D16", "能提炼核心观点", 2), ("E16", "提炼精准有深度", 2), ("F16", "洞察独特有力", 2)],
        [("A17", "207", 2), ("B17", "不验证", 2), ("C17", "偶尔验证", 2), ("D17", "有时验证", 2), ("E17", "经常验证", 2), ("F17", "系统验证流程", 2)],
        [("A18", "208", 2), ("B18", "说不清楚", 2), ("C18", "能说但不生动", 2), ("D18", "表达清晰", 2), ("E18", "表达生动有感染力", 2), ("F18", "出口成章", 2)],
        [("A19", "209", 2), ("B19", "不会用", 2), ("C19", "偶尔用", 2), ("D19", "有时用", 2), ("E19", "经常用", 2), ("F19", "用得恰到好处", 2)],
        [("A20", "210", 2), ("B20", "不优化", 2), ("C20", "偶尔优化", 2), ("D20", "有时优化", 2), ("E20", "经常优化", 2), ("F20", "持续迭代优化", 2)],
        # 配置说明
        [("A22", "211", 1)],
        [("A23", "212", 2)],
        [("A24", "213", 2)],
        [("A25", "214", 2)],
    ]

    # Build
    work_dir = "/tmp/xlsx_build"
    copy_template(work_dir)
    create_styles_xml(work_dir)
    all_strings = strings
    str_mapping = create_shared_strings_xml(work_dir, all_strings)

    def resolve_rows(rows):
        resolved = []
        for row in rows:
            new_row = []
            for col, val, style in row:
                if isinstance(val, str) and val in str_mapping:
                    new_row.append((col, str_mapping[val], style))
                else:
                    new_row.append((col, val, style))
            resolved.append(new_row)
        return resolved

    sheet1_path = os.path.join(work_dir, "xl", "worksheets", "sheet1.xml")
    content = make_sheet_xml(resolve_rows(s1_rows), freeze=True, col_widths=[(1,1,10),(2,2,10),(3,3,32),(4,4,18),(5,5,10),(6,6,14)])
    with open(sheet1_path, 'w', encoding='utf-8') as f:
        f.write(content)

    sheet2_path = os.path.join(work_dir, "xl", "worksheets", "sheet2.xml")
    content = make_sheet_xml(resolve_rows(s2_rows), freeze=True, col_widths=[(1,1,24),(2,2,14),(3,3,14),(4,4,22),(5,5,22)])
    with open(sheet2_path, 'w', encoding='utf-8') as f:
        f.write(content)

    sheet3_path = os.path.join(work_dir, "xl", "worksheets", "sheet3.xml")
    content = make_sheet_xml(resolve_rows(s3_rows), freeze=True, col_widths=[(1,1,12),(2,2,16),(3,3,10),(4,3,10),(5,3,10),(6,3,10),(7,3,12)])
    with open(sheet3_path, 'w', encoding='utf-8') as f:
        f.write(content)

    sheet4_path = os.path.join(work_dir, "xl", "worksheets", "sheet4.xml")
    content = make_sheet_xml(resolve_rows(s4_rows), freeze=True, col_widths=[(1,1,14),(2,2,20),(3,3,16),(4,3,16),(5,3,16),(6,3,16)])
    with open(sheet4_path, 'w', encoding='utf-8') as f:
        f.write(content)

    update_workbook_xml(work_dir, [
        ("每日任务清单", 1, 4), ("里程碑追踪", 2, 5), ("关键指标", 3, 6), ("雷达图数据", 4, 7)
    ])
    update_workbook_rels(work_dir, [
        ("每日任务清单", 1, 4), ("里程碑追踪", 2, 5), ("关键指标", 3, 6), ("雷达图数据", 4, 7)
    ])
    update_content_types(work_dir, 4)

    os.makedirs(os.path.dirname(output), exist_ok=True)
    pack_xlsx(work_dir, output)
    print("Created: " + output)


# ===================== FILE 4: 销售话术库.xlsx =====================
def build_file4():
    output = "D:/新课开发/营销/一线销售/03 差异化洞察：说出网上查不到的话/08-配套表单Excel/销售话术库.xlsx"

    strings = [
        "销售话术库",
        "课程3：差异化洞察 | 配套表单",
        "使用说明",
        "基于洞察素材库中的优质洞察，转化为可复用的销售话术",
        "版本：V1.0 | 2026年",
        # Sheet 1: 洞察话术分类管理
        "【Sheet1】洞察话术分类管理",
        "序号", "话术标题", "所属洞察", "适用场景", "话术类型", "使用频次", "效果评分", "状态",
        "使用说明", "话术类型：开场白/需求挖掘/方案呈现/异议处理/成交促进",
        "效果评分标准：", "5-非常有效 | 4-有效 | 3-一般 | 2-待优化 | 1-无效",
        # Sheet 2: 四种场景话术
        "【Sheet2】四种场景话术",
        "场景类型", "场景描述", "核心洞察", "话术模板", "使用时机", "注意事项",
        "电梯演讲", "在电梯里、走廊等短时间场景（30秒-2分钟），快速吸引客户兴趣", "", "我了解到[客户行业]的客户最近都在关注[洞察主题]，因为[核心洞察]。我们有个客户用我们的方案[效果]，您有兴趣了解一下吗？", "客户主动问你做什么的，或者你主动打招呼后", "1. 控制30秒内\n2. 只说一个核心点\n3. 留个钩子", "",
        "客户拜访", "正式的客户拜访场景（30分钟-2小时），深入挖掘需求和呈现方案", "", "您提到[客户痛点]，其实我们很多客户之前也有同样的困扰。当时他们用了一个方法[洞察内容]，您觉得这个方向值得尝试吗？", "客户表达困惑或不满时", "1. 先共情\n2. 再给洞察\n3. 最后引导方案", "",
        "方案呈现", "向客户正式呈现解决方案的阶段（1-2小时），系统展示方案价值", "", "基于我们之前的沟通，我给您分享一下我们如何帮助类似客户解决[核心问题]。[洞察]所以我们的方案是[针对性措施]，这样可以帮您达到[预期效果]。", "开始正式讲方案时", "1. 开头用洞察建立信任\n2. 中间用洞察说明为什么\n3. 结尾用洞察强化记忆", "",
        "社交媒体", "微信、LinkedIn等线上社交场景，远程与客户建立关系和互动", "", "刚看到一个有意思的数据：[洞察内容]这对[客户行业]的您可能有参考价值，您怎么看？", "发现与客户相关的行业信息时", "1. 内容要有价值\n2. 不要直接推销\n3. 引发互动", "",
        # Sheet 3: 话术效果追踪
        "【Sheet3】话术效果追踪",
        "话术编号", "话术名称", "使用日期", "使用场合", "客户反馈", "效果评级", "改进建议", "使用人",
        "E1", "", "", "", "", "5-非常有效 □\n4-有效 □\n3-一般 □\n2-待优化 □\n1-无效 □", "", "",
        "E2", "", "", "", "", "5-非常有效 □\n4-有效 □\n3-一般 □\n2-待优化 □\n1-无效 □", "", "",
        "E3", "", "", "", "", "5-非常有效 □\n4-有效 □\n3-一般 □\n2-待优化 □\n1-无效 □", "", "",
        "效果统计", "", "", "", "", "", "", "",
        "使用次数合计", "", "", "", "", "", "", "",
        "平均效果评分", "", "", "", "", "", "", "",
        "最有效话术", "", "", "", "", "", "", "",
        "待优化话术", "", "", "", "", "", "", "",
        # Sheet 4: 迭代优化记录
        "【Sheet4】迭代优化记录",
        "版本", "日期", "话术编号", "优化内容", "优化原因", "优化前", "优化后", "效果验证",
        "V1.0", "", "", "初始版本", "首次整理", "", "", "",
        "V1.1", "", "", "", "", "", "", "",
        "V1.2", "", "", "", "", "", "", "",
        "V2.0", "", "", "", "", "", "", "",
        "迭代总结",
        "总迭代次数", "", "当前版本", "",
        "优化方向分布", "", "", "",
        "最有效的优化", "", "", "",
        "下次迭代重点", "", "", "",
    ]

    # ===== Sheet 1: 洞察话术分类管理 =====
    s1_rows = [
        [("A1", "0", 1)], [("A2", "1", 1)], [("A3", "2", 1)],
        [("A4", "3", 2)], [("A5", "4", 2)],
        # 表头
        [("A6", "5", 4), ("B6", "6", 4), ("C6", "7", 4), ("D6", "8", 4), ("E6", "9", 4), ("F6", "10", 4), ("G6", "11", 4), ("H6", "12", 4)],
        # 示例行
        [("A7", "1", 2), ("B7", "客户痛点话术A", 2), ("C7", "客户普遍反映竞品交付慢", 2), ("D7", "电梯演讲/客户拜访", 2), ("E7", "开场白", 2), ("F7", "", 3), ("G7", "", 3), ("H7", "□可用 □待优化", 2)],
        [("A8", "2", 2), ("B8", "", 2), ("C8", "", 2), ("D8", "", 2), ("E8", "", 2), ("F8", "", 3), ("G8", "", 3), ("H8", "□可用 □待优化", 2)],
        [("A9", "3", 2), ("B9", "", 2), ("C9", "", 2), ("D9", "", 2), ("E9", "", 2), ("F9", "", 3), ("G9", "", 3), ("H9", "□可用 □待优化", 2)],
        [("A10", "4", 2), ("B10", "", 2), ("C10", "", 2), ("D10", "", 2), ("E10", "", 2), ("F10", "", 3), ("G10", "", 3), ("H10", "□可用 □待优化", 2)],
        [("A11", "5", 2), ("B11", "", 2), ("C11", "", 2), ("D11", "", 2), ("E11", "", 2), ("F11", "", 3), ("G11", "", 3), ("H11", "□可用 □待优化", 2)],
        # 说明
        [("A15", "13", 1)],
        [("A16", "14", 2)],
        [("A17", "15", 2)],
    ]

    # ===== Sheet 2: 四种场景话术 =====
    s2_rows = [
        [("A1", "16", 1)], [("A2", "17", 1)],
        [("A3", "18", 4), ("B3", "19", 4), ("C3", "20", 4), ("D3", "21", 4), ("E3", "22", 4), ("F3", "23", 4)],
        # 电梯演讲
        [("A4", "24", 6), ("B4", "在电梯里、走廊等短时间场景（30秒-2分钟），快速吸引客户兴趣", 2), ("C4", "", 2), ("D4", "我了解到[客户行业]的客户最近都在关注[洞察主题]，因为[核心洞察]。我们有个客户用我们的方案[效果]，您有兴趣了解一下吗？", 2), ("E4", "客户主动问你做什么的，或者你主动打招呼后", 2), ("F4", "1. 控制30秒内\n2. 只说一个核心点\n3. 留个钩子", 2)],
        # 客户拜访
        [("A5", "25", 1), ("B5", "正式的客户拜访场景（30分钟-2小时），深入挖掘需求和呈现方案", 2), ("C5", "", 2), ("D5", "您提到[客户痛点]，其实我们很多客户之前也有同样的困扰。当时他们用了一个方法[洞察内容]，您觉得这个方向值得尝试吗？", 2), ("E5", "客户表达困惑或不满时", 2), ("F5", "1. 先共情\n2. 再给洞察\n3. 最后引导方案", 2)],
        # 方案呈现
        [("A6", "26", 4), ("B6", "向客户正式呈现解决方案的阶段（1-2小时），系统展示方案价值", 2), ("C6", "", 2), ("D6", "基于我们之前的沟通，我给您分享一下我们如何帮助类似客户解决[核心问题]。[洞察]所以我们的方案是[针对性措施]，这样可以帮您达到[预期效果]。", 2), ("E6", "开始正式讲方案时", 2), ("F6", "1. 开头用洞察建立信任\n2. 中间用洞察说明为什么\n3. 结尾用洞察强化记忆", 2)],
        # 社交媒体
        [("A7", "27", 8), ("B7", "微信、LinkedIn等线上社交场景，远程与客户建立关系和互动", 2), ("C7", "", 2), ("D7", "刚看到一个有意思的数据：[洞察内容]这对[客户行业]的您可能有参考价值，您怎么看？", 2), ("E7", "发现与客户相关的行业信息时", 2), ("F7", "1. 内容要有价值\n2. 不要直接推销\n3. 引发互动", 2)],
    ]

    # ===== Sheet 3: 话术效果追踪 =====
    s3_rows = [
        [("A1", "28", 1)], [("A2", "29", 1)],
        [("A3", "30", 4), ("B3", "31", 4), ("C3", "32", 4), ("D3", "33", 4), ("E3", "34", 4), ("F3", "35", 4), ("G3", "36", 4), ("H3", "37", 4)],
        # 示例行
        [("A4", "38", 2), ("B4", "", 2), ("C4", "", 2), ("D4", "", 2), ("E4", "", 2), ("F4", "5-非常有效 □\n4-有效 □\n3-一般 □\n2-待优化 □\n1-无效 □", 2), ("G4", "", 2), ("H4", "", 2)],
        [("A5", "39", 2), ("B5", "", 2), ("C5", "", 2), ("D5", "", 2), ("E5", "", 2), ("F5", "5-非常有效 □\n4-有效 □\n3-一般 □\n2-待优化 □\n1-无效 □", 2), ("G5", "", 2), ("H5", "", 2)],
        [("A6", "40", 2), ("B6", "", 2), ("C6", "", 2), ("D6", "", 2), ("E6", "", 2), ("F6", "5-非常有效 □\n4-有效 □\n3-一般 □\n2-待优化 □\n1-无效 □", 2), ("G6", "", 2), ("H6", "", 2)],
        # 统计
        [("A9", "41", 1)],
        [("A10", "42", 2), ("B10", "", 2)],
        [("A11", "43", 2), ("B11", "", 2)],
        [("A12", "44", 2), ("B12", "", 2)],
        [("A13", "45", 2), ("B13", "", 2)],
    ]

    # ===== Sheet 4: 迭代优化记录 =====
    s4_rows = [
        [("A1", "46", 1)], [("A2", "47", 1)],
        [("A3", "48", 4), ("B3", "49", 4), ("C3", "50", 4), ("D3", "51", 4), ("E3", "52", 4), ("F3", "53", 4), ("G3", "54", 4), ("H3", "55", 4)],
        [("A4", "56", 2), ("B4", "", 2), ("C4", "初始版本", 2), ("D4", "首次整理", 2), ("E4", "", 2), ("F4", "", 2), ("G4", "", 2), ("H4", "", 2)],
        [("A5", "57", 2), ("B5", "", 2), ("C5", "", 2), ("D5", "", 2), ("E5", "", 2), ("F5", "", 2), ("G5", "", 2), ("H5", "", 2)],
        [("A6", "58", 2), ("B6", "", 2), ("C6", "", 2), ("D6", "", 2), ("E6", "", 2), ("F6", "", 2), ("G6", "", 2), ("H6", "", 2)],
        [("A7", "59", 2), ("B7", "", 2), ("C7", "", 2), ("D7", "", 2), ("E7", "", 2), ("F7", "", 2), ("G7", "", 2), ("H7", "", 2)],
        # 总结
        [("A9", "60", 1)],
        [("A10", "61", 2), ("B10", "", 2)],
        [("A11", "62", 2), ("B11", "", 2)],
        [("A12", "63", 2), ("B12", "", 2)],
        [("A13", "64", 2), ("B13", "", 2)],
    ]

    # Build
    work_dir = "/tmp/xlsx_build"
    copy_template(work_dir)
    create_styles_xml(work_dir)
    all_strings = strings
    str_mapping = create_shared_strings_xml(work_dir, all_strings)

    def resolve_rows(rows):
        resolved = []
        for row in rows:
            new_row = []
            for col, val, style in row:
                if isinstance(val, str) and val in str_mapping:
                    new_row.append((col, str_mapping[val], style))
                else:
                    new_row.append((col, val, style))
            resolved.append(new_row)
        return resolved

    sheet1_path = os.path.join(work_dir, "xl", "worksheets", "sheet1.xml")
    content = make_sheet_xml(resolve_rows(s1_rows), freeze=True, col_widths=[(1,1,8),(2,2,18),(3,3,20),(4,4,16),(5,5,12),(6,6,10),(7,7,10),(8,8,14)])
    with open(sheet1_path, 'w', encoding='utf-8') as f:
        f.write(content)

    sheet2_path = os.path.join(work_dir, "xl", "worksheets", "sheet2.xml")
    content = make_sheet_xml(resolve_rows(s2_rows), freeze=True, col_widths=[(1,1,12),(2,2,22),(3,3,14),(4,4,35),(5,3,18),(6,3,20)])
    with open(sheet2_path, 'w', encoding='utf-8') as f:
        f.write(content)

    sheet3_path = os.path.join(work_dir, "xl", "worksheets", "sheet3.xml")
    content = make_sheet_xml(resolve_rows(s3_rows), freeze=True, col_widths=[(1,1,10),(2,2,16),(3,3,12),(4,3,14),(5,3,16),(6,3,18),(7,3,16),(8,3,12)])
    with open(sheet3_path, 'w', encoding='utf-8') as f:
        f.write(content)

    sheet4_path = os.path.join(work_dir, "xl", "worksheets", "sheet4.xml")
    content = make_sheet_xml(resolve_rows(s4_rows), freeze=True, col_widths=[(1,1,10),(2,2,12),(3,3,12),(4,3,20),(5,3,16),(6,3,18),(7,3,18),(8,3,14)])
    with open(sheet4_path, 'w', encoding='utf-8') as f:
        f.write(content)

    update_workbook_xml(work_dir, [
        ("话术分类管理", 1, 4), ("四种场景话术", 2, 5), ("效果追踪", 3, 6), ("迭代优化", 4, 7)
    ])
    update_workbook_rels(work_dir, [
        ("话术分类管理", 1, 4), ("四种场景话术", 2, 5), ("效果追踪", 3, 6), ("迭代优化", 4, 7)
    ])
    update_content_types(work_dir, 4)

    os.makedirs(os.path.dirname(output), exist_ok=True)
    pack_xlsx(work_dir, output)
    print("Created: " + output)


# Build all 4 files
if __name__ == "__main__":
    print("Building File 1: 洞察素材采集管理系统.xlsx")
    build_file1()
    print()
    print("Building File 2: 洞察加工流程追踪表.xlsx")
    build_file2()
    print()
    print("Building File 3: 30天洞察进化追踪表.xlsx")
    build_file3()
    print()
    print("Building File 4: 销售话术库.xlsx")
    build_file4()
    print()
    print("All 4 Excel files have been created successfully!")
