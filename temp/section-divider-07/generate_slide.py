from PIL import Image, ImageDraw, ImageFont
import os

# Canvas settings
WIDTH = 960
HEIGHT = 540

# Colors - strict adherence to provided scheme
BG_COLOR = (246, 243, 239)       # #F6F3EF warm white
PRIMARY_RED = (184, 16, 37)      # #B81025 red
DARK_GRAY = (26, 26, 26)         # #1A1A1A dark gray
MEDIUM_GRAY = (74, 74, 74)       # #4A4A4A medium gray
WHITE = (255, 255, 255)          # #FFFFFF white

# Output path
OUTPUT_PATH = "D:/新课开发/管理者的AI课/B-AI改造管理动作-共读型教学文档/完整课程包/PPT_html/slides/imgs/slide-61.png"
FONT_DIR = "C:/Users/Administrator/.claude/skills/canvas-design/canvas-fonts"
WINDOWS_FONT_DIR = "C:/Windows/Fonts"

# Create image with exact dimensions
img = Image.new('RGB', (WIDTH, HEIGHT), BG_COLOR)
draw = ImageDraw.Draw(img)

# Load fonts - BigShoulders for bold number, SimHei/SimFang for Chinese
font_07 = ImageFont.truetype(os.path.join(FONT_DIR, "BigShoulders-Bold.ttf"), 260)
font_title = ImageFont.truetype(os.path.join(WINDOWS_FONT_DIR, "simhei.ttf"), 48)
font_subtitle = ImageFont.truetype(os.path.join(WINDOWS_FONT_DIR, "simfang.ttf"), 24)

# === GEOMETRIC DESIGN ELEMENTS ===

# Primary vertical red accent bar - left side, precise placement
draw.rectangle([40, 60, 48, 480], fill=PRIMARY_RED)

# Horizontal white line at bottom - architectural grounding
draw.rectangle([40, 470, 920, 474], fill=WHITE)

# Small red square - top right corner accent
draw.rectangle([872, 60, 904, 92], fill=PRIMARY_RED)

# Secondary geometric - thin horizontal rule above title area
draw.rectangle([400, 195, 500, 197], fill=PRIMARY_RED)

# Subtle grid dots - bottom right, whisper-quiet
dot_color = (185, 180, 175)
for col in range(4):
    for row in range(2):
        x_dot = 850 + col * 14
        y_dot = 440 + row * 14
        draw.ellipse([x_dot, y_dot, x_dot + 2, y_dot + 2], fill=dot_color)

# === TYPOGRAPHY ===

# Large bold "07" - monumental presence, left-aligned
text_07 = "07"
bbox_07 = draw.textbbox((0, 0), text_07, font=font_07)
text_height_07 = bbox_07[3] - bbox_07[1]

# Vertically centered, left margin
x_07 = 55
y_07 = (HEIGHT - text_height_07) // 2 - 18

# Subtle shadow for depth
draw.text((x_07 + 1, y_07 + 1), text_07, font=font_07, fill=(205, 202, 198))
# Main text in red
draw.text((x_07, y_07), text_07, font=font_07, fill=PRIMARY_RED)

# Section title - positioned right of center
title_text = "成果沉淀与工作流设计"
x_title = 400
y_title = 205
draw.text((x_title, y_title), title_text, font=font_title, fill=DARK_GRAY)

# Subtitle - below title
subtitle_text = "90天学习路径、能力评估、提示词模板"
x_subtitle = 400
y_subtitle = 275
draw.text((x_subtitle, y_subtitle), subtitle_text, font=font_subtitle, fill=MEDIUM_GRAY)

# === MINIMAL ACCENT LINES ===
# Thin separator between title and subtitle area
draw.rectangle([400, 330, 780, 332], fill=(215, 212, 208))

# Ensure output directory exists
os.makedirs(os.path.dirname(OUTPUT_PATH), exist_ok=True)

# Save as high-quality PNG
img.save(OUTPUT_PATH, 'PNG')
print(f"Section divider slide saved to: {OUTPUT_PATH}")