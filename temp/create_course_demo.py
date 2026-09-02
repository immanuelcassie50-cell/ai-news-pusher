#!/usr/bin/env python3
"""
创建【01-破冰第一课：从校园人到职场人的角色转换】课程成果demo文件
红灰配色方案，专业企业培训风格
"""

from PIL import Image, ImageDraw, ImageFont
import os

# 输出目录
OUTPUT_DIR = r"D:\新课开发\新员工\01-破冰第一课-从校园人到职场人的角色转换\成果demo"
os.makedirs(OUTPUT_DIR, exist_ok=True)

# 配色方案 - 红灰专业企业培训风格
COLORS = {
    'primary_red': '#C41E3A',      # 主红色
    'dark_red': '#8B0000',          # 深红色
    'light_red': '#E8364F',         # 浅红色
    'charcoal': '#333333',          # 炭灰色
    'medium_gray': '#666666',       # 中灰色
    'light_gray': '#F5F5F5',        # 浅灰背景
    'warm_gray': '#9E9E9E',         # 暖灰色
    'white': '#FFFFFF',
    'off_white': '#FAFAFA',
}

# 字体路径 - 使用系统可用字体
FONT_PATHS = {
    'title': 'C:/Windows/Fonts/msyh.ttc',      # 微软雅黑
    'bold': 'C:/Windows/Fonts/msyhbd.ttc',     # 微软雅黑粗体
    'mono': 'C:/Windows/Fonts/consola.ttf',    # 等宽字体
}

def create_gradient_background(width, height, color1, color2, direction='vertical'):
    """创建渐变背景"""
    img = Image.new('RGB', (width, height), color1)
    draw = ImageDraw.Draw(img)

    if direction == 'vertical':
        for y in range(height):
            ratio = y / height
            r = int(color1[0] * (1 - ratio) + color2[0] * ratio)
            g = int(color1[1] * (1 - ratio) + color2[1] * ratio)
            b = int(color1[2] * (1 - ratio) + color2[2] * ratio)
            draw.line([(0, y), (width, y)], fill=(r, g, b))
    else:
        for x in range(width):
            ratio = x / width
            r = int(color1[0] * (1 - ratio) + color2[0] * ratio)
            g = int(color1[1] * (1 - ratio) + color2[1] * ratio)
            b = int(color1[2] * (1 - ratio) + color2[2] * ratio)
            draw.line([(x, 0), (x, height)], fill=(r, g, b))

    return img

def draw_rounded_rect(draw, coords, radius, fill, outline=None, width=1):
    """绘制圆角矩形"""
    x1, y1, x2, y2 = coords

    # 绘制主体矩形
    draw.rectangle([x1 + radius, y1, x2 - radius, y2], fill=fill, outline=outline)
    draw.rectangle([x1, y1 + radius, x2, y2 - radius], fill=fill, outline=outline)

    # 绘制四个角
    draw.ellipse([x1, y1, x1 + 2*radius, y1 + 2*radius], fill=fill, outline=outline)
    draw.ellipse([x2 - 2*radius, y1, x2, y1 + 2*radius], fill=fill, outline=outline)
    draw.ellipse([x1, y2 - 2*radius, x1 + 2*radius, y2], fill=fill, outline=outline)
    draw.ellipse([x2 - 2*radius, y2 - 2*radius, x2, y2], fill=fill, outline=outline)

    if outline:
        # 绘制边框线
        draw.arc([x1, y1, x1 + 2*radius, y1 + 2*radius], 180, 270, fill=outline, width=width)
        draw.line([x1 + radius, y1, x2 - radius, y1], fill=outline, width=width)
        draw.arc([x2 - 2*radius, y1, x2, y1 + 2*radius], 270, 360, fill=outline, width=width)
        draw.line([x2, y1 + radius, x2, y2 - radius], fill=outline, width=width)
        draw.arc([x2 - 2*radius, y2 - 2*radius, x2, y2], 0, 90, fill=outline, width=width)
        draw.line([x1 + radius, y2, x2 - radius, y2], fill=outline, width=width)
        draw.arc([x1, y2 - 2*radius, x1 + 2*radius, y2], 90, 180, fill=outline, width=width)
        draw.line([x1, y1 + radius, x1, y2 - radius], fill=outline, width=width)

