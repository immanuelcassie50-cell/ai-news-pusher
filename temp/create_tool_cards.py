#!/usr/bin/env python3
"""
生成语音记录转带教手册工具卡 PDF
A5尺寸 (148 x 210mm)，红灰配色，浅底设计
"""

import os
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable
from reportlab.lib.pagesizes import A5
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.colors import HexColor, white, black
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_JUSTIFY
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont

# 颜色定义
ACCENT_RED = HexColor('#C0392B')
DARK_GRAY = HexColor('#2C3E50')
LIGHT_GRAY = HexColor('#7F8C8D')
BG_WHITE = white
ACCENT_LIGHT = HexColor('#FADBD8')  # 浅红背景

# A5尺寸 (mm转pt: 1mm = 2.8346pt)
A5_WIDTH = 148 * 2.8346  # ~419.5pt
A5_HEIGHT = 210 * 2.8346  # ~595.3pt

# 字体路径 - 使用系统微软雅黑
FONT_NAME = 'Microsoft YaHei'
FONT_NAME_BOLD = 'Microsoft YaHei Bold'

def register_fonts():
    """注册中文字体"""
    import platform
    system = platform.system()
    font_paths = []

    if system == 'Windows':
        font_paths = [
            'C:/Windows/Fonts/msyh.ttc',  # 微软雅黑
            'C:/Windows/Fonts/simhei.ttf',  # 黑体
        ]
    elif system == 'Darwin':
        font_paths = [
            '/System/Library/Fonts/PingFang.ttc',
            '/Library/Fonts/Arial Unicode.ttf',
        ]

    for path in font_paths:
        if os.path.exists(path):
            try:
                pdfmetrics.registerFont(TTFont(FONT_NAME, path))
                pdfmetrics.registerFont(TTFont(FONT_NAME_BOLD, path))
                return True
            except:
                pass
    return False

def create_styles():
    """创建样式"""
    styles = getSampleStyleSheet()

    # 标题样式 - 红色
    title_style = ParagraphStyle(
        'CardTitle',
        fontName=FONT_NAME_BOLD,
        fontSize=16,
        textColor=white,
        alignment=TA_CENTER,
        spaceAfter=6,
        leading=20,
    )

    # 副标题样式 - 深灰
    subtitle_style = ParagraphStyle(
        'CardSubtitle',
        fontName=FONT_NAME,
        fontSize=10,
        textColor=DARK_GRAY,
        alignment=TA_CENTER,
        spaceAfter=8,
    )

    # 内容标题 - 深灰
    content_title = ParagraphStyle(
        'ContentTitle',
        fontName=FONT_NAME_BOLD,
        fontSize=12,
        textColor=ACCENT_RED,
        alignment=TA_LEFT,
        spaceBefore=8,
        spaceAfter=4,
    )

    # 正文样式
    body_style = ParagraphStyle(
        'CardBody',
        fontName=FONT_NAME,
        fontSize=9,
        textColor=DARK_GRAY,
        alignment=TA_LEFT,
        spaceAfter=4,
        leading=14,
    )

    # 列表项样式
    bullet_style = ParagraphStyle(
        'BulletItem',
        fontName=FONT_NAME,
        fontSize=9,
        textColor=DARK_GRAY,
        alignment=TA_LEFT,
        leftIndent=12,
        spaceAfter=3,
        leading=13,
    )

    # 强调样式
    highlight_style = ParagraphStyle(
        'Highlight',
        fontName=FONT_NAME_BOLD,
        fontSize=9,
        textColor=ACCENT_RED,
        alignment=TA_LEFT,
        spaceAfter=3,
    )

    # 页脚样式
    footer_style = ParagraphStyle(
        'Footer',
        fontName=FONT_NAME,
        fontSize=7,
        textColor=LIGHT_GRAY,
        alignment=TA_CENTER,
    )

    return {
        'title': title_style,
        'subtitle': subtitle_style,
        'content_title': content_title,
        'body': body_style,
        'bullet': bullet_style,
        'highlight': highlight_style,
        'footer': footer_style,
    }

