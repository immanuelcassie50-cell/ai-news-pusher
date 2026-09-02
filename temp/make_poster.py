"""Generate the course poster PDF (A3 portrait, 1 page).
Style: 酒红渐变 + 金色装饰, strong visual impact.
"""
from reportlab.lib.pagesizes import A3
from reportlab.lib.colors import HexColor, Color
from reportlab.pdfgen import canvas
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.units import cm, mm
from reportlab.graphics.shapes import Drawing
from reportlab.graphics import renderPDF
import os

# Register Chinese fonts (use SimSun as a fallback for Source Han Serif on Windows)
FONT_DIR_CANDIDATES = [
    r"C:\Windows\Fonts",
]
serif_font = None
sans_font = None
bold_font = None

for d in FONT_DIR_CANDIDATES:
    if not os.path.isdir(d):
        continue
    for f in os.listdir(d):
        fp = os.path.join(d, f)
        if f.lower() in ("simsun.ttc", "simsun.ttf"):
            try:
                pdfmetrics.registerFont(TTFont("SerifCN", fp))
                serif_font = "SerifCN"
                break
            except Exception:
                pass
    if serif_font:
        break

# Use Noto-style sans for body
for d in FONT_DIR_CANDIDATES:
    if not os.path.isdir(d):
        continue
    for f in os.listdir(d):
        if f.lower() == "msyh.ttc":
            try:
                pdfmetrics.registerFont(TTFont("SansCN", os.path.join(d, f)))
                sans_font = "SansCN"
                break
            except Exception:
                pass
        if f.lower() == "simhei.ttf":
            try:
                pdfmetrics.registerFont(TTFont("BoldCN", os.path.join(d, f)))
                bold_font = "BoldCN"
                break
            except Exception:
                pass
    if sans_font:
        break

if not serif_font:
    serif_font = "Helvetica"
if not sans_font:
    sans_font = "Helvetica"
if not bold_font:
    bold_font = serif_font

W, H = A3  # 842 x 1191 pt (A3 is 297x420mm)

# Wine-red + gold palette
RED_DEEP = HexColor("#8b2828")
RED_MID = HexColor("#c0392b")
RED_BRIGHT = HexColor("#d62828")
RED_SOFT = HexColor("#f0d5cf")
RED_TINT = HexColor("#f8e6e1")
GOLD = HexColor("#c9a96e")
GOLD_DEEP = HexColor("#a8884a")
PAPER = HexColor("#f5f0e6")
PAPER_LIGHT = HexColor("#faf6ec")
INK = HexColor("#0a0a0a")
INK_SOFT = HexColor("#3a3a3a")
INK_MID = HexColor("#6e6e6e")
LINE = HexColor("#d6cfc1")

OUT = r"D:\Downloads\利益相关方影响和干预\完整课程包\13_Office文档\课程宣传海报.pdf"

c = canvas.Canvas(OUT, pagesize=A3)
c.setTitle("共同语言 · 高效项目执行与问题解决工作坊")
c.setAuthor("罗宏伟")

# ==================== Background paper ====================
c.setFillColor(PAPER)
c.rect(0, 0, W, H, fill=1, stroke=0)

# Subtle wine radial glow top-left
for r in range(40, 4, -2):
    alpha = 0.012 * (1 - (40-r)/40)
    c.setFillColor(Color(0.545, 0.157, 0.157, alpha=alpha))
    c.circle(120, H - 80, r * 8, fill=1, stroke=0)

# Subtle gold radial glow bottom-right
for r in range(30, 3, -2):
    alpha = 0.015 * (1 - (30-r)/30)
    c.setFillColor(Color(0.788, 0.663, 0.431, alpha=alpha))
    c.circle(W - 80, 80, r * 8, fill=1, stroke=0)

# Faint grid lines (decorative)
c.saveState()
c.setStrokeColor(Color(0.04, 0.04, 0.04, alpha=0.025))
c.setLineWidth(0.5)
grid_step = 56
x = 0
while x < W:
    c.line(x, 0, x, H)
    x += grid_step
