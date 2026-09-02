"""
Refined slide 89 comparison illustration - polished version
Create a museum-quality comparison image for psychology course PPT.
"""

from PIL import Image, ImageDraw, ImageFont
import os
import math

# Color palette
PRIMARY = "#2b2d42"      # dark blue-gray
SECONDARY = "#8d99ae"    # gray-blue
BG = "#edf2f4"           # light gray-white
ACCENT = "#ef233c"       # bright red
ACCENT_DARK = "#d90429"  # dark red

# Canvas dimensions
WIDTH = 1280
HEIGHT = 720

# Create canvas
canvas = Image.new('RGB', (WIDTH, HEIGHT), BG)

# Load fonts
def load_font(path, size):
    try:
        return ImageFont.truetype(path, size)
    except:
        return ImageFont.load_default()

font_title = load_font('C:/Users/Administrator/.claude/skills/canvas-design/canvas-fonts/BigShoulders-Bold.ttf', 48)
font_label = load_font('C:/Users/Administrator/.claude/skills/canvas-design/canvas-fonts/InstrumentSans-Bold.ttf', 26)
font_chinese_title = load_font('C:/Windows/Fonts/msyh.ttc', 36)
font_chinese_label = load_font('C:/Windows/Fonts/msyh.ttc', 22)
font_chinese_small = load_font('C:/Windows/Fonts/msyh.ttc', 18)
font_body_en = load_font('C:/Users/Administrator/.claude/skills/canvas-design/canvas-fonts/InstrumentSans-Regular.ttf', 16)

# Create RGBA layer for overlays with transparency
overlay = Image.new('RGBA', (WIDTH, HEIGHT), (0, 0, 0, 0))
draw_overlay = ImageDraw.Draw(overlay)

# Draw directly on main canvas
draw = ImageDraw.Draw(canvas)

