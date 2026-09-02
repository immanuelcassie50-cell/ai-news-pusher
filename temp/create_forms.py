#!/usr/bin/env python3
"""创建数智化经营配套表单 Excel文件"""

import os
import zipfile
import shutil

SKILL_DIR = "C:/Users/Administrator/.claude/skills/Excel表格处理"
OUT_DIR = "D:/新课开发/经营/系列/15_数智化经营——让数据成为管理生产力/配套表单和指引-Excel版"
TEMPLATE_DIR = "/tmp/xlsx_template"

def copy_template():
    if os.path.exists(TEMPLATE_DIR):
        shutil.rmtree(TEMPLATE_DIR)
    shutil.copytree(f"{SKILL_DIR}/templates/minimal_xlsx", TEMPLATE_DIR)

def create_shared_strings(strings):
    """创建 sharedStrings.xml"""
    lines = ['<?xml version="1.0" encoding="UTF-8" standalone="yes"?>']
    lines.append('<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"')
    lines.append(f'     count="{len(strings)}" uniqueCount="{len(strings)}">')
    for s in strings:
        escaped = s.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;')
        lines.append(f'  <si><t>{escaped}</t></si>')
    lines.append('</sst>')
    return '\n'.join(lines)

def pack_xlsx(work_dir, output_path):
    """打包 xlsx 文件"""
    if os.path.exists(output_path):
        os.remove(output_path)
    with zipfile.ZipFile(output_path, 'w', zipfile.ZIP_DEFLATED) as zf:
        for root, dirs, files in os.walk(work_dir):
            for file in files:
                file_path = os.path.join(root, file)
                arc_name = os.path.relpath(file_path, work_dir)
                zf.write(file_path, arc_name)

# ==================== 00_表单使用指引.xlsx ====================
def create_00_form_guide():
    print("Creating 00_表单使用指引.xlsx...")
    work_dir = f"{TEMPLATE_DIR}_00"
    if os.path.exists(work_dir):
        shutil.rmtree(work_dir)
    shutil.copytree(TEMPLATE_DIR, work_dir)

    strings = [
        "表单使用指引", "表单目录索引", "表单名称", "表单说明", "主要用途", "使用对象",
        "表单使用指引", "表单使用说明", "了解本指引的结构", "讲师+学员",
        "01_数智成熟度自测量表", "成熟度自评+数据资产管理诊断", "测评当前数智化成熟度及数据资产管理现状", "学员自评",
        "02_数据资产盘点表", "数据资产台账+质量评分卡+进度追踪", "盘点企业数据资产，建立数据资产台账", "学员主导+讲师辅导",
        "03_经营看板指标库", "战略指标库+行动指标库+预警阈值", "构建数智化经营指标体系", "讲师+学员",
        "04_数智化项目立项评估表", "五维评估模型+权重+得分汇总", "评估数智化项目立项可行性", "学员主导+讲师辅导",
        "05_转型行动计划追踪表", "现状-目标-路径追踪+里程碑+复盘", "追踪数智化转型行动进展", "学员主导",
        "使用说明", "填写说明", "黄色高亮单元格为必填项", "请按照表单指引顺序使用",
        "蓝色字体单元格为可调整参数", "根据企业实际情况调整", "自动计算项无需填写", "系统将自动计算",
        "注意事项", "安全提示", "使用前请备份数据", "定期保存填写结果",
        "数据资产盘点需要多部门协作", "建议成立数据治理小组", "成熟度评估建议每季度复盘一次", "持续跟踪改进效果",
        "课程配套表单", "数智化经营——让数据成为管理生产力"
    ]

    sheet1 = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
           xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView workbookViewId="0"/>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols>
    <col min="1" max="1" width="28" customWidth="1"/>
    <col min="2" max="2" width="45" customWidth="1"/>
    <col min="3" max="3" width="25" customWidth="1"/>
    <col min="4" max="4" width="18" customWidth="1"/>
  </cols>
  <sheetData>
    <row r="1" ht="30" customHeight="1">
      <c r="A1" t="s" s="4"><v>0</v></c>
      <c r="B1" t="s" s="4"><v>1</v></c>
      <c r="C1" t="s" s="4"><v>2</v></c>
      <c r="D1" t="s" s="4"><v>3</v></c>
    </row>
    <row r="2" ht="18" customHeight="1">
      <c r="A2" t="s" s="1"><v>4</v></c>
      <c r="B2" t="s" s="0"><v>5</v></c>
      <c r="C2" t="s" s="0"><v>6</v></c>
      <c r="D2" t="s" s="0"><v>7</v></c>
    </row>
    <row r="3">
      <c r="A3" t="s" s="0"><v>8</v></c>
    </row>
    <row r="4">
      <c r="A4" t="s" s="4"><v>9</v></c>
      <c r="B4" t="s" s="4"><v>10</v></c>
      <c r="C4" t="s" s="4"><v>11</v></c>
      <c r="D4" t="s" s="4"><v>12</v></c>
    </row>
    <row r="5">
      <c r="A5" t="s" s="1"><v>13</v></c>
      <c r="B5" t="s" s="0"><v>14</v></c>
      <c r="C5" t="s" s="0"><v>15</v></c>
      <c r="D5" t="s" s="0"><v>16</v></c>
    </row>
    <row r="6">
      <c r="A6" t="s" s="1"><v>17</v></c>
      <c r="B6" t="s" s="0"><v>18</v></c>
      <c r="C6" t="s" s="0"><v>19</v></c>
      <c r="D6" t="s" s="0"><v>20</v></c>
    </row>
    <row r="7">
      <c r="A7" t="s" s="1"><v>21</v></c>
      <c r="B7" t="s" s="0"><v>22</v></c>
      <c r="C7" t="s" s="0"><v>23</v></c>
      <c r="D7" t="s" s="0"><v>24</v></c>
    </row>
    <row r="8">
      <c r="A8" t="s" s="1"><v>25</v></c>
      <c r="B8" t="s" s="0"><v>26</v></c>
      <c r="C8" t="s" s="0"><v>27</v></c>
      <c r="D8" t="s" s="0"><v>28</v></c>
    </row>
    <row r="9">
      <c r="A9" t="s" s="1"><v>29</v></c>
      <c r="B9" t="s" s="0"><v>30</v></c>
      <c r="C9" t="s" s="0"><v>31</v></c>
      <c r="D9" t="s" s="0"><v>32</v></c>
    </row>
    <row r="10">
      <c r="A10" t="s" s="0"><v>33</v></c>
    </row>
    <row r="11">
      <c r="A11" t="s" s="4"><v>34</v></c>
    </row>
    <row r="12">
      <c r="A12" t="s" s="0"><v>35</v></c>
    </row>
    <row r="13">
      <c r="A13" t="s" s="1"><v>36</v></c>
    </row>
    <row r="14">
      <c r="A14" t="s" s="1"><v>37</v></c>
    </row>
    <row r="15">
      <c r="A15" t="s" s="1"><v>38</v></c>
    </row>
    <row r="16">
      <c r="A16" t="s" s="1"><v>39</v></c>
    </row>
    <row r="17">
      <c r="A17" t="s" s="1"><v>40</v></c>
    </row>
    <row r="18">
      <c r="A18" t="s" s="1"><v>41</v></c>
    </row>
    <row r="19">
      <c r="A19" t="s" s="0"><v>42</v></c>
    </row>
    <row r="20">
      <c r="A20" t="s" s="4"><v>43</v></c>
    </row>
    <row r="21">
      <c r="A21" t="s" s="1"><v>44</v></c>
    </row>
    <row r="22">
      <c r="A22" t="s" s="1"><v>45</v></c>
    </row>
    <row r="23">
      <c r="A23" t="s" s="1"><v>46</v></c>
    </row>
    <row r="24">
      <c r="A24" t="s" s="1"><v>47</v></c>
    </row>
  </sheetData>
