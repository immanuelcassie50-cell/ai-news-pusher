#!/usr/bin/env python3
"""
D-14 AI 陪跑结果评估表.xlsx
字段：序号 / 学员 / 部门 / 岗位 / 提示词应用次数 / 业务节省时间(小时) / 业务产出数量 / 同事复用次数 / 综合得分 / 排名 / 备注
综合得分 = (应用次数*0.2 + 节省时间*0.4 + 业务产出*0.2 + 复用次数*0.2) 归一化到 25
具体：综合得分 = MIN(25, (应用次数*0.5 + 节省时间*0.4 + 业务产出*0.3 + 复用次数*2) * 0.4)
简化：综合得分 = MIN(25, ROUND(应用次数*0.5 + 节省时间*0.4 + 业务产出*0.3 + 复用次数*2, 1))
"""
import os, shutil, zipfile

SKILL_DIR = r"C:\Users\Administrator\.claude\skills\Excel表格处理"
TEMPLATE = os.path.join(SKILL_DIR, "templates", "minimal_xlsx")
WORK = r"C:\CC\temp\d14_work"
OUT = r"D:\Downloads\xinjian\德赛西威评审全流程PRD\产出物\02-评审实施\D-14-AI陪跑结果评估表（每人一份）.xlsx"

if os.path.exists(WORK):
    shutil.rmtree(WORK)
shutil.copytree(TEMPLATE, WORK)

# 共享字符串
SS = [
    '德赛西威 AI 赋能课程评审全流程 · AI 陪跑结果评估表（每人一份）',
    '说明：本表用于课后 2-4 周陪跑期数据量化。综合得分公式：MIN(25, ROUND(应用次数×0.5 + 节省时间×0.4 + 业务产出×0.3 + 复用次数×2, 1))，封顶 25 分。',
    '综合得分颜色规则：≥21 绿色 / 18-20 黄色 / <18 红色',
    '序号', '学员', '部门', '岗位', '提示词应用次数(2-4周)', '业务节省时间(小时)', '业务产出数量(件)', '同事复用次数(人)', '综合得分', '排名', '备注',
    '项目组',
    '本表由学员本人填报，HRBP 复核，IT 部门提供平台数据。',
    '基础班', '内训师班',
]
ss_xml = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n'
ss_xml += f'<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="{len(SS)}" uniqueCount="{len(SS)}">'
for s in SS:
    esc = s.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;')
    ss_xml += f'<si><t xml:space="preserve">{esc}</t></si>'
ss_xml += '</sst>'
with open(os.path.join(WORK, 'xl', 'sharedStrings.xml'), 'w', encoding='utf-8') as f:
    f.write(ss_xml)

# styles.xml
STYLES = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <numFmts count="3">
    <numFmt numFmtId="164" formatCode="0.0"/>
    <numFmt numFmtId="165" formatCode="#,##0"/>
    <numFmt numFmtId="166" formatCode="0"/>
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
  <borders count="1">
    <border><left/><right/><top/><bottom/><diagonal/></border>
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

def col_letter(n):
    s = ''
    while n > 0:
        n, r = divmod(n - 1, 26)
        s = chr(65 + r) + s
    return s

HEADER_ROW = 5
DATA_START = 6
DATA_END = DATA_START + 200 - 1  # 205

cols_xml = '<cols>'
widths = [6, 10, 14, 14, 16, 14, 14, 14, 11, 8, 22]
for i, w in enumerate(widths, 1):
    cols_xml += f'<col min="{i}" max="{i}" width="{w}" customWidth="1"/>'
cols_xml += '</cols>'

sv = '''<sheetView tabSelected="1" workbookViewId="0">
    <pane ySplit="5" topLeftCell="A6" activePane="bottomLeft" state="frozen"/>
    <selection pane="bottomLeft" activeCell="A6" sqref="A6"/>
  </sheetView>'''

sheet = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n'
sheet += '<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">'
sheet += f'<sheetViews>{sv}</sheetViews>'
sheet += '<sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>'
sheet += cols_xml

sheet += f'<autoFilter ref="A{HEADER_ROW}:K{DATA_END}"/>'

# 综合得分 I 列：3色色阶
sheet += f'<conditionalFormatting sqref="I{DATA_START}:I{DATA_END}">'
sheet += '<cfRule type="colorScale" priority="1"><colorScale><cfvo type="num" val="0"/><cfvo type="num" val="18"/><cfvo type="num" val="25"/><color rgb="FFD0021B"/><color rgb="FFF5A623"/><color rgb="FF3CB878"/></colorScale></cfRule>'
sheet += '</conditionalFormatting>'
# 数据条：提示词应用次数(0-30+), 节省时间(0-100+), 业务产出(0-50+), 同事复用(0-10+)
sheet += f'<conditionalFormatting sqref="E{DATA_START}:E{DATA_END}">'
sheet += '<cfRule type="dataBar" priority="2"><dataBar><cfvo type="min"/><cfvo type="max"/><color rgb="FF00A0E9"/></dataBar></cfRule>'
sheet += '</conditionalFormatting>'
sheet += f'<conditionalFormatting sqref="F{DATA_START}:F{DATA_END}">'
sheet += '<cfRule type="dataBar" priority="3"><dataBar><cfvo type="min"/><cfvo type="max"/><color rgb="FF00A0E9"/></dataBar></cfRule>'
sheet += '</conditionalFormatting>'
sheet += f'<conditionalFormatting sqref="G{DATA_START}:G{DATA_END}">'
sheet += '<cfRule type="dataBar" priority="4"><dataBar><cfvo type="min"/><cfvo type="max"/><color rgb="FF00A0E9"/></dataBar></cfRule>'
sheet += '</conditionalFormatting>'
sheet += f'<conditionalFormatting sqref="H{DATA_START}:H{DATA_END}">'
sheet += '<cfRule type="dataBar" priority="5"><dataBar><cfvo type="min"/><cfvo type="max"/><color rgb="FF00A0E9"/></dataBar></cfRule>'
sheet += '</conditionalFormatting>'