# ========== CENTER DIVIDER ==========
draw.line([(WIDTH//2, 60), (WIDTH//2, HEIGHT-60)], fill=SECONDARY, width=2)

# ========== LEFT SIDE: WRONG METHOD ==========
left_x = WIDTH // 4

# Title: WRONG with red X mark
draw.text((left_x, 40), "WRONG", font=font_title, fill=ACCENT, anchor="mt")
draw.text((left_x, 95), "看完就翻页", font=font_chinese_title, fill=PRIMARY, anchor="mt")

# Visual: Scattered pages that fade away (representing no retention)
# Page elements with increasing scatter and fading
page_data = [
    (-100, 180, 0.3, 255),
    (-50, 210, 0.5, 220),
    (0, 245, 0.7, 180),
    (40, 280, 0.9, 140),
    (70, 320, 1.1, 100),
    (90, 365, 1.3, 70),
    (105, 415, 1.5, 45),
    (115, 465, 1.7, 25),
]

for offset_x, base_y, rotation, alpha in page_data:
    # Each page tilts more and fades more
    page_width = 70
    page_height = 90

    # Create page polygon
    cos_r = math.cos(rotation)
    sin_r = math.sin(rotation)

    cx = left_x + offset_x
    cy = base_y

    # Points for rotated rectangle
    hw, hh = page_width/2, page_height/2
    corners = [
        (-hw*cos_r - (-hh)*sin_r, -hw*sin_r + (-hh)*cos_r),
        (hw*cos_r - (-hh)*sin_r, hw*sin_r + (-hh)*cos_r),
        (hw*cos_r - hh*sin_r, hw*sin_r + hh*cos_r),
        (-hw*cos_r - hh*sin_r, -hw*sin_r + hh*cos_r),
    ]
    points = [(cx + p[0], cy + p[1]) for p in corners]

    fill = (239, 35, 60, alpha)
    draw_overlay.polygon(points, fill=fill, outline=None)

    # Page lines (text representation)
    line_alpha = int(alpha * 0.5)
    for i in range(3):
        line_y = cy - 20 + i * 15
        draw_overlay.line(
            [(cx - 25, line_y), (cx + 25, line_y)],
            fill=(255, 255, 255, line_alpha), width=2
        )

# Scattered dots - lost information
import random
random.seed(42)
for i in range(40):
    x = left_x + random.randint(-180, 80)
    y = 180 + random.randint(0, 350)
    size = random.randint(2, 6)
    alpha = random.randint(20, 120)
    draw_overlay.ellipse(
        [x-size, y-size, x+size, y+size],
        fill=(239, 35, 60, alpha)
    )

# Fade gradient at bottom left
for y in range(500, 640):
    alpha = int(80 * (1 - (y - 500) / 140))
    draw_overlay.line(
        [(left_x - 160, y), (left_x + 60, y)],
        fill=(239, 35, 60, alpha), width=1
    )

# Descriptions
draw.text((left_x, 560), "看一遍就过", font=font_chinese_label, fill=ACCENT, anchor="mt")
draw.text((left_x, 595), "什么都没留下", font=font_chinese_small, fill=ACCENT, anchor="mt")
draw.text((left_x, 665), "Read once, move on — nothing stays", font=font_body_en, fill=SECONDARY, anchor="mt")

# ========== RIGHT SIDE: RIGHT METHOD ==========
right_x = 3 * WIDTH // 4

# Title: RIGHT with checkmark
draw.text((right_x, 40), "RIGHT", font=font_title, fill=PRIMARY, anchor="mt")
draw.text((right_x, 95), "正确方法", font=font_chinese_title, fill=PRIMARY, anchor="mt")

# Visual: Person in thoughtful pose with closed eyes, stable book
person_x = right_x
person_y = 260

# Head (solid circle)
head_radius = 55
draw_overlay.ellipse(
    [person_x - head_radius, person_y - head_radius,
     person_x + head_radius, person_y + head_radius],
    fill=PRIMARY
)

# Closed eyes (arcs - peaceful recall)
draw_overlay.arc(
    [person_x - 30, person_y - 8, person_x - 8, person_y + 8],
    0, 180, fill=BG, width=4
)
draw_overlay.arc(
    [person_x + 8, person_y - 8, person_x + 30, person_y + 8],
    0, 180, fill=BG, width=4
)

# Shoulders/body
shoulder_y = person_y + head_radius + 10
draw_overlay.polygon([
    (person_x - 90, shoulder_y + 100),
    (person_x + 90, shoulder_y + 100),
    (person_x + 70, shoulder_y + 10),
    (person_x - 70, shoulder_y + 10),
], fill=PRIMARY)

# Stable book in front
book_x = right_x - 110
book_y = 420
book_w, book_h = 220, 90

# Book body
draw_overlay.rectangle(
    [book_x, book_y, book_x + book_w, book_y + book_h],
    fill=SECONDARY
)
# Book spine (darker)
draw_overlay.rectangle(
    [book_x, book_y, book_x + 12, book_y + book_h],
    fill=PRIMARY
)
# Page lines (stable, organized)
for i in range(4):
    line_y = book_y + 18 + i * 18
    line_w = 160 - i * 30
    draw_overlay.line(
        [(book_x + 30, line_y), (book_x + 30 + line_w, line_y)],
        fill=BG, width=3
    )

# Memory network - hexagonal pattern above head
mem_x = right_x
mem_y = 160

# Central core (deep encoding)
draw_overlay.ellipse(
    [mem_x - 10, mem_y - 10, mem_x + 10, mem_y + 10],
    fill=ACCENT_DARK
)

# Inner ring - 6 nodes
for i in range(6):
    angle = (i / 6) * 2 * math.pi - math.pi/2
    x = mem_x + int(35 * math.cos(angle))
    y = mem_y + int(35 * math.sin(angle))
    draw_overlay.ellipse([x-6, y-6, x+6, y+6], fill=PRIMARY)

# Outer ring - 6 nodes
for i in range(6):
    angle = (i / 6) * 2 * math.pi - math.pi/2 + 0.3
    x = mem_x + int(70 * math.cos(angle))
    y = mem_y + int(70 * math.sin(angle))
    draw_overlay.ellipse([x-5, y-5, x+5, y+5], fill=SECONDARY)

# Connection lines from head to memory
for i in range(6):
    angle = (i / 6) * 2 * math.pi - math.pi/2
    x = mem_x + int(35 * math.cos(angle))
    y = mem_y + int(35 * math.sin(angle))
    draw_overlay.line(
        [(person_x, person_y - head_radius), (x, y)],
        fill=SECONDARY, width=1
    )

# Additional connection lines
for i in range(6):
    angle = (i / 6) * 2 * math.pi - math.pi/2 + 0.3
    x = mem_x + int(70 * math.cos(angle))
    y = mem_y + int(70 * math.sin(angle))
    draw_overlay.line(
        [(person_x, person_y - head_radius), (x, y)],
        fill=SECONDARY, width=1
    )

# Descriptions
draw.text((right_x, 545), "每看完一段", font=font_chinese_label, fill=PRIMARY, anchor="mt")
draw.text((right_x, 580), "停下来闭眼回忆", font=font_chinese_small, fill=PRIMARY, anchor="mt")
draw.text((right_x, 665), "Stop & recall after each paragraph", font=font_body_en, fill=SECONDARY, anchor="mt")

# ========== COMPOSITE FINAL IMAGE ==========
# Create final canvas
final = Image.new('RGB', (WIDTH, HEIGHT), BG)
final.paste(canvas, (0, 0))
final.paste(overlay, (0, 0), overlay)

# Add subtle border frame
draw_final = ImageDraw.Draw(final)
draw_final.rectangle([8, 8, WIDTH-8, HEIGHT-8], outline=SECONDARY, width=1)

# Save
output_path = "D:/新课开发/心理学/26-记忆与学习：更有效地记住和理解事物/04_PPT/slides/imgs/slide-89.png"
final.save(output_path, "PNG", quality=95)
print(f"Image saved: {output_path}")
print(f"Dimensions: {final.size}")
