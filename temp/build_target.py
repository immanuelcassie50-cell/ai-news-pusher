#!/usr/bin/env python3
"""Build 02_年度经营目标分解表.xlsx"""
import shutil, os, html

OUT = 'D:/新课开发/经营/系列/03_战略实施——年度经营计划/Excel工具'
os.makedirs(OUT, exist_ok=True)

# ─── Shared strings ───────────────────────────────────────────────────────────
S = [
    # 0-4: Sheet names / headers
    "公司级目标汇总表",
    "公司名称",
    "年度",
    "目标类别",
    "目标名称",
    # 5-14
    "目标描述",
    "衡量指标",
    "当前值",
    "目标值",
    "负责人",
    "权重(%)",
    "季度分解",
    "Q1",
    "Q2",
    "Q3",
    "Q4",
    # 15-29: Sheet2 headers
    "部门级目标分解表",
    "部门名称",
    "承接公司目标",
    "部门目标",
    "关联度(%)",
    "执行策略",
    "所需支持",
    "完成标准",
    "执行人",
    "开始日期",
    "结束日期",
    "优先级",
    "高",
    "中",
    "低",
    # 30-39: Sheet3 headers
    "个人级目标承接表",
    "员工姓名",
    "工号",
    "部门",
    "岗位",
    "个人目标",
    "承接部门目标",
    "行动计划",
    "里程碑",
    "自评得分",
    # 40-49: Sheet4 headers + check items
    "目标对齐检查表",
    "检查维度",
    "对齐标准",
    "公司级",
    "部门级",
    "个人级",
    "是否对齐",
    "问题描述",
    "改进建议",
    "战略一致性",
    "目标完整性",
    "目标可达性",
    "资源匹配度",
    "时间合理性",
    "跨级协作",
    # 50+: Example data
    "示例：智慧科技集团",
    "2026",
    "财务类",
    "收入目标",
    "年度营业收入",
    "亿元",
    "3.0",
    "5.0",
    "张总",
    "40",
    "1.25",
    "1.25",
    "1.25",
    "1.25",
    "市场类",
    "市场份额",
    "市场占有率",
    "%",
    "8",
    "10",
    "运营类",
    "客户满意度",
    "客户满意度评分",
    "分",
    "80",
    "90",
    "研发类",
    "产品研发",
    "AI解决方案数量",
    "个",
    "3",
    "5",
    "销售部",
    "承接收入目标",
    "完成华南区销售任务",
    "95",
    "拓展渠道合作",
    "渠道资源支持",
    "季度销售额达标",
    "李经理",
    "2026-01-01",
    "2026-12-31",
    "王经理",
    "S2024001",
    "销售部",
    "客户经理",
    "完成华南区100家客户开拓",
    "完成华南区销售任务",
    "制定客户拜访计划并执行",
    "Q1:30家,Q2:30家,Q3:20家,Q4:20家",
    "人事部",
    "承接人才目标",
    "建立培训体系",
    "100",
    "组织培训课程",
    "培训预算",
    "培训覆盖率达标",
    "陈经理",
]

def escape(s):
    return html.escape(s, quote=False)

def build_shared_strings(strings):
    n = len(strings)
    lines = ['<?xml version="1.0" encoding="UTF-8" standalone="yes"?>',
             f'<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="{n}" uniqueCount="{n}">']
    for i, s in enumerate(strings):
        lines.append(f'  <si><t>{escape(s)}</t></si>')
    lines.append('</sst>')
    return '\n'.join(lines) + '\n'

shutil.copytree('C:/Users/Administrator/.claude/skills/Excel表格处理/templates/minimal_xlsx',
                '/tmp/target_work', dirs_exist_ok=True)

with open('/tmp/target_work/xl/sharedStrings.xml', 'w', encoding='utf-8') as f:
    f.write(build_shared_strings(S))

# ─── Workbook ─────────────────────────────────────────────────────────────────
wb_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <fileVersion appName="xl" lastEdited="7" lowestEdited="7"/>
  <workbookPr defaultThemeVersion="166925"/>
  <bookViews><workbookView xWindow="0" yWindow="0" windowWidth="20140" windowHeight="10960"/></bookViews>
  <sheets>
    <sheet name="公司级目标汇总表" sheetId="1" r:id="rId1"/>
    <sheet name="部门级目标分解表" sheetId="2" r:id="rId4"/>
    <sheet name="个人级目标承接表" sheetId="3" r:id="rId5"/>
    <sheet name="目标对齐检查表" sheetId="4" r:id="rId6"/>
  </sheets>
  <calcPr calcId="191029"/>
