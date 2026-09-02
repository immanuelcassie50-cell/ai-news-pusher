#!/usr/bin/env python3
"""Build 01_OGSM分解表.xlsx"""
import shutil, os, sys

SKILL = 'C:/Users/Administrator/.claude/skills/Excel表格处理'
OUT = 'D:/新课开发/经营/系列/03_战略实施——年度经营计划/Excel工具'
os.makedirs(OUT, exist_ok=True)

DEST = os.path.join(OUT, '01_OGSM分解表.xlsx')

# ─── Build shared strings ───────────────────────────────────────────────────
# Strings (index: text)
# 0:  OGSM模板
# 1:  一、Objective（最终目标）
# 2:  目标描述
# 3:  责任人
# 4:  截止日期
# 5:  附件链接
# 6:  二、Goals（分目标）
# 7:  分目标编号
# 8:  分目标描述
# 9:  关联最终目标
# 10: 权重(%)
# 11: 衡量标准
# 12: 三、Strategies（策略）
# 13: 策略编号
# 14: 策略描述
# 15: 关联分目标
# 16: 负责人
# 17: 所需资源
# 18: 四、Measures（衡量指标）
# 19: 指标编号
# 20: 指标名称
# 21: 关联策略
# 22: 当前值
# 23: 目标值
# 24: 数据来源
# 25: 评估频率
# 26: 填写说明
# 27: 检查项
# 28: 序号
# 29: 内容
# 30: 是否完成
# 31: 备注
# 32: 公司简称
# 33: 填写人
# 34: 审核人
# 35: 版本号
# 36: 制定日期
# 37: 示例：智慧科技2026年度OGSM
# 38: 成为行业领先的AI解决方案提供商
# 39: 张总
# 40: 2026-12-31
# 41: 年度收入突破5亿元
# 42: 1
# 43: 收入增长率达到60%
# 44: 年度净利润率达到15%
# 45: 2
# 46: 市场份额提升至10%
# 47: 扩大华南市场渠道覆盖
# 48: 3
# 49: 推出3款AI行业解决方案
# 50: 研发部
# 51: 产品研发策略
# 52: 加大研发投入
# 53: 4
# 54: 品牌认知度提升
# 55: 市场部
# 56: 品牌建设策略
# 57: 市场覆盖率
# 58: 5
# 59: 客户满意度达到90%以上
# 60: 客服部
# 61: 客户满意度
# 62: 6
# 63: 员工能力提升计划
# 64: 人力资源部
# 65: 人才发展策略
# 66: 主动拓展AI行业解决方案市场
# 67: 2.1
# 68: 加强渠道合作伙伴建设
# 69: 2.2
# 70: 组建AI解决方案专家团队
# 71: 3.1
# 72: 建立产品创新机制
# 73: 3.2
# 74: 品牌传播矩阵
# 75: 4.1
# 76: 客户成功管理体系
# 77: 5.1
# 78: 建立人才培训体系
# 79: 6.1
# 80: M-001
# 81: 年度营业收入
# 82: S-001
# 83: 渠道合作伙伴数量
# 84: S-002
# 85: AI解决方案交付项目数
# 86: S-003
# 87: 研发投入占比
# 88: S-004
# 89: 品牌曝光量
# 90: S-005
# 91: 客户满意度评分
# 92: S-006
# 93: 员工培训完成率
# 94: 请填写本公司的OGSM信息
# 95: 目标（O）是否与公司战略方向一致？
# 96: 分目标（G）是否相互独立且可叠加？
# 97: 策略（S）是否直接支撑对应的分目标？
# 98: 衡量指标（M）是否可量化、数据可获取？
# 99: 各层级责任人是否已明确？
# 100: 资源配置是否与策略优先级匹配？

