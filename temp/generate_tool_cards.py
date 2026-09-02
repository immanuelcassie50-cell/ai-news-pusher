#!/usr/bin/env python3
"""
生成德鲁克《人事决策》课程可打印工具卡 PDF
A5尺寸 (148mm x 210mm)，浅色背景，红灰配色
"""

from reportlab.lib.pagesizes import A5
from reportlab.lib.units import mm
from reportlab.pdfgen import canvas
from reportlab.lib.colors import HexColor, white, black
import os

# 配色方案
COLORS = {
    'bg': white,  # 白色背景
    'accent': HexColor('#C41E3A'),  # 中国红强调
    'accent_light': HexColor('#FFE4E1'),  # 浅红背景
    'text_dark': HexColor('#2D2D2D'),  # 深灰文字
    'text_gray': HexColor('#666666'),  # 中灰文字
    'text_light': HexColor('#999999'),  # 浅灰文字
    'border': HexColor('#DDDDDD'),  # 边框灰
    'fill_area': HexColor('#F5F5F5'),  # 填写区域灰
    'header_bg': HexColor('#4A4A4A'),  # 头部背景灰
}

# 页面尺寸 (A5)
PAGE_WIDTH, PAGE_HEIGHT = A5  # 148mm x 210mm

OUTPUT_DIR = r"D:\新课开发\德鲁克\人事决策\完整课程包\14_可打印工具卡"

def draw_header(c, title, subtitle=""):
    """绘制页面头部"""
    c.setFillColor(COLORS['header_bg'])
    c.rect(0, PAGE_HEIGHT - 35*mm, PAGE_WIDTH, 35*mm, fill=True, stroke=False)

    c.setFillColor(white)
    c.setFont("Helvetica-Bold", 14)
    c.drawString(15*mm, PAGE_HEIGHT - 18*mm, title)

    if subtitle:
        c.setFont("Helvetica", 8)
        c.setFillColor(HexColor('#CCCCCC'))
        c.drawString(15*mm, PAGE_HEIGHT - 28*mm, subtitle)

    c.setStrokeColor(COLORS['accent'])
    c.setLineWidth(2)
    c.line(0, PAGE_HEIGHT - 35*mm, PAGE_WIDTH, PAGE_HEIGHT - 35*mm)

def draw_footer(c, page_num):
    """绘制页面底部"""
    c.setStrokeColor(COLORS['border'])
    c.setLineWidth(0.5)
    c.line(15*mm, 12*mm, PAGE_WIDTH - 15*mm, 12*mm)

    c.setFillColor(COLORS['text_light'])
    c.setFont("Helvetica", 7)
    c.drawString(15*mm, 7*mm, "德鲁克《人事决策》课程 | 可打印工具卡")
    c.drawRightString(PAGE_WIDTH - 15*mm, 7*mm, f"- {page_num} -")

def draw_section_title(c, text, y):
    """绘制小节标题（带红色左边框）"""
    c.setFillColor(COLORS['accent'])
    c.rect(15*mm, y - 2*mm, 3*mm, 8*mm, fill=True, stroke=False)

    c.setFillColor(COLORS['text_dark'])
    c.setFont("Helvetica-Bold", 10)
    c.drawString(20*mm, y, text)
    return y - 12*mm

def draw_fill_field(c, label, y, width=None):
    """绘制填写区域"""
    if width is None:
        width = PAGE_WIDTH - 30*mm

    c.setFillColor(COLORS['text_gray'])
    c.setFont("Helvetica", 8)
    c.drawString(15*mm, y, label)

    c.setStrokeColor(COLORS['border'])
    c.setLineWidth(0.5)
    c.line(15*mm, y - 3*mm, 15*mm + width, y - 3*mm)
    return y - 10*mm

def draw_number_circle(c, x, y, num, color=None):
    """绘制数字圆圈"""
    if color is None:
        color = COLORS['accent']
    c.setFillColor(color)
    c.circle(x, y, 5*mm, fill=True, stroke=False)
    c.setFillColor(white)
    c.setFont("Helvetica-Bold", 9)
    c.drawCentredString(x, y - 3*mm, str(num))

