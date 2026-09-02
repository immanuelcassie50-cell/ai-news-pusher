#!/usr/bin/env python3
import shutil, os, subprocess

# Copy minimal template fresh
shutil.rmtree('/tmp/xlsx_work', ignore_errors=True)
shutil.copytree('C:/Users/Administrator/.claude/skills/Excel表格处理/templates/minimal_xlsx', '/tmp/xlsx_work')

work_dir = '/tmp/xlsx_work/xl'
os.makedirs(work_dir + '/worksheets', exist_ok=True)

def esc(s):
    """Escape XML special characters"""
    return s.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;').replace('"', '&quot;')

# Sheet names for 10 forms
sheets = [
    ('F1_岗位AI能力认证标准表', 1),
    ('F2_能力认证评分细则表', 2),
    ('F3_部门AI经验分享机制方案', 3),
    ('F4_AI Champion职责与激励表', 4),
    ('F5_部门AI知识库建设方案', 5),
    ('F6_知识沉淀三层结构图', 6),
    ('F7_保障体系设计检查表', 7),
    ('F8_激励与考核机制表', 8),
    ('F9_我的AI能力沉淀计划', 9),
    ('F10_团队AI能力台账', 10),
]

# workbook.xml
wb = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><sheets>'
for name, idx in sheets:
    rid = f'rId{1 if idx==1 else idx+3}'
    wb += f'<sheet name="{esc(name)}" sheetId="{idx}" r:id="{rid}"/>'
wb += '</sheets></workbook>'
with open(work_dir + '/workbook.xml', 'w', encoding='utf-8') as f: f.write(wb)

# workbook.xml.rels
rels = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">'
rels += '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>'
rels += '<Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>'
rels += '<Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml"/>'
for idx in range(2, 11):
    rels += f'<Relationship Id="rId{idx+3}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet{idx}.xml"/>'
rels += '</Relationships>'
with open(work_dir + '/_rels/workbook.xml.rels', 'w', encoding='utf-8') as f: f.write(rels)

# Content_Types.xml
ct = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">'
ct += '<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>'
ct += '<Default Extension="xml" ContentType="application/xml"/>'
ct += '<Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>'
ct += '<Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>'
ct += '<Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/>'
for idx in range(1, 11):
    ct += f'<Override PartName="/xl/worksheets/sheet{idx}.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>'
ct += '</Types>'
with open('/tmp/xlsx_work/[Content_Types].xml', 'w', encoding='utf-8') as f: f.write(ct)

# Shared strings (indices 0-92)
strings = [
    'AI能力认证与团队沉淀：工具表单', '表单编号：F1', '版本：V1.0', '更新时间',
    '岗位AI能力认证标准表', '填写说明：用于评估岗位员工的AI能力等级',
    '能力维度', '定义', '权重', '等级说明',
    'AI工具使用', '掌握并熟练使用AI工具完成工作任务', '30%', 'L1-L5',
    '提示词编写', '能够编写高质量提示词获取预期结果', '25%', 'L1-L5',
    '场景应用', '将AI能力应用于实际业务场景的能力', '25%', 'L1-L5',
    '经验分享', '总结分享AI应用经验帮助他人的能力', '10%', 'L1-L5',
    '安全意识', '了解AI使用安全规范和风险防控', '10%', 'L1-L5',
    '能力认证评分细则表', '填写说明：行为锚定的评分细则',
    '评分维度', '行为描述', '得分(1-5)', '权重',
    '部门AI经验分享机制方案', '填写说明：部门AI经验分享机制设计',
    '形式', '时长', '频率', '参与人数', '适用场景',
    'AI Champion职责与激励表', '填写说明：AI Champion职责与激励方案',
    '职责类别', '具体职责', '执行频率',
    '部门AI知识库建设方案', '填写说明：部门AI知识库建设规划',
    '一级分类', '二级分类', '内容说明', '占比目标',
    '知识沉淀三层结构图', '填写说明：知识沉淀的三个层次',
    '层次', '名称', '特征', '示例',
    '保障体系设计检查表', '填写说明：检查保障体系设计完整性',
    '序号', '检查项', '完成标准', '自评(0-5)', '改进计划',
    '激励与考核机制表', '填写说明：激励与考核机制设计',
    '激励类型', '具体内容', '适用对象', '发放标准',
    '我的AI能力沉淀计划', '填写说明：个人AI能力提升计划',
    '目标类型', '具体目标', '衡量标准', '完成日期', '状态',
    '团队AI能力台账', '填写说明：记录团队成员AI能力现状',
    '序号', '姓名', '岗位', 'AI工具', '提示词', '场景', '分享', '安全', '综合等级',
]

