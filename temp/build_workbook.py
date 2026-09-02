#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Build the 创新路径 工具表单 workbook."""

import os
import zipfile
import re
from xml.sax.saxutils import escape

SKILL_DIR = "C:/Users/Administrator/.claude/skills/Excel表格处理"
TEMPLATE_DIR = "/tmp/xlsx_work"
OUTPUT_PATH = "D:/新课开发/工作手册/创新路径-突破口-工作手册/完整课程包/07-工具表单/01-工具表单-创新路径突破口V1.0.xlsx"

# ──────────────────────────────────────────────────────────────────────────────
# Shared strings (all text content)
# ──────────────────────────────────────────────────────────────────────────────
STRINGS = [
    # Sheet 1: 四维检验表
    "四维检验表",                         # 0
    "检验维度",                           # 1
    "检验标准与结果填写",                 # 2
    "综合判定",                           # 3
    "刺痛性",                             # 4
    "可演绎性",                           # 5
    "精准性",                             # 6
    "专属性",                             # 7
    "维度说明",                           # 8
    "评估标准",                           # 9
    "结果(1-5分)",                        # 10
    "综合得分",                           # 11
    "判定结论",                           # 12
    "A=强 / B=中 / C=弱",                # 13
    "维度",                               # 14
    "说明",                               # 15

    # Sheet 2: 利益相关方矩阵（新版）
    "利益相关方矩阵（新版）",             # 16
    "传统vs新版对比说明",                 # 17
    "利益相关方分类",                     # 18
    "反对者",                             # 19
    "中立者",                             # 20
    "支持者",                             # 21
    "第一批受益者",                       # 22
    "影响度",                             # 23
    "支持度",                             # 24
    "行动策略",                           # 25
    "利益相关方名称",                     # 26
    "类型",                               # 27
    "影响度(1-5)",                        # 28
    "支持度(1-5)",                        # 29
    "行动建议",                           # 30
    "高影响/高支持",                       # 31
    "高影响/低支持",                       # 32
    "低影响/高支持",                       # 33
    "低影响/低支持",                       # 34

    # Sheet 3: 造路五件套检查表
    "造路五件套检查表",                   # 35
    "五件套要素",                         # 36
    "自己的人",                           # 37
    "独立预算",                           # 38
    "必要权力",                           # 39
    "独立指标",                           # 40
    "自己的用户",                         # 41
    "评估标准",                           # 42
    "现状打分（1-5）",                    # 43
    "差距分析",                           # 44
    "改进计划",                           # 45
    "评估内容",                           # 46
    "得分",                               # 47
    "差距描述",                           # 48
    "改进措施",                           # 49

    # Sheet 4: 导流边界图
    "导流边界图",                         # 50
    "存量vs增量分类表",                   # 51
    "四象限图",                           # 52
    "老员工/新员工 × 老客户/新客户",     # 53
    "导流方向决策表",                     # 54
    "边界协议",                           # 55
    "分类",                               # 56
    "存量（老）",                         # 57
    "增量（新）",                         # 58
    "客户类型",                           # 59
    "员工类型",                           # 60
    "老客户",                             # 61
    "新客户",                             # 62
    "老员工",                             # 63
    "新员工",                             # 64

    # Sheet 5: 五步退役规划表
    "五步退役规划表",                     # 65
    "五步",                               # 66
    "冻结新增",                           # 67
    "停止扩张",                           # 68
    "降为只维护",                         # 69
    "降为只读",                           # 70
    "正式关闭",                           # 71
    "状态定义",                           # 72
    "时间节点规划",                       # 73
    "风险与应对",                         # 74
    "当前状态标记",                       # 75
    "状态",                               # 76
    "风险等级",                           # 77
    "高",                                 # 78
    "中",                                 # 79
    "低",                                 # 80

    # Sheet 6: 护城河检查清单
    "护城河检查清单",                     # 81
    "五项检查",                           # 82
    "人",                                 # 83
    "预算",                               # 84
    "权力",                               # 85
    "指标",                               # 86
    "用户",                               # 87
    "定期检查机制",                       # 88
    "红黄绿灯状态",                       # 89
    "预警机制",                           # 90
    "周",                                 # 91
    "双周",                               # 92
    "月",                                 # 93
    "绿灯",                               # 94
    "黄灯",                               # 95
    "红灯",                               # 96
    "本周状态",                           # 97

    # Sheet 7: 汇报开场检验器
    "汇报开场检验器",                     # 98
    "常见错误开场白清单",                 # 99
    "正确开场白模板",                     # 100
    "自检问题",                           # 101
    "改进建议",                           # 102
    "错误开场示例",                       # 103
    "问题类型",                           # 104
    "正确开场参考",                       # 105

    # Sheet 8: 行动学习项目规划表
    "行动学习项目规划表",                 # 106
    "项目基本信息",                       # 107
    "阶段划分与时间线",                   # 108
    "任务分解",                           # 109
    "责任人分配",                         # 110
    "里程碑与交付物",                     # 111
    "项目名称",                           # 112
    "项目负责人",                         # 113
    "开始日期",                           # 114
    "结束日期",                           # 115
    "阶段名称",                           # 116
    "开始时间",                           # 117
    "结束时间",                           # 118
    "任务描述",                           # 119
    "责任人",                             # 120
    "交付物",                             # 121

    # Sheet 9: 学员自评表
    "学员自评表",                         # 122
    "课程满意度",                         # 123
    "学习收获自评",                       # 124
    "工具掌握度",                         # 125
    "应用计划",                           # 126
    "课程内容满意度",                     # 127
    "讲师满意度",                         # 128
    "实用性满意度",                       # 129
    "Overall",                           # 130
    "内容掌握",                           # 131
    "工具使用",                           # 132
    "应用信心",                           # 133
    "应用场景",                           # 134
    "时间计划",                           # 135

    # Sheet 10: 课程质量追踪表
    "课程质量追踪表",                     # 136
    "课后追踪计划",                       # 137
    "效果评估指标",                       # 138
    "应用反馈收集",                       # 139
    "追踪时间",                           # 140
    "追踪方式",                           # 141
    "评估内容",                           # 142
    "效果评分",                           # 143
    "学员反馈",                           # 144
    "改进建议",                           # 145
]

