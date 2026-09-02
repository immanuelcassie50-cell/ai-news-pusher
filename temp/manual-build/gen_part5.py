"""
第六部分：下次面谈准备清单（核心交付物，4 大区）
"""
import sys
sys.path.insert(0, r'D:\CC\temp\manual-build')

from docx import Document
from docx.shared import Pt, RGBColor, Cm
from docx.enum.text import WD_ALIGN_PARAGRAPH
from doc_helpers import *


def build_part6_checklist(doc):
    """第六部分：下次面谈准备清单（核心交付物）"""
    add_chapter_header(doc, '第六部分', '下次面谈准备清单',
                       'The CORE Deliverable · 走出这间教室，你手上要带的东西')
    add_p(doc, '', before=4, after=4)

    add_quote(doc, '这一天能改变你工作的，不是你今天知道了什么，是你下周一在面谈里做了什么。这一份是给你下周一准备的。',
              author='——本部分核心信念')
    add_p(doc, '', before=4, after=4)

    add_h2(doc, '使用说明')
    add_p(doc, '这份清单是你的"下周一就要用的工具"。不要现在不填，留到下周一再写——今天写完，回公司只要按清单执行。',
          size=11, before=2, after=4, line=1.5)
    add_p(doc, '4 个区，依次填：第一区 事实与归因准备 → 第二区 预估难点与准备 → 第三区 发展对话规划 → 第四区 四步面谈预演。',
          size=10.5, color=COLOR_MUTED, italic=True, after=4, line=1.5)
    add_p(doc, '', before=2, after=2)
    add_callout(doc, '提示',
                '本部分是这本手册的"核心交付物"。你的下周一，就从这份清单开始。',
                style='tip')
    add_pagebreak(doc)

    # ---- 顶部信息 ----
    add_section_banner(doc, '分析对象 & 面谈基本信息', color=COLOR_PRIMARY)
    add_p(doc, '分析对象（员工代号）：__________________________', size=11, bold=True, color=COLOR_PRIMARY, after=2)
    add_p(doc, '职位：__________________________', size=10.5, after=2)
    add_p(doc, '面谈计划日期：__________________________', size=10.5, after=2)
    add_p(doc, '面谈类型：☐ 评估面谈   ☐ 发展面谈   ☐ 评估 + 发展综合', size=10.5, after=2)
    add_p(doc, '本次面谈主要议题（用一句话写）：', size=10.5, bold=True, after=2)
    add_write_area(doc, lines=2)
    add_p(doc, '', before=2, after=2)
    add_p(doc, '预估时长：__________ 分钟', size=10.5, after=2)
    add_p(doc, '地点 / 形式（线上 / 线下）：', size=10.5, after=2)
    add_pagebreak(doc)

    # ============== 第一区 ==============
    add_h1(doc, '第一区 · 事实与归因准备', color_bg=COLOR_LIGHT_BLUE)
    add_p(doc, '面谈的第一步是"共看事实"，第二步是"探寻归因"。', size=11, before=2, after=2, line=1.5)
    add_p(doc, '第一区是帮你把面谈要用的"事实"准备好——AI 时代还要准备好"归因"。', size=10.5, color=COLOR_MUTED, italic=True, after=4, line=1.5)
    add_p(doc, '', before=2, after=2)

    add_h2(doc, '1.1 关键事实清单（这个周期里 3-5 个）')
    add_p(doc, '准备 3-5 个具体的事实。每个事实必须满足：', size=10.5, after=2, line=1.5)
    add_checkbox_line(doc, '有时间')
    add_checkbox_line(doc, '有情境')
    add_checkbox_line(doc, '有具体行为/结果')
    add_checkbox_line(doc, '有数据 / 客户反馈 / 同侪观察（可核实）')
    add_p(doc, '', before=2, after=2)

    headers = ['编号', '事实（具体描述）', '类别']
    rows = [
        ['事实 1', '', '☐ 业绩  ☐ 协作  ☐ 行为  ☐ 认知  ☐ AI 协作'],
        ['事实 2', '', '☐ 业绩  ☐ 协作  ☐ 行为  ☐ 认知  ☐ AI 协作'],
        ['事实 3', '', '☐ 业绩  ☐ 协作  ☐ 行为  ☐ 认知  ☐ AI 协作'],
        ['事实 4', '', '☐ 业绩  ☐ 协作  ☐ 行为  ☐ 认知  ☐ AI 协作'],
        ['事实 5', '', '☐ 业绩  ☐ 协作  ☐ 行为  ☐ 认知  ☐ AI 协作'],
    ]
    make_table(doc, headers, rows, col_widths=[1.5, 12.0, 3.5], body_size=10, row_height=2.0)
    add_p(doc, '', before=2, after=2)

    add_callout(doc, '提示',
                '避免"印象式事实"——"他最近不够努力"不是事实；"他过去 4 周迟到了 7 次"是事实。',
                style='tip')
    add_p(doc, '', before=2, after=2)
    add_p(doc, '', before=2, after=2)
    add_pagebreak(doc)

    add_h2(doc, '1.2 归因预判（AI 时代关键）')
    add_p(doc, '对每个事实，做一个归因预判。注意：归因不是把功劳算在 AI 头上或算在员工头上，是分析"员工的人类贡献是什么"。',
          size=10.5, before=2, after=4, line=1.5)
    add_p(doc, '', before=2, after=2)

    headers = ['事实编号', '我的归因预判', '我的预判需要面谈里探寻什么']
    rows = [
        ['事实 1', '', ''],
        ['事实 2', '', ''],
        ['事实 3', '', ''],
        ['事实 4', '', ''],
        ['事实 5', '', ''],
    ]
    make_table(doc, headers, rows, col_widths=[1.8, 7.5, 7.7], body_size=10, row_height=1.8)
    add_p(doc, '', before=2, after=2)

    add_callout(doc, 'AI 时代',
                '归因清晰不是"我猜"，是"我准备好探寻的问题"。把"我猜的"和"我要问的"分开写，是 AI 时代面谈的基本功。',
                style='ai')
    add_p(doc, '', before=2, after=2)
    add_p(doc, '', before=2, after=2)
    add_pagebreak(doc)

    add_h2(doc, '1.3 我准备在第一步"共看事实"问的 3 个问题')
    add_p(doc, '写你准备用的 3 个开场问题——按顺序写：', size=10.5, after=2, line=1.5)
    add_p(doc, 'Q1：', size=11, bold=True, color=COLOR_PRIMARY, after=2)
    add_write_area(doc, lines=2)
    add_p(doc, '', before=2, after=2)
    add_p(doc, 'Q2：', size=11, bold=True, color=COLOR_PRIMARY, after=2)
    add_write_area(doc, lines=2)
    add_p(doc, '', before=2, after=2)
    add_p(doc, 'Q3：', size=11, bold=True, color=COLOR_PRIMARY, after=2)
    add_write_area(doc, lines=2)
    add_p(doc, '', before=2, after=2)
    add_quote(doc, '第一步的关键不是"我问了什么"，是"我让对方先说"。先问，不抢着讲。')
    add_pagebreak(doc)

    add_h2(doc, '1.4 我准备在第二步"探寻归因"问的 2 个问题')
    add_p(doc, '写你准备用的 2 个探寻归因问题——这是 AI 时代的关键。', size=10.5, after=2, line=1.5)
    add_p(doc, '', before=2, after=2)
    add_p(doc, 'Q1：', size=11, bold=True, color=COLOR_PRIMARY, after=2)
    add_write_area(doc, lines=2)
    add_p(doc, '', before=2, after=2)
    add_p(doc, 'Q2：', size=11, bold=True, color=COLOR_PRIMARY, after=2)
    add_write_area(doc, lines=2)
    add_p(doc, '', before=2, after=2)

    add_p(doc, '如果员工说"我也不知道 AI 帮了哪部分"——我会这样说：', size=10.5, bold=True, color=COLOR_PRIMARY, after=2)
    add_write_area(doc, lines=3, hint='准备好一个温和的回应——不要当场逼迫对方承认"AI 做的多"')
    add_p(doc, '', before=2, after=2)

    add_p(doc, '如果员工说"那 AI 做的不算我做的"——我会这样说：', size=10.5, bold=True, color=COLOR_PRIMARY, after=2)
    add_write_area(doc, lines=3, hint='准备好一个把"AI 协作能力"也视为能力的回应')
    add_p(doc, '', before=2, after=2)
    add_pagebreak(doc)

    # ============== 第二区 ==============
    add_h1(doc, '第二区 · 预估难点与准备', color_bg=COLOR_LIGHT_ORANGE)
    add_p(doc, '面谈里会不会"卡住"——大部分管理者会"卡住"——关键不是不卡，是卡住的时候有准备。',
          size=11, before=2, after=2, line=1.5)
    add_p(doc, '第二区是帮你提前看到"可能会卡的地方"，并准备好应对。', size=10.5, color=COLOR_MUTED, italic=True, after=4, line=1.5)
    add_p(doc, '', before=2, after=2)

    add_h2(doc, '2.1 预估的 3 个难点（我会卡的地方）')
    add_p(doc, '预判自己可能会卡住的 3 个地方。', size=10.5, after=2, line=1.5)
    add_p(doc, '', before=2, after=2)

    add_h3(doc, '难点 1：')
    add_p(doc, '我会卡在：', size=10.5, bold=True, color=COLOR_PRIMARY, after=2)
    add_write_area(doc, lines=2, hint='具体到那一个动作或那句话')
    add_p(doc, '', before=2, after=2)
    add_p(doc, '我估计的成因是：', size=10.5, bold=True, color=COLOR_PRIMARY, after=2)
    add_checkbox_line(doc, '我担心对方情绪')
    add_checkbox_line(doc, '我担心被反扑')
    add_checkbox_line(doc, '我担心自己也没想清楚')
    add_checkbox_line(doc, '我担心破坏关系')
    add_checkbox_line(doc, '其他：________________')
    add_p(doc, '', before=2, after=2)
    add_p(doc, '我准备这样应对：', size=10.5, bold=True, color=COLOR_PRIMARY, after=2)
    add_write_area(doc, lines=3, hint='具体到一个动作+一句话')
    add_p(doc, '', before=2, after=2)
    add_p(doc, '可参考的四原则：', size=10.5, bold=True, color=COLOR_PRIMARY, after=2)
    add_checkbox_line(doc, '正面（先说看见的部分）')
    add_checkbox_line(doc, '全面（不只看这件事）')
    add_checkbox_line(doc, '情面（把"人"放回事情里）')
    add_checkbox_line(doc, '事面（落到具体事实）')
    add_p(doc, '', before=2, after=2)
    add_p(doc, '  · 我会用：', size=10.5, after=2)
    add_write_area(doc, lines=2, hint='具体到那个原则的应用方式')
    add_p(doc, '', before=2, after=2)
    add_pagebreak(doc)

    add_h3(doc, '难点 2：')
    add_p(doc, '我会卡在：', size=10.5, bold=True, color=COLOR_PRIMARY, after=2)
    add_write_area(doc, lines=2)
    add_p(doc, '', before=2, after=2)
    add_p(doc, '我估计的成因是：', size=10.5, bold=True, color=COLOR_PRIMARY, after=2)
    add_checkbox_line(doc, '我担心对方情绪')
    add_checkbox_line(doc, '我担心被反扑')
    add_checkbox_line(doc, '我担心自己也没想清楚')
    add_checkbox_line(doc, '我担心破坏关系')
    add_checkbox_line(doc, '其他：________________')
    add_p(doc, '', before=2, after=2)
    add_p(doc, '我准备这样应对：', size=10.5, bold=True, color=COLOR_PRIMARY, after=2)
    add_write_area(doc, lines=3)
    add_p(doc, '', before=2, after=2)
    add_p(doc, '可参考的四原则：', size=10.5, bold=True, color=COLOR_PRIMARY, after=2)
    add_checkbox_line(doc, '正面（先说看见的部分）')
    add_checkbox_line(doc, '全面（不只看这件事）')
    add_checkbox_line(doc, '情面（把"人"放回事情里）')
    add_checkbox_line(doc, '事面（落到具体事实）')
    add_p(doc, '', before=2, after=2)
    add_p(doc, '  · 我会用：', size=10.5, after=2)
    add_write_area(doc, lines=2)
    add_p(doc, '', before=2, after=2)
    add_pagebreak(doc)

    add_h3(doc, '难点 3：')
    add_p(doc, '我会卡在：', size=10.5, bold=True, color=COLOR_PRIMARY, after=2)
    add_write_area(doc, lines=2)
    add_p(doc, '', before=2, after=2)
    add_p(doc, '我估计的成因是：', size=10.5, bold=True, color=COLOR_PRIMARY, after=2)
    add_checkbox_line(doc, '我担心对方情绪')
    add_checkbox_line(doc, '我担心被反扑')
    add_checkbox_line(doc, '我担心自己也没想清楚')
    add_checkbox_line(doc, '我担心破坏关系')
    add_checkbox_line(doc, '其他：________________')
    add_p(doc, '', before=2, after=2)
    add_p(doc, '我准备这样应对：', size=10.5, bold=True, color=COLOR_PRIMARY, after=2)
    add_write_area(doc, lines=3)
    add_p(doc, '', before=2, after=2)
    add_p(doc, '可参考的四原则：', size=10.5, bold=True, color=COLOR_PRIMARY, after=2)
    add_checkbox_line(doc, '正面（先说看见的部分）')
    add_checkbox_line(doc, '全面（不只看这件事）')
    add_checkbox_line(doc, '情面（把"人"放回事情里）')
    add_checkbox_line(doc, '事面（落到具体事实）')
    add_p(doc, '', before=2, after=2)
    add_p(doc, '  · 我会用：', size=10.5, after=2)
    add_write_area(doc, lines=2)
    add_p(doc, '', before=2, after=2)
    add_pagebreak(doc)

    add_h2(doc, '2.2 准备的话术（我写我的版本）')
    add_p(doc, '把你最怕的几个具体场景的话术提前写下来。', size=10.5, before=2, after=2, line=1.5)

    add_h4(doc, '场景 1：员工反扑"你这个不公平"')
    add_p(doc, '我会说：', size=10.5, bold=True, color=COLOR_PRIMARY, after=2)
    add_write_area(doc, lines=3, hint='完整的话术——含开场 + 核心 + 收尾）
    add_p(doc, '', before=2, after=2)

    add_h4(doc, '场景 2：员工沉默不接话')
    add_p(doc, '我会说：', size=10.5, bold=True, color=COLOR_PRIMARY, after=2)
    add_write_area(doc, lines=3)
    add_p(doc, '', before=2, after=2)

    add_h4(doc, '场景 3：员工说"我知道了"（但我感觉他没懂）')
    add_p(doc, '我会说：', size=10.5, bold=True, color=COLOR_PRIMARY, after=2)
    add_write_area(doc, lines=3)
    add_p(doc, '', before=2, after=2)

    add_h4(doc, '场景 4：员工说"AI 做的"')
    add_p(doc, '我会说：', size=10.5, bold=True, color=COLOR_PRIMARY, after=2)
    add_write_area(doc, lines=3)
    add_p(doc, '', before=2, after=2)
    add_pagebreak(doc)

    # ============== 第三区 ==============
    add_h1(doc, '第三区 · 发展对话规划', color_bg=COLOR_LIGHT_GREEN)
    add_p(doc, '评估面谈只解决"过去"和"现在"。发展面谈还要解决"未来"。', size=11, before=2, after=2, line=1.5)
    add_p(doc, '第三区帮你规划发展对话——从双轨框架出发，规划 1-2 年的方向。', size=10.5, color=COLOR_MUTED, italic=True, after=4, line=1.5)
    add_p(doc, '', before=2, after=2)

    add_h2(doc, '3.1 双轨现状摘要（来自 Part 3 第五部分）')
    headers = ['轨道', '强项', '弱项', '最该补的能力']
    rows = [
        ['轨道 A：当前岗位', '', '', ''],
        ['轨道 B：时代需要', '', '', ''],
    ]
    make_table(doc, headers, rows, col_widths=[3.5, 4.5, 4.5, 4.5], body_size=10, row_height=1.5)
    add_p(doc, '', before=2, after=2)
    add_pagebreak(doc)

    add_h2(doc, '3.2 发展对话的 1 个核心方向（用一句话）')
    add_p(doc, '用一句话写下这个员工未来 6-12 个月最核心的发展方向。', size=10.5, after=2, line=1.5)
    add_p(doc, '不写"做得更好"——写"成为 X 类型的 Y"。', size=10, color=COLOR_MUTED, italic=True, after=4)
    add_p(doc, '', before=2, after=2)
    add_write_area(doc, lines=3, hint='一句话——但要够具体）
    add_p(doc, '', before=2, after=2)
    add_p(doc, '', before=2, after=2)

    add_h2(doc, '3.3 发展对话的 3 个启动问题（讲师给的）')
    add_p(doc, '"现状 → 渴望 → 差距"——按顺序写。', size=10.5, after=2, line=1.5)
    add_p(doc, '', before=2, after=2)
    add_p(doc, 'Q1（现状）：你觉得自己现在做得最让自己满意的是哪个部分？为什么？', size=10.5, after=2)
    add_write_area(doc, lines=2, hint='写下你的改写版）
    add_p(doc, '', before=2, after=2)
    add_p(doc, 'Q2（渴望）：你希望一年后自己变成什么样？那时候的工作状态是什么样？', size=10.5, after=2)
    add_write_area(doc, lines=2)
    add_p(doc, '', before=2, after=2)
    add_p(doc, 'Q3（差距）：从现在的你到一年后的你，你觉得中间最难的是哪一步？', size=10.5, after=2)
    add_write_area(doc, lines=2)
    add_p(doc, '', before=2, after=2)
    add_pagebreak(doc)

    add_h2(doc, '3.4 发展计划（员工 + 管理者双向承诺）')

    add_h3(doc, '员工的承诺')
    add_p(doc, '员工会做的：', size=10.5, bold=True, color=COLOR_PRIMARY, after=2)
    add_write_area(doc, lines=3, hint='具体到 1-2 个动作+时间节奏）
    add_p(doc, '', before=2, after=2)
    add_p(doc, '员工承诺的时间节奏：', size=10.5, bold=True, color=COLOR_PRIMARY, after=2)
    add_checkbox_line(doc, '30 天后：________________________')
    add_checkbox_line(doc, '60 天后：________________________')
    add_checkbox_line(doc, '90 天后：________________________')
    add_p(doc, '', before=2, after=2)

    add_h3(doc, '管理者的承诺')
    add_p(doc, '我会做的：', size=10.5, bold=True, color=COLOR_PRIMARY, after=2)
    add_write_area(doc, lines=3, hint='具体到 1-2 个动作+时间节奏——管理者也要承诺）
    add_p(doc, '', before=2, after=2)
    add_p(doc, '我承诺的反馈节奏：', size=10.5, bold=True, color=COLOR_PRIMARY, after=2)
    add_checkbox_line(doc, '每周一次快速反馈')
    add_checkbox_line(doc, '每两周一次小回顾')
    add_checkbox_line(doc, '每月一次正式对谈')
    add_checkbox_line(doc, '季度一次完整复盘')
    add_p(doc, '', before=2, after=2)

    add_p(doc, '我承诺的资源支持：', size=10.5, bold=True, color=COLOR_PRIMARY, after=2)
    add_checkbox_line(doc, '培训预算')
    add_checkbox_line(doc, '外部课程 / 教练')
    add_checkbox_line(doc, '内部练手机会')
    add_checkbox_line(doc, '关键会议参与权')
    add_checkbox_line(doc, '其他：________________')
    add_p(doc, '', before=2, after=2)
    add_p(doc, '', before=2, after=2)
    add_pagebreak(doc)

    # ============== 第四区 ==============
    add_h1(doc, '第四区 · 四步面谈预演（关键词版）', color_bg=COLOR_LIGHT_PURPLE)
    add_p(doc, '本区是面谈预演的关键字版本——面谈时打印这一页做提词器用。', size=11, before=2, after=2, line=1.5)
    add_p(doc, '不写完整话术——只写关键词。完整话术放心里。', size=10.5, color=COLOR_MUTED, italic=True, after=4, line=1.5)
    add_p(doc, '', before=2, after=2)

    add_h2(doc, '4.1 第一步：共看事实（关键词）')
    add_p(doc, '目标：让员工先讲，员工先回顾这个周期里的事实。', size=10.5, italic=True, after=2)
    add_p(doc, '', before=2, after=2)
    add_p(doc, '  · 开场关键词：', size=10.5, bold=True, after=2)
    add_write_area(doc, lines=2, hint='"开始说结果之前" / "从你的角度" / "你最满意" 等关键词）
    add_p(doc, '', before=2, after=2)
    add_p(doc, '  · 我要忍住的动作：', size=10.5, bold=True, after=2)
    add_checkbox_line(doc, '忍住不等员工说完就接话')
    add_checkbox_line(doc, '忍住不解释我的标准')
    add_checkbox_line(doc, '忍住不纠正员工的"轻描淡写"')
    add_p(doc, '', before=2, after=2)
    add_p(doc, '  · 我要主动做：', size=10.5, bold=True, after=2)
    add_checkbox_line(doc, '把员工说的具体事实记下来')
    add_checkbox_line(doc, '在我的事实和员工的事实之间，识别共同点和差异')
    add_checkbox_line(doc, '用员工的话说我的事——做翻译')
    add_p(doc, '', before=2, after=2)
    add_quote(doc, '第一步的 80% 是忍住。忍住不抢话，忍住不评判，忍住不直接进入"问题清单"。')
    add_p(doc, '', before=2, after=2)
    add_pagebreak(doc)

    add_h2(doc, '4.2 第二步：探寻归因（关键词）')
    add_p(doc, '目标：共同探索"这些事实里，员工的人类贡献是什么"。', size=10.5, italic=True, after=2)
    add_p(doc, '', before=2, after=2)
    add_p(doc, '  · 开场关键词：', size=10.5, bold=True, after=2)
    add_write_area(doc, lines=2, hint='"你最满意" / "你的判断体现在" / "只有你才能做到" 等关键词）
    add_p(doc, '', before=2, after=2)
    add_p(doc, '  · 我要准备的问题关键词：', size=10.5, bold=True, after=2)
    add_write_area(doc, lines=3, hint='写下你准备用的话——具体到那句话）
    add_p(doc, '', before=2, after=2)
    add_p(doc, '  · 如果员工说"是 AI 做的"，我接的关键词：', size=10.5, bold=True, after=2)
    add_write_area(doc, lines=2)
    add_p(doc, '', before=2, after=2)
    add_callout(doc, 'AI 时代',
                '这一步至少 5-10 分钟。不要因为想"快点过去"而压缩。归因清晰是 AI 时代面谈的"必须项"。',
                style='ai')
    add_p(doc, '', before=2, after=2)
    add_pagebreak(doc)

    add_h2(doc, '4.3 第三步：分析缺口（关键词）')
    add_p(doc, '目标：识别员工的差距（技能/行为/认知/AI 协作），明确主要缺口。', size=10.5, italic=True, after=2)
    add_p(doc, '', before=2, after=2)
    add_p(doc, '  · 主要缺口的判断关键词：', size=10.5, bold=True, after=2)
    add_checkbox_line(doc, '这次没做到（行为问题）')
    add_checkbox_line(doc, '不知道怎么做（技能问题）')
    add_checkbox_line(doc, '理解有偏差（认知问题）')
    add_checkbox_line(doc, 'AI 协作能力不足（AI 时代新增）')
    add_p(doc, '', before=2, after=2)
    add_p(doc, '  · 我要避免的：', size=10.5, bold=True, after=2)
    add_checkbox_line(doc, '避免把"这次没做到"当能力问题')
    add_checkbox_line(doc, '避免把能力问题当"态度问题"')
    add_checkbox_line(doc, '避免用单一维度看差距（多维度看）')
    add_p(doc, '', before=2, after=2)
    add_p(doc, '  · 我准备这样表达：', size=10.5, bold=True, after=2)
    add_write_area(doc, lines=2, hint='把你准备说的话记下来——含开场 + 核心 + 收尾）
    add_p(doc, '', before=2, after=2)
    add_pagebreak(doc)

    add_h2(doc, '4.4 第四步：共建方向（关键词）')
    add_p(doc, '目标：双方共同规划"接下来怎么做"——员工先讲意愿，我再讲支持。', size=10.5, italic=True, after=2)
    add_p(doc, '', before=2, after=2)
    add_p(doc, '  · 开场关键词：', size=10.5, bold=True, after=2)
    add_write_area(doc, lines=2, hint='"你觉得可以怎么做" / "我们一起想" 等关键词）
    add_p(doc, '', before=2, after=2)
    add_p(doc, '  · 我要主动确认：', size=10.5, bold=True, after=2)
    add_checkbox_line(doc, '具体的下一步动作（不是意向）')
    add_checkbox_line(doc, '时间节点')
    add_checkbox_line(doc, '员工承诺的部分')
    add_checkbox_line(doc, '我承诺的部分（管理者也要承诺）')
    add_p(doc, '', before=2, after=2)
    add_p(doc, '  · 我要避免的：', size=10.5, bold=True, after=2)
    add_checkbox_line(doc, '避免变成我一个人讲')
    add_checkbox_line(doc, '避免只在嘴上说"加油"')
    add_checkbox_line(doc, '避免忘了写下来')
    add_p(doc, '', before=2, after=2)
    add_p(doc, '  · 收尾关键词：', size=10.5, bold=True, after=2)
    add_write_area(doc, lines=2, hint='"我会在 X 天后和你回顾" / "今天说的我整理成 3 行发给你" 等）
    add_p(doc, '', before=2, after=2)
    add_quote(doc, '共建方向不是"我命令你"，也不是"你自便"，是"我们一起决定"。
                员工先讲意愿，管理者再讲支持——顺序不能反。')
    add_p(doc, '', before=2, after=2)
    add_pagebreak(doc)

    add_h2(doc, '4.5 收尾（5 分钟）')
    add_p(doc, '面谈最后 5 分钟，做 3 件事：', size=11, bold=True, color=COLOR_PRIMARY, after=2, line=1.5)
    add_p(doc, '', before=2, after=2)
    add_checkbox_line(doc, '把面谈里说的具体下一步整理成 3-5 行，发给员工确认')
    add_checkbox_line(doc, '问员工："你还有什么想说的？"（关键的一问）')
    add_checkbox_line(doc, '明确下次见面/下次反馈的时间')
    add_p(doc, '', before=2, after=2)
    add_callout(doc, '提示',
                '"你还有什么想说的"是面谈里最有信息量的问题之一。这一问，员工说的最后一句话，往往藏着面谈真正的答案。',
                style='tip')
    add_p(doc, '', before=2, after=2)
    add_p(doc, '员工最后说的那句话（面谈时现场记）：', size=10.5, bold=True, color=COLOR_PRIMARY, after=2)
    add_write_area(doc, lines=3)
    add_p(doc, '', before=2, after=2)
    add_pagebreak(doc)

    # ---- 问责伙伴 ----
    add_h1(doc, '问责伙伴', color_bg=COLOR_LIGHT_GREEN)
    add_p(doc, '学习不追问，效果减半。', size=11, bold=True, color=COLOR_ACCENT, before=2, after=4, line=1.5)

    add_p(doc, '今天课后，请找一位问责伙伴——30 天后/60 天后/90 天后，会真问你的那个人。',
          size=11, before=2, after=4, line=1.5)
    add_p(doc, '问责伙伴 3 个标准：', size=10.5, after=2, line=1.5)
    add_checkbox_line(doc, '是同行（理解你工作里的难处）')
    add_checkbox_line(doc, '愿意直接告诉你他/她看到的')
    add_checkbox_line(doc, '会真问——不"点赞式"问责')
    add_p(doc, '', before=2, after=2)

    add_p(doc, '我的问责伙伴：__________________________', size=11, bold=True, color=COLOR_PRIMARY, after=2)
    add_p(doc, '联系方式：__________________________', size=10.5, after=2)
    add_p(doc, '', before=2, after=2)

    add_p(doc, '我们约定的问责时间：', size=11, bold=True, color=COLOR_PRIMARY, after=2)
    add_checkbox_line(doc, '30 天后（具体日期：__________）')
    add_checkbox_line(doc, '60 天后（具体日期：__________）')
    add_checkbox_line(doc, '90 天后（具体日期：__________）')
    add_p(doc, '', before=2, after=2)

    add_p(doc, '他/她要问我的 3 个问题：', size=10.5, bold=True, color=COLOR_PRIMARY, after=2)
    add_write_area(doc, lines=4, hint='提前写好——别到时候被问到没准备）
    add_p(doc, '', before=2, after=2)
    add_quote(doc, '学习不追问，效果减半；追问不记录，效果也减半。每次问责后写一次。')
