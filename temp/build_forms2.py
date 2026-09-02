import os

work_dir = "/tmp/xlsx_work"
output_dir = "D:/新课开发/政治学/07_国家为何存在-社会契约与政治权威的哲学基础/配套表单"

def build_shared_strings(strings):
    unique = []
    for s in strings:
        if s not in unique:
            unique.append(s)
    items = ""
    for s in unique:
        escaped = s.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")
        items += f'<si><t>{escaped}</t></si>'
    return f'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="{len(strings)}" uniqueCount="{len(unique)}">{items}</sst>'

def build_workbook(sheets):
    sheet_entries = ""
    for i, name in enumerate(sheets, 1):
        safe_name = name.replace("&", "&amp;")
        rid = f"rId{i}"
        sheet_entries += f'<sheet name="{safe_name}" sheetId="{i}" r:id="{rid}"/>'
    return f'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><fileVersion appName="xl" lastEdited="7" lowestEdited="7"/><workbookPr defaultThemeVersion="166925"/><bookViews><workbookView xWindow="0" yWindow="0" windowWidth="20140" windowHeight="10960"/></bookViews><sheets>{sheet_entries}</sheets><calcPr calcId="191029"/></workbook>'

def build_workbook_rels(sheet_count):
    rels = '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/><Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml"/>'
    for i in range(2, sheet_count + 1):
        rels += f'<Relationship Id="rId{i+2}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet{i}.xml"/>'
    return f'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">{rels}</Relationships>'

def build_content_types(sheet_count):
    types = '<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/><Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/><Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/>'
    for i in range(1, sheet_count + 1):
        types += f'<Override PartName="/xl/worksheets/sheet{i}.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>'
    return f'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">{types}</Types>'

def make_row(cells, r, ht=None):
    h = f' ht="{ht}" customHeight="1"' if ht else ""
    return f'<row r="{r}"{h}>{"".join(cells)}</row>'

def sc(addr, val, s="0"):
    return f'<c r="{addr}" t="s" s="{s}"><v>{val}</v></c>'

def nc(addr, val, s="0"):
    return f'<c r="{addr}" s="{s}"><v>{val}</v></c>'

def fc(addr, formula, s="6"):
    return f'<c r="{addr}" s="{s}"><f>{formula}</f><v></v></c>'

# ===================== FILE 3: 课堂互动记录表.xlsx =====================
print("Creating 课堂互动记录表.xlsx...")

strings3 = [
    "课堂互动记录表", "课程名称：国家为何存在——社会契约与政治权威的哲学基础",
    "提问记录", "讨论记录", "活动记录",
    "时间", "问题内容", "回答情况", "涉及模块", "理论框架",
    "话题", "参与者数量", "主要观点", "结论",
    "活动名称", "参与人数", "效果评价",
    "提问人", "回答人", "是否完整回答", "备注",
    "1-5分评分", "", "", "", "",
    "模块一", "自然状态与政治起源",
    "模块二", "社会契约的逻辑",
    "模块三", "霍布斯、洛克、卢梭",
    "模块四", "政治权威的正当性",
    "模块五", "国家与公民社会",
    "模块六", "现代挑战与新契约"
]

