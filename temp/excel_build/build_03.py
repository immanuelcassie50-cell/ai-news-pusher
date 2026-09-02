# -*- coding: utf-8 -*-
"""
Build file 03: 03_双轨胜任度评估表_团队版.xlsx
Multi-sheet workbook for evaluating 10-30 employees on AI协作力 + 人类深度.
Sheets:
  1) 使用说明
  2) 团队评估汇总 (12 sample employees, formulas for totals/avg/quadrant/state)
  3) 个人详细评估_范例 (one employee's full F8 evaluation)
  4) 四象限分布与建议
"""
import shutil
import subprocess
from pathlib import Path

TEMPLATE = Path(r"C:/Users/Administrator/.claude/skills/Excel表格处理/templates/minimal_xlsx")
OUT_DIR = Path(r"D:/2026年课程/竞越/绩效管理和绩效面谈：通过绩效面谈让员工更加胜任/完整课程包/13_配套Excel表单")
WORK = Path(r"D:/CC/temp/excel_build/work_03")

if WORK.exists():
    shutil.rmtree(WORK)
shutil.copytree(TEMPLATE, WORK)

LQ, RQ = '“', '”'

def esc(s):
    return (str(s)
            .replace('&', '&amp;')
            .replace('<', '&lt;')
            .replace('>', '&gt;')
            .replace('"', '&quot;'))

def cell_str(col, n, style, text):
    return f'<c r="{col}{n}" s="{style}" t="inlineStr"><is><t>{esc(text)}</t></is></c>'

def cell_empty(col, n, style):
    return f'<c r="{col}{n}" s="{style}"/>'

def cell_num(col, n, style, val):
    return f'<c r="{col}{n}" s="{style}"><v>{val}</v></c>'

def cell_formula(col, n, style, formula):
    f_esc = formula.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;')
    return f'<c r="{col}{n}" s="{style}"><f>{f_esc}</f><v></v></c>'

def make_row(n, cells, height=None):
    h_attr = f' ht="{height}" customHeight="1"' if height else ''
    parts = []
    for col, style, content in cells:
        if content is None:
            parts.append(cell_empty(col, n, style))
        elif isinstance(content, tuple) and content[0] == 'f':
            parts.append(cell_formula(col, n, style, content[1]))
        elif isinstance(content, tuple) and content[0] == 'n':
            parts.append(cell_num(col, n, style, content[1]))
        else:
            parts.append(cell_str(col, n, style, content))
    return f'<row r="{n}"{h_attr}>\n  ' + '\n  '.join(parts) + '\n</row>'

