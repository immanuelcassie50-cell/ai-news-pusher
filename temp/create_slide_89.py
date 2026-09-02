"""
Create slide 89 comparison illustration for psychology course PPT.
Topic: Common Mistake 3 - Flipping Pages After Reading
Wrong: Read once and move on, nothing stays
Right: After each paragraph, stop and recall with eyes closed
"""

from PIL import Image, ImageDraw, ImageFont
import os

# Color palette
PRIMARY = "#2b2d42"      # dark blue-gray for titles
SECONDARY = "#8d99ae"    # gray-blue for secondary text
BG = "#edf2f4"           # light gray-white background
ACCENT = "#ef233c"       # bright red for wrong method
ACCENT_DARK = "#d90429"  # dark red

# Canvas dimensions (landscape A3 proportion for PPT)
WIDTH = 1280
HEIGHT = 720

# Create the main canvas
canvas = Image.new('RGB', (WIDTH, HEIGHT), BG)
draw = ImageDraw.Draw(canvas)

# Load fonts
font_paths = {
    'title': 'C:/Users/Administrator/.claude/skills/canvas-design/canvas-fonts/BigShoulders-Bold.ttf',
    'label': 'C:/Users/Administrator/.claude/skills/canvas-design/canvas-fonts/InstrumentSans-Bold.ttf',
    'chinese': 'C:/Windows/Fonts/msyh.ttc',  # Microsoft YaHei for Chinese
    'body': 'C:/Users/Administrator/.claude/skills/canvas-design/canvas-fonts/InstrumentSans-Regular.ttf',
}

def load_font(path, size):
    try:
        return ImageFont.truetype(path, size)
    except:
        return ImageFont.load_default()

font_title = load_font(font_paths['title'], 42)
font_label = load_font(font_paths['label'], 24)
font_chinese_large = load_font(font_paths['chinese'], 32)
font_chinese_small = load_font(font_paths['chinese'], 20)
font_body = load_font(font_paths['body'], 16)

# ========== LEFT SIDE: WRONG METHOD (Red accent) ==========
left_center_x = WIDTH // 4

