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
# F3: 婚前财产协议核查表
# ============================================================
work_dir = "/tmp/xlsx_f3"
output_file = f"{OUTPUT_DIR}/F3_婚前财产协议核查表.xlsx"

copy_template(work_dir)

strings = [
    "核查项目", "是", "否", "部分符合", "建议", "协议主体是否明确？",
    "财产范围是否逐一列明？", "收益归属是否约定？", "债务承担是否明确？",
    "变更条款是否设置？", "双方签字是否齐全？", "公证是否办理？"
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
lines.append('    <sheet name="婚前财产协议核查表" sheetId="1" r:id="rId1"/>')
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
lines.append('    <col min="1" max="1" width="26" customWidth="1"/>')
lines.append('    <col min="2" max="2" width="8" customWidth="1"/>')
lines.append('    <col min="3" max="3" width="8" customWidth="1"/>')
lines.append('    <col min="4" max="4" width="10" customWidth="1"/>')
lines.append('    <col min="5" max="5" width="30" customWidth="1"/>')
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

check_items = [
    (5, "协议主体是否明确？"),
    (6, "财产范围是否逐一列明？"),
    (7, "收益归属是否约定？"),
    (8, "债务承担是否明确？"),
    (9, "变更条款是否设置？"),
    (10, "双方签字是否齐全？"),
    (11, "公证是否办理？"),
]

for row_num, (str_idx, label) in enumerate(check_items, start=3):
    lines.append(f'    <row r="{row_num}">')
    lines.append(f'      <c r="A{row_num}" t="s" s="1"><v>{str_idx}</v></c>')
    lines.append(f'      <c r="B{row_num}" t="s" s="1"><v>1</v></c>')
    lines.append(f'      <c r="C{row_num}" t="s" s="1"><v>2</v></c>')
    lines.append(f'      <c r="D{row_num}" t="s" s="1"><v>3</v></c>')
    lines.append(f'      <c r="E{row_num}" t="s" s="1"><v>4</v></c>')
    lines.append(f'    </row>')

lines.append('    <row r="10">')
lines.append('      <c r="A10" t="s" s="4"><v>0</v></c>')
lines.append('    </row>')

lines.append('  </sheetData>')
lines.append('  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>')
lines.append('</worksheet>')

with open(f"{work_dir}/xl/worksheets/sheet1.xml", 'w', encoding='utf-8') as f:
    f.write('\n'.join(lines))

rc, stdout, stderr = pack_xlsx(work_dir, output_file)
print(f"F3 Pack: rc={rc}")
if rc != 0:
    print(f"  STDERR: {stderr}")
else:
    print(f"  SUCCESS")

rc2, stdout2, stderr2 = validate_xlsx(output_file)
print(f"F3 Validate: rc={rc2}")
if rc2 != 0:
    print(f"  STDERR: {stderr2}")
else:
    print(f"  VALID")

# ============================================================
# F4: 家族信托架构规划表
# ============================================================
work_dir = "/tmp/xlsx_f4"
output_file = f"{OUTPUT_DIR}/F4_家族信托架构规划表.xlsx"

copy_template(work_dir)

strings = [
    "规划要素", "具体内容", "委托人信息", "受托人信息", "受益人信息",
    "信托财产", "信托目的", "存续期限", "监察人", "投资限制",
    "分配规则", "变更终止"
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
lines.append('    <sheet name="家族信托架构规划表" sheetId="1" r:id="rId1"/>')
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
lines.append('    <col min="1" max="1" width="20" customWidth="1"/>')
lines.append('    <col min="2" max="2" width="50" customWidth="1"/>')
lines.append('  </cols>')
lines.append('  <sheetData>')

lines.append('    <row r="1" ht="28" customHeight="1">')
lines.append('      <c r="A1" t="s" s="4"><v>0</v></c>')
lines.append('      <c r="B1" t="s" s="4"><v>1</v></c>')
lines.append('    </row>')

planning_items = [
    (2, "委托人信息"),
    (3, "受托人信息"),
    (4, "受益人信息"),
    (5, "信托财产"),
    (6, "信托目的"),
    (7, "存续期限"),
    (8, "监察人"),
    (9, "投资限制"),
    (10, "分配规则"),
    (11, "变更终止"),
]

for row_num, (str_idx, label) in enumerate(planning_items, start=2):
    lines.append(f'    <row r="{row_num}">')
    lines.append(f'      <c r="A{row_num}" t="s" s="1"><v>{str_idx}</v></c>')
    lines.append(f'      <c r="B{row_num}" t="s" s="1"><v>1</v></c>')
    lines.append(f'    </row>')

lines.append('  </sheetData>')
lines.append('  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>')
lines.append('</worksheet>')

with open(f"{work_dir}/xl/worksheets/sheet1.xml", 'w', encoding='utf-8') as f:
    f.write('\n'.join(lines))

rc, stdout, stderr = pack_xlsx(work_dir, output_file)
print(f"F4 Pack: rc={rc}")
if rc != 0:
    print(f"  STDERR: {stderr}")
else:
    print(f"  SUCCESS")

rc2, stdout2, stderr2 = validate_xlsx(output_file)
print(f"F4 Validate: rc={rc2}")
if rc2 != 0:
    print(f"  STDERR: {stderr2}")
else:
    print(f"  VALID")
