#!/usr/bin/env python3
"""
Generate 11 Excel forms for 课程7《国际贸易合规与制裁风险管理》
Using XML template approach (no openpyxl for writing)
"""

import shutil
import os
import re
from pathlib import Path

SKILL_DIR = Path("C:/Users/Administrator/.claude/skills/Excel表格处理")
TEMPLATE_DIR = SKILL_DIR / "templates" / "minimal_xlsx"
OUT_DIR = Path("D:/新课开发/能源/07-国际贸易合规与制裁风险管理/全流程工具表单")

def copy_template(work_dir):
    shutil.copytree(TEMPLATE_DIR, work_dir, dirs_exist_ok=True)

def col_letter(n):
    result = ""
    while n > 0:
        n, rem = divmod(n - 1, 26)
        result = chr(65 + rem) + result
    return result

def col_number(s):
    n = 0
    for c in s.upper():
        n = n * 26 + (ord(c) - 64)
    return n

# =============================================================================
# Styles for compliance forms (append to minimal template's 13 styles)
# Template styles 0-12 are preserved; we append new ones
# =============================================================================

# Red font for important fields (append as new font)
RED_FONT = '  <font>\n    <sz val="11"/>\n    <name val="Calibri"/>\n    <color rgb="00FF0000"/>\n  </font>\n'

# Dark header fill (dark blue #1F4E79)
DARK_HEADER_FILL = '''  <fill>
    <patternFill patternType="solid">
      <fgColor rgb="001F4E79"/>
      <bgColor indexed="64"/>
    </patternFill>
  </fill>
'''

# Light blue fill for alternating rows (#D6E3F8)
LIGHT_BLUE_FILL = '''  <fill>
    <patternFill patternType="solid">
      <fgColor rgb="00D6E3F8"/>
      <bgColor indexed="64"/>
    </patternFill>
  </fill>
'''

# Yellow fill for warning (#FFFF00)
YELLOW_FILL = '''  <fill>
    <patternFill patternType="solid">
      <fgColor rgb="00FFFF00"/>
      <bgColor indexed="64"/>
    </patternFill>
  </fill>
'''

# Red fill for high risk (#FFB3B3)
RED_FILL = '''  <fill>
    <patternFill patternType="solid">
      <fgColor rgb="00FFB3B3"/>
      <bgColor indexed="64"/>
    </patternFill>
  </fill>
'''

# Orange fill for medium risk (#FFD9B3)
ORANGE_FILL = '''  <fill>
    <patternFill patternType="solid">
      <fgColor rgb="00FFD9B3"/>
      <bgColor indexed="64"/>
    </patternFill>
  </fill>
'''

# Green fill for low risk (#B3FFB3)
GREEN_FILL = '''  <fill>
    <patternFill patternType="solid">
      <fgColor rgb="00B3FFB3"/>
      <bgColor indexed="64"/>
    </patternFill>
  </fill>
'''

def get_style_index(template_count, style_type):
    """Get the style index for different cell types"""
    # After template's 13 styles (0-12), we add:
    # 13 = red font (for important fields)
    # 14 = dark header fill + white bold text
    # 15 = light blue fill
    # 16 = yellow fill
    # 17 = red fill
    # 18 = orange fill
    # 19 = green fill
    # 20 = currency red font
    # 21 = header + center align
    style_map = {
        'red': 13,
        'dark_header': 14,
        'light_blue': 15,
        'yellow': 16,
        'red_fill': 17,
        'orange_fill': 18,
        'green_fill': 19,
        'red_currency': 20,
        'header_center': 21,
    }
    return style_map.get(style_type, 0)

