import os
from PIL import Image, ImageDraw, ImageFont

# Colors from spec
DARK_BLUE_GRAY = (43, 45, 66)      # #2b2d42
GRAY = (141, 153, 174)             # #8d99ae
BRIGHT_RED = (239, 35, 60)          # #ef233c
LIGHT_GRAY = (237, 242, 244)       # #edf2f4
WHITE = (255, 255, 255)            # #ffffff

# Canvas size for slide image
WIDTH = 1920
HEIGHT = 1080

# Create image
img = Image.new('RGB', (WIDTH, HEIGHT), LIGHT_GRAY)
draw = ImageDraw.Draw(img)

# Font paths
font_dir = "C:/Users/Administrator/.claude/skills/canvas-design/canvas-fonts/"
font_bold = font_dir + "BigShoulders-Bold.ttf"
font_regular = font_dir + "BigShoulders-Regular.ttf"
font_mono = font_dir + "JetBrainsMono-Regular.ttf"

def get_font(size, bold=False):
    try:
        return ImageFont.truetype(font_bold if bold else font_regular, size)
    except:
        return ImageFont.load_default()

def get_mono_font(size):
    try:
        return ImageFont.truetype(font_mono, size)
    except:
        return ImageFont.load_default()

# === BACKGROUND: Subtle grid pattern ===
for x in range(0, WIDTH, 60):
    draw.line([(x, 0), (x, HEIGHT)], fill=(232, 235, 238), width=1)
for y in range(0, HEIGHT, 60):
    draw.line([(0, y), (WIDTH, y)], fill=(232, 235, 238), width=1)

# === TITLE BAR ===
TOP_ZONE = (80, 80, WIDTH - 80, 200)
draw.rectangle(TOP_ZONE, fill=DARK_BLUE_GRAY)
title_font = get_font(48, bold=True)
subtitle_font = get_font(24)
draw.text((120, 105), "CHIP SUPPLY CHAIN CRISIS", fill=WHITE, font=title_font)
draw.text((120, 165), "AUTOMOTIVE INDUSTRY DISRUPTION  |  2020-2024", fill=GRAY, font=subtitle_font)

# === SUPPLY CHAIN NODES (Left to Right) ===
node_y = 550
node_radius = 55
node_spacing = 280
start_x = 200

nodes = [
    {"label": "RAW\nMATERIALS", "sub": "Silicon / Rare Earth", "x": start_x, "status": "normal"},
    {"label": "WAFER\nFAB", "sub": "TSMC / GlobalFoundries", "x": start_x + node_spacing, "status": "normal"},
    {"label": "SEMI\nCONDUCTOR", "sub": "MCU / Power IC", "x": start_x + node_spacing * 2, "status": "normal"},
    {"label": "COMPONENT", "sub": "PCB / Sensors", "x": start_x + node_spacing * 3, "status": "disrupted"},
    {"label": "ASSEMBLY", "sub": "Tier 1 Suppliers", "x": start_x + node_spacing * 4, "status": "disrupted"},
    {"label": "OEM", "sub": "Automotive Plant", "x": start_x + node_spacing * 5, "status": "crisis"},
]

# Draw connection lines between nodes
for i in range(len(nodes) - 1):
    x1 = nodes[i]["x"] + node_radius
    x2 = nodes[i + 1]["x"] - node_radius
    y = node_y

    if nodes[i + 1]["status"] == "disrupted":
        dash_length = 20
        gap_length = 15
        x = x1
        while x < x2:
            draw.line([(x, y), (min(x + dash_length, x2), y)], fill=BRIGHT_RED, width=6)
            x += dash_length + gap_length
    elif nodes[i + 1]["status"] == "crisis":
        draw.line([(x1, y), (x2, y)], fill=BRIGHT_RED, width=6)
        cx = (x1 + x2) // 2
        draw.line([(cx - 15, y - 15), (cx + 15, y + 15)], fill=BRIGHT_RED, width=4)
        draw.line([(cx + 15, y - 15), (cx - 15, y + 15)], fill=BRIGHT_RED, width=4)
    else:
        draw.line([(x1, y), (x2, y)], fill=GRAY, width=4)

# Draw nodes
for node in nodes:
    x, y = node["x"], node_y
    r = node_radius

    if node["status"] == "crisis":
        draw.ellipse([(x - r, y - r), (x + r, y + r)], fill=BRIGHT_RED)
        draw.ellipse([(x - r + 5, y - r + 5), (x + r - 5, y + r - 5)], fill=DARK_BLUE_GRAY)
        triangle = [(x, y - 25), (x - 22, y + 15), (x + 22, y + 15)]
        draw.polygon(triangle, fill=BRIGHT_RED)
    elif node["status"] == "disrupted":
        draw.ellipse([(x - r, y - r), (x + r, y + r)], fill=DARK_BLUE_GRAY)
        draw.ellipse([(x - r + 5, y - r + 5), (x + r - 5, y + r - 5)], fill=GRAY)
        draw.text((x - 8, y - 20), "!", fill=BRIGHT_RED, font=get_font(36, bold=True))
    else:
        draw.ellipse([(x - r, y - r), (x + r, y + r)], fill=DARK_BLUE_GRAY)
        draw.ellipse([(x - r + 5, y - r + 5), (x + r - 5, y + r - 5)], fill=WHITE)

    label_font = get_font(16, bold=True)
    sub_font = get_font(12)
    lines = node["label"].split("\n")
    for j, line in enumerate(lines):
        text_y = y - 25 + j * 22
        draw.text((x - 45, text_y), line, fill=WHITE if node["status"] != "normal" else DARK_BLUE_GRAY, font=label_font)
    draw.text((x - 55, y + 65), node["sub"], fill=GRAY, font=sub_font)