def draw_header(canvas, doc, title_text, card_number):
    """绘制页面头部"""
    canvas.saveState()

    # 顶部红色条
    canvas.setFillColor(ACCENT_RED)
    canvas.rect(0, A5_HEIGHT - 35, A5_WIDTH, 35, fill=1, stroke=0)

    # 标题文字
    canvas.setFillColor(white)
    canvas.setFont(FONT_NAME_BOLD, 14)
    canvas.drawCentredString(A5_WIDTH / 2, A5_HEIGHT - 23, title_text)

    # 左侧卡片编号
    canvas.setFont(FONT_NAME, 9)
    canvas.drawString(15, A5_HEIGHT - 23, card_number)

    canvas.restoreState()

def draw_footer(canvas, doc, footer_text):
    """绘制页面底部"""
    canvas.saveState()

    # 分隔线
    canvas.setStrokeColor(ACCENT_RED)
    canvas.setLineWidth(1)
    canvas.line(20, 40, A5_WIDTH - 20, 40)

    # 页脚文字
    canvas.setFillColor(LIGHT_GRAY)
    canvas.setFont(FONT_NAME, 7)
    canvas.drawCentredString(A5_WIDTH / 2, 25, footer_text)

    canvas.restoreState()

def create_front_page(content, output_path, card_title, card_number):
    """创建正面页面"""

    def on_page(canvas, doc):
        draw_header(canvas, doc, card_title, card_number)
        draw_footer(canvas, doc, "语音记录转带教手册 | 工具卡")

    doc = SimpleDocTemplate(
        output_path,
        pagesize=(A5_WIDTH, A5_HEIGHT),
        leftMargin=15,
        rightMargin=15,
        topMargin=45,
        bottomMargin=45,
    )

    styles = create_styles()
    story = []

    # 添加内容
    for item in content:
        if item['type'] == 'title':
            story.append(Paragraph(item['text'], styles['content_title']))
        elif item['type'] == 'body':
            story.append(Paragraph(item['text'], styles['body']))
        elif item['type'] == 'bullet':
            story.append(Paragraph(f"• {item['text']}", styles['bullet']))
        elif item['type'] == 'highlight':
            story.append(Paragraph(item['text'], styles['highlight']))
        elif item['type'] == 'spacer':
            story.append(Spacer(1, item['size']))

    doc.build(story, onFirstPage=on_page, onLaterPages=on_page)

def create_back_page(content, output_path, card_title, card_number, instructions_title="使用说明"):
    """创建背面页面"""

    def on_page(canvas, doc):
        # 深灰头部
        canvas.saveState()
        canvas.setFillColor(DARK_GRAY)
        canvas.rect(0, A5_HEIGHT - 35, A5_WIDTH, 35, fill=1, stroke=0)

        # 标题
        canvas.setFillColor(white)
        canvas.setFont(FONT_NAME_BOLD, 12)
        canvas.drawCentredString(A5_WIDTH / 2, A5_HEIGHT - 23, f"{card_title} - {instructions_title}")

        # 编号
        canvas.setFont(FONT_NAME, 9)
        canvas.drawString(15, A5_HEIGHT - 23, card_number)
        canvas.restoreState()

        # 页脚
        draw_footer(canvas, doc, "语音记录转带教手册 | 工具卡")

    doc = SimpleDocTemplate(
        output_path,
        pagesize=(A5_WIDTH, A5_HEIGHT),
        leftMargin=15,
        rightMargin=15,
        topMargin=45,
        bottomMargin=45,
    )

    styles = create_styles()
    story = []

    # 使用说明标题
    story.append(Paragraph(instructions_title, styles['content_title']))
    story.append(Spacer(1, 10))

    for item in content:
        if item['type'] == 'title':
            story.append(Paragraph(item['text'], styles['content_title']))
        elif item['type'] == 'body':
            story.append(Paragraph(item['text'], styles['body']))
        elif item['type'] == 'bullet':
            story.append(Paragraph(f"• {item['text']}", styles['bullet']))
        elif item['type'] == 'numbered':
            story.append(Paragraph(f"{item['num']}. {item['text']}", styles['bullet']))
        elif item['type'] == 'spacer':
            story.append(Spacer(1, item['size']))
        elif item['type'] == 'callout':
            # 创建强调框
            data = [[Paragraph(item['text'], styles['body'])]]
            t = Table(data, colWidths=[A5_WIDTH - 50])
            t.setStyle(TableStyle([
                ('BACKGROUND', (0, 0), (-1, -1), ACCENT_LIGHT),
                ('LEFTPADDING', (0, 0), (-1, -1), 10),
                ('RIGHTPADDING', (0, 0), (-1, -1), 10),
                ('TOPPADDING', (0, 0), (-1, -1), 8),
                ('BOTTOMPADDING', (0, 0), (-1, -1), 8),
                ('LINEBEFORE', (0, 0), (0, -1), 4, ACCENT_RED),
            ]))
            story.append(t)
            story.append(Spacer(1, 8))

    doc.build(story, onFirstPage=on_page, onLaterPages=on_page)

