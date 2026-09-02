"""
Build comprehensive Excel tool forms for AI时代新舆论环境应对工作手册
21 sheets covering 7 forms - Fixed version
"""
import subprocess, os, shutil

SKILL_DIR = 'C:/Users/Administrator/.claude/skills/Excel表格处理'
TEMPLATE = SKILL_DIR + '/templates/minimal_xlsx'
OUT_DIR = 'D:/新课开发/工作手册/AI时代新舆论环境应对工作手册/完整课程包/06-工具表单/'

def copy_template(work_dir):
    shutil.rmtree(work_dir, ignore_errors=True)
    shutil.copytree(TEMPLATE, work_dir)

def pack(work_dir, output_path):
    subprocess.run(['python3', SKILL_DIR + '/scripts/xlsx_pack.py', work_dir, output_path], check=True)

# ============================================================
# STRING INVENTORY
# ============================================================
strings = [
    # Form 1: 危机阶段判断表
    "危机阶段判断表", "阶段名称", "阶段特征描述", "判断标准", "行动准则", "持续时间", "典型信号", "推荐行动",
    "爆发期", "舆情首次大规模扩散，相关信息迅速传播", "单条信息1小时内阅读量破万，评论区情绪激烈", "立即启动预案，收集信息，评估风险等级", "通常1-6小时", "首条爆料帖/视频爆发；媒体跟进；朋友圈刷屏",
    "发酵期", "舆情持续发酵，相关讨论不断增加，情绪升温", "话题持续占据热搜前20，新增讨论保持增长趋势", "密切监控，准备回应稿，联络核心支持者", "通常1-3天", "多个营销号转发；评论区出现阵营分化；话题热度持续",
    "峰值期", "舆情达到传播顶点，讨论热度最高，舆论压力最大", "热搜前三，全网讨论量峰值，主流媒体跟进报道", "谨慎发声，必要时主动澄清，避免激化矛盾", "通常2-5天", "意见领袖表态；话题冲上热搜；媒体社论发布",
    "衰减期", "舆情关注度逐渐下降，话题热度回落", "热搜排名下滑至50名以外，日均讨论量下降30%以上", "逐步减少公开回应，专注后续行动", "通常3-14天", "热度下降；新话题出现；讨论趋于理性",
    "平息期", "舆情基本平息，相关讨论减少到日常水平", "话题退出热搜榜，讨论量回落至日常基线水平", "复盘总结，整理档案，回归常态", "通常14天以上", "媒体报道减少；公众关注转移；日常信息覆盖",
    "当前所处阶段", "进入该阶段时间", "已持续时长(小时)", "风险等级", "高风险", "中风险", "低风险",

    # Sheet 2: 时间线记录表
    "时间线记录表", "日期时间", "舆情热度指数", "关键动作", "负责人", "状态", "备注",
    "日期", "时间", "热度(0-100)", "动作描述", "执行人", "待处理", "进行中", "已完成",
    "阅读量", "评论数", "转发数", "效果评估", "截图/附件",

    # Sheet 3: 衰减曲线监测表
    "衰减曲线监测表", "日期", "热度指数", "对比昨日", "趋势", "阶段判断", "备注",
    "监测日期", "综合热度值(0-100)", "较上日变化", "上升", "下降", "持平", "当前阶段",
    "建议行动", "平台", "阅读量", "讨论量", "情感倾向", "正面占比", "负面占比", "中性占比",

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
    "高风险", "中风险", "低风险",

    # Sheet 10: 三问判断表
    "三问判断表", "判断维度", "问题", "评估选项", "得分", "加权得分", "说明",
    "实质伤害判断", "是否存在实质性伤害？", "有明确证据显示严重伤害(5分)", "有迹象显示可能伤害(3分)", "伤害可能性低(1分)", "无实质伤害(0分)",
    "最坏结果评估", "最坏情况会是什么？", "不可逆的严重后果(5分)", "长期负面影响(4分)", "短期可控影响(2分)", "几乎无影响(0分)",
    "发声认输判断", "发声是否意味着认输？", "对方完全胜利(5分)", "对方占据优势(4分)", "双方僵持(2分)", "我方占据优势(0分)",
    "总分", "加权总分", "建议", "总分小于6分暂缓发声 | 6-10分谨慎发声 | 大于10分考虑发声",

    # Sheet 11: 发声内容检查表
    "发声内容检查表", "检查维度", "检查项", "是否符合要求", "整改建议", "备注",
    "语气检查", "是否过于情绪化？", "是", "否",
    "是否使用攻击性语言？", "是", "否",
    "是否过于被动防御？", "是", "否",
    "篇幅检查", "是否过长（超过500字）？", "是", "否",
    "是否过短（少于50字）？", "是", "否",
    "核心信息是否突出？", "是", "否",
    "情绪词检查", "是否包含负面情绪词？", "是", "否",
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
    "热度预警", "突然出现大量相似负面内容", "高", "立即启动监测，增加上报频率",
    "媒体预警", "主流媒体主动询问", "高", "准备统一口径，必要时召开新闻发布会",
    "KOL预警", "意见领袖突然转向", "中", "评估原因，准备应对策略",
    "平台预警", "话题登上热搜", "高", "准备官方回应，跟踪舆情走向",
    "政策预警", "涉及政策敏感话题", "高", "咨询法律顾问，评估是否需要主动沟通",
    "竞品预警", "竞品借机炒作", "中", "准备澄清材料，评估是否需要法律手段",

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

    # Common strings
    "是", "否", "通过", "不通过", "已完成", "未完成", "进行中", "待处理",
    "高", "中", "低", "P1", "P2", "P3",
    "正面", "负面", "中性", "正面为主", "负面为主",
    "严重", "中等", "轻微", "无",
]

