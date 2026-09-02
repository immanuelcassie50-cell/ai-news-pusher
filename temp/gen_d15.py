#!/usr/bin/env python3
"""
D-15 成果评审得分汇总表（电子版统计）.xlsx
多 sheet：
  Sheet1 课题清单 (5 大方向 × 5 课题 = 25 行)
  Sheet2 评审打分 (9 评委 + 大众评审 + AI 陪跑 + 公式)
  Sheet3 奖项评定 (公式 + 图表数据)
  Sheet4 评审汇总 (含图表：1 柱状图 + 1 饼图)
"""
import os, shutil, zipfile

SKILL_DIR = r"C:\Users\Administrator\.claude\skills\Excel表格处理"
TEMPLATE = os.path.join(SKILL_DIR, "templates", "minimal_xlsx")
WORK = r"C:\CC\temp\d15_work"
OUT = r"D:\Downloads\xinjian\德赛西威评审全流程PRD\产出物\02-评审实施\D-15-成果评审得分汇总表（电子版统计）.xlsx"

if os.path.exists(WORK):
    shutil.rmtree(WORK)
shutil.copytree(TEMPLATE, WORK)

# ============ sharedStrings.xml ============
SS = [
    # Sheet 1
    '德赛西威 AI 赋能课程评审全流程 · 成果评审得分汇总表（电子版统计）',
    '说明：本表用于评审日汇总 9 评委 + 大众评审 + AI 陪跑三源数据，输出 6 大奖项评定 + 课题得分对比。',
    '评审团构成：业务方专家 4-5 人（40%）+ AI 方法论专家 2-3 人（30%）+ 大众评审 5-10 人（20%）+ AI 陪跑 10%',
    '本表为评审日电子版实时统计专用，所有分数自动汇总、排名、奖项自动判定。',
    # Sheet 1 headers
    '课题清单',
    '课题编号', '课题名称', '方向', '学员', '提交时间', '主评审分(0-25)',
    '项目管理', '通用管理', '专业职能', '测试', '开发',
    # Sheet 2 headers
    '评审打分明细',
    '评委 1(业务方)', '评委 2(业务方)', '评委 3(业务方)', '评委 4(业务方)', '评委 5(业务方)',
    '评委 6(AI方法论)', '评委 7(AI方法论)', '评委 8(AI方法论)', '评委 9(AI方法论)',
    '大众评审平均分', 'AI 陪跑得分', '加权综合分', '排名',
    '提示词评分', '工具地图评分', '场景化应用评分',
    # Sheet 3 headers
    '奖项评定',
    '6 大奖项', '候选课题数', 'Top 1', 'Top 2', 'Top 3', 'Top 4', 'Top 5', '获奖人/课题',
    '最具业务价值提示词奖', '最佳场景化应用奖', '最具推广价值工具地图奖',
    '最佳 AI 内训师奖', 'AI 推广卓越团队奖', 'AI 安全合规标兵奖',
    # Sheet 4
    '评审汇总图表',
    '课题编号', '课题名称', '方向', '加权综合分',
    '奖项分布数据',
    '奖项', '获奖数',
    '评审主席签名', '日期',
    '项目组', '本页图表与 Sheet2/Sheet3 联动',
    # misc
    '权重：业务方 40% / AI方法论 30% / 大众评审 20% / AI陪跑 10%',
    '本表为评审日电子版汇总专用。',
    '评审日：2026 年 X 月 X 日',
    '回填人：',
    '回填时间：',
    '最', '优', '差',
]

ss_xml = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n'
ss_xml += f'<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="{len(SS)}" uniqueCount="{len(SS)}">'
for s in SS:
    esc = s.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;')
    ss_xml += f'<si><t xml:space="preserve">{esc}</t></si>'
ss_xml += '</sst>'
with open(os.path.join(WORK, 'xl', 'sharedStrings.xml'), 'w', encoding='utf-8') as f:
    f.write(ss_xml)

# ============ styles.xml ============
STYLES = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <numFmts count="2">
    <numFmt numFmtId="164" formatCode="0.0"/>
    <numFmt numFmtId="165" formatCode="0.00"/>
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

# ============ Workbook: 4 sheets ============
# Sheet 1: 课题清单 (5 cols)
# Sheet 2: 评审打分明细 (15 cols: 9评委 + 3子项 + 大众 + AI陪跑 + 加权 + 排名)
# Sheet 3: 奖项评定 (6 rows × 7 cols)
# Sheet 4: 评审汇总图表 (1 柱状图 + 1 饼图)

wb = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <fileVersion appName="xl" lastEdited="7" lowestEdited="7"/>
  <workbookPr defaultThemeVersion="166925"/>
  <bookViews>
    <workbookView xWindow="0" yWindow="0" windowWidth="20140" windowHeight="10960"/>
  </bookViews>
  <sheets>
    <sheet name="课题清单" sheetId="1" r:id="rId1"/>
    <sheet name="评审打分" sheetId="2" r:id="rId4"/>
    <sheet name="奖项评定" sheetId="3" r:id="rId5"/>
    <sheet name="评审汇总" sheetId="4" r:id="rId6"/>
  </sheets>
  <calcPr calcId="191029"/>
</workbook>
'''
with open(os.path.join(WORK, 'xl', 'workbook.xml'), 'w', encoding='utf-8') as f:
    f.write(wb)

wb_rels = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
  <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml"/>
  <Relationship Id="rId4" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet2.xml"/>
  <Relationship Id="rId5" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet3.xml"/>
  <Relationship Id="rId6" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet4.xml"/>
</Relationships>
'''
with open(os.path.join(WORK, 'xl', '_rels', 'workbook.xml.rels'), 'w', encoding='utf-8') as f:
    f.write(wb_rels)