# Sheet 1: 提问记录 (20 rows)
s1_r = (
    make_row([sc("A1",0,s="12")], 1, ht=30) +
    make_row([sc("A2",1,s="4"), sc("B2",2,s="4"), sc("C2",3,s="4"), sc("D2",4,s="4"), sc("E2",5,s="4"), sc("F2",19,s="4")], 2, ht=20) +
    make_row([nc("A3","",s="0"), nc("B3","",s="0"), nc("C3","",s="0"), sc("D3",26,s="0"), sc("E3",27,s="0"), sc("F3",20,s="0")], 3) +
    make_row([nc("A4","",s="0"), nc("B4","",s="0"), nc("C4","",s="0"), sc("D4",26,s="0"), sc("E4",27,s="0"), sc("F4",20,s="0")], 4) +
    make_row([nc("A5","",s="0"), nc("B5","",s="0"), nc("C5","",s="0"), sc("D5",26,s="0"), sc("E5",27,s="0"), sc("F5",20,s="0")], 5) +
    make_row([nc("A6","",s="0"), nc("B6","",s="0"), nc("C6","",s="0"), sc("D6",26,s="0"), sc("E6",27,s="0"), sc("F6",20,s="0")], 6) +
    make_row([nc("A7","",s="0"), nc("B7","",s="0"), nc("C7","",s="0"), sc("D7",26,s="0"), sc("E7",27,s="0"), sc("F7",20,s="0")], 7) +
    make_row([nc("A8","",s="0"), nc("B8","",s="0"), nc("C8","",s="0"), sc("D8",26,s="0"), sc("E8",27,s="0"), sc("F8",20,s="0")], 8) +
    make_row([nc("A9","",s="0"), nc("B9","",s="0"), nc("C9","",s="0"), sc("D9",26,s="0"), sc("E9",27,s="0"), sc("F9",20,s="0")], 9) +
    make_row([nc("A10","",s="0"), nc("B10","",s="0"), nc("C10","",s="0"), sc("D10",26,s="0"), sc("E10",27,s="0"), sc("F10",20,s="0")], 10) +
    make_row([nc("A11","",s="0"), nc("B11","",s="0"), nc("C11","",s="0"), sc("D11",26,s="0"), sc("E11",27,s="0"), sc("F11",20,s="0")], 11) +
    make_row([nc("A12","",s="0"), nc("B12","",s="0"), nc("C12","",s="0"), sc("D12",26,s="0"), sc("E12",27,s="0"), sc("F12",20,s="0")], 12) +
    make_row([nc("A13","",s="0"), nc("B13","",s="0"), nc("C13","",s="0"), sc("D13",26,s="0"), sc("E13",27,s="0"), sc("F13",20,s="0")], 13) +
    make_row([nc("A14","",s="0"), nc("B14","",s="0"), nc("C14","",s="0"), sc("D14",26,s="0"), sc("E14",27,s="0"), sc("F14",20,s="0")], 14) +
    make_row([nc("A15","",s="0"), nc("B15","",s="0"), nc("C15","",s="0"), sc("D15",26,s="0"), sc("E15",27,s="0"), sc("F15",20,s="0")], 15) +
    make_row([nc("A16","",s="0"), nc("B16","",s="0"), nc("C16","",s="0"), sc("D16",26,s="0"), sc("E16",27,s="0"), sc("F16",20,s="0")], 16) +
    make_row([nc("A17","",s="0"), nc("B17","",s="0"), nc("C17","",s="0"), sc("D17",26,s="0"), sc("E17",27,s="0"), sc("F17",20,s="0")], 17) +
    make_row([nc("A18","",s="0"), nc("B18","",s="0"), nc("C18","",s="0"), sc("D18",26,s="0"), sc("E18",27,s="0"), sc("F18",20,s="0")], 18) +
    make_row([nc("A19","",s="0"), nc("B19","",s="0"), nc("C19","",s="0"), sc("D19",26,s="0"), sc("E19",27,s="0"), sc("F19",20,s="0")], 19) +
    make_row([nc("A20","",s="0"), nc("B20","",s="0"), nc("C20","",s="0"), sc("D20",26,s="0"), sc("E20",27,s="0"), sc("F20",20,s="0")], 20) +
    make_row([nc("A21","",s="0"), nc("B21","",s="0"), nc("C21","",s="0"), sc("D21",26,s="0"), sc("E21",27,s="0"), sc("F21",20,s="0")], 21) +
    make_row([nc("A22","",s="0"), nc("B22","",s="0"), nc("C22","",s="0"), sc("D22",26,s="0"), sc("E22",27,s="0"), sc("F22",20,s="0")], 22)
)

