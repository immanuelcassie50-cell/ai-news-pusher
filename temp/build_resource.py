#!/usr/bin/env python3
"""Build 03_资源配置优先级矩阵.xlsx"""
import shutil, os, html

OUT = 'D:/新课开发/经营/系列/03_战略实施——年度经营计划/Excel工具'
os.makedirs(OUT, exist_ok=True)

S = [
    # 0-3: Sheet names
    "资源配置优先级矩阵",
    "预算分配表",
    "人才资源匹配表",
    "资源协调会议记录表",
    # Sheet1 headers
    "序号",
    "项目/举措名称",
    "紧迫性评分(1-5)",
    "重要性评分(1-5)",
    "优先级等级",
    "建议资源配置",
    "资源配置方式",
    "负责人",
    "备注",
    #优先级等级说明
    "优先级等级说明",
    "A级（优先投入）：紧迫性≥4 且 重要性≥4",
    "B级（重点投入）：紧迫性≥3 且 重要性≥4 或 紧迫性≥4 且 重要性≥3",
    "C级（常规投入）：紧迫性≥2 且 重要性≥3",
    "D级（暂缓投入）：紧迫性≤2 或 重要性≤2",
    # 紧迫性/重要性说明
    "紧迫性评分标准",
    "5分：必须本月内完成",
    "4分：必须在季度内完成",
    "3分：必须在半年内完成",
    "2分：可在年度内灵活安排",
    "1分：可延期至下一年度",
    "重要性评分标准",
    "5分：直接支撑年度核心经营目标",
    "4分：支撑多个部门关键指标",
    "3分：支撑单一部门关键指标",
    "2分：优化现有流程",
    "1分：锦上添花类工作",
    # Sheet2 headers
    "预算项目",
    "预算科目",
    "预算金额(万元)",
    "预算类型",
    "资本性支出(CapEx)",
    "收益性支出(OpEx)",
    "关联策略/目标",
    "所属部门",
    "预算季度",
    "Q1",
    "Q2",
    "Q3",
    "Q4",
    "年度合计",
    "说明",
    # Sheet3 headers
    "岗位/角色",
    "计划人数",
    "现有人数",
    "缺口人数",
    "招聘难度",
    "招聘周期(月)",
    "预计到位时间",
    "所需技能",
    "培训需求",
    "优先级",
    "容易",
    "中等",
    "困难",
    # Sheet4 headers
    "会议主题",
    "会议日期",
    "参会人员",
    "讨论事项",
    "决议事项",
    "负责人",
    "完成时限",
    "执行状态",
    "待开始",
    "进行中",
    "已完成",
    # Example data - sheet1
    "示例：智慧科技",
    "拓展华南销售渠道",
    "4",
    "5",
    "A级",
    "300万元+2人",
    "预算+人员调配",
    "张总",
    "",
    "开发AI行业解决方案",
    "5",
    "4",
    "A级",
    "800万元+5人",
    "预算+人员调配",
    "研发部",
    "",
    "品牌传播矩阵建设",
    "3",
    "4",
    "B级",
    "200万元+1人",
    "预算",
    "市场部",
    "",
    "客户成功管理体系",
    "3",
    "3",
    "C级",
    "100万元+1人",
    "预算",
    "客服部",
    "",
    "员工培训体系",
    "2",
    "3",
    "D级",
    "50万元",
    "预算",
    "人力资源部",
    # Example data - sheet2
    "销售费用-渠道拓展",
    "渠道返利",
    "500",
    "收益性支出",
    "拓展销售渠道",
    "销售部",
    "250",
    "250",
    "0",
    "0",
    "拓展华南市场渠道合作",
    "产品研发-AI解决方案",
    "研发人力成本",
    "800",
    "收益性支出",
    "AI行业解决方案研发",
    "研发部",
    "200",
    "200",
    "200",
    "200",
    "组建AI专家团队",
    "市场费用-品牌传播",
    "市场活动费",
    "200",
    "收益性支出",
    "品牌传播矩阵",
    "市场部",
    "50",
    "50",
    "50",
    "50",
    "品牌曝光与认知度提升",
    "客服系统-客户成功",
    "系统建设费",
    "100",
    "资本性支出",
    "客户成功管理",
    "客服部",
    "30",
    "30",
    "20",
    "20",
    "客户满意度提升",
    "培训费用-人才发展",
    "培训费",
    "50",
    "收益性支出",
    "员工培训体系",
    "人力资源部",
    "15",
    "15",
    "10",
    "10",
    "员工能力提升",
    # Example data - sheet3
    "AI解决方案专家",
    "3",
    "1",
    "2",
    "困难",
    "3",
    "2026-04-01",
    "AI产品设计/算法调优",
    "需要外部培训",
    "高",
    "销售经理",
    "2",
    "1",
    "1",
    "容易",
    "1",
    "2026-02-01",
    "客户管理/谈判技巧",
    "内部培训",
    "高",
    "市场策划",
    "1",
    "0",
    "1",
    "中等",
    "2",
    "2026-03-01",
    "品牌营销/内容运营",
    "需要外部培训",
    "中",
    "客服专员",
    "2",
    "2",
    "0",
    "容易",
    "1",
    "2026-01-15",
    "客户服务/问题解决",
    "内部培训",
    "中",
    # Example data - sheet4
    "华南渠道拓展资源协调会",
    "2026-01-05",
    "张总/李经理/王经理",
    "讨论华南渠道合作方案",
    "确定首批30家渠道合作伙伴名单",
    "李经理",
    "2026-01-31",
    "待开始",
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
                '/tmp/res_work', dirs_exist_ok=True)

