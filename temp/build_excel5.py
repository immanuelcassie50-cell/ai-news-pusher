import zipfile, os

OUTPUT = "D:/新课开发/经营/系列/14_绩效经营——从指标分解到组织同频/03_Excel工具/绩效面谈记录表.xlsx"

strs = [
    "绩效面谈记录表",                  # 0
    "基本信息",                         # 1
    "员工姓名",                         # 2
    "部门",                             # 3
    "岗位",                             # 4
    "面谈日期",                         # 5
    "面谈人",                           # 6
    "面谈类型",                         # 7
    "填写说明",                         # 8
    "蓝色单元格为待填写内容，黑色单元格为自动计算",  # 9
    "期初",                             # 10
    "期末",                             # 11
    "绩效目标回顾",                     # 12
    "目标内容",                         # 13
    "权重(%)",                          # 14
    "期初目标值",                       # 15
    "期末实际值",                       # 16
    "完成率(%)",                        # 17
    "差异分析",                         # 18
    "达成绩效",                         # 19
    "未达成绩效",                       # 20
    "未达成绩效原因分析",               # 21
    "业务能力",                         # 22
    "沟通能力",                         # 23
    "团队协作",                         # 24
    "学习成长",                         # 25
    "综合评价",                         # 26
    "优势",                             # 27
    "待改进",                           # 28
    "改进计划",                         # 29
    "下次目标",                         # 30
    "双方签字确认",                     # 31
    "员工签字",                         # 32
    "上级签字",                         # 33
    "HR签字",                           # 34
    "签字日期",                         # 35
    "备注",                             # 36
    "优秀(90分以上)",                   # 37
    "良好(80-89分)",                    # 38
    "达标(70-79分)",                    # 39
    "待改进(60-69分)",                  # 40
    "不合格(60分以下)",                 # 41
    "业务能力评价",                     # 42
    "沟通能力评价",                     # 43
    "团队协作评价",                     # 44
    "学习成长评价",                     # 45
    "绩效评分",                         # 46
    "绩效等级",                         # 47
    "季度面谈",                         # 48
    "年度面谈",                         # 49
    "晋升面谈",                         # 50
    "调岗面谈",                         # 51
    "离职面谈",                         # 52
    "目标值",                           # 53
    "完成时限",                         # 54
]

si = {s:i for i,s in enumerate(strs)}

rows_xml = []

# Row 1: Title
rows_xml.append(
    f'<row r="1" ht="32" customHeight="1">'
    f'<c r="A1" t="s" s="18"><v>{si["绩效面谈记录表"]}</v></c>'
    f'<c r="G1" t="s" s="18"><v>{si["填写说明"]}</v></c>'
    f'</row>'
)

# Row 2: subtitle
rows_xml.append(
    f'<row r="2" ht="18" customHeight="1">'
    f'<c r="A2" t="s" s="0"><v>{si["蓝色单元格为待填写内容，黑色单元格为自动计算"]}</v></c>'
    f'</row>'
)

# Row 3: Section header - 基本信息
rows_xml.append(
    f'<row r="3" ht="22" customHeight="1">'
    f'<c r="A3" t="s" s="4"><v>{si["基本信息"]}</v></c>'
    f'</row>'
)

# Row 4: Basic info fields
rows_xml.append(
    f'<row r="4" ht="22" customHeight="1">'
    f'<c r="A4" t="s" s="1"><v>{si["员工姓名"]}</v></c>'
    f'<c r="B4" s="7"><v></v></c>'
    f'<c r="C4" t="s" s="1"><v>{si["部门"]}</v></c>'
    f'<c r="D4" s="7"><v></v></c>'
    f'<c r="E4" t="s" s="1"><v>{si["岗位"]}</v></c>'
    f'<c r="F4" s="7"><v></v></c>'
    f'</row>'
)

