#!/usr/bin/env python3
"""Build 战略执行仪表盘.xlsx"""
import os, zipfile, shutil

WORK = '/tmp/dash_work'
if os.path.exists(WORK):
    shutil.rmtree(WORK)
shutil.copytree('C:/Users/Administrator/.claude/skills/Excel表格处理/templates/minimal_xlsx', WORK)

# Shared strings
strings = [
    "战略执行仪表盘", "各维度KPI汇总", "执行进度追踪", "问题预警表",
    "填写说明", "请在蓝色单元格中填写数据，黑色单元格为自动计算结果",
    "公式说明: 完成率=实际值/目标值; 预警=完成率<50%",
    "BSC维度", "指标名称", "指标定义", "目标值", "当前值", "完成率", "权重",
    "财务", "客户", "内部流程", "学习成长",
    "战略主题", "指标编号", "执行阶段", "计划完成日期", "实际完成日期",
    "完成进度", "偏差分析", "责任部门", "负责人",
    "问题等级", "问题描述", "影响范围", "紧急程度", "应对策略",
    "负责人", "解决期限", "当前状态", "是否升级",
    "高", "中", "低",
    "总体完成率", "按时完成率", "预警项目数", "风险项目数",
    "红灯项目", "黄灯项目", "绿灯项目",
    "总体健康度", "需关注", "正常", "严重",
]
n = len(strings)
si = ''.join(f'<si><t>{s}</t></si>' for s in strings)
ss_content = f'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="{n}" uniqueCount="{n}">{si}</sst>'
with open(f'{WORK}/xl/sharedStrings.xml', 'w', encoding='utf-8', newline='') as f:
    f.write(ss_content)

# Index map:
# 0:战略执行仪表盘 1:各维度KPI汇总 2:执行进度追踪 3:问题预警表
# 4:填写说明 5:请在蓝色单元格中填写... 6:公式说明...
# 7:BSC维度 8:指标名称 9:指标定义 10:目标值 11:当前值 12:完成率 13:权重
# 14:财务 15:客户 16:内部流程 17:学习成长
# 18:战略主题 19:指标编号 20:执行阶段 21:计划完成日期 22:实际完成日期
# 23:完成进度 24:偏差分析 25:责任部门 26:负责人
# 27:问题等级 28:问题描述 29:影响范围 30:紧急程度 31:应对策略
# 32:负责人 33:解决期限 34:当前状态 35:是否升级
# 36:高 37:中 38:低
# 39:总体完成率 40:按时完成率 41:预警项目数 42:风险项目数
# 43:红灯项目 44:黄灯项目 45:绿灯项目
# 46:总体健康度 47:需关注 48:正常 49:严重

wb = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
          xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheets>
    <sheet name="各维度KPI汇总" sheetId="1" r:id="rId1"/>
    <sheet name="执行进度追踪" sheetId="2" r:id="rId4"/>
    <sheet name="问题预警表" sheetId="3" r:id="rId5"/>
  </sheets>
  <calcPr calcMode="auto"/>
</workbook>'''
with open(f'{WORK}/xl/workbook.xml', 'w', encoding='utf-8') as f:
    f.write(wb)

rels = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
  <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml"/>
  <Relationship Id="rId4" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet2.xml"/>
  <Relationship Id="rId5" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet3.xml"/>
</Relationships>'''
with open(f'{WORK}/xl/_rels/workbook.xml.rels', 'w', encoding='utf-8') as f:
    f.write(rels)

ct = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml"  ContentType="application/xml"/>
  <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
  <Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet2.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet3.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>
  <Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/>
