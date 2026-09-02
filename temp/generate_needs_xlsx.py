#!/usr/bin/env python3
"""Generate 01_Needs_Analysis.xlsx for the course demo."""

import sys
sys.path.insert(0, 'C:/Users/Administrator/.claude/skills/Excel表格处理/scripts')

import os
import zipfile
from shared_strings_builder import build_xml as build_shared_strings

# Output path
OUT_PATH = 'D:/新课开发/证卷/2-基金权益类产品营销净值化时代的诚实营销与预期管理/09_成果demo/01_Needs_Analysis.xlsx'
os.makedirs(os.path.dirname(OUT_PATH), exist_ok=True)

# All unique strings for the needs analysis table
STRINGS = [
    "学员编号", "姓名", "所属团队", "学历", "入行年限", "过往基金销售年限",
    "当前主要痛点", "期望收获", "过往培训体验",
    "S001", "张伟", "增长团队", "本科", "2年", "1年",
    "客户问历史收益时只能回答数字，不知道怎么转到风险提示",
    "学会在回答收益的同时主动做风险提示",
    "参加过基金从业资格考试，但对销售场景应用帮助不大",
    "S002", "李娜", "平台团队", "硕士", "3年", "2年",
    "客户亏损后打电话来，不知道怎么沟通，经常被投诉",
    "掌握客户亏损时的标准沟通话术",
    "之前公司内部培训过产品知识，但没学过客户沟通",
    "S003", "王芳", "商业化团队", "1年",
    "第一次卖权益类产品，客户问波动率完全不知道怎么解释",
    "能用通俗语言解释波动率",
    "新人培训，主要学产品知识和合规",
    "S004", "刘强", "客户要赎回时只会说长期持有，不知道问原因",
    "学会用问题探询客户真实原因再给建议",
    "有几次被客户带着走，赎回后才发现是别的原因",
    "S005", "陈静", "0.5年",
    "净值型产品和理财的区别讲不清楚，客户觉得一样",
    "能清晰说明净值型产品和理财的本质区别",
    "有销售经验但净值型产品是新规则",
    "S006", "赵鹏",
    "老公说被骗了，客户因为家人反对想赎回，不知道怎么处理",
    "学会应对第三方干扰的赎回请求",
    "之前没遇到过这种情况",
    "S007", "孙丽", "老客户推荐朋友来，新客户问基金会不会亏本，不知道怎么答",
    "学会在新客户面前建立信任并正确解释风险",
    "老客户维护没问题，开拓新客户时不会说话",
    "S008", "周杰", "客户投诉说当时说收益稳定，但实际亏了15%，不知道怎么处理",
    "掌握投诉处理的标准流程",
    "经历过投诉但处理得很被动",
    "S009", "吴婷", "不知道怎么主动联系客户，总是被动等客户来问",
    "建立定期主动联系客户的习惯",
    "习惯等客户主动，不擅长主动出击",
    "S010", "郑浩", "向客户解释最大回撤时，客户说那不是要亏很多就吓跑了",
    "学会用类比让客户理解最大回撤",
    "讲得太专业，客户听不懂",
    "S011", "黄磊", "客户说别的基金收益更高，不知道怎么比较和回应",
    "学会不单纯比较收益，而是引导客户看风险收益特征",
    "之前都是直接比较收益数字",
    "S012", "马云", "知道要管理预期，但不知道具体怎么做，没有标准流程",
    "掌握预期管理四步法的操作流程",
    "有一些模糊的认识，但没有系统化",
]

# Build string index map
str_to_idx = {s: i for i, s in enumerate(STRINGS)}

def s(idx):
    return f'<c r="{{r}}" t="s" s="4"><v>{idx}</v></c>'

# Generate sharedStrings.xml
shared_strings_xml = build_shared_strings(STRINGS)

# Template minimal xlsx
TEMPLATE_DIR = 'C:/Users/Administrator/.claude/skills/Excel表格处理/templates/minimal_xlsx'

# Build sheet1.xml
rows = []

# Header row
header_cells = [
    f'<c r="A1" t="s" s="4"><v>{str_to_idx["学员编号"]}</v></c>',
    f'<c r="B1" t="s" s="4"><v>{str_to_idx["姓名"]}</v></c>',
    f'<c r="C1" t="s" s="4"><v>{str_to_idx["所属团队"]}</v></c>',
    f'<c r="D1" t="s" s="4"><v>{str_to_idx["学历"]}</v></c>',
    f'<c r="E1" t="s" s="4"><v>{str_to_idx["入行年限"]}</v></c>',
    f'<c r="F1" t="s" s="4"><v>{str_to_idx["过往基金销售年限"]}</v></c>',
    f'<c r="G1" t="s" s="4"><v>{str_to_idx["当前主要痛点"]}</v></c>',
    f'<c r="H1" t="s" s="4"><v>{str_to_idx["期望收获"]}</v></c>',
    f'<c r="I1" t="s" s="4"><v>{str_to_idx["过往培训体验"]}</v></c>',
]
rows.append('<row r="1">' + ''.join(header_cells) + '</row>')