def build_styles_xml(current_styles_content):
    """Append new styles to existing styles.xml"""
    # Find the closing tags and append before them
    # We need to append new fonts, fills, and cellXfs

    # Parse and append
    new_fonts = RED_FONT  # fontId=5 (0-indexed: 0,1,2,3,4,5)
    new_fills = DARK_HEADER_FILL + LIGHT_BLUE_FILL + YELLOW_FILL + RED_FILL + ORANGE_FILL + GREEN_FILL
    # fills: 0=none, 1=gray125, 2=yellow, 3=dark_header, 4=light_blue, 5=yellow, 6=red_fill, 7=orange, 8=green

    # New cellXfs entries (append after existing 13)
    # index 13: red font (important fields)
    # index 14: dark header fill + white bold text
    # index 15: light blue fill
    # index 16: yellow fill
    # index 17: red fill
    # index 18: orange fill
    # index 19: green fill
    # index 20: red font + currency format
    # index 21: header + center
    new_xfs = '''  <xf numFmtId="0" fontId="5" fillId="0" borderId="0" xfId="0" applyFont="1"/>
  <xf numFmtId="0" fontId="4" fillId="3" borderId="0" xfId="0" applyFont="1" applyFill="1"/>
  <xf numFmtId="0" fontId="0" fillId="4" borderId="0" xfId="0" applyFill="1"/>
  <xf numFmtId="0" fontId="0" fillId="5" borderId="0" xfId="0" applyFill="1"/>
  <xf numFmtId="0" fontId="0" fillId="6" borderId="0" xfId="0" applyFill="1"/>
  <xf numFmtId="0" fontId="0" fillId="7" borderId="0" xfId="0" applyFill="1"/>
  <xf numFmtId="0" fontId="0" fillId="8" borderId="0" xfId="0" applyFill="1"/>
  <xf numFmtId="164" fontId="5" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>
  <xf numFmtId="0" fontId="4" fillId="3" borderId="0" xfId="0" applyFont="1" applyFill="1" applyAlignment="1">
    <alignment horizontal="center"/>
  </xf>
'''
    return new_fonts, new_fills, new_xfs

# =============================================================================
# Helper: Build sharedStrings.xml
# =============================================================================

