#!/usr/bin/env python3
"""Build 优势行动 course tool forms Excel file - clean approach."""

import os
import zipfile
import shutil

OUTPUT_PATH = "D:/新课开发/心理学/29-优势行动：发现并激活你的性格优势/03-工具表单/工具表单-全流程.xlsx"
WORK_DIR = "/tmp/advantage_clean"

# Clean start
if os.path.exists(WORK_DIR):
    shutil.rmtree(WORK_DIR)
os.makedirs(WORK_DIR)

# ===== STYLE DEFINITIONS =====
TITLE_BG = "C41E3A"
HEADER_BG = "4A4A4A"
ROW_EVEN = "F5F5F5"
ROW_ODD = "FFFFFF"
ACCENT_BG = "E8D5D5"
BORDER_COLOR = "CCCCCC"


def build_styles_xml():
    """Build styles.xml."""
    fonts = [
        '<font><sz val="11"/><name val="Calibri"/></font>',
        '<font><sz val="11"/><name val="Calibri"/><color rgb="000000FF"/></font>',
        '<font><sz val="11"/><name val="Calibri"/><color rgb="00000000"/></font>',
        '<font><sz val="11"/><name val="Calibri"/><color rgb="00008000"/></font>',
        '<font><sz val="14"/><name val="Noto Sans SC"/><b/><color rgb="FFFFFF"/></font>',
        '<font><sz val="11"/><name val="Calibri"/><b/><color rgb="00000000"/></font>',
        '<font><sz val="11"/><name val="Noto Sans SC"/><b/><color rgb="FFFFFF"/></font>',
        '<font><sz val="11"/><name val="Noto Sans SC"/><color rgb="FFFFFF"/></font>',
        '<font><sz val="10"/><name val="Noto Sans SC"/><color rgb="000000"/></font>',
        '<font><sz val="10"/><name val="Noto Sans SC"/><b/><color rgb="000000"/></font>',
    ]

    fills = [
        '<fill><patternFill patternType="none"/></fill>',
        '<fill><patternFill patternType="gray125"/></fill>',
        f'<fill><patternFill patternType="solid"><fgColor rgb="00{TITLE_BG}"/><bgColor indexed="64"/></patternFill></fill>',
        f'<fill><patternFill patternType="solid"><fgColor rgb="00{HEADER_BG}"/><bgColor indexed="64"/></patternFill></fill>',
        f'<fill><patternFill patternType="solid"><fgColor rgb="00{ROW_EVEN}"/><bgColor indexed="64"/></patternFill></fill>',
        f'<fill><patternFill patternType="solid"><fgColor rgb="00{ROW_ODD}"/><bgColor indexed="64"/></patternFill></fill>',
        f'<fill><patternFill patternType="solid"><fgColor rgb="00{ACCENT_BG}"/><bgColor indexed="64"/></patternFill></fill>',
    ]

    border = f'<border><left style="thin"><color rgb="00{BORDER_COLOR}"/></left><right style="thin"><color rgb="00{BORDER_COLOR}"/></right><top style="thin"><color rgb="00{BORDER_COLOR}"/></top><bottom style="thin"><color rgb="00{BORDER_COLOR}"/></bottom><diagonal/></border>'

    cellXfs = [
        # 0: Default
        '<xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0" applyFont="1"/>',
        # 1: Blue input
        '<xf numFmtId="0" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1"/>',
        # 2: Black formula
        '<xf numFmtId="0" fontId="2" fillId="0" borderId="0" xfId="0" applyFont="1"/>',
        # 3: Green cross-sheet
        '<xf numFmtId="0" fontId="3" fillId="0" borderId="0" xfId="0" applyFont="1"/>',
        # 4: Bold header
        '<xf numFmtId="0" fontId="4" fillId="0" borderId="0" xfId="0" applyFont="1" applyAlignment="1"><alignment horizontal="center"/></xf>',
        # 5: Blue currency
        '<xf numFmtId="164" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>',
        # 6: Black currency
        '<xf numFmtId="164" fontId="2" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>',
        # 7: Blue percentage
        '<xf numFmtId="165" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>',
        # 8: Black percentage
        '<xf numFmtId="165" fontId="2" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>',
        # 9: Blue integer
        '<xf numFmtId="167" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>',
        # 10: Black integer
        '<xf numFmtId="167" fontId="2" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>',
        # 11: Year
        '<xf numFmtId="1" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>',
        # 12: Highlight
        '<xf numFmtId="0" fontId="5" fillId="2" borderId="0" xfId="0" applyFont="1" applyFill="1"/>',
        # 13: Title row (red bg, white bold centered, bordered)
        f'<xf numFmtId="0" fontId="6" fillId="2" borderId="1" xfId="0" applyFont="1" applyAlignment="1" applyFill="1"><alignment horizontal="center"/></xf>',
        # 14: Header row (gray bg, white bold centered, bordered)
        f'<xf numFmtId="0" fontId="6" fillId="3" borderId="1" xfId="0" applyFont="1" applyAlignment="1" applyFill="1"><alignment horizontal="center"/></xf>',
        # 15: Even row (light gray bg, centered, bordered)
        f'<xf numFmtId="0" fontId="8" fillId="4" borderId="1" xfId="0" applyFont="1" applyAlignment="1" applyFill="1"><alignment horizontal="center"/></xf>',
        # 16: Odd row (white bg, centered, bordered)
        f'<xf numFmtId="0" fontId="8" fillId="5" borderId="1" xfId="0" applyFont="1" applyAlignment="1" applyFill="1"><alignment horizontal="center"/></xf>',
        # 17: Accent (pink bg, centered, bordered)
        f'<xf numFmtId="0" fontId="8" fillId="6" borderId="1" xfId="0" applyFont="1" applyAlignment="1" applyFill="1"><alignment horizontal="center"/></xf>',
        # 18: Content text (black, left aligned, bordered)
        f'<xf numFmtId="0" fontId="8" fillId="0" borderId="1" xfId="0" applyFont="1" applyAlignment="1" applyFill="1"><alignment horizontal="left"/></xf>',
        # 19: Content bold (left aligned, bordered)
        f'<xf numFmtId="0" fontId="9" fillId="0" borderId="1" xfId="0" applyFont="1" applyAlignment="1" applyFill="1"><alignment horizontal="left"/></xf>',
    ]

    return f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <numFmts>
    <numFmt numFmtId="164" formatCode="$#,##0;($#,##0);&quot;-&quot;"/>
    <numFmt numFmtId="165" formatCode="0.0%"/>
    <numFmt numFmtId="166" formatCode="0.0x"/>
    <numFmt numFmtId="167" formatCode="#,##0"/>
  </numFmts>
  <fonts count="{len(fonts)}">
    {"".join(fonts)}
  </fonts>
  <fills count="{len(fills)}">
    {"".join(fills)}
  </fills>
  <borders count="2">
    <border><left/><right/><top/><bottom/><diagonal/></border>
    {border}
  </borders>
  <cellXfs count="{len(cellXfs)}">
    {"".join(cellXfs)}
  </cellXfs>
