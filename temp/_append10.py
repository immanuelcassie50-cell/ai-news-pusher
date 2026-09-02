# -*- coding: utf-8 -*-
code = r'''


def P87():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 87, "实战案例库", "案例 4 · 客户服务工作坊")
    rc(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.4), DARK)
    tx(s, Inches(0.8), Inches(1.4), Inches(11.7), Inches(0.3),
       "案例 4 · 客户服务工作坊 · 投诉处理", sz=14, c=WHT, b=True)
    sections = [
        ("场景", "25 位客服代表，2 个月前学了《卓越客户服务》课程。本次工作坊聚焦”如何处理愤怒的客户投诉”", RED),
        ("业务维度", "业务管理者希望：30 天后客服在遇到愤怒客户时，能在 5 分钟内让客户从愤怒到平静", GREEN),
        ("课程维度", "上次课的 7 个模块中，”情绪管理”和”投诉处理流程”是客服最薄弱两个模块", GOLD),
        ("学员维度", "25 位客服代表，平均年龄 26 岁，对流程熟悉但情绪管理经验少（容易和客户吵架）", RED),
    ]
    for i, (t, desc, c) in enumerate(sections):
        y = Inches(2.0 + i * 0.85)
        rc(s, Inches(0.6), y, Inches(12.1), Inches(0.75), WHT, line=LGT)
        rc(s, Inches(0.6), y, Inches(0.15), Inches(0.75), c)
        tx(s, Inches(0.9), y + Inches(0.1), Inches(2.0), Inches(0.4), t, sz=13, c=DARK, b=True)
        tx(s, Inches(3.0), y + Inches(0.1), Inches(9.5), Inches(0.6), desc, sz=11, c=TXT)
    rc(s, Inches(0.6), Inches(5.5), Inches(12.1), Inches(1.6), WHT, line=LGT)
    rc(s, Inches(0.6), Inches(5.5), Inches(12.1), Inches(0.5), DARK)
    tx(s, Inches(0.8), Inches(5.5), Inches(11.7), Inches(0.5), "4R 流程设计（4 小时）", sz=14, c=WHT, b=True, an=MSO_ANCHOR.MIDDLE)
    design = [
        ("R1 5 分钟", "上次课”投诉处理”那个点", GREEN),
        ("R2 25 分钟", "5 位客服分享真实投诉经历", GOLD),
        ("R3 110 分钟", "深问 + 共创 + 角色扮演", RED),
        ("R4 15 分钟", "下次遇到 X 客户用 Y 方法处理", GREEN),
    ]
    for i, (t, desc, c) in enumerate(design):
        x = Inches(0.6 + i * 3.1)
        rc(s, x, Inches(6.1), Inches(2.9), Inches(0.9), c)
        tx(s, x + Inches(0.2), Inches(6.15), Inches(2.5), Inches(0.4), t, sz=12, c=WHT, b=True)
        tx(s, x + Inches(0.2), Inches(6.55), Inches(2.5), Inches(0.4), desc, sz=10, c=WHT)
    ftr(s)
    note(s, "【案例 4 · 客户服务】\n\n讲师话术 C4.1：\n我们看第四个案例——客户服务工作坊。\n\n场景：25 位客服代表，2 个月前学了《卓越客户服务》课程。本次工作坊聚焦”如何处理愤怒的客户投诉”。\n\n业务维度：业务管理者希望 30 天后客服在遇到愤怒客户时，能在 5 分钟内让客户从愤怒到平静。\n\n课程维度：上次课的 7 个模块中，”情绪管理”和”投诉处理流程”是客服最薄弱两个模块。\n\n学员维度：25 位客服代表，平均年龄 26 岁，对流程熟悉但情绪管理经验少（容易和客户吵架）。\n\n4R 流程设计（4 小时）：\n- R1 5 分钟：上次课”投诉处理”那个点\n- R2 25 分钟：5 位客服分享真实投诉经历\n- R3 110 分钟：深问 + 共创 + 角色扮演\n- R4 15 分钟：下次遇到 X 客户用 Y 方法处理\n\n这个案例的 R3 用了 110 分钟（占 46%），其中 60 分钟做角色扮演（扮讲愤怒的客户 + 扮讲客服）。\n\n讲师话术 C4.2：\n客服工作坊的关键是角色扮演——他们需要亲身体验”被客户骂”的感觉，才能真正学会情绪管理。\n\n角色扮演的设计：\n- 扮讲客户：学员扮讲愤怒的客户，大声说”你们这是什么破服务！”\n- 扮讲客服：另一个学员尝试用 3 个步骤让客户平静（先认同情绪，再认同问题，再给方案）\n- 讲师扮讲”最难的客户”，观察学员的应对")


def P88():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 88, "实战案例库", "案例 4 · 投诉处理 3 步法")
    rc(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.4), RED)
    tx(s, Inches(0.8), Inches(1.4), Inches(11.7), Inches(0.3),
       "案例 4 · 投诉处理 3 步法", sz=14, c=WHT, b=True)
    steps = [
        ("第 1 步 · 认同情绪 (1 分钟)", "”我能理解您现在很生气……", ", “让客户感到被看见", "客户：”你们这是什么破服务！”", RED),
        ("第 2 步 · 认同问题 (2 分钟)", "”这个问题确实是我们做得不够好……", ", “不辩解，先认错", "客户：”我花了 3 小时等电话！”\n客服：”让您等 3 小时，这确实是我们的错。”", GREEN),
        ("第 3 步 · 给出方案 (2 分钟)", "”我现在就帮您处理……", ", “立刻行动", "客户：”那我能得到什么补偿？”\n客服：”我马上帮您升级处理，10 分钟内给您一个明确的方案。”", GOLD),
    ]
    rh = Inches(1.45)
    rx = Inches(0.6)
    ry = Inches(2.0)
    for i, (n, ex, why, dia, c) in enumerate(steps):
        y = ry + rh * i
        rc(s, rx, y, Inches(12.1), rh, WHT, line=LGT)
        rc(s, rx, y, Inches(0.15), rh, c)
        tx(s, rx + Inches(0.3), y + Inches(0.1), Inches(3.5), Inches(0.4), n, sz=13, c=DARK, b=True)
        tx(s, rx + Inches(0.3), y + Inches(0.5), Inches(3.5), Inches(0.4), ex, sz=11, c=c, b=True)
        tx(s, rx + Inches(0.3), y + Inches(0.9), Inches(3.5), Inches(0.4), why, sz=10, c=GRY)
        tx(s, rx + Inches(4.2), y + Inches(0.1), Inches(7.7), Inches(1.3), dia, sz=11, c=TXT)
    ftr(s)
    note(s, "【案例 4 · 投诉处理 3 步法】\n\n讲师话术 C4.3：\n我们看客服处理投诉的 3 步法——\n\n第 1 步 · 认同情绪 (1 分钟)\n”我能理解您现在很生气……”\n让客户感到被看见\n例：客户：”你们这是什么破服务！”\n\n第 2 步 · 认同问题 (2 分钟)\n”这个问题确实是我们做得不够好……”\n不辩解，先认错\n例：客户：”我花了 3 小时等电话！”\n客服：”让您等 3 小时，这确实是我们的错。”\n\n第 3 步 · 给出方案 (2 分钟)\n”我现在就帮您处理……”\n立刻行动\n例：客户：”那我能得到什么补偿？”\n客服：”我马上帮您升级处理，10 分钟内给您一个明确的方案。”\n\n讲师话术 C4.4：\n3 步法看似简单，但实际运用中：\n- 80% 的客服在第 1 步就失败了——他们跳过认同情绪直接说”我们会处理的”\n- 15% 在第 2 步失败——他们会辩解”我们没做错，是您误会了”\n- 只有 5% 能完整做到 3 步\n\n角色扮演的目的：让学员先”演” 3 步法，做 3-5 次后形成习惯。\n\nR3 阶段 60 分钟的角色扮演，平均每位学员做 2-3 次客服 + 2-3 次客户。")


def P89():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 89, "实战案例库", "案例 5 · 高潜人才工作坊")
    rc(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.4), DARK)
    tx(s, Inches(0.8), Inches(1.4), Inches(11.7), Inches(0.3),
       "案例 5 · 高潜人才工作坊 · 自我认知", sz=14, c=WHT, b=True)
    sections = [
        ("场景", "12 位高潜人才（管培生），12 个月前学了《领导力发展》课程。本次工作坊聚焦”自我认知与职业规划”", RED),
        ("业务维度", "业务管理者希望：30 天后高潜人才能写出 1 份个人发展计划（IDP）", GREEN),
        ("课程维度", "上次课的 6 个模块中，”自我认知”和”职业规划”是高潜人才最薄弱的两个模块", GOLD),
        ("学员维度", "12 位高潜人才，平均 28 岁，对自我认知概念理解但没写过 IDP", RED),
    ]
    for i, (t, desc, c) in enumerate(sections):
        y = Inches(2.0 + i * 0.85)
        rc(s, Inches(0.6), y, Inches(12.1), Inches(0.75), WHT, line=LGT)
        rc(s, Inches(0.6), y, Inches(0.15), Inches(0.75), c)
        tx(s, Inches(0.9), y + Inches(0.1), Inches(2.0), Inches(0.4), t, sz=13, c=DARK, b=True)
        tx(s, Inches(3.0), y + Inches(0.1), Inches(9.5), Inches(0.6), desc, sz=11, c=TXT)
    rc(s, Inches(0.6), Inches(5.5), Inches(12.1), Inches(1.6), WHT, line=LGT)
    rc(s, Inches(0.6), Inches(5.5), Inches(12.1), Inches(0.5), DARK)
    tx(s, Inches(0.8), Inches(5.5), Inches(11.7), Inches(0.5), "4R 流程设计（4 小时）", sz=14, c=WHT, b=True, an=MSO_ANCHOR.MIDDLE)
    design = [
        ("R1 5 分钟", "上次课”自我认知”那个点", GREEN),
        ("R2 25 分钟", "5 位高潜分享成长经历", GOLD),
        ("R3 110 分钟", "深问 + 共创 + IDP 起草", RED),
        ("R4 15 分钟", "下周完成 IDP 初稿", GREEN),
    ]
    for i, (t, desc, c) in enumerate(design):
        x = Inches(0.6 + i * 3.1)
        rc(s, x, Inches(6.1), Inches(2.9), Inches(0.9), c)
        tx(s, x + Inches(0.2), Inches(6.15), Inches(2.5), Inches(0.4), t, sz=12, c=WHT, b=True)
        tx(s, x + Inches(0.2), Inches(6.55), Inches(2.5), Inches(0.4), desc, sz=10, c=WHT)
    ftr(s)
    note(s, "【案例 5 · 高潜人才】\n\n讲师话术 C5.1：\n我们看第五个案例——高潜人才工作坊。\n\n场景：12 位高潜人才（管培生），12 个月前学了《领导力发展》课程。本次工作坊聚焦”自我认知与职业规划”。\n\n业务维度：业务管理者希望 30 天后高潜人才能写出 1 份个人发展计划（IDP）。\n\n课程维度：上次课的 6 个模块中，”自我认知”和”职业规划”是高潜人才最薄弱的两个模块。\n\n学员维度：12 位高潜人才，平均 28 岁，对自我认知概念理解但没写过 IDP。\n\n4R 流程设计（4 小时）：\n- R1 5 分钟：上次课”自我认知”那个点\n- R2 25 分钟：5 位高潜分享成长经历\n- R3 110 分钟：深问 + 共创 + IDP 起草\n- R4 15 分钟：下周完成 IDP 初稿\n\n这个案例的 R3 用了 110 分钟（占 46%），其中 60 分钟做 IDP 起草。\n\n讲师话术 C5.2：\n高潜人才工作坊的关键是 IDP（个人发展计划）起草——他们理解了概念但没写过，必须在 R3 阶段做 1 份 IDP 初稿。\n\nIDP 起草的步骤：\n1. 每人列出自己的 3 个优势 + 3 个待发展项（10 分钟）\n2. 小组互评：每人听 1 位同伴的列表，给出反馈（15 分钟）\n3. 每人写出 IDP 初稿（30 分钟）\n4. 小组分享 IDP 初稿 + 反馈（15 分钟）")


def P90():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 90, "实战案例库", "案例 5 · IDP 模板")
    rc(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.4), RED)
    tx(s, Inches(0.8), Inches(1.4), Inches(11.7), Inches(0.3),
       "案例 5 · 个人发展计划 (IDP) 模板", sz=14, c=WHT, b=True)
    headers = ["项目", "内容", "示例”]"
    cw = [Inches(2.5), Inches(4.5), Inches(5.1)]
    rx = Inches(0.6)
    ry = Inches(2.0)
    rh = Inches(0.6)
    rc(s, rx, ry, Inches(12.1), rh, DARK)
    x = rx
    for i, h in enumerate(headers):
        tx(s, x + Inches(0.1), ry, cw[i] - Inches(0.2), rh, h, sz=13, c=WHT, b=True, an=MSO_ANCHOR.MIDDLE)
        x += cw[i]
    rows = [
        ("1. 现状", "用 3 句话描述您当前的职业状态", "我是 X 岗位，工作 Y 年，现状是 Z"),
        ("2. 3 年目标", "用 3 句话描述您 3 年后想达到的状态", "3 年后我希望成为 X，具备 Y 能力，承担 Z 责任"),
        ("3. 优势", "列出您的 3 个核心优势", "1. 客户洞察 2. 跨部门协作 3. 数据分析"),
        ("4. 待发展", "列出您的 3 个待发展项", "1. 演讲表达 2. 战略思维 3. 团队管理"),
        ("5. 行动计划", "针对 3 个待发展项的具体行动", "1. 演讲：每月 1 次内部分享  2. 战略：参加战略工作坊  3. 团队：申请带 2 人小组"),
        ("6. 资源需求", "实现 IDP 需要的支持", "1. 上级支持  2. 培训预算  3. 导师"),
    ]
    for r, (t, desc, ex, c) in enumerate([(t, d, e, [RED, GREEN, GOLD, RED, GREEN, GOLD][i]) for i, (t, d, e) in enumerate(rows)]):
        y = ry + rh * (r + 1)
        fill = LBG if r % 2 == 0 else WHT
        x = rx
        for c, cell in enumerate([t, desc, ex]):
            color = RED if c == 0 else TXT
            b = c == 0
            sz = 11
            rc(s, x, y, cw[c], rh, fill, line=LGT)
            tx(s, x + Inches(0.1), y, cw[c] - Inches(0.2), rh, cell, sz=sz, c=color, b=b, an=MSO_ANCHOR.MIDDLE)
            x += cw[c]
    ftr(s)
    note(s, "【案例 5 · IDP 模板】\n\n讲师话术 C5.3：\n我们看 IDP（个人发展计划）的 6 个部分——\n\n1. 现状：用 3 句话描述您当前的职业状态\n   例：我是 X 岗位，工作 Y 年，现状是 Z\n\n2. 3 年目标：用 3 句话描述您 3 年后想达到的状态\n   例：3 年后我希望成为 X，具备 Y 能力，承担 Z 责任\n\n3. 优势：列出您的 3 个核心优势\n   例：1. 客户洞察  2. 跨部门协作  3. 数据分析\n\n4. 待发展：列出您的 3 个待发展项\n   例：1. 演讲表达  2. 战略思维  3. 团队管理\n\n5. 行动计划：针对 3 个待发展项的具体行动\n   例：1. 演讲：每月 1 次内部分享  2. 战略：参加战略工作坊  3. 团队：申请带 2 人小组\n\n6. 资源需求：实现 IDP 需要的支持\n   例：1. 上级支持  2. 培训预算  3. 导师\n\n讲师话术 C5.4：\nIDP 的关键：\n- 待发展项必须具体（不能说”沟通能力”——要说”如何在跨部门会议上清晰表达自己的观点”）\n- 行动计划必须可执行（不能说”加强学习”——要说”每月读 1 本 X 类书”）\n- 资源需求必须明确（不能只说”需要支持”——要说”需要上级支持我带 2 人小组”）\n\n在 R3 阶段 60 分钟的 IDP 起草中，讲师巡视 + 个别答疑，确保每位学员的 IDP 都达到上述标准。")
'''
with open('gen_pptx_part2.py', 'a', encoding='utf-8') as f:
    f.write(code)
print('P87-P90 OK, lines:', sum(1 for _ in open('gen_pptx_part2.py', encoding='utf-8')))
