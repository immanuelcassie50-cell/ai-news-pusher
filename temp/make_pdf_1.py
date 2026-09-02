# -*- coding: utf-8 -*-
"""
将评委手册的内容生成 PDF（不依赖 LibreOffice）
复用 docx 内容，做成印刷美观的 PDF
"""
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import cm, mm
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.enums import TA_CENTER, TA_JUSTIFY, TA_LEFT
from reportlab.lib.colors import HexColor, black, white
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, PageBreak, Table, TableStyle,
    KeepTogether, HRFlowable
)
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.cidfonts import UnicodeCIDFont
import os

# 注册中文字体
pdfmetrics.registerFont(UnicodeCIDFont('STSong-Light'))

OUT = r"D:\2026年课程\顺造科技\AI\评审\04-评委与主持\评委手册.pdf"

doc = SimpleDocTemplate(
    OUT, pagesize=A4,
    leftMargin=2.5*cm, rightMargin=2.5*cm,
    topMargin=2.5*cm, bottomMargin=2.5*cm,
    title='顺造科技AI项目成果评审 - 评委手册',
    author='AI 项目评审组'
)

# 样式
C_PRIMARY = HexColor('#1F3A68')
C_SECONDARY = HexColor('#2E5C8A')
C_ACCENT_BG = HexColor('#EAF1F8')
C_QUOTE = HexColor('#444444')
C_GREY = HexColor('#666666')

styles = getSampleStyleSheet()
style_title_main = ParagraphStyle('titleMain', parent=styles['Title'],
    fontName='STSong-Light', fontSize=22, leading=28,
    textColor=C_PRIMARY, alignment=TA_CENTER, spaceAfter=20)
style_title_sub = ParagraphStyle('titleSub', parent=styles['Title'],
    fontName='STSong-Light', fontSize=36, leading=44,
    textColor=C_PRIMARY, alignment=TA_CENTER, spaceAfter=40)
style_title_sep = ParagraphStyle('titleSep', parent=styles['Normal'],
    fontName='STSong-Light', fontSize=14, leading=20,
    textColor=C_GREY, alignment=TA_CENTER, spaceAfter=30)
style_meta = ParagraphStyle('meta', parent=styles['Normal'],
    fontName='STSong-Light', fontSize=12, leading=18,
    alignment=TA_CENTER, spaceAfter=8)

style_toc_title = ParagraphStyle('tocTitle', parent=styles['Title'],
    fontName='STSong-Light', fontSize=20, leading=28,
    textColor=C_PRIMARY, alignment=TA_CENTER, spaceAfter=20)

style_h1 = ParagraphStyle('h1', parent=styles['Heading1'],
    fontName='STSong-Light', fontSize=18, leading=26,
    textColor=C_PRIMARY, spaceBefore=18, spaceAfter=12)
style_h2 = ParagraphStyle('h2', parent=styles['Heading2'],
    fontName='STSong-Light', fontSize=14, leading=22,
    textColor=C_SECONDARY, spaceBefore=12, spaceAfter=6)
style_h3 = ParagraphStyle('h3', parent=styles['Heading3'],
    fontName='STSong-Light', fontSize=12, leading=18,
    textColor=HexColor('#333333'), spaceBefore=8, spaceAfter=4)

style_body = ParagraphStyle('body', parent=styles['Normal'],
    fontName='STSong-Light', fontSize=11, leading=18,
    alignment=TA_JUSTIFY, firstLineIndent=22, spaceAfter=6)

style_bullet = ParagraphStyle('bullet', parent=styles['Normal'],
    fontName='STSong-Light', fontSize=11, leading=17,
    leftIndent=18, bulletIndent=6, spaceAfter=2)

style_quote = ParagraphStyle('quote', parent=styles['Normal'],
    fontName='STSong-Light', fontSize=11, leading=18,
    leftIndent=24, rightIndent=12, textColor=C_QUOTE, spaceAfter=8)

style_callout = ParagraphStyle('callout', parent=styles['Normal'],
    fontName='STSong-Light', fontSize=11, leading=18,
    leftIndent=12, rightIndent=12, textColor=C_PRIMARY, spaceBefore=6, spaceAfter=6)

style_toc_item = ParagraphStyle('tocItem', parent=styles['Normal'],
    fontName='STSong-Light', fontSize=12, leading=22)

style_toc = ParagraphStyle('toc', parent=styles['Normal'],
    fontName='STSong-Light', fontSize=12, leading=20,
    leftIndent=0, spaceAfter=2)

# 内容
story = []

# ===== 封面 =====
story.append(Spacer(1, 8*cm))
story.append(Paragraph('顺造科技 · AI 项目成果评审', style_title_main))
story.append(Spacer(1, 0.5*cm))
story.append(Paragraph('评 委 手 册', style_title_sub))
story.append(Spacer(1, 0.8*cm))
story.append(Paragraph('— 评委专用 · 内部资料 —', style_title_sep))
story.append(Spacer(1, 1.5*cm))
story.append(Paragraph('版本：V1.0', style_meta))
story.append(Paragraph('编制：AI 项目评审组', style_meta))
story.append(Paragraph('评审日期：D-Day 13:30 — D+1 17:30', style_meta))
story.append(PageBreak())

# ===== 目录 =====
story.append(Paragraph('目  录', style_toc_title))
story.append(Spacer(1, 0.5*cm))

toc_data = [
    ('第 1 章  评委的职责与定位', '3'),
    ('第 2 章  评审日流程（按时间轴）', '5'),
    ('第 3 章  评分三轨详解', '8'),
    ('第 4 章  评分操作规范', '11'),
    ('第 5 章  点评要点（详见独立文件）', '13'),
    ('第 6 章  AI 介入级别判断参考', '15'),
    ('第 7 章  常见问题与处理', '17'),
    ('附录 A  评委一句话自我介绍模板', '19'),
    ('附录 B  应急联络表', '20'),
]
for name, page in toc_data:
    line = f'{name} {"." * 80} {page}'
    story.append(Paragraph(line, style_toc))
story.append(PageBreak())

# ===== 第 1 章 =====
story.append(HRFlowable(width="100%", thickness=2, color=C_PRIMARY, spaceBefore=4, spaceAfter=8))
story.append(Paragraph('第 1 章  评委的职责与定位', style_h1))
story.append(HRFlowable(width="100%", thickness=1, color=C_PRIMARY, spaceBefore=2, spaceAfter=12))

