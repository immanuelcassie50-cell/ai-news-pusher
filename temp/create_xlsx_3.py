import xml.sax.saxutils as saxutils
import os
import shutil
import subprocess

TEMPLATE_DIR = "C:/Users/Administrator/.claude/skills/Excel表格处理/templates/minimal_xlsx"
OUTPUT_DIR = "D:/新课开发/法学/21-财富保全实务：资产隔离与法律工具箱/Excel工具包"
SCRIPT_DIR = "C:/Users/Administrator/.claude/skills/Excel表格处理/scripts"

def escape_xml(text):
    return saxutils.escape(text)

def copy_template(work_dir):
    if os.path.exists(work_dir):
        shutil.rmtree(work_dir)
    shutil.copytree(TEMPLATE_DIR, work_dir)

def pack_xlsx(work_dir, output_path):
    result = subprocess.run(
        ["python3", SCRIPT_DIR + "/xlsx_pack.py", work_dir, output_path],
        capture_output=True, text=True
    )
    return result.returncode, result.stdout, result.stderr

def validate_xlsx(file_path):
    result = subprocess.run(
        ["python3", SCRIPT_DIR + "/formula_check.py", file_path],
        capture_output=True, text=True
    )
    return result.returncode, result.stdout, result.stderr

# ============================================================
# F7: 年度审视计划表
# ============================================================
work_dir = "/tmp/xlsx_f7"
output_file = f"{OUTPUT_DIR}/F7_年度审视计划表.xlsx"

copy_template(work_dir)

strings = [
    "审视项目", "审视内容", "频率", "最近审视日期", "下次审视日期", "负责人", "状态", "备注",
    "法律文件更新", "财务报告审查", "资产估值复核", "合同条款检视"
]

lines = ['<?xml version="1.0" encoding="UTF-8" standalone="yes"?>']
lines.append(f'<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="{len(strings)}" uniqueCount="{len(strings)}">')
for s in strings:
    lines.append(f'  <si><t>{escape_xml(s)}</t></si>')
lines.append('</sst>')
with open(f"{work_dir}/xl/sharedStrings.xml", 'w', encoding='utf-8') as f:
    f.write('\n'.join(lines))

lines = ['<?xml version="1.0" encoding="UTF-8" standalone="yes"?>']
lines.append('<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">')
lines.append('  <fileVersion appName="xl" lastEdited="7" lowestEdited="7"/>')
lines.append('  <workbookPr defaultThemeVersion="166925"/>')
lines.append('  <bookViews>')
lines.append('    <workbookView xWindow="0" yWindow="0" windowWidth="20140" windowHeight="10960"/>')
lines.append('  </bookViews>')
lines.append('  <sheets>')
lines.append('    <sheet name="年度审视计划表" sheetId="1" r:id="rId1"/>')
lines.append('  </sheets>')
lines.append('  <calcPr calcId="191029"/>')
lines.append('</workbook>')
with open(f"{work_dir}/xl/workbook.xml", 'w', encoding='utf-8') as f:
    f.write('\n'.join(lines))

lines = ['<?xml version="1.0" encoding="UTF-8" standalone="yes"?>']
lines.append('<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">')
lines.append('  <sheetViews>')
lines.append('    <sheetView tabSelected="1" workbookViewId="0"/>')
lines.append('  </sheetViews>')
lines.append('  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>')
lines.append('  <cols>')
lines.append('    <col min="1" max="1" width="16" customWidth="1"/>')
lines.append('    <col min="2" max="2" width="30" customWidth="1"/>')
lines.append('    <col min="3" max="3" width="10" customWidth="1"/>')
lines.append('    <col min="4" max="4" width="14" customWidth="1"/>')
lines.append('    <col min="5" max="5" width="14" customWidth="1"/>')
lines.append('    <col min="6" max="6" width="10" customWidth="1"/>')
lines.append('    <col min="7" max="7" width="10" customWidth="1"/>')
lines.append('    <col min="8" max="8" width="20" customWidth="1"/>')
lines.append('  </cols>')
lines.append('  <sheetData>')

lines.append('    <row r="1" ht="28" customHeight="1">')
lines.append('      <c r="A1" t="s" s="4"><v>0</v></c>')
lines.append('    </row>')

lines.append('    <row r="2" ht="20" customHeight="1">')
lines.append('      <c r="A2" t="s" s="4"><v>0</v></c>')
lines.append('      <c r="B2" t="s" s="4"><v>1</v></c>')
lines.append('      <c r="C2" t="s" s="4"><v>2</v></c>')
lines.append('      <c r="D2" t="s" s="4"><v>3</v></c>')
lines.append('      <c r="E2" t="s" s="4"><v>4</v></c>')
lines.append('      <c r="F2" t="s" s="4"><v>5</v></c>')
lines.append('      <c r="G2" t="s" s="4"><v>6</v></c>')
lines.append('      <c r="H2" t="s" s="4"><v>7</v></c>')
lines.append('    </row>')

