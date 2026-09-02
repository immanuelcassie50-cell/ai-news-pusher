#!/usr/bin/env python3
"""Generate Excel forms for 组织行为学基础 course."""

import os
import shutil
from xml.etree import ElementTree as ET

# ─── XML Namespace helpers ────────────────────────────────────────────────────
NS = "http://schemas.openxmlformats.org/spreadsheetml/2006/main"
REL_NS = "http://schemas.openxmlformats.org/officeDocument/2006/relationships"
PKG_NS = "http://schemas.openxmlformats.org/package/2006/content-types"
REL_PKG = "http://schemas.openxmlformats.org/package/2006/relationships"

def xml_escape(s):
    if s is None:
        return ""
    return (str(s)
            .replace("&", "&amp;")
            .replace("<", "&lt;")
            .replace(">", "&gt;")
            .replace('"', "&quot;"))

# ─── Template file paths ──────────────────────────────────────────────────────
SKILL_DIR = "C:/Users/Administrator/.claude/skills/Excel表格处理"
TEMPLATE_DIR = f"{SKILL_DIR}/templates/minimal_xlsx"
SCRIPTS_DIR = f"{SKILL_DIR}/scripts"
OUT_DIR = "D:/新课开发/管理学/26-组织行为学基础/配套表单和指引-Excel版"

# ─── Style index reference (from template styles.xml) ────────────────────────
# s=0  default, s=1 blue text, s=2 black text, s=3 green cross-sheet
# s=4  bold header, s=5 blue currency, s=6 black currency
# s=7  blue %, s=8 black %, s=9 blue integer, s=10 black integer
# s=11 blue year, s=12 blue+yellow fill, s=13 blue+border, s=14 black+border, s=15 blue+border+yellow

# ─── Build sharedStrings ──────────────────────────────────────────────────────
def build_shared_strings(strings_list):
    """Build sharedStrings.xml content from a list of strings."""
    unique = []
    count_map = {}
    for s in strings_list:
        if s not in unique:
            unique.append(s)
        count_map[s] = count_map.get(s, 0) + 1

    total_count = sum(count_map.values())
    items = "".join(f"<si><t>{xml_escape(s)}</t></si>" for s in unique)
    return (f'<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n'
            f'<sst xmlns="{NS}" count="{total_count}" uniqueCount="{len(unique)}">\n'
            f'{items}\n</sst>')

# ─── Build workbook.xml ───────────────────────────────────────────────────────
def build_workbook(sheet_names):
    """Build workbook.xml with given sheet names."""
    sheets_xml = ""
    for i, name in enumerate(sheet_names, 1):
        rid = f"rId{i}"
        sheets_xml += f'\n  <sheet name="{xml_escape(name)}" sheetId="{i}" r:id="{rid}"/>'
    return (f'<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n'
            f'<workbook xmlns="{NS}" xmlns:r="{REL_NS}">\n'
            f'  <fileVersion appName="xl" lastEdited="7" lowestEdited="7"/>\n'
            f'  <workbookPr defaultThemeVersion="166925"/>\n'
            f'  <bookViews><workbookView xWindow="0" yWindow="0" windowWidth="20140" windowHeight="10960"/></bookViews>\n'
            f'  <sheets>{sheets_xml}\n  </sheets>\n'
            f'  <calcPr calcId="191029"/>\n</workbook>')

# ─── Build workbook.xml.rels ─────────────────────────────────────────────────
def build_workbook_rels(num_sheets):
    rels = ('<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>\n'
            '<Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>\n'
            '<Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml"/>')
    for i in range(2, num_sheets + 1):
        rels += f'\n<Relationship Id="rId{i+3}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet{i}.xml"/>'
    return (f'<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n'
            f'<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">\n'
            f'  {rels}\n</Relationships>')

