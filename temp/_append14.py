# -*- coding: utf-8 -*-
code = r'''


def P107():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 107, "讲师常见问题", "Q1-Q4 · 学员沉默/冷场/讨论不充分")
    rc(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.4), DARK)
    tx(s, Inches(0.8), Inches(1.4), Inches(11.7), Inches(0.3),
       "讲师常见问题 Q1-Q4 · 学员沉默/冷场/讨论不充分", sz=14, c=WHT, b=True)
    faqs = [
        ("Q1", "学员不发言", "我问了 30 秒没人回答，冷场", "破冰式 + 5-10 人小组 + 2 人结对先讨论 2 分钟", RED),
        ("Q2", "学员讨论不充分", "小组讨论只有 2-3 个人说，其他人沉默", "明确分工（主持/记录/计时/汇报）+ 每人必须说 1 次", GREEN),
        ("Q3", "学员回答太短", "学员只说 1-2 句就停了", "追问到底：”然后呢？””那具体是什么？””您当时什么感觉？””", GOLD),
        ("Q4", "学员偏离主题", "学员讨论到与主题无关的事情", "20 分钟强制收回来：”好，各位，我们回到刚才的主题——”", RED),
    ]
    rh = Inches(1.2)
    rx = Inches(0.6)
    ry = Inches(2.0)
    for i, (n, q, desc, ans, c) in enumerate(faqs):
        y = ry + rh * i
        rc(s, rx, y, Inches(12.1), rh, WHT, line=LGT)
        rc(s, rx, y, Inches(0.15), rh, c)
        tx(s, rx + Inches(0.3), y + Inches(0.1), Inches(0.8), Inches(0.5), n, sz=22, c=c, b=True, al=PP_ALIGN.CENTER)
        tx(s, rx + Inches(1.2), y + Inches(0.1), Inches(2.5), Inches(0.4), q, sz=14, c=DARK, b=True)
        tx(s, rx + Inches(1.2), y + Inches(0.5), Inches(2.5), Inches(0.6), desc, sz=10, c=GRY)
        tx(s, rx + Inches(4.0), y + Inches(0.1), Inches(8.0), Inches(0.4), "解法：", sz=12, c=c, b=True)
        tx(s, rx + Inches(4.0), y + Inches(0.5), Inches(8.0), Inches(0.6), ans, sz=11, c=TXT)
    ftr(s)
    note(s, "【Q1-Q4 常见问题】\n\n讲师话术 F1：\n讲师常见的 4 个问题及解法——\n\nQ1：学员不发言，我问了 30 秒没人回答，冷场。\n解法：破冰式 + 5-10 人小组 + 2 人结对先讨论 2 分钟\n\nQ2：学员讨论不充分，小组讨论只有 2-3 个人说，其他人沉默。\n解法：明确分工（主持/记录/计时/汇报）+ 每人必须说 1 次\n\nQ3：学员回答太短，学员只说 1-2 句就停了。\n解法：追问到底——”然后呢？””那具体是什么？”您当时什么感觉？", "\n\nQ4：学员偏离主题，学员讨论到与主题无关的事情。\n解法：20 分钟强制收回来——”好，各位，我们回到刚才的主题——”\n\n讲师话术 F2：\n4 个问题的核心都是”讲师要主动”——\n- Q1 冷场：讲师要主动设计破冰\n- Q2 沉默：讲师要主动分工\n- Q3 太短：讲师要主动追问\n- Q4 偏离：讲师要主动收回\n\n讲师不要等学员主动——讲师的工作是创造条件让学员开口。")


def P108():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 108, "讲师常见问题", "Q5-Q8 · 时间控制/学员挑战/R3设计")
    rc(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.4), DARK)
    tx(s, Inches(0.8), Inches(1.4), Inches(11.7), Inches(0.3),
       "讲师常见问题 Q5-Q8 · 时间控制/学员挑战/R3 设计", sz=14, c=WHT, b=True)
    faqs = [
        ("Q5", "时间不够", "R3 用了 2 小时还没讨论完", "硬切：”好，各位，我们只剩 5 分钟，请每组用 1 分钟汇报", GREEN),
        ("Q6", "学员挑战", "学员说”您这个方法在我们行业没用", ", “先认同：”您说得对，那在您那个场景下，您会怎么调整？””", GOLD),
        ("Q7", "R3 设计太难", "我不知道怎么设计 30 分钟的深问讨论", "从 4 类问题（开放式/追问/比较/反思）各选 2-3 个即可", RED),
        ("Q8", "跟进没时间", "工作坊后我没时间做 30 天跟进", "30 天打卡 = 每天 1 条微信，不用单独做课件", GREEN),
    ]
    rh = Inches(1.2)
    rx = Inches(0.6)
    ry = Inches(2.0)
    for i, (n, q, desc, ans, c) in enumerate(faqs):
        y = ry + rh * i
        rc(s, rx, y, Inches(12.1), rh, WHT, line=LGT)
        rc(s, rx, y, Inches(0.15), rh, c)
        tx(s, rx + Inches(0.3), y + Inches(0.1), Inches(0.8), Inches(0.5), n, sz=22, c=c, b=True, al=PP_ALIGN.CENTER)
        tx(s, rx + Inches(1.2), y + Inches(0.1), Inches(2.5), Inches(0.4), q, sz=14, c=DARK, b=True)
        tx(s, rx + Inches(1.2), y + Inches(0.5), Inches(2.5), Inches(0.6), desc, sz=10, c=GRY)
        tx(s, rx + Inches(4.0), y + Inches(0.1), Inches(8.0), Inches(0.4), "解法：", sz=12, c=c, b=True)
        tx(s, rx + Inches(4.0), y + Inches(0.5), Inches(8.0), Inches(0.6), ans, sz=11, c=TXT)
    ftr(s)
    note(s, "【Q5-Q8 常见问题】\n\n讲师话术 F3：\n讲师常见的另外 4 个问题及解法——\n\nQ5：时间不够，R3 用了 2 小时还没讨论完。\n解法：硬切——”好，各位，我们只剩 5 分钟，请每组用 1 分钟汇报”\n\nQ6：学员挑战，学员说”您这个方法在我们行业没用”。\n解法：先认同——”您说得对，那在您那个场景下，您会怎么调整？”\n\nQ7：R3 设计太难，我不知道怎么设计 30 分钟的深问讨论。\n解法：从 4 类问题（开放式/追问/比较/反思）各选 2-3 个即可\n\nQ8：跟进没时间，工作坊后我没时间做 30 天跟进。\n解法：30 天打卡 = 每天 1 条微信，不用单独做课件\n\n讲师话术 F4：\n注意 Q6 学员挑战的处理——\n- 不要直接反驳（学员会反感）\n- 不要认输（讲师失去权威）\n- 先认同 + 反问：”您说得对，那在您那个场景下，您会怎么调整？”\n\n这个技巧的关键是：把学员的挑战变成学员的思考。\n\n讲师话术 F5：\n注意 Q8 跟进没时间——\n- 30 天跟进不需要每天做课件\n- 只需要每天发 1 条微信（包含 1 个问题 + 1 个例子）\n- 1 条微信 5 分钟可以写完\n- 30 天 = 150 分钟（2.5 小时）\n\n这就是讲师”轻跟进”的核心。")


def P109():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 109, "讲师常见问题", "Q9-Q12 · 工作坊效果评估")
    rc(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.4), DARK)
    tx(s, Inches(0.8), Inches(1.4), Inches(11.7), Inches(0.3),
       "讲师常见问题 Q9-Q12 · 工作坊效果评估", sz=14, c=WHT, b=True)
    faqs = [
        ("Q9", "学员满意但不用", "工作坊评分 4.5/5，但 30 天后学员还是用老方法", "工作坊只解决”知道”，要靠跟进让学员”做到”", RED),
        ("Q10", "学员满意度低", "工作坊评分 3.0/5，学员觉得没干货", "R3 设计偏少（讲师讲太多）+ 跟进缺失", GREEN),
        ("Q11", "业务方不满", "业务管理者说”工作坊对业务没帮助", ", “工作坊前没问业务管理者具体期望 + 工作坊后没汇报", GOLD),
        ("Q12", "学员流失", "30 天后学员陆续退出工作坊群", "3 天没打卡就私聊提醒 + 7 天没打卡就电话沟通", RED),
    ]
    rh = Inches(1.2)
    rx = Inches(0.6)
    ry = Inches(2.0)
    for i, (n, q, desc, ans, c) in enumerate(faqs):
        y = ry + rh * i
        rc(s, rx, y, Inches(12.1), rh, WHT, line=LGT)
        rc(s, rx, y, Inches(0.15), rh, c)
        tx(s, rx + Inches(0.3), y + Inches(0.1), Inches(0.8), Inches(0.5), n, sz=22, c=c, b=True, al=PP_ALIGN.CENTER)
        tx(s, rx + Inches(1.2), y + Inches(0.1), Inches(2.5), Inches(0.4), q, sz=14, c=DARK, b=True)
        tx(s, rx + Inches(1.2), y + Inches(0.5), Inches(2.5), Inches(0.6), desc, sz=10, c=GRY)
        tx(s, rx + Inches(4.0), y + Inches(0.1), Inches(8.0), Inches(0.4), "解法：", sz=12, c=c, b=True)
        tx(s, rx + Inches(4.0), y + Inches(0.5), Inches(8.0), Inches(0.6), ans, sz=11, c=TXT)
    ftr(s)
    note(s, "【Q9-Q12 常见问题】\n\n讲师话术 F6：\n讲师常见的效果评估 4 个问题及解法——\n\nQ9：学员满意但不用，工作坊评分 4.5/5，但 30 天后学员还是用老方法。\n解法：工作坊只解决”知道”，要靠跟进让学员”做到”\n\nQ10：学员满意度低，工作坊评分 3.0/5，学员觉得没干货。\n解法：R3 设计偏少（讲师讲太多）+ 跟进缺失\n\nQ11：业务方不满，业务管理者说”工作坊对业务没帮助”。\n解法：工作坊前没问业务管理者具体期望 + 工作坊后没汇报\n\nQ12：学员流失，30 天后学员陆续退出工作坊群。\n解法：3 天没打卡就私聊提醒 + 7 天没打卡就电话沟通\n\n讲师话术 F7：\nQ9 是最隐蔽的——学员满意但不用。\n- 工作坊评估只有 1 次（工作坊结束时）\n- 但实际行为改变需要 30 天\n- 评估方法：工作坊后第 30 天做”行为评估”，看学员是否真的用了新方法\n\n讲师话术 F8：\nQ11 业务方不满——工作坊前一定要问业务管理者 3 个问题：\n1. 您希望 30 天后学员能做什么？\n2. 您愿意为这个工作坊投入多少时间？\n3. 工作坊后您愿意参与跟进吗？\n\n工作坊后一定要给业务管理者发 1 份报告：\n- 学员打卡数据（多少人在坚持）\n- 学员 30 天实施报告（学员的真实反馈）\n- 学员行为改变案例（1-2 个具体案例）")


def P110():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 110, "讲师成长路径", "从新人到专家的 5 个阶段")
    rc(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.4), DARK)
    tx(s, Inches(0.8), Inches(1.4), Inches(11.7), Inches(0.3),
       "讲师成长路径 · 5 个阶段", sz=14, c=WHT, b=True)
    stages = [
        ("1. 新人讲师", "能讲工作坊", "0-6 个月", "按模板讲工作坊 + 收集学员反馈", RED),
        ("2. 熟练讲师", "能调整工作坊", "6-18 个月", "根据学员反馈调整 R3 + 设计跟进", GREEN),
        ("3. 进阶讲师", "能设计工作坊", "1.5-3 年", "独立设计 4R 工作坊 + 建立个人案例库", GOLD),
        ("4. 高级讲师", "能传授工作坊", "3-5 年", "辅导新人讲师 + 设计课程体系", RED),
        ("5. 专家讲师", "能创新工作坊", "5 年以上", "研究新方法 + 发表文章 + 行业分享", GREEN),
    ]
    rh = Inches(0.85)
    rx = Inches(0.6)
    ry = Inches(2.0)
    cw = [Inches(1.6), Inches(2.2), Inches(1.7), Inches(6.6)]
    for r, row in enumerate([("阶段", "能力", "时长", "关键动作")] + stages):
        is_h = (r == 0)
        y = ry + rh * r
        x = rx
        for c, cell in enumerate(row):
            fill = DARK if is_h else (LBG if r % 2 == 0 else WHT)
            color = WHT if is_h else (RED if c == 0 else TXT)
            b = is_h or (not is_h and c == 0)
            sz = 11
            rc(s, x, y, cw[c], rh, fill, line=LGT)
            tx(s, x + Inches(0.1), y, cw[c] - Inches(0.2), rh, cell, sz=sz, c=color, b=b, an=MSO_ANCHOR.MIDDLE)
            x += cw[c]
    rc(s, Inches(0.6), Inches(6.6), Inches(12.1), Inches(0.55), DARK)
    tx(s, Inches(0.8), Inches(6.6), Inches(11.7), Inches(0.55),
       "关键洞察：5 个阶段的关键是”工作坊设计能力”的成长——从按模板到独立设计到创新", sz=12, c=WHT, b=True, an=MSO_ANCHOR.MIDDLE)
    ftr(s)
    note(s, "【讲师成长路径】\n\n讲师话术 G1：\n讲师成长的 5 个阶段——\n\n1. 新人讲师（0-6 个月）：能讲工作坊\n   关键动作：按模板讲工作坊 + 收集学员反馈\n\n2. 熟练讲师（6-18 个月）：能调整工作坊\n   关键动作：根据学员反馈调整 R3 + 设计跟进\n\n3. 进阶讲师（1.5-3 年）：能设计工作坊\n   关键动作：独立设计 4R 工作坊 + 建立个人案例库\n\n4. 高级讲师（3-5 年）：能传授工作坊\n   关键动作：辅导新人讲师 + 设计课程体系\n\n5. 专家讲师（5 年以上）：能创新工作坊\n   关键动作：研究新方法 + 发表文章 + 行业分享\n\n讲师话术 G2：\n5 个阶段的关键是”工作坊设计能力”的成长——\n- 阶段 1-2：能”讲”工作坊（按模板/调整模板）\n- 阶段 3-4：能”设计”工作坊（独立/传授）\n- 阶段 5：能”创新”工作坊（研究/发表）\n\n讲师话术 G3：\n5 个阶段的判断标准——\n- 阶段 1-2 的标志：能讲完 4 小时 + 学员评分 > 4.0\n- 阶段 3-4 的标志：能独立设计 4 小时 + 学员行为改变 > 50%\n- 阶段 5 的标志：被行业认可 + 有 1-2 篇代表性文章\n\n讲师话术 G4：\n各位讲师，请大家对照自己目前在哪个阶段——\n- 如果您在阶段 1-2：先不要追求创新，先把基础打牢\n- 如果您在阶段 3：开始建立自己的案例库\n- 如果您在阶段 4-5：可以开始总结方法论")


def P111():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 111, "讲师成长路径", "自我评估表 + 成长计划")
    rc(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.4), DARK)
    tx(s, Inches(0.8), Inches(1.4), Inches(11.7), Inches(0.3),
       "讲师自我评估表 + 个人成长计划", sz=14, c=WHT, b=True)
    headers = ["能力维度", "阶段 1 (0-6 月)", "阶段 2 (6-18 月)", "阶段 3 (1.5-3 年)”]"
    cw = [Inches(2.5), Inches(3.2), Inches(3.2), Inches(3.2)]
    rx = Inches(0.6)
    ry = Inches(2.0)
    rh = Inches(0.55)
    rc(s, rx, ry, Inches(12.1), rh, DARK)
    x = rx
    for i, h in enumerate(headers):
        tx(s, x + Inches(0.1), ry, cw[i] - Inches(0.2), rh, h, sz=12, c=WHT, b=True, an=MSO_ANCHOR.MIDDLE)
        x += cw[i]
    rows = [
        ("4R 设计", "按模板", "调整模板", "独立设计"),
        ("R3 提问", "用 5W 提问", "用 4 类问题", "用问题链"),
        ("跟进", "发资料", "发打卡题", "同伴互助"),
        ("案例库", "1 个案例", "3 个案例", "10 个案例"),
        ("教练辅导", "不能辅导", "简单反馈", "1 对 1 辅导"),
    ]
    colors = [RED, GREEN, GOLD, RED, GREEN]
    for r, (t, l1, l2, l3) in enumerate(rows):
        y = ry + rh * (r + 1)
        fill = LBG if r % 2 == 0 else WHT
        x = rx
        for c, cell in enumerate([t, l1, l2, l3]):
            color = colors[r] if c == 0 else TXT
            b = c == 0
            sz = 11
            rc(s, x, y, cw[c], rh, fill, line=LGT)
            tx(s, x + Inches(0.1), y, cw[c] - Inches(0.2), rh, cell, sz=sz, c=color, b=b, an=MSO_ANCHOR.MIDDLE)
            x += cw[c]
    rc(s, Inches(0.6), Inches(6.0), Inches(12.1), Inches(1.3), WHT, line=LGT)
    rc(s, Inches(0.6), Inches(6.0), Inches(12.1), Inches(0.4), DARK)
    tx(s, Inches(0.8), Inches(6.0), Inches(11.7), Inches(0.4), "我的个人成长计划（30 天）", sz=12, c=WHT, b=True, an=MSO_ANCHOR.MIDDLE)
    plan = [
        "1. 完成《4R 工作坊设计》课程（5 天）",
        "2. 设计 1 个 4 小时工作坊初稿（10 天）",
        "3. 找 2 位讲师互评 + 调整（5 天）",
        "4. 给学员讲 1 次（30 天）",
    ]
    for i, p in enumerate(plan):
        y = Inches(6.5 + i * 0.18)
        tx(s, Inches(0.8), y, Inches(11.7), Inches(0.2), p, sz=10, c=TXT)
    ftr(s)
    note(s, "【讲师自我评估表】\n\n讲师话术 G5：\n请大家拿出《讲师自我评估表》——\n\n[逐项讲解]\n\n4R 设计：\n- 阶段 1 (0-6 月)：按模板\n- 阶段 2 (6-18 月)：调整模板\n- 阶段 3 (1.5-3 年)：独立设计\n\nR3 提问：\n- 阶段 1：用 5W 提问\n- 阶段 2：用 4 类问题\n- 阶段 3：用问题链\n\n跟进：\n- 阶段 1：发资料\n- 阶段 2：发打卡题\n- 阶段 3：同伴互助\n\n案例库：\n- 阶段 1：1 个案例\n- 阶段 2：3 个案例\n- 阶段 3：10 个案例\n\n教练辅导：\n- 阶段 1：不能辅导\n- 阶段 2：简单反馈\n- 阶段 3：1 对 1 辅导\n\n讲师话术 G6：\n请大家对照自己目前在哪个阶段——\n\n如果您在阶段 1：先不要追求完美，把 1 个工作坊讲好\n如果您在阶段 2：开始收集案例，建立自己的案例库\n如果您在阶段 3：开始研究方法论，写自己的书\n\n讲师话术 G7：\n我的个人成长计划（30 天）：\n1. 完成《4R 工作坊设计》课程（5 天）\n2. 设计 1 个 4 小时工作坊初稿（10 天）\n3. 找 2 位讲师互评 + 调整（5 天）\n4. 给学员讲 1 次（30 天）\n\n这是讲师从”会讲”到”会设计”的关键路径。")


def P112():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 112, "讲师成长路径", "学员常见问题 + 讲师常见问题对照")
    rc(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.4), DARK)
    tx(s, Inches(0.8), Inches(1.4), Inches(11.7), Inches(0.3),
       "学员常见问题 vs 讲师常见问题", sz=14, c=WHT, b=True)
    headers = ["对象", "问题", "原因", "解法”]"
    cw = [Inches(1.5), Inches(2.8), Inches(3.3), Inches(4.5)]
    rx = Inches(0.6)
    ry = Inches(2.0)
    rh = Inches(0.7)
    rc(s, rx, ry, Inches(12.1), rh, DARK)
    x = rx
    for i, h in enumerate(headers):
        tx(s, x + Inches(0.1), ry, cw[i] - Inches(0.2), rh, h, sz=12, c=WHT, b=True, an=MSO_ANCHOR.MIDDLE)
        x += cw[i]
    rows = [
        ("学员", "工作坊记不住", "讲师讲太多 + 没参与", "R3 设计要 > 60% 参与"),
        ("学员", "工作坊后不用", "没有跟进", "30 天打卡 + 同伴互助"),
        ("讲师", "工作坊超时", "时间控制没经验", "硬切 + 计时器 + 提前演练"),
        ("讲师", "学员冷场", "开场太严肃", "5 种开场方法 + 破冰"),
        ("讲师", "R3 太浅", "问题设计太简单", "用 4 类问题 + 问题链"),
        ("讲师", "跟进没时间", "把跟进复杂化", "轻跟进 = 每天 1 条微信"),
    ]
    colors = [RED, GREEN, RED, GREEN, GOLD, RED]
    for r, (t1, t2, t3, t4) in enumerate(rows):
        y = ry + rh * (r + 1)
        fill = LBG if r % 2 == 0 else WHT
        x = rx
        for c, cell in enumerate([t1, t2, t3, t4]):
            color = colors[r] if c == 0 else TXT
            b = c == 0
            sz = 10
            rc(s, x, y, cw[c], rh, fill, line=LGT)
            tx(s, x + Inches(0.1), y, cw[c] - Inches(0.2), rh, cell, sz=sz, c=color, b=b, an=MSO_ANCHOR.MIDDLE)
            x += cw[c]
    ftr(s)
    note(s, "【学员常见问题 vs 讲师常见问题】\n\n讲师话术 G8：\n我们对照学员常见问题和讲师常见问题——\n\n学员常见问题 1：工作坊记不住\n原因：讲师讲太多 + 没参与\n解法：R3 设计要 > 60% 参与\n\n学员常见问题 2：工作坊后不用\n原因：没有跟进\n解法：30 天打卡 + 同伴互助\n\n讲师常见问题 1：工作坊超时\n原因：时间控制没经验\n解法：硬切 + 计时器 + 提前演练\n\n讲师常见问题 2：学员冷场\n原因：开场太严肃\n解法：5 种开场方法 + 破冰\n\n讲师常见问题 3：R3 太浅\n原因：问题设计太简单\n解法：用 4 类问题 + 问题链\n\n讲师常见问题 4：跟进没时间\n原因：把跟进复杂化\n解法：轻跟进 = 每天 1 条微信\n\n讲师话术 G9：\n注意学员问题和讲师问题的对应关系——\n- 学员”记不住” ↔ 讲师”R3 太浅”\n- 学员”不用” ↔ 讲师”跟进没时间”\n\n讲师问题的解法直接决定学员问题的解决——讲师解决自己的问题，学员的问题就解决了 80%。\n\n讲师话术 G10：\n这就是本工作坊的核心观点——讲师的工作不是”讲”，而是”设计 + 跟进”。\n\n学员的”知行合一”，从讲师的”知行合一”开始——讲师先做到，才能让学员做到。")
'''
with open('gen_pptx_part2.py', 'a', encoding='utf-8') as f:
    f.write(code)
print('P107-P112 OK, lines:', sum(1 for _ in open('gen_pptx_part2.py', encoding='utf-8')))
