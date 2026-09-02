import zipfile, os

# --- Define all shared strings (must match indices used in sheets) ---
shared_strings = [
    "序号", "姓名", "性别", "年龄", "职业", "学历", "政治学背景", "学习目标",
    "填表说明：请填写以下信息，所有字段为必填项",
    "课堂互动记录表",
    "发言主题", "发言次数", "发言质量（1-5）", "讨论参与度（1-5）", "综合评分",
    "说明：发言次数为基础计数，发言质量和讨论参与度由讲师评分，综合评分为加权平均",
    "民主评估自测表",
    "题目", "您的答案", "正确答案", "解析", "知识点",
    "说明：本表包含5道民主理论测试题，用于学员自我评估",
    "雅典民主的核心特征是公民直接参与决策，对吗？",
    "直接民主与代议民主的主要区别在于公民是否直接参与决策",
    "自由民主主义强调个人权利、法治和竞争性选举",
    "全球化与民粹主义对民主构成的主要影响是什么？",
    "模块练习记录表",
    "模块名称", "练习完成状态", "得分", "完成日期", "备注",
    '说明：请在练习完成状态下拉选择"已完成"或"未完成"，综合得分自动汇总',
    "行动计划表",
    "行动项", "开始日期", "结束日期", "优先级", "状态",
    "说明：请填写您的民主实践行动计划，并跟踪执行进度",
    "课程反馈表",
    "课程内容满意度（1-5）", "讲师评分（1-5）", "教学方法（1-5）",
    "互动体验（1-5）", "整体评分（1-5）", "改进建议",
    "说明：请对课程各方面进行1-5分评分，1分为非常不满意，5分为非常满意",
    "第1题", "第2题", "第3题", "第4题", "第5题",
    "正确", "错误", "已完成", "未完成",
]

# --- Build sharedStrings.xml content ---
ss_lines = ['<?xml version="1.0" encoding="UTF-8" standalone="yes"?>']
ss_lines.append(f'<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="{len(shared_strings)}" uniqueCount="{len(shared_strings)}">')
for s in shared_strings:
    s_esc = s.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;').replace('"', '&quot;')
    ss_lines.append(f'  <si><t>{s_esc}</t></si>')
ss_lines.append('</sst>')
shared_strings_xml = '\n'.join(ss_lines)

# --- Build styles.xml (minimal but correct) ---
styles_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <numFmts count="0"/>
  <fonts count="3">
    <font><sz val="11"/><name val="Calibri"/></font>
    <font><sz val="11"/><name val="Calibri"/><b/></font>
    <font><sz val="14"/><name val="Calibri"/><b/></font>
  </fonts>
  <fills count="2">
    <fill><patternFill patternType="none"/></fill>
    <fill><patternFill patternType="gray125"/></fill>
  </fills>
  <borders count="1">
    <border><left/><right/><top/><bottom/><diagonal/></border>
  </borders>
  <cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>
  <cellXfs count="7">
    <xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/>
    <xf numFmtId="0" fontId="1" fillId="0" borderId="0" xfId="0"><alignment horizontal="center"/></xf>
    <xf numFmtId="0" fontId="1" fillId="0" borderId="0" xfId="0"><alignment horizontal="center" wrapText="1"/></xf>
    <xf numFmtId="0" fontId="2" fillId="0" borderId="0" xfId="0"><alignment horizontal="center"/></xf>
    <xf numFmtId="0" fontId="1" fillId="0" borderId="0" xfId="0"><alignment horizontal="center"/><Protection hidden="1"/></xf>
    <xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"><alignment wrapText="1"/></xf>
    <xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"><alignment horizontal="center"/></xf>
  </cellXfs>
</styleSheet>'''

# --- Build workbook.xml ---
workbook_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheets>
    <sheet name="学员信息表" sheetId="1" r:id="rId1"/>
    <sheet name="课堂互动记录表" sheetId="2" r:id="rId2"/>
    <sheet name="民主评估自测表" sheetId="3" r:id="rId3"/>
    <sheet name="模块练习记录表" sheetId="4" r:id="rId4"/>
    <sheet name="行动计划表" sheetId="5" r:id="rId5"/>
    <sheet name="课程反馈表" sheetId="6" r:id="rId6"/>
  </sheets>
  <calcPr calcId="0"/>
</workbook>'''

# --- Build workbook.xml.rels ---
workbook_rels_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet2.xml"/>
  <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet3.xml"/>
  <Relationship Id="rId4" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet4.xml"/>
  <Relationship Id="rId5" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet5.xml"/>
  <Relationship Id="rId6" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet6.xml"/>
  <Relationship Id="rId7" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
  <Relationship Id="rId8" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml"/>
