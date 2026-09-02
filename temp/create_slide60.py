from PIL import Image, ImageDraw, ImageFont
import os

# Canvas dimensions
W, H = 1920, 1080

# Colors
PRIMARY = "#2b2d42"
SECONDARY = "#8d99ae"
ACCENT = "#ef233c"
LIGHT = "#edf2f4"
BG = "#ffffff"

# Create image
img = Image.new("RGB", (W, H), BG)
draw = ImageDraw.Draw(img)

# Font paths - use system fonts
font_path_header = "C:/Windows/Fonts/arialbd.ttf"  # Bold
font_path_body = "C:/Windows/Fonts/arial.ttf"

# Try to load fonts, fallback gracefully
try:
    font_header = ImageFont.truetype(font_path_header, 48)
    font_subheader = ImageFont.truetype(font_path_header, 36)
    font_bullet = ImageFont.truetype(font_path_body, 32)
    font_label = ImageFont.truetype(font_path_body, 24)
except:
    font_header = ImageFont.load_default()
    font_subheader = font_header
    font_bullet = font_header
    font_label = font_header

# Layout constants
MARGIN = 80
COLUMN_GAP = 40
COLUMN_WIDTH = (W - 2 * MARGIN - 2 * COLUMN_GAP) // 3
CARD_HEIGHT = 600
CARD_TOP = 240
CORNER_RADIUS = 12

# Column backgrounds (light tints)
COLUMN_BG_1 = "#f8f9fa"
COLUMN_BG_2 = "#f8f9fa"
COLUMN_BG_3 = "#f8f9fa"

# Accent line colors for each column
ACCENT_1 = "#2b2d42"
ACCENT_2 = "#8d99ae"
ACCENT_3 = "#ef233c"

def draw_rounded_rect(draw, xy, radius, fill):
    x1, y1, x2, y2 = xy
    # Draw rectangle with rounded corners
    draw.rectangle([x1 + radius, y1, x2 - radius, y2], fill=fill)
    draw.rectangle([x1, y1 + radius, x2, y2 - radius], fill=fill)
    draw.pieslice([x1, y1, x1 + 2*radius, y1 + 2*radius], 180, 270, fill=fill)
    draw.pieslice([x2 - 2*radius, y1, x2, y1 + 2*radius], 270, 360, fill=fill)
    draw.pieslice([x1, y2 - 2*radius, x1 + 2*radius, y2], 90, 180, fill=fill)
    draw.pieslice([x2 - 2*radius, y2 - 2*radius, x2, y2], 0, 90, fill=fill)

# Title
title = "底线类型分类"
bbox = draw.textbbox((0, 0), title, font=font_header)
title_w = bbox[2] - bbox[0]
draw.text(((W - title_w) // 2, 60), title, font=font_header, fill=PRIMARY)

# Subtitle
subtitle = "Bottom Line Type Classification"
bbox = draw.textbbox((0, 0), subtitle, font=font_label)
subtitle_w = bbox[2] - bbox[0]
draw.text(((W - subtitle_w) // 2, 130), subtitle, font=font_label, fill=SECONDARY)

# Column data
columns = [
    {
        "title": "业务连续性底线",
        "bullets": ["保证基础运营不中断", "最低产出保障"],
        "bg": COLUMN_BG_1,
        "accent": ACCENT_1
    },
    {
        "title": "现金流底线",
        "bullets": ["保证资金链不断裂", "最低资金储备"],
        "bg": COLUMN_BG_2,
        "accent": ACCENT_2
    },
    {
        "title": "核心能力底线",
        "bullets": ["保证核心竞争力不失", "最低人员配置"],
        "bg": COLUMN_BG_3,
        "accent": ACCENT_3
    }
]

# Draw each column
for i, col in enumerate(columns):
    x = MARGIN + i * (COLUMN_WIDTH + COLUMN_GAP)

    # Card background
    draw_rounded_rect(draw, (x, CARD_TOP, x + COLUMN_WIDTH, CARD_TOP + CARD_HEIGHT), CORNER_RADIUS, col["bg"])

    # Top accent bar
    draw_rounded_rect(draw, (x, CARD_TOP, x + COLUMN_WIDTH, CARD_TOP + 8), 4, col["accent"])

    # Column number
    num_text = f"0{i + 1}"
    bbox = draw.textbbox((0, 0), num_text, font=font_subheader)
    num_w = bbox[2] - bbox[0]
    draw.text((x + 40, CARD_TOP + 50), num_text, font=font_subheader, fill=col["accent"])

    # Column title
    bbox = draw.textbbox((0, 0), col["title"], font=font_header)
    title_w = bbox[2] - bbox[0]
    draw.text((x + 40, CARD_TOP + 120), col["title"], font=font_header, fill=PRIMARY)

    # Divider line
    draw.line([(x + 40, CARD_TOP + 195), (x + COLUMN_WIDTH - 40, CARD_TOP + 195)], fill=SECONDARY, width=1)

    # Bullets
    bullet_y = CARD_TOP + 240
    for bullet in col["bullets"]:
        # Bullet point (small circle)
        draw.ellipse([x + 50, bullet_y + 8, x + 58, bullet_y + 16], fill=col["accent"])
        # Bullet text
        draw.text((x + 80, bullet_y), bullet, font=font_bullet, fill=PRIMARY)
        bullet_y += 80

# Decorative elements - subtle grid pattern in background
for i in range(0, W, 60):
    draw.line([(i, 0), (i, H)], fill="#f5f5f5", width=1)
for i in range(0, H, 60):
    draw.line([(0, i), (W, i)], fill="#f5f5f5", width=1)

# Save - using raw string for Windows path with Chinese characters
output_path = r"D:\新课开发\生态链\6.生态链治理与链主责任：赋能的同时怎么守住系统韧性\06_授课PPT\slides\imgs\slide60.png"
os.makedirs(os.path.dirname(output_path), exist_ok=True)
img.save(output_path, "PNG", quality=95)
print(f"Saved to: {output_path}")