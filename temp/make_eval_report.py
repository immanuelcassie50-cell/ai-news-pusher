"""Generate 评估报告模板.pdf - A4 portrait, 12-15 pages.
Content: Kirkpatrick 4-level evaluation report template.
"""
import os
import textwrap
from reportlab.lib.pagesizes import A4
from reportlab.lib.colors import HexColor
from reportlab.pdfgen import canvas
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
import numpy as np

for d in [r"C:\Windows\Fonts"]:
    if not os.path.isdir(d): continue
    for f in os.listdir(d):
        if f.lower() == "simsun.ttc":
            try: pdfmetrics.registerFont(TTFont("SerifCN", os.path.join(d, f)))
            except: pass
        if f.lower() == "msyh.ttc":
            try: pdfmetrics.registerFont(TTFont("SansCN", os.path.join(d, f)))
            except: pass
        if f.lower() == "simhei.ttf":
            try: pdfmetrics.registerFont(TTFont("BoldCN", os.path.join(d, f)))
            except: pass

SERIF = "SerifCN"
SANS = "SansCN"
BOLD = "BoldCN"

W, H = A4
OUT = r"D:\Downloads\利益相关方影响和干预\完整课程包\13_Office文档\评估报告模板.pdf"

c = canvas.Canvas(OUT, pagesize=A4)
c.setTitle("共同语言课程 - 评估报告模板")
c.setAuthor("罗宏伟")

def page_header(page_num, total):
    c.setFillColor(HexColor("#f5f0e6"))
    c.rect(0, 0, W, H, fill=1, stroke=0)
    c.setFillColor(HexColor("#8b2828"))
    c.rect(0, H - 30, W, 30, fill=1, stroke=0)
    c.setFillColor(HexColor("#faf6ec"))
    c.setFont(BOLD, 9)
    c.drawString(40, H - 20, "共同语言 - 课程评估报告模板")
    c.setFillColor(HexColor("#c9a96e"))
    c.drawRightString(W - 40, H - 20, f"评估工具包  -  v1.0  -  P {page_num} / {total}")

def page_footer():
    c.setStrokeColor(HexColor("#d6cfc1"))
    c.setLineWidth(0.5)
    c.line(40, 30, W - 40, 30)
    c.setFillColor(HexColor("#6e6e6e"))
    c.setFont(SANS, 8)
    c.drawString(40, 18, "Kirkpatrick 四层 + 三角验证  -  罗宏伟  -  行动学习催化师")
    c.drawRightString(W - 40, 18, "数据是手段，不是目的——评估是改进的输入")

TOTAL = 13

# PAGE 1: Cover
page_header(1, TOTAL)
c.setFillColor(HexColor("#8b2828"))
c.rect(0, H - 220, W, 220, fill=1, stroke=0)
c.setFillColor(HexColor("#c9a96e"))
c.rect(0, H - 224, W, 4, fill=1, stroke=0)

c.setFillColor(HexColor("#c9a96e"))
c.setFont(BOLD, 10)
c.drawString(40, H - 60, "EVALUATION REPORT TEMPLATE  -  v1.0  -  2026")

c.setFillColor(HexColor("#faf6ec"))
c.setFont(SERIF, 40)
c.drawString(40, H - 110, "课程评估报告")
c.setFont(SERIF, 26)
c.drawString(40, H - 145, "模板与填写指南")

c.setFillColor(HexColor("#c9a96e"))
c.setFont(SERIF, 14)
c.drawString(40, H - 180, "Kirkpatrick 四层评估  +  三角验证")
c.setFillColor(HexColor("#faf6ec"))
c.setFont(SERIF, 12)
c.drawString(40, H - 200, "共同语言：高效项目执行与问题解决工作坊")

# Report info
y0 = H - 250
c.setFillColor(HexColor("#8b2828"))
c.setFont(BOLD, 12)
c.drawString(40, y0, "■ 报告基本信息")
y0 -= 20
info = [
    ("课程名称", "共同语言：高效项目执行与问题解决工作坊"),
    ("主讲讲师", "罗宏伟"),
    ("开课日期", "____________________"),
    ("班级编号", "____________________"),
    ("学员人数", "____________________"),
    ("报告撰写人", "____________________"),
    ("撰写日期", "____________________"),
]
for k, v in info:
    c.setFillColor(HexColor("#1a1a1a"))
    c.setFont(BOLD, 10)
    c.drawString(60, y0, k)
    c.setFillColor(HexColor("#3a3a3a"))
    c.setFont(SERIF, 10)
    c.drawString(160, y0, v)
    y0 -= 18

# Use instructions
y0 -= 10
c.setFillColor(HexColor("#f8e6e1"))
c.rect(40, y0 - 280, W - 80, 280, fill=1, stroke=0)
c.setStrokeColor(HexColor("#8b2828"))
c.setLineWidth(0.8)
c.rect(40, y0 - 280, W - 80, 280, fill=0, stroke=1)

c.setFillColor(HexColor("#8b2828"))
c.setFont(BOLD, 12)
c.drawString(56, y0 - 22, "■ 使用说明")
c.setFillColor(HexColor("#3a3a3a"))
c.setFont(SERIF, 10)
intro = [
    "本模板用于在课程结束后 30 天内，由培训管理者或讲师本人填写，形成一份完整的",
    "课程评估报告。报告输出后，建议分发至：① 主讲讲师本人 ② 培训管理者 ③ 公司",
    "高层（脱敏后） ④ 归档供下期课程参考。",
    "",
    "填写原则：",
    "  1. 单层评估（只看分数）几乎没有价值——分数高不等于真的会；",
    "  2. 认知层（笔试）+ 行为层（观察）+ 数据层（前后对比）三角验证；",
    "  3. 关注「变化」而非「分数」——看到学员的成长比看到平均分重要；",
    "  4. 数据是手段，不是目的——本报告最终输出是「下一期课程可执行的动作」。",
]
yi = y0 - 46
for line in intro:
    c.drawString(56, yi, line)
    yi -= 14

c.setFillColor(HexColor("#c9a96e"))
c.setFont(SERIF, 10)
c.drawString(56, y0 - 268, "※ 提示：所有虚线框 / 下划线 / 空白行为可填写区域；本模板为 A4 纵向打印优化。")

page_footer()
c.showPage()

# PAGE 2: Kirkpatrick 4-level overview
page_header(2, TOTAL)
c.setFillColor(HexColor("#8b2828"))
c.setFont(BOLD, 18)
c.drawString(40, H - 70, "一  Kirkpatrick 四层评估框架")
c.setFillColor(HexColor("#c9a96e"))
c.setLineWidth(2)
c.line(40, H - 78, 280, H - 78)

c.setFillColor(HexColor("#3a3a3a"))
c.setFont(SERIF, 11)
c.drawString(40, H - 100, "本课程采用 Kirkpatrick 四层评估模型——逐层深入，每一层对应不同的数据来源。")

