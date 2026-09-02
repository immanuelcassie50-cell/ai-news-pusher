# -*- coding: utf-8 -*-
code = r'''


def P113():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 113, "案例对照", "8 个案例 × 4R 全流程对照表")
    rc(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.4), DARK)
    tx(s, Inches(0.8), Inches(1.4), Inches(11.7), Inches(0.3),
       "8 个案例 × 4R 全流程对照表", sz=14, c=WHT, b=True)
    headers = ["案例", "R1 5 分钟", "R2 25 分钟", "R3 100 分钟", "R4 15 分钟”]"
    cw = [Inches(1.0), Inches(2.7), Inches(2.7), Inches(2.7), Inches(3.0)]
    rx = Inches(0.6)
    ry = Inches(2.0)
    rh = Inches(0.55)
    rc(s, rx, ry, Inches(12.1), rh, DARK)
    x = rx
    for i, h in enumerate(headers):
        tx(s, x + Inches(0.1), ry, cw[i] - Inches(0.2), rh, h, sz=11, c=WHT, b=True, an=MSO_ANCHOR.MIDDLE)
        x += cw[i]
    rows = [
        ("1. 销售", "上次课”异议处理”那个点", "5 位销售分享真实异议", "深问 + 共创 + 问题链", "本周用 3 类问题处理 3 个客户"),
        ("2. 新晋管理", "上次课”反馈”那个点", "5 位新经理分享失败反馈", "深问 + 共创 + 反馈演练", "本周给 1 位下属 1 次 SBI 反馈"),
        ("3. 中层经理", "上次课”利益相关方”那个点", "5 位经理分享最难搞的干系人", "深问 + 共创 + 干系人分析", "本周画 1 张利益相关方图"),
        ("4. 客服", "上次课”投诉”那个点", "5 位客服分享真实投诉", "深问 + 共创 + 角色扮演", "本周用 3 步法处理 1 次投诉"),
        ("5. 高潜人才", "上次课”自我认知”那个点", "5 位高潜分享成长经历", "深问 + 共创 + IDP 起草", "本周完成 IDP 初稿"),
        ("6. 市场专员", "上次课”内容创意”那个点", "5 位市场分享策划经历", "深问 + 共创 + 小组策划", "本周完成 618 方案初稿"),
        ("7. 项目经理", "上次课”风险”那个点", "5 位 PM 分享项目失败", "深问 + 共创 + 风险演练", "本周识别 1 个真实项目风险"),
        ("8. 研发", "上次课”用户”那个点", "5 位工程师分享用户反馈", "深问 + 共创 + POV 起草", "本周完成 1 个 POV 文档"),
    ]
    colors = [RED, GREEN, GOLD, RED, GREEN, GOLD, RED, GREEN]
    for r, row in enumerate(rows):
        y = ry + rh * (r + 1)
        fill = LBG if r % 2 == 0 else WHT
        x = rx
        for c, cell in enumerate(row):
            color = colors[r] if c == 0 else TXT
            b = c == 0
            sz = 9
            rc(s, x, y, cw[c], rh, fill, line=LGT)
            tx(s, x + Inches(0.1), y, cw[c] - Inches(0.2), rh, cell, sz=sz, c=color, b=b, an=MSO_ANCHOR.MIDDLE)
            x += cw[c]
    ftr(s)
    note(s, "【8 个案例 × 4R 全流程对照表】\n\n讲师话术 CT1：\n8 个案例的 4R 全流程对照表——\n\n[逐行讲解]\n\n1. 销售\n- R1：上次课”异议处理”那个点\n- R2：5 位销售分享真实异议\n- R3：深问 + 共创 + 问题链\n- R4：本周用 3 类问题处理 3 个客户\n\n2. 新晋管理\n- R1：上次课”反馈”那个点\n- R2：5 位新经理分享失败反馈\n- R3：深问 + 共创 + 反馈演练\n- R4：本周给 1 位下属 1 次 SBI 反馈\n\n3. 中层经理\n- R1：上次课”利益相关方”那个点\n- R2：5 位经理分享最难搞的干系人\n- R3：深问 + 共创 + 干系人分析\n- R4：本周画 1 张利益相关方图\n\n4. 客服\n- R1：上次课”投诉”那个点\n- R2：5 位客服分享真实投诉\n- R3：深问 + 共创 + 角色扮演\n- R4：本周用 3 步法处理 1 次投诉\n\n5. 高潜人才\n- R1：上次课”自我认知”那个点\n- R2：5 位高潜分享成长经历\n- R3：深问 + 共创 + IDP 起草\n- R4：本周完成 IDP 初稿\n\n6. 市场专员\n- R1：上次课”内容创意”那个点\n- R2：5 位市场分享策划经历\n- R3：深问 + 共创 + 小组策划\n- R4：本周完成 618 方案初稿\n\n7. 项目经理\n- R1：上次课”风险”那个点\n- R2：5 位 PM 分享项目失败\n- R3：深问 + 共创 + 风险演练\n- R4：本周识别 1 个真实项目风险\n\n8. 研发\n- R1：上次课”用户”那个点\n- R2：5 位工程师分享用户反馈\n- R3：深问 + 共创 + POV 起草\n- R4：本周完成 1 个 POV 文档\n\n讲师话术 CT2：\n注意 8 个案例的 4R 结构高度一致——\n- R1 都是上次课的某个点\n- R2 都是 5 位学员的真实经历\n- R3 都是深问 + 共创 + 某种活动（演练/角色/起草/策划）\n- R4 都是 1 周内的具体应用\n\n这种结构化的 4R 让讲师可以快速复制到自己的场景中。")


def P114():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 114, "案例对照", "8 个案例的 R3 活动设计深入对照")
    rc(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.4), DARK)
    tx(s, Inches(0.8), Inches(1.4), Inches(11.7), Inches(0.3),
       "8 个案例的 R3 活动设计深入对照", sz=14, c=WHT, b=True)
    headers = ["案例", "活动名称", "时长", "分组", "工具/产出”]"
    cw = [Inches(1.0), Inches(2.4), Inches(1.2), Inches(1.6), Inches(5.9)]
    rx = Inches(0.6)
    ry = Inches(2.0)
    rh = Inches(0.65)
    rc(s, rx, ry, Inches(12.1), rh, DARK)
    x = rx
    for i, h in enumerate(headers):
        tx(s, x + Inches(0.1), ry, cw[i] - Inches(0.2), rh, h, sz=12, c=WHT, b=True, an=MSO_ANCHOR.MIDDLE)
        x += cw[i]
    rows = [
        ("1. 销售", "问题链演练", "60 分", "3 人组", "4 类问题链 + 每组 1 套销售异议处理方案"),
        ("2. 新晋管理", "反馈演练", "60 分", "2 人组", "SBI 反馈模板 + 每组 2 次反馈"),
        ("3. 中层经理", "干系人分析", "60 分", "4 人组", "干系人图 + 每组 1 张干系人分析"),
        ("4. 客服", "角色扮演", "60 分", "2 人组", "3 步法话术 + 每组 3 次角色扮演"),
        ("5. 高潜人才", "IDP 起草", "60 分", "3 人组", "IDP 模板 + 每组 1 份 IDP 初稿"),
        ("6. 市场专员", "小组策划", "60 分", "4 人组", "营销框架 + 每组 1 份 618 方案"),
        ("7. 项目经理", "风险演练", "60 分", "5 人组", "风险矩阵 + 每组 1 张风险清单"),
        ("8. 研发", "POV 起草", "50 分", "4 人组", "POV 公式 + 每组 1 个 POV 文档"),
    ]
    colors = [RED, GREEN, GOLD, RED, GREEN, GOLD, RED, GREEN]
    for r, row in enumerate(rows):
        y = ry + rh * (r + 1)
        fill = LBG if r % 2 == 0 else WHT
        x = rx
        for c, cell in enumerate(row):
            color = colors[r] if c == 0 else TXT
            b = c == 0
            sz = 10
            rc(s, x, y, cw[c], rh, fill, line=LGT)
            tx(s, x + Inches(0.1), y, cw[c] - Inches(0.2), rh, cell, sz=sz, c=color, b=b, an=MSO_ANCHOR.MIDDLE)
            x += cw[c]
    ftr(s)
    note(s, "【8 个案例的 R3 活动设计深入对照】\n\n讲师话术 CT3：\n8 个案例的 R3 活动设计深入对照——\n\n[逐行讲解]\n\n1. 销售：问题链演练 · 60 分 · 3 人组 · 4 类问题链 + 每组 1 套销售异议处理方案\n\n2. 新晋管理：反馈演练 · 60 分 · 2 人组 · SBI 反馈模板 + 每组 2 次反馈\n\n3. 中层经理：干系人分析 · 60 分 · 4 人组 · 干系人图 + 每组 1 张干系人分析\n\n4. 客服：角色扮演 · 60 分 · 2 人组 · 3 步法话术 + 每组 3 次角色扮演\n\n5. 高潜人才：IDP 起草 · 60 分 · 3 人组 · IDP 模板 + 每组 1 份 IDP 初稿\n\n6. 市场专员：小组策划 · 60 分 · 4 人组 · 营销框架 + 每组 1 份 618 方案\n\n7. 项目经理：风险演练 · 60 分 · 5 人组 · 风险矩阵 + 每组 1 张风险清单\n\n8. 研发：POV 起草 · 50 分 · 4 人组 · POV 公式 + 每组 1 个 POV 文档\n\n讲师话术 CT4：\nR3 活动设计的 5 个关键维度——\n1. 活动名称（问题链/演练/分析/扮演/起草/策划/演练/POV）\n2. 时长（50-60 分钟）\n3. 分组（2-5 人）\n4. 工具（4 类问题/SBI/干系人图/3 步法/IDP/营销框架/风险矩阵/POV）\n5. 产出（每组 1-2 个可交付物）\n\n讲师话术 CT5：\n您的 R3 活动设计，请用这 5 个维度来检查——\n1. 活动名称：是什么？（演练/起草/分析/扮演）\n2. 时长：多少分钟？（建议 50-60 分钟）\n3. 分组：几个人？（建议 2-5 人）\n4. 工具：用什么模板/公式？\n5. 产出：每组交什么？\n\n5 个维度都设计清楚，R3 才算设计完成。")


def P115():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 115, "4R 应用", "如何把 4R 应用到您的下一次工作坊")
    rc(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.4), DARK)
    tx(s, Inches(0.8), Inches(1.4), Inches(11.7), Inches(0.3),
       "如何把 4R 应用到您的下一次工作坊", sz=14, c=WHT, b=True)
    steps = [
        ("步骤 1 · 选择场景", "找一个您 30 天后要引导的工作坊场景（4 小时以内）", "您可以用 8 个案例中相似的那个作为模板", RED),
        ("步骤 2 · 三维分析", "分析业务维度 / 课程维度 / 学员维度", "确定上次课的薄弱模块 + 学员的具体需求", GREEN),
        ("步骤 3 · 4R 设计", "按 5/30/100/15 分钟设计 R1/R2/R3/R4", "R3 一定要 > 60% 时长", GOLD),
        ("步骤 4 · 问题设计", "设计 10-17 个 R3 问题（4 类问题）", "开放式 2-4 + 追问 5-8 + 比较 2-3 + 反思 1-2", RED),
        ("步骤 5 · 跟进设计", "设计 30 天打卡 + 同伴互助 + 实施报告", "每天 1 条微信 + 每周 1 次互助 + 30 天 1 份报告", GREEN),
        ("步骤 6 · 演练调整", "找 2 位讲师演练 30 分钟，回看调整", "演练是工作坊质量的关键", GOLD),
    ]
    rh = Inches(0.85)
    rx = Inches(0.6)
    ry = Inches(2.0)
    for i, (n, task, note_, c) in enumerate(steps):
        y = ry + rh * i
        rc(s, rx, y, Inches(12.1), rh, WHT, line=LGT)
        rc(s, rx, y, Inches(0.15), rh, c)
        tx(s, rx + Inches(0.3), y + Inches(0.05), Inches(3.0), Inches(0.4), n, sz=13, c=DARK, b=True)
        tx(s, rx + Inches(0.3), y + Inches(0.45), Inches(3.0), Inches(0.35), task, sz=10, c=GRY)
        tx(s, rx + Inches(3.5), y + Inches(0.05), Inches(8.5), Inches(0.4), "关键点：", sz=11, c=c, b=True)
        tx(s, rx + Inches(3.5), y + Inches(0.4), Inches(8.5), Inches(0.4), note_, sz=11, c=TXT)
    ftr(s)
    note(s, "【4R 应用】\n\n讲师话术 A1：\n如何把 4R 应用到您的下一次工作坊——\n\n步骤 1 · 选择场景：找一个您 30 天后要引导的工作坊场景（4 小时以内）。您可以用 8 个案例中相似的那个作为模板。\n\n步骤 2 · 三维分析：分析业务维度 / 课程维度 / 学员维度，确定上次课的薄弱模块 + 学员的具体需求。\n\n步骤 3 · 4R 设计：按 5/30/100/15 分钟设计 R1/R2/R3/R4，R3 一定要 > 60% 时长。\n\n步骤 4 · 问题设计：设计 10-17 个 R3 问题（4 类问题）：开放式 2-4 + 追问 5-8 + 比较 2-3 + 反思 1-2。\n\n步骤 5 · 跟进设计：设计 30 天打卡 + 同伴互助 + 实施报告：每天 1 条微信 + 每周 1 次互助 + 30 天 1 份报告。\n\n步骤 6 · 演练调整：找 2 位讲师演练 30 分钟，回看调整——演练是工作坊质量的关键。\n\n讲师话术 A2：\n6 个步骤的关键时间节点——\n- 步骤 1-2：今天（30 分钟）\n- 步骤 3-4：今天（90 分钟）\n- 步骤 5：今天（30 分钟）\n- 步骤 6：明天（30 分钟）\n\n总时间：今天 2.5 小时 + 明天 30 分钟 = 3 小时完成完整设计。\n\n讲师话术 A3：\n如果您 3 小时完成 6 个步骤，您就有 1 个完整的工作坊设计。\n\n如果您 30 天后真正讲给学员，您就完成了”知行合一”。\n\n讲师的工作坊设计 = 知行合一的过程。")


def P116():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 116, "4R 应用", "8 个场景的 4R 模板速查")
    rc(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.4), DARK)
    tx(s, Inches(0.8), Inches(1.4), Inches(11.7), Inches(0.3),
       "8 个场景的 4R 模板速查", sz=14, c=WHT, b=True)
    headers = ["场景", "R1 起点", "R2 案例", "R3 活动", "R4 行动”]"
    cw = [Inches(2.0), Inches(2.5), Inches(2.5), Inches(2.5), Inches(2.6)]
    rx = Inches(0.6)
    ry = Inches(2.0)
    rh = Inches(0.6)
    rc(s, rx, ry, Inches(12.1), rh, DARK)
    x = rx
    for i, h in enumerate(headers):
        tx(s, x + Inches(0.1), ry, cw[i] - Inches(0.2), rh, h, sz=12, c=WHT, b=True, an=MSO_ANCHOR.MIDDLE)
        x += cw[i]
    rows = [
        ("销售异议处理", "上次课异议点", "5 位销售分享", "问题链演练", "本周处理 3 个客户"),
        ("新晋管理反馈", "上次课反馈点", "5 位新经理分享", "SBI 反馈演练", "本周给 1 位下属"),
        ("中层经理干系人", "上次课干系人点", "5 位经理分享", "干系人分析", "本周画 1 张干系人图"),
        ("客服投诉处理", "上次课投诉点", "5 位客服分享", "3 步法扮演", "本周处理 1 次投诉"),
        ("高潜人才 IDP", "上次课自我认知点", "5 位高潜分享", "IDP 起草", "本周完成 IDP 初稿"),
        ("市场策划", "上次课创意点", "5 位市场分享", "小组策划", "本周完成 1 份方案"),
        ("项目管理风险", "上次课风险点", "5 位 PM 分享", "风险演练", "本周识别 1 个风险"),
        ("研发 POV", "上次课用户点", "5 位研发分享", "POV 起草", "本周完成 1 个 POV"),
    ]
    colors = [RED, GREEN, GOLD, RED, GREEN, GOLD, RED, GREEN]
    for r, row in enumerate(rows):
        y = ry + rh * (r + 1)
        fill = LBG if r % 2 == 0 else WHT
        x = rx
        for c, cell in enumerate(row):
            color = colors[r] if c == 0 else TXT
            b = c == 0
            sz = 10
            rc(s, x, y, cw[c], rh, fill, line=LGT)
            tx(s, x + Inches(0.1), y, cw[c] - Inches(0.2), rh, cell, sz=sz, c=color, b=b, an=MSO_ANCHOR.MIDDLE)
            x += cw[c]
    ftr(s)
    note(s, "【8 个场景的 4R 模板速查】\n\n讲师话术 T1：\n8 个场景的 4R 模板速查表——\n\n[逐行讲解]\n\n1. 销售异议处理：R1 上次课异议点 / R2 5 位销售分享 / R3 问题链演练 / R4 本周处理 3 个客户\n\n2. 新晋管理反馈：R1 上次课反馈点 / R2 5 位新经理分享 / R3 SBI 反馈演练 / R4 本周给 1 位下属\n\n3. 中层经理干系人：R1 上次课干系人点 / R2 5 位经理分享 / R3 干系人分析 / R4 本周画 1 张干系人图\n\n4. 客服投诉处理：R1 上次课投诉点 / R2 5 位客服分享 / R3 3 步法扮演 / R4 本周处理 1 次投诉\n\n5. 高潜人才 IDP：R1 上次课自我认知点 / R2 5 位高潜分享 / R3 IDP 起草 / R4 本周完成 IDP 初稿\n\n6. 市场策划：R1 上次课创意点 / R2 5 位市场分享 / R3 小组策划 / R4 本周完成 1 份方案\n\n7. 项目管理风险：R1 上次课风险点 / R2 5 位 PM 分享 / R3 风险演练 / R4 本周识别 1 个风险\n\n8. 研发 POV：R1 上次课用户点 / R2 5 位研发分享 / R3 POV 起草 / R4 本周完成 1 个 POV\n\n讲师话术 T2：\n每个场景的 4R 都是 4 句话讲完的——\n- R1 一句话（上次课的某个点）\n- R2 一句话（5 位学员分享）\n- R3 一句话（深问 + 共创 + 某个活动）\n- R4 一句话（本周的具体应用）\n\n讲师话术 T3：\n请大家用这个 4 句话模板写自己场景的 4R——\n- 写完后，您就有 1 个完整的工作坊设计\n- 然后按 4 句话的时间比例（5/30/100/15）展开成 4 小时\n\n这就是 4R 工作坊设计的核心——4 句话模板。")


def P117():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 117, "4R 应用", "我的 4R 工作坊设计 · 工作页")
    rc(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.4), DARK)
    tx(s, Inches(0.8), Inches(1.4), Inches(11.7), Inches(0.3),
       "我的 4R 工作坊设计 · 工作页", sz=14, c=WHT, b=True)
    sections = [
        ("我的场景", "（用 1 句话描述您的工作坊场景）", "例：30 位销售代表，2 个月前学了《顾问式销售》课程。本次工作坊聚焦”如何处理价格异议”。", RED),
        ("业务维度", "（业务管理者希望 30 天后学员能做什么？）", "例：30 天后销售能用 3 个步骤处理 70% 的价格异议。", GREEN),
        ("课程维度", "（上次课最薄弱的 2 个模块？）", "例：上次课的 6 个模块中，”价格异议处理”和”客户关系”是销售最薄弱两个模块。", GOLD),
        ("学员维度", "（学员的经验/特点？）", "例：30 位销售，2-5 年经验，对理论熟悉但实际处理价格异议经验少。", RED),
    ]
    rh = Inches(0.85)
    rx = Inches(0.6)
    ry = Inches(2.0)
    for i, (t, q, ex, c) in enumerate(sections):
        y = ry + rh * i
        rc(s, rx, y, Inches(12.1), rh, WHT, line=LGT)
        rc(s, rx, y, Inches(0.15), rh, c)
        tx(s, rx + Inches(0.3), y + Inches(0.1), Inches(2.0), Inches(0.4), t, sz=13, c=DARK, b=True)
        tx(s, rx + Inches(0.3), y + Inches(0.45), Inches(2.0), Inches(0.4), q, sz=10, c=GRY)
        tx(s, rx + Inches(2.5), y + Inches(0.1), Inches(9.5), Inches(0.7), ex, sz=11, c=TXT)
    rc(s, Inches(0.6), Inches(5.4), Inches(12.1), Inches(2.0), WHT, line=LGT)
    rc(s, Inches(0.6), Inches(5.4), Inches(12.1), Inches(0.4), DARK)
    tx(s, Inches(0.8), Inches(5.4), Inches(11.7), Inches(0.4), "我的 4R 设计", sz=12, c=WHT, b=True, an=MSO_ANCHOR.MIDDLE)
    rs = [
        "R1 5 分钟：上次课「        」那个点",
        "R2 25 分钟：5 位学员分享真实经历",
        "R3 110 分钟：深问 + 共创 +        （活动）",
        "R4 15 分钟：本周完成        （具体行动）",
        "跟进 30 天：每天 1 条微信 + 每周 1 次同伴互助 + 30 天 1 份实施报告",
    ]
    for i, r in enumerate(rs):
        y = Inches(5.85 + i * 0.3)
        tx(s, Inches(0.8), y, Inches(11.7), Inches(0.3), r, sz=11, c=RED if i < 4 else GRY, b=(i < 4))
    ftr(s)
    note(s, "【我的 4R 工作坊设计 · 工作页】\n\n讲师话术 WP1：\n这是您的 4R 工作坊设计工作页——\n\n请大家现在拿出纸笔（或电脑），完成以下 5 个填空——\n\n我的场景（用 1 句话描述您的工作坊场景）：\n例：30 位销售代表，2 个月前学了《顾问式销售》课程。本次工作坊聚焦”如何处理价格异议”。\n\n业务维度（业务管理者希望 30 天后学员能做什么？）：\n例：30 天后销售能用 3 个步骤处理 70% 的价格异议。\n\n课程维度（上次课最薄弱的 2 个模块？）：\n例：上次课的 6 个模块中，”价格异议处理”和”客户关系”是销售最薄弱两个模块。\n\n学员维度（学员的经验/特点？）：\n例：30 位销售，2-5 年经验，对理论熟悉但实际处理价格异议经验少。\n\n我的 4R 设计：\nR1 5 分钟：上次课「        」那个点\nR2 25 分钟：5 位学员分享真实经历\nR3 110 分钟：深问 + 共创 +        （活动）\nR4 15 分钟：本周完成        （具体行动）\n跟进 30 天：每天 1 条微信 + 每周 1 次同伴互助 + 30 天 1 份实施报告\n\n讲师话术 WP2：\n请大家用 5 分钟完成这个工作页——\n- 如果您是新人讲师，可以参考 8 个案例中的相似场景\n- 如果您是熟练讲师，可以基于您之前的工作坊改写\n- 如果您是进阶讲师，可以完全创新\n\n讲师话术 WP3：\n完成工作页后，您就有 1 份完整的工作坊设计草稿。\n\n接下来您可以：\n1. 找 2 位讲师互评（30 分钟）\n2. 根据反馈调整（30 分钟）\n3. 准备 R3 的问题（30 分钟）\n4. 设计跟进（30 分钟）\n\n总时间：2-3 小时完成 1 个完整的工作坊设计。")


def P118():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 118, "资源包", "20 个工具/模板/资源")
    rc(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.4), DARK)
    tx(s, Inches(0.8), Inches(1.4), Inches(11.7), Inches(0.3),
       "20 个工具/模板/资源 · 资源包", sz=14, c=WHT, b=True)
    resources = [
        ("1-4", "4R 工作坊模板", "工作坊设计模板", "Excel + 讲义", RED),
        ("5-8", "4 类问题清单", "100 个 R3 问题示例", "Word + 打印", GREEN),
        ("9-12", "5 种开场话术", "开场 5 分钟话术", "Word + 打印", GOLD),
        ("13-15", "6 种共创手法", "共创引导手册", "PDF + 视频", RED),
        ("16-18", "4 种跟进模板", "打卡 + 互助 + 报告模板", "Excel + 微信群", GREEN),
        ("19-20", "讲师成长手册", "5 阶段成长指南", "PDF + 案例库", GOLD),
    ]
    rh = Inches(0.85)
    rx = Inches(0.6)
    ry = Inches(2.0)
    cw = [Inches(1.5), Inches(3.0), Inches(3.5), Inches(4.1)]
    for r, row in enumerate([("编号", "资源名称", "用途", "形式")] + resources):
        is_h = (r == 0)
        y = ry + rh * r
        x = rx
        colors = [RED, GREEN, GOLD, RED, GREEN, GOLD]
        for c, cell in enumerate(row):
            fill = DARK if is_h else (LBG if r % 2 == 0 else WHT)
            color = WHT if is_h else (colors[r-1] if (c == 0 and not is_h) else TXT)
            b = is_h or (not is_h and c == 0)
            sz = 11
            rc(s, x, y, cw[c], rh, fill, line=LGT)
            tx(s, x + Inches(0.1), y, cw[c] - Inches(0.2), rh, cell, sz=sz, c=color, b=b, an=MSO_ANCHOR.MIDDLE)
            x += cw[c]
    ftr(s)
    note(s, "【20 个工具/模板/资源】\n\n讲师话术 R1：\n20 个工具/模板/资源的资源包——\n\n1-4：4R 工作坊模板（Excel + 讲义）\n5-8：4 类问题清单（Word + 打印）\n9-12：5 种开场话术（Word + 打印）\n13-15：6 种共创手法（PDF + 视频）\n16-18：4 种跟进模板（Excel + 微信群）\n19-20：讲师成长手册（PDF + 案例库）\n\n讲师话术 R2：\n每个工具的具体用法——\n\n1-4：4R 工作坊模板\n- 用途：工作坊设计模板\n- 形式：Excel（含公式）+ 讲义（打印版）\n- 使用：讲师先填 Excel，再打印讲义\n\n5-8：4 类问题清单\n- 用途：100 个 R3 问题示例\n- 形式：Word（按 4 类问题分类）+ 打印\n- 使用：讲师设计 R3 时直接参考\n\n9-12：5 种开场话术\n- 用途：开场 5 分钟话术\n- 形式：Word（5 种开场各 1 页话术）+ 打印\n- 使用：讲师选 1 种开场，照着话术讲\n\n13-15：6 种共创手法\n- 用途：共创引导手册\n- 形式：PDF（含图文）+ 视频示范\n- 使用：讲师提前看视频，再在 R3 使用\n\n16-18：4 种跟进模板\n- 用途：打卡 + 互助 + 报告模板\n- 形式：Excel（含公式）+ 微信群公告\n- 使用：工作坊后讲师直接发微信群\n\n19-20：讲师成长手册\n- 用途：5 阶段成长指南\n- 形式：PDF（含案例库）+ 案例视频\n- 使用：讲师每年读 1 次，更新自己的成长计划\n\n讲师话术 R3：\n所有资源都在课程资料包中——\n- 课程资料包路径：知行 · 学习落地工作坊 / 课程资料包\n- 包含 20 个工具 + 8 个案例 + 5 个附录\n- 讲师可以自由使用、修改、分发\n\n讲师话术 R4：\n另外，我们工作坊的 30 天跟进，也会通过这些资源进行——\n- 每天打卡 = 微信群发 1 条问题（参考 5-8 工具）\n- 每周互助 = 微信群讨论（参考 16-18 工具）\n- 30 天报告 = 学员填写 Excel 模板（参考 16-18 工具）")
'''
with open('gen_pptx_part2.py', 'a', encoding='utf-8') as f:
    f.write(code)
print('P113-P118 OK, lines:', sum(1 for _ in open('gen_pptx_part2.py', encoding='utf-8')))
