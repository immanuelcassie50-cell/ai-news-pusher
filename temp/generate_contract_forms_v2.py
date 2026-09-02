#!/usr/bin/env python3
"""
Generate all contract risk identification Excel forms:
1. 配套表单_空表.xlsx - Blank forms
2. 配套表单_填好版.xlsx - Filled with sample data
3. 表单使用指引.xlsx - User guide
"""

import os
import shutil
import zipfile

# Template directory
SKILL_DIR = "C:/Users/Administrator/.claude/skills/Excel表格处理"
TEMPLATE_DIR = f"{SKILL_DIR}/templates/minimal_xlsx"
OUTPUT_DIR = "D:/新课开发/法学/01-一纸合同：普通人的合同风险识别与自保术/配套表单"

# Pre-defined style indices
STYLE = {
    'default': 0,
    'input': 1,
    'formula': 2,
    'cross_sheet': 3,
    'header': 4,
    'currency_input': 5,
    'currency_formula': 6,
    'pct_input': 7,
    'pct_formula': 8,
    'int_input': 9,
    'int_formula': 10,
    'year': 11,
    'highlight': 12,
}

def copy_template():
    work_dir = "/tmp/xlsx_contract_work"
    if os.path.exists(work_dir):
        shutil.rmtree(work_dir)
    shutil.copytree(TEMPLATE_DIR, work_dir)
    return work_dir