story.append(Paragraph(
    '欢迎各位评委参与顺造科技 AI 项目成果评审。在为期一天半的评审中，您将面对由各业务部门'
    '一线员工亲手改造的 AI 项目——这些项目来自质量、人力、财务、客服、生产、研发等部门，'
    '凝结了小米生态链清洁电器业务一线的真实痛点与一线员工的真实思考。它们可能还很粗糙，'
    '可能还只是提示词级别的小工具，但每一份方案都代表着一个具体的业务场景在 AI 时代的'
    '被重新想象。', style_body))
story.append(Paragraph(
    '在进入具体流程前，请先与我们对齐一个根本的认知：评委不是来挑刺的，评委是来帮忙把项目'
    '变得更好的。我们希望您扮演三个角色——', style_body))

story.append(Paragraph('1.1  评委的三个角色', style_h2))
story.append(Paragraph(
    '第一，严格但友善的鉴赏者。您需要用专业的眼光识别每个项目的真实价值——是停留在表面的 PPT '
    '包装，还是真正深入到业务流程里的再设计？哪些是真正的创新点，哪些是通用方案的套娃？'
    '但严格不等于苛刻，友善不等于放水。请始终记住，对面站着的不是方案，是活生生的人。', style_body))
story.append(Paragraph(
    '第二，建设性的建议者。您给出的每一条建议，都应该让学员在第二天就能动手改进。请避免'
    '"这个不行、要重做"式的否定句，转为"这个亮点可以这样放大"或"如果加入 XX 维度，'
    '会更完整"的建设性表述。', style_body))
story.append(Paragraph(
    '第三，生态共建的引路人。评审不是终点，而是顺造 AI 生态的起点。优秀的方案需要被推广、'
    '被复制、被组合。请用"是否能跨部门复用"作为重要的评判维度。', style_body))

story.append(Paragraph('1.2  评委组合与分工', style_h2))
story.append(Paragraph('本次评审共设 7 位评委，组合结构为"3+1+1+1+1"，具体如下：', style_body))

t = [
    ['序号', '角色定位', '核心关注点'],
    ['1', '公司领导（组长）', '战略价值、组织匹配度、能否在公司层面复制推广'],
    ['2', '公司领导', '业务影响力、与年度战略的契合度'],
    ['3', '公司领导 / 总裁办代表', '对外可展示性、对内激励价值'],
    ['4', '培训经理 / 外部专家', '培训目标达成、学员成长性、内容设计'],
    ['5', '内训师代表', '实操可落地性、是否便于复制到其他部门'],
    ['6', '业务部门负责人', '业务痛点还原度、上线后能否真解决问题'],
    ['7', 'AI 专家（特邀）', 'AI 介入级别、技术合理性、未来扩展性'],
]
tbl = Table(t, colWidths=[2*cm, 5*cm, 9*cm])
tbl.setStyle(TableStyle([
    ('FONT', (0,0), (-1,-1), 'STSong-Light', 10),
    ('FONT', (0,0), (-1,0), 'STSong-Light', 11),
    ('TEXTCOLOR', (0,0), (-1,0), white),
    ('BACKGROUND', (0,0), (-1,0), C_PRIMARY),
    ('GRID', (0,0), (-1,-1), 0.5, C_PRIMARY),
    ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
    ('LEFTPADDING', (0,0), (-1,-1), 6),
    ('RIGHTPADDING', (0,0), (-1,-1), 6),
    ('TOPPADDING', (0,0), (-1,-1), 4),
    ('BOTTOMPADDING', (0,0), (-1,-1), 4),
]))
story.append(tbl)
story.append(Spacer(1, 0.3*cm))

story.append(Paragraph('1.3  评委组组长职责', style_h2))
story.append(Paragraph('组长由公司领导中资历最深者担任，承担以下五项核心职责：', style_body))
for b in [
    '开场致辞：代表评委组在评审启动会上做 3 分钟发言，定调"帮助改进"的评审氛围。',
    '争议仲裁：若评委在 0-3 分或 9-10 分的极端打分上分歧过大，由组长召集当天的 5 分钟碰头会仲裁。',
    '标准守护：监督评分表填写规范，发现明显打分失衡（如所有学员分数都集中在 7-8 分）时及时提醒。',
    '结营总结：在 D+1 下午结营仪式上代表评委组做 10 分钟的总结发言，肯定亮点 + 指出共性短板。',
    '奖项确认：汇总 7 位评委的评分，签字确认最终获奖名单。',
]:
    story.append(Paragraph('• ' + b, style_bullet))

story.append(Paragraph('1.4  评委的红线与绿线', style_h2))
story.append(Paragraph(
    '评委不是来挑刺的，评委是来帮忙把项目变得更好的。这是顺造 AI 评审的底层价值观。', style_quote))

story.append(Paragraph('红线——绝对不能做的事：', style_body))
for b in [
    '在亮分前公开讨论分数（影响其他评委的独立判断）。',
    '在点评中拿自己和学员比较（"我以前做过的比你好"）。',
    '给出无法落地的建议（"你应该用 RAG + Agent + Multi-modal 重新设计"——这种话不是建议，是抬杠）。',
    '当众否定学员（即使方案很差，也要点出 1-2 个值得肯定的地方）。',
]:
    story.append(Paragraph('• ' + b, style_bullet))

story.append(Paragraph('绿线——强烈推荐做的事：', style_body))
for b in [
    '在每位学员路演结束后的 1 分钟内完成打分，避免遗忘细节。',
    '极端分（0-3 / 9-10）必须手写备注理由。',
    '点评时长严格控制在 1.5-2 分钟以内，超时会被计时提醒。',
    '发现共性短板时，在当晚评委碰头会提出，便于组长在结营总结中统一指明。',
]:
    story.append(Paragraph('• ' + b, style_bullet))

# callout
story.append(Spacer(1, 0.2*cm))
callout = Table([[Paragraph(
    '<b>核心原则：</b>先扬后抑，先肯定再建议。永远让学员带着"我还能继续做下去"的劲头离场。',
    ParagraphStyle('call', parent=style_callout, fontName='STSong-Light', textColor=C_PRIMARY))]],
    colWidths=[16*cm])
callout.setStyle(TableStyle([
    ('BACKGROUND', (0,0), (-1,-1), C_ACCENT_BG),
    ('BOX', (0,0), (-1,-1), 1, C_PRIMARY),
    ('LEFTPADDING', (0,0), (-1,-1), 12),
    ('RIGHTPADDING', (0,0), (-1,-1), 12),
    ('TOPPADDING', (0,0), (-1,-1), 8),
    ('BOTTOMPADDING', (0,0), (-1,-1), 8),
]))
story.append(callout)

story.append(PageBreak())

