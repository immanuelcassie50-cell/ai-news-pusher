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

# ===================== FILE 5: 课程产出汇总表.xlsx =====================
print("Creating 课程产出汇总表.xlsx...")

strings5 = [
    "课程产出汇总表", "课程名称：国家为何存在——社会契约与政治权威的哲学基础",
    "个人产出", "小组产出", "班级产出", "课程评估",
    "学员姓名", "权威分析报告摘要", "小组编号", "讨论结论摘要",
    "全班共识", "班级洞见",
    "评估维度", "反应评估", "学习评估", "行为评估", "成果评估",
    "1-5分评分", "5分=非常优秀 4分=良好 3分=一般 2分=较差 1分=很差",
    "整体满意度", "", "", "", "",
    "学员1", "", "", "", "",
    "学员2", "", "", "", "",
    "学员3", "", "", "", "",
    "学员4", "", "", "", "",
    "学员5", "", "", "", "",
    "学员6", "", "", "", "",
    "学员7", "", "", "", "",
    "学员8", "", "", "", "",
    "学员9", "", "", "", "",
    "学员10", "", "", "", "",
    "学员11", "", "", "", "",
    "学员12", "", "", "", "",
    "学员13", "", "", "", "",
    "学员14", "", "", "", "",
    "学员15", "", "", "", "",
    "学员16", "", "", "", "",
    "学员17", "", "", "", "",
    "学员18", "", "", "", "",
    "学员19", "", "", "", "",
    "学员20", "", "", "", "",
    "小组1", "", "", "",
    "小组2", "", "", "",
    "小组3", "", "", "",
    "小组4", "", "", "",
    "小组5", "", "", "",
    "小组6", "", "", ""
]

# Sheet 1: 个人产出 (20 rows)
s1_r = (
    make_row([sc("A1",0,s="12")], 1, ht=30) +
    make_row([sc("A2",1,s="4"), sc("B2",2,s="4")], 2, ht=20) +
    make_row([sc("A3","",s="0"), nc("B3","",s="0")], 3) +
    make_row([sc("A4","",s="0"), nc("B4","",s="0")], 4) +
    make_row([sc("A5","",s="0"), nc("B5","",s="0")], 5) +
    make_row([sc("A6","",s="0"), nc("B6","",s="0")], 6) +
    make_row([sc("A7","",s="0"), nc("B7","",s="0")], 7) +
    make_row([sc("A8","",s="0"), nc("B8","",s="0")], 8) +
    make_row([sc("A9","",s="0"), nc("B9","",s="0")], 9) +
    make_row([sc("A10","",s="0"), nc("B10","",s="0")], 10) +
    make_row([sc("A11","",s="0"), nc("B11","",s="0")], 11) +
    make_row([sc("A12","",s="0"), nc("B12","",s="0")], 12) +
    make_row([sc("A13","",s="0"), nc("B13","",s="0")], 13) +
    make_row([sc("A14","",s="0"), nc("B14","",s="0")], 14) +
    make_row([sc("A15","",s="0"), nc("B15","",s="0")], 15) +
    make_row([sc("A16","",s="0"), nc("B16","",s="0")], 16) +
    make_row([sc("A17","",s="0"), nc("B17","",s="0")], 17) +
    make_row([sc("A18","",s="0"), nc("B18","",s="0")], 18) +
    make_row([sc("A19","",s="0"), nc("B19","",s="0")], 19) +
    make_row([sc("A20","",s="0"), nc("B20","",s="0")], 20) +
    make_row([sc("A21","",s="0"), nc("B21","",s="0")], 21) +
    make_row([sc("A22","",s="0"), nc("B22","",s="0")], 22)
)

s1_sh = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView tabSelected="1" workbookViewId="0"/>
    <pane ySplit="2" topLeftCell="A3" activePane="bottomLeft" state="frozen"/>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols>
    <col min="1" max="1" width="15" customWidth="1"/>
    <col min="2" max="2" width="60" customWidth="1"/>
  </cols>
  <sheetData>{s1_r}
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

# Sheet 2: 小组产出 (6 rows)
s2_r = (
    make_row([sc("A1",0,s="12")], 1, ht=30) +
    make_row([sc("A2",3,s="4"), sc("B2",4,s="4")], 2, ht=20) +
    make_row([sc("A3","",s="0"), nc("B3","",s="0")], 3) +
    make_row([sc("A4","",s="0"), nc("B4","",s="0")], 4) +
    make_row([sc("A5","",s="0"), nc("B5","",s="0")], 5) +
    make_row([sc("A6","",s="0"), nc("B6","",s="0")], 6) +
    make_row([sc("A7","",s="0"), nc("B7","",s="0")], 7) +
    make_row([sc("A8","",s="0"), nc("B8","",s="0")], 8)
)

