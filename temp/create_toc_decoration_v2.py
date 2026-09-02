from PIL import Image, ImageDraw, ImageFilter, ImageEnhance
import math
import os

# Color palette
primary = (38, 70, 83)      # #264653 - deep teal
secondary = (42, 157, 143) # #2a9d8f - teal green
accent = (233, 196, 106)    # #e9c46a - golden yellow
light = (244, 162, 97)      # #f4a261 - orange
bg_color = (250, 250, 250)  # #fafafa - light gray-white

# Canvas dimensions - wide landscape format for slide
WIDTH = 1920
HEIGHT = 600

def create_shadow_layer(x, y, w, h, radius, offset=8, blur=15):
    """Create a soft shadow layer for a rounded rectangle"""
    shadow_img = Image.new('RGBA', (w + blur*2 + abs(offset), h + blur*2 + abs(offset)), (0, 0, 0, 0))
    shadow_draw = ImageDraw.Draw(shadow_img)

    sx = blur + max(0, offset)
    sy = blur + max(0, offset)

    # Draw shadow shape
    shadow_draw.rounded_rectangle([sx, sy, sx + w, sy + h], radius=radius, fill=(0, 0, 0, 60))

    # Apply blur
    shadow_img = shadow_img.filter(ImageFilter.GaussianBlur(radius=blur))

    return shadow_img, sx, sy

def draw_rounded_rect(img, draw, xy, radius, fill, shadow=True, shadow_offset=6):
    """Draw rounded rectangle with proper shadow"""
    x1, y1, x2, y2 = xy

    if shadow:
        # Create shadow
        shadow_layer, ox, oy = create_shadow_layer(x2-x1, y2-y1, x2-x1, y2-y1, radius, offset=shadow_offset, blur=12)
        # Paste shadow
        img.paste(shadow_layer, (x1 - ox, y1 - oy), shadow_layer)

    # Draw main rectangle with rounded corners
    r = radius
    # Main body
    draw.rounded_rectangle([x1, y1, x2, y2], radius=r, fill=fill)

def draw_circle(img, draw, center, radius, fill=None, outline=None, width=1):
    """Draw circle"""
    cx, cy = center
    draw.ellipse([cx - radius, cy - radius, cx + radius, cy + radius], fill=fill, outline=outline, width=width)

# Create image with RGBA for better shadow handling
img = Image.new('RGBA', (WIDTH, HEIGHT), (250, 250, 250, 255))
draw = ImageDraw.Draw(img)

# ========== DECORATIVE GEOMETRIC ELEMENTS - ORGANIZATIONAL STRUCTURE ==========

# LEFT ANCHOR - Foundation layer (货币/价值的根基)
shadow_layer1, ox1, oy1 = create_shadow_layer(200, 280, 200, 280, 24, offset=8, blur=18)
img.paste(shadow_layer1, (60 - ox1, 160 - oy1), shadow_layer1)
draw.rounded_rectangle([60, 160, 260, 440], radius=24, fill=primary)

# Secondary layer - value storage
shadow_layer2, ox2, oy2 = create_shadow_layer(160, 240, 140, 140, 18, offset=6, blur=14)
img.paste(shadow_layer2, (120 - ox2, 320 - oy2), shadow_layer2)
draw.rounded_rectangle([120, 320, 260, 460], radius=18, fill=secondary)

# Golden accent - coin/measure
shadow_layer3, ox3, oy3 = create_shadow_layer(70, 130, 100, 80, 14, offset=5, blur=10)
img.paste(shadow_layer3, (90 - ox3, 170 - oy3), shadow_layer3)
draw.rounded_rectangle([90, 170, 190, 250], radius=14, fill=accent)

# ========== CENTER-EARLY - Structure/Organization ==========

# Vertical card - primary content block
shadow_layer4, ox4, oy4 = create_shadow_layer(180, 400, 160, 160, 22, offset=7, blur=16)
img.paste(shadow_layer4, (340 - ox4, 120 - oy4), shadow_layer4)
draw.rounded_rectangle([340, 120, 500, 280], radius=22, fill=primary)

