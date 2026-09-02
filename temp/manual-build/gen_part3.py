"""
第四部分：Part 2 工作空间（艰难面谈）
"""
import sys
sys.path.insert(0, r'D:\CC\temp\manual-build')

from docx import Document
from docx.shared import Pt, RGBColor, Cm
from docx.enum.text import WD_ALIGN_PARAGRAPH
from doc_helpers import *


def build_part4_part2(doc):
    """第四部分：Part 2 工作空间"""
    add_chapter_header(doc, '第四部分', 'Part 2：艰难面谈——说真话的技术',
                       'Hard Talks · The Art of Saying What Must Be Said')
    add_p(doc, '', before=4, after=4)

    # ---- 1. 艰难面谈的三类成因 ----
    add_h2(doc, '1. 艰难面谈的三类成因')
    add_p(doc, '面谈之所以"艰难"，根源不外乎这三类。', size=11, before=2, after=2, line=1.5)
    add_p(doc, '', before=2, after=2)

    add_h3(doc, '成因 A：管理者说不出口（情感负担）')
    add_p(doc, '特征：', size=10.5, bold=True, after=2)
    add_checkbox_line(doc, '担心对方情绪崩溃')
    add_checkbox_line(doc, '担心破坏关系')
    add_checkbox_line(doc, '担心被反扑')
    add_checkbox_line(doc, '担心自己也没想清楚')
    add_p(doc, '', before=2, after=2)
    add_p(doc, '我的具体表现：', size=10.5, bold=True, color=COLOR_PRIMARY, after=2)
    add_write_area(doc, lines=3, hint='当你说不出真话时，你具体用什么方式回避？')
    add_p(doc, '', before=2, after=2)

    add_h3(doc, '成因 B：员工不接（认知或态度差距）')
    add_p(doc, '特征：', size=10.5, bold=True, after=2)
    add_checkbox_line(doc, '员工不认同事实')
    add_checkbox_line(doc, '员工找外部归因')
    add_checkbox_line(doc, '员工表示"我知道了"但没改')
    add_checkbox_line(doc, '员工把问题推回给管理者')
    add_p(doc, '', before=2, after=2)
    add_p(doc, '我过去最印象深的一次：', size=10.5, bold=True, color=COLOR_PRIMARY, after=2)
    add_write_area(doc, lines=3, hint='记下那个具体的反应')
    add_p(doc, '', before=2, after=2)

    add_h3(doc, '成因 C：环境不支持（文化或流程限制）')
    add_p(doc, '特征：', size=10.5, bold=True, after=2)
    add_checkbox_line(doc, '时间紧，议程挤')
    add_checkbox_line(doc, '组织层级压制直说')
    add_checkbox_line(doc, 'HR 流程让真话无处安放')
    add_checkbox_line(doc, '团队文化偏回避')
    add_p(doc, '', before=2, after=2)
    add_p(doc, '最让我无奈的外部限制是：', size=10.5, bold=True, color=COLOR_PRIMARY, after=2)
    add_write_area(doc, lines=3, hint='具体到一个环节')
    add_p(doc, '', before=2, after=2)

    add_callout(doc, '提示',
                '三类的解法不同。管理者说不出口 → 学会技术；员工不接 → 学会结构；环境不支持 → 学会借力。混用这三类解法是最常见的错误。',
                style='tip')
    add_pagebreak(doc)

    # ---- 2. 我最常遇到的成因 ----
    add_h2(doc, '2. 我最常遇到的成因（自检）')
    add_p(doc, '看你的真实历史，你最常陷入的成因是哪一个？', size=11, before=2, after=4, line=1.5)

    add_h3(doc, '选择你过去 3 次艰难面谈，看主要成因')
    add_p(doc, '面谈 1：', size=10.5, bold=True, color=COLOR_PRIMARY, after=2)
    add_checkbox_line(doc, '主要成因是 A 管理者说不出口')
    add_checkbox_line(doc, '主要成因是 B 员工不接')
    add_checkbox_line(doc, '主要成因是 C 环境不支持')
    add_p(doc, '记一句：', size=10.5, after=2)
    add_write_area(doc, lines=2)
    add_p(doc, '', before=2, after=2)

    add_p(doc, '面谈 2：', size=10.5, bold=True, color=COLOR_PRIMARY, after=2)
    add_checkbox_line(doc, '主要成因是 A 管理者说不出口')
    add_checkbox_line(doc, '主要成因是 B 员工不接')
    add_checkbox_line(doc, '主要成因是 C 环境不支持')
    add_p(doc, '记一句：', size=10.5, after=2)
    add_write_area(doc, lines=2)
    add_p(doc, '', before=2, after=2)

    add_p(doc, '面谈 3：', size=10.5, bold=True, color=COLOR_PRIMARY, after=2)
    add_checkbox_line(doc, '主要成因是 A 管理者说不出口')
    add_checkbox_line(doc, '主要成因是 B 员工不接')
    add_checkbox_line(doc, '主要成因是 C 环境不支持')
    add_p(doc, '记一句：', size=10.5, after=2)
    add_write_area(doc, lines=2)
    add_p(doc, '', before=2, after=2)

    add_h3(doc, '我看到的最主要的模式')
    add_write_area(doc, lines=4, hint='三类成因里有共同的模式吗？比如你总是回避、员工总是反扑、或者你总是依赖 HR 流程？')
    add_p(doc, '', before=2, after=2)

    add_h3(doc, '针对自己的主因，准备的下一步具体动作')
    add_write_area(doc, lines=4, hint='具体到一个动作——比如"下次面谈前，我会准备 3 个事实来避免员工反扑"')
    add_pagebreak(doc)

    # ---- 3. 四原则详解 ----
    add_h2(doc, '3. 四原则详解（正面·全面·情面·事面）')

    # 原则 1：正面
    add_section_banner(doc, '原则 1 · 正面（Positive）', color=COLOR_GREEN)
    add_p(doc, '核心含义：', size=11, bold=True, after=2)
    add_write_area(doc, lines=3, hint='正面原则是什么？为什么要正面？什么是"看起来正面但本质负面"？')
    add_p(doc, '', before=2, after=2)

    add_p(doc, '话术对比（我写我的版本）：', size=11, bold=True, color=COLOR_PRIMARY, after=2)
    add_p(doc, 'A 版本（典型负面版本）：', size=10.5, after=2)
    add_write_area(doc, lines=2, hint='"你最近表现很差"——具体到一个员工、一个场景')
    add_p(doc, '', before=2, after=2)
    add_p(doc, 'B 版本（我的正面版本）：', size=10.5, after=2)
    add_write_area(doc, lines=2, hint='"在这个周期里，你有 X 做得很好，但 Y 这件事我们没达到"')
    add_p(doc, '', before=2, after=2)
    a_text = "A：" + chr(8220) + "你最近状态不对，邮件经常出错，客户都反馈了。"
    b_text = "B：" + chr(8220) + "在这个周期里，你在 3 月的客户拜访里表现得很专业。但 4 月以来的几封邮件我看下来，有些是复制粘贴的旧版本。你对这个怎么看？"
    add_callout(doc, '对比', a_text + '\n' + b_text, style='quote')
    add_p(doc, '', before=2, after=2)
    add_p(doc, '我在应用正面原则时，容易跳过的环节：', size=10.5, bold=True, color=COLOR_PRIMARY, after=2)
    add_write_area(doc, lines=3, hint='你是先给负面，还是真的先认可见？')
    add_p(doc, '', before=2, after=2)
    add_quote(doc, '正面原则不是"先夸后骂"，是"你看到的不只是他的问题，你看到的是他整个人"。')
    add_pagebreak(doc)

    # 原则 2：全面
    add_section_banner(doc, '原则 2 · 全面（Holistic）', color=COLOR_BLUE)
    add_p(doc, '核心含义：', size=11, bold=True, after=2)
    add_write_area(doc, lines=3, hint='全面原则是什么？为什么不能只看一件事？')
    add_p(doc, '', before=2, after=2)

    add_p(doc, '话术对比：', size=11, bold=True, color=COLOR_PRIMARY, after=2)
    add_p(doc, 'A 版本（局部看）：', size=10.5, after=2)
    add_write_area(doc, lines=2, hint='"你最近这个项目没达到目标"')
    add_p(doc, '', before=2, after=2)
    add_p(doc, 'B 版本（全面看）：', size=10.5, after=2)
    add_write_area(doc, lines=2, hint='"在这个周期里，我们一起看：业绩 / 协作 / 成长 / 你在 AI 时代的方向感"')
    add_p(doc, '', before=2, after=2)

    add_p(doc, '我在应用全面原则时，最难做到的是：', size=10.5, bold=True, color=COLOR_PRIMARY, after=2)
    add_write_area(doc, lines=3, hint='是忘了谈业绩之外？还是忘了谈发展？')
    add_p(doc, '', before=2, after=2)
    add_quote(doc, '全面原则里有一句更重要的"全"：是这次面谈覆盖员工今年一整年的状态，不只是这个周期。')
    add_pagebreak(doc)

    # 原则 3：情面
    add_section_banner(doc, '原则 3 · 情面（Empathic）', color=COLOR_PURPLE)
    add_p(doc, '核心含义：', size=11, bold=True, after=2)
    add_write_area(doc, lines=3, hint='情面原则是什么？为什么"对事不对人"是有问题的？')
    add_p(doc, '', before=2, after=2)

    add_p(doc, '话术对比：', size=11, bold=True, color=COLOR_PRIMARY, after=2)
    add_p(doc, 'A 版本（无情）：', size=10.5, after=2)
    add_write_area(doc, lines=2, hint='"这件事你没做到，这是事实，你自己的责任"')
    add_p(doc, '', before=2, after=2)
    add_p(doc, 'B 版本（有情）：', size=10.5, after=2)
    add_write_area(doc, lines=2, hint='"我想先听你说。你最近是不是有些事情让你分心了？我想先理解"')
    add_p(doc, '', before=2, after=2)

    add_p(doc, '我在应用情面原则时，最容易犯的错：', size=10.5, bold=True, color=COLOR_PRIMARY, after=2)
    add_write_area(doc, lines=3, hint='是为了追求"专业"而显得冷漠？还是为了保护对方反而没说真话？')
    add_p(doc, '', before=2, after=2)
    add_quote(doc, '对事不对人是句漂亮话。人在事情里，事也在人里。情面原则是要把"人"放回事情里。')
    add_pagebreak(doc)

    # 原则 4：事面
    add_section_banner(doc, '原则 4 · 事面（Substantive）', color=COLOR_WARM)
    add_p(doc, '核心含义：', size=11, bold=True, after=2)
    add_write_area(doc, lines=3, hint='事面原则是什么？为什么不能停在"我们谈谈感觉"？')
    add_p(doc, '', before=2, after=2)

    add_p(doc, '话术对比：', size=11, bold=True, color=COLOR_PRIMARY, after=2)
    add_p(doc, 'A 版本（浮于感觉）：', size=10.5, after=2)
    add_write_area(doc, lines=2, hint='"我感觉你最近不太投入，咱们聊聊吧"')
    add_p(doc, '', before=2, after=2)
    add_p(doc, 'B 版本（落到事）：', size=10.5, after=2)
    add_write_area(doc, lines=2, hint='"我说说具体的事：3 月这个项目的方案没有按时提交，4 月的两份报告里的分析数据有几个明显错误"')
    add_p(doc, '', before=2, after=2)

    add_p(doc, '我在应用事面原则时，最容易犯的错：', size=10.5, bold=True, color=COLOR_PRIMARY, after=2)
    add_write_area(doc, lines=3, hint='是只用"我感到"开头？还是绕到具体事上时却发现没有具体事实？')
    add_p(doc, '', before=2, after=2)

    add_callout(doc, 'AI 时代',
                'AI 时代的事面原则要求看到两层事实：产出事实 + 归因事实。没有归因维度，AI 时代的事面是不完整的。',
                style='ai')
    add_p(doc, '', before=2, after=2)
    add_p(doc, '在 AI 时代的情境里，我的事面准备清单：', size=10.5, bold=True, color=COLOR_PRIMARY, after=2)
    add_checkbox_line(doc, '对每个事实，写下产出层面（结果是什么）')
    add_checkbox_line(doc, '对每个事实，写下归因层面（员工的人类贡献是什么）')
    add_checkbox_line(doc, '准备好探寻归因的 1-2 个问题')
    add_checkbox_line(doc, '判断这个事实属于"AI 协作问题"还是"其他能力问题"')
    add_pagebreak(doc)

    # ---- 4. AI 时代五类艰难场景速查 ----
    add_h2(doc, '4. AI 时代五类艰难场景速查')
    add_p(doc, '在 AI 时代，艰难面谈出现了 5 类新场景。下面是速查表。', size=11, before=2, after=2, line=1.5)
    add_p(doc, '回想你自己有没有遇到过。', size=10, color=COLOR_MUTED, italic=True, after=4)
    add_p(doc, '', before=2, after=2)

    headers = ['场景', '具体表现', '员工最常说的', '我过去的应对', '更好的做法']
    rows = [
        ['AI 归因争议',
         '员工认为评分不公，因为成果主要靠 AI',
         '"这是 AI 写的，评 S 不公平"',
         '回避话题 / 凭印象评分',
         '先探寻归因：员工在流程里的人类判断点是什么'],
        ['能力漂移指控',
         '员工产出好但管理者担心能力在退化',
         '"结果好不就行了吗"',
         '只说担心，没具体证据',
         '举出具体退化点（独立判断的具体场景）'],
        ['方向迷失',
         '员工明显缺乏方向感，价值感低落',
         '"我不知道我在 AI 时代有什么用"',
         '给安慰，没给方向',
         '用双轨框架共同分析，不止给情绪安抚'],
        ['AI 工具使用分歧',
         '员工过度依赖或拒绝使用 AI 工具',
         '"我用 AI 不如手写准确"',
         '强制要求 / 听之任之',
         '分析这是技能问题、行为问题还是认知问题'],
        ['AI 伦理边界',
         '员工在 AI 使用上越过边界（数据隐私、抄袭）',
         '"我以为这是允许的"',
         '回避，怕破坏关系',
         '直接说"这件事不可接受"——先情后事，但事面要落地'],
    ]
    make_table(doc, headers, rows, col_widths=[2.5, 3.0, 3.0, 2.5, 6.0], body_size=9, row_height=1.0)
    add_p(doc, '', before=2, after=2)
    add_callout(doc, 'AI 时代',
                '五类场景里，每一类都对应一组"具体话术 + 具体动作"。讲师会带着你走一遍——别只听，记下你准备用的那句。',
                style='ai')
    add_pagebreak(doc)

    # ---- 5. 场景讨论活动记录 ----
    add_h2(doc, '5. 场景讨论活动记录')
    add_p(doc, '讲师会组织小组讨论 2-3 个具体场景。下面记录你从讨论中带走的。', size=10.5, before=2, after=4, line=1.5)

    add_section_banner(doc, '场景讨论 1', color=COLOR_PRIMARY)
    add_p(doc, '讨论的场景类型：', size=10.5, after=2)
    add_write_area(doc, lines=2, hint='具体到那个场景的核心冲突')
    add_p(doc, '', before=2, after=2)
    add_p(doc, '我们小组讨论的关键点：', size=10.5, bold=True, color=COLOR_PRIMARY, after=2)
    add_write_area(doc, lines=4, hint='3 个要点+一个具体动作')
    add_p(doc, '', before=2, after=2)
    add_p(doc, '我被反驳/被触动的点是：', size=10.5, bold=True, color=COLOR_PRIMARY, after=2)
    add_write_area(doc, lines=3, hint='不要写"有收获"——写具体')
    add_p(doc, '', before=2, after=2)

    add_section_banner(doc, '场景讨论 2', color=COLOR_PRIMARY)
    add_p(doc, '讨论的场景类型：', size=10.5, after=2)
    add_write_area(doc, lines=2)
    add_p(doc, '', before=2, after=2)
    add_p(doc, '我们小组讨论的关键点：', size=10.5, bold=True, color=COLOR_PRIMARY, after=2)
    add_write_area(doc, lines=4)
    add_p(doc, '', before=2, after=2)
    add_p(doc, '我被反驳/被触动的点是：', size=10.5, bold=True, color=COLOR_PRIMARY, after=2)
    add_write_area(doc, lines=3)
    add_p(doc, '', before=2, after=2)

    add_h3(doc, '我的整体收获（综合两轮讨论）')
    add_p(doc, '我对四原则（正面/全面/情面/事面）的新理解是：', size=10.5, bold=True, color=COLOR_PRIMARY, after=2)
    add_write_area(doc, lines=4, hint='不要写"理解更深了"——写一个具体的修正')
    add_p(doc, '', before=2, after=2)
    add_p(doc, '我对 AI 时代新场景的新理解是：', size=10.5, bold=True, color=COLOR_PRIMARY, after=2)
    add_write_area(doc, lines=4, hint='具体到一种具体的判断或动作）
    add_pagebreak(doc)

    # ---- 6. 角色扮演记录（2 轮） ----
    add_h2(doc, '6. 角色扮演记录（2 轮）')
    add_p(doc, '讲师会组织 2 轮艰难面谈的角色扮演。下面按轮次记录。', size=10.5, before=2, after=4, line=1.5)

    add_section_banner(doc, '第一轮', color=COLOR_WARM)
    add_p(doc, '我扮演的角色：', size=10.5, after=2)
    add_checkbox_line(doc, '我扮演管理者')
    add_checkbox_line(doc, '我扮演员工')
    add_p(doc, '', before=2, after=2)
    add_p(doc, '场景：', size=10.5, bold=True, color=COLOR_PRIMARY, after=2)
    add_write_area(doc, lines=2, hint='是哪一类场景？核心冲突是什么？')
    add_p(doc, '', before=2, after=2)
    add_p(doc, '我作为管理者（或员工）最难做到的是：', size=10.5, bold=True, color=COLOR_PRIMARY, after=2)
    add_write_area(doc, lines=4, hint='具体到一个动作或瞬间）
    add_p(doc, '', before=2, after=2)
    add_p(doc, '伙伴/观察者的反馈：', size=10.5, bold=True, color=COLOR_PRIMARY, after=2)
    add_write_area(doc, lines=4, hint='原话记下）
    add_p(doc, '', before=2, after=2)
    add_p(doc, '我接下来要调整的一个动作：', size=10.5, bold=True, color=COLOR_PRIMARY, after=2)
    add_write_area(doc, lines=2, hint='具体到一个动作）
    add_pagebreak(doc)

    add_section_banner(doc, '第二轮', color=COLOR_WARM)
    add_p(doc, '我扮演的角色：', size=10.5, after=2)
    add_checkbox_line(doc, '我扮演管理者')
    add_checkbox_line(doc, '我扮演员工')
    add_p(doc, '', before=2, after=2)
    add_p(doc, '场景：', size=10.5, bold=True, color=COLOR_PRIMARY, after=2)
    add_write_area(doc, lines=2)
    add_p(doc, '', before=2, after=2)
    add_p(doc, '我作为管理者（或员工）最难做到的是：', size=10.5, bold=True, color=COLOR_PRIMARY, after=2)
    add_write_area(doc, lines=4)
    add_p(doc, '', before=2, after=2)
    add_p(doc, '伙伴/观察者的反馈：', size=10.5, bold=True, color=COLOR_PRIMARY, after=2)
    add_write_area(doc, lines=4)
    add_p(doc, '', before=2, after=2)
    add_p(doc, '我接下来要调整的一个动作：', size=10.5, bold=True, color=COLOR_PRIMARY, after=2)
    add_write_area(doc, lines=2)
    add_pagebreak(doc)

    # ---- 7. AI 时代品行问题笔记 ----
    add_h2(doc, '7. AI 时代品行问题笔记')
    add_p(doc, '有一类场景需要单独拿出来：AI 时代品行（边界）问题。', size=11, bold=True, color=COLOR_ACCENT, before=2, after=4, line=1.5)

    add_h3(doc, '品行问题（AI 时代）的常见类型')
    add_checkbox_line(doc, '用 AI 写了报告后冒充自己写的')
    add_checkbox_line(doc, '上传客户敏感数据给 AI')
    add_checkbox_line(doc, '用 AI 生成的方案参与投标后没披露')
    add_checkbox_line(doc, '用 AI 取代自己考核下属）
    add_p(doc, '', before=2, after=2)

    add_h3(doc, '我的看法（讲完后写）')
    add_p(doc, '品行问题和其他问题的根本区别是：', size=10.5, bold=True, color=COLOR_PRIMARY, after=2)
    add_write_area(doc, lines=3, hint='不是能力问题、不是意愿问题、不是认识问题——是选择问题）
    add_p(doc, '', before=2, after=2)

    add_p(doc, '在面谈里碰到品行问题，我的第一反应是：', size=10.5, bold=True, color=COLOR_PRIMARY, after=2)
    add_write_area(doc, lines=3, hint='写自己的本能反应——这往往是要改的地方）
    add_p(doc, '', before=2, after=2)

    add_p(doc, '面谈后我应该做的事是：', size=10.5, bold=True, color=COLOR_PRIMARY, after=2)
    add_write_area(doc, lines=3, hint='面谈里说清楚 + 面谈后记录 + 该上报的上报）
    add_p(doc, '', before=2, after=2)

    add_callout(doc, '警示',
                '品行问题不能用"我感到……"开头。必须用"这件事不可接受"开头。先情后事，但事面要落地。',
                style='warn')
    add_p(doc, '', before=2, after=2)
    add_quote(doc, '能力问题慢病慢治，行为问题建机制，认知问题对齐共识，品行问题划线。')