def build_shared_strings():
    """Build sharedStrings.xml content."""
    items = []
    for s in STRINGS:
        items.append(f"  <si><t>{escape(s)}</t></si>")
    count = len(STRINGS)
    return f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="{count}" uniqueCount="{count}">
{chr(10).join(items)}
</sst>'''

# ──────────────────────────────────────────────────────────────────────────────
# Style helpers (minimal_xlsx has 13 pre-built styles, indices 0-12)
# We need a few more: red header, light-red fill, light-gray fill
# Pre-built styles:
#   0  Default
#   1  Blue font / general (input)
#   2  Black font / general (formula)
#   3  Green font / general (cross-sheet)
#   4  Bold header
#   5  Blue font / currency ($#,##0) input
#   6  Black font / currency formula
#   7  Blue font / percentage (0.0%) input
#   8  Black font / percentage formula
#   9  Blue font / integer input
#  10  Black font / integer formula
#  11  Blue font / year (0) input
#  12  Blue font / yellow fill (key assumption)
#
# We need additional styles (indices 13+):
#  13  Red font / bold (section header)
#  14  Light-red fill (pattern fill)
#  15  Light-gray fill
#  16  Light-red fill / black font / currency
#  17  Center-aligned / general
#  18  Wrap text / general
# ──────────────────────────────────────────────────────────────────────────────

def build_styles():
    """Build styles.xml with pre-built + new styles."""
    return '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
            xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac">
  <numFmts count="4">
    <numFmt numFmtId="164" formatCode="$#,##0;($#,##0);&quot;-&quot;"/>
    <numFmt numFmtId="165" formatCode="0.0%"/>
    <numFmt numFmtId="166" formatCode="0.0x"/>
    <numFmt numFmtId="167" formatCode="#,##0"/>
  </numFmts>
  <fonts count="7">
    <font><sz val="11"/><name val="Calibri"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="000000FF"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="00000000"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="00008000"/></font>
    <font><sz val="11"/><name val="Calibri"/><b/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="00FF0000"/></font>
    <font><sz val="11"/><name val="Calibri"/><b/><color rgb="00FF0000"/></font>
  </fonts>
  <fills count="5">
    <fill><patternFill patternType="none"/></fill>
    <fill><patternFill patternType="gray125"/></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="00FFEBEB"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="00F2F2F2"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="00FFE6E6"/></patternFill></fill>
  </fills>
  <borders count="1">
    <border><left/><right/><top/><bottom/><diagonal/></border>
  </borders>
  <cellStyleXfs count="1">
    <xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/>
  </cellStyleXfs>
  <cellXfs count="19">
    <!-- 0 Default -->
    <xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0" applyFont="1"/>
    <!-- 1 Blue input general -->
    <xf numFmtId="0" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1"/>
    <!-- 2 Black formula general -->
    <xf numFmtId="0" fontId="2" fillId="0" borderId="0" xfId="0" applyFont="1"/>
    <!-- 3 Green cross-sheet -->
    <xf numFmtId="0" fontId="3" fillId="0" borderId="0" xfId="0" applyFont="1"/>
    <!-- 4 Bold header -->
    <xf numFmtId="0" fontId="4" fillId="0" borderId="0" xfId="0" applyFont="1"/>
    <!-- 5 Blue currency input -->
    <xf numFmtId="164" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>
    <!-- 6 Black currency formula -->
    <xf numFmtId="164" fontId="2" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>
    <!-- 7 Blue percentage input -->
    <xf numFmtId="165" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>
    <!-- 8 Black percentage formula -->
    <xf numFmtId="165" fontId="2" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>
    <!-- 9 Blue integer input -->
    <xf numFmtId="167" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>
    <!-- 10 Black integer formula -->
    <xf numFmtId="167" fontId="2" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>
    <!-- 11 Blue year input -->
    <xf numFmtId="1" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>
    <!-- 12 Blue yellow fill key assumption -->
    <xf numFmtId="0" fontId="1" fillId="2" borderId="0" xfId="0" applyFont="1" applyFill="1"/>
    <!-- 13 Red bold section header -->
    <xf numFmtId="0" fontId="6" fillId="4" borderId="0" xfId="0" applyFont="1" applyFill="1"/>
    <!-- 14 Light-red fill general (input) -->
    <xf numFmtId="0" fontId="1" fillId="4" borderId="0" xfId="0" applyFont="1" applyFill="1"/>
    <!-- 15 Light-gray fill general -->
    <xf numFmtId="0" fontId="0" fillId="3" borderId="0" xfId="0" applyFont="1" applyFill="1"/>
    <!-- 16 Light-red fill black currency -->
    <xf numFmtId="164" fontId="2" fillId="4" borderId="0" xfId="0" applyFont="1" applyFill="1" applyNumberFormat="1"/>
    <!-- 17 Center aligned -->
    <xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0" applyFont="1" applyAlignment="1"><alignment horizontal="center"/></xf>
    <!-- 18 Wrap text -->
    <xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0" applyFont="1" applyAlignment="1"><alignment wrapText="1"/></xf>
  </cellXfs>
</styleSheet>'''