si = f'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="{len(strings)}" uniqueCount="{len(strings)}">'
for s in strings:
    si += f'<si><t>{esc(s)}</t></si>'
si += '</sst>'
with open(work_dir + '/sharedStrings.xml', 'w', encoding='utf-8') as f: f.write(si)

# Sheet 1 - F1 岗位AI能力认证标准表
s1 = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"/></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols><col min="1" max="1" width="18" customWidth="1"/><col min="2" max="2" width="35" customWidth="1"/><col min="3" max="3" width="12" customWidth="1"/><col min="4" max="4" width="12" customWidth="1"/></cols>
  <sheetData>
    <row r="1"><c r="A1" t="s" s="4"><v>0</v></c></row>
    <row r="2"><c r="A2" t="s" s="1"><v>1</v></c><c r="B2" t="s" s="1"><v>2</v></c><c r="C2" t="s" s="1"><v>3</v></c></row>
    <row r="3"><c r="A3" t="s" s="4"><v>4</v></c></row>
    <row r="4"><c r="A4" t="s" s="4"><v>5</v></c><c r="B4" t="s" s="4"><v>6</v></c><c r="C4" t="s" s="4"><v>7</v></c><c r="D4" t="s" s="4"><v>8</v></c></row>
    <row r="5"><c r="A5" t="s" s="1"><v>9</v></c><c r="B5" t="s" s="1"><v>10</v></c><c r="C5" t="s" s="1"><v>11</v></c><c r="D5" t="s" s="1"><v>12</v></c></row>
    <row r="6"><c r="A6" t="s" s="1"><v>13</v></c><c r="B6" t="s" s="1"><v>14</v></c><c r="C6" t="s" s="1"><v>15</v></c><c r="D6" t="s" s="1"><v>16</v></c></row>
    <row r="7"><c r="A7" t="s" s="1"><v>17</v></c><c r="B7" t="s" s="1"><v>18</v></c><c r="C7" t="s" s="1"><v>19</v></c><c r="D7" t="s" s="1"><v>20</v></c></row>
    <row r="8"><c r="A8" t="s" s="1"><v>21</v></c><c r="B8" t="s" s="1"><v>22</v></c><c r="C8" t="s" s="1"><v>23</v></c><c r="D8" t="s" s="1"><v>24</v></c></row>
    <row r="9"><c r="A9" t="s" s="1"><v>25</v></c><c r="B9" t="s" s="1"><v>26</v></c><c r="C9" t="s" s="1"><v>27</v></c><c r="D9" t="s" s="1"><v>28</v></c></row>
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

