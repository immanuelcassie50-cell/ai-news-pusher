# -*- coding: utf-8 -*-
"""
VUCA时代情绪力课程 - 可打印工具卡生成器
生成8个PDF文件,参考Demo风格
"""
import os
from reportlab.lib.pagesizes import A4, landscape
from reportlab.lib import colors
from reportlab.lib.units import mm, cm
from reportlab.platypus import SimpleDocTemplate, Table, TableStyle, Paragraph, Spacer, PageBreak, HRFlowable
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_RIGHT
from reportlab.pdfgen import canvas
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus.flowables import Flowable

# 注册中文字体
FONT_PATH = "C:/Windows/Fonts/msyh.ttc"  # 微软雅黑
FONT_BOLD_PATH = "C:/Windows/Fonts/msyhbd.ttc"  # 微软雅黑粗体

try:
    pdfmetrics.registerFont(TTFont('MicrosoftYaHei', FONT_PATH))
    pdfmetrics.registerFont(TTFont('MicrosoftYaHei-Bold', FONT_BOLD_PATH))
    CHINESE_FONT = 'MicrosoftYaHei'
    CHINESE_FONT_BOLD = 'MicrosoftYaHei-Bold'
except:
    CHINESE_FONT = 'Helvetica'
    CHINESE_FONT_BOLD = 'Helvetica-Bold'

# 输出目录
OUTPUT_DIR = "D:/新课开发/职业生涯和画布/VUCA时代,升级情绪力,做自己职场的主角/完整课程包/可打印工具卡demo"

# 颜色方案 - 参考Demo的蓝灰配色
COLOR_PRIMARY = colors.HexColor('#1a3a5c')      # 深蓝
COLOR_SECONDARY = colors.HexColor('#2d5a87')    # 中蓝
COLOR_ACCENT = colors.HexColor('#e8a838')       # 金色强调
COLOR_LIGHT_BG = colors.HexColor('#f5f7fa')     # 浅灰背景
COLOR_TEXT = colors.HexColor('#2c3e50')         # 深灰文字
COLOR_LIGHT_TEXT = colors.HexColor('#7f8c8d')   # 浅灰文字
COLOR_SUCCESS = colors.HexColor('#27ae60')      # 绿色
COLOR_WARNING = colors.HexColor('#e74c3c')       # 红色
COLOR_BORDER = colors.HexColor('#bdc3c7')       # 边框灰
COLOR_HEADER_BG = colors.HexColor('#ecf0f1')    # 表头背景

PAGE_WIDTH, PAGE_HEIGHT = landscape(A4)
MARGIN = 15 * mm

def get_styles():
    """获取样式定义"""
    styles = getSampleStyleSheet()

    styles.add(ParagraphStyle(
        name='CardTitle',
        fontName=CHINESE_FONT_BOLD,
        fontSize=22,
        textColor=colors.white,
        alignment=TA_CENTER,
        spaceAfter=6,
        leading=28
    ))
    styles.add(ParagraphStyle(
        name='CardTitleEn',
        fontName=CHINESE_FONT,
        fontSize=10,
        textColor=colors.HexColor('#a8d4f0'),
        alignment=TA_CENTER,
        spaceAfter=4,
        leading=14
    ))
    styles.add(ParagraphStyle(
        name='SectionTitle',
        fontName=CHINESE_FONT_BOLD,
        fontSize=13,
        textColor=COLOR_PRIMARY,
        alignment=TA_LEFT,
        spaceAfter=4,
        leading=18
    ))
    styles.add(ParagraphStyle(
        name='BodyText',
        fontName=CHINESE_FONT,
        fontSize=10,
        textColor=COLOR_TEXT,
        alignment=TA_LEFT,
        spaceAfter=3,
        leading=15
    ))
    styles.add(ParagraphStyle(
        name='BodyTextBold',
        fontName=CHINESE_FONT_BOLD,
        fontSize=10,
        textColor=COLOR_TEXT,
        alignment=TA_LEFT,
        spaceAfter=3,
        leading=15
    ))
    styles.add(ParagraphStyle(
        name='SmallText',
        fontName=CHINESE_FONT,
        fontSize=8,
        textColor=COLOR_LIGHT_TEXT,
        alignment=TA_LEFT,
        spaceAfter=2,
        leading=11
    ))
    styles.add(ParagraphStyle(
        name='FooterText',
        fontName=CHINESE_FONT,
        fontSize=7,
        textColor=COLOR_LIGHT_TEXT,
        alignment=TA_RIGHT,
        leading=10
    ))
    styles.add(ParagraphStyle(
        name='TableCell',
        fontName=CHINESE_FONT,
        fontSize=9,
        textColor=COLOR_TEXT,
        alignment=TA_LEFT,
        leading=13,
        spaceAfter=0
    ))
    styles.add(ParagraphStyle(
        name='TableCellBold',
        fontName=CHINESE_FONT_BOLD,
        fontSize=9,
        textColor=COLOR_TEXT,
        alignment=TA_LEFT,
        leading=13
    ))
    styles.add(ParagraphStyle(
        name='Instruction',
        fontName=CHINESE_FONT,
        fontSize=9,
        textColor=COLOR_SECONDARY,
        alignment=TA_LEFT,
        leading=13,
        spaceAfter=2
    ))
    styles.add(ParagraphStyle(
        name='KeyPoint',
        fontName=CHINESE_FONT_BOLD,
        fontSize=10,
        textColor=COLOR_ACCENT,
        alignment=TA_LEFT,
        leading=14,
        spaceAfter=3
    ))
    return styles


def draw_header(c, title, subtitle, page_num):
    """绘制页面顶部标题栏"""
    # 渐变背景条
    c.setFillColor(COLOR_PRIMARY)
    c.rect(0, PAGE_HEIGHT - 45*mm, PAGE_WIDTH, 45*mm, fill=1, stroke=0)

    # 左侧装饰线
    c.setFillColor(COLOR_ACCENT)
    c.rect(0, PAGE_HEIGHT - 45*mm, 4*mm, 45*mm, fill=1, stroke=0)

    # 标题
    c.setFillColor(colors.white)
    c.setFont(CHINESE_FONT_BOLD, 20)
    c.drawString(12*mm, PAGE_HEIGHT - 25*mm, title)

    # 副标题
    c.setFillColor(colors.HexColor('#a8d4f0'))
    c.setFont(CHINESE_FONT, 9)
    c.drawString(12*mm, PAGE_HEIGHT - 33*mm, subtitle)

    # 右侧模块标签
    c.setFillColor(COLOR_ACCENT)
    c.roundRect(PAGE_WIDTH - 55*mm, PAGE_HEIGHT - 38*mm, 45*mm, 12*mm, 3*mm, fill=1, stroke=0)
    c.setFillColor(COLOR_PRIMARY)
    c.setFont(CHINESE_FONT_BOLD, 8)
    c.drawCentredString(PAGE_WIDTH - 32.5*mm, PAGE_HEIGHT - 29*mm, "VUCA时代情绪力")


def draw_footer(c, page_num, total_pages, back=False):
    """绘制页面底部"""
    footer_text = "罗宏伟" if page_num == 1 else "VUCA时代,升级情绪力,做自己职场的主角"
    back_text = "背面" if back else "正面"

    # 底部线
    c.setStrokeColor(COLOR_BORDER)
    c.setLineWidth(0.5)
    c.line(MARGIN, 12*mm, PAGE_WIDTH - MARGIN, 12*mm)

    # 左侧信息
    c.setFillColor(COLOR_LIGHT_TEXT)
    c.setFont(CHINESE_FONT, 7)
    c.drawString(MARGIN, 8*mm, f"井然® I-Can! · 专家型讲师 TTT")

    # 中间
    c.setFillColor(COLOR_SECONDARY)
    c.setFont(CHINESE_FONT, 7)
    c.drawCentredString(PAGE_WIDTH / 2, 8*mm, footer_text)

    # 右侧页码
    c.setFillColor(COLOR_LIGHT_TEXT)
    c.setFont(CHINESE_FONT, 7)
    page_label = f"第{page_num}页"
    c.drawRightString(PAGE_WIDTH - MARGIN, 8*mm, page_label)


def draw_table_with_style(c, data, col_widths, style_options=None):
    """绘制表格的辅助函数"""
    # 这个函数保留但主要用canvas直接绘制
    pass


