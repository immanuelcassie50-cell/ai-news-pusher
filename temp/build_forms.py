import os
import shutil

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

# ===================== FILE 1: 表单使用指引.xlsx =====================
print("Creating 表单使用指引.xlsx...")

strings1 = [
    "表单使用指引",
    "课程名称：国家为何存在——社会契约与政治权威的哲学基础",
    "表单名称",
    "用途说明",
    "使用方法",
    "快捷导航",
    "学员档案管理表",
    "记录学员基本信息、入学成绩、结业成绩，跟踪学习轨迹",
    "1. 课程开始前录入学员基本信息；2. 课程前测后录入前测分数；3. 课程后测后录入后测分数；4. 系统自动计算变化值",
    "→ 跳转至学员档案管理表",
    "课堂互动记录表",
    "记录课堂提问、讨论、活动等互动数据",
    "1. 每次课后记录提问和回答情况；2. 记录讨论话题和主要观点；3. 活动后进行效果评价",
    "→ 跳转至课堂互动记录表",
    "小组讨论记录表",
    "记录小组讨论过程、观点汇总和契约论应用",
    "1. 每次小组讨论前记录成员名单；2. 记录讨论话题和各方观点；3. 记录争议点和达成的共识；4. 评估讨论质量",
    "→ 跳转至小组讨论记录表",
    "课程产出汇总表",
    "汇总个人、小组、班级的课程产出和整体评估",
    "1. 收集个人权威分析报告摘要；2. 汇总小组讨论结论；3. 整理班级共识和洞见；4. 进行课程整体效果评估",
    "→ 跳转至课程产出汇总表",
    "说明",
    "索引",
    "课程名称",
    "国家为何存在——社会契约与政治权威的哲学基础",
    "适用对象",
    "政治学课程学员",
    "表单数量",
    "共4个配套表单",
    "版本",
    "v1.0"
]

# Sheet 1: 说明页
s1_rows = (
    make_row([sc("A1",0,s="12"), sc("B1",1,s="12"), sc("C1",2,s="12")], 1, ht=30) +
    make_row([sc("A2",3,s="4"), sc("B2",4,s="4"), sc("C2",5,s="4")], 2, ht=20) +
    make_row([sc("A3",6,s="0"), sc("B3",7,s="0"), sc("C3",8,s="0")], 3) +
    make_row([sc("A4",9,s="0"), sc("B4",10,s="0"), sc("C4",11,s="0")], 4) +
    make_row([sc("A5",12,s="0"), sc("B5",13,s="0"), sc("C5",14,s="0")], 5) +
    make_row([sc("A6",15,s="0"), sc("B6",16,s="0"), sc("C6",17,s="0")], 6) +
    make_row([sc("A7",18,s="0"), sc("B7",19,s="0"), sc("C7",20,s="0")], 7) +
    make_row([sc("A8",21,s="0"), sc("B8",22,s="0"), sc("C8",23,s="0")], 8) +
    make_row([sc("A9",24,s="0"), sc("B9",25,s="0"), sc("C9",26,s="0")], 9) +
    make_row([sc("A10",27,s="0"), sc("B10",28,s="0"), sc("C10",29,s="0")], 10) +
    make_row([sc("A11",30,s="0"), sc("B11",31,s="0"), sc("C11",32,s="0")], 11) +
    make_row([sc("A12",33,s="0"), sc("B12",34,s="0"), sc("C12",35,s="0")], 12)
)

s1_sheet = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView tabSelected="1" workbookViewId="0"/>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols>
    <col min="1" max="1" width="22" customWidth="1"/>
    <col min="2" max="2" width="55" customWidth="1"/>
    <col min="3" max="3" width="50" customWidth="1"/>
  </cols>
  <sheetData>{s1_rows}
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

