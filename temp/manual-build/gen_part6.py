"""
第七部分：工具索引
"""
import sys
sys.path.insert(0, r'D:\CC\temp\manual-build')

from docx import Document
from docx.shared import Pt, RGBColor, Cm
from docx.enum.text import WD_ALIGN_PARAGRAPH
from doc_helpers import *


def build_part7_tools(doc):
    """第七部分：工具索引"""
    add_chapter_header(doc, '第七部分', '工具索引',
                       'Tool Index · 11 个工具随用随查')
    add_p(doc, '', before=4, after=4)

    add_p(doc, '本部分收录全天课程提到的 11 个工具/模型/清单。面谈前 1-2 小时、面谈中遇到具体困难、面谈后复盘，都可以快速翻到这里。',
          size=11, before=2, after=4, line=1.5)
    add_p(doc, '', before=2, after=2)

    add_p(doc, '工具索引：', size=11, bold=True, color=COLOR_PRIMARY, after=2)
    add_p(doc, '  工具 1  八个失效场景识别卡', 'Microsoft YaHei', size=10.5, after=2)
    add_p(doc, '  工具 2  面谈前 5 个前提条件', size=10.5, after=2)
    add_p(doc, '  工具 3  四步面谈法（核心）', size=10.5, after=2)
    add_p(doc, '  工具 4  探寻归因 4 个参考问题', size=10.5, after=2)
    add_p(doc, '  工具 5  三个缺口层次 + AI 时代新增第四层', size=10.5, after=2)
    add_p(doc, '  工具 6  艰难面谈四原则（正面·全面·情面·事面）', size=10.5, after=2)
    add_p(doc, '  工具 7  AI 时代五类艰难场景速查', size=10.5, after=2)
    add_p(doc, '  工具 8  双轨胜任度框架', size=10.5, after=2)
    add_p(doc, '  工具 9  发展对话 3 个启动问题', size=10.5, after=2)
    add_p(doc, '  工具 10  课前一周倒计时（D-7 到 D-Day）', size=10.5, after=2)
    add_p(doc, '  工具 11  下次面谈准备清单（核心交付物，4 大区）', size=10.5, after=2)
    add_p(doc, '', before=4, after=2)
    add_pagebreak(doc)

    # 工具 1
    add_h2(doc, '工具 1 · 八个失效场景识别卡')
    add_p(doc, '用途：开场模块识别自己的"痛点场景"。', size=10.5, after=2, italic=True, color=COLOR_MUTED)
    add_p(doc, '', before=2, after=2)
    add_h4(doc, '5 个经典场景：')
    add_checkbox_line(doc, '走过场')
    add_checkbox_line(doc, '争论评分')
    add_checkbox_line(doc, '推了又推')
    add_checkbox_line(doc, '只谈业绩')
    add_checkbox_line(doc, '发展剩 5 分钟')
    add_p(doc, '', before=2, after=2)
    add_h4(doc, '3 个 AI 时代新场景：')
    add_checkbox_line(doc, 'AI 归因争议')
    add_checkbox_line(doc, '方向迷失')
    add_checkbox_line(doc, '产出与能力不匹配')
    add_p(doc, '', before=2, after=2)
    add_quote(doc, '使用方式：讲师发放 8 张卡。标记你"经历过"和"最怕遇到"的卡号。')
    add_pagebreak(doc)

    # 工具 2
    add_h2(doc, '工具 2 · 面谈前 5 个前提条件')
    add_p(doc, '用途：面谈前自检清单。', size=10.5, after=2, italic=True, color=COLOR_MUTED)
    add_p(doc, '', before=2, after=2)
    add_checkbox_line(doc, '时机恰当（面谈前 1-2 周通知员工）')
    add_checkbox_line(doc, '信息充分（管理者准备好 3-5 个具体事实）')
    add_checkbox_line(doc, '心理准备（员工有时间准备自己的视角）')
    add_checkbox_line(doc, '关系基础（不是"等面谈到了再谈关系"）')
    add_checkbox_line(doc, 'AI 时代新增：归因清晰（做好归因预判）')
    add_p(doc, '', before=2, after=2)
    add_quote(doc, '5 个前提条件里缺任何一个，面谈就建在沙子上。')
    add_pagebreak(doc)

    # 工具 3
    add_h2(doc, '工具 3 · 四步面谈法（核心）')
    add_p(doc, '用途：面谈的对话结构。', size=10.5, after=2, italic=True, color=COLOR_MUTED)
    add_p(doc, '', before=2, after=2)

    headers = ['步骤', '目标', '关键动作', 'AI 时代特别提示']
    rows = [
        ['① 共看事实', '让员工先讲', '忍住不抢话、用员工的话翻译', '包括 AI 协作下的"事实"'],
        ['② 探寻归因', '看清员工的人类贡献', '4 个参考问题，不抢答', 'AI 时代的关键步骤'],
        ['③ 分析缺口', '识别技能/行为/认知/AI 协作', '分清"这次没做到"与"能力问题"', 'AI 协作缺口是新增层次'],
        ['④ 共建方向', '双方共同规划', '员工先讲意愿，我讲支持', '方向感是核心，新增"时代感"'],
    ]
    make_table(doc, headers, rows, col_widths=[2.5, 4.0, 5.0, 5.5], body_size=10, row_height=1.0)
    add_p(doc, '', before=2, after=2)
    add_quote(doc, '四步不是 4 个独立的技巧，是 1 个连贯的对话流。跳步、急转弯、只走前两步就走完，是常见错误。')
    add_pagebreak(doc)

    # 工具 4
    add_h2(doc, '工具 4 · 探寻归因 4 个参考问题')
    add_p(doc, '用途：第二步"探寻归因"里，4 个备选开场问题。', size=10.5, after=2, italic=True, color=COLOR_MUTED)
    add_p(doc, '', before=2, after=2)
    add_p(doc, 'Q1：在你完成的这些成果里，你最满意的是哪个？你的核心判断体现在哪里？', size=10.5, after=4)
    add_p(doc, 'Q2：这个项目的结果很好，你觉得什么是只有你才能做到的部分？', size=10.5, after=4)
    add_p(doc, 'Q3：如果让你向一个新同事介绍这个项目"我是怎么做的"，你会怎么讲？', size=10.5, after=4)
    add_p(doc, 'Q4：在你和 AI 工具合作的过程里，你觉得哪个环节是它做不到的、必须你来判断的？', size=10.5, after=4)
    add_p(doc, '', before=2, after=2)
    add_callout(doc, '提示',
                '4 个问题里选 1 个最适合的。也可以根据你的员工改写。关键是——别急着下定论。',
                style='tip')
    add_p(doc, '', before=2, after=2)
    add_quote(doc, '4 个问题的共同精神："我们一起看清你的贡献，不是你向我证明"——这是关键。')
    add_pagebreak(doc)

    # 工具 5
    add_h2(doc, '工具 5 · 三个缺口层次 + AI 时代新增第四层')
    add_p(doc, '用途：第三步"分析缺口"时识别主要缺口。', size=10.5, after=2, italic=True, color=COLOR_MUTED)
    add_p(doc, '', before=2, after=2)

    headers = ['缺口层次', '特征', '处理方式']
    rows = [
        ['技能缺口', '不会做', '培训、学习、辅导'],
        ['行为缺口', '知道但没做', '建立机制、增加反馈、明确期望'],
        ['认知缺口', '理解偏差', '对齐认知、举具体例子'],
        ['AI 工具协作缺口（AI 时代新增）', '该用没用 / 用了没判断 / 过度依赖', '工具培训 + 协作方法训练'],
    ]
    make_table(doc, headers, rows, col_widths=[3.5, 5.0, 8.5], body_size=10, row_height=1.0)
    add_p(doc, '', before=2, after=2)
    add_quote(doc, '层次混了，发展计划就垮了。把"这次没做到"当"能力问题"是不公平的；把"能力问题"当"这次没做到"是没尽到管理责任。')
    add_pagebreak(doc)

    # 工具 6
    add_h2(doc, '工具 6 · 艰难面谈四原则（正面·全面·情面·事面）')
    add_p(doc, '用途：面谈遇困难时回到这 4 个原则做自检。', size=10.5, after=2, italic=True, color=COLOR_MUTED)
    add_p(doc, '', before=2, after=2)

    add_section_banner(doc, '正面（Positive）', color=COLOR_GREEN)
    add_p(doc, '我看到的不只是他的问题，我看到的是他整个人。', size=10.5, italic=True, after=2)
    add_p(doc, '  · 关键问法：他能做什么？他做了什么好的？', size=10.5, after=2)
    add_p(doc, '', before=2, after=2)

    add_section_banner(doc, '全面（Holistic）', color=COLOR_BLUE)
    add_p(doc, '不止看这件事——看员工这个周期、这一年、未来 3 年的状态。', size=10.5, italic=True, after=2)
    add_p(doc, '  · 关键问法：在这件事之外，还有什么？', size=10.5, after=2)
    add_p(doc, '', before=2, after=2)

    add_section_banner(doc, '情面（Empathic）', color=COLOR_PURPLE)
    add_p(doc, '人在事情里，事也在人里。把"人"放回事情里。', size=10.5, italic=True, after=2)
    add_p(doc, '  · 关键问法：他现在什么状态？他感受到了什么？', size=10.5, after=2)
    add_p(doc, '', before=2, after=2)

    add_section_banner(doc, '事面（Substantive）', color=COLOR_WARM)
    add_p(doc, '落到具体事——AI 时代还要落到归因事实。', size=10.5, italic=True, after=2)
    add_p(doc, '  · 关键问法：具体是哪件事？具体到哪一步？', size=10.5, after=2)
    add_p(doc, '', before=2, after=2)
    add_quote(doc, '四原则是艰难面谈的"安全网"。你只要在面谈里一直问自己："我有没有正 / 全 / 情 / 事？"——你已经超过了 80% 的管理者。')
    add_pagebreak(doc)

    # 工具 7
    add_h2(doc, '工具 7 · AI 时代五类艰难场景速查')
    add_p(doc, '用途：AI 时代的"难谈场景"速查。', size=10.5, after=2, italic=True, color=COLOR_MUTED)
    add_p(doc, '', before=2, after=2)

    headers = ['场景', '员工最常说的', '我准备这样接']
    rows = [
        ['AI 归因争议', '"这是 AI 写的，评 S 不公平"', '先探寻归因——员工在流程里的人类判断点'],
        ['能力漂移指控', '"结果好不就行了吗"', '举出具体退化点（独立判断的具体场景）'],
        ['方向迷失', '"我不知道我在 AI 时代有什么用"', '用双轨框架共同分析'],
        ['AI 工具使用分歧', '"我用 AI 不如手写准确"', '分析这是技能/行为/认知哪一类问题'],
        ['AI 伦理边界', '"我以为这是允许的"', '先情后事，事面要落地——"这件事不可接受"'],
    ]
    make_table(doc, headers, rows, col_widths=[3.0, 4.5, 9.5], body_size=9.5, row_height=1.0)
    add_p(doc, '', before=2, after=2)
    add_quote(doc, '五类场景里，每一类都对应"具体话术 + 具体动作"。面谈前可以先查一次。')
    add_pagebreak(doc)

    # 工具 8
    add_h2(doc, '工具 8 · 双轨胜任度框架')
    add_p(doc, '用途：发展面谈的核心分析框架。', size=10.5, after=2, italic=True, color=COLOR_MUTED)
    add_p(doc, '', before=2, after=2)

    add_section_banner(doc, '轨道 A：当前岗位胜任度', color=COLOR_BLUE)
    add_p(doc, '  · 本岗位专业能力', size=10.5, after=2)
    add_p(doc, '  · 业绩达成', size=10.5, after=2)
    add_p(doc, '  · 协作 / 沟通', size=10.5, after=2)
    add_p(doc, '  · 问题解决', size=10.5, after=2)
    add_p(doc, '  · 自我管理', size=10.5, after=4)

    add_section_banner(doc, '轨道 B：时代需要胜任度（AI 时代）', color=COLOR_PURPLE)
    add_p(doc, '  · AI 工具协作能力', size=10.5, after=2)
    add_p(doc, '  · 复杂问题分析能力（AI 替代不了）', size=10.5, after=2)
    add_p(doc, '  · 判断和决策能力（AI 替代不了）', size=10.5, after=2)
    add_p(doc, '  · 学习迁移能力（在新环境里快速学会）', size=10.5, after=2)
    add_p(doc, '  · 意义建构能力（在变化里找到位置）', size=10.5, after=4)
    add_p(doc, '', before=2, after=2)

    add_callout(doc, 'AI 时代',
                'AI 时代之前，管理者只看轨道 A。AI 时代之后，轨道 B 不再是"加分项"——是"必须项"。',
                style='ai')
    add_p(doc, '', before=2, after=2)
    add_quote(doc, '两条腿都要走。任何一条成为短板，员工的未来就站不稳。')
    add_pagebreak(doc)

    # 工具 9
    add_h2(doc, '工具 9 · 发展对话 3 个启动问题')
    add_p(doc, '用途：发展对话的开场模板。', size=10.5, after=2, italic=True, color=COLOR_MUTED)
    add_p(doc, '', before=2, after=2)
    add_p(doc, '顺序：现状 → 渴望 → 差距。从"我能做什么"到"我想变成什么"再到"中间缺什么"。', size=10.5, bold=True, color=COLOR_PRIMARY, after=4)
    add_p(doc, '', before=2, after=2)

    add_p(doc, 'Q1（现状）：你觉得自己现在做得最让自己满意的是哪个部分？为什么？', size=11, bold=True, after=2)
    add_p(doc, '  · 目的：让员工自己看到自己——是"探索"而非"评估"', size=10, italic=True, color=COLOR_MUTED, after=2)
    add_p(doc, '', before=2, after=2)

    add_p(doc, 'Q2（渴望）：你希望一年后自己变成什么样？那时候的工作状态是什么样？', size=11, bold=True, after=2)
    add_p(doc, '  · 目的：让员工看到自己的渴望——这是发展的源动力', size=10, italic=True, color=COLOR_MUTED, after=2)
    add_p(doc, '', before=2, after=2)

    add_p(doc, 'Q3（差距）：从现在的你到一年后的你，你觉得中间最难的是哪一步？', size=11, bold=True, after=2)
    add_p(doc, '  · 目的：让员工自己识别自己的最大障碍——发展对话的入口', size=10, italic=True, color=COLOR_MUTED, after=2)
    add_p(doc, '', before=2, after=2)

    add_callout(doc, '提示',
                '3 个问题顺序不能换。现状 → 渴望 → 差距。从"能做什么"开始，到"想变成什么"，再到"中间缺什么"。',
                style='tip')
    add_pagebreak(doc)

    # 工具 10
    add_h2(doc, '工具 10 · 课前一周倒计时（D-7 到 D-Day）')
    add_p(doc, '用途：面谈前 1 周准备节奏。', size=10.5, after=2, italic=True, color=COLOR_MUTED)
    add_p(doc, '', before=2, after=2)

    headers = ['倒计时', '任务', '完成打勾']
    rows = [
        ['D-7', '通知员工面谈时间和大致方向', '☐'],
        ['D-6', '回顾 3-5 个关键事实（具体事件）', '☐'],
        ['D-5', '对每个事实做归因预判', '☐'],
        ['D-4', '识别主要绩效缺口（4 个层次）', '☐'],
        ['D-3', '预判可能困难，准备四原则应对', '☐'],
        ['D-2', '用双轨框架分析发展方向', '☐'],
        ['D-1', '完成"下次面谈准备清单"4 区', '☐'],
        ['D-Day', '找问责伙伴配对，约定回顾时间', '☐'],
    ]
    make_table(doc, headers, rows, col_widths=[1.8, 11.7, 2.0], body_size=10, row_height=0.8)
    add_p(doc, '', before=2, after=2)
    add_callout(doc, '提示',
                '面谈前 1-2 周告知员工是"面谈能做对"的前提之一。突然袭击式面谈，员工进入的是防御模式，不是反思模式。',
                style='tip')
    add_pagebreak(doc)

    # 工具 11
    add_h2(doc, '工具 11 · 下次面谈准备清单（核心交付物，4 大区）')
    add_p(doc, '用途：这是你下周一就要用的工具。', size=10.5, after=2, italic=True, color=COLOR_MUTED)
    add_p(doc, '', before=2, after=2)

    add_section_banner(doc, '第一区 · 事实与归因准备', color=COLOR_BLUE)
    add_p(doc, '  · 1.1 关键事实清单（3-5 个）', size=10.5, after=2)
    add_p(doc, '  · 1.2 归因预判（AI 时代关键）', size=10.5, after=2)
    add_p(doc, '  · 1.3 第一步"共看事实"的 3 个开场问题', size=10.5, after=2)
    add_p(doc, '  · 1.4 第二步"探寻归因"的 2 个问题', size=10.5, after=4)

    add_section_banner(doc, '第二区 · 预估难点与准备', color=COLOR_WARM)
    add_p(doc, '  · 2.1 预估的 3 个难点', size=10.5, after=2)
    add_p(doc, '  · 2.2 准备的话术（4 个常见场景）', size=10.5, after=4)

    add_section_banner(doc, '第三区 · 发展对话规划', color=COLOR_GREEN)
    add_p(doc, '  · 3.1 双轨现状摘要', size=10.5, after=2)
    add_p(doc, '  · 3.2 1 个核心方向（用一句话）', size=10.5, after=2)
    add_p(doc, '  · 3.3 3 个启动问题', size=10.5, after=2)
    add_p(doc, '  · 3.4 发展计划（员工 + 管理者双向承诺）', size=10.5, after=4)

    add_section_banner(doc, '第四区 · 四步面谈预演（关键词版）', color=COLOR_PURPLE)
    add_p(doc, '  · 4.1 第一步 共看事实（关键词）', size=10.5, after=2)
    add_p(doc, '  · 4.2 第二步 探寻归因（关键词）', size=10.5, after=2)
    add_p(doc, '  · 4.3 第三步 分析缺口（关键词）', size=10.5, after=2)
    add_p(doc, '  · 4.4 第四步 共建方向（关键词）', size=10.5, after=2)
    add_p(doc, '  · 4.5 收尾（5 分钟）', size=10.5, after=4)
    add_p(doc, '', before=2, after=2)

    add_p(doc, '完整 4 区详见 第六部分。', size=10.5, bold=True, color=COLOR_PRIMARY, after=2)
    add_quote(doc, '这一份清单是你走出教室时唯一要带的东西。其他都是知识，这是工具。')