def s(index):
    """Return shared string XML for index."""
    return f'<c r="{{r}}" t="s" s="{{s}}"><v>{index}</v></c>'

def input_s(index, style="14"):
    """Return shared string cell with custom style (input cells on colored background)."""
    return f'<c r="{{r}}" t="s" s="{style}"><v>{index}</v></c>'

def num(r, v, style="6"):
    """Return numeric cell."""
    return f'<c r="{r}" s="{style}"><v>{v}</v></c>'

def formula(r, f, style="6"):
    """Return formula cell."""
    return f'<c r="{r}" s="{style}"><f>{f}</f><v></v></c>'

def inline(r, text, style="0"):
    """Return inline string cell."""
    return f'<c r="{r}" s="{style}" t="inlineStr"><is><t>{escape(text)}</t></is></c>'

def empty_row(r):
    return f'<row r="{r}"></row>'

def row(r, cells, ht=None):
    h = f' ht="{ht}" customHeight="1"' if ht else ''
    return f'<row r="{r}"{h}>\n  ' + '\n  '.join(cells) + '\n</row>'

# ──────────────────────────────────────────────────────────────────────────────
# SHEET BUILDERS
# ──────────────────────────────────────────────────────────────────────────────

def build_sheet1():
    """四维检验表"""
    R = {}  # row accumulator
    def R_(r, cells, ht=None):
        R[r] = row(r, cells, ht)

    # Row 1: Title
    R_("1", [
        f'<c r="A1" t="s" s="13"><v>0</v></c>',
        f'<c r="B1" t="s" s="13"><v>1</v></c>',
        f'<c r="C1" t="s" s="13"><v>2</v></c>',
        f'<c r="D1" t="s" s="13"><v>3</v></c>',
    ], ht=22)

    # Row 2: Column headers
    R_("2", [
        f'<c r="A2" t="s" s="4"><v>14</v></c>',
        f'<c r="B2" t="s" s="4"><v>8</v></c>',
        f'<c r="C2" t="s" s="4"><v>9</v></c>',
        f'<c r="D2" t="s" s="4"><v>10</v></c>',
    ])

    # Rows 3-6: Four dimensions
    dims = [
        (4, "刺痛性",   "是否能真正触动决策者的神经，让他感到'不变就死'的紧迫感"),
        (5, "可演绎性", "方案是否能够被清晰描述、分解步骤、落地执行"),
        (6, "精准性",   "目标群体是否清晰，解决方案是否针对这一群体的真实痛点"),
        (7, "专属性",   "是否只能由行动学习小组推动，其他部门无法替代"),
    ]
    for i, (r, name, desc) in enumerate(dims, start=3):
        R_(str(r), [
            f'<c r="A{r}" t="s" s="14"><v>{4+i-1}</v></c>',
            f'<c r="B{r}" t="s" s="18"><v>{8+i-1}</v></c>',
            f'<c r="C{r}" t="s" s="1"><v></v></c>',
            f'<c r="D{r}" t="s" s="7"><v></v></c>',
        ], ht=30)

    # Row 7:综合得分
    R_("7", [
        f'<c r="A7" t="s" s="4"><v>11</v></c>',
        f'<c r="B7" t="s" s="14"><v></v></c>',
        f'<c r="C7" t="s" s="6"><f>AVERAGE(D3:D6)</f><v></v></c>',
        f'<c r="D7" t="s" s="8"><f></f><v></v></c>',
    ])

    # Row 8:判定结论
    R_("8", [
        f'<c r="A8" t="s" s="4"><v>12</v></c>',
        f'<c r="B8" t="s" s="14"><v></v></c>',
        f'<c r="C8" t="s" s="6"><f>IF(C7&gt;=4,&quot;A=强&quot;,IF(C7&gt;=2.5,&quot;B=中&quot;,&quot;C=弱&quot;))</f><v></v></c>',
        f'<c r="D8" t="s" s="1"><v></v></c>',
    ])

    # Row 9: 说明
    R_("9", [
        f'<c r="A9" t="s" s="15"><v></v></c>',
    ])

    cols = '''<cols>
  <col min="1" max="1" width="18" customWidth="1"/>
  <col min="2" max="2" width="42" customWidth="1"/>
  <col min="3" max="3" width="18" customWidth="1"/>
  <col min="4" max="4" width="16" customWidth="1"/>
</cols>'''
    data = '<sheetData>\n' + '\n'.join(R.values()) + '\n</sheetData>'
    return f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
           xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"/></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  {cols}
  {data}
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''