y = 0
while y < H:
    c.line(0, y, W, y)
    y += grid_step
c.restoreState()

# Sheet border (1px line + inset)
margin = 36
c.setStrokeColor(LINE)
c.setLineWidth(1)
c.rect(margin, margin, W - 2*margin, H - 2*margin, fill=0, stroke=1)

# ==================== HEADER ====================
head_top = H - 96
# Eyebrow line + text
c.setStrokeColor(RED_DEEP)
c.setLineWidth(2.5)
c.line(margin + 64, head_top, margin + 64 + 60, head_top)
c.setFillColor(RED_DEEP)
c.setFont(bold_font, 12)
c.drawString(margin + 64 + 76, head_top - 5, "A  2-DAY  WORKSHOP  ·  ESTABLISHED  2026")

# Title (giant)
c.setFillColor(INK)
c.setFont(serif_font, 78)
c.drawString(margin + 64, head_top - 80, "共同语言")

# Subtitle (red)
c.setFillColor(RED_DEEP)
c.setFont(serif_font, 30)
c.drawString(margin + 64, head_top - 130, "高效项目执行与问题解决工作坊")

# Tagline
c.setFillColor(INK_SOFT)
c.setFont(serif_font, 16)
tagline = "一套语言，一套准则——让团队在面对同一个问题时，不再「各说各话」。"
c.drawString(margin + 64, head_top - 160, tagline)

# Right side: instructor card
card_x = W - margin - 240
card_y = head_top - 130
card_w = 200
card_h = 160
c.setFillColor(RED_DEEP)
c.rect(card_x, card_y - card_h, card_w, card_h, fill=1, stroke=0)
# Gold inner border
c.setStrokeColor(GOLD)
c.setLineWidth(1.2)
c.rect(card_x + 10, card_y - card_h + 10, card_w - 20, card_h - 20, fill=0, stroke=1)
# Initials
c.setFillColor(GOLD)
c.setFont(serif_font, 56)
c.drawCentredString(card_x + card_w/2, card_y - 70, "罗")
# Label
c.setFillColor(GOLD)
c.setFont(bold_font, 11)
c.drawCentredString(card_x + card_w/2, card_y - 95, "INSTRUCTOR")
c.setFillColor(PAPER_LIGHT)
c.setFont(serif_font, 18)
c.drawCentredString(card_x + card_w/2, card_y - 120, "罗  宏  伟")
c.setFillColor(GOLD)
c.setFont(sans_font, 9)
c.drawCentredString(card_x + card_w/2, card_y - 138, "行动学习催化师")

# Gold horizontal divider under header
c.setStrokeColor(INK)
c.setLineWidth(1.5)
c.line(margin + 64, head_top - 188, W - margin - 64, head_top - 188)

# ==================== Body: 3 columns ====================
body_top = head_top - 230
col_w = (W - 2*margin - 128 - 40) / 3
col_x1 = margin + 64
col_x2 = col_x1 + col_w + 20
col_x3 = col_x2 + col_w + 20

def draw_col_header(x, y, num, title):
    # Number badge (gold circle)
    c.setFillColor(GOLD)
    c.circle(x + 12, y - 4, 14, fill=1, stroke=0)
    c.setFillColor(RED_DEEP)
    c.setFont(serif_font, 16)
    c.drawCentredString(x + 12, y - 9, num)
    # Title
    c.setFillColor(INK)
    c.setFont(serif_font, 18)
    c.drawString(x + 36, y - 8, title)
    # Underline
    c.setStrokeColor(RED_DEEP)
    c.setLineWidth(1.2)
    c.line(x, y - 24, x + col_w, y - 24)