def create_course_cover():
    """创建课程封面.jpg"""
    width, height = 1200, 675  # 16:9 比例

    # 创建浅灰背景
    img = create_gradient_background(width, height,
        (245, 245, 245), (230, 230, 230), 'vertical')
    draw = ImageDraw.Draw(img)

    # 顶部红色条
    draw.rectangle([0, 0, width, 8], fill=COLORS['primary_red'])

    # 左侧装饰条
    draw.rectangle([0, 0, 6, height], fill=COLORS['primary_red'])

    # 右侧装饰区块 - 深灰色
    draw.rectangle([width - 180, 0, width, height], fill=COLORS['charcoal'])

    # 右侧装饰图案 - 斜线条纹
    for i in range(0, 300, 20):
        draw.line([width - 180 + i, 0, width, height - 200 + i],
                  fill='#444444', width=2)

    # 主标题区域背景
    draw_rounded_rect(draw, (80, 120, 900, 280), 15, COLORS['white'],
                      outline=COLORS['medium_gray'], width=2)

    # 课程编号标签
    draw_rounded_rect(draw, (80, 60, 180, 100), 8, COLORS['primary_red'])
    draw.text((100, 70), "01", fill=COLORS['white'], font=ImageFont.truetype(FONT_PATHS['bold'], 28))

    # 主标题
    title_text = "破冰第一课"
    draw.text((100, 135), title_text, fill=COLORS['charcoal'],
              font=ImageFont.truetype(FONT_PATHS['bold'], 52))

    # 副标题
    subtitle_text = "从校园人到职场人的角色转换"
    draw.text((100, 205), subtitle_text, fill=COLORS['primary_red'],
              font=ImageFont.truetype(FONT_PATHS['bold'], 28))

    # 课程信息区域
    info_items = [
        ("课程时长", "2天"),
        ("学员对象", "应届/职场新人"),
        ("课程类型", "职场通用能力")
    ]

    y_start = 320
    for i, (label, value) in enumerate(info_items):
        y = y_start + i * 55

        # 标签背景
        draw_rounded_rect(draw, (80, y, 250, y + 45), 8, COLORS['charcoal'])
        draw.text((100, y + 10), label, fill=COLORS['white'],
                  font=ImageFont.truetype(FONT_PATHS['bold'], 18))

        # 值背景
        draw_rounded_rect(draw, (260, y, 500, y + 45), 8, COLORS['off_white'],
                          outline=COLORS['medium_gray'], width=1)
        draw.text((280, y + 10), value, fill=COLORS['charcoal'],
                  font=ImageFont.truetype(FONT_PATHS['title'], 18))

    # 底部装饰线
    draw.rectangle([0, height - 6, width, height], fill=COLORS['primary_red'])

    # 右下角公司标识区域
    draw.text((width - 160, height - 80), "企业培训", fill=COLORS['warm_gray'],
              font=ImageFont.truetype(FONT_PATHS['title'], 14))
    draw.text((width - 160, height - 60), "Internal Training", fill=COLORS['warm_gray'],
              font=ImageFont.truetype(FONT_PATHS['mono'], 10))

    # 保存
    output_path = os.path.join(OUTPUT_DIR, "课程封面.jpg")
    img.save(output_path, 'JPEG', quality=95)
    print(f"Created: {output_path}")
    return output_path

