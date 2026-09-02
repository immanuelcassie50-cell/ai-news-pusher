# -*- coding: utf-8 -*-
code = r'''


def P81():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 81, "实战案例库", "案例 1 · 销售异议处理工作坊")
    rc(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.4), DARK)
    tx(s, Inches(0.8), Inches(1.4), Inches(11.7), Inches(0.3),
       "案例 1 · 销售异议处理工作坊 · 4R 完整设计", sz=14, c=WHT, b=True)
    sections = [
        ("场景", "30 位销售，3 个月前学了《顾问式销售》课程。本次工作坊聚焦”价格异议处理”", RED),
        ("业务维度", "业务管理者希望：30 天后销售在遇到价格异议时，能用上顾问式销售的方法（不是简单降价）", GREEN),
        ("课程维度", "上次课的 8 个模块中，”异议处理”和”价值呈现”是销售最薄弱的两个模块", GOLD),
        ("学员维度", "30 位销售，1-3 年经验，对课程内容有印象但没形成习惯，工作压力大（月底冲业绩）", RED),
    ]
    for i, (t, desc, c) in enumerate(sections):
        y = Inches(2.0 + i * 0.85)
        rc(s, Inches(0.6), y, Inches(12.1), Inches(0.75), WHT, line=LGT)
        rc(s, Inches(0.6), y, Inches(0.15), Inches(0.75), c)
        tx(s, Inches(0.9), y + Inches(0.1), Inches(2.0), Inches(0.4), t, sz=13, c=DARK, b=True)
        tx(s, Inches(3.0), y + Inches(0.1), Inches(9.5), Inches(0.6), desc, sz=11, c=TXT)
    # 4R 设计
    rc(s, Inches(0.6), Inches(5.5), Inches(12.1), Inches(1.6), WHT, line=LGT)
    rc(s, Inches(0.6), Inches(5.5), Inches(12.1), Inches(0.5), DARK)
    tx(s, Inches(0.8), Inches(5.5), Inches(11.7), Inches(0.5), "4R 流程设计（4 小时）", sz=14, c=WHT, b=True, an=MSO_ANCHOR.MIDDLE)
    design = [
        ("R1 5 分钟", "价格异议 · 上次课最后那个点", GREEN),
        ("R2 20 分钟", "3 个学员分享 30 天内真实异议经历", GOLD),
        ("R3 100 分钟", "深问（4 类问题）+ 共创（6 种手法）", RED),
        ("R4 15 分钟", "下周 X 客户用 Y 方法处理 Z 异议", GREEN),
    ]
    for i, (t, desc, c) in enumerate(design):
        x = Inches(0.6 + i * 3.1)
        rc(s, x, Inches(6.1), Inches(2.9), Inches(0.9), c)
        tx(s, x + Inches(0.2), Inches(6.15), Inches(2.5), Inches(0.4), t, sz=12, c=WHT, b=True)
        tx(s, x + Inches(0.2), Inches(6.55), Inches(2.5), Inches(0.4), desc, sz=10, c=WHT)
    ftr(s)
    note(s, "【案例 1 · 销售异议处理】\n\n讲师话术 C1.1：\n我们看一个实战案例——销售异议处理工作坊。\n\n场景：30 位销售，3 个月前学了《顾问式销售》课程。本次工作坊聚焦”价格异议处理”。\n\n业务维度：业务管理者希望 30 天后销售在遇到价格异议时，能用上顾问式销售的方法（不是简单降价）。\n\n课程维度：上次课的 8 个模块中，”异议处理”和”价值呈现”是销售最薄弱的两个模块。\n\n学员维度：30 位销售，1-3 年经验，对课程内容有印象但没形成习惯，工作压力大（月底冲业绩）。\n\n4R 流程设计（4 小时）：\n- R1 5 分钟：价格异议 · 上次课最后那个点\n- R2 20 分钟：3 个学员分享 30 天内真实异议经历\n- R3 100 分钟：深问（4 类问题）+ 共创（6 种手法）\n- R4 15 分钟：下周 X 客户用 Y 方法处理 Z 异议\n\n注意 R3 是 100 分钟（占 42%），这是工作坊的核心。\n\n讲师话术 C1.2：\n这个案例的亮点是三维分析做得扎实——业务/课程/学员三个维度都有具体数据。\n\nR1 不超过 5 分钟（学员已经学过了，不需要复习）。\nR3 100 分钟是核心（深问 + 共创）。\nR4 15 分钟逼出强承诺。")


def P82():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 82, "实战案例库", "案例 1 · R3 详细问题链")
    rc(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.4), RED)
    tx(s, Inches(0.8), Inches(1.4), Inches(11.7), Inches(0.3),
       "案例 1 · R3 详细问题链 · 8 个问题", sz=14, c=WHT, b=True)
    qs = [
        ("开放式", "Q1", "李四，您刚才说您处理了价格异议——您能描述一下那次具体是什么场景吗？"),
        ("追问", "Q2", "客户听到一半打断您——那一刻您心里是什么感受？"),
        ("追问", "Q3", "您接下来做了什么？能具体说说您怎么说的吗？"),
        ("追问", "Q4", "那一刻您是怎么决定用 Z 方法的？"),
        ("比较", "Q5", "张三，您和李四的做法有什么不同？"),
        ("比较", "Q6", "您俩的做法，结果分别是什么？"),
        ("反思", "Q7", "刚才讨论的这些，对您意味着什么？"),
        ("反思", "Q8", "您接下来 7 天内，最想先做的第一件事是什么？"),
    ]
    rh = Inches(0.65)
    rx = Inches(0.6)
    ry = Inches(2.0)
    cw = [Inches(1.7), Inches(0.9), Inches(9.5)]
    for r, (cat, n, q) in enumerate(qs):
        y = ry + rh * r
        fill = LBG if r % 2 == 0 else WHT
        x = rx
        c = {"开放式”: RED, “追问”: GREEN, “比较”: GOLD, “反思”: RED}[cat]"
        rc(s, x, y, Inches(12.1), rh, fill, line=LGT)
        rc(s, x, y, Inches(0.15), rh, c)
        tx(s, x + Inches(0.3), y, Inches(1.6), rh, cat, sz=12, c=c, b=True, an=MSO_ANCHOR.MIDDLE)
        tx(s, x + Inches(2.0), y, Inches(0.8), rh, n, sz=12, c=DARK, b=True, al=PP_ALIGN.CENTER, an=MSO_ANCHOR.MIDDLE)
        tx(s, x + Inches(2.9), y, Inches(9.1), rh, q, sz=10, c=TXT, an=MSO_ANCHOR.MIDDLE)
    ftr(s)
    note(s, "【案例 1 · R3 问题链】\n\n讲师话术 C1.3：\n我们看这个案例的 R3 详细问题链——8 个问题，10 分钟：\n\n[逐条讲解]\n\nQ1 开放式：李四，您刚才说您处理了价格异议——您能描述一下那次具体是什么场景吗？\nQ2 追问：客户听到一半打断您——那一刻您心里是什么感受？\nQ3 追问：您接下来做了什么？能具体说说您怎么说的吗？\nQ4 追问：那一刻您是怎么决定用 Z 方法的？\nQ5 比较：张三，您和李四的做法有什么不同？\nQ6 比较：您俩的做法，结果分别是什么？\nQ7 反思：刚才讨论的这些，对您意味着什么？\nQ8 反思：您接下来 7 天内，最想先做的第一件事是什么？\n\n问题类型分布：\n- 开放式 1 个\n- 追问 3 个\n- 比较 2 个\n- 反思 2 个\n\n整条链 10 分钟。\n\n这个案例的 8 个问题是 4 类技术的完整组合——开放式 / 追问 / 比较 / 反思。\n\n讲师话术 C1.4：\n在演练时，请用这个案例做参考——8 个问题是一个完整的 R3 问题链。")


def P83():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 83, "实战案例库", "案例 2 · 新晋管理者工作坊")
    rc(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.4), DARK)
    tx(s, Inches(0.8), Inches(1.4), Inches(11.7), Inches(0.3),
       "案例 2 · 新晋管理者工作坊 · 给一线主管的反馈辅导", sz=14, c=WHT, b=True)
    sections = [
        ("场景", "20 位新晋主管（晋升 6 个月内），3 个月前学了《新晋管理者》课程。本次工作坊聚焦”如何给员工反馈”", RED),
        ("业务维度", "业务管理者希望：30 天后新晋主管能给员工做出”具体+可改进”的反馈（不是笼统的”你做得不错”）", GREEN),
        ("课程维度", "上次课的 6 个模块中，”反馈辅导”和”绩效面谈”是新晋主管最不擅长的两个模块", GOLD),
        ("学员维度", "20 位新晋主管，平均年龄 28 岁，对”反馈辅导”的概念理解但没实践过", RED),
    ]
    for i, (t, desc, c) in enumerate(sections):
        y = Inches(2.0 + i * 0.85)
        rc(s, Inches(0.6), y, Inches(12.1), Inches(0.75), WHT, line=LGT)
        rc(s, Inches(0.6), y, Inches(0.15), Inches(0.75), c)
        tx(s, Inches(0.9), y + Inches(0.1), Inches(2.0), Inches(0.4), t, sz=13, c=DARK, b=True)
        tx(s, Inches(3.0), y + Inches(0.1), Inches(9.5), Inches(0.6), desc, sz=11, c=TXT)
    # 4R 设计
    rc(s, Inches(0.6), Inches(5.5), Inches(12.1), Inches(1.6), WHT, line=LGT)
    rc(s, Inches(0.6), Inches(5.5), Inches(12.1), Inches(0.5), DARK)
    tx(s, Inches(0.8), Inches(5.5), Inches(11.7), Inches(0.5), "4R 流程设计（4 小时）", sz=14, c=WHT, b=True, an=MSO_ANCHOR.MIDDLE)
    design = [
        ("R1 5 分钟", "上次课”反馈”那个点", GREEN),
        ("R2 20 分钟", "3 个学员分享真实反馈经历", GOLD),
        ("R3 110 分钟", "深问 + 共创 + 实战演练", RED),
        ("R4 15 分钟", "下周 X 员工用 Y 方法做 Z 反馈", GREEN),
    ]
    for i, (t, desc, c) in enumerate(design):
        x = Inches(0.6 + i * 3.1)
        rc(s, x, Inches(6.1), Inches(2.9), Inches(0.9), c)
        tx(s, x + Inches(0.2), Inches(6.15), Inches(2.5), Inches(0.4), t, sz=12, c=WHT, b=True)
        tx(s, x + Inches(0.2), Inches(6.55), Inches(2.5), Inches(0.4), desc, sz=10, c=WHT)
    ftr(s)
    note(s, "【案例 2 · 新晋管理者】\n\n讲师话术 C2.1：\n我们看另一个案例——新晋管理者工作坊。\n\n场景：20 位新晋主管（晋升 6 个月内），3 个月前学了《新晋管理者》课程。本次工作坊聚焦”如何给员工反馈”。\n\n业务维度：业务管理者希望 30 天后新晋主管能给员工做出”具体+可改进”的反馈（不是笼统的”你做得不错”）。\n\n课程维度：上次课的 6 个模块中，”反馈辅导”和”绩效面谈”是新晋主管最不擅长的两个模块。\n\n学员维度：20 位新晋主管，平均年龄 28 岁，对”反馈辅导”的概念理解但没实践过。\n\n4R 流程设计（4 小时）：\n- R1 5 分钟：上次课”反馈”那个点\n- R2 20 分钟：3 个学员分享真实反馈经历\n- R3 110 分钟：深问 + 共创 + 实战演练\n- R4 15 分钟：下周 X 员工用 Y 方法做 Z 反馈\n\n这个案例的 R3 用了 110 分钟（占 46%），其中 60 分钟做实战演练。\n\n讲师话术 C2.2：\n新晋管理者工作坊的特点是必须有实战演练——他们理解了概念但没实践过，必须在 R3 阶段做 1-2 次实战演练。\n\n演练可以是 2 人一组——一人扮讲员工，一人扮讲主管，做 5 分钟反馈。\n\n讲师在演练中巡视，发现典型问题，统一反馈。")


def P84():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 84, "实战案例库", "案例 2 · R3 实战演练")
    rc(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.4), RED)
    tx(s, Inches(0.8), Inches(1.4), Inches(11.7), Inches(0.3),
       "案例 2 · R3 中的实战演练 · 60 分钟", sz=14, c=WHT, b=True)
    flow = [
        ("00:00-00:10", "演练介绍", "2 人一组, 一人扮讲员工, 一人扮讲主管", "让学员理解演练规则", RED),
        ("00:10-00:25", "第 1 轮演练", "15 分钟: 主管给员工做 5 分钟反馈", "学员先尝试", GREEN),
        ("00:25-00:40", "第 1 轮反馈", "5 分钟: 学员互换角色, 再做 5 分钟", "学员看到不同视角", GOLD),
        ("00:40-00:55", "讲师观察 + 统一反馈", "15 分钟: 讲师分享 3 个典型问题", "全班共同学习", RED),
        ("00:55-01:00", "过渡", "5 分钟: 回到全员", "为下一环节铺垫", GREEN),
    ]
    rx = Inches(0.6)
    ry = Inches(2.0)
    rh = Inches(0.7)
    cw = [Inches(1.6), Inches(2.5), Inches(4.5), Inches(3.5)]
    for r, row in enumerate([("时间", "环节", "内容", "目的")] + flow):
        is_h = (r == 0)
        y = ry + rh * r
        x = rx
        for c, cell in enumerate(row):
            fill = DARK if is_h else (LBG if r % 2 == 0 else WHT)
            color = WHT if is_h else TXT
            b = is_h
            sz = 10
            rc(s, x, y, cw[c], rh, fill, line=LGT)
            tx(s, x + Inches(0.1), y, cw[c] - Inches(0.2), rh, cell, sz=sz, c=color, b=b, an=MSO_ANCHOR.MIDDLE)
            x += cw[c]
    # 关键
    rc(s, Inches(0.6), Inches(5.7), Inches(12.1), Inches(1.4), WHT, line=LGT)
    rc(s, Inches(0.6), Inches(5.7), Inches(12.1), Inches(0.5), DARK)
    tx(s, Inches(0.8), Inches(5.7), Inches(11.7), Inches(0.5), "演练中讲师观察的 3 个典型问题", sz=14, c=WHT, b=True, an=MSO_ANCHOR.MIDDLE)
    obs = [
        ("问题 1", "反馈太笼统（你做得不错）", "✓ 改成具体（您这周的客户拜访，从 5 个增加到 8 个，进步很大）", RED),
        ("问题 2", "没有改进建议（你下次努力）", "✓ 改成具体（建议您每周用 30 分钟做客户分类）", GREEN),
        ("问题 3", "讲者没倾听（员工说话时主管看手机）", "✓ 改成具体（员工说完后，主管先复述一遍）", GOLD),
    ]
    for i, (n, p, fix, c) in enumerate(obs):
        y = Inches(6.3 + i * 0.27)
        tx(s, Inches(1.0), y, Inches(1.5), Inches(0.3), n, sz=11, c=c, b=True)
        tx(s, Inches(2.6), y, Inches(4.0), Inches(0.3), p, sz=10, c=TXT)
        tx(s, Inches(6.7), y, Inches(5.5), Inches(0.3), fix, sz=10, c=GREEN, b=True)
    ftr(s)
    note(s, "【案例 2 · 实战演练】\n\n讲师话术 C2.3：\n我们看 R3 中的实战演练——60 分钟：\n\n[逐条讲解]\n\n00:00-00:10  演练介绍：2 人一组，一人扮讲员工，一人扮讲主管\n00:10-00:25  第 1 轮演练：15 分钟，主管给员工做 5 分钟反馈\n00:25-00:40  第 1 轮反馈：5 分钟，学员互换角色，再做 5 分钟\n00:40-00:55  讲师观察 + 统一反馈：15 分钟，讲师分享 3 个典型问题\n00:55-01:00  过渡：5 分钟，回到全员\n\n演练中讲师观察的 3 个典型问题：\n1. 反馈太笼统（你做得不错）→ 改成具体（您这周的客户拜访，从 5 个增加到 8 个，进步很大）\n2. 没有改进建议（你下次努力）→ 改成具体（建议您每周用 30 分钟做客户分类）\n3. 讲者没倾听（员工说话时主管看手机）→ 改成具体（员工说完后，主管先复述一遍）\n\n实战演练是新晋管理者工作坊的关键——他们理解了概念但没实践过，必须在 R3 阶段做 1-2 次实战演练。\n\n讲师在演练中巡视，发现典型问题，统一反馈。")


def P85():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 85, "实战案例库", "案例 3 · 中层管理者工作坊")
    rc(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.4), DARK)
    tx(s, Inches(0.8), Inches(1.4), Inches(11.7), Inches(0.3),
       "案例 3 · 中层管理者工作坊 · 跨部门协作", sz=14, c=WHT, b=True)
    sections = [
        ("场景", "15 位中层经理（5 个部门），6 个月前学了《跨部门协作》课程。本次工作坊聚焦”如何推动跨部门项目”", RED),
        ("业务维度", "业务管理者希望：30 天后中层经理能主动发起 1 个跨部门项目，并推动完成", GREEN),
        ("课程维度", "上次课的 5 个模块中，”利益相关方分析”和”影响力策略”是中层经理最不擅长的两个模块", GOLD),
        ("学员维度", "15 位中层经理，3-10 年经验，对概念熟悉，但跨部门协作经验少（之前在单一部门）", RED),
    ]
    for i, (t, desc, c) in enumerate(sections):
        y = Inches(2.0 + i * 0.85)
        rc(s, Inches(0.6), y, Inches(12.1), Inches(0.75), WHT, line=LGT)
        rc(s, Inches(0.6), y, Inches(0.15), Inches(0.75), c)
        tx(s, Inches(0.9), y + Inches(0.1), Inches(2.0), Inches(0.4), t, sz=13, c=DARK, b=True)
        tx(s, Inches(3.0), y + Inches(0.1), Inches(9.5), Inches(0.6), desc, sz=11, c=TXT)
    # 4R 设计
    rc(s, Inches(0.6), Inches(5.5), Inches(12.1), Inches(1.6), WHT, line=LGT)
    rc(s, Inches(0.6), Inches(5.5), Inches(12.1), Inches(0.5), DARK)
    tx(s, Inches(0.8), Inches(5.5), Inches(11.7), Inches(0.5), "4R 流程设计（4 小时）", sz=14, c=WHT, b=True, an=MSO_ANCHOR.MIDDLE)
    design = [
        ("R1 5 分钟", "上次课”利益相关方”那个点", GREEN),
        ("R2 25 分钟", "5 位经理分享跨部门项目经历", GOLD),
        ("R3 110 分钟", "深问 + 共创 + 工具演练", RED),
        ("R4 20 分钟", "下周发起 1 个跨部门项目", GREEN),
    ]
    for i, (t, desc, c) in enumerate(design):
        x = Inches(0.6 + i * 3.1)
        rc(s, x, Inches(6.1), Inches(2.9), Inches(0.9), c)
        tx(s, x + Inches(0.2), Inches(6.15), Inches(2.5), Inches(0.4), t, sz=12, c=WHT, b=True)
        tx(s, x + Inches(0.2), Inches(6.55), Inches(2.5), Inches(0.4), desc, sz=10, c=WHT)
    ftr(s)
    note(s, "【案例 3 · 中层管理者】\n\n讲师话术 C3.1：\n我们看第三个案例——中层管理者工作坊。\n\n场景：15 位中层经理（5 个部门），6 个月前学了《跨部门协作》课程。本次工作坊聚焦”如何推动跨部门项目”。\n\n业务维度：业务管理者希望 30 天后中层经理能主动发起 1 个跨部门项目，并推动完成。\n\n课程维度：上次课的 5 个模块中，”利益相关方分析”和”影响力策略”是中层经理最不擅长的两个模块。\n\n学员维度：15 位中层经理，3-10 年经验，对概念熟悉，但跨部门协作经验少（之前在单一部门）。\n\n4R 流程设计（4 小时）：\n- R1 5 分钟：上次课”利益相关方”那个点\n- R2 25 分钟：5 位经理分享跨部门项目经历\n- R3 110 分钟：深问 + 共创 + 工具演练\n- R4 20 分钟：下周发起 1 个跨部门项目\n\n这个案例的 R3 用了 110 分钟（占 46%），其中 50 分钟做工具演练（利益相关方分析图）。\n\n讲师话术 C3.2：\n中层管理者工作坊的特点是必须有工具演练——他们理解了概念但不会用工具（利益相关方分析图、影响力策略矩阵等）。\n\n工具演练可以是 4 人一组，画出 1 个真实项目的利益相关方图。\n\n讲师在演练中巡视，帮助学员使用工具。")


def P86():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 86, "实战案例库", "案例 3 · 利益相关方分析图")
    rc(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.4), RED)
    tx(s, Inches(0.8), Inches(1.4), Inches(11.7), Inches(0.3),
       "案例 3 · 利益相关方分析图 · 工具演练", sz=14, c=WHT, b=True)
    # 二维矩阵
    rc(s, Inches(0.6), Inches(2.0), Inches(12.1), Inches(5.0), WHT, line=LGT)
    # 坐标轴
    tx(s, Inches(0.7), Inches(2.3), Inches(3.0), Inches(0.4), "高 ↑", sz=11, c=GRY, b=True)
    tx(s, Inches(0.7), Inches(6.5), Inches(3.0), Inches(0.4), "低 ↓", sz=11, c=GRY, b=True)
    tx(s, Inches(0.7), Inches(2.7), Inches(3.0), Inches(0.4), "影响力（对项目成功的影响）", sz=12, c=DARK, b=True)
    # 横轴
    tx(s, Inches(3.0), Inches(7.0), Inches(2.0), Inches(0.4), "← 弱", sz=11, c=GRY, b=True)
    tx(s, Inches(9.5), Inches(7.0), Inches(2.0), Inches(0.4), "强 →", sz=11, c=GRY, b=True)
    tx(s, Inches(5.0), Inches(7.0), Inches(4.0), Inches(0.4), "利益相关方对我的支持度", sz=12, c=DARK, b=True, al=PP_ALIGN.CENTER)
    # 4个象限
    quads = [
        (3.5, 2.7, 4.0, 2.0, "重点管理", "影响力高 + 支持度强\n投入最多时间", RED),
        (7.5, 2.7, 4.0, 2.0, "重点说服", "影响力高 + 支持度弱\n制定说服策略", GREEN),
        (3.5, 4.7, 4.0, 2.0, "重点观察", "影响力低 + 支持度强\n保持沟通", GOLD),
        (7.5, 4.7, 4.0, 2.0, "次要管理", "影响力低 + 支持度弱\n监控即可", RED),
    ]
    for x, y, w, h, t, desc, c in quads:
        rc(s, Inches(x), Inches(y), Inches(w), Inches(h), LBG, line=c, lw=Pt(2))
        tx(s, Inches(x), Inches(y + 0.1), Inches(w), Inches(0.4), t, sz=12, c=c, b=True, al=PP_ALIGN.CENTER, an=MSO_ANCHOR.MIDDLE)
        tx(s, Inches(x), Inches(y + 0.55), Inches(w), Inches(0.6), desc, sz=10, c=TXT, al=PP_ALIGN.CENTER, an=MSO_ANCHOR.MIDDLE)
    ftr(s)
    note(s, "【案例 3 · 利益相关方分析图】\n\n讲师话术 C3.3：\n我们看 R3 中的工具演练——利益相关方分析图。\n\n矩阵说明：\n- 横轴：利益相关方对我的支持度（弱→强）\n- 纵轴：影响力，对项目成功的影响（低→高）\n\n4 个象限：\n1. 重点管理：影响力高 + 支持度强\n   投入最多时间\n2. 重点说服：影响力高 + 支持度弱\n   制定说服策略\n3. 重点观察：影响力低 + 支持度强\n   保持沟通\n4. 次要管理：影响力低 + 支持度弱\n   监控即可\n\n讲师话术 C3.4：\n工具演练的具体步骤：\n1. 4 人一组\n2. 每人列出 1 个真实项目的所有利益相关方（5-10 个）\n3. 把每个利益相关方放到 4 个象限里\n4. 讨论：对于”重点说服”象限的人，我们怎么制定说服策略？\n5. 每人选 1 个”重点说服”对象，制定说服计划\n\n工具演练让学员从抽象概念走向具体应用——这是中层管理者工作坊的关键。")
'''
with open('gen_pptx_part2.py', 'a', encoding='utf-8') as f:
    f.write(code)
print('P81-P86 OK, lines:', sum(1 for _ in open('gen_pptx_part2.py', encoding='utf-8')))
