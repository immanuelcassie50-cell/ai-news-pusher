#!/usr/bin/env python3
"""
生成 01_T型技能结构诊断量表.xlsx
使用直接XML构建方式
"""

import os
import shutil
import subprocess

SKILL_DIR = r"C:\Users\Administrator\.claude\skills\Excel表格处理"
TEMPLATE_DIR = os.path.join(SKILL_DIR, "templates", "minimal_xlsx")
OUTPUT_DIR = r"D:\新课开发\测评表单\专业技术人员10大测评"
OUTPUT_FILE = os.path.join(OUTPUT_DIR, "01_T型技能结构诊断量表.xlsx")

# ===== 共享字符串表 =====
# 按顺序: 索引 = 位置
SHARED_STRINGS = [
    # === 通用标签 (0-41) ===
    "T型技能结构诊断量表",                                    # 0
    "使用说明：请根据自己的实际情况，选择最符合的选项。1=完全陌生，5=能指导他人。",  # 1
    "题号",                                                  # 2
    "题目内容",                                              # 3
    "1=完全陌生  2=较少接触  3=一般掌握  4=较熟练  5=能指导他人",  # 4
    "维度",                                                  # 5
    "得分",                                                  # 6
    "解读",                                                  # 7
    # === 维度标签 (8-14) ===
    "纵轴_核心知识",                                         # 8
    "纵轴_方法论",                                           # 9
    "纵轴_前沿追踪",                                         # 10
    "横向_业务理解",                                         # 11
    "横向_数据素养",                                         # 12
    "横向_项目管理",                                         # 13
    "横向_沟通表达",                                         # 14
    "横向_用户视角",                                         # 15
    "横向_协作模式",                                         # 16
    "横向_学习迁移",                                         # 17
    # === 结果Sheet文字 (18-30) ===
    "维度得分汇总",                                          # 18
    "关键发现",                                              # 19
    "类型判断",                                              # 20
    "T型结构剖面",                                           # 21
    "纵轴深度（均值）",                                     # 22
    "横轴广度（均值）",                                     # 23
    "业务理解",                                              # 24
    "数据素养",                                              # 25
    "项目管理",                                              # 26
    "沟通表达",                                              # 27
    "用户视角",                                              # 28
    "协作模式",                                              # 29
    "学习迁移",                                              # 30
    "T型结构评分结果",                                       # 31
    "您的T型结构评估如下：纵轴代表专业深度，横轴代表跨领域广度。",  # 32
    "诊断解读",                                              # 33
    # === 解读类型 (34-41) ===
    "深井型",                                                # 34
    "宽浅型",                                                # 35
    "均衡发展中",                                            # 36
    "T型健康态",                                             # 37
    "纵轴偏低",                                               # 38
    "横轴偏窄",                                               # 39
    "严重失衡",                                               # 40
    "发展期",                                                 # 41
    # === 28道题题目文本 (42-69) ===
    # Q01-Q14 纵向轴
    "您能否清晰讲解本专业领域最核心的几个概念和原理？",     # 42
    "您是否独立解决过本领域公认的技术难题？",               # 43
    "您是否形成了一套自己总结的方法论或工作框架？",         # 44
    "当遇到新问题时，您是否能从原理出发推导解决方案？",     # 45
    "您是否订阅或定期阅读本领域的顶会论文、技术博客？",     # 46
    "您是否能预判本领域技术的发展趋势？",                   # 47
    "您是否承担过本领域的技术决策责任？",                   # 48
    "您是否能为他人解决本领域的复杂问题提供指导？",         # 49
    "您是否在本领域发表过技术文章或进行过技术分享？",       # 50
    "您是否能设计本领域的整体技术架构？",                   # 51
    "您是否关注过本领域之外的相关技术发展？",               # 52
    "您是否能将本领域的方法论迁移到其他领域？",             # 53
    "您是否曾因技术判断准确而避免了项目风险？",             # 54
    "您是否被视为团队在本领域的核心技术专家？",             # 55
    # Q15-Q28 横向轴
    "您能清晰说明您的工作为哪个业务目标服务吗？",           # 56
    "您是否参与过业务指标的定义或讨论？",                   # 57
    "您能否独立完成基本的数据分析查询（SQL等）？",         # 58
    "您在技术决策时会参考量化数据而非主观判断吗？",         # 59
    "您能否合理评估技术任务的工期和风险？",                 # 60
    "您是否主动推动过项目进度的管理和同步？",               # 61
    "您能否用非技术人员能理解的语言解释技术方案？",         # 62
    "您是否写过让非技术人员能看懂的技术文档？",             # 63
    "您是否主动了解过最终用户的使用场景和痛点？",           # 64
    "您的技术方案设计是否考虑过用户体验？",                 # 65
    "您是否能理解并尊重其他职能部门的工作逻辑？",           # 66
    "在跨部门协作中，您是否能有效推动共识达成？",           # 67
    "您是否能从过往项目中抽象出可迁移的通用经验？",         # 68
    "接触新领域时，您是否善于寻找与已有知识的类比？",       # 69
    # === 解读内容 (70-77) ===
    "您的纵轴深度优秀，但横轴广度明显不足。建议优先发展「业务理解」和「沟通表达」，这两项是打开影响力的关键杠杆。",  # 70
    "您的横轴广度尚可，但纵轴深度不够突出。建议选择一个感兴趣且有积累的领域，集中精力深挖，建立不可替代的专业纵轴。",  # 71
    "您的T型两边都在发展中，还没有形成明显的优势极。建议尽快在纵轴和横轴中选定一个优先发展方向，形成明显的优势极。",  # 72
    "您的T型结构呈现健康的双向发展态势。建议继续保持纵轴前沿的同时，重点发展「业务理解」和「协作模式」，向技术领导者转型。",  # 73
    "您的专业纵轴深度有较大提升空间。建议主动参与复杂项目，建立自己的方法论，保持前沿追踪。",  # 74
    "您的横向广度需要拓展。建议选择性发展与纵轴最接近的横轴领域，投入产出比最高。",  # 75
    "您的T型结构严重失衡，需要针对性发展较弱的轴线。建议根据职业阶段选择优先发展方向。",  # 76
    "您处于职业发展早期，这是正常状态。建议以纵轴为主，有意识地接触横轴领域。",  # 77
]

