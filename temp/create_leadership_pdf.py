# -*- coding: utf-8 -*-
"""
Leadership Foundation - Role Transformation Maturity Self-Assessment Tool
A4 PDF with timeline visualization and self-assessment questionnaire
"""

from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib.colors import HexColor
from reportlab.pdfgen import canvas
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.styles import getSampleStyleSheet
from reportlab.platypus import Paragraph
import os

# Page setup
A4_WIDTH, A4_HEIGHT = A4
OUTPUT_PATH = "D:/新课开发/管理学/15-领导力基础/P2_角色转型成熟度自评.pdf"
FONT_DIR = "C:/Users/Administrator/.claude/skills/canvas-design/canvas-fonts/"

# Color palette - Metamorphic Staging philosophy
COLORS = {
    "bg": "#F8F6F3",
    "stage1": "#8B7355",      # Earth brown - foundation
    "stage2": "#A67B5B",      # Warm amber - emergence
    "stage3": "#6B8E7D",      # Sage green - development
    "stage4": "#4A5568",      # Deep slate - mastery
    "accent": "#C9A86C",      # Gold accent
    "text_dark": "#2D2D2D",
    "text_light": "#F8F6F3",
    "line": "#D4CFC7",
    "grid": "#E8E4DE"
}

# 4 Stages of Role Transformation Maturity
STAGES = [
    {
        "num": "01",
        "title": "认知觉醒",
        "subtitle": "Awareness",
        "characteristics": [
            "意识到角色转换的必要性",
            "理解新旧角色的差异",
            "感受到转变期的迷茫与不适",
            "开始主动学习新角色要求"
        ],
        "color": COLORS["stage1"]
    },
    {
        "num": "02",
        "title": "技能建立",
        "subtitle": "Skill Building",
        "characteristics": [
            "掌握新角色的核心技能",
            "开始在实践中尝试应用",
            "获得初步的成功体验",
            "建立新角色的行为习惯"
        ],
        "color": COLORS["stage2"]
    },
    {
        "num": "03",
        "title": "整合内化",
        "subtitle": "Integration",
        "characteristics": [
            "新旧角色认知融合统一",
            "行为表现自然流畅",
            "能灵活应对不同场景",
            "形成稳定的角色认同"
        ],
        "color": COLORS["stage3"]
    },
    {
        "num": "04",
        "title": "创新引领",
        "subtitle": "Innovation",
        "characteristics": [
            "超越原有角色框架",
            "能够赋能他人转变",
            "创造性地开创新局面",
            "成为他人学习的标杆"
        ],
        "color": COLORS["stage4"]
    }
]

def register_fonts():
    """Register custom fonts"""
    fonts_to_register = [
        ("WorkSans", "WorkSans-Regular.ttf"),
        ("WorkSansBold", "WorkSans-Bold.ttf"),
        ("BricolageGrotesque", "BricolageGrotesque-Regular.ttf"),
        ("BricolageGrotesqueBold", "BricolageGrotesque-Bold.ttf"),
    ]

    for font_name, font_file in fonts_to_register:
        font_path = os.path.join(FONT_DIR, font_file)
        if os.path.exists(font_path):
            pdfmetrics.registerFont(TTFont(font_name, font_path))
        else:
            print(f"Font not found: {font_path}")

def draw_timeline(c, x_start, y_start, width):
    """Draw the main timeline with stages"""
    stage_width = width / 4

    # Timeline base line
    c.setStrokeColor(HexColor(COLORS["line"]))
    c.setLineWidth(2)
    c.line(x_start, y_start, x_start + width, y_start)

    # Draw each stage
    for i, stage in enumerate(STAGES):
        stage_x = x_start + i * stage_width + stage_width / 2

        # Stage node circle
        c.setFillColor(HexColor(stage["color"]))
        c.circle(stage_x, y_start, 12, fill=1, stroke=0)

        # Stage number inside circle
        c.setFillColor(HexColor(COLORS["text_light"]))
        c.setFont("BricolageGrotesqueBold", 10)
        c.drawCentredString(stage_x, y_start - 4, stage["num"])

        # Stage title below
        c.setFillColor(HexColor(stage["color"]))
        c.setFont("BricolageGrotesqueBold", 11)
        c.drawCentredString(stage_x, y_start - 32, stage["title"])

        # English subtitle
        c.setFont("WorkSans", 7)
        c.setFillColor(HexColor("#888888"))
        c.drawCentredString(stage_x, y_start - 44, stage["subtitle"])

