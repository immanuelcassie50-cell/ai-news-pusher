#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Build all 10 workshop facilitation tool forms (HTML, Markdown, Excel)
"""

import os
import shutil
import zipfile
import json

# ===== CONFIGURATION =====
SKILL_DIR = "C:/Users/Administrator/.claude/skills/Excel表格处理"
TEMPLATE_DIR = SKILL_DIR + "/templates/minimal_xlsx"
OUTPUT_BASE = "D:/新课开发/内训师和表达/系列进阶课/10-培训引导与工作坊带领：让学习现场真正产出结果/全流程工具表单-html打印版"

# ===== COLORS (AARRGGBB) =====
WINE_RED = "00800020"
CREAM = "00F5F5DC"
HEADER_FILL = "00E8F4F0"  # Light teal for headers
ACCENT_FILL = "00FFF7E6"  # Light amber for accents
GRID_COLOR = "00D0D7DC"  # Grid lines

# ===== HTML STYLES =====
HTML_HEADER = '''<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title}</title>
    <style>
        @page {{
            size: A4 landscape;
            margin: 1cm;
        }}
        * {{ margin: 0; padding: 0; box-sizing: border-box; }}
        body {{
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Microsoft YaHei", sans-serif;
            font-size: 12px;
            line-height: 1.5;
            color: #2D3748;
            background: #F7FAFC;
            padding: 20px;
        }}
        .tool-container {{
            max-width: 100%;
            background: white;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.08);
            overflow: hidden;
        }}
        .tool-header {{
            background: linear-gradient(135deg, #1A5f7a 0%, #2E8B9A 100%);
            color: white;
            padding: 20px 24px;
            position: relative;
        }}
        .tool-header::after {{
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: #F6AD55;
        }}
        .tool-header h1 {{
            font-size: 1.8rem;
            font-weight: 700;
            margin-bottom: 4px;
        }}
        .tool-header .subtitle {{
            font-size: 1rem;
            opacity: 0.9;
        }}
        .tool-meta {{
            display: flex;
            gap: 24px;
            margin-top: 12px;
            font-size: 0.85rem;
            opacity: 0.85;
        }}
        .tool-content {{
            padding: 24px;
        }}
        .section {{
            margin-bottom: 20px;
        }}
        .section-title {{
            font-size: 1rem;
            font-weight: 600;
            color: #1A5f7a;
            padding: 8px 12px;
            background: linear-gradient(90deg, #E8F4F8 0%, transparent 100%);
            border-left: 4px solid #2E8B9A;
            margin-bottom: 12px;
        }}
        .card {{
            background: white;
            border: 1px solid #E2E8F0;
            border-radius: 6px;
            padding: 16px;
            margin-bottom: 12px;
        }}
        .card-header {{
            font-weight: 600;
            color: #2D3748;
            margin-bottom: 10px;
            padding-bottom: 8px;
            border-bottom: 2px solid #F6AD55;
        }}
        .grid {{
            display: grid;
            gap: 8px;
        }}
        .grid-2 {{ grid-template-columns: 1fr 1fr; }}
        .grid-3 {{ grid-template-columns: 1fr 1fr 1fr; }}
        .grid-4 {{ grid-template-columns: repeat(4, 1fr); }}
        .cell {{
            background: #FAFAFA;
            border: 1px solid #E2E8F0;
            border-radius: 4px;
            padding: 10px;
            min-height: 60px;
        }}
        .cell-header {{
            background: #EDF2F7;
            font-weight: 600;
            font-size: 0.85rem;
            color: #4A5568;
            margin-bottom: 6px;
        }}
        .cell-content {{
            font-size: 0.9rem;
            color: #2D3748;
        }}
        .cell.highlight {{ background: #FFFBEB; border-color: #F6AD55; }}
        .cell.success {{ background: #F0FFF4; border-color: #68D391; }}
        .cell.info {{ background: #E8F4F8; border-color: #63B3ED; }}
        .badge {{
            display: inline-block;
            padding: 2px 8px;
            border-radius: 12px;
            font-size: 0.75rem;
            font-weight: 600;
        }}
        .badge-primary {{ background: #BEE3F8; color: #2B6CB0; }}
        .badge-success {{ background: #C6F6D5; color: #276749; }}
        .badge-warning {{ background: #FEEBC8; color: #C05621; }}
        table {{
            width: 100%;
            border-collapse: collapse;
            margin: 12px 0;
            font-size: 0.85rem;
        }}
        th {{
            background: #1A5f7a;
            color: white;
            padding: 10px 12px;
            text-align: left;
            font-weight: 600;
        }}
        td {{
            padding: 10px 12px;
            border: 1px solid #E2E8F0;
            vertical-align: top;
        }}
        tr:nth-child(even) {{ background: #F7FAFC; }}
        .checkbox-list {{
            list-style: none;
        }}
        .checkbox-list li {{
            padding: 6px 0;
            padding-left: 24px;
            position: relative;
        }}
        .checkbox-list li::before {{
            content: '□';
            position: absolute;
            left: 0;
            font-size: 1.2rem;
            color: #2E8B9A;
        }}
        .fill-line {{
            display: inline-block;
            min-width: 120px;
            border-bottom: 1px solid #4A5568;
            margin: 0 4px;
        }}
        .print-footer {{
            display: none;
        }}
        @media print {{
            body {{ background: white; padding: 0; }}
            .tool-container {{ box-shadow: none; border-radius: 0; }}
            .print-footer {{ display: block; text-align: center; color: #718096; font-size: 0.75rem; margin-top: 20px; }}
        }}
    </style>
</head>
<body>
    <div class="tool-container">
        <div class="tool-header">
            <h1>{header_title}</h1>
            <div class="subtitle">{header_subtitle}</div>
            <div class="tool-meta">
                <span>工具编号：{tool_id}</span>
                <span>适用场景：{scenario}</span>
            </div>
        </div>
        <div class="tool-content">
            {content}
        </div>
    </div>
</body>
</html>'''

# ===== EXCEL HELPER FUNCTIONS =====
def copy_template(work_dir):
    if os.path.exists(work_dir):
        shutil.rmtree(work_dir)
    shutil.copytree(TEMPLATE_DIR, work_dir)

def create_styles_xml(work_dir, color1=WINE_RED, color2=CREAM):
    styles_path = os.path.join(work_dir, "xl", "styles.xml")
    styles_xml = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <fonts>
    <font><sz val="11"/><name val="Calibri"/></font>
    <font><sz val="11"/><name val="Calibri"/><b/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="000000FF"/></font>
    <font><sz val="11"/><name val="Calibri"/><b/><color rgb="00FFFFFF"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="000000FF"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="00FFFFFF"/></font>
  </fonts>
  <fills>
    <fill><patternFill patternType="none"/></fill>
    <fill><patternFill patternType="gray125"/></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="{color1}"/><bgColor indexed="64"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="{color2}"/><bgColor indexed="64"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="00E8F4F8"/><bgColor indexed="64"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="00FFF7E6"/><bgColor indexed="64"/></patternFill></fill>
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
    <xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/>
    <xf numFmtId="0" fontId="3" fillId="2" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1"/>
    <xf numFmtId="0" fontId="0" fillId="3" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1"/>
    <xf numFmtId="0" fontId="4" fillId="3" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1"/>
    <xf numFmtId="0" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1"/>
    <xf numFmtId="0" fontId="1" fillId="3" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1"/>
    <xf numFmtId="0" fontId="1" fillId="4" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1"/>
    <xf numFmtId="0" fontId="0" fillId="5" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1"/>
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

def build_excel_form(output_path, strings, sheets_data, col_widths=None):
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

# ===== TOOL DEFINITIONS =====

def get_w1_content():
    return '''
            <div class="section">
                <div class="section-title">一、工作坊适用性判断</div>
                <div class="card">
                    <div class="card-header">四项前提条件检查清单</div>
                    <ul class="checkbox-list">
                        <li><strong>问题明确性：</strong>要解决的问题是否清晰具体？还是只有一个模糊的方向？</li>
                        <li><strong>参与者多元性：</strong>是否需要多方利益相关者的视角和参与？单一来源不适合工作坊</li>
                        <li><strong>决策可参与性：</strong>参与者是否有真正的决策权？还是只是来听结果？</li>
                        <li><strong>时间资源充足性：</strong>是否有足够的时间（至少2-3小时）进行充分讨论？</li>
                    </ul>
                </div>
                <div class="grid grid-2" style="margin-top: 16px;">
                    <div class="cell highlight">
                        <div class="cell-header">判断结论</div>
                        <div class="cell-content">
                            <span class="badge badge-success">四全 ✓</span> 适合工作坊
                            <br><br>
                            <span class="badge badge-warning">缺项 ○</span> 需要先补充条件
                        </div>
                    </div>
                    <div class="cell info">
                        <div class="cell-header">备选方案</div>
                        <div class="cell-content">
                            条件不足时考虑：
                            <br>• 一对一访谈
                            <br>• 专家咨询
                            <br>• 书面调研
                        </div>
                    </div>
                </div>
            </div>
            <div class="section">
                <div class="section-title">二、适用场景特征</div>
                <table>
                    <tr><th>适合工作坊</th><th>不适合工作坊</th></tr>
                    <tr><td>需要跨部门协调的复杂问题</td><td>已经有明确答案的知识传递</td></tr>
                    <tr><td>需要创新思维的新项目规划</td><td>只需要执行已知流程</td></tr>
                    <tr><td>需要达成团队共识的战略决策</td><td>高层已经做了的决策宣贯</td></tr>
                    <tr><td>需要多方利益整合的方案设计</td><td>信息收集但无决策权</td></tr>
                </table>
            </div>
            <div class="section">
                <div class="section-title">三、使用时机建议</div>
                <div class="card">
                    <strong>建议在工作坊前24小时完成此判断表</strong>，确保准备充分。
                    如果任何一项前提不满足，优先解决该条件，而非强行开展工坊。
                </div>
            </div>
    '''

def get_w2_content():
    return '''
            <div class="section">
                <div class="section-title">一、三种工作坊类型</div>
                <div class="grid grid-3">
                    <div class="cell highlight">
                        <div class="cell-header"><span class="badge badge-primary">A</span> 信息整合型</div>
                        <div class="cell-content">
                            <strong>目标：</strong>收集、整合多方信息
                            <br><br>
                            <strong>特征：</strong>
                            <br>• 信息来源分散
                            <br>• 需要去伪存真
                            <br>• 产出是完整画像
                            <br><br>
                            <strong>典型场景：</strong>用户研究、需求调研、市场分析
                        </div>
                    </div>
                    <div class="cell highlight">
                        <div class="cell-header"><span class="badge badge-success">B</span> 问题解决型</div>
                        <div class="cell-content">
                            <strong>目标：</strong>找到问题的根本原因并设计解决方案
                            <br><br>
                            <strong>特征：</strong>
                            <br>• 问题已经存在
                            <br>• 需要深度分析
                            <br>• 产出是行动方案
                            <br><br>
                            <strong>典型场景：</strong>故障复盘、流程优化、危机处理
                        </div>
                    </div>
                    <div class="cell highlight">
                        <div class="cell-header"><span class="badge badge-warning">C</span> 共识建立型</div>
                        <div class="cell-content">
                            <strong>目标：</strong>让多方达成一致的行动承诺
                            <br><br>
                            <strong>特征：</strong>
                            <br>• 利益相关方多元
                            <br>• 存在分歧需要协调
                            <br>• 产出是承诺/协议
                            <br><br>
                            <strong>典型场景：</strong>战略对齐、方案评审、路线图制定
                        </div>
                    </div>
                </div>
            </div>
            <div class="section">
                <div class="section-title">二、类型选择标准</div>
                <table>
                    <tr><th>判断维度</th><th>倾向A型</th><th>倾向B型</th><th>倾向C型</th></tr>
                    <tr><td>问题状态</td><td>未知待探索</td><td>已知需解决</td><td>多元需协调</td></tr>
                    <tr><td>参与者角色</td><td>信息提供者</td><td>问题解决者</td><td>决策相关方</td></tr>
                    <tr><td>期望产出</td><td>完整信息集</td><td>解决方案</td><td>一致承诺</td></tr>
                    <tr><td>时间跨度</td><td>2-4小时</td><td>3-6小时</td><td>4-8小时</td></tr>
                    <tr><td>后续依赖</td><td>分析报告</td><td>执行计划</td><td>行动跟进</td></tr>
                </table>
            </div>
            <div class="section">
                <div class="section-title">三、混合场景处理</div>
                <div class="card">
                    如果问题同时涉及多种类型，按以下优先级处理：
                    <br>1. 先<strong>共识建立</strong>（C型）—— 确保大家在同一个方向上
                    <br>2. 再<strong>信息整合</strong>（A型）—— 整合各方视角
                    <br>3. 最后<strong>问题解决</strong>（B型）—— 产出具体方案
                </div>
            </div>
    '''

def get_w3_content():
    return '''
            <div class="section">
                <div class="section-title">一、产出定义三要素</div>
                <div class="grid grid-3">
                    <div class="cell highlight">
                        <div class="cell-header">产出格式</div>
                        <div class="cell-content">
                            <strong>选择形式：</strong>
                            <br>□ 文档（报告/手册）
                            <br>□ 图表（框架图/路线图）
                            <br>□ 清单（检查表/标准）
                            <br>□ 计划（方案/时间表）
                            <br>□ 决策（结论/承诺）
                        </div>
                    </div>
                    <div class="cell info">
                        <div class="cell-header">具体内容</div>
                        <div class="cell-content">
                            <strong>明确描述：</strong>
                            <br>主题：_____________
                            <br><br>
                            核心要点（3-5条）：
                            <br>1. _____________
                            <br>2. _____________
                            <br>3. _____________
                        </div>
                    </div>
                    <div class="cell success">
                        <div class="cell-header">完成标准</div>
                        <div class="cell-content">
                            <strong>可检验的标志：</strong>
                            <br>□ 能用一句话说明
                            <br>□ 有明确的受众
                            <br>□ 可在约定时间内交付
                            <br>□ 能解决初始问题
                        </div>
                    </div>
                </div>
            </div>
            <div class="section">
                <div class="section-title">二、主题到产出的转换</div>
                <table>
                    <tr><th>原始主题</th><th>转化问题</th><th>可能的产出</th></tr>
                    <tr><td>"提升客户满意度"</td><td>具体要做什么决策？</td><td>改进方案清单</td></tr>
                    <tr><td>"优化流程效率"</td><td>哪些环节有问题？</td><td>流程优化路线图</td></tr>
                    <tr><td>"团队协作问题"</td><td>要达成什么共识？</td><td>协作公约</td></tr>
                </table>
            </div>
            <div class="section">
                <div class="section-title">三、产出确认检查</div>
                <div class="card">
                    <strong>在宣布产出定义前，引导师应确认：</strong>
                    <ul class="checkbox-list">
                        <li>参与者是否理解并认同这个产出定义？</li>
                        <li>产出大小是否与时间资源匹配？</li>
                        <li>是否有足够的信息和授权来支撑这个产出？</li>
                        <li>产出的受众是谁？他们有什么期望？</li>
                    </ul>
                </div>
            </div>
    '''

def get_w4_content():
    return '''
            <div class="section">
                <div class="section-title">一、利益相关方四象限分析</div>
                <div class="grid grid-2" style="grid-template-rows: auto auto;">
                    <div class="cell highlight" style="grid-column: 1; grid-row: 1;">
                        <div class="cell-header">高权力 / 高利益 <span class="badge badge-warning">重点管理</span></div>
                        <div class="cell-content">
                            <strong>策略：</strong>充分参与、共同决策
                            <br><br>
                            <strong>参与方式：</strong>
                            <br>□ 核心参与者
                            <br>□ 决策共同签字
                            <br>□ 定期进度同步
                            <br><br>
                            <strong>代表：</strong>项目发起人、核心业务负责人
                        </div>
                    </div>
                    <div class="cell info" style="grid-column: 2; grid-row: 1;">
                        <div class="cell-header">高权力 / 低利益 <span class="badge badge-primary">保持满意</span></div>
                        <div class="cell-content">
                            <strong>策略：</strong>定期汇报、尊重知情权
                            <br><br>
                            <strong>参与方式：</strong>
                            <br>□ 决策后通报
                            <br>□ 关键节点确认
                            <br>□ 避免过度打扰
                            <br><br>
                            <strong>代表：</strong>高层领导、职能部门
                        </div>
                    </div>
                    <div class="cell success" style="grid-column: 1; grid-row: 2;">
                        <div class="cell-header">低权力 / 高利益 <span class="badge badge-success">及时通知</span></div>
                        <div class="cell-content">
                            <strong>策略：</strong>充分沟通、纳入视野
                            <br><br>
                            <strong>参与方式：</strong>
                            <br>□ 意见充分听取
                            <br>□ 进展实时同步
                            <br>□ 顾虑积极响应
                            <br><br>
                            <strong>代表：</strong>一线执行者、受影响团队
                        </div>
                    </div>
                    <div class="cell" style="grid-column: 2; grid-row: 2; background: #F7FAFC;">
                        <div class="cell-header">低权力 / 低利益 <span class="badge badge-primary">简化处理</span></div>
                        <div class="cell-content">
                            <strong>策略：</strong>最低限度参与
                            <br><br>
                            <strong>参与方式：</strong>
                            <br>□ 结果通知
                            <br>□ 疑问解答
                            <br>□ 无需专项投入
                            <br><br>
                            <strong>代表：</strong>边缘关联者
                        </div>
                    </div>
                </div>
            </div>
            <div class="section">
                <div class="section-title">二、关键人物分析</div>
                <table>
                    <tr><th>人物</th><th>角色</th><th>核心关切</th><th>沟通策略</th><th>风险点</th></tr>
                    <tr>
                        <td>____________</td>
                        <td>____________</td>
                        <td>____________</td>
                        <td>____________</td>
                        <td>____________</td>
                    </tr>
                    <tr>
                        <td>____________</td>
                        <td>____________</td>
                        <td>____________</td>
                        <td>____________</td>
                        <td>____________</td>
                    </tr>
                </table>
            </div>
    '''

def get_w5_content():
    return '''
            <div class="section">
                <div class="section-title">一、时间盒设计模板</div>
                <table>
                    <tr>
                        <th>阶段</th>
                        <th>时长</th>
                        <th>核心任务</th>
                        <th>引导要点</th>
                        <th>产出</th>
                    </tr>
                    <tr>
                        <td><strong>开场</strong></td>
                        <td>10%</td>
                        <td>建立信任、明确目标</td>
                        <td>破冰、议程确认、产出说明</td>
                        <td>共同约定的议程</td>
                    </tr>
                    <tr>
                        <td><strong>发散</strong></td>
                        <td>40%</td>
                        <td>充分展开、收集观点</td>
                        <td>头脑风暴、安全氛围、多角度</td>
                        <td>多样化的观点集</td>
                    </tr>
                    <tr>
                        <td><strong>收敛</strong></td>
                        <td>40%</td>
                        <td>整合提炼、形成方案</td>
                        <td>归类分组、优先级排序、共识</td>
                        <td>初步解决方案</td>
                    </tr>
                    <tr>
                        <td><strong>收尾</strong></td>
                        <td>10%</td>
                        <td>总结承诺、明确行动</td>
                        <td>回顾总结、任务认领、下一步</td>
                        <td>行动计划和承诺</td>
                    </tr>
                </table>
            </div>
            <div class="section">
                <div class="section-title">二、三段式结构详解</div>
                <div class="grid grid-3">
                    <div class="cell highlight">
                        <div class="cell-header">开场（10%）</div>
                        <div class="cell-content">
                            <strong>目标：</strong>暖场 + 对齐
                            <br><br>
                            <strong>关键动作：</strong>
                            <br>• 简短破冰（5分钟）
                            <br>• 目标宣读
                            <br>• 规则共识
                            <br>• 产出定义
                        </div>
                    </div>
                    <div class="cell info">
                        <div class="cell-header">主体（80%）</div>
                        <div class="cell-content">
                            <strong>目标：</strong>深度研讨
                            <br><br>
                            <strong>关键动作：</strong>
                            <br>• 发散（40%）：充分表达
                            <br>• 收敛（40%）：整合提炼
                            <br>• 中间穿插休息
                        </div>
                    </div>
                    <div class="cell success">
                        <div class="cell-header">收尾（10%）</div>
                        <div class="cell-content">
                            <strong>目标：</strong>落袋为安
                            <br><br>
                            <strong>关键动作：</strong>
                            <br>• 成果总结
                            <br>• 任务认领
                            <br>• 风险预警
                            <br>• 下一步确认
                        </div>
                    </div>
                </div>
            </div>
            <div class="section">
                <div class="section-title">三、时间盒调整参考</div>
                <div class="card">
                    <strong>根据工作坊类型调整比例：</strong>
                    <br><br>
                    <strong>信息整合型：</strong>发散50% / 收敛30%（多收集、少收敛）
                    <br><strong>问题解决型：</strong>发散30% / 收敛50%（快发散、慢收敛）
                    <br><strong>共识建立型：</strong>发散35% / 收敛45%（充分讨论、达成承诺）
                </div>
            </div>
    '''

def get_w6_content():
    return '''
            <div class="section">
                <div class="section-title">一、任务分解表示例</div>
                <table>
                    <tr>
                        <th>步骤</th>
                        <th>任务描述</th>
                        <th>时长</th>
                        <th>责任人</th>
                        <th>所需材料</th>
                        <th>完成标准</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>开场与破冰</td>
                        <td>10分钟</td>
                        <td>引导师</td>
                        <td>签到表、议程</td>
                        <td>参与者就绪</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>问题陈述</td>
                        <td>15分钟</td>
                        <td>发起人</td>
                        <td>背景资料</td>
                        <td>问题清晰</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>分组讨论</td>
                        <td>30分钟</td>
                        <td>各组组长</td>
                        <td>大白纸、彩笔</td>
                        <td>产出观点</td>
                    </tr>
                    <tr>
                        <td>...</td>
                        <td>...</td>
                        <td>...</td>
                        <td>...</td>
                        <td>...</td>
                        <td>...</td>
                    </tr>
                </table>
            </div>
            <div class="section">
                <div class="section-title">二、角色与职责</div>
                <div class="grid grid-4">
                    <div class="cell highlight">
                        <div class="cell-header">引导师</div>
                        <div class="cell-content">
                            • 主持流程
                            <br>• 控制时间
                            <br>• 维护秩序
                            <br>• 驱动共识
                        </div>
                    </div>
                    <div class="cell info">
                        <div class="cell-header">记录员</div>
                        <div class="cell-content">
                            • 书写要点
                            <br>• 拍照存档
                            <br>• 整理纪要
                            <br>• 分发资料
                        </div>
                    </div>
                    <div class="cell success">
                        <div class="cell-header">时间官</div>
                        <div class="cell-content">
                            • 提醒时间
                            <br>• 计时工具
                            <br>• 时间播报
                            <br>• 超时叫停
                        </div>
                    </div>
                    <div class="cell">
                        <div class="cell-header">组长</div>
                        <div class="cell-content">
                            • 召集组员
                            <br>• 推动讨论
                            <br>• 汇报成果
                            <br>• 跟进落实
                        </div>
                    </div>
                </div>
            </div>
            <div class="section">
                <div class="section-title">三、物料检查清单</div>
                <div class="card">
                    <div class="grid grid-2">
                        <div>
                            <strong>场地准备：</strong>
                            <br>□ 足够的座位
                            <br>□ 白板/大白纸
                            <br>□ 投影设备
                            <br>□ 计时器
                        </div>
                        <div>
                            <strong>材料准备：</strong>
                            <br>□ 签到表
                            <br>□ 名牌/贴纸
                            <br>□ 彩笔/记号笔
                            <br>□ 议程资料
                        </div>
                    </div>
                </div>
            </div>
    '''

def get_w7_content():
    return '''
            <div class="section">
                <div class="section-title">一、提问类型框架</div>
                <div class="grid grid-2">
                    <div class="cell highlight">
                        <div class="cell-header">开放性问题</div>
                        <div class="cell-content">
                            <strong>特征：</strong>无法用"是/否"回答
                            <br><br>
                            <strong>适用：</strong>探索阶段、收集观点
                            <br><br>
                            <strong>示例：</strong>
                            <br>• "你怎么看这个问题？"
                            <br>• "还有其他的可能性吗？"
                            <br>• "如果不受限制，你会怎么做？"
                        </div>
                    </div>
                    <div class="cell info">
                        <div class="cell-header">封闭性问题</div>
                        <div class="cell-content">
                            <strong>特征：</strong>可以用"是/否"回答
                            <br><br>
                            <strong>适用：</strong>确认信息、推动决策
                            <br><br>
                            <strong>示例：</strong>
                            <br>• "这个方案大家是否同意？"
                            <br>• "明天能完成吗？"
                            <br>• "还有问题吗？"
                        </div>
                    </div>
                </div>
            </div>
            <div class="section">
                <div class="section-title">二、四类提问卡片</div>
                <table>
                    <tr>
                        <th>类型</th>
                        <th>目的</th>
                        <th>引导词</th>
                        <th>示例</th>
                    </tr>
                    <tr>
                        <td><span class="badge badge-primary">探索性</span></td>
                        <td>打开思路、发现更多可能</td>
                        <td>还有什么.../如果...会怎样</td>
                        <td>"还有什么我们没考虑到的角度？"</td>
                    </tr>
                    <tr>
                        <td><span class="badge badge-success">澄清性</span></td>
                        <td>理清模糊、加深理解</td>
                        <td>能否具体说.../你的意思是</td>
                        <td>"能举个具体的例子吗？"</td>
                    </tr>
                    <tr>
                        <td><span class="badge badge-warning">挑战性</span></td>
                        <td>检验假设、推动深挖</td>
                        <td>为什么.../有什么证据</td>
                        <td>"这个判断的依据是什么？"</td>
                    </tr>
                    <tr>
                        <td><span class="badge badge-primary">行动导向</span></td>
                        <td>推动决策、转化为行动</td>
                        <td>我们决定.../下一步是</td>
                        <td>"基于讨论，我们决定怎么做？"</td>
                    </tr>
                </table>
            </div>
            <div class="section">
                <div class="section-title">三、提问时机建议</div>
                <div class="card">
                    <strong>工作坊各阶段的提问重点：</strong>
                    <br><br>
                    <strong>开场：</strong>用澄清性问题确认目标，用行动性问题对齐期望
                    <br><strong>发散：</strong>用探索性问题打开思路，用澄清性问题理清观点
                    <br><strong>收敛：</strong>用挑战性问题检验方案，用行动性问题推动决策
                    <br><strong>收尾：</strong>用行动性问题确认承诺，用澄清性问题确保理解
                </div>
            </div>
    '''

def get_w8_content():
    return '''
            <div class="section">
                <div class="section-title">一、发散阶段技术</div>
                <div class="grid grid-2">
                    <div class="cell highlight">
                        <div class="cell-header">头脑风暴</div>
                        <div class="cell-content">
                            <strong>规则：</strong>数量优先、延迟评判
                            <br><br>
                            <strong>变体：</strong>
                            <br>• 改良式：每人写3个点再展开
                            <br>• 逆向式：先想"如何搞砸"
                            <br>• 组合式：随机拼接两个想法
                        </div>
                    </div>
                    <div class="cell info">
                        <div class="cell-header">六顶思考帽</div>
                        <div class="cell-content">
                            <strong>应用：</strong>多角度全面分析
                            <br><br>
                            <strong>流程：</strong>
                            <br>白帽：事实与数据
                            <br>红帽：情感与直觉
                            <br>黑帽：风险与问题
                            <br>黄帽：价值与收益
                        </div>
                    </div>
                </div>
            </div>
            <div class="section">
                <div class="section-title">二、收敛阶段技术</div>
                <div class="grid grid-2">
                    <div class="cell success">
                        <div class="cell-header">归类分组</div>
                        <div class="cell-content">
                            <strong>操作：</strong>将相似观点合并
                            <br><br>
                            <strong>步骤：</strong>
                            <br>1. 列出所有观点
                            <br>2. 寻找共同主题
                            <br>3. 形成类别标签
                            <br>4. 统计每类数量
                        </div>
                    </div>
                    <div class="cell highlight">
                        <div class="cell-header">投票排序</div>
                        <div class="cell-content">
                            <strong>方法：</strong>
                            <br>• 举手投票：快速但不精确
                            <br>• 点投：每人N票、自由分配
                            <br>• 矩阵投票：多维度评估
                            <br>• DOT投票：每人3个点
                        </div>
                    </div>
                </div>
            </div>
            <div class="section">
                <div class="section-title">三、技术选择指南</div>
                <table>
                    <tr><th>场景</th><th>推荐技术</th><th>原因</th></tr>
                    <tr><td>创意产生初期</td><td>头脑风暴</td><td>快速量大</td></tr>
                    <tr><td>需要多角度分析</td><td>六顶思考帽</td><td>结构完整</td></tr>
                    <tr><td>观点杂乱需要整理</td><td>归类分组</td><td>化繁为简</td></tr>
                    <tr><td>需要快速决策</td><td>DOT投票</td><td>高效聚焦</td></tr>
                    <tr><td>分歧较大</td><td>点投+讨论</td><td>公平透明</td></tr>
                </table>
            </div>
    '''

def get_w9_content():
    return '''
            <div class="section">
                <div class="section-title">一、冲突类型诊断</div>
                <div class="grid grid-3">
                    <div class="cell highlight">
                        <div class="cell-header"><span class="badge badge-primary">任务冲突</span></div>
                        <div class="cell-content">
                            <strong>特征：</strong>对工作内容、方向有分歧
                            <br><br>
                            <strong>处理：</strong>
                            <br>• 回归事实和数据
                            <br>• 明确共同目标
                            <br>• 寻求第三方客观意见
                        </div>
                    </div>
                    <div class="cell info">
                        <div class="cell-header"><span class="badge badge-warning">利益冲突</span></div>
                        <div class="cell-content">
                            <strong>特征：</strong>资源分配、立场对立
                            <br><br>
                            <strong>处理：</strong>
                            <br>• 明确各方核心诉求
                            <br>• 寻找共同利益点
                            <br>• 探索增量解决方案
                        </div>
                    </div>
                    <div class="cell success">
                        <div class="cell-header"><span class="badge badge-success">关系冲突</span></div>
                        <div class="cell-content">
                            <strong>特征：</strong>情绪对立、信任缺失
                            <br><br>
                            <strong>处理：</strong>
                            <br>• 先处理情绪
                            <br>• 避免正面交锋
                            <br>• 引入第三方调解
                        </div>
                    </div>
                </div>
            </div>
            <div class="section">
                <div class="section-title">二、冲突发展阶段</div>
                <table>
                    <tr>
                        <th>阶段</th>
                        <th>特征</th>
                        <th>识别信号</th>
                        <th>干预策略</th>
                    </tr>
                    <tr>
                        <td>萌芽期</td>
                        <td>分歧出现</td>
                        <td>语气变化、沉默增加</td>
                        <td>及时关注、私下沟通</td>
                    </tr>
                    <tr>
                        <td>激化期</td>
                        <td>对抗升级</td>
                        <td>声音提高、开始指责</td>
                        <td>暂停、换话题、澄清</td>
                    </tr>
                    <tr>
                        <td>僵持期</td>
                        <td>互不相让</td>
                        <td>拒绝倾听、反复陈述</td>
                        <td>引入规则、缩小范围</td>
                    </tr>
                    <tr>
                        <td>解决期</td>
                        <td>寻求突破</td>
                        <td>语气软化、开始妥协</td>
                        <td>推动共识、确认承诺</td>
                    </tr>
                </table>
            </div>
            <div class="section">
                <div class="section-title">三、应对策略选择</div>
                <div class="card">
                    <strong>根据冲突类型和发展阶段选择策略：</strong>
                    <br><br>
                    <strong>回避：</strong>小分歧、不重要的事项（但不用来逃避责任）
                    <br><strong>缓和：</strong>关系冲突、情绪激烈时（先降温再处理）
                    <br><strong>竞争：</strong>紧急决策、原则问题（但需要充分说明理由）
                    <br><strong>妥协：</strong>双方实力均等、各有道理（各让一步）
                    <br><strong>合作：</strong>高重要性、长期关系（寻求双赢方案）
                </div>
            </div>
    '''

def get_w10_content():
    return '''
            <div class="section">
                <div class="section-title">一、成果总结模板</div>
                <div class="card">
                    <strong>本次工作坊成果摘要：</strong>
                    <br><br>
                    <strong>主题：</strong>_______________________________
                    <br><br>
                    <strong>核心产出：</strong>
                    <br>1. _________________________________
                    <br>2. _________________________________
                    <br>3. _________________________________
                    <br><br>
                    <strong>关键决策：</strong>
                    <br>_________________________________
                    <br><br>
                    <strong>遗留问题：</strong>
                    <br>_________________________________
                </div>
            </div>
            <div class="section">
                <div class="section-title">二、行动任务分配表</div>
                <table>
                    <tr>
                        <th>序号</th>
                        <th>行动任务</th>
                        <th>负责人</th>
                        <th>协助人</th>
                        <th>完成时间</th>
                        <th>依赖条件</th>
                        <th>状态</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>□待开始 □进行中 □已完成</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>□待开始 □进行中 □已完成</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>□待开始 □进行中 □已完成</td>
                    </tr>
                </table>
            </div>
            <div class="section">
                <div class="section-title">三、跟进机制设计</div>
                <div class="grid grid-2">
                    <div class="cell highlight">
                        <div class="cell-header">跟进节奏</div>
                        <div class="cell-content">
                            <strong>日常跟进：</strong>
                            <br>□ 每日站会同步
                            <br>□ 即时通讯群更新
                            <br><br>
                            <strong>节点检查：</strong>
                            <br>□ 周复盘会
                            <br>□ 里程碑评审
                        </div>
                    </div>
                    <div class="cell info">
                        <div class="cell-header">跟进责任人</div>
                        <div class="cell-content">
                            <strong>主责人：</strong>_____________
                            <br><br>
                            <strong>监督人：</strong>_____________
                            <br><br>
                            <strong>汇报对象：</strong>_____________
                        </div>
                    </div>
                </div>
            </div>
            <div class="section">
                <div class="section-title">四、风险与依赖</div>
                <div class="card">
                    <table>
                        <tr><th>潜在风险</th><th>应对措施</th><th>预警信号</th></tr>
                        <tr><td></td><td></td><td></td></tr>
                        <tr><td></td><td></td><td></td></tr>
                    </table>
                </div>
            </div>
    '''

# ===== TOOL DEFINITIONS FOR EXCEL =====

def build_w5_excel(output_path):
    strings = [
        "工作坊流程框架图", "工具编号：W5 | 适用场景：工作坊整体规划",
        "一、时间盒设计模板",
        "阶段", "时长", "核心任务", "引导要点", "产出",
        "开场", "10%", "建立信任、明确目标", "破冰、议程确认、产出说明", "共同约定的议程",
        "发散", "40%", "充分展开、收集观点", "头脑风暴、安全氛围、多角度", "多样化的观点集",
        "收敛", "40%", "整合提炼、形成方案", "归类分组、优先级排序、共识", "初步解决方案",
        "收尾", "10%", "总结承诺、明确行动", "回顾总结、任务认领、下一步", "行动计划和承诺",
        "二、三段式结构详解",
        "开场（10%）", "目标：暖场+对齐", "关键动作：破冰、目标宣读、规则共识、产出定义",
        "主体（80%）", "目标：深度研讨", "关键动作：发散（40%）充分表达 + 收敛（40%）整合提炼",
        "收尾（10%）", "目标：落袋为安", "关键动作：成果总结、任务认领、风险预警、下一步确认",
        "三、时间盒调整参考",
        "信息整合型", "发散50% / 收敛30%", "多收集、少收敛",
        "问题解决型", "发散30% / 收敛50%", "快发散、慢收敛",
        "共识建立型", "发散35% / 收敛45%", "充分讨论、达成承诺",
    ]
    cover_rows = [[("A1", "0", 4)], [("A2", "1", 2)]]
    instr_rows = [
        [("A1", "2", 1)],
        [("A3", "3", 5)],
        [("A4", "4", 1), ("B4", "5", 1), ("C4", "6", 1), ("D4", "7", 1), ("E4", "8", 1)],
        [("A5", "9", 3), ("B5", "10%", 3), ("C5", "11", 3), ("D5", "12", 3), ("E5", "13", 3)],
        [("A6", "14", 3), ("B6", "40%", 3), ("C6", "15", 3), ("D6", "16", 3), ("E6", "17", 3)],
        [("A7", "18", 3), ("B7", "40%", 3), ("C7", "19", 3), ("D7", "20", 3), ("E7", "21", 3)],
        [("A8", "22", 3), ("B8", "10%", 3), ("C8", "23", 3), ("D8", "24", 3), ("E8", "25", 3)],
        [("A10", "26", 5)],
        [("A11", "27", 5), ("B11", "28", 3)],
        [("A13", "29", 5), ("B13", "30", 3)],
        [("A15", "31", 5), ("B15", "32", 3)],
        [("A17", "33", 5)],
        [("A18", "34", 3), ("B18", "35", 3), ("C18", "36", 3)],
        [("A19", "37", 3), ("B19", "38", 3), ("C19", "39", 3)],
        [("A20", "40", 3), ("B20", "41", 3), ("C20", "42", 3)],
    ]
    sheets_data = [("封面", cover_rows), ("填写说明", instr_rows)]
    build_excel_form(output_path, strings, sheets_data, col_widths=[(1,1,18),(2,2,15),(3,3,22),(4,4,28),(5,5,25)])

def build_w6_excel(output_path):
    strings = [
        "任务分解表", "工具编号：W6 | 适用场景：工作坊详细规划",
        "一、任务分解表示例",
        "步骤", "任务描述", "时长", "责任人", "所需材料", "完成标准",
        "1", "开场与破冰", "10分钟", "引导师", "签到表、议程", "参与者就绪",
        "2", "问题陈述", "15分钟", "发起人", "背景资料", "问题清晰",
        "3", "分组讨论", "30分钟", "各组组长", "大白纸、彩笔", "产出观点",
        "4", "小组汇报", "20分钟", "各组代表", "演示文稿", "清晰表达",
        "5", "全体讨论", "25分钟", "引导师", "白板记录", "形成共识",
        "6", "总结收尾", "10分钟", "引导师", "行动表", "任务认领",
        "二、角色与职责",
        "引导师", "主持流程、控制时间、维护秩序、驱动共识",
        "记录员", "书写要点、拍照存档、整理纪要、分发资料",
        "时间官", "提醒时间、计时工具、时间播报、超时叫停",
        "组长", "召集组员、推动讨论、汇报成果、跟进落实",
        "三、物料检查清单",
        "场地准备", "□足够的座位 □白板/大白纸 □投影设备 □计时器",
        "材料准备", "□签到表 □名牌/贴纸 □彩笔/记号笔 □议程资料",
    ]
    cover_rows = [[("A1", "0", 4)], [("A2", "1", 2)]]
    instr_rows = [
        [("A1", "2", 1)],
        [("A3", "3", 5)],
        [("A4", "4", 1), ("B4", "5", 1), ("C4", "6", 1), ("D4", "7", 1), ("E4", "8", 1), ("F4", "9", 1)],
        [("A5", "10", 3), ("B5", "11", 3), ("C5", "12", 3), ("D5", "13", 3), ("E5", "14", 3), ("F5", "15", 3)],
        [("A6", "16", 3), ("B6", "17", 3), ("C6", "18", 3), ("D6", "19", 3), ("E6", "20", 3), ("F6", "21", 3)],
        [("A7", "22", 3), ("B7", "23", 3), ("C7", "24", 3), ("D7", "25", 3), ("E7", "26", 3), ("F7", "27", 3)],
        [("A8", "28", 3), ("B8", "29", 3), ("C8", "30", 3), ("D8", "31", 3), ("E8", "32", 3), ("F8", "33", 3)],
        [("A9", "34", 3), ("B9", "35", 3), ("C9", "36", 3), ("D9", "37", 3), ("E9", "38", 3), ("F9", "39", 3)],
        [("A11", "40", 5)],
        [("A12", "41", 5), ("B12", "42", 3)],
        [("A13", "43", 5), ("B13", "44", 3)],
        [("A14", "45", 5), ("B14", "46", 3)],
        [("A15", "47", 5), ("B15", "48", 3)],
        [("A17", "49", 5)],
        [("A18", "50", 5), ("B18", "51", 3)],
        [("A19", "52", 5), ("B19", "53", 3)],
    ]
    sheets_data = [("封面", cover_rows), ("填写说明", instr_rows)]
    build_excel_form(output_path, strings, sheets_data, col_widths=[(1,1,10),(2,2,22),(3,3,12),(4,4,15),(5,5,22),(6,6,18)])

def build_w7_excel(output_path):
    strings = [
        "提问设计卡", "工具编号：W7 | 适用场景：工作坊引导技巧",
        "一、提问类型框架",
        "类型", "特征", "适用场景", "示例",
        "开放性问题", "无法用是/否回答", "探索阶段、收集观点", "你怎么看这个问题？",
        "封闭性问题", "可以用是/否回答", "确认信息、推动决策", "这个方案大家是否同意？",
        "二、四类提问卡片",
        "类型", "目的", "引导词", "示例",
        "探索性", "打开思路、发现更多可能", "还有什么.../如果...会怎样", "还有什么我们没考虑到的角度？",
        "澄清性", "理清模糊、加深理解", "能否具体说.../你的意思是", "能举个具体的例子吗？",
        "挑战性", "检验假设、推动深挖", "为什么.../有什么证据", "这个判断的依据是什么？",
        "行动导向", "推动决策、转化为行动", "我们决定.../下一步是", "基于讨论，我们决定怎么做？",
        "三、提问时机建议",
        "阶段", "推荐问题类型", "目的",
        "开场", "澄清性问题、行动性问题", "确认目标、对齐期望",
        "发散", "探索性问题、澄清性问题", "打开思路、理清观点",
        "收敛", "挑战性问题、行动性问题", "检验方案、推动决策",
        "收尾", "行动性问题、澄清性问题", "确认承诺、确保理解",
    ]
    cover_rows = [[("A1", "0", 4)], [("A2", "1", 2)]]
    instr_rows = [
        [("A1", "2", 1)],
        [("A3", "3", 5)],
        [("A4", "4", 1), ("B4", "5", 1), ("C4", "6", 1), ("D4", "7", 1)],
        [("A5", "8", 3), ("B5", "9", 3), ("C5", "10", 3), ("D5", "11", 3)],
        [("A6", "12", 3), ("B6", "13", 3), ("C6", "14", 3), ("D6", "15", 3)],
        [("A8", "16", 5)],
        [("A9", "17", 1), ("B9", "18", 1), ("C9", "19", 1), ("D9", "20", 1)],
        [("A10", "21", 3), ("B10", "22", 3), ("C10", "23", 3), ("D10", "24", 3)],
        [("A11", "25", 3), ("B11", "26", 3), ("C11", "27", 3), ("D11", "28", 3)],
        [("A12", "29", 3), ("B12", "30", 3), ("C12", "31", 3), ("D12", "32", 3)],
        [("A13", "33", 3), ("B13", "34", 3), ("C13", "35", 3), ("D13", "36", 3)],
        [("A15", "37", 5)],
        [("A16", "38", 1), ("B16", "39", 1), ("C16", "40", 1)],
        [("A17", "41", 3), ("B17", "42", 3), ("C17", "43", 3)],
        [("A18", "44", 3), ("B18", "45", 3), ("C18", "46", 3)],
        [("A19", "47", 3), ("B19", "48", 3), ("C19", "49", 3)],
        [("A20", "50", 3), ("B20", "51", 3), ("C20", "52", 3)],
    ]
    sheets_data = [("封面", cover_rows), ("填写说明", instr_rows)]
    build_excel_form(output_path, strings, sheets_data, col_widths=[(1,1,15),(2,2,28),(3,3,28),(4,4,32)])

def build_w8_excel(output_path):
    strings = [
        "发散收敛操作卡", "工具编号：W8 | 适用场景：工作坊引导技术",
        "一、发散阶段技术",
        "技术", "规则/流程", "变体/注意事项",
        "头脑风暴", "数量优先、延迟评判、不批评", "改良式：每人写3个点再展开；逆向式：先想如何搞砸",
        "六顶思考帽", "白:事实红:情感黑:风险黄:价值绿:创造蓝:控制", "按顺序使用，或针对特定议题选择帽子",
        "二、收敛阶段技术",
        "技术", "操作步骤", "适用场景",
        "归类分组", "列出观点→寻找主题→形成标签→统计数量", "观点杂乱需要整理时",
        "投票排序", "DOT投票:每人3点 | 点投:自由分配 | 矩阵:多维度", "需要快速决策时",
        "三、技术选择指南",
        "场景", "推荐技术", "原因",
        "创意产生初期", "头脑风暴", "快速量大",
        "需要多角度分析", "六顶思考帽", "结构完整",
        "观点杂乱需要整理", "归类分组", "化繁为简",
        "需要快速决策", "DOT投票", "高效聚焦",
        "分歧较大", "点投+讨论", "公平透明",
    ]
    cover_rows = [[("A1", "0", 4)], [("A2", "1", 2)]]
    instr_rows = [
        [("A1", "2", 1)],
        [("A3", "3", 5)],
        [("A4", "4", 1), ("B4", "5", 1), ("C4", "6", 1)],
        [("A5", "7", 3), ("B5", "8", 3), ("C5", "9", 3)],
        [("A6", "10", 3), ("B6", "11", 3), ("C6", "12", 3)],
        [("A8", "13", 5)],
        [("A9", "14", 1), ("B9", "15", 1), ("C9", "16", 1)],
        [("A10", "17", 3), ("B10", "18", 3), ("C10", "19", 3)],
        [("A11", "20", 3), ("B11", "21", 3), ("C11", "22", 3)],
        [("A13", "23", 5)],
        [("A14", "24", 1), ("B14", "25", 1), ("C14", "26", 1)],
        [("A15", "27", 3), ("B15", "28", 3), ("C15", "29", 3)],
        [("A16", "30", 3), ("B16", "31", 3), ("C16", "32", 3)],
        [("A17", "33", 3), ("B17", "34", 3), ("C17", "35", 3)],
        [("A18", "36", 3), ("B18", "37", 3), ("C18", "38", 3)],
    ]
    sheets_data = [("封面", cover_rows), ("填写说明", instr_rows)]
    build_excel_form(output_path, strings, sheets_data, col_widths=[(1,1,20),(2,2,32),(3,3,35)])

def build_w9_excel(output_path):
    strings = [
        "冲突应对预案表", "工具编号：W9 | 适用场景：工作坊风险管控",
        "一、冲突类型诊断",
        "类型", "特征", "处理策略",
        "任务冲突", "对工作内容、方向有分歧", "回归事实和数据，明确共同目标",
        "利益冲突", "资源分配、立场对立", "明确诉求，寻找共同利益，探索增量方案",
        "关系冲突", "情绪对立、信任缺失", "先处理情绪，避免正面交锋，引入第三方",
        "二、冲突发展阶段",
        "阶段", "特征", "识别信号", "干预策略",
        "萌芽期", "分歧出现", "语气变化、沉默增加", "及时关注、私下沟通",
        "激化期", "对抗升级", "声音提高、开始指责", "暂停、换话题、澄清",
        "僵持期", "互不相让", "拒绝倾听、反复陈述", "引入规则、缩小范围",
        "解决期", "寻求突破", "语气软化、开始妥协", "推动共识、确认承诺",
        "三、应对策略选择",
        "策略", "适用场景", "说明",
        "回避", "小分歧、不重要的事项", "但不用来逃避责任",
        "缓和", "关系冲突、情绪激烈时", "先降温再处理",
        "竞争", "紧急决策、原则问题", "但需要充分说明理由",
        "妥协", "双方实力均等、各有道理", "各让一步",
        "合作", "高重要性、长期关系", "寻求双赢方案",
    ]
    cover_rows = [[("A1", "0", 4)], [("A2", "1", 2)]]
    instr_rows = [
        [("A1", "2", 1)],
        [("A3", "3", 5)],
        [("A4", "4", 1), ("B4", "5", 1), ("C4", "6", 1)],
        [("A5", "7", 3), ("B5", "8", 3), ("C5", "9", 3)],
        [("A6", "10", 3), ("B6", "11", 3), ("C6", "12", 3)],
        [("A7", "13", 3), ("B7", "14", 3), ("C7", "15", 3)],
        [("A9", "16", 5)],
        [("A10", "17", 1), ("B10", "18", 1), ("C10", "19", 1), ("D10", "20", 1)],
        [("A11", "21", 3), ("B11", "22", 3), ("C11", "23", 3), ("D11", "24", 3)],
        [("A12", "25", 3), ("B12", "26", 3), ("C12", "27", 3), ("D12", "28", 3)],
        [("A13", "29", 3), ("B13", "30", 3), ("C13", "31", 3), ("D13", "32", 3)],
        [("A14", "33", 3), ("B14", "34", 3), ("C14", "35", 3), ("D14", "36", 3)],
        [("A16", "37", 5)],
        [("A17", "38", 1), ("B17", "39", 1), ("C17", "40", 1)],
        [("A18", "41", 3), ("B18", "42", 3), ("C18", "43", 3)],
        [("A19", "44", 3), ("B19", "45", 3), ("C19", "46", 3)],
        [("A20", "47", 3), ("B20", "48", 3), ("C20", "49", 3)],
        [("A21", "50", 3), ("B21", "51", 3), ("C21", "52", 3)],
    ]
    sheets_data = [("封面", cover_rows), ("填写说明", instr_rows)]
    build_excel_form(output_path, strings, sheets_data, col_widths=[(1,1,15),(2,2,32),(3,3,32),(4,4,25)])

def build_w10_excel(output_path):
    strings = [
        "成果确认与跟进行动表", "工具编号：W10 | 适用场景：工作坊收尾与跟进",
        "一、成果总结模板",
        "本次工作坊成果摘要",
        "主题：", "_______________________________",
        "核心产出：", "1. _________________________________ 2. _________________________________ 3. _________________________________",
        "关键决策：", "_________________________________",
        "遗留问题：", "_________________________________",
        "二、行动任务分配表",
        "序号", "行动任务", "负责人", "协助人", "完成时间", "依赖条件", "状态",
        "1", "", "", "", "", "", "□待开始 □进行中 □已完成",
        "2", "", "", "", "", "", "□待开始 □进行中 □已完成",
        "3", "", "", "", "", "", "□待开始 □进行中 □已完成",
        "4", "", "", "", "", "", "□待开始 □进行中 □已完成",
        "5", "", "", "", "", "", "□待开始 □进行中 □已完成",
        "三、跟进机制设计",
        "跟进类型", "方式", "频率/时间",
        "日常跟进", "□每日站会同步 □即时通讯群更新", "",
        "节点检查", "□周复盘会 □里程碑评审", "",
        "跟进责任人", "主责人：_____________", "监督人：_____________",
        "四、风险与依赖",
        "潜在风险", "应对措施", "预警信号",
        "", "", "",
        "", "", "",
    ]
    cover_rows = [[("A1", "0", 4)], [("A2", "1", 2)]]
    instr_rows = [
        [("A1", "2", 1)],
        [("A3", "3", 5)],
        [("A4", "4", 5), ("B4", "5", 3)],
        [("A5", "6", 5), ("B5", "7", 3)],
        [("A6", "8", 5), ("B6", "9", 3)],
        [("A8", "10", 5), ("B8", "11", 3)],
        [("A10", "12", 5)],
        [("A11", "13", 1), ("B11", "14", 1), ("C11", "15", 1), ("D11", "16", 1), ("E11", "17", 1), ("F11", "18", 1), ("G11", "19", 1)],
        [("A12", "20", 3), ("B12", "", 3), ("C12", "", 3), ("D12", "", 3), ("E12", "", 3), ("F12", "", 3), ("G12", "21", 3)],
        [("A13", "22", 3), ("B13", "", 3), ("C13", "", 3), ("D13", "", 3), ("E13", "", 3), ("F13", "", 3), ("G13", "23", 3)],
        [("A14", "24", 3), ("B14", "", 3), ("C14", "", 3), ("D14", "", 3), ("E14", "", 3), ("F14", "", 3), ("G14", "25", 3)],
        [("A15", "26", 3), ("B15", "", 3), ("C15", "", 3), ("D15", "", 3), ("E15", "", 3), ("F15", "", 3), ("G15", "27", 3)],
        [("A16", "28", 3), ("B16", "", 3), ("C16", "", 3), ("D16", "", 3), ("E16", "", 3), ("F16", "", 3), ("G16", "29", 3)],
        [("A18", "30", 5)],
        [("A19", "31", 1), ("B19", "32", 1), ("C19", "33", 1)],
        [("A20", "34", 3), ("B20", "35", 3), ("C20", "", 3)],
        [("A21", "36", 3), ("B21", "37", 3), ("C21", "38", 3)],
        [("A23", "39", 5)],
        [("A24", "40", 1), ("B24", "41", 1), ("C24", "42", 1)],
        [("A25", "43", 3), ("B25", "", 3), ("C25", "", 3)],
        [("A26", "44", 3), ("B26", "", 3), ("C26", "", 3)],
    ]
    sheets_data = [("封面", cover_rows), ("填写说明", instr_rows)]
    build_excel_form(output_path, strings, sheets_data, col_widths=[(1,1,12),(2,2,30),(3,3,15),(4,4,15),(5,5,15),(6,6,18),(7,7,22)])

# ===== MARKDOWN TEMPLATES =====

def get_w1_markdown():
    return '''# W1_工作坊场景判断卡

## 工具信息
- **工具编号**：W1
- **适用场景**：工作坊开始前的可行性评估
- **目的**：判断当前情况是否适合采用工作坊形式

---

## 一、工作坊适用性判断

### 四项前提条件检查清单

- [ ] **问题明确性**：要解决的问题是否清晰具体？还是只有一个模糊的方向？
- [ ] **参与者多元性**：是否需要多方利益相关者的视角和参与？单一来源不适合工作坊
- [ ] **决策可参与性**：参与者是否有真正的决策权？还是只是来听结果？
- [ ] **时间资源充足性**：是否有足够的时间（至少2-3小时）进行充分讨论？

### 判断结论

| 状态 | 结论 |
|------|------|
| 四项全通过 | 适合工作坊 ✓ |
| 有缺项 | 需要先补充条件，再开展工作坊 |

### 备选方案（条件不足时）

- 一对一访谈
- 专家咨询
- 书面调研

---

## 二、适用场景特征

| 适合工作坊 | 不适合工作坊 |
|-----------|-------------|
| 需要跨部门协调的复杂问题 | 已经有明确答案的知识传递 |
| 需要创新思维的新项目规划 | 只需要执行已知流程 |
| 需要达成团队共识的战略决策 | 高层已经做了的决策宣贯 |
| 需要多方利益整合的方案设计 | 信息收集但无决策权 |

---

## 三、使用时机建议

**建议在工作坊前24小时完成此判断表**，确保准备充分。

如果任何一项前提不满足，优先解决该条件，而非强行开展工作坊。

---

*工具版本：v1.0 | 更新日期：2026-07-17*
'''

def get_w2_markdown():
    return '''# W2_工作坊类型选择卡

## 工具信息
- **工具编号**：W2
- **适用场景**：确定工作坊的核心类型和方向
- **目的**：根据问题特征选择最合适的工作坊类型

---

## 一、三种工作坊类型

### A型：信息整合型

| 属性 | 内容 |
|------|------|
| **目标** | 收集、整合多方信息 |
| **特征** | 信息来源分散；需要去伪存真；产出是完整画像 |
| **典型场景** | 用户研究、需求调研、市场分析 |
| **时间建议** | 2-4小时 |

### B型：问题解决型

| 属性 | 内容 |
|------|------|
| **目标** | 找到问题的根本原因并设计解决方案 |
| **特征** | 问题已经存在；需要深度分析；产出是行动方案 |
| **典型场景** | 故障复盘、流程优化、危机处理 |
| **时间建议** | 3-6小时 |

### C型：共识建立型

| 属性 | 内容 |
|------|------|
| **目标** | 让多方达成一致的行动承诺 |
| **特征** | 利益相关方多元；存在分歧需要协调；产出是承诺/协议 |
| **典型场景** | 战略对齐、方案评审、路线图制定 |
| **时间建议** | 4-8小时 |

---

## 二、类型选择标准

| 判断维度 | 倾向A型 | 倾向B型 | 倾向C型 |
|---------|--------|--------|--------|
| 问题状态 | 未知待探索 | 已知需解决 | 多元需协调 |
| 参与者角色 | 信息提供者 | 问题解决者 | 决策相关方 |
| 期望产出 | 完整信息集 | 解决方案 | 一致承诺 |
| 时间跨度 | 2-4小时 | 3-6小时 | 4-8小时 |
| 后续依赖 | 分析报告 | 执行计划 | 行动跟进 |

---

## 三、混合场景处理

如果问题同时涉及多种类型，按以下优先级处理：

1. **先共识建立**（C型）—— 确保大家在同一个方向上
2. **再信息整合**（A型）—— 整合各方视角
3. **最后问题解决**（B型）—— 产出具体方案

---

*工具版本：v1.0 | 更新日期：2026-07-17*
'''

def get_w3_markdown():
    return '''# W3_产出定义表

## 工具信息
- **工具编号**：W3
- **适用场景**：工作坊开始前明确产出定义
- **目的**：确保工作坊有明确的目标产出

---

## 一、产出定义三要素

### 1. 产出格式

选择形式：
- [ ] 文档（报告/手册）
- [ ] 图表（框架图/路线图）
- [ ] 清单（检查表/标准）
- [ ] 计划（方案/时间表）
- [ ] 决策（结论/承诺）

### 2. 具体内容

**主题：** _______________________________

**核心要点（3-5条）：**
1. _____________
2. _____________
3. _____________

### 3. 完成标准

可检验的标志：
- [ ] 能用一句话说明
- [ ] 有明确的受众
- [ ] 可在约定时间内交付
- [ ] 能解决初始问题

---

## 二、主题到产出的转换

| 原始主题 | 转化问题 | 可能的产出 |
|---------|---------|-----------|
| "提升客户满意度" | 具体要做什么决策？ | 改进方案清单 |
| "优化流程效率" | 哪些环节有问题？ | 流程优化路线图 |
| "团队协作问题" | 要达成什么共识？ | 协作公约 |

---

## 三、产出确认检查

在宣布产出定义前，引导师应确认：
- [ ] 参与者是否理解并认同这个产出定义？
- [ ] 产出大小是否与时间资源匹配？
- [ ] 是否有足够的信息和授权来支撑这个产出？
- [ ] 产出的受众是谁？他们有什么期望？

---

*工具版本：v1.0 | 更新日期：2026-07-17*
'''

def get_w4_markdown():
    return '''# W4_利益相关方分析表

## 工具信息
- **工具编号**：W4
- **适用场景**：工作坊前的利益相关方分析
- **目的**：识别关键人物，制定针对性沟通策略

---

## 一、利益相关方四象限分析

### 高权力 / 高利益 → 重点管理

**策略：** 充分参与、共同决策

**参与方式：**
- [ ] 核心参与者
- [ ] 决策共同签字
- [ ] 定期进度同步

**代表：** 项目发起人、核心业务负责人

### 高权力 / 低利益 → 保持满意

**策略：** 定期汇报、尊重知情权

**参与方式：**
- [ ] 决策后通报
- [ ] 关键节点确认
- [ ] 避免过度打扰

**代表：** 高层领导、职能部门

### 低权力 / 高利益 → 及时通知

**策略：** 充分沟通、纳入视野

**参与方式：**
- [ ] 意见充分听取
- [ ] 进展实时同步
- [ ] 顾虑积极响应

**代表：** 一线执行者、受影响团队

### 低权力 / 低利益 → 简化处理

**策略：** 最低限度参与

**参与方式：**
- [ ] 结果通知
- [ ] 疑问解答
- [ ] 无需专项投入

**代表：** 边缘关联者

---

## 二、关键人物分析

| 人物 | 角色 | 核心关切 | 沟通策略 | 风险点 |
|------|------|---------|---------|-------|
| | | | | |
| | | | | |

---

*工具版本：v1.0 | 更新日期：2026-07-17*
'''

def get_w5_markdown():
    return '''# W5_工作坊流程框架图

## 工具信息
- **工具编号**：W5
- **适用场景**：工作坊整体规划和流程设计
- **目的**：设计合理的时间盒和流程结构

---

## 一、时间盒设计模板

| 阶段 | 时长 | 核心任务 | 引导要点 | 产出 |
|------|------|---------|---------|------|
| 开场 | 10% | 建立信任、明确目标 | 破冰、议程确认、产出说明 | 共同约定的议程 |
| 发散 | 40% | 充分展开、收集观点 | 头脑风暴、安全氛围、多角度 | 多样化的观点集 |
| 收敛 | 40% | 整合提炼、形成方案 | 归类分组、优先级排序、共识 | 初步解决方案 |
| 收尾 | 10% | 总结承诺、明确行动 | 回顾总结、任务认领、下一步 | 行动计划和承诺 |

---

## 二、三段式结构详解

### 开场（10%）

**目标：** 暖场 + 对齐

**关键动作：**
- 简短破冰（5分钟）
- 目标宣读
- 规则共识
- 产出定义

### 主体（80%）

**目标：** 深度研讨

**关键动作：**
- 发散（40%）：充分表达
- 收敛（40%）：整合提炼
- 中间穿插休息

### 收尾（10%）

**目标：** 落袋为安

**关键动作：**
- 成果总结
- 任务认领
- 风险预警
- 下一步确认

---

## 三、时间盒调整参考

根据工作坊类型调整比例：

| 类型 | 发散/收敛比例 | 说明 |
|------|-------------|------|
| 信息整合型 | 50% / 30% | 多收集、少收敛 |
| 问题解决型 | 30% / 50% | 快发散、慢收敛 |
| 共识建立型 | 35% / 45% | 充分讨论、达成承诺 |

---

*工具版本：v1.0 | 更新日期：2026-07-17*
'''

def get_w6_markdown():
    return '''# W6_任务分解表

## 工具信息
- **工具编号**：W6
- **适用场景**：工作坊详细规划和物料准备
- **目的**：将工作坊拆解为可执行的具体任务

---

## 一、任务分解表示例

| 步骤 | 任务描述 | 时长 | 责任人 | 所需材料 | 完成标准 |
|------|---------|------|-------|---------|---------|
| 1 | 开场与破冰 | 10分钟 | 引导师 | 签到表、议程 | 参与者就绪 |
| 2 | 问题陈述 | 15分钟 | 发起人 | 背景资料 | 问题清晰 |
| 3 | 分组讨论 | 30分钟 | 各组组长 | 大白纸、彩笔 | 产出观点 |
| 4 | 小组汇报 | 20分钟 | 各组代表 | 演示文稿 | 清晰表达 |
| 5 | 全体讨论 | 25分钟 | 引导师 | 白板记录 | 形成共识 |
| 6 | 总结收尾 | 10分钟 | 引导师 | 行动表 | 任务认领 |

---

## 二、角色与职责

| 角色 | 职责 |
|------|------|
| **引导师** | 主持流程、控制时间、维护秩序、驱动共识 |
| **记录员** | 书写要点、拍照存档、整理纪要、分发资料 |
| **时间官** | 提醒时间、计时工具、时间播报、超时叫停 |
| **组长** | 召集组员、推动讨论、汇报成果、跟进落实 |

---

## 三、物料检查清单

### 场地准备
- [ ] 足够的座位
- [ ] 白板/大白纸
- [ ] 投影设备
- [ ] 计时器

### 材料准备
- [ ] 签到表
- [ ] 名牌/贴纸
- [ ] 彩笔/记号笔
- [ ] 议程资料

---

*工具版本：v1.0 | 更新日期：2026-07-17*
'''

def get_w7_markdown():
    return '''# W7_提问设计卡

## 工具信息
- **工具编号**：W7
- **适用场景**：工作坊中的引导提问技巧
- **目的**：帮助引导师掌握不同类型的提问方法

---

## 一、提问类型框架

### 开放性问题

| 属性 | 内容 |
|------|------|
| **特征** | 无法用"是/否"回答 |
| **适用** | 探索阶段、收集观点 |
| **示例** | "你怎么看这个问题？" "还有什么其他的可能性吗？" "如果不受限制，你会怎么做？" |

### 封闭性问题

| 属性 | 内容 |
|------|------|
| **特征** | 可以用"是/否"回答 |
| **适用** | 确认信息、推动决策 |
| **示例** | "这个方案大家是否同意？" "明天能完成吗？" "还有问题吗？" |

---

## 二、四类提问卡片

| 类型 | 目的 | 引导词 | 示例 |
|------|------|-------|------|
| **探索性** | 打开思路、发现更多可能 | 还有什么.../如果...会怎样 | "还有什么我们没考虑到的角度？" |
| **澄清性** | 理清模糊、加深理解 | 能否具体说.../你的意思是 | "能举个具体的例子吗？" |
| **挑战性** | 检验假设、推动深挖 | 为什么.../有什么证据 | "这个判断的依据是什么？" |
| **行动导向** | 推动决策、转化为行动 | 我们决定.../下一步是 | "基于讨论，我们决定怎么做？" |

---

## 三、提问时机建议

| 阶段 | 推荐问题类型 | 目的 |
|------|-------------|------|
| 开场 | 澄清性问题、行动性问题 | 确认目标、对齐期望 |
| 发散 | 探索性问题、澄清性问题 | 打开思路、理清观点 |
| 收敛 | 挑战性问题、行动性问题 | 检验方案、推动决策 |
| 收尾 | 行动性问题、澄清性问题 | 确认承诺、确保理解 |

---

*工具版本：v1.0 | 更新日期：2026-07-17*
'''

def get_w8_markdown():
    return '''# W8_发散收敛操作卡

## 工具信息
- **工具编号**：W8
- **适用场景**：工作坊中的发散收敛技术选择
- **目的**：帮助引导师在不同阶段选择合适的促动技术

---

## 一、发散阶段技术

### 头脑风暴

**规则：** 数量优先、延迟评判、不批评

**变体：**
- 改良式：每人写3个点再展开
- 逆向式：先想"如何搞砸"
- 组合式：随机拼接两个想法

### 六顶思考帽

**应用：** 多角度全面分析

**流程：**
- 白帽：事实与数据
- 红帽：情感与直觉
- 黑帽：风险与问题
- 黄帽：价值与收益
- 绿帽：创意与可能
- 蓝帽：控制与流程

---

## 二、收敛阶段技术

### 归类分组

**操作：** 将相似观点合并

**步骤：**
1. 列出所有观点
2. 寻找共同主题
3. 形成类别标签
4. 统计每类数量

### 投票排序

**方法：**
- 举手投票：快速但不精确
- 点投：每人N票、自由分配
- 矩阵投票：多维度评估
- DOT投票：每人3个点

---

## 三、技术选择指南

| 场景 | 推荐技术 | 原因 |
|------|---------|------|
| 创意产生初期 | 头脑风暴 | 快速量大 |
| 需要多角度分析 | 六顶思考帽 | 结构完整 |
| 观点杂乱需要整理 | 归类分组 | 化繁为简 |
| 需要快速决策 | DOT投票 | 高效聚焦 |
| 分歧较大 | 点投+讨论 | 公平透明 |

---

*工具版本：v1.0 | 更新日期：2026-07-17*
'''

def get_w9_markdown():
    return '''# W9_冲突应对预案表

## 工具信息
- **工具编号**：W9
- **适用场景**：工作坊中的冲突预防和处理
- **目的**：帮助引导师预判和处理工作坊中的冲突

---

## 一、冲突类型诊断

| 类型 | 特征 | 处理策略 |
|------|------|---------|
| **任务冲突** | 对工作内容、方向有分歧 | 回归事实和数据，明确共同目标 |
| **利益冲突** | 资源分配、立场对立 | 明确诉求，寻找共同利益，探索增量方案 |
| **关系冲突** | 情绪对立、信任缺失 | 先处理情绪，避免正面交锋，引入第三方 |

---

## 二、冲突发展阶段

| 阶段 | 特征 | 识别信号 | 干预策略 |
|------|------|---------|---------|
| 萌芽期 | 分歧出现 | 语气变化、沉默增加 | 及时关注、私下沟通 |
| 激化期 | 对抗升级 | 声音提高、开始指责 | 暂停、换话题、澄清 |
| 僵持期 | 互不相让 | 拒绝倾听、反复陈述 | 引入规则、缩小范围 |
| 解决期 | 寻求突破 | 语气软化、开始妥协 | 推动共识、确认承诺 |

---

## 三、应对策略选择

| 策略 | 适用场景 | 说明 |
|------|---------|------|
| **回避** | 小分歧、不重要的事项 | 但不用来逃避责任 |
| **缓和** | 关系冲突、情绪激烈时 | 先降温再处理 |
| **竞争** | 紧急决策、原则问题 | 但需要充分说明理由 |
| **妥协** | 双方实力均等、各有道理 | 各让一步 |
| **合作** | 高重要性、长期关系 | 寻求双赢方案 |

---

*工具版本：v1.0 | 更新日期：2026-07-17*
'''

def get_w10_markdown():
    return '''# W10_成果确认与跟进行动表

## 工具信息
- **工具编号**：W10
- **适用场景**：工作坊收尾和后续跟进
- **目的**：确保工作坊成果落地和持续跟进

---

## 一、成果总结模板

**本次工作坊成果摘要：**

**主题：** _______________________________

**核心产出：**
1. _________________________________
2. _________________________________
3. _________________________________

**关键决策：**
_________________________________

**遗留问题：**
_________________________________

---

## 二、行动任务分配表

| 序号 | 行动任务 | 负责人 | 协助人 | 完成时间 | 依赖条件 | 状态 |
|------|---------|-------|-------|---------|---------|------|
| 1 | | | | | | □待开始 □进行中 □已完成 |
| 2 | | | | | | □待开始 □进行中 □已完成 |
| 3 | | | | | | □待开始 □进行中 □已完成 |
| 4 | | | | | | □待开始 □进行中 □已完成 |
| 5 | | | | | | □待开始 □进行中 □已完成 |

---

## 三、跟进机制设计

### 跟进节奏

- [ ] 日常跟进：每日站会同步 / 即时通讯群更新
- [ ] 节点检查：周复盘会 / 里程碑评审

### 跟进责任人

- **主责人：** ________________
- **监督人：** ________________
- **汇报对象：** ________________

---

## 四、风险与依赖

| 潜在风险 | 应对措施 | 预警信号 |
|---------|---------|---------|
| | | |
| | | |

---

*工具版本：v1.0 | 更新日期：2026-07-17*
'''

# ===== MAIN BUILD FUNCTION =====

def build_all():
    # Create output directory
    os.makedirs(OUTPUT_BASE, exist_ok=True)

    tools = [
        ("W1", "工作坊场景判断卡", "Workshop Scenario Card", get_w1_content, get_w1_markdown, None),
        ("W2", "工作坊类型选择卡", "Workshop Type Selection Card", get_w2_content, get_w2_markdown, None),
        ("W3", "产出定义表", "Output Definition Form", get_w3_content, get_w3_markdown, None),
        ("W4", "利益相关方分析表", "Stakeholder Analysis Form", get_w4_content, get_w4_markdown, None),
        ("W5", "工作坊流程框架图", "Workshop Flow Framework", get_w5_content, get_w5_markdown, build_w5_excel),
        ("W6", "任务分解表", "Task Decomposition Form", get_w6_content, get_w6_markdown, build_w6_excel),
        ("W7", "提问设计卡", "Question Design Card", get_w7_content, get_w7_markdown, build_w7_excel),
        ("W8", "发散收敛操作卡", "Divergence-Convergence Card", get_w8_content, get_w8_markdown, build_w8_excel),
        ("W9", "冲突应对预案表", "Conflict Response Plan Form", get_w9_content, get_w9_markdown, build_w9_excel),
        ("W10", "成果确认与跟进行动表", "Output Confirmation and Follow-up Form", get_w10_content, get_w10_markdown, build_w10_excel),
    ]

    for tool_id, title_cn, title_en, content_fn, markdown_fn, excel_fn in tools:
        print(f"\n{'='*60}")
        print(f"Building {tool_id}: {title_cn}")

        # Build HTML
        html_content = HTML_HEADER.format(
            title=f"{tool_id}_{title_cn}",
            header_title=f"{tool_id} {title_cn}",
            header_subtitle=title_en,
            tool_id=tool_id,
            scenario="培训引导与工作坊带领",
            content=content_fn()
        )
        html_path = os.path.join(OUTPUT_BASE, f"{tool_id}_{title_cn}.html")
        with open(html_path, 'w', encoding='utf-8') as f:
            f.write(html_content)
        print(f"  HTML: {os.path.basename(html_path)}")

        # Build Markdown
        md_content = markdown_fn()
        md_path = os.path.join(OUTPUT_BASE, f"{tool_id}_{title_cn}.md")
        with open(md_path, 'w', encoding='utf-8') as f:
            f.write(md_content)
        print(f"  MD: {os.path.basename(md_path)}")

        # Build Excel (only for W5-W10)
        if excel_fn:
            excel_fn(os.path.join(OUTPUT_BASE, f"{tool_id}_{title_cn}.xlsx"))
            print(f"  Excel: {tool_id}_{title_cn}.xlsx")

    print(f"\n{'='*60}")
    print(f"All tools built successfully!")
    print(f"Output directory: {OUTPUT_BASE}")

if __name__ == "__main__":
    build_all()