# Sheet 2: 索引页
s2_rows = (
    make_row([sc("A1",36,s="12"), sc("B1",37,s="12")], 1, ht=30) +
    make_row([sc("A2",3,s="4"), sc("B2",5,s="4")], 2, ht=20) +
    make_row([sc("A3",6,s="0"), sc("B3",8,s="0")], 3) +
    make_row([sc("A4",12,s="0"), sc("B4",14,s="0")], 4) +
    make_row([sc("A5",15,s="0"), sc("B5",17,s="0")], 5) +
    make_row([sc("A6",18,s="0"), sc("B6",20,s="0")], 6)
)

s2_sheet = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView workbookViewId="0"/>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols>
    <col min="1" max="1" width="22" customWidth="1"/>
    <col min="2" max="2" width="55" customWidth="1"/>
  </cols>
  <sheetData>{s2_rows}
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

f1_dir = os.path.join(work_dir, "表单使用指引")
os.makedirs(f1_dir, exist_ok=True)
with open(os.path.join(f1_dir, "xl/sharedStrings.xml"), "w", encoding="utf-8") as f:
    f.write(build_shared_strings(strings1))
with open(os.path.join(f1_dir, "xl/workbook.xml"), "w", encoding="utf-8") as f:
    f.write(build_workbook(["说明页", "索引页"]))
with open(os.path.join(f1_dir, "xl/_rels/workbook.xml.rels"), "w", encoding="utf-8") as f:
    f.write(build_workbook_rels(2))
with open(os.path.join(f1_dir, "[Content_Types].xml"), "w", encoding="utf-8") as f:
    f.write(build_content_types(2))
with open(os.path.join(f1_dir, "xl/worksheets/sheet1.xml"), "w", encoding="utf-8") as f:
    f.write(s1_sheet)
with open(os.path.join(f1_dir, "xl/worksheets/sheet2.xml"), "w", encoding="utf-8") as f:
    f.write(s2_sheet)

print("  [OK] 表单使用指引.xlsx")

# ===================== FILE 2: 学员档案管理表.xlsx =====================
print("Creating 学员档案管理表.xlsx...")

strings2 = [
    "学员档案管理表", "课程名称：国家为何存在——社会契约与政治权威的哲学基础",
    "学员姓名", "所在机构", "联系方式", "课程前测分数", "课程后测分数", "对比变化",
    "入学日期", "结业日期", "学习状态",
    "模块一", "自然状态与政治起源", "模块二", "社会契约的逻辑", "模块三", "霍布斯、洛克、卢梭",
    "模块四", "政治权威的正当性", "模块五", "国家与公民社会", "模块六", "现代挑战与新契约",
    "模块完成情况", "是", "否", "部分",
    "前测", "后测", "提升", "能力成长追踪",
    "学员信息表", "学习轨迹表", "能力成长图", "班级汇总"
]