rows_xml.append(
    f'<row r="5" ht="22" customHeight="1">'
    f'<c r="A5" t="s" s="1"><v>{si["面谈日期"]}</v></c>'
    f'<c r="B5" s="7"><v></v></c>'
    f'<c r="C5" t="s" s="1"><v>{si["面谈人"]}</v></c>'
    f'<c r="D5" s="7"><v></v></c>'
    f'<c r="E5" t="s" s="1"><v>{si["面谈类型"]}</v></c>'
    f'<c r="F5" t="s" s="1"><v>{si["季度面谈"]}</v></c>'
    f'</row>'
)

# Row 6: Separator
rows_xml.append(
    f'<row r="6" ht="8"><c r="A6" t="s" s="0"><v></v></c></row>'
)

# Row 7: Section header - 绩效目标回顾
rows_xml.append(
    f'<row r="7" ht="22" customHeight="1">'
    f'<c r="A7" t="s" s="4"><v>{si["绩效目标回顾"]}</v></c>'
    f'</row>'
)

# Row 8: KPI review headers
rows_xml.append(
    f'<row r="8" ht="20" customHeight="1">'
    f'<c r="A8" t="s" s="4"><v>{si["目标内容"]}</v></c>'
    f'<c r="B8" t="s" s="4"><v>{si["权重(%)"]}</v></c>'
    f'<c r="C8" t="s" s="4"><v>{si["期初目标值"]}</v></c>'
    f'<c r="D8" t="s" s="4"><v>{si["期末实际值"]}</v></c>'
    f'<c r="E8" t="s" s="4"><v>{si["完成率(%)"]}</v></c>'
    f'<c r="F8" t="s" s="4"><v>{si["差异分析"]}</v></c>'
    f'</row>'
)

# KPI rows with formulas
for i in range(8):
    rn = 9 + i
    rows_xml.append(
        f'<row r="{rn}" ht="18">'
        f'<c r="A{rn}" t="s" s="1"><v></v></c>'
        f'<c r="B{rn}" s="7"><v></v></c>'
        f'<c r="C{rn}" s="7"><v></v></c>'
        f'<c r="D{rn}" s="7"><v></v></c>'
        f'<c r="E{rn}" s="6"><f>IF(C{rn}=0,0,D{rn}/C{rn})</f><v></v></c>'
        f'<c r="F{rn}" t="s" s="1"><v></v></c>'
        f'</row>'
    )

# Summary row
summary_row = 17
rows_xml.append(
    f'<row r="{summary_row}" ht="20">'
    f'<c r="A{summary_row}" t="s" s="4"><v>{si["达成绩效"]}</v></c>'
    f'<c r="B{summary_row}" s="7"><f>SUM(B9:B16)</f><v></v></c>'
    f'</row>'
)

# Separator
sep_row = 18
rows_xml.append(
    f'<row r="{sep_row}" ht="8"><c r="A{sep_row}" t="s" s="0"><v></v></c></row>'
)

# Section: 能力评价
ability_row = 19
rows_xml.append(
    f'<row r="{ability_row}" ht="22" customHeight="1">'
    f'<c r="A{ability_row}" t="s" s="4"><v>{si["综合评价"]}</v></c>'
    f'</row>'
)

# Ability evaluation headers
ability_header = 20
rows_xml.append(
    f'<row r="{ability_header}" ht="20" customHeight="1">'
    f'<c r="A{ability_header}" t="s" s="4"><v>{si["业务能力"]}</v></c>'
    f'<c r="B{ability_header}" t="s" s="4"><v>{si["沟通能力"]}</v></c>'
    f'<c r="C{ability_header}" t="s" s="4"><v>{si["团队协作"]}</v></c>'
    f'<c r="D{ability_header}" t="s" s="4"><v>{si["学习成长"]}</v></c>'
    f'<c r="E{ability_header}" t="s" s="4"><v>{si["绩效评分"]}</v></c>'
    f'<c r="F{ability_header}" t="s" s="4"><v>{si["绩效等级"]}</v></c>'
    f'</row>'
)

