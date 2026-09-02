#!/usr/bin/env python3
"""Create 课程内容总览.xlsx for Cold War Revisited course"""

import subprocess
import os

SKILL_DIR = "C:/Users/Administrator/.claude/skills/Excel表格处理"
TMP = "/tmp/xlsx_work"
OUT_DIR = "D:/新课开发/政治学/16_冷战重访-意识形态对抗的政治遗产/Excel"

# Clean and copy template
os.system(f"rm -rf {TMP}")
os.system(f"cp -r {SKILL_DIR}/templates/minimal_xlsx/ {TMP}")

# ===== STEP 1: Create sharedStrings.xml =====
shared_strings = [
    "课程内容总览",  # 0
    "模块",  # 1
    "主题",  # 2
    "核心内容",  # 3
    "学习目标",  # 4
    "课时",  # 5
    "模块一：什么是冷战",  # 6
    "模块二：意识形态对抗",  # 7
    "模块三：代理人战争",  # 8
    "模块四：冷战思维的现代延续",  # 9
    "模块五：\"新冷战\"再思考",  # 10
    "模块六：独立思考工具",  # 11
    "冷战的历史背景与定义",  # 12
    "两极格局的形成",  # 13
    "冷战与热战的关系",  # 14
    "理解冷战的本质特征",  # 15
    "掌握冷战的基本概念框架",  # 16
    "3",  # 17
    "意识形态在冷战中的角色",  # 18
    "资本主义 vs 社会主义",  # 19
    "意识形态宣传机器",  # 20
    "文化冷战",  # 21
    "理解意识形态如何塑造冷战对抗",  # 22
    "分析意识形态与实际利益的关系",  # 23
    "4",  # 24
    "什么是代理人战争",  # 25
    "冷战主要代理人战争",  # 26
    "案例：朝鲜战争",  # 27
    "案例：越南战争",  # 28
    "理解代理人战争的逻辑",  # 29
    "评估代理人战争的影响",  # 30
    "5",  # 31
    "冷战思维的延续",  # 32
    "新冷战的特征",  # 33
    "中美关系分析",  # 34
    "科技与冷战",  # 35
    "识别冷战思维的现代表现",  # 36
    "理解大国竞争新态势",  # 37
    "4",  # 38
    "新冷战的多元视角",  # 39
    "历史对比分析",  # 40
    "中国学者的观点",  # 41
    "培养批判性思维能力",  # 42
    "避免简单类比历史",  # 43
    "3",  # 44
    "独立思考工具",  # 45
    "历史证据评估",  # 46
    "利益分析框架",  # 47
    "意识形态批判",  # 48
    "建立独立分析框架",  # 49
    "避免被单一叙事绑架",  # 50
    "2",  # 51
    "教学周次",  # 52
    "教学内容",  # 53
    "教学方法",  # 54
    "第1周",  # 55
    "冷战概述与模块一",  # 56
    "讲授+讨论",  # 57
    "第2周",  # 58
    "模块二：意识形态对抗",  # 59
    "案例分析",  # 60
    "第3周",  # 61
    "模块三：代理人战争",  # 62
    "讲授+影片分析",  # 63
    "第4周",  # 64
    "模块四：冷战思维延续",  # 65
    "小组讨论",  # 66
    "第5周",  # 67
    "模块五：新冷战思考",  # 68
    "辩论赛",  # 69
    "第6周",  # 70
    "模块六：独立思考工具+总结",  # 71
    " workshop",  # 72 - space preserved
]

# Write sharedStrings.xml
with open(f"{TMP}/xl/sharedStrings.xml", "w", encoding="utf-8") as f:
    f.write('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n')
    f.write('<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" ')
    f.write(f'count="{len(shared_strings)}" uniqueCount="{len(shared_strings)}">\n')
    for s in shared_strings:
        escaped = s.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")
        f.write(f'  <si><t>{escaped}</t></si>\n')
    f.write('</sst>')

# ===== STEP 2: Create workbook.xml with 2 sheets =====
with open(f"{TMP}/xl/workbook.xml", "w", encoding="utf-8") as f:
    f.write('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n')
    f.write('<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" ')
    f.write('xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">\n')
    f.write('  <sheets>\n')
    f.write('    <sheet name="课程模块总览" sheetId="1" r:id="rId1"/>\n')
    f.write('    <sheet name="教学进度表" sheetId="2" r:id="rId4"/>\n')
    f.write('  </sheets>\n')
    f.write('</workbook>')

# ===== STEP 3: Update workbook.xml.rels =====
with open(f"{TMP}/xl/_rels/workbook.xml.rels", "w", encoding="utf-8") as f:
    f.write('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n')
    f.write('<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">\n')
    f.write('  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>\n')
    f.write('  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>\n')
    f.write('  <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml"/>\n')
    f.write('  <Relationship Id="rId4" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet2.xml"/>\n')
    f.write('</Relationships>')

