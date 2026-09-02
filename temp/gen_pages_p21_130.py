# -*- coding: utf-8 -*-
"""Generate P21-P130 in clean Python form."""
import os



Creates 110 functions P21 through P130. Each is simple but valid.
Content captures the 4R framework, 5 opening types, 4 question types,
follow-up methods, etc.
"""

# P21: 4R循环总览
P21 = '''def P21():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 21, "第二章 · 流程规划", "2.2 · 4R 循环总览")
    tx(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.4), "4R 循环 · 工作坊质量框架", sz=18, c=DARK, b=True)
    rs = [
        ("R1", "回顾", "Recall", "10-15%", "重新激活学员记忆", RED),
        ("R2", "现实", "Reality", "25-30%", "学员真实工作情境", GREEN),
        ("R3", "共创", "Reimagine", "30-35%", "群体智慧共创方案", GOLD),
        ("R4", "行动", "Resolve", "25-30%", "具体实践承诺", DARK),
    ]
    for i, (code_n, t, en, pct, desc, c) in enumerate(rs):
        x = Inches(0.6 + i * 3.1)
        rc(s, x, Inches(2.0), Inches(2.9), Inches(4.5), WHT, line=LGT)
        rc(s, x, Inches(2.0), Inches(2.9), Inches(0.8), c)
        tx(s, x, Inches(2.0), Inches(2.9), Inches(0.8), code_n, sz=36, c=WHT, b=True, al=PP_ALIGN.CENTER, an=MSO_ANCHOR.MIDDLE)
        tx(s, x + Inches(0.2), Inches(3.0), Inches(2.5), Inches(0.5), t, sz=22, c=DARK, b=True)
        tx(s, x + Inches(0.2), Inches(3.5), Inches(2.5), Inches(0.4), en, sz=12, c=GRY)
        tx(s, x + Inches(0.2), Inches(4.0), Inches(2.5), Inches(0.5), pct, sz=18, c=c, b=True)
        tx(s, x + Inches(0.2), Inches(4.7), Inches(2.5), Inches(0.8), desc, sz=11, c=TXT)
    ftr(s)
    note(s, "【2.2 4R 循环总览】4R 是工作坊质量框架。R1 回顾、 R2 现实、 R3 共创、 R4 行动。R1 占 10-15%，R2 占 25-30%，R3 占 30-35%，R4 占 25-30%。顺序固定，时间占比根据内容属性调整。")
'''

# Generic R-detail page template
def make_r_page(num, name, en, color_name, focus, qs, errs):
    errs_str = '\\n'.join([f'x {e}' for e in errs])
    qs_str = '\\n'.join([f'Q{i+1} {q}' for i, q in enumerate(qs)])
    return f'''def P{num}():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, {num}, "第二章 · 流程规划", "2.2 · {name} · {en}")
    rc(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.4), {color_name})
    tx(s, Inches(0.8), Inches(1.4), Inches(11.7), Inches(0.3), "{name} · 关键：{focus}", sz=18, c=WHT, b=True)
    rc(s, Inches(0.6), Inches(2.0), Inches(6.0), Inches(5.0), WHT, line=LGT)
    rc(s, Inches(0.6), Inches(2.0), Inches(6.0), Inches(0.5), {color_name})
    tx(s, Inches(0.8), Inches(2.0), Inches(5.6), Inches(0.5), "{name} 的核心问题", sz=14, c=WHT, b=True, an=MSO_ANCHOR.MIDDLE)
'''

# P22: R1 details
P22 = '''def P22():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 22, "第二章 · 流程规划", "2.2 · R1 回顾 · Recall")
    rc(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.4), RED)
    tx(s, Inches(0.8), Inches(1.4), Inches(11.7), Inches(0.3), "R1 回顾 · 关键：重新激活学员记忆", sz=18, c=WHT, b=True)
    rc(s, Inches(0.6), Inches(2.0), Inches(6.0), Inches(5.0), WHT, line=LGT)
    rc(s, Inches(0.6), Inches(2.0), Inches(6.0), Inches(0.5), RED)
    tx(s, Inches(0.8), Inches(2.0), Inches(5.6), Inches(0.5), "R1 的 3 个核心问题", sz=14, c=WHT, b=True, an=MSO_ANCHOR.MIDDLE)
    qs = ["您现在还记得上次课的哪些内容？", "上次课哪个点对您印象最深？", "上次课后您做了什么？"]
    for i, q in enumerate(qs):
        y = Inches(2.7 + i * 1.3)
        rc(s, Inches(0.8), y, Inches(5.6), Inches(1.1), LBG, line=LGT)
        tx(s, Inches(1.0), y + Inches(0.2), Inches(0.5), Inches(0.5), f"Q{i+1}", sz=18, c=RED, b=True)
        tx(s, Inches(1.7), y + Inches(0.2), Inches(4.5), Inches(0.8), q, sz=12, c=TXT)
    rc(s, Inches(6.8), Inches(2.0), Inches(5.9), Inches(5.0), WHT, line=LGT)
    rc(s, Inches(6.8), Inches(2.0), Inches(5.9), Inches(0.5), DARK)
    tx(s, Inches(7.0), Inches(2.0), Inches(5.5), Inches(0.5), "R1 常见错误", sz=14, c=WHT, b=True, an=MSO_ANCHOR.MIDDLE)
    errs = ["讲师单方面回顾，学员沉默", "回顾时间超过 30 分钟", "回顾内容跟今天的工作坊无关", "回顾是知识点复述，没有激活"]
    for i, e in enumerate(errs):
        y = Inches(2.7 + i * 1.0)
        tx(s, Inches(7.0), y, Inches(5.5), Inches(0.9), f"x {e}", sz=12, c=RED)
    ftr(s)
    note(s, "【2.2 R1 回顾】R1 关键：重新激活学员记忆。3 个核心问题。常见错误：讲师单方面回顾、时间超 30 分钟、内容跟工作坊无关、是知识点复述没激活。")
'''

P23 = '''def P23():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 23, "第二章 · 流程规划", "2.2 · R2 现实 · Reality")
    rc(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.4), GREEN)
    tx(s, Inches(0.8), Inches(1.4), Inches(11.7), Inches(0.3), "R2 现实 · 关键：让学员回到真实工作情境", sz=18, c=WHT, b=True)
    rc(s, Inches(0.6), Inches(2.0), Inches(6.0), Inches(5.0), WHT, line=LGT)
    rc(s, Inches(0.6), Inches(2.0), Inches(6.0), Inches(0.5), GREEN)
    tx(s, Inches(0.8), Inches(2.0), Inches(5.6), Inches(0.5), "R2 的核心问题", sz=14, c=WHT, b=True, an=MSO_ANCHOR.MIDDLE)
    qs = ["上次课后，您在工作中用到了什么？", "您遇到的具体困难是什么？", "您是用什么方法解决的？"]
    for i, q in enumerate(qs):
        y = Inches(2.7 + i * 1.3)
        rc(s, Inches(0.8), y, Inches(5.6), Inches(1.1), LBG, line=LGT)
        tx(s, Inches(1.0), y + Inches(0.2), Inches(0.5), Inches(0.5), f"Q{i+1}", sz=18, c=GREEN, b=True)
        tx(s, Inches(1.7), y + Inches(0.2), Inches(4.5), Inches(0.8), q, sz=12, c=TXT)
    rc(s, Inches(6.8), Inches(2.0), Inches(5.9), Inches(5.0), WHT, line=LGT)
    rc(s, Inches(6.8), Inches(2.0), Inches(5.9), Inches(0.5), DARK)
    tx(s, Inches(7.0), Inches(2.0), Inches(5.5), Inches(0.5), "R2 的关键：具体细节", sz=14, c=WHT, b=True, an=MSO_ANCHOR.MIDDLE)
    points = ["时间：上个月 3 号下午", "场景：与某客户的视频会议", "动作：我先说了 X，然后客户说 Y", "结果：客户同意试用"]
    for i, p in enumerate(points):
        y = Inches(2.7 + i * 1.0)
        tx(s, Inches(7.0), y, Inches(5.5), Inches(0.9), f"v {p}", sz=12, c=GREEN)
    ftr(s)
    note(s, "【2.2 R2 现实】R2 关键：让学员回到真实工作情境。3 个核心问题。R2 的关键是具体细节：时间、场景、动作、结果。")
'''

P24 = '''def P24():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 24, "第二章 · 流程规划", "2.2 · R2 现实 · 静远案例")
    rc(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.4), GREEN)
    tx(s, Inches(0.8), Inches(1.4), Inches(11.7), Inches(0.3), "R2 现实 · 静远案例", sz=18, c=WHT, b=True)
    rc(s, Inches(0.6), Inches(2.0), Inches(12.1), Inches(5.0), WHT, line=LGT)
    rc(s, Inches(0.6), Inches(2.0), Inches(12.1), Inches(0.5), GREEN)
    tx(s, Inches(0.8), Inches(2.0), Inches(11.7), Inches(0.5), "R2 设计示范：让静远分享一个真实工作情境", sz=14, c=WHT, b=True, an=MSO_ANCHOR.MIDDLE)
    items = [
        ("Q1", "上次课后您用到了什么？", "我试用了 4R 循环来设计一场客户培训", GREEN),
        ("Q2", "您遇到了什么具体困难？", "客户参与度不高，大部分时间沉默", GREEN),
        ("Q3", "您当时是怎么解决的？", "我没找到好办法，最后变成了我讲他们听", GREEN),
        ("Q4", "具体讲讲那个沉默的场景？", "我做了 5 分钟引导后没人说话", GREEN),
    ]
    for i, (q, qs, ans, c) in enumerate(items):
        y = Inches(2.7 + i * 1.05)
        rc(s, Inches(0.8), y, Inches(11.7), Inches(0.95), LBG, line=LGT)
        rc(s, Inches(0.8), y, Inches(0.15), Inches(0.95), c)
        tx(s, Inches(1.0), y + Inches(0.15), Inches(0.5), Inches(0.4), q, sz=14, c=c, b=True)
        tx(s, Inches(1.6), y + Inches(0.15), Inches(4.5), Inches(0.4), qs, sz=11, c=DARK, b=True)
        tx(s, Inches(6.3), y + Inches(0.15), Inches(6.0), Inches(0.6), "答: " + ans, sz=11, c=TXT)
    ftr(s)
    note(s, "【2.2 R2 静远案例】R2 设计示范。Q1 上次课后您用到了什么。Q2 您遇到了什么具体困难。Q3 您当时是怎么解决的。Q4 具体讲讲那个沉默的场景。R2 的关键是深挖到具体细节。")
'''

P25 = '''def P25():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 25, "第二章 · 流程规划", "2.2 · R3 共创 · Reimagine")
    rc(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.4), GOLD)
    tx(s, Inches(0.8), Inches(1.4), Inches(11.7), Inches(0.3), "R3 共创 · 关键：群体智慧共创方案", sz=18, c=WHT, b=True)
    rc(s, Inches(0.6), Inches(2.0), Inches(6.0), Inches(5.0), WHT, line=LGT)
    rc(s, Inches(0.6), Inches(2.0), Inches(6.0), Inches(0.5), GOLD)
    tx(s, Inches(0.8), Inches(2.0), Inches(5.6), Inches(0.5), "R3 的 4 步流程", sz=14, c=WHT, b=True, an=MSO_ANCHOR.MIDDLE)
    steps = [
        ("1", "独立思考", "3 分钟", "每人写 3 个可能的方法"),
        ("2", "小组分享", "10 分钟", "4 人一组，轮流分享"),
        ("3", "共同提炼", "10 分钟", "把 12 个方法合并成 3 个最佳"),
        ("4", "全班展示", "10 分钟", "每组 1 位代表汇报"),
    ]
    for i, (n, t, time, desc) in enumerate(steps):
        y = Inches(2.7 + i * 1.0)
        rc(s, Inches(0.8), y, Inches(5.6), Inches(0.9), LBG, line=LGT)
        rc(s, Inches(0.8), y, Inches(0.15), Inches(0.9), GOLD)
        tx(s, Inches(1.0), y + Inches(0.15), Inches(0.5), Inches(0.4), n, sz=18, c=GOLD, b=True)
        tx(s, Inches(1.6), y + Inches(0.15), Inches(2.0), Inches(0.4), t, sz=12, c=DARK, b=True)
        tx(s, Inches(3.7), y + Inches(0.15), Inches(2.6), Inches(0.4), time, sz=10, c=GOLD)
    rc(s, Inches(6.8), Inches(2.0), Inches(5.9), Inches(5.0), WHT, line=LGT)
    rc(s, Inches(6.8), Inches(2.0), Inches(5.9), Inches(0.5), DARK)
    tx(s, Inches(7.0), Inches(2.0), Inches(5.5), Inches(0.5), "R3 的 3 个关键", sz=14, c=WHT, b=True, an=MSO_ANCHOR.MIDDLE)
    points = [
        "先独立思考，再小组讨论",
        "鼓励学员之间互教",
        "讲师做引导者，不做答案提供者",
    ]
    for i, p in enumerate(points):
        y = Inches(2.7 + i * 1.4)
        tx(s, Inches(7.0), y, Inches(5.5), Inches(1.2), f"v {p}", sz=12, c=GOLD, b=True)
    ftr(s)
    note(s, "【2.2 R3 共创】R3 关键：群体智慧共创方案。4 步流程：独立思考 3 分钟 / 小组分享 10 分钟 / 共同提炼 10 分钟 / 全班展示 10 分钟。3 个关键：先独立再小组 / 鼓励互教 / 讲师做引导者不做答案提供者。")
'''

P26 = '''def P26():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 26, "第二章 · 流程规划", "2.2 · R4 行动 · Resolve")
    rc(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.4), DARK)
    tx(s, Inches(0.8), Inches(1.4), Inches(11.7), Inches(0.3), "R4 行动 · 关键：具体可执行的实践承诺", sz=18, c=WHT, b=True)
    rc(s, Inches(0.6), Inches(2.0), Inches(6.0), Inches(5.0), WHT, line=LGT)
    rc(s, Inches(0.6), Inches(2.0), Inches(6.0), Inches(0.5), DARK)
    tx(s, Inches(0.8), Inches(2.0), Inches(5.6), Inches(0.5), "R4 的承诺三要素", sz=14, c=WHT, b=True, an=MSO_ANCHOR.MIDDLE)
    items = [
        ("场景", "下周我要在什么场景下用？", "在周三的部门例会"),
        ("动作", "具体做什么？", "用 4R 循环开场"),
        ("指标", "做到什么程度算成功？", "至少 3 位同事参与讨论"),
    ]
    for i, (k, q, ans) in enumerate(items):
        y = Inches(2.7 + i * 1.4)
        rc(s, Inches(0.8), y, Inches(5.6), Inches(1.2), LBG, line=LGT)
        tx(s, Inches(1.0), y + Inches(0.15), Inches(1.5), Inches(0.4), k, sz=14, c=DARK, b=True)
        tx(s, Inches(2.6), y + Inches(0.15), Inches(3.7), Inches(0.4), q, sz=10, c=GRY)
        tx(s, Inches(1.0), y + Inches(0.55), Inches(5.3), Inches(0.5), ans, sz=12, c=TXT, b=True)
    rc(s, Inches(6.8), Inches(2.0), Inches(5.9), Inches(5.0), WHT, line=LGT)
    rc(s, Inches(6.8), Inches(2.0), Inches(5.9), Inches(0.5), RED)
    tx(s, Inches(7.0), Inches(2.0), Inches(5.5), Inches(0.5), "R4 失败模式", sz=14, c=WHT, b=True, an=MSO_ANCHOR.MIDDLE)
    bad = ["我会试一下（太模糊）", "我想做得更好（没场景）", "我尽量（没指标）"]
    for i, b in enumerate(bad):
        y = Inches(2.7 + i * 1.4)
        tx(s, Inches(7.0), y, Inches(5.5), Inches(1.2), f"x {b}", sz=12, c=RED)
    ftr(s)
    note(s, "【2.2 R4 行动】R4 关键：具体可执行的实践承诺。三要素：场景、动作、指标。失败模式：太模糊（我会试一下）、没场景（我想做得更好）、没指标（我尽量）。")
'''

# Pages 27-130 - I'll write a simpler generator for these
# Use compact pages with similar structure

# 2.3 不同内容属性 - P27, P28
P27 = '''def P27():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 27, "第二章 · 流程规划", "2.3 · 不同内容属性的 4R 差异")
    tx(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.4), "4R 顺序固定，时间占比根据内容属性调整", sz=14, c=DARK, b=True)
    rows = [
        ("内容属性", "重点 R", "设计要点", "静远案例"),
        ("知识性 (知道)", "R1、R2", "帮助学员在真实情境识别理解", "概念是什么？为什么这样设计？"),
        ("技能性 (会用)", "R3、R4", "深度讨论技能应用难点", "X 场景具体怎么用？"),
        ("态度性 (愿意)", "R2、R3", "真实情境触发情感共鸣", "那时让您特别沮丧/触动的是什么？"),
    ]
    rh = Inches(0.7)
    for r, row in enumerate(rows):
        y = Inches(2.0 + r * 1.0)
        is_h = (r == 0)
        bg_c = DARK if is_h else WHT
        txt_c = WHT if is_h else TXT
        rc(s, Inches(0.6), y, Inches(12.1), rh, bg_c, line=LGT)
        x = Inches(0.8)
        widths = [Inches(2.5), Inches(2.0), Inches(4.0), Inches(3.6)]
        for j, cell in enumerate(row):
            sz = 13 if is_h else 12
            tx(s, x, y + Inches(0.15), widths[j], Inches(0.5), cell, sz=sz, c=txt_c, b=is_h)
            x = Inches(x.inches + widths[j].inches)
    ftr(s)
    note(s, "【2.3 不同内容属性的 4R 差异】知识性重点 R1 R2；技能性重点 R3 R4；态度性重点 R2 R3。4R 顺序固定，时间占比根据内容属性调整。静远案例：知识性问概念是什么；技能性问 X 场景怎么用；态度性问让您特别沮丧的是什么。")
'''

P28 = '''def P28():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 28, "第二章 · 流程规划", "2.3 · 内容属性识别 · 4 个判断题")
    rc(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.4), GOLD)
    tx(s, Inches(0.8), Inches(1.4), Inches(11.7), Inches(0.3), "4 个判断题识别内容属性", sz=18, c=WHT, b=True)
    items = [
        ("Q1", "学员学完应该能解释某个概念？", "是 -> 知识性", RED),
        ("Q2", "学员学完应该能在 X 场景做 Y 事？", "是 -> 技能性", GREEN),
        ("Q3", "学员学完应该改变对 Z 的看法/态度？", "是 -> 态度性", GOLD),
        ("Q4", "Q1/Q2/Q3 中哪一个最关键？", "最关键的属性决定 4R 占比", DARK),
    ]
    for i, (q, qs, ans, c) in enumerate(items):
        y = Inches(2.0 + i * 1.1)
        rc(s, Inches(0.6), y, Inches(12.1), Inches(1.0), WHT, line=LGT)
        rc(s, Inches(0.6), y, Inches(0.15), Inches(1.0), c)
        tx(s, Inches(0.9), y + Inches(0.2), Inches(0.6), Inches(0.5), q, sz=18, c=c, b=True)
        tx(s, Inches(1.7), y + Inches(0.2), Inches(7.0), Inches(0.5), qs, sz=12, c=TXT)
        tx(s, Inches(8.8), y + Inches(0.2), Inches(3.7), Inches(0.5), ans, sz=12, c=c, b=True)
    ftr(s)
    note(s, "【2.3 4 个判断题】Q1 学员学完应能解释概念 -> 知识性。Q2 学员学完应能在 X 场景做 Y 事 -> 技能性。Q3 学员学完应改变对 Z 的看法/态度 -> 态度性。Q4 Q1/Q2/Q3 哪个最关键。最关键的属性决定 4R 占比。")
'''

# ============== 2.4 Activity 2A ==============
P29 = '''def P29():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 29, "第二章 · 流程规划", "2.4 · Activity 2A 实战设计")
    rc(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.4), DARK)
    tx(s, Inches(0.8), Inches(1.4), Inches(11.7), Inches(0.3), "Activity 2A · 完整 4R 设计", sz=18, c=WHT, b=True)
    rc(s, Inches(0.6), Inches(2.0), Inches(12.1), Inches(5.0), WHT, line=LGT)
    rc(s, Inches(0.6), Inches(2.0), Inches(12.1), Inches(0.5), DARK)
    tx(s, Inches(0.8), Inches(2.0), Inches(11.7), Inches(0.5), "练习 60 分钟 · 4-5 人一组", sz=14, c=WHT, b=True, an=MSO_ANCHOR.MIDDLE)
    steps = [
        ("步骤 1", "10 分钟", "完成三维分析", RED),
        ("步骤 2", "10 分钟", "识别内容属性，决定 4R 占比", GREEN),
        ("步骤 3", "20 分钟", "为每个 R 设计 3 个核心问题", GOLD),
        ("步骤 4", "10 分钟", "组内互评 + 调整", DARK),
        ("步骤 5", "10 分钟", "每组 1 位代表汇报 2 分钟", RED),
    ]
    rh = Inches(0.78)
    for i, (n, time, task, c) in enumerate(steps):
        y = Inches(2.7 + i * 0.85)
        rc(s, Inches(0.8), y, Inches(11.7), rh, LBG, line=LGT)
        rc(s, Inches(0.8), y, Inches(0.15), rh, c)
        tx(s, Inches(1.0), y + Inches(0.12), Inches(1.5), Inches(0.4), n, sz=14, c=DARK, b=True)
        tx(s, Inches(2.5), y + Inches(0.12), Inches(1.5), Inches(0.4), time, sz=12, c=c, b=True)
        tx(s, Inches(4.0), y + Inches(0.12), Inches(8.3), Inches(0.4), task, sz=12, c=TXT)
    ftr(s)
    note(s, "【Activity 2A 完整 4R 设计】60 分钟 4-5 人一组。步骤 1（10 分钟）完成三维分析。步骤 2（10 分钟）识别内容属性决定 4R 占比。步骤 3（20 分钟）为每个 R 设计 3 个核心问题。步骤 4（10 分钟）组内互评。步骤 5（10 分钟）每组 1 位代表汇报 2 分钟。")
'''

P30 = '''def P30():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 30, "第二章 · 流程规划", "2.4 · Activity 2A 评分标准")
    rc(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.4), GOLD)
    tx(s, Inches(0.8), Inches(1.4), Inches(11.7), Inches(0.3), "Activity 2A 评分标准", sz=18, c=WHT, b=True)
    items = [
        ("维度一", "三维分析是否完整准确", "40 分", "业务/课程/学员三维是否清晰", RED),
        ("维度二", "内容属性判断是否准确", "20 分", "知识性/技能性/态度性", GREEN),
        ("维度三", "4R 占比是否合理", "20 分", "重点 R 与属性匹配", GOLD),
        ("维度四", "核心问题是否好问题", "20 分", "开放式/具体/学员中心/多元", DARK),
    ]
    rh = Inches(1.0)
    for i, (n, t, pts, desc, c) in enumerate(items):
        y = Inches(2.0 + i * 1.15)
        rc(s, Inches(0.6), y, Inches(12.1), rh, WHT, line=LGT)
        rc(s, Inches(0.6), y, Inches(0.15), rh, c)
        tx(s, Inches(0.9), y + Inches(0.2), Inches(2.0), Inches(0.5), n, sz=16, c=c, b=True)
        tx(s, Inches(3.0), y + Inches(0.2), Inches(4.5), Inches(0.5), t, sz=13, c=DARK, b=True)
        tx(s, Inches(7.5), y + Inches(0.2), Inches(1.5), Inches(0.5), pts, sz=18, c=c, b=True)
        tx(s, Inches(3.0), y + Inches(0.6), Inches(9.0), Inches(0.4), desc, sz=11, c=GRY)
    ftr(s)
    note(s, "【Activity 2A 评分标准】维度一三维分析 40 分。维度二内容属性判断 20 分。维度三 4R 占比 20 分。维度四核心问题质量 20 分。")
'''

# Combine all P21-P30 first
all_pages = '\n\n'.join([P21, P22, P23, P24, P25, P26, P27, P28, P29, P30])

# Now write a single file with all P21-P130
# To avoid corruption, write all pages as separate text files first
pages_dir = 'D:/CC/temp/pages_clean'
os.makedirs(pages_dir, exist_ok=True)

for i, code in enumerate([P21, P22, P23, P24, P25, P26, P27, P28, P29, P30], 21):
    with open(f'{pages_dir}/P{i:03d}.py', 'w', encoding='utf-8') as f:
        f.write(code)

print(f'Wrote P21-P30 to {pages_dir}/')
