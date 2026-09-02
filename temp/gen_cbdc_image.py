#!/usr/bin/env python3
"""Generate CBDC educational slide illustration using Pillow"""

from PIL import Image, ImageDraw, ImageFont
import os

# Output path
output_path = "D:/新课开发/经济学/15_货币的本质与信用创造/slides/imgs/slide-99.png"

# Color palette
colors = {
    "primary": "#264653",    # dark teal
    "secondary": "#2a9d8f", # teal green
    "accent": "#e9c46a",    # golden yellow
    "light": "#f4a261",     # orange
    "bg": "#fafafa",        # light gray
    "white": "#ffffff",
    "text_dark": "#1a1a2e",
}

# Canvas dimensions (16:9 aspect ratio for slides)
WIDTH = 1600
HEIGHT = 900

def hex_to_rgb(hex_color):
    """Convert hex color to RGB tuple"""
    hex_color = hex_color.lstrip('#')
    return tuple(int(hex_color[i:i+2], 16) for i in (0, 2, 4))

def draw_rounded_rectangle(draw, coords, radius, fill, outline=None, width=1):
    """Draw a rounded rectangle"""
    x1, y1, x2, y2 = coords

    # Draw main rectangle body
    draw.rectangle([x1 + radius, y1, x2 - radius, y2], fill=fill, outline=outline, width=width)
    draw.rectangle([x1, y1 + radius, x2, y2 - radius], fill=fill, outline=outline, width=width)

    # Draw corners
    draw.pieslice([x1, y1, x1 + 2*radius, y1 + 2*radius], 180, 270, fill=fill, outline=outline, width=width)
    draw.pieslice([x2 - 2*radius, y1, x2, y1 + 2*radius], 270, 360, fill=fill, outline=outline, width=width)
    draw.pieslice([x1, y2 - 2*radius, x1 + 2*radius, y2], 90, 180, fill=fill, outline=outline, width=width)
    draw.pieslice([x2 - 2*radius, y2 - 2*radius, x2, y2], 0, 90, fill=fill, outline=outline, width=width)

def draw_icon_wallet(draw, cx, cy, size, color):
    """Draw a wallet icon"""
    w, h = size, size * 0.7
    x, y = cx - w/2, cy - h/2

    # Wallet body
    draw_rounded_rectangle(draw, (x, y, x+w, y+h), 8, color)

    # Wallet flap
    draw.polygon([
        (x, y + h*0.3),
        (x + w*0.4, y),
        (x + w, y),
        (x + w, y + h*0.3),
    ], fill=color)

    # Wallet clasp
    draw.ellipse([x + w*0.7, y + h*0.4, x + w*0.85, y + h*0.6], fill=colors["accent"])

def draw_icon_bank(draw, cx, cy, size, color, is_central=False):
    """Draw a bank building icon"""
    w, h = size * 0.8, size * 0.7
    x, y = cx - w/2, cy - h/2

    # Building base
    draw.rectangle([x, y + h*0.3, x+w, y+h], fill=color)

    # Pillars
    pillar_count = 4 if not is_central else 3
    pillar_w = w * 0.08
    gap = (w - pillar_count * pillar_w) / (pillar_count + 1)

    for i in range(pillar_count):
        px = x + gap + i * (pillar_w + gap)
        draw.rectangle([px, y + h*0.3, px + pillar_w, y + h*0.85], fill=color)

    # Roof / pediment
    if is_central:
        # Central bank has a dome
        draw.polygon([
            (x, y + h*0.3),
            (x + w/2, y - h*0.15),
            (x + w, y + h*0.3),
        ], fill=color)
        # Seal circle
        draw.ellipse([cx - size*0.12, cy - size*0.08, cx + size*0.12, cy + size*0.08], fill=colors["accent"])
    else:
        # Commercial bank has triangular roof
        draw.polygon([
            (x - w*0.05, y + h*0.3),
            (x + w/2, y - h*0.1),
            (x + w*1.05, y + h*0.3),
        ], fill=color)

def draw_icon_coin(draw, cx, cy, size, color):
    """Draw a coin with RMB symbol"""
    # Outer circle
    draw.ellipse([cx - size/2, cy - size/2, cx + size/2, cy + size/2], fill=color)

    # Inner circle (edge effect)
    draw.ellipse([cx - size*0.42, cy - size*0.42, cx + size*0.42, cy + size*0.42], outline=colors["accent"], width=3)

    # RMB character would be drawn but we'll use simple ¥ symbol via text
    # Since we can't easily render Chinese font, we'll use circles

def draw_icon_magnifier(draw, cx, cy, size, color):
    """Draw a magnifying glass (for anti-money laundering)"""
    # Glass circle
    draw.ellipse([cx - size*0.35, cy - size*0.4, cx + size*0.25, cy + size*0.2], outline=color, width=4)

    # Handle
    draw.line([cx + size*0.15, cy + size*0.1, cx + size*0.45, cy + size*0.4], fill=color, width=4)