# 4 sheets: 学员信息表, 学习轨迹表, 能力成长图, 班级汇总
# Sheet 1: 学员信息表
s1_r = (
    make_row([sc("A1",0,s="12"), sc("B1",1,s="12")], 1, ht=30) +
    make_row([sc("A2",2,s="4"), sc("B2",3,s="4"), sc("C2",4,s="4"), sc("D2",5,s="4"), sc("E2",6,s="4"), sc("F2",7,s="4"), sc("G2",8,s="4"), sc("H2",9,s="4"), sc("I2",10,s="4")], 2, ht=20) +
    make_row([sc("A3","",s="0"), nc("B3","",s="1"), nc("C3","",s="1"), nc("D3","",s="1"), nc("E3","",s="7"), nc("F3","",s="7"), nc("G3","",s="8"), sc("H3",10,s="0"), sc("I3",11,s="0")], 3) +
    make_row([sc("A4","",s="0"), nc("B4","",s="1"), nc("C4","",s="1"), nc("D4","",s="1"), nc("E4","",s="7"), nc("F4","",s="7"), nc("G4","",s="8"), sc("H4",10,s="0"), sc("I4",11,s="0")], 4) +
    make_row([sc("A5","",s="0"), nc("B5","",s="1"), nc("C5","",s="1"), nc("D5","",s="1"), nc("E5","",s="7"), nc("F5","",s="7"), nc("G5","",s="8"), sc("H5",10,s="0"), sc("I5",11,s="0")], 5) +
    make_row([sc("A6","",s="0"), nc("B6","",s="1"), nc("C6","",s="1"), nc("D6","",s="1"), nc("E6","",s="7"), nc("F6","",s="7"), nc("G6","",s="8"), sc("H6",10,s="0"), sc("I6",11,s="0")], 6) +
    make_row([sc("A7","",s="0"), nc("B7","",s="1"), nc("C7","",s="1"), nc("D7","",s="1"), nc("E7","",s="7"), nc("F7","",s="7"), nc("G7","",s="8"), sc("H7",10,s="0"), sc("I7",11,s="0")], 7) +
    make_row([sc("A8","",s="0"), nc("B8","",s="1"), nc("C8","",s="1"), nc("D8","",s="1"), nc("E8","",s="7"), nc("F8","",s="7"), nc("G8","",s="8"), sc("H8",10,s="0"), sc("I8",11,s="0")], 8) +
    make_row([sc("A9","",s="0"), nc("B9","",s="1"), nc("C9","",s="1"), nc("D9","",s="1"), nc("E9","",s="7"), nc("F9","",s="7"), nc("G9","",s="8"), sc("H9",10,s="0"), sc("I9",11,s="0")], 9) +
    make_row([sc("A10","",s="0"), nc("B10","",s="1"), nc("C10","",s="1"), nc("D10","",s="1"), nc("E10","",s="7"), nc("F10","",s="7"), nc("G10","",s="8"), sc("H10",10,s="0"), sc("I10",11,s="0")], 10) +
    make_row([sc("A11","",s="0"), nc("B11","",s="1"), nc("C11","",s="1"), nc("D11","",s="1"), nc("E11","",s="7"), nc("F11","",s="7"), nc("G11","",s="8"), sc("H11",10,s="0"), sc("I11",11,s="0")], 11) +
    make_row([sc("A12","",s="0"), nc("B12","",s="1"), nc("C12","",s="1"), nc("D12","",s="1"), nc("E12","",s="7"), nc("F12","",s="7"), nc("G12","",s="8"), sc("H12",10,s="0"), sc("I12",11,s="0")], 12) +
    make_row([sc("A13","",s="0"), nc("B13","",s="1"), nc("C13","",s="1"), nc("D13","",s="1"), nc("E13","",s="7"), nc("F13","",s="7"), nc("G13","",s="8"), sc("H13",10,s="0"), sc("I13",11,s="0")], 13) +
    make_row([sc("A14","",s="0"), nc("B14","",s="1"), nc("C14","",s="1"), nc("D14","",s="1"), nc("E14","",s="7"), nc("F14","",s="7"), nc("G14","",s="8"), sc("H14",10,s="0"), sc("I14",11,s="0")], 14) +
    make_row([sc("A15","",s="0"), nc("B15","",s="1"), nc("C15","",s="1"), nc("D15","",s="1"), nc("E15","",s="7"), nc("F15","",s="7"), nc("G15","",s="8"), sc("H15",10,s="0"), sc("I15",11,s="0")], 15) +
    make_row([sc("A16","",s="0"), nc("B16","",s="1"), nc("C16","",s="1"), nc("D16","",s="1"), nc("E16","",s="7"), nc("F16","",s="7"), nc("G16","",s="8"), sc("H16",10,s="0"), sc("I16",11,s="0")], 16) +
    make_row([sc("A17","",s="0"), nc("B17","",s="1"), nc("C17","",s="1"), nc("D17","",s="1"), nc("E17","",s="7"), nc("F17","",s="7"), nc("G17","",s="8"), sc("H17",10,s="0"), sc("I17",11,s="0")], 17) +
    make_row([sc("A18","",s="0"), nc("B18","",s="1"), nc("C18","",s="1"), nc("D18","",s="1"), nc("E18","",s="7"), nc("F18","",s="7"), nc("G18","",s="8"), sc("H18",10,s="0"), sc("I18",11,s="0")], 18) +
    make_row([sc("A19","",s="0"), nc("B19","",s="1"), nc("C19","",s="1"), nc("D19","",s="1"), nc("E19","",s="7"), nc("F19","",s="7"), nc("G19","",s="8"), sc("H19",10,s="0"), sc("I19",11,s="0")], 19) +
    make_row([sc("A20","",s="0"), nc("B20","",s="1"), nc("C20","",s="1"), nc("D20","",s="1"), nc("E20","",s="7"), nc("F20","",s="7"), nc("G20","",s="8"), sc("H20",10,s="0"), sc("I20",11,s="0")], 20) +
    make_row([sc("A21","",s="0"), nc("B21","",s="1"), nc("C21","",s="1"), nc("D21","",s="1"), nc("E21","",s="7"), nc("F21","",s="7"), nc("G21","",s="8"), sc("H21",10,s="0"), sc("I21",11,s="0")], 21) +
    make_row([sc("A22","",s="0"), nc("B22","",s="1"), nc("C22","",s="1"), nc("D22","",s="1"), nc("E22","",s="7"), nc("F22","",s="7"), nc("G22","",s="8"), sc("H22",10,s="0"), sc("I22",11,s="0")], 22)
)