# Column 1: 你将带走
y1 = body_top
draw_col_header(col_x1, y1, "01", "你能带走什么")
items1 = [
    ("更快达成一致", "用统一语言快速对齐认知\n减少反复沟通"),
    ("结构化执行", "会议有目的、结束有\n清晰行动项"),
    ("系统化解决问题", '"恢复—直接原因—根本原因"\n三步走，减少返工'),
]
y_cursor = y1 - 50
for title, sub in items1:
    # Bullet square
    c.setFillColor(RED_DEEP)
    c.rect(col_x1, y_cursor - 4, 8, 8, fill=1, stroke=0)
    c.setFillColor(INK)
    c.setFont(bold_font, 12)
    c.drawString(col_x1 + 16, y_cursor - 4, title)
    c.setFillColor(INK_MID)
    c.setFont(serif_font, 10.5)
    line_y = y_cursor - 20
    for line in sub.split("\n"):
        c.drawString(col_x1 + 16, line_y, line)
        line_y -= 14
    y_cursor -= 64

# Column 2: 课程模块
y2 = body_top
draw_col_header(col_x2, y2, "02", "8 个模块")
modules = [
    ("M1", "共同语言", "标准问题陈述句式"),
    ("M2", "会议准则", "四分类 + 行动项三要素"),
    ("M3", "利益相关方", "矩阵 + 引导对话四步"),
    ("M4", "三层目标", "恢复 / 直接原因 / 根本原因"),
    ("M5", "现象界定", "IS / IS NOT 5 维度"),
    ("M6", "回到正轨", "信号清单 + 纠偏对话"),
    ("M7", "潜在问题预演", "4 列预演 + 回滚标准"),
    ("M8", "综合演练", "M1-M7 串联 + 30 天计划"),
]
y_cursor = y2 - 50
for code, name, sub in modules:
    # Code chip
    c.setFillColor(RED_TINT)
    c.rect(col_x2, y_cursor - 6, 36, 18, fill=1, stroke=0)
    c.setFillColor(RED_DEEP)
    c.setFont(bold_font, 11)
    c.drawCentredString(col_x2 + 18, y_cursor - 1, code)
    # Name
    c.setFillColor(INK)
    c.setFont(bold_font, 11)
    c.drawString(col_x2 + 44, y_cursor - 1, name)
    # Sub
    c.setFillColor(INK_MID)
    c.setFont(serif_font, 9.5)
    c.drawString(col_x2 + 44, y_cursor - 14, sub)
    y_cursor -= 26

# Column 3: 适合谁
y3 = body_top
draw_col_header(col_x3, y3, "03", "适合谁")
audience = [
    ("项目执行者", "工程师 / 专员 / 一线骨干"),
    ("项目协调/管理者", "项目经理 / 跨部门协调人"),
    ("技术/质量人员", "测试 / 质量 / 设计相关"),
    ("中层骨干", "团队负责人 / PMO / 新晋管理者"),
]
y_cursor = y3 - 50
for title, sub in audience:
    c.setFillColor(GOLD)
    c.circle(col_x3 + 6, y_cursor - 4, 4, fill=1, stroke=0)
    c.setFillColor(INK)
    c.setFont(bold_font, 12)
    c.drawString(col_x3 + 18, y_cursor - 4, title)
    c.setFillColor(INK_MID)
    c.setFont(serif_font, 10.5)
    c.drawString(col_x3 + 18, y_cursor - 19, sub)
    y_cursor -= 42

# Self-check section
check_y = y_cursor - 16
c.setFillColor(RED_TINT)
c.rect(col_x3 - 4, check_y - 130, col_w + 8, 130, fill=1, stroke=0)
c.setStrokeColor(RED_DEEP)
c.setLineWidth(0.8)
c.rect(col_x3 - 4, check_y - 130, col_w + 8, 130, fill=0, stroke=1)
c.setFillColor(RED_DEEP)
c.setFont(bold_font, 11)
c.drawString(col_x3, check_y - 18, "■ 自检清单 · 4 问")
c.setFillColor(INK_SOFT)
c.setFont(serif_font, 9.5)
checks = [
    "□ 讨论问题时，大家理解的「问题」\n  往往不一样",
    "□ 会议结束往往没有清晰的行动项",
    "□ 不确定该找谁、什么时候找",
    "□ 异常出现后往往「先试试看」，\n  经常返工",
    "→ 勾选 2 条以上 = 这门课对你直接有用",
]
cy = check_y - 38
for chk in checks:
    for line in chk.split("\n"):
        c.drawString(col_x3, cy, line)
        cy -= 13
    cy -= 4

