import zipfile, os

OUTPUT = "D:/新课开发/经营/系列/14_绩效经营——从指标分解到组织同频/03_Excel工具/经营健康度仪表盘.xlsx"

strs = [
    "经营健康度仪表盘",                # 0
    "指标类别",                         # 1
    "指标名称",                         # 2
    "当前值",                           # 3
    "目标值",                           # 4
    "完成率(%)",                        # 5
    "健康状态",                         # 6
    "同比变化",                         # 7
    "填写说明",                         # 8
    "蓝色单元格为待填写内容，黑色单元格为自动计算",  # 9
    "优秀",                             # 10
    "良好",                             # 11
    "达标",                             # 12
    "预警",                             # 13
    "危险",                             # 14
    "财务健康",                         # 15
    "盈利能力",                         # 16
    "运营效率",                         # 17
    "组织能力",                         # 18
    "市场竞争力",                       # 19
    "净利润率(%)",                      # 20
    "毛利率(%)",                        # 21
    "人效比(万元/人)",                  # 22
    "部门费用率(%)",                    # 23
    "资产负债率(%)",                    # 24
    "应收账款周转天数",                 # 25
    "存货周转率(次)",                   # 26
    "销售收入增长率(%)",                # 27
    "市场占有率(%)",                    # 28
    "客户满意度(分)",                   # 29
    "员工满意度(分)",                   # 30
    "核心人才保留率(%)",                # 31
    "培训覆盖率(%)",                    # 32
    "综合健康度",                       # 33
    "仪表盘",                           # 34
    "更新时间",                         # 35
]

si = {s:i for i,s in enumerate(strs)}

rows_xml = []

# Row 1: Title
rows_xml.append(
    f'<row r="1" ht="40" customHeight="1">'
    f'<c r="A1" t="s" s="18"><v>{si["经营健康度仪表盘"]}</v></c>'
    f'<c r="H1" t="s" s="18"><v>{si["填写说明"]}</v></c>'
    f'</row>'
)

# Row 2: subtitle
rows_xml.append(
    f'<row r="2" ht="18" customHeight="1">'
    f'<c r="A2" t="s" s="0"><v>{si["蓝色单元格为待填写内容，黑色单元格为自动计算"]}</v></c>'
    f'</row>'
)

# Row 3: Dashboard section header
rows_xml.append(
    f'<row r="3" ht="26" customHeight="1">'
    f'<c r="A3" t="s" s="4"><v>{si["仪表盘"]}</v></c>'
    f'</row>'
)

# Row 4: Summary indicators (综合健康度)
rows_xml.append(
    f'<row r="4" ht="28" customHeight="1">'
    f'<c r="A4" t="s" s="4"><v>{si["综合健康度"]}</v></c>'
    f'<c r="B4" s="7"><v></v></c>'
    f'<c r="C4" s="7"><v>100</v></c>'
    f'<c r="D4" s="6"><f>IF(C4=0,0,B4/C4)</f><v></v></c>'
    f'<c r="E4" s="6"><f>IF(D4>=1,"优秀",IF(D4>=0.9,"良好",IF(D4>=0.8,"达标",IF(D4>=0.6,"预警","危险"))))</f><v></v></c>'
    f'</row>'
)

# Row 5: Separator
rows_xml.append(
    f'<row r="5" ht="8"><c r="A5" t="s" s="0"><v></v></c></row>'
)

# Row 6: Section header - 财务健康
rows_xml.append(
    f'<row r="6" ht="24" customHeight="1">'
    f'<c r="A6" t="s" s="4"><v>{si["财务健康"]}</v></c>'
    f'</row>'
)

# Row 7: Category header
rows_xml.append(
    f'<row r="7" ht="22" customHeight="1">'
    f'<c r="A7" t="s" s="4"><v>{si["指标类别"]}</v></c>'
    f'<c r="B7" t="s" s="4"><v>{si["指标名称"]}</v></c>'
    f'<c r="C7" t="s" s="4"><v>{si["当前值"]}</v></c>'
    f'<c r="D7" t="s" s="4"><v>{si["目标值"]}</v></c>'
    f'<c r="E7" t="s" s="4"><v>{si["完成率(%)"]}</v></c>'
    f'<c r="F7" t="s" s="4"><v>{si["健康状态"]}</v></c>'
    f'<c r="G7" t="s" s="4"><v>{si["同比变化"]}</v></c>'
    f'</row>'
)

# Financial metrics
financial_metrics = [
    (16, 20, "15", "0.5"),
    (16, 21, "40", "0.8"),
    (17, 22, "50", "0.9"),
    (17, 23, "3", "0.9"),
    (18, 24, "60", "0.85"),
    (17, 25, "60", "0.9"),
    (17, 26, "8", "0.85"),
]

