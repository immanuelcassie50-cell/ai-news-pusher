# -*- coding: utf-8 -*-
code = r'''


def P119():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 119, "收官", "工作坊设计 · 7 件必做之事")
    rc(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.4), DARK)
    tx(s, Inches(0.8), Inches(1.4), Inches(11.7), Inches(0.3),
       "工作坊设计 · 7 件必做之事", sz=14, c=WHT, b=True)
    things = [
        ("1", "三维分析", "业务维度 / 课程维度 / 学员维度", "30 分钟", RED),
        ("2", "4R 设计", "R1 5 分钟 + R2 25 分钟 + R3 100 分钟 + R4 15 分钟", "60 分钟", GREEN),
        ("3", "R3 活动设计", "深问 + 共创 + 1 个核心活动（演练/角色/起草/策划）", "60 分钟", GOLD),
        ("4", "R3 问题设计", "开放式 2-4 + 追问 5-8 + 比较 2-3 + 反思 1-2", "30 分钟", RED),
        ("5", "5 种开场", "选 1-2 种开场 + 写出前 5 分钟话术", "30 分钟", GREEN),
        ("6", "30 天跟进", "打卡 + 互助 + 实施报告", "30 分钟", GOLD),
        ("7", "演练调整", "找 2 位讲师演练 30 分钟 + 调整", "60 分钟", RED),
    ]
    rh = Inches(0.7)
    rx = Inches(0.6)
    ry = Inches(2.0)
    cw = [Inches(0.7), Inches(2.5), Inches(5.5), Inches(1.5), Inches(1.9)]
    for r, (n, t, desc, time, c) in enumerate(things):
        y = ry + rh * r
        fill = LBG if r % 2 == 0 else WHT
        x = rx
        rc(s, x, y, Inches(12.1), rh, fill, line=LGT)
        rc(s, x, y, Inches(0.15), rh, c)
        tx(s, x + Inches(0.3), y, Inches(0.6), rh, n, sz=18, c=c, b=True, al=PP_ALIGN.CENTER, an=MSO_ANCHOR.MIDDLE)
        tx(s, x + Inches(1.0), y, Inches(2.4), rh, t, sz=12, c=DARK, b=True, an=MSO_ANCHOR.MIDDLE)
        tx(s, x + Inches(3.5), y, Inches(5.4), rh, "→ “ + desc, sz=10, c=TXT, an=MSO_ANCHOR.MIDDLE)"
        tx(s, x + Inches(9.0), y, Inches(3.0), rh, time, sz=11, c=c, b=True, al=PP_ALIGN.CENTER, an=MSO_ANCHOR.MIDDLE)
    rc(s, Inches(0.6), Inches(7.0), Inches(12.1), Inches(0.5), DARK)
    tx(s, Inches(0.8), Inches(7.0), Inches(11.7), Inches(0.5),
       "总时间 4.5 小时 · 您的 1 个完整工作坊设计", sz=14, c=WHT, b=True, an=MSO_ANCHOR.MIDDLE)
    ftr(s)
    note(s, "【7 件必做之事】\n\n讲师话术 Z1：\n工作坊设计的 7 件必做之事——\n\n1. 三维分析（业务 / 课程 / 学员）· 30 分钟\n2. 4R 设计（R1 5 + R2 25 + R3 100 + R4 15）· 60 分钟\n3. R3 活动设计（深问 + 共创 + 1 个核心活动）· 60 分钟\n4. R3 问题设计（开放式 2-4 + 追问 5-8 + 比较 2-3 + 反思 1-2）· 30 分钟\n5. 5 种开场（选 1-2 种 + 写出前 5 分钟话术）· 30 分钟\n6. 30 天跟进（打卡 + 互助 + 实施报告）· 30 分钟\n7. 演练调整（找 2 位讲师演练 30 分钟）· 60 分钟\n\n讲师话术 Z2：\n总时间：30 + 60 + 60 + 30 + 30 + 30 + 60 = 300 分钟 = 5 小时。\n\n按 4.5 小时计算（去掉 1 项重复）：\n- 今天 4 小时：1-6\n- 明天 30 分钟：7（演练）\n\n讲师话术 Z3：\n4.5 小时后，您就有 1 个完整的工作坊设计——\n- 有三维分析\n- 有 4R 时间分配\n- 有 R3 活动设计\n- 有 R3 问题清单\n- 有开场话术\n- 有跟进计划\n- 有演练反馈\n\n讲师话术 Z4：\n这是讲师从”想法”到”可交付物”的关键——\n\n如果只做 1-3，您是新手讲师\n如果做到 1-6，您是熟练讲师\n如果做到 1-7 + 30 天跟进，您是进阶讲师\n\n请大家务必在 30 天内完成 1-7 + 30 天跟进。")


def P120():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 120, "收官", "讲师 · 知行合一")
    rc(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.4), DARK)
    tx(s, Inches(0.8), Inches(1.4), Inches(11.7), Inches(0.3),
       "讲师 · 知行合一", sz=14, c=WHT, b=True)
    rc(s, Inches(0.6), Inches(2.0), Inches(6.0), Inches(5.0), WHT, line=LGT)
    rc(s, Inches(0.6), Inches(2.0), Inches(6.0), Inches(0.5), RED)
    tx(s, Inches(0.8), Inches(2.0), Inches(5.6), Inches(0.5), "讲师之”知”", sz=18, c=WHT, b=True, an=MSO_ANCHOR.MIDDLE)
    zhi = [
        "1. 4R 工作坊设计（R1/R2/R3/R4）",
        "2. 5 种开场方法（图片/数据/案例/问题/体验）",
        "3. 4 类提问技术（开放式/追问/比较/反思）",
        "4. 6 种共创手法（轮流向/接力/辩论/补全/投票/重述）",
        "5. 4 种跟进方法（打卡/互助/答疑/报告）",
        "6. 8 个完整案例的 4R 模板",
        "7. 5 种工作坊失败的避坑指南",
        "8. 5 个附录速查表",
    ]
    for i, z in enumerate(zhi):
        y = Inches(2.7 + i * 0.5)
        tx(s, Inches(0.8), y, Inches(5.6), Inches(0.4), z, sz=11, c=TXT)
    rc(s, Inches(6.8), Inches(2.0), Inches(6.0), Inches(5.0), WHT, line=LGT)
    rc(s, Inches(6.8), Inches(2.0), Inches(6.0), Inches(0.5), GREEN)
    tx(s, Inches(7.0), Inches(2.0), Inches(5.6), Inches(0.5), "讲师之”行”", sz=18, c=WHT, b=True, an=MSO_ANCHOR.MIDDLE)
    xing = [
        "1. 1 个月内完成 1 个工作坊设计（4.5 小时）",
        "2. 找 2 位讲师演练 30 分钟（明天）",
        "3. 在工作坊前 1 周发承诺（7 天内）",
        "4. 给学员讲 1 次完整的工作坊（30 天内）",
        "5. 工作坊后 4 小时内发第 1 课",
        "6. 30 天打卡 + 同伴互助 + 实施报告",
        "7. 给业务管理者发 1 份 30 天实施报告",
        "8. 每年讲 3-5 次工作坊，迭代您的设计",
    ]
    for i, x in enumerate(xing):
        y = Inches(2.7 + i * 0.5)
        tx(s, Inches(7.0), y, Inches(5.6), Inches(0.4), x, sz=11, c=TXT)
    rc(s, Inches(0.6), Inches(7.1), Inches(12.2), Inches(0.4), DARK)
    tx(s, Inches(0.8), Inches(7.1), Inches(11.7), Inches(0.4),
       "讲师的”知行合一”：8 个”知” + 8 个”行” = 1 位合格的工作坊讲师", sz=14, c=WHT, b=True, an=MSO_ANCHOR.MIDDLE)
    ftr(s)
    note(s, "【讲师 · 知行合一】\n\n讲师话术 ZX1：\n讲师的”知”——\n\n1. 4R 工作坊设计（R1/R2/R3/R4）\n2. 5 种开场方法（图片/数据/案例/问题/体验）\n3. 4 类提问技术（开放式/追问/比较/反思）\n4. 6 种共创手法（轮流向/接力/辩论/补全/投票/重述）\n5. 4 种跟进方法（打卡/互助/答疑/报告）\n6. 8 个完整案例的 4R 模板\n7. 5 种工作坊失败的避坑指南\n8. 5 个附录速查表\n\n讲师话术 ZX2：\n讲师的”行”——\n\n1. 1 个月内完成 1 个工作坊设计（4.5 小时）\n2. 找 2 位讲师演练 30 分钟（明天）\n3. 在工作坊前 1 周发承诺（7 天内）\n4. 给学员讲 1 次完整的工作坊（30 天内）\n5. 工作坊后 4 小时内发第 1 课\n6. 30 天打卡 + 同伴互助 + 实施报告\n7. 给业务管理者发 1 份 30 天实施报告\n8. 每年讲 3-5 次工作坊，迭代您的设计\n\n讲师话术 ZX3：\n讲师的”知行合一”——\n\n8 个”知” + 8 个”行” = 1 位合格的工作坊讲师\n\n请大家对照——\n- 您的”知”是否 8 项都掌握了？\n- 您的”行”是否 8 项都做到了？\n\n如果”知” < 8 项，回去再学习\n如果”行” < 8 项，回去立刻执行\n\n讲师话术 ZX4：\n这就是本工作坊的核心理念——讲师的工作不是”教”，而是”做”。\n\n讲师的”知行合一”，让学员看到”原来学习落地是这样的”——这就是最好的教学。")


def P121():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 121, "最终彩蛋", "讲师 · 终极 5 问")
    rc(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.4), DARK)
    tx(s, Inches(0.8), Inches(1.4), Inches(11.7), Inches(0.3),
       "讲师 · 终极 5 问", sz=14, c=WHT, b=True)
    questions = [
        ("问题 1", "我为什么要当讲师？", "是为了”教”别人，还是为了”成就”别人？", RED),
        ("问题 2", "我设计工作坊时，最看重的是什么？", "是”讲得精彩”，还是”学员做到”？", GREEN),
        ("问题 3", "学员工作坊后不用我的方法，我怎么办？", "我会不会做 30 天跟进？", GOLD),
        ("问题 4", "30 天后学员改变了吗？", "我用业务管理者的语言去问，而不是用讲师的语言。", RED),
        ("问题 5", "如果重来一次，我会怎么做？", "我会减少”讲”，增加”问” + “练” + “跟”。", GREEN),
    ]
    rh = Inches(1.05)
    rx = Inches(0.6)
    ry = Inches(2.0)
    for i, (n, q, ans, c) in enumerate(questions):
        y = ry + rh * i
        rc(s, rx, y, Inches(12.1), rh, WHT, line=LGT)
        rc(s, rx, y, Inches(0.15), rh, c)
        tx(s, rx + Inches(0.3), y + Inches(0.1), Inches(1.5), Inches(0.4), n, sz=14, c=c, b=True)
        tx(s, rx + Inches(1.8), y + Inches(0.1), Inches(10.0), Inches(0.4), q, sz=12, c=DARK, b=True)
        tx(s, rx + Inches(1.8), y + Inches(0.55), Inches(10.0), Inches(0.4), "→ “ + ans, sz=11, c=GRY)"
    ftr(s)
    note(s, "【讲师 · 终极 5 问】\n\n讲师话术 F5.1：\n讲师的终极 5 问——\n\n问题 1：我为什么要当讲师？\n是为了”教”别人，还是为了”成就”别人？\n\n问题 2：我设计工作坊时，最看重的是什么？\n是”讲得精彩”，还是”学员做到”？\n\n问题 3：学员工作坊后不用我的方法，我怎么办？\n我会不会做 30 天跟进？\n\n问题 4：30 天后学员改变了吗？\n我用业务管理者的语言去问，而不是用讲师的语言。\n\n问题 5：如果重来一次，我会怎么做？\n我会减少”讲”，增加”问” + “练” + “跟”。\n\n讲师话术 F5.2：\n5 个问题的核心是——\n- 问题 1：您的动机（教 vs 成就）\n- 问题 2：您的标准（讲 vs 做到）\n- 问题 3：您的坚持（30 天跟进）\n- 问题 4：您的衡量（业务语言）\n- 问题 5：您的迭代（重来一次）\n\n讲师话术 F5.3：\n请大家现在默想 30 秒，回答这 5 个问题——\n\n如果您对某个问题的回答让自己不舒服——\n这正是您需要成长的地方。\n\n讲师话术 F5.4：\n工作坊结束不是终点，而是起点——\n\n从今天开始，您要：\n1. 用 30 天跟进让学员”做到”\n2. 用业务语言评估工作坊效果\n3. 用下次工作坊迭代您的设计\n\n这就是讲师的”知行合一”——您先做到，学员才会相信您。")


def P122():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 122, "最终彩蛋", "10 条原则")
    rc(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.4), DARK)
    tx(s, Inches(0.8), Inches(1.4), Inches(11.7), Inches(0.3),
       "讲师 · 10 条原则", sz=14, c=WHT, b=True)
    principles = [
        ("1", "学员比讲师重要", "学员的”做到”比讲师的”讲完”更重要", RED),
        ("2", "R3 是核心", "R3 至少 60% 时长，否则工作坊没效果", GREEN),
        ("3", "讲师是引导者，不是表演者", "讲师讲得少，学员做得多", GOLD),
        ("4", "问题比答案重要", "好问题比正确答案更能启发学员", RED),
        ("5", "真实比完美重要", "学员的真实经历比完美的理论更有说服力", GREEN),
        ("6", "跟进决定效果", "30 天跟进决定 80% 的工作坊效果", GOLD),
        ("7", "演练决定质量", "讲师演练过的工作坊 + 没演练的工作坊 = 两个效果", RED),
        ("8", "小步快跑胜过大跃进", "每月迭代 1 个工作坊，比每年设计 10 个工作坊更有效", GREEN),
        ("9", "案例胜于理论", "8 个案例比 80 个理论更有说服力", GOLD),
        ("10", "讲师先做到", "讲师”知行合一”才能让学员”知行合一”", RED),
    ]
    rh = Inches(0.5)
    rx = Inches(0.6)
    ry = Inches(2.0)
    cw = [Inches(0.7), Inches(3.3), Inches(8.1)]
    for r, (n, t, desc) in enumerate(principles):
        y = ry + rh * r
        fill = LBG if r % 2 == 0 else WHT
        c = [RED, GREEN, GOLD, RED, GREEN, GOLD, RED, GREEN, GOLD, RED][r]
        x = rx
        rc(s, x, y, Inches(12.1), rh, fill, line=LGT)
        rc(s, x, y, Inches(0.15), rh, c)
        tx(s, x + Inches(0.3), y, Inches(0.6), rh, n, sz=14, c=c, b=True, al=PP_ALIGN.CENTER, an=MSO_ANCHOR.MIDDLE)
        tx(s, x + Inches(1.0), y, Inches(3.0), rh, t, sz=11, c=DARK, b=True, an=MSO_ANCHOR.MIDDLE)
        tx(s, x + Inches(4.2), y, Inches(7.8), rh, "→ “ + desc, sz=10, c=TXT, an=MSO_ANCHOR.MIDDLE)"
    ftr(s)
    note(s, "【10 条原则】\n\n讲师话术 P1：\n讲师的 10 条原则——\n\n1. 学员比讲师重要：学员的”做到”比讲师的”讲完”更重要\n2. R3 是核心：R3 至少 60% 时长，否则工作坊没效果\n3. 讲师是引导者，不是表演者：讲师讲得少，学员做得多\n4. 问题比答案重要：好问题比正确答案更能启发学员\n5. 真实比完美重要：学员的真实经历比完美的理论更有说服力\n6. 跟进决定效果：30 天跟进决定 80% 的工作坊效果\n7. 演练决定质量：讲师演练过的工作坊 + 没演练的工作坊 = 两个效果\n8. 小步快跑胜过大跃进：每月迭代 1 个工作坊，比每年设计 10 个工作坊更有效\n9. 案例胜于理论：8 个案例比 80 个理论更有说服力\n10. 讲师先做到：讲师”知行合一”才能让学员”知行合一”\n\n讲师话术 P2：\n10 条原则的内在逻辑——\n\n原则 1-3：学员观（学员中心 / R3 核心 / 引导者）\n原则 4-5：方法观（问题 > 答案 / 真实 > 完美）\n原则 6-7：执行观（跟进决定 / 演练决定）\n原则 8-10：迭代观（小步快跑 / 案例胜理论 / 讲师先做到）\n\n讲师话术 P3：\n10 条原则的核心是——\n\n讲师的 4 个转变——\n\n1. 从”教”到”成就”（原则 1）\n2. 从”讲”到”问”（原则 4）\n3. 从”理论”到”案例”（原则 9）\n4. 从”做完”到”做到”（原则 6）\n\n讲师话术 P4：\n请大家把这 10 条原则打印出来，贴在自己办公桌前——\n\n每次设计工作坊前看 1 次\n每次工作坊前看 1 次\n每次跟进前看 1 次\n\n3 个时刻看 10 条原则，您的工作坊质量会稳步提升。")


def P123():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 123, "最终彩蛋", "金句 10 句")
    rc(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.4), DARK)
    tx(s, Inches(0.8), Inches(1.4), Inches(11.7), Inches(0.3),
       "讲师 · 金句 10 句", sz=14, c=WHT, b=True)
    quotes = [
        ("1", "工作坊不是讲完，而是学员做到。", RED),
        ("2", "学员的问题比讲师的答案更值钱。", GREEN),
        ("3", "讲师讲得越少，学员学得越多。", GOLD),
        ("4", "R3 才是工作坊，其他都是铺垫。", RED),
        ("5", "跟进决定 80% 的工作坊效果。", GREEN),
        ("6", "演练过的工作坊 + 没演练的工作坊 = 两个效果。", GOLD),
        ("7", "学员的真实经历，比完美的理论更有说服力。", RED),
        ("8", "讲师先做到，学员才会相信。", GREEN),
        ("9", "每月迭代 1 个工作坊，比每年设计 10 个工作坊更有效。", GOLD),
        ("10", "讲师的”知行合一”，让学员看到”原来学习落地是这样的”。", RED),
    ]
    rh = Inches(0.5)
    rx = Inches(0.6)
    ry = Inches(2.0)
    for i, (n, q, c) in enumerate(quotes):
        y = ry + rh * i
        fill = LBG if i % 2 == 0 else WHT
        rc(s, rx, y, Inches(12.1), rh, fill, line=LGT)
        rc(s, rx, y, Inches(0.15), rh, c)
        tx(s, rx + Inches(0.3), y, Inches(0.6), rh, n, sz=18, c=c, b=True, al=PP_ALIGN.CENTER, an=MSO_ANCHOR.MIDDLE)
        tx(s, rx + Inches(1.0), y, Inches(11.0), rh, "” + q, sz=13, c=DARK, b=True, an=MSO_ANCHOR.MIDDLE)"
    ftr(s)
    note(s, "【金句 10 句】\n\n讲师话术 Q1：\n讲师的 10 句金句——\n\n1. 工作坊不是讲完，而是学员做到。\n2. 学员的问题比讲师的答案更值钱。\n3. 讲师讲得越少，学员学得越多。\n4. R3 才是工作坊，其他都是铺垫。\n5. 跟进决定 80% 的工作坊效果。\n6. 演练过的工作坊 + 没演练的工作坊 = 两个效果。\n7. 学员的真实经历，比完美的理论更有说服力。\n8. 讲师先做到，学员才会相信。\n9. 每月迭代 1 个工作坊，比每年设计 10 个工作坊更有效。\n10. 讲师的”知行合一”，让学员看到”原来学习落地是这样的”。\n\n讲师话术 Q2：\n10 句金句的本质——\n\n金句 1-3：工作坊的真相（不是讲完 / 问题值钱 / 讲师少讲）\n金句 4-6：工作坊的杠杆（R3 核心 / 跟进 80% / 演练）\n金句 7-9：工作坊的迭代（真实 / 讲师先做到 / 小步快跑）\n金句 10：工作坊的终极意义（讲师知行合一）\n\n讲师话术 Q3：\n请大家把 10 句金句背下来——\n- 工作坊开场可以用 1 句\n- 工作坊中场可以用 1 句\n- 工作坊收尾可以用 1 句\n- 工作坊后跟进可以用 1 句\n\n10 句金句在不同场景下使用，效果完全不同。\n\n讲师话术 Q4：\n最后 1 句金句——\n\n”讲师的”知行合一”，让学员看到”原来学习落地是这样的”。”\n\n这是本工作坊的终极金句——\n\n讲师的工作不是”讲”，而是”做”——\n讲师先做到”知行合一”，学员才会相信”知行合一”。")


def P124():
    s = prs.slides.add_slide(BLANK); bg(DARK)
    rc(s, Inches(0), Inches(0), Inches(13.333), Inches(0.1), GOLD)
    tx(s, Inches(0.8), Inches(1.0), Inches(11.7), Inches(0.5),
       "Q&A", sz=36, c=GOLD, b=True)
    tx(s, Inches(0.8), Inches(1.7), Inches(11.7), Inches(0.5),
       "您有任何问题，请现在问", sz=18, c=WHT)
    qs = [
        ("Q1", "我想设计一个 4 小时工作坊，但只有 2 小时，怎么办？", RED),
        ("Q2", "我设计的 R3 学员不参与，怎么办？", GREEN),
        ("Q3", "我做了 30 天跟进但学员还是不用，怎么办？", GOLD),
        ("Q4", "我的工作坊学员评分很高，但业务方说不满意，怎么办？", RED),
        ("Q5", "我设计的开场学员冷场，怎么办？", GREEN),
        ("Q6", "我想在工作坊中加入考试，可以吗？", GOLD),
        ("Q7", "我的学员都是高管，怎么设计 4R？", RED),
        ("Q8", "我不想做 30 天跟进，可以吗？", GREEN),
    ]
    for i, (n, q, c) in enumerate(qs):
        x = Inches(0.8 + (i % 2) * 6.2)
        y = Inches(2.8 + (i // 2) * 0.85)
        rc(s, x, y, Inches(5.7), Inches(0.75), DARK, line=GOLD)
        rc(s, x, y, Inches(0.1), Inches(0.75), c)
        tx(s, x + Inches(0.2), y + Inches(0.1), Inches(0.5), Inches(0.5), n, sz=14, c=GOLD, b=True)
        tx(s, x + Inches(0.7), y + Inches(0.1), Inches(4.9), Inches(0.5), q, sz=11, c=WHT)
    tx(s, Inches(0.8), Inches(6.7), Inches(11.7), Inches(0.4),
       "我会在 Q&A 环节一一解答", sz=14, c=GOLD, b=True)
    note(s, "【Q&A 环节】\n\n讲师话术 Q1：\n接下来是 Q&A 环节——\n\n我把常见问题列在屏幕上，您可以问屏幕上的问题，也可以问其他问题。\n\nQ1：我想设计一个 4 小时工作坊，但只有 2 小时，怎么办？\nQ2：我设计的 R3 学员不参与，怎么办？\nQ3：我做了 30 天跟进但学员还是不用，怎么办？\nQ4：我的工作坊学员评分很高，但业务方说不满意，怎么办？\nQ5：我设计的开场学员冷场，怎么办？\nQ6：我想在工作坊中加入考试，可以吗？\nQ7：我的学员都是高管，怎么设计 4R？\nQ8：我不想做 30 天跟进，可以吗？\n\n讲师话术 Q2：\n如果您没有特别的问题，我会逐条回答屏幕上的 8 个问题——\n\nQ1 答案：把 4R 压缩成 2R（R1 + R3 各 30% + R2 30% + R4 10%）\nQ2 答案：先用 5 种开场方法破冰，R3 前 10 分钟做小组预热\nQ3 答案：检查跟进是”打卡式”还是”互助式”——”互助式”更有效\nQ4 答案：工作坊前要问业务管理者 3 个问题，工作坊后要发 1 份报告\nQ5 答案：检查开场是 5 种中的哪一种，是否符合学员特点\nQ6 答案：考试 = 检验”知道”，不是”做到”——建议改为 30 天实施报告\nQ7 答案：高管的 R3 必须包含”战略决策”或”商业案例”，而不是”技能演练”\nQ8 答案：不做 30 天跟进 = 工作坊效果打折 50%——这是工作坊的关键")


def P125():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 125, "最终彩蛋", "课程回顾 · 5 章内容精要")
    rc(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.4), DARK)
    tx(s, Inches(0.8), Inches(1.4), Inches(11.7), Inches(0.3),
       "5 章内容精要回顾", sz=14, c=WHT, b=True)
    chapters = [
        ("第一章 · 知行之间", "60 分钟", "工作坊的本质（不是讲完而是做到） + 知行合一的核心逻辑", RED),
        ("第二章 · 流程规划", "120 分钟", "三维分析 + 4R 设计（R1 5 + R2 25 + R3 100 + R4 15）", GREEN),
        ("第三章 · 点燃参与", "60 分钟", "5 种开场方法（图片/数据/案例/问题/体验）+ 静远案例", GOLD),
        ("第四章 · 深问与共创", "120 分钟", "4 类提问技术（开放/追问/比较/反思）+ 6 种共创手法", RED),
        ("第五章 · 训后跟进", "60 分钟", "4 种跟进方法（打卡/互助/答疑/报告）+ 静远 30 天跟进", GREEN),
        ("收官 · 4R 应用 + 终极彩蛋", "60 分钟", "8 个案例对照 + 10 条原则 + 10 句金句 + Q&A + 7 件必做之事", GOLD),
    ]
    rh = Inches(0.85)
    rx = Inches(0.6)
    ry = Inches(2.0)
    for i, (t, time, desc, c) in enumerate(chapters):
        y = ry + rh * i
        rc(s, rx, y, Inches(12.1), rh, WHT, line=LGT)
        rc(s, rx, y, Inches(0.15), rh, c)
        tx(s, rx + Inches(0.3), y + Inches(0.1), Inches(4.5), Inches(0.4), t, sz=13, c=DARK, b=True)
        tx(s, rx + Inches(0.3), y + Inches(0.45), Inches(4.5), Inches(0.4), time, sz=10, c=c, b=True)
        tx(s, rx + Inches(5.0), y + Inches(0.1), Inches(7.0), Inches(0.7), desc, sz=11, c=TXT)
    rc(s, Inches(0.6), Inches(7.1), Inches(12.2), Inches(0.4), DARK)
    tx(s, Inches(0.8), Inches(7.1), Inches(11.7), Inches(0.4),
       "总时长 420 分钟 · 130 页 · 8 个案例 · 5 个附录 · 1 个知行合一", sz=14, c=WHT, b=True, an=MSO_ANCHOR.MIDDLE)
    ftr(s)
    note(s, "【5 章内容精要回顾】\n\n讲师话术 R1：\n我们用 1 分钟回顾 5 章内容——\n\n第一章 · 知行之间（60 分钟）\n工作坊的本质（不是讲完而是做到）+ 知行合一的核心逻辑\n\n第二章 · 流程规划（120 分钟）\n三维分析 + 4R 设计（R1 5 + R2 25 + R3 100 + R4 15）\n\n第三章 · 点燃参与（60 分钟）\n5 种开场方法（图片/数据/案例/问题/体验）+ 静远案例\n\n第四章 · 深问与共创（120 分钟）\n4 类提问技术（开放/追问/比较/反思）+ 6 种共创手法\n\n第五章 · 训后跟进（60 分钟）\n4 种跟进方法（打卡/互助/答疑/报告）+ 静远 30 天跟进\n\n收官 · 4R 应用 + 终极彩蛋（60 分钟）\n8 个案例对照 + 10 条原则 + 10 句金句 + Q&A + 7 件必做之事\n\n讲师话术 R2：\n总时长：60 + 120 + 60 + 120 + 60 + 60 = 480 分钟 = 8 小时\n130 页：5 章 100 页 + 收官 30 页\n8 个案例：销售/新晋管理/中层经理/客服/高潜人才/市场/项目经理/研发\n5 个附录：5 种开场话术 / 4 类问题 / 6 种共创 / 4 种跟进 / 5 阶段成长\n\n讲师话术 R3：\n1 个核心：知行合一\n\n这就是《知行：学习落地工作坊》的全部内容——\n\n讲师从这里学到”工作坊设计 + 落地”的所有方法，\n然后用 30 天跟进让学员”做到”——\n\n这就是讲师的”知行合一”。")


def P126():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 126, "最终彩蛋", "下一步 · 您的 30 天")
    rc(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.4), DARK)
    tx(s, Inches(0.8), Inches(1.4), Inches(11.7), Inches(0.3),
       "下一步 · 您的 30 天", sz=14, c=WHT, b=True)
    days = [
        ("Day 1-2", "完成工作坊设计", "三维分析 + 4R 设计 + R3 问题 + 开场话术", RED),
        ("Day 3-4", "找讲师演练", "找 2 位讲师演练 30 分钟 + 收集反馈", GREEN),
        ("Day 5-6", "调整工作坊", "根据演练反馈调整 + 准备物料", GOLD),
        ("Day 7", "发承诺", "在小组群里发您的承诺 + 找 1 位监督人", RED),
        ("Day 14", "工作坊", "给学员讲 1 次完整的工作坊（4 小时）", GREEN),
        ("Day 15", "发第 1 课", "工作坊后 4 小时内发第 1 条微信", GOLD),
        ("Day 30", "30 天跟进完成", "30 天打卡 + 同伴互助 + 1 份实施报告", RED),
        ("Day 45", "30 天后", "给业务管理者发 1 份 30 天实施报告", GREEN),
    ]
    rh = Inches(0.65)
    rx = Inches(0.6)
    ry = Inches(2.0)
    cw = [Inches(1.5), Inches(3.0), Inches(7.6)]
    for r, row in enumerate([("时间", "动作", "具体内容")] + days):
        is_h = (r == 0)
        y = ry + rh * r
        x = rx
        colors = [RED, GREEN, GOLD, RED, GREEN, GOLD, RED, GREEN]
        for c, cell in enumerate(row):
            fill = DARK if is_h else (LBG if r % 2 == 0 else WHT)
            color = WHT if is_h else (colors[r-1] if (c == 0 and not is_h) else TXT)
            b = is_h or (not is_h and c == 0)
            sz = 11
            rc(s, x, y, cw[c], rh, fill, line=LGT)
            tx(s, x + Inches(0.1), y, cw[c] - Inches(0.2), rh, cell, sz=sz, c=color, b=b, an=MSO_ANCHOR.MIDDLE)
            x += cw[c]
    rc(s, Inches(0.6), Inches(7.3), Inches(12.2), Inches(0.4), DARK)
    tx(s, Inches(0.8), Inches(7.3), Inches(11.7), Inches(0.4),
       "Day 45 后 · 您就是 1 位”知行合一”的工作坊讲师", sz=14, c=WHT, b=True, an=MSO_ANCHOR.MIDDLE)
    ftr(s)
    note(s, "【下一步 · 您的 30 天】\n\n讲师话术 N1：\n工作坊结束后，您的下一步行动——\n\n[逐条讲解]\n\nDay 1-2：完成工作坊设计（三维分析 + 4R 设计 + R3 问题 + 开场话术）\nDay 3-4：找讲师演练（找 2 位讲师演练 30 分钟 + 收集反馈）\nDay 5-6：调整工作坊（根据演练反馈调整 + 准备物料）\nDay 7：发承诺（在小组群里发您的承诺 + 找 1 位监督人）\nDay 14：工作坊（给学员讲 1 次完整的工作坊 4 小时）\nDay 15：发第 1 课（工作坊后 4 小时内发第 1 条微信）\nDay 30：30 天跟进完成（30 天打卡 + 同伴互助 + 1 份实施报告）\nDay 45：30 天后（给业务管理者发 1 份 30 天实施报告）\n\n讲师话术 N2：\n注意几个关键节点——\n- Day 7 发承诺：让您的同事监督您\n- Day 14 工作坊：这是关键节点\n- Day 15 发第 1 课：必须在 4 小时内\n- Day 30 跟进完成：30 天不间断\n- Day 45 报告：把学员改变汇报给业务管理者\n\n讲师话术 N3：\nDay 45 后，您就是 1 位”知行合一”的工作坊讲师——\n\n您不仅能讲工作坊，\n您能让学员真正做到，\n您能给业务管理者看到效果。\n\n这就是讲师的终极价值。")


def P127():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 127, "最终彩蛋", "学习路径 · 30 天 · 60 天 · 90 天")
    rc(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.4), DARK)
    tx(s, Inches(0.8), Inches(1.4), Inches(11.7), Inches(0.3),
       "学习路径 · 30 天 · 60 天 · 90 天", sz=14, c=WHT, b=True)
    paths = [
        ("0-30 天", "基础建立", "完成 1 个工作坊设计 + 演练 + 1 次实施 + 30 天跟进", RED),
        ("30-60 天", "迭代优化", "完成 2 个工作坊设计 + 收集反馈 + 调整", GREEN),
        ("60-90 天", "体系建立", "完成 3 个工作坊设计 + 建立个人案例库 + 1 次内部分享", GOLD),
        ("90 天+", "持续成长", "每年 5-8 个工作坊 + 撰写文章 + 行业分享", RED),
    ]
    rh = Inches(1.0)
    rx = Inches(0.6)
    ry = Inches(2.0)
    for i, (t, name, desc, c) in enumerate(paths):
        y = ry + rh * i
        rc(s, rx, y, Inches(12.1), rh, WHT, line=LGT)
        rc(s, rx, y, Inches(0.15), rh, c)
        tx(s, rx + Inches(0.3), y + Inches(0.1), Inches(3.0), Inches(0.4), t, sz=18, c=DARK, b=True)
        tx(s, rx + Inches(0.3), y + Inches(0.55), Inches(3.0), Inches(0.4), name, sz=14, c=c, b=True)
        tx(s, rx + Inches(3.5), y + Inches(0.1), Inches(8.5), Inches(0.4), "关键里程碑：", sz=12, c=c, b=True)
        tx(s, rx + Inches(3.5), y + Inches(0.5), Inches(8.5), Inches(0.4), desc, sz=11, c=TXT)
    rc(s, Inches(0.6), Inches(6.2), Inches(12.1), Inches(1.4), WHT, line=LGT)
    rc(s, Inches(0.6), Inches(6.2), Inches(12.1), Inches(0.4), DARK)
    tx(s, Inches(0.8), Inches(6.2), Inches(11.7), Inches(0.4), "90 天后的您", sz=14, c=WHT, b=True, an=MSO_ANCHOR.MIDDLE)
    outcomes = [
        "1. 完成 3 个工作坊设计（覆盖 3 个不同场景）",
        "2. 实施 3 次 30 天跟进（覆盖 90+ 学员）",
        "3. 建立个人案例库（3 个完整案例）",
        "4. 内部分享 1 次（在公司内部分享方法论）",
        "5. 撰写 1 篇文章（在公司内刊或公众号发表）",
    ]
    for i, o in enumerate(outcomes):
        y = Inches(6.65 + i * 0.18)
        tx(s, Inches(0.8), y, Inches(11.7), Inches(0.2), o, sz=10, c=TXT)
    ftr(s)
    note(s, "【学习路径 · 30/60/90 天】\n\n讲师话术 L1：\n讲师的学习路径——\n\n[逐段讲解]\n\n0-30 天：基础建立\n- 完成 1 个工作坊设计\n- 演练 + 1 次实施 + 30 天跟进\n- 关键里程碑：完整做完 1 个工作坊\n\n30-60 天：迭代优化\n- 完成 2 个工作坊设计\n- 收集反馈 + 调整\n- 关键里程碑：完成 2 个不同场景的工作坊\n\n60-90 天：体系建立\n- 完成 3 个工作坊设计\n- 建立个人案例库\n- 1 次内部分享\n- 关键里程碑：建立自己的工作坊体系\n\n90 天+：持续成长\n- 每年 5-8 个工作坊\n- 撰写文章\n- 行业分享\n- 关键里程碑：成为行业认可的讲师\n\n讲师话术 L2：\n90 天后您会变成什么？\n\n1. 完成 3 个工作坊设计（覆盖 3 个不同场景）\n2. 实施 3 次 30 天跟进（覆盖 90+ 学员）\n3. 建立个人案例库（3 个完整案例）\n4. 内部分享 1 次（在公司内部分享方法论）\n5. 撰写 1 篇文章（在公司内刊或公众号发表）\n\n讲师话术 L3：\n这就是讲师的成长路径——\n\n90 天后，您会变成 1 位有 3 个工作坊设计 + 3 次完整实施 + 1 次内部分享 + 1 篇文章的讲师。\n\n这比 90% 的讲师都要领先。")


def P128():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 128, "最终彩蛋", "工作坊效果评估 · ROI 计算")
    rc(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.4), DARK)
    tx(s, Inches(0.8), Inches(1.4), Inches(11.7), Inches(0.3),
       "工作坊效果评估 · ROI 计算", sz=14, c=WHT, b=True)
    sections = [
        ("投入", "讲师时间 4 小时 + 设计时间 4.5 小时 + 跟进时间 5 小时 = 13.5 小时", "按 ¥500/小时 = ¥6,750", RED),
        ("学员人数", "20 位学员 × 4 小时 = 80 人时", "按 ¥200/小时 = ¥16,000", GREEN),
        ("30 天后行为改变", "20 位学员中 14 位（70%）在工作中用了新方法", "70% 的行为改变率", GOLD),
        ("业务效果", "14 位学员 × 30 天 × 平均提升 ¥500/天 = ¥210,000", "业务效果计算", RED),
        ("ROI", "（业务效果 - 投入）/ 投入 = (210,000 - 6,750) / 6,750 = 3010%", "30 倍回报", GREEN),
    ]
    rh = Inches(1.0)
    rx = Inches(0.6)
    ry = Inches(2.0)
    for i, (t, calc, value, c) in enumerate(sections):
        y = ry + rh * i
        rc(s, rx, y, Inches(12.1), rh, WHT, line=LGT)
        rc(s, rx, y, Inches(0.15), rh, c)
        tx(s, rx + Inches(0.3), y + Inches(0.1), Inches(2.0), Inches(0.4), t, sz=14, c=DARK, b=True)
        tx(s, rx + Inches(0.3), y + Inches(0.55), Inches(2.0), Inches(0.4), value, sz=11, c=c, b=True)
        tx(s, rx + Inches(2.5), y + Inches(0.1), Inches(9.5), Inches(0.4), "计算：", sz=12, c=c, b=True)
        tx(s, rx + Inches(2.5), y + Inches(0.5), Inches(9.5), Inches(0.4), calc, sz=11, c=TXT)
    rc(s, Inches(0.6), Inches(7.1), Inches(12.2), Inches(0.4), DARK)
    tx(s, Inches(0.8), Inches(7.1), Inches(11.7), Inches(0.4),
       "结论：1 个工作坊投入 ¥6,750，可产生 ¥210,000 业务价值 · ROI = 3010%", sz=14, c=WHT, b=True, an=MSO_ANCHOR.MIDDLE)
    ftr(s)
    note(s, "【工作坊 ROI 计算】\n\n讲师话术 ROI1：\n我们来看工作坊的 ROI 计算——\n\n投入：\n- 讲师时间 4 小时 + 设计时间 4.5 小时 + 跟进时间 5 小时 = 13.5 小时\n- 按 ¥500/小时 = ¥6,750\n\n学员人数：\n- 20 位学员 × 4 小时 = 80 人时\n- 按 ¥200/小时 = ¥16,000\n\n30 天后行为改变：\n- 20 位学员中 14 位（70%）在工作中用了新方法\n- 70% 的行为改变率\n\n业务效果：\n- 14 位学员 × 30 天 × 平均提升 ¥500/天 = ¥210,000\n\nROI：\n- (业务效果 - 投入) / 投入 = (210,000 - 6,750) / 6,750 = 3010%\n- 30 倍回报\n\n讲师话术 ROI2：\n结论：1 个工作坊投入 ¥6,750，可产生 ¥210,000 业务价值，ROI = 3010%。\n\n注意 ROI 计算的几个关键假设——\n- 70% 行为改变率（基于我们 8 个案例的平均值）\n- ¥500/天的业务提升（保守估计）\n- 30 天持续使用（基于 30 天跟进的有效性）\n\n讲师话术 ROI3：\n这就是工作坊的真正价值——\n- 投入 13.5 小时\n- 产生 30 倍回报\n- 改变 14 位学员的行为\n- 影响 14 位学员背后的客户/团队\n\n讲师话术 ROI4：\n请大家在给业务管理者汇报时使用这个 ROI 计算——\n- 强调 70% 的行为改变率\n- 强调 30 倍的 ROI\n- 强调 30 天跟进的关键作用\n\n业务管理者听 ROI 数字，不听”学员满意度”。")


def P129():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 129, "最终彩蛋", "致谢 · 一句话")
    rc(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.4), DARK)
    tx(s, Inches(0.8), Inches(1.4), Inches(11.7), Inches(0.3),
       "致谢 · 一句话", sz=14, c=WHT, b=True)
    tx(s, Inches(1.0), Inches(2.0), Inches(11.3), Inches(0.6),
       "各位讲师：", sz=20, c=DARK, b=True)
    thanks = [
        "感谢您用 2 天时间学习工作坊设计的所有方法。",
        "感谢您愿意把”知行合一”作为自己的工作准则。",
        "感谢您愿意在 30 天内讲完您的工作坊。",
        "感谢您愿意做 30 天跟进，让学员真正做到。",
        "感谢您愿意迭代您的工作坊设计，每年 3-5 次。",
        "感谢您愿意把”学员做到”作为自己的成功标准。",
        "感谢您愿意成为 1 位”知行合一”的工作坊讲师。",
    ]
    for i, t in enumerate(thanks):
        y = Inches(2.7 + i * 0.5)
        tx(s, Inches(1.0), y, Inches(11.3), Inches(0.4), "v “ + t, sz=13, c=TXT)"
    rc(s, Inches(0.6), Inches(6.5), Inches(12.2), Inches(1.0), DARK)
    tx(s, Inches(1.0), Inches(6.5), Inches(11.3), Inches(1.0),
       "讲师的”知行合一”，让学员看到”原来学习落地是这样的”。", sz=18, c=GOLD, b=True, al=PP_ALIGN.CENTER, an=MSO_ANCHOR.MIDDLE)
    ftr(s)
    note(s, "【致谢 · 一句话】\n\n讲师话术 TY1：\n最后，我要致谢各位讲师——\n\n[逐条朗读]\n\n感谢您用 2 天时间学习工作坊设计的所有方法。\n感谢您愿意把”知行合一”作为自己的工作准则。\n感谢您愿意在 30 天内讲完您的工作坊。\n感谢您愿意做 30 天跟进，让学员真正做到。\n感谢您愿意迭代您的工作坊设计，每年 3-5 次。\n感谢您愿意把”学员做到”作为自己的成功标准。\n感谢您愿意成为 1 位”知行合一”的工作坊讲师。\n\n讲师话术 TY2：\n本工作坊的最后一句话——\n\n”讲师的”知行合一”，让学员看到”原来学习落地是这样的”。”\n\n这是本工作坊的终极金句。\n\n讲师话术 TY3：\n请大家记住这句话——\n\n当您未来某次工作坊失败时，回到这句话\n当您对工作坊设计迷茫时，回到这句话\n当您想放弃 30 天跟进时，回到这句话\n\n这句话是讲师的北极星——\n\n只要您坚持”知行合一”，您的工作坊就会成功，\n您的学员就会改变，\n您就会成为 1 位真正的工作坊讲师。")


def P130():
    s = prs.slides.add_slide(BLANK); bg(DARK)
    rc(s, Inches(0), Inches(0), Inches(13.333), Inches(0.1), GOLD)
    tx(s, Inches(0.8), Inches(2.5), Inches(11.7), Inches(1.5),
       "130", sz=180, c=GOLD, b=True, al=PP_ALIGN.CENTER)
    tx(s, Inches(0.8), Inches(4.5), Inches(11.7), Inches(0.6),
       "工作坊全部内容已完成", sz=24, c=WHT, b=True, al=PP_ALIGN.CENTER)
    tx(s, Inches(0.8), Inches(5.3), Inches(11.7), Inches(0.5),
       "讲师的”知行合一”，从这里开始", sz=16, c=RED, al=PP_ALIGN.CENTER)
    tx(s, Inches(0.8), Inches(6.5), Inches(11.7), Inches(0.4),
       "竞越 · 知行 · 学习落地工作坊", sz=14, c=LGT, al=PP_ALIGN.CENTER)
    note(s, "【130 页达成 · 收官】\n\n讲师话术 END1：\n各位讲师，我们已经完成了 130 页——\n\n5 章内容全部讲完：\n- 第一章 · 知行之间\n- 第二章 · 流程规划 · 4R 循环\n- 第三章 · 点燃参与 · 5 种开场\n- 第四章 · 深问与共创 · 4 类提问技术\n- 第五章 · 训后跟进 · 4 种跟进方法\n\n实战案例：8 个\n附录：5 个\n讲师成长：5 个阶段\n\n讲师话术 END2：\n接下来 30 天，请大家按照”30 天计划”行动——\n\nDay 1-2：完成工作坊设计\nDay 3-4：找讲师演练\nDay 5-6：调整工作坊\nDay 7：发承诺\nDay 14：工作坊实施\nDay 15：发第 1 课\nDay 30：30 天跟进完成\nDay 45：发 30 天报告\n\n讲师话术 END3：\n最后一句话——\n\n”讲师的”知行合一”，让学员看到”原来学习落地是这样的”。”\n\n讲师话术 END4：\n感谢各位讲师 2 天的陪伴，祝大家工作坊顺利！\n\n让我们一起做”知行合一”的工作坊讲师！")
'''
with open('gen_pptx_part2.py', 'a', encoding='utf-8') as f:
    f.write(code)
print('P119-P130 OK, lines:', sum(1 for _ in open('gen_pptx_part2.py', encoding='utf-8')))
