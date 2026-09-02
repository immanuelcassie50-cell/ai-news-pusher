#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
TTT 课程工具表单汇总.xlsx — Complete XML Generator
5 sheets:
  1. 课程包总览 (Course Package Overview)
  2. 7张工具表单 (7 Tools Summary)
  3. 学员7项产出追踪 (Learner 7 Outputs Tracking)
  4. Kirkpatrick评估+4种检验 (Evaluation)
  5. 管理者30/60/90天观察 (Manager 30/60/90 Checklist)
"""

import os
import shutil
import zipfile
from pathlib import Path

WORK_DIR = Path("/tmp/xlsx_work_ttt")
TEMPLATE_DIR = Path("C:/Users/Administrator/.claude/skills/Excel表格处理/templates/minimal_xlsx")
OUTPUT_FILE = Path("D:/Downloads/井然-基本培训技术训练之专家型讲师TTT/完整课程包/06-全流程工具表单/Excel汇总/TTT课程工具表单汇总.xlsx")

# === Clean & copy template ===
if WORK_DIR.exists():
    shutil.rmtree(WORK_DIR)
shutil.copytree(TEMPLATE_DIR, WORK_DIR)


# === styles.xml ===
STYLES_XML = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <numFmts count="4">
    <numFmt numFmtId="164" formatCode="&quot;$&quot;#,##0;(&quot;$&quot;#,##0);&quot;-&quot;"/>
    <numFmt numFmtId="165" formatCode="0.0%"/>
    <numFmt numFmtId="166" formatCode="0.0x"/>
    <numFmt numFmtId="167" formatCode="#,##0"/>
  </numFmts>
  <fonts count="5">
    <font><sz val="11"/><name val="Calibri"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="000000FF"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="00000000"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="00008000"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="00000000"/><b/></font>
  </fonts>
  <fills count="3">
    <fill><patternFill patternType="none"/></fill>
    <fill><patternFill patternType="gray125"/></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="00FFFF00"/></patternFill></fill>
  </fills>
  <borders count="1">
    <border><left/><right/><top/><bottom/><diagonal/></border>
  </borders>
  <cellStyleXfs count="1">
    <xf numFmtId="0" fontId="0" fillId="0" borderId="0"/>
  </cellStyleXfs>
  <cellXfs count="13">
    <xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/>
    <xf numFmtId="0" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1"/>
    <xf numFmtId="0" fontId="2" fillId="0" borderId="0" xfId="0" applyFont="1"/>
    <xf numFmtId="0" fontId="3" fillId="0" borderId="0" xfId="0" applyFont="1"/>
    <xf numFmtId="0" fontId="4" fillId="0" borderId="0" xfId="0" applyFont="1" applyAlignment="1"><alignment horizontal="left" vertical="center" wrapText="1"/></xf>
    <xf numFmtId="164" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>
    <xf numFmtId="164" fontId="2" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>
    <xf numFmtId="165" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>
    <xf numFmtId="165" fontId="2" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>
    <xf numFmtId="167" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>
    <xf numFmtId="167" fontId="2" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>
    <xf numFmtId="1" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>
    <xf numFmtId="0" fontId="1" fillId="2" borderId="0" xfId="0" applyFont="1" applyFill="1"/>
  </cellXfs>
  <cellStyles count="1">
    <cellStyle name="Normal" xfId="0" builtinId="0"/>
  </cellStyles>
</styleSheet>'''

(WORK_DIR / "xl" / "styles.xml").write_text(STYLES_XML, encoding="utf-8")


# === Strings list ===
ALL_STRINGS = []
INDEX_MAP = {}

def idx(s):
    """Add a string, return its unique index"""
    if s not in INDEX_MAP:
        INDEX_MAP[s] = len(ALL_STRINGS)
        ALL_STRINGS.append(s)
    return INDEX_MAP[s]


# ============== Sheet 1: 课程包总览 ==============
S1_TITLE = "TTT 课程包总览（13 模块 / 41 文件）"
modules = [
    ("01-课程大纲", "课程大纲.md + HTML 课程图谱", 2, "已完成", 0.5, "10 节教学结构 + 行为化目标"),
    ("02-教学文档", "00-总览 + 01~07 七个部分（8 份）", 8, "已完成", 12.0, "金字塔→阶梯、3 种骨架、4 要素案例、5 步输出链"),
    ("03-学员手册", "学员手册.md（48KB / 9061 字）", 1, "已完成", 12.0, "学员全程携带的便签式学习手册"),
    ("04-讲师手册", "讲师手册.md（生成中）", 1, "生成中", 12.0, "讲师授课脚手架（话术/踩坑/应变/控场）"),
    ("05-授课PPT", "TTT-2天完整授课版.pptx（100-160 页）", 1, "生成中", 12.0, "可直接授课的 16:9 演示文稿"),
    ("06-全流程工具表单", "7 张工具卡 + Excel 汇总", 8, "已完成", 0.5, "7 张分步工具（场景卡/分析表/选骨架/提问/互动/检验/开场）"),
    ("07-全流程练习册", "空白版 + 答案解析版（25 道）", 2, "已完成", 0.5, "25 道练习 + 5 维答案解析"),
    ("08-评估工具包", "前测/后测/反应层问卷/行为层观察", 7, "已完成", 1.0, "Kirkpatrick 3 层评估 + 4 种课堂检验"),
    ("09-场景库", "6 行业场景库 + 总索引", 7, "已完成", 1.0, "6 行业换肤包（制造/销售/IT/HR/医疗/教育）"),
    ("10-成果Demo", "3 份完整教学方案 + 导读", 4, "已完成", 1.0, "可'反向使用'的高质量样本方案"),
    ("11-管理者工具包", "观察清单 + 复盘脚本 + 辅导对话", 6, "已完成", 0.5, "管理者可'批改作业'的工具"),
    ("12-混合学习课前包", "课前阅读 + 课前任务 + 课前自测", 3, "已完成", 0.5, "降低课堂压力、让课堂聚焦'练'"),
    ("00-课程包说明书", "00-课程包说明书.md", 1, "已完成", 0.1, "13 模块导览 + 使用流程"),
]

# Pre-register all strings to compute indices
pre_registered = [
    S1_TITLE, "#", "目录", "子目录 / 关键文件", "文件数", "状态", "覆盖时间（h）", "核心产出",
    "已完成", "生成中", "合计", "完成度", "通过率", "更新日期", "2026-06-14",
    "制作人", "TTT 课程包主控", "适用范围", "所有讲师 / 学员 / 管理者",
    "使用说明", "覆盖 13 个课程模块的资产清单、7 张工具表单、6 项学员产出、4 种检验方式、3 阶段管理者跟踪",
    "颜色：蓝=输入/可改，黑色=计算/不可改，绿色=跨表引用",
]
for s in pre_registered:
    idx(s)
for cat, sub, count, status, hours, output in modules:
    idx(cat)
    idx(sub)
    idx(status)
    idx(output)

# Build sheet 1 rows
s1_rows = []
s1_rows.append(f'<row r="1" ht="28" customHeight="1"><c r="A1" t="s" s="4"><v>{idx(S1_TITLE)}</v></c><c r="B1"/><c r="C1"/><c r="D1"/><c r="E1"/><c r="F1"/><c r="G1"/></row>')

# Header row
s1_rows.append(f'<row r="2" ht="22" customHeight="1">'
    f'<c r="A2" t="s" s="4"><v>{idx("#")}</v></c>'
    f'<c r="B2" t="s" s="4"><v>{idx("目录")}</v></c>'
    f'<c r="C2" t="s" s="4"><v>{idx("子目录 / 关键文件")}</v></c>'
    f'<c r="D2" t="s" s="4"><v>{idx("文件数")}</v></c>'
    f'<c r="E2" t="s" s="4"><v>{idx("状态")}</v></c>'
    f'<c r="F2" t="s" s="4"><v>{idx("覆盖时间（h）")}</v></c>'
    f'<c r="G2" t="s" s="4"><v>{idx("核心产出")}</v></c>'
    f'</row>')

# Data rows (3-15)
for i, (cat, sub, count, status, hours, output) in enumerate(modules, start=3):
    s1_rows.append(
        f'<row r="{i}">'
        f'<c r="A{i}" t="s" s="0"><v>{idx("#")}</v></c>'
        f'<c r="B{i}" t="s" s="0"><v>{idx(cat)}</v></c>'
        f'<c r="C{i}" t="s" s="0"><v>{idx(sub)}</v></c>'
        f'<c r="D{i}" s="9"><v>{count}</v></c>'
        f'<c r="E{i}" t="s" s="0"><v>{idx(status)}</v></c>'
        f'<c r="F{i}" s="7"><v>{hours}</v></c>'
        f'<c r="G{i}" t="s" s="0"><v>{idx(output)}</v></c>'
        f'</row>')

# Row 16: 合计
s1_rows.append(
    f'<row r="16" ht="22" customHeight="1">'
    f'<c r="A16" t="s" s="4"><v>{idx("合计")}</v></c>'
    f'<c r="B16"/><c r="C16"/>'
    f'<c r="D16" s="10"><f>SUM(D3:D15)</f><v></v></c>'
    f'<c r="E16"/>'
    f'<c r="F16" s="8"><f>SUM(F3:F15)</f><v></v></c>'
    f'<c r="G16" t="s" s="0"><v>{idx("完成度")}</v></c>'
    f'</row>')

# Row 17: 完成度
s1_rows.append(
    f'<row r="17">'
    f'<c r="A17" t="s" s="0"><v>{idx("完成度")}</v></c>'
    f'<c r="B17"/><c r="C17"/>'
    f'<c r="D17" s="8"><f>COUNTIF(E3:E15,"已完成")/COUNTA(E3:E15)</f><v></v></c>'
    f'<c r="E17" t="s" s="0"><v>{idx("通过率")}</v></c>'
    f'<c r="F17"/><c r="G17"/>'
    f'</row>')

# Row 19-23: Meta info
s1_rows.append(f'<row r="19"><c r="A19" t="s" s="4"><v>{idx("更新日期")}</v></c><c r="B19" t="s" s="1"><v>{idx("2026-06-14")}</v></c></row>')
s1_rows.append(f'<row r="20"><c r="A20" t="s" s="4"><v>{idx("制作人")}</v></c><c r="B20" t="s" s="1"><v>{idx("TTT 课程包主控")}</v></c></row>')
s1_rows.append(f'<row r="21"><c r="A21" t="s" s="4"><v>{idx("适用范围")}</v></c><c r="B21" t="s" s="1"><v>{idx("所有讲师 / 学员 / 管理者")}</v></c></row>')
s1_rows.append(f'<row r="22"><c r="A22" t="s" s="4"><v>{idx("使用说明")}</v></c><c r="B22" t="s" s="1"><v>{idx("覆盖 13 个课程模块的资产清单、7 张工具表单、6 项学员产出、4 种检验方式、3 阶段管理者跟踪")}</v></c></row>')
s1_rows.append(f'<row r="23"><c r="A23" t="s" s="4"><v>{idx("颜色：蓝=输入/可改，黑色=计算/不可改，绿色=跨表引用")}</v></c><c r="B23"/></row>')

SHEET1_XML = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView tabSelected="1" workbookViewId="0">
      <pane ySplit="2" topLeftCell="A3" activePane="bottomLeft" state="frozen"/>
    </sheetView>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols>
    <col min="1" max="1" width="5" customWidth="1"/>
    <col min="2" max="2" width="22" customWidth="1"/>
    <col min="3" max="3" width="42" customWidth="1"/>
    <col min="4" max="4" width="10" customWidth="1"/>
    <col min="5" max="5" width="10" customWidth="1"/>
    <col min="6" max="6" width="14" customWidth="1"/>
    <col min="7" max="7" width="55" customWidth="1"/>
  </cols>
  <sheetData>
    {chr(10).join(s1_rows)}
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''


# ============== Sheet 2: 7 张工具表单 ==============
S2_TITLE = "TTT 7 张工具表单对照"
tools = [
    ("工具1 场景卡", "工具1-场景卡.md",
     "把模糊的'我准备讲一门课'变成可启动的'针对谁讲什么'",
     "备课 T-7 天 / 接到任务时",
     "1 张场景卡（学员画像+目标+3 难点）",
     "第一部分"),
    ("工具2 学员分析表", "工具2-学员分析表.md",
     "5 大维度摸底学员（岗位/心理/经验/学习偏好/痛点）",
     "备课 T-3 天 / 课程设计开始前",
     "1 张学员分析表（每维 3-5 行）",
     "第一部分"),
    ("工具3 选骨架决策卡", "工具3-选骨架决策卡.md",
     "判断课程用流程/分类/原理/混合哪种骨架",
     "模块框架草图阶段",
     "1 个骨架决策（流程/分类/原理/混合）+ 理由",
     "第二部分"),
    ("工具4 提问设计工具卡", "工具4-提问设计工具卡.md",
     "把每个模块的提问从'大家听懂吗'改成 L1-L5 层进",
     "模块内容设计时",
     "每模块 1-3 个层进式提问（封闭→开放→层进）",
     "第四部分"),
    ("工具5 互动方法工具箱卡牌", "工具5-互动方法工具箱卡牌.md",
     "7 种互动方法（提问/讨论/演练/复演/案例/风暴/互评）",
     "每个模块配互动时",
     "每模块 1 个互动方法 + 30 秒可执行说明",
     "第四部分"),
    ("工具6 课堂检验设计卡", "工具6-课堂检验设计卡.md",
     "给每个模块配 1 个可观察/可量化/可补救/可执行的检验",
     "模块教学方案完成时",
     "每模块 1 行检验清单（点+方式+标准+补救）",
     "第五部分"),
    ("工具7 30秒开场稿写作模板", "工具7-30秒开场稿写作模板.md",
     "把开场从'大家好'改成 30 秒抓人钩子（案例/痛点/反差/数据/故事）",
     "课程方案定稿时 / 上台前 24 小时",
     "1 段 30 秒开场稿（含停顿+重音标注）",
     "第六部分"),
]

# Pre-register sheet2 strings
s2_pre = [S2_TITLE, "#", "工具名", "文件名", "解决什么问题", "何时使用", "输出物", "对应第几部分",
          "设计原则：7 步走完，2-3 次后从'绞尽脑汁 8 小时'变成'按表走 2 小时'"]
for s in s2_pre:
    idx(s)
for t in tools:
    for s in t:
        idx(s)

s2_rows = []
s2_rows.append(f'<row r="1" ht="28" customHeight="1"><c r="A1" t="s" s="4"><v>{idx(S2_TITLE)}</v></c><c r="B1"/><c r="C1"/><c r="D1"/><c r="E1"/><c r="F1"/><c r="G1"/></row>')

# Header row 2
s2_rows.append(
    f'<row r="2" ht="22" customHeight="1">'
    f'<c r="A2" t="s" s="4"><v>{idx("#")}</v></c>'
    f'<c r="B2" t="s" s="4"><v>{idx("工具名")}</v></c>'
    f'<c r="C2" t="s" s="4"><v>{idx("文件名")}</v></c>'
    f'<c r="D2" t="s" s="4"><v>{idx("解决什么问题")}</v></c>'
    f'<c r="E2" t="s" s="4"><v>{idx("何时使用")}</v></c>'
    f'<c r="F2" t="s" s="4"><v>{idx("输出物")}</v></c>'
    f'<c r="G2" t="s" s="4"><v>{idx("对应第几部分")}</v></c>'
    f'</row>')

# Data rows 3-9
for i, tool in enumerate(tools, start=3):
    name, fname, prob, when, out, part = tool
    s2_rows.append(
        f'<row r="{i}" ht="60" customHeight="1">'
        f'<c r="A{i}" t="s" s="0"><v>{idx("#")}</v></c>'
        f'<c r="B{i}" t="s" s="0"><v>{idx(name)}</v></c>'
        f'<c r="C{i}" t="s" s="0"><v>{idx(fname)}</v></c>'
        f'<c r="D{i}" t="s" s="0"><v>{idx(prob)}</v></c>'
        f'<c r="E{i}" t="s" s="0"><v>{idx(when)}</v></c>'
        f'<c r="F{i}" t="s" s="0"><v>{idx(out)}</v></c>'
        f'<c r="G{i}" t="s" s="0"><v>{idx(part)}</v></c>'
        f'</row>')

# Row 11: 设计原则
s2_rows.append(f'<row r="11" ht="40" customHeight="1"><c r="A11" t="s" s="4"><v>{idx("设计原则：7 步走完，2-3 次后从\'绞尽脑汁 8 小时\'变成\'按表走 2 小时\'")}</v></c><c r="B11"/><c r="C11"/><c r="D11"/><c r="E11"/><c r="F11"/><c r="G11"/></row>')

SHEET2_XML = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView workbookViewId="0">
      <pane ySplit="2" topLeftCell="A3" activePane="bottomLeft" state="frozen"/>
    </sheetView>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols>
    <col min="1" max="1" width="5" customWidth="1"/>
    <col min="2" max="2" width="28" customWidth="1"/>
    <col min="3" max="3" width="32" customWidth="1"/>
    <col min="4" max="4" width="50" customWidth="1"/>
    <col min="5" max="5" width="32" customWidth="1"/>
    <col min="6" max="6" width="40" customWidth="1"/>
    <col min="7" max="7" width="14" customWidth="1"/>
  </cols>
  <sheetData>
    {chr(10).join(s2_rows)}
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''


# ============== Sheet 3: 学员 7 项产出追踪 ==============
S3_TITLE = "学员 7 项核心产出追踪"
outputs = [
    ("1. 学员分析表（岗位/心理/经验）", "第一部分", "第一级（识别）", 20, "金字塔→阶梯的具象化产物"),
    ("2. 模块框架图（3-5 个模块）", "第二部分", "第二级（应用）", 30, "选骨架+行为目标+模块化设计"),
    ("3. 案例化知识点（4 要素至少 1 个）", "第三部分", "第二级（应用）", 30, "类比+案例+可视化"),
    ("4. 互动设计方案（每模块 1 个互动）", "第四部分", "第二级（应用）", 30, "7 种互动工具箱选 1"),
    ("5. 课堂检验清单（每模块 1 个检验）", "第五部分", "第二级（应用）", 30, "4 种检验方式选 1"),
    ("6. 30 秒开场稿", "第六部分", "第三级（综合）", 15, "5 种钩子选 1"),
    ("7. 完整模块教学方案（6 项整合）", "第七部分", "第三级（综合）", 20, "组装 + 演练（讲师带走的核心资产）"),
]

# Pre-register sheet3 strings
s3_pre = [S3_TITLE, "#", "产出项", "来自第几部分", "难度级别", "预计用时（min）", "完成状态", "备注",
          "未开始", "进行中", "已完成", "待复盘",
          "6 项产出 → 第 7 项整合：顺序不可跳——前 6 项是第 7 项的'零件'，缺任何一项第 7 项都不完整"]
for s in s3_pre:
    idx(s)
for o in outputs:
    for s in o:
        if isinstance(s, str):
            idx(s)

s3_rows = []
s3_rows.append(f'<row r="1" ht="28" customHeight="1"><c r="A1" t="s" s="4"><v>{idx(S3_TITLE)}</v></c><c r="B1"/><c r="C1"/><c r="D1"/><c r="E1"/><c r="F1"/><c r="G1"/></row>')

s3_rows.append(
    f'<row r="2" ht="22" customHeight="1">'
    f'<c r="A2" t="s" s="4"><v>{idx("#")}</v></c>'
    f'<c r="B2" t="s" s="4"><v>{idx("产出项")}</v></c>'
    f'<c r="C2" t="s" s="4"><v>{idx("来自第几部分")}</v></c>'
    f'<c r="D2" t="s" s="4"><v>{idx("难度级别")}</v></c>'
    f'<c r="E2" t="s" s="4"><v>{idx("预计用时（min）")}</v></c>'
    f'<c r="F2" t="s" s="4"><v>{idx("完成状态")}</v></c>'
    f'<c r="G2" t="s" s="4"><v>{idx("备注")}</v></c>'
    f'</row>')

# Data rows 3-9
for i, (name, part, diff, time, note) in enumerate(outputs, start=3):
    s3_rows.append(
        f'<row r="{i}">'
        f'<c r="A{i}" t="s" s="0"><v>{idx("#")}</v></c>'
        f'<c r="B{i}" t="s" s="0"><v>{idx(name)}</v></c>'
        f'<c r="C{i}" t="s" s="0"><v>{idx(part)}</v></c>'
        f'<c r="D{i}" t="s" s="0"><v>{idx(diff)}</v></c>'
        f'<c r="E{i}" s="9"><v>{time}</v></c>'
        f'<c r="F{i}" t="s" s="0"><v>{idx("未开始")}</v></c>'
        f'<c r="G{i}" t="s" s="0"><v>{idx(note)}</v></c>'
        f'</row>')

# Row 10: 合计用时
s3_rows.append(
    f'<row r="10" ht="22" customHeight="1">'
    f'<c r="A10" t="s" s="4"><v>{idx("合计")}</v></c>'
    f'<c r="B10"/><c r="C10"/><c r="D10"/>'
    f'<c r="E10" s="10"><f>SUM(E3:E9)</f><v></v></c>'
    f'<c r="F10" t="s" s="0"><v>{idx("完成度")}</v></c>'
    f'<c r="G10"/>'
    f'</row>')

# Row 12: 跨产出关联说明
s3_rows.append(f'<row r="12" ht="40" customHeight="1"><c r="A12" t="s" s="4"><v>{idx("6 项产出 → 第 7 项整合：顺序不可跳——前 6 项是第 7 项的\'零件\'，缺任何一项第 7 项都不完整")}</v></c><c r="B12"/><c r="C12"/><c r="D12"/><c r="E12"/><c r="F12"/><c r="G12"/></row>')

SHEET3_XML = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView workbookViewId="0">
      <pane ySplit="2" topLeftCell="A3" activePane="bottomLeft" state="frozen"/>
    </sheetView>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols>
    <col min="1" max="1" width="5" customWidth="1"/>
    <col min="2" max="2" width="38" customWidth="1"/>
    <col min="3" max="3" width="14" customWidth="1"/>
    <col min="4" max="4" width="18" customWidth="1"/>
    <col min="5" max="5" width="16" customWidth="1"/>
    <col min="6" max="6" width="12" customWidth="1"/>
    <col min="7" max="7" width="40" customWidth="1"/>
  </cols>
  <sheetData>
    {chr(10).join(s3_rows)}
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''


# ============== Sheet 4: Kirkpatrick 评估 + 4 种检验 ==============
S4_TITLE = "Kirkpatrick 3 层评估 + 4 种课堂检验"
kirk = [
    ("反应层", "学员对培训的感受", "喜不喜欢 / 满不满意", "学员", "课程结束时",
     "满意度问卷 5 分制 + 1 个开放式问题（'最有用的一招'）"),
    ("学习层", "学员学到了什么", "当场学会了吗", "学员 + 讲师", "课堂内即时",
     "4 种课堂检验方式（复述/操作/判断/提问）"),
    ("行为层", "学员回去之后做没做", "回去用了吗 / 做得对吗", "学员上级 + 学员自己", "训后 30/60/90 天",
     "30/60/90 天观察清单 + 上级评价"),
    ("结果层（本课不要求）", "对业务有什么影响", "业绩/质量/效率/安全", "项目方/HR", "训后 90+ 天",
     "6 个月事故率/3 个月业绩对比"),
]

methods = [
    ("复述", "学员重新讲一遍刚学的内容", "记忆 / 流程", "★★", "模块结束",
     "口述点检 8 步顺序 / 口述防护门 3 步骤"),
    ("操作", "学员实际做一遍任务", "操作 / 技能", "★★★", "模块结束",
     "现场复演点检 / 演练防护门检查 / 系统上机操作"),
    ("判断", "给学员情境题判断对错", "应用 / 判断", "★★", "模块进行中",
     "看图判断油位是否合规 / 情境题'老员工不戴防护眼镜对不对'"),
    ("提问", "学员向讲师/同伴提问", "理解 / 反思", "★", "任何时候",
     "学员提出'如果防护门报警但能启动怎么办'等具体应用问题"),
]

# Pre-register sheet4 strings
s4_pre = [S4_TITLE, "#", "层级 / 方式", "评估什么 / 一句话", "关键问题", "谁来评估", "什么时候", "TTT 课程对应做法",
          "第一部分：Kirkpatrick 3 层评估（本课程专注 L1+L2，L3 课后跟踪）",
          "第二部分：4 种课堂检验方式（每模块必选 1 种）",
          "方式", "适合检验", "操作难度", "适用阶段",
          "⚠ 关键：反应层高 ≠ 学习层高；学习层高 ≠ 行为层高——每层都要检验，不能只检一层"]
for s in s4_pre:
    idx(s)
for r in kirk:
    for s in r:
        idx(s)
for m in methods:
    for s in m:
        if isinstance(s, str):
            idx(s)

s4_rows = []
s4_rows.append(f'<row r="1" ht="28" customHeight="1"><c r="A1" t="s" s="4"><v>{idx(S4_TITLE)}</v></c><c r="B1"/><c r="C1"/><c r="D1"/><c r="E1"/><c r="F1"/><c r="G1"/></row>')

# Section 1: Kirkpatrick (row 3)
s4_rows.append(f'<row r="3" ht="24" customHeight="1"><c r="A3" t="s" s="4"><v>{idx("第一部分：Kirkpatrick 3 层评估（本课程专注 L1+L2，L3 课后跟踪）")}</v></c><c r="B3"/><c r="C3"/><c r="D3"/><c r="E3"/><c r="F3"/><c r="G3"/></row>')

# Header for section 1 (row 4)
s4_rows.append(
    f'<row r="4" ht="22" customHeight="1">'
    f'<c r="A4" t="s" s="4"><v>{idx("#")}</v></c>'
    f'<c r="B4" t="s" s="4"><v>{idx("层级 / 方式")}</v></c>'
    f'<c r="C4" t="s" s="4"><v>{idx("评估什么 / 一句话")}</v></c>'
    f'<c r="D4" t="s" s="4"><v>{idx("关键问题")}</v></c>'
    f'<c r="E4" t="s" s="4"><v>{idx("谁来评估")}</v></c>'
    f'<c r="F4" t="s" s="4"><v>{idx("什么时候")}</v></c>'
    f'<c r="G4" t="s" s="4"><v>{idx("TTT 课程对应做法")}</v></c>'
    f'</row>')

# Kirkpatrick rows 5-8
for i, (lvl, what, ques, who, when, prac) in enumerate(kirk, start=5):
    s4_rows.append(
        f'<row r="{i}" ht="50" customHeight="1">'
        f'<c r="A{i}" t="s" s="0"><v>{idx("#")}</v></c>'
        f'<c r="B{i}" t="s" s="0"><v>{idx(lvl)}</v></c>'
        f'<c r="C{i}" t="s" s="0"><v>{idx(what)}</v></c>'
        f'<c r="D{i}" t="s" s="0"><v>{idx(ques)}</v></c>'
        f'<c r="E{i}" t="s" s="0"><v>{idx(who)}</v></c>'
        f'<c r="F{i}" t="s" s="0"><v>{idx(when)}</v></c>'
        f'<c r="G{i}" t="s" s="0"><v>{idx(prac)}</v></c>'
        f'</row>')

# Section 2: 4 检验方式 (row 10)
s4_rows.append(f'<row r="10" ht="24" customHeight="1"><c r="A10" t="s" s="4"><v>{idx("第二部分：4 种课堂检验方式（每模块必选 1 种）")}</v></c><c r="B10"/><c r="C10"/><c r="D10"/><c r="E10"/><c r="F10"/><c r="G10"/></row>')

# Header for section 2 (row 11)
s4_rows.append(
    f'<row r="11" ht="22" customHeight="1">'
    f'<c r="A11" t="s" s="4"><v>{idx("#")}</v></c>'
    f'<c r="B11" t="s" s="4"><v>{idx("方式")}</v></c>'
    f'<c r="C11" t="s" s="4"><v>{idx("评估什么 / 一句话")}</v></c>'
    f'<c r="D11" t="s" s="4"><v>{idx("适合检验")}</v></c>'
    f'<c r="E11" t="s" s="4"><v>{idx("操作难度")}</v></c>'
    f'<c r="F11" t="s" s="4"><v>{idx("适用阶段")}</v></c>'
    f'<c r="G11" t="s" s="4"><v>{idx("TTT 课程对应做法")}</v></c>'
    f'</row>')

# Methods rows 12-15
for i, (m, what, fit, diff, stage, prac) in enumerate(methods, start=12):
    s4_rows.append(
        f'<row r="{i}" ht="40" customHeight="1">'
        f'<c r="A{i}" t="s" s="0"><v>{idx("#")}</v></c>'
        f'<c r="B{i}" t="s" s="0"><v>{idx(m)}</v></c>'
        f'<c r="C{i}" t="s" s="0"><v>{idx(what)}</v></c>'
        f'<c r="D{i}" t="s" s="0"><v>{idx(fit)}</v></c>'
        f'<c r="E{i}" t="s" s="0"><v>{idx(diff)}</v></c>'
        f'<c r="F{i}" t="s" s="0"><v>{idx(stage)}</v></c>'
        f'<c r="G{i}" t="s" s="0"><v>{idx(prac)}</v></c>'
        f'</row>')

# Row 17: 关键提醒
s4_rows.append(f'<row r="17" ht="40" customHeight="1"><c r="A17" t="s" s="4"><v>{idx("⚠ 关键：反应层高 ≠ 学习层高；学习层高 ≠ 行为层高——每层都要检验，不能只检一层")}</v></c><c r="B17"/><c r="C17"/><c r="D17"/><c r="E17"/><c r="F17"/><c r="G17"/></row>')

SHEET4_XML = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView workbookViewId="0">
      <pane ySplit="4" topLeftCell="A5" activePane="bottomLeft" state="frozen"/>
    </sheetView>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols>
    <col min="1" max="1" width="5" customWidth="1"/>
    <col min="2" max="2" width="22" customWidth="1"/>
    <col min="3" max="3" width="32" customWidth="1"/>
    <col min="4" max="4" width="22" customWidth="1"/>
    <col min="5" max="5" width="22" customWidth="1"/>
    <col min="6" max="6" width="18" customWidth="1"/>
    <col min="7" max="7" width="50" customWidth="1"/>
  </cols>
  <sheetData>
    {chr(10).join(s4_rows)}
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''


# ============== Sheet 5: 管理者 30/60/90 天 ==============
S5_TITLE = "管理者 30/60/90 天观察清单"
phases = [
    ("T+30（第一月）", "训后 30 天",
     "学员是否用方案讲过 1 次真课",
     "学员自报 + 课堂观察（10 分钟走查）",
     "≥80% 学员完成 1 次真课 + ≥30% 用了新方法",
     "未完成者：助教 1v1 复盘 1 次；管理者看录像"),
    ("T+60（第二月）", "训后 60 天",
     "新方法是否进入'默认选项'（不是偶尔用）",
     "学员上级评价 + 学员自评",
     "≥50% 学员把新方法列为'标准做法'",
     "未达 50%：小组工作坊（3-5 人共创+互评）"),
    ("T+90（第三月）", "训后 90 天",
     "业务指标是否改善（事故率/满意度/业绩）",
     "业务数据 + 学员/上级访谈",
     "≥1 项业务指标出现可量化改善",
     "改善明显：纳入年度必修；不明显：复盘方法本身"),
]

# Pre-register sheet5 strings
s5_pre = [S5_TITLE, "#", "阶段", "时间点", "观察重点", "数据来源", "判断标准", "干预建议",
          "（汇总）", "3 阶段综合", "T+30/60/90", "覆盖训后 3 个月完整周期",
          "1 张跟踪表 + 月度回顾", "3 阶段全部覆盖 + 1 项业务指标改善", "管理者按月跟踪 + 季度复盘",
          "⚠ 关键：'30/60/90'是硬节奏——错过 T+30 这一个观察点，后面就追不回来了"]
for s in s5_pre:
    idx(s)
for p in phases:
    for s in p:
        if isinstance(s, str):
            idx(s)

s5_rows = []
s5_rows.append(f'<row r="1" ht="28" customHeight="1"><c r="A1" t="s" s="4"><v>{idx(S5_TITLE)}</v></c><c r="B1"/><c r="C1"/><c r="D1"/><c r="E1"/><c r="F1"/><c r="G1"/></row>')

s5_rows.append(
    f'<row r="2" ht="22" customHeight="1">'
    f'<c r="A2" t="s" s="4"><v>{idx("#")}</v></c>'
    f'<c r="B2" t="s" s="4"><v>{idx("阶段")}</v></c>'
    f'<c r="C2" t="s" s="4"><v>{idx("时间点")}</v></c>'
    f'<c r="D2" t="s" s="4"><v>{idx("观察重点")}</v></c>'
    f'<c r="E2" t="s" s="4"><v>{idx("数据来源")}</v></c>'
    f'<c r="F2" t="s" s="4"><v>{idx("判断标准")}</v></c>'
    f'<c r="G2" t="s" s="4"><v>{idx("干预建议")}</v></c>'
    f'</row>')

# Data rows 3-5
for i, (phase, time, focus, src, crit, act) in enumerate(phases, start=3):
    s5_rows.append(
        f'<row r="{i}" ht="60" customHeight="1">'
        f'<c r="A{i}" t="s" s="0"><v>{idx("#")}</v></c>'
        f'<c r="B{i}" t="s" s="0"><v>{idx(phase)}</v></c>'
        f'<c r="C{i}" t="s" s="0"><v>{idx(time)}</v></c>'
        f'<c r="D{i}" t="s" s="0"><v>{idx(focus)}</v></c>'
        f'<c r="E{i}" t="s" s="0"><v>{idx(src)}</v></c>'
        f'<c r="F{i}" t="s" s="0"><v>{idx(crit)}</v></c>'
        f'<c r="G{i}" t="s" s="0"><v>{idx(act)}</v></c>'
        f'</row>')

# Row 6: 汇总
s5_rows.append(
    f'<row r="6" ht="60" customHeight="1">'
    f'<c r="A6" t="s" s="0"><v>{idx("（汇总）")}</v></c>'
    f'<c r="B6" t="s" s="0"><v>{idx("3 阶段综合")}</v></c>'
    f'<c r="C6" t="s" s="0"><v>{idx("T+30/60/90")}</v></c>'
    f'<c r="D6" t="s" s="0"><v>{idx("覆盖训后 3 个月完整周期")}</v></c>'
    f'<c r="E6" t="s" s="0"><v>{idx("1 张跟踪表 + 月度回顾")}</v></c>'
    f'<c r="F6" t="s" s="0"><v>{idx("3 阶段全部覆盖 + 1 项业务指标改善")}</v></c>'
    f'<c r="G6" t="s" s="0"><v>{idx("管理者按月跟踪 + 季度复盘")}</v></c>'
    f'</row>')

# Row 8: 关键提醒
s5_rows.append(f'<row r="8" ht="40" customHeight="1"><c r="A8" t="s" s="4"><v>{idx("⚠ 关键：\'30/60/90\'是硬节奏——错过 T+30 这一个观察点，后面就追不回来了")}</v></c><c r="B8"/><c r="C8"/><c r="D8"/><c r="E8"/><c r="F8"/><c r="G8"/></row>')

SHEET5_XML = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView workbookViewId="0">
      <pane ySplit="2" topLeftCell="A3" activePane="bottomLeft" state="frozen"/>
    </sheetView>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols>
    <col min="1" max="1" width="5" customWidth="1"/>
    <col min="2" max="2" width="22" customWidth="1"/>
    <col min="3" max="3" width="20" customWidth="1"/>
    <col min="4" max="4" width="42" customWidth="1"/>
    <col min="5" max="5" width="38" customWidth="1"/>
    <col min="6" max="6" width="42" customWidth="1"/>
    <col min="7" max="7" width="50" customWidth="1"/>
  </cols>
  <sheetData>
    {chr(10).join(s5_rows)}
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''


# === Write all sheet XMLs ===
(WORK_DIR / "xl" / "worksheets" / "sheet1.xml").write_text(SHEET1_XML, encoding="utf-8")
(WORK_DIR / "xl" / "worksheets" / "sheet2.xml").write_text(SHEET2_XML, encoding="utf-8")
(WORK_DIR / "xl" / "worksheets" / "sheet3.xml").write_text(SHEET3_XML, encoding="utf-8")
(WORK_DIR / "xl" / "worksheets" / "sheet4.xml").write_text(SHEET4_XML, encoding="utf-8")
(WORK_DIR / "xl" / "worksheets" / "sheet5.xml").write_text(SHEET5_XML, encoding="utf-8")

# === Update workbook.xml ===
WORKBOOK_XML = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <fileVersion appName="xl" lastEdited="7" lowestEdited="7"/>
  <workbookPr defaultThemeVersion="166925"/>
  <bookViews>
    <workbookView xWindow="0" yWindow="0" windowWidth="20140" windowHeight="10960"/>
  </bookViews>
  <sheets>
    <sheet name="课程包总览" sheetId="1" r:id="rId1"/>
    <sheet name="7张工具表单" sheetId="2" r:id="rId4"/>
    <sheet name="学员7项产出" sheetId="3" r:id="rId5"/>
    <sheet name="评估与检验" sheetId="4" r:id="rId6"/>
    <sheet name="管理者观察" sheetId="5" r:id="rId7"/>
  </sheets>
  <calcPr calcId="191029"/>
</workbook>'''
(WORK_DIR / "xl" / "workbook.xml").write_text(WORKBOOK_XML, encoding="utf-8")

# === Update workbook.xml.rels ===
WORKBOOK_RELS = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
  <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml"/>
  <Relationship Id="rId4" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet2.xml"/>
  <Relationship Id="rId5" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet3.xml"/>
  <Relationship Id="rId6" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet4.xml"/>
  <Relationship Id="rId7" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet5.xml"/>
</Relationships>'''
(WORK_DIR / "xl" / "_rels" / "workbook.xml.rels").write_text(WORKBOOK_RELS, encoding="utf-8")

# === Update [Content_Types].xml ===
CONTENT_TYPES = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
  <Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet2.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet3.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet4.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet5.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>
  <Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/>
</Types>'''
(WORK_DIR / "[Content_Types].xml").write_text(CONTENT_TYPES, encoding="utf-8")

# === Build sharedStrings.xml ===
ss_lines = ['<?xml version="1.0" encoding="UTF-8" standalone="yes"?>',
            f'<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="{len(ALL_STRINGS)}" uniqueCount="{len(ALL_STRINGS)}">']
for s in ALL_STRINGS:
    s_esc = s.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")
    ss_lines.append(f'<si><t xml:space="preserve">{s_esc}</t></si>')
ss_lines.append('</sst>')
(WORK_DIR / "xl" / "sharedStrings.xml").write_text("\n".join(ss_lines), encoding="utf-8")


# === Pack the xlsx ===
OUTPUT_FILE.parent.mkdir(parents=True, exist_ok=True)
if OUTPUT_FILE.exists():
    OUTPUT_FILE.unlink()

with zipfile.ZipFile(str(OUTPUT_FILE), "w", compression=zipfile.ZIP_DEFLATED) as zf:
    for root, dirs, files in os.walk(WORK_DIR):
        for f in files:
            full = Path(root) / f
            rel = full.relative_to(WORK_DIR)
            zf.write(str(full), str(rel).replace("\\", "/"))

print(f"Packed: {OUTPUT_FILE}")
print(f"   Size: {OUTPUT_FILE.stat().st_size:,} bytes")
print(f"   Total unique strings: {len(ALL_STRINGS)}")
print(f"   Sheets: 5")