# ===== 第 2 章 =====
story.append(HRFlowable(width="100%", thickness=2, color=C_PRIMARY, spaceBefore=4, spaceAfter=8))
story.append(Paragraph('第 2 章  评审日流程（按时间轴）', style_h1))
story.append(HRFlowable(width="100%", thickness=1, color=C_PRIMARY, spaceBefore=2, spaceAfter=12))

story.append(Paragraph(
    '本次评审分两天进行：D-Day 下午 + D+1 上午为正式评审，D+1 下午为结营仪式。'
    '共评审 12-15 位学员，每位学员 16-18 分钟，全天评审时间约 4.5 小时。'
    '评委需要全程在场，并在评审结束后立即投入评分碰头。', style_body))

story.append(Paragraph('2.1  D-Day（评审第一天 · 下午）', style_h2))
t = [
    ['时间', '环节', '评委动作 / 备注'],
    ['13:00-13:30', '场地布置 + 设备调试', '评委可选择性提前到场查看设备'],
    ['13:30-13:50', '评委签到 + 评分表发放', '评委领取个人评分夹、笔、议程单；签到墙合影'],
    ['13:50-14:00', '评委碰头会（10 分钟）', '组长重申评分三轨 + 极端分规则 + 点评时长'],
    ['14:00-14:15', '评审启动会（全员）', '组长致辞 3 分钟；主持人讲解流程；全体合影'],
    ['14:15-15:30', '评审 1-3 号学员', '每位学员 16-18 分钟，评委独立打分'],
    ['15:30-15:40', '茶歇 1', '评委可短暂讨论整体观察，但不可讨论具体分数'],
    ['15:40-17:00', '评审 4-7 号学员', '继续评审，评委保持专注'],
    ['17:00-17:10', '茶歇 2', '同上'],
    ['17:10-18:00', '评审 8-10 号学员（视人数）', '最后阶段，组长观察评委疲劳度'],
]
tbl = Table(t, colWidths=[3.5*cm, 4.5*cm, 8*cm])
tbl.setStyle(TableStyle([
    ('FONT', (0,0), (-1,-1), 'STSong-Light', 9),
    ('FONT', (0,0), (-1,0), 'STSong-Light', 10),
    ('TEXTCOLOR', (0,0), (-1,0), white),
    ('BACKGROUND', (0,0), (-1,0), C_PRIMARY),
    ('GRID', (0,0), (-1,-1), 0.5, C_PRIMARY),
    ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
    ('LEFTPADDING', (0,0), (-1,-1), 4),
    ('RIGHTPADDING', (0,0), (-1,-1), 4),
    ('TOPPADDING', (0,0), (-1,-1), 3),
    ('BOTTOMPADDING', (0,0), (-1,-1), 3),
]))
story.append(tbl)
story.append(Spacer(1, 0.3*cm))

story.append(Paragraph('2.2  D+1（评审第二天 · 上午 + 下午）', style_h2))
t = [
    ['时间', '环节', '评委动作 / 备注'],
    ['08:30-08:50', '评委签到', '领取昨日未评分表 + 今日评分表'],
    ['08:50-09:00', '评委碰头会', '反馈昨日观察，组长统一今日关注点'],
    ['09:00-10:30', '评审 11-14 号学员', '上午评审 + 茶歇'],
    ['10:30-10:40', '茶歇', '保持精力'],
    ['10:40-12:00', '评审 15-17 号学员（视人数）', '上午最后评审'],
    ['12:00-13:30', '午餐 + 午休', '评委与学员可自由交流，氛围轻松'],
    ['13:30-13:40', '结营仪式 · 项目总结（10 分钟）', '项目负责人做整体回顾'],
    ['13:40-13:45', '评审分数公布（5 分钟）', '由主持人 + 组长公布 6 个奖项归属'],
    ['13:45-14:05', '颁奖（20 分钟）', '6 个奖项依次颁奖，每项约 3 分钟'],
    ['14:05-14:15', '学员代表发言（10 分钟）', '优秀学员代表 + 新人代表各 1 位'],
    ['14:15-14:25', '结业证书（10 分钟）', '全员颁发结业证书'],
    ['14:25-14:35', '评委代表总结（10 分钟）', '组长做评委组总结，肯定 + 共性建议'],
    ['14:35-14:45', '成果交付（10 分钟）', '优秀方案汇编、HTML 模板库、智能体清单的交付'],
    ['14:45-14:55', '领导致辞（10 分钟）', '公司领导做收官发言'],
    ['14:55-15:30', '合影 + 散场', '评委留步参与合影'],
]
tbl = Table(t, colWidths=[3.5*cm, 5*cm, 7.5*cm])
tbl.setStyle(TableStyle([
    ('FONT', (0,0), (-1,-1), 'STSong-Light', 9),
    ('FONT', (0,0), (-1,0), 'STSong-Light', 10),
    ('TEXTCOLOR', (0,0), (-1,0), white),
    ('BACKGROUND', (0,0), (-1,0), C_PRIMARY),
    ('GRID', (0,0), (-1,-1), 0.5, C_PRIMARY),
    ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
    ('LEFTPADDING', (0,0), (-1,-1), 4),
    ('RIGHTPADDING', (0,0), (-1,-1), 4),
    ('TOPPADDING', (0,0), (-1,-1), 3),
    ('BOTTOMPADDING', (0,0), (-1,-1), 3),
]))
story.append(tbl)
story.append(Spacer(1, 0.3*cm))

story.append(Paragraph('2.3  关键节点提醒', style_h2))
for tip in [
    '13:50 评委碰头会 = 评分"宪法时刻"：组长必须在此 10 分钟内统一三轨标准、亮分规则、点评时长。这是后续一切顺畅的基础。',
    '18:00 评委碰头评分 = 争议"消化时刻"：若某位学员 7 位评委打分极差过大（如极差 > 30 分），由组长主持 5 分钟微调讨论，但仅限争议个案。',
    'D+1 14:25 评委代表总结 = 评委"高光时刻"：组长 10 分钟发言将决定整个项目在公司的后续走向——是一次性活动还是 AI 战略起点。请组长务必提前准备。',
]:
    c = Table([[Paragraph(f'<b>关键提示：</b>{tip}',
        ParagraphStyle('call', parent=style_callout, fontName='STSong-Light', textColor=C_PRIMARY))]],
        colWidths=[16*cm])
    c.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), C_ACCENT_BG),
        ('BOX', (0,0), (-1,-1), 1, C_PRIMARY),
        ('LEFTPADDING', (0,0), (-1,-1), 12),
        ('RIGHTPADDING', (0,0), (-1,-1), 12),
        ('TOPPADDING', (0,0), (-1,-1), 8),
        ('BOTTOMPADDING', (0,0), (-1,-1), 8),
    ]))
    story.append(c)
    story.append(Spacer(1, 0.2*cm))