</workbook>'''
with open('/tmp/target_work/xl/workbook.xml', 'w', encoding='utf-8') as f:
    f.write(wb_xml)

wb_rels = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
  <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml"/>
  <Relationship Id="rId4" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet2.xml"/>
  <Relationship Id="rId5" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet3.xml"/>
  <Relationship Id="rId6" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet4.xml"/>
</Relationships>'''
with open('/tmp/target_work/xl/_rels/workbook.xml.rels', 'w', encoding='utf-8') as f:
    f.write(wb_rels)

ct_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
  <Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet2.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet3.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet4.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>
  <Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/>
</Types>'''
with open('/tmp/target_work/[Content_Types].xml', 'w', encoding='utf-8') as f:
    f.write(ct_xml)

# ─── Styles ───────────────────────────────────────────────────────────────────
# s=0 default, s=1 blue (input), s=2 black, s=3 green, s=4 bold header
# s=5 blue currency, s=6 black currency, s=7 blue %, s=8 black %
# s=9 blue int, s=10 black int, s=11 year
# s=12 blue+yellow, s=13 blue fill header (fill 2), s=14 bordered
# s=15 blue fill+border, s=16 header white on blue, s=17 light blue fill
# New fills: fill3=dark blue, fill4=green, fill5=yellow
styles_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <numFmts count="4">
    <numFmt numFmtId="164" formatCode="$#,##0;($#,##0);&quot;-&quot;"/>
    <numFmt numFmtId="165" formatCode="0.0%"/>
    <numFmt numFmtId="166" formatCode="0.0x"/>
    <numFmt numFmtId="167" formatCode="#,##0"/>
  </numFmts>
  <fonts count="9">
    <font><sz val="11"/><name val="Calibri"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="000000FF"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="00000000"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="00008000"/></font>
    <font><sz val="11"/><name val="Calibri"/><b/></font>
    <font><sz val="11"/><name val="Calibri"/><b/><color rgb="00000000"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="00000000"/></font>
    <font><sz val="11"/><name val="Calibri"/><b/><color rgb="00FFFFFF"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="00FFFFFF"/></font>
  </fonts>
  <fills count="6">
    <fill><patternFill patternType="none"/></fill>
    <fill><patternFill patternType="gray125"/></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="00D9E8F5"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="001F4DA0"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="0087CE58"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="00FFF2CC"/></patternFill></fill>
  </fills>
  <borders count="3">
    <border><left/><right/><top/><bottom/><diagonal/></border>
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
  <cellXfs count="20">
    <xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0" applyFont="1"/>
    <xf numFmtId="0" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1"/>
    <xf numFmtId="0" fontId="2" fillId="0" borderId="0" xfId="0" applyFont="1"/>
    <xf numFmtId="0" fontId="3" fillId="0" borderId="0" xfId="0" applyFont="1"/>
    <xf numFmtId="0" fontId="5" fillId="0" borderId="0" xfId="0" applyFont="1"/>
    <xf numFmtId="164" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>
    <xf numFmtId="164" fontId="2" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>
    <xf numFmtId="165" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>
    <xf numFmtId="165" fontId="2" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>
    <xf numFmtId="167" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>
    <xf numFmtId="167" fontId="2" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>
    <xf numFmtId="1" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>
    <xf numFmtId="0" fontId="5" fillId="2" borderId="0" xfId="0" applyFont="1" applyFill="1"/>
    <xf numFmtId="0" fontId="6" fillId="0" borderId="1" xfId="0" applyFont="1" applyBorder="1"/>
    <xf numFmtId="0" fontId="1" fillId="0" borderId="1" xfId="0" applyFont="1" applyBorder="1"/>
    <xf numFmtId="0" fontId="5" fillId="2" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1"/>
    <xf numFmtId="0" fontId="7" fillId="3" borderId="2" xfId="0" applyFont="1" applyFill="1" applyBorder="1"/>
    <xf numFmtId="0" fontId="6" fillId="2" borderId="1" xfId="0" applyFont="1" applyBorder="1" applyFill="1"/>
    <xf numFmtId="0" fontId="7" fillId="4" borderId="2" xfId="0" applyFont="1" applyFill="1" applyBorder="1"/>
    <xf numFmtId="0" fontId="2" fillId="5" borderId="1" xfId="0" applyFont="1" applyBorder="1" applyFill="1"/>
  </cellXfs>
</styleSheet>'''
with open('/tmp/target_work/xl/styles.xml', 'w', encoding='utf-8') as f:
    f.write(styles_xml)