# === styles.xml ===
STYLES_XML = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <numFmts count="6">
    <numFmt numFmtId="164" formatCode="$#,##0;($#,##0);&quot;-&quot;"/>
    <numFmt numFmtId="165" formatCode="0.0%"/>
    <numFmt numFmtId="166" formatCode="0.0"/>
    <numFmt numFmtId="167" formatCode="#,##0"/>
    <numFmt numFmtId="168" formatCode="0"/>
    <numFmt numFmtId="169" formatCode="yyyy-mm-dd"/>
  </numFmts>
  <fonts count="7">
    <font><sz val="11"/><name val="Calibri"/><color rgb="00000000"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="000000FF"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="00000000"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="00008000"/></font>
    <font><sz val="11"/><name val="Calibri"/><b/><color rgb="00000000"/></font>
    <font><sz val="10"/><name val="Calibri"/><color rgb="00595959"/></font>
    <font><sz val="11"/><name val="Calibri"/><b/><color rgb="00FFFFFF"/></font>
  </fonts>
  <fills count="8">
    <fill><patternFill patternType="none"/></fill>
    <fill><patternFill patternType="gray125"/></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="00FFF2CC"/><bgColor indexed="64"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="00D9E1F2"/><bgColor indexed="64"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="00E2EFDA"/><bgColor indexed="64"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="00FCE4D6"/><bgColor indexed="64"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="004472C4"/><bgColor indexed="64"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="00FFE699"/><bgColor indexed="64"/></patternFill></fill>
  </fills>
  <borders count="3">
    <border><left/><right/><top/><bottom/><diagonal/></border>
    <border><left/><right/><top style="thin"><color rgb="00BFBFBF"/></top><bottom style="thin"><color rgb="00BFBFBF"/></bottom><diagonal/></border>
    <border><left/><right/><top style="medium"><color rgb="00000000"/></top><bottom style="medium"><color rgb="00000000"/></bottom><diagonal/></border>
  </borders>
  <cellStyleXfs count="1">
    <xf numFmtId="0" fontId="0" fillId="0" borderId="0"/>
  </cellStyleXfs>
  <cellXfs count="25">
    <xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/>
    <xf numFmtId="0" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1"/>
    <xf numFmtId="0" fontId="2" fillId="0" borderId="0" xfId="0" applyFont="1"/>
    <xf numFmtId="0" fontId="3" fillId="0" borderId="0" xfId="0" applyFont="1"/>
    <xf numFmtId="0" fontId="4" fillId="0" borderId="0" xfId="0" applyFont="1"/>
    <xf numFmtId="0" fontId="4" fillId="2" borderId="0" xfId="0" applyFont="1" applyFill="1"/>
    <xf numFmtId="0" fontId="0" fillId="3" borderId="0" xfId="0" applyFill="1"/>
    <xf numFmtId="0" fontId="0" fillId="4" borderId="0" xfId="0" applyFill="1"/>
    <xf numFmtId="0" fontId="0" fillId="5" borderId="0" xfId="0" applyFill="1"/>
    <xf numFmtId="0" fontId="4" fillId="3" borderId="0" xfId="0" applyFont="1" applyFill="1"/>
    <xf numFmtId="0" fontId="4" fillId="4" borderId="0" xfId="0" applyFont="1" applyFill="1"/>
    <xf numFmtId="0" fontId="4" fillId="5" borderId="0" xfId="0" applyFont="1" applyFill="1"/>
    <xf numFmtId="0" fontId="0" fillId="0" borderId="1" xfId="0" applyBorder="1"/>
    <xf numFmtId="0" fontId="1" fillId="0" borderId="1" xfId="0" applyFont="1" applyBorder="1"/>
    <xf numFmtId="0" fontId="4" fillId="0" borderId="1" xfId="0" applyFont="1" applyBorder="1"/>
    <xf numFmtId="0" fontId="0" fillId="3" borderId="1" xfId="0" applyFill="1" applyBorder="1"/>
    <xf numFmtId="0" fontId="1" fillId="3" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1"/>
    <xf numFmtId="0" fontId="2" fillId="4" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1"/>
    <xf numFmtId="0" fontId="2" fillId="5" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1"/>
    <xf numFmtId="0" fontId="2" fillId="3" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1"/>
    <xf numFmtId="166" fontId="2" fillId="3" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1" applyNumberFormat="1"/>
    <xf numFmtId="166" fontId="4" fillId="3" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1" applyNumberFormat="1"/>
    <xf numFmtId="166" fontId="1" fillId="3" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1" applyNumberFormat="1"/>
    <xf numFmtId="0" fontId="6" fillId="6" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1"/>
    <xf numFmtId="166" fontId="2" fillId="7" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1" applyNumberFormat="1"/>
  </cellXfs>
  <cellStyles count="1">
    <cellStyle name="Normal" xfId="0" builtinId="0"/>
  </cellStyles>
</styleSheet>
'''
(WORK / "xl" / "styles.xml").write_text(STYLES_XML, encoding="utf-8")

# === Sheet 1: 使用说明 ===
rows1 = []
r = 1
rows1.append(make_row(r, [('A', 4, '03 双轨胜任度评估表（团队版）使用说明')], height=28))
r += 1
rows1.append(make_row(r, [('A', 6, '对应课程工具'), ('B', 2, 'F8 双轨胜任度评估表（学员手册 P33-38）')]))
r += 1
rows1.append(make_row(r, [('A', 6, '评估对象'), ('B', 2, f'团队版：可容纳10-30个员工，每次评估周期对全员做一次双轨打分')]))
r += 1
rows1.append(make_row(r, [('A', 6, '双轨定义'), ('B', 2, f'AI协作力（4个能力，满分20）+ 人类深度（3类能力，满分15）。标准化到5分制，画四象限。')]))
r += 1
r += 1
rows1.append(make_row(r, [('A', 5, '一、工作表结构')], height=22))
r += 1
sheet_descs = [
    ('使用说明', '本表'),
    ('团队评估汇总', f'10-30个员工的双轨打分（范例：12个员工），含总分/标准化/象限判定公式'),
    ('个人详细评估_范例', f'选一名员工（{LQ}王晓{RQ}，AI高/人类深度高的{LQ}领先型{RQ}）做完整F8评估'),
    ('四象限分布与建议', f'基于汇总数据自动统计四象限人数 + 4种状态的解读与下一步建议'),
]
for name, desc in sheet_descs:
    rows1.append(make_row(r, [('A', 14, name), ('B', 2, desc)]))
    r += 1
r += 1
rows1.append(make_row(r, [('A', 5, '二、评分规范')], height=22))
r += 1
rows1.append(make_row(r, [('A', 14, '5分'), ('B', 2, f'在本团队中突出 / 4分：在复杂情境下能做到 / 3分：能独立处理 / 2分：需确认 / 1分：做不到')]))
r += 1
rows1.append(make_row(r, [('A', 14, '事实>印象'), ('B', 2, f'每项打分前必须写具体观察（场景/时间/行为），不要凭印象打分')]))
r += 1
rows1.append(make_row(r, [('A', 14, '标准化'), ('B', 2, f'AI协作力原始分÷20×5；人类深度原始分÷15×5。把两条轨道换算到同一尺度。')]))
r += 1
rows1.append(make_row(r, [('A', 14, '象限判定'), ('B', 2, f'AI标准化≥3且人类深度≥3 = 领先型；AI≥3且人类深度<3 = 漂移型；AI<3且人类深度≥3 = 保守型；都<3 = 困境型')]))
r += 1
r += 1
rows1.append(make_row(r, [('A', 5, '三、使用流程')], height=22))
r += 1
usage = [
    '收集每位员工的3-5个具体事实场景（避免凭印象打分）',
    'AI协作力4个能力各打分1-5；人类深度3类能力各打分1-5',
    '汇总sheet用公式自动算总分/标准化/象限；个人详细评估可选择性做',
    '象限分布sheet看团队整体健康度（领先型+保守型+漂移型+困境型比例）',
    '对每位员工确定下一步（F9 缺口判断 → F7 启动问题）',
]
for i, step in enumerate(usage, start=1):
    rows1.append(make_row(r, [('A', 14, f'{i}'), ('B', 2, step)]))
    r += 1
r += 1
rows1.append(make_row(r, [('A', 6, '金句'), ('B', 6, f'AI时代，评估一个人的胜任度要看两条轨道——AI协作力+人类深度，缺一就失衡。')]))

sheet1_body = '\n  '.join(rows1)
sheet1_xml = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView tabSelected="1" workbookViewId="0">
      <pane ySplit="1" topLeftCell="A2" activePane="bottomLeft" state="frozen"/>
    </sheetView>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols>
    <col min="1" max="1" width="18" customWidth="1"/>
    <col min="2" max="2" width="100" customWidth="1"/>
  </cols>
  <sheetData>
  {sheet1_body}
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>
'''
(WORK / "xl" / "worksheets" / "sheet1.xml").write_text(sheet1_xml, encoding="utf-8")

