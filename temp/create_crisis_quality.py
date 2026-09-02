from PIL import Image, ImageDraw, ImageFont
import os

# Colors
DARK_BLUE_GRAY = (43, 45, 66)      # #2b2d42
GRAY = (141, 153, 174)             # #8d99ae
BRIGHT_RED = (239, 35, 60)         # #ef233c
LIGHT_GRAY = (237, 242, 244)       # #edf2f4
WHITE = (255, 255, 255)            # #ffffff

# Canvas size (16:9 aspect ratio for slides)
WIDTH = 1920
HEIGHT = 1080

# Output path
OUTPUT_PATH = "D:/新课开发/生态链/6.生态链治理与链主责任：赋能的同时怎么守住系统韧性/06_授课PPT/slides/imgs/crisis-quality.png"

# Font paths
FONT_DIR = "C:/Users/Administrator/.claude/skills/canvas-design/canvas-fonts"

def load_font(size, bold=False):
    font_name = "WorkSans-Bold.ttf" if bold else "WorkSans-Regular.ttf"
    try:
        return ImageFont.truetype(os.path.join(FONT_DIR, font_name), size)
    except:
        return ImageFont.load_default()

def draw_warning_triangle(draw, center, size, color):
    """Draw a warning triangle"""
    x, y = center
    half = size // 2
    points = [
        (x, y - half),           # Top
        (x - half, y + half),    # Bottom left
        (x + half, y + half)     # Bottom right
    ]
    draw.polygon(points, fill=color, outline=DARK_BLUE_GRAY)

def draw_inspection_circle(draw, center, radius, color, outline_color=None):
    """Draw an inspection/quality circle"""
    x, y = center
    draw.ellipse([x-radius, y-radius, x+radius, y+radius], fill=color, outline=outline_color or DARK_BLUE_GRAY, width=3)

def draw_rect_with_crack(draw, rect, crack_color=BRIGHT_RED):
    """Draw a rectangle with internal crack pattern suggesting failure"""
    x1, y1, x2, y2 = rect
    # Main rectangle
    draw.rectangle([x1, y1, x2, y2], fill=LIGHT_GRAY, outline=DARK_BLUE_GRAY, width=2)

    # Crack lines inside - representing quality failure
    mid_x = (x1 + x2) // 2
    mid_y = (y1 + y2) // 2

    # Central crack from top
    draw.line([(mid_x, y1), (mid_x - 15, mid_y - 20)], fill=crack_color, width=2)
    draw.line([(mid_x - 15, mid_y - 20), (mid_x + 10, mid_y)], fill=crack_color, width=2)
    draw.line([(mid_x + 10, mid_y), (mid_x - 5, y2)], fill=crack_color, width=2)

def draw_supply_chain_arrow(draw, start, end, color):
    """Draw supply chain connection arrow"""
    draw.line([start, end], fill=color, width=4)
    # Arrow head
    import math
    dx = end[0] - start[0]
    dy = end[1] - start[1]
    length = math.sqrt(dx*dx + dy*dy)
    if length == 0:
        return
    dx, dy = dx/length, dy/length
    arrow_size = 12
    # Right arrow head
    perp_x, perp_y = -dy, dx
    ax1 = end[0] - dx * arrow_size + perp_x * arrow_size // 2
    ay1 = end[1] - dy * arrow_size + perp_y * arrow_size // 2
    ax2 = end[0] - dx * arrow_size - perp_x * arrow_size // 2
    ay2 = end[1] - dy * arrow_size - perp_y * arrow_size // 2
    draw.polygon([end, (ax1, ay1), (ax2, ay2)], fill=color)

def draw_x_mark(draw, center, size, color):
    """Draw an X mark for reject/failure"""
    x, y = center
    half = size // 2
    draw.line([(x - half, y - half), (x + half, y + half)], fill=color, width=4)
    draw.line([(x + half, y - half), (x - half, y + half)], fill=color, width=4)

