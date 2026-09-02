#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Build F7: 技能认证体系表.xlsx
Skill Certification System Table with:
- Title: 技能认证体系表
- Columns: 认证等级, 认证要求, 评估方式, 有效期, 认证状态
- 4 certification levels: 初级认证, 中级认证, 高级认证, 专家认证
- Requirements: 知识测试, 技能实操, 项目经验, 持续学习
- Status tracking with expiration warnings
- Blue for inputs, Black for formulas
"""

import os
import shutil
import zipfile

TEMPLATE_DIR = "C:/Users/Administrator/.claude/skills/Excel表格处理/templates/minimal_xlsx"
WORK_DIR = "D:/CC/temp/F7_build"

# Colors in AARRGGBB format
DARK_BLUE = "00003B5A"      # Header background #003B5A
LIGHT_BLUE = "00D9E8F5"     # Input cells #D9E8F5
CREAM = "00F5F5DC"          # Alternating rows #F5F5DC
WARNING_YELLOW = "00FFFACD" # Expiration warning
EXPIRED_RED = "00FFB6C1"    # Expired status

def copy_template():
    if os.path.exists(WORK_DIR):
        shutil.rmtree(WORK_DIR)
    shutil.copytree(TEMPLATE_DIR, WORK_DIR)

def create_styles_xml():
    styles_path = os.path.join(WORK_DIR, "xl", "styles.xml")
    styles_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <numFmts>
    <numFmt numFmtId="164" formatCode="$#,##0;($#,##0);&quot;-&quot;"/>
    <numFmt numFmtId="165" formatCode="yyyy-mm-dd"/>
  </numFmts>
  <fonts>
    <font><sz val="11"/><name val="Calibri"/></font>
    <font><sz val="11"/><name val="Calibri"/><b/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="000000FF"/></font>
    <font><sz val="11"/><name val="Calibri"/><b/><color rgb="00FFFFFF"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="00000000"/></font>
    <font><sz val="14"/><name val="Calibri"/><b/><color rgb="00FFFFFF"/></font>
  </fonts>
  <fills>
    <fill><patternFill patternType="none"/></fill>
    <fill><patternFill patternType="gray125"/></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="00003B5A"/><bgColor indexed="64"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="00D9E8F5"/><bgColor indexed="64"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="00F5F5DC"/><bgColor indexed="64"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="00FFFACD"/><bgColor indexed="64"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="00FFB6C1"/><bgColor indexed="64"/></patternFill></fill>
  </fills>
  <borders>
    <border><left/><right/><top/><bottom/></border>
    <border>
      <left style="thin"><color rgb="00000000"/></left>
      <right style="thin"><color rgb="00000000"/></right>
      <top style="thin"><color rgb="00000000"/></top>
      <bottom style="thin"><color rgb="00000000"/></bottom>
    </border>
  </borders>
  <cellStyleXfs><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>
  <cellXfs>
    <!-- 0: default -->
    <xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/>
    <!-- 1: header row - dark blue bg, white bold text -->
    <xf numFmtId="0" fontId="3" fillId="2" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1"/>
    <!-- 2: input cell - light blue bg -->
    <xf numFmtId="0" fontId="0" fillId="3" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1"/>
    <!-- 3: data row 1 - cream bg -->
    <xf numFmtId="0" fontId="0" fillId="4" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1"/>
    <!-- 4: data row 2 - white bg -->
    <xf numFmtId="0" fontId="0" fillId="0" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1"/>
    <!-- 5: sub-header -->
    <xf numFmtId="0" fontId="1" fillId="4" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1"/>
    <!-- 6: formula cell - white bg, black text -->
    <xf numFmtId="0" fontId="4" fillId="0" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1"/>
    <!-- 7: warning cell - yellow bg -->
    <xf numFmtId="0" fontId="0" fillId="5" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1"/>
    <!-- 8: expired cell - red bg -->
    <xf numFmtId="0" fontId="0" fillId="6" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1"/>
    <!-- 9: title cell - dark blue, large white bold -->
    <xf numFmtId="0" fontId="5" fillId="2" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1"/>
    <!-- 10: date format -->
    <xf numFmtId="165" fontId="0" fillId="0" borderId="1" xfId="0" applyFont="1" applyNumberFormat="1"/>
  </cellXfs>
</styleSheet>'''
    with open(styles_path, 'w', encoding='utf-8') as f:
        f.write(styles_xml)

def create_shared_strings_xml(strings):
    shared_path = os.path.join(WORK_DIR, "xl", "sharedStrings.xml")
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

def update_workbook_xml(sheet_name):
    workbook_path = os.path.join(WORK_DIR, "xl", "workbook.xml")
    content = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <fileVersion appName="xl" lastEdited="7" lowestEdited="7"/>
  <workbookPr defaultThemeVersion="166925"/>
  <bookViews><workbookView xWindow="0" yWindow="0" windowWidth="20140" windowHeight="10960"/></bookViews>
  <sheets>
    <sheet name="''' + sheet_name + '''" sheetId="1" r:id="rId1"/>
  </sheets>
  <calcPr calcId="191029"/>
</workbook>'''
    with open(workbook_path, 'w', encoding='utf-8') as f:
        f.write(content)

def update_workbook_rels():
    rels_path = os.path.join(WORK_DIR, "xl", "_rels", "workbook.xml.rels")
    content = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
  <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml"/>
</Relationships>'''
    with open(rels_path, 'w', encoding='utf-8') as f:
        f.write(content)

def update_content_types():
    ct_path = os.path.join(WORK_DIR, "[Content_Types].xml")
    content = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
  <Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>
  <Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/>
</Types>'''
    with open(ct_path, 'w', encoding='utf-8') as f:
        f.write(content)

def make_cell(col, row, value, style, is_string=True):
    """Create a cell XML element"""
    ref = col + str(row)
    if is_string:
        return '<c r="' + ref + '" t="s" s="' + str(style) + '"><v>' + str(value) + '</v></c>'
    else:
        return '<c r="' + ref + '" s="' + str(style) + '"><v>' + str(value) + '</v></c>'

def make_formula_cell(col, row, formula, style):
    """Create a formula cell XML element"""
    ref = col + str(row)
    return '<c r="' + ref + '" s="' + str(style) + '"><f>' + formula + '</f><v></v></c>'

def make_sheet_xml(rows_data):
    """Build sheet XML from rows_data list of (col, value, style, is_string) tuples"""
    rows_xml = []
    for row_idx, row_cells in enumerate(rows_data, 1):
        cells = []
        for cell_data in row_cells:
            col, value, style = cell_data[:3]
            is_string = cell_data[3] if len(cell_data) > 3 else True
            if is_string:
                cells.append(make_cell(col, row_idx, value, style, True))
            else:
                cells.append(make_cell(col, row_idx, value, style, False))
        if cells:
            rows_xml.append('    <row r="' + str(row_idx) + '">' + ''.join(cells) + '</row>')

    cols_xml = '''  <cols>
    <col min="1" max="1" width="14" customWidth="1"/>
    <col min="2" max="2" width="35" customWidth="1"/>
    <col min="3" max="3" width="18" customWidth="1"/>
    <col min="4" max="4" width="14" customWidth="1"/>
    <col min="5" max="5" width="16" customWidth="1"/>
  </cols>'''

    return '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView workbookViewId="0">
      <pane ySplit="3" topLeftCell="A4" activePane="bottomLeft" state="frozen"/>
    </sheetView>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="18"/>
  ''' + cols_xml + '''
  <sheetData>
''' + '\n'.join(rows_xml) + '''
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75"/>
</worksheet>'''

def build_form(output_path):
    copy_template()

    # Define all strings used in the sheet
    strings = [
        "技能认证体系表",
        "认证等级", "认证要求", "评估方式", "有效期", "认证状态",
        "初级认证", "中级认证", "高级认证", "专家认证",
        "知识测试（占比20%）", "技能实操（占比30%）", "项目经验（占比30%）", "持续学习（占比20%）",
        "知识测试", "技能实操", "项目经验", "持续学习",
        "笔试+口试", "场景化实操考核", "主导完成至少1个中型项目", "年度学习时长≥60学时",
        "笔试", "情景模拟", "项目总结答辩", "年度学习时长≥40学时",
        "专题演讲", "复杂问题处理", "主导完成至少2个大型项目", "年度学习时长≥80学时",
        "行业影响力评估", "跨领域问题解决", "主导完成至少3个行业标杆项目", "年度学习时长≥100学时",
        "1年", "2年", "3年", "长期有效",
        "年", "月", "日",
        "认证到期日期", "距到期天数", "状态",
        "有效", "即将到期（30天内）", "已过期", "未认证",
        "说明：蓝色单元格为输入框，请填写认证到期日期。状态列自动计算。",
    ]

    str_map = create_shared_strings_xml(strings)

    # Title row (row 1)
    rows = []
    rows.append([("A", str_map["技能认证体系表"], 9, True)])  # Merged cell title

    # Subtitle row (row 2)
    rows.append([("A", str_map["说明：蓝色单元格为输入框，请填写认证到期日期。状态列自动计算。"], 0, True)])

    # Header row (row 3)
    rows.append([
        ("A", str_map["认证等级"], 1, True),
        ("B", str_map["认证要求"], 1, True),
        ("C", str_map["评估方式"], 1, True),
        ("D", str_map["有效期"], 1, True),
        ("E", str_map["认证状态"], 1, True),
    ])

    # Data rows for each certification level
    # Row 4: 初级认证
    rows.append([
        ("A", str_map["初级认证"], 3, True),
        ("B", str_map["知识测试（占比20%）"], 2, True),
        ("C", str_map["笔试+口试"], 2, True),
        ("D", str_map["1年"], 3, True),
        ("E", 0, 2, False),  # Input: certification expiry date
    ])

    # Row 5: 中级认证
    rows.append([
        ("A", str_map["中级认证"], 4, True),
        ("B", str_map["技能实操（占比30%）"], 2, True),
        ("C", str_map["情景模拟"], 2, True),
        ("D", str_map["2年"], 3, True),
        ("E", 0, 2, False),  # Input: certification expiry date
    ])

    # Row 6: 高级认证
    rows.append([
        ("A", str_map["高级认证"], 3, True),
        ("B", str_map["项目经验（占比30%）"], 2, True),
        ("C", str_map["项目总结答辩"], 2, True),
        ("D", str_map["3年"], 3, True),
        ("E", 0, 2, False),  # Input: certification expiry date
    ])

    # Row 7: 专家认证
    rows.append([
        ("A", str_map["专家认证"], 4, True),
        ("B", str_map["持续学习（占比20%）"], 2, True),
        ("C", str_map["行业影响力评估"], 2, True),
        ("D", str_map["长期有效"], 3, True),
        ("E", 0, 2, False),  # Input: certification expiry date
    ])

    # Empty row
    rows.append([])

    # Status tracking section header (row 9)
    rows.append([
        ("A", str_map["认证到期日期"], 1, True),
        ("B", str_map["距到期天数"], 1, True),
        ("C", str_map["状态"], 1, True),
    ])

    # Status tracking data rows with formulas
    # Row 10: 初级认证 status
    rows.append([
        ("A", 0, 10, False),  # Input date
        ("B", "", 6, False),  # Formula: days until expiry
        ("C", "", 6, False),  # Formula: status
    ])

    # Row 11: 中级认证 status
    rows.append([
        ("A", 0, 10, False),  # Input date
        ("B", "", 6, False),
        ("C", "", 6, False),
    ])

    # Row 12: 高级认证 status
    rows.append([
        ("A", 0, 10, False),  # Input date
        ("B", "", 6, False),
        ("C", "", 6, False),
    ])

    # Row 13: 专家认证 status
    rows.append([
        ("A", 0, 10, False),  # Input date
        ("B", "", 6, False),
        ("C", "", 6, False),
    ])

    # Create sheet XML
    sheet_path = os.path.join(WORK_DIR, "xl", "worksheets", "sheet1.xml")

    # Build with proper formulas
    sheet_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView workbookViewId="0">
      <pane ySplit="3" topLeftCell="A4" activePane="bottomLeft" state="frozen"/>
    </sheetView>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="18"/>
  <cols>
    <col min="1" max="1" width="14" customWidth="1"/>
    <col min="2" max="2" width="35" customWidth="1"/>
    <col min="3" max="3" width="18" customWidth="1"/>
    <col min="4" max="4" width="14" customWidth="1"/>
    <col min="5" max="5" width="16" customWidth="1"/>
  </cols>
  <sheetData>
    <row r="1">
      <c r="A1" t="s" s="9"><v>0</v></c>
    </row>
    <row r="2">
      <c r="A2" t="s" s="0"><v>44</v></c>
    </row>
    <row r="3">
      <c r="A3" t="s" s="1"><v>1</v></c>
      <c r="B3" t="s" s="1"><v>2</v></c>
      <c r="C3" t="s" s="1"><v>3</v></c>
      <c r="D3" t="s" s="1"><v>4</v></c>
      <c r="E3" t="s" s="1"><v>5</v></c>
    </row>
    <row r="4">
      <c r="A4" t="s" s="3"><v>6</v></c>
      <c r="B4" t="s" s="2"><v>7</v></c>
      <c r="C4" t="s" s="2"><v>12</v></c>
      <c r="D4" t="s" s="3"><v>32</v></c>
      <c r="E4" s="2"><v>0</v></c>
    </row>
    <row r="5">
      <c r="A5" t="s" s="4"><v>8</v></c>
      <c r="B5" t="s" s="2"><v>9</v></c>
      <c r="C5" t="s" s="2"><v>13</v></c>
      <c r="D5" t="s" s="3"><v>33</v></c>
      <c r="E5" s="2"><v>0</v></c>
    </row>
    <row r="6">
      <c r="A6" t="s" s="3"><v>10</v></c>
      <c r="B6" t="s" s="2"><v>11</v></c>
      <c r="C6" t="s" s="2"><v>14</v></c>
      <c r="D6" t="s" s="3"><v>34</v></c>
      <c r="E6" s="2"><v>0</v></c>
    </row>
    <row r="7">
      <c r="A7" t="s" s="4"><v>15</v></c>
      <c r="B7" t="s" s="2"><v>16</v></c>
      <c r="C7" t="s" s="2"><v>17</v></c>
      <c r="D7" t="s" s="3"><v>35</v></c>
      <c r="E7" s="2"><v>0</v></c>
    </row>
    <row r="8">
    </row>
    <row r="9">
      <c r="A9" t="s" s="1"><v>40</v></c>
      <c r="B9" t="s" s="1"><v>41</v></c>
      <c r="C9" t="s" s="1"><v>42</v></c>
    </row>
    <row r="10">
      <c r="A10" s="10"><v>0</v></c>
      <c r="B10" s="6"><f>IF(A10="","",A10-TODAY())</f><v></v></c>
      <c r="C10" s="6"><f>IF(A10="","未认证",IF(A10&lt;TODAY(),"已过期",IF(A10-TODAY()&lt;=30,"即将到期（30天内）","有效")))</f><v></v></c>
    </row>
    <row r="11">
      <c r="A11" s="10"><v>0</v></c>
      <c r="B11" s="6"><f>IF(A11="","",A11-TODAY())</f><v></v></c>
      <c r="C11" s="6"><f>IF(A11="","未认证",IF(A11&lt;TODAY(),"已过期",IF(A11-TODAY()&lt;=30,"即将到期（30天内）","有效")))</f><v></v></c>
    </row>
    <row r="12">
      <c r="A12" s="10"><v>0</v></c>
      <c r="B12" s="6"><f>IF(A12="","",A12-TODAY())</f><v></v></c>
      <c r="C12" s="6"><f>IF(A12="","未认证",IF(A12&lt;TODAY(),"已过期",IF(A12-TODAY()&lt;=30,"即将到期（30天内）","有效")))</f><v></v></c>
    </row>
    <row r="13">
      <c r="A13" s="10"><v>0</v></c>
      <c r="B13" s="6"><f>IF(A13="","",A13-TODAY())</f><v></v></c>
      <c r="C13" s="6"><f>IF(A13="","未认证",IF(A13&lt;TODAY(),"已过期",IF(A13-TODAY()&lt;=30,"即将到期（30天内）","有效")))</f><v></v></c>
    </row>
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75"/>
</worksheet>'''

    with open(sheet_path, 'w', encoding='utf-8') as f:
        f.write(sheet_xml)

    # Update workbook
    update_workbook_xml("技能认证体系表")
    update_workbook_rels()
    update_content_types()

    # Pack xlsx
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    with zipfile.ZipFile(output_path, 'w', zipfile.ZIP_DEFLATED) as zf:
        for root, dirs, files in os.walk(WORK_DIR):
            for file in files:
                file_path = os.path.join(root, file)
                arcname = os.path.relpath(file_path, WORK_DIR)
                zf.write(file_path, arcname)

    print("Created: " + output_path)

if __name__ == "__main__":
    output = "D:/新课开发/数字化转型/6.员工技能重塑与AI素养：补齐90%企业存在的技能缺口/全流程工具表单/F7_技能认证体系表.xlsx"
    build_form(output)
    print("\nBuild complete!")
