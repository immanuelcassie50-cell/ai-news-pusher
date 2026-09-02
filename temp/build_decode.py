#!/usr/bin/env python3
"""Build 战略解码工具.xlsx"""
import os, zipfile, shutil

WORK = '/tmp/decode_work'
if os.path.exists(WORK):
    shutil.rmtree(WORK)
shutil.copytree('C:/Users/Administrator/.claude/skills/Excel表格处理/templates/minimal_xlsx', WORK)

# Shared strings for 战略解码工具
strings = [
    "战略澄清工作表", "指标分解表", "目标对齐检查表", "执行追踪表",
    "填写说明", "请在蓝色单元格中填写数据，黑色单元格为自动计算结果",
    "公式说明: 上级指标值=SUM(下级指标)", "战略主题", "战略目标", "关键举措",
    "负责部门", "完成时间", "指标名称", "指标定义", "计算方法",
    "目标值", "当前值", "完成率", "权重", "数据来源", "关联BSC维度",
    "财务", "客户", "内部流程", "学习成长", "指标编号", "上级指标",
    "下级指标数", "分配权重", "对齐状态", "对齐说明", "未对齐", "部分对齐", "完全对齐",
    "季度", "Q1", "Q2", "Q3", "Q4", "年度", "执行状态", "按计划", "有风险", "严重落后",
    "问题描述", "根本原因", "应对措施", "负责人", "解决期限", "进展更新",
    "预警指标数", "按时完成率", "健康度评分", "风险等级", "高风险", "中风险", "低风险",
]
n = len(strings)
si = ''.join(f'<si><t>{s}</t></si>' for s in strings)
ss_content = f'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="{n}" uniqueCount="{n}">{si}</sst>'
with open(f'{WORK}/xl/sharedStrings.xml', 'w', encoding='utf-8', newline='') as f:
    f.write(ss_content)

# ---- workbook.xml ----
wb = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
          xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheets>
    <sheet name="战略澄清工作表" sheetId="1" r:id="rId1"/>
    <sheet name="指标分解表" sheetId="2" r:id="rId4"/>
    <sheet name="目标对齐检查表" sheetId="3" r:id="rId5"/>
    <sheet name="执行追踪表" sheetId="4" r:id="rId6"/>
  </sheets>
  <calcPr calcMode="auto"/>
</workbook>'''
with open(f'{WORK}/xl/workbook.xml', 'w', encoding='utf-8') as f:
    f.write(wb)

# ---- workbook.xml.rels ----
rels = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
  <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml"/>
  <Relationship Id="rId4" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet2.xml"/>
  <Relationship Id="rId5" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet3.xml"/>
  <Relationship Id="rId6" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet4.xml"/>
</Relationships>'''
with open(f'{WORK}/xl/_rels/workbook.xml.rels', 'w', encoding='utf-8') as f:
    f.write(rels)

# ---- [Content_Types].xml ----
ct = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml"  ContentType="application/xml"/>
  <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
  <Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet2.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet3.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet4.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>
  <Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/>
</Types>'''
with open(f'{WORK}/[Content_Types].xml', 'w', encoding='utf-8') as f:
    f.write(ct)

# Index mapping for shared strings
# 0:战略澄清工作表 1:指标分解表 2:目标对齐检查表 3:执行追踪表
# 4:填写说明 5:请在蓝色单元格中填写... 6:公式说明...
# 7:战略主题 8:战略目标 9:关键举措 10:负责部门 11:完成时间
# 12:指标名称 13:指标定义 14:计算方法 15:目标值 16:当前值 17:完成率 18:权重
# 19:数据来源 20:关联BSC维度 21:财务 22:客户 23:内部流程 24:学习成长
# 25:指标编号 26:上级指标 27:下级指标数 28:分配权重 29:对齐状态
# 30:对齐说明 31:未对齐 32:部分对齐 33:完全对齐
# 34:季度 35:Q1 36:Q2 37:Q3 38:Q4 39:年度
# 40:执行状态 41:按计划 42:有风险 43:严重落后
# 44:问题描述 45:根本原因 46:应对措施 47:负责人 48:解决期限 49:进展更新
# 50:预警指标数 51:按时完成率 52:健康度评分 53:风险等级 54:高风险 55:中风险 56:低风险

def H(label_idx):
    return f'<c r="{{col}}{{row}}" t="s" s="4"><v>{label_idx}</v></c>'
def I(col, row):  # input cell (blue)
    return f'<c r="{col}{row}" t="s" s="1"><v></v></c>'
def F(col, row, formula):  # formula cell (black)
    return f'<c r="{col}{row}" s="8"><f>{formula}</f><v></v></c>'

# ---- SHEET 1: 战略澄清工作表 ----
# Columns: A:战略主题 B:战略目标 C:关键举措 D:负责部门 E:完成时间 F:备注
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
    <col min="2" max="2" width="28" customWidth="1"/>
    <col min="3" max="3" width="32" customWidth="1"/>
    <col min="4" max="4" width="28" customWidth="1"/>
    <col min="5" max="5" width="14" customWidth="1"/>
    <col min="6" max="6" width="14" customWidth="1"/>
    <col min="7" max="7" width="20" customWidth="1"/>
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
      <c r="A4" t="s" s="4"><v>7</v></c>
      <c r="B4" t="s" s="4"><v>8</v></c>
      <c r="C4" t="s" s="4"><v>9</v></c>
      <c r="D4" t="s" s="4"><v>10</v></c>
      <c r="E4" t="s" s="4"><v>11</v></c>
      <c r="F4" t="s" s="4"><v>17</v></c>
    </row>'''
