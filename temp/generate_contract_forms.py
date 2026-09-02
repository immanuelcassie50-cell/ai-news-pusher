#!/usr/bin/env python3
"""
Generate contract risk identification Excel forms for the course:
"一纸合同：普通人的合同风险识别与自保术"
Using XML-based xlsx creation approach.
"""

import os
import shutil
import zipfile
from xml.etree import ElementTree as ET

# Template directory
SKILL_DIR = "C:/Users/Administrator/.claude/skills/Excel表格处理"
TEMPLATE_DIR = f"{SKILL_DIR}/templates/minimal_xlsx"
OUTPUT_DIR = "D:/新课开发/法学/01-一纸合同：普通人的合同风险识别与自保术/配套表单"

# Pre-defined style indices from minimal_xlsx template
STYLE = {
    'default': 0,
    'input': 1,           # Blue font, general
    'formula': 2,         # Black font, general
    'cross_sheet': 3,     # Green font, general
    'header': 4,          # Bold header
    'currency_input': 5,  # Blue font, $#,##0
    'currency_formula': 6,# Black font, $#,##0
    'pct_input': 7,       # Blue font, 0.0%
    'pct_formula': 8,     # Black font, 0.0%
    'int_input': 9,       # Blue font, #,##0
    'int_formula': 10,    # Black font, #,##0
    'year': 11,           # Blue font, year format
    'highlight': 12,      # Blue font + yellow fill
}

def copy_template():
    """Copy minimal_xlsx template to working directory"""
    work_dir = "/tmp/xlsx_contract_work"
    if os.path.exists(work_dir):
        shutil.rmtree(work_dir)
    shutil.copytree(TEMPLATE_DIR, work_dir)
    return work_dir

def col_letter(n):
    """Convert 1-based column number to Excel letter"""
    result = ""
    while n > 0:
        n, rem = divmod(n - 1, 26)
        result = chr(65 + rem) + result
    return result

