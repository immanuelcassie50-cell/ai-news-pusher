"""
第八部分：附录（A、B、C）
"""
import sys
sys.path.insert(0, r'D:\CC\temp\manual-build')

from docx import Document
from docx.shared import Pt, RGBColor, Cm
from docx.enum.text import WD_ALIGN_PARAGRAPH
from doc_helpers import *


def build_part8_appendix(doc):
    """第八部分：附录"""
    add_chapter_header(doc, '第八部分', '附录', 'Appendix · 三份带回去的速查')
    add_p(doc, '', before=4, after=4)

    # ---- 附录 A：面谈前后关键动作清单 ----
    add_h1(doc, '附录 A · 面谈前后关键动作清单', color_bg=COLOR_LIGHT_BLUE)
    add_p(doc, '本附录是一份完整的"动作清单"——从面谈前 7 天到面谈后 30 天，每个时间节点该做什么。', size=11, before=2, after=4, line=1.5)
    add_p(doc, '', before=2, after=2)

    add_h2(doc, 'A.1 面谈前 7 天（D-7）')
    headers = ['时间', '动作', '完成打勾']
    rows = [
        ['D-7', '通知员工面谈时间和大致方向（让他/她有时间准备）', '☐'],
        ['D-7', '选择一个具体的分析对象（员工代号）', '☐'],
        ['D-7', '写下本次面谈主要议题（用一句话）', '☐'],
    ]
    make_table(doc, headers, rows, col_widths=[1.8, 12.7, 2.0], body_size=9.5, row_height=0.8)
    add_p(doc, '', before=2, after=2)

    add_h2(doc, 'A.2 面谈前 5-6 天（D-6 ~ D-5）')
    headers = ['时间', '动作', '完成打勾']
    rows = [
        ['D-6', '回顾 3-5 个关键事实（具体事件，不是印象）', '☐'],
        ['D-5', '对每个事实做归因预判（哪些清晰、哪些要面谈里探寻）', '☐'],
        ['D-5', '准备第一步"共看事实"的 3 个开场问题', '☐'],
    ]
    make_table(doc, headers, rows, col_widths=[1.8, 12.7, 2.0], body_size=9.5, row_height=0.8)
    add_p(doc, '', before=2, after=2)

    add_h2(doc, 'A.3 面谈前 3-4 天（D-4 ~ D-3）')
    headers = ['时间', '动作', '完成打勾']
    rows = [
        ['D-4', '识别主要绩效缺口（技能/行为/认知/AI 协作）', '☐'],
        ['D-4', '用双轨框架初步分析这名员工的发展方向', '☐'],
        ['D-3', '预判 3 个可能的难点（我可能卡住的地方）', '☐'],
        ['D-3', '为每个难点准备应对（参考四原则）', '☐'],
    ]
    make_table(doc, headers, rows, col_widths=[1.8, 12.7, 2.0], body_size=9.5, row_height=0.8)
    add_p(doc, '', before=2, after=2)

    add_h2(doc, 'A.4 面谈前 1-2 天（D-2 ~ D-1）')
    headers = ['时间', '动作', '完成打勾']
    rows = [
        ['D-2', '完成"下次面谈准备清单"4 大区', '☐'],
        ['D-1', '准备发展对话 3 个启动问题（Q1/Q2/Q3）', '☐'],
        ['D-1', '打印第四区"关键词版"做提词器用', '☐'],
    ]
    make_table(doc, headers, rows, col_widths=[1.8, 12.7, 2.0], body_size=9.5, row_height=0.8)
    add_p(doc, '', before=2, after=2)

    add_h2(doc, 'A.5 面谈当天（D-Day）')
    headers = ['时间', '动作', '完成打勾']
    rows = [
        ['面谈前 30 分钟', '回顾第四区关键词版；避免新工作进入', '☐'],
        ['面谈开场', '让员工先讲（第一步 共看事实）', '☐'],
        ['面谈 15-25 分钟', '探寻归因（第二步）——至少 5-10 分钟', '☐'],
        ['面谈 25-40 分钟', '分析缺口（第三步）——双轨角度', '☐'],
        ['面谈 40-50 分钟', '共建方向（第四步）——员工先讲意愿', '☐'],
        ['面谈最后 5 分钟', '整理 3-5 行行动 / 问"还有什么想说的" / 约定下次', '☐'],
    ]
    make_table(doc, headers, rows, col_widths=[3.0, 11.5, 2.0], body_size=9.5, row_height=0.8)
    add_p(doc, '', before=2, after=2)

    add_h2(doc, 'A.6 面谈后（D+1 ~ D+30）')
    headers = ['时间', '动作', '完成打勾']
    rows = [
        ['D+1', '把面谈里的具体下一步整理成 3-5 行，发给员工确认', '☐'],
        ['D+7', '一周后做一次快速反馈（5 分钟）', '☐'],
        ['D+14', '两周后做一次小回顾（15 分钟）', '☐'],
        ['D+30', '30 天后做一次正式对谈（30 分钟）', '☐'],
        ['D+30', '问责伙伴对话', '☐'],
        ['D+60', '60 天后回顾：发展计划进展', '☐'],
        ['D+90', '90 天后回顾：双轨胜任度变化', '☐'],
    ]
    make_table(doc, headers, rows, col_widths=[1.8, 12.7, 2.0], body_size=9.5, row_height=0.8)
    add_p(doc, '', before=2, after=2)

    add_callout(doc, '提示',
                '面谈不是面谈那 50 分钟的对话。面谈是从 D-7 准备开始，到 D+90 收尾的整个过程。',
                style='tip')
    add_pagebreak(doc)

    # ---- 附录 B：话术对比速查 ----
    add_h1(doc, '附录 B · 话术对比速查', color_bg=COLOR_LIGHT_ORANGE)
    add_p(doc, '本附录是 10 组话术对比——每组都是 A 版本（典型错误）和 B 版本（更好的做法）。', size=11, before=2, after=4, line=1.5)
    add_p(doc, '使用方式：面谈前看一遍，记住 1-2 组你最容易犯的。', size=10.5, color=COLOR_MUTED, italic=True, after=4)
    add_p(doc, '', before=2, after=2)

    # 10 组话术对比
    dialogue_list = [
        ('1. 评估面谈开场',
         'A："我先说一下你的评分结果。"',
         'B："开始说结果之前，我想我们先一起回顾这个周期。从你的角度，你觉得自己做到了什么？"'),
        ('2. 探寻归因',
         'A："你这次确实做得不错，主要是什么能力体现出来的？"',
         'B："这个项目的结果很好。如果让你跟一个新同事讲讲'我是怎么做的'，你会怎么讲？哪部分你觉得是你的核心判断？"'),
        ('3. 行为反馈',
         'A："你最近表现不好，状态不对。"',
         'B："在这个周期里，3 月你做的 X 客户拜访表现得很专业。但 4 月以来的几封邮件我看下来，有几封是复制粘贴的旧版本。你对这个怎么看？"'),
        ('4. AI 归因争议回应',
         'A："AI 做的也算你的贡献，这是现实。"',
         'B："AI 协作能力本身是一种能力。我想了解的是——在这个流程里，你的判断点在哪里？哪一步是你必须亲自做的？"'),
        ('5. 艰难对话开场',
         'A："我们谈谈你最近的表现。"',
         'B："我接下来要说的这件事不太好开口。但我宁愿当面跟你讲清楚，也不想绕着走。"'),
        ('6. 收员工沉默',
         'A："你倒是说句话啊。"',
         'B："我感觉到你可能需要时间消化。我在这里等你。如果你想说的时候再说也行。"'),
        ('7. 反扑回应',
         'A："你冷静一下，听我说完。"',
         'B："我听到你的感受了。这件事我需要讲清楚——不是评判你这个人，但具体到 X 这件事，Y 这个结果我们没达到。我的依据是 Z。"'),
        ('8. 发展对话开场',
         'A："我给你安排一个发展计划。"',
         'B："我想花点时间了解你——你自己觉得做得最让自己满意的是哪个部分？为什么？"'),
        ('9. 收尾',
         'A："今天的谈话就到这里。"',
         'B："我整理一下今天说的——你承诺 X，我承诺 Y，我们 30 天后回顾。你还有什么想说的？"'),
        ('10. AI 伦理边界',
         'A："你这个做法是错的，下次别这样了。"',
         'B："这件事我需要直接跟你讲——这件事不可接受。我知道你的解释，但我们有明确的边界。这件事我会记录在案，HR 那边我也会同步。"'),
    ]

    for title, a, b in dialogue_list:
        add_section_banner(doc, title, color=COLOR_PRIMARY)
        add_p(doc, 'A 版本（典型错误）：', size=10.5, bold=True, color=COLOR_ACCENT, after=2)
        add_p(doc, a, size=10.5, before=2, after=4)
        add_p(doc, 'B 版本（更好的做法）：', size=10.5, bold=True, color=COLOR_GREEN, after=2)
        add_p(doc, b, size=10.5, before=2, after=4)
        add_p(doc, '', before=2, after=2)
        add_p(doc, '', before=2, after=2)

    add_quote(doc, '10 组对比不是"标准答案"，是"参考基线"。你自己的版本是更好的——但前提是你真的想过了。')
    add_pagebreak(doc)

    # ---- 附录 C：自我反思问题（30/60/90 天） ----
    add_h1(doc, '附录 C · 自我反思问题（30/60/90 天）', color_bg=COLOR_LIGHT_GREEN)
    add_p(doc, '本附录是 3 个时间节点的自我反思问题——面谈不是结束，是开始。', size=11, before=2, after=4, line=1.5)
    add_p(doc, '使用方式：', size=10.5, after=2, line=1.5)
    add_p(doc, '  · 30 天后：完成第一组问题（动作是否做到）', size=10.5, after=2)
    add_p(doc, '  · 60 天后：完成第二组问题（中期效果）', size=10.5, after=2)
    add_p(doc, '  · 90 天后：完成第三组问题（长期影响）', size=10.5, after=4)
    add_p(doc, '', before=2, after=2)

    # 30 天
    add_section_banner(doc, '30 天后反思', color=COLOR_BLUE)
    add_p(doc, '记录日期：__________', size=10.5, bold=True, color=COLOR_PRIMARY, after=2)
    add_p(doc, '', before=2, after=2)

    add_h3(doc, '关于准备（D-7 到 D-1）')
    add_checkbox_line(doc, '我有没有在 D-7 通知员工？')
    add_checkbox_line(doc, '我有没有准备 3-5 个具体事实？')
    add_checkbox_line(doc, '我有没有做归因预判？')
    add_checkbox_line(doc, '我有没有完成"下次面谈准备清单"4 大区？')
    add_p(doc, '', before=2, after=2)
    add_p(doc, '准备最不到位的环节是：', size=10.5, bold=True, color=COLOR_PRIMARY, after=2)
    add_write_area(doc, lines=2)
    add_p(doc, '', before=2, after=2)

    add_h3(doc, '关于四步面谈法')
    add_checkbox_line(doc, '我有没有走完 4 步？')
    add_checkbox_line(doc, '我有没有在第二步（探寻归因）至少花 5 分钟？')
    add_checkbox_line(doc, '我有没有让员工先讲（忍住不抢话）？')
    add_checkbox_line(doc, '我有没有识别出主要缺口（4 个层次中）？')
    add_checkbox_line(doc, '我有没有和员工共建方向（不是单方面发布命令）？')
    add_p(doc, '', before=2, after=2)
    add_p(doc, '最难做到的是哪一步：', size=10.5, bold=True, color=COLOR_PRIMARY, after=2)
    add_write_area(doc, lines=2)
    add_p(doc, '', before=2, after=2)

    add_h3(doc, '关于四原则')
    add_checkbox_line(doc, '我有没有做到正面（先看到员工整体的优点）？')
    add_checkbox_line(doc, '我有没有做到全面（不只看一件事）？')
    add_checkbox_line(doc, '我有没有做到情面（把"人"放回事情里）？')
    add_checkbox_line(doc, '我有没有做到事面（落到具体事实）？')
    add_p(doc, '', before=2, after=2)
    add_p(doc, '我下次最该加强的原则是：', size=10.5, bold=True, color=COLOR_PRIMARY, after=2)
    add_write_area(doc, lines=2)
    add_p(doc, '', before=2, after=2)

    add_h3(doc, '30 天内员工的变化')
    add_p(doc, '员工在面谈后做了什么：', size=10.5, bold=True, color=COLOR_PRIMARY, after=2)
    add_write_area(doc, lines=3, hint='具体到一个动作或一种行为）
    add_p(doc, '', before=2, after=2)
    add_p(doc, '我做了什么（管理者承诺的部分）：', size=10.5, bold=True, color=COLOR_PRIMARY, after=2)
    add_write_area(doc, lines=3, hint='管理者承诺的反馈、资源、支持）
    add_p(doc, '', before=2, after=2)
    add_p(doc, '我们之间关系的微妙变化：', size=10.5, bold=True, color=COLOR_PRIMARY, after=2)
    add_write_area(doc, lines=2, hint='比 30 天前更信任？还是更谨慎？）
    add_p(doc, '', before=2, after=2)
    add_pagebreak(doc)

    # 60 天
    add_section_banner(doc, '60 天后反思', color=COLOR_TEAL)
    add_p(doc, '记录日期：__________', size=10.5, bold=True, color=COLOR_PRIMARY, after=2)
    add_p(doc, '', before=2, after=2)

    add_h3(doc, '关于发展计划')
    add_checkbox_line(doc, '员工有没有在做发展计划里承诺的动作？')
    add_checkbox_line(doc, '我有没有按节奏给员工反馈？')
    add_checkbox_line(doc, '我承诺的资源支持有没有兑现？')
    add_checkbox_line(doc, '我们的发展对话还在继续（不是面谈后就没动静）？')
    add_p(doc, '', before=2, after=2)
    add_p(doc, '发展计划进展最不顺利的是：', size=10.5, bold=True, color=COLOR_PRIMARY, after=2)
    add_write_area(doc, lines=3)
    add_p(doc, '', before=2, after=2)

    add_h3(doc, '关于双轨胜任度')
    add_p(doc, '轨道 A（当前岗位）的变化：', size=10.5, bold=True, color=COLOR_PRIMARY, after=2)
    add_write_area(doc, lines=3)
    add_p(doc, '', before=2, after=2)
    add_p(doc, '轨道 B（时代需要）的变化：', size=10.5, bold=True, color=COLOR_PRIMARY, after=2)
    add_write_area(doc, lines=3)
    add_p(doc, '', before=2, after=2)
    add_p(doc, '最不平衡的是哪一条：', size=10.5, bold=True, color=COLOR_PRIMARY, after=2)
    add_write_area(doc, lines=2)
    add_p(doc, '', before=2, after=2)

    add_h3(doc, '60 天内我自己的变化')
    add_p(doc, '我在绩效面谈上最明显的一个进步是：', size=10.5, bold=True, color=COLOR_PRIMARY, after=2)
    add_write_area(doc, lines=3)
    add_p(doc, '', before=2, after=2)
    add_p(doc, '我还在固守的一个旧习惯是：', size=10.5, bold=True, color=COLOR_PRIMARY, after=2)
    add_write_area(doc, lines=3)
    add_p(doc, '', before=2, after=2)
    add_p(doc, '问责伙伴给我的最尖锐的反馈是：', size=10.5, bold=True, color=COLOR_PRIMARY, after=2)
    add_write_area(doc, lines=3)
    add_p(doc, '', before=2, after=2)
    add_pagebreak(doc)

    # 90 天
    add_section_banner(doc, '90 天后反思', color=COLOR_GREEN)
    add_p(doc, '记录日期：__________', size=10.5, bold=True, color=COLOR_PRIMARY, after=2)
    add_p(doc, '', before=2, after=2)

    add_h3(doc, '关于员工')
    add_p(doc, '这名员工 90 天后的整体状态：', size=10.5, bold=True, color=COLOR_PRIMARY, after=2)
    add_write_area(doc, lines=4, hint='业绩 / 状态 / 方向感 / 关系——综合写）
    add_p(doc, '', before=2, after=2)
    add_p(doc, '他/她最让我惊喜的一个变化是：', size=10.5, bold=True, color=COLOR_PRIMARY, after=2)
    add_write_area(doc, lines=3)
    add_p(doc, '', before=2, after=2)
    add_p(doc, '他/她还在挣扎的一个点是：', size=10.5, bold=True, color=COLOR_PRIMARY, after=2)
    add_write_area(doc, lines=3)
    add_p(doc, '', before=2, after=2)

    add_h3(doc, '关于我')
    add_p(doc, '我作为管理者的最大变化是：', size=10.5, bold=True, color=COLOR_PRIMARY, after=2)
    add_write_area(doc, lines=4)
    add_p(doc, '', before=2, after=2)
    add_p(doc, '我还没做到/还在回避的是：', size=10.5, bold=True, color=COLOR_PRIMARY, after=2)
    add_write_area(doc, lines=4)
    add_p(doc, '', before=2, after=2)
    add_p(doc, 'AI 时代给我的最大挑战是：', size=10.5, bold=True, color=COLOR_PRIMARY, after=2)
    add_write_area(doc, lines=3)
    add_p(doc, '', before=2, after=2)

    add_h3(doc, '关于这段学习')
    add_p(doc, '这一天课程带走的最大收获是：', size=10.5, bold=True, color=COLOR_PRIMARY, after=2)
    add_write_area(doc, lines=4)
    add_p(doc, '', before=2, after=2)
    add_p(doc, '我最想推荐给同行的内容是：', size=10.5, bold=True, color=COLOR_PRIMARY, after=2)
    add_write_area(doc, lines=3)
    add_p(doc, '', before=2, after=2)
    add_p(doc, '我准备什么时候再上一次这个课（或推荐谁上）：', size=10.5, bold=True, color=COLOR_PRIMARY, after=2)
    add_write_area(doc, lines=2)
    add_p(doc, '', before=2, after=2)
    add_quote(doc, '90 天的复盘不是"考核课程效果"，是"你到底有没有用"。没用的知识不是知识。')