def create_course_poster():
    """创建课程海报.jpg"""
    width, height = 1080, 810  # 4:3 比例

    # 创建浅灰背景
    img = create_gradient_background(width, height,
        (250, 250, 250), (240, 240, 240), 'vertical')
    draw = ImageDraw.Draw(img)

    # 顶部深红色横幅
    draw.rectangle([0, 0, width, 120], fill=COLORS['primary_red'])

    # 海报标题
    draw.text((50, 35), "新员工入职培训", fill=COLORS['white'],
              font=ImageFont.truetype(FONT_PATHS['bold'], 36))
    draw.text((50, 80), "COURSE POSTER", fill='#B0B0B0',
              font=ImageFont.truetype(FONT_PATHS['mono'], 14))

    # 课程名称卡片
    draw_rounded_rect(draw, (50, 150, width - 50, 260), 15, COLORS['white'],
                      outline=COLORS['primary_red'], width=3)

    # 课程编号
    draw.text((80, 170), "课程编号: HR-NEW-01", fill=COLORS['medium_gray'],
              font=ImageFont.truetype(FONT_PATHS['mono'], 14))

    # 主标题
    draw.text((80, 195), "破冰第一课", fill=COLORS['charcoal'],
              font=ImageFont.truetype(FONT_PATHS['bold'], 42))

    # 副标题
    draw.text((80, 245), "从校园人到职场人的角色转换", fill=COLORS['primary_red'],
              font=ImageFont.truetype(FONT_PATHS['bold'], 24))

    # 课程亮点区域
    highlights = [
        ("角色认知", "清晰定位职场新身份"),
        ("心态转变", "从被动学习到主动担当"),
        ("行为规范", "职业化行为习惯养成"),
        ("沟通技巧", "职场高效沟通方法")
    ]

    y_start = 290
    card_width = 230
    card_height = 140
    gap = 20

    for i, (title, desc) in enumerate(highlights):
        x = 50 + i * (card_width + gap)

        # 卡片背景
        draw_rounded_rect(draw, (x, y_start, x + card_width, y_start + card_height),
                          12, COLORS['white'], outline=COLORS['medium_gray'], width=1)

        # 顶部色块
        draw.rectangle([x, y_start, x + card_width, y_start + 8],
                       fill=COLORS['primary_red'])

        # 序号圆圈
        draw.ellipse([x + 15, y_start + 25, x + 50, y_start + 60],
                     fill=COLORS['charcoal'])
        draw.text((x + 25, y_start + 35), str(i + 1), fill=COLORS['white'],
                  font=ImageFont.truetype(FONT_PATHS['bold'], 18))

        # 标题
        draw.text((x + 60, y_start + 30), title, fill=COLORS['charcoal'],
                  font=ImageFont.truetype(FONT_PATHS['bold'], 18))

        # 描述
        draw.text((x + 15, y_start + 75), desc, fill=COLORS['medium_gray'],
                  font=ImageFont.truetype(FONT_PATHS['title'], 13))

    # 适合人群区域
    y_pos = y_start + card_height + 30
    draw_rounded_rect(draw, (50, y_pos, width - 50, y_pos + 90), 12,
                      COLORS['off_white'], outline=COLORS['warm_gray'], width=1)

    draw.text((80, y_pos + 15), "适合人群", fill=COLORS['charcoal'],
              font=ImageFont.truetype(FONT_PATHS['bold'], 18))

    crowd_items = ["应届毕业生", "职场新人", "管培生", "转职转岗人员"]
    for i, item in enumerate(crowd_items):
        x = 80 + i * 230
        # 小圆点
        draw.ellipse([x, y_pos + 52, x + 10, y_pos + 62], fill=COLORS['primary_red'])
        draw.text((x + 18, y_pos + 45), item, fill=COLORS['medium_gray'],
                  font=ImageFont.truetype(FONT_PATHS['title'], 16))

    # 时间安排区域
    y_pos = y_start + card_height + 140
    draw_rounded_rect(draw, (50, y_pos, width - 50, y_pos + 100), 12,
                      COLORS['charcoal'], outline=None)

    draw.text((80, y_pos + 15), "时间安排", fill=COLORS['white'],
              font=ImageFont.truetype(FONT_PATHS['bold'], 18))

    schedule_items = [
        ("Day 1", "上午 9:00-12:00 / 下午 14:00-17:30"),
        ("Day 2", "上午 9:00-12:00 / 下午 14:00-16:00")
    ]

    for i, (day, time) in enumerate(schedule_items):
        y = y_pos + 45 + i * 28
        draw.text((100, y), day, fill=COLORS['light_red'],
                  font=ImageFont.truetype(FONT_PATHS['bold'], 14))
        draw.text((200, y), time, fill=COLORS['white'],
                  font=ImageFont.truetype(FONT_PATHS['title'], 14))

    # 底部信息
    draw.rectangle([0, height - 50, width, height], fill=COLORS['charcoal'])
    draw.text((50, height - 35), "咨询报名：请致电 HR部门 | 邮: hr@company.com",
              fill=COLORS['warm_gray'], font=ImageFont.truetype(FONT_PATHS['title'], 14))
    draw.text((width - 350, height - 35), "内部培训资料 · 仅供学习使用",
              fill=COLORS['warm_gray'], font=ImageFont.truetype(FONT_PATHS['mono'], 12))

    # 保存
    output_path = os.path.join(OUTPUT_DIR, "课程海报.jpg")
    img.save(output_path, 'JPEG', quality=95)
    print(f"Created: {output_path}")
    return output_path

