#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import os
import shutil
import subprocess
import sys

os.environ['PYTHONIOENCODING'] = 'utf-8'
sys.stdout.reconfigure(encoding='utf-8')

SKILL_DIR = r'C:\Users\Administrator\.claude\skills\Excel表格处理'
OUT_DIR = r'D:\新课开发\德鲁克\重构效能\完整课程包\06-工具表单'

def copy_template(work_dir):
    shutil.rmtree(work_dir, ignore_errors=True)
    shutil.copytree(os.path.join(SKILL_DIR, 'templates', 'minimal_xlsx'), work_dir)

def pack(work_dir, output_path):
    subprocess.run([sys.executable, os.path.join(SKILL_DIR, 'scripts', 'xlsx_pack.py'), work_dir, output_path], check=True, encoding='utf-8')

def build_styles():
    return '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <fonts>
    <font><sz val="11"/><name val="Calibri"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="000000FF"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="00000000"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="00008000"/></font>
    <font><b/><sz val="11"/><name val="Calibri"/><color rgb="FFFFFFFF"/></font>
  </fonts>
  <fills>
    <fill><patternFill patternType="none"/></fill>
    <fill><patternFill patternType="gray125"/></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="002B2D42"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="00EDF2F4"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="00FFFFFF"/></patternFill></fill>
  </fills>
  <borders>
    <border><left/><right/><top/><bottom/><diagonal/></border>
    <border>
      <left style="thin"><color rgb="FF000000"/></left>
      <right style="thin"><color rgb="FF000000"/></right>
      <top style="thin"><color rgb="FF000000"/></top>
      <bottom style="thin"><color rgb="FF000000"/></bottom>
      <diagonal/>
    </border>
  </borders>
  <cellStyleXfs>
    <xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/>
  </cellStyleXfs>
  <cellXfs>
    <xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0" applyFont="1" applyAlignment="1"><alignment horizontal="left" vertical="center"/></xf>
    <xf numFmtId="0" fontId="0" fillId="4" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1" applyAlignment="1"><alignment horizontal="center" vertical="center"/></xf>
    <xf numFmtId="0" fontId="0" fillId="3" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1" applyAlignment="1"><alignment horizontal="center" vertical="center"/></xf>
    <xf numFmtId="0" fontId="4" fillId="2" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1" applyAlignment="1"><alignment horizontal="center" vertical="center" wrapText="1"/></xf>
    <xf numFmtId="164" fontId="2" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"><alignment horizontal="right"/></xf>
    <xf numFmtId="165" fontId="2" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"><alignment horizontal="center"/></xf>
  </cellXfs>
  <numFmts>
    <numFmt numFmtId="164" formatCode="$#,##0;($#,##0);&quot;-&quot;"/>
    <numFmt numFmtId="165" formatCode="0.0%"/>
  </numFmts>
</styleSheet>'''

# ========== FILE 1: 07-遗弃候选清单.xlsx ==========
print("Building File 1: 07-遗弃候选清单.xlsx")
work_dir = r'C:\tmp\xlsx_07_work'
copy_template(work_dir)

strings = [
    '遗弃候选清单', '工作项', '当前投入时间/周（小时）', '遗弃候选类型', '阻力来源', '行动建议', '阻力克服方案',
    '停止', '减少', '移交AI',
    '习惯', '压力', '没人接手', '其他',
    '示例1：每日例行邮件处理', '示例2：低优先级会议', '示例3：可委托下属的审批',
    '示例4：重复性报表制作', '示例5：无明确产出的社交活动', '示例6：个人兴趣学习（非职业相关）',
    '示例7：过多信息浏览', '示例8：完美主义驱动的重复修改', '示例9：可自动化的收集工作', '示例10：缺乏优先级的临时任务',
    '统计', '总投入时间', '可遗弃时间', '遗弃率'
]

with open(os.path.join(work_dir, 'xl', 'sharedStrings.xml'), 'w', encoding='utf-8') as f:
    si_entries = ''.join(['<si><t>' + s + '</t></si>' for s in strings])
    f.write('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n')
    f.write('<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="' + str(len(strings)) + '" uniqueCount="' + str(len(strings)) + '">\n')
    f.write(si_entries)
    f.write('\n</sst>')

with open(os.path.join(work_dir, 'xl', 'styles.xml'), 'w', encoding='utf-8') as f:
    f.write(build_styles())

with open(os.path.join(work_dir, 'xl', 'workbook.xml'), 'w', encoding='utf-8') as f:
    f.write('''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheets>
    <sheet name="遗弃候选清单" sheetId="1" r:id="rId1"/>
  </sheets>