def build_sheet2():
    """利益相关方矩阵（新版）"""
    R = {}
    def R_(r, cells, ht=None):
        R[r] = row(r, cells, ht)

    # Row 1: Title
    R_("1", [
        f'<c r="A1" t="s" s="13"><v>16</v></c>',
        f'<c r="B1" t="s" s="13"><v>17</v></c>',
    ], ht=22)

    # Row 2: 说明
    R_("2", [
        f'<c r="A2" t="s" s="15"><v></v></c>',
    ])

    # Row 3: Column headers
    R_("3", [
        f'<c r="A3" t="s" s="4"><v>26</v></c>',
        f'<c r="B3" t="s" s="4"><v>27</v></c>',
        f'<c r="C3" t="s" s="4"><v>28</v></c>',
        f'<c r="D3" t="s" s="4"><v>29</v></c>',
        f'<c r="E3" t="s" s="4"><v>30</v></c>',
    ])

    # Rows 4-12: Stakeholder entries (8 slots)
    types = ["反对者", "中立者", "支持者", "第一批受益者"]
    for i in range(8):
        r = i + 4
        t = types[i % 4]
        R_(str(r), [
            f'<c r="A{r}" t="s" s="1"><v></v></c>',
            f'<c r="B{r}" t="s" s="17"><v>{19 + types.index(t)}</v></c>',
            f'<c r="C{r}" t="s" s="7"><v></v></c>',
            f'<c r="D{r}" t="s" s="7"><v></v></c>',
            f'<c r="E{r}" t="s" s="18"><v></v></c>',
        ])

    # Row 13: 四象限说明标题
    R_("13", [
        f'<c r="A13" t="s" s="13"><v>52</v></c>',
    ], ht=18)

    # Row 14-17: 四象限
    quads = [
        (14, "高影响/高支持", 31, "深度合作，共创推进"),
        (15, "高影响/低支持", 32, "优先沟通，消除顾虑"),
        (16, "低影响/高支持", 33, "保持参与，适时咨询"),
        (17, "低影响/低支持", 34, "持续观察，保持信息畅通"),
    ]
    for r, name, idx, action in quads:
        R_(str(r), [
            f'<c r="A{r}" t="s" s="15"><v>{idx}</v></c>',
            f'<c r="B{r}" t="s" s="18"><v>{action}</v></c>',
        ])

    cols = '''<cols>
  <col min="1" max="1" width="20" customWidth="1"/>
  <col min="2" max="2" width="16" customWidth="1"/>
  <col min="3" max="3" width="14" customWidth="1"/>
  <col min="4" max="4" width="14" customWidth="1"/>
  <col min="5" max="5" width="32" customWidth="1"/>
</cols>'''
    data = '<sheetData>\n' + '\n'.join(R.values()) + '\n</sheetData>'
    return f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
           xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"/></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  {cols}
  {data}
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''


def build_sheet3():
    """造路五件套检查表"""
    R = {}
    def R_(r, cells, ht=None):
        R[r] = row(r, cells, ht)

    # Row 1: Title
    R_("1", [
        f'<c r="A1" t="s" s="13"><v>35</v></c>',
        f'<c r="B1" t="s" s="13"><v>36</v></c>',
    ], ht=22)

    # Row 2: Column headers
    R_("2", [
        f'<c r="A2" t="s" s="4"><v>46</v></c>',
        f'<c r="B2" t="s" s="4"><v>42</v></c>',
        f'<c r="C2" t="s" s="4"><v>43</v></c>',
        f'<c r="D2" t="s" s="4"><v>44</v></c>',
        f'<c r="E2" t="s" s="4"><v>45</v></c>',
    ])

    items = [
        ("自己的人",      "是否指定了专职负责人，有明确的汇报线和考核机制"),
        ("独立预算",      "是否有独立的预算额度，可自主支配用于造路"),
        ("必要权力",      "是否具备推进所需的必要授权，不依赖旧系统审批"),
        ("独立指标",      "是否有独立的考核指标，与旧系统KPI区分"),
        ("自己的用户",    "是否锁定了第一批真实用户，不是试点概念"),
    ]
    for i, (name, std) in enumerate(items, start=3):
        R_(str(i), [
            f'<c r="A{i}" t="s" s="14"><v>{37+i-3}</v></c>',
            f'<c r="B{i}" t="s" s="18"><v>{42+i-3}</v></c>',
            f'<c r="C{i}" t="s" s="7"><v></v></c>',
            f'<c r="D{i}" t="s" s="18"><v></v></c>',
            f'<c r="E{i}" t="s" s="18"><v></v></c>',
        ], ht=30)

    cols = '''<cols>
  <col min="1" max="1" width="14" customWidth="1"/>
  <col min="2" max="2" width="42" customWidth="1"/>
  <col min="3" max="3" width="14" customWidth="1"/>
  <col min="4" max="4" width="28" customWidth="1"/>
  <col min="5" max="5" width="28" customWidth="1"/>
</cols>'''
    data = '<sheetData>\n' + '\n'.join(R.values()) + '\n</sheetData>'
    return f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
           xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"/></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  {cols}
  {data}
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''


