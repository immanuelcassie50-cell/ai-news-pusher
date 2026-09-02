#!/usr/bin/env python3
import os, shutil, subprocess

SKILL_DIR = "C:/Users/Administrator/.claude/skills/Excel表格处理"
TEMPLATE_DIR = SKILL_DIR + "/templates/minimal_xlsx"
OUTPUT_DIR = r"D:/新课开发/商业讲师/全域经营/完整课程包/06-工具表单"
WORK_DIR = r"D:/CC/temp/xlsx_f03"

os.makedirs(OUTPUT_DIR, exist_ok=True)
os.makedirs(WORK_DIR, exist_ok=True)
if os.path.exists(WORK_DIR): shutil.rmtree(WORK_DIR)
shutil.copytree(TEMPLATE_DIR, WORK_DIR)

strings = [
    "部门墙诊断与破壁工具",
    "部门墙的根源是利益归属不清，拆墙靠的是重新设计让各方都不吃亏的考核机制。",
    "题号", "问题描述", "完全不符合", "比较不符合", "比较符合", "完全符合", "得分",
    "各部门KPI是否独立核算，不存在跨部门关联指标？",
    "各部门在出现客户归属争议时，有没有明确的仲裁机制？",
    "跨部门协作项目（如全域经营）是否有明确的牵头人和考核机制？",
    "各部门是否清楚知道全域经营给各自带来的具体收益？",
    "财务部门是否参与了跨部门考核方案的设计？",
    "人力资源部门是否将跨部门协作纳入绩效考核体系？",
    "我们是否开过专门的算账会来明确新旧考核方式差异？",
    "拆墙对赌协议",
    "协议方", "甲方：营运部负责人", "乙方：公司全域经营项目组",
    "对赌内容",
    "若新考核方案实施后三个月内，营运部业绩未因配合全域经营而下降",
    "若营运部主动配合且业绩有提升，项目组额外给予奖励",
    "若因数据不通导致业绩计算争议，以财务核算为准",
    "争议处理",
    "如对本协议执行有争议，交由人力资源部仲裁",
    "仲裁结果为最终结果，双方必须执行",
    "协议签署",
    "甲方签字：", "乙方签字：", "日期：",
    "诊断结果", "综合得分", "问题诊断", "拆墙建议", "对赌协议模板",
    "【轻度部门墙】建议：建立定期跨部门沟通会，明确各自KPI和协作收益",
    "【中度部门墙】建议：召开算账会，把新旧考核方式差异逐条算清楚",
    "【重度部门墙】建议：签订对赌协议，用具体协议文本锁定利益分配方案",
]

r = subprocess.run(["python3", SKILL_DIR+"/scripts/shared_strings_builder.py"] + strings, capture_output=True, text=True)
if r.returncode != 0:
    print("Strings error:", r.stderr)
else:
    with open(WORK_DIR + "/xl/sharedStrings.xml", "w", encoding="utf-8") as f:
        f.write(r.stdout)

wb = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
<fileVersion appName="xl" lastEdited="7" lowestEdited="7"/>
<workbookPr defaultThemeVersion="166925"/>
<bookViews><workbookView xWindow="0" yWindow="0" windowWidth="20140" windowHeight="10960"/></bookViews>
<sheets>
<sheet name="部门墙诊断问卷" sheetId="1" r:id="rId1"/>
<sheet name="拆墙对赌协议" sheetId="2" r:id="rId4"/>
<sheet name="诊断结果与建议" sheetId="3" r:id="rId5"/>
</sheets>
<calcPr calcId="191029"/>
</workbook>'''
with open(WORK_DIR + "/xl/workbook.xml", "w", encoding="utf-8") as f:
    f.write(wb)

rels = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>
<Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
<Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml"/>
<Relationship Id="rId4" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet2.xml"/>
<Relationship Id="rId5" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet3.xml"/>
</Relationships>'''
with open(WORK_DIR + "/xl/_rels/workbook.xml.rels", "w", encoding="utf-8") as f:
    f.write(rels)

