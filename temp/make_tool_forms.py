"""Generate 工具表单打印版.pdf - A4 portrait, ~35-40 pages.
30+ tool forms with hand-write lines (2.5x height) and checkboxes.
"""
import os
from reportlab.lib.pagesizes import A4
from reportlab.lib.colors import HexColor
from reportlab.pdfgen import canvas
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont

for d in [r"C:\Windows\Fonts"]:
    if not os.path.isdir(d): continue
    for f in os.listdir(d):
        if f.lower() == "simsun.ttc":
            try: pdfmetrics.registerFont(TTFont("SerifCN", os.path.join(d, f)))
            except: pass
        if f.lower() == "msyh.ttc":
            try: pdfmetrics.registerFont(TTFont("SansCN", os.path.join(d, f)))
            except: pass
        if f.lower() == "simhei.ttf":
            try: pdfmetrics.registerFont(TTFont("BoldCN", os.path.join(d, f)))
            except: pass

SERIF = "SerifCN"
SANS = "SansCN"
BOLD = "BoldCN"

W, H = A4
OUT = r"D:\Downloads\利益相关方影响和干预\完整课程包\13_Office文档\工具表单打印版.pdf"

c = canvas.Canvas(OUT, pagesize=A4)
c.setTitle("共同语言 · 工具表单打印版")
c.setAuthor("罗宏伟")

RED_DEEP = HexColor("#8b2828")
RED_MID = HexColor("#c0392b")
GOLD = HexColor("#c9a96e")
GOLD_DEEP = HexColor("#a8884a")
PAPER = HexColor("#f5f0e6")
PAPER_LIGHT = HexColor("#faf6ec")
INK = HexColor("#0a0a0a")
INK_SOFT = HexColor("#3a3a3a")
INK_MID = HexColor("#6e6e6e")
LINE = HexColor("#d6cfc1")
LINE_DARK = HexColor("#999999")
RED_TINT = HexColor("#f8e6e1")
RED_SOFT = HexColor("#f0d5cf")

# Constants
LINE_HEIGHT_BIG = 26  # 2.5x of normal 10pt (for handwriting)
HEADER_H = 56
FOOTER_H = 36

def new_page():
    c.setFillColor(PAPER_LIGHT)
    c.rect(0, 0, W, H, fill=1, stroke=0)
    c.showPage()

def tool_header(tool_code, tool_name, module_tag, ability_code="CL-2"):
    """Top-right corner tool identification."""
    c.setFillColor(RED_DEEP)
    c.rect(W - 200, H - 50, 160, 30, fill=1, stroke=0)
    c.setFillColor(GOLD)
    c.setFont(BOLD, 9)
    c.drawString(W - 192, H - 40, tool_code)
    c.setFillColor(PAPER_LIGHT)
    c.setFont(SERIF, 11)
    c.drawString(W - 156, H - 40, tool_name)
    # Module tag
    c.setFillColor(GOLD)
    c.setFont(BOLD, 9)
    c.drawString(W - 192, H - 58, f"模块：{module_tag}  ·  能力点 {ability_code}")

def page_footer(page_num, total):
    c.setStrokeColor(LINE)
    c.setLineWidth(0.5)
    c.line(40, 30, W - 40, 30)
    c.setFillColor(INK_MID)
    c.setFont(SANS, 8)
    c.drawString(40, 18, "共同语言 · 工具表单打印版  ·  罗宏伟  ·  v1.0  ·  2026")
    c.drawRightString(W - 40, 18, f"第 {page_num} / {total} 页")

def title_block(title, subtitle=None):
    c.setFillColor(RED_DEEP)
    c.setFont(BOLD, 16)
    c.drawString(40, H - 90, title)
    c.setFillColor(GOLD)
    c.setLineWidth(1.5)
    c.line(40, H - 98, 280, H - 98)
    if subtitle:
        c.setFillColor(INK_SOFT)
        c.setFont(SERIF, 10)
        c.drawString(40, H - 114, subtitle)
        return H - 134
    return H - 110

def section_block(y, label):
    """Light block for section headers."""
    c.setFillColor(RED_TINT)
    c.rect(40, y - 16, W - 80, 20, fill=1, stroke=0)
    c.setFillColor(RED_DEEP)
    c.setFont(BOLD, 10)
    c.drawString(50, y - 11, label)
    return y - 28

def hline_field(y, label, lines=1, hint=None, label_w=140):
    """Hand-write field with label and underline writing space."""
    c.setFillColor(INK)
    c.setFont(BOLD, 10)
    c.drawString(40, y, label)
    if hint:
        c.setFillColor(INK_MID)
        c.setFont(SANS, 8)
        c.drawString(40 + label_w + 10, y, f"（{hint}）")
    y -= 4
    for i in range(lines):
        c.setStrokeColor(LINE_DARK)
        c.setLineWidth(0.6)
        c.line(40, y - LINE_HEIGHT_BIG, W - 40, y - LINE_HEIGHT_BIG)
        y -= LINE_HEIGHT_BIG + 4
    return y

