#!/usr/bin/env python3
import os
import html

BASE = '/tmp/guide'

def make_sheet(rows_xml, auto_filter_ref=None, col_widths=None):
    if col_widths is None:
        col_widths = [(1,1,30),(2,2,28),(3,3,28),(4,4,20),(5,5,16)]
    cols_xml = ''
    for (mn,mx,w) in col_widths:
        cols_xml += f'    <col min="{mn}" max="{mx}" width="{w}" customWidth="1"/>\n'

    xml = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView workbookViewId="0"/>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25"
    xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols>
{cols_xml}  </cols>
  <sheetData>
{rows_xml}
  </sheetData>'''
    if auto_filter_ref:
        xml += f'\n  <autoFilter ref="{auto_filter_ref}"/>'
    xml += '\n  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>\n</worksheet>'
    return xml

def make_row(row_num, cells):
    cell_xml = ''
    for cv in cells:
        cell_xml += '    ' + cv + '\n'
    return f'  <row r="{row_num}">\n{cell_xml}  </row>'

def c(ref, style, value, typ='s'):
    return f'<c r="{ref}" t="{typ}" s="{style}"><v>{value}</v></c>'

# All shared strings (index)
STR = {
    # Sheet 1: 0-28
    0: "股票投资入门配套表单使用指引",
    1: "表单名称",
    2: "核心功能",
    3: "适用场景",
    4: "使用时机",
    5: "重要程度",
    6: "股票投资分析工具箱.xlsx",
    7: "术语速查/指标计算/估值/风控/复盘",
    8: "全面支持投资决策各环节",
    9: "每次投资前/后",
    10: "必备",
    11: "K线形态识别图鉴.xlsx",
    12: "20+种K线形态特征与含义",
    13: "盘中实时判断形态",
    14: "每次看盘时",
    15: "重要",
    16: "财报分析框架.xlsx",
    17: "三大报表分析/财务比率/异常预警",
    18: "基本面深度分析",
    19: "选股尽调时",
    20: "投资决策流程卡.xlsx",
    21: "8步选股检查/买卖决策树",
    22: "系统化投资决策",
    23: "每次决策前",
    24: "表单使用指引.xlsx",
    25: "各表单使用说明与填写范例",
    26: "学习表单使用方法",
    27: "首次使用前",
    28: "入门必读",

    # Sheet 2: 29-73
    29: "股票投资分析工具箱使用指南",
    30: "各工作表使用说明",
    31: "工作表",
    32: "用途",
    33: "关键输入项",
    34: "输出结果",
    35: "填写示例",
    36: "术语速查",
    37: "快速查询投资术语含义",
    38: "选择字母索引/搜索关键词",
    39: "显示术语解释",
    40: '输入"P/E"查出"市盈率"',
    41: "关键指标计算",
    42: "计算PE/PB/EPS等核心指标",
    43: "股价、总股本、净利润等",
    44: "自动计算结果",
    45: "输入10元股价,EPS=0.5元,得出PE=20",
    46: "估值工具",
    47: "相对估值和DCF绝对估值",
    48: "行业均值参数、增长率假设",
    49: "内在价值估算",
    50: "行业PE均值15,输入公司PE=12",
    51: "风险评估",
    52: "仓位管理和止损点计算",
    53: "总资金、最大持仓比例",
    54: "建议持仓数、止损价",
    55: "总资金10万,最大20%仓位",
    56: "投资复盘",
    57: "月度持仓分析和操作总结",
    58: "每月持仓数据",
    59: "收益率统计",
    60: "1月股票A:期初5万期末5.5万",
    61: "常见错误提醒",
    62: "错误类型",
    63: "错误描述",
    64: "正确做法",
    65: "输入错误",
    66: "股价单位用错(万元当亿元)",
    67: '统一使用"亿元"作为金额单位',
    68: "公式误覆盖",
    69: "复制数据时覆盖了公式单元格",
    70: "粘贴时只粘贴数值",
    71: "遗漏更新",
    72: "持仓变化后未更新复盘表",
    73: "每月末固定更新一次",

    # Sheet 3: 74-100
    74: "K线形态识别图鉴使用指南",
    75: "形态识别方法",
    76: "步骤",
    77: "操作方法",
    78: "注意事项",
    79: "确认K线数量",
    80: '单根K线查"锤子线/吊颈线",两根查"吞没形态",三根查"早晨/黄昏之星"',
    81: "注意K线时间周期",
    82: "观察实体大小",
    83: "实体越小反转信号越强",
    84: "长实体表示趋势强烈",
    85: "测量影线长度",
    86: "影线是实体2倍以上信号更可靠",
    87: "上下影线含义不同",
    88: "结合趋势判断",
    89: "底部出现锤子线更可信",
    90: "顶部出现吊颈线更可信",
    91: "逆势信号需谨慎",
    92: "实战应用注意事项",
    93: "可靠性评级仅作参考",
    94: "高可靠性形态也需结合其他因素",
    95: "不要孤立看形态",
    96: "结合成交量、均线综合判断",
    97: "注意时间周期",
    98: "日线形态比分钟线更可靠",
    99: "连续出现同样形态",
    100: "可靠性会下降",

    # Sheet 4: 101-119
    101: "财报分析框架使用指南",
    102: "分析顺序建议",
    103: "先看现金流量表",
    104: "经营现金流是否健康最重要",
    105: "再看资产负债表",
    106: "负债结构和资产质量",
    107: "最后看利润表",
    108: "盈利能力验证",
    109: "重点关注科目",
    110: "货币资金",
    111: "是否与短期借款匹配",
    112: "应收账款",
    113: "增速是否远超营收",
    114: "存货",
    115: "是否有积压或贬值风险",
    116: "商誉",
    117: "是否存在爆雷风险",
    118: "经营现金流",
    119: "是否与净利润匹配",

    # Sheet 5: 120-161
    120: "投资决策流程卡使用指南",
    121: "8步法使用流程",
    122: "操作",
    123: "通过标准",
    124: "不通过处理",
    125: "行业景气度",
    126: "判断行业周期位置",
    127: "上升期或稳定期",
    128: "下降期需特别谨慎",
    129: "公司基本面",
    130: "核查营收利润增速",
    131: "连续3年正增长",
    132: "波动大需深入分析",
    133: "估值水平",
    134: "比较PE/PB与行业",
    135: "低于行业均值20%",
    136: "高于行业需充分理由",
    137: "财务质量",
    138: "检查经营现金流",
    139: "现金流为正",
    140: "持续为负需警惕",
    141: "竞争格局",
    142: "分析市场份额变化",
    143: "稳定或提升",
    144: "下滑需原因解释",
    145: "管理层",
    146: "背景调查与减持记录",
    147: "无不良记录",
    148: "有减持需谨慎",
    149: "风险因素",
    150: "全面风险排查",
    151: "无重大风险",
    152: "有风险需评估影响",
    153: "买入时机",
    154: "综合技术面择时",
    155: "有安全边际且技术企稳",
    156: "宁可错过不可买错",
    157: "决策树使用说明",
    158: "买入条件需同时满足多项",
    159: "持有条件恶化应考虑卖出",
    160: "卖出条件满足一项即应警惕",
    161: "重大风险出现应立即止损",
}

def build_shared_strings():
    lines = ['<?xml version="1.0" encoding="UTF-8" standalone="yes"?>']
    lines.append(f'<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="{len(STR)}" uniqueCount="{len(STR)}">')
    for i in range(len(STR)):
        lines.append(f'  <si><t>{html.escape(STR[i])}</t></si>')
    lines.append('</sst>')
    return '\n'.join(lines)

# =====================================================================
# SHEET 1: 表单总览
# =====================================================================
s1_rows = []
s1_rows.append(make_row(1, [c('A1', 4, 0)]))
s1_rows.append(make_row(2, [c('A2', 4, 1), c('B2', 4, 2), c('C2', 4, 3), c('D2', 4, 4), c('E2', 4, 5)]))
s1_rows.append(make_row(3, [c('A3', 1, 6), c('B3', 0, 7), c('C3', 0, 8), c('D3', 0, 9), c('E3', 0, 10)]))
s1_rows.append(make_row(4, [c('A4', 1, 11), c('B4', 0, 12), c('C4', 0, 13), c('D4', 0, 14), c('E4', 0, 15)]))
s1_rows.append(make_row(5, [c('A5', 1, 16), c('B5', 0, 17), c('C5', 0, 18), c('D5', 0, 19), c('E5', 0, 20)]))
s1_rows.append(make_row(6, [c('A6', 1, 21), c('B6', 0, 22), c('C6', 0, 23), c('D6', 0, 24), c('E6', 0, 25)]))
s1_rows.append(make_row(7, [c('A7', 1, 24), c('B7', 0, 25), c('C7', 0, 26), c('D7', 0, 27), c('E7', 0, 28)]))
sheet1_content = make_sheet('\n'.join(s1_rows), auto_filter_ref='A2:E7')

# =====================================================================
# SHEET 2: 分析工具箱指引
# =====================================================================
s2_rows = []
s2_rows.append(make_row(1, [c('A1', 4, 29)]))
s2_rows.append(make_row(2, [c('A2', 4, 30)]))
s2_rows.append(make_row(3, [c('A3', 4, 31), c('B3', 4, 32), c('C3', 4, 33), c('D3', 4, 34), c('E3', 4, 35)]))
s2_rows.append(make_row(4, [c('A4', 1, 36), c('B4', 0, 37), c('C4', 0, 38), c('D4', 0, 39), c('E4', 0, 40)]))
s2_rows.append(make_row(5, [c('A5', 1, 41), c('B5', 0, 42), c('C5', 0, 43), c('D5', 0, 44), c('E5', 0, 45)]))
s2_rows.append(make_row(6, [c('A6', 1, 46), c('B6', 0, 47), c('C6', 0, 48), c('D6', 0, 49), c('E6', 0, 50)]))
s2_rows.append(make_row(7, [c('A7', 1, 51), c('B7', 0, 52), c('C7', 0, 53), c('D7', 0, 54), c('E7', 0, 55)]))
s2_rows.append(make_row(8, [c('A8', 1, 56), c('B8', 0, 57), c('C8', 0, 58), c('D8', 0, 59), c('E8', 0, 60)]))
s2_rows.append(make_row(9, [c('A9', 4, 61)]))
s2_rows.append(make_row(10, [c('A10', 4, 62), c('B10', 4, 63), c('C10', 4, 64)]))
s2_rows.append(make_row(11, [c('A11', 1, 65), c('B11', 0, 66), c('C11', 0, 67)]))
s2_rows.append(make_row(12, [c('A12', 1, 68), c('B12', 0, 69), c('C12', 0, 70)]))
s2_rows.append(make_row(13, [c('A13', 1, 71), c('B13', 0, 72), c('C13', 0, 73)]))
sheet2_content = make_sheet('\n'.join(s2_rows))

# =====================================================================
# SHEET 3: K线图鉴指引
# =====================================================================
s3_rows = []
s3_rows.append(make_row(1, [c('A1', 4, 74)]))
s3_rows.append(make_row(2, [c('A2', 4, 75)]))
s3_rows.append(make_row(3, [c('A3', 4, 76), c('B3', 4, 77), c('C3', 4, 78)]))
s3_rows.append(make_row(4, [c('A4', 1, 79), c('B4', 0, 80), c('C4', 0, 81)]))
s3_rows.append(make_row(5, [c('A5', 1, 82), c('B5', 0, 83), c('C5', 0, 84)]))
s3_rows.append(make_row(6, [c('A6', 1, 85), c('B6', 0, 86), c('C6', 0, 87)]))
s3_rows.append(make_row(7, [c('A7', 1, 88), c('B7', 0, 89), c('C7', 0, 91)]))  # C7 = 逆势信号需谨慎
s3_rows.append(make_row(8, [c('A8', 4, 92)]))
s3_rows.append(make_row(9, [c('A9', 1, 93), c('B9', 0, 94)]))
s3_rows.append(make_row(10, [c('A10', 1, 95), c('B10', 0, 96)]))
s3_rows.append(make_row(11, [c('A11', 1, 97), c('B11', 0, 98)]))
s3_rows.append(make_row(12, [c('A12', 1, 99), c('B12', 0, 100)]))
sheet3_content = make_sheet('\n'.join(s3_rows), col_widths=[(1,1,28),(2,2,50),(3,3,22)])

# =====================================================================
# SHEET 4: 财报框架指引
# =====================================================================
s4_rows = []
s4_rows.append(make_row(1, [c('A1', 4, 101)]))
s4_rows.append(make_row(2, [c('A2', 4, 102)]))
s4_rows.append(make_row(3, [c('A3', 1, 103), c('B3', 0, 104)]))
s4_rows.append(make_row(4, [c('A4', 1, 105), c('B4', 0, 106)]))
s4_rows.append(make_row(5, [c('A5', 1, 107), c('B5', 0, 108)]))
s4_rows.append(make_row(6, [c('A6', 4, 109)]))
s4_rows.append(make_row(7, [c('A7', 1, 110), c('B7', 0, 111)]))
s4_rows.append(make_row(8, [c('A8', 1, 112), c('B8', 0, 113)]))
s4_rows.append(make_row(9, [c('A9', 1, 114), c('B9', 0, 115)]))
s4_rows.append(make_row(10, [c('A10', 1, 116), c('B10', 0, 117)]))
s4_rows.append(make_row(11, [c('A11', 1, 118), c('B11', 0, 119)]))
sheet4_content = make_sheet('\n'.join(s4_rows), col_widths=[(1,1,28),(2,2,52)])

# =====================================================================
# SHEET 5: 决策流程卡指引
# =====================================================================
s5_rows = []
s5_rows.append(make_row(1, [c('A1', 4, 120)]))
s5_rows.append(make_row(2, [c('A2', 4, 121)]))
s5_rows.append(make_row(3, [c('A3', 4, 31), c('B3', 4, 122), c('C3', 4, 123), c('D3', 4, 124)]))
s5_rows.append(make_row(4, [c('A4', 1, 125), c('B4', 0, 126), c('C4', 0, 127), c('D4', 0, 128)]))
s5_rows.append(make_row(5, [c('A5', 1, 129), c('B5', 0, 130), c('C5', 0, 131), c('D5', 0, 132)]))
s5_rows.append(make_row(6, [c('A6', 1, 133), c('B6', 0, 134), c('C6', 0, 135), c('D6', 0, 136)]))
s5_rows.append(make_row(7, [c('A7', 1, 137), c('B7', 0, 138), c('C7', 0, 139), c('D7', 0, 140)]))
s5_rows.append(make_row(8, [c('A8', 1, 141), c('B8', 0, 142), c('C8', 0, 143), c('D8', 0, 144)]))
s5_rows.append(make_row(9, [c('A9', 1, 145), c('B9', 0, 146), c('C9', 0, 147), c('D9', 0, 148)]))
s5_rows.append(make_row(10, [c('A10', 1, 149), c('B10', 0, 150), c('C10', 0, 151), c('D10', 0, 152)]))
s5_rows.append(make_row(11, [c('A11', 1, 153), c('B11', 0, 154), c('C11', 0, 155), c('D11', 0, 156)]))
s5_rows.append(make_row(12, [c('A12', 4, 157)]))
s5_rows.append(make_row(13, [c('A13', 1, 158)]))
s5_rows.append(make_row(14, [c('A14', 1, 159)]))
s5_rows.append(make_row(15, [c('A15', 1, 160)]))
s5_rows.append(make_row(16, [c('A16', 1, 161)]))
sheet5_content = make_sheet('\n'.join(s5_rows), col_widths=[(1,1,20),(2,2,30),(3,3,30),(4,4,24)])

# =====================================================================
# WRITE ALL FILES
# =====================================================================
with open(f'{BASE}/xl/worksheets/sheet1.xml', 'w', encoding='utf-8') as f:
    f.write(sheet1_content)
with open(f'{BASE}/xl/worksheets/sheet2.xml', 'w', encoding='utf-8') as f:
    f.write(sheet2_content)
with open(f'{BASE}/xl/worksheets/sheet3.xml', 'w', encoding='utf-8') as f:
    f.write(sheet3_content)
with open(f'{BASE}/xl/worksheets/sheet4.xml', 'w', encoding='utf-8') as f:
    f.write(sheet4_content)
with open(f'{BASE}/xl/worksheets/sheet5.xml', 'w', encoding='utf-8') as f:
    f.write(sheet5_content)
with open(f'{BASE}/xl/sharedStrings.xml', 'w', encoding='utf-8') as f:
    f.write(build_shared_strings())

# Configuration files
workbook_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheets>
    <sheet name="表单总览" sheetId="1" r:id="rId1"/>
    <sheet name="分析工具箱指引" sheetId="2" r:id="rId4"/>
    <sheet name="K线图鉴指引" sheetId="3" r:id="rId5"/>
    <sheet name="财报框架指引" sheetId="4" r:id="rId6"/>
    <sheet name="决策流程卡指引" sheetId="5" r:id="rId7"/>
  </sheets>
  <calcPr calcId="0"/>
</workbook>'''