def build_sheet4():
    """导流边界图"""
    R = {}
    def R_(r, cells, ht=None):
        R[r] = row(r, cells, ht)

    # Row 1: Title
    R_("1", [
        f'<c r="A1" t="s" s="13"><v>50</v></c>',
        f'<c r="B1" t="s" s="13"><v>51</v></c>',
    ], ht=22)

    # Row 2: Column headers (四象限)
    R_("2", [
        f'<c r="A2" t="s" s="4"><v>59</v></c>',
        f'<c r="B2" t="s" s="4"><v>61</v></c>',
        f'<c r="C2" t="s" s="4"><v>62</v></c>',
        f'<c r="D2" t="s" s="4"><v>63</v></c>',
        f'<c r="E2" t="s" s="4"><v>64</v></c>',
    ])

    # Rows 3-4: 老客户/新客户 × 老员工/新员工
    R_("3", [
        f'<c r="A3" t="s" s="4"><v>61</v></c>',
        f'<c r="B3" t="s" s="15"><v>67</v></c>',
        f'<c r="C3" t="s" s="15"><v>58</v></c>',
        f'<c r="D3" t="s" s="15"><v>68</v></c>',
        f'<c r="E3" t="s" s="15"><v></v></c>',
    ], ht=28)

    R_("4", [
        f'<c r="A4" t="s" s="4"><v>62</v></c>',
        f'<c r="B4" t="s" s="15"><v></v></c>',
        f'<c r="C4" t="s" s="15"><v></v></c>',
        f'<c r="D4" t="s" s="15"><v></v></c>',
        f'<c r="E4" t="s" s="15"><v></v></c>',
    ], ht=28)

    # Row 6: 导流方向决策表
    R_("6", [
        f'<c r="A6" t="s" s="13"><v>54</v></c>',
    ], ht=18)

    # Row 7: 决策表头
    R_("7", [
        f'<c r="A7" t="s" s="4"><v>56</v></c>',
        f'<c r="B7" t="s" s="4"><v>55</v></c>',
        f'<c r="C7" t="s" s="4"><v>55</v></c>',
    ])

    # Row 8-9: 存量/增量
    R_("8", [
        f'<c r="A8" t="s" s="14"><v>57</v></c>',
        f'<c r="B8" t="s" s="18"><v></v></c>',
        f'<c r="C8" t="s" s="18"><v></v></c>',
    ])
    R_("9", [
        f'<c r="A9" t="s" s="14"><v>58</v></c>',
        f'<c r="B9" t="s" s="18"><v></v></c>',
        f'<c r="C9" t="s" s="18"><v></v></c>',
    ])

    # Row 11: 边界协议
    R_("11", [
        f'<c r="A11" t="s" s="13"><v>55</v></c>',
    ], ht=18)
    R_("12", [
        f'<c r="A12" t="s" s="18"><v></v></c>',
    ], ht=45)

    cols = '''<cols>
  <col min="1" max="1" width="16" customWidth="1"/>
  <col min="2" max="2" width="24" customWidth="1"/>
  <col min="3" max="3" width="24" customWidth="1"/>
  <col min="4" max="4" width="24" customWidth="1"/>
  <col min="5" max="5" width="24" customWidth="1"/>
</cols>'''
    data = '<sheetData>\n' + '\n'.join(R.values()) + '\n</sheetData>'
    return f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
           xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"/></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  {cols}
  {data}
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''


def build_sheet5():
    """五步退役规划表"""
    R = {}
    def R_(r, cells, ht=None):
        R[r] = row(r, cells, ht)

    # Row 1: Title
    R_("1", [
        f'<c r="A1" t="s" s="13"><v>65</v></c>',
    ], ht=22)

    # Row 2: Column headers
    R_("2", [
        f'<c r="A2" t="s" s="4"><v>66</v></c>',
        f'<c r="B2" t="s" s="4"><v>72</v></c>',
        f'<c r="C2" t="s" s="4"><v>73</v></c>',
        f'<c r="D2" t="s" s="4"><v>74</v></c>',
        f'<c r="E2" t="s" s="4"><v>75</v></c>',
    ])

    steps = [
        ("冻结新增",  "停止接纳新的增量进入旧路径，保持现有用户但不再扩大"),
        ("停止扩张",  "不再对旧路径进行任何形式的投入和扩张"),
        ("降为只维护", "保留基本运行功能，停止功能迭代和优化"),
        ("降为只读",  "仅保留数据读取功能，所有写入操作关闭"),
        ("正式关闭",  "完成数据迁移后，完全关闭旧路径系统"),
    ]
    for i, (name, desc) in enumerate(steps, start=3):
        R_(str(i), [
            f'<c r="A{i}" t="s" s="14"><v>{67+i-3}</v></c>',
            f'<c r="B{i}" t="s" s="18"><v>{72+i-3}</v></c>',
            f'<c r="C{i}" t="s" s="1"><v></v></c>',
            f'<c r="D{i}" t="s" s="18"><v></v></c>',
            f'<c r="E{i}" t="s" s="17"><v></v></c>',
        ], ht=36)

    # Risk reference
    R_("9", [
        f'<c r="A9" t="s" s="4"><v>77</v></c>',
        f'<c r="B9" t="s" s="4"><v>78</v></c>',
        f'<c r="C9" t="s" s="4"><v>79</v></c>',
        f'<c r="D9" t="s" s="4"><v>80</v></c>',
    ])

    cols = '''<cols>
  <col min="1" max="1" width="14" customWidth="1"/>
  <col min="2" max="2" width="40" customWidth="1"/>
  <col min="3" max="3" width="16" customWidth="1"/>
  <col min="4" max="4" width="28" customWidth="1"/>
  <col min="5" max="5" width="16" customWidth="1"/>
</cols>'''
    data = '<sheetData>\n' + '\n'.join(R.values()) + '\n</sheetData>'
    return f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
           xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"/></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  {cols}
  {data}
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''