</styleSheet>'''


def build_shared_strings():
    """All text content."""
    return [
        # Sheet 1: 学员优势测评数据记录表
        "学员优势测评数据记录表",
        "学员姓名",
        "填表日期",
        "测评工具",
        "VIA优势测评",
        "盖洛普优势测评",
        "优势1（核心优势）",
        "优势名称",
        "得分",
        "优势2",
        "优势3",
        "优势4",
        "优势5",
        "备注",
        # Sheet 2: 课程签到表
        "课程签到表",
        "第___天",
        "学员姓名",
        "联系方式（选填）",
        "课前准备完成情况",
        "是",
        "否",
        "备注",
        # Sheet 3: 优势使用盘点表
        "优势使用盘点表",
        "优势使用频率",
        "满意度",
        "低",
        "高",
        "待开发区",
        "增长区",
        "优势区",
        "消耗区",
        "生活场景",
        "使用频率（1-10）",
        "满意度（1-10）",
        # Sheet 4: 优势行动计划追踪表
        "优势行动计划追踪表",
        "学员姓名",
        "目标优势行动",
        "计划执行日期",
        "实际执行情况",
        "执行效果（1-10分）",
        "反思与调整",
        "周复盘",
        "未执行",
        "部分执行",
        "完全执行",
        # Sheet 5: 学员反馈收集表
        "学员反馈收集表",
        "课程内容满意度",
        "讲师满意度",
        "物料满意度",
        "收获感知度",
        "开放性反馈",
        "改进建议",
        "1分",
        "2分",
        "3分",
        "4分",
        "5分",
        "请选择",
    ]


def build_sheet1():
    """Sheet 1: 学员优势测评数据记录表"""
    cols = '''<cols>
    <col min="1" max="1" width="14" customWidth="1"/>
    <col min="2" max="2" width="14" customWidth="1"/>
    <col min="3" max="3" width="16" customWidth="1"/>
    <col min="4" max="4" width="20" customWidth="1"/>
    <col min="5" max="5" width="10" customWidth="1"/>
    <col min="6" max="6" width="18" customWidth="1"/>
    <col min="7" max="7" width="10" customWidth="1"/>
    <col min="8" max="8" width="18" customWidth="1"/>
    <col min="9" max="9" width="10" customWidth="1"/>
    <col min="10" max="10" width="18" customWidth="1"/>
    <col min="11" max="11" width="10" customWidth="1"/>
    <col min="12" max="12" width="18" customWidth="1"/>
    <col min="13" max="13" width="10" customWidth="1"/>
    <col min="14" max="14" width="22" customWidth="1"/>
  </cols>'''

    # String indices: 0=title, 1=name, 2=date, 3=tool, 4=VIA, 5=Gallup, 6=str1, 7=strName, 8=score, 9-12=str2-5, 13=note
    rows = '''<row r="1" ht="30" customHeight="1">
    <c r="A1" t="s" s="13"><v>0</v></c>
  </row>
  <row r="2" ht="22" customHeight="1">
    <c r="A2" t="s" s="14"><v>1</v></c>
    <c r="B2" t="s" s="14"><v>2</v></c>
    <c r="C2" t="s" s="14"><v>3</v></c>
    <c r="D2" t="s" s="14"><v>6</v></c>
    <c r="E2" t="s" s="14"><v>8</v></c>
    <c r="F2" t="s" s="14"><v>9</v></c>
    <c r="G2" t="s" s="14"><v>8</v></c>
    <c r="H2" t="s" s="14"><v>10</v></c>
    <c r="I2" t="s" s="14"><v>8</v></c>
    <c r="J2" t="s" s="14"><v>11</v></c>
    <c r="K2" t="s" s="14"><v>8</v></c>
    <c r="L2" t="s" s="14"><v>12</v></c>
    <c r="M2" t="s" s="14"><v>8</v></c>
    <c r="N2" t="s" s="14"><v>13</v></c>
  </row>
  <row r="3" ht="20" customHeight="1">
    <c r="D3" t="s" s="17"><v>7</v></c>
    <c r="F3" t="s" s="17"><v>7</v></c>
    <c r="H3" t="s" s="17"><v>7</v></c>
    <c r="J3" t="s" s="17"><v>7</v></c>
    <c r="L3" t="s" s="17"><v>7</v></c>
  </row>'''

    for i in range(4, 24):
        s = "15" if i % 2 == 0 else "16"
        rows += f'''
  <row r="{i}" ht="20" customHeight="1">
    <c r="A{i}" t="s" s="{s}"><v>1</v></c>
    <c r="B{i}" t="s" s="{s}"><v>2</v></c>
    <c r="C{i}" t="s" s="{s}"><v>3</v></c>
    <c r="D{i}" t="s" s="{s}"><v>6</v></c>
    <c r="E{i}" t="s" s="{s}"><v>8</v></c>
    <c r="F{i}" t="s" s="{s}"><v>9</v></c>
    <c r="G{i}" t="s" s="{s}"><v>8</v></c>
    <c r="H{i}" t="s" s="{s}"><v>10</v></c>
    <c r="I{i}" t="s" s="{s}"><v>8</v></c>
    <c r="J{i}" t="s" s="{s}"><v>11</v></c>
    <c r="K{i}" t="s" s="{s}"><v>8</v></c>
    <c r="L{i}" t="s" s="{s}"><v>12</v></c>
    <c r="M{i}" t="s" s="{s}"><v>8</v></c>
    <c r="N{i}" t="s" s="{s}"><v>13</v></c>
  </row>'''

    dv = '''<dataValidations>
    <dataValidation type="list" sqref="C4:C23" showInputMessage="1" prompt="请选择测评工具" promptTitle="测评工具">
      <formula1>"VIA优势测评,盖洛普优势测评"</formula1>
    </dataValidation>
  </dataValidations>'''

    return f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView tabSelected="1" workbookViewId="0">
      <pane ySplit="2" topLeftCell="A3" activePane="bottomLeft" state="frozen"/>
    </sheetView>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="20" x14ac:dyDescent="0.25"/>
  {cols}
  <sheetData>{rows}
  </sheetData>
  {dv}
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''


def build_sheet2():
    """Sheet 2: 课程签到表"""
    cols = '''<cols>
    <col min="1" max="1" width="14" customWidth="1"/>
    <col min="2" max="2" width="16" customWidth="1"/>
    <col min="3" max="3" width="18" customWidth="1"/>
    <col min="4" max="4" width="20" customWidth="1"/>
    <col min="5" max="5" width="30" customWidth="1"/>
  </cols>'''

    # 15=title, 16=day, 17=name, 18=contact, 19=prep, 20=yes, 21=no, 22=note
    rows = '''<row r="1" ht="30" customHeight="1">
    <c r="A1" t="s" s="13"><v>15</v></c>
  </row>
  <row r="2" ht="22" customHeight="1">
    <c r="A2" t="s" s="14"><v>16</v></c>
    <c r="B2" t="s" s="14"><v>17</v></c>
    <c r="C2" t="s" s="14"><v>18</v></c>
    <c r="D2" t="s" s="14"><v>19</v></c>
    <c r="E2" t="s" s="14"><v>22</v></c>
  </row>'''

    for i in range(3, 28):
        s = "15" if i % 2 == 0 else "16"
        rows += f'''
  <row r="{i}" ht="20" customHeight="1">
    <c r="A{i}" t="s" s="{s}"><v>16</v></c>
    <c r="B{i}" t="s" s="{s}"><v>17</v></c>
    <c r="C{i}" t="s" s="{s}"><v>18</v></c>
    <c r="D{i}" t="s" s="{s}"><v>19</v></c>
    <c r="E{i}" t="s" s="{s}"><v>22</v></c>
  </row>'''

    dv = '''<dataValidations>
    <dataValidation type="list" sqref="D3:D27" showInputMessage="1" prompt="是否完成课前准备" promptTitle="课前准备">
      <formula1>"是,否"</formula1>
    </dataValidation>
  </dataValidations>'''

    return f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView tabSelected="1" workbookViewId="0">
      <pane ySplit="2" topLeftCell="A3" activePane="bottomLeft" state="frozen"/>
    </sheetView>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="20" x14ac:dyDescent="0.25"/>
  {cols}
  <sheetData>{rows}
  </sheetData>
  {dv}
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''


def build_sheet3():
    """Sheet 3: 优势使用盘点表"""
    cols = '''<cols>
    <col min="1" max="1" width="18" customWidth="1"/>
    <col min="2" max="2" width="16" customWidth="1"/>
    <col min="3" max="3" width="16" customWidth="1"/>
    <col min="4" max="4" width="14" customWidth="1"/>
    <col min="5" max="5" width="42" customWidth="1"/>
  </cols>'''

    # 23=title, 24=usage, 25=satis, 26=low, 27=high, 28-31=quadrants, 32=scene, 33-34=labels
    rows = '''<row r="1" ht="30" customHeight="1">
    <c r="A1" t="s" s="13"><v>23</v></c>
  </row>
  <row r="2" ht="20" customHeight="1">
    <c r="A2" t="s" s="14"><v>32</v></c>
    <c r="B2" t="s" s="14"><v>33</v></c>
    <c r="C2" t="s" s="14"><v>34</v></c>
    <c r="D2" t="s" s="14"><v>25</v></c>
    <c r="E2" t="s" s="14"><v>32</v></c>
  </row>
  <row r="3" ht="22" customHeight="1">
    <c r="A3" t="s" s="17"><v>26</v></c>
    <c r="B3" t="s" s="17"><v>24</v></c>
    <c r="C3" t="s" s="17"><v>27</v></c>
    <c r="D3" t="s" s="14"><v>25</v></c>
    <c r="E3" t="s" s="14"><v>28</v></c>
  </row>'''

    for i in range(4, 24):
        s = "15" if i % 2 == 0 else "16"
        rows += f'''
  <row r="{i}" ht="20" customHeight="1">
    <c r="A{i}" t="s" s="{s}"><v>32</v></c>
    <c r="B{i}" t="s" s="{s}"><v>33</v></c>
    <c r="C{i}" t="s" s="{s}"><v>34</v></c>
    <c r="D{i}" t="s" s="{s}"><v>25</v></c>
    <c r="E{i}" t="s" s="{s}"><v>32</v></c>
  </row>'''

    # Quadrant legend
    rows += '''
  <row r="24" ht="20" customHeight="1">
    <c r="A24" t="s" s="17"><v>28</v></c>
    <c r="B24" t="s" s="15"><v>24</v></c>
    <c r="C24" t="s" s="15"><v>26</v></c>
  </row>
  <row r="25" ht="20" customHeight="1">
    <c r="A25" t="s" s="17"><v>29</v></c>
    <c r="B25" t="s" s="15"><v>24</v></c>
    <c r="C25" t="s" s="15"><v>27</v></c>
  </row>
  <row r="26" ht="20" customHeight="1">
    <c r="A26" t="s" s="17"><v>30</v></c>
    <c r="B26" t="s" s="15"><v>24</v></c>
    <c r="C26" t="s" s="15"><v>27</v></c>
  </row>
  <row r="27" ht="20" customHeight="1">
    <c r="A27" t="s" s="17"><v>31</v></c>
    <c r="B27" t="s" s="15"><v>24</v></c>
    <c r="C27" t="s" s="15"><v>26</v></c>
  </row>'''

    dv = '''<dataValidations>
    <dataValidation type="list" sqref="D4:D23" showInputMessage="1" prompt="选择优势所在区域" promptTitle="四象限区域">
      <formula1>"待开发区,增长区,优势区,消耗区"</formula1>
    </dataValidation>
    <dataValidation type="whole" sqref="B4:B23" showInputMessage="1" prompt="请输入1-10的数字" promptTitle="使用频率">
      <formula1>1</formula1>
      <formula2>10</formula2>
    </dataValidation>
    <dataValidation type="whole" sqref="C4:C23" showInputMessage="1" prompt="请输入1-10的数字" promptTitle="满意度">
      <formula1>1</formula1>
      <formula2>10</formula2>
    </dataValidation>
  </dataValidations>'''

    return f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView tabSelected="1" workbookViewId="0">
      <pane ySplit="3" topLeftCell="A4" activePane="bottomLeft" state="frozen"/>
    </sheetView>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="20" x14ac:dyDescent="0.25"/>
  {cols}
  <sheetData>{rows}
  </sheetData>
  {dv}
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''


def build_sheet4():
    """Sheet 4: 优势行动计划追踪表"""
    cols = '''<cols>
    <col min="1" max="1" width="14" customWidth="1"/>
    <col min="2" max="2" width="26" customWidth="1"/>
    <col min="3" max="3" width="14" customWidth="1"/>
    <col min="4" max="4" width="20" customWidth="1"/>
    <col min="5" max="5" width="16" customWidth="1"/>
    <col min="6" max="6" width="26" customWidth="1"/>
    <col min="7" max="7" width="32" customWidth="1"/>
  </cols>'''

    # 35=title, 36=name, 37=action, 38=planDate, 39=actual, 40=effect, 41=reflect, 42=weekly
    # 43=noExec, 44=partial, 45=full
    rows = '''<row r="1" ht="30" customHeight="1">
    <c r="A1" t="s" s="13"><v>35</v></c>
  </row>
  <row r="2" ht="22" customHeight="1">
    <c r="A2" t="s" s="14"><v>36</v></c>
    <c r="B2" t="s" s="14"><v>37</v></c>
    <c r="C2" t="s" s="14"><v>38</v></c>
    <c r="D2" t="s" s="14"><v>39</v></c>
    <c r="E2" t="s" s="14"><v>40</v></c>
    <c r="F2" t="s" s="14"><v>41</v></c>
    <c r="G2" t="s" s="14"><v>42</v></c>
  </row>'''

    for i in range(3, 23):
        s = "15" if i % 2 == 0 else "16"
        rows += f'''
  <row r="{i}" ht="20" customHeight="1">
    <c r="A{i}" t="s" s="{s}"><v>36</v></c>
    <c r="B{i}" t="s" s="{s}"><v>37</v></c>
    <c r="C{i}" t="s" s="{s}"><v>38</v></c>
    <c r="D{i}" t="s" s="{s}"><v>39</v></c>
    <c r="E{i}" t="s" s="{s}"><v>40</v></c>
    <c r="F{i}" t="s" s="{s}"><v>41</v></c>
    <c r="G{i}" t="s" s="{s}"><v>42</v></c>
  </row>'''

    dv = '''<dataValidations>
    <dataValidation type="list" sqref="D3:D22" showInputMessage="1" prompt="选择执行情况" promptTitle="实际执行情况">
      <formula1>"未执行,部分执行,完全执行"</formula1>
    </dataValidation>
    <dataValidation type="whole" sqref="E3:E22" showInputMessage="1" prompt="请输入1-10的数字" promptTitle="执行效果">
      <formula1>1</formula1>
      <formula2>10</formula2>
    </dataValidation>
  </dataValidations>'''

    return f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView tabSelected="1" workbookViewId="0">
      <pane ySplit="2" topLeftCell="A3" activePane="bottomLeft" state="frozen"/>
    </sheetView>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="20" x14ac:dyDescent="0.25"/>
  {cols}
  <sheetData>{rows}
  </sheetData>
  {dv}
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''


def build_sheet5():
    """Sheet 5: 学员反馈收集表"""
    cols = '''<cols>
    <col min="1" max="1" width="14" customWidth="1"/>
    <col min="2" max="2" width="14" customWidth="1"/>
    <col min="3" max="3" width="14" customWidth="1"/>
    <col min="4" max="4" width="14" customWidth="1"/>
    <col min="5" max="5" width="14" customWidth="1"/>
    <col min="6" max="6" width="32" customWidth="1"/>
    <col min="7" max="7" width="32" customWidth="1"/>
  </cols>'''

    # 46=title, 36=name, 47-50=sat, 51=open, 52=suggest, 53-57=1-5, 58=please select
    rows = '''<row r="1" ht="30" customHeight="1">
    <c r="A1" t="s" s="13"><v>46</v></c>
  </row>
  <row r="2" ht="22" customHeight="1">
    <c r="A2" t="s" s="14"><v>36</v></c>
    <c r="B2" t="s" s="14"><v>47</v></c>
    <c r="C2" t="s" s="14"><v>48</v></c>
    <c r="D2" t="s" s="14"><v>49</v></c>
    <c r="E2" t="s" s="14"><v>50</v></c>
    <c r="F2" t="s" s="14"><v>51</v></c>
    <c r="G2" t="s" s="14"><v>52</v></c>
  </row>
  <row r="3" ht="18" customHeight="1">
    <c r="A3" t="s" s="17"><v>58</v></c>
    <c r="B3" t="s" s="17"><v>53</v></c>
    <c r="C3" t="s" s="17"><v>54</v></c>
    <c r="D3" t="s" s="17"><v>55</v></c>
    <c r="E3" t="s" s="17"><v>56</v></c>
  </row>'''

    for i in range(4, 19):
        s = "15" if i % 2 == 0 else "16"
        rows += f'''
  <row r="{i}" ht="20" customHeight="1">
    <c r="A{i}" t="s" s="{s}"><v>36</v></c>
    <c r="B{i}" t="s" s="{s}"><v>47</v></c>
    <c r="C{i}" t="s" s="{s}"><v>48</v></c>
    <c r="D{i}" t="s" s="{s}"><v>49</v></c>
    <c r="E{i}" t="s" s="{s}"><v>50</v></c>
    <c r="F{i}" t="s" s="{s}"><v>51</v></c>
    <c r="G{i}" t="s" s="{s}"><v>52</v></c>
  </row>'''

    dv = '''<dataValidations>
    <dataValidation type="list" sqref="B4:E18" showInputMessage="1" prompt="请选择1-5分" promptTitle="满意度评分">
      <formula1>"1分,2分,3分,4分,5分"</formula1>
    </dataValidation>
  </dataValidations>'''

    return f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView tabSelected="1" workbookViewId="0">
      <pane ySplit="3" topLeftCell="A4" activePane="bottomLeft" state="frozen"/>
    </sheetView>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="20" x14ac:dyDescent="0.25"/>
  {cols}
  <sheetData>{rows}
  </sheetData>
  {dv}
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''


def main():
    sheet_names = [
        "学员优势测评数据记录表",
        "课程签到表",
        "优势使用盘点表",
        "优势行动计划追踪表",
        "学员反馈收集表",
    ]

    strings = build_shared_strings()

    # Create directory structure
    os.makedirs(f"{WORK_DIR}/xl/worksheets", exist_ok=True)
    os.makedirs(f"{WORK_DIR}/xl/_rels", exist_ok=True)
    os.makedirs(f"{WORK_DIR}/_rels", exist_ok=True)

    # Write styles.xml
    with open(f"{WORK_DIR}/xl/styles.xml", "w", encoding="utf-8") as f:
        f.write(build_styles_xml())

    # Write sharedStrings.xml
    sis = "\n  ".join([f'<si><t>{s}</t></si>' if s else '<si><t xml:space="preserve"></t></si>' for s in strings])
    shared = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="{len(strings)}" uniqueCount="{len(strings)}">
  {sis}
</sst>'''
    with open(f"{WORK_DIR}/xl/sharedStrings.xml", "w", encoding="utf-8") as f:
        f.write(shared)

    # Write workbook.xml
    sheets_xml = "\n    ".join([f'<sheet name="{n}" sheetId="{i+1}" r:id="rId{i+1}"/>' for i, n in enumerate(sheet_names)])
    workbook = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <fileVersion appName="xl" lastEdited="7" lowestEdited="7"/>
  <workbookPr defaultThemeVersion="166925"/>
  <bookViews><workbookView xWindow="0" yWindow="0" windowWidth="20140" windowHeight="10960"/></bookViews>
  <sheets>
    {sheets_xml}
  </sheets>
  <calcPr calcId="191029"/>
