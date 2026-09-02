import zipfile, os

OUTPUT = "D:/新课开发/经营/系列/14_绩效经营——从指标分解到组织同频/03_Excel工具/绩效检视与追踪表.xlsx"

strs = [
    "绩效检视与追踪表",                # 0
    "指标名称",                         # 1
    "目标值",                           # 2
    "权重(%)",                          # 3
    "周期",                             # 4
    "周期类型",                         # 5
    "实际值",                           # 6
    "完成率(%)",                        # 7
    "状态",                             # 8
    "差异分析",                         # 9
    "改进措施",                         # 10
    "填写说明",                         # 11
    "蓝色单元格为待填写内容，黑色单元格为自动计算",  # 12
    "周",                               # 13
    "月",                               # 14
    "季度",                             # 15
    "目标值",                           # 16
    "实际值",                           # 17
    "完成率",                           # 18
    "状态",                             # 19
    "备注",                             # 20
    "周度检视",                         # 21
    "月度检视",                         # 22
    "季度检视",                         # 23
    "优秀",                             # 24
    "良好",                             # 25
    "达标",                             # 26
    "未达标",                           # 27
    "严重滞后",                         # 28
    "销售收入(万元)",                   # 29
    "净利润率(%)",                      # 30
    "客户满意度(分)",                   # 31
    "员工满意度(分)",                   # 32
    "部门费用率(%)",                    # 33
    "应收账款周转天数",                 # 34
    "市场占有率(%)",                    # 35
    "人效比(万元/人)",                  # 36
    "W1",                               # 37
    "W2",                               # 38
    "W3",                               # 39
    "W4",                               # 40
    "M1",                               # 41
    "M2",                               # 42
    "M3",                               # 43
    "Q1",                               # 44
    "Q2",                               # 45
    "Q3",                               # 46
    "Q4",                               # 47
    "Y1",                               # 48
    "Y2",                               # 49
    "Y3",                               # 50
    "Y4",                               # 51
    "Y5",                               # 52
    "Y6",                               # 53
    "Y7",                               # 54
    "Y8",                               # 55
    "Y9",                               # 56
    "Y10",                              # 57
    "Y11",                               # 58
    "Y12",                               # 59
    "完成",                             # 60
    "进行中",                           # 61
    "未启动",                           # 62
    "已取消",                           # 63
    "关键结果",                         # 64
    "KR1",                              # 65
    "KR2",                              # 66
    "KR3",                              # 67
    "KR4",                              # 68
    "KR5",                              # 69
]

si = {s:i for i,s in enumerate(strs)}

rows_xml = []

# Row 1: Title
rows_xml.append(
    f'<row r="1" ht="32" customHeight="1">'
    f'<c r="A1" t="s" s="18"><v>{si["绩效检视与追踪表"]}</v></c>'
    f'<c r="M1" t="s" s="18"><v>{si["填写说明"]}</v></c>'
    f'</row>'
)

# Row 2: subtitle
rows_xml.append(
    f'<row r="2" ht="18" customHeight="1">'
    f'<c r="A2" t="s" s="0"><v>{si["蓝色单元格为待填写内容，黑色单元格为自动计算"]}</v></c>'
    f'</row>'
)

# Row 3: Section header - 周度检视
rows_xml.append(
    f'<row r="3" ht="22" customHeight="1">'
    f'<c r="A3" t="s" s="4"><v>{si["周度检视"]}</v></c>'
    f'</row>'
)

# Row 4: headers for weekly
rows_xml.append(
    f'<row r="4" ht="20" customHeight="1">'
    f'<c r="A4" t="s" s="4"><v>{si["指标名称"]}</v></c>'
    f'<c r="B4" t="s" s="4"><v>{si["目标值"]}</v></c>'
    f'<c r="C4" t="s" s="4"><v>{si["权重(%)"]}</v></c>'
    f'<c r="D4" t="s" s="4"><v>{si["W1"]}</v></c>'
    f'<c r="E4" t="s" s="4"><v>{si["W2"]}</v></c>'
    f'<c r="F4" t="s" s="4"><v>{si["W3"]}</v></c>'
    f'<c r="G4" t="s" s="4"><v>{si["W4"]}</v></c>'
    f'<c r="H4" t="s" s="4"><v>{si["完成率(%)"]}</v></c>'
    f'<c r="I4" t="s" s="4"><v>{si["状态"]}</v></c>'
    f'</row>'
)

# Weekly data rows (5 KPIs)
weekly_kpis = [
    (29, "1000", "20"),
    (30, "15", "20"),
    (31, "90", "20"),
    (34, "60", "20"),
    (36, "50", "20"),
]