def merge_front_back(front_path, back_path, output_path):
    """合并正面和背面为一个PDF"""
    from pypdf import PdfWriter, PdfReader

    writer = PdfWriter()

    # 读取正面
    front_reader = PdfReader(front_path)
    writer.add_page(front_reader.pages[0])

    # 读取背面
    back_reader = PdfReader(back_path)
    writer.add_page(back_reader.pages[0])

    with open(output_path, 'wb') as f:
        writer.write(f)

# ============================================================
# 工具卡内容定义
# ============================================================

def get_card_01_content():
    """01-开篇认知自测卡"""
    front = [
        {'type': 'title', 'text': '开篇认知自测'},
        {'type': 'spacer', 'size': 10},
        {'type': 'body', 'text': '在开始学习之前，请认真思考以下问题，了解自己的起点：'},
        {'type': 'spacer', 'size': 8},
        {'type': 'bullet', 'text': '你过去带教新人时遇到过哪些困难？'},
        {'type': 'bullet', 'text': '你通常用什么方式传授操作技能？'},
        {'type': 'bullet', 'text': '学员学不会时，你一般如何应对？'},
        {'type': 'bullet', 'text': '你了解"经验萃取"这个概念吗？'},
        {'type': 'bullet', 'text': '你期望通过这次学习达成什么目标？'},
        {'type': 'bullet', 'text': '你有多少时间可以用于带教准备？'},
        {'type': 'bullet', 'text': '你愿意尝试新的带教方法吗？'},
        {'type': 'spacer', 'size': 10},
        {'type': 'body', 'text': '评分标准：'},
        {'type': 'body', 'text': '每题1-5分，总分7-35分'},
        {'type': 'body', 'text': '25-35分：优秀  |  18-24分：良好  |  7-17分：需努力'},
    ]

    back = [
        {'type': 'body', 'text': '本卡帮助讲师在课程开始前了解学员的基线水平，实现个性化教学。'},
        {'type': 'spacer', 'size': 6},
        {'type': 'title', 'text': '使用步骤'},
        {'type': 'numbered', 'num': '1', 'text': '课前发放纸质问卷或电子表单'},
        {'type': 'numbered', 'num': '2', 'text': '学员独立填写，限时5分钟'},
        {'type': 'numbered', 'num': '3', 'text': '回收后快速统计各题平均分'},
        {'type': 'numbered', 'num': '4', 'text': '在课程中重点讲解得分低的模块'},
        {'type': 'numbered', 'num': '5', 'text': '课程结束时复盘，看提升效果'},
        {'type': 'spacer', 'size': 8},
        {'type': 'callout', 'text': '提示：如果学员整体得分较高，可以加快前几个模块的节奏，把时间留给更复杂的内容。'},
    ]

    return front, back