S = [
    "OGSM模板",
    "一、Objective（最终目标）",
    "目标描述",
    "责任人",
    "截止日期",
    "附件链接",
    "二、Goals（分目标）",
    "分目标编号",
    "分目标描述",
    "关联最终目标",
    "权重(%)",
    "衡量标准",
    "三、Strategies（策略）",
    "策略编号",
    "策略描述",
    "关联分目标",
    "负责人",
    "所需资源",
    "四、Measures（衡量指标）",
    "指标编号",
    "指标名称",
    "关联策略",
    "当前值",
    "目标值",
    "数据来源",
    "评估频率",
    "填写说明",
    "检查项",
    "序号",
    "内容",
    "是否完成",
    "备注",
    "公司简称",
    "填写人",
    "审核人",
    "版本号",
    "制定日期",
    "示例：智慧科技2026年度OGSM",
    "成为行业领先的AI解决方案提供商",
    "张总",
    "2026-12-31",
    "年度收入突破5亿元",
    "1",
    "收入增长率达到60%",
    "年度净利润率达到15%",
    "2",
    "市场份额提升至10%",
    "扩大华南市场渠道覆盖",
    "3",
    "推出3款AI行业解决方案",
    "研发部",
    "产品研发策略",
    "加大研发投入",
    "4",
    "品牌认知度提升",
    "市场部",
    "品牌建设策略",
    "市场覆盖率",
    "5",
    "客户满意度达到90%以上",
    "客服部",
    "客户满意度",
    "6",
    "员工能力提升计划",
    "人力资源部",
    "人才发展策略",
    "主动拓展AI行业解决方案市场",
    "2.1",
    "加强渠道合作伙伴建设",
    "2.2",
    "组建AI解决方案专家团队",
    "3.1",
    "建立产品创新机制",
    "3.2",
    "品牌传播矩阵",
    "4.1",
    "客户成功管理体系",
    "5.1",
    "建立人才培训体系",
    "6.1",
    "M-001",
    "年度营业收入",
    "S-001",
    "渠道合作伙伴数量",
    "S-002",
    "AI解决方案交付项目数",
    "S-003",
    "研发投入占比",
    "S-004",
    "品牌曝光量",
    "S-005",
    "客户满意度评分",
    "S-006",
    "员工培训完成率",
    "请填写本公司的OGSM信息",
    "目标（O）是否与公司战略方向一致？",
    "分目标（G）是否相互独立且可叠加？",
    "策略（S）是否直接支撑对应的分目标？",
    "衡量指标（M）是否可量化、数据可获取？",
    "各层级责任人是否已明确？",
    "资源配置是否与策略优先级匹配？",
]

import subprocess, html

def escape(s):
    return html.escape(s, quote=False)

def build_shared_strings(strings):
    n = len(strings)
    lines = ['<?xml version="1.0" encoding="UTF-8" standalone="yes"?>',
             f'<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="{n}" uniqueCount="{n}">']
    for i, s in enumerate(strings):
        esc = escape(s)
        lines.append(f'  <si><t>{esc}</t></si>')
    lines.append('</sst>')
    return '\n'.join(lines) + '\n'

# ─── Copy template ────────────────────────────────────────────────────────────
shutil.copytree('C:/Users/Administrator/.claude/skills/Excel表格处理/templates/minimal_xlsx',
                '/tmp/ogsm_work', dirs_exist_ok=True)

# Write sharedStrings
with open('/tmp/ogsm_work/xl/sharedStrings.xml', 'w', encoding='utf-8') as f:
    f.write(build_shared_strings(S))

# ─── Workbook XML ─────────────────────────────────────────────────────────────
wb_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <fileVersion appName="xl" lastEdited="7" lowestEdited="7"/>
  <workbookPr defaultThemeVersion="166925"/>
  <bookViews><workbookView xWindow="0" yWindow="0" windowWidth="20140" windowHeight="10960"/></bookViews>
  <sheets>
    <sheet name="OGSM模板" sheetId="1" r:id="rId1"/>
    <sheet name="示例数据" sheetId="2" r:id="rId4"/>
    <sheet name="填写说明与检查项" sheetId="3" r:id="rId5"/>
  </sheets>
  <calcPr calcId="191029"/>
</workbook>'''
with open('/tmp/ogsm_work/xl/workbook.xml', 'w', encoding='utf-8') as f:
    f.write(wb_xml)

# ─── workbook.xml.rels ─────────────────────────────────────────────────────────
wb_rels = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
  <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml"/>
  <Relationship Id="rId4" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet2.xml"/>
  <Relationship Id="rId5" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet3.xml"/>
</Relationships>'''
with open('/tmp/ogsm_work/xl/_rels/workbook.xml.rels', 'w', encoding='utf-8') as f:
    f.write(wb_rels)

# ─── Content_Types ────────────────────────────────────────────────────────────
ct_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
  <Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet2.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet3.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>
  <Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/>
