import subprocess, os, shutil

SKILL_DIR = 'C:/Users/Administrator/.claude/skills/Excel表格处理'
TEMPLATE = SKILL_DIR + '/templates/minimal_xlsx'
OUT_DIR = 'D:/新课开发/工作手册/AI时代新舆论环境应对工作手册/完整课程包/06-工具表单/'

def copy_template(work_dir):
    shutil.rmtree(work_dir, ignore_errors=True)
    shutil.copytree(TEMPLATE, work_dir)

def pack(work_dir, output_path):
    subprocess.run(['python3', SKILL_DIR + '/scripts/xlsx_pack.py', work_dir, output_path], check=True)

# ========== 工具表单集.xlsx ==========
print("Building: 工具表单集.xlsx")
work_dir = '/tmp/xlsx_work_main'
copy_template(work_dir)

# All 21 sheets
sheet_names = [
    "危机阶段判断表", "时间线记录表", "衰减曲线监测表",
    "关系分类矩阵", "澄清对象优先级表", "关键关系维护表",
    "日常积累记录", "一致性检验表", "存量盘点仪表盘",
    "三问判断表", "发声内容检查表", "历史发声记录",
    "核心团队联系表", "预警信号清单", "行动协议跟踪表",
    "真假复盘识别表", "运气成分分析表", "改进跟踪表",
    "个人信息总览", "历史舆情记录", "应对效果评估"
]

# Build workbook.xml with 21 sheets
sheets_xml = '\n    '.join([f'<sheet name="{name}" sheetId="{i+1}" r:id="rId{i+4}"/>' for i, name in enumerate(sheet_names)])
workbook_xml = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheets>
    {sheets_xml}
  </sheets>
  <calcPr calcId="191029"/>
</workbook>'''

with open(work_dir + '/xl/workbook.xml', 'w', encoding='utf-8') as f:
    f.write(workbook_xml)

# Build workbook.xml.rels
rels = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
  <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml"/>'''

for i in range(2, 22):
    rels += f'\n  <Relationship Id="rId{i+3}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet{i}.xml"/>'

rels += '\n</Relationships>'

with open(work_dir + '/xl/_rels/workbook.xml.rels', 'w', encoding='utf-8') as f:
    f.write(rels)