# Sheet 2 - F2 能力认证评分细则表
s2 = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"/></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols><col min="1" max="1" width="15" customWidth="1"/><col min="2" max="2" width="45" customWidth="1"/><col min="3" max="3" width="12" customWidth="1"/><col min="4" max="4" width="12" customWidth="1"/></cols>
  <sheetData>
    <row r="1"><c r="A1" t="s" s="4"><v>29</v></c></row>
    <row r="2"><c r="A2" t="s" s="1"><v>30</v></c></row>
    <row r="3"><c r="A3" t="s" s="4"><v>31</v></c><c r="B3" t="s" s="4"><v>32</v></c><c r="C3" t="s" s="4"><v>33</v></c><c r="D3" t="s" s="4"><v>34</v></c></row>
    <row r="4"><c r="A4" t="s" s="1"><v>35</v></c><c r="B4" t="s" s="1"><v></v></c><c r="C4" t="s" s="1"><v></v></c><c r="D4" t="s" s="1"><v>11</v></c></row>
    <row r="5"><c r="A5" t="s" s="1"><v>35</v></c><c r="B5" t="s" s="1"><v></v></c><c r="C5" t="s" s="1"><v></v></c><c r="D5" t="s" s="1"><v>15</v></c></row>
    <row r="6"><c r="A6" t="s" s="1"><v>35</v></c><c r="B6" t="s" s="1"><v></v></c><c r="C6" t="s" s="1"><v></v></c><c r="D6" t="s" s="1"><v>19</v></c></row>
    <row r="7"><c r="A7" t="s" s="1"><v>35</v></c><c r="B7" t="s" s="1"><v></v></c><c r="C7" t="s" s="1"><v></v></c><c r="D7" t="s" s="1"><v>23</v></c></row>
    <row r="8"><c r="A8" t="s" s="1"><v>35</v></c><c r="B8" t="s" s="1"><v></v></c><c r="C8" t="s" s="1"><v></v></c><c r="D8" t="s" s="1"><v>27</v></c></row>
    <row r="9"><c r="A9" t="s" s="1"><v>36</v></c><c r="B9" t="s" s="1"><v></v></c><c r="C9" t="s" s="1"><v></v></c><c r="D9" t="s" s="1"><v>11</v></c></row>
    <row r="10"><c r="A10" t="s" s="1"><v>36</v></c><c r="B10" t="s" s="1"><v></v></c><c r="C10" t="s" s="1"><v></v></c><c r="D10" t="s" s="1"><v>15</v></c></row>
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

# Sheet 3 - F3 部门AI经验分享机制方案
s3 = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"/></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols><col min="1" max="1" width="15" customWidth="1"/><col min="2" max="2" width="15" customWidth="1"/><col min="3" max="3" width="12" customWidth="1"/><col min="4" max="4" width="12" customWidth="1"/><col min="5" max="5" width="25" customWidth="1"/></cols>
  <sheetData>
    <row r="1"><c r="A1" t="s" s="4"><v>37</v></c></row>
    <row r="2"><c r="A2" t="s" s="1"><v>38</v></c></row>
    <row r="3"><c r="A3" t="s" s="4"><v>39</v></c><c r="B3" t="s" s="4"><v>40</v></c><c r="C3" t="s" s="4"><v>41</v></c><c r="D3" t="s" s="4"><v>42</v></c><c r="E3" t="s" s="4"><v>43</v></c></row>
    <row r="4"><c r="A4" t="s" s="1"><v></v></c><c r="B4" t="s" s="1"><v></v></c><c r="C4" t="s" s="1"><v></v></c><c r="D4" t="s" s="1"><v></v></c><c r="E4" t="s" s="1"><v></v></c></row>
    <row r="5"><c r="A5" t="s" s="1"><v></v></c><c r="B5" t="s" s="1"><v></v></c><c r="C5" t="s" s="1"><v></v></c><c r="D5" t="s" s="1"><v></v></c><c r="E5" t="s" s="1"><v></v></c></row>
    <row r="6"><c r="A6" t="s" s="1"><v></v></c><c r="B6" t="s" s="1"><v></v></c><c r="C6" t="s" s="1"><v></v></c><c r="D6" t="s" s="1"><v></v></c><c r="E6" t="s" s="1"><v></v></c></row>
    <row r="7"><c r="A7" t="s" s="1"><v></v></c><c r="B7" t="s" s="1"><v></v></c><c r="C7" t="s" s="1"><v></v></c><c r="D7" t="s" s="1"><v></v></c><c r="E7" t="s" s="1"><v></v></c></row>
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

