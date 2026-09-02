# -*- coding: utf-8 -*-
code = r'''


def P36():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 36, "第三章 · 点燃参与", "3.4 · 5 种方法的适用场景判断")
    tx(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.4),
       "如何选择适合您和您工作坊的开场方法", sz=14, c=DARK, b=True)
    rows = [
        ("方法", "适合内容", "不适合内容", "适合讲师类型", "风险"),
        ("反差", "学员疲惫 / 情绪低", "严肃议题（裁员、绩效）", "能放松、有表现力", "过于娱乐"),
        ("提问", "所有内容", "纯技能示范", "善于引导思考", "问题太开放学员沉默"),
        ("体验", "技能类、行为类", "知识性内容", "能组织活动", "学员不配合"),
        ("共鸣", "学员有共同痛点", "学员背景差异大", "有真实故事", "故事不真实"),
        ("戏剧", "情境复杂、有冲突", "需要严肃氛围", "表演能力强", "过于戏剧化"),
    ]
    rh = Inches(0.7)
    rx = Inches(0.6)
    ry = Inches(2.0)
    cw = [Inches(1.8), Inches(2.5), Inches(2.5), Inches(2.5), Inches(2.8)]
    rc(s, rx, ry, Inches(12.1), Inches(0.5), DARK)
    x = rx
    for i, h in enumerate(rows[0]):
        tx(s, x + Inches(0.1), ry, cw[i] - Inches(0.2), Inches(0.5), h, sz=12, c=WHT, b=True, an=MSO_ANCHOR.MIDDLE)
        x += cw[i]
    for r, row in enumerate(rows[1:]):
        y = ry + Inches(0.5) + rh * r
        fill = LBG if r % 2 == 0 else WHT
        x = rx
        for c, cell in enumerate(row):
            b = c == 0
            color = RED if c == 0 else TXT
            rc(s, x, y, cw[c], rh, fill, line=LGT)
            tx(s, x + Inches(0.1), y, cw[c] - Inches(0.2), rh, cell, sz=10, c=color, b=b, an=MSO_ANCHOR.MIDDLE)
            x += cw[c]
    rc(s, Inches(0.6), Inches(6.4), Inches(12.1), Inches(0.8), DARK)
    tx(s, Inches(0.8), Inches(6.45), Inches(11.7), Inches(0.3), "核心选择标准", sz=12, c=RED, b=True)
    tx(s, Inches(0.8), Inches(6.75), Inches(11.7), Inches(0.4),
       "三个匹配：方法 × 学员状态 × 讲师能力。三个中任何一个不匹配，开场都会失败。",
       sz=12, c=WHT, b=True)
    ftr(s)
    note(s, "【3.4 选择适用场景】\n\n讲师话术 3.4.3：\n每种开场方法都有它的适用场景和风险。\n\n反差：适合学员疲惫、情绪低的情况。风险是过于娱乐。\n提问：基本所有内容都适合。风险是问题太开放，学员沉默。\n体验：适合技能类、行为类内容。风险是学员不配合。\n共鸣：适合学员有共同痛点的情况。风险是故事不真实。\n戏剧：适合情境复杂、有冲突的内容。风险是过于戏剧化。\n\n核心选择标准：三个匹配——\n1. 方法 × 学员状态（学员当前是疲惫还是兴奋）\n2. 方法 × 讲师能力（您擅长什么）\n3. 方法 × 内容属性（您教的是什么）\n\n三个中任何一个不匹配，开场都会失败。")


def P37():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 37, "第三章 · 点燃参与", "3.5 · 开场常见错误")
    errors = [
        ("1", "自我介绍占用 10 分钟", "学员其实不在乎您的头衔，他们在乎的是您能不能帮到他们", "用 1 句话介绍 + 一个学员能记住的标签"),
        ("2", "罗列工作坊目标", "今天我们讲 A、B、C、D……", "——学员记不住也不关心", "用故事/案例开场，目标融入其中"),
        ("3", "调空调/讲纪律/讲流程", "这是 0 价值的开场，学员立刻走神", "开场前 5 分钟讲完规则，开场立刻进入主题"),
        ("4", "问您叫什么名字", "60% 学员都不会真的回答", "用便利贴让学员写名字 + 一个标签"),
        ("5", "PPT 念开场", "学员比您读得快，PPT 念开场很尴尬", "开场不依赖 PPT，用您的声音和身体"),
    ]
    rh = Inches(0.85)
    rx = Inches(0.6)
    ry = Inches(1.4)
    headers = ["序号", "错误", "为什么错", "正确做法”]"
    cw = [Inches(0.9), Inches(3.2), Inches(4.5), Inches(3.5)]
    rc(s, rx, ry, Inches(12.1), Inches(0.5), DARK)
    x = rx
    for i, h in enumerate(headers):
        tx(s, x + Inches(0.1), ry, cw[i] - Inches(0.2), Inches(0.5), h, sz=12, c=WHT, b=True, an=MSO_ANCHOR.MIDDLE)
        x += cw[i]
    for r, row in enumerate(errors):
        y = ry + Inches(0.5) + rh * r
        fill = LBG if r % 2 == 0 else WHT
        x = rx
        for c, cell in enumerate(row):
            color = RED if c == 0 else (DARK if c == 1 else TXT)
            b = c in (0, 1)
            sz = 16 if c == 0 else (13 if c == 1 else 11)
            rc(s, x, y, cw[c], rh, fill, line=LGT)
            tx(s, x + Inches(0.1), y, cw[c] - Inches(0.2), rh, cell, sz=sz, c=color, b=b, an=MSO_ANCHOR.MIDDLE)
            x += cw[c]
    ftr(s)
    note(s, "【3.5 开场常见错误】\n\n讲师话术 3.5.1：\n开场常见 5 个错误：\n\n1. 自我介绍占用 10 分钟：学员其实不在乎您的头衔，他们在乎您能不能帮到他们。\n   正确：用 1 句话介绍 + 一个学员能记住的标签。\n\n2. 罗列工作坊目标：今天我们讲 A、B、C、D——学员记不住。\n   正确：用故事/案例开场，目标融入其中。\n\n3. 调空调/讲纪律/讲流程：这是 0 价值的开场，学员立刻走神。\n   正确：开场前 5 分钟讲完规则，开场立刻进入主题。\n\n4. 问您叫什么名字：60% 学员都不会真的回答。\n   正确：用便利贴让学员写名字 + 一个标签。\n\n5. PPT 念开场：学员比您读得快，PPT 念开场很尴尬。\n   正确：开场不依赖 PPT，用您的声音和身体。\n\n请检查您自己的开场——有这些错误吗？")


def P38():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 38, "第三章 · 点燃参与", "3.5 · 开场设计模板")
    tx(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.4),
       "用这个模板写出您工作坊的开场", sz=14, c=DARK, b=True)
    parts = [
        ("第一段 · 破冰 (30 秒)", "用反差/提问/体验/共鸣/戏剧 之一", "我今天不打算……” / “我想先问大家一个问题……” / “请大家站起来做一个动作……"),
        ("第二段 · 钩子 (60 秒)", "用一个学员会关心的点抓住注意力", "上周我遇到一个学员……” / “我以前犯过的一个错误……” / “我看到过这样一组数据……"),
        ("第三段 · 引入主题 (60 秒)", "把工作坊主题和学员的关心点连接", "今天我们工作坊的核心就是……” / “这 4 个小时我们要回答的问题是……"),
        ("第四段 · 规则 + 进入 (30 秒)", "简洁讲规则，立刻进入 R1", "几个小规则：……好，我们正式开始。"),
    ]
    rh = Inches(1.2)
    rx = Inches(0.6)
    ry = Inches(1.9)
    for r, (t, lgc, ex) in enumerate(parts):
        y = ry + rh * r
        fill = LBG if r % 2 == 0 else WHT
        rc(s, rx, y, Inches(12.1), rh, fill, line=LGT)
        rc(s, rx, y, Inches(0.15), rh, [RED, GREEN, GOLD, RED][r])
        tx(s, rx + Inches(0.3), y + Inches(0.15), Inches(3.5), Inches(0.4), t, sz=14, c=DARK, b=True)
        tx(s, rx + Inches(3.8), y + Inches(0.15), Inches(3.5), Inches(0.4), lgc, sz=11, c=TXT, b=True)
        tx(s, rx + Inches(3.8), y + Inches(0.5), Inches(8.0), Inches(0.6), "示例：” + ex, sz=10, c=GRY)"
    ftr(s)
    note(s, "【3.5 开场设计模板】\n\n讲师话术 3.5.2：\n一个好的开场通常有 4 段：\n\n1. 破冰（30 秒）：用反差/提问/体验/共鸣/戏剧之一\n   例：我今天不打算讲新东西。\n   例：我想先问大家一个问题。\n   例：请大家站起来做一个动作。\n\n2. 钩子（60 秒）：用一个学员会关心的点抓住注意力\n   例：上周我遇到一个学员……\n   例：我以前犯过的一个错误……\n\n3. 引入主题（60 秒）：把工作坊主题和学员的关心点连接\n   例：今天我们工作坊的核心就是……\n\n4. 规则 + 进入（30 秒）：简洁讲规则，立刻进入 R1\n\n请在 Activity 3A 的设计中，至少包含这 4 段。")


def P39():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 39, "第三章 · 点燃参与", "3.6 · 静远开场完整设计")
    rc(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.4), DARK)
    tx(s, Inches(0.8), Inches(1.4), Inches(11.7), Inches(0.3), "静远的开场完整流程（5 分钟）", sz=14, c=WHT, b=True)
    flow = [
        ("00:00 - 00:30", "破冰（反差）", "”今天我们的工作坊，不讲新东西。”", RED),
        ("00:30 - 01:30", "钩子（共鸣）", "”就讲一件事——上次课上完之后，您在真实工作中到底用上了多少。”", GREEN),
        ("01:30 - 02:30", "引入主题（具体）", "”我想用 4 个小时，和您一起把上次课上学到的东西，转化成您下周一上班就能用的工具。”", GOLD),
        ("02:30 - 03:30", "规则", "”几个规则：手机静音；想上厕所随时；有问题随时打断。便利贴先发您，写上名字+一个标签。”", RED),
        ("03:30 - 05:00", "进入 R1（点名）", "”好，我现在随机点几个名字——张三、李四、王五——您说说上次课您用了哪个？”", GREEN),
    ]
    rx = Inches(0.6)
    ry = Inches(2.0)
    rh = Inches(0.95)
    cw = [Inches(2.5), Inches(2.5), Inches(7.1)]
    for r, row in enumerate([("时间", "段落", "内容")] + flow):
        is_h = (r == 0)
        y = ry + rh * r
        x = rx
        for c, cell in enumerate(row):
            fill = DARK if is_h else (LBG if r % 2 == 0 else WHT)
            color = WHT if is_h else TXT
            rc(s, x, y, cw[c], rh, fill, line=LGT)
            b = is_h or c == 0
            sz = 11 if not is_h else 12
            tx(s, x + Inches(0.1), y, cw[c] - Inches(0.2), rh, cell, sz=sz, c=color, b=b, an=MSO_ANCHOR.MIDDLE)
            x += cw[c]
    ftr(s)
    note(s, "【3.6 静远完整开场】\n\n讲师话术 3.6.1：\n我们看静远的工作坊完整开场流程——\n\n00:00 - 00:30  破冰（反差）：今天我们的工作坊，不讲新东西。\n00:30 - 01:30  钩子（共鸣）：就讲一件事——上次课上完之后，您在真实工作中到底用上了多少。\n01:30 - 02:30  引入主题：我想用 4 个小时，和您一起把上次课上学到的东西，转化成您下周一上班就能用的工具。\n02:30 - 03:30  规则：手机静音；想上厕所随时；有问题随时打断。便利贴先发您，写上名字+一个标签。\n03:30 - 05:00  进入 R1（点名）：好，我现在随机点几个名字——张三、李四、王五——您说说上次课您用了哪个？\n\n这个开场有几个关键：\n1. 30 秒内反差（不讲新东西）\n2. 60 秒钩子（用了多少——所有学员都关心）\n3. 明确时长（4 个小时）+ 明确结果（下周一就能用）\n4. 规则简洁（30 秒讲完）\n5. 立刻进入 R1（点名+具体问题）\n\n请用这个结构来设计您自己的开场。")


def P40():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 40, "第三章 · 点燃参与", "3.7 · 第三章小结")
    rc(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.4), DARK)
    tx(s, Inches(0.8), Inches(1.4), Inches(11.7), Inches(0.3), "第三章小结", sz=14, c=WHT, b=True)
    points = [
        ("开场两难", "过于安全：学员不进入状态。过于紧张：学员有抗拒。我们要中间状态：点燃。", RED),
        ("5 种方法", "反差 / 提问 / 体验 / 共鸣 / 戏剧。每种适合不同内容和讲师类型。", GOLD),
        ("三个匹配", "方法 × 学员状态 × 讲师能力。任一不匹配，开场失败。", GREEN),
        ("4 段结构", "破冰 30 秒 + 钩子 60 秒 + 引入主题 60 秒 + 规则 30 秒。", RED),
        ("静远案例", "反差 + 共鸣组合。30 秒内反差（不讲新东西），60 秒钩子（用了多少）。", GREEN),
    ]
    for i, (t, desc, c) in enumerate(points):
        y = Inches(2.0 + i * 1.0)
        rc(s, Inches(0.6), y, Inches(12.1), Inches(0.9), WHT, line=LGT)
        rc(s, Inches(0.6), y, Inches(0.15), Inches(0.9), c)
        tx(s, Inches(0.9), y + Inches(0.1), Inches(2.5), Inches(0.4), t, sz=14, c=DARK, b=True)
        tx(s, Inches(3.6), y + Inches(0.1), Inches(9.0), Inches(0.7), desc, sz=11, c=TXT)
    rc(s, Inches(7.0), Inches(0.6), Inches(12.1), Inches(0.4), DARK)
    tx(s, Inches(0.8), Inches(7.05), Inches(11.7), Inches(0.4),
       "下一章预告", sz=11, c=RED, b=True)
    tx(s, Inches(3.0), Inches(7.05), Inches(9.5), Inches(0.4),
       "→ 第四章：深问与共创 · 我们将学习好问题 vs 坏问题 + 4 类提问技术", sz=11, c=WHT)
    ftr(s)
    note(s, "【3.7 小结】\n\n讲师话术 3.7.1：\n第三章小结：\n\n1. 开场两难：过于安全/过于紧张，我们要中间状态——点燃。\n2. 5 种方法：反差/提问/体验/共鸣/戏剧。\n3. 三个匹配：方法 × 学员状态 × 讲师能力。\n4. 4 段结构：破冰 30 秒 + 钩子 60 秒 + 引入主题 60 秒 + 规则 30 秒。\n5. 静远案例：反差 + 共鸣组合。\n\n下一章我们将进入第四章：深问与共创。\n\n很多讲师有一个共同问题：只会问”你怎么看？”你觉得呢？", "——这种封闭式问题。\n\n第四章我们将学 4 类提问技术：\n1. 开放式问题（让学员多说）\n2. 追问问题（让学员深挖）\n3. 比较问题（让学员对比）\n4. 反思问题（让学员内化）\n\n这些技术能帮您在工作坊中把学员的讨论从浅层引向深层。")


def P41():
    s = prs.slides.add_slide(BLANK); bg(DARK)
    rc(s, Inches(0), Inches(0), Inches(13.333), Inches(0.1), GOLD)
    tx(s, Inches(0.8), Inches(2.0), Inches(11.7), Inches(0.5),
       "第四章", sz=24, c=GOLD, b=True)
    tx(s, Inches(0.8), Inches(2.7), Inches(11.7), Inches(2.5),
       "深问与共创", sz=84, c=WHT, b=True)
    tx(s, Inches(0.8), Inches(4.7), Inches(11.7), Inches(0.5),
       "Deep Question & Co-Create · 把讨论从浅层引向深层", sz=20, c=RED)
    rc(s, Inches(0.8), Inches(5.5), Inches(11.7), Inches(0.05), LGT)
    tx(s, Inches(0.8), Inches(5.8), Inches(11.7), Inches(0.4),
       "本章结构：", sz=14, c=GOLD, b=True)
    sections = [
        "4.1  好问题 vs 坏问题   4.2  4 类提问技术   4.3  共创的引导手法",
        "4.4  Activity 4A · 我的提问设计   4.5  静远案例的提问解析",
    ]
    for i, sec in enumerate(sections):
        tx(s, Inches(0.8), Inches(6.2 + i * 0.5), Inches(11.7), Inches(0.4), sec, sz=14, c=LGT)
    rc(s, Inches(0.8), Inches(7.3), Inches(11.7), Inches(0.05), LGT)
    tx(s, Inches(0.8), Inches(7.35), Inches(11.7), Inches(0.4),
       "120 分钟  |  目标：让您的提问能引出深度洞见", sz=12, c=GOLD)
    note(s, "【第四章 深问与共创】\n\n讲师话术 4.0：\n欢迎来到第四章：深问与共创。\n\n讲师有一个共同的能力短板：只会问”你怎么看？”你觉得呢？", "——这种封闭式问题。\n\n学员回答”我觉得挺好的”——然后呢？讨论就卡住了。\n\n本章我们将学 4 类提问技术：\n1. 开放式问题（让学员多说）\n2. 追问问题（让学员深挖）\n3. 比较问题（让学员对比）\n4. 反思问题（让学员内化）\n\n这些技术能帮您在工作坊中把学员的讨论从浅层引向深层。\n\n我们也会看到静远在工作坊中是怎么问问题的——她有 3 个非常典型的提问模式。")


def P42():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 42, "第四章 · 深问与共创", "4.1 · 好问题 vs 坏问题")
    rc(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.4), DARK)
    tx(s, Inches(0.8), Inches(1.4), Inches(11.7), Inches(0.3),
       "好问题 vs 坏问题 · 4 个判断标准", sz=14, c=WHT, b=True)
    rows = [
        ("判断标准", "好问题", "坏问题", "为什么"),
        ("是否开放式", "您当时是怎么想的？", "您做对了吗？", "开放式让学员说，封闭式只能答对/错"),
        ("是否连接真实", "您最近一次遇到这种情况是什么时候？", "假设一个客户提了价格异议，您怎么办？", "真实比假设更深入"),
        ("是否引发思考", "那一刻是什么让您做出这个选择？", "您应该怎么做？", "前者引发反思，后者只要标准答案"),
        ("是否后续可追", "您刚才说的 X 具体是什么？", "您能总结一下吗？", "前者深挖细节，后者把讨论关闭"),
    ]
    rh = Inches(0.95)
    rx = Inches(0.6)
    ry = Inches(2.0)
    cw = [Inches(2.3), Inches(3.5), Inches(3.5), Inches(2.8)]
    rc(s, rx, ry, Inches(12.1), Inches(0.5), DARK)
    x = rx
    for i, h in enumerate(rows[0]):
        tx(s, x + Inches(0.1), ry, cw[i] - Inches(0.2), Inches(0.5), h, sz=12, c=WHT, b=True, an=MSO_ANCHOR.MIDDLE)
        x += cw[i]
    for r, row in enumerate(rows[1:]):
        y = ry + Inches(0.5) + rh * r
        fill = LBG if r % 2 == 0 else WHT
        x = rx
        for c, cell in enumerate(row):
            color = RED if c == 0 else (DARK if c == 1 else (GRY if c == 2 else TXT))
            b = c == 0
            rc(s, x, y, cw[c], rh, fill, line=LGT)
            tx(s, x + Inches(0.1), y, cw[c] - Inches(0.2), rh, cell, sz=11, c=color, b=b, an=MSO_ANCHOR.MIDDLE)
            x += cw[c]
    rc(s, Inches(0.6), Inches(6.5), Inches(12.1), Inches(0.7), DARK)
    tx(s, Inches(0.8), Inches(6.55), Inches(11.7), Inches(0.3), "一句话判断", sz=12, c=RED, b=True)
    tx(s, Inches(0.8), Inches(6.85), Inches(11.7), Inches(0.3),
       "好问题让学员继续说，坏问题让学员停止说。",
       sz=14, c=WHT, b=True)
    ftr(s)
    note(s, "【4.1 好问题 vs 坏问题】\n\n讲师话术 4.1.1：\n判断一个好问题有 4 个标准：\n\n1. 是否开放式：\n   好：您当时是怎么想的？\n   坏：您做对了吗？\n   原因：开放式让学员说，封闭式只能答对/错。\n\n2. 是否连接真实：\n   好：您最近一次遇到这种情况是什么时候？\n   坏：假设一个客户提了价格异议，您怎么办？\n   原因：真实比假设更深入。\n\n3. 是否引发思考：\n   好：那一刻是什么让您做出这个选择？\n   坏：您应该怎么做？\n   原因：前者引发反思，后者只要标准答案。\n\n4. 是否后续可追：\n   好：您刚才说的 X 具体是什么？\n   坏：您能总结一下吗？\n   原因：前者深挖细节，后者把讨论关闭。\n\n一句话判断：好问题让学员继续说，坏问题让学员停止说。\n\n请回顾您最近一次工作坊，您问的问题是好问题还是坏问题？")


def P43():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 43, "第四章 · 深问与共创", "4.1 · 坏问题清单（讲师自查）")
    rc(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.4), DARK)
    tx(s, Inches(0.8), Inches(1.4), Inches(11.7), Inches(0.3),
       "请检查您上次工作坊有没有用过这些问题", sz=14, c=WHT, b=True)
    bad_qs = [
        ("您听懂了吗？", "学员会说”懂了”——他们不一定真的懂"),
        ("您觉得我说得对吗？", "学员不好说不对——讨论无法展开"),
        ("大家有什么问题？", "通常没人回应——因为问题太大"),
        ("您能总结一下吗？", "把刚打开的讨论关闭——还没展开就总结"),
        ("您同意他的观点吗？", "二元问题——只有同意/不同意"),
        ("我讲清楚了吗？", "把讲师放在中心——让学员思考讲师"),
        ("这个重要吗？", "学员会说”重要”——但其实没思考"),
        ("大家有意见吗？", "同上——意见需要先有思考"),
    ]
    rh = Inches(0.55)
    rx = Inches(0.6)
    ry = Inches(2.0)
    cw = [Inches(5.5), Inches(6.6)]
    for r, (q, why) in enumerate(bad_qs):
        y = ry + rh * r
        fill = LBG if r % 2 == 0 else WHT
        rc(s, rx, y, Inches(12.1), rh, fill, line=LGT)
        rc(s, rx, y, Inches(0.15), rh, RED)
        tx(s, rx + Inches(0.3), y, Inches(5.3), rh, "✗ “ + q, sz=12, c=RED, b=True, an=MSO_ANCHOR.MIDDLE)"
        tx(s, rx + Inches(5.6), y, Inches(6.4), rh, why, sz=11, c=TXT, an=MSO_ANCHOR.MIDDLE)
    ftr(s)
    note(s, "【4.1 坏问题清单】\n\n讲师话术 4.1.2：\n这里有一个坏问题清单，请大家对照自查您上次工作坊是否问过这些问题——\n\n1. 您听懂了吗？学员会说”懂了”——他们不一定真的懂。\n2. 您觉得我说得对吗？学员不好说不对——讨论无法展开。\n3. 大家有什么问题？通常没人回应——因为问题太大。\n4. 您能总结一下吗？把刚打开的讨论关闭。\n5. 您同意他的观点吗？二元问题——只有同意/不同意。\n6. 我讲清楚了吗？把讲师放在中心。\n7. 这个重要吗？学员会说”重要”——但其实没思考。\n8. 大家有意见吗？意见需要先有思考。\n\n这些问题的共同特点：让学员停止说，把讨论关闭。\n\n请在 Activity 4A 中，避免使用这些问题。")


def P44():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 44, "第四章 · 深问与共创", "4.1 · 好问题改写练习")
    rc(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.4), DARK)
    tx(s, Inches(0.8), Inches(1.4), Inches(11.7), Inches(0.3),
       "把坏问题改写成好问题", sz=14, c=WHT, b=True)
    pairs = [
        ("您听懂了吗？", "我刚才讲的 X 部分，您能用自己的话给我说一遍吗？"),
        ("您觉得我说得对吗？", "刚才我讲的 X 案例，您有什么不同看法吗？"),
        ("大家有什么问题？", "关于 X 部分，您想先和大家分享哪个具体的真实经历？"),
        ("您能总结一下吗？", "刚才李四说的那个点，张三您怎么看？"),
        ("我讲清楚了吗？", "我讲的这部分，您最有疑问的是哪个点？"),
    ]
    rh = Inches(0.85)
    rx = Inches(0.6)
    ry = Inches(2.0)
    cw = [Inches(5.5), Inches(6.6)]
    for r, (bad, good) in enumerate(pairs):
        y = ry + rh * r
        fill = LBG if r % 2 == 0 else WHT
        rc(s, rx, y, Inches(12.1), rh, fill, line=LGT)
        rc(s, rx, y, Inches(0.15), rh, [RED, GREEN][r % 2])
        tx(s, rx + Inches(0.3), y, Inches(0.4), rh, "→", sz=18, c=DARK, b=True, an=MSO_ANCHOR.MIDDLE, al=PP_ALIGN.CENTER)
        tx(s, rx + Inches(0.8), y, Inches(4.8), rh, "✗ “ + bad, sz=12, c=RED, an=MSO_ANCHOR.MIDDLE)"
        tx(s, rx + Inches(5.7), y, Inches(6.3), rh, "✓ “ + good, sz=12, c=GREEN, b=True, an=MSO_ANCHOR.MIDDLE)"
    ftr(s)
    note(s, "【4.1 好问题改写】\n\n讲师话术 4.1.3：\n我们做一个小练习——把刚才那 5 个坏问题改写成好问题。\n\n改写的关键：\n1. 变封闭式为开放式（不要用对/错/懂/不懂）\n2. 变抽象为具体（不要问”看法”，要问”具体经历”）\n3. 变讲师中心为学员中心（不要问”我讲清楚了吗”）\n4. 变二元为多元（不要问”同意/不同意”）\n\n改写示例：\n- 您听懂了吗？→ 我刚才讲的 X 部分，您能用自己的话给我说一遍吗？\n- 您觉得我说得对吗？→ 刚才我讲的 X 案例，您有什么不同看法吗？\n- 大家有什么问题？→ 关于 X 部分，您想先和大家分享哪个具体的真实经历？\n- 您能总结一下吗？→ 刚才李四说的那个点，张三您怎么看？\n- 我讲清楚了吗？→ 我讲的这部分，您最有疑问的是哪个点？\n\n改写的诀窍：让学员必须用具体经历/具体细节/具体观点来回答，不能用”是的””不是”很重要", "等空话回答。")


def P45():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 45, "第四章 · 深问与共创", "4.2 · 4 类提问技术")
    rc(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.4), DARK)
    tx(s, Inches(0.8), Inches(1.4), Inches(11.7), Inches(0.3), "4 类提问技术", sz=14, c=WHT, b=True)
    types_ = [
        ("1", "开放式问题", "让学员展开说", "您当时是怎么想的？/ 您能描述一下那个场景吗？/ 您看到了什么？", RED),
        ("2", "追问问题", "深挖学员的回答", "您刚才说的 X 具体是什么？/ 能多说说那一刻吗？/ 那时您心里在想什么？", GREEN),
        ("3", "比较问题", "让学员对比差异", "您和李四的做法有什么不同？/ 那次和这次的区别是什么？/ 之前您是怎么做的？", GOLD),
        ("4", "反思问题", "让学员内化洞见", "这次经历让您对 X 有什么新的理解？/ 如果重来一次，您会怎么做？/ 这个原则对您意味着什么？", RED),
    ]
    rh = Inches(1.05)
    rx = Inches(0.6)
    ry = Inches(2.0)
    cw = [Inches(0.9), Inches(2.3), Inches(2.6), Inches(6.3)]
    for r, row in enumerate(types_):
        y = ry + rh * r
        fill = LBG if r % 2 == 0 else WHT
        x = rx
        for c, cell in enumerate(row):
            color = [RED, DARK, TXT, TXT][c]
            b = c in (0, 1)
            sz = 18 if c == 0 else (14 if c == 1 else 11)
            rc(s, x, y, cw[c], rh, fill, line=LGT)
            tx(s, x + Inches(0.1), y, cw[c] - Inches(0.2), rh, cell, sz=sz, c=color, b=b, an=MSO_ANCHOR.MIDDLE)
            x += cw[c]
    ftr(s)
    note(s, "【4.2 4 类提问技术】\n\n讲师话术 4.2.1：\n4 类提问技术：\n\n1. 开放式问题：让学员展开说\n   例：您当时是怎么想的？\n   例：您能描述一下那个场景吗？\n   例：您看到了什么？\n\n2. 追问问题：深挖学员的回答\n   例：您刚才说的 X 具体是什么？\n   例：能多说说那一刻吗？\n   例：那时您心里在想什么？\n\n3. 比较问题：让学员对比差异\n   例：您和李四的做法有什么不同？\n   例：那次和这次的区别是什么？\n   例：之前您是怎么做的？\n\n4. 反思问题：让学员内化洞见\n   例：这次经历让您对 X 有什么新的理解？\n   例：如果重来一次，您会怎么做？\n   例：这个原则对您意味着什么？\n\n这 4 类问题的顺序：开放式 → 追问 → 比较 → 反思。\n\n先用开放式让学员说，然后用追问深挖，然后用比较让学员看到差异，最后用反思让学员内化。\n\n这是一个完整的”问到底”流程。")
'''
with open('gen_pptx_part2.py', 'a', encoding='utf-8') as f:
    f.write(code)
print('P36-P45 OK, lines:', sum(1 for _ in open('gen_pptx_part2.py', encoding='utf-8')))