s1_sh = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView tabSelected="1" workbookViewId="0"/>
    <pane ySplit="2" topLeftCell="A3" activePane="bottomLeft" state="frozen"/>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols>
    <col min="1" max="1" width="16" customWidth="1"/>
    <col min="2" max="2" width="35" customWidth="1"/>
    <col min="3" max="3" width="35" customWidth="1"/>
    <col min="4" max="4" width="12" customWidth="1"/>
    <col min="5" max="5" width="18" customWidth="1"/>
    <col min="6" max="6" width="15" customWidth="1"/>
  </cols>
  <sheetData>{s1_r}
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

# Sheet 2: 讨论记录
s2_r = (
    make_row([sc("A1",0,s="12")], 1, ht=30) +
    make_row([sc("A2",6,s="4"), sc("B2",7,s="4"), sc("C2",8,s="4"), sc("D2",9,s="4")], 2, ht=20) +
    make_row([nc("A3","",s="0"), nc("B3","",s="9"), nc("C3","",s="0"), nc("D3","",s="0")], 3) +
    make_row([nc("A4","",s="0"), nc("B4","",s="9"), nc("C4","",s="0"), nc("D4","",s="0")], 4) +
    make_row([nc("A5","",s="0"), nc("B5","",s="9"), nc("C5","",s="0"), nc("D5","",s="0")], 5) +
    make_row([nc("A6","",s="0"), nc("B6","",s="9"), nc("C6","",s="0"), nc("D6","",s="0")], 6) +
    make_row([nc("A7","",s="0"), nc("B7","",s="9"), nc("C7","",s="0"), nc("D7","",s="0")], 7) +
    make_row([nc("A8","",s="0"), nc("B8","",s="9"), nc("C8","",s="0"), nc("D8","",s="0")], 8) +
    make_row([nc("A9","",s="0"), nc("B9","",s="9"), nc("C9","",s="0"), nc("D9","",s="0")], 9) +
    make_row([nc("A10","",s="0"), nc("B10","",s="9"), nc("C10","",s="0"), nc("D10","",s="0")], 10) +
    make_row([nc("A11","",s="0"), nc("B11","",s="9"), nc("C11","",s="0"), nc("D11","",s="0")], 11) +
    make_row([nc("A12","",s="0"), nc("B12","",s="9"), nc("C12","",s="0"), nc("D12","",s="0")], 12) +
    make_row([nc("A13","",s="0"), nc("B13","",s="9"), nc("C13","",s="0"), nc("D13","",s="0")], 13) +
    make_row([nc("A14","",s="0"), nc("B14","",s="9"), nc("C14","",s="0"), nc("D14","",s="0")], 14) +
    make_row([nc("A15","",s="0"), nc("B15","",s="9"), nc("C15","",s="0"), nc("D15","",s="0")], 15) +
    make_row([nc("A16","",s="0"), nc("B16","",s="9"), nc("C16","",s="0"), nc("D16","",s="0")], 16) +
    make_row([nc("A17","",s="0"), nc("B17","",s="9"), nc("C17","",s="0"), nc("D17","",s="0")], 17) +
    make_row([nc("A18","",s="0"), nc("B18","",s="9"), nc("C18","",s="0"), nc("D18","",s="0")], 18) +
    make_row([nc("A19","",s="0"), nc("B19","",s="9"), nc("C19","",s="0"), nc("D19","",s="0")], 19) +
    make_row([nc("A20","",s="0"), nc("B20","",s="9"), nc("C20","",s="0"), nc("D20","",s="0")], 20) +
    make_row([nc("A21","",s="0"), nc("B21","",s="9"), nc("C21","",s="0"), nc("D21","",s="0")], 21) +
    make_row([nc("A22","",s="0"), nc("B22","",s="9"), nc("C22","",s="0"), nc("D22","",s="0")], 22)
)