def draw_characteristics_box(c, x, y, width, height, stage, index):
    """Draw characteristics box for each stage"""
    box_padding = 8 * mm

    # Box background
    c.setFillColor(HexColor("#FFFFFF"))
    c.setStrokeColor(HexColor(stage["color"]))
    c.setLineWidth(1.5)
    c.roundRect(x, y - height, width, height, 3*mm, fill=1, stroke=1)

    # Left accent bar
    c.setFillColor(HexColor(stage["color"]))
    c.rect(x, y - height, 3, height, fill=1, stroke=0)

    # Characteristics text
    text_x = x + box_padding
    text_y = y - 12 * mm

    c.setFillColor(HexColor(COLORS["text_dark"]))
    c.setFont("BricolageGrotesque", 8)

    for j, char in enumerate(stage["characteristics"]):
        # Bullet point
        c.setFillColor(HexColor(stage["color"]))
        c.circle(text_x + 2, text_y - j * 10 - 2, 2, fill=1, stroke=0)

        # Text
        c.setFillColor(HexColor(COLORS["text_dark"]))
        c.drawString(text_x + 8, text_y - j * 10, char)

def draw_questionnaire(c, x, y, width):
    """Draw self-assessment questionnaire section"""
    # Section title
    c.setFillColor(HexColor(COLORS["stage4"]))
    c.setFont("BricolageGrotesqueBold", 14)
    c.drawString(x, y, "自评问卷")

    c.setFont("WorkSans", 9)
    c.setFillColor(HexColor("#666666"))
    c.drawString(x, y - 12, "Self-Assessment Questionnaire")

    # Decorative line
    c.setStrokeColor(HexColor(COLORS["accent"]))
    c.setLineWidth(2)
    c.line(x, y - 18, x + 60, y - 18)

    # Questions
    questions = [
        ("1", "我在当前角色中感到困惑和不确定"),
        ("2", "我清楚知道新角色对我的要求"),
        ("3", "我正在积极学习新角色所需的技能"),
        ("4", "我能较好地在不同场景中切换角色"),
        ("5", "我已经完全内化了新角色的身份认同"),
        ("6", "我能帮助他人完成类似的角色转型")
    ]

    question_y = y - 40
    for q_num, q_text in questions:
        # Question number circle
        c.setFillColor(HexColor(COLORS["grid"]))
        c.circle(x + 8, question_y + 2, 8, fill=1, stroke=0)
        c.setFillColor(HexColor(COLORS["stage4"]))
        c.setFont("BricolageGrotesqueBold", 7)
        c.drawCentredString(x + 8, question_y - 1, q_num)

        # Question text
        c.setFillColor(HexColor(COLORS["text_dark"]))
        c.setFont("WorkSans", 9)
        c.drawString(x + 22, question_y, q_text)

        # Scale indicators
        scale_x = x + width - 80
        c.setFont("WorkSans", 7)
        c.setFillColor(HexColor("#888888"))
        c.drawString(scale_x - 25, question_y, "从不")

        for s in range(5):
            c.setFillColor(HexColor(COLORS["line"]))
            c.circle(scale_x + s * 15, question_y + 2, 4, fill=1, stroke=0)

        c.setFillColor(HexColor("#888888"))
        c.drawString(scale_x + 80, question_y, "总是")

        question_y -= 22

def draw_footer(c):
    """Draw footer"""
    footer_y = 20 * mm
    c.setFillColor(HexColor("#AAAAAA"))
    c.setFont("WorkSans", 7)
    c.drawString(20 * mm, footer_y, "领导力基础 | Leadership Foundation")
    c.drawRightString(A4_WIDTH - 20 * mm, footer_y, "角色转型成熟度自评工具 v1.0")