# Build 4-level pyramid
fig, ax = plt.subplots(figsize=(10, 4.5), dpi=150)
plt.rcParams['font.sans-serif'] = ['Microsoft YaHei', 'SimHei', 'sans-serif']
ax.set_xlim(0, 10)
ax.set_ylim(0, 5)
ax.axis("off")

levels = [
    (8.5, 4.0, "Level 4  -  结果层  RESULTS", "学员回到工作后，组织绩效是否变化？", "#a8884a"),
    (7.0, 3.0, "Level 3  -  行为层  BEHAVIOR", "学员回到工作后，是否真的用出所学？", "#c0392b"),
    (5.0, 2.0, "Level 2  -  学习层  LEARNING", "学员是否「知道 / 理解」了关键概念？", "#8b2828"),
    (2.5, 1.0, "Level 1  -  反应层  REACTION", "学员对课程的满意度、参与度？", "#5a1a1a"),
]
for y_center, height, title, body, color in levels:
    width = (y_center - 1) * 1.1
    box = plt.Rectangle((5 - width/2, y_center - height/2), width, height,
                          facecolor=color, edgecolor="white", linewidth=2, alpha=0.9)
    ax.add_patch(box)
    ax.text(5, y_center + 0.1, title, ha="center", va="center", fontsize=11, fontweight="bold", color="white")
    ax.text(5, y_center - 0.25, body, ha="center", va="center", fontsize=9, color="white")

ax.text(5, 4.85, "Kirkpatrick 四层评估  -  从「反应」到「结果」", ha="center", fontsize=13, fontweight="bold", color="#8b2828")
plt.tight_layout()
pyr_png = r"D:\CC\temp\pyramid.png"
plt.savefig(pyr_png, bbox_inches="tight", dpi=150, facecolor="#faf6ec")
plt.close()
c.drawImage(pyr_png, 30, H - 320, width=W - 60, height=210, preserveAspectRatio=True, mask='auto')

# Level mapping
y0 = H - 345
c.setFillColor(HexColor("#8b2828"))
c.setFont(BOLD, 12)
c.drawString(40, y0, "■ 四层在本课程中的对应")
y0 -= 22
mapping = [
    ("Level 1  反应层", "学员满意度 + 投入度", "课程结束即时问卷", "L1"),
    ("Level 2  学习层", "前测/后测笔试", "认知层前测 + 后测题库", "L2"),
    ("Level 3  行为层", "课堂行为观察 + 30 天应用", "行为观察量表 + 30 天回看", "L3"),
    ("Level 4  结果层", "工作场景的可见改变", "学员 30 天报告 + 管理者观察", "L4"),
]
xc = 40
cw = (W - 80) / 4
for label, what, source, code in mapping:
    c.setFillColor(HexColor("#f8e6e1"))
    c.rect(xc, y0 - 70, cw - 8, 70, fill=1, stroke=0)
    c.setFillColor(HexColor("#8b2828"))
    c.setFont(BOLD, 10)
    c.drawString(xc + 6, y0 - 16, code)
    c.setFillColor(HexColor("#1a1a1a"))
    c.setFont(BOLD, 10)
    c.drawString(xc + 6, y0 - 32, label)
    c.setFillColor(HexColor("#3a3a3a"))
    c.setFont(SERIF, 9)
    wrapped = textwrap.wrap(what, width=15)
    yy = y0 - 46
    for w_line in wrapped:
        c.drawString(xc + 6, yy, w_line)
        yy -= 12
    c.setFillColor(HexColor("#c9a96e"))
    c.setFont(SERIF, 8.5)
    wrapped2 = textwrap.wrap(source, width=15)
    for w_line in wrapped2:
        c.drawString(xc + 6, yy, w_line)
        yy -= 11
    xc += cw

page_footer()
c.showPage()

# PAGE 3: Level 1 - Reaction
page_header(3, TOTAL)
c.setFillColor(HexColor("#8b2828"))
c.setFont(BOLD, 18)
c.drawString(40, H - 70, "二  Level 1  反应层评估")
c.setFillColor(HexColor("#c9a96e"))
c.setLineWidth(2)
c.line(40, H - 78, 230, H - 78)

c.setFillColor(HexColor("#3a3a3a"))
c.setFont(SERIF, 11)
c.drawString(40, H - 100, "评估目标：学员对课程的满意度、参与度、推荐意愿。")
c.drawString(40, H - 116, "数据来源：D-Day 课后即时问卷  ·  收集时点：每天课结束")

# Indicator table
y0 = H - 150
c.setFillColor(HexColor("#8b2828"))
c.setFont(BOLD, 12)
c.drawString(40, y0, "■ 反应层核心指标")
y0 -= 22

indicators = [
    ("整体满意度", "5 分制", "____________", ""),
    ("内容实用性", "5 分制", "____________", ""),
    ("讲师表达清晰度", "5 分制", "____________", ""),
    ("演练与互动比例", "5 分制", "____________", ""),
    ("课堂氛围与投入度", "5 分制", "____________", ""),
    ("对工作直接帮助", "5 分制", "____________", ""),
    ("推荐意愿 NPS", "-100 ~ +100", "____________", ""),
    ("平均每日课投入时长", "小时", "____________", ""),
    ("学员自评最有价值模块", "开放式", "____________", ""),
    ("学员自评最需要改进模块", "开放式", "____________", ""),
]
# Table
c.setFillColor(HexColor("#8b2828"))
c.rect(40, y0 - 4, W - 80, 22, fill=1, stroke=0)
c.setFillColor(HexColor("#faf6ec"))
c.setFont(BOLD, 10)
heads = ["指标", "度量方式", "本期数据", "对照基准"]
xx = 40
ws = [180, 100, 120, 115]
for h, w in zip(heads, ws):
    c.drawString(xx + 6, y0 + 2, h)
    xx += w
y0 -= 24

for i, (k, m, v, ref) in enumerate(indicators):
    bg = "#faf6ec" if i % 2 == 0 else "#fffaf0"
    c.setFillColor(HexColor(bg))
    c.rect(40, y0 - 4, W - 80, 22, fill=1, stroke=0)
    c.setFillColor(HexColor("#1a1a1a"))
    c.setFont(BOLD, 9.5)
    c.drawString(46, y0 + 2, k)
    c.setFillColor(HexColor("#3a3a3a"))
    c.setFont(SERIF, 9.5)
    c.drawString(226, y0 + 2, m)
    c.setFillColor(HexColor("#8b2828"))
    c.setFont(SERIF, 9.5)
    c.drawString(326, y0 + 2, v)
    c.setFillColor(HexColor("#c9a96e"))
    c.setFont(SERIF, 9.5)
    c.drawString(446, y0 + 2, ref)
    y0 -= 22

# Bar chart placeholder
y0 -= 10
c.setFillColor(HexColor("#f8e6e1"))
c.rect(40, y0 - 200, W - 80, 200, fill=1, stroke=0)
c.setFillColor(HexColor("#8b2828"))
c.setFont(BOLD, 12)
c.drawString(56, y0 - 22, "■ 8 个模块平均满意度（柱状图占位）")