s2_sh = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView workbookViewId="0"/>
    <pane ySplit="2" topLeftCell="A3" activePane="bottomLeft" state="frozen"/>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols>
    <col min="1" max="1" width="20" customWidth="1"/>
    <col min="2" max="2" width="10" customWidth="1"/>
    <col min="3" max="3" width="40" customWidth="1"/>
    <col min="4" max="4" width="30" customWidth="1"/>
  </cols>
  <sheetData>{s2_r}
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

# Sheet 3: 活动记录
s3_r = (
    make_row([sc("A1",0,s="12")], 1, ht=30) +
    make_row([sc("A2",10,s="4"), sc("B2",11,s="4"), sc("C2",12,s="4")], 2, ht=20) +
    make_row([nc("A3","",s="0"), nc("B3","",s="9"), nc("C3","",s="9")], 3) +
    make_row([nc("A4","",s="0"), nc("B4","",s="9"), nc("C4","",s="9")], 4) +
    make_row([nc("A5","",s="0"), nc("B5","",s="9"), nc("C5","",s="9")], 5) +
    make_row([nc("A6","",s="0"), nc("B6","",s="9"), nc("C6","",s="9")], 6) +
    make_row([nc("A7","",s="0"), nc("B7","",s="9"), nc("C7","",s="9")], 7) +
    make_row([nc("A8","",s="0"), nc("B8","",s="9"), nc("C8","",s="9")], 8) +
    make_row([nc("A9","",s="0"), nc("B9","",s="9"), nc("C9","",s="9")], 9) +
    make_row([nc("A10","",s="0"), nc("B10","",s="9"), nc("C10","",s="9")], 10) +
    make_row([nc("A11","",s="0"), nc("B11","",s="9"), nc("C11","",s="9")], 11) +
    make_row([nc("A12","",s="0"), nc("B12","",s="9"), nc("C12","",s="9")], 12) +
    make_row([nc("A13","",s="0"), nc("B13","",s="9"), nc("C13","",s="9")], 13) +
    make_row([nc("A14","",s="0"), nc("B14","",s="9"), nc("C14","",s="9")], 14) +
    make_row([nc("A15","",s="0"), nc("B15","",s="9"), nc("C15","",s="9")], 15) +
    make_row([nc("A16","",s="0"), nc("B16","",s="9"), nc("C16","",s="9")], 16) +
    make_row([nc("A17","",s="0"), nc("B17","",s="9"), nc("C17","",s="9")], 17) +
    make_row([nc("A18","",s="0"), nc("B18","",s="9"), nc("C18","",s="9")], 18) +
    make_row([nc("A19","",s="0"), nc("B19","",s="9"), nc("C19","",s="9")], 19) +
    make_row([nc("A20","",s="0"), nc("B20","",s="9"), nc("C20","",s="9")], 20) +
    make_row([nc("A21","",s="0"), nc("B21","",s="9"), nc("C21","",s="9")], 21) +
    make_row([nc("A22","",s="0"), nc("B22","",s="9"), nc("C22","",s="9")], 22)
)

s3_sh = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView workbookViewId="0"/>
    <pane ySplit="2" topLeftCell="A3" activePane="bottomLeft" state="frozen"/>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols>
    <col min="1" max="1" width="25" customWidth="1"/>
    <col min="2" max="2" width="12" customWidth="1"/>
    <col min="3" max="3" width="12" customWidth="1"/>
  </cols>
  <sheetData>{s3_r}
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

f3_dir = os.path.join(work_dir, "课堂互动记录表")
os.makedirs(f3_dir, exist_ok=True)
with open(os.path.join(f3_dir, "xl/sharedStrings.xml"), "w", encoding="utf-8") as f:
    f.write(build_shared_strings(strings3))
