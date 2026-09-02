# -*- coding: utf-8 -*-
code = r'''


def P68():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 68, "第五章 · 训后跟进", "5.5 · 第五章小结")
    rc(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.4), DARK)
    tx(s, Inches(0.8), Inches(1.4), Inches(11.7), Inches(0.3), "第五章小结", sz=14, c=WHT, b=True)
    points = [
        ("训后跟进真相", "工作坊 30 天后 70% 学员不用新方法。3 个原因：环境阻力 / 没有触发器 / 没有反馈环。", RED),
        ("跟进四法", "30 天打卡（每日触发）+ 90 天同伴互助（反馈环）+ 工作场景应用日志（过程记录）+ 30 天实施报告（总结）。", GOLD),
        ("静远案例", "30 天跟进时间表 / 8 个节点 / 4 种形式。效果：打卡率 82%、满意度 9.2/10、业绩 +18%。", GREEN),
        ("承诺机制", "个人承诺 + 小组互助承诺。写下比口头强 10 倍，小组比个人强 3 倍。", RED),
    ]
    for i, (t, desc, c) in enumerate(points):
        y = Inches(2.0 + i * 1.1)
        rc(s, Inches(0.6), y, Inches(12.1), Inches(1.0), WHT, line=LGT)
        rc(s, Inches(0.6), y, Inches(0.15), Inches(1.0), c)
        tx(s, Inches(0.9), y + Inches(0.15), Inches(2.5), Inches(0.4), t, sz=14, c=DARK, b=True)
        tx(s, Inches(3.6), y + Inches(0.15), Inches(9.0), Inches(0.8), desc, sz=11, c=TXT)
    rc(s, Inches(0.6), Inches(6.5), Inches(12.1), Inches(0.6), DARK)
    tx(s, Inches(0.8), Inches(6.55), Inches(11.7), Inches(0.5), "核心观点", sz=12, c=RED, b=True, an=MSO_ANCHOR.MIDDLE)
    tx(s, Inches(0.8), Inches(6.85), Inches(11.7), Inches(0.3),
       "工作坊结束 = 学习开始。30% 工作坊设计 + 70% 跟进。讲师 = 30 天陪跑者，不是 4 小时表演者。",
       sz=11, c=WHT)
    ftr(s)
    note(s, "【5.5 小结】\n\n讲师话术 5.5.1：\n第五章小结：\n\n1. 训后跟进真相：3 个原因——环境阻力/没有触发器/没有反馈环\n2. 跟进四法：打卡/互助/日志/报告\n3. 静远案例：30 天时间表 + 4 种形式\n4. 承诺机制：个人 + 小组\n\n核心观点：\n- 工作坊结束 = 学习开始\n- 30% 工作坊设计 + 70% 跟进\n- 讲师 = 30 天陪跑者，不是 4 小时表演者\n\n下面我们进入整体复盘。")


def P69():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 69, "第六章 · 收官", "6.1 · 4R 在全程中的应用")
    rc(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.4), DARK)
    tx(s, Inches(0.8), Inches(1.4), Inches(11.7), Inches(0.3),
       "4R 不仅是工作坊的框架，也是整个学习项目的框架", sz=14, c=WHT, b=True)
    # 4R 全程应用
    phases = [
        ("课程设计阶段", "R1", "回顾上一次工作坊 / 上一次课程的内容", "为新工作坊做铺垫", RED),
        ("工作坊开场", "R1+R2", "激活记忆 + 连接现实场景", "让学员进入状态", GREEN),
        ("工作坊核心", "R3", "深度讨论产生洞见", "从知道到洞见", GOLD),
        ("工作坊结尾", "R4", "具体行动承诺", "从洞见到行动", RED),
        ("训后 7 天", "R1", "复盘 7 天应用 + 激活下一步", "持续 30 天打卡", GREEN),
        ("训后 30 天", "R2+R3", "同伴互助 + 实施报告", "从应用到内化", GOLD),
        ("训后 90 天", "R4", "新承诺 + 持续改进", "从内化到习惯", RED),
    ]
    rh = Inches(0.7)
    rx = Inches(0.6)
    ry = Inches(2.0)
    cw = [Inches(2.5), Inches(1.5), Inches(4.0), Inches(4.1)]
    for r, (t, r_, desc, why, c) in enumerate(phases):
        y = ry + rh * r
        fill = LBG if r % 2 == 0 else WHT
        x = rx
        rc(s, x, y, Inches(12.1), rh, fill, line=LGT)
        rc(s, x, y, Inches(0.15), rh, c)
        tx(s, x + Inches(0.3), y, Inches(2.4), rh, t, sz=12, c=DARK, b=True, an=MSO_ANCHOR.MIDDLE)
        tx(s, x + Inches(2.8), y, Inches(1.3), rh, r_, sz=14, c=c, b=True, al=PP_ALIGN.CENTER, an=MSO_ANCHOR.MIDDLE)
        tx(s, x + Inches(4.2), y, Inches(3.9), rh, desc, sz=10, c=TXT, an=MSO_ANCHOR.MIDDLE)
        tx(s, x + Inches(8.2), y, Inches(3.8), rh, "→ “ + why, sz=10, c=GRY, an=MSO_ANCHOR.MIDDLE)"
    ftr(s)
    note(s, "【6.1 4R 全程应用】\n\n讲师话术 6.1.1：\n我们最后一起来看：4R 不只是工作坊的框架，也是整个学习项目的框架。\n\n课程设计阶段（R1）：回顾上一次工作坊/上一次课程的内容，为新工作坊做铺垫\n工作坊开场（R1+R2）：激活记忆 + 连接现实场景，让学员进入状态\n工作坊核心（R3）：深度讨论产生洞见，从知道到洞见\n工作坊结尾（R4）：具体行动承诺，从洞见到行动\n训后 7 天（R1）：复盘 7 天应用 + 激活下一步，持续 30 天打卡\n训后 30 天（R2+R3）：同伴互助 + 实施报告，从应用到内化\n训后 90 天（R4）：新承诺 + 持续改进，从内化到习惯\n\n关键洞察：4R 在整个学习项目周期中循环出现。\n\n第一次循环：工作坊中（4 小时）\n第二次循环：训后 30 天（30 天）\n第三次循环：训后 90 天（60 天）\n\n每一次循环都是从 R1 到 R4，但每次循环的具体内容不同。\n\n这是工作坊的复利效应——一次工作坊，加上 30 天跟进，加上 90 天跟进，效果是 4 小时工作坊的 3-5 倍。")


def P70():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 70, "第六章 · 收官", "6.2 · 三核技能 · 综合应用")
    rc(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.4), DARK)
    tx(s, Inches(0.8), Inches(1.4), Inches(11.7), Inches(0.3), "三核技能 · 综合应用图", sz=14, c=WHT, b=True)
    # 三核图
    rc(s, Inches(1.0), Inches(2.0), Inches(11.3), Inches(4.7), WHT, line=LGT)
    rc(s, Inches(1.0), Inches(2.0), Inches(11.3), Inches(0.5), DARK)
    tx(s, Inches(1.0), Inches(2.0), Inches(11.3), Inches(0.5),
       "点燃 / 深问 / 共创 · 在工作坊 4 小时中的分布", sz=14, c=WHT, b=True, an=PP_ALIGN.CENTER, an=MSO_ANCHOR.MIDDLE)
    # 三核位置
    sk = [
        ("点燃", "0-30 分钟（开场）", "5 种方法：反差/提问/体验/共鸣/戏剧", RED, 0.5),
        ("深问", "30-180 分钟（R2+R3）", "4 类技术：开放式/追问/比较/反思", GREEN, 3.0),
        ("共创", "180-240 分钟（R3+R4）", "6 种手法：轮流向/接力/辩论/补全/投票/重述", GOLD, 5.5),
    ]
    for n, t, desc, c, x_in in sk:
        x = Inches(1.5 + x_in)
        rc(s, x, Inches(2.8), Inches(3.0), Inches(3.7), c)
        tx(s, x, Inches(2.95), Inches(3.0), Inches(0.5), n, sz=24, c=WHT, b=True, al=PP_ALIGN.CENTER, an=MSO_ANCHOR.MIDDLE)
        tx(s, x, Inches(3.55), Inches(3.0), Inches(0.4), t, sz=11, c=WHT, b=True, al=PP_ALIGN.CENTER, an=MSO_ANCHOR.MIDDLE)
        tx(s, x, Inches(4.0), Inches(3.0), Inches(0.6), desc, sz=10, c=WHT, al=PP_ALIGN.CENTER, an=MSO_ANCHOR.MIDDLE)
    # 时间
    rc(s, Inches(1.5), Inches(6.4), Inches(10.3), Inches(0.4), LBG)
    for i, t in enumerate(["0min", "30min", "60min", "90min", "120min", "150min", "180min", "210min", "240min”]):"
        x = Inches(1.5 + i * 1.29)
        tx(s, x, Inches(6.4), Inches(1.2), Inches(0.4), t, sz=9, c=GRY, al=PP_ALIGN.CENTER, an=MSO_ANCHOR.MIDDLE)
    ftr(s)
    note(s, "【6.2 三核技能综合应用】\n\n讲师话术 6.2.1：\n我们把三核技能在工作坊 4 小时中的分布画出来——\n\n点燃：0-30 分钟（开场）\n- 5 种方法：反差/提问/体验/共鸣/戏剧\n\n深问：30-180 分钟（R2+R3）\n- 4 类技术：开放式/追问/比较/反思\n\n共创：180-240 分钟（R3+R4）\n- 6 种手法：轮流向/接力/辩论/补全/投票/重述\n\n关键洞察：\n- 点燃是开胃菜（前 30 分钟决定工作坊的基调）\n- 深问是主菜（中间 150 分钟是工作坊的核心）\n- 共创是甜点（最后 60 分钟是工作坊的收官）\n\n三核技能的顺序不能错——先点燃，再深问，最后共创。\n\n如果顺序错了：先共创再点燃，学员会感到工作坊开头平淡、结尾热闹；先深问再点燃，学员会感到工作坊一头雾水。")


def P71():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 71, "第六章 · 收官", "6.3 · 工作坊全流程模板")
    rc(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.4), DARK)
    tx(s, Inches(0.8), Inches(1.4), Inches(11.7), Inches(0.3), "工作坊全流程模板 · 4 小时", sz=14, c=WHT, b=True)
    flow = [
        ("00:00-00:05", "开场", "点燃（5 种方法选 1-2 种）", "破冰 30 秒 + 钩子 60 秒 + 引入主题 60 秒 + 规则 30 秒", RED),
        ("00:05-00:15", "R1 回顾", "激活记忆", "经历回忆 / 亮点回顾 / 反例识别", GREEN),
        ("00:15-00:30", "R2 现实", "连接真实场景", "真实案例 / 场景标签 / 现状盘点", GOLD),
        ("00:30-01:30", "R3 共创（1）", "深问 + 共创", "开放式 → 追问 → 比较（4 类问题）", RED),
        ("01:30-01:45", "中场休息", "—", "15 分钟休息 + 学员自由交流", GREEN),
        ("01:45-03:00", "R3 共创（2）", "深问 + 共创", "开放式 → 追问 → 比较 → 反思", GOLD),
        ("03:00-03:30", "R4 行动", "具体承诺", "逼问 4 个 W（场景/对象/动作/时间）", RED),
        ("03:30-03:50", "总结 + 跟进", "30 天打卡 + 同伴互助", "展示跟进时间表 + 让学员选择", GREEN),
        ("03:50-04:00", "结尾", "金句 + 致谢", "一个让学员带走的话", GOLD),
    ]
    rh = Inches(0.5)
    rx = Inches(0.6)
    ry = Inches(2.0)
    cw = [Inches(1.6), Inches(1.8), Inches(2.0), Inches(6.7)]
    for r, row in enumerate([("时间", "阶段", "核心技能", "活动内容")] + flow):
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
    ftr(s)
    note(s, "【6.3 全流程模板】\n\n讲师话术 6.3.1：\n我们把工作坊的 4 小时流程做成一个完整模板——\n\n[逐条讲解]\n\n00:00-00:05  开场：点燃（5 种方法选 1-2 种）\n00:05-00:15  R1 回顾：激活记忆\n00:15-00:30  R2 现实：连接真实场景\n00:30-01:30  R3 共创（1）：深问 + 共创\n01:30-01:45  中场休息\n01:45-03:00  R3 共创（2）：深问 + 共创\n03:00-03:30  R4 行动：具体承诺\n03:50-04:00  结尾：金句 + 致谢\n\n注意：\n- R3 是工作坊的核心（2.5 小时中的 1.5 小时 = 60%）\n- 4R 的时间分配：R1 10% / R2 15% / R3 60% / R4 15%\n- 这个模板可以根据您的工作坊时长调整\n\n如果您的工坊是 3 小时：\n- R1 0:00-0:10（10 分钟）\n- R2 0:10-0:30（20 分钟）\n- R3 0:30-2:00（90 分钟）\n- R4 2:00-2:30（30 分钟）\n- 收尾 2:30-3:00（30 分钟）\n\n如果您的工坊是 2 小时：\n- R1 0:00-0:10（10 分钟）\n- R2 0:10-0:20（10 分钟）\n- R3 0:20-1:30（70 分钟）\n- R4 1:30-1:50（20 分钟）\n- 收尾 1:50-2:00（10 分钟）\n\nR3 永远是最长的环节。")


def P72():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 72, "第六章 · 收官", "6.4 · 静远案例 · 完整流程")
    rc(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.4), RED)
    tx(s, Inches(0.8), Inches(1.4), Inches(11.7), Inches(0.3),
       "静远的工作坊完整流程（4 小时）", sz=14, c=WHT, b=True)
    flow = [
        ("00:00-00:05", "开场", "反差 + 共鸣", "今天不讲新东西，就讲您用了多少", RED),
        ("00:05-00:20", "R1", "经历回忆 + 亮点回顾", "15 分钟，4 个问题快速过", GREEN),
        ("00:20-00:50", "R2", "真实案例", "3 个学员分享 30 天内用新方法的真实案例", GOLD),
        ("00:50-02:00", "R3 (1)", "深问 + 共创（1）", "对 3 个案例做 4 类问题讨论", RED),
        ("02:00-02:15", "休息", "—", "15 分钟休息", GREEN),
        ("02:15-03:15", "R3 (2)", "深问 + 共创（2）", "迁移到新场景 + 提炼原则", GOLD),
        ("03:15-03:45", "R4", "具体承诺", "4 个 W + 同伴见证", RED),
        ("03:45-03:55", "跟进介绍", "30 天打卡 + 同伴互助 + 实施报告", "展示时间表 + 学员选小组", GREEN),
        ("03:55-04:00", "结尾", "金句", "您的工作不是解决问题，而是让问题不再是问题", GOLD),
    ]
    rh = Inches(0.55)
    rx = Inches(0.6)
    ry = Inches(2.0)
    cw = [Inches(1.6), Inches(1.5), Inches(3.0), Inches(6.0)]
    for r, row in enumerate([("时间", "阶段", "核心技能", "活动内容")] + flow):
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
    ftr(s)
    note(s, "【6.4 静远完整流程】\n\n讲师话术 6.4.1：\n我们看静远的工作坊完整流程——\n\n[逐条讲解]\n\n00:00-00:05  开场：反差 + 共鸣（今天不讲新东西，就讲您用了多少）\n00:05-00:20  R1：经历回忆 + 亮点回顾（15 分钟，4 个问题快速过）\n00:20-00:50  R2：真实案例（3 个学员分享 30 天内用新方法的真实案例）\n00:50-02:00  R3 (1)：深问 + 共创（对 3 个案例做 4 类问题讨论）\n02:00-02:15  休息（15 分钟）\n02:15-03:15  R3 (2)：深问 + 共创（迁移到新场景 + 提炼原则）\n03:15-03:45  R4：具体承诺（4 个 W + 同伴见证）\n03:45-03:55  跟进介绍：30 天打卡 + 同伴互助 + 实施报告\n03:55-04:00  结尾：金句（您的工作不是解决问题，而是让问题不再是问题）\n\n静远的工作坊有几个特点：\n1. 开场 5 分钟抓人（不讲新东西 + 共鸣）\n2. R1 不超过 15 分钟（不浪费时间）\n3. R3 占 2 小时（核心环节）\n4. 跟进介绍用 10 分钟（让学员知道有 30 天陪跑）\n5. 结尾有金句（让学员带走一句话）")


def P73():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 73, "第六章 · 收官", "6.5 · 常见工作坊问题 · 自检清单")
    rc(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.4), DARK)
    tx(s, Inches(0.8), Inches(1.4), Inches(11.7), Inches(0.3), "工作坊设计自检清单", sz=14, c=WHT, b=True)
    items = [
        ("三维度分析", "我做了业务/课程/学员三个维度的分析吗？"),
        ("R3 时间占比", "R3 的时间占工作坊的 40% 以上吗？"),
        ("5 种开场方法", "我为开场选择了 1-2 种方法吗？"),
        ("4 类提问技术", "我为 R3 设计了 5-8 个问题吗？"),
        ("共创引导手法", "我的 R3 中至少用了 3 种共创手法吗？"),
        ("30 天跟进", "我设计了 30 天跟进计划吗？"),
        ("承诺机制", "我有承诺机制（个人+小组）吗？"),
        ("静远案例对照", "我对照过静远的工作坊，发现了自己的差距吗？"),
    ]
    rh = Inches(0.55)
    rx = Inches(0.6)
    ry = Inches(2.0)
    cw = [Inches(4.0), Inches(8.1)]
    for r, (t, q) in enumerate(items):
        y = ry + rh * r
        fill = LBG if r % 2 == 0 else WHT
        x = rx
        rc(s, x, y, Inches(12.1), rh, fill, line=LGT)
        rc(s, x, y, Inches(0.15), rh, [RED, GREEN, GOLD][r % 3])
        tx(s, x + Inches(0.3), y, Inches(3.8), rh, t, sz=12, c=DARK, b=True, an=MSO_ANCHOR.MIDDLE)
        tx(s, x + Inches(4.2), y, Inches(0.5), rh, "□", sz=14, c=GRY, b=True, an=MSO_ANCHOR.MIDDLE)
        tx(s, x + Inches(4.8), y, Inches(7.2), rh, q, sz=11, c=TXT, an=MSO_ANCHOR.MIDDLE)
    ftr(s)
    note(s, "【6.5 自检清单】\n\n讲师话术 6.5.1：\n在结束之前，请用这个自检清单来评估您设计的工作坊——\n\n1. 三维度分析：我做了业务/课程/学员三个维度的分析吗？\n2. R3 时间占比：R3 的时间占工作坊的 40% 以上吗？\n3. 5 种开场方法：我为开场选择了 1-2 种方法吗？\n4. 4 类提问技术：我为 R3 设计了 5-8 个问题吗？\n5. 共创引导手法：我的 R3 中至少用了 3 种共创手法吗？\n6. 30 天跟进：我设计了 30 天跟进计划吗？\n7. 承诺机制：我有承诺机制（个人+小组）吗？\n8. 静远案例对照：我对照过静远的工作坊，发现了自己的差距吗？\n\n如果有任何一个问题答”否”或”不确定”，请在今天的工作坊后回到对应的章节再读一遍。\n\n这个自检清单是您回到工作岗位后的行动指南。")
'''
with open('gen_pptx_part2.py', 'a', encoding='utf-8') as f:
    f.write(code)
print('P68-P73 OK, lines:', sum(1 for _ in open('gen_pptx_part2.py', encoding='utf-8')))
