"""
Build 01_下次面谈准备清单_空白版.xlsx
Based on F10 form, 4 areas + accountability partner + 30-day review
"""
import os
import shutil
import zipfile
from pathlib import Path

WORK = Path("D:/CC/temp/excel_build/work_01")
TEMPLATE = Path("C:/Users/Administrator/.claude/skills/Excel表格处理/templates/minimal_xlsx")
OUT = Path("D:/2026年课程/竞越/绩效管理和绩效面谈：通过绩效面谈让员工更加胜任/完整课程包/13_配套Excel表单/01_下次面谈准备清单_空白版.xlsx")

# Reset work dir
if WORK.exists():
    shutil.rmtree(WORK)
shutil.copytree(TEMPLATE, WORK)

# Build shared strings
SHARED_STRINGS = [
    # Instructions sheet (0-19)
    "使用说明", "F10 下次面谈准备清单 - 空白版",
    "金句", "面谈的真正准备，不在会议室里——在会议室外的清单上。",
    "使用时机", "课程结束当天填写；或每次面谈前1周填写。这是『最重要的25分钟产出』。",
    "使用步骤", "锁定一名具体的分析对象（员工代号，不写真名）→ 填事实与归因 → 预估难点 → 规划发展对话 → 四步预演 → 配问责伙伴 + 30天承诺",
    "配套工具", "F1 识别问题 / F2 自检 / F3 四步法 / F4 归因问题 / F5 四原则 / F6 五类场景 / F7 启动问题 / F8 双轨评估 / F9 缺口判断",
    "填写规范", "填空区请用蓝色字体填写；备注/反思区用黑色字体；下拉选项请从列表中选择。",
    "打印建议", "A4 双面打印；建议打印 2-3 份预留给不同员工；30天后再翻一次。",
    "保存与回看", "完成本表后请另存为『员工代号_面谈日期』；30 天后打开本表做差距回顾。",
    "Sheet 说明", "本 Excel 含 6 个 Sheet：使用说明 / 面谈对象信息 / 第一区事实与归因 / 第二区预估难点 / 第三区发展对话 / 第四区四步预演 / 问责伙伴与30天承诺",
    "重要提醒", "本表是『最重要的25分钟产出』——不要在课程结尾赶着填完。事实和归因没填好，后面三区都白填。",
    # 面谈对象信息 (20-29)
    "面谈对象信息", "员工代号", "面谈预计时间", "面谈地点", "提前通知员工了？",
    "是", "否", "今天就通知", "考核周期", "岗位",
    # 第一区 (30-69)
    "第一区：事实与归因准备", "用 5-10 分钟完成。没填完不要开始面谈。",
    "事实1（最重要的那个）", "时间/情境", "具体行为", "结果/影响",
    "这个事实的归因，我的判断是", "归因是否清晰？", "清晰（可以直接进入第三步分析缺口）",
    "模糊（需要在面谈第二步探寻归因时共同探索）", "如果模糊，我准备用 F4 哪组问题来探寻归因",
    "第1组：关于判断", "第2组：关于过程", "第3组：关于AI的参与", "第4组：关于改进",
    "我准备的具体问题", "事实2（如有）", "事实3（如有，备选）",
    "归因判断", "是否需要探寻", "不需要", "需要，问", "（备选——根据面谈时长决定是否展开）",
    # 第二区 (70-99)
    "第二区：预估难点与准备", "用 5 分钟。没填完不要开始面谈。",
    "这场面谈里，我预计最难的时刻是", "难点的类型（多选）",
    "员工可能不接受评估结果", "员工可能情绪激动", "我需要说一件我一直在回避的事",
    "AI 时代的五类特有场景之___类型（A/B/C/D/E）", "员工可能沉默不语", "员工可能挑战我『你自己呢』",
    "员工可能当场辞职", "其他", "我的应对准备（参考 F5 四原则 + F6 五类场景）",
    "开场白（第一句话）", "关键原则（正面/全面/情面/事面）", "备用话术（如果员工反驳）",
    "如果遇到最坏情况（完全对抗或完全沉默），我的处理方式",
    # 第三区 (100-139)
    "第三区：发展对话规划", "用 5 分钟。重点是『让员工带走一个有方向感的感受』，不是行动清单。",
    "这个员工的双轨状态（参 F8）", "AI 协作力", "不足", "够用", "较强",
    "人类深度", "当前更紧迫的发展轨道",
    "AI 协作力（理由）", "人类深度（理由）", "双轨（先发展___轨，理由）",
    "这次发展对话，我最想达到的一个结果是", "我打算用的启动问题（参 F7 三选一）",
    "启动一（通用）：这个周期结束，如果让你自己来说，你最满意的成长是什么？",
    "启动二（AI 时代）：在你用AI工具最多的那类工作里，你觉得自己做了什么？",
    "启动三（具体化）：如果这个周期有一件事让你感觉『我在成长』，那会是什么样的一件事？",
    "为什么选这个", "我预计员工可能的回应方向，以及我的引导准备",
    "回应 A（猜）", "我的引导", "回应 B（猜）", "回应 C（猜）",
    "这次发展面谈，希望员工带走的一个方向感", "不是行动清单，是一个有方向感的感受。",
    # 第四区 (140-169)
    "第四区：四步面谈预演（关键词版）", "用 5-10 分钟。用『我会说的第一句话』填空，不要写整段话。",
    "第一步——共看事实", "我的开场语（不超过 30 字）", "我邀请员工先说的引导句",
    "第二步——探寻归因", "我准备的第一个问题", "如果员工答『没什么特别的』，我接",
    "我准备听到的『AI参与』提法，我的反应是", "第三步——分析缺口",
    "我会怎么说，基于什么事面", "事实支撑", "我的结论", "我给员工的回应空间（『你怎么看』）",
    "第四步——共建方向", "我的起手问题", "我准备的收尾语（含时间点的承诺）",
    "这场面谈里，我最想做到但以前没做到的一件事",
    # 问责伙伴 (170-189)
    "问责伙伴与30天承诺", "没有问责伙伴的本表，等于没填。",
    "我的问责伙伴姓名", "联系方式（微信/手机）", "我们约定：面谈完成后，我会告诉他/她",
    "30天内，我会做到的一件事（和绩效面谈相关）",
    "可观察的、可验证的、具体到某个人或某件事。", "具体动作", "对应员工", "验证方式",
    "30天后回看这份清单时，我最想看到什么",
    "30天后回顾区", "面谈后 30 天，打开这份清单回看。",
    "面谈实际发生日期", "30天后回顾日期", "实际和预想的差距",
    "难点是否出现", "员工的反应", "我做到了什么", "我没做到什么",
    "30天承诺完成情况", "完成", "部分完成", "没完成（原因）", "这次面谈最大的学习",
    "下次面谈要改进的 1 件事", "维度", "预想", "实际", "差距分析",
]