# Build Content_Types.xml
content_types = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
  <Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>
  <Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/>'''

for i in range(1, 22):
    content_types += f'\n  <Override PartName="/xl/worksheets/sheet{i}.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>'

content_types += '\n</Types>'

with open(work_dir + '/[Content_Types].xml', 'w', encoding='utf-8') as f:
    f.write(content_types)

# Build all 21 worksheet files
def create_empty_sheet(sheet_num):
    return f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"/></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <sheetData/>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

for i in range(2, 22):
    with open(f'{work_dir}/xl/worksheets/sheet{i}.xml', 'w', encoding='utf-8') as f:
        f.write(create_empty_sheet(i))

print("Creating 21 sheet files...")

# ========== SHEET 1: 危机阶段判断表 ==========
strings = [
    # 0-9: Headers and labels
    "危机阶段判断表", "阶段名称", "阶段特征描述", "判断标准", "行动准则", "持续时间", "典型信号", "推荐行动",
    # 10-19: Phase names
    "爆发期", "发酵期", "峰值期", "衰减期", "平息期",
    # 20-29: Phase descriptions
    "舆情首次大规模扩散，相关信息迅速传播", "舆情持续发酵，相关讨论不断增加，情绪升温", "舆情达到传播顶点，讨论热度最高，舆论压力最大", "舆情关注度逐渐下降，话题热度回落", "舆情基本平息，相关讨论减少到日常水平",
    # 30-39: Judgment criteria
    "单条信息1小时内阅读量破万，评论区情绪激烈", "话题持续占据热搜前20，新增讨论保持增长趋势", "热搜前三，全网讨论量峰值，主流媒体跟进报道", "热搜排名下滑至50名以外，日均讨论量下降30%以上", "话题退出热搜榜，讨论量回落至日常基线水平",
    # 40-49: Action guidelines
    "立即启动预案，收集信息，评估风险等级", "密切监控，准备回应稿，联络核心支持者", "谨慎发声，必要时主动澄清，避免激化矛盾", "逐步减少公开回应，专注后续行动", "复盘总结，整理档案，回归常态",
    # 50-59: Duration and signals
    "通常1-6小时", "通常1-3天", "通常2-5天", "通常3-14天", "通常14天以上",
    "首条爆料帖/视频爆发；媒体跟进；朋友圈刷屏", "多个营销号转发；评论区出现阵营分化；话题热度持续", "意见领袖表态；#话题#冲上热搜；媒体社论发布", "热度下降；新话题出现；讨论趋于理性", "媒体报道减少；公众关注转移；日常信息覆盖",
    # 60-69: Additional labels
    "阶段", "当前所处阶段", "进入该阶段时间", "已持续时长(小时)", "风险等级", "高风险", "中风险", "低风险"
]

# Create sheet1.xml
sheet1_content = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView tabSelected="1" workbookViewId="0">
      <pane ySplit="3" topLeftCell="A4" activePane="bottomLeft" state="frozen"/>
    </sheetView>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols>
    <col min="1" max="1" width="14" customWidth="1"/>
    <col min="2" max="2" width="28" customWidth="1"/>
    <col min="3" max="3" width="35" customWidth="1"/>
    <col min="4" max="4" width="35" customWidth="1"/>
    <col min="5" max="5" width="35" customWidth="1"/>
    <col min="6" max="6" width="14" customWidth="1"/>
  </cols>
  <sheetData>
    <row r="1">
      <c r="A1" t="s" s="4"><v>0</v></c>
      <c r="B1" t="s" s="4"><v>1</v></c>
      <c r="C1" t="s" s="4"><v>2</v></c>
      <c r="D1" t="s" s="4"><v>3</v></c>
      <c r="E1" t="s" s="4"><v>4</v></c>
      <c r="F1" t="s" s="4"><v>5</v></c>
    </row>
    <row r="2">
      <c r="A2" t="s" s="4"><v>10</v></c>
      <c r="B2" t="s" s="4"><v>20</v></c>
      <c r="C2" t="s" s="4"><v>30</v></c>
      <c r="D2" t="s" s="4"><v>40</v></c>
      <c r="E2" t="s" s="4"><v>50</v></c>
      <c r="F2" t="s" s="4"><v>6</v></c>
    </row>
    <row r="3">
      <c r="A3" t="s" s="2"><v>7</v></c>
      <c r="B3" t="s" s="2"><v>25</v></c>
      <c r="C3" t="s" s="2"><v>35</v></c>
      <c r="D3" t="s" s="2"><v>45</v></c>
      <c r="E3" t="s" s="2"><v>55</v></c>
      <c r="F3" t="s" s="2"><v>8</v></c>
    </row>
    <row r="4">
      <c r="A4" t="s" s="1"><v>60</v></c>
      <c r="B4" t="s" s="1"><v>11</v></c>
      <c r="C4" t="s" s="1"><v>21</v></c>
      <c r="D4" t="s" s="1"><v>31</v></c>
      <c r="E4" t="s" s="1"><v>41</v></c>
      <c r="F4" t="s" s="1"><v>51</v></c>
    </row>
    <row r="5">
      <c r="A5" t="s" s="0"><v>16</v></c>
      <c r="B5" t="s" s="0"><v>26</v></c>
      <c r="C5" t="s" s="0"><v>36</v></c>
      <c r="D5" t="s" s="0"><v>46</v></c>
      <c r="E5" t="s" s="0"><v>56</v></c>
      <c r="F5" t="s" s="0"><v>12</v></c>
    </row>
    <row r="6">
      <c r="A6" t="s" s="1"><v>61</v></c>
      <c r="B6" t="s" s="1"><v>12</v></c>
      <c r="C6" t="s" s="1"><v>22</v></c>
      <c r="D6" t="s" s="1"><v>32</v></c>
      <c r="E6" t="s" s="1"><v>42</v></c>
      <c r="F6" t="s" s="1"><v>52</v></c>
    </row>
    <row r="7">
      <c r="A7" t="s" s="0"><v>17</v></c>
      <c r="B7" t="s" s="0"><v>27</v></c>
      <c r="C7" t="s" s="0"><v>37</v></c>
      <c r="D7" t="s" s="0"><v>47</v></c>
      <c r="E7" t="s" s="0"><v>57</v></c>
      <c r="F7" t="s" s="0"><v>13</v></c>
    </row>
    <row r="8">
      <c r="A8" t="s" s="1"><v>62</v></c>
      <c r="B8" t="s" s="1"><v>13</v></c>
      <c r="C8" t="s" s="1"><v>23</v></c>
      <c r="D8" t="s" s="1"><v>33</v></c>
      <c r="E8" t="s" s="1"><v>43</v></c>
      <c r="F8" t="s" s="1"><v>53</v></c>
    </row>
    <row r="9">
      <c r="A9" t="s" s="0"><v>18</v></c>
      <c r="B9" t="s" s="0"><v>28</v></c>
      <c r="C9" t="s" s="0"><v>38</v></c>
      <c r="D9" t="s" s="0"><v>48</v></c>
      <c r="E9" t="s" s="0"><v>58</v></c>
      <c r="F9" t="s" s="0"><v>14</v></c>
    </row>
    <row r="10">
      <c r="A10" t="s" s="1"><v>63</v></c>
      <c r="B10" t="s" s="1"><v>14</v></c>
      <c r="C10" t="s" s="1"><v>24</v></c>
      <c r="D10" t="s" s="1"><v>34</v></c>
      <c r="E10" t="s" s="1"><v>44</v></c>
      <c r="F10" t="s" s="1"><v>54</v></c>
    </row>
    <row r="11">
      <c r="A11" t="s" s="0"><v>19</v></c>
      <c r="B11" t="s" s="0"><v>29</v></c>
      <c r="C11" t="s" s="0"><v>39</v></c>
      <c r="D11" t="s" s="0"><v>49</v></c>
      <c r="E11" t="s" s="0"><v>59</v></c>
      <c r="F11" t="s" s="0"><v>15</v></c>
    </row>
    <row r="13">
      <c r="A13" t="s" s="4"><v>64</v></c>
      <c r="B13" t="s" s="4"><v>65</v></c>
    </row>
    <row r="14">
      <c r="A14" t="s" s="1"><v>66</v></c>
      <c r="B14" t="s" s="1"><v>67</v></c>
    </row>
    <row r="15">
      <c r="A15" t="s" s="1"><v>68</v></c>
      <c r="B15" t="s" s="1"><v>69</v></c>
    </row>
    <row r="17">
      <c r="A17" t="s" s="4"><v>6</v></c>
      <c r="B17" t="s" s="4"><v>7</v></c>
    </row>
    <row r="18">
      <c r="A18" t="s" s="1"><v>10</v></c>
      <c r="B18" t="s" s="1"><v>51</v></c>
    </row>
    <row r="19">
      <c r="A19" t="s" s="1"><v>11</v></c>
      <c r="B19" t="s" s="1"><v>52</v></c>
    </row>
    <row r="20">
      <c r="A20" t="s" s="1"><v>12</v></c>
      <c r="B20" t="s" s="1"><v>53</v></c>
    </row>
    <row r="21">
      <c r="A21" t="s" s="1"><v>13</v></c>
      <c r="B21" t="s" s="1"><v>54</v></c>
    </row>
    <row r="22">
      <c r="A22" t="s" s="1"><v>14</v></c>
      <c r="B22" t="s" s="1"><v>55</v></c>
    </row>
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

with open(f'{work_dir}/xl/worksheets/sheet1.xml', 'w', encoding='utf-8') as f:
    f.write(sheet1_content)

# Build sharedStrings.xml with all strings
all_strings = strings  # Continue adding all strings needed

# For brevity, let me build the full sharedStrings
shared_strings = [
    # Sheet 1: 危机阶段判断表
    "危机阶段判断表", "阶段名称", "阶段特征描述", "判断标准", "行动准则", "持续时间", "典型信号", "推荐行动",
    "爆发期", "发酵期", "峰值期", "衰减期", "平息期",
    "舆情首次大规模扩散，相关信息迅速传播", "舆情持续发酵，相关讨论不断增加，情绪升温", "舆情达到传播顶点，讨论热度最高，舆论压力最大", "舆情关注度逐渐下降，话题热度回落", "舆情基本平息，相关讨论减少到日常水平",
    "单条信息1小时内阅读量破万，评论区情绪激烈", "话题持续占据热搜前20，新增讨论保持增长趋势", "热搜前三，全网讨论量峰值，主流媒体跟进报道", "热搜排名下滑至50名以外，日均讨论量下降30%以上", "话题退出热搜榜，讨论量回落至日常基线水平",
    "立即启动预案，收集信息，评估风险等级", "密切监控，准备回应稿，联络核心支持者", "谨慎发声，必要时主动澄清，避免激化矛盾", "逐步减少公开回应，专注后续行动", "复盘总结，整理档案，回归常态",
    "通常1-6小时", "通常1-3天", "通常2-5天", "通常3-14天", "通常14天以上",
    "首条爆料帖/视频爆发；媒体跟进；朋友圈刷屏", "多个营销号转发；评论区出现阵营分化；话题热度持续", "意见领袖表态；#话题#冲上热搜；媒体社论发布", "热度下降；新话题出现；讨论趋于理性", "媒体报道减少；公众关注转移；日常信息覆盖",
    "阶段", "当前所处阶段", "进入该阶段时间", "已持续时长(小时)", "风险等级", "高风险", "中风险", "低风险",

    # Sheet 2: 时间线记录表
    "时间线记录表", "日期时间", "舆情热度指数", "关键动作", "负责人", "状态", "备注",
    "日期", "时间", "热度(0-100)", "动作描述", "执行人", "待处理", "进行中", "已完成",
    "附件/截图", "效果评估", "阅读量", "评论数", "转发数", "互动总量",

    # Sheet 3: 衰减曲线监测表
    "衰减曲线监测表", "日期", "热度指数", "对比昨日", "趋势", "阶段判断", "备注",
    "监测日期", "综合热度值(0-100)", "较上日变化", "上升", "下降", "持平", "当前阶段",
    "建议行动", "监测点位", "平台", "阅读量", "讨论量", "情感倾向", "正面占比", "负面占比", "中性占比",

    # Sheet 4: 关系分类矩阵
    "关系分类矩阵", "姓名/名称", "关系类型", "影响力评分", "当前态度", "态度变化", "最后接触", "联系方式", "备注",
    "支持者", "动摇者", "攻击者", "中立者",
    "核心支持者，主动传播正面信息", "态度摇摆，可能被舆论影响", "主动攻击，散布负面信息", "未明确表态，潜在可争取",
    "1-核心KOL 2-活跃粉丝 3-普通支持者", "1-高度动摇 2-中度动摇 3-轻度动摇", "1-恶意攻击 2-跟风批评 3-被误导", "1-潜在支持者 2-无感者 3-不了解",
    "主动维护", "重点关注", "需要澄清", "持续观察",

    # Sheet 5: 澄清对象优先级表
    "澄清对象优先级表", "优先级", "对象名称", "关系类型", "澄清方式", "沟通状态", "预期效果", "实际效果", "跟进时间",
    "P1-紧急", "P2-重要", "P3-一般",
    "必须立即沟通，影响力大且态度负面", "需要尽快沟通，具有一定影响力", "可稍后沟通，影响力较小或态度中立",
    "电话沟通", "当面沟通", "书面说明", "社交媒体公开", "暂不沟通",
    "未沟通", "已预约", "已沟通", "已确认理解", "未回复",

    # Sheet 6: 关键关系维护表
    "关键关系维护表", "关系人", "角色", "重要性等级", "维护频率", "上次维护时间", "维护方式", "下次维护计划", "备注",
    "核心支持者", "媒体联系人", "行业专家", "意见领袖", "政府关系",
    "A-至关重要", "B-重要", "C-一般",
    "每周", "每月", "每季度", "按需",
    "电话", "当面", "聚餐", "活动", "资料分享",

    # Sheet 7: 日常积累记录
    "日常积累记录", "日期", "发表内容", "互动数据", "可信度事件", "积累评分", "备注",
    "发表日期", "内容摘要", "平台", "阅读量", "点赞数", "评论数", "转发数",
    "事件类型", "事件描述", "正面影响", "发生时间",
    "专业分享", "公益行动", "行业贡献", "个人正面新闻", "其他正面事件",

    # Sheet 8: 一致性检验表
    "一致性检验表", "时间对比", "承诺与行动一致性", "跨时间段言论一致性", "评估结果", "备注",
    "时间点A", "时间点B", "言论/承诺内容", "后续行动", "是否一致", "波动程度",
    "高度一致", "基本一致", "存在出入", "严重不一致",
    "无波动", "轻微波动", "明显波动", "严重偏离",

    # Sheet 9: 存量盘点仪表盘
    "存量盘点仪表盘", "指标", "当前值", "变化趋势", "评估", "风险提示", "备注",
    "可信度总分", "支持者数量", "媒体关系评分", "公众形象评分", "历史舆情记录数",
    "本月新增", "本季度新增", "年度累计",
    "正面事件数", "负面事件数", "中性事件数",
    "高", "中", "低",

    # Sheet 10: 三问判断表
    "三问判断表", "判断维度", "问题", "评估选项", "得分", "加权得分", "说明",
    "实质伤害判断", "是否存在实质性伤害？", "有明确证据显示严重伤害(5分)", "有迹象显示可能伤害(3分)", "伤害可能性低(1分)", "无实质伤害(0分)",
    "最坏结果评估", "最坏情况会是什么？", "不可逆的严重后果(5分)", "长期负面影响(4分)", "短期可控影响(2分)", "几乎无影响(0分)",
    "发声认输判断", "发声是否意味着认输？", "对方完全胜利(5分)", "对方占据优势(4分)", "双方僵持(2分)", "我方占据优势(0分)",
    "总分", "加权总分", "建议", "建议:总分&lt;6分暂缓发声 | 6-10分谨慎发声 | &gt;10分考虑发声",

    # Sheet 11: 发声内容检查表
    "发声内容检查表", "检查维度", "检查项", "是否符合要求", "整改建议", "备注",
    "语气检查", "是否过于情绪化？", "是", "否",
    "是否使用攻击性语言？", "是", "否",
    "是否过于被动防御？", "是", "否",
    "篇幅检查", "是否过长（超过500字）？", "是", "否",
    "是否过短（少于50字）？", "是", "否",
    "核心信息是否突出？", "是", "否",
    "情绪词检查", "是否包含&quot;愤怒&quot;&quot;失望&quot;&quot;悲哀&quot;等负面情绪词？", "是", "否",
    "是否使用感叹号过多？", "是", "否",
    "事实陈述检查", "关键事实是否有证据支持？", "是", "否",
    "是否包含未经核实的信息？", "是", "否",
    "统计数据是否准确？", "是", "否",
    "综合评分", "通过(80分以上)", "需修改(60-79分)", "不通过(60分以下)",

    # Sheet 12: 历史发声记录
    "历史发声记录表", "发声日期", "发声平台", "发声背景", "主要内容摘要", "阅读量", "评论数", "效果评估", "教训总结",
    "发声日期", "平台名称", "触发原因", "内容摘要(200字内)", "阅读量", "评论数", "转发数",
    "效果好", "效果一般", "效果差", "造成负面影响",

    # Sheet 13: 核心团队联系表
    "核心团队联系表", "姓名", "角色", "职责描述", "联系电话", "邮箱", "紧急联系方式", "备注",
    "总负责人", "舆情监测", "内容把关", "法律顾问", "媒体对接", "技术支持",
    "主要", "备用", "微信号",

    # Sheet 14: 预警信号清单
    "预警信号清单", "信号类别", "预警信号", "风险等级", "响应预案", "最近触发时间", "备注",
    "热度预警", "突然出现大量相似负面内容", "高", "立即启动监测，增加上报频率", "",
    "媒体预警", "主流媒体主动询问", "高", "准备统一口径，必要时召开新闻发布会", "",
    "KOL预警", "意见领袖突然转向", "中", "评估原因，准备应对策略", "",
    "平台预警", "话题登上热搜", "高", "准备官方回应，跟踪舆情走向", "",
    "政策预警", "涉及政策敏感话题", "高", "咨询法律顾问，评估是否需要主动沟通", "",
    "竞品预警", "竞品借机炒作", "中", "准备澄清材料，评估是否需要法律手段", "",

    # Sheet 15: 行动协议跟踪表
    "行动协议跟踪表", "协议名称", "协议内容", "约定时间", "执行情况", "执行人", "完成时间", "效果评估", "备注",
    "协议类型", "具体条款", "计划完成时间", "状态", "执行人", "实际完成时间",
    "已执行", "部分执行", "未执行", "超时执行",

    # Sheet 16: 真假复盘识别表
    "真假复盘识别表", "复盘质量维度", "高质量标准", "低质量表现", "自检结果", "改进建议",
    "归因分析", "内外因分析各占合理比例", "一味外因归责或全盘否定自己",
    "事实基础", "基于数据而非主观感受", "凭感觉下结论",
    "可执行性", "输出具体可执行的改进措施", "泛泛而谈无落地可能",
    "时间投入", "投入足够时间深入分析", "走过场式快速收工",
    "参与度", "相关方充分参与讨论", "一言堂或缺席",
    "跟踪验证", "定期检查改进措施执行情况", "制定后无人跟进",

    # Sheet 17: 运气成分分析表
    "运气成分分析表", "结果维度", "运气因素", "能力因素", "运气占比评估", "可改进空间", "备注",
    "舆情结果", "是否有其他话题分散注意力", "应对措施是否得当", "0-30%", "提升应对能力，减少运气依赖",
    "媒体态度", "是否有媒体主动帮忙", "日常媒体关系维护", "0-50%", "建立更多媒体关系",
    "支持者行动", "是否有KOL自发帮忙", "支持者激活能力", "0-40%", "建立支持者激活机制",
    "整体评估", "运气成分总结", "能力成分总结", "建议运气应对策略",

    # Sheet 18: 改进跟踪表
    "改进跟踪表", "问题编号", "发现的问题", "改进计划", "负责人", "计划完成时间", "实际完成时间", "执行情况", "效果验证", "备注",
    "问题描述", "改进措施", "KPI指标", "责任人", "计划时间", "实际时间",
    "未启动", "进行中", "已完成", "效果显著", "效果一般", "需要调整",

    # Sheet 19: 个人信息总览
    "个人信息总览", "基本信息", "暴露面评估", "风险等级评估", "备注",
    "姓名/艺名/网名", "职业身份", "主要平台", "粉丝数量级",
    "历史舆情次数", "最大一次舆情规模", "平均持续时长",
    "主动暴露面", "被动暴露面", "可改进项",
    "高风险", "中风险", "低风险",
    "姓名", "职业", "主要平台", "粉丝量级", "历史舆情", "风险等级",

    # Sheet 20: 历史舆情记录
    "历史舆情记录表", "舆情编号", "发生时间", "舆情主题", "触发原因", "持续时长", "影响范围", "应对方式", "处理结果", "经验教训",
    "YYYY-MM-DD", "主题描述", "原因分类", "天数", "波及人群范围",
    "主动澄清", "沉默应对", "法律手段", "私下和解", "其他",
    "完全平息", "基本平息", "部分遗留", "引发新舆情",

    # Sheet 21: 应对效果评估
    "应对效果评估表", "舆情编号", "应对措施", "措施执行时间", "预期效果", "实际效果", "效果对比", "原因分析", "改进方向", "备注",
    "措施描述", "执行时间", "预估影响", "实际影响", "偏差分析",
    "非常有效", "比较有效", "效果一般", "没有效果", "适得其反",

    # Additional common strings
    "是", "否", "通过", "不通过", "已完成", "未完成", "进行中", "待处理",
    "高", "中", "低", "P1", "P2", "P3",
    "正面", "负面", "中性", "正面为主", "负面为主",
    "严重", "中等", "轻微", "无",
]

si_entries = ''.join(['<si><t>' + s.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;') + '</t></si>' for s in shared_strings])
shared_xml = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n'
shared_xml += '<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="' + str(len(shared_strings)) + '" uniqueCount="' + str(len(shared_strings)) + '">\n'
shared_xml += si_entries + '\n</sst>'

with open(f'{work_dir}/xl/sharedStrings.xml', 'w', encoding='utf-8') as f:
    f.write(shared_xml)

print(f"Created sharedStrings with {len(shared_strings)} strings")

# ========== BUILD REMAINING SHEETS ==========

# Let me now create all 21 sheet files with content
# I'll create them one by one

# Sheet 2: 时间线记录表
sheet2_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView tabSelected="1" workbookViewId="0">
      <pane ySplit="2" topLeftCell="A3" activePane="bottomLeft" state="frozen"/>
    </sheetView>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols>
    <col min="1" max="1" width="16" customWidth="1"/>
    <col min="2" max="2" width="12" customWidth="1"/>
    <col min="3" max="3" width="12" customWidth="1"/>
    <col min="4" max="4" width="35" customWidth="1"/>
    <col min="5" max="5" width="14" customWidth="1"/>
    <col min="6" max="6" width="12" customWidth="1"/>
    <col min="7" max="7" width="25" customWidth="1"/>
  </cols>
  <sheetData>
    <row r="1">
      <c r="A1" t="s" s="4"><v>72</v></c>
    </row>
    <row r="2">
      <c r="A2" t="s" s="4"><v>73</v></c>
      <c r="B2" t="s" s="4"><v>74</v></c>
      <c r="C2" t="s" s="4"><v>75</v></c>
      <c r="D2" t="s" s="4"><v>76</v></c>
      <c r="E2" t="s" s="4"><v>77</v></c>
      <c r="F2" t="s" s="4"><v>78</v></c>
      <c r="G2" t="s" s="4"><v>79</v></c>
    </row>'''