def get_card_02_content():
    """02-场景卡"""
    front = [
        {'type': 'title', 'text': '五类教学场景速查'},
        {'type': 'spacer', 'size': 10},
        {'type': 'body', 'text': '根据不同的带教场景，选择合适的教学方法：'},
        {'type': 'spacer', 'size': 8},
        {'type': 'bullet', 'text': '【新员工入职】场景A：基础技能传授，流程规范学习'},
        {'type': 'bullet', 'text': '【岗位转训】场景B：跨部门技能迁移，标准化复制'},
        {'type': 'bullet', 'text': '【业务升级】场景C：新系统/新流程切换培训'},
        {'type': 'bullet', 'text': '【问题纠正】场景D：操作失误纠正，习惯重塑'},
        {'type': 'bullet', 'text': '【经验传承】场景E：专家经验萃取，隐性知识显性化'},
        {'type': 'spacer', 'size': 10},
        {'type': 'body', 'text': '场景选择指引：'},
        {'type': 'body', 'text': 'A看态度 → 耐心、鼓励、建立信心'},
        {'type': 'body', 'text': 'B看标准 → 严格、规范、统一输出'},
        {'type': 'body', 'text': 'C看效率 → 快速切换、减少适应期'},
        {'type': 'body', 'text': 'D看习惯 → 持续跟进、反复强化'},
        {'type': 'body', 'text': 'E看方法 → 结构化萃取、工具辅助'},
    ]

    back = [
        {'type': 'body', 'text': '场景判断三问法：'},
        {'type': 'spacer', 'size': 6},
        {'type': 'callout', 'text': '问1：学员是谁？新员工/转岗/在职？'},
        {'type': 'callout', 'text': '问2：教什么？基础/进阶/专项？'},
        {'type': 'callout', 'text': '问3：急不急？紧急上岗/系统学习？'},
        {'type': 'spacer', 'size': 8},
        {'type': 'title', 'text': '场景匹配建议'},
        {'type': 'body', 'text': '• 入门首选A，学员信心最重要'},
        {'type': 'body', 'text': '• 复制推广选B，标准化是核心'},
        {'type': 'body', 'text': '• 变革期用C，减少阻力是关键'},
        {'type': 'body', 'text': '• 纠正问题用D，跟踪反馈要跟上'},
        {'type': 'body', 'text': '• 知识沉淀用E，结构化工具少不了'},
    ]

    return front, back

def get_card_03_content():
    """03-选骨架决策卡"""
    front = [
        {'type': 'title', 'text': '手册结构选择决策'},
        {'type': 'spacer', 'size': 10},
        {'type': 'body', 'text': '根据教学内容选择最合适的手册骨架：'},
        {'type': 'spacer', 'size': 8},
        {'type': 'bullet', 'text': '【流程型】步骤1→2→3...  适合：操作规程、工作流程'},
        {'type': 'bullet', 'text': '【清单型】检查项打勾确认  适合：安全检查、设备启停'},
        {'type': 'bullet', 'text': '【案例型】问题-分析-解答    适合：故障处理、问题排查'},
        {'type': 'bullet', 'text': '【对比型】A方案 vs B方案    适合：方案选型、策略制定'},
        {'type': 'bullet', 'text': '【模块型】主题1+主题2+...   适合：综合技能、体系课程'},
        {'type': 'spacer', 'size': 10},
        {'type': 'body', 'text': '快速选择器：'},
        {'type': 'body', 'text': '是否有时序要求？ → 优先流程型'},
        {'type': 'body', 'text': '是否需要逐项确认？ → 清单型'},
        {'type': 'body', 'text': '是否围绕问题展开？ → 案例型'},
    ]

    back = [
        {'type': 'title', 'text': '骨架选择决策树'},
        {'type': 'spacer', 'size': 6},
        {'type': 'callout', 'text': '第一步：明确教学目标'},
        {'type': 'body', 'text': '• 记住 → 清单型（逐项确认）'},
        {'type': 'body', 'text': '• 会做 → 流程型（步骤分解）'},
        {'type': 'body', 'text': '• 会分析 → 案例型（问题导向）'},
        {'type': 'spacer', 'size': 8},
        {'type': 'callout', 'text': '第二步：评估内容复杂度'},
        {'type': 'body', 'text': '• 单一线性 → 流程型/清单型'},
        {'type': 'body', 'text': '• 多重选择 → 对比型'},
        {'type': 'body', 'text': '• 综合体系 → 模块型'},
        {'type': 'spacer', 'size': 8},
        {'type': 'callout', 'text': '第三步：考虑使用场景'},
        {'type': 'body', 'text': '• 课堂讲解 → 案例型更生动'},
        {'type': 'body', 'text': '• 现场查阅 → 清单型更实用'},
        {'type': 'body', 'text': '• 自主学习 → 模块型更系统'},
    ]

    return front, back

