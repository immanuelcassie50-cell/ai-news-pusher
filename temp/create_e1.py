#!/usr/bin/env python3
"""Create E1_课程需求分析表.xlsx - 4 sheets for course demand analysis"""
import shutil
import os
import subprocess

SKILL_DIR = "C:/Users/Administrator/.claude/skills/Excel表格处理"
OUT_DIR = "D:/新课开发/经济学/29_工业革命"
os.makedirs(OUT_DIR, exist_ok=True)

# Copy template
shutil.copytree(f"{SKILL_DIR}/templates/minimal_xlsx/", "/tmp/xlsx_work_e1/", dirs_exist_ok=True)

def build_shared_strings(strings):
    """Build sharedStrings XML from list of strings"""
    count = len(strings)
    si_elements = []
    for s in strings:
        escaped = s.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")
        si_elements.append(f"  <si><t>{escaped}</t></si>")
    return f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="{count}" uniqueCount="{count}">
{chr(10).join(si_elements)}
</sst>'''

# ===== Step 1: Build sharedStrings =====
strings = [
    # 0-3: 使用说明
    "使用说明", "表格版本", "最后更新", "本表格用于课程需求分析，请逐项填写",
    # 4-7: 学员画像
    "学员画像", "序号", "职业类型", "背景描述", "学习目标", "备注",
    # 8-20: 痛点诊断
    "痛点诊断", "常见认知误区", "典型表现", "课程对策", "序号", "误区类型", "说明",
    # 21-35: 学习目标
    "学习目标", "课程产出", "具体描述", "学习成果", "成果描述", "序号", "产出名称", "验收标准",
    # 36-50: 竞品对比
    "竞品对比", "课程名称", "平台", "价格", "目标人群", "核心亮点", "薄弱环节", "差异化机会", "序号", "对比维度",
]

with open("/tmp/xlsx_work_e1/xl/sharedStrings.xml", "w", encoding="utf-8") as f:
    f.write(build_shared_strings(strings))

# ===== Step 2: Update workbook.xml for 5 sheets (使用说明 + 4 content) =====
workbook_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
          xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheets>
    <sheet name="使用说明" sheetId="1" r:id="rId1"/>
    <sheet name="学员画像" sheetId="2" r:id="rId4"/>
    <sheet name="痛点诊断" sheetId="3" r:id="rId5"/>
    <sheet name="学习目标" sheetId="4" r:id="rId6"/>
    <sheet name="竞品对比" sheetId="5" r:id="rId7"/>
  </sheets>
  <calcPr calcId="0"/>
</workbook>'''
with open("/tmp/xlsx_work_e1/xl/workbook.xml", "w", encoding="utf-8") as f:
    f.write(workbook_xml)

# ===== Step 3: Update workbook.xml.rels =====
rels_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
  <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml"/>
  <Relationship Id="rId4" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet2.xml"/>
  <Relationship Id="rId5" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet3.xml"/>
  <Relationship Id="rId6" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet4.xml"/>
  <Relationship Id="rId7" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet5.xml"/>
</Relationships>'''
with open("/tmp/xlsx_work_e1/xl/_rels/workbook.xml.rels", "w", encoding="utf-8") as f:
    f.write(rels_xml)

# ===== Step 4: Update [Content_Types].xml =====
ct_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml"  ContentType="application/xml"/>
  <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
  <Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet2.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet3.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet4.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet5.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>
  <Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/>
</Types>'''
with open("/tmp/xlsx_work_e1/[Content_Types].xml", "w", encoding="utf-8") as f:
    f.write(ct_xml)

# ===== Step 5: Create sheet XML files =====
for i in range(2, 6):
    shutil.copy("/tmp/xlsx_work_e1/xl/worksheets/sheet1.xml", f"/tmp/xlsx_work_e1/xl/worksheets/sheet{i}.xml")