workbook_rels = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1"
    Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet"
    Target="worksheets/sheet1.xml"/>
  <Relationship Id="rId2"
    Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles"
    Target="styles.xml"/>
  <Relationship Id="rId3"
    Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings"
    Target="sharedStrings.xml"/>
  <Relationship Id="rId4"
    Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet"
    Target="worksheets/sheet2.xml"/>
  <Relationship Id="rId5"
    Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet"
    Target="worksheets/sheet3.xml"/>
  <Relationship Id="rId6"
    Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet"
    Target="worksheets/sheet4.xml"/>
  <Relationship Id="rId7"
    Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet"
    Target="worksheets/sheet5.xml"/>
</Relationships>'''

content_types = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml"  ContentType="application/xml"/>
  <Override PartName="/xl/workbook.xml"
    ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
  <Override PartName="/xl/worksheets/sheet1.xml"
    ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet2.xml"
    ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet3.xml"
    ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet4.xml"
    ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet5.xml"
    ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/styles.xml"
    ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>
  <Override PartName="/xl/sharedStrings.xml"
    ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/>
</Types>'''

with open(f'{BASE}/xl/workbook.xml', 'w', encoding='utf-8') as f:
    f.write(workbook_xml)
with open(f'{BASE}/xl/_rels/workbook.xml.rels', 'w', encoding='utf-8') as f:
    f.write(workbook_rels)
with open(f'{BASE}/[Content_Types].xml', 'w', encoding='utf-8') as f:
    f.write(content_types)

print("All files written successfully!")
print(f"Total shared strings: {len(STR)}")