print(f"Total strings: {len(strings)}")

# ============================================================
# BUILD WORKBOOK
# ============================================================
print("\nBuilding workbook...")
work_dir = '/tmp/xlsx_work_main'
copy_template(work_dir)

sheet_names = [
    "危机阶段判断表", "时间线记录表", "衰减曲线监测表",
    "关系分类矩阵", "澄清对象优先级表", "关键关系维护表",
    "日常积累记录", "一致性检验表", "存量盘点仪表盘",
    "三问判断表", "发声内容检查表", "历史发声记录",
    "核心团队联系表", "预警信号清单", "行动协议跟踪表",
    "真假复盘识别表", "运气成分分析表", "改进跟踪表",
    "个人信息总览", "历史舆情记录", "应对效果评估"
]

# workbook.xml
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

# workbook.xml.rels
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

# Content_Types.xml
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

# ============================================================
# HELPER FUNCTIONS
# ============================================================
def create_base_sheet():
    return '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView tabSelected="1" workbookViewId="0">
      <pane ySplit="2" topLeftCell="A3" activePane="bottomLeft" state="frozen"/>
    </sheetView>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols>
    <col min="1" max="1" width="16" customWidth="1"/>
    <col min="2" max="2" width="20" customWidth="1"/>
    <col min="3" max="3" width="20" customWidth="1"/>
    <col min="4" max="4" width="14" customWidth="1"/>
    <col min="5" max="5" width="14" customWidth="1"/>
    <col min="6" max="6" width="14" customWidth="1"/>
    <col min="7" max="7" width="20" customWidth="1"/>
  </cols>
  <sheetData>