</Types>'''
with open('/tmp/ogsm_work/[Content_Types].xml', 'w', encoding='utf-8') as f:
    f.write(ct_xml)

# ─── Styles (add fills for header colors) ────────────────────────────────────
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
    <!-- 16: header blue fill white text -->
    <xf numFmtId="0" fontId="7" fillId="3" borderId="2" xfId="0" applyFont="1" applyFill="1" applyBorder="1"/>
    <!-- 17: light blue fill, dark text -->
    <xf numFmtId="0" fontId="6" fillId="2" borderId="1" xfId="0" applyFont="1" applyBorder="1" applyFill="1"/>
    <!-- 18: green fill header -->
    <xf numFmtId="0" fontId="7" fillId="4" borderId="2" xfId="0" applyFont="1" applyFill="1" applyBorder="1"/>
    <!-- 19: yellow fill -->
    <xf numFmtId="0" fontId="2" fillId="5" borderId="1" xfId="0" applyFont="1" applyBorder="1" applyFill="1"/>
  </cellXfs>
</styleSheet>'''
with open('/tmp/ogsm_work/xl/styles.xml', 'w', encoding='utf-8') as f:
    f.write(styles_xml)

# ─── Sheet 1: OGSM模板 ────────────────────────────────────────────────────────
# s=16 header (white on blue), s=17 light blue, s=19 yellow, s=14 bordered
# Index reference: s=0 default, s=1 blue font, s=2 black, s=3 green, s=4 bold,
# s=5 bold black, s=6 regular black, s=7 bold white, s=8 white

def make_cell(col, row, idx, s_attr='0', formula=None):
    if formula:
        return f'<c r="{col}{row}" t="s" s="{s_attr}"><f>{formula}</f><v></v></c>'
    return f'<c r="{col}{row}" t="s" s="{s_attr}"><v>{idx}</v></c>'

def label_cell(col, row, text, s_attr='0'):
    return f'<c r="{col}{row}" t="s" s="{s_attr}"><v>{text}</v></c>'

sheet1_rows = []

# Title row
sheet1_rows.append(
    f'<row r="1" ht="30" customHeight="1">'
    f'<c r="A1" t="s" s="16" colspan="6"><v>0</v></c>'
    f'</row>'
)

# Objective header
sheet1_rows.append(
    f'<row r="2" ht="22" customHeight="1">'
    f'<c r="A2" t="s" s="16"><v>1</v></c>'
    f'<c r="B2" t="s" s="17"><v>2</v></c>'
    f'<c r="C2" t="s" s="17"><v>3</v></c>'
    f'<c r="D2" t="s" s="17"><v>4</v></c>'
    f'<c r="E2" t="s" s="17"><v>5</v></c>'
    f'</row>'
)

# Objective data row
sheet1_rows.append(
    f'<row r="3" ht="22" customHeight="1">'
    f'<c r="A3" t="s" s="17"><v>1</v></c>'
    f'<c r="B3" t="s" s="1"><v></v></c>'
    f'<c r="C3" t="s" s="1"><v></v></c>'
    f'<c r="D3" t="s" s="1"><v></v></c>'
    f'<c r="E3" t="s" s="1"><v></v></c>'
    f'</row>'
)

# Blank
sheet1_rows.append(f'<row r="4"><c r="A4" t="s" s="0"><v></v></c></row>')

# Goals header
sheet1_rows.append(
    f'<row r="5" ht="22" customHeight="1">'
    f'<c r="A5" t="s" s="16"><v>6</v></c>'
    f'<c r="B5" t="s" s="17"><v>7</v></c>'
    f'<c r="C5" t="s" s="17"><v>8</v></c>'
    f'<c r="D5" t="s" s="17"><v>9</v></c>'
    f'<c r="E5" t="s" s="17"><v>10</v></c>'
    f'<c r="F5" t="s" s="17"><v>11</v></c>'
    f'</row>'
)

# Goals data rows 6-10
goal_labels = [("1","",""),("2","",""),("3","",""),("4",""),("5","","")]
for i, (num, *_rest) in enumerate([("1","",""),("2","",""),("3","",""),("4",""),("5","","")]):
    r = 6 + i
    sheet1_rows.append(
        f'<row r="{r}" ht="22" customHeight="1">'
        f'<c r="A{r}" t="s" s="17"><v>7</v></c>'
        f'<c r="B{r}" t="s" s="1"><v>{num}</v></c>'
        f'<c r="C{r}" t="s" s="1"><v></v></c>'
        f'<c r="D{r}" t="s" s="1"><v></v></c>'
        f'<c r="E{r}" t="s" s="1"><v></v></c>'
        f'<c r="F{r}" t="s" s="1"><v></v></c>'
        f'</row>'
    )