with open(os.path.join(f3_dir, "xl/workbook.xml"), "w", encoding="utf-8") as f:
    f.write(build_workbook(["提问记录", "讨论记录", "活动记录"]))
with open(os.path.join(f3_dir, "xl/_rels/workbook.xml.rels"), "w", encoding="utf-8") as f:
    f.write(build_workbook_rels(3))
with open(os.path.join(f3_dir, "[Content_Types].xml"), "w", encoding="utf-8") as f:
    f.write(build_content_types(3))
with open(os.path.join(f3_dir, "xl/worksheets/sheet1.xml"), "w", encoding="utf-8") as f:
    f.write(s1_sh)
with open(os.path.join(f3_dir, "xl/worksheets/sheet2.xml"), "w", encoding="utf-8") as f:
    f.write(s2_sh)
with open(os.path.join(f3_dir, "xl/worksheets/sheet3.xml"), "w", encoding="utf-8") as f:
    f.write(s3_sh)

print("  [OK] 课堂互动记录表.xlsx")

# ===================== FILE 4: 小组讨论记录表.xlsx =====================
print("Creating 小组讨论记录表.xlsx...")

strings4 = [
    "小组讨论记录表", "课程名称：国家为何存在——社会契约与政治权威的哲学基础",
    "小组信息", "观点汇总", "契约论应用", "小组自评",
    "组号", "成员名单", "时间", "话题",
    "各方观点", "争议点", "达成的共识",
    "契约论框架", "如何应用", "有何洞见",
    "讨论质量评分",
    "1-5分评分", "非常满意", "满意", "一般", "不满意", "非常不满意",
    "霍布斯契约论", "洛克契约论", "卢梭契约论", "罗尔斯无知之幕",
    "GDP", "经济增长", "教育水平", "创新能力", "社会福利",
    "模块一", "自然状态与政治起源",
    "模块二", "社会契约的逻辑",
    "模块三", "霍布斯、洛克、卢梭",
    "模块四", "政治权威的正当性",
    "模块五", "国家与公民社会",
    "模块六", "现代挑战与新契约"
]

# Sheet 1: 小组信息
s1_r = (
    make_row([sc("A1",0,s="12")], 1, ht=30) +
    make_row([sc("A2",1,s="4"), sc("B2",2,s="4"), sc("C2",3,s="4"), sc("D2",4,s="4")], 2, ht=20) +
    make_row([nc("A3","",s="9"), nc("B3","",s="0"), nc("C3","",s="0"), nc("D3","",s="0")], 3) +
    make_row([nc("A4","",s="9"), nc("B4","",s="0"), nc("C4","",s="0"), nc("D4","",s="0")], 4) +
    make_row([nc("A5","",s="9"), nc("B5","",s="0"), nc("C5","",s="0"), nc("D5","",s="0")], 5) +
    make_row([nc("A6","",s="9"), nc("B6","",s="0"), nc("C6","",s="0"), nc("D6","",s="0")], 6) +
    make_row([nc("A7","",s="9"), nc("B7","",s="0"), nc("C7","",s="0"), nc("D7","",s="0")], 7) +
    make_row([nc("A8","",s="9"), nc("B8","",s="0"), nc("C8","",s="0"), nc("D8","",s="0")], 8) +
    make_row([nc("A9","",s="9"), nc("B9","",s="0"), nc("C9","",s="0"), nc("D9","",s="0")], 9) +
    make_row([nc("A10","",s="9"), nc("B10","",s="0"), nc("C10","",s="0"), nc("D10","",s="0")], 10) +
    make_row([nc("A11","",s="9"), nc("B11","",s="0"), nc("C11","",s="0"), nc("D11","",s="0")], 11) +
    make_row([nc("A12","",s="9"), nc("B12","",s="0"), nc("C12","",s="0"), nc("D12","",s="0")], 12) +
    make_row([nc("A13","",s="9"), nc("B13","",s="0"), nc("C13","",s="0"), nc("D13","",s="0")], 13) +
    make_row([nc("A14","",s="9"), nc("B14","",s="0"), nc("C14","",s="0"), nc("D14","",s="0")], 14) +
    make_row([nc("A15","",s="9"), nc("B15","",s="0"), nc("C15","",s="0"), nc("D15","",s="0")], 15) +
    make_row([nc("A16","",s="9"), nc("B16","",s="0"), nc("C16","",s="0"), nc("D16","",s="0")], 16) +
    make_row([nc("A17","",s="9"), nc("B17","",s="0"), nc("C17","",s="0"), nc("D17","",s="0")], 17) +
    make_row([nc("A18","",s="9"), nc("B18","",s="0"), nc("C18","",s="0"), nc("D18","",s="0")], 18) +
    make_row([nc("A19","",s="9"), nc("B19","",s="0"), nc("C19","",s="0"), nc("D19","",s="0")], 19) +
    make_row([nc("A20","",s="9"), nc("B20","",s="0"), nc("C20","",s="0"), nc("D20","",s="0")], 20) +
    make_row([nc("A21","",s="9"), nc("B21","",s="0"), nc("C21","",s="0"), nc("D21","",s="0")], 21) +
    make_row([nc("A22","",s="9"), nc("B22","",s="0"), nc("C22","",s="0"), nc("D22","",s="0")], 22)
)

