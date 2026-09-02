import os
import shutil
import subprocess

SKILL_DIR = r'C:\Users\Administrator\.claude\skills\Excel表格处理'
TEMPLATE_DIR = os.path.join(SKILL_DIR, 'templates', 'minimal_xlsx')
OUTPUT_BASE = r'D:\新课开发\工作手册\微小胜利：组织变革的设计与放大\完整课程包\07-工具表单'
TEMP_DIR = r'D:\CC\temp\xlsx_work'

def copy_template():
    if os.path.exists(TEMP_DIR):
        shutil.rmtree(TEMP_DIR)
    shutil.copytree(TEMPLATE_DIR, TEMP_DIR)

def write_file(path, content):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)

def escape_xml(s):
    return s.replace('&','&amp;').replace('<','&lt;').replace('>','&gt;').replace('"','&quot;')

def build_sharedstrings(strings):
    content = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="{len(strings)}" uniqueCount="{len(strings)}">
'''
    for s in strings:
        content += f'  <si><t>{escape_xml(s)}</t></si>\n'
    content += '</sst>'
    return content

def pack_xlsx(output):
    pack_cmd = f'python "{SKILL_DIR}/scripts/xlsx_pack.py" "{TEMP_DIR}" "{output}"'
    subprocess.run(pack_cmd, shell=True)

os.makedirs(OUTPUT_BASE, exist_ok=True)

# Form 5: 分受众沟通模板
output = os.path.join(OUTPUT_BASE, '表单5-分受众沟通模板.xlsx')
copy_template()
strings = [
    '分受众沟通模板', '',
    '【决策层沟通模板】', '使用场景：用于立项汇报、阶段汇报',
    '模板内容', '这次在【具体试点】验证的结果是【具体数据】，对比投入的【资源/时间】，产出比是【具体比例或说明】。目前已经出现的自发跟进信号包括【具体信号】。下一步计划推进的范围是【具体范围】，需要的支持是【具体资源】。',
    '【中层沟通模板】', '使用场景：用于部门内部沟通、跨部门协调会',
    '模板内容', '这次变化对你们团队的具体影响是【具体影响，尤其是工作量和考核方面】。过渡期内【哪些指标】会保留原有标准【哪些指标】开始按新标准考核。如果过程中出现问题，可以通过【具体渠道】提出调整。',
    '【一线沟通模板】', '使用场景：用于班组宣讲、现场沟通',
    '模板内容', '以前【具体场景】要等【具体时长】，现在【具体场景】只需要【具体时长】。这件事是【具体的人】在【具体地点】做出来的，大家路过【具体位置】就能看到最新的情况。',
    '【阻力化解对话脚本】', '',
    '开场模板', '【称呼】，我知道你对这个方法有顾虑，你干这行这么多年，见过的项目比我们多，你的判断很重要。',
    '邀请模板', '我们不是想说服你接受，是想请你以【评审/验证】的身份，帮我们挑挑这里面的毛病。',
    '回应模板', '你提到的【具体问题】，我们目前的处理方式是【具体说明】，如果这个方式解决不了你说的情况，我们想继续听听你的建议。',
    '收尾模板', '今天不需要你现在就给出一个结论，你觉得哪里还不放心，随时可以再找我们聊。',
    '【常见反对意见应对】', '',
    '反对1', '"我们这儿情况特殊，别的地方能行不代表我们也行"',
    '应对策略', '不否认差异，承认特殊性存在，但把讨论焦点转移到具体差异点上。',
    '反对2', '"这种事我们以前也搞过，最后不了了之"',
    '应对策略', '不辩解，承认过去的经历真实存在，用当下正在发生的具体证据回应。',
    '反对3', '"领导让做我们就做，配合一下"',
    '应对策略', '识别这是表面配合、态度未真正转变的信号，尝试进一步了解真实顾虑。'
]
write_file(os.path.join(TEMP_DIR, 'xl', 'sharedStrings.xml'), build_sharedstrings(strings))
sheet1 = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"/></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols><col min="1" max="1" width="20" customWidth="1"/><col min="2" max="2" width="65" customWidth="1"/></cols>
  <sheetData>
    <row r="1" ht="25" customHeight="1"><c r="A1" t="s" s="4"><v>0</v></c></row>
    <row r="3"><c r="A3" t="s" s="4"><v>2</v></c><c r="B3" t="s" s="1"><v>3</v></c></row>
    <row r="4"><c r="A4" t="s" s="4"><v>4</v></c></row>
    <row r="5"><c r="B5" t="s"><v>5</v></c></row>
    <row r="7"><c r="A7" t="s" s="4"><v>6</v></c><c r="B7" t="s" s="1"><v>7</v></c></row>
    <row r="8"><c r="A8" t="s" s="4"><v>8</v></c></row>
    <row r="9"><c r="B9" t="s"><v>9</v></c></row>
    <row r="11"><c r="A11" t="s" s="4"><v>10</v></c><c r="B11" t="s" s="1"><v>11</v></c></row>
    <row r="12"><c r="A12" t="s" s="4"><v>12</v></c></row>
    <row r="13"><c r="B13" t="s"><v>13</v></c></row>
    <row r="15"><c r="A15" t="s" s="4"><v>14</v></c></row>
    <row r="16"><c r="A16" t="s" s="1"><v>15</v></c><c r="B16" t="s"><v>16</v></c></row>
    <row r="17"><c r="A17" t="s" s="1"><v>17</v></c><c r="B17" t="s"><v>18</v></c></row>
    <row r="18"><c r="A18" t="s" s="1"><v>19</v></c><c r="B18" t="s"><v>20</v></c></row>
    <row r="19"><c r="A19" t="s" s="1"><v>21</v></c><c r="B19" t="s"><v>22</v></c></row>
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''
write_file(os.path.join(TEMP_DIR, 'xl', 'worksheets', 'sheet1.xml'), sheet1)
wb = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?><workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><sheets><sheet name="沟通模板" sheetId="1" r:id="rId1"/></sheets><calcPr calcId="0"/></workbook>'''
write_file(os.path.join(TEMP_DIR, 'xl', 'workbook.xml'), wb)
pack_xlsx(output)
print(f'Built Form 5')