def build_shared_strings(strings):
    """Build sharedStrings.xml content"""
    unique_count = len(strings)
    count = unique_count
    items = []
    for s in strings:
        # Escape special XML characters
        s = s.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;')
        items.append(f'  <si><t>{s}</t></si>')
    return f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="{count}" uniqueCount="{unique_count}">
{chr(10).join(items)}
</sst>'''

def build_sheet_header(sheet_name, subtitle=""):
    """Build standard sheet header rows"""
    rows = []
    # Title row
    rows.append(f'''  <row r="1" ht="24" customHeight="1">
    <c r="A1" t="s" s="{STYLE['header']}"><v>0</v></c>
  </row>''')
    # Subtitle row if provided
    if subtitle:
        rows.append(f'''  <row r="2" ht="16" customHeight="1">
    <c r="A2" t="s" s="{STYLE['formula']}"><v>1</v></c>
  </row>''')
    return '\n'.join(rows)

def build_checkbox_row(row_num, label_idx, risk_idx, note_idx, status_idx):
    """Build a standard checkbox evaluation row"""
    return f'''  <row r="{row_num}">
    <c r="A{row_num}" t="s" s="{STYLE['formula']}"><v>{label_idx}</v></c>
    <c r="B{row_num}" t="s" s="{STYLE['input']}"><v>{risk_idx}</v></c>
    <c r="C{row_num}" t="s" s="{STYLE['input']}"><v>{note_idx}</v></c>
    <c r="D{row_num}" t="s" s="{STYLE['formula']}"><v>{status_idx}</v></c>
  </row>'''

def create_blank_workbook():
    """Create 配套表单_空表.xlsx with all 7 sheets"""
    work_dir = copy_template()

    # All strings for this workbook
    strings = [
        "合同五步扫描表",                                    # 0 - Sheet title
        "版本 v1.0  |  使用说明：请逐项填写，完成后对照风险等级评估",  # 1 - Subtitle
        "步骤",                                             # 2
        "扫描内容",                                          # 3
        "检查要点",                                          # 4
        "风险提示",                                          # 5
        "核查结果",                                          # 6
        "备注",                                             # 7
        "第一步：主体核实 - 确认对方身份与资质",              # 8
        "第二步：标的与要求 - 确认合同标的与双方要求",        # 9
        "第三步：金额与时间 - 确认价款支付与履行期限",        # 10
        "第四步：违约责任 - 确认违约情形与承担责任",          # 11
        "第五步：退出机制 - 确认退出条件与争议解决",          # 12
        "主体资格是否合法有效？",                            # 13
        "签约人是否有授权？",                                # 14
        "特殊行业是否有资质要求？",                          # 15
        "合同标的是否明确具体？",                            # 16
        "质量标准是否有约定？",                              # 17
        "交付验收标准是否清晰？",                            # 18
        "价款金额是否确定？",                                # 19
        "付款方式与时间是否明确？",                          # 20
        "履行期限是否清晰？",                                # 21
        "逾期履行责任是否约定？",                            # 22
        "违约情形是否列举完整？",                            # 23
        "违约金比例是否合理？",                              # 24
        "损害赔偿范围是否明确？",                            # 25
        "解除合同条件是否清晰？",                            # 26
        "退出程序是否复杂？",                                # 27
        "争议解决方式是否约定？",                            # 28
        "管辖法院或仲裁机构是否明确？",                      # 29
        "主体核实检查表",                                    # 30
        "核实项目",                                          # 31
        "核实方法",                                          # 32
        "核实结果",                                          # 33
        "风险等级",                                          # 34
        "身份证件核验（自然人）",                            # 35
        "营业执照核验（企业）",                              # 36
        "授权委托书核验",                                    # 37
        "特殊资质证照核验",                                  # 38
        "信用与诉讼记录查询",                                # 39
        "金额时间核查表",                                    # 40
        "核查项目",                                          # 41
        "合同约定",                                          # 42
        "市场参考",                                          # 43
        "差异分析",                                          # 44
        "风险判断",                                          # 45
        "合同总价",                                          # 46
        "单价约定",                                          # 47
        "付款节点",                                          # 48
        "付款方式",                                          # 49
        "履行起始日",                                        # 50
        "履行截止日",                                        # 51
        "阶段性里程碑",                                      # 52
        "逾期违约金",                                        # 53
        "违约责任评估表",                                    # 54
        "条款内容",                                          # 55
        "法律规定",                                          # 56
        "合理区间",                                          # 57
        "评估结果",                                          # 58
        "建议",                                              # 59
        "违约金上限（合同总价%）",                            # 60
        "逾期付款利率",                                      # 61
        "逾期履行违约金",                                    # 62
        "单方解除权约定",                                    # 63
        "根本违约认定标准",                                  # 64
        "争议解决评估表",                                    # 65
        "条款评估",                                          # 66
        "默认规则",                                          # 67
        "约定情况",                                          # 68
        "对我方利弊",                                        # 69
        "首选方案",                                          # 70
        "协商底线",                                          # 71
        "诉讼 vs 仲裁选择",                                  # 72
        "管辖法院约定",                                      # 73
        "证据保全条款",                                      # 74
        "法律适用约定",                                      # 75
        "退出机制设计表",                                    # 76
        "机制类型",                                          # 77
        "触发条件",                                          # 78
        "行使期限",                                          # 79
        "法律后果",                                          # 80
        "设计建议",                                          # 81
        "正常退出（合同履行完毕）",                          # 82
        "协商解除条件",                                      # 83
        "单方解除权（守约方）",                               # 84
        "单方解除权（违约方）",                               # 85
        "情势变更退出",                                      # 86
        "不可抗力退出",                                      # 87
        "条款谈判记录表",                                    # 88
        "序号",                                              # 89
        "原条款内容",                                        # 90
        "对方立场",                                          # 91
        "我方立场",                                          # 92
        "谈判结果",                                          # 93
        "最终约定",                                          # 94
        "1",                                                 # 95
        "2",                                                 # 96
        "3",                                                 # 97
        "4",                                                 # 98
        "5",                                                 # 99
        "6",                                                 # 100
        "7",                                                 # 101
        "8",                                                 # 102
        "9",                                                 # 103
        "10",                                                # 104
        "高",                                                # 105
        "中",                                                # 106
        "低",                                                # 107
        "无风险",                                            # 108
        "安全",                                              # 109
        "警示",                                              # 110
        "危险",                                              # 111
        "高风险",                                            # 112
        "风险可接受",                                        # 113
        "需谈判改善",                                        # 114
        "建议拒绝",                                          # 115
        "是",                                                # 116
        "否",                                                # 117
        "待确认",                                            # 118
        "不适用",                                            # 119
    ]

    # Write shared strings
    with open(f"{work_dir}/xl/sharedStrings.xml", 'w', encoding='utf-8') as f:
        f.write(build_shared_strings(strings))

    # Configure workbook with 7 sheets
    workbook_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheets>
    <sheet name="合同五步扫描表" sheetId="1" r:id="rId1"/>
    <sheet name="主体核实检查表" sheetId="2" r:id="rId4"/>
    <sheet name="金额时间核查表" sheetId="3" r:id="rId5"/>
    <sheet name="违约责任评估表" sheetId="4" r:id="rId6"/>
    <sheet name="争议解决评估表" sheetId="5" r:id="rId7"/>
    <sheet name="退出机制设计表" sheetId="6" r:id="rId8"/>
    <sheet name="条款谈判记录表" sheetId="7" r:id="rId9"/>
  </sheets>
  <calcPr calcId="0"/>
</workbook>'''
    with open(f"{work_dir}/xl/workbook.xml", 'w', encoding='utf-8') as f:
        f.write(workbook_xml)

    # Update workbook.xml.rels
    rels_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
  <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml"/>
  <Relationship Id="rId4" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet2.xml"/>
  <Relationship Id="rId5" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet3.xml"/>
  <Relationship Id="rId6" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet4.xml"/>
  <Relationship Id="rId7" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet5.xml"/>
  <Relationship Id="rId8" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet6.xml"/>
  <Relationship Id="rId9" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet7.xml"/>