# ============================================================
# PDF 1: 开篇认知自测卡
# ============================================================
def create_card_01():
    """01-开篇认知自测卡"""
    filename = os.path.join(OUTPUT_DIR, "01-开篇认知自测卡.pdf")
    c = canvas.Canvas(filename, pagesize=landscape(A4))

    # ========== 第1页：正面 - 测试题 ==========
    draw_header(c, "开篇认知自测", "自我检测：你对情绪力的理解有多少偏差?", 1)

    # 说明区域
    y_start = PAGE_HEIGHT - 55*mm
    c.setFillColor(COLOR_LIGHT_BG)
    c.roundRect(MARGIN, y_start - 28*mm, PAGE_WIDTH - 2*MARGIN, 28*mm, 3*mm, fill=1, stroke=0)

    c.setFillColor(COLOR_SECONDARY)
    c.setFont(CHINESE_FONT_BOLD, 9)
    c.drawString(MARGIN + 5*mm, y_start - 8*mm, "怎么用：")

    c.setFillColor(COLOR_TEXT)
    c.setFont(CHINESE_FONT, 9)
    instruction = "凭直觉判断下面8句话的对错,在方框里打"OK"或写"X"。不用纠结,第一反应即可。"
    c.drawString(MARGIN + 5*mm, y_start - 15*mm, instruction)

    c.setFillColor(COLOR_ACCENT)
    c.setFont(CHINESE_FONT, 8)
    c.drawString(MARGIN + 5*mm, y_start - 22*mm, "提示：如果你有3条以上的判断和解析不一致,说明这副工具卡会对你特别有用。")

    # 题目表格
    y_table = y_start - 35*mm
    questions = [
        ("1", "情绪是对工作的干扰,管理好情绪才能做好工作"),
        ("2", "职场中应该隐藏自己的真实情绪,才能显得专业"),
        ("3", "积极情绪越多越好,消极情绪都应该被消除"),
        ("4", "情绪是可以自己选择的,同一件事可以选择不同的情绪反应"),
        ("5", "了解自己为什么情绪不好,是处理情绪的第一步"),
        ("6", "情绪来自外部事件,别人让我生气,所以我没办法"),
        ("7", "在VUCA时代,情绪管理能力比工作能力更重要"),
        ("8", "好的情绪管理就是不让情绪影响任何决策"),
    ]

    # 表头
    c.setFillColor(COLOR_HEADER_BG)
    c.rect(MARGIN, y_table, PAGE_WIDTH - 2*MARGIN, 10*mm, fill=1, stroke=0)
    c.setStrokeColor(COLOR_BORDER)
    c.setLineWidth(0.5)
    c.rect(MARGIN, y_table, PAGE_WIDTH - 2*MARGIN, 10*mm, fill=0, stroke=1)

    c.setFillColor(COLOR_PRIMARY)
    c.setFont(CHINESE_FONT_BOLD, 9)
    c.drawString(MARGIN + 3*mm, y_table + 3*mm, "序号")
    c.drawString(MARGIN + 15*mm, y_table + 3*mm, "说法")
    c.drawCentredString(PAGE_WIDTH - MARGIN - 25*mm, y_table + 3*mm, "对 OK")
    c.drawCentredString(PAGE_WIDTH - MARGIN - 10*mm, y_table + 3*mm, "错 X")

    # 表格线
    c.setStrokeColor(COLOR_BORDER)
    c.setLineWidth(0.3)
    row_height = 12*mm
    y_row = y_table

    for i, (num, question) in enumerate(questions):
        y_row -= row_height
        # 隔行背景
        if i % 2 == 1:
            c.setFillColor(colors.HexColor('#f8f9fa'))
            c.rect(MARGIN, y_row, PAGE_WIDTH - 2*MARGIN, row_height, fill=1, stroke=0)

        # 行边框
        c.setStrokeColor(COLOR_BORDER)
        c.rect(MARGIN, y_row, PAGE_WIDTH - 2*MARGIN, row_height, fill=0, stroke=1)

        # 序号
        c.setFillColor(COLOR_SECONDARY)
        c.setFont(CHINESE_FONT_BOLD, 9)
        c.drawCentredString(MARGIN + 10*mm, y_row + 4*mm, num)

        # 题目
        c.setFillColor(COLOR_TEXT)
        c.setFont(CHINESE_FONT, 9)
        c.drawString(MARGIN + 18*mm, y_row + 4*mm, question)

        # 对错框
        box_size = 6*mm
        c.setStrokeColor(COLOR_SECONDARY)
        c.setLineWidth(0.8)
        # 对框
        c.rect(PAGE_WIDTH - MARGIN - 30*mm, y_row + 3*mm, box_size, box_size, fill=0, stroke=1)
        # 错框
        c.rect(PAGE_WIDTH - MARGIN - 15*mm, y_row + 3*mm, box_size, box_size, fill=0, stroke=1)

    # 底部关键认知
    y_key = y_row - 10*mm
    c.setFillColor(COLOR_ACCENT)
    c.setFont(CHINESE_FONT_BOLD, 9)
    c.drawString(MARGIN, y_key, "关键认知：")
    c.setFillColor(COLOR_TEXT)
    c.setFont(CHINESE_FONT, 9)
    c.drawString(MARGIN + 20*mm, y_key, "情绪力不是"消除负面情绪",而是"在情绪来临时,有选择的权利"。这8道题,帮你认清常见误区。")

    draw_footer(c, 1, 2)

    # ========== 第2页：背面 - 解析 ==========
    c.showPage()
    draw_header(c, "开篇认知自测 · 解析", "答案与说明", 2)

    y_start = PAGE_HEIGHT - 55*mm

    # 解析内容
    answers = [
        ("1", "错", "情绪本身就是信息,不是干扰。压抑情绪反而降低工作效率和质量。"),
        ("2", "错", "隐藏情绪短期有效,长期会导致情绪堆叠爆发或职业倦怠。"),
        ("3", "错", "消极情绪有重要信号功能,比如焦虑提醒风险、愤怒提醒被侵犯。"),
        ("4", "对", "同样的事,选择看重的角度不同,情绪反应就会不同。这是认知重评的基础。"),
        ("5", "对", "觉察是转化的起点。不知道"为什么",就无法真正"怎么办"。"),
        ("6", "错", "外部事件是触发器,但情绪反应模式是自己养成的。同一件事,不同人反应不同。"),
        ("7", "对", "在VUCA时代,唯一不变的就是变化,情绪力是应对变化的底层能力。"),
        ("8", "错", "情绪是决策的重要信号,完全不影响决策反而会让人做出鲁莽决定。"),
    ]

    c.setFillColor(COLOR_HEADER_BG)
    c.roundRect(MARGIN, y_start - 8*mm, PAGE_WIDTH - 2*MARGIN, 8*mm, 2*mm, fill=1, stroke=0)
    c.setFillColor(COLOR_PRIMARY)
    c.setFont(CHINESE_FONT_BOLD, 9)
    c.drawString(MARGIN + 3*mm, y_start - 5*mm, "序号")
    c.drawString(MARGIN + 15*mm, y_start - 5*mm, "答案")
    c.drawString(MARGIN + 28*mm, y_start - 5*mm, "解析")
    c.drawString(MARGIN + 175*mm, y_start - 5*mm, "序号")
    c.drawString(MARGIN + 188*mm, y_start - 5*mm, "答案")
    c.drawString(MARGIN + 200*mm, y_start - 5*mm, "解析")

    y_row = y_start - 18*mm
    row_height = 22*mm

    for i, (num, answer, explanation) in enumerate(answers):
        col = i % 2
        row = i // 2
        x_offset = MARGIN if col == 0 else MARGIN + 90*mm
        y_pos = y_row - row * row_height

        if col == 1 and i > 0:
            # 左列分割线
            c.setStrokeColor(COLOR_BORDER)
            c.setLineWidth(0.3)
            c.line(MARGIN + 85*mm, y_start, MARGIN + 85*mm, y_pos + row_height)

        # 背景
        if row % 2 == 0:
            c.setFillColor(colors.HexColor('#f8f9fa'))
            c.rect(x_offset, y_pos - row_height + 3*mm, 85*mm, row_height - 3*mm, fill=1, stroke=0)

        # 边框
        c.setStrokeColor(COLOR_BORDER)
        c.setLineWidth(0.3)
        c.rect(x_offset, y_pos - row_height + 3*mm, 85*mm, row_height - 3*mm, fill=0, stroke=1)

        # 序号
        c.setFillColor(COLOR_SECONDARY)
        c.setFont(CHINESE_FONT_BOLD, 8)
        c.drawString(x_offset + 3*mm, y_pos - 7*mm, num)

        # 答案
        answer_color = COLOR_SUCCESS if answer == "对" else COLOR_WARNING
        c.setFillColor(answer_color)
        c.setFont(CHINESE_FONT_BOLD, 9)
        c.drawString(x_offset + 12*mm, y_pos - 7*mm, answer)

        # 解析
        c.setFillColor(COLOR_TEXT)
        c.setFont(CHINESE_FONT, 8)
        # 文字换行处理
        words = explanation
        if len(words) > 22:
            c.drawString(x_offset + 3*mm, y_pos - 14*mm, words[:22])
            c.drawString(x_offset + 3*mm, y_pos - 21*mm, words[22:])
        else:
            c.drawString(x_offset + 3*mm, y_pos - 14*mm, words)

    # 底部关键认知
    y_key = 25*mm
    c.setFillColor(COLOR_LIGHT_BG)
    c.roundRect(MARGIN, y_key - 12*mm, PAGE_WIDTH - 2*MARGIN, 15*mm, 3*mm, fill=1, stroke=0)

    c.setFillColor(COLOR_ACCENT)
    c.setFont(CHINESE_FONT_BOLD, 9)
    c.drawString(MARGIN + 5*mm, y_key - 6*mm, "关键认知：")
    c.setFillColor(COLOR_TEXT)
    c.setFont(CHINESE_FONT, 9)
    c.drawString(MARGIN + 25*mm, y_key - 6*mm, "情绪力的核心不是"控制情绪",而是"在情绪来临时,有能力选择如何回应"。")
    c.drawString(MARGIN + 5*mm, y_key - 13*mm, "四模块学习路径：看清局 -> 读懂情绪 -> 主角归位 -> 转化行动")

    draw_footer(c, 2, 2, back=True)

    c.save()
    print(f"Created: {filename}")


# ============================================================
# PDF 2: 场景卡
# ============================================================
def create_card_02():
    """02-场景卡"""
    filename = os.path.join(OUTPUT_DIR, "02-场景卡.pdf")
    c = canvas.Canvas(filename, pagesize=landscape(A4))

    # ========== 第1页：正面 ==========
    draw_header(c, "我的场景卡", "VUCA时代的4个典型职场场景", 1)

    y_start = PAGE_HEIGHT - 55*mm

    # 说明
    c.setFillColor(COLOR_LIGHT_BG)
    c.roundRect(MARGIN, y_start - 20*mm, PAGE_WIDTH - 2*MARGIN, 20*mm, 3*mm, fill=1, stroke=0)
    c.setFillColor(COLOR_SECONDARY)
    c.setFont(CHINESE_FONT_BOLD, 9)
    c.drawString(MARGIN + 5*mm, y_start - 8*mm, "什么是VUCA?")
    c.setFillColor(COLOR_TEXT)
    c.setFont(CHINESE_FONT, 9)
    c.drawString(MARGIN + 35*mm, y_start - 8*mm, "V=易变性  U=不确定性  C=复杂性  A=模糊性")
    c.setFillColor(COLOR_ACCENT)
    c.setFont(CHINESE_FONT, 8)
    c.drawString(MARGIN + 5*mm, y_start - 16*mm, "在VUCA时代,过去的经验不再可靠,稳定的结构不再存在,情绪力成为职场生存的底层能力。")

    # 4个场景卡片
    scenarios = [
        {
            "num": "场景1",
            "title": "团队目标突然改变",
            "desc": "你花了2周准备的项目方案,上级突然宣布方向调整,所有工作需要重来。",
            "emotion": "挫败、愤怒、焦虑",
            "challenge": "如何在失落中快速调整状态,继续投入新任务?"
        },
        {
            "num": "场景2",
            "title": "跨部门协作受阻",
            "desc": "你需要其他部门的配合,但对方优先级不同,沟通多次无果,进度卡住。",
            "emotion": "无奈、烦躁、自我怀疑",
            "challenge": "如何在不被认可的情况下,找到推进的突破口?"
        },
        {
            "num": "场景3",
            "title": "负面反馈突然来袭",
            "desc": "客户或上级给了你意料之外的差评,方式也很直接,你感到被否定。",
            "emotion": "委屈、羞耻、防御",
            "challenge": "如何在情绪风暴中保持清醒,分辨事实和感受?"
        },
        {
            "num": "场景4",
            "title": "职业发展陷入迷茫",
            "desc": "行业变化快,你现在做的努力,不知道未来还有没有价值。",
            "emotion": "迷茫、焦虑、倦怠",
            "challenge": "如何在不确定中,找到自己可以掌控的部分?"
        }
    ]

    card_width = (PAGE_WIDTH - 2*MARGIN - 15*mm) / 2
    card_height = 55*mm
    y_card = y_start - 30*mm

    for i, sc in enumerate(scenarios):
        col = i % 2
        row = i // 2
        x_card = MARGIN + col * (card_width + 10*mm)
        y_card_pos = y_card - row * (card_height + 8*mm)

        # 卡片背景
        c.setFillColor(colors.white)
        c.roundRect(x_card, y_card_pos - card_height, card_width, card_height, 3*mm, fill=1, stroke=0)

        # 卡片边框
        c.setStrokeColor(COLOR_SECONDARY)
        c.setLineWidth(1)
        c.roundRect(x_card, y_card_pos - card_height, card_width, card_height, 3*mm, fill=0, stroke=1)

        # 左侧色条
        c.setFillColor(COLOR_ACCENT if i % 2 == 0 else COLOR_SECONDARY)
        c.roundRect(x_card, y_card_pos - card_height, 3*mm, card_height, 1*mm, fill=1, stroke=0)

        # 场景标签
        c.setFillColor(COLOR_PRIMARY)
        c.setFont(CHINESE_FONT_BOLD, 9)
        c.drawString(x_card + 8*mm, y_card_pos - 8*mm, sc["num"])

        # 标题
        c.setFillColor(COLOR_TEXT)
        c.setFont(CHINESE_FONT_BOLD, 11)
        c.drawString(x_card + 8*mm, y_card_pos - 16*mm, sc["title"])

        # 描述
        c.setFillColor(COLOR_TEXT)
        c.setFont(CHINESE_FONT, 8)
        # 换行处理
        desc_words = sc["desc"]
        if len(desc_words) > 35:
            c.drawString(x_card + 8*mm, y_card_pos - 25*mm, desc_words[:35])
            c.drawString(x_card + 8*mm, y_card_pos - 32*mm, desc_words[35:])
            desc_y = y_card_pos - 39*mm
        else:
            c.drawString(x_card + 8*mm, y_card_pos - 25*mm, desc_words)
            desc_y = y_card_pos - 32*mm

        # 情绪标签
        c.setFillColor(COLOR_WARNING)
        c.setFont(CHINESE_FONT, 8)
        c.drawString(x_card + 8*mm, desc_y, f"常见情绪：{sc['emotion']}")

        # 挑战
        c.setFillColor(COLOR_SECONDARY)
        c.setFont(CHINESE_FONT, 8)
        challenge_words = sc["challenge"]
        if len(challenge_words) > 38:
            c.drawString(x_card + 8*mm, desc_y - 8*mm, challenge_words[:38])
            c.drawString(x_card + 8*mm, desc_y - 15*mm, challenge_words[38:])
        else:
            c.drawString(x_card + 8*mm, desc_y - 8*mm, challenge_words)

    # 底部提示
    y_tip = 18*mm
    c.setFillColor(COLOR_LIGHT_BG)
    c.roundRect(MARGIN, y_tip - 10*mm, PAGE_WIDTH - 2*MARGIN, 12*mm, 3*mm, fill=1, stroke=0)
    c.setFillColor(COLOR_ACCENT)
    c.setFont(CHINESE_FONT_BOLD, 9)
    c.drawString(MARGIN + 5*mm, y_tip - 6*mm, "学习目标：")
    c.setFillColor(COLOR_TEXT)
    c.setFont(CHINESE_FONT, 9)
    c.drawString(MARGIN + 25*mm, y_tip - 6*mm, "通过这4个场景,理解VUCA时代情绪挑战的本质,学会从"被动反应"到"主动选择"的转变。")

    draw_footer(c, 1, 2)

    # ========== 第2页：背面 - 学习路径 ==========
    c.showPage()
    draw_header(c, "场景卡 · 学习路径", "四模块如何对应四个场景", 2)

    y_start = PAGE_HEIGHT - 55*mm

    # 路径说明
    c.setFillColor(COLOR_LIGHT_BG)
    c.roundRect(MARGIN, y_start - 18*mm, PAGE_WIDTH - 2*MARGIN, 18*mm, 3*mm, fill=1, stroke=0)
    c.setFillColor(COLOR_SECONDARY)
    c.setFont(CHINESE_FONT_BOLD, 9)
    c.drawString(MARGIN + 5*mm, y_start - 8*mm, "学习路径说明：")
    c.setFillColor(COLOR_TEXT)
    c.setFont(CHINESE_FONT, 9)
    c.drawString(MARGIN + 35*mm, y_start - 8*mm, "每个模块对应一个核心能力,循序渐进,从认知到行动。")
    c.setFillColor(COLOR_ACCENT)
    c.setFont(CHINESE_FONT, 8)
    c.drawString(MARGIN + 5*mm, y_start - 16*mm, "提示：翻到正面,用荧光笔标注你最常遇到的场景类型,这将成为你学习这堂课的最佳切入点。")

    # 四模块路径
    modules = [
        ("模块一", "看清局", "易变性 / 不确定性", "识别外部环境的变化模式,理解为什么"稳定"变成了奢侈品"),
        ("模块二", "读懂情绪", "复杂性 / 模糊性", "区分情绪的来源--哪些是事实,哪些是想法,哪些是创伤反应"),
        ("模块三", "主角归位", "选择权", "从"都是别人的错"到"我能做什么",从被动承受者变为主动选择者"),
        ("模块四", "转化行动", "落地方法", "用WSDF叙事改写 + 觉察-接纳-探索-行动,把情绪转化为有效行动")
    ]

    module_colors = [COLOR_PRIMARY, COLOR_SECONDARY, colors.HexColor('#16a085'), colors.HexColor('#8e44ad')]

    y_mod = y_start - 30*mm
    mod_width = (PAGE_WIDTH - 2*MARGIN - 15*mm) / 2
    mod_height = 38*mm

    for i, (m_num, m_title, m_focus, m_desc) in enumerate(modules):
        col = i % 2
        row = i // 2
        x_mod = MARGIN + col * (mod_width + 10*mm)
        y_mod_pos = y_mod - row * (mod_height + 10*mm)

        # 模块背景
        c.setFillColor(colors.white)
        c.roundRect(x_mod, y_mod_pos - mod_height, mod_width, mod_height, 3*mm, fill=1, stroke=0)

        # 顶部色条
        c.setFillColor(module_colors[i])
        c.roundRect(x_mod, y_mod_pos - 10*mm, mod_width, 10*mm, 3*mm, fill=1, stroke=0)
        c.rect(x_mod, y_mod_pos - 10*mm, mod_width, 5*mm, fill=1, stroke=0)  # 方角底部

        # 模块号和标题
        c.setFillColor(colors.white)
        c.setFont(CHINESE_FONT_BOLD, 11)
        c.drawString(x_mod + 5*mm, y_mod_pos - 7*mm, f"{m_num}：{m_title}")

        # 聚焦标签
        c.setFillColor(COLOR_ACCENT)
        c.roundRect(x_mod + mod_width - 40*mm, y_mod_pos - 7*mm, 35*mm, 6*mm, 2*mm, fill=1, stroke=0)
        c.setFillColor(COLOR_PRIMARY)
        c.setFont(CHINESE_FONT_BOLD, 7)
        c.drawCentredString(x_mod + mod_width - 22.5*mm, y_mod_pos - 4.5*mm, m_focus)

        # 描述
        c.setFillColor(COLOR_TEXT)
        c.setFont(CHINESE_FONT, 8.5)
        words = m_desc
        if len(words) > 38:
            c.drawString(x_mod + 5*mm, y_mod_pos - 20*mm, words[:38])
            c.drawString(x_mod + 5*mm, y_mod_pos - 28*mm, words[38:])
        else:
            c.drawString(x_mod + 5*mm, y_mod_pos - 20*mm, words)

        # 箭头（如果是前3个模块）
        if i < 3:
            arrow_x = x_mod + mod_width / 2
            arrow_y = y_mod_pos - mod_height - 3*mm
            c.setFillColor(module_colors[i+1])
            c.setFont(CHINESE_FONT_BOLD, 14)
            c.drawCentredString(arrow_x, arrow_y, "DOWN")

    # 底部总结
    y_sum = 20*mm
    c.setFillColor(COLOR_LIGHT_BG)
    c.roundRect(MARGIN, y_sum - 14*mm, PAGE_WIDTH - 2*MARGIN, 16*mm, 3*mm, fill=1, stroke=0)
    c.setFillColor(COLOR_ACCENT)
    c.setFont(CHINESE_FONT_BOLD, 9)
    c.drawString(MARGIN + 5*mm, y_sum - 7*mm, "学习口诀：")
    c.setFillColor(COLOR_TEXT)
    c.setFont(CHINESE_FONT, 9)
    c.drawString(MARGIN + 25*mm, y_sum - 7*mm, ""看清局,不慌张；读懂情绪,不压抑；主角归位,不抱怨；转化行动,不拖延。"")

    draw_footer(c, 2, 2, back=True)

    c.save()
    print(f"Created: {filename}")