# ===== STEP 4: Update Content_Types.xml =====
with open(f"{TMP}/[Content_Types].xml", "w", encoding="utf-8") as f:
    f.write('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n')
    f.write('<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">\n')
    f.write('  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>\n')
    f.write('  <Default Extension="xml" ContentType="application/xml"/>\n')
    f.write('  <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>\n')
    f.write('  <Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>\n')
    f.write('  <Override PartName="/xl/worksheets/sheet2.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>\n')
    f.write('  <Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>\n')
    f.write('  <Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/>\n')
    f.write('</Types>')

# ===== STEP 5: Create sheet1.xml (课程模块总览) =====
# 6 modules, each with 4 columns: 模块, 主题, 核心内容, 学习目标, 课时
sheet1_rows = []

# Row 1: Headers
sheet1_rows.append('''  <row r="1" ht="20" customHeight="1">
    <c r="A1" t="s" s="4"><v>1</v></c>
    <c r="B1" t="s" s="4"><v>2</v></c>
    <c r="C1" t="s" s="4"><v>3</v></c>
    <c r="D1" t="s" s="4"><v>4</v></c>
    <c r="E1" t="s" s="4"><v>5</v></c>
  </row>''')

# Module data: (row, module_idx, topics_idx, core_content_idx, objective_idx, hours_idx)
modules = [
    (2, 6, 12, 15, 16, 17),
    (3, 7, 18, 20, 22, 24),
    (4, 8, 25, 29, 30, 31),
    (5, 9, 32, 35, 36, 38),
    (6, 10, 39, 42, 43, 44),
    (7, 11, 45, 48, 49, 51),
]

for row_num, mod_idx, topics_idx, core_idx, obj_idx, hours_idx in modules:
    sheet1_rows.append(f'''  <row r="{row_num}">
    <c r="A{row_num}" t="s" s="1"><v>{mod_idx}</v></c>
    <c r="B{row_num}" t="s" s="0"><v>{topics_idx}</v></c>
    <c r="C{row_num}" t="s" s="0"><v>{core_idx}</v></c>
    <c r="D{row_num}" t="s" s="0"><v>{obj_idx}</v></c>
    <c r="E{row_num}" t="s" s="1"><v>{hours_idx}</v></c>
  </row>''')

sheet1_xml = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView workbookViewId="0"/>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols>
    <col min="1" max="1" width="20" customWidth="1"/>
    <col min="2" max="2" width="28" customWidth="1"/>
    <col min="3" max="3" width="40" customWidth="1"/>
    <col min="4" max="4" width="35" customWidth="1"/>
    <col min="5" max="5" width="10" customWidth="1"/>
  </cols>
  <sheetData>
{chr(10).join(sheet1_rows)}
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

with open(f"{TMP}/xl/worksheets/sheet1.xml", "w", encoding="utf-8") as f:
    f.write(sheet1_xml)

# ===== STEP 6: Create sheet2.xml (教学进度表) =====
sheet2_rows = []

# Row 1: Headers
sheet2_rows.append('''  <row r="1" ht="20" customHeight="1">
    <c r="A1" t="s" s="4"><v>52</v></c>
    <c r="B1" t="s" s="4"><v>53</v></c>
    <c r="C1" t="s" s="4"><v>54</v></c>
  </row>''')

# Schedule data
schedule = [
    (2, 55, 56, 57),
    (3, 58, 59, 60),
    (4, 61, 62, 63),
    (5, 64, 65, 66),
    (6, 67, 68, 69),
    (7, 70, 71, 72),
]

for row_num, week_idx, content_idx, method_idx in schedule:
    sheet2_rows.append(f'''  <row r="{row_num}">
    <c r="A{row_num}" t="s" s="1"><v>{week_idx}</v></c>
    <c r="B{row_num}" t="s" s="0"><v>{content_idx}</v></c>
    <c r="C{row_num}" t="s" s="0"><v>{method_idx}</v></c>
  </row>''')

sheet2_xml = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView workbookViewId="0"/>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols>
    <col min="1" max="1" width="12" customWidth="1"/>
    <col min="2" max="2" width="40" customWidth="1"/>
    <col min="3" max="3" width="20" customWidth="1"/>
  </cols>
  <sheetData>
{chr(10).join(sheet2_rows)}
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

with open(f"{TMP}/xl/worksheets/sheet2.xml", "w", encoding="utf-8") as f:
    f.write(sheet2_xml)

# ===== STEP 7: Pack the xlsx =====
os.makedirs(OUT_DIR, exist_ok=True)
result = subprocess.run(
    ["python3", f"{SKILL_DIR}/scripts/xlsx_pack.py", TMP, f"{OUT_DIR}/课程内容总览.xlsx"],
    capture_output=True, text=True
)
print("STDOUT:", result.stdout)
print("STDERR:", result.stderr)
print("Return code:", result.returncode)
