import zipfile, os

OUTPUT = "D:/新课开发/经营/系列/14_绩效经营——从指标分解到组织同频/03_Excel工具/核心岗位绩效指标样表.xlsx"

strs = [
    "核心岗位绩效指标样表",           # 0
    "岗位",                           # 1
    "指标名称",                       # 2
    "指标定义",                       # 3
    "计算公式",                       # 4
    "权重(%)",                        # 5
    "目标值",                         # 6
    "数据来源",                       # 7
    "周期",                           # 8
    "填写说明",                       # 9
    "蓝色单元格为待填写内容，黑色单元格为自动计算",  # 10
    "总经理",                         # 11
    "销售总监",                       # 12
    "运营经理",                       # 13
    "人力资源总监",                   # 14
    "财务总监",                       # 15
    "净利润率",                       # 16
    "企业净利润占营业收入的比例",     # 17
    "净利润/营业收入*100%",           # 18
    "15%",                            # 19
    "财务系统",                       # 20
    "年度",                           # 21
    "销售收入增长率",                 # 22
    "企业销售收入同比增长率",         # 23
    "(本期销售收入-上期销售收入)/上期销售收入*100%",  # 24
    "20%",                            # 25
    "CRM系统/财务报表",               # 26
    "客户满意度评分",                 # 27
    "客户对产品或服务的综合满意程度", # 28
    "客户调研评分(1-10分)",           # 29
    "90分",                           # 30
    "客户管理系统",                   # 31
    "员工满意度",                     # 32
    "员工对工作环境、薪酬、发展的综合满意度",  # 33
    "员工调研评分(1-10分)",           # 34
    "85分",                           # 35
    "人力资源系统",                   # 36
    "部门费用率",                     # 37
    "部门费用占营业收入的比例",       # 38
    "部门费用/营业收入*100%",         # 39
    "3%",                             # 40
    "财务系统",                       # 41
    "核心人才保留率",                 # 42
    "核心岗位人才年度离职率",         # 43
    "1-核心岗位离职人数/核心岗位总人数*100%",  # 44
    "95%",                            # 45
    "人才数据",                       # 46
    "应收账款周转天数",               # 47
    "企业从销售到收回款项的平均天数", # 48
    "应收账款平均余额/营业收入*365",  # 49
    "60天",                           # 50
    "运营效率",                       # 51
    "组织能力",                       # 52
    "市场占有率",                     # 53
    "企业产品或服务在目标市场的份额", # 54
    "企业销售收入/目标市场总容量*100%",  # 55
    "10%",                            # 56
    "市场研究数据",                   # 57
    "毛利率",                         # 58
    "企业毛利占营业收入的比例",       # 59
    "(营业收入-营业成本)/营业收入*100%",  # 60
    "40%",                            # 61
    "存货周转率",                     # 62
    "企业存货的周转速度",             # 63
    "营业成本/平均存货余额",          # 64
    "8次",                            # 65
    "资产负债率",                     # 66
    "企业负债占总资产的比例",         # 67
    "总负债/总资产*100%",             # 68
    "60%",                            # 69
    "人效比",                         # 70
    "人均创造的营业收入",             # 71
    "营业收入/员工人数",              # 72
    "50万元/人",                      # 73
    "人才结构",                       # 74
    "培训覆盖率",                     # 75
    "年度内接受过培训的员工比例",     # 76
    "年度受训员工人次/员工总人数*100%",  # 77
    "80%",                            # 78
    "培训记录",                       # 79
]

