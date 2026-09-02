#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
PDF #2: 单页工具_A4版.pdf
3个A4工具合并为一个PDF
- F2_面谈准备一页纸（A4单页）
- F5_正面·全面·情面·事面话术对比（A4双面）
- F10_下次面谈准备清单（A4双面）
"""

from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.pdfgen import canvas
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.colors import HexColor, black, white
from reportlab.platypus import Paragraph, Frame, Spacer, Table, TableStyle
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_LEFT, TA_CENTER

ACCENT = HexColor("#2C4A7C")
ACCENT_LT = HexColor("#E8EEF7")
TEXT = HexColor("#1A1A2E")
MUTED = HexColor("#666666")
GOLD = HexColor("#8B6B2A")
LIGHT_BG = HexColor("#F5F7FA")

PAGE_W, PAGE_H = A4  # 210 x 297 mm


def register_fonts():
    font_paths = [
        ("D:/CC/fonts/msyh.ttc", "Msyh"),
        ("C:/Windows/Fonts/msyh.ttc", "Msyh"),
        ("C:/Windows/Fonts/simhei.ttf", "SimHei"),
    ]
    for path, name in font_paths:
        try:
            pdfmetrics.registerFont(TTFont(name, path))
            return name
        except Exception:
            continue
    return "Helvetica"


CN = register_fonts()


def make_styles():
    return {
        "title": ParagraphStyle("title", fontName=CN, fontSize=18, leading=22,
                                 textColor=ACCENT, alignment=TA_LEFT, spaceAfter=2),
        "subtitle": ParagraphStyle("subtitle", fontName=CN, fontSize=10, leading=13,
                                    textColor=GOLD, alignment=TA_LEFT, spaceAfter=8),
        "h1": ParagraphStyle("h1", fontName=CN, fontSize=14, leading=18,
                              textColor=ACCENT, spaceBefore=8, spaceAfter=4),
        "h2": ParagraphStyle("h2", fontName=CN, fontSize=11, leading=14,
                              textColor=ACCENT, spaceBefore=6, spaceAfter=2),
        "h3": ParagraphStyle("h3", fontName=CN, fontSize=10, leading=12,
                              textColor=TEXT, spaceBefore=3, spaceAfter=1),
        "body": ParagraphStyle("body", fontName=CN, fontSize=9, leading=12,
                                textColor=TEXT, spaceAfter=3),
        "small": ParagraphStyle("small", fontName=CN, fontSize=7.5, leading=10,
                                 textColor=TEXT, spaceAfter=2),
        "tiny": ParagraphStyle("tiny", fontName=CN, fontSize=6.5, leading=8,
                                textColor=MUTED),
        "tip": ParagraphStyle("tip", fontName=CN, fontSize=8, leading=10,
                                textColor=ACCENT, leftIndent=10, spaceAfter=2),
    }


STYLES = make_styles()


def draw_page_chrome(c, title, page_num, total_pages, label):
    """画页头页脚"""
    # 顶部色条
    c.setFillColor(ACCENT)
    c.rect(0, PAGE_H - 8 * mm, PAGE_W, 8 * mm, fill=1, stroke=0)
    c.setFillColor(white)
    c.setFont(CN, 11)
    c.drawString(15 * mm, PAGE_H - 5.5 * mm, title)
    c.setFont(CN, 8)
    c.drawRightString(PAGE_W - 15 * mm, PAGE_H - 5.5 * mm, label)
    # 底部
    c.setFillColor(MUTED)
    c.setFont(CN, 7)
    c.drawString(15 * mm, 6 * mm, "《对话驱动》绩效面谈 · 竞越课程")
    c.drawCentredString(PAGE_W / 2, 6 * mm, f"A4 · 工具卡 {page_num}/{total_pages}")
    c.drawRightString(PAGE_W - 15 * mm, 6 * mm, "可双面打印 · 黑白可读")
    c.setFillColor(ACCENT)
    c.rect(0, 0, PAGE_W, 1.5 * mm, fill=1, stroke=0)


def draw_frame(c, blocks, top_margin=12 * mm, bottom_margin=12 * mm):
    f = Frame(15 * mm, bottom_margin, PAGE_W - 30 * mm,
              PAGE_H - top_margin - bottom_margin,
              leftPadding=2, rightPadding=2, topPadding=2, bottomPadding=2,
              showBoundary=0)
    f.addFromList(blocks, c)


# ============= F2: 面谈准备一页纸 =============
def page_F2(c, total_pages):
    title = "F2 · 面谈准备一页纸"
    draw_page_chrome(c, title, 1, total_pages, "A4单面 · 建议双面打印")

    blocks = [
        Paragraph('<b>金句：</b>没有准备的面谈，比没有面谈更糟——你只会把含糊的判断，包装成看似清晰的废话。',
                   STYLES["subtitle"]),
        Paragraph('<font color="#2C4A7C"><b>使用时机：</b></font>面谈前1周内。打印一张，填完再开会。', STYLES["body"]),

        Paragraph('<font color="#2C4A7C"><b>30秒快速自检（6项中3项以上没打钩 → 推迟面谈）</b></font>', STYLES["h1"]),

        # 自检表格
    ]
    draw_frame(c, blocks, top_margin=12 * mm, bottom_margin=12 * mm)

    # 自检表 - 用 Table 渲染
    check_items = [
        ("1", "我有至少<b>3个具体的事实</b>（事件+时间+行为）"),
        ("2", "我对每个事实的<b>归因有初步判断</b>（员工做了什么判断、什么是只有他能做的）"),
        ("3", "我识别了<b>缺口类型</b>（技能/行为/认知/AI工具）"),
        ("4", "我<b>预判了难点</b>（员工会抗拒？会沉默？会有情绪？）"),
        ("5", "我<b>准备了应对</b>（每个难点对应的开场白或处理方式）"),
        ("6", "我知道这次面谈<b>要让员工带走什么</b>（一个具体的认知/方向/行动）"),
    ]
    data = [["#", "自检项", "打钩"]]
    for n, t in check_items:
        data.append([n, Paragraph(t, STYLES["body"]), "□"])

    t = Table(data, colWidths=[10 * mm, 130 * mm, 15 * mm])
    t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), ACCENT),
        ("TEXTCOLOR", (0, 0), (-1, 0), white),
        ("FONTNAME", (0, 0), (-1, 0), CN),
        ("FONTSIZE", (0, 0), (-1, 0), 10),
        ("FONTNAME", (0, 1), (-1, -1), CN),
        ("FONTSIZE", (0, 1), (-1, -1), 9),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("ALIGN", (0, 0), (0, -1), "CENTER"),
        ("ALIGN", (-1, 0), (-1, -1), "CENTER"),
        ("BOX", (0, 0), (-1, -1), 0.5, ACCENT),
        ("INNERGRID", (0, 0), (-1, -1), 0.3, MUTED),
        ("LEFTPADDING", (0, 0), (-1, -1), 4),
        ("RIGHTPADDING", (0, 0), (-1, -1), 4),
        ("TOPPADDING", (0, 0), (-1, -1), 4),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 4),
        ("ROWBACKGROUNDS", (0, 1), (-1, -1), [white, LIGHT_BG]),
    ]))
    # 重新画 - 因为Frame addFromList会画，我们用c直接画
    # 计算位置：自检表之下
    table_y = PAGE_H - 75 * mm
    t.wrapOn(c, PAGE_W - 30 * mm, 200 * mm)
    t.drawOn(c, 15 * mm, table_y - t._height)

    # 判定说明
    y = table_y - t._height - 5 * mm
    c.setFillColor(ACCENT)
    c.setFont(CN, 9)
    c.drawString(15 * mm, y, "判定：6项全打钩→开会 ｜ 4-5项→补完 ｜ 3项以下→推迟面谈")

    # 核心三件套
    y -= 12 * mm
    c.setFont(CN, 12)
    c.setFillColor(ACCENT)
    c.drawString(15 * mm, y, "核心三件套（6项打钩后填写）")

    y -= 6 * mm
    c.setFont(CN, 11)
    c.setFillColor(ACCENT)
    c.drawString(15 * mm, y, "一、最重要的1-2个事实")

    # 事实1
    y -= 7 * mm
    c.setFont(CN, 9)
    c.setFillColor(TEXT)
    c.drawString(15 * mm, y, "事实1：时间/情境 _______________________________")
    y -= 6 * mm
    c.drawString(15 * mm, y, "         具体行为 _______________________________")
    y -= 6 * mm
    c.drawString(15 * mm, y, "         结果/影响 _______________________________")

    # 事实2
    y -= 8 * mm
    c.drawString(15 * mm, y, "事实2：时间/情境 _______________________________")
    y -= 6 * mm
    c.drawString(15 * mm, y, "         具体行为 _______________________________")
    y -= 6 * mm
    c.drawString(15 * mm, y, "         结果/影响 _______________________________")

    # 二、归因判断
    y -= 10 * mm
    c.setFont(CN, 11)
    c.setFillColor(ACCENT)
    c.drawString(15 * mm, y, "二、归因判断")
    y -= 7 * mm
    c.setFont(CN, 9)
    c.setFillColor(TEXT)
    c.drawString(15 * mm, y, "事实1归因：_________________________________  □清晰 □模糊")
    y -= 6 * mm
    c.drawString(15 * mm, y, "事实2归因：_________________________________  □清晰 □模糊")

    # 三、员工带走什么
    y -= 10 * mm
    c.setFont(CN, 11)
    c.setFillColor(ACCENT)
    c.drawString(15 * mm, y, "三、员工要带走什么")
    y -= 7 * mm
    c.setFont(CN, 9)
    c.setFillColor(TEXT)
    c.drawString(15 * mm, y, "用一句话写：这次面谈结束，我希望员工带走一个 _____________________")
    y -= 8 * mm
    c.drawString(15 * mm, y, "（认知 / 方向 / 行动）")
    y -= 10 * mm

    # 进阶：AI时代额外准备
    c.setFont(CN, 10)
    c.setFillColor(ACCENT)
    c.drawString(15 * mm, y, "进阶：AI时代额外准备")
    y -= 7 * mm
    c.setFont(CN, 9)
    c.setFillColor(TEXT)
    extras = [
        "□ 识别了是否涉及AI时代五类场景（参F6）",
        "□ 识别了员工的双轨状态（参F8）",
        "□ 准备了发展对话的开场问题（参F7）",
        "□ 通知了员工面谈时间和大致方向",
    ]
    for e in extras:
        c.drawString(18 * mm, y, e)
        y -= 6 * mm

    c.showPage()


# ============= F5: 正面·全面·情面·事面话术对比 =============
def make_F5_content():
    """F5 内容 - 两页（A4双面）"""
    pages = []

    # 正面：第一页
    page1 = [
        Paragraph('<b>金句：</b>说真话不难，难的是说"让员工听得进去"的真话——四原则不是约束，是真话能落地的支撑。',
                   STYLES["subtitle"]),
        Paragraph('<font color="#2C4A7C"><b>使用时机：</b></font>任何需要"说真话"的时刻——给负面反馈、纠正行为、指出差距、回应AI时代的争议。',
                   STYLES["body"]),

        Paragraph('<font color="#2C4A7C"><b>【正面】</b>直接说出问题，不绕弯</font>', STYLES["h1"]),
        Paragraph('直接 = 不绕弯 + 不暗示 + 不让他人转达 + 不留到背后说。', STYLES["body"]),
        _contrast_table([
            ("❌ 绕弯", '"最近工作还顺利吧？状态怎么样？"', '✓ "我直接说——这个季度有几个地方想聊，第一个是Q3的X项目。"'),
            ("❌ 让他人传话", '"我听别人说你……"', '✓ "这是我观察到的——Q3的三个会议上，你打断了同事至少五次。"'),
            ("❌ 暗示嘲讽", '"你这个成绩怎么算你自己呢？"', '✓ "我想直接问——在这个成果里，你的判断体现在哪里？"'),
        ]),
        Paragraph('<font color="#666666"><b>为什么有效：</b>"正面"不是说狠话，是"问题能被清楚听见"。绕弯会让员工怀疑你没把握，正面才有信任基础。</font>', STYLES["tip"]),

        Paragraph('<font color="#2C4A7C"><b>【全面】</b>看到整体，不以偏概全</font>', STYLES["h1"]),
        Paragraph('全面 = 同时看到做到和没做到 + 不以单一事件定性 + 考虑外部因素（含AI工具影响）。', STYLES["body"]),
        _contrast_table([
            ("❌ 单一事件定性", '"你这个项目搞砸了。"', '✓ "目标设定和团队协调你做得不错，但客户预期管理有明显差距。"'),
            ("❌ 以偏概全", '"你最近表现太差了。"', '✓ "9月之前客户反馈一直很好；9月之后两件事让我担心。"'),
            ("❌ 只看AI不看人", '"你用的AI是给你做的吧？"', '✓ "我看到产出质量很高，但你也加入了AI不太会自己想到的关键判断。"'),
        ]),
        Paragraph('<font color="#666666"><b>为什么有效：</b>全面让员工有"被看见"的感觉——做到的部分被肯定，没做到的部分才愿意听进去。</font>', STYLES["tip"]),
    ]
    pages.append(page1)

    # 第二页：情面 + 事面 + 自检
    page2 = [
        Paragraph('<font color="#2C4A7C"><b>【情面】</b>照顾情感，保护尊严</font>', STYLES["h1"]),
        Paragraph('情面 = 区分批评行为和批评人 + 给出负面反馈时承认改进的难度 + 保护员工"想做好"的自尊。', STYLES["body"]),
        _contrast_table([
            ("❌ 批评人", '"你怎么这点事都做不好？"', '✓ "这件事比我预期的难度大，你当时资源也不够。我们看接下来怎么帮你。"'),
            ("❌ 贴标签", '"你的判断力不行。"', '✓ "这个判断在那个时间点确实不容易。我想复盘一下，当时你的依据是什么？"'),
            ("❌ 否定情绪", '"你想太多了，AI就是个工具。"', '✓ "我能理解你这种感觉——怀疑自己价值是真的。我们把你还在做、只有你能做的看清楚。"'),
        ]),
        Paragraph('<font color="#666666"><b>为什么有效：</b>情面不是软化，是承认"想做好"是真实的。员工感到被尊重，才不会把能量消耗在防御上。</font>', STYLES["tip"]),

        Paragraph('<font color="#2C4A7C"><b>【事面】</b>基于可观察的具体事实</font>', STYLES["h1"]),
        Paragraph('事面 = 描述行为，不描述人格 + 具体到情境、时间、行为 + 不用"总是""从来不"。', STYLES["body"]),
        _contrast_table([
            ("❌ 笼统判断", '"你总是不能按时提交。"', '✓ "Q3里有三次提交比计划晚了2天——7月X、8月Y、9月Z报告。"'),
            ("❌ 印象判断", '"你的工作质量不稳定。"', '✓ "X项目里的客户分析部分，结论和我们自己的访谈数据有3处明显出入。"'),
            ("❌ 印象话", '"你最近用AI太依赖了。"', '✓ "过去3次面对客户现场分析，你都需要先查手机或问AI才开始回答，而过去你不需要。"'),
        ]),
        Paragraph('<font color="#666666"><b>为什么有效：</b>事面把"你这个人有问题"变成"这件事有个差距"——员工能接受差距，不能接受被否定。</font>', STYLES["tip"]),

        Paragraph('<font color="#2C4A7C"><b>速查自检：</b>说完一段话，问自己3个问题</font>', STYLES["h1"]),
        Paragraph('□ 我<b>直接</b>说了吗？（没绕弯？没说一半？）<br/>'
                  '□ 我<b>事面</b>了吗？（有具体的事件+时间+行为？）<br/>'
                  '□ 员工听完后能<b>复述出我说了什么</b>吗？（听不清=没说）', STYLES["body"]),
        Paragraph('高级自检：□看到员工做到的部分？□承认"想做好"是真的？□员工没在防御？', STYLES["body"]),
    ]
    pages.append(page2)
    return pages


def _contrast_table(rows):
    """生成话术对比表"""
    data = [[
        Paragraph('<b>常见错误</b>', STYLES["small"]),
        Paragraph('<b>❌ 说法</b>', STYLES["small"]),
        Paragraph('<b>✓ 四原则说法</b>', STYLES["small"]),
    ]]
    for tag, bad, good in rows:
        data.append([
            Paragraph(f'<font color="#8B6B2A">{tag}</font>', STYLES["small"]),
            Paragraph(f'<font color="#666">{bad}</font>', STYLES["small"]),
            Paragraph(f'<font color="#2C4A7C">{good}</font>', STYLES["small"]),
        ])
    t = Table(data, colWidths=[25 * mm, 65 * mm, 90 * mm])
    t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), ACCENT),
        ("TEXTCOLOR", (0, 0), (-1, 0), white),
        ("FONTNAME", (0, 0), (-1, -1), CN),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("BOX", (0, 0), (-1, -1), 0.5, ACCENT),
        ("INNERGRID", (0, 0), (-1, -1), 0.3, MUTED),
        ("LEFTPADDING", (0, 0), (-1, -1), 4),
        ("RIGHTPADDING", (0, 0), (-1, -1), 4),
        ("TOPPADDING", (0, 0), (-1, -1), 3),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 3),
        ("ROWBACKGROUNDS", (0, 1), (-1, -1), [white, LIGHT_BG]),
    ]))
    return t


# ============= F10: 下次面谈准备清单 =============
def make_F10_content():
    """F10 内容 - 多页"""
    pages = []

    # 第1页
    page1 = [
        Paragraph('<b>金句：</b>面谈的真正准备，不在会议室里——在会议室外的清单上。', STYLES["subtitle"]),
        Paragraph('<font color="#2C4A7C"><b>使用时机：</b></font>课程结束当天填写；或每次面谈前1周填写。', STYLES["body"]),

        Paragraph('<font color="#2C4A7C"><b>面谈对象信息</b></font>', STYLES["h1"]),
    ]
    # 用 fields (后面用 c 画)
    pages.append(page1)

    return pages


# ============= 主程序 =============
def main():
    out = r"D:\2026年课程\竞越\绩效管理和绩效面谈：通过绩效面谈让员工更加胜任\完整课程包\15_可打印工具卡\单页工具_A4版.pdf"
    c = canvas.Canvas(out, pagesize=A4)
    c.setTitle("单页工具_A4版")
    c.setAuthor("竞越")
    c.setSubject("F2 / F5 / F10 工具合集")

    total_pages = 5  # F2(1) + F5(2) + F10(2)

    # F2 第1页
    page_F2(c, total_pages)

    # F5 第1页（正面：正面+全面）
    title = "F5 · 正面·全面·情面·事面话术对比 (1/2)"
    draw_page_chrome(c, title, 2, total_pages, "A4双面 · 第1面")
    f5_pages = make_F5_content()
    draw_frame(c, f5_pages[0], top_margin=12 * mm, bottom_margin=12 * mm)
    c.showPage()

    # F5 第2页（背面：情面+事面+自检）
    title = "F5 · 正面·全面·情面·事面话术对比 (2/2)"
    draw_page_chrome(c, title, 3, total_pages, "A4双面 · 第2面")
    draw_frame(c, f5_pages[1], top_margin=12 * mm, bottom_margin=12 * mm)
    c.showPage()

    # F10 简化版 - 用Frame+文本块
    # 第1页：信息区 + 第一区
    title = "F10 · 下次面谈准备清单 (1/2)"
    draw_page_chrome(c, title, 4, total_pages, "A4双面 · 第1面")
    f10_p1 = [
        Paragraph('<b>金句：</b>面谈的真正准备，不在会议室里——在会议室外的清单上。', STYLES["subtitle"]),
        Paragraph('<font color="#2C4A7C"><b>使用时机：</b></font>课程结束当天填写；或每次面谈前1周填写。这是"最重要的25分钟产出"。', STYLES["body"]),

        Paragraph('<font color="#2C4A7C"><b>面谈对象信息</b></font>', STYLES["h1"]),
    ]
    draw_frame(c, f10_p1, top_margin=12 * mm, bottom_margin=12 * mm)

    # 用 c 画空白填写区
    y = PAGE_H - 50 * mm
    fields = [
        "员工代号：________________________",
        "面谈预计时间：____________________",
        "面谈地点：________________________",
        "□ 已通知员工  □ 今天就通知",
    ]
    c.setFont(CN, 9)
    c.setFillColor(TEXT)
    for f in fields:
        c.drawString(20 * mm, y, f)
        y -= 7 * mm

    # 第一区：事实与归因
    y -= 3 * mm
    c.setFont(CN, 12)
    c.setFillColor(ACCENT)
    c.drawString(15 * mm, y, "第一区：事实与归因准备（5-10min，没填完不要开始面谈）")
    y -= 9 * mm
    c.setFont(CN, 10)
    c.setFillColor(TEXT)
    c.drawString(15 * mm, y, "事实1（最重要的那个）")
    y -= 7 * mm
    f1_lines = [
        "时间/情境：________________________________________________",
        "具体行为：________________________________________________",
        "结果/影响：________________________________________________",
        "这个事实的归因，我的判断是：______________________________",
        "归因是否清晰？  □ 清晰（可进第三步）  □ 模糊（需面谈共同探索）",
        "如模糊，准备用 F4 第___组问题（1判断/2过程/3AI参与/4改进）",
    ]
    c.setFont(CN, 8.5)
    for f in f1_lines:
        c.drawString(20 * mm, y, f)
        y -= 6 * mm

    y -= 3 * mm
    c.setFont(CN, 10)
    c.setFillColor(TEXT)
    c.drawString(15 * mm, y, "事实2（备选）")
    y -= 7 * mm
    f2_lines = [
        "时间/情境：________________________________________________",
        "具体行为：________________________________________________",
        "结果/影响：________________________________________________",
    ]
    c.setFont(CN, 8.5)
    for f in f2_lines:
        c.drawString(20 * mm, y, f)
        y -= 6 * mm

    # 第二区：预估难点
    y -= 4 * mm
    c.setFont(CN, 12)
    c.setFillColor(ACCENT)
    c.drawString(15 * mm, y, "第二区：预估难点与准备（5min）")
    y -= 8 * mm
    c.setFont(CN, 9)
    c.setFillColor(TEXT)
    c.drawString(15 * mm, y, "这场面谈里，我预计最难的时刻是：")
    y -= 7 * mm
    c.drawString(20 * mm, y, "________________________________________________")
    y -= 7 * mm
    diff_types = [
        "□ 员工可能不接受评估结果   □ 员工可能情绪激动",
        "□ 我需要说一件我一直在回避的事   □ AI 时代五类场景之___型(A/B/C/D/E)",
        "□ 员工可能沉默不语   □ 员工可能挑战我\"你自己呢\"",
        "□ 员工可能当场辞职   □ 其他：__________________________",
    ]
    for f in diff_types:
        c.drawString(20 * mm, y, f)
        y -= 6 * mm

    y -= 2 * mm
    c.setFont(CN, 9)
    c.setFillColor(TEXT)
    c.drawString(15 * mm, y, "我的应对准备：")
    y -= 6 * mm
    c.drawString(20 * mm, y, "开场白：________________________________________________")
    y -= 6 * mm
    c.drawString(20 * mm, y, "关键原则（正面/全面/情面/事面）：_________________________")
    y -= 6 * mm
    c.drawString(20 * mm, y, "备用话术：______________________________________________")
    y -= 6 * mm
    c.drawString(20 * mm, y, "最坏情况预案：__________________________________________")

    c.showPage()

    # F10 第2页：第三区+第四区+问责
    title = "F10 · 下次面谈准备清单 (2/2)"
    draw_page_chrome(c, title, 5, total_pages, "A4双面 · 第2面")
    f10_p2 = [
        Paragraph('<font color="#2C4A7C"><b>第三区：发展对话规划</b></font>（5min，重点是"让员工带走一个有方向感的感受"）',
                   STYLES["h1"]),
    ]
    draw_frame(c, f10_p2, top_margin=12 * mm, bottom_margin=12 * mm)

    y = PAGE_H - 50 * mm
    c.setFont(CN, 10)
    c.setFillColor(TEXT)
    c.drawString(15 * mm, y, "双轨状态判断：")
    y -= 7 * mm
    c.setFont(CN, 9)
    c.drawString(20 * mm, y, "AI 协作力：□ 不足  □ 够用  □ 较强")
    y -= 6 * mm
    c.drawString(20 * mm, y, "人类深度：□ 不足  □ 够用  □ 较强")
    y -= 8 * mm
    c.setFont(CN, 10)
    c.drawString(15 * mm, y, "更紧迫的发展轨道：")
    y -= 7 * mm
    c.setFont(CN, 9)
    c.drawString(20 * mm, y, "□ AI 协作力（理由：____________________________）")
    y -= 6 * mm
    c.drawString(20 * mm, y, "□ 人类深度（理由：____________________________）")
    y -= 8 * mm
    c.setFont(CN, 10)
    c.drawString(15 * mm, y, "这次发展对话，最想达到的结果：")
    y -= 7 * mm
    c.drawString(20 * mm, y, "________________________________________________")
    y -= 8 * mm
    c.setFont(CN, 10)
    c.drawString(15 * mm, y, "我打算用的启动问题（F7 三选一）：")
    y -= 7 * mm
    c.setFont(CN, 9)
    c.drawString(20 * mm, y, "□ 启动一（通用）：你周期最满意的成长是什么？还有哪里值得再提升？")
    y -= 6 * mm
    c.drawString(20 * mm, y, "□ 启动二（AI）：你用AI最多那类工作里，你觉得自己做了什么？")
    y -= 6 * mm
    c.drawString(20 * mm, y, "□ 启动三（具体化）：哪件事让你感觉\"我在成长\"？")
    y -= 8 * mm
    c.setFont(CN, 10)
    c.drawString(15 * mm, y, "希望员工带走的方向感：")
    y -= 7 * mm
    c.drawString(20 * mm, y, "________________________________________________")

    # 第四区：四步预演
    y -= 6 * mm
    c.setFont(CN, 12)
    c.setFillColor(ACCENT)
    c.drawString(15 * mm, y, "第四区：四步面谈预演（关键词版，5-10min）")
    y -= 8 * mm
    steps = [
        ("① 共看事实", "开场语（不超过30字）：______________________________\n引导句：__________________________________________________"),
        ("② 探寻归因", "第一个问题：________________________________________\n如员工答\"没什么特别\"，我接：______________________________\n听到AI参与时，我的反应：__________________________________"),
        ("③ 分析缺口", "事面支撑：__________________________________________\n我的结论：______________________________________________\n给员工回应空间（\"你怎么看\"）：____________________________"),
        ("④ 共建方向", "起手问题：__________________________________________\n收尾语（含时间点承诺）：__________________________________"),
    ]
    c.setFont(CN, 9)
    c.setFillColor(TEXT)
    for label, content in steps:
        c.setFont(CN, 10)
        c.setFillColor(ACCENT)
        c.drawString(15 * mm, y, label)
        y -= 6 * mm
        c.setFont(CN, 8.5)
        c.setFillColor(TEXT)
        for line in content.split("\n"):
            c.drawString(20 * mm, y, line)
            y -= 6 * mm
        y -= 3 * mm

    # 问责伙伴
    y -= 3 * mm
    c.setFont(CN, 12)
    c.setFillColor(ACCENT)
    c.drawString(15 * mm, y, "问责伙伴（没有问责伙伴的本表 = 没填）")
    y -= 8 * mm
    c.setFont(CN, 9)
    c.setFillColor(TEXT)
    lines = [
        "问责伙伴姓名：______________________  联系方式：______________________",
        "约定：面谈完成后我会告诉他/她：________________________________________",
        "30天内可观察的具体动作：________________________________________________",
        "对应员工：______________________  验证方式：__________________________",
        "30天后回看时，最想看到：________________________________________________",
    ]
    for line in lines:
        c.drawString(20 * mm, y, line)
        y -= 6 * mm

    c.showPage()
    c.save()

    import os
    size_kb = os.path.getsize(out) / 1024
    print(f"OK: {out}")
    print(f"Size: {size_kb:.1f} KB · Pages: {total_pages}")


if __name__ == "__main__":
    main()
