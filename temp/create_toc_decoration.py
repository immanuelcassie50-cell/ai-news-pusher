from PIL import Image, ImageDraw, ImageFilter
import math
import os

# Color palette
primary = (38, 70, 83)      # #264653 - deep teal
secondary = (42, 157, 143)  # #2a9d8f - teal green
accent = (233, 196, 106)    # #e9c46a - golden yellow
light = (244, 162, 97)      # #f4a261 - orange
bg_color = (250, 250, 250)  # #fafafa - light gray-white

# Canvas dimensions - wide landscape format for slide
WIDTH = 1920
HEIGHT = 600

# Create image
img = Image.new('RGB', (WIDTH, HEIGHT), bg_color)
draw = ImageDraw.Draw(img)

def draw_rounded_rectangle(draw, xy, radius, fill, outline=None, width=1):
    """Draw rectangle with rounded corners"""
    x1, y1, x2, y2 = xy

    # Draw the main body
    draw.rectangle([x1 + radius, y1, x2 - radius, y2], fill=fill, outline=outline)
    draw.rectangle([x1, y1 + radius, x2, y2 - radius], fill=fill, outline=outline)

    # Draw the corners
    draw.ellipse([x1, y1, x1 + 2*radius, y1 + 2*radius], fill=fill, outline=outline)
    draw.ellipse([x2 - 2*radius, y1, x2, y1 + 2*radius], fill=fill, outline=outline)
    draw.ellipse([x1, y2 - 2*radius, x1 + 2*radius, y2], fill=fill, outline=outline)
    draw.ellipse([x2 - 2*radius, y2 - 2*radius, x2, y2], fill=fill, outline=outline)

    if outline:
        # Draw arcs for outline
        draw.arc([x1, y1, x1 + 2*radius, y1 + 2*radius], 180, 270, fill=outline, width=width)
        draw.arc([x2 - 2*radius, y1, x2, y1 + 2*radius], 270, 360, fill=outline, width=width)
        draw.arc([x1, y2 - 2*radius, x1 + 2*radius, y2], 90, 180, fill=outline, width=width)
        draw.arc([x2 - 2*radius, y2 - 2*radius, x2, y2], 0, 90, fill=outline, width=width)

        # Draw lines connecting corners
        draw.line([x1 + radius, y1, x2 - radius, y1], fill=outline, width=width)
        draw.line([x1 + radius, y2, x2 - radius, y2], fill=outline, width=width)
        draw.line([x1, y1 + radius, x1, y2 - radius], fill=outline, width=width)
        draw.line([x2, y1 + radius, x2, y2 - radius], fill=outline, width=width)

def draw_soft_shadow(draw, xy, radius, fill, shadow_offset=4):
    """Draw rounded rectangle with soft shadow"""
    shadow_xy = (xy[0] + shadow_offset, xy[1] + shadow_offset, xy[2] + shadow_offset, xy[3] + shadow_offset)
    draw_rounded_rectangle(draw, shadow_xy, radius, (220, 220, 220))
    draw_rounded_rectangle(draw, xy, radius, fill)

# ========== DECORATIVE GEOMETRIC ELEMENTS ==========

# Left side - Large structural element suggesting foundation/roots
draw_soft_shadow(draw, (60, 180, 280, 480), 20, primary)

# Medium overlapping shape - suggesting layers of value
draw_soft_shadow(draw, (140, 220, 340, 420), 16, secondary)

# Small accent circle - coin-like, representing currency
draw_rounded_rectangle(draw, (100, 140, 180, 220), 10, accent)

# ========== CENTER-RIGHT STRUCTURAL ELEMENTS ==========

# Large vertical card - main content block
draw_soft_shadow(draw, (400, 100, 580, 500), 20, primary)

# Horizontal bar - section divider
draw_soft_shadow(draw, (620, 180, 900, 240), 16, secondary)

# Small square - module marker
draw_rounded_rectangle(draw, (640, 280, 720, 360), 12, accent)

# Another module marker
draw_rounded_rectangle(draw, (760, 320, 860, 420), 14, light)

# ========== RIGHT SIDE - Flow/distribution structure ==========