# ============================================================
# PDF 3: 情绪信号识别卡
# ============================================================
def create_card_03():
    """03-情绪信号识别卡"""
    filename = os.path.join(OUTPUT_DIR, "03-情绪信号识别卡.pdf")
    c = canvas.Canvas(filename, pagesize=landscape(A4))

    # ========== 第1页：正面 ==========
    draw_header(c, "情绪信号识别卡", "身体 · 行为 · 思维：三种信号读懂情绪", 1)

    y_start = PAGE_HEIGHT - 55*mm

    # 说明
    c.setFillColor(COLOR_LIGHT_BG)
    c.roundRect(MARGIN, y_start - 18*mm, PAGE_WIDTH - 2*MARGIN, 18*mm, 3*mm, fill=1, stroke=0)
    c.setFillColor(COLOR_SECONDARY)
    c.setFont(CHINESE_FONT_BOLD, 9)
    c.drawString(MARGIN + 5*mm, y_start - 8*mm, "为什么要识别信号?")
    c.setFillColor(COLOR_TEXT)
    c.setFont(CHINESE_FONT, 9)
    c.drawString(MARGIN + 40*mm, y_start - 8*mm, "情绪来临时,身体、行为、思维会同时发出信号。识别得越早,干预的空间越大。")
    c.setFillColor(COLOR_ACCENT)
    c.setFont(CHINESE_FONT, 8)
    c.drawString(MARGIN + 5*mm, y_start - 16*mm, "提示：在每个信号旁边的□打钩,这是你情绪觉察的开始。")

    # 三列信号类型
    signal_types = [
        {
            "title": "身体信号",
            "color": colors.HexColor('#e74c3c'),
            "signals": ["胸口发紧或胸闷", "肩膀僵硬、脖子发酸", "胃部发紧或食欲改变", "手心出汗、心跳加速", "呼吸变浅变快", "头痛或偏头痛", "身体发抖或颤抖", "声音发紧或发颤"]
        },
        {
            "title": "行为信号",
            "color": colors.HexColor('#f39c12'),
            "signals": ["说话变快或变慢", "回避眼神接触", "开始拖延或拖延", "说话打断别人", "摔东西或用力关抽屉", "开始囤积东西", "过度使用手机/社交媒体", "突然沉默或话变少"]
        },
        {
            "title": "思维信号",
            "color": colors.HexColor('#3498db'),
            "signals": ["灾难化：最坏的情况必然发生", "非黑即白：只有对或错", "读心术：别人一定这么想", "以偏概全：从来/总是/永远", "情绪推理：感觉是这样就是事实", "贬低积极面", "过度责任化：都是我的错", "应该/必须陈述"]
        }
    ]

    col_width = (PAGE_WIDTH - 2*MARGIN - 10*mm) / 3
    col_height = 75*mm
    y_col = y_start - 28*mm

    for i, sig_type in enumerate(signal_types):
        x_col = MARGIN + i * (col_width + 5*mm)

        # 列背景
        c.setFillColor(colors.white)
        c.roundRect(x_col, y_col - col_height, col_width, col_height, 3*mm, fill=1, stroke=0)

        # 列顶部色条
        c.setFillColor(sig_type["color"])
        c.roundRect(x_col, y_col - 10*mm, col_width, 10*mm, 3*mm, fill=1, stroke=0)
        c.rect(x_col, y_col - 10*mm, col_width, 5*mm, fill=1, stroke=0)

        # 标题
        c.setFillColor(colors.white)
        c.setFont(CHINESE_FONT_BOLD, 11)
        c.drawCentredString(x_col + col_width/2, y_col - 7*mm, sig_type["title"])

        # 信号列表
        c.setFillColor(sig_type["color"])
        c.setFont(CHINESE_FONT_BOLD, 8)
        c.drawString(x_col + 5*mm, y_col - 18*mm, "信号清单：")

        signal_y = y_col - 26*mm
        for j, signal in enumerate(sig_type["signals"]):
            # 复选框
            c.setStrokeColor(sig_type["color"])
            c.setLineWidth(0.5)
            c.rect(x_col + 5*mm, signal_y + 1*mm, 3*mm, 3*mm, fill=0, stroke=1)

            # 信号文字
            c.setFillColor(COLOR_TEXT)
            c.setFont(CHINESE_FONT, 8)
            c.drawString(x_col + 10*mm, signal_y, signal)

            signal_y -= 8*mm

    # 底部关键认知
    y_key = 18*mm
    c.setFillColor(COLOR_LIGHT_BG)
    c.roundRect(MARGIN, y_key - 12*mm, PAGE_WIDTH - 2*MARGIN, 14*mm, 3*mm, fill=1, stroke=0)
    c.setFillColor(COLOR_ACCENT)
    c.setFont(CHINESE_FONT_BOLD, 9)
    c.drawString(MARGIN + 5*mm, y_key - 6*mm, "关键认知：")
    c.setFillColor(COLOR_TEXT)
    c.setFont(CHINESE_FONT, 9)
    c.drawString(MARGIN + 25*mm, y_key - 6*mm, "身体信号是最早出现的,通常比情绪感受早5-10秒。养成"扫描身体"的习惯,能大大提前觉察时机。")

    draw_footer(c, 1, 2)

    # ========== 第2页：背面 - 信号日记 ==========
    c.showPage()
    draw_header(c, "情绪信号识别卡 · 信号日记", "记录你的情绪信号模式", 2)

    y_start = PAGE_HEIGHT - 55*mm

    # 使用说明
    c.setFillColor(COLOR_LIGHT_BG)
    c.roundRect(MARGIN, y_start - 20*mm, PAGE_WIDTH - 2*MARGIN, 20*mm, 3*mm, fill=1, stroke=0)
    c.setFillColor(COLOR_SECONDARY)
    c.setFont(CHINESE_FONT_BOLD, 9)
    c.drawString(MARGIN + 5*mm, y_start - 8*mm, "怎么用这张卡：")
    c.setFillColor(COLOR_TEXT)
    c.setFont(CHINESE_FONT, 9)
    c.drawString(MARGIN + 30*mm, y_start - 8*mm, "当情绪来临时,先停下来,在三种信号中勾选你观察到的。长期记录能发现你的"情绪指纹"。")
    c.setFillColor(COLOR_ACCENT)
    c.setFont(CHINESE_FONT, 8)
    c.drawString(MARGIN + 5*mm, y_start - 16*mm, "自检：你最常出现的信号是哪种?身体/行为/思维?这通常指向你未解决的某个核心议题。")

    # 日记记录表格
    y_table = y_start - 30*mm

    # 表头
    c.setFillColor(COLOR_HEADER_BG)
    c.rect(MARGIN, y_table, PAGE_WIDTH - 2*MARGIN, 10*mm, fill=1, stroke=0)
    c.setStrokeColor(COLOR_BORDER)
    c.setLineWidth(0.5)
    c.rect(MARGIN, y_table, PAGE_WIDTH - 2*MARGIN, 10*mm, fill=0, stroke=1)

    headers = ["时间", "情境", "身体信号", "行为信号", "思维信号", "情绪强度\n(1-10)", "我的应对"]
    col_widths = [18*mm, 45*mm, 40*mm, 40*mm, 50*mm, 20*mm, 50*mm]
    x_col = MARGIN + 3*mm
    for h, w in zip(headers, col_widths):
        c.setFillColor(COLOR_PRIMARY)
        c.setFont(CHINESE_FONT_BOLD, 8)
        lines = h.split('\n')
        if len(lines) > 1:
            c.drawCentredString(x_col + w/2, y_table + 4*mm, lines[0])
            c.drawCentredString(x_col + w/2, y_table + 1*mm, lines[1])
        else:
            c.drawCentredString(x_col + w/2, y_table + 3*mm, h)
        x_col += w

    # 表格行
    row_height = 14*mm
    y_row = y_table
    for i in range(7):
        y_row -= row_height
        if i % 2 == 1:
            c.setFillColor(colors.HexColor('#f8f9fa'))
            c.rect(MARGIN, y_row, PAGE_WIDTH - 2*MARGIN, row_height, fill=1, stroke=0)

        c.setStrokeColor(COLOR_BORDER)
        c.setLineWidth(0.3)
        c.rect(MARGIN, y_row, PAGE_WIDTH - 2*MARGIN, row_height, fill=0, stroke=1)

    # 底部提示
    y_tip = 20*mm
    c.setFillColor(COLOR_LIGHT_BG)
    c.roundRect(MARGIN, y_tip - 12*mm, PAGE_WIDTH - 2*MARGIN, 14*mm, 3*mm, fill=1, stroke=0)
    c.setFillColor(COLOR_ACCENT)
    c.setFont(CHINESE_FONT_BOLD, 9)
    c.drawString(MARGIN + 5*mm, y_tip - 6*mm, "觉察练习：")
    c.setFillColor(COLOR_TEXT)
    c.setFont(CHINESE_FONT, 9)
    c.drawString(MARGIN + 25*mm, y_tip - 6*mm, "每天至少记录1次,哪怕是小小的烦躁。持续21天,你会看到自己的"情绪地图"。")

    draw_footer(c, 2, 2, back=True)

    c.save()
    print(f"Created: {filename}")