# === CHIP DIAGRAM (Bottom Left) ===
chip_x, chip_y = 250, 850
chip_size = 80

draw.rectangle([(chip_x - chip_size, chip_y - chip_size), (chip_x + chip_size, chip_y + chip_size)], fill=DARK_BLUE_GRAY)
pin_positions = [(-60, -80), (-30, -80), (0, -80), (30, -80), (60, -80),
                 (-60, 80), (-30, 80), (0, 80), (30, 80), (60, 80),
                 (-80, -60), (-80, -30), (-80, 0), (-80, 30), (-80, 60),
                 (80, -60), (80, -30), (80, 0), (80, 30), (80, 60)]
for px, py in pin_positions:
    draw.rectangle([(chip_x + px - 5, chip_y + py - 3), (chip_x + px + 5, chip_y + py + 3)], fill=GRAY)
draw.text((chip_x - 80, chip_y + 100), "MCU / SOC", fill=DARK_BLUE_GRAY, font=get_font(14, bold=True))

# === DISRUPTION INDICATORS ===
disruption_x = [start_x + node_spacing * 3, start_x + node_spacing * 4]
for dx in disruption_x:
    for i in range(3):
        offset = (i - 1) * 8
        draw.line([(dx + offset, node_y - 100 + i * 40), (dx + 15 + offset, node_y - 80 + i * 40)], fill=BRIGHT_RED, width=2)

# === STATISTICS PANEL (Right Side) ===
stats_x = WIDTH - 350
stats_y = 300

draw.rectangle([(stats_x - 30, stats_y - 30), (stats_x + 280, stats_y + 320)], fill=WHITE, outline=GRAY, width=2)

stat_font = get_font(14)
num_font = get_font(42, bold=True)
label_font = get_font(12)

stats_data = [
    ("-50%", "Chip Availability\n2021 Peak"),
    ("6.2M", "Vehicles Unbuilt\nGlobal Impact"),
    ("18mo", "Recovery Timeline\n2021-2023"),
]

for i, (num, label) in enumerate(stats_data):
    y_pos = stats_y + i * 100
    draw.text((stats_x, y_pos), num, fill=BRIGHT_RED, font=num_font)
    draw.text((stats_x, y_pos + 50), label, fill=DARK_BLUE_GRAY, font=label_font)

# === CRISIS TIMELINE (Bottom) ===
timeline_y = HEIGHT - 100
draw.line([(80, timeline_y), (WIDTH - 80, timeline_y)], fill=DARK_BLUE_GRAY, width=3)

timeline_events = [
    (0.1, "2020 Q1", "COVID Outbreak"),
    (0.3, "2020 Q4", "Demand Surge"),
    (0.5, "2021 Q1", "Shortage Peak"),
    (0.7, "2022", "Gradual Recovery"),
    (0.9, "2024", "Stabilization"),
]

for pos, date, event in timeline_events:
    x = 80 + (WIDTH - 160) * pos
    draw.ellipse([(x - 8, timeline_y - 8), (x + 8, timeline_y + 8)], fill=BRIGHT_RED if pos <= 0.5 else GRAY)
    draw.text((x - 40, timeline_y + 20), date, fill=DARK_BLUE_GRAY, font=get_font(12, bold=True))
    draw.text((x - 50, timeline_y + 40), event, fill=GRAY, font=get_font(10))

# === LEGEND ===
legend_x = WIDTH // 2 - 200
legend_y = HEIGHT - 180

legend_items = [
    (DARK_BLUE_GRAY, "Active Node"),
    (GRAY, "Stable Supply"),
    (BRIGHT_RED, "Disrupted / Crisis"),
]

draw.text((legend_x, legend_y), "LEGEND:", fill=DARK_BLUE_GRAY, font=get_font(14, bold=True))
for i, (color, text) in enumerate(legend_items):
    x = legend_x + 100 + i * 150
    draw.rectangle([(x, legend_y + 3), (x + 20, legend_y + 23)], fill=color)
    draw.text((x + 28, legend_y), text, fill=DARK_BLUE_GRAY, font=get_font(12))

# Save the image
output_dir = "D:/新课开发/生态链/6.生态链治理与链主责任：赋能的同时怎么守住系统韧性/06_授课PPT/slides/imgs"
os.makedirs(output_dir, exist_ok=True)
output_path = os.path.join(output_dir, "crisis-chip-supply.png")
img.save(output_path, "PNG", quality=95)
print(f"Image saved to: {output_path}")