ct = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
<Default Extension="xml" ContentType="application/xml"/>
<Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
<Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
<Override PartName="/xl/worksheets/sheet2.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
<Override PartName="/xl/worksheets/sheet3.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
<Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>
<Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/>
</Types>'''
with open(WORK_DIR + "/[Content_Types].xml", "w", encoding="utf-8") as f:
    f.write(ct)

# Sheet1 - 部门墙诊断问卷 (8 questions)
sheet1 = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
<sheetViews><sheetView workbookViewId="0"/></sheetViews>
<sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
<cols>
<col min="1" max="1" width="8" customWidth="1"/>
<col min="2" max="2" width="50" customWidth="1"/>
<col min="3" max="3" width="12" customWidth="1"/>
<col min="4" max="4" width="12" customWidth="1"/>
<col min="5" max="5" width="12" customWidth="1"/>
<col min="6" max="6" width="12" customWidth="1"/>
<col min="7" max="7" width="12" customWidth="1"/>
</cols>
<sheetData>
<row r="1" ht="30" customHeight="1"><c r="A1" t="s" s="4"><v>0</v></c></row>
<row r="2"><c r="A2" t="s" s="0"><v>1</v></c></row>
<row r="3" ht="18" customHeight="1"><c r="A3" t="s" s="4"><v>2</v></c><c r="B3" t="s" s="4"><v>3</v></c><c r="C3" t="s" s="4"><v>4</v></c><c r="D3" t="s" s="4"><v>5</v></c><c r="E3" t="s" s="4"><v>6</v></c><c r="F3" t="s" s="4"><v>7</v></c></row>
<row r="4"><c r="A4" t="s" s="0"><v>8</v></c><c r="C4" t="s" s="1"><v>1</v></c><c r="D4" t="s" s="1"><v>2</v></c><c r="E4" t="s" s="1"><v>3</v></c><c r="F4" t="s" s="1"><v>4</v></c><c r="G4" t="s" s="6"><f>SUM(C4:F4)</f><v></v></c></row>
<row r="5"><c r="A5" t="s" s="0"><v>9</v></c><c r="C5" t="s" s="1"><v>1</v></c><c r="D5" t="s" s="1"><v>2</v></c><c r="E5" t="s" s="1"><v>3</v></c><c r="F5" t="s" s="1"><v>4</v></c><c r="G5" t="s" s="6"><f>SUM(C5:F5)</f><v></v></c></row>
<row r="6"><c r="A6" t="s" s="0"><v>10</v></c><c r="C6" t="s" s="1"><v>1</v></c><c r="D6" t="s" s="1"><v>2</v></c><c r="E6" t="s" s="1"><v>3</v></c><c r="F6" t="s" s="1"><v>4</v></c><c r="G6" t="s" s="6"><f>SUM(C6:F6)</f><v></v></c></row>
<row r="7"><c r="A7" t="s" s="0"><v>11</v></c><c r="C7" t="s" s="1"><v>1</v></c><c r="D7" t="s" s="1"><v>2</v></c><c r="E7" t="s" s="1"><v>3</v></c><c r="F7" t="s" s="1"><v>4</v></c><c r="G7" t="s" s="6"><f>SUM(C7:F7)</f><v></v></c></row>
<row r="8"><c r="A8" t="s" s="0"><v>12</v></c><c r="C8" t="s" s="1"><v>1</v></c><c r="D8" t="s" s="1"><v>2</v></c><c r="E8" t="s" s="1"><v>3</v></c><c r="F8" t="s" s="1"><v>4</v></c><c r="G8" t="s" s="6"><f>SUM(C8:F8)</f><v></v></c></row>
<row r="9"><c r="A9" t="s" s="0"><v>13</v></c><c r="C9" t="s" s="1"><v>1</v></c><c r="D9" t="s" s="1"><v>2</v></c><c r="E9" t="s" s="1"><v>3</v></c><c r="F9" t="s" s="1"><v>4</v></c><c r="G9" t="s" s="6"><f>SUM(C9:F9)</f><v></v></c></row>
<row r="10"><c r="A10" t="s" s="0"><v>14</v></c><c r="C10" t="s" s="1"><v>1</v></c><c r="D10" t="s" s="1"><v>2</v></c><c r="E10" t="s" s="1"><v>3</v></c><c r="F10" t="s" s="1"><v>4</v></c><c r="G10" t="s" s="6"><f>SUM(C10:F10)</f><v></v></c></row>
<row r="11"><c r="A11" t="s" s="0"><v>15</v></c><c r="C11" t="s" s="1"><v>1</v></c><c r="D11" t="s" s="1"><v>2</v></c><c r="E11" t="s" s="1"><v>3</v></c><c r="F11" t="s" s="1"><v>4</v></c><c r="G11" t="s" s="6"><f>SUM(C11:F11)</f><v></v></c></row>
<row r="12"><c r="A12" t="s" s="4"><v>16</v></c><c r="G12" t="s" s="4"><f>SUM(G4:G11)</f><v></v></c></row>
<row r="13"><c r="A13" t="s" s="4"><v>17</v></c><c r="G13" t="s" s="2"><f>IF(G12&lt;=12,"轻度部门墙",IF(G12&lt;=20,"中度部门墙","重度部门墙"))</f><v></v></c></row>
</sheetData>
<dataValidations><dataValidation type="list" sqref="C4:F11" showInputMessage="1" prompt="请选择1-4分" promptTitle="评分"><formula1>1,2,3,4</formula1></dataValidation></dataValidations>
<pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''
with open(WORK_DIR + "/xl/worksheets/sheet1.xml", "w", encoding="utf-8") as f:
    f.write(sheet1)

# Sheet2 - 拆墙对赌协议
sheet2 = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
<sheetViews><sheetView workbookViewId="0"/></sheetViews>
<sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
<cols>
<col min="1" max="1" width="16" customWidth="1"/>
<col min="2" max="2" width="50" customWidth="1"/>
</cols>
<sheetData>
<row r="1" ht="30" customHeight="1"><c r="A1" t="s" s="4"><v>17</v></c></row>
<row r="2"><c r="A2" t="s" s="4"><v>18</v></c><c r="B2" t="s" s="0"><v>19</v></c></row>
<row r="3"><c r="A3" t="s" s="4"><v>20</v></c><c r="B3" t="s" s="0"><v>21</v></c></row>
<row r="4" ht="18" customHeight="1"><c r="A4" t="s" s="4"><v>22</v></c></row>
<row r="5"><c r="A5" t="s" s="0"><v>23</v></c><c r="B5" t="s" s="0"><v>24</v></c></row>
<row r="6"><c r="A6" t="s" s="0"><v>25</v></c><c r="B6" t="s" s="0"><v>26</v></c></row>
<row r="7"><c r="A7" t="s" s="0"><v>27</v></c><c r="B7" t="s" s="0"><v>28</v></c></row>
<row r="8" ht="18" customHeight="1"><c r="A8" t="s" s="4"><v>29</v></c></row>
<row r="9"><c r="A9" t="s" s="0"><v>30</v></c><c r="B9" t="s" s="0"><v>31</v></c></row>
<row r="10"><c r="A10" t="s" s="0"><v>32</v></c><c r="B10" t="s" s="0"><v>33</v></c></row>
<row r="11" ht="18" customHeight="1"><c r="A11" t="s" s="4"><v>34</v></c></row>
<row r="12"><c r="A12" t="s" s="0"><v>35</v></c><c r="B12" t="s" s="0"><v></v></c></row>
<row r="13"><c r="A13" t="s" s="0"><v>36</v></c><c r="B13" t="s" s="0"><v></v></c></row>
<row r="14"><c r="A14" t="s" s="0"><v>37</v></c><c r="B14" t="s" s="0"><v></v></c></row>
</sheetData>
<pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''
with open(WORK_DIR + "/xl/worksheets/sheet2.xml", "w", encoding="utf-8") as f:
    f.write(sheet2)

# Sheet3 - 诊断结果与建议
sheet3 = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
<sheetViews><sheetView workbookViewId="0"/></sheetViews>
<sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
<cols>
<col min="1" max="1" width="16" customWidth="1"/>
<col min="2" max="2" width="20" customWidth="1"/>
<col min="3" max="3" width="50" customWidth="1"/>
</cols>
<sheetData>
<row r="1" ht="30" customHeight="1"><c r="A1" t="s" s="4"><v>38</v></c></row>
<row r="2"><c r="A2" t="s" s="4"><v>39</v></c><c r="B2" t="s" s="3"><f>"部门墙诊断问卷"!G12</f><v></v></c></row>
<row r="3"><c r="A3" t="s" s="4"><v>40</v></c><c r="B3" t="s" s="3"><f>"部门墙诊断问卷"!G13</f><v></v></c></row>
<row r="4"><c r="A4" t="s" s="4"><v>41</v></c><c r="B4" t="s" s="0"><f>IF("部门墙诊断问卷"!G13="轻度部门墙","【轻度部门墙】建议：建立定期跨部门沟通会，明确各自KPI和协作收益",IF("部门墙诊断问卷"!G13="中度部门墙","【中度部门墙】建议：召开算账会，把新旧考核方式差异逐条算清楚","【重度部门墙】建议：签订对赌协议，用具体协议文本锁定利益分配方案"))</f><v></v></c></row>
<row r="5"><c r="A5" t="s" s="4"><v>42</v></c><c r="B5" t="s" s="0"><v></v></c></row>
</sheetData>
<pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''
with open(WORK_DIR + "/xl/worksheets/sheet3.xml", "w", encoding="utf-8") as f:
    f.write(sheet3)

out_path = OUTPUT_DIR + "/03-部门墙诊断与破壁工具.xlsx"
r = subprocess.run(["python3", SKILL_DIR+"/scripts/xlsx_pack.py", WORK_DIR, out_path], capture_output=True, text=True)
if r.returncode != 0:
    print("Pack error:", r.stderr)
else:
    print("Created:", out_path)