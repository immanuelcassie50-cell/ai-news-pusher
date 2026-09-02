from PIL import Image, ImageDraw, ImageFont
import math

# Canvas dimensions
WIDTH = 1280
HEIGHT = 720

# Color palette
PRIMARY = (43, 45, 66)        # #2b2d42 - dark blue-gray
SECONDARY = (141, 153, 174)  # #8d99ae - gray-blue
BG = (237, 242, 244)          # #edf2f4 - light gray-white
ACCENT = (239, 35, 60)        # #ef233c - bright red
ACCENT_DARK = (217, 4, 41)    # #d90429 - dark red

# Create canvas
img = Image.new('RGB', (WIDTH, HEIGHT), BG)
draw = ImageDraw.Draw(img)

# Load a nice font
try:
    font_title = ImageFont.truetype("C:/Windows/Fonts/segoeui.ttf", 42)
    font_label = ImageFont.truetype("C:/Windows/Fonts/segoeui.ttf", 18)
    font_small = ImageFont.truetype("C:/Windows/Fonts/segoeui.ttf", 14)
except:
    font_title = ImageFont.load_default()
    font_label = ImageFont.load_default()
    font_small = ImageFont.load_default()

def draw_neural_node(draw, x, y, radius, color, alpha=255):
    """Draw a neural node with subtle gradient effect"""
    # Outer glow
    for i in range(3):
        glow_radius = radius + (3 - i) * 4
        glow_alpha = int(50 * (1 - i/3))
        glow_color = (*color[:3], glow_alpha)
        draw.ellipse([x - glow_radius, y - glow_radius,
                      x + glow_radius, y + glow_radius],
                     fill=color[:3])
    # Main node
    draw.ellipse([x - radius, y - radius, x + radius, y + radius],
                 fill=color)
    # Inner highlight
    highlight_radius = radius * 0.4
    draw.ellipse([x - highlight_radius, y - highlight_radius,
                  x + highlight_radius, y + highlight_radius],
                 fill=(255, 255, 255, 100))

def draw_connection(draw, x1, y1, x2, y2, color, width=2, dashed=False):
    """Draw connection between nodes"""
    if dashed:
        # Dashed line for uncertain connections
        dx, dy = x2 - x1, y2 - y1
        dist = math.sqrt(dx*dx + dy*dy)
        steps = int(dist / 10)
        for i in range(steps):
            if i % 2 == 0:
                t1 = i / steps
                t2 = min((i + 0.5) / steps, 1)
                sx1, sy1 = x1 + t1 * dx, y1 + t1 * dy
                sx2, sy2 = x1 + t2 * dx, y1 + t2 * dy
                draw.line([sx1, sy1, sx2, sy2], fill=color, width=width)
    else:
        draw.line([x1, y1, x2, y2], fill=color, width=width)

# === LEFT SIDE: UNCERTANTY ZONE (faded, uncertain) ===

# Create faded neural network on left
uncertain_nodes = [
    (180, 280, 18, SECONDARY),
    (140, 380, 14, SECONDARY),
    (220, 350, 12, SECONDARY),
    (100, 320, 10, SECONDARY),
    (160, 450, 11, SECONDARY),
    (250, 420, 9, SECONDARY),
]

# Draw faded connections
faded_connections = [
    (0, 1), (0, 2), (1, 3), (1, 4), (2, 5), (3, 4), (4, 5)
]
for i1, i2 in faded_connections:
    n1, n2 = uncertain_nodes[i1], uncertain_nodes[i2]
    draw_connection(draw, n1[0], n1[1], n2[0], n2[1], SECONDARY, width=1, dashed=True)

# Draw uncertain nodes
for x, y, r, c in uncertain_nodes:
    draw_neural_node(draw, x, y, r, c)

# === CENTER: ACTIVE RETRIEVAL ZONE (transition) ===

# Brain silhouette area - abstract representation
center_x, center_y = 500, 360

# Outer brain shape - large arc
brain_points = []
for angle in range(180, 450, 5):
    rad = math.radians(angle)
    rx = 200 + 30 * math.cos(rad * 2)  # Wavy brain contour
    ry = 120 + 40 * math.sin(rad * 1.5)
    brain_points.append((center_x + rx, center_y + ry))

# Draw subtle brain outline
draw.polygon(brain_points, fill=None, outline=SECONDARY, width=2)

# Neural pathways inside brain - activation process
retrieval_nodes = [
    (center_x - 80, center_y - 40, 16, SECONDARY),
    (center_x - 40, center_y + 20, 14, (180, 160, 170)),
    (center_x + 20, center_y - 20, 18, SECONDARY),
    (center_x + 60, center_y + 30, 12, SECONDARY),
    (center_x, center_y + 60, 15, (170, 150, 160)),
    (center_x - 30, center_y - 70, 11, SECONDARY),
    (center_x + 40, center_y - 60, 13, SECONDARY),
]

# Connections getting stronger toward center-right
retrieval_connections = [
    (0, 1, 2), (0, 5, 1), (1, 2, 2), (1, 4, 2), (2, 3, 2),
    (2, 6, 2), (3, 4, 2), (5, 6, 1)
]
for i1, i2, width in retrieval_connections:
    n1, n2 = retrieval_nodes[i1], retrieval_nodes[i2]
    color = SECONDARY if width == 1 else (160, 140, 155)
    draw_connection(draw, n1[0], n1[1], n2[0], n2[1], color, width=width, dashed=(width==1))

for x, y, r, c in retrieval_nodes:
    draw_neural_node(draw, x, y, r, c)

# === RIGHT SIDE: SUCCESSFUL RETRIEVAL (vibrant, activated) ===

success_x, success_y = 850, 360

