#!/usr/bin/env python3
"""
行动学习成果汇报课 · 四步核心路径图
A3 Landscape Masterpiece — Silent Authority Philosophy
"""

from reportlab.lib.pagesizes import A3, landscape
from reportlab.pdfgen import canvas
from reportlab.lib.colors import HexColor, white, black
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
import os

# ─── Palette ───────────────────────────────────────────────────────────
VOID     = HexColor('#0f0f18')
PARCHMENT= HexColor('#f7f5f0')
GOLD     = HexColor('#b8880a')
AZURE    = HexColor('#1a6b87')
VIOLET   = HexColor('#5c3d9c')
NAVY     = HexColor('#0d3d6a')
MUTED    = HexColor('#6a6a6a')
BODY     = HexColor('#2a2a2a')
CARD_BG  = HexColor('#ffffff')
SUBTLE   = HexColor('#e8e4dc')

STAGE_COLORS = [GOLD, AZURE, VIOLET, NAVY]
STAGE_NAMES_ZH = ['成果体系', '素材整理', '亮点提炼', '一页纸呈现']
STAGE_NAMES_EN = ['Outcome System', 'Material Curation', 'Highlight Extraction', 'One-Pager']
INSIGHTS = [
    '"汇报 ≠ 报告做了什么\n= 让价值被准确感知"',
    '"先系统盘点所有素材\n再动笔写报告"',
    '"PPT是Word的预告片\n只展示最值得记住的内容"',
    '"价值陈述，不是报告的缩写\n每个字都要值得被看"',
]

PAGE_W, PAGE_H = landscape(A3)  # 420×297mm

# ─── Register Fonts ──────────────────────────────────────────────────
font_dirs = [
    'C:/Users/Administrator/.claude/skills/canvas-design/canvas-fonts',
    'C:/Windows/Fonts',
]

def register_font(name, filename):
    for d in font_dirs:
        path = os.path.join(d, filename)
        if os.path.exists(path):
            try:
                pdfmetrics.registerFont(TTFont(name, path))
                return name
            except:
                pass
    return 'Helvetica'

FONT_TITLE  = register_font('FontTitle',  'BricolageGrotesque-Bold.ttf')
FONT_BODY   = register_font('FontBody',   'InstrumentSans-Regular.ttf')
FONT_ACCENT = register_font('FontAccent', 'Jura-Medium.ttf')
FONT_NUM    = register_font('FontNum',    'BigShoulders-Oblique.ttf')

# ─── Canvas Setup ────────────────────────────────────────────────────
output_path = 'D:/CC/temp/行动学习成果汇报课_艺术版.pdf'
c = canvas.Canvas(output_path, pagesize=(PAGE_W, PAGE_H))
c.setTitle('行动学习成果汇报课 · 四步核心路径图')

# ─── Helpers ──────────────────────────────────────────────────────────
def draw_centered_text(c_obj, text, x, y, font, size, color, max_width=None):
    w = c_obj.stringWidth(text, font, size)
    if max_width and w > max_width:
        # Simple text wrapping
        words = text.split('\n')
        line_h = size * 1.4
        start_y = y + (len(words)-1) * line_h / 2
        for i, line in enumerate(words):
            c_obj.setFont(font, size)
            c_obj.setFillColor(color)
            c_obj.drawCentredString(x, start_y - i * line_h, line)
    else:
        c_obj.setFont(font, size)
        c_obj.setFillColor(color)
        c_obj.drawCentredString(x, y, text)

def draw_left_text(c_obj, text, x, y, font, size, color):
    c_obj.setFont(font, size)
    c_obj.setFillColor(color)
    c_obj.drawString(x, y, text)

def draw_right_text(c_obj, text, x, y, font, size, color):
    c_obj.setFont(font, size)
    c_obj.setFillColor(color)
    c_obj.drawRightString(x, y, text)

def rounded_rect(c_obj, x, y, w, h, r, fill_color, stroke_color=None):
    c_obj.setFillColor(fill_color)
    if stroke_color:
        c_obj.setStrokeColor(stroke_color)
        c_obj.setLineWidth(0.3)
    else:
        c_obj.setLineWidth(0)
    c_obj.roundRect(x, y, w, h, r, fill=1, stroke=1 if stroke_color else 0)

def circle(c_obj, cx, cy, r, fill_color):
    c_obj.setFillColor(fill_color)
    c_obj.circle(cx, cy, r, fill=1, stroke=0)

# ─── Background ────────────────────────────────────────────────────────
c.setFillColor(PARCHMENT)
c.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)

# ─── Header Band ───────────────────────────────────────────────────────
HEADER_H = 52 * mm
c.setFillColor(VOID)
c.rect(0, PAGE_H - HEADER_H, PAGE_W, HEADER_H, fill=1, stroke=0)