# === Sheet 2: 团队评估汇总 (12 employees) ===
# Columns:
# A: 序号, B: 员工姓名, C: 部门, D: 岗位, E: 评估日期
# F: AI_识别适合AI承接, G: AI_设计有效提示, H: AI_评估AI输出, I: AI_整合进流程
# J: AI协作力总分 (formula =SUM(F:I)), K: AI标准化 (formula =J/20*5)
# L: 人类_判断力, M: 人类_关系力, N: 人类_领域深度
# O: 人类深度总分 (formula =SUM(L:N)), P: 人类标准化 (formula =O/15*5)
# Q: 象限判定 (formula based on K and P)
# R: 主导建议

# 12 sample employees with realistic data
employees = [
    # (name, dept, position, date,
    #  AI1, AI2, AI3, AI4,    H_判断, H_关系, H_领域)
    ('王晓', '产品部', '高级产品经理', '2026-01-08',  5, 4, 5, 4,  5, 4, 5),
    ('张磊', '产品部', '产品经理', '2026-01-08',  4, 4, 4, 4,  4, 3, 4),
    ('陈静', '设计部', '资深UI设计师', '2026-01-09',  3, 3, 3, 3,  5, 4, 5),
    ('刘洋', '技术部', '前端工程师', '2026-01-09',  5, 5, 4, 5,  2, 2, 3),
    ('赵敏', '市场部', '内容运营', '2026-01-10',  4, 3, 3, 4,  3, 4, 3),
    ('孙浩', '市场部', 'SEM专员', '2026-01-10',  2, 2, 2, 1,  3, 2, 3),
    ('周琳', '客户成功部', '客户经理', '2026-01-11',  2, 1, 2, 2,  4, 5, 4),
    ('吴凡', '技术部', '后端工程师', '2026-01-11',  3, 3, 3, 3,  3, 2, 4),
    ('郑华', '产品部', '产品助理', '2026-01-12',  2, 2, 1, 2,  2, 2, 2),
    ('马莉', '设计部', 'UX研究员', '2026-01-12',  4, 3, 4, 3,  5, 4, 4),
    ('黄强', '销售部', '大客户经理', '2026-01-13',  3, 2, 2, 2,  4, 5, 5),
    ('林涛', '技术部', '架构师', '2026-01-13',  5, 4, 4, 4,  5, 3, 5),
]

rows2 = []
r = 1
rows2.append(make_row(r, [('A', 4, f'团队双轨胜任度评估汇总（{len(employees)}人范例）')], height=28))
r += 1
rows2.append(make_row(r, [('A', 2, f'评估周期：2025年下半年 | 评估人：各部门负责人 | 评估日期：2026年1月 | 数据可编辑；右侧公式自动计算总分/标准化/象限')]))
r += 1

r += 1  # blank
# Header row (with colors)
header_row = [
    ('A', 9, '序号'), ('B', 9, '员工姓名'), ('C', 9, '部门'),
    ('D', 9, '岗位'), ('E', 9, '评估日期'),
    ('F', 9, 'AI-1 识别适合AI的工作'), ('G', 9, 'AI-2 设计有效提示'),
    ('H', 9, 'AI-3 评估AI输出'), ('I', 9, 'AI-4 整合进工作流程'),
    ('J', 9, 'AI协作力总分/20'), ('K', 9, 'AI标准化/5'),
    ('L', 9, '人类-判断力'), ('M', 9, '人类-关系力'),
    ('N', 9, '人类-领域深度'), ('O', 9, '人类深度总分/15'),
    ('P', 9, '人类标准化/5'), ('Q', 9, '双轨象限'), ('R', 9, '下一步建议')
]
rows2.append(make_row(r, header_row, height=42))
r += 1
data_start_row = r