for idx, (name_idx, target, weight) in enumerate(weekly_kpis):
    rn = 5 + idx
    rows_xml.append(
        f'<row r="{rn}" ht="18">'
        f'<c r="A{rn}" t="s" s="1"><v>{name_idx}</v></c>'
        f'<c r="B{rn}" s="7"><v>{target}</v></c>'
        f'<c r="C{rn}" s="7"><v>{weight}</v></c>'
        f'<c r="D{rn}" s="7"><v></v></c>'
        f'<c r="E{rn}" s="7"><v></v></c>'
        f'<c r="F{rn}" s="7"><v></v></c>'
        f'<c r="G{rn}" s="7"><v></v></c>'
        f'<c r="H{rn}" s="6"><f>IF(B{rn}=0,0,AVERAGE(D{rn}:G{rn})/B{rn})</f><v></v></c>'
        f'<c r="I{rn}" s="6"><f>IF(H{rn}>=1,"优秀",IF(H{rn}>=0.9,"良好",IF(H{rn}>=0.8,"达标","未达标")))</f><v></v></c>'
        f'</row>'
    )

# Row 10: Section header - 月度检视
rows_xml.append(
    f'<row r="10" ht="22" customHeight="1">'
    f'<c r="A10" t="s" s="4"><v>{si["月度检视"]}</v></c>'
    f'</row>'
)

# Row 11: headers for monthly
rows_xml.append(
    f'<row r="11" ht="20" customHeight="1">'
    f'<c r="A11" t="s" s="4"><v>{si["指标名称"]}</v></c>'
    f'<c r="B11" t="s" s="4"><v>{si["目标值"]}</v></c>'
    f'<c r="C11" t="s" s="4"><v>{si["权重(%)"]}</v></c>'
    f'<c r="D11" t="s" s="4"><v>{si["M1"]}</v></c>'
    f'<c r="E11" t="s" s="4"><v>{si["M2"]}</v></c>'
    f'<c r="F11" t="s" s="4"><v>{si["M3"]}</v></c>'
    f'<c r="G11" t="s" s="4"><v>{si["完成率(%)"]}</v></c>'
    f'<c r="H11" t="s" s="4"><v>{si["状态"]}</v></c>'
    f'</row>'
)

monthly_kpis = [
    (29, "4000", "20"),
    (30, "15", "20"),
    (31, "90", "20"),
    (32, "85", "20"),
    (33, "3", "20"),
    (34, "60", "10"),
    (35, "10", "10"),
]

for idx, (name_idx, target, weight) in enumerate(monthly_kpis):
    rn = 12 + idx
    rows_xml.append(
        f'<row r="{rn}" ht="18">'
        f'<c r="A{rn}" t="s" s="1"><v>{name_idx}</v></c>'
        f'<c r="B{rn}" s="7"><v>{target}</v></c>'
        f'<c r="C{rn}" s="7"><v>{weight}</v></c>'
        f'<c r="D{rn}" s="7"><v></v></c>'
        f'<c r="E{rn}" s="7"><v></v></c>'
        f'<c r="F{rn}" s="7"><v></v></c>'
        f'<c r="G{rn}" s="6"><f>IF(B{rn}=0,0,AVERAGE(D{rn}:F{rn})/B{rn})</f><v></v></c>'
        f'<c r="H{rn}" s="6"><f>IF(G{rn}>=1,"优秀",IF(G{rn}>=0.9,"良好",IF(G{rn}>=0.8,"达标","未达标")))</f><v></v></c>'
        f'</row>'
    )

# Row 19: Section header - 季度检视
rows_xml.append(
    f'<row r="19" ht="22" customHeight="1">'
    f'<c r="A19" t="s" s="4"><v>{si["季度检视"]}</v></c>'
    f'</row>'
)

# Row 20: headers for quarterly
rows_xml.append(
    f'<row r="20" ht="20" customHeight="1">'
    f'<c r="A20" t="s" s="4"><v>{si["指标名称"]}</v></c>'
    f'<c r="B20" t="s" s="4"><v>{si["目标值"]}</v></c>'
    f'<c r="C20" t="s" s="4"><v>{si["权重(%)"]}</v></c>'
    f'<c r="D20" t="s" s="4"><v>{si["Q1"]}</v></c>'
    f'<c r="E20" t="s" s="4"><v>{si["Q2"]}</v></c>'
    f'<c r="F20" t="s" s="4"><v>{si["Q3"]}</v></c>'
    f'<c r="G20" t="s" s="4"><v>{si["Q4"]}</v></c>'
    f'<c r="H20" t="s" s="4"><v>{si["完成率(%)"]}</v></c>'
    f'<c r="I20" t="s" s="4"><v>{si["状态"]}</v></c>'
    f'</row>'
)

quarterly_kpis = [
    (29, "16000", "15"),
    (30, "15", "15"),
    (31, "90", "15"),
    (32, "85", "15"),
    (33, "3", "10"),
    (34, "60", "10"),
    (35, "10", "10"),
    (36, "50", "10"),
]