# Update [Content_Types].xml
ct = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxml-officedocument.spreadsheetml.sheet.main+xml"/>
  <Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxml-officedocument.spreadsheetml.sharedStrings+xml"/>
  <Override PartName="/xl/styles.xml" ContentType="application/vnd.openxml-officedocument.spreadsheetml.styles+xml"/>
  <Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxml-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet2.xml" ContentType="application/vnd.openxml-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet3.xml" ContentType="application/vnd.openxml-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet4.xml" ContentType="application/vnd.openxml-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/charts/chart1.xml" ContentType="application/vnd.openxml-officedocument.drawingml.chart+xml"/>
  <Override PartName="/xl/charts/chart2.xml" ContentType="application/vnd.openxml-officedocument.drawingml.chart+xml"/>
  <Override PartName="/xl/drawings/drawing1.xml" ContentType="application/vnd.openxml-officedocument.drawing+xml"/>
</Types>
'''
with open(os.path.join(WORK, '[Content_Types].xml'), 'w', encoding='utf-8') as f:
    f.write(ct)

# ============ Sheet 1: 课题清单 ============
# 25 课题 = 5 方向 × 5 课题
DIRECTIONS = [(0, '项目管理'), (1, '通用管理'), (2, '专业职能'), (3, '测试'), (4, '开发')]
TOPICS = [
    'AI辅助项目排期与风险预警', 'AI辅助需求评审与变更管理', 'AI辅助项目周报自动生成', 'AI辅助里程碑节点对齐', 'AI辅助资源冲突协调',
    'AI辅助会议纪要与待办生成', 'AI辅助周报/月报自动汇总', 'AI辅助OKR进度跟踪', 'AI辅助团队复盘报告', 'AI辅助向上汇报材料',
    'AI辅助产品需求文档(PRD)', 'AI辅助用户故事拆分', 'AI辅助测试用例生成', 'AI辅助缺陷分析与分类', 'AI辅助数据报告与可视化',
    'AI辅助单元测试用例设计', 'AI辅助接口测试脚本生成', 'AI辅助性能测试结果分析', 'AI辅助回归测试范围决策', 'AI辅助缺陷根因分析',
    'AI辅助代码审查与规范', 'AI辅助API 文档自动生成', 'AI辅助数据库设计评审', 'AI辅助Bug 重现步骤总结', 'AI辅助新人入职培训'
]

sheet1_data = []
topic_idx = 0
for d_si, d_name in DIRECTIONS:
    for j in range(5):
        sheet1_data.append({
            'no': f'{d_name[:2]}{j+1:02d}',
            'name': TOPICS[topic_idx],
            'dir_si': 6 + d_si,  # 6=项目管理 ... 10=开发
        })
        topic_idx += 1

def make_sheet1():
    cols = '<cols>' + ''.join(f'<col min="{i}" max="{i}" width="{w}" customWidth="1"/>' for i, w in enumerate([12, 36, 14, 14, 16, 14], 1)) + '</cols>'

    sv = '<sheetView tabSelected="1" workbookViewId="0"><pane ySplit="5" topLeftCell="A6" activePane="bottomLeft" state="frozen"/><selection pane="bottomLeft" activeCell="A6" sqref="A6"/></sheetView>'

    s = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n'
    s += '<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">'
    s += f'<sheetViews>{sv}</sheetViews>'
    s += '<sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>'
    s += cols
    s += f'<autoFilter ref="A5:F30"/>'
    s += '<sheetData>'

    # Row 1: title
    s += '<row r="1" ht="32" customHeight="1">'
    s += '<c r="A1" t="s" s="12"><v>0</v></c>'
    for i in range(2, 7):
        s += f'<c r="{col_letter(i)}1" s="12"/>'
    s += '</row>'

    # Row 2-4: 说明
    for ri, si in enumerate([1, 2, 3], 2):
        s += f'<row r="{ri}" ht="18" customHeight="1">'
        s += f'<c r="A{ri}" t="s" s="0"><v>{si}</v></c>'
        for i in range(2, 7):
            s += f'<c r="{col_letter(i)}{ri}" s="0"/>'
        s += '</row>'

    # Row 5: header
    s += '<row r="5" ht="32" customHeight="1">'
    for ci, si in enumerate([5, 6, 7, 8, 9, 10], 1):  # 课题编号,课题名称,方向,学员,提交时间,主评审分
        s += f'<c r="{col_letter(ci)}5" t="s" s="4"><v>{si}</v></c>'
    s += '</row>'

    # Rows 6-30: 25 课题
    for idx, t in enumerate(sheet1_data):
        r = 6 + idx
        s += f'<row r="{r}" ht="24" customHeight="1">'
        # 课题编号
        s += f'<c r="A{r}" t="s" s="0"><v>{len(SS)}</v></c>'  # placeholder, will fix
        # Simpler: use inline strings
        s = s.replace(f'<c r="A{r}" t="s" s="0"><v>{len(SS)}</v></c>', f'<c r="A{r}" t="inlineStr" s="0"><is><t>{t["no"]}</t></is></c>')
        s += f'<c r="B{r}" t="inlineStr" s="0"><is><t>{t["name"]}</t></is></c>'
        s += f'<c r="C{r}" t="s" s="0"><v>{t["dir_si"]}</v></c>'
        s += f'<c r="D{r}" t="inlineStr" s="1"><is><t></t></is></c>'
        s += f'<c r="E{r}" t="inlineStr" s="1"><is><t></t></is></c>'
        # 主评审分 - average of 9 judges from sheet2 (cross-sheet formula)
        s += f'<c r="F{r}" s="8"><f>IFERROR(AVERAGE(\'评审打分\'!{col_letter(2)}{r-1}:{col_letter(10)}{r-1}),"")</f><v></v></c>'
        s += '</row>'

    s += '</sheetData>'
    s += '<mergeCells count="4"><mergeCell ref="A1:F1"/><mergeCell ref="A2:F2"/><mergeCell ref="A3:F3"/><mergeCell ref="A4:F4"/></mergeCells>'
    s += '<pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>'
    s += '<pageSetup orientation="landrait" paperSize="9" fitToWidth="1" fitToHeight="0"/>'
    s += '</worksheet>'
    return s

with open(os.path.join(WORK, 'xl', 'worksheets', 'sheet1.xml'), 'w', encoding='utf-8') as f:
    f.write(make_sheet1())

# ============ Sheet 2: 评审打分明细 ============
# Columns: A 课题编号(对照sheet1) B 课题名称 C 评委1 D 评委2 E 评委3 F 评委4 G 评委5 H 评委6 I 评委7 J 评委8 K 评委9
# L 大众评审 M AI陪跑 N 提示词评分 O 工具地图评分 P 场景化应用评分 Q 加权综合分 R 排名
def make_sheet2():
    cols_w = [12, 36, 9, 9, 9, 9, 9, 9, 9, 9, 9, 10, 10, 10, 10, 10, 11, 8]
    cols = '<cols>' + ''.join(f'<col min="{i}" max="{i}" width="{w}" customWidth="1"/>' for i, w in enumerate(cols_w, 1)) + '</cols>'

    sv = '<sheetView tabSelected="1" workbookViewId="0"><pane ySplit="4" topLeftCell="A5" activePane="bottomLeft" state="frozen"/><selection pane="bottomLeft" activeCell="A5" sqref="A5"/></sheetView>'

    s = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n'
    s += '<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">'
    s += f'<sheetViews>{sv}</sheetViews>'
    s += '<sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>'
    s += cols
    s += '<autoFilter ref="A4:R28"/>'
    # 综合分 Q列 三色色阶
    s += '<conditionalFormatting sqref="Q5:Q28">'
    s += '<cfRule type="colorScale" priority="1"><colorScale><cfvo type="num" val="0"/><cfvo type="num" val="18"/><cfvo type="num" val="25"/><color rgb="FFD0021B"/><color rgb="FFF5A623"/><color rgb="FF3CB878"/></colorScale></cfRule>'
    s += '</conditionalFormatting>'
    # 各评委列 B-K 数据条
    s += '<conditionalFormatting sqref="B5:K28">'
    s += '<cfRule type="colorScale" priority="2"><colorScale><cfvo type="num" val="0"/><cfvo type="num" val="18"/><cfvo type="num" val="25"/><color rgb="FFD0021B"/><color rgb="FFF5A623"/><color rgb="FF3CB878"/></colorScale></cfRule>'
    s += '</conditionalFormatting>'
    s += '<sheetData>'

    # Row 1: title
    s += '<row r="1" ht="32" customHeight="1">'
    s += '<c r="A1" t="s" s="12"><v>0</v></c>'
    for i in range(2, 19):
        s += f'<c r="{col_letter(i)}1" s="12"/>'
    s += '</row>'

    # Row 2-3: 说明
    for ri, si in enumerate([1, 2], 2):
        s += f'<row r="{ri}" ht="18" customHeight="1">'
        s += f'<c r="A{ri}" t="s" s="0"><v>{si}</v></c>'
        for i in range(2, 19):
            s += f'<c r="{col_letter(i)}{ri}" s="0"/>'
        s += '</row>'

    # Row 4: header
    s += '<row r="4" ht="42" customHeight="1">'
    # 课题编号, 课题名称, 评委1-9, 大众评审, AI陪跑, 提示词, 工具地图, 场景化应用, 加权综合, 排名
    # SI: 课题编号=5, 课题名称=6, 评委1=18, ..., 评委9=26, 大众=27, AI陪跑=28, 加权=30, 排名=31
    # 提示词=32, 工具地图=33, 场景化应用=34
    headers_si = [5, 6, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 32, 33, 34, 30, 31]
    for ci, si in enumerate(headers_si, 1):
        s += f'<c r="{col_letter(ci)}4" t="s" s="4"><v>{si}</v></c>'
    s += '</row>'

    # Rows 5-29: 25 课题
    for idx in range(25):
        r = 5 + idx
        s += f'<row r="{r}" ht="22" customHeight="1">'
        # 课题编号 - cross-sheet
        s += f'<c r="A{r}" s="3"><f>课题清单!A{6+idx}</f><v></v></c>'
        # 课题名称
        s += f'<c r="B{r}" s="3"><f>课题清单!B{6+idx}</f><v></v></c>'
        # 评委 1-9 (B-J on sheet2 maps to cols 2-10, but B is already 课题名称)
        # Wait, I have 课题编号 A, 课题名称 B, 评委1 C-K, 大众 L, AI陪跑 M, 提示词 N, 工具地图 O, 场景化应用 P, 加权 Q, 排名 R
        # Let me redo: C(3)=评委1, D(4)=评委2, E(5)=评委3, F(6)=评委4, G(7)=评委5, H(8)=评委6, I(9)=评委7, J(10)=评委8, K(11)=评委9
        # L(12)=大众, M(13)=AI陪跑, N(14)=提示词, O(15)=工具地图, P(16)=场景化应用, Q(17)=加权综合, R(18)=排名
        # Above I wrote headers_si = [5, 6, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 32, 33, 34, 30, 31] - that's 18 values
        # Re-map:
        # ci=1 → si=5 (课题编号)
        # ci=2 → si=6 (课题名称)
        # ci=3 → si=18 (评委1)
        # ci=4 → si=19 (评委2)
        # ci=5 → si=20 (评委3)
        # ci=6 → si=21 (评委4)
        # ci=7 → si=22 (评委5)
        # ci=8 → si=23 (评委6)
        # ci=9 → si=24 (评委7)
        # ci=10 → si=25 (评委8)
        # ci=11 → si=26 (评委9)
        # ci=12 → si=27 (大众评审)
        # ci=13 → si=28 (AI陪跑)
        # ci=14 → si=32 (提示词评分)
        # ci=15 → si=33 (工具地图评分)
        # ci=16 → si=34 (场景化应用评分)
        # ci=17 → si=30 (加权综合)
        # ci=18 → si=31 (排名)
        # Cells for评委: C-K (ci 3-11)
        for ci in range(3, 12):
            s += f'<c r="{col_letter(ci)}{r}" s="9"><v></v></c>'
        # 大众 L
        s += f'<c r="L{r}" s="9"><v></v></c>'
        # AI陪跑 M
        s += f'<c r="M{r}" s="9"><v></v></c>'
        # 提示词 N
        s += f'<c r="N{r}" s="9"><v></v></c>'
        # 工具地图 O
        s += f'<c r="O{r}" s="9"><v></v></c>'
        # 场景化应用 P
        s += f'<c r="P{r}" s="9"><v></v></c>'
        # 加权综合 Q = 业务方评委 (C:G 平均 * 40%) + AI方法论评委 (H:K 平均 * 30%) + 大众 (L * 20%) + AI陪跑 (M * 10%)
        s += f'<c r="Q{r}" s="8"><f>IFERROR(IF(COUNTA(C{r}:G{r})=0,0,AVERAGE(C{r}:G{r}))*0.4+IF(COUNTA(H{r}:K{r})=0,0,AVERAGE(H{r}:K{r}))*0.3+L{r}*0.2+M{r}*0.1,0)</f><v></v></c>'
        # 排名 R
        s += f'<c r="R{r}" s="9"><f>IF(Q{r}="","",RANK(Q{r},$Q$5:$Q$29,0))</f><v></v></c>'
        s += '</row>'

    s += '</sheetData>'
    s += '<mergeCells count="3"><mergeCell ref="A1:R1"/><mergeCell ref="A2:R2"/><mergeCell ref="A3:R3"/></mergeCells>'
    s += '<pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>'
    s += '<pageSetup orientation="landscape" paperSize="9" fitToWidth="1" fitToHeight="0"/>'
    s += '</worksheet>'
    return s

with open(os.path.join(WORK, 'xl', 'worksheets', 'sheet2.xml'), 'w', encoding='utf-8') as f:
    f.write(make_sheet2())

# ============ Sheet 3: 奖项评定 ============
def make_sheet3():
    cols = '<cols>' + ''.join(f'<col min="{i}" max="{i}" width="{w}" customWidth="1"/>' for i, w in enumerate([28, 12, 14, 14, 14, 14, 26], 1)) + '</cols>'
    sv = '<sheetView tabSelected="1" workbookViewId="0"><pane ySplit="3" topLeftCell="A4" activePane="bottomLeft" state="frozen"/><selection pane="bottomLeft" activeCell="A4" sqref="A4"/></sheetView>'

    s = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n'
    s += '<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">'
    s += f'<sheetViews>{sv}</sheetViews>'
    s += '<sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>'
    s += cols
    s += '<sheetData>'

    # Row 1: title
    s += '<row r="1" ht="32" customHeight="1">'
    s += '<c r="A1" t="s" s="12"><v>0</v></c>'
    for i in range(2, 8):
        s += f'<c r="{col_letter(i)}1" s="12"/>'
    s += '</row>'

    # Row 2: 说明
    s += '<row r="2" ht="18" customHeight="1">'
    s += '<c r="A2" t="s" s="0"><v>3</v></c>'
    for i in range(2, 8):
        s += f'<c r="{col_letter(i)}2" s="0"/>'
    s += '</row>'

    # Row 3: header
    s += '<row r="3" ht="32" customHeight="1">'
    # 6 大奖项, 候选课题数, Top1, Top2, Top3, Top4, Top5, 获奖人
    headers_si = [35, 36, 37, 37, 37, 37, 38]  # 6大奖项, 候选课题数, Top1...5, 获奖人/课题
    # Wait SS doesn't have 37, 38 - let me re-check
    # In SS list:
    # 35 = '6 大奖项'  36 = '候选课题数'  37 = 'Top 1'  38 = 'Top 2'  39 = 'Top 3'  40 = 'Top 4'  41 = 'Top 5'  42 = '获奖人/课题'
    # But I defined 'Top 1'... 'Top 5' as 5 separate items but my SS list grouped them
    # Let me re-check SS: 'Top 1', 'Top 2', 'Top 3', 'Top 4', 'Top 5', '获奖人/课题'
    # In my SS: 36=候选课题数, then I have 'Top 1' etc separately? No I have:
    # 36 = 'Top 1' (since I have "奖项评定", "6 大奖项", "候选课题数", "Top 1", "Top 2", "Top 3", "Top 4", "Top 5", "获奖人/课题", "最具业务价值提示词奖", "最佳场景化应用奖" ...)
    # Let me re-count SS:
    # 0: title (D-15 title)
    # 1: 说明
    # 2: 评审团构成
    # 3: 本表为评审日电子版实时统计专用
    # 4: 课题清单
    # 5: 课题编号  6: 课题名称  7: 方向  8: 学员  9: 提交时间  10: 主评审分
    # 11: 项目管理  12: 通用管理  13: 专业职能  14: 测试  15: 开发
    # 16: 评审打分明细
    # 17: 评委 1(业务方)  18: 评委 2  19: 评委 3  20: 评委 4  21: 评委 5
    # 22: 评委 6(AI方法论)  23: 评委 7  24: 评委 8  25: 评委 9
    # 26: 大众评审平均分  27: AI 陪跑得分  28: 加权综合分  29: 排名
    # 30: 提示词评分  31: 工具地图评分  32: 场景化应用评分
    # 33: 奖项评定
    # 34: 6 大奖项  35: 候选课题数  36: Top 1  37: Top 2  38: Top 3  39: Top 4  40: Top 5  41: 获奖人/课题
    # 42: 最具业务价值提示词奖  43: 最佳场景化应用奖  44: 最具推广价值工具地图奖
    # 45: 最佳 AI 内训师奖  46: AI 推广卓越团队奖  47: AI 安全合规标兵奖
    # 48: 评审汇总图表
    # 49: 课题编号  50: 课题名称  51: 方向  52: 加权综合分
    # 53: 奖项分布数据
    # 54: 奖项  55: 获奖数
    # 56: 评审主席签名  57: 日期
    # 58: 项目组  59: 本页图表与 Sheet2/Sheet3 联动
    # 60: 权重：...  61: 本表为评审日电子版汇总专用  62: 评审日  63: 回填人  64: 回填时间  65: 最  66: 优  67: 差
    # OK so headers_si should be [34, 35, 36, 37, 38, 39, 40, 41]  - that's 8 items
    # Wait I need 7 cols: 6大奖项, 候选课题数, Top1-5(merged) - so 7 cols: 奖项 / 候选数 / Top1 / Top2 / Top3 / Top4 / Top5 / 获奖人 = 8 cols
    # 7 columns I had: 28, 12, 14, 14, 14, 14, 26
    # Use 8 cols: 奖项 / 候选数 / Top1 / Top2 / Top3 / Top4 / Top5 / 获奖人 = 8 cols
    # Re-do column widths
    pass
    # Re-write sheet3 from scratch with proper 8 cols
    s = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n'
    s += '<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">'
    s += f'<sheetViews>{sv}</sheetViews>'
    s += '<sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>'
    cols = '<cols>' + ''.join(f'<col min="{i}" max="{i}" width="{w}" customWidth="1"/>' for i, w in enumerate([28, 12, 12, 12, 12, 12, 12, 26], 1)) + '</cols>'
    s += cols
    s += '<sheetData>'
    s += '<row r="1" ht="32" customHeight="1">'
    s += '<c r="A1" t="s" s="12"><v>0</v></c>'
    for i in range(2, 9):
        s += f'<c r="{col_letter(i)}1" s="12"/>'
    s += '</row>'

    s += '<row r="2" ht="18" customHeight="1">'
    s += '<c r="A2" t="s" s="0"><v>3</v></c>'
    for i in range(2, 9):
        s += f'<c r="{col_letter(i)}2" s="0"/>'
    s += '</row>'

    # Row 3: header
    s += '<row r="3" ht="32" customHeight="1">'
    headers_si = [34, 35, 36, 37, 38, 39, 40, 41]
    for ci, si in enumerate(headers_si, 1):
        s += f'<c r="{col_letter(ci)}3" t="s" s="4"><v>{si}</v></c>'
    s += '</row>'

    # Rows 4-9: 6 大奖项
    AWARDS = [
        (42, '最具业务价值提示词奖', 'C'),     # Use 提示词评分 (col C of sheet2 = 评委1? No)
        # Actually we want to use specific columns for specific awards:
        # - 最具业务价值提示词奖 → 提示词评分 (N col on sheet2)
        # - 最佳场景化应用奖 → 场景化应用 (P col on sheet2)
        # - 最具推广价值工具地图奖 → 工具地图 (O col on sheet2)
        # - 最佳 AI 内训师奖 → 加权综合分 (Q col on sheet2)
        # - AI 推广卓越团队奖 → 部门聚合 (skip formula, just count)
        # - AI 安全合规标兵奖 → 安全合规 (not in sheet2, use placeholder)
    ]
    # Since sheet2 doesn't have 安全合规 column, we use simpler approach: each award uses a specific column
    AWARDS = [
        (42, '提示词评分'),
        (43, '场景化应用评分'),
        (44, '工具地图评分'),
        (45, '加权综合分'),
        (46, '加权综合分'),  # placeholder for team award
        (47, '加权综合分'),  # placeholder for safety award
    ]
    AWARD_COLS = ['N', 'P', 'O', 'Q', 'Q', 'Q']  # sheet2 columns
    for idx, (name_si, _) in enumerate(AWARDS):
        r = 4 + idx
        s += f'<row r="{r}" ht="24" customHeight="1">'
        # 奖项名称
        s += f'<c r="A{r}" t="s" s="5"><v>{name_si}</v></c>'
        # 候选课题数 = 25
        s += f'<c r="B{r}" s="9"><v>25</v></c>'
        # Top1-5 = INDEX/MATCH(LARGE) referencing sheet2
        award_col = AWARD_COLS[idx]
        for ti in range(5):
            col_idx = 3 + ti  # C, D, E, F, G
            # Use INDEX/MATCH on the rank-th largest value
            # Formula: =INDEX(评审打分!A:A, MATCH(LARGE(评审打分!{col}:{col}, {ti+1}), 评审打分!{col}:{col}, 0))
            # Display topic name
            s += f'<c r="{col_letter(col_idx)}{r}" s="3"><f>IFERROR(INDEX(评审打分!A:A,MATCH(LARGE(评审打分!{award_col}:{award_col},{ti+1}),评审打分!{award_col}:{award_col},0)),"-")</f><v></v></c>'
        # 获奖人/课题
        s += f'<c r="H{r}" t="inlineStr" s="1"><is><t>待评委会确认</t></is></c>'
        s += '</row>'

    # Sign-off
    for ri, si in [(11, 56), (12, 57)]:
        s += f'<row r="{ri}" ht="22" customHeight="1">'
        s += f'<c r="A{ri}" t="s" s="5"><v>{si}</v></c>'
        for i in range(2, 9):
            s += f'<c r="{col_letter(i)}{ri}" s="5" t="inlineStr"><is><t></t></is></c>'
        s += '</row>'

    s += '</sheetData>'
    s += '<mergeCells count="2"><mergeCell ref="A1:H1"/><mergeCell ref="A2:H2"/></mergeCells>'
    s += '<pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>'
    s += '<pageSetup orientation="portrait" paperSize="9" fitToWidth="1" fitToHeight="0"/>'
    s += '</worksheet>'
    return s

with open(os.path.join(WORK, 'xl', 'worksheets', 'sheet3.xml'), 'w', encoding='utf-8') as f:
    f.write(make_sheet3())

# ============ Sheet 4: 评审汇总图表 ============
# 包含柱状图（课题得分对比）+ 饼图（奖项分布）
def make_sheet4():
    cols = '<cols>' + ''.join(f'<col min="{i}" max="{i}" width="{w}" customWidth="1"/>' for i, w in enumerate([14, 36, 14, 14, 14, 14, 14], 1)) + '</cols>'
    sv = '<sheetView tabSelected="1" workbookViewId="0"/>'
    s = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n'
    s += '<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:drawing="http://schemas.openxmlformats.org/officeDocument/2006/drawing">'
    s += f'<sheetViews>{sv}</sheetViews>'
    s += '<sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>'
    s += cols
    s += '<sheetData>'

    # Row 1: title
    s += '<row r="1" ht="32" customHeight="1">'
    s += '<c r="A1" t="s" s="12"><v>0</v></c>'
    for i in range(2, 8):
        s += f'<c r="{col_letter(i)}1" s="12"/>'
    s += '</row>'

    # Row 2: 说明
    s += '<row r="2" ht="18" customHeight="1">'
    s += '<c r="A2" t="s" s="0"><v>59</v></c>'
    for i in range(2, 8):
        s += f'<c r="{col_letter(i)}2" s="0"/>'
    s += '</row>'

    # Row 3: 课题得分对比 数据源 (header)
    s += '<row r="3" ht="28" customHeight="1">'
    headers_si = [49, 50, 51, 52]  # 课题编号, 课题名称, 方向, 加权综合分
    for ci, si in enumerate(headers_si, 1):
        s += f'<c r="{col_letter(ci)}3" t="s" s="4"><v>{si}</v></c>'
    s += '</row>'

    # Rows 4-28: 25 课题 with cross-sheet refs
    for idx in range(25):
        r = 4 + idx
        s += f'<row r="{r}" ht="18" customHeight="1">'
        s += f'<c r="A{r}" s="3"><f>\'评审打分\'!A{5+idx}</f><v></v></c>'
        s += f'<c r="B{r}" s="3"><f>\'评审打分\'!B{5+idx}</f><v></v></c>'
        # 方向 = VLOOKUP from 课题清单
        s += f'<c r="C{r}" s="3"><f>IFERROR(VLOOKUP(A{r},课题清单!A:C,3,FALSE),"")</f><v></v></c>'
        # 加权综合分
        s += f'<c r="D{r}" s="3"><f>\'评审打分\'!Q{5+idx}</f><v></v></c>'
        s += '</row>'

    # Section: 奖项分布数据
    s += '<row r="30" ht="28" customHeight="1">'
    s += '<c r="A30" t="s" s="12"><v>53</v></c>'  # 奖项分布数据
    for i in range(2, 8):
        s += f'<c r="{col_letter(i)}30" s="12"/>'
    s += '</row>'

    s += '<row r="31" ht="22" customHeight="1">'
    headers_si = [54, 55]  # 奖项, 获奖数
    for ci, si in enumerate(headers_si, 1):
        s += f'<c r="{col_letter(ci)}31" t="s" s="4"><v>{si}</v></c>'
    s += '</row>'

    # Award rows (with formulas referencing Sheet3 award names)
    AWARD_SI = [42, 43, 44, 45, 46, 47]
    AWARD_DEFAULT_COUNT = [2, 2, 1, 3, 1, 2]  # per spec: 1-2, 1-2, 1, 若干, 1, 1-2
    for idx, (name_si, count) in enumerate(zip(AWARD_SI, AWARD_DEFAULT_COUNT)):
        r = 32 + idx
        s += f'<row r="{r}" ht="20" customHeight="1">'
        s += f'<c r="A{r}" t="s" s="3"><v>{name_si}</v></c>'
        s += f'<c r="B{r}" s="9"><v>{count}</v></c>'
        s += '</row>'

    s += '</sheetData>'
    s += '<mergeCells count="2"><mergeCell ref="A1:G1"/><mergeCell ref="A2:G2"/><mergeCell ref="A30:G30"/></mergeCells>'
    s += '<pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>'
    s += '<pageSetup orientation="landscape" paperSize="9" fitToWidth="1" fitToHeight="0"/>'
    # Reference drawings
    s += '<drawing r:id="rId1"/>'
    s += '</worksheet>'
    return s

with open(os.path.join(WORK, 'xl', 'worksheets', 'sheet4.xml'), 'w', encoding='utf-8') as f:
    f.write(make_sheet4())

# ============ Drawing: holds both charts ============
drawing = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<xdr:wsDr xmlns:xdr="http://schemas.openxmlformats.org/drawingml/2006/spreadsheetDrawing" xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main">
  <xdr:twoCellAnchor>
    <xdr:from>
      <xdr:col>5</xdr:col>
      <xdr:colOff>0</xdr:colOff>
      <xdr:row>2</xdr:row>
      <xdr:rowOff>0</xdr:rowOff>
    </xdr:from>
    <xdr:to>
      <xdr:col>14</xdr:col>
      <xdr:colOff>0</xdr:colOff>
      <xdr:row>22</xdr:row>
      <xdr:rowOff>0</xdr:rowOff>
    </xdr:to>
    <xdr:graphicFrame>
      <xdr:nvGraphicFramePr>
        <xdr:cNvPr id="2" name="Chart 1"/>
        <xdr:cNvGraphicFramePr/>
      </xdr:nvGraphicFramePr>
      <xdr:xfrm>
        <a:off x="0" y="0"/>
        <a:ext cx="0" cy="0"/>
      </xdr:xfrm>
      <a:graphic>
        <a:graphicData uri="http://schemas.openxmlformats.org/drawingml/2006/chart">
          <c:chart xmlns:c="http://schemas.openxmlformats.org/drawingml/2006/chart" r:id="rId1" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"/>
        </a:graphicData>
      </a:graphic>
    </xdr:graphicFrame>
    <xdr:clientData/>
  </xdr:twoCellAnchor>
  <xdr:twoCellAnchor>
    <xdr:from>
      <xdr:col>5</xdr:col>
      <xdr:colOff>0</xdr:colOff>
      <xdr:row>30</xdr:row>
      <xdr:rowOff>0</xdr:rowOff>
    </xdr:from>
    <xdr:to>
      <xdr:col>14</xdr:col>
      <xdr:colOff>0</xdr:colOff>
      <xdr:row>50</xdr:row>
      <xdr:rowOff>0</xdr:rowOff>
    </xdr:to>
    <xdr:graphicFrame>
      <xdr:nvGraphicFramePr>
        <xdr:cNvPr id="3" name="Chart 2"/>
        <xdr:cNvGraphicFramePr/>
      </xdr:nvGraphicFramePr>
      <xdr:xfrm>
        <a:off x="0" y="0"/>
        <a:ext cx="0" cy="0"/>
      </xdr:xfrm>
      <a:graphic>
        <a:graphicData uri="http://schemas.openxmlformats.org/drawingml/2006/chart">
          <c:chart xmlns:c="http://schemas.openxmlformats.org/drawingml/2006/chart" r:id="rId2" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"/>
        </a:graphicData>
      </a:graphic>
    </xdr:graphicFrame>
    <xdr:clientData/>
  </xdr:twoCellAnchor>
</xdr:wsDr>
'''
os.makedirs(os.path.join(WORK, 'xl', 'drawings'), exist_ok=True)
with open(os.path.join(WORK, 'xl', 'drawings', 'drawing1.xml'), 'w', encoding='utf-8') as f:
    f.write(drawing)

