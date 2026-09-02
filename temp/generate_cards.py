"""
创新领导力 - 8个可打印工具卡 PDF 生成器
A6 卡片尺寸 (105mm x 148mm)，每张卡 2 页（正面+背面）
"""
import os
from reportlab.lib.pagesizes import mm
from reportlab.lib.units import mm as M
from reportlab.pdfgen import canvas
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.colors import HexColor, white, black

# ====== 字体注册（中文支持） ======
def register_chinese_fonts():
    candidates = [
        ("SimHei", "C:/Windows/Fonts/simhei.ttf"),
        ("SimHei", "C:/Windows/Fonts/SIMHEI.TTF"),
        ("MicrosoftYaHei", "C:/Windows/Fonts/msyh.ttc"),
        ("MicrosoftYaHei", "C:/Windows/Fonts/MSYH.TTC"),
        ("SimSun", "C:/Windows/Fonts/simsun.ttc"),
        ("NotoSansCJK", "C:/Windows/Fonts/NotoSansCJK-Regular.ttc"),
    ]
    for name, path in candidates:
        if os.path.exists(path):
            try:
                pdfmetrics.registerFont(TTFont(name, path))
                return name
            except Exception:
                continue
    return "Helvetica"


FONT_CN = register_chinese_fonts()
FONT_BOLD = FONT_CN

# ====== 配色 ======
COLOR_INK = HexColor("#1A1A2E")
COLOR_ACCENT = HexColor("#2D5F8A")
COLOR_ACCENT2 = HexColor("#C8553D")
COLOR_BG = white
COLOR_LIGHT = HexColor("#F4F1ED")
COLOR_BORDER = HexColor("#1A1A2E")
COLOR_GRAY = HexColor("#6B6B73")
COLOR_HIGHLIGHT = HexColor("#FFF4D6")
COLOR_GREEN = HexColor("#2A6B5A")
COLOR_RED = HexColor("#A93B2A")
COLOR_BROWN = HexColor("#8A3A2A")

# ====== A6 尺寸 ======
PAGE_W = 105 * mm
PAGE_H = 148 * mm

# ====== 输出目录 ======
OUTPUT_DIR = r"D:\2026年课程\竞越\创新领导力：打造创新型团队\完整课程表\08-可打印工具卡"
os.makedirs(OUTPUT_DIR, exist_ok=True)


def draw_card_frame(c, page_num, total, title, subtitle, side="front"):
    """绘制卡片外框 + 标题区域"""
    c.setStrokeColor(COLOR_BORDER)
    c.setLineWidth(1.2)
    c.rect(3*mm, 3*mm, PAGE_W - 6*mm, PAGE_H - 6*mm, stroke=1, fill=0)

    # 顶部色条
    c.setFillColor(COLOR_ACCENT)
    c.rect(3*mm, PAGE_H - 12*mm, PAGE_W - 6*mm, 9*mm, stroke=0, fill=1)

    # 编号圆点
    c.setFillColor(white)
    c.circle(11*mm, PAGE_H - 7.5*mm, 3.2*mm, stroke=0, fill=1)
    c.setFillColor(COLOR_ACCENT)
    c.setFont(FONT_BOLD, 9)
    c.drawCentredString(11*mm, PAGE_H - 8.3*mm, f"{page_num:02d}")

    # 卡片标题
    c.setFillColor(white)
    c.setFont(FONT_BOLD, 11)
    c.drawString(18*mm, PAGE_H - 9.3*mm, title)

    # 副标题
    c.setFillColor(COLOR_INK)
    c.setFont(FONT_CN, 8.5)
    c.drawString(11*mm, PAGE_H - 17*mm, subtitle)

    # 底部色条
    c.setFillColor(COLOR_ACCENT2)
    c.rect(3*mm, 3*mm, PAGE_W - 6*mm, 2*mm, stroke=0, fill=1)

    # 底部信息
    c.setFillColor(COLOR_GRAY)
    c.setFont(FONT_CN, 6.5)
    side_label = "正面" if side == "front" else "背面"
    c.drawString(6*mm, 5.5*mm, f"创新领导力 · 工具卡 {page_num:02d}/{total}  ·  {side_label}")
    c.drawRightString(PAGE_W - 6*mm, 5.5*mm, "可打印 · A6 卡片")


def wrap_text(c, text, x, y, max_w, font_name, font_size, leading=None):
    if leading is None:
        leading = font_size * 1.45
    c.setFont(font_name, font_size)
    has_cn = any('一' <= ch <= '鿿' for ch in text)
    chars = list(text) if has_cn else text.split(' ')

    line = ""
    current_y = y
    for ch in chars:
        test = line + ch
        if c.stringWidth(test, font_name, font_size) <= max_w:
            line = test
        else:
            c.drawString(x, current_y, line)
            current_y -= leading
            line = ch
            if current_y < 12*mm:
                break
    if line and current_y >= 12*mm:
        c.drawString(x, current_y, line)
        current_y -= leading
    return current_y


def draw_bullet(c, x, y, text, max_w, font_size=8, leading=None):
    if leading is None:
        leading = font_size * 1.5
    c.setFillColor(COLOR_ACCENT)
    c.circle(x + 1.2*mm, y + 1*mm, 0.6*mm, stroke=0, fill=1)
    c.setFillColor(COLOR_INK)
    c.setFont(FONT_CN, font_size)
    return wrap_text(c, text, x + 5*mm, y, max_w - 5*mm, FONT_CN, font_size, leading)


