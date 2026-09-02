#!/usr/bin/env python3
"""
行动学习成果汇报课 · 四步核心路径图
ARTWORK VERSION 3 — True A3 Poster with registered fonts
"""

from reportlab.lib.pagesizes import A3, landscape
from reportlab.pdfgen import canvas as rlcanvas
from reportlab.lib.colors import HexColor
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
import os

# ─── Palette ─────────────────────────────────────────────────────────
VOID     = HexColor('#0c0c16')
PARCHMENT = HexColor('#f5f3ec')
GOLD     = HexColor('#b8880a')
AZURE    = HexColor('#1a6b87')
VIOLET   = HexColor('#5c3d9c')
NAVY     = HexColor('#0d3d6a')
BODY     = HexColor('#222222')
MUTED    = HexColor('#888888')
LGOLD    = HexColor('#fdf4e3')
LAZURE   = HexColor('#e5f3f8')
LVIOLET  = HexColor('#f1ebfa')
LNAVY    = HexColor('#e3ecf7')
CREAM    = HexColor('#faf8f3')

STAGE_COLORS = [GOLD, AZURE, VIOLET, NAVY]
STAGE_LIGHT  = [LGOLD, LAZURE, LVIOLET, LNAVY]
STAGE_ZH = ['成果体系', '素材整理', '亮点提炼', '一页纸呈现']
STAGE_EN = ['Outcome System', 'Material Curation', 'Highlight Extraction', 'One-Pager']
INSIGHTS = [
    '汇报 ≠ 报告做了什么\n= 让价值被准确感知',
    '先系统盘点所有素材\n再动笔写报告',
    'PPT是Word的预告片\n只展示最值得记住的内容',
    '价值陈述，不是报告的缩写\n每个字都要值得被看',
]

PAGE_W, PAGE_H = landscape(A3)

# ─── Font Registration ────────────────────────────────────────────────
FONTS = {}
font_dir = 'C:/Users/Administrator/.claude/skills/canvas-design/canvas-fonts/'

def load(name, filename):
    path = os.path.join(font_dir, filename)
    if os.path.exists(path):
        try:
            pdfmetrics.registerFont(TTFont(name, path))
            return name
        except: pass
    return None

# Try to load each font
for label, filename in [
    ('JuraL',  'Jura-Light.ttf'),
    ('JuraM',  'Jura-Medium.ttf'),
    ('JuraB',  'Jura-Bold.ttf'),
    ('BriqB',  'BricolageGrotesque-Bold.ttf'),
    ('BriqR',  'BricolageGrotesque-Regular.ttf'),
    ('OutfitB','Outfit-Bold.ttf'),
    ('OutfitR','Outfit-Regular.ttf'),
    ('BigOB',  'BigShoulders-Oblique.ttf'),
    ('BigBR',  'BigShoulders-Regular.ttf'),
    ('InstrR', 'InstrumentSerif-Regular.ttf'),
    ('LibreR', 'LibreBaskerville-Regular.ttf'),
    ('WorkR',  'WorkSans-Regular.ttf'),
    ('WorkB',  'WorkSans-Bold.ttf'),
]:
    result = load(label, filename)
    if result:
        FONTS[label] = result

# Fallback defaults
for key in ['JuraL','JuraM','JuraB','BriqB','BriqR','OutfitB','OutfitR','BigOB','BigBR','InstrR','LibreR','WorkR','WorkB']:
    if key not in FONTS:
        FONTS[key] = 'Helvetica'

F = FONTS  # shorthand

# ─── Canvas Init ──────────────────────────────────────────────────────
out = 'D:/CC/temp/行动学习成果汇报课_艺术版.pdf'
c = rlcanvas.Canvas(out, pagesize=(PAGE_W, PAGE_H))
c.setTitle('行动学习成果汇报课 · 四步核心路径图')

# ─── Drawing Helpers ──────────────────────────────────────────────────
def rrect(x, y, w, h, r=0, fc=None, sc=None, sw=0.3):
    if fc is not None: c.setFillColor(fc)
    if sc is not None: c.setStrokeColor(sc); c.setLineWidth(sw)
    c.roundRect(x, y, w, h, r, fill=1 if fc else 0, stroke=1 if sc else 0)

def dot(cx, cy, r, fc):
    c.setFillColor(fc); c.circle(cx, cy, r, fill=1, stroke=0)

def line(x1, y1, x2, y2, sc, sw=0.4):
    c.setStrokeColor(sc); c.setLineWidth(sw); c.line(x1, y1, x2, y2)