</worksheet>'''

    with open(f"{work_dir}/xl/worksheets/sheet1.xml", 'w', encoding='utf-8') as f:
        f.write(sheet1)

    with open(f"{work_dir}/xl/sharedStrings.xml", 'w', encoding='utf-8') as f:
        f.write(create_shared_strings(strings))

    workbook_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
          xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheets>
    <sheet name="表单使用指引" sheetId="1" r:id="rId1"/>
  </sheets>
</workbook>'''
    with open(f"{work_dir}/xl/workbook.xml", 'w', encoding='utf-8') as f:
        f.write(workbook_xml)

    workbook_rels = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
  <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml"/>
</Relationships>'''
    with open(f"{work_dir}/xl/_rels/workbook.xml.rels", 'w', encoding='utf-8') as f:
        f.write(workbook_rels)

    content_types = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml"  ContentType="application/xml"/>
  <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
  <Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>
  <Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/>
  <Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
</Types>'''
    with open(f"{work_dir}/[Content_Types].xml", 'w', encoding='utf-8') as f:
        f.write(content_types)

    output_path = f"{OUT_DIR}/00_表单使用指引.xlsx"
    pack_xlsx(work_dir, output_path)
    print(f"  Created: {output_path}")

# ==================== 01_数智成熟度自测量表.xlsx ====================
def create_01_maturity_assessment():
    print("Creating 01_数智成熟度自测量表.xlsx...")
    work_dir = f"{TEMPLATE_DIR}_01"
    if os.path.exists(work_dir):
        shutil.rmtree(work_dir)
    shutil.copytree(TEMPLATE_DIR, work_dir)

    strings = [
        "数智成熟度自测量表", "成熟度量表说明", "本量表用于评估企业在数智化转型方面的成熟度水平",
        "评分标准", "1分=完全不符合", "2分=不太符合", "3分=基本符合", "4分=比较符合", "5分=完全符合",
        "维度一：数据基础设施", "数据基础设施评估", "题号", "评估题目", "得分", "小计",
        "Q1", "企业已建立统一的数据管理平台或数据仓库", "",
        "Q2", "关键业务数据已实现线上化采集", "",
        "Q3", "数据质量管理制度已建立并执行", "",
        "Q4", "数据安全防护措施完善", "",
        "维度二：数据应用能力", "数据应用能力评估", "题号", "评估题目", "得分", "小计",
        "Q5", "日常经营决策基于数据分析而非经验判断", "",
        "Q6", "数据分析结果能及时反馈到业务执行", "",
        "Q7", "已建立数据驱动的业务优化流程", "",
        "Q8", "能用数据预测业务发展趋势", "",
        "维度三：组织与人才", "组织与人才评估", "题号", "评估题目", "得分", "小计",
        "Q9", "数智化部门与业务部门建立协同机制", "",
        "Q10", "具备专业的数据分析团队", "",
        "Q11", "管理层重视数据文化建设", "",
        "Q12", "全员具备基本的数据素养", "",
        "维度四：技术创新", "技术创新评估", "题号", "评估题目", "得分", "小计",
        "Q13", "积极探索和应用新技术（如AI、云计算）", "",
        "Q14", "技术架构支持业务快速迭代", "",
        "Q15", "有明确的技术发展规划", "",
        "维度五：数据治理", "数据治理评估", "题号", "评估题目", "得分", "小计",
        "Q16", "数据标准体系已建立", "",
        "Q17", "数据资产目录完整且更新及时", "",
        "Q18", "数据合规性审查机制健全", "",
        "雷达图数据", "维度一", "维度二", "维度三", "维度四", "维度五", "综合得分",
    ]

    sheet1 = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
           xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView workbookViewId="0"/>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols>
    <col min="1" max="1" width="22" customWidth="1"/>
    <col min="2" max="2" width="50" customWidth="1"/>
    <col min="3" max="3" width="12" customWidth="1"/>
  </cols>
  <sheetData>
    <row r="1" ht="30" customHeight="1">
      <c r="A1" t="s" s="4"><v>0</v></c>
    </row>
    <row r="2" ht="18" customHeight="1">
      <c r="A2" t="s" s="0"><v>1</v></c>
    </row>
    <row r="3">
      <c r="A3" t="s" s="0"><v>2</v></c>
    </row>
    <row r="4">
      <c r="A4" t="s" s="4"><v>3</v></c>
    </row>
    <row r="5">
      <c r="A5" t="s" s="0"><v>4</v></c>
      <c r="B5" t="s" s="0"><v>5</v></c>
      <c r="C5" t="s" s="0"><v>6</v></c>
      <c r="D5" t="s" s="0"><v>7</v></c>
      <c r="E5" t="s" s="0"><v>8</v></c>
    </row>
    <row r="6">
      <c r="A6" t="s" s="0"><v>9</v></c>
      <c r="B6" t="s" s="1"><v>10</v></c>
    </row>
    <row r="7">
      <c r="A7" t="s" s="0"><v>11</v></c>
      <c r="B7" t="s" s="1"><v>12</v></c>
    </row>
    <row r="8">
      <c r="A8" t="s" s="0"><v>13</v></c>
      <c r="B8" t="s" s="1"><v>14</v></c>
    </row>
    <row r="9">
      <c r="A9" t="s" s="0"><v>15</v></c>
      <c r="B9" t="s" s="1"><v>16</v></c>
    </row>
  </sheetData>