# Draw bar chart placeholder with sample data
chart_y0 = y0 - 180
chart_h = 140
chart_x = 80
chart_w = W - 160
c.setStrokeColor(HexColor("#8b2828"))
c.setLineWidth(1)
c.rect(chart_x, chart_y0, chart_w, chart_h, fill=0, stroke=1)

# 8 sample bars
labels = ["M1", "M2", "M3", "M4", "M5", "M6", "M7", "M8"]
bar_w = chart_w / 10
for i, lbl in enumerate(labels):
    bx = chart_x + 20 + i * (chart_w - 40) / 8
    bh = [120, 110, 115, 100, 95, 105, 90, 115][i]
    c.setFillColor(HexColor("#8b2828"))
    c.rect(bx, chart_y0 + 10, bar_w - 4, bh * 0.9, fill=1, stroke=0)
    c.setFillColor(HexColor("#1a1a1a"))
    c.setFont(BOLD, 9)
    c.drawCentredString(bx + bar_w / 2, chart_y0, lbl)
    c.setFillColor(HexColor("#c9a96e"))
    c.setFont(SERIF, 8)
    c.drawCentredString(bx + bar_w / 2, chart_y0 + bh * 0.9 + 4, f"{[4.8, 4.4, 4.6, 4.0, 3.8, 4.2, 3.6, 4.6][i]:.1f}")

c.setFillColor(HexColor("#3a3a3a"))
c.setFont(SERIF, 9)
c.drawString(56, y0 - 200, "※ 图示为占位——填写时由可视化看板自动生成实际数据图（详见 06_可视化评估看板.html）")

page_footer()
c.showPage()

# PAGE 4: Level 2 - Learning (radar chart placeholder)
page_header(4, TOTAL)
c.setFillColor(HexColor("#8b2828"))
c.setFont(BOLD, 18)
c.drawString(40, H - 70, "三  Level 2  学习层评估")
c.setFillColor(HexColor("#c9a96e"))
c.setLineWidth(2)
c.line(40, H - 78, 230, H - 78)

c.setFillColor(HexColor("#3a3a3a"))
c.setFont(SERIF, 11)
c.drawString(40, H - 100, "评估目标：学员「知道/理解」了哪些关键概念？前测/后测对比能看出多少成长？")
c.drawString(40, H - 116, "数据来源：前测/后测题库（每模块 5 道李克特 + 选择 + 场景题）")

# Radar chart placeholder
y0 = H - 150
c.setFillColor(HexColor("#8b2828"))
c.setFont(BOLD, 12)
c.drawString(40, y0, "■ 8 模块前测/后测对比（雷达图占位）")
y0 -= 20

# Build a sample radar chart with placeholder data
fig, ax = plt.subplots(figsize=(7, 5), dpi=150, subplot_kw=dict(polar=True))
plt.rcParams['font.sans-serif'] = ['Microsoft YaHei', 'SimHei', 'sans-serif']
categories = ['M1\n共同语言', 'M2\n会议准则', 'M3\n利益相关方', 'M4\n三层目标',
              'M5\n现象界定', 'M6\n回到正轨', 'M7\n预演', 'M8\n综合演练']
N = len(categories)
angles = [n / float(N) * 2 * 3.14159 for n in range(N)]
angles += angles[:1]
pre = [42, 38, 35, 40, 33, 36, 32, 38]
post = [78, 76, 74, 80, 75, 72, 76, 82]
pre += pre[:1]
post += post[:1]
ax.plot(angles, pre, 'o-', linewidth=2, label='前测', color='#a8884a')
ax.fill(angles, pre, alpha=0.20, color='#a8884a')
ax.plot(angles, post, 'o-', linewidth=2, label='后测', color='#8b2828')
ax.fill(angles, post, alpha=0.20, color='#8b2828')
ax.set_xticks(angles[:-1])
ax.set_xticklabels(categories, fontsize=8)
ax.set_ylim(0, 100)
ax.set_yticks([20, 40, 60, 80, 100])
ax.set_yticklabels(['20', '40', '60', '80', '100'], fontsize=8)
ax.set_title("学习层：8 模块前后测对比（占位示例）", fontsize=12, fontweight="bold", color="#8b2828", pad=20)
ax.legend(loc='upper right', bbox_to_anchor=(1.3, 1.0), fontsize=9)
ax.grid(True, alpha=0.4)
plt.tight_layout()
radar_png = r"D:\CC\temp\radar.png"
plt.savefig(radar_png, bbox_inches="tight", dpi=150, facecolor="#faf6ec")
plt.close()
c.drawImage(radar_png, 60, H - 430, width=W - 120, height=260, preserveAspectRatio=True, mask='auto')

# Data table
y0 = H - 460
c.setFillColor(HexColor("#8b2828"))
c.setFont(BOLD, 12)
c.drawString(40, y0, "■ 各模块成长明细（数据表）")
y0 -= 22

# Header
c.setFillColor(HexColor("#8b2828"))
c.rect(40, y0 - 4, W - 80, 22, fill=1, stroke=0)
c.setFillColor(HexColor("#faf6ec"))
c.setFont(BOLD, 9.5)
heads = ["模块", "前测均分", "后测均分", "涨幅", "标准差变化", "判定", "改进建议"]
xx = 40
ws = [50, 70, 70, 60, 80, 60, 125]
for h, w in zip(heads, ws):
    c.drawString(xx + 4, y0 + 2, h)
    xx += w
y0 -= 24

data_l2 = [
    ("M1  共同语言", "42", "78", "+36", "-3.2", "显著", "巩固标准句式肌肉记忆"),
    ("M2  会议准则", "38", "76", "+38", "-2.8", "显著", "强化三要素自检"),
    ("M3  利益相关方", "35", "74", "+39", "-2.5", "显著", "补足内部对齐练习"),
    ("M4  三层目标", "40", "80", "+40", "-3.5", "显著", "强化三标准评估"),
    ("M5  现象界定", "33", "75", "+42", "-2.0", "显著", "增加 IS NOT 训练"),
    ("M6  回到正轨", "36", "72", "+36", "-2.3", "显著", "补充止损标准案例"),
    ("M7  预演", "32", "76", "+44", "-2.1", "显著", "增加回滚标准卡演练"),
    ("M8  综合演练", "38", "82", "+44", "-2.6", "显著", "保持"),
    ("全班平均", "36.8", "76.6", "+39.8", "-2.6", "显著", "继续保持"),
]
for i, row in enumerate(data_l2):
    bg = "#faf6ec" if i % 2 == 0 else "#fffaf0"
    c.setFillColor(HexColor(bg))
    c.rect(40, y0 - 4, W - 80, 22, fill=1, stroke=0)
    c.setFillColor(HexColor("#1a1a1a"))
    c.setFont(BOLD, 9)
    c.drawString(44, y0 + 2, row[0])
    c.setFillColor(HexColor("#3a3a3a"))
    c.setFont(SERIF, 9)
    c.drawString(94, y0 + 2, row[1])
    c.drawString(164, y0 + 2, row[2])
    c.setFillColor(HexColor("#8b2828"))
    c.setFont(BOLD, 9)
    c.drawString(234, y0 + 2, row[3])
    c.setFillColor(HexColor("#3a3a3a"))
    c.setFont(SERIF, 9)
    c.drawString(294, y0 + 2, row[4])
    c.setFillColor(HexColor("#8b2828"))
    c.setFont(BOLD, 9)
    c.drawString(374, y0 + 2, row[5])
    c.setFillColor(HexColor("#3a3a3a"))
    c.setFont(SERIF, 9)
    c.drawString(434, y0 + 2, row[6])
    y0 -= 22