story.append(PageBreak())

# ===== 第 3 章 =====
story.append(HRFlowable(width="100%", thickness=2, color=C_PRIMARY, spaceBefore=4, spaceAfter=8))
story.append(Paragraph('第 3 章  评分三轨详解', style_h1))
story.append(HRFlowable(width="100%", thickness=1, color=C_PRIMARY, spaceBefore=2, spaceAfter=12))

story.append(Paragraph(
    '本评审采用"三轨制"评分体系，将学员的综合表现拆解为三个独立维度。三个轨道在最终总分中按权重合并，避免一项极强掩盖其他短板。', style_body))

t = [
    ['评分轨道', '权重', '考察重点', '核心问题'],
    ['轨道 A：AI 方案价值', '40%', '业务痛点还原度、AI 介入合理性、可推广性', '这个方案真的能解决问题吗？'],
    ['轨道 B：AI 产出物质量', '35%', '提示词手册、HTML 页面、智能体、文档质量', '做出来的东西能不能用？'],
    ['轨道 C：路演表现', '25%', '演讲结构、时间控制、Q&A 应答、台风', '这个人能不能把项目讲清楚？'],
]
tbl = Table(t, colWidths=[4*cm, 1.5*cm, 6*cm, 4.5*cm])
tbl.setStyle(TableStyle([
    ('FONT', (0,0), (-1,-1), 'STSong-Light', 10),
    ('FONT', (0,0), (-1,0), 'STSong-Light', 11),
    ('TEXTCOLOR', (0,0), (-1,0), white),
    ('BACKGROUND', (0,0), (-1,0), C_PRIMARY),
    ('GRID', (0,0), (-1,-1), 0.5, C_PRIMARY),
    ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
    ('LEFTPADDING', (0,0), (-1,-1), 6),
    ('RIGHTPADDING', (0,0), (-1,-1), 6),
    ('TOPPADDING', (0,0), (-1,-1), 4),
    ('BOTTOMPADDING', (0,0), (-1,-1), 4),
]))
story.append(tbl)
story.append(Spacer(1, 0.3*cm))
story.append(Paragraph(
    '每轨 5 个子项 × 10 分 = 单轨满分 50 分。三轨加权后最终得分 = A×0.4 + B×0.35 + C×0.25。',
    style_body))

story.append(Paragraph('3.1  轨道 A：AI 方案价值（权重 40%）', style_h2))
story.append(Paragraph('AI 方案价值是最核心的轨道，考察的是这件事值不值得做和做得好不好。', style_body))

for h3, body_lines in [
    ('子项 A1：业务痛点还原度（10 分）', [
        '考察学员是否真的理解自己部门的痛点。',
        '9-10 分：清晰说出痛点的量（每月多花 40 小时）和质（出错率 15%）。',
        '7-8 分：清楚描述痛点但缺乏数据。',
        '5-6 分：知道有痛点但描述模糊。',
        '0-4 分：痛点是臆造的或套模板的。',
    ]),
    ('子项 A2：AI 介入合理性（10 分）', [
        '考察 AI 是否是最合适的解法，而不是为了 AI 而 AI。',
        '9-10 分：能说清为什么是 AI 不是流程改造 / RPA / 加人。',
        '7-8 分：能合理推演 AI 价值但没明确比较其他方案。',
        '0-4 分：明明普通脚本能解决，非要用大模型（杀鸡用牛刀）。',
    ]),
    ('子项 A3：业务流程再设计（10 分）', [
        '考察学员是否真的动了流程，还是只在动作上加了 AI。',
        '9-10 分：方案中能看出至少 2 个流程节点被重新设计。',
        '7-8 分：1 个流程节点有改造。',
        '0-4 分：原流程不动，只是加了个 AI 助手。',
    ]),
    ('子项 A4：可推广性 / 可复用性（10 分）', [
        '考察方案是否能跨部门、跨场景复制。',
        '9-10 分：方案有清晰的复用接口（如提示词模板、API、HTML 嵌入方式）。',
        '7-8 分：有复用潜力但接口不清晰。',
        '0-4 分：完全是本部门定制，无法推广。',
    ]),
    ('子项 A5：上线计划与风险（10 分）', [
        '考察学员是否考虑过做出来之后怎么办。',
        '9-10 分：有明确的上线时间表、试点部门、风险预案。',
        '7-8 分：有计划但风险考虑不全。',
        '0-4 分：完全没有后续计划。',
    ]),
]:
    story.append(Paragraph(h3, style_h3))
    for b in body_lines:
        if b.startswith(('9-','7-','5-','0-','1-','2-','3-','4-','6-','8-')):
            story.append(Paragraph('• ' + b, style_bullet))
        else:
            story.append(Paragraph(b, style_body))

story.append(Paragraph('3.2  轨道 B：AI 产出物质量（权重 35%）', style_h2))
story.append(Paragraph('AI 产出物是看得见摸得着的部分，是评审的硬通货。', style_body))
for h3, body_lines in [
    ('子项 B1：提示词手册质量（10 分）', [
        '9-10 分：结构化、有版本号、有反例、有迭代记录。',
        '7-8 分：有结构但不够完整。',
        '0-4 分：就是几段对话截图。',
    ]),
    ('子项 B2：HTML 页面 / 工具页面（10 分）', [
        '9-10 分：可直接打开使用，UI 友好，响应快。',
        '7-8 分：能跑通但 UI 粗糙。',
        '0-4 分：打不开或乱码。',
    ]),
    ('子项 B3：智能体配置（10 分）', [
        '9-10 分：在 Dify / 飞书 Aily / Coze 上跑通，有完整工作流。',
        '7-8 分：能演示但工作流不完整。',
        '0-4 分：只是 PPT 截图。',
    ]),
    ('子项 B4：数据 / 案例 / 效果验证（10 分）', [
        '9-10 分：有真实数据对比（前后效率、出错率）。',
        '7-8 分：有定性描述但缺数据。',
        '0-4 分：完全没有效果验证。',
    ]),
    ('子项 B5：文档 / 知识沉淀完整性（10 分）', [
        '9-10 分：方案说明文档 + 使用手册 + FAQ 完整。',
        '7-8 分：有主要文档但缺 FAQ。',
        '0-4 分：没有任何文档。',
    ]),
]:
    story.append(Paragraph(h3, style_h3))
    for b in body_lines:
        story.append(Paragraph('• ' + b, style_bullet))