# Blank
sheet1_rows.append(f'<row r="11"><c r="A11" t="s" s="0"><v></v></c></row>')

# Strategies header
sheet1_rows.append(
    f'<row r="12" ht="22" customHeight="1">'
    f'<c r="A12" t="s" s="16"><v>12</v></c>'
    f'<c r="B12" t="s" s="17"><v>13</v></c>'
    f'<c r="C12" t="s" s="17"><v>14</v></c>'
    f'<c r="D12" t="s" s="17"><v>15</v></c>'
    f'<c r="E12" t="s" s="17"><v>16</v></c>'
    f'<c r="F12" t="s" s="17"><v>17</v></c>'
    f'</row>'
)

# Strategies data rows 13-17
for i in range(5):
    r = 13 + i
    sheet1_rows.append(
        f'<row r="{r}" ht="22" customHeight="1">'
        f'<c r="A{r}" t="s" s="17"><v>13</v></c>'
        f'<c r="B{r}" t="s" s="1"><v></v></c>'
        f'<c r="C{r}" t="s" s="1"><v></v></c>'
        f'<c r="D{r}" t="s" s="1"><v></v></c>'
        f'<c r="E{r}" t="s" s="1"><v></v></c>'
        f'<c r="F{r}" t="s" s="1"><v></v></c>'
        f'</row>'
    )

# Blank
sheet1_rows.append(f'<row r="18"><c r="A18" t="s" s="0"><v></v></c></row>')

# Measures header
sheet1_rows.append(
    f'<row r="19" ht="22" customHeight="1">'
    f'<c r="A19" t="s" s="16"><v>18</v></c>'
    f'<c r="B19" t="s" s="17"><v>19</v></c>'
    f'<c r="C19" t="s" s="17"><v>20</v></c>'
    f'<c r="D19" t="s" s="17"><v>21</v></c>'
    f'<c r="E19" t="s" s="17"><v>22</v></c>'
    f'<c r="F19" t="s" s="17"><v>23</v></c>'
    f'<c r="G19" t="s" s="17"><v>24</v></c>'
    f'</row>'
)

# Measures data rows 20-25
for i in range(6):
    r = 20 + i
    sheet1_rows.append(
        f'<row r="{r}" ht="22" customHeight="1">'
        f'<c r="A{r}" t="s" s="17"><v>19</v></c>'
        f'<c r="B{r}" t="s" s="1"><v></v></c>'
        f'<c r="C{r}" t="s" s="1"><v></v></c>'
        f'<c r="D{r}" t="s" s="1"><v></v></c>'
        f'<c r="E{r}" t="s" s="1"><v></v></c>'
        f'<c r="F{r}" t="s" s="1"><v></v></c>'
        f'<c r="G{r}" t="s" s="1"><v></v></c>'
        f'</row>'
    )

sheet1_xml = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView workbookViewId="0">
      <pane ySplit="5" topLeftCell="A6" activePane="bottomLeft" state="frozen"/>
    </sheetView>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25"
    xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols>
    <col min="1" max="1" width="18" customWidth="1"/>
    <col min="2" max="2" width="14" customWidth="1"/>
    <col min="3" max="3" width="30" customWidth="1"/>
    <col min="4" max="4" width="14" customWidth="1"/>
    <col min="5" max="5" width="12" customWidth="1"/>
    <col min="6" max="6" width="20" customWidth="1"/>
    <col min="7" max="7" width="14" customWidth="1"/>
  </cols>
  <sheetData>
    {chr(10).join(sheet1_rows)}
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

with open('/tmp/ogsm_work/xl/worksheets/sheet1.xml', 'w', encoding='utf-8') as f:
    f.write(sheet1_xml)

# ─── Sheet 2: 示例数据 ────────────────────────────────────────────────────────
sheet2_rows = []

# Title
sheet2_rows.append(
    f'<row r="1" ht="30" customHeight="1">'
    f'<c r="A1" t="s" s="16" colspan="7"><v>37</v></c>'
    f'</row>'
)