def draw_icon_people(draw, cx, cy, size, color):
    """Draw people icon for financial inclusion"""
    # Person 1 (center)
    head_r = size * 0.15
    draw.ellipse([cx - head_r, cy - size*0.35, cx + head_r, cy - size*0.05], fill=color)
    draw.polygon([
        (cx - size*0.2, cy + size*0.4),
        (cx + size*0.2, cy + size*0.4),
        (cx + size*0.15, cy),
        (cx - size*0.15, cy),
    ], fill=color)

    # Person 2 (left, smaller)
    head_r2 = size * 0.1
    lx = cx - size * 0.45
    draw.ellipse([lx - head_r2, cy - size*0.28, lx + head_r2, cy - size*0.08], fill=color)
    draw.polygon([
        (lx - size*0.13, cy + size*0.35),
        (lx + size*0.13, cy + size*0.35),
        (lx + size*0.1, cy),
        (lx - size*0.1, cy),
    ], fill=color)

    # Person 3 (right, smaller)
    rx = cx + size * 0.45
    draw.ellipse([rx - head_r2, cy - size*0.28, rx + head_r2, cy - size*0.08], fill=color)
    draw.polygon([
        (rx - size*0.13, cy + size*0.35),
        (rx + size*0.13, cy + size*0.35),
        (rx + size*0.1, cy),
        (rx - size*0.1, cy),
    ], fill=color)

def draw_icon_eye(draw, cx, cy, size, color):
    """Draw eye icon for privacy"""
    # Eye shape
    draw.ellipse([cx - size*0.4, cy - size*0.2, cx + size*0.4, cy + size*0.2], outline=color, width=3)

    # Pupil
    draw.ellipse([cx - size*0.12, cy - size*0.12, cx + size*0.12, cy + size*0.12], fill=color)

    # Slash (privacy concern)
    draw.line([cx - size*0.35, cy + size*0.25, cx + size*0.35, cy - size*0.25], fill=colors["light"], width=3)

def draw_arrow(draw, x1, y1, x2, y2, color, width=4, dashed=False):
    """Draw an arrow from (x1,y1) to (x2,y2)"""
    if dashed:
        # Draw dashed line
        import math
        dx = x2 - x1
        dy = y2 - y1
        dist = math.sqrt(dx*dx + dy*dy)
        segments = int(dist / 20)
        for i in range(segments):
            if i % 2 == 0:
                t1 = i / segments
                t2 = min((i + 0.6) / segments, 1)
                draw.line([x1 + dx*t1, y1 + dy*t1, x1 + dx*t2, y1 + dy*t2], fill=color, width=width)
    else:
        draw.line([x1, y1, x2, y2], fill=color, width=width)

    # Arrow head
    import math
    dx = x2 - x1
    dy = y2 - y1
    angle = math.atan2(dy, dx)
    arrow_len = 15

    # Arrow head lines
    draw.line([
        x2, y2,
        x2 - arrow_len * math.cos(angle - math.pi/6),
        y2 - arrow_len * math.sin(angle - math.pi/6)
    ], fill=color, width=width)

    draw.line([
        x2, y2,
        x2 - arrow_len * math.cos(angle + math.pi/6),
        y2 - arrow_len * math.sin(angle + math.pi/6)
    ], fill=color, width=width)

def draw_text_centered(draw, text, cx, cy, font, fill):
    """Draw text centered at position"""
    bbox = draw.textbbox((0, 0), text, font=font)
    w = bbox[2] - bbox[0]
    h = bbox[3] - bbox[1]
    draw.text((cx - w/2, cy - h/2), text, font=font, fill=fill)

def try_load_font(size, bold=False):
    """Try to load a font, fall back to default"""
    font_paths = [
        "C:/Windows/Fonts/msyh.ttc",  # Microsoft YaHei
        "C:/Windows/Fonts/simhei.ttf",  # SimHei
        "C:/Windows/Fonts/simsun.ttc",  # SimSun
        "C:/Windows/Fonts/arial.ttf",
        "C:/Windows/Fonts/calibri.ttf",
    ]

    for path in font_paths:
        try:
            if bold:
                # Try bold variants
                bold_path = path.replace(".ttc", "b.ttc").replace(".ttf", "b.ttf")
                if os.path.exists(bold_path):
                    return ImageFont.truetype(bold_path, size)
            return ImageFont.truetype(path, size)
        except:
            continue

    return ImageFont.load_default()