def create_card_01():
    """01_开篇认知自测卡"""
    filename = os.path.join(OUTPUT_DIR, "01_开篇认知自测卡.pdf")
    c = canvas.Canvas(filename, pagesize=A5)

    draw_header(c, "开篇认知自测卡", "自我检测 · 学习前测")
    y = PAGE_HEIGHT - 50*mm

    c.setFillColor(COLORS['text_gray'])
    c.setFont("Helvetica", 8)
    c.drawString(15*mm, y, "请根据自己的实际情况选择最符合的选项，答案无对错之分")
    y -= 8*mm

    questions = [
        ("1", "在团队管理中，你通常更关注成员的", "A. 工作结果  B. 工作过程  C. 两者兼有"),
        ("2", "面对绩效不理想的员工，你的首要反应是", "A. 分析原因  B. 立即指导  C. 等待观察"),
        ("3", "你觉得人事决策中最大的挑战是", "A. 识别真正的问题  B. 获取真实信息  C. 做最终决策"),
        ("4", "你对德鲁克人事决策理论的理解程度", "A. 完全不了解  B. 听说过  C. 有过研究"),
        ("5", "你希望从这门课中收获什么", "A. 实用方法  B. 思维框架  C. 两者都想要"),
    ]

    for num, q, opts in questions:
        c.setFillColor(COLORS['text_dark'])
        c.setFont("Helvetica-Bold", 9)
        draw_number_circle(c, 18*mm, y - 3*mm, num)
        c.drawString(25*mm, y, q)
        y -= 6*mm

        c.setFillColor(COLORS['text_gray'])
        c.setFont("Helvetica", 8)
        c.drawString(25*mm, y, opts)
        y -= 10*mm

    y -= 5*mm
    c.setFillColor(COLORS['accent'])
    c.rect(15*mm, y - 8*mm, PAGE_WIDTH - 30*mm, 8*mm, fill=True, stroke=False)
    c.setFillColor(white)
    c.setFont("Helvetica-Bold", 9)
    c.drawCentredString(PAGE_WIDTH/2, y - 4*mm, "得分解读")
    y -= 15*mm

    解读 = [
        ("A较多", "偏重执行，可能需要加强战略性思考"),
        ("B较多", "偏重直觉，可能需要加强系统性方法"),
        ("C较多", "平衡型，课程将帮助你进一步深化体系"),
    ]
    for opt, desc in 解读:
        c.setFillColor(COLORS['accent'])
        c.setFont("Helvetica-Bold", 8)
        c.drawString(15*mm, y, opt)
        c.setFillColor(COLORS['text_gray'])
        c.setFont("Helvetica", 8)
        c.drawString(35*mm, y, desc)
        y -= 6*mm

    draw_footer(c, 1)
    c.save()
    print(f"生成: {filename}")

def create_card_02():
    """02_场景卡"""
    filename = os.path.join(OUTPUT_DIR, "02_场景卡.pdf")
    c = canvas.Canvas(filename, pagesize=A5)

    draw_header(c, "场景卡", "情境设定 · 问题聚焦")
    y = PAGE_HEIGHT - 50*mm

    c.setFillColor(COLORS['text_gray'])
    c.setFont("Helvetica", 8)
    c.drawString(15*mm, y, "请描述一个你正在面临或曾经面临的人事决策挑战")
    y -= 10*mm

    y = draw_section_title(c, "岗位基本信息", y)

    fields = ["直属上级:", "所在部门:", "岗位名称:", "下属人数:"]
    for field in fields:
        y = draw_fill_field(c, field, y, width=50*mm)

    y -= 5*mm
    y = draw_section_title(c, "核心挑战", y)
    y = draw_fill_field(c, "描述你面临的主要人事决策问题（200字内）", y, width=PAGE_WIDTH-30*mm)
    y -= 3*mm
    c.setFillColor(COLORS['fill_area'])
    c.rect(15*mm, y - 25*mm, PAGE_WIDTH-30*mm, 25*mm, fill=True, stroke=False)
    c.setStrokeColor(COLORS['border'])
    c.setLineWidth(0.5)
    c.rect(15*mm, y - 25*mm, PAGE_WIDTH-30*mm, 25*mm, fill=False, stroke=True)
    y -= 30*mm

    y = draw_section_title(c, "希望通过课程解决的问题", y)
    for i in range(3):
        y = draw_fill_field(c, f"问题{i+1}:", y, width=PAGE_WIDTH-30*mm)

    draw_footer(c, 2)
    c.save()
    print(f"生成: {filename}")