# ==================== Bottom: Key facts strip ====================
strip_y = margin + 180
strip_h = 110
c.setFillColor(RED_DEEP)
c.rect(margin + 32, strip_y, W - 2*margin - 64, strip_h, fill=1, stroke=0)
# Gold inner border
c.setStrokeColor(GOLD)
c.setLineWidth(0.8)
c.rect(margin + 38, strip_y + 6, W - 2*margin - 76, strip_h - 12, fill=0, stroke=1)

facts = [
    ("2", "天", "DAY  1  +  DAY  2"),
    ("14", "小时", "IN-CLASS  HOURS"),
    ("8", "模块", "MODULES  M1  —  M8"),
    ("12-24", "人", "RECOMMENDED  CLASS  SIZE"),
    ("30", "天", "POST-COURSE  FOLLOW-UP"),
]
fact_w = (W - 2*margin - 64) / len(facts)
fx = margin + 32
for n, unit, label in facts:
    c.setFillColor(GOLD)
    c.setFont(serif_font, 42)
    c.drawCentredString(fx + fact_w/2, strip_y + 52, n)
    c.setFillColor(PAPER_LIGHT)
    c.setFont(bold_font, 12)
    c.drawCentredString(fx + fact_w/2, strip_y + 38, unit)
    c.setFillColor(GOLD)
    c.setFont(sans_font, 8.5)
    c.drawCentredString(fx + fact_w/2, strip_y + 22, label)
    # Vertical divider
    if fx != margin + 32:
        c.setStrokeColor(GOLD)
        c.setLineWidth(0.4)
        c.line(fx, strip_y + 16, fx, strip_y + strip_h - 16)
    fx += fact_w

# ==================== Tagline bottom ====================
tag_y = margin + 110
c.setFillColor(RED_DEEP)
c.setFont(serif_font, 18)
tagline2 = "「  共同语言，是项目执行里被低估的第一生产力。  」"
c.drawCentredString(W/2, tag_y, tagline2)
c.setFillColor(INK_MID)
c.setFont(serif_font, 11)
c.drawCentredString(W/2, tag_y - 20, "—— 让团队的会议更短、返工更少、共识更快、决策更清。")

# Footer line
c.setStrokeColor(LINE)
c.setLineWidth(0.6)
c.line(margin + 32, margin + 60, W - margin - 32, margin + 60)
c.setFillColor(INK_MID)
c.setFont(sans_font, 9)
c.drawString(margin + 32, margin + 40, "主办：罗宏伟 行动学习催化工作室      ·      v1.0 · 2026")
c.drawRightString(W - margin - 32, margin + 40, "适用对象：项目执行者 / 协调管理者 / 技术质量人员")

# Top-right gold corner ornament
def gold_corner(x, y, w, h, flip_x=False, flip_y=False):
    c.saveState()
    if flip_x:
        c.translate(x, 0)
        c.scale(-1, 1)
        x = 0
    if flip_y:
        c.translate(0, y)
        c.scale(1, -1)
        y = 0
    c.setStrokeColor(GOLD)
    c.setLineWidth(1.5)
    c.line(x, y, x + w, y)
    c.line(x, y, x, y + h)
    # Decorative dot
    c.setFillColor(GOLD)
    c.circle(x + 8, y + 8, 2.5, fill=1, stroke=0)
    c.restoreState()

gold_corner(margin + 8, H - margin - 8, 28, 28)
gold_corner(W - margin - 8, H - margin - 8, 28, 28, flip_x=True)
gold_corner(margin + 8, margin + 8, 28, 28, flip_y=True)
gold_corner(W - margin - 8, margin + 8, 28, 28, flip_x=True, flip_y=True)

c.showPage()
c.save()
print(f"Created: {OUT}")
print(f"Size: {os.path.getsize(OUT)} bytes")