# 8 review items (indices 8-11 are the 4 items, need to use input placeholders)
review_items = [
    (8, "法律文件更新"),
    (9, "财务报告审查"),
    (10, "资产估值复核"),
    (11, "合同条款检视"),
]

for row_num, (str_idx, label) in enumerate(review_items, start=3):
    lines.append(f'    <row r="{row_num}">')
    lines.append(f'      <c r="A{row_num}" t="s" s="1"><v>{str_idx}</v></c>')
    lines.append(f'      <c r="B{row_num}" t="s" s="1"><v>1</v></c>')
    lines.append(f'      <c r="C{row_num}" t="s" s="1"><v>2</v></c>')
    lines.append(f'      <c r="D{row_num}" t="s" s="1"><v>3</v></c>')
    lines.append(f'      <c r="E{row_num}" t="s" s="1"><v>4</v></c>')
    lines.append(f'      <c r="F{row_num}" t="s" s="1"><v>5</v></c>')
    lines.append(f'      <c r="G{row_num}" t="s" s="1"><v>6</v></c>')
    lines.append(f'      <c r="H{row_num}" t="s" s="1"><v>7</v></c>')
    lines.append(f'    </row>')

lines.append('  </sheetData>')
lines.append('  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>')
lines.append('</worksheet>')

with open(f"{work_dir}/xl/worksheets/sheet1.xml", 'w', encoding='utf-8') as f:
    f.write('\n'.join(lines))

rc, stdout, stderr = pack_xlsx(work_dir, output_file)
print(f"F7 Pack: rc={rc}")
if rc != 0:
    print(f"  STDERR: {stderr}")
else:
    print(f"  SUCCESS")

rc2, stdout2, stderr2 = validate_xlsx(output_file)
print(f"F7 Validate: rc={rc2}")
if rc2 != 0:
    print(f"  STDERR: {stderr2}")
else:
    print(f"  VALID")

# ============================================================
# F8: 家庭财产申报表
# ============================================================
work_dir = "/tmp/xlsx_f8"
output_file = f"{OUTPUT_DIR}/F8_家庭财产申报表.xlsx"

copy_template(work_dir)

strings = [
    "财产类别", "具体项目", "金额/估值", "取得时间", "权属证明", "存放地点", "备注",
    "不动产", "金融资产", "股权资产", "知识产权", "贵重物品", "其他资产"
]

lines = ['<?xml version="1.0" encoding="UTF-8" standalone="yes"?>']
lines.append(f'<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="{len(strings)}" uniqueCount="{len(strings)}">')
for s in strings:
    lines.append(f'  <si><t>{escape_xml(s)}</t></si>')
lines.append('</sst>')
with open(f"{work_dir}/xl/sharedStrings.xml", 'w', encoding='utf-8') as f:
    f.write('\n'.join(lines))

lines = ['<?xml version="1.0" encoding="UTF-8" standalone="yes"?>']
lines.append('<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">')
lines.append('  <fileVersion appName="xl" lastEdited="7" lowestEdited="7"/>')
lines.append('  <workbookPr defaultThemeVersion="166925"/>')
lines.append('  <bookViews>')
lines.append('    <workbookView xWindow="0" yWindow="0" windowWidth="20140" windowHeight="10960"/>')
lines.append('  </bookViews>')
lines.append('  <sheets>')
lines.append('    <sheet name="家庭财产申报表" sheetId="1" r:id="rId1"/>')
lines.append('  </sheets>')
lines.append('  <calcPr calcId="191029"/>')
lines.append('</workbook>')
with open(f"{work_dir}/xl/workbook.xml", 'w', encoding='utf-8') as f:
    f.write('\n'.join(lines))

lines = ['<?xml version="1.0" encoding="UTF-8" standalone="yes"?>']
lines.append('<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">')
lines.append('  <sheetViews>')
lines.append('    <sheetView tabSelected="1" workbookViewId="0"/>')
lines.append('  </sheetViews>')
lines.append('  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>')
lines.append('  <cols>')
lines.append('    <col min="1" max="1" width="14" customWidth="1"/>')
lines.append('    <col min="2" max="2" width="24" customWidth="1"/>')
lines.append('    <col min="3" max="3" width="16" customWidth="1"/>')
lines.append('    <col min="4" max="4" width="12" customWidth="1"/>')
lines.append('    <col min="5" max="5" width="16" customWidth="1"/>')
lines.append('    <col min="6" max="6" width="16" customWidth="1"/>')
lines.append('    <col min="7" max="7" width="20" customWidth="1"/>')
lines.append('  </cols>')
lines.append('  <sheetData>')

