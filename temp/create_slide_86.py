#!/usr/bin/env python3
"""
Forest Walking Metaphor - Psychology Course Slide 86 (Refined)
Visual metaphor comparing two paths: easy/faded vs difficult/memorable
A masterpiece of visual communication for memory and learning.
"""

from PIL import Image, ImageDraw, ImageFont, ImageFilter
import math

# Color palette
PRIMARY = "#2b2d42"      # dark blue-gray for titles
SECONDARY = "#8d99ae"    # gray-blue for secondary text
BG = "#edf2f4"           # light gray-white background
ACCENT = "#ef233c"       # bright red for emphasis
ACCENT_DARK = "#d90429"  # dark red for emphasis

# Canvas dimensions (16:9 aspect ratio for slides)
WIDTH = 1920
HEIGHT = 1080

def hex_to_rgb(hex_color):
    h = hex_color.lstrip('#')
    return tuple(int(h[i:i+2], 16) for i in (0, 2, 4))

def draw_gradient_rect(draw, x1, y1, x2, y2, color1, color2, direction='vertical'):
    """Draw a simple gradient rectangle"""
    r1, g1, b1 = hex_to_rgb(color1)
    r2, g2, b2 = hex_to_rgb(color2)
    steps = y2 - y1 if direction == 'vertical' else x2 - x1
    for i in range(steps):
        t = i / steps
        r = int(r1 + (r2 - r1) * t)
        g = int(g1 + (g2 - g1) * t)
        b = int(b1 + (b2 - b1) * t)
        if direction == 'vertical':
            draw.line([(x1, y1 + i), (x2, y1 + i)], fill=(r, g, b))
        else:
            draw.line([(x1 + i, y1), (x1 + i, y2)], fill=(r, g, b))

