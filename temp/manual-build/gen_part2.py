"""
第二部分：开场模块 + 第三部分：Part 1 工作空间
"""
import sys
sys.path.insert(0, r'D:\CC\temp\manual-build')

from docx import Document
from docx.shared import Pt, RGBColor, Cm
from docx.enum.text import WD_ALIGN_PARAGRAPH
from doc_helpers import *


def build_part2_opening(doc):
    """第二部分：开场模块"""
    add_chapter_header(doc, '第二部分', '开场模块 · 八个失效场景',
                       'Opening · 从你的真实困境开始这一天的学习')
    add_p(doc, '', before=4, after=4)

    add_h2(doc, '1. 八个失效场景识别记录')
    add_p(doc, '讲师会发放 8 张场景卡。每张卡都是一个真实的、可能发生在你工作里的情境。', size=11, before=2, after=4, line=1.5)
    add_p(doc, '', before=2, after=2)
    add_p(doc, '请你做两件事：', size=11, bold=True, color=COLOR_PRIMARY, after=2)
    add_checkbox_line(doc, '标记你"经历过"的场景（卡号）')
    add_checkbox_line(doc, '标记你"最怕遇到"的场景（卡号）')
    add_p(doc, '', before=2, after=2)

    add_h3(doc, '8 个场景速览')
    add_p(doc, '', before=2, after=2)

    headers = ['卡号', '场景名', '经典/AI 时代', '一句话描述']
    rows = [
        ['1', '走过场', '经典', '把面谈当流程节点，员工感受到的是"被流程对待"而非"被认真对待"'],
        ['2', '争论评分', '经典', '评分被当成立场，员工捍卫"超出预期"，管理者捍卫"基本达成"'],
        ['3', '推了又推', '经典', '该谈的时候不谈，问题憋成炸弹，管理者把情绪带进面谈'],
        ['4', '只谈业绩', '经典', '只讲业绩不讲方式，"野路子"的问题被绕开'],
        ['5', '发展剩 5 分钟', '经典', '评分辩护挤掉了发展对话，员工只得到了一个书名'],
        ['6', 'AI 归因争议', 'AI 时代', '员工说"这个成果是 AI 帮我做的"，管理者没准备'],
        ['7', '方向迷失', 'AI 时代', '员工说"我不知道我在 AI 时代的价值"，管理者回避'],
        ['8', '产出与能力不匹配', 'AI 时代', '产出靠 AI 维持，能力在悄悄退化（漂移型）'],
    ]
    make_table(doc, headers, rows, col_widths=[1.2, 2.5, 2.3, 11.0], body_size=9.5, row_height=0.9)
    add_p(doc, '', before=2, after=2)
    add_callout(doc, 'AI 时代',
                '5 个经典场景 + 3 个 AI 时代新场景。3 个 AI 新场景归属于一个共同前提：归因清晰。这是你今天要建立的核心新能力。',
                style='ai')
    add_pagebreak(doc)

    add_h2(doc, '识别记录（继续）')
    add_p(doc, '', before=2, after=2)

    add_h3(doc, '我"经历过"的场景')
    add_p(doc, '把 8 张卡里你"经历过的"卡号写在下面。可以多选。', size=10.5, after=2)
    add_p(doc, '', before=2, after=2)
    add_p(doc, '卡号：__________、__________、__________、__________、__________',
          size=13, bold=True, color=COLOR_PRIMARY, after=2)
    add_p(doc, '', before=2, after=2)

    add_h3(doc, '我"最怕遇到"的场景')
    add_p(doc, '把 8 张卡里你"最害怕遇到"的卡号写在下面。可以多选。', size=10.5, after=2)
    add_p(doc, '', before=2, after=2)
    add_p(doc, '卡号：__________、__________、__________、__________、__________',
          size=13, bold=True, color=COLOR_PRIMARY, after=2)
    add_p(doc, '', before=2, after=2)

    add_callout(doc, '提示',
                '如果你"经历过的"和"最怕遇到的"是同一张卡——意味着你不仅遇到了，而且还没找到办法。这是今天你最值得带走的内容。',
                style='tip')
    add_p(doc, '', before=2, after=2)

    add_h3(doc, '我和小组伙伴的讨论')
    add_p(doc, '讲师会引导小组讨论。下面记录你听到的、最触动你的、或和你想法不一样的内容。',
          size=10.5, after=2, line=1.5)
    add_write_area(doc, lines=8, hint='可以是别人的一句洞察、你的反驳、你的共鸣')
    add_pagebreak(doc)

    add_h2(doc, '2. 真实背景记录')
    add_p(doc, '把场景落到你真实的工作上。', size=11, before=2, after=4, line=1.5)

    add_h3(doc, '选择你最想深入的一个场景卡')
    add_p(doc, '卡号：__________', size=13, bold=True, color=COLOR_PRIMARY, after=4)
    add_p(doc, '场景名称：__________________________________________', size=10.5, after=8)

    add_h3(doc, '真实背景：这件事在你工作里是怎么发生的')
    add_write_area(doc, lines=5, hint='时间、人物、具体情境——不要写"还没发生"，写已经发生的')
    add_p(doc, '', before=2, after=2)

    add_h3(doc, '当时最让你难受或最卡的是什么')
    add_write_area(doc, lines=4, hint='具体到那一个瞬间的感受或念头')
    add_p(doc, '', before=2, after=2)

    add_h3(doc, '当时你做了什么（事后看，可能后悔的）')
    add_write_area(doc, lines=4, hint='你的具体反应——回避、攻击、妥协、转移')
    add_p(doc, '', before=2, after=2)

    add_h3(doc, '如果你能回到那一刻，你最想改变什么')
    add_write_area(doc, lines=3, hint='用一句话写——具体到一句话')
    add_pagebreak(doc)

    add_h2(doc, '3. AI 时代三个新场景出现频率')
    add_p(doc, '在我的工作环境里，这三类新情境出现的频率：', size=11, before=2, after=4, line=1.5)

    add_section_banner(doc, '卡 6：AI 归因争议', color=COLOR_PURPLE)
    add_p(doc, '员工在面谈里说"这个成果是 AI 帮我做的，你这样评不公平"——或类似归因争议。',
          size=10, color=COLOR_MUTED, italic=True, after=2)
    add_checkbox_line(doc, '经常出现，已经头疼')
    add_checkbox_line(doc, '偶尔出现，还没找到方法')
    add_checkbox_line(doc, '目前不多，但感觉要来了')
    add_checkbox_line(doc, '暂时没有，但今天想先有准备')
    add_p(doc, '我过去最印象深的一次：', size=10.5, bold=True, color=COLOR_PRIMARY, after=2)
    add_write_area(doc, lines=3)
    add_p(doc, '', before=2, after=2)

    add_section_banner(doc, '卡 7：方向迷失', color=COLOR_PURPLE)
    add_p(doc, '员工表达"我在 AI 时代感觉不知道自己的价值在哪里"——明显的方向感缺失或情绪低落。',
          size=10, color=COLOR_MUTED, italic=True, after=2)
    add_checkbox_line(doc, '经常出现，已经头疼')
    add_checkbox_line(doc, '偶尔出现，还没找到方法')
    add_checkbox_line(doc, '目前不多，但感觉要来了')
    add_checkbox_line(doc, '暂时没有，但今天想先有准备')
    add_p(doc, '我过去最印象深的一次：', size=10.5, bold=True, color=COLOR_PRIMARY, after=2)
    add_write_area(doc, lines=3)
    add_p(doc, '', before=2, after=2)

    add_section_banner(doc, '卡 8：产出与能力不匹配', color=COLOR_PURPLE)
    add_p(doc, '员工产出在 AI 辅助下维持高水平，但底层能力（独立判断、复杂问题分析）在悄悄退化。',
          size=10, color=COLOR_MUTED, italic=True, after=2)
    add_checkbox_line(doc, '经常出现，已经头疼')
    add_checkbox_line(doc, '偶尔出现，还没找到方法')
    add_checkbox_line(doc, '目前不多，但感觉要来了')
    add_checkbox_line(doc, '暂时没有，但今天想先有准备')
    add_p(doc, '我过去最印象深的一次：', size=10.5, bold=True, color=COLOR_PRIMARY, after=2)
    add_write_area(doc, lines=3)
    add_p(doc, '', before=2, after=2)

    add_callout(doc, 'AI 时代',
                '三类新场景的共同关键：管理者在面谈前需要做"归因预判"。带着模糊归因进入面谈，等于带着一颗定时炸弹进入面谈。',
                style='ai')
    add_pagebreak(doc)


