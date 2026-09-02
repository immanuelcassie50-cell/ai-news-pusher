# -*- coding: utf-8 -*-
"""Rebuild entire file: P14-P20 (rewrite cleanly) + P21-P130 (from append scripts)."""
import re
import os
import ast

# Define P14-P20 with clean, simple Python (no quote issues)
# These are the chapter 2 cover and intro pages

P14_TO_P20 = r'''
# ============== 第二章 · 流程规划 ==============
def P14():
    s = prs.slides.add_slide(BLANK); bg(s); rc(s, 0, 0, W, H, DARK)
    tx(s, Inches(0.6), Inches(2.0), Inches(8), Inches(0.5), "CHAPTER 02", sz=18, c=GREEN, b=True)
    tx(s, Inches(0.6), Inches(2.6), Inches(10), Inches(1.4), "流程规划", sz=72, c=WHT, b=True)
    tx(s, Inches(0.6), Inches(4.2), Inches(10), Inches(0.6), "如何用 4R 循环设计一场有效的落地工作坊？", sz=24, c=LGT)
    rc(s, Inches(0.6), Inches(5.0), Inches(2), Pt(3), GREEN)
    tx(s, Inches(0.6), Inches(5.2), Inches(8), Inches(0.4), "120 min · 核心技术章节", sz=14, c=LGT)
    tx(s, Inches(0.6), Inches(5.7), Inches(8), Inches(0.4), "2.1 三维分析框架  ·  2.2 4R 循环详解", sz=12, c=LGT)
    tx(s, Inches(0.6), Inches(6.05), Inches(8), Inches(0.4), "2.3 不同内容属性  ·  2.4 Activity 2A 实战设计", sz=12, c=LGT)
    tx(s, Inches(9.5), Inches(4.5), Inches(3.5), Inches(2.5), "02", sz=200, c=GREEN, b=True, al=PP_ALIGN.RIGHT)
    note(s, "【第二章：流程规划】120 分钟。核心技术章节。\n\n学习：2.1 三维分析框架、2.2 4R 循环详解、2.3 不同内容属性的 4R 差异、2.4 Activity 2A 实战设计。\n\n第二章结束的时候，您会完成自己工作坊的完整 4R 设计草案。")
print("part2 starter")


def P15():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 15, "第二章 · 流程规划", "2.1 · 三维分析框架")
    rc(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.4), DARK)
    tx(s, Inches(0.8), Inches(1.4), Inches(11.7), Inches(0.3), "为什么先做三维分析？", sz=18, c=WHT, b=True)
    tx(s, Inches(0.8), Inches(2.0), Inches(11.7), Inches(0.5), "工作坊设计 80% 的失败，源于没搞清楚三个维度：", sz=14, c=DARK)
    dims = [
        ("维度一", "业务维度", "业务管理者希望 30 天后学员能做什么？", RED),
        ("维度二", "课程维度", "上次课最薄弱的 2 个模块是？", GREEN),
        ("维度三", "学员维度", "学员的经验/特点/真实挑战是什么？", GOLD),
    ]
    rh = Inches(1.3)
    for i, (n, t, desc, c) in enumerate(dims):
        y = Inches(2.8 + i * 1.4)
        rc(s, Inches(0.6), y, Inches(12.1), rh, WHT, line=LGT)
        rc(s, Inches(0.6), y, Inches(0.15), rh, c)
        tx(s, Inches(0.9), y + Inches(0.2), Inches(2.5), Inches(0.5), n, sz=14, c=c, b=True)
        tx(s, Inches(3.5), y + Inches(0.2), Inches(3.0), Inches(0.5), t, sz=18, c=DARK, b=True)
        tx(s, Inches(6.7), y + Inches(0.2), Inches(5.8), Inches(0.8), desc, sz=12, c=TXT)
    ftr(s)
    note(s, "【2.1 三维分析框架】\n\n讲师话术 2.1.1：\n为什么先做三维分析？\n\n工作坊设计 80% 的失败，源于没搞清楚三个维度。\n\n维度一：业务维度。业务管理者希望 30 天后学员能做什么？\n维度二：课程维度。上次课最薄弱的 2 个模块是？\n维度三：学员维度。学员的经验/特点/真实挑战是什么？\n\n三维分析的目的是把工作坊设计从讲师的主观判断变成业务驱动的设计。")


def P16():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 16, "第二章 · 流程规划", "2.1 · 维度一：业务维度")
    rc(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.4), RED)
    tx(s, Inches(0.8), Inches(1.4), Inches(11.7), Inches(0.3), "维度一：业务维度", sz=18, c=WHT, b=True)
    tx(s, Inches(0.8), Inches(2.0), Inches(11.7), Inches(0.5),
       "业务管理者希望 30 天后学员能做什么？", sz=20, c=DARK, b=True)
    rc(s, Inches(0.6), Inches(2.8), Inches(6.0), Inches(4.5), WHT, line=LGT)
    rc(s, Inches(0.6), Inches(2.8), Inches(6.0), Inches(0.4), RED)
    tx(s, Inches(0.8), Inches(2.8), Inches(5.6), Inches(0.4), "好答案", sz=14, c=WHT, b=True, an=MSO_ANCHOR.MIDDLE)
    good = [
        "30 天后销售业绩提升 15%",
        "30 天后客服平均处理时间缩短 30%",
        "30 天后新经理留存率从 70% 提升到 90%",
        "30 天后 NPS 提升 10 个点",
    ]
    for i, g in enumerate(good):
        y = Inches(3.4 + i * 0.5)
        tx(s, Inches(0.8), y, Inches(5.6), Inches(0.4), "v " + g, sz=13, c=RED, b=True)
    rc(s, Inches(6.8), Inches(2.8), Inches(6.0), Inches(4.5), WHT, line=LGT)
    rc(s, Inches(6.8), Inches(2.8), Inches(6.0), Inches(0.4), GRY)
    tx(s, Inches(7.0), Inches(2.8), Inches(5.6), Inches(0.4), "坏答案", sz=14, c=WHT, b=True, an=MSO_ANCHOR.MIDDLE)
    bad = [
        "学员满意度 4.5/5",
        "学员能复述课程内容",
        "学员感觉学到东西了",
        "课堂气氛活跃",
    ]
    for i, b in enumerate(bad):
        y = Inches(3.4 + i * 0.5)
        tx(s, Inches(7.0), y, Inches(5.6), Inches(0.4), "x " + b, sz=13, c=GRY)
    ftr(s)
    note(s, "【2.1 维度一：业务维度】\n\n业务维度的答案决定了工作坊的全部基调。\n\n好答案：可量化的业务结果——30 天后销售业绩提升 15%。\n\n坏答案：学员满意度 4.5/5（这是评价，不是结果）。\n\n注意 80% 的内训师会回答"学员满意度 4.5/5"——这是错的。\n业务方买单的原因，是可量化的业务结果。")


def P17():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 17, "第二章 · 流程规划", "2.1 · 维度二：课程维度")
    rc(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.4), GREEN)
    tx(s, Inches(0.8), Inches(1.4), Inches(11.7), Inches(0.3), "维度二：课程维度", sz=18, c=WHT, b=True)
    tx(s, Inches(0.8), Inches(2.0), Inches(11.7), Inches(0.5),
       "上次课最薄弱的 2 个模块是？", sz=20, c=DARK, b=True)
    sections = [
        ("1", "列出上次课的所有模块（5-10 个）", "例：销售 5 步法、异议处理、客户关系、产品知识、报价技巧"),
        ("2", "用 3 个问题筛出最薄弱模块", "Q1: 学员在工作中最容易出错的？ Q2: 业务方抱怨最多的？ Q3: 学员主动问最多的？"),
        ("3", "把 2 个最薄弱模块作为工作坊重点", "其他模块在工作坊中略过"),
    ]
    rh = Inches(1.3)
    for i, (n, t, desc) in enumerate(sections):
        y = Inches(2.8 + i * 1.4)
        rc(s, Inches(0.6), y, Inches(12.1), rh, WHT, line=LGT)
        rc(s, Inches(0.6), y, Inches(0.15), rh, GREEN)
        tx(s, Inches(0.9), y + Inches(0.2), Inches(0.6), Inches(0.5), n, sz=24, c=GREEN, b=True)
        tx(s, Inches(1.7), y + Inches(0.2), Inches(4.0), Inches(0.5), t, sz=14, c=DARK, b=True)
        tx(s, Inches(5.8), y + Inches(0.2), Inches(6.8), Inches(0.8), desc, sz=11, c=TXT)
    ftr(s)
    note(s, "【2.1 维度二：课程维度】\n\n课程维度的目的是确定工作坊的重点。\n\n3 个步骤：\n1. 列出上次课的所有模块\n2. 用 3 个问题筛出最薄弱模块（学员最容易出错 / 业务方抱怨最多 / 学员主动问最多）\n3. 把 2 个最薄弱模块作为工作坊重点\n\n工作坊不可能覆盖上次课的所有模块——只覆盖最薄弱的 2 个。")


def P18():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 18, "第二章 · 流程规划", "2.1 · 维度三：学员维度")
    rc(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.4), GOLD)
    tx(s, Inches(0.8), Inches(1.4), Inches(11.7), Inches(0.3), "维度三：学员维度", sz=18, c=WHT, b=True)
    tx(s, Inches(0.8), Inches(2.0), Inches(11.7), Inches(0.5),
       "学员的经验/特点/真实挑战是什么？", sz=20, c=DARK, b=True)
    aspects = [
        ("经验", "学员工作年限 / 是否独立处理过相关场景 / 是否接受过类似培训", RED),
        ("特点", "年龄 / 学历 / 岗位 / 部门 / 工作风格", GREEN),
        ("挑战", "学员在工作中遇到的具体困难 / 想解决的问题 / 老板的期望", GOLD),
    ]
    rh = Inches(1.3)
    for i, (t, desc, c) in enumerate(aspects):
        y = Inches(2.8 + i * 1.4)
        rc(s, Inches(0.6), y, Inches(12.1), rh, WHT, line=LGT)
        rc(s, Inches(0.6), y, Inches(0.15), rh, c)
        tx(s, Inches(0.9), y + Inches(0.2), Inches(2.5), Inches(0.5), t, sz=18, c=c, b=True)
        tx(s, Inches(3.5), y + Inches(0.2), Inches(9.0), Inches(0.8), desc, sz=12, c=TXT)
    ftr(s)
    note(s, "【2.1 维度三：学员维度】\n\n学员维度的目的是理解学员的真实状态。\n\n3 个方面：\n- 经验：学员工作年限 / 是否独立处理过相关场景 / 是否接受过类似培训\n- 特点：年龄 / 学历 / 岗位 / 部门 / 工作风格\n- 挑战：学员在工作中遇到的具体困难 / 想解决的问题 / 老板的期望\n\n学员维度决定了 R2（现实）的分享质量——学员越愿意分享，R2 越成功。")


def P19():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 19, "第二章 · 流程规划", "2.1 · 三维分析 · 静远案例")
    rc(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.4), DARK)
    tx(s, Inches(0.8), Inches(1.4), Inches(11.7), Inches(0.3), "三维分析 · 静远案例", sz=18, c=WHT, b=True)
    rc(s, Inches(0.6), Inches(2.0), Inches(12.1), Inches(5.0), WHT, line=LGT)
    rows = [
        ("业务维度", "业务管理者希望 30 天后静远能用 4R 循环设计一场落地工作坊", RED),
        ("课程维度", "上次课的 8 个模块中，4R 循环和引导式提问最薄弱", GREEN),
        ("学员维度", "静远是销售出身，1-2 年工作经验，对理论熟悉但没引导过工作坊", GOLD),
    ]
    rh = Inches(1.4)
    for i, (t, desc, c) in enumerate(rows):
        y = Inches(2.3 + i * 1.5)
        rc(s, Inches(0.6), y, Inches(12.1), rh, LBG, line=LGT)
        rc(s, Inches(0.6), y, Inches(0.15), rh, c)
        tx(s, Inches(0.9), y + Inches(0.3), Inches(3.0), Inches(0.5), t, sz=18, c=DARK, b=True)
        tx(s, Inches(0.9), y + Inches(0.8), Inches(11.0), Inches(0.6), desc, sz=13, c=TXT)
    ftr(s)
    note(s, "【2.1 三维分析 · 静远案例】\n\n讲师话术 2.1.4：\n我们用静远的案例来演练三维分析——\n\n业务维度：业务管理者希望 30 天后静远能用 4R 循环设计一场落地工作坊。\n\n注意是"能设计"，不是"听过 4R"。这是行为目标。\n\n课程维度：上次课的 8 个模块中，4R 循环和引导式提问最薄弱。\n\n学员维度：静远是销售出身，1-2 年工作经验，对理论熟悉但没引导过工作坊。\n\n三维分析的目的：把工作坊设计从讲师的主观判断变成业务驱动的设计。")


def P20():
    s = prs.slides.add_slide(BLANK); bg(s)
    hdr(s, 20, "第二章 · 流程规划", "2.1 · Activity 2A 三维分析练习")
    rc(s, Inches(0.6), Inches(1.3), Inches(12.1), Inches(0.4), DARK)
    tx(s, Inches(0.8), Inches(1.4), Inches(11.7), Inches(0.3), "Activity 2A · 三维分析练习", sz=18, c=WHT, b=True)
    rc(s, Inches(0.6), Inches(2.0), Inches(12.1), Inches(5.0), WHT, line=LGT)
    rc(s, Inches(0.6), Inches(2.0), Inches(12.1), Inches(0.5), DARK)
    tx(s, Inches(0.8), Inches(2.0), Inches(11.7), Inches(0.5), "练习 30 分钟 · 4-5 人一组", sz=14, c=WHT, b=True, an=MSO_ANCHOR.MIDDLE)
    steps = [
        ("步骤 1", "5 分钟", "选 1 个您要设计的工作坊场景", RED),
        ("步骤 2", "10 分钟", "组内每人完成三维分析（业务/课程/学员）", GREEN),
        ("步骤 3", "10 分钟", "组内互评 + 调整", GOLD),
        ("步骤 4", "5 分钟", "每组 1 位代表汇报 1 分钟", RED),
    ]
    rh = Inches(0.85)
    for i, (n, time, task, c) in enumerate(steps):
        y = Inches(2.7 + i * 0.95)
        rc(s, Inches(0.8), y, Inches(11.7), rh, LBG, line=LGT)
        rc(s, Inches(0.8), y, Inches(0.15), rh, c)
        tx(s, Inches(1.0), y + Inches(0.15), Inches(1.5), Inches(0.5), n, sz=14, c=DARK, b=True)
        tx(s, Inches(2.5), y + Inches(0.15), Inches(1.5), Inches(0.5), time, sz=12, c=c, b=True)
        tx(s, Inches(4.0), y + Inches(0.15), Inches(8.3), Inches(0.5), task, sz=12, c=TXT)
    ftr(s)
    note(s, "【Activity 2A 三维分析练习】\n\n讲师话术 2.1.5：\n我们用 30 分钟做 Activity 2A——\n\n[逐条讲解]\n\n步骤 1（5 分钟）：选 1 个您要设计的工作坊场景\n步骤 2（10 分钟）：组内每人完成三维分析\n步骤 3（10 分钟）：组内互评 + 调整\n步骤 4（5 分钟）：每组 1 位代表汇报 1 分钟\n\n讲师话术 2.1.6：\n这个练习的目的是让您在自己场景里完成三维分析。\n\n请大家现在分组（4-5 人一组），开始练习。\n\n我会巡视每组，给您具体反馈。")
'''