s1_sh = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView tabSelected="1" workbookViewId="0"/>
    <pane ySplit="2" topLeftCell="A3" activePane="bottomLeft" state="frozen"/>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols>
    <col min="1" max="1" width="12" customWidth="1"/>
    <col min="2" max="2" width="14" customWidth="1"/>
    <col min="3" max="3" width="18" customWidth="1"/>
    <col min="4" max="4" width="16" customWidth="1"/>
    <col min="5" max="5" width="10" customWidth="1"/>
    <col min="6" max="6" width="10" customWidth="1"/>
    <col min="7" max="7" width="10" customWidth="1"/>
    <col min="8" max="8" width="12" customWidth="1"/>
    <col min="9" max="9" width="12" customWidth="1"/>
  </cols>
  <sheetData>{s1_r}
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

# Sheet 2: 学习轨迹表
s2_r = (
    make_row([sc("A1",0,s="12"), sc("B1",1,s="12")], 1, ht=30) +
    make_row([sc("A2",2,s="4"), sc("B2",13,s="4"), sc("C2",14,s="4"), sc("D2",15,s="4"), sc("E2",16,s="4"), sc("F2",17,s="4"), sc("G2",18,s="4"), sc("H2",19,s="4"), sc("I2",20,s="4")], 2, ht=20) +
    # Header note row
    make_row([sc("A3","使用说明：模块完成情况请填写：是/否/部分",s="0")], 3, ht=18) +
    # Data rows 4-23 (20 rows)
    make_row([sc("A4","",s="0"), sc("B4",13,s="0"), sc("C4",14,s="0"), sc("D4",15,s="0"), sc("E4",16,s="0"), sc("F4",17,s="0"), sc("G4",18,s="0"), sc("H4",19,s="0"), sc("I4",20,s="0")], 4) +
    make_row([sc("A5","",s="0"), sc("B5",13,s="0"), sc("C5",14,s="0"), sc("D5",15,s="0"), sc("E5",16,s="0"), sc("F5",17,s="0"), sc("G5",18,s="0"), sc("H5",19,s="0"), sc("I5",20,s="0")], 5) +
    make_row([sc("A6","",s="0"), sc("B6",13,s="0"), sc("C6",14,s="0"), sc("D6",15,s="0"), sc("E6",16,s="0"), sc("F6",17,s="0"), sc("G6",18,s="0"), sc("H6",19,s="0"), sc("I6",20,s="0")], 6) +
    make_row([sc("A7","",s="0"), sc("B7",13,s="0"), sc("C7",14,s="0"), sc("D7",15,s="0"), sc("E7",16,s="0"), sc("F7",17,s="0"), sc("G7",18,s="0"), sc("H7",19,s="0"), sc("I7",20,s="0")], 7) +
    make_row([sc("A8","",s="0"), sc("B8",13,s="0"), sc("C8",14,s="0"), sc("D8",15,s="0"), sc("E8",16,s="0"), sc("F8",17,s="0"), sc("G8",18,s="0"), sc("H8",19,s="0"), sc("I8",20,s="0")], 8) +
    make_row([sc("A9","",s="0"), sc("B9",13,s="0"), sc("C9",14,s="0"), sc("D9",15,s="0"), sc("E9",16,s="0"), sc("F9",17,s="0"), sc("G9",18,s="0"), sc("H9",19,s="0"), sc("I9",20,s="0")], 9) +
    make_row([sc("A10","",s="0"), sc("B10",13,s="0"), sc("C10",14,s="0"), sc("D10",15,s="0"), sc("E10",16,s="0"), sc("F10",17,s="0"), sc("G10",18,s="0"), sc("H10",19,s="0"), sc("I10",20,s="0")], 10) +
    make_row([sc("A11","",s="0"), sc("B11",13,s="0"), sc("C11",14,s="0"), sc("D11",15,s="0"), sc("E11",16,s="0"), sc("F11",17,s="0"), sc("G11",18,s="0"), sc("H11",19,s="0"), sc("I11",20,s="0")], 11) +
    make_row([sc("A12","",s="0"), sc("B12",13,s="0"), sc("C12",14,s="0"), sc("D12",15,s="0"), sc("E12",16,s="0"), sc("F12",17,s="0"), sc("G12",18,s="0"), sc("H12",19,s="0"), sc("I12",20,s="0")], 12) +
    make_row([sc("A13","",s="0"), sc("B13",13,s="0"), sc("C13",14,s="0"), sc("D13",15,s="0"), sc("E13",16,s="0"), sc("F13",17,s="0"), sc("G13",18,s="0"), sc("H13",19,s="0"), sc("I13",20,s="0")], 13) +
    make_row([sc("A14","",s="0"), sc("B14",13,s="0"), sc("C14",14,s="0"), sc("D14",15,s="0"), sc("E14",16,s="0"), sc("F14",17,s="0"), sc("G14",18,s="0"), sc("H14",19,s="0"), sc("I14",20,s="0")], 14) +
    make_row([sc("A15","",s="0"), sc("B15",13,s="0"), sc("C15",14,s="0"), sc("D15",15,s="0"), sc("E15",16,s="0"), sc("F15",17,s="0"), sc("G15",18,s="0"), sc("H15",19,s="0"), sc("I15",20,s="0")], 15) +
    make_row([sc("A16","",s="0"), sc("B16",13,s="0"), sc("C16",14,s="0"), sc("D16",15,s="0"), sc("E16",16,s="0"), sc("F16",17,s="0"), sc("G16",18,s="0"), sc("H16",19,s="0"), sc("I16",20,s="0")], 16) +
    make_row([sc("A17","",s="0"), sc("B17",13,s="0"), sc("C17",14,s="0"), sc("D17",15,s="0"), sc("E17",16,s="0"), sc("F17",17,s="0"), sc("G17",18,s="0"), sc("H17",19,s="0"), sc("I17",20,s="0")], 17) +
    make_row([sc("A18","",s="0"), sc("B18",13,s="0"), sc("C18",14,s="0"), sc("D18",15,s="0"), sc("E18",16,s="0"), sc("F18",17,s="0"), sc("G18",18,s="0"), sc("H18",19,s="0"), sc("I18",20,s="0")], 18) +
    make_row([sc("A19","",s="0"), sc("B19",13,s="0"), sc("C19",14,s="0"), sc("D19",15,s="0"), sc("E19",16,s="0"), sc("F19",17,s="0"), sc("G19",18,s="0"), sc("H19",19,s="0"), sc("I19",20,s="0")], 19) +
    make_row([sc("A20","",s="0"), sc("B20",13,s="0"), sc("C20",14,s="0"), sc("D20",15,s="0"), sc("E20",16,s="0"), sc("F20",17,s="0"), sc("G20",18,s="0"), sc("H20",19,s="0"), sc("I20",20,s="0")], 20) +
    make_row([sc("A21","",s="0"), sc("B21",13,s="0"), sc("C21",14,s="0"), sc("D21",15,s="0"), sc("E21",16,s="0"), sc("F21",17,s="0"), sc("G21",18,s="0"), sc("H21",19,s="0"), sc("I21",20,s="0")], 21) +
    make_row([sc("A22","",s="0"), sc("B22",13,s="0"), sc("C22",14,s="0"), sc("D22",15,s="0"), sc("E22",16,s="0"), sc("F22",17,s="0"), sc("G22",18,s="0"), sc("H22",19,s="0"), sc("I22",20,s="0")], 22) +
    make_row([sc("A23","",s="0"), sc("B23",13,s="0"), sc("C23",14,s="0"), sc("D23",15,s="0"), sc("E23",16,s="0"), sc("F23",17,s="0"), sc("G23",18,s="0"), sc("H23",19,s="0"), sc("I23",20,s="0")], 23)
)