# Horizontal bar - section flow
shadow_layer5, ox5, oy5 = create_shadow_layer(280, 60, 280, 80, 16, offset=5, blur=12)
img.paste(shadow_layer5, (540 - ox5, 180 - oy5), shadow_layer5)
draw.rounded_rectangle([540, 180, 820, 260], radius=16, fill=secondary)

# Small module markers
shadow_layer6, ox6, oy6 = create_shadow_layer(80, 80, 80, 80, 12, offset=4, blur=10)
img.paste(shadow_layer6, (560 - ox6, 300 - oy6), shadow_layer6)
draw.rounded_rectangle([560, 300, 640, 380], radius=12, fill=accent)

shadow_layer7, ox7, oy7 = create_shadow_layer(100, 100, 100, 100, 14, offset=5, blur=11)
img.paste(shadow_layer7, (700 - ox7, 260 - ox7), shadow_layer7)
draw.rounded_rectangle([700, 260, 800, 360], radius=14, fill=light)

# ========== CENTER - Credit/Money Flow ==========

# Flowing connected blocks - suggesting circulation
shadow_layer8, ox8, oy8 = create_shadow_layer(140, 120, 180, 140, 20, offset=6, blur=14)
img.paste(shadow_layer8, (880 - ox8, 140 - oy8), shadow_layer8)
draw.rounded_rectangle([880, 140, 1020, 280], radius=20, fill=secondary)

shadow_layer9, ox9, oy9 = create_shadow_layer(180, 160, 200, 160, 22, offset=7, blur=16)
img.paste(shadow_layer9, (960 - ox9, 220 - oy9), shadow_layer9)
draw.rounded_rectangle([960, 220, 1160, 380], radius=22, fill=primary)

shadow_layer10, ox10, oy10 = create_shadow_layer(160, 140, 180, 140, 18, offset=6, blur=14)
img.paste(shadow_layer10, (1100 - ox10, 300 - oy10), shadow_layer10)
draw.rounded_rectangle([1100, 300, 1280, 440], radius=18, fill=secondary)

# Small golden accent - value marker
shadow_layer11, ox11, oy11 = create_shadow_layer(60, 60, 60, 60, 10, offset=4, blur=8)
img.paste(shadow_layer11, (920 - ox11, 360 - oy11), shadow_layer11)
draw.rounded_rectangle([920, 360, 980, 420], radius=10, fill=accent)

# ========== RIGHT - Hierarchical Organization ==========

# Top block
shadow_layer12, ox12, oy12 = create_shadow_layer(160, 120, 180, 140, 20, offset=6, blur=14)
img.paste(shadow_layer12, (1340 - ox12, 120 - oy12), shadow_layer12)
draw.rounded_rectangle([1340, 120, 1520, 260], radius=20, fill=primary)

# Middle connected block
shadow_layer13, ox13, oy13 = create_shadow_layer(180, 140, 200, 160, 22, offset=7, blur=16)
img.paste(shadow_layer13, (1400 - ox13, 220 - oy13), shadow_layer13)
draw.rounded_rectangle([1400, 220, 1600, 380], radius=22, fill=secondary)

# Bottom anchoring block
shadow_layer14, ox14, oy14 = create_shadow_layer(200, 140, 180, 160, 20, offset=6, blur=14)
img.paste(shadow_layer14, (1460 - ox14, 340 - oy14), shadow_layer14)
draw.rounded_rectangle([1460, 340, 1640, 500], radius=20, fill=(50, 90, 103))

# Accent markers - hierarchy indicators
shadow_layer15, ox15, oy15 = create_shadow_layer(40, 40, 40, 40, 8, offset=3, blur=6)
img.paste(shadow_layer15, (1300 - ox15, 200 - oy15), shadow_layer15)
draw.ellipse([1300, 200, 1340, 240], fill=accent)

shadow_layer16, ox16, oy16 = create_shadow_layer(40, 40, 40, 40, 8, offset=3, blur=6)
img.paste(shadow_layer16, (1660 - ox16, 280 - oy16), shadow_layer16)
draw.ellipse([1660, 280, 1700, 320], fill=light)

