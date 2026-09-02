from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable
from reportlab.lib import colors
from reportlab.lib.units import cm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
import os

# Register Chinese font
font_paths = [
    'C:/Windows/Fonts/simhei.ttf',
    'C:/Windows/Fonts/msyh.ttc',
    '/usr/share/fonts/truetype/wqy/wqy-microhei.ttc',
    'C:/Python314/Lib/site-packages/reportlab/fonts/WenQuanYiMicroHei.ttf'
]
chinese_font = None
for fp in font_paths:
    if os.path.exists(fp):
        try:
            pdfmetrics.registerFont(TTFont('ChineseFont', fp))
            chinese_font = 'ChineseFont'
            print(f'Registered font: {fp}')
            break
        except:
            pass

if not chinese_font:
    chinese_font = 'Helvetica'
    print('Using Helvetica (Chinese not available)')

output_path = 'D:/新课开发/2026核心课/行动计划优化/完整课程包/07-认证与质量/认证讲师须知.pdf'

doc = SimpleDocTemplate(
    output_path,
    pagesize=A4,
    rightMargin=2*cm, leftMargin=2*cm,
    topMargin=2*cm, bottomMargin=2*cm
)

styles = getSampleStyleSheet()

# Custom styles
title_style = ParagraphStyle(
    'CustomTitle',
    parent=styles['Heading1'],
    fontName=chinese_font,
    fontSize=18,
    spaceAfter=20,
    alignment=1,  # center
    textColor=colors.HexColor('#1E40C9')
)

heading_style = ParagraphStyle(
    'CustomHeading',
    parent=styles['Heading2'],
    fontName=chinese_font,
    fontSize=13,
    spaceBefore=15,
    spaceAfter=8,
    textColor=colors.HexColor('#1E40C9')
)

subheading_style = ParagraphStyle(
    'CustomSubHeading',
    parent=styles['Heading3'],
    fontName=chinese_font,
    fontSize=11,
    spaceBefore=10,
    spaceAfter=5,
    textColor=colors.HexColor('#14171A')
)

body_style = ParagraphStyle(
    'CustomBody',
    parent=styles['Normal'],
    fontName=chinese_font,
    fontSize=10,
    spaceBefore=3,
    spaceAfter=3,
    leading=14
)

warning_style = ParagraphStyle(
    'Warning',
    parent=styles['Normal'],
    fontName=chinese_font,
    fontSize=10,
    spaceBefore=5,
    spaceAfter=5,
    textColor=colors.HexColor('#C96A00'),
    borderColor=colors.HexColor('#C96A00'),
    borderWidth=1,
    borderPadding=5
)

content = []

# Title
content.append(Paragraph('认证讲师须知', title_style))
content.append(Paragraph('《让行动计划回到现实——AI时代方案靠谱化工作坊》', ParagraphStyle(
    'Subtitle', parent=body_style, alignment=1, fontSize=11, spaceAfter=5
)))
content.append(Paragraph('V1.0-20260813', ParagraphStyle(
    'Version', parent=body_style, alignment=1, fontSize=9, textColor=colors.grey, spaceAfter=20
)))
content.append(HRFlowable(width='100%', thickness=1, color=colors.HexColor('#1E40C9'), spaceAfter=15))

# Section 1: 授课资格条件
content.append(Paragraph('一、授课资格条件', heading_style))
content.append(Paragraph('1. 完成版权课程认证培训并通过考核', body_style))
content.append(Paragraph('2. 熟悉五步加工线（验真→预演→诊断→分配→行为化）全部工位操作', body_style))
content.append(Paragraph('3. 熟悉五张工具表（《靠谱度体检报告》《触发式风险应对表》《任务落地诊断表》《人机任务分配表》《行动计划2.0》）的填写方法', body_style))
content.append(Paragraph('4. 认同并能准确传达"技控大于人控"核心方法论', body_style))
content.append(Paragraph('5. 具备至少2次以上的工作坊带场经验（可与认证培训联动）', body_style))

# Section 2: 可本地化项与禁改项
content.append(Paragraph('二、可本地化项与禁改项', heading_style))

# Table for localizable vs fixed items
table_data = [
    ['类别', '可调整内容', '不可更改内容'],
    ['案例', '可替换为客户所在行业/地区的实际案例', '案例分析的逻辑框架与填写格式'],
    ['话术', '可根据客户文化适当调整表达方式', '核心术语、五步名称、表名、五步顺序'],
    ['时间分配', '可根据实际课时灵活调整各工位时长', '五步顺序、每个工位的核心交付物'],
    ['视觉素材', '可根据企业VI替换颜色、Logo', '标准色彩（墨黑#14171A、钴蓝#1E40C9、琥珀#C96A00、绿#0E7A4A）含义'],
]