# Data rows (12 students)
students = [
    ("S001", "张伟", "增长团队", "本科", "2年", "1年",
     "客户问历史收益时只能回答数字，不知道怎么转到风险提示",
     "学会在回答收益的同时主动做风险提示",
     "参加过基金从业资格考试，但对销售场景应用帮助不大"),
    ("S002", "李娜", "平台团队", "硕士", "3年", "2年",
     "客户亏损后打电话来，不知道怎么沟通，经常被投诉",
     "掌握客户亏损时的标准沟通话术",
     "之前公司内部培训过产品知识，但没学过客户沟通"),
    ("S003", "王芳", "商业化团队", "本科", "1年", "1年",
     "第一次卖权益类产品，客户问波动率完全不知道怎么解释",
     "能用通俗语言解释波动率",
     "新人培训，主要学产品知识和合规"),
    ("S004", "刘强", "增长团队", "本科", "2年", "2年",
     "客户要赎回时只会说长期持有，不知道问原因",
     "学会用问题探询客户真实原因再给建议",
     "有几次被客户带着走，赎回后才发现是别的原因"),
    ("S005", "陈静", "平台团队", "硕士", "3年", "0.5年",
     "净值型产品和理财的区别讲不清楚，客户觉得一样",
     "能清晰说明净值型产品和理财的本质区别",
     "有销售经验但净值型产品是新规则"),
    ("S006", "赵鹏", "商业化团队", "本科", "1年", "1年",
     "老公说被骗了，客户因为家人反对想赎回，不知道怎么处理",
     "学会应对第三方干扰的赎回请求",
     "之前没遇到过这种情况"),
    ("S007", "孙丽", "增长团队", "本科", "2年", "2年",
     "老客户推荐朋友来，新客户问基金会不会亏本，不知道怎么答",
     "学会在新客户面前建立信任并正确解释风险",
     "老客户维护没问题，开拓新客户时不会说话"),
    ("S008", "周杰", "平台团队", "硕士", "3年", "1年",
     "客户投诉说当时说收益稳定，但实际亏了15%，不知道怎么处理",
     "掌握投诉处理的标准流程",
     "经历过投诉但处理得很被动"),
    ("S009", "吴婷", "商业化团队", "本科", "2年", "2年",
     "不知道怎么主动联系客户，总是被动等客户来问",
     "建立定期主动联系客户的习惯",
     "习惯等客户主动，不擅长主动出击"),
    ("S010", "郑浩", "增长团队", "本科", "1年", "1年",
     "向客户解释最大回撤时，客户说那不是要亏很多就吓跑了",
     "学会用类比让客户理解最大回撤",
     "讲得太专业，客户听不懂"),
    ("S011", "黄磊", "平台团队", "硕士", "3年", "2年",
     "客户说别的基金收益更高，不知道怎么比较和回应",
     "学会不单纯比较收益，而是引导客户看风险收益特征",
     "之前都是直接比较收益数字"),
    ("S012", "马云", "商业化团队", "本科", "2年", "2年",
     "知道要管理预期，但不知道具体怎么做，没有标准流程",
     "掌握预期管理四步法的操作流程",
     "有一些模糊的认识，但没有系统化"),
]

for row_num, student in enumerate(students, start=2):
    cells = []
    for col_num, value in enumerate(student, start=1):
        col_letter = chr(64 + col_num)  # A=1, B=2, etc.
        idx = str_to_idx[value]
        cells.append(f'<c r="{col_letter}{row_num}" t="s" s="0"><v>{idx}</v></c>')
    rows.append(f'<row r="{row_num}">' + ''.join(cells) + '</row>')

sheet1_content = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView workbookViewId="0"/>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols>
    <col min="1" max="1" width="10" customWidth="1"/>
    <col min="2" max="2" width="8" customWidth="1"/>
    <col min="3" max="3" width="12" customWidth="1"/>
    <col min="4" max="4" width="6" customWidth="1"/>
    <col min="5" max="5" width="12" customWidth="1"/>
    <col min="6" max="6" width="18" customWidth="1"/>
    <col min="7" max="7" width="50" customWidth="1"/>
    <col min="8" max="8" width="45" customWidth="1"/>
    <col min="9" max="9" width="45" customWidth="1"/>
  </cols>
  <sheetData>
    {chr(10).join(rows)}
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

# Read template files
with open(f'{TEMPLATE_DIR}/[Content_Types].xml', 'r') as f:
    content_types = f.read()

with open(f'{TEMPLATE_DIR}/_rels/.rels', 'r') as f:
    rels_root = f.read()

with open(f'{TEMPLATE_DIR}/xl/workbook.xml', 'r') as f:
    workbook = f.read()

with open(f'{TEMPLATE_DIR}/xl/_rels/workbook.xml.rels', 'r') as f:
    workbook_rels = f.read()

with open(f'{TEMPLATE_DIR}/xl/worksheets/sheet1.xml', 'r') as f:
    orig_sheet = f.read()

# Create the xlsx file
with zipfile.ZipFile(OUT_PATH, 'w', zipfile.ZIP_DEFLATED) as zf:
    zf.writestr('[Content_Types].xml', content_types)
    zf.writestr('_rels/.rels', rels_root)
    zf.writestr('xl/workbook.xml', workbook)
    zf.writestr('xl/_rels/workbook.xml.rels', workbook_rels)
    zf.writestr('xl/sharedStrings.xml', shared_strings_xml)
    zf.writestr('xl/worksheets/sheet1.xml', sheet1_content)
    # Copy styles.xml from template
    with open(f'{TEMPLATE_DIR}/xl/styles.xml', 'rb') as f:
        styles = f.read()
    zf.writestr('xl/styles.xml', styles)

print(f'Created: {OUT_PATH}')
