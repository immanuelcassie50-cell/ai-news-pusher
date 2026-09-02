#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
课程学习地图生成器 - 手册进化
A3横向 (420mm x 297mm)
"""

from reportlab.lib.pagesizes import A3, landscape
from reportlab.pdfgen import canvas
from reportlab.lib.colors import HexColor, white, black
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.units import mm
import math

# 页面尺寸 (A3横向)
PAGE_WIDTH, PAGE_HEIGHT = landscape(A3)

# 颜色定义
COLORS = {
    'primary': HexColor('#1a365d'),       # 深靛蓝
    'accent': HexColor('#d69e2e'),         # 琥珀金
    'module_1': HexColor('#63b3ed'),       # 雾蓝 - 场景定位
    'module_2': HexColor('#4299e1'),       # 湖蓝 - 标准动作
    'module_3': HexColor('#3182ce'),       # 宝石蓝 - 判断依据
    'module_4': HexColor('#2b6cb0'),       # 普鲁士蓝 - 分级处置
    'module_5': HexColor('#2f855a'),       # 森林绿 - 情境案例
    'module_6': HexColor('#38a169'),       # 翡翠绿 - 高频问答
    'ending': HexColor('#ed8936'),         # 暖橙 - 收尾
    'ai': HexColor('#805ad5'),             # 紫罗兰 - AI协作
    'final': HexColor('#c53030'),          # 深红 - 终验
    'bg': HexColor('#f7fafc'),             # 浅灰白背景
    'text': HexColor('#2d3748'),           # 深灰文字
    'light_text': HexColor('#718096'),     # 浅灰文字
}

def draw_rounded_rect(c, x, y, w, h, r, fill_color, stroke_color=None, stroke_width=1):
    """绘制圆角矩形"""
    c.setFillColor(fill_color)
    if stroke_color:
        c.setStrokeColor(stroke_color)
        c.setLineWidth(stroke_width)
        c.roundRect(x, y, w, h, r, stroke=1, fill=1)
    else:
        c.roundRect(x, y, w, h, r, stroke=0, fill=1)

def draw_hexagon(c, cx, cy, r, fill_color, stroke_color=None, stroke_width=1.5):
    """绘制六边形"""
    c.setFillColor(fill_color)
    points = []
    for i in range(6):
        angle = math.pi / 3 * i - math.pi / 6
        points.append(cx + r * math.cos(angle))
        points.append(cy + r * math.sin(angle))
    path = c.beginPath()
    path.moveTo(points[0], points[1])
    for i in range(1, 6):
        path.lineTo(points[i*2], points[i*2+1])
    path.close()
    if stroke_color:
        c.setStrokeColor(stroke_color)
        c.setLineWidth(stroke_width)
        c.drawPath(path, stroke=1, fill=1)
    else:
        c.drawPath(path, stroke=0, fill=1)

def draw_arrow(c, x1, y1, x2, y2, color, width=2, head_len=8):
    """绘制箭头"""
    c.setStrokeColor(color)
    c.setLineWidth(width)
    c.line(x1, y1, x2, y2)
    # 箭头头部
    angle = math.atan2(y2 - y1, x2 - x1)
    c.setFillColor(color)
    p = c.beginPath()
    p.moveTo(x2, y2)
    p.lineTo(x2 - head_len * math.cos(angle - math.pi/6), y2 - head_len * math.sin(angle - math.pi/6))
    p.lineTo(x2 - head_len * math.cos(angle + math.pi/6), y2 - head_len * math.sin(angle + math.pi/6))
    p.close()
    c.drawPath(p, stroke=0, fill=1)

def draw_connector_line(c, points, color, width=1.5, dashed=True):
    """绘制连接线"""
    c.setStrokeColor(color)
    c.setLineWidth(width)
    if dashed:
        c.setDash(4, 3)
    p = c.beginPath()
    p.moveTo(points[0], points[1])
    for i in range(2, len(points), 2):
        p.lineTo(points[i], points[i+1])
    c.drawPath(p, stroke=1, fill=0)
    c.setDash()  # 重置

def draw_module_box(c, x, y, w, h, fill_color, border_color, number, title, subtitle, output, font_size=11):
    """绘制模块盒子"""
    # 主框
    draw_rounded_rect(c, x, y, w, h, 6*mm, fill_color, border_color, 2)

    # 编号圆
    circle_x = x + 12*mm
    circle_y = y + h - 12*mm
    c.setFillColor(border_color)
    c.circle(circle_x, circle_y, 6*mm, stroke=0, fill=1)

    # 编号文字
    c.setFillColor(white)
    c.setFont("Helvetica-Bold", 10)
    c.drawCentredString(circle_x, circle_y - 3*mm, str(number))

    # 标题
    c.setFillColor(COLORS['primary'])
    c.setFont("Helvetica-Bold", font_size)
    c.drawString(x + 22*mm, y + h - 14*mm, title)

    # 副标题/内容
    c.setFillColor(COLORS['text'])
    c.setFont("Helvetica", 8)
    lines = subtitle.split('\n')
    for i, line in enumerate(lines[:3]):
        c.drawString(x + 8*mm, y + h - 24*mm - i*9, line)

    # 产出标注
    if output:
        c.setFillColor(COLORS['accent'])
        c.setFont("Helvetica-Bold", 7)
        c.drawString(x + 8*mm, y + 8*mm, f"▶ {output}")

def draw_diagnosis_frame(c, x, y, w, h):
    """绘制诊断框架模块"""
    draw_rounded_rect(c, x, y, w, h, 8*mm, HexColor('#ebf8ff'), COLORS['module_1'], 2)

    # 标题区
    c.setFillColor(COLORS['module_1'])
    c.setFont("Helvetica-Bold", 12)
    c.drawString(x + 10*mm, y + h - 15*mm, "诊断")

    # 内容
    c.setFillColor(COLORS['text'])
    c.setFont("Helvetica", 8)
    c.drawString(x + 10*mm, y + h - 28*mm, "六种阅读版症状")
    c.drawString(x + 10*mm, y + h - 40*mm, "→ 验收标准")
    c.drawString(x + 10*mm, y + h - 52*mm, "拿到手册的人")
    c.drawString(x + 10*mm, y + h - 64*mm, "不用问你就能做对")

def draw_framework_frame(c, x, y, w, h):
    """绘制框架模块"""
    draw_rounded_rect(c, x, y, w, h, 8*mm, HexColor('#f0fff4'), COLORS['module_5'], 2)

    c.setFillColor(COLORS['module_5'])
    c.setFont("Helvetica-Bold", 12)
    c.drawString(x + 10*mm, y + h - 15*mm, "框架")

    c.setFillColor(COLORS['text'])
    c.setFont("Helvetica", 8)
    c.drawString(x + 10*mm, y + h - 28*mm, "六类构成要素闭环")
    c.drawString(x + 10*mm, y + h - 40*mm, "→ 改的三件事")
    c.drawString(x + 10*mm, y + h - 52*mm, "颗粒度 / 结构 / 断点")

def draw_ending_box(c, x, y, w, h, title, color, lines):
    """绘制收尾/AI/终验模块"""
    draw_rounded_rect(c, x, y, w, h, 6*mm, color, color, 2)

    c.setFillColor(white)
    c.setFont("Helvetica-Bold", 10)
    c.drawString(x + 8*mm, y + h - 12*mm, title)

    c.setFont("Helvetica", 7)
    for i, line in enumerate(lines):
        c.drawString(x + 8*mm, y + h - 24*mm - i*8, line)

def create_course_map():
    c = canvas.Canvas("D:/新课开发/经验萃取/阅读手册转执行手册/完整课程包/002-课程结构图/002-课程学习地图-手册进化.pdf", pagesize=landscape(A3))

    # 背景
    c.setFillColor(COLORS['bg'])
    c.rect(0, 0, PAGE_WIDTH, PAGE_HEIGHT, stroke=0, fill=1)

    # ==================== 左侧标题区 ====================
    # 深色背景块
    c.setFillColor(COLORS['primary'])
    c.rect(0, 0, 105*mm, PAGE_HEIGHT, stroke=0, fill=1)

    # 主标题
    c.setFillColor(white)
    c.setFont("Helvetica-Bold", 28)
    c.drawString(15*mm, PAGE_HEIGHT - 35*mm, "手册进化")

    c.setFont("Helvetica", 16)
    c.drawString(15*mm, PAGE_HEIGHT - 50*mm, '从"阅读版"')
    c.drawString(15*mm, PAGE_HEIGHT - 65*mm, '到"执行手册"')

    # 装饰线
    c.setStrokeColor(COLORS['accent'])
    c.setLineWidth(3)
    c.line(15*mm, PAGE_HEIGHT - 75*mm, 90*mm, PAGE_HEIGHT - 75*mm)

    # 学习路径概览
    c.setFillColor(COLORS['accent'])
    c.setFont("Helvetica-Bold", 10)
    c.drawString(15*mm, PAGE_HEIGHT - 95*mm, "学习路径")

    c.setFillColor(white)
    c.setFont("Helvetica", 8)
    path_items = [
        "① 诊断 → ② 框架",
        "③ 六大转化模块",
        "④ 收尾交接",
        "⑤ AI协作",
        "⑥ 终验检查"
    ]
    for i, item in enumerate(path_items):
        c.drawString(15*mm, PAGE_HEIGHT - 110*mm - i*14, item)

    # 底部图例
    c.setFillColor(COLORS['accent'])
    c.setFont("Helvetica-Bold", 9)
    c.drawString(15*mm, 40*mm, "图例")

    # 色块图例
    legend_y = 28*mm
    legend_items = [
        (COLORS['module_1'], "场景定位"),
        (COLORS['module_2'], "标准动作"),
        (COLORS['module_3'], "判断依据"),
        (COLORS['module_4'], "分级处置"),
        (COLORS['module_5'], "情境案例"),
        (COLORS['module_6'], "高频问答"),
    ]
    for i, (color, label) in enumerate(legend_items):
        c.setFillColor(color)
        c.rect(15*mm + i*14*mm, legend_y, 10*mm, 6*mm, stroke=0, fill=1)
        c.setFillColor(white)
        c.setFont("Helvetica", 6)
        c.drawString(15*mm + i*14*mm, legend_y - 5*mm, label)

    # ==================== 右侧内容区 ====================
    content_x = 110*mm
    content_width = PAGE_WIDTH - content_x - 10*mm

    # 顶部说明
    c.setFillColor(COLORS['text'])
    c.setFont("Helvetica", 9)
    c.drawString(content_x, PAGE_HEIGHT - 20*mm, "模块产出标注")
    c.setFillColor(COLORS['accent'])
    c.setFont("Helvetica-Bold", 9)
    c.drawString(content_x + 50*mm, PAGE_HEIGHT - 20*mm, "▶ 核心产出")

    # 绘制连接线（底层）
    line_color = HexColor('#a0aec0')

    # 诊断 → 框架
    draw_connector_line(c, [52*mm, PAGE_HEIGHT - 55*mm, 52*mm, PAGE_HEIGHT - 130*mm, 52*mm, PAGE_HEIGHT - 145*mm], line_color)

    # 框架 → 转化方法区
    draw_connector_line(c, [52*mm, PAGE_HEIGHT - 155*mm, 52*mm, PAGE_HEIGHT - 175*mm, 200*mm, PAGE_HEIGHT - 175*mm], line_color)

    # 转化方法内部连接（六个模块）
    module_y_start = PAGE_HEIGHT - 200*mm
    module_spacing = 48*mm

    for i in range(5):
        y1 = module_y_start - i * module_spacing
        y2 = module_y_start - (i+1) * module_spacing
        draw_connector_line(c, [200*mm, y1, 200*mm, y2], line_color)

    # 转化方法 → 收尾/AI/终验
    draw_connector_line(c, [200*mm, module_y_start - 5*module_spacing, 200*mm, 65*mm, 280*mm, 65*mm], line_color)
    draw_connector_line(c, [200*mm, 65*mm, 330*mm, 65*mm], line_color)
    draw_connector_line(c, [200*mm, 65*mm, 380*mm, 65*mm], line_color)

    # ==================== 诊断模块 ====================
    draw_diagnosis_frame(c, content_x + 5*mm, PAGE_HEIGHT - 155*mm, 75*mm, 45*mm)

    # ==================== 框架模块 ====================
    draw_framework_frame(c, content_x + 5*mm, PAGE_HEIGHT - 210*mm, 75*mm, 45*mm)

    # ==================== 六大转化模块 ====================
    modules = [
        (1, "场景定位", "动作节点链", "新手易错\n老手易忽视\n安全红线", "动作节点链图谱", COLORS['module_1']),
        (2, "标准动作", "检查项目\n判断标准\n结果选项", "量化检查点\n清晰判断条件\n明确结果", "检查项目清单", COLORS['module_2']),
        (3, "判断依据", "判断标准卡", "信号+判断+动作\n关键变量\n可忽略因素", "判断标准卡", COLORS['module_3']),
        (4, "分级处置", "三级处置表", "判断依据+动作\n上报时限\n上报对象", "分级处置流程", COLORS['module_4']),
        (5, "情境案例", "四段式+口诀", "案例+判断标准\n关键口诀\n情境对应", "情境案例集", COLORS['module_5']),
        (6, "高频问答", "五类标注来源", "识别/判断/操作\n交接/禁忌\n来源可追溯", "高频问答库", COLORS['module_6']),
    ]

    for i, (num, title, subtitle, content, output, color) in enumerate(modules):
        y = module_y_start - i * module_spacing
        draw_module_box(c, content_x + 80*mm, y - 38*mm, 115*mm, 42*mm, color, color, num, title, content, output)

    # ==================== 收尾模块 ====================
    draw_ending_box(c, content_x + 200*mm, 50*mm, 70*mm, 35*mm,
                   "收尾", COLORS['ending'],
                   ["交接确认", "当面口头确认", "统一速查", "术语与数值"])

    # ==================== AI协作模块 ====================
    draw_ending_box(c, content_x + 275*mm, 50*mm, 70*mm, 35*mm,
                   "AI协作", COLORS['ai'],
                   ["AI做初稿", "人把关", "专业准确性"])

    # ==================== 终验模块 ====================
    draw_ending_box(c, content_x + 350*mm, 50*mm, 70*mm, 35*mm,
                   "终验", COLORS['final'],
                   ["全篇一致性", "交叉测试"])

    # ==================== 底部说明 ====================
    c.setFillColor(COLORS['light_text'])
    c.setFont("Helvetica", 7)
    c.drawString(content_x, 15*mm, "学习地图 | 适合A3打印 | 横向阅读")

    # 页码
    c.setFont("Helvetica", 7)
    c.drawRightString(PAGE_WIDTH - 10*mm, 15*mm, "1/1")

    c.save()
    print("PDF生成完成!")

if __name__ == "__main__":
    create_course_map()