# Data rows
for idx, (name, dept, pos, date, ai1, ai2, ai3, ai4, hj, hr, hd) in enumerate(employees, start=1):
    excel_row = r
    # Build cells
    cells = [
        ('A', 23, ('n', str(idx))),  # 序号
        ('B', 13, name),
        ('C', 13, dept),
        ('D', 13, pos),
        ('E', 13, date),
        ('F', 23, ('n', str(ai1))),
        ('G', 23, ('n', str(ai2))),
        ('H', 23, ('n', str(ai3))),
        ('I', 23, ('n', str(ai4))),
        ('J', 21, ('f', f'SUM(F{excel_row}:I{excel_row})')),  # AI总分
        ('K', 21, ('f', f'J{excel_row}/20*5')),  # AI标准化
        ('L', 23, ('n', str(hj))),
        ('M', 23, ('n', str(hr))),
        ('N', 23, ('n', str(hd))),
        ('O', 21, ('f', f'SUM(L{excel_row}:N{excel_row})')),  # 人类总分
        ('P', 21, ('f', f'O{excel_row}/15*5')),  # 人类标准化
        ('Q', 24, ('f', f'IF(AND(K{excel_row}>=3,P{excel_row}>=3),"领先型",IF(AND(K{excel_row}>=3,P{excel_row}<3),"漂移型",IF(AND(K{excel_row}<3,P{excel_row}>=3),"保守型","困境型")))')),
        ('R', 16, ('f', f'IF(Q{excel_row}="领先型","挑战型发展/横向带教",IF(Q{excel_row}="漂移型","重点发展人类深度",IF(Q{excel_row}="保守型","优先发展AI协作力","接F6类型B+系统诊断")))')),
    ]
    rows2.append(make_row(r, cells))
    r += 1

data_end_row = r - 1

# Summary row - team averages
r += 1
rows2.append(make_row(r, [('A', 14, '团队平均',), ('B', 14, None), ('C', 14, None), ('D', 14, None), ('E', 14, None),
                          ('F', 22, ('f', f'AVERAGE(F{data_start_row}:F{data_end_row})')),
                          ('G', 22, ('f', f'AVERAGE(G{data_start_row}:G{data_end_row})')),
                          ('H', 22, ('f', f'AVERAGE(H{data_start_row}:H{data_end_row})')),
                          ('I', 22, ('f', f'AVERAGE(I{data_start_row}:I{data_end_row})')),
                          ('J', 22, ('f', f'AVERAGE(J{data_start_row}:J{data_end_row})')),
                          ('K', 22, ('f', f'AVERAGE(K{data_start_row}:K{data_end_row})')),
                          ('L', 22, ('f', f'AVERAGE(L{data_start_row}:L{data_end_row})')),
                          ('M', 22, ('f', f'AVERAGE(M{data_start_row}:M{data_end_row})')),
                          ('N', 22, ('f', f'AVERAGE(N{data_start_row}:N{data_end_row})')),
                          ('O', 22, ('f', f'AVERAGE(O{data_start_row}:O{data_end_row})')),
                          ('P', 22, ('f', f'AVERAGE(P{data_start_row}:P{data_end_row})')),
                          ('Q', 14, '团队AI均值'),
                          ('R', 16, ('f', f'AVERAGE(K{data_start_row}:K{data_end_row})&" / "&AVERAGE(P{data_start_row}:P{data_end_row})'))
                          ]))
r += 1
# Count rows
r += 1
rows2.append(make_row(r, [('A', 5, '四象限人数统计（基于 Q 列判定）')], height=22))
r += 1
quad_count_row_start = r
rows2.append(make_row(r, [('A', 14, '象限'), ('B', 14, '判定条件'), ('C', 14, '人数'), ('D', 14, '占比')]))
r += 1
quadrants = [
    ('领先型', f'COUNTIF(Q{data_start_row}:Q{data_end_row},"领先型")'),
    ('漂移型', f'COUNTIF(Q{data_start_row}:Q{data_end_row},"漂移型")'),
    ('保守型', f'COUNTIF(Q{data_start_row}:Q{data_end_row},"保守型")'),
    ('困境型', f'COUNTIF(Q{data_start_row}:Q{data_end_row},"困境型")'),
]
for name, formula in quadrants:
    rows2.append(make_row(r, [('A', 14, name), ('B', 16, ''), ('C', 23, ('f', formula)), ('D', 23, ('f', f'C{r}/{data_end_row-data_start_row+1}'))]))
    # set D format as percentage using custom
    # We'll use numfmtId 165 (percentage) via style 22, but we want formula; let's keep style 23 with custom override
    r += 1