</workbook>''')

with open(os.path.join(work_dir, 'xl', '_rels', 'workbook.xml.rels'), 'w', encoding='utf-8') as f:
    f.write('''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
  <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml"/>
</Relationships>''')

with open(os.path.join(work_dir, '[Content_Types].xml'), 'w', encoding='utf-8') as f:
    f.write('''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
  <Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>
  <Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/>
</Types>''')

rows = []
rows.append('<row r="1"><c r="A1" t="s" s="3"><v>0</v></c></row>')
rows.append('<row r="2"><c r="A2" t="s" s="3"><v>1</v></c><c r="B2" t="s" s="3"><v>2</v></c><c r="C2" t="s" s="3"><v>3</v></c><c r="D2" t="s" s="3"><v>4</v></c><c r="E2" t="s" s="3"><v>5</v></c><c r="F2" t="s" s="3"><v>6</v></c></row>')

data_items = [
    ('示例1：每日例行邮件处理', '3.5', '停止', '习惯'),
    ('示例2：低优先级会议', '2.0', '停止', '压力'),
    ('示例3：可委托下属的审批', '1.5', '移交AI', '没人接手'),
    ('示例4：重复性报表制作', '2.5', '移交AI', '习惯'),
    ('示例5：无明确产出的社交活动', '1.0', '减少', '压力'),
    ('示例6：个人兴趣学习（非职业相关）', '2.0', '减少', '其他'),
    ('示例7：过多信息浏览', '1.5', '减少', '习惯'),
    ('示例8：完美主义驱动的重复修改', '2.0', '减少', '习惯'),
    ('示例9：可自动化的收集工作', '1.5', '移交AI', '没人接手'),
    ('示例10：缺乏优先级的临时任务', '2.0', '停止', '压力'),
]

type_idx_map = {'停止': 7, '减少': 8, '移交AI': 9}
resist_idx_map = {'习惯': 10, '压力': 11, '没人接手': 12, '其他': 13}

for i, (item, time, type_, resistance) in enumerate(data_items):
    row_num = i + 3
    fill_style = 's="2"' if i % 2 == 0 else 's="1"'
    type_idx = type_idx_map[type_]
    resist_idx = resist_idx_map[resistance]
    item_idx = 14 + i
    rows.append(f'<row r="{row_num}"><c r="A{row_num}" t="s" {fill_style}><v>{item_idx}</v></c><c r="B{row_num}" t="s" {fill_style}><v>{item_idx}</v></c><c r="C{row_num}" t="s" {fill_style}><v>{type_idx}</v></c><c r="D{row_num}" t="s" {fill_style}><v>{resist_idx}</v></c><c r="E{row_num}" t="s" {fill_style}><v>{item_idx}</v></c><c r="F{row_num}" t="s" {fill_style}><v>{item_idx}</v></c></row>')

rows.append('<row r="13"><c r="A13" t="s" s="3"><v>24</v></c></row>')
rows.append('<row r="14"><c r="A14" t="s" s="3"><v>25</v></c><c r="B14" t="s" s="3"><v>26</v></c><c r="C14" t="s" s="3"><v>27</v></c></row>')
rows.append('<row r="15"><c r="A15" s="4"><f>SUM(B3:B12)</f><v></v></c><c r="B15" s="4"><f>SUM(B3:B12)</f><v></v></c><c r="C15" s="4"><f>B15/A15</f><v></v></c></row>')

sheet_data = '\n'.join(rows)

with open(os.path.join(work_dir, 'xl', 'worksheets', 'sheet1.xml'), 'w', encoding='utf-8') as f:
    f.write('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n')
    f.write('<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">\n')
    f.write('  <sheetViews><sheetView workbookViewId="0"><pane ySplit="2" topLeftCell="A3" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>\n')
    f.write('  <sheetFormatPr defaultRowHeight="15"/>\n')
    f.write('  <cols>\n')
    f.write('    <col min="1" max="1" width="32" customWidth="1"/>\n')
    f.write('    <col min="2" max="2" width="18" customWidth="1"/>\n')
    f.write('    <col min="3" max="3" width="14" customWidth="1"/>\n')
    f.write('    <col min="4" max="4" width="12" customWidth="1"/>\n')
    f.write('    <col min="5" max="5" width="28" customWidth="1"/>\n')
    f.write('    <col min="6" max="6" width="28" customWidth="1"/>\n')
    f.write('  </cols>\n')
    f.write('  <sheetData>\n')
    f.write(sheet_data)
    f.write('\n  </sheetData>\n')
    f.write('  <dataValidations>\n')
    f.write('    <dataValidation type="list" sqref="C3:C12" formula1="&quot;停止,减少,移交AI&quot;" showInputMessage="1" prompt="选择遗弃候选类型" promptTitle="遗弃候选类型"/>\n')
    f.write('    <dataValidation type="list" sqref="D3:D12" formula1="&quot;习惯,压力,没人接手,其他&quot;" showInputMessage="1" prompt="选择阻力来源" promptTitle="阻力来源"/>\n')
    f.write('  </dataValidations>\n')
    f.write('  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>\n')
    f.write('</worksheet>')

pack(work_dir, os.path.join(OUT_DIR, '07-遗弃候选清单.xlsx'))
print("Created: 07-遗弃候选清单.xlsx")

# ========== FILE 2: 08-有效决策五步骤工作表.xlsx ==========
print("\nBuilding File 2: 08-有效决策五步骤工作表.xlsx")
work_dir = r'C:\tmp\xlsx_08_work'
copy_template(work_dir)

strings2 = [
    '有效决策五步骤工作表', '决策背景描述',
    '步骤1：识别问题类型', '问题类型', '通用问题', '特殊问题',
    '步骤2：明确边界条件', '边界条件描述',
    '步骤3：替代方案', '方案A', '方案B', '方案C',
    '步骤4：权衡方案', '评估维度', '方案A评分', '方案B评分', '方案C评分',
    '步骤5：决策转行动', '决策结果', '行动计划', '责任人', '时间节点',
    'AI辅助记录', 'AI建议', '关键考量点'
]

with open(os.path.join(work_dir, 'xl', 'sharedStrings.xml'), 'w', encoding='utf-8') as f:
    si_entries = ''.join(['<si><t>' + s + '</t></si>' for s in strings2])
    f.write('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n')
    f.write('<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="' + str(len(strings2)) + '" uniqueCount="' + str(len(strings2)) + '">\n')
    f.write(si_entries)
    f.write('\n</sst>')

with open(os.path.join(work_dir, 'xl', 'styles.xml'), 'w', encoding='utf-8') as f:
    f.write(build_styles())

with open(os.path.join(work_dir, 'xl', 'workbook.xml'), 'w', encoding='utf-8') as f:
    f.write('''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheets>
    <sheet name="决策工作表" sheetId="1" r:id="rId1"/>
  </sheets>
