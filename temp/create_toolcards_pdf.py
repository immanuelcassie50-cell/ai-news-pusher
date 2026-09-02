import os
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, PageBreak, Table, TableStyle
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib import colors
import re

# Register Chinese fonts
try:
    pdfmetrics.registerFont(TTFont('Microsoft YaHei', 'C:/Windows/Fonts/msyh.ttc'))
    pdfmetrics.registerFont(TTFont('SimHei', 'C:/Windows/Fonts/simhei.ttf'))
    font_name = 'Microsoft YaHei'
    print("Using Microsoft YaHei font")
except:
    try:
        pdfmetrics.registerFont(TTFont('SimHei', 'C:/Windows/Fonts/simhei.ttf'))
        font_name = 'SimHei'
        print("Using SimHei font")
    except:
        font_name = 'Helvetica'
        print("Using default Helvetica font")

output_path = "D:/新课开发/HR/员工关系/8.管理者角色升级-从执行者到人性化管理者的能力重塑/12-可打印工具卡/工具卡合集.pdf"
input_dir = "D:/新课开发/HR/员工关系/8.管理者角色升级-从执行者到人性化管理者的能力重塑/05-全流程工具表单"

# Color scheme
primary_color = colors.Color(0.776, 0.157, 0.157)  # #C62828
secondary_color = colors.Color(0.259, 0.259, 0.259)  # #424242
accent_color = colors.Color(0.898, 0.224, 0.208)  # #E53935

# Create PDF
doc = SimpleDocTemplate(
    output_path,
    pagesize=A4,
    leftMargin=15*mm,
    rightMargin=15*mm,
    topMargin=20*mm,
    bottomMargin=15*mm
)

styles = getSampleStyleSheet()
title_style = ParagraphStyle(
    'TitleStyle',
    fontName=font_name,
    fontSize=14,
    textColor=primary_color,
    alignment=1,
    spaceAfter=6*mm,
    leading=20
)
subtitle_style = ParagraphStyle(
    'SubtitleStyle',
    fontName=font_name,
    fontSize=9,
    textColor=colors.gray,
    alignment=1,
    spaceAfter=10*mm
)
heading_style = ParagraphStyle(
    'HeadingStyle',
    fontName=font_name,
    fontSize=11,
    textColor=colors.white,
    backColor=primary_color,
    spaceBefore=8*mm,
    spaceAfter=4*mm,
    leftIndent=4*mm,
    leading=16
)
normal_style = ParagraphStyle(
    'NormalStyle',
    fontName=font_name,
    fontSize=9,
    leading=13
)
small_style = ParagraphStyle(
    'SmallStyle',
    fontName=font_name,
    fontSize=8,
    leading=11,
    textColor=colors.Color(0.4, 0.4, 0.4)
)

elements = []

# Header for each page
def add_page_header(elements, card_title, page_num, total_pages):
    header_data = [[
        Paragraph(f'<font color="white"><b>课程8：管理者角色升级 - 工具卡片</b></font>',
                  ParagraphStyle('Header', fontName=font_name, fontSize=10, textColor=colors.white, alignment=1)),
    ]]
    header_table = Table(header_data, colWidths=[180*mm])
    header_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, -1), primary_color),
        ('ALIGN', (0, 0), (-1, -1), 'CENTER'),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ('TOPPADDING', (0, 0), (-1, -1), 4*mm),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 4*mm),
    ]))
    elements.append(header_table)
    elements.append(Spacer(1, 8*mm))

# Footer
def add_page_footer(elements, page_num, total_pages):
    footer_style = ParagraphStyle(
        'FooterStyle',
        fontName=font_name,
        fontSize=8,
        textColor=colors.gray,
        alignment=1
    )
    elements.append(Spacer(1, 5*mm))
    elements.append(Paragraph(f"第 {page_num} 页 / 共 {total_pages} 页", footer_style))

# Read HTML files and extract content
files = [
    ("F1_管理者角色自评卡.html", "管理者角色自评卡"),
    ("F2_员工情绪信号识别表.html", "员工情绪信号识别表"),
    ("F3_共情沟通能力评估表.html", "共情沟通能力评估表"),
    ("F4_员工激励偏好分析卡.html", "员工激励偏好分析卡"),
    ("F5_心理安全感团队评估表.html", "心理安全感团队评估表"),
    ("F6_信任建设行动清单.html", "信任建设行动清单"),
    ("F7_AI时代人才评估矩阵.html", "AI时代人才评估矩阵"),
    ("F8_高潜人才识别清单.html", "高潜人才识别清单"),
    ("F9_人性化管理行动计划表.html", "人性化管理行动计划表"),
    ("F10_团队管理风格诊断卡.html", "团队管理风格诊断卡"),
]

total_pages = len(files)