# Footer
r += 1
rows2.append(make_row(r, [('A', 6, '金句'), ('B', 6, f'缺一就失衡——AI时代评估胜任度，看两条轨道。')]))
r += 1
rows2.append(make_row(r, [('A', 5, '配套使用：F7（启动问题听员工视角）/ F9（缺口判断）/ F10（结论纳入下次面谈清单）')]))

sheet2_body = '\n  '.join(rows2)
sheet2_xml = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView workbookViewId="0">
      <pane ySplit="4" topLeftCell="C5" activePane="bottomRight" state="frozen"/>
    </sheetView>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols>
    <col min="1" max="1" width="6" customWidth="1"/>
    <col min="2" max="2" width="11" customWidth="1"/>
    <col min="3" max="3" width="10" customWidth="1"/>
    <col min="4" max="4" width="16" customWidth="1"/>
    <col min="5" max="5" width="12" customWidth="1"/>
    <col min="6" max="6" width="14" customWidth="1"/>
    <col min="7" max="7" width="14" customWidth="1"/>
    <col min="8" max="8" width="14" customWidth="1"/>
    <col min="9" max="9" width="14" customWidth="1"/>
    <col min="10" max="10" width="13" customWidth="1"/>
    <col min="11" max="11" width="11" customWidth="1"/>
    <col min="12" max="12" width="12" customWidth="1"/>
    <col min="13" max="13" width="12" customWidth="1"/>
    <col min="14" max="14" width="14" customWidth="1"/>
    <col min="15" max="15" width="13" customWidth="1"/>
    <col min="16" max="16" width="11" customWidth="1"/>
    <col min="17" max="17" width="10" customWidth="1"/>
    <col min="18" max="18" width="30" customWidth="1"/>
  </cols>
  <sheetData>
  {sheet2_body}
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>
'''
(WORK / "xl" / "worksheets" / "sheet2.xml").write_text(sheet2_xml, encoding="utf-8")

# === Sheet 3: 个人详细评估_范例（王晓，领先型）===
rows3 = []
r = 1
rows3.append(make_row(r, [('A', 4, f'F8 双轨胜任度评估表（个人详细评估范例：王晓）')], height=28))
r += 1
rows3.append(make_row(r, [('A', 2, f'范例情境：产品部高级产品经理王晓，4年工龄，双轨打分结果为AI协作力18/20 + 人类深度14/15 = 领先型')]))
r += 1

# 基本信息
r += 1
rows3.append(make_row(r, [('A', 5, '评估对象信息')], height=22))
r += 1
rows3.append(make_row(r, [('A', 14, '员工姓名'), ('B', 16, '王晓'), ('C', 14, '部门'), ('D', 16, '产品部')]))
r += 1
rows3.append(make_row(r, [('A', 14, '岗位'), ('B', 16, '高级产品经理'), ('C', 14, '工龄'), ('D', 16, '4年')]))
r += 1
rows3.append(make_row(r, [('A', 14, '评估周期'), ('B', 16, '2025年下半年'), ('C', 14, '评估日期'), ('D', 16, '2026-01-08')]))
r += 1
rows3.append(make_row(r, [('A', 14, '评估人'), ('B', 16, '产品总监 张明'), ('C', 14, '面谈日期'), ('D', 16, '2026-01-15')]))
r += 1

# AI协作力轨道
r += 1
rows3.append(make_row(r, [('A', 5, '一、AI协作力轨道（4个能力，满分20）')], height=22))
r += 1
rows3.append(make_row(r, [('A', 14, '能力'), ('B', 14, '评分'), ('C', 14, '事实观察（具体场景）')]))
r += 1
ai_observations = [
    ('1. 识别适合AI承接的工作', 5, f'Q3的{LQ}智能推荐{RQ}项目里，能准确判断{LQ}冷启动数据标注{RQ}适合AI批量做，{LQ}推荐策略调整{RQ}由人决策'),
    ('2. 设计有效提示', 4, f'对AI的提示从模糊的{LQ}写个PRD{RQ}，迭代为分步提示{LQ}先写用户故事→再写验收标准→再写异常分支{RQ}'),
    ('3. 评估AI输出', 5, f'能识别AI输出的{LQ}看似对但实际有问题{RQ}：发现AI生成的{LQ}Z世代画像{RQ}缺了三线城市的样本偏差'),
    ('4. 整合进工作流程', 4, f'在PRD/SOP里加入{LQ}AI协作环节{RQ}（初稿AI/判断人/审核人），团队2名产品助理已采用'),
]
ai_score_rows = []  # remember cell refs for SUM
for cap, score, obs in ai_observations:
    ai_score_rows.append(r)
    rows3.append(make_row(r, [('A', 13, cap), ('B', 23, ('n', str(score))), ('C', 16, obs)]))
    r += 1

# AI total
ai_total_row = r
rows3.append(make_row(r, [('A', 14, 'AI协作力总分'), ('B', 21, ('f', f'SUM(B{ai_score_rows[0]}:B{ai_score_rows[-1]})')), ('C', 14, f'/20  →  标准化 ÷20×5 = 4.5')]))
r += 1

# 人类深度轨道
r += 1
rows3.append(make_row(r, [('A', 5, '二、人类深度轨道（3类能力，满分15）')], height=22))
r += 1
rows3.append(make_row(r, [('A', 14, '能力'), ('B', 14, '评分'), ('C', 14, '事实观察')]))
r += 1
h_observations = [
    ('A. 判断力', 5, f'Q4的{LQ}是否砍掉老年用户群体{RQ}决策中，在数据不完整情况下做出{LQ}保留并做差异化运营{RQ}的判断，3个月后DAU反涨8%'),
    ('B. 关系力', 4, f'跨部门会议中能把技术、销售的分歧转化为{LQ}我们共同的问题{RQ}；销售部主动找她咨询客户开发'),
    ('C. 领域深度', 5, f'本领域有专家级判断：能识别{LQ}老年用户{LQ}的隐性需求，提出{LQ}大字版+远程协助{RQ}的产品方案，被CEO在Q4全员会上引用'),
]
h_score_rows = []
for cap, score, obs in h_observations:
    h_score_rows.append(r)
    rows3.append(make_row(r, [('A', 13, cap), ('B', 23, ('n', str(score))), ('C', 16, obs)]))
    r += 1

h_total_row = r
rows3.append(make_row(r, [('A', 14, '人类深度总分'), ('B', 21, ('f', f'SUM(B{h_score_rows[0]}:B{h_score_rows[-1]})')), ('C', 14, f'/15  →  标准化 ÷15×5 = 4.67')]))
r += 1

# 双轨状态判断
r += 1
rows3.append(make_row(r, [('A', 5, '三、双轨状态判断')], height=22))
r += 1
rows3.append(make_row(r, [('A', 14, '轨道'), ('B', 14, '原始分'), ('C', 14, '标准化/5')]))
r += 1
ai_norm_row = r
rows3.append(make_row(r, [('A', 13, 'AI协作力'), ('B', 21, ('f', f'B{ai_total_row}')), ('C', 21, ('f', f'B{ai_total_row}/20*5'))]))
r += 1
h_norm_row = r
rows3.append(make_row(r, [('A', 13, '人类深度'), ('B', 21, ('f', f'B{h_total_row}')), ('C', 21, ('f', f'B{h_total_row}/15*5'))]))
r += 1
quadrant_row = r
rows3.append(make_row(r, [('A', 14, '双轨象限'), ('B', 24, ('f', f'IF(AND(C{ai_norm_row}>=3,C{h_norm_row}>=3),"领先型",IF(AND(C{ai_norm_row}>=3,C{h_norm_row}<3),"漂移型",IF(AND(C{ai_norm_row}<3,C{h_norm_row}>=3),"保守型","困境型"))))')), ('C', 16, '')]))
r += 1

# 整体结论
r += 1
rows3.append(make_row(r, [('A', 5, '四、整体结论（写给员工的话）')], height=22))
r += 1
rows3.append(make_row(r, [('A', 16, f'{LQ}王晓，从这次评估看，你在两条轨道上都表现突出：AI协作力4.5/5，能把AI真正整合进工作流；人类深度4.67/5，判断力和领域深度都已是专家级。{LQ}最满意的成长{RQ}是你对{LQ}老年用户群体{RQ}的差异化判断。下个季度的重点：把双轨优势放大——带团队其他人一起用AI、给更难的产品决策。{RQ}')]))
r += 2

# F7 启动问题 + 下一步
rows3.append(make_row(r, [('A', 5, '五、配套：F7 启动问题选择（用启动一+启动二组合）')], height=22))
r += 1
rows3.append(make_row(r, [('A', 14, '启动一'), ('B', 16, f'{LQ}这个周期结束，如果让你自己来说，你最满意的成长是什么？{RQ}')]))
r += 1
rows3.append(make_row(r, [('A', 14, '启动二'), ('B', 16, f'{LQ}在你用AI工具最多的那类工作里，你觉得自己做了什么？你希望在哪方面变得更有能力？{RQ}')]))
r += 1
rows3.append(make_row(r, [('A', 14, '为什么组合'), ('B', 16, f'王晓双轨都强——先启动一稳一下，再用启动二展开双轨讨论，让她自己看到{LQ}已有人类深度{RQ}这个事实')]))
r += 1

# Footer
r += 1
rows3.append(make_row(r, [('A', 6, '金句'), ('B', 6, f'AI时代，评估一个人的胜任度要看两条轨道——AI协作力+人类深度，缺一就失衡。')]))
r += 1
rows3.append(make_row(r, [('A', 5, '配套使用：F7（启动问题）/ F9（缺口判断）/ F10（结论纳入下次面谈清单）')]))

sheet3_body = '\n  '.join(rows3)
sheet3_xml = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView workbookViewId="0"/>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols>
    <col min="1" max="1" width="28" customWidth="1"/>
    <col min="2" max="2" width="14" customWidth="1"/>
    <col min="3" max="3" width="80" customWidth="1"/>
    <col min="4" max="4" width="14" customWidth="1"/>
  </cols>
  <sheetData>
  {sheet3_body}
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>
'''
(WORK / "xl" / "worksheets" / "sheet3.xml").write_text(sheet3_xml, encoding="utf-8")