# ============================================================
# PDF 4: 主角心态决策卡
# ============================================================
def create_card_04():
    """04-主角心态决策卡"""
    filename = os.path.join(OUTPUT_DIR, "04-主角心态决策卡.pdf")
    c = canvas.Canvas(filename, pagesize=landscape(A4))

    # ========== 第1页：正面 ==========
    draw_header(c, "主角心态决策卡", "配角心态 vs 主角心态：你现在是哪一个?", 1)

    y_start = PAGE_HEIGHT - 55*mm

    # 说明
    c.setFillColor(COLOR_LIGHT_BG)
    c.roundRect(MARGIN, y_start - 18*mm, PAGE_WIDTH - 2*MARGIN, 18*mm, 3*mm, fill=1, stroke=0)
    c.setFillColor(COLOR_SECONDARY)
    c.setFont(CHINESE_FONT_BOLD, 9)
    c.drawString(MARGIN + 5*mm, y_start - 8*mm, "什么是主角心态?")
    c.setFillColor(COLOR_TEXT)
    c.setFont(CHINESE_FONT, 9)
    c.drawString(MARGIN + 40*mm, y_start - 8*mm, "主角心态 = "这件事我可以做什么",配角心态 = "都是别人的错/没办法"")
    c.setFillColor(COLOR_ACCENT)
    c.setFont(CHINESE_FONT, 8)
    c.drawString(MARGIN + 5*mm, y_start - 16*mm, "提示：先判断你现在是哪种心态,再学习如何切换。")

    # 对照表
    comparisons = [
        ("遇到困难时", "抱怨：为什么总是不顺利?", "面对：这件事我可以做什么?"),
        ("别人批评我", "防御：对方不了解情况", "好奇：他的反馈能帮我改进什么?"),
        ("任务超出能力", "回避：这个不是我负责", "承担：我能从哪里开始学习?"),
        ("结果不如预期", "推卸：都怪XX不配合", "复盘：我下次可以调整什么?"),
        ("需要做决定", "拖延：再等等看吧", "行动：先做哪件最重要的事?"),
        ("感到压力", "忽视/压抑/发泄", "觉察：压力在提醒我什么?"),
        ("看到别人成功", "酸葡萄：也就是运气好", "学习：他做对了什么我可以借鉴?"),
        ("面对变化", "抗拒：为什么要变?", "适应：这个变化带来什么机会?"),
    ]

    y_table = y_start - 28*mm

    # 表头
    c.setFillColor(COLOR_HEADER_BG)
    c.rect(MARGIN, y_table, PAGE_WIDTH - 2*MARGIN, 12*mm, fill=1, stroke=0)
    c.setStrokeColor(COLOR_BORDER)
    c.setLineWidth(0.5)
    c.rect(MARGIN, y_table, PAGE_WIDTH - 2*MARGIN, 12*mm, fill=0, stroke=1)

    # 表头内容
    c.setFillColor(COLOR_PRIMARY)
    c.setFont(CHINESE_FONT_BOLD, 10)
    c.drawCentredString(MARGIN + 60*mm, y_table + 4*mm, "情境")
    c.drawCentredString(MARGIN + 145*mm, y_table + 4*mm, "配角心态（❌）")
    c.drawCentredString(PAGE_WIDTH - MARGIN - 75*mm, y_table + 4*mm, "主角心态（OK）")

    # 分隔线
    c.setStrokeColor(COLOR_BORDER)
    c.setLineWidth(0.3)
    c.line(MARGIN + 115*mm, y_table, MARGIN + 115*mm, y_table - 80*mm)
    c.line(PAGE_WIDTH - MARGIN - 115*mm, y_table, PAGE_WIDTH - MARGIN - 115*mm, y_table - 80*mm)

    # 数据行
    row_height = 10*mm
    y_row = y_table

    for i, (situation, supporting, protagonist) in enumerate(comparisons):
        y_row -= row_height
        if i % 2 == 1:
            c.setFillColor(colors.HexColor('#f8f9fa'))
            c.rect(MARGIN, y_row, PAGE_WIDTH - 2*MARGIN, row_height, fill=1, stroke=0)

        # 行边框
        c.setStrokeColor(COLOR_BORDER)
        c.setLineWidth(0.3)
        c.rect(MARGIN, y_row, PAGE_WIDTH - 2*MARGIN, row_height, fill=0, stroke=1)

        # 情境
        c.setFillColor(COLOR_SECONDARY)
        c.setFont(CHINESE_FONT_BOLD, 9)
        c.drawString(MARGIN + 5*mm, y_row + 3*mm, situation)

        # 配角心态
        c.setFillColor(COLOR_WARNING)
        c.setFont(CHINESE_FONT, 9)
        c.drawString(MARGIN + 120*mm, y_row + 3*mm, supporting)

        # 主角心态
        c.setFillColor(COLOR_SUCCESS)
        c.setFont(CHINESE_FONT, 9)
        c.drawString(PAGE_WIDTH - MARGIN - 110*mm, y_row + 3*mm, protagonist)

    # 底部关键认知
    y_key = 18*mm
    c.setFillColor(COLOR_LIGHT_BG)
    c.roundRect(MARGIN, y_key - 12*mm, PAGE_WIDTH - 2*MARGIN, 14*mm, 3*mm, fill=1, stroke=0)
    c.setFillColor(COLOR_ACCENT)
    c.setFont(CHINESE_FONT_BOLD, 9)
    c.drawString(MARGIN + 5*mm, y_key - 6*mm, "切换口诀：")
    c.setFillColor(COLOR_TEXT)
    c.setFont(CHINESE_FONT, 9)
    c.drawString(MARGIN + 25*mm, y_key - 6*mm, ""停-问-选"：停一下,问自己"我可以做什么",选择主角心态回应。")

    draw_footer(c, 1, 2)

    # ========== 第2页：背面 - 决策流程 ==========
    c.showPage()
    draw_header(c, "主角心态决策卡 · 切换流程", "三步切换到主角模式", 2)

    y_start = PAGE_HEIGHT - 55*mm

    # 说明
    c.setFillColor(COLOR_LIGHT_BG)
    c.roundRect(MARGIN, y_start - 20*mm, PAGE_WIDTH - 2*MARGIN, 20*mm, 3*mm, fill=1, stroke=0)
    c.setFillColor(COLOR_SECONDARY)
    c.setFont(CHINESE_FONT_BOLD, 9)
    c.drawString(MARGIN + 5*mm, y_start - 8*mm, "为什么切换很难?")
    c.setFillColor(COLOR_TEXT)
    c.setFont(CHINESE_FONT, 9)
    c.drawString(MARGIN + 40*mm, y_start - 8*mm, "配角心态是长期训练出来的"自动驾驶模式",需要刻意练习才能切换。")
    c.setFillColor(COLOR_ACCENT)
    c.setFont(CHINESE_FONT, 8)
    c.drawString(MARGIN + 5*mm, y_start - 16*mm, "提示：这个三步流程需要每天练习,形成新的自动驾驶模式。")

    # 三步流程
    steps = [
        {
            "num": "第1步",
            "title": "觉察"自动驾驶"",
            "desc": "当情绪来临时,先承认："我现在在用配角心态"",
            "key": "问自己：现在我在抱怨吗?",
            "color": COLOR_WARNING
        },
        {
            "num": "第2步",
            "title": "转问"我可以做什么"",
            "desc": "把"为什么"换成"怎么办",把"都是谁"换成"我能做啥"",
            "key": "问自己：最小的一步是什么?",
            "color": colors.HexColor('#f39c12')
        },
        {
            "num": "第3步",
            "title": "选一件小事立刻做",
            "desc": "不需要完美行动,只需要开始。哪怕只是发一封邮件、打一个电话。",
            "key": "问自己：做完这件事感觉如何?",
            "color": COLOR_SUCCESS
        }
    ]

    step_width = (PAGE_WIDTH - 2*MARGIN - 10*mm) / 3
    step_height = 55*mm
    y_step = y_start - 30*mm

    for i, step in enumerate(steps):
        x_step = MARGIN + i * (step_width + 5*mm)

        # 步骤背景
        c.setFillColor(colors.white)
        c.roundRect(x_step, y_step - step_height, step_width, step_height, 3*mm, fill=1, stroke=0)

        # 左侧色条
        c.setFillColor(step["color"])
        c.roundRect(x_step, y_step - step_height, 4*mm, step_height, 2*mm, fill=1, stroke=0)
        c.rect(x_step, y_step - step_height, 2*mm, step_height, fill=1, stroke=0)

        # 步骤号
        c.setFillColor(step["color"])
        c.setFont(CHINESE_FONT_BOLD, 9)
        c.drawString(x_step + 8*mm, y_step - 10*mm, step["num"])

        # 标题
        c.setFillColor(COLOR_PRIMARY)
        c.setFont(CHINESE_FONT_BOLD, 12)
        c.drawString(x_step + 8*mm, y_step - 19*mm, step["title"])

        # 描述
        c.setFillColor(COLOR_TEXT)
        c.setFont(CHINESE_FONT, 8.5)
        words = step["desc"]
        if len(words) > 28:
            c.drawString(x_step + 8*mm, y_step - 28*mm, words[:28])
            c.drawString(x_step + 8*mm, y_step - 36*mm, words[28:])
            desc_y = y_step - 44*mm
        else:
            c.drawString(x_step + 8*mm, y_step - 28*mm, words)
            desc_y = y_step - 36*mm

        # 关键问题
        c.setFillColor(step["color"])
        c.setFont(CHINESE_FONT_BOLD, 8)
        c.drawString(x_step + 8*mm, desc_y, step["key"])

        # 箭头
        if i < 2:
            arrow_x = x_step + step_width + 1*mm
            arrow_y = y_step - step_height / 2
            c.setFillColor(COLOR_SECONDARY)
            c.setFont(CHINESE_FONT_BOLD, 16)
            c.drawCentredString(arrow_x, arrow_y, "->")

    # 底部关键认知
    y_key = 20*mm
    c.setFillColor(COLOR_LIGHT_BG)
    c.roundRect(MARGIN, y_key - 14*mm, PAGE_WIDTH - 2*MARGIN, 16*mm, 3*mm, fill=1, stroke=0)
    c.setFillColor(COLOR_ACCENT)
    c.setFont(CHINESE_FONT_BOLD, 9)
    c.drawString(MARGIN + 5*mm, y_key - 6*mm, "关键认知：")
    c.setFillColor(COLOR_TEXT)
    c.setFont(CHINESE_FONT, 9)
    c.drawString(MARGIN + 25*mm, y_key - 6*mm, ""主角心态"不是"正能量",而是"对自己负责"。不是否认困难,而是承认困难的同时问自己"我能做什么"。")

    draw_footer(c, 2, 2, back=True)

    c.save()
    print(f"Created: {filename}")