# ─── Build [Content_Types].xml ────────────────────────────────────────────────
def build_content_types(num_sheets):
    parts = ('<Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>\n'
             '<Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>\n'
             '<Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>\n'
             '<Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/>')
    for i in range(2, num_sheets + 1):
        parts += f'\n<Override PartName="/xl/worksheets/sheet{i}.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>'
    return (f'<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n'
            f'<Types xmlns="{PKG_NS}">\n'
            f'  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>\n'
            f'  <Default Extension="xml" ContentType="application/xml"/>\n'
            f'  {parts}\n</Types>')

# ─── Build styles.xml ─────────────────────────────────────────────────────────
def build_styles():
    return open(f"{TEMPLATE_DIR}/xl/styles.xml", "r", encoding="utf-8").read()

# ─── Build worksheet ─────────────────────────────────────────────────────────
def build_worksheet(cols_xml, rows_xml, freeze=""):
    return (f'<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n'
            f'<worksheet xmlns="{NS}" xmlns:r="{REL_NS}">\n'
            f'  <sheetViews>\n'
            f'    <sheetView tabSelected="1" workbookViewId="0"{freeze}/>\n'
            f'  </sheetViews>\n'
            f'  <sheetFormatPr defaultRowHeight="15" x14ac:dyDesent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>\n'
            f'  {cols_xml}\n'
            f'  <sheetData>\n'
            f'  {rows_xml}\n'
            f'  </sheetData>\n'
            f'  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>\n'
            f'</worksheet>')

# ─── Cell helpers ────────────────────────────────────────────────────────────
def cell_str(addr, si_index, style="s='4'"):
    return f'<c r="{addr}" t="s" {style}><v>{si_index}</v></c>'

def cell_num(addr, value, style="s='6'"):
    return f'<c r="{addr}" {style}><v>{value}</v></c>'

def cell_formula(addr, formula, style="s='6'"):
    return f'<c r="{addr}" {style}><f>{formula}</f><v></v></c>'

def cell_inline(addr, text, style="s='0'"):
    return f'<c r="{addr}" {style} t="inlineStr"><is><t>{xml_escape(text)}</t></is></c>'

def empty_row(r):
    return f'<row r="{r}"/>'

# ─── Row builder ─────────────────────────────────────────────────────────────
def row(r_num, cells_xml, ht=None, customHeight=None):
    h = f' ht="{ht}" customHeight="1"' if ht else ""
    return f'  <row r="{r_num}"{h}>\n    {cells_xml}\n  </row>'

def make_cell_list(*args):
    """args: (type, addr, value_or_si, style)"""
    result = []
    for arg in args:
        t, addr, val, s = arg
        if t == 's':
            result.append(f'<c r="{addr}" t="s" {s}><v>{val}</v></c>')
        elif t == 'n':
            result.append(f'<c r="{addr}" {s}><v>{val}</v></c>')
        elif t == 'f':
            result.append(f'<c r="{addr}" {s}><f>{val}</f><v></v></c>')
        elif t == 'inline':
            result.append(f'<c r="{addr}" {s} t="inlineStr"><is><t>{xml_escape(val)}</t></is></c>')
    return "\n    ".join(result)

# ─── Cols builder ───────────────────────────────────────────────────────────
def build_cols(col_widths):
    """col_widths: list of (min_col, max_col, width)"""
    cols = ""
    for min_c, max_c, w in col_widths:
        cols += f'<col min="{min_c}" max="{max_c}" width="{w}" customWidth="1"/>\n  '
    return cols