def build_sheet6():
    """护城河检查清单"""
    R = {}
    def R_(r, cells, ht=None):
        R[r] = row(r, cells, ht)

    # Row 1: Title
    R_("1", [
        f'<c r="A1" t="s" s="13"><v>81</v></c>',
    ], ht=22)

    # Row 2: Column headers
    R_("2", [
        f'<c r="A2" t="s" s="4"><v>82</v></c>',
        f'<c r="B2" t="s" s="4"><v>88</v></c>',
        f'<c r="C2" t="s" s="4"><v>88</v></c>',
        f'<c r="D2" t="s" s="4"><v>88</v></c>',
        f'<c r="E2" t="s" s="4"><v>89</v></c>',
        f'<c r="F2" t="s" s="4"><v>90</v></c>',
    ])

    # Row 3: Frequency labels
    R_("3", [
        f'<c r="A3" t="s" s="15"><v></v></c>',
        f'<c r="B3" t="s" s="4"><v>91</v></c>',
        f'<c r="C3" t="s" s="4"><v>92</v></c>',
        f'<c r="D3" t="s" s="4"><v>93</v></c>',
        f'<c r="E3" t="s" s="4"><v>97</v></c>',
        f'<c r="F3" t="s" s="4"><v></v></c>',
    ])

    items = ["人", "预算", "权力", "指标", "用户"]
    for i, item in enumerate(items, start=4):
        R_(str(i), [
            f'<c r="A{i}" t="s" s="14"><v>{83+i-4}</v></c>',
            f'<c r="B{i}" t="s" s="17"><v></v></c>',
            f'<c r="C{i}" t="s" s="17"><v></v></c>',
            f'<c r="D{i}" t="s" s="17"><v></v></c>',
            f'<c r="E{i}" t="s" s="17"><v></v></c>',
            f'<c r="F{i}" t="s" s="18"><v></v></c>',
        ])

    # Row 9: 状态说明
    R_("9", [
        f'<c r="A9" t="s" s="4"><v>89</v></c>',
        f'<c r="B9" t="s" s="4"><v>94</v></c>',
        f'<c r="C9" t="s" s="4"><v>95</v></c>',
        f'<c r="D9" t="s" s="4"><v>96</v></c>',
    ])

    cols = '''<cols>
  <col min="1" max="1" width="12" customWidth="1"/>
  <col min="2" max="2" width="12" customWidth="1"/>
  <col min="3" max="3" width="12" customWidth="1"/>
  <col min="4" max="4" width="12" customWidth="1"/>
  <col min="5" max="5" width="14" customWidth="1"/>
  <col min="6" max="6" width="28" customWidth="1"/>
</cols>'''
    data = '<sheetData>\n' + '\n'.join(R.values()) + '\n</sheetData>'
    return f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
           xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"/></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  {cols}
  {data}
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''


def build_sheet7():
    """汇报开场检验器"""
    R = {}
    def R_(r, cells, ht=None):
        R[r] = row(r, cells, ht)

    # Row 1: Title
    R_("1", [
        f'<c r="A1" t="s" s="13"><v>98</v></c>',
    ], ht=22)

    # Row 2: Column headers
    R_("2", [
        f'<c r="A2" t="s" s="4"><v>103</v></c>',
        f'<c r="B2" t="s" s="4"><v>104</v></c>',
        f'<c r="C2" t="s" s="4"><v>105</v></c>',
        f'<c r="D2" t="s" s="4"><v>101</v></c>',
    ])

    errors = [
        ("根据某总的要求，我们做了……",           "被动执行心态，展示没有独立判断"),
        ("经某部门研究决定……",                   "部门视角，缺乏全局视野"),
        ("这个方案之前没做过……",                 "防御性开场，暴露信心不足"),
        ("我觉得/我认为……",                       "个人代替组织，权威性不足"),
        ("领导让我来汇报一下……",                 "缺乏主动性和价值主张"),
    ]
    for i, (err, prob) in enumerate(errors, start=3):
        R_(str(i), [
            f'<c r="A{i}" t="s" s="15"><v>{103+i-3}</v></c>',
            f'<c r="B{i}" t="s" s="18"><v>{104+i-3}</v></c>',
            f'<c r="C{i}" t="s" s="18"><v></v></c>',
            f'<c r="D{i}" t="s" s="18"><v></v></c>',
        ], ht=28)

    # Row 9: 正确开场
    R_("9", [
        f'<c r="A9" t="s" s="13"><v>100</v></c>',
    ], ht=18)

    R_("10", [
        f'<c r="A10" t="s" s="18"><v></v></c>',
    ], ht=60)

    cols = '''<cols>
  <col min="1" max="1" width="32" customWidth="1"/>
  <col min="2" max="2" width="28" customWidth="1"/>
  <col min="3" max="3" width="28" customWidth="1"/>
  <col min="4" max="4" width="28" customWidth="1"/>
</cols>'''
    data = '<sheetData>\n' + '\n'.join(R.values()) + '\n</sheetData>'
    return f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
           xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"/></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  {cols}
  {data}
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''