</Relationships>'''

# --- Build _rels/.rels ---
root_rels_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/>
</Relationships>'''

# --- Build [Content_Types].xml ---
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
  <Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>
  <Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/>
</Types>'''

# --- Sheet 1: 学员信息表 (6 cols, 10 data rows) ---
# String indices: 0=序号,1=姓名,2=性别,3=年龄,4=职业,5=学历,6=政治学背景,7=学习目标,8=填表说明
sheet1_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"><pane ySplit="3" topLeftCell="A4" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols>
    <col min="1" max="1" width="8" customWidth="1"/>
    <col min="2" max="2" width="12" customWidth="1"/>
    <col min="3" max="3" width="8" customWidth="1"/>
    <col min="4" max="4" width="8" customWidth="1"/>
    <col min="5" max="5" width="12" customWidth="1"/>
    <col min="6" max="6" width="12" customWidth="1"/>
    <col min="7" max="7" width="12" customWidth="1"/>
    <col min="8" max="8" width="20" customWidth="1"/>
  </cols>
  <sheetData>
    <row r="1" ht="24" customHeight="1"><c r="A1" t="s" s="3"><v>0</v></c></row>
    <row r="2" ht="15"><c r="A2" t="s" s="0"><v>8</v></c></row>
    <row r="3" ht="20" customHeight="1">
      <c r="A3" t="s" s="1"><v>0</v></c>
      <c r="B3" t="s" s="1"><v>1</v></c>
      <c r="C3" t="s" s="1"><v>2</v></c>
      <c r="D3" t="s" s="1"><v>3</v></c>
      <c r="E3" t="s" s="1"><v>4</v></c>
      <c r="F3" t="s" s="1"><v>5</v></c>
      <c r="G3" t="s" s="1"><v>6</v></c>
      <c r="H3" t="s" s="1"><v>7</v></c>
    </row>'''
for i in range(10):
    row_num = i + 4
    sheet1_xml += f'\n    <row r="{row_num}" ht="15"><c r="A{row_num}" t="s" s="0"><v>{i}</v></c></row>'
sheet1_xml += '\n  </sheetData>\n  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>\n</worksheet>'

# --- Sheet 2: 课堂互动记录表 (6 cols) ---
# String indices: 9=课堂互动记录表,10=发言主题,11=发言次数,12=发言质量,13=讨论参与度,14=综合评分,15=说明
sheet2_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"><pane ySplit="3" topLeftCell="A4" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols>
    <col min="1" max="1" width="8" customWidth="1"/>
    <col min="2" max="2" width="20" customWidth="1"/>
    <col min="3" max="3" width="12" customWidth="1"/>
    <col min="4" max="4" width="16" customWidth="1"/>
    <col min="5" max="5" width="16" customWidth="1"/>
    <col min="6" max="6" width="12" customWidth="1"/>
  </cols>
  <sheetData>
    <row r="1" ht="24" customHeight="1"><c r="A1" t="s" s="3"><v>9</v></c></row>
    <row r="2" ht="15"><c r="A2" t="s" s="0"><v>15</v></c></row>
    <row r="3" ht="20" customHeight="1">
      <c r="A3" t="s" s="1"><v>0</v></c>
      <c r="B3" t="s" s="1"><v>10</v></c>
      <c r="C3" t="s" s="1"><v>11</v></c>
      <c r="D3" t="s" s="1"><v>12</v></c>
      <c r="E3" t="s" s="1"><v>13</v></c>
      <c r="F3" t="s" s="1"><v>14</v></c>
    </row>'''
for i in range(10):
    row_num = i + 4
    sheet2_xml += f'\n    <row r="{row_num}" ht="15"><c r="A{row_num}" t="s" s="0"><v>{i}</v></c></row>'
sheet2_xml += '\n  </sheetData>\n  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>\n</worksheet>'

# --- Sheet 3: 民主评估自测表 (5 questions) ---
# String indices: 16=民主评估自测表,17=题目,18=您的答案,19=正确答案,20=解析,21=知识点,22=说明
# Q: 23,24,25,26,27  (5 questions)
sheet3_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"><pane ySplit="3" topLeftCell="A4" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols>
    <col min="1" max="1" width="6" customWidth="1"/>
    <col min="2" max="2" width="40" customWidth="1"/>
    <col min="3" max="3" width="12" customWidth="1"/>
    <col min="4" max="4" width="12" customWidth="1"/>
    <col min="5" max="5" width="30" customWidth="1"/>
    <col min="6" max="6" width="20" customWidth="1"/>
  </cols>
  <sheetData>
    <row r="1" ht="24" customHeight="1"><c r="A1" t="s" s="3"><v>16</v></c></row>
    <row r="2" ht="15"><c r="A2" t="s" s="0"><v>22</v></c></row>
    <row r="3" ht="20" customHeight="1">
      <c r="A3" t="s" s="1"><v>17</v></c>
      <c r="B3" t="s" s="1"><v>18</v></c>
      <c r="C3" t="s" s="1"><v>19</v></c>
      <c r="D3" t="s" s="1"><v>20</v></c>
      <c r="E3" t="s" s="1"><v>21</v></c>
    </row>'''