</workbook>''')

with open(os.path.join(work_dir, 'xl', '_rels', 'workbook.xml.rels'), 'w', encoding='utf-8') as f:
    f.write('''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
  <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml"/>
</Relationships>''')

with open(os.path.join(work_dir, '[Content_Types].xml'), 'w', encoding='utf-8') as f:
    f.write('''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
  <Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>
  <Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/>
</Types>''')

rows2 = []
rows2.append('<row r="1"><c r="A1" t="s" s="3"><v>0</v></c></row>')
rows2.append('<row r="2"><c r="A2" t="s" s="3" colspan="4"><v>1</v></c></row>')
rows2.append('<row r="3"><c r="A3" t="s" s="2"><v>2</v></c><c r="B3" t="s" s="1"></c><c r="C3" t="s" s="1"></c><c r="D3" t="s" s="1"></c></row>')
rows2.append('<row r="4"><c r="A4" t="s" s="3"><v>3</v></c><c r="B4" t="s" s="3"><v>4</v></c></row>')
rows2.append('<row r="5"><c r="A5" t="s" s="1"><v>5</v></c><c r="B5" t="s" s="1"></c><c r="C5" t="s" s="1"><v>6</v></c><c r="D5" t="s" s="1"></c></row>')
rows2.append('<row r="6"><c r="A6" t="s" s="3"><v>7</v></c></row>')
rows2.append('<row r="7"><c r="A7" t="s" s="1"><v>8</v></c><c r="B7" t="s" s="1"></c><c r="C7" t="s" s="1"></c><c r="D7" t="s" s="1"></c></row>')
rows2.append('<row r="8"><c r="A8" t="s" s="3"><v>9</v></c></row>')
rows2.append('<row r="9"><c r="A9" t="s" s="2"><v>10</v></c><c r="B9" t="s" s="1"></c></row>')
rows2.append('<row r="10"><c r="A10" t="s" s="2"><v>11</v></c><c r="B10" t="s" s="1"></c></row>')
rows2.append('<row r="11"><c r="A11" t="s" s="2"><v>12</v></c><c r="B11" t="s" s="1"></c></row>')
rows2.append('<row r="12"><c r="A12" t="s" s="3"><v>13</v></c></row>')
rows2.append('<row r="13"><c r="A13" t="s" s="2"><v>14</v></c><c r="B13" t="s" s="3"><v>15</v></c><c r="C13" t="s" s="3"><v>16</v></c><c r="D13" t="s" s="3"><v>17</v></c></row>')
rows2.append('<row r="14"><c r="A14" t="s" s="1"></c><c r="B14" t="s" s="1"></c><c r="C14" t="s" s="1"></c><c r="D14" t="s" s="1"></c></row>')
rows2.append('<row r="15"><c r="A15" t="s" s="1"></c><c r="B15" t="s" s="1"></c><c r="C15" t="s" s="1"></c><c r="D15" t="s" s="1"></c></row>')
rows2.append('<row r="16"><c r="A16" t="s" s="3"><v>18</v></c></row>')
rows2.append('<row r="17"><c r="A17" t="s" s="2"><v>19</v></c><c r="B17" t="s" s="1"></c><c r="C17" t="s" s="2"><v>20</v></c><c r="D17" t="s" s="2"><v>21</v></c></row>')
rows2.append('<row r="18"><c r="A18" t="s" s="3"><v>22</v></c></row>')
rows2.append('<row r="19"><c r="A19" t="s" s="2"><v>23</v></c><c r="B19" t="s" s="1"></c></row>')
rows2.append('<row r="20"><c r="A20" t="s" s="2"><v>24</v></c><c r="B20" t="s" s="1"></c></row>')
rows2.append('<row r="21"><c r="A21" t="s" s="2"><v>25</v></c><c r="B21" t="s" s="1"></c></row>')
rows2.append('<row r="22"><c r="A22" t="s" s="3"><v>26</v></c></row>')
rows2.append('<row r="23"><c r="A23" t="s" s="1"></c><c r="B23" t="s" s="1"></c></row>')

sheet_data2 = '\n'.join(rows2)

with open(os.path.join(work_dir, 'xl', 'worksheets', 'sheet1.xml'), 'w', encoding='utf-8') as f:
    f.write('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n')
    f.write('<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">\n')
    f.write('  <sheetViews><sheetView workbookViewId="0"/></sheetViews>\n')
    f.write('  <sheetFormatPr defaultRowHeight="15"/>\n')
    f.write('  <cols>\n')
    f.write('    <col min="1" max="1" width="24" customWidth="1"/>\n')
    f.write('    <col min="2" max="2" width="18" customWidth="1"/>\n')
    f.write('    <col min="3" max="3" width="18" customWidth="1"/>\n')
    f.write('    <col min="4" max="4" width="18" customWidth="1"/>\n')
    f.write('  </cols>\n')
    f.write('  <sheetData>\n')
    f.write(sheet_data2)
    f.write('\n  </sheetData>\n')
    f.write('  <dataValidations>\n')
    f.write('    <dataValidation type="list" sqref="B5" formula1="&quot;通用问题,特殊问题&quot;" showInputMessage="1" prompt="选择问题类型" promptTitle="问题类型"/>\n')
    f.write('  </dataValidations>\n')
    f.write('  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>\n')
    f.write('</worksheet>')

pack(work_dir, os.path.join(OUT_DIR, '08-有效决策五步骤工作表.xlsx'))
print("Created: 08-有效决策五步骤工作表.xlsx")

# ========== FILE 3: 09-效能重构计划表.xlsx ==========
print("\nBuilding File 3: 09-效能重构计划表.xlsx")
work_dir = r'C:\tmp\xlsx_09_work'
copy_template(work_dir)

strings3 = [
    '效能重构计划表', '聚焦领域', '当前状态', '目标状态', '具体行动（5步骤）', '衡量标准', '时间节点', '支持资源', '障碍预测', '应对方案',
    '步骤1：', '步骤2：', '步骤3：', '步骤4：', '步骤5：'
]

with open(os.path.join(work_dir, 'xl', 'sharedStrings.xml'), 'w', encoding='utf-8') as f:
    si_entries = ''.join(['<si><t>' + s + '</t></si>' for s in strings3])
    f.write('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n')
    f.write('<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="' + str(len(strings3)) + '" uniqueCount="' + str(len(strings3)) + '">\n')
    f.write(si_entries)
    f.write('\n</sst>')

with open(os.path.join(work_dir, 'xl', 'styles.xml'), 'w', encoding='utf-8') as f:
    f.write(build_styles())

with open(os.path.join(work_dir, 'xl', 'workbook.xml'), 'w', encoding='utf-8') as f:
    f.write('''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheets>
    <sheet name="效能重构计划" sheetId="1" r:id="rId1"/>
  </sheets>