def get_card_04_content():
    """04-提问设计工具卡"""
    front = [
        {'type': 'title', 'text': '核心提问公式'},
        {'type': 'spacer', 'size': 10},
        {'type': 'body', 'text': '好问题 = 场景 + 差距 + 引导'},
        {'type': 'spacer', 'size': 8},
        {'type': 'bullet', 'text': '场景：描述一个具体的工作情境'},
        {'type': 'bullet', 'text': '差距：指出当前与目标的距离'},
        {'type': 'bullet', 'text': '引导：用开放式问题引导思考'},
        {'type': 'spacer', 'size': 10},
        {'type': 'body', 'text': '追问话术模板：'},
        {'type': 'body', 'text': '"你说的XX，具体是指什么？"'},
        {'type': 'body', 'text': '"能举个栗子吗？"'},
        {'type': 'body', 'text': '"还有呢？"'},
        {'type': 'body', 'text': '"如果...会怎样？"'},
        {'type': 'body', 'text': '"跟之前比起来有什么区别？"'},
    ]

    back = [
        {'type': 'title', 'text': '问题类型判断标准'},
        {'type': 'spacer', 'size': 6},
        {'type': 'callout', 'text': '【知识性问题】知道答案'},
        {'type': 'body', 'text': '示例： 这个开关的作用是什么？'},
        {'type': 'body', 'text': '追问： 还有其他功能吗？'},
        {'type': 'spacer', 'size': 6},
        {'type': 'callout', 'text': '【理解性问题】需要解释'},
        {'type': 'body', 'text': '示例： 为什么要先关闭阀门？'},
        {'type': 'body', 'text': '追问： 如果顺序反了会怎样？'},
        {'type': 'spacer', 'size': 6},
        {'type': 'callout', 'text': '【应用性问题】需要实践'},
        {'type': 'body', 'text': '示例： 这个场景下你会怎么做？'},
        {'type': 'body', 'text': '追问： 还有别的处理方式吗？'},
        {'type': 'spacer', 'size': 6},
        {'type': 'callout', 'text': '【分析性问题】需要拆解'},
        {'type': 'body', 'text': '示例： 这个问题的根本原因是什么？'},
        {'type': 'body', 'text': '追问： 哪些因素起主要作用？'},
    ]

    return front, back

def get_card_05_content():
    """05-互动方法工具箱"""
    front = [
        {'type': 'title', 'text': '课堂互动方法库'},
        {'type': 'spacer', 'size': 10},
        {'type': 'body', 'text': '每种方法标注：适合场景 / 操作要点'},
        {'type': 'spacer', 'size': 8},
        {'type': 'bullet', 'text': '【提问法】适合：概念讲解后要点：先提开放性问题，再收口'},
        {'type': 'bullet', 'text': '【讨论法】适合：复杂问题分析要点：小组4-6人，限时10分钟'},
        {'type': 'bullet', 'text': '【演示法】适合：操作技能教学要点：边做边讲，不要只讲不做'},
        {'type': 'bullet', 'text': '【案例法】适合：问题解决类内容要点：案例要真实，有代入感'},
        {'type': 'bullet', 'text': '【游戏法】适合：需要记忆的知识点要点：竞争要有奖励机制'},
        {'type': 'bullet', 'text': '【角色扮演】适合：沟通技巧类内容要点：提前设定角色和情境'},
    ]

    back = [
        {'type': 'title', 'text': '互动方法选择指南'},
        {'type': 'spacer', 'size': 6},
        {'type': 'body', 'text': '按参与度选择：'},
        {'type': 'callout', 'text': '低参与：提问 → 演示 → 案例'},
        {'type': 'callout', 'text': '高参与：讨论 → 游戏 → 角色扮演'},
        {'type': 'spacer', 'size': 8},
        {'type': 'body', 'text': '按教学内容选择：'},
        {'type': 'body', 'text': '• 知识记忆 → 游戏法（竞赛激励）'},
        {'type': 'body', 'text': '• 操作技能 → 演示法（边做边学）'},
        {'type': 'body', 'text': '• 问题分析 → 案例法（讨论决策）'},
        {'type': 'body', 'text': '• 沟通协调 → 角色扮演（体验式学习）'},
        {'type': 'spacer', 'size': 8},
        {'type': 'callout', 'text': '黄金法则：每个模块至少一次互动，保持学员注意力。'},
    ]

    return front, back