# KPI data: (岗位index, 指标名称idx, 指标定义idx, 计算公式idx, 权重str, 目标值idx, 数据来源idx, 周期idx)
kpis = [
    (11,16,17,18,"30","19",20,21),   # 总经理-净利润率
    (11,22,23,24,"20","25",26,21),   # 总经理-销售收入增长率
    (11,53,54,55,"15","56",57,21),   # 总经理-市场占有率
    (11,58,59,60,"10","61",20,21),   # 总经理-毛利率
    (11,70,71,72,"10","73",20,21),   # 总经理-人效比
    (11,66,67,68,"15","69",41,21),   # 总经理-资产负债率
    (12,22,23,24,"25","25",26,21),   # 销售总监-销售收入增长率
    (12,53,54,55,"20","56",57,21),   # 销售总监-市场占有率
    (12,27,28,29,"15","30",31,21),   # 销售总监-客户满意度
    (12,47,48,49,"15","50",51,21),   # 销售总监-应收账款周转天数
    (12,70,71,72,"10","73",20,21),   # 销售总监-人效比
    (12,16,17,18,"15","19",20,21),   # 销售总监-净利润率
    (13,47,48,49,"20","50",51,21),   # 运营经理-应收账款周转天数
    (13,62,63,64,"20","65",51,21),   # 运营经理-存货周转率
    (13,70,71,72,"15","73",20,21),   # 运营经理-人效比
    (13,37,38,39,"15","40",41,21),   # 运营经理-部门费用率
    (13,27,28,29,"15","30",31,21),   # 运营经理-客户满意度
    (13,22,23,24,"15","25",26,21),   # 运营经理-销售收入增长率
    (14,32,33,34,"25","35",36,21),   # HR总监-员工满意度
    (14,42,43,44,"25","45",46,21),   # HR总监-核心人才保留率
    (14,75,76,77,"20","78",79,21),   # HR总监-培训覆盖率
    (14,70,71,72,"15","73",20,21),   # HR总监-人效比
    (14,37,38,39,"15","40",41,21),   # HR总监-部门费用率
    (15,16,17,18,"25","19",20,21),   # 财务总监-净利润率
    (15,66,67,68,"20","69",41,21),   # 财务总监-资产负债率
    (15,47,48,49,"20","50",51,21),   # 财务总监-应收账款周转天数
    (15,62,63,64,"15","65",51,21),   # 财务总监-存货周转率
    (15,37,38,39,"10","40",41,21),   # 财务总监-部门费用率
    (15,70,71,72,"10","73",20,21),   # 财务总监-人效比
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

# Build sheet XML
rows_xml = []

# Row 1: Title
rows_xml.append(
    f'<row r="1" ht="32" customHeight="1">'
    f'<c r="A1" t="s" s="18"><v>{si["核心岗位绩效指标样表"]}</v></c>'
    f'<c r="I1" t="s" s="18"><v>{si["填写说明"]}</v></c>'
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
    f'<c r="A3" t="s" s="4"><v>{si["岗位"]}</v></c>'
    f'<c r="B3" t="s" s="4"><v>{si["指标名称"]}</v></c>'
    f'<c r="C3" t="s" s="4"><v>{si["指标定义"]}</v></c>'
    f'<c r="D3" t="s" s="4"><v>{si["计算公式"]}</v></c>'
    f'<c r="E3" t="s" s="4"><v>{si["权重(%)"]}</v></c>'
    f'<c r="F3" t="s" s="4"><v>{si["目标值"]}</v></c>'
    f'<c r="G3" t="s" s="4"><v>{si["数据来源"]}</v></c>'
    f'<c r="H3" t="s" s="4"><v>{si["周期"]}</v></c>'
    f'<c r="I3" t="s" s="4"><v>{si["权重(%)"]}</v></c>'
    f'</row>'
)

# KPI rows
row_num = 4
kpi_start_row = row_num
for idx, kpi in enumerate(kpis):
    pos_idx, name_idx, def_idx, formula_idx, weight, target_idx, source_idx, cycle_idx = kpi
    rn = row_num + idx
    rows_xml.append(
        f'<row r="{rn}" ht="18">'
        f'<c r="A{rn}" t="s" s="1"><v>{pos_idx}</v></c>'
        f'<c r="B{rn}" t="s" s="1"><v>{name_idx}</v></c>'
        f'<c r="C{rn}" t="s" s="1"><v>{def_idx}</v></c>'
        f'<c r="D{rn}" t="s" s="1"><v>{formula_idx}</v></c>'
        f'<c r="E{rn}" s="7"><v>{weight}</v></c>'
        f'<c r="F{rn}" t="s" s="1"><v>{target_idx}</v></c>'
        f'<c r="G{rn}" t="s" s="1"><v>{source_idx}</v></c>'
        f'<c r="H{rn}" t="s" s="1"><v>{cycle_idx}</v></c>'
        f'<c r="I{rn}" s="6"><f>IF(E{rn}=0,0,E{rn}/SUM($E${kpi_start_row}:$E${kpi_start_row+len(kpis)-1}))</f><v></v></c>'
        f'</row>'
    )

last_kpi_row = row_num + len(kpis) - 1

# Total row
total_row = last_kpi_row + 1
rows_xml.append(
    f'<row r="{total_row}" ht="20">'
    f'<c r="A{total_row}" t="s" s="4"><v>{si["组织能力"]}</v></c>'
    f'<c r="E{total_row}" s="7"><f>SUM(E{kpi_start_row}:E{last_kpi_row})</f><v></v></c>'
    f'<c r="I{total_row}" s="6"><f>IF(E{total_row}=0,0,I{total_row}/SUM($I${kpi_start_row}:$I${last_kpi_row}))</f><v></v></c>'
    f'</row>'
)

# Separator row
sep_row = total_row + 1
rows_xml.append(
    f'<row r="{sep_row}" ht="8"><c r="A{sep_row}" t="s" s="0"><v></v></c></row>'
)

# Second table header
t2_row = sep_row + 1
rows_xml.append(
    f'<row r="{t2_row}" ht="20">'
    f'<c r="A{t2_row}" t="s" s="4"><v>{si["岗位"]}</v></c>'
    f'<c r="B{t2_row}" t="s" s="4"><v>{si["指标名称"]}</v></c>'
    f'<c r="C{t2_row}" t="s" s="4"><v>{si["指标定义"]}</v></c>'
    f'<c r="D{t2_row}" t="s" s="4"><v>{si["计算公式"]}</v></c>'
    f'<c r="E{t2_row}" t="s" s="4"><v>{si["权重(%)"]}</v></c>'
    f'<c r="F{t2_row}" t="s" s="4"><v>{si["目标值"]}</v></c>'
    f'<c r="G{t2_row}" t="s" s="4"><v>{si["数据来源"]}</v></c>'
    f'<c r="H{t2_row}" t="s" s="4"><v>{si["周期"]}</v></c>'
    f'<c r="I{t2_row}" t="s" s="4"><v>{si["权重(%)"]}</v></c>'
    f'</row>'
)

# Empty input rows for second table
for i in range(15):
    rn = t2_row + 1 + i
    rows_xml.append(
        f'<row r="{rn}" ht="18">'
        f'<c r="A{rn}" t="s" s="1"><v></v></c>'
        f'<c r="B{rn}" t="s" s="1"><v></v></c>'
        f'<c r="C{rn}" t="s" s="1"><v></v></c>'
        f'<c r="D{rn}" t="s" s="1"><v></v></c>'
        f'<c r="E{rn}" s="7"><v></v></c>'
        f'<c r="F{rn}" t="s" s="1"><v></v></c>'
        f'<c r="G{rn}" t="s" s="1"><v></v></c>'
        f'<c r="H{rn}" t="s" s="1"><v></v></c>'
        f'<c r="I{rn}" s="6"><f>IF(E{rn}=0,0,E{rn}/SUM($E${t2_row+1}:$E${t2_row+15}))</f><v></v></c>'
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
    <col min="1" max="1" width="14" customWidth="1"/>
    <col min="2" max="2" width="18" customWidth="1"/>
    <col min="3" max="3" width="28" customWidth="1"/>
    <col min="4" max="4" width="32" customWidth="1"/>
    <col min="5" max="5" width="10" customWidth="1"/>
    <col min="6" max="6" width="12" customWidth="1"/>
    <col min="7" max="7" width="16" customWidth="1"/>
    <col min="8" max="8" width="10" customWidth="1"/>
    <col min="9" max="9" width="12" customWidth="1"/>
  </cols>
  <sheetData>
    {chr(10).join(rows_xml)}
  </sheetData>
  <autoFilter ref="A3:H100"/>
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
    <sheet name="核心岗位绩效指标" sheetId="1" r:id="rId1"/>
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

# Read styles from minimal_xlsx
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
print(f"Total KPIs: {len(kpis)}")