# ============================================================
# PDF 5: 叙事改写工具卡
# ============================================================
def create_card_05():
    """05-叙事改写工具卡"""
    filename = os.path.join(OUTPUT_DIR, "05-叙事改写工具卡.pdf")
    c = canvas.Canvas(filename, pagesize=landscape(A4))

    # ========== 第1页：正面 ==========
    draw_header(c, "叙事改写工具卡", "WSDF框架：把"事故"变成"故事"", 1)

    y_start = PAGE_HEIGHT - 55*mm

    # 说明
    c.setFillColor(COLOR_LIGHT_BG)
    c.roundRect(MARGIN, y_start - 18*mm, PAGE_WIDTH - 2*MARGIN, 18*mm, 3*mm, fill=1, stroke=0)
    c.setFillColor(COLOR_SECONDARY)
    c.setFont(CHINESE_FONT_BOLD, 9)
    c.drawString(MARGIN + 5*mm, y_start - 8*mm, "什么是叙事改写?")
    c.setFillColor(COLOR_TEXT)
    c.setFont(CHINESE_FONT, 9)
    c.drawString(MARGIN + 40*mm, y_start - 8*mm, "同一个事件,讲述的角度不同,情绪效果完全不同。WSDF帮你找到更有力量的叙事角度。")
    c.setFillColor(COLOR_ACCENT)
    c.setFont(CHINESE_FONT, 8)
    c.drawString(MARGIN + 5*mm, y_start - 16*mm, "提示：每一步回答都要写下来,写的过程就是疗愈的过程。")

    # WSDF四步
    wsdf_steps = [
        {
            "letter": "W",
            "title": "What happened",
            "chinese": "发生了什么",
            "desc": "客观描述事实,不带评价。不要写"他故意针对我",而是写"他没有回复我的邮件"。",
            "prompt": "当时具体发生了什么?有哪些可观察的事实?",
            "color": colors.HexColor('#e74c3c')
        },
        {
            "letter": "S",
            "title": "So what",
            "chinese": "这意味着什么",
            "desc": "你的解读和情绪反应。不要写"他看不起我",而是写"我觉得被忽视,这让我感到失落"。",
            "prompt": "这个经历让我感受到什么?我是怎么解读的?",
            "color": colors.HexColor('#f39c12')
        },
        {
            "letter": "D",
            "title": "But what",
            "chinese": "但是,我可以做什么",
            "desc": "转换视角,寻找可能性。不要写"没办法",而是写"我可以主动约一次面对面沟通"。",
            "prompt": "如果从主角视角,我会怎么做?如果是朋友遇到同样的事,我会建议他做什么?",
            "color": colors.HexColor('#3498db')
        },
        {
            "letter": "F",
            "title": "Therefore what",
            "chinese": "所以,我要做什么",
            "desc": "具体的下一步行动。越具体越好,包括时间、地点、方式。",
            "prompt": "我的第一个行动是什么?什么时候开始?在哪里做?",
            "color": colors.HexColor('#27ae60')
        }
    ]

    step_width = (PAGE_WIDTH - 2*MARGIN - 15*mm) / 4
    step_height = 65*mm
    y_step = y_start - 28*mm

    for i, step in enumerate(wsdf_steps):
        x_step = MARGIN + i * (step_width + 5*mm)

        # 步骤背景
        c.setFillColor(colors.white)
        c.roundRect(x_step, y_step - step_height, step_width, step_height, 3*mm, fill=1, stroke=0)

        # 顶部色块
        c.setFillColor(step["color"])
        c.roundRect(x_step, y_step - 15*mm, step_width, 15*mm, 3*mm, fill=1, stroke=0)
        c.rect(x_step, y_step - 15*mm, step_width, 7.5*mm, fill=1, stroke=0)

        # 字母
        c.setFillColor(colors.white)
        c.setFont(CHINESE_FONT_BOLD, 22)
        c.drawCentredString(x_step + step_width/2, y_step - 13*mm, step["letter"])

        # 英文标题
        c.setFillColor(step["color"])
        c.setFont(CHINESE_FONT_BOLD, 9)
        c.drawCentredString(x_step + step_width/2, y_step - 22*mm, step["title"])

        # 中文标题
        c.setFillColor(COLOR_PRIMARY)
        c.setFont(CHINESE_FONT_BOLD, 11)
        c.drawCentredString(x_step + step_width/2, y_step - 29*mm, step["chinese"])

        # 描述
        c.setFillColor(COLOR_TEXT)
        c.setFont(CHINESE_FONT, 7.5)
        words = step["desc"]
        lines = []
        current_line = ""
        for word in words:
            if len(current_line + word) < 30:
                current_line += word
            else:
                lines.append(current_line)
                current_line = word
        if current_line:
            lines.append(current_line)
        desc_y = y_step - 37*mm
        for line in lines[:3]:
            c.drawString(x_step + 3*mm, desc_y, line)
            desc_y -= 7*mm

        # 引导问题
        c.setFillColor(step["color"])
        c.setFont(CHINESE_FONT, 7)
        prompt_words = step["prompt"]
        if len(prompt_words) > 25:
            c.drawString(x_step + 3*mm, desc_y - 3*mm, prompt_words[:25])
            c.drawString(x_step + 3*mm, desc_y - 9*mm, prompt_words[25:])
        else:
            c.drawString(x_step + 3*mm, desc_y - 3*mm, prompt_words)

        # 箭头
        if i < 3:
            arrow_x = x_step + step_width + 1*mm
            arrow_y = y_step - step_height / 2
            c.setFillColor(COLOR_SECONDARY)
            c.setFont(CHINESE_FONT_BOLD, 16)
            c.drawCentredString(arrow_x, arrow_y, "->")

    # 底部关键认知
    y_key = 18*mm
    c.setFillColor(COLOR_LIGHT_BG)
    c.roundRect(MARGIN, y_key - 12*mm, PAGE_WIDTH - 2*MARGIN, 14*mm, 3*mm, fill=1, stroke=0)
    c.setFillColor(COLOR_ACCENT)
    c.setFont(CHINESE_FONT_BOLD, 9)
    c.drawString(MARGIN + 5*mm, y_key - 6*mm, "核心转变：")
    c.setFillColor(COLOR_TEXT)
    c.setFont(CHINESE_FONT, 9)
    c.drawString(MARGIN + 25*mm, y_key - 6*mm, ""But"这一步是从"受害者叙事"到"主角叙事"的关键跳跃--承认现实,但不被现实定义。")

    draw_footer(c, 1, 2)

    # ========== 第2页：背面 - 练习模板 ==========
    c.showPage()
    draw_header(c, "叙事改写工具卡 · 练习模板", "用WSDF改写你的故事", 2)

    y_start = PAGE_HEIGHT - 55*mm

    # 说明
    c.setFillColor(COLOR_LIGHT_BG)
    c.roundRect(MARGIN, y_start - 18*mm, PAGE_WIDTH - 2*MARGIN, 18*mm, 3*mm, fill=1, stroke=0)
    c.setFillColor(COLOR_SECONDARY)
    c.setFont(CHINESE_FONT_BOLD, 9)
    c.drawString(MARGIN + 5*mm, y_start - 8*mm, "练习指引：")
    c.setFillColor(COLOR_TEXT)
    c.setFont(CHINESE_FONT, 9)
    c.drawString(MARGIN + 30*mm, y_start - 8*mm, "找一个最近让你困扰的经历,用下面的模板写下来。写完后对比"Before叙事"和"After叙事"。")
    c.setFillColor(COLOR_ACCENT)
    c.setFont(CHINESE_FONT, 8)
    c.drawString(MARGIN + 5*mm, y_start - 16*mm, "自检：写完之后,感受有什么不同?这个不同,就是叙事改写的力量。")

    # Before/After对比
    col_width = (PAGE_WIDTH - 2*MARGIN - 5*mm) / 2
    col_height = 70*mm
    y_col = y_start - 28*mm

    # Before
    c.setFillColor(colors.HexColor('#fff5f5'))
    c.roundRect(MARGIN, y_col - col_height, col_width, col_height, 3*mm, fill=1, stroke=0)
    c.setStrokeColor(COLOR_WARNING)
    c.setLineWidth(1)
    c.roundRect(MARGIN, y_col - col_height, col_width, col_height, 3*mm, fill=0, stroke=1)

    c.setFillColor(COLOR_WARNING)
    c.setFont(CHINESE_FONT_BOLD, 11)
    c.drawCentredString(MARGIN + col_width/2, y_col - 10*mm, "Before 旧叙事（受害者模式）")

    c.setFillColor(COLOR_TEXT)
    c.setFont(CHINESE_FONT, 8.5)
    before_prompts = [
        "W 发生了什么：",
        "                               ",
        "S 这意味着什么：",
        "                               ",
        "D 但是,我能做什么：无法改变",
        "                               ",
        "F 所以,我要做什么：不知道"
    ]
    by = y_col - 20*mm
    for bp in before_prompts:
        c.drawString(MARGIN + 5*mm, by, bp)
        by -= 8*mm

    # After
    c.setFillColor(colors.HexColor('#f0fff4'))
    c.roundRect(MARGIN + col_width + 5*mm, y_col - col_height, col_width, col_height, 3*mm, fill=1, stroke=0)
    c.setStrokeColor(COLOR_SUCCESS)
    c.setLineWidth(1)
    c.roundRect(MARGIN + col_width + 5*mm, y_col - col_height, col_width, col_height, 3*mm, fill=0, stroke=1)

    c.setFillColor(COLOR_SUCCESS)
    c.setFont(CHINESE_FONT_BOLD, 11)
    c.drawCentredString(MARGIN + col_width + 5*mm + col_width/2, y_col - 10*mm, "After 新叙事（主角模式）")

    c.setFillColor(COLOR_TEXT)
    c.setFont(CHINESE_FONT, 8.5)
    after_prompts = [
        "W 发生了什么：",
        "                               ",
        "S 这意味着什么：（接纳情绪）",
        "                               ",
        "D 但是,我能做什么：",
        "                               ",
        "F 所以,我要做什么：（具体行动）"
    ]
    ay = y_col - 20*mm
    for ap in after_prompts:
        c.drawString(MARGIN + col_width + 10*mm, ay, ap)
        ay -= 8*mm

    # 中间箭头
    arrow_x = MARGIN + col_width + 2.5*mm
    arrow_y = y_col - col_height/2
    c.setFillColor(COLOR_ACCENT)
    c.setFont(CHINESE_FONT_BOLD, 20)
    c.drawCentredString(arrow_x, arrow_y, "->")

    # 底部关键认知
    y_key = 18*mm
    c.setFillColor(COLOR_LIGHT_BG)
    c.roundRect(MARGIN, y_key - 12*mm, PAGE_WIDTH - 2*MARGIN, 14*mm, 3*mm, fill=1, stroke=0)
    c.setFillColor(COLOR_ACCENT)
    c.setFont(CHINESE_FONT_BOLD, 9)
    c.drawString(MARGIN + 5*mm, y_key - 6*mm, "关键认知：")
    c.setFillColor(COLOR_TEXT)
    c.setFont(CHINESE_FONT, 9)
    c.drawString(MARGIN + 25*mm, y_key - 6*mm, "事实不变,但叙事角度变了,情绪就变了。WSDF不是否认事实,而是找到更有力量的叙事。")

    draw_footer(c, 2, 2, back=True)

    c.save()
    print(f"Created: {filename}")