ss_xml = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n'
ss_xml += f'<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="{len(SHARED_STRINGS)}" uniqueCount="{len(SHARED_STRINGS)}">\n'
for i, s in enumerate(SHARED_STRINGS):
    safe = s.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")
    ss_xml += f'<si><t xml:space="preserve">{safe}</t></si>\n'
ss_xml += '</sst>\n'

with open(WORK / "xl/sharedStrings.xml", "w", encoding="utf-8") as f:
    f.write(ss_xml)

# Build a comprehensive styles.xml
styles_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <numFmts count="6">
    <numFmt numFmtId="164" formatCode="&quot;¥&quot;#,##0;(&quot;¥&quot;#,##0);&quot;-&quot;"/>
    <numFmt numFmtId="165" formatCode="0.0%"/>
    <numFmt numFmtId="166" formatCode="0.0&quot;分&quot;"/>
    <numFmt numFmtId="167" formatCode="#,##0"/>
    <numFmt numFmtId="168" formatCode="m/d/yyyy"/>
    <numFmt numFmtId="169" formatCode="yyyy&quot;年&quot;m&quot;月&quot;d&quot;日&quot;"/>
  </numFmts>
  <fonts count="9">
    <font><sz val="11"/><name val="Microsoft YaHei"/></font>
    <font><sz val="11"/><name val="Microsoft YaHei"/><color rgb="000000FF"/></font>
    <font><sz val="11"/><name val="Microsoft YaHei"/><color rgb="00000000"/></font>
    <font><sz val="11"/><name val="Microsoft YaHei"/><color rgb="00008000"/></font>
    <font><sz val="13"/><name val="Microsoft YaHei"/><b/></font>
    <font><sz val="14"/><name val="Microsoft YaHei"/><b/><color rgb="FFFFFFFF"/></font>
    <font><sz val="11"/><name val="Microsoft YaHei"/><i/><color rgb="FF666666"/></font>
    <font><sz val="11"/><name val="Microsoft YaHei"/><color rgb="FFD32F2F"/></font>
    <font><sz val="11"/><name val="Microsoft YaHei"/><color rgb="FF0000FF"/></font>
  </fonts>
  <fills count="6">
    <fill><patternFill patternType="none"/></fill>
    <fill><patternFill patternType="gray125"/></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="FF1F4E78"/><bgColor indexed="64"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="FFE7E6E6"/><bgColor indexed="64"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="FFFFF2CC"/><bgColor indexed="64"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="FFD9E1F2"/><bgColor indexed="64"/></patternFill></fill>
  </fills>
  <borders count="2">
    <border><left/><right/><top/><bottom/><diagonal/></border>
    <border><left style="thin"><color rgb="FFCCCCCC"/></left><right style="thin"><color rgb="FFCCCCCC"/></right><top style="thin"><color rgb="FFCCCCCC"/></top><bottom style="thin"><color rgb="FFCCCCCC"/></bottom></border>
  </borders>
  <cellStyleXfs count="1">
    <xf numFmtId="0" fontId="0" fillId="0" borderId="0"/>
  </cellStyleXfs>
  <cellXfs count="18">
    <xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0" applyAlignment="1"><alignment vertical="center" wrapText="1"/></xf>
    <xf numFmtId="0" fontId="1" fillId="0" borderId="1" xfId="0" applyFont="1" applyBorder="1" applyAlignment="1"><alignment vertical="center" wrapText="1"/></xf>
    <xf numFmtId="0" fontId="2" fillId="0" borderId="1" xfId="0" applyFont="1" applyBorder="1" applyAlignment="1"><alignment vertical="center" wrapText="1"/></xf>
    <xf numFmtId="0" fontId="3" fillId="0" borderId="0" xfId="0" applyFont="1" applyAlignment="1"><alignment vertical="center" wrapText="1"/></xf>
    <xf numFmtId="0" fontId="4" fillId="0" borderId="1" xfId="0" applyFont="1" applyBorder="1" applyAlignment="1"><alignment vertical="center" wrapText="1"/></xf>
    <xf numFmtId="0" fontId="5" fillId="2" borderId="1" xfId="0" applyFont="1" applyBorder="1" applyFill="1" applyAlignment="1"><alignment horizontal="center" vertical="center"/></xf>
    <xf numFmtId="0" fontId="6" fillId="4" borderId="1" xfId="0" applyFont="1" applyBorder="1" applyFill="1" applyAlignment="1"><alignment vertical="center" wrapText="1"/></xf>
    <xf numFmtId="0" fontId="0" fillId="3" borderId="1" xfId="0" applyFill="1" applyBorder="1" applyAlignment="1"><alignment vertical="center" wrapText="1"/></xf>
    <xf numFmtId="0" fontId="8" fillId="4" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1" applyAlignment="1"><alignment vertical="center" wrapText="1"/></xf>
    <xf numFmtId="167" fontId="1" fillId="0" borderId="1" xfId="0" applyFont="1" applyNumberFormat="1" applyBorder="1" applyAlignment="1"><alignment vertical="center" wrapText="1"/></xf>
    <xf numFmtId="0" fontId="4" fillId="5" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1" applyAlignment="1"><alignment horizontal="center" vertical="center"/></xf>
    <xf numFmtId="0" fontId="0" fillId="4" borderId="1" xfId="0" applyFill="1" applyBorder="1" applyAlignment="1"><alignment horizontal="center" vertical="center" wrapText="1"/></xf>
    <xf numFmtId="168" fontId="1" fillId="0" borderId="1" xfId="0" applyFont="1" applyNumberFormat="1" applyBorder="1" applyAlignment="1"><alignment horizontal="center" vertical="center"/></xf>
    <xf numFmtId="169" fontId="1" fillId="0" borderId="1" xfId="0" applyFont="1" applyNumberFormat="1" applyBorder="1" applyAlignment="1"><alignment horizontal="center" vertical="center"/></xf>
    <xf numFmtId="0" fontId="7" fillId="0" borderId="1" xfId="0" applyFont="1" applyBorder="1" applyAlignment="1"><alignment vertical="center" wrapText="1"/></xf>
    <xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0" applyAlignment="1"><alignment vertical="top" wrapText="1"/></xf>
    <xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0" applyAlignment="1"><alignment horizontal="center" vertical="center"/></xf>
    <xf numFmtId="0" fontId="4" fillId="3" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1" applyAlignment="1"><alignment horizontal="center" vertical="center"/></xf>
  </cellXfs>
  <cellStyles count="1">
    <cellStyle name="Normal" xfId="0" builtinId="0"/>
  </cellStyles>