def create_student_output_sample():
    """创建学员产出样例.jpg"""
    width, height = 1200, 800

    # 浅灰背景
    img = create_gradient_background(width, height,
        (248, 248, 248), (235, 235, 235), 'vertical')
    draw = ImageDraw.Draw(img)

    # 顶部红色条
    draw.rectangle([0, 0, width, 60], fill=COLORS['primary_red'])
    draw.text((40, 15), "学员产出样例", fill=COLORS['white'],
              font=ImageFont.truetype(FONT_PATHS['bold'], 26))
    draw.text((width - 280, 18), "STUDENT OUTPUT SAMPLES", fill='#B0B0B0',
              font=ImageFont.truetype(FONT_PATHS['mono'], 12))

    # 手册标题
    y = 90
    draw.text((40, y), "《角色转换手册》学员填写样例", fill=COLORS['charcoal'],
              font=ImageFont.truetype(FONT_PATHS['bold'], 22))

    # 模拟手册内容区域
    handbook_x = 40
    handbook_y = 130
    handbook_w = 700
    handbook_h = 620

    # 手册背景
    draw_rounded_rect(draw, (handbook_x, handbook_y, handbook_x + handbook_w, handbook_y + handbook_h),
                      10, COLORS['white'], outline=COLORS['medium_gray'], width=2)

    # 手册页阴影效果
    draw.rectangle([handbook_x + 5, handbook_y + 5, handbook_x + handbook_w + 5, handbook_y + handbook_h + 5],
                   fill='#E0E0E0')
    draw_rounded_rect(draw, (handbook_x, handbook_y, handbook_x + handbook_w, handbook_y + handbook_h),
                      10, COLORS['white'], outline=COLORS['medium_gray'], width=2)

    # 手册内容 - 第一页
    page_content = [
        ("姓名:", "张明"),
        ("部门:", "市场营销部"),
        ("入职日期:", "2024年7月15日"),
        ("", ""),
        ("【角色认知】", ""),
        ("我的新角色:", "职场新人 → 专业营销人"),
        ("核心职责:", "协助完成市场推广项目执行"),
        ("", ""),
        ("【转变承诺】", ""),
        ("1. 每天提前10分钟到岗", "✓"),
        ("2. 主动请教前辈经验", "✓"),
        ("3. 记录每日工作心得", "✓"),
        ("", ""),
        ("【行动计划】", ""),
        ("本周目标:", "熟悉团队成员，了解项目流程"),
        ("本月目标:", "独立完成1个小型推广任务"),
    ]

    line_y = handbook_y + 30
    for text, value in page_content:
        if text == "":
            line_y += 15
            continue
        if text.startswith("【"):
            draw.text((handbook_x + 30, line_y), text, fill=COLORS['primary_red'],
                      font=ImageFont.truetype(FONT_PATHS['bold'], 14))
            line_y += 30
        else:
            draw.text((handbook_x + 30, line_y), text, fill=COLORS['charcoal'],
                      font=ImageFont.truetype(FONT_PATHS['title'], 12))
            if value:
                if value == "✓":
                    draw.text((handbook_x + 350, line_y), value, fill='#228B22',
                              font=ImageFont.truetype(FONT_PATHS['bold'], 14))
                else:
                    draw.text((handbook_x + 350, line_y), value, fill=COLORS['medium_gray'],
                              font=ImageFont.truetype(FONT_PATHS['title'], 12))
            line_y += 25

    # 右侧 - 模拟表单样例
    form_x = 780
    form_y = 130
    form_w = 380
    form_h = 300

    # 表单标题
    draw.text((form_x, form_y - 30), "《自我评估表单》", fill=COLORS['charcoal'],
              font=ImageFont.truetype(FONT_PATHS['bold'], 18))

    # 表单背景
    draw_rounded_rect(draw, (form_x, form_y, form_x + form_w, form_y + form_h),
                      10, COLORS['white'], outline=COLORS['medium_gray'], width=2)

    # 表单内容
    form_items = [
        ("沟通能力", "★★★★☆"),
        ("执行力", "★★★★★"),
        ("团队协作", "★★★☆☆"),
        ("专业技能", "★★☆☆☆"),
        ("时间管理", "★★★☆☆"),
    ]

    for i, (item, rating) in enumerate(form_items):
        item_y = form_y + 30 + i * 50
        draw.text((form_x + 20, item_y), item, fill=COLORS['charcoal'],
                  font=ImageFont.truetype(FONT_PATHS['title'], 14))
        draw.text((form_x + 150, item_y), rating, fill=COLORS['primary_red'],
                  font=ImageFont.truetype(FONT_PATHS['bold'], 16))

    # 下方 - 角色扮演反馈表
    roleplay_x = 780
    roleplay_y = 460
    roleplay_w = 380
    roleplay_h = 290

    draw.text((roleplay_x, roleplay_y - 30), "《角色扮演反馈表》", fill=COLORS['charcoal'],
              font=ImageFont.truetype(FONT_PATHS['bold'], 18))

    # 表单背景
    draw_rounded_rect(draw, (roleplay_x, roleplay_y, roleplay_x + roleplay_w, roleplay_y + roleplay_h),
                      10, COLORS['off_white'], outline=COLORS['warm_gray'], width=1)

    # 场景描述
    draw.text((roleplay_x + 20, roleplay_y + 15), "场景: 向上级汇报工作进展",
              fill=COLORS['medium_gray'], font=ImageFont.truetype(FONT_PATHS['title'], 12))

    # 评价项
    eval_items = [
        ("表达清晰度:", "8/10"),
        ("逻辑性:", "9/10"),
        ("应对提问:", "7/10"),
    ]

    for i, (item, score) in enumerate(eval_items):
        item_y = roleplay_y + 50 + i * 35
        draw.text((roleplay_x + 20, item_y), item, fill=COLORS['charcoal'],
                  font=ImageFont.truetype(FONT_PATHS['title'], 13))
        draw.text((roleplay_x + 150, item_y), score, fill=COLORS['primary_red'],
                  font=ImageFont.truetype(FONT_PATHS['bold'], 14))

    # 导师评语
    draw.text((roleplay_x + 20, roleplay_y + 180), "导师评语:",
              fill=COLORS['charcoal'], font=ImageFont.truetype(FONT_PATHS['bold'], 12))
    draw.text((roleplay_x + 20, roleplay_y + 205),
              "表达清晰有逻辑，建议加强数据支撑...",
              fill=COLORS['medium_gray'], font=ImageFont.truetype(FONT_PATHS['title'], 11))

    # 底部说明
    draw.rectangle([0, height - 45, width, height], fill=COLORS['charcoal'])
    draw.text((40, height - 28), "以上为学员在课程中产出的典型样例，实际内容因人而异",
              fill=COLORS['warm_gray'], font=ImageFont.truetype(FONT_PATHS['title'], 13))

    # 保存
    output_path = os.path.join(OUTPUT_DIR, "学员产出样例.jpg")
    img.save(output_path, 'JPEG', quality=95)
    print(f"Created: {output_path}")
    return output_path