# ============================================================
# PDF 6: 情绪转化行动卡
# ============================================================
def create_card_06():
    """06-情绪转化行动卡"""
    filename = os.path.join(OUTPUT_DIR, "06-情绪转化行动卡.pdf")
    c = canvas.Canvas(filename, pagesize=landscape(A4))

    # ========== 第1页：正面 ==========
    draw_header(c, "情绪转化行动卡", "觉察 -> 接纳 -> 探索 -> 行动", 1)

    y_start = PAGE_HEIGHT - 55*mm

    # 说明
    c.setFillColor(COLOR_LIGHT_BG)
    c.roundRect(MARGIN, y_start - 18*mm, PAGE_WIDTH - 2*MARGIN, 18*mm, 3*mm, fill=1, stroke=0)
    c.setFillColor(COLOR_SECONDARY)
    c.setFont(CHINESE_FONT_BOLD, 9)
    c.drawString(MARGIN + 5*mm, y_start - 8*mm, "为什么要按这个顺序?")
    c.setFillColor(COLOR_TEXT)
    c.setFont(CHINESE_FONT, 9)
    c.drawString(MARGIN + 40*mm, y_start - 8*mm, "跳步骤是情绪处理的常见错误--比如急着"想办法"却没先"接纳情绪",结果压抑了问题。")
    c.setFillColor(COLOR_ACCENT)
    c.setFont(CHINESE_FONT, 8)
    c.drawString(MARGIN + 5*mm, y_start - 16*mm, "提示：每个步骤都有具体方法,不要跳过。")

    # 四步流程
    steps = [
        {
            "step": "第一步",
            "title": "觉察",
            "english": "Awareness",
            "desc": "注意到情绪的出现,不评判,不干预",
            "methods": ["身体扫描：从头到脚过一遍", "命名情绪：给情绪贴标签", "记录触发情境"],
            "key": "问：我现在感受到什么情绪?",
            "color": colors.HexColor('#3498db')
        },
        {
            "step": "第二步",
            "title": "接纳",
            "english": "Acceptance",
            "desc": "允许情绪存在,不否认、不压抑、不逃避",
            "methods": ["对情绪说"谢谢你提醒我"", "不批判自己的情绪反应", "给情绪留出空间"],
            "key": "问：这种情绪在告诉我什么?",
            "color": colors.HexColor('#9b59b6')
        },
        {
            "step": "第三步",
            "title": "探索",
            "english": "Exploration",
            "desc": "了解情绪背后的需求和未被满足的期望",
            "methods": ["情绪背后是什么需求?", "这个需求合理吗?", "可以用什么方式满足?"],
            "key": "问：我真正需要的是什么?",
            "color": colors.HexColor('#f39c12')
        },
        {
            "step": "第四步",
            "title": "行动",
            "english": "Action",
            "desc": "基于新的认知,选择具体的行动并执行",
            "methods": ["WSDF叙事改写", "制定最小行动步骤", "设定执行时间和地点"],
            "key": "问：我的第一小步是什么?",
            "color": colors.HexColor('#27ae60')
        }
    ]

    step_width = (PAGE_WIDTH - 2*MARGIN - 15*mm) / 4
    step_height = 65*mm
    y_step = y_start - 28*mm

    for i, step in enumerate(steps):
        x_step = MARGIN + i * (step_width + 5*mm)

        # 步骤背景
        c.setFillColor(colors.white)
        c.roundRect(x_step, y_step - step_height, step_width, step_height, 3*mm, fill=1, stroke=0)

        # 顶部色块
        c.setFillColor(step["color"])
        c.roundRect(x_step, y_step - 15*mm, step_width, 15*mm, 3*mm, fill=1, stroke=0)
        c.rect(x_step, y_step - 15*mm, step_width, 7.5*mm, fill=1, stroke=0)

        # 步骤号
        c.setFillColor(colors.white)
        c.setFont(CHINESE_FONT_BOLD, 8)
        c.drawCentredString(x_step + step_width/2, y_step - 6*mm, step["step"])

        # 标题
        c.setFillColor(colors.white)
        c.setFont(CHINESE_FONT_BOLD, 13)
        c.drawCentredString(x_step + step_width/2, y_step - 13*mm, step["title"])

        # 英文
        c.setFillColor(step["color"])
        c.setFont(CHINESE_FONT, 8)
        c.drawCentredString(x_step + step_width/2, y_step - 21*mm, step["english"])

        # 描述
        c.setFillColor(COLOR_TEXT)
        c.setFont(CHINESE_FONT, 7.5)
        words = step["desc"]
        if len(words) > 25:
            c.drawString(x_step + 3*mm, y_step - 28*mm, words[:25])
            c.drawString(x_step + 3*mm, y_step - 35*mm, words[25:])
            methods_y = y_step - 43*mm
        else:
            c.drawString(x_step + 3*mm, y_step - 28*mm, words)
            methods_y = y_step - 35*mm

        # 方法
        c.setFillColor(step["color"])
        c.setFont(CHINESE_FONT_BOLD, 7)
        c.drawString(x_step + 3*mm, methods_y, "方法：")
        methods_y -= 7*mm
        c.setFillColor(COLOR_TEXT)
        c.setFont(CHINESE_FONT, 7)
        for method in step["methods"]:
            if len(method) > 20:
                c.drawString(x_step + 3*mm, methods_y, method[:20])
                methods_y -= 6*mm
                c.drawString(x_step + 3*mm, methods_y, method[20:])
                methods_y -= 6*mm
            else:
                c.drawString(x_step + 3*mm, methods_y, method)
                methods_y -= 6*mm

        # 关键问题
        c.setFillColor(step["color"])
        c.setFont(CHINESE_FONT, 7)
        key_words = step["key"]
        if len(key_words) > 22:
            c.drawString(x_step + 3*mm, methods_y - 2*mm, key_words[:22])
            c.drawString(x_step + 3*mm, methods_y - 8*mm, key_words[22:])
        else:
            c.drawString(x_step + 3*mm, methods_y - 2*mm, key_words)

        # 箭头
        if i < 3:
            arrow_x = x_step + step_width + 1*mm
            arrow_y = y_step - step_height / 2
            c.setFillColor(COLOR_SECONDARY)
            c.setFont(CHINESE_FONT_BOLD, 16)
            c.drawCentredString(arrow_x, arrow_y, "->")

    # 底部关键认知
    y_key = 18*mm
    c.setFillColor(COLOR_LIGHT_BG)
    c.roundRect(MARGIN, y_key - 12*mm, PAGE_WIDTH - 2*MARGIN, 14*mm, 3*mm, fill=1, stroke=0)
    c.setFillColor(COLOR_ACCENT)
    c.setFont(CHINESE_FONT_BOLD, 9)
    c.drawString(MARGIN + 5*mm, y_key - 6*mm, "常见错误：")
    c.setFillColor(COLOR_TEXT)
    c.setFont(CHINESE_FONT, 9)
    c.drawString(MARGIN + 25*mm, y_key - 6*mm, ""想开点"没用,是因为跳过了觉察和接纳。真正有效的是：先承认情绪存在,再探索意义,最后转化行动。")

    draw_footer(c, 1, 2)

    # ========== 第2页：背面 - 应用场景 ==========
    c.showPage()
    draw_header(c, "情绪转化行动卡 · 应用场景", "不同情绪的不同处理方式", 2)

    y_start = PAGE_HEIGHT - 55*mm

    # 说明
    c.setFillColor(COLOR_LIGHT_BG)
    c.roundRect(MARGIN, y_start - 18*mm, PAGE_WIDTH - 2*MARGIN, 18*mm, 3*mm, fill=1, stroke=0)
    c.setFillColor(COLOR_SECONDARY)
    c.setFont(CHINESE_FONT_BOLD, 9)
    c.drawString(MARGIN + 5*mm, y_start - 8*mm, "情绪类型不同,处理的侧重点不同：")
    c.setFillColor(COLOR_TEXT)
    c.setFont(CHINESE_FONT, 9)
    c.drawString(MARGIN + 60*mm, y_start - 8*mm, "高能量情绪（愤怒、焦虑）-> 需要先疏导再转化；低能量情绪（沮丧、失落）-> 需要先接纳再赋能。")
    c.setFillColor(COLOR_ACCENT)
    c.setFont(CHINESE_FONT, 8)
    c.drawString(MARGIN + 5*mm, y_start - 16*mm, "提示：根据自己的情绪状态,选择合适的起始步骤。")

    # 情绪类型应用表
    emotion_types = [
        {
            "emotion": "焦虑",
            "type": "高能量",
            "focus": "觉察 + 身体调节",
            "action": "深呼吸（4-7-8呼吸法）；把担忧写下来,区分"事实"和"想象""
        },
        {
            "emotion": "愤怒",
            "type": "高能量",
            "focus": "接纳 + 探索需求",
            "action": "离开现场；等平静后问"我哪个需求没有被满足?""
        },
        {
            "emotion": "沮丧",
            "type": "低能量",
            "focus": "接纳 + 小的成功体验",
            "action": "不要强迫自己"振作"；做一件5分钟内能完成的小事"
        },
        {
            "emotion": "恐惧",
            "type": "高能量",
            "focus": "觉察 + 认知重评",
            "action": "问自己"最坏的情况是什么?我能承受吗?我能做什么准备?""
        },
        {
            "emotion": "羞耻",
            "type": "低能量",
            "focus": "接纳 + 重构叙事",
            "action": "区分"行为"和"人格"；用WSDF改写"我做了什么"到"我学到了什么""
        },
        {
            "emotion": "愧疚",
            "type": "低能量",
            "focus": "接纳 + 修复行动",
            "action": "区分"过度愧疚"和"有效愧疚"；问"我能做什么来修复?""
        }
    ]

    y_table = y_start - 28*mm

    # 表头
    c.setFillColor(COLOR_HEADER_BG)
    c.rect(MARGIN, y_table, PAGE_WIDTH - 2*MARGIN, 10*mm, fill=1, stroke=0)
    c.setStrokeColor(COLOR_BORDER)
    c.setLineWidth(0.5)
    c.rect(MARGIN, y_table, PAGE_WIDTH - 2*MARGIN, 10*mm, fill=0, stroke=1)

    col_widths = [25*mm, 20*mm, 40*mm, 150*mm]
    x_col = MARGIN + 3*mm
    headers = ["情绪", "类型", "处理侧重", "具体行动"]
    for h, w in zip(headers, col_widths):
        c.setFillColor(COLOR_PRIMARY)
        c.setFont(CHINESE_FONT_BOLD, 9)
        c.drawCentredString(x_col + w/2, y_table + 3*mm, h)
        x_col += w

    # 表格行
    row_height = 14*mm
    y_row = y_table

    for i, emo in enumerate(emotion_types):
        y_row -= row_height
        if i % 2 == 1:
            c.setFillColor(colors.HexColor('#f8f9fa'))
            c.rect(MARGIN, y_row, PAGE_WIDTH - 2*MARGIN, row_height, fill=1, stroke=0)

        c.setStrokeColor(COLOR_BORDER)
        c.setLineWidth(0.3)
        c.rect(MARGIN, y_row, PAGE_WIDTH - 2*MARGIN, row_height, fill=0, stroke=1)

        # 分隔线
        c.line(MARGIN + 25*mm, y_row, MARGIN + 25*mm, y_row + row_height)
        c.line(MARGIN + 45*mm, y_row, MARGIN + 45*mm, y_row + row_height)
        c.line(MARGIN + 85*mm, y_row, MARGIN + 85*mm, y_row + row_height)

        # 情绪
        c.setFillColor(COLOR_WARNING if emo["type"] == "高能量" else COLOR_SECONDARY)
        c.setFont(CHINESE_FONT_BOLD, 9)
        c.drawCentredString(MARGIN + 12.5*mm, y_row + 4*mm, emo["emotion"])

        # 类型
        c.setFillColor(emo["type"] == "高能量" and COLOR_WARNING or COLOR_SECONDARY)
        c.setFont(CHINESE_FONT, 8)
        c.drawCentredString(MARGIN + 35*mm, y_row + 4*mm, emo["type"])

        # 侧重
        c.setFillColor(COLOR_TEXT)
        c.setFont(CHINESE_FONT, 8)
        c.drawCentredString(MARGIN + 65*mm, y_row + 4*mm, emo["focus"])

        # 行动
        c.setFillColor(COLOR_TEXT)
        c.setFont(CHINESE_FONT, 8)
        action_words = emo["action"]
        if len(action_words) > 65:
            c.drawString(MARGIN + 90*mm, y_row + 7*mm, action_words[:65])
            c.drawString(MARGIN + 90*mm, y_row + 1*mm, action_words[65:])
        else:
            c.drawString(MARGIN + 90*mm, y_row + 4*mm, action_words)

    # 底部
    y_tip = 18*mm
    c.setFillColor(COLOR_LIGHT_BG)
    c.roundRect(MARGIN, y_tip - 12*mm, PAGE_WIDTH - 2*MARGIN, 14*mm, 3*mm, fill=1, stroke=0)
    c.setFillColor(COLOR_ACCENT)
    c.setFont(CHINESE_FONT_BOLD, 9)
    c.drawString(MARGIN + 5*mm, y_tip - 6*mm, "记住：")
    c.setFillColor(COLOR_TEXT)
    c.setFont(CHINESE_FONT, 9)
    c.drawString(MARGIN + 18*mm, y_tip - 6*mm, "没有"坏的"情绪,只有"不合时宜"的情绪和"有效使用"的情绪。")

    draw_footer(c, 2, 2, back=True)

    c.save()
    print(f"Created: {filename}")