s2_sh = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView workbookViewId="0"/>
    <pane ySplit="3" topLeftCell="A4" activePane="bottomLeft" state="frozen"/>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols>
    <col min="1" max="1" width="12" customWidth="1"/>
    <col min="2" max="2" width="22" customWidth="1"/>
    <col min="3" max="3" width="22" customWidth="1"/>
    <col min="4" max="4" width="22" customWidth="1"/>
    <col min="5" max="5" width="22" customWidth="1"/>
    <col min="6" max="6" width="22" customWidth="1"/>
    <col min="7" max="7" width="22" customWidth="1"/>
    <col min="8" max="8" width="22" customWidth="1"/>
    <col min="9" max="9" width="22" customWidth="1"/>
  </cols>
  <sheetData>{s2_r}
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

# Sheet 3: 能力成长图
s3_r = (
    make_row([sc("A1",0,s="12")], 1, ht=30) +
    make_row([sc("A2",22,s="4"), sc("B2",23,s="4"), sc("C2",24,s="4"), sc("D2",25,s="4")], 2, ht=20) +
    make_row([sc("A3","",s="0"), nc("B3","",s="7"), nc("C3","",s="7"), nc("D3","",s="8")], 3) +
    make_row([sc("A4","",s="0"), nc("B4","",s="7"), nc("C4","",s="7"), nc("D4","",s="8")], 4) +
    make_row([sc("A5","",s="0"), nc("B5","",s="7"), nc("C5","",s="7"), nc("D5","",s="8")], 5) +
    make_row([sc("A6","",s="0"), nc("B6","",s="7"), nc("C6","",s="7"), nc("D6","",s="8")], 6) +
    make_row([sc("A7","",s="0"), nc("B7","",s="7"), nc("C7","",s="7"), nc("D7","",s="8")], 7) +
    make_row([sc("A8","",s="0"), nc("B8","",s="7"), nc("C8","",s="7"), nc("D8","",s="8")], 8) +
    make_row([sc("A9","",s="0"), nc("B9","",s="7"), nc("C9","",s="7"), nc("D9","",s="8")], 9) +
    make_row([sc("A10","",s="0"), nc("B10","",s="7"), nc("C10","",s="7"), nc("D10","",s="8")], 10) +
    make_row([sc("A11","",s="0"), nc("B11","",s="7"), nc("C11","",s="7"), nc("D11","",s="8")], 11) +
    make_row([sc("A12","",s="0"), nc("B12","",s="7"), nc("C12","",s="7"), nc("D12","",s="8")], 12) +
    make_row([sc("A13","",s="0"), nc("B13","",s="7"), nc("C13","",s="7"), nc("D13","",s="8")], 13) +
    make_row([sc("A14","",s="0"), nc("B14","",s="7"), nc("C14","",s="7"), nc("D14","",s="8")], 14) +
    make_row([sc("A15","",s="0"), nc("B15","",s="7"), nc("C15","",s="7"), nc("D15","",s="8")], 15) +
    make_row([sc("A16","",s="0"), nc("B16","",s="7"), nc("C16","",s="7"), nc("D16","",s="8")], 16) +
    make_row([sc("A17","",s="0"), nc("B17","",s="7"), nc("C17","",s="7"), nc("D17","",s="8")], 17) +
    make_row([sc("A18","",s="0"), nc("B18","",s="7"), nc("C18","",s="7"), nc("D18","",s="8")], 18) +
    make_row([sc("A19","",s="0"), nc("B19","",s="7"), nc("C19","",s="7"), nc("D19","",s="8")], 19) +
    make_row([sc("A20","",s="0"), nc("B20","",s="7"), nc("C20","",s="7"), nc("D20","",s="8")], 20) +
    make_row([sc("A21","",s="0"), nc("B21","",s="7"), nc("C21","",s="7"), nc("D21","",s="8")], 21) +
    make_row([sc("A22","",s="0"), nc("B22","",s="7"), nc("C22","",s="7"), nc("D22","",s="8")], 22)
)

