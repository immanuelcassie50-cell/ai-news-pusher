# -*- coding: utf-8 -*-
"""
创建《政治判断力情景决策训练营》课程学习地图 PDF
使用 ReportLab，输出 A3 横向
"""
from reportlab.lib.pagesizes import A3, landscape
from reportlab.lib import colors
from reportlab.lib.units import mm
from reportlab.pdfgen import canvas
from reportlab.lib.styles import getSampleStyleSheet
from reportlab.platypus import Table, TableStyle
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
import os

# Register Chinese font
font_paths = [
    'C:/Windows/Fonts/msyh.ttc',
    'C:/Windows/Fonts/simhei.ttf',
    'C:/Windows/Fonts/simsun.ttc',
]
chinese_font = 'Helvetica'
for fp in font_paths:
    if os.path.exists(fp):
        try:
            if fp.endswith('.ttc'):
                pdfmetrics.registerFont(TTFont('ChineseFont', fp, subfontIndex=0))
            else:
                pdfmetrics.registerFont(TTFont('ChineseFont', fp))
            chinese_font = 'ChineseFont'
            print(f'Registered font: {fp}')
            break
        except Exception as e:
            print(f'Failed to register {fp}: {e}')

OUTPUT = 'D:/新课开发/党业融合/政治判断力/完整课程包/002-课程学习地图/课程学习地图-政治判断力.pdf'
os.makedirs(os.path.dirname(OUTPUT), exist_ok=True)

# A3 landscape
PAGE_W, PAGE_H = landscape(A3)  # 420mm x 297mm
MARGIN = 15 * mm

# Colors
NAVY = colors.HexColor('#0A1628')
NAVY_MID = colors.HexColor('#132040')
NAVY_LIGHT = colors.HexColor('#1E3A5F')
GOLD = colors.HexColor('#C9A84C')
GOLD_LIGHT = colors.HexColor('#E8C96A')
GOLD_DIM = colors.HexColor('#8B7355')
CREAM = colors.HexColor('#F5F0E8')
WHITE = colors.white
TEXT_DARK = colors.HexColor('#1A1A1A')
TEXT_LIGHT = colors.HexColor('#6A6A6A')
ACCENT_TEAL = colors.HexColor('#2A7A7A')
ACCENT_RED = colors.HexColor('#B84040')

def draw_centered_text(c, text, x, y, font, size, color=TEXT_DARK, max_width=None):
    c.setFont(font, size)
    c.setFillColor(color)
    if max_width:
        # Simple centering
        text_width = c.stringWidth(text, font, size)
        if text_width > max_width:
            # Scale down
            new_size = size * max_width / text_width
            c.setFont(font, new_size)
            c.drawString(x - c.stringWidth(text, font, new_size)/2, y, text)
        else:
            c.drawString(x - text_width/2, y, text)
    else:
        text_width = c.stringWidth(text, font, size)
        c.drawString(x - text_width/2, y, text)

def draw_text(c, text, x, y, font, size, color=TEXT_DARK, align='left'):
    c.setFont(font, size)
    c.setFillColor(color)
    if align == 'center':
        tw = c.stringWidth(text, font, size)
        c.drawString(x - tw/2, y, text)
    elif align == 'right':
        tw = c.stringWidth(text, font, size)
        c.drawString(x - tw, y, text)
    else:
        c.drawString(x, y, text)

def draw_rounded_rect(c, x, y, w, h, r, fill_color, stroke_color=None, stroke_width=0.5):
    c.setFillColor(fill_color)
    if stroke_color:
        c.setStrokeColor(stroke_color)
        c.setLineWidth(stroke_width)
    c.roundRect(x, y, w, h, r, fill=1, stroke=1 if stroke_color else 0)

def draw_rect(c, x, y, w, h, fill_color, stroke_color=None, stroke_width=0.5):
    c.setFillColor(fill_color)
    if stroke_color:
        c.setStrokeColor(stroke_color)
        c.setLineWidth(stroke_width)
        c.rect(x, y, w, h, fill=1, stroke=1)
    else:
        c.rect(x, y, w, h, fill=1, stroke=0)

def draw_line(c, x1, y1, x2, y2, color, width=0.5):
    c.setStrokeColor(color)
    c.setLineWidth(width)
    c.line(x1, y1, x2, y2)