</Relationships>'''
    with open(f"{work_dir}/xl/_rels/workbook.xml.rels", 'w', encoding='utf-8') as f:
        f.write(rels_xml)

    # Update Content_Types.xml
    content_types_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
  <Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet2.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet3.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet4.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet5.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet6.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet7.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>
  <Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/>
</Types>'''
    with open(f"{work_dir}/[Content_Types].xml", 'w', encoding='utf-8') as f:
        f.write(content_types_xml)

    # Create 7 sheet XML files
    sheets_data = create_all_sheets_blank(strings)
    for i, sheet_xml in enumerate(sheets_data, 1):
        with open(f"{work_dir}/xl/worksheets/sheet{i}.xml", 'w', encoding='utf-8') as f:
            f.write(sheet_xml)

    # Pack the xlsx file
    output_path = f"{OUTPUT_DIR}/配套表单_空表.xlsx"
    pack_xlsx(work_dir, output_path)
    print(f"Created: {output_path}")

def create_all_sheets_blank(strings):
    """Create all 7 sheet XML contents for blank workbook"""

    # Sheet 1: 合同五步扫描表
    sheet1 = create_sheet1_blank(strings)

    # Sheet 2: 主体核实检查表
    sheet2 = create_sheet2_blank(strings)

    # Sheet 3: 金额时间核查表
    sheet3 = create_sheet3_blank(strings)

    # Sheet 4: 违约责任评估表
    sheet4 = create_sheet4_blank(strings)

    # Sheet 5: 争议解决评估表
    sheet5 = create_sheet5_blank(strings)

    # Sheet 6: 退出机制设计表
    sheet6 = create_sheet6_blank(strings)

    # Sheet 7: 条款谈判记录表
    sheet7 = create_sheet7_blank(strings)

    return [sheet1, sheet2, sheet3, sheet4, sheet5, sheet6, sheet7]

