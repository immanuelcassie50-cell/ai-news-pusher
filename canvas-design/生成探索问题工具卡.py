#!/usr/bin/env python3
"""
探索问题工具卡 PDF 生成器
Meticulously crafted design for training tool card
"""

from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib.colors import HexColor
from reportlab.pdfgen import canvas
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
import os

# Color Palette - meticulously calibrated
NAVY = HexColor('#1a2a4a')
CREAM = HexColor('#f5f0e8')
CORAL = HexColor('#e85a4f')
LIGHT_GRAY = HexColor('#e8e4dd')
DARK_GRAY = HexColor('#4a4a4a')
WHITE = HexColor('#ffffff')

# Font paths (using system fonts)
FONT_MAIN = "Helvetica"
FONT_BOLD = "Helvetica-Bold"

def draw_front(c, width, height):
    """正面设计"""
    # Background
    c.setFillColor(CREAM)
    c.rect(0, 0, width, height, fill=True, stroke=False)

    # Top accent bar
    c.setFillColor(NAVY)
    c.rect(0, height - 12*mm, width, 12*mm, fill=True, stroke=False)

    # Title section
    c.setFillColor(NAVY)
    c.setFont(FONT_BOLD, 28)
    c.drawString(15*mm, height - 28*mm, "探索问题工具卡")

    # Subtitle
    c.setFillColor(DARK_GRAY)
    c.setFont(FONT_MAIN, 11)
    c.drawString(15*mm, height - 38*mm, "开放式探询 · 针对性追问 · 假设性提问")

    # Decorative line
    c.setStrokeColor(CORAL)
    c.setLineWidth(2)
    c.line(15*mm, height - 43*mm, 80*mm, height - 43*mm)

    # Three columns layout
    col_width = (width - 30*mm - 8*mm) / 3
    col1_x = 15*mm
    col2_x = col1_x + col_width + 4*mm
    col3_x = col2_x + col_width + 4*mm

    section_start_y = height - 58*mm

    # Column 1: 开放式探询
    draw_section(c, col1_x, section_start_y, col_width, "开放式探询", "了解客户想法", [
        "您希望我们为您提供什么样的帮助？",
        "您对这个方案有什么看法？",
        "您之前遇到过类似的情况吗？",
        "您最关心的是哪方面？"
    ], CORAL)

    # Column 2: 针对性追问
    draw_section(c, col2_x, section_start_y, col_width, "针对性追问", "深入了解需求", [
        "您能具体说说……吗？",
        "这个情况是什么时候开始的？",
        "您之前是怎么处理的？",
        "您希望达到什么样的结果？"
    ], NAVY)

    # Column 3: 假设性提问
    draw_section(c, col3_x, section_start_y, col_width, "假设性提问", "引导客户思考", [
        "如果……会怎样？",
        "假设我们这样做，您觉得合适吗？",
        "如果是您来处理，会选择哪个方案？"
    ], DARK_GRAY)

    # Bottom footer bar
    c.setFillColor(NAVY)
    c.rect(0, 0, width, 10*mm, fill=True, stroke=False)

    c.setFillColor(WHITE)
    c.setFont(FONT_MAIN, 8)
    c.drawString(15*mm, 3.5*mm, "关键时刻：以服务建立企业竞争优势 | 工具卡 02")


def draw_section(c, x, y, width, title, subtitle, questions, accent_color):
    """绘制问题分类区块"""
    # Section background
    c.setFillColor(WHITE)
    c.roundRect(x, y - 95*mm, width, 95*mm, 3*mm, fill=True, stroke=False)

    # Accent top bar
    c.setFillColor(accent_color)
    c.rect(x, y + 5*mm, width, 2*mm, fill=True, stroke=False)

    # Section number circle
    c.setFillColor(accent_color)
    c.circle(x + 8*mm, y + 3*mm, 3*mm, fill=True, stroke=False)

    # Title
    c.setFillColor(accent_color)
    c.setFont(FONT_BOLD, 13)
    c.drawString(x + 14*mm, y + 1*mm, title)

    # Subtitle
    c.setFillColor(DARK_GRAY)
    c.setFont(FONT_MAIN, 8)
    c.drawString(x + 14*mm, y - 4*mm, subtitle)

    # Questions
    c.setFillColor(DARK_GRAY)
    c.setFont(FONT_MAIN, 9)
    question_y = y - 16*mm
    for q in questions:
        # Bullet
        c.setFillColor(accent_color)
        c.circle(x + 4*mm, question_y + 1.5*mm, 1*mm, fill=True, stroke=False)
        # Question text
        c.setFillColor(DARK_GRAY)
        # Wrap long text
        if len(q) > 25:
            c.drawString(x + 8*mm, question_y, q[:25])
            c.drawString(x + 8*mm, question_y - 5*mm, q[25:])
            question_y -= 18*mm
        else:
            c.drawString(x + 8*mm, question_y, q)
            question_y -= 14*mm