# Ability score rows
for i in range(2):
    rn = ability_header + 1 + i
    score_label = si["期初"] if i == 0 else si["期末"]
    rows_xml.append(
        f'<row r="{rn}" ht="22" customHeight="1">'
        f'<c r="A{rn}" t="s" s="1"><v>{si["业务能力评价"]}</v></c>'
        f'<c r="B{rn}" t="s" s="1"><v>{si["沟通能力评价"]}</v></c>'
        f'<c r="C{rn}" t="s" s="1"><v>{si["团队协作评价"]}</v></c>'
        f'<c r="D{rn}" t="s" s="1"><v>{si["学习成长评价"]}</v></c>'
        f'<c r="E{rn}" s="7"><v></v></c>'
        f'<c r="F{rn}" s="6"><f>IF(E{rn}>=90,"优秀",IF(E{rn}>=80,"良好",IF(E{rn}>=70,"达标",IF(E{rn}>=60,"待改进","不合格"))))</f><v></v></c>'
        f'</row>'
    )

# Separator
sep2_row = ability_header + 3
rows_xml.append(
    f'<row r="{sep2_row}" ht="8"><c r="A{sep2_row}" t="s" s="0"><v></v></c></row>'
)

# Section: 改进计划
improvement_row = sep2_row + 1
rows_xml.append(
    f'<row r="{improvement_row}" ht="22" customHeight="1">'
    f'<c r="A{improvement_row}" t="s" s="4"><v>{si["改进计划"]}</v></c>'
    f'</row>'
)

improvement_header = improvement_row + 1
rows_xml.append(
    f'<row r="{improvement_header}" ht="20" customHeight="1">'
    f'<c r="A{improvement_header}" t="s" s="4"><v>{si["优势"]}</v></c>'
    f'<c r="D{improvement_header}" t="s" s="4"><v>{si["待改进"]}</v></c>'
    f'</row>'
)

for i in range(3):
    rn = improvement_header + 1 + i
    rows_xml.append(
        f'<row r="{rn}" ht="18">'
        f'<c r="A{rn}" t="s" s="1"><v></v></c>'
        f'<c r="B{rn}" t="s" s="1"><v></v></c>'
        f'<c r="C{rn}" t="s" s="1"><v></v></c>'
        f'<c r="D{rn}" t="s" s="1"><v></v></c>'
        f'<c r="E{rn}" t="s" s="1"><v></v></c>'
        f'<c r="F{rn}" t="s" s="1"><v></v></c>'
        f'</row>'
    )

# Next targets section
next_target_header = improvement_header + 4
rows_xml.append(
    f'<row r="{next_target_header}" ht="22" customHeight="1">'
    f'<c r="A{next_target_header}" t="s" s="4"><v>{si["下次目标"]}</v></c>'
    f'</row>'
)

next_target_row = next_target_header + 1
rows_xml.append(
    f'<row r="{next_target_row}" ht="20" customHeight="1">'
    f'<c r="A{next_target_row}" t="s" s="4"><v>{si["目标内容"]}</v></c>'
    f'<c r="B{next_target_row}" t="s" s="4"><v>{si["权重(%)"]}</v></c>'
    f'<c r="C{next_target_row}" t="s" s="4"><v>{si["目标值"]}</v></c>'
    f'<c r="D{next_target_row}" t="s" s="4"><v>{si["完成时限"]}</v></c>'
    f'</row>'
)

for i in range(5):
    rn = next_target_row + 1 + i
    rows_xml.append(
        f'<row r="{rn}" ht="18">'
        f'<c r="A{rn}" t="s" s="1"><v></v></c>'
        f'<c r="B{rn}" s="7"><v></v></c>'
        f'<c r="C{rn}" s="7"><v></v></c>'
        f'<c r="D{rn}" s="7"><v></v></c>'
        f'</row>'
    )

# Separator
sep3_row = next_target_row + 6
rows_xml.append(
    f'<row r="{sep3_row}" ht="8"><c r="A{sep3_row}" t="s" s="0"><v></v></c></row>'
)