# ===== 28道题元数据 =====
# (题号, sharedStrings题目索引, 维度sharedStrings索引)
QUESTIONS = [
    # 纵向轴 Q01-Q14 (维度: 8=核心知识, 9=方法论, 10=前沿追踪)
    ("Q01", 42, 8), ("Q02", 43, 8), ("Q03", 44, 9), ("Q04", 45, 9),
    ("Q05", 46, 10), ("Q06", 47, 10), ("Q07", 48, 8), ("Q08", 49, 8),
    ("Q09", 50, 9), ("Q10", 51, 8), ("Q11", 52, 10), ("Q12", 53, 9),
    ("Q13", 54, 9), ("Q14", 55, 8),
    # 横向轴 Q15-Q28 (维度: 11-17)
    ("Q15", 56, 11), ("Q16", 57, 11), ("Q17", 58, 12), ("Q18", 59, 12),
    ("Q19", 60, 13), ("Q20", 61, 13), ("Q21", 62, 14), ("Q22", 63, 14),
    ("Q23", 64, 15), ("Q24", 65, 15), ("Q25", 66, 16), ("Q26", 67, 16),
    ("Q27", 68, 17), ("Q28", 69, 17),
]

# 解读库内容: (类型标签, 解读内容索引)
INTERPRETATIONS = [
    (34, 70), (35, 71), (36, 72), (37, 73), (38, 74), (39, 75), (40, 76), (41, 77)
]

# ===== XML构建函数 =====

def build_shared_strings():
    lines = ['<?xml version="1.0" encoding="UTF-8" standalone="yes"?>']
    lines.append('<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" '
                 f'count="{len(SHARED_STRINGS)}" uniqueCount="{len(SHARED_STRINGS)}">')
    for s in SHARED_STRINGS:
        escaped = s.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;')
        lines.append(f'  <si><t>{escaped}</t></si>')
    lines.append('</sst>')
    return '\n'.join(lines)