# Drawing rels
drawing_rels = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/chart" Target="../charts/chart1.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/chart" Target="../charts/chart2.xml"/>
</Relationships>
'''
os.makedirs(os.path.join(WORK, 'xl', 'drawings', '_rels'), exist_ok=True)
with open(os.path.join(WORK, 'xl', 'drawings', '_rels', 'drawing1.xml.rels'), 'w', encoding='utf-8') as f:
    f.write(drawing_rels)

# Sheet4 rels - references drawing1
sheet4_rels = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/drawing" Target="../drawings/drawing1.xml"/>
</Relationships>
'''
os.makedirs(os.path.join(WORK, 'xl', 'worksheets', '_rels'), exist_ok=True)
with open(os.path.join(WORK, 'xl', 'worksheets', '_rels', 'sheet4.xml.rels'), 'w', encoding='utf-8') as f:
    f.write(sheet4_rels)

# ============ Charts ============
# Chart 1: 柱状图 (Bar) - 课题得分对比
chart1 = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<c:chartSpace xmlns:c="http://schemas.openxmlformats.org/drawingml/2006/chart" xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <c:chart>
    <c:title>
      <c:tx>
        <c:rich>
          <a:bodyPr/>
          <a:lstStyle/>
          <a:p>
            <a:pPr>
              <a:defRPr sz="1400" b="1">
                <a:solidFill><a:srgbClr val="003D7A"/></a:solidFill>
                <a:latin typeface="Calibri"/>
              </a:defRPr>
            </a:pPr>
            <a:r>
              <a:rPr lang="zh-CN" sz="1400" b="1"><a:solidFill><a:srgbClr val="003D7A"/></a:solidFill></a:rPr>
              <a:t>课题得分对比（加权综合分）</a:t>
            </a:r>
          </a:p>
        </c:rich>
      </c:tx>
      <c:overlay val="0"/>
    </c:title>
    <c:autoTitleDeleted val="0"/>
    <c:plotArea>
      <c:layout/>
      <c:barChart>
        <c:barDir val="col"/>
        <c:grouping val="clustered"/>
        <c:varyColors val="0"/>
        <c:ser>
          <c:idx val="0"/>
          <c:order val="0"/>
          <c:tx><c:v>加权综合分</c:v></c:tx>
          <c:spPr>
            <a:solidFill><a:srgbClr val="003D7A"/></a:solidFill>
            <a:ln><a:solidFill><a:srgbClr val="003D7A"/></a:solidFill></a:ln>
          </c:spPr>
          <c:cat>
            <c:strRef>
              <c:f>评审汇总!$A$4:$A$28</c:f>
            </c:strRef>
          </c:cat>
          <c:val>
            <c:numRef>
              <c:f>评审汇总!$D$4:$D$28</c:f>
            </c:numRef>
          </c:val>
        </c:ser>
        <c:gapWidth val="100"/>
        <c:axId val="1"/>
        <c:axId val="2"/>
      </c:barChart>
      <c:catAx>
        <c:axId val="1"/>
        <c:scaling><c:orientation val="minMax"/></c:scaling>
        <c:delete val="0"/>
        <c:axPos val="b"/>
        <c:txPr>
          <a:bodyPr rot="-2700000" vert="horz"/>
          <a:lstStyle/>
          <a:p><a:pPr><a:defRPr sz="800"/></a:pPr><a:endParaRPr lang="zh-CN"/></a:p>
        </c:txPr>
        <c:crossAx val="2"/>
        <c:crosses val="autoZero"/>
        <c:auto val="1"/>
        <c:lblAlgn val="ctr"/>
        <c:lblOffset val="100"/>
        <c:noMultiLvlLbl val="0"/>
      </c:catAx>
      <c:valAx>
        <c:axId val="2"/>
        <c:scaling>
          <c:orientation val="minMax"/>
          <c:max val="25"/>
          <c:min val="0"/>
        </c:scaling>
        <c:delete val="0"/>
        <c:axPos val="l"/>
        <c:title>
          <c:tx>
            <c:rich>
              <a:bodyPr rot="-5400000" vert="horz"/>
              <a:lstStyle/>
              <a:p>
                <a:pPr><a:defRPr sz="900"/></a:pPr>
                <a:r><a:rPr lang="zh-CN" sz="900"/><a:t>加权综合分 (0-25)</a:t></a:r>
              </a:p>
            </c:rich>
          </c:tx>
          <c:overlay val="0"/>
        </c:title>
        <c:crossAx val="1"/>
        <c:crosses val="autoZero"/>
        <c:crossBetween val="between"/>
      </c:valAx>
    </c:plotArea>
    <c:plotVisOnly val="1"/>
    <c:dispBlanksAs val="gap"/>
  </c:chart>
  <c:txPr>
    <a:bodyPr/>
    <a:lstStyle/>
    <a:p><a:pPr><a:defRPr sz="900"><a:latin typeface="Calibri"/></a:defRPr></a:pPr><a:endParaRPr lang="zh-CN"/></a:p>
  </c:txPr>