def draw_back(c, width, height):
    """背面设计"""
    # Background
    c.setFillColor(CREAM)
    c.rect(0, 0, width, height, fill=True, stroke=False)

    # Top accent bar
    c.setFillColor(NAVY)
    c.rect(0, height - 12*mm, width, 12*mm, fill=True, stroke=False)

    # Title
    c.setFillColor(NAVY)
    c.setFont(FONT_BOLD, 24)
    c.drawString(15*mm, height - 30*mm, "探索的节奏")

    # Decorative line
    c.setStrokeColor(CORAL)
    c.setLineWidth(2)
    c.line(15*mm, height - 36*mm, 70*mm, height - 36*mm)

    # Three-step rhythm visualization
    step_y = height - 55*mm
    step_width = (width - 30*mm - 10*mm) / 3

    # Step 1
    draw_step(c, 15*mm, step_y, step_width, "01", "先用开放式问题", "了解全貌", NAVY)

    # Arrow 1
    c.setFillColor(CORAL)
    c.setFont(FONT_BOLD, 20)
    c.drawString(15*mm + step_width + 2*mm, step_y + 5*mm, "→")

    # Step 2
    draw_step(c, 15*mm + step_width + 8*mm, step_y, step_width, "02", "再用追问深入", "关键细节", CORAL)

    # Arrow 2
    c.setFillColor(CORAL)
    c.drawString(15*mm + step_width*2 + 10*mm, step_y + 5*mm, "→")

    # Step 3
    draw_step(c, 15*mm + step_width*2 + 16*mm, step_y, step_width, "03", "最后用假设性提问", "引导决策", DARK_GRAY)

    # Taboo section
    taboo_y = height - 110*mm

    # Taboo header
    c.setFillColor(CORAL)
    c.setFont(FONT_BOLD, 14)
    c.drawString(15*mm, taboo_y, "禁忌")

    # Taboo box
    c.setFillColor(WHITE)
    c.roundRect(15*mm, taboo_y - 55*mm, width - 30*mm, 55*mm, 3*mm, fill=True, stroke=False)
    c.setStrokeColor(CORAL)
    c.setLineWidth(1)
    c.roundRect(15*mm, taboo_y - 55*mm, width - 30*mm, 55*mm, 3*mm, fill=False, stroke=True)

    # Taboo items
    c.setFillColor(DARK_GRAY)
    c.setFont(FONT_MAIN, 10)

    taboo_x = 22*mm
    taboo_items = [
        "不要连续追问超过3个问题",
        "不要问引导性问题（已有答案）",
        "不要在客户思考时打断"
    ]

    item_y = taboo_y - 18*mm
    for item in taboo_items:
        # X mark
        c.setFillColor(CORAL)
        c.setFont(FONT_BOLD, 12)
        c.drawString(taboo_x, item_y, "✗")
        # Text
        c.setFillColor(DARK_GRAY)
        c.setFont(FONT_MAIN, 10)
        c.drawString(taboo_x + 8*mm, item_y, item)
        item_y -= 16*mm

    # Visual element - abstract question marks pattern
    c.setFillColor(LIGHT_GRAY)
    c.setFont(FONT_BOLD, 40)
    for i in range(5):
        c.drawString(130*mm + i*15*mm, 30*mm, "?")
        c.setFillColor(LIGHT_GRAY if i % 2 == 0 else CREAM)

    # Bottom footer bar
    c.setFillColor(NAVY)
    c.rect(0, 0, width, 10*mm, fill=True, stroke=False)

    c.setFillColor(WHITE)
    c.setFont(FONT_MAIN, 8)
    c.drawString(15*mm, 3.5*mm, "关键时刻：以服务建立企业竞争优势 | 工具卡 02")


def draw_step(c, x, y, width, num, title, subtitle, color):
    """绘制步骤块"""
    # Background
    c.setFillColor(WHITE)
    c.roundRect(x, y - 25*mm, width, 30*mm, 3*mm, fill=True, stroke=False)

    # Top accent
    c.setFillColor(color)
    c.rect(x, y + 2*mm, width, 2*mm, fill=True, stroke=False)

    # Number
    c.setFillColor(color)
    c.setFont(FONT_BOLD, 18)
    c.drawString(x + 5*mm, y - 12*mm, num)

    # Title
    c.setFillColor(NAVY)
    c.setFont(FONT_BOLD, 9)
    c.drawString(x + 5*mm, y - 20*mm, title)

    # Subtitle
    c.setFillColor(DARK_GRAY)
    c.setFont(FONT_MAIN, 8)
    c.drawString(x + 5*mm, y - 26*mm, subtitle)


def create_tool_card():
    """生成工具卡PDF"""
    output_path = "D:/新课开发/服务和体验/关键时刻：以服务建立企业竞争优势/完整课程包/12_工具卡/02-探索问题工具卡.pdf"

    # A4 landscape for tool card format
    width, height = A4
    c = canvas.Canvas(output_path, pagesize=A4)

    # Page 1: Front
    draw_front(c, width, height)
    c.showPage()

    # Page 2: Back
    draw_back(c, width, height)
    c.showPage()

    c.save()
    print(f"PDF created: {output_path}")


if __name__ == "__main__":
    create_tool_card()