def create_card_03():
    """03_德鲁克五步框架卡"""
    filename = os.path.join(OUTPUT_DIR, "03_德鲁克五步框架卡.pdf")
    c = canvas.Canvas(filename, pagesize=A5)

    draw_header(c, "德鲁克五步框架卡", "系统方法 · 逻辑可视化")
    y = PAGE_HEIGHT - 50*mm

    c.setFillColor(COLORS['text_gray'])
    c.setFont("Helvetica", 8)
    c.drawString(15*mm, y, "德鲁克人事决策五步法：逻辑递进，缺一不可")
    y -= 12*mm

    steps = [
        ("1", "澄清决策结果", "我想要达成的具体目标是什么？", ""),
        ("2", "界定决策边界", "什么是必须满足的？什么是绝对不能接受的？", ""),
        ("3", "寻找可行方案", "有哪些可能的解决方案？", "至少列出3个"),
        ("4", "评估方案优选", "每个方案的利弊分析", "比较：效果/成本/风险"),
        ("5", "确定行动方案", "谁来做？做什么？何时做？", "明确责任人和时间节点"),
    ]

    box_w = 52*mm
    box_h = 20*mm
    start_x = 15*mm
    gap = 3*mm

    for i, (num, title, question, note) in enumerate(steps):
        x = start_x + i * (box_w + gap)

        c.setFillColor(COLORS['fill_area'])
        c.rect(x, y - box_h, box_w, box_h, fill=True, stroke=False)
        c.setStrokeColor(COLORS['accent'] if i == 0 else COLORS['border'])
        c.setLineWidth(2 if i == 0 else 0.5)
        c.rect(x, y - box_h, box_w, box_h, fill=False, stroke=True)

        c.setFillColor(COLORS['accent'])
        c.setFont("Helvetica-Bold", 9)
        c.drawString(x + 3*mm, y - 6*mm, f"第{num}步")
        c.setFillColor(COLORS['text_dark'])
        c.setFont("Helvetica-Bold", 8)
        c.drawString(x + 3*mm, y - 11*mm, title)

        c.setFillColor(COLORS['text_gray'])
        c.setFont("Helvetica", 6)
        c.drawString(x + 3*mm, y - 16*mm, question)

        if i < len(steps) - 1:
            arrow_x = x + box_w + 1*mm
            c.setStrokeColor(COLORS['accent'])
            c.setLineWidth(1)
            c.line(arrow_x, y - box_h/2, arrow_x + gap - 1*mm, y - box_h/2)

    y -= box_h + 15*mm

    c.setFillColor(COLORS['accent'])
    c.setFont("Helvetica-Bold", 9)
    c.drawString(15*mm, y, "五步关系：")
    y -= 6*mm

    c.setFillColor(COLORS['text_dark'])
    c.setFont("Helvetica", 8)
    c.drawString(15*mm, y, "结果 ← 边界 → 方案 → 评估 → 行动")
    y -= 5*mm
    c.setFillColor(COLORS['text_gray'])
    c.setFont("Helvetica", 7)
    c.drawString(15*mm, y, "每一步都基于前一步展开，最终指向可执行的决策方案")

    c.setFillColor(COLORS['accent_light'])
    c.rect(PAGE_WIDTH - 45*mm, y - 30*mm, 30*mm, 30*mm, fill=True, stroke=False)
    c.setFillColor(COLORS['accent'])
    c.setFont("Helvetica-Bold", 7)
    c.drawString(PAGE_WIDTH - 43*mm, y - 5*mm, "实践提示")
    c.setFillColor(COLORS['text_dark'])
    c.setFont("Helvetica", 6)
    c.drawString(PAGE_WIDTH - 43*mm, y - 12*mm, "用这个框架")
    c.drawString(PAGE_WIDTH - 43*mm, y - 18*mm, "分析你当前的")
    c.drawString(PAGE_WIDTH - 43*mm, y - 24*mm, "一个人事挑战")

    draw_footer(c, 3)
    c.save()
    print(f"生成: {filename}")