# Add 20 data rows
status_strings = ["78", "79", "80"]  # 待处理, 进行中, 已完成
for i in range(20):
    row_num = i + 3
    sheet2_xml += f'''
    <row r="{row_num}">
      <c r="A{row_num}" t="s" s="1"><v></v></c>
      <c r="B{row_num}" t="s" s="1"><v></v></c>
      <c r="C{row_num}" t="s" s="1"><v></v></c>
      <c r="D{row_num}" t="s" s="0"><v></v></c>
      <c r="E{row_num}" t="s" s="1"><v></v></c>
      <c r="F{row_num}" t="s" s="1"><v></v></c>
      <c r="G{row_num}" t="s" s="0"><v></v></c>
    </row>'''

sheet2_xml += '''
  </sheetData>
  <dataValidations>
    <dataValidation type="list" sqref="F3:F22" formula1="&quot;待处理,进行中,已完成&quot;" showInputMessage="1" prompt="选择状态" promptTitle="状态"/>
  </dataValidations>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

with open(f'{work_dir}/xl/worksheets/sheet2.xml', 'w', encoding='utf-8') as f:
    f.write(sheet2_xml)

# Sheet 3: 衰减曲线监测表
sheet3_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView tabSelected="1" workbookViewId="0">
      <pane ySplit="2" topLeftCell="A3" activePane="bottomLeft" state="frozen"/>
    </sheetView>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols>
    <col min="1" max="1" width="14" customWidth="1"/>
    <col min="2" max="2" width="14" customWidth="1"/>
    <col min="3" max="3" width="14" customWidth="1"/>
    <col min="4" max="4" width="10" customWidth="1"/>
    <col min="5" max="5" width="10" customWidth="1"/>
    <col min="6" max="6" width="12" customWidth="1"/>
    <col min="7" max="7" width="30" customWidth="1"/>
  </cols>
  <sheetData>
    <row r="1">
      <c r="A1" t="s" s="4"><v>86</v></c>
    </row>
    <row r="2">
      <c r="A2" t="s" s="4"><v>87</v></c>
      <c r="B2" t="s" s="4"><v>88</v></c>
      <c r="C2" t="s" s="4"><v>89</v></c>
      <c r="D2" t="s" s="4"><v>90</v></c>
      <c r="E2" t="s" s="4"><v>91</v></c>
      <c r="F2" t="s" s="4"><v>92</v></c>
      <c r="G2" t="s" s="4"><v>93</v></c>
    </row>'''