lines.append('    <row r="1" ht="28" customHeight="1">')
lines.append('      <c r="A1" t="s" s="4"><v>0</v></c>')
lines.append('    </row>')

lines.append('    <row r="2" ht="20" customHeight="1">')
lines.append('      <c r="A2" t="s" s="4"><v>0</v></c>')
lines.append('      <c r="B2" t="s" s="4"><v>1</v></c>')
lines.append('      <c r="C2" t="s" s="4"><v>2</v></c>')
lines.append('      <c r="D2" t="s" s="4"><v>3</v></c>')
lines.append('      <c r="E2" t="s" s="4"><v>4</v></c>')
lines.append('      <c r="F2" t="s" s="4"><v>5</v></c>')
lines.append('      <c r="G2" t="s" s="4"><v>6</v></c>')
lines.append('    </row>')

# 8 property categories (indices 7-12 for categories)
property_items = [
    (7, "不动产"),
    (8, "金融资产"),
    (9, "股权资产"),
    (10, "知识产权"),
    (11, "贵重物品"),
    (12, "其他资产"),
]

for row_num, (str_idx, label) in enumerate(property_items, start=3):
    lines.append(f'    <row r="{row_num}">')
    lines.append(f'      <c r="A{row_num}" t="s" s="1"><v>{str_idx}</v></c>')
    lines.append(f'      <c r="B{row_num}" t="s" s="1"><v>1</v></c>')
    lines.append(f'      <c r="C{row_num}" t="s" s="1"><v>2</v></c>')
    lines.append(f'      <c r="D{row_num}" t="s" s="1"><v>3</v></c>')
    lines.append(f'      <c r="E{row_num}" t="s" s="1"><v>4</v></c>')
    lines.append(f'      <c r="F{row_num}" t="s" s="1"><v>5</v></c>')
    lines.append(f'      <c r="G{row_num}" t="s" s="1"><v>6</v></c>')
    lines.append(f'    </row>')

lines.append('  </sheetData>')
lines.append('  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>')
lines.append('</worksheet>')

with open(f"{work_dir}/xl/worksheets/sheet1.xml", 'w', encoding='utf-8') as f:
    f.write('\n'.join(lines))

rc, stdout, stderr = pack_xlsx(work_dir, output_file)
print(f"F8 Pack: rc={rc}")
if rc != 0:
    print(f"  STDERR: {stderr}")
else:
    print(f"  SUCCESS")

rc2, stdout2, stderr2 = validate_xlsx(output_file)
print(f"F8 Validate: rc={rc2}")
if rc2 != 0:
    print(f"  STDERR: {stderr2}")
else:
    print(f"  VALID")

# ============================================================
# F9: 法律工具效果对比表
# ============================================================
work_dir = "/tmp/xlsx_f9"
output_file = f"{OUTPUT_DIR}/F9_法律工具效果对比表.xlsx"

copy_template(work_dir)

strings = [
    "对比维度", "有限责任公司", "婚前协议", "家族信托", "人寿保险",
    "隔离效果", "成本投入", "隐私保护", "法律效力", "操作便捷", "维护成本", "可撤销性", "适用阶段"
]

lines = ['<?xml version="1.0" encoding="UTF-8" standalone="yes"?>']
lines.append(f'<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="{len(strings)}" uniqueCount="{len(strings)}">')
for s in strings:
    lines.append(f'  <si><t>{escape_xml(s)}</t></si>')
lines.append('</sst>')
with open(f"{work_dir}/xl/sharedStrings.xml", 'w', encoding='utf-8') as f:
    f.write('\n'.join(lines))

lines = ['<?xml version="1.0" encoding="UTF-8" standalone="yes"?>']
lines.append('<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">')
lines.append('  <fileVersion appName="xl" lastEdited="7" lowestEdited="7"/>')
lines.append('  <workbookPr defaultThemeVersion="166925"/>')
lines.append('  <bookViews>')
lines.append('    <workbookView xWindow="0" yWindow="0" windowWidth="20140" windowHeight="10960"/>')
lines.append('  </bookViews>')
lines.append('  <sheets>')
lines.append('    <sheet name="法律工具效果对比表" sheetId="1" r:id="rId1"/>')
lines.append('  </sheets>')
lines.append('  <calcPr calcId="191029"/>')
lines.append('</workbook>')
with open(f"{work_dir}/xl/workbook.xml", 'w', encoding='utf-8') as f:
    f.write('\n'.join(lines))