story.append(Paragraph('3.3  轨道 C：路演表现（权重 25%）', style_h2))
story.append(Paragraph('路演能力是放大器——同样的方案，演讲好的人能拿到 90 分，演讲差的人只能拿 60 分。', style_body))
for h3, body_lines in [
    ('子项 C1：演讲结构清晰度（10 分）', [
        '9-10 分：开头—痛点—方案—效果—展望，逻辑严密。',
        '7-8 分：有结构但偶尔跑题。',
        '0-4 分：流水账或 PPT 朗读。',
    ]),
    ('子项 C2：时间控制（10 分）', [
        '9-10 分：严格 10 分钟 ±30 秒。',
        '7-8 分：8-12 分钟之间。',
        '0-4 分：超时严重（>15 分钟或 <5 分钟）。',
    ]),
    ('子项 C3：Q&A 应答（10 分）', [
        '9-10 分：答不上来时坦诚承认 + 给出后续学习计划。',
        '7-8 分：能回答主要问题，个别卡壳。',
        '0-4 分：答非所问或情绪化反驳。',
    ]),
    ('子项 C4：台风与表达（10 分）', [
        '9-10 分：脱稿、自信、有眼神交流。',
        '7-8 分：基本脱稿，偶尔看 PPT。',
        '0-4 分：全程念稿或声音太小。',
    ]),
    ('子项 C5：AI 思维体现（10 分）', [
        '这是本项目的特色轨——是否在演讲中自然流露出 AI 时代的新思维方式。',
        '9-10 分：演讲中能自然讲出"我让 AI 做了 X，所以我能专注做 Y"——人机协作的清晰边界。',
        '7-8 分：能体现 AI 思维但表达生硬。',
        '0-4 分：完全把 AI 当黑盒在用。',
    ]),
]:
    story.append(Paragraph(h3, style_h3))
    for b in body_lines:
        if b.startswith(('9-','7-','5-','0-','1-','2-','3-','4-','6-','8-')):
            story.append(Paragraph('• ' + b, style_bullet))
        else:
            story.append(Paragraph(b, style_body))

story.append(PageBreak())

# ===== 第 4 章 =====
story.append(HRFlowable(width="100%", thickness=2, color=C_PRIMARY, spaceBefore=4, spaceAfter=8))
story.append(Paragraph('第 4 章  评分操作规范', style_h1))
story.append(HRFlowable(width="100%", thickness=1, color=C_PRIMARY, spaceBefore=2, spaceAfter=12))

story.append(Paragraph(
    '评分是评审中最敏感的环节。同一个学员，评委之间的分数如果出现 20 分以上的极差，'
    '不仅影响评奖公正性，更会影响学员对评审的信任。本章统一所有评委的打分动作。', style_body))

story.append(Paragraph('4.1  打分时机', style_h2))
story.append(Paragraph('请严格遵守以下打分时机：', style_body))
for b in [
    '路演结束 + Q&A 结束 = 立即开始打分。',
    '听完点评后 = 不再修改分数。',
]:
    story.append(Paragraph('• ' + b, style_bullet))
story.append(Paragraph(
    '原因：点评是评委之间的"二次认知"过程，听完彼此点评后容易受锚定效应影响。'
    '个人独立判断的价值在于"独立"两个字。', style_body))
# callout
c = Table([[Paragraph(
    '<b>黄金一分钟：</b>路演结束后 1 分钟内完成打分。此时学员表现最鲜活，遗忘曲线尚未启动。',
    ParagraphStyle('call', parent=style_callout, fontName='STSong-Light', textColor=C_PRIMARY))]],
    colWidths=[16*cm])
c.setStyle(TableStyle([
    ('BACKGROUND', (0,0), (-1,-1), C_ACCENT_BG),
    ('BOX', (0,0), (-1,-1), 1, C_PRIMARY),
    ('LEFTPADDING', (0,0), (-1,-1), 12), ('RIGHTPADDING', (0,0), (-1,-1), 12),
    ('TOPPADDING', (0,0), (-1,-1), 8), ('BOTTOMPADDING', (0,0), (-1,-1), 8),
]))
story.append(c)
story.append(Spacer(1, 0.2*cm))

story.append(Paragraph('4.2  亮分规则', style_h2))
story.append(Paragraph('本评审采用"评委同步亮分"制，规则如下：', style_body))
for b in [
    '主持人喊"请评委亮分"后，1 分钟提示。',
    '提示后 30 秒内必须亮分。',
    '亮分方式：举评分牌 / 亮手机评分页 / 翻评分夹——任选其一，提前统一。',
    '亮分后由主持人唱分（按评委序号从 1 到 7）。',
    '7 位评委的分数去掉一个最高分、去掉一个最低分，剩余 5 位取算术平均 = 该学员最终得分。',
]:
    story.append(Paragraph('• ' + b, style_bullet))
story.append(Paragraph('极端分处理：', style_body))
for b in [
    '某位评委打分 ≤3 分或 ≥9 分时，该评委需在评分表"备注"栏手写理由。',
    '当晚 18:00 碰头会上，由组长组织快速过一遍所有极端分，确认无恶意打分。',
    '若发现评委持续偏激（如连续 3 位学员都打 9-10 分），由组长单独沟通。',
]:
    story.append(Paragraph('• ' + b, style_bullet))

story.append(Paragraph('4.3  独立打分原则', style_h2))
story.append(Paragraph('绝对禁止以下行为：', style_body))
for b in [
    '评委之间公开讨论分数。',
    '评委在学员离场前透露分数。',
    '评委在茶歇时议论"刚才那位学员真差"——这会污染后续打分。',
    '组长在碰头会上"对标"——即不允许说"上一位打了 7 分，这一位也应该 7 分左右"。',
]:
    story.append(Paragraph('• ' + b, style_bullet))
story.append(Paragraph('允许的讨论：', style_body))
for b in [
    '讨论方案本身（"这个思路挺有意思"）。',
    '讨论评分标准的理解差异（"我觉得 B2 这个 10 分标准可能偏严了"）。',
    '讨论共性短板（"今天 5 个学员的 HTML 普遍弱，是不是要统一提醒一下"）。',
]:
    story.append(Paragraph('• ' + b, style_bullet))

story.append(Paragraph('4.4  评分表填写规范', style_h2))
story.append(Paragraph('每位评委持有独立的"评分夹"，内含：', style_body))
for b in [
    '学员名单 + 顺序表（1 张）。',
    '每人一页的详细评分表（12-17 张，每位学员 1 张）。',
    '空白便签（用于写"极端分理由"或"共性观察"）。',
    '一支红笔 + 一支蓝笔（红笔打分数，蓝笔写备注）。',
]:
    story.append(Paragraph('• ' + b, style_bullet))
story.append(Paragraph('评分表填写示例（每位学员 1 张，A 轨道）：', style_body))