</Types>'''
with open(f'{WORK}/[Content_Types].xml', 'w', encoding='utf-8') as f:
    f.write(ct)

# ---- SHEET 1: 各维度KPI汇总 ----
# A:战略主题 B:BSC维度 C:指标编号 D:指标名称 E:指标定义 F:目标值 G:当前值 H:完成率 I:权重 J:备注
s1 = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView workbookViewId="0">
      <pane ySplit="4" topLeftCell="A5" activePane="bottomLeft" state="frozen"/>
    </sheetView>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25"
    xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols>
    <col min="1" max="1" width="5" customWidth="1"/>
    <col min="2" max="2" width="24" customWidth="1"/>
    <col min="3" max="3" width="12" customWidth="1"/>
    <col min="4" max="4" width="24" customWidth="1"/>
    <col min="5" max="5" width="18" customWidth="1"/>
    <col min="6" max="6" width="12" customWidth="1"/>
    <col min="7" max="7" width="12" customWidth="1"/>
    <col min="8" max="8" width="12" customWidth="1"/>
    <col min="9" max="9" width="8" customWidth="1"/>
    <col min="10" max="10" width="18" customWidth="1"/>
  </cols>
  <sheetData>
    <row r="1" ht="26" customHeight="1">
      <c r="A1" t="s" s="4"><v>0</v></c>
    </row>
    <row r="2" ht="16" customHeight="1">
      <c r="A2" t="s" s="1"><v>4</v></c>
      <c r="B2" t="s" s="1"><v>5</v></c>
    </row>
    <row r="3" ht="16" customHeight="1">
      <c r="A3" t="s" s="1"><v>6</v></c>
    </row>
    <row r="4" ht="18" customHeight="1">
      <c r="A4" t="s" s="4"><v>18</v></c>
      <c r="B4" t="s" s="4"><v>7</v></c>
      <c r="C4" t="s" s="4"><v>19</v></c>
      <c r="D4" t="s" s="4"><v>8</v></c>
      <c r="E4" t="s" s="4"><v>9</v></c>
      <c r="F4" t="s" s="4"><v>10</v></c>
      <c r="G4" t="s" s="4"><v>11</v></c>
      <c r="H4" t="s" s="4"><v>12</v></c>
      <c r="I4" t="s" s="4"><v>13</v></c>
      <c r="J4" t="s" s="4"><v>23</v></c>
    </row>'''
for row in range(5, 20):
    s1 += f'''
    <row r="{row}">
      <c r="A{row}" t="s" s="1"><v></v></c>
      <c r="B{row}" t="s" s="1"><v></v></c>
      <c r="C{row}" t="s" s="1"><v></v></c>
      <c r="D{row}" t="s" s="1"><v></v></c>
      <c r="E{row}" t="s" s="1"><v></v></c>
      <c r="F{row}" t="s" s="1"><v></v></c>
      <c r="G{row}" t="s" s="1"><v></v></c>
      <c r="H{row}" s="8"><f>IF(F{row}=0,0,G{row}/F{row})</f><v></v></c>
      <c r="I{row}" t="s" s="1"><v></v></c>
      <c r="J{row}" t="s" s="1"><v></v></c>
    </row>'''
