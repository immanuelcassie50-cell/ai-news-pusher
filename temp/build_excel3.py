import zipfile, os

OUTPUT = "D:/新课开发/经营/系列/14_绩效经营——从指标分解到组织同频/03_Excel工具/跨部门协同指标设计表.xlsx"

strs = [
    "跨部门协同指标设计表",            # 0
    "协同事项",                         # 1
    "发起部门",                         # 2
    "配合部门",                         # 3
    "协同指标名称",                     # 4
    "指标定义",                         # 5
    "计算公式",                         # 6
    "权重(%)",                          # 7
    "目标值",                           # 8
    "数据来源",                         # 9
    "周期",                             # 10
    "填写说明",                         # 11
    "蓝色单元格为待填写内容，黑色单元格为自动计算",  # 12
    "月度",                             # 13
    "季度",                             # 14
    "销售与市场",                       # 15
    "销售部",                           # 16
    "市场部",                           # 17
    "市场活动ROI",                      # 18
    "市场活动带来的销售线索转化率",    # 19
    "市场活动转化线索数/市场活动总投入(万元)*100%",  # 20
    "150%",                             # 21
    "市场活动投入产出比",               # 22
    "CRM系统",                          # 23
    "销售与运营",                       # 24
    "订单准时交付率",                   # 25
    "订单在承诺时间内完成的比例",       # 26
    "准时交付订单数/总订单数*100%",     # 27
    "95%",                              # 28
    "订单管理系统",                     # 29
    "销售与财务",                       # 30
    "回款及时率",                       # 31
    "合同约定账期内回款的比例",         # 32
    "实际回款金额/合同约定回款金额*100%",  # 33
    "90%",                              # 34
    "财务系统",                         # 35
    "研发与市场",                       # 36
    "研发部",                           # 37
    "新产品上市周期",                   # 38
    "从立项到产品上市的平均天数",       # 39
    "产品开发总天数",                   # 40
    "90天",                             # 41
    "项目管理系统",                     # 42
    "研发与销售",                       # 43
    "产品需求响应速度",                 # 44
    "销售需求被响应的平均时长",         # 45
    "需求响应总时长/需求数量",          # 46
    "3天",                              # 47
    "需求管理系统",                     # 48
    "运营与财务",                       # 49
    "成本费用控制率",                   # 50
    "实际费用与预算费用的比例",         # 51
    "实际费用/预算费用*100%",           # 52
    "100%",                             # 53
    "预算管理系统",                     # 54
    "运营与HR",                         # 55
    "招聘及时率",                       # 56
    "需求提出到人员到岗的平均天数",     # 57
    "实际招聘天数/期望招聘天数*100%",   # 58
    "90%",                              # 59
    "ATS系统",                          # 60
    "HR与财务",                         # 61
    "人力成本率",                       # 62
    "人力成本占营业收入的比例",         # 63
    "人力成本总额/营业收入*100%",       # 64
    "20%",                              # 65
    "跨部门协作满意度",                 # 66
    "其他部门对协同工作的满意程度",     # 67
    "跨部门调研评分(1-10分)",           # 68
    "8分",                              # 69
    "调研系统",                         # 70
    "流程审批时效",                     # 71
    "跨部门流程的平均审批时长",         # 72
    "流程审批总时长/流程数量",          # 73
    "2天",                              # 74
    "OA系统",                           # 75
]

si = {s:i for i,s in enumerate(strs)}

def cx(addr, sval, sty, val='', fval=''):
    c = f'<c r="{addr}"'
    if sval is not None:
        c += f' t="s" s="{sty}"><v>{si[sval]}</v></c>'
    elif fval:
        c += f' s="{sty}"><f>{fval}</f><v></v></c>'
    elif val:
        c += f' s="{sty}"><v>{val}</v></c>'
    else:
        c += f' s="{sty}"><v></v></c>'
    return c

rows_xml = []

# Row 1: Title
rows_xml.append(
    f'<row r="1" ht="32" customHeight="1">'
    f'<c r="A1" t="s" s="18"><v>{si["跨部门协同指标设计表"]}</v></c>'
    f'<c r="L1" t="s" s="18"><v>{si["填写说明"]}</v></c>'
    f'</row>'
)

# Row 2: subtitle
rows_xml.append(
    f'<row r="2" ht="18" customHeight="1">'
    f'<c r="A2" t="s" s="0"><v>{si["蓝色单元格为待填写内容，黑色单元格为自动计算"]}</v></c>'
    f'</row>'
)

