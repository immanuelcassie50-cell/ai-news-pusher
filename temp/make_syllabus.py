"""Generate 课程大纲.pdf - A4 portrait, 8-10 pages.
Content: 14-hour gantt chart + 3-layer goal framework.
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
from matplotlib.patches import FancyBboxPatch

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
OUT = r"D:\Downloads\利益相关方影响和干预\完整课程包\13_Office文档\课程大纲.pdf"

c = canvas.Canvas(OUT, pagesize=A4)
c.setTitle("共同语言：高效项目执行与问题解决工作坊 - 课程大纲")
c.setAuthor("罗宏伟")

def draw_page_header(page_num, total):
    c.setFillColor(HexColor("#f5f0e6"))
    c.rect(0, 0, W, H, fill=1, stroke=0)
    c.setFillColor(HexColor("#8b2828"))
    c.rect(0, H - 30, W, 30, fill=1, stroke=0)
    c.setFillColor(HexColor("#faf6ec"))
    c.setFont(BOLD, 9)
    c.drawString(40, H - 20, "共同语言 - 高效项目执行与问题解决工作坊")
    c.setFillColor(HexColor("#c9a96e"))
    c.drawRightString(W - 40, H - 20, f"课程大纲  -  v1.0  -  P {page_num} / {total}")

def draw_page_footer():
    c.setStrokeColor(HexColor("#d6cfc1"))
    c.setLineWidth(0.5)
    c.line(40, 30, W - 40, 30)
    c.setFillColor(HexColor("#6e6e6e"))
    c.setFont(SANS, 8)
    c.drawString(40, 18, "罗宏伟  -  行动学习催化师  -  课程体系原创设计")
    c.drawRightString(W - 40, 18, "适用：项目执行者 / 协调管理者 / 技术质量人员")

TOTAL = 9

# PAGE 1: COVER
draw_page_header(1, TOTAL)
c.setFillColor(HexColor("#8b2828"))
c.rect(0, H - 200, W, 200, fill=1, stroke=0)
c.setFillColor(HexColor("#c9a96e"))
c.rect(0, H - 204, W, 4, fill=1, stroke=0)

c.setFillColor(HexColor("#c9a96e"))
c.setFont(BOLD, 10)
c.drawString(40, H - 60, "A 2-DAY WORKSHOP  -  ESTABLISHED 2026  -  8 MODULES  -  14 HOURS")

c.setFillColor(HexColor("#faf6ec"))
c.setFont(SERIF, 52)
c.drawString(40, H - 110, "共同语言")
c.setFillColor(HexColor("#c9a96e"))
c.setFont(SERIF, 28)
c.drawString(40, H - 150, "高效项目执行与问题解决工作坊")
c.setFillColor(HexColor("#faf6ec"))
c.setFont(SERIF, 14)
c.drawString(40, H - 178, "一套语言，一套准则——让团队在面对同一个问题时，不再「各说各话」。")

c.setFillColor(HexColor("#1a1a1a"))
c.setFont(BOLD, 12)
c.drawString(40, H - 240, "一  课程简介")
body1 = ("本课程为期两天（14 小时），是一套聚焦于「人与人之间如何就问题、目标和行动达成一致」\n"
        "的工作坊。课程不教某一个专业领域的知识，而是教一套通用的思考方法、沟通语言和\n"
        "行为准则——让团队的会议更短、返工更少、共识更快、决策更清。")
c.setFillColor(HexColor("#3a3a3a"))
c.setFont(SERIF, 11)
y = H - 262
for line in body1.split("\n"):
    c.drawString(40, y, line)
    y -= 16

y = H - 340
c.setFillColor(HexColor("#8b2828"))
c.setFont(BOLD, 13)
c.drawString(40, y, "■ 课程三大支柱")
y -= 24
pillars = [
    ("更快达成一致", "在面对同一问题时，与不同利益相关方使用统一语言快速对齐认知，减少反复沟通。"),
    ("结构化执行", "主持或参与项目会议时，遵循清晰的准则推动讨论产出具体行动，而非陷入无效讨论。"),
    ("系统化解决问题", "出现异常时按「恢复—定位直接原因—定位根本原因」逻辑展开行动，减少返工、停工与回滚。"),
]
for title, desc in pillars:
    c.setFillColor(HexColor("#c9a96e"))
    c.rect(40, y - 4, 8, 8, fill=1, stroke=0)
    c.setFillColor(HexColor("#8b2828"))
    c.setFont(BOLD, 11.5)
    c.drawString(56, y - 4, title)
    c.setFillColor(HexColor("#3a3a3a"))
    c.setFont(SERIF, 10.5)
    c.drawString(180, y - 4, desc)
    y -= 22

y -= 24
c.setFillColor(HexColor("#f8e6e1"))
c.rect(40, y - 180, W - 80, 180, fill=1, stroke=0)
c.setStrokeColor(HexColor("#8b2828"))
c.setLineWidth(0.8)
c.rect(40, y - 180, W - 80, 180, fill=0, stroke=1)
c.setFillColor(HexColor("#8b2828"))
c.setFont(BOLD, 13)
c.drawString(56, y - 22, "■ 适合谁（混合角色班级效果最佳）")

audience = [
    ("项目执行者", "工程师 / 专员 / 一线骨干——用一套标准句式陈述问题"),
    ("项目协调/管理者", "项目经理 / 跨部门协调人——让会议有明确目的"),
    ("技术/质量人员", "测试 / 质量 / 设计相关——按「恢复—直接—根本」三步走"),
    ("中层骨干", "团队负责人 / PMO / 新晋管理者——让协作摩擦变少"),
]
ya = y - 48
for role, desc in audience:
    c.setFillColor(HexColor("#1a1a1a"))
    c.setFont(BOLD, 11)
    c.drawString(72, ya, role)
    c.setFillColor(HexColor("#3a3a3a"))
    c.setFont(SERIF, 10.5)
    c.drawString(190, ya, desc)
    ya -= 22

c.setFillColor(HexColor("#c9a96e"))
c.setFont(SERIF, 10)
c.drawString(56, y - 165, "建议班级规模：12-24 人  -  鼓励执行者 + 协调者 + 技术人员混班，让案例更立体。")

draw_page_footer()
c.showPage()

# PAGE 2: course map and module overview
draw_page_header(2, TOTAL)
c.setFillColor(HexColor("#8b2828"))
c.setFont(BOLD, 18)
c.drawString(40, H - 70, "一  课程地图与模块一览")
c.setFillColor(HexColor("#c9a96e"))
c.setLineWidth(2)
c.line(40, H - 78, 200, H - 78)

c.setFillColor(HexColor("#3a3a3a"))
c.setFont(SERIF, 11)
c.drawString(40, H - 100, "2 天 × 8 模块 × 1 套语言——通用底座（M1-M3）贯穿全程，阶段工具（M4-M7）按问题阶段展开。")

y0 = H - 150
c.setFillColor(HexColor("#fff5e8"))
c.rect(40, y0 - 160, (W - 100) / 2 - 10, 160, fill=1, stroke=0)
c.setStrokeColor(HexColor("#c9a96e"))
c.setLineWidth(1)
c.rect(40, y0 - 160, (W - 100) / 2 - 10, 160, fill=0, stroke=1)
c.setFillColor(HexColor("#8b2828"))
c.setFont(BOLD, 14)
c.drawString(60, y0 - 28, "DAY 1  -  基础层")
c.setFillColor(HexColor("#1a1a1a"))
c.setFont(SERIF, 10)
c.drawString(60, y0 - 46, "上午  M1 → M2 → M3")
c.drawString(60, y0 - 60, "下午  演练 + 复盘")
day1_mods = [("M1  共同语言", "标准问题陈述句式"), ("M2  会议准则", "四分类 + 行动项三要素"), ("M3  利益相关方", "矩阵 + 引导对话四步")]
ym = y0 - 88
for code, sub in day1_mods:
    c.setFillColor(HexColor("#f8e6e1"))
    c.rect(60, ym - 4, 90, 18, fill=1, stroke=0)
    c.setFillColor(HexColor("#8b2828"))
    c.setFont(BOLD, 10)
    c.drawString(65, ym, code)
    c.setFillColor(HexColor("#3a3a3a"))
    c.setFont(SERIF, 9.5)
    c.drawString(160, ym, sub)
    ym -= 26

dx = 40 + (W - 100) / 2 + 10
c.setFillColor(HexColor("#f8e6e1"))
c.rect(dx, y0 - 160, (W - 100) / 2 - 10, 160, fill=1, stroke=0)
c.setStrokeColor(HexColor("#8b2828"))
c.setLineWidth(1)
c.rect(dx, y0 - 160, (W - 100) / 2 - 10, 160, fill=0, stroke=1)
c.setFillColor(HexColor("#8b2828"))
c.setFont(BOLD, 14)
c.drawString(dx + 20, y0 - 28, "DAY 2  -  诊断层 + 执行层")
c.setFillColor(HexColor("#1a1a1a"))
c.setFont(SERIF, 10)
c.drawString(dx + 20, y0 - 46, "上午  M4 → M5 → M6")
c.drawString(dx + 20, y0 - 60, "下午  M7 → M8  +  30 天计划")
day2_mods = [("M4  三层目标", "恢复/直接原因/根本原因"), ("M5  现象界定", "IS/IS NOT 5 维度"), ("M6  回到正轨", "信号清单 + 纠偏对话"), ("M7  预演", "4 列 + 回滚标准"), ("M8  综合演练", "M1-M7 串联")]
ym = y0 - 88
for code, sub in day2_mods:
    c.setFillColor(HexColor("#fff5e8"))
    c.rect(dx + 20, ym - 4, 90, 18, fill=1, stroke=0)
    c.setFillColor(HexColor("#8b2828"))
    c.setFont(BOLD, 10)
    c.drawString(dx + 25, ym, code)
    c.setFillColor(HexColor("#3a3a3a"))
    c.setFont(SERIF, 9.5)
    c.drawString(dx + 120, ym, sub)
    ym -= 22

y0 = y0 - 200
c.setFillColor(HexColor("#8b2828"))
c.setFont(BOLD, 14)
c.drawString(40, y0, "■ 8 个模块一览")
y0 -= 24
col_xs = [40, 75, 180, 320, 460]
col_ws = [35, 105, 140, 140, 95]
headers = ["模块", "名称", "核心概念", "关键工具", "核心产出"]
c.setFillColor(HexColor("#8b2828"))
c.rect(40, y0 - 4, W - 80, 22, fill=1, stroke=0)
c.setFillColor(HexColor("#faf6ec"))
c.setFont(BOLD, 10)
xc = 40
for h, w in zip(headers, col_ws):
    c.drawString(xc + 6, y0 + 2, h)
    xc += w
y0 -= 24

mods = [
    ("M1", "共同语言", "事实 vs 判断 / 五要素句式", "标准问题陈述句式卡", "统一表达"),
    ("M2", "会议准则", "四分类 / 目的声明 / 停车场", "会议分类 + 行动项三要素", "会议结果化"),
    ("M3", "利益相关方分析", "矩阵 / 引入时机 / 引导对话四步", "矩阵 + 引导对话脚本", "找对人、说对话"),
    ("M4", "三层目标框架", "恢复 / 直接原因 / 根本原因", "三层分类表 + 评估三标准", "分层处理问题"),
    ("M5", "现象界定与根因", "IS/IS NOT 5 维度 / 系统追问", "5 维度对比表 + 根因追问清单", "找准根因"),
    ("M6", "回到正轨", "信号清单 / 纠偏对话四步", "信号自查表 + 纠偏对话脚本", "不偏离 / 不硬撑"),
    ("M7", "潜在问题预演", "4 列预演 / 回滚标准卡", "预演表 + 回滚标准卡", "降低发生 + 降低影响"),
    ("M8", "综合演练 + 30 天", "M1-M7 串联 / 双层结构", "30 天行动计划表", "带走 6 栏计划"),
]
for i, mod in enumerate(mods):
    bg = "#faf6ec" if i % 2 == 0 else "#fffaf0"
    c.setFillColor(HexColor(bg))
    c.rect(40, y0 - 4, W - 80, 22, fill=1, stroke=0)
    c.setFillColor(HexColor("#8b2828"))
    c.setFont(BOLD, 10)
    c.drawString(46, y0 + 2, mod[0])
    c.setFillColor(HexColor("#1a1a1a"))
    c.setFont(BOLD, 9.5)
    c.drawString(81, y0 + 2, mod[1])
    c.setFillColor(HexColor("#3a3a3a"))
    c.setFont(SERIF, 9.5)
    c.drawString(186, y0 + 2, mod[2])
    c.drawString(326, y0 + 2, mod[3])
    c.setFillColor(HexColor("#8b2828"))
    c.setFont(SERIF, 9.5)
    c.drawString(466, y0 + 2, mod[4])
    y0 -= 22

draw_page_footer()
c.showPage()

# PAGE 3: 14-hour gantt
draw_page_header(3, TOTAL)
c.setFillColor(HexColor("#8b2828"))
c.setFont(BOLD, 18)
c.drawString(40, H - 70, "二  14 小时课程甘特图")
c.setFillColor(HexColor("#c9a96e"))
c.setLineWidth(2)
c.line(40, H - 78, 230, H - 78)

c.setFillColor(HexColor("#3a3a3a"))
c.setFont(SERIF, 11)
c.drawString(40, H - 100, "每个模块对应 1 段连续时间（演练与复盘并行）——M1-M3 是通用底座，M4-M7 按问题阶段衔接。")

fig, ax = plt.subplots(figsize=(11, 4.6), dpi=150)
plt.rcParams['font.sans-serif'] = ['Microsoft YaHei', 'SimHei', 'sans-serif']
plt.rcParams['axes.unicode_minus'] = False

modules_g = [
    ("M1  共同语言", 0, 1.5, "#8b2828"),
    ("M2  会议准则", 1.5, 3.0, "#a83838"),
    ("M3  利益相关方", 3.0, 5.0, "#c0392b"),
    ("Day 1  演练 + 复盘", 5.0, 7.0, "#c9a96e"),
    ("M4  三层目标", 7.0, 9.0, "#8b2828"),
    ("M5  现象界定", 9.0, 10.5, "#a83838"),
    ("M6  回到正轨", 10.5, 11.5, "#c0392b"),
    ("M7  预演", 11.5, 12.5, "#8b2828"),
    ("M8  综合演练", 12.5, 13.5, "#a83838"),
    ("30 天计划 + 收尾", 13.5, 14.0, "#c9a96e"),
]
for name, start, end, color in modules_g:
    ax.barh(name, end - start, left=start, color=color, edgecolor="white", height=0.6)
    mid = (start + end) / 2
    ax.text(mid, name, f"  {end - start:.1f}h", va="center", ha="left", fontsize=8, color="white", fontweight="bold")

ax.set_xlim(0, 14)
ax.set_xticks(range(0, 15))
ax.set_xlabel("Hours (累计)", fontsize=10)
ax.set_title("Day 1 + Day 2 课程时间分布（14 小时）", fontsize=12, fontweight="bold", color="#8b2828", pad=12)
ax.invert_yaxis()
ax.grid(axis="x", alpha=0.3, linestyle="--")
ax.spines["top"].set_visible(False)
ax.spines["right"].set_visible(False)
ax.axvline(7, color="#8b2828", linestyle="--", alpha=0.6, linewidth=1.2)
ax.text(7, 9.5, "Day 1 结束", ha="center", fontsize=9, color="#8b2828", fontweight="bold")
ax.text(0.3, -0.6, "Day 1（基础层）", fontsize=9, color="#3a3a3a", fontweight="bold")
ax.text(7.3, -0.6, "Day 2（诊断层 + 执行层）", fontsize=9, color="#3a3a3a", fontweight="bold")
plt.tight_layout()
gantt_png = r"D:\CC\temp\gantt.png"
plt.savefig(gantt_png, bbox_inches="tight", dpi=150, facecolor="#faf6ec")
plt.close()
c.drawImage(gantt_png, 40, H - 380, width=W - 80, height=270, preserveAspectRatio=True, mask='auto')

y0 = H - 410
c.setFillColor(HexColor("#8b2828"))
c.setFont(BOLD, 12)
c.drawString(40, y0, "■ 时间分配（精确到 0.5 小时）")
y0 -= 20
time_data = [
    ("Day 1 上午（3.5h）", "M1 共同语言 (1.5h)  -  M2 会议准则 (1.0h)  -  M3 利益相关方 (1.0h)"),
    ("Day 1 下午（3.5h）", "演练 + 复盘（覆盖 M1-M3 全部工具的真实场景演练与小组互评）"),
    ("Day 2 上午（4.0h）", "M4 三层目标 (2.0h)  -  M5 现象界定 (1.5h)  -  M6 回到正轨 (1.0h)  - 休 0.5h"),
    ("Day 2 下午（3.0h）", "M7 预演 (1.0h)  -  M8 综合演练 (1.0h)  -  30 天行动计划 + 收尾 (0.5h)"),
]
for k, v in time_data:
    c.setFillColor(HexColor("#1a1a1a"))
    c.setFont(BOLD, 10)
    c.drawString(60, y0, k)
    c.setFillColor(HexColor("#3a3a3a"))
    c.setFont(SERIF, 9.5)
    c.drawString(220, y0, v)
    y0 -= 18

y0 -= 10
c.setFillColor(HexColor("#f8e6e1"))
c.rect(40, y0 - 40, W - 80, 40, fill=1, stroke=0)
c.setFillColor(HexColor("#8b2828"))
c.setFont(BOLD, 11)
c.drawString(56, y0 - 16, "■ 总计：")
c.setFillColor(HexColor("#1a1a1a"))
c.setFont(SERIF, 10.5)
c.drawString(110, y0 - 16, "2 天  -  14 小时课堂时间  -  含休息与午餐  -  课前 1 周发放自评 + 课后 30 天跟进")
c.setFillColor(HexColor("#c9a96e"))
c.setFont(SERIF, 10)
c.drawString(56, y0 - 32, "※ 课前配套：自评表 + 高频场景清单 30 张卡片；课后配套：30/60/90 天回看邮件 3 封")

draw_page_footer()
c.showPage()

# PAGE 4: 3-layer framework
draw_page_header(4, TOTAL)
c.setFillColor(HexColor("#8b2828"))
c.setFont(BOLD, 18)
c.drawString(40, H - 70, "三  三层目标框架 - 学习成果")
c.setFillColor(HexColor("#c9a96e"))
c.setLineWidth(2)
c.line(40, H - 78, 280, H - 78)

c.setFillColor(HexColor("#3a3a3a"))
c.setFont(SERIF, 11)
c.drawString(40, H - 100, "Why → What → How 三层结构：先理解「为什么」（问题根源），再看清「是什么」（共同语言），最后在「怎么用」（真实场景）里练一次。")

fig, ax = plt.subplots(figsize=(11, 5.0), dpi=150)
plt.rcParams['font.sans-serif'] = ['Microsoft YaHei', 'SimHei', 'sans-serif']
ax.set_xlim(0, 10)
ax.set_ylim(0, 6)
ax.axis("off")

pillars = [
    (1.5, "WHY\n为什么这样", "协作摩擦 / 返工 / 跑题的根源\n= 「没有共同语言」\n\n事实 vs 判断 混用\n抽象承诺 满天飞\n会议没目的 结束没行动\n问题发生后 没人盯第三层", "#8b2828", "papayawhip"),
    (5.0, "WHAT\n这套语言长什么样", "M1 标准句式（5 要素）\nM2 会议四分类 + 行动项三要素\nM3 矩阵 + 引导对话四步\nM4 三层目标 + 评估三标准\nM5 IS/IS NOT 5 维度\nM6 信号清单 + 纠偏对话\nM7 4 列预演 + 回滚标准卡", "#c0392b", "mistyrose"),
    (8.5, "HOW\n在自己的场景练一次", "2 天工作坊 50% 时间为「演练 + 复盘」\nM8 综合演练串完 M1-M7\n每人产出 1 份 30 天行动计划\n30/60/90 天 3 封回看邮件\n班级混角色（执行 + 协调 + 技术）", "#a8884a", "oldlace"),
]
for x, title, body, color, bg in pillars:
    box = FancyBboxPatch((x - 1.4, 0.5), 2.8, 5, boxstyle="round,pad=0.05",
                          facecolor=bg, edgecolor=color, linewidth=2)
    ax.add_patch(box)
    title_box = FancyBboxPatch((x - 1.4, 4.5), 2.8, 1, boxstyle="round,pad=0.05",
                                facecolor=color, edgecolor=color, linewidth=0)
    ax.add_patch(title_box)
    ax.text(x, 5.0, title, ha="center", va="center", fontsize=12, fontweight="bold", color="white")
    ax.text(x, 2.5, body, ha="center", va="center", fontsize=9, color="#1a1a1a")

for x in [3.2, 6.7]:
    ax.annotate("", xy=(x + 0.5, 3.0), xytext=(x, 3.0),
                arrowprops=dict(arrowstyle="->", color="#a8884a", lw=2))

ax.text(5, 5.85, "三 层 结 构 - Why → What → How", ha="center", fontsize=14, fontweight="bold", color="#8b2828")
plt.tight_layout()
framework_png = r"D:\CC\temp\framework.png"
plt.savefig(framework_png, bbox_inches="tight", dpi=150, facecolor="#faf6ec")
plt.close()
c.drawImage(framework_png, 30, H - 380, width=W - 60, height=270, preserveAspectRatio=True, mask='auto')

y0 = H - 405
c.setFillColor(HexColor("#8b2828"))
c.setFont(BOLD, 13)
c.drawString(40, y0, "■ 完成本课程后，你将能够：")
y0 -= 22
goals = [
    ("01", "更快达成一致", "在面对同一问题时，与不同利益相关方使用统一语言快速对齐认知，减少因理解差异造成的反复沟通。"),
    ("02", "结构化执行", "主持或参与项目会议、协调利益相关方时，遵循清晰的准则推动讨论产出具体行动，而非陷入无效讨论。"),
    ("03", "系统化解决问题", "出现异常时按「恢复—定位直接原因—定位根本原因」的逻辑展开行动，减少返工、停工与回滚。"),
    ("04", "纠偏与回滚", "在执行中偏离计划时，能识别早期信号、按偏离程度分级处理、并提前约定回滚标准。"),
    ("05", "带走 30 天计划", "完成 1 份 6 栏行动计划（Goal / Action / Resources / Obstacles / Timeline / Owner）。"),
]
for code, title, desc in goals:
    c.setFillColor(HexColor("#8b2828"))
    c.setFont(BOLD, 11)
    c.drawString(56, y0, code)
    c.setFillColor(HexColor("#1a1a1a"))
    c.setFont(BOLD, 11)
    c.drawString(86, y0, title)
    c.setFillColor(HexColor("#3a3a3a"))
    c.setFont(SERIF, 10)
    c.drawString(200, y0, desc[:48] + ("..." if len(desc) > 48 else ""))
    y0 -= 18

draw_page_footer()
c.showPage()

# PAGE 5-8: detailed modules (2 per page)
mod_details = [
    ("M1", "共同语言：从「各说各话」到统一表达", "1.5h", [
        ("事实 vs 判断", "能被独立验证的观察 = 事实；解释、归因、预测 = 判断。"),
        ("标准问题陈述句式", "在〔范围〕中〔对象〕本应〔标准〕实际出现〔偏差〕影响是〔后果〕"),
        ("关注点排序", "3 维度（严重性 / 紧迫性 / 趋势）+ 1 破局问题"),
        ("产出工具", '"事实 vs 判断"速查卡 + 标准问题陈述句式卡'),
    ]),
    ("M2", "让会议产生结果：会议类型与高效准则", "1.0h", [
        ("会议四分类", "信息对齐 / 决策 / 问题排查 / 复盘——每类有「结束标志」"),
        ("目的声明句式", '"这是一场〔类型〕会议，今天结束时我们应该……"'),
        ("停车场机制", '"有价值但偏离主线"内容的标准处理方式'),
        ("行动项三要素", "谁 / 做什么 / 到什么时候——三检（具体的人 / 具体的动作 / 可设提醒的时间点）"),
    ]),
    ("M3", "利益相关方分析与引导", "1.0h", [
        ("利益相关方矩阵", "影响力 × 支持度  四象限——重点：右上角（高影响力 + 有顾虑）"),
        ("引入时机原则", "关键决策者必须正式提议前 1-2 周接触"),
        ("引导对话四步", "目标确认 → 陈述问题 → 邀请补充事实 → 共同确认下一步"),
        ("内部对齐四维", "问题陈述 / 目标 / 底线 / 谁来沟通"),
    ]),
    ("M4", "问题发生时怎么想：三层目标框架", "2.0h", [
        ("三层目标", "第一层 恢复（分钟级） / 第二层 直接原因（小时-天级） / 第三层 根本原因（天-周级）"),
        ("最易混淆的边界", "第 1 vs 第 2：现在不做会不会更糟？第 2 vs 第 3：回答的是「这次」还是「以后」？"),
        ("改进行动评估三标准", "有效性（能不能消除根本原因）/ 可执行性（资源时间权限）/ 副作用风险"),
        ("「先试行」", "三标准评估后副作用风险高时，先小范围试行再全面推开"),
    ]),
    ("M5", "从现象到原因：对比分析与根因追问", "1.5h", [
        ("IS / IS NOT 5 维度", "What / Where / When / Who / 程度"),
        ("IS NOT 那一列更有价值", "让你看到「其他条件都类似，凭什么这个不出问题」——根因藏身处"),
        ("5 维度根因追问", "沿 5 个维度从「直接原因」追到「系统层面」"),
        ("「归因到系统 ≠ 个人不负责」", "系统漏洞改正 + 个人动作改进 双管齐下"),
    ]),
    ("M6", "偏离了怎么办：回到正轨的对话与决策", "1.0h", [
        ("4 维度信号清单", "进度 / 质量 / 沟通 / 资源——早期自查 4 个问题"),
        ("3 种决策类型", "坚持 / 调整 / 止损——按偏离程度分级"),
        ("纠偏对话四步", "分享信号 → 三种选项都过一遍 → 共同选 → 明确止损标准"),
        ("止损标准前置", "不把「停下来」变成「临场争论」——事先约定"),
    ]),
    ("M7", "行动前先想「万一」：潜在问题预演", "1.0h", [
        ("4 列预演表", "风险 / 影响 / 预防 / 应急"),
        ("预防 vs 应急", "预防 = 怎么不让它发生；应急 = 如果还是发生怎么不让影响扩大"),
        ("回滚标准卡 4 要素", "触发信号 / 决策权限 / 回滚步骤 / 回滚时长"),
        ("预演反馈回原方案", "至少改 1 条——不要「预演完就放一边」"),
    ]),
    ("M8", "综合演练 + 30 天行动计划", "1.0h", [
        ("双层结构", "M1-M3 通用底座（贯穿全程）+ M4-M7 阶段工具（按问题阶段）"),
        ("M1-M7 串联演练", "1 个真实场景完整走一遍——从问题出现到彻底解决"),
        ("30 天行动计划 6 栏", "Goal / Action / Resources / Obstacles / Timeline / Owner"),
        ("3 个时间点自我检查", "第 7 天 / 第 21 天 / 第 30 天  各回看一次"),
    ]),
]

for i, (code, name, dur, points) in enumerate(mod_details):
    if i % 2 == 0:
        draw_page_header(5 + i // 2, TOTAL)
        c.setFillColor(HexColor("#8b2828"))
        c.setFont(BOLD, 16)
        c.drawString(40, H - 70, f"四  模块详解（{i+1}-{min(i+2, 8)}/8）")
        c.setFillColor(HexColor("#c9a96e"))
        c.setLineWidth(2)
        c.line(40, H - 78, 220, H - 78)

    pos_in_page = i % 2
    if pos_in_page == 0:
        y_top = H - 110
    else:
        y_top = 380

    c.setFillColor(HexColor("#8b2828"))
    c.rect(40, y_top - 50, W - 80, 50, fill=1, stroke=0)
    c.setFillColor(HexColor("#c9a96e"))
    c.rect(40, y_top - 50, 60, 50, fill=1, stroke=0)
    c.setFillColor(HexColor("#8b2828"))
    c.setFont(BOLD, 22)
    c.drawCentredString(70, y_top - 33, code)
    c.setFillColor(HexColor("#faf6ec"))
    c.setFont(BOLD, 14)
    c.drawString(115, y_top - 28, name)
    c.setFillColor(HexColor("#c9a96e"))
    c.setFont(BOLD, 11)
    c.drawRightString(W - 56, y_top - 28, f"时长 {dur}")

    yp = y_top - 80
    for k_pt, v_pt in points:
        c.setFillColor(HexColor("#8b2828"))
        c.setFont(BOLD, 10)
        c.drawString(60, yp, "■ " + k_pt)
        c.setFillColor(HexColor("#3a3a3a"))
        c.setFont(SERIF, 10)
        wrapped = textwrap.wrap(v_pt, width=60)
        yy = yp - 14
        for w_line in wrapped:
            c.drawString(60, yy, w_line)
            yy -= 14
        yp = yy - 4

    if pos_in_page == 1 or i == len(mod_details) - 1:
        draw_page_footer()
        c.showPage()

# PAGE 9: delivery + features
draw_page_header(9, TOTAL)
c.setFillColor(HexColor("#8b2828"))
c.setFont(BOLD, 18)
c.drawString(40, H - 70, "五  交付形式与课程特色")
c.setFillColor(HexColor("#c9a96e"))
c.setLineWidth(2)
c.line(40, H - 78, 270, H - 78)

y0 = H - 110
c.setFillColor(HexColor("#8b2828"))
c.setFont(BOLD, 14)
c.drawString(40, y0, "■ 交付形式")
y0 -= 24
delivery = [
    ("时长", "2 天（共约 14 小时课堂时间，含休息与午餐）"),
    ("形式", "线下工作坊，强调案例演练与小组互动"),
    ("班级规模", "建议 12-24 人/班，可混合角色以提升真实感"),
    ("学员手册", "含课前自评、练习页、反思日志、行动计划与工具索引（配套 7 个 Office 文档）"),
    ("工具卡包", "标准问题陈述句式卡、会议分类卡、利益相关方矩阵卡、回滚标准卡等"),
    ("30 天跟进工具包", "行动重测自评 + 行为承诺卡 + 3 封预制回看邮件（第 7/21/30 天）"),
    ("案例适配", "可结合贵司所在行业（如制造、质量、工程项目）的真实场景定制案例"),
]
for k, v in delivery:
    c.setFillColor(HexColor("#1a1a1a"))
    c.setFont(BOLD, 10)
    c.drawString(60, y0, k)
    c.setFillColor(HexColor("#3a3a3a"))
    c.setFont(SERIF, 10)
    c.drawString(160, y0, v[:50] + ("..." if len(v) > 50 else ""))
    y0 -= 18

y0 -= 16
c.setFillColor(HexColor("#8b2828"))
c.setFont(BOLD, 14)
c.drawString(40, y0, "■ 课程特色")
y0 -= 24
features = [
    ("1. 不是「理论讲解 + 练习」", "整套工具包围绕同一套语言反复出现在不同场景中——标准句式在 M1 出现，在 M3、M6、M7、M8 又反复被引用；三层目标框架在 M4 奠定，在 M5、M6、M7 逐层展开。"),
    ("2. 立竿见影", "每个模块结束时，你已经知道今晚或明天的会议上要怎么用一次——这是这门课程的基本要求。"),
    ("3. 带走 30 天行动计划", "每位学员在第二天结束时完成 1 份 6 栏个人行动计划，明确「接下来 30 天，我要在哪三个具体场景里使用哪三个工具」。"),
    ("4. 真实案例教学", "5 个连续角色贯穿 8 个模块（王工 / 张经理 / 老李 / 小赵 / 陈老师）——学到的，就是角色要学的。"),
]
for k, v in features:
    c.setFillColor(HexColor("#c9a96e"))
    c.rect(40, y0 - 4, 8, 8, fill=1, stroke=0)
    c.setFillColor(HexColor("#8b2828"))
    c.setFont(BOLD, 11)
    c.drawString(56, y0 - 4, k)
    c.setFillColor(HexColor("#3a3a3a"))
    c.setFont(SERIF, 10)
    wrapped = textwrap.wrap(v, width=68)
    yy = y0 - 20
    for w_line in wrapped:
        c.drawString(56, yy, w_line)
        yy -= 13
    y0 = yy - 8

y0 -= 8
c.setFillColor(HexColor("#8b2828"))
c.rect(40, y0 - 70, W - 80, 70, fill=1, stroke=0)
c.setFillColor(HexColor("#c9a96e"))
c.rect(40, y0 - 70, 4, 70, fill=1, stroke=0)
c.setFillColor(HexColor("#c9a96e"))
c.setFont(BOLD, 12)
c.drawString(60, y0 - 22, "■ 一句话总结")
c.setFillColor(HexColor("#faf6ec"))
c.setFont(SERIF, 14)
c.drawString(60, y0 - 44, "共同语言，是项目执行里被低估的第一生产力。")
c.setFillColor(HexColor("#c9a96e"))
c.setFont(SERIF, 10)
c.drawString(60, y0 - 60, "-- 当团队用同一种语言讨论问题，会议会短、返工会少、共识会快、决策会清。")

draw_page_footer()
c.showPage()

c.save()
print(f"Created: {OUT}")
print(f"Size: {os.path.getsize(OUT)} bytes")