# Sheet 4 - F4 AI Champion职责与激励表
s4 = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"/></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols><col min="1" max="1" width="15" customWidth="1"/><col min="2" max="2" width="40" customWidth="1"/><col min="3" max="3" width="15" customWidth="1"/></cols>
  <sheetData>
    <row r="1"><c r="A1" t="s" s="4"><v>44</v></c></row>
    <row r="2"><c r="A2" t="s" s="1"><v>45</v></c></row>
    <row r="3"><c r="A3" t="s" s="4"><v>46</v></c><c r="B3" t="s" s="4"><v>47</v></c><c r="C3" t="s" s="4"><v>48</v></c></row>
    <row r="4"><c r="A4" t="s" s="1"><v></v></c><c r="B4" t="s" s="1"><v></v></c><c r="C4" t="s" s="1"><v></v></c></row>
    <row r="5"><c r="A5" t="s" s="1"><v></v></c><c r="B5" t="s" s="1"><v></v></c><c r="C5" t="s" s="1"><v></v></c></row>
    <row r="6"><c r="A6" t="s" s="1"><v></v></c><c r="B6" t="s" s="1"><v></v></c><c r="C6" t="s" s="1"><v></v></c></row>
    <row r="7"><c r="A7" t="s" s="1"><v></v></c><c r="B7" t="s" s="1"><v></v></c><c r="C7" t="s" s="1"><v></v></c></row>
    <row r="8"><c r="A8" t="s" s="1"><v></v></c><c r="B8" t="s" s="1"><v></v></c><c r="C8" t="s" s="1"><v></v></c></row>
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

# Sheet 5 - F5 部门AI知识库建设方案
s5 = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"/></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols><col min="1" max="1" width="15" customWidth="1"/><col min="2" max="2" width="20" customWidth="1"/><col min="3" max="3" width="30" customWidth="1"/><col min="4" max="4" width="12" customWidth="1"/></cols>
  <sheetData>
    <row r="1"><c r="A1" t="s" s="4"><v>49</v></c></row>
    <row r="2"><c r="A2" t="s" s="1"><v>50</v></c></row>
    <row r="3"><c r="A3" t="s" s="4"><v>51</v></c><c r="B3" t="s" s="4"><v>52</v></c><c r="C3" t="s" s="4"><v>53</v></c><c r="D3" t="s" s="4"><v>54</v></c></row>
    <row r="4"><c r="A4" t="s" s="1"><v></v></c><c r="B4" t="s" s="1"><v></v></c><c r="C4" t="s" s="1"><v></v></c><c r="D4" t="s" s="1"><v></v></c></row>
    <row r="5"><c r="A5" t="s" s="1"><v></v></c><c r="B5" t="s" s="1"><v></v></c><c r="C5" t="s" s="1"><v></v></c><c r="D5" t="s" s="1"><v></v></c></row>
    <row r="6"><c r="A6" t="s" s="1"><v></v></c><c r="B6" t="s" s="1"><v></v></c><c r="C6" t="s" s="1"><v></v></c><c r="D6" t="s" s="1"><v></v></c></row>
    <row r="7"><c r="A7" t="s" s="1"><v></v></c><c r="B7" t="s" s="1"><v></v></c><c r="C7" t="s" s="1"><v></v></c><c r="D7" t="s" s="1"><v></v></c></row>
    <row r="8"><c r="A8" t="s" s="1"><v></v></c><c r="B8" t="s" s="1"><v></v></c><c r="C8" t="s" s="1"><v></v></c><c r="D8" t="s" s="1"><v></v></c></row>
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