</worksheet>'''

    sheet2_rows = []
    sheet2_rows.append('''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
           xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView workbookViewId="0"/>
    <pane ySplit="8" topLeftCell="A9" activePane="bottomLeft" state="frozen"/>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols>
    <col min="1" max="1" width="10" customWidth="1"/>
    <col min="2" max="2" width="55" customWidth="1"/>
    <col min="3" max="3" width="10" customWidth="1"/>
    <col min="4" max="4" width="12" customWidth="1"/>
  </cols>
  <sheetData>''')

    sheet2_rows.append('    <row r="1" ht="25" customHeight="1">')
    sheet2_rows.append('      <c r="A1" t="s" s="4"><v>0</v></c>')
    sheet2_rows.append('    </row>')
    sheet2_rows.append('    <row r="2">')
    sheet2_rows.append('      <c r="A2" t="s" s="0"><v>1</v></c>')
    sheet2_rows.append('    </row>')
    sheet2_rows.append('    <row r="3">')
    sheet2_rows.append('      <c r="A3" t="s" s="4"><v>2</v></c>')
    sheet2_rows.append('      <c r="B3" t="s" s="4"><v>3</v></c>')
    sheet2_rows.append('      <c r="C3" t="s" s="4"><v>4</v></c>')
    sheet2_rows.append('      <c r="D3" t="s" s="4"><v>5</v></c>')
    sheet2_rows.append('    </row>')

    sheet2_rows.append('    <row r="4">')
    sheet2_rows.append('      <c r="A4" t="s" s="4"><v>6</v></c>')
    sheet2_rows.append('      <c r="B4" t="s" s="4"><v>7</v></c>')
    sheet2_rows.append('    </row>')

    questions_dim1 = [
        (8, "Q1", "企业已建立统一的数据管理平台或数据仓库", 9),
        (9, "Q2", "关键业务数据已实现线上化采集", 10),
        (10, "Q3", "数据质量管理制度已建立并执行", 11),
        (11, "Q4", "数据安全防护措施完善", 12),
    ]
    for row, q, text, idx in questions_dim1:
        sheet2_rows.append(f'    <row r="{row}">')
        sheet2_rows.append(f'      <c r="A{row}" t="s" s="0"><v>{idx}</v></c>')
        sheet2_rows.append(f'      <c r="B{row}" t="s" s="0"><v>{text}</v></c>')
        sheet2_rows.append(f'      <c r="C{row}" t="s" s="1"><v></v></c>')
        sheet2_rows.append(f'    </row>')

    sheet2_rows.append('    <row r="12">')
    sheet2_rows.append('      <c r="A12" t="s" s="4"><v>5</v></c>')
    sheet2_rows.append('      <c r="C12" s="6"><f>SUM(C8:C11)</f><v></v></c>')
    sheet2_rows.append('    </row>')

    sheet2_rows.append('    <row r="13">')
    sheet2_rows.append('      <c r="A13" t="s" s="4"><v>13</v></c>')
    sheet2_rows.append('      <c r="B13" t="s" s="4"><v>14</v></c>')
    sheet2_rows.append('    </row>')

    questions_dim2 = [
        (14, "Q5", "日常经营决策基于数据分析而非经验判断", 15),
        (15, "Q6", "数据分析结果能及时反馈到业务执行", 16),
        (16, "Q7", "已建立数据驱动的业务优化流程", 17),
        (17, "Q8", "能用数据预测业务发展趋势", 18),
    ]
    for row, q, text, idx in questions_dim2:
        sheet2_rows.append(f'    <row r="{row}">')
        sheet2_rows.append(f'      <c r="A{row}" t="s" s="0"><v>{idx}</v></c>')
        sheet2_rows.append(f'      <c r="B{row}" t="s" s="0"><v>{text}</v></c>')
        sheet2_rows.append(f'      <c r="C{row}" t="s" s="1"><v></v></c>')
        sheet2_rows.append(f'    </row>')

    sheet2_rows.append('    <row r="18">')
    sheet2_rows.append('      <c r="A18" t="s" s="4"><v>5</v></c>')
    sheet2_rows.append('      <c r="C18" s="6"><f>SUM(C14:C17)</f><v></v></c>')
    sheet2_rows.append('    </row>')

    sheet2_rows.append('    <row r="19">')
    sheet2_rows.append('      <c r="A19" t="s" s="4"><v>19</v></c>')
    sheet2_rows.append('      <c r="B19" t="s" s="4"><v>20</v></c>')
    sheet2_rows.append('    </row>')

    questions_dim3 = [
        (20, "Q9", "数智化部门与业务部门建立协同机制", 21),
        (21, "Q10", "具备专业的数据分析团队", 22),
        (22, "Q11", "管理层重视数据文化建设", 23),
        (23, "Q12", "全员具备基本的数据素养", 24),
    ]
    for row, q, text, idx in questions_dim3:
        sheet2_rows.append(f'    <row r="{row}">')
        sheet2_rows.append(f'      <c r="A{row}" t="s" s="0"><v>{idx}</v></c>')
        sheet2_rows.append(f'      <c r="B{row}" t="s" s="0"><v>{text}</v></c>')
        sheet2_rows.append(f'      <c r="C{row}" t="s" s="1"><v></v></c>')
        sheet2_rows.append(f'    </row>')

    sheet2_rows.append('    <row r="24">')
    sheet2_rows.append('      <c r="A24" t="s" s="4"><v>5</v></c>')
    sheet2_rows.append('      <c r="C24" s="6"><f>SUM(C20:C23)</f><v></v></c>')
    sheet2_rows.append('    </row>')

    sheet2_rows.append('    <row r="25">')
    sheet2_rows.append('      <c r="A25" t="s" s="4"><v>25</v></c>')
    sheet2_rows.append('      <c r="B25" t="s" s="4"><v>26</v></c>')
    sheet2_rows.append('    </row>')

    questions_dim4 = [
        (26, "Q13", "积极探索和应用新技术（如AI、云计算）", 27),
        (27, "Q14", "技术架构支持业务快速迭代", 28),
        (28, "Q15", "有明确的技术发展规划", 29),
    ]
    for row, q, text, idx in questions_dim4:
        sheet2_rows.append(f'    <row r="{row}">')
        sheet2_rows.append(f'      <c r="A{row}" t="s" s="0"><v>{idx}</v></c>')
        sheet2_rows.append(f'      <c r="B{row}" t="s" s="0"><v>{text}</v></c>')
        sheet2_rows.append(f'      <c r="C{row}" t="s" s="1"><v></v></c>')
        sheet2_rows.append(f'    </row>')

    sheet2_rows.append('    <row r="29">')
    sheet2_rows.append('      <c r="A29" t="s" s="4"><v>5</v></c>')
    sheet2_rows.append('      <c r="C29" s="6"><f>SUM(C26:C28)</f><v></v></c>')
    sheet2_rows.append('    </row>')

    sheet2_rows.append('    <row r="30">')
    sheet2_rows.append('      <c r="A30" t="s" s="4"><v>30</v></c>')
    sheet2_rows.append('      <c r="B30" t="s" s="4"><v>31</v></c>')
    sheet2_rows.append('    </row>')

    questions_dim5 = [
        (31, "Q16", "数据标准体系已建立", 32),
        (32, "Q17", "数据资产目录完整且更新及时", 33),
        (33, "Q18", "数据合规性审查机制健全", 34),
    ]
    for row, q, text, idx in questions_dim5:
        sheet2_rows.append(f'    <row r="{row}">')
        sheet2_rows.append(f'      <c r="A{row}" t="s" s="0"><v>{idx}</v></c>')
        sheet2_rows.append(f'      <c r="B{row}" t="s" s="0"><v>{text}</v></c>')
        sheet2_rows.append(f'      <c r="C{row}" t="s" s="1"><v></v></c>')
        sheet2_rows.append(f'    </row>')

    sheet2_rows.append('    <row r="34">')
    sheet2_rows.append('      <c r="A34" t="s" s="4"><v>5</v></c>')
    sheet2_rows.append('      <c r="C34" s="6"><f>SUM(C31:C33)</f><v></v></c>')
    sheet2_rows.append('    </row>')

    sheet2_rows.append('    <row r="35">')
    sheet2_rows.append('      <c r="A35" t="s" s="4"><v>35</v></c>')
    sheet2_rows.append('      <c r="C35" s="6"><f>SUM(C12,C18,C24,C29,C34)</f><v></v></c>')
    sheet2_rows.append('    </row>')

    sheet2_rows.append('  </sheetData>')
    sheet2_rows.append('</worksheet>')

    with open(f"{work_dir}/xl/worksheets/sheet1.xml", 'w', encoding='utf-8') as f:
        f.write(sheet1)
    with open(f"{work_dir}/xl/worksheets/sheet2.xml", 'w', encoding='utf-8') as f:
        f.write('\n'.join(sheet2_rows))

    with open(f"{work_dir}/xl/sharedStrings.xml", 'w', encoding='utf-8') as f:
        f.write(create_shared_strings(strings))

    workbook_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
          xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheets>
    <sheet name="说明" sheetId="1" r:id="rId1"/>
    <sheet name="成熟度量表" sheetId="2" r:id="rId4"/>
  </sheets>
</workbook>'''
    with open(f"{work_dir}/xl/workbook.xml", 'w', encoding='utf-8') as f:
        f.write(workbook_xml)

    workbook_rels = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
  <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml"/>
  <Relationship Id="rId4" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet2.xml"/>