# Read P21-P130 from append scripts
scripts_in_order = [
    '_append_part2.py',
    '_append2.py', '_append3.py', '_append4.py', '_append5.py',
    '_append6.py', '_append7.py', '_append8.py', '_append9.py',
    '_append10.py', '_append11.py', '_append12b.py',
    '_append13.py', '_append14.py', '_append15.py', '_append16.py',
]

def extract_code(script_path):
    with open(script_path, encoding='utf-8') as f:
        content = f.read()
    m = re.search(r"code = r'''(.*?)'''", content, re.DOTALL)
    return m.group(1) if m else ''

parts = [P14_TO_P20]
for script in scripts_in_order:
    if os.path.exists(script):
        code = extract_code(script)
        parts.append(code)

full = '\n'.join(parts)

# Now fix the doubled quotes: "X" -> "X" but NOT "X","X" -> "X"X"
# We need to handle the "" pattern that comes from the append scripts
def fix_quotes_in_tuples(text):
    """Fix ""X"" -> "X" specifically."""
    # Find "" followed by non-quote chars, then "" followed by separator
    # This handles: , ""X"", sz= -> , "X", sz=
    # Pattern: ""X"" where X contains no " (or contains properly escaped \")
    # In our case, the original was ""X"" (4 quotes) and the fix is "X" (2 quotes)
    result = []
    i = 0
    n = len(text)
    while i < n:
        if text[i] == '"' and i + 1 < n and text[i+1] == '"':
            # Check the context: was the previous char a quote-start (e.g., , or = or ()
            # and is the next char (after the "") a non-quote?
            # Skip one of the two quotes
            # Actually, let's be more careful: look for the pattern
            # ""...X..."" where the X is non-quote, and after the closing "" comes , or )
            # We need to find the matching closing ""
            j = i + 2
            while j < n - 1:
                if text[j] == '"' and text[j+1] == '"':
                    # Found potential closing ""
                    # Check what comes after
                    k = j + 2
                    while k < n and text[k] in ' \t':
                        k += 1
                    if k < n and text[k] in ',)':
                        # This is a valid ""X"" pattern - collapse to "X"
                        result.append('"')
                        result.append(text[i+2:j])
                        result.append('"')
                        i = j + 2
                        break
                    elif k < n and text[k] == '"':
                        # Another "" - keep looking
                        j += 1
                    else:
                        # Not a valid pattern
                        result.append('"')
                        i += 1
                        break
                else:
                    j += 1
            else:
                # No match found
                result.append('"')
                i += 1
        else:
            result.append(text[i])
            i += 1
    return ''.join(result)

fixed = fix_quotes_in_tuples(full)

# Verify
try:
    ast.parse(fixed)
    print('OK syntax')
    with open('gen_pptx_part2.py', 'w', encoding='utf-8') as f:
        f.write(fixed)
    print(f'Saved {len(fixed)} chars, {fixed.count(chr(10))} lines')
except SyntaxError as e:
    print(f'SyntaxError: {e}')
    src_lines = fixed.split('\n')
    if e.lineno:
        for i in range(max(0, e.lineno - 3), min(len(src_lines), e.lineno + 3)):
            print(f'  {i+1}: {src_lines[i]}')
