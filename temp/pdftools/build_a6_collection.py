#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
PDF #1: 工具卡合集_A6口袋版.pdf
5张A6横版工具卡，合并为一个PDF，每页一张
- F1_问题类型判断卡（8场景）
- F3_四步面谈法速查卡
- F6_AI时代五类场景处理速查卡
- F7_发展对话三个启动问题
- 金句卡
"""

from reportlab.lib.pagesizes import A6
from reportlab.lib.units import mm
from reportlab.pdfgen import canvas
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.colors import HexColor, black, white
from reportlab.platypus import Paragraph, Frame
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_LEFT, TA_CENTER

# 课程配色
ACCENT = HexColor("#2C4A7C")    # 深蓝（学术/可信）
ACCENT_LT = HexColor("#E8EEF7") # 浅蓝
TEXT = HexColor("#1A1A2E")
MUTED = HexColor("#666666")
GOLD = HexColor("#8B6B2A")

PAGE_W, PAGE_H = A6  # A6 横向：宽 148mm, 高 105mm
PAGE_W, PAGE_H = PAGE_H, PAGE_W  # 横向


def register_fonts():
    """尝试注册中文字体"""
    font_paths = [
        ("D:/CC/fonts/msyh.ttc", "Msyh"),
        ("C:/Windows/Fonts/msyh.ttc", "Msyh"),
        ("C:/Windows/Fonts/simhei.ttf", "SimHei"),
        ("D:/CC/fonts/simhei.ttf", "SimHei"),
        ("C:/Windows/Fonts/simsun.ttc", "SimSun"),
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
        "title": ParagraphStyle(
            "title", fontName=CN, fontSize=12, leading=14,
            textColor=ACCENT, alignment=TA_CENTER, spaceAfter=2,
        ),
        "subtitle": ParagraphStyle(
            "subtitle", fontName=CN, fontSize=7, leading=9,
            textColor=MUTED, alignment=TA_CENTER, spaceAfter=4,
        ),
        "h2": ParagraphStyle(
            "h2", fontName=CN, fontSize=9, leading=11,
            textColor=ACCENT, spaceBefore=3, spaceAfter=1,
        ),
        "h3": ParagraphStyle(
            "h3", fontName=CN, fontSize=8, leading=10,
            textColor=TEXT, spaceBefore=2, spaceAfter=1,
        ),
        "body": ParagraphStyle(
            "body", fontName=CN, fontSize=7, leading=9,
            textColor=TEXT, spaceAfter=2,
        ),
        "small": ParagraphStyle(
            "small", fontName=CN, fontSize=6.5, leading=8,
            textColor=TEXT, spaceAfter=1,
        ),
        "card": ParagraphStyle(
            "card", fontName=CN, fontSize=7, leading=8.5,
            textColor=TEXT, leftIndent=8, spaceAfter=1,
        ),
        "label": ParagraphStyle(
            "label", fontName=CN, fontSize=7, leading=9,
            textColor=ACCENT, leftIndent=0, spaceAfter=1, fontWeight="bold" if False else None,
        ),
    }


STYLES = make_styles()


def draw_header(c, title, subtitle, footer):
    """画卡片页头/页脚"""
    # 顶部装饰条
    c.setFillColor(ACCENT)
    c.rect(0, PAGE_H - 6 * mm, PAGE_W, 6 * mm, fill=1, stroke=0)
    c.setFillColor(white)
    c.setFont(CN, 9)
    c.drawString(5 * mm, PAGE_H - 4.5 * mm, title)
    # 右上角标记
    c.setFont(CN, 7)
    c.drawRightString(PAGE_W - 5 * mm, PAGE_H - 4.5 * mm, footer)
    # 金句（sub-title）小条
    if subtitle:
        c.setFillColor(ACCENT_LT)
        c.rect(0, PAGE_H - 13 * mm, PAGE_W, 7 * mm, fill=1, stroke=0)
        c.setFillColor(ACCENT)
        c.setFont(CN, 6.5)
        c.drawCentredString(PAGE_W / 2, PAGE_H - 11 * mm, subtitle)


def draw_footer(c, page_num, total):
    c.setFillColor(MUTED)
    c.setFont(CN, 6)
    c.drawString(5 * mm, 3 * mm, "《对话驱动》绩效面谈 · 竞越")
    c.drawCentredString(PAGE_W / 2, 3 * mm, f"A6 · 工具卡 {page_num}/{total}")
    c.drawRightString(PAGE_W - 5 * mm, 3 * mm, "可双面打印")
    # 底部色条
    c.setFillColor(ACCENT)
    c.rect(0, 0, PAGE_W, 1 * mm, fill=1, stroke=0)


def draw_paragraphs(c, paragraphs, x, y, w, h):
    """在一块区域里放段落"""
    f = Frame(x, y, w, h, leftPadding=2, rightPadding=2,
              topPadding=2, bottomPadding=2, showBoundary=0)
    f.addFromList(paragraphs, c)


def make_card_F1():
    """F1_问题类型判断卡（8场景）"""
    title = "F1 · 问题类型判断卡"
    subtitle = "识别问题，是解决问题的一半"
    content_top = PAGE_H - 16 * mm  # 留给金句 + 标题
    content_h = PAGE_H - content_top - 8 * mm

    blocks = [
        Paragraph('<font color="#2C4A7C"><b>正面：5个经典失效</b></font>', STYLES["h2"]),
        Paragraph('<b>【1】缺乏准备型</b> 说不清3个事实 → 停止，回去做F2准备', STYLES["card"]),
        Paragraph('<b>【2】单向宣告型</b> 说话>员工3倍 → 回F3第一步：邀请回顾', STYLES["card"]),
        Paragraph('<b>【3】避重就轻型</b> 绕开核心问题 → 写出"回避的那件事"', STYLES["card"]),
        Paragraph('<b>【4】印象主导型</b> 举不出具体事件 → 回到事面：写3个事实', STYLES["card"]),
        Paragraph('<b>【5】缺乏跟进型</b> 无书面记录 → 当场形成可观察承诺', STYLES["card"]),
        Paragraph('<font color="#2C4A7C"><b>背面：3个AI时代新失效</b></font>', STYLES["h2"]),
        Paragraph('<b>【6】归因混淆型</b> 员工说"AI做的" → F3第二步探寻归因', STYLES["card"]),
        Paragraph('<b>【7】方向迷失型</b> 员工"我没价值" → 先接情绪，再双轨', STYLES["card"]),
        Paragraph('<b>【8】能力漂移型</b> 产出与判断力落差 → 转发展面谈(F6/F8)', STYLES["card"]),
        Paragraph('<font color="#666666"><b>走法：</b>1-3号→F3四步；4-5号→F5四原则；6-8号→F6五类</font>', STYLES["small"]),
    ]
    return title, subtitle, blocks


def make_card_F3():
    """F3_四步面谈法速查卡"""
    title = "F3 · 四步面谈法速查卡"
    subtitle = "面谈不是宣告会，是共建会"
    blocks = [
        Paragraph('<font color="#2C4A7C"><b>① 共看事实</b></font>  邀请/回顾/确认', STYLES["h3"]),
        Paragraph('开场："这个周期快结束了，你印象最深的事是什么？"', STYLES["card"]),
        Paragraph('你要：让员工先说；只描述行为不评价', STYLES["card"]),

        Paragraph('<font color="#2C4A7C"><b>② 探寻归因</b></font>  提问/倾听/识别', STYLES["h3"]),
        Paragraph('核心问："在这件事里，你的判断体现在哪里？"', STYLES["card"]),
        Paragraph('AI时代必问：什么是只有你才能做的？', STYLES["card"]),

        Paragraph('<font color="#2C4A7C"><b>③ 分析缺口</b></font>  对照/识别/说出', STYLES["h3"]),
        Paragraph('事面优先："Q3里X项目，事实A vs 标准B"  ', STYLES["card"]),
        Paragraph('不抢话：给员工"你怎么看"的空间', STYLES["card"]),

        Paragraph('<font color="#2C4A7C"><b>④ 共建方向</b></font>  发问/共创/确认', STYLES["h3"]),
        Paragraph('先问员工："你觉得可以从哪里开始？"', STYLES["card"]),
        Paragraph('收尾：可观察承诺 + 时间点（30天后聊5min）', STYLES["card"]),

        Paragraph('<font color="#666666"><b>时间分配（1h）：</b>共看15+探寻20+分析15+共建10min</font>', STYLES["small"]),
    ]
    return title, subtitle, blocks


def make_card_F6():
    """F6_AI时代五类场景处理速查卡"""
    title = "F6 · AI时代五类场景"
    subtitle = "我们都不知道该怎么评估他了"
    blocks = [
        Paragraph('<font color="#2C4A7C"><b>【A】归因抗议型</b></font>  "AI做的，不公平"', STYLES["h3"]),
        Paragraph('开场："你提的AI参与很重要，我们一起看清你的判断"', STYLES["card"]),

        Paragraph('<font color="#2C4A7C"><b>【B】方向迷失型</b></font>  "我不知道我的价值"', STYLES["h3"]),
        Paragraph('不哄不否定：先接情绪，再识别"你还在做、只有你能做的"', STYLES["card"]),

        Paragraph('<font color="#2C4A7C"><b>【C】漂移识别型</b></font>  "做得还行"但有落差', STYLES["h3"]),
        Paragraph('不指控：说"过去3次你都需要先查AI才开始答"', STYLES["card"]),

        Paragraph('<font color="#2C4A7C"><b>【D】美化成果型</b></font>  产出高但说不清判断', STYLES["h3"]),
        Paragraph('不追过去：聚焦"下次让你的判断贡献可见"', STYLES["card"]),

        Paragraph('<font color="#2C4A7C"><b>【E】AI品行型</b></font>  故意用AI规避工作', STYLES["h3"]),
        Paragraph('不回避：用具体行为证据，明确"这是工作方式和诚信问题"', STYLES["card"]),

        Paragraph('<font color="#666666"><b>红线：</b>A/C最常误判；B给10-15min；D/E不模糊</font>', STYLES["small"]),
    ]
    return title, subtitle, blocks


def make_card_F7():
    """F7_发展对话三个启动问题"""
    title = "F7 · 发展对话三个启动问题"
    subtitle = "第一个问题决定对话的方向感"
    blocks = [
        Paragraph('<font color="#2C4A7C"><b>启动一（通用）</b></font>  最稳', STYLES["h3"]),
        Paragraph('"这个周期结束，让你自己说，最满意的成长是什么？还有哪里值得再提升？"', STYLES["card"]),

        Paragraph('<font color="#2C4A7C"><b>启动二（AI时代）</b></font>  双轨开场', STYLES["h3"]),
        Paragraph('"在你用AI最多的那类工作里，你觉得自己做了什么？', STYLES["card"]),
        Paragraph(' 你希望在哪方面变强——更好用AI，还是把精力放在AI承接不了的深度？"', STYLES["card"]),

        Paragraph('<font color="#2C4A7C"><b>启动三（具体化）</b></font>  深挖瞬间', STYLES["h3"]),
        Paragraph('"如果这个周期有一件事让你感觉\'我在成长\'，那会是什么样的？"', STYLES["card"]),

        Paragraph('<font color="#666666"><b>用法：</b>默认启动一；AI场景+启动二；答得空→启动三</font>', STYLES["small"]),
        Paragraph('<font color="#666666"><b>铁律：</b>问完闭嘴，等10秒；不评判回答</font>', STYLES["small"]),
    ]
    return title, subtitle, blocks


def make_card_gold():
    """金句卡"""
    title = "金句卡 · 绩效面谈核心信念"
    subtitle = None
    blocks = [
        Paragraph('<font color="#2C4A7C"><b>识别问题，是解决问题的一半。</b></font>', STYLES["body"]),
        Paragraph('<font color="#2C4A7C"><b>没有准备的面谈，比没有面谈更糟。</b></font>', STYLES["body"]),
        Paragraph('<font color="#2C4A7C"><b>面谈不是宣告会，是共建会。</b></font>', STYLES["body"]),
        Paragraph('<font color="#2C4A7C"><b>说真话不难，难的是说"听得进去"的真话。</b></font>', STYLES["body"]),
        Paragraph('<font color="#2C4A7C"><b>AI时代最大难题，不是员工不行——是我们不知道怎么评估他了。</b></font>', STYLES["body"]),
        Paragraph('<font color="#2C4A7C"><b>评估面谈是"我看到你做了什么"，发展对话是"你想成为什么"。</b></font>', STYLES["body"]),
        Paragraph('<font color="#2C4A7C"><b>面谈的真正准备，不在会议室里——在会议室外的清单上。</b></font>', STYLES["body"]),
        Paragraph('<font color="#2C4A7C"><b>面谈结束，才是真正工作的开始。</b></font>', STYLES["body"]),
        Paragraph('<font color="#2C4A7C"><b>谁能兼容谁，谁就能领导谁。</b></font>', STYLES["body"]),
        Paragraph('<font color="#2C4A7C"><b>管理者最好的学习，不是"知道"，是"做到"。</b></font>', STYLES["body"]),
    ]
    return title, subtitle, blocks


def main():
    out = r"D:\2026年课程\竞越\绩效管理和绩效面谈：通过绩效面谈让员工更加胜任\完整课程包\15_可打印工具卡\工具卡合集_A6口袋版.pdf"
    cards = [make_card_F1(), make_card_F3(), make_card_F6(), make_card_F7(), make_card_gold()]

    c = canvas.Canvas(out, pagesize=(PAGE_W, PAGE_H))
    c.setTitle("工具卡合集_A6口袋版")
    c.setAuthor("竞越")
    total = len(cards)
    for i, (title, subtitle, blocks) in enumerate(cards, 1):
        draw_header(c, title, subtitle or "", f"{i}/{total}")
        # 内容区
        content_top = PAGE_H - 16 * mm
        if not subtitle:
            content_top = PAGE_H - 12 * mm
        content_h = content_top - 8 * mm
        draw_paragraphs(c, blocks, 4 * mm, 6 * mm, PAGE_W - 8 * mm, content_h)
        draw_footer(c, i, total)
        c.showPage()
    c.save()
    print(f"OK: {out}")
    # 报告大小
    import os
    size_kb = os.path.getsize(out) / 1024
    print(f"Size: {size_kb:.1f} KB · Pages: {total}")


if __name__ == "__main__":
    main()