for page_num, (fname, title) in enumerate(files, 1):
    filepath = os.path.join(input_dir, fname)
    if os.path.exists(filepath):
        with open(filepath, 'r', encoding='utf-8') as f:
            html_content = f.read()

        # Extract title
        title_match = re.search(r'<h1[^>]*>([^<]+)</h1>', html_content)
        card_title = title_match.group(1) if title_match else title

        # Add page header
        add_page_header(elements, card_title, page_num, total_pages)

        # Extract body content and parse it
        body_match = re.search(r'<body>(.*?)</body>', html_content, re.DOTALL)
        if body_match:
            body_content = body_match.group(1)

            # Replace original color scheme with red theme
            body_content = body_content.replace('#1a5f7a', '#C62828')
            body_content = body_content.replace('#e74c3c', '#E53935')

            # Convert HTML to basic text content (simplified approach)
            # Remove scripts and styles
            body_content = re.sub(r'<script[^>]*>.*?</script>', '', body_content, flags=re.DOTALL)
            body_content = re.sub(r'<style[^>]*>.*?</style>', '', body_content, flags=re.DOTALL)

            # Replace common HTML tags with basic formatting
            body_content = re.sub(r'<h1[^>]*>', f'<font size="16" color="#C62828"><b>', body_content)
            body_content = re.sub(r'</h1>', '</b></font>', body_content)
            body_content = re.sub(r'<h2[^>]*>', '<font size="12" color="#424242"><b>', body_content)
            body_content = re.sub(r'</h2>', '</b></font><br/>', body_content)

            # Process div sections with background colors
            body_content = re.sub(r'<div[^>]*class="[^"]*level-1[^"]*"[^>]*>', '', body_content)
            body_content = re.sub(r'<div[^>]*class="[^"]*type-1[^"]*"[^>]*>', '', body_content)
            body_content = re.sub(r'<div[^>]*class="[^"]*dim-1[^"]*"[^>]*>', '', body_content)

            # Remove class attributes but keep content
            body_content = re.sub(r'class="[^"]*"', '', body_content)
            body_content = re.sub(r'style="[^"]*"', '', body_content)

            # Replace checkboxes
            body_content = body_content.replace('○', '☐')
            body_content = body_content.replace('✓', '☑')

            # Clean up remaining tags
            body_content = re.sub(r'<div[^>]*>', '<br/>', body_content)
            body_content = re.sub(r'</div>', '', body_content)
            body_content = re.sub(r'<span[^>]*>', '', body_content)
            body_content = re.sub(r'</span>', '', body_content)
            body_content = re.sub(r'<p[^>]*>', '<br/>', body_content)
            body_content = re.sub(r'</p>', '', body_content)
            body_content = re.sub(r'<br\s*/?>', '<br/>', body_content)

            # Remove print notes
            body_content = re.sub(r'<p[^>]*print-note[^>]*>.*?</p>', '', body_content, flags=re.DOTALL)

            # Extract and add title
            title_match = re.search(r'<font[^>]*color="#C62828"[^>]*><b>([^<]+)</b></font>', body_content)
            if title_match:
                elements.append(Paragraph(title_match.group(1), title_style))

            # Find subtitle
            subtitle_match = re.search(r'class="subtitle"[^>]*>([^<]+)</p>', body_content)
            if subtitle_match:
                elements.append(Paragraph(subtitle_match.group(1), subtitle_style))

            # Extract table content
            table_matches = re.findall(r'<table[^>]*>(.*?)</table>', body_content, re.DOTALL)
            for table_content in table_matches:
                rows = re.findall(r'<tr[^>]*>(.*?)</tr>', table_content, re.DOTALL)
                table_data = []
                for row in rows:
                    cells = re.findall(r'<t[dh][^>]*>(.*?)</t[dh]>', row, re.DOTALL)
                    if cells:
                        clean_cells = []
                        for cell in cells:
                            clean_cell = re.sub(r'<[^>]+>', '', cell)
                            clean_cell = clean_cell.strip()
                            clean_cells.append(clean_cell)
                        table_data.append(clean_cells)

                if table_data:
                    col_count = max(len(row) for row in table_data) if table_data else 0
                    col_width = (170 * mm) / col_count if col_count > 0 else 170*mm
                    t = Table(table_data, colWidths=[col_width] * col_count)
                    t.setStyle(TableStyle([
                        ('FONTNAME', (0, 0), (-1, -1), font_name),
                        ('FONTSIZE', (0, 0), (-1, -1), 8),
                        ('ALIGN', (0, 0), (-1, -1), 'LEFT'),
                        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
                        ('GRID', (0, 0), (-1, -1), 0.5, colors.gray),
                        ('BACKGROUND', (0, 0), (-1, 0), primary_color),
                        ('TEXTCOLOR', (0, 0), (-1, 0), colors.white),
                        ('TOPPADDING', (0, 0), (-1, -1), 2*mm),
                        ('BOTTOMPADDING', (0, 0), (-1, -1), 2*mm),
                    ]))
                    elements.append(t)
                    elements.append(Spacer(1, 4*mm))

            # Extract other content sections
            content_sections = re.findall(r'(?:<br/>)+(.*?)(?=(?:<br/>){2,}|$)', body_content, re.DOTALL)
            for section in content_sections:
                section = section.strip()
                if section and len(section) > 5:
                    section = re.sub(r'<[^>]+>', '', section)
                    section = section.strip()
                    if section:
                        elements.append(Paragraph(section, normal_style))

        # Add footer
        add_page_footer(elements, page_num, total_pages)

        # Add page break except for last page
        if page_num < total_pages:
            elements.append(PageBreak())

# Build PDF
doc.build(elements)
print(f"Created PDF: {output_path}")
print(f"Total pages: {total_pages}")