# Flowing connected boxes - suggesting circulation/credit flow
draw_soft_shadow(draw, (980, 140, 1120, 260), 18, secondary)
draw_soft_shadow(draw, (1080, 220, 1220, 340), 18, primary)
draw_soft_shadow(draw, (1160, 300, 1340, 440), 20, secondary)

# Small accent - golden punctuation
draw_rounded_rectangle(draw, (1020, 340, 1080, 400), 10, accent)

# ========== FAR RIGHT - Hierarchical structure ==========

# Top element
draw_soft_shadow(draw, (1420, 120, 1580, 240), 18, primary)

# Middle connected element
draw_soft_shadow(draw, (1460, 220, 1640, 360), 16, secondary)

# Bottom element - larger, grounding
draw_soft_shadow(draw, (1500, 340, 1700, 480), 20, (50, 90, 103))  # Darker primary

# Small accent markers - suggesting detail points
draw_rounded_rectangle(draw, (1380, 200, 1420, 240), 8, accent)
draw_rounded_rectangle(draw, (1720, 280, 1760, 320), 8, light)
draw_rounded_rectangle(draw, (1740, 380, 1800, 440), 10, accent)

# ========== CONNECTING LINES - Suggesting flow/network ==========

# Thin elegant lines connecting the structures
line_color = (200, 200, 200)
line_width = 1

# Horizontal connectors
draw.line([(340, 340), (400, 340)], fill=line_color, width=line_width)
draw.line([(580, 300), (620, 210)], fill=line_color, width=line_width)
draw.line([(900, 210), (980, 200)], fill=line_color, width=line_width)
draw.line([(1220, 340), (1420, 180)], fill=line_color, width=line_width)
draw.line([(1340, 370), (1420, 290)], fill=line_color, width=line_width)
draw.line([(1640, 300), (1720, 300)], fill=line_color, width=line_width)

# Diagonal connector for flow
draw.line([(180, 420), (140, 480)], fill=(180, 180, 180), width=1)

# ========== SUBTLE DECORATIVE ELEMENTS ==========

# Top-left corner accent
draw.ellipse([(30, 30), (70, 70)], fill=accent)

# Bottom scattered small elements
draw.ellipse([(500, 520), (530, 550)], fill=light)
draw.ellipse([(900, 530), (920, 550)], fill=accent)
draw.ellipse([(1300, 510), (1320, 530)], fill=secondary)

# Subtle circular motif - coin/currency suggestion (center-right area)
draw.ellipse([(700, 400), (760, 460)], fill=None, outline=secondary, width=2)
draw.ellipse([(720, 420), (740, 440)], fill=accent)

# ========== FLOATING ACCENT SHAPES ==========

# Top area - light floating elements
draw.ellipse([(250, 80), (290, 120)], fill=light)
draw.ellipse([(480, 60), (510, 90)], fill=secondary)
draw.ellipse([(1100, 80), (1140, 120)], fill=accent)

# Bottom right corner - grounding element
draw_rounded_rectangle(draw, (1780, 480, 1860, 560), 16, primary)

# ========== FINAL POLISH ==========

# Apply subtle blur to shadow areas for softness
# (Simulated by drawing lighter rectangles nearby)
shadow_blur = Image.new('RGBA', (WIDTH, HEIGHT), (0, 0, 0, 0))

# The design already has soft appearance from shadow simulation
# Add a very subtle gradient overlay at bottom for depth
for i in range(30):
    overlay_color = (250, 250, 250, int(255 * (1 - i/30)))
    overlay = Image.new('RGBA', (WIDTH, 1), (250, 250, 250, int(255 * (1 - i/30))))
    img.paste(overlay, (0, HEIGHT - 30 + i), overlay)

# Ensure clean edges - white border
border = Image.new('RGB', (WIDTH + 4, HEIGHT + 4), bg_color)
border.paste(img, (2, 2))
img = border

# Save
output_path = "D:/新课开发/经济学/15_货币的本质与信用创造/slides/imgs/toc-decoration.jpg"
img.save(output_path, 'JPEG', quality=95, optimize=True)
print(f"Saved to: {output_path}")
print(f"Dimensions: {img.size}")