def draw_module_card(c, x, y, w, h, num, title, desc, tags, hours, is_highlight=False):
    # Background
    fill = colors.HexColor('#1A3A5F') if not is_highlight else colors.HexColor('#2A3F1F')
    stroke = GOLD if is_highlight else colors.HexColor('#3A5070')
    draw_rounded_rect(c, x, y, w, h, 3, fill, stroke, 0.8)

    # Left accent bar
    c.setFillColor(GOLD)
    c.rect(x, y, 3, h, fill=1, stroke=0)

    # Module num
    draw_text(c, f'Module {num:02d}', x + 8, y + h - 10, chinese_font, 6, GOLD, 'left')

    # Hours
    draw_text(c, f'{hours}', x + w - 8, y + h - 10, chinese_font, 6, colors.HexColor('#8A9AAA'), 'right')

    # Title
    draw_text(c, title, x + 8, y + h - 22, chinese_font, 9, WHITE, 'left')

    # Description
    c.setFont(chinese_font, 6.5)
    c.setFillColor(colors.HexColor('#9AACBA'))
    # Simple text wrapping
    words = desc.split('、')
    line_y = y + h - 32
    for i, word in enumerate(words[:2]):
        c.drawString(x + 8, line_y - i * 8, word)
    if len(words) > 2:
        c.drawString(x + 8, line_y - 16, '...' if len(words) > 3 else words[2])

    # Tags
    tag_x = x + 8
    tag_y = y + 8
    for tag in tags[:3]:
        tag_w = len(tag) * 5.5 + 6
        draw_rounded_rect(c, tag_x, tag_y, tag_w, 9, 2, colors.HexColor('#1A2A3A'), GOLD_DIM, 0.4)
        draw_text(c, tag, tag_x + 3, tag_y + 2, chinese_font, 5.5, GOLD_DIM, 'left')
        tag_x += tag_w + 4