def build_shared_strings(strings):
    unique_count = len(strings)
    count = unique_count
    items = []
    for s in strings:
        s = s.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;')
        items.append(f'  <si><t>{s}</t></si>')
    return f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="{count}" uniqueCount="{unique_count}">
{chr(10).join(items)}
</sst>'''

def pack_xlsx(work_dir, output_path):
    with zipfile.ZipFile(output_path, 'w', zipfile.ZIP_DEFLATED) as zf:
        for root, dirs, files in os.walk(work_dir):
            for file in files:
                file_path = os.path.join(root, file)
                arc_name = os.path.relpath(file_path, work_dir)
                zf.write(file_path, arc_name)

# ============================================================
# BLANK FORMS (7 sheets)
# ============================================================

def create_blank_workbook():
    work_dir = copy_template()

    strings = [
        # 0-7: Common headers
        "合同五步扫描表", "版本 v1.0  |  使用说明：请逐项填写，完成后对照风险等级评估",
        "步骤", "扫描内容", "检查要点", "风险提示", "核查结果", "备注",
        # 8-12: Five steps
        "第一步：主体核实 - 确认对方身份与资质",
        "第二步：标的与要求 - 确认合同标的与双方要求",
        "第三步：金额与时间 - 确认价款支付与履行期限",
        "第四步：违约责任 - 确认违约情形与承担责任",
        "第五步：退出机制 - 确认退出条件与争议解决",
        # 13-29: Check items for each step
        "主体资格是否合法有效？", "签约人是否有授权？", "特殊行业是否有资质要求？",
        "合同标的是否明确具体？", "质量标准是否有约定？", "交付验收标准是否清晰？",
        "价款金额是否确定？", "付款方式与时间是否明确？", "履行期限是否清晰？", "逾期履行责任是否约定？",
        "违约情形是否列举完整？", "违约金比例是否合理？", "损害赔偿范围是否明确？",
        "解除合同条件是否清晰？", "退出程序是否复杂？", "争议解决方式是否约定？", "管辖法院或仲裁机构是否明确？",
        # 30-39: Subject verification
        "主体核实检查表", "核实项目", "核实方法", "核实结果", "风险等级",
        "身份证件核验（自然人）", "营业执照核验（企业）", "授权委托书核验",
        "特殊资质证照核验", "信用与诉讼记录查询",
        # 40-53: Amount/Time review
        "金额时间核查表", "核查项目", "合同约定", "市场参考", "差异分析", "风险判断",
        "合同总价", "单价约定", "付款节点", "付款方式", "履行起始日", "履行截止日",
        "阶段性里程碑", "逾期违约金",
        # 54-64: Liability assessment
        "违约责任评估表", "条款内容", "法律规定", "合理区间", "评估结果", "建议",
        "违约金上限（合同总价%）", "逾期付款利率", "逾期履行违约金", "单方解除权约定", "根本违约认定标准",
        # 65-75: Dispute resolution
        "争议解决评估表", "条款评估", "默认规则", "约定情况", "对我方利弊", "首选方案", "协商底线",
        "诉讼 vs 仲裁选择", "管辖法院约定", "证据保全条款", "法律适用约定",
        # 76-87: Exit mechanism
        "退出机制设计表", "机制类型", "触发条件", "行使期限", "法律后果", "设计建议",
        "正常退出（合同履行完毕）", "协商解除条件", "单方解除权（守约方）", "单方解除权（违约方）",
        "情势变更退出", "不可抗力退出",
        # 88-94: Negotiation record
        "条款谈判记录表", "序号", "原条款内容", "对方立场", "我方立场", "谈判结果", "最终约定",
        # 95-119: Numbers, risk levels, status
        "1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
        "高", "中", "低", "无风险",
        "安全", "警示", "危险", "高风险",
        "风险可接受", "需谈判改善", "建议拒绝",
        "是", "否", "待确认", "不适用",
    ]

    with open(f"{work_dir}/xl/sharedStrings.xml", 'w', encoding='utf-8') as f:
        f.write(build_shared_strings(strings))

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

    # Create all 7 sheets
    sheets = create_all_sheets_blank()
    for i, sheet_xml in enumerate(sheets, 1):
        with open(f"{work_dir}/xl/worksheets/sheet{i}.xml", 'w', encoding='utf-8') as f:
            f.write(sheet_xml)

    output_path = f"{OUTPUT_DIR}/配套表单_空表.xlsx"
    pack_xlsx(work_dir, output_path)
    print(f"Created: {output_path}")

def create_all_sheets_blank():
    s = STYLE
    return [
        # Sheet 1: 合同五步扫描表
        f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
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
    <row r="1" ht="28" customHeight="1"><c r="A1" t="s" s="{s['header']}"><v>0</v></c></row>
    <row r="2" ht="18" customHeight="1"><c r="A2" t="s" s="{s['formula']}"><v>1</v></c></row>
    <row r="3" ht="6"/>
    <row r="4" ht="18" customHeight="1">
      <c r="A4" t="s" s="{s['header']}"><v>2</v></c>
      <c r="B4" t="s" s="{s['header']}"><v>3</v></c>
      <c r="C4" t="s" s="{s['header']}"><v>4</v></c>
      <c r="D4" t="s" s="{s['header']}"><v>5</v></c>
      <c r="E4" t="s" s="{s['header']}"><v>6</v></c>
    </row>
    <row r="5" ht="18">
      <c r="A5" t="s" s="{s['formula']}"><v>8</v></c>
      <c r="B5" t="s" s="{s['input']}"><v>13</v></c>
      <c r="C5" t="s" s="{s['input']}"><v>14</v></c>
      <c r="D5" t="s" s="{s['input']}"><v>15</v></c>
      <c r="E5" t="s" s="{s['input']}"><v>7</v></c>
    </row>
    <row r="6" ht="18">
      <c r="A6" t="s" s="{s['formula']}"><v>9</v></c>
      <c r="B6" t="s" s="{s['input']}"><v>16</v></c>
      <c r="C6" t="s" s="{s['input']}"><v>17</v></c>
      <c r="D6" t="s" s="{s['input']}"><v>18</v></c>
      <c r="E6" t="s" s="{s['input']}"><v>7</v></c>
    </row>
    <row r="7" ht="18">
      <c r="A7" t="s" s="{s['formula']}"><v>10</v></c>
      <c r="B7" t="s" s="{s['input']}"><v>19</v></c>
      <c r="C7" t="s" s="{s['input']}"><v>20</v></c>
      <c r="D7" t="s" s="{s['input']}"><v>21</v></c>
      <c r="E7" t="s" s="{s['input']}"><v>7</v></c>
    </row>
    <row r="8" ht="18">
      <c r="A8" t="s" s="{s['formula']}"><v>11</v></c>
      <c r="B8" t="s" s="{s['input']}"><v>22</v></c>
      <c r="C8" t="s" s="{s['input']}"><v>23</v></c>
      <c r="D8" t="s" s="{s['input']}"><v>24</v></c>
      <c r="E8" t="s" s="{s['input']}"><v>7</v></c>
    </row>
    <row r="9" ht="18">
      <c r="A9" t="s" s="{s['formula']}"><v>12</v></c>
      <c r="B9" t="s" s="{s['input']}"><v>25</v></c>
      <c r="C9" t="s" s="{s['input']}"><v>26</v></c>
      <c r="D9" t="s" s="{s['input']}"><v>27</v></c>
      <c r="E9" t="s" s="{s['input']}"><v>7</v></c>
    </row>
  </sheetData>
  <printOptions horizontalCentered="1"/>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>''',
        # Sheet 2: 主体核实检查表
        f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
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
    <row r="1" ht="28" customHeight="1"><c r="A1" t="s" s="{s['header']}"><v>30</v></c></row>
    <row r="2" ht="18" customHeight="1"><c r="A2" t="s" s="{s['formula']}"><v>1</v></c></row>
    <row r="3" ht="6"/>
    <row r="4" ht="18" customHeight="1">
      <c r="A4" t="s" s="{s['header']}"><v>31</v></c>
      <c r="B4" t="s" s="{s['header']}"><v>32</v></c>
      <c r="C4" t="s" s="{s['header']}"><v>33</v></c>
      <c r="D4" t="s" s="{s['header']}"><v>34</v></c>
      <c r="E4" t="s" s="{s['header']}"><v>7</v></c>
    </row>
    <row r="5" ht="18">
      <c r="A5" t="s" s="{s['formula']}"><v>35</v></c>
      <c r="B5" t="s" s="{s['input']}"><v>7</v></c>
      <c r="C5" t="s" s="{s['input']}"><v>7</v></c>
      <c r="D5" t="s" s="{s['input']}"><v>7</v></c>
      <c r="E5" t="s" s="{s['input']}"><v>7</v></c>
    </row>
    <row r="6" ht="18">
      <c r="A6" t="s" s="{s['formula']}"><v>36</v></c>
      <c r="B6" t="s" s="{s['input']}"><v>7</v></c>
      <c r="C6" t="s" s="{s['input']}"><v>7</v></c>
      <c r="D6" t="s" s="{s['input']}"><v>7</v></c>
      <c r="E6" t="s" s="{s['input']}"><v>7</v></c>
    </row>
    <row r="7" ht="18">
      <c r="A7" t="s" s="{s['formula']}"><v>37</v></c>
      <c r="B7" t="s" s="{s['input']}"><v>7</v></c>
      <c r="C7" t="s" s="{s['input']}"><v>7</v></c>
      <c r="D7" t="s" s="{s['input']}"><v>7</v></c>
      <c r="E7" t="s" s="{s['input']}"><v>7</v></c>
    </row>
    <row r="8" ht="18">
      <c r="A8" t="s" s="{s['formula']}"><v>38</v></c>
      <c r="B8" t="s" s="{s['input']}"><v>7</v></c>
      <c r="C8" t="s" s="{s['input']}"><v>7</v></c>
      <c r="D8" t="s" s="{s['input']}"><v>7</v></c>
      <c r="E8" t="s" s="{s['input']}"><v>7</v></c>
    </row>
    <row r="9" ht="18">
      <c r="A9" t="s" s="{s['formula']}"><v>39</v></c>
      <c r="B9" t="s" s="{s['input']}"><v>7</v></c>
      <c r="C9" t="s" s="{s['input']}"><v>7</v></c>
      <c r="D9" t="s" s="{s['input']}"><v>7</v></c>
      <c r="E9" t="s" s="{s['input']}"><v>7</v></c>
    </row>
  </sheetData>
  <printOptions horizontalCentered="1"/>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>''',
        # Sheet 3: 金额时间核查表
        f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
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
    <row r="1" ht="28" customHeight="1"><c r="A1" t="s" s="{s['header']}"><v>40</v></c></row>
    <row r="2" ht="18" customHeight="1"><c r="A2" t="s" s="{s['formula']}"><v>1</v></c></row>
    <row r="3" ht="6"/>
    <row r="4" ht="18" customHeight="1">
      <c r="A4" t="s" s="{s['header']}"><v>41</v></c>
      <c r="B4" t="s" s="{s['header']}"><v>42</v></c>
      <c r="C4" t="s" s="{s['header']}"><v>43</v></c>
      <c r="D4" t="s" s="{s['header']}"><v>44</v></c>
      <c r="E4" t="s" s="{s['header']}"><v>45</v></c>
    </row>
    <row r="5" ht="18"><c r="A5" t="s" s="{s['formula']}"><v>46</v></c><c r="B5" t="s" s="{s['input']}"><v>7</v></c><c r="C5" t="s" s="{s['input']}"><v>7</v></c><c r="D5" t="s" s="{s['input']}"><v>7</v></c><c r="E5" t="s" s="{s['input']}"><v>7</v></c></row>
    <row r="6" ht="18"><c r="A6" t="s" s="{s['formula']}"><v>47</v></c><c r="B6" t="s" s="{s['input']}"><v>7</v></c><c r="C6" t="s" s="{s['input']}"><v>7</v></c><c r="D6" t="s" s="{s['input']}"><v>7</v></c><c r="E6" t="s" s="{s['input']}"><v>7</v></c></row>
    <row r="7" ht="18"><c r="A7" t="s" s="{s['formula']}"><v>48</v></c><c r="B7" t="s" s="{s['input']}"><v>7</v></c><c r="C7" t="s" s="{s['input']}"><v>7</v></c><c r="D7" t="s" s="{s['input']}"><v>7</v></c><c r="E7" t="s" s="{s['input']}"><v>7</v></c></row>
    <row r="8" ht="18"><c r="A8" t="s" s="{s['formula']}"><v>49</v></c><c r="B8" t="s" s="{s['input']}"><v>7</v></c><c r="C8" t="s" s="{s['input']}"><v>7</v></c><c r="D8" t="s" s="{s['input']}"><v>7</v></c><c r="E8" t="s" s="{s['input']}"><v>7</v></c></row>
    <row r="9" ht="18"><c r="A9" t="s" s="{s['formula']}"><v>50</v></c><c r="B9" t="s" s="{s['input']}"><v>7</v></c><c r="C9" t="s" s="{s['input']}"><v>7</v></c><c r="D9" t="s" s="{s['input']}"><v>7</v></c><c r="E9" t="s" s="{s['input']}"><v>7</v></c></row>
    <row r="10" ht="18"><c r="A10" t="s" s="{s['formula']}"><v>51</v></c><c r="B10" t="s" s="{s['input']}"><v>7</v></c><c r="C10" t="s" s="{s['input']}"><v>7</v></c><c r="D10" t="s" s="{s['input']}"><v>7</v></c><c r="E10" t="s" s="{s['input']}"><v>7</v></c></row>
    <row r="11" ht="18"><c r="A11" t="s" s="{s['formula']}"><v>52</v></c><c r="B11" t="s" s="{s['input']}"><v>7</v></c><c r="C11" t="s" s="{s['input']}"><v>7</v></c><c r="D11" t="s" s="{s['input']}"><v>7</v></c><c r="E11" t="s" s="{s['input']}"><v>7</v></c></row>
    <row r="12" ht="18"><c r="A12" t="s" s="{s['formula']}"><v>53</v></c><c r="B12" t="s" s="{s['input']}"><v>7</v></c><c r="C12" t="s" s="{s['input']}"><v>7</v></c><c r="D12" t="s" s="{s['input']}"><v>7</v></c><c r="E12" t="s" s="{s['input']}"><v>7</v></c></row>
  </sheetData>
  <printOptions horizontalCentered="1"/>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>''',
        # Sheet 4: 违约责任评估表
        f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
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
    <row r="1" ht="28" customHeight="1"><c r="A1" t="s" s="{s['header']}"><v>54</v></c></row>
    <row r="2" ht="18" customHeight="1"><c r="A2" t="s" s="{s['formula']}"><v>1</v></c></row>
    <row r="3" ht="6"/>
    <row r="4" ht="18" customHeight="1">
      <c r="A4" t="s" s="{s['header']}"><v>55</v></c>
      <c r="B4" t="s" s="{s['header']}"><v>56</v></c>
      <c r="C4" t="s" s="{s['header']}"><v>57</v></c>
      <c r="D4" t="s" s="{s['header']}"><v>58</v></c>
      <c r="E4" t="s" s="{s['header']}"><v>59</v></c>
    </row>
    <row r="5" ht="18"><c r="A5" t="s" s="{s['formula']}"><v>60</v></c><c r="B5" t="s" s="{s['input']}"><v>7</v></c><c r="C5" t="s" s="{s['input']}"><v>7</v></c><c r="D5" t="s" s="{s['input']}"><v>7</v></c><c r="E5" t="s" s="{s['input']}"><v>7</v></c></row>
    <row r="6" ht="18"><c r="A6" t="s" s="{s['formula']}"><v>61</v></c><c r="B6" t="s" s="{s['input']}"><v>7</v></c><c r="C6" t="s" s="{s['input']}"><v>7</v></c><c r="D6" t="s" s="{s['input']}"><v>7</v></c><c r="E6" t="s" s="{s['input']}"><v>7</v></c></row>
    <row r="7" ht="18"><c r="A7" t="s" s="{s['formula']}"><v>62</v></c><c r="B7" t="s" s="{s['input']}"><v>7</v></c><c r="C7" t="s" s="{s['input']}"><v>7</v></c><c r="D7" t="s" s="{s['input']}"><v>7</v></c><c r="E7" t="s" s="{s['input']}"><v>7</v></c></row>
    <row r="8" ht="18"><c r="A8" t="s" s="{s['formula']}"><v>63</v></c><c r="B8" t="s" s="{s['input']}"><v>7</v></c><c r="C8" t="s" s="{s['input']}"><v>7</v></c><c r="D8" t="s" s="{s['input']}"><v>7</v></c><c r="E8" t="s" s="{s['input']}"><v>7</v></c></row>
    <row r="9" ht="18"><c r="A9" t="s" s="{s['formula']}"><v>64</v></c><c r="B9" t="s" s="{s['input']}"><v>7</v></c><c r="C9" t="s" s="{s['input']}"><v>7</v></c><c r="D9" t="s" s="{s['input']}"><v>7</v></c><c r="E9" t="s" s="{s['input']}"><v>7</v></c></row>
  </sheetData>
  <printOptions horizontalCentered="1"/>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>''',
        # Sheet 5: 争议解决评估表
        f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
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
    <row r="1" ht="28" customHeight="1"><c r="A1" t="s" s="{s['header']}"><v>65</v></c></row>
    <row r="2" ht="18" customHeight="1"><c r="A2" t="s" s="{s['formula']}"><v>1</v></c></row>
    <row r="3" ht="6"/>
    <row r="4" ht="18" customHeight="1">
      <c r="A4" t="s" s="{s['header']}"><v>66</v></c>
      <c r="B4" t="s" s="{s['header']}"><v>67</v></c>
      <c r="C4" t="s" s="{s['header']}"><v>68</v></c>
      <c r="D4" t="s" s="{s['header']}"><v>69</v></c>
      <c r="E4" t="s" s="{s['header']}"><v>70</v></c>
    </row>
    <row r="5" ht="18"><c r="A5" t="s" s="{s['formula']}"><v>72</v></c><c r="B5" t="s" s="{s['input']}"><v>7</v></c><c r="C5" t="s" s="{s['input']}"><v>7</v></c><c r="D5" t="s" s="{s['input']}"><v>7</v></c><c r="E5" t="s" s="{s['input']}"><v>7</v></c></row>
    <row r="6" ht="18"><c r="A6" t="s" s="{s['formula']}"><v>73</v></c><c r="B6" t="s" s="{s['input']}"><v>7</v></c><c r="C6" t="s" s="{s['input']}"><v>7</v></c><c r="D6" t="s" s="{s['input']}"><v>7</v></c><c r="E6" t="s" s="{s['input']}"><v>7</v></c></row>
    <row r="7" ht="18"><c r="A7" t="s" s="{s['formula']}"><v>74</v></c><c r="B7" t="s" s="{s['input']}"><v>7</v></c><c r="C7" t="s" s="{s['input']}"><v>7</v></c><c r="D7" t="s" s="{s['input']}"><v>7</v></c><c r="E7" t="s" s="{s['input']}"><v>7</v></c></row>
    <row r="8" ht="18"><c r="A8" t="s" s="{s['formula']}"><v>75</v></c><c r="B8" t="s" s="{s['input']}"><v>7</v></c><c r="C8" t="s" s="{s['input']}"><v>7</v></c><c r="D8" t="s" s="{s['input']}"><v>7</v></c><c r="E8" t="s" s="{s['input']}"><v>7</v></c></row>
  </sheetData>
  <printOptions horizontalCentered="1"/>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>''',
        # Sheet 6: 退出机制设计表
        f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
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
    <row r="1" ht="28" customHeight="1"><c r="A1" t="s" s="{s['header']}"><v>76</v></c></row>
    <row r="2" ht="18" customHeight="1"><c r="A2" t="s" s="{s['formula']}"><v>1</v></c></row>
    <row r="3" ht="6"/>
    <row r="4" ht="18" customHeight="1">
      <c r="A4" t="s" s="{s['header']}"><v>77</v></c>
      <c r="B4" t="s" s="{s['header']}"><v>78</v></c>
      <c r="C4" t="s" s="{s['header']}"><v>79</v></c>
      <c r="D4" t="s" s="{s['header']}"><v>80</v></c>
      <c r="E4" t="s" s="{s['header']}"><v>81</v></c>
    </row>
    <row r="5" ht="18"><c r="A5" t="s" s="{s['formula']}"><v>82</v></c><c r="B5" t="s" s="{s['input']}"><v>7</v></c><c r="C5" t="s" s="{s['input']}"><v>7</v></c><c r="D5" t="s" s="{s['input']}"><v>7</v></c><c r="E5" t="s" s="{s['input']}"><v>7</v></c></row>
    <row r="6" ht="18"><c r="A6" t="s" s="{s['formula']}"><v>83</v></c><c r="B6" t="s" s="{s['input']}"><v>7</v></c><c r="C6" t="s" s="{s['input']}"><v>7</v></c><c r="D6" t="s" s="{s['input']}"><v>7</v></c><c r="E6" t="s" s="{s['input']}"><v>7</v></c></row>
    <row r="7" ht="18"><c r="A7" t="s" s="{s['formula']}"><v>84</v></c><c r="B7" t="s" s="{s['input']}"><v>7</v></c><c r="C7" t="s" s="{s['input']}"><v>7</v></c><c r="D7" t="s" s="{s['input']}"><v>7</v></c><c r="E7" t="s" s="{s['input']}"><v>7</v></c></row>
    <row r="8" ht="18"><c r="A8" t="s" s="{s['formula']}"><v>85</v></c><c r="B8" t="s" s="{s['input']}"><v>7</v></c><c r="C8" t="s" s="{s['input']}"><v>7</v></c><c r="D8" t="s" s="{s['input']}"><v>7</v></c><c r="E8" t="s" s="{s['input']}"><v>7</v></c></row>
    <row r="9" ht="18"><c r="A9" t="s" s="{s['formula']}"><v>86</v></c><c r="B9" t="s" s="{s['input']}"><v>7</v></c><c r="C9" t="s" s="{s['input']}"><v>7</v></c><c r="D9" t="s" s="{s['input']}"><v>7</v></c><c r="E9" t="s" s="{s['input']}"><v>7</v></c></row>
    <row r="10" ht="18"><c r="A10" t="s" s="{s['formula']}"><v>87</v></c><c r="B10" t="s" s="{s['input']}"><v>7</v></c><c r="C10" t="s" s="{s['input']}"><v>7</v></c><c r="D10" t="s" s="{s['input']}"><v>7</v></c><c r="E10" t="s" s="{s['input']}"><v>7</v></c></row>
  </sheetData>
  <printOptions horizontalCentered="1"/>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>''',
        # Sheet 7: 条款谈判记录表
        f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
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
    <row r="1" ht="28" customHeight="1"><c r="A1" t="s" s="{s['header']}"><v>88</v></c></row>
    <row r="2" ht="18" customHeight="1"><c r="A2" t="s" s="{s['formula']}"><v>1</v></c></row>
    <row r="3" ht="6"/>
    <row r="4" ht="18" customHeight="1">
      <c r="A4" t="s" s="{s['header']}"><v>89</v></c>
      <c r="B4" t="s" s="{s['header']}"><v>90</v></c>
      <c r="C4" t="s" s="{s['header']}"><v>91</v></c>
      <c r="D4" t="s" s="{s['header']}"><v>92</v></c>
      <c r="E4" t="s" s="{s['header']}"><v>93</v></c>
      <c r="F4" t="s" s="{s['header']}"><v>94</v></c>
    </row>
    <row r="5" ht="18"><c r="A5" t="s" s="{s['formula']}"><v>95</v></c><c r="B5" t="s" s="{s['input']}"><v>7</v></c><c r="C5" t="s" s="{s['input']}"><v>7</v></c><c r="D5" t="s" s="{s['input']}"><v>7</v></c><c r="E5" t="s" s="{s['input']}"><v>7</v></c><c r="F5" t="s" s="{s['input']}"><v>7</v></c></row>
    <row r="6" ht="18"><c r="A6" t="s" s="{s['formula']}"><v>96</v></c><c r="B6" t="s" s="{s['input']}"><v>7</v></c><c r="C6" t="s" s="{s['input']}"><v>7</v></c><c r="D6" t="s" s="{s['input']}"><v>7</v></c><c r="E6" t="s" s="{s['input']}"><v>7</v></c><c r="F6" t="s" s="{s['input']}"><v>7</v></c></row>
    <row r="7" ht="18"><c r="A7" t="s" s="{s['formula']}"><v>97</v></c><c r="B7" t="s" s="{s['input']}"><v>7</v></c><c r="C7" t="s" s="{s['input']}"><v>7</v></c><c r="D7" t="s" s="{s['input']}"><v>7</v></c><c r="E7" t="s" s="{s['input']}"><v>7</v></c><c r="F7" t="s" s="{s['input']}"><v>7</v></c></row>
    <row r="8" ht="18"><c r="A8" t="s" s="{s['formula']}"><v>98</v></c><c r="B8" t="s" s="{s['input']}"><v>7</v></c><c r="C8" t="s" s="{s['input']}"><v>7</v></c><c r="D8" t="s" s="{s['input']}"><v>7</v></c><c r="E8" t="s" s="{s['input']}"><v>7</v></c><c r="F8" t="s" s="{s['input']}"><v>7</v></c></row>
    <row r="9" ht="18"><c r="A9" t="s" s="{s['formula']}"><v>99</v></c><c r="B9" t="s" s="{s['input']}"><v>7</v></c><c r="C9" t="s" s="{s['input']}"><v>7</v></c><c r="D9" t="s" s="{s['input']}"><v>7</v></c><c r="E9" t="s" s="{s['input']}"><v>7</v></c><c r="F9" t="s" s="{s['input']}"><v>7</v></c></row>
    <row r="10" ht="18"><c r="A10" t="s" s="{s['formula']}"><v>100</v></c><c r="B10" t="s" s="{s['input']}"><v>7</v></c><c r="C10" t="s" s="{s['input']}"><v>7</v></c><c r="D10" t="s" s="{s['input']}"><v>7</v></c><c r="E10" t="s" s="{s['input']}"><v>7</v></c><c r="F10" t="s" s="{s['input']}"><v>7</v></c></row>
    <row r="11" ht="18"><c r="A11" t="s" s="{s['formula']}"><v>101</v></c><c r="B11" t="s" s="{s['input']}"><v>7</v></c><c r="C11" t="s" s="{s['input']}"><v>7</v></c><c r="D11" t="s" s="{s['input']}"><v>7</v></c><c r="E11" t="s" s="{s['input']}"><v>7</v></c><c r="F11" t="s" s="{s['input']}"><v>7</v></c></row>
    <row r="12" ht="18"><c r="A12" t="s" s="{s['formula']}"><v>102</v></c><c r="B12" t="s" s="{s['input']}"><v>7</v></c><c r="C12" t="s" s="{s['input']}"><v>7</v></c><c r="D12" t="s" s="{s['input']}"><v>7</v></c><c r="E12" t="s" s="{s['input']}"><v>7</v></c><c r="F12" t="s" s="{s['input']}"><v>7</v></c></row>
    <row r="13" ht="18"><c r="A13" t="s" s="{s['formula']}"><v>103</v></c><c r="B13" t="s" s="{s['input']}"><v>7</v></c><c r="C13" t="s" s="{s['input']}"><v>7</v></c><c r="D13" t="s" s="{s['input']}"><v>7</v></c><c r="E13" t="s" s="{s['input']}"><v>7</v></c><c r="F13" t="s" s="{s['input']}"><v>7</v></c></row>
    <row r="14" ht="18"><c r="A14" t="s" s="{s['formula']}"><v>104</v></c><c r="B14" t="s" s="{s['input']}"><v>7</v></c><c r="C14" t="s" s="{s['input']}"><v>7</v></c><c r="D14" t="s" s="{s['input']}"><v>7</v></c><c r="E14" t="s" s="{s['input']}"><v>7</v></c><c r="F14" t="s" s="{s['input']}"><v>7</v></c></row>
  </sheetData>
  <printOptions horizontalCentered="1"/>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>''',
    ]