</Relationships>'''
    with open(f"{work_dir}/xl/_rels/workbook.xml.rels", 'w', encoding='utf-8') as f:
        f.write(workbook_rels)

    content_types = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml"  ContentType="application/xml"/>
  <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
  <Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>
  <Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/>
  <Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet2.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
</Types>'''
    with open(f"{work_dir}/[Content_Types].xml", 'w', encoding='utf-8') as f:
        f.write(content_types)

    output_path = f"{OUT_DIR}/01_数智成熟度自测量表.xlsx"
    pack_xlsx(work_dir, output_path)
    print(f"  Created: {output_path}")

# ==================== 02_数据资产盘点表.xlsx ====================
def create_02_data_asset_inventory():
    print("Creating 02_数据资产盘点表.xlsx...")
    work_dir = f"{TEMPLATE_DIR}_02"
    if os.path.exists(work_dir):
        shutil.rmtree(work_dir)
    shutil.copytree(TEMPLATE_DIR, work_dir)

    strings = [
        "数据资产盘点表", "数据资产分类台账", "数据资产编号", "数据资产名称", "数据资产类别", "所属系统",
        "数据责任部门", "数据责任人", "数据更新频率", "数据量级", "数据质量评分", "备注",
        "台账说明", "请按类别登记所有数据资产", "类别包括：主数据、交易数据、日志数据、第三方数据等",
        "质量评分标准", "1-2分：数据质量差，需要紧急治理", "3-4分：数据质量一般，需要改进", "5分：数据质量良好",
        "盘点进度追踪", "盘点进度", "计划盘点数", "实际盘点数", "完成率", "预计完成日期", "责任人",
    ]

    sheet1_rows = []
    sheet1_rows.append('''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
           xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView workbookViewId="0"/>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols>
    <col min="1" max="1" width="12" customWidth="1"/>
    <col min="2" max="2" width="20" customWidth="1"/>
    <col min="3" max="3" width="15" customWidth="1"/>
    <col min="4" max="4" width="15" customWidth="1"/>
    <col min="5" max="5" width="15" customWidth="1"/>
    <col min="6" max="6" width="12" customWidth="1"/>
    <col min="7" max="7" width="12" customWidth="1"/>
    <col min="8" max="8" width="15" customWidth="1"/>
    <col min="9" max="9" width="12" customWidth="1"/>
  </cols>
  <sheetData>''')

    sheet1_rows.append('    <row r="1" ht="25" customHeight="1">')
    sheet1_rows.append('      <c r="A1" t="s" s="4"><v>0</v></c>')
    sheet1_rows.append('    </row>')
    sheet1_rows.append('    <row r="2">')
    sheet1_rows.append('      <c r="A2" t="s" s="4"><v>1</v></c>')
    sheet1_rows.append('    </row>')
    sheet1_rows.append('    <row r="3">')
    sheet1_rows.append('      <c r="A3" t="s" s="4"><v>2</v></c>')
    sheet1_rows.append('      <c r="B3" t="s" s="4"><v>3</v></c>')
    sheet1_rows.append('      <c r="C3" t="s" s="4"><v>4</v></c>')
    sheet1_rows.append('      <c r="D3" t="s" s="4"><v>5</v></c>')
    sheet1_rows.append('      <c r="E3" t="s" s="4"><v>6</v></c>')
    sheet1_rows.append('      <c r="F3" t="s" s="4"><v>7</v></c>')
    sheet1_rows.append('      <c r="G3" t="s" s="4"><v>8</v></c>')
    sheet1_rows.append('      <c r="H3" t="s" s="4"><v>9</v></c>')
    sheet1_rows.append('      <c r="I3" t="s" s="4"><v>10</v></c>')
    sheet1_rows.append('    </row>')

    for i in range(4, 14):
        sheet1_rows.append(f'    <row r="{i}">')
        for col in 'ABCDEFGHI':
            sheet1_rows.append(f'      <c r="{col}{i}" t="s" s="1"><v></v></c>')
        sheet1_rows.append(f'    </row>')

    sheet1_rows.append('  </sheetData>')
    sheet1_rows.append('</worksheet>')

    sheet2_rows = []
    sheet2_rows.append('''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
           xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView workbookViewId="0"/>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols>
    <col min="1" max="1" width="20" customWidth="1"/>
    <col min="2" max="2" width="12" customWidth="1"/>
    <col min="3" max="3" width="12" customWidth="1"/>
    <col min="4" max="4" width="12" customWidth="1"/>
    <col min="5" max="5" width="12" customWidth="1"/>
    <col min="6" max="6" width="12" customWidth="1"/>
    <col min="7" max="7" width="12" customWidth="1"/>
    <col min="8" max="8" width="15" customWidth="1"/>
  </cols>
  <sheetData>''')

    sheet2_rows.append('    <row r="1" ht="25" customHeight="1">')
    sheet2_rows.append('      <c r="A1" t="s" s="4"><v>12</v></c>')
    sheet2_rows.append('    </row>')
    sheet2_rows.append('    <row r="2">')
    sheet2_rows.append('      <c r="A2" t="s" s="0"><v>13</v></c>')
    sheet2_rows.append('    </row>')
    sheet2_rows.append('    <row r="3">')
    sheet2_rows.append('      <c r="A3" t="s" s="0"><v>14</v></c>')
    sheet2_rows.append('    </row>')
    sheet2_rows.append('    <row r="4">')
    sheet2_rows.append('      <c r="A4" t="s" s="0"><v>15</v></c>')
    sheet2_rows.append('    </row>')
    sheet2_rows.append('    <row r="5">')
    sheet2_rows.append('      <c r="A5" t="s" s="0"><v>16</v></c>')
    sheet2_rows.append('    </row>')

    sheet2_rows.append('    <row r="6" ht="20" customHeight="1">')
    sheet2_rows.append('      <c r="A6" t="s" s="4"><v>17</v></c>')
    sheet2_rows.append('      <c r="B6" t="s" s="4"><v>18</v></c>')
    sheet2_rows.append('      <c r="C6" t="s" s="4"><v>19</v></c>')
    sheet2_rows.append('      <c r="D6" t="s" s="4"><v>20</v></c>')
    sheet2_rows.append('      <c r="E6" t="s" s="4"><v>21</v></c>')
    sheet2_rows.append('      <c r="F6" t="s" s="4"><v>22</v></c>')
    sheet2_rows.append('      <c r="G6" t="s" s="4"><v>23</v></c>')
    sheet2_rows.append('      <c r="H6" t="s" s="4"><v>24</v></c>')
    sheet2_rows.append('    </row>')

    for i in range(7, 17):
        sheet2_rows.append(f'    <row r="{i}">')
        for col in 'ABCDEFGH':
            sheet2_rows.append(f'      <c r="{col}{i}" t="s" s="1"><v></v></c>')
        sheet2_rows.append(f'    </row>')

    sheet2_rows.append('  </sheetData>')
    sheet2_rows.append('</worksheet>')

    with open(f"{work_dir}/xl/worksheets/sheet1.xml", 'w', encoding='utf-8') as f:
        f.write('\n'.join(sheet1_rows))
    with open(f"{work_dir}/xl/worksheets/sheet2.xml", 'w', encoding='utf-8') as f:
        f.write('\n'.join(sheet2_rows))

    with open(f"{work_dir}/xl/sharedStrings.xml", 'w', encoding='utf-8') as f:
        f.write(create_shared_strings(strings))

    workbook_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
          xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheets>
    <sheet name="数据资产台账" sheetId="1" r:id="rId1"/>
    <sheet name="质量评分卡" sheetId="2" r:id="rId4"/>
  </sheets>