t = [
    ['轨道 / 子项', '分值', '打分', '备注'],
    ['A1 业务痛点还原度', '/ 10', '', ''],
    ['A2 AI 介入合理性', '/ 10', '', ''],
    ['A3 业务流程再设计', '/ 10', '', ''],
    ['A4 可推广性', '/ 10', '', ''],
    ['A5 上线计划与风险', '/ 10', '', ''],
    ['A 轨道小计', '/ 50', '', ''],
]
tbl = Table(t, colWidths=[5*cm, 2*cm, 2*cm, 7*cm])
tbl.setStyle(TableStyle([
    ('FONT', (0,0), (-1,-1), 'STSong-Light', 10),
    ('FONT', (0,0), (-1,0), 'STSong-Light', 11),
    ('TEXTCOLOR', (0,0), (-1,0), white),
    ('BACKGROUND', (0,0), (-1,0), C_PRIMARY),
    ('GRID', (0,0), (-1,-1), 0.5, C_PRIMARY),
    ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
    ('LEFTPADDING', (0,0), (-1,-1), 6), ('RIGHTPADDING', (0,0), (-1,-1), 6),
    ('TOPPADDING', (0,0), (-1,-1), 4), ('BOTTOMPADDING', (0,0), (-1,-1), 4),
]))
story.append(tbl)

story.append(PageBreak())

# ===== 第 5 章 =====
story.append(HRFlowable(width="100%", thickness=2, color=C_PRIMARY, spaceBefore=4, spaceAfter=8))
story.append(Paragraph('第 5 章  点评要点（详见独立文件）', style_h1))
story.append(HRFlowable(width="100%", thickness=1, color=C_PRIMARY, spaceBefore=2, spaceAfter=12))

story.append(Paragraph(
    '点评是评委与学员"面对面"交流的珍贵时刻。1.5-2 分钟的点评，决定了学员接下来 3 个月的改进方向。'
    '本章给出点评的核心原则，详细话术见配套的《点评要点》文件。', style_body))

story.append(Paragraph('5.1  点评的 5 句话结构', style_h2))
story.append(Paragraph('每位学员的点评严格遵循 5 句话结构：', style_body))
story.append(Paragraph('第 1 句 · 总结（一句话说清这个学员做了什么）', style_body))
story.append(Paragraph(
    '刚才 XXX 同学带来的是质量部门 8D 报告的 AI 自动审核方案，针对的是当前 8D 报告撰写耗时 4 小时、出错率 15% 的痛点。',
    style_quote))
story.append(Paragraph('第 2 句 · 肯定 1（最强的一点）', style_body))
story.append(Paragraph(
    '我印象最深的是你把 8D 报告的结构做了"要素拆解 → 知识图谱 → 智能体工作流"的三段式设计，这个思路非常扎实。',
    style_quote))
story.append(Paragraph('第 3 句 · 肯定 2（最有价值的一点）', style_body))
story.append(Paragraph(
    '更重要的是，你把跨部门的对接节点也考虑进来了，这个"边界感"在所有学员里是非常少见的。',
    style_quote))
story.append(Paragraph('第 4 句 · 核心建议（1 条具体的改进点）', style_body))
story.append(Paragraph(
    '如果下个迭代能加入"跨部门推广场景"——比如售后部门如何复用你的方案——整个项目的价值会再上一个台阶。',
    style_quote))
story.append(Paragraph('第 5 句 · 鼓励', style_body))
story.append(Paragraph(
    '我相信你继续做下去，质量部门的 AI 化会从你这里开始。',
    style_quote))

story.append(Paragraph('5.2  点评时长与节奏', style_h2))
story.append(Paragraph('严格控制 1.5-2 分钟：', style_body))
for b in [
    '少于 1 分钟：草率、不尊重学员。',
    '2 分钟左右：理想状态。',
    '超过 2.5 分钟：主持人会举"剩余 30 秒"牌。',
    '超过 3 分钟：主持人会直接打断（评委不打断学员，但主持人打断评委是允许的）。',
]:
    story.append(Paragraph('• ' + b, style_bullet))

story.append(Paragraph('5.3  差异化点评原则', style_h2))
story.append(Paragraph('对不同"启动基线"的学员，点评侧重不同：', style_body))
story.append(Paragraph(
    '对"高启动基线"学员（已有 AI 项目上线经验 / 技术背景强 / 之前参与过 AI 培训）：直接点出问题，'
    '给出"小步快跑"建议。例如："你的方案已经非常成熟，下一步的关键是"从工具到生态"——'
    '建议把提示词模板沉淀为部门级 SOP。"', style_quote))
story.append(Paragraph(
    '对"低启动基线"学员（首次接触 AI / 业务一线 / 原本对写代码有畏惧）：先肯定突破，'
    '再给"如何扩大"建议。例如："作为第一次接触 AI 的同事，你能在两周内做出能跑通的 HTML 工具，'
    '这本身就是突破。下一步建议你先在班组内找 3 个同事试用，收集真实反馈，再决定是否推广。"',
    style_quote))

c = Table([[Paragraph(
    '<b>点评禁忌：</b>不要直接说"这个不行" / 不要拿自己和学员比较 / 不要给出无法落地的建议 / 不要抢学员的功劳。',
    ParagraphStyle('call', parent=style_callout, fontName='STSong-Light', textColor=C_PRIMARY))]],
    colWidths=[16*cm])
c.setStyle(TableStyle([
    ('BACKGROUND', (0,0), (-1,-1), C_ACCENT_BG),
    ('BOX', (0,0), (-1,-1), 1, C_PRIMARY),
    ('LEFTPADDING', (0,0), (-1,-1), 12), ('RIGHTPADDING', (0,0), (-1,-1), 12),
    ('TOPPADDING', (0,0), (-1,-1), 8), ('BOTTOMPADDING', (0,0), (-1,-1), 8),
]))
story.append(c)

story.append(PageBreak())

# ===== 第 6 章 =====
story.append(HRFlowable(width="100%", thickness=2, color=C_PRIMARY, spaceBefore=4, spaceAfter=8))
story.append(Paragraph('第 6 章  AI 介入级别判断参考', style_h1))
story.append(HRFlowable(width="100%", thickness=1, color=C_PRIMARY, spaceBefore=2, spaceAfter=12))

story.append(Paragraph(
    '本次评审的项目在"AI 介入深度"上有天壤之别——有的学员只是写了一个提示词，'
    '有的学员做出了能在飞书 Aily 上跑的智能体。为了公平评审，我们采用"AI 介入级别 L1-L5"'
    '作为评委的快速判断框架。', style_body))