def create_card_04():
    """04_职位定义三句话卡"""
    filename = os.path.join(OUTPUT_DIR, "04_职位定义三句话卡.pdf")
    c = canvas.Canvas(filename, pagesize=A5)

    draw_header(c, "职位定义三句话卡", "精准定位 · 德鲁克核心工具")
    y = PAGE_HEIGHT - 50*mm

    c.setFillColor(COLORS['text_gray'])
    c.setFont("Helvetica", 8)
    c.drawString(15*mm, y, "德鲁克：每个职位都是一次社会变革")
    y -= 12*mm

    sentences = [
        ("第一句", "这个职位是关于什么的？", [
            "组织存在的目的是什么？",
            "这个岗位如何贡献于组织目标？",
            "衡量标准是什么？"
        ]),
        ("第二句", "这个职位不是什么？", [
            "与相邻职位的区别在哪里？",
            "什么是不应该做的？",
            "边界在哪里？"
        ]),
        ("第三句", "要让任职者成功，需要什么？", [
            "知识和技能要求",
            "需要什么样的上级支持？",
            "需要多长时间才能胜任？"
        ]),
    ]

    for title, question, points in sentences:
        c.setFillColor(COLORS['header_bg'])
        c.rect(15*mm, y - 18*mm, PAGE_WIDTH - 30*mm, 18*mm, fill=True, stroke=False)
        c.setFillColor(COLORS['accent'])
        c.setFont("Helvetica-Bold", 10)
        c.drawString(20*mm, y - 7*mm, title)
        c.setFillColor(white)
        c.setFont("Helvetica-Bold", 9)
        c.drawString(40*mm, y - 7*mm, question)
        y -= 22*mm

        for point in points:
            c.setFillColor(COLORS['text_gray'])
            c.setFont("Helvetica", 7)
            c.drawString(18*mm, y, "• " + point)
            y -= 5*mm

        y = draw_fill_field(c, "我的回答：", y, width=PAGE_WIDTH-30*mm)
        y -= 5*mm

    y -= 3*mm
    c.setFillColor(COLORS['accent_light'])
    c.rect(15*mm, y - 20*mm, PAGE_WIDTH-30*mm, 20*mm, fill=True, stroke=False)
    c.setFillColor(COLORS['accent'])
    c.setFont("Helvetica-Bold", 8)
    c.drawString(18*mm, y - 5*mm, "检验标准：")
    c.setFillColor(COLORS['text_dark'])
    c.setFont("Helvetica", 7)
    c.drawString(18*mm, y - 12*mm, "能够向一个新任职者说清楚这三点，且对方能复述")
    y -= 25*mm

    draw_footer(c, 4)
    c.save()
    print(f"生成: {filename}")

def create_card_05():
    """05_AI工具边界三角卡"""
    filename = os.path.join(OUTPUT_DIR, "05_AI工具边界三角卡.pdf")
    c = canvas.Canvas(filename, pagesize=A5)

    draw_header(c, "AI工具边界三角卡", "技术赋能 · 边界清晰")
    y = PAGE_HEIGHT - 50*mm

    c.setFillColor(COLORS['text_gray'])
    c.setFont("Helvetica", 8)
    c.drawString(15*mm, y, "明确AI能做什么、不能做什么，提升人事决策质量")
    y -= 15*mm

    import math
    cx = PAGE_WIDTH / 2
    tri_h = 55*mm
    tri_w = 70*mm

    top_x, top_y = cx, y
    bottom_left_x = cx - tri_w/2
    bottom_left_y = y - tri_h
    bottom_right_x = cx + tri_w/2
    bottom_right_y = y - tri_h

    c.setStrokeColor(COLORS['accent'])
    c.setLineWidth(2)
    c.line(top_x, top_y, bottom_left_x, bottom_left_y)
    c.line(top_x, top_y, bottom_right_x, bottom_right_y)
    c.line(bottom_left_x, bottom_left_y, bottom_right_x, bottom_right_y)

    labels = [
        (top_x, top_y + 5*mm, "初筛有用", COLORS['accent']),
        (bottom_left_x - 5*mm, bottom_left_y - 3*mm, "深评无用", HexColor('#666666')),
        (bottom_right_x + 3*mm, bottom_right_y - 3*mm, "责任归属", HexColor('#666666')),
    ]
    for lx, ly, text, color in labels:
        c.setFillColor(color)
        c.setFont("Helvetica-Bold", 9)
        c.drawCentredString(lx, ly, text)

    y = bottom_left_y - 20*mm

    areas = [
        ("初筛有用", "AI可快速处理大量简历/数据，进行初步筛选和分类",
         "适用：海量候选人初筛、基础信息核查、标准化问题回答"),
        ("深评无用", "AI难以评估人的潜力、价值观、团队契合度等深层因素",
         "适用：最终人选确定、管理潜力评估、文化匹配度判断"),
        ("责任归属", "AI辅助决策，但最终人事决定的责任仍在管理者",
         "适用：确保决策可追溯、有记录、能解释"),
    ]

    y -= 5*mm
    for title, desc, use in areas:
        c.setFillColor(COLORS['text_dark'])
        c.setFont("Helvetica-Bold", 8)
        c.drawString(15*mm, y, f"• {title}：")
        c.setFillColor(COLORS['text_gray'])
        c.setFont("Helvetica", 7)
        c.drawString(38*mm, y, desc)
        y -= 5*mm
        c.drawString(18*mm, y, use)
        y -= 8*mm

    y -= 3*mm
    c.setFillColor(COLORS['accent'])
    c.setFont("Helvetica-Bold", 8)
    c.drawString(15*mm, y, "决策流程：")
    y -= 6*mm

    flow_steps = ["人工初筛 → AI辅助筛选 → AI初步评估 → 人工深度评估 → 管理者决策"]
    c.setFillColor(COLORS['text_dark'])
    c.setFont("Helvetica", 7)
    c.drawString(15*mm, y, flow_steps[0])

    draw_footer(c, 5)
    c.save()
    print(f"生成: {filename}")