for idx, (cat_idx, name_idx, target, threshold) in enumerate(financial_metrics):
    rn = 8 + idx
    rows_xml.append(
        f'<row r="{rn}" ht="18">'
        f'<c r="A{rn}" t="s" s="1"><v>{cat_idx}</v></c>'
        f'<c r="B{rn}" t="s" s="1"><v>{name_idx}</v></c>'
        f'<c r="C{rn}" s="7"><v></v></c>'
        f'<c r="D{rn}" s="7"><v>{target}</v></c>'
        f'<c r="E{rn}" s="6"><f>IF(D{rn}=0,0,C{rn}/D{rn})</f><v></v></c>'
        f'<c r="F{rn}" s="6"><f>IF(E{rn}>=1,"优秀",IF(E{rn}>=0.9,"良好",IF(E{rn}>=0.8,"达标",IF(E{rn}>=0.6,"预警","危险"))))</f><v></v></c>'
        f'<c r="G{rn}" s="7"><v></v></c>'
        f'</row>'
    )

# Row 15: Separator
rows_xml.append(
    f'<row r="15" ht="8"><c r="A15" t="s" s="0"><v></v></c></row>'
)

# Row 16: Section header - 运营效率
rows_xml.append(
    f'<row r="16" ht="24" customHeight="1">'
    f'<c r="A16" t="s" s="4"><v>{si["运营效率"]}</v></c>'
    f'</row>'
)

# Row 17: Category header
rows_xml.append(
    f'<row r="17" ht="22" customHeight="1">'
    f'<c r="A17" t="s" s="4"><v>{si["指标类别"]}</v></c>'
    f'<c r="B17" t="s" s="4"><v>{si["指标名称"]}</v></c>'
    f'<c r="C17" t="s" s="4"><v>{si["当前值"]}</v></c>'
    f'<c r="D17" t="s" s="4"><v>{si["目标值"]}</v></c>'
    f'<c r="E17" t="s" s="4"><v>{si["完成率(%)"]}</v></c>'
    f'<c r="F17" t="s" s="4"><v>{si["健康状态"]}</v></c>'
    f'<c r="G17" t="s" s="4"><v>{si["同比变化"]}</v></c>'
    f'</row>'
)

operation_metrics = [
    (17, 25, "60", "0.9"),
    (17, 26, "8", "0.85"),
]

for idx, (cat_idx, name_idx, target, threshold) in enumerate(operation_metrics):
    rn = 18 + idx
    rows_xml.append(
        f'<row r="{rn}" ht="18">'
        f'<c r="A{rn}" t="s" s="1"><v>{cat_idx}</v></c>'
        f'<c r="B{rn}" t="s" s="1"><v>{name_idx}</v></c>'
        f'<c r="C{rn}" s="7"><v></v></c>'
        f'<c r="D{rn}" s="7"><v>{target}</v></c>'
        f'<c r="E{rn}" s="6"><f>IF(D{rn}=0,0,C{rn}/D{rn})</f><v></v></c>'
        f'<c r="F{rn}" s="6"><f>IF(E{rn}>=1,"优秀",IF(E{rn}>=0.9,"良好",IF(E{rn}>=0.8,"达标",IF(E{rn}>=0.6,"预警","危险"))))</f><v></v></c>'
        f'<c r="G{rn}" s="7"><v></v></c>'
        f'</row>'
    )

# Row 21: Separator
rows_xml.append(
    f'<row r="21" ht="8"><c r="A21" t="s" s="0"><v></v></c></row>'
)

# Row 22: Section header - 市场竞争力
rows_xml.append(
    f'<row r="22" ht="24" customHeight="1">'
    f'<c r="A22" t="s" s="4"><v>{si["市场竞争力"]}</v></c>'
    f'</row>'
)

# Row 23: Category header
rows_xml.append(
    f'<row r="23" ht="22" customHeight="1">'
    f'<c r="A23" t="s" s="4"><v>{si["指标类别"]}</v></c>'
    f'<c r="B23" t="s" s="4"><v>{si["指标名称"]}</v></c>'
    f'<c r="C23" t="s" s="4"><v>{si["当前值"]}</v></c>'
    f'<c r="D23" t="s" s="4"><v>{si["目标值"]}</v></c>'
    f'<c r="E23" t="s" s="4"><v>{si["完成率(%)"]}</v></c>'
    f'<c r="F23" t="s" s="4"><v>{si["健康状态"]}</v></c>'
    f'<c r="G23" t="s" s="4"><v>{si["同比变化"]}</v></c>'
    f'</row>'
)

market_metrics = [
    (16, 27, "20", "0.85"),
    (19, 28, "10", "0.8"),
    (19, 29, "90", "0.9"),
]