</workbook>'''
    with open(f"{work_dir}/xl/workbook.xml", 'w', encoding='utf-8') as f:
        f.write(workbook_xml)

    workbook_rels = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
  <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml"/>
  <Relationship Id="rId4" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet2.xml"/>
</Relationships>'''
    with open(f"{work_dir}/xl/_rels/workbook.xml.rels", 'w', encoding='utf-8') as f:
        f.write(workbook_rels)

    content_types = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml"  ContentType="application/xml"/>
  <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
  <Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>
  <Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/>
  <Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet2.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
</Types>'''
    with open(f"{work_dir}/[Content_Types].xml", 'w', encoding='utf-8') as f:
        f.write(content_types)

    output_path = f"{OUT_DIR}/02_数据资产盘点表.xlsx"
    pack_xlsx(work_dir, output_path)
    print(f"  Created: {output_path}")

# ==================== 03_经营看板指标库.xlsx ====================
def create_03_kpi_library():
    print("Creating 03_经营看板指标库.xlsx...")
    work_dir = f"{TEMPLATE_DIR}_03"
    if os.path.exists(work_dir):
        shutil.rmtree(work_dir)
    shutil.copytree(TEMPLATE_DIR, work_dir)

    strings = [
        "经营看板指标库", "战略指标库", "指标名称", "指标定义", "计算公式", "数据来源",
        "更新频率", "目标值", "预警阈值-低", "预警阈值-高", "责任人",
        "行动指标库", "指标名称", "指标定义", "计算公式", "数据来源",
        "更新频率", "目标值", "预警阈值-低", "预警阈值-高", "责任人",
        "预警说明", "当指标值超出预警阈值时，系统将自动提醒", "低阈值：低于此值触发预警", "高阈值：高于此值触发预警",
    ]

    sheet1_rows = []
    sheet1_rows.append('''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
           xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView workbookViewId="0"/>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols>
    <col min="1" max="1" width="18" customWidth="1"/>
    <col min="2" max="2" width="30" customWidth="1"/>
    <col min="3" max="3" width="25" customWidth="1"/>
    <col min="4" max="4" width="20" customWidth="1"/>
    <col min="5" max="5" width="12" customWidth="1"/>
    <col min="6" max="6" width="10" customWidth="1"/>
    <col min="7" max="7" width="10" customWidth="1"/>
    <col min="8" max="8" width="10" customWidth="1"/>
    <col min="9" max="9" width="10" customWidth="1"/>
    <col min="10" max="10" width="12" customWidth="1"/>
  </cols>
  <sheetData>''')

    sheet1_rows.append('    <row r="1" ht="25" customHeight="1">')
    sheet1_rows.append('      <c r="A1" t="s" s="4"><v>0</v></c>')
    sheet1_rows.append('    </row>')
    sheet1_rows.append('    <row r="2" ht="20" customHeight="1">')
    sheet1_rows.append('      <c r="A2" t="s" s="4"><v>1</v></c>')
    sheet1_rows.append('      <c r="B2" t="s" s="4"><v>2</v></c>')
    sheet1_rows.append('      <c r="C2" t="s" s="4"><v>3</v></c>')
    sheet1_rows.append('      <c r="D2" t="s" s="4"><v>4</v></c>')
    sheet1_rows.append('      <c r="E2" t="s" s="4"><v>5</v></c>')
    sheet1_rows.append('      <c r="F2" t="s" s="4"><v>6</v></c>')
    sheet1_rows.append('      <c r="G2" t="s" s="4"><v>7</v></c>')
    sheet1_rows.append('      <c r="H2" t="s" s="4"><v>8</v></c>')
    sheet1_rows.append('      <c r="I2" t="s" s="4"><v>9</v></c>')
    sheet1_rows.append('      <c r="J2" t="s" s="4"><v>10</v></c>')
    sheet1_rows.append('    </row>')

    for i in range(3, 13):
        sheet1_rows.append(f'    <row r="{i}">')
        for col in 'ABCDEFGHIJ':
            sheet1_rows.append(f'      <c r="{col}{i}" t="s" s="1"><v></v></c>')
        sheet1_rows.append(f'    </row>')

    sheet1_rows.append('  </sheetData>')
    sheet1_rows.append('</worksheet>')

    sheet2_rows = []
    sheet2_rows.append('''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
           xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView workbookViewId="0"/>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols>
    <col min="1" max="1" width="18" customWidth="1"/>
    <col min="2" max="2" width="30" customWidth="1"/>
    <col min="3" max="3" width="25" customWidth="1"/>
    <col min="4" max="4" width="20" customWidth="1"/>
    <col min="5" max="5" width="12" customWidth="1"/>
    <col min="6" max="6" width="10" customWidth="1"/>
    <col min="7" max="7" width="10" customWidth="1"/>
    <col min="8" max="8" width="10" customWidth="1"/>
    <col min="9" max="9" width="10" customWidth="1"/>
    <col min="10" max="10" width="12" customWidth="1"/>
  </cols>
  <sheetData>''')

    sheet2_rows.append('    <row r="1" ht="25" customHeight="1">')
    sheet2_rows.append('      <c r="A1" t="s" s="4"><v>11</v></c>')
    sheet2_rows.append('    </row>')
    sheet2_rows.append('    <row r="2" ht="20" customHeight="1">')
    sheet2_rows.append('      <c r="A2" t="s" s="4"><v>12</v></c>')
    sheet2_rows.append('      <c r="B2" t="s" s="4"><v>13</v></c>')
    sheet2_rows.append('      <c r="C2" t="s" s="4"><v>14</v></c>')
    sheet2_rows.append('      <c r="D2" t="s" s="4"><v>15</v></c>')
    sheet2_rows.append('      <c r="E2" t="s" s="4"><v>16</v></c>')
    sheet2_rows.append('      <c r="F2" t="s" s="4"><v>17</v></c>')
    sheet2_rows.append('      <c r="G2" t="s" s="4"><v>18</v></c>')
    sheet2_rows.append('      <c r="H2" t="s" s="4"><v>19</v></c>')
    sheet2_rows.append('      <c r="I2" t="s" s="4"><v>20</v></c>')
    sheet2_rows.append('      <c r="J2" t="s" s="4"><v>21</v></c>')
    sheet2_rows.append('    </row>')

    for i in range(3, 13):
        sheet2_rows.append(f'    <row r="{i}">')
        for col in 'ABCDEFGHIJ':
            sheet2_rows.append(f'      <c r="{col}{i}" t="s" s="1"><v></v></c>')
        sheet2_rows.append(f'    </row>')

    sheet2_rows.append('  </sheetData>')
    sheet2_rows.append('</worksheet>')

    with open(f"{work_dir}/xl/worksheets/sheet1.xml", 'w', encoding='utf-8') as f:
        f.write('\n'.join(sheet1_rows))
    with open(f"{work_dir}/xl/worksheets/sheet2.xml", 'w', encoding='utf-8') as f:
        f.write('\n'.join(sheet2_rows))

    with open(f"{work_dir}/xl/sharedStrings.xml", 'w', encoding='utf-8') as f:
        f.write(create_shared_strings(strings))

    workbook_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
          xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheets>
    <sheet name="战略指标库" sheetId="1" r:id="rId1"/>
    <sheet name="行动指标库" sheetId="2" r:id="rId4"/>
  </sheets>
</workbook>'''
    with open(f"{work_dir}/xl/workbook.xml", 'w', encoding='utf-8') as f:
        f.write(workbook_xml)

    workbook_rels = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
  <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml"/>
  <Relationship Id="rId4" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet2.xml"/>