# Objective
sheet2_rows.append(
    f'<row r="2" ht="22" customHeight="1">'
    f'<c r="A2" t="s" s="16"><v>1</v></c>'
    f'<c r="B2" t="s" s="17"><v>2</v></c>'
    f'<c r="C2" t="s" s="17"><v>3</v></c>'
    f'<c r="D2" t="s" s="17"><v>4</v></c>'
    f'<c r="E2" t="s" s="17"><v>5</v></c>'
    f'</row>'
)

sheet2_rows.append(
    f'<row r="3" ht="22" customHeight="1">'
    f'<c r="A3" t="s" s="17"><v>1</v></c>'
    f'<c r="B3" t="s" s="19"><v>38</v></c>'
    f'<c r="C3" t="s" s="19"><v>39</v></c>'
    f'<c r="D3" t="s" s="19"><v>40</v></c>'
    f'<c r="E3" t="s" s="19"><v></v></c>'
    f'</row>'
)

sheet2_rows.append(f'<row r="4"><c r="A4" t="s" s="0"><v></v></c></row>')

# Goals header
sheet2_rows.append(
    f'<row r="5" ht="22" customHeight="1">'
    f'<c r="A5" t="s" s="16"><v>6</v></c>'
    f'<c r="B5" t="s" s="17"><v>7</v></c>'
    f'<c r="C5" t="s" s="17"><v>8</v></c>'
    f'<c r="D5" t="s" s="17"><v>9</v></c>'
    f'<c r="E5" t="s" s="17"><v>10</v></c>'
    f'<c r="F5" t="s" s="17"><v>11</v></c>'
    f'</row>'
)

goals_data = [
    ("1","年度收入突破5亿元","年度收入5亿元，同比增长60%以上","40","30"),
    ("2","净利润率达到15%","净利率从10%提升至15%","40","20"),
    ("3","推出3款AI行业解决方案","完成3款AI解决方案产品化","40","20"),
    ("4","品牌认知度提升","市场覆盖率提升至10%","40","15"),
    ("5","客户满意度达到90%以上","CSAT评分90分以上","40","15"),
]
for i, (num, desc, std, date, weight) in enumerate(goals_data):
    r = 6 + i
    sheet2_rows.append(
        f'<row r="{r}" ht="22" customHeight="1">'
        f'<c r="A{r}" t="s" s="17"><v>7</v></c>'
        f'<c r="B{r}" t="s" s="19"><v>{num}</v></c>'
        f'<c r="C{r}" t="s" s="19"><v>{desc}</v></c>'
        f'<c r="D{r}" t="s" s="19"><v>{std}</v></c>'
        f'<c r="E{r}" t="s" s="19"><v>{weight}</v></c>'
        f'<c r="F{r}" t="s" s="19"><v></v></c>'
        f'</row>'
    )

sheet2_rows.append(f'<row r="11"><c r="A11" t="s" s="0"><v></v></c></row>')

# Strategies header
sheet2_rows.append(
    f'<row r="12" ht="22" customHeight="1">'
    f'<c r="A12" t="s" s="16"><v>12</v></c>'
    f'<c r="B12" t="s" s="17"><v>13</v></c>'
    f'<c r="C12" t="s" s="17"><v>14</v></c>'
    f'<c r="D12" t="s" s="17"><v>15</v></c>'
    f'<c r="E12" t="s" s="17"><v>16</v></c>'
    f'<c r="F12" t="s" s="17"><v>17</v></c>'
    f'</row>'
)

strategies_data = [
    ("S-001","主动拓展AI行业解决方案市场","1","张总","销售团队+市场费用300万"),
    ("S-002","加强渠道合作伙伴建设","1","张总","渠道返利预算500万"),
    ("S-003","组建AI解决方案专家团队","2","研发部","人力成本800万+猎头费用50万"),
    ("S-004","建立产品创新机制","2","研发部","研发预算200万"),
    ("S-005","品牌传播矩阵","3","市场部","市场预算200万"),
    ("S-006","客户成功管理体系","4","客服部","客服系统建设100万"),
    ("S-007","建立人才培训体系","5","人力资源部","培训预算50万"),
]
for i, (num, desc, goal, owner, res) in enumerate(strategies_data):
    r = 13 + i
    sheet2_rows.append(
        f'<row r="{r}" ht="22" customHeight="1">'
        f'<c r="A{r}" t="s" s="17"><v>13</v></c>'
        f'<c r="B{r}" t="s" s="19"><v>{num}</v></c>'
        f'<c r="C{r}" t="s" s="19"><v>{desc}</v></c>'
        f'<c r="D{r}" t="s" s="19"><v>{goal}</v></c>'
        f'<c r="E{r}" t="s" s="19"><v>{owner}</v></c>'
        f'<c r="F{r}" t="s" s="19"><v>{res}</v></c>'
        f'</row>'
    )

