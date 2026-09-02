#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Build 业财融合 Excel tool forms (F1-F10):
  1. 配套表单_空表.xlsx   - all forms empty
  2. 配套表单_填好版.xlsx - all forms with examples
  3. 表单使用指引.xlsx    - usage guide
"""

import os
import shutil
import zipfile

TEMPLATE_DIR = "C:/Users/Administrator/.claude/skills/Excel表格处理/templates/minimal_xlsx"

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
    <fill><patternFill patternType="solid"><fgColor rgb="008B0000"/><bgColor indexed="64"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="00F5F5F5"/><bgColor indexed="64"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="00FFFF00"/><bgColor indexed="64"/></patternFill></fill>
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
    <xf numFmtId="0" fontId="3" fillId="4" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1"/>
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
    for row_data in rows:
        row_num = row_data[0][1]  # first cell tuple: (col, row, val, style)
        cells = []
        for cell_data in row_data:
            col, row, value, style = cell_data[:4]
            if isinstance(value, str):
                cells.append('<c r="' + col + str(row) + '" t="s" s="' + str(style) + '"><v>' + value + '</v></c>')
            else:
                cells.append('<c r="' + col + str(row) + '" s="' + str(style) + '"><v>' + str(value) + '</v></c>')
        if cells:
            rows_xml.append('    <row r="' + str(row_num) + '">' + ''.join(cells) + '</row>')

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


# ============================================================
# F1: 业财融合成熟度自测卡
# ============================================================
def make_f1():
    title = "业财融合成熟度自测卡"
    ver   = "编号：F1　　版本：V1.0"
    date  = "填写日期：____________"
    nd    = "填写人：____________　　部门：____________"
    sec1  = "一、认知融合"
    sec2  = "二、流程融合"
    sec3  = "三、工具融合"
    sec4  = "四、考核融合"
    hdr   = ["评估维度", "评估要点", "自评得分（1-5）", "具体说明"]
    items1 = [
        ("财务理解业务", "我能说清楚我们公司的盈利模式"),
        ("业务理解财务", "我能用财务指标解释业务决策的后果"),
        ("共同语言体系", "业务和财务团队沟通时使用同一套术语"),
    ]
    items2 = [
        ("预算流程参与", "业务部门深度参与预算编制过程"),
        ("业务计划财务化", "业务计划中有明确的财务测算和预期"),
        ("财务审批流程", "财务能提前介入业务决策，而非事后核算"),
    ]
    items3 = [
        ("数据可视化", "业务人员能通过可视化工具查看财务数据"),
        ("业务分析工具", "财务提供的分析工具能匹配业务场景"),
        ("系统集成度", "业务系统与财务系统数据打通"),
    ]
    items4 = [
        ("考核指标设计", "业务KPI与财务指标已实现联动"),
        ("考核结果应用", "考核结果能真实反映业务价值贡献"),
    ]
    total  = "总分"
    avg    = "各维度平均得分"
    sum_hdr = ["维度", "得分", "说明"]
    dims   = ["认知融合", "流程融合", "工具融合", "考核融合"]
    note   = "使用说明：每个要点按1-5分自评，1=完全不符合，5=完全符合。总分除以题目数为最终得分。60%以上为合格。"

    # EMPTY
    s_empty = [title, ver, date, nd, sec1, hdr[0], hdr[1], hdr[2], hdr[3]]
    for a, b in items1: s_empty += [a, b]
    s_empty += [sec2, hdr[0], hdr[1], hdr[2], hdr[3]]
    for a, b in items2: s_empty += [a, b]
    s_empty += [sec3, hdr[0], hdr[1], hdr[2], hdr[3]]
    for a, b in items3: s_empty += [a, b]
    s_empty += [sec4, hdr[0], hdr[1], hdr[2], hdr[3]]
    for a, b in items4: s_empty += [a, b]
    s_empty += [total, avg, sum_hdr[0], sum_hdr[1], sum_hdr[2]]
    s_empty += dims + [note]

    def idx(lst, s): return lst.index(s)

    def build_empty():
        r = 1
        rows = []
        rows.append([("A", r, idx(s_empty, title), 4), ("B", r, idx(s_empty, ver), 2)]); r += 1
        rows.append([("A", r, idx(s_empty, date), 2)]); r += 1
        rows.append([("A", r, idx(s_empty, nd), 2)]); r += 1
        r += 1  # row 5 blank
        rows.append([("A", r, idx(s_empty, sec1), 1)]); r += 1
        rows.append([("A", r, idx(s_empty, hdr[0]), 1), ("B", r, idx(s_empty, hdr[1]), 1), ("C", r, idx(s_empty, hdr[2]), 1), ("D", r, idx(s_empty, hdr[3]), 1)]); r += 1
        for a, b in items1:
            rows.append([("A", r, idx(s_empty, a), 2), ("B", r, idx(s_empty, b), 2), ("C", r, "", 2), ("D", r, "", 2)]); r += 1
        rows.append([("A", r, idx(s_empty, sec2), 1)]); r += 1
        rows.append([("A", r, idx(s_empty, hdr[0]), 1), ("B", r, idx(s_empty, hdr[1]), 1), ("C", r, idx(s_empty, hdr[2]), 1), ("D", r, idx(s_empty, hdr[3]), 1)]); r += 1
        for a, b in items2:
            rows.append([("A", r, idx(s_empty, a), 2), ("B", r, idx(s_empty, b), 2), ("C", r, "", 2), ("D", r, "", 2)]); r += 1
        rows.append([("A", r, idx(s_empty, sec3), 1)]); r += 1
        rows.append([("A", r, idx(s_empty, hdr[0]), 1), ("B", r, idx(s_empty, hdr[1]), 1), ("C", r, idx(s_empty, hdr[2]), 1), ("D", r, idx(s_empty, hdr[3]), 1)]); r += 1
        for a, b in items3:
            rows.append([("A", r, idx(s_empty, a), 2), ("B", r, idx(s_empty, b), 2), ("C", r, "", 2), ("D", r, "", 2)]); r += 1
        rows.append([("A", r, idx(s_empty, sec4), 1)]); r += 1
        rows.append([("A", r, idx(s_empty, hdr[0]), 1), ("B", r, idx(s_empty, hdr[1]), 1), ("C", r, idx(s_empty, hdr[2]), 1), ("D", r, idx(s_empty, hdr[3]), 1)]); r += 1
        for a, b in items4:
            rows.append([("A", r, idx(s_empty, a), 2), ("B", r, idx(s_empty, b), 2), ("C", r, "", 2), ("D", r, "", 2)]); r += 1
        r += 1  # gap
        rows.append([("A", r, idx(s_empty, total), 1)]); r += 1
        rows.append([("A", r, idx(s_empty, avg), 1)]); r += 1
        rows.append([("A", r, idx(s_empty, sum_hdr[0]), 1), ("B", r, idx(s_empty, sum_hdr[1]), 1), ("C", r, idx(s_empty, sum_hdr[2]), 1)]); r += 1
        for d in dims:
            rows.append([("A", r, idx(s_empty, d), 2), ("B", r, "", 2), ("C", r, "", 2)]); r += 1
        r += 4  # gap
        rows.append([("A", r, idx(s_empty, note), 0)])
        return s_empty, rows

    # FILLED
    s_filled = list(s_empty)
    extra = [
        "我能说清楚我们公司的盈利模式，但成本结构解释不够直观",
        "能说清楚收入结构，但成本结构解释不够直观",
        "双方对'利润率'的理解存在差异，需要对齐",
        "业务负责人参与预算启动会，并提供市场预测数据",
        "业务计划有收入目标，但缺少成本和现金流预测",
        "财务主要做事后核算，事前介入较少",
        "已上线财务看板，业务可实时查看收入数据",
        "有通用报表，但针对业务场景的专题分析较少",
        "CRM和ERP数据未打通，需要手工导数",
        "销售部门KPI含收入指标，但缺少利润考核",
        "业务完成收入目标但利润下滑，考核未体现",
        "基本合格，流程和工具是短板",
        "事前介入不足，需要加强预算联动",
        "系统集成是核心问题",
        "需要将利润指标纳入业务考核",
    ]
    for e in extra: s_filled.append(e)

    def ifn(lst, s): return lst.index(s) if s in lst else -1

    def build_filled():
        r = 1
        rows = []
        rows.append([("A", r, ifn(s_filled, title), 4), ("B", r, ifn(s_filled, ver), 2)]); r += 1
        rows.append([("A", r, ifn(s_filled, date), 2)]); r += 1
        rows.append([("A", r, ifn(s_filled, nd), 2)]); r += 1
        r += 1
        rows.append([("A", r, ifn(s_filled, sec1), 1)]); r += 1
        rows.append([("A", r, ifn(s_filled, hdr[0]), 1), ("B", r, ifn(s_filled, hdr[1]), 1), ("C", r, ifn(s_filled, hdr[2]), 1), ("D", r, ifn(s_filled, hdr[3]), 1)]); r += 1
        filled1 = [
            ("我能说清楚我们公司的盈利模式，但成本结构解释不够直观", "4", "自我评估：能说清盈利模式，但成本结构解释不够直观"),
            ("能说清楚收入结构，但成本结构解释不够直观", "3", "双方对'利润率'的理解存在差异，需要对齐"),
            ("双方对'利润率'的理解存在差异，需要对齐", "3", "沟通中发现的认知差距，需要定期对齐"),
        ]
        for (a, b), (desc, score, detail) in zip(items1, filled1):
            rows.append([("A", r, ifn(s_filled, a), 6), ("B", r, ifn(s_filled, desc), 6), ("C", r, score, 6), ("D", r, ifn(s_filled, detail), 6)]); r += 1
        rows.append([("A", r, ifn(s_filled, sec2), 1)]); r += 1
        rows.append([("A", r, ifn(s_filled, hdr[0]), 1), ("B", r, ifn(s_filled, hdr[1]), 1), ("C", r, ifn(s_filled, hdr[2]), 1), ("D", r, ifn(s_filled, hdr[3]), 1)]); r += 1
        filled2 = [
            ("业务负责人参与预算启动会，并提供市场预测数据", "4", "业务深度参与预算编制"),
            ("业务计划有收入目标，但缺少成本和现金流预测", "3", "收入目标有，但成本和现金流预测缺失"),
            ("财务主要做事后核算，事前介入较少", "2", "财务角色偏后，需要前置"),
        ]
        for (a, b), (desc, score, detail) in zip(items2, filled2):
            rows.append([("A", r, ifn(s_filled, a), 6), ("B", r, ifn(s_filled, desc), 6), ("C", r, score, 6), ("D", r, ifn(s_filled, detail), 6)]); r += 1
        rows.append([("A", r, ifn(s_filled, sec3), 1)]); r += 1
        rows.append([("A", r, ifn(s_filled, hdr[0]), 1), ("B", r, ifn(s_filled, hdr[1]), 1), ("C", r, ifn(s_filled, hdr[2]), 1), ("D", r, ifn(s_filled, hdr[3]), 1)]); r += 1
        filled3 = [
            ("已上线财务看板，业务可实时查看收入数据", "4", "已有基础可视化工具"),
            ("有通用报表，但针对业务场景的专题分析较少", "3", "报表有但不贴合业务"),
            ("CRM和ERP数据未打通，需要手工导数", "2", "系统集成度低"),
        ]
        for (a, b), (desc, score, detail) in zip(items3, filled3):
            rows.append([("A", r, ifn(s_filled, a), 6), ("B", r, ifn(s_filled, desc), 6), ("C", r, score, 6), ("D", r, ifn(s_filled, detail), 6)]); r += 1
        rows.append([("A", r, ifn(s_filled, sec4), 1)]); r += 1
        rows.append([("A", r, ifn(s_filled, hdr[0]), 1), ("B", r, ifn(s_filled, hdr[1]), 1), ("C", r, ifn(s_filled, hdr[2]), 1), ("D", r, ifn(s_filled, hdr[3]), 1)]); r += 1
        filled4 = [
            ("销售部门KPI含收入指标，但缺少利润考核", "3", "收入和利润指标分离"),
            ("业务完成收入目标但利润下滑，考核未体现", "3", "考核未能联动利润"),
        ]
        for (a, b), (desc, score, detail) in zip(items4, filled4):
            rows.append([("A", r, ifn(s_filled, a), 6), ("B", r, ifn(s_filled, desc), 6), ("C", r, score, 6), ("D", r, ifn(s_filled, detail), 6)]); r += 1
        r += 1
        rows.append([("A", r, ifn(s_filled, total), 1)]); r += 1
        rows.append([("A", r, ifn(s_filled, avg), 1)]); r += 1
        rows.append([("A", r, ifn(s_filled, sum_hdr[0]), 1), ("B", r, ifn(s_filled, sum_hdr[1]), 1), ("C", r, ifn(s_filled, sum_hdr[2]), 1)]); r += 1
        sum_filled = [
            ("认知融合", "3.3", "基本合格，但还有提升空间"),
            ("流程融合", "3.0", "事前介入不足，需要加强预算联动"),
            ("工具融合", "3.0", "系统集成是核心问题"),
            ("考核融合", "3.0", "需要将利润指标纳入业务考核"),
        ]
        for d, sc,说明 in sum_filled:
            rows.append([("A", r, ifn(s_filled, d), 6), ("B", r, sc, 6), ("C", r, ifn(s_filled, 说明), 6)]); r += 1
        r += 4
        rows.append([("A", r, ifn(s_filled, note), 0)])
        return s_filled, rows

    return build_empty, build_filled


# ============================================================
# F2: 业务语言翻财务语言
# ============================================================
def make_f2():
    title = "业务语言翻译成财务语言工作表"
    ver   = "编号：F2　　版本：V1.0"
    scene = "使用场景：业务部门向财务说明业务情况时使用"
    hdr   = ["业务术语", "财务对应概念", "说明/举例"]
    data_empty = [
        ("增加一个渠道", "市场推广投入/获客成本", "新增渠道带来的直接推广费用和获客成本"),
        ("客户增长", "营业收入增长/客户生命周期价值", "新客户带来的收入贡献"),
        ("提高市占率", "收入规模效应/边际成本递减", "规模扩大后单位成本下降"),
        ("产品创新", "研发费用/无形资产", "开发新产品所需投入"),
        ("提升品牌", "品牌费用/长期资产", "品牌建设投入的长期回报"),
        ("客户留存", "客户续费率/收入可预测性", "续费收入占比"),
        ("提升转化率", "销售效率/单位成本", "相同流量下的成交提升"),
    ]
    note = "使用说明：左列填写业务场景中常用的术语，中间列写出对应的财务语言，右列说明如何理解。"

    def build_empty():
        s = [title, ver, scene, hdr[0], hdr[1], hdr[2], note] + [a for a,b,c in data_empty] + [b for a,b,c in data_empty] + [c for a,b,c in data_empty]
        def i(x): return s.index(x)
        r = 1
        rows = []
        rows.append([("A", r, i(title), 4), ("B", r, i(ver), 2)]); r += 1
        rows.append([("A", r, i(scene), 2)]); r += 1
        r += 1
        rows.append([("A", r, i(hdr[0]), 1), ("B", r, i(hdr[1]), 1), ("C", r, i(hdr[2]), 1)]); r += 1
        for a, b, c in data_empty:
            rows.append([("A", r, i(a), 2), ("B", r, i(b), 2), ("C", r, i(c), 2)]); r += 1
        for _ in range(15):
            rows.append([("A", r, "", 2), ("B", r, "", 2), ("C", r, "", 2)]); r += 1
        rows.append([("A", r, i(note), 0)])
        return s, rows

    def build_filled():
        s = [title, ver, scene, hdr[0], hdr[1], hdr[2], note] + [a for a,b,c in data_empty] + [b for a,b,c in data_empty] + [c for a,b,c in data_empty]
        def i(x): return s.index(x)
        r = 1
        rows = []
        rows.append([("A", r, i(title), 4), ("B", r, i(ver), 2)]); r += 1
        rows.append([("A", r, i(scene), 2)]); r += 1
        r += 1
        rows.append([("A", r, i(hdr[0]), 1), ("B", r, i(hdr[1]), 1), ("C", r, i(hdr[2]), 1)]); r += 1
        for a, b, c in data_empty:
            rows.append([("A", r, i(a), 6), ("B", r, i(b), 6), ("C", r, i(c), 6)]); r += 1
        for _ in range(15):
            rows.append([("A", r, "", 2), ("B", r, "", 2), ("C", r, "", 2)]); r += 1
        rows.append([("A", r, i(note), 0)])
        return s, rows

    return build_empty, build_filled


# ============================================================
# F3: 财务语言翻业务语言
# ============================================================
def make_f3():
    title = "财务语言翻译成业务语言工作表"
    ver   = "编号：F3　　版本：V1.0"
    scene = "使用场景：财务向业务说明财务数据时使用"
    hdr   = ["财务术语/报表项目", "财务含义", "业务对应理解", "决策应用建议"]
    data_empty = [
        ("毛利率", "毛利与销售收入的比例", "产品本身卖得好不好，不含营销和管理费用", "判断产品竞争力，决定是否调整产品结构"),
        ("EBITDA", "息税折旧摊销前利润", "企业核心经营能力，剔除财务和投资影响", "评估经营效率，对比同行水平"),
        ("应收账款周转天数", "销售回款的速度", "客户付款习惯和信用政策是否合理", "调整信用政策，加快回款"),
        ("存货周转率", "库存流动的速度", "产品是否好卖，是否积压", "调整生产计划，优化库存"),
        ("资产负债率", "资产中负债的比例", "企业杠杆水平，偿债风险", "控制负债规模，平衡风险与收益"),
    ]
    note = "使用说明：左列填写财务术语，中间列写出财务上的含义，第三列转化为业务语言，右列给出业务决策建议。"

    def build_empty():
        s = [title, ver, scene, hdr[0], hdr[1], hdr[2], hdr[3], note] + [a for a,b,c,d in data_empty] + [b for a,b,c,d in data_empty] + [c for a,b,c,d in data_empty] + [d for a,b,c,d in data_empty]
        def i(x): return s.index(x)
        r = 1
        rows = []
        rows.append([("A", r, i(title), 4), ("B", r, i(ver), 2)]); r += 1
        rows.append([("A", r, i(scene), 2)]); r += 1
        r += 1
        rows.append([("A", r, i(hdr[0]), 1), ("B", r, i(hdr[1]), 1), ("C", r, i(hdr[2]), 1), ("D", r, i(hdr[3]), 1)]); r += 1
        for a, b, c, d in data_empty:
            rows.append([("A", r, i(a), 2), ("B", r, i(b), 2), ("C", r, i(c), 2), ("D", r, i(d), 2)]); r += 1
        for _ in range(20):
            rows.append([("A", r, "", 2), ("B", r, "", 2), ("C", r, "", 2), ("D", r, "", 2)]); r += 1
        rows.append([("A", r, i(note), 0)])
        return s, rows

    def build_filled():
        s = [title, ver, scene, hdr[0], hdr[1], hdr[2], hdr[3], note]
        for a, b, c, d in data_empty:
            s += [a, b, c, d]
        def i(x): return s.index(x)
        r = 1
        rows = []
        rows.append([("A", r, i(title), 4), ("B", r, i(ver), 2)]); r += 1
        rows.append([("A", r, i(scene), 2)]); r += 1
        r += 1
        rows.append([("A", r, i(hdr[0]), 1), ("B", r, i(hdr[1]), 1), ("C", r, i(hdr[2]), 1), ("D", r, i(hdr[3]), 1)]); r += 1
        for a, b, c, d in data_empty:
            rows.append([("A", r, i(a), 6), ("B", r, i(b), 6), ("C", r, i(c), 6), ("D", r, i(d), 6)]); r += 1
        for _ in range(20):
            rows.append([("A", r, "", 2), ("B", r, "", 2), ("C", r, "", 2), ("D", r, "", 2)]); r += 1
        rows.append([("A", r, i(note), 0)])
        return s, rows

    return build_empty, build_filled


# ============================================================
# F4: 业财对话会议准备单
# ============================================================
def make_f4():
    title = "业财对话会议准备单"
    ver   = "编号：F4　　版本：V1.0"
    info  = "会议信息"
    mt    = "会议类型：____________"
    time_ = "会议时间：____________"
    att   = "参会人员：____________"
    hdr   = ["会议议题", "预期财务问题", "准备要点"]
    data_filled = [
        ("讨论新渠道拓展方案", "新渠道ROI如何计算？投资回收期多长？", "准备市场调研数据、竞品渠道分析、预期投入产出测算"),
        ("季度销售目标复盘", "为什么实际收入低于目标？Q4如何追赶？", "准备客户漏斗数据、转化率分析、下季度追赶计划"),
        ("下年度预算编制启动", "业务部门能承担多少成本？哪些投入优先？", "准备业务发展计划、优先级排序、资源需求说明"),
    ]
    note = "使用说明：会前填写，左列列出会议议题，中列预判财务可能关心的问题，右列准备应对材料。"

    def build_empty():
        s = [title, ver, info, mt, time_, att, hdr[0], hdr[1], hdr[2], note]
        def i(x): return s.index(x)
        r = 1
        rows = []
        rows.append([("A", r, i(title), 4), ("B", r, i(ver), 2)]); r += 1
        r += 1
        rows.append([("A", r, i(info), 1)]); r += 1
        rows.append([("A", r, i(mt), 2), ("B", r, i(time_), 2), ("C", r, i(att), 2)]); r += 1
        r += 1
        rows.append([("A", r, i(hdr[0]), 1), ("B", r, i(hdr[1]), 1), ("C", r, i(hdr[2]), 1)]); r += 1
        for _ in range(15):
            rows.append([("A", r, "", 2), ("B", r, "", 2), ("C", r, "", 2)]); r += 1
        rows.append([("A", r, i(note), 0)])
        return s, rows

    def build_filled():
        s = [title, ver, info, mt, time_, att, hdr[0], hdr[1], hdr[2], note]
        for a, b, c in data_filled:
            s += [a, b, c]
        def i(x): return s.index(x)
        r = 1
        rows = []
        rows.append([("A", r, i(title), 4), ("B", r, i(ver), 2)]); r += 1
        r += 1
        rows.append([("A", r, i(info), 1)]); r += 1
        rows.append([("A", r, i(mt), 6), ("B", r, i(time_), 6), ("C", r, i(att), 6)]); r += 1
        r += 1
        rows.append([("A", r, i(hdr[0]), 1), ("B", r, i(hdr[1]), 1), ("C", r, i(hdr[2]), 1)]); r += 1
        for a, b, c in data_filled:
            rows.append([("A", r, i(a), 6), ("B", r, i(b), 6), ("C", r, i(c), 6)]); r += 1
        for _ in range(12):
            rows.append([("A", r, "", 2), ("B", r, "", 2), ("C", r, "", 2)]); r += 1
        rows.append([("A", r, i(note), 0)])
        return s, rows

    return build_empty, build_filled


# ============================================================
# F5: 业务决策财务影响评估表
# ============================================================
def make_f5():
    title = "业务决策财务影响评估表"
    ver   = "编号：F5　　版本：V1.0"
    info  = "决策基本信息"
    name  = "决策名称：____________"
    type_ = "决策类型：□战略 □运营 □投资"
    time_ = "决策时间：____________"
    hdr   = ["决策描述", "财务影响（收入/成本/利润）", "风险点", "建议"]
    data_filled = [
        ("上线新产品线", "一次性研发投入200万，预计年新增收入500万", "市场竞争激烈，销量不确定", "分阶段投入，第一阶段先投入50万测试市场"),
        ("开拓海外市场", "前期市场开拓费用150万，第二年预计贡献收入800万", "汇率风险、法规风险", "先找本地合作伙伴，降低进入门槛"),
        ("采购新设备", "设备投入300万，年维护成本20万，5年折旧", "利用率不足风险", "先测算保本工作量，确保产能利用率>70%"),
    ]
    note = "使用说明：描述业务决策，分析对收入、成本、利润的影响，识别风险并给出建议。"

    def build_empty():
        s = [title, ver, info, name, type_, time_, hdr[0], hdr[1], hdr[2], hdr[3], note]
        def i(x): return s.index(x)
        r = 1
        rows = []
        rows.append([("A", r, i(title), 4), ("B", r, i(ver), 2)]); r += 1
        r += 1
        rows.append([("A", r, i(info), 1)]); r += 1
        rows.append([("A", r, i(name), 2), ("B", r, i(type_), 2), ("C", r, i(time_), 2)]); r += 1
        r += 1
        rows.append([("A", r, i(hdr[0]), 1), ("B", r, i(hdr[1]), 1), ("C", r, i(hdr[2]), 1), ("D", r, i(hdr[3]), 1)]); r += 1
        for _ in range(15):
            rows.append([("A", r, "", 2), ("B", r, "", 2), ("C", r, "", 2), ("D", r, "", 2)]); r += 1
        rows.append([("A", r, i(note), 0)])
        return s, rows

    def build_filled():
        s = [title, ver, info, name, type_, time_, hdr[0], hdr[1], hdr[2], hdr[3], note]
        for a, b, c, d in data_filled:
            s += [a, b, c, d]
        def i(x): return s.index(x)
        r = 1
        rows = []
        rows.append([("A", r, i(title), 4), ("B", r, i(ver), 2)]); r += 1
        r += 1
        rows.append([("A", r, i(info), 1)]); r += 1
        rows.append([("A", r, i(name), 6), ("B", r, i(type_), 6), ("C", r, i(time_), 6)]); r += 1
        r += 1
        rows.append([("A", r, i(hdr[0]), 1), ("B", r, i(hdr[1]), 1), ("C", r, i(hdr[2]), 1), ("D", r, i(hdr[3]), 1)]); r += 1
        for a, b, c, d in data_filled:
            rows.append([("A", r, i(a), 6), ("B", r, i(b), 6), ("C", r, i(c), 6), ("D", r, i(d), 6)]); r += 1
        for _ in range(12):
            rows.append([("A", r, "", 2), ("B", r, "", 2), ("C", r, "", 2), ("D", r, "", 2)]); r += 1
        rows.append([("A", r, i(note), 0)])
        return s, rows

    return build_empty, build_filled


# ============================================================
# F6: 预算执行偏差分析表
# ============================================================
def make_f6():
    title = "预算执行偏差分析表"
    ver   = "编号：F6　　版本：V1.0"
    info  = "分析周期：____________　　部门：____________"
    hdr   = ["预算项目", "预算金额", "实际金额", "偏差额", "偏差率", "偏差原因分析", "改善措施"]
    data_filled = [
        ("人员成本", "1,200,000", "1,350,000", "150,000", "12.5%", "新增2名员工，招聘市场薪酬上涨", "优化招聘节奏，下半年控制招聘"),
        ("市场推广费", "800,000", "720,000", "-80,000", "-10.0%", "部分推广活动因策略调整取消", "将节省费用调整至效果更好的渠道"),
        ("差旅费", "300,000", "380,000", "80,000", "26.7%", "上半年客户拜访频次增加", "建立差旅费用标准，优化远程沟通"),
    ]
    note = "使用说明：每月/季度填写，对比预算与实际，找出偏差原因并制定改善措施。偏差率超过10%的项目需要重点分析。"

    def build_empty():
        s = [title, ver, info, hdr[0], hdr[1], hdr[2], hdr[3], hdr[4], hdr[5], hdr[6], note]
        def i(x): return s.index(x)
        r = 1
        rows = []
        rows.append([("A", r, i(title), 4), ("B", r, i(ver), 2)]); r += 1
        r += 1
        rows.append([("A", r, i(info), 2)]); r += 1
        r += 1
        rows.append([("A", r, i(hdr[0]), 1), ("B", r, i(hdr[1]), 1), ("C", r, i(hdr[2]), 1), ("D", r, i(hdr[3]), 1), ("E", r, i(hdr[4]), 1), ("F", r, i(hdr[5]), 1), ("G", r, i(hdr[6]), 1)]); r += 1
        for _ in range(20):
            rows.append([("A", r, "", 2), ("B", r, "", 2), ("C", r, "", 2), ("D", r, "", 2), ("E", r, "", 2), ("F", r, "", 2), ("G", r, "", 2)]); r += 1
        rows.append([("A", r, i(note), 0)])
        return s, rows

    def build_filled():
        s = [title, ver, info, hdr[0], hdr[1], hdr[2], hdr[3], hdr[4], hdr[5], hdr[6], note]
        for a, b, c, d, e, f, g in data_filled:
            s += [a, b, c, d, e, f, g]
        def i(x): return s.index(x)
        r = 1
        rows = []
        rows.append([("A", r, i(title), 4), ("B", r, i(ver), 2)]); r += 1
        r += 1
        rows.append([("A", r, i(info), 2)]); r += 1
        r += 1
        rows.append([("A", r, i(hdr[0]), 1), ("B", r, i(hdr[1]), 1), ("C", r, i(hdr[2]), 1), ("D", r, i(hdr[3]), 1), ("E", r, i(hdr[4]), 1), ("F", r, i(hdr[5]), 1), ("G", r, i(hdr[6]), 1)]); r += 1
        for a, b, c, d, e, f, g in data_filled:
            rows.append([("A", r, i(a), 6), ("B", r, i(b), 6), ("C", r, i(c), 6), ("D", r, i(d), 6), ("E", r, i(e), 6), ("F", r, i(f), 6), ("G", r, i(g), 6)]); r += 1
        for _ in range(17):
            rows.append([("A", r, "", 2), ("B", r, "", 2), ("C", r, "", 2), ("D", r, "", 2), ("E", r, "", 2), ("F", r, "", 2), ("G", r, "", 2)]); r += 1
        rows.append([("A", r, i(note), 0)])
        return s, rows

    return build_empty, build_filled


# ============================================================
# F7: 业务场景财务风险识别卡
# ============================================================
def make_f7():
    title = "业务场景财务风险识别卡"
    ver   = "编号：F7　　版本：V1.0"
    hdr   = ["业务场景", "风险点", "影响程度（高/中/低）", "财务后果", "应对策略"]
    data_filled = [
        ("客户集中度高", "单一客户收入占比>30%", "高", "收入大幅波动，可能影响现金流", "开拓新客户，降低单一客户依赖"),
        ("长账期合同", "应收账款账期超过6个月", "高", "现金流压力，坏账风险", "收紧信用政策，要求预付款或分期"),
        ("价格战", "竞争对手大幅降价", "中", "毛利率下降，收入质量降低", "差异化竞争，强调服务价值而非价格"),
        ("政策变化", "行业监管政策重大调整", "高", "合规成本增加，部分收入可能无法确认", "建立政策跟踪机制，提前布局应对"),
    ]
    note = "使用说明：识别业务场景中的财务风险，评估影响程度，制定应对策略。应对策略要具体可操作。"

    def build_empty():
        s = [title, ver, hdr[0], hdr[1], hdr[2], hdr[3], hdr[4], note]
        def i(x): return s.index(x)
        r = 1
        rows = []
        rows.append([("A", r, i(title), 4), ("B", r, i(ver), 2)]); r += 1
        r += 1
        rows.append([("A", r, i(hdr[0]), 1), ("B", r, i(hdr[1]), 1), ("C", r, i(hdr[2]), 1), ("D", r, i(hdr[3]), 1), ("E", r, i(hdr[4]), 1)]); r += 1
        for _ in range(20):
            rows.append([("A", r, "", 2), ("B", r, "", 2), ("C", r, "", 2), ("D", r, "", 2), ("E", r, "", 2)]); r += 1
        rows.append([("A", r, i(note), 0)])
        return s, rows

    def build_filled():
        s = [title, ver, hdr[0], hdr[1], hdr[2], hdr[3], hdr[4], note]
        for a, b, c, d, e in data_filled:
            s += [a, b, c, d, e]
        def i(x): return s.index(x)
        r = 1
        rows = []
        rows.append([("A", r, i(title), 4), ("B", r, i(ver), 2)]); r += 1
        r += 1
        rows.append([("A", r, i(hdr[0]), 1), ("B", r, i(hdr[1]), 1), ("C", r, i(hdr[2]), 1), ("D", r, i(hdr[3]), 1), ("E", r, i(hdr[4]), 1)]); r += 1
        for a, b, c, d, e in data_filled:
            rows.append([("A", r, i(a), 6), ("B", r, i(b), 6), ("C", r, i(c), 6), ("D", r, i(d), 6), ("E", r, i(e), 6)]); r += 1
        for _ in range(16):
            rows.append([("A", r, "", 2), ("B", r, "", 2), ("C", r, "", 2), ("D", r, "", 2), ("E", r, "", 2)]); r += 1
        rows.append([("A", r, i(note), 0)])
        return s, rows

    return build_empty, build_filled


# ============================================================
# F8: 跨部门协同问题诊断表
# ============================================================
def make_f8():
    title = "跨部门协同问题诊断表"
    ver   = "编号：F8　　版本：V1.0"
    hdr   = ["问题描述", "根因分析", "涉及部门", "责任部门", "解决方案", "解决期限", "状态"]
    data_filled = [
        ("销售接单后生产无法如期交付", "销售与生产信息不对称，缺乏协同机制", "销售部、生产部", "生产部", "建立每日生产协调会，销售提前48小时确认订单", "2024-03-31", "进行中"),
        ("财务报销流程太慢，影响业务效率", "审批环节多，缺乏分类处理机制", "财务部、行政部", "财务部", "优化报销分类，常规费用24小时审批，特殊费用48小时", "2024-02-28", "已完成"),
        ("市场活动效果无法量化", "市场与销售数据未打通，缺乏归因分析", "市场部、销售部", "市场部", "建立活动效果追踪模板，每次活动设定可量化目标", "2024-04-30", "待启动"),
    ]
    note = "使用说明：诊断跨部门协同问题，找到根因，明确责任部门和解决期限。"

    def build_empty():
        s = [title, ver, hdr[0], hdr[1], hdr[2], hdr[3], hdr[4], hdr[5], hdr[6], note]
        def i(x): return s.index(x)
        r = 1
        rows = []
        rows.append([("A", r, i(title), 4), ("B", r, i(ver), 2)]); r += 1
        r += 1
        rows.append([("A", r, i(hdr[0]), 1), ("B", r, i(hdr[1]), 1), ("C", r, i(hdr[2]), 1), ("D", r, i(hdr[3]), 1), ("E", r, i(hdr[4]), 1), ("F", r, i(hdr[5]), 1), ("G", r, i(hdr[6]), 1)]); r += 1
        for _ in range(20):
            rows.append([("A", r, "", 2), ("B", r, "", 2), ("C", r, "", 2), ("D", r, "", 2), ("E", r, "", 2), ("F", r, "", 2), ("G", r, "", 2)]); r += 1
        rows.append([("A", r, i(note), 0)])
        return s, rows

    def build_filled():
        s = [title, ver, hdr[0], hdr[1], hdr[2], hdr[3], hdr[4], hdr[5], hdr[6], note]
        for a, b, c, d, e, f, g in data_filled:
            s += [a, b, c, d, e, f, g]
        def i(x): return s.index(x)
        r = 1
        rows = []
        rows.append([("A", r, i(title), 4), ("B", r, i(ver), 2)]); r += 1
        r += 1
        rows.append([("A", r, i(hdr[0]), 1), ("B", r, i(hdr[1]), 1), ("C", r, i(hdr[2]), 1), ("D", r, i(hdr[3]), 1), ("E", r, i(hdr[4]), 1), ("F", r, i(hdr[5]), 1), ("G", r, i(hdr[6]), 1)]); r += 1
        for a, b, c, d, e, f, g in data_filled:
            rows.append([("A", r, i(a), 6), ("B", r, i(b), 6), ("C", r, i(c), 6), ("D", r, i(d), 6), ("E", r, i(e), 6), ("F", r, i(f), 6), ("G", r, i(g), 6)]); r += 1
        for _ in range(17):
            rows.append([("A", r, "", 2), ("B", r, "", 2), ("C", r, "", 2), ("D", r, "", 2), ("E", r, "", 2), ("F", r, "", 2), ("G", r, "", 2)]); r += 1
        rows.append([("A", r, i(note), 0)])
        return s, rows

    return build_empty, build_filled


# ============================================================
# F9: 月度经营分析会财务汇报模板
# ============================================================
def make_f9():
    title = "月度经营分析会财务汇报模板"
    ver   = "编号：F9　　版本：V1.0"
    sec1  = "一、核心指标概览"
    hdr1  = ["指标", "本月实际", "本年累计", "同比", "环比", "说明"]
    data_kpi = [
        ("营业收入", "1,850万", "1.05亿", "+12%", "+5%", "Q2旺季效果显现"),
        ("毛利率", "32%", "31%", "-2pp", "+1pp", "原材料成本上涨"),
        ("净利润", "185万", "980万", "+8%", "+3%", "费用控制得当"),
    ]
    sec2  = "二、异常情况说明"
    hdr2  = ["异常项", "情况描述", "原因分析", "应对措施"]
    data_exc = [
        ("华南区域下滑", "华南收入同比下降15%", "重点客户流失，竞品抢占市场", "启动客户挽回计划，加强渠道建设"),
    ]
    sec3  = "三、下月预测"
    hdr3  = ["指标", "预测值", "预测依据"]
    data_pred = [
        ("营业收入", "1,900万", "在途订单充足，旺季延续"),
        ("毛利率", "31%", "原材料价格维持高位"),
    ]
    sec4  = "四、下月重点关注事项"
    hdr4  = ["关注事项", "负责部门", "需要支持"]
    data_att = [
        ("客户结构优化", "销售部", "财务部协助分析客户贡献度"),
    ]
    note  = "使用说明：每月经营分析会前填写，数据截止日为每月25日。"

    def build_empty():
        s = [title, ver, sec1, hdr1[0], hdr1[1], hdr1[2], hdr1[3], hdr1[4], hdr1[5],
             sec2, hdr2[0], hdr2[1], hdr2[2], hdr2[3],
             sec3, hdr3[0], hdr3[1], hdr3[2],
             sec4, hdr4[0], hdr4[1], hdr4[2], note]
        def i(x): return s.index(x)
        r = 1
        rows = []
        rows.append([("A", r, i(title), 4), ("B", r, i(ver), 2)]); r += 1
        r += 1
        rows.append([("A", r, i(sec1), 1)]); r += 1
        rows.append([("A", r, i(hdr1[0]), 1), ("B", r, i(hdr1[1]), 1), ("C", r, i(hdr1[2]), 1), ("D", r, i(hdr1[3]), 1), ("E", r, i(hdr1[4]), 1), ("F", r, i(hdr1[5]), 1)]); r += 1
        for _ in range(5): rows.append([("A", r, "", 2), ("B", r, "", 2), ("C", r, "", 2), ("D", r, "", 2), ("E", r, "", 2), ("F", r, "", 2)]); r += 1
        rows.append([("A", r, i(sec2), 1)]); r += 1
        rows.append([("A", r, i(hdr2[0]), 1), ("B", r, i(hdr2[1]), 1), ("C", r, i(hdr2[2]), 1), ("D", r, i(hdr2[3]), 1)]); r += 1
        for _ in range(5): rows.append([("A", r, "", 2), ("B", r, "", 2), ("C", r, "", 2), ("D", r, "", 2)]); r += 1
        rows.append([("A", r, i(sec3), 1)]); r += 1
        rows.append([("A", r, i(hdr3[0]), 1), ("B", r, i(hdr3[1]), 1), ("C", r, i(hdr3[2]), 1)]); r += 1
        for _ in range(5): rows.append([("A", r, "", 2), ("B", r, "", 2), ("C", r, "", 2)]); r += 1
        rows.append([("A", r, i(sec4), 1)]); r += 1
        rows.append([("A", r, i(hdr4[0]), 1), ("B", r, i(hdr4[1]), 1), ("C", r, i(hdr4[2]), 1)]); r += 1
        for _ in range(5): rows.append([("A", r, "", 2), ("B", r, "", 2), ("C", r, "", 2)]); r += 1
        rows.append([("A", r, i(note), 0)])
        return s, rows

    def build_filled():
        s = [title, ver, sec1, hdr1[0], hdr1[1], hdr1[2], hdr1[3], hdr1[4], hdr1[5],
             sec2, hdr2[0], hdr2[1], hdr2[2], hdr2[3],
             sec3, hdr3[0], hdr3[1], hdr3[2],
             sec4, hdr4[0], hdr4[1], hdr4[2], note]
        for a,b,c,d,e,f in data_kpi: s += [a,b,c,d,e,f]
        for a,b,c,d in data_exc: s += [a,b,c,d]
        for a,b,c in data_pred: s += [a,b,c]
        for a,b,c in data_att: s += [a,b,c]
        def i(x): return s.index(x)
        r = 1
        rows = []
        rows.append([("A", r, i(title), 4), ("B", r, i(ver), 2)]); r += 1
        r += 1
        rows.append([("A", r, i(sec1), 1)]); r += 1
        rows.append([("A", r, i(hdr1[0]), 1), ("B", r, i(hdr1[1]), 1), ("C", r, i(hdr1[2]), 1), ("D", r, i(hdr1[3]), 1), ("E", r, i(hdr1[4]), 1), ("F", r, i(hdr1[5]), 1)]); r += 1
        for a,b,c,d,e,f in data_kpi:
            rows.append([("A", r, i(a), 6), ("B", r, i(b), 6), ("C", r, i(c), 6), ("D", r, i(d), 6), ("E", r, i(e), 6), ("F", r, i(f), 6)]); r += 1
        rows.append([("A", r, i(sec2), 1)]); r += 1
        rows.append([("A", r, i(hdr2[0]), 1), ("B", r, i(hdr2[1]), 1), ("C", r, i(hdr2[2]), 1), ("D", r, i(hdr2[3]), 1)]); r += 1
        for a,b,c,d in data_exc:
            rows.append([("A", r, i(a), 6), ("B", r, i(b), 6), ("C", r, i(c), 6), ("D", r, i(d), 6)]); r += 1
        rows.append([("A", r, i(sec3), 1)]); r += 1
        rows.append([("A", r, i(hdr3[0]), 1), ("B", r, i(hdr3[1]), 1), ("C", r, i(hdr3[2]), 1)]); r += 1
        for a,b,c in data_pred:
            rows.append([("A", r, i(a), 6), ("B", r, i(b), 6), ("C", r, i(c), 6)]); r += 1
        rows.append([("A", r, i(sec4), 1)]); r += 1
        rows.append([("A", r, i(hdr4[0]), 1), ("B", r, i(hdr4[1]), 1), ("C", r, i(hdr4[2]), 1)]); r += 1
        for a,b,c in data_att:
            rows.append([("A", r, i(a), 6), ("B", r, i(b), 6), ("C", r, i(c), 6)]); r += 1
        rows.append([("A", r, i(note), 0)])
        return s, rows

    return build_empty, build_filled


# ============================================================
# F10: 业财融合行动计划表
# ============================================================
def make_f10():
    title = "业财融合行动计划表"
    ver   = "编号：F10　　版本：V1.0"
    goal  = "总体目标：____________　　计划周期：____________"
    hdr   = ["目标领域", "具体目标", "关键措施", "责任人", "开始时间", "完成时间", "衡量标准", "当前状态"]
    data_filled = [
        ("认知融合", "业务部门能理解三大财务报表", "组织财务基础知识培训，制作业务版财务手册", "财务部经理", "2024-01-01", "2024-03-31", "业务部门负责人能说清三张报表关系", "进行中"),
        ("流程融合", "预算流程中业务参与度达到80%", "在预算编制启动会引入业务部门，设置业务预测模板", "财务部经理", "2024-01-01", "2024-06-30", "业务部门参与预算编制的覆盖率", "待启动"),
        ("工具融合", "业务人员能自主查看财务数据", "上线业务财务看板，设置权限和数据解读指引", "IT部经理", "2024-03-01", "2024-09-30", "业务人员月度活跃查看率>60%", "进行中"),
        ("考核融合", "业务KPI与财务指标联动", "重新设计销售部门KPI，加入利润贡献指标", "人力资源部", "2024-04-01", "2024-12-31", "利润指标占销售KPI权重30%", "待启动"),
    ]
    note = "使用说明：制定业财融合具体行动计划，明确目标、措施、责任人和时间节点，定期跟踪进度。"

    def build_empty():
        s = [title, ver, goal, hdr[0], hdr[1], hdr[2], hdr[3], hdr[4], hdr[5], hdr[6], hdr[7], note]
        def i(x): return s.index(x)
        r = 1
        rows = []
        rows.append([("A", r, i(title), 4), ("B", r, i(ver), 2)]); r += 1
        r += 1
        rows.append([("A", r, i(goal), 2)]); r += 1
        r += 1
        rows.append([("A", r, i(hdr[0]), 1), ("B", r, i(hdr[1]), 1), ("C", r, i(hdr[2]), 1), ("D", r, i(hdr[3]), 1), ("E", r, i(hdr[4]), 1), ("F", r, i(hdr[5]), 1), ("G", r, i(hdr[6]), 1), ("H", r, i(hdr[7]), 1)]); r += 1
        for _ in range(15):
            rows.append([("A", r, "", 2), ("B", r, "", 2), ("C", r, "", 2), ("D", r, "", 2), ("E", r, "", 2), ("F", r, "", 2), ("G", r, "", 2), ("H", r, "", 2)]); r += 1
        rows.append([("A", r, i(note), 0)])
        return s, rows

    def build_filled():
        s = [title, ver, goal, hdr[0], hdr[1], hdr[2], hdr[3], hdr[4], hdr[5], hdr[6], hdr[7], note]
        for a,b,c,d,e,f,g,h in data_filled:
            s += [a,b,c,d,e,f,g,h]
        def i(x): return s.index(x)
        r = 1
        rows = []
        rows.append([("A", r, i(title), 4), ("B", r, i(ver), 2)]); r += 1
        r += 1
        rows.append([("A", r, i(goal), 2)]); r += 1
        r += 1
        rows.append([("A", r, i(hdr[0]), 1), ("B", r, i(hdr[1]), 1), ("C", r, i(hdr[2]), 1), ("D", r, i(hdr[3]), 1), ("E", r, i(hdr[4]), 1), ("F", r, i(hdr[5]), 1), ("G", r, i(hdr[6]), 1), ("H", r, i(hdr[7]), 1)]); r += 1
        for a,b,c,d,e,f,g,h in data_filled:
            rows.append([("A", r, i(a), 6), ("B", r, i(b), 6), ("C", r, i(c), 6), ("D", r, i(d), 6), ("E", r, i(e), 6), ("F", r, i(f), 6), ("G", r, i(g), 6), ("H", r, i(h), 6)]); r += 1
        for _ in range(11):
            rows.append([("A", r, "", 2), ("B", r, "", 2), ("C", r, "", 2), ("D", r, "", 2), ("E", r, "", 2), ("F", r, "", 2), ("G", r, "", 2), ("H", r, "", 2)]); r += 1
        rows.append([("A", r, i(note), 0)])
        return s, rows

    return build_empty, build_filled


# ============================================================
# GUIDE sheets
# ============================================================
def make_guide_strings():
    s1_title = "表单使用指引"
    s1_subs = [
        "业财融合配套表单体系",
        "课程名称：业财融合：让财务进入业务，让业务看懂财务",
        "表单数量：共10张表单（F1-F10），覆盖业财融合四大维度",
        "表单体系说明",
        "认知融合维度",
        "F1：业财融合成熟度自测卡 — 评估当前业财融合水平",
        "F2：业务语言翻译成财务语言工作表 — 帮助业务理解财务术语",
        "F3：财务语言翻译成业务语言工作表 — 帮助财务理解业务语言",
        "流程融合维度",
        "F4：业财对话会议准备单 — 准备业财沟通会议",
        "F5：业务决策财务影响评估表 — 评估业务决策的财务影响",
        "F6：预算执行偏差分析表 — 分析预算执行情况",
        "工具融合维度",
        "F7：业务场景财务风险识别卡 — 识别业务中的财务风险",
        "F8：跨部门协同问题诊断表 — 诊断跨部门协同问题",
        "考核融合维度",
        "F9：月度经营分析会财务汇报模板 — 月度经营分析会财务汇报",
        "F10：业财融合行动计划表 — 制定业财融合改进计划",
        "使用方法",
        "1. 空表版本（配套表单_空表.xlsx）：用于实际工作填写，可反复使用",
        "2. 填好版本（配套表单_填好版.xlsx）：提供示例参考，了解如何填写",
        "3. 使用本指引（表单使用指引.xlsx）：了解每张表单的使用方法和要点",
        "使用原则",
        "先评估（F1）-> 再翻译（F2/F3）-> 备会议（F4）-> 做决策（F5）-> 控预算（F6）-> 识风险（F7）-> 促协同（F8）-> 开好会（F9）-> 订计划（F10）",
    ]
    s2_title = "表单清单"
    s2_hdr = ["编号", "表单名称", "对应模块", "核心用途", "使用频率"]
    form_list = [
        ("F1", "业财融合成熟度自测卡", "认知融合", "评估当前业财融合水平，找出短板", "季度一次"),
        ("F2", "业务语言翻财务语言工作表", "认知融合", "帮助业务人员理解财务术语", "按需使用"),
        ("F3", "财务语言翻业务语言工作表", "认知融合", "帮助财务人员理解业务语言", "按需使用"),
        ("F4", "业财对话会议准备单", "流程融合", "准备业财沟通会议，确保沟通效果", "每次会议前"),
        ("F5", "业务决策财务影响评估表", "流程融合", "评估重大业务决策的财务影响", "按需使用"),
        ("F6", "预算执行偏差分析表", "流程融合", "分析预算执行偏差，制定改善措施", "每月一次"),
        ("F7", "业务场景财务风险识别卡", "工具融合", "识别业务场景中的财务风险", "季度一次"),
        ("F8", "跨部门协同问题诊断表", "工具融合", "诊断和解决跨部门协同问题", "按需使用"),
        ("F9", "月度经营分析会财务汇报模板", "考核融合", "月度经营分析会的财务汇报结构", "每月一次"),
        ("F10", "业财融合行动计划表", "考核融合", "制定业财融合改进计划并跟踪进度", "季度一次"),
    ]
    guide_data = {
        "F1": [
            "F1-业财融合成熟度自测卡 使用说明",
            "一、表单用途",
            "评估企业或部门在业财融合四个维度（认知/流程/工具/考核）上的成熟度水平，找出短板，明确改进方向。",
            "二、填写时机",
            "1. 课程开始前：了解当前业财融合水平",
            "2. 课程结束后：对比改进效果",
            "3. 每季度末：跟踪改进进度",
            "三、填写要点",
            "1. 每个评估要点按1-5分自评：1=完全不符合，5=完全符合",
            "2. 总分除以题目数得出平均分，60%以上为合格",
            "3. 各维度得分低于3分的需要重点改进",
            "4. 具体说明要写实际案例，不要泛泛而谈",
            "四、常见问题与应对",
            "Q：业务部门不配合自评怎么办？",
            "A：先从财务部门开始，以身作则；再逐步推广到业务部门。",
            "Q：不同部门评分差异大如何处理？",
            "A：取加权平均，重点关注差距较大的维度，组织专题讨论。",
            "五、案例参考",
            "某零售企业使用该表单自评后发现：认知融合3.2分（合格），流程融合2.1分（较差），工具融合2.8分（较差），考核融合2.5分（较差）。据此制定了为期一年的改进计划，重点提升流程融合和考核融合。",
        ],
        "F2": [
            "F2-业务语言翻财务语言工作表 使用说明",
            "一、表单用途",
            "将业务场景中常用的术语翻译成财务语言，帮助业务人员理解财务概念，促进业财沟通。",
            "二、填写时机",
            "1. 业务部门向财务部门汇报工作前",
            "2. 财务部门向业务部门解释财务数据时",
            "3. 新员工入职培训时使用",
            "三、填写要点",
            "1. 左列填写业务术语，尽量用业务人员熟悉的表达",
            "2. 中列写出对应的财务概念，要准确",
            "3. 右列说明如何理解，可以举具体例子",
            "4. 建议先填写最常用的10-20个术语，后续逐步扩充",
            "四、常见问题与应对",
            "Q：业务术语太专业怎么办？",
            "A：先列出日常沟通中最常用的，咨询财务人员对应关系。",
            "Q：同一个术语有多个财务对应怎么办？",
            "A：可以填写多个财务概念，分别说明适用场景。",
        ],
        "F3": [
            "F3-财务语言翻业务语言工作表 使用说明",
            "一、表单用途",
            "将财务术语翻译成业务语言，帮助财务人员理解业务含义，提升财务沟通效果。",
            "二、填写时机",
            "1. 财务人员向业务部门汇报时",
            "2. 业务部门询问财务数据含义时",
            "3. 编制业务版财务报告时",
            "三、填写要点",
            "1. 左列填写财务术语/报表项目",
            "2. 中列写出财务上的准确含义",
            "3. 第三列转化为业务语言，用业务能理解的比喻或场景",
            "4. 右列给出业务决策建议，说明这个指标如何指导业务行动",
            "四、常见问题与应对",
            "Q：财务术语太抽象难以翻译怎么办？",
            "A：结合具体业务场景来解释，比如用产品代替存货概念。",
            "Q：如何让业务人员记住财务术语？",
            "A：使用一致的术语表，配合实际案例反复强化。",
        ],
        "F4": [
            "F4-业财对话会议准备单 使用说明",
            "一、表单用途",
            "在业财沟通会议前做好准备，预判财务关心的问题，准备应对材料，确保会议效果。",
            "二、填写时机",
            "每次业财沟通会议前1-2天填写",
            "三、填写要点",
            "1. 明确会议类型：定期沟通会/专题讨论会/决策评审会",
            "2. 列出主要议题，预判财务可能关心的问题",
            "3. 针对每个问题准备数据、案例和解释",
            "4. 准备业务需求和底线，明确哪些可以妥协",
            "四、常见问题与应对",
            "Q：财务问题太专业无法回答怎么办？",
            "A：会前与财务人员提前沟通，了解他们关注的核心问题。",
            "Q：会议时间不够怎么办？",
            "A：优先讨论最重要的话题，约定下次会议时间。",
        ],
        "F5": [
            "F5-业务决策财务影响评估表 使用说明",
            "一、表单用途",
            "在做出重大业务决策前，系统评估其财务影响，识别风险，提出建议，确保决策质量。",
            "二、填写时机",
            "1. 重大投资决策前",
            "2. 新产品/新市场进入决策前",
            "3. 重大成本支出决策前",
            "三、填写要点",
            "1. 明确决策类型：战略决策/运营决策/投资决策",
            "2. 量化财务影响：用数字说话，不要模糊表达",
            "3. 识别风险要具体：不要只写有风险，要写清楚什么风险",
            "4. 建议要有可操作性：给出具体建议，而非泛泛的意见",
            "四、常见问题与应对",
            "Q：无法量化财务影响怎么办？",
            "A：给出估算范围，说明假设条件，比无法量化好得多。",
            "Q：业务和财务对风险评估不一致怎么办？",
            "A：召开联合评审会，用数据说话，求同存异。",
        ],
        "F6": [
            "F6-预算执行偏差分析表 使用说明",
            "一、表单用途",
            "每月/季度分析预算执行情况，找出偏差原因，制定改善措施，提高预算管理水平。",
            "二、填写时机",
            "每月结束后5个工作日内完成",
            "三、填写要点",
            "1. 偏差率超过10%的项目需要重点分析",
            "2. 原因分析要深入：找根本原因，不要停留在表面",
            "3. 改善措施要具体可执行：有明确的责任人和时间节点",
            "4. 追踪上月改善措施的执行情况",
            "四、常见问题与应对",
            "Q：预算编制本身不合理怎么办？",
            "A：分析偏差时区分执行问题和预算问题，后者需要调整预算编制方法。",
            "Q：多个项目同时超支怎么办？",
            "A：按超支幅度排序，优先分析最重要的项目，其他项目简化处理。",
        ],
        "F7": [
            "F7-业务场景财务风险识别卡 使用说明",
            "一、表单用途",
            "识别业务场景中的财务风险，评估影响程度，制定应对策略，做到事前预防。",
            "二、填写时机",
            "1. 每季度一次全面识别",
            "2. 重大业务变化时（如新产品上市、市场变化）及时更新",
            "三、填写要点",
            "1. 全面扫描业务场景，不要遗漏",
            "2. 影响程度评估要客观：高/中/低要有一致标准",
            "3. 应对策略要具体：不是加强监控，而是每周检查应收账款账龄",
            "4. 定期回顾风险变化，动态更新",
            "四、常见问题与应对",
            "Q：风险太多如何处理？",
            "A：按影响程度排序，优先关注高风险，列出前5项重点应对。",
            "Q：风险识别不全面怎么办？",
            "A：组织跨部门讨论，从财务、业务、合规等多角度识别。",
        ],
        "F8": [
            "F8-跨部门协同问题诊断表 使用说明",
            "一、表单用途",
            "诊断跨部门协同问题，找到根本原因，明确责任部门和解决期限，推动问题解决。",
            "二、填写时机",
            "1. 跨部门问题发生时及时记录",
            "2. 定期（如每月）回顾未解决问题",
            "三、填写要点",
            "1. 问题描述要具体：不要写沟通不畅，要写清楚什么事、什么人、什么情况",
            "2. 根因分析要深入：使用5Why等方法找到根本原因",
            "3. 明确责任部门：只有一个主要责任部门，避免推诿",
            "4. 解决期限要实际：考虑复杂度和资源情况",
            "四、常见问题与应对",
            "Q：责任部门不认领怎么办？",
            "A：升级到共同上级裁决，同时反思问题描述是否清晰。",
            "Q：问题反复发生怎么办？",
            "A：建立长效机制，从流程和制度层面解决，而非只靠个人沟通。",
        ],
        "F9": [
            "F9-月度经营分析会财务汇报模板 使用说明",
            "一、表单用途",
            "规范月度经营分析会的财务汇报结构，确保汇报内容完整、重点突出、便于决策。",
            "二、填写时机",
            "每月经营分析会前1天完成",
            "三、填写要点",
            "1. 核心指标概览：选择最关键的3-5个指标，不要罗列所有数据",
            "2. 异常情况说明：重点说明异常项，正常项不需要详细解释",
            "3. 下月预测：给出明确预测值和依据，不要模糊表达",
            "4. 关注事项：提出需要其他部门支持的事项，明确需求",
            "四、常见问题与应对",
            "Q：数据截止日和会议时间不匹配怎么办？",
            "A：使用最新可用数据，并在汇报中说明数据截止日。",
            "Q：业务部门对财务数据有异议怎么办？",
            "A：会前核对数据，达成一致后再上会；会上只讨论分析结论。",
        ],
        "F10": [
            "F10-业财融合行动计划表 使用说明",
            "一、表单用途",
            "制定业财融合改进计划，明确目标、措施、责任人和时间节点，跟踪执行进度。",
            "二、填写时机",
            "1. 每年初制定年度计划",
            "2. 每季度回顾和更新",
            "3. F1自评后根据评估结果调整",
            "三、填写要点",
            "1. 目标要具体可衡量：不是提升业财融合，而是业务人员财务测试通过率大于80%",
            "2. 措施要可操作：每项措施有明确的动作和产出",
            "3. 责任人只能是一个人：避免共同负责等于没人负责",
            "4. 衡量标准要客观：可以量化评估，避免主观判断",
            "四、常见问题与应对",
            "Q：措施太多资源不够怎么办？",
            "A：按重要性和紧迫性排序，优先做最重要的3-5项。",
            "Q：执行进度落后怎么办？",
            "A：分析原因（资源问题/优先级问题/执行问题），针对性解决。",
        ],
    }
    return s1_title, s1_subs, s2_title, s2_hdr, form_list, guide_data


# ============================================================
# Build empty workbook
# ============================================================
def build_empty_book():
    OUT = "D:/新课开发/财务管理/9-业财融合：让财务进入业务，让业务看懂财务/配套表单和指引/配套表单_空表.xlsx"

    form_configs = [
        ("F1-业财融合成熟度自测卡", make_f1, [(1,1,35),(2,2,30),(3,3,18),(4,4,35)]),
        ("F2-业务语言翻财务语言",   make_f2, [(1,1,25),(2,2,30),(3,3,40)]),
        ("F3-财务语言翻业务语言",   make_f3, [(1,1,25),(2,2,25),(3,3,30),(4,4,30)]),
        ("F4-业财对话会议准备单",   make_f4, [(1,1,25),(2,2,35),(3,3,40)]),
        ("F5-业务决策财务影响评估", make_f5, [(1,1,22),(2,2,30),(3,3,25),(4,4,35)]),
        ("F6-预算执行偏差分析表",   make_f6, [(1,1,22),(2,2,15),(3,3,15),(4,4,12),(5,5,12),(6,6,25),(7,7,30)]),
        ("F7-业务场景财务风险识别", make_f7, [(1,1,22),(2,2,28),(3,3,15),(4,4,25),(5,5,35)]),
        ("F8-跨部门协同问题诊断表", make_f8, [(1,1,25),(2,2,30),(3,3,15),(4,4,12),(5,5,30),(6,6,15),(7,7,12)]),
        ("F9-月度经营分析会财务汇报", make_f9, [(1,1,20),(2,2,18),(3,3,15),(4,4,12),(5,5,12),(6,6,30)]),
        ("F10-业财融合行动计划表",  make_f10,[(1,1,18),(2,2,25),(3,3,30),(4,4,15),(5,5,15),(6,6,15),(7,7,28),(8,8,12)]),
    ]

    all_sheets = []
    for sheet_name, maker_fn, col_widths in form_configs:
        build_empty_fn, _ = maker_fn()
        strings, rows = build_empty_fn()
        all_sheets.append((sheet_name, strings, rows, col_widths))

    seen = set()
    combined = []
    for _, strings, _, _ in all_sheets:
        for s in strings:
            if s not in seen:
                seen.add(s)
                combined.append(s)
    str_map = {s: i for i, s in enumerate(combined)}

    work_dir = "/tmp/xlsx_empty"
    copy_template(work_dir)
    create_styles_xml(work_dir)
    create_shared_strings_xml(work_dir, combined)

    for i, (sheet_name, strings, rows, col_widths) in enumerate(all_sheets, 1):
        mapped_rows = []
        for row_data in rows:
            mapped_row = []
            for cell in row_data:
                col, row, val, style = cell[:4]
                if isinstance(val, str) and val in str_map:
                    mapped_row.append((col, row, str_map[val], style))
                elif val == "":
                    mapped_row.append((col, row, "", style))
                else:
                    mapped_row.append((col, row, val, style))
            mapped_rows.append(mapped_row)

        sheet_path = os.path.join(work_dir, "xl", "worksheets", "sheet" + str(i) + ".xml")
        content = make_sheet_xml(mapped_rows, freeze=(i==1), col_widths=col_widths)
        with open(sheet_path, 'w', encoding='utf-8') as f:
            f.write(content)

    sheets_info = [(name, i+1, i+4) for i, (name, _, _, _) in enumerate(all_sheets)]
    update_workbook_xml(work_dir, sheets_info)
    update_workbook_rels(work_dir, sheets_info)
    update_content_types(work_dir, len(all_sheets))

    pack_xlsx(work_dir, OUT)
    print("Created: " + OUT)


# ============================================================
# Build filled workbook
# ============================================================
def build_filled_book():
    OUT = "D:/新课开发/财务管理/9-业财融合：让财务进入业务，让业务看懂财务/配套表单和指引/配套表单_填好版.xlsx"

    form_configs = [
        ("F1-业财融合成熟度自测卡", make_f1, [(1,1,35),(2,2,30),(3,3,18),(4,4,35)]),
        ("F2-业务语言翻财务语言",   make_f2, [(1,1,25),(2,2,30),(3,3,40)]),
        ("F3-财务语言翻业务语言",   make_f3, [(1,1,25),(2,2,25),(3,3,30),(4,4,30)]),
        ("F4-业财对话会议准备单",   make_f4, [(1,1,25),(2,2,35),(3,3,40)]),
        ("F5-业务决策财务影响评估", make_f5, [(1,1,22),(2,2,30),(3,3,25),(4,4,35)]),
        ("F6-预算执行偏差分析表",   make_f6, [(1,1,22),(2,2,15),(3,3,15),(4,4,12),(5,5,12),(6,6,25),(7,7,30)]),
        ("F7-业务场景财务风险识别", make_f7, [(1,1,22),(2,2,28),(3,3,15),(4,4,25),(5,5,35)]),
        ("F8-跨部门协同问题诊断表", make_f8, [(1,1,25),(2,2,30),(3,3,15),(4,4,12),(5,5,30),(6,6,15),(7,7,12)]),
        ("F9-月度经营分析会财务汇报", make_f9, [(1,1,20),(2,2,18),(3,3,15),(4,4,12),(5,5,12),(6,6,30)]),
        ("F10-业财融合行动计划表",  make_f10,[(1,1,18),(2,2,25),(3,3,30),(4,4,15),(5,5,15),(6,6,15),(7,7,28),(8,8,12)]),
    ]

    all_sheets = []
    for sheet_name, maker_fn, col_widths in form_configs:
        _, build_filled_fn = maker_fn()
        strings, rows = build_filled_fn()
        all_sheets.append((sheet_name, strings, rows, col_widths))

    seen = set()
    combined = []
    for _, strings, _, _ in all_sheets:
        for s in strings:
            if s not in seen:
                seen.add(s)
                combined.append(s)
    str_map = {s: i for i, s in enumerate(combined)}

    work_dir = "/tmp/xlsx_filled"
    copy_template(work_dir)
    create_styles_xml(work_dir)
    create_shared_strings_xml(work_dir, combined)

    for i, (sheet_name, strings, rows, col_widths) in enumerate(all_sheets, 1):
        mapped_rows = []
        for row_data in rows:
            mapped_row = []
            for cell in row_data:
                col, row, val, style = cell[:4]
                if isinstance(val, str) and val in str_map:
                    mapped_row.append((col, row, str_map[val], style))
                elif val == "":
                    mapped_row.append((col, row, "", style))
                else:
                    mapped_row.append((col, row, val, style))
            mapped_rows.append(mapped_row)

        sheet_path = os.path.join(work_dir, "xl", "worksheets", "sheet" + str(i) + ".xml")
        content = make_sheet_xml(mapped_rows, freeze=(i==1), col_widths=col_widths)
        with open(sheet_path, 'w', encoding='utf-8') as f:
            f.write(content)

    sheets_info = [(name, i+1, i+4) for i, (name, _, _, _) in enumerate(all_sheets)]
    update_workbook_xml(work_dir, sheets_info)
    update_workbook_rels(work_dir, sheets_info)
    update_content_types(work_dir, len(all_sheets))

    pack_xlsx(work_dir, OUT)
    print("Created: " + OUT)


# ============================================================
# Build guide workbook
# ============================================================
def build_guide_book():
    OUT = "D:/新课开发/财务管理/9-业财融合：让财务进入业务，让业务看懂财务/配套表单和指引/表单使用指引.xlsx"

    s1_title, s1_subs, s2_title, s2_hdr, form_list, guide_data = make_guide_strings()

    all_strings = [s1_title] + s1_subs + [s2_title] + s2_hdr
    for a,b,c,d,e in form_list:
        all_strings += [a,b,c,d,e]
    for key in ["F1","F2","F3","F4","F5","F6","F7","F8","F9","F10"]:
        all_strings += guide_data[key]

    seen = set()
    combined = []
    for s in all_strings:
        if s not in seen:
            seen.add(s)
            combined.append(s)
    str_map = {s: i for i, s in enumerate(combined)}

    work_dir = "/tmp/xlsx_guide"
    copy_template(work_dir)
    create_styles_xml(work_dir)
    create_shared_strings_xml(work_dir, combined)

    # Sheet 1: 总体说明
    s1_rows = []
    r = 1
    s1_rows.append([("A", r, str_map[s1_title], 4)]); r += 1
    r += 1
    for sub in s1_subs[:3]:
        s1_rows.append([("A", r, str_map[sub], 4)]); r += 1
    r += 1
    s1_rows.append([("A", r, str_map[s1_subs[3]], 1)]); r += 1
    s1_rows.append([("A", r, str_map[s1_subs[4]], 1)]); r += 1
    for sub in s1_subs[5:8]:
        s1_rows.append([("A", r, str_map[sub], 2)]); r += 1
    r += 1
    s1_rows.append([("A", r, str_map[s1_subs[8]], 1)]); r += 1
    for sub in s1_subs[9:12]:
        s1_rows.append([("A", r, str_map[sub], 2)]); r += 1
    r += 1
    s1_rows.append([("A", r, str_map[s1_subs[12]], 1)]); r += 1
    for sub in s1_subs[13:15]:
        s1_rows.append([("A", r, str_map[sub], 2)]); r += 1
    r += 1
    s1_rows.append([("A", r, str_map[s1_subs[15]], 1)]); r += 1
    for sub in s1_subs[16:18]:
        s1_rows.append([("A", r, str_map[sub], 2)]); r += 1
    r += 1
    s1_rows.append([("A", r, str_map[s1_subs[18]], 1)]); r += 1
    for sub in s1_subs[19:22]:
        s1_rows.append([("A", r, str_map[sub], 2)]); r += 1
    r += 1
    s1_rows.append([("A", r, str_map[s1_subs[22]], 1)]); r += 1
    s1_rows.append([("A", r, str_map[s1_subs[23]], 2)])

    # Sheet 2: 表单清单
    s2_rows = []
    r = 1
    s2_rows.append([("A", r, str_map[s2_title], 4)]); r += 1
    r += 1
    s2_rows.append([("A", r, str_map[s2_hdr[0]], 1), ("B", r, str_map[s2_hdr[1]], 1), ("C", r, str_map[s2_hdr[2]], 1), ("D", r, str_map[s2_hdr[3]], 1), ("E", r, str_map[s2_hdr[4]], 1)]); r += 1
    for a,b,c,d,e in form_list:
        s2_rows.append([("A", r, str_map[a], 2), ("B", r, str_map[b], 2), ("C", r, str_map[c], 2), ("D", r, str_map[d], 2), ("E", r, str_map[e], 2)]); r += 1

    # Guide sheets F1-F10
    guide_sheet_names = [
        "F1-业财融合成熟度自测卡 使用说明",
        "F2-业务语言翻财务语言 使用说明",
        "F3-财务语言翻业务语言 使用说明",
        "F4-业财对话会议准备单 使用说明",
        "F5-业务决策财务影响评估 使用说明",
        "F6-预算执行偏差分析表 使用说明",
        "F7-业务场景财务风险识别 使用说明",
        "F8-跨部门协同问题诊断表 使用说明",
        "F9-月度经营分析会财务汇报 使用说明",
        "F10-业财融合行动计划表 使用说明",
    ]

    all_sheet_rows = [("总体说明", s1_rows), ("表单清单", s2_rows)]
    for fname, fkey in zip(guide_sheet_names, ["F1","F2","F3","F4","F5","F6","F7","F8","F9","F10"]):
        lines = guide_data[fkey]
        rows = []
        for i, line in enumerate(lines):
            rnum = i + 1
            style = 4 if i == 0 else (1 if line.startswith("一、") or line.startswith("二、") or line.startswith("三、") or line.startswith("四、") or line.startswith("五、") else 2)
            rows.append([("A", rnum, str_map[line], style)])
        all_sheet_rows.append((fname, rows))

    for i, (sheet_name, rows) in enumerate(all_sheet_rows, 1):
        sheet_path = os.path.join(work_dir, "xl", "worksheets", "sheet" + str(i) + ".xml")
        content = make_sheet_xml(rows, freeze=(i==1), col_widths=[(1,1,35),(2,2,55)])
        with open(sheet_path, 'w', encoding='utf-8') as f:
            f.write(content)

    sheets_info = [(name, i+1, i+4) for i, (name, _) in enumerate(all_sheet_rows)]
    update_workbook_xml(work_dir, sheets_info)
    update_workbook_rels(work_dir, sheets_info)
    update_content_types(work_dir, len(all_sheet_rows))

    pack_xlsx(work_dir, OUT)
    print("Created: " + OUT)


if __name__ == "__main__":
    build_empty_book()
    build_filled_book()
    build_guide_book()
    print("\nAll 3 Excel files created successfully!")