def draw_numbered(c, x, y, n, text, max_w, font_size=8, leading=None):
    if leading is None:
        leading = font_size * 1.5
    c.setFillColor(COLOR_ACCENT2)
    c.circle(x + 1.8*mm, y + 1*mm, 1.8*mm, stroke=0, fill=1)
    c.setFillColor(white)
    c.setFont(FONT_BOLD, 7.5)
    c.drawCentredString(x + 1.8*mm, y + 0.2*mm, str(n))
    c.setFillColor(COLOR_INK)
    c.setFont(FONT_CN, font_size)
    return wrap_text(c, text, x + 6*mm, y, max_w - 6*mm, FONT_CN, font_size, leading)


# ============================================================
# 卡片 01: 开篇认知自测卡
# ============================================================
def card_01_front(c):
    title = "开篇认知自测卡"
    subtitle = "关于创新型团队的 8 个真相 · 2 分钟快速判断"
    draw_card_frame(c, 1, 8, title, subtitle, "front")

    x = 10*mm
    y = PAGE_H - 23*mm
    max_w = PAGE_W - 20*mm

    c.setFillColor(COLOR_INK)
    c.setFont(FONT_BOLD, 7.5)
    c.drawString(x, y, "判断以下说法的正误：✓ = 正确  /  ✗ = 错误")
    y -= 5*mm

    items = [
        "团队的创新能力主要取决于成员的聪明程度和创意天赋",
        "鼓励员工犯错是打造创新文化的有效方式",
        "高绩效执行型团队通常也更容易在创新上有突破",
        "管理者主动提出创意方向有助于引导团队创新",
        "团队对失败越宽容，创新产出的质量就越高",
        "提升团队创新力，首先要给大家更多「自由时间」",
        "真正的客户需求，通过用户访谈就能有效识别",
        "创新型领导者的核心任务是筛选好想法并给予资源支持",
    ]

    for i, text in enumerate(items, 1):
        c.setFillColor(COLOR_INK)
        c.setFont(FONT_BOLD, 7.5)
        c.drawString(x, y, f"{i}.")
        y = wrap_text(c, text, x + 5*mm, y, max_w - 22*mm, FONT_CN, 7.5, 9.5)
        # 留空填写区
        c.setStrokeColor(COLOR_GRAY)
        c.setLineWidth(0.4)
        c.rect(PAGE_W - 20*mm, y + 3*mm, 10*mm, 3.5*mm, stroke=1, fill=0)
        y -= 5*mm

    # 正面底部金句
    c.setFillColor(COLOR_HIGHLIGHT)
    c.rect(7*mm, 10*mm, PAGE_W - 14*mm, 8*mm, stroke=0, fill=1)
    c.setFillColor(COLOR_INK)
    c.setFont(FONT_BOLD, 7.5)
    c.drawString(9*mm, 15*mm, "💡 关键认知")
    c.setFont(FONT_CN, 7)
    c.drawString(9*mm, 11.5*mm, "创新型团队的天花板，不是成员有多聪明，")
    c.drawString(9*mm, 8.5*mm, "而是管理者给了多少「敢说、能碰、快学」的空间。")


def card_01_back(c):
    title = "开篇认知自测卡"
    subtitle = "答案与解析"
    draw_card_frame(c, 1, 8, title, subtitle, "back")

    x = 10*mm
    y = PAGE_H - 23*mm
    max_w = PAGE_W - 20*mm

    c.setFillColor(COLOR_INK)
    c.setFont(FONT_BOLD, 7.5)
    c.drawString(x, y, "答案与核心解析")
    y -= 4.5*mm

    answers = [
        ("1 ✗", "影响最大的是心理安全感，不是聪明程度"),
        ("2 ✗", "应建立「学习型失败文化」而非无差别鼓励犯错"),
        ("3 ✗", "执行优秀的团队反而更抗拒创新"),
        ("4 ✗", "易让团队从「独立思考」切换到「解读老板」"),
        ("5 ✗", "关键是「从失败中提取知识的速度」"),
        ("6 ✗", "还需配套知识流通机制才能生效"),
        ("7 ✗", "用户说不清真实未满足需求"),
        ("8 ✗", "核心是创造条件让好想法能冒出来"),
    ]
    for tag, txt in answers:
        c.setFillColor(COLOR_RED)
        c.setFont(FONT_BOLD, 7)
        c.drawString(x, y, tag)
        c.setFillColor(COLOR_INK)
        c.setFont(FONT_CN, 7)
        y = wrap_text(c, txt, x + 8*mm, y, max_w - 8*mm, FONT_CN, 7, 9)
        y -= 1.2*mm

    # 背面底部
    c.setFillColor(COLOR_LIGHT)
    c.rect(7*mm, 8*mm, PAGE_W - 14*mm, 14*mm, stroke=0, fill=1)
    c.setFillColor(COLOR_ACCENT)
    c.setFont(FONT_BOLD, 7.5)
    c.drawString(9*mm, 19*mm, "使用建议")
    c.setFillColor(COLOR_INK)
    c.setFont(FONT_CN, 6.8)
    c.drawString(9*mm, 15.5*mm, "1. 课前 2 分钟独立完成正面 8 题判断")
    c.drawString(9*mm, 12.5*mm, "2. 上课时对照背面答案，找认知差距")
    c.drawString(9*mm, 9.5*mm, "3. 在小组里分享：哪个真相让你最意外？")