s2_sh = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView workbookViewId="0"/>
    <pane ySplit="2" topLeftCell="A3" activePane="bottomLeft" state="frozen"/>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols>
    <col min="1" max="1" width="15" customWidth="1"/>
    <col min="2" max="2" width="60" customWidth="1"/>
  </cols>
  <sheetData>{s2_r}
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

# Sheet 3: 班级产出
s3_r = (
    make_row([sc("A1",0,s="12")], 1, ht=30) +
    make_row([sc("A2",5,s="4"), sc("B2",6,s="4")], 2, ht=20) +
    make_row([sc("A3","全班共识：",s="4"), nc("B3","",s="0")], 3, ht=30) +
    make_row([sc("A4","班级洞见：",s="4"), nc("B4","",s="0")], 4, ht=30)
)

s3_sh = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView workbookViewId="0"/>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols>
    <col min="1" max="1" width="15" customWidth="1"/>
    <col min="2" max="2" width="70" customWidth="1"/>
  </cols>
  <sheetData>{s3_r}
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

# Sheet 4: 课程评估
s4_r = (
    make_row([sc("A1",0,s="12")], 1, ht=30) +
    make_row([sc("A2",7,s="4"), sc("B2",8,s="4"), sc("C2",9,s="4"), sc("D2",10,s="4"), sc("E2",11,s="4")], 2, ht=20) +
    make_row([sc("A3",12,s="4"), nc("B3","",s="9"), nc("C3","",s="9"), nc("D3","",s="9"), nc("E3","",s="9")], 3) +
    make_row([sc("A4","整体满意度",s="0"), nc("B4","",s="9"), nc("C4","",s="9"), nc("D4","",s="9"), nc("E4","",s="9")], 4) +
    make_row([sc("A5","平均分",s="0"), fc("B5","AVERAGE(B3:B4)",s="8"), fc("C5","AVERAGE(C3:C4)",s="8"), fc("D5","AVERAGE(D3:D4)",s="8"), fc("E5","AVERAGE(E3:E4)",s="8")], 5)
)

s4_sh = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView workbookViewId="0"/>
    <pane ySplit="2" topLeftCell="A3" activePane="bottomLeft" state="frozen"/>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols>
    <col min="1" max="1" width="18" customWidth="1"/>
    <col min="2" max="2" width="12" customWidth="1"/>
    <col min="3" max="3" width="12" customWidth="1"/>
    <col min="4" max="4" width="12" customWidth="1"/>
    <col min="5" max="5" width="12" customWidth="1"/>
  </cols>
  <sheetData>{s4_r}
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

f5_dir = os.path.join(work_dir, "课程产出汇总表")
os.makedirs(f5_dir, exist_ok=True)
with open(os.path.join(f5_dir, "xl/sharedStrings.xml"), "w", encoding="utf-8") as f:
    f.write(build_shared_strings(strings5))
with open(os.path.join(f5_dir, "xl/workbook.xml"), "w", encoding="utf-8") as f:
    f.write(build_workbook(["个人产出", "小组产出", "班级产出", "课程评估"]))
with open(os.path.join(f5_dir, "xl/_rels/workbook.xml.rels"), "w", encoding="utf-8") as f:
    f.write(build_workbook_rels(4))
with open(os.path.join(f5_dir, "[Content_Types].xml"), "w", encoding="utf-8") as f:
    f.write(build_content_types(4))
with open(os.path.join(f5_dir, "xl/worksheets/sheet1.xml"), "w", encoding="utf-8") as f:
    f.write(s1_sh)
with open(os.path.join(f5_dir, "xl/worksheets/sheet2.xml"), "w", encoding="utf-8") as f:
    f.write(s2_sh)
with open(os.path.join(f5_dir, "xl/worksheets/sheet3.xml"), "w", encoding="utf-8") as f:
    f.write(s3_sh)
with open(os.path.join(f5_dir, "xl/worksheets/sheet4.xml"), "w", encoding="utf-8") as f:
    f.write(s4_sh)

print("  [OK] 课程产出汇总表.xlsx")
print("File 5 created successfully")