def create_cbdc_illustration():
    """Create the CBDC educational illustration"""

    # Create canvas
    img = Image.new('RGB', (WIDTH, HEIGHT), colors["bg"])
    draw = ImageDraw.Draw(img)

    # Load fonts
    font_title = try_load_font(48, bold=True)
    font_heading = try_load_font(32, bold=True)
    font_label = try_load_font(22, bold=True)
    font_small = try_load_font(18)
    font_chinese = try_load_font(26)

    # ===== HEADER =====
    # Title bar
    draw.rectangle([0, 0, WIDTH, 80], fill=colors["primary"])

    # Title
    title_text = "数字货币 Digital Currency — CBDC"
    draw_text_centered(draw, title_text, WIDTH/2, 42, font_title, colors["white"])

    # ===== LEFT SECTION: Traditional Currency =====
    left_center_x = 280
    section_y = 200

    # Section header background
    draw_rounded_rectangle(draw, (40, 120, 520, 175), 10, colors["primary"])
    draw_text_centered(draw, "传统货币 Traditional Currency", 280, 150, font_heading, colors["white"])

    # Traditional flow box
    draw_rounded_rectangle(draw, (40, 200, 520, 520), 15, colors["white"], outline=colors["secondary"], width=2)

    # Wallet (physical cash) icon area
    wallet_x, wallet_y = 160, 290
    draw_icon_wallet(draw, wallet_x, wallet_y, 80, colors["primary"])
    draw_text_centered(draw, "现金 Cash", wallet_x, wallet_y + 65, font_label, colors["primary"])

    # Arrow down through bank
    draw_arrow(draw, wallet_x, wallet_y + 90, wallet_x, wallet_y + 140, colors["secondary"], width=4, dashed=True)

    # Commercial bank icon
    bank_x, bank_y = wallet_x, wallet_y + 190
    draw_icon_bank(draw, bank_x, bank_y, 100, colors["secondary"], is_central=False)
    draw_text_centered(draw, "商业银行", bank_x - 40, bank_y + 70, font_label, colors["primary"])
    draw_text_centered(draw, "Commercial Bank", bank_x, bank_y + 95, font_small, colors["text_dark"])

    # Arrow to deposits
    draw_arrow(draw, bank_x, bank_y + 100, bank_x, bank_y + 150, colors["secondary"], width=4, dashed=True)

    # Bank deposits
    deposit_x, deposit_y = bank_x, bank_y + 200
    # Stack of coins representation
    for i in range(3):
        draw.ellipse([
            deposit_x - 35,
            deposit_y - 20 + i*15,
            deposit_x + 35,
            deposit_y + 20 + i*15
        ], fill=colors["accent"] if i == 2 else colors["secondary"])
    draw_text_centered(draw, "银行存款", deposit_x, deposit_y + 35, font_label, colors["primary"])
    draw_text_centered(draw, "Bank Deposits", deposit_x, deposit_y + 58, font_small, colors["text_dark"])

    # Indirect access indicator
    draw.text((60, 480), "间接负债 Indirect Liability", font=font_small, fill=colors["text_dark"])
    draw.text((60, 500), "通过商业银行中介", font=font_small, fill=colors["secondary"])

    # ===== CENTER: VS Divider =====
    vs_x = WIDTH / 2
    draw.ellipse([vs_x - 45, 320, vs_x + 45, 410], fill=colors["accent"])
    draw_text_centered(draw, "VS", vs_x, 365, font_heading, colors["primary"])

    # ===== RIGHT SECTION: CBDC =====
    right_center_x = WIDTH - 280

    # Section header
    draw_rounded_rectangle(draw, (WIDTH-520, 120, WIDTH-40, 175), 10, colors["secondary"])
    draw_text_centered(draw, "数字货币 CBDC", WIDTH-280, 150, font_heading, colors["white"])

    # CBDC flow box
    draw_rounded_rectangle(draw, (WIDTH-520, 200, WIDTH-40, 520), 15, colors["white"], outline=colors["secondary"], width=2)

    # Digital RMB icon (stylized phone/digital)
    digital_x, digital_y = right_center_x, 290

    # Digital wallet representation
    draw_rounded_rectangle(draw, (digital_x - 50, digital_y - 40, digital_x + 50, digital_y + 40), 8, colors["accent"])
    # Screen
    draw.rectangle([digital_x - 40, digital_y - 25, digital_x + 40, digital_y + 25], fill=colors["primary"])
    # RMB symbol on screen
    draw.text((digital_x - 12, digital_y - 12), "¥", font=font_heading, fill=colors["accent"])

    draw_text_centered(draw, "数字人民币", digital_x, digital_y + 65, font_label, colors["secondary"])
    draw_text_centered(draw, "Digital RMB", digital_x, digital_y + 88, font_small, colors["text_dark"])

    # Direct arrow to central bank
    draw_arrow(draw, digital_x, digital_y + 95, digital_x, digital_y + 145, colors["secondary"], width=5)

    # Central bank icon
    cb_x, cb_y = digital_x, digital_y + 190
    draw_icon_bank(draw, cb_x, cb_y, 100, colors["secondary"], is_central=True)
    draw_text_centered(draw, "中央银行", cb_x - 40, cb_y + 70, font_label, colors["secondary"])
    draw_text_centered(draw, "Central Bank", cb_x, cb_y + 95, font_small, colors["text_dark"])

    # Direct liability indicator
    draw.text((WIDTH-500, 480), "直接负债 Direct Liability", font=font_small, fill=colors["secondary"])
    draw.text((WIDTH-500, 500), "无中介 No Intermediary", font=font_small, fill=colors["primary"])

    # ===== BOTTOM: Advantages and Challenges =====
    bottom_y = 560

    # Advantages panel (left)
    adv_x = 200
    draw_rounded_rectangle(draw, (40, bottom_y, 520, bottom_y + 180), 15, colors["white"], outline=colors["secondary"], width=2)

    # Advantages header
    draw_rounded_rectangle(draw, (40, bottom_y, 200, bottom_y + 45), 8, colors["secondary"])
    draw_text_centered(draw, "优势 Advantages", 120, bottom_y + 25, font_label, colors["white"])

    # Advantage icons
    # Anti-money laundering icon
    draw_icon_magnifier(draw, 130, bottom_y + 95, 50, colors["secondary"])
    draw.text((155, bottom_y + 78), "反洗钱", font=font_chinese, fill=colors["primary"])
    draw.text((155, bottom_y + 100), "Track Money Laundering", font=font_small, fill=colors["text_dark"])

    # Financial inclusion icon
    draw_icon_people(draw, 130, bottom_y + 155, 40, colors["secondary"])
    draw.text((155, bottom_y + 138), "普惠金融", font=font_chinese, fill=colors["primary"])
    draw.text((155, bottom_y + 160), "Financial Inclusion", font=font_small, fill=colors["text_dark"])

    # Challenges panel (right)
    chal_x = WIDTH - 200
    draw_rounded_rectangle(draw, (WIDTH-520, bottom_y, WIDTH-40, bottom_y + 180), 15, colors["white"], outline=colors["light"], width=2)

    # Challenges header
    draw_rounded_rectangle(draw, (WIDTH-200, bottom_y, WIDTH-40, bottom_y + 45), 8, colors["light"])
    draw_text_centered(draw, "挑战 Challenges", WIDTH-120, bottom_y + 25, font_label, colors["white"])

    # Challenge icons
    # Privacy icon
    draw_icon_eye(draw, WIDTH-370, bottom_y + 90, 45, colors["light"])
    draw.text((WIDTH-330, bottom_y + 73), "隐私挑战", font=font_chinese, fill=colors["primary"])
    draw.text((WIDTH-330, bottom_y + 95), "Privacy Concerns", font=font_small, fill=colors["text_dark"])

    # Banking model icon
    bank_q_x = WIDTH - 370
    draw_icon_bank(draw, bank_q_x, bottom_y + 160, 40, colors["light"], is_central=False)
    draw.text((WIDTH-330, bottom_y + 143), "银行模式冲击", font=font_chinese, fill=colors["primary"])
    draw.text((WIDTH-330, bottom_y + 165), "Banking Model Impact", font=font_small, fill=colors["text_dark"])

    # ===== FLOW ARROWS =====
    # Left to center arrow
    draw_arrow(draw, 530, 360, 670, 360, colors["primary"], width=3)

    # Center to right arrow
    draw_arrow(draw, 930, 360, 1070, 360, colors["primary"], width=3)

    # ===== KEY INSIGHT BOX =====
    insight_y = 760
    draw_rounded_rectangle(draw, (400, insight_y, WIDTH-400, insight_y + 70), 10, colors["primary"])

    insight_text = "CBDC: 中央银行直接发行，绕过商业银行体系"
    draw_text_centered(draw, insight_text, WIDTH/2, insight_y + 25, font_label, colors["white"])

    cbdc_explain = "CBDC = Central Bank Digital Currency; 法定货币数字化，无信用风险"
    draw_text_centered(draw, cbdc_explain, WIDTH/2, insight_y + 50, font_small, colors["accent"])

    # ===== DECORATIVE ELEMENTS =====
    # Top right corner accent
    draw.polygon([
        (WIDTH - 80, 0),
        (WIDTH, 0),
        (WIDTH, 80)
    ], fill=colors["accent"])

    # Bottom left corner accent
    draw.polygon([
        (0, HEIGHT - 60),
        (0, HEIGHT),
        (60, HEIGHT)
    ], fill=colors["secondary"])

    # Save the image
    img.save(output_path, "PNG", quality=95)
    print(f"Image saved to: {output_path}")
    return True

if __name__ == "__main__":
    create_cbdc_illustration()