# ============================================================
# PDF 7: 日常练习追踪卡
# ============================================================
def create_card_07():
    """07-日常练习追踪卡"""
    filename = os.path.join(OUTPUT_DIR, "07-日常练习追踪卡.pdf")
    c = canvas.Canvas(filename, pagesize=landscape(A4))

    # ========== 第1页：正面 - 追踪表 ==========
    draw_header(c, "日常练习追踪卡", "21天习惯追踪表", 1)

    y_start = PAGE_HEIGHT - 55*mm

    # 说明
    c.setFillColor(COLOR_LIGHT_BG)
    c.roundRect(MARGIN, y_start - 22*mm, PAGE_WIDTH - 2*MARGIN, 22*mm, 3*mm, fill=1, stroke=0)
    c.setFillColor(COLOR_SECONDARY)
    c.setFont(CHINESE_FONT_BOLD, 9)
    c.drawString(MARGIN + 5*mm, y_start - 8*mm, "21天练习说明：")
    c.setFillColor(COLOR_TEXT)
    c.setFont(CHINESE_FONT, 9)
    c.drawString(MARGIN + 35*mm, y_start - 8*mm, "每天选择一个练习,完成后打勾。一周后回顾一次,找到最适合自己的练习方式。")
    c.setFillColor(COLOR_ACCENT)
    c.setFont(CHINESE_FONT, 8)
    c.drawString(MARGIN + 5*mm, y_start - 16*mm, "每天练习1-2个即可,不需要全部完成。关键是持续,哪怕每天只花5分钟。")
    c.setFillColor(COLOR_SECONDARY)
    c.setFont(CHINESE_FONT, 8)
    c.drawString(MARGIN + 5*mm, y_start - 23*mm, "四个模块轮换练习：周一"看清局"-> 周二"读懂情绪"-> 周三"主角归位"-> 周四"转化行动"-> 周五综合练习")

    # 每日追踪表 - 3周
    y_table = y_start - 32*mm

    # 周标题
    weeks = ["第1周（Day 1-7）", "第2周（Day 8-14）", "第3周（Day 15-21）"]
    day_names = ["Day1", "Day2", "Day3", "Day4", "Day5", "Day6", "Day7"]
    practices = [
        ["情绪信号扫描", "主角心态自检", "WSDF叙事改写", "4-7-8呼吸练习", "身体扫描冥想", "最小行动实践", "周检视"],
        ["情绪信号扫描", "主角心态自检", "WSDF叙事改写", "4-7-8呼吸练习", "身体扫描冥想", "最小行动实践", "周检视"],
        ["情绪信号扫描", "主角心态自检", "WSDF叙事改写", "4-7-8呼吸练习", "身体扫描冥想", "最小行动实践", "周检视"],
    ]

    week_width = (PAGE_WIDTH - 2*MARGIN - 10*mm) / 3
    row_height = 10*mm

    for w_idx, (week, days, pracs) in enumerate(zip(weeks, [day_names]*3, practices)):
        x_week = MARGIN + w_idx * (week_width + 5*mm)

        # 周标题
        c.setFillColor(COLOR_PRIMARY)
        c.roundRect(x_week, y_table, week_width, 10*mm, 2*mm, fill=1, stroke=0)
        c.setFillColor(colors.white)
        c.setFont(CHINESE_FONT_BOLD, 9)
        c.drawCentredString(x_week + week_width/2, y_table + 3*mm, week)

        # 列标题行
        y_row = y_table - row_height
        c.setFillColor(COLOR_HEADER_BG)
        c.rect(x_week, y_row - row_height, week_width, row_height, fill=1, stroke=0)
        c.setStrokeColor(COLOR_BORDER)
        c.setLineWidth(0.3)

        day_col_w = 15*mm
        c.setFillColor(COLOR_SECONDARY)
        c.setFont(CHINESE_FONT_BOLD, 7)
        c.drawCentredString(x_week + day_col_w/2, y_row - 3*mm, "日期")
        c.setFont(CHINESE_FONT_BOLD, 7)
        c.drawCentredString(x_week + day_col_w + 18*mm/2, y_row - 3*mm, "练习内容")
        c.drawCentredString(x_week + day_col_w + 18*mm + 10*mm/2, y_row - 3*mm, "完成")
        c.drawCentredString(x_week + day_col_w + 18*mm + 10*mm + 12*mm/2, y_row - 3*mm, "备注")

        # 7天行
        for d_idx in range(7):
            y_row -= row_height
            if d_idx % 2 == 1:
                c.setFillColor(colors.HexColor('#f8f9fa'))
                c.rect(x_week, y_row - row_height, week_width, row_height, fill=1, stroke=0)

            c.setStrokeColor(COLOR_BORDER)
            c.setLineWidth(0.3)
            c.rect(x_week, y_row - row_height, week_width, row_height, fill=0, stroke=1)

            # 分隔线
            c.line(x_week + day_col_w, y_row - row_height, x_week + day_col_w, y_row)
            c.line(x_week + day_col_w + 18*mm, y_row - row_height, x_week + day_col_w + 18*mm, y_row)
            c.line(x_week + day_col_w + 18*mm + 10*mm, y_row - row_height, x_week + day_col_w + 18*mm + 10*mm, y_row)

            # 日期
            c.setFillColor(COLOR_LIGHT_TEXT)
            c.setFont(CHINESE_FONT, 7)
            c.drawCentredString(x_week + day_col_w/2, y_row - 3.5*mm, days[d_idx])

            # 练习内容
            c.setFillColor(COLOR_TEXT)
            c.setFont(CHINESE_FONT, 7)
            c.drawString(x_week + day_col_w + 2*mm, y_row - 3.5*mm, pracs[d_idx][:12])

            # 完成框
            c.setStrokeColor(COLOR_SECONDARY)
            c.setLineWidth(0.5)
            c.rect(x_week + day_col_w + 18*mm + 3*mm, y_row - 4*mm, 4*mm, 4*mm, fill=0, stroke=1)

            # 备注格
            c.setFillColor(COLOR_LIGHT_TEXT)
            c.setFont(CHINESE_FONT, 7)
            c.drawString(x_week + day_col_w + 18*mm + 10*mm + 2*mm, y_row - 3.5*mm, "")

    # 底部关键认知
    y_key = 16*mm
    c.setFillColor(COLOR_LIGHT_BG)
    c.roundRect(MARGIN, y_key - 12*mm, PAGE_WIDTH - 2*MARGIN, 14*mm, 3*mm, fill=1, stroke=0)
    c.setFillColor(COLOR_ACCENT)
    c.setFont(CHINESE_FONT_BOLD, 9)
    c.drawString(MARGIN + 5*mm, y_key - 6*mm, "成功秘诀：")
    c.setFillColor(COLOR_TEXT)
    c.setFont(CHINESE_FONT, 9)
    c.drawString(MARGIN + 25*mm, y_key - 6*mm, "不要追求完美打卡,21天中完成14天以上就算成功。关键是让练习成为日常习惯。")

    draw_footer(c, 1, 2)

    # ========== 第2页：背面 - 周检视 + 记录 ==========
    c.showPage()
    draw_header(c, "日常练习追踪卡 · 周检视", "每周复盘,让改变真实发生", 2)

    y_start = PAGE_HEIGHT - 55*mm

    # 说明
    c.setFillColor(COLOR_LIGHT_BG)
    c.roundRect(MARGIN, y_start - 18*mm, PAGE_WIDTH - 2*MARGIN, 18*mm, 3*mm, fill=1, stroke=0)
    c.setFillColor(COLOR_SECONDARY)
    c.setFont(CHINESE_FONT_BOLD, 9)
    c.drawString(MARGIN + 5*mm, y_start - 8*mm, "什么时候检视?")
    c.setFillColor(COLOR_TEXT)
    c.setFont(CHINESE_FONT, 9)
    c.drawString(MARGIN + 35*mm, y_start - 8*mm, "每周日晚上花15分钟,回顾本周的练习情况。回答以下3个问题,写在对应区域。")
    c.setFillColor(COLOR_ACCENT)
    c.setFont(CHINESE_FONT, 8)
    c.drawString(MARGIN + 5*mm, y_start - 16*mm, "提示：检视比打卡更重要--知道"为什么"比知道"做了什么"更能带来改变。")

    # 三个问题
    questions = [
        {
            "q": "Q1：本週哪些练习对你最有帮助?为什么?",
            "hint": "描述具体场景和感受",
            "color": COLOR_SECONDARY
        },
        {
            "q": "Q2：本週遇到的最大情绪挑战是什么?你是怎么处理的?",
            "hint": "即使是失败的经历,也是重要的学习",
            "color": colors.HexColor('#9b59b6')
        },
        {
            "q": "Q3：下週你想重点练习什么?有什么需要调整的?",
            "hint": "保持弹性,不要复制上周的计划",
            "color": COLOR_SUCCESS
        }
    ]

    q_height = 28*mm
    y_q = y_start - 28*mm

    for i, q in enumerate(questions):
        # 问题背景
        c.setFillColor(colors.white)
        c.roundRect(MARGIN, y_q - q_height, PAGE_WIDTH - 2*MARGIN, q_height, 3*mm, fill=1, stroke=0)

        # 左侧色条
        c.setFillColor(q["color"])
        c.roundRect(MARGIN, y_q - q_height, 3*mm, q_height, 1*mm, fill=1, stroke=0)
        c.rect(MARGIN, y_q - q_height, 1.5*mm, q_height, fill=1, stroke=0)

        # 问题
        c.setFillColor(q["color"])
        c.setFont(CHINESE_FONT_BOLD, 10)
        c.drawString(MARGIN + 8*mm, y_q - 10*mm, q["q"])

        # 提示
        c.setFillColor(COLOR_LIGHT_TEXT)
        c.setFont(CHINESE_FONT, 8)
        c.drawString(MARGIN + 8*mm, y_q - 18*mm, q["hint"])

        # 书写区域
        c.setStrokeColor(COLOR_BORDER)
        c.setLineWidth(0.3)
        c.rect(MARGIN + 8*mm, y_q - q_height + 5*mm, PAGE_WIDTH - 2*MARGIN - 16*mm, q_height - 25*mm, fill=0, stroke=1)

        # 横线
        line_y = y_q - 30*mm
        for _ in range(5):
            c.line(MARGIN + 10*mm, line_y, PAGE_WIDTH - MARGIN - 10*mm, line_y)
            line_y -= 5*mm

        y_q -= q_height + 5*mm

    # 底部里程碑追踪
    y_ms = 18*mm
    c.setFillColor(COLOR_LIGHT_BG)
    c.roundRect(MARGIN, y_ms - 14*mm, PAGE_WIDTH - 2*MARGIN, 16*mm, 3*mm, fill=1, stroke=0)
    c.setFillColor(COLOR_ACCENT)
    c.setFont(CHINESE_FONT_BOLD, 9)
    c.drawString(MARGIN + 5*mm, y_ms - 7*mm, "21天里程碑：")
    c.setFillColor(COLOR_TEXT)
    c.setFont(CHINESE_FONT, 9)

    milestones = ["Day 7：建立觉察习惯", "Day 14：初步掌握主角心态", "Day 21：形成情绪转化自动化"]
    ms_width = (PAGE_WIDTH - 2*MARGIN - 35*mm) / 3
    for i, ms in enumerate(milestones):
        c.setFillColor(colors.white)
        c.roundRect(MARGIN + 30*mm + i * (ms_width + 5*mm), y_ms - 11*mm, ms_width, 8*mm, 2*mm, fill=1, stroke=0)
        c.setStrokeColor(COLOR_SUCCESS if i < 2 else COLOR_ACCENT)
        c.setLineWidth(1)
        c.roundRect(MARGIN + 30*mm + i * (ms_width + 5*mm), y_ms - 11*mm, ms_width, 8*mm, 2*mm, fill=0, stroke=1)
        c.setFillColor(COLOR_SUCCESS if i < 2 else COLOR_ACCENT)
        c.setFont(CHINESE_FONT, 8)
        c.drawCentredString(MARGIN + 30*mm + i * (ms_width + 5*mm) + ms_width/2, y_ms - 7*mm, ms)

    draw_footer(c, 2, 2, back=True)

    c.save()
    print(f"Created: {filename}")