</workbook>''')

with open(os.path.join(work_dir, 'xl', '_rels', 'workbook.xml.rels'), 'w', encoding='utf-8') as f:
    f.write('''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
  <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml"/>
</Relationships>''')

with open(os.path.join(work_dir, '[Content_Types].xml'), 'w', encoding='utf-8') as f:
    f.write('''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
  <Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>
  <Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/>
</Types>''')

rows3 = []
rows3.append('<row r="1"><c r="A1" t="s" s="3" colspan="8"><v>0</v></c></row>')
rows3.append('<row r="2"><c r="A2" t="s" s="3"><v>1</v></c><c r="B2" t="s" s="3"><v>2</v></c><c r="C2" t="s" s="3"><v>3</v></c><c r="D2" t="s" s="3"><v>4</v></c><c r="E2" t="s" s="3"><v>5</v></c><c r="F2" t="s" s="3"><v>6</v></c><c r="G2" t="s" s="3"><v>7</v></c><c r="H2" t="s" s="3"><v>8</v></c></row>')

for i in range(5):
    row_num = i + 3
    fill_style = 's="2"' if i % 2 == 0 else 's="1"'
    rows3.append(f'<row r="{row_num}"><c r="A{row_num}" t="s" {fill_style}><v>10</v></c><c r="B{row_num}" t="s" {fill_style}></c><c r="C{row_num}" t="s" {fill_style}></c><c r="D{row_num}" t="s" {fill_style}></c><c r="E{row_num}" t="s" {fill_style}></c><c r="F{row_num}" t="s" {fill_style}></c><c r="G{row_num}" t="s" {fill_style}></c><c r="H{row_num}" t="s" {fill_style}></c></row>')

sheet_data3 = '\n'.join(rows3)

with open(os.path.join(work_dir, 'xl', 'worksheets', 'sheet1.xml'), 'w', encoding='utf-8') as f:
    f.write('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n')
    f.write('<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">\n')
    f.write('  <sheetViews><sheetView workbookViewId="0"><pane ySplit="2" topLeftCell="A3" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>\n')
    f.write('  <sheetFormatPr defaultRowHeight="15"/>\n')
    f.write('  <cols>\n')
    f.write('    <col min="1" max="1" width="16" customWidth="1"/>\n')
    f.write('    <col min="2" max="2" width="18" customWidth="1"/>\n')
    f.write('    <col min="3" max="3" width="18" customWidth="1"/>\n')
    f.write('    <col min="4" max="4" width="22" customWidth="1"/>\n')
    f.write('    <col min="5" max="5" width="14" customWidth="1"/>\n')
    f.write('    <col min="6" max="6" width="14" customWidth="1"/>\n')
    f.write('    <col min="7" max="7" width="14" customWidth="1"/>\n')
    f.write('    <col min="8" max="8" width="18" customWidth="1"/>\n')
    f.write('  </cols>\n')
    f.write('  <sheetData>\n')
    f.write(sheet_data3)
    f.write('\n  </sheetData>\n')
    f.write('  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>\n')
    f.write('</worksheet>')

pack(work_dir, os.path.join(OUT_DIR, '09-效能重构计划表.xlsx'))
print("Created: 09-效能重构计划表.xlsx")

# ========== FILE 4: 10-每周效能回顾卡.xlsx ==========
print("\nBuilding File 4: 10-每周效能回顾卡.xlsx")
work_dir = r'C:\tmp\xlsx_10_work'
copy_template(work_dir)

strings4 = [
    '每周效能回顾卡', '周次', '自我评估（1-5分）', '效能提升', '时间管理', 'AI使用率', '目标达成', '专注度', '收获', '挑战', '改进措施'
]

with open(os.path.join(work_dir, 'xl', 'sharedStrings.xml'), 'w', encoding='utf-8') as f:
    si_entries = ''.join(['<si><t>' + s + '</t></si>' for s in strings4])
    f.write('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n')
    f.write('<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="' + str(len(strings4)) + '" uniqueCount="' + str(len(strings4)) + '">\n')
    f.write(si_entries)
    f.write('\n</sst>')

with open(os.path.join(work_dir, 'xl', 'styles.xml'), 'w', encoding='utf-8') as f:
    f.write(build_styles())

with open(os.path.join(work_dir, 'xl', 'workbook.xml'), 'w', encoding='utf-8') as f:
    f.write('''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheets>
    <sheet name="效能回顾" sheetId="1" r:id="rId1"/>
  </sheets>