# ============================================================
# FILLED VERSION (with sample data - rental contract scenario)
# ============================================================

def create_filled_workbook():
    work_dir = copy_template()

    # Extended strings for filled version
    strings = [
        # 0-7: Common headers
        "合同五步扫描表", "版本 v1.0  |  示例：租房合同场景",
        "步骤", "扫描内容", "检查要点", "风险提示", "核查结果", "备注",
        # 8-12: Five steps
        "第一步：主体核实 - 确认对方身份与资质",
        "第二步：标的与要求 - 确认合同标的与双方要求",
        "第三步：金额与时间 - 确认价款支付与履行期限",
        "第四步：违约责任 - 确认违约情形与承担责任",
        "第五步：退出机制 - 确认退出条件与争议解决",
        # 13-29: Check items
        "房东是否为房屋产权人？", "签约人是否持有效授权？", "房屋是否存在查封/抵押？",
        "房屋地址、面积、设施是否明确？", "装修标准、维修责任是否约定？", "退房时的验收标准是否清晰？",
        "租金金额、付款周期是否确定？", "押金数额、退款条件是否明确？", "租赁期限是否清晰？",
        "提前退租的违约责任是否合理？",
        "提前退租违约金是否过高？", "屋内设施损坏赔偿标准是否合理？", "押金不退的约定条件是否明确？",
        "提前解约需提前多少天通知？", "退租时的房屋交付状态要求？", "争议解决方式是否约定？", "管辖法院是否对我方有利？",
        # 30-34: Subject verification
        "主体核实检查表", "核实项目", "核实方法", "核实结果", "风险等级",
        # 35-39
        "身份证件核验（自然人）", "营业执照核验（企业）", "授权委托书核验",
        "特殊资质证照核验", "信用与诉讼记录查询",
        # 40-45: Amount/Time
        "金额时间核查表", "核查项目", "合同约定", "市场参考", "差异分析", "风险判断",
        # 46-53
        "合同总价（年租金）", "单价约定（元/月）", "付款节点", "付款方式",
        "租赁起始日", "租赁截止日", "阶段性里程碑", "逾期违约金约定",
        # 54-59: Liability
        "违约责任评估表", "条款内容", "法律规定", "合理区间", "评估结果", "建议",
        # 60-64
        "违约金上限（合同总价%）", "逾期付款利率", "逾期履行违约金", "单方解除权约定", "根本违约认定标准",
        # 65-70: Dispute
        "争议解决评估表", "条款评估", "默认规则", "约定情况", "对我方利弊", "首选方案", "协商底线",
        # 71-75
        "诉讼 vs 仲裁选择", "管辖法院约定", "证据保全条款", "法律适用约定",
        # 76-81: Exit
        "退出机制设计表", "机制类型", "触发条件", "行使期限", "法律后果", "设计建议",
        # 82-87
        "正常退出（合同履行完毕）", "协商解除条件", "单方解除权（守约方）", "单方解除权（违约方）",
        "情势变更退出", "不可抗力退出",
        # 88-94: Negotiation
        "条款谈判记录表", "序号", "原条款内容", "对方立场", "我方立场", "谈判结果", "最终约定",
        # 95-119: Numbers, levels, status
        "1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
        "高", "中", "低", "无风险",
        "安全", "警示", "危险", "高风险",
        "风险可接受", "需谈判改善", "建议拒绝",
        "是", "否", "待确认", "不适用",
        # Additional strings for sample data
        "示例：张三，身份证号 110101199001011234",  # 120
        "要求查看房产证原件，核对身份信息",  # 121
        "已核实 - 产权人本人签署",  # 122
        "低",  # 123
        "可通过房管局网站查询房屋登记信息",  # 124
        "未发现查封或抵押记录",  # 125
        "中",  # 126
        "租金 5000元/月，押一付三",  # 127
        "同地段类似房屋月租金 4500-5500元",  # 128
        "租金水平合理，在市场范围内",  # 129
        "安全",  # 130
        "提前解约需支付两个月租金",  # 131
        "合同法第227条规定",  # 132
        "一般不超过合同总价的30%",  # 133
        "风险可接受",  # 134
        "建议约定押金在退房后7日内退还",  # 135
        "首选仲裁，效率高、保密性好",  # 136
        "如对方坚持诉讼，要求约定被告所在地法院",  # 137
        "租赁期满，双方无异议则自动续约",  # 138
        "提前30天书面通知即可解除",  # 139
        "支付两个月租金作为补偿",  # 140
        "支付一个月租金作为补偿",  # 141
        "因不可抗力导致合同无法履行",  # 142
        "如地震、战争等不可抗力",  # 143
        "原条款：提前解约需支付三个月租金",  # 144
        "对方认为这是行业惯例",  # 145
        "我认为两个月已足够补偿",  # 146
        "双方协商",  # 147
        "最终约定：提前解约支付两个月租金",  # 148
        "原条款：押金不退",  # 149
        "我方要求明确押金退还条件和时限",  # 150
        "对方同意约定退房后15日内退还",  # 151
        "押金条款已改善",  # 152
        "最终约定：退房后15日内退还押金",  # 153
    ]

    with open(f"{work_dir}/xl/sharedStrings.xml", 'w', encoding='utf-8') as f:
        f.write(build_shared_strings(strings))

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

    # Create filled sheets with sample data
    sheets = create_all_sheets_filled()
    for i, sheet_xml in enumerate(sheets, 1):
        with open(f"{work_dir}/xl/worksheets/sheet{i}.xml", 'w', encoding='utf-8') as f:
            f.write(sheet_xml)

    output_path = f"{OUTPUT_DIR}/配套表单_填好版.xlsx"
    pack_xlsx(work_dir, output_path)
    print(f"Created: {output_path}")