# ============================================================
# PDF 8: 术语类比速查卡
# ============================================================
def create_card_08():
    """08-术语类比速查卡"""
    filename = os.path.join(OUTPUT_DIR, "08-术语类比速查卡.pdf")
    c = canvas.Canvas(filename, pagesize=landscape(A4))

    # ========== 第1页：正面 ==========
    draw_header(c, "术语类比速查卡", "VUCA · 情绪智力 · 认知重评 - 用生活比喻理解专业概念", 1)

    y_start = PAGE_HEIGHT - 55*mm

    # 说明
    c.setFillColor(COLOR_LIGHT_BG)
    c.roundRect(MARGIN, y_start - 18*mm, PAGE_WIDTH - 2*MARGIN, 18*mm, 3*mm, fill=1, stroke=0)
    c.setFillColor(COLOR_SECONDARY)
    c.setFont(CHINESE_FONT_BOLD, 9)
    c.drawString(MARGIN + 5*mm, y_start - 8*mm, "为什么要用类比?")
    c.setFillColor(COLOR_TEXT)
    c.setFont(CHINESE_FONT, 9)
    c.drawString(MARGIN + 40*mm, y_start - 8*mm, "专业术语对同行"准确",对学员是"听不懂"。类比帮助建立画面,再带出术语。")
    c.setFillColor(COLOR_ACCENT)
    c.setFont(CHINESE_FONT, 8)
    c.drawString(MARGIN + 5*mm, y_start - 16*mm, "提示：先看类比理解概念,再记住专业术语--这样记得更久。")

    # 术语类比表
    terms = [
        {
            "term": "VUCA",
            "full": "易变性、不确定性、复杂性、模糊性",
            "analogy": "想象你在开一辆没有导航、没有路牌、随时会改变路况的车。",
            "meaning": "过去稳定的结构不再可靠,唯一不变的就是变化本身。",
            "source": "企业管理/军事术语"
        },
        {
            "term": "情绪智力\nEmotion Intelligence",
            "full": "识别、理解、管理自己和他人的情绪",
            "analogy": "就像手机操作系统--情绪是各种App,情绪智力是管理这些App的能力。",
            "meaning": "不是没有情绪,而是能管理情绪,不被情绪控制。",
            "source": "心理学/Goleman"
        },
        {
            "term": "认知重评\nCognitive Reappraisal",
            "full": "在情绪反应之前,改变对事件的解读方式",
            "analogy": "同一张照片,换个滤镜,色彩完全不同--但底片没变。",
            "meaning": "事实不能改变,但看事实的角度可以改变,情绪就会随之改变。",
            "source": "心理学/情绪调节"
        },
        {
            "term": "情绪劳动\nEmotional Labor",
            "full": "在工作场合管理情绪表达,使之符合职业要求",
            "analogy": "演员上台要按剧本表演,哪怕心里不高兴--这就是情绪劳动。",
            "meaning": "服务业、客服、管理者特别需要这种能力,但过度消耗会导致倦怠。",
            "source": "社会学/服务管理"
        },
        {
            "term": "心理弹性\nResilience",
            "full": "遭遇挫折后恢复到正常状态的能力",
            "analogy": "竹子--风会吹弯它,但风停了它会弹回来,而不是断掉。",
            "meaning": "不是不遇到挫折,而是遇到后能恢复,甚至在挫折中成长。",
            "source": "心理学/积极心理学"
        },
        {
            "term": "正念\nMindfulness",
            "full": "有意识地、不评判地专注当下",
            "analogy": "像镜子一样--物体来了就照,走了就空。不抓取,不排斥。",
            "meaning": "不是"什么都不想",而是"知道自己在想什么,但不被想法带走"。",
            "source": "冥想/禅修/神经科学"
        }
    ]

    y_table = y_start - 28*mm

    # 表头
    c.setFillColor(COLOR_HEADER_BG)
    c.rect(MARGIN, y_table, PAGE_WIDTH - 2*MARGIN, 10*mm, fill=1, stroke=0)
    c.setStrokeColor(COLOR_BORDER)
    c.setLineWidth(0.5)
    c.rect(MARGIN, y_table, PAGE_WIDTH - 2*MARGIN, 10*mm, fill=0, stroke=1)

    col_widths = [35*mm, 55*mm, 85*mm, 70*mm, 20*mm]
    x_col = MARGIN + 3*mm
    headers = ["专业术语", "原义", "生活类比", "核心含义", "来源"]
    for h, w in zip(headers, col_widths):
        c.setFillColor(COLOR_PRIMARY)
        c.setFont(CHINESE_FONT_BOLD, 9)
        c.drawCentredString(x_col + w/2, y_table + 3*mm, h)
        x_col += w

    # 分隔线位置
    line_positions = [MARGIN + 35*mm, MARGIN + 35*mm + 55*mm, MARGIN + 35*mm + 55*mm + 85*mm, MARGIN + 35*mm + 55*mm + 85*mm + 70*mm]

    # 表格行
    row_height = 16*mm
    y_row = y_table

    for i, term in enumerate(terms):
        y_row -= row_height
        if i % 2 == 1:
            c.setFillColor(colors.HexColor('#f8f9fa'))
            c.rect(MARGIN, y_row, PAGE_WIDTH - 2*MARGIN, row_height, fill=1, stroke=0)

        c.setStrokeColor(COLOR_BORDER)
        c.setLineWidth(0.3)
        c.rect(MARGIN, y_row, PAGE_WIDTH - 2*MARGIN, row_height, fill=0, stroke=1)

        # 分隔线
        for lp in line_positions[:-1]:
            c.line(lp, y_row, lp, y_row + row_height)

        # 术语
        c.setFillColor(COLOR_PRIMARY)
        c.setFont(CHINESE_FONT_BOLD, 9)
        term_lines = term["term"].split('\n')
        if len(term_lines) > 1:
            c.drawCentredString(MARGIN + 17.5*mm, y_row + 6*mm, term_lines[0])
            c.drawCentredString(MARGIN + 17.5*mm, y_row + 1*mm, term_lines[1])
        else:
            c.drawCentredString(MARGIN + 17.5*mm, y_row + 5*mm, term["term"])

        # 原义
        c.setFillColor(COLOR_TEXT)
        c.setFont(CHINESE_FONT, 7.5)
        full_words = term["full"]
        if len(full_words) > 28:
            c.drawString(MARGIN + 38*mm, y_row + 8*mm, full_words[:28])
            c.drawString(MARGIN + 38*mm, y_row + 2*mm, full_words[28:])
        else:
            c.drawString(MARGIN + 38*mm, y_row + 5*mm, full_words)

        # 类比
        c.setFillColor(COLOR_SECONDARY)
        c.setFont(CHINESE_FONT, 7.5)
        analogy_words = term["analogy"]
        if len(analogy_words) > 45:
            c.drawString(MARGIN + 93*mm, y_row + 10*mm, analogy_words[:45])
            c.drawString(MARGIN + 93*mm, y_row + 4*mm, analogy_words[45:])
        else:
            c.drawString(MARGIN + 93*mm, y_row + 7*mm, analogy_words)

        # 核心含义
        c.setFillColor(COLOR_TEXT)
        c.setFont(CHINESE_FONT, 7.5)
        meaning_words = term["meaning"]
        if len(meaning_words) > 38:
            c.drawString(MARGIN + 178*mm, y_row + 10*mm, meaning_words[:38])
            c.drawString(MARGIN + 178*mm, y_row + 4*mm, meaning_words[38:])
        else:
            c.drawString(MARGIN + 178*mm, y_row + 7*mm, meaning_words)

        # 来源
        c.setFillColor(COLOR_LIGHT_TEXT)
        c.setFont(CHINESE_FONT, 7)
        c.drawCentredString(MARGIN + 35*mm + 55*mm + 85*mm + 70*mm + 10*mm, y_row + 5*mm, term["source"])

    # 底部关键认知
    y_key = 18*mm
    c.setFillColor(COLOR_LIGHT_BG)
    c.roundRect(MARGIN, y_key - 12*mm, PAGE_WIDTH - 2*MARGIN, 14*mm, 3*mm, fill=1, stroke=0)
    c.setFillColor(COLOR_ACCENT)
    c.setFont(CHINESE_FONT_BOLD, 9)
    c.drawString(MARGIN + 5*mm, y_key - 6*mm, "关键认知：")
    c.setFillColor(COLOR_TEXT)
    c.setFont(CHINESE_FONT, 9)
    c.drawString(MARGIN + 25*mm, y_key - 6*mm, "类比不需要"完全精确"--目的是建立画面,不是给出科学定义。建立画面后,可以补一句"实际比这更复杂一点"。")

    draw_footer(c, 1, 2)

    # ========== 第2页：背面 - 我的术语表 ==========
    c.showPage()
    draw_header(c, "术语类比速查卡 · 我的术语表", "写下你自己的类比,建立专属词汇卡", 2)

    y_start = PAGE_HEIGHT - 55*mm

    # 说明
    c.setFillColor(COLOR_LIGHT_BG)
    c.roundRect(MARGIN, y_start - 18*mm, PAGE_WIDTH - 2*MARGIN, 18*mm, 3*mm, fill=1, stroke=0)
    c.setFillColor(COLOR_SECONDARY)
    c.setFont(CHINESE_FONT_BOLD, 9)
    c.drawString(MARGIN + 5*mm, y_start - 8*mm, "怎么用这张卡：")
    c.setFillColor(COLOR_TEXT)
    c.setFont(CHINESE_FONT, 9)
    c.drawString(MARGIN + 30*mm, y_start - 8*mm, "备课时,把你课程中"学员容易觉得陌生"的术语/概念逐一列在下面,参考正面格式设计类比。")
    c.setFillColor(COLOR_ACCENT)
    c.setFont(CHINESE_FONT, 8)
    c.drawString(MARGIN + 5*mm, y_start - 16*mm, "自检：类比写完后读一遍--是不是"先建立了画面",再带出术语?如果一句话里同时出现2-3个新术语,考虑拆成两句。")

    # 我的术语表
    y_table = y_start - 28*mm

    # 表头
    c.setFillColor(COLOR_HEADER_BG)
    c.rect(MARGIN, y_table, PAGE_WIDTH - 2*MARGIN, 10*mm, fill=1, stroke=0)
    c.setStrokeColor(COLOR_BORDER)
    c.setLineWidth(0.5)
    c.rect(MARGIN, y_table, PAGE_WIDTH - 2*MARGIN, 10*mm, fill=0, stroke=1)

    col_widths = [35*mm, 55*mm, 85*mm, 70*mm, 20*mm]
    x_col = MARGIN + 3*mm
    headers = ["专业术语", "原义", "我的类比", "核心含义", "来源"]
    for h, w in zip(headers, col_widths):
        c.setFillColor(COLOR_PRIMARY)
        c.setFont(CHINESE_FONT_BOLD, 9)
        c.drawCentredString(x_col + w/2, y_table + 3*mm, h)
        x_col += w

    # 表格行 - 8行空白
    row_height = 16*mm
    y_row = y_table

    for i in range(8):
        y_row -= row_height
        if i % 2 == 1:
            c.setFillColor(colors.HexColor('#f8f9fa'))
            c.rect(MARGIN, y_row, PAGE_WIDTH - 2*MARGIN, row_height, fill=1, stroke=0)

        c.setStrokeColor(COLOR_BORDER)
        c.setLineWidth(0.3)
        c.rect(MARGIN, y_row, PAGE_WIDTH - 2*MARGIN, row_height, fill=0, stroke=1)

        # 分隔线
        lp_running = MARGIN
        for w in [35*mm, 55*mm, 85*mm, 70*mm]:
            lp_running += w
            c.line(lp_running, y_row, lp_running, y_row + row_height)

    # 横线（书写辅助）
    line_y = y_table - 12*mm
    for _ in range(8):
        for x in range(4):
            pass
        line_y -= row_height

    # 底部提示
    y_tip = 18*mm
    c.setFillColor(COLOR_LIGHT_BG)
    c.roundRect(MARGIN, y_tip - 14*mm, PAGE_WIDTH - 2*MARGIN, 16*mm, 3*mm, fill=1, stroke=0)
    c.setFillColor(COLOR_ACCENT)
    c.setFont(CHINESE_FONT_BOLD, 9)
    c.drawString(MARGIN + 5*mm, y_tip - 6*mm, "备课提示：")
    c.setFillColor(COLOR_TEXT)
    c.setFont(CHINESE_FONT, 9)
    c.drawString(MARGIN + 25*mm, y_tip - 6*mm, "搜索学员所在行业的基本信息--业务流程、组织结构、常用术语,确保类比中的角色、流程符合行业惯例。")

    draw_footer(c, 2, 2, back=True)

    c.save()
    print(f"Created: {filename}")


# ============================================================
# 主函数：生成所有PDF
# ============================================================
if __name__ == "__main__":
    import os
    os.makedirs(OUTPUT_DIR, exist_ok=True)

    print("开始生成VUCA时代情绪力课程工具卡...")
    print(f"输出目录: {OUTPUT_DIR}")
    print("=" * 50)

    create_card_01()
    create_card_02()
    create_card_03()
    create_card_04()
    create_card_05()
    create_card_06()
    create_card_07()
    create_card_08()

    print("=" * 50)
    print("所有8个PDF文件生成完成!")
    print(f"输出路径: {OUTPUT_DIR}")