sheet += '<sheetData>'

# Row 1: title
sheet += '<row r="1" ht="32" customHeight="1">'
sheet += f'<c r="A1" t="s" s="12"><v>0</v></c>'
for i in range(2, 12):
    sheet += f'<c r="{col_letter(i)}1" s="12"/>'
sheet += '</row>'

# Row 2: 说明
sheet += '<row r="2" ht="18" customHeight="1">'
sheet += f'<c r="A2" t="s" s="0"><v>1</v></c>'
for i in range(2, 12):
    sheet += f'<c r="{col_letter(i)}2" s="0"/>'
sheet += '</row>'

# Row 3: 评分标准
sheet += '<row r="3" ht="18" customHeight="1">'
sheet += f'<c r="A3" t="s" s="0"><v>2</v></c>'
for i in range(2, 12):
    sheet += f'<c r="{col_letter(i)}3" s="0"/>'
sheet += '</row>'

# Row 4: 班型(注: 略)
sheet += '<row r="4" ht="14" customHeight="1">'
for i in range(1, 12):
    sheet += f'<c r="{col_letter(i)}4" s="0"/>'
sheet += '</row>'

# Header row
sheet += f'<row r="{HEADER_ROW}" ht="32" customHeight="1">'
header_si = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
for ci, si in enumerate(header_si, 1):
    sheet += f'<c r="{col_letter(ci)}{HEADER_ROW}" t="s" s="4"><v>{si}</v></c>'
sheet += '</row>'

# Data rows
for r in range(DATA_START, DATA_END + 1):
    sheet += f'<row r="{r}" ht="22" customHeight="1">'
    # 序号
    sheet += f'<c r="A{r}" s="9"><f>ROW()-{DATA_START-1}</f><v></v></c>'
    # 学员
    sheet += f'<c r="B{r}" s="1" t="inlineStr"><is><t></t></is></c>'
    # 部门
    sheet += f'<c r="C{r}" s="1" t="inlineStr"><is><t></t></is></c>'
    # 岗位
    sheet += f'<c r="D{r}" s="1" t="inlineStr"><is><t></t></is></c>'
    # 提示词应用次数
    sheet += f'<c r="E{r}" s="9"><v></v></c>'
    # 业务节省时间
    sheet += f'<c r="F{r}" s="9"><v></v></c>'
    # 业务产出数量
    sheet += f'<c r="G{r}" s="9"><v></v></c>'
    # 同事复用次数
    sheet += f'<c r="H{r}" s="9"><v></v></c>'
    # 综合得分
    sheet += f'<c r="I{r}" s="8"><f>IF(COUNTA(E{r}:H{r})=0,"",MIN(25,ROUND(E{r}*0.5+F{r}*0.4+G{r}*0.3+H{r}*2,1)))</f><v></v></c>'
    # 排名
    sheet += f'<c r="J{r}" s="9"><f>IF(I{r}="","",RANK(I{r},$I${DATA_START}:$I${DATA_END},0))</f><v></v></c>'
    # 备注
    sheet += f'<c r="K{r}" s="1" t="inlineStr"><is><t></t></is></c>'
    sheet += '</row>'

# Sign-off area
cur = DATA_END + 2
sheet += f'<row r="{cur}" ht="22" customHeight="1">'
sheet += f'<c r="A{cur}" t="s" s="5"><v>14</v></c>'  # 项目组
for i in range(2, 12):
    sheet += f'<c r="{col_letter(i)}{cur}" s="5" t="inlineStr"><is><t></t></is></c>'
sheet += '</row>'
cur += 1
sheet += f'<row r="{cur}" ht="22" customHeight="1">'
sheet += f'<c r="A{cur}" t="s" s="5"><v>15</v></c>'  # 本表由学员本人填报...
for i in range(2, 12):
    sheet += f'<c r="{col_letter(i)}{cur}" s="5" t="inlineStr"><is><t></t></is></c>'
sheet += '</row>'

sheet += '</sheetData>'
sheet += '<mergeCells count="3"><mergeCell ref="A1:K1"/><mergeCell ref="A2:K2"/><mergeCell ref="A3:K3"/></mergeCells>'
sheet += '<pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>'
sheet += '<pageSetup orientation="landscape" paperSize="9" fitToWidth="1" fitToHeight="0"/>'
sheet += '</worksheet>'

with open(os.path.join(WORK, 'xl', 'worksheets', 'sheet1.xml'), 'w', encoding='utf-8') as f:
    f.write(sheet)

ct = open(os.path.join(WORK, '[Content_Types].xml'), encoding='utf-8').read()
if 'sharedStrings.xml' not in ct:
    ct = ct.replace(
        '<Override PartName="/xl/styles.xml"',
        '<Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxml-officedocument.spreadsheetml.sharedStrings+xml"/><Override PartName="/xl/styles.xml"'
    )
    with open(os.path.join(WORK, '[Content_Types].xml'), 'w', encoding='utf-8') as f:
        f.write(ct)

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
