#!/usr/bin/env python3
"""
货币的本质与信用创造 - Cover Slide Generator V2
A masterpiece of visual design for economics education
Following "Monetary Clarity" philosophy
"""

from PIL import Image, ImageDraw, ImageFont
import math

# Canvas dimensions (960x540 - classic presentation ratio)
WIDTH = 960
HEIGHT = 540

# Color Palette
COLORS = {
    'primary': '#264653',    # Deep teal - titles
    'secondary': '#2a9d8f',  # Teal green - accent
    'accent': '#e9c46a',     # Golden yellow - highlight
    'light': '#f4a261',      # Orange - decoration
    'bg': '#fafafa',         # Light gray-white - background
}

def hex_to_rgb(hex_color):
    hex_color = hex_color.lstrip('#')
    return tuple(int(hex_color[i:i+2], 16) for i in (0, 2, 4))

def draw_rounded_rect(draw, xy, radius, fill):
    """Draw a rectangle with rounded corners using polygon approximation"""
    x1, y1, x2, y2 = xy
    r = radius

    # Main body without corners
    draw.rectangle([x1 + r, y1, x2 - r, y2], fill=fill)
    draw.rectangle([x1, y1 + r, x2, y2 - r], fill=fill)

    # Four corner quarters
    draw.ellipse([x1, y1, x1 + 2*r, y1 + 2*r], fill=fill)
    draw.ellipse([x2 - 2*r, y1, x2, y1 + 2*r], fill=fill)
    draw.ellipse([x1, y2 - 2*r, x1 + 2*r, y2], fill=fill)
    draw.ellipse([x2 - 2*r, y2 - 2*r, x2, y2], fill=fill)

def draw_coin(draw, cx, cy, radius, face_color, rim_color):
    """Draw a stylized coin with depth effect"""
    # Outer rim
    draw.ellipse([cx - radius, cy - radius, cx + radius, cy + radius], fill=rim_color)
    # Inner face
    inner = radius * 0.78
    draw.ellipse([cx - inner, cy - inner, cx + inner, cy + inner], fill=face_color)
    # Center symbol area
    center = radius * 0.35
    draw.ellipse([cx - center, cy - center, cx + center, cy + center], fill=rim_color)

def draw_flow_arrow(draw, x1, y1, x2, y2, color, width=3):
    """Draw an arrow with proper arrowhead"""
    draw.line([x1, y1, x2, y2], fill=color, width=width)
    angle = math.atan2(y2 - y1, x2 - x1)
    arrow_len = 14
    ax1 = x2 - arrow_len * math.cos(angle - math.pi/6)
    ay1 = y2 - arrow_len * math.sin(angle - math.pi/6)
    ax2 = x2 - arrow_len * math.cos(angle + math.pi/6)
    ay2 = y2 - arrow_len * math.sin(angle + math.pi/6)
    draw.polygon([(x2, y2), (ax1, ay1), (ax2, ay2)], fill=color)