</styleSheet>'''

with open(WORK / "xl/styles.xml", "w", encoding="utf-8") as f:
    f.write(styles_xml)

# Helper to build cells
def s(i): return f'<v>{i}</v>'  # shared string ref
def n(v): return f'<v>{v}</v>'  # number
def t(s): return f'<is><t xml:space="preserve">{s.replace("&","&amp;").replace("<","&lt;").replace(">","&gt;")}</t></is>'

def cell(ref, val, style="0", ctype=None):
    """Build a cell. val: int (shared string idx), float (number), or str (inline text), or formula tuple"""
    t_attr = f' t="{ctype}"' if ctype else ''
    if isinstance(val, tuple) and val[0] == 'f':
        # formula: ('f', formula_str)
        f_escaped = val[1].replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")
        return f'<c r="{ref}"{t_attr} s="{style}"><f>{f_escaped}</f><v></v></c>'
    elif isinstance(val, int) and not ctype:
        return f'<c r="{ref}" t="s" s="{style}">{s(val)}</c>'
    elif isinstance(val, str):
        return f'<c r="{ref}" t="inlineStr" s="{style}"><is><t xml:space="preserve">{val.replace("&","&amp;").replace("<","&lt;").replace(">","&gt;")}</t></is></c>'
    elif isinstance(val, (int, float)):
        return f'<c r="{ref}" s="{style}">{n(val)}</c>'
    return f'<c r="{ref}" s="{style}"><v></v></c>'

def empty(ref, style="0"):
    return f'<c r="{ref}" s="{style}"/>'

def row(rnum, cells, height=None):
    ht = f' ht="{height}" customHeight="1"' if height else ''
    return f'<row r="{rnum}"{ht}>{"".join(cells)}</row>\n'

# ============== Build Sheet 1: 使用说明 ==============
sheet1 = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView tabSelected="1" workbookViewId="0"><pane ySplit="2" topLeftCell="A3" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>
  <sheetFormatPr defaultRowHeight="18" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols>
    <col min="1" max="1" width="22" customWidth="1"/>
    <col min="2" max="2" width="80" customWidth="1"/>
  </cols>
  <sheetData>
'''
sheet1 += row(1, [cell("A1", 0, "5"), cell("B1", 1, "5")], height=28)
sheet1 += row(2, [cell("A2", 0, "5"), cell("B2", 2, "6")], height=22)
sheet1 += row(3, [cell("A3", 3, "11"), cell("B3", 4, "6")], height=32)
sheet1 += row(4, [cell("A4", 5, "11"), cell("B4", 6, "2")], height=40)
sheet1 += row(5, [cell("A5", 7, "11"), cell("B5", 8, "2")], height=40)
sheet1 += row(6, [cell("A6", 9, "11"), cell("B6", 10, "2")], height=40)
sheet1 += row(7, [cell("A7", 11, "11"), cell("B7", "本表是『最重要的25分钟产出』——不要在课程结尾赶着填完。事实和归因没填好，后面三区都白填。", "14")], height=40)
sheet1 += '''  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

with open(WORK / "xl/worksheets/sheet1.xml", "w", encoding="utf-8") as f:
    f.write(sheet1)

# ============== Build Sheet 2: 面谈对象信息 ==============
sheet2_cells = []
# Title
sheet2_cells.append(row(1, [cell("A1", 20, "5"), cell("B1", 20, "5"), cell("C1", 20, "5")], height=28))
# Header row
sheet2_cells.append(row(2, [cell("A2", "项目", "4"), cell("B2", "填写", "4"), cell("C2", "示例", "4")], height=22))
# Data rows
data_rows_2 = [
    ("员工代号", "", "如：ZS-007 / 小李 / 产品组-王"),
    ("岗位", "", "如：高级产品经理 / 客户经理 / 工程师"),
    ("面谈预计时间", "", "2026/1/15 15:00"),
    ("面谈地点", "", "11楼小会议室A / 腾讯会议号"),
    ("考核周期", "", "2025下半年 / 2025Q4"),
    ("提前通知员工了？", "", "是 / 否 / 今天就通知"),
]
for i, (label, val, example) in enumerate(data_rows_2, start=3):
    sheet2_cells.append(row(i, [
        cell(f"A{i}", label, "11"),
        cell(f"B{i}", val, "1"),
        cell(f"C{i}", example, "6"),
    ], height=24))

# Notification checklist
sheet2_cells.append(row(10, [cell("A10", "面谈前 7 天准备事项", "4")], height=24))
checklist = [
    "提前 7 天通知员工（明确『半年度面谈+发展方向讨论』）",
    "收集员工自评/季度总结",
    "回顾上次面谈的承诺完成情况",
    "准备好 2-3 个具体事实（含时间/情境/行为/影响）",
    "用 F8 评估员工的双轨状态",
    "选好启动问题（F7 三选一）",
    "打印本表带去面谈",
]
for i, item in enumerate(checklist, start=11):
    sheet2_cells.append(row(i, [
        cell(f"A{i}", "□", "10"),
        cell(f"B{i}", item, "2"),
        cell(f"C{i}", "完成日期", "4"),
    ], height=22))

sheet2 = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">\n'
sheet2 += '<sheetViews><sheetView workbookViewId="0"><pane ySplit="2" topLeftCell="A3" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>\n'
sheet2 += '<sheetFormatPr defaultRowHeight="18" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>\n'
sheet2 += '<cols><col min="1" max="1" width="22" customWidth="1"/><col min="2" max="2" width="42" customWidth="1"/><col min="3" max="3" width="36" customWidth="1"/></cols>\n'
sheet2 += '<sheetData>\n'
sheet2 += "".join(sheet2_cells)
sheet2 += '</sheetData>\n<pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>\n</worksheet>'

with open(WORK / "xl/worksheets/sheet2.xml", "w", encoding="utf-8") as f:
    f.write(sheet2)

# ============== Build Sheet 3: 第一区 ==============
sheet3_cells = []
sheet3_cells.append(row(1, [cell("A1", 30, "5"), cell("B1", 30, "5"), cell("C1", 30, "5")], height=28))
sheet3_cells.append(row(2, [cell("A2", "【第一区】事实与归因准备", "4")], height=24))
sheet3_cells.append(row(3, [cell("A3", 31, "6")], height=22))

# 事实 1
sheet3_cells.append(row(4, [cell("A4", 33, "11")], height=22))
sheet3_cells.append(row(5, [cell("A5", "时间/情境", "11"), cell("B5", "", "1"), cell("C5", "例：2025/9/15 项目上线", "6")], height=24))
sheet3_cells.append(row(6, [cell("A6", "具体行为", "11"), cell("B6", "", "1"), cell("C6", "列 3-5 条可观察的行为", "6")], height=44))
sheet3_cells.append(row(7, [cell("A7", "结果/影响", "11"), cell("B7", "", "1"), cell("C7", "对业务/团队/客户的影响", "6")], height=44))
sheet3_cells.append(row(8, [cell("A8", 36, "11")], height=22))
sheet3_cells.append(row(9, [cell("A9", "B9", "1")], height=44))  # placeholder
sheet3_cells[-1] = row(9, [cell("A9", 36, "11"), cell("B9", "", "1")], height=44)
sheet3_cells.append(row(10, [cell("A10", 37, "11")], height=22))
sheet3_cells.append(row(11, [cell("A11", 38, "10"), cell("B11", 39, "10")], height=24))
sheet3_cells.append(row(12, [cell("A12", 40, "11")], height=22))
for i, opt in enumerate([41, 42, 43, 44]):
    sheet3_cells.append(row(13+i, [cell(f"A{13+i}", "□", "10"), cell(f"B{13+i}", opt, "2")], height=22))
sheet3_cells.append(row(17, [cell("A17", 45, "11")], height=22))
sheet3_cells.append(row(18, [cell("A18", "B18", "1")], height=44))
sheet3_cells[-1] = row(18, [cell("A18", 45, "11"), cell("B18", "", "1")], height=44)

# 事实 2
sheet3_cells.append(row(20, [cell("A20", 46, "11")], height=22))
for i, (label, ex) in enumerate([("时间/情境", ""), ("具体行为", ""), ("结果/影响", "")]):
    sheet3_cells.append(row(21+i, [cell(f"A{21+i}", label, "11"), cell(f"B{21+i}", "", "1")], height=24))
sheet3_cells.append(row(24, [cell("A24", 47, "11")], height=22))
sheet3_cells.append(row(25, [cell("A25", "B25", "1")], height=44))
sheet3_cells[-1] = row(25, [cell("A25", 47, "11"), cell("B25", "", "1")], height=44)
sheet3_cells.append(row(26, [cell("A26", 48, "11")], height=22))
sheet3_cells.append(row(27, [cell("A27", "□", "10"), cell("B27", 49, "2"), cell("C27", "□", "10"), cell("D27", 50, "2")], height=24))

# 事实 3
sheet3_cells.append(row(29, [cell("A29", 51, "11")], height=22))
for i, label in enumerate(["时间/情境", "具体行为", "结果/影响"]):
    sheet3_cells.append(row(30+i, [cell(f"A{30+i}", label, "11"), cell(f"B{30+i}", "", "1")], height=24))
sheet3_cells.append(row(33, [cell("A33", 52, "6")], height=22))

# Validation reminder
sheet3_cells.append(row(35, [cell("A35", "校验公式示例（仅参考）", "4")], height=22))
sheet3_cells.append(row(36, [
    cell("A36", "事实1时间长度（≥10字）", "11"),
    cell("B36", ('f', 'IF(LEN(B5)>=10,"OK","至少填10字")'), "2"),
    cell("C36", "事实2 长度（≥10字）", "11"),
    cell("D36", ('f', 'IF(LEN(B21)>=10,"OK","至少填10字")'), "2"),
], height=24))

sheet3 = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">\n'
sheet3 += '<sheetViews><sheetView workbookViewId="0"><pane ySplit="2" topLeftCell="A3" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>\n'
sheet3 += '<sheetFormatPr defaultRowHeight="18" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>\n'
sheet3 += '<cols><col min="1" max="1" width="22" customWidth="1"/><col min="2" max="2" width="48" customWidth="1"/><col min="3" max="3" width="30" customWidth="1"/><col min="4" max="4" width="22" customWidth="1"/></cols>\n'
sheet3 += '<sheetData>\n'
sheet3 += "".join(sheet3_cells)
sheet3 += '</sheetData>\n<pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>\n</worksheet>'

with open(WORK / "xl/worksheets/sheet3.xml", "w", encoding="utf-8") as f:
    f.write(sheet3)

# ============== Build Sheet 4: 第二区 ==============
sheet4_cells = []
sheet4_cells.append(row(1, [cell("A1", 70, "5"), cell("B1", 70, "5")], height=28))
sheet4_cells.append(row(2, [cell("A2", "【第二区】预估难点与准备", "4")], height=24))
sheet4_cells.append(row(3, [cell("A3", 71, "6")], height=22))

# 难点
sheet4_cells.append(row(4, [cell("A4", 72, "11")], height=22))
sheet4_cells.append(row(5, [cell("A5", "B5", "1")], height=44))
sheet4_cells[-1] = row(5, [cell("A5", 72, "11"), cell("B5", "", "1")], height=44)

# 难点类型多选
sheet4_cells.append(row(7, [cell("A7", 73, "11")], height=22))
difficulty_types = [
    (74, "员工可能不接受评估结果"),
    (75, "员工可能情绪激动"),
    (76, "我需要说一件我一直在回避的事"),
    (77, "AI 时代的五类特有场景之___类型（A/B/C/D/E）"),
    (78, "员工可能沉默不语"),
    (79, "员工可能挑战我『你自己呢』"),
    (80, "员工可能当场辞职"),
    (81, "其他"),
]
for i, (idx, label) in enumerate(difficulty_types):
    sheet4_cells.append(row(8+i, [cell(f"A{8+i}", "□", "10"), cell(f"B{8+i}", label, "2")], height=22))

# 应对准备
sheet4_cells.append(row(17, [cell("A17", 82, "11")], height=22))
sheet4_cells.append(row(18, [cell("A18", 83, "11"), cell("B18", "", "1")], height=44))
sheet4_cells.append(row(19, [cell("A19", 84, "11"), cell("B19", "", "1")], height=44))
sheet4_cells.append(row(20, [cell("A20", 85, "11"), cell("B20", "", "1")], height=44))

# 最坏情况
sheet4_cells.append(row(22, [cell("A22", 86, "11")], height=22))
sheet4_cells.append(row(23, [cell("A23", "B23", "1")], height=60))
sheet4_cells[-1] = row(23, [cell("A23", 86, "11"), cell("B23", "", "1")], height=60)
sheet4_cells.append(row(24, [cell("A24", "B24", "1")], height=60))
sheet4_cells[-1] = row(24, [cell("A24", 86, "11"), cell("B24", "", "1")], height=60)

# 校验
sheet4_cells.append(row(26, [cell("A26", "校验：难点类型已选数", "4")], height=22))
sheet4_cells.append(row(27, [cell("A27", "已选项数（≥1 才算填完）", "11"), cell("B27", ('f', 'COUNTIF(A8:A15,"□")'), "2")], height=24))

sheet4 = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">\n'
sheet4 += '<sheetViews><sheetView workbookViewId="0"><pane ySplit="2" topLeftCell="A3" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>\n'
sheet4 += '<sheetFormatPr defaultRowHeight="18" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>\n'
sheet4 += '<cols><col min="1" max="1" width="28" customWidth="1"/><col min="2" max="2" width="60" customWidth="1"/></cols>\n'
sheet4 += '<sheetData>\n'
sheet4 += "".join(sheet4_cells)
sheet4 += '</sheetData>\n<pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>\n</worksheet>'

with open(WORK / "xl/worksheets/sheet4.xml", "w", encoding="utf-8") as f:
    f.write(sheet4)

# ============== Build Sheet 5: 第三区 ==============
sheet5_cells = []
sheet5_cells.append(row(1, [cell("A1", 100, "5"), cell("B1", 100, "5")], height=28))
sheet5_cells.append(row(2, [cell("A2", "【第三区】发展对话规划", "4")], height=24))
sheet5_cells.append(row(3, [cell("A3", 101, "6")], height=22))

# 双轨状态
sheet5_cells.append(row(4, [cell("A4", 102, "11")], height=22))
sheet5_cells.append(row(5, [cell("A5", 103, "11"), cell("B5", "不足", "1"), cell("C5", "够用", "1"), cell("D5", "较强", "1")], height=24))
sheet5_cells.append(row(6, [cell("A6", 106, "11"), cell("B6", "不足", "1"), cell("C6", "够用", "1"), cell("D6", "较强", "1")], height=24))

# 当前更紧迫的发展轨道
sheet5_cells.append(row(8, [cell("A8", 107, "11")], height=22))
sheet5_cells.append(row(9, [cell("A9", "□", "10"), cell("B9", 108, "2"), cell("C9", "理由", "4"), cell("D9", "", "1")], height=24))
sheet5_cells.append(row(10, [cell("A10", "□", "10"), cell("B10", 109, "2"), cell("C10", "理由", "4"), cell("D10", "", "1")], height=24))
sheet5_cells.append(row(11, [cell("A11", "□", "10"), cell("B11", 110, "2"), cell("C11", "理由", "4"), cell("D11", "", "1")], height=24))

# 最想达到的一个结果
sheet5_cells.append(row(13, [cell("A13", 111, "11")], height=22))
sheet5_cells.append(row(14, [cell("A14", "B14", "1")], height=44))
sheet5_cells[-1] = row(14, [cell("A14", 111, "11"), cell("B14", "", "1")], height=44)

# 启动问题
sheet5_cells.append(row(16, [cell("A16", 112, "11")], height=22))
sheet5_cells.append(row(17, [cell("A17", "□", "10"), cell("B17", 113, "2")], height=44))
sheet5_cells.append(row(18, [cell("A18", "□", "10"), cell("B18", 114, "2")], height=44))
sheet5_cells.append(row(19, [cell("A19", "□", "10"), cell("B19", 115, "2")], height=44))

sheet5_cells.append(row(21, [cell("A21", 116, "11")], height=22))
sheet5_cells.append(row(22, [cell("A22", "B22", "1")], height=44))
sheet5_cells[-1] = row(22, [cell("A22", 116, "11"), cell("B22", "", "1")], height=44)

# 回应方向
sheet5_cells.append(row(24, [cell("A24", 117, "11")], height=22))
for i in range(3):
    r = 25 + i * 3
    sheet5_cells.append(row(r, [cell(f"A{r}", 118 + i*2, "11"), cell(f"B{r}", "", "1")], height=24))
    sheet5_cells.append(row(r+1, [cell(f"A{r+1}", 119 + i*2, "11"), cell(f"B{r+1}", "", "1")], height=24))
    sheet5_cells.append(row(r+2, [empty(f"A{r+2}", "0")], height=8))

# 方向感
sheet5_cells.append(row(35, [cell("A35", 124, "11")], height=22))
sheet5_cells.append(row(36, [cell("A36", 125, "6")], height=22))
sheet5_cells.append(row(37, [cell("A37", "B37", "1")], height=60))
sheet5_cells[-1] = row(37, [cell("A37", 124, "11"), cell("B37", "", "1")], height=60)

# 校验
sheet5_cells.append(row(39, [cell("A39", "校验：启动问题已选数", "4")], height=22))
sheet5_cells.append(row(40, [cell("A40", "启动问题已选数（≥1 才算填完）", "11"), cell("B40", ('f', 'COUNTIF(A17:A19,"□")'), "2")], height=24))

sheet5 = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">\n'
sheet5 += '<sheetViews><sheetView workbookViewId="0"><pane ySplit="2" topLeftCell="A3" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>\n'
sheet5 += '<sheetFormatPr defaultRowHeight="18" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>\n'
sheet5 += '<cols><col min="1" max="1" width="28" customWidth="1"/><col min="2" max="2" width="60" customWidth="1"/></cols>\n'
sheet5 += '<sheetData>\n'
sheet5 += "".join(sheet5_cells)
sheet5 += '</sheetData>\n<pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>\n</worksheet>'

with open(WORK / "xl/worksheets/sheet5.xml", "w", encoding="utf-8") as f:
    f.write(sheet5)

# ============== Build Sheet 6: 第四区 ==============
sheet6_cells = []
sheet6_cells.append(row(1, [cell("A1", 140, "5"), cell("B1", 140, "5")], height=28))
sheet6_cells.append(row(2, [cell("A2", "【第四区】四步面谈预演（关键词版）", "4")], height=24))
sheet6_cells.append(row(3, [cell("A3", 141, "6")], height=22))

# 第一步
sheet6_cells.append(row(4, [cell("A4", 142, "11")], height=22))
sheet6_cells.append(row(5, [cell("A5", 143, "11"), cell("B5", "", "1")], height=44))
sheet6_cells.append(row(6, [cell("A6", 144, "11"), cell("B6", "", "1")], height=44))

# 第二步
sheet6_cells.append(row(8, [cell("A8", 145, "11")], height=22))
sheet6_cells.append(row(9, [cell("A9", 146, "11"), cell("B9", "", "1")], height=44))
sheet6_cells.append(row(10, [cell("A10", 147, "11"), cell("B10", "", "1")], height=44))
sheet6_cells.append(row(11, [cell("A11", 148, "11"), cell("B11", "", "1")], height=44))

# 第三步
sheet6_cells.append(row(13, [cell("A13", 149, "11")], height=22))
sheet6_cells.append(row(14, [cell("A14", 150, "11")], height=22))
sheet6_cells.append(row(15, [cell("A15", 151, "11"), cell("B15", "", "1")], height=44))
sheet6_cells.append(row(16, [cell("A16", 152, "11"), cell("B16", "", "1")], height=44))
sheet6_cells.append(row(17, [cell("A17", 153, "11"), cell("B17", "", "1")], height=44))

# 第四步
sheet6_cells.append(row(19, [cell("A19", 154, "11")], height=22))
sheet6_cells.append(row(20, [cell("A20", 155, "11"), cell("B20", "", "1")], height=44))
sheet6_cells.append(row(21, [cell("A21", 156, "11"), cell("B21", "", "1")], height=44))

# 最想做到但以前没做到
sheet6_cells.append(row(23, [cell("A23", 157, "11")], height=22))
sheet6_cells.append(row(24, [cell("A24", "B24", "1")], height=60))
sheet6_cells[-1] = row(24, [cell("A24", 157, "11"), cell("B24", "", "1")], height=60)

# 字数校验
sheet6_cells.append(row(26, [cell("A26", "字数校验", "4")], height=22))
sheet6_cells.append(row(27, [cell("A27", "开场语字数（不超过 30 字）", "11"), cell("B27", ('f', 'IF(LEN(B5)<=30,"OK","过长,改用关键词")'), "2")], height=24))

sheet6 = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">\n'
sheet6 += '<sheetViews><sheetView workbookViewId="0"><pane ySplit="2" topLeftCell="A3" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>\n'
sheet6 += '<sheetFormatPr defaultRowHeight="18" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>\n'
sheet6 += '<cols><col min="1" max="1" width="30" customWidth="1"/><col min="2" max="2" width="60" customWidth="1"/></cols>\n'
sheet6 += '<sheetData>\n'
sheet6 += "".join(sheet6_cells)
sheet6 += '</sheetData>\n<pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>\n</worksheet>'

with open(WORK / "xl/worksheets/sheet6.xml", "w", encoding="utf-8") as f:
    f.write(sheet6)

# ============== Build Sheet 7: 问责伙伴 + 30天 ==============
sheet7_cells = []
sheet7_cells.append(row(1, [cell("A1", 170, "5"), cell("B1", 170, "5")], height=28))
sheet7_cells.append(row(2, [cell("A2", "【问责伙伴】与【30天承诺】", "4")], height=24))
sheet7_cells.append(row(3, [cell("A3", 171, "6")], height=22))

# 问责伙伴
sheet7_cells.append(row(4, [cell("A4", 172, "11")], height=22))
sheet7_cells.append(row(5, [cell("A5", "B5", "1")], height=24))
sheet7_cells[-1] = row(5, [cell("A5", 172, "11"), cell("B5", "", "1")], height=24)
sheet7_cells.append(row(6, [cell("A6", 173, "11"), cell("B6", "", "1")], height=24))
sheet7_cells.append(row(7, [cell("A7", 174, "11")], height=22))
sheet7_cells.append(row(8, [cell("A8", "B8", "1")], height=44))
sheet7_cells[-1] = row(8, [cell("A7", 174, "11"), cell("A8", "", "1")], height=44)

# 30 天承诺
sheet7_cells.append(row(10, [cell("A10", 175, "11")], height=22))
sheet7_cells.append(row(11, [cell("A11", 176, "6")], height=22))
sheet7_cells.append(row(12, [cell("A12", 177, "11"), cell("B12", "", "1")], height=44))
sheet7_cells.append(row(13, [cell("A13", 178, "11"), cell("B13", "", "1")], height=24))
sheet7_cells.append(row(14, [cell("A14", 179, "11"), cell("B14", "", "1")], height=44))

# 30 天后回看
sheet7_cells.append(row(16, [cell("A16", 180, "11")], height=22))
sheet7_cells.append(row(17, [cell("A17", "B17", "1")], height=44))
sheet7_cells[-1] = row(17, [cell("A17", 180, "11"), cell("B17", "", "1")], height=44)

# 30 天后回顾区
sheet7_cells.append(row(19, [cell("A19", 181, "4")], height=24))
sheet7_cells.append(row(20, [cell("A20", 182, "11")], height=22))
sheet7_cells.append(row(21, [cell("A21", 182, "12"), cell("B21", "", "12")], height=24))
sheet7_cells.append(row(22, [cell("A22", 183, "12"), cell("B22", "", "12")], height=24))

# 实际和预想的差距
sheet7_cells.append(row(24, [cell("A24", 184, "11")], height=22))
sheet7_cells.append(row(25, [cell("A25", 188, "4"), cell("B25", 189, "4"), cell("C25", 190, "4"), cell("D25", 191, "4")], height=24))
for i, dim in enumerate([185, 186, 187]):
    sheet7_cells.append(row(26+i, [cell(f"A{26+i}", dim, "11"), cell(f"B{26+i}", "", "2"), cell(f"C{26+i}", "", "2"), cell(f"D{26+i}", "", "2")], height=32))

# 30 天承诺完成情况
sheet7_cells.append(row(30, [cell("A30", 192, "11")], height=22))
for i, opt in enumerate([193, 194, 195]):
    sheet7_cells.append(row(31+i, [cell(f"A{31+i}", "□", "10"), cell(f"B{31+i}", opt, "2")], height=22))

sheet7_cells.append(row(35, [cell("A35", 196, "11")], height=22))
sheet7_cells.append(row(36, [cell("A36", "B36", "1")], height=44))
sheet7_cells[-1] = row(36, [cell("A36", 196, "11"), cell("B36", "", "1")], height=44)

sheet7_cells.append(row(38, [cell("A38", 197, "11")], height=22))
sheet7_cells.append(row(39, [cell("A39", "B39", "1")], height=44))
sheet7_cells[-1] = row(39, [cell("A39", 197, "11"), cell("B39", "", "1")], height=44)

# 校验
sheet7_cells.append(row(41, [cell("A41", "校验：问责伙伴是否填写", "4")], height=22))
sheet7_cells.append(row(42, [cell("A42", "问责伙伴姓名（≥2 字）", "11"), cell("B42", ('f', 'IF(LEN(B5)>=2,"OK","请填写")'), "2")], height=24))

sheet7 = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">\n'
sheet7 += '<sheetViews><sheetView workbookViewId="0"><pane ySplit="2" topLeftCell="A3" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>\n'
sheet7 += '<sheetFormatPr defaultRowHeight="18" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>\n'
sheet7 += '<cols><col min="1" max="1" width="28" customWidth="1"/><col min="2" max="2" width="50" customWidth="1"/><col min="3" max="3" width="22" customWidth="1"/><col min="4" max="4" width="22" customWidth="1"/></cols>\n'
sheet7 += '<sheetData>\n'
sheet7 += "".join(sheet7_cells)
sheet7 += '</sheetData>\n<pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>\n</worksheet>'

with open(WORK / "xl/worksheets/sheet7.xml", "w", encoding="utf-8") as f:
    f.write(sheet7)

# ============== Build workbook.xml + rels + content types ==============
workbook = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <fileVersion appName="xl" lastEdited="7" lowestEdited="7"/>
  <workbookPr defaultThemeVersion="166925"/>
  <bookViews><workbookView xWindow="0" yWindow="0" windowWidth="20140" windowHeight="10960"/></bookViews>
  <sheets>
    <sheet name="使用说明" sheetId="1" r:id="rId1"/>
    <sheet name="面谈对象信息" sheetId="2" r:id="rId4"/>
    <sheet name="第一区_事实与归因" sheetId="3" r:id="rId5"/>
    <sheet name="第二区_预估难点" sheetId="4" r:id="rId6"/>
    <sheet name="第三区_发展对话" sheetId="5" r:id="rId7"/>
    <sheet name="第四区_四步预演" sheetId="6" r:id="rId8"/>
    <sheet name="问责伙伴与30天" sheetId="7" r:id="rId9"/>
  </sheets>
  <calcPr calcId="191029"/>
</workbook>'''

with open(WORK / "xl/workbook.xml", "w", encoding="utf-8") as f:
    f.write(workbook)

rels = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
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
</Relationships>'''

with open(WORK / "xl/_rels/workbook.xml.rels", "w", encoding="utf-8") as f:
    f.write(rels)

ct = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
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
  <Override PartName="/xl/worksheets/sheet7.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>
  <Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/>
</Types>'''

with open(WORK / "[Content_Types].xml", "w", encoding="utf-8") as f:
    f.write(ct)

# Pack
import subprocess
OUT.parent.mkdir(parents=True, exist_ok=True)
result = subprocess.run(
    ["python3", "C:/Users/Administrator/.claude/skills/Excel表格处理/scripts/xlsx_pack.py", str(WORK), str(OUT)],
    capture_output=True, text=True
)
print("STDOUT:", result.stdout)
print("STDERR:", result.stderr)
print("Output size:", OUT.stat().st_size if OUT.exists() else "NOT CREATED")