# Analysis
y0 -= 14
c.setFillColor(HexColor("#8b2828"))
c.setFont(BOLD, 12)
c.drawString(40, y0, "■ 学习层分析（填写区）")
y0 -= 22
items = [
    "□ 全班平均涨幅 ____ 分（参照：+20 显著 / +10~19 中等 / +5~9 轻微 / 0 倒退）",
    "□ 分层分析：高分组（前测≥40）涨幅 ____；中间组（25-39）涨幅 ____；低分组（≤24）涨幅 ____",
    "□ 涨幅最大模块是 ____，原因分析：____________________________________",
    "□ 涨幅最小模块是 ____，原因分析：____________________________________",
    "□ 是否有班级后测 < 前测的情况？□ 是 □ 否——原因诊断：____________________",
]
for it in items:
    c.setFillColor(HexColor("#3a3a3a"))
    c.setFont(SERIF, 10)
    c.drawString(56, y0, it)
    y0 -= 18

page_footer()
c.showPage()

# PAGE 5: Level 3 - Behavior
page_header(5, TOTAL)
c.setFillColor(HexColor("#8b2828"))
c.setFont(BOLD, 18)
c.drawString(40, H - 70, "四  Level 3  行为层评估")
c.setFillColor(HexColor("#c9a96e"))
c.setLineWidth(2)
c.line(40, H - 78, 230, H - 78)

c.setFillColor(HexColor("#3a3a3a"))
c.setFont(SERIF, 11)
c.drawString(40, H - 100, "评估目标：学员在课堂 / 工作场景中是否真的「用出来」——而不只是答对题。")
c.drawString(40, H - 116, "数据来源：① 课堂行为观察量表 ② 30 天回看邮件 ③ 管理者观察记录")

# Behavior observation summary table
y0 = H - 150
c.setFillColor(HexColor("#8b2828"))
c.setFont(BOLD, 12)
c.drawString(40, y0, "■ 课堂行为观察总评（讲师填写）")
y0 -= 22

c.setFillColor(HexColor("#8b2828"))
c.rect(40, y0 - 4, W - 80, 22, fill=1, stroke=0)
c.setFillColor(HexColor("#faf6ec"))
c.setFont(BOLD, 9.5)
heads = ["模块", "观察点数", "观察组数", "平均分", "满分", "达成率", "判定"]
xx = 40
ws = [50, 70, 70, 70, 60, 70, 125]
for h, w in zip(heads, ws):
    c.drawString(xx + 4, y0 + 2, h)
    xx += w
y0 -= 24

data_l3 = [
    ("M1  共同语言", "10", "6 组", "16.5", "20", "82.5%", "优秀"),
    ("M2  会议准则", "10", "6 组", "14.8", "20", "74.0%", "良好"),
    ("M3  利益相关方", "10", "6 组", "13.2", "20", "66.0%", "良好"),
    ("M4  三层目标", "10", "6 组", "15.5", "20", "77.5%", "良好"),
    ("M5  现象界定", "10", "6 组", "12.8", "20", "64.0%", "一般"),
    ("M6  回到正轨", "10", "6 组", "13.5", "20", "67.5%", "良好"),
    ("M7  预演", "10", "6 组", "14.0", "20", "70.0%", "良好"),
    ("M8  综合演练", "10", "6 组", "16.0", "20", "80.0%", "优秀"),
    ("总评", "80", "6 组", "116.3", "160", "72.7%", "良好"),
]
for i, row in enumerate(data_l3):
    bg = "#faf6ec" if i % 2 == 0 else "#fffaf0"
    c.setFillColor(HexColor(bg))
    c.rect(40, y0 - 4, W - 80, 22, fill=1, stroke=0)
    c.setFillColor(HexColor("#1a1a1a"))
    c.setFont(BOLD, 9)
    c.drawString(44, y0 + 2, row[0])
    c.setFillColor(HexColor("#3a3a3a"))
    c.setFont(SERIF, 9)
    c.drawString(94, y0 + 2, row[1])
    c.drawString(164, y0 + 2, row[2])
    c.setFillColor(HexColor("#8b2828"))
    c.setFont(BOLD, 9)
    c.drawString(234, y0 + 2, row[3])
    c.setFillColor(HexColor("#3a3a3a"))
    c.setFont(SERIF, 9)
    c.drawString(304, y0 + 2, row[4])
    c.setFillColor(HexColor("#8b2828"))
    c.setFont(BOLD, 9)
    c.drawString(364, y0 + 2, row[5])
    c.setFillColor(HexColor("#3a3a3a"))
    c.setFont(SERIF, 9)
    c.drawString(434, y0 + 2, row[6])
    y0 -= 22

# 30 day follow-up
y0 -= 16
c.setFillColor(HexColor("#8b2828"))
c.setFont(BOLD, 12)
c.drawString(40, y0, "■ 30 天后行为应用回看（学员自评 + 管理者观察）")
y0 -= 22

c.setFillColor(HexColor("#8b2828"))
c.rect(40, y0 - 4, W - 80, 22, fill=1, stroke=0)
c.setFillColor(HexColor("#faf6ec"))
c.setFont(BOLD, 9.5)
heads = ["应用场景", "学员自评", "管理者观察", "差异分析"]
xx = 40
ws = [200, 100, 100, 115]
for h, w in zip(heads, ws):
    c.drawString(xx + 4, y0 + 2, h)
    xx += w
y0 -= 24

scenarios = [
    ("M1 标准句式 1 次/月", "____ 次", "____ 次", "________________"),
    ("M2 目的声明 1 次/周", "____ 次", "____ 次", "________________"),
    ("M3 引导对话四步 1 次/周", "____ 次", "____ 次", "________________"),
    ("M4 三层分类 1 次/异常", "____ 次", "____ 次", "________________"),
    ("M5 IS/IS NOT 1 次/异常", "____ 次", "____ 次", "________________"),
    ("M6 纠偏对话 1 次/月", "____ 次", "____ 次", "________________"),
    ("M7 预演 1 次/上线", "____ 次", "____ 次", "________________"),
    ("合计（自评）", "____ 次/月", "____ 次/月", "________________"),
]
for i, row in enumerate(scenarios):
    bg = "#faf6ec" if i % 2 == 0 else "#fffaf0"
    c.setFillColor(HexColor(bg))
    c.rect(40, y0 - 4, W - 80, 22, fill=1, stroke=0)
    c.setFillColor(HexColor("#1a1a1a"))
    c.setFont(BOLD, 9)
    c.drawString(44, y0 + 2, row[0])
    c.setFillColor(HexColor("#3a3a3a"))
    c.setFont(SERIF, 9)
    c.drawString(244, y0 + 2, row[1])
    c.drawString(344, y0 + 2, row[2])
    c.setFillColor(HexColor("#3a3a3a"))
    c.setFont(SERIF, 9)
    c.drawString(444, y0 + 2, row[3])
    y0 -= 22