def checkbox_field(y, label, options, columns=2):
    """Multiple choice with checkboxes."""
    c.setFillColor(INK)
    c.setFont(BOLD, 10)
    c.drawString(40, y, label)
    y -= 18
    col_w = (W - 80) / columns
    for i, opt in enumerate(options):
        col = i % columns
        row = i // columns
        x = 40 + col * col_w
        yy = y - row * 24
        # Checkbox
        c.setStrokeColor(INK_SOFT)
        c.setLineWidth(0.8)
        c.setFillColor(PAPER_LIGHT)
        c.rect(x, yy - 4, 12, 12, fill=1, stroke=1)
        # Text
        c.setFillColor(INK_SOFT)
        c.setFont(SERIF, 9.5)
        c.drawString(x + 18, yy - 1, opt)
    y -= ((len(options) - 1) // columns + 1) * 24 + 4
    return y

def table_field(y, headers, rows, col_widths=None, row_h=LINE_HEIGHT_BIG + 4):
    """Hand-write table with column headers and writing rows."""
    if col_widths is None:
        col_widths = [(W - 80) / len(headers)] * len(headers)
    # Header
    c.setFillColor(RED_DEEP)
    c.rect(40, y - row_h + 4, sum(col_widths), row_h, fill=1, stroke=0)
    c.setFillColor(PAPER_LIGHT)
    c.setFont(BOLD, 9.5)
    x = 40
    for h, w in zip(headers, col_widths):
        c.drawString(x + 6, y - 12, h)
        x += w
    y -= row_h + 4
    # Rows
    for _ in range(rows):
        c.setFillColor(PAPER_LIGHT)
        c.rect(40, y - row_h + 4, sum(col_widths), row_h, fill=1, stroke=0)
        c.setStrokeColor(LINE_DARK)
        c.setLineWidth(0.4)
        # Column dividers
        x = 40
        for w in col_widths[:-1]:
            x += w
            c.line(x, y - row_h + 4, x, y + 4)
        # Bottom border (write line)
        c.setStrokeColor(LINE_DARK)
        c.setLineWidth(0.6)
        c.line(40, y - row_h + 4, 40 + sum(col_widths), y - row_h + 4)
        y -= row_h
    return y

# Tools data: each tool defined by code, name, module, ability, render function
TOOLS = []

def T00_01():
    """T00-01 课前自我评估表"""
    tool_header("T00-01", "课前自我评估表", "课前", "PRE-1")
    y = title_block("课前自我评估表",
                    "完成日期：____________  学员姓名：____________  部门：____________  岗位：____________")
    y -= 6

    y = section_block(y, "一、基础信息（5 项自评 · 用于讲师提前识别高风险学员）")
    y -= 4
    y = hline_field(y, "1. 我承担项目执行/协调的工作年限：", lines=1, hint="如：少于 1 年 / 1-3 年 / 3-5 年 / 5 年以上")
    y -= 4
    y = hline_field(y, "2. 我平均每周开 ________ 次跨部门会议。", lines=1)
    y -= 4
    y = hline_field(y, "3. 我最近一次「会议开完没结论」是什么时候：", lines=1)
    y -= 4
    y = hline_field(y, "4. 我最近一次「找原因反复找不准」是什么时候：", lines=1)
    y -= 4
    y = hline_field(y, "5. 我对本课程的最大期待是：", lines=2)

    y -= 6
    y = section_block(y, "二、4 维度自评（每项 1-5 分 · 5=总是，1=从不）")
    y -= 4
    questions = [
        "1. 我和团队讨论「问题是什么」时，10 次有 ____ 次理解一致。",
        "2. 我召开的会议 10 次有 ____ 次能在结束时给出清晰的行动项。",
        "3. 我面对跨部门相关方时，知道该先找谁、什么时候找。",
        "4. 当项目/工作偏离计划，我能早期识别并启动纠偏。",
    ]
    for q in questions:
        c.setFillColor(INK)
        c.setFont(SERIF, 10)
        c.drawString(40, y, q)
        # Underline for the score
        c.setStrokeColor(LINE_DARK)
        c.setLineWidth(0.6)
        c.line(360, y - 2, 420, y - 2)
        y -= 22

    y -= 4
    y = section_block(y, "三、当前最希望解决的工作场景（开放式 · 选 1-2 个）")
    y -= 4
    y = hline_field(y, "场景 1：", lines=2)
    y -= 4
    y = hline_field(y, "场景 2：", lines=2)
    y -= 4

    y = section_block(y, "四、对本课程 1 句话期待")
    y -= 4
    y = hline_field(y, "我希望从这门课带走：", lines=3)
    page_footer(2, 38)

TOOLS.append(T00_01)


def T01_01():
    """T01-01 事实 vs 判断速查卡"""
    tool_header("T01-01", "事实 vs 判断速查卡", "M1", "CL-1")
    y = title_block("事实 vs 判断速查卡（参考卡）",
                    "学员姓名：____________  日期：____________  ★ 这是参考卡，可剪下放桌上当速查表")
    y -= 6
    y = section_block(y, "一、判断词 8 大信号")
    y -= 4
    items = [
        "□  不太 / 挺 / 特别 / 有点 / 稍微        —— 程度模糊",
        "□  总是 / 经常 / 一直 / 从来             —— 时间泛化",
        "□  大部分 / 多数 / 一般 / 基本上        —— 范围泛化",
        "□  明显 / 显然 / 不用说                  —— 缺事实",
        "□  靠谱 / 不靠谱 / 还行 / 一般          —— 评价词",
        "□  难 / 容易 / 简单 / 复杂              —— 难度评价",
        "□  重要 / 紧急 / 关键                    —— 价值判断",
        "□  大家都 / 我们都 / 大家觉得            —— 群体判断",
    ]
    for it in items:
        c.setFillColor(INK_SOFT)
        c.setFont(SERIF, 10)
        c.drawString(50, y, it)
        y -= 18
    y -= 4
    y = section_block(y, "二、3 步把判断改写为事实")
    y -= 4
    steps = [
        "Step 1  圈出判断词 →",
        "Step 2  问「具体是什么 / 多少 / 什么时候」→",
        "Step 3  用「对象 + 量化指标 + 时段 + 对比」改写",
        "改写前：这批供应商不靠谱",
        "改写后：这批抽检 50 件中 5 件尺寸超差 ±0.05mm，超差率 10%，上周同期为 2%",
    ]
    for s in steps:
        if s.startswith("改写"):
            c.setFillColor(RED_DEEP)
        else:
            c.setFillColor(INK_SOFT)
        c.setFont(SERIF if not s.startswith("Step") else BOLD, 10)
        c.drawString(50, y, s)
        y -= 16
    y -= 6
    y = section_block(y, "三、自检 3 问")
    y -= 4
    qs = [
        "□  这句话里有判断词吗？",
        "□  我能给出「数据 / 设备参数 / 操作记录」吗？",
        "□  另一位同事听完，能给出和我一致的解读吗？",
    ]
    for q in qs:
        c.setFillColor(INK_SOFT)
        c.setFont(SERIF, 10)
        c.drawString(50, y, q)
        y -= 18
    page_footer(3, 38)

TOOLS.append(T01_01)


def T01_02():
    """T01-02 标准问题陈述句式卡"""
    tool_header("T01-02", "标准问题陈述句式卡", "M1", "CL-2")
    y = title_block("标准问题陈述句式卡（参考卡）",
                    "学员姓名：____________  日期：____________")
    y -= 6
    y = section_block(y, "一、5 要素标准句式")
    y -= 4
    c.setFillColor(RED_DEEP)
    c.setFont(BOLD, 13)
    c.drawString(50, y, "在 〔范围〕  中  〔对象〕  本应  〔标准〕")
    y -= 18
    c.drawString(50, y, "实际出现  〔偏差〕  ，影响是  〔后果〕")
    y -= 24
    y = section_block(y, "二、5 要素逐项填写示例（王工案例）")
    y -= 4
    fields = [
        ("范围", "上周一批抽检的零件"),
        ("对象", "其中 50 件"),
        ("标准", "尺寸应在 ±0.02mm 内"),
        ("偏差", "5 件超出 ±0.05mm"),
        ("后果", "客户要求停线 4 小时返工 + 推迟 2 天"),
    ]
    for k, v in fields:
        c.setFillColor(RED_DEEP)
        c.setFont(BOLD, 10)
        c.drawString(50, y, f"〔{k}〕")
        c.setFillColor(INK)
        c.setFont(SERIF, 10)
        c.drawString(110, y, v)
        y -= 18
    y -= 6
    y = section_block(y, "三、自检 4 问（讲完一段话后问自己）")
    y -= 4
    qs = [
        "□  我说的这句话里有没有判断词？（如「挺多」「明显」）",
        "□  5 要素全说全了吗？",
        "□  「后果」是不是具体的、可验证的？",
        "□  对方听完，能复述出和我一致的「范围+偏差」吗？",
    ]
    for q in qs:
        c.setFillColor(INK_SOFT)
        c.setFont(SERIF, 10)
        c.drawString(50, y, q)
        y -= 18
    page_footer(4, 38)

TOOLS.append(T01_02)


def T01_03():
    """T01-03 标准问题改写练习表"""
    tool_header("T01-03", "标准问题改写练习表", "M1", "CL-2")
    y = title_block("标准问题改写练习表",
                    "请把以下 5 个判断改写为标准问题陈述句（5 要素齐全）")
    y -= 6
    problems = [
        "1. 这批供应商不靠谱。",
        "2. 最近工程师都很忙。",
        "3. 测试报告总是出得很慢。",
        "4. 这个项目明显有问题。",
        "5. 客户都不太配合。",
    ]
    for p in problems:
        c.setFillColor(RED_DEEP)
        c.setFont(BOLD, 10)
        c.drawString(40, y, p)
        y -= 18
        y = hline_field(y, "改写：", lines=2)
        y -= 4
    y -= 6
    y = section_block(y, "自检 3 问（写完后逐题自检）")
    y -= 4
    c.setFillColor(INK_SOFT)
    c.setFont(SERIF, 10)
    c.drawString(50, y, "□  5 要素齐全？    □  没有判断词？    □  后果可验证？")
    page_footer(5, 38)

TOOLS.append(T01_03)


def T01_04():
    """T01-04 关注点排序表"""
    tool_header("T01-04", "关注点排序表", "M1", "CL-3")
    y = title_block("关注点排序表",
                    "把当前问题中 3-5 个关键关注点按「严重性 / 紧迫性 / 趋势」打分排序")
    y -= 6
    y = section_block(y, "一、关注点列表（请列出 3-5 个关键关注点）")
    y -= 4
    y = table_field(y, ["序号", "关注点（具体陈述）"], rows=5, col_widths=[50, W - 80 - 50])
    y -= 10
    y = section_block(y, "二、3 维度评分（1-5 分 · 5=最高）")
    y -= 4
    y = table_field(y, ["#", "关注点", "严重性", "紧迫性", "趋势恶化"], rows=5,
                    col_widths=[30, 180, 80, 80, W - 80 - 30 - 180 - 80 - 80])
    y -= 10
    y = section_block(y, "三、最终排序（按总分从高到低）")
    y -= 4
    y = hline_field(y, "排序 1：", lines=1)
    y -= 4
    y = hline_field(y, "排序 2：", lines=1)
    y -= 4
    y = hline_field(y, "排序 3：", lines=1)
    y -= 4
    y = section_block(y, "四、破局句（如果排序僵持不下的那条）")
    y -= 4
    y = hline_field(y, "破局句：今天不处理，明天哪条会来不及？答：", lines=1)
    page_footer(6, 38)

TOOLS.append(T01_04)


def T01_05():
    """T01-05 模块一反思日志"""
    tool_header("T01-05", "模块一反思日志", "M1", "RF-1")
    y = title_block("模块一反思日志（共同语言）",
                    "完成日期：____________  学员姓名：____________")
    y -= 6
    y = section_block(y, "一、今天学到的 3 个关键点")
    y -= 4
    y = hline_field(y, "1.", lines=1)
    y -= 4
    y = hline_field(y, "2.", lines=1)
    y -= 4
    y = hline_field(y, "3.", lines=1)
    y -= 8
    y = section_block(y, "二、我之前的哪些习惯需要改")
    y -= 4
    y = hline_field(y, "", lines=3)
    y -= 8
    y = section_block(y, "三、下周我会在什么场景用上 M1 的工具")
    y -= 4
    y = hline_field(y, "场景：", lines=1)
    y -= 4
    y = hline_field(y, "计划怎么用：", lines=2)
    y -= 8
    y = section_block(y, "四、卡点 / 疑问（讲师答疑区）")
    y -= 4
    y = hline_field(y, "", lines=2)
    page_footer(7, 38)

TOOLS.append(T01_05)


def T01_06():
    """T01-06 个人行动计划表"""
    tool_header("T01-06", "个人行动计划表（M1-M3 共用）", "M1-M3", "AP-1")
    y = title_block("个人行动计划表（M1-M3 共用）",
                    "请把你在 3 个模块里学到的工具，转化为「下周开始执行」的具体行动")
    y -= 6
    y = section_block(y, "行动列表（至少 3 条 · 每条 1 行动）")
    y -= 4
    y = table_field(y,
                    ["#", "行动（具体动作）", "用哪个工具", "什么时候做", "怎么判断做到"],
                    rows=5,
                    col_widths=[30, 170, 100, 90, W - 80 - 30 - 170 - 100 - 90])
    y -= 12
    y = section_block(y, "可能的障碍 + 应对（每条行动 1 行）")
    y -= 4
    y = hline_field(y, "1.", lines=2)
    y -= 4
    y = hline_field(y, "2.", lines=2)
    y -= 4
    y = hline_field(y, "3.", lines=2)
    y -= 4
    y = section_block(y, "我的承诺")
    y -= 4
    y = hline_field(y, "我承诺：____________________________________________________", lines=2)
    y -= 4
    y = hline_field(y, "签名：________________  日期：________________", lines=1)
    page_footer(8, 38)

TOOLS.append(T01_06)


def T02_01():
    """T02-01 会议四分类与目的声明模板"""
    tool_header("T02-01", "会议四分类与目的声明模板", "M2", "MT-1")
    y = title_block("会议四分类与目的声明模板",
                    "学员姓名：____________  日期：____________  ★ 开会前 3 分钟必填")
    y -= 6
    y = section_block(y, "一、会议四分类（请勾选本次会议类型）")
    y -= 4
    c.setFillColor(INK)
    c.setFont(SERIF, 10)
    cats = [
        ("□  启动会", "对齐目标 + 分工"),
        ("□  决策会", "对关键选择做决定"),
        ("□  问题排查会", "找原因 / 找方案"),
        ("□  复盘会", "回顾过去 + 提炼经验"),
    ]
    col_w = (W - 80) / 2
    for i, (k, v) in enumerate(cats):
        col = i % 2
        row = i // 2
        x = 40 + col * col_w
        yy = y - row * 22
        c.setFillColor(RED_DEEP)
        c.setFont(BOLD, 10)
        c.drawString(x, yy, k)
        c.setFillColor(INK_SOFT)
        c.setFont(SERIF, 9.5)
        c.drawString(x + 100, yy, v)
    y -= 60
    y = section_block(y, "二、目的声明（必须用 1 句话说出今天的具体产出）")
    y -= 4
    y = hline_field(y, "目的声明：这是一场 〔类型〕  会议，今天结束时我们应该 〔具体产出〕", lines=2)
    y -= 4
    y = hline_field(y, "不符合目的声明的反例：「讨论一下」「对一下」「碰一下」", lines=1)
    page_footer(9, 38)

TOOLS.append(T02_01)


def T02_02():
    """T02-02 会议邀请模板"""
    tool_header("T02-02", "会议邀请模板", "M2", "MT-2")
    y = title_block("会议邀请模板（开会前 24h 发出）",
                    "请把以下要素填全——缺一不可")
    y -= 6
    fields = [
        "会议名称：",
        "会议类型（启动 / 决策 / 排查 / 复盘）：",
        "目的声明：",
        "日期 / 时间：",
        "地点 / 链接：",
        "主持人：",
        "必到人员（具体到人，不写「团队」「大家」）：",
        "会前必读材料（如有）：",
        "会前必填信息（如有）：",
        "议程（每项标预计时长）：",
        "1) ___________________（__ 分钟）",
        "2) ___________________（__ 分钟）",
        "3) ___________________（__ 分钟）",
        "需要会后输出的产出物：",
    ]
    for f in fields:
        c.setFillColor(RED_DEEP if not f.startswith("1)") and not f.startswith("2)") and not f.startswith("3)") else INK_SOFT)
        c.setFont(BOLD if ":" in f and not f.startswith("1") and not f.startswith("2") and not f.startswith("3") else SERIF, 10)
        c.drawString(40, y, f)
        y -= 20
        if not (f.startswith("1)") or f.startswith("2)") or f.startswith("3)")):
            c.setStrokeColor(LINE_DARK)
            c.setLineWidth(0.6)
            c.line(40, y - 2, W - 40, y - 2)
            y -= LINE_HEIGHT_BIG - 8
    page_footer(10, 38)

TOOLS.append(T02_02)


def T02_03():
    """T02-03 停车场登记表"""
    tool_header("T02-03", "停车场登记表", "M2", "MT-3")
    y = title_block("停车场登记表",
                    "★ 会议过程中出现「和当前议题无关」的话题 → 写进停车场；不打断当下讨论。")
    y -= 6
    y = section_block(y, "停车场记录（每行 1 个跑题）")
    y -= 4
    y = table_field(y,
                    ["#", "跑题内容（一句话）", "建议讨论时间", "跟进人"],
                    rows=8,
                    col_widths=[30, 200, 130, W - 80 - 30 - 200 - 130])
    y -= 12
    y = section_block(y, "使用规则（请对照执行）")
    y -= 4
    rules = [
        "1.  跑题不超过 3 句——立刻识别为「和当前议题无关」",
        "2.  不说「先放着」——必须明确「什么时候 / 找谁讨论」",
        "3.  会议结束前 5 分钟过停车场——至少定下「今天 / 本周 / 下次会」",
    ]
    for r in rules:
        c.setFillColor(INK_SOFT)
        c.setFont(SERIF, 9.5)
        c.drawString(50, y, r)
        y -= 16
    page_footer(11, 38)

TOOLS.append(T02_03)


def T02_04():
    """T02-04 行动项三要素表"""
    tool_header("T02-04", "行动项三要素表", "M2", "MT-4")
    y = title_block("行动项三要素表",
                    "★ 每条行动项必须含「具体的人 + 具体的动作 + 具体的时间」三要素")
    y -= 6
    y = section_block(y, "行动项清单")
    y -= 4
    y = table_field(y,
                    ["#", "具体的人", "具体的动作（动词开头）", "具体的时间", "验收标准"],
                    rows=8,
                    col_widths=[30, 80, 170, 90, W - 80 - 30 - 80 - 170 - 90])
    y -= 12
    y = section_block(y, "伪行动项识别（出现下列词就重写）")
    y -= 4
    bad = [
        "「团队 / 大家 / 我们 / 部门」 → 重写为「具体人名」",
        "「尽快 / 立刻 / 之后」 → 重写为「具体日期 / 时间」",
        "「跟进 / 看一下 / 了解一下」 → 重写为「具体动作（动词）」",
    ]
    for b in bad:
        c.setFillColor(RED_DEEP)
        c.setFont(SERIF, 10)
        c.drawString(50, y, b)
        y -= 18
    page_footer(12, 38)

TOOLS.append(T02_04)


def T02_05():
    """T02-05 模块二反思日志"""
    tool_header("T02-05", "模块二反思日志", "M2", "RF-2")
    y = title_block("模块二反思日志（会议准则）",
                    "完成日期：____________  学员姓名：____________")
    y -= 6
    y = section_block(y, "一、今天学到的 3 个关键点")
    y -= 4
    y = hline_field(y, "1.", lines=1)
    y -= 4
    y = hline_field(y, "2.", lines=1)
    y -= 4
    y = hline_field(y, "3.", lines=1)
    y -= 8
    y = section_block(y, "二、我之前开会的哪些习惯需要改")
    y -= 4
    y = hline_field(y, "", lines=3)
    y -= 8
    y = section_block(y, "三、下周我会在什么会议里用上 M2 的工具")
    y -= 4
    y = hline_field(y, "会议名：", lines=1)
    y -= 4
    y = hline_field(y, "我会做的 1 个改变：", lines=2)
    page_footer(13, 38)

TOOLS.append(T02_05)


def T03_01():
    """T03-01 利益相关方识别表"""
    tool_header("T03-01", "利益相关方识别表", "M3", "ST-1")
    y = title_block("利益相关方识别表",
                    "学员姓名：____________  当前项目：____________  日期：____________")
    y -= 6
    y = section_block(y, "一、相关方识别（至少列 5 个 · 完整覆盖决策 / 执行 / 影响 / 边缘）")
    y -= 4
    y = table_field(y,
                    ["#", "姓名/角色", "与项目的关系", "对我的期待", "我对他的期待"],
                    rows=8,
                    col_widths=[30, 100, 130, 100, W - 80 - 30 - 100 - 130 - 100])
    y -= 12
    y = section_block(y, "二、漏掉的检查（自检 4 问）")
    y -= 4
    qs = [
        "□  我有没有漏掉「能拍板的人」？",
        "□  我有没有漏掉「会受影响但还没意识到」的人？",
        "□  我有没有漏掉「反对过同类项目」的人？",
        "□  我有没有漏掉「我自己的上级和下属」？",
    ]
    for q in qs:
        c.setFillColor(INK_SOFT)
        c.setFont(SERIF, 10)
        c.drawString(50, y, q)
        y -= 18
    page_footer(14, 38)

TOOLS.append(T03_01)


def T03_02():
    """T03-02 影响力×支持度矩阵"""
    tool_header("T03-02", "影响力×支持度矩阵", "M3", "ST-2")
    y = title_block("影响力 × 支持度矩阵",
                    "把识别出的相关方填到对应象限——右上角是「重点攻克」")
    y -= 6
    y = section_block(y, "矩阵填写（请列 5-8 个关键相关方）")
    y -= 4

    # Draw matrix
    mx, my = 90, y - 220
    mw, mh = 360, 180
    c.setStrokeColor(INK)
    c.setLineWidth(1.2)
    c.rect(mx, my, mw, mh, fill=0, stroke=1)
    c.line(mx + mw/2, my, mx + mw/2, my + mh)  # vertical
    c.line(mx, my + mh/2, mx + mw, my + mh/2)  # horizontal

    # Quadrant labels
    c.setFillColor(RED_DEEP)
    c.setFont(BOLD, 9)
    c.drawString(mx + 6, my + mh - 14, "高支持")
    c.drawString(mx + mw/2 + 6, my + mh - 14, "低支持")
    c.drawString(mx + 6, my + 4, "高支持")
    c.drawString(mx + mw/2 + 6, my + 4, "低支持")

    c.setFont(SERIF, 9)
    c.setFillColor(INK_MID)
    c.drawString(mx + 4, my + mh + 6, "高影响力")
    c.drawString(mx + mw - 50, my + mh + 6, "高影响力")
    c.drawString(mx + 4, my - 14, "低影响力")
    c.drawString(mx + mw - 50, my - 14, "低影响力")

    # Quadrant content placeholders
    contents = [
        (mx + 6, my + mh - 30, "（右上：重点攻克）"),
        (mx + mw/2 + 6, my + mh - 30, "（左上：需要说服）"),
        (mx + 6, my + 6, "（左下：保持沟通）"),
        (mx + mw/2 + 6, my + 6, "（右下：监控即可）"),
    ]
    for x, yy, t in contents:
        c.setFillColor(INK_SOFT)
        c.setFont(SERIF, 9)
        c.drawString(x, yy, t)

    y = my - 30
    y = section_block(y, "右上角（高影响力 + 低支持）的 1-2 人怎么接触")
    y -= 4
    y = hline_field(y, "对象 1：", lines=1)
    y -= 4
    y = hline_field(y, "接触方式：", lines=1)
    y -= 4
    y = hline_field(y, "接触时机：", lines=1)
    page_footer(15, 38)

TOOLS.append(T03_02)


def T03_03():
    """T03-03 引导对话四步记录表"""
    tool_header("T03-03", "引导对话四步记录表", "M3", "ST-3")
    y = title_block("引导对话四步记录表",
                    "★ 跨部门关键对话 1 次 = 填 1 张 · 用 M1 标准句式 + M3 四步")
    y -= 6
    y = section_block(y, "基本信息")
    y -= 4
    y = hline_field(y, "对话对象：", lines=1)
    y -= 4
    y = hline_field(y, "对话目标：", lines=1)
    y -= 4
    y = hline_field(y, "对话时间：", lines=1)
    y -= 8
    y = section_block(y, "Step 1  确认目标一致（不超过 1 分钟）")
    y -= 4
    y = hline_field(y, "我说的目标声明：", lines=2)
    y -= 4
    y = hline_field(y, "对方认可吗？□ 是  □ 否 → 我换一种说法：", lines=1)
    y -= 8
    y = section_block(y, "Step 2  陈述问题（用 M1 5 要素句式）")
    y -= 4
    y = hline_field(y, "范围 / 对象 / 标准 / 偏差 / 后果：", lines=4)
    y -= 8
    y = section_block(y, "Step 3  邀请补充事实")
    y -= 4
    y = hline_field(y, "我邀请的问题：有没有我们没注意到的信息？", lines=2)
    y -= 4
    y = hline_field(y, "对方补充的关键事实：", lines=3)
    y -= 8
    y = section_block(y, "Step 4  共同下一步")
    y -= 4
    y = hline_field(y, "具体人 + 具体动作 + 具体时间：", lines=2)
    page_footer(16, 38)

TOOLS.append(T03_03)


def T03_04():
    """T03-04 模块三反思日志"""
    tool_header("T03-04", "模块三反思日志", "M3", "RF-3")
    y = title_block("模块三反思日志（利益相关方）",
                    "完成日期：____________  学员姓名：____________")
    y -= 6
    y = section_block(y, "一、今天学到的 3 个关键点")
    y -= 4
    y = hline_field(y, "1.", lines=1)
    y -= 4
    y = hline_field(y, "2.", lines=1)
    y -= 4
    y = hline_field(y, "3.", lines=1)
    y -= 8
    y = section_block(y, "二、我之前协调跨部门的哪些做法需要调整")
    y -= 4
    y = hline_field(y, "", lines=3)
    y -= 8
    y = section_block(y, "三、下周我会在什么场景用上 M3")
    y -= 4
    y = hline_field(y, "场景：", lines=1)
    y -= 4
    y = hline_field(y, "我会用：", lines=2)
    page_footer(17, 38)

TOOLS.append(T03_04)


def T04_01():
    """T04-01 三层目标分解表"""
    tool_header("T04-01", "三层目标分解表", "M4", "TL-1")
    y = title_block("三层目标分解表",
                    "把一个混杂的「改进行动清单」按「恢复 / 直接原因 / 根本原因」分层归类")
    y -= 6
    y = section_block(y, "待归类的动作清单（先把所有可能的动作都列出来）")
    y -= 4
    y = table_field(y,
                    ["#", "动作描述（动词开头）"],
                    rows=8,
                    col_widths=[30, W - 80 - 30])
    y -= 12
    y = section_block(y, "三层归类")
    y -= 4
    layers = [
        ("第一层  恢复（Restore）", "立即止血 / 让流程跑起来 · 当下有效", "RED_MID"),
        ("第二层  直接原因（Direct Cause）", "这次为什么出问题 · 近期有效", "GOLD"),
        ("第三层  根本原因（Root Cause）", "为什么这个漏洞会存在 · 长期有效", "GOLD_DEEP"),
    ]
    for label, desc, _ in layers:
        c.setFillColor(RED_DEEP)
        c.setFont(BOLD, 10)
        c.drawString(50, y, label)
        c.setFillColor(INK_SOFT)
        c.setFont(SERIF, 9)
        c.drawString(220, y, desc)
        y -= 16
        c.setStrokeColor(LINE_DARK)
        c.setLineWidth(0.6)
        c.line(50, y - 4, W - 50, y - 4)
        y -= LINE_HEIGHT_BIG - 8
    y -= 4
    y = section_block(y, "自检：第三层有没有被悄悄拖到「再也没人提」？")
    y -= 4
    y = hline_field(y, "我的回答：", lines=2)
    page_footer(18, 38)

TOOLS.append(T04_01)


def T04_02():
    """T04-02 直接原因分析表"""
    tool_header("T04-02", "直接原因分析表", "M4", "TL-2")
    y = title_block("直接原因分析表",
                    "从「现象」出发，找到「这次为什么出问题」的直接原因")
    y -= 6
    y = section_block(y, "现象（用 M1 5 要素句式）")
    y -= 4
    y = hline_field(y, "范围 / 对象 / 标准 / 偏差 / 后果：", lines=3)
    y -= 8
    y = section_block(y, "可能直接原因（至少列 3 个）")
    y -= 4
    y = table_field(y,
                    ["#", "可能直接原因", "支持证据", "反对证据", "是否本次原因"],
                    rows=5,
                    col_widths=[30, 150, 100, 100, W - 80 - 30 - 150 - 100 - 100])
    y -= 12
    y = section_block(y, "确认的本次直接原因 + 验证方式")
    y -= 4
    y = hline_field(y, "直接原因：", lines=1)
    y -= 4
    y = hline_field(y, "我用什么方式验证：", lines=2)
    page_footer(19, 38)

TOOLS.append(T04_02)


def T04_03():
    """T04-03 根本原因 5Why 追问表"""
    tool_header("T04-03", "根本原因 5Why 追问表", "M4", "TL-3")
    y = title_block("根本原因 5Why 追问表",
                    "★ 5 次「为什么」追到「系统原因」（流程 / 标准 / 培训 / 工具 / 沟通），不归个人")
    y -= 6
    y = section_block(y, "起始问题（直接原因）")
    y -= 4
    y = hline_field(y, "为什么这个问题会发生？", lines=2)
    y -= 8
    y = section_block(y, "5 Why 追问链")
    y -= 4
    for i in range(1, 7):
        c.setFillColor(RED_DEEP)
        c.setFont(BOLD, 10)
        c.drawString(40, y, f"Why {i}：")
        c.setStrokeColor(LINE_DARK)
        c.setLineWidth(0.6)
        c.line(80, y - 4, W - 40, y - 4)
        y -= LINE_HEIGHT_BIG
    y -= 4
    y = section_block(y, "根因类别（请勾选 · 可多选）")
    y -= 4
    cats = [
        "□  流程（没有清晰流程 / 流程有漏洞）",
        "□  标准（没有清晰标准 / 标准过时）",
        "□  培训（相关人不知道 / 不熟练）",
        "□  工具（工具不支持 / 工具缺失）",
        "□  沟通（信息没传达到 / 沟通有损耗）",
    ]
    for c1 in cats:
        c.setFillColor(INK_SOFT)
        c.setFont(SERIF, 10)
        c.drawString(50, y, c1)
        y -= 16
    page_footer(20, 38)

TOOLS.append(T04_03)


def T04_04():
    """T04-04 改进行动评估三标准表"""
    tool_header("T04-04", "改进行动评估三标准表", "M4", "TL-4")
    y = title_block("改进行动评估三标准表",
                    "★ 评估每个改进行动：有效性 / 可执行性 / 副作用 · 1-5 分")
    y -= 6
    y = section_block(y, "改进行动清单（至少 3 个）")
    y -= 4
    y = table_field(y,
                    ["#", "改进行动", "有效性", "可执行性", "副作用", "总分", "决策"],
                    rows=6,
                    col_widths=[30, 150, 60, 60, 60, 40, W - 80 - 30 - 150 - 60 - 60 - 60 - 40])
    y -= 12
    y = section_block(y, "副作用推演（用「如果……那么……」格式）")
    y -= 4
    y = hline_field(y, "如果实施「_______」，那么可能产生「_______」副作用", lines=2)
    y -= 4
    y = hline_field(y, "应对副作用的预案：", lines=2)
    y -= 8
    y = section_block(y, "决策原则（自检 3 问）")
    y -= 4
    qs = [
        "□  有效性低 / 可执行性低 / 副作用大 → 不做",
        "□  有效性高 / 可执行性低 → 拆解到可执行",
        "□  副作用无法消除 → 设计试行方案",
    ]
    for q in qs:
        c.setFillColor(INK_SOFT)
        c.setFont(SERIF, 9.5)
        c.drawString(50, y, q)
        y -= 16
    page_footer(21, 38)

TOOLS.append(T04_04)


def T04_05():
    """T04-05 模块四反思日志"""
    tool_header("T04-05", "模块四反思日志（含第一天整合反思）", "M4", "RF-4")
    y = title_block("模块四反思日志（三层目标 · 含第一天整合反思）",
                    "完成日期：____________  学员姓名：____________")
    y -= 6
    y = section_block(y, "一、今天学到的 3 个关键点")
    y -= 4
    y = hline_field(y, "1.", lines=1)
    y -= 4
    y = hline_field(y, "2.", lines=1)
    y -= 4
    y = hline_field(y, "3.", lines=1)
    y -= 8
    y = section_block(y, "二、M1-M4 整合：4 步走完一个真实问题（用自己场景）")
    y -= 4
    y = hline_field(y, "M1 陈述问题：", lines=2)
    y -= 4
    y = hline_field(y, "M2 会议准则：", lines=2)
    y -= 4
    y = hline_field(y, "M3 引导对话：", lines=2)
    y -= 4
    y = hline_field(y, "M4 三层目标：", lines=2)
    y -= 8
    y = section_block(y, "三、第一天最深的 1 个觉察")
    y -= 4
    y = hline_field(y, "", lines=3)
    page_footer(22, 38)

TOOLS.append(T04_05)


def T05_01():
    """T05-01 IS/IS NOT 对比表"""
    tool_header("T05-01", "IS/IS NOT 对比表", "M5", "PD-1")
    y = title_block("IS / IS NOT 对比表（现象界定）",
                    "★ 5 维度都填 · IS NOT 至少 3 条 · 程度维度要具体")
    y -= 6
    y = section_block(y, "问题陈述（用 M1 5 要素）")
    y -= 4
    y = hline_field(y, "范围 / 对象 / 标准 / 偏差 / 后果：", lines=3)
    y -= 8
    y = section_block(y, "5 维度 IS / IS NOT 填写")
    y -= 4

    headers = ["维度", "IS（是什么）", "IS NOT（不是什么）"]
    col_w = [70, 170, W - 80 - 70 - 170]
    # Header
    c.setFillColor(RED_DEEP)
    c.rect(40, y - 18, sum(col_w), 22, fill=1, stroke=0)
    c.setFillColor(PAPER_LIGHT)
    c.setFont(BOLD, 10)
    x = 40
    for h, w in zip(headers, col_w):
        c.drawString(x + 6, y - 12, h)
        x += w
    y -= 22
    dims = ["What  什么对象", "Where  什么位置", "When  什么时候", "Who  涉及谁", "程度  偏差多大"]
    for d in dims:
        c.setFillColor(PAPER_LIGHT)
        c.rect(40, y - LINE_HEIGHT_BIG - 4, sum(col_w), LINE_HEIGHT_BIG + 4, fill=1, stroke=0)
        c.setStrokeColor(LINE_DARK)
        c.setLineWidth(0.4)
        x = 40
        for w in col_w[:-1]:
            x += w
            c.line(x, y - LINE_HEIGHT_BIG - 4, x, y + 4)
        c.setFillColor(INK)
        c.setFont(BOLD, 9.5)
        c.drawString(46, y - 16, d)
        y -= LINE_HEIGHT_BIG + 4
    y -= 6
    y = section_block(y, "对比基线（1 句话说清「相对什么对比」）")
    y -= 4
    y = hline_field(y, "对比基线：", lines=1)
    page_footer(23, 38)

TOOLS.append(T05_01)


def T05_02():
    """T05-02 五维度根因追问表"""
    tool_header("T05-02", "五维度根因追问表", "M5", "PD-2")
    y = title_block("五维度根因追问表",
                    "★ 沿 5 个维度追问「为什么这个漏洞会存在」")
    y -= 6
    y = section_block(y, "5 维度追问")
    y -= 4
    headers = ["维度", "具体漏洞", "为什么这个漏洞存在", "改进行动"]
    col_w = [80, 140, 160, W - 80 - 80 - 140 - 160]
    c.setFillColor(RED_DEEP)
    c.rect(40, y - 18, sum(col_w), 22, fill=1, stroke=0)
    c.setFillColor(PAPER_LIGHT)
    c.setFont(BOLD, 10)
    x = 40
    for h, w in zip(headers, col_w):
        c.drawString(x + 6, y - 12, h)
        x += w
    y -= 22
    dims = ["流程", "标准", "培训", "工具", "沟通"]
    for d in dims:
        c.setFillColor(PAPER_LIGHT)
        c.rect(40, y - LINE_HEIGHT_BIG - 4, sum(col_w), LINE_HEIGHT_BIG + 4, fill=1, stroke=0)
        c.setStrokeColor(LINE_DARK)
        c.setLineWidth(0.4)
        x = 40
        for w in col_w[:-1]:
            x += w
            c.line(x, y - LINE_HEIGHT_BIG - 4, x, y + 4)
        c.setFillColor(INK)
        c.setFont(BOLD, 9.5)
        c.drawString(46, y - 16, d)
        y -= LINE_HEIGHT_BIG + 4
    y -= 6
    y = section_block(y, "是否归到系统层面（非个人）？")
    y -= 4
    y = hline_field(y, "我的回答：", lines=1)
    page_footer(24, 38)

TOOLS.append(T05_02)


def T05_03():
    """T05-03 模块五反思日志"""
    tool_header("T05-03", "模块五反思日志", "M5", "RF-5")
    y = title_block("模块五反思日志（现象界定与根因追问）",
                    "完成日期：____________  学员姓名：____________")
    y -= 6
    y = section_block(y, "一、今天学到的 3 个关键点")
    y -= 4
    y = hline_field(y, "1.", lines=1)
    y -= 4
    y = hline_field(y, "2.", lines=1)
    y -= 4
    y = hline_field(y, "3.", lines=1)
    y -= 8
    y = section_block(y, "二、我之前找原因的哪些做法需要调整")
    y -= 4
    y = hline_field(y, "", lines=3)
    y -= 8
    y = section_block(y, "三、我会用 IS/IS NOT 来处理哪个真实问题")
    y -= 4
    y = hline_field(y, "场景：", lines=2)
    page_footer(25, 38)

TOOLS.append(T05_03)


def T06_01():
    """T06-01 偏离信号清单"""
    tool_header("T06-01", "偏离信号清单（参考卡）", "M6", "RB-1")
    y = title_block("偏离信号清单（参考卡）",
                    "★ 4 维度自查 · 早识别 · 不等问题变大")
    y -= 6
    y = section_block(y, "4 维度早期信号")
    y -= 4
    headers = ["维度", "早期信号（1-3 个观察项）", "我项目的具体表现"]
    col_w = [70, 200, W - 80 - 70 - 200]
    c.setFillColor(RED_DEEP)
    c.rect(40, y - 18, sum(col_w), 22, fill=1, stroke=0)
    c.setFillColor(PAPER_LIGHT)
    c.setFont(BOLD, 10)
    x = 40
    for h, w in zip(headers, col_w):
        c.drawString(x + 6, y - 12, h)
        x += w
    y -= 22
    dims = [
        ("进度", "里程碑晚于计划 / 关键路径延期 / 任务积压"),
        ("质量", "返工率上升 / 缺陷率上升 / 客户反馈增加"),
        ("沟通", "会议跑题 / 邮件 / 群消息变多 / 决策迟滞"),
        ("资源", "关键人离开 / 资源被临时征用 / 预算超支"),
    ]
    for d, signals in dims:
        c.setFillColor(PAPER_LIGHT)
        c.rect(40, y - LINE_HEIGHT_BIG - 4, sum(col_w), LINE_HEIGHT_BIG + 4, fill=1, stroke=0)
        c.setStrokeColor(LINE_DARK)
        c.setLineWidth(0.4)
        x = 40
        for w in col_w[:-1]:
            x += w
            c.line(x, y - LINE_HEIGHT_BIG - 4, x, y + 4)
        c.setFillColor(INK)
        c.setFont(BOLD, 9.5)
        c.drawString(46, y - 16, d)
        c.setFillColor(INK_SOFT)
        c.setFont(SERIF, 9)
        c.drawString(116, y - 16, signals)
        y -= LINE_HEIGHT_BIG + 4
    y -= 6
    y = section_block(y, "分级决策（按偏离程度选择）")
    y -= 4
    levels = [
        ("□  坚持", "偏离 < 10% · 不调整"),
        ("□  调整", "偏离 10-30% · 调整方案"),
        ("□  止损", "偏离 > 30% · 暂停重评估"),
    ]
    for k, v in levels:
        c.setFillColor(RED_DEEP)
        c.setFont(BOLD, 10)
        c.drawString(50, y, k)
        c.setFillColor(INK_SOFT)
        c.setFont(SERIF, 9.5)
        c.drawString(150, y, v)
        y -= 18
    page_footer(26, 38)

TOOLS.append(T06_01)


def T06_02():
    """T06-02 纠偏对话四步记录表"""
    tool_header("T06-02", "纠偏对话四步记录表", "M6", "RB-2")
    y = title_block("纠偏对话四步记录表",
                    "★ 项目偏离计划时使用 · 4 步 · 1 张表 · 1 次纠偏")
    y -= 6
    y = section_block(y, "基本信息")
    y -= 4
    y = hline_field(y, "纠偏对象 / 项目：", lines=1)
    y -= 4
    y = hline_field(y, "对话时间：", lines=1)
    y -= 8
    y = section_block(y, "Step 1  现状（偏离了什么 · 用数据说话）")
    y -= 4
    y = hline_field(y, "", lines=3)
    y -= 8
    y = section_block(y, "Step 2  影响（不纠偏会怎么样）")
    y -= 4
    y = hline_field(y, "", lines=2)
    y -= 8
    y = section_block(y, "Step 3  选项（坚持 / 调整 / 止损 · 三选都要过）")
    y -= 4
    y = hline_field(y, "坚持：", lines=1)
    y -= 4
    y = hline_field(y, "调整：", lines=1)
    y -= 4
    y = hline_field(y, "止损：", lines=1)
    y -= 8
    y = section_block(y, "Step 4  共识（下次什么时间再 review）")
    y -= 4
    y = hline_field(y, "", lines=2)
    page_footer(27, 38)

TOOLS.append(T06_02)


def T06_03():
    """T06-03 模块六反思日志"""
    tool_header("T06-03", "模块六反思日志", "M6", "RF-6")
    y = title_block("模块六反思日志（回到正轨）",
                    "完成日期：____________  学员姓名：____________")
    y -= 6
    y = section_block(y, "一、今天学到的 3 个关键点")
    y -= 4
    y = hline_field(y, "1.", lines=1)
    y -= 4
    y = hline_field(y, "2.", lines=1)
    y -= 4
    y = hline_field(y, "3.", lines=1)
    y -= 8
    y = section_block(y, "二、当前我手上哪个项目/任务需要纠偏")
    y -= 4
    y = hline_field(y, "", lines=3)
    y -= 8
    y = section_block(y, "三、我会用纠偏 4 步处理：")
    y -= 4
    y = hline_field(y, "", lines=2)
    page_footer(28, 38)

TOOLS.append(T06_03)


def T07_01():
    """T07-01 潜在问题预演表"""
    tool_header("T07-01", "潜在问题预演表", "M7", "RP-1")
    y = title_block("潜在问题预演表",
                    "★ 行动前 1-2 天做 · 4 列 · 至少 5 个潜在问题")
    y -= 6
    y = section_block(y, "即将执行的行动")
    y -= 4
    y = hline_field(y, "行动名：", lines=1)
    y -= 4
    y = hline_field(y, "执行时间：", lines=1)
    y -= 8
    y = section_block(y, "4 列预演")
    y -= 4
    headers = ["#", "潜在问题", "触发条件", "应对预案", "责任人"]
    col_w = [30, 130, 110, 130, W - 80 - 30 - 130 - 110 - 130]
    c.setFillColor(RED_DEEP)
    c.rect(40, y - 18, sum(col_w), 22, fill=1, stroke=0)
    c.setFillColor(PAPER_LIGHT)
    c.setFont(BOLD, 10)
    x = 40
    for h, w in zip(headers, col_w):
        c.drawString(x + 6, y - 12, h)
        x += w
    y -= 22
    for _ in range(6):
        c.setFillColor(PAPER_LIGHT)
        c.rect(40, y - LINE_HEIGHT_BIG - 4, sum(col_w), LINE_HEIGHT_BIG + 4, fill=1, stroke=0)
        c.setStrokeColor(LINE_DARK)
        c.setLineWidth(0.4)
        x = 40
        for w in col_w[:-1]:
            x += w
            c.line(x, y - LINE_HEIGHT_BIG - 4, x, y + 4)
        y -= LINE_HEIGHT_BIG + 4
    y -= 6
    y = section_block(y, "优先级排序（最可能 + 影响最大的）")
    y -= 4
    y = hline_field(y, "Top 3：", lines=1)
    page_footer(29, 38)

TOOLS.append(T07_01)


def T07_02():
    """T07-02 回滚标准卡"""
    tool_header("T07-02", "回滚标准卡", "M7", "RP-2")
    y = title_block("回滚标准卡",
                    "★ 行动执行前 1-2 天定好 · 出问题不慌乱")
    y -= 6
    y = section_block(y, "基本信息")
    y -= 4
    y = hline_field(y, "行动名：", lines=1)
    y -= 4
    y = hline_field(y, "执行时间：", lines=1)
    y -= 4
    y = hline_field(y, "决策者：", lines=1)
    y -= 8
    y = section_block(y, "触发回滚的标准（出现以下任何 1 条就回滚）")
    y -= 4
    y = table_field(y, ["#", "回滚触发条件（具体可观察的信号）"], rows=4,
                    col_widths=[30, W - 80 - 30])
    y -= 12
    y = section_block(y, "回滚执行步骤（按顺序）")
    y -= 4
    y = table_field(y, ["#", "回滚动作", "执行人", "时间要求"],
                    rows=5,
                    col_widths=[30, 200, 100, W - 80 - 30 - 200 - 100])
    y -= 12
    y = section_block(y, "回滚后的汇报路径")
    y -= 4
    y = hline_field(y, "1. 第一步告诉谁：", lines=1)
    y -= 4
    y = hline_field(y, "2. 多久之内：", lines=1)
    page_footer(30, 38)

TOOLS.append(T07_02)


def T07_03():
    """T07-03 模块七反思日志"""
    tool_header("T07-03", "模块七反思日志", "M7", "RF-7")
    y = title_block("模块七反思日志（潜在问题预演）",
                    "完成日期：____________  学员姓名：____________")
    y -= 6
    y = section_block(y, "一、今天学到的 3 个关键点")
    y -= 4
    y = hline_field(y, "1.", lines=1)
    y -= 4
    y = hline_field(y, "2.", lines=1)
    y -= 4
    y = hline_field(y, "3.", lines=1)
    y -= 8
    y = section_block(y, "二、我下周会预演哪个行动")
    y -= 4
    y = hline_field(y, "行动名：", lines=1)
    y -= 4
    y = hline_field(y, "我会预演的潜在问题：", lines=3)
    y -= 8
    y = section_block(y, "三、我会为这个行动定的回滚标准")
    y -= 4
    y = hline_field(y, "", lines=2)
    page_footer(31, 38)

TOOLS.append(T07_03)


def T08_01():
    """T08-01 全流程演练案例包"""
    tool_header("T08-01", "全流程演练案例包", "M8", "EX-1")
    y = title_block("全流程演练案例包",
                    "★ 选 1 个真实场景 · 60 分钟 · 走完 M1-M7 全流程")
    y -= 6
    y = section_block(y, "案例场景（请自选 1 个真实工作场景）")
    y -= 4
    y = hline_field(y, "场景名：", lines=1)
    y -= 4
    y = hline_field(y, "背景描述：", lines=3)
    y -= 4
    y = hline_field(y, "为什么重要：", lines=2)
    y -= 8
    y = section_block(y, "M1  应用（标准问题陈述句式）")
    y -= 4
    y = hline_field(y, "我陈述的问题：", lines=3)
    y -= 8
    y = section_block(y, "M2  应用（会议准则）")
    y -= 4
    y = hline_field(y, "我会开的会议 + 目的声明 + 行动项三要素：", lines=3)
    y -= 8
    y = section_block(y, "M3  应用（利益相关方）")
    y -= 4
    y = hline_field(y, "我识别的关键相关方 + 引导对话：", lines=3)
    y -= 8
    y = section_block(y, "M4  应用（三层目标）")
    y -= 4
    y = hline_field(y, "我的三层分解：", lines=3)
    y -= 8
    y = section_block(y, "M5  应用（IS/IS NOT）")
    y -= 4
    y = hline_field(y, "我的 5 维度对比：", lines=3)
    page_footer(32, 38)

TOOLS.append(T08_01)


def T08_02():
    """T08-02 综合演练评估表"""
    tool_header("T08-02", "综合演练评估表", "M8", "EX-2")
    y = title_block("综合演练评估表（讲师 / 学员互评）",
                    "★ 1-5 分 · 5=完全做到 · 1=完全没做到")
    y -= 6
    y = section_block(y, "基本信息")
    y -= 4
    y = hline_field(y, "评估对象：", lines=1)
    y -= 4
    y = hline_field(y, "评估人：", lines=1)
    y -= 4
    y = hline_field(y, "演练场景：", lines=1)
    y -= 8
    y = section_block(y, "M1-M7 应用评估")
    y -= 4
    headers = ["模块", "评分", "亮点", "待改进"]
    col_w = [60, 60, 180, W - 80 - 60 - 60 - 180]
    c.setFillColor(RED_DEEP)
    c.rect(40, y - 18, sum(col_w), 22, fill=1, stroke=0)
    c.setFillColor(PAPER_LIGHT)
    c.setFont(BOLD, 10)
    x = 40
    for h, w in zip(headers, col_w):
        c.drawString(x + 6, y - 12, h)
        x += w
    y -= 22
    mods = ["M1  共同语言", "M2  会议准则", "M3  利益相关方", "M4  三层目标",
            "M5  现象界定", "M6  回到正轨", "M7  预演"]
    for m in mods:
        c.setFillColor(PAPER_LIGHT)
        c.rect(40, y - LINE_HEIGHT_BIG - 4, sum(col_w), LINE_HEIGHT_BIG + 4, fill=1, stroke=0)
        c.setStrokeColor(LINE_DARK)
        c.setLineWidth(0.4)
        x = 40
        for w in col_w[:-1]:
            x += w
            c.line(x, y - LINE_HEIGHT_BIG - 4, x, y + 4)
        c.setFillColor(INK)
        c.setFont(BOLD, 9.5)
        c.drawString(46, y - 16, m)
        y -= LINE_HEIGHT_BIG + 4
    y -= 6
    y = section_block(y, "综合评价")
    y -= 4
    y = hline_field(y, "1 个亮点：", lines=2)
    y -= 4
    y = hline_field(y, "1 个待改进：", lines=2)
    y -= 4
    y = hline_field(y, "建议下一步：", lines=1)
    page_footer(33, 38)

TOOLS.append(T08_02)


def T08_03():
    """T08-03 模块八反思日志"""
    tool_header("T08-03", "模块八反思日志", "M8", "RF-8")
    y = title_block("模块八反思日志（综合演练）",
                    "完成日期：____________  学员姓名：____________")
    y -= 6
    y = section_block(y, "一、今天综合演练的 1 个亮点")
    y -= 4
    y = hline_field(y, "", lines=2)
    y -= 8
    y = section_block(y, "二、综合演练的 1 个挑战")
    y -= 4
    y = hline_field(y, "", lines=2)
    y -= 8
    y = section_block(y, "三、回到工作后 30 天，我最想用的 3 个工具")
    y -= 4
    y = hline_field(y, "1.", lines=1)
    y -= 4
    y = hline_field(y, "2.", lines=1)
    y -= 4
    y = hline_field(y, "3.", lines=1)
    y -= 8
    y = section_block(y, "四、整门课最大的 1 个收获")
    y -= 4
    y = hline_field(y, "", lines=3)
    page_footer(34, 38)

TOOLS.append(T08_03)


def T09_01():
    """T09-01 30 天行动计划表"""
    tool_header("T09-01", "30 天行动计划表", "综合跟进", "AP-2")
    y = title_block("30 天行动计划表",
                    "★ D-Day 后 30 天 · 每周回顾 1 次 · 4 周全部完成")
    y -= 6
    y = section_block(y, "行动 1：")
    y -= 4
    y = hline_field(y, "具体动作：", lines=1)
    y -= 4
    y = hline_field(y, "用哪个工具：", lines=1)
    y -= 4
    y = hline_field(y, "预期产出：", lines=1)
    y -= 4
    y = hline_field(y, "第 1 周进度：", lines=1)
    y -= 4
    y = hline_field(y, "第 2 周进度：", lines=1)
    y -= 4
    y = hline_field(y, "第 3 周进度：", lines=1)
    y -= 4
    y = hline_field(y, "第 4 周进度：", lines=1)
    y -= 4
    y = hline_field(y, "可能障碍：", lines=1)
    y -= 4
    y = hline_field(y, "应对方式：", lines=1)
    y -= 8
    y = section_block(y, "行动 2：")
    y -= 4
    y = hline_field(y, "具体动作：", lines=1)
    y -= 4
    y = hline_field(y, "用哪个工具：", lines=1)
    y -= 4
    y = hline_field(y, "预期产出：", lines=1)
    y -= 4
    y = hline_field(y, "第 1 周进度：", lines=1)
    y -= 4
    y = hline_field(y, "第 2 周进度：", lines=1)
    y -= 4
    y = hline_field(y, "第 3 周进度：", lines=1)
    y -= 4
    y = hline_field(y, "第 4 周进度：", lines=1)
    page_footer(35, 38)

TOOLS.append(T09_01)


def T09_02():
    """T09-02 30 天行为重测自评"""
    tool_header("T09-02", "30 天行为重测自评", "综合跟进", "RT-1")
    y = title_block("30 天行为重测自评",
                    "★ 完成日期：____________  学员姓名：____________")
    y -= 6
    y = section_block(y, "行为频次自评（过去 30 天实际使用频次）")
    y -= 4
    items = [
        ("M1 标准句式", "0 次 / 1-2 次 / 3-5 次 / 6 次以上"),
        ("M2 目的声明", "0 次 / 1-2 次 / 3-5 次 / 6 次以上"),
        ("M2 行动项三要素", "0 次 / 1-2 次 / 3-5 次 / 6 次以上"),
        ("M3 引导对话四步", "0 次 / 1-2 次 / 3-5 次 / 6 次以上"),
        ("M4 三层分解", "0 次 / 1-2 次 / 3-5 次 / 6 次以上"),
        ("M5 IS/IS NOT", "0 次 / 1-2 次 / 3-5 次 / 6 次以上"),
        ("M6 纠偏对话", "0 次 / 1-2 次 / 3-5 次 / 6 次以上"),
        ("M7 预演 + 回滚", "0 次 / 1-2 次 / 3-5 次 / 6 次以上"),
    ]
    for k, v in items:
        c.setFillColor(INK)
        c.setFont(BOLD, 10)
        c.drawString(40, y, k)
        c.setFillColor(INK_SOFT)
        c.setFont(SERIF, 9)
        c.drawString(160, y, v)
        # Checkbox spaces
        for i, ox in enumerate([330, 380, 420, 460]):
            c.setStrokeColor(INK_SOFT)
            c.setLineWidth(0.6)
            c.setFillColor(PAPER_LIGHT)
            c.rect(ox, y - 4, 10, 10, fill=1, stroke=1)
        y -= 22
    y -= 6
    y = section_block(y, "自评 3 问")
    y -= 4
    y = hline_field(y, "1. 我最常用的工具是：", lines=1)
    y -= 4
    y = hline_field(y, "2. 我最常用的场景是：", lines=1)
    y -= 4
    y = hline_field(y, "3. 我觉得还可以更好的地方：", lines=2)
    page_footer(36, 38)

TOOLS.append(T09_02)


def T09_03():
    """T09-03 行为承诺卡"""
    tool_header("T09-03", "行为承诺卡", "综合跟进", "CT-1")
    y = title_block("行为承诺卡",
                    "★ D-Day 当天填写 · 签名 · D+30 回看")
    y -= 6
    y = section_block(y, "我的承诺（写给自己看 · 不要夸张）")
    y -= 4
    y = hline_field(y, "1. 我承诺今后 30 天：", lines=2)
    y -= 4
    y = hline_field(y, "2. 我承诺在 〔什么场景〕  用 〔什么工具〕：", lines=2)
    y -= 4
    y = hline_field(y, "3. 我承诺 30 天后回看：", lines=2)
    y -= 8
    y = section_block(y, "签名")
    y -= 4
    y = hline_field(y, "我，____________（姓名），做出以上承诺。", lines=1)
    y -= 4
    y = hline_field(y, "签名：________________  日期：________________  见证人：________________", lines=1)
    y -= 8
    y = section_block(y, "D+30 回看")
    y -= 4
    y = hline_field(y, "1. 我做到第 1 条了吗？□ 是 □ 否 → 原因是：", lines=1)
    y -= 4
    y = hline_field(y, "2. 我做到第 2 条了吗？□ 是 □ 否 → 原因是：", lines=1)
    y -= 4
    y = hline_field(y, "3. 我做到第 3 条了吗？□ 是 □ 否 → 原因是：", lines=1)
    y -= 4
    y = hline_field(y, "我对自己的评价：", lines=2)
    page_footer(37, 38)

TOOLS.append(T09_03)


def T09_04():
    """T09-04 项目复盘 demo 模板"""
    tool_header("T09-04", "项目复盘 demo 模板", "综合跟进", "PR-1")
    y = title_block("项目复盘 demo 模板",
                    "★ 课程结束 1 个真实项目完成后 · 用 M1-M7 全流程复盘")
    y -= 6
    y = section_block(y, "项目基本信息")
    y -= 4
    y = hline_field(y, "项目名：", lines=1)
    y -= 4
    y = hline_field(y, "起止时间：", lines=1)
    y -= 4
    y = hline_field(y, "复盘日期：", lines=1)
    y -= 4
    y = hline_field(y, "复盘人：", lines=1)
    y -= 8
    y = section_block(y, "M1  当时是怎么陈述这个问题的？陈述得好吗？")
    y -= 4
    y = hline_field(y, "", lines=3)
    y -= 8
    y = section_block(y, "M2  当时开过什么会议？会议有效果吗？")
    y -= 4
    y = hline_field(y, "", lines=3)
    y -= 8
    y = section_block(y, "M3  当时识别了哪些关键相关方？引导对话到位吗？")
    y -= 4
    y = hline_field(y, "", lines=3)
    y -= 8
    y = section_block(y, "M4  当时的三层分解到位吗？直接原因 / 根本原因各是什么？")
    y -= 4
    y = hline_field(y, "", lines=3)
    y -= 8
    y = section_block(y, "M5  当时找原因时 IS/IS NOT 用到了吗？哪一步最有帮助？")
    y -= 4
    y = hline_field(y, "", lines=3)
    y -= 8
    y = section_block(y, "M6  当时有没有偏离计划？纠偏对话做得怎么样？")
    y -= 4
    y = hline_field(y, "", lines=3)
    y -= 8
    y = section_block(y, "M7  当时预演过潜在问题吗？回滚标准用上了吗？")
    y -= 4
    y = hline_field(y, "", lines=3)
    y -= 8
    y = section_block(y, "总评：做得最好的 1 件事 / 最该改的 1 件事")
    y -= 4
    y = hline_field(y, "最好的 1 件事：", lines=2)
    y -= 4
    y = hline_field(y, "最该改的 1 件事：", lines=2)
    page_footer(38, 38)

TOOLS.append(T09_04)


# ============== COVER PAGE ==============
def cover():
    c.setFillColor(RED_DEEP)
    c.rect(0, 0, W, H, fill=1, stroke=0)

    # Gold border inset
    c.setStrokeColor(GOLD)
    c.setLineWidth(2)
    c.rect(20, 20, W - 40, H - 40, fill=0, stroke=1)
    c.setStrokeColor(GOLD)
    c.setLineWidth(0.5)
    c.rect(28, 28, W - 56, H - 56, fill=0, stroke=1)

    # Eyebrow
    c.setFillColor(GOLD)
    c.setFont(BOLD, 11)
    c.drawString(60, H - 100, "TOOL  FORMS  ·  PRINT  EDITION  ·  v1.0  ·  2026")

    # Title
    c.setFillColor(PAPER_LIGHT)
    c.setFont(SERIF, 48)
    c.drawString(60, H - 200, "工具表单打印版")
    c.setFont(SERIF, 22)
    c.drawString(60, H - 240, "学员人手一册 ·  37 件工具 ·  打印即用")

    # Description
    c.setFillColor(GOLD)
    c.setFont(SERIF, 12)
    desc = [
        "本册是《共同语言》课程的全套配套工具的「打印版」——",
        "每一件工具都被设计为「学员可以手写填写」的格式：",
        "1.5 倍行高（手写更舒适）、明确的填写区域、清晰的能力点对应。",
        "",
        "建议装订顺序：从 T00-01 到 T09-04，",
        "与课程模块顺序保持一致——便于学员随堂填写、随用随查。",
    ]
    y = H - 300
    for line in desc:
        c.drawString(60, y, line)
        y -= 18

    # Stats
    sy = 280
    c.setFillColor(GOLD)
    c.setLineWidth(1)
    c.line(60, sy, W - 60, sy)
    c.setFont(BOLD, 11)
    c.drawString(60, sy - 24, "37")
    c.setFont(SERIF, 10)
    c.drawString(110, sy - 22, "件工具")
    c.setFont(BOLD, 11)
    c.drawString(180, sy - 24, "8")
    c.setFont(SERIF, 10)
    c.drawString(210, sy - 22, "个模块")
    c.setFont(BOLD, 11)
    c.drawString(280, sy - 24, "4")
    c.setFont(SERIF, 10)
    c.drawString(310, sy - 22, "大类工具")
    c.setFont(BOLD, 11)
    c.drawString(380, sy - 24, "A4")
    c.setFont(SERIF, 10)
    c.drawString(420, sy - 22, "竖版打印")
    c.setLineWidth(1)
    c.line(60, sy - 40, W - 60, sy - 40)

    # Bottom
    c.setFillColor(PAPER_LIGHT)
    c.setFont(SERIF, 16)
    c.drawString(60, 160, "共同语言：高效项目执行与问题解决工作坊")
    c.setFont(SERIF, 11)
    c.setFillColor(GOLD)
    c.drawString(60, 130, "主讲：罗宏伟  ·  行动学习催化师")
    c.setFont(SANS, 9)
    c.setFillColor(GOLD)
    c.drawString(60, 90, "VERSION 1.0  ·  ESTABLISHED 2026  ·  配套课程包使用")

    c.showPage()

cover()

# Render all tools
for tool_fn in TOOLS:
    tool_fn()
    c.showPage()

# Final blank
c.save()
print(f"Created: {OUT}")
print(f"Size: {os.path.getsize(OUT)} bytes")
print(f"Tools rendered: {len(TOOLS)}")