def create_card_06():
    """06_岗位动态重构三步骤卡"""
    filename = os.path.join(OUTPUT_DIR, "06_岗位动态重构三步骤卡.pdf")
    c = canvas.Canvas(filename, pagesize=A5)

    draw_header(c, "岗位动态重构三步骤卡", "与时俱进 · 定期审视")
    y = PAGE_HEIGHT - 50*mm

    c.setFillColor(COLORS['text_gray'])
    c.setFont("Helvetica", 8)
    c.drawString(15*mm, y, "市场变化、技术革新、组织发展 → 岗位需要定期重构")
    y -= 15*mm

    steps = [
        ("步骤1", "回顾当初设立这个岗位的目标", [
            "当初为什么要设立这个岗位？",
            "最初的KPI是什么？",
            "现在的环境有什么变化？"
        ], "目标回顾"),
        ("步骤2", "评估当前岗位的有效性", [
            "这个岗位现在还在创造价值吗？",
            "有什么新的要求被加入？",
            "有哪些工作已经过时？"
        ], "有效性评估"),
        ("步骤3", "重新定义岗位的贡献", [
            "未来6-12个月的关键贡献是什么？",
            "需要什么样的新能力？",
            "如何与相邻岗位协同？"
        ], "贡献重定义"),
    ]

    for step_title, main_q, sub_qs, label in steps:
        c.setFillColor(COLORS['header_bg'])
        c.rect(15*mm, y - 28*mm, PAGE_WIDTH - 30*mm, 28*mm, fill=True, stroke=False)

        c.setFillColor(COLORS['accent'])
        c.setFont("Helvetica-Bold", 10)
        c.drawString(18*mm, y - 8*mm, step_title)
        c.setFillColor(white)
        c.setFont("Helvetica-Bold", 9)
        c.drawString(40*mm, y - 8*mm, main_q)

        c.setFillColor(HexColor('#DDDDDD'))
        c.setFont("Helvetica", 7)
        for i, sq in enumerate(sub_qs):
            c.drawString(20*mm, y - 14*mm - i*5*mm, f"◦ {sq}")

        y -= 35*mm
        y = draw_fill_field(c, "我的思考：", y, width=PAGE_WIDTH-30*mm)
        y -= 8*mm

    c.setFillColor(COLORS['accent_light'])
    c.rect(15*mm, y - 18*mm, PAGE_WIDTH-30*mm, 18*mm, fill=True, stroke=False)
    c.setFillColor(COLORS['accent'])
    c.setFont("Helvetica-Bold", 8)
    c.drawString(18*mm, y - 5*mm, "适应性评估维度：")
    c.setFillColor(COLORS['text_dark'])
    c.setFont("Helvetica", 7)
    c.drawString(18*mm, y - 12*mm, "组织目标 · 业务流程 · 技术变革 · 人才供给 · 竞争环境")

    draw_footer(c, 6)
    c.save()
    print(f"生成: {filename}")