</workbook>''')

with open(os.path.join(work_dir, 'xl', '_rels', 'workbook.xml.rels'), 'w', encoding='utf-8') as f:
    f.write('''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
  <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml"/>
</Relationships>''')

with open(os.path.join(work_dir, '[Content_Types].xml'), 'w', encoding='utf-8') as f:
    f.write('''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
  <Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>
  <Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/>
</Types>''')

rows4 = []
rows4.append('<row r="1"><c r="A1" t="s" s="3" colspan="10"><v>0</v></c></row>')
rows4.append('<row r="2"><c r="A2" t="s" s="3"><v>1</v></c><c r="B2" t="s" s="3"><v>2</v></c><c r="C2" t="s" s="3"><v>3</v></c><c r="D2" t="s" s="3"><v>4</v></c><c r="E2" t="s" s="3"><v>5</v></c><c r="F2" t="s" s="3"><v>6</v></c><c r="G2" t="s" s="3"><v>7</v></c><c r="H2" t="s" s="3"><v>8</v></c><c r="I2" t="s" s="3"><v>9</v></c><c r="J2" t="s" s="3"><v>10</v></c></row>')

# 4 data rows
for i in range(4):
    row_num = i + 3
    fill_style = 's="2"' if i % 2 == 0 else 's="1"'
    rows4.append(f'<row r="{row_num}"><c r="A{row_num}" t="s" {fill_style}><v>{1}</v></c><c r="B{row_num}" t="s" {fill_style}></c><c r="C{row_num}" t="s" {fill_style}></c><c r="D{row_num}" t="s" {fill_style}></c><c r="E{row_num}" t="s" {fill_style}></c><c r="F{row_num}" t="s" {fill_style}></c><c r="G{row_num}" t="s" {fill_style}></c><c r="H{row_num}" t="s" {fill_style}></c><c r="I{row_num}" t="s" {fill_style}></c><c r="J{row_num}" t="s" {fill_style}></c></row>')

sheet_data4 = '\n'.join(rows4)

with open(os.path.join(work_dir, 'xl', 'worksheets', 'sheet1.xml'), 'w', encoding='utf-8') as f:
    f.write('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n')
    f.write('<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">\n')
    f.write('  <sheetViews><sheetView workbookViewId="0"><pane ySplit="2" topLeftCell="A3" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>\n')
    f.write('  <sheetFormatPr defaultRowHeight="15"/>\n')
    f.write('  <cols>\n')
    f.write('    <col min="1" max="1" width="10" customWidth="1"/>\n')
    f.write('    <col min="2" max="2" width="12" customWidth="1"/>\n')
    f.write('    <col min="3" max="3" width="12" customWidth="1"/>\n')
    f.write('    <col min="4" max="4" width="12" customWidth="1"/>\n')
    f.write('    <col min="5" max="5" width="12" customWidth="1"/>\n')
    f.write('    <col min="6" max="6" width="12" customWidth="1"/>\n')
    f.write('    <col min="7" max="7" width="18" customWidth="1"/>\n')
    f.write('    <col min="8" max="8" width="18" customWidth="1"/>\n')
    f.write('    <col min="9" max="9" width="18" customWidth="1"/>\n')
    f.write('    <col min="10" max="10" width="20" customWidth="1"/>\n')
    f.write('  </cols>\n')
    f.write('  <sheetData>\n')
    f.write(sheet_data4)
    f.write('\n  </sheetData>\n')
    f.write('  <dataValidations>\n')
    f.write('    <dataValidation type="list" sqref="B3:G6" formula1="&quot;1,2,3,4,5&quot;" showInputMessage="1" prompt="评分1-5" promptTitle="自我评估"/>\n')
    f.write('  </dataValidations>\n')
    f.write('  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>\n')
    f.write('</worksheet>')

pack(work_dir, os.path.join(OUT_DIR, '10-每周效能回顾卡.xlsx'))
print("Created: 10-每周效能回顾卡.xlsx")

print("\n=== All 4 files created successfully! ===")