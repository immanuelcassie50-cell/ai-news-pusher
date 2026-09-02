# -*- coding: utf-8 -*-
code = r'''


def P21():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 21, "第二章 · 流程规划", "2.2 · 4R 循环总览")
    tx(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.4), "4R 循环 · 工作坊质量框架", sz=18, c=DARK, b=True)
    rs = [
        ("R1", "回顾", "Recall", "10-15%", "重新激活学员记忆", RED),
        ("R2", "现实", "Reflect", "20-25%", "连接工作真实场景", GREEN),
        ("R3", "共创", "Resolve", "40-50%", "深度讨论产生洞见", GOLD),
        ("R4", "行动", "Respond", "15-20%", "具体行动承诺", RED),
    ]
    for i, (rn, rcn, en, pct, desc, c) in enumerate(rs):
        x = Inches(0.6 + i * 3.1)
        rc(s, x, Inches(2.0), Inches(2.9), Inches(4.0), WHT, line=LGT)
        rc(s, x, Inches(2.0), Inches(2.9), Inches(0.8), c)
        tx(s, x, Inches(2.0), Inches(2.9), Inches(0.8), rn, sz=32, c=WHT, b=True, al=PP_ALIGN.CENTER, an=MSO_ANCHOR.MIDDLE)
        tx(s, x, Inches(2.95), Inches(2.9), Inches(0.5), rcn, sz=24, c=DARK, b=True, al=PP_ALIGN.CENTER)
        tx(s, x, Inches(3.55), Inches(2.9), Inches(0.4), en, sz=11, c=GRY, al=PP_ALIGN.CENTER)
        tx(s, x, Inches(4.0), Inches(2.9), Inches(0.5), pct, sz=18, c=c, b=True, al=PP_ALIGN.CENTER)
        rc(s, x + Inches(0.6), Inches(4.55), Inches(1.7), Pt(1), GRY)
        tx(s, x + Inches(0.2), Inches(4.7), Inches(2.5), Inches(0.6), desc, sz=11, c=TXT, al=PP_ALIGN.CENTER)
        if i < 3:
            tx(s, x + Inches(2.95), Inches(3.9), Inches(0.2), Inches(0.5), "→", sz=20, c=DARK, b=True)
    rc(s, Inches(0.6), Inches(6.2), Inches(12.1), Inches(0.85), DARK)
    tx(s, Inches(0.8), Inches(6.3), Inches(11.7), Inches(0.4), "★ 最重要原则", sz=12, c=RED, b=True)
    tx(s, Inches(0.8), Inches(6.65), Inches(11.7), Inches(0.4),
       "R3 的时间占比，基本决定了工作坊的质量。如果 R3 少于 30%，这场工作坊大概率只完成了复习功能，没有完成转化功能。",
       sz=12, c=WHT, b=True)
    ftr(s)
    note(s, "【2.2 4R 循环总览】\n\n4R 循环是工作坊的核心框架。\n\nR1 回顾（10-15%）：重新激活学员记忆\nR2 现实（20-25%）：连接工作真实场景\nR3 共创（40-50%）：深度讨论产生洞见 ← 核心\nR4 行动（15-20%）：具体行动承诺\n\n讲师话术 2.2.1：\n关于 4R，我需要强调一个最重要的原则——R3 的时间占比，基本决定了工作坊的质量。\n\n很多失败的工作坊，是把大量时间花在 R1（回顾/复习），只留很少时间给 R3。学员讨论 5 分钟就结束了，剩下的时间讲师又自己讲。\n\n我们的建议是：R1 约 15%，R2 约 20%，R3 约 40%，R4 约 25%。\n\n各位在自己设计的时候，请用时间预算表来检查——如果 R3 少于 30%，这场工作坊大概率只完成了复习功能，没有完成转化功能。")


def P22():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 22, "第二章 · 流程规划", "2.2 · R1 回顾 · Recall")
    rc(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.6), RED)
    tx(s, Inches(0.8), Inches(1.4), Inches(11.7), Inches(0.4),
       "R1 · 回顾 Recall   |   10-15%   |   重新激活学员记忆",
       sz=16, c=WHT, b=True)
    rc(s, Inches(0.6), Inches(2.2), Inches(12.1), Inches(1.4), LBG)
    tx(s, Inches(0.8), Inches(2.3), Inches(11.7), Inches(0.4), "R1 的关键问题", sz=14, c=RED, b=True)
    tx(s, Inches(0.8), Inches(2.7), Inches(11.7), Inches(0.5),
       "”上次课程中哪个点让你感到这个我原来没想过？”", sz=18, c=DARK, b=True)
    tx(s, Inches(0.8), Inches(3.2), Inches(11.7), Inches(0.4),
       "· 不是问记不记得，而是问触动点   · 不是重讲，而是激活", sz=11, c=GRY)
    activities = [
        ("经历回忆", "让学员回忆一次用过/没用到该知识的真实时刻", "30 秒回忆 + 90 秒分享", RED),
        ("亮点回顾", "全班投票：上次课程哪 3 个点对你最有启发？", "3 分钟小组 + 2 分钟全体", GREEN),
        ("反例识别", "给一个反例/失败场景，让学员识别应该用哪个知识点", "5 分钟小组讨论", GOLD),
    ]
    for i, (t, desc, dur, c) in enumerate(activities):
        x = Inches(0.6 + i * 4.2)
        rc(s, x, Inches(3.8), Inches(3.9), WHT, line=LGT)
        rc(s, x, Inches(3.8), Inches(3.9), Inches(0.5), c)
        tx(s, x + Inches(0.2), Inches(3.85), Inches(3.5), Inches(0.4), t, sz=14, c=WHT, b=True)
        tx(s, x + Inches(0.2), Inches(4.4), Inches(3.5), Inches(1.0), desc, sz=11, c=TXT)
        tx(s, x + Inches(0.2), Inches(5.5), Inches(3.5), Inches(0.4), "时长：", sz=11, c=GRY, b=True)
        tx(s, x + Inches(0.7), Inches(5.5), Inches(3.0), Inches(0.4), dur, sz=11, c=c, b=True)
    ftr(s)
    note(s, "【2.2 R1 回顾】\n\nR1 的核心任务：重新激活学员记忆。\n\n关键问题：上次课程中哪个点让你感到这个我原来没想过？\n\n注意：R1 不是重讲。学员已经学过了，再讲一遍他们会烦。\nR1 是激活——用一个问题/活动，让学员自己把学过的内容调动出来。\n\n三种 R1 活动：\n1. 经历回忆：让学员回忆一次用过/没用到该知识的真实时刻\n2. 亮点回顾：全班投票上次课程哪 3 个点最有启发\n3. 反例识别：给一个反例/失败场景，让学员识别应该用哪个知识点\n\n时间占比：10-15%。R1 不是越长越好——超过 20% 就是浪费时间。")


def P23():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 23, "第二章 · 流程规划", "2.2 · R2 现实 · Reflect")
    rc(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.6), GREEN)
    tx(s, Inches(0.8), Inches(1.4), Inches(11.7), Inches(0.4),
       "R2 · 现实 Reflect   |   20-25%   |   连接工作真实场景",
       sz=16, c=WHT, b=True)
    rc(s, Inches(0.6), Inches(2.2), Inches(12.1), Inches(1.4), LBG)
    tx(s, Inches(0.8), Inches(2.3), Inches(11.7), Inches(0.4), "R2 的关键问题", sz=14, c=GREEN, b=True)
    tx(s, Inches(0.8), Inches(2.7), Inches(11.7), Inches(0.5),
       "”你在最近的工作中，遇到过和这个知识点相关的情况吗？当时发生了什么？”", sz=16, c=DARK, b=True)
    tx(s, Inches(0.8), Inches(3.2), Inches(11.7), Inches(0.4),
       "· 把抽象知识连接到具体工作场景   · 让学员从课堂走向现实", sz=11, c=GRY)
    activities = [
        ("真实案例", "学员自带 1 个最近 30 天内的相关案例，2 人分享", "5 分钟", GREEN),
        ("场景标签", "列出 5-7 个典型工作场景，让学员投票最常遇到的", "3 分钟", RED),
        ("现状盘点", "用便利贴写下目前在该知识点上的现状（做到了/没做到）", "5 分钟", GOLD),
    ]
    for i, (t, desc, dur, c) in enumerate(activities):
        y = Inches(3.8 + i * 1.0)
        rc(s, Inches(0.6), y, Inches(12.1), Inches(0.9), WHT, line=LGT)
        rc(s, Inches(0.6), y, Inches(0.15), Inches(0.9), c)
        tx(s, Inches(0.9), y + Inches(0.1), Inches(2.5), Inches(0.4), t, sz=14, c=DARK, b=True)
        tx(s, Inches(3.6), y + Inches(0.1), Inches(7.0), Inches(0.4), desc, sz=11, c=TXT)
        tx(s, Inches(10.8), y + Inches(0.15), Inches(1.8), Inches(0.4), "时长：” + dur, sz=11, c=c, b=True, al=PP_ALIGN.RIGHT)"
    ftr(s)
    note(s, "【2.2 R2 现实】\n\nR2 的核心任务：连接工作真实场景。\n\n关键问题：你在最近的工作中，遇到过和这个知识点相关的情况吗？当时发生了什么？\n\nR1 是激活记忆，R2 是连接现实。这是从知道走向行动的关键过渡。\n\n学员可能知道异议处理的方法，但从来没在真实场景里用过。\nR2 要让学员回到那个具体的真实场景——上周/上个月某个客户提出价格异议时，您具体是怎么说的？\n\n注意：R2 不是讨论抽象的应该如何做，而是讨论具体的您当时怎么做的。\n\n时间占比：20-25%。")


def P24():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 24, "第二章 · 流程规划", "2.2 · R3 共创 · Resolve")
    rc(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.6), GOLD)
    tx(s, Inches(0.8), Inches(1.4), Inches(11.7), Inches(0.4),
       "R3 · 共创 Resolve   |   40-50%   |   深度讨论产生洞见  ← 核心",
       sz=16, c=WHT, b=True)
    rc(s, Inches(0.6), Inches(2.2), Inches(12.1), Inches(1.4), LBG)
    tx(s, Inches(0.8), Inches(2.3), Inches(11.7), Inches(0.4), "R3 的关键问题", sz=14, c=GOLD, b=True)
    tx(s, Inches(0.8), Inches(2.7), Inches(11.7), Inches(0.5),
       "”你当时是怎么想的？那一刻是什么让你选择了这个做法？”", sz=18, c=DARK, b=True)
    tx(s, Inches(0.8), Inches(3.2), Inches(11.7), Inches(0.4),
       "· 从经历挖掘洞见   · 从做法反思决策   · 从个人扩展到团队", sz=11, c=GRY)
    actions = [
        ("挖掘", "从表面的做法挖掘背后的判断逻辑", "你怎么想到这个做法的？"),
        ("比较", "对比不同学员的不同做法，找出差异", "你们俩做法不同，结果分别是什么？"),
        ("提炼", "把讨论中浮现的洞见提炼成原则", "这背后有没有一个共同的原则？"),
        ("迁移", "把原则迁移到其他场景", "这个原则能用到 X 场景吗？"),
    ]
    for i, (t, desc, q) in enumerate(actions):
        x = Inches(0.6 + i * 3.1)
        rc(s, x, Inches(3.8), Inches(2.9), Inches(3.0), WHT, line=LGT)
        rc(s, x, Inches(3.8), Inches(2.9), Inches(0.5), GOLD)
        tx(s, x, Inches(3.8), Inches(2.9), Inches(0.5), t, sz=18, c=WHT, b=True, al=PP_ALIGN.CENTER, an=MSO_ANCHOR.MIDDLE)
        tx(s, x + Inches(0.2), Inches(4.4), Inches(2.5), Inches(0.8), desc, sz=11, c=TXT)
        rc(s, x + Inches(0.2), Inches(5.5), Inches(2.5), Pt(1), GRY)
        tx(s, x + Inches(0.2), Inches(5.6), Inches(2.5), Inches(1.0), "→ “ + q, sz=10, c=GOLD, b=True)"
    ftr(s)
    note(s, "【2.2 R3 共创】\n\nR3 是工作坊的核心。\n\n关键问题：你当时是怎么想的？那一刻是什么让你选择了这个做法？\n\nR3 的四个动作：\n1. 挖掘：从表面的做法挖掘背后的判断逻辑\n2. 比较：对比不同学员的不同做法，找出差异\n3. 提炼：把讨论中浮现的洞见提炼成原则\n4. 迁移：把原则迁移到其他场景\n\n注意：R3 不是讲师讲自己的标准答案，而是让学员互相挖掘、互相比较、互相提炼。\n讲师在 R3 的角色是引导者，不是讲授者。\n\n时间占比：40-50%。R3 是工作坊的灵魂——它是把知道转化为洞见的关键环节。")


def P25():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 25, "第二章 · 流程规划", "2.2 · R4 行动 · Respond")
    rc(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.6), RED)
    tx(s, Inches(0.8), Inches(1.4), Inches(11.7), Inches(0.4),
       "R4 · 行动 Respond   |   15-20%   |   具体行动承诺",
       sz=16, c=WHT, b=True)
    rc(s, Inches(0.6), Inches(2.2), Inches(12.1), Inches(1.4), LBG)
    tx(s, Inches(0.8), Inches(2.3), Inches(11.7), Inches(0.4), "R4 的关键问题", sz=14, c=RED, b=True)
    tx(s, Inches(0.8), Inches(2.7), Inches(11.7), Inches(0.5),
       "”你承诺在接下来 7 天内的第一件不同的事是什么？”", sz=18, c=DARK, b=True)
    tx(s, Inches(0.8), Inches(3.2), Inches(11.7), Inches(0.4),
       "· 7 天内可执行   · 具体到一个真实场景   · 可被观察或可被验证", sz=11, c=GRY)
    levels = [
        ("弱承诺", "我会多注意跟进", "✗ 没有具体动作，无法观察", GRY),
        ("模糊承诺", "我会尝试用一下异议处理的方法", "△ 有方法但没场景", GOLD),
        ("强承诺", "我下周三对 X 客户用 Z 方法处理价格异议，请同事旁听", "✓ 具体场景+具体方法+可观察", RED),
    ]
    for i, (lvl, ex, hl, c) in enumerate(levels):
        y = Inches(3.8 + i * 1.0)
        rc(s, Inches(0.6), y, Inches(12.1), Inches(0.9), WHT, line=LGT)
        rc(s, Inches(0.6), y, Inches(0.15), Inches(0.9), c)
        tx(s, Inches(0.9), y + Inches(0.1), Inches(2.0), Inches(0.4), lvl, sz=14, c=c, b=True)
        tx(s, Inches(3.0), y + Inches(0.1), Inches(7.5), Inches(0.4), "例如：” + ex, sz=11, c=TXT)"
        tx(s, Inches(10.6), y + Inches(0.15), Inches(1.9), Inches(0.4), hl, sz=10, c=c, b=True, al=PP_ALIGN.RIGHT)
    ftr(s)
    note(s, "【2.2 R4 行动】\n\nR4 的核心任务：让学员做出具体的行动承诺。\n\n关键问题：你承诺在接下来 7 天内的第一件不同的事是什么？\n\n注意：R4 的承诺必须具体到下周 X 场景中做 Y 事，否则不算承诺。\n\n三个层级：\n- 弱承诺：我会多注意跟进（没有具体动作）\n- 模糊承诺：我会尝试用一下异议处理的方法（有方法但没场景）\n- 强承诺：我下周三对 X 客户用 Z 方法处理价格异议，请同事旁听（具体场景+具体方法+可观察）\n\n讲师在 R4 的角色是逼出具体的承诺——不接受模糊的回答。\n如果学员说会努力应用，要追问：在哪个场景？对谁？做什么？什么时候？\n\n时间占比：15-20%。")


def P26():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 26, "第二章 · 流程规划", "2.2 · 4R 时间分配检查表")
    tx(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.4),
       "请用这个检查表来评估您的 4R 设计", sz=14, c=DARK, b=True)
    items = [
        ("R1 时间占比 10-15%", "□", "□", "□"),
        ("R2 时间占比 20-25%", "□", "□", "□"),
        ("R3 时间占比 40-50%  ← 关键", "□", "□", "□"),
        ("R4 时间占比 15-20%", "□", "□", "□"),
        ("R1 真的激活了记忆（不是重讲）", "□", "□", "□"),
        ("R2 真的连接了真实场景", "□", "□", "□"),
        ("R3 真的发生了深度讨论", "□", "□", "□"),
        ("R4 真的产生了具体承诺", "□", "□", "□"),
    ]
    headers = ["检查项", "是", "否", "需调整”]"
    rc(s, Inches(0.6), Inches(2.0), Inches(12.1), Inches(0.5), DARK)
    cw = [Inches(7.0), Inches(1.5), Inches(1.5), Inches(2.1)]
    x = Inches(0.6)
    for i, h in enumerate(headers):
        tx(s, x + Inches(0.1), Inches(2.0), cw[i] - Inches(0.2), Inches(0.5), h, sz=13, c=WHT, b=True, an=MSO_ANCHOR.MIDDLE)
        x += cw[i]
    for r, row in enumerate(items):
        y = Inches(2.5 + r * 0.55)
        fill = LBG if r % 2 == 0 else WHT
        x = Inches(0.6)
        for c, cell in enumerate(row):
            rc(s, x, y, cw[c], Inches(0.55), fill, line=LGT)
            tx(s, x + Inches(0.1), y, cw[c] - Inches(0.2), Inches(0.55), cell, sz=12, c=TXT, an=MSO_ANCHOR.MIDDLE)
            x += cw[c]
    ftr(s)
    note(s, "【2.2 4R 时间分配检查表】\n\n这是一个非常实用的工具——在您设计完工作坊后，请用这个检查表评估一遍。\n\n如果 R3 少于 30%——大概率是复习型工作坊，不是转化型工作坊。\n如果 R4 的承诺是模糊的——工作坊结束后学员也不会真的去做。\n\n讲师在巡视时，重点看学员的 R3 时间分配是不是真的够。很多学员会把 R1 写得很长、R3 写得很短。")


def P27():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 27, "第二章 · 流程规划", "2.3 · 不同内容属性的 4R 差异")
    tx(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.4),
       "4R 的顺序是固定的，但每个 R 的时间占比应该根据内容属性调整",
       sz=14, c=DARK, b=True)
    rows = [
        ("内容属性", "重点 R", "设计要点", "静远案例"),
        ("知识性", "R1、R2", "帮助学员在真实情境中识别和理解", "概念是什么？为什么这样设计？"),
        ("（知道）", ", ", "这个知识点的应用边界", "适用于哪些客户？不适用于哪些？"),
        ("技能性", "R3、R4", "深度讨论技能应用的难点", "在 X 场景具体怎么用？"),
        ("（会用）", ", ", "做出具体的实践承诺", "下周 X 场景会用 Y 方法做 Z 事"),
        ("态度性", "R2、R3", "真实情境触发情感共鸣", "那次让您特别沮丧/特别触动的是什么？"),
        ("（愿意）", ", ", "深度讨论帮助内化", "这个改变对您意味着什么？"),
    ]
    tx_t = Inches(0.6)
    ty = Inches(2.0)
    cw = [Inches(2.5), Inches(2.0), Inches(4.0), Inches(3.6)]
    rh = Inches(0.55)
    for r, row in enumerate(rows):
        is_h = (r == 0)
        x = tx_t
        for c, cell in enumerate(row):
            fill = DARK if is_h else (LBG if r % 2 == 0 else WHT)
            color = WHT if is_h else TXT
            rc(s, x, ty + rh * r, cw[c], rh, fill, line=LGT)
            tx(s, x + Inches(0.1), ty + rh * r, cw[c] - Inches(0.2), rh, cell, sz=11 if not is_h else 12, c=color, b=is_h, an=MSO_ANCHOR.MIDDLE)
            x += cw[c]
    rc(s, Inches(0.6), Inches(6.0), Inches(12.1), Inches(1.0), DARK)
    tx(s, Inches(0.8), Inches(6.1), Inches(11.7), Inches(0.4), "关键问题", sz=12, c=RED, b=True)
    tx(s, Inches(0.8), Inches(6.45), Inches(11.7), Inches(0.4),
       "您的工作坊主要是哪种内容属性？  □ 知识性为主   □ 技能性为主   □ 态度性为主   □ 多种混合",
       sz=12, c=WHT)
    ftr(s)
    note(s, "【2.3 不同内容属性的 4R 差异】\n\n讲师话术 2.3.1：\n4R 的顺序和逻辑是固定的，但每个 R 的时间占比应该根据您要教的内容属性来调整。\n\n内容分三种：\n- 知识性内容：让学员知道一件事。比如什么是客户异议处理。\n- 技能性内容：让学员会用一件事。比如在客户提出价格异议时如何回应。\n- 态度性内容：让学员愿意改变态度。比如为什么要主动维护客户关系。\n\n三种内容属性的 4R 重点不同。\n\n知识性：重点 R1、R2——让学员在真实情境中识别和理解\n技能性：重点 R3、R4——深度讨论技能应用的难点，做出具体的实践承诺\n态度性：重点 R2、R3——真实情境触发情感共鸣，深度讨论帮助内化\n\n回到静远：她的工作坊是技能性 + 知识性混合，但主要是技能性。所以 R3、R4 应该是核心。")


def P28():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 28, "第二章 · 流程规划", "2.4 · Activity 2A · 我的工作坊 4R 设计")
    rc(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.5), DARK)
    tx(s, Inches(0.8), Inches(1.4), Inches(11.7), Inches(0.3),
       "实战设计  |  25 分钟个人设计 + 25 分钟小组互评",
       sz=14, c=WHT, b=True)
    rc(s, Inches(0.6), Inches(2.0), Inches(12.1), Inches(1.0), LBG)
    tx(s, Inches(0.8), Inches(2.1), Inches(11.7), Inches(0.4), "设计任务", sz=14, c=RED, b=True)
    tx(s, Inches(0.8), Inches(2.5), Inches(11.7), Inches(0.4),
       "基于您课前填写的我的引导场景，用 4R 循环设计一个完整的工作坊流程。",
       sz=12, c=DARK)
    steps = [
        ("1", "个人设计", "25 min", "每个 R 的主要活动/问题 + 时间分配"),
        ("2", "小组互评", "25 min", "3-4 人小组分享 + 反馈"),
    ]
    for i, (n, t, time, desc) in enumerate(steps):
        x = Inches(0.6 + i * 6.2)
        rc(s, x, Inches(3.2), Inches(5.9), Inches(2.5), WHT, line=LGT)
        rc(s, x, Inches(3.2), Inches(5.9), Inches(0.5), RED if i == 0 else GREEN)
        tx(s, x + Inches(0.2), Inches(3.25), Inches(0.6), Inches(0.5), n, sz=22, c=WHT, b=True)
        tx(s, x + Inches(0.9), Inches(3.3), Inches(3.0), Inches(0.4), t, sz=16, c=WHT, b=True)
        tx(s, x + Inches(4.0), Inches(3.3), Inches(1.8), Inches(0.4), time, sz=12, c=WHT, al=PP_ALIGN.RIGHT)
        tx(s, x + Inches(0.2), Inches(3.85), Inches(5.5), Inches(1.8), desc, sz=12, c=TXT)
    rc(s, Inches(0.6), Inches(6.0), Inches(12.1), Inches(1.0), DARK)
    tx(s, Inches(0.8), Inches(6.1), Inches(11.7), Inches(0.4), "互评关键问题（请用这三个问题检查别人的设计）", sz=12, c=RED, b=True)
    tx(s, Inches(0.8), Inches(6.45), Inches(11.7), Inches(0.4),
       "① R3 的时间够吗？（少于 30%，通常工作坊质量有限）  ② R4 的行动承诺够具体吗？  ③ 多少时间讲师在说，多少时间学员在说？",
       sz=11, c=WHT)
    ftr(s)
    note(s, "【2.4 Activity 2A】\n\n实战设计。\n\n讲师话术 2.4.1：\n在手册 Activity 2A，请用您课前填写的我的引导场景作为素材，设计一个完整的 4R 工作坊流程。\n\n需要包含：\n- 每个 R 的主要活动/问题（各 1-2 个）\n- 每个 R 的时间分配\n- 合计等于您工作坊的总时长\n\n我会 25 分钟后叫停。\n\n[25 分钟 · 讲师巡视 + 个别答疑]\n\n讲师话术 2.4.2：\n现在请和您的小组（3-4 人）分享您的设计。每个分享 5 分钟 + 反馈 5 分钟。\n\n请小组伙伴用三维分析和 4R 检查表来评估——\n1. R3 的时间够吗？\n2. R4 的行动承诺够具体吗？\n3. 这个设计里，有多少时间是讲师在说，有多少时间是学员在说？\n\n[25 分钟 · 讲师巡视 + 必要时叫停分享者过长的部分]\n\n巡视重点：\n- 学员设计中最常见的问题：R3 时间不够\n- 学员设计中最常见的好做法：R4 设计了具体场景\n- 学员设计中最常见的盲点：忘了学员已经学过了——做了太多 R1 的内容")
'''

with open('gen_pptx_part2.py', 'a', encoding='utf-8') as f:
    f.write(code)
print('P21-P28 OK, lines:', sum(1 for _ in open('gen_pptx_part2.py', encoding='utf-8')))