s3_sh = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView workbookViewId="0"/>
    <pane ySplit="2" topLeftCell="A3" activePane="bottomLeft" state="frozen"/>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols>
    <col min="1" max="1" width="12" customWidth="1"/>
    <col min="2" max="2" width="10" customWidth="1"/>
    <col min="3" max="3" width="10" customWidth="1"/>
    <col min="4" max="4" width="10" customWidth="1"/>
  </cols>
  <sheetData>{s3_r}
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

# Sheet 4: 班级汇总
s4_r = (
    make_row([sc("A1",0,s="12")], 1, ht=30) +
    make_row([sc("A2",2,s="4"), sc("B2",5,s="4"), sc("C2",6,s="4"), sc("D2",7,s="4"), sc("E2",24,s="4"), sc("F2",25,s="4")], 2, ht=20) +
    make_row([sc("A3","",s="0"), fc("B3","COUNTA(B4:B23)",s="10"), fc("C3","AVERAGE(C4:C23)",s="8"), fc("D3","AVERAGE(D4:D23)",s="8"), fc("E3","AVERAGE(E4:E23)",s="8"), fc("F3","MAX(F4:F23)",s="10")], 3) +
    make_row([sc("A4","",s="0"), nc("B4","",s="9"), nc("C4","",s="7"), nc("D4","",s="7"), nc("E4","",s="8"), nc("F4","",s="9")], 4) +
    make_row([sc("A5","",s="0"), nc("B5","",s="9"), nc("C5","",s="7"), nc("D5","",s="7"), nc("E5","",s="8"), nc("F5","",s="9")], 5) +
    make_row([sc("A6","",s="0"), nc("B6","",s="9"), nc("C6","",s="7"), nc("D6","",s="7"), nc("E6","",s="8"), nc("F6","",s="9")], 6) +
    make_row([sc("A7","",s="0"), nc("B7","",s="9"), nc("C7","",s="7"), nc("D7","",s="7"), nc("E7","",s="8"), nc("F7","",s="9")], 7) +
    make_row([sc("A8","",s="0"), nc("B8","",s="9"), nc("C8","",s="7"), nc("D8","",s="7"), nc("E8","",s="8"), nc("F8","",s="9")], 8) +
    make_row([sc("A9","",s="0"), nc("B9","",s="9"), nc("C9","",s="7"), nc("D9","",s="7"), nc("E9","",s="8"), nc("F9","",s="9")], 9) +
    make_row([sc("A10","",s="0"), nc("B10","",s="9"), nc("C10","",s="7"), nc("D10","",s="7"), nc("E10","",s="8"), nc("F10","",s="9")], 10) +
    make_row([sc("A11","",s="0"), nc("B11","",s="9"), nc("C11","",s="7"), nc("D11","",s="7"), nc("E11","",s="8"), nc("F11","",s="9")], 11) +
    make_row([sc("A12","",s="0"), nc("B12","",s="9"), nc("C12","",s="7"), nc("D12","",s="7"), nc("E12","",s="8"), nc("F12","",s="9")], 12) +
    make_row([sc("A13","",s="0"), nc("B13","",s="9"), nc("C13","",s="7"), nc("D13","",s="7"), nc("E13","",s="8"), nc("F13","",s="9")], 13) +
    make_row([sc("A14","",s="0"), nc("B14","",s="9"), nc("C14","",s="7"), nc("D14","",s="7"), nc("E14","",s="8"), nc("F14","",s="9")], 14) +
    make_row([sc("A15","",s="0"), nc("B15","",s="9"), nc("C15","",s="7"), nc("D15","",s="7"), nc("E15","",s="8"), nc("F15","",s="9")], 15) +
    make_row([sc("A16","",s="0"), nc("B16","",s="9"), nc("C16","",s="7"), nc("D16","",s="7"), nc("E16","",s="8"), nc("F16","",s="9")], 16) +
    make_row([sc("A17","",s="0"), nc("B17","",s="9"), nc("C17","",s="7"), nc("D17","",s="7"), nc("E17","",s="8"), nc("F17","",s="9")], 17) +
    make_row([sc("A18","",s="0"), nc("B18","",s="9"), nc("D18","",s="7"), nc("D18","",s="7"), nc("E18","",s="8"), nc("F18","",s="9")], 18) +
    make_row([sc("A19","",s="0"), nc("B19","",s="9"), nc("C19","",s="7"), nc("D19","",s="7"), nc("E19","",s="8"), nc("F19","",s="9")], 19) +
    make_row([sc("A20","",s="0"), nc("B20","",s="9"), nc("C20","",s="7"), nc("D20","",s="7"), nc("E20","",s="8"), nc("F20","",s="9")], 20) +
    make_row([sc("A21","",s="0"), nc("B21","",s="9"), nc("C21","",s="7"), nc("D21","",s="7"), nc("E21","",s="8"), nc("F21","",s="9")], 21) +
    make_row([sc("A22","",s="0"), nc("B22","",s="9"), nc("C22","",s="7"), nc("D22","",s="7"), nc("E22","",s="8"), nc("F22","",s="9")], 22) +
    make_row([sc("A23","",s="0"), nc("B23","",s="9"), nc("C23","",s="7"), nc("D23","",s="7"), nc("E23","",s="8"), nc("F23","",s="9")], 23)
)