# ============================================================
# 卡片 02: 五因素诊断卡
# ============================================================
def card_02_front(c):
    title = "五因素诊断卡"
    subtitle = "5 个维度 · 各 4 题 · 自评 1-5 分"
    draw_card_frame(c, 2, 8, title, subtitle, "front")

    x = 9*mm
    y = PAGE_H - 23*mm
    max_w = PAGE_W - 18*mm

    factors = [
        ("① 心理安全感", "敢说真实想法", [
            "团队成员会当面说还不成熟的想法",
            "异见会被认真讨论而不是终止",
            "成员敢公开承认不懂、不确定",
            "失败被作为学习机会认真对待",
        ]),
        ("② 认知多样性", "听到不同声音", [
            "团队有显著不同思维风格的成员",
            "与主流不同意见不会被快速淹没",
            "过去半年有「意外的人」的想法被认真对待",
            "我能说清每个人「思维方式最不同」之处",
        ]),
        ("③ 探索空间", "有时间做未知的事", [
            "成员有定期的非任务性学习时间",
            "探索活动不会因「项目紧急」被取消",
            "可对无明确答案的问题持续研究",
            "探索的洞察有渠道进入正式讨论",
        ]),
    ]

    for fname, fdesc, qs in factors:
        c.setFillColor(COLOR_ACCENT)
        c.rect(x, y - 1*mm, 1*mm, 3.5*mm, stroke=0, fill=1)
        c.setFillColor(COLOR_INK)
        c.setFont(FONT_BOLD, 7.8)
        c.drawString(x + 2.5*mm, y, fname)
        c.setFillColor(COLOR_GRAY)
        c.setFont(FONT_CN, 6.5)
        c.drawString(x + 2.5*mm, y - 2.8*mm, fdesc)
        y -= 5*mm
        for q in qs:
            c.setFillColor(COLOR_INK)
            c.setFont(FONT_CN, 6.5)
            y = wrap_text(c, "• " + q, x + 1*mm, y, max_w - 16*mm, FONT_CN, 6.5, 8)
            c.setFillColor(COLOR_GRAY)
            c.setFont(FONT_CN, 6.5)
            c.drawString(PAGE_W - 17*mm, y + 2.5*mm, "1 2 3 4 5")
            y -= 2.8*mm
        y -= 1.5*mm

    # 正面底部小计区
    c.setFillColor(COLOR_LIGHT)
    c.rect(7*mm, 9*mm, PAGE_W - 14*mm, 6*mm, stroke=0, fill=1)
    c.setFillColor(COLOR_INK)
    c.setFont(FONT_BOLD, 6.5)
    c.drawString(9*mm, 12*mm, "小计")
    c.drawString(20*mm, 12*mm, "心理安全 ____/20")
    c.drawString(50*mm, 12*mm, "认知多样 ____/20")
    c.drawString(80*mm, 12*mm, "探索空间 ____/20")
    c.setFont(FONT_CN, 6.3)
    c.drawString(9*mm, 9.5*mm, "⚠ 每项 1-5 分，最低分维度即为优先改进项")


def card_02_back(c):
    title = "五因素诊断卡"
    subtitle = "因素 4-5 + 综合判断"
    draw_card_frame(c, 2, 8, title, subtitle, "back")

    x = 9*mm
    y = PAGE_H - 23*mm
    max_w = PAGE_W - 18*mm

    factors2 = [
        ("④ 学习速度", "快速从行动中提取知识", [
            "至少每月有复盘 + 具体行动结论",
            "失败项目会被作为学习案例认真讨论",
            "个人洞察有机制让其他成员知道",
            "执行中持续微调方向，不等项目结束",
        ]),
        ("⑤ 领导者信号", "管理者的行为在塑造什么", [
            "我公开表彰过「有价值的失败学习」",
            "对异见的第一反应是好奇而非评判",
            "日程里留有非执行的探索/学习时间",
            "成员能举出我做的「让表达更安全」的事",
        ]),
    ]

    for fname, fdesc, qs in factors2:
        c.setFillColor(COLOR_ACCENT)
        c.rect(x, y - 1*mm, 1*mm, 3.5*mm, stroke=0, fill=1)
        c.setFillColor(COLOR_INK)
        c.setFont(FONT_BOLD, 7.8)
        c.drawString(x + 2.5*mm, y, fname)
        c.setFillColor(COLOR_GRAY)
        c.setFont(FONT_CN, 6.5)
        c.drawString(x + 2.5*mm, y - 2.8*mm, fdesc)
        y -= 5*mm
        for q in qs:
            c.setFillColor(COLOR_INK)
            c.setFont(FONT_CN, 6.5)
            y = wrap_text(c, "• " + q, x + 1*mm, y, max_w - 16*mm, FONT_CN, 6.5, 8)
            c.setFillColor(COLOR_GRAY)
            c.drawString(PAGE_W - 17*mm, y + 2.5*mm, "1 2 3 4 5")
            y -= 2.8*mm
        y -= 1.5*mm

    # 综合判断
    y -= 1*mm
    c.setFillColor(COLOR_HIGHLIGHT)
    c.rect(7*mm, 22*mm, PAGE_W - 14*mm, 16*mm, stroke=0, fill=1)
    c.setFillColor(COLOR_INK)
    c.setFont(FONT_BOLD, 7.5)
    c.drawString(9*mm, 35*mm, "📊 综合判断")
    c.setFont(FONT_CN, 6.8)
    c.drawString(9*mm, 31.5*mm, "• 总分 80+ 优秀，60-80 健康，<60 需紧急改善")
    c.drawString(9*mm, 28.5*mm, "• 心理安全感 = 地基：低则其他四项努力大打折扣")
    c.drawString(9*mm, 25.5*mm, "• 领导者信号 = 土壤：影响所有其他因素能否生长")
    c.drawString(9*mm, 22.5*mm, "• 最低分维度 = 你最该用力的地方")