y0 -= 8
c.setFillColor(HexColor("#c9a96e"))
c.setFont(SERIF, 9)
c.drawString(40, y0, "※ 行为观察量表评分标准：≥80% 优秀  /  60-79% 良好  /  40-59% 一般  /  ≤39% 薄弱")

page_footer()
c.showPage()

# PAGE 6: Level 4 - Results
page_header(6, TOTAL)
c.setFillColor(HexColor("#8b2828"))
c.setFont(BOLD, 18)
c.drawString(40, H - 70, "五  Level 4  结果层评估")
c.setFillColor(HexColor("#c9a96e"))
c.setLineWidth(2)
c.line(40, H - 78, 230, H - 78)

c.setFillColor(HexColor("#3a3a3a"))
c.setFont(SERIF, 11)
c.drawString(40, H - 100, "评估目标：学员回到工作后，组织/项目层面是否出现可验证的改变？")
c.drawString(40, H - 116, "数据来源：① 学员 30 天行动报告 ② 管理者辅导记录 ③ 关键场景对照数据")

# Results table
y0 = H - 150
c.setFillColor(HexColor("#8b2828"))
c.setFont(BOLD, 12)
c.drawString(40, y0, "■ 结果层关键指标对照")
y0 -= 22

c.setFillColor(HexColor("#8b2828"))
c.rect(40, y0 - 4, W - 80, 22, fill=1, stroke=0)
c.setFillColor(HexColor("#faf6ec"))
c.setFont(BOLD, 9.5)
heads = ["关键指标", "训前 30 天", "训后 30 天", "变化", "归因"]
xx = 40
ws = [180, 100, 100, 80, 55]
for h, w in zip(heads, ws):
    c.drawString(xx + 4, y0 + 2, h)
    xx += w
y0 -= 24

results = [
    ("跨部门会议平均时长", "______ 分钟", "______ 分钟", "____%", "□课程 □其他"),
    ("会议结束时有清晰行动项的占比", "____%", "____%", "____%", "□课程 □其他"),
    ("异常处理到「恢复」的平均时间", "______ 分钟", "______ 分钟", "____%", "□课程 □其他"),
    ("异常处理到「直接原因」的平均时间", "______ 小时", "______ 小时", "____%", "□课程 □其他"),
    ("30 天内「改进行动」落地数", "______ 项", "______ 项", "____%", "□课程 □其他"),
    ("30 天内「返工」次数（按项目）", "______ 次", "______ 次", "____%", "□课程 □其他"),
    ("学员自评工作场景卡有进展", "____%", "____%", "____%", "□课程 □其他"),
    ("管理者对学员协作能力评价", "______ 分", "______ 分", "____%", "□课程 □其他"),
    ("团队/项目交付准时率", "____%", "____%", "____%", "□课程 □其他"),
    ("关键决策者对学员变化的反馈", "开放式", "开放式", "____%", "□课程 □其他"),
]
for i, row in enumerate(results):
    bg = "#faf6ec" if i % 2 == 0 else "#fffaf0"
    c.setFillColor(HexColor(bg))
    c.rect(40, y0 - 4, W - 80, 22, fill=1, stroke=0)
    c.setFillColor(HexColor("#1a1a1a"))
    c.setFont(BOLD, 9)
    c.drawString(44, y0 + 2, row[0])
    c.setFillColor(HexColor("#3a3a3a"))
    c.setFont(SERIF, 9)
    c.drawString(224, y0 + 2, row[1])
    c.drawString(324, y0 + 2, row[2])
    c.setFillColor(HexColor("#8b2828"))
    c.setFont(BOLD, 9)
    c.drawString(424, y0 + 2, row[3])
    c.setFillColor(HexColor("#3a3a3a"))
    c.setFont(SERIF, 9)
    c.drawString(504, y0 + 2, row[4])
    y0 -= 22

# ROI calculation
y0 -= 16
c.setFillColor(HexColor("#f8e6e1"))
c.rect(40, y0 - 100, W - 80, 100, fill=1, stroke=0)
c.setFillColor(HexColor("#8b2828"))
c.setFont(BOLD, 12)
c.drawString(56, y0 - 20, "■ 课程投资回报率（ROI）— 可选计算")

c.setFillColor(HexColor("#3a3a3a"))
c.setFont(SERIF, 10)
roi_lines = [
    "ROI = （培训产生的货币化收益 - 培训总成本）/ 培训总成本 × 100%",
    "",
    "□ 培训总成本（讲师费 + 场地 + 学员误工 + 教材）= ________________ 元",
    "□ 培训产生的可货币化收益（按返工减少 + 会议效率提升 + 决策质量提升估算）= ________________ 元",
    "□ ROI = ________________ %",
    "□ 投资回收期 = ________________ 个月",
]
yi = y0 - 42
for line in roi_lines:
    c.drawString(56, yi, line)
    yi -= 12

page_footer()
c.showPage()

# PAGE 7: Triangulation analysis
page_header(7, TOTAL)
c.setFillColor(HexColor("#8b2828"))
c.setFont(BOLD, 18)
c.drawString(40, H - 70, "六  三角验证分析")
c.setFillColor(HexColor("#c9a96e"))
c.setLineWidth(2)
c.line(40, H - 78, 200, H - 78)

c.setFillColor(HexColor("#3a3a3a"))
c.setFont(SERIF, 11)
c.drawString(40, H - 100, "把认知层 + 行为层 + 数据层的结果放在一起——互相印证，看到「真会」还是「假会」。")

# Triangulation matrix
y0 = H - 140
c.setFillColor(HexColor("#8b2828"))
c.setFont(BOLD, 12)
c.drawString(40, y0, "■ 三角验证矩阵（按模块判断）")
y0 -= 22

c.setFillColor(HexColor("#8b2828"))
c.rect(40, y0 - 4, W - 80, 22, fill=1, stroke=0)
c.setFillColor(HexColor("#faf6ec"))
c.setFont(BOLD, 9.5)
heads = ["模块", "认知层 L2", "行为层 L3", "数据层 L4", "判断", "下一步"]
xx = 40
ws = [60, 90, 90, 90, 90, 95]
for h, w in zip(heads, ws):
    c.drawString(xx + 4, y0 + 2, h)
    xx += w
y0 -= 24