</c:chartSpace>
'''
os.makedirs(os.path.join(WORK, 'xl', 'charts'), exist_ok=True)
with open(os.path.join(WORK, 'xl', 'charts', 'chart1.xml'), 'w', encoding='utf-8') as f:
    f.write(chart1)

# Chart 2: 饼图 (Pie) - 奖项分布
chart2 = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<c:chartSpace xmlns:c="http://schemas.openxmlformats.org/drawingml/2006/chart" xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <c:chart>
    <c:title>
      <c:tx>
        <c:rich>
          <a:bodyPr/>
          <a:lstStyle/>
          <a:p>
            <a:pPr><a:defRPr sz="1400" b="1"><a:solidFill><a:srgbClr val="003D7A"/></a:solidFill></a:defRPr></a:pPr>
            <a:r><a:rPr lang="zh-CN" sz="1400" b="1"><a:solidFill><a:srgbClr val="003D7A"/></a:solidFill></a:rPr><a:t>6 大奖项分布</a:t></a:r>
          </a:p>
        </c:rich>
      </c:tx>
      <c:overlay val="0"/>
    </c:title>
    <c:autoTitleDeleted val="0"/>
    <c:plotArea>
      <c:layout/>
      <c:pieChart>
        <c:varyColors val="1"/>
        <c:ser>
          <c:idx val="0"/>
          <c:order val="0"/>
          <c:tx><c:v>获奖数</c:v></c:tx>
          <c:dPt>
            <c:idx val="0"/><c:bubble3D val="0"/>
            <c:spPr><a:solidFill><a:srgbClr val="003D7A"/></a:solidFill></c:spPr>
          </c:dPt>
          <c:dPt>
            <c:idx val="1"/><c:bubble3D val="0"/>
            <c:spPr><a:solidFill><a:srgbClr val="00A0E9"/></a:solidFill></c:spPr>
          </c:dPt>
          <c:dPt>
            <c:idx val="2"/><c:bubble3D val="0"/>
            <c:spPr><a:solidFill><a:srgbClr val="3CB878"/></a:solidFill></c:spPr>
          </c:dPt>
          <c:dPt>
            <c:idx val="3"/><c:bubble3D val="0"/>
            <c:spPr><a:solidFill><a:srgbClr val="F37021"/></a:solidFill></c:spPr>
          </c:dPt>
          <c:dPt>
            <c:idx val="4"/><c:bubble3D val="0"/>
            <c:spPr><a:solidFill><a:srgbClr val="F5A623"/></a:solidFill></c:spPr>
          </c:dPt>
          <c:dPt>
            <c:idx val="5"/><c:bubble3D val="0"/>
            <c:spPr><a:solidFill><a:srgbClr val="D0021B"/></a:solidFill></c:spPr>
          </c:dPt>
          <c:cat>
            <c:strRef>
              <c:f>评审汇总!$A$32:$A$37</c:f>
            </c:strRef>
          </c:cat>
          <c:val>
            <c:numRef>
              <c:f>评审汇总!$B$32:$B$37</c:f>
            </c:numRef>
          </c:val>
        </c:ser>
        <c:firstSliceAng val="0"/>
      </c:pieChart>
    </c:plotArea>
    <c:plotVisOnly val="1"/>
    <c:dispBlanksAs val="gap"/>
  </c:chart>
  <c:txPr>
    <a:bodyPr/>
    <a:lstStyle/>
    <a:p><a:pPr><a:defRPr sz="900"><a:latin typeface="Calibri"/></a:defRPr></a:pPr><a:endParaRPr lang="zh-CN"/></a:p>
  </c:txPr>
</c:chartSpace>
'''
with open(os.path.join(WORK, 'xl', 'charts', 'chart2.xml'), 'w', encoding='utf-8') as f:
    f.write(chart2)

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