def create_pdf():
    c = canvas.Canvas(OUTPUT, pagesize=landscape(A3))

    # Background gradient (simulated with rectangles)
    c.setFillColor(NAVY)
    c.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)

    # Subtle grid pattern
    c.setStrokeColor(colors.HexColor('#1A2A3A'))
    c.setLineWidth(0.3)
    for gx in range(0, int(PAGE_W), 20):
        c.line(gx, 0, gx, PAGE_H)
    for gy in range(0, int(PAGE_H), 20):
        c.line(0, gy, PAGE_W, gy)

    # Top-right corner accent
    c.setFillColor(colors.HexColor('#1A2A4A'))
    c.pathing = 1
    p = c.beginPath()
    p.moveTo(PAGE_W - 30*mm, PAGE_H)
    p.lineTo(PAGE_W, PAGE_H)
    p.lineTo(PAGE_W, PAGE_H - 30*mm)
    p.close()
    c.drawPath(p, fill=1, stroke=0)

    CONTENT_X = MARGIN
    CONTENT_Y = MARGIN
    CONTENT_W = PAGE_W - 2 * MARGIN
    CONTENT_H = PAGE_H - 2 * MARGIN

    # ===== HEADER =====
    header_y = PAGE_H - 32*mm

    # Tag line
    draw_text(c, 'PARTY & BUSINESS INTEGRATION · CAPABILITY TRAINING', CONTENT_X, header_y, chinese_font, 7, GOLD_DIM, 'left')

    # Main title
    draw_text(c, '政治判断力', CONTENT_X, header_y - 14, chinese_font, 24, WHITE, 'left')
    draw_text(c, '情景决策训练营', CONTENT_X + c.stringWidth('政治判断力', chinese_font, 24), header_y - 14, chinese_font, 24, GOLD, 'left')

    # Subtitle
    draw_text(c, '在两难抉择中显性化你的判断力 · 课程学习地图', CONTENT_X, header_y - 26, chinese_font, 9, colors.HexColor('#8A9AAA'), 'left')

    # Right side info box
    info_x = PAGE_W - MARGIN - 55*mm
    info_y = header_y - 28

    # Logo circle
    c.setFillColor(GOLD)
    c.circle(PAGE_W - MARGIN - 8*mm, header_y - 6, 8*mm, fill=1, stroke=0)
    draw_text(c, '政', PAGE_W - MARGIN - 8*mm, header_y - 9, chinese_font, 14, NAVY, 'center')

    draw_text(c, '课时：7课时（420分钟）', info_x, info_y, chinese_font, 7, colors.HexColor('#7A8A9A'), 'left')
    draw_text(c, '人数：24人以内', info_x, info_y - 9, chinese_font, 7, colors.HexColor('#7A8A9A'), 'left')
    draw_text(c, '形式：情景沉浸 + 追问复盘', info_x, info_y - 18, chinese_font, 7, colors.HexColor('#7A8A9A'), 'left')

    # Divider line
    div_y = header_y - 38
    c.setStrokeColor(GOLD_DIM)
    c.setLineWidth(0.5)
    c.line(CONTENT_X, div_y, PAGE_W - MARGIN, div_y)

    # ===== ABILITY PROGRESSION PATH =====
    path_y = div_y - 18
    draw_text(c, '能力递进路径 · COMPETENCY PROGRESSION', CONTENT_X, path_y + 5, chinese_font, 6.5, GOLD_DIM, 'left')

    abilities = [
        ('全局意识', '跳出局部看整体'),
        ('底线意识', '压力下守红线'),
        ('分寸感', '原则与灵活之间'),
        ('舆情敏感度', '预判舆论反应'),
        ('请示汇报时机', '自己扛 vs 及时上报'),
    ]

    node_y = path_y - 16
    node_w = 45*mm
    node_h = 22*mm
    node_gap = 22*mm
    start_x = CONTENT_X + 10*mm

    for i, (label, sub) in enumerate(abilities):
        nx = start_x + i * (node_w + node_gap)

        # Node background
        fill_col = colors.HexColor('#1A3A5F')
        stroke_col = GOLD if i == 0 else colors.HexColor('#2A4A6A')
        draw_rounded_rect(c, nx, node_y, node_w, node_h, 3, fill_col, stroke_col, 0.8)

        # Number circle
        c.setFillColor(GOLD)
        c.circle(nx + 9, node_y + node_h - 9, 4*mm, fill=1, stroke=0)
        draw_text(c, str(i+1), nx + 9, node_y + node_h - 11, chinese_font, 7, NAVY, 'center')

        # Label
        draw_text(c, label, nx + 4, node_y + node_h - 20, chinese_font, 8, WHITE, 'left')

        # Sublabel
        draw_text(c, sub, nx + 4, node_y + 5, chinese_font, 5.5, colors.HexColor('#7A8A9A'), 'left')

        # Connector arrow
        if i < len(abilities) - 1:
            cx1 = nx + node_w + 2
            cx2 = nx + node_w + node_gap - 2
            cy = node_y + node_h / 2
            c.setStrokeColor(GOLD_DIM)
            c.setLineWidth(0.8)
            c.line(cx1, cy, cx2, cy)
            # Arrow head
            c.line(cx2 - 3, cy + 2, cx2, cy)
            c.line(cx2 - 3, cy - 2, cx2, cy)

    # ===== MAIN CONTENT GRID =====
    main_top = node_y - 10
    main_h = main_top - CONTENT_Y - 20
    col1_w = 85*mm
    col2_w = 90*mm
    col3_w = CONTENT_W - col1_w - col2_w - 8*mm
    gap = 6*mm

    # ---- Column 1: Left modules ----
    col1_x = CONTENT_X

    # Module cards (left side)
    mod_data = [
        (1, '开场导入', '破冰、课程定位、五维能力模型讲解、规则说明', ['破冰', '能力模型', '规则契约'], '1课时', False),
        (2, '初级关卡热身', '2个初级关卡，建立信心和参与感', ['ZZPD-01', 'ZZPD-02', '全局意识'], '1.5课时', False),
        (3, '中级关卡第一组', '2个中级关卡，暴露判断逻辑差异', ['ZZPD-03', 'ZZPD-04', '请示汇报', '底线意识'], '1课时', True),
    ]

    mod_card_h = 28*mm
    mod_gap = 4*mm
    mod_x = col1_x
    mod_y = main_top - len(mod_data) * (mod_card_h + mod_gap)

    for num, title, desc, tags, hours, highlight in mod_data:
        draw_module_card(c, mod_x, mod_y, col1_w - 5*mm, mod_card_h, num, title, desc, tags, hours, highlight)
        mod_y += mod_card_h + mod_gap

    # Time allocation bar
    bar_y = mod_y - 8*mm
    draw_text(c, '课时分配', bar_y + 12, bar_y + 8, chinese_font, 6.5, GOLD, 'left')
    draw_text(c, '7课时 · 420分钟', PAGE_W - MARGIN - 10, bar_y + 8, chinese_font, 6.5, GOLD_LIGHT, 'right')

    bar_x = mod_x
    bar_w = col1_w - 5*mm
    bar_h = 5*mm

    # Morning bar
    draw_rect(c, bar_x, bar_y, bar_w / 2, bar_h, ACCENT_TEAL)
    # Afternoon bar
    draw_rect(c, bar_x + bar_w / 2, bar_y, bar_w / 2, bar_h, GOLD_DIM)

    draw_text(c, '上午 3.5课时 / 210分钟', bar_x, bar_y - 5, chinese_font, 5.5, colors.HexColor('#7A8A9A'), 'left')
    draw_text(c, '下午 3.5课时 / 210分钟', bar_x + bar_w / 2, bar_y - 5, chinese_font, 5.5, colors.HexColor('#7A8A9A'), 'left')

    # ---- Column 2: Middle modules ----
    col2_x = col1_x + col1_w + gap

    mod_data2 = [
        (4, '中级关卡第二组', '2个中级关卡，价值密度最高部分', ['ZZPD-05~09', '舆情敏感度', '分寸感'], '1.5课时', False),
        (5, '高级关卡', '2-3个两难张力最强关卡，全天高潮', ['ZZPD-10', 'ZZPD-11', 'ZZPD-12', '上下级冲突'], '1.5课时', True),
        (6, '结营复盘', '每位学员提炼个人判断力自检清单', ['自检清单', '能力迁移'], '0.5课时', False),
    ]

    mod_y2 = main_top - len(mod_data2) * (mod_card_h + mod_gap)

    for num, title, desc, tags, hours, highlight in mod_data2:
        draw_module_card(c, col2_x, mod_y2, col2_w - 5*mm, mod_card_h, num, title, desc, tags, hours, highlight)
        mod_y2 += mod_card_h + mod_gap

    # Gate summary
    gate_y = mod_y2 - 6*mm
    draw_rounded_rect(c, col2_x, gate_y - 30, col2_w - 5*mm, 35, 3, colors.HexColor('#1A2A3A'), colors.HexColor('#2A4A6A'), 0.5)
    draw_text(c, '情景关卡库 · 12关', col2_x + 5, gate_y - 2, chinese_font, 6.5, GOLD, 'left')
    draw_text(c, 'ZZPD-01 ~ ZZPD-12', col2_x + col2_w - 15*mm, gate_y - 2, chinese_font, 5.5, colors.HexColor('#5A6A7A'), 'right')

    # Level chips
    chip_y = gate_y - 10
    levels = [
        ('初级 · 2关', [('ZZPD-01', ACCENT_TEAL), ('ZZPD-02', ACCENT_TEAL)], 25*mm),
        ('中级 · 7关', [('ZZPD-03', GOLD_DIM), ('ZZPD-04', GOLD_DIM), ('ZZPD-05', GOLD_DIM), ('ZZPD-06', GOLD_DIM), ('ZZPD-07', GOLD_DIM), ('ZZPD-08', GOLD_DIM), ('ZZPD-09', GOLD_DIM)], 55*mm),
        ('高级 · 3关', [('ZZPD-10', ACCENT_RED), ('ZZPD-11', ACCENT_RED), ('ZZPD-12', ACCENT_RED)], 28*mm),
    ]

    chip_x = col2_x + 5
    for level_name, chips, width in levels:
        draw_text(c, level_name, chip_x, chip_y - 2, chinese_font, 5.5, colors.HexColor('#6A7A8A'), 'left')
        cx = chip_x
        cy = chip_y - 10
        for chip_text, chip_color in chips:
            cw = 17*mm
            draw_rounded_rect(c, cx, cy, cw, 8, 2, colors.HexColor('#1A2A3A'), chip_color, 0.4)
            draw_text(c, chip_text, cx + 2, cy + 2, chinese_font, 5, chip_color, 'left')
            cx += cw + 2
        chip_x += width + 3

    # ---- Column 3: Learning Flow ----
    col3_x = col2_x + col2_w + gap

    # Structure flow diagram
    flow_box_h = main_h * 0.62
    draw_rounded_rect(c, col3_x, main_top - flow_box_h, col3_w, flow_box_h, 3, colors.HexColor('#1A2A3A'), colors.HexColor('#2A4A6A'), 0.5)

    draw_text(c, '课程结构流 · LEARNING FLOW', col3_x + 5, main_top - 8, chinese_font, 6.5, GOLD, 'left')

    # Legend
    legend_items = [('初级', ACCENT_TEAL), ('中级', GOLD_DIM), ('高级', ACCENT_RED)]
    lx = col3_x + col3_w - 50
    for lname, lcol in legend_items:
        c.setFillColor(lcol)
        c.rect(lx, main_top - 7, 4, 4, fill=1, stroke=0)
        draw_text(c, lname, lx + 6, main_top - 9, chinese_font, 5, colors.HexColor('#7A8A9A'), 'left')
        lx += 18

    # Flow row 1: main flow nodes
    flow_y1 = main_top - 20
    flow_node_h = 11*mm
    flow_nodes = [
        ('开场导入', NAVY_LIGHT, GOLD, 30*mm),
        ('初级热身', colors.HexColor('#1A4A4A'), ACCENT_TEAL, 25*mm),
        ('中级第一组', colors.HexColor('#3A3A1A'), GOLD_DIM, 25*mm),
        ('中级第二组', colors.HexColor('#3A3A1A'), GOLD_DIM, 25*mm),
        ('高级关卡', colors.HexColor('#4A1A1A'), ACCENT_RED, 25*mm),
        ('结营复盘', colors.HexColor('#1A3A2A'), GOLD, 22*mm),
    ]

    fn_x = col3_x + 5
    for fname, ffill, fstroke, fw in flow_nodes:
        draw_rounded_rect(c, fn_x, flow_y1, fw, flow_node_h, 2, ffill, fstroke, 0.6)
        draw_text(c, fname, fn_x + fw/2, flow_y1 + 4, chinese_font, 6, fstroke, 'center')
        fn_x += fw + 2
        if fn_x < col3_x + col3_w - 20:
            c.setStrokeColor(colors.HexColor('#3A4A5A'))
            c.setLineWidth(0.4)
            c.line(fn_x - 1, flow_y1 + flow_node_h/2, fn_x + 1, flow_y1 + flow_node_h/2)

    # Time row
    flow_y2 = flow_y1 - 8
    times = ['60分钟', '90分钟', '60分钟', '90分钟', '90分钟', '30分钟']
    tn_x = col3_x + 5
    for i, (fname, ffill, fstroke, fw) in enumerate(flow_nodes):
        draw_text(c, times[i], tn_x + fw/2, flow_y2, chinese_font, 5, colors.HexColor('#5A6A7A'), 'center')
        tn_x += fw + 2

    # Scenario row
    flow_y3 = flow_y2 - 10
    scenarios = [
        ('ZZPD-01\n优秀员工名额', ACCENT_TEAL),
        ('ZZPD-02\n老领导合规', ACCENT_TEAL),
        ('ZZPD-03\n信息不全', GOLD_DIM),
        ('ZZPD-04\n供应商感谢费', GOLD_DIM),
        ('ZZPD-05/06\n慰问金/编制', GOLD_DIM),
        ('ZZPD-07/08/09\n老部下/舆情', GOLD_DIM),
    ]
    sn_x = col3_x + 5
    for sname, scol in scenarios:
        sw = 22*mm
        draw_rounded_rect(c, sn_x, flow_y3, sw, 14, 2, colors.Color(0.1, 0.2, 0.25), scol, 0.4)
        lines = sname.split('\n')
        draw_text(c, lines[0], sn_x + sw/2, flow_y3 + 8, chinese_font, 5.5, WHITE, 'center')
        if len(lines) > 1:
            draw_text(c, lines[1], sn_x + sw/2, flow_y3 + 2, chinese_font, 4.5, colors.HexColor('#7A8A9A'), 'center')
        sn_x += sw + 2

    # High-level scenarios
    flow_y4 = flow_y3 - 18
    hard_scenarios = [
        ('ZZPD-10\n领导软钉子', ACCENT_RED),
        ('ZZPD-11\n截访还是依法', ACCENT_RED),
        ('ZZPD-12\n补贴发放', ACCENT_RED),
    ]
    hn_x = col3_x + 5
    for sname, scol in hard_scenarios:
        sw = 28*mm
        draw_rounded_rect(c, hn_x, flow_y4, sw, 14, 2, colors.Color(0.2, 0.1, 0.1), scol, 0.5)
        lines = sname.split('\n')
        draw_text(c, lines[0], hn_x + sw/2, flow_y4 + 8, chinese_font, 5.5, colors.HexColor('#E07070'), 'center')
        if len(lines) > 1:
            draw_text(c, lines[1], hn_x + sw/2, flow_y4 + 2, chinese_font, 4.5, colors.HexColor('#9A6A6A'), 'center')
        hn_x += sw + 3

    # Questioning technique section
    ques_y = flow_y4 - 15
    draw_rounded_rect(c, col3_x, ques_y - 38, col3_w, 42, 3, colors.HexColor('#1A2A3A'), colors.HexColor('#2A4A6A'), 0.5)
    draw_text(c, '追问技术 · 三层递进', col3_x + 5, ques_y - 2, chinese_font, 6.5, GOLD, 'left')

    ques_items = [
        ('第一层', '还原逻辑', '"你为什么选这个而不是那个？"', GOLD_LIGHT),
        ('第二层', '暴露盲区', '"如果还有这个信息你没想到呢？"', colors.HexColor('#E07070')),
        ('第三层', '迁移内化', '"以后遇到类似情况用什么原则？"', ACCENT_TEAL),
    ]
    qy = ques_y - 10
    for qnum, qtitle, qdesc, qcol in ques_items:
        draw_text(c, qnum, col3_x + 5, qy, chinese_font, 5.5, qcol, 'left')
        draw_text(c, qtitle, col3_x + 22, qy, chinese_font, 6, WHITE, 'left')
        draw_text(c, qdesc, col3_x + 5, qy - 7, chinese_font, 5, colors.HexColor('#7A8A9A'), 'left')
        qy -= 12

    # ===== FOOTER =====
    footer_y = CONTENT_Y + 5
    c.setStrokeColor(colors.HexColor('#1A2A3A'))
    c.setLineWidth(0.5)
    c.line(CONTENT_X, footer_y + 8, PAGE_W - MARGIN, footer_y + 8)

    draw_text(c, '版权说明：本课程为党业融合能力训练系列课程，与廉政风险情景决策课、双带头人破局课分属不同能力训练层次', CONTENT_X, footer_y, chinese_font, 5.5, colors.HexColor('#4A5A6A'), 'left')

    # Badges
    badge_texts = ['无标准答案', '压力叠加', '追问纠偏']
    bx = PAGE_W - MARGIN - 60
    for bt in badge_texts:
        bw = 18*mm
        draw_rounded_rect(c, bx, footer_y - 2, bw, 8, 2, colors.Color(0.05, 0.1, 0.15), colors.HexColor('#2A3A4A'), 0.3)
        draw_text(c, bt, bx + bw/2, footer_y, chinese_font, 5, colors.HexColor('#5A6A7A'), 'center')
        bx -= bw + 3

    # Value props on the right
    val_y = main_top - flow_box_h - 8
    draw_rounded_rect(c, col3_x, val_y - 40, col3_w, 44, 3, colors.HexColor('#1A2A3A'), GOLD_DIM, 0.5)
    draw_text(c, '核心价值主张', col3_x + 5, val_y - 2, chinese_font, 6.5, GOLD, 'left')

    val_items = [
        ('12', '个真实两难情景关卡', '覆盖6种典型决策类型'),
        ('5', '个可训练能力维度', '政治判断力可测量、可训练'),
        ('1', '份个人判断力自检清单', '带走可迁移的判断原则'),
    ]
    vy = val_y - 12
    for num, main_text, sub_text in val_items:
        draw_text(c, num, col3_x + 5, vy, chinese_font, 13, GOLD, 'left')
        draw_text(c, main_text, col3_x + 18, vy + 2, chinese_font, 6, WHITE, 'left')
        draw_text(c, sub_text, col3_x + 18, vy - 6, chinese_font, 5, colors.HexColor('#5A6A7A'), 'left')
        vy -= 13

    c.save()
    print(f'PDF created: {OUTPUT}')

if __name__ == '__main__':
    create_pdf()