story.append(Paragraph('6.1  L1-L5 级别定义', style_h2))
t = [
    ['级别', '名称', '典型形态', '评委快速识别'],
    ['L1', '一次性提示词', '一段对话截图、单个 prompt', '看手册里有没有"使用场景"章节'],
    ['L2', '团队共用提示词', '提示词模板、版本号、迭代记录', '看手册里有没有"团队使用指南"章节'],
    ['L3', '多轮结构化对话', '提示词链、CoT、分步 Prompt', '看手册里有没有"多轮示例"章节'],
    ['L4', '工具集成', 'Dify 工作流、飞书 Aily、Coze 智能体', '看 HTML 页面能不能直接打开 / 智能体能否跑通'],
    ['L5', '智能体自动化', '自动触发、自动反馈、人机协作闭环', '看数据 / 案例 / 效果验证章节是否有真实运行数据'],
]
tbl = Table(t, colWidths=[1.5*cm, 3*cm, 5.5*cm, 6*cm])
tbl.setStyle(TableStyle([
    ('FONT', (0,0), (-1,-1), 'STSong-Light', 9),
    ('FONT', (0,0), (-1,0), 'STSong-Light', 10),
    ('TEXTCOLOR', (0,0), (-1,0), white),
    ('BACKGROUND', (0,0), (-1,0), C_PRIMARY),
    ('GRID', (0,0), (-1,-1), 0.5, C_PRIMARY),
    ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
    ('LEFTPADDING', (0,0), (-1,-1), 4), ('RIGHTPADDING', (0,0), (-1,-1), 4),
    ('TOPPADDING', (0,0), (-1,-1), 3), ('BOTTOMPADDING', (0,0), (-1,-1), 3),
]))
story.append(tbl)
story.append(Spacer(1, 0.3*cm))

story.append(Paragraph('6.2  评委快速判断三步法', style_h2))
story.append(Paragraph('Step 1：看手册结构。1 分钟翻完手册的目录和章节，判断 L1-L5 级别。', style_body))
story.append(Paragraph('Step 2：看 HTML 页面。如果有 HTML，直接打开看是否可交互。', style_body))
story.append(Paragraph('Step 3：看智能体 / 数据。如果学员说"我做了智能体"，请他当场演示。', style_body))
story.append(Paragraph('常见误判提醒：', style_body))
for b in [
    '把"PPT 做得漂亮"误判为 L4——PPT 是包装，不是 AI 介入。',
    '把"用了 ChatGPT"误判为 L2——这可能只是 L1。',
    '把"流程图"误判为"智能体"——流程图是设计，智能体是能跑的工具。',
]:
    story.append(Paragraph('• ' + b, style_bullet))

story.append(Paragraph('6.3  按级别的点评角度', style_h2))
story.append(Paragraph('不同级别的项目，点评侧重不同：', style_body))
t = [
    ['级别', '肯定点', '建议点'],
    ['L1', '使用意识已经觉醒', '团队化——把个人提示词变成团队模板'],
    ['L2', '团队化能力已具备', '流程化——把模板嵌进业务流程'],
    ['L3', '结构化能力强', '工具化——把对话链变成可复用工具'],
    ['L4', '工具集成能力强', '全流程闭环——从触发到反馈的自动化'],
    ['L5', '自动化能力强', '持续迭代机制——版本管理 + 效果监控'],
]
tbl = Table(t, colWidths=[1.5*cm, 6*cm, 8.5*cm])
tbl.setStyle(TableStyle([
    ('FONT', (0,0), (-1,-1), 'STSong-Light', 10),
    ('FONT', (0,0), (-1,0), 'STSong-Light', 11),
    ('TEXTCOLOR', (0,0), (-1,0), white),
    ('BACKGROUND', (0,0), (-1,0), C_PRIMARY),
    ('GRID', (0,0), (-1,-1), 0.5, C_PRIMARY),
    ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
    ('LEFTPADDING', (0,0), (-1,-1), 6), ('RIGHTPADDING', (0,0), (-1,-1), 6),
    ('TOPPADDING', (0,0), (-1,-1), 4), ('BOTTOMPADDING', (0,0), (-1,-1), 4),
]))
story.append(tbl)

story.append(PageBreak())

# ===== 第 7 章 =====
story.append(HRFlowable(width="100%", thickness=2, color=C_PRIMARY, spaceBefore=4, spaceAfter=8))
story.append(Paragraph('第 7 章  常见问题与处理', style_h1))
story.append(HRFlowable(width="100%", thickness=1, color=C_PRIMARY, spaceBefore=2, spaceAfter=12))

story.append(Paragraph('7.1  学员侧常见问题', style_h2))
for h3, lines in [
    ('问题 1：学员路演超时（>12 分钟）', [
        '处理流程：',
        '11 分钟：主持人举黄牌"剩余 1 分钟"。',
        '12 分钟：主持人举红牌并提示"请用 30 秒收尾"。',
        '13 分钟仍未收尾：主持人直接打断，"感谢 XXX 的分享，请评委准备点评"。',
        '评委打分时：路演超时可在"路演表现 C2 时间控制"项酌情扣分，但不直接影响 A、B 轨。',
    ]),
    ('问题 2：学员过度紧张 / 卡壳', [
        '处理流程：',
        '主持人主动引导："不着急，我们喝口水再来"。',
        '评委可发起"破冰提问"——提一个简单问题让学员回答，帮他进入状态。',
        '如学员实在无法继续：主持人接话"我们看到 XXX 准备得非常用心，下面请评委基于现有材料做点评"，跳过 Q&A。',
        '点评中应给予更多肯定——紧张本身不应被扣分。',
    ]),
    ('问题 3：学员方案被评委现场质疑，氛围紧张', [
        '处理流程：',
        '由组长或主持人主动缓和："这个点我们记下来，会后单独沟通"。',
        '如学员情绪激动：主持人请学员先回座休息，评委继续完成打分。',
        '绝对禁止评委与学员当面对峙。',
    ]),
]:
    story.append(Paragraph(h3, style_h3))
    for b in lines:
        if b.endswith('：') or b.endswith(':'):
            story.append(Paragraph(b, style_body))
        else:
            story.append(Paragraph('• ' + b, style_bullet))