# ============================================================
# 卡片 03: 客户洞察四层穿透卡
# ============================================================
def card_03_front(c):
    title = "客户洞察四层穿透卡"
    subtitle = "任务 → 阻力 → 动力 → 背景"
    draw_card_frame(c, 3, 8, title, subtitle, "front")

    x = 9*mm
    y = PAGE_H - 22*mm
    max_w = PAGE_W - 18*mm

    layers = [
        ("任务层", "客户在试图完成什么任务？", "比表面需求更具体、更有共性。"),
        ("阻力层", "什么让这个任务困难、令人沮丧？", "不只是功能缺失，可能是流程复杂、学习成本高。"),
        ("动力层", "客户真正追求的结果是什么？", "功能 + 情感 + 社交 三层结果。"),
        ("背景层", "这个任务发生在什么具体情境下？", "时间/地点/角色/情绪 决定优先级。"),
    ]
    colors = [COLOR_ACCENT, COLOR_ACCENT2, COLOR_GREEN, COLOR_BROWN]

    for (name, q, hint), col in zip(layers, colors):
        c.setFillColor(col)
        c.rect(x, y - 3*mm, 18*mm, 6*mm, stroke=0, fill=1)
        c.setFillColor(white)
        c.setFont(FONT_BOLD, 8.5)
        c.drawString(x + 1.5*mm, y - 1.5*mm, name)
        c.setFillColor(COLOR_INK)
        c.setFont(FONT_BOLD, 7.5)
        c.drawString(x + 20*mm, y - 1.5*mm, q)
        y -= 5*mm
        c.setFillColor(COLOR_GRAY)
        c.setFont(FONT_CN, 6.5)
        c.drawString(x + 1*mm, y - 1*mm, hint)
        # 填写区
        c.setStrokeColor(COLOR_BORDER)
        c.setLineWidth(0.3)
        for line_i in range(3):
            c.line(x + 1*mm, y - 4*mm - line_i*4*mm, x + max_w - 1*mm, y - 4*mm - line_i*4*mm)
        y -= 16*mm


def card_03_back(c):
    title = "客户洞察四层穿透卡"
    subtitle = "案例 + 使用步骤"
    draw_card_frame(c, 3, 8, title, subtitle, "back")

    x = 9*mm
    y = PAGE_H - 22*mm
    max_w = PAGE_W - 18*mm

    c.setFillColor(COLOR_INK)
    c.setFont(FONT_BOLD, 8)
    c.drawString(x, y, "经典案例：奶昔的真相")
    y -= 5*mm

    c.setFillColor(COLOR_LIGHT)
    c.rect(7*mm, y - 38*mm, PAGE_W - 14*mm, 38*mm, stroke=0, fill=1)

    c.setFillColor(COLOR_INK)
    c.setFont(FONT_BOLD, 7)
    c.drawString(9*mm, y - 3*mm, "你以为的：客户喜欢奶昔的口感")
    c.setFont(FONT_CN, 6.8)
    y2 = y - 7*mm
    lines = [
        "• 任务：在漫长独自通勤中让手/嘴有事做",
        "• 阻力：香蕉太快吃完，百吉饼太干",
        "• 动力：撑到午饭不饿（功能）+ 不无聊（情感）",
        "• 背景：早晨 7-9 点，一个人在车上",
        "★ 洞察：竞争对手是香蕉/百吉饼/咖啡",
    ]
    for line in lines:
        c.drawString(10*mm, y2, line)
        y2 -= 3.5*mm

    y -= 42*mm

    c.setFillColor(COLOR_ACCENT)
    c.rect(x, y - 1*mm, 1*mm, 3*mm, stroke=0, fill=1)
    c.setFillColor(COLOR_INK)
    c.setFont(FONT_BOLD, 8)
    c.drawString(x + 2.5*mm, y, "使用步骤")
    y -= 5*mm

    steps = [
        "选一个你熟悉的客户/产品场景",
        "依四层顺序填写（不要跳层）",
        "标出最依赖二手信息的那一层",
        "两周内为该层做一次第一手验证",
    ]
    for i, s in enumerate(steps, 1):
        y = draw_numbered(c, x, y, i, s, max_w, 7, 9)


# ============================================================
# 卡片 04: 知识流通断裂点速查卡
# ============================================================
def card_04_front(c):
    title = "知识流通断裂点速查卡"
    subtitle = "交互涌现分析 · 5 步速查"
    draw_card_frame(c, 4, 8, title, subtitle, "front")

    x = 9*mm
    y = PAGE_H - 22*mm
    max_w = PAGE_W - 18*mm

    c.setFillColor(COLOR_INK)
    c.setFont(FONT_BOLD, 7.5)
    c.drawString(x, y, "三堵墙 · 先识别")
    y -= 5*mm

    walls = [
        ("① 职能壁垒", "技术/产品/销售 各自成体系，跨职能信息摩擦极大"),
        ("② 层级过滤", "坏消息/弱信号/不确定性 在层级间被过滤掉"),
        ("③ 专注陷阱", "每个人太专注于本职，无暇了解「隔壁在做什么」"),
    ]
    for w, desc in walls:
        c.setFillColor(COLOR_ACCENT2)
        c.setFont(FONT_BOLD, 7)
        c.drawString(x, y, w)
        c.setFillColor(COLOR_INK)
        c.setFont(FONT_CN, 6.5)
        y = wrap_text(c, desc, x + 18*mm, y, max_w - 18*mm, FONT_CN, 6.5, 8)
        y -= 1.5*mm

    y -= 2*mm
    c.setFillColor(COLOR_ACCENT)
    c.rect(x, y - 1*mm, 1*mm, 3*mm, stroke=0, fill=1)
    c.setFillColor(COLOR_INK)
    c.setFont(FONT_BOLD, 8)
    c.drawString(x + 2.5*mm, y, "5 步诊断流程")
    y -= 5*mm

    steps = [
        "列出团队接触的所有信息/知识来源（≥6 条）",
        "评估每条渠道状态：畅通 / 不畅 / 断裂",
        "找出「最有价值的断裂点」",
        "设计一个具体机制打通它（人/事/频率）",
        "6 个月内问：有没有出现让你「意外惊喜」的想法？",
    ]
    for i, s in enumerate(steps, 1):
        y = draw_numbered(c, x, y, i, s, max_w, 7, 9)