def create_cover():
    img = Image.new('RGB', (WIDTH, HEIGHT), COLORS['bg'])
    draw = ImageDraw.Draw(img)

    c_primary = hex_to_rgb(COLORS['primary'])
    c_secondary = hex_to_rgb(COLORS['secondary'])
    c_accent = hex_to_rgb(COLORS['accent'])
    c_light = hex_to_rgb(COLORS['light'])
    c_bg = hex_to_rgb(COLORS['bg'])

    # ===== SUBTLE GRID BACKGROUND =====
    grid_col = (c_secondary[0]//6, c_secondary[1]//6, c_secondary[2]//6)
    for i in range(0, WIDTH, 48):
        alpha = 12 if i % 96 == 0 else 6
        draw.line([(i, 0), (i, HEIGHT)], fill=grid_col, width=1)
    for i in range(0, HEIGHT, 48):
        alpha = 12 if i % 96 == 0 else 6
        draw.line([(0, i), (WIDTH, i)], fill=grid_col, width=1)

    # ===== LARGE DECORATIVE ARC (bottom right - representing flow/cycles) =====
    arc_r = 350
    arc_cx, arc_cy = WIDTH + 150, HEIGHT + 50
    for i in range(5):
        offset = i * 12
        draw.arc(
            [arc_cx - arc_r + offset, arc_cy - arc_r + offset,
             arc_cx + arc_r - offset, arc_cy + arc_r - offset],
            start=180, end=350,
            fill=(c_secondary[0]//3, c_secondary[1]//3, c_secondary[2]//3),
            width=25
        )

    # ===== LEFT SIDE: ABSTRACT BANKING COLUMNS =====

    # Column bases
    col_positions = [(70, 360), (130, 360), (190, 360), (250, 360)]
    for x, y in col_positions:
        draw_rounded_rect(draw, (x, y, x + 28, y + 40), radius=5, fill=c_primary)

    # Column shafts
    col_inner_positions = [(78, 160), (138, 160), (198, 160), (258, 160)]
    for x, y in col_inner_positions:
        draw_rounded_rect(draw, (x, y, x + 16, y + 200), radius=4, fill=c_secondary)

    # Pediment triangle
    pediment = [(50, 160), (160, 70), (270, 160)]
    draw.polygon(pediment, fill=c_primary)

    # Bank entrance portal
    draw_rounded_rect(draw, (115, 300, 195, 360), radius=8, fill=c_accent)

    # ===== CENTER: MONEY FLOW VISUALIZATION =====

    # Main horizontal flow arrows
    flow_levels = [
        (280, 200, 650, 200, c_secondary, 4),
        (320, 260, 600, 260, c_accent, 3),
        (280, 320, 650, 320, c_primary, 4),
    ]

    for x1, y1, x2, y2, color, w in flow_levels:
        draw_flow_arrow(draw, x1, y1, x2, y2, color, w)

    # Vertical connectors
    for x in [350, 450, 550]:
        draw_flow_arrow(draw, x, 220, x, 250, c_light, 2)
        draw_flow_arrow(draw, x, 270, x, 300, c_secondary, 2)

    # Coins along the flow
    coin_data = [
        (310, 195, 22, c_accent, c_light),
        (380, 255, 18, c_light, c_accent),
        (430, 200, 25, c_accent, c_primary),
        (500, 260, 20, c_secondary, c_accent),
        (560, 195, 24, c_accent, c_light),
        (620, 255, 16, c_light, c_accent),
    ]
    for cx, cy, r, fc, rc in coin_data:
        draw_coin(draw, cx, cy, r, fc, rc)

    # Additional scattered coins
    draw_coin(draw, 340, 310, 14, c_light, c_accent)
    draw_coin(draw, 490, 310, 11, c_secondary, c_primary)
    draw_coin(draw, 600, 310, 13, c_primary, c_secondary)

    # ===== RIGHT SIDE: GROWTH CHART =====

    # Chart panel
    draw_rounded_rect(draw, (720, 320, 920, 480), radius=10, fill=c_primary)

    # Chart title area
    draw_rounded_rect(draw, (735, 330, 820, 350), radius=4, fill=c_secondary)

    # Bar chart
    bars = [
        (745, 420, 30, 55, c_secondary),
        (785, 390, 30, 85, c_accent),
        (825, 405, 30, 70, c_light),
        (865, 370, 30, 105, c_secondary),
    ]
    for x, y_bottom, w, h, color in bars:
        draw_rounded_rect(draw, (x, y_bottom - h, x + w, y_bottom), radius=4, fill=color)

    # Trend line
    trend_points = [(760, 400), (800, 370), (840, 385), (880, 355)]
    for i in range(len(trend_points) - 1):
        draw.line([trend_points[i], trend_points[i+1]], fill=c_accent, width=3)

    # ===== TOP RIGHT: CIRCULAR CURRENCY PATTERN =====

    # Concentric circles
    draw.ellipse([780, 40, 920, 180], outline=c_secondary, width=3)
    draw.ellipse([805, 65, 895, 155], outline=c_light, width=2)
    draw.ellipse([830, 90, 870, 130], outline=c_accent, width=2)

    # Small accent circles
    for cx, cy, r in [(870, 100, 18), (845, 130, 10), (895, 120, 7)]:
        draw.ellipse([cx-r, cy-r, cx+r, cy+r], fill=c_accent)

    # ===== DECORATIVE ACCENT ELEMENTS =====

    # Bottom accent bar
    draw.rectangle([0, HEIGHT - 10, WIDTH, HEIGHT], fill=c_primary)

    # Central diamond accent
    diamond_cx, diamond_cy = WIDTH//2, HEIGHT - 55
    diamond_size = 20
    draw.polygon([
        (diamond_cx, diamond_cy - diamond_size),
        (diamond_cx + diamond_size, diamond_cy),
        (diamond_cx, diamond_cy + diamond_size),
        (diamond_cx - diamond_size, diamond_cy)
    ], fill=c_accent)

    # ===== TYPOGRAPHY =====

    # Use available fonts for Chinese
    font_paths = {
        'title': 'C:/Windows/Fonts/msyh.ttc',  # Microsoft YaHei
        'subtitle': 'C:/Windows/Fonts/msyh.ttc',
        'series': 'C:/Windows/Fonts/msyh.ttc',
        'en': 'C:/Users/Administrator/.claude/skills/canvas-design/canvas-fonts/Jura-Medium.ttf',
    }

    try:
        font_title = ImageFont.truetype(font_paths['title'], 48)
        font_subtitle = ImageFont.truetype(font_paths['subtitle'], 26)
        font_series = ImageFont.truetype(font_paths['series'], 14)
        font_en = ImageFont.truetype(font_paths['en'], 13)
    except Exception as e:
        print(f"Font loading note: {e}")
        font_title = ImageFont.load_default()
        font_subtitle = ImageFont.load_default()
        font_series = ImageFont.load_default()
        font_en = ImageFont.load_default()

    # Series label (top left)
    series_text = "经济学通识课系列"
    draw.text((55, 35), series_text, fill=c_secondary, font=font_series)

    # Main title (center bottom area)
    title_text = "货币的本质与信用创造"
    title_bbox = draw.textbbox((0, 0), title_text, font=font_title)
    title_w = title_bbox[2] - title_bbox[0]
    draw.text(((WIDTH - title_w) // 2, 415), title_text, fill=c_primary, font=font_title)

    # Subtitle
    subtitle_text = "银行如何'印钱'"
    sub_bbox = draw.textbbox((0, 0), subtitle_text, font=font_subtitle)
    sub_w = sub_bbox[2] - sub_bbox[0]
    draw.text(((WIDTH - sub_w) // 2, 468), subtitle_text, fill=c_secondary, font=font_subtitle)

    # English tagline
    en_text = "The Nature of Money and Credit Creation"
    en_bbox = draw.textbbox((0, 0), en_text, font=font_en)
    en_w = en_bbox[2] - en_bbox[0]
    draw.text(((WIDTH - en_w) // 2, 502), en_text, fill=c_light, font=font_en)

    # ===== SAVE =====
    output_path = "D:/新课开发/经济学/15_货币的本质与信用创造/slides/imgs/cover.jpg"
    img.save(output_path, 'JPEG', quality=95, optimize=True)
    print(f"Cover image created: {output_path}")
    print(f"Dimensions: {WIDTH}x{HEIGHT}")

if __name__ == "__main__":
    create_cover()