def txt(text, x, y, font_key, size, fc, align='L'):
    c.setFont(F[font_key], size); c.setFillColor(fc)
    if align=='C': c.drawCentredString(x, y, text)
    elif align=='R': c.drawRightString(x, y, text)
    else: c.drawString(x, y, text)

# ─── Background ───────────────────────────────────────────────────────
c.setFillColor(PARCHMENT)
c.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)

# ─── Header ───────────────────────────────────────────────────────────
HDR_H = 48*mm
c.setFillColor(VOID)
c.rect(0, PAGE_H-HDR_H, PAGE_W, HDR_H, fill=1, stroke=0)

# Gold top edge line
c.setFillColor(GOLD)
c.rect(0, PAGE_H-HDR_H, PAGE_W, 0.8*mm, fill=1, stroke=0)

# Left text block
txt('ACTION LEARNING \xb7 成果汇报课', 10*mm, PAGE_H-10*mm, 'JuraM', 6.5, GOLD)
txt('四步核心路径图', 10*mm, PAGE_H-24*mm, 'JuraB', 24, HexColor('#ffffff'))
txt('成果体系 \xb7 素材整理 \xb7 亮点提炼 \xb7 一页纸呈现', 10*mm, PAGE_H-34*mm, 'JuraL', 6.5, HexColor('#706e6a'))

# Center decorative — 4 colored dots with connecting line
CX = PAGE_W/2
CY = PAGE_H - HDR_H/2
line(PAGE_W*0.35, CY, PAGE_W*0.65, CY, HexColor('#2a2a38'), 0.5)
for i in range(4):
    fx = PAGE_W*0.35 + (PAGE_W*0.30)/3 * i
    dot(fx, CY, 2*mm, STAGE_COLORS[i])

# Right quote block with gold vertical line
c.setStrokeColor(GOLD)
c.setLineWidth(1.2)
c.line(PAGE_W-80*mm, PAGE_H-10*mm, PAGE_W-80*mm, PAGE_H-40*mm)
txt('三个月的工作，值得被谨真地说出来。', PAGE_W-78*mm, PAGE_H-14*mm, 'JuraI', 7.5, HexColor('#b8b5ae'), 'R')
txt('领\u5寻看不见的成果，等于不存在。', PAGE_W-78*mm, PAGE_H-24*mm, 'JuraI', 7.5, HexColor('#b8b5ae'), 'R')

# ─── 4-Column Layout ──────────────────────────────────────────────────
TOP = PAGE_H - HDR_H - 5*mm
BOT = 12*mm
H   = TOP - BOT
LFT = 10*mm
W   = PAGE_W - 20*mm

COL_GAP = 3.5*mm
COL_W   = (W - COL_GAP*3) / 4