def create_teaching_scene():
    """创建教学场景图.jpg"""
    width, height = 1200, 675  # 16:9 比例

    # 浅灰背景
    img = create_gradient_background(width, height,
        (245, 245, 245), (235, 235, 235), 'vertical')
    draw = ImageDraw.Draw(img)

    # 顶部红色横幅
    draw.rectangle([0, 0, width, 70], fill=COLORS['primary_red'])
    draw.text((40, 20), "课堂教学场景示意", fill=COLORS['white'],
              font=ImageFont.truetype(FONT_PATHS['bold'], 28))
    draw.text((width - 320, 25), "TEACHING SCENE ILLUSTRATION",
              fill='#B0B0B0', font=ImageFont.truetype(FONT_PATHS['mono'], 12))

    # 场景区域布局
    scene_y = 100
    scene_h = 520

    # 左侧 - 分组讨论场景
    scene1_x = 40
    draw.text((scene1_x, scene_y), "分组讨论", fill=COLORS['charcoal'],
              font=ImageFont.truetype(FONT_PATHS['bold'], 18))

    # 分组讨论区域背景
    draw_rounded_rect(draw, (scene1_x, scene_y + 30, scene1_x + 340, scene_y + 340),
                      15, COLORS['white'], outline=COLORS['medium_gray'], width=2)

    # 模拟会议室桌
    draw_rounded_rect(draw, (scene1_x + 40, scene_y + 150, scene1_x + 300, scene_y + 280),
                      8, '#E8D4B8', outline='#C4A574', width=2)

    # 模拟小组人员 - 圆圈表示
    person_positions = [
        (scene1_x + 80, scene_y + 180),
        (scene1_x + 140, scene_y + 180),
        (scene1_x + 200, scene_y + 180),
        (scene1_x + 260, scene_y + 180),
    ]

    for px, py in person_positions:
        # 人物圆圈
        draw.ellipse([px - 20, py - 20, px + 20, py + 20],
                     fill=COLORS['charcoal'], outline=COLORS['primary_red'], width=2)
        # 头部
        draw.ellipse([px - 10, py - 15, px + 10, py + 5], fill='#FFDAB9')
        # 身体
        draw.ellipse([px - 15, py + 5, px + 15, py + 25], fill=COLORS['charcoal'])

    # 讨论图标
    draw.ellipse([scene1_x + 280, scene_y + 80, scene1_x + 320, scene_y + 120],
                 fill=COLORS['primary_red'])
    draw.text((scene1_x + 288, scene_y + 88), "💬", fill=COLORS['white'], font=ImageFont.load_default())

    # 标签
    draw.text((scene1_x + 50, scene_y + 300), "4-6人小组", fill=COLORS['medium_gray'],
              font=ImageFont.truetype(FONT_PATHS['title'], 12))
    draw.text((scene1_x + 180, scene_y + 300), "圆桌研讨", fill=COLORS['medium_gray'],
              font=ImageFont.truetype(FONT_PATHS['title'], 12))

    # 中间 - 角色扮演场景
    scene2_x = 420
    draw.text((scene2_x, scene_y), "角色扮演", fill=COLORS['charcoal'],
              font=ImageFont.truetype(FONT_PATHS['bold'], 18))

    # 角色扮演区域背景
    draw_rounded_rect(draw, (scene2_x, scene_y + 30, scene2_x + 340, scene_y + 340),
                      15, COLORS['off_white'], outline=COLORS['primary_red'], width=2)

    # 模拟讲台
    draw_rounded_rect(draw, (scene2_x + 100, scene_y + 250, scene2_x + 240, scene_y + 290),
                      5, COLORS['charcoal'])

    # 模拟讲师
    draw.ellipse([scene2_x + 155, scene_y + 100, scene2_x + 185, sceney := scene_y + 130],
                 fill='#FFDAB9')  # 头部
    draw.ellipse([scene2_x + 145, sceney + 30, scene2_x + 195, sceney + 100],
                 fill=COLORS['primary_red'])  # 上衣
    draw.text((scene2_x + 150, scene_y + 260), "讲师", fill=COLORS['white'],
              font=ImageFont.truetype(FONT_PATHS['title'], 10))

    # 模拟学员（观众）
    for i in range(3):
        px = scene2_x + 60 + i * 100
        draw.ellipse([px - 15, sceney + 50, px + 15, sceney + 80], fill='#FFDAB9')
        draw.ellipse([px - 20, sceney + 80, px + 20, sceney + 130], fill=COLORS['medium_gray'])

    # 角色标签
    draw.text((scene2_x + 50, scene_y + 300), "学员A", fill=COLORS['primary_red'],
              font=ImageFont.truetype(FONT_PATHS['bold'], 12))
    draw.text((scene2_x + 140, scene_y + 300), "学员B", fill=COLORS['primary_red'],
              font=ImageFont.truetype(FONT_PATHS['bold'], 12))
    draw.text((scene2_x + 230, sceney + 140), "讲师", fill=COLORS['charcoal'],
              font=ImageFont.truetype(FONT_PATHS['bold'], 12))

    # 右侧 - 案例分析场景
    scene3_x = 800
    draw.text((scene3_x, scene_y), "案例分析", fill=COLORS['charcoal'],
              font=ImageFont.truetype(FONT_PATHS['bold'], 18))

    # 案例分析区域背景
    draw_rounded_rect(draw, (scene3_x, scene_y + 30, scene3_x + 340, scene_y + 340),
                      15, COLORS['white'], outline=COLORS['warm_gray'], width=2)

    # 白板/屏幕
    draw.rectangle([scene3_x + 40, sceney + 50, scene3_x + 300, sceney + 200],
                   fill='#F0F0F0', outline=COLORS['charcoal'], width=2)

    # 屏幕上的内容 - 模拟PPT
    draw.text((scene3_x + 60, sceney + 70), "📊 案例分析框架", fill=COLORS['charcoal'],
              font=ImageFont.truetype(FONT_PATHS['bold'], 14))
    draw.text((scene3_x + 60, sceney + 100), "1. 问题定义", fill=COLORS['medium_gray'],
              font=ImageFont.truetype(FONT_PATHS['title'], 12))
    draw.text((scene3_x + 60, sceney + 125), "2. 原因分析", fill=COLORS['medium_gray'],
              font=ImageFont.truetype(FONT_PATHS['title'], 12))
    draw.text((scene3_x + 60, sceney + 150), "3. 解决方案", fill=COLORS['medium_gray'],
              font=ImageFont.truetype(FONT_PATHS['title'], 12))
    draw.text((scene3_x + 60, sceney + 175), "4. 实施计划", fill=COLORS['medium_gray'],
              font=ImageFont.truetype(FONT_PATHS['title'], 12))

    # 学员听讲
    for i in range(4):
        px = scene3_x + 70 + i * 65
        draw.ellipse([px - 12, sceney + 230, px + 12, sceney + 254], fill='#FFDAB9')
        draw.ellipse([px - 15, sceney + 254, px + 15, sceney + 290], fill=COLORS['medium_gray'])

    # 底部场景说明
    desc_y = scene_y + 380
    draw_rounded_rect(draw, (40, desc_y, width - 40, desc_y + 80), 12,
                      COLORS['charcoal'], outline=None)

    scene_descs = [
        ("分组讨论", "4-6人小组围坐，\n围绕主题展开讨论"),
        ("角色扮演", "模拟职场真实场景，\n演练沟通与应对"),
        ("案例分析", "结合实际案例，\n小组研讨解决方案"),
    ]

    for i, (title, desc) in enumerate(scene_descs):
        x = 80 + i * 380
        draw.text((x, desc_y + 12), title, fill=COLORS['light_red'],
                  font=ImageFont.truetype(FONT_PATHS['bold'], 14))
        draw.text((x, desc_y + 38), desc, fill=COLORS['white'],
                  font=ImageFont.truetype(FONT_PATHS['title'], 12))

    # 保存
    output_path = os.path.join(OUTPUT_DIR, "教学场景图.jpg")
    img.save(output_path, 'JPEG', quality=95)
    print(f"Created: {output_path}")
    return output_path

if __name__ == "__main__":
    print("Creating course demo files...")
    print(f"Output directory: {OUTPUT_DIR}")
    print()

    create_course_cover()
    create_course_poster()
    create_student_output_sample()
    create_teaching_scene()

    print()
    print("All files created successfully!")