s4_sh = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView workbookViewId="0"/>
    <pane ySplit="3" topLeftCell="A4" activePane="bottomLeft" state="frozen"/>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols>
    <col min="1" max="1" width="12" customWidth="1"/>
    <col min="2" max="2" width="10" customWidth="1"/>
    <col min="3" max="3" width="10" customWidth="1"/>
    <col min="4" max="4" width="10" customWidth="1"/>
    <col min="5" max="5" width="10" customWidth="1"/>
    <col min="6" max="6" width="10" customWidth="1"/>
  </cols>
  <sheetData>{s4_r}
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

f2_dir = os.path.join(work_dir, "学员档案管理表")
os.makedirs(f2_dir, exist_ok=True)
with open(os.path.join(f2_dir, "xl/sharedStrings.xml"), "w", encoding="utf-8") as f:
    f.write(build_shared_strings(strings2))
with open(os.path.join(f2_dir, "xl/workbook.xml"), "w", encoding="utf-8") as f:
    f.write(build_workbook(["学员信息表", "学习轨迹表", "能力成长图", "班级汇总"]))
with open(os.path.join(f2_dir, "xl/_rels/workbook.xml.rels"), "w", encoding="utf-8") as f:
    f.write(build_workbook_rels(4))
with open(os.path.join(f2_dir, "[Content_Types].xml"), "w", encoding="utf-8") as f:
    f.write(build_content_types(4))
with open(os.path.join(f2_dir, "xl/worksheets/sheet1.xml"), "w", encoding="utf-8") as f:
    f.write(s1_sh)
with open(os.path.join(f2_dir, "xl/worksheets/sheet2.xml"), "w", encoding="utf-8") as f:
    f.write(s2_sh)
with open(os.path.join(f2_dir, "xl/worksheets/sheet3.xml"), "w", encoding="utf-8") as f:
    f.write(s3_sh)
with open(os.path.join(f2_dir, "xl/worksheets/sheet4.xml"), "w", encoding="utf-8") as f:
    f.write(s4_sh)

print("  [OK] 学员档案管理表.xlsx")
print("Files 1-2 created successfully")