lines = ['<?xml version="1.0" encoding="UTF-8" standalone="yes"?>']
lines.append('<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">')
lines.append('  <sheetViews>')
lines.append('    <sheetView tabSelected="1" workbookViewId="0"/>')
lines.append('  </sheetViews>')
lines.append('  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>')
lines.append('  <cols>')
lines.append('    <col min="1" max="1" width="14" customWidth="1"/>')
lines.append('    <col min="2" max="2" width="14" customWidth="1"/>')
lines.append('    <col min="3" max="3" width="12" customWidth="1"/>')
lines.append('    <col min="4" max="4" width="12" customWidth="1"/>')
lines.append('    <col min="5" max="5" width="12" customWidth="1"/>')
lines.append('  </cols>')
lines.append('  <sheetData>')

lines.append('    <row r="1" ht="28" customHeight="1">')
lines.append('      <c r="A1" t="s" s="4"><v>0</v></c>')
lines.append('    </row>')

lines.append('    <row r="2" ht="20" customHeight="1">')
lines.append('      <c r="A2" t="s" s="4"><v>0</v></c>')
lines.append('      <c r="B2" t="s" s="4"><v>1</v></c>')
lines.append('      <c r="C2" t="s" s="4"><v>2</v></c>')
lines.append('      <c r="D2" t="s" s="4"><v>3</v></c>')
lines.append('      <c r="E2" t="s" s="4"><v>4</v></c>')
lines.append('    </row>')

# 9 comparison dimensions (indices 5-13)
comparison_items = [
    (5, "隔离效果"),
    (6, "成本投入"),
    (7, "隐私保护"),
    (8, "法律效力"),
    (9, "操作便捷"),
    (10, "维护成本"),
    (11, "可撤销性"),
    (12, "适用阶段"),
]

for row_num, (str_idx, label) in enumerate(comparison_items, start=3):
    lines.append(f'    <row r="{row_num}">')
    lines.append(f'      <c r="A{row_num}" t="s" s="1"><v>{str_idx}</v></c>')
    lines.append(f'      <c r="B{row_num}" t="s" s="1"><v>1</v></c>')
    lines.append(f'      <c r="C{row_num}" t="s" s="1"><v>2</v></c>')
    lines.append(f'      <c r="D{row_num}" t="s" s="1"><v>3</v></c>')
    lines.append(f'      <c r="E{row_num}" t="s" s="1"><v>4</v></c>')
    lines.append(f'    </row>')

lines.append('  </sheetData>')
lines.append('  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>')
lines.append('</worksheet>')

with open(f"{work_dir}/xl/worksheets/sheet1.xml", 'w', encoding='utf-8') as f:
    f.write('\n'.join(lines))

rc, stdout, stderr = pack_xlsx(work_dir, output_file)
print(f"F9 Pack: rc={rc}")
if rc != 0:
    print(f"  STDERR: {stderr}")
else:
    print(f"  SUCCESS")

rc2, stdout2, stderr2 = validate_xlsx(output_file)
print(f"F9 Validate: rc={rc2}")
if rc2 != 0:
    print(f"  STDERR: {stderr2}")
else:
    print(f"  VALID")

# ============================================================
# F10: 资产保护策略表
# ============================================================
work_dir = "/tmp/xlsx_f10"
output_file = f"{OUTPUT_DIR}/F10_资产保护策略表.xlsx"

copy_template(work_dir)

strings = [
    "保护目标", "现状分析", "风险点", "保护工具", "实施方案", "时间计划", "责任人", "预期效果", "优先级",
    "高净值人士", "企业主", "家庭主妇", "创业者", "投资者", "退休人士"
]

lines = ['<?xml version="1.0" encoding="UTF-8" standalone="yes"?>']
lines.append(f'<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="{len(strings)}" uniqueCount="{len(strings)}">')
for s in strings:
    lines.append(f'  <si><t>{escape_xml(s)}</t></si>')
lines.append('</sst>')
with open(f"{work_dir}/xl/sharedStrings.xml", 'w', encoding='utf-8') as f:
    f.write('\n'.join(lines))