# Vibrant neural cluster representing "aha" moment
activated_nodes = [
    (success_x, success_y - 60, 22, ACCENT),
    (success_x - 70, success_y - 20, 16, ACCENT),
    (success_x + 70, success_y - 20, 16, ACCENT),
    (success_x - 50, success_y + 50, 14, ACCENT),
    (success_x + 50, success_y + 50, 14, ACCENT),
    (success_x, success_y + 80, 12, ACCENT_DARK),
]

# Strong, confident connections
for i1, i2 in [(0, 1), (0, 2), (1, 3), (1, 4), (2, 4), (3, 5), (4, 5), (0, 5)]:
    n1, n2 = activated_nodes[i1], activated_nodes[i2]
    draw_connection(draw, n1[0], n1[1], n2[0], n2[1], ACCENT_DARK, width=3)

for x, y, r, c in activated_nodes:
    draw_neural_node(draw, x, y, r, c)

# Glow effect around activated cluster
for i in range(5):
    glow_r = 90 + i * 10
    alpha = 30 - i * 5
    draw.ellipse([success_x - glow_r, success_y - glow_r * 0.7,
                  success_x + glow_r, success_y + glow_r * 0.7],
                 outline=ACCENT, width=1)

# === FLOW ARROWS showing progression ===

# Arrow from uncertainty to retrieval
arrow_y = 520
draw.line([260, arrow_y, 380, arrow_y], fill=SECONDARY, width=2)
draw.polygon([(380, arrow_y), (365, arrow_y - 8), (365, arrow_y + 8)], fill=SECONDARY)

# Arrow from retrieval to success
draw.line([620, arrow_y, 740, arrow_y], fill=ACCENT_DARK, width=3)
draw.polygon([(740, arrow_y), (725, arrow_y - 8), (725, arrow_y + 8)], fill=ACCENT_DARK)

# === LABELS ===

# Zone labels
draw.text((80, 200), "NOT KNOWING", fill=SECONDARY, font=font_small)
draw.text((80, 215), "努力回忆", fill=SECONDARY, font=font_label)

draw.text((440, 200), "RETRIEVING", fill=PRIMARY, font=font_small)
draw.text((440, 215), "主动提取", fill=PRIMARY, font=font_label)

draw.text((790, 200), "UNDERSTOOD", fill=ACCENT, font=font_small)
draw.text((790, 215), "记忆深刻", fill=ACCENT, font=font_label)

# === CENTRAL ILLUSTRATION: Student figure ===

# Simplified student silhouette
student_x, student_y = 500, 280

# Head
head_radius = 35
draw.ellipse([student_x - head_radius, student_y - head_radius - 60,
              student_x + head_radius, student_y + head_radius - 60],
             fill=PRIMARY)

# Body (simplified)
body_top = student_y + head_radius - 55
draw.ellipse([student_x - 45, body_top + 20,
              student_x + 45, body_top + 140],
             fill=PRIMARY)

# Thought bubble / question mark area
draw.text((student_x + 55, student_y - 130), "?", fill=ACCENT, font=font_title)

# Lines coming from head representing active thinking
for i, angle in enumerate(range(-30, 60, 20)):
    rad = math.radians(angle)
    inner_r = 50
    outer_r = 90
    x1 = student_x + inner_r * math.cos(rad)
    y1 = student_y - 60 + inner_r * math.sin(rad)
    x2 = student_x + outer_r * math.cos(rad)
    y2 = student_y - 60 + outer_r * math.sin(rad)
    draw.line([x1, y1, x2, y2], fill=PRIMARY, width=2)

# === CHECKMARK illustration ===

# Small checkmark showing "核对" (verification)
check_x, check_y = 950, 500
check_size = 40
draw.ellipse([check_x - check_size, check_y - check_size,
              check_x + check_size, check_y + check_size],
             fill=ACCENT)
# Checkmark
check_points = [(check_x - 15, check_y), (check_x - 5, check_y + 15), (check_x + 20, check_y - 15)]
for i in range(len(check_points) - 1):
    draw.line([check_points[i], check_points[i+1]], fill=BG, width=4)

draw.text((check_x - 30, check_y + 50), "立即核对", fill=PRIMARY, font=font_label)

# === DECORATIVE ELEMENTS ===

# Floating memory fragments (small squares representing bits of knowledge)
memory_fragments = [
    (320, 180, 8, 15), (340, 200, 6, 12), (310, 210, 7, 10),
    (700, 150, 9, 14), (720, 180, 5, 11), (680, 200, 8, 12),
]
for x, y, w, h in memory_fragments:
    draw.rectangle([x - w/2, y - h/2, x + w/2, y + h/2],
                   fill=SECONDARY if x < 500 else ACCENT)

# === TITLE ===

draw.text((WIDTH // 2 - 200, 40), "自测：最高效的学习方法", fill=PRIMARY, font=font_title)

# Subtitle
draw.text((WIDTH // 2 - 120, 95), "Self-testing: The Most Efficient Learning Method",
          fill=SECONDARY, font=font_small)

# === BOTTOM KEY INSIGHT ===

# Key insight box
insight_box_y = 620
draw.rectangle([300, insight_box_y - 20, 980, insight_box_y + 40],
               fill=None, outline=PRIMARY, width=2)

insight_text = "做题时强迫大脑主动提取信息 → 记忆更深"
draw.text((320, insight_box_y), insight_text, fill=PRIMARY, font=font_label)

# Save
output_path = "D:/新课开发/心理学/26-记忆与学习：更有效地记住和理解事物/04_PPT/slides/imgs/slide-81.png"
img.save(output_path, "PNG", quality=95)
print(f"Image saved to: {output_path}")