# Form 6: 变革项目进度追踪表
output = os.path.join(OUTPUT_BASE, '表单6-变革项目进度追踪表.xlsx')
copy_template()
strings = [
    '变革项目进度追踪表', '',
    '【阶段划分】', '',
    '阶段名称', '主要任务',
    '试点启动前', '目标设定、资源确认、试点选择',
    '首个小赢期', '成果产出、真实性确认、放大准备',
    '推广期', '复制扩大、持续追踪、问题调整',
    '常态化期', '制度固化、效果评估、经验沉淀',
    '【里程碑追踪】', '',
    '里程碑名称', '计划完成日期', '实际完成日期', '状态', '备注',
    '第一个试点启动', '', '', '□ 未开始 □ 进行中 □ 已完成 □ 延期', '',
    '首个小赢确认', '', '', '□ 未开始 □ 进行中 □ 已完成 □ 延期', '',
    '故事化内容定稿', '', '', '□ 未开始 □ 进行中 □ 已完成 □ 延期', '',
    '可视化呈现上线', '', '', '□ 未开始 □ 进行中 □ 已完成 □ 延期', '',
    '第一次仪式完成', '', '', '□ 未开始 □ 进行中 □ 已完成 □ 延期', '',
    '第一个跟进者出现', '', '', '□ 未开始 □ 进行中 □ 已完成 □ 延期', '',
    '试点经验复制', '', '', '□ 未开始 □ 进行中 □ 已完成 □ 延期', '',
    '【评估指标追踪】', '',
    '指标类别', '指标名称', '基线值', '当前值', '目标值', '变化趋势', '备注',
    '软性信号', '自发咨询次数', '', '', '', '□ 增加 □ 持平 □ 减少', '',
    '软性信号', '主动参与者增长', '', '', '', '□ 增加 □ 持平 □ 减少', '',
    '软性信号', '反对者态度变化', '', '', '', '□ 积极 □ 无变化 □ 消极', '',
    '软性信号', '自发转述频次', '', '', '', '□ 增加 □ 持平 □ 减少', '',
    '硬指标', '培训覆盖率', '', '', '', '□ 提升 □ 持平 □ 下降', '',
    '硬指标', '流程采用率', '', '', '', '□ 提升 □ 持平 □ 下降', '',
    '硬指标', '效率提升数据', '', '', '', '□ 提升 □ 持平 □ 下降', '',
    '【自发行为观察记录】', '记录那些没有被要求、但真实发生的自发跟进行为',
    '日期', '观察人', '观察场景', '行为描述', '初步解读', '后续跟进'
]
write_file(os.path.join(TEMP_DIR, 'xl', 'sharedStrings.xml'), build_sharedstrings(strings))
sheet1 = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"/></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols><col min="1" max="1" width="18" customWidth="1"/><col min="2" max="2" width="15" customWidth="1"/><col min="3" max="3" width="15" customWidth="1"/><col min="4" max="4" width="15" customWidth="1"/><col min="5" max="5" width="15" customWidth="1"/><col min="6" max="6" width="15" customWidth="1"/><col min="7" max="7" width="20" customWidth="1"/></cols>
  <sheetData>
    <row r="1" ht="25" customHeight="1"><c r="A1" t="s" s="4"><v>0</v></c></row>
    <row r="3"><c r="A3" t="s" s="4"><v>2</v></c></row>
    <row r="4" ht="18" customHeight="1"><c r="A4" t="s" s="4"><v>3</v></c><c r="B4" t="s" s="4"><v>4</v></c></row>
    <row r="5"><c r="A5" t="s" s="1"><v>5</v></c><c r="B5" t="s"><v>6</v></c></row>
    <row r="6"><c r="A6" t="s" s="1"><v>7</v></c><c r="B6" t="s"><v>8</v></c></row>
    <row r="7"><c r="A7" t="s" s="1"><v>9</v></c><c r="B7" t="s"><v>10</v></c></row>
    <row r="8"><c r="A8" t="s" s="1"><v>11</v></c><c r="B8" t="s"><v>12</v></c></row>
    <row r="10"><c r="A10" t="s" s="4"><v>13</v></c></row>
    <row r="11" ht="18" customHeight="1"><c r="A11" t="s" s="4"><v>14</v></c><c r="B11" t="s" s="4"><v>15</v></c><c r="C11" t="s" s="4"><v>16</v></c><c r="D11" t="s" s="4"><v>17</v></c><c r="E11" t="s" s="4"><v>18</v></c></row>
    <row r="12"><c r="A12" t="s" s="1"><v>19</v></c><c r="B12" t="s"><v></v></c><c r="C12" t="s"><v></v></c><c r="D12" t="s"><v></v></c><c r="E12" t="s"><v></v></c></row>
    <row r="13"><c r="A13" t="s" s="1"><v>20</v></c><c r="B13" t="s"><v></v></c><c r="C13" t="s"><v></v></c><c r="D13" t="s"><v></v></c><c r="E13" t="s"><v></v></c></row>
    <row r="14"><c r="A14" t="s" s="1"><v>21</v></c><c r="B14" t="s"><v></v></c><c r="C14" t="s"><v></v></c><c r="D14" t="s"><v></v></c><c r="E14" t="s"><v></v></c></row>
    <row r="15"><c r="A15" t="s" s="1"><v>22</v></c><c r="B15" t="s"><v></v></c><c r="C15" t="s"><v></v></c><c r="D15" t="s"><v></v></c><c r="E15" t="s"><v></v></c></row>
    <row r="16"><c r="A16" t="s" s="1"><v>23</v></c><c r="B16" t="s"><v></v></c><c r="C16" t="s"><v></v></c><c r="D16" t="s"><v></v></c><c r="E16" t="s"><v></v></c></row>
    <row r="17"><c r="A17" t="s" s="1"><v>24</v></c><c r="B17" t="s"><v></v></c><c r="C17" t="s"><v></v></c><c r="D17" t="s"><v></v></c><c r="E17" t="s"><v></v></c></row>
    <row r="19"><c r="A19" t="s" s="4"><v>25</v></c></row>
    <row r="20" ht="18" customHeight="1"><c r="A20" t="s" s="4"><v>26</v></c><c r="B20" t="s" s="4"><v>27</v></c><c r="C20" t="s" s="4"><v>28</v></c><c r="D20" t="s" s="4"><v>29</v></c><c r="E20" t="s" s="4"><v>30</v></c><c r="F20" t="s" s="4"><v>31</v></c><c r="G20" t="s" s="4"><v>32</v></c></row>
    <row r="21"><c r="A21" t="s" s="1"><v>33</v></c><c r="B21" t="s" s="1"><v>34</v></c><c r="C21" t="s"><v></v></c><c r="D21" t="s"><v></v></c><c r="E21" t="s"><v></v></c><c r="F21" t="s"><v></v></c><c r="G21" t="s"><v></v></c></row>
    <row r="22"><c r="A22" t="s" s="1"><v>33</v></c><c r="B22" t="s" s="1"><v>35</v></c><c r="C22" t="s"><v></v></c><c r="D22" t="s"><v></v></c><c r="E22" t="s"><v></v></c><c r="F22" t="s"><v></v></c><c r="G22" t="s"><v></v></c></row>
    <row r="23"><c r="A23" t="s" s="1"><v>33</v></c><c r="B23" t="s" s="1"><v>36</v></c><c r="C23" t="s"><v></v></c><c r="D23" t="s"><v></v></c><c r="E23" t="s"><v></v></c><c r="F23" t="s"><v></v></c><c r="G23" t="s"><v></v></c></row>
    <row r="24"><c r="A24" t="s" s="1"><v>33</v></c><c r="B24" t="s" s="1"><v>37</v></c><c r="C24" t="s"><v></v></c><c r="D24" t="s"><v></v></c><c r="E24" t="s"><v></v></c><c r="F24" t="s"><v></v></c><c r="G24" t="s"><v></v></c></row>
    <row r="25"><c r="A25" t="s" s="1"><v>38</v></c><c r="B25" t="s" s="1"><v>39</v></c><c r="C25" t="s"><v></v></c><c r="D25" t="s"><v></v></c><c r="E25" t="s"><v></v></c><c r="F25" t="s"><v></v></c><c r="G25" t="s"><v></v></c></row>
    <row r="26"><c r="A26" t="s" s="1"><v>38</v></c><c r="B26" t="s" s="1"><v>40</v></c><c r="C26" t="s"><v></v></c><c r="D26" t="s"><v></v></c><c r="E26" t="s"><v></v></c><c r="F26" t="s"><v></v></c><c r="G26" t="s"><v></v></c></row>
    <row r="27"><c r="A27" t="s" s="1"><v>38</v></c><c r="B27" t="s" s="1"><v>41</v></c><c r="C27" t="s"><v></v></c><c r="D27" t="s"><v></v></c><c r="E27" t="s"><v></v></c><c r="F27" t="s"><v></v></c><c r="G27" t="s"><v></v></c></row>
    <row r="29"><c r="A29" t="s" s="4"><v>42</v></c><c r="B29" t="s" s="1"><v>43</v></c></row>
    <row r="30" ht="18" customHeight="1"><c r="A30" t="s" s="4"><v>44</v></c><c r="B30" t="s" s="4"><v>45</v></c><c r="C30" t="s" s="4"><v>46</v></c><c r="D30" t="s" s="4"><v>47</v></c><c r="E30" t="s" s="4"><v>48</v></c><c r="F30" t="s" s="4"><v>49</v></c></row>
    <row r="31"><c r="A31" t="s"><v></v></c><c r="B31" t="s"><v></v></c><c r="C31" t="s"><v></v></c><c r="D31" t="s"><v></v></c><c r="E31" t="s"><v></v></c><c r="F31" t="s"><v></v></c></row>
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''
write_file(os.path.join(TEMP_DIR, 'xl', 'worksheets', 'sheet1.xml'), sheet1)
wb = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?><workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><sheets><sheet name="进度追踪" sheetId="1" r:id="rId1"/></sheets><calcPr calcId="0"/></workbook>'''
write_file(os.path.join(TEMP_DIR, 'xl', 'workbook.xml'), wb)
pack_xlsx(output)
print(f'Built Form 6')
print('All 6 forms built successfully!')