# Row 3: headers
rows_xml.append(
    f'<row r="3" ht="22" customHeight="1">'
    f'<c r="A3" t="s" s="4"><v>{si["协同事项"]}</v></c>'
    f'<c r="B3" t="s" s="4"><v>{si["发起部门"]}</v></c>'
    f'<c r="C3" t="s" s="4"><v>{si["配合部门"]}</v></c>'
    f'<c r="D3" t="s" s="4"><v>{si["协同指标名称"]}</v></c>'
    f'<c r="E3" t="s" s="4"><v>{si["指标定义"]}</v></c>'
    f'<c r="F3" t="s" s="4"><v>{si["计算公式"]}</v></c>'
    f'<c r="G3" t="s" s="4"><v>{si["权重(%)"]}</v></c>'
    f'<c r="H3" t="s" s="4"><v>{si["目标值"]}</v></c>'
    f'<c r="I3" t="s" s="4"><v>{si["数据来源"]}</v></c>'
    f'<c r="J3" t="s" s="4"><v>{si["周期"]}</v></c>'
    f'<c r="K3" t="s" s="4"><v>{si["权重(%)"]}</v></c>'
    f'<c r="L3" t="s" s="4"><v>{si["权重(%)"]}</v></c>'
    f'</row>'
)

# Pre-filled examples
examples = [
    (15,16,17,18,19,20,"15",21,23,14),  # 市场活动ROI
    (15,16,17,22,19,20,"10",21,23,14),  # 市场活动投入产出比
    (24,16,37,25,26,27,"20",28,29,14),  # 订单准时交付率
    (30,16,35,31,32,33,"15",34,35,13),  # 回款及时率
    (36,37,17,38,39,40,"15",41,42,14),  # 新产品上市周期
    (43,37,16,44,45,46,"15",47,48,13),  # 产品需求响应速度
    (49,37,35,50,51,52,"10",53,54,13),  # 成本费用控制率
    (55,37,61,56,57,58,"10",59,60,14),  # 招聘及时率
    (61,61,35,62,63,64,"10",65,35,13),  # 人力成本率
    (24,16,35,66,67,68,"5",69,70,14),   # 跨部门协作满意度
    (24,16,35,71,72,73,"5",74,75,13),   # 流程审批时效
]

kpi_start_row = 4
for idx, ex in enumerate(examples):
    item_idx, dept1_idx, dept2_idx, name_idx, def_idx, formula_idx, weight, target_idx, source_idx, cycle_idx = ex
    rn = kpi_start_row + idx
    rows_xml.append(
        f'<row r="{rn}" ht="18">'
        f'<c r="A{rn}" t="s" s="1"><v>{item_idx}</v></c>'
        f'<c r="B{rn}" t="s" s="1"><v>{dept1_idx}</v></c>'
        f'<c r="C{rn}" t="s" s="1"><v>{dept2_idx}</v></c>'
        f'<c r="D{rn}" t="s" s="1"><v>{name_idx}</v></c>'
        f'<c r="E{rn}" t="s" s="1"><v>{def_idx}</v></c>'
        f'<c r="F{rn}" t="s" s="1"><v>{formula_idx}</v></c>'
        f'<c r="G{rn}" s="7"><v>{weight}</v></c>'
        f'<c r="H{rn}" t="s" s="1"><v>{target_idx}</v></c>'
        f'<c r="I{rn}" t="s" s="1"><v>{source_idx}</v></c>'
        f'<c r="J{rn}" t="s" s="1"><v>{cycle_idx}</v></c>'
        f'<c r="K{rn}" s="6"><f>IF(G{rn}=0,0,G{rn}/SUM($G${kpi_start_row}:$G${kpi_start_row+len(examples)-1}))</f><v></v></c>'
        f'<c r="L{rn}" t="s" s="0"><v></v></c>'
        f'</row>'
    )

last_row = kpi_start_row + len(examples) - 1

# Total row
total_row = last_row + 1
rows_xml.append(
    f'<row r="{total_row}" ht="20">'
    f'<c r="A{total_row}" t="s" s="4"><v>{si["跨部门协作满意度"]}</v></c>'
    f'<c r="G{total_row}" s="7"><f>SUM(G{kpi_start_row}:G{last_row})</f><v></v></c>'
    f'<c r="K{total_row}" s="6"><f>IF(G{total_row}=0,0,K{total_row}/SUM($K${kpi_start_row}:$K${last_row}))</f><v></v></c>'
    f'</row>'
)