s1_sh = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView tabSelected="1" workbookViewId="0"/>
    <pane ySplit="2" topLeftCell="A3" activePane="bottomLeft" state="frozen"/>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols>
    <col min="1" max="1" width="8" customWidth="1"/>
    <col min="2" max="2" width="30" customWidth="1"/>
    <col min="3" max="3" width="16" customWidth="1"/>
    <col min="4" max="4" width="25" customWidth="1"/>
  </cols>
  <sheetData>{s1_r}
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

# Sheet 2: 观点汇总
s2_r = (
    make_row([sc("A1",0,s="12")], 1, ht=30) +
    make_row([sc("A2",5,s="4"), sc("B2",6,s="4"), sc("C2",7,s="4")], 2, ht=20) +
    make_row([nc("A3","",s="0"), nc("B3","",s="0"), nc("C3","",s="0")], 3) +
    make_row([nc("A4","",s="0"), nc("B4","",s="0"), nc("C4","",s="0")], 4) +
    make_row([nc("A5","",s="0"), nc("B5","",s="0"), nc("C5","",s="0")], 5) +
    make_row([nc("A6","",s="0"), nc("B6","",s="0"), nc("C6","",s="0")], 6) +
    make_row([nc("A7","",s="0"), nc("B7","",s="0"), nc("C7","",s="0")], 7) +
    make_row([nc("A8","",s="0"), nc("B8","",s="0"), nc("C8","",s="0")], 8) +
    make_row([nc("A9","",s="0"), nc("B9","",s="0"), nc("C9","",s="0")], 9) +
    make_row([nc("A10","",s="0"), nc("B10","",s="0"), nc("C10","",s="0")], 10) +
    make_row([nc("A11","",s="0"), nc("B11","",s="0"), nc("C11","",s="0")], 11) +
    make_row([nc("A12","",s="0"), nc("B12","",s="0"), nc("C12","",s="0")], 12) +
    make_row([nc("A13","",s="0"), nc("B13","",s="0"), nc("C13","",s="0")], 13) +
    make_row([nc("A14","",s="0"), nc("B14","",s="0"), nc("C14","",s="0")], 14) +
    make_row([nc("A15","",s="0"), nc("B15","",s="0"), nc("C15","",s="0")], 15) +
    make_row([nc("A16","",s="0"), nc("B16","",s="0"), nc("C16","",s="0")], 16) +
    make_row([nc("A17","",s="0"), nc("B17","",s="0"), nc("C17","",s="0")], 17) +
    make_row([nc("A18","",s="0"), nc("B18","",s="0"), nc("C18","",s="0")], 18) +
    make_row([nc("A19","",s="0"), nc("B19","",s="0"), nc("C19","",s="0")], 19) +
    make_row([nc("A20","",s="0"), nc("B20","",s="0"), nc("C20","",s="0")], 20) +
    make_row([nc("A21","",s="0"), nc("B21","",s="0"), nc("C21","",s="0")], 21) +
    make_row([nc("A22","",s="0"), nc("B22","",s="0"), nc("C22","",s="0")], 22)
)