def get_card_06_content():
    """06-课堂检验设计卡"""
    front = [
        {'type': 'title', 'text': '学习效果检验设计'},
        {'type': 'spacer', 'size': 10},
        {'type': 'body', 'text': '检验时机选择：'},
        {'type': 'bullet', 'text': '【随堂检验】每个知识点讲完后，立即检验'},
        {'type': 'bullet', 'text': '【模块检验】每个模块结束时，系统检验'},
        {'type': 'bullet', 'text': '【终期检验】课程全部结束时，综合检验'},
        {'type': 'spacer', 'size': 10},
        {'type': 'body', 'text': '检验方法示例：'},
        {'type': 'bullet', 'text': '口头提问：简单快捷，适合知识回顾'},
        {'type': 'bullet', 'text': '实操演练：最真实，直接观察技能掌握'},
        {'type': 'bullet', 'text': '书面测试：客观公正，适合理论考核'},
        {'type': 'bullet', 'text': '案例分析：检验综合运用能力'},
    ]

    back = [
        {'type': 'title', 'text': '检验设计四步法'},
        {'type': 'spacer', 'size': 6},
        {'type': 'numbered', 'num': '1', 'text': '确定检验点：每个核心技能点都要检'},
        {'type': 'numbered', 'num': '2', 'text': '选择检验方式：根据内容选合适方法'},
        {'type': 'numbered', 'num': '3', 'text': '设计检验题目：提前准备好题目'},
        {'type': 'numbered', 'num': '4', 'text': '准备反馈方案：检验后如何补救'},
        {'type': 'spacer', 'size': 8},
        {'type': 'callout', 'text': '关键原则：检验不是为了淘汰，而是为了帮助学员巩固。'},
        {'type': 'spacer', 'size': 6},
        {'type': 'body', 'text': '检验后行动：'},
        {'type': 'body', 'text': '• 全员通过 → 进入下一模块'},
        {'type': 'body', 'text': '• 部分不会 → 小组辅导后再检'},
        {'type': 'body', 'text': '• 普遍不会 → 重新讲解再检验'},
    ]

    return front, back

def get_card_07_content():
    """07-表达技巧卡"""
    front = [
        {'type': 'title', 'text': '讲师表达技巧'},
        {'type': 'spacer', 'size': 10},
        {'type': 'body', 'text': '语言节奏控制：'},
        {'type': 'bullet', 'text': '重点内容：放慢语速，强调关键词'},
        {'type': 'bullet', 'text': '一般内容：正常语速，保持流畅'},
        {'type': 'bullet', 'text': '过渡内容：简短轻快，承上启下'},
        {'type': 'bullet', 'text': '互动环节：适当停顿，给出思考时间'},
        {'type': 'spacer', 'size': 10},
        {'type': 'body', 'text': '肢体语言要点：'},
        {'type': 'bullet', 'text': '眼神：环顾全场，关注每位学员'},
        {'type': 'bullet', 'text': '手势：自然有力，配合内容表达'},
        {'type': 'bullet', 'text': '站姿：稳重大方，不要来回走动'},
        {'type': 'bullet', 'text': '表情：微笑真诚，适度情感投入'},
    ]

    back = [
        {'type': 'title', 'text': '表达技巧提升指南'},
        {'type': 'spacer', 'size': 6},
        {'type': 'callout', 'text': '三练法：'},
        {'type': 'body', 'text': '1. 练习：每次课前对着镜子讲3遍'},
        {'type': 'body', 'text': '2. 练习：录下自己的声音，回听改进'},
        {'type': 'body', 'text': '3. 练习：邀请同事听课，给出反馈'},
        {'type': 'spacer', 'size': 8},
        {'type': 'body', 'text': '常见问题及对策：'},
        {'type': 'body', 'text': '• 语速太快 → 刻意放慢，重要处停顿'},
        {'type': 'body', 'text': '• 声音太小 → 腹式呼吸，用丹田发力'},
        {'type': 'body', 'text': '• 表达单调 → 增加语调变化和肢体语言'},
        {'type': 'body', 'text': '• 紧张忘词 → 准备关键词卡片，不要求完美'},
        {'type': 'spacer', 'size': 8},
        {'type': 'callout', 'text': '核心心法：把注意力放在学员身上，而不是自己。'},
    ]

    return front, back

