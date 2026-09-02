#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
课程学习地图生成器 - 手册进化 v2
A3横向 (420mm x 297mm)
"""

from reportlab.lib.pagesizes import A3, landscape
from reportlab.pdfgen import canvas
from reportlab.lib.colors import HexColor, white, black
from reportlab.lib.units import mm
import math

# 页面尺寸 (A3横向)
PAGE_WIDTH, PAGE_HEIGHT = landscape(A3)

# 颜色定义
C = {
    'primary': HexColor('#1a365d'),
    'accent': HexColor('#d69e2e'),
    'light': HexColor('#e2e8f0'),
    'bg': HexColor('#f7fafc'),
    'text': HexColor('#2d3748'),
    'light_text': HexColor('#718096'),
    'm1': HexColor('#63b3ed'),   # 场景定位
    'm2': HexColor('#4299e1'),   # 标准动作
    'm3': HexColor('#3182ce'),   # 判断依据
    'm4': HexColor('#2b6cb0'),   # 分级处置
    'm5': HexColor('#2f855a'),   # 情境案例
    'm6': HexColor('#38a169'),   # 高频问答
    'end': HexColor('#ed8936'),  # 收尾
    'ai': HexColor('#805ad5'),   # AI协作
    'final': HexColor('#c53030'),# 终验
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
        c.setDash(4, 3)
    c.line(x1, y1, x2, y2)
    c.setDash()

def poly(c, points, fill, stroke=None, sw=1.5):
    """多边形"""
    c.setFillColor(fill)
    p = c.beginPath()
    p.moveTo(points[0], points[1])
    for i in range(2, len(points), 2):
        p.lineTo(points[i], points[i+1])
    p.close()
    if stroke:
        c.setStrokeColor(stroke)
        c.setLineWidth(sw)
        c.drawPath(p, stroke=1, fill=1)
    else:
        c.drawPath(p, stroke=0, fill=1)

def txt(c, x, y, text, font, size, color):
    c.setFont(font, size)
    c.setFillColor(color)
    c.drawString(x, y, text)

def txtc(c, x, y, text, font, size, color):
    c.setFont(font, size)
    c.setFillColor(color)
    c.drawCentredString(x, y, text)

def create_map():
    c = canvas.Canvas("D:/新课开发/经验萃取/阅读手册转执行手册/完整课程包/002-课程结构图/002-课程学习地图-手册进化.pdf", pagesize=landscape(A3))

    # ========== 背景 ==========
    c.setFillColor(C['bg'])
    c.rect(0, 0, PAGE_WIDTH, PAGE_HEIGHT, stroke=0, fill=1)

    # ========== 左侧深色标题区 ==========
    c.setFillColor(C['primary'])
    c.rect(0, 0, 100*mm, PAGE_HEIGHT, stroke=0, fill=1)

    # 装饰线
    c.setStrokeColor(C['accent'])
    c.setLineWidth(2)
    c.line(15*mm, PAGE_HEIGHT - 25*mm, 85*mm, PAGE_HEIGHT - 25*mm)

    # 主标题
    txt(c, 15*mm, PAGE_HEIGHT - 20*mm, "课程学习地图", "Helvetica-Bold", 14, white)
    txt(c, 15*mm, PAGE_HEIGHT - 40*mm, "手册进化", "Helvetica-Bold", 26, white)
    txt(c, 15*mm, PAGE_HEIGHT - 55*mm, '从"阅读版"', "Helvetica", 12, white)
    txt(c, 15*mm, PAGE_HEIGHT - 67*mm, '到"执行手册"', "Helvetica-Bold", 12, C['accent'])

    # 分隔线
    c.setStrokeColor(HexColor('#4a5568'))
    c.setLineWidth(1)
    c.line(15*mm, PAGE_HEIGHT - 80*mm, 85*mm, PAGE_HEIGHT - 80*mm)

    # 学习路径
    txt(c, 15*mm, PAGE_HEIGHT - 95*mm, "学习路径", "Helvetica-Bold", 9, C['accent'])
    path_items = [
        "① 诊断症状",
        "② 框架闭环",
        "③ 六大转化模块",
        "④ 收尾交接",
        "⑤ AI协作",
        "⑥ 终验检查"
    ]
    for i, item in enumerate(path_items):
        txt(c, 15*mm, PAGE_HEIGHT - 108*mm - i*13, item, "Helvetica", 8, white)

    # 色块图例
    txt(c, 15*mm, 70*mm, "模块色标", "Helvetica-Bold", 9, C['accent'])
    legend_colors = [C['m1'], C['m2'], C['m3'], C['m4'], C['m5'], C['m6']]
    legend_labels = ["场景定位", "标准动作", "判断依据", "分级处置", "情境案例", "高频问答"]
    for i, (col, lbl) in enumerate(zip(legend_colors, legend_labels)):
        c.setFillColor(col)
        c.rect(15*mm + (i % 3) * 27*mm, 55*mm - (i // 3) * 15*mm, 10*mm, 8*mm, stroke=0, fill=1)
        txt(c, 15*mm + (i % 3) * 27*mm + 12*mm, 56*mm - (i // 3) * 15*mm, lbl, "Helvetica", 6, white)

    # ========== 右侧内容区 ==========
    rx = 108*mm  # 内容区起始x
    rw = PAGE_WIDTH - rx - 8*mm

    # 顶部标题
    txt(c, rx, PAGE_HEIGHT - 15*mm, "课程结构与学习路径", "Helvetica-Bold", 11, C['primary'])
    c.setStrokeColor(C['light'])
    c.setLineWidth(1)
    c.line(rx, PAGE_HEIGHT - 20*mm, PAGE_WIDTH - 8*mm, PAGE_HEIGHT - 20*mm)

    # 产出说明
    txt(c, rx, PAGE_HEIGHT - 28*mm, "■", "Helvetica", 8, C['accent'])
    txt(c, rx + 8*mm, PAGE_HEIGHT - 28*mm, "核心产出", "Helvetica-Bold", 8, C['text'])
    txt(c, rx + 40*mm, PAGE_HEIGHT - 28*mm, "|", "Helvetica", 8, C['light'])
    txt(c, rx + 48*mm, PAGE_HEIGHT - 28*mm, "→", "Helvetica", 8, C['primary'])
    txt(c, rx + 56*mm, PAGE_HEIGHT - 28*mm, "模块间逻辑关系", "Helvetica", 8, C['light_text'])

    # ========== 绘制连接线 ==========
    line_color = C['light_text']

    # 诊断 → 框架
    draw_line(c, 70*mm, PAGE_HEIGHT - 80*mm, 70*mm, PAGE_HEIGHT - 105*mm, line_color)

    # 框架 → 模块1
    draw_line(c, 70*mm, PAGE_HEIGHT - 115*mm, 70*mm, PAGE_HEIGHT - 135*mm, line_color)
    draw_line(c, 70*mm, PAGE_HEIGHT - 135*mm, rx + 35*mm, PAGE_HEIGHT - 135*mm, line_color)
    draw_line(c, rx + 35*mm, PAGE_HEIGHT - 135*mm, rx + 35*mm, PAGE_HEIGHT - 155*mm, line_color)

    # 模块1 → 模块2 → ... → 模块6
    for i in range(6):
        y1 = PAGE_HEIGHT - 165*mm - i * 38*mm
        y2 = PAGE_HEIGHT - 165*mm - (i + 1) * 38*mm
        draw_line(c, rx + 35*mm, y1, rx + 35*mm, y2, line_color)

    # 模块6 → 收尾/AI/终验
    draw_line(c, rx + 35*mm, PAGE_HEIGHT - 165*mm - 5 * 38*mm, rx + 35*mm, 65*mm, line_color)
    draw_line(c, rx + 35*mm, 65*mm, rx + 80*mm, 65*mm, line_color)
    draw_line(c, rx + 80*mm, 65*mm, rx + 150*mm, 65*mm, line_color)
    draw_line(c, rx + 150*mm, 65*mm, rx + 220*mm, 65*mm, line_color)

    # ========== 诊断模块 ==========
    rr(c, rx + 5*mm, PAGE_HEIGHT - 75*mm, 65*mm, 38*mm, 4*mm, HexColor('#ebf8ff'), C['m1'], 2)
    txt(c, rx + 10*mm, PAGE_HEIGHT - 60*mm, "诊断", "Helvetica-Bold", 10, C['m1'])
    txt(c, rx + 10*mm, PAGE_HEIGHT - 72*mm, "六种阅读版症状", "Helvetica", 7, C['text'])
    txt(c, rx + 10*mm, PAGE_HEIGHT - 82*mm, "→ 验收标准", "Helvetica-Bold", 7, C['accent'])
    txt(c, rx + 10*mm, PAGE_HEIGHT - 92*mm, "拿到手册的人", "Helvetica", 7, C['text'])
    txt(c, rx + 10*mm, PAGE_HEIGHT - 100*mm, "不用问你就能做对", "Helvetica", 7, C['primary'])

    # ========== 框架模块 ==========
    rr(c, rx + 5*mm, PAGE_HEIGHT - 110*mm, 65*mm, 38*mm, 4*mm, HexColor('#f0fff4'), C['m5'], 2)
    txt(c, rx + 10*mm, PAGE_HEIGHT - 95*mm, "框架", "Helvetica-Bold", 10, C['m5'])
    txt(c, rx + 10*mm, PAGE_HEIGHT - 107*mm, "六类构成要素闭环", "Helvetica", 7, C['text'])
    txt(c, rx + 10*mm, PAGE_HEIGHT - 117*mm, "→ 改的三件事", "Helvetica-Bold", 7, C['accent'])
    txt(c, rx + 10*mm, PAGE_HEIGHT - 127*mm, "颗粒度/结构/断点", "Helvetica", 7, C['primary'])

    # ========== 六大转化模块 ==========
    modules = [
        ("1", "场景定位", "动作节点链", "新手易错\n老手易忽视\n安全红线", "动作节点链图谱", C['m1']),
        ("2", "标准动作", "检查项目\n判断标准\n结果选项", "量化检查点\n清晰判断\n明确结果", "检查项目清单", C['m2']),
        ("3", "判断依据", "判断标准卡", "信号+判断+动作\n关键变量\n可忽略因素", "判断标准卡", C['m3']),
        ("4", "分级处置", "三级处置表", "判断依据+动作\n上报时限\n上报对象", "分级处置流程", C['m4']),
        ("5", "情境案例", "四段式+口诀", "案例+判断标准\n关键口诀\n情境对应", "情境案例集", C['m5']),
        ("6", "高频问答", "五类标注来源", "识别/判断/操作\n交接/禁忌\n来源可追溯", "高频问答库", C['m6']),
    ]

    for idx, (num, title, subs, content, output, color) in enumerate(modules):
        y = PAGE_HEIGHT - 150*mm - idx * 38*mm

        # 模块主体
        rr(c, rx + 75*mm, y, 115*mm, 35*mm, 4*mm, color, color, 2)

        # 编号
        c.setFillColor(white)
        c.circle(rx + 82*mm, y + 28*mm, 5*mm, stroke=0, fill=1)
        txtc(c, rx + 82*mm, y + 25*mm, num, "Helvetica-Bold", 9, color)

        # 标题
        txt(c, rx + 92*mm, y + 25*mm, title, "Helvetica-Bold", 10, white)

        # 子标题
        for i, sub in enumerate(subs.split('\n')):
            txt(c, rx + 82*mm, y + 14*mm - i*8, sub, "Helvetica", 6, HexColor('#e2e8f0'))

        # 产出
        c.setFillColor(C['accent'])
        c.roundRect(rx + 82*mm, y + 2*mm, 105*mm, 8*mm, 2*mm, stroke=0, fill=1)
        txt(c, rx + 85*mm, y + 3*mm, f"▶ {output}", "Helvetica-Bold", 6, white)

    # ========== 收尾/AI/终验 ==========
    endings = [
        ("收尾", C['end'], ["交接确认", "当面口头确认", "统一速查", "术语与数值兜底"]),
        ("AI协作", C['ai'], ["AI做初稿", "人把关", "专业准确性"]),
        ("终验", C['final'], ["全篇一致性检查", "交叉测试", ""]),
    ]

    for i, (title, color, lines) in enumerate(endings):
        x = rx + 75*mm + i * 70*mm
        rr(c, x, 50*mm, 65*mm, 40*mm, 4*mm, color, color, 2)
        txtc(c, x + 32*mm, 82*mm, title, "Helvetica-Bold", 9, white)
        for j, line in enumerate(lines):
            if line:
                txt(c, x + 5*mm, 72*mm - j*9, line, "Helvetica", 7, white)

    # ========== 底部 ==========
    c.setStrokeColor(C['light'])
    c.line(rx, 42*mm, PAGE_WIDTH - 8*mm, 42*mm)
    txt(c, rx, 35*mm, '学习地图 | 手册进化——从"阅读版"到"执行手册"', "Helvetica", 7, C['light_text'])
    txt(c, rx, 28*mm, "A3横向打印 | 适合课程导入与学员自学指引", "Helvetica", 6, C['light_text'])
    txtc(c, PAGE_WIDTH / 2, 28*mm, "- 2 -", "Helvetica", 6, C['light_text'])

    c.save()
    print("PDF生成完成!")

if __name__ == "__main__":
    create_map()