def create_card_07():
    """07_STAR-R对话设计卡"""
    filename = os.path.join(OUTPUT_DIR, "07_STAR-R对话设计卡.pdf")
    c = canvas.Canvas(filename, pagesize=A5)

    draw_header(c, "STAR-R对话设计卡", "行为面试 · 深度追问")
    y = PAGE_HEIGHT - 50*mm

    c.setFillColor(COLORS['text_gray'])
    c.setFont("Helvetica", 8)
    c.drawString(15*mm, y, "通过STAR-R结构设计面试问题，挖掘真实行为案例")
    y -= 12*mm

    star_parts = [
        ("S", "Situation", "情境", "请描述一个你曾经面临...的情境"),
        ("T", "Task", "任务", "在那个情境中，你的任务/职责是什么？"),
        ("A", "Action", "行动", "你具体采取了什么行动？为什么？"),
        ("R", "Result", "结果", "最终取得了什么结果？数据说话"),
        ("R", "Reflection", "反思", "回头看，你学到了什么？下次会怎么做？"),
    ]

    box_w = (PAGE_WIDTH - 30*mm - 4*mm) / 5

    for i, (letter, eng, chn, question) in enumerate(star_parts):
        x = 15*mm + i * (box_w + 1*mm)

        c.setFillColor(COLORS['accent'])
        c.circle(x + box_w/2, y - 5*mm, 6*mm, fill=True, stroke=False)
        c.setFillColor(white)
        c.setFont("Helvetica-Bold", 12)
        c.drawCentredString(x + box_w/2, y - 8*mm, letter)

        c.setFillColor(COLORS['text_dark'])
        c.setFont("Helvetica-Bold", 7)
        c.drawCentredString(x + box_w/2, y - 14*mm, eng)

        c.setFillColor(COLORS['accent'])
        c.setFont("Helvetica-Bold", 8)
        c.drawCentredString(x + box_w/2, y - 19*mm, chn)

        c.setFillColor(COLORS['text_gray'])
        c.setFont("Helvetica", 6)
        c.drawCentredString(x + box_w/2, y - 25*mm, question[:12])
        if len(question) > 12:
            c.drawCentredString(x + box_w/2, y - 30*mm, question[12:])

        if i < len(star_parts) - 1:
            c.setStrokeColor(COLORS['accent'])
            c.setLineWidth(1)
            arr_x = x + box_w + 0.5*mm
            c.line(arr_x, y - 5*mm, arr_x + 0.5*mm, y - 5*mm)

    y -= 45*mm

    c.setFillColor(COLORS['accent'])
    c.setFont("Helvetica-Bold", 9)
    c.drawString(15*mm, y, "为什么Reflection如此重要？")
    y -= 7*mm

    c.setFillColor(COLORS['text_dark'])
    c.setFont("Helvetica", 8)
    reasons = [
        "• 区分「运气好」和「有能力」：反思能力是持续成长的基础",
        "• 识别学习敏锐度：能否从经验中提炼可迁移的教训",
        "• 预测未来潜力：有反思能力的人更可能持续进步",
    ]
    for reason in reasons:
        c.drawString(15*mm, y, reason)
        y -= 5*mm

    y -= 8*mm
    y = draw_section_title(c, "追问技巧", y)
    techniques = [
        ("继续", "请具体说说...", "获取更多细节"),
        ("深入", "当时你是怎么想的？", "探索动机和思考"),
        ("澄清", "你说的'成功'具体指什么？", "明确标准和结果"),
    ]

    for keyword, example, purpose in techniques:
        c.setFillColor(COLORS['accent'])
        c.setFont("Helvetica-Bold", 7)
        c.drawString(15*mm, y, keyword)
        c.setFillColor(COLORS['text_gray'])
        c.setFont("Helvetica", 7)
        c.drawString(28*mm, y, example)
        c.setFillColor(COLORS['text_light'])
        c.drawString(75*mm, y, f"({purpose})")
        y -= 5*mm

    draw_footer(c, 7)
    c.save()
    print(f"生成: {filename}")