def create_crisis_illustration():
    # Create image
    img = Image.new('RGB', (WIDTH, HEIGHT), LIGHT_GRAY)
    draw = ImageDraw.ImageDraw(img)

    # === BACKGROUND LAYERS ===
    # Dark header bar
    draw.rectangle([0, 0, WIDTH, 120], fill=DARK_BLUE_GRAY)

    # Left sidebar
    draw.rectangle([0, 0, 80, HEIGHT], fill=DARK_BLUE_GRAY)

    # === HEADER CONTENT ===
    font_title = load_font(48, bold=True)
    font_label = load_font(24)
    font_small = load_font(18)

    # Title text
    draw.text((120, 35), "QUALITY CRISIS", fill=WHITE, font=font_title)
    draw.text((580, 45), "Supply Chain Recall Protocol", fill=GRAY, font=font_label)

    # === CENTRAL COMPOSITION ===
    # Large warning triangle in center
    warning_center = (WIDTH // 2 - 100, HEIGHT // 2 - 50)
    draw_warning_triangle(draw, warning_center, 280, BRIGHT_RED)

    # Exclamation mark in warning triangle
    font_large = load_font(120, bold=True)
    draw.text((warning_center[0] - 25, warning_center[1] - 60), "!", fill=WHITE, font=font_large)

    # === PRODUCT FAILURE ZONE (Left side) ===
    # Products with X marks - showing rejected items
    product_y = 280
    for i in range(3):
        x = 180 + i * 90
        # Product box
        draw.rectangle([x, product_y, x + 70, product_y + 70], fill=WHITE, outline=DARK_BLUE_GRAY, width=2)
        # X mark
        draw_x_mark(draw, (x + 35, product_y + 35), 30, BRIGHT_RED)

    # Label
    draw.text((180, 360), "DEFECTIVE", fill=DARK_BLUE_GRAY, font=font_small)
    draw.text((180, 380), "PRODUCTS", fill=GRAY, font=font_small)

    # === INSPECTION STATION (Center-left) ===
    inspect_x = 480
    inspect_y = HEIGHT // 2 - 40
    draw_inspection_circle(draw, (inspect_x, inspect_y), 60, WHITE, DARK_BLUE_GRAY)
    draw_inspection_circle(draw, (inspect_x, inspect_y), 40, GRAY)
    # Magnifying glass hint
    draw.text((inspect_x - 20, inspect_y - 15), "Q", fill=WHITE, font=load_font(36, bold=True))

    # Label
    draw.text((inspect_x - 40, inspect_y + 75), "INSPECTION", fill=DARK_BLUE_GRAY, font=font_small)
    draw.text((inspect_x - 25, inspect_y + 93), "POINT", fill=GRAY, font=font_small)

    # === QUALITY BREAKDOWN (Center) ===
    # Broken chain links representing quality failure
    chain_y = HEIGHT // 2 + 80
    for i in range(5):
        x = 600 + i * 80
        color = BRIGHT_RED if i >= 3 else GRAY
        # Broken chain link shape
        draw.ellipse([x, chain_y, x + 50, chain_y + 30], fill=color, outline=DARK_BLUE_GRAY, width=2)

    # Arrow from inspection to warning
    draw_supply_chain_arrow(draw, (inspect_x + 60, inspect_y), (warning_center[0] - 140, warning_center[1]), BRIGHT_RED)

    # === SUPPLY CHAIN FLOW (Right side) ===
    # Warehouse boxes showing recall
    box_start_x = WIDTH // 2 + 200
    box_y = 250

    for row in range(2):
        for col in range(4):
            x = box_start_x + col * 100
            y = box_y + row * 100
            # Box
            draw.rectangle([x, y, x + 80, y + 80], fill=WHITE, outline=DARK_BLUE_GRAY, width=2)
            # Warning stripe pattern at top of box
            stripe_height = 15
            for s in range(0, 80, 16):
                draw.polygon([(x + s, y), (x + s + 8, y), (x + s + 4, y + stripe_height)], fill=BRIGHT_RED)
            # Recall X
            if row == 0 and col >= 2:
                draw_x_mark(draw, (x + 40, y + 50), 25, BRIGHT_RED)

    # Label
    draw.text((box_start_x, box_y + 210), "RECALL", fill=BRIGHT_RED, font=font_label)
    draw.text((box_start_x, box_y + 240), "SUPPLY CHAIN", fill=DARK_BLUE_GRAY, font=font_small)

    # Arrow from warning to recall
    draw.line([(warning_center[0] + 140, warning_center[1]), (box_start_x - 20, box_y + 40)], fill=BRIGHT_RED, width=3)

    # === RISK MATRIX (Bottom left) ===
    matrix_x = 120
    matrix_y = 500

    # Matrix background
    draw.rectangle([matrix_x, matrix_y, matrix_x + 300, matrix_y + 200], fill=WHITE, outline=DARK_BLUE_GRAY, width=2)

    # Grid lines
    for i in range(1, 4):
        draw.line([(matrix_x, matrix_y + i * 50), (matrix_x + 300, matrix_y + i * 50)], fill=LIGHT_GRAY, width=1)
        draw.line([(matrix_x + i * 75, matrix_y), (matrix_x + i * 75, matrix_y + 200)], fill=LIGHT_GRAY, width=1)

    # Risk points (red dots in high-risk zones)
    risk_points = [
        (matrix_x + 30, matrix_y + 30, BRIGHT_RED),
        (matrix_x + 100, matrix_y + 80, BRIGHT_RED),
        (matrix_x + 180, matrix_y + 50, BRIGHT_RED),
        (matrix_x + 250, matrix_y + 120, BRIGHT_RED),
        (matrix_x + 50, matrix_y + 150, GRAY),
        (matrix_x + 200, matrix_y + 170, BRIGHT_RED),
    ]
    for px, py, color in risk_points:
        draw.ellipse([px - 8, py - 8, px + 8, py + 8], fill=color, outline=DARK_BLUE_GRAY, width=1)

    # Matrix labels
    draw.text((matrix_x + 100, matrix_y + 205), "RISK ASSESSMENT", fill=DARK_BLUE_GRAY, font=font_small)

    # === WARNING INDICATORS (Bottom center) ===
    indicator_y = 700
    indicator_spacing = 120
    indicator_start = WIDTH // 2 - 180

    for i in range(4):
        x = indicator_start + i * indicator_spacing
        # Indicator light
        color = BRIGHT_RED if i < 3 else GRAY
        draw_inspection_circle(draw, (x, indicator_y), 25, color, DARK_BLUE_GRAY)
        # Label
        labels = ["CRITICAL", "HIGH", "MEDIUM", "LOW"]
        draw.text((x - 30, indicator_y + 35), labels[i], fill=DARK_BLUE_GRAY if i < 3 else GRAY, font=font_small)

    # === BOTTOM STATS BAR ===
    stats_y = HEIGHT - 100
    draw.rectangle([0, stats_y, WIDTH, HEIGHT], fill=DARK_BLUE_GRAY)

    # Stats
    stats = [
        ("12,400", "Units Affected"),
        ("3", "Suppliers Involved"),
        ("47%", "Failure Rate"),
        ("LEVEL 3", "Alert Status")
    ]

    stat_x_start = 150
    for i, (value, label) in enumerate(stats):
        x = stat_x_start + i * 450
        draw.text((x, stats_y + 20), value, fill=WHITE if i < 3 else BRIGHT_RED, font=load_font(36, bold=True))
        draw.text((x, stats_y + 60), label, fill=GRAY, font=font_small)

    # === DECORATIVE ELEMENTS ===
    # Circuit-like lines suggesting industrial/tech theme
    line_y = 180
    for i in range(8):
        x = 100 + i * 200
        draw.line([(x, line_y), (x + 100, line_y)], fill=GRAY, width=2)
        draw.rectangle([x + 95, line_y - 5, x + 105, line_y + 5], fill=GRAY)

    # Small warning triangles scattered
    small_triangles = [
        (900, 200),
        (1100, 180),
        (1400, 220),
    ]
    for tx, ty in small_triangles:
        draw_warning_triangle(draw, (tx, ty), 30, BRIGHT_RED)

    # === PROCESS FLOW (Top right) ===
    flow_x = WIDTH - 500
    flow_y = 50
    steps = ["DETECT", "REPORT", "RECALL", "RESOLVE"]

    for i, step in enumerate(steps):
        # Step circle
        circle_x = flow_x + i * 110
        color = BRIGHT_RED if i == 2 else (GRAY if i > 2 else WHITE)
        draw_inspection_circle(draw, (circle_x, flow_y), 30, color, DARK_BLUE_GRAY)
        draw.text((circle_x - 25, flow_y + 40), step, fill=WHITE if i <= 2 else GRAY, font=font_small)
        # Arrow between steps
        if i < 3:
            draw.line([(circle_x + 35, flow_y), (circle_x + 75, flow_y)], fill=GRAY, width=2)

    # === SAVE ===
    img.save(OUTPUT_PATH, 'PNG', quality=95)
    print(f"Image saved to: {OUTPUT_PATH}")

if __name__ == "__main__":
    create_crisis_illustration()