for i in range(5):
    row_num = i + 4
    q_idx = 23 + i
    sheet3_xml += f'\n    <row r="{row_num}" ht="15"><c r="A{row_num}" t="s" s="0"><v>{q_idx}</v></c></row>'
sheet3_xml += '\n  </sheetData>\n  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>\n</worksheet>'

# --- Sheet 4: 模块练习记录表 (12 cols) ---
# String indices: 28=模块练习记录表,29=模块名称,30=练习完成状态,31=得分,32=完成日期,33=备注,34=说明
# We have 6 modules
sheet4_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"><pane ySplit="3" topLeftCell="A4" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols>
    <col min="1" max="1" width="6" customWidth="1"/>
    <col min="2" max="2" width="18" customWidth="1"/>
    <col min="3" max="3" width="12" customWidth="1"/>
    <col min="4" max="4" width="10" customWidth="1"/>
    <col min="5" max="5" width="12" customWidth="1"/>
    <col min="6" max="6" width="20" customWidth="1"/>
  </cols>
  <sheetData>
    <row r="1" ht="24" customHeight="1"><c r="A1" t="s" s="3"><v>28</v></c></row>
    <row r="2" ht="15"><c r="A2" t="s" s="0"><v>34</v></c></row>
    <row r="3" ht="20" customHeight="1">
      <c r="A3" t="s" s="1"><v>0</v></c>
      <c r="B3" t="s" s="1"><v>29</v></c>
      <c r="C3" t="s" s="1"><v>30</v></c>
      <c r="D3" t="s" s="1"><v>31</v></c>
      <c r="E3" t="s" s="1"><v>32</v></c>
      <c r="F3" t="s" s="1"><v>33</v></c>
    </row>'''
for i in range(10):
    row_num = i + 4
    sheet4_xml += f'\n    <row r="{row_num}" ht="15"><c r="A{row_num}" t="s" s="0"><v>{i}</v></c></row>'
sheet4_xml += '\n  </sheetData>\n  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>\n</worksheet>'

# --- Sheet 5: 行动计划表 (6 cols) ---
# String indices: 35=行动计划表,36=行动项,37=开始日期,38=结束日期,39=优先级,40=状态,41=说明
sheet5_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"><pane ySplit="3" topLeftCell="A4" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols>
    <col min="1" max="1" width="6" customWidth="1"/>
    <col min="2" max="2" width="30" customWidth="1"/>
    <col min="3" max="3" width="14" customWidth="1"/>
    <col min="4" max="4" width="14" customWidth="1"/>
    <col min="5" max="5" width="10" customWidth="1"/>
    <col min="6" max="6" width="12" customWidth="1"/>
  </cols>
  <sheetData>
    <row r="1" ht="24" customHeight="1"><c r="A1" t="s" s="3"><v>35</v></c></row>
    <row r="2" ht="15"><c r="A2" t="s" s="0"><v>41</v></c></row>
    <row r="3" ht="20" customHeight="1">
      <c r="A3" t="s" s="1"><v>0</v></c>
      <c r="B3" t="s" s="1"><v>36</v></c>
      <c r="C3" t="s" s="1"><v>37</v></c>
      <c r="D3" t="s" s="1"><v>38</v></c>
      <c r="E3" t="s" s="1"><v>39</v></c>
      <c r="F3" t="s" s="1"><v>40</v></c>
    </row>'''
for i in range(10):
    row_num = i + 4
    sheet5_xml += f'\n    <row r="{row_num}" ht="15"><c r="A{row_num}" t="s" s="0"><v>{i}</v></c></row>'
sheet5_xml += '\n  </sheetData>\n  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>\n</worksheet>'