# Summary rows for each BSC dimension
s1 += f'''
    <row r="21" ht="18" customHeight="1">
      <c r="A21" t="s" s="4"><v>14</v></c>
      <c r="H21" s="8"><f>AVERAGEIF(B5:B20,B21,H5:H20)</f><v></v></c>
    </row>
    <row r="22" ht="18" customHeight="1">
      <c r="A22" t="s" s="4"><v>15</v></c>
      <c r="H22" s="8"><f>AVERAGEIF(B5:B20,B22,H5:H20)</f><v></v></c>
    </row>
    <row r="23" ht="18" customHeight="1">
      <c r="A23" t="s" s="4"><v>16</v></c>
      <c r="H23" s="8"><f>AVERAGEIF(B5:B20,B23,H5:H20)</f><v></v></c>
    </row>
    <row r="24" ht="18" customHeight="1">
      <c r="A24" t="s" s="4"><v>17</v></c>
      <c r="H24" s="8"><f>AVERAGEIF(B5:B20,B24,H5:H20)</f><v></v></c>
    </row>
    <row r="26" ht="18" customHeight="1">
      <c r="A26" t="s" s="4"><v>39</v></c>
      <c r="H26" s="8"><f>AVERAGE(H5:H20)</f><v></v></c>
    </row>
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''
with open(f'{WORK}/xl/worksheets/sheet1.xml', 'w', encoding='utf-8') as f:
    f.write(s1)

# ---- SHEET 2: 执行进度追踪 ----
# A:战略主题 B:指标编号 C:指标名称 D:执行阶段 E:计划完成日期 F:实际完成日期 G:完成进度 H:偏差分析 I:责任部门 J:负责人
s2 = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView workbookViewId="0">
      <pane ySplit="4" topLeftCell="A5" activePane="bottomLeft" state="frozen"/>
    </sheetView>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25"
    xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols>
    <col min="1" max="1" width="5" customWidth="1"/>
    <col min="2" max="2" width="24" customWidth="1"/>
    <col min="3" max="3" width="10" customWidth="1"/>
    <col min="4" max="4" width="24" customWidth="1"/>
    <col min="5" max="5" width="12" customWidth="1"/>
    <col min="6" max="6" width="12" customWidth="1"/>
    <col min="7" max="7" width="12" customWidth="1"/>
    <col min="8" max="8" width="20" customWidth="1"/>
    <col min="9" max="9" width="16" customWidth="1"/>
    <col min="10" max="10" width="12" customWidth="1"/>
  </cols>
  <sheetData>
    <row r="1" ht="26" customHeight="1">
      <c r="A1" t="s" s="4"><v>2</v></c>
    </row>
    <row r="2" ht="16" customHeight="1">
      <c r="A2" t="s" s="1"><v>4</v></c>
      <c r="B2" t="s" s="1"><v>5</v></c>
    </row>
    <row r="3" ht="16" customHeight="1">
      <c r="A3" t="s" s="1"><v>6</v></c>
    </row>
    <row r="4" ht="18" customHeight="1">
      <c r="A4" t="s" s="4"><v>18</v></c>
      <c r="B4" t="s" s="4"><v>19</v></c>
      <c r="C4" t="s" s="4"><v>8</v></c>
      <c r="D4" t="s" s="4"><v>20</v></c>
      <c r="E4" t="s" s="4"><v>21</v></c>
      <c r="F4" t="s" s="4"><v>22</v></c>
      <c r="G4" t="s" s="4"><v>23</v></c>
      <c r="H4" t="s" s="4"><v>24</v></c>
      <c r="I4" t="s" s="4"><v>25</v></c>
      <c r="J4" t="s" s="4"><v>26</v></c>
    </row>'''
for row in range(5, 20):
    s2 += f'''
    <row r="{row}">
      <c r="A{row}" t="s" s="1"><v></v></c>
      <c r="B{row}" t="s" s="1"><v></v></c>
      <c r="C{row}" t="s" s="1"><v></v></c>
      <c r="D{row}" t="s" s="1"><v></v></c>
      <c r="E{row}" t="s" s="1"><v></v></c>
      <c r="F{row}" t="s" s="1"><v></v></c>
      <c r="G{row}" t="s" s="1"><v></v></c>
      <c r="H{row}" t="s" s="1"><v></v></c>
      <c r="I{row}" t="s" s="1"><v></v></c>
      <c r="J{row}" t="s" s="1"><v></v></c>
    </row>'''