lines = ['<?xml version="1.0" encoding="UTF-8" standalone="yes"?>']
lines.append('<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">')
lines.append('  <fileVersion appName="xl" lastEdited="7" lowestEdited="7"/>')
lines.append('  <workbookPr defaultThemeVersion="166925"/>')
lines.append('  <bookViews>')
lines.append('    <workbookView xWindow="0" yWindow="0" windowWidth="20140" windowHeight="10960"/>')
lines.append('  </bookViews>')
lines.append('  <sheets>')
lines.append('    <sheet name="资产保护策略表" sheetId="1" r:id="rId1"/>')
lines.append('  </sheets>')
lines.append('  <calcPr calcId="191029"/>')
lines.append('</workbook>')
with open(f"{work_dir}/xl/workbook.xml", 'w', encoding='utf-8') as f:
    f.write('\n'.join(lines))

lines = ['<?xml version="1.0" encoding="UTF-8" standalone="yes"?>']
lines.append('<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">')
lines.append('  <sheetViews>')
lines.append('    <sheetView tabSelected="1" workbookViewId="0"/>')
lines.append('  </sheetViews>')
lines.append('  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>')
lines.append('  <cols>')
lines.append('    <col min="1" max="1" width="14" customWidth="1"/>')
lines.append('    <col min="2" max="2" width="20" customWidth="1"/>')
lines.append('    <col min="3" max="3" width="20" customWidth="1"/>')
lines.append('    <col min="4" max="4" width="16" customWidth="1"/>')
lines.append('    <col min="5" max="5" width="20" customWidth="1"/>')
lines.append('    <col min="6" max="6" width="12" customWidth="1"/>')
lines.append('    <col min="7" max="7" width="10" customWidth="1"/>')
lines.append('    <col min="8" max="8" width="16" customWidth="1"/>')
lines.append('    <col min="9" max="9" width="10" customWidth="1"/>')
lines.append('  </cols>')
lines.append('  <sheetData>')

lines.append('    <row r="1" ht="28" customHeight="1">')
lines.append('      <c r="A1" t="s" s="4"><v>0</v></c>')
lines.append('    </row>')

lines.append('    <row r="2" ht="20" customHeight="1">')
lines.append('      <c r="A2" t="s" s="4"><v>0</v></c>')
lines.append('      <c r="B2" t="s" s="4"><v>1</v></c>')
lines.append('      <c r="C2" t="s" s="4"><v>2</v></c>')
lines.append('      <c r="D2" t="s" s="4"><v>3</v></c>')
lines.append('      <c r="E2" t="s" s="4"><v>4</v></c>')
lines.append('      <c r="F2" t="s" s="4"><v>5</v></c>')
lines.append('      <c r="G2" t="s" s="4"><v>6</v></c>')
lines.append('      <c r="H2" t="s" s="4"><v>7</v></c>')
lines.append('      <c r="I2" t="s" s="4"><v>8</v></c>')
lines.append('    </row>')

# 7 protection targets (indices 9-15 for target types)
protection_items = [
    (9, "高净值人士"),
    (10, "企业主"),
    (11, "家庭主妇"),
    (12, "创业者"),
    (13, "投资者"),
    (14, "退休人士"),
]

for row_num, (str_idx, label) in enumerate(protection_items, start=3):
    lines.append(f'    <row r="{row_num}">')
    lines.append(f'      <c r="A{row_num}" t="s" s="1"><v>{str_idx}</v></c>')
    lines.append(f'      <c r="B{row_num}" t="s" s="1"><v>1</v></c>')
    lines.append(f'      <c r="C{row_num}" t="s" s="1"><v>2</v></c>')
    lines.append(f'      <c r="D{row_num}" t="s" s="1"><v>3</v></c>')
    lines.append(f'      <c r="E{row_num}" t="s" s="1"><v>4</v></c>')
    lines.append(f'      <c r="F{row_num}" t="s" s="1"><v>5</v></c>')
    lines.append(f'      <c r="G{row_num}" t="s" s="1"><v>6</v></c>')
    lines.append(f'      <c r="H{row_num}" t="s" s="1"><v>7</v></c>')
    lines.append(f'      <c r="I{row_num}" t="s" s="1"><v>8</v></c>')
    lines.append(f'    </row>')

lines.append('  </sheetData>')
lines.append('  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>')
lines.append('</worksheet>')

with open(f"{work_dir}/xl/worksheets/sheet1.xml", 'w', encoding='utf-8') as f:
    f.write('\n'.join(lines))

rc, stdout, stderr = pack_xlsx(work_dir, output_file)
print(f"F10 Pack: rc={rc}")
if rc != 0:
    print(f"  STDERR: {stderr}")
else:
    print(f"  SUCCESS")

rc2, stdout2, stderr2 = validate_xlsx(output_file)
print(f"F10 Validate: rc={rc2}")
if rc2 != 0:
    print(f"  STDERR: {stderr2}")
else:
    print(f"  VALID")