shadow_layer17, ox17, oy17 = create_shadow_layer(50, 50, 50, 50, 10, offset=4, blur=7)
img.paste(shadow_layer17, (1680 - ox17, 380 - oy17), shadow_layer17)
draw.rounded_rectangle([1680, 380, 1730, 430], radius=10, fill=accent)

# ========== FAR RIGHT - Final structural element ==========

shadow_layer18, ox18, oy18 = create_shadow_layer(100, 100, 120, 120, 18, offset=5, blur=10)
img.paste(shadow_layer18, (1760 - ox18, 460 - oy18), shadow_layer18)
draw.rounded_rectangle([1760, 460, 1880, 560], radius=18, fill=primary)

# ========== CONNECTING LINES - Subtle network ==========

line_color = (180, 180, 180, 180)
# Horizontal flows
for start_x, start_y, end_x, end_y in [
    (260, 380, 340, 200),
    (500, 200, 540, 220),
    (800, 220, 880, 200),
    (1020, 220, 1100, 320),
    (1280, 380, 1340, 200),
    (1600, 300, 1660, 300),
    (1640, 440, 1760, 510),
]:
    draw.line([(start_x, start_y), (end_x, end_y)], fill=line_color, width=1)

# ========== FLOATING ACCENTS - Visual rhythm ==========

# Top floating elements
for cx, cy, r, color in [
    (180, 100, 12, accent),
    (320, 80, 10, light),
    (480, 100, 8, secondary),
    (740, 120, 10, accent),
    (1050, 100, 12, light),
    (1220, 90, 8, secondary),
    (1560, 90, 10, accent),
]:
    shadow_l, ox, oy = create_shadow_layer(r*2, r*2, r*2, r*2, r, offset=3, blur=6)
    img.paste(shadow_l, (cx - r - ox, cy - r - oy), shadow_l)
    draw.ellipse([cx - r, cy - r, cx + r, cy + r], fill=color)

# Bottom grounding elements
for cx, cy, r, color in [
    (400, 520, 8, light),
    (620, 530, 6, secondary),
    (850, 520, 10, accent),
    (1200, 530, 8, light),
    (1500, 520, 6, secondary),
]:
    draw.ellipse([cx - r, cy - r, cx + r, cy + r], fill=color)

# ========== COIN MOTIFS - Subtle currency suggestion ==========

# Circle with inner detail - coin abstraction
shadow_l, ox, oy = create_shadow_layer(80, 80, 80, 80, 40, offset=4, blur=8)
img.paste(shadow_l, (660 - ox, 420 - oy), shadow_l)
draw.ellipse([660, 420, 740, 500], fill=None, outline=secondary, width=2)
draw.ellipse([670, 430, 730, 490], fill=None, outline=accent, width=1)

# Another coin motif
shadow_l2, ox2, oy2 = create_shadow_layer(60, 60, 60, 60, 30, offset=3, blur=6)
img.paste(shadow_l2, (1800 - ox2, 200 - oy2), shadow_l2)
draw.ellipse([1800, 200, 1860, 260], fill=None, outline=primary, width=2)
draw.ellipse([1808, 208, 1852, 252], fill=accent, width=1)

# ========== FINAL POLISH ==========

# Convert to RGB for JPEG output
img_rgb = Image.new('RGB', img.size, bg_color)
img_rgb.paste(img, (0, 0), img)

# Enhance slightly for better contrast
enhancer = ImageEnhance.Contrast(img_rgb)
img_rgb = enhancer.enhance(1.02)

# Save
output_path = "D:/新课开发/经济学/15_货币的本质与信用创造/slides/imgs/toc-decoration.jpg"
img_rgb.save(output_path, 'JPEG', quality=95, optimize=True)
print(f"Saved to: {output_path}")
print(f"Dimensions: {img_rgb.size}")

# Also save a preview at lower size
preview_path = "D:/新课开发/经济学/15_货币的本质与信用创造/slides/imgs/toc-decoration-preview.jpg"
preview = img_rgb.resize((960, 300), Image.LANCZOS)
preview.save(preview_path, 'JPEG', quality=90)
print(f"Preview saved to: {preview_path}")