story.append(Paragraph('7.2  技术侧常见问题', style_h2))
for h3, lines in [
    ('问题 4：设备故障（投影 / 电脑 / 网络）', [
        '处理流程：',
        '5 分钟内可恢复：现场调试，评委可先短暂休场。',
        '5-15 分钟：启动 B 计划（用备用电脑 / 手机投屏）。',
        '大于 15 分钟：评委按"学员手册 + 提问"完成评审，路演分 C1/C4 酌情处理（设备原因不扣学员分）。',
        '详细预案见《应急预案》（由其他 agent 负责）。',
    ]),
    ('问题 5：HTML 页面打不开 / 智能体演示失败', [
        '处理流程：',
        '鼓励学员用截图 + 口述完成介绍。',
        '评委可在"产出物质量"轨酌情扣分（B2 / B3 项减 1-2 分），但不应一票否决。',
    ]),
]:
    story.append(Paragraph(h3, style_h3))
    for b in lines:
        if b.endswith('：') or b.endswith(':'):
            story.append(Paragraph(b, style_body))
        else:
            story.append(Paragraph('• ' + b, style_bullet))

story.append(Paragraph('7.3  评委侧常见问题', style_h2))
for h3, lines in [
    ('问题 6：评委意见分歧巨大', [
        '处理流程：',
        '当场不公开讨论分数（避免锚定）。',
        '当晚 18:00 碰头会上由组长主持 5 分钟微调讨论，仅限极差 > 30 分的争议个案。',
        '若仍无法统一：尊重原始打分，最终得分按"去最高去最低取平均"计算。',
    ]),
    ('问题 7：评委连续给高分 / 低分', [
        '处理流程：',
        '由组长在茶歇时私下沟通，了解是评分标准理解差异还是其他原因。',
        '如属"慈悲分"：提醒评委"评分是为了让优秀者更突出，不是为了不伤人"。',
        '如属"敌意分"：立即制止，严重时取消该评委资格。',
    ]),
    ('问题 8：评委临时缺席', [
        '处理流程：',
        'D-Day 当天评委组至少保证 5 人到场。',
        '如仅 5 人到场：去掉最高最低取 3 人平均。',
        '如少于 5 人：评审延期。',
        '评委组组长原则上不可缺席。',
    ]),
]:
    story.append(Paragraph(h3, style_h3))
    for b in lines:
        if b.endswith('：') or b.endswith(':'):
            story.append(Paragraph(b, style_body))
        else:
            story.append(Paragraph('• ' + b, style_bullet))

story.append(PageBreak())

# ===== 附录 =====
story.append(HRFlowable(width="100%", thickness=2, color=C_PRIMARY, spaceBefore=4, spaceAfter=8))
story.append(Paragraph('附录 A  评委一句话自我介绍模板', style_h1))
story.append(HRFlowable(width="100%", thickness=1, color=C_PRIMARY, spaceBefore=2, spaceAfter=12))
story.append(Paragraph('评审启动会上，每位评委 30 秒自我介绍。建议用以下格式：', style_body))
story.append(Paragraph(
    '我是 [姓名]，[职务]，[与 AI / 业务的关联]。今天的评审我会重点关注 [1 个维度]。',
    style_quote))
story.append(Paragraph('示例：', style_body))
story.append(Paragraph(
    '我是王总，集团副总裁，主管研发与供应链。今天的评审我会重点关注方案的"可落地性"——'
    '再好的方案，做不出来就是 PPT。', style_quote))
story.append(Paragraph(
    '我是陈老师，外部 AI 培训专家。今天的评审我会重点关注 AI 介入的"合理性"，'
    '看大家是不是把简单问题复杂化了。', style_quote))
story.append(Paragraph(
    '我是刘经理，质量部门负责人。今天的评审我会重点关注"业务痛点还原度"，'
    '看看大家是不是真的懂业务。', style_quote))

story.append(HRFlowable(width="100%", thickness=2, color=C_PRIMARY, spaceBefore=8, spaceAfter=8))
story.append(Paragraph('附录 B  应急联络表', style_h1))
story.append(HRFlowable(width="100%", thickness=1, color=C_PRIMARY, spaceBefore=2, spaceAfter=12))

t = [
    ['角色', '姓名 / 联系电话', '职责'],
    ['评委组组长', '[姓名] / [电话]', '争议仲裁 / 结营总结'],
    ['项目负责人', '[姓名] / [电话]', '流程协调 / 应急决策'],
    ['技术支持', '[姓名] / [电话]', '设备故障 / 投屏调试'],
    ['主持人', '[姓名] / [电话]', '流程推进 / 学员引导'],
    ['场地协调', '[姓名] / [电话]', '茶歇 / 用餐 / 物料'],
    ['医疗应急', '[姓名] / [电话]', '学员 / 评委身体不适'],
    ['摄影摄像', '[姓名] / [电话]', '记录 / 直播 / 合影'],
]
tbl = Table(t, colWidths=[4*cm, 5*cm, 7*cm])
tbl.setStyle(TableStyle([
    ('FONT', (0,0), (-1,-1), 'STSong-Light', 10),
    ('FONT', (0,0), (-1,0), 'STSong-Light', 11),
    ('TEXTCOLOR', (0,0), (-1,0), white),
    ('BACKGROUND', (0,0), (-1,0), C_PRIMARY),
    ('GRID', (0,0), (-1,-1), 0.5, C_PRIMARY),
    ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
    ('LEFTPADDING', (0,0), (-1,-1), 6), ('RIGHTPADDING', (0,0), (-1,-1), 6),
    ('TOPPADDING', (0,0), (-1,-1), 4), ('BOTTOMPADDING', (0,0), (-1,-1), 4),
]))
story.append(tbl)

# 封底
story.append(PageBreak())
story.append(Spacer(1, 8*cm))
story.append(Paragraph('— 评委手册结束 —',
    ParagraphStyle('end1', parent=styles['Normal'], fontName='STSong-Light',
                   fontSize=14, textColor=C_GREY, alignment=TA_CENTER)))
story.append(Spacer(1, 0.5*cm))
story.append(Paragraph('祝评审顺利，祝学员成长！',
    ParagraphStyle('end2', parent=styles['Normal'], fontName='STSong-Light',
                   fontSize=12, textColor=C_GREY, alignment=TA_CENTER)))
story.append(Paragraph('顺造科技 · AI 项目评审组',
    ParagraphStyle('end3', parent=styles['Normal'], fontName='STSong-Light',
                   fontSize=12, textColor=C_GREY, alignment=TA_CENTER)))

# 页脚
def add_footer(canvas, doc_):
    canvas.saveState()
    canvas.setFont('STSong-Light', 9)
    canvas.setFillColor(C_GREY)
    canvas.drawString(2.5*cm, 1.5*cm, '顺造科技 · AI 项目成果评审 · 评委手册')
    canvas.drawRightString(A4[0] - 2.5*cm, 1.5*cm, f'第 {doc_.page} 页')
    canvas.restoreState()

doc.build(story, onFirstPage=add_footer, onLaterPages=add_footer)
print('OK:', OUT)
print('Size:', os.path.getsize(OUT), 'bytes')