def create_sheet1_blank(strings):
    """合同五步扫描表 - Main 5-step scanning form"""
    return f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView workbookViewId="0">
      <pane ySplit="4" topLeftCell="A5" activePane="bottomLeft" state="frozen"/>
    </sheetView>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols>
    <col min="1" max="1" width="20" customWidth="1"/>
    <col min="2" max="2" width="35" customWidth="1"/>
    <col min="3" max="3" width="40" customWidth="1"/>
    <col min="4" max="4" width="30" customWidth="1"/>
    <col min="5" max="5" width="25" customWidth="1"/>
  </cols>
  <sheetData>
    <row r="1" ht="28" customHeight="1">
      <c r="A1" t="s" s="{STYLE['header']}"><v>0</v></c>
    </row>
    <row r="2" ht="18" customHeight="1">
      <c r="A2" t="s" s="{STYLE['formula']}"><v>1</v></c>
    </row>
    <row r="3" ht="6"/>
    <row r="4" ht="18" customHeight="1">
      <c r="A4" t="s" s="{STYLE['header']}"><v>2</v></c>
      <c r="B4" t="s" s="{STYLE['header']}"><v>3</v></c>
      <c r="C4" t="s" s="{STYLE['header']}"><v>4</v></c>
      <c r="D4" t="s" s="{STYLE['header']}"><v>5</v></c>
      <c r="E4" t="s" s="{STYLE['header']}"><v>6</v></c>
    </row>
    <row r="5" ht="18">
      <c r="A5" t="s" s="{STYLE['formula']}"><v>8</v></c>
      <c r="B5" t="s" s="{STYLE['input']}"><v>13</v></c>
      <c r="C5" t="s" s="{STYLE['input']}"><v>14</v></c>
      <c r="D5" t="s" s="{STYLE['input']}"><v>15</v></c>
      <c r="E5" t="s" s="{STYLE['input']}"><v>7</v></c>
    </row>
    <row r="6" ht="18">
      <c r="A6" t="s" s="{STYLE['formula']}"><v>9</v></c>
      <c r="B6" t="s" s="{STYLE['input']}"><v>16</v></c>
      <c r="C6" t="s" s="{STYLE['input']}"><v>17</v></c>
      <c r="D6" t="s" s="{STYLE['input']}"><v>18</v></c>
      <c r="E6" t="s" s="{STYLE['input']}"><v>7</v></c>
    </row>
    <row r="7" ht="18">
      <c r="A7" t="s" s="{STYLE['formula']}"><v>10</v></c>
      <c r="B7" t="s" s="{STYLE['input']}"><v>19</v></c>
      <c r="C7" t="s" s="{STYLE['input']}"><v>20</v></c>
      <c r="D7" t="s" s="{STYLE['input']}"><v>21</v></c>
      <c r="E7" t="s" s="{STYLE['input']}"><v>7</v></c>
    </row>
    <row r="8" ht="18">
      <c r="A8" t="s" s="{STYLE['formula']}"><v>11</v></c>
      <c r="B8" t="s" s="{STYLE['input']}"><v>22</v></c>
      <c r="C8" t="s" s="{STYLE['input']}"><v>23</v></c>
      <c r="D8" t="s" s="{STYLE['input']}"><v>24</v></c>
      <c r="E8" t="s" s="{STYLE['input']}"><v>7</v></c>
    </row>
    <row r="9" ht="18">
      <c r="A9" t="s" s="{STYLE['formula']}"><v>12</v></c>
      <c r="B9" t="s" s="{STYLE['input']}"><v>25</v></c>
      <c r="C9" t="s" s="{STYLE['input']}"><v>26</v></c>
      <c r="D9" t="s" s="{STYLE['input']}"><v>27</v></c>
      <c r="E9" t="s" s="{STYLE['input']}"><v>7</v></c>
    </row>
  </sheetData>
  <printOptions horizontalCentered="1"/>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
  <printOptions horizontalCentered="1"/>