# Eye label
c.setFillColor(GOLD)
c.setFont(FONT_ACCENT, 7)
c.setFillColor(GOLD)
c.drawString(15*mm, PAGE_H - 14*mm, 'ACTION LEARNING · 成果汇报课')

# Main title
c.setFillColor(white)
c.setFont(FONT_TITLE, 26)
c.drawString(15*mm, PAGE_H - 32*mm, '四步核心路径图')

# Subtitle line
c.setFillColor(HexColor('#706e6a'))
c.setFont(FONT_BODY, 8)
c.drawString(15*mm, PAGE_H - 43*mm, '成果体系  ·  素材整理  ·  亮点提炼  ·  一页纸呈现')

# Right quote
c.setFillColor(HexColor('#b8b5ae'))
c.setFont(FONT_BODY, 7.5)
quote_lines = [
    '三个月的工作，值得被认真地说出来。',
    '领导看不见的成果，等于不存在。',
]
for i, line in enumerate(quote_lines):
    c.drawRightString(PAGE_W - 15*mm, PAGE_H - (15+i*10)*mm, line)

# Decorative gold line (right)
c.setStrokeColor(GOLD)
c.setLineWidth(1)
c.line(PAGE_W - 75*mm, PAGE_H - 12*mm, PAGE_W - 15*mm, PAGE_H - 12*mm)
c.line(PAGE_W - 75*mm, PAGE_H - 12*mm, PAGE_W - 75*mm, PAGE_H - 45*mm)

# ─── Footer Band ───────────────────────────────────────────────────────
FOOTER_H = 10 * mm
c.setFillColor(VOID)
c.rect(0, 0, PAGE_W, FOOTER_H, fill=1, stroke=0)

c.setFillColor(white)
c.setFont(FONT_ACCENT, 6)
c.drawString(15*mm, 4*mm, '罗宏伟 · 行动学习辅导专家')
c.setFillColor(HexColor('#484640'))
c.setFont(FONT_BODY, 5.5)
c.drawRightString(PAGE_W - 15*mm, 4*mm, '行动学习成果汇报课 · 四步核心路径图')

# ─── Main Content Area ────────────────────────────────────────────────
CONTENT_TOP = PAGE_H - HEADER_H - 6*mm
CONTENT_BOT = FOOTER_H + 6*mm
CONTENT_H = CONTENT_TOP - CONTENT_BOT
CONTENT_LEFT = 12*mm
CONTENT_RIGHT = PAGE_W - 12*mm
CONTENT_W = CONTENT_RIGHT - CONTENT_LEFT

MARGIN = 4*mm
CARD_GAP = 4*mm
num_cards = 4
card_w = (CONTENT_W - MARGIN * 2 - CARD_GAP * (num_cards - 1)) / num_cards
card_h = CONTENT_H