# ─── Sheet 1: 公司级目标汇总表 ─────────────────────────────────────────────────
s1_rows = []

# Title
s1_rows.append('<row r="1" ht="28" customHeight="1"><c r="A1" t="s" s="16" colspan="14"><v>0</v></c></row>')

# Meta row
s1_rows.append(
    '<row r="2" ht="20" customHeight="1">'
    '<c r="A2" t="s" s="17"><v>1</v></c><c r="B2" t="s" s="1"><v></v></c>'
    '<c r="C2" t="s" s="17"><v>2</v></c><c r="D2" t="s" s="1"><v></v></c>'
    '</row>'
)

# Header
header_cols_s1 = [
    ("A", "3"), ("B", "4"), ("C", "5"), ("D", "6"),
    ("E", "7"), ("F", "8"), ("G", "9"), ("H", "10"),
    ("I", "11"), ("J", "12"), ("K", "13"), ("L", "14"),
    ("M", "15"), ("N", "16"),
]
s1_rows.append('<row r="3" ht="22" customHeight="1">' +
    ''.join(f'<c r="{col}3" t="s" s="16"><v>{idx}</v></c>' for col, idx in header_cols_s1) +
    '</row>')

# Data rows (example)
data_s1 = [
    ("50","51","52","53","54","55","56","57","58","59","60","61","62","63"),
    ("64","65","66","67","68","69","70","71","72","73","74","75","76","77"),
    ("78","79","80","81","82","83","84","85","86","87","88","89","90","91"),
    ("92","93","94","95","96","97","98","99","100","101","102","103","104","105"),
]
for i, row_data in enumerate(data_s1):
    r = 4 + i
    s1_rows.append('<row r="' + str(r) + '" ht="22" customHeight="1">' +
        ''.join(f'<c r="{chr(65+j)}{r}" t="s" s="19"><v>{v}</v></c>' for j, v in enumerate(row_data)) +
        '</row>')

# Blank
s1_rows.append('<row r="8"><c r="A8" t="s" s="0"><v></v></c></row>')

# Summary formula row
s1_rows.append(
    '<row r="9" ht="22" customHeight="1">'
    '<c r="A9" t="s" s="16" colspan="4"><v>11</v></c>'
    '<c r="E9" t="s" s="17"><v>10</v></c>'
    '<c r="F9" t="s" s="3"><f>SUM(F4:F7)</f><v></v></c>'
    '</row>'
)

sheet1_xml = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView workbookViewId="0">
      <pane ySplit="3" topLeftCell="A4" activePane="bottomLeft" state="frozen"/>
    </sheetView>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25"
    xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols>
    <col min="1" max="1" width="16" customWidth="1"/>
    <col min="2" max="2" width="14" customWidth="1"/>
    <col min="3" max="3" width="12" customWidth="1"/>
    <col min="4" max="4" width="20" customWidth="1"/>
    <col min="5" max="5" width="10" customWidth="1"/>
    <col min="6" max="6" width="12" customWidth="1"/>
    <col min="7" max="7" width="12" customWidth="1"/>
    <col min="8" max="8" width="12" customWidth="1"/>
    <col min="9" max="9" width="12" customWidth="1"/>
    <col min="10" max="10" width="8" customWidth="1"/>
    <col min="11" max="11" width="10" customWidth="1"/>
    <col min="12" max="12" width="10" customWidth="1"/>
    <col min="13" max="13" width="10" customWidth="1"/>
    <col min="14" max="14" width="10" customWidth="1"/>
  </cols>
  <sheetData>
    {chr(10).join(s1_rows)}
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

with open('/tmp/target_work/xl/worksheets/sheet1.xml', 'w', encoding='utf-8') as f:
    f.write(sheet1_xml)

# ─── Sheet 2: 部门级目标分解表 ─────────────────────────────────────────────────
s2_rows = []

s2_rows.append('<row r="1" ht="28" customHeight="1"><c r="A1" t="s" s="16" colspan="13"><v>15</v></c></row>')

# Meta
s2_rows.append(
    '<row r="2" ht="20" customHeight="1">'
    '<c r="A2" t="s" s="17"><v>1</v></c><c r="B2" t="s" s="1"><v></v></c>'
    '<c r="C2" t="s" s="17"><v>2</v></c><c r="D2" t="s" s="1"><v></v></c>'
    '</row>'
)