# === Sheet 4: 四象限分布与建议 ===
rows4 = []
r = 1
rows4.append(make_row(r, [('A', 4, '四象限分布与下一步建议')], height=28))
r += 1
rows4.append(make_row(r, [('A', 2, f'基于{LQ}团队评估汇总{RQ}自动统计四种状态的人数。配F8的四象限定位。')]))
r += 1

r += 1
rows4.append(make_row(r, [('A', 5, '一、四象限人数分布（公式自动统计）')], height=22))
r += 1
rows4.append(make_row(r, [('A', 14, '象限'), ('B', 14, '人数'), ('C', 14, '占比'), ('D', 14, '团队占比参考标准')]))
r += 1
# Pull from sheet2
quadrants_full = [
    ('领先型', f'COUNTIF(团队评估汇总!Q{data_start_row}:Q{data_end_row},"领先型")', f'COUNTIF(团队评估汇总!Q{data_start_row}:Q{data_end_row},"领先型")/{data_end_row-data_start_row+1}', '20-30%（团队核心力量）'),
    ('漂移型', f'COUNTIF(团队评估汇总!Q{data_start_row}:Q{data_end_row},"漂移型")', f'COUNTIF(团队评估汇总!Q{data_start_row}:Q{data_end_row},"漂移型")/{data_end_row-data_start_row+1}', '<15%（越少越好）'),
    ('保守型', f'COUNTIF(团队评估汇总!Q{data_start_row}:Q{data_end_row},"保守型")', f'COUNTIF(团队评估汇总!Q{data_start_row}:Q{data_end_row},"保守型")/{data_end_row-data_start_row+1}', '30-40%（AI普惠度指标）'),
    ('困境型', f'COUNTIF(团队评估汇总!Q{data_start_row}:Q{data_end_row},"困境型")', f'COUNTIF(团队评估汇总!Q{data_start_row}:Q{data_end_row},"困境型")/{data_end_row-data_start_row+1}', '<10%（越少越好）'),
]
for name, count_f, pct_f, ref in quadrants_full:
    rows4.append(make_row(r, [('A', 14, name), ('B', 23, ('f', count_f)), ('C', 23, ('f', pct_f)), ('D', 16, ref)]))
    r += 1