# ─── Stage Cards ───────────────────────────────────────────────────────
for i in range(4):
    color = STAGE_COLORS[i]
    card_x = CONTENT_LEFT + MARGIN + i * (card_w + CARD_GAP)
    card_y = CONTENT_BOT

    # Card background with subtle shadow simulation
    c.setFillColor(HexColor('#f0ede6'))
    c.roundRect(card_x + 0.5*mm, card_y - 0.5*mm, card_w, card_h, 2*mm, fill=1, stroke=0)

    c.setFillColor(CARD_BG)
    c.setLineWidth(0.3)
    c.setStrokeColor(HexColor('#d8d4cc'))
    c.roundRect(card_x, card_y, card_w, card_h, 2*mm, fill=1, stroke=1)

    # Color top accent bar
    c.setFillColor(color)
    c.roundRect(card_x, card_y + card_h - 6*mm, card_w, 6*mm, 2*mm, fill=1, stroke=0)
    # Cover bottom corners of top bar
    c.setFillColor(color)
    c.rect(card_x, card_y + card_h - 6*mm, card_w, 3*mm, fill=1, stroke=0)

    # Large ghost number
    c.setFillColor(HexColor('#00000008'))
    c.setFont(FONT_NUM, 52)
    c.drawCentredString(card_x + card_w/2, card_y + card_h - 24*mm, f'0{i+1}')

    # Stage title
    c.setFillColor(white)
    c.setFont(FONT_TITLE, 11)
    c.drawCentredString(card_x + card_w/2, card_y + card_h - 11*mm, STAGE_NAMES_ZH[i])

    # English subtitle
    c.setFillColor(HexColor('#ffffffaa'))
    c.setFont(FONT_ACCENT, 5.5)
    c.drawCentredString(card_x + card_w/2, card_y + card_h - 15.5*mm, STAGE_NAMES_EN[i])

    # Content area
    content_pad = 4*mm
    content_top = card_y + card_h - 18*mm
    content_bottom = card_y + 3*mm
    content_inner_h = content_top - content_bottom

    cy = content_top - 3*mm

    # Insight strip
    insight_h = 12*mm
    c.setFillColor(color)
    c.setLineWidth(0)
    c.rect(card_x + content_pad, cy - insight_h, card_w - content_pad*2, insight_h, fill=1, stroke=0)
    # Left accent bar
    c.setFillColor(color)
    c.rect(card_x + content_pad, cy - insight_h, 1.5*mm, insight_h, fill=1, stroke=0)

    c.setFillColor(white)
    c.setFont(FONT_BODY, 5.5)
    insight_lines = INSIGHTS[i].split('\n')
    line_y = cy - 4*mm
    for line in insight_lines:
        c.drawCentredString(card_x + card_w/2, line_y, line)
        line_y -= 5.5*mm

    cy -= insight_h + 4*mm

    # Section 1: Block title
    section_titles = ['双重使命', '三层素材', 'PPT只放三类内容', '逻辑五环']
    section_items = [
        ['成果证明 解决了什么，取得了什么', '经验沉淀 发现了规律，形成可复用方法'],
        ['① 实践经历 做了什么 · 遇到什么 · 如何解决', '② 过程材料 计划 · 记录 · 数据 · 视觉影像', '③ 成果提炼 定量 + 定性（缺一不可）'],
        ['① 关键数字（所有量化成果）', '② 核心观点（每模块最重要的一句话）', '③ 结构性标题（帮听众定位）'],
        ['遇到了什么问题（有多严重）', '用了什么方法（解决哪个具体障碍）', '数字证明改变（有多大）', '想明白了什么（以前哪里错了）', '别人能带走什么'],
    ]

    if i < 3:
        # Block title
        c.setFillColor(color)
        c.setFont(FONT_ACCENT, 5.5)
        c.drawString(card_x + content_pad, cy, section_titles[i])
        cy -= 4*mm

        # Items
        c.setFillColor(BODY)
        c.setFont(FONT_BODY, 5)
        for item in section_items[i]:
            lines = item.split(' ')
            # Draw with proper wrapping
            c.setFillColor(color)
            c.setFont(FONT_BODY, 4.5)
            bullet = '▪'
            c.drawString(card_x + content_pad + 2*mm, cy, bullet)
            c.setFillColor(BODY)
            c.setFont(FONT_BODY, 5)
            # Simple text - draw first part
            c.drawString(card_x + content_pad + 5*mm, cy, item[:min(20, len(item))])
            cy -= 4.5*mm
            if len(item) > 20:
                c.drawString(card_x + content_pad + 5*mm, cy, item[20:])
                cy -= 4.5*mm

    else:
        # Stage 04: Logic chain
        c.setFillColor(color)
        c.setFont(FONT_ACCENT, 5.5)
        c.drawString(card_x + content_pad, cy, '逻辑五环（每环必须咬合）')
        cy -= 4.5*mm

        for j, item in enumerate(section_items[3]):
            dot_y = cy - 1*mm
            circle(c, card_x + content_pad + 1.5*mm, dot_y, 1.2*mm, color)
            c.setFillColor(BODY)
            c.setFont(FONT_BODY, 4.5)
            c.drawString(card_x + content_pad + 4*mm, cy, item)
            cy -= 5*mm
            if j < len(section_items[3]) - 1:
                c.setStrokeColor(HexColor('#b8c8d8'))
                c.setLineWidth(0.4)
                c.line(card_x + content_pad + 1.5*mm, cy + 2*mm, card_x + content_pad + 1.5*mm, cy + 4.5*mm)

    # Connector arrow between cards (not after last)
    if i < 3:
        arr_x = card_x + card_w + CARD_GAP/2
        arr_y = CONTENT_BOT + CONTENT_H/2
        c.setFillColor(HexColor('#cac6be'))
        c.setFont(FONT_ACCENT, 10)
        c.drawCentredString(arr_x, arr_y, '▶')

# ─── Decorative Elements ─────────────────────────────────────────────
# Subtle geometric accent lines in header
c.setStrokeColor(HexColor('#1f1f2e'))
c.setLineWidth(0.5)
for i in range(4):
    x = CONTENT_LEFT + MARGIN + i * (card_w + CARD_GAP) + card_w/2
    c.line(x, CONTENT_BOT + 2*mm, x, CONTENT_BOT + 5*mm)

# ─── Bottom decorative bar ─────────────────────────────────────────────
c.setFillColor(HexColor('#e8e4dc'))
c.rect(0, FOOTER_H, PAGE_W, 2*mm, fill=1, stroke=0)

# ─── Save ─────────────────────────────────────────────────────────────
c.save()
print(f"[OK] PDF saved to: {output_path}")
print(f"   Page size: {PAGE_W/mm:.1f} × {PAGE_H/mm:.1f} mm (A3 Landscape)")