def build_sheet8():
    """行动学习项目规划表"""
    R = {}
    def R_(r, cells, ht=None):
        R[r] = row(r, cells, ht)

    # Row 1: Title
    R_("1", [
        f'<c r="A1" t="s" s="13"><v>106</v></c>',
    ], ht=22)

    # Row 2: 项目基本信息
    R_("2", [
        f'<c r="A2" t="s" s="13"><v>107</v></c>',
    ], ht=18)

    R_("3", [
        f'<c r="A3" t="s" s="14"><v>112</v></c>',
        f'<c r="B3" t="s" s="1"><v></v></c>',
        f'<c r="C3" t="s" s="14"><v>113</v></c>',
        f'<c r="D3" t="s" s="1"><v></v></c>',
    ])

    R_("4", [
        f'<c r="A4" t="s" s="14"><v>114</v></c>',
        f'<c r="B4" t="s" s="1"><v></v></c>',
        f'<c r="C4" t="s" s="14"><v>115</v></c>',
        f'<c r="D4" t="s" s="1"><v></v></c>',
    ])

    # Row 6: 阶段划分
    R_("6", [
        f'<c r="A6" t="s" s="13"><v>108</v></c>',
    ], ht=18)

    # Row 7: Column headers
    R_("7", [
        f'<c r="A7" t="s" s="4"><v>116</v></c>',
        f'<c r="B7" t="s" s="4"><v>117</v></c>',
        f'<c r="C7" t="s" s="4"><v>118</v></c>',
        f'<c r="D7" t="s" s="4"><v>119</v></c>',
        f'<c r="E7" t="s" s="4"><v>120</v></c>',
        f'<c r="F7" t="s" s="4"><v>121</v></c>',
    ])

    for i in range(8, 15):
        R_(str(i), [
            f'<c r="A{i}" t="s" s="1"><v></v></c>',
            f'<c r="B{i}" t="s" s="1"><v></v></c>',
            f'<c r="C{i}" t="s" s="1"><v></v></c>',
            f'<c r="D{i}" t="s" s="18"><v></v></c>',
            f'<c r="E{i}" t="s" s="1"><v></v></c>',
            f'<c r="F{i}" t="s" s="18"><v></v></c>',
        ], ht=28)

    cols = '''<cols>
  <col min="1" max="1" width="16" customWidth="1"/>
  <col min="2" max="2" width="14" customWidth="1"/>
  <col min="3" max="3" width="14" customWidth="1"/>
  <col min="4" max="4" width="32" customWidth="1"/>
  <col min="5" max="5" width="14" customWidth="1"/>
  <col min="6" max="6" width="24" customWidth="1"/>
</cols>'''
    data = '<sheetData>\n' + '\n'.join(R.values()) + '\n</sheetData>'
    return f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
           xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"/></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  {cols}
  {data}
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''


def build_sheet9():
    """学员自评表"""
    R = {}
    def R_(r, cells, ht=None):
        R[r] = row(r, cells, ht)

    # Row 1: Title
    R_("1", [
        f'<c r="A1" t="s" s="13"><v>122</v></c>',
    ], ht=22)

    # Row 2: 课程满意度
    R_("2", [
        f'<c r="A2" t="s" s="13"><v>123</v></c>',
    ], ht=18)

    R_("3", [
        f'<c r="A3" t="s" s="14"><v>127</v></c>',
        f'<c r="B3" t="s" s="7"><v></v></c>',
        f'<c r="C3" t="s" s="14"><v>128</v></c>',
        f'<c r="D3" t="s" s="7"><v></v></c>',
        f'<c r="E3" t="s" s="14"><v>129</v></c>',
        f'<c r="F3" t="s" s="7"><v></v></c>',
        f'<c r="G3" t="s" s="14"><v>130</v></c>',
        f'<c r="H3" t="s" s="7"><f>AVERAGE(B3,D3,F3)</f><v></v></c>',
    ])

    # Row 5: 学习收获自评
    R_("5", [
        f'<c r="A5" t="s" s="13"><v>124</v></c>',
    ], ht=18)

    R_("6", [
        f'<c r="A6" t="s" s="14"><v>131</v></c>',
        f'<c r="B6" t="s" s="7"><v></v></c>',
        f'<c r="C6" t="s" s="14"><v>132</v></c>',
        f'<c r="D6" t="s" s="7"><v></v></c>',
        f'<c r="E6" t="s" s="14"><v>133</v></c>',
        f'<c r="F6" t="s" s="7"><v></v></c>',
    ])

    # Row 8: 应用计划
    R_("8", [
        f'<c r="A8" t="s" s="13"><v>126</v></c>',
    ], ht=18)

    R_("9", [
        f'<c r="A9" t="s" s="14"><v>134</v></c>',
        f'<c r="B9" t="s" s="18"><v></v></c>',
    ], ht=40)

    R_("10", [
        f'<c r="A10" t="s" s="14"><v>135</v></c>',
        f'<c r="B10" t="s" s="18"><v></v></c>',
    ], ht=40)

    cols = '''<cols>
  <col min="1" max="1" width="16" customWidth="1"/>
  <col min="2" max="2" width="14" customWidth="1"/>
  <col min="3" max="3" width="14" customWidth="1"/>
  <col min="4" max="4" width="14" customWidth="1"/>
  <col min="5" max="5" width="14" customWidth="1"/>
  <col min="6" max="6" width="14" customWidth="1"/>
  <col min="7" max="7" width="14" customWidth="1"/>
  <col min="8" max="8" width="14" customWidth="1"/>
</cols>'''
    data = '<sheetData>\n' + '\n'.join(R.values()) + '\n</sheetData>'
    return f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
           xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"/></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  {cols}
  {data}
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''