def create_card_08():
    """08_三类探索方向卡"""
    filename = os.path.join(OUTPUT_DIR, "08_三类探索方向卡.pdf")
    c = canvas.Canvas(filename, pagesize=A5)

    draw_header(c, "三类探索方向卡", "深度对话 · 价值发现")
    y = PAGE_HEIGHT - 50*mm

    c.setFillColor(COLORS['text_gray'])
    c.setFont("Helvetica", 8)
    c.drawString(15*mm, y, "这些方向帮助管理者进行更深层的人事探索对话")
    y -= 12*mm

    directions = [
        {
            "num": "1",
            "title": "不擅长但必须做的事",
            "desc": "每个人都有盲点。识别并弥补关键短板，是管理者的必修课。",
            "questions": [
                "你最不愿意面对的工作是什么？",
                "为什么这件事对你困难？",
                "不处理它会有什么后果？",
                "谁能帮助你弥补这个短板？"
            ],
            "value": "自我认知 · 短板突破"
        },
        {
            "num": "2",
            "title": "与上级的重大意见分歧",
            "desc": "当与上级意见不一致时，如何既坚持己见又维护关系？",
            "questions": [
                "你们的分歧点在什么地方？",
                "你的上级的核心关切是什么？",
                "你能提供什么新信息或视角？",
                "有没有第三种方案可以兼顾？"
            ],
            "value": "向上管理 · 建设性分歧"
        },
        {
            "num": "3",
            "title": "最艰难的决定",
            "desc": "没有标准答案的抉择，考验的是价值观和判断力。",
            "questions": [
                "为什么这个决定对你困难？",
                "你在权衡什么？",
                "你更需要避免什么错误？",
                "谁会受到最大影响？"
            ],
            "value": "价值观澄清 · 决策质量"
        },
    ]

    for d in directions:
        c.setFillColor(COLORS['accent'])
        c.setFont("Helvetica-Bold", 14)
        c.drawString(15*mm, y, d["num"])
        c.setFillColor(COLORS['text_dark'])
        c.setFont("Helvetica-Bold", 10)
        c.drawString(23*mm, y, d["title"])
        c.setFillColor(COLORS['text_light'])
        c.setFont("Helvetica", 7)
        c.drawRightString(PAGE_WIDTH - 15*mm, y, d["value"])
        y -= 6*mm

        c.setFillColor(COLORS['text_gray'])
        c.setFont("Helvetica", 7)
        c.drawString(15*mm, y, d["desc"])
        y -= 8*mm

        for q in d["questions"]:
            c.setFillColor(COLORS['text_dark'])
            c.setFont("Helvetica", 7)
            c.drawString(18*mm, y, "◦ " + q)
            y -= 4*mm

        y -= 6*mm

    c.setFillColor(COLORS['accent_light'])
    c.rect(15*mm, y - 15*mm, PAGE_WIDTH-30*mm, 15*mm, fill=True, stroke=False)
    c.setFillColor(COLORS['accent'])
    c.setFont("Helvetica-Bold", 8)
    c.drawString(18*mm, y - 5*mm, "使用提示：选择一个方向，设计3-5个问题进行深度对话")
    y -= 20*mm

    draw_footer(c, 8)
    c.save()
    print(f"生成: {filename}")

def create_card_09():
    """09_后复盘框架六问题卡"""
    filename = os.path.join(OUTPUT_DIR, "09_后复盘框架六问题卡.pdf")
    c = canvas.Canvas(filename, pagesize=A5)

    draw_header(c, "后复盘框架六问题卡", "持续改进 · 经验沉淀")
    y = PAGE_HEIGHT - 50*mm

    c.setFillColor(COLORS['text_gray'])
    c.setFont("Helvetica", 8)
    c.drawString(15*mm, y, "每次决策后复盘，是管理者成长的关键路径")
    y -= 12*mm

    questions = [
        ("1", "期望是什么？", "做这个决策时，你期望达成什么结果？"),
        ("2", "实际发生了什么？", "结果与你预期的一致吗？有哪些意外？"),
        ("3", "原因是什么？", "如果结果不同于预期，原因是什么？"),
        ("4", "我学到了什么？", "从这次决策中学到了什么可以应用于未来？"),
        ("5", "下一步行动是什么？", "基于这次复盘，你需要做什么不同的事？"),
        ("6", "谁来跟进？", "谁负责确保这些改进措施被落实？"),
    ]

    for num, question, sub_q in questions:
        c.setFillColor(COLORS['fill_area'])
        c.rect(15*mm, y - 14*mm, PAGE_WIDTH - 30*mm, 14*mm, fill=True, stroke=False)

        c.setFillColor(COLORS['accent'])
        c.setFont("Helvetica-Bold", 10)
        c.drawString(18*mm, y - 5*mm, num)

        c.setFillColor(COLORS['text_dark'])
        c.setFont("Helvetica-Bold", 9)
        c.drawString(28*mm, y - 5*mm, question)

        c.setFillColor(COLORS['text_gray'])
        c.setFont("Helvetica", 7)
        c.drawString(28*mm, y - 11*mm, sub_q)

        y -= 18*mm

    y -= 5*mm
    y = draw_section_title(c, "改进计划", y)

    c.setFillColor(COLORS['text_dark'])
    c.setFont("Helvetica-Bold", 8)
    c.drawString(15*mm, y, "基于复盘，我承诺：")
    y -= 7*mm

    for i in range(3):
        c.setFillColor(COLORS['text_gray'])
        c.setFont("Helvetica", 7)
        c.drawString(15*mm, y, f"{i+1}. ")
        c.setStrokeColor(COLORS['border'])
        c.setLineWidth(0.5)
        c.line(20*mm, y - 2*mm, PAGE_WIDTH - 15*mm, y - 2*mm)
        y -= 7*mm

    draw_footer(c, 9)
    c.save()
    print(f"生成: {filename}")