# ---- Sheet 1: 使用说明 ----
# String indices: 0=使用说明, 1=表格版本, 2=最后更新, 3=本表格用于...
sheet1 = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"/></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols>
    <col min="1" max="1" width="20" customWidth="1"/>
    <col min="2" max="2" width="60" customWidth="1"/>
  </cols>
  <sheetData>
    <row r="1"><c r="A1" t="s" s="4"><v>0</v></c></row>
    <row r="2"><c r="A2" t="s" s="4"><v>1</v></c><c r="B2" t="s" s="0"><v>2</v></c></row>
    <row r="3"><c r="A3" t="s" s="4"><v>2</v></c><c r="B3" t="s" s="0"><v>3</v></c></row>
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''
with open("/tmp/xlsx_work_e1/xl/worksheets/sheet1.xml", "w", encoding="utf-8") as f:
    f.write(sheet1)

# ---- Sheet 2: 学员画像 ----
# Headers: 序号=5, 职业类型=6, 背景描述=7, 学习目标=8, 备注=9
# Students data - we need to leave cells empty and use blank cells (type omitted)
rows_s2 = []
rows_s2.append('<row r="1"><c r="A1" t="s" s="4"><v>4</v></c></row>')
rows_s2.append('<row r="2"><c r="A2" t="s" s="4"><v>5</v></c><c r="B2" t="s" s="4"><v>6</v></c><c r="C2" t="s" s="4"><v>7</v></c><c r="D2" t="s" s="4"><v>8</v></c><c r="E2" t="s" s="4"><v>9</v></c></row>')

student_data = [
    ["企业管理层", "企业中高层管理者，对历史商业案例感兴趣", "理解工业革命背后的制度因素，避免单一技术决定论"],
    ["投资人/金融从业者", "PE/VC/银行等金融行业专业人士", "评估技术革命对经济的影响规律"],
    ["历史爱好者", "对工业革命史有浓厚兴趣的普通学员", "系统了解工业革命的完整历程"],
    ["经济学学生", "高校经济学专业本科生/研究生", "补充课堂未涉及制度分析视角"],
    ["咨询顾问", "管理咨询/战略咨询公司顾问", "掌握历史产业革命分析框架"],
    ["创业者/企业家", "正在或计划进行产业升级的企业主", "从历史规律看技术革命商业机会"],
    ["政策研究员", "政府智库/政策研究机构研究员", "理解技术革命与制度变迁关系"],
    ["终身学习者", "跨领域知识探索者", "建立多维度历史认知框架"],
]

for idx, row_data in enumerate(student_data):
    r = idx + 3
    # Column A = serial number, B=职业类型, C=背景描述, D=学习目标, E=备注(blank)
    rows_s2.append(f'<row r="{r}"><c r="A{r}" t="s" s="0"><v></v></c><c r="B{r}" t="s" s="0"><v></v></c><c r="C{r}" t="s" s="0"><v></v></c><c r="D{r}" t="s" s="0"><v></v></c><c r="E{r}" t="s" s="0"><v></v></c></row>')

sheet2 = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"/></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols>
    <col min="1" max="1" width="18" customWidth="1"/>
    <col min="2" max="2" width="25" customWidth="1"/>
    <col min="3" max="3" width="40" customWidth="1"/>
    <col min="4" max="4" width="40" customWidth="1"/>
    <col min="5" max="5" width="30" customWidth="1"/>
  </cols>
  <sheetData>
    {''.join(rows_s2)}
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''
with open("/tmp/xlsx_work_e1/xl/worksheets/sheet2.xml", "w", encoding="utf-8") as f:
    f.write(sheet2)