</Relationships>'''
    with open(f"{work_dir}/xl/_rels/workbook.xml.rels", 'w', encoding='utf-8') as f:
        f.write(workbook_rels)

    content_types = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml"  ContentType="application/xml"/>
  <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
  <Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>
  <Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/>
  <Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet2.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
</Types>'''
    with open(f"{work_dir}/[Content_Types].xml", 'w', encoding='utf-8') as f:
        f.write(content_types)

    output_path = f"{OUT_DIR}/03_经营看板指标库.xlsx"
    pack_xlsx(work_dir, output_path)
    print(f"  Created: {output_path}")

# ==================== 04_数智化项目立项评估表.xlsx ====================
def create_04_project_evaluation():
    print("Creating 04_数智化项目立项评估表.xlsx...")
    work_dir = f"{TEMPLATE_DIR}_04"
    if os.path.exists(work_dir):
        shutil.rmtree(work_dir)
    shutil.copytree(TEMPLATE_DIR, work_dir)

    strings = [
        "数智化项目立项评估表", "五维评估模型", "评估维度", "评估要点", "权重", "得分(1-5)", "加权得分",
        "维度一：业务价值", "项目对业务优化的价值", "20%", "",
        "维度二：技术可行性", "技术实现难度与成熟度", "20%", "",
        "维度三：数据支撑", "所需数据资产的可用性", "20%", "",
        "维度四：组织能力", "团队能力与资源保障", "20%", "",
        "维度五：风险控制", "项目风险识别与应对", "20%", "",
        "总计", "100%", "",
        "评估标准", "1分=完全不满足", "2分=不太满足", "3分=基本满足", "4分=比较满足", "5分=完全满足",
        "立项建议", "总分>=4.0：强烈推荐", "总分3.0-4.0：建议立项", "总分2.0-3.0：需改进后立项", "总分<2.0：暂不推荐",
    ]

    sheet1_rows = []
    sheet1_rows.append('''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
           xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView workbookViewId="0"/>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols>
    <col min="1" max="1" width="18" customWidth="1"/>
    <col min="2" max="2" width="35" customWidth="1"/>
    <col min="3" max="3" width="10" customWidth="1"/>
    <col min="4" max="4" width="12" customWidth="1"/>
    <col min="5" max="5" width="12" customWidth="1"/>
  </cols>
  <sheetData>''')

    sheet1_rows.append('    <row r="1" ht="25" customHeight="1">')
    sheet1_rows.append('      <c r="A1" t="s" s="4"><v>0</v></c>')
    sheet1_rows.append('    </row>')
    sheet1_rows.append('    <row r="2" ht="20" customHeight="1">')
    sheet1_rows.append('      <c r="A2" t="s" s="4"><v>1</v></c>')
    sheet1_rows.append('      <c r="B2" t="s" s="4"><v>2</v></c>')
    sheet1_rows.append('      <c r="C2" t="s" s="4"><v>3</v></c>')
    sheet1_rows.append('      <c r="D2" t="s" s="4"><v>4</v></c>')
    sheet1_rows.append('      <c r="E2" t="s" s="4"><v>5</v></c>')
    sheet1_rows.append('    </row>')

    dims = [
        (3, "维度一：业务价值", "项目对业务优化的价值", "20%", 6),
        (4, "维度二：技术可行性", "技术实现难度与成熟度", "20%", 7),
        (5, "维度三：数据支撑", "所需数据资产的可用性", "20%", 8),
        (6, "维度四：组织能力", "团队能力与资源保障", "20%", 9),
        (7, "维度五：风险控制", "项目风险识别与应对", "20%", 10),
    ]
    for row, name, desc, weight, name_idx in dims:
        sheet1_rows.append(f'    <row r="{row}">')
        sheet1_rows.append(f'      <c r="A{row}" t="s" s="1"><v>{name_idx}</v></c>')
        sheet1_rows.append(f'      <c r="B{row}" t="s" s="0"><v>{desc}</v></c>')
        sheet1_rows.append(f'      <c r="C{row}" t="s" s="1"><v>{weight}</v></c>')
        sheet1_rows.append(f'      <c r="D{row}" t="s" s="1"><v></v></c>')
        sheet1_rows.append(f'      <c r="E{row}" s="6"><f>D{row}*C{row}</f><v></v></c>')
        sheet1_rows.append(f'    </row>')

    sheet1_rows.append('    <row r="8">')
    sheet1_rows.append('      <c r="A8" t="s" s="4"><v>11</v></c>')
    sheet1_rows.append('      <c r="C8" t="s" s="4"><v>12</v></c>')
    sheet1_rows.append('      <c r="E8" s="6"><f>SUM(E3:E7)</f><v></v></c>')
    sheet1_rows.append('    </row>')

    sheet1_rows.append('    <row r="10">')
    sheet1_rows.append('      <c r="A10" t="s" s="4"><v>13</v></c>')
    sheet1_rows.append('    </row>')
    for i, line in enumerate(["1分=完全不满足", "2分=不太满足", "3分=基本满足", "4分=比较满足", "5分=完全满足"], 11):
        sheet1_rows.append(f'    <row r="{i}">')
        sheet1_rows.append(f'      <c r="A{i}" t="s" s="0"><v>{13+i-10}</v></c>')
        sheet1_rows.append(f'    </row>')

    sheet1_rows.append('    <row r="16">')
    sheet1_rows.append('      <c r="A16" t="s" s="4"><v>18</v></c>')
    sheet1_rows.append('    </row>')
    suggestions = [
        "总分>=4.0：强烈推荐",
        "总分3.0-4.0：建议立项",
        "总分2.0-3.0：需改进后立项",
        "总分<2.0：暂不推荐",
    ]
    for i, s in enumerate(suggestions, 17):
        sheet1_rows.append(f'    <row r="{i}">')
        sheet1_rows.append(f'      <c r="A{i}" t="s" s="0"><v>{18+i-16}</v></c>')
        sheet1_rows.append(f'    </row>')

    sheet1_rows.append('  </sheetData>')
    sheet1_rows.append('</worksheet>')

    with open(f"{work_dir}/xl/worksheets/sheet1.xml", 'w', encoding='utf-8') as f:
        f.write('\n'.join(sheet1_rows))

    with open(f"{work_dir}/xl/sharedStrings.xml", 'w', encoding='utf-8') as f:
        f.write(create_shared_strings(strings))

    workbook_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
          xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheets>
    <sheet name="立项评估" sheetId="1" r:id="rId1"/>
  </sheets>