def card_04_back(c):
    title = "知识流通断裂点速查卡"
    subtitle = "3 种打破壁垒的机制"
    draw_card_frame(c, 4, 8, title, subtitle, "back")

    x = 9*mm
    y = PAGE_H - 22*mm
    max_w = PAGE_W - 18*mm

    mechanisms = [
        ("定期的知识流通渠道", "例：每两周 1 次「15 分钟怪事分享」——每个人带一件「上两周让我意外的事」，不要求结论，只分享"),
        ("边界地带的共同项目", "给不同部门、背景的人一个真实业务挑战，让他们的不同知识必须相遇，不是 team building，是真问题"),
        ("保护异质声音", "每次重要讨论结束前，主动问：「谁有不一样的看法还没说？」——不是表演民主，是创造让弱信号被听到的瞬间"),
    ]
    cols = [COLOR_ACCENT, COLOR_GREEN, COLOR_ACCENT2]
    for i, ((name, desc), col) in enumerate(zip(mechanisms, cols), 1):
        c.setFillColor(col)
        c.rect(x, y - 1*mm, max_w, 14*mm, stroke=0, fill=1)
        c.setFillColor(white)
        c.setFont(FONT_BOLD, 8)
        c.drawString(x + 2*mm, y + 9*mm, f"机制 {i}")
        c.setFont(FONT_BOLD, 8.5)
        c.drawString(x + 14*mm, y + 9*mm, name)
        c.setFont(FONT_CN, 6.5)
        wrap_text(c, desc, x + 2*mm, y + 6*mm, max_w - 4*mm, FONT_CN, 6.5, 8.5)
        y -= 16*mm

    c.setFillColor(COLOR_HIGHLIGHT)
    c.rect(7*mm, 8*mm, PAGE_W - 14*mm, 12*mm, stroke=0, fill=1)
    c.setFillColor(COLOR_INK)
    c.setFont(FONT_BOLD, 6.8)
    c.drawString(9*mm, 17*mm, "💡 Post-it 启示")
    c.setFont(FONT_CN, 6.5)
    c.drawString(9*mm, 14*mm, "便利贴不是被发明出来的，是被「相遇」出来的。")
    c.drawString(9*mm, 11*mm, "管理者的角色 = 碰撞条件的设计师。")
    c.drawString(9*mm, 8*mm, "Spencer Silver + Arthur Fry：在同一家公司，有机会交流。")


# ============================================================
# 卡片 05: 最小可学习实验设计卡
# ============================================================
def card_05_front(c):
    title = "最小可学习实验设计卡"
    subtitle = "敏捷迭代 · 假设→测试→条件→学习"
    draw_card_frame(c, 5, 8, title, subtitle, "front")

    x = 9*mm
    y = PAGE_H - 22*mm
    max_w = PAGE_W - 18*mm

    fields = [
        ("① 核心假设", "如果错了，整个方向无意义的前提：", COLOR_ACCENT),
        ("② 假设类型", "□ 客户假设  □ 行为假设  □ 可行性假设  □ 商业假设", COLOR_GREEN),
        ("③ 当前推进方式", "如实描述（不要美化）：", COLOR_ACCENT2),
        ("④ 最小验证设计", "≤2 周、≤原预算 10%：", COLOR_ACCENT),
        ("⑤ 预定义改变条件", "测试前写下，对抗确认偏误：", COLOR_ACCENT2),
        ("⑥ 公开学习计划", "对谁、在什么场合分享学到了什么：", COLOR_GREEN),
    ]
    for label, hint, col in fields:
        c.setFillColor(col)
        c.rect(x, y - 1*mm, 1*mm, 3*mm, stroke=0, fill=1)
        c.setFillColor(COLOR_INK)
        c.setFont(FONT_BOLD, 7.5)
        c.drawString(x + 2.5*mm, y, label)
        c.setFillColor(COLOR_GRAY)
        c.setFont(FONT_CN, 6.5)
        c.drawString(x + 25*mm, y, hint)
        y -= 4*mm
        c.setStrokeColor(COLOR_BORDER)
        c.setLineWidth(0.3)
        for li in range(2):
            c.line(x + 1*mm, y - 2*mm - li*3.5*mm, x + max_w - 1*mm, y - 2*mm - li*3.5*mm)
        y -= 9*mm


def card_05_back(c):
    title = "最小可学习实验设计卡"
    subtitle = "管理者 5 种角色转换"
    draw_card_frame(c, 5, 8, title, subtitle, "back")

    x = 9*mm
    y = PAGE_H - 22*mm
    max_w = PAGE_W - 18*mm

    c.setFillColor(COLOR_INK)
    c.setFont(FONT_BOLD, 7.5)
    c.drawString(x, y, "管理者的 5 种角色转换（与直觉相反）")
    y -= 5*mm

    roles = [
        ("允许「不完美」", "让不完美的早期版本上线，而不是追求完美再出发"),
        ("把改变当进步", "「发现假设不成立」是迭代胜利，要公开庆祝"),
        ("问学到了什么", "不只是「结果怎么样」——要问从结果中提取了什么"),
        ("受保护的资源", "迭代需要真实资源支持，不能「等有时间再试」"),
        ("学习里程碑", "增加一类：「将学到关于假设 Z 的明确答案」"),
    ]
    for i, (name, desc) in enumerate(roles, 1):
        c.setFillColor(COLOR_ACCENT2)
        c.circle(x + 1.8*mm, y + 1*mm, 1.8*mm, stroke=0, fill=1)
        c.setFillColor(white)
        c.setFont(FONT_BOLD, 7)
        c.drawCentredString(x + 1.8*mm, y + 0.2*mm, str(i))
        c.setFillColor(COLOR_INK)
        c.setFont(FONT_BOLD, 7)
        c.drawString(x + 6*mm, y, name)
        c.setFont(FONT_CN, 6.5)
        y = wrap_text(c, desc, x + 22*mm, y, max_w - 22*mm, FONT_CN, 6.5, 8)
        y -= 2*mm

    y -= 2*mm
    c.setFillColor(COLOR_HIGHLIGHT)
    c.rect(7*mm, 8*mm, PAGE_W - 14*mm, 13*mm, stroke=0, fill=1)
    c.setFillColor(COLOR_INK)
    c.setFont(FONT_BOLD, 7.5)
    c.drawString(9*mm, 18*mm, "💡 关键认知")
    c.setFont(FONT_CN, 7)
    c.drawString(9*mm, 15*mm, "迭代≠「小步快跑」≠「失败了也没关系」")
    c.drawString(9*mm, 12.5*mm, "是「在行动前知道在测试什么，行动后知道学到了什么」")
    c.drawString(9*mm, 10*mm, "A 计划执行 vs B 迭代：相同目标，时间/学习差数量级")
    c.drawString(9*mm, 7.5*mm, "在投入最大成本前，用最小行动验证最重要的假设。")