# ---- Sheet 3: 痛点诊断 ----
# Headers: 常见认知误区=11, 典型表现=12, 课程对策=13, 说明=14 (wait, indices wrong)
# strings: 痛点诊断=10, 常见认知误区=11, 典型表现=12, 课程对策=13, 序号=14, 误区类型=15, 说明=16
rows_s3 = []
rows_s3.append('<row r="1"><c r="A1" t="s" s="4"><v>10</v></c></row>')
rows_s3.append('<row r="2"><c r="A2" t="s" s="4"><v>14</v></c><c r="B2" t="s" s="4"><v>15</v></c><c r="C2" t="s" s="4"><v>16</v></c><c r="D2" t="s" s="4"><v>13</v></c></row>')

pain_points = [
    ["1", "技术决定论", "认为工业革命只是瓦特蒸汽机的功劳", "强调制度、金融、市场的系统性作用"],
    ["2", "单一因素解释", "把工业革命归因于某一单独因素", "多元视角：技术、能源、制度、金融协同"],
    ["3", "欧洲中心论", "忽视中国、印度等东方的积累与贡献", "全球视角：技术传播与东西交流"],
    ["4", "历史虚无主义", "认为历史只是偶然，没有规律可循", "建立可迁移的历史分析框架"],
    ["5", "英雄史观", "过度强调牛顿、瓦特等个人作用", "系统性结构性分析"],
    ["6", "线性进步观", "认为进步是必然的、匀速的", "理解起飞阶段的关键转折点"],
    ["7", "忽视能源转型", "只关注技术，忽视煤炭能源革命", "能源与工业革命的关系"],
    ["8", "制度忽视", "不理解光荣革命与产权保护的作用", "制度如何降低不确定性"],
]

for idx, row_data in enumerate(pain_points):
    r = idx + 3
    rows_s3.append(f'<row r="{r}"><c r="A{r}" t="s" s="0"><v></v></c><c r="B{r}" t="s" s="0"><v></v></c><c r="C{r}" t="s" s="0"><v></v></c><c r="D{r}" t="s" s="0"><v></v></c></row>')

sheet3 = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"/></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols>
    <col min="1" max="1" width="8" customWidth="1"/>
    <col min="2" max="2" width="20" customWidth="1"/>
    <col min="3" max="3" width="45" customWidth="1"/>
    <col min="4" max="4" width="45" customWidth="1"/>
  </cols>
  <sheetData>
    {''.join(rows_s3)}
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''
with open("/tmp/xlsx_work_e1/xl/worksheets/sheet3.xml", "w", encoding="utf-8") as f:
    f.write(sheet3)

# ---- Sheet 4: 学习目标 ----
# strings: 学习目标=20, 课程产出=21, 具体描述=22, 学习成果=25, 成果描述=26, 序号=27, 产出名称=28, 验收标准=29
rows_s4 = []
rows_s4.append('<row r="1"><c r="A1" t="s" s="4"><v>20</v></c></row>')
rows_s4.append('<row r="2"><c r="A2" t="s" s="4"><v>21</v></c><c r="B2" t="s" s="4"><v>22</v></c><c r="C2" t="s" s="4"><v>22</v></c></row>')
rows_s4.append('<row r="3"><c r="A3" t="s" s="4"><v>25</v></c><c r="B3" t="s" s="4"><v>26</v></c><c r="C3" t="s" s="4"><v>26</v></c></row>')

outcomes = [
    ["1", "制度分析能力", "能够识别并解释光荣革命、议会制度对产权保护的影响"],
    ["2", "多元因素思维", "理解技术、能源、制度、金融的协同作用，避免单一归因"],
    ["3", "东西比较视角", "建立全球视野，理解中国明清与英国崛起的制度差异"],
    ["4", "历史规律提炼", "从工业革命中提炼可迁移的经济增长与起飞条件框架"],
    ["5", "能源转型认知", "深刻理解煤炭革命与蒸汽机动力的内在联系"],
    ["6", "金融制度理解", "理解南海泡沫、英格兰银行与资本形成的关系"],
    ["7", "批判性思维", "能够识别技术决定论、英雄史观等常见认知误区"],
]