table = Table(table_data, colWidths=[3*cm, 6.5*cm, 6.5*cm])
table.setStyle(TableStyle([
    ('BACKGROUND', (0, 0), (-1, 0), colors.HexColor('#1E40C9')),
    ('TEXTCOLOR', (0, 0), (-1, 0), colors.white),
    ('FONTNAME', (0, 0), (-1, 0), chinese_font),
    ('FONTSIZE', (0, 0), (-1, 0), 10),
    ('FONTNAME', (0, 1), (-1, -1), chinese_font),
    ('FONTSIZE', (0, 1), (-1, -1), 9),
    ('ALIGN', (0, 0), (-1, -1), 'LEFT'),
    ('VALIGN', (0, 0), (-1, -1), 'TOP'),
    ('GRID', (0, 0), (-1, -1), 0.5, colors.grey),
    ('BACKGROUND', (0, 1), (-1, -1), colors.HexColor('#F4F6F3')),
    ('ROWBACKGROUNDS', (0, 1), (-1, -1), [colors.HexColor('#F4F6F3'), colors.white]),
    ('TOPPADDING', (0, 0), (-1, -1), 5),
    ('BOTTOMPADDING', (0, 0), (-1, -1), 5),
    ('LEFTPADDING', (0, 0), (-1, -1), 5),
]))
content.append(table)
content.append(Spacer(1, 15))

# Section 3: 版权与署名要求
content.append(Paragraph('三、版权与署名要求', heading_style))
content.append(Paragraph('1. 本课程版权归属罗宏伟所有，受国际版权公约保护', body_style))
content.append(Paragraph('2. 所有成品文件（讲师手册、学员手册、PPT、工具表等）必须署名"罗宏伟"', body_style))
content.append(Paragraph('3. 未经授权，不得对本课程内容进行复制、改编、二次开发或商业转让', body_style))
content.append(Paragraph('4. 引用本课程方法论时，需注明出处"罗宏伟·方案靠谱化工作坊"', body_style))

# Section 4: 五步加工线不可更改声明
content.append(Paragraph('四、五步加工线不可更改声明', heading_style))

warning_text = '''本课程的核心骨架——五步加工线——严格按照以下顺序设计，任何情况下不可更改顺序或重命名任何工位：<br/>
<b>验真（四重检验）→ 预演（事前验尸+三维风险）→ 诊断（吉尔伯特六格）→ 分配（三级控制阶梯）→ 行为化（If-Then）</b><br/><br/>
违反此顺序即破坏了课程的方法论完整性，视为侵权行为。'''
content.append(Paragraph(warning_text, ParagraphStyle(
    'WarningBox',
    parent=body_style,
    backColor=colors.HexColor('#FFF8E1'),
    borderColor=colors.HexColor('#C96A00'),
    borderWidth=2,
    borderPadding=10,
    spaceBefore=10,
    spaceAfter=10
)))

# Section 5: 术语使用规范
content.append(Paragraph('五、术语使用规范', heading_style))
content.append(Paragraph('以下专业术语必须严格使用，不得用其他同义表述替代：', body_style))

terms = [
    ['术语', '正确用法', '禁止用法'],
    ['五步加工线', '五步加工线', '五步法、五阶段模型'],
    ['工位1', '验真（四重检验）', '验证、求真'],
    ['工位2', '预演（事前验尸+三维风险）', '预测、推演'],
    ['工位3', '诊断（吉尔伯特六格）', '体检、评估'],
    ['工位4', '分配（三级控制阶梯）', '分工、派单'],
    ['工位5', '行为化（行为设计）', '习惯化、落实'],
    ['表1', '《靠谱度体检报告》', '靠谱度检查表'],
    ['表2', '《触发式风险应对表》', '风险登记表'],
    ['表3', '《任务落地诊断表》', '六格诊断表'],
    ['表4', '《人机任务分配表》', '任务分配清单'],
    ['表5', '《行动计划2.0》', '终稿计划'],
    ['核心口号', '技控大于人控', '系统大于意志'],
    ['署名', '罗宏伟', '任何公司名或机构名'],
]

terms_table = Table(terms, colWidths=[3.5*cm, 5.5*cm, 5*cm])
terms_table.setStyle(TableStyle([
    ('BACKGROUND', (0, 0), (-1, 0), colors.HexColor('#1E40C9')),
    ('TEXTCOLOR', (0, 0), (-1, 0), colors.white),
    ('FONTNAME', (0, 0), (-1, 0), chinese_font),
    ('FONTSIZE', (0, 0), (-1, 0), 9),
    ('FONTNAME', (0, 1), (-1, -1), chinese_font),
    ('FONTSIZE', (0, 1), (-1, -1), 9),
    ('ALIGN', (0, 0), (-1, -1), 'LEFT'),
    ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
    ('GRID', (0, 0), (-1, -1), 0.5, colors.grey),
    ('ROWBACKGROUNDS', (0, 1), (-1, -1), [colors.HexColor('#F4F6F3'), colors.white]),
    ('TOPPADDING', (0, 0), (-1, -1), 4),
    ('BOTTOMPADDING', (0, 0), (-1, -1), 4),
    ('LEFTPADDING', (0, 0), (-1, -1), 4),
    # Highlight forbidden terms in amber
    ('TEXTCOLOR', (2, 1), (2, -1), colors.HexColor('#C96A00')),
]))
content.append(terms_table)

# Footer
content.append(Spacer(1, 30))
content.append(HRFlowable(width='100%', thickness=0.5, color=colors.grey, spaceBefore=10))
content.append(Paragraph(
    '本文件为《让行动计划回到现实》版权课程认证讲师内部使用文件 | V1.0-20260813 | © 罗宏伟',
    ParagraphStyle('Footer', parent=body_style, fontSize=8, textColor=colors.grey, alignment=1)
))

doc.build(content)
print(f'PDF created: {output_path}')
import os
print(f'File size: {os.path.getsize(output_path)} bytes')