# Sheet 6 - F6 知识沉淀三层结构图
s6 = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"/></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols><col min="1" max="1" width="12" customWidth="1"/><col min="2" max="2" width="15" customWidth="1"/><col min="3" max="3" width="35" customWidth="1"/><col min="4" max="4" width="35" customWidth="1"/></cols>
  <sheetData>
    <row r="1"><c r="A1" t="s" s="4"><v>55</v></c></row>
    <row r="2"><c r="A2" t="s" s="1"><v>56</v></c></row>
    <row r="3"><c r="A3" t="s" s="4"><v>57</v></c><c r="B3" t="s" s="4"><v>58</v></c><c r="C3" t="s" s="4"><v>59</v></c><c r="D3" t="s" s="4"><v>60</v></c></row>
    <row r="4"><c r="A4" t="s" s="1"><v></v></c><c r="B4" t="s" s="1"><v></v></c><c r="C4" t="s" s="1"><v></v></c><c r="D4" t="s" s="1"><v></v></c></row>
    <row r="5"><c r="A5" t="s" s="1"><v></v></c><c r="B5" t="s" s="1"><v></v></c><c r="C5" t="s" s="1"><v></v></c><c r="D5" t="s" s="1"><v></v></c></row>
    <row r="6"><c r="A6" t="s" s="1"><v></v></c><c r="B6" t="s" s="1"><v></v></c><c r="C6" t="s" s="1"><v></v></c><c r="D6" t="s" s="1"><v></v></c></row>
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

# Sheet 7 - F7 保障体系设计检查表
s7 = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"/></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols><col min="1" max="1" width="10" customWidth="1"/><col min="2" max="2" width="25" customWidth="1"/><col min="3" max="3" width="35" customWidth="1"/><col min="4" max="4" width="12" customWidth="1"/><col min="5" max="5" width="20" customWidth="1"/></cols>
  <sheetData>
    <row r="1"><c r="A1" t="s" s="4"><v>61</v></c></row>
    <row r="2"><c r="A2" t="s" s="1"><v>62</v></c></row>
    <row r="3"><c r="A3" t="s" s="4"><v>63</v></c><c r="B3" t="s" s="4"><v>64</v></c><c r="C3" t="s" s="4"><v>65</v></c><c r="D3" t="s" s="4"><v>66</v></c><c r="E3" t="s" s="4"><v>67</v></c></row>
    <row r="4"><c r="A4" t="s" s="1"><v></v></c><c r="B4" t="s" s="1"><v></v></c><c r="C4" t="s" s="1"><v></v></c><c r="D4" t="s" s="1"><v></v></c><c r="E4" t="s" s="1"><v></v></c></row>
    <row r="5"><c r="A5" t="s" s="1"><v></v></c><c r="B5" t="s" s="1"><v></v></c><c r="C5" t="s" s="1"><v></v></c><c r="D5" t="s" s="1"><v></v></c><c r="E5" t="s" s="1"><v></v></c></row>
    <row r="6"><c r="A6" t="s" s="1"><v></v></c><c r="B6" t="s" s="1"><v></v></c><c r="C6" t="s" s="1"><v></v></c><c r="D6" t="s" s="1"><v></v></c><c r="E6" t="s" s="1"><v></v></c></row>
    <row r="7"><c r="A7" t="s" s="1"><v></v></c><c r="B7" t="s" s="1"><v></v></c><c r="C7" t="s" s="1"><v></v></c><c r="D7" t="s" s="1"><v></v></c><c r="E7" t="s" s="1"><v></v></c></row>
    <row r="8"><c r="A8" t="s" s="1"><v></v></c><c r="B8" t="s" s="1"><v></v></c><c r="C8" t="s" s="1"><v></v></c><c r="D8" t="s" s="1"><v></v></c><c r="E8" t="s" s="1"><v></v></c></row>
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