def build_part3_part1(doc):
    """第三部分：Part 1 工作空间"""
    add_chapter_header(doc, '第三部分', 'Part 1：面谈的价值与四步面谈法',
                       'The Value of Dialogue & The 4-Step Interview Method')
    add_p(doc, '', before=4, after=4)

    # ---- 1. 面谈的真实价值 ----
    add_h2(doc, '1. 面谈的真实价值（我的笔记）')
    add_p(doc, '面谈对管理者真正的价值（不是 HR 的要求）：', size=11, bold=True, color=COLOR_PRIMARY, before=2, after=2)
    add_write_area(doc, lines=4, hint='用你自己的话写——不要复制讲师的话')
    add_p(doc, '', before=2, after=2)

    add_h3(doc, '4 个真实价值（讲师讲解后填空）')
    headers = ['价值', '我的理解', '我过去最被忽略的是哪一个']
    rows = [
        ['建立信任', '', ''],
        ['澄清事实', '', ''],
        ['识别发展', '', ''],
        ['共建方向', '', ''],
    ]
    make_table(doc, headers, rows, col_widths=[2.5, 8.0, 6.5], body_size=10, row_height=1.5)
    add_p(doc, '', before=4, after=2)

    # ---- 2. 五个前提条件 ----
    add_h2(doc, '2. 五个前提条件（必填）')
    add_p(doc, '做好面谈的 5 个前提条件：', size=11, before=2, after=2, line=1.5)
    add_p(doc, '', before=2, after=2)

    add_h4(doc, '前提 1：时机恰当')
    add_p(doc, '我对面谈时机的理解：', size=10.5, after=2)
    add_write_area(doc, lines=3, hint='什么时机是恰当的？什么时机是不恰当的？')
    add_p(doc, '', before=2, after=2)

    add_h4(doc, '前提 2：信息充分')
    add_p(doc, '我对面谈前准备的理解：', size=10.5, after=2)
    add_write_area(doc, lines=3, hint='面谈前你具体准备什么？')
    add_p(doc, '', before=2, after=2)

    add_h4(doc, '前提 3：心理准备')
    add_p(doc, '我的心理准备是……', size=10.5, after=2)
    add_write_area(doc, lines=3, hint='员工的心理准备是什么？管理者的心理准备是什么？')
    add_p(doc, '', before=2, after=2)

    add_h4(doc, '前提 4：关系基础')
    add_p(doc, '我对关系基础的理解：', size=10.5, after=2)
    add_write_area(doc, lines=3, hint='为什么"等面谈到了再谈关系"的管理者面谈难 10 倍？')
    add_p(doc, '', before=2, after=2)

    add_h4(doc, '前提 5（AI 时代新增）：归因清晰')
    add_p(doc, '我对"归因清晰"的理解：', size=10.5, bold=True, color=COLOR_PRIMARY, after=2)
    add_write_area(doc, lines=3, hint='为什么 AI 时代必须有这个前提？')
    add_p(doc, '', before=2, after=2)
    add_quote(doc, '归因清晰不是 AI 时代面谈里"加分的一项"，是"必须先有的一项"。没有它，后面的四步面谈法建在沙子上。')
    add_pagebreak(doc)

    # ---- 3. 四步面谈法 ----
    add_h2(doc, '3. 四步面谈法详解')
    add_p(doc, '四步不是 4 个独立的技巧，是 1 个连贯的对话流。', size=11, bold=True, color=COLOR_PRIMARY, before=2, after=2)
    add_p(doc, '跳步、急转弯、只走前两步就走完，是常见错误。', size=10, color=COLOR_MUTED, italic=True, after=4)
    add_p(doc, '', before=2, after=2)

    # 第一步
    add_section_banner(doc, '第一步 · 共看事实', color=COLOR_PRIMARY)
    add_p(doc, '含义：', size=11, bold=True, after=2)
    add_write_area(doc, lines=3, hint='共看事实是什么？不是"我讲你听"，是"我们一起回顾这个周期里发生了什么"')
    add_p(doc, '', before=2, after=2)
    add_p(doc, '关键转换：', size=11, bold=True, after=2)
    add_p(doc, '  · 从"我讲你听" → "你先讲我听"', size=10.5, after=2)
    add_p(doc, '  · 从"我准备的依据" → "我们一起拼出来的图景"', size=10.5, after=2)
    add_p(doc, '  · 从"管理者视角的事实" → "两个视角的事实拼在一起"', size=10.5, after=4)

    add_p(doc, '关键原则：', size=11, bold=True, after=2)
    add_checkbox_line(doc, '描述行为，不做评判')
    add_checkbox_line(doc, '具体到情境，不笼统概括')
    add_checkbox_line(doc, '邀请先说，不抢先陈述')
    add_p(doc, '', before=2, after=2)

    add_p(doc, '起手话术（我的版本）：', size=11, bold=True, color=COLOR_PRIMARY, after=2)
    add_write_area(doc, lines=3, hint='用你自己的话写一句开场——这句你真的能用')
    add_p(doc, '', before=2, after=2)
    add_callout(doc, '话术对比',
                'A："我先说一下结果。你的评分是……"（管理者导向）   '
                'B："开始说结果之前，我想我们先一起回顾一下。从你的角度，你觉得自己这季度做到了什么？"（共同回顾）',
                style='quote')
    add_pagebreak(doc)

    # 第二步
    add_section_banner(doc, '第二步 · 探寻归因（AI 时代的全新关键）', color=COLOR_PURPLE)
    add_p(doc, '含义：', size=11, bold=True, after=2)
    add_write_area(doc, lines=3, hint='探寻归因是什么？共同探索"这些成果里，员工的人类贡献是什么"')
    add_p(doc, '', before=2, after=2)
    add_callout(doc, 'AI 时代',
                '这是四步法里 AI 时代完全新增的一步。过去的绩效面谈，事实和归因是绑定的——"员工完成了 X 报告"="员工在 X 报告里体现的能力是 Y"。AI 时代，归因不再自动附在事实上。',
                style='ai')
    add_p(doc, '', before=2, after=2)

    add_p(doc, '4 个参考问题（选一个你会用的）：', size=11, bold=True, after=2)
    add_p(doc, '  Q1: 在你完成的这些成果里，你最满意的是哪个？你的核心判断体现在哪里？', size=10, after=2)
    add_p(doc, '  Q2: 这个项目的结果很好，你觉得什么是只有你才能做到的部分？', size=10, after=2)
    add_p(doc, '  Q3: 如果让你向一个新同事介绍这个项目"我是怎么做的"，你会怎么讲？', size=10, after=2)
    add_p(doc, '  Q4: 在你和 AI 工具合作的过程里，你觉得哪个环节是它做不到的、必须你来判断的？', size=10, after=4)

    add_p(doc, '我会用的是（Q 几，或我自己的版本）：', size=11, bold=True, color=COLOR_PRIMARY, after=2)
    add_write_area(doc, lines=3, hint='写下你选的那个问题，或者你改写的版本')
    add_p(doc, '', before=2, after=2)
    add_p(doc, '这一步为什么在 AI 时代特别重要：', size=11, bold=True, after=2)
    add_write_area(doc, lines=3, hint='用你自己的话写')
    add_pagebreak(doc)

    # 第三步
    add_section_banner(doc, '第三步 · 分析缺口', color=COLOR_TEAL)
    add_p(doc, '含义：', size=11, bold=True, after=2)
    add_write_area(doc, lines=3, hint='分析缺口是什么？在归因清晰的基础上，识别哪里的表现与预期有差距')
    add_p(doc, '', before=2, after=2)

    add_p(doc, '三个缺口层次：', size=11, bold=True, after=4)

    add_h4(doc, '层次 1：技能缺口（不会做）')
    add_p(doc, '员工没有掌握做这件事的能力。处理：培训、学习、辅导。', size=10.5, after=2)
    add_write_area(doc, lines=2, hint='我见过的技能缺口例子：')
    add_p(doc, '', before=2, after=2)

    add_h4(doc, '层次 2：行为缺口（知道但没做）')
    add_p(doc, '员工有相应的能力，但在这个周期里没做到。处理：建立机制、增加反馈频率、明确期望。', size=10.5, after=2)
    add_write_area(doc, lines=2, hint='我见过的行为缺口例子：')
    add_p(doc, '', before=2, after=2)

    add_h4(doc, '层次 3：认知缺口（理解偏差导致的行为选择）')
    add_p(doc, '员工对工作、对自己的角色、对优先级的理解和公司期望不一致。处理：对齐认知。', size=10.5, after=2)
    add_write_area(doc, lines=2, hint='我见过的认知缺口例子：')
    add_p(doc, '', before=2, after=2)

    add_h4(doc, 'AI 时代新增的第四层：工具协作缺口')
    add_callout(doc, 'AI 时代',
                '员工在 AI 协作上有具体的不足：不会用合适的工具、不会设计有效提示、不会评估 AI 输出、不会把 AI 整合进工作流程。',
                style='ai')
    add_p(doc, '', before=2, after=2)
    add_p(doc, '我见过的工具协作缺口例子：', size=10.5, bold=True, after=2)
    add_write_area(doc, lines=3, hint='具体到一个员工、一个场景')
    add_p(doc, '', before=2, after=2)
    add_quote(doc, 'AI 时代的事面原则要求看到两层事实：产出事实 + 归因事实。没有归因维度，AI 时代的事面是不完整的。')
    add_pagebreak(doc)

    # 第四步
    add_section_banner(doc, '第四步 · 共建方向', color=COLOR_GREEN)
    add_p(doc, '含义：', size=11, bold=True, after=2)
    add_write_area(doc, lines=3, hint='共建方向是什么？双方共同规划"接下来怎么做"——不是单方面发布命令')
    add_p(doc, '', before=2, after=2)

    add_p(doc, '关键原则：', size=11, bold=True, after=2)
    add_checkbox_line(doc, '问"你觉得可以怎么做"先于"我要求你做什么"')
    add_checkbox_line(doc, '明确具体行动，不只是意向')
    add_checkbox_line(doc, '确认双方的具体行动（不只是员工的，管理者也要承诺支持）')
    add_checkbox_line(doc, '写下来——面谈里说的，写成简单几行，发给员工确认')
    add_p(doc, '', before=2, after=2)

    add_p(doc, '起手问题（我的版本）：', size=11, bold=True, color=COLOR_PRIMARY, after=2)
    add_write_area(doc, lines=3, hint='用你自己的话写一个开场问题')
    add_pagebreak(doc)

    # ---- 4. AI 时代关键：探寻归因 ----
    add_h2(doc, '4. AI 时代关键：探寻归因')
    add_p(doc, '把四步里 AI 时代的关键——第二步——单独再写一次。', size=10.5, before=2, after=4, line=1.5, italic=True, color=COLOR_MUTED)
    add_p(doc, '', before=2, after=2)

    add_p(doc, '为什么 AI 时代必须有"探寻归因"这一步？', size=11, bold=True, color=COLOR_PRIMARY, after=2)
    add_write_area(doc, lines=4, hint='用你自己的话写——把课上听到的变成自己的')
    add_p(doc, '', before=2, after=2)

    add_p(doc, '在 AI 之前：', size=11, bold=True, after=2)
    add_write_area(doc, lines=2, hint='事实和归因是绑定的。员工完成了 X 报告 = 员工的能力体现在 X 报告里')
    add_p(doc, '', before=2, after=2)

    add_p(doc, '在 AI 之后：', size=11, bold=True, after=2)
    add_write_area(doc, lines=2, hint='同一个事实，背后的归因可能完全不一样——AI 生成初稿员工修改 / 同事主导员工参与')
    add_p(doc, '', before=2, after=2)

    add_h3(doc, '关键原则（4 条）')
    add_checkbox_line(doc, '提问而非断言')
    add_checkbox_line(doc, '好奇而非评判')
    add_checkbox_line(doc, '对 AI 的参与保持开放（既不预设质疑，也不忽视现实）')
    add_checkbox_line(doc, '愿意为归因留时间（5-10 分钟的共同探索，不是 1 分钟）')
    add_p(doc, '', before=2, after=2)

    add_h3(doc, '我的归因探寻工具箱')
    add_p(doc, '我会用的探问句：', size=11, bold=True, color=COLOR_PRIMARY, after=2)
    add_write_area(doc, lines=3, hint='写下你准备用的话——具体到那句话')
    add_p(doc, '', before=2, after=2)
    add_p(doc, '我准备这样准备它：', size=11, bold=True, after=2)
    add_write_area(doc, lines=3, hint='面谈前如何准备这个环节')
    add_pagebreak(doc)

    # ---- 5. 三个缺口层次 + AI 时代新增 ----
    add_h2(doc, '5. 三个缺口层次 + AI 时代新增的第四层')
    add_p(doc, '请对照你自己的分析对象，识别他的主要缺口属于哪一层。', size=10.5, before=2, after=2, line=1.5)

    headers = ['缺口层次', '特征', '处理方式', '我分析对象的判断']
    rows = [
        ['技能缺口', '不会做', '培训、学习、辅导', '□ 是  □ 否  □ 部分'],
        ['行为缺口', '知道但没做', '建立机制、增加反馈、明确期望', '□ 是  □ 否  □ 部分'],
        ['认知缺口', '理解偏差', '对齐认知、举具体例子', '□ 是  □ 否  □ 部分'],
        ['AI 工具协作缺口（AI 时代新增）', '该用没用 / 用了没判断 / 过度依赖', '工具培训 + 协作方法训练', '□ 是  □ 否  □ 部分'],
    ]
    make_table(doc, headers, rows, col_widths=[2.5, 4.0, 5.0, 5.5], body_size=10, row_height=1.0)
    add_p(doc, '', before=2, after=2)

    add_h3(doc, '关键区分（不要混）')
    add_p(doc, '"这次没做到" vs "这个人这方面能力不足"：', size=11, bold=True, color=COLOR_PRIMARY, after=2)
    add_write_area(doc, lines=3, hint='在我分析对象身上，他的主要缺口是"这次没做到"还是"系统能力问题"？')
    add_p(doc, '', before=2, after=2)
    add_callout(doc, '提示',
                '混淆这两个会导致两种错误：把"这次没做到"当成能力问题 → 不公平的发展计划；把"能力不足"当成"这次没做到" → 员工没有获得真正的发展支持。',
                style='tip')
    add_pagebreak(doc)

    # ---- 6. 配对演练记录（3 轮） ----
    add_h2(doc, '6. 配对演练记录（3 轮）')
    add_p(doc, '讲师会组织 3 轮配对演练。下面按轮次记录。', size=10.5, before=2, after=4, line=1.5)

    add_section_banner(doc, '第一轮（重点练习第一步和第二步）', color=COLOR_PRIMARY)
    add_p(doc, '我扮演的角色：', size=10.5, after=2)
    add_checkbox_line(doc, '我扮演管理者')
    add_checkbox_line(doc, '我扮演员工')
    add_p(doc, '', before=2, after=2)
    add_p(doc, '最难做到的是：', size=10.5, bold=True, color=COLOR_PRIMARY, after=2)
    add_write_area(doc, lines=4, hint='具体到那一个动作——比如"我没忍住开始讲结论"')
    add_p(doc, '', before=2, after=2)
    add_p(doc, '伙伴给我的反馈：', size=10.5, bold=True, color=COLOR_PRIMARY, after=2)
    add_write_area(doc, lines=4, hint='原话记下来——不要写"挺好的"')
    add_p(doc, '', before=2, after=2)
    add_p(doc, '我接下来要调整的一个动作：', size=10.5, bold=True, color=COLOR_PRIMARY, after=2)
    add_write_area(doc, lines=2, hint='具体到一个动作')
    add_pagebreak(doc)

    add_section_banner(doc, '第二轮（四步都走一遍）', color=COLOR_TEAL)
    add_p(doc, '我扮演的角色：', size=10.5, after=2)
    add_checkbox_line(doc, '我扮演管理者')
    add_checkbox_line(doc, '我扮演员工')
    add_p(doc, '', before=2, after=2)
    add_p(doc, '第二步（探寻归因）里，我用的问题是：', size=10.5, bold=True, color=COLOR_PRIMARY, after=2)
    add_write_area(doc, lines=3, hint='写下你具体问的那句话')
    add_p(doc, '', before=2, after=2)
    add_p(doc, '员工角色的反应是：', size=10.5, bold=True, color=COLOR_PRIMARY, after=2)
    add_write_area(doc, lines=3, hint='记下员工的反应——哪句话让你印象深')
    add_p(doc, '', before=2, after=2)
    add_p(doc, '观察者（如果有）给我的反馈：', size=10.5, bold=True, color=COLOR_PRIMARY, after=2)
    add_write_area(doc, lines=3, hint='记下最有价值的一条')
    add_pagebreak(doc)

    add_section_banner(doc, '第三轮（AI 归因情境，如有时间）', color=COLOR_PURPLE)
    add_p(doc, '场景类型：', size=10.5, after=2)
    add_checkbox_line(doc, '卡 6 AI 归因争议')
    add_checkbox_line(doc, '卡 7 方向迷失')
    add_checkbox_line(doc, '卡 8 产出能力不匹配')
    add_p(doc, '', before=2, after=2)
    add_p(doc, '我扮演的角色：', size=10.5, after=2)
    add_checkbox_line(doc, '我扮演管理者')
    add_checkbox_line(doc, '我扮演员工')
    add_p(doc, '', before=2, after=2)
    add_p(doc, '我注意到在这个场景里，探寻归因的问题，员工的反应是：', size=10.5, bold=True, color=COLOR_PRIMARY, after=2)
    add_write_area(doc, lines=4, hint='具体到那个反应——他的原话、他的状态')
    add_p(doc, '', before=2, after=2)
    add_p(doc, '我准备怎么调整：', size=10.5, bold=True, color=COLOR_PRIMARY, after=2)
    add_write_area(doc, lines=3, hint='学完课后你的调整方向')
    add_pagebreak(doc)

    # ---- 7. 全班复盘洞见 ----
    add_h2(doc, '7. 全班复盘洞见')
    add_p(doc, '讲师会引导全班复盘。下面记录你从演练里最深的发现。', size=10.5, before=2, after=2, line=1.5)

    add_h3(doc, '从演练里，我最大的发现是')
    add_write_area(doc, lines=5, hint='用一个具体场景或一句话写出来')
    add_p(doc, '', before=2, after=2)

    add_h3(doc, '探寻归因这一步，对我来说最难的地方是')
    add_write_area(doc, lines=4, hint='不要写"还不够"——写具体是哪个动作或哪种心态')
    add_p(doc, '', before=2, after=2)

    add_h3(doc, '其他学员的发言里最触动我的是')
    add_write_area(doc, lines=3, hint='可以是别人提的一个问题、一种判断、一种经历')
    add_p(doc, '', before=2, after=2)

    add_h3(doc, '我准备带回到工作中的第一个改变是')
    add_write_area(doc, lines=3, hint='具体到一个动作——明天上班就能开始')
    add_p(doc, '', before=2, after=2)
    add_quote(doc, '四步面谈法不是 4 个独立的技巧，是 1 个连贯的对话流。共看事实让我们站在一起，探寻归因让我们看见彼此，分析缺口让我们看清现实，共建方向让我们一起往前。')
    add_pagebreak(doc)