for i in range(4):
    col_x = LFT + i*(COL_W+COL_GAP)
    col_c = STAGE_COLORS[i]
    col_cl= STAGE_LIGHT[i]

    # Column card shadow + background
    rrect(col_x, BOT, COL_W, H, 1.5*mm, CREAM, HexColor('#d8d4cc'), 0.2)

    # Top color band
    rrect(col_x, TOP-22*mm, COL_W, 22*mm, col_c)

    # Giant ghost number
    c.setFillColor(HexColor('#ffffff12'))
    c.setFont(F['BigOB'], 40)
    c.drawCentredString(col_x+COL_W/2, TOP-18*mm, '0%d'%(i+1))

    # Stage title
    txt(STAGE_ZH[i], col_x+COL_W/2, TOP-9*mm, 'JuraB', 10, HexColor('#ffffff'), 'C')
    txt(STAGE_EN[i], col_x+COL_W/2, TOP-15*mm, 'JuraL', 4.5, HexColor('#ffffffaa'), 'C')

    # Insight strip
    INS_H = 14*mm
    iy = TOP-22*mm-INS_H
    c.setFillColor(col_cl)
    c.rect(col_x+2*mm, iy, COL_W-4*mm, INS_H, fill=1, stroke=0)
    c.setFillColor(col_c)
    c.rect(col_x+2*mm, iy, 1.5*mm, INS_H, fill=1, stroke=0)
    ins_lines = INSIGHTS[i].split('\n')
    for j, il in enumerate(ins_lines):
        txt(il, col_x+COL_W/2, iy+INS_H-4.5*mm-j*5*mm, 'JuraL', 5.5, col_c, 'C')

    cy = iy - 4*mm

    # ── Stage 01
    if i == 0:
        txt('双重使命', col_x+3*mm, cy, 'JuraM', 5, col_c); cy -= 4.5*mm
        for item in ['▢ 成果证明 解决了什么，取得了什么',
                     '▢ 经验沉淀 发现了什么规律，形成可复用方法']:
            txt(item[:30], col_x+3*mm, cy, 'JuraL', 4.5, BODY); cy -= 4.5*mm

        cy -= 2*mm
        txt('三类领\u5寻，三种问题', col_x+3*mm, cy, 'JuraM', 5, col_c); cy -= 4*mm
        for lt, lq in [('直接','目标完成了吗？'),('分管','这个经验能推广吗？'),('高层','对公司有什么意义？')]:
            rrect(col_x+3*mm, cy-3.2*mm, 7*mm, 3.5*mm, 0.5*mm, HexColor('#f8f6f0'))
            txt(lt, col_x+3*mm, cy-2*mm, 'JuraM', 4.5, col_c)
            txt(lq, col_x+11*mm, cy-2*mm, 'JuraL', 4.5, MUTED)
            cy -= 4.5*mm

        cy -= 2*mm
        txt('五条黄金原则', col_x+3*mm, cy, 'JuraM', 5, col_c); cy -= 4*mm
        for n, principle in enumerate([
            '与领\u5寻关键词挂\u94钩',
            '好成绩用图表，一般成绩用表格',
            '困难→挑战突破 / 失败→迭代优化',
            '成绩归团队，责任担自己',
            '关键成果必须数字化'
        ], 1):
            dot(col_x+4*mm, cy-1.5*mm, 1.8*mm, col_c)
            txt(str(n), col_x+4*mm, cy-2.8*mm, 'JuraM', 4, HexColor('#ffffff'), 'C')
            txt(principle, col_x+7*mm, cy, 'JuraL', 4.5, BODY)
            cy -= 4.5*mm

    # ── Stage 02
    elif i == 1:
        txt('三层素材', col_x+3*mm, cy, 'JuraM', 5, col_c); cy -= 4*mm
        for item in ['① 实践经历 做了什么\xb7遇到什么\xb7如何解决',
                    '② 过程材料 计划\xb7记录\xb7数据\xb7视觉影像',
                    '③ 成果提炼 定量成果 + 定性影响（缺一不可）']:
            txt('▢', col_x+3*mm, cy, 'JuraL', 4.5, col_c)
            txt(item[:28], col_x+6*mm, cy, 'JuraL', 4.5, BODY)
            cy -= 4.5*mm

        cy -= 2*mm
        txt('五模块结构', col_x+3*mm, cy, 'JuraM', 5, col_c); cy -= 4*mm
        mods = [('课题背景',10),('解决方案',15),('实践过程',20),('成果与数据',35),('经验沉淀',20)]
        for mn, pct in mods:
            txt(mn, col_x+4*mm, cy, 'JuraL', 4.5, BODY)
            txt('%d%%'%pct, col_x+COL_W-5*mm, cy, 'JuraM', 4, MUTED, 'R')
            cy -= 4*mm

        cy -= 2*mm
        txt('四个写作坑', col_x+3*mm, cy, 'JuraM', 5, col_c); cy -= 4*mm
        for pit in ['只写行动，不写结果','靠形容词撑场面，不用数字','经验沉淀≠重复成果','结论涱浸在过程描述里']:
            txt('✗', col_x+3*mm, cy, 'JuraL', 4.5, HexColor('#c0392b'))
            txt(pit[:18], col_x+6*mm, cy, 'JuraL', 4.5, MUTED)
            cy -= 4*mm

    # ── Stage 03
    elif i == 2:
        txt('PPT只放三类内容', col_x+3*mm, cy, 'JuraM', 5, col_c); cy -= 4*mm
        for n, item in enumerate(['关键数字（所有量化成果）','核心观点（每模块最重要的一句话）','结构性标题（帮听众定位）'], 1):
            dot(col_x+4*mm, cy-1.5*mm, 1.8*mm, col_c)
            txt(str(n), col_x+4*mm, cy-2.8*mm, 'JuraM', 4, HexColor('#ffffff'), 'C')
            txt(item, col_x+7*mm, cy, 'JuraL', 4.5, BODY)
            cy -= 4.5*mm

        cy -= 1.5*mm
        rrect(col_x+2*mm, cy-3.8*mm, COL_W-4*mm, 3.8*mm, 1*mm, HexColor('#f9f5ec'))
        txt('5秒原则：一页文字，听众3秒内扫完', col_x+COL_W/2, cy-2.3*mm, 'JuraL', 4.2, HexColor('#6a4c10'), 'C')
        cy -= 5.5*mm

        txt('15分钟黄金结构（10-12页）', col_x+3*mm, cy, 'JuraM', 5, col_c); cy -= 4*mm
        for item in ['封面 → 课题背景与问题 → 解决方案全貌',
                     '三大核心成果（占总时长 50%+）',
                     '典型案例 → 经验方法论 → 计划与感谢']:
            txt('▢', col_x+3*mm, cy, 'JuraL', 4.5, col_c)
            txt(item[:22], col_x+6*mm, cy, 'JuraL', 4.5, BODY)
            cy -= 4.5*mm

        cy -= 2*mm
        txt('文字提炼两把抏', col_x+3*mm, cy, 'JuraM', 5, col_c); cy -= 4*mm
        for item in ['大段 → 观点+要点：3条以内并列',
                     '平叹 → 对佴小标：建章立制\xb7培训赋肿\xb7睤\u69天跟进']:
            txt('▢', col_x+3*mm, cy, 'JuraL', 4.5, col_c)
            txt(item[:22], col_x+6*mm, cy, 'JuraL', 4.5, BODY)
            cy -= 4.5*mm

    # ── Stage 04
    else:
        txt('逻辑五环', col_x+3*mm, cy, 'JuraM', 5, col_c); cy -= 4.5*mm
        rings = ['遇到了什么问题（有多严重）',
                 '用了什么方法（解决哪个具体障碍）',
                 '数字证明改变（有多大）',
                 '想明白了什么（以前哪里错了）',
                 '别人能带走什么']
        for j, ring in enumerate(rings):
            dot(col_x+5*mm, cy-1.5*mm, 1.8*mm, col_c)
            txt(ring, col_x+8*mm, cy, 'JuraL', 4.5, BODY)
            cy -= 5*mm
            if j < len(rings)-1:
                line(col_x+5*mm, cy+2*mm, col_x+5*mm, cy+4*mm, HexColor('#b8c8d8'), 0.4)

        cy -= 2*mm
        txt('六个区域', col_x+3*mm, cy, 'JuraM', 5, col_c); cy -= 4*mm
        grid = ['课题信息','真实问题','关键行动','成果数字','认知转变','可迁移经验']
        GW = (COL_W - 6*mm) / 3
        GH = 5*mm
        for g_i, g_name in enumerate(grid):
            gx = col_x + 3*mm + (g_i % 3) * GW
            gy = cy - (g_i // 3) * GH
            rrect(gx, gy-GH+0.5*mm, GW-0.5*mm, GH-0.5*mm, 0.8*mm, HexColor('#e3ecf7'))
            txt(g_name, gx+GW/2, gy-GH/2+0.3*mm, 'JuraM', 4.5, NAVY, 'C')
        cy -= GH*2 + 2*mm

        txt('三个写作公式', col_x+3*mm, cy, 'JuraM', 5, col_c); cy -= 4*mm
        for formula in ['挑战：规模+(有多糟)用数字+不解决的代价',
                        '行动：针对[障碍] → 用[方法] → 带来[变化]',
                        '认知：原以为 X → 发现真实是 Y → 改为做 Z']:
            rrect(col_x+2*mm, cy-3.5*mm, COL_W-4*mm, 3.5*mm, 0.8*mm, HexColor('#e3ecf7'))
            txt(formula, col_x+3*mm, cy-2.5*mm, 'JuraL', 4.2, NAVY)
            cy -= 5*mm

    # Arrow connector
    if i < 3:
        ax = col_x + COL_W + COL_GAP/2
        ay = BOT + H/2
        txt('▶', ax, ay, 'JuraL', 10, HexColor('#cac6be'), 'C')

# ─── Footer ───────────────────────────────────────────────────────────
FTR_H = 9*mm
c.setFillColor(VOID)
c.rect(0, 0, PAGE_W, FTR_H, fill=1, stroke=0)
c.setFillColor(GOLD)
c.rect(0, 0, PAGE_W, 0.5*mm, fill=1, stroke=0)
txt('罗宋伯 \xb7 行动学习辅导专家', 10*mm, 3.5*mm, 'JuraB', 6, HexColor('#ffffff'))
txt('行动学习成果汇报课 \xb7 四步核心路径图', PAGE_W-10*mm, 3.5*mm, 'JuraL', 5.5, HexColor('#484640'), 'R')

c.save()
print('[OK] PDF: D:/CC/temp/行动学习成果汇报课_艺术版.pdf')