def create_forest_paths():
    # Create background with subtle gradient
    img = Image.new('RGB', (WIDTH, HEIGHT), BG)
    draw = ImageDraw.Draw(img)

    # Load fonts - using quality fonts from the skill
    font_path_title = "C:/Users/Administrator/.claude/skills/canvas-design/canvas-fonts/Italiana-Regular.ttf"
    font_path_bold = "C:/Users/Administrator/.claude/skills/canvas-design/canvas-fonts/BricolageGrotesque-Bold.ttf"
    font_path_reg = "C:/Users/Administrator/.claude/skills/canvas-design/canvas-fonts/BricolageGrotesque-Regular.ttf"
    font_path_light = "C:/Users/Administrator/.claude/skills/canvas-design/canvas-fonts/Jura-Light.ttf"

    try:
        font_title = ImageFont.truetype(font_path_title, 80)
        font_bold = ImageFont.truetype(font_path_bold, 56)
        font_medium = ImageFont.truetype(font_path_bold, 40)
        font_regular = ImageFont.truetype(font_path_reg, 32)
        font_light = ImageFont.truetype(font_path_light, 24)
        font_xlight = ImageFont.truetype(font_path_light, 20)
    except Exception as e:
        print(f"Font loading issue: {e}")
        font_title = ImageFont.load_default()
        font_bold = ImageFont.load_default()
        font_medium = font_bold
        font_regular = font_bold
        font_light = font_bold
        font_xlight = font_bold

    # Pre-compute colors
    primary_rgb = hex_to_rgb(PRIMARY)
    secondary_rgb = hex_to_rgb(SECONDARY)
    accent_rgb = hex_to_rgb(ACCENT)
    accent_dark_rgb = hex_to_rgb(ACCENT_DARK)

    # === BACKGROUND ATMOSPHERE ===
    # Subtle radial gradient from center
    for i in range(100, 0, -1):
        alpha = int(255 * (1 - i/100) * 0.03)
        y_offset = int(HEIGHT * 0.5)
        center_x, center_y = WIDTH // 2, y_offset
        radius = int(min(WIDTH, HEIGHT) * 0.8 * i / 100)
        # Draw subtle ellipse
        for angle in range(0, 360, 10):
            rad = math.radians(angle)
            x = center_x + int(math.cos(rad) * radius)
            y = center_y + int(math.sin(rad) * radius * 0.4)  # Elliptical
            draw.point((x, y), fill=(220, 222, 225))

    # === DECORATIVE FOREST SILHOUETTE ===
    def draw_abstract_tree(draw, x, y, height, color, detail=0.3):
        """Draw an abstract geometric tree"""
        # Trunk
        trunk_w = max(4, int(height * 0.06))
        draw.rectangle([x - trunk_w//2, y, x + trunk_w//2, y + height * 0.3], fill=color)
        # Crown - layered triangles
        for layer in range(3):
            layer_h = height * (0.4 - layer * 0.08)
            layer_y = y + height * 0.1 - layer * height * 0.15
            layer_w = height * (0.25 - layer * 0.04)
            points = [
                (x, layer_y - layer_h),
                (x - layer_w, layer_y + layer_h * 0.3),
                (x + layer_w, layer_y + layer_h * 0.3)
            ]
            draw.polygon(points, fill=color)

    # Top forest layer - subtle
    forest_y_top = 60
    tree_spacing = 140
    for i in range(-2, 18):
        x = i * tree_spacing + 70
        h = 100 + (i % 4) * 20
        opacity_factor = 0.15 + (i % 3) * 0.05
        r, g, b = secondary_rgb
        faded_color = (int(r * opacity_factor + 237 * (1-opacity_factor)),
                       int(g * opacity_factor + 242 * (1-opacity_factor)),
                       int(b * opacity_factor + 244 * (1-opacity_factor)))
        draw_abstract_tree(draw, x, forest_y_top, h, faded_color)

    # Bottom forest - stronger
    forest_y_bottom = HEIGHT - 30
    for i in range(-1, 17):
        x = i * 160 + 80
        h = 80 + (i % 5) * 15
        opacity_factor = 0.2 + (i % 4) * 0.05
        r, g, b = secondary_rgb
        faded_color = (int(r * opacity_factor + 237 * (1-opacity_factor)),
                       int(g * opacity_factor + 242 * (1-opacity_factor)),
                       int(b * opacity_factor + 244 * (1-opacity_factor)))
        draw_abstract_tree(draw, x, forest_y_bottom, h, faded_color)

    # === CENTER COMPOSITION ===
    center_x = WIDTH // 2

    # Vertical separator line - subtle
    for y in range(200, HEIGHT - 200, 8):
        draw.line([(center_x, y), (center_x, y + 4)], fill=(200, 202, 205), width=1)

    # === LEFT PATH: EASY/FADED ===
    # Path baseline
    left_y = HEIGHT // 2 + 80
    left_start = 180
    left_end = center_x - 120

    # Draw smooth, flowing "easy path" - represented as a gentle wave
    path_y_offset = 0
    for x in range(left_start, left_end, 3):
        t = (x - left_start) / (left_end - left_start)
        # Gentle wave - easy journey
        wave = math.sin(t * math.pi * 2) * 8
        y = left_y + int(wave)
        # Draw thick soft path
        for w in range(-20, 21, 4):
            alpha = 1 - abs(w) / 25
            if alpha > 0.1:
                draw.point((x, y + w), fill=(180, 185, 190))

    # Path surface - lighter center
    for x in range(left_start + 20, left_end - 20, 2):
        t = (x - left_start) / (left_end - left_start)
        wave = math.sin(t * math.pi * 2) * 8
        y = left_y + int(wave)
        draw.point((x, y), fill=(210, 215, 220))

    # Footprints that fade - memory not retained
    for i in range(8):
        t = (i + 0.5) / 8
        x = int(left_start + 40 + (left_end - left_start - 80) * t)
        wave = math.sin(t * math.pi * 2) * 8
        y = left_y + int(wave)
        # Fading footprint
        fade = 1 - t * 0.7
        size = int(12 * fade)
        if size > 3:
            # Outer print
            draw.ellipse([x - size, y - size//2, x + size, y + size//2],
                        fill=(190, 195, 200))
            # Inner (lighter) - represents fading memory
            draw.ellipse([x - size//2, y - size//4, x + size//2, y + size//4],
                        fill=(215, 218, 222))

    # "Forget" symbol - broken circle on left
    symbol_x = left_start + 60
    symbol_y = left_y - 140
    # Broken circle
    for angle in range(0, 360, 20):
        if 60 < angle < 120 or 240 < angle < 300:
            continue  # Gap in circle
        rad = math.radians(angle)
        r = 25
        px = int(symbol_x + math.cos(rad) * r)
        py = int(symbol_y + math.sin(rad) * r)
        draw.ellipse([px - 3, py - 3, px + 3, py + 3], fill=secondary_rgb)
    # X mark through it
    draw.line([symbol_x - 12, symbol_y - 12, symbol_x + 12, symbol_y + 12], fill=secondary_rgb, width=3)
    draw.line([symbol_x - 12, symbol_y + 12, symbol_x + 12, symbol_y - 12], fill=secondary_rgb, width=3)

    # === RIGHT PATH: DIFFICULT/THORNED ===
    right_y = HEIGHT // 2 - 60
    right_start = center_x + 120
    right_end = WIDTH - 180

    # Draw thorny, challenging path - zigzag/winding
    path_points = []
    for x in range(right_start, right_end, 4):
        t = (x - right_start) / (right_end - right_start)
        # More aggressive wave - harder journey
        wave = math.sin(t * math.pi * 4) * 25 + math.sin(t * math.pi * 2.5) * 10
        y = right_y + int(wave)
        path_points.append((x, y))

    # Draw thick thorny path
    for i, (x, y) in enumerate(path_points):
        # Outer dark path
        for w in range(-18, 19, 3):
            draw.point((x, y + w), fill=accent_dark_rgb)
        # Inner bright path
        if i % 2 == 0:
            draw.point((x, y), fill=accent_rgb)

    # Thorns along the path
    thorn_count = 12
    for i in range(thorn_count):
        t = (i + 0.5) / thorn_count
        idx = int(t * (len(path_points) - 1))
        if idx < len(path_points):
            x, y = path_points[idx]
            # Draw thorns - sharp angles
            for angle in [0, 45, 135, 180, 225, 315]:
                rad = math.radians(angle + t * 90)  # Rotate based on position
                length = 20 + (i % 3) * 8
                tx = int(x + math.cos(rad) * length)
                ty = int(y + math.sin(rad) * length)
                # Thorn line
                draw.line([(x, y), (tx, ty)], fill=accent_dark_rgb, width=2)
                # Thorn tip
                draw.ellipse([tx - 4, ty - 4, tx + 4, ty + 4], fill=accent_rgb)

    # Deep footprints - they persist
    for i in range(6):
        t = (i + 0.5) / 6
        idx = int(t * (len(path_points) - 1))
        if idx < len(path_points):
            x, y = path_points[idx]
            # Deep, persistent footprint
            draw.ellipse([x - 14, y - 20, x + 14, y + 4], fill=accent_dark_rgb)
            draw.ellipse([x - 10, y - 16, x + 10, y], fill=accent_rgb)

    # "Memory" symbol - solid filled circle on right
    symbol_x = right_end - 60
    symbol_y = right_y - 140
    # Solid circle - strong memory
    draw.ellipse([symbol_x - 28, symbol_y - 28, symbol_x + 28, symbol_y + 28], fill=accent_rgb)
    draw.ellipse([symbol_x - 20, symbol_y - 20, symbol_x + 20, symbol_y + 20], fill=accent_dark_rgb)
    # Star/bright center
    draw.ellipse([symbol_x - 8, symbol_y - 8, symbol_x + 8, symbol_y + 8], fill=(255, 200, 200))

    # === ARROWS ===
    # Left arrow - fading/dashed
    arrow_x = left_end + 40
    arrow_y = left_y
    draw.polygon([
        (arrow_x, arrow_y),
        (arrow_x - 35, arrow_y - 20),
        (arrow_x - 35, arrow_y + 20)
    ], fill=secondary_rgb)
    # Trail of dots fading out
    for i in range(5):
        fade = 1 - i * 0.2
        size = int(6 * fade)
        if size > 1:
            draw.ellipse([arrow_x + 20 + i * 25 - size, arrow_y - size,
                         arrow_x + 20 + i * 25 + size, arrow_y + size],
                        fill=(int(180 * fade + 237 * (1-fade)), int(185 * fade + 242 * (1-fade)), int(190 * fade + 244 * (1-fade))))

    # Right arrow - strong, clear
    arrow_x = right_end + 40
    arrow_y = right_y
    draw.polygon([
        (arrow_x, arrow_y),
        (arrow_x - 45, arrow_y - 28),
        (arrow_x - 45, arrow_y + 28)
    ], fill=accent_rgb)

    # === TYPOGRAPHY - Minimal, purposeful ===

    # Left side title
    draw.text((WIDTH // 4, 160), "平坦路", font=font_title, fill=primary_rgb, anchor="mm")
    draw.text((WIDTH // 4, 220), "Flat Path", font=font_light, fill=secondary_rgb, anchor="mm")

    # Left side descriptors
    draw.text((WIDTH // 4 - 100, left_y - 180), "轻松重读", font=font_regular, fill=secondary_rgb, anchor="mm")
    draw.text((WIDTH // 4 + 100, left_y - 180), "Easy Re-reading", font=font_xlight, fill=secondary_rgb, anchor="mm")

    draw.text((WIDTH // 4, left_y + 80), "记不住路", font=font_medium, fill=secondary_rgb, anchor="mm")
    draw.text((WIDTH // 4, left_y + 125), "Can't Remember", font=font_xlight, fill=secondary_rgb, anchor="mm")

    # Right side title
    draw.text((WIDTH * 3 // 4, 160), "荆棘路", font=font_title, fill=accent_rgb, anchor="mm")
    draw.text((WIDTH * 3 // 4, 220), "Thorny Path", font=font_light, fill=accent_dark_rgb, anchor="mm")

    # Right side descriptors
    draw.text((WIDTH * 3 // 4 - 120, right_y - 180), "困难回忆", font=font_regular, fill=accent_dark_rgb, anchor="mm")
    draw.text((WIDTH * 3 // 4 + 120, right_y - 180), "Difficult Recall", font=font_xlight, fill=accent_dark_rgb, anchor="mm")

    draw.text((WIDTH * 3 // 4, right_y + 80), "印象深刻", font=font_medium, fill=accent_rgb, anchor="mm")
    draw.text((WIDTH * 3 // 4, right_y + 125), "Deep Impression", font=font_xlight, fill=accent_dark_rgb, anchor="mm")

    # === BOTTOM KEY INSIGHT ===
    draw.text((WIDTH // 2, HEIGHT - 100), "费力越多，记得越牢", font=font_bold, fill=primary_rgb, anchor="mm")
    draw.text((WIDTH // 2, HEIGHT - 50), "More Effort = Better Memory", font=font_light, fill=secondary_rgb, anchor="mm")

    # === SUBTLE DECORATIVE ELEMENTS ===
    # Connection dots between concepts
    dot_y = HEIGHT - 160
    for i in range(25):
        x = 200 + i * 65
        size = 2 + (i % 3)
        draw.ellipse([x - size, dot_y - size, x + size, dot_y + size], fill=(210, 213, 216))

    return img

if __name__ == "__main__":
    img = create_forest_paths()
    output_path = "D:/新课开发/心理学/26-记忆与学习：更有效地记住和理解事物/04_PTT/slides/imgs/slide-86.png"

    # Ensure output directory exists
    import os
    os.makedirs(os.path.dirname(output_path), exist_ok=True)

    img.save(output_path, "PNG", quality=95)
    print(f"Image saved to: {output_path}")
    print(f"Dimensions: {img.size}")