def build_styles():
    return '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <numFmts count="4">
    <numFmt numFmtId="164" formatCode="$#,##0;($#,##0);&quot;-&quot;"/>
    <numFmt numFmtId="165" formatCode="0.0%"/>
    <numFmt numFmtId="166" formatCode="0.0x"/>
    <numFmt numFmtId="167" formatCode="#,##0"/>
  </numFmts>
  <fonts count="5">
    <font><sz val="11"/><name val="微软雅黑"/></font>
    <font><sz val="11"/><name val="微软雅黑"/><color rgb="000000FF"/></font>
    <font><sz val="11"/><name val="微软雅黑"/><color rgb="00000000"/></font>
    <font><sz val="11"/><name val="微软雅黑"/><color rgb="00008000"/></font>
    <font><sz val="11"/><name val="微软雅黑"/><b/></font>
  </fonts>
  <fills count="3">
    <fill><patternFill patternType="none"/></fill>
    <fill><patternFill patternType="gray125"/></fill>
    <fill>
      <patternFill patternType="solid">
        <fgColor rgb="00FFFF00"/>
        <bgColor indexed="64"/>
      </patternFill>
    </fill>
  </fills>
  <borders count="1">
    <border><left/><right/><top/><bottom/><diagonal/></border>
  </borders>
  <cellXfs count="13">
    <xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/>
    <xf numFmtId="0" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1"/>
    <xf numFmtId="0" fontId="2" fillId="0" borderId="0" xfId="0" applyFont="1"/>
    <xf numFmtId="0" fontId="3" fillId="0" borderId="0" xfId="0" applyFont="1"/>
    <xf numFmtId="0" fontId="4" fillId="0" borderId="0" xfId="0" applyFont="1"/>
    <xf numFmtId="164" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>
    <xf numFmtId="164" fontId="2" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>
    <xf numFmtId="165" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>
    <xf numFmtId="165" fontId="2" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>
    <xf numFmtId="167" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>
    <xf numFmtId="167" fontId="2" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>
    <xf numFmtId="1" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>
    <xf numFmtId="0" fontId="1" fillId="2" borderId="0" xfId="0" applyFont="1" applyFill="1"/>
  </cellXfs>