# Header
s2_cols = ["A","B","C","D","E","F","G","H","I","J","K","L","M"]
s2_header_idx = [("A","16"),("B","17"),("C","18"),("D","19"),("E","20"),("F","21"),
                  ("G","22"),("H","23"),("I","24"),("J","25"),("K","26"),("L","27"),("M","11")]
s2_rows.append('<row r="3" ht="22" customHeight="1">' +
    ''.join(f'<c r="{col}3" t="s" s="16"><v>{idx}</v></c>' for col, idx in s2_header_idx) +
    '</row>')

# Data rows (example)
data_s2 = [
    ("15","50","51","52","106","107","108","109","110","111","112","113","113"),
    ("16","64","65","66","107","114","115","116","117","118","119","120","120"),
    ("17","78","79","80","108","121","122","123","124","125","126","127","127"),
    ("18","92","93","94","109","128","129","130","131","132","133","134","134"),
]
for i, row_data in enumerate(data_s2):
    r = 4 + i
    s2_rows.append('<row r="' + str(r) + '" ht="22" customHeight="1">' +
        ''.join(f'<c r="{chr(65+j)}{r}" t="s" s="19"><v>{v}</v></c>' for j, v in enumerate(row_data)) +
        '</row>')

# Empty rows for input
for rr in range(8, 13):
    s2_rows.append('<row r="' + str(rr) + '" ht="22" customHeight="1">' +
        '<c r="A' + str(rr) + '" t="s" s="17"><v>16</v></c>' +
        ''.join(f'<c r="{chr(65+j)}{rr}" t="s" s="1"><v></v></c>' for j in range(1, 13)) +
        '</row>')

sheet2_xml = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView workbookViewId="0">
      <pane ySplit="3" topLeftCell="A4" activePane="bottomLeft" state="frozen"/>
    </sheetView>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25"
    xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols>
    <col min="1" max="1" width="14" customWidth="1"/>
    <col min="2" max="2" width="20" customWidth="1"/>
    <col min="3" max="3" width="20" customWidth="1"/>
    <col min="4" max="4" width="14" customWidth="1"/>
    <col min="5" max="5" width="30" customWidth="1"/>
    <col min="6" max="6" width="20" customWidth="1"/>
    <col min="7" max="7" width="20" customWidth="1"/>
    <col min="8" max="8" width="14" customWidth="1"/>
    <col min="9" max="9" width="12" customWidth="1"/>
    <col min="10" max="10" width="12" customWidth="1"/>
    <col min="11" max="11" width="8" customWidth="1"/>
    <col min="12" max="12" width="8" customWidth="1"/>
    <col min="13" max="13" width="14" customWidth="1"/>
  </cols>
  <sheetData>
    {chr(10).join(s2_rows)}
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

with open('/tmp/target_work/xl/worksheets/sheet2.xml', 'w', encoding='utf-8') as f:
    f.write(sheet2_xml)

# ─── Sheet 3: 个人级目标承接表 ─────────────────────────────────────────────────
s3_rows = []

s3_rows.append('<row r="1" ht="28" customHeight="1"><c r="A1" t="s" s="16" colspan="11"><v>30</v></c></row>')

# Meta
s3_rows.append(
    '<row r="2" ht="20" customHeight="1">'
    '<c r="A2" t="s" s="17"><v>1</v></c><c r="B2" t="s" s="1"><v></v></c>'
    '<c r="C2" t="s" s="17"><v>2</v></c><c r="D2" t="s" s="1"><v></v></c>'
    '</row>'
)

s3_cols = ["A","B","C","D","E","F","G","H","I","J","K"]
s3_header_idx = [("A","32"),("B","33"),("C","34"),("D","35"),("E","36"),
                  ("F","37"),("G","38"),("H","39"),("I","40"),("J","41"),("K","11")]
s3_rows.append('<row r="3" ht="22" customHeight="1">' +
    ''.join(f'<c r="{col}3" t="s" s="16"><v>{idx}</v></c>' for col, idx in s3_header_idx) +
    '</row>')

# Data rows (example)
data_s3 = [
    ("50","135","136","137","138","139","140","141","142","143","143"),
    ("51","144","145","146","147","148","149","150","151","152","152"),
    ("52","153","154","155","156","157","158","159","160","161","161"),
]
for i, row_data in enumerate(data_s3):
    r = 4 + i
    s3_rows.append('<row r="' + str(r) + '" ht="22" customHeight="1">' +
        ''.join(f'<c r="{chr(65+j)}{r}" t="s" s="19"><v>{v}</v></c>' for j, v in enumerate(row_data)) +
        '</row>')