def create_all_sheets_filled():
    s = STYLE
    return [
        # Sheet 1: 合同五步扫描表 - Filled
        f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
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
    <row r="1" ht="28" customHeight="1"><c r="A1" t="s" s="{s['header']}"><v>0</v></c></row>
    <row r="2" ht="18" customHeight="1"><c r="A2" t="s" s="{s['formula']}"><v>1</v></c></row>
    <row r="3" ht="6"/>
    <row r="4" ht="18" customHeight="1">
      <c r="A4" t="s" s="{s['header']}"><v>2</v></c>
      <c r="B4" t="s" s="{s['header']}"><v>3</v></c>
      <c r="C4" t="s" s="{s['header']}"><v>4</v></c>
      <c r="D4" t="s" s="{s['header']}"><v>5</v></c>
      <c r="E4" t="s" s="{s['header']}"><v>6</v></c>
    </row>
    <row r="5" ht="18">
      <c r="A5" t="s" s="{s['formula']}"><v>8</v></c>
      <c r="B5" t="s" s="{s['input']}"><v>120</v></c>
      <c r="C5" t="s" s="{s['input']}"><v>121</v></c>
      <c r="D5" t="s" s="{s['input']}"><v>124</v></c>
      <c r="E5" t="s" s="{s['formula']}"><v>123</v></c>
    </row>
    <row r="6" ht="18">
      <c r="A6" t="s" s="{s['formula']}"><v>9</v></c>
      <c r="B6" t="s" s="{s['input']}"><v>16</v></c>
      <c r="C6" t="s" s="{s['input']}"><v>17</v></c>
      <c r="D6" t="s" s="{s['input']}"><v>18</v></c>
      <c r="E6" t="s" s="{s['formula']}"><v>123</v></c>
    </row>
    <row r="7" ht="18">
      <c r="A7" t="s" s="{s['formula']}"><v>10</v></c>
      <c r="B7" t="s" s="{s['input']}"><v>127</v></c>
      <c r="C7" t="s" s="{s['input']}"><v>128</v></c>
      <c r="D7" t="s" s="{s['input']}"><v>129</v></c>
      <c r="E7" t="s" s="{s['formula']}"><v>130</v></c>
    </row>
    <row r="8" ht="18">
      <c r="A8" t="s" s="{s['formula']}"><v>11</v></c>
      <c r="B8" t="s" s="{s['input']}"><v>131</v></c>
      <c r="C8" t="s" s="{s['input']}"><v>132</v></c>
      <c r="D8" t="s" s="{s['input']}"><v>133</v></c>
      <c r="E8" t="s" s="{s['formula']}"><v>134</v></c>
    </row>
    <row r="9" ht="18">
      <c r="A9" t="s" s="{s['formula']}"><v>12</v></c>
      <c r="B9" t="s" s="{s['input']}"><v>25</v></c>
      <c r="C9" t="s" s="{s['input']}"><v>26</v></c>
      <c r="D9" t="s" s="{s['input']}"><v>27</v></c>
      <c r="E9" t="s" s="{s['formula']}"><v>134</v></c>
    </row>
  </sheetData>
  <printOptions horizontalCentered="1"/>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>''',
        # Sheet 2: 主体核实检查表 - Filled
        f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
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
    <row r="1" ht="28" customHeight="1"><c r="A1" t="s" s="{s['header']}"><v>30</v></c></row>
    <row r="2" ht="18" customHeight="1"><c r="A2" t="s" s="{s['formula']}"><v>1</v></c></row>
    <row r="3" ht="6"/>
    <row r="4" ht="18" customHeight="1">
      <c r="A4" t="s" s="{s['header']}"><v>31</v></c>
      <c r="B4" t="s" s="{s['header']}"><v>32</v></c>
      <c r="C4" t="s" s="{s['header']}"><v>33</v></c>
      <c r="D4" t="s" s="{s['header']}"><v>34</v></c>
      <c r="E4" t="s" s="{s['header']}"><v>7</v></c>
    </row>
    <row r="5" ht="18">
      <c r="A5" t="s" s="{s['formula']}"><v>35</v></c>
      <c r="B5" t="s" s="{s['input']}"><v>121</v></c>
      <c r="C5" t="s" s="{s['formula']}"><v>122</v></c>
      <c r="D5" t="s" s="{s['formula']}"><v>123</v></c>
      <c r="E5" t="s" s="{s['input']}"><v>7</v></c>
    </row>
    <row r="6" ht="18">
      <c r="A6" t="s" s="{s['formula']}"><v>38</v></c>
      <c r="B6" t="s" s="{s['input']}"><v>124</v></c>
      <c r="C6" t="s" s="{s['formula']}"><v>125</v></c>
      <c r="D6" t="s" s="{s['formula']}"><v>126</v></c>
      <c r="E6" t="s" s="{s['input']}"><v>7</v></c>
    </row>
    <row r="7" ht="18">
      <c r="A7" t="s" s="{s['formula']}"><v>37</v></c>
      <c r="B7" t="s" s="{s['input']}"><v>7</v></c>
      <c r="C7" t="s" s="{s['input']}"><v>7</v></c>
      <c r="D7" t="s" s="{s['input']}"><v>7</v></c>
      <c r="E7" t="s" s="{s['input']}"><v>7</v></c>
    </row>
    <row r="8" ht="18">
      <c r="A8" t="s" s="{s['formula']}"><v>38</v></c>
      <c r="B8" t="s" s="{s['input']}"><v>7</v></c>
      <c r="C8" t="s" s="{s['input']}"><v>7</v></c>
      <c r="D8" t="s" s="{s['input']}"><v>7</v></c>
      <c r="E8" t="s" s="{s['input']}"><v>7</v></c>
    </row>
    <row r="9" ht="18">
      <c r="A9" t="s" s="{s['formula']}"><v>39</v></c>
      <c r="B9" t="s" s="{s['input']}"><v>7</v></c>
      <c r="C9" t="s" s="{s['input']}"><v>7</v></c>
      <c r="D9" t="s" s="{s['input']}"><v>7</v></c>
      <c r="E9" t="s" s="{s['input']}"><v>7</v></c>
    </row>
  </sheetData>
  <printOptions horizontalCentered="1"/>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>''',
        # Sheet 3: 金额时间核查表 - Filled
        f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
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
    <row r="1" ht="28" customHeight="1"><c r="A1" t="s" s="{s['header']}"><v>40</v></c></row>
    <row r="2" ht="18" customHeight="1"><c r="A2" t="s" s="{s['formula']}"><v>1</v></c></row>
    <row r="3" ht="6"/>
    <row r="4" ht="18" customHeight="1">
      <c r="A4" t="s" s="{s['header']}"><v>41</v></c>
      <c r="B4" t="s" s="{s['header']}"><v>42</v></c>
      <c r="C4" t="s" s="{s['header']}"><v>43</v></c>
      <c r="D4" t="s" s="{s['header']}"><v>44</v></c>
      <c r="E4" t="s" s="{s['header']}"><v>45</v></c>
    </row>
    <row r="5" ht="18"><c r="A5" t="s" s="{s['formula']}"><v>46</v></c><c r="B5" t="s" s="{s['input']}"><v>127</v></c><c r="C5" t="s" s="{s['input']}"><v>128</v></c><c r="D5" t="s" s="{s['input']}"><v>129</v></c><c r="E5" t="s" s="{s['formula']}"><v>130</v></c></row>
    <row r="6" ht="18"><c r="A6" t="s" s="{s['formula']}"><v>47</v></c><c r="B6" t="s" s="{s['input']}"><v>7</v></c><c r="C6" t="s" s="{s['input']}"><v>7</v></c><c r="D6" t="s" s="{s['input']}"><v>7</v></c><c r="E6" t="s" s="{s['input']}"><v>7</v></c></row>
    <row r="7" ht="18"><c r="A7" t="s" s="{s['formula']}"><v>48</v></c><c r="B7" t="s" s="{s['input']}"><v>7</v></c><c r="C7" t="s" s="{s['input']}"><v>7</v></c><c r="D7" t="s" s="{s['input']}"><v>7</v></c><c r="E7" t="s" s="{s['input']}"><v>7</v></c></row>
    <row r="8" ht="18"><c r="A8" t="s" s="{s['formula']}"><v>49</v></c><c r="B8" t="s" s="{s['input']}"><v>7</v></c><c r="C8" t="s" s="{s['input']}"><v>7</v></c><c r="D8" t="s" s="{s['input']}"><v>7</v></c><c r="E8" t="s" s="{s['input']}"><v>7</v></c></row>
    <row r="9" ht="18"><c r="A9" t="s" s="{s['formula']}"><v>50</v></c><c r="B9" t="s" s="{s['input']}"><v>7</v></c><c r="C9" t="s" s="{s['input']}"><v>7</v></c><c r="D9" t="s" s="{s['input']}"><v>7</v></c><c r="E9" t="s" s="{s['input']}"><v>7</v></c></row>
    <row r="10" ht="18"><c r="A10" t="s" s="{s['formula']}"><v>51</v></c><c r="B10" t="s" s="{s['input']}"><v>7</v></c><c r="C10" t="s" s="{s['input']}"><v>7</v></c><c r="D10" t="s" s="{s['input']}"><v>7</v></c><c r="E10" t="s" s="{s['input']}"><v>7</v></c></row>
    <row r="11" ht="18"><c r="A11" t="s" s="{s['formula']}"><v>52</v></c><c r="B11" t="s" s="{s['input']}"><v>7</v></c><c r="C11" t="s" s="{s['input']}"><v>7</v></c><c r="D11" t="s" s="{s['input']}"><v>7</v></c><c r="E11" t="s" s="{s['input']}"><v>7</v></c></row>
    <row r="12" ht="18"><c r="A12" t="s" s="{s['formula']}"><v>53</v></c><c r="B12" t="s" s="{s['input']}"><v>131</v></c><c r="C12" t="s" s="{s['input']}"><v>132</v></c><c r="D12" t="s" s="{s['input']}"><v>133</v></c><c r="E12" t="s" s="{s['formula']}"><v>134</v></c></row>
  </sheetData>
  <printOptions horizontalCentered="1"/>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>''',
        # Sheet 4: 违约责任评估表 - Filled
        f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
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
    <row r="1" ht="28" customHeight="1"><c r="A1" t="s" s="{s['header']}"><v>54</v></c></row>
    <row r="2" ht="18" customHeight="1"><c r="A2" t="s" s="{s['formula']}"><v>1</v></c></row>
    <row r="3" ht="6"/>
    <row r="4" ht="18" customHeight="1">
      <c r="A4" t="s" s="{s['header']}"><v>55</v></c>
      <c r="B4" t="s" s="{s['header']}"><v>56</v></c>
      <c r="C4" t="s" s="{s['header']}"><v>57</v></c>
      <c r="D4" t="s" s="{s['header']}"><v>58</v></c>
      <c r="E4" t="s" s="{s['header']}"><v>59</v></c>
    </row>
    <row r="5" ht="18"><c r="A5" t="s" s="{s['formula']}"><v>60</v></c><c r="B5" t="s" s="{s['input']}"><v>144</v></c><c r="C5" t="s" s="{s['input']}"><v>132</v></c><c r="D5" t="s" s="{s['input']}"><v>133</v></c><c r="E5" t="s" s="{s['formula']}"><v>134</v></c></row>
    <row r="6" ht="18"><c r="A6" t="s" s="{s['formula']}"><v>62</v></c><c r="B6" t="s" s="{s['input']}"><v>149</v></c><c r="C6" t="s" s="{s['input']}"><v>7</v></c><c r="D6" t="s" s="{s['input']}"><v>7</v></c><c r="E6" t="s" s="{s['formula']}"><v>134</v></c></row>
    <row r="7" ht="18"><c r="A7" t="s" s="{s['formula']}"><v>62</v></c><c r="B7" t="s" s="{s['input']}"><v>7</v></c><c r="C7" t="s" s="{s['input']}"><v>7</v></c><c r="D7" t="s" s="{s['input']}"><v>7</v></c><c r="E7" t="s" s="{s['input']}"><v>7</v></c></row>
    <row r="8" ht="18"><c r="A8" t="s" s="{s['formula']}"><v>63</v></c><c r="B8" t="s" s="{s['input']}"><v>7</v></c><c r="C8" t="s" s="{s['input']}"><v>7</v></c><c r="D8" t="s" s="{s['input']}"><v>7</v></c><c r="E8" t="s" s="{s['input']}"><v>7</v></c></row>
    <row r="9" ht="18"><c r="A9" t="s" s="{s['formula']}"><v>64</v></c><c r="B9" t="s" s="{s['input']}"><v>7</v></c><c r="C9" t="s" s="{s['input']}"><v>7</v></c><c r="D9" t="s" s="{s['input']}"><v>7</v></c><c r="E9" t="s" s="{s['input']}"><v>7</v></c></row>
  </sheetData>
  <printOptions horizontalCentered="1"/>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>''',
        # Sheet 5: 争议解决评估表 - Filled
        f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
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
    <row r="1" ht="28" customHeight="1"><c r="A1" t="s" s="{s['header']}"><v>65</v></c></row>
    <row r="2" ht="18" customHeight="1"><c r="A2" t="s" s="{s['formula']}"><v>1</v></c></row>
    <row r="3" ht="6"/>
    <row r="4" ht="18" customHeight="1">
      <c r="A4" t="s" s="{s['header']}"><v>66</v></c>
      <c r="B4" t="s" s="{s['header']}"><v>67</v></c>
      <c r="C4" t="s" s="{s['header']}"><v>68</v></c>
      <c r="D4" t="s" s="{s['header']}"><v>69</v></c>
      <c r="E4" t="s" s="{s['header']}"><v>70</v></c>
    </row>
    <row r="5" ht="18"><c r="A5" t="s" s="{s['formula']}"><v>72</v></c><c r="B5" t="s" s="{s['input']}"><v>136</v></c><c r="C5" t="s" s="{s['input']}"><v>7</v></c><c r="D5" t="s" s="{s['input']}"><v>7</v></c><c r="E5" t="s" s="{s['formula']}"><v>134</v></c></row>
    <row r="6" ht="18"><c r="A6" t="s" s="{s['formula']}"><v>73</v></c><c r="B6" t="s" s="{s['input']}"><v>137</v></c><c r="C6" t="s" s="{s['input']}"><v>7</v></c><c r="D6" t="s" s="{s['input']}"><v>7</v></c><c r="E6" t="s" s="{s['input']}"><v>7</v></c></row>
    <row r="7" ht="18"><c r="A7" t="s" s="{s['formula']}"><v>74</v></c><c r="B7" t="s" s="{s['input']}"><v>7</v></c><c r="C7" t="s" s="{s['input']}"><v>7</v></c><c r="D7" t="s" s="{s['input']}"><v>7</v></c><c r="E7" t="s" s="{s['input']}"><v>7</v></c></row>
    <row r="8" ht="18"><c r="A8" t="s" s="{s['formula']}"><v>75</v></c><c r="B8" t="s" s="{s['input']}"><v>7</v></c><c r="C8" t="s" s="{s['input']}"><v>7</v></c><c r="D8" t="s" s="{s['input']}"><v>7</v></c><c r="E8" t="s" s="{s['input']}"><v>7</v></c></row>
  </sheetData>
  <printOptions horizontalCentered="1"/>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>''',
        # Sheet 6: 退出机制设计表 - Filled
        f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
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
    <row r="1" ht="28" customHeight="1"><c r="A1" t="s" s="{s['header']}"><v>76</v></c></row>
    <row r="2" ht="18" customHeight="1"><c r="A2" t="s" s="{s['formula']}"><v>1</v></c></row>
    <row r="3" ht="6"/>
    <row r="4" ht="18" customHeight="1">
      <c r="A4" t="s" s="{s['header']}"><v>77</v></c>
      <c r="B4" t="s" s="{s['header']}"><v>78</v></c>
      <c r="C4" t="s" s="{s['header']}"><v>79</v></c>
      <c r="D4" t="s" s="{s['header']}"><v>80</v></c>
      <c r="E4" t="s" s="{s['header']}"><v>81</v></c>
    </row>
    <row r="5" ht="18"><c r="A5" t="s" s="{s['formula']}"><v>82</v></c><c r="B5" t="s" s="{s['input']}"><v>138</v></c><c r="C5" t="s" s="{s['input']}"><v>7</v></c><c r="D5" t="s" s="{s['input']}"><v>7</v></c><c r="E5" t="s" s="{s['formula']}"><v>130</v></c></row>
    <row r="6" ht="18"><c r="A6" t="s" s="{s['formula']}"><v>83</v></c><c r="B6" t="s" s="{s['input']}"><v>139</v></c><c r="C6" t="s" s="{s['input']}"><v>140</v></c><c r="D6" t="s" s="{s['input']}"><v>7</v></c><c r="E6" t="s" s="{s['formula']}"><v>134</v></c></row>
    <row r="7" ht="18"><c r="A7" t="s" s="{s['formula']}"><v>84</v></c><c r="B7" t="s" s="{s['input']}"><v>139</v></c><c r="C7" t="s" s="{s['input']}"><v>141</v></c><c r="D7" t="s" s="{s['input']}"><v>7</v></c><c r="E7" t="s" s="{s['formula']}"><v>134</v></c></row>
    <row r="8" ht="18"><c r="A8" t="s" s="{s['formula']}"><v>85</v></c><c r="B8" t="s" s="{s['input']}"><v>7</v></c><c r="C8" t="s" s="{s['input']}"><v>7</v></c><c r="D8" t="s" s="{s['input']}"><v>7</v></c><c r="E8" t="s" s="{s['input']}"><v>7</v></c></row>
    <row r="9" ht="18"><c r="A9" t="s" s="{s['formula']}"><v>86</v></c><c r="B9" t="s" s="{s['input']}"><v>142</v></c><c r="C9" t="s" s="{s['input']}"><v>143</v></c><c r="D9" t="s" s="{s['input']}"><v>7</v></c><c r="E9" t="s" s="{s['formula']}"><v>130</v></c></row>
    <row r="10" ht="18"><c r="A10" t="s" s="{s['formula']}"><v>87</v></c><c r="B10" t="s" s="{s['input']}"><v>142</v></c><c r="C10" t="s" s="{s['input']}"><v>143</v></c><c r="D10" t="s" s="{s['input']}"><v>7</v></c><c r="E10" t="s" s="{s['formula']}"><v>130</v></c></row>
  </sheetData>
  <printOptions horizontalCentered="1"/>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>''',
        # Sheet 7: 条款谈判记录表 - Filled
        f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
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
    <row r="1" ht="28" customHeight="1"><c r="A1" t="s" s="{s['header']}"><v>88</v></c></row>
    <row r="2" ht="18" customHeight="1"><c r="A2" t="s" s="{s['formula']}"><v>1</v></c></row>
    <row r="3" ht="6"/>
    <row r="4" ht="18" customHeight="1">
      <c r="A4" t="s" s="{s['header']}"><v>89</v></c>
      <c r="B4" t="s" s="{s['header']}"><v>90</v></c>
      <c r="C4" t="s" s="{s['header']}"><v>91</v></c>
      <c r="D4" t="s" s="{s['header']}"><v>92</v></c>
      <c r="E4" t="s" s="{s['header']}"><v>93</v></c>
      <c r="F4" t="s" s="{s['header']}"><v>94</v></c>
    </row>
    <row r="5" ht="18"><c r="A5" t="s" s="{s['formula']}"><v>95</v></c><c r="B5" t="s" s="{s['input']}"><v>144</v></c><c r="C5" t="s" s="{s['input']}"><v>145</v></c><c r="D5" t="s" s="{s['input']}"><v>146</v></c><c r="E5" t="s" s="{s['formula']}"><v>147</v></c><c r="F5" t="s" s="{s['formula']}"><v>148</v></c></row>
    <row r="6" ht="18"><c r="A6" t="s" s="{s['formula']}"><v>96</v></c><c r="B6" t="s" s="{s['input']}"><v>149</v></c><c r="C6" t="s" s="{s['input']}"><v>7</v></c><c r="D6" t="s" s="{s['input']}"><v>150</v></c><c r="E6" t="s" s="{s['formula']}"><v>151</v></c><c r="F6" t="s" s="{s['formula']}"><v>152</v></c></row>
    <row r="7" ht="18"><c r="A7" t="s" s="{s['formula']}"><v>97</v></c><c r="B7" t="s" s="{s['input']}"><v>7</v></c><c r="C7" t="s" s="{s['input']}"><v>7</v></c><c r="D7" t="s" s="{s['input']}"><v>7</v></c><c r="E7" t="s" s="{s['input']}"><v>7</v></c><c r="F7" t="s" s="{s['input']}"><v>7</v></c></row>
    <row r="8" ht="18"><c r="A8" t="s" s="{s['formula']}"><v>98</v></c><c r="B8" t="s" s="{s['input']}"><v>7</v></c><c r="C8" t="s" s="{s['input']}"><v>7</v></c><c r="D8" t="s" s="{s['input']}"><v>7</v></c><c r="E8" t="s" s="{s['input']}"><v>7</v></c><c r="F8" t="s" s="{s['input']}"><v>7</v></c></row>
    <row r="9" ht="18"><c r="A9" t="s" s="{s['formula']}"><v>99</v></c><c r="B9" t="s" s="{s['input']}"><v>7</v></c><c r="C9" t="s" s="{s['input']}"><v>7</v></c><c r="D9" t="s" s="{s['input']}"><v>7</v></c><c r="E9" t="s" s="{s['input']}"><v>7</v></c><c r="F9" t="s" s="{s['input']}"><v>7</v></c></row>
    <row r="10" ht="18"><c r="A10" t="s" s="{s['formula']}"><v>100</v></c><c r="B10" t="s" s="{s['input']}"><v>7</v></c><c r="C10" t="s" s="{s['input']}"><v>7</v></c><c r="D10" t="s" s="{s['input']}"><v>7</v></c><c r="E10" t="s" s="{s['input']}"><v>7</v></c><c r="F10" t="s" s="{s['input']}"><v>7</v></c></row>
    <row r="11" ht="18"><c r="A11" t="s" s="{s['formula']}"><v>101</v></c><c r="B11" t="s" s="{s['input']}"><v>7</v></c><c r="C11" t="s" s="{s['input']}"><v>7</v></c><c r="D11" t="s" s="{s['input']}"><v>7</v></c><c r="E11" t="s" s="{s['input']}"><v>7</v></c><c r="F11" t="s" s="{s['input']}"><v>7</v></c></row>
    <row r="12" ht="18"><c r="A12" t="s" s="{s['formula']}"><v>102</v></c><c r="B12" t="s" s="{s['input']}"><v>7</v></c><c r="C12" t="s" s="{s['input']}"><v>7</v></c><c r="D12" t="s" s="{s['input']}"><v>7</v></c><c r="E12" t="s" s="{s['input']}"><v>7</v></c><c r="F12" t="s" s="{s['input']}"><v>7</v></c></row>
    <row r="13" ht="18"><c r="A13" t="s" s="{s['formula']}"><v>103</v></c><c r="B13" t="s" s="{s['input']}"><v>7</v></c><c r="C13" t="s" s="{s['input']}"><v>7</v></c><c r="D13" t="s" s="{s['input']}"><v>7</v></c><c r="E13" t="s" s="{s['input']}"><v>7</v></c><c r="F13" t="s" s="{s['input']}"><v>7</v></c></row>
    <row r="14" ht="18"><c r="A14" t="s" s="{s['formula']}"><v>104</v></c><c r="B14" t="s" s="{s['input']}"><v>7</v></c><c r="C14" t="s" s="{s['input']}"><v>7</v></c><c r="D14" t="s" s="{s['input']}"><v>7</v></c><c r="E14" t="s" s="{s['input']}"><v>7</v></c><c r="F14" t="s" s="{s['input']}"><v>7</v></c></row>
  </sheetData>
  <printOptions horizontalCentered="1"/>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>''',
    ]

# ============================================================
# USER GUIDE
# ============================================================

def create_user_guide():
    work_dir = copy_template()

    strings = [
        "表单使用指引", "版本 v1.0  |  配套于《一纸合同》课程",
        "表单目录", "表单名称", "用途说明", "适用场景",
        "合同五步扫描表", "综合评估合同风险的5个维度", "签订合同前的快速风险筛查",
        "主体核实检查表", "核查交易对手的身份与资质", "涉及大额交易或对方不熟悉时",
        "金额时间核查表", "核对价款、付款节点与履行期限", "涉及分期付款或长期履行合同",
        "违约责任评估表", "评估违约条款的合理性与风险", "对方提供的格式合同",
        "争议解决评估表", "评估争议解决条款的有利性", "需要选择仲裁或诉讼时",
        "退出机制设计表", "设计安全退出路径", "长期合作或对方强势时",
        "条款谈判记录表", "记录谈判过程与最终约定", "签订正式合同前的协商阶段",
        "填写说明",
        "第一步：打开对应的表单", "根据您的场景选择合适的表单",
        "第二步：阅读填写要求", "蓝色单元格为输入项，黑色单元格为自动计算结果",
        "第三步：逐项填写", "按照表头提示填写每一项内容",
        "第四步：查看风险评估", "部分表单会自动计算风险等级",
        "第五步：根据评估结果决策", "安全：可签 | 风险可接受：可谈 | 需谈判改善：必谈 | 建议拒绝：不签",
        "示例数据说明",
        "本表单中的示例数据基于以下场景：租房合同 | 出租人：张三 | 承租人：李四 | 月租金：5000元 | 租期：1年",
        "示例仅供演示如何填写，不构成法律建议",
        "常见问题",
        "Q: 如何判断风险等级？", "A: 参考各表单的评估标准，结合实际情况判断",
        "Q: 表格会自动保存吗？", "A: 是的，Excel会自动保存。建议定期保存重要数据",
        "Q: 可以打印吗？", "A: 可以，每张表单都设置了打印优化布局，Ctrl+P可直接打印",
        "Q: 如何添加更多行？", "A: 选中现有行后右键选择插入行，格式会自动复制",
        "Q: 表单可以修改吗？", "A: 可以，但建议保留原始空白表单作为模板",
        "联系与支持",
        "如有问题请联系课程助教",
        "本表单仅供学习参考，不构成法律建议",
        "重要声明",
        "使用本表单不代表形成律师-客户关系",
        "涉及重大权益时，建议咨询专业律师",
    ]

    with open(f"{work_dir}/xl/sharedStrings.xml", 'w', encoding='utf-8') as f:
        f.write(build_shared_strings(strings))

    workbook_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheets>
    <sheet name="表单目录" sheetId="1" r:id="rId1"/>
    <sheet name="填写说明" sheetId="2" r:id="rId4"/>
    <sheet name="示例数据说明" sheetId="3" r:id="rId5"/>
    <sheet name="常见问题" sheetId="4" r:id="rId6"/>
  </sheets>
  <calcPr calcId="0"/>
</workbook>'''
    with open(f"{work_dir}/xl/workbook.xml", 'w', encoding='utf-8') as f:
        f.write(workbook_xml)

    rels_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
  <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml"/>
  <Relationship Id="rId4" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet2.xml"/>
  <Relationship Id="rId5" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet3.xml"/>
  <Relationship Id="rId6" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet4.xml"/>
</Relationships>'''
    with open(f"{work_dir}/xl/_rels/workbook.xml.rels", 'w', encoding='utf-8') as f:
        f.write(rels_xml)

    content_types_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
  <Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet2.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet3.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet4.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>
  <Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/>
</Types>'''
    with open(f"{work_dir}/[Content_Types].xml", 'w', encoding='utf-8') as f:
        f.write(content_types_xml)

    s = STYLE
    sheets = [
        # Sheet 1: 表单目录
        f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"><pane ySplit="4" topLeftCell="A5" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols>
    <col min="1" max="1" width="24" customWidth="1"/>
    <col min="2" max="2" width="40" customWidth="1"/>
    <col min="3" max="3" width="35" customWidth="1"/>
  </cols>
  <sheetData>
    <row r="1" ht="28" customHeight="1"><c r="A1" t="s" s="{s['header']}"><v>0</v></c></row>
    <row r="2" ht="18" customHeight="1"><c r="A2" t="s" s="{s['formula']}"><v>1</v></c></row>
    <row r="3" ht="6"/>
    <row r="4" ht="18" customHeight="1">
      <c r="A4" t="s" s="{s['header']}"><v>2</v></c>
      <c r="B4" t="s" s="{s['header']}"><v>3</v></c>
      <c r="C4" t="s" s="{s['header']}"><v>4</v></c>
    </row>
    <row r="5" ht="18"><c r="A5" t="s" s="{s['formula']}"><v>5</v></c><c r="B5" t="s" s="{s['formula']}"><v>6</v></c><c r="C5" t="s" s="{s['formula']}"><v>7</v></c></row>
    <row r="6" ht="18"><c r="A6" t="s" s="{s['formula']}"><v>8</v></c><c r="B6" t="s" s="{s['formula']}"><v>9</v></c><c r="C6" t="s" s="{s['formula']}"><v>10</v></c></row>
    <row r="7" ht="18"><c r="A7" t="s" s="{s['formula']}"><v>11</v></c><c r="B7" t="s" s="{s['formula']}"><v>12</v></c><c r="C7" t="s" s="{s['formula']}"><v>13</v></c></row>
    <row r="8" ht="18"><c r="A8" t="s" s="{s['formula']}"><v>14</v></c><c r="B8" t="s" s="{s['formula']}"><v>15</v></c><c r="C8" t="s" s="{s['formula']}"><v>16</v></c></row>
    <row r="9" ht="18"><c r="A9" t="s" s="{s['formula']}"><v>17</v></c><c r="B9" t="s" s="{s['formula']}"><v>18</v></c><c r="C9" t="s" s="{s['formula']}"><v>19</v></c></row>
    <row r="10" ht="18"><c r="A10" t="s" s="{s['formula']}"><v>20</v></c><c r="B10" t="s" s="{s['formula']}"><v>21</v></c><c r="C10" t="s" s="{s['formula']}"><v>22</v></c></row>
    <row r="11" ht="18"><c r="A11" t="s" s="{s['formula']}"><v>23</v></c><c r="B11" t="s" s="{s['formula']}"><v>24</v></c><c r="C11" t="s" s="{s['formula']}"><v>25</v></c></row>
  </sheetData>
  <printOptions horizontalCentered="1"/>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>''',
        # Sheet 2: 填写说明
        f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"/></sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols>
    <col min="1" max="1" width="30" customWidth="1"/>
    <col min="2" max="2" width="60" customWidth="1"/>
  </cols>
  <sheetData>
    <row r="1" ht="28" customHeight="1"><c r="A1" t="s" s="{s['header']}"><v>26</v></c></row>
    <row r="2" ht="6"/>
    <row r="3" ht="18"><c r="A3" t="s" s="{s['formula']}"><v>27</v></c><c r="B3" t="s" s="{s['formula']}"><v>28</v></c></row>
    <row r="4" ht="18"><c r="A4" t="s" s="{s['formula']}"><v>29</v></c><c r="B4" t="s" s="{s['formula']}"><v>30</v></c></row>
    <row r="5" ht="18"><c r="A5" t="s" s="{s['formula']}"><v>31</v></c><c r="B5" t="s" s="{s['formula']}"><v>32</v></c></row>
    <row r="6" ht="18"><c r="A6" t="s" s="{s['formula']}"><v>33</v></c><c r="B6" t="s" s="{s['formula']}"><v>34</v></c></row>
    <row r="7" ht="18"><c r="A7" t="s" s="{s['formula']}"><v>35</v></c><c r="B7" t="s" s="{s['formula']}"><v>36</v></c></row>
  </sheetData>
  <printOptions horizontalCentered="1"/>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>''',
        # Sheet 3: 示例数据说明
        f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"/></sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols>
    <col min="1" max="1" width="30" customWidth="1"/>
    <col min="2" max="2" width="60" customWidth="1"/>
  </cols>
  <sheetData>
    <row r="1" ht="28" customHeight="1"><c r="A1" t="s" s="{s['header']}"><v>37</v></c></row>
    <row r="2" ht="6"/>
    <row r="3" ht="18"><c r="A3" t="s" s="{s['formula']}"><v>38</v></c><c r="B3" t="s" s="{s['formula']}"><v>39</v></c></row>
    <row r="4" ht="18"><c r="A4" t="s" s="{s['formula']}"><v>40</v></c></row>
  </sheetData>
  <printOptions horizontalCentered="1"/>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>''',
        # Sheet 4: 常见问题
        f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"/></sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols>
    <col min="1" max="1" width="30" customWidth="1"/>
    <col min="2" max="2" width="60" customWidth="1"/>
  </cols>
  <sheetData>
    <row r="1" ht="28" customHeight="1"><c r="A1" t="s" s="{s['header']}"><v>41</v></c></row>
    <row r="2" ht="6"/>
    <row r="3" ht="18"><c r="A3" t="s" s="{s['formula']}"><v>42</v></c><c r="B3" t="s" s="{s['formula']}"><v>43</v></c></row>
    <row r="4" ht="18"><c r="A4" t="s" s="{s['formula']}"><v>44</v></c><c r="B4" t="s" s="{s['formula']}"><v>45</v></c></row>
    <row r="5" ht="18"><c r="A5" t="s" s="{s['formula']}"><v>46</v></c><c r="B5" t="s" s="{s['formula']}"><v>47</v></c></row>
    <row r="6" ht="18"><c r="A6" t="s" s="{s['formula']}"><v>48</v></c><c r="B6" t="s" s="{s['formula']}"><v>49</v></c></row>
    <row r="7" ht="18"><c r="A7" t="s" s="{s['formula']}"><v>50</v></c><c r="B7" t="s" s="{s['formula']}"><v>51</v></c></row>
    <row r="8" ht="6"/>
    <row r="9" ht="18"><c r="A9" t="s" s="{s['header']}"><v>52</v></c></row>
    <row r="10" ht="18"><c r="A10" t="s" s="{s['formula']}"><v>53</v></c></row>
    <row r="11" ht="18"><c r="A11" t="s" s="{s['formula']}"><v>54</v></c></row>
    <row r="12" ht="6"/>
    <row r="13" ht="18"><c r="A13" t="s" s="{s['header']}"><v>55</v></c></row>
    <row r="14" ht="18"><c r="A14" t="s" s="{s['formula']}"><v>56</v></c></row>
    <row r="15" ht="18"><c r="A15" t="s" s="{s['formula']}"><v>57</v></c></row>
  </sheetData>
  <printOptions horizontalCentered="1"/>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>''',
    ]

    for i, sheet_xml in enumerate(sheets, 1):
        with open(f"{work_dir}/xl/worksheets/sheet{i}.xml", 'w', encoding='utf-8') as f:
            f.write(sheet_xml)

    output_path = f"{OUTPUT_DIR}/表单使用指引.xlsx"
    pack_xlsx(work_dir, output_path)
    print(f"Created: {output_path}")

if __name__ == "__main__":
    create_blank_workbook()
    create_filled_workbook()
    create_user_guide()
    print("All files created successfully!")
