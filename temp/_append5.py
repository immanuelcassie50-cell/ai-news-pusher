# -*- coding: utf-8 -*-
code = r'''


def P54():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 54, "第四章 · 深问与共创", "4.4 · Activity 4A · 演练观察")
    rc(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.4), DARK)
    tx(s, Inches(0.8), Inches(1.4), Inches(11.7), Inches(0.3), "演练环节常见观察", sz=14, c=WHT, b=True)
    obs = [
        ("问题太抽象", "问”您怎么看异议处理”——学员无法回答", "改为问”您上次遇到价格异议是什么时候？”"),
        ("追问没深挖", "学员说”我用了 Z 方法”——讲师直接问下一个问题", "应该追问”Z 方法具体是什么？那一刻您怎么决定用它的？”"),
        ("比较走过场", "张三说了一个方法，李四说另一个方法——讲师没让他们对比", "应该明确问”您俩的方法有什么不同？您觉得哪个更好？为什么？”"),
        ("反思变总结", "学员说”今天学到了很多”——这不是反思", "反思要具体”今天讨论的 X 原则，您接下来怎么用到 Y 场景？”"),
        ("讲师急插话", "学员刚说一句还没说完——讲师就接话", "让学员说 30 秒 + 5 秒停顿，再追问或总结"),
    ]
    rh = Inches(0.95)
    rx = Inches(0.6)
    ry = Inches(2.0)
    headers = ["常见问题", "表现", "改进方向”]"
    cw = [Inches(3.0), Inches(4.5), Inches(4.6)]
    rc(s, rx, ry, Inches(12.1), Inches(0.5), DARK)
    x = rx
    for i, h in enumerate(headers):
        tx(s, x + Inches(0.1), ry, cw[i] - Inches(0.2), Inches(0.5), h, sz=12, c=WHT, b=True, an=MSO_ANCHOR.MIDDLE)
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
    note(s, "【4.4 演练观察】\n\n讲师话术 4.4.3：\n演练环节大家都很投入。这里有几个我巡视时观察到的常见问题，请对照您的设计看看——\n\n1. 问题太抽象：问”您怎么看异议处理”——学员无法回答。\n   改进：改为问”您上次遇到价格异议是什么时候？”\n\n2. 追问没深挖：学员说”我用了 Z 方法”——讲师直接问下一个问题。\n   改进：应该追问”Z 方法具体是什么？那一刻您怎么决定用它的？”\n\n3. 比较走过场：张三说了一个方法，李四说另一个方法——讲师没让他们对比。\n   改进：应该明确问”您俩的方法有什么不同？您觉得哪个更好？为什么？”\n\n4. 反思变总结：学员说”今天学到了很多”——这不是反思。\n   改进：反思要具体——”今天讨论的 X 原则，您接下来怎么用到 Y 场景？”\n\n5. 讲师急插话：学员刚说一句还没说完——讲师就接话。\n   改进：让学员说 30 秒 + 5 秒停顿，再追问或总结。\n\n请根据这些观察调整您的设计。")


def P55():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 55, "第四章 · 深问与共创", "4.5 · 静远的提问完整流程")
    rc(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.4), RED)
    tx(s, Inches(0.8), Inches(1.4), Inches(11.7), Inches(0.3),
       "静远在工作坊中的一次完整提问（10 分钟实录）", sz=14, c=WHT, b=True)
    flow = [
        ("00:00", "开放式", "李四，您刚才说您用了异议处理的方法——您能描述一下那次具体是什么场景吗？"),
        ("01:00", "追问", "客户听到一半打断您——那一刻您心里是什么感受？"),
        ("02:00", "追问", "您接下来做了什么？能具体说说您怎么说的吗？"),
        ("03:00", "追问", "那一刻您是怎么决定用 Z 方法的？"),
        ("04:00", "比较", "张三，您和李四的做法有什么不同？"),
        ("05:00", "比较", "您俩的做法，结果分别是什么？"),
        ("06:00", "比较", "您觉得哪个更好？为什么？"),
        ("07:00", "反思", "刚才讨论的这些，对您意味着什么？"),
        ("08:00", "反思", "如果再来一次，您会怎么做？"),
        ("09:00", "反思", "您接下来 7 天内，最想先做的第一件事是什么？"),
    ]
    rx = Inches(0.6)
    ry = Inches(2.0)
    rh = Inches(0.43)
    cw = [Inches(1.2), Inches(1.6), Inches(9.3)]
    for r, row in enumerate([("时间", "类型", "静远的问题")] + flow):
        is_h = (r == 0)
        y = ry + rh * r
        x = rx
        for c, cell in enumerate(row):
            fill = DARK if is_h else (LBG if r % 2 == 0 else WHT)
            color = WHT if is_h else (RED if c == 1 else TXT)
            b = is_h or c == 1
            sz = 11
            rc(s, x, y, cw[c], rh, fill, line=LGT)
            tx(s, x + Inches(0.1), y, cw[c] - Inches(0.2), rh, cell, sz=sz, c=color, b=b, an=MSO_ANCHOR.MIDDLE)
            x += cw[c]
    ftr(s)
    note(s, "【4.5 静远完整提问流程】\n\n讲师话术 4.5.1：\n我们看静远在工作坊中的一次完整提问（10 分钟实录）——\n\n[逐条讲解，强调链条的完整性]\n\n关键观察：\n- 前 5 分钟是开放式 + 追问——让李四说深、说细\n- 中间 3 分钟是比较——让张三和李四对比\n- 最后 2 分钟是反思——让全班内化\n\n整条链 10 分钟，包含 10 个问题。\n\n学员在 10 分钟内：\n- 李四深度反思了一次经历\n- 张三看到了和李四的差异\n- 全班看到了两个具体做法的对比\n- 全班开始思考自己接下来要做什么\n\n这就是高质量的 R3 阶段——10 分钟的提问链条，胜过 1 小时的讲师讲授。\n\n请在 Activity 4A 中设计您自己的提问链条。")


def P56():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 56, "第四章 · 深问与共创", "4.6 · 第四章小结")
    rc(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.4), DARK)
    tx(s, Inches(0.8), Inches(1.4), Inches(11.7), Inches(0.3), "第四章小结", sz=14, c=WHT, b=True)
    points = [
        ("好问题 vs 坏问题", "好问题让学员继续说，坏问题让学员停止说。4 个判断标准：开放/真实/思考/可追。", RED),
        ("4 类提问技术", "开放式（让说）/ 追问（深挖）/ 比较（看差异）/ 反思（内化）。", GOLD),
        ("提问链条", "一次深度讨论（30-45 分钟）：开放式 3-4 + 追问 5-8 + 比较 2-3 + 反思 1-2。", GREEN),
        ("共创引导手法", "轮流向/接力/辩论/补全/投票/重述。讲师是引导者，不是主角。", RED),
        ("静远 3 模式", "先说+再问 / 复述+追问 / 对比+反思。", GREEN),
    ]
    for i, (t, desc, c) in enumerate(points):
        y = Inches(2.0 + i * 1.0)
        rc(s, Inches(0.6), y, Inches(12.1), Inches(0.9), WHT, line=LGT)
        rc(s, Inches(0.6), y, Inches(0.15), Inches(0.9), c)
        tx(s, Inches(0.9), y + Inches(0.1), Inches(2.8), Inches(0.4), t, sz=14, c=DARK, b=True)
        tx(s, Inches(3.9), y + Inches(0.1), Inches(8.7), Inches(0.7), desc, sz=11, c=TXT)
    rc(s, Inches(0.6), Inches(7.05), Inches(12.1), Inches(0.4), DARK)
    tx(s, Inches(0.8), Inches(7.05), Inches(11.7), Inches(0.4), "下一章预告", sz=11, c=RED, b=True)
    tx(s, Inches(3.0), Inches(7.05), Inches(9.5), Inches(0.4),
       "→ 第五章：训后跟进 · 我们将学习如何让学员在 30 天内真的用起来", sz=11, c=WHT)
    ftr(s)
    note(s, "【4.6 小结】\n\n讲师话术 4.6.1：\n第四章小结：\n\n1. 好问题 vs 坏问题：4 个判断标准\n2. 4 类提问技术：开放式/追问/比较/反思\n3. 提问链条：30-45 分钟的问题数量分配\n4. 共创引导手法：6 种方法\n5. 静远 3 模式：实战示范\n\n下一章我们将进入第五章：训后跟进。\n\n一个不争的事实：学员在工作坊中激动，回到工作岗位后 70% 不再使用新方法。\n\n为什么？因为没有跟进。\n\n第五章我们将学 4 种跟进方法，让学员在 30 天内真的用起来：\n1. 30 天打卡\n2. 90 天同伴互助\n3. 工作场景应用日志\n4. 30 天实施报告\n\n这些方法在课后持续推动学员应用。")


def P57():
    s = prs.slides.add_slide(BLANK); bg(DARK)
    rc(s, Inches(0), Inches(0), Inches(13.333), Inches(0.1), GOLD)
    tx(s, Inches(0.8), Inches(2.0), Inches(11.7), Inches(0.5),
       "第五章", sz=24, c=GOLD, b=True)
    tx(s, Inches(0.8), Inches(2.7), Inches(11.7), Inches(2.5),
       "训后跟进", sz=84, c=WHT, b=True)
    tx(s, Inches(0.8), Inches(4.7), Inches(11.7), Inches(0.5),
       "Follow-up · 让学习真正落地的 4 种跟进方法", sz=20, c=RED)
    rc(s, Inches(0.8), Inches(5.5), Inches(11.7), Inches(0.05), LGT)
    tx(s, Inches(0.8), Inches(5.8), Inches(11.7), Inches(0.4),
       "本章结构：", sz=14, c=GOLD, b=True)
    sections = [
        "5.1  训后跟进的真相   5.2  跟进四法",
        "5.3  静远的 30 天跟进   5.4  Activity 5A · 我的跟进计划",
    ]
    for i, sec in enumerate(sections):
        tx(s, Inches(0.8), Inches(6.2 + i * 0.5), Inches(11.7), Inches(0.4), sec, sz=14, c=LGT)
    rc(s, Inches(0.8), Inches(7.3), Inches(11.7), Inches(0.05), LGT)
    tx(s, Inches(0.8), Inches(7.35), Inches(11.7), Inches(0.4),
       "60 分钟  |  目标：让学员在 30 天内真的用起来", sz=12, c=GOLD)
    note(s, "【第五章 训后跟进】\n\n讲师话术 5.0：\n欢迎来到第五章：训后跟进。\n\n我们来看一个数据：学员在工作坊中激动，回到工作岗位后 70% 不再使用新方法。\n\n为什么？\n\n不是学员不想改变，而是工作环境不允许。\n\n讲师的常见错误：以为工作坊结束 = 学习结束。\n\n实际上工作坊结束 = 学习开始。\n\n本章我们将学 4 种跟进方法，让学员在 30 天内真的用起来：\n1. 30 天打卡\n2. 90 天同伴互助\n3. 工作场景应用日志\n4. 30 天实施报告\n\n我们也会看到静远是怎么用 30 天跟进让学员真正落地的。")


def P58():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 58, "第五章 · 训后跟进", "5.1 · 训后跟进的真相")
    rc(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.4), DARK)
    tx(s, Inches(0.8), Inches(1.4), Inches(11.7), Inches(0.3), "训后跟进的真相", sz=14, c=WHT, b=True)
    # 数据对比
    rc(s, Inches(0.6), Inches(2.0), Inches(12.1), Inches(1.5), LBG)
    tx(s, Inches(0.8), Inches(2.1), Inches(11.7), Inches(0.4), "数据", sz=14, c=RED, b=True)
    tx(s, Inches(0.8), Inches(2.5), Inches(11.7), Inches(0.5),
       "工作坊 30 天后，70% 的学员不再使用新方法。90 天后，85% 回到旧习惯。",
       sz=14, c=DARK, b=True)
    # 三个原因
    reasons = [
        ("环境阻力", "学员想用新方法，但客户/老板/同事不配合",
         "学员在课堂上学的：异议处理要先认同再回应。但客户的反应是：你直接说能不能便宜。学员被打击了。", RED),
        ("没有触发器", "学员想用，但忘了用——没有提醒机制",
         "学员学完后回到办公室，被日常事务淹没。今天没想起用新方法，明天又忘了。", GREEN),
        ("没有反馈环", "学员用了，但不知道用得对不对",
         "学员用了新方法，没人说对还是错。下次用同样的方法，效果还是不好——然后放弃。", GOLD),
    ]
    for i, (t, desc, ex, c) in enumerate(reasons):
        y = Inches(3.7 + i * 1.1)
        rc(s, Inches(0.6), y, Inches(12.1), Inches(1.0), WHT, line=LGT)
        rc(s, Inches(0.6), y, Inches(0.15), Inches(1.0), c)
        tx(s, Inches(0.9), y + Inches(0.1), Inches(2.5), Inches(0.4), t, sz=14, c=DARK, b=True)
        tx(s, Inches(3.6), y + Inches(0.1), Inches(9.0), Inches(0.4), desc, sz=11, c=c, b=True)
        tx(s, Inches(3.6), y + Inches(0.45), Inches(9.0), Inches(0.5), ex, sz=10, c=GRY)
    ftr(s)
    note(s, "【5.1 训后跟进的真相】\n\n讲师话术 5.1.1：\n我们看一组数据：\n- 工作坊 30 天后，70% 的学员不再使用新方法\n- 90 天后，85% 回到旧习惯\n\n这是为什么？三个原因：\n\n1. 环境阻力：\n   学员想用新方法，但客户/老板/同事不配合。\n   例：学员在课堂上学的：异议处理要先认同再回应。但客户的反应是：你直接说能不能便宜。学员被打击了。\n\n2. 没有触发器：\n   学员想用，但忘了用——没有提醒机制。\n   例：学员学完后回到办公室，被日常事务淹没。今天没想起用新方法，明天又忘了。\n\n3. 没有反馈环：\n   学员用了，但不知道用得对不对。\n   例：学员用了新方法，没人说对还是错。下次用同样的方法，效果还是不好——然后放弃。\n\n这三个原因说明：工作坊结束 = 学习开始。\n\n讲师的职责不是”上完课就走”，而是”陪伴学员度过 30 天的应用期”。\n\n下面我们看 4 种跟进方法。")


def P59():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 59, "第五章 · 训后跟进", "5.2 · 跟进四法")
    rc(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.4), DARK)
    tx(s, Inches(0.8), Inches(1.4), Inches(11.7), Inches(0.3), "跟进四法", sz=14, c=WHT, b=True)
    methods = [
        ("1", "30 天打卡", "每天 1 分钟，写下今天用过的 1 个新方法",
         "微信群/小程序推送，学员每日打卡", RED),
        ("2", "90 天同伴互助", "2-3 人小组，每周 1 次 30 分钟互助会",
         "互相分享本周应用、互相反馈", GREEN),
        ("3", "工作场景应用日志", "记录 5-10 个真实工作场景的应用过程",
         "便于复盘和讲师反馈", GOLD),
        ("4", "30 天实施报告", "30 天后填一份 1 页的实施报告",
         "总结 30 天应用情况 + 后续计划", RED),
    ]
    rh = Inches(1.05)
    rx = Inches(0.6)
    ry = Inches(2.0)
    cw = [Inches(0.9), Inches(2.5), Inches(4.5), Inches(4.2)]
    for r, row in enumerate(methods):
        y = ry + rh * r
        fill = LBG if r % 2 == 0 else WHT
        x = rx
        for c, cell in enumerate(row):
            color = RED if c == 0 else (DARK if c == 1 else TXT)
            b = c in (0, 1)
            sz = 18 if c == 0 else (14 if c == 1 else 11)
            rc(s, x, y, cw[c], rh, fill, line=LGT)
            tx(s, x + Inches(0.1), y, cw[c] - Inches(0.2), rh, cell, sz=sz, c=color, b=b, an=MSO_ANCHOR.MIDDLE)
            x += cw[c]
    # 时间线
    rc(s, Inches(0.6), Inches(6.4), Inches(12.1), Inches(0.7), DARK)
    tx(s, Inches(0.8), Inches(6.45), Inches(11.7), Inches(0.3), "4 种方法的时间线", sz=12, c=RED, b=True)
    tx(s, Inches(0.8), Inches(6.75), Inches(11.7), Inches(0.3),
       "30 天打卡（每日）+ 90 天同伴互助（每周）+ 工作场景应用日志（持续）+ 30 天实施报告（第 30 天）",
       sz=11, c=WHT)
    ftr(s)
    note(s, "【5.2 跟进四法】\n\n讲师话术 5.2.1：\n4 种跟进方法：\n\n1. 30 天打卡：每天 1 分钟，写下今天用过的 1 个新方法。\n   实现：微信群/小程序推送，学员每日打卡。\n\n2. 90 天同伴互助：2-3 人小组，每周 1 次 30 分钟互助会。\n   实现：互相分享本周应用、互相反馈。\n\n3. 工作场景应用日志：记录 5-10 个真实工作场景的应用过程。\n   实现：便于复盘和讲师反馈。\n\n4. 30 天实施报告：30 天后填一份 1 页的实施报告。\n   实现：总结 30 天应用情况 + 后续计划。\n\n这 4 种方法的时间线：\n- 30 天打卡（每日）\n- 90 天同伴互助（每周）\n- 工作场景应用日志（持续）\n- 30 天实施报告（第 30 天）\n\n4 种方法不是替代关系，是组合关系。\n\n理想情况下，所有 4 种都做。\n\n最少也要做 1-2 种，否则工作坊效果会大打折扣。")


def P60():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 60, "第五章 · 训后跟进", "5.2 · 跟进四法详解 · 30 天打卡")
    rc(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.4), RED)
    tx(s, Inches(0.8), Inches(1.4), Inches(11.7), Inches(0.3), "30 天打卡 · 触发器 + 反馈环", sz=14, c=WHT, b=True)
    # 实施细节
    details = [
        ("时机", "每日 21:00 推送提醒", "微信群/小程序，每天固定时间提醒"),
        ("内容", "1 个新方法 + 1 个真实场景", "我今天用了 XX 方法，场景是 XXX，结果是 XXX"),
        ("时长", "1 分钟内完成", "太复杂学员就不做了"),
        ("反馈", "讲师 + 学员互相点赞/评论", "让学员感到被看见"),
        ("数据", "讲师每周汇总一次打卡率", "30 天平均打卡率 70%+ = 工作坊有效"),
    ]
    rh = Inches(0.65)
    rx = Inches(0.6)
    ry = Inches(2.0)
    cw = [Inches(2.0), Inches(4.0), Inches(6.1)]
    for r, (t, ex, why, c) in enumerate(details):
        y = ry + rh * r
        fill = LBG if r % 2 == 0 else WHT
        x = rx
        rc(s, x, y, Inches(12.1), rh, fill, line=LGT)
        rc(s, x, y, Inches(0.15), rh, c)
        tx(s, x + Inches(0.3), y, Inches(1.9), rh, t, sz=13, c=DARK, b=True, an=MSO_ANCHOR.MIDDLE)
        tx(s, x + Inches(2.2), y, Inches(3.8), rh, ex, sz=11, c=c, b=True, an=MSO_ANCHOR.MIDDLE)
        tx(s, x + Inches(6.2), y, Inches(5.8), rh, why, sz=11, c=TXT, an=MSO_ANCHOR.MIDDLE)
    # 关键
    rc(s, Inches(0.6), Inches(5.5), Inches(12.1), Inches(1.6), WHT, line=LGT)
    rc(s, Inches(0.6), Inches(5.5), Inches(12.1), Inches(0.5), DARK)
    tx(s, Inches(0.8), Inches(5.5), Inches(11.7), Inches(0.5), "三个关键", sz=14, c=WHT, b=True, an=MSO_ANCHOR.MIDDLE)
    keys = [
        "① 每天固定时间推送（养成习惯）",
        "② 每天 1 分钟内完成（不要有负担）",
        "③ 讲师每周看一次数据，对没打卡的同学私下提醒",
    ]
    for i, k in enumerate(keys):
        tx(s, Inches(1.0), Inches(6.1 + i * 0.32), Inches(11.5), Inches(0.3), k, sz=12, c=TXT)
    ftr(s)
    note(s, "【5.2 30 天打卡】\n\n讲师话术 5.2.2：\n我们具体看 30 天打卡怎么设计——\n\n时机：每日 21:00 推送提醒（学员下班后，躺在床上做 1 分钟）\n内容：1 个新方法 + 1 个真实场景（我今天用了 XX 方法，场景是 XXX，结果是 XXX）\n时长：1 分钟内完成（太复杂学员就不做了）\n反馈：讲师 + 学员互相点赞/评论（让学员感到被看见）\n数据：讲师每周汇总一次打卡率（30 天平均打卡率 70%+ = 工作坊有效）\n\n三个关键：\n1. 每天固定时间推送（养成习惯）\n2. 每天 1 分钟内完成（不要有负担）\n3. 讲师每周看一次数据，对没打卡的同学私下提醒\n\n30 天打卡是触发器——让学员每天想起用新方法。\n\n打卡本身不是目的，目的是让学员持续应用。")
'''
with open('gen_pptx_part2.py', 'a', encoding='utf-8') as f:
    f.write(code)
print('P54-P60 OK, lines:', sum(1 for _ in open('gen_pptx_part2.py', encoding='utf-8')))