</worksheet>'''

def create_sheet2_blank(strings):
    """主体核实检查表 - Subject verification checklist"""
    return f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView workbookViewId="0">
      <pane ySplit="4" topLeftCell="A5" activePane="bottomLeft" state="frozen"/>
    </sheetView>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols>
    <col min="1" max="1" width="22" customWidth="1"/>
    <col min="2" max="2" width="30" customWidth="1"/>
    <col min="3" max="3" width="25" customWidth="1"/>
    <col min="4" max="4" width="15" customWidth="1"/>
    <col min="5" max="5" width="20" customWidth="1"/>
  </cols>
  <sheetData>
    <row r="1" ht="28" customHeight="1">
      <c r="A1" t="s" s="{STYLE['header']}"><v>30</v></c>
    </row>
    <row r="2" ht="18" customHeight="1">
      <c r="A2" t="s" s="{STYLE['formula']}"><v>1</v></c>
    </row>
    <row r="3" ht="6"/>
    <row r="4" ht="18" customHeight="1">
      <c r="A4" t="s" s="{STYLE['header']}"><v>31</v></c>
      <c r="B4" t="s" s="{STYLE['header']}"><v>32</v></c>
      <c r="C4" t="s" s="{STYLE['header']}"><v>33</v></c>
      <c r="D4" t="s" s="{STYLE['header']}"><v>34</v></c>
      <c r="E4" t="s" s="{STYLE['header']}"><v>7</v></c>
    </row>
    <row r="5" ht="18">
      <c r="A5" t="s" s="{STYLE['formula']}"><v>35</v></c>
      <c r="B5" t="s" s="{STYLE['input']}"><v>32</v></c>
      <c r="C5" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="D5" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="E5" t="s" s="{STYLE['input']}"><v>7</v></c>
    </row>
    <row r="6" ht="18">
      <c r="A6" t="s" s="{STYLE['formula']}"><v>36</v></c>
      <c r="B6" t="s" s="{STYLE['input']}"><v>32</v></c>
      <c r="C6" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="D6" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="E6" t="s" s="{STYLE['input']}"><v>7</v></c>
    </row>
    <row r="7" ht="18">
      <c r="A7" t="s" s="{STYLE['formula']}"><v>37</v></c>
      <c r="B7" t="s" s="{STYLE['input']}"><v>32</v></c>
      <c r="C7" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="D7" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="E7" t="s" s="{STYLE['input']}"><v>7</v></c>
    </row>
    <row r="8" ht="18">
      <c r="A8" t="s" s="{STYLE['formula']}"><v>38</v></c>
      <c r="B8" t="s" s="{STYLE['input']}"><v>32</v></c>
      <c r="C8" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="D8" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="E8" t="s" s="{STYLE['input']}"><v>7</v></c>
    </row>
    <row r="9" ht="18">
      <c r="A9" t="s" s="{STYLE['formula']}"><v>39</v></c>
      <c r="B9" t="s" s="{STYLE['input']}"><v>32</v></c>
      <c r="C9" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="D9" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="E9" t="s" s="{STYLE['input']}"><v>7</v></c>
    </row>
  </sheetData>
  <printOptions horizontalCentered="1"/>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

def create_sheet3_blank(strings):
    """金额时间核查表 - Amount/Time review form"""
    return f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView workbookViewId="0">
      <pane ySplit="4" topLeftCell="A5" activePane="bottomLeft" state="frozen"/>
    </sheetView>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols>
    <col min="1" max="1" width="20" customWidth="1"/>
    <col min="2" max="2" width="25" customWidth="1"/>
    <col min="3" max="3" width="25" customWidth="1"/>
    <col min="4" max="4" width="25" customWidth="1"/>
    <col min="5" max="5" width="18" customWidth="1"/>
  </cols>
  <sheetData>
    <row r="1" ht="28" customHeight="1">
      <c r="A1" t="s" s="{STYLE['header']}"><v>40</v></c>
    </row>
    <row r="2" ht="18" customHeight="1">
      <c r="A2" t="s" s="{STYLE['formula']}"><v>1</v></c>
    </row>
    <row r="3" ht="6"/>
    <row r="4" ht="18" customHeight="1">
      <c r="A4" t="s" s="{STYLE['header']}"><v>41</v></c>
      <c r="B4" t="s" s="{STYLE['header']}"><v>42</v></c>
      <c r="C4" t="s" s="{STYLE['header']}"><v>43</v></c>
      <c r="D4" t="s" s="{STYLE['header']}"><v>44</v></c>
      <c r="E4" t="s" s="{STYLE['header']}"><v>45</v></c>
    </row>
    <row r="5" ht="18">
      <c r="A5" t="s" s="{STYLE['formula']}"><v>46</v></c>
      <c r="B5" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="C5" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="D5" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="E5" t="s" s="{STYLE['input']}"><v>7</v></c>
    </row>
    <row r="6" ht="18">
      <c r="A6" t="s" s="{STYLE['formula']}"><v>47</v></c>
      <c r="B6" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="C6" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="D6" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="E6" t="s" s="{STYLE['input']}"><v>7</v></c>
    </row>
    <row r="7" ht="18">
      <c r="A7" t="s" s="{STYLE['formula']}"><v>48</v></c>
      <c r="B7" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="C7" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="D7" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="E7" t="s" s="{STYLE['input']}"><v>7</v></c>
    </row>
    <row r="8" ht="18">
      <c r="A8" t="s" s="{STYLE['formula']}"><v>49</v></c>
      <c r="B8" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="C8" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="D8" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="E8" t="s" s="{STYLE['input']}"><v>7</v></c>
    </row>
    <row r="9" ht="18">
      <c r="A9" t="s" s="{STYLE['formula']}"><v>50</v></c>
      <c r="B9" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="C9" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="D9" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="E9" t="s" s="{STYLE['input']}"><v>7</v></c>
    </row>
    <row r="10" ht="18">
      <c r="A10" t="s" s="{STYLE['formula']}"><v>51</v></c>
      <c r="B10" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="C10" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="D10" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="E10" t="s" s="{STYLE['input']}"><v>7</v></c>
    </row>
    <row r="11" ht="18">
      <c r="A11" t="s" s="{STYLE['formula']}"><v>52</v></c>
      <c r="B11" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="C11" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="D11" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="E11" t="s" s="{STYLE['input']}"><v>7</v></c>
    </row>
    <row r="12" ht="18">
      <c r="A12" t="s" s="{STYLE['formula']}"><v>53</v></c>
      <c r="B12" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="C12" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="D12" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="E12" t="s" s="{STYLE['input']}"><v>7</v></c>
    </row>
  </sheetData>
  <printOptions horizontalCentered="1"/>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

def create_sheet4_blank(strings):
    """违约责任评估表 - Liability assessment form"""
    return f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView workbookViewId="0">
      <pane ySplit="4" topLeftCell="A5" activePane="bottomLeft" state="frozen"/>
    </sheetView>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols>
    <col min="1" max="1" width="25" customWidth="1"/>
    <col min="2" max="2" width="35" customWidth="1"/>
    <col min="3" max="3" width="25" customWidth="1"/>
    <col min="4" max="4" width="20" customWidth="1"/>
    <col min="5" max="5" width="25" customWidth="1"/>
  </cols>
  <sheetData>
    <row r="1" ht="28" customHeight="1">
      <c r="A1" t="s" s="{STYLE['header']}"><v>54</v></c>
    </row>
    <row r="2" ht="18" customHeight="1">
      <c r="A2" t="s" s="{STYLE['formula']}"><v>1</v></c>
    </row>
    <row r="3" ht="6"/>
    <row r="4" ht="18" customHeight="1">
      <c r="A4" t="s" s="{STYLE['header']}"><v>55</v></c>
      <c r="B4" t="s" s="{STYLE['header']}"><v>56</v></c>
      <c r="C4" t="s" s="{STYLE['header']}"><v>57</v></c>
      <c r="D4" t="s" s="{STYLE['header']}"><v>58</v></c>
      <c r="E4" t="s" s="{STYLE['header']}"><v>59</v></c>
    </row>
    <row r="5" ht="18">
      <c r="A5" t="s" s="{STYLE['formula']}"><v>60</v></c>
      <c r="B5" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="C5" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="D5" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="E5" t="s" s="{STYLE['input']}"><v>7</v></c>
    </row>
    <row r="6" ht="18">
      <c r="A6" t="s" s="{STYLE['formula']}"><v>61</v></c>
      <c r="B6" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="C6" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="D6" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="E6" t="s" s="{STYLE['input']}"><v>7</v></c>
    </row>
    <row r="7" ht="18">
      <c r="A7" t="s" s="{STYLE['formula']}"><v>62</v></c>
      <c r="B7" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="C7" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="D7" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="E7" t="s" s="{STYLE['input']}"><v>7</v></c>
    </row>
    <row r="8" ht="18">
      <c r="A8" t="s" s="{STYLE['formula']}"><v>63</v></c>
      <c r="B8" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="C8" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="D8" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="E8" t="s" s="{STYLE['input']}"><v>7</v></c>
    </row>
    <row r="9" ht="18">
      <c r="A9" t="s" s="{STYLE['formula']}"><v>64</v></c>
      <c r="B9" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="C9" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="D9" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="E9" t="s" s="{STYLE['input']}"><v>7</v></c>
    </row>
  </sheetData>
  <printOptions horizontalCentered="1"/>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

def create_sheet5_blank(strings):
    """争议解决评估表 - Dispute resolution assessment"""
    return f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView workbookViewId="0">
      <pane ySplit="4" topLeftCell="A5" activePane="bottomLeft" state="frozen"/>
    </sheetView>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols>
    <col min="1" max="1" width="22" customWidth="1"/>
    <col min="2" max="2" width="30" customWidth="1"/>
    <col min="3" max="3" width="22" customWidth="1"/>
    <col min="4" max="4" width="20" customWidth="1"/>
    <col min="5" max="5" width="22" customWidth="1"/>
  </cols>
  <sheetData>
    <row r="1" ht="28" customHeight="1">
      <c r="A1" t="s" s="{STYLE['header']}"><v>65</v></c>
    </row>
    <row r="2" ht="18" customHeight="1">
      <c r="A2" t="s" s="{STYLE['formula']}"><v>1</v></c>
    </row>
    <row r="3" ht="6"/>
    <row r="4" ht="18" customHeight="1">
      <c r="A4" t="s" s="{STYLE['header']}"><v>66</v></c>
      <c r="B4" t="s" s="{STYLE['header']}"><v>67</v></c>
      <c r="C4" t="s" s="{STYLE['header']}"><v>68</v></c>
      <c r="D4" t="s" s="{STYLE['header']}"><v>69</v></c>
      <c r="E4" t="s" s="{STYLE['header']}"><v>70</v></c>
    </row>
    <row r="5" ht="18">
      <c r="A5" t="s" s="{STYLE['formula']}"><v>72</v></c>
      <c r="B5" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="C5" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="D5" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="E5" t="s" s="{STYLE['input']}"><v>7</v></c>
    </row>
    <row r="6" ht="18">
      <c r="A6" t="s" s="{STYLE['formula']}"><v>73</v></c>
      <c r="B6" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="C6" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="D6" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="E6" t="s" s="{STYLE['input']}"><v>7</v></c>
    </row>
    <row r="7" ht="18">
      <c r="A7" t="s" s="{STYLE['formula']}"><v>74</v></c>
      <c r="B7" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="C7" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="D7" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="E7" t="s" s="{STYLE['input']}"><v>7</v></c>
    </row>
    <row r="8" ht="18">
      <c r="A8" t="s" s="{STYLE['formula']}"><v>75</v></c>
      <c r="B8" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="C8" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="D8" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="E8" t="s" s="{STYLE['input']}"><v>7</v></c>
    </row>
  </sheetData>
  <printOptions horizontalCentered="1"/>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

def create_sheet6_blank(strings):
    """退出机制设计表 - Exit mechanism design form"""
    return f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView workbookViewId="0">
      <pane ySplit="4" topLeftCell="A5" activePane="bottomLeft" state="frozen"/>
    </sheetView>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols>
    <col min="1" max="1" width="22" customWidth="1"/>
    <col min="2" max="2" width="30" customWidth="1"/>
    <col min="3" max="3" width="22" customWidth="1"/>
    <col min="4" max="4" width="25" customWidth="1"/>
    <col min="5" max="5" width="25" customWidth="1"/>
  </cols>
  <sheetData>
    <row r="1" ht="28" customHeight="1">
      <c r="A1" t="s" s="{STYLE['header']}"><v>76</v></c>
    </row>
    <row r="2" ht="18" customHeight="1">
      <c r="A2" t="s" s="{STYLE['formula']}"><v>1</v></c>
    </row>
    <row r="3" ht="6"/>
    <row r="4" ht="18" customHeight="1">
      <c r="A4" t="s" s="{STYLE['header']}"><v>77</v></c>
      <c r="B4" t="s" s="{STYLE['header']}"><v>78</v></c>
      <c r="C4" t="s" s="{STYLE['header']}"><v>79</v></c>
      <c r="D4" t="s" s="{STYLE['header']}"><v>80</v></c>
      <c r="E4" t="s" s="{STYLE['header']}"><v>81</v></c>
    </row>
    <row r="5" ht="18">
      <c r="A5" t="s" s="{STYLE['formula']}"><v>82</v></c>
      <c r="B5" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="C5" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="D5" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="E5" t="s" s="{STYLE['input']}"><v>7</v></c>
    </row>
    <row r="6" ht="18">
      <c r="A6" t="s" s="{STYLE['formula']}"><v>83</v></c>
      <c r="B6" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="C6" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="D6" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="E6" t="s" s="{STYLE['input']}"><v>7</v></c>
    </row>
    <row r="7" ht="18">
      <c r="A7" t="s" s="{STYLE['formula']}"><v>84</v></c>
      <c r="B7" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="C7" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="D7" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="E7" t="s" s="{STYLE['input']}"><v>7</v></c>
    </row>
    <row r="8" ht="18">
      <c r="A8" t="s" s="{STYLE['formula']}"><v>85</v></c>
      <c r="B8" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="C8" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="D8" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="E8" t="s" s="{STYLE['input']}"><v>7</v></c>
    </row>
    <row r="9" ht="18">
      <c r="A9" t="s" s="{STYLE['formula']}"><v>86</v></c>
      <c r="B9" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="C9" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="D9" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="E9" t="s" s="{STYLE['input']}"><v>7</v></c>
    </row>
    <row r="10" ht="18">
      <c r="A10" t="s" s="{STYLE['formula']}"><v>87</v></c>
      <c r="B10" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="C10" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="D10" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="E10" t="s" s="{STYLE['input']}"><v>7</v></c>
    </row>
  </sheetData>
  <printOptions horizontalCentered="1"/>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

def create_sheet7_blank(strings):
    """条款谈判记录表 - Negotiation record form"""
    return f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView workbookViewId="0">
      <pane ySplit="4" topLeftCell="A5" activePane="bottomLeft" state="frozen"/>
    </sheetView>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols>
    <col min="1" max="1" width="6" customWidth="1"/>
    <col min="2" max="2" width="30" customWidth="1"/>
    <col min="3" max="3" width="22" customWidth="1"/>
    <col min="4" max="4" width="22" customWidth="1"/>
    <col min="5" max="5" width="25" customWidth="1"/>
    <col min="6" max="6" width="25" customWidth="1"/>
  </cols>
  <sheetData>
    <row r="1" ht="28" customHeight="1">
      <c r="A1" t="s" s="{STYLE['header']}"><v>88</v></c>
    </row>
    <row r="2" ht="18" customHeight="1">
      <c r="A2" t="s" s="{STYLE['formula']}"><v>1</v></c>
    </row>
    <row r="3" ht="6"/>
    <row r="4" ht="18" customHeight="1">
      <c r="A4" t="s" s="{STYLE['header']}"><v>89</v></c>
      <c r="B4" t="s" s="{STYLE['header']}"><v>90</v></c>
      <c r="C4" t="s" s="{STYLE['header']}"><v>91</v></c>
      <c r="D4" t="s" s="{STYLE['header']}"><v>92</v></c>
      <c r="E4" t="s" s="{STYLE['header']}"><v>93</v></c>
      <c r="F4" t="s" s="{STYLE['header']}"><v>94</v></c>
    </row>
    <row r="5" ht="18">
      <c r="A5" t="s" s="{STYLE['formula']}"><v>95</v></c>
      <c r="B5" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="C5" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="D5" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="E5" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="F5" t="s" s="{STYLE['input']}"><v>7</v></c>
    </row>
    <row r="6" ht="18">
      <c r="A6" t="s" s="{STYLE['formula']}"><v>96</v></c>
      <c r="B6" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="C6" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="D6" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="E6" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="F6" t="s" s="{STYLE['input']}"><v>7</v></c>
    </row>
    <row r="7" ht="18">
      <c r="A7" t="s" s="{STYLE['formula']}"><v>97</v></c>
      <c r="B7" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="C7" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="D7" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="E7" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="F7" t="s" s="{STYLE['input']}"><v>7</v></c>
    </row>
    <row r="8" ht="18">
      <c r="A8" t="s" s="{STYLE['formula']}"><v>98</v></c>
      <c r="B8" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="C8" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="D8" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="E8" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="F8" t="s" s="{STYLE['input']}"><v>7</v></c>
    </row>
    <row r="9" ht="18">
      <c r="A9" t="s" s="{STYLE['formula']}"><v>99</v></c>
      <c r="B9" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="C9" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="D9" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="E9" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="F9" t="s" s="{STYLE['input']}"><v>7</v></c>
    </row>
    <row r="10" ht="18">
      <c r="A10" t="s" s="{STYLE['formula']}"><v>100</v></c>
      <c r="B10" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="C10" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="D10" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="E10" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="F10" t="s" s="{STYLE['input']}"><v>7</v></c>
    </row>
    <row r="11" ht="18">
      <c r="A11" t="s" s="{STYLE['formula']}"><v>101</v></c>
      <c r="B11" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="C11" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="D11" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="E11" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="F11" t="s" s="{STYLE['input']}"><v>7</v></c>
    </row>
    <row r="12" ht="18">
      <c r="A12" t="s" s="{STYLE['formula']}"><v>102</v></c>
      <c r="B12" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="C12" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="D12" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="E12" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="F12" t="s" s="{STYLE['input']}"><v>7</v></c>
    </row>
    <row r="13" ht="18">
      <c r="A13" t="s" s="{STYLE['formula']}"><v>103</v></c>
      <c r="B13" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="C13" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="D13" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="E13" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="F13" t="s" s="{STYLE['input']}"><v>7</v></c>
    </row>
    <row r="14" ht="18">
      <c r="A14" t="s" s="{STYLE['formula']}"><v>104</v></c>
      <c r="B14" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="C14" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="D14" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="E14" t="s" s="{STYLE['input']}"><v>7</v></c>
      <c r="F14" t="s" s="{STYLE['input']}"><v>7</v></c>
    </row>
  </sheetData>
  <printOptions horizontalCentered="1"/>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

def pack_xlsx(work_dir, output_path):
    """Pack directory into xlsx file"""
    with zipfile.ZipFile(output_path, 'w', zipfile.ZIP_DEFLATED) as zf:
        for root, dirs, files in os.walk(work_dir):
            for file in files:
                file_path = os.path.join(root, file)
                arc_name = os.path.relpath(file_path, work_dir)
                zf.write(file_path, arc_name)

if __name__ == "__main__":
    create_blank_workbook()
    print("Done!")