# ============================================================
# 卡片 06: 领导者行为对照卡
# ============================================================
def card_06_front(c):
    title = "领导者行为对照卡"
    subtitle = "创新型领导 vs 运营管理 · 8 场景"
    draw_card_frame(c, 6, 8, title, subtitle, "front")

    x = 9*mm
    y = PAGE_H - 22*mm
    max_w = PAGE_W - 18*mm

    c.setFillColor(COLOR_INK)
    c.setFont(FONT_BOLD, 7.5)
    c.drawString(x, y, "运营管理者反应 vs 创新型领导者反应")
    y -= 4.5*mm

    c.setFillColor(COLOR_ACCENT)
    c.rect(x, y - 1*mm, 30*mm, 4*mm, stroke=0, fill=1)
    c.setFillColor(COLOR_ACCENT2)
    c.rect(x + 30*mm, y - 1*mm, max_w - 30*mm, 4*mm, stroke=0, fill=1)
    c.setFillColor(white)
    c.setFont(FONT_BOLD, 6.5)
    c.drawString(x + 1*mm, y + 0.5*mm, "运营管理者反应")
    c.drawString(x + 31*mm, y + 0.5*mm, "创新型领导者反应")
    y -= 5*mm

    rows = [
        ("想清楚了再来", "这个想法最有意思的地方是？"),
        ("为什么会失败？", "我们学到了什么新东西？"),
        ("我来拍板：X", "先把各自的假设摆出来"),
        ("ABC 三个任务", "核心 AB，留 20% 给 C 探索"),
        ("不是时候", "帮我理解你的理由"),
        ("表彰成功项目", "表彰 + 复盘有价值的失败"),
        ("找能力强、匹配的人", "刻意找「思维方式不同」的人"),
        ("资源给明确 ROI 的", "留一部分给「不确定但值得探索」"),
    ]
    for i, (left, right) in enumerate(rows):
        if i % 2 == 0:
            c.setFillColor(COLOR_LIGHT)
            c.rect(x, y - 0.5*mm, max_w, 5.5*mm, stroke=0, fill=1)
        c.setFillColor(COLOR_INK)
        c.setFont(FONT_CN, 6.5)
        c.drawString(x + 1*mm, y + 1*mm, left)
        c.drawString(x + 31*mm, y + 1*mm, right)
        y -= 5.5*mm

    c.setFillColor(COLOR_HIGHLIGHT)
    c.rect(7*mm, 8*mm, PAGE_W - 14*mm, 7*mm, stroke=0, fill=1)
    c.setFillColor(COLOR_INK)
    c.setFont(FONT_BOLD, 6.8)
    c.drawString(9*mm, 12*mm, "⚠ 关键问题")
    c.setFont(FONT_CN, 6.5)
    c.drawString(9*mm, 9.5*mm, "不是「哪一套更好」，而是「能否在需要时切换」。")


def card_06_back(c):
    title = "领导者行为对照卡"
    subtitle = "5 种无意识创新抑制 + 使用步骤"
    draw_card_frame(c, 6, 8, title, subtitle, "back")

    x = 9*mm
    y = PAGE_H - 22*mm
    max_w = PAGE_W - 18*mm

    c.setFillColor(COLOR_INK)
    c.setFont(FONT_BOLD, 7.5)
    c.drawString(x, y, "5 种最常见的无意识创新抑制")
    y -= 4.5*mm

    inhibitions = [
        ("要求想法「成熟」再提", "听起来帮助质量 → 实际扼杀萌芽想法"),
        ("只在成功时给认可", "听起来结果导向 → 实际让人只做有把握的事"),
        ("找「谁的责任」", "听起来有责任感 → 实际让人隐瞒实验遇挫"),
        ("在会上先说自己的看法", "听起来高效 → 实际让团队对准你的意图"),
        ("探索时间遇压力就取消", "听起来管理优先级 → 实际传达「探索可牺牲」"),
    ]
    for name, effect in inhibitions:
        c.setFillColor(COLOR_ACCENT2)
        c.rect(x, y - 1*mm, 1*mm, 7*mm, stroke=0, fill=1)
        c.setFillColor(COLOR_INK)
        c.setFont(FONT_BOLD, 7)
        c.drawString(x + 2.5*mm, y, name)
        c.setFillColor(COLOR_GRAY)
        c.setFont(FONT_CN, 6.3)
        y = wrap_text(c, effect, x + 2.5*mm, y - 2.8*mm, max_w - 2.5*mm, FONT_CN, 6.3, 7.5)
        y -= 1.5*mm

    y -= 2*mm
    c.setFillColor(COLOR_LIGHT)
    c.rect(7*mm, 8*mm, PAGE_W - 14*mm, 14*mm, stroke=0, fill=1)
    c.setFillColor(COLOR_INK)
    c.setFont(FONT_BOLD, 7)
    c.drawString(9*mm, 19*mm, "使用步骤")
    c.setFont(FONT_CN, 6.5)
    c.drawString(9*mm, 16*mm, "1. 回忆过去 30 天的 5 个具体事件")
    c.drawString(9*mm, 13*mm, "2. 对照正面表格判断你的倾向")
    c.drawString(9*mm, 10*mm, "3. 选 1 件最想改变的行为")
    c.drawString(9*mm, 7*mm, "4. 写出：改变后团队会有什么不同？")


