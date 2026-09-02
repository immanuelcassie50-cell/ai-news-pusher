#!/usr/bin/env python3
"""
D-12 评审准备自我检查表.xlsx
结构：每人一份，三段式自检（评审前/评审中/评审后）
字段：阶段 / 序号 / 检查项 / 重要程度 / 自我评估 / 是否完成 / 备注
"""
import os, shutil, zipfile

SKILL_DIR = r"C:\Users\Administrator\.claude\skills\Excel表格处理"
TEMPLATE = os.path.join(SKILL_DIR, "templates", "minimal_xlsx")
WORK = r"C:\CC\temp\d12_work"
OUT = r"D:\Downloads\xinjian\德赛西威评审全流程PRD\产出物\02-评审实施\D-12-评审准备自我检查表（每人一份）.xlsx"

if os.path.exists(WORK):
    shutil.rmtree(WORK)
shutil.copytree(TEMPLATE, WORK)

# 共享字符串
SS = [
    '德赛西威 AI 赋能课程评审全流程 · 评审准备自我检查表（每人一份）',
    '说明：本表用于学员在评审前/中/后三阶段逐项自检，帮助降低评审事故率。重要程度：★ 必查 / ☆ 建议查 / ○ 选查。',
    '评审前自检（评审前 48 小时内完成）',
    '评审中自检（评审进行时）',
    '评审后自检（评审结束 24 小时内完成）',
    # 字段表头
    '阶段', '序号', '检查项', '重要程度', '自我评估(是/否/部分)', '完成情况', '备注',
    # 检查项 - 评审前
    '提示词模板（3-5 个）已完成并打印',
    '工具地图已定稿并打印',
    '场景化应用成果数据已收集完整（节省时间/实施数据）',
    'PPT/案例/说明书等课程包文件已就位',
    '信息安全脱敏已完成（公司名/人名/金额/产品代号/日期）',
    '评审指引已通读至少 1 遍',
    '试讲内容已对镜子或同伴演练 1 次',
    '评委姓名/打分维度/时长/地点已确认',
    '评审当天着装/资料/电脑/投影/网络已测试',
    '个人 AI 工具地图与提示词工具保持一致',
    '业务问题诊断/AI 方案/效果对比 3 段话能口头流利说出',
    '电子证书姓名/部门/编号已核对',
    # 评审中
    '按时到达评审现场，提前 15 分钟就位',
    '说课 5 步按顺序展开（业务诊断→AI 方案→提示词→效果对比→可复制性）',
    '试讲 6 条全部命中（聚焦/多样/亮点/首尾/不被打扰/同组衔接）',
    'AI 追问 5 问已准备好应对话术',
    '评委提问时先复述再回答，不抢答',
    '不超时（说课 5 分钟+试讲 10 分钟+AI 追问 5 分钟）',
    '评审过程不离开座位、不看手机',
    '评分表提交前再次确认姓名/课题',
    # 评审后
    '评审反馈已记录（评委建议+改进方向）',
    '优秀作品/提示词已收入个人作品集',
    '24 小时内完成 AI 陪跑数据填报',
    '48 小时内将获奖/改进信息同步给同组成员',
    '1 周内提交场景化应用成果最终版',
    '已加入项目内部交流群（评审后陪跑用）',
    '本项目个人产出与岗位 KPI 挂钩部分已记录',
    '下次内训师班报名意向已与 HRBP 沟通',
    # 重要程度
    '★ 必查', '☆ 建议查', '○ 选查',
    # 完成情况
    '已完成', '部分完成', '未开始', '不适用',
    '是', '否', '部分',
    '打印日期：',
    '学员签名：',
    '评委确认：',
    '日期：',
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
  <numFmts count="1"><numFmt numFmtId="164" formatCode="0"/></numFmts>
  <fonts count="6">
    <font><sz val="11"/><name val="Calibri"/><color rgb="00000000"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="000000FF"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="00000000"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="00008000"/></font>
    <font><sz val="11"/><name val="Calibri"/><b/><color rgb="00FFFFFF"/></font>
    <font><sz val="12"/><name val="Calibri"/><b/><color rgb="00003D7A"/></font>
  </fonts>
  <fills count="6">
    <fill><patternFill patternType="none"/></fill>
    <fill><patternFill patternType="gray125"/></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="00003D7A"/><bgColor indexed="64"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="0000A0E9"/><bgColor indexed="64"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="00F4F6F9"/><bgColor indexed="64"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="00F37021"/><bgColor indexed="64"/></patternFill></fill>
  </fills>
  <borders count="2">
    <border><left/><right/><top/><bottom/><diagonal/></border>
    <border><left style="thin"><color rgb="00003D7A"/></left><right style="thin"><color rgb="00003D7A"/></right><top style="thin"><color rgb="00003D7A"/></top><bottom style="thin"><color rgb="00003D7A"/></bottom><diagonal/></border>
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
    <xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0" applyNumberFormat="1" applyAlignment="1"><alignment horizontal="center" vertical="center"/></xf>
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

# Sheet layout
# Row 1: title (merged A1:G1)
# Row 2: 说明
# Row 3: blank
# Row 4: 评审前 section header (merged A4:G4, 智能青)
# Row 5: 表头
# Row 6-17: 评审前 12 项
# Row 18: 评审中 section header
# Row 19: 表头(?)
# Actually structure: 1 title + 1 说明 + 1 blank + 1 section header + 1 col header + N rows
# Use single header at row 5, section dividers as separate "section header" rows with merged cells.
# Simpler: keep one header at row 5, then sections have A=阶段, B=序号, C=检查项 ...

# Re-plan:
# Row 1: title (merged A:G)
# Row 2: 说明
# Row 3: blank
# Row 4: 评审前 (merged A:G, 智能青背景)  -- 阶段 banner
# Row 5: 表头 (阶段/序号/检查项/重要程度/自我评估/完成情况/备注)
# Row 6-17: 评审前 12 项
# Row 18: 评审中 banner
# Row 19: 表头 (重复 or skip)
# For simplicity, repeat column headers every section.

HEADER_ROW = 5
DATA_START = 6

# 评审前: 12 项, indices in SS for content: 9..20
# 评审中: 8 项, indices in SS for content: 21..28
# 评审后: 9 项, indices in SS for content: 29..37

# 阶段名称
PHASES = [
    ('评审前自检', 4, [(9, '★'), (10, '★'), (11, '★'), (12, '★'), (13, '★'), (14, '★'), (15, '★'), (16, '☆'), (17, '☆'), (18, '☆'), (19, '☆'), (20, '○')]),
    ('评审中自检', 3, [(21, '★'), (22, '★'), (23, '★'), (24, '★'), (25, '★'), (26, '★'), (27, '☆'), (28, '☆')]),
    ('评审后自检', 3, [(29, '★'), (30, '★'), (31, '★'), (32, '★'), (33, '★'), (34, '☆'), (35, '☆'), (36, '○'), (37, '○')]),
]

# Sign-off area at bottom
SIGNOFF_ROW = 50

# Column widths
cols_xml = '<cols>'
widths = [14, 6, 38, 12, 16, 12, 18]
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

# Auto filter only on the data range
sheet += f'<autoFilter ref="A{HEADER_ROW}:G{SIGNOFF_ROW-2}"/>'

# Conditional format: 自我评估 = "是" green, "否" red, "部分" yellow
# Use a color scale on column E (5)
sheet += f'<conditionalFormatting sqref="E6:E{SIGNOFF_ROW-2}">'
# Manual dxfs would be needed; instead use color scale based on the values
# Simpler: use iconSet
sheet += '<cfRule type="iconSet" priority="1"><iconSet iconSet="3TrafficLights1" showValue="1"><cfvo type="text" val="是"/><cfvo type="text" val="部分"/><cfvo type="text" val="否"/></iconSet></cfRule>'
sheet += '</conditionalFormatting>'

sheet += '<sheetData>'

# Row 1: title
sheet += '<row r="1" ht="32" customHeight="1">'
sheet += f'<c r="A1" t="s" s="12"><v>0</v></c>'
for i in range(2, 8):
    sheet += f'<c r="{col_letter(i)}1" s="12"/>'
sheet += '</row>'

# Row 2: 说明
sheet += '<row r="2" ht="18" customHeight="1">'
sheet += f'<c r="A2" t="s" s="0"><v>1</v></c>'
for i in range(2, 8):
    sheet += f'<c r="{col_letter(i)}2" s="0"/>'
sheet += '</row>'

# Row 3: blank
sheet += '<row r="3" ht="10" customHeight="1">'
for i in range(1, 8):
    sheet += f'<c r="{col_letter(i)}3" s="0"/>'
sheet += '</row>'

# Header row
sheet += f'<row r="{HEADER_ROW}" ht="28" customHeight="1">'
for ci, si in enumerate([5, 6, 7, 8, 9, 10, 11], 1):  # 阶段,序号,检查项,重要程度,自我评估,完成情况,备注
    sheet += f'<c r="{col_letter(ci)}{HEADER_ROW}" t="s" s="4"><v>{si}</v></c>'
sheet += '</row>'

cur_row = DATA_START
for phase_name_si, _, items in PHASES:
    # Phase banner row
    sheet += f'<row r="{cur_row}" ht="22" customHeight="1">'
    sheet += f'<c r="A{cur_row}" t="s" s="12"><v>{phase_name_si}</v></c>'
    for i in range(2, 8):
        sheet += f'<c r="{col_letter(i)}{cur_row}" s="12"/>'
    sheet += '</row>'
    cur_row += 1
    # Items
    for idx, (content_si, importance_str) in enumerate(items, 1):
        sheet += f'<row r="{cur_row}" ht="28" customHeight="1">'
        sheet += f'<c r="A{cur_row}" t="s" s="0"><v>{phase_name_si}</v></c>'  # 阶段 name
        sheet += f'<c r="B{cur_row}" s="9"><f>ROW()-{cur_row}+COUNTIF($A${DATA_START}:A{cur_row-1},A{cur_row})*0+{idx}</f><v>{idx}</v></c>'  # 序号 - keep static
        # Actually simpler: static ordinal
        sheet = sheet.replace(
            f'<c r="B{cur_row}" s="9"><f>ROW()-{cur_row}+COUNTIF($A${DATA_START}:A{cur_row-1},A{cur_row})*0+{idx}</f><v>{idx}</v></c>',
            f'<c r="B{cur_row}" s="9"><v>{idx}</v></c>'
        )
        sheet += f'<c r="C{cur_row}" t="s" s="5"><v>{content_si}</v></c>'  # 检查项
        sheet += f'<c r="D{cur_row}" t="s" s="7"><v>{38 if importance_str=="★" else (39 if importance_str=="☆" else 40)}</v></c>'  # 重要程度
        sheet += f'<c r="E{cur_row}" s="1" t="inlineStr"><is><t></t></is></c>'  # 自我评估 (dropdown later)
        sheet += f'<c r="F{cur_row}" s="1" t="inlineStr"><is><t></t></is></c>'  # 完成情况
        sheet += f'<c r="G{cur_row}" s="1" t="inlineStr"><is><t></t></is></c>'  # 备注
        sheet += '</row>'
        cur_row += 1

# Sign-off area
sheet += f'<row r="{cur_row}" ht="14" customHeight="1">'
for i in range(1, 8):
    sheet += f'<c r="{col_letter(i)}{cur_row}" s="0"/>'
sheet += '</row>'
cur_row += 1

# Print date / Signature rows
signoff_pairs = [
    ('打印日期：', 41),
    ('学员签名：', 42),
    ('评委确认：', 43),
    ('日期：', 44),
]
for label_si, _ in signoff_pairs:
    sheet += f'<row r="{cur_row}" ht="24" customHeight="1">'
    sheet += f'<c r="A{cur_row}" t="s" s="5"><v>{label_si}</v></c>'
    for i in range(2, 8):
        sheet += f'<c r="{col_letter(i)}{cur_row}" s="5" t="inlineStr"><is><t></t></is></c>'
    sheet += '</row>'
    cur_row += 1

sheet += '</sheetData>'
sheet += f'<mergeCells count="4"><mergeCell ref="A1:G1"/><mergeCell ref="A2:G2"/><mergeCell ref="A{cur_row-len(signoff_pairs)-1}:G{cur_row-len(signoff_pairs)-1}"/><mergeCell ref="A{cur_row-len(signoff_pairs)}:G{cur_row-1}"/></mergeCells>'

# Actually the mergeCells is getting messy. Let me only merge the title and the section banners we already created.
# Replace with simpler: just merge A1:G1
sheet = sheet.replace(
    f'<mergeCells count="4"><mergeCell ref="A1:G1"/><mergeCell ref="A2:G2"/><mergeCell ref="A{cur_row-len(signoff_pairs)-1}:G{cur_row-len(signoff_pairs)-1}"/><mergeCell ref="A{cur_row-len(signoff_pairs)}:G{cur_row-1}"/></mergeCells>',
    '<mergeCells count="1"><mergeCell ref="A1:G1"/></mergeCells>'
)

sheet += '<pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>'
sheet += '<pageSetup orientation="portrait" paperSize="9" fitToWidth="1" fitToHeight="0"/>'
sheet += '</worksheet>'

with open(os.path.join(WORK, 'xl', 'worksheets', 'sheet1.xml'), 'w', encoding='utf-8') as f:
    f.write(sheet)

# Add sharedStrings to [Content_Types].xml
ct = open(os.path.join(WORK, '[Content_Types].xml'), encoding='utf-8').read()
if 'sharedStrings.xml' not in ct:
    ct = ct.replace(
        '<Override PartName="/xl/styles.xml"',
        '<Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxml-officedocument.spreadsheetml.sharedStrings+xml"/><Override PartName="/xl/styles.xml"'
    )
    with open(os.path.join(WORK, '[Content_Types].xml'), 'w', encoding='utf-8') as f:
        f.write(ct)

# Pack
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