r += 1
rows4.append(make_row(r, [('A', 5, '二、四种状态的解读与下一步')], height=22))
r += 1
states = [
    ('【领先型】AI高 + 人类深度高',
     f'特征：在两条轨道上都强；这是AI时代的理想状态。',
     f'风险：可能{LQ}已经够好{RQ}，缺少继续投入的紧迫感。',
     f'下一步：①挑战型发展——给更难的任务 ②横向带教——让他带团队其他人 ③F7启动一——{LQ}你最满意的成长是什么？还有哪里可以不一样？{RQ}'),
    ('【漂移型】AI高 + 人类深度低',
     f'特征：AI协作力强，但判断力/关系力/领域深度出现退化——典型的{LQ}工具依赖{RQ}。',
     f'风险：一旦AI工具变化或失效，员工能力迅速塌方。',
     f'下一步：①重点发展人类深度——这是漂移的核心 ②F6类型C/D的处理——把漂移问题转化为发展问题 ③设置{LQ}无AI日{RQ}——每周固定时间让员工独立完成核心工作'),
    ('【保守型】AI低 + 人类深度高',
     f'特征：员工能力强但不愿/不会用AI工具；产出效率上不去。',
     f'风险：长期被同行拉开差距；也可能是抵制AI的工作品行问题（F6类型E的变体）。',
     f'下一步：①优先发展AI协作力——这轨最容易短期提升 ②从具体任务开始——选1-2个高频任务让员工先用AI ③配对带教——找领先型员工带他 ④判断动机——是真的不会用，还是抵制？'),
    ('【困境型】AI低 + 人类深度低',
     f'特征：两条轨道都弱；需要更系统的诊断。',
     f'风险：绩效整体低下；员工自身可能已陷入F6类型B方向迷失。',
     f'下一步：①优先接F6类型B——先承认他的处境，再开始 ②F9决策树——判断哪类缺口最紧迫 ③重新评估岗位匹配——可能在根本的岗位适配上出问题 ④增加沟通频率——从季度面谈到月度简短沟通'),
]
for state_name, feat, risk, action in states:
    rows4.append(make_row(r, [('A', 9, state_name)], height=22))
    r += 1
    rows4.append(make_row(r, [('A', 14, '特征'), ('B', 16, feat)]))
    r += 1
    rows4.append(make_row(r, [('A', 14, '风险'), ('B', 16, risk)]))
    r += 1
    rows4.append(make_row(r, [('A', 14, '下一步'), ('B', 16, action)]))
    r += 1
    r += 1  # blank