# ════════════════════════════════════════════════════════════════════════════
# FILE 1: 00_表单使用指引.xlsx
# ════════════════════════════════════════════════════════════════════════════
def create_file_00():
    out = "/tmp/xlsx_work_00"
    os.makedirs(out, exist_ok=True)
    shutil.copytree(TEMPLATE_DIR, out, dirs_exist_ok=True)

    # Shared strings for file 1
    s1_strings = [
        # 0-9: Sheet headers
        "组织行为学基础 - 表单使用指引", "课程简介", "表单清单与使用顺序",
        "常见问题解答", "序号", "表单名称", "用途", "使用时机", "完成时间", "备注",
        # 10-19
        "《组织行为学基础》培训课程配套表单包", "本表单包包含7个配套表单，用于培训全流程管理",
        "使用指引", "课程简介", "表单清单与使用顺序", "Q", "A",
        # 20-29
        "问", "答", "序号", "表单名称", "用途", "使用时机", "完成时间",
        # 30-39
        "培训前", "培训中", "培训后", "随时可用",
        # 40-49
        "01_学员信息表", "收集学员基本信息，用于了解学员背景", "培训前", "课程开始前",
        "02_前测成绩记录表", "测量学员培训前知识水平，建立基准", "培训前", "培训开始前",
        "03_后测成绩记录表", "测量培训后知识水平，评估培训效果", "培训后", "培训结束后",
        # 50-59
        "04_课堂行为观察记录表", "记录学员课堂行为表现", "培训中", "培训过程中",
        "05_培训效果综合分析表", "综合分析培训效果，生成报告", "培训后", "培训结束后",
        "06_30天行动计划跟踪表", "跟踪学员培训后行为改变", "培训后", "培训结束后30天",
        # 60-69
        "1. 如何使用这些表单？", "按表单序号顺序使用，培训前填写学员信息表和前测表",
        "2. 数据如何汇总？", "带有汇总表的表单会自动计算平均分和统计指标",
        "3. 表单可以修改吗？", "可以，但建议保留原始版本，修改前先复制",
        "4. 忘记填表怎么办？", "可以补填，但应在备注中说明补填原因和日期",
        # 70-79
        "5. 如何保护学员隐私？", "建议对包含个人信息的表单进行保密处理",
        "6. 表单填写有什么要求？", "请如实填写，日期使用YYYY-MM-DD格式",
        "7. 多人使用要注意什么？", "建议每人单独填写自己的表单，避免共用",
    ]

    # Sheet 1: 使用说明
    strings_s1 = [
        "组织行为学基础 - 表单使用指引", "课程简介", "表单清单与使用顺序",
        "常见问题解答", "", "",
        "《组织行为学基础》培训课程配套表单包，包含7个完整表单",
        "本表单包为《组织行为学基础》培训课程设计，贯穿培训前、培训中、培训后全流程",
        "包含学员信息管理、成绩测试、行为观察、效果分析和行动跟踪五大模块",
        "表单清单", "序号", "表单名称", "用途", "使用时机", "完成时间", "备注",
        "01_学员信息表", "收集学员基本信息，了解学员背景", "培训前", "课程开始前", "1-2分钟",
        "02_前测成绩记录表", "测量培训前知识水平，建立基准", "培训前", "培训开始前", "15分钟",
        "03_后测成绩记录表", "测量培训后知识水平，评估效果", "培训后", "培训结束后", "15分钟",
        "04_课堂行为观察记录表", "记录学员课堂行为表现", "培训中", "培训过程中", "实时记录",
        "05_培训效果综合分析表", "综合分析培训效果，生成报告", "培训后", "培训结束后", "20分钟",
        "06_30天行动计划跟踪表", "跟踪培训后行为改变", "培训后", "培训结束后30天", "每日记录",
        "常见问题", "问", "答",
        "Q1", "如何选择表单？", "按培训阶段选择，培训前用01-02，培训中用04，培训后用03+05+06",
        "Q2", "数据会自动汇总吗？", "是的，带有汇总表的表单会自动计算平均分、标准差等统计指标",
        "Q3", "表单可以修改吗？", "可以修改，但建议先复制备份，保留原始版本",
        "Q4", "忘记填表怎么办？", "可以补填，但在备注栏说明补填原因和实际填表日期",
        "Q5", "如何保护隐私？", "建议对包含个人信息的表单进行加密或保密处理后再存档",
        "Q6", "表单填写格式？", "日期请使用YYYY-MM-DD格式，评分请使用1-5分制",
    ]

    strings_s2 = [
        "表单清单", "序号", "表单名称", "用途", "使用时机", "完成时间", "备注",
        "1", "00_表单使用指引", "本表 - 表单使用说明和指南", "随时", "阅读",
        "2", "01_学员信息表", "收集学员基本信息", "培训前", "课程开始前", "了解学员背景",
        "3", "02_前测成绩记录表", "测量培训前知识水平", "培训前", "培训开始前", "建立评估基准",
        "4", "03_后测成绩记录表", "测量培训后知识水平", "培训后", "培训结束后", "评估培训效果",
        "5", "04_课堂行为观察记录表", "记录课堂行为表现", "培训中", "培训过程中", "实时观察记录",
        "6", "05_培训效果综合分析表", "综合分析培训效果", "培训后", "培训结束后", "生成分析报告",
        "7", "06_30天行动计划跟踪表", "跟踪行为改变", "培训后", "培训后30天", "习惯养成跟踪",
        "", "", "", "", "", "", "使用顺序：按序号从小到大使用",
    ]

    # Build sharedStrings
    ss1 = build_shared_strings(strings_s1)
    ss2 = build_shared_strings(strings_s2)

    # Write sharedStrings (use first sheet's strings)
    with open(f"{out}/xl/sharedStrings.xml", "w", encoding="utf-8") as f:
        f.write(ss1)

    # Build workbook.xml (2 sheets)
    wb = build_workbook(["使用说明", "表单清单"])
    with open(f"{out}/xl/workbook.xml", "w", encoding="utf-8") as f:
        f.write(wb)

    # Build workbook.xml.rels (2 sheets)
    wb_rels = build_workbook_rels(2)
    with open(f"{out}/xl/_rels/workbook.xml.rels", "w", encoding="utf-8") as f:
        f.write(wb_rels)

    # Build [Content_Types].xml (2 sheets)
    ct = build_content_types(2)
    with open(f"{out}/[Content_Types].xml", "w", encoding="utf-8") as f:
        f.write(ct)

    # Build styles.xml
    styles = build_styles()
    with open(f"{out}/xl/styles.xml", "w", encoding="utf-8") as f:
        f.write(styles)

    # ── Sheet 1: 使用说明 ──
    cols1 = build_cols([(1,1,28),(2,2,18),(3,3,40),(4,4,16),(5,5,14),(6,6,14),(7,7,20)])
    rows1 = """
    <row r="1" ht="32" customHeight="1">
      <c r="A1" t="s" s="4"><v>0</v></c>
    </row>
    <row r="2" ht="18" customHeight="1">
      <c r="A2" t="s" s="4"><v>1</v></c>
    </row>
    <row r="3">
      <c r="A3" t="s" s="1"><v>6</v></c>
    </row>
    <row r="4">
      <c r="A4" t="s" s="0"><v>7</v></c>
    </row>
    <row r="5">
      <c r="A5" t="s" s="0"><v>8</v></c>
    </row>
    <row r="6" ht="18" customHeight="1">
      <c r="A6" t="s" s="4"><v>9</v></c>
    </row>
    <row r="7">
      <c r="A7" t="s" s="1"><v>10</v></c>
      <c r="B7" t="s" s="0"><v>11</v></c>
      <c r="C7" t="s" s="0"><v>12</v></c>
    </row>
    <row r="8" ht="18" customHeight="1">
      <c r="A8" t="s" s="4"><v>13</v></c>
    </row>
    <row r="9">
      <c r="A9" t="s" s="0"><v>14</v></c>
    </row>
    <row r="10" ht="18" customHeight="1">
      <c r="A10" t="s" s="4"><v>15</v></c>
      <c r="B10" t="s" s="4"><v>16</v></c>
      <c r="C10" t="s" s="4"><v>17</v></c>
    </row>
    <row r="11">
      <c r="A11" t="s" s="1"><v>18</v></c>
      <c r="B11" t="s" s="0"><v>19</v></c>
      <c r="C11" t="s" s="0"><v>20</v></c>
    </row>
    <row r="12">
      <c r="A12" t="s" s="1"><v>21</v></c>
      <c r="B12" t="s" s="0"><v>22</v></c>
      <c r="C12" t="s" s="0"><v>23</v></c>
    </row>
    <row r="13">
      <c r="A13" t="s" s="1"><v>24</v></c>
      <c r="B13" t="s" s="0"><v>25</v></c>
      <c r="C13" t="s" s="0"><v>26</v></c>
    </row>
    <row r="14">
      <c r="A14" t="s" s="1"><v>27</v></c>
      <c r="B14" t="s" s="0"><v>28</v></c>
      <c r="C14" t="s" s="0"><v>29</v></c>
    </row>
    <row r="15">
      <c r="A15" t="s" s="1"><v>30</v></c>
      <c r="B15" t="s" s="0"><v>31</v></c>
      <c r="C15" t="s" s="0"><v>32</v></c>
    </row>
    <row r="16">
      <c r="A16" t="s" s="1"><v>33</v></c>
      <c r="B16" t="s" s="0"><v>34</v></c>
      <c r="C16" t="s" s="0"><v>35</v></c>
    </row>
    <row r="17">
      <c r="A17" t="s" s="1"><v>36</v></c>
      <c r="B17" t="s" s="0"><v>37</v></c>
      <c r="C17" t="s" s="0"><v>38</v></c>
    </row>
    <row r="18" ht="18" customHeight="1">
      <c r="A18" t="s" s="4"><v>39</v></c>
    </row>
    <row r="19">
      <c r="A19" t="s" s="4"><v>40</v></c>
      <c r="B19" t="s" s="4"><v>41</v></c>
      <c r="C19" t="s" s="4"><v>42</v></c>
    </row>
    <row r="20">
      <c r="A20" t="s" s="0"><v>43</v></c>
      <c r="B20" t="s" s="1"><v>44</v></c>
      <c r="C20" t="s" s="0"><v>45</v></c>
    </row>
    <row r="21">
      <c r="A21" t="s" s="0"><v>46</v></c>
      <c r="B21" t="s" s="1"><v>47</v></c>
      <c r="C21" t="s" s="0"><v>48</v></c>
    </row>
    <row r="22">
      <c r="A22" t="s" s="0"><v>49</v></c>
      <c r="B22" t="s" s="1"><v>50</v></c>
      <c r="C22" t="s" s="0"><v>51</v></c>
    </row>
    <row r="23">
      <c r="A23" t="s" s="0"><v>52</v></c>
      <c r="B23" t="s" s="1"><v>53</v></c>
      <c r="C23" t="s" s="0"><v>54</v></c>
    </row>
    <row r="24">
      <c r="A24" t="s" s="0"><v>55</v></c>
      <c r="B24" t="s" s="1"><v>56</v></c>
      <c r="C24" t="s" s="0"><v>57</v></c>
    </row>
    <row r="25">
      <c r="A25" t="s" s="0"><v>58</v></c>
      <c r="B25" t="s" s="1"><v>59</v></c>
      <c r="C25" t="s" s="0"><v>60</v></c>
    </row>
    <row r="26">
      <c r="A26" t="s" s="0"><v>61</v></c>
      <c r="B26" t="s" s="1"><v>62</v></c>
      <c r="C26" t="s" s="0"><v>63</v></c>
    </row>
    """
    ws1 = build_worksheet(cols1, rows1, freeze=' ySplit="2" topLeftCell="A3" activePane="bottomLeft" state="frozen"')
    with open(f"{out}/xl/worksheets/sheet1.xml", "w", encoding="utf-8") as f:
        f.write(ws1)

    # ── Sheet 2: 表单清单 ──
    # Build sharedStrings for sheet 2
    with open(f"{out}/xl/sharedStrings.xml", "w", encoding="utf-8") as f:
        f.write(build_shared_strings(strings_s2))

    cols2 = build_cols([(1,1,8),(2,2,30),(3,3,40),(4,4,14),(5,5,14),(6,6,12),(7,7,20)])
    rows2 = """
    <row r="1" ht="28" customHeight="1">
      <c r="A1" t="s" s="4"><v>0</v></c>
    </row>
    <row r="2" ht="20" customHeight="1">
      <c r="A2" t="s" s="4"><v>1</v></c>
      <c r="B2" t="s" s="4"><v>2</v></c>
      <c r="C2" t="s" s="4"><v>3</v></c>
      <c r="D2" t="s" s="4"><v>4</v></c>
      <c r="E2" t="s" s="4"><v>5</v></c>
      <c r="F2" t="s" s="4"><v>6</v></c>
    </row>
    <row r="3">
      <c r="A3" t="s" s="9"><v>7</v></c>
      <c r="B3" t="s" s="0"><v>8</v></c>
      <c r="C3" t="s" s="0"><v>9</v></c>
      <c r="D3" t="s" s="0"><v>10</v></c>
      <c r="E3" t="s" s="0"><v>11</v></c>
      <c r="F3" t="s" s="0"><v>12</v></c>
    </row>
    <row r="4">
      <c r="A4" t="s" s="9"><v>13</v></c>
      <c r="B4" t="s" s="0"><v>14</v></c>
      <c r="C4" t="s" s="0"><v>15</v></c>
      <c r="D4" t="s" s="0"><v>16</v></c>
      <c r="E4" t="s" s="0"><v>17</v></c>
      <c r="F4" t="s" s="0"><v>18</v></c>
    </row>
    <row r="5">
      <c r="A5" t="s" s="9"><v>19</v></c>
      <c r="B5" t="s" s="0"><v>20</v></c>
      <c r="C5" t="s" s="0"><v>21</v></c>
      <c r="D5" t="s" s="0"><v>22</v></c>
      <c r="E5" t="s" s="0"><v>23</v></c>
      <c r="F5" t="s" s="0"><v>24</v></c>
    </row>
    <row r="6">
      <c r="A6" t="s" s="9"><v>25</v></c>
      <c r="B6" t="s" s="0"><v>26</v></c>
      <c r="C6" t="s" s="0"><v>27</v></c>
      <c r="D6" t="s" s="0"><v>28</v></c>
      <c r="E6" t="s" s="0"><v>29</v></c>
      <c r="F6" t="s" s="0"><v>30</v></c>
    </row>
    <row r="7">
      <c r="A7" t="s" s="9"><v>31</v></c>
      <c r="B7" t="s" s="0"><v>32</v></c>
      <c r="C7" t="s" s="0"><v>33</v></c>
      <c r="D7" t="s" s="0"><v>34</v></c>
      <c r="E7" t="s" s="0"><v>35</v></c>
      <c r="F7" t="s" s="0"><v>36</v></c>
    </row>
    <row r="8">
      <c r="A8" t="s" s="9"><v>37</v></c>
      <c r="B8" t="s" s="0"><v>38</v></c>
      <c r="C8" t="s" s="0"><v>39</v></c>
      <c r="D8" t="s" s="0"><v>40</v></c>
      <c r="E8" t="s" s="0"><v>41</v></c>
      <c r="F8" t="s" s="0"><v>42</v></c>
    </row>
    <row r="9">
      <c r="A9" t="s" s="9"><v>43</v></c>
      <c r="B9" t="s" s="0"><v>44</v></c>
      <c r="C9" t="s" s="0"><v>45</v></c>
      <c r="D9" t="s" s="0"><v>46</v></c>
      <c r="E9" t="s" s="0"><v>47</v></c>
      <c r="F9" t="s" s="0"><v>48</v></c>
    </row>
    <row r="10" ht="20" customHeight="1">
      <c r="A10" t="s" s="0"><v>49</v></c>
    </row>
    """
    ws2 = build_worksheet(cols2, rows2, freeze=' ySplit="2" topLeftCell="A3" activePane="bottomLeft" state="frozen"')
    with open(f"{out}/xl/worksheets/sheet2.xml", "w", encoding="utf-8") as f:
        f.write(ws2)

    # Pack
    out_file = f"{OUT_DIR}/00_表单使用指引.xlsx"
    os.makedirs(OUT_DIR, exist_ok=True)
    import subprocess
    subprocess.run(["python3", f"{SCRIPTS_DIR}/xlsx_pack.py", out, out_file], check=True)
    print(f"Created: {out_file}")

create_file_00()
print("File 1 complete.")
