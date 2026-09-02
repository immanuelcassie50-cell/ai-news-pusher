# -*- coding: utf-8 -*-
code = r'''


def P101():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 101, "实战案例库", "案例 6 · 营销策划工作坊")
    rc(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.4), DARK)
    tx(s, Inches(0.8), Inches(1.4), Inches(11.7), Inches(0.3),
       "案例 6 · 营销策划工作坊 · 创意激发", sz=14, c=WHT, b=True)
    sections = [
        ("场景", "18 位市场专员，3 个月前学了《数字营销》课程。本次工作坊聚焦”618 大促营销方案”", RED),
        ("业务维度", "业务管理者希望：30 天后市场专员能提交 1 份完整的 618 大促方案", GREEN),
        ("课程维度", "上次课的 6 个模块中，”内容创意”和”数据驱动”是市场专员最薄弱的两个模块", GOLD),
        ("学员维度", "18 位市场专员，1-3 年经验，对概念熟悉但没独立策划过大促", RED),
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
        ("R1 5 分钟", "上次课”内容创意”那个点", GREEN),
        ("R2 25 分钟", "5 位市场分享真实策划经历", GOLD),
        ("R3 110 分钟", "深问 + 共创 + 小组策划", RED),
        ("R4 15 分钟", "下周完成 618 方案初稿", GREEN),
    ]
    for i, (t, desc, c) in enumerate(design):
        x = Inches(0.6 + i * 3.1)
        rc(s, x, Inches(6.1), Inches(2.9), Inches(0.9), c)
        tx(s, x + Inches(0.2), Inches(6.15), Inches(2.5), Inches(0.4), t, sz=12, c=WHT, b=True)
        tx(s, x + Inches(0.2), Inches(6.55), Inches(2.5), Inches(0.4), desc, sz=10, c=WHT)
    ftr(s)
    note(s, "【案例 6 · 营销策划】\n\n讲师话术 C6.1：\n我们看第六个案例——营销策划工作坊。\n\n场景：18 位市场专员，3 个月前学了《数字营销》课程。本次工作坊聚焦”618 大促营销方案”。\n\n业务维度：业务管理者希望 30 天后市场专员能提交 1 份完整的 618 大促方案。\n\n课程维度：上次课的 6 个模块中，”内容创意”和”数据驱动”是市场专员最薄弱的两个模块。\n\n学员维度：18 位市场专员，1-3 年经验，对概念熟悉但没独立策划过大促。\n\n4R 流程设计（4 小时）：\n- R1 5 分钟：上次课”内容创意”那个点\n- R2 25 分钟：5 位市场分享真实策划经历\n- R3 110 分钟：深问 + 共创 + 小组策划\n- R4 15 分钟：下周完成 618 方案初稿\n\n讲师话术 C6.2：\n营销策划工作坊的关键是小组策划——3-4 人一组，1 小时现场出 1 份大促方案框架。\n\n小组策划的设计：\n- 5 分钟：明确分工（创意 / 文案 / 数据 / 统筹）\n- 50 分钟：现场策划 + 讲师巡视\n- 5 分钟：每组 1 分钟汇报方案要点\n\nR3 阶段结束后，每组有 1 份大促方案框架，R4 让学员把这个框架在 1 周内完善。")


def P102():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 102, "实战案例库", "案例 7 · 项目管理工作坊")
    rc(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.4), DARK)
    tx(s, Inches(0.8), Inches(1.4), Inches(11.7), Inches(0.3),
       "案例 7 · 项目管理工作坊 · 风险管理", sz=14, c=WHT, b=True)
    sections = [
        ("场景", "20 位项目经理，2 个月前学了《项目管理》课程。本次工作坊聚焦”项目风险识别与应对”", RED),
        ("业务维度", "业务管理者希望：30 天后项目经理能识别 3 个真实项目风险 + 制定应对计划", GREEN),
        ("课程维度", "上次课的 8 个模块中，”风险管理”和”利益相关方”是项目经理最薄弱的两个模块", GOLD),
        ("学员维度", "20 位项目经理，2-5 年经验，对工具熟悉但实际风险识别经验少", RED),
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
        ("R1 5 分钟", "上次课”风险”那个点", GREEN),
        ("R2 25 分钟", "5 位 PM 分享项目失败案例", GOLD),
        ("R3 110 分钟", "深问 + 共创 + 风险演练", RED),
        ("R4 15 分钟", "下周识别 1 个真实项目风险", GREEN),
    ]
    for i, (t, desc, c) in enumerate(design):
        x = Inches(0.6 + i * 3.1)
        rc(s, x, Inches(6.1), Inches(2.9), Inches(0.9), c)
        tx(s, x + Inches(0.2), Inches(6.15), Inches(2.5), Inches(0.4), t, sz=12, c=WHT, b=True)
        tx(s, x + Inches(0.2), Inches(6.55), Inches(2.5), Inches(0.4), desc, sz=10, c=WHT)
    ftr(s)
    note(s, "【案例 7 · 项目管理】\n\n讲师话术 C7.1：\n我们看第七个案例——项目管理工作坊。\n\n场景：20 位项目经理，2 个月前学了《项目管理》课程。本次工作坊聚焦”项目风险识别与应对”。\n\n业务维度：业务管理者希望 30 天后项目经理能识别 3 个真实项目风险 + 制定应对计划。\n\n课程维度：上次课的 8 个模块中，”风险管理”和”利益相关方”是项目经理最薄弱的两个模块。\n\n学员维度：20 位项目经理，2-5 年经验，对工具熟悉但实际风险识别经验少。\n\n4R 流程设计（4 小时）：\n- R1 5 分钟：上次课”风险”那个点\n- R2 25 分钟：5 位 PM 分享项目失败案例\n- R3 110 分钟：深问 + 共创 + 风险演练\n- R4 15 分钟：下周识别 1 个真实项目风险\n\n讲师话术 C7.2：\n项目管理工坊的关键是风险演练——R3 阶段用 30 分钟做”风险推演”演练。\n\n风险推演的设计：\n- 4-5 人一组\n- 每人列出 1 个真实项目的 3 个风险\n- 小组选出 3 个最严重的风险\n- 制定应对计划（规避 / 转移 / 缓解 / 接受）\n- 30 分钟后每组 1 分钟汇报\n\n风险演练让学员从”知道风险管理”到”会识别风险”。")


def P103():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 103, "实战案例库", "案例 8 · 创新思维工作坊")
    rc(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.4), DARK)
    tx(s, Inches(0.8), Inches(1.4), Inches(11.7), Inches(0.3),
       "案例 8 · 创新思维工作坊 · 问题重构", sz=14, c=WHT, b=True)
    sections = [
        ("场景", "25 位研发工程师，1 个月前学了《设计思维》课程。本次工作坊聚焦”如何从用户问题出发重新定义产品”", RED),
        ("业务维度", "业务管理者希望：30 天后工程师能提交 3 个用户问题的重新定义（POV）", GREEN),
        ("课程维度", "上次课的 5 个模块中，”问题重构”和”用户共情”是工程师最薄弱的两个模块", GOLD),
        ("学员维度", "25 位研发工程师，3-8 年经验，技术强但用户视角弱", RED),
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
        ("R1 5 分钟", "上次课”用户”那个点", GREEN),
        ("R2 30 分钟", "5 位工程师分享用户反馈", GOLD),
        ("R3 100 分钟", "深问 + 共创 + POV 起草", RED),
        ("R4 15 分钟", "下周完成 1 个 POV 文档", GREEN),
    ]
    for i, (t, desc, c) in enumerate(design):
        x = Inches(0.6 + i * 3.1)
        rc(s, x, Inches(6.1), Inches(2.9), Inches(0.9), c)
        tx(s, x + Inches(0.2), Inches(6.15), Inches(2.5), Inches(0.4), t, sz=12, c=WHT, b=True)
        tx(s, x + Inches(0.2), Inches(6.55), Inches(2.5), Inches(0.4), desc, sz=10, c=WHT)
    ftr(s)
    note(s, "【案例 8 · 创新思维】\n\n讲师话术 C8.1：\n我们看第八个案例——创新思维工作坊。\n\n场景：25 位研发工程师，1 个月前学了《设计思维》课程。本次工作坊聚焦”如何从用户问题出发重新定义产品”。\n\n业务维度：业务管理者希望 30 天后工程师能提交 3 个用户问题的重新定义（POV）。\n\n课程维度：上次课的 5 个模块中，”问题重构”和”用户共情”是工程师最薄弱的两个模块。\n\n学员维度：25 位研发工程师，3-8 年经验，技术强但用户视角弱。\n\n4R 流程设计（4 小时）：\n- R1 5 分钟：上次课”用户”那个点\n- R2 30 分钟：5 位工程师分享用户反馈\n- R3 100 分钟：深问 + 共创 + POV 起草\n- R4 15 分钟：下周完成 1 个 POV 文档\n\n讲师话术 C8.2：\n创新思维工坊的关键是 POV（Point of View）起草——R3 阶段用 50 分钟做 POV 起草。\n\nPOV 公式：用户 [谁] 需要 [什么] 因为 [为什么] 。\n\n例：\n- 用户 [30 岁职场妈妈] 需要 [快速做完饭的方案] 因为 [她下班后只有 30 分钟做饭]。\n\nPOV 起草设计：\n- 4 人一组\n- 每人列出 1 个真实用户的 3 个痛点\n- 小组选出 1 个最痛的痛点\n- 用 POV 公式写成 1 句话\n- 50 分钟后每组 1 分钟汇报\n\nPOV 让工程师从”做技术”到”做用户需要的技术”。")


def P104():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 104, "实战案例库", "8 个案例的 R3 设计对照")
    rc(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.4), DARK)
    tx(s, Inches(0.8), Inches(1.4), Inches(11.7), Inches(0.3), "8 个案例的 R3 设计对照", sz=14, c=WHT, b=True)
    headers = ["案例", "对象", "R3 活动", "工具/方法", "时间”]"
    cw = [Inches(1.0), Inches(2.0), Inches(3.0), Inches(3.5), Inches(2.6)]
    rx = Inches(0.6)
    ry = Inches(2.0)
    rh = Inches(0.55)
    rc(s, rx, ry, Inches(12.1), rh, DARK)
    x = rx
    for i, h in enumerate(headers):
        tx(s, x + Inches(0.1), ry, cw[i] - Inches(0.2), rh, h, sz=12, c=WHT, b=True, an=MSO_ANCHOR.MIDDLE)
        x += cw[i]
    cases = [
        ("1", "销售", "问题链", "4 类问题", "100 分钟"),
        ("2", "新晋管理", "实战演练", "反馈模板", "110 分钟"),
        ("3", "中层经理", "工具演练", "利益相关方图", "110 分钟"),
        ("4", "客服", "角色扮演", "3 步法", "110 分钟"),
        ("5", "高潜人才", "IDP 起草", "IDP 模板", "110 分钟"),
        ("6", "市场专员", "小组策划", "营销框架", "110 分钟"),
        ("7", "项目经理", "风险演练", "风险矩阵", "110 分钟"),
        ("8", "研发工程师", "POV 起草", "POV 公式", "100 分钟"),
    ]
    for r, row in enumerate(cases):
        y = ry + rh * (r + 1)
        fill = LBG if r % 2 == 0 else WHT
        x = rx
        c = [RED, GREEN, GOLD, RED, GREEN, GOLD, RED, GREEN][r]
        for c, cell in enumerate(row):
            color = c if c_ == 0 else TXT
            b = c_ == 0
            sz = 11
            rc(s, x, y, cw[c], rh, fill, line=LGT)
            tx(s, x + Inches(0.1), y, cw[c] - Inches(0.2), rh, cell, sz=sz, c=color, b=b, an=MSO_ANCHOR.MIDDLE)
            x += cw[c]
    ftr(s)
    note(s, "【8 个案例的 R3 设计对照】\n\n讲师话术 C9：\n我们看 8 个案例的 R3 设计对照：\n\n[逐行讲解]\n\n案例 1 · 销售 · 问题链 · 4 类问题 · 100 分钟\n案例 2 · 新晋管理 · 实战演练 · 反馈模板 · 110 分钟\n案例 3 · 中层经理 · 工具演练 · 利益相关方图 · 110 分钟\n案例 4 · 客服 · 角色扮演 · 3 步法 · 110 分钟\n案例 5 · 高潜人才 · IDP 起草 · IDP 模板 · 110 分钟\n案例 6 · 市场专员 · 小组策划 · 营销框架 · 110 分钟\n案例 7 · 项目经理 · 风险演练 · 风险矩阵 · 110 分钟\n案例 8 · 研发工程师 · POV 起草 · POV 公式 · 100 分钟\n\n讲师话术 C10：\n8 个案例的 R3 设计有几个共同点：\n1. R3 都至少 100 分钟（占 42% 以上）\n2. R3 都有具体的活动形式（问题链/演练/工具/角色/起草）\n3. R3 都有具体的工具/方法支持\n4. 跟进都有 30 天打卡\n\n讲师话术 C11：\n您的场景可能不在 8 个案例中——但您可以参考：\n1. 选最相似的 1 个案例作为模板\n2. 把它的 R3 活动改成适合您场景的活动\n3. 把它的工具改成适合您场景的工具\n4. 保持 4R 的比例和跟进方式不变")


def P105():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 105, "行动指南", "回去后 7 天必做")
    rc(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.4), DARK)
    tx(s, Inches(0.8), Inches(1.4), Inches(11.7), Inches(0.3),
       "回去后 7 天必做的 7 件事", sz=14, c=WHT, b=True)
    items = [
        ("1", "今天", "完成工作坊全流程的初稿设计", "基于我的引导场景，用 4R 设计一个 4 小时工作坊", RED),
        ("2", "今天", "写出 8-10 个 R3 问题", "开放式 2-3 个 + 追问 3-4 个 + 比较 1-2 个 + 反思 1 个", GREEN),
        ("3", "今天", "选出 1-2 种开场方法", "从 5 种方法中选择，写出前 5 分钟的具体内容", GOLD),
        ("4", "今天", "设计 30 天跟进计划", "从 4 种跟进方法中选 2-3 种", RED),
        ("5", "明天", "找 2 位同事演练 30 分钟", "扮演讲师和学员，测试您的问题质量", GREEN),
        ("6", "3 天内", "回看演练，调整设计", "基于演练反馈调整您的工作坊设计", GOLD),
        ("7", "7 天内", "在工作坊前 1 周发承诺", "在小组群里发您的承诺：30 天后互相检查", RED),
    ]
    rh = Inches(0.7)
    rx = Inches(0.6)
    ry = Inches(2.0)
    cw = [Inches(0.7), Inches(1.5), Inches(3.5), Inches(6.4)]
    for r, (n, t, task, desc, c) in enumerate(items):
        y = ry + rh * r
        fill = LBG if r % 2 == 0 else WHT
        x = rx
        rc(s, x, y, Inches(12.1), rh, fill, line=LGT)
        rc(s, x, y, Inches(0.15), rh, c)
        tx(s, x + Inches(0.3), y, Inches(0.6), rh, n, sz=18, c=c, b=True, al=PP_ALIGN.CENTER, an=MSO_ANCHOR.MIDDLE)
        tx(s, x + Inches(1.0), y, Inches(1.4), rh, t, sz=11, c=DARK, b=True, an=MSO_ANCHOR.MIDDLE)
        tx(s, x + Inches(2.5), y, Inches(3.4), rh, task, sz=11, c=c, b=True, an=MSO_ANCHOR.MIDDLE)
        tx(s, x + Inches(6.0), y, Inches(6.0), rh, "→ “ + desc, sz=10, c=GRY, an=MSO_ANCHOR.MIDDLE)"
    ftr(s)
    note(s, "【行动指南】\n\n讲师话术 AC1：\n回去后 7 天必做的 7 件事——\n\n1. 今天：完成工作坊全流程的初稿设计（基于我的引导场景）\n2. 今天：写出 8-10 个 R3 问题\n3. 今天：选出 1-2 种开场方法，写出前 5 分钟的具体内容\n4. 今天：设计 30 天跟进计划\n5. 明天：找 2 位同事演练 30 分钟（扮演讲师和学员）\n6. 3 天内：回看演练，调整设计\n7. 7 天内：在工作坊前 1 周发承诺（在小组群里发您的承诺：30 天后互相检查）\n\n讲师话术 AC2：\n这 7 件事是您把工作坊设计从”想法”变成”行动”的关键。\n\n关键洞察：\n- 1-4 件事是设计（今天完成）\n- 5-6 件事是演练（明天到 3 天内）\n- 7 件事是承诺（7 天内）\n\n如果今天完成 1-4 件事，您就已经领先 80% 的讲师。\n\n如果 7 天内完成 7 件事，您的工作坊质量会非常稳定。")


def P106():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 106, "行动指南", "30 天跟进 · 关键节点")
    rc(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.4), DARK)
    tx(s, Inches(0.8), Inches(1.4), Inches(11.7), Inches(0.3),
       "工作坊后 30 天跟进 · 8 个关键节点", sz=14, c=WHT, b=True)
    timeline = [
        ("0 天", "工作坊结束 2 小时内", "整理 R4 承诺", "把学员承诺汇总成 1 张表"),
        ("0 天", "工作坊结束 4 小时内", "推送第 1 课", "【第 1 课】您今天用了哪个新方法？"),
        ("1 天", "工作坊结束 24 小时内", "建微信群/钉钉群", "公布跟进时间表"),
        ("1 天", "工作坊结束 24 小时内", "分 2-3 人小组", "根据学员行业/岗位/工作坊发言"),
        ("3 天", "工作坊后第 3 天", "看一次打卡数据", "对没打卡的学员私下提醒"),
        ("7 天", "工作坊后第 7 天", "第 1 次同伴互助", "30 分钟视频会（讲师参与 1 次）"),
        ("14 天", "工作坊后第 14 天", "讲师群内答疑", "1 小时集中答疑"),
        ("30 天", "工作坊后第 30 天", "30 天实施报告", "学员提交 1 页报告 + 讲师汇总"),
    ]
    rh = Inches(0.55)
    rx = Inches(0.6)
    ry = Inches(2.0)
    cw = [Inches(1.0), Inches(3.0), Inches(3.0), Inches(5.1)]
    for r, row in enumerate([("天数", "节点", "动作", "目的")] + timeline):
        is_h = (r == 0)
        y = ry + rh * r
        x = rx
        for c, cell in enumerate(row):
            fill = DARK if is_h else (LBG if r % 2 == 0 else WHT)
            color = WHT if is_h else (RED if c == 0 else TXT)
            b = is_h or (not is_h and c == 0)
            sz = 10
            rc(s, x, y, cw[c], rh, fill, line=LGT)
            tx(s, x + Inches(0.1), y, cw[c] - Inches(0.2), rh, cell, sz=sz, c=color, b=b, an=MSO_ANCHOR.MIDDLE)
            x += cw[c]
    ftr(s)
    note(s, "【30 天跟进关键节点】\n\n讲师话术 AC3：\n工作坊后 30 天跟进的 8 个关键节点——\n\n[逐条讲解]\n\n0 天 · 2 小时内 · 整理 R4 承诺\n0 天 · 4 小时内 · 推送第 1 课【第 1 课】您今天用了哪个新方法？\n1 天 · 24 小时内 · 建微信群/钉钉群\n1 天 · 24 小时内 · 分 2-3 人小组\n3 天 · 第 3 天 · 看一次打卡数据\n7 天 · 第 7 天 · 第 1 次同伴互助\n14 天 · 第 14 天 · 讲师群内答疑\n30 天 · 第 30 天 · 30 天实施报告\n\n讲师话术 AC4：\n注意几个关键：\n- 0 天（工作坊结束当天）：4 小时内必须发第 1 课，否则学员 24 小时就忘了\n- 1 天：24 小时内建群 + 分组\n- 3 天：第 3 天必须有 1 次检查（对没打卡的学员私下提醒）\n- 7 天：第 1 次同伴互助（讲师参与 1 次）\n- 30 天：30 天实施报告（这是评估 ROI 的核心）\n\n讲师话术 AC5：\n30 天跟进的关键是节奏感——每天打卡 + 每周互助 + 关键节点提醒。\n\n如果学员在 30 天内得到 30 次打卡 + 4 次同伴互助 + 1 次 30 天实施报告，\n他们的新方法使用率会从 30% 提升到 70%。")
'''
with open('gen_pptx_part2.py', 'a', encoding='utf-8') as f:
    f.write(code)
print('P101-P106 OK, lines:', sum(1 for _ in open('gen_pptx_part2.py', encoding='utf-8')))
