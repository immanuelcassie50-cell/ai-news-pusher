# -*- coding: utf-8 -*-
code = r'''


def P74():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 74, "第六章 · 收官", "6.6 · 工作坊设计原则 · 一图全览")
    rc(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.4), DARK)
    tx(s, Inches(0.8), Inches(1.4), Inches(11.7), Inches(0.3),
       "10 条设计原则 · 让您的工作坊质量稳定", sz=14, c=WHT, b=True)
    prins = [
        ("1", "R3 至少 40%", "没有深度讨论的工作坊就是复习课", RED),
        ("2", "开场 30 秒抓人", "前 30 秒决定工作坊的基调", GREEN),
        ("3", "真实场景", "R2 必须是学员的真实工作场景", GOLD),
        ("4", "讲师是引导者", "讲师讲的时间不应超过 30%", RED),
        ("5", "4 类问题轮换", "开放式 / 追问 / 比较 / 反思 缺一不可", GREEN),
        ("6", "强承诺 = 4 个 W", "弱承诺 = 工作坊结束学员不行动", GOLD),
        ("7", "跟进 = 30 天", "工作坊结束 = 学习开始", RED),
        ("8", "承诺 + 见证", "让小组同伴见证承诺", GREEN),
        ("9", "数据驱动评估", "打卡率 70%+ / 报告提交率 90%+", GOLD),
        ("10", "静远是镜子", "用静远的工作坊照出您的差距", RED),
    ]
    for i, (n, t, why, c) in enumerate(prins):
        x = Inches(0.6 + (i % 2) * 6.2)
        y = Inches(2.0 + (i // 2) * 1.1)
        rc(s, x, y, Inches(5.9), Inches(1.0), WHT, line=LGT)
        rc(s, x, y, Inches(0.15), Inches(1.0), c)
        tx(s, x + Inches(0.3), y + Inches(0.1), Inches(0.5), Inches(0.4), n, sz=18, c=DARK, b=True, an=MSO_ANCHOR.MIDDLE)
        tx(s, x + Inches(0.9), y + Inches(0.1), Inches(4.8), Inches(0.4), t, sz=13, c=DARK, b=True)
        tx(s, x + Inches(0.3), y + Inches(0.5), Inches(5.5), Inches(0.4), why, sz=10, c=GRY)
    ftr(s)
    note(s, "【6.6 10 条原则】\n\n讲师话术 6.6.1：\n最后 10 条工作坊设计原则——\n\n1. R3 至少 40%：没有深度讨论的工作坊就是复习课\n2. 开场 30 秒抓人：前 30 秒决定工作坊的基调\n3. 真实场景：R2 必须是学员的真实工作场景\n4. 讲师是引导者：讲师讲的时间不应超过 30%\n5. 4 类问题轮换：开放式/追问/比较/反思缺一不可\n6. 强承诺 = 4 个 W：弱承诺 = 工作坊结束学员不行动\n7. 跟进 = 30 天：工作坊结束 = 学习开始\n8. 承诺 + 见证：让小组同伴见证承诺\n9. 数据驱动评估：打卡率 70%+ / 报告提交率 90%+\n10. 静远是镜子：用静远的工作坊照出您的差距\n\n这 10 条原则来自我们对 100+ 场工作坊的观察。\n\n如果您的设计违反了其中 3 条以上，工作坊效果会大打折扣。\n\n请把这 10 条作为您工作坊设计的检验标准。")


def P75():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 75, "第六章 · 收官", "6.7 · 工作坊 5 类常见失败")
    rc(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.4), RED)
    tx(s, Inches(0.8), Inches(1.4), Inches(11.7), Inches(0.3), "工作坊 5 类常见失败 · 提前识别", sz=14, c=WHT, b=True)
    fails = [
        ("复习型工作坊", "R3 时间 < 20%", "学员只完成了”复述”，没有”转化”", RED),
        ("演讲型工作坊", "讲师讲的时间 > 70%", "学员变成了听众，没有参与", GREEN),
        ("娱乐型工作坊", "气氛活跃但没产出", "学员很开心，但工作坊后没改变", GOLD),
        ("模糊承诺型", "R4 没有 4 个 W", "学员说”会试试”，但不知道具体怎么做", RED),
        ("一次工作坊型", "没有 30 天跟进", "学员激动 3 天，第 4 天就忘了", GREEN),
    ]
    rh = Inches(1.0)
    rx = Inches(0.6)
    ry = Inches(2.0)
    cw = [Inches(2.5), Inches(3.0), Inches(6.6)]
    for r, (t, sym, why, c) in enumerate(fails):
        y = ry + rh * r
        fill = LBG if r % 2 == 0 else WHT
        x = rx
        rc(s, x, y, Inches(12.1), rh, fill, line=LGT)
        rc(s, x, y, Inches(0.15), rh, c)
        tx(s, x + Inches(0.3), y, Inches(2.4), rh, "✗ “ + t, sz=14, c=RED, b=True, an=MSO_ANCHOR.MIDDLE)"
        tx(s, x + Inches(2.8), y, Inches(2.9), rh, sym, sz=11, c=DARK, b=True, an=MSO_ANCHOR.MIDDLE)
        tx(s, x + Inches(5.8), y, Inches(6.2), rh, why, sz=11, c=TXT, an=MSO_ANCHOR.MIDDLE)
    ftr(s)
    note(s, "【6.7 5 类失败】\n\n讲师话术 6.7.1：\n工作坊有 5 类常见失败——\n\n1. 复习型工作坊：R3 时间 < 20%\n   学员只完成了”复述”，没有”转化”。\n2. 演讲型工作坊：讲师讲的时间 > 70%\n   学员变成了听众，没有参与。\n3. 娱乐型工作坊：气氛活跃但没产出\n   学员很开心，但工作坊后没改变。\n4. 模糊承诺型：R4 没有 4 个 W\n   学员说”会试试”，但不知道具体怎么做。\n5. 一次工作坊型：没有 30 天跟进\n   学员激动 3 天，第 4 天就忘了。\n\n识别您的设计属于哪一类失败——这是改进的第一步。\n\n很多讲师的工作坊是”复习型”——他们以为自己在做工作坊，实际上是复习课。\n\n请对照这 5 类失败，看看您的工作坊是否在某一类里。")


def P76():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 76, "第六章 · 收官", "6.8 · 从知道到做到 · 1 张图")
    rc(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.4), DARK)
    tx(s, Inches(0.8), Inches(1.4), Inches(11.7), Inches(0.3),
       "知行工作坊 · 1 张图", sz=14, c=WHT, b=True)
    # 知行大图
    rc(s, Inches(0.6), Inches(2.0), Inches(12.1), Inches(5.0), WHT, line=LGT)
    rc(s, Inches(0.6), Inches(2.0), Inches(12.1), Inches(0.5), DARK)
    tx(s, Inches(0.6), Inches(2.0), Inches(12.1), Inches(0.5),
       "知行工作坊 · 让学习真正落地", sz=18, c=WHT, b=True, al=PP_ALIGN.CENTER, an=MSO_ANCHOR.MIDDLE)
    # 左半：知道
    rc(s, Inches(1.0), Inches(2.8), Inches(5.5), Inches(4.0), LBG)
    tx(s, Inches(1.0), Inches(2.85), Inches(5.5), Inches(0.5), "知道 (Knowing)", sz=18, c=DARK, b=True, al=PP_ALIGN.CENTER, an=MSO_ANCHOR.MIDDLE)
    know_pts = [
        "课程培训（4 小时）",
        "学员学到了知识点",
        "通过率 80%",
        "但是 30 天后 70% 不用",
    ]
    for i, p in enumerate(know_pts):
        y = Inches(3.5 + i * 0.6)
        tx(s, Inches(1.2), y, Inches(5.1), Inches(0.4), "· “ + p, sz=12, c=TXT)"
    # 箭头
    tx(s, Inches(6.6), Inches(4.7), Inches(0.6), Inches(0.5), "→", sz=30, c=RED, b=True, al=PP_ALIGN.CENTER)
    # 右半：做到
    rc(s, Inches(7.3), Inches(2.8), Inches(5.5), Inches(4.0), LBG)
    tx(s, Inches(7.3), Inches(2.85), Inches(5.5), Inches(0.5), "做到 (Doing)", sz=18, c=DARK, b=True, al=PP_ALIGN.CENTER, an=MSO_ANCHOR.MIDDLE)
    do_pts = [
        "工作坊（4 小时）",
        "学员做出具体承诺",
        "30 天跟进陪伴",
        "90 天后 70% 真的用",
    ]
    for i, p in enumerate(do_pts):
        y = Inches(3.5 + i * 0.6)
        tx(s, Inches(7.5), y, Inches(5.1), Inches(0.4), "· “ + p, sz=12, c=TXT)"
    # 中间：工作坊
    rc(s, Inches(6.5), Inches(4.4), Inches(0.8), Inches(0.8), RED)
    tx(s, Inches(6.5), Inches(4.4), Inches(0.8), Inches(0.8),
       "工\n作\n坊", sz=10, c=WHT, b=True, al=PP_ALIGN.CENTER, an=MSO_ANCHOR.MIDDLE)
    ftr(s)
    note(s, "【6.8 知行大图】\n\n讲师话术 6.8.1：\n最后一张图——知行工作坊的 1 张图。\n\n左边：知道 (Knowing)\n- 课程培训（4 小时）\n- 学员学到了知识点\n- 通过率 80%\n- 但是 30 天后 70% 不用\n\n右边：做到 (Doing)\n- 工作坊（4 小时）\n- 学员做出具体承诺\n- 30 天跟进陪伴\n- 90 天后 70% 真的用\n\n中间：工作坊——把”知道”转化为”做到”的关键环节。\n\n我们的核心承诺：\n让每一位学员从”知道”走到”做到”。\n\n这是知行工作坊的使命——不是教一个新知识点，而是让学员真的用起来。\n\n请把这一张图记住——它会提醒您为什么做工作坊。")


def P77():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 77, "第六章 · 收官", "6.9 · 给学员的 5 个金句")
    rc(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.4), DARK)
    tx(s, Inches(0.8), Inches(1.4), Inches(11.7), Inches(0.3), "5 个金句 · 让您的工作坊有人愿意分享", sz=14, c=WHT, b=True)
    quotes = [
        ("1", "工作坊不是表演，是让学员真的发生改变。", "不要用 4 小时的精彩掩盖 30 天的无跟进。"),
        ("2", "讲师讲得越多，学员记得越少。", "讲师讲的时间 > 70% 时，学员只能记住 20%。"),
        ("3", "R3 的时间占比，决定了工作坊的质量。", "R3 < 30% 的工作坊 = 复习课，不是工作坊。"),
        ("4", "工作坊结束 = 学习开始。", "30% 工作坊设计 + 70% 跟进 = 真正的转化。"),
        ("5", "您的工作不是解决问题，而是让问题不再是问题。", "深度引导让学员从”如何做”走到”我是谁”。"),
    ]
    rh = Inches(0.95)
    rx = Inches(0.6)
    ry = Inches(2.0)
    cw = [Inches(0.7), Inches(5.5), Inches(5.9)]
    for r, (n, q, why, c) in enumerate(quotes):
        y = ry + rh * r
        fill = LBG if r % 2 == 0 else WHT
        x = rx
        rc(s, x, y, Inches(12.1), rh, fill, line=LGT)
        rc(s, x, y, Inches(0.15), rh, c)
        tx(s, x + Inches(0.3), y, Inches(0.6), rh, n, sz=18, c=c, b=True, al=PP_ALIGN.CENTER, an=MSO_ANCHOR.MIDDLE)
        tx(s, x + Inches(1.0), y, Inches(5.3), rh, "” + q, sz=12, c=DARK, b=True, an=MSO_ANCHOR.MIDDLE)"
        tx(s, x + Inches(6.4), y, Inches(5.6), rh, "→ “ + why, sz=10, c=GRY, an=MSO_ANCHOR.MIDDLE)"
    ftr(s)
    note(s, "【6.9 5 个金句】\n\n讲师话术 6.9.1：\n最后送给大家 5 个金句——\n\n1. 工作坊不是表演，是让学员真的发生改变。\n   不要用 4 小时的精彩掩盖 30 天的无跟进。\n\n2. 讲师讲得越多，学员记得越少。\n   讲师讲的时间 > 70% 时，学员只能记住 20%。\n\n3. R3 的时间占比，决定了工作坊的质量。\n   R3 < 30% 的工作坊 = 复习课，不是工作坊。\n\n4. 工作坊结束 = 学习开始。\n   30% 工作坊设计 + 70% 跟进 = 真正的转化。\n\n5. 您的工作不是解决问题，而是让问题不再是问题。\n   深度引导让学员从”如何做”走到”我是谁”。\n\n这 5 句金句是静远在工作坊中反复使用的——它们能让学员在工作坊后很久还记住这场工作坊。\n\n请您选 1-2 句作为您工作坊的”招牌金句”——每次工作坊都讲，让它成为您的标志。")


def P78():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 78, "第六章 · 收官", "6.10 · 工作坊 Q&A 准备")
    rc(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.4), DARK)
    tx(s, Inches(0.8), Inches(1.4), Inches(11.7), Inches(0.3),
       "工作坊中常见 Q&A · 提前准备", sz=14, c=WHT, b=True)
    qas = [
        ("Q: 学员太少怎么办？", "A: 3-5 人也可以做工作坊。小组可以更小（2 人一组），提问可以更细。", RED),
        ("Q: 学员不配合怎么办？", "A: 先用 1-2 个简单的 R1 问题热身，再进入 R3。", GREEN),
        ("Q: 工作坊超时怎么办？", "A: 优先压缩 R1，把时间让给 R3。R1 从 15 分钟压缩到 5 分钟。", GOLD),
        ("Q: 工作坊提前结束怎么办？", "A: 让学员再做一次 R3（不同案例），不要直接进 R4。", RED),
        ("Q: 学员不分享真实案例怎么办？", "A: 先做无风险的小分享（您先说您的），再让学员说。", GREEN),
        ("Q: 时间不够做跟进怎么办？", "A: 至少做 30 天打卡（成本最低）。30 天打卡 + 30 天实施报告是最低配置。", GOLD),
    ]
    rh = Inches(0.7)
    rx = Inches(0.6)
    ry = Inches(2.0)
    cw = [Inches(5.5), Inches(6.6)]
    for r, (q, a, c) in enumerate(qas):
        y = ry + rh * r
        fill = LBG if r % 2 == 0 else WHT
        x = rx
        rc(s, x, y, Inches(12.1), rh, fill, line=LGT)
        rc(s, x, y, Inches(0.15), rh, c)
        tx(s, x + Inches(0.3), y, Inches(5.3), rh, q, sz=11, c=DARK, b=True, an=MSO_ANCHOR.MIDDLE)
        tx(s, x + Inches(5.7), y, Inches(6.3), rh, a, sz=10, c=TXT, an=MSO_ANCHOR.MIDDLE)
    ftr(s)
    note(s, "【6.10 Q&A 准备】\n\n讲师话术 6.10.1：\n工作坊中常见 Q&A，提前准备：\n\n1. Q: 学员太少怎么办？\n   A: 3-5 人也可以做工作坊。小组可以更小（2 人一组），提问可以更细。\n\n2. Q: 学员不配合怎么办？\n   A: 先用 1-2 个简单的 R1 问题热身，再进入 R3。\n\n3. Q: 工作坊超时怎么办？\n   A: 优先压缩 R1，把时间让给 R3。R1 从 15 分钟压缩到 5 分钟。\n\n4. Q: 工作坊提前结束怎么办？\n   A: 让学员再做一次 R3（不同案例），不要直接进 R4。\n\n5. Q: 学员不分享真实案例怎么办？\n   A: 先做无风险的小分享（您先说您的），再让学员说。\n\n6. Q: 时间不够做跟进怎么办？\n   A: 至少做 30 天打卡（成本最低）。30 天打卡 + 30 天实施报告是最低配置。\n\n请在工作坊前把这 6 个 Q&A 背下来——学员经常会问这些问题。\n\n[留 5-10 分钟 Q&A 时间]")


def P79():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 79, "第六章 · 收官", "6.11 · 工作坊后 7 件必做之事")
    rc(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.4), DARK)
    tx(s, Inches(0.8), Inches(1.4), Inches(11.7), Inches(0.3),
       "工作坊结束 24 小时内必做的 7 件事", sz=14, c=WHT, b=True)
    tasks_ = [
        ("1", "工作坊结束 2 小时内", "整理学员的 R4 承诺", "把每个学员的承诺汇总成 1 张表", RED),
        ("2", "工作坊结束 4 小时内", "推送第 1 课跟进", "【第 1 课】您今天用了哪个新方法？", GREEN),
        ("3", "工作坊结束 24 小时内", "把学员分成 2-3 人小组", "根据学员行业/岗位/工作坊上的发言", GOLD),
        ("4", "工作坊结束 24 小时内", "建立微信群/钉钉群", "群里公布跟进时间表", RED),
        ("5", "工作坊结束 24 小时内", "给每位学员发一份", "您的 R4 承诺 + 我的引导场景 + 30 天跟进", GREEN),
        ("6", "工作坊结束 7 天内", "举办第 1 次同伴互助会", "30 分钟视频会（讲师参与 1 次）", GOLD),
        ("7", "工作坊结束 7 天内", "回看自己录的视频/笔记", "发现自己哪里做得好，哪里需要改进", RED),
    ]
    rh = Inches(0.7)
    rx = Inches(0.6)
    ry = Inches(2.0)
    cw = [Inches(0.7), Inches(2.8), Inches(4.0), Inches(4.6)]
    for r, (n, t, task, desc, c) in enumerate(tasks_):
        y = ry + rh * r
        fill = LBG if r % 2 == 0 else WHT
        x = rx
        rc(s, x, y, Inches(12.1), rh, fill, line=LGT)
        rc(s, x, y, Inches(0.15), rh, c)
        tx(s, x + Inches(0.3), y, Inches(0.6), rh, n, sz=16, c=c, b=True, al=PP_ALIGN.CENTER, an=MSO_ANCHOR.MIDDLE)
        tx(s, x + Inches(1.0), y, Inches(2.7), rh, t, sz=11, c=DARK, b=True, an=MSO_ANCHOR.MIDDLE)
        tx(s, x + Inches(3.8), y, Inches(3.9), rh, task, sz=10, c=TXT, an=MSO_ANCHOR.MIDDLE)
        tx(s, x + Inches(7.8), y, Inches(4.2), rh, "→ “ + desc, sz=10, c=GRY, an=MSO_ANCHOR.MIDDLE)"
    ftr(s)
    note(s, "【6.11 工作坊后 7 件必做之事】\n\n讲师话术 6.11.1：\n工作坊结束 24 小时内必做的 7 件事——\n\n1. 2 小时内：整理学员的 R4 承诺，把每个学员的承诺汇总成 1 张表\n2. 4 小时内：推送第 1 课跟进，【第 1 课】您今天用了哪个新方法？\n3. 24 小时内：把学员分成 2-3 人小组（根据学员行业/岗位/工作坊上的发言）\n4. 24 小时内：建立微信群/钉钉群，群里公布跟进时间表\n5. 24 小时内：给每位学员发一份（您的 R4 承诺 + 我的引导场景 + 30 天跟进）\n6. 7 天内：举办第 1 次同伴互助会（30 分钟视频会，讲师参与 1 次）\n7. 7 天内：回看自己录的视频/笔记（发现自己哪里做得好，哪里需要改进）\n\n这 7 件事是工作坊后 7 天的最低要求。\n\n如果您没做，工作坊的效果会大打折扣——学员在第 4 天就忘了。\n\n请把这 7 件事作为您工作坊后的行动清单。")


def P80():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 80, "第六章 · 收官", "6.12 · 工作坊设计资源包")
    rc(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.4), DARK)
    tx(s, Inches(0.8), Inches(1.4), Inches(11.7), Inches(0.3), "工作坊设计资源包", sz=14, c=WHT, b=True)
    resources = [
        ("学员手册", "工作坊核心工具：三维分析 + 4R 设计 + 开场 + 提问 + 跟进", "D:\\2026年课程\\竞越\\知行：学习落地工作坊\\03_学员手册\\知行工作坊_学员手册_v1.0.docx", RED),
        ("讲师手册", "完整讲师讲稿 + 板书 + 应答话术", "D:\\2026年课程\\竞越\\知行：学习落地工作坊\\04_讲师手册\\知行工作坊_讲师手册_v1.0.docx", GREEN),
        ("授课 PPT", "130 页授课幻灯片 + 讲者备注", "D:\\2026年课程\\竞越\\知行：学习落地工作坊\\16_授课PPT\\知行工作坊_授课PPT.pptx", GOLD),
        ("学员进度跟踪表", "5 个时间点（课前/课中/课后 7/30/90 天）", "D:\\2026年课程\\竞越\\知行：学习落地工作坊\\15_Excel表单\\学员进度跟踪表.xlsx", RED),
        ("工作坊效果汇总表", "4 个指标（参与/理解/应用/复盘）", "D:\\2026年课程\\竞越\\知行：学习落地工作坊\\15_Excel表单\\工作坊效果汇总表.xlsx", GREEN),
        ("30 天实施报告批量汇总", "30 天实施报告批量汇总 + 分析", "D:\\2026年课程\\竞越\\知行：学习落地工作坊\\15_Excel表单\\30天实施报告批量汇总.xlsx", GOLD),
    ]
    rh = Inches(0.7)
    rx = Inches(0.6)
    ry = Inches(2.0)
    cw = [Inches(3.0), Inches(4.5), Inches(4.6)]
    for r, (t, desc, path, c) in enumerate(resources):
        y = ry + rh * r
        fill = LBG if r % 2 == 0 else WHT
        x = rx
        rc(s, x, y, Inches(12.1), rh, fill, line=LGT)
        rc(s, x, y, Inches(0.15), rh, c)
        tx(s, x + Inches(0.3), y, Inches(2.9), rh, t, sz=12, c=DARK, b=True, an=MSO_ANCHOR.MIDDLE)
        tx(s, x + Inches(3.3), y, Inches(4.3), rh, desc, sz=10, c=TXT, an=MSO_ANCHOR.MIDDLE)
        tx(s, x + Inches(7.6), y, Inches(4.4), rh, path, sz=8, c=GRY, an=MSO_ANCHOR.MIDDLE)
    ftr(s)
    note(s, "【6.12 资源包】\n\n讲师话术 6.12.1：\n工作坊设计资源包——\n\n1. 学员手册：工作坊核心工具，包含三维分析、4R 设计、开场、提问、跟进。\n2. 讲师手册：完整讲师讲稿 + 板书 + 应答话术。\n3. 授课 PPT：130 页授课幻灯片 + 讲者备注。\n4. 学员进度跟踪表：5 个时间点（课前/课中/课后 7/30/90 天）。\n5. 工作坊效果汇总表：4 个指标（参与/理解/应用/复盘）。\n6. 30 天实施报告批量汇总：30 天实施报告批量汇总 + 分析。\n\n这 6 个文件是工作坊的完整工具集——您可以根据需要选择使用。\n\n建议工作坊前 1 周：先读讲师手册 + 看 PPT\n工作坊当天：带学员手册 + 打印工具表单\n工作坊后 7 天：用 Excel 跟踪学员进度")
'''
with open('gen_pptx_part2.py', 'a', encoding='utf-8') as f:
    f.write(code)
print('P74-P80 OK, lines:', sum(1 for _ in open('gen_pptx_part2.py', encoding='utf-8')))