# Summary section
s2 += f'''
    <row r="21" ht="18" customHeight="1">
      <c r="A21" t="s" s="4"><v>40</v></c>
      <c r="G21" s="8"><f>AVERAGE(G5:G20)</f><v></v></c>
    </row>
    <row r="22" ht="18" customHeight="1">
      <c r="A22" t="s" s="4"><v>41</v></c>
      <c r="G22" s="8"><f>COUNTIF(G5:G20,\\"&lt;0.5\\")</f><v></v></c>
    </row>
    <row r="23" ht="18" customHeight="1">
      <c r="A23" t="s" s="4"><v>42</v></c>
      <c r="G23" s="8"><f>COUNTIF(G5:G20,\\"&gt;=0.8\\")</f><v></v></c>
    </row>
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''
with open(f'{WORK}/xl/worksheets/sheet2.xml', 'w', encoding='utf-8') as f:
    f.write(s2)

# ---- SHEET 3: 问题预警表 ----
# A:问题等级 B:问题描述 C:影响范围 D:紧急程度 E:应对策略 F:负责人 G:解决期限 H:当前状态 I:是否升级
s3 = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView workbookViewId="0">
      <pane ySplit="4" topLeftCell="A5" activePane="bottomLeft" state="frozen"/>
    </sheetView>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25"
    xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols>
    <col min="1" max="1" width="10" customWidth="1"/>
    <col min="2" max="2" width="28" customWidth="1"/>
    <col min="3" max="3" width="16" customWidth="1"/>
    <col min="4" max="4" width="10" customWidth="1"/>
    <col min="5" max="5" width="24" customWidth="1"/>
    <col min="6" max="6" width="14" customWidth="1"/>
    <col min="7" max="7" width="14" customWidth="1"/>
    <col min="8" max="8" width="14" customWidth="1"/>
    <col min="9" max="9" width="12" customWidth="1"/>
  </cols>
  <sheetData>
    <row r="1" ht="26" customHeight="1">
      <c r="A1" t="s" s="4"><v>3</v></c>
    </row>
    <row r="2" ht="16" customHeight="1">
      <c r="A2" t="s" s="1"><v>4</v></c>
      <c r="B2" t="s" s="1"><v>5</v></c>
    </row>
    <row r="3" ht="16" customHeight="1">
      <c r="A3" t="s" s="1"><v>6</v></c>
    </row>
    <row r="4" ht="18" customHeight="1">
      <c r="A4" t="s" s="4"><v>27</v></c>
      <c r="B4" t="s" s="4"><v>28</v></c>
      <c r="C4" t="s" s="4"><v>29</v></c>
      <c r="D4" t="s" s="4"><v>30</v></c>
      <c r="E4" t="s" s="4"><v>31</v></c>
      <c r="F4" t="s" s="4"><v>32</v></c>
      <c r="G4" t="s" s="4"><v>33</v></c>
      <c r="H4" t="s" s="4"><v>34</v></c>
      <c r="I4" t="s" s="4"><v>35</v></c>
    </row>'''
for row in range(5, 18):
    s3 += f'''
    <row r="{row}">
      <c r="A{row}" t="s" s="1"><v></v></c>
      <c r="B{row}" t="s" s="1"><v></v></c>
      <c r="C{row}" t="s" s="1"><v></v></c>
      <c r="D{row}" t="s" s="1"><v></v></c>
      <c r="E{row}" t="s" s="1"><v></v></c>
      <c r="F{row}" t="s" s="1"><v></v></c>
      <c r="G{row}" t="s" s="1"><v></v></c>
      <c r="H{row}" t="s" s="1"><v></v></c>
      <c r="I{row}" t="s" s="1"><v></v></c>
    </row>'''
# Summary: high/medium/low risk counts
s3 += f'''
    <row r="19" ht="18" customHeight="1">
      <c r="A19" t="s" s="4"><v>43</v></c>
      <c r="D19" s="10"><f>COUNTIF(A5:A18,A19)</f><v></v></c>
    </row>
    <row r="20" ht="18" customHeight="1">
      <c r="A20" t="s" s="4"><v>44</v></c>
      <c r="D20" s="10"><f>COUNTIF(A5:A18,A20)</f><v></v></c>
    </row>
    <row r="21" ht="18" customHeight="1">
      <c r="A21" t="s" s="4"><v>45</v></c>
      <c r="D21" s="10"><f>COUNTIF(A5:A18,A21)</f><v></v></c>
    </row>
    <row r="23" ht="18" customHeight="1">
      <c r="A23" t="s" s="4"><v>46</v></c>
      <c r="D23" s="8"><f>IF(COUNTIF(A5:A18,A19)&gt;0,49,IF(COUNTIF(A5:A18,A20)&gt;0,47,48))</f><v></v></c>
    </row>
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''
with open(f'{WORK}/xl/worksheets/sheet3.xml', 'w', encoding='utf-8') as f:
    f.write(s3)

# ---- Pack ----
out = 'D:/新课开发/管理学/05-战略执行与落地/战略执行仪表盘.xlsx'
with zipfile.ZipFile(out, 'w', zipfile.ZIP_DEFLATED) as z:
    for dirpath, _, files in os.walk(WORK):
        for fname in files:
            fpath = os.path.join(dirpath, fname)
            arcname = os.path.relpath(fpath, WORK)
            z.write(fpath, arcname)
print(f'Packed: {out} ({os.path.getsize(out):,} bytes)')