def build_sheet10():
    """课程质量追踪表"""
    R = {}
    def R_(r, cells, ht=None):
        R[r] = row(r, cells, ht)

    # Row 1: Title
    R_("1", [
        f'<c r="A1" t="s" s="13"><v>136</v></c>',
    ], ht=22)

    # Row 2: Column headers
    R_("2", [
        f'<c r="A2" t="s" s="4"><v>140</v></c>',
        f'<c r="B2" t="s" s="4"><v>141</v></c>',
        f'<c r="C2" t="s" s="4"><v>142</v></c>',
        f'<c r="D2" t="s" s="4"><v>143</v></c>',
        f'<c r="E2" t="s" s="4"><v>144</v></c>',
        f'<c r="F2" t="s" s="4"><v>145</v></c>',
    ])

    # Rows 3-10: 追踪记录
    for i in range(3, 11):
        R_(str(i), [
            f'<c r="A{i}" t="s" s="1"><v></v></c>',
            f'<c r="B{i}" t="s" s="1"><v></v></c>',
            f'<c r="C{i}" t="s" s="18"><v></v></c>',
            f'<c r="D{i}" t="s" s="7"><v></v></c>',
            f'<c r="E{i}" t="s" s="18"><v></v></c>',
            f'<c r="F{i}" t="s" s="18"><v></v></c>',
        ], ht=32)

    cols = '''<cols>
  <col min="1" max="1" width="14" customWidth="1"/>
  <col min="2" max="2" width="14" customWidth="1"/>
  <col min="3" max="3" width="24" customWidth="1"/>
  <col min="4" max="4" width="14" customWidth="1"/>
  <col min="5" max="5" width="24" customWidth="1"/>
  <col min="6" max="6" width="24" customWidth="1"/>
</cols>'''
    data = '<sheetData>\n' + '\n'.join(R.values()) + '\n</sheetData>'
    return f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
           xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"/></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  {cols}
  {data}
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''


# ──────────────────────────────────────────────────────────────────────────────
# WORKBOOK ASSEMBLY
# ──────────────────────────────────────────────────────────────────────────────

def build_workbook():
    sheets_xml = [
        ("xl/worksheets/sheet1.xml",  build_sheet1()),
        ("xl/worksheets/sheet2.xml",  build_sheet2()),
        ("xl/worksheets/sheet3.xml",  build_sheet3()),
        ("xl/worksheets/sheet4.xml",  build_sheet4()),
        ("xl/worksheets/sheet5.xml",  build_sheet5()),
        ("xl/worksheets/sheet6.xml",  build_sheet6()),
        ("xl/worksheets/sheet7.xml",  build_sheet7()),
        ("xl/worksheets/sheet8.xml",  build_sheet8()),
        ("xl/worksheets/sheet9.xml",  build_sheet9()),
        ("xl/worksheets/sheet10.xml", build_sheet10()),
    ]

    sheet_names = [
        "四维检验表",
        "利益相关方矩阵",
        "造路五件套检查表",
        "导流边界图",
        "五步退役规划表",
        "护城河检查清单",
        "汇报开场检验器",
        "行动学习项目规划表",
        "学员自评表",
        "课程质量追踪表",
    ]

    # workbook.xml
    sheets_block = ""
    for i, name in enumerate(sheet_names, start=1):
        rid = f"rId{i}" if i <= 3 else f"rId{i+1}"
        sheets_block += f'  <sheet name="{name}" sheetId="{i}" r:id="{rid}"/>\n'

    workbook_xml = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
          xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheets>
{sheets_block}  </sheets>
  <calcPr calcMode="auto"/>
</workbook>'''

    # workbook.xml.rels
    rels_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
  <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml"/>
  <Relationship Id="rId4" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet2.xml"/>
  <Relationship Id="rId5" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet3.xml"/>
  <Relationship Id="rId6" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet4.xml"/>
  <Relationship Id="rId7" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet5.xml"/>
  <Relationship Id="rId8" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet6.xml"/>
  <Relationship Id="rId9" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet7.xml"/>
  <Relationship Id="rId10" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet8.xml"/>
  <Relationship Id="rId11" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet9.xml"/>
  <Relationship Id="rId12" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet10.xml"/>
</Relationships>'''

    # Content_Types.xml
    ct_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml"  ContentType="application/xml"/>
  <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
  <Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>
  <Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/>
  <Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet2.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet3.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet4.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet5.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet6.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet7.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet8.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet9.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet10.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
</Types>'''

    # _rels/.rels
    root_rels = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/>
</Relationships>'''

    # Write all files
    for path, content in sheets_xml:
        full = os.path.join(TEMPLATE_DIR, path)
        os.makedirs(os.path.dirname(full), exist_ok=True)
        with open(full, "w", encoding="utf-8") as f:
            f.write(content)

    with open(os.path.join(TEMPLATE_DIR, "xl/workbook.xml"), "w", encoding="utf-8") as f:
        f.write(workbook_xml)

    with open(os.path.join(TEMPLATE_DIR, "xl/_rels/workbook.xml.rels"), "w", encoding="utf-8") as f:
        f.write(rels_xml)

    with open(os.path.join(TEMPLATE_DIR, "[Content_Types].xml"), "w", encoding="utf-8") as f:
        f.write(ct_xml)

    with open(os.path.join(TEMPLATE_DIR, "_rels/.rels"), "w", encoding="utf-8") as f:
        f.write(root_rels)

    with open(os.path.join(TEMPLATE_DIR, "xl/sharedStrings.xml"), "w", encoding="utf-8") as f:
        f.write(build_shared_strings())

    with open(os.path.join(TEMPLATE_DIR, "xl/styles.xml"), "w", encoding="utf-8") as f:
        f.write(build_styles())

    print(f"Files written to {TEMPLATE_DIR}")


if __name__ == "__main__":
    build_workbook()
