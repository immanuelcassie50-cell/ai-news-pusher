# -*- coding: utf-8 -*-
code = r'''


def P61():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 61, "第五章 · 训后跟进", "5.2 · 跟进四法详解 · 90 天同伴互助")
    rc(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.4), GREEN)
    tx(s, Inches(0.8), Inches(1.4), Inches(11.7), Inches(0.3), "90 天同伴互助 · 反馈环 + 持续动力", sz=14, c=WHT, b=True)
    # 设置
    details = [
        ("小组构成", "2-3 人, 同一行业/同一岗位优先", "避免跨组学员的语境差异"),
        ("会议频率", "每周 1 次, 30 分钟", "频次太低失效, 太高有负担"),
        ("会议内容", "每人 5 分钟分享本周应用 + 5 分钟反馈", "结构化避免跑题"),
        ("会议形式", "线上视频为主, 关键节点可线下", "降低时间成本"),
        ("讲师角色", "前 4 周讲师参与 1 次, 之后退出", "避免学员依赖讲师"),
    ]
    rh = Inches(0.65)
    rx = Inches(0.6)
    ry = Inches(2.0)
    cw = [Inches(2.0), Inches(4.5), Inches(5.6)]
    for r, (t, ex, why, c) in enumerate(details):
        y = ry + rh * r
        fill = LBG if r % 2 == 0 else WHT
        x = rx
        rc(s, x, y, Inches(12.1), rh, fill, line=LGT)
        rc(s, x, y, Inches(0.15), rh, c)
        tx(s, x + Inches(0.3), y, Inches(1.9), rh, t, sz=13, c=DARK, b=True, an=MSO_ANCHOR.MIDDLE)
        tx(s, x + Inches(2.2), y, Inches(4.3), rh, ex, sz=11, c=c, b=True, an=MSO_ANCHOR.MIDDLE)
        tx(s, x + Inches(6.7), y, Inches(5.3), rh, why, sz=11, c=TXT, an=MSO_ANCHOR.MIDDLE)
    # 关键
    rc(s, Inches(0.6), Inches(5.5), Inches(12.1), Inches(1.6), WHT, line=LGT)
    rc(s, Inches(0.6), Inches(5.5), Inches(12.1), Inches(0.5), DARK)
    tx(s, Inches(0.8), Inches(5.5), Inches(11.7), Inches(0.5), "为什么同伴互助比讲师跟进更有效", sz=14, c=WHT, b=True, an=MSO_ANCHOR.MIDDLE)
    keys = [
        "① 同伴的反馈比讲师更具体（讲师不懂学员的真实工作场景）",
        "② 同伴的陪伴产生群体压力（不能让同伴失望）",
        "③ 互助会变成学员的社交需求（学完留下人脉）",
    ]
    for i, k in enumerate(keys):
        tx(s, Inches(1.0), Inches(6.1 + i * 0.32), Inches(11.5), Inches(0.3), k, sz=12, c=TXT)
    ftr(s)
    note(s, "【5.2 90 天同伴互助】\n\n讲师话术 5.2.3：\n90 天同伴互助怎么设计——\n\n小组构成：2-3 人，同一行业/同一岗位优先\n会议频率：每周 1 次，30 分钟\n会议内容：每人 5 分钟分享本周应用 + 5 分钟反馈\n会议形式：线上视频为主，关键节点可线下\n讲师角色：前 4 周讲师参与 1 次，之后退出\n\n为什么同伴互助比讲师跟进更有效：\n1. 同伴的反馈比讲师更具体（讲师不懂学员的真实工作场景）\n2. 同伴的陪伴产生群体压力（不能让同伴失望）\n3. 互助会变成学员的社交需求（学完留下人脉）\n\n90 天同伴互助是 30 天打卡的补充——打卡是被动触发，互助是主动反馈。\n\n推荐组合：30 天打卡 + 90 天同伴互助。")


def P62():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 62, "第五章 · 训后跟进", "5.2 · 跟进四法详解 · 工作场景应用日志")
    rc(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.4), GOLD)
    tx(s, Inches(0.8), Inches(1.4), Inches(11.7), Inches(0.3),
       "工作场景应用日志 · 30 天内 5-10 个真实场景记录", sz=14, c=WHT, b=True)
    # 日志结构
    headers = ["场景编号", "日期", "工作场景", "新方法", "过程", "结果", "反思”]"
    cw = [Inches(1.0), Inches(1.1), Inches(2.5), Inches(2.0), Inches(2.5), Inches(1.5), Inches(1.5)]
    rx = Inches(0.6)
    ry = Inches(2.0)
    rh = Inches(0.5)
    rc(s, rx, ry, Inches(12.1), rh, DARK)
    x = rx
    for i, h in enumerate(headers):
        tx(s, x + Inches(0.1), ry, cw[i] - Inches(0.2), rh, h, sz=11, c=WHT, b=True, an=MSO_ANCHOR.MIDDLE)
        x += cw[i]
    sample = [
        ("01", "6/15", "客户价格异议", "认同+反问", "先说理解您的预算考虑，您能告诉我您具体担心什么吗？", "客户说出真实顾虑", "认同比反驳更有效"),
        ("02", "6/17", "客户比较竞品", "对比维度", "我问了客户最看重什么，他说售后", "针对售后讲了我们的优势", "反问比自夸更有效"),
        ("03", "6/19", "客户拖延", "二选一", "您是这周定还是下周定？", "客户说下周定", "明确选择推动决策"),
    ]
    for r, row in enumerate(sample):
        y = ry + rh * (r + 1)
        fill = LBG if r % 2 == 0 else WHT
        x = rx
        for c, cell in enumerate(row):
            color = RED if c == 0 else (DARK if c == 3 else TXT)
            b = c in (0, 3)
            sz = 10
            rc(s, x, y, cw[c], rh, fill, line=LGT)
            tx(s, x + Inches(0.1), y, cw[c] - Inches(0.2), rh, cell, sz=sz, c=color, b=b, an=MSO_ANCHOR.MIDDLE)
            x += cw[c]
    # 关键
    rc(s, Inches(0.6), Inches(4.5), Inches(12.1), Inches(2.5), WHT, line=LGT)
    rc(s, Inches(0.6), Inches(4.5), Inches(12.1), Inches(0.5), DARK)
    tx(s, Inches(0.8), Inches(4.5), Inches(11.7), Inches(0.5), "应用日志的 3 个特点", sz=14, c=WHT, b=True, an=MSO_ANCHOR.MIDDLE)
    pts = [
        ("真实", "必须是真实工作场景，不是模拟或假设", "讲师可以从日志里看到学员的真实工作"),
        ("具体", "必须有时间、客户、方法、过程、结果", "模糊的日志没有复盘价值"),
        ("反思", "必须写 1-2 句反思（这次做对了什么，下次可以怎么调整）", "反思才是真正的学习"),
    ]
    for i, (t, desc, why) in enumerate(pts):
        y = Inches(5.1 + i * 0.55)
        c = [RED, GREEN, GOLD][i]
        tx(s, Inches(1.0), y, Inches(1.5), Inches(0.4), "✓ “ + t, sz=14, c=c, b=True)"
        tx(s, Inches(2.7), y, Inches(5.0), Inches(0.4), desc, sz=11, c=TXT)
        tx(s, Inches(7.8), y, Inches(4.8), Inches(0.4), "→ “ + why, sz=11, c=GRY)"
    ftr(s)
    note(s, "【5.2 工作场景应用日志】\n\n讲师话术 5.2.4：\n工作场景应用日志——30 天内 5-10 个真实场景记录。\n\n日志结构：\n- 场景编号\n- 日期\n- 工作场景（什么场景）\n- 新方法（用了什么新方法）\n- 过程（具体怎么做的）\n- 结果（结果如何）\n- 反思（这次做对了什么，下次可以怎么调整）\n\n3 个特点：\n1. 真实：必须是真实工作场景，不是模拟或假设。\n   讲师可以从日志里看到学员的真实工作。\n2. 具体：必须有时间、客户、方法、过程、结果。\n   模糊的日志没有复盘价值。\n3. 反思：必须写 1-2 句反思。\n   反思才是真正的学习。\n\n应用日志是工作坊效果的最直接证据。\n\n讲师可以根据日志判断学员是真的在用新方法，还是停留在知道的层面。")


def P63():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 63, "第五章 · 训后跟进", "5.2 · 跟进四法详解 · 30 天实施报告")
    rc(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.4), RED)
    tx(s, Inches(0.8), Inches(1.4), Inches(11.7), Inches(0.3),
       "30 天实施报告 · 1 页结构化总结", sz=14, c=WHT, b=True)
    # 报告结构
    sections = [
        ("1. 这 30 天的应用情况", "应用了多少次？成功了多少次？遇到什么困难？"),
        ("2. 最有启发的 1-3 个洞见", "工作坊讨论的哪个点对您最有帮助？为什么？"),
        ("3. 还存在的 1-3 个困惑", "工作坊讨论的哪个点您还没完全理解？还需要什么支持？"),
        ("4. 下 30 天的应用计划", "您接下来 30 天打算怎么应用？需要什么支持？"),
        ("5. 对工作坊的反馈", "您觉得工作坊最有价值的部分是什么？哪些可以改进？"),
    ]
    rh = Inches(0.7)
    rx = Inches(0.6)
    ry = Inches(2.0)
    cw = [Inches(4.5), Inches(7.6)]
    for r, (t, desc, c) in enumerate([(s[0], s[1], [RED, GREEN, GOLD, RED, GREEN][i]) for i, s in enumerate(sections)]):
        y = ry + rh * r
        fill = LBG if r % 2 == 0 else WHT
        x = rx
        rc(s, x, y, Inches(12.1), rh, fill, line=LGT)
        rc(s, x, y, Inches(0.15), rh, c)
        tx(s, x + Inches(0.3), y, Inches(4.4), rh, t, sz=13, c=DARK, b=True, an=MSO_ANCHOR.MIDDLE)
        tx(s, x + Inches(4.7), y, Inches(7.3), rh, desc, sz=11, c=TXT, an=MSO_ANCHOR.MIDDLE)
    # 关键
    rc(s, Inches(0.6), Inches(5.7), Inches(12.1), Inches(1.4), WHT, line=LGT)
    rc(s, Inches(0.6), Inches(5.7), Inches(12.1), Inches(0.5), DARK)
    tx(s, Inches(0.8), Inches(5.7), Inches(11.7), Inches(0.5), "实施报告的双重价值", sz=14, c=WHT, b=True, an=MSO_ANCHOR.MIDDLE)
    vals = [
        ("对学员", "强迫自己总结——把零散应用变成系统反思", RED),
        ("对讲师", "看到工作坊的真实效果——是评估 ROI 的核心证据", GREEN),
        ("对组织", "识别可以复制的优秀实践 / 需要改进的环节", GOLD),
    ]
    for i, (t, desc, c) in enumerate(vals):
        y = Inches(6.3 + i * 0.27)
        tx(s, Inches(1.0), y, Inches(1.5), Inches(0.3), t, sz=12, c=c, b=True)
        tx(s, Inches(2.6), y, Inches(9.5), Inches(0.3), desc, sz=11, c=TXT)
    ftr(s)
    note(s, "【5.2 30 天实施报告】\n\n讲师话术 5.2.5：\n30 天实施报告——1 页结构化总结。\n\n报告结构：\n1. 这 30 天的应用情况：应用了多少次？成功了多少次？遇到什么困难？\n2. 最有启发的 1-3 个洞见：工作坊讨论的哪个点对您最有帮助？\n3. 还存在的 1-3 个困惑：工作坊讨论的哪个点您还没完全理解？\n4. 下 30 天的应用计划：您接下来 30 天打算怎么应用？\n5. 对工作坊的反馈：哪些最有价值？哪些可以改进？\n\n实施报告的双重价值：\n- 对学员：强迫自己总结——把零散应用变成系统反思\n- 对讲师：看到工作坊的真实效果——是评估 ROI 的核心证据\n- 对组织：识别可以复制的优秀实践 / 需要改进的环节\n\n30 天实施报告是跟进四法的最后一步——它让学员 30 天的工作可视化。\n\n讲师可以根据 30 天实施报告决定是否需要二次工作坊。")


def P64():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 64, "第五章 · 训后跟进", "5.3 · 静远的 30 天跟进")
    rc(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.4), RED)
    tx(s, Inches(0.8), Inches(1.4), Inches(11.7), Inches(0.3), "静远的 30 天跟进时间表", sz=14, c=WHT, b=True)
    timeline = [
        ("第 1 天", "课后 24 小时内", "微信群推送", "【第 1 课】您今天用了哪个新方法？", "RED"),
        ("第 2-7 天", "每天 21:00", "30 天打卡", "1 分钟打卡（场景+方法+结果）", "GREEN"),
        ("第 7 天", "工作坊后第 7 天", "同伴互助 1", "30 分钟视频会（3 人小组）", "GOLD"),
        ("第 8-14 天", "每天 21:00", "30 天打卡", "持续 1 分钟打卡", "RED"),
        ("第 14 天", "工作坊后第 14 天", "讲师群内答疑", "1 小时集中答疑", "GREEN"),
        ("第 15-30 天", "每天 21:00", "30 天打卡", "持续 1 分钟打卡", "GOLD"),
        ("第 21 天", "工作坊后第 21 天", "同伴互助 2", "30 分钟视频会（3 人小组）", "RED"),
        ("第 30 天", "工作坊后第 30 天", "30 天实施报告", "1 页报告提交", "GREEN"),
    ]
    rx = Inches(0.6)
    ry = Inches(2.0)
    rh = Inches(0.55)
    cw = [Inches(2.0), Inches(2.0), Inches(2.0), Inches(4.0), Inches(2.1)]
    for r, row in enumerate([("时间", "节点", "形式", "内容", "讲师投入")] + timeline):
        is_h = (r == 0)
        y = ry + rh * r
        x = rx
        for c, cell in enumerate(row):
            fill = DARK if is_h else (LBG if r % 2 == 0 else WHT)
            color = WHT if is_h else TXT
            b = is_h or (not is_h and c == 0)
            sz = 11
            rc(s, x, y, cw[c], rh, fill, line=LGT)
            tx(s, x + Inches(0.1), y, cw[c] - Inches(0.2), rh, cell, sz=sz, c=color, b=b, an=MSO_ANCHOR.MIDDLE)
            x += cw[c]
    ftr(s)
    note(s, "【5.3 静远的 30 天跟进】\n\n讲师话术 5.3.1：\n我们看静远是怎么用 30 天跟进让学员真正落地的。\n\n静远的 30 天跟进时间表：\n- 第 1 天：课后 24 小时内，微信群推送，【第 1 课】您今天用了哪个新方法？\n- 第 2-7 天：每天 21:00，30 天打卡，1 分钟打卡（场景+方法+结果）\n- 第 7 天：工作坊后第 7 天，同伴互助 1，30 分钟视频会（3 人小组）\n- 第 8-14 天：每天 21:00，30 天打卡，持续 1 分钟打卡\n- 第 14 天：工作坊后第 14 天，讲师群内答疑，1 小时集中答疑\n- 第 15-30 天：每天 21:00，30 天打卡，持续 1 分钟打卡\n- 第 21 天：工作坊后第 21 天，同伴互助 2，30 分钟视频会（3 人小组）\n- 第 30 天：工作坊后第 30 天，30 天实施报告，1 页报告提交\n\n静远的 30 天跟进有几个关键：\n1. 持续节奏感（每天打卡 + 每周互助）\n2. 关键节点设（7 天、14 天、21 天、30 天）\n3. 形式多样化（推送、打卡、视频、报告）\n4. 讲师有节奏地参与（不全程在线）")


def P65():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 65, "第五章 · 训后跟进", "5.3 · 静远的 30 天跟进 · 效果数据")
    rc(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.4), DARK)
    tx(s, Inches(0.8), Inches(1.4), Inches(11.7), Inches(0.3), "静远 30 天跟进的效果数据", sz=14, c=WHT, b=True)
    # 数据
    data = [
        ("打卡率", "30 天平均", "82%", "70% 以上的打卡率 = 工作坊有效", RED),
        ("30 天实施报告提交率", "第 30 天", "95%", "大部分学员都提交了", GREEN),
        ("新方法使用频率", "30 天内", "平均 8 次/人", "5 次以上 = 工作坊内化", GOLD),
        ("学员满意度", "30 天后", "9.2/10", "对比无跟进的工作坊 6.5/10", RED),
        ("业务指标变化", "30 天后", "异议处理成功率 +18%", "学员的销售业绩提升", GREEN),
    ]
    rh = Inches(0.7)
    rx = Inches(0.6)
    ry = Inches(2.0)
    cw = [Inches(2.5), Inches(1.7), Inches(1.7), Inches(6.2)]
    for r, (t, sub, val, note_, c) in enumerate(data):
        y = ry + rh * r
        fill = LBG if r % 2 == 0 else WHT
        x = rx
        rc(s, x, y, Inches(12.1), rh, fill, line=LGT)
        rc(s, x, y, Inches(0.15), rh, c)
        tx(s, x + Inches(0.3), y, Inches(2.4), rh, t, sz=13, c=DARK, b=True, an=MSO_ANCHOR.MIDDLE)
        tx(s, x + Inches(2.8), y, Inches(1.6), rh, sub, sz=10, c=GRY, an=MSO_ANCHOR.MIDDLE)
        tx(s, x + Inches(4.5), y, Inches(1.6), rh, val, sz=15, c=c, b=True, an=PP_ALIGN.CENTER, an=MSO_ANCHOR.MIDDLE)
        tx(s, x + Inches(6.2), y, Inches(5.8), rh, note_, sz=11, c=TXT, an=MSO_ANCHOR.MIDDLE)
    # 关键洞察
    rc(s, Inches(0.6), Inches(5.7), Inches(12.1), Inches(1.4), WHT, line=LGT)
    rc(s, Inches(0.6), Inches(5.7), Inches(12.1), Inches(0.5), DARK)
    tx(s, Inches(0.8), Inches(5.7), Inches(11.7), Inches(0.5), "关键洞察", sz=14, c=WHT, b=True, an=MSO_ANCHOR.MIDDLE)
    insights = [
        "① 30 天跟进让工作坊效果提升 3 倍（vs 无跟进）",
        "② 业务指标变化是最有说服力的证据（异议处理成功率 +18%）",
        "③ 30 天实施报告是 ROI 评估的核心",
    ]
    for i, ins in enumerate(insights):
        tx(s, Inches(1.0), Inches(6.3 + i * 0.27), Inches(11.5), Inches(0.3), ins, sz=12, c=TXT)
    ftr(s)
    note(s, "【5.3 静远 30 天跟进效果数据】\n\n讲师话术 5.3.2：\n静远 30 天跟进的效果数据：\n\n- 打卡率：30 天平均 82%（70% 以上的打卡率 = 工作坊有效）\n- 30 天实施报告提交率：95%（大部分学员都提交了）\n- 新方法使用频率：30 天内平均 8 次/人（5 次以上 = 工作坊内化）\n- 学员满意度：9.2/10（对比无跟进的工作坊 6.5/10）\n- 业务指标变化：30 天后异议处理成功率 +18%\n\n关键洞察：\n1. 30 天跟进让工作坊效果提升 3 倍（vs 无跟进）\n2. 业务指标变化是最有说服力的证据（异议处理成功率 +18%）\n3. 30 天实施报告是 ROI 评估的核心\n\n静远的成功不是工作坊设计得多好，而是 30 天跟进做得到位。\n\n很多讲师把 80% 的精力放在工作坊设计上，把 20% 的精力放在跟进上——这是错的。\n\n正确比例：30% 工作坊设计 + 70% 跟进。")


def P66():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 66, "第五章 · 训后跟进", "5.4 · Activity 5A · 我的跟进计划")
    rc(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.5), DARK)
    tx(s, Inches(0.8), Inches(1.4), Inches(11.7), Inches(0.3),
       "实战设计  |  25 分钟个人设计 + 25 分钟小组共创",
       sz=14, c=WHT, b=True)
    rc(s, Inches(0.6), Inches(2.0), Inches(12.1), Inches(1.0), LBG)
    tx(s, Inches(0.8), Inches(2.1), Inches(11.7), Inches(0.4), "设计任务", sz=14, c=RED, b=True)
    tx(s, Inches(0.8), Inches(2.5), Inches(11.7), Inches(0.4),
       "基于您课前填写的我的引导场景，从 4 种跟进方法中选择 2-3 种，设计您工作坊后的跟进计划。",
       sz=12, c=DARK)
    steps = [
        ("1", "选择跟进方法", "10 min", "从 4 种方法中选择 2-3 种"),
        ("2", "设计具体安排", "15 min", "时间节点 + 形式 + 内容 + 讲师投入"),
        ("3", "小组共创", "25 min", "3-4 人小组分享 + 反馈 + 互助承诺"),
    ]
    for i, (n, t, time, desc) in enumerate(steps):
        x = Inches(0.6 + i * 4.2)
        rc(s, x, Inches(3.2), Inches(3.9), Inches(2.5), WHT, line=LGT)
        colors = [RED, GREEN, GOLD]
        rc(s, x, Inches(3.2), Inches(3.9), Inches(0.5), colors[i])
        tx(s, x + Inches(0.2), Inches(3.25), Inches(0.6), Inches(0.5), n, sz=22, c=WHT, b=True)
        tx(s, x + Inches(0.9), Inches(3.3), Inches(2.0), Inches(0.4), t, sz=14, c=WHT, b=True)
        tx(s, x + Inches(2.7), Inches(3.3), Inches(1.1), Inches(0.4), time, sz=11, c=WHT, al=PP_ALIGN.RIGHT)
        tx(s, x + Inches(0.2), Inches(3.85), Inches(3.5), Inches(1.8), desc, sz=11, c=TXT)
    rc(s, Inches(0.6), Inches(5.9), Inches(12.1), Inches(1.3), DARK)
    tx(s, Inches(0.8), Inches(6.0), Inches(11.7), Inches(0.4), "小组共创关键问题", sz=12, c=RED, b=True)
    tx(s, Inches(0.8), Inches(6.35), Inches(11.7), Inches(0.85),
       "① 这个跟进计划能持续 30 天吗？  ② 这个跟进能让学员持续应用新方法吗？  ③ 这个跟进能让您看到学员的真实应用情况吗？  ④ 您愿意承诺执行这个计划吗？",
       sz=11, c=WHT)
    ftr(s)
    note(s, "【5.4 Activity 5A】\n\n实战设计。\n\n讲师话术 5.4.1：\n现在请您用 25 分钟，基于您课前填写的我的引导场景，从 4 种跟进方法中选择 2-3 种，设计您工作坊后的跟进计划。\n\n我会 25 分钟后叫停，然后进入小组共创。\n\n[10 分钟 · 选择方法 + 15 分钟 · 写具体安排]\n\n讲师话术 5.4.2：\n现在请您和小组（3-4 人）分享您的跟进计划。\n\n请用这四个问题来检查别人的计划：\n1. 这个跟进计划能持续 30 天吗？\n2. 这个跟进能让学员持续应用新方法吗？\n3. 这个跟进能让您看到学员的真实应用情况吗？\n4. 您愿意承诺执行这个计划吗？\n\n更重要的是：在小组里做一个 30 天互助承诺——您和小组同伴约定 30 天后互相检查跟进执行情况。\n\n[25 分钟 · 巡视 + 必要时叫停]\n\n巡视重点：\n- 学员最容易出现的问题：只选打卡（30 天打卡是最容易做的，但效果有限）\n- 学员最容易出现的问题：没有承诺机制\n- 学员做得好的地方：组合 2-3 种方法（打卡 + 互助 + 报告）")


def P67():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 67, "第五章 · 训后跟进", "5.4 · 跟进计划的承诺")
    rc(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.4), RED)
    tx(s, Inches(0.8), Inches(1.4), Inches(11.7), Inches(0.3), "跟进计划的承诺", sz=14, c=WHT, b=True)
    rc(s, Inches(0.6), Inches(2.0), Inches(12.1), Inches(1.2), LBG)
    tx(s, Inches(0.8), Inches(2.1), Inches(11.7), Inches(0.4), "个人承诺", sz=14, c=RED, b=True)
    tx(s, Inches(0.8), Inches(2.5), Inches(11.7), Inches(0.4),
       "我承诺在未来 30 天内执行我刚才设计的跟进计划。", sz=14, c=DARK, b=True)
    tx(s, Inches(0.8), Inches(2.85), Inches(11.7), Inches(0.3),
       "签字：__________________________   日期：__________", sz=12, c=GRY)
    rc(s, Inches(0.6), Inches(3.4), Inches(12.1), Inches(1.2), LBG)
    tx(s, Inches(0.8), Inches(3.5), Inches(11.7), Inches(0.4), "小组互助承诺", sz=14, c=GREEN, b=True)
    tx(s, Inches(0.8), Inches(3.9), Inches(11.7), Inches(0.4),
       "我们 3-4 人小组承诺在 30 天后互相检查跟进执行情况。", sz=14, c=DARK, b=True)
    tx(s, Inches(0.8), Inches(4.25), Inches(11.7), Inches(0.3),
       "小组成员签字：__________________ __________________ __________________", sz=12, c=GRY)
    rc(s, Inches(0.6), Inches(4.8), Inches(12.1), Inches(2.3), WHT, line=LGT)
    rc(s, Inches(0.6), Inches(4.8), Inches(12.1), Inches(0.5), DARK)
    tx(s, Inches(0.8), Inches(4.8), Inches(11.7), Inches(0.5), "为什么承诺有效", sz=14, c=WHT, b=True, an=MSO_ANCHOR.MIDDLE)
    pts = [
        ("写下承诺比口头承诺强 10 倍", "心理学研究：写下承诺的人 70% 会执行，口头承诺只有 7%", RED),
        ("小组互助承诺比个人承诺强 3 倍", "社会压力：我们不能让同伴失望", GREEN),
        ("承诺的具体性决定执行率", "模糊承诺：我会跟进。具体承诺：我会在 30 天内每天 21:00 推送打卡提醒", GOLD),
    ]
    for i, (t, desc, c) in enumerate(pts):
        y = Inches(5.4 + i * 0.55)
        tx(s, Inches(0.9), y, Inches(3.0), Inches(0.4), "✓ “ + t, sz=12, c=c, b=True)"
        tx(s, Inches(4.0), y, Inches(8.5), Inches(0.4), desc, sz=11, c=TXT)
    ftr(s)
    note(s, "【5.4 跟进计划的承诺】\n\n讲师话术 5.4.3：\n最后我们做跟进计划的承诺。\n\n请在手册 Activity 5A 写下您的个人承诺——\n我承诺在未来 30 天内执行我刚才设计的跟进计划。\n\n签字 + 日期。\n\n讲师话术 5.4.4：\n然后和您的小组一起做小组互助承诺——\n我们 3-4 人小组承诺在 30 天后互相检查跟进执行情况。\n\n小组成员签字。\n\n为什么承诺有效：\n1. 写下承诺比口头承诺强 10 倍：心理学研究，写下承诺的人 70% 会执行，口头承诺只有 7%。\n2. 小组互助承诺比个人承诺强 3 倍：社会压力，我们不能让同伴失望。\n3. 承诺的具体性决定执行率：模糊承诺（我会跟进）执行力低；具体承诺（我会在 30 天内每天 21:00 推送打卡提醒）执行力高。\n\n请认真写下您的承诺——这将是您工作坊后 30 天的执行依据。")
'''
with open('gen_pptx_part2.py', 'a', encoding='utf-8') as f:
    f.write(code)
print('P61-P67 OK, lines:', sum(1 for _ in open('gen_pptx_part2.py', encoding='utf-8')))