def create_pdf():
    """Main PDF creation function"""
    register_fonts()

    c = canvas.Canvas(OUTPUT_PATH, pagesize=A4)

    # Page setup
    c.setFillColor(HexColor(COLORS["bg"]))
    c.rect(0, 0, A4_WIDTH, A4_HEIGHT, fill=1, stroke=0)

    # Header
    header_y = A4_HEIGHT - 25 * mm

    # Main title
    c.setFillColor(HexColor(COLORS["stage4"]))
    c.setFont("BricolageGrotesqueBold", 22)
    c.drawString(20 * mm, header_y, "角色转型成熟度自评")

    # Subtitle
    c.setFont("WorkSans", 10)
    c.setFillColor(HexColor("#666666"))
    c.drawString(20 * mm, header_y - 14, "Role Transformation Maturity Self-Assessment")

    # Decorative element
    c.setStrokeColor(HexColor(COLORS["accent"]))
    c.setLineWidth(3)
    c.line(20 * mm, header_y - 22, 80 * mm, header_y - 22)

    # Timeline section
    timeline_y = header_y - 55 * mm
    timeline_width = A4_WIDTH - 40 * mm

    draw_timeline(c, 20 * mm, timeline_y, timeline_width)

    # Characteristics boxes
    box_width = (A4_WIDTH - 50 * mm) / 4
    box_height = 52 * mm
    box_y = timeline_y - 15 * mm

    for i, stage in enumerate(STAGES):
        box_x = 20 * mm + i * (box_width + 3 * mm)
        draw_characteristics_box(c, box_x, box_y, box_width, box_height, stage, i)

    # Questionnaire section
    questionnaire_y = box_y - box_height - 20 * mm
    questionnaire_width = A4_WIDTH - 40 * mm

    draw_questionnaire(c, 20 * mm, questionnaire_y, questionnaire_width)

    # Instructions box
    inst_box_y = questionnaire_y - 175
    inst_box_height = 35 * mm

    c.setFillColor(HexColor("#FFFFFF"))
    c.setStrokeColor(HexColor(COLORS["line"]))
    c.setLineWidth(1)
    c.roundRect(20 * mm, inst_box_y - inst_box_height, questionnaire_width, inst_box_height, 3*mm, fill=1, stroke=1)

    c.setFillColor(HexColor(COLORS["stage4"]))
    c.setFont("BricolageGrotesqueBold", 10)
    c.drawString(25 * mm, inst_box_y - 10, "使用说明")

    c.setFont("WorkSans", 8)
    c.setFillColor(HexColor("#555555"))
    instructions = [
        "• 根据过去一个月的行为表现，对每个问题进行1-5分评分",
        "• 1分=从不/完全不符合  5分=总是/完全符合",
        "• 将各题得分相加，对照右侧评分标准确定您当前所处的转型阶段",
        "• 评分结果仅供自我参考，不代表任何职业资格认证"
    ]
    for i, line in enumerate(instructions):
        c.drawString(25 * mm, inst_box_y - 22 - i * 8, line)

    # Scoring guide
    scoring_x = A4_WIDTH - 130 * mm
    scoring_y = inst_box_y - 10

    c.setFillColor(HexColor(COLORS["stage4"]))
    c.setFont("BricolageGrotesqueBold", 10)
    c.drawString(scoring_x, scoring_y, "评分标准")

    scoring_items = [
        ("6-12分", "阶段一：认知觉醒", COLORS["stage1"]),
        ("13-19分", "阶段二：技能建立", COLORS["stage2"]),
        ("20-25分", "阶段三：整合内化", COLORS["stage3"]),
        ("26-30分", "阶段四：创新引领", COLORS["stage4"])
    ]

    for i, (score, label, color) in enumerate(scoring_items):
        item_y = scoring_y - 20 - i * 14
        c.setFillColor(HexColor(color))
        c.rect(scoring_x, item_y - 3, 4, 10, fill=1, stroke=0)
        c.setFillColor(HexColor(COLORS["text_dark"]))
        c.setFont("WorkSans", 8)
        c.drawString(scoring_x + 10, item_y, f"{score} {label}")

    # Footer
    draw_footer(c)

    # Print optimization
    c.setTitle("角色转型成熟度自评")
    c.setAuthor("领导力基础")
    c.setSubject("自我评估工具")

    c.save()
    print(f"PDF created: {OUTPUT_PATH}")

if __name__ == "__main__":
    create_pdf()