def get_card_08_content():
    """08-术语类比速查卡"""
    front = [
        {'type': 'title', 'text': '专业术语通俗化对照'},
        {'type': 'spacer', 'size': 10},
        {'type': 'body', 'text': '将专业术语转化为学员容易理解的类比：'},
        {'type': 'spacer', 'size': 8},
        {'type': 'bullet', 'text': '【系统思维】→ 像下棋，走一步看三步'},
        {'type': 'bullet', 'text': '【闭环管理】→ 有头有尾，做完要检查'},
        {'type': 'bullet', 'text': '【标准化作业】→ 按菜谱做菜，不会走味'},
        {'type': 'bullet', 'text': '【预防性维护】→ 定时体检，不要等生病'},
        {'type': 'bullet', 'text': '【持续改进】→ 小步快跑，每天进步一点'},
        {'type': 'bullet', 'text': '【经验萃取】→ 把老司机脑子里的东西挖出来'},
    ]

    back = [
        {'type': 'title', 'text': '类比设计方法'},
        {'type': 'spacer', 'size': 6},
        {'type': 'callout', 'text': '类比公式：'},
        {'type': 'body', 'text': '新术语 = 生活中熟悉的事物 + 核心特征连接'},
        {'type': 'spacer', 'size': 8},
        {'type': 'body', 'text': '类比来源库：'},
        {'type': 'body', 'text': '• 厨房烹饪：火候、配方、步骤'},
        {'type': 'body', 'text': '• 体育运动：热身、战术、配合'},
        {'type': 'body', 'text': '• 医疗健康：体检、诊断、治疗'},
        {'type': 'body', 'text': '• 教育教学：因材施教、循循善诱'},
        {'type': 'body', 'text': '• 军事战略：侦察、部署、突击'},
        {'type': 'spacer', 'size': 8},
        {'type': 'callout', 'text': '注意：类比要准确，不要过度简化导致误解。'},
        {'type': 'body', 'text': '完成类比后要回归正题："也就是说..."'},
    ]

    return front, back

def main():
    """主函数：生成所有工具卡"""
    # 注册字体
    register_fonts()

    # 输出目录
    output_dir = "D:/新课开发/经验萃取/语音记录转带教手册/完整课程包/09-可打印工具卡"
    os.makedirs(output_dir, exist_ok=True)

    # 临时目录
    temp_dir = "D:/CC/temp/tool_cards_temp"
    os.makedirs(temp_dir, exist_ok=True)

    cards = [
        ("01-开篇认知自测卡", get_card_01_content),
        ("02-场景卡", get_card_02_content),
        ("03-选骨架决策卡", get_card_03_content),
        ("04-提问设计工具卡", get_card_04_content),
        ("05-互动方法工具箱卡牌", get_card_05_content),
        ("06-课堂检验设计卡", get_card_06_content),
        ("07-表达技巧卡", get_card_07_content),
        ("08-术语类比速查卡", get_card_08_content),
    ]

    for card_name, content_func in cards:
        print(f"正在生成: {card_name}...")

        front_content, back_content = content_func()

        front_path = os.path.join(temp_dir, f"{card_name}_front.pdf")
        back_path = os.path.join(temp_dir, f"{card_name}_back.pdf")
        final_path = os.path.join(output_dir, f"{card_name}.pdf")

        # 创建正面
        create_front_page(front_content, front_path, card_name, card_name[:2])

        # 创建背面
        create_back_page(back_content, back_path, card_name, card_name[:2])

        # 合并
        merge_front_back(front_path, back_path, final_path)

        print(f"  完成: {final_path}")

    # 清理临时文件
    import shutil
    shutil.rmtree(temp_dir)

    print("\n全部8张工具卡生成完成！")
    print(f"输出目录: {output_dir}")

if __name__ == "__main__":
    main()