# --- Sheet 6: 课程反馈表 (7 cols) ---
# String indices: 42=课程反馈表,43=课程内容满意度,44=讲师评分,45=教学方法,46=互动体验,47=整体评分,48=改进建议,49=说明
sheet6_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"><pane ySplit="3" topLeftCell="A4" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols>
    <col min="1" max="1" width="6" customWidth="1"/>
    <col min="2" max="2" width="20" customWidth="1"/>
    <col min="3" max="3" width="16" customWidth="1"/>
    <col min="4" max="4" width="16" customWidth="1"/>
    <col min="5" max="5" width="16" customWidth="1"/>
    <col min="6" max="6" width="16" customWidth="1"/>
    <col min="7" max="7" width="25" customWidth="1"/>
  </cols>
  <sheetData>
    <row r="1" ht="24" customHeight="1"><c r="A1" t="s" s="3"><v>42</v></c></row>
    <row r="2" ht="15"><c r="A2" t="s" s="0"><v>49</v></c></row>
    <row r="3" ht="20" customHeight="1">
      <c r="A3" t="s" s="1"><v>0</v></c>
      <c r="B3" t="s" s="1"><v>43</v></c>
      <c r="C3" t="s" s="1"><v>44</v></c>
      <c r="D3" t="s" s="1"><v>45</v></c>
      <c r="E3" t="s" s="1"><v>46</v></c>
      <c r="F3" t="s" s="1"><v>47</v></c>
      <c r="G3" t="s" s="1"><v>48</v></c>
    </row>'''
for i in range(10):
    row_num = i + 4
    sheet6_xml += f'\n    <row r="{row_num}" ht="15"><c r="A{row_num}" t="s" s="0"><v>{i}</v></c></row>'
sheet6_xml += '\n  </sheetData>\n  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>\n</worksheet>'

# --- Write all files ---
import tempfile
base = os.path.join(tempfile.gettempdir(), 'democracy_xlsx')
def write_file(path, content):
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f'Wrote: {path} ({len(content)} bytes)')

write_file(f'{base}/[Content_Types].xml', content_types_xml)
write_file(f'{base}/_rels/.rels', root_rels_xml)
write_file(f'{base}/xl/workbook.xml', workbook_xml)
write_file(f'{base}/xl/_rels/workbook.xml.rels', workbook_rels_xml)
write_file(f'{base}/xl/styles.xml', styles_xml)
write_file(f'{base}/xl/sharedStrings.xml', shared_strings_xml)
write_file(f'{base}/xl/worksheets/sheet1.xml', sheet1_xml)
write_file(f'{base}/xl/worksheets/sheet2.xml', sheet2_xml)
write_file(f'{base}/xl/worksheets/sheet3.xml', sheet3_xml)
write_file(f'{base}/xl/worksheets/sheet4.xml', sheet4_xml)
write_file(f'{base}/xl/worksheets/sheet5.xml', sheet5_xml)
write_file(f'{base}/xl/worksheets/sheet6.xml', sheet6_xml)

print('\nAll files written. Now packing...')

# --- Pack into xlsx ---
out_path = r'D:\新课开发\政治学\20_民主理论的脉络与危机-从雅典到当代民主衰退辩论\配套表单\配套表单_民主理论.xlsx'
os.makedirs(os.path.dirname(out_path), exist_ok=True)

files_to_pack = [
    '[Content_Types].xml',
    '_rels/.rels',
    'xl/workbook.xml',
    'xl/styles.xml',
    'xl/sharedStrings.xml',
    'xl/worksheets/sheet1.xml',
    'xl/worksheets/sheet2.xml',
    'xl/worksheets/sheet3.xml',
    'xl/worksheets/sheet4.xml',
    'xl/worksheets/sheet5.xml',
    'xl/worksheets/sheet6.xml',
    'xl/_rels/workbook.xml.rels',
]

with zipfile.ZipFile(out_path, 'w', zipfile.ZIP_DEFLATED) as zf:
    for f in files_to_pack:
        full = os.path.join(base, f)
        zf.write(full, f)
        print(f'  Packed: {f}')

print(f'\nOutput: {out_path}')
print(f'Size: {os.path.getsize(out_path)} bytes')

# --- Verify ---
print('\n--- Verification ---')
with zipfile.ZipFile(out_path, 'r') as zf:
    print(f'ZIP integrity: {"OK" if zf.testzip() is None else "BAD"}')
    import re
    wb = zf.read('xl/workbook.xml').decode('utf-8')
    sheets = re.findall(r'name="([^"]+)"', wb)
    print(f'Sheets ({len(sheets)}): {sheets}')
    ss = zf.read('xl/sharedStrings.xml').decode('utf-8')
    unique = re.findall(r'uniqueCount="(\d+)"', ss)
    print(f'Shared strings uniqueCount: {unique}')
    # Check Chinese
    if b'\xe5\xba\x8f\xe5\x8f\xb7' in ss.encode('utf-8'):
        print('Chinese chars (序号): OK')