for row in range(5, 16):
    s1 += f'''
    <row r="{row}">
      <c r="A{row}" t="s" s="1"><v></v></c>
      <c r="B{row}" t="s" s="1"><v></v></c>
      <c r="C{row}" t="s" s="1"><v></v></c>
      <c r="D{row}" t="s" s="1"><v></v></c>
      <c r="E{row}" t="s" s="1"><v></v></c>
      <c r="F{row}" t="s" s="1"><v></v></c>
    </row>'''
s1 += '''
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''
with open(f'{WORK}/xl/worksheets/sheet1.xml', 'w', encoding='utf-8') as f:
    f.write(s1)

# ---- SHEET 2: 指标分解表 ----
# A:指标编号 B:指标名称 C:指标定义 D:计算方法 E:目标值 F:当前值 G:完成率 H:权重 I:数据来源 J:关联BSC维度
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
    <col min="1" max="1" width="8" customWidth="1"/>
    <col min="2" max="2" width="24" customWidth="1"/>
    <col min="3" max="3" width="20" customWidth="1"/>
    <col min="4" max="4" width="22" customWidth="1"/>
    <col min="5" max="5" width="12" customWidth="1"/>
    <col min="6" max="6" width="12" customWidth="1"/>
    <col min="7" max="7" width="12" customWidth="1"/>
    <col min="8" max="8" width="8" customWidth="1"/>
    <col min="9" max="9" width="14" customWidth="1"/>
    <col min="10" max="10" width="12" customWidth="1"/>
  </cols>
  <sheetData>
    <row r="1" ht="26" customHeight="1">
      <c r="A1" t="s" s="4"><v>1</v></c>
    </row>
    <row r="2" ht="16" customHeight="1">
      <c r="A2" t="s" s="1"><v>4</v></c>
      <c r="B2" t="s" s="1"><v>5</v></c>
    </row>
    <row r="3" ht="16" customHeight="1">
      <c r="A3" t="s" s="1"><v>6</v></c>
    </row>
    <row r="4" ht="18" customHeight="1">
      <c r="A4" t="s" s="4"><v>25</v></c>
      <c r="B4" t="s" s="4"><v>12</v></c>
      <c r="C4" t="s" s="4"><v>13</v></c>
      <c r="D4" t="s" s="4"><v>14</v></c>
      <c r="E4" t="s" s="4"><v>15</v></c>
      <c r="F4" t="s" s="4"><v>16</v></c>
      <c r="G4" t="s" s="4"><v>17</v></c>
      <c r="H4" t="s" s="4"><v>18</v></c>
      <c r="I4" t="s" s="4"><v>19</v></c>
      <c r="J4" t="s" s="4"><v>20</v></c>
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
      <c r="G{row}" s="8"><f>IF(E{row}=0,0,F{row}/E{row})</f><v></v></c>
      <c r="H{row}" t="s" s="1"><v></v></c>
      <c r="I{row}" t="s" s="1"><v></v></c>
      <c r="J{row}" t="s" s="1"><v></v></c>
    </row>'''
s2 += '''
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''
with open(f'{WORK}/xl/worksheets/sheet2.xml', 'w', encoding='utf-8') as f:
    f.write(s2)

# ---- SHEET 3: 目标对齐检查表 ----
# A:指标编号 B:上级指标 C:下级指标数 D:分配权重 E:对齐状态 F:对齐说明
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
    <col min="1" max="1" width="8" customWidth="1"/>
    <col min="2" max="2" width="26" customWidth="1"/>
    <col min="3" max="3" width="12" customWidth="1"/>
    <col min="4" max="4" width="12" customWidth="1"/>
    <col min="5" max="5" width="12" customWidth="1"/>
    <col min="6" max="6" width="28" customWidth="1"/>
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
      <c r="A4" t="s" s="4"><v>25</v></c>
      <c r="B4" t="s" s="4"><v>26</v></c>
      <c r="C4" t="s" s="4"><v>27</v></c>
      <c r="D4" t="s" s="4"><v>28</v></c>
      <c r="E4" t="s" s="4"><v>29</v></c>
      <c r="F4" t="s" s="4"><v>30</v></c>
    </row>'''