sheet2_rows.append(f'<row r="20"><c r="A20" t="s" s="0"><v></v></c></row>')

# Measures header
sheet2_rows.append(
    f'<row r="21" ht="22" customHeight="1">'
    f'<c r="A21" t="s" s="16"><v>18</v></c>'
    f'<c r="B21" t="s" s="17"><v>19</v></c>'
    f'<c r="C21" t="s" s="17"><v>20</v></c>'
    f'<c r="D21" t="s" s="17"><v>21</v></c>'
    f'<c r="E21" t="s" s="17"><v>22</v></c>'
    f'<c r="F21" t="s" s="17"><v>23</v></c>'
    f'<c r="G21" t="s" s="17"><v>24</v></c>'
    f'</row>'
)

measures_data = [
    ("M-001","年度营业收入","S-001","3亿","5亿","财务系统","季度"),
    ("M-002","渠道合作伙伴数量","S-002","50家","100家","CRM系统","季度"),
    ("M-003","AI解决方案交付项目数","S-003","5个","15个","项目管理系统","季度"),
    ("M-004","研发投入占比","S-004","8%","12%","财务系统","季度"),
    ("M-005","品牌曝光量","S-005","500万","2000万","市场监测平台","季度"),
    ("M-006","客户满意度评分","S-006","80分","90分","客服系统","季度"),
]
for i, (num, name, strategy, current, target, source, freq) in enumerate(measures_data):
    r = 22 + i
    sheet2_rows.append(
        f'<row r="{r}" ht="22" customHeight="1">'
        f'<c r="A{r}" t="s" s="17"><v>19</v></c>'
        f'<c r="B{r}" t="s" s="19"><v>{num}</v></c>'
        f'<c r="C{r}" t="s" s="19"><v>{name}</v></c>'
        f'<c r="D{r}" t="s" s="19"><v>{strategy}</v></c>'
        f'<c r="E{r}" t="s" s="19"><v>{current}</v></c>'
        f'<c r="F{r}" t="s" s="19"><v>{target}</v></c>'
        f'<c r="G{r}" t="s" s="19"><v>{source}</v></c>'
        f'</row>'
    )

sheet2_xml = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView workbookViewId="0">
      <pane ySplit="5" topLeftCell="A6" activePane="bottomLeft" state="frozen"/>
    </sheetView>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25"
    xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols>
    <col min="1" max="1" width="18" customWidth="1"/>
    <col min="2" max="2" width="14" customWidth="1"/>
    <col min="3" max="3" width="30" customWidth="1"/>
    <col min="4" max="4" width="14" customWidth="1"/>
    <col min="5" max="5" width="12" customWidth="1"/>
    <col min="6" max="6" width="20" customWidth="1"/>
    <col min="7" max="7" width="14" customWidth="1"/>
  </cols>
  <sheetData>
    {chr(10).join(sheet2_rows)}
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

with open('/tmp/ogsm_work/xl/worksheets/sheet2.xml', 'w', encoding='utf-8') as f:
    f.write(sheet2_xml)

# ─── Sheet 3: 填写说明与检查项 ────────────────────────────────────────────────
sheet3_rows = []

# Title
sheet3_rows.append(
    f'<row r="1" ht="30" customHeight="1">'
    f'<c r="A1" t="s" s="16" colspan="4"><v>26</v></c>'
    f'</row>'
)

# Section 1: How to fill
sheet3_rows.append(
    f'<row r="2" ht="22" customHeight="1">'
    f'<c r="A2" t="s" s="16" colspan="4"><v>26</v></c>'
    f'</row>'
)

sheet3_rows.append(
    f'<row r="3" ht="22" customHeight="1">'
    f'<c r="A3" t="s" s="17"><v>27</v></c>'
    f'<c r="B3" t="s" s="1"><v>0</v></c>'
    f'</row>'
)