# ============================================================
# 卡片 07: 挑战卡模板
# ============================================================
def card_07_front(c):
    title = "我的创新挑战卡"
    subtitle = "今晚作业 · 15-20 分钟"
    draw_card_frame(c, 7, 8, title, subtitle, "front")

    x = 9*mm
    y = PAGE_H - 22*mm
    max_w = PAGE_W - 18*mm

    fields = [
        ("挑战一句话", "谁，在做什么，遇到了什么困难：", 3),
        ("已经做过什么", "结果如何：", 2),
        ("目前最大障碍", "2-3 个，越具体越好：", 3),
        ("最希望找到的答案", "这两天里最想搞清楚的一件事：", 2),
    ]
    for label, hint, lines in fields:
        c.setFillColor(COLOR_ACCENT)
        c.setFont(FONT_BOLD, 7.5)
        c.drawString(x, y, "▎" + label)
        c.setFillColor(COLOR_GRAY)
        c.setFont(FONT_CN, 6.3)
        c.drawString(x + 22*mm, y, hint)
        y -= 3.5*mm
        c.setStrokeColor(COLOR_BORDER)
        c.setLineWidth(0.3)
        for li in range(lines):
            c.line(x, y - 1.5*mm - li*4*mm, x + max_w, y - 1.5*mm - li*4*mm)
        y -= lines * 4*mm + 1.5*mm

    c.setFillColor(COLOR_LIGHT)
    c.rect(7*mm, 8*mm, PAGE_W - 14*mm, 13*mm, stroke=0, fill=1)
    c.setFillColor(COLOR_INK)
    c.setFont(FONT_BOLD, 7)
    c.drawString(9*mm, 18*mm, "对照判断（圈选）")
    c.setFont(FONT_CN, 6.8)
    c.drawString(9*mm, 15*mm, "客户洞察：足够扎实 / 有待加强 / 几乎是盲区")
    c.drawString(9*mm, 12*mm, "交互涌现：足够顺畅 / 有几个断裂点 / 基本封闭")
    c.drawString(9*mm, 9*mm, "敏捷迭代：已经在做 / 偶尔在做 / 几乎没有")


def card_07_back(c):
    title = "我的创新挑战卡"
    subtitle = "选题标准 + 范例"
    draw_card_frame(c, 7, 8, title, subtitle, "back")

    x = 9*mm
    y = PAGE_H - 22*mm
    max_w = PAGE_W - 18*mm

    c.setFillColor(COLOR_INK)
    c.setFont(FONT_BOLD, 7.5)
    c.drawString(x, y, "选题标准")
    y -= 5*mm

    standards = [
        "你真的在乎这件事的结果",
        "不需要是最重要的项目",
        "不能太宏观（「推动公司转型」无行动价值）",
        "不能太微小（「优化内部模板」没有创新张力）",
        "要能在脑子里看到具体人、情境、卡点",
    ]
    for s in standards:
        y = draw_bullet(c, x, y, s, max_w, 6.8, 8.5)
        y -= 0.5*mm

    y -= 2*mm
    c.setFillColor(COLOR_HIGHLIGHT)
    c.rect(7*mm, 28*mm, PAGE_W - 14*mm, 38*mm, stroke=0, fill=1)
    c.setFillColor(COLOR_INK)
    c.setFont(FONT_BOLD, 7.5)
    c.drawString(9*mm, 63*mm, "📋 范例")
    c.setFont(FONT_CN, 6.5)
    examples = [
        "「团队正在推新客户服务模式，三个月了，到",
        " 实施环节一线员工配合度很低」",
        "「最大的障碍：一线员工不相信新模式能减少",
        " 工作量，反而担心增加考核压力」",
        "「想搞清楚：是模式本身有问题，还是实施",
        " 方式没找到对的？」",
    ]
    ey = 59*mm
    for line in examples:
        c.drawString(11*mm, ey, line)
        ey -= 3*mm

    c.setFont(FONT_BOLD, 6.8)
    c.drawString(9*mm, 36*mm, "关键提示：")
    c.setFont(FONT_CN, 6.5)
    c.drawString(9*mm, 33*mm, "• 必须是你愿意在接下来 24 小时认真思考的问题")
    c.drawString(9*mm, 30*mm, "• 把这张卡带到第二天——明天三要素分析会用到")


# ============================================================
# 卡片 08: 30-60-90 行动承诺卡
# ============================================================
def card_08_front(c):
    title = "30-60-90 行动承诺卡"
    subtitle = "课后行动规划 · 只写 80% 把握做到的事"
    draw_card_frame(c, 8, 8, title, subtitle, "front")

    x = 9*mm
    y = PAGE_H - 22*mm
    max_w = PAGE_W - 18*mm

    c.setFillColor(COLOR_INK)
    c.setFont(FONT_BOLD, 6.8)
    c.drawString(x, y, "⚠ 写下 10 件没一件做，不如写下 2 件都做成")
    y -= 5*mm

    for period, color, hint in [
        ("30 天内", COLOR_ACCENT, "具体到「在___场合，对___，做___」"),
        ("60 天内", COLOR_GREEN, "让改变成为习惯，建立支持机制"),
        ("90 天内", COLOR_ACCENT2, "在团队里能看到可观察的差异"),
    ]:
        c.setFillColor(color)
        c.rect(x, y - 1*mm, 16*mm, 5*mm, stroke=0, fill=1)
        c.setFillColor(white)
        c.setFont(FONT_BOLD, 8)
        c.drawString(x + 1.5*mm, y + 0.5*mm, period)
        c.setFillColor(COLOR_GRAY)
        c.setFont(FONT_CN, 6.3)
        c.drawString(x + 17*mm, y + 1*mm, hint)
        y -= 5*mm
        c.setStrokeColor(COLOR_BORDER)
        c.setLineWidth(0.3)
        for li in range(3):
            c.line(x, y - 1.5*mm - li*3.8*mm, x + max_w, y - 1.5*mm - li*3.8*mm)
        y -= 13*mm


