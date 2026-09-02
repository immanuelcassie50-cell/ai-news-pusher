# -*- coding: utf-8 -*-
code = r'''


def P29():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 29, "第二章 · 流程规划", "2.4 · Activity 2A · 互评观察")
    tx(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.4),
       "互评环节常见观察 · 供参考", sz=14, c=DARK, b=True)
    obs = [
        ("R1 占比过大", "把工作坊当复习课，30% 时间都在讲知识点", "把 R1 的内容压缩到 15% 内；用激活问题代替重讲"),
        ("R2 缺乏真实场景", "抽象讨论应该如何做，没有具体案例", "强制要求每个 R2 都基于学员自带的真实案例"),
        ("R3 走过场", "讨论 5 分钟就结束，没有挖掘背后的判断逻辑", "用挖掘/比较/提炼/迁移四个动作，确保 R3 至少有 30 分钟"),
        ("R4 承诺模糊", "学员说会努力应用，但没说具体怎么做", "逼问 4 个 W：在什么场景？对谁？做什么？什么时候？"),
        ("讲师话太多", "设计里 70% 时间是讲师讲，30% 是学员讨论", "反推：把讲师讲的内容替换成学员讨论/小组活动"),
    ]
    rh = Inches(1.0)
    headers = ["常见问题", "表现", "改进方向”]"
    cw = [Inches(3.0), Inches(4.5), Inches(4.6)]
    rx = Inches(0.6)
    ry = Inches(2.0)
    rc(s, rx, ry, Inches(12.1), Inches(0.5), DARK)
    x = rx
    for i, h in enumerate(headers):
        tx(s, x + Inches(0.1), ry, cw[i] - Inches(0.2), Inches(0.5), h, sz=13, c=WHT, b=True, an=MSO_ANCHOR.MIDDLE)
        x += cw[i]
    for r, row in enumerate(obs):
        y = ry + Inches(0.5) + rh * r
        fill = LBG if r % 2 == 0 else WHT
        x = rx
        for c, cell in enumerate(row):
            color = RED if c == 0 else TXT
            b = c == 0
            rc(s, x, y, cw[c], rh, fill, line=LGT)
            tx(s, x + Inches(0.1), y, cw[c] - Inches(0.2), rh, cell, sz=11, c=color, b=b, an=MSO_ANCHOR.MIDDLE)
            x += cw[c]
    ftr(s)
    note(s, "【2.4 互评观察】\n\n讲师话术 2.4.3：\n互评环节大家都很投入。这里我想分享几个我巡视时观察到的常见问题，请大家对照自己的设计看看——\n\n1. R1 占比过大：很多学员把工作坊当复习课，30% 时间都在讲知识点。\n   建议：把 R1 压缩到 15% 内，用激活问题代替重讲。\n2. R2 缺乏真实场景：抽象讨论应该如何做，没有具体案例。\n   建议：强制要求每个 R2 都基于学员自带的真实案例。\n3. R3 走过场：讨论 5 分钟就结束，没有挖掘背后的判断逻辑。\n   建议：用挖掘/比较/提炼/迁移四个动作，确保 R3 至少 30 分钟。\n4. R4 承诺模糊：学员说会努力应用，但没说具体怎么做。\n   建议：逼问 4 个 W（场景/对象/动作/时间）。\n5. 讲师话太多：设计里 70% 时间是讲师讲。\n   建议：把讲师讲的内容替换成学员讨论/小组活动。\n\n请对照自己的设计，看看有没有需要调整的地方。")


def P30():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 30, "第二章 · 流程规划", "2.5 · 流程规划小结")
    rc(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.4), DARK)
    tx(s, Inches(0.8), Inches(1.4), Inches(11.7), Inches(0.3), "本章小结", sz=14, c=WHT, b=True)
    points = [
        ("三维度分析", "业务 / 课程 / 学员 是设计工作坊的三个切入点。\n任何设计决策都应该从这三个角度审视。", RED),
        ("4R 循环", "R1 回顾（10-15%）/ R2 现实（20-25%）/ R3 共创（40-50%）/ R4 行动（15-20%）。\nR3 是核心，决定了工作坊质量。", GOLD),
        ("内容属性", "知识性/技能性/态度性 的重点 R 不同。\n您的内容是什么属性，决定了您的时间分配。", GREEN),
        ("实战设计", "基于我的引导场景，应用 4R 设计完整工作坊流程。\n组内互评，用检查表验证。", RED),
    ]
    for i, (t, desc, c) in enumerate(points):
        y = Inches(2.0 + i * 1.25)
        rc(s, Inches(0.6), y, Inches(12.1), Inches(1.1), WHT, line=LGT)
        rc(s, Inches(0.6), y, Inches(0.15), Inches(1.1), c)
        tx(s, Inches(0.9), y + Inches(0.15), Inches(2.5), Inches(0.4), t, sz=15, c=DARK, b=True)
        tx(s, Inches(3.6), y + Inches(0.15), Inches(9.0), Inches(0.9), desc, sz=11, c=TXT)
    rc(s, Inches(0.6), Inches(7.05), Inches(12.1), Inches(0.4), DARK)
    tx(s, Inches(0.8), Inches(7.05), Inches(11.7), Inches(0.4), "下一章预告", sz=11, c=RED, b=True)
    tx(s, Inches(3.0), Inches(7.05), Inches(9.5), Inches(0.4),
       "→ 第三章：点燃参与 · 我们将学习如何在工作坊开场 30 秒抓住学员注意力", sz=11, c=WHT)
    ftr(s)
    note(s, "【2.5 小结】\n\n讲师话术 2.5.1：\n第二章我们学了 4 个关键工具——\n\n1. 三维度分析：业务/课程/学员是切入点\n2. 4R 循环：R3 是核心\n3. 内容属性：决定时间分配\n4. 实战设计：基于场景 + 4R\n\n这些工具构成了工作坊流程设计的完整框架。\n\n下一章我们将进入第三章：点燃参与。\n\n很多讲师的问题是开场太平淡——前 30 秒没有抓住学员。\n\n第三章我们会学 5 种点燃开场方法，让您的开场就能让学员感到这场工作坊和以往不一样。")


def P31():
    s = prs.slides.add_slide(BLANK); bg(DARK)
    rc(s, Inches(0), Inches(0), Inches(13.333), Inches(0.1), GOLD)
    tx(s, Inches(0.8), Inches(2.0), Inches(11.7), Inches(0.5),
       "第三章", sz=24, c=GOLD, b=True)
    tx(s, Inches(0.8), Inches(2.7), Inches(11.7), Inches(2.5),
       "点燃参与", sz=84, c=WHT, b=True)
    tx(s, Inches(0.8), Inches(4.7), Inches(11.7), Inches(0.5),
       "Engage · 让人想参与的 5 种开场方法", sz=20, c=RED)
    rc(s, Inches(0.8), Inches(5.5), Inches(11.7), Inches(0.05), LGT)
    tx(s, Inches(0.8), Inches(5.8), Inches(11.7), Inches(0.4),
       "本章结构：", sz=14, c=GOLD, b=True)
    sections = [
        "3.1  开场的两难：安全 vs 紧张   3.2  5 种点燃开场方法",
        "3.3  静远案例的开场解析   3.4  Activity 3A · 我的开场设计”"
    ]
    for i, sec in enumerate(sections):
        tx(s, Inches(0.8), Inches(6.2 + i * 0.5), Inches(11.7), Inches(0.4), sec, sz=14, c=LGT)
    rc(s, Inches(0.8), Inches(7.3), Inches(11.7), Inches(0.05), LGT)
    tx(s, Inches(0.8), Inches(7.35), Inches(11.7), Inches(0.4),
       "60 分钟  |  目标：让开场 30 秒就抓住学员注意力", sz=12, c=GOLD)
    note(s, "【第三章 开场】\n\n讲师话术 3.0：\n欢迎来到第三章：点燃参与。\n\n很多讲师有一个困扰：学员进场后很疲惫——他们刚从上一场培训出来，或者刚刚开完会，前 30 分钟他们没有进入状态。\n\n如果您的开场平淡，学员会在心里想：又是这种形式。\n如果您的开场够抓人，学员会在心里想：这场和以往不一样。\n\n本章我们将学 5 种点燃开场方法：\n1. 反差开场\n2. 提问开场\n3. 体验开场\n4. 共鸣开场\n5. 戏剧开场\n\n每种都有其适用场景。在 Activity 3A，您会基于您的工作坊选择 1-2 种来设计开场。")


def P32():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 32, "第三章 · 点燃参与", "3.1 · 开场的两难 · 安全 vs 紧张")
    rc(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.4), DARK)
    tx(s, Inches(0.8), Inches(1.4), Inches(11.7), Inches(0.3), "开场的两难", sz=14, c=WHT, b=True)
    # 对比图
    rc(s, Inches(0.6), Inches(2.0), Inches(5.9), Inches(4.7), WHT, line=LGT)
    rc(s, Inches(0.6), Inches(2.0), Inches(5.9), Inches(0.6), GRY)
    tx(s, Inches(0.6), Inches(2.0), Inches(5.9), Inches(0.6), "过于安全", sz=20, c=WHT, b=True, al=PP_ALIGN.CENTER, an=MSO_ANCHOR.MIDDLE)
    safe_pts = [
        "✓ 学员很放松，不会抗拒",
        "✓ 不会出错",
        "✗ 学员没有进入状态",
        "✗ 学员会走神",
        "✗ 工作坊结束也没印象",
        "",
        "典型表现：",
        "”大家好，今天我们一起学习……”",
    ]
    for i, p in enumerate(safe_pts):
        c = TXT
        b = p.startswith("典型")
        sz = 11
        if p.startswith("✓"): c = GREEN
        elif p.startswith("✗"): c = RED
        if p.startswith("典型"): c = DARK
        tx(s, Inches(0.8), Inches(2.8 + i * 0.4), Inches(5.5), Inches(0.4), p, sz=sz, c=c, b=b)
    rc(s, Inches(6.8), Inches(2.0), Inches(5.9), Inches(4.7), WHT, line=LGT)
    rc(s, Inches(6.8), Inches(2.0), Inches(5.9), Inches(0.6), RED)
    tx(s, Inches(6.8), Inches(2.0), Inches(5.9), Inches(0.6), "过于紧张", sz=20, c=WHT, b=True, al=PP_ALIGN.CENTER, an=MSO_ANCHOR.MIDDLE)
    tense_pts = [
        "✓ 学员立刻进入状态",
        "✓ 学员有印象",
        "✗ 学员有抗拒",
        "✗ 学员有压力",
        "✗ 学员情绪紧绷",
        "",
        "典型表现：",
        "”考试！不及格的去跑 10 圈！”",  # 温和的紧张
    ]
    for i, p in enumerate(tense_pts):
        c = TXT
        b = p.startswith("典型")
        sz = 11
        if p.startswith("✓"): c = GREEN
        elif p.startswith("✗"): c = RED
        if p.startswith("典型"): c = DARK
        tx(s, Inches(7.0), Inches(2.8 + i * 0.4), Inches(5.5), Inches(0.4), p, sz=sz, c=c, b=b)
    rc(s, Inches(0.6), Inches(6.85), Inches(12.1), Inches(0.55), DARK)
    tx(s, Inches(0.8), Inches(6.85), Inches(11.7), Inches(0.55),
       "★ 目标：有安全感 + 30 秒内抓住注意力（点燃，但不恐慌）",
       sz=14, c=WHT, b=True, an=MSO_ANCHOR.MIDDLE)
    ftr(s)
    note(s, "【3.1 开场的两难】\n\n讲师话术 3.1.1：\n开场面临一个两难。\n\n过于安全：大家好，今天我们一起学习……学员不会抗拒，但也没有进入状态。\n过于紧张：考试！不及格的去跑 10 圈！学员立刻进入状态，但有抗拒。\n\n我们要的是中间状态——有安全感，但 30 秒内抓住注意力。\n\n这个中间状态，我们叫它点燃。\n\n点燃的关键：让学员感到这场工作坊和以往不一样，而不是更大的压力。\n\n下面我们看 5 种点燃开场方法。")


def P33():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 33, "第三章 · 点燃参与", "3.2 · 5 种点燃开场方法")
    methods = [
        ("1", "反差开场", "先做完全相反的事，再回到主题", "先唱首歌 / 先做 5 分钟游戏 / 让大家先画一幅画", RED),
        ("2", "提问开场", "提出一个学员必须思考的问题", "您最近一次做出 X 决策是什么时候？当时您怎么想的？", GREEN),
        ("3", "体验开场", "让学员身体先动起来", "站起来做一个动作 / 两人一组做个小练习 / 做一个 30 秒的体验", GOLD),
        ("4", "共鸣开场", "讲一个学员深有感触的故事", "上周我遇到一个学员…… / 我以前犯过的一个错误……", RED),
        ("5", "戏剧开场", "用一个短剧/情境让学员进入", "两人演一段情景 / 播放一段录音 / 展示一张震撼的图片", GREEN),
    ]
    headers = ["序号", "方法", "核心逻辑", "示例”]"
    rh = Inches(0.85)
    rx = Inches(0.6)
    ry = Inches(1.4)
    cw = [Inches(0.9), Inches(2.5), Inches(4.5), Inches(4.2)]
    rc(s, rx, ry, Inches(12.1), Inches(0.5), DARK)
    x = rx
    for i, h in enumerate(headers):
        tx(s, x + Inches(0.1), ry, cw[i] - Inches(0.2), Inches(0.5), h, sz=13, c=WHT, b=True, an=MSO_ANCHOR.MIDDLE)
        x += cw[i]
    for r, row in enumerate(methods):
        y = ry + Inches(0.5) + rh * r
        fill = LBG if r % 2 == 0 else WHT
        x = rx
        for c, cell in enumerate(row):
            b = c in (0, 1)
            color = RED if c == 0 else (DARK if c == 1 else TXT)
            sz = 16 if c == 0 else (14 if c == 1 else 11)
            rc(s, x, y, cw[c], rh, fill, line=LGT)
            tx(s, x + Inches(0.1), y, cw[c] - Inches(0.2), rh, cell, sz=sz, c=color, b=b, an=MSO_ANCHOR.MIDDLE)
            x += cw[c]
    rc(s, Inches(0.6), Inches(6.4), Inches(12.1), Inches(0.8), DARK)
    tx(s, Inches(0.8), Inches(6.45), Inches(11.7), Inches(0.3), "选择开场方法的两个原则", sz=12, c=RED, b=True)
    tx(s, Inches(0.8), Inches(6.75), Inches(11.7), Inches(0.3),
       "① 不要用您不擅长的方法（表演能力不强的人不要用戏剧开场）  ② 必须和主题强相关（不要为了活跃而活跃）",
       sz=11, c=WHT)
    ftr(s)
    note(s, "【3.2 5 种点燃开场方法】\n\n讲师话术 3.2.1：\n5 种开场方法：\n\n1. 反差开场：先做完全相反的事，再回到主题。\n   示例：先让大家唱首歌、做个游戏。\n2. 提问开场：提出一个学员必须思考的问题。\n   示例：您最近一次做出 X 决策是什么时候？\n3. 体验开场：让学员身体先动起来。\n   示例：两人一组做个小练习。\n4. 共鸣开场：讲一个学员深有感触的故事。\n   示例：上周我遇到一个学员……\n5. 戏剧开场：用短剧/情境让学员进入。\n   示例：播放一段录音、展示一张震撼图片。\n\n选择开场的两个原则：\n① 不要用您不擅长的方法（表演能力不强的人不要用戏剧开场）\n② 必须和主题强相关（不要为了活跃而活跃）\n\n下面我们看静远的开场是怎么做的。")


def P34():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 34, "第三章 · 点燃参与", "3.3 · 静远案例 · 开场解析")
    rc(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.4), RED)
    tx(s, Inches(0.8), Inches(1.4), Inches(11.7), Inches(0.3),
       "静远的开场设计 · 反差开场 + 共鸣开场 组合", sz=14, c=WHT, b=True)
    # 静远开场内容
    rc(s, Inches(0.6), Inches(2.0), Inches(12.1), Inches(2.0), LBG)
    tx(s, Inches(0.8), Inches(2.1), Inches(11.7), Inches(0.4), "静远的开场原文", sz=14, c=RED, b=True)
    jy = [
        "”今天我们的工作坊，不讲新东西。”",
        "”就讲一件事——上次课上完之后，您在真实工作中到底用上了多少。”",
        "”您不用站起来，但我会随机点几个名字，您说说您用了哪个。”",
    ]
    for i, q in enumerate(jy):
        tx(s, Inches(1.0), Inches(2.5 + i * 0.45), Inches(11.5), Inches(0.4),
           "「” + q + “」", sz=12, c=DARK)
    # 分析
    rc(s, Inches(0.6), Inches(4.2), Inches(5.9), Inches(2.6), WHT, line=LGT)
    rc(s, Inches(0.6), Inches(4.2), Inches(5.9), Inches(0.5), RED)
    tx(s, Inches(0.8), Inches(4.2), Inches(5.7), Inches(0.5), "反差元素", sz=14, c=WHT, b=True, an=MSO_ANCHOR.MIDDLE)
    rd = [
        ("反差点 1", "讲师通常开场说今天讲什么，静远说不讲新东西"),
        ("反差点 2", "讲师通常问您学到了什么，静远问您用了什么"),
        ("反差点 3", "学员通常预期讲师会讲 30 分钟再互动，静远说立刻互动"),
    ]
    for i, (t, desc) in enumerate(rd):
        y = Inches(4.85 + i * 0.6)
        tx(s, Inches(0.8), y, Inches(5.5), Inches(0.3), t, sz=11, c=RED, b=True)
        tx(s, Inches(0.8), y + Inches(0.3), Inches(5.5), Inches(0.3), desc, sz=10, c=TXT)
    rc(s, Inches(6.8), Inches(4.2), Inches(5.9), Inches(2.6), WHT, line=LGT)
    rc(s, Inches(6.8), Inches(4.2), Inches(5.9), Inches(0.5), GREEN)
    tx(s, Inches(6.8), Inches(4.2), Inches(5.7), Inches(0.5), "共鸣元素", sz=14, c=WHT, b=True, an=PP_ALIGN.CENTER, an=MSO_ANCHOR.MIDDLE)
    cm = [
        ("共鸣点 1", "您在真实工作中到底用上了多少", "——所有学员都关心"),
        ("共鸣点 2", "您不用站起来", "——降低心理压力，让学员感到安全"),
        ("共鸣点 3", "随机点几个名字", "——立刻进入参与状态，不只是听"),
    ]
    for i, (t, desc) in enumerate(cm):
        y = Inches(4.85 + i * 0.6)
        tx(s, Inches(7.0), y, Inches(5.5), Inches(0.3), t, sz=11, c=GREEN, b=True)
        tx(s, Inches(7.0), y + Inches(0.3), Inches(5.5), Inches(0.3), desc, sz=10, c=TXT)
    ftr(s)
    note(s, "【3.3 静远开场解析】\n\n讲师话术 3.3.1：\n我们看静远的开场是怎么做的。\n\n静远的开场：\n今天我们的工作坊，不讲新东西。\n就讲一件事——上次课上完之后，您在真实工作中到底用上了多少。\n您不用站起来，但我会随机点几个名字，您说说您用了哪个。\n\n分析：\n- 反差元素 1：讲师通常开场说今天讲什么，静远说不讲新东西\n- 反差元素 2：讲师通常问您学到了什么，静远问您用了什么\n- 反差元素 3：学员通常预期讲师会讲 30 分钟再互动，静远说立刻互动\n\n- 共鸣元素 1：您在真实工作中到底用上了多少——所有学员都关心\n- 共鸣元素 2：您不用站起来——降低心理压力，让学员感到安全\n- 共鸣元素 3：随机点几个名字——立刻进入参与状态\n\n关键洞察：开场既要点燃（让学员立刻进入），又不能过紧（不能让学员恐慌）。\n静远用反差（打破预期）+ 共鸣（学员关心）实现了这一点。\n\n下面您要基于您的工作坊设计开场。")


def P35():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 35, "第三章 · 点燃参与", "3.4 · Activity 3A · 我的开场设计")
    rc(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.5), DARK)
    tx(s, Inches(0.8), Inches(1.4), Inches(11.7), Inches(0.3),
       "实战设计  |  20 分钟个人设计 + 20 分钟小组共创",
       sz=14, c=WHT, b=True)
    rc(s, Inches(0.6), Inches(2.0), Inches(12.1), Inches(1.2), LBG)
    tx(s, Inches(0.8), Inches(2.1), Inches(11.7), Inches(0.4), "设计任务", sz=14, c=RED, b=True)
    tx(s, Inches(0.8), Inches(2.5), Inches(11.7), Inches(0.4),
       "基于您课前填写的我的引导场景，从 5 种方法中选择 1-2 种，设计您工作坊的开场（前 5 分钟）。",
       sz=12, c=DARK)
    steps = [
        ("1", "选择开场方法", "10 min", "从 5 种方法中选择 1-2 种"),
        ("2", "写出开场具体内容", "10 min", "前 5 分钟您会说什么 / 做什么"),
        ("3", "小组共创", "20 min", "3-4 人小组分享 + 互评 + 共创"),
    ]
    for i, (n, t, time, desc) in enumerate(steps):
        x = Inches(0.6 + i * 4.2)
        rc(s, x, Inches(3.4), Inches(3.9), Inches(2.5), WHT, line=LGT)
        colors = [RED, GREEN, GOLD]
        rc(s, x, Inches(3.4), Inches(3.9), Inches(0.5), colors[i])
        tx(s, x + Inches(0.2), Inches(3.45), Inches(0.6), Inches(0.5), n, sz=22, c=WHT, b=True)
        tx(s, x + Inches(0.9), Inches(3.45), Inches(2.0), Inches(0.4), t, sz=14, c=WHT, b=True)
        tx(s, x + Inches(2.7), Inches(3.45), Inches(1.1), Inches(0.4), time, sz=11, c=WHT, al=PP_ALIGN.RIGHT)
        tx(s, x + Inches(0.2), Inches(4.0), Inches(3.5), Inches(1.8), desc, sz=11, c=TXT)
    rc(s, Inches(0.6), Inches(6.1), Inches(12.1), Inches(1.2), DARK)
    tx(s, Inches(0.8), Inches(6.2), Inches(11.7), Inches(0.4), "互评关键问题", sz=12, c=RED, b=True)
    tx(s, Inches(0.8), Inches(6.55), Inches(11.7), Inches(0.7),
       "① 这个开场能让学员感到”这场不一样”吗？  ② 学员会有安全感吗（不会太紧）？  ③ 30 秒内能抓住注意力吗？  ④ 和主题强相关吗（不只是活跃气氛）？",
       sz=11, c=WHT)
    ftr(s)
    note(s, "【3.4 Activity 3A】\n\n实战设计。\n\n讲师话术 3.4.1：\n现在请您用 20 分钟，基于您课前填写的我的引导场景，从 5 种开场方法中选 1-2 种，设计您工作坊的前 5 分钟。\n\n我会 20 分钟后叫停，然后进入小组共创。\n\n[10 分钟 · 选择 + 10 分钟 · 写具体内容]\n\n讲师话术 3.4.2：\n现在请您和小组（3-4 人）分享您的开场设计。\n\n每个分享 5 分钟 + 反馈 5 分钟。\n\n请用这四个问题来检查别人的设计：\n1. 这个开场能让学员感到”这场不一样”吗？\n2. 学员会有安全感吗（不会太紧）？\n3. 30 秒内能抓住注意力吗？\n4. 和主题强相关吗（不只是活跃气氛）？\n\n[20 分钟 · 巡视 + 必要时叫停]\n\n巡视重点：\n- 学员最容易出现的问题：选了自己不擅长的方法\n- 学员最容易出现的问题：开场和主题弱相关\n- 学员做得好的地方：用反差/共鸣两种方法组合")


'''
with open('gen_pptx_part2.py', 'a', encoding='utf-8') as f:
    f.write(code)
print('P29-P35 OK, lines:', sum(1 for _ in open('gen_pptx_part2.py', encoding='utf-8')))