for idx, (cat_idx, name_idx, target, threshold) in enumerate(market_metrics):
    rn = 24 + idx
    rows_xml.append(
        f'<row r="{rn}" ht="18">'
        f'<c r="A{rn}" t="s" s="1"><v>{cat_idx}</v></c>'
        f'<c r="B{rn}" t="s" s="1"><v>{name_idx}</v></c>'
        f'<c r="C{rn}" s="7"><v></v></c>'
        f'<c r="D{rn}" s="7"><v>{target}</v></c>'
        f'<c r="E{rn}" s="6"><f>IF(D{rn}=0,0,C{rn}/D{rn})</f><v></v></c>'
        f'<c r="F{rn}" s="6"><f>IF(E{rn}>=1,"优秀",IF(E{rn}>=0.9,"良好",IF(E{rn}>=0.8,"达标",IF(E{rn}>=0.6,"预警","危险"))))</f><v></v></c>'
        f'<c r="G{rn}" s="7"><v></v></c>'
        f'</row>'
    )

# Row 28: Separator
rows_xml.append(
    f'<row r="28" ht="8"><c r="A28" t="s" s="0"><v></v></c></row>'
)

# Row 29: Section header - 组织能力
rows_xml.append(
    f'<row r="29" ht="24" customHeight="1">'
    f'<c r="A29" t="s" s="4"><v>{si["组织能力"]}</v></c>'
    f'</row>'
)

# Row 30: Category header
rows_xml.append(
    f'<row r="30" ht="22" customHeight="1">'
    f'<c r="A30" t="s" s="4"><v>{si["指标类别"]}</v></c>'
    f'<c r="B30" t="s" s="4"><v>{si["指标名称"]}</v></c>'
    f'<c r="C30" t="s" s="4"><v>{si["当前值"]}</v></c>'
    f'<c r="D30" t="s" s="4"><v>{si["目标值"]}</v></c>'
    f'<c r="E30" t="s" s="4"><v>{si["完成率(%)"]}</v></c>'
    f'<c r="F30" t="s" s="4"><v>{si["健康状态"]}</v></c>'
    f'<c r="G30" t="s" s="4"><v>{si["同比变化"]}</v></c>'
    f'</row>'
)

org_metrics = [
    (18, 30, "85", "0.9"),
    (18, 31, "95", "0.9"),
    (18, 32, "80", "0.85"),
]

for idx, (cat_idx, name_idx, target, threshold) in enumerate(org_metrics):
    rn = 31 + idx
    rows_xml.append(
        f'<row r="{rn}" ht="18">'
        f'<c r="A{rn}" t="s" s="1"><v>{cat_idx}</v></c>'
        f'<c r="B{rn}" t="s" s="1"><v>{name_idx}</v></c>'
        f'<c r="C{rn}" s="7"><v></v></c>'
        f'<c r="D{rn}" s="7"><v>{target}</v></c>'
        f'<c r="E{rn}" s="6"><f>IF(D{rn}=0,0,C{rn}/D{rn})</f><v></v></c>'
        f'<c r="F{rn}" s="6"><f>IF(E{rn}>=1,"优秀",IF(E{rn}>=0.9,"良好",IF(E{rn}>=0.8,"达标",IF(E{rn}>=0.6,"预警","危险"))))</f><v></v></c>'
        f'<c r="G{rn}" s="7"><v></v></c>'
        f'</row>'
    )

# Row 35: Separator
rows_xml.append(
    f'<row r="35" ht="8"><c r="A35" t="s" s="0"><v></v></c></row>'
)

# Row 36: Summary section
rows_xml.append(
    f'<row r="36" ht="26" customHeight="1">'
    f'<c r="A36" t="s" s="4"><v>{si["更新时间"]}</v></c>'
    f'<c r="B36" s="7"><v></v></c>'
    f'</row>'
)

sheet_xml = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView workbookViewId="0">
      <pane ySplit="7" topLeftCell="A8" activePane="bottomLeft" state="frozen"/>
    </sheetView>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="18"/>
  <cols>
    <col min="1" max="1" width="16" customWidth="1"/>
    <col min="2" max="2" width="22" customWidth="1"/>
    <col min="3" max="3" width="14" customWidth="1"/>
    <col min="4" max="4" width="14" customWidth="1"/>
    <col min="5" max="5" width="14" customWidth="1"/>
    <col min="6" max="6" width="12" customWidth="1"/>
    <col min="7" max="7" width="14" customWidth="1"/>
  </cols>
  <sheetData>
    {chr(10).join(rows_xml)}
  </sheetData>
  <autoFilter ref="A7:G40"/>
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
    <sheet name="经营健康度" sheetId="1" r:id="rId1"/>
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