def build_shared_strings(strings):
    """Build sharedStrings.xml content"""
    items = []
    for s in strings:
        # Escape special chars
        s = s.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;')
        items.append(f'  <si><t>{s}</t></si>')
    count = len(strings)
    return f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
     count="{count}" uniqueCount="{count}">
{chr(10).join(items)}
</sst>
'''

# =============================================================================
# Helper: Build sheet XML with data
# =============================================================================

def build_sheet_xml(rows, col_widths=None, freeze_row=None):
    """Build worksheet XML from row data
    rows: list of dicts with 'cells' (list of dicts) and optional 'height'
    each cell: {'addr': 'A1', 'value': str, 'type': 's'|'n'|'f'|'b', 'style': int, 'formula': str}
    """
    sheet_lines = ['''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet
  xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView workbookViewId="0"/>''']

    if freeze_row:
        sheet_lines.append(f'    <pane ySplit="{freeze_row}" topLeftCell="A{freeze_row+1}" activePane="bottomLeft" state="frozen"/>')

    sheet_lines.append('  </sheetViews>')
    sheet_lines.append('  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>')

    # Column widths
    if col_widths:
        sheet_lines.append('  <cols>')
        for i, w in enumerate(col_widths, 1):
            sheet_lines.append(f'    <col min="{i}" max="{i}" width="{w}" customWidth="1"/>')
        sheet_lines.append('  </cols>')

    sheet_lines.append('  <sheetData>')

    for row_idx, row in enumerate(rows, 1):
        height = row.get('height', '')
        h_attr = f' ht="{height}" customHeight="1"' if height else ''
        sheet_lines.append(f'  <row r="{row_idx}"{h_attr}>')

        for cell in row.get('cells', []):
            addr = cell['addr']
            style = cell.get('style', 0)
            c_type = cell.get('type', 's')  # default string

            if c_type == 'f':  # formula
                formula = cell['formula']
                sheet_lines.append(f'    <c r="{addr}" s="{style}"><f>{formula}</f><v></v></c>')
            elif c_type == 'n':  # number
                val = cell['value']
                sheet_lines.append(f'    <c r="{addr}" s="{style}"><v>{val}</v></c>')
            elif c_type == 'b':  # boolean
                val = cell['value']
                sheet_lines.append(f'    <c r="{addr}" s="{style}" t="b"><v>{val}</v></c>')
            else:  # shared string
                idx = cell['value']
                sheet_lines.append(f'    <c r="{addr}" s="{style}" t="s"><v>{idx}</v></c>')

        sheet_lines.append('  </row>')

    sheet_lines.append('  </sheetData>')
    sheet_lines.append('  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>')
    sheet_lines.append('</worksheet>')

    return '\n'.join(sheet_lines)

# =============================================================================
# FORM 1: F1_制裁风险初步筛查卡.xlsx
# =============================================================================

def gen_form1(work_dir):
    """F1_制裁风险初步筛查卡"""
    # Sheet names
    sheets = ['筛查表', '使用说明']

    # Update workbook.xml
    wb_path = work_dir / 'xl' / 'workbook.xml'
    with open(wb_path, 'r', encoding='utf-8') as f:
        wb_content = f.read()

    wb_content = re.sub(r'<sheet name="Sheet1"', f'<sheet name="{sheets[0]}"', wb_content)
    # Add more sheets
    wb_content = wb_content.replace('</sheets>', '')
    for i, name in enumerate(sheets[1:], 1):
        wb_content += f'\n  <sheet name="{name}" sheetId="{i+1}" r:id="rId{i+3}"/>'
    wb_content += '\n</sheets>'

    with open(wb_path, 'w', encoding='utf-8') as f:
        f.write(wb_content)

    # Update workbook.xml.rels
    rels_path = work_dir / 'xl' / '_rels' / 'workbook.xml.rels'
    with open(rels_path, 'r', encoding='utf-8') as f:
        rels_content = f.read()

    for i, name in enumerate(sheets[1:], 2):
        rels_content = rels_content.replace('</Relationships>', '')
        rels_content += f'\n  <Relationship Id="rId{i+2}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet{i+1}.xml"/>'
        rels_content += '\n</Relationships>'

    with open(rels_path, 'w', encoding='utf-8') as f:
        f.write(rels_content)

    # Update Content_Types.xml
    ct_path = work_dir / '[Content_Types].xml'
    with open(ct_path, 'r', encoding='utf-8') as f:
        ct_content = f.read()

    for i in range(2, len(sheets) + 1):
        ct_content = ct_content.replace('</Types>', '')
        ct_content += f'\n  <Override PartName="/xl/worksheets/sheet{i}.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>'
        ct_content += '\n</Types>'

    with open(ct_path, 'w', encoding='utf-8') as f:
        f.write(ct_content)

    # Build shared strings
    strings = [
        '交易要素', '筛查要点', '风险等级', '行动建议', '备注',
        '交易对手名称', '对手注册地', '是否为制裁名单人员', '资金来源/去向', '货物原产地',
        '交易金额（美元）', '结算货币', '涉及国家/地区', '行业敏感度', '国企背景',
        '高风险', '中风险', '低风险', '搁置交易', '加强尽调', '直接推进', '提交合规审核',
        '交易类型', '港口/机场', '船旗国', '最终用户', '最终用途',
        '是', '否', '不确定',
        '制裁风险初步筛查卡', '使用说明',
        '一、填写指南', '二、筛查流程', '三、风险等级说明', '四、行动建议说明',
        '本表用于交易前快速筛查制裁风险，请逐项填写并评估。',
        '1. 逐项填写左侧"交易要素"列，确保信息准确完整。',
        '2. 对照"筛查要点"列，判断是否存在风险点。',
        '3. 根据筛查结果，在"风险等级"列选择相应等级。',
        '4. 根据风险等级，参照"行动建议"列采取相应措施。',
        '5. 如有特殊情况，请在"备注"列详细说明。',
        '高风险：存在明确制裁风险，建议搁置交易或提交高层审批',
        '中风险：存在潜在风险，需加强尽职调查后方可推进',
        '低风险：风险可控，可按正常流程推进交易',
        '行动建议应根据实际情况灵活运用，必要时咨询合规部门',
    ]

    shared_str = build_shared_strings(strings)
    with open(work_dir / 'xl' / 'sharedStrings.xml', 'w', encoding='utf-8') as f:
        f.write(shared_str)

    # Sheet 1: 筛查表
    # Columns: A=交易要素, B=筛查要点, C=风险等级, D=行动建议, E=备注
    col_widths = [22, 45, 12, 18, 30]

    rows = [
        # Row 1: Title
        {'cells': [{'addr': 'A1', 'value': 0, 'style': 14}], 'height': '30'},
    ]

    # Row 2: Headers
    rows.append({'cells': [
        {'addr': 'A2', 'value': 0, 'style': 21},  # 交易要素
        {'addr': 'B2', 'value': 1, 'style': 21},  # 筛查要点
        {'addr': 'C2', 'value': 2, 'style': 21},  # 风险等级
        {'addr': 'D2', 'value': 3, 'style': 21},  # 行动建议
        {'addr': 'E2', 'value': 4, 'style': 21},  # 备注
    ], 'height': '25'})

    # Data rows
    data_items = [
        (5, 6, '交易对手名称', '对手全称及注册信息'),
        (7, 8, '对手注册地', '是否为高风险国家/地区'),
        (9, 10, '是否为制裁名单人员', '美国OFAC、欧盟、联合国制裁名单'),
        (11, 12, '资金来源/去向', '是否涉及制裁国家'),
        (13, 14, '货物原产地', '是否含有受管制成分'),
        (15, 16, '交易金额（美元）', '是否超过报告阈值'),
        (17, 18, '结算货币', '是否使用制裁货币'),
        (19, 20, '涉及国家/地区', '是否过境制裁国家'),
        (21, 22, '行业敏感度', '是否属于能源、军事等敏感行业'),
        (23, 24, '国企背景', '是否有国有资本背景'),
    ]

    for i, (label_idx, check_idx, label, check) in enumerate(data_items, 3):
        # Alternate row colors
        fill_style = 15 if i % 2 == 1 else 0

        risk_options = '高风险;中风险;低风险'
        action_options = '搁置交易;加强尽调;直接推进;提交合规审核'

        rows.append({'cells': [
            {'addr': f'A{i}', 'value': label_idx, 'style': 0},  # 交易要素
            {'addr': f'B{i}', 'value': check_idx, 'style': 0},  # 筛查要点
            {'addr': f'C{i}', 'value': risk_options, 'style': 13},  # 风险等级 - red font for input
            {'addr': f'D{i}', 'value': action_options, 'style': 13},  # 行动建议 - red font for input
            {'addr': f'E{i}', 'value': '', 'style': 0},  # 备注
        ]})

    # Summary row
    rows.append({'cells': [
        {'addr': 'A13', 'value': '综合风险评级', 'style': 4},
        {'addr': 'B13', 'value': '', 'style': 0},
        {'addr': 'C13', 'value': '高风险;中风险;低风险', 'style': 13},
        {'addr': 'D13', 'value': '', 'style': 0},
        {'addr': 'E13', 'value': '', 'style': 0},
    ]})

    sheet1_xml = build_sheet_xml(rows, col_widths, freeze_row=2)
    with open(work_dir / 'xl' / 'worksheets' / 'sheet1.xml', 'w', encoding='utf-8') as f:
        f.write(sheet1_xml)

    # Sheet 2: 使用说明
    strings2 = [
        '使用说明', '', '', '', '',
        '一、填写指南', '二、筛查流程', '三、风险等级说明', '四、行动建议说明',
        '本表用于交易前快速筛查制裁风险，请逐项填写并评估。',
        '1. 逐项填写左侧"交易要素"列，确保信息准确完整。',
        '2. 对照"筛查要点"列，判断是否存在风险点。',
        '3. 根据筛查结果，在"风险等级"列选择相应等级。',
        '4. 根据风险等级，参照"行动建议"列采取相应措施。',
        '5. 如有特殊情况，请在"备注"列详细说明。',
        '高风险：存在明确制裁风险，建议搁置交易或提交高层审批',
        '中风险：存在潜在风险，需加强尽职调查后方可推进',
        '低风险：风险可控，可按正常流程推进交易',
        '行动建议应根据实际情况灵活运用，必要时咨询合规部门',
    ]

    rows2 = [
        {'cells': [{'addr': 'A1', 'value': 0, 'style': 14}], 'height': '30'},
        {'cells': [{'addr': 'A2', 'value': 5, 'style': 21}], 'height': '25'},
        {'cells': [{'addr': 'A3', 'value': 10, 'style': 4}]},
        {'cells': [{'addr': 'A4', 'value': 11, 'style': 0}]},
        {'cells': [{'addr': 'A5', 'value': 12, 'style': 0}]},
        {'cells': [{'addr': 'A6', 'value': 13, 'style': 0}]},
        {'cells': [{'addr': 'A7', 'value': 14, 'style': 0}]},
        {'cells': [{'addr': 'A8', 'value': 15, 'style': 0}]},
        {'cells': [{'addr': 'A9', 'value': '', 'style': 0}]},
        {'cells': [{'addr': 'A10', 'value': 6, 'style': 4}]},
        {'cells': [{'addr': 'A11', 'value': 16, 'style': 16}]},
        {'cells': [{'addr': 'A12', 'value': 17, 'style': 16}]},
        {'cells': [{'addr': 'A13', 'value': 18, 'style': 16}]},
        {'cells': [{'addr': 'A14', 'value': '', 'style': 0}]},
        {'cells': [{'addr': 'A15', 'value': 7, 'style': 4}]},
        {'cells': [{'addr': 'A16', 'value': 19, 'style': 0}]},
        {'cells': [{'addr': 'A17', 'value': '', 'style': 0}]},
        {'cells': [{'addr': 'A18', 'value': 8, 'style': 4}]},
        {'cells': [{'addr': 'A19', 'value': 20, 'style': 0}]},
    ]

    sheet2_xml = build_sheet_xml(rows2, [60], freeze_row=1)
    with open(work_dir / 'xl' / 'worksheets' / 'sheet2.xml', 'w', encoding='utf-8') as f:
        f.write(sheet2_xml)

    # Update styles.xml to add our custom styles
    styles_path = work_dir / 'xl' / 'styles.xml'
    with open(styles_path, 'r', encoding='utf-8') as f:
        styles_content = f.read()

    # Append new fonts before </fonts>
    styles_content = styles_content.replace('</fonts>', RED_FONT + '</fonts>')

    # Append new fills before </fills>
    new_fills = DARK_HEADER_FILL + LIGHT_BLUE_FILL + YELLOW_FILL + RED_FILL + ORANGE_FILL + GREEN_FILL
    styles_content = styles_content.replace('</fills>', new_fills + '</fills>')

    # Append new cellXfs before </cellXfs>
    new_xfs = '''  <xf numFmtId="0" fontId="5" fillId="0" borderId="0" xfId="0" applyFont="1"/>
  <xf numFmtId="0" fontId="4" fillId="3" borderId="0" xfId="0" applyFont="1" applyFill="1"/>
  <xf numFmtId="0" fontId="0" fillId="4" borderId="0" xfId="0" applyFill="1"/>
  <xf numFmtId="0" fontId="0" fillId="5" borderId="0" xfId="0" applyFill="1"/>
  <xf numFmtId="0" fontId="0" fillId="6" borderId="0" xfId="0" applyFill="1"/>
  <xf numFmtId="0" fontId="0" fillId="7" borderId="0" xfId="0" applyFill="1"/>
  <xf numFmtId="0" fontId="0" fillId="8" borderId="0" xfId="0" applyFill="1"/>
  <xf numFmtId="164" fontId="5" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>
  <xf numFmtId="0" fontId="4" fillId="3" borderId="0" xfId="0" applyFont="1" applyFill="1" applyAlignment="1">
    <alignment horizontal="center"/>
  </xf>
'''
    styles_content = styles_content.replace('</cellXfs>', new_xfs + '</cellXfs>')

    # Update counts
    styles_content = re.sub(r'(<fonts count=")(\d+)(")', lambda m: f'{m.group(1)}{int(m.group(2))+1}{m.group(3)}', styles_content)
    styles_content = re.sub(r'(<fills count=")(\d+)(")', lambda m: f'{m.group(1)}{int(m.group(2))+6}{m.group(3)}', styles_content)
    styles_content = re.sub(r'(<cellXfs count=")(\d+)(")', lambda m: f'{m.group(1)}{int(m.group(2))+9}{m.group(3)}', styles_content)

    with open(styles_path, 'w', encoding='utf-8') as f:
        f.write(styles_content)

    return sheets

print("Form 1 generation started...")