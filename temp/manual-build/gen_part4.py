"""
第五部分：Part 3 工作空间（发展面谈与双轨成长）
"""
import sys
sys.path.insert(0, r'D:\CC\temp\manual-build')

from docx import Document
from docx.shared import Pt, RGBColor, Cm
from docx.enum.text import WD_ALIGN_PARAGRAPH
from doc_helpers import *


def build_part5_part3(doc):
    """第五部分：Part 3 工作空间"""
    add_chapter_header(doc, '第五部分', 'Part 3：发展面谈与双轨成长',
                       'Development Dialogue · The Dual-Track Capability Framework')
    add_p(doc, '', before=4, after=4)

    # ---- 1. 发展面谈 vs 评估面谈 ----
    add_h2(doc, '1. 发展面谈 vs 评估面谈')
    add_p(doc, '对这两种面谈的区别，我的理解：', size=11, before=2, after=4, line=1.5)
    add_p(doc, '', before=2, after=2)

    headers = ['维度', '评估面谈', '发展面谈']
    rows = [
        ['目的', '对过去打分 / 决定激励', '对未来搭建路径 / 激发投入'],
        ['主导方', '管理者主导', '管理者和员工共建'],
        ['员工心态', '防御 / 解释', '探索 / 期待'],
        ['核心输出', '评分 + 奖惩', '发展计划 + 双轨方向'],
        ['情绪基调', '紧张 / 短暂', '投入 / 持续'],
        ['占比时间（理想）', '40%', '60%'],
    ]
    make_table(doc, headers, rows, col_widths=[3.0, 7.0, 7.0], body_size=10, row_height=0.9)
    add_p(doc, '', before=2, after=2)

    add_p(doc, '我在两者上的实际比例是：评估：______%   发展：______%', size=11, bold=True, color=COLOR_PRIMARY, after=2)
    add_write_area(doc, lines=2, hint='回忆你过去 3 次面谈的比例')
    add_p(doc, '', before=2, after=2)
    add_quote(doc, '评估面谈谈的是"你做了什么"，发展面谈谈的是"你将成为谁"。两种谈话，是两种根本不同的对话。')
    add_pagebreak(doc)

    # ---- 2. 我在发展面谈上的误区 ----
    add_h2(doc, '2. 我在发展面谈上的误区')
    add_p(doc, '对照下面的误区，看自己中了几条。', size=11, before=2, after=2, line=1.5)
    add_p(doc, '', before=2, after=2)

    add_h4(doc, '误区 1：把"发展"做成"指定"')
    add_p(doc, '"你明年应该学 X、考 Y、读 Z 书。"——员工成了接收命令的人。', size=10, color=COLOR_MUTED, italic=True, after=2)
    add_checkbox_line(doc, '我犯过这个错')
    add_checkbox_line(doc, '员工没接住')
    add_p(doc, '', before=2, after=2)

    add_h4(doc, '误区 2：把"发展"做成"鸡汤"')
    add_p(doc, '"你很有潜力，加油！"——没说具体路径和具体支持。', size=10, color=COLOR_MUTED, italic=True, after=2)
    add_checkbox_line(doc, '我犯过这个错')
    add_checkbox_line(doc, '员工当时点头走人')
    add_p(doc, '', before=2, after=2)

    add_h4(doc, '误区 3：把"发展"做成"加压"')
    add_p(doc, '"明年你要比今年更好、更快、更强。"——员工感受到的不是发展机会，是负担。', size=10, color=COLOR_MUTED, italic=True, after=2)
    add_checkbox_line(doc, '我犯过这个错')
    add_checkbox_line(doc, '员工一年内离职了')
    add_p(doc, '', before=2, after=2)

    add_h4(doc, '误区 4：把"发展"做成"你自便"')
    add_p(doc, '"你自己想清楚想做什么，明年告诉我。"——员工感受到的不是自由，是被放弃。', size=10, color=COLOR_MUTED, italic=True, after=2)
    add_checkbox_line(doc, '我犯过这个错')
    add_checkbox_line(doc, '员工完全没方向')
    add_p(doc, '', before=2, after=2)

    add_h3(doc, '我自检结果')
    add_p(doc, '我过去最常犯的是：', size=10.5, bold=True, color=COLOR_PRIMARY, after=2)
    add_checkbox_line(doc, '误区 1 把"发展"做成"指定"')
    add_checkbox_line(doc, '误区 2 把"发展"做成"鸡汤"')
    add_checkbox_line(doc, '误区 3 把"发展"做成"加压"')
    add_checkbox_line(doc, '误区 4 把"发展"做成"你自便"')
    add_p(doc, '', before=2, after=2)
    add_p(doc, '为什么我过去会这样：', size=10.5, bold=True, color=COLOR_PRIMARY, after=2)
    add_write_area(doc, lines=3, hint='写下自己的理由——通常藏着没被看见的恐惧或没被意识到的偷懒')
    add_p(doc, '', before=2, after=2)
    add_p(doc, '我准备做的一个具体调整：', size=10.5, bold=True, color=COLOR_PRIMARY, after=2)
    add_write_area(doc, lines=3, hint='具体到一个动作——比如"下次面谈我要先问员工自己想做什么"')
    add_pagebreak(doc)

    # ---- 3. 双轨胜任度框架详解 ----
    add_h2(doc, '3. 双轨胜任度框架详解')
    add_p(doc, '双轨 = 当前岗位胜任度 + 时代需要胜任度。两条腿都要走。', size=11, bold=True, color=COLOR_PRIMARY, before=2, after=2, line=1.5)
    add_p(doc, '', before=2, after=2)

    add_section_banner(doc, '轨道 A：当前岗位胜任度', color=COLOR_BLUE)
    add_p(doc, '含义：', size=11, bold=True, after=2)
    add_write_area(doc, lines=3, hint='员工在他现在的岗位上做得怎么样')
    add_p(doc, '', before=2, after=2)

    add_p(doc, '评估维度：', size=10.5, after=2)
    add_checkbox_line(doc, '本岗位专业能力')
    add_checkbox_line(doc, '业绩达成')
    add_checkbox_line(doc, '协作 / 沟通')
    add_checkbox_line(doc, '问题解决')
    add_checkbox_line(doc, '自我管理')
    add_p(doc, '', before=2, after=2)

    add_p(doc, '我对我分析对象的判断：', size=10.5, bold=True, color=COLOR_PRIMARY, after=2)
    add_write_area(doc, lines=4, hint='轨道 A 的现状 + 1-2 个具体事实）
    add_p(doc, '', before=2, after=2)

    add_section_banner(doc, '轨道 B：时代需要胜任度（AI 时代特别突出）', color=COLOR_PURPLE)
    add_p(doc, '含义：', size=11, bold=True, after=2)
    add_write_area(doc, lines=3, hint='员工在 AI 时代 / 未来 3-5 年需要的胜任度')
    add_p(doc, '', before=2, after=2)

    add_p(doc, '评估维度：', size=10.5, after=2)
    add_checkbox_line(doc, 'AI 工具协作能力')
    add_checkbox_line(doc, '复杂问题分析能力（AI 替代不了）')
    add_checkbox_line(doc, '判断和决策能力（AI 替代不了）')
    add_checkbox_line(doc, '学习迁移能力（在新环境里能快速学会）')
    add_checkbox_line(doc, '意义建构能力（在快速变化里能找到自己的位置）')
    add_p(doc, '', before=2, after=2)

    add_p(doc, '我对我分析对象的判断：', size=10.5, bold=True, color=COLOR_PRIMARY, after=2)
    add_write_area(doc, lines=4, hint='轨道 B 的现状 + 1-2 个具体事实）
    add_p(doc, '', before=2, after=2)

    add_callout(doc, 'AI 时代',
                'AI 时代之前，管理者只看轨道 A。AI 时代之后，轨道 B 不再是"加分项"——轨道 B 是"必须项"。',
                style='ai')
    add_p(doc, '', before=2, after=2)
    add_quote(doc, '双轨胜任度框架的核心：不是"两条都要强"，是"两条都不能弱"。任何一条成为短板，员工的未来就站不稳。')
    add_pagebreak(doc)

    # ---- 4. 我的分析对象的双轨现状 ----
    add_h2(doc, '4. 我的分析对象的双轨现状')
    add_p(doc, '选你的分析对象，把两条轨道的当前状态写下来。', size=11, before=2, after=4, line=1.5)

    add_p(doc, '分析对象：____________（员工代号）', size=11, bold=True, color=COLOR_PRIMARY, after=2)
    add_p(doc, '', before=2, after=2)

    headers = ['轨道', '现状（用 1 段话描述）', '强项', '弱项', '最该补的能力']
    rows = [
        ['轨道 A：当前岗位', '', '', '', ''],
        ['轨道 B：时代需要', '', '', '', ''],
    ]
    make_table(doc, headers, rows, col_widths=[2.5, 5.0, 2.5, 2.5, 4.5], body_size=9.5, row_height=2.5)
    add_p(doc, '', before=2, after=2)

    add_h3(doc, '我看到的最不平衡的地方')
    add_write_area(doc, lines=4, hint='是轨道 A 强 B 弱？是轨道 B 强 A 弱？是都弱？还是都强？')
    add_p(doc, '', before=2, after=2)
    add_callout(doc, '提示',
                '双轨都强 → 这个员工是个稳的角色，谈话可以谈"未来 3 年的方向"。'
                '双轨都弱 → 先稳定一条，再考虑另一条。'
                'A 强 B 弱 → 警惕"能力漂移"——他已经能驾驭现在，但未来 3 年要掉队。'
                'B 强 A 弱 → 这种是潜在的明日之星，但需要给他在现在岗位上具体的练手机会。',
                style='tip')
    add_pagebreak(doc)

    # ---- 5. 从目标缺口到发展需要（分析练习） ----
    add_h2(doc, '5. 从目标缺口到发展需要（分析练习）')
    add_p(doc, '把今天学到的分析路径走一遍。', size=11, before=2, after=4, line=1.5)

    add_p(doc, '5 步路径：', size=11, bold=True, color=COLOR_PRIMARY, after=2)
    add_p(doc, '  ① 目标 → ② 现状 → ③ 差距 → ④ 归因（双轨角度）→ ⑤ 发展需要', size=10.5, after=4)
    add_p(doc, '', before=2, after=2)

    add_h3(doc, '① 目标（这个人未来 6-12 个月要达到什么）')
    add_write_area(doc, lines=3, hint='用具体可观察的行为写——不是"做得更好"，是"做到 X"')
    add_p(doc, '', before=2, after=2)

    add_h3(doc, '② 现状（他现在能做什么、做到什么程度）')
    add_write_area(doc, lines=3, hint='用具体可观察的事实写——不是"还行"或"不够好"')
    add_p(doc, '', before=2, after=2)

    add_h3(doc, '③ 差距（目标和现状之间的距离）')
    add_write_area(doc, lines=3, hint='把差距写成"具体到一件能做的事"——比如"独立完成 X 类型报告"')
    add_p(doc, '', before=2, after=2)

    add_h3(doc, '④ 归因（双轨角度：差距的根源在哪）')
    add_p(doc, '从双轨角度看，差距的根源主要在：', size=10.5, after=2)
    add_checkbox_line(doc, '轨道 A（当前岗位能力不足）')
    add_checkbox_line(doc, '轨道 B（时代需要能力不足）')
    add_checkbox_line(doc, '两者都有')
    add_p(doc, '', before=2, after=2)
    add_write_area(doc, lines=3, hint='具体到一个或两个根源——不是"很多"）
    add_p(doc, '', before=2, after=2)

    add_h3(doc, '⑤ 发展需要（要补什么、怎么补）')
    add_p(doc, '需要发展什么（具体到能力，不只是行为）：', size=10.5, bold=True, color=COLOR_PRIMARY, after=2)
    add_write_area(doc, lines=3, hint='具体到一个能力——比如"独立判断的能力"，不是"更主动"')
    add_p(doc, '', before=2, after=2)

    add_p(doc, '用什么方式补（机制 / 资源 / 练习 / 反馈）：', size=10.5, bold=True, color=COLOR_PRIMARY, after=2)
    add_write_area(doc, lines=3, hint='至少 1 个机制 + 1 个具体动作')
    add_p(doc, '', before=2, after=2)

    add_p(doc, '时间节奏：', size=10.5, bold=True, color=COLOR_PRIMARY, after=2)
    add_write_area(doc, lines=2, hint='30 天 / 60 天 / 90 天——具体到几个观察点')
    add_p(doc, '', before=2, after=2)

    add_p(doc, '管理者（我）的支持是什么：', size=10.5, bold=True, color=COLOR_PRIMARY, after=2)
    add_write_area(doc, lines=3, hint='管理者也要承诺——不是"我会关注"')
    add_pagebreak(doc)

    # ---- 6. 发展对话三个启动问题 ----
    add_h2(doc, '6. 发展对话三个启动问题')
    add_p(doc, '发展对话的难点不是"说什么"，是"怎么开场"。', size=11, before=2, after=2, line=1.5)
    add_p(doc, '下面 3 个问题，是讲师给的"启动问题模板"。', size=10, color=COLOR_MUTED, italic=True, after=4)
    add_p(doc, '', before=2, after=2)

    add_section_banner(doc, '启动问题 1：现状探索', color=COLOR_PRIMARY)
    add_p(doc, '"你觉得自己现在做得最让自己满意的是哪个部分？为什么？"', size=11, bold=True, after=2)
    add_p(doc, '目的：', size=10.5, after=2)
    add_write_area(doc, lines=2, hint='让员工自己看到自己——是"探索"而非"评估"）
    add_p(doc, '', before=2, after=2)
    add_p(doc, '我准备这样跟员工讲：', size=10.5, bold=True, color=COLOR_PRIMARY, after=2)
    add_write_area(doc, lines=2, hint='用你自己的版本）
    add_p(doc, '', before=2, after=2)

    add_section_banner(doc, '启动问题 2：渴望探索', color=COLOR_PRIMARY)
    add_p(doc, '"你希望一年后自己变成什么样？那时候的工作状态是什么样？"', size=11, bold=True, after=2)
    add_p(doc, '目的：', size=10.5, after=2)
    add_write_area(doc, lines=2, hint='让员工看到自己的渴望——这是发展的源动力）
    add_p(doc, '', before=2, after=2)
    add_p(doc, '我准备这样跟员工讲：', size=10.5, bold=True, color=COLOR_PRIMARY, after=2)
    add_write_area(doc, lines=2)
    add_p(doc, '', before=2, after=2)

    add_section_banner(doc, '启动问题 3：差距探索', color=COLOR_PRIMARY)
    add_p(doc, '"从现在的你到一年后的你，你觉得中间最难的是哪一步？"', size=11, bold=True, after=2)
    add_p(doc, '目的：', size=10.5, after=2)
    add_write_area(doc, lines=2, hint='让员工自己识别自己的最大障碍——发展对话的入口')
    add_p(doc, '', before=2, after=2)
    add_p(doc, '我准备这样跟员工讲：', size=10.5, bold=True, color=COLOR_PRIMARY, after=2)
    add_write_area(doc, lines=2)
    add_p(doc, '', before=2, after=2)

    add_callout(doc, '提示',
                '3 个问题顺序不能换：现状 → 渴望 → 差距。从"我能做什么"开始，到"我想变成什么"，再到"中间缺什么"。这是经典的发展对话开场逻辑。',
                style='tip')
    add_pagebreak(doc)

    # ---- 7. 配对演练记录（发展对话开场） ----
    add_h2(doc, '7. 配对演练记录（发展对话开场）')
    add_p(doc, '讲师会组织配对演练。下面记录演练里你的发现。', size=10.5, before=2, after=4, line=1.5)

    add_section_banner(doc, '第一轮', color=COLOR_GREEN)
    add_p(doc, '我扮演的角色：', size=10.5, after=2)
    add_checkbox_line(doc, '我扮演管理者')
    add_checkbox_line(doc, '我扮演员工')
    add_p(doc, '', before=2, after=2)
    add_p(doc, '我用的启动问题（哪一个，或我自己的版本）：', size=10.5, bold=True, color=COLOR_PRIMARY, after=2)
    add_write_area(doc, lines=2, hint='写下你具体问的那句话')
    add_p(doc, '', before=2, after=2)
    add_p(doc, '员工角色的反应让我看到：', size=10.5, bold=True, color=COLOR_PRIMARY, after=2)
    add_write_area(doc, lines=4, hint='具体到一个反应、一种状态、一句话')
    add_p(doc, '', before=2, after=2)
    add_p(doc, '伙伴给我的反馈：', size=10.5, bold=True, color=COLOR_PRIMARY, after=2)
    add_write_area(doc, lines=3, hint='原话记下——不要写"挺好的"）
    add_p(doc, '', before=2, after=2)
    add_p(doc, '我接下来要调整的一个动作：', size=10.5, bold=True, color=COLOR_PRIMARY, after=2)
    add_write_area(doc, lines=2)
    add_pagebreak(doc)

    add_section_banner(doc, '第二轮（视时间）', color=COLOR_GREEN)
    add_p(doc, '我扮演的角色：', size=10.5, after=2)
    add_checkbox_line(doc, '我扮演管理者')
    add_checkbox_line(doc, '我扮演员工')
    add_p(doc, '', before=2, after=2)
    add_p(doc, '第二轮我换了一个启动问题，是：', size=10.5, bold=True, color=COLOR_PRIMARY, after=2)
    add_write_area(doc, lines=2, hint='写下你换的那个问题')
    add_p(doc, '', before=2, after=2)
    add_p(doc, '我看到的差别是：', size=10.5, bold=True, color=COLOR_PRIMARY, after=2)
    add_write_area(doc, lines=4, hint='对比两轮发现的不同')
    add_p(doc, '', before=2, after=2)
    add_p(doc, '我的整体发现：', size=10.5, bold=True, color=COLOR_PRIMARY, after=2)
    add_write_area(doc, lines=3, hint='一句话总结——从这次演练带走的最大收获')
    add_p(doc, '', before=2, after=2)
    add_quote(doc, '发展对话不是"我告诉你怎么发展"，是"我们一起找到你真正想发展的方向"。前者是命令，后者是共建。')