for idx, (name_idx, target, weight) in enumerate(quarterly_kpis):
    rn = 21 + idx
    rows_xml.append(
        f'<row r="{rn}" ht="18">'
        f'<c r="A{rn}" t="s" s="1"><v>{name_idx}</v></c>'
        f'<c r="B{rn}" s="7"><v>{target}</v></c>'
        f'<c r="C{rn}" s="7"><v>{weight}</v></c>'
        f'<c r="D{rn}" s="7"><v></v></c>'
        f'<c r="E{rn}" s="7"><v></v></c>'
        f'<c r="F{rn}" s="7"><v></v></c>'
        f'<c r="G{rn}" s="7"><v></v></c>'
        f'<c r="H{rn}" s="6"><f>IF(B{rn}=0,0,AVERAGE(D{rn}:G{rn})/B{rn})</f><v></v></c>'
        f'<c r="I{rn}" s="6"><f>IF(H{rn}>=1,"优秀",IF(H{rn}>=0.9,"良好",IF(H{rn}>=0.8,"达标","未达标")))</f><v></v></c>'
        f'</row>'
    )

# Separator
sep_row = 30
rows_xml.append(
    f'<row r="{sep_row}" ht="8"><c r="A{sep_row}" t="s" s="0"><v></v></c></row>'
)

# Section: OKR Tracking
t2_row = 31
rows_xml.append(
    f'<row r="{t2_row}" ht="22" customHeight="1">'
    f'<c r="A{t2_row}" t="s" s="4"><v>{si["关键结果"]}</v></c>'
    f'</row>'
)

# OKR headers
okr_header_row = 32
rows_xml.append(
    f'<row r="{okr_header_row}" ht="20" customHeight="1">'
    f'<c r="A{okr_header_row}" t="s" s="4"><v>{si["关键结果"]}</v></c>'
    f'<c r="B{okr_header_row}" t="s" s="4"><v>{si["目标值"]}</v></c>'
    f'<c r="C{okr_header_row}" t="s" s="4"><v>{si["权重(%)"]}</v></c>'
    f'<c r="D{okr_header_row}" t="s" s="4"><v>{si["Y1"]}</v></c>'
    f'<c r="E{okr_header_row}" t="s" s="4"><v>{si["Y2"]}</v></c>'
    f'<c r="F{okr_header_row}" t="s" s="4"><v>{si["Y3"]}</v></c>'
    f'<c r="G{okr_header_row}" t="s" s="4"><v>{si["Y4"]}</v></c>'
    f'<c r="H{okr_header_row}" t="s" s="4"><v>{si["完成率(%)"]}</v></c>'
    f'<c r="I{okr_header_row}" t="s" s="4"><v>{si["状态"]}</v></c>'
    f'</row>'
)

okr_kpis = [
    (65, "100", "20"),
    (66, "100", "20"),
    (67, "100", "20"),
    (68, "100", "20"),
    (69, "100", "20"),
]

for idx, (name_idx, target, weight) in enumerate(okr_kpis):
    rn = okr_header_row + 1 + idx
    rows_xml.append(
        f'<row r="{rn}" ht="18">'
        f'<c r="A{rn}" t="s" s="1"><v>{name_idx}</v></c>'
        f'<c r="B{rn}" s="7"><v>{target}</v></c>'
        f'<c r="C{rn}" s="7"><v>{weight}</v></c>'
        f'<c r="D{rn}" s="7"><v></v></c>'
        f'<c r="E{rn}" s="7"><v></v></c>'
        f'<c r="F{rn}" s="7"><v></v></c>'
        f'<c r="G{rn}" s="7"><v></v></c>'
        f'<c r="H{rn}" s="6"><f>IF(B{rn}=0,0,AVERAGE(D{rn}:G{rn})/B{rn})</f><v></v></c>'
        f'<c r="I{rn}" s="6"><f>IF(H{rn}>=1,"优秀",IF(H{rn}>=0.9,"良好",IF(H{rn}>=0.8,"达标","未达标")))</f><v></v></c>'
        f'</row>'
    )

sheet_xml = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView workbookViewId="0">
      <pane ySplit="4" topLeftCell="A5" activePane="bottomLeft" state="frozen"/>
    </sheetView>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="18"/>
  <cols>
    <col min="1" max="1" width="20" customWidth="1"/>
    <col min="2" max="2" width="12" customWidth="1"/>
    <col min="3" max="3" width="10" customWidth="1"/>
    <col min="4" max="4" width="12" customWidth="1"/>
    <col min="5" max="5" width="12" customWidth="1"/>
    <col min="6" max="6" width="12" customWidth="1"/>
    <col min="7" max="7" width="12" customWidth="1"/>
    <col min="8" max="8" width="12" customWidth="1"/>
    <col min="9" max="9" width="12" customWidth="1"/>
  </cols>
  <sheetData>
    {chr(10).join(rows_xml)}
  </sheetData>
  <autoFilter ref="A4:I40"/>
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
    <sheet name="绩效检视追踪" sheetId="1" r:id="rId1"/>
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