data_tri = [
    ("M1  共同语言", "高分 78", "优秀 82%", "学员 76% 反馈有用", "真会", "保持"),
    ("M2  会议准则", "高分 76", "良好 74%", "会议时长 -18%", "真会", "强化"),
    ("M3  利益相关方", "高分 74", "良好 66%", "跨部门项目推进加速", "会做但说不全", "增加话术演练"),
    ("M4  三层目标", "高分 80", "良好 77%", "改进行动落地数 +35%", "真会", "保持"),
    ("M5  现象界定", "高分 75", "一般 64%", "归因准确率提升", "薄弱模块", "增加 IS NOT 训练"),
    ("M6  回到正轨", "高分 72", "良好 67%", "纠偏及时性 +25%", "需要强化", "补充案例"),
    ("M7  预演", "高分 76", "良好 70%", "上线失败率 -30%", "真会", "增加回滚训练"),
    ("M8  综合演练", "高分 82", "优秀 80%", "30 天计划完成率 78%", "真会", "保持"),
]
for i, row in enumerate(data_tri):
    bg = "#faf6ec" if i % 2 == 0 else "#fffaf0"
    c.setFillColor(HexColor(bg))
    c.rect(40, y0 - 4, W - 80, 22, fill=1, stroke=0)
    c.setFillColor(HexColor("#1a1a1a"))
    c.setFont(BOLD, 9)
    c.drawString(44, y0 + 2, row[0])
    c.setFillColor(HexColor("#3a3a3a"))
    c.setFont(SERIF, 9)
    c.drawString(104, y0 + 2, row[1])
    c.drawString(194, y0 + 2, row[2])
    c.drawString(284, y0 + 2, row[3])
    c.setFillColor(HexColor("#8b2828"))
    c.setFont(BOLD, 9)
    c.drawString(374, y0 + 2, row[4])
    c.setFillColor(HexColor("#3a3a3a"))
    c.setFont(SERIF, 9)
    c.drawString(464, y0 + 2, row[5])
    y0 -= 22

# Key insights
y0 -= 16
c.setFillColor(HexColor("#8b2828"))
c.setFont(BOLD, 12)
c.drawString(40, y0, "■ 关键发现与解释（填写区）")
y0 -= 22

findings = [
    ("真会区（高+高+有效）", "L2 ≥ 70%  +  L3 ≥ 70%  +  L4 有可验证变化", "恭喜学员——继续巩固"),
    ("会做但说不全", "L2 分数不高 + L3 表现好", "这种学员要恭喜——他其实会了"),
    ("学的是「知道」", "L2 分数高 + L3 表现差", "课程设计或讲师讲解可能偏理论"),
    ("薄弱区（低+低+低）", "三项都差", "下一期课程需重点优化该模块"),
]
for label, crit, action in findings:
    c.setFillColor(HexColor(GOLD_HEX := "#c9a96e"))
    c.rect(40, y0 - 4, 8, 8, fill=1, stroke=0)
    c.setFillColor(HexColor("#8b2828"))
    c.setFont(BOLD, 10)
    c.drawString(56, y0 - 4, label)
    c.setFillColor(HexColor("#3a3a3a"))
    c.setFont(SERIF, 9.5)
    c.drawString(220, y0 - 4, crit)
    c.setFillColor(HexColor("#c9a96e"))
    c.setFont(SERIF, 9.5)
    c.drawString(400, y0 - 4, action)
    y0 -= 20

page_footer()
c.showPage()

# PAGE 8: Course improvement recommendations
page_header(8, TOTAL)
c.setFillColor(HexColor("#8b2828"))
c.setFont(BOLD, 18)
c.drawString(40, H - 70, "七  课程改进建议")
c.setFillColor(HexColor("#c9a96e"))
c.setLineWidth(2)
c.line(40, H - 78, 200, H - 78)

c.setFillColor(HexColor("#3a3a3a"))
c.setFont(SERIF, 11)
c.drawString(40, H - 100, "基于以上四层 + 三角验证分析，输出「下一期可执行的具体动作」——每条 1 行、可直接照做。")

# Improvement recommendations table
y0 = H - 140
c.setFillColor(HexColor("#8b2828"))
c.setFont(BOLD, 12)
c.drawString(40, y0, "■ 课程内容改进")
y0 -= 22

c.setFillColor(HexColor("#8b2828"))
c.rect(40, y0 - 4, W - 80, 22, fill=1, stroke=0)
c.setFillColor(HexColor("#faf6ec"))
c.setFont(BOLD, 9.5)
heads = ["模块", "问题诊断", "具体改进动作", "优先级"]
xx = 40
ws = [50, 200, 200, 65]
for h, w in zip(heads, ws):
    c.drawString(xx + 4, y0 + 2, h)
    xx += w
y0 -= 24

improvements = [
    ("M1", "前测已较高（42）但行为观察 M1 满分", "增加「判断词秒识」游戏化训练", "中"),
    ("M2", "M2 目的声明学员会用但「行动项三检」", "增加「三要素不全」案例反例", "高"),
    ("       ", "    还不够熟练", "    训练", "    "),
    ("M3", "学员会「列矩阵」但「引导对话四步」", "增加 30 分钟两人角色演练 + 录音", "高"),
    ("       ", "    跳过第三步", "    回放", "    "),
    ("M4", "三标准评估学员会用但「可执行性」", "增加 1 张「可执行性陷阱」提示卡", "中"),
    ("       ", "    容易打高分", "    ", "    "),
    ("M5", "M5 IS NOT 列容易空着不填", "增加 5 个「必须填 3 条 IS NOT」", "高"),
    ("       ", "    程度维度识别弱", "    反例对比表", "    "),
    ("M6", "纠偏对话 4 步学员用得「太慢」", "增加 1 个 10 分钟快练环节", "中"),
    ("M7", "回滚标准卡写得「太乐观」", "增加「回滚失败的 3 个真实案例」", "高"),
    ("M8", "30 天行动计划有 22% 没填「Obstacles」", "讲师在 M8 演示「完整填表 + 真实障碍」", "中"),
    ("讲师", "Day 2 下午节奏略紧（M7-M8 赶）", "把 M7 缩短到 0.8h, 给 M8 更多演练时间", "中"),
    ("运营", "30 天回看邮件回收率仅 58%", "增加 1 次「课中签写回看邮件」预制环节", "高"),
]
for i, row in enumerate(improvements):
    bg = "#faf6ec" if i % 2 == 0 else "#fffaf0"
    c.setFillColor(HexColor(bg))
    c.rect(40, y0 - 4, W - 80, 22, fill=1, stroke=0)
    c.setFillColor(HexColor("#1a1a1a"))
    c.setFont(BOLD, 9)
    c.drawString(44, y0 + 2, row[0])
    c.setFillColor(HexColor("#3a3a3a"))
    c.setFont(SERIF, 9)
    c.drawString(94, y0 + 2, row[1][:35])
    c.drawString(294, y0 + 2, row[2][:35])
    c.setFillColor(HexColor("#8b2828"))
    c.setFont(BOLD, 9)
    c.drawString(494, y0 + 2, row[3])
    y0 -= 22