def create_card_10():
    """10_演练观察评估卡"""
    filename = os.path.join(OUTPUT_DIR, "10_演练观察评估卡.pdf")
    c = canvas.Canvas(filename, pagesize=A5)

    draw_header(c, "演练观察评估卡", "实践反馈 · 精准点评")
    y = PAGE_HEIGHT - 50*mm

    c.setFillColor(COLORS['text_gray'])
    c.setFont("Helvetica", 8)
    c.drawString(15*mm, y, "记录演练表现，提供建设性反馈")
    y -= 12*mm

    y = draw_section_title(c, "观察维度", y)

    dimensions = [
        ("框架运用", "是否正确使用德鲁克五步框架？"),
        ("问题界定", "是否清晰界定了决策边界？"),
        ("方案探索", "是否探索了足够多的可行方案？"),
        ("评估深度", "是否有深入的利弊分析？"),
        ("行动明确", "是否有清晰的责任人和时间节点？"),
    ]

    for dim, desc in dimensions:
        c.setFillColor(COLORS['text_dark'])
        c.setFont("Helvetica-Bold", 8)
        c.drawString(15*mm, y, f"◦ {dim}")
        c.setFillColor(COLORS['text_gray'])
        c.setFont("Helvetica", 7)
        c.drawString(45*mm, y, desc)
        c.setFillColor(COLORS['text_light'])
        c.drawRightString(PAGE_WIDTH - 15*mm, y, "1  2  3  4  5")
        y -= 6*mm

    y -= 8*mm
    y = draw_section_title(c, "关键记录", y)

    c.setFillColor(COLORS['fill_area'])
    c.rect(15*mm, y - 30*mm, PAGE_WIDTH-30*mm, 30*mm, fill=True, stroke=False)
    c.setStrokeColor(COLORS['border'])
    c.setLineWidth(0.5)
    c.rect(15*mm, y - 30*mm, PAGE_WIDTH-30*mm, 30*mm, fill=False, stroke=True)

    c.setFillColor(COLORS['text_gray'])
    c.setFont("Helvetica", 7)
    c.drawString(18*mm, y - 5*mm, "做得好的地方：")
    c.drawString(18*mm, y - 15*mm, "需要改进的地方：")
    c.drawString(18*mm, y - 25*mm, "具体建议：")

    y -= 35*mm
    y = draw_section_title(c, "反馈话术", y)

    phrases = [
        ("我观察到...", "描述具体行为，而非人格特质"),
        ("这对团队/项目的影响是...", "说明行为的后果"),
        ("我希望下次看到...", "给出明确的改进期望"),
        ("我可以怎么支持你？", "提供帮助，展现信任"),
    ]

    for phrase, tip in phrases:
        c.setFillColor(COLORS['accent'])
        c.setFont("Helvetica-Bold", 8)
        c.drawString(15*mm, y, phrase)
        c.setFillColor(COLORS['text_light'])
        c.setFont("Helvetica", 7)
        c.drawString(65*mm, y, f"-> {tip}")
        y -= 6*mm

    draw_footer(c, 10)
    c.save()
    print(f"生成: {filename}")

def main():
    """主函数：生成所有10个工具卡"""
    print("=" * 50)
    print("开始生成德鲁克《人事决策》课程工具卡...")
    print("=" * 50)

    os.makedirs(OUTPUT_DIR, exist_ok=True)

    create_card_01()
    create_card_02()
    create_card_03()
    create_card_04()
    create_card_05()
    create_card_06()
    create_card_07()
    create_card_08()
    create_card_09()
    create_card_10()

    print("=" * 50)
    print("所有工具卡生成完成！")
    print(f"输出目录: {OUTPUT_DIR}")
    print("=" * 50)

if __name__ == "__main__":
    main()