# Sheet 8 - F8 激励与考核机制表
s8 = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"/></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols><col min="1" max="1" width="15" customWidth="1"/><col min="2" max="2" width="30" customWidth="1"/><col min="3" max="3" width="20" customWidth="1"/><col min="4" max="4" width="20" customWidth="1"/></cols>
  <sheetData>
    <row r="1"><c r="A1" t="s" s="4"><v>68</v></c></row>
    <row r="2"><c r="A2" t="s" s="1"><v>69</v></c></row>
    <row r="3"><c r="A3" t="s" s="4"><v>70</v></c><c r="B3" t="s" s="4"><v>71</v></c><c r="C3" t="s" s="4"><v>72</v></c><c r="D3" t="s" s="4"><v>73</v></c></row>
    <row r="4"><c r="A4" t="s" s="1"><v></v></c><c r="B4" t="s" s="1"><v></v></c><c r="C4" t="s" s="1"><v></v></c><c r="D4" t="s" s="1"><v></v></c></row>
    <row r="5"><c r="A5" t="s" s="1"><v></v></c><c r="B5" t="s" s="1"><v></v></c><c r="C5" t="s" s="1"><v></v></c><c r="D5" t="s" s="1"><v></v></c></row>
    <row r="6"><c r="A6" t="s" s="1"><v></v></c><c r="B6" t="s" s="1"><v></v></c><c r="C6" t="s" s="1"><v></v></c><c r="D6" t="s" s="1"><v></v></c></row>
    <row r="7"><c r="A7" t="s" s="1"><v></v></c><c r="B7" t="s" s="1"><v></v></c><c r="C7" t="s" s="1"><v></v></c><c r="D7" t="s" s="1"><v></v></c></row>
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

# Sheet 9 - F9 我的AI能力沉淀计划
s9 = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"/></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols><col min="1" max="1" width="15" customWidth="1"/><col min="2" max="2" width="25" customWidth="1"/><col min="3" max="3" width="20" customWidth="1"/><col min="4" max="4" width="15" customWidth="1"/><col min="5" max="5" width="15" customWidth="1"/></cols>
  <sheetData>
    <row r="1"><c r="A1" t="s" s="4"><v>74</v></c></row>
    <row r="2"><c r="A2" t="s" s="1"><v>75</v></c></row>
    <row r="3"><c r="A3" t="s" s="4"><v>76</v></c><c r="B3" t="s" s="4"><v>77</v></c><c r="C3" t="s" s="4"><v>78</v></c><c r="D3" t="s" s="4"><v>79</v></c><c r="E3" t="s" s="4"><v>80</v></c></row>
    <row r="4"><c r="A4" t="s" s="1"><v></v></c><c r="B4" t="s" s="1"><v></v></c><c r="C4" t="s" s="1"><v></v></c><c r="D4" t="s" s="1"><v></v></c><c r="E4" t="s" s="1"><v></v></c></row>
    <row r="5"><c r="A5" t="s" s="1"><v></v></c><c r="B5" t="s" s="1"><v></v></c><c r="C5" t="s" s="1"><v></v></c><c r="D5" t="s" s="1"><v></v></c><c r="E5" t="s" s="1"><v></v></c></row>
    <row r="6"><c r="A6" t="s" s="1"><v></v></c><c r="B6" t="s" s="1"><v></v></c><c r="C6" t="s" s="1"><v></v></c><c r="D6" t="s" s="1"><v></v></c><c r="E6" t="s" s="1"><v></v></c></row>
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

