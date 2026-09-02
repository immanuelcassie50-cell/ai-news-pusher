# -*- coding: utf-8 -*-
code = r'''


def P98():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 98, "附录", "附录 D · 4 类提问技术速查")
    rc(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.4), DARK)
    tx(s, Inches(0.8), Inches(1.4), Inches(11.7), Inches(0.3), "4 类提问技术速查表", sz=14, c=WHT, b=True)
    headers = ["类型", "目的", "典型问题", "数量", "时间"]
    cw = [Inches(1.5), Inches(2.0), Inches(5.0), Inches(1.5), Inches(2.1)]
    rx = Inches(0.6)
    ry = Inches(2.0)
    rh = Inches(0.85)
    rc(s, rx, ry, Inches(12.1), rh, DARK)
    x = rx
    for i, h in enumerate(headers):
        tx(s, x + Inches(0.1), ry, cw[i] - Inches(0.2), rh, h, sz=12, c=WHT, b=True, an=MSO_ANCHOR.MIDDLE)
        x += cw[i]
    rows = [
        ("开放式", "让学员开始说", "您当时是怎么想的？您能描述一下那个场景吗？您看到了什么？", "2-4 个", "5-10 秒/问"),
        ("追问", "深挖学员的回答", "X 具体是什么？那一刻您心里在想什么？能多说说吗？", "5-8 个", "5-10 秒/问"),
        ("比较", "让学员看差异", "您和李四的做法有什么不同？那次和这次的区别？", "2-3 个", "10-15 秒/问"),
        ("反思", "让学员内化", "这次经历让您对 X 有什么新的理解？如果重来您会怎么做？", "1-2 个", "15-30 秒/问"),
    ]
    for r, row in enumerate(rows):
        y = ry + rh * (r + 1)
        fill = LBG if r % 2 == 0 else WHT
        x = rx
        c = [RED, GREEN, GOLD, RED][r]
        for c, cell in enumerate(row):
            color = c if c_ == 0 else TXT
            b = c_ == 0
            sz = 10
            rc(s, x, y, cw[c], rh, fill, line=LGT)
            tx(s, x + Inches(0.1), y, cw[c] - Inches(0.2), rh, cell, sz=sz, c=color, b=b, an=MSO_ANCHOR.MIDDLE)
            x += cw[c]
    ftr(s)
    note(s, "【附录 D · 4 类提问技术速查】\n\n讲师话术 A6：\n4 类提问技术速查表——\n\n[逐行讲解]\n\n开放式：\n- 目的：让学员开始说\n- 典型问题：您当时是怎么想的？您能描述一下那个场景吗？\n- 数量：2-4 个\n- 时间：5-10 秒/问\n\n追问：\n- 目的：深挖学员的回答\n- 典型问题：X 具体是什么？那一刻您心里在想什么？\n- 数量：5-8 个\n- 时间：5-10 秒/问\n\n比较：\n- 目的：让学员看差异\n- 典型问题：您和李四的做法有什么不同？\n- 数量：2-3 个\n- 时间：10-15 秒/问\n\n反思：\n- 目的：让学员内化\n- 典型问题：这次经历让您对 X 有什么新的理解？\n- 数量：1-2 个\n- 时间：15-30 秒/问\n\n讲师话术 A7：\n这个速查表是讲师必背的——每次设计 R3 时，先把 4 类问题各想 1-2 个，再开始设计完整链条。\n\n注意 4 类问题的数量分配：\n- 开放式 2-4 个（让说）\n- 追问 5-8 个（深挖）\n- 比较 2-3 个（看差异）\n- 反思 1-2 个（内化）\n\n总数约 10-17 个问题，持续 30-45 分钟。")


def P99():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 99, "附录", "附录 E · 共创引导手法速查")
    rc(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.4), DARK)
    tx(s, Inches(0.8), Inches(1.4), Inches(11.7), Inches(0.3), "6 种共创引导手法速查表", sz=14, c=WHT, b=True)
    headers = ["手法", "用法", "适合场景", "讲师投入", "风险"]
    cw = [Inches(1.5), Inches(3.0), Inches(3.0), Inches(2.0), Inches(2.6)]
    rx = Inches(0.6)
    ry = Inches(2.0)
    rh = Inches(0.8)
    rc(s, rx, ry, Inches(12.1), rh, DARK)
    x = rx
    for i, h in enumerate(headers):
        tx(s, x + Inches(0.1), ry, cw[i] - Inches(0.2), rh, h, sz=12, c=WHT, b=True, an=MSO_ANCHOR.MIDDLE)
        x += cw[i]
    rows = [
        ("轮流向", "A 说完后 B 必须先回应 A", "讲师想让学员互动", "中", "学员不愿回应"),
        ("接力", "学员在别人发言基础上继续", "讲师想让讨论展开", "低", "学员接不上"),
        ("辩论", "让 2 个学员立场对立", "讲师想引发洞见", "中", "学员不愿冲突"),
        ("补全", "其他学员补充发言者盲点", "讲师想让每个人都有贡献", "低", "学员不知补什么"),
        ("投票", "全班对观点投票", "讲师想用数据驱动", "低", "投票太表面"),
        ("重述", "学员用自己的话重述别人", "讲师想确保每个学员都听", "低", "学员重述不准确"),
    ]
    for r, row in enumerate(rows):
        y = ry + rh * (r + 1)
        fill = LBG if r % 2 == 0 else WHT
        x = rx
        c = [RED, GREEN, GOLD, RED, GREEN, GOLD][r]
        for c, cell in enumerate(row):
            color = c if c_ == 0 else TXT
            b = c_ == 0
            sz = 10
            rc(s, x, y, cw[c], rh, fill, line=LGT)
            tx(s, x + Inches(0.1), y, cw[c] - Inches(0.2), rh, cell, sz=sz, c=color, b=b, an=MSO_ANCHOR.MIDDLE)
            x += cw[c]
    ftr(s)
    note(s, "【附录 E · 6 种共创引导手法】\n\n讲师话术 A8：\n6 种共创引导手法速查表——\n\n[逐行讲解]\n\n轮流向：\n- 用法：A 说完后 B 必须先回应 A\n- 适合场景：讲师想让学员互动\n- 讲师投入：中\n- 风险：学员不愿回应\n\n接力：\n- 用法：学员在别人发言基础上继续\n- 适合场景：讲师想让讨论展开\n- 讲师投入：低\n- 风险：学员接不上\n\n辩论：\n- 用法：让 2 个学员立场对立\n- 适合场景：讲师想引发洞见\n- 讲师投入：中\n- 风险：学员不愿冲突\n\n补全：\n- 用法：其他学员补充发言者盲点\n- 适合场景：讲师想让每个人都有贡献\n- 讲师投入：低\n- 风险：学员不知补什么\n\n投票：\n- 用法：全班对观点投票\n- 适合场景：讲师想用数据驱动\n- 讲师投入：低\n- 风险：投票太表面\n\n重述：\n- 用法：学员用自己的话重述别人\n- 适合场景：讲师想确保每个学员都听\n- 讲师投入：低\n- 风险：学员重述不准确\n\n讲师话术 A9：\n6 种手法可以组合使用。\n\nR3 一次深度讨论（30-45 分钟）建议至少用 3 种手法。\n\n最常用组合：重述 + 追问 + 比较\n- 重述确保学员都在听\n- 追问深挖细节\n- 比较让学员看差异")


def P100():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 100, "里程碑", "工作坊设计 · 100 页达成")
    rc(s, prs.slides.add_slide(BLANK), bg(s))
    # 重做
    s = prs.slides[BGN]
    bg(s)
    rc(s, Inches(0), Inches(0), Inches(13.333), Inches(0.1), GOLD)
    tx(s, Inches(0.8), Inches(1.5), Inches(11.7), Inches(0.5),
       "恭喜", sz=24, c=GOLD, b=True)
    tx(s, Inches(0.8), Inches(2.2), Inches(11.7), Inches(1.5),
       "100 页达成", sz=60, c=WHT, b=True)
    tx(s, Inches(0.8), Inches(3.7), Inches(11.7), Inches(0.5),
       "工作坊设计的所有核心内容已完整覆盖", sz=18, c=RED)
    rc(s, Inches(0.8), Inches(4.5), Inches(11.7), Inches(0.05), LGT)
    coverages = [
        "第一章 · 知行之间（10 页）",
        "第二章 · 流程规划 · 4R 循环（20 页）",
        "第三章 · 点燃参与 · 5 种开场方法（15 页）",
        "第四章 · 深问与共创 · 4 类提问技术（20 页）",
        "第五章 · 训后跟进 · 4 种跟进方法（20 页）",
        "第六章 · 收官 · 全流程整合（10 页）",
        "实战案例库（5 个完整案例）",
        "讲师成长路径 + 附录（5 个附录）",
    ]
    for i, cov in enumerate(coverages):
        x = Inches(0.8 + (i % 2) * 6.0)
        y = Inches(4.8 + (i // 2) * 0.4)
        tx(s, x, y, Inches(5.7), Inches(0.4), "✓ " + cov, sz=14, c=LGT, b=True)
    rc(s, Inches(0.8), Inches(7.0), Inches(11.7), Inches(0.05), LGT)
    tx(s, Inches(0.8), Inches(7.05), Inches(11.7), Inches(0.4),
       "继续 30 页 · 案例对照表 + 行动指南", sz=14, c=GOLD, b=True)
    note(s, "【100 页达成】\n\n讲师话术 M1：\n恭喜大家，我们已经走完了 100 页！\n\n工作坊设计的所有核心内容都已完整覆盖：\n- 第一章 · 知行之间（10 页）\n- 第二章 · 流程规划 · 4R 循环（20 页）\n- 第三章 · 点燃参与 · 5 种开场方法（15 页）\n- 第四章 · 深问与共创 · 4 类提问技术（20 页）\n- 第五章 · 训后跟进 · 4 种跟进方法（20 页）\n- 第六章 · 收官 · 全流程整合（10 页）\n- 实战案例库（5 个完整案例）\n- 讲师成长路径 + 附录（5 个附录）\n\n接下来还有 30 页——\n- 5 个实战案例的深入对照\n- 行动指南（您今天回去后该做什么）\n- 讲师常见问题（最后 Q&A）\n\n请大家保持专注——这是工作坊最有价值的 30 页。")
