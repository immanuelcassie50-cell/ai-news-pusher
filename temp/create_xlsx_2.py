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
# F5: 债务风险评估表
# ============================================================
work_dir = "/tmp/xlsx_f5"
output_file = f"{OUTPUT_DIR}/F5_债务风险评估表.xlsx"

copy_template(work_dir)

strings = [
    "评估维度", "无风险", "低风险", "中风险", "高风险", "权重", "评分",
    "企业负债情况", "个人担保情况", "关联交易风险", "诉讼风险",
    "现金流状况", "抵押担保情况", "信用状况", "外部环境"
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
lines.append('    <sheet name="债务风险评估表" sheetId="1" r:id="rId1"/>')
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
lines.append('    <col min="1" max="1" width="18" customWidth="1"/>')
lines.append('    <col min="2" max="2" width="10" customWidth="1"/>')
lines.append('    <col min="3" max="3" width="10" customWidth="1"/>')
lines.append('    <col min="4" max="4" width="10" customWidth="1"/>')
lines.append('    <col min="5" max="5" width="10" customWidth="1"/>')
lines.append('    <col min="6" max="6" width="8" customWidth="1"/>')
lines.append('    <col min="7" max="7" width="10" customWidth="1"/>')
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

# 8 assessment dimensions (indices 7-14)
assessment_items = [
    (7, "企业负债情况"),
    (8, "个人担保情况"),
    (9, "关联交易风险"),
    (10, "诉讼风险"),
    (11, "现金流状况"),
    (12, "抵押担保情况"),
    (13, "信用状况"),
    (14, "外部环境"),
]

for row_num, (str_idx, label) in enumerate(assessment_items, start=3):
    lines.append(f'    <row r="{row_num}">')
    lines.append(f'      <c r="A{row_num}" t="s" s="1"><v>{str_idx}</v></c>')
    lines.append(f'      <c r="B{row_num}" t="s" s="1"><v>1</v></c>')
    lines.append(f'      <c r="C{row_num}" t="s" s="1"><v>2</v></c>')
    lines.append(f'      <c r="D{row_num}" t="s" s="1"><v>3</v></c>')
    lines.append(f'      <c r="E{row_num}" t="s" s="1"><v>4</v></c>')
    lines.append(f'      <c r="F{row_num}" t="s" s="1"><v>5</v></c>')
    lines.append(f'      <c r="G{row_num}" t="s" s="1"><v>6</v></c>')
    lines.append(f'    </row>')

# Row 11: 综合评分 (SUMPRODUCT formula)
lines.append('    <row r="11">')
lines.append('      <c r="A11" t="s" s="4"><v>0</v></c>')
lines.append('      <c r="G11" s="2"><f>SUMPRODUCT(F3:F10,G3:G10)</f><v></v></c>')
lines.append('    </row>')

lines.append('  </sheetData>')
lines.append('  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>')
lines.append('</worksheet>')

with open(f"{work_dir}/xl/worksheets/sheet1.xml", 'w', encoding='utf-8') as f:
    f.write('\n'.join(lines))

rc, stdout, stderr = pack_xlsx(work_dir, output_file)
print(f"F5 Pack: rc={rc}")
if rc != 0:
    print(f"  STDERR: {stderr}")
else:
    print(f"  SUCCESS")

rc2, stdout2, stderr2 = validate_xlsx(output_file)
print(f"F5 Validate: rc={rc2}")
if rc2 != 0:
    print(f"  STDERR: {stderr2}")
else:
    print(f"  VALID")

# ============================================================
# F6: 工具组合配置表
# ============================================================
work_dir = "/tmp/xlsx_f6"
output_file = f"{OUTPUT_DIR}/F6_工具组合配置表.xlsx"

copy_template(work_dir)

strings = [
    "工具类型", "配置状态", "优先级", "预计成本", "效果评估", "适用场景",
    "有限责任公司", "婚前财产协议", "家族信托", "人寿保险", "法律诉讼", "其他工具"
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
lines.append('    <sheet name="工具组合配置表" sheetId="1" r:id="rId1"/>')
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
lines.append('    <col min="1" max="1" width="18" customWidth="1"/>')
lines.append('    <col min="2" max="2" width="12" customWidth="1"/>')
lines.append('    <col min="3" max="3" width="8" customWidth="1"/>')
lines.append('    <col min="4" max="4" width="12" customWidth="1"/>')
lines.append('    <col min="5" max="5" width="20" customWidth="1"/>')
lines.append('    <col min="6" max="6" width="24" customWidth="1"/>')
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
lines.append('    </row>')

# 11 tool types (indices 6-11 for "有限责任公司" through "其他工具")
tool_items = [
    (6, "有限责任公司"),
    (7, "婚前财产协议"),
    (8, "家族信托"),
    (9, "人寿保险"),
    (10, "法律诉讼"),
    (11, "其他工具"),
]

for row_num, (str_idx, label) in enumerate(tool_items, start=3):
    lines.append(f'    <row r="{row_num}">')
    lines.append(f'      <c r="A{row_num}" t="s" s="1"><v>{str_idx}</v></c>')
    lines.append(f'      <c r="B{row_num}" t="s" s="1"><v>1</v></c>')
    lines.append(f'      <c r="C{row_num}" t="s" s="1"><v>2</v></c>')
    lines.append(f'      <c r="D{row_num}" t="s" s="1"><v>3</v></c>')
    lines.append(f'      <c r="E{row_num}" t="s" s="1"><v>4</v></c>')
    lines.append(f'      <c r="F{row_num}" t="s" s="1"><v>5</v></c>')
    lines.append(f'    </row>')

lines.append('  </sheetData>')
lines.append('  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>')
lines.append('</worksheet>')

with open(f"{work_dir}/xl/worksheets/sheet1.xml", 'w', encoding='utf-8') as f:
    f.write('\n'.join(lines))

rc, stdout, stderr = pack_xlsx(work_dir, output_file)
print(f"F6 Pack: rc={rc}")
if rc != 0:
    print(f"  STDERR: {stderr}")
else:
    print(f"  SUCCESS")

rc2, stdout2, stderr2 = validate_xlsx(output_file)
print(f"F6 Validate: rc={rc2}")
if rc2 != 0:
    print(f"  STDERR: {stderr2}")
else:
    print(f"  VALID")