def card_08_back(c):
    title = "30-60-90 行动承诺卡"
    subtitle = "判断标准 + 跟进承诺"
    draw_card_frame(c, 8, 8, title, subtitle, "back")

    x = 9*mm
    y = PAGE_H - 22*mm
    max_w = PAGE_W - 18*mm

    c.setFillColor(COLOR_INK)
    c.setFont(FONT_BOLD, 7.5)
    c.drawString(x, y, "「足够具体」的判断标准")
    y -= 4.5*mm

    c.setFillColor(COLOR_RED)
    c.setFont(FONT_BOLD, 6.5)
    c.drawString(x, y, "✗ 不够具体：")
    c.setFillColor(COLOR_INK)
    c.setFont(FONT_CN, 6.5)
    c.drawString(x + 18*mm, y, "「我想改变风格」")
    y -= 4*mm

    c.setFillColor(COLOR_GREEN)
    c.setFont(FONT_BOLD, 6.5)
    c.drawString(x, y, "✓ 足够具体：")
    c.setFillColor(COLOR_INK)
    c.setFont(FONT_CN, 6.5)
    y = wrap_text(c, "「下周四产品周会开场，对整个团队说：今天我们先花 5 分钟——有没有人最近听到了什么让你意外的客户反馈？不管有没有结论，都可以说。」", x + 18*mm, y, max_w - 18*mm, FONT_CN, 6.5, 8.5)
    y -= 4*mm

    c.setFillColor(COLOR_INK)
    c.setFont(FONT_BOLD, 7)
    y = wrap_text(c, "测试问题：5 年后一个团队成员被问「你的管理者做的第一件不同的事是什么」，能清楚说出来吗？", x, y, max_w, FONT_BOLD, 6.8, 8.5)
    y -= 6*mm

    c.setFillColor(COLOR_ACCENT)
    c.rect(x, y - 1*mm, 1*mm, 3*mm, stroke=0, fill=1)
    c.setFillColor(COLOR_INK)
    c.setFont(FONT_BOLD, 7.5)
    c.drawString(x + 2.5*mm, y, "我的跟进方式")
    y -= 5*mm
    c.setStrokeColor(COLOR_BORDER)
    c.setLineWidth(0.3)
    for li in range(2):
        c.line(x, y - 1.5*mm - li*3.8*mm, x + max_w, y - 1.5*mm - li*3.8*mm)
    y -= 11*mm

    c.setFillColor(COLOR_ACCENT2)
    c.rect(x, y - 1*mm, 1*mm, 3*mm, stroke=0, fill=1)
    c.setFillColor(COLOR_INK)
    c.setFont(FONT_BOLD, 7.5)
    c.drawString(x + 2.5*mm, y, "30 天后追问我「做了没有」的人")
    y -= 5*mm
    c.setStrokeColor(COLOR_BORDER)
    c.setLineWidth(0.3)
    c.line(x, y - 1.5*mm, x + max_w, y - 1.5*mm)
    y -= 6*mm

    c.setFillColor(COLOR_HIGHLIGHT)
    c.rect(7*mm, 7*mm, PAGE_W - 14*mm, 9*mm, stroke=0, fill=1)
    c.setFillColor(COLOR_INK)
    c.setFont(FONT_BOLD, 6.8)
    c.drawString(9*mm, 13*mm, "💡 关键认知")
    c.setFont(FONT_CN, 6.5)
    c.drawString(9*mm, 10.5*mm, "回到赵建设的故事：那个沉默，才是要解决的。")
    c.drawString(9*mm, 8*mm, "你的答案变了吗？这就是这两天最真实的收获。")


# ============================================================
# 主流程
# ============================================================
def main():
    cards = [
        (1, "01-开篇认知自测卡", card_01_front, card_01_back),
        (2, "02-五因素诊断卡", card_02_front, card_02_back),
        (3, "03-客户洞察四层穿透卡", card_03_front, card_03_back),
        (4, "04-知识流通断裂点速查卡", card_04_front, card_04_back),
        (5, "05-最小可学习实验设计卡", card_05_front, card_05_back),
        (6, "06-领导者行为对照卡", card_06_front, card_06_back),
        (7, "07-我的创新挑战卡", card_07_front, card_07_back),
        (8, "08-30-60-90 行动承诺卡", card_08_front, card_08_back),
    ]
    total = len(cards)

    for num, fname, fn_front, fn_back in cards:
        out_path = os.path.join(OUTPUT_DIR, fname + ".pdf")
        c = canvas.Canvas(out_path, pagesize=(PAGE_W, PAGE_H))
        c.setTitle(fname)
        c.setAuthor("创新领导力课程")
        c.setSubject("可打印工具卡")
        # 正面
        fn_front(c)
        c.showPage()
        # 背面
        fn_back(c)
        c.showPage()
        c.save()
        print(f"[{num:02d}/{total}] {fname}.pdf (2 pages)")

    print(f"\n所有 {total} 张卡片已生成到：{OUTPUT_DIR}")


if __name__ == "__main__":
    main()
