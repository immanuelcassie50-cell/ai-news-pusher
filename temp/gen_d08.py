#!/usr/bin/env python3
"""
D-08 基础班·场景化应用成果 PK 表.xlsx 生成器
字段：编号/学员/部门/岗位/场景/业务问题/AI方案/实施数据/节省时间(小时)/推广价值/业务价值(0-25)/AI方案成熟度(0-25)/安全合规(0-25)/可复制性(0-25)/效果可衡量(0-25)/综合得分/排名
公式：综合得分=AVERAGE(N2:R2);排名=RANK(Q2,$Q$2:$Q$201)
要求：冻结首行表头，筛选器，条件格式，数据条
"""
import os, shutil, zipfile

SKILL_DIR = r"C:\Users\Administrator\.claude\skills\Excel表格处理"
TEMPLATE = os.path.join(SKILL_DIR, "templates", "minimal_xlsx")
WORK = r"C:\CC\temp\d08_work"
OUT = r"D:\Downloads\xinjian\德赛西威评审全流程PRD\产出物\02-评审实施\D-08-基础班·场景化应用成果PK表.xlsx"

# 1) Copy minimal template
if os.path.exists(WORK):
    shutil.rmtree(WORK)
shutil.copytree(TEMPLATE, WORK)

# 2) sharedStrings.xml
# We keep simple: all visible text in sharedStrings.
SS = ['序号', '学员', '部门', '岗位', '场景', '业务问题', 'AI方案', '实施数据',
      '节省时间(小时)', '推广价值',
      '业务价值', 'AI方案成熟度', '安全合规', '可复制性', '效果可衡量',
      '综合得分', '实时排名',
      '德赛西威 AI 赋能课程评审全流程 · 场景化应用成果 PK 表',
      '说明：本表用于基础班学员课后 2-4 周提交的"做法+效果+效率对比"。五维评分各 0-25 分制。综合得分=AVERAGE 5 维。',
      '【评分标准】很好 24-25 / 较好 21-23 / 一般 18-20 / 较差 15-17 / 差 0-14（仅用于得分判定）',
      '德赛西威 · AI 赋能内训师项目',
      '编号',
      ]
ss_xml = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n'
ss_xml += f'<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="{len(SS)}" uniqueCount="{len(SS)}">'
for s in SS:
    esc = s.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;')
    ss_xml += f'<si><t xml:space="preserve">{esc}</t></si>'
ss_xml += '</sst>'
with open(os.path.join(WORK, 'xl', 'sharedStrings.xml'), 'w', encoding='utf-8') as f:
    f.write(ss_xml)

# 3) styles.xml - 13 pre-built + a few custom (德赛蓝 header, light gray alt row, color scale & data bar handled via conditional formats, not styles)
# We'll add: index 13 = score cell center-aligned bold; index 14 = 综合得分 green-bold; index 15 = 排名 red
STYLES = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <numFmts count="3">
    <numFmt numFmtId="164" formatCode="0.0"/>
    <numFmt numFmtId="165" formatCode="0.00"/>
    <numFmt numFmtId="166" formatCode="#,##0.0"/>
  </numFmts>
  <fonts count="5">
    <font><sz val="11"/><name val="Calibri"/><color rgb="00000000"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="000000FF"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="00000000"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="00008000"/></font>
    <font><sz val="11"/><name val="Calibri"/><b/><color rgb="00FFFFFF"/></font>
  </fonts>
  <fills count="3">
    <fill><patternFill patternType="none"/></fill>
    <fill><patternFill patternType="gray125"/></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="00003D7A"/><bgColor indexed="64"/></patternFill></fill>
  </fills>
  <borders count="2">
    <border><left/><right/><top/><bottom/><diagonal/></border>
    <border><left/><right/><top style="thin"><color rgb="00003D7A"/></top><bottom/><diagonal/></border>
  </borders>
  <cellXfs count="13">
    <xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0" applyFont="1"/>
    <xf numFmtId="0" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1"/>
    <xf numFmtId="0" fontId="2" fillId="0" borderId="0" xfId="0" applyFont="1"/>
    <xf numFmtId="0" fontId="3" fillId="0" borderId="0" xfId="0" applyFont="1"/>
    <xf numFmtId="0" fontId="4" fillId="2" borderId="0" xfId="0" applyFont="1" applyFill="1" applyAlignment="1"><alignment horizontal="center" vertical="center" wrapText="1"/></xf>
    <xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0" applyAlignment="1"><alignment wrapText="1" vertical="center"/></xf>
    <xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0" applyAlignment="1"><alignment wrapText="1" vertical="center" horizontal="center"/></xf>
    <xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0" applyAlignment="1"><alignment wrapText="1" vertical="top"/></xf>
    <xf numFmtId="164" fontId="2" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1" applyAlignment="1"><alignment horizontal="center" vertical="center"/></xf>
    <xf numFmtId="0" fontId="2" fillId="0" borderId="0" xfId="0" applyFont="1" applyAlignment="1"><alignment horizontal="center" vertical="center" wrapText="1"/></xf>
    <xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0" applyNumberFormat="1"/>
    <xf numFmtId="1" fontId="0" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1" applyAlignment="1"><alignment horizontal="center" vertical="center"/></xf>
    <xf numFmtId="0" fontId="4" fillId="2" borderId="0" xfId="0" applyFont="1" applyFill="1" applyAlignment="1"><alignment horizontal="center" vertical="center" wrapText="1"/></xf>
  </cellXfs>
  <cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/></cellStyleXfs>
  <dxfs count="0"/>
  <tableStyles count="0" defaultTableStyle="TableStyleMedium2" defaultPivotStyle="PivotStyleLight16"/>