with open('/tmp/res_work/xl/sharedStrings.xml', 'w', encoding='utf-8') as f:
    f.write(build_shared_strings(S))

# ─── Workbook ─────────────────────────────────────────────────────────────────
wb_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <fileVersion appName="xl" lastEdited="7" lowestEdited="7"/>
  <workbookPr defaultThemeVersion="166925"/>
  <bookViews><workbookView xWindow="0" yWindow="0" windowWidth="20140" windowHeight="10960"/></bookViews>
  <sheets>
    <sheet name="资源配置优先级矩阵" sheetId="1" r:id="rId1"/>
    <sheet name="预算分配表" sheetId="2" r:id="rId4"/>
    <sheet name="人才资源匹配表" sheetId="3" r:id="rId5"/>
    <sheet name="资源协调会议记录表" sheetId="4" r:id="rId6"/>
  </sheets>
  <calcPr calcId="191029"/>
</workbook>'''
with open('/tmp/res_work/xl/workbook.xml', 'w', encoding='utf-8') as f:
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
with open('/tmp/res_work/xl/_rels/workbook.xml.rels', 'w', encoding='utf-8') as f:
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
with open('/tmp/res_work/[Content_Types].xml', 'w', encoding='utf-8') as f:
    f.write(ct_xml)

# ─── Styles ───────────────────────────────────────────────────────────────────
# Same 20 styles as previous files
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
with open('/tmp/res_work/xl/styles.xml', 'w', encoding='utf-8') as f:
    f.write(styles_xml)

# ─── Sheet 1: 资源配置优先级矩阵 ─────────────────────────────────────────────
# Columns: 序号, 名称, 紧迫性, 重要性, 优先级(公式), 资源配置, 方式, 负责人, 备注
s1_rows = []

# Title
s1_rows.append('<row r="1" ht="28" customHeight="1"><c r="A1" t="s" s="16" colspan="9"><v>0</v></c></row>')

# Scoring guide header
s1_rows.append(
    '<row r="2" ht="22" customHeight="1">'
    '<c r="A2" t="s" s="16"><v>14</v></c>'
    '<c r="B2" t="s" s="17" colspan="4"><v>15</v></c>'
    '</row>'
)

# Scoring criteria rows
urgency_items = [
    ("16","17"),("16","18"),("16","19"),("16","20"),("16","21")
]
for i, (cat_idx, item_idx) in enumerate(urgency_items):
    r = 3 + i
    s1_rows.append(
        '<row r="' + str(r) + '" ht="18" customHeight="1">'
        '<c r="A' + str(r) + '" t="s" s="17"><v>' + cat_idx + '</v></c>'
        '<c r="B' + str(r) + '" t="s" s="19"><v>' + item_idx + '</v></c>'
        '</row>'
    )

importance_start = 8
s1_rows.append(
    '<row r="' + str(importance_start) + '" ht="22" customHeight="1">'
    '<c r="A' + str(importance_start) + '" t="s" s="16"><v>22</v></c>'
    '<c r="B' + str(importance_start) + '" t="s" s="17" colspan="4"><v>23</v></c>'
    '</row>'
)
importance_items = [("24","25"),("24","26"),("24","27"),("24","28"),("24","29")]
for i, (cat_idx, item_idx) in enumerate(importance_items):
    r = importance_start + 1 + i
    s1_rows.append(
        '<row r="' + str(r) + '" ht="18" customHeight="1">'
        '<c r="A' + str(r) + '" t="s" s="17"><v>' + cat_idx + '</v></c>'
        '<c r="B' + str(r) + '" t="s" s="19"><v>' + item_idx + '</v></c>'
        '</row>'
    )

# Blank separator
blank_r = importance_start + 6
s1_rows.append('<row r="' + str(blank_r) + '"><c r="A' + str(blank_r) + '" t="s" s="0"><v></v></c></row>')

# Data table header
header_r = blank_r + 1
s1_rows.append(
    '<row r="' + str(header_r) + '" ht="22" customHeight="1">' +
    ''.join(f'<c r="{chr(65+j)}{header_r}" t="s" s="16"><v>{idx}</v></c>'
            for j, idx in enumerate(["4","5","6","7","8","9","10","11","12"])) +
    '</row>'
)

# Data rows with example + 5 empty input rows
data_r_start = header_r + 1
data = [
    ("59","60","61","62","63","64","65","66",""),
    ("67","68","69","70","71","72","73","74",""),
    ("75","76","77","78","79","80","81","82",""),
    ("83","84","85","86","87","88","89","90",""),
    ("91","92","93","94","95","96","97","98","99"),
]
for i, row_data in enumerate(data):
    r = data_r_start + i
    # A: seq num (formula), B-I: text values
    s1_rows.append(
        '<row r="' + str(r) + '" ht="22" customHeight="1">'
        '<c r="A' + str(r) + '" t="s" s="17"><f>ROW()-14</f><v></v></c>'
        + ''.join(f'<c r="{chr(65+j)}{r}" t="s" s="19"><v>{v}</v></c>' for j, v in enumerate(row_data, 1))
        + '</row>'
    )

# 5 more empty input rows
for i in range(5):
    r = data_r_start + len(data) + i
    s1_rows.append(
        '<row r="' + str(r) + '" ht="22" customHeight="1">'
        '<c r="A' + str(r) + '" t="s" s="17"><f>ROW()-14</f><v></v></c>'
        + ''.join(f'<c r="{chr(65+j)}{r}" t="s" s="1"><v></v></c>' for j in range(1, 9))
        + '</row>'
    )

sheet1_xml = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView workbookViewId="0">
      <pane ySplit="{header_r}" topLeftCell="A{header_r+1}" activePane="bottomLeft" state="frozen"/>
    </sheetView>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25"
    xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols>
    <col min="1" max="1" width="6" customWidth="1"/>
    <col min="2" max="2" width="30" customWidth="1"/>
    <col min="3" max="3" width="14" customWidth="1"/>
    <col min="4" max="4" width="14" customWidth="1"/>
    <col min="5" max="5" width="12" customWidth="1"/>
    <col min="6" max="6" width="20" customWidth="1"/>
    <col min="7" max="7" width="16" customWidth="1"/>
    <col min="8" max="8" width="12" customWidth="1"/>
    <col min="9" max="9" width="20" customWidth="1"/>
  </cols>
  <sheetData>
    {chr(10).join(s1_rows)}
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

with open('/tmp/res_work/xl/worksheets/sheet1.xml', 'w', encoding='utf-8') as f:
    f.write(sheet1_xml)

# ─── Sheet 2: 预算分配表 ──────────────────────────────────────────────────────
s2_rows = []

# Title
s2_rows.append('<row r="1" ht="28" customHeight="1"><c r="A1" t="s" s="16" colspan="14"><v>1</v></c></row>')

# Header
s2_header = [
    ("A","36"),("B","37"),("C","38"),("D","39"),("E","40"),("F","41"),
    ("G","42"),("H","43"),("I","44"),("J","45"),("K","46"),("L","47"),("M","48"),("N","49"),
]
s2_rows.append('<row r="2" ht="22" customHeight="1">' +
    ''.join(f'<c r="{col}2" t="s" s="16"><v>{idx}</v></c>' for col, idx in s2_header) +
    '</row>')

# Data rows
data_s2 = [
    ("100","101","102","103","40","104","105","106","107","108","109","110","111","112"),
    ("113","114","115","116","41","117","118","119","120","121","122","123","124","125"),
    ("126","127","128","129","40","130","131","132","133","134","135","136","137","138"),
    ("139","140","141","142","42","143","144","145","146","147","148","149","150","151"),
    ("152","153","154","155","43","156","157","158","159","160","161","162","163","164"),
]
for i, row_data in enumerate(data_s2):
    r = 3 + i
    # I-N columns have quarterly amounts - formula sum
    q_sum = f'SUM(I{r}:L{r})'
    s2_rows.append(
        '<row r="' + str(r) + '" ht="22" customHeight="1">' +
        ''.join(f'<c r="{chr(65+j)}{r}" t="s" s="19"><v>{v}</v></c>' for j, v in enumerate(row_data[:8])) +
        ''.join(f'<c r="{chr(65+j)}{r}" t="s" s="19"><v>{v}</v></c>' for j, v in enumerate(row_data[8:12], 8)) +
        f'<c r="M{r}" t="s" s="3"><f>{q_sum}</f><v></v></c>' +
        f'<c r="N{r}" t="s" s="19"><v>{row_data[13]}</v></c>' +
        '</row>'
    )

# 5 empty input rows
for i in range(5):
    r = 8 + i
    s2_rows.append(
        '<row r="' + str(r) + '" ht="22" customHeight="1">'
        + ''.join(f'<c r="{chr(65+j)}{r}" t="s" s="1"><v></v></c>' for j in range(8))
        + ''.join(f'<c r="{chr(65+j)}{r}" t="s" s="1"><v></v></c>' for j in range(8, 12))
        + f'<c r="M{r}" t="s" s="3"><f>SUM(I{r}:L{r})</f><v></v></c>'
        + f'<c r="N{r}" t="s" s="1"><v></v></c>'
        + '</row>'
    )

# Total row
total_r = 13
s2_rows.append(
    '<row r="' + str(total_r) + '" ht="22" customHeight="1">'
    '<c r="A' + str(total_r) + '" t="s" s="16"><v>49</v></c>'
    '<c r="B' + str(total_r) + '" t="s" s="16" colspan="2"><v>50</v></c>'
    + ''.join(f'<c r="{chr(65+j)}{total_r}" t="s" s="3"><f>SUM({chr(65+j)}3:{chr(65+j)}12)</f><v></v></c>' for j in range(2, 13))
    + '</row>'
)

sheet2_xml = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView workbookViewId="0">
      <pane ySplit="2" topLeftCell="A3" activePane="bottomLeft" state="frozen"/>
    </sheetView>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25"
    xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols>
    <col min="1" max="1" width="24" customWidth="1"/>
    <col min="2" max="2" width="18" customWidth="1"/>
    <col min="3" max="3" width="12" customWidth="1"/>
    <col min="4" max="4" width="14" customWidth="1"/>
    <col min="5" max="5" width="14" customWidth="1"/>
    <col min="6" max="6" width="24" customWidth="1"/>
    <col min="7" max="7" width="12" customWidth="1"/>
    <col min="8" max="8" width="8" customWidth="1"/>
    <col min="9" max="9" width="10" customWidth="1"/>
    <col min="10" max="10" width="10" customWidth="1"/>
    <col min="11" max="11" width="10" customWidth="1"/>
    <col min="12" max="12" width="10" customWidth="1"/>
    <col min="13" max="13" width="12" customWidth="1"/>
    <col min="14" max="14" width="20" customWidth="1"/>
  </cols>
  <sheetData>
    {chr(10).join(s2_rows)}
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

with open('/tmp/res_work/xl/worksheets/sheet2.xml', 'w', encoding='utf-8') as f:
    f.write(sheet2_xml)

# ─── Sheet 3: 人才资源匹配表 ─────────────────────────────────────────────────
s3_rows = []

s3_rows.append('<row r="1" ht="28" customHeight="1"><c r="A1" t="s" s="16" colspan="11"><v>2</v></c></row>')

s3_header = [
    ("A","51"),("B","52"),("C","53"),("D","54"),("E","55"),("F","56"),
    ("G","57"),("H","58"),("I","59"),("J","60"),("K","61"),
]
s3_rows.append('<row r="2" ht="22" customHeight="1">' +
    ''.join(f'<c r="{col}2" t="s" s="16"><v>{idx}</v></c>' for col, idx in s3_header) +
    '</row>')

data_s3 = [
    ("165","166","167","168","169","170","171","172","173","174","175"),
    ("176","177","178","179","180","181","182","183","184","185","186"),
    ("187","188","189","190","191","192","193","194","195","196","197"),
]
for i, row_data in enumerate(data_s3):
    r = 3 + i
    # D: 缺口人数 = B - C (formula)
    s3_rows.append(
        '<row r="' + str(r) + '" ht="22" customHeight="1">' +
        ''.join(f'<c r="{chr(65+j)}{r}" t="s" s="19"><v>{v}</v></c>' for j, v in enumerate(row_data[:3])) +
        f'<c r="D{r}" t="s" s="3"><f>B{r}-C{r}</f><v></v></c>' +
        ''.join(f'<c r="{chr(65+j)}{r}" t="s" s="19"><v>{v}</v></c>' for j, v in enumerate(row_data[4:], 4)) +
        '</row>'
    )

# Empty input rows
for i in range(7):
    r = 6 + i
    s3_rows.append(
        '<row r="' + str(r) + '" ht="22" customHeight="1">'
        + ''.join(f'<c r="{chr(65+j)}{r}" t="s" s="1"><v></v></c>' for j in range(3))
        + f'<c r="D{r}" t="s" s="3"><f>B{r}-C{r}</f><v></v></c>'
        + ''.join(f'<c r="{chr(65+j)}{r}" t="s" s="1"><v></v></c>' for j in range(4, 11))
        + '</row>'
    )

sheet3_xml = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView workbookViewId="0">
      <pane ySplit="2" topLeftCell="A3" activePane="bottomLeft" state="frozen"/>
    </sheetView>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25"
    xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols>
    <col min="1" max="1" width="18" customWidth="1"/>
    <col min="2" max="2" width="10" customWidth="1"/>
    <col min="3" max="3" width="10" customWidth="1"/>
    <col min="4" max="4" width="10" customWidth="1"/>
    <col min="5" max="5" width="10" customWidth="1"/>
    <col min="6" max="6" width="10" customWidth="1"/>
    <col min="7" max="7" width="14" customWidth="1"/>
    <col min="8" max="8" width="20" customWidth="1"/>
    <col min="9" max="9" width="14" customWidth="1"/>
    <col min="10" max="10" width="10" customWidth="1"/>
    <col min="11" max="11" width="14" customWidth="1"/>
  </cols>
  <sheetData>
    {chr(10).join(s3_rows)}
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

with open('/tmp/res_work/xl/worksheets/sheet3.xml', 'w', encoding='utf-8') as f:
    f.write(sheet3_xml)

# ─── Sheet 4: 资源协调会议记录表 ─────────────────────────────────────────────
s4_rows = []

s4_rows.append('<row r="1" ht="28" customHeight="1"><c r="A1" t="s" s="16" colspan="8"><v>3</v></c></row>')

s4_header = [
    ("A","198"),("B","199"),("C","200"),("D","201"),("E","202"),("F","203"),("G","204"),("H","205"),
]
s4_rows.append('<row r="2" ht="22" customHeight="1">' +
    ''.join(f'<c r="{col}2" t="s" s="16"><v>{idx}</v></c>' for col, idx in s4_header) +
    '</row>')

data_s4 = [
    ("206","207","208","209","210","211","212","213"),
]
for i, row_data in enumerate(data_s4):
    r = 3 + i
    s4_rows.append(
        '<row r="' + str(r) + '" ht="22" customHeight="1">' +
        ''.join(f'<c r="{chr(65+j)}{r}" t="s" s="19"><v>{v}</v></c>' for j, v in enumerate(row_data)) +
        '</row>'
    )

# Empty rows
for i in range(12):
    r = 4 + i
    s4_rows.append(
        '<row r="' + str(r) + '" ht="22" customHeight="1">'
        + ''.join(f'<c r="{chr(65+j)}{r}" t="s" s="1"><v></v></c>' for j in range(8))
        + '</row>'
    )

sheet4_xml = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"/></sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25"
    xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols>
    <col min="1" max="1" width="28" customWidth="1"/>
    <col min="2" max="2" width="14" customWidth="1"/>
    <col min="3" max="3" width="24" customWidth="1"/>
    <col min="4" max="4" width="30" customWidth="1"/>
    <col min="5" max="5" width="30" customWidth="1"/>
    <col min="6" max="6" width="12" customWidth="1"/>
    <col min="7" max="7" width="14" customWidth="1"/>
    <col min="8" max="8" width="10" customWidth="1"/>
  </cols>
  <sheetData>
    {chr(10).join(s4_rows)}
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

with open('/tmp/res_work/xl/worksheets/sheet4.xml', 'w', encoding='utf-8') as f:
    f.write(sheet4_xml)

# ─── Pack ─────────────────────────────────────────────────────────────────────
import subprocess
DEST = os.path.join(OUT, '03_资源配置优先级矩阵.xlsx')
result = subprocess.run(
    ['python3', 'C:/Users/Administrator/.claude/skills/Excel表格处理/scripts/xlsx_pack.py',
     '/tmp/res_work', DEST],
    capture_output=True, text=True
)
print("Resource pack:", result.returncode, result.stdout[:200], result.stderr[:200])

result2 = subprocess.run(
    ['python3', 'C:/Users/Administrator/.claude/skills/Excel表格处理/scripts/formula_check.py', DEST],
    capture_output=True, text=True
)
print("Resource validate:", result2.returncode, result2.stdout[:300], result2.stderr[:200])