# Other improvements
y0 -= 12
c.setFillColor(HexColor("#8b2828"))
c.setFont(BOLD, 12)
c.drawString(40, y0, "■ 配套材料 / 运营 / 长期改进")
y0 -= 22

other_items = [
    ("1. 案例库", "扩展到 12 个行业的真实案例——可由本期学员贡献 3-5 个（脱敏后）"),
    ("2. 工具卡", "把 30 张高频场景卡按模块分组——便于学员选场景"),
    ("3. 课前包", "增加 1 个 15 分钟视频导览——降低 D-Day 第一小时的陌生感"),
    ("4. 30 天跟进", "增加 1 次「7 天直播答疑」——提升回看邮件回收率"),
    ("5. 90 天追踪", "增加 90 天行为重测——看哪些工具真的「长在身上」"),
]
for k, v in other_items:
    c.setFillColor(HexColor("#c9a96e"))
    c.rect(40, y0 - 4, 8, 8, fill=1, stroke=0)
    c.setFillColor(HexColor("#8b2828"))
    c.setFont(BOLD, 10)
    c.drawString(56, y0 - 4, k)
    c.setFillColor(HexColor("#3a3a3a"))
    c.setFont(SERIF, 10)
    c.drawString(180, y0 - 4, v)
    y0 -= 20

page_footer()
c.showPage()

# PAGE 9: Case studies (template)
page_header(9, TOTAL)
c.setFillColor(HexColor("#8b2828"))
c.setFont(BOLD, 18)
c.drawString(40, H - 70, "八  典型学员成长案例（2-3 个）")
c.setFillColor(HexColor("#c9a96e"))
c.setLineWidth(2)
c.line(40, H - 78, 280, H - 78)

c.setFillColor(HexColor("#3a3a3a"))
c.setFont(SERIF, 11)
c.drawString(40, H - 100, "从本期学员中选出 2-3 个有代表性的故事——脱敏后写进报告，呈现给公司高层。")

for case_no in range(1, 4):
    y0 = H - 130 - (case_no - 1) * 220
    c.setFillColor(HexColor("#8b2828"))
    c.setFont(BOLD, 12)
    c.drawString(40, y0, f"■ 案例 {case_no}：____ 同学")
    y0 -= 22
    items = [
        ("训前状态", "______________________________________"),
        ("训中表现", "______________________________________"),
        ("30 天后改变", "______________________________________"),
        ("对团队的辐射", "______________________________________"),
        ("讲师评语", "______________________________________"),
    ]
    for k, v in items:
        c.setFillColor(HexColor("#1a1a1a"))
        c.setFont(BOLD, 10)
        c.drawString(60, y0, k)
        c.setFillColor(HexColor("#3a3a3a"))
        c.setFont(SERIF, 10)
        c.drawString(180, y0, v)
        y0 -= 18

page_footer()
c.showPage()

# PAGE 10: 课程执行问题反思
page_header(10, TOTAL)
c.setFillColor(HexColor("#8b2828"))
c.setFont(BOLD, 18)
c.drawString(40, H - 70, "九  课程执行问题反思")
c.setFillColor(HexColor("#c9a96e"))
c.setLineWidth(2)
c.line(40, H - 78, 230, H - 78)

c.setFillColor(HexColor("#3a3a3a"))
c.setFont(SERIF, 11)
c.drawString(40, H - 100, "讲师本人回顾本期课程——遇到的问题、当时怎么处理的、下一期怎么改进。")

y0 = H - 140
c.setFillColor(HexColor("#8b2828"))
c.setFont(BOLD, 12)
c.drawString(40, y0, "■ 课程执行问题清单")
y0 -= 22

issues = [
    "□ 课前准备：____________________________________________________",
    "□ 班级氛围：____________________________________________________",
    "□ 演练环节：____________________________________________________",
    "□ 跑题/冷场处理：________________________________________________",
    "□ 学员特殊需求（如资深学员抵触 / 新人跟不上）：__________________",
    "□ 时间分配：____________________________________________________",
    "□ 案例适配度：__________________________________________________",
    "□ 工具卡使用：__________________________________________________",
    "□ M8 30 天计划填写率：___________________________________________",
    "□ 最意外的事情：________________________________________________",
]
for it in issues:
    c.setFillColor(HexColor("#3a3a3a"))
    c.setFont(SERIF, 10)
    c.drawString(56, y0, it)
    y0 -= 18

# Self-reflection
y0 -= 10
c.setFillColor(HexColor("#8b2828"))
c.setFont(BOLD, 12)
c.drawString(40, y0, "■ 讲师本人反思（3 个问题）")
y0 -= 22

questions = [
    "Q1：本期我做得最好的 1 件事是什么？为什么？",
    "  A：________________________________________________________________",
    "",
    "Q2：本期我做得最不好的 1 件事是什么？下次怎么改？",
    "  A：________________________________________________________________",
    "",
    "Q3：如果让我对「下期讲师」说 1 句话，我会说什么？",
    "  A：________________________________________________________________",
]
for q in questions:
    c.setFillColor(HexColor("#3a3a3a"))
    c.setFont(SERIF, 10)
    c.drawString(56, y0, q)
    y0 -= 16

page_footer()
c.showPage()

# PAGE 11: 高层摘要
page_header(11, TOTAL)
c.setFillColor(HexColor("#8b2828"))
c.setFont(BOLD, 18)
c.drawString(40, H - 70, "十  致公司高层 · 一页摘要")
c.setFillColor(HexColor("#c9a96e"))
c.setLineWidth(2)
c.line(40, H - 78, 240, H - 78)

c.setFillColor(HexColor("#3a3a3a"))
c.setFont(SERIF, 11)
c.drawString(40, H - 100, "一页纸总结——给公司高层看的版本。聚焦 ROI + 关键变化 + 下一期方向。")

# Big card
c.setFillColor(HexColor("#8b2828"))
c.rect(40, H - 530, W - 80, 410, fill=1, stroke=0)
c.setFillColor(HexColor("#c9a96e"))
c.rect(40, H - 530, 4, 410, fill=1, stroke=0)

# Section 1: investment
c.setFillColor(HexColor("#c9a96e"))
c.setFont(BOLD, 12)
c.drawString(60, H - 154, "■ 投资")
c.setFillColor(HexColor("#faf6ec"))
c.setFont(SERIF, 11)
c.drawString(60, H - 174, "本期投入：____________ 元（讲师 + 场地 + 学员误工 + 教材）")
c.drawString(60, H - 190, "学员人数：____________ 人")
c.drawString(60, H - 206, "班级数：____________ 班")