</styleSheet>'''

def build_sheet1():
    """填答 sheet"""
    lines = ['<?xml version="1.0" encoding="UTF-8" standalone="yes"?>']
    lines.append('<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" '
                 'xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">')
    lines.append('  <sheetViews><sheetView tabSelected="1" workbookViewId="0"/></sheetViews>')
    lines.append('  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" '
                 'xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>')
    lines.append('  <cols>')
    lines.append('    <col min="1" max="1" width="10" customWidth="1"/>')
    lines.append('    <col min="2" max="2" width="58" customWidth="1"/>')
    lines.append('    <col min="3" max="3" width="38" customWidth="1"/>')
    lines.append('    <col min="4" max="4" width="12" customWidth="1"/>')
    lines.append('  </cols>')
    lines.append('  <sheetData>')

    # Row 1: 标题
    lines.append('    <row r="1" ht="26" customHeight="1">')
    lines.append('      <c r="A1" t="s" s="4"><v>0</v></c>')
    lines.append('    </row>')

    # Row 2: 使用说明
    lines.append('    <row r="2" ht="18" customHeight="1">')
    lines.append('      <c r="A2" t="s" s="0"><v>1</v></c>')
    lines.append('    </row>')

    # Row 3: 空行
    lines.append('    <row r="3"><c r="A3"/></row>')

    # Row 4: 表头
    lines.append('    <row r="4" ht="18" customHeight="1">')
    lines.append('      <c r="A4" t="s" s="4"><v>2</v></c>')   # 题号
    lines.append('      <c r="B4" t="s" s="4"><v>3</v></c>')   # 题目内容
    lines.append('      <c r="C4" t="s" s="4"><v>4</v></c>')   # 选项
    lines.append('      <c r="D4" t="s" s="4"><v>2</v></c>')   # 答题区(显示"题号"作为占位)
    lines.append('    </row>')

    # Rows 5-32: 28道题
    for i, (qid, qtext_idx, dim_idx) in enumerate(QUESTIONS):
        row_num = i + 5
        lines.append(f'    <row r="{row_num}">')
        lines.append(f'      <c r="A{row_num}" t="s" s="0"><v>{i+1}</v></c>')  # 题号(数字)
        lines.append(f'      <c r="B{row_num}" t="s" s="0"><v>{qtext_idx}</v></c>')  # 题目内容
        lines.append(f'      <c r="C{row_num}" t="s" s="0"><v>4</v></c>')  # 选项说明
        lines.append(f'      <c r="D{row_num}" s="1"/>')  # 答题区(蓝色输入)
        lines.append(f'    </row>')

    lines.append('  </sheetData>')
    lines.append('</worksheet>')
    return '\n'.join(lines)

def build_sheet2():
    """结果 sheet"""
    lines = ['<?xml version="1.0" encoding="UTF-8" standalone="yes"?>']
    lines.append('<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" '
                 'xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">')
    lines.append('  <sheetViews><sheetView tabSelected="0" workbookViewId="0"/></sheetViews>')
    lines.append('  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" '
                 'xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>')
    lines.append('  <cols>')
    lines.append('    <col min="1" max="1" width="20" customWidth="1"/>')
    lines.append('    <col min="2" max="2" width="12" customWidth="1"/>')
    lines.append('    <col min="3" max="3" width="50" customWidth="1"/>')
    lines.append('  </cols>')
    lines.append('  <sheetData>')

    # Row 1: 标题
    lines.append('    <row r="1" ht="26" customHeight="1">')
    lines.append('      <c r="A1" t="s" s="4"><v>31</v></c>')
    lines.append('    </row>')

    # Row 2: 说明
    lines.append('    <row r="2" ht="18" customHeight="1">')
    lines.append('      <c r="A2" t="s" s="0"><v>32</v></c>')
    lines.append('    </row>')

    # Row 3: 空行
    lines.append('    <row r="3"><c r="A3"/></row>')

    # Row 4: 维度得分汇总标题
    lines.append('    <row r="4" ht="18" customHeight="1">')
    lines.append('      <c r="A4" t="s" s="4"><v>18</v></c>')
    lines.append('    </row>')

    # Row 5: 表头
    lines.append('    <row r="5" ht="18" customHeight="1">')
    lines.append('      <c r="A5" t="s" s="4"><v>5</v></c>')   # 维度
    lines.append('      <c r="B5" t="s" s="4"><v>6</v></c>')   # 得分
    lines.append('      <c r="C5" t="s" s="4"><v>7</v></c>')   # 解读
    lines.append('    </row>')

    # Row 6: 纵轴深度 = AVERAGE(填答!D5:D18) → Q01-Q14 (rows 5-18 in 填答)
    lines.append('    <row r="6">')
    lines.append('      <c r="A6" t="s" s="0"><v>22</v></c>')  # 纵轴深度（均值）
    lines.append('      <c r="B6" s="8"><f>AVERAGE(填答!D5:D18)</f><v></v></c>')
    lines.append('      <c r="C6" t="s" s="0"><v>38</v></c>')  # 默认解读
    lines.append('    </row>')

    # Row 7: 横轴广度 = 7个子领域均值/7
    # Q15-Q28对应填答D19-D32
    # 业务理解=D19:D20, 数据素养=D21:D22, 项目管理=D23:D24
    # 沟通表达=D25:D26, 用户视角=D27:D28, 协作模式=D29:D30, 学习迁移=D31:D32
    lines.append('    <row r="7">')
    lines.append('      <c r="A7" t="s" s="0"><v>23</v></c>')  # 横轴广度（均值）
    lines.append('      <c r="B7" s="8"><f>(AVERAGE(填答!D19:D20)+AVERAGE(填答!D21:D22)+AVERAGE(填答!D23:D24)+AVERAGE(填答!D25:D26)+AVERAGE(填答!D27:D28)+AVERAGE(填答!D29:D30)+AVERAGE(填答!D31:D32))/7</f><v></v></c>')
    lines.append('      <c r="C7" t="s" s="0"><v>39</v></c>')  # 默认解读
    lines.append('    </row>')

    # Rows 8-14: 横向7子领域
    horiz = [
        (24, "AVERAGE(填答!D19:D20)"),   # 业务理解
        (25, "AVERAGE(填答!D21:D22)"),   # 数据素养
        (26, "AVERAGE(填答!D23:D24)"),   # 项目管理
        (27, "AVERAGE(填答!D25:D26)"),   # 沟通表达
        (28, "AVERAGE(填答!D27:D28)"),   # 用户视角
        (29, "AVERAGE(填答!D29:D30)"),   # 协作模式
        (30, "AVERAGE(填答!D31:D32)"),   # 学习迁移
    ]
    for i, (label_idx, formula) in enumerate(horiz):
        row_num = 8 + i
        lines.append(f'    <row r="{row_num}">')
        lines.append(f'      <c r="A{row_num}" t="s" s="0"><v>{label_idx}</v></c>')
        lines.append(f'      <c r="B{row_num}" s="8"><f>{formula}</f><v></v></c>')
        lines.append(f'      <c r="C{row_num}" t="s" s="0"><v>39</v></c>')  # 默认横轴偏窄
        lines.append(f'    </row>')

    # Row 15: 空行
    lines.append('    <row r="15"><c r="A15"/></row>')

    # Row 16: 类型判断标题
    lines.append('    <row r="16" ht="18" customHeight="1">')
    lines.append('      <c r="A16" t="s" s="4"><v>20</v></c>')
    lines.append('    </row>')

    # Row 17: 类型判断公式
    # 深井型: 纵轴>=4 AND 横轴均值<3
    # 宽浅型: 纵轴<3 AND 横轴均值>=3.5
    # 均衡发展中: 纵轴3-4 AND 横轴3-4
    # T型健康态: 纵轴>=4 AND 横轴均值>=3 AND 至少3个子领域>=3.5
    # 严重失衡: 不满足以上但纵轴<3或横轴<3
    # 发展期: 默认
    lines.append('    <row r="17">')
    type_formula = (
        'IF(B6&lt;3,"纵轴偏低",'
        'IF(AND(B6&gt;=3,B6&lt;4,B7&lt;3),"严重失衡",'
        'IF(AND(B6&gt;=4,B7&lt;3),"深井型",'
        'IF(AND(B6&lt;3,B7&gt;=3.5),"宽浅型",'
        'IF(AND(B6&gt;=3,B6&lt;4,B7&gt;=3,B7&lt;4),"均衡发展中",'
        '"T型健康态"))))'
    )
    lines.append(f'      <c r="A17" s="2"><f>{type_formula}</f><v></v></c>')
    lines.append('    </row>')

    # Row 18: 空行
    lines.append('    <row r="18"><c r="A18"/></row>')

    # Row 19: 诊断解读标题
    lines.append('    <row r="19" ht="18" customHeight="1">')
    lines.append('      <c r="A19" t="s" s="4"><v>33</v></c>')
    lines.append('    </row>')

    # Row 20: 解读内容（根据类型判断）
    lines.append('    <row r="20">')
    # VLOOKUP根据A17的类型从解读库查找对应解读
    lines.append('      <c r="A20" s="0"><f>IF(A17="深井型",INDEX(解读库!B:B,MATCH("深井型",解读库!A:A,0)),IF(A17="宽浅型",INDEX(解读库!B:B,MATCH("宽浅型",解读库!A:A,0)),IF(A17="均衡发展中",INDEX(解读库!B:B,MATCH("均衡发展中",解读库!A:A,0)),IF(A17="T型健康态",INDEX(解读库!B:B,MATCH("T型健康态",解读库!A:A,0)),IF(A17="纵轴偏低",INDEX(解读库!B:B,MATCH("纵轴偏低",解读库!A:A,0)),IF(A17="横轴偏窄",INDEX(解读库!B:B,MATCH("横轴偏窄",解读库!A:A,0)),IF(A17="严重失衡",INDEX(解读库!B:B,MATCH("严重失衡",解读库!A:A,0)),INDEX(解读库!B:B,MATCH("发展期",解读库!A:A,0)))))))))</f><v></v></c>')
    lines.append('    </row>')

    lines.append('  </sheetData>')
    lines.append('</worksheet>')
    return '\n'.join(lines)

def build_sheet3():
    """题库 sheet"""
    lines = ['<?xml version="1.0" encoding="UTF-8" standalone="yes"?>']
    lines.append('<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" '
                 'xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">')
    lines.append('  <sheetViews><sheetView tabSelected="0" workbookViewId="0"/></sheetViews>')
    lines.append('  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" '
                 'xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>')
    lines.append('  <cols>')
    lines.append('    <col min="1" max="1" width="8" customWidth="1"/>')
    lines.append('    <col min="2" max="2" width="55" customWidth="1"/>')
    lines.append('    <col min="3" max="3" width="38" customWidth="1"/>')
    lines.append('    <col min="4" max="4" width="15" customWidth="1"/>')
    lines.append('    <col min="5" max="5" width="30" customWidth="1"/>')
    lines.append('  </cols>')
    lines.append('  <sheetData>')

    # Row 1: 表头
    lines.append('    <row r="1" ht="18" customHeight="1">')
    lines.append('      <c r="A1" t="s" s="4"><v>2</v></c>')   # 题号
    lines.append('      <c r="B1" t="s" s="4"><v>3</v></c>')   # 题目内容
    lines.append('      <c r="C1" t="s" s="4"><v>4</v></c>')   # 选项说明
    lines.append('      <c r="D1" t="s" s="4"><v>5</v></c>')   # 维度
    lines.append('      <c r="E1" t="s" s="4"><v>7</v></c>')   # 计分规则
    lines.append('    </row>')

    # Rows 2-29: 28道题
    for i, (qid, qtext_idx, dim_idx) in enumerate(QUESTIONS):
        row_num = i + 2
        dim_label_idx = dim_idx  # 维度标签的sharedStrings索引
        lines.append(f'    <row r="{row_num}">')
        lines.append(f'      <c r="A{row_num}" t="s" s="0"><v>{i+1}</v></c>')  # 题号(数字)
        lines.append(f'      <c r="B{row_num}" t="s" s="0"><v>{qtext_idx}</v></c>')  # 题目内容
        lines.append(f'      <c r="C{row_num}" t="s" s="0"><v>4</v></c>')   # 选项说明
        lines.append(f'      <c r="D{row_num}" t="s" s="0"><v>{dim_label_idx}</v></c>')  # 维度标签
        lines.append(f'      <c r="E{row_num}" t="s" s="0"><v>4</v></c>')   # 计分规则
        lines.append(f'    </row>')

    lines.append('  </sheetData>')
    lines.append('</worksheet>')
    return '\n'.join(lines)

def build_sheet4():
    """解读库 sheet"""
    lines = ['<?xml version="1.0" encoding="UTF-8" standalone="yes"?>']
    lines.append('<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" '
                 'xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">')
    lines.append('  <sheetViews><sheetView tabSelected="0" workbookViewId="0"/></sheetViews>')
    lines.append('  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" '
                 'xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>')
    lines.append('  <cols>')
    lines.append('    <col min="1" max="1" width="15" customWidth="1"/>')
    lines.append('    <col min="2" max="2" width="80" customWidth="1"/>')
    lines.append('  </cols>')
    lines.append('  <sheetData>')

    # Row 1: 表头
    lines.append('    <row r="1" ht="18" customHeight="1">')
    lines.append('      <c r="A1" t="s" s="4"><v>20</v></c>')  # 类型标签
    lines.append('      <c r="B1" t="s" s="4"><v>33</v></c>')  # 解读内容
    lines.append('    </row>')

    # Rows 2-9: 8种解读类型
    for i, (label_idx, content_idx) in enumerate(INTERPRETATIONS):
        row_num = i + 2
        lines.append(f'    <row r="{row_num}">')
        lines.append(f'      <c r="A{row_num}" t="s" s="0"><v>{label_idx}</v></c>')
        lines.append(f'      <c r="B{row_num}" t="s" s="0"><v>{content_idx}</v></c>')
        lines.append(f'    </row>')

    lines.append('  </sheetData>')
    lines.append('</worksheet>')
    return '\n'.join(lines)

def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)

    work_dir = r"D:\CC\temp\xlsx_work_01"
    if os.path.exists(work_dir):
        shutil.rmtree(work_dir)
    shutil.copytree(TEMPLATE_DIR, work_dir)

    # 写入各文件
    with open(os.path.join(work_dir, 'xl', 'styles.xml'), 'w', encoding='utf-8') as f:
        f.write(build_styles())

    with open(os.path.join(work_dir, 'xl', 'sharedStrings.xml'), 'w', encoding='utf-8') as f:
        f.write(build_shared_strings())

    # workbook.xml
    workbook_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook
  xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <fileVersion appName="xl" lastEdited="7" lowestEdited="7"/>
  <workbookPr defaultThemeVersion="166925"/>
  <bookViews>
    <workbookView xWindow="0" yWindow="0" windowWidth="20140" windowHeight="10960"/>
  </bookViews>
  <sheets>
    <sheet name="填答" sheetId="1" r:id="rId1"/>
    <sheet name="结果" sheetId="2" r:id="rId4"/>
    <sheet name="题库" sheetId="3" r:id="rId5"/>
    <sheet name="解读库" sheetId="4" r:id="rId6"/>
  </sheets>
  <calcPr calcId="191029"/>
</workbook>'''
    with open(os.path.join(work_dir, 'xl', 'workbook.xml'), 'w', encoding='utf-8') as f:
        f.write(workbook_xml)

    # workbook.xml.rels
    workbook_rels = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1"
    Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet"
    Target="worksheets/sheet1.xml"/>
  <Relationship Id="rId2"
    Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles"
    Target="styles.xml"/>
  <Relationship Id="rId3"
    Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings"
    Target="sharedStrings.xml"/>
  <Relationship Id="rId4"
    Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet"
    Target="worksheets/sheet2.xml"/>
  <Relationship Id="rId5"
    Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet"
    Target="worksheets/sheet3.xml"/>
  <Relationship Id="rId6"
    Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet"
    Target="worksheets/sheet4.xml"/>