for idx, row_data in enumerate(outcomes):
    r = idx + 4
    rows_s4.append(f'<row r="{r}"><c r="A{r}" t="s" s="0"><v></v></c><c r="B{r}" t="s" s="0"><v></v></c><c r="C{r}" t="s" s="0"><v></v></c></row>')

sheet4 = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"/></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols>
    <col min="1" max="1" width="8" customWidth="1"/>
    <col min="2" max="2" width="30" customWidth="1"/>
    <col min="3" max="3" width="50" customWidth="1"/>
  </cols>
  <sheetData>
    {''.join(rows_s4)}
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''
with open("/tmp/xlsx_work_e1/xl/worksheets/sheet4.xml", "w", encoding="utf-8") as f:
    f.write(sheet4)

# ---- Sheet 5: 竞品对比 ----
# strings: 竞品对比=36, 课程名称=37, 平台=38, 价格=39, 目标人群=40, 核心亮点=41, 薄弱环节=42, 差异化机会=43, 序号=44, 对比维度=45
rows_s5 = []
rows_s5.append('<row r="1"><c r="A1" t="s" s="4"><v>36</v></c></row>')
rows_s5.append('<row r="2"><c r="A2" t="s" s="4"><v>44</v></c><c r="B2" t="s" s="4"><v>37</v></c><c r="C2" t="s" s="4"><v>38</v></c><c r="D2" t="s" s="4"><v>39</v></c><c r="E2" t="s" s="4"><v>40</v></c><c r="F2" t="s" s="4"><v>41</v></c><c r="G2" t="s" s="4"><v>42</v></c><c r="H2" t="s" s="4"><v>43</v></c></row>')

competitors = [
    ["得到《科技史纲60讲》", "得到", "99元", "终身学习者", "覆盖范围广，视角宏观", "缺乏制度分析深度", "制度+金融+东西比较的垂直深度"],
    ["《机械工程史》公开课", "大学MOOC", "免费", "工科学生", "技术细节详尽", "纯技术视角，无制度分析", "技术与制度融合的独特视角"],
    ["《大国的兴衰》读书课", "喜马拉雅", "49元", "历史爱好者", "宏观视角，国际关系", "非工业革命专题", "专注工业革命的多维分析"],
    ["《棉花帝国》读书会", "混沌", "99元", "商业人士", "棉花产业案例丰富", "仅一个产业视角", "跨产业、多制度比较框架"],
    ["《蒸汽机史》纪录片", "B站", "免费", "大众", "视觉化强，通俗易懂", "娱乐性为主，缺乏深度", "专业课程+案例深挖的组合"],
]

for idx, row_data in enumerate(competitors):
    r = idx + 3
    rows_s5.append(f'<row r="{r}"><c r="A{r}" t="s" s="0"><v></v></c><c r="B{r}" t="s" s="0"><v></v></c><c r="C{r}" t="s" s="0"><v></v></c><c r="D{r}" t="s" s="0"><v></v></c><c r="E{r}" t="s" s="0"><v></v></c><c r="F{r}" t="s" s="0"><v></v></c><c r="G{r}" t="s" s="0"><v></v></c><c r="H{r}" t="s" s="0"><v></v></c></row>')

sheet5 = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"/></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols>
    <col min="1" max="1" width="8" customWidth="1"/>
    <col min="2" max="2" width="22" customWidth="1"/>
    <col min="3" max="3" width="10" customWidth="1"/>
    <col min="4" max="4" width="10" customWidth="1"/>
    <col min="5" max="5" width="15" customWidth="1"/>
    <col min="6" max="6" width="28" customWidth="1"/>
    <col min="7" max="7" width="28" customWidth="1"/>
    <col min="8" max="8" width="28" customWidth="1"/>
  </cols>
  <sheetData>
    {''.join(rows_s5)}
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''
with open("/tmp/xlsx_work_e1/xl/worksheets/sheet5.xml", "w", encoding="utf-8") as f:
    f.write(sheet5)

print("E1: All sheets written successfully")