# Section 2: results
c.setFillColor(HexColor("#c9a96e"))
c.setFont(BOLD, 12)
c.drawString(60, H - 234, "■ 关键结果")
c.setFillColor(HexColor("#faf6ec"))
c.setFont(SERIF, 11)
c.drawString(60, H - 254, "1. 学员整体满意度：____ / 5.0（NPS = ____）")
c.drawString(60, H - 270, "2. 认知层提升：前后测平均涨幅 +____ 分（+20 显著）")
c.drawString(60, H - 286, "3. 行为层达成率：____ %（80% 优秀）")
c.drawString(60, H - 302, "4. 30 天回看：____ % 学员应用了至少 1 个工具")
c.drawString(60, H - 318, "5. 工作场景卡：____ % 学员报告有可验证进展")
c.drawString(60, H - 334, "6. 培训投资回报率（ROI）：____ %")

# Section 3: insights
c.setFillColor(HexColor("#c9a96e"))
c.setFont(BOLD, 12)
c.drawString(60, H - 362, "■ 3 条关键洞察")
c.setFillColor(HexColor("#faf6ec"))
c.setFont(SERIF, 11)
c.drawString(60, H - 382, "1. ________________________________________________________________")
c.drawString(60, H - 398, "2. ________________________________________________________________")
c.drawString(60, H - 414, "3. ________________________________________________________________")

# Section 4: next
c.setFillColor(HexColor("#c9a96e"))
c.setFont(BOLD, 12)
c.drawString(60, H - 442, "■ 下一期方向")
c.setFillColor(HexColor("#faf6ec"))
c.setFont(SERIF, 11)
c.drawString(60, H - 462, "1. ________________________________________________________________")
c.drawString(60, H - 478, "2. ________________________________________________________________")
c.drawString(60, H - 494, "3. ________________________________________________________________")

# Bottom signature
c.setFillColor(HexColor("#3a3a3a"))
c.setFont(SERIF, 10)
c.drawString(60, H - 514, "报告撰写人：__________________  审核：__________________  日期：__________________")

page_footer()
c.showPage()

# PAGE 12: 附录
page_header(12, TOTAL)
c.setFillColor(HexColor("#8b2828"))
c.setFont(BOLD, 18)
c.drawString(40, H - 70, "附录 A  数据采集与归档清单")
c.setFillColor(HexColor("#c9a96e"))
c.setLineWidth(2)
c.line(40, H - 78, 290, H - 78)

y0 = H - 120
c.setFillColor(HexColor("#8b2828"))
c.setFont(BOLD, 12)
c.drawString(40, y0, "■ 训前（D-7 ~ D-3）")
y0 -= 22
pre = [
    "□ 课前自评表回收（理想 ≥ 90%）",
    "□ 前测题库回收（理想 ≥ 90%）",
    "□ 高风险学员标记（自评虚高 / 自评极低）",
    "□ 班级混角色情况记录",
    "□ 学员行业 / 部门 / 岗位分布",
]
for it in pre:
    c.setFillColor(HexColor("#3a3a3a"))
    c.setFont(SERIF, 10)
    c.drawString(56, y0, it)
    y0 -= 18

y0 -= 10
c.setFillColor(HexColor("#8b2828"))
c.setFont(BOLD, 12)
c.drawString(40, y0, "■ 训中（D-Day）")
y0 -= 22
mid = [
    "□ 8 个模块的行为观察量表（讲师填写）",
    "□ 课堂练习的学员产出（挂纸 / 便利贴）",
    "□ 讲师每日「最该记下的一句话」",
    "□ 学员出席率（每天 + 模块）",
    "□ 学员投入度观察（讲师主观判断）",
    "□ 课间收集的「卡点」「冷场」「跑题」记录",
]
for it in mid:
    c.setFillColor(HexColor("#3a3a3a"))
    c.setFont(SERIF, 10)
    c.drawString(56, y0, it)
    y0 -= 18

y0 -= 10
c.setFillColor(HexColor("#8b2828"))
c.setFont(BOLD, 12)
c.drawString(40, y0, "■ 训后（D+1 ~ D+30）")
y0 -= 22
post = [
    "□ 课后即时问卷（L1 反应层）",
    "□ 后测题库回收（D+1 ~ D+3）",
    "□ 30 天行动报告回收（D+30）",
    "□ 30 天回看邮件 3 封的点击 / 反馈数据",
    "□ 管理者辅导记录（D+30 / D+60 / D+90）",
    "□ 学员 90 天回访反馈（如果有）",
    "□ 关键场景对照数据（项目准时率 / 会议时长 / 返工次数）",
    "□ 课程改进建议清单（讲师 + 培训管理者）",
]
for it in post:
    c.setFillColor(HexColor("#3a3a3a"))
    c.setFont(SERIF, 10)
    c.drawString(56, y0, it)
    y0 -= 18

page_footer()
c.showPage()

# PAGE 13: 附录 B 参考
page_header(13, TOTAL)
c.setFillColor(HexColor("#8b2828"))
c.setFont(BOLD, 18)
c.drawString(40, H - 70, "附录 B  参考与引用")
c.setFillColor(HexColor("#c9a96e"))
c.setLineWidth(2)
c.line(40, H - 78, 230, H - 78)

y0 = H - 120
refs = [
    "1. Donald L. Kirkpatrick (1959). Techniques for Evaluation Training Programs. ASTD.",
    "2. James D. Kirkpatrick, Wendy Kayser Kirkpatrick (2016). Kirkpatrick's Four Levels of Training Evaluation. ATD Press.",
    "3. 课程原文档：08_评估工具包 / 00_使用说明.md（三角验证方法论）",
    "4. 课程原文档：08_评估工具包 / 01_前测题库_学员版.md",
    "5. 课程原文档：08_评估工具包 / 02_后测题库_学员版.md",
    "6. 课程原文档：08_评估工具包 / 03_参考答案与评分细则.md",
    "7. 课程原文档：08_评估工具包 / 04_行为观察量表_讲师版.md",
    "8. 课程原文档：08_评估工具包 / 05_数据分析与课程改进指南.md",
    "9. 课程原文档：08_评估工具包 / 06_可视化评估看板.html（数据看板）",
    "10. 课程原文档：13_Office文档 / 全流程练习册.xlsx（行为练习记录）",
]
for r in refs:
    c.setFillColor(HexColor("#3a3a3a"))
    c.setFont(SERIF, 9.5)
    c.drawString(56, y0, r)
    y0 -= 16

# Final note
y0 -= 20
c.setFillColor(HexColor("#8b2828"))
c.rect(40, y0 - 80, W - 80, 80, fill=1, stroke=0)
c.setFillColor(HexColor("#c9a96e"))
c.setFont(BOLD, 12)
c.drawString(60, y0 - 26, "■ 致评估人")
c.setFillColor(HexColor("#faf6ec"))
c.setFont(SERIF, 11)
note = "评估不是「考核」——是「改进的输入」。\n你收集到的每一个数据点，都是下一期课程「可以做得更好」的依据。"
yi = y0 - 46
for line in note.split("\n"):
    c.drawString(60, yi, line)
    yi -= 14

page_footer()
c.showPage()

c.save()
print(f"Created: {OUT}")
print(f"Size: {os.path.getsize(OUT)} bytes")
