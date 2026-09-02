#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
课程学习地图生成器 - 手册进化 v3 (专业版)
A3横向 (420mm x 297mm)
"""

from reportlab.lib.pagesizes import A3, landscape
from reportlab.pdfgen import canvas
from reportlab.lib.colors import HexColor, white, black
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont

# 注册中文字体
try:
    pdfmetrics.registerFont(TTFont('SimHei', 'C:/Windows/Fonts/simhei.ttf'))
    pdfmetrics.registerFont(TTFont('SimSun', 'C:/Windows/Fonts/simsun.ttc'))
    pdfmetrics.registerFont(TTFont('Microsoft YaHei', 'C:/Windows/Fonts/msyh.ttc'))
    CHINESE_FONT = "SimHei"
    CHINESE_FONT_BOLD = "SimHei"
except:
    CHINESE_FONT = "Helvetica"
    CHINESE_FONT_BOLD = "Helvetica-Bold"

# 页面尺寸 (A3横向)
PAGE_WIDTH, PAGE_HEIGHT = landscape(A3)

# 颜色定义
C = {
    'primary': HexColor('#1a365d'),
    'accent': HexColor('#d69e2e'),
    'light': HexColor('#e2e8f0'),
    'bg': HexColor('#f8fafc'),
    'text': HexColor('#2d3748'),
    'light_text': HexColor('#718096'),
    'm1': HexColor('#3182ce'),   # 场景定位 - 蓝
    'm2': HexColor('#4299e1'),   # 标准动作 - 浅蓝
    'm3': HexColor('#2b6cb0'),   # 判断依据 - 中蓝
    'm4': HexColor('#2c5282'),   # 分级处置 - 深蓝
    'm5': HexColor('#276749'),   # 情境案例 - 绿
    'm6': HexColor('#38a169'),   # 高频问答 - 浅绿
    'end': HexColor('#dd6b20'),  # 收尾 - 橙
    'ai': HexColor('#6b46c1'),   # AI协作 - 紫
    'final': HexColor('#c53030'),# 终验 - 红
    'header_bg': HexColor('#1a365d'),
}

def rr(c, x, y, w, h, r, fill, stroke=None, sw=1.5):
    """圆角矩形"""
    c.setFillColor(fill)
    if stroke:
        c.setStrokeColor(stroke)
        c.setLineWidth(sw)
        c.roundRect(x, y, w, h, r, stroke=1, fill=1)
    else:
        c.roundRect(x, y, w, h, r, stroke=0, fill=1)

def draw_line(c, x1, y1, x2, y2, color, w=1.5, dashed=True):
    """连接线"""
    c.setStrokeColor(color)
    c.setLineWidth(w)
    if dashed:
        c.setDash(3, 2)
    c.line(x1, y1, x2, y2)
    c.setDash()

def txt(c, x, y, text, font, size, color):
    c.setFont(font, size)
    c.setFillColor(color)
    c.drawString(x, y, text)

def txtc(c, x, y, text, font, size, color):
    c.setFont(font, size)
    c.setFillColor(color)
    c.drawCentredString(x, y, text)

def draw_hexagon(c, cx, cy, r, fill, stroke=None):
    """绘制六边形标记"""
    points = []
    for i in range(6):
        angle = math.pi / 3 * i - math.pi / 6
        points.append(cx + r * math.cos(angle))
        points.append(cy + r * math.sin(angle))
    c.setFillColor(fill)
    p = c.beginPath()
    p.moveTo(points[0], points[1])
    for i in range(2, 12, 2):
        p.lineTo(points[i], points[i+1])
    p.close()
    if stroke:
        c.setStrokeColor(stroke)
        c.setLineWidth(2)
        c.drawPath(p, stroke=1, fill=1)
    else:
        c.drawPath(p, stroke=0, fill=1)

import math

def create_map():
    c = canvas.Canvas("D:/新课开发/经验萃取/阅读手册转执行手册/完整课程包/002-课程结构图/002-课程学习地图-手册进化.pdf", pagesize=landscape(A3))

    # ========== 背景 ==========
    c.setFillColor(C['bg'])
    c.rect(0, 0, PAGE_WIDTH, PAGE_HEIGHT, stroke=0, fill=1)

    # ========== 左侧深色标题区 ==========
    c.setFillColor(C['header_bg'])
    c.rect(0, 0, 95*mm, PAGE_HEIGHT, stroke=0, fill=1)

    # 顶部装饰线
    c.setStrokeColor(C['accent'])
    c.setLineWidth(3)
    c.line(12*mm, PAGE_HEIGHT - 18*mm, 83*mm, PAGE_HEIGHT - 18*mm)

    # 主标题
    txt(c, 12*mm, PAGE_HEIGHT - 15*mm, "COURSE MAP", CHINESE_FONT_BOLD, 9, C['accent'])
    txt(c, 12*mm, PAGE_HEIGHT - 32*mm, "课程学习地图", CHINESE_FONT_BOLD, 18, white)
    txt(c, 12*mm, PAGE_HEIGHT - 48*mm, "手册进化", CHINESE_FONT_BOLD, 24, white)
    txt(c, 12*mm, PAGE_HEIGHT - 62*mm, '从"阅读版"', CHINESE_FONT, 10, white)
    txt(c, 12*mm, PAGE_HEIGHT - 74*mm, '到"执行手册"', CHINESE_FONT_BOLD, 10, C['accent'])

    # 分隔线
    c.setStrokeColor(HexColor('#4a5568'))
    c.setLineWidth(1)
    c.line(12*mm, PAGE_HEIGHT - 85*mm, 83*mm, PAGE_HEIGHT - 85*mm)

    # 学习路径标签
    txt(c, 12*mm, PAGE_HEIGHT - 98*mm, "LEARNING PATH", CHINESE_FONT_BOLD, 8, C['accent'])

    path_items = [
        ("01", "诊断症状"),
        ("02", "框架闭环"),
        ("03", "六大转化"),
        ("04", "收尾交接"),
        ("05", "AI协作"),
        ("06", "终验检查"),
    ]
    for i, (num, label) in enumerate(path_items):
        y = PAGE_HEIGHT - 112*mm - i * 14*mm
        # 编号
        txt(c, 12*mm, y, num, CHINESE_FONT_BOLD, 9, C['accent'])
        txt(c, 30*mm, y, label, CHINESE_FONT, 9, white)

    # 色块图例
    txt(c, 12*mm, 72*mm, "MODULE COLORS", CHINESE_FONT_BOLD, 7, C['accent'])
    legend_items = [
        (C['m1'], "场景定位"),
        (C['m2'], "标准动作"),
        (C['m3'], "判断依据"),
        (C['m4'], "分级处置"),
        (C['m5'], "情境案例"),
        (C['m6'], "高频问答"),
    ]
    for i, (col, lbl) in enumerate(legend_items):
        row = i // 2
        col_idx = i % 2
        c.setFillColor(col)
        c.rect(12*mm + col_idx * 40*mm, 62*mm - row * 14*mm, 8*mm, 6*mm, stroke=0, fill=1)
        txt(c, 22*mm + col_idx * 40*mm, 63*mm - row * 14*mm, lbl, CHINESE_FONT, 6, white)

    # 底部信息
    c.setStrokeColor(HexColor('#4a5568'))
    c.line(12*mm, 30*mm, 83*mm, 30*mm)
    txt(c, 12*mm, 22*mm, "A3 Landscape", CHINESE_FONT, 6, HexColor('#a0aec0'))
    txt(c, 12*mm, 15*mm, "Print Ready", CHINESE_FONT, 6, HexColor('#a0aec0'))

    # ========== 右侧内容区 ==========
    rx = 102*mm  # 内容区起始x

    # 顶部标题栏
    rr(c, rx, PAGE_HEIGHT - 22*mm, PAGE_WIDTH - rx - 8*mm, 16*mm, 3*mm, C['primary'])
    txt(c, rx + 5*mm, PAGE_HEIGHT - 15*mm, "课程结构与核心产出", CHINESE_FONT_BOLD, 10, white)
    txt(c, rx + 75*mm, PAGE_HEIGHT - 15*mm, "■", CHINESE_FONT, 9, C['accent'])
    txt(c, rx + 82*mm, PAGE_HEIGHT - 15*mm, "核心产出", CHINESE_FONT_BOLD, 8, white)
    txt(c, rx + 110*mm, PAGE_HEIGHT - 15*mm, "|", CHINESE_FONT, 8, HexColor('#718096'))
    txt(c, rx + 118*mm, PAGE_HEIGHT - 15*mm, "→ 模块间逻辑关系", CHINESE_FONT, 8, HexColor('#cbd5e0'))

    # ========== 连接线 ==========
    line_color = HexColor('#cbd5e0')

    # 诊断 → 框架
    draw_line(c, 68*mm, PAGE_HEIGHT - 78*mm, 68*mm, PAGE_HEIGHT - 102*mm, line_color)

    # 框架 → 模块1
    draw_line(c, 68*mm, PAGE_HEIGHT - 112*mm, 68*mm, PAGE_HEIGHT - 132*mm, line_color)
    draw_line(c, 68*mm, PAGE_HEIGHT - 132*mm, rx + 20*mm, PAGE_HEIGHT - 132*mm, line_color)
    draw_line(c, rx + 20*mm, PAGE_HEIGHT - 132*mm, rx + 20*mm, PAGE_HEIGHT - 148*mm, line_color)

    # 模块1 → 模块2 → ... → 模块6
    for i in range(6):
        y1 = PAGE_HEIGHT - 158*mm - i * 35*mm
        y2 = PAGE_HEIGHT - 158*mm - (i + 1) * 35*mm
        draw_line(c, rx + 20*mm, y1, rx + 20*mm, y2, line_color)

    # 模块6 → 收尾/AI/终验
    draw_line(c, rx + 20*mm, PAGE_HEIGHT - 158*mm - 5 * 35*mm, rx + 20*mm, 62*mm, line_color)
    draw_line(c, rx + 20*mm, 62*mm, rx + 80*mm, 62*mm, line_color)
    draw_line(c, rx + 80*mm, 62*mm, rx + 145*mm, 62*mm, line_color)
    draw_line(c, rx + 145*mm, 62*mm, rx + 210*mm, 62*mm, line_color)

    # ========== 诊断模块 ==========
    rr(c, rx + 5*mm, PAGE_HEIGHT - 72*mm, 60*mm, 36*mm, 4*mm, HexColor('#ebf8ff'), C['m1'], 2)
    txt(c, rx + 8*mm, PAGE_HEIGHT - 58*mm, "诊断", CHINESE_FONT_BOLD, 10, C['m1'])
    txt(c, rx + 8*mm, PAGE_HEIGHT - 70*mm, "六种阅读版症状", CHINESE_FONT, 7, C['text'])
    txt(c, rx + 8*mm, PAGE_HEIGHT - 80*mm, "→ 验收标准", CHINESE_FONT_BOLD, 7, C['accent'])
    txt(c, rx + 8*mm, PAGE_HEIGHT - 90*mm, "拿到手册的人", CHINESE_FONT, 7, C['text'])
    txt(c, rx + 8*mm, PAGE_HEIGHT - 100*mm, "不用问你就能做对", CHINESE_FONT_BOLD, 7, C['primary'])

    # ========== 框架模块 ==========
    rr(c, rx + 5*mm, PAGE_HEIGHT - 108*mm, 60*mm, 36*mm, 4*mm, HexColor('#f0fff4'), C['m5'], 2)
    txt(c, rx + 8*mm, PAGE_HEIGHT - 94*mm, "框架", CHINESE_FONT_BOLD, 10, C['m5'])
    txt(c, rx + 8*mm, PAGE_HEIGHT - 106*mm, "六类构成要素闭环", CHINESE_FONT, 7, C['text'])
    txt(c, rx + 8*mm, PAGE_HEIGHT - 116*mm, "→ 改的三件事", CHINESE_FONT_BOLD, 7, C['accent'])
    txt(c, rx + 8*mm, PAGE_HEIGHT - 126*mm, "颗粒度 / 结构 / 断点", CHINESE_FONT, 7, C['primary'])

    # ========== 六大转化模块 ==========
    modules = [
        ("1", "场景定位", ["动作节点链", "新手易错", "老手易忽视", "安全红线"], "动作节点链图谱", C['m1']),
        ("2", "标准动作", ["检查项目", "判断标准", "结果选项"], "检查项目清单", C['m2']),
        ("3", "判断依据", ["判断标准卡", "信号+判断+动作", "关键变量+可忽略"], "判断标准卡", C['m3']),
        ("4", "分级处置", ["三级处置表", "判断依据+动作", "上报时限+对象"], "分级处置流程", C['m4']),
        ("5", "情境案例", ["四段式+口诀", "案例+判断标准", "情境对应"], "情境案例集", C['m5']),
        ("6", "高频问答", ["识别/判断/操作", "交接/禁忌", "来源可追溯"], "高频问答库", C['m6']),
    ]

    for idx, (num, title, content_lines, output, color) in enumerate(modules):
        y = PAGE_HEIGHT - 142*mm - idx * 35*mm

        # 模块主体
        rr(c, rx + 68*mm, y, 120*mm, 32*mm, 4*mm, color, color, 2)

        # 编号圆
        c.setFillColor(white)
        c.circle(rx + 78*mm, y + 24*mm, 5*mm, stroke=0, fill=1)
        txtc(c, rx + 78*mm, y + 21*mm, num, CHINESE_FONT_BOLD, 9, color)

        # 标题
        txt(c, rx + 88*mm, y + 22*mm, title, CHINESE_FONT_BOLD, 10, white)

        # 内容行
        for i, line in enumerate(content_lines):
            txt(c, rx + 75*mm, y + 11*mm - i*7, line, CHINESE_FONT, 6, HexColor('#e2e8f0'))

        # 产出标注
        c.setFillColor(C['accent'])
        c.roundRect(rx + 75*mm, y + 1*mm, 110*mm, 7*mm, 2*mm, stroke=0, fill=1)
        txt(c, rx + 78*mm, y + 2*mm, f"▶ {output}", CHINESE_FONT_BOLD, 6, white)

    # ========== 收尾/AI/终验 ==========
    endings = [
        ("收尾", C['end'], ["交接确认", "当面口头确认", "统一速查", "术语与数值"]),
        ("AI协作", C['ai'], ["AI做初稿", "人把关", "专业准确性"]),
        ("终验", C['final'], ["全篇一致性", "交叉测试"]),
    ]

    for i, (title, color, lines) in enumerate(endings):
        x = rx + 68*mm + i * 65*mm
        rr(c, x, 50*mm, 60*mm, 38*mm, 4*mm, color, color, 2)
        txtc(c, x + 30*mm, 80*mm, title, CHINESE_FONT_BOLD, 9, white)
        for j, line in enumerate(lines):
            txt(c, x + 5*mm, 70*mm - j*9, line, CHINESE_FONT, 7, white)

    # ========== 底部说明 ==========
    c.setStrokeColor(C['light'])
    c.setLineWidth(1)
    c.line(rx, 42*mm, PAGE_WIDTH - 8*mm, 42*mm)

    txt(c, rx, 34*mm, "学习地图 | 手册进化——从"阅读版"到"执行手册"", CHINESE_FONT, 7, C['light_text'])
    txt(c, rx, 26*mm, "A3横向打印 | 适合课程导入与学员自学指引", CHINESE_FONT, 6, C['light_text'])
    txtc(c, PAGE_WIDTH / 2, 18*mm, "- 1 -", CHINESE_FONT, 6, C['light_text'])

    c.save()
    print("PDF生成完成!")
    return True

if __name__ == "__main__":
    create_map()
