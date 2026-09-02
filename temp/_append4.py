# -*- coding: utf-8 -*-
code = r'''


def P46():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 46, "第四章 · 深问与共创", "4.2 · 开放式问题 · 3 个常用模板")
    rc(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.4), DARK)
    tx(s, Inches(0.8), Inches(1.4), Inches(11.7), Inches(0.3),
       "开放式问题 · 让学员展开说的 3 个常用模板", sz=14, c=WHT, b=True)
    tmpls = [
        ("5W1H 模板", "What / When / Where / Who / Why / How",
         "您当时在做什么？什么时候发生的？在哪里？和谁一起？您怎么想的？您具体怎么做的？",
         "适用：让学员完整描述一个真实经历", RED),
        ("过去-现在-未来", "过去 / 现在 / 未来",
         "您过去是怎么处理这种情况的？您现在会怎么处理？您觉得未来需要怎么改变？",
         "适用：让学员看到自己的变化轨迹", GREEN),
        ("感受-想法-行动", "感受 / 想法 / 行动",
         "那一刻您感受到了什么？您心里在想什么？您具体做了什么？",
         "适用：让学员从情绪和判断两个层面反思", GOLD),
    ]
    for i, (t, fmt, ex, app, c) in enumerate(tmpls):
        y = Inches(2.0 + i * 1.7)
        rc(s, Inches(0.6), y, Inches(12.1), Inches(1.55), WHT, line=LGT)
        rc(s, Inches(0.6), y, Inches(0.15), Inches(1.55), c)
        tx(s, Inches(0.9), y + Inches(0.1), Inches(3.0), Inches(0.4), t, sz=14, c=DARK, b=True)
        tx(s, Inches(4.0), y + Inches(0.1), Inches(8.0), Inches(0.4), fmt, sz=12, c=c, b=True)
        tx(s, Inches(0.9), y + Inches(0.55), Inches(11.0), Inches(0.4), "示例：” + ex, sz=11, c=TXT)"
        tx(s, Inches(0.9), y + Inches(1.0), Inches(11.0), Inches(0.4), "适用：” + app, sz=11, c=GRY, b=True)"
    ftr(s)
    note(s, "【4.2 开放式问题】\n\n讲师话术 4.2.2：\n开放式问题有 3 个常用模板——\n\n1. 5W1H 模板：What/When/Where/Who/Why/How\n   适用：让学员完整描述一个真实经历\n\n2. 过去-现在-未来：\n   适用：让学员看到自己的变化轨迹\n\n3. 感受-想法-行动：\n   适用：让学员从情绪和判断两个层面反思\n\n注意：这 3 个模板可以组合使用。\n\n比如 5W1H 用来描述当时发生了什么，\n然后用过去-现在-未来让学员看到变化，\n最后用感受-想法-行动让学员内化。\n\n这是一个完整的深度引导链条。")


def P47():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 47, "第四章 · 深问与共创", "4.2 · 追问问题 · 深挖学员回答")
    rc(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.4), DARK)
    tx(s, Inches(0.8), Inches(1.4), Inches(11.7), Inches(0.3),
       "追问问题 · 学员回答后深挖的 5 个方向", sz=14, c=WHT, b=True)
    dirs = [
        ("具体化", "我做了 X", "→”X 具体是什么？能举个例子吗？", "防止学员抽象回答", RED),
        ("情境化", "我做了 X", "→”当时发生了什么让您做出 X 这个选择？", "回到真实场景", GREEN),
        ("情绪化", "我做了 X", "→”那一刻您心里是什么感受？", "挖出情感因素", GOLD),
        ("判断化", "我做了 X", "→”您觉得 X 这个做法对吗？为什么？", "触发反思", RED),
        ("对比化", "我做了 X", "→”如果当时您换一种做法，会是什么？", "看到其他可能性", GREEN),
    ]
    rh = Inches(0.85)
    rx = Inches(0.6)
    ry = Inches(2.0)
    cw = [Inches(2.0), Inches(5.5), Inches(4.6)]
    for r, (t, ex, why, c) in enumerate(dirs):
        y = ry + rh * r
        fill = LBG if r % 2 == 0 else WHT
        x = rx
        rc(s, x, y, Inches(12.1), rh, fill, line=LGT)
        rc(s, x, y, Inches(0.15), rh, c)
        tx(s, x + Inches(0.3), y, Inches(1.9), rh, t, sz=14, c=DARK, b=True, an=MSO_ANCHOR.MIDDLE)
        tx(s, x + Inches(2.2), y, Inches(5.3), rh, ex, sz=11, c=TXT, an=MSO_ANCHOR.MIDDLE)
        tx(s, x + Inches(7.6), y, Inches(4.4), rh, "→ “ + why, sz=11, c=c, b=True, an=MSO_ANCHOR.MIDDLE)"
    ftr(s)
    note(s, "【4.2 追问问题】\n\n讲师话术 4.2.3：\n追问问题是深挖学员回答的 5 个方向——\n\n1. 具体化：X 具体是什么？能举个例子吗？\n   防止学员抽象回答\n2. 情境化：当时发生了什么让您做出 X 这个选择？\n   回到真实场景\n3. 情绪化：那一刻您心里是什么感受？\n   挖出情感因素\n4. 判断化：您觉得 X 这个做法对吗？为什么？\n   触发反思\n5. 对比化：如果当时您换一种做法，会是什么？\n   看到其他可能性\n\n注意：追问不是审问。每追问一次，要给学员一点停顿时间。\n\n讲师话术 4.2.4（举例）：\n\n学员：”我上次用异议处理的方法效果不好。”\n讲师：”效果不好具体是什么意思？能描述一下当时发生了什么吗？”  ← 具体化\n学员：”客户听到一半就打断我，说我听不懂他在说什么。”\n讲师：”那一刻您心里是什么感受？”  ← 情绪化\n学员：”我有点慌，不知道该不该继续讲。”\n讲师：”那个慌的感觉，让您接下来做了什么？”  ← 情境化\n\n这是一个完整的追问链条。")


def P48():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 48, "第四章 · 深问与共创", "4.2 · 比较问题 · 看到差异")
    rc(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.4), DARK)
    tx(s, Inches(0.8), Inches(1.4), Inches(11.7), Inches(0.3),
       "比较问题 · 让学员通过对比看到洞见", sz=14, c=WHT, b=True)
    types = [
        ("学员之间比较", "让两个学员比较自己的做法", "张三，您和李四的做法有什么不同？为什么？", RED),
        ("过去-现在比较", "让学员对比自己之前和现在的做法", "您之前是怎么做的？现在会怎么做？", GREEN),
        ("成功-失败比较", "让学员对比成功和失败的经历", "那次成功和这次失败，您觉得最大的区别是什么？", GOLD),
        ("自己-他人比较", "让学员对比自己和他人（包括讲师）", "如果换成您最佩服的那个同事，他会怎么做？", RED),
        ("应该-实际比较", "让学员对比应该做的和实际做的", "您觉得应该怎么做？您实际是怎么做的？差距是什么？", GREEN),
    ]
    rh = Inches(0.85)
    rx = Inches(0.6)
    ry = Inches(2.0)
    cw = [Inches(2.5), Inches(4.0), Inches(5.6)]
    for r, (t, desc, ex, c) in enumerate(types):
        y = ry + rh * r
        fill = LBG if r % 2 == 0 else WHT
        x = rx
        rc(s, x, y, Inches(12.1), rh, fill, line=LGT)
        rc(s, x, y, Inches(0.15), rh, c)
        tx(s, x + Inches(0.3), y, Inches(2.4), rh, t, sz=13, c=DARK, b=True, an=MSO_ANCHOR.MIDDLE)
        tx(s, x + Inches(2.8), y, Inches(3.8), rh, desc, sz=11, c=TXT, an=MSO_ANCHOR.MIDDLE)
        tx(s, x + Inches(6.7), y, Inches(5.3), rh, "” + ex, sz=11, c=c, b=True, an=MSO_ANCHOR.MIDDLE)"
    ftr(s)
    note(s, "【4.2 比较问题】\n\n讲师话术 4.2.5：\n比较问题有 5 种类型——\n\n1. 学员之间比较：让两个学员比较自己的做法\n   例：张三，您和李四的做法有什么不同？为什么？\n\n2. 过去-现在比较：让学员对比自己之前和现在的做法\n   例：您之前是怎么做的？现在会怎么做？\n\n3. 成功-失败比较：让学员对比成功和失败的经历\n   例：那次成功和这次失败，您觉得最大的区别是什么？\n\n4. 自己-他人比较：让学员对比自己和他人\n   例：如果换成您最佩服的那个同事，他会怎么做？\n\n5. 应该-实际比较：让学员对比应该做的和实际做的\n   例：您觉得应该怎么做？您实际是怎么做的？\n\n比较问题的好处：让学员自己发现差异，不需要讲师讲。\n\n当学员自己说出”原来我和他的做法不同”时，洞见就产生了。\n\n讲师在比较问题中要做的：帮学员看到差异，但不要替学员下结论。")


def P49():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 49, "第四章 · 深问与共创", "4.2 · 反思问题 · 让学员内化")
    rc(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.4), DARK)
    tx(s, Inches(0.8), Inches(1.4), Inches(11.7), Inches(0.3),
       "反思问题 · 让学员把讨论内化成自己的洞见", sz=14, c=WHT, b=True)
    types = [
        ("新理解", "这次经历让您对 X 有什么新的理解？", "学员把刚讨论的内容变成自己的认知", RED),
        ("假设重来", "如果重来一次，您会怎么做？", "学员把洞见转化为具体行动", GREEN),
        ("迁移情境", "这个原则如果用到 X 场景，会是什么样子？", "学员把原则从 A 场景迁移到 B 场景", GOLD),
        ("意义赋予", "这个原则对您意味着什么？", "学员把原则内化为自己的价值观", RED),
        ("自我评估", "今天讨论下来，您觉得自己接下来最需要改变的是哪个点？", "学员对自己的现状做评估", GREEN),
    ]
    rh = Inches(0.85)
    rx = Inches(0.6)
    ry = Inches(2.0)
    cw = [Inches(2.3), Inches(5.5), Inches(4.3)]
    for r, (t, q, why, c) in enumerate(types):
        y = ry + rh * r
        fill = LBG if r % 2 == 0 else WHT
        x = rx
        rc(s, x, y, Inches(12.1), rh, fill, line=LGT)
        rc(s, x, y, Inches(0.15), rh, c)
        tx(s, x + Inches(0.3), y, Inches(2.2), rh, t, sz=14, c=DARK, b=True, an=MSO_ANCHOR.MIDDLE)
        tx(s, x + Inches(2.6), y, Inches(5.3), rh, "” + q, sz=11, c=c, b=True, an=MSO_ANCHOR.MIDDLE)"
        tx(s, x + Inches(8.0), y, Inches(4.0), rh, "→ “ + why, sz=11, c=TXT, an=MSO_ANCHOR.MIDDLE)"
    ftr(s)
    note(s, "【4.2 反思问题】\n\n讲师话术 4.2.6：\n反思问题有 5 种——\n\n1. 新理解：这次经历让您对 X 有什么新的理解？\n   学员把刚讨论的内容变成自己的认知\n\n2. 假设重来：如果重来一次，您会怎么做？\n   学员把洞见转化为具体行动\n\n3. 迁移情境：这个原则如果用到 X 场景，会是什么样子？\n   学员把原则从 A 场景迁移到 B 场景\n\n4. 意义赋予：这个原则对您意味着什么？\n   学员把原则内化为自己的价值观\n\n5. 自我评估：今天讨论下来，您觉得自己接下来最需要改变的是哪个点？\n   学员对自己的现状做评估\n\n反思问题通常放在讨论的尾声。\n\n在前面的开放式、追问、比较问题之后，用反思问题让学员把讨论内化。\n\n注意：反思问题不能太多——3-5 个就够。如果反思问题太多，学员会感到压力。")


def P50():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 50, "第四章 · 深问与共创", "4.2 · 4 类问题 · 提问链条")
    rc(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.4), DARK)
    tx(s, Inches(0.8), Inches(1.4), Inches(11.7), Inches(0.3),
       "4 类问题的提问链条 · 从浅到深", sz=14, c=WHT, b=True)
    # 链条图
    chain = [
        ("开放式", "学员开始说", "您当时是怎么想的？", RED),
        ("追问", "学员深挖", "X 具体是什么？那一刻您心里在想什么？", GREEN),
        ("比较", "学员看到差异", "您和李四的做法有什么不同？", GOLD),
        ("反思", "学员内化", "这次讨论对您意味着什么？", RED),
    ]
    for i, (n, role, ex, c) in enumerate(chain):
        x = Inches(0.6 + i * 3.1)
        rc(s, x, Inches(2.0), Inches(2.9), Inches(2.5), WHT, line=LGT)
        rc(s, x, Inches(2.0), Inches(2.9), Inches(0.5), c)
        tx(s, x, Inches(2.0), Inches(2.9), Inches(0.5), n, sz=18, c=WHT, b=True, al=PP_ALIGN.CENTER, an=MSO_ANCHOR.MIDDLE)
        tx(s, x + Inches(0.2), Inches(2.65), Inches(2.5), Inches(0.4), role, sz=12, c=DARK, b=True, al=PP_ALIGN.CENTER)
        tx(s, x + Inches(0.2), Inches(3.1), Inches(2.5), Inches(1.3), ex, sz=11, c=TXT, al=PP_ALIGN.CENTER)
        if i < 3:
            tx(s, x + Inches(2.95), Inches(3.0), Inches(0.2), Inches(0.5), "→", sz=20, c=DARK, b=True)
    # 时间分配
    rc(s, Inches(0.6), Inches(4.8), Inches(12.1), Inches(0.5), LBG)
    tx(s, Inches(0.8), Inches(4.85), Inches(11.7), Inches(0.4),
       "一次深度讨论（30-45 分钟）的问题数量分配：开放式 3-4 个 / 追问 5-8 个 / 比较 2-3 个 / 反思 1-2 个",
       sz=13, c=DARK, b=True, an=MSO_ANCHOR.MIDDLE)
    # 关键原则
    rc(s, Inches(0.6), Inches(5.5), Inches(12.1), Inches(1.7), WHT, line=LGT)
    rc(s, Inches(0.6), Inches(5.5), Inches(12.1), Inches(0.5), DARK)
    tx(s, Inches(0.8), Inches(5.5), Inches(11.7), Inches(0.5), "三条关键原则", sz=14, c=WHT, b=True, an=MSO_ANCHOR.MIDDLE)
    prins = [
        "① 每次只问一个问题（不要一次问三个）",
        "② 每次追问前给学员 3-5 秒思考时间",
        "③ 学员回答后用您自己的话复述一遍（确认您理解了）",
    ]
    for i, p in enumerate(prins):
        tx(s, Inches(1.0), Inches(6.1 + i * 0.35), Inches(11.5), Inches(0.3), p, sz=12, c=TXT)
    ftr(s)
    note(s, "【4.2 提问链条】\n\n讲师话术 4.2.7：\n4 类问题不是独立的，它们构成一个完整的提问链条——\n\n1. 开放式：让学员开始说\n   例：您当时是怎么想的？\n\n2. 追问：让学员深挖\n   例：X 具体是什么？那一刻您心里在想什么？\n\n3. 比较：让学员看到差异\n   例：您和李四的做法有什么不同？\n\n4. 反思：让学员内化\n   例：这次讨论对您意味着什么？\n\n一次深度讨论（30-45 分钟）的问题数量分配：\n- 开放式 3-4 个\n- 追问 5-8 个\n- 比较 2-3 个\n- 反思 1-2 个\n\n三条关键原则：\n1. 每次只问一个问题（不要一次问三个）\n2. 每次追问前给学员 3-5 秒思考时间\n3. 学员回答后用您自己的话复述一遍（确认您理解了）\n\n这三条原则比技术本身更重要。")


def P51():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 51, "第四章 · 深问与共创", "4.3 · 共创的引导手法")
    rc(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.4), DARK)
    tx(s, Inches(0.8), Inches(1.4), Inches(11.7), Inches(0.3),
       "共创的引导手法 · 让学员互相激发洞见", sz=14, c=WHT, b=True)
    methods = [
        ("轮流向", "让学员 A 说完后，B 必须先回应 A，再说自己", "让学员不只听自己要说的话", RED),
        ("接力", "让学员在别人发言的基础上继续", "前面的话成为后面的起点", GREEN),
        ("辩论", "故意让两个学员立场对立，请他们互相回应", "在冲突中产生洞见", GOLD),
        ("补全", "请其他学员补充发言者的盲点", "让每个人都有贡献", RED),
        ("投票", "让全班对几个观点投票，看哪些是主流", "用数据驱动讨论", GREEN),
        ("重述", "请学员用自己的话重述别人说的", "确保每个人都真的在听", GOLD),
    ]
    rh = Inches(0.7)
    rx = Inches(0.6)
    ry = Inches(2.0)
    cw = [Inches(2.0), Inches(5.5), Inches(4.6)]
    for r, (t, desc, why, c) in enumerate(methods):
        y = ry + rh * r
        fill = LBG if r % 2 == 0 else WHT
        x = rx
        rc(s, x, y, Inches(12.1), rh, fill, line=LGT)
        rc(s, x, y, Inches(0.15), rh, c)
        tx(s, x + Inches(0.3), y, Inches(1.9), rh, t, sz=14, c=DARK, b=True, an=MSO_ANCHOR.MIDDLE)
        tx(s, x + Inches(2.2), y, Inches(5.3), rh, desc, sz=11, c=TXT, an=MSO_ANCHOR.MIDDLE)
        tx(s, x + Inches(7.6), y, Inches(4.4), rh, "→ “ + why, sz=11, c=c, b=True, an=MSO_ANCHOR.MIDDLE)"
    ftr(s)
    note(s, "【4.3 共创引导手法】\n\n讲师话术 4.3.1：\n除了好的提问，还需要共创的引导手法——\n\n1. 轮流向：让学员 A 说完后，B 必须先回应 A，再说自己\n   让学员不只听自己要说的话\n\n2. 接力：让学员在别人发言的基础上继续\n   前面的话成为后面的起点\n\n3. 辩论：故意让两个学员立场对立，请他们互相回应\n   在冲突中产生洞见\n\n4. 补全：请其他学员补充发言者的盲点\n   让每个人都有贡献\n\n5. 投票：让全班对几个观点投票\n   用数据驱动讨论\n\n6. 重述：请学员用自己的话重述别人说的\n   确保每个人都真的在听\n\n共创的关键：让学员之间互相激发，而不是讲师讲。\n\n讲师在共创中的角色：不是讨论的主角，而是引导者。\n讲师问的问题，应该让学员回答其他学员，而不是回答讲师。")


def P52():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 52, "第四章 · 深问与共创", "4.3 · 静远的 3 个典型提问模式")
    rc(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.4), RED)
    tx(s, Inches(0.8), Inches(1.4), Inches(11.7), Inches(0.3),
       "静远的 3 个典型提问模式 · 实战示范", sz=14, c=WHT, b=True)
    patterns = [
        ("模式一", "先说 + 再问", "”我想先说一下——我以前做销售的时候，遇到过一个很难对付的客户……那您呢？您遇到过什么？”"),
        ("模式二", "复述 + 追问", "”您刚才说客户听到一半就打断您——那一刻您心里是什么感受？您接下来做了什么？”"),
        ("模式三", "对比 + 反思", "”张三用了一种方法，李四用了另一种方法——他们俩的结果分别是什么？如果换成您，您会怎么选？为什么？”"),
    ]
    for i, (n, p, ex) in enumerate(patterns):
        y = Inches(2.0 + i * 1.65)
        rc(s, Inches(0.6), y, Inches(12.1), Inches(1.5), WHT, line=LGT)
        rc(s, Inches(0.6), y, Inches(0.15), Inches(1.5), [RED, GREEN, GOLD][i])
        tx(s, Inches(0.9), y + Inches(0.1), Inches(1.8), Inches(0.4), n, sz=14, c=DARK, b=True)
        tx(s, Inches(2.8), y + Inches(0.1), Inches(3.0), Inches(0.4), p, sz=14, c=[RED, GREEN, GOLD][i], b=True)
        tx(s, Inches(0.9), y + Inches(0.6), Inches(11.5), Inches(0.8), "「” + ex + “」", sz=12, c=TXT)
    ftr(s)
    note(s, "【4.3 静远的 3 个典型提问模式】\n\n讲师话术 4.3.2：\n我们看静远在工作坊中用到的 3 个典型提问模式——\n\n模式一：先说 + 再问\n”我想先说一下——我以前做销售的时候，遇到过一个很难对付的客户……那您呢？您遇到过什么？”\n特点：讲师先分享自己的故事（建立信任），再问学员\n\n模式二：复述 + 追问\n”您刚才说客户听到一半就打断您——那一刻您心里是什么感受？您接下来做了什么？”\n特点：复述学员的话（确认理解），然后追问\n\n模式三：对比 + 反思\n”张三用了一种方法，李四用了另一种方法——他们俩的结果分别是什么？如果换成您，您会怎么选？为什么？”\n特点：让两个学员对比，然后让其他学员反思\n\n这 3 个模式是工作坊的核心引导技术。\n\n在 Activity 4A 中，您会基于您的工作坊场景，设计您的提问。")


def P53():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 53, "第四章 · 深问与共创", "4.4 · Activity 4A · 我的提问设计")
    rc(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.5), DARK)
    tx(s, Inches(0.8), Inches(1.4), Inches(11.7), Inches(0.3),
       "实战设计  |  30 分钟个人设计 + 30 分钟小组演练",
       sz=14, c=WHT, b=True)
    rc(s, Inches(0.6), Inches(2.0), Inches(12.1), Inches(1.0), LBG)
    tx(s, Inches(0.8), Inches(2.1), Inches(11.7), Inches(0.4), "设计任务", sz=14, c=RED, b=True)
    tx(s, Inches(0.8), Inches(2.5), Inches(11.7), Inches(0.4),
       "基于您课前填写的我的引导场景，针对工作坊的 R3 阶段，设计一组完整的提问链条。",
       sz=12, c=DARK)
    steps = [
        ("1", "设计 5-8 个 R3 问题", "30 min",
         "开放式 2 个 / 追问 3-4 个 / 比较 1-2 个 / 反思 1 个"),
        ("2", "小组演练", "30 min",
         "3-4 人小组轮流扮演讲师和学员，互评问题质量"),
    ]
    for i, (n, t, time, desc) in enumerate(steps):
        x = Inches(0.6 + i * 6.2)
        rc(s, x, Inches(3.2), Inches(5.9), Inches(2.5), WHT, line=LGT)
        rc(s, x, Inches(3.2), Inches(5.9), Inches(0.5), RED if i == 0 else GREEN)
        tx(s, x + Inches(0.2), Inches(3.25), Inches(0.6), Inches(0.5), n, sz=22, c=WHT, b=True)
        tx(s, x + Inches(0.9), Inches(3.3), Inches(3.0), Inches(0.4), t, sz=14, c=WHT, b=True)
        tx(s, x + Inches(4.0), Inches(3.3), Inches(1.8), Inches(0.4), time, sz=12, c=WHT, al=PP_ALIGN.RIGHT)
        tx(s, x + Inches(0.2), Inches(3.85), Inches(5.5), Inches(1.8), desc, sz=12, c=TXT)
    rc(s, Inches(0.6), Inches(5.95), Inches(12.1), Inches(1.3), DARK)
    tx(s, Inches(0.8), Inches(6.05), Inches(11.7), Inches(0.4), "演练关键问题（请用这些问题检查别人的提问）", sz=12, c=RED, b=True)
    tx(s, Inches(0.8), Inches(6.4), Inches(11.7), Inches(0.85),
       "① 问题是开放式的吗（不能用 yes/no 回答）？  ② 问题能引出真实经历吗？  ③ 追问能让学员深挖吗？  ④ 比较能让学员看到差异吗？  ⑤ 反思能让学员内化吗？",
       sz=11, c=WHT)
    ftr(s)
    note(s, "【4.4 Activity 4A】\n\n实战设计 + 演练。\n\n讲师话术 4.4.1：\n现在请您用 30 分钟，基于您课前填写的我的引导场景，针对工作坊的 R3 阶段，设计一组完整的提问链条。\n\n问题数量：5-8 个。\n- 开放式 2 个\n- 追问 3-4 个\n- 比较 1-2 个\n- 反思 1 个\n\n[30 分钟 · 巡视 + 个别答疑]\n\n讲师话术 4.4.2：\n现在请您和小组（3-4 人）进行演练。\n\n轮流扮演讲师和学员。一个扮演讲师，问 3-5 个问题；其他扮演学员，给出真实回答。\n\n请用这五个问题来评估：\n1. 问题是开放式的吗（不能用 yes/no 回答）？\n2. 问题能引出真实经历吗？\n3. 追问能让学员深挖吗？\n4. 比较能让学员看到差异吗？\n5. 反思能让学员内化吗？\n\n[30 分钟 · 巡视 + 必要时叫停]\n\n巡视重点：\n- 学员最容易出现的问题：开放式问题还是太封闭\n- 学员最容易出现的问题：追问没有深挖\n- 学员做得好的地方：反思问题设计得很触动")
'''
with open('gen_pptx_part2.py', 'a', encoding='utf-8') as f:
    f.write(code)
print('P46-P53 OK, lines:', sum(1 for _ in open('gen_pptx_part2.py', encoding='utf-8')))