# Divider line
draw.line([(WIDTH//2, 80), (WIDTH//2, HEIGHT-80)], fill=SECONDARY, width=2)

# Title: Wrong method
draw.text((left_center_x, 50), "WRONG", font=font_title, fill=ACCENT, anchor="mt")
draw.text((left_center_x, 100), "看完就翻页", font=font_chinese_large, fill=PRIMARY, anchor="mt")

# Visual: Book pages quickly flipping - scattered/fading elements
# Represent pages as thin rectangles that scatter and fade
import math
for i in range(8):
    offset_x = (i - 3.5) * 60 + math.sin(i * 0.8) * 20
    offset_y = 200 + i * 35 + math.cos(i * 1.2) * 15
    alpha = int(255 * (1 - i * 0.1))
    color = (239, 35, 60, max(50, alpha))  # Red with fading

    # Page shape - tilted rectangles representing fast movement
    page_points = [
        (left_center_x + offset_x - 40, offset_y),
        (left_center_x + offset_x + 40 + i*5, offset_y + 5),
        (left_center_x + offset_x + 35 + i*5, offset_y + 50),
        (left_center_x + offset_x - 45, offset_y + 45),
    ]

    # Draw as polygon (simulated with lines for PIL)
    fill_color = (239, 35, 60, alpha)
    overlay = Image.new('RGBA', (WIDTH, HEIGHT), (0, 0, 0, 0))
    overlay_draw = ImageDraw.Draw(overlay)
    overlay_draw.polygon([(p[0], p[1]) for p in page_points], fill=fill_color)
    canvas.paste(overlay, (0, 0), overlay)

# Scattered dots representing lost information
import random
random.seed(42)
for _ in range(30):
    x = left_center_x + random.randint(-150, 150)
    y = 200 + random.randint(0, 350)
    size = random.randint(2, 5)
    alpha = random.randint(30, 150)
    overlay_draw.ellipse([x-size, y-size, x+size, y+size], fill=(239, 35, 60, alpha))

# Fade out gradient at bottom
for y in range(500, 600):
    alpha = int(100 * (1 - (y - 500) / 100))
    draw.line([(left_center_x - 200, y), (left_center_x + 200, y)], fill=(239, 35, 60, alpha))

# Description text
draw.text((left_center_x, 580), "看一遍就过", font=font_chinese_small, fill=ACCENT, anchor="mt")
draw.text((left_center_x, 610), "什么都没留下", font=font_chinese_small, fill=ACCENT, anchor="mt")
draw.text((left_center_x, 650), "Read once, move on, nothing stays", font=font_body, fill=SECONDARY, anchor="mt")

# ========== RIGHT SIDE: RIGHT METHOD (Cool colors) ==========
right_center_x = 3 * WIDTH // 4

# Title: Right method
draw.text((right_center_x, 50), "RIGHT", font=font_title, fill=PRIMARY, anchor="mt")
draw.text((right_center_x, 100), "正确方法", font=font_chinese_large, fill=PRIMARY, anchor="mt")

# Visual: Person pausing to recall - solid, grounded elements
# Stylized head/shoulders silhouette
head_x = right_center_x
head_y = 280

# Head (circle)
head_radius = 50
overlay_draw.ellipse(
    [head_x - head_radius, head_y - head_radius,
     head_x + head_radius, head_y + head_radius],
    fill=PRIMARY
)

# Shoulders/body (arc below)
shoulder_points = [
    (head_x - 80, head_y + head_radius + 20),
    (head_x + 80, head_y + head_radius + 20),
    (head_x + 60, head_y + head_radius + 120),
    (head_x - 60, head_y + head_radius + 120),
]
overlay_draw.polygon(shoulder_points, fill=PRIMARY)

# Closed eyes (two small arcs for peaceful recall)
overlay_draw.arc([head_x - 25, head_y - 10, head_x - 5, head_y + 10], 0, 180, fill=BG, width=3)
overlay_draw.arc([head_x + 5, head_y - 10, head_x + 25, head_y + 10], 0, 180, fill=BG, width=3)

# Book in front - solid, stable
book_left = right_center_x - 120
book_top = 420
book_width = 240
book_height = 100

# Book body
overlay_draw.rectangle(
    [book_left, book_top, book_left + book_width, book_top + book_height],
    fill=SECONDARY
)
# Book spine
overlay_draw.rectangle(
    [book_left, book_top, book_left + 15, book_top + book_height],
    fill=PRIMARY
)

# Text lines on book (representing content being absorbed)
for i in range(5):
    line_y = book_top + 20 + i * 15
    line_width = 160 - i * 20
    overlay_draw.line(
        [(book_left + 30, line_y), (book_left + 30 + line_width, line_y)],
        fill=BG, width=3
    )

# Memory/retention symbols - organized, stable dots representing encoded memory
memory_center_x = right_center_x
memory_center_y = 180

# Hexagonal pattern of dots representing stable memory traces
for ring in range(3):
    for i in range(6):
        angle = (i / 6) * 2 * 3.14159 + ring * 0.3
        radius = 30 + ring * 25
        x = memory_center_x + int(radius * math.cos(angle))
        y = memory_center_y + int(radius * math.sin(angle))
        size = 6 - ring
        overlay_draw.ellipse(
            [x - size, y - size, x + size, y + size],
            fill=PRIMARY
        )

# Central anchor point (represents deep processing)
overlay_draw.ellipse(
    [memory_center_x - 8, memory_center_y - 8,
     memory_center_x + 8, memory_center_y + 8],
    fill=ACCENT_DARK
)

# Connecting lines from head to memory (neural connections)
for i in range(6):
    angle = (i / 6) * 2 * 3.14159
    x2 = memory_center_x + int(30 * math.cos(angle))
    y2 = memory_center_y + int(30 * math.sin(angle))
    overlay_draw.line(
        [(head_x, head_y - head_radius), (x2, y2)],
        fill=SECONDARY, width=1
    )

# Description text
draw.text((right_center_x, 560), "每看完一段", font=font_chinese_small, fill=PRIMARY, anchor="mt")
draw.text((right_center_x, 590), "停下来闭眼回忆", font=font_chinese_small, fill=PRIMARY, anchor="mt")
draw.text((right_center_x, 650), "Pause & recall after each paragraph", font=font_body, fill=SECONDARY, anchor="mt")

# Ensure RGBA overlay is composited onto RGB canvas
final_canvas = Image.new('RGB', (WIDTH, HEIGHT), BG)
final_canvas.paste(canvas, (0, 0))
final_canvas.paste(overlay, (0, 0), overlay)

# Add subtle border
draw_final = ImageDraw.Draw(final_canvas)
draw_final.rectangle([10, 10, WIDTH-10, HEIGHT-10], outline=SECONDARY, width=1)

# Save
output_path = "D:/新课开发/心理学/26-记忆与学习：更有效地记住和理解事物/04_PPT/slides/imgs/slide-89.png"
os.makedirs(os.path.dirname(output_path), exist_ok=True)
final_canvas.save(output_path, "PNG", quality=95)
print(f"Image saved to: {output_path}")