</styleSheet>
'''
with open(os.path.join(WORK, 'xl', 'styles.xml'), 'w', encoding='utf-8') as f:
    f.write(STYLES)

# 4) sheet1.xml — 17 columns
# A:序号  B:学员 C:部门 D:岗位 E:场景 F:业务问题 G:AI方案 H:实施数据 I:节省时间 J:推广价值
# K:业务价值 L:AI方案成熟度 M:安全合规 N:可复制性 O:效果可衡量 P:综合得分 Q:实时排名
# Pre-populate first row 1 as a title (merged), row 2 = instructions, row 3 = blank,
# row 4 = header, rows 5-204 = data (200 rows)

HEADER_ROW = 4
DATA_START = 5
DATA_END = DATA_START + 200 - 1  # 204

def col_letter(n):
    s = ''
    while n > 0:
        n, r = divmod(n - 1, 26)
        s = chr(65 + r) + s
    return s

# Column widths
cols_xml = '<cols>'
widths = [6, 10, 14, 12, 18, 28, 28, 18, 12, 12, 10, 12, 10, 10, 10, 11, 9]
for i, w in enumerate(widths, 1):
    cols_xml += f'<col min="{i}" max="{i}" width="{w}" customWidth="1"/>'
cols_xml += '</cols>'

# Sheet view: freeze panes, filter
sv = '''<sheetView tabSelected="1" workbookViewId="0">
    <pane ySplit="4" topLeftCell="A5" activePane="bottomLeft" state="frozen"/>
    <selection pane="bottomLeft" activeCell="A5" sqref="A5"/>
  </sheetView>'''

# Build sheetData
sheet = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n'
sheet += '<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">'
sheet += f'<sheetViews>{sv}</sheetViews>'
sheet += '<sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>'
sheet += cols_xml

# Auto filter on header row
sheet += f'<autoFilter ref="A{HEADER_ROW}:Q{DATA_END}"/>'

# Conditional formats
# 1) 综合得分 P列: >=21 绿色, 18-20 黄色, <18 红色
sheet += f'<conditionalFormatting sqref="P{DATA_START}:P{DATA_END}">'
sheet += '<cfRule type="cellIs" priority="1" operator="greaterThanOrEqual" formula="21"><formula>21</formula></cfRule>'
# We can't easily embed color in simple cfRule; use colorScale instead, or use multiple rules with dxf. Without dxfs, use color scale.
# Simpler: use a color scale that covers 0-25.
sheet += '</conditionalFormatting>'
# Use color scale for 综合得分
sheet += f'<conditionalFormatting sqref="P{DATA_START}:P{DATA_END}">'
sheet += '<cfRule type="colorScale" priority="2"><colorScale><cfvo type="num" val="0"/><cfvo type="num" val="18"/><cfvo type="num" val="25"/><color rgb="FFD0021B"/><color rgb="FFF5A623"/><color rgb="FF3CB878"/></colorScale></cfRule>'
sheet += '</conditionalFormatting>'
# 数据条 节省时间 I 列
sheet += f'<conditionalFormatting sqref="I{DATA_START}:I{DATA_END}">'
sheet += '<cfRule type="dataBar" priority="3"><dataBar><cfvo type="min"/><cfvo type="max"/><color rgb="FF00A0E9"/></dataBar></cfRule>'
sheet += '</conditionalFormatting>'
# 数据条 五维评分 K-O 列
sheet += f'<conditionalFormatting sqref="K{DATA_START}:O{DATA_END}">'
sheet += '<cfRule type="dataBar" priority="4"><dataBar><cfvo type="num" val="0"/><cfvo type="num" val="25"/><color rgb="FF003D7A"/></dataBar></cfRule>'
sheet += '</conditionalFormatting>'

sheet += '<sheetData>'

# Row 1 - title
sheet += '<row r="1" ht="32" customHeight="1">'
sheet += f'<c r="A1" t="s" s="12"><v>17</v></c>'
for i in range(2, 18):
    sheet += f'<c r="{col_letter(i)}1" s="12"/>'
sheet += '</row>'

# Row 2 - 说明
sheet += '<row r="2" ht="18" customHeight="1">'
sheet += f'<c r="A2" t="s" s="0"><v>18</v></c>'
for i in range(2, 18):
    sheet += f'<c r="{col_letter(i)}2" s="0"/>'
sheet += '</row>'

# Row 3 - 评分标准
sheet += '<row r="3" ht="18" customHeight="1">'
sheet += f'<c r="A3" t="s" s="0"><v>19</v></c>'
for i in range(2, 18):
    sheet += f'<c r="{col_letter(i)}3" s="0"/>'
sheet += '</row>'

# Row 4 - header
sheet += f'<row r="{HEADER_ROW}" ht="32" customHeight="1">'
# header text: 序号(0), 学员(1), 部门(2), 岗位(3), 场景(4), 业务问题(5), AI方案(6), 实施数据(7), 节省时间(8), 推广价值(9),
# 业务价值(10), AI方案成熟度(11), 安全合规(12), 可复制性(13), 效果可衡量(14), 综合得分(15), 实时排名(16)
header_si = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
for ci, si in enumerate(header_si, 1):
    sheet += f'<c r="{col_letter(ci)}{HEADER_ROW}" t="s" s="4"><v>{si}</v></c>'
sheet += '</row>'

# Data rows (empty, but with formula for P, Q, and placeholder numeric for I)
for r in range(DATA_START, DATA_END + 1):
    sheet += f'<row r="{r}" ht="32" customHeight="1">'
    # 序号 formula =ROW()-DATA_START+1
    sheet += f'<c r="A{r}" s="9"><f>ROW()-{DATA_START-1}</f><v></v></c>'
    # 学员 B
    sheet += f'<c r="B{r}" s="1" t="inlineStr"><is><t></t></is></c>'
    # 部门 C
    sheet += f'<c r="C{r}" s="1" t="inlineStr"><is><t></t></is></c>'
    # 岗位 D
    sheet += f'<c r="D{r}" s="1" t="inlineStr"><is><t></t></is></c>'
    # 场景 E
    sheet += f'<c r="E{r}" s="5" t="inlineStr"><is><t></t></is></c>'
    # 业务问题 F
    sheet += f'<c r="F{r}" s="5" t="inlineStr"><is><t></t></is></c>'
    # AI方案 G
    sheet += f'<c r="G{r}" s="5" t="inlineStr"><is><t></t></is></c>'
    # 实施数据 H
    sheet += f'<c r="H{r}" s="5" t="inlineStr"><is><t></t></is></c>'
    # 节省时间 I - 数字 with data bar
    sheet += f'<c r="I{r}" s="9"><v></v></c>'
    # 推广价值 J
    sheet += f'<c r="J{r}" s="5" t="inlineStr"><is><t></t></is></c>'
    # 五维评分 K-O
    for ci in range(11, 16):
        sheet += f'<c r="{col_letter(ci)}{r}" s="9"><v></v></c>'
    # 综合得分 P = AVERAGE(K:O)
    sheet += f'<c r="P{r}" s="9"><f>IF(COUNTA(K{r}:O{r})=0,"",AVERAGE(K{r}:O{r}))</f><v></v></c>'
    # 实时排名 Q = RANK
    sheet += f'<c r="Q{r}" s="9"><f>IF(P{r}="","",RANK(P{r},$P${DATA_START}:$P${DATA_END},0))</f><v></v></c>'
    sheet += '</row>'

sheet += '</sheetData>'
sheet += '<mergeCells count="1"><mergeCell ref="A1:Q1"/></mergeCells>'
sheet += '<pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>'
sheet += '<pageSetup orientation="landscape" paperSize="9" fitToWidth="1" fitToHeight="0"/>'
sheet += '</worksheet>'

with open(os.path.join(WORK, 'xl', 'worksheets', 'sheet1.xml'), 'w', encoding='utf-8') as f:
    f.write(sheet)

# 5) Update [Content_Types].xml to include sharedStrings
ct = open(os.path.join(WORK, '[Content_Types].xml'), encoding='utf-8').read()
if 'sharedStrings.xml' not in ct:
    ct = ct.replace(
        '<Override PartName="/xl/styles.xml"',
        '<Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxml-officedocument.spreadsheetml.sharedStrings+xml"/><Override PartName="/xl/styles.xml"'
    )
    with open(os.path.join(WORK, '[Content_Types].xml'), 'w', encoding='utf-8') as f:
        f.write(ct)

# 6) Pack
if os.path.exists(OUT):
    os.remove(OUT)
with zipfile.ZipFile(OUT, 'w', compression=zipfile.ZIP_DEFLATED) as z:
    for dp, _, fns in os.walk(WORK):
        for fn in fns:
            fp = os.path.join(dp, fn)
            arc = os.path.relpath(fp, WORK)
            z.write(fp, arc)

print(f"DONE: {OUT}")
print(f"Size: {os.path.getsize(OUT)} bytes")