# Separator
sep_row = total_row + 1
rows_xml.append(
    f'<row r="{sep_row}" ht="8"><c r="A{sep_row}" t="s" s="0"><v></v></c></row>'
)

# Second table header (blank input rows)
t2_row = sep_row + 1
rows_xml.append(
    f'<row r="{t2_row}" ht="22" customHeight="1">'
    f'<c r="A{t2_row}" t="s" s="4"><v>{si["协同事项"]}</v></c>'
    f'<c r="B{t2_row}" t="s" s="4"><v>{si["发起部门"]}</v></c>'
    f'<c r="C{t2_row}" t="s" s="4"><v>{si["配合部门"]}</v></c>'
    f'<c r="D{t2_row}" t="s" s="4"><v>{si["协同指标名称"]}</v></c>'
    f'<c r="E{t2_row}" t="s" s="4"><v>{si["指标定义"]}</v></c>'
    f'<c r="F{t2_row}" t="s" s="4"><v>{si["计算公式"]}</v></c>'
    f'<c r="G{t2_row}" t="s" s="4"><v>{si["权重(%)"]}</v></c>'
    f'<c r="H{t2_row}" t="s" s="4"><v>{si["目标值"]}</v></c>'
    f'<c r="I{t2_row}" t="s" s="4"><v>{si["数据来源"]}</v></c>'
    f'<c r="J{t2_row}" t="s" s="4"><v>{si["周期"]}</v></c>'
    f'<c r="K{t2_row}" t="s" s="4"><v>{si["权重(%)"]}</v></c>'
    f'<c r="L{t2_row}" t="s" s="4"><v>{si["权重(%)"]}</v></c>'
    f'</row>'
)

for i in range(15):
    rn = t2_row + 1 + i
    rows_xml.append(
        f'<row r="{rn}" ht="18">'
        f'<c r="A{rn}" t="s" s="1"><v></v></c>'
        f'<c r="B{rn}" t="s" s="1"><v></v></c>'
        f'<c r="C{rn}" t="s" s="1"><v></v></c>'
        f'<c r="D{rn}" t="s" s="1"><v></v></c>'
        f'<c r="E{rn}" t="s" s="1"><v></v></c>'
        f'<c r="F{rn}" t="s" s="1"><v></v></c>'
        f'<c r="G{rn}" s="7"><v></v></c>'
        f'<c r="H{rn}" t="s" s="1"><v></v></c>'
        f'<c r="I{rn}" t="s" s="1"><v></v></c>'
        f'<c r="J{rn}" t="s" s="1"><v></v></c>'
        f'<c r="K{rn}" s="6"><f>IF(G{rn}=0,0,G{rn}/SUM($G${t2_row+1}:$G${t2_row+15}))</f><v></v></c>'
        f'<c r="L{rn}" t="s" s="0"><v></v></c>'
        f'</row>'
    )

sheet_xml = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView workbookViewId="0">
      <pane ySplit="3" topLeftCell="A4" activePane="bottomLeft" state="frozen"/>
    </sheetView>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="18"/>
  <cols>
    <col min="1" max="1" width="16" customWidth="1"/>
    <col min="2" max="2" width="12" customWidth="1"/>
    <col min="3" max="3" width="12" customWidth="1"/>
    <col min="4" max="4" width="18" customWidth="1"/>
    <col min="5" max="5" width="28" customWidth="1"/>
    <col min="6" max="6" width="34" customWidth="1"/>
    <col min="7" max="7" width="10" customWidth="1"/>
    <col min="8" max="8" width="12" customWidth="1"/>
    <col min="9" max="9" width="16" customWidth="1"/>
    <col min="10" max="10" width="10" customWidth="1"/>
    <col min="11" max="11" width="12" customWidth="1"/>
    <col min="12" max="12" width="8" customWidth="1"/>
  </cols>
  <sheetData>
    {chr(10).join(rows_xml)}
  </sheetData>
  <autoFilter ref="A3:L100"/>
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
    <sheet name="跨部门协同指标" sheetId="1" r:id="rId1"/>
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
print(f"Total examples: {len(examples)}")
