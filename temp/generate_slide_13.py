from PIL import Image, ImageDraw, ImageFont
import os

# Output path
output_path = "D:/新课开发/管理者的AI课/B-AI改造管理动作-共读型教学文档/完整课程包/PPT_html/slides/imgs/slide-13.png"

# Canvas size
W, H = 960, 540

# Colors (STRICT scheme)
PRIMARY_ACCENT = (184, 16, 37)      # #B81025 - red
SECONDARY = (26, 26, 26)            # #1A1A1A - dark gray
BACKGROUND = (246, 243, 239)        # #F6F3EF - warm white
TEXT_COLOR = (74, 74, 74)           # #4A4A4A - medium gray
LIGHT = (255, 255, 255)             # #FFFFFF - white

# Create image
img = Image.new('RGB', (W, H), BACKGROUND)
draw = ImageDraw.Draw(img)

# Font settings
try:
    font_title = ImageFont.truetype("C:/Windows/Fonts/msyh.ttc", 24)
    font_layer_title = ImageFont.truetype("C:/Windows/Fonts/msyh.ttc", 18)
    font_item = ImageFont.truetype("C:/Windows/Fonts/msyh.ttc", 12)
    font_number = ImageFont.truetype("C:/Windows/Fonts/arialbd.ttf", 36)
except:
    font_title = ImageFont.load_default()
    font_layer_title = ImageFont.load_default()
    font_item = ImageFont.load_default()
    font_number = ImageFont.load_default()

# Draw header bar
draw.rectangle([(0, 0), (W, 55)], fill=SECONDARY)
# Red accent on left of header
draw.rectangle([(0, 0), (6, 55)], fill=PRIMARY_ACCENT)
# Header text
draw.text((35, 15), "三层拆解概述", fill=LIGHT, font=font_title)

# Layout parameters
layers_data = [
    {
        "title": "信息处理层",
        "items": ["数据收集", "信息过滤", "状态同步", "文档整理"],
        "color": PRIMARY_ACCENT,
        "bg_color": (255, 255, 255)
    },
    {
        "title": "决策生成层",
        "items": ["问题界定", "方案生成", "风险评估", "决策输出"],
        "color": SECONDARY,
        "bg_color": (252, 252, 252)
    },
    {
        "title": "关系维护层",
        "items": ["向上管理", "平行协作", "向下辅导", "团队激励"],
        "color": TEXT_COLOR,
        "bg_color": (248, 248, 248)
    }
]

# Starting Y position
start_y = 75
layer_height = 135
gap = 12

for idx, layer in enumerate(layers_data):
    y = start_y + idx * (layer_height + gap)

    # Draw layer background
    draw.rectangle([(25, y), (W - 25, y + layer_height)], fill=layer["bg_color"])

    # Draw left accent bar
    draw.rectangle([(25, y), (32, y + layer_height)], fill=layer["color"])

    # Draw icon circle
    icon_x, icon_y = 55, y + 35
    draw.ellipse([(icon_x - 22, icon_y - 22), (icon_x + 22, icon_y + 22)], fill=layer["color"])

    # Icon symbols (using text as fallback)
    icons = ["📊", "🎯", "🤝"]
    try:
        draw.text((icon_x - 10, icon_y - 12), icons[idx], fill=LIGHT, font=font_item)
    except:
        pass

    # Draw layer title
    draw.text((95, y + 18), layer["title"], fill=SECONDARY, font=font_layer_title)

    # Draw item tags
    x_offset = 95
    y_offset = y + 52
    for item_idx, item in enumerate(layer["items"]):
        if item_idx == 2:
            x_offset = 95
            y_offset = y + 85
        # Item background
        item_w = len(item) * 18 + 20
        draw.rounded_rectangle([(x_offset, y_offset), (x_offset + item_w, y_offset + 28)], radius=4, fill=(232, 230, 227))
        # Item text
        draw.text((x_offset + 10, y_offset + 6), item, fill=TEXT_COLOR, font=font_item)
        x_offset += item_w + 12

    # Draw layer number
    draw.text((W - 85, y + 40), str(idx + 1), fill=(224, 221, 217), font=font_number)

# Save image
img.save(output_path, 'PNG', quality=95)
print(f"Image saved to: {output_path}")