# Sheet 10 - F10 团队AI能力台账
s10 = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"/></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols><col min="1" max="1" width="8" customWidth="1"/><col min="2" max="2" width="10" customWidth="1"/><col min="3" max="3" width="12" customWidth="1"/><col min="4" max="4" width="8" customWidth="1"/><col min="5" max="5" width="8" customWidth="1"/><col min="6" max="6" width="8" customWidth="1"/><col min="7" max="7" width="8" customWidth="1"/><col min="8" max="8" width="8" customWidth="1"/><col min="9" max="9" width="10" customWidth="1"/><col min="10" max="10" width="12" customWidth="1"/></cols>
  <sheetData>
    <row r="1"><c r="A1" t="s" s="4"><v>81</v></c></row>
    <row r="2"><c r="A2" t="s" s="1"><v>82</v></c></row>
    <row r="3"><c r="A3" t="s" s="4"><v>83</v></c><c r="B3" t="s" s="4"><v>84</v></c><c r="C3" t="s" s="4"><v>85</v></c><c r="D3" t="s" s="4"><v>86</v></c><c r="E3" t="s" s="4"><v>87</v></c><c r="F3" t="s" s="4"><v>88</v></c><c r="G3" t="s" s="4"><v>89</v></c><c r="H3" t="s" s="4"><v>90</v></c><c r="I3" t="s" s="4"><v>91</v></c><c r="J3" t="s" s="4"><v>92</v></c></row>
    <row r="4"><c r="A4" t="s" s="1"><v></v></c><c r="B4" t="s" s="1"><v></v></c><c r="C4" t="s" s="1"><v></v></c><c r="D4" t="s" s="1"><v></v></c><c r="E4" t="s" s="1"><v></v></c><c r="F4" t="s" s="1"><v></v></c><c r="G4" t="s" s="1"><v></v></c><c r="H4" t="s" s="1"><v></v></c><c r="I4" t="s" s="1"><v></v></c><c r="J4" t="s" s="1"><v></v></c></row>
    <row r="5"><c r="A5" t="s" s="1"><v></v></c><c r="B5" t="s" s="1"><v></v></c><c r="C5" t="s" s="1"><v></v></c><c r="D5" t="s" s="1"><v></v></c><c r="E5" t="s" s="1"><v></v></c><c r="F5" t="s" s="1"><v></v></c><c r="G5" t="s" s="1"><v></v></c><c r="H5" t="s" s="1"><v></v></c><c r="I5" t="s" s="1"><v></v></c><c r="J5" t="s" s="1"><v></v></c></row>
    <row r="6"><c r="A6" t="s" s="1"><v></v></c><c r="B6" t="s" s="1"><v></v></c><c r="C6" t="s" s="1"><v></v></c><c r="D6" t="s" s="1"><v></v></c><c r="E6" t="s" s="1"><v></v></c><c r="F6" t="s" s="1"><v></v></c><c r="G6" t="s" s="1"><v></v></c><c r="H6" t="s" s="1"><v></v></c><c r="I6" t="s" s="1"><v></v></c><c r="J6" t="s" s="1"><v></v></c></row>
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

# Write all sheets
with open(work_dir + '/worksheets/sheet1.xml', 'w', encoding='utf-8') as f: f.write(s1)
with open(work_dir + '/worksheets/sheet2.xml', 'w', encoding='utf-8') as f: f.write(s2)
with open(work_dir + '/worksheets/sheet3.xml', 'w', encoding='utf-8') as f: f.write(s3)
with open(work_dir + '/worksheets/sheet4.xml', 'w', encoding='utf-8') as f: f.write(s4)
with open(work_dir + '/worksheets/sheet5.xml', 'w', encoding='utf-8') as f: f.write(s5)
with open(work_dir + '/worksheets/sheet6.xml', 'w', encoding='utf-8') as f: f.write(s6)
with open(work_dir + '/worksheets/sheet7.xml', 'w', encoding='utf-8') as f: f.write(s7)
with open(work_dir + '/worksheets/sheet8.xml', 'w', encoding='utf-8') as f: f.write(s8)
with open(work_dir + '/worksheets/sheet9.xml', 'w', encoding='utf-8') as f: f.write(s9)
with open(work_dir + '/worksheets/sheet10.xml', 'w', encoding='utf-8') as f: f.write(s10)

print('All 10 sheets created successfully')

# Now pack the xlsx
os.makedirs('D:/新课开发/AI落地/8.AI能力认证与团队沉淀：从个人熟练到组织资产/配套表单和指引-Excel版', exist_ok=True)
result = subprocess.run(['python3', 'C:/Users/Administrator/.claude/skills/Excel表格处理/scripts/xlsx_pack.py', '/tmp/xlsx_work/', 'D:/新课开发/AI落地/8.AI能力认证与团队沉淀：从个人熟练到组织资产/配套表单和指引-Excel版/配套表单_空表.xlsx'], capture_output=True, text=True)
print(result.stdout)
if result.returncode != 0:
    print('Error:', result.stderr)
else:
    print('Excel file packed successfully!')