'''

def make_row(r, cells):
    return f'    <row r="{r}">{"".join(cells)}</row>\n'

def make_cell(addr, idx, style="s=\"1\"", cell_type="t=\"s\""):
    return f'<c r="{addr}" {cell_type} {style}><v>{idx}</v></c>'

def make_input_cell(addr, style="s=\"1\""):
    return f'<c r="{addr}" {style}></c>'

# ============================================================
# SHEET 1: 危机阶段判断表
# ============================================================
print("Building Sheet 1: 危机阶段判断表...")
s1 = create_base_sheet()

# Row 1: Title
s1 += make_row(1, [make_cell("A1", 0, "s=\"3\""), make_cell("B1", 1, "s=\"3\""), make_cell("C1", 2, "s=\"3\""), make_cell("D1", 3, "s=\"3\""), make_cell("E1", 4, "s=\"3\""), make_cell("F1", 5, "s=\"3\""), make_cell("G1", 6, "s=\"3\"")])

# Row 2: Phase headers
s1 += make_row(2, [make_cell("A2", 8, "s=\"4\""), make_cell("B2", 9, "s=\"4\""), make_cell("C2", 10, "s=\"4\""), make_cell("D2", 11, "s=\"4\""), make_cell("E2", 12, "s=\"4\""), make_cell("F2", 5, "s=\"4\""), make_cell("G2", 6, "s=\"4\"")])

# Rows 3-7: Phase data
phases = [
    (8, 13, 18, 23, 28, 33, 38),
    (9, 14, 19, 24, 29, 34, 39),
    (10, 15, 20, 25, 30, 35, 40),
    (11, 16, 21, 26, 31, 36, 41),
    (12, 17, 22, 27, 32, 37, 42),
]
for i, phase in enumerate(phases):
    row = i + 3
    s1 += make_row(row, [
        make_cell(f"A{row}", phase[0], "s=\"5\""),
        make_cell(f"B{row}", phase[1]),
        make_cell(f"C{row}", phase[2]),
        make_cell(f"D{row}", phase[3]),
        make_cell(f"E{row}", phase[4]),
        make_cell(f"F{row}", phase[5]),
        make_cell(f"G{row}", phase[6]),
    ])

# Current status section
s1 += make_row(9, [make_cell("A9", 43, "s=\"4\""), make_cell("B9", 44, "s=\"4\""), make_cell("C9", 45, "s=\"4\"")])
s1 += make_row(10, [make_input_cell("A10"), make_input_cell("B10"), make_input_cell("C10")])
s1 += make_row(11, [make_cell("A11", 46, "s=\"4\""), make_cell("B11", 47, "s=\"4\""), make_cell("C11", 48, "s=\"4\"")])
s1 += make_row(12, [make_input_cell("A12"), make_input_cell("B12"), make_input_cell("C12")])

s1 += '  </sheetData>\n'
s1 += '  <dataValidations>\n'
s1 += '    <dataValidation type="list" sqref="A12" formula1="&quot;高风险,中风险,低风险&quot;" showInputMessage="1" prompt="选择风险等级" promptTitle="风险等级"/>\n'
s1 += '  </dataValidations>\n'
s1 += '  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>\n'
s1 += '</worksheet>'

with open(f'{work_dir}/xl/worksheets/sheet1.xml', 'w', encoding='utf-8') as f:
    f.write(s1)

# ============================================================
# SHEET 2: 时间线记录表
# ============================================================
print("Building Sheet 2: 时间线记录表...")
s2 = create_base_sheet()

s2 += make_row(1, [make_cell("A1", 50, "s=\"3\"")])
s2 += make_row(2, [
    make_cell("A2", 51, "s=\"4\""), make_cell("B2", 52, "s=\"4\""), make_cell("C2", 53, "s=\"4\""),
    make_cell("D2", 54, "s=\"4\""), make_cell("E2", 55, "s=\"4\""), make_cell("F2", 56, "s=\"4\""), make_cell("G2", 57, "s=\"4\"")
])
for i in range(20):
    row = i + 3
    s2 += make_row(row, [
        make_input_cell(f"A{row}"), make_input_cell(f"B{row}"), make_input_cell(f"C{row}"),
        make_input_cell(f"D{row}"), make_input_cell(f"E{row}"), make_input_cell(f"F{row}"), make_input_cell(f"G{row}")
    ])

s2 += '  </sheetData>\n'
s2 += '  <dataValidations>\n'
s2 += '    <dataValidation type="list" sqref="F3:F22" formula1="&quot;待处理,进行中,已完成&quot;" showInputMessage="1" prompt="选择状态" promptTitle="状态"/>\n'
s2 += '  </dataValidations>\n'
s2 += '  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>\n'
s2 += '</worksheet>'

with open(f'{work_dir}/xl/worksheets/sheet2.xml', 'w', encoding='utf-8') as f:
    f.write(s2)

# ============================================================
# SHEET 3: 衰减曲线监测表
# ============================================================
print("Building Sheet 3: 衰减曲线监测表...")
s3 = create_base_sheet()

s3 += make_row(1, [make_cell("A1", 80, "s=\"3\"")])
s3 += make_row(2, [
    make_cell("A2", 81, "s=\"4\""), make_cell("B2", 82, "s=\"4\""), make_cell("C2", 83, "s=\"4\""),
    make_cell("D2", 84, "s=\"4\""), make_cell("E2", 85, "s=\"4\""), make_cell("F2", 86, "s=\"4\""), make_cell("G2", 87, "s=\"4\"")
])

for i in range(30):
    row = i + 3
    trend_formula = f'<c r="C{row}" s="3"><f>IF(B{row}=&quot;&quot;,&quot;&quot;,IF(B{row}=B{row-1},&quot;持平&quot;,IF(B{row}&gt;B{row-1},&quot;上升&quot;,&quot;下降&quot;)))</f><v></v></c>'
    s3 += make_row(row, [
        make_input_cell(f"A{row}"), make_input_cell(f"B{row}"),
        trend_formula,
        make_input_cell(f"D{row}"), make_input_cell(f"E{row}"), make_input_cell(f"F{row}"), make_input_cell(f"G{row}")
    ])

s3 += '  </sheetData>\n'
s3 += '  <dataValidations>\n'
s3 += '    <dataValidation type="list" sqref="D3:D32" formula1="&quot;上升,下降,持平&quot;" showInputMessage="1" prompt="选择趋势" promptTitle="趋势"/>\n'
s3 += '  </dataValidations>\n'
s3 += '  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>\n'
s3 += '</worksheet>'

with open(f'{work_dir}/xl/worksheets/sheet3.xml', 'w', encoding='utf-8') as f:
    f.write(s3)

# ============================================================
# SHEETS 4-21: Standardized structure
# ============================================================
sheet_configs = [
    (4, 110, [110, 111, 112, 113, 114, 115, 116, 117], 20),
    (5, 150, [150, 151, 152, 153, 154, 155, 156, 157], 20),
    (6, 180, [180, 181, 182, 183, 184, 185, 186, 187], 20),
    (7, 210, [210, 211, 212, 213, 214, 215, 216, 217], 20),
    (8, 250, [250, 251, 252, 253, 254, 255], 15),
    (9, 280, [280, 281, 282, 283, 284, 285], 15),
    (10, 310, [310, 311, 312, 313, 314, 315, 316], 8),
    (11, 350, [350, 351, 352, 353, 354, 355], 20),
    (12, 390, [390, 391, 392, 393, 394, 395, 396, 397], 20),
    (13, 420, [420, 421, 422, 423, 424, 425, 426, 427], 15),
    (14, 450, [450, 451, 452, 453, 454, 455, 456], 15),
    (15, 480, [480, 481, 482, 483, 484, 485, 486, 487], 15),
    (16, 510, [510, 511, 512, 513, 514, 515], 10),
    (17, 540, [540, 541, 542, 543, 544, 545, 546], 10),
    (18, 570, [570, 571, 572, 573, 574, 575, 576, 577, 578], 20),
    (19, 600, [600, 601, 602, 603, 604], 10),
    (20, 630, [630, 631, 632, 633, 634, 635, 636, 637, 638], 20),
    (21, 660, [660, 661, 662, 663, 664, 665, 666, 667, 668], 20),
]

for sheet_num, title_idx, header_indices, num_rows in sheet_configs:
    print(f"Building Sheet {sheet_num}: {sheet_names[sheet_num-1]}...")
    s = create_base_sheet()

    s += make_row(1, [make_cell("A1", title_idx, "s=\"3\"")])
    header_cells = [make_cell(f"{chr(65+j)}2", idx, "s=\"4\"") for j, idx in enumerate(header_indices)]
    s += make_row(2, header_cells)

    for i in range(num_rows):
        row = i + 3
        row_cells = [make_input_cell(f"{chr(65+j)}{row}") for j in range(len(header_indices))]
        s += make_row(row, row_cells)

    s += '  </sheetData>\n'
    s += '  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>\n'
    s += '</worksheet>'

    with open(f'{work_dir}/xl/worksheets/sheet{sheet_num}.xml', 'w', encoding='utf-8') as f:
        f.write(s)

# ============================================================
# SHARED STRINGS
# ============================================================
print("Building sharedStrings.xml...")
si_entries = ''.join(['<si><t>' + s.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;') + '</t></si>' for s in strings])
shared_xml = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n'
shared_xml += '<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="' + str(len(strings)) + '" uniqueCount="' + str(len(strings)) + '">\n'
shared_xml += si_entries + '\n</sst>'

with open(f'{work_dir}/xl/sharedStrings.xml', 'w', encoding='utf-8') as f:
    f.write(shared_xml)

# ============================================================
# STYLES - Fixed version without special characters
# ============================================================
print("Building styles.xml...")

# Use numeric character references for special chars in XML
styles_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <fonts>
    <font><sz val="11"/><name val="Calibri"/></font>
    <font><sz val="11"/><name val="Calibri"><color rgb="000000FF"/></name></font>
    <font><sz val="11"/><name val="Calibri"><color rgb="00000000"/></name></font>
    <font><sz val="11"/><name val="Calibri"><color rgb="00008000"/></name></font>
    <font><b/><sz val="12"/><name val="Calibri"><color rgb="FFFFFFFF"/></name></font>
    <font><b/><sz val="11"/><name val="Calibri"><color rgb="00000000"/></name></font>
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
    <border>
      <left style="thin"><color rgb="00000000"/></left>
      <right style="thin"><color rgb="00000000"/></right>
      <top style="thin"><color rgb="00000000"/></top>
      <bottom style="thin"><color rgb="00000000"/></bottom>
    </border>
    <border>
      <left style="medium"><color rgb="00000000"/></left>
      <right style="medium"><color rgb="00000000"/></right>
      <top style="medium"><color rgb="00000000"/></top>
      <bottom style="medium"><color rgb="00000000"/></bottom>
    </border>
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

# ============================================================
# PACK
# ============================================================
print("\nPacking workbook...")

# Use Unix-style path
output_path = '/d/新课开发/工作手册/AI时代新舆论环境应对工作手册/完整课程包/06-工具表单/工具表单集.xlsx'
os.makedirs(os.path.dirname(output_path), exist_ok=True)

pack(work_dir, output_path)
print(f"\nCreated: {output_path}")
print("Done!")