</workbook>'''
    with open(f"{work_dir}/xl/workbook.xml", 'w', encoding='utf-8') as f:
        f.write(workbook_xml)

    workbook_rels = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
  <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml"/>
</Relationships>'''
    with open(f"{work_dir}/xl/_rels/workbook.xml.rels", 'w', encoding='utf-8') as f:
        f.write(workbook_rels)

    content_types = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml"  ContentType="application/xml"/>
  <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
  <Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>
  <Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/>
  <Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
</Types>'''
    with open(f"{work_dir}/[Content_Types].xml", 'w', encoding='utf-8') as f:
        f.write(content_types)

    output_path = f"{OUT_DIR}/04_数智化项目立项评估表.xlsx"
    pack_xlsx(work_dir, output_path)
    print(f"  Created: {output_path}")

# ==================== 05_转型行动计划追踪表.xlsx ====================
def create_05_action_tracking():
    print("Creating 05_转型行动计划追踪表.xlsx...")
    work_dir = f"{TEMPLATE_DIR}_05"
    if os.path.exists(work_dir):
        shutil.rmtree(work_dir)
    shutil.copytree(TEMPLATE_DIR, work_dir)

    strings = [
        "转型行动计划追踪表", "现状-目标-路径追踪", "序号", "行动项目", "现状描述", "目标描述",
        "实施路径", "开始日期", "结束日期", "责任人", "当前状态", "备注",
        "状态说明", "未开始", "进行中", "已完成", "已延期", "已取消",
        "里程碑管理", "里程碑名称", "计划完成日期", "实际完成日期", "状态", "说明",
        "复盘记录", "复盘日期", "复盘内容", "经验总结", "改进措施", "下次复盘日期",
    ]

    sheet1_rows = []
    sheet1_rows.append('''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
           xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView workbookViewId="0"/>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols>
    <col min="1" max="1" width="6" customWidth="1"/>
    <col min="2" max="2" width="20" customWidth="1"/>
    <col min="3" max="3" width="20" customWidth="1"/>
    <col min="4" max="4" width="20" customWidth="1"/>
    <col min="5" max="5" width="25" customWidth="1"/>
    <col min="6" max="6" width="12" customWidth="1"/>
    <col min="7" max="7" width="12" customWidth="1"/>
    <col min="8" max="8" width="10" customWidth="1"/>
    <col min="9" max="9" width="15" customWidth="1"/>
    <col min="10" max="10" width="12" customWidth="1"/>
  </cols>
  <sheetData>''')

    sheet1_rows.append('    <row r="1" ht="25" customHeight="1">')
    sheet1_rows.append('      <c r="A1" t="s" s="4"><v>0</v></c>')
    sheet1_rows.append('    </row>')
    sheet1_rows.append('    <row r="2" ht="20" customHeight="1">')
    sheet1_rows.append('      <c r="A2" t="s" s="4"><v>1</v></c>')
    sheet1_rows.append('      <c r="B2" t="s" s="4"><v>2</v></c>')
    sheet1_rows.append('      <c r="C2" t="s" s="4"><v>3</v></c>')
    sheet1_rows.append('      <c r="D2" t="s" s="4"><v>4</v></c>')
    sheet1_rows.append('      <c r="E2" t="s" s="4"><v>5</v></c>')
    sheet1_rows.append('      <c r="F2" t="s" s="4"><v>6</v></c>')
    sheet1_rows.append('      <c r="G2" t="s" s="4"><v>7</v></c>')
    sheet1_rows.append('      <c r="H2" t="s" s="4"><v>8</v></c>')
    sheet1_rows.append('      <c r="I2" t="s" s="4"><v>9</v></c>')
    sheet1_rows.append('      <c r="J2" t="s" s="4"><v>10</v></c>')
    sheet1_rows.append('    </row>')

    for i in range(3, 13):
        sheet1_rows.append(f'    <row r="{i}">')
        sheet1_rows.append(f'      <c r="A{i}" t="s" s="1"><v></v></c>')
        for col in 'BCDEFGHIJ':
            sheet1_rows.append(f'      <c r="{col}{i}" t="s" s="1"><v></v></c>')
        sheet1_rows.append(f'    </row>')

    sheet1_rows.append('    <row r="14">')
    sheet1_rows.append('      <c r="A14" t="s" s="4"><v>11</v></c>')
    sheet1_rows.append('    </row>')
    status_list = ["未开始", "进行中", "已完成", "已延期", "已取消"]
    for i, s in enumerate(status_list, 15):
        sheet1_rows.append(f'    <row r="{i}">')
        sheet1_rows.append(f'      <c r="A{i}" t="s" s="0"><v>{11+i-14}</v></c>')
        sheet1_rows.append(f'    </row>')

    sheet1_rows.append('  </sheetData>')
    sheet1_rows.append('</worksheet>')

    sheet2_rows = []
    sheet2_rows.append('''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
           xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView workbookViewId="0"/>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols>
    <col min="1" max="1" width="20" customWidth="1"/>
    <col min="2" max="2" width="15" customWidth="1"/>
    <col min="3" max="3" width="15" customWidth="1"/>
    <col min="4" max="4" width="10" customWidth="1"/>
    <col min="5" max="5" width="20" customWidth="1"/>
  </cols>
  <sheetData>''')

    sheet2_rows.append('    <row r="1" ht="25" customHeight="1">')
    sheet2_rows.append('      <c r="A1" t="s" s="4"><v>17</v></c>')
    sheet2_rows.append('    </row>')
    sheet2_rows.append('    <row r="2" ht="20" customHeight="1">')
    sheet2_rows.append('      <c r="A2" t="s" s="4"><v>18</v></c>')
    sheet2_rows.append('      <c r="B2" t="s" s="4"><v>19</v></c>')
    sheet2_rows.append('      <c r="C2" t="s" s="4"><v>20</v></c>')
    sheet2_rows.append('      <c r="D2" t="s" s="4"><v>21</v></c>')
    sheet2_rows.append('      <c r="E2" t="s" s="4"><v>22</v></c>')
    sheet2_rows.append('    </row>')

    for i in range(3, 10):
        sheet2_rows.append(f'    <row r="{i}">')
        for col in 'ABCDE':
            sheet2_rows.append(f'      <c r="{col}{i}" t="s" s="1"><v></v></c>')
        sheet2_rows.append(f'    </row>')

    sheet2_rows.append('  </sheetData>')
    sheet2_rows.append('</worksheet>')

    sheet3_rows = []
    sheet3_rows.append('''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
           xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView workbookViewId="0"/>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols>
    <col min="1" max="1" width="12" customWidth="1"/>
    <col min="2" max="2" width="30" customWidth="1"/>
    <col min="3" max="3" width="30" customWidth="1"/>
    <col min="4" max="4" width="30" customWidth="1"/>
    <col min="5" max="5" width="15" customWidth="1"/>
  </cols>
  <sheetData>''')

    sheet3_rows.append('    <row r="1" ht="25" customHeight="1">')
    sheet3_rows.append('      <c r="A1" t="s" s="4"><v>23</v></c>')
    sheet3_rows.append('    </row>')
    sheet3_rows.append('    <row r="2" ht="20" customHeight="1">')
    sheet3_rows.append('      <c r="A2" t="s" s="4"><v>24</v></c>')
    sheet3_rows.append('      <c r="B2" t="s" s="4"><v>25</v></c>')
    sheet3_rows.append('      <c r="C2" t="s" s="4"><v>26</v></c>')
    sheet3_rows.append('      <c r="D2" t="s" s="4"><v>27</v></c>')
    sheet3_rows.append('      <c r="E2" t="s" s="4"><v>28</v></c>')
    sheet3_rows.append('    </row>')

    for i in range(3, 10):
        sheet3_rows.append(f'    <row r="{i}">')
        for col in 'ABCDE':
            sheet3_rows.append(f'      <c r="{col}{i}" t="s" s="1"><v></v></c>')
        sheet3_rows.append(f'    </row>')

    sheet3_rows.append('  </sheetData>')
    sheet3_rows.append('</worksheet>')

    with open(f"{work_dir}/xl/worksheets/sheet1.xml", 'w', encoding='utf-8') as f:
        f.write('\n'.join(sheet1_rows))
    with open(f"{work_dir}/xl/worksheets/sheet2.xml", 'w', encoding='utf-8') as f:
        f.write('\n'.join(sheet2_rows))
    with open(f"{work_dir}/xl/worksheets/sheet3.xml", 'w', encoding='utf-8') as f:
        f.write('\n'.join(sheet3_rows))

    with open(f"{work_dir}/xl/sharedStrings.xml", 'w', encoding='utf-8') as f:
        f.write(create_shared_strings(strings))

    workbook_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
          xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheets>
    <sheet name="行动追踪" sheetId="1" r:id="rId1"/>
    <sheet name="里程碑管理" sheetId="2" r:id="rId4"/>
    <sheet name="复盘记录" sheetId="3" r:id="rId5"/>
  </sheets>
</workbook>'''
    with open(f"{work_dir}/xl/workbook.xml", 'w', encoding='utf-8') as f:
        f.write(workbook_xml)

    workbook_rels = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
  <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml"/>
  <Relationship Id="rId4" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet2.xml"/>
  <Relationship Id="rId5" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet3.xml"/>
</Relationships>'''
    with open(f"{work_dir}/xl/_rels/workbook.xml.rels", 'w', encoding='utf-8') as f:
        f.write(workbook_rels)

    content_types = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml"  ContentType="application/xml"/>
  <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
  <Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>
  <Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/>
  <Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet2.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet3.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
</Types>'''
    with open(f"{work_dir}/[Content_Types].xml", 'w', encoding='utf-8') as f:
        f.write(content_types)

    output_path = f"{OUT_DIR}/05_转型行动计划追踪表.xlsx"
    pack_xlsx(work_dir, output_path)
    print(f"  Created: {output_path}")


if __name__ == "__main__":
    os.makedirs(OUT_DIR, exist_ok=True)
    copy_template()
    create_00_form_guide()
    create_01_maturity_assessment()
    create_02_data_asset_inventory()
    create_03_kpi_library()
    create_04_project_evaluation()
    create_05_action_tracking()
    print("\nAll Excel files created successfully!")