# Signature section
sig_row = sep3_row + 1
rows_xml.append(
    f'<row r="{sig_row}" ht="22" customHeight="1">'
    f'<c r="A{sig_row}" t="s" s="4"><v>{si["双方签字确认"]}</v></c>'
    f'</row>'
)

sig_header = sig_row + 1
rows_xml.append(
    f'<row r="{sig_header}" ht="20" customHeight="1">'
    f'<c r="A{sig_header}" t="s" s="4"><v>{si["员工签字"]}</v></c>'
    f'<c r="B{sig_header}" t="s" s="4"><v>{si["签字日期"]}</v></c>'
    f'<c r="C{sig_header}" t="s" s="4"><v>{si["上级签字"]}</v></c>'
    f'<c r="D{sig_header}" t="s" s="4"><v>{si["签字日期"]}</v></c>'
    f'<c r="E{sig_header}" t="s" s="4"><v>{si["HR签字"]}</v></c>'
    f'<c r="F{sig_header}" t="s" s="4"><v>{si["签字日期"]}</v></c>'
    f'</row>'
)

for i in range(2):
    rn = sig_header + 1 + i
    rows_xml.append(
        f'<row r="{rn}" ht="22" customHeight="1">'
        f'<c r="A{rn}" t="s" s="1"><v></v></c>'
        f'<c r="B{rn}" s="7"><v></v></c>'
        f'<c r="C{rn}" t="s" s="1"><v></v></c>'
        f'<c r="D{rn}" s="7"><v></v></c>'
        f'<c r="E{rn}" t="s" s="1"><v></v></c>'
        f'<c r="F{rn}" s="7"><v></v></c>'
        f'</row>'
    )

sheet_xml = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView workbookViewId="0">
      <pane ySplit="8" topLeftCell="A9" activePane="bottomLeft" state="frozen"/>
    </sheetView>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="18"/>
  <cols>
    <col min="1" max="1" width="20" customWidth="1"/>
    <col min="2" max="2" width="14" customWidth="1"/>
    <col min="3" max="3" width="14" customWidth="1"/>
    <col min="4" max="4" width="14" customWidth="1"/>
    <col min="5" max="5" width="14" customWidth="1"/>
    <col min="6" max="6" width="14" customWidth="1"/>
  </cols>
  <sheetData>
    {chr(10).join(rows_xml)}
  </sheetData>
  <autoFilter ref="A8:F50"/>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

shared_xml = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="{len(strs)}" uniqueCount="{len(strs)}">
'''
for s in strs:
    shared_xml += f'  <si><t>{s}</t></si>\n'
shared_xml += '</sst>'

workbook_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheets>
    <sheet name="绩效面谈记录" sheetId="1" r:id="rId1"/>
  </sheets>
  <calcPr calcId="0"/>
</workbook>'''

workbook_rels = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
  <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml"/>
</Relationships>'''

content_types = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
  <Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>
  <Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/>
  <Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
</Types>'''

root_rels = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/>
</Relationships>'''

with open("C:/Users/Administrator/.claude/skills/Excel表格处理/templates/minimal_xlsx/xl/styles.xml", "r", encoding="utf-8") as f:
    styles_xml = f.read()

os.makedirs(os.path.dirname(OUTPUT), exist_ok=True)

with zipfile.ZipFile(OUTPUT, 'w', compression=zipfile.ZIP_DEFLATED) as zf:
    zf.writestr('[Content_Types].xml', content_types)
    zf.writestr('_rels/.rels', root_rels)
    zf.writestr('xl/workbook.xml', workbook_xml)
    zf.writestr('xl/_rels/workbook.xml.rels', workbook_rels)
    zf.writestr('xl/styles.xml', styles_xml)
    zf.writestr('xl/sharedStrings.xml', shared_xml)
    zf.writestr('xl/worksheets/sheet1.xml', sheet_xml)

print(f"Created: {OUTPUT}")
print(f"Total strings: {len(strs)}")