how_to_fill = [
    "1. Objective（最终目标）：描述公司3-5年的终极目标，应与公司使命愿景一致",
    "2. Goals（分目标）：将O拆解为3-6个可量化、可追踪的分目标，每个分目标权重合计100%",
    "3. Strategies（策略）：针对每个G制定2-3条策略，策略应直接支撑对应分目标",
    "4. Measures（衡量指标）：为每个S设定1-2个量化指标，明确当前值和目标值",
]
for i, text in enumerate(how_to_fill):
    r = 4 + i
    # Find index in S for this text
    try:
        idx = S.index(text)
    except ValueError:
        idx = 0
    sheet3_rows.append(
        f'<row r="{r}" ht="22" customHeight="1">'
        f'<c r="A{r}" t="s" s="17"><v>27</v></c>'
        f'<c r="B{r}" t="s" s="19"><v>{idx}</v></c>'
        f'</row>'
    )

# blank
sheet3_rows.append(f'<row r="8"><c r="A8" t="s" s="0"><v></v></c></row>')

# Section 2: Check items
sheet3_rows.append(
    f'<row r="9" ht="22" customHeight="1">'
    f'<c r="A9" t="s" s="16" colspan="4"><v>27</v></c>'
    f'</row>'
)

check_items = [
    ("95",""),("96",""),("97",""),("98",""),("99",""),("100",""),
]
sheet3_rows.append(
    f'<row r="10" ht="22" customHeight="1">'
    f'<c r="A10" t="s" s="17"><v>28</v></c>'
    f'<c r="B10" t="s" s="17"><v>29</v></c>'
    f'<c r="C10" t="s" s="17"><v>30</v></c>'
    f'<c r="D10" t="s" s="17"><v>31</v></c>'
    f'</row>'
)

for i, (item_idx, note) in enumerate(check_items):
    r = 11 + i
    sheet3_rows.append(
        f'<row r="{r}" ht="22" customHeight="1">'
        f'<c r="A{r}" t="s" s="17"><v>{28+i}</v></c>'
        f'<c r="B{r}" t="s" s="19"><v>{item_idx}</v></c>'
        f'<c r="C{r}" t="s" s="1"><v></v></c>'
        f'<c r="D{r}" t="s" s="1"><v></v></c>'
        f'</row>'
    )

# Meta info
sheet3_rows.append(f'<row r="17"><c r="A17" t="s" s="0"><v></v></c></row>')

sheet3_rows.append(
    f'<row r="18" ht="22" customHeight="1">'
    f'<c r="A18" t="s" s="17"><v>32</v></c>'
    f'<c r="B18" t="s" s="19"><v></v></c>'
    f'<c r="C18" t="s" s="17"><v>33</v></c>'
    f'<c r="D18" t="s" s="19"><v></v></c>'
    f'</row>'
)
sheet3_rows.append(
    f'<row r="19" ht="22" customHeight="1">'
    f'<c r="A19" t="s" s="17"><v>34</v></c>'
    f'<c r="B19" t="s" s="19"><v></v></c>'
    f'<c r="C19" t="s" s="17"><v>35</v></c>'
    f'<c r="D19" t="s" s="19"><v></v></c>'
    f'</row>'
)
sheet3_rows.append(
    f'<row r="20" ht="22" customHeight="1">'
    f'<c r="A20" t="s" s="17"><v>36</v></c>'
    f'<c r="B20" t="s" s="19"><v></v></c>'
    f'</row>'
)

sheet3_xml = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"/></sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25"
    xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols>
    <col min="1" max="1" width="18" customWidth="1"/>
    <col min="2" max="2" width="50" customWidth="1"/>
    <col min="3" max="3" width="14" customWidth="1"/>
    <col min="4" max="4" width="20" customWidth="1"/>
  </cols>
  <sheetData>
    {chr(10).join(sheet3_rows)}
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

with open('/tmp/ogsm_work/xl/worksheets/sheet3.xml', 'w', encoding='utf-8') as f:
    f.write(sheet3_xml)

# ─── Pack ─────────────────────────────────────────────────────────────────────
import subprocess
result = subprocess.run(
    ['python3', 'C:/Users/Administrator/.claude/skills/Excel表格处理/scripts/xlsx_pack.py',
     '/tmp/ogsm_work', DEST],
    capture_output=True, text=True
)
print("OGSM pack:", result.returncode, result.stdout, result.stderr)

# Validate
result2 = subprocess.run(
    ['python3', 'C:/Users/Administrator/.claude/skills/Excel表格处理/scripts/formula_check.py', DEST],
    capture_output=True, text=True
)
print("OGSM validate:", result2.returncode, result2.stdout, result2.stderr)