# Empty input rows
for rr in range(7, 16):
    s3_rows.append('<row r="' + str(rr) + '" ht="22" customHeight="1">' +
        '<c r="A' + str(rr) + '" t="s" s="17"><v>32</v></c>' +
        ''.join(f'<c r="{chr(65+j)}{rr}" t="s" s="1"><v></v></c>' for j in range(1, 11)) +
        '</row>')

sheet3_xml = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView workbookViewId="0">
      <pane ySplit="3" topLeftCell="A4" activePane="bottomLeft" state="frozen"/>
    </sheetView>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25"
    xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols>
    <col min="1" max="1" width="14" customWidth="1"/>
    <col min="2" max="2" width="10" customWidth="1"/>
    <col min="3" max="3" width="12" customWidth="1"/>
    <col min="4" max="4" width="12" customWidth="1"/>
    <col min="5" max="5" width="20" customWidth="1"/>
    <col min="6" max="6" width="30" customWidth="1"/>
    <col min="7" max="7" width="30" customWidth="1"/>
    <col min="8" max="8" width="20" customWidth="1"/>
    <col min="9" max="9" width="10" customWidth="1"/>
    <col min="10" max="10" width="10" customWidth="1"/>
    <col min="11" max="11" width="14" customWidth="1"/>
  </cols>
  <sheetData>
    {chr(10).join(s3_rows)}
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

with open('/tmp/target_work/xl/worksheets/sheet3.xml', 'w', encoding='utf-8') as f:
    f.write(sheet3_xml)

# ─── Sheet 4: 目标对齐检查表 ──────────────────────────────────────────────────
s4_rows = []

s4_rows.append('<row r="1" ht="28" customHeight="1"><c r="A1" t="s" s="16" colspan="8"><v>40</v></c></row>')

# Header
s4_header = [("A","42"),("B","43"),("C","44"),("D","45"),("E","46"),("F","47"),("G","48"),("H","49")]
s4_rows.append('<row r="2" ht="22" customHeight="1">' +
    ''.join(f'<c r="{col}2" t="s" s="16"><v>{idx}</v></c>' for col, idx in s4_header) +
    '</row>')

check_items = [
    ("50", ""),
    ("51", ""),
    ("52", ""),
    ("53", ""),
    ("54", ""),
    ("55", ""),
]
for i, (item, note) in enumerate(check_items):
    r = 3 + i
    s4_rows.append('<row r="' + str(r) + '" ht="22" customHeight="1">' +
        f'<c r="A{r}" t="s" s="17"><v>{28+i}</v></c>'
        f'<c r="B{r}" t="s" s="19"><v>{item}</v></c>'
        '<c r="C{r}" t="s" s="1"><v></v></c>'
        '<c r="D{r}" t="s" s="1"><v></v></c>'
        '<c r="E{r}" t="s" s="1"><v></v></c>'
        '<c r="F{r}" t="s" s="1"><v></v></c>'
        '<c r="G{r}" t="s" s="1"><v></v></c>'
        '<c r="H{r}" t="s" s="1"><v></v></c>'
        '</row>')

sheet4_xml = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"/></sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25"
    xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols>
    <col min="1" max="1" width="8" customWidth="1"/>
    <col min="2" max="2" width="16" customWidth="1"/>
    <col min="3" max="3" width="40" customWidth="1"/>
    <col min="4" max="4" width="12" customWidth="1"/>
    <col min="5" max="5" width="12" customWidth="1"/>
    <col min="6" max="6" width="12" customWidth="1"/>
    <col min="7" max="7" width="12" customWidth="1"/>
    <col min="8" max="8" width="20" customWidth="1"/>
  </cols>
  <sheetData>
    {chr(10).join(s4_rows)}
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

with open('/tmp/target_work/xl/worksheets/sheet4.xml', 'w', encoding='utf-8') as f:
    f.write(sheet4_xml)

# ─── Pack ─────────────────────────────────────────────────────────────────────
import subprocess
DEST = os.path.join(OUT, '02_年度经营目标分解表.xlsx')
result = subprocess.run(
    ['python3', 'C:/Users/Administrator/.claude/skills/Excel表格处理/scripts/xlsx_pack.py',
     '/tmp/target_work', DEST],
    capture_output=True, text=True
)
print("Target pack:", result.returncode, result.stdout[:200], result.stderr[:200])

result2 = subprocess.run(
    ['python3', 'C:/Users/Administrator/.claude/skills/Excel表格处理/scripts/formula_check.py', DEST],
    capture_output=True, text=True
)
print("Target validate:", result2.returncode, result2.stdout[:300], result2.stderr[:200])