# 团队健康度提示
r += 1
rows4.append(make_row(r, [('A', 5, '三、团队健康度检查清单')], height=22))
r += 1
health_checks = [
    (f'①领先型比例 = ', f'COUNTIF(团队评估汇总!Q{data_start_row}:Q{data_end_row},"领先型")/{data_end_row-data_start_row+1}', f'团队核心力量（理想20-30%）'),
    (f'②漂移型比例 = ', f'COUNTIF(团队评估汇总!Q{data_start_row}:Q{data_end_row},"漂移型")/{data_end_row-data_start_row+1}', f'风险信号（应<15%）'),
    (f'③保守型比例 = ', f'COUNTIF(团队评估汇总!Q{data_start_row}:Q{data_end_row},"保守型")/{data_end_row-data_start_row+1}', f'AI普惠度（30-40%表示正常过渡）'),
    (f'④困境型比例 = ', f'COUNTIF(团队评估汇总!Q{data_start_row}:Q{data_end_row},"困境型")/{data_end_row-data_start_row+1}', f'高风险（应<10%）'),
    (f'⑤AI协作力团队均值 = ', f'AVERAGE(团队评估汇总!K{data_start_row}:K{data_end_row})', f'4.0+ 为优秀，3.0-4.0 正常，<3.0 需加强AI培训'),
    (f'⑥人类深度团队均值 = ', f'AVERAGE(团队评估汇总!P{data_start_row}:P{data_end_row})', f'4.0+ 为优秀，3.0-4.0 正常，<3.0 需关注判断力/关系力退化'),
]
for label, formula, hint in health_checks:
    rows4.append(make_row(r, [('A', 14, label), ('B', 23, ('f', formula)), ('C', 16, hint)]))
    r += 1

# Footer
r += 1
rows4.append(make_row(r, [('A', 6, '金句'), ('B', 6, f'缺一就失衡——AI时代评估胜任度，看两条轨道。')]))

sheet4_body = '\n  '.join(rows4)
sheet4_xml = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView workbookViewId="0"/>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols>
    <col min="1" max="1" width="22" customWidth="1"/>
    <col min="2" max="2" width="14" customWidth="1"/>
    <col min="3" max="3" width="50" customWidth="1"/>
    <col min="4" max="4" width="35" customWidth="1"/>
  </cols>
  <sheetData>
  {sheet4_body}
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>
'''
(WORK / "xl" / "worksheets" / "sheet4.xml").write_text(sheet4_xml, encoding="utf-8")

# Update workbook.xml for 4 sheets
wb_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <fileVersion appName="xl" lastEdited="7" lowestEdited="7"/>
  <workbookPr defaultThemeVersion="166925"/>
  <bookViews>
    <workbookView xWindow="0" yWindow="0" windowWidth="20140" windowHeight="10960"/>
  </bookViews>
  <sheets>
    <sheet name="使用说明" sheetId="1" r:id="rId1"/>
    <sheet name="团队评估汇总" sheetId="2" r:id="rId4"/>
    <sheet name="个人详细评估_范例" sheetId="3" r:id="rId5"/>
    <sheet name="四象限分布与建议" sheetId="4" r:id="rId6"/>
  </sheets>
  <calcPr calcId="191029"/>
</workbook>
'''
(WORK / "xl" / "workbook.xml").write_text(wb_xml, encoding="utf-8")

rels_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
  <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml"/>
  <Relationship Id="rId4" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet2.xml"/>
  <Relationship Id="rId5" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet3.xml"/>
  <Relationship Id="rId6" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet4.xml"/>
</Relationships>
'''
(WORK / "xl" / "_rels" / "workbook.xml.rels").write_text(rels_xml, encoding="utf-8")

ss_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="0" uniqueCount="0"/>
'''
(WORK / "xl" / "sharedStrings.xml").write_text(ss_xml, encoding="utf-8")

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
</Types>
'''
(WORK / "[Content_Types].xml").write_text(ct_xml, encoding="utf-8")

# Pack
OUT_FILE = OUT_DIR / "03_双轨胜任度评估表_团队版.xlsx"
res = subprocess.run(
    ["python", r"C:/Users/Administrator/.claude/skills/Excel表格处理/scripts/xlsx_pack.py",
     str(WORK), str(OUT_FILE)],
    capture_output=True, text=True
)
print("STDOUT:", res.stdout[-500:] if res.stdout else '')
print("STDERR:", res.stderr[-500:] if res.stderr else '')
print("Return code:", res.returncode)
print("Output file exists:", OUT_FILE.exists())
print("File size:", OUT_FILE.stat().st_size if OUT_FILE.exists() else "N/A")
