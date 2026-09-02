#!/usr/bin/env python3
"""
货币的本质与信用创造 - Cover Slide Generator
A masterpiece of visual design for economics education
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

def draw_rounded_rectangle(draw, xy, radius, fill, outline=None, width=1):
    """Draw a rectangle with rounded corners"""
    x1, y1, x2, y2 = xy

    # Draw the main rectangle
    draw.rectangle([x1 + radius, y1, x2 - radius, y2], fill=fill, outline=outline, width=width)
    draw.rectangle([x1, y1 + radius, x2, y2 - radius], fill=fill, outline=outline, width=width)

    # Draw the four corner circles
    draw.ellipse([x1, y1, x1 + 2*radius, y1 + 2*radius], fill=fill, outline=outline, width=width)
    draw.ellipse([x2 - 2*radius, y1, x2, y1 + 2*radius], fill=fill, outline=outline, width=width)
    draw.ellipse([x1, y2 - 2*radius, x1 + 2*radius, y2], fill=fill, outline=outline, width=width)
    draw.ellipse([x2 - 2*radius, y2 - 2*radius, x2, y2], fill=fill, outline=outline, width=width)

def draw_coin(draw, cx, cy, radius, color, edge_color):
    """Draw a stylized coin with depth effect"""
    # Outer ring
    draw.ellipse([cx - radius, cy - radius, cx + radius, cy + radius], fill=color)
    # Inner circle
    inner_radius = radius * 0.75
    draw.ellipse([cx - inner_radius, cy - inner_radius, cx + inner_radius, cy + inner_radius], fill=edge_color)
    # Center highlight
    center_radius = radius * 0.3
    draw.ellipse([cx - center_radius, cy - center_radius, cx + center_radius, cy + center_radius], fill=color)

def draw_flow_arrow(draw, x1, y1, x2, y2, color, width=3):
    """Draw a flow arrow with arrowhead"""
    # Line
    draw.line([x1, y1, x2, y2], fill=color, width=width)
    # Arrowhead
    arrow_size = 12
    angle = math.atan2(y2 - y1, x2 - x1)
    # Left side of arrowhead
    ax1 = x2 - arrow_size * math.cos(angle - math.pi/6)
    ay1 = y2 - arrow_size * math.sin(angle - math.pi/6)
    # Right side of arrowhead
    ax2 = x2 - arrow_size * math.cos(angle + math.pi/6)
    ay2 = y2 - arrow_size * math.sin(angle + math.pi/6)
    draw.polygon([(x2, y2), (ax1, ay1), (ax2, ay2)], fill=color)

def create_cover():
    # Create canvas
    img = Image.new('RGB', (WIDTH, HEIGHT), COLORS['bg'])
    draw = ImageDraw.Draw(img)

    # ===== BACKGROUND DECORATIVE ELEMENTS =====

    # Large subtle arc in background (representing global finance/flow)
    bg_arc_radius = 400
    bg_arc_center = (WIDTH + 200, HEIGHT - 100)
    for i in range(3):
        alpha_offset = i * 15
        draw.arc(
            [bg_arc_center[0] - bg_arc_radius + alpha_offset,
             bg_arc_center[1] - bg_arc_radius + alpha_offset,
             bg_arc_center[0] + bg_arc_radius - alpha_offset,
             bg_arc_center[1] + bg_arc_radius - alpha_offset],
            start=200, end=340,
            fill=hex_to_rgb(COLORS['secondary']) if i == 0 else hex_to_rgb(COLORS['light']),
            width=40
        )

    # Geometric grid pattern (subtle, representing systematic nature of finance)
    grid_color = hex_to_rgb(COLORS['secondary'])
    for i in range(0, WIDTH, 60):
        draw.line([(i, 0), (i, HEIGHT)], fill=(grid_color[0]//4, grid_color[1]//4, grid_color[2]//4), width=1)
    for i in range(0, HEIGHT, 60):
        draw.line([(0, i), (WIDTH, i)], fill=(grid_color[0]//4, grid_color[1]//4, grid_color[2]//4), width=1)

    # ===== LEFT SECTION: Abstract Banking Architecture =====

    # Building columns (representing institutional finance)
    column_color = hex_to_rgb(COLORS['primary'])
    column_positions = [80, 140, 200, 260]
    for x in column_positions:
        # Column base
        draw_rounded_rectangle(draw, (x, 280, x + 30, 380), radius=4, fill=column_color)
        # Column shaft
        draw_rounded_rectangle(draw, (x + 5, 150, x + 20, 280), radius=3, fill=hex_to_rgb(COLORS['secondary']))

    # Pediment (triangular roof element)
    pediment_points = [(60, 150), (150, 80), (240, 150)]
    draw.polygon(pediment_points, fill=column_color)

    # Abstract bank entrance
    draw_rounded_rectangle(draw, (120, 300, 180, 380), radius=6, fill=hex_to_rgb(COLORS['accent']))

    # ===== CENTER-RIGHT: Money Flow Visualization =====

    # Flow channels (representing credit creation)
    flow_y_start = 180
    flow_y_end = 380

    # Main flow path
    draw_flow_arrow(draw, 300, 280, 450, 280, hex_to_rgb(COLORS['secondary']), width=4)
    draw_flow_arrow(draw, 450, 280, 600, 280, hex_to_rgb(COLORS['accent']), width=4)
    draw_flow_arrow(draw, 600, 280, 750, 280, hex_to_rgb(COLORS['primary']), width=4)

    # Vertical flow indicators
    for x in [375, 525, 675]:
        draw_flow_arrow(draw, x, 200, x, 260, hex_to_rgb(COLORS['light']), width=2)
        draw_flow_arrow(draw, x, 300, x, 360, hex_to_rgb(COLORS['secondary']), width=2)

    # Coins representing money in circulation
    coin_positions = [
        (340, 240, 25),
        (420, 260, 20),
        (490, 235, 28),
        (560, 255, 22),
        (640, 245, 24),
        (710, 258, 18),
    ]
    for cx, cy, r in coin_positions:
        draw_coin(draw, cx, cy, r, hex_to_rgb(COLORS['accent']), hex_to_rgb(COLORS['light']))

    # Additional decorative coins
    draw_coin(draw, 380, 320, 15, hex_to_rgb(COLORS['light']), hex_to_rgb(COLORS['accent']))
    draw_coin(draw, 530, 310, 12, hex_to_rgb(COLORS['secondary']), hex_to_rgb(COLORS['primary']))
    draw_coin(draw, 680, 325, 14, hex_to_rgb(COLORS['primary']), hex_to_rgb(COLORS['secondary']))

    # ===== DECORATIVE CIRCLES (Abstract currency symbols) =====

    # Large subtle circle (top right)
    draw.ellipse([750, 30, 920, 200], outline=hex_to_rgb(COLORS['secondary']), width=3)
    draw.ellipse([780, 60, 890, 170], outline=hex_to_rgb(COLORS['light']), width=2)

    # Small accent circles
    circle_positions = [
        (870, 120, 20),
        (840, 160, 12),
        (900, 150, 8),
    ]
    for cx, cy, r in circle_positions:
        draw.ellipse([cx-r, cy-r, cx+r, cy+r], fill=hex_to_rgb(COLORS['accent']))

    # ===== CHART ELEMENT (Abstract growth/revenue chart) =====

    # Chart background panel
    draw_rounded_rectangle(draw, (700, 350, 900, 480), radius=8,
                           fill=hex_to_rgb(COLORS['primary']))

    # Chart bars
    bar_width = 25
    bar_gap = 15
    bar_start_x = 720
    bar_heights = [40, 65, 55, 85, 95]
    bar_colors = [hex_to_rgb(COLORS['secondary']), hex_to_rgb(COLORS['accent']),
                  hex_to_rgb(COLORS['light']), hex_to_rgb(COLORS['secondary']), hex_to_rgb(COLORS['accent'])]

    for i, (h, c) in enumerate(zip(bar_heights, bar_colors)):
        x = bar_start_x + i * (bar_width + bar_gap)
        draw_rounded_rectangle(draw, (x, 450 - h, x + bar_width, 460), radius=3, fill=c)

    # ===== TYPOGRAPHY =====

    # Load fonts - using system fonts as fallback for Chinese
    font_paths = {
        'title': 'C:/Users/Administrator/.claude/skills/canvas-design/canvas-fonts/NotoSansCJKsc-Regular.otf',
        'subtitle': 'C:/Users/Administrator/.claude/skills/canvas-design/canvas-fonts/NotoSansCJKsc-Regular.otf',
        'series': 'C:/Users/Administrator/.claude/skills/canvas-design/canvas-fonts/NotoSansCJKsc-Regular.otf',
        'en': 'C:/Users/Administrator/.claude/skills/canvas-design/canvas-fonts/Jura-Medium.ttf',
    }

    # Try to load fonts, fall back to default if not available
    try:
        font_title = ImageFont.truetype(font_paths['title'], 52)
        font_subtitle = ImageFont.truetype(font_paths['subtitle'], 28)
        font_series = ImageFont.truetype(font_paths['series'], 16)
        font_en = ImageFont.truetype(font_paths['en'], 14)
    except:
        font_title = ImageFont.load_default()
        font_subtitle = ImageFont.load_default()
        font_series = ImageFont.load_default()
        font_en = ImageFont.load_default()

    # Series label (top left, small)
    series_text = "经济学通识课系列"
    draw.text((60, 40), series_text, fill=hex_to_rgb(COLORS['secondary']), font=font_series)

    # Main title
    title_text = "货币的本质与信用创造"
    title_bbox = draw.textbbox((0, 0), title_text, font=font_title)
    title_width = title_bbox[2] - title_bbox[0]
    title_x = (WIDTH - title_width) // 2
    draw.text((title_x, 400), title_text, fill=hex_to_rgb(COLORS['primary']), font=font_title)

    # Subtitle with quotes
    subtitle_text = "银行如何'印钱'"
    subtitle_bbox = draw.textbbox((0, 0), subtitle_text, font=font_subtitle)
    subtitle_width = subtitle_bbox[2] - subtitle_bbox[0]
    subtitle_x = (WIDTH - subtitle_width) // 2
    draw.text((subtitle_x, 460), subtitle_text, fill=hex_to_rgb(COLORS['secondary']), font=font_subtitle)

    # English subtitle
    en_text = "The Nature of Money and Credit Creation"
    en_bbox = draw.textbbox((0, 0), en_text, font=font_en)
    en_width = en_bbox[2] - en_bbox[0]
    en_x = (WIDTH - en_width) // 2
    draw.text((en_x, 495), en_text, fill=hex_to_rgb(COLORS['light']), font=font_en)

    # ===== BOTTOM DECORATIVE BAR =====

    # Accent bar at bottom
    draw_rounded_rectangle(draw, (0, HEIGHT - 8, WIDTH, HEIGHT), radius=0, fill=hex_to_rgb(COLORS['primary']))

    # Small accent square (visual anchor)
    draw_rounded_rectangle(draw, (WIDTH//2 - 30, HEIGHT - 50, WIDTH//2 + 30, HEIGHT - 20),
                           radius=4, fill=hex_to_rgb(COLORS['accent']))

    # Save the image
    output_path = "D:/新课开发/经济学/15_货币的本质与信用创造/slides/imgs/cover.jpg"
    img.save(output_path, 'JPEG', quality=95)
    print(f"Cover saved to: {output_path}")

    return img

if __name__ == "__main__":
    create_cover()