</Relationships>'''
    with open(os.path.join(work_dir, 'xl', '_rels', 'workbook.xml.rels'), 'w', encoding='utf-8') as f:
        f.write(workbook_rels)

    # Content_Types
    content_types = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/xl/workbook.xml"
    ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
  <Override PartName="/xl/worksheets/sheet1.xml"
    ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet2.xml"
    ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet3.xml"
    ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet4.xml"
    ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/styles.xml"
    ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>
  <Override PartName="/xl/sharedStrings.xml"
    ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/>
</Types>'''
    with open(os.path.join(work_dir, '[Content_Types].xml'), 'w', encoding='utf-8') as f:
        f.write(content_types)

    # 写入4个sheet
    for sheet_num, content in [(1, build_sheet1()), (2, build_sheet2()),
                                  (3, build_sheet3()), (4, build_sheet4())]:
        sheet_path = os.path.join(work_dir, 'xl', 'worksheets', f'sheet{sheet_num}.xml')
        with open(sheet_path, 'w', encoding='utf-8') as f:
            f.write(content)

    # 打包
    result = subprocess.run(
        ['python3', os.path.join(SKILL_DIR, 'scripts', 'xlsx_pack.py'),
         work_dir, OUTPUT_FILE],
        capture_output=True, text=True
    )
    print(result.stdout)
    if result.returncode != 0:
        print("ERROR:", result.stderr)
        return

    print(f"\nCreated: {OUTPUT_FILE}")

    # 验证
    val_result = subprocess.run(
        ['python3', os.path.join(SKILL_DIR, 'scripts', 'formula_check.py'), OUTPUT_FILE],
        capture_output=True, text=True
    )
    print(val_result.stdout)

if __name__ == '__main__':
    main()