for row in range(5, 20):
    s3 += f'''
    <row r="{row}">
      <c r="A{row}" t="s" s="1"><v></v></c>
      <c r="B{row}" t="s" s="1"><v></v></c>
      <c r="C{row}" t="s" s="1"><v></v></c>
      <c r="D{row}" t="s" s="1"><v></v></c>
      <c r="E{row}" t="s" s="1"><v></v></c>
      <c r="F{row}" t="s" s="1"><v></v></c>
    </row>'''
s3 += '''
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''
with open(f'{WORK}/xl/worksheets/sheet3.xml', 'w', encoding='utf-8') as f:
    f.write(s3)

# ---- SHEET 4: 执行追踪表 ----
# A:指标名称 B:Q1 C:Q2 D:Q3 E:Q4 F:年度 G:执行状态 H:风险等级 I:问题描述 J:应对措施 K:负责人 L:解决期限
s4 = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
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
    <col min="1" max="1" width="22" customWidth="1"/>
    <col min="2" max="2" width="12" customWidth="1"/>
    <col min="3" max="3" width="12" customWidth="1"/>
    <col min="4" max="4" width="12" customWidth="1"/>
    <col min="5" max="5" width="12" customWidth="1"/>
    <col min="6" max="6" width="12" customWidth="1"/>
    <col min="7" max="7" width="12" customWidth="1"/>
    <col min="8" max="8" width="12" customWidth="1"/>
    <col min="9" max="9" width="20" customWidth="1"/>
    <col min="10" max="10" width="20" customWidth="1"/>
    <col min="11" max="11" width="14" customWidth="1"/>
    <col min="12" max="12" width="14" customWidth="1"/>
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
      <c r="A4" t="s" s="4"><v>12</v></c>
      <c r="B4" t="s" s="4"><v>35</v></c>
      <c r="C4" t="s" s="4"><v>36</v></c>
      <c r="D4" t="s" s="4"><v>37</v></c>
      <c r="E4" t="s" s="4"><v>38</v></c>
      <c r="F4" t="s" s="4"><v>39</v></c>
      <c r="G4" t="s" s="4"><v>40</v></c>
      <c r="H4" t="s" s="4"><v>53</v></c>
      <c r="I4" t="s" s="4"><v>44</v></c>
      <c r="J4" t="s" s="4"><v>46</v></c>
      <c r="K4" t="s" s="4"><v>47</v></c>
      <c r="L4" t="s" s="4"><v>48</v></c>
    </row>'''
for row in range(5, 20):
    s4 += f'''
    <row r="{row}">
      <c r="A{row}" t="s" s="1"><v></v></c>
      <c r="B{row}" t="s" s="1"><v></v></c>
      <c r="C{row}" t="s" s="1"><v></v></c>
      <c r="D{row}" t="s" s="1"><v></v></c>
      <c r="E{row}" t="s" s="1"><v></v></c>
      <c r="F{row}" s="8"><f>AVERAGE(B{row}:E{row})</f><v></v></c>
      <c r="G{row}" t="s" s="1"><v></v></c>
      <c r="H{row}" t="s" s="1"><v></v></c>
      <c r="I{row}" t="s" s="1"><v></v></c>
      <c r="J{row}" t="s" s="1"><v></v></c>
      <c r="K{row}" t="s" s="1"><v></v></c>
      <c r="L{row}" t="s" s="1"><v></v></c>
    </row>'''
s4 += '''
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''
with open(f'{WORK}/xl/worksheets/sheet4.xml', 'w', encoding='utf-8') as f:
    f.write(s4)

# ---- Pack ----
out = 'D:/新课开发/管理学/05-战略执行与落地/战略解码工具.xlsx'
with zipfile.ZipFile(out, 'w', zipfile.ZIP_DEFLATED) as z:
    for dirpath, _, files in os.walk(WORK):
        for fname in files:
            fpath = os.path.join(dirpath, fname)
            arcname = os.path.relpath(fpath, WORK)
            z.write(fpath, arcname)
print(f'Packed: {out} ({os.path.getsize(out):,} bytes)')