s2_sh = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView workbookViewId="0"/>
    <pane ySplit="2" topLeftCell="A3" activePane="bottomLeft" state="frozen"/>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols>
    <col min="1" max="1" width="25" customWidth="1"/>
    <col min="2" max="2" width="35" customWidth="1"/>
    <col min="3" max="3" width="35" customWidth="1"/>
  </cols>
  <sheetData>{s2_r}
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

# Sheet 3: 契约论应用
s3_r = (
    make_row([sc("A1",0,s="12")], 1, ht=30) +
    make_row([sc("A2",8,s="4"), sc("B2",9,s="4"), sc("C2",10,s="4")], 2, ht=20) +
    make_row([sc("A3","",s="0"), nc("B3","",s="0"), nc("C3","",s="0")], 3) +
    make_row([sc("A4","",s="0"), nc("B4","",s="0"), nc("C4","",s="0")], 4) +
    make_row([sc("A5","",s="0"), nc("B5","",s="0"), nc("C5","",s="0")], 5) +
    make_row([sc("A6","",s="0"), nc("B6","",s="0"), nc("C6","",s="0")], 6) +
    make_row([sc("A7","",s="0"), nc("B7","",s="0"), nc("C7","",s="0")], 7) +
    make_row([sc("A8","",s="0"), nc("B8","",s="0"), nc("C8","",s="0")], 8) +
    make_row([sc("A9","",s="0"), nc("B9","",s="0"), nc("C9","",s="0")], 9) +
    make_row([sc("A10","",s="0"), nc("B10","",s="0"), nc("C10","",s="0")], 10) +
    make_row([sc("A11","",s="0"), nc("B11","",s="0"), nc("C11","",s="0")], 11) +
    make_row([sc("A12","",s="0"), nc("B12","",s="0"), nc("C12","",s="0")], 12) +
    make_row([sc("A13","",s="0"), nc("B13","",s="0"), nc("C13","",s="0")], 13) +
    make_row([sc("A14","",s="0"), nc("B14","",s="0"), nc("C14","",s="0")], 14) +
    make_row([sc("A15","",s="0"), nc("B15","",s="0"), nc("C15","",s="0")], 15) +
    make_row([sc("A16","",s="0"), nc("B16","",s="0"), nc("C16","",s="0")], 16) +
    make_row([sc("A17","",s="0"), nc("B17","",s="0"), nc("C17","",s="0")], 17) +
    make_row([sc("A18","",s="0"), nc("B18","",s="0"), nc("C18","",s="0")], 18) +
    make_row([sc("A19","",s="0"), nc("B19","",s="0"), nc("C19","",s="0")], 19) +
    make_row([sc("A20","",s="0"), nc("B20","",s="0"), nc("C20","",s="0")], 20) +
    make_row([sc("A21","",s="0"), nc("B21","",s="0"), nc("C21","",s="0")], 21) +
    make_row([sc("A22","",s="0"), nc("B22","",s="0"), nc("C22","",s="0")], 22)
)

s3_sh = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView workbookViewId="0"/>
    <pane ySplit="2" topLeftCell="A3" activePane="bottomLeft" state="frozen"/>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols>
    <col min="1" max="1" width="18" customWidth="1"/>
    <col min="2" max="2" width="40" customWidth="1"/>
    <col min="3" max="3" width="40" customWidth="1"/>
  </cols>
  <sheetData>{s3_r}
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

