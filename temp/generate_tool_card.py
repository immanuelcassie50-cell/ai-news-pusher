#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
可打印工具卡生成器 - 全球化思维自测卡
A4尺寸 (210mm x 297mm) 双面设计
"""

from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib.colors import HexColor
from reportlab.pdfgen import canvas
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
import os

# 注册中文字体
pdfmetrics.registerFont(TTFont('NotoSansSC', 'C:/Windows/Fonts/NotoSansSC-VF.ttf'))
pdfmetrics.registerFont(TTFont('NotoSansSC-Bold', 'C:/Windows/Fonts/NotoSansSC-VF.ttf'))

# 页面尺寸 (A4)
PAGE_WIDTH, PAGE_HEIGHT = A4  # 595.27 x 841.89 points

# 配色
DEEP_BLUE = HexColor('#1a365d')
GOLD = HexColor('#d69e2e')
WHITE = HexColor('#ffffff')
LIGHT_GRAY = HexColor('#f7fafc')
DARK_GRAY = HexColor('#2d3748')

# 字体
CHINESE_FONT = 'NotoSansSC'
CHINESE_FONT_BOLD = 'NotoSansSC-Bold'

def draw_front_page(c):
    """正面：全球化思维自测10题"""
    # 背景
    c.setFillColor(WHITE)
    c.rect(0, 0, PAGE_WIDTH, PAGE_HEIGHT, fill=True)

    # 顶部深蓝条
    c.setFillColor(DEEP_BLUE)
    c.rect(0, PAGE_HEIGHT - 45*mm, PAGE_WIDTH, 45*mm, fill=True)

    # 标题
    c.setFillColor(WHITE)
    c.setFont(CHINESE_FONT_BOLD, 28)
    c.drawCentredString(PAGE_WIDTH/2, PAGE_HEIGHT - 28*mm, "全球化思维自测卡")

    # 副标题金色装饰线
    c.setStrokeColor(GOLD)
    c.setLineWidth(2)
    c.line(60*mm, PAGE_HEIGHT - 52*mm, 150*mm, PAGE_HEIGHT - 52*mm)

    # 学习阶段标签
    c.setFillColor(GOLD)
    c.setFont(CHINESE_FONT_BOLD, 11)
    c.drawString(60*mm, PAGE_HEIGHT - 58*mm, "学习前自测")
    c.drawString(105*mm, PAGE_HEIGHT - 58*mm, "|")
    c.setFillColor(HexColor('#718096'))
    c.drawString(115*mm, PAGE_HEIGHT - 58*mm, "学习后复测")
    c.drawString(160*mm, PAGE_HEIGHT - 58*mm, "|")
    c.setFillColor(HexColor('#718096'))
    c.drawString(170*mm, PAGE_HEIGHT - 58*mm, "对比进步")

    # 题目区域
    questions = [
        "一国货币升值会导致进口商品价格下降还是上升？",
        '贸易顺差和逆差，哪个对经济发展更"好"？',
        "关税壁垒提高会对国内消费者产生什么影响？",
        "人民币升值对出口企业有什么影响？",
        "外汇储备的主要作用是什么？",
        '什么是"不可能三角"（蒙代尔三元悖论）？',
        "产业链转移的主要原因有哪些？",
        "汇率波动对企业有哪些类型的风险？",
        "贸易战通常通过哪些途径传导影响？",
        "什么是外汇套期保值的基本原理？",
    ]

    start_y = PAGE_HEIGHT - 80*mm
    line_height = 38*mm
    num_width = 12*mm

    for i, q in enumerate(questions):
        y = start_y - i * line_height

        # 序号圆圈
        c.setFillColor(DEEP_BLUE)
        c.circle(20*mm, y + 3*mm, 5*mm, fill=True)
        c.setFillColor(WHITE)
        c.setFont(CHINESE_FONT_BOLD, 11)
        c.drawCentredString(20*mm, y, str(i + 1))

        # 题目文字
        c.setFillColor(DARK_GRAY)
        c.setFont(CHINESE_FONT, 13)
        c.drawString(30*mm, y, q)

        # 底部装饰线
        if i < len(questions) - 1:
            c.setStrokeColor(HexColor('#e2e8f0'))
            c.setLineWidth(0.5)
            c.line(30*mm, y - 8*mm, 180*mm, y - 8*mm)

    # 底部信息栏
    c.setFillColor(DEEP_BLUE)
    c.rect(0, 0, PAGE_WIDTH, 18*mm, fill=True)

    c.setFillColor(WHITE)
    c.setFont(CHINESE_FONT, 9)
    c.drawCentredString(PAGE_WIDTH/2, 7*mm, "课程11：全球化与国际收支  |  开篇认知诊断工具")

    # 右侧金色装饰条
    c.setFillColor(GOLD)
    c.rect(PAGE_WIDTH - 4*mm, 18*mm, 4*mm, PAGE_HEIGHT - 63*mm, fill=True)

def draw_back_page(c):
    """背面：使用说明"""
    # 背景
    c.setFillColor(WHITE)
    c.rect(0, 0, PAGE_WIDTH, PAGE_HEIGHT, fill=True)

    # 左侧金色装饰条
    c.setFillColor(GOLD)
    c.rect(0, 0, 4*mm, PAGE_HEIGHT, fill=True)

    # 顶部深蓝区域
    c.setFillColor(DEEP_BLUE)
    c.rect(4*mm, PAGE_HEIGHT - 50*mm, PAGE_WIDTH - 4*mm, 50*mm, fill=True)

    # 标题
    c.setFillColor(WHITE)
    c.setFont(CHINESE_FONT_BOLD, 24)
    c.drawCentredString(PAGE_WIDTH/2, PAGE_HEIGHT - 30*mm, "使用说明")

    # 使用指南标题
    c.setFillColor(DEEP_BLUE)
    c.setFont(CHINESE_FONT_BOLD, 16)
    c.drawString(30*mm, PAGE_HEIGHT - 70*mm, "使用指南")

    # 步骤
    steps = [
        ("第1步", "闭卷作答，记录每题答案"),
        ("第2步", "学习完整个课程后"),
        ("第3步", "重新作答，对比两次答案"),
        ("第4步", "标注理解仍不清晰的知识点"),
    ]

    start_y = PAGE_HEIGHT - 95*mm
    step_height = 28*mm

    for i, (step, desc) in enumerate(steps):
        y = start_y - i * step_height

        # 步骤编号
        c.setFillColor(GOLD)
        c.setFont(CHINESE_FONT_BOLD, 14)
        c.drawString(30*mm, y, step)

        # 描述
        c.setFillColor(DARK_GRAY)
        c.setFont(CHINESE_FONT, 13)
        c.drawString(65*mm, y, desc)

        # 连接线
        if i < len(steps) - 1:
            c.setStrokeColor(GOLD)
            c.setLineWidth(1.5)
            c.line(35*mm, y - 8*mm, 35*mm, y - step_height + 8*mm)

    # 底部说明区域
    c.setFillColor(LIGHT_GRAY)
    c.rect(20*mm, 30*mm, PAGE_WIDTH - 40*mm, 55*mm, fill=True)

    # 底部说明标题
    c.setFillColor(DEEP_BLUE)
    c.setFont("Helvetica-Bold", 12)
    c.drawString(30*mm, 75*mm, "设计理念")

    c.setFillColor(DARK_GRAY)
    c.setFont(CHINESE_FONT, 10)
    c.drawString(30*mm, 60*mm, "本工具卡用于学习前诊断已知、学习后检验所学、对比两次答案发现进步空间。")
    c.drawString(30*mm, 47*mm, "建议配合课程全程使用，完成学习后重新作答并记录进步。")

    # 底部信息栏
    c.setFillColor(DEEP_BLUE)
    c.rect(4*mm, 0, PAGE_WIDTH - 4*mm, 18*mm, fill=True)

    c.setFillColor(WHITE)
    c.setFont(CHINESE_FONT, 9)
    c.drawCentredString(PAGE_WIDTH/2, 7*mm, "课程11：全球化与国际收支  |  开篇认知诊断工具")

def create_pdf(output_path):
    """生成双面PDF"""
    c = canvas.Canvas(output_path, pagesize=A4)

    # 正面
    draw_front_page(c)
    c.showPage()

    # 背面
    draw_back_page(c)
    c.showPage()

    c.save()
    print(f"PDF已生成: {output_path}")

if __name__ == "__main__":
    output_path = "D:/新课开发/经济学/11_全球化与国际收支/可打印工具卡/01-开篇认知自测卡.pdf"
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    create_pdf(output_path)
