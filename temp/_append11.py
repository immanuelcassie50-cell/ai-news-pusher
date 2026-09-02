# -*- coding: utf-8 -*-
code = r'''


def P91():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 91, "实战案例库", "案例对照表")
    rc(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.4), DARK)
    tx(s, Inches(0.8), Inches(1.4), Inches(11.7), Inches(0.3), "5 个案例对照表", sz=14, c=WHT, b=True)
    headers = ["案例", "对象", "焦点", "R3 核心", "工具", "跟进”]"
    cw = [Inches(1.0), Inches(1.5), Inches(2.0), Inches(2.5), Inches(2.5), Inches(2.6)]
    rx = Inches(0.6)
    ry = Inches(2.0)
    rh = Inches(0.7)
    rc(s, rx, ry, Inches(12.1), rh, DARK)
    x = rx
    for i, h in enumerate(headers):
        tx(s, x + Inches(0.1), ry, cw[i] - Inches(0.2), rh, h, sz=12, c=WHT, b=True, an=MSO_ANCHOR.MIDDLE)
        x += cw[i]
    cases = [
        ("1", "销售", "价格异议", "4 类问题", "无", "30 天打卡"),
        ("2", "新晋管理者", "反馈辅导", "实战演练", "反馈模板", "30 天打卡 + 互助"),
        ("3", "中层经理", "跨部门协作", "工具演练", "利益相关方图", "30 天打卡 + 报告"),
        ("4", "客服", "投诉处理", "角色扮演", "3 步法", "30 天打卡 + 互助"),
        ("5", "高潜人才", "自我认知", "IDP 起草", "IDP 模板", "30 天 IDP 完稿"),
    ]
    for r, row in enumerate(cases):
        y = ry + rh * (r + 1)
        fill = LBG if r % 2 == 0 else WHT
        x = rx
        for c, cell in enumerate(row):
            color = RED if c == 0 else TXT
            b = c == 0
            sz = 10
            rc(s, x, y, cw[c], rh, fill, line=LGT)
            tx(s, x + Inches(0.1), y, cw[c] - Inches(0.2), rh, cell, sz=sz, c=color, b=b, an=MSO_ANCHOR.MIDDLE)
            x += cw[c]
    # 关键洞察
    rc(s, Inches(0.6), Inches(5.7), Inches(12.1), Inches(1.4), WHT, line=LGT)
    rc(s, Inches(0.6), Inches(5.7), Inches(12.1), Inches(0.5), DARK)
    tx(s, Inches(0.8), Inches(5.7), Inches(11.7), Inches(0.5), "5 个案例的关键洞察", sz=14, c=WHT, b=True, an=MSO_ANCHOR.MIDDLE)
    insights = [
        ("1", "R3 都至少 100 分钟（占 42% 以上）", RED),
        ("2", "R3 都需要具体的 R3 活动（问题链/演练/工具/角色/起草）", GREEN),
        ("3", "跟进方式略有不同（基本配置是 30 天打卡 + 实施报告）", GOLD),
    ]
    for i, ins in enumerate(insights):
        y = Inches(6.3 + i * 0.27)
        tx(s, Inches(1.0), y, Inches(1.0), Inches(0.3), ins, sz=14, c=RED, b=True)
        tx(s, Inches(2.0), y, Inches(10.5), Inches(0.3), "→ “ + insights[i][1] if False else insights[i][1], sz=11, c=TXT)"
    ftr(s)
    note(s, "【5 个案例对照表】\n\n讲师话术 C5.5：\n我们对照 5 个案例——\n\n[逐行讲解]\n\n案例 1 · 销售 · 价格异议 · R3 4 类问题 · 无工具 · 30 天打卡\n案例 2 · 新晋管理者 · 反馈辅导 · R3 实战演练 · 反馈模板 · 30 天打卡 + 互助\n案例 3 · 中层经理 · 跨部门协作 · R3 工具演练 · 利益相关方图 · 30 天打卡 + 报告\n案例 4 · 客服 · 投诉处理 · R3 角色扮演 · 3 步法 · 30 天打卡 + 互助\n案例 5 · 高潜人才 · 自我认知 · R3 IDP 起草 · IDP 模板 · 30 天 IDP 完稿\n\n5 个案例的关键洞察：\n1. R3 都至少 100 分钟（占 42% 以上）\n2. R3 都需要具体的 R3 活动（问题链/演练/工具/角色/起草）\n3. 跟进方式略有不同（基本配置是 30 天打卡 + 实施报告）\n\n讲师话术 C5.6：\n这 5 个案例覆盖了最常见的工作坊场景。\n\n您的场景可能不在其中——但只要应用相同的 4R 框架，您也能设计出高质量的工作坊。\n\n关键：\n- 4R 的顺序和占比是固定的（R3 至少 40%）\n- R3 的活动形式根据内容属性调整（问题/演练/工具/角色/起草）\n- 跟进方式根据学员情况调整（30 天打卡是基本配置）")


def P92():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 92, "讲师成长路径", "从新手到大师 · 4 个阶段")
    rc(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.4), DARK)
    tx(s, Inches(0.8), Inches(1.4), Inches(11.7), Inches(0.3), "讲师成长路径 · 4 个阶段", sz=14, c=WHT, b=True)
    stages = [
        ("新手讲师 (0-2 年)", "能讲清知识点", "依赖 PPT 逐字稿", "学员兴奋度 60%", RED),
        ("熟练讲师 (2-5 年)", "能引导学员讨论", "开始有 4R 意识", "学员兴奋度 70%", GREEN),
        ("优秀讲师 (5-10 年)", "能深问学员", "熟练使用 4 类问题", "学员兴奋度 80%", GOLD),
        ("大师讲师 (10 年+)", "能让学员自己说", "4R 已内化", "学员兴奋度 90%+", RED),
    ]
    rh = Inches(0.95)
    rx = Inches(0.6)
    ry = Inches(2.0)
    cw = [Inches(2.5), Inches(2.8), Inches(3.0), Inches(3.8)]
    for r, (t, ab, char, exc, c) in enumerate(stages):
        y = ry + rh * r
        fill = LBG if r % 2 == 0 else WHT
        x = rx
        rc(s, x, y, Inches(12.1), rh, fill, line=LGT)
        rc(s, x, y, Inches(0.15), rh, c)
        tx(s, x + Inches(0.3), y, Inches(2.4), rh, t, sz=13, c=DARK, b=True, an=MSO_ANCHOR.MIDDLE)
        tx(s, x + Inches(2.8), y, Inches(2.7), rh, ab, sz=11, c=c, b=True, an=MSO_ANCHOR.MIDDLE)
        tx(s, x + Inches(5.6), y, Inches(2.9), rh, char, sz=11, c=TXT, an=MSO_ANCHOR.MIDDLE)
        tx(s, x + Inches(8.6), y, Inches(3.4), rh, exc, sz=11, c=GRY, b=True, an=MSO_ANCHOR.MIDDLE)
    ftr(s)
    note(s, "【讲师成长路径】\n\n讲师话术 G1：\n讲师的成长路径分为 4 个阶段——\n\n新手讲师 (0-2 年)：能讲清知识点\n- 特征：依赖 PPT 逐字稿\n- 学员兴奋度：60%\n\n熟练讲师 (2-5 年)：能引导学员讨论\n- 特征：开始有 4R 意识\n- 学员兴奋度：70%\n\n优秀讲师 (5-10 年)：能深问学员\n- 特征：熟练使用 4 类问题\n- 学员兴奋度：80%\n\n大师讲师 (10 年+)：能让学员自己说\n- 特征：4R 已内化\n- 学员兴奋度：90%+\n\n讲师话术 G2：\n不同阶段的讲师需要不同的成长重点：\n- 新手：先练 4 类问题（写下来，反复练）\n- 熟练：先练 4R 比例（每周 1 个工作坊的 R3 时间）\n- 优秀：先练共创引导（6 种手法各练 5 次）\n- 大师：进入”无招”境界（不再依赖框架）\n\n您现在处于哪个阶段？")


def P93():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 93, "讲师成长路径", "如何从熟练到优秀")
    rc(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.4), DARK)
    tx(s, Inches(0.8), Inches(1.4), Inches(11.7), Inches(0.3),
       "从熟练到优秀 · 3 个成长动作", sz=14, c=WHT, b=True)
    acts = [
        ("动作 1", "写下来", "把您的 4 类问题写到卡片上", "每类 5 个问题，每次工作坊前抽 1 张练", RED),
        ("动作 2", "录下来", "录下您的工作坊，回看 1 次", "看自己问了多少个问题、问了几个好问题、问了几次坏问题", GREEN),
        ("动作 3", "改一改", "把录下来的坏问题改成好问题", "改 5 个坏问题 → 改完后下次工作坊试试", GOLD),
    ]
    rh = Inches(1.4)
    rx = Inches(0.6)
    ry = Inches(2.0)
    cw = [Inches(2.0), Inches(3.0), Inches(3.5), Inches(3.6)]
    for r, (n, t, desc, how, c) in enumerate(acts):
        y = ry + rh * r
        fill = LBG if r % 2 == 0 else WHT
        x = rx
        rc(s, x, y, Inches(12.1), rh, fill, line=LGT)
        rc(s, x, y, Inches(0.15), rh, c)
        tx(s, x + Inches(0.3), y + Inches(0.1), Inches(1.9), rh, n, sz=20, c=c, b=True, an=MSO_ANCHOR.MIDDLE)
        tx(s, x + Inches(2.3), y + Inches(0.15), Inches(2.9), Inches(0.4), t, sz=18, c=DARK, b=True)
        tx(s, x + Inches(2.3), y + Inches(0.6), Inches(2.9), Inches(0.7), desc, sz=11, c=TXT)
        tx(s, x + Inches(5.4), y + Inches(0.15), Inches(6.6), Inches(1.2), "→ “ + how, sz=11, c=GRY, an=MSO_ANCHOR.MIDDLE)"
    ftr(s)
    note(s, "【从熟练到优秀】\n\n讲师话术 G3：\n从熟练到优秀，关键是 3 个动作——\n\n动作 1 · 写下来\n把您的 4 类问题写到卡片上\n- 每类 5 个问题（开放式 5 个 + 追问 5 个 + 比较 5 个 + 反思 5 个）\n- 每次工作坊前抽 1 张练\n\n动作 2 · 录下来\n录下您的工作坊，回看 1 次\n- 看自己问了多少个问题（应该 30-50 个）\n- 看了几个好问题（应该 60% 以上）\n- 问了几次坏问题（应该 < 20%）\n\n动作 3 · 改一改\n把录下来的坏问题改成好问题\n- 选 5 个最常用的坏问题\n- 改写成好问题\n- 下次工作坊试试\n\n讲师话术 G4：\n这 3 个动作的周期是 3 个月。\n\n坚持 3 个月，您会从”依赖 PPT”到”胸有成竹”——这是最大的变化。\n\n讲师在 Activity 期间，请和小组同伴约定 30 天后互相检查这些动作的执行情况。")


def P94():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 94, "讲师成长路径", "如何从优秀到大师")
    rc(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.4), DARK)
    tx(s, Inches(0.8), Inches(1.4), Inches(11.7), Inches(0.3),
       "从优秀到大师 · 3 个关键能力", sz=14, c=WHT, b=True)
    caps = [
        ("能力 1", "现场感", "能即时感知学员状态", "学员是不是疲劳了、是不是走神了、是不是有抗拒", RED),
        ("能力 2", "临场应变", "能根据现场调整设计", "原本设计的问题没用了，能立刻换一个新问题", GREEN),
        ("能力 3", "无为而治", "能”什么都不做”地引导", "不强求学员说、不替学员回答、不打断学员的反思", GOLD),
    ]
    rh = Inches(1.4)
    rx = Inches(0.6)
    ry = Inches(2.0)
    cw = [Inches(2.0), Inches(2.5), Inches(3.5), Inches(4.1)]
    for r, (n, t, desc, how, c) in enumerate(caps):
        y = ry + rh * r
        fill = LBG if r % 2 == 0 else WHT
        x = rx
        rc(s, x, y, Inches(12.1), rh, fill, line=LGT)
        rc(s, x, y, Inches(0.15), rh, c)
        tx(s, x + Inches(0.3), y + Inches(0.1), Inches(1.9), rh, n, sz=20, c=c, b=True, an=MSO_ANCHOR.MIDDLE)
        tx(s, x + Inches(2.3), y + Inches(0.15), Inches(2.4), rh, t, sz=18, c=DARK, b=True)
        tx(s, x + Inches(2.3), y + Inches(0.6), Inches(2.4), Inches(0.7), desc, sz=11, c=TXT)
        tx(s, x + Inches(4.8), y + Inches(0.15), Inches(7.2), Inches(1.2), "→ “ + how, sz=11, c=GRY, an=MSO_ANCHOR.MIDDLE)"
    ftr(s)
    note(s, "【从优秀到大师】\n\n讲师话术 G5：\n从优秀到大师，关键是 3 个能力——\n\n能力 1 · 现场感\n能即时感知学员状态\n- 学员是不是疲劳了\n- 学员是不是走神了\n- 学员是不是有抗拒\n\n能力 2 · 临场应变\n能根据现场调整设计\n- 原本设计的问题没用了，能立刻换一个新问题\n- 学员分享的案例没展开，能立刻追问\n- 时间不够了，能立刻压缩 R1 把时间给 R3\n\n能力 3 · 无为而治\n能”什么都不做”地引导\n- 不强求学员说\n- 不替学员回答\n- 不打断学员的反思\n\n讲师话术 G6：\n这 3 个能力不是教出来的，是练出来的。\n\n练法：\n- 现场感：每次工作坊时观察 1-2 位学员的脸和身体语言\n- 临场应变：每次工作坊前准备 2-3 个备用问题\n- 无为而治：每次学员回答后等 5-10 秒再说\n\n坚持 1-2 年，您会从”优秀”到”大师”。")


def P95():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 95, "附录", "附录 A · 三维分析模板")
    rc(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.4), DARK)
    tx(s, Inches(0.8), Inches(1.4), Inches(11.7), Inches(0.3), "三维分析模板（用于设计任何工作坊）", sz=14, c=WHT, b=True)
    headers = ["维度", "核心问题", "关键产出", "示例”]"
    cw = [Inches(1.5), Inches(3.0), Inches(3.5), Inches(4.1)]
    rx = Inches(0.6)
    ry = Inches(2.0)
    rh = Inches(1.0)
    rc(s, rx, ry, Inches(12.1), rh, DARK)
    x = rx
    for i, h in enumerate(headers):
        tx(s, x + Inches(0.1), ry, cw[i] - Inches(0.2), rh, h, sz=13, c=WHT, b=True, an=MSO_ANCHOR.MIDDLE)
        x += cw[i]
    rows = [
        ("业务", "工作坊结束后，什么改变了才算成功？", "1-3 个可量化的业务指标", "30 天后销售异议处理成功率 +20%"),
        ("课程", "上次课的内容，哪些需要工作坊深做？", "1-3 个核心知识点", "异议处理 + 价值呈现"),
        ("学员", "学员在工作坊前的状态是什么？", "知识/态度/行为 三个层次", "知识：熟悉  态度：愿意尝试  行为：没形成习惯"),
    ]
    for r, row in enumerate(rows):
        y = ry + rh * (r + 1)
        fill = LBG if r % 2 == 0 else WHT
        x = rx
        c = [RED, GREEN, GOLD][r]
        for c, cell in enumerate(row):
            color = RED if c == 0 else TXT
            b = c == 0
            sz = 11
            rc(s, x, y, cw[c], rh, fill, line=LGT)
            tx(s, x + Inches(0.1), y, cw[c] - Inches(0.2), rh, cell, sz=sz, c=color, b=b, an=MSO_ANCHOR.MIDDLE)
            x += cw[c]
    ftr(s)
    note(s, "【附录 A · 三维分析模板】\n\n讲师话术 A1：\n我们看三维分析的完整模板——\n\n[逐行讲解]\n\n维度 1 · 业务：\n- 核心问题：工作坊结束后，什么改变了才算成功？\n- 关键产出：1-3 个可量化的业务指标\n- 示例：30 天后销售异议处理成功率 +20%\n\n维度 2 · 课程：\n- 核心问题：上次课的内容，哪些需要工作坊深做？\n- 关键产出：1-3 个核心知识点\n- 示例：异议处理 + 价值呈现\n\n维度 3 · 学员：\n- 核心问题：学员在工作坊前的状态是什么？\n- 关键产出：知识/态度/行为 三个层次\n- 示例：知识（熟悉）/ 态度（愿意尝试）/ 行为（没形成习惯）\n\n讲师话术 A2：\n三维分析是工作坊设计的第一步。\n\n在 Activity 2A 的设计任务中，第一步就是做三维分析。\n\n三维分析的关键：\n- 业务维度必须可量化（不是”销售能力提升”——而是”30 天后异议处理成功率 +20%”）\n- 课程维度必须聚焦（不是”上次课的所有内容”——而是”上次课最薄弱的 2-3 个模块”）\n- 学员维度必须分层（不是”学员水平”——而是”知识/态度/行为 三个层次的具体状态”）")


def P96():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 96, "附录", "附录 B · 4R 时间预算表")
    rc(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.4), DARK)
    tx(s, Inches(0.8), Inches(1.4), Inches(11.7), Inches(0.3),
       "4R 时间预算表（不同时长的工坊）", sz=14, c=WHT, b=True)
    headers = ["工坊时长", "R1", "R2", "R3", "R4", "开场+收尾", "总时间”]"
    cw = [Inches(2.0), Inches(1.5), Inches(1.5), Inches(2.0), Inches(1.5), Inches(2.0), Inches(1.6)]
    rx = Inches(0.6)
    ry = Inches(2.0)
    rh = Inches(0.6)
    rc(s, rx, ry, Inches(12.1), rh, DARK)
    x = rx
    for i, h in enumerate(headers):
        tx(s, x + Inches(0.1), ry, cw[i] - Inches(0.2), rh, h, sz=12, c=WHT, b=True, an=MSO_ANCHOR.MIDDLE)
        x += cw[i]
    rows = [
        ("2 小时", "10", "10", "70", "20", "10", "120"),
        ("3 小时", "15", "20", "100", "30", "15", "180"),
        ("4 小时", "15", "25", "120", "30", "30", "240"),
        ("6 小时 (一天)", "30", "60", "180", "60", "30", "360"),
        ("2 天 (12 小时)", "60", "120", "360", "120", "60", "720"),
    ]
    for r, row in enumerate(rows):
        y = ry + rh * (r + 1)
        fill = LBG if r % 2 == 0 else WHT
        x = rx
        c_color = [RED, GREEN, GOLD][r % 3]
        for c, cell in enumerate(row):
            color = c_color if c == 0 else (RED if c == 3 else TXT)
            b = c in (0, 3)
            sz = 12
            rc(s, x, y, cw[c], rh, fill, line=LGT)
            tx(s, x + Inches(0.1), y, cw[c] - Inches(0.2), rh, cell, sz=sz, c=color, b=b, al=PP_ALIGN.CENTER if c > 0 else None, an=MSO_ANCHOR.MIDDLE)
            x += cw[c]
    rc(s, Inches(0.6), Inches(5.7), Inches(12.1), Inches(1.5), WHT, line=LGT)
    rc(s, Inches(0.6), Inches(5.7), Inches(12.1), Inches(0.5), DARK)
    tx(s, Inches(0.8), Inches(5.7), Inches(11.7), Inches(0.5), "关键洞察", sz=14, c=WHT, b=True, an=MSO_ANCHOR.MIDDLE)
    insights = [
        "① R3 的占比始终 ≥ 50%（2 小时工坊 58%，2 天工坊 50%）",
        "② R4 至少 15%（强承诺逼出来）",
        "③ R1 不超过 15%（学员已经学过了）",
    ]
    for i, ins in enumerate(insights):
        y = Inches(6.3 + i * 0.27)
        tx(s, Inches(1.0), y, Inches(11.5), Inches(0.3), ins, sz=12, c=TXT)
    ftr(s)
    note(s, "【附录 B · 4R 时间预算表】\n\n讲师话术 A3：\n我们看 4R 时间预算表——不同时长的工作坊，4R 的时间分配不同：\n\n[逐行讲解]\n\n2 小时：R1 10 / R2 10 / R3 70 / R4 20 / 开场+收尾 10 = 120\n3 小时：R1 15 / R2 20 / R3 100 / R4 30 / 开场+收尾 15 = 180\n4 小时：R1 15 / R2 25 / R3 120 / R4 30 / 开场+收尾 30 = 240\n6 小时：R1 30 / R2 60 / R3 180 / R4 60 / 开场+收尾 30 = 360\n2 天 (12 小时)：R1 60 / R2 120 / R3 360 / R4 120 / 开场+收尾 60 = 720\n\n关键洞察：\n1. R3 的占比始终 ≥ 50%（2 小时工坊 58%，2 天工坊 50%）\n2. R4 至少 15%（强承诺逼出来）\n3. R1 不超过 15%（学员已经学过了）\n\n讲师话术 A4：\n根据您的工作坊时长，参考这个表格——R3 永远是最长的环节。\n\n如果您的工坊不在表格中（例如 5 小时、8 小时），按比例扩展即可：R3 占比保持 50%-60%。")


def P97():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 97, "附录", "附录 C · 5 种开场方法对照")
    rc(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.4), DARK)
    tx(s, Inches(0.8), Inches(1.4), Inches(11.7), Inches(0.3), "5 种开场方法对照表", sz=14, c=WHT, b=True)
    headers = ["方法", "适合内容", "适合讲师", "开场耗时", "风险", "示例”]"
    cw = [Inches(1.5), Inches(2.0), Inches(2.0), Inches(1.5), Inches(2.0), Inches(3.1)]
    rx = Inches(0.6)
    ry = Inches(2.0)
    rh = Inches(0.85)
    rc(s, rx, ry, Inches(12.1), rh, DARK)
    x = rx
    for i, h in enumerate(headers):
        tx(s, x + Inches(0.1), ry, cw[i] - Inches(0.2), rh, h, sz=12, c=WHT, b=True, an=MSO_ANCHOR.MIDDLE)
        x += cw[i]
    rows = [
        ("反差", "学员疲惫", "有表现力", "5 分钟", "过于娱乐", "开场前先唱首歌"),
        ("提问", "所有内容", "善引导", "3 分钟", "问题太大", "您最近一次……是什么时候？"),
        ("体验", "技能/行为", "能组织", "5 分钟", "学员不配合", "两人一组做 5 分钟练习"),
        ("共鸣", "共同痛点", "有故事", "3 分钟", "故事不真", "上周我遇到一个学员……"),
        ("戏剧", "情境复杂", "表演强", "5 分钟", "过于戏剧", "演一段情景短剧"),
    ]
    for r, row in enumerate(rows):
        y = ry + rh * (r + 1)
        fill = LBG if r % 2 == 0 else WHT
        x = rx
        c = [RED, GREEN, GOLD, RED, GREEN][r]
        for c, cell in enumerate(row):
            color = c if c_ else TXT
            b = c_ == 0
            sz = 10
            rc(s, x, y, cw[c], rh, fill, line=LGT)
            tx(s, x + Inches(0.1), y, cw[c] - Inches(0.2), rh, cell, sz=sz, c=color, b=b, an=MSO_ANCHOR.MIDDLE)
            x += cw[c]
    ftr(s)
    note(s, "【附录 C · 5 种开场方法对照】\n\n讲师话术 A5：\n5 种开场方法对照表——\n\n[逐行讲解]\n\n反差：\n- 适合内容：学员疲惫\n- 适合讲师：有表现力\n- 开场耗时：5 分钟\n- 风险：过于娱乐\n- 示例：开场前先唱首歌\n\n提问：\n- 适合内容：所有内容\n- 适合讲师：善引导\n- 开场耗时：3 分钟\n- 风险：问题太大\n- 示例：您最近一次……是什么时候？\n\n体验：\n- 适合内容：技能/行为\n- 适合讲师：能组织\n- 开场耗时：5 分钟\n- 风险：学员不配合\n- 示例：两人一组做 5 分钟练习\n\n共鸣：\n- 适合内容：共同痛点\n- 适合讲师：有故事\n- 开场耗时：3 分钟\n- 风险：故事不真\n- 示例：上周我遇到一个学员……\n\n戏剧：\n- 适合内容：情境复杂\n- 适合讲师：表演强\n- 开场耗时：5 分钟\n- 风险：过于戏剧\n- 示例：演一段情景短剧")
'''
with open('gen_pptx_part2.py', 'a', encoding='utf-8') as f:
    f.write(code)
print('P91-P97 OK, lines:', sum(1 for _ in open('gen_pptx_part2.py', encoding='utf-8')))