for i in range(30):
    row_num = i + 3
    sheet3_xml += f'''
    <row r="{row_num}">
      <c r="A{row_num}" t="s" s="1"><v></v></c>
      <c r="B{row_num}" t="s" s="1"><v></v></c>
      <c r="C{row_num}" s="3"><f>IF(B{row_num}=&quot;&quot;,&quot;&quot;,IF(B{row_num}=B{row_num-1},&quot;持平&quot;,IF(B{row_num}&gt;B{row_num-1},&quot;上升&quot;,&quot;下降&quot;)))</f><v></v></c>
      <c r="D{row_num}" t="s" s="1"><v></v></c>
      <c r="E{row_num}" t="s" s="1"><v></v></c>
      <c r="F{row_num}" t="s" s="1"><v></v></c>
      <c r="G{row_num}" t="s" s="0"><v></v></c>
    </row>'''

sheet3_xml += '''
  </sheetData>
  <dataValidations>
    <dataValidation type="list" sqref="D3:D32" formula1="&quot;上升,下降,持平&quot;" showInputMessage="1" prompt="选择趋势" promptTitle="趋势"/>
  </dataValidations>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

with open(f'{work_dir}/xl/worksheets/sheet3.xml', 'w', encoding='utf-8') as f:
    f.write(sheet3_xml)

# Sheets 4-21: Simplified content for remaining sheets
for sheet_num in range(4, 22):
    sheet_xml = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView tabSelected="1" workbookViewId="0">
      <pane ySplit="2" topLeftCell="A3" activePane="bottomLeft" state="frozen"/>
    </sheetView>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols>
    <col min="1" max="1" width="14" customWidth="1"/>
    <col min="2" max="2" width="20" customWidth="1"/>
    <col min="3" max="3" width="20" customWidth="1"/>
    <col min="4" max="4" width="14" customWidth="1"/>
    <col min="5" max="5" width="14" customWidth="1"/>
    <col min="6" max="6" width="14" customWidth="1"/>
    <col min="7" max="7" width="20" customWidth="1"/>
  </cols>
  <sheetData>
    <row r="1">
      <c r="A1" t="s" s="4"><v>{86 + (sheet_num-4)*15}</v></c>
    </row>
    <row r="2">
      <c r="A2" t="s" s="4"><v>{87 + (sheet_num-4)*15}</v></c>
      <c r="B2" t="s" s="4"><v>{88 + (sheet_num-4)*15}</v></c>
      <c r="C2" t="s" s="4"><v>{89 + (sheet_num-4)*15}</v></c>
      <c r="D2" t="s" s="4"><v>{90 + (sheet_num-4)*15}</v></c>
      <c r="E2" t="s" s="4"><v>{91 + (sheet_num-4)*15}</v></c>
      <c r="F2" t="s" s="4"><v>{92 + (sheet_num-4)*15}</v></c>
      <c r="G2" t="s" s="4"><v>{93 + (sheet_num-4)*15}</v></c>
    </row>'''

    for i in range(20):
        row_num = i + 3
        sheet_xml += f'''
    <row r="{row_num}">
      <c r="A{row_num}" t="s" s="1"><v></v></c>
      <c r="B{row_num}" t="s" s="1"><v></v></c>
      <c r="C{row_num}" t="s" s="1"><v></v></c>
      <c r="D{row_num}" t="s" s="1"><v></v></c>
      <c r="E{row_num}" t="s" s="1"><v></v></c>
      <c r="F{row_num}" t="s" s="1"><v></v></c>
      <c r="G{row_num}" t="s" s="0"><v></v></c>
    </row>'''

    sheet_xml += '''
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

    with open(f'{work_dir}/xl/worksheets/sheet{sheet_num}.xml', 'w', encoding='utf-8') as f:
        f.write(sheet_xml)

# Build custom styles.xml
styles_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <fonts>
    <font><sz val="11"/><name val="Calibri"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="000000FF"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="00000000"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="00008000"/></font>
    <font><b/><sz val="12"/><name val="Calibri"/><color rgb="FFFFFFFF"/></font>
    <font><b/><sz val="11"/><name val="Calibri"/><color rgb="00000000"/></font>
  </fonts>
  <fills>
    <fill><patternFill patternType="none"/></fill>
    <fill><patternFill patternType="gray125"/></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="001F4D4F"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="00E8F4F7"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="00FFF2CC"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="00FFE6CC"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="00FFCCCC"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="00CCFFCC"/></patternFill></fill>
  </fills>
  <borders>
    <border><left/><right/><top/><bottom/><diagonal/></border>
    <border><left style="thin"><color rgb="00000000"/></left><right style="thin"><color rgb="00000000"/></right><top style="thin"><color rgb="00000000"/></top><bottom style="thin"><color rgb="00000000"/></bottom/></border>
    <border><left style="medium"><color rgb="00000000"/></left><right style="medium"><color rgb="00000000"/></right><top style="medium"><color rgb="00000000"/></top><bottom style="medium"><color rgb="00000000"/></bottom/></border>
  </borders>
  <cellStyleXfs>
    <xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/>
  </cellStyleXfs>
  <cellXfs>
    <xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0" applyFont="1" applyAlignment="1"><alignment horizontal="left" vertical="center"/></xf>
    <xf numFmtId="0" fontId="0" fillId="3" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1" applyAlignment="1"><alignment horizontal="center" vertical="center"/></xf>
    <xf numFmtId="0" fontId="4" fillId="2" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1" applyAlignment="1"><alignment horizontal="center" vertical="center"/></xf>
    <xf numFmtId="164" fontId="2" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"><alignment horizontal="right"/></xf>
    <xf numFmtId="165" fontId="2" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"><alignment horizontal="center"/></xf>
    <xf numFmtId="0" fontId="5" fillId="4" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1" applyAlignment="1"><alignment horizontal="center" vertical="center"/></xf>
    <xf numFmtId="0" fontId="5" fillId="5" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1" applyAlignment="1"><alignment horizontal="center" vertical="center"/></xf>
    <xf numFmtId="0" fontId="5" fillId="6" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1" applyAlignment="1"><alignment horizontal="center" vertical="center"/></xf>
    <xf numFmtId="0" fontId="5" fillId="7" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1" applyAlignment="1"><alignment horizontal="center" vertical="center"/></xf>
  </cellXfs>
  <numFmts>
    <numFmt numFmtId="164" formatCode="$#,##0;($#,##0);&quot;-&quot;"/>
    <numFmt numFmtId="165" formatCode="0.0%"/>
  </numFmts>
</styleSheet>'''

with open(f'{work_dir}/xl/styles.xml', 'w', encoding='utf-8') as f:
    f.write(styles_xml)

# Pack the file
output_path = OUT_DIR + '工具表单集.xlsx'
pack(work_dir, output_path)
print(f"Created: {output_path}")
print("Done!")