</workbook>'''
    with open(f"{WORK_DIR}/xl/workbook.xml", "w", encoding="utf-8") as f:
        f.write(workbook)

    # Write workbook.xml.rels
    rels = '''<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
  <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml"/>
  <Relationship Id="rId4" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet2.xml"/>
  <Relationship Id="rId5" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet3.xml"/>
  <Relationship Id="rId6" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet4.xml"/>
  <Relationship Id="rId7" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet5.xml"/>
</Relationships>'''
    with open(f"{WORK_DIR}/xl/_rels/workbook.xml.rels", "w", encoding="utf-8") as f:
        f.write(rels)

    # Write [Content_Types].xml
    ct = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
  <Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>
  <Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadheetml.sharedStrings+xml"/>
  <Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet2.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet3.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet4.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet5.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
</Types>'''
    with open(f"{WORK_DIR}/[Content_Types].xml", "w", encoding="utf-8") as f:
        f.write(ct)

    # Write root _rels/.rels
    root_rels = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/>
</Relationships>'''
    with open(f"{WORK_DIR}/_rels/.rels", "w", encoding="utf-8") as f:
        f.write(root_rels)

    # Write sheets
    with open(f"{WORK_DIR}/xl/worksheets/sheet1.xml", "w", encoding="utf-8") as f:
        f.write(build_sheet1())
    with open(f"{WORK_DIR}/xl/worksheets/sheet2.xml", "w", encoding="utf-8") as f:
        f.write(build_sheet2())
    with open(f"{WORK_DIR}/xl/worksheets/sheet3.xml", "w", encoding="utf-8") as f:
        f.write(build_sheet3())
    with open(f"{WORK_DIR}/xl/worksheets/sheet4.xml", "w", encoding="utf-8") as f:
        f.write(build_sheet4())
    with open(f"{WORK_DIR}/xl/worksheets/sheet5.xml", "w", encoding="utf-8") as f:
        f.write(build_sheet5())

    # Pack xlsx
    output_tmp = "/tmp/advantage_output.xlsx"
    with zipfile.ZipFile(output_tmp, 'w', zipfile.ZIP_DEFLATED) as zf:
        for root, dirs, files in os.walk(WORK_DIR):
            for file in files:
                file_path = os.path.join(root, file)
                arcname = os.path.relpath(file_path, WORK_DIR)
                zf.write(file_path, arcname)

    # Copy to final
    shutil.copy(output_tmp, OUTPUT_PATH)
    print(f"Created: {OUTPUT_PATH}")

    # Verify structure
    with zipfile.ZipFile(OUTPUT_PATH, 'r') as zf:
        names = sorted(zf.namelist())
        print(f"Files in xlsx ({len(names)}):")
        for n in names:
            print(f"  {n}")


if __name__ == "__main__":
    main()