# Sheet 4: 小组自评
s4_r = (
    make_row([sc("A1",0,s="12")], 1, ht=30) +
    make_row([sc("A2",13,s="4"), sc("B2",14,s="4")], 2, ht=20) +
    make_row([nc("A3","",s="9"), nc("B3","",s="9")], 3) +
    make_row([nc("A4","",s="9"), nc("B4","",s="9")], 4) +
    make_row([nc("A5","",s="9"), nc("B5","",s="9")], 5) +
    make_row([nc("A6","",s="9"), nc("B6","",s="9")], 6) +
    make_row([nc("A7","",s="9"), nc("B7","",s="9")], 7) +
    make_row([nc("A8","",s="9"), nc("B8","",s="9")], 8) +
    make_row([nc("A9","",s="9"), nc("B9","",s="9")], 9) +
    make_row([nc("A10","",s="9"), nc("B10","",s="9")], 10) +
    make_row([nc("A11","",s="9"), nc("B11","",s="9")], 11) +
    make_row([nc("A12","",s="9"), nc("B12","",s="9")], 12) +
    make_row([nc("A13","",s="9"), nc("B13","",s="9")], 13) +
    make_row([nc("A14","",s="9"), nc("B14","",s="9")], 14) +
    make_row([nc("A15","",s="9"), nc("B15","",s="9")], 15) +
    make_row([nc("A16","",s="9"), nc("B16","",s="9")], 16) +
    make_row([nc("A17","",s="9"), nc("B17","",s="9")], 17) +
    make_row([nc("A18","",s="9"), nc("B18","",s="9")], 18) +
    make_row([nc("A19","",s="9"), nc("B19","",s="9")], 19) +
    make_row([nc("A20","",s="9"), nc("B20","",s="9")], 20) +
    make_row([nc("A21","",s="9"), nc("B21","",s="9")], 21) +
    make_row([nc("A22","",s="9"), nc("B22","",s="9")], 22)
)

s4_sh = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView workbookViewId="0"/>
    <pane ySplit="2" topLeftCell="A3" activePane="bottomLeft" state="frozen"/>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols>
    <col min="1" max="1" width="8" customWidth="1"/>
    <col min="2" max="2" width="12" customWidth="1"/>
  </cols>
  <sheetData>{s4_r}
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

f4_dir = os.path.join(work_dir, "小组讨论记录表")
os.makedirs(f4_dir, exist_ok=True)
with open(os.path.join(f4_dir, "xl/sharedStrings.xml"), "w", encoding="utf-8") as f:
    f.write(build_shared_strings(strings4))
with open(os.path.join(f4_dir, "xl/workbook.xml"), "w", encoding="utf-8") as f:
    f.write(build_workbook(["小组信息", "观点汇总", "契约论应用", "小组自评"]))
with open(os.path.join(f4_dir, "xl/_rels/workbook.xml.rels"), "w", encoding="utf-8") as f:
    f.write(build_workbook_rels(4))
with open(os.path.join(f4_dir, "[Content_Types].xml"), "w", encoding="utf-8") as f:
    f.write(build_content_types(4))
with open(os.path.join(f4_dir, "xl/worksheets/sheet1.xml"), "w", encoding="utf-8") as f:
    f.write(s1_sh)
with open(os.path.join(f4_dir, "xl/worksheets/sheet2.xml"), "w", encoding="utf-8") as f:
    f.write(s2_sh)
with open(os.path.join(f4_dir, "xl/worksheets/sheet3.xml"), "w", encoding="utf-8") as f:
    f.write(s3_sh)
with open(os.path.join(f4_dir, "xl/worksheets/sheet4.xml"), "w", encoding="utf-8") as f:
    f.write(s4_sh)

print("  [OK] 小组讨论记录表.xlsx")
print("Files 3-4 created successfully")
