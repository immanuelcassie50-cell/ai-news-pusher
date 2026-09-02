#!/usr/bin/env python3
"""
Build 21-Forms Workbook for AI时代经验传承-岗位手册批量开发工作坊
Using XML-based approach (no openpyxl for writing)
"""
import os
import zipfile
import shutil

WORK_DIR = r'D:\CC\temp\xlsx_work_21forms'
OUTPUT_PATH = r'D:\新课开发\经验萃取\手册\完整手册\完整课程包\06_全流程工具表单\A1_配套表单集_空白版.xlsx'
os.makedirs(os.path.dirname(OUTPUT_PATH), exist_ok=True)

# ===== SHEET NAMES =====
SHEET_NAMES = [
    "目录",
    "Form0-课前准备检查表",
    "Form1-手册类型判断",
    "Form2-课题定位表",
    "Form3-访谈准备清单",
    "Form4-A角色访谈记录",
    "Form5-B角色访谈记录",
    "Form6-C角色访谈记录",
    "Form7-操作手册素材整理",
    "Form8-带教手册素材整理",
    "Form9-应知应会素材整理",
    "Form10-提交前三检查",
    "Form11-初稿速览检查",
    "Form12-A角色审阅记录",
    "Form13-B角色审阅记录",
    "Form14-C角色审阅记录",
    "Form15-优先级排序汇总",
    "Form16-操作手册校验清单",
    "Form17-带教手册校验清单",
    "Form18-应知应会校验清单",
    "Form19-五步优化工作表",
    "Form20-跨手册交叉审阅",
    "Form21-课后迭代计划表",
]

# ===== HELPER: shared strings builder =====
def escape_xml(s):
    return s.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;').replace('"', '&quot;')

# ===== BUILD SHARED STRINGS =====
# All text content for the entire workbook
SHARED_STRINGS = [
    # 0-10: General headers
    "AI时代经验传承：岗位手册批量开发工作坊",
    "配套表单集（空白版）",
    "编号",
    "表单名称",
    "使用阶段",
    "主要填写人",
    "说明",
    "使用时机",
    "谁来填",
    "填完怎么用",
    "页码",

    # 11-30: Index content
    "课前准备清单",
    "工作坊开始前",
    "全体学员",
    "手册类型判断表",
    "第一天上午",
    "全组讨论",
    "课题定位表",
    "三类人群确认",
    "访谈准备清单",
    "访谈开始前",
    "访谈组织者",
    "角色A访谈记录表",
    "角色B访谈记录表",
    "角色C访谈记录表",
    "第一天下午",
    "角色本人或访谈者",
    "操作手册材料组织表",
    "带教手册材料组织表",
    "应知应会手册材料组织表",
    "小组协作",
    "第一天下午末",

    # 31-50: More index
    "Skill提交前三检查",
    "提交Skill前",
    "素材整理负责人",
    "初稿速览检查",
    "收到初稿后",
    "小组协作（初稿）",
    "角色A初稿标记记录表",
    "第二天上午",
    "角色A",
    "角色B初稿标记记录表",
    "角色B",
    "角色C初稿标记记录表",
    "角色C",
    "优先级排序汇总表",
    "第二天上午末",
    "全组汇总",
    "操作手册深度校验清单",
    "带教手册深度校验清单",
    "应知应会手册深度校验清单",
    "第二天上午",
    "五步优化工作表",
    "第二天下午",
    "手册负责人",
    "跨手册交叉审阅表",
    "评审双方",
    "课后迭代计划表",
    "工作坊收尾",
    "课题负责人",

    # ===== Form 0: 课前准备检查表 =====
    "Form0-课前准备检查表",
    "使用说明",
    "工作坊正式开始前，逐项确认。全部勾选后，代表你的课题已经具备开始条件。未完成项需在第一天上午前补齐。",
    "课题基本信息",
    "我准备开发的手册课题（初步想法，可以在定位阶段调整）：",
    "材料准备",
    "准备项",
    "是否就绪",
    "备注",
    "确定了课题相关的三类人群（角色A/B/C各有具体人选）",
    "□ 是  □ 否",
    "角色A人选已知情并愿意参与访谈",
    "人名：",
    "角色B人选已知情并愿意参与访谈",
    "角色C人选已知情并愿意参与访谈",
    "与课题相关的现有操作规程（如有，带来或存在手机里）",
    "□ 有，已带  □ 无",
    "与课题相关的现有制度文件（如有）",
    "□ 有，已带  □ 无",
    "与课题相关的现有培训课件（如有）",
    "□ 有，已带  □ 无",
    "与课题相关的现有表单样本（如有）",
    "录音设备可用（手机录音功能已测试）",
    "语音转文字工具已准备好（微信输入法/讯飞语记/剪映等均可）",
    "用哪个：",
    "心理准备",
    "这次工作坊结束时，我希望带走的东西是：",
    "我预判这个课题在开发过程中最可能遇到的困难是：",

    # ===== Form 1: 手册类型判断表 =====
    "Form1-手册类型判断表",
    "使用说明",
    "第一天上午，三类人群小组讨论，用这张表辅助确认本次课题应该开发哪类手册。逐项回答后，综合判断选择类型。",
    "课题描述（一句话说清楚：什么岗位、什么方面的经验）：",
    "核心判断问题",
    "判断问题",
    "你的答案",
    "这本手册的主要目标读者是谁？",
    "读者拿到这本手册，最主要的使用场景是什么？",
    "读者使用时，主要需要"知道怎么做"还是"知道是什么/有什么"？",
    "这本手册主要帮助读者"自己操作"还是"带别人操作"？",
    "读者是在做一件具体任务时翻，还是入职初期整体了解岗位时翻？",
    "类型特征对照",
    "手册类型",
    "核心特征",
    "主要受益人",
    "使用时机",
    "操作手册",
    "一步一步告诉你怎么做对一件事",
    "执行者本人",
    "需要做这件事的时候翻",
    "带教手册",
    "告诉带教人怎么教新人，分阶段推进",
    "带教人",
    "带新人的每个阶段翻",
    "应知应会手册",
    "帮新人快速建立对岗位的整体认知",
    "新入职员工",
    "入职初期，全面了解时翻",
    "判断结论",
    "本次课题应该开发的手册类型：",
    "□ 操作手册　　□ 带教手册　　□ 应知应会手册",
    "判断理由（一两句话说明）：",
    "三类人群确认签字",
    "角色A（读者代表）签字/确认",
    "角色B（经验代表）签字/确认",
    "角色C（管理者代表）签字/确认",

    # ===== Form 2: 课题定位表 =====
    "Form2-课题定位表",
    "使用说明",
    "第一天上午，三类人群共同讨论并填写。这是整个手册开发的起点——定位表确认之前，不要开始准备素材。填写完成后，三类人群各自确认，有异议当场讨论修改。",
    "手册基本信息",
    "手册名称（暂定）：",
    "手册类型（已在表1确认）：□ 操作手册　□ 带教手册　□ 应知应会手册",
    "课题负责人：",
    "五要素填写",
    "要素一：目标场景",
    "这本手册覆盖哪些具体工作情境（能用"当……的时候"描述出来的情境）？",
    "场景一：",
    "场景二：",
    "场景三：",
    "场景四（如有）：",
    "检查标准：每个场景描述能具体到"在什么时间、在什么地点、做什么事情"。如果只能写出"负责XX工作"，说明还不够具体。",
    "要素二：目标人群",
    "目标读者是谁（具体描述，不是宽泛的职位名称）？",
    "读者的基础：他们已经知道什么、已经会什么？",
    "读者的缺口：他们最不知道什么、最容易犯什么错？",
    "检查标准：能否同时描述出"基础"和"缺口"。如果只写了"新员工"，说明还不够具体。",
    "要素三：核心问题",
    "这本手册要帮读者解决哪3-5个关键问题（来自角色A的真实困惑，不是你认为他"应该了解"的知识）？",
    "问题一：",
    "问题二：",
    "问题三：",
    "问题四（如有）：",
    "问题五（如有）：",
    "检查标准：这些问题是角色A在访谈中说出来的真实困惑，还是你替他推断的"应该知道"？",
    "要素四：预期效果",
    "读者用完这本手册之后，行为上应该发生什么变化（能独立做到什么，以前不会但现在会的）？",
    "检查标准：能否用"能在……情况下，独立完成……，并达到……标准"的句式描述出来。",
    "要素五：颗粒度说明",
    "（仅操作手册填写）每个操作单元的颗粒度：这本手册里每一步操作，细到什么程度？",
    "（仅带教手册填写）带教阶段划分：共分几个阶段，每阶段时间范围和阶段目标？",
    "（仅应知应会手册填写）认知地图边界：这本手册覆盖到什么程度？新人看完这本，接下来还需要通过哪些渠道深化？",
    "三类人群交叉确认",
    "请三类人群各自看一遍定位表，确认后签字。有异议先讨论修改，修改后再确认。",
    "确认项",
    "角色A",
    "角色B",
    "角色C",
    "目标场景是否覆盖了读者最常遇到的情境",
    "□ 同意  □ 需修改：",
    "目标人群描述是否准确",
    "核心问题是否是读者真实面临的困惑",
    "预期效果是否合理可实现",
    "定位表整体确认定稿",
    "□ 确认",

    # ===== Form 3: 访谈准备清单 =====
    "Form3-访谈准备清单",
    "使用说明",
    "三轮访谈开始前，访谈组织者用这张表确认访谈条件已就绪。建议在访谈前一天完成这张表。",
    "访谈基本安排",
    "访谈对象",
    "人名",
    "计划时间",
    "地点/方式",
    "预计时长",
    "角色A",
    "约20-30分钟",
    "角色B",
    "约40-60分钟",
    "角色C",
    "准备确认",
    "准备项",
    "是否就绪",
    "对应手册类型的访谈问题脚本已经读过一遍",
    "□ 是",
    "手机录音功能已开启并测试",
    "关键素材记录表已打开（用于记录要点）",
    "已告知受访者录音的目的（用于转文字、生成手册）",
    "已准备好定位表（访谈中需要参照）",
    "追问句式已熟悉（见表4-6末尾）",
    "访谈中需要特别注意的点（针对这次课题的特殊情况）：",

    # ===== Form 4: 角色A访谈记录表 =====
    "Form4-角色A访谈记录表",
    "使用说明",
    "访谈过程中同步记录，也可以访谈后根据录音补充。记录的目标不是逐字记录，而是抓住"角色A的真实困惑"——他在什么情况下感到迷茫、犯过什么错、曾经想问但不知道怎么问的问题。",
    "受访信息",
    "角色A姓名：",
    "访谈时间：",
    "记录人：",
    "开场问题记录",
    "1. 你做这件事之前，最不确定的是什么？（记录原话）",
    "2. 你入职以来，在这个方面犯过哪些错或者踩过什么坑？",
    "3. 你有没有在做这件事时，觉得不知道下一步该怎么办的经历？",
    "核心困惑收集（尽量用原话记录）",
    "困惑编号",
    "困惑内容（原话）",
    "触发场景（在什么情况下有这个困惑）",
    "A1",
    "A2",
    "A3",
    "A4",
    "A5",
    "A6（如有）",
    "你没有主动问，但其实也不清楚的事情（访谈者引导挖掘）：",
    "追问后获得的补充信息：",
    "万能追问句式备用：",
    "  "你能具体说说那次发生了什么吗？"",
    "  "当时你是怎么处理的？"",
    "  "如果重来一次，你希望提前知道什么？"",
    "  "你当时有没有请教过别人？他们怎么告诉你的？"",
    "  "还有呢？还有什么你觉得手册里应该写的？"",

    # ===== Form 5: 角色B访谈记录表 =====
    "Form5-角色B访谈记录表",
    "使用说明",
    "角色B是这本手册的核心经验来源。访谈的关键是把骨干员工"身体里"的经验"说出来"——每一步怎么做、怎么判断做对了、遇到异常怎么处理。记录时尽量保留原话口语，不需要整理成正式文字。",
    "角色B姓名：",
    "操作起点",
    "什么情况触发这个操作（是什么信号让你开始做这件事）：",
    "逐步操作记录（每步至少包含：做什么动作、用什么工具或凭什么判断、完成标准是什么）",
    "第一步：",
    "→ 判断标准（怎么知道这步做对了）：",
    "→ 常见错误（容易在这步做错什么）：",
    "第二步：",
    "第三步：",
    "第四步（如有）：",
    "第五步（如有）：",
    "异常情况处理（"如果遇到……，你会怎么做？"）",
    "异常情况一：",
    "→ 处理方法：",
    "异常情况二：",
    "整体完成标准（怎么知道整个操作做对了、做完了）：",
    "关键诀窍/经验（让你比新人做得好的地方在哪里？）：",
    "追问后补充：",
    "万能追问句式备用：",
    "  "你刚才说'正常流程'，能具体说说这个流程每步是什么吗？"",
    "  "你是怎么判断这步做对了的？有没有一个快速的自查方法？"",
    "  "你见过的最典型的错误是什么？当时发生了什么？"",
    "  "这步操作，新人最容易在哪里卡住？"",
    "  "你有没有一个'小窍门'是新人通常不知道的？"",

    # ===== Form 6: 角色C访谈记录表 =====
    "Form6-角色C访谈记录表",
    "使用说明",
    "角色C提供的是"标准视角"——什么叫做合格、什么绝对不能做、达到什么程度才算通过。访谈目标是把管理者脑子里的"隐性验收标准"明确化，避免手册里只有经验而缺少组织规范。",
    "角色C姓名：",
    "达标标准",
    "做这件事，达到什么水平才算"合格"？",
    "有没有你特别看重的几个评判点？",
    "新人通常在哪里没达到你的标准？",
    "有没有"一旦违反就是大问题"的红线？",
    "合规要求与红线",
    "绝对不能做的事情（红线清单）：",
    "红线",
    "后果/原因",
    "1.",
    "2.",
    "3.",
    "组织标准依据（如果某些标准有来源文件或规范，注明）：",
    "验收方式（如果你要核查这件事做没做到为位，你会看哪几个点）：",
    "追问后补充：",
    "万能追问句式备用：",
    "  "这个标准是怎么形成的？有没有具体的制度文件可以参考？"",
    "  "如果以后要核查这件事做没做到位，你会看哪几个点？"",
    "  "有没有哪些标准，新人通常以为可以灵活处理，但其实不能？"",
    "  "如果你以前的团队出过问题，最常见的是什么类型的问题？"",
    "  "有哪些表述或做法，你特别不希望出现在手册里？"",

    # ===== Form 7: 操作手册素材整理表 =====
    "Form7-操作手册素材整理表",
    "使用说明",
    "完成三轮访谈录音转文字后，用这张表整理素材包。这张表的内容，就是最终输入给AI Skill的素材。预计完成时间20-30分钟。三类人群共同整理，有分歧当场对齐。",
    "【课题基本信息】",
    "手册名称：",
    "目标读者：",
    "核心场景（这本手册覆盖的主要工作情境，列出2-4个）：",
    "场景一：",
    "场景二：",
    "场景三：",
    "场景四（如有）：",
    "【任务场景列表】（从访谈中提炼出来的主要工作情境）",
    "情境一：",
    "情境二：",
    "情境三：",
    "情境四（如有）：",
    "情境五（如有）：",
    "【骨干员工操作讲解（角色B的表述，尽量保留原话，口语化没关系）】",
    "操作起点（什么情况触发这个操作）：",
    "第一步：",
    "→判断标准：",
    "→常见错误：",
    "第二步：",
    "第三步：",
    "第四步（如有）：",
    "第五步（如有）：",
    "完成标准（怎么知道整个操作做对了）：",
    "异常情况一及处理方法：",
    "异常情况二及处理方法：",
    "关键诀窍（骨干员工特有的判断方法或小技巧）：",
    "【角色A提供的困惑和坑】",
    "困惑一（什么情况下有这个困惑）：",
    "困惑二：",
    "困惑三：",
    "踩过的坑一（发生了什么、后果是什么）：",
    "踩过的坑二（如有）：",
    "【角色C确认的标准和红线】",
    "达标标准（做到什么程度算合格）：",
    "验收要点（管理者会检查哪几个点）：",
    "红线一（绝对不能做的事）：",
    "红线二：",
    "红线三（如有）：",
    "【现有工具/表单（如有，描述或附上）】",
    "已有表单名称及用途：",
    "已有操作规程文件名称：",
    "其他参考材料：",

    # ===== Form 8: 带教手册素材整理表 =====
    "Form8-带教手册素材整理表",
    "使用说明",
    "带教手册重点在于"分阶段带教路径"，所以素材整理以"阶段"为核心组织结构。完成三轮访谈后用这张表整理。",
    "【课题基本信息】",
    "手册名称：",
    "被带教对象（什么样的新人，基础和缺口各是什么）：",
    "带教目标（带完之后新人应该达到什么水平）：",
    "整个带教周期总时长：",
    "【带教阶段划分（角色B/C共同确认）】",
    "阶段一（时间范围）：",
    "阶段目标：",
    "阶段二（时间范围）：",
    "阶段三（时间范围）：",
    "阶段四（如有）：",
    "【各阶段示范要点（角色B的描述）】",
    "阶段一：",
    "  这阶段带教人主要做什么示范：",
    "  最需要重点说明的是：",
    "  新人最容易卡住的地方：",
    "  卡住了怎么引导（不是直接告诉答案，而是）：",
    "  这阶段结束的验收标准：",
    "阶段二：",
    "阶段三：",
    "【常见带教卡点（角色B的经验汇总）】",
    "卡点一（什么情况、原因、有效的引导方法）：",
    "卡点二：",
    "卡点三（如有）：",
    "【带教误区（带教人自己容易犯的错，角色B/C补充）】",
    "误区一（带教人常做但不该做的）：",
    "误区二：",
    "【最终验收标准（角色C确认）】",
    "阶段一达标标准：",
    "阶段二达标标准：",
    "最终通关标准（新人做到什么才算"可以独立上岗"）：",
    "验收方式（怎么检验）：",
    "【现有工具/表单（如有）】",
    "已有跟进记录表：",
    "已有考核表格：",
    "其他参考材料：",

    # ===== Form 9: 应知应会手册素材整理表 =====
    "Form9-应知应会手册素材整理表",
    "使用说明",
    "应知应会手册的素材核心是"新人第一个月最需要知道的事情地图"，重点不在于每件事怎么做，而在于每件事是什么、找谁、在哪里。",
    "【课题基本信息】",
    "手册名称：",
    "目标读者（什么阶段的新人）：",
    "阅读时机（入职第几天/第几周翻这本手册）：",
    "这本手册覆盖的边界（看完之后，接下来还需要通过哪些渠道深化）：",
    "【岗位核心职责（按频次排列，角色B/C共同提供）】",
    "每天都要做的：",
    "1.",
    "2.",
    "3.",
    "每周/每月做的：",
    "按需触发的（什么情况下需要做）：",
    "【高频场景（新人第一个月最常遇到的5-8个情境）】",
    "情境一（发生了什么→新人需要知道什么→找谁）：",
    "情境二：",
    "情境三：",
    "情境四：",
    "情境五：",
    "情境六（如有）：",
    "情境七（如有）：",
    "情境八（如有）：",
    "【角色A提供的新人常问问题（尽量用原话）】",
    "问题",
    "标准回答（角色B/C提供）",
    "Q1:",
    "A:",
    "Q2:",
    "Q3:",
    "Q4:",
    "Q5:",
    "Q6（如有）:",
    "【核心术语和概念（不懂会造成沟通障碍的）】",
    "术语/缩写",
    "解释（用大白话解释，不要用其他专业词解释专业词）",
    "【主要对接关系（遇到什么情况，找谁，怎么联系）】",
    "情况",
    "找谁",
    "联系方式",
    "备注",
    "【雷区清单（角色C重点说明：不能做什么、为什么、踩了会怎样）】",
    "雷区一：",
    "是什么：",
    "为什么不能做：",
    "踩了会怎样：",
    "雷区二：",
    "雷区三：",
    "【现有材料（如有）】",
    "已有入职培训材料：",
    "已有岗位说明书：",
    "其他参考材料：",

    # ===== Form 10: Skill提交前自查表 =====
    "Form10-Skill提交前自查表",
    "使用说明",
    "把素材整理表输入给AI Skill之前，先逐项检查。全部勾选后再提交——5分钟的自查，比事后大幅修改初稿节省时间得多。如果发现未完成项，先补充素材再提交。",
    "检查项",
    "状态",
    "如未完成，需要补充的内容",
    "课题定位表",
    "课题定位表已经过三类人群交叉确认、定稿",
    "□ 是  □ 未完成",
    "骨干经验质量",
    "角色B的操作讲解达到"动词+对象+判断标准"的颗粒度（不是笼统概括）",
    "□ 是  □ 部分达到",
    "骨干员工的讲解已完成录音转文字，原始口语化内容已整理",
    "□ 是  □ 未完成",
    "场景覆盖完整性",
    "读者最常见的3-5个情境，在素材里都有对应内容",
    "□ 是  □ 有遗漏",
    "遗漏的：",
    "至少有一个"异常情况或出错了怎么处理"的场景",
    "□ 是  □ 没有",
    "角色A视角",
    "角色A提供的困惑和坑，已整理至少3条具体问题或错误",
    "□ 是  □ 未完成",
    "角色C视角",
    "角色C的标准和红线已整理，至少有1条明确的达标标准和1条红线",
    "□ 是  □ 未完成",
    "格式准备",
    "素材整理表已按对应手册类型的格式填写完整",
    "□ 是  □ 未完成",
    "提交Skill时附加说明（如有特殊要求或需要Skill特别注意的地方）：",
    "预计提交时间：",
    "负责提交的人：",

    # ===== Form 11: 初稿快速扫描记录 =====
    "Form11-初稿快速扫描记录",
    "使用说明",
    "收到Skill生成的初稿后，先做一轮快速扫描（10-15分钟），不是找每一个细节错误，而是判断"大方向对不对、最大的问题在哪里"。扫描完成后，再进入三类人群的详细标记环节。",
    "初稿基本信息",
    "收到初稿时间：",
    "初稿总页数/字数（估算）：",
    "维度一：结构扫描（看目录和章节标题）",
    "扫描问题",
    "发现",
    "章节划分是否符合课题定位？覆盖的场景是否和定位表一致？",
    "□ 基本符合  □ 有偏差：",
    "有没有明显缺失的重要场景？",
    "□ 没有  □ 有：",
    "有没有和手册无关的内容出现在目录里？",
    "□ 没有  □ 有：",
    "读者遇到最常见的3个问题，能在目录里找到对应章节吗？",
    "□ 能  □ 部分能  □ 不能",
    "维度二：内容扫描（抽查2-3个章节正文）",
    "关键操作步骤，是否还原了骨干员工的真实经验？",
    "□ 是  □ 变成了笼统描述：",
    "有没有Skill自己生成的、与实际情况不符的内容？",
    "□ 没有  □ 发现：",
    "有没有把"个人经验"写成了"组织标准"的表述？",
    "□ 没有  □ 发现：",
    "维度三：可用性扫描（以目标读者身份翻阅）",
    "翻开第一页，读者知道这本手册是给谁用的吗？",
    "□ 清楚  □ 不清楚",
    "遇到异常情况，读者能找到对应的处理指引吗？",
    "□ 能  □ 需要翻找  □ 找不到",
    "随机抽查一个操作步骤，读者知道下一步做什么吗？",
    "□ 知道  □ 需要猜  □ 不知道",
    "快速扫描总结",
    "初稿整体评价：□ 方向基本对，进入细化标记  □ 有方向性问题，需要先讨论再标记",
    "最大的问题（如果有）：",

    # ===== Form 12: 角色A初稿标记记录表 =====
    "Form12-角色A初稿标记记录表",
    "使用说明",
    "以读者视角阅读初稿，找出"看不懂"或"不知道怎么做"的地方。标记符号统一用：✓（准确保留）/ △（需补充完善）/ ✗（有误需重写）/ ?（不确定需核实）。",
    "标记人：",
    "阅读日期：",
    "角色A的阅读任务：",
    "  - 找出"我不知道这是什么意思"的地方（术语/代称/缩写没解释）",
    "  - 找出"我知道做，但不知道做完了算什么结果"的步骤（缺完成标准）",
    "  - 找出"我看完不知道接下来该做什么"的段落（缺行动指引）",
    "  - 核对你在访谈中提出的困惑，在初稿里有没有被回答",
    "标记记录",
    "编号",
    "位置（章节+段落描述）",
    "标记符号",
    "具体问题（什么地方看不懂/不知道怎么做）",
    "建议方向",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6（如有）",
    "7（如有）",
    "你在访谈时提出的困惑，手册里有没有回答？",
    "访谈中的困惑",
    "手册里有没有对应内容",
    "如有，是否清晰够用",
    "□ 有  □ 没有",
    "□ 清晰  □ 还不够",

    # ===== Form 13: 角色B初稿标记记录表 =====
    "Form13-角色B初稿标记记录表",
    "使用说明",
    "以骨干员工的经验视角阅读初稿，找出"经验写错了"或"关键细节消失了"的地方。",
    "标记人：",
    "角色B的阅读任务：",
    "  - 找出"这步骤不是这样做的"（Skill理解偏了或过度简化了）",
    "  - 找出"这个关键细节没有了"（你特别提到的窍门或判断逻辑消失了）",
    "  - 找出"这个场景在实际中比这复杂"（初稿把某个情况写得太简单了）",
    "  - 找出"这句话在实际中不成立"（理想状态vs实际情况的偏差）",
    "位置（章节+段落描述）",
    "实际情况是什么（经验描述有何差异）",
    "修改建议",
    "初稿里有没有特别好地还原了你的经验、应该保留的内容？",

    # ===== Form 14: 角色C初稿标记记录表 =====
    "Form14-角色C初稿标记记录表",
    "使用说明",
    "以管理者视角阅读初稿，找出"不符合标准"或"存在合规风险"的地方。",
    "标记人：",
    "角色C的阅读任务：",
    "  - 找出"这个操作步骤和我们的规范不一致"",
    "  - 找出"这个表述有合规风险"（承诺范围/责任界定/操作边界不准确）",
    "  - 找出"这件事只能这么做，但写成了'一种方式'"（强制要求被写成了选项）",
    "  - 找出"这个标准应该更严格/更宽松"（与组织实际要求不符）",
    "标准偏差或合规问题描述",
    "正确表述应该是",
    "你在访谈中明确的红线，在初稿里有没有被正确体现？",
    "红线内容",
    "初稿里的处理",
    "是否需要修改",
    "□ 正确体现  □ 没有提到  □ 表述有误",
    "□ 需要  □ 不需要",

    # ===== Form 15: 汇总修改优先级清单 =====
    "Form15-汇总修改优先级清单",
    "使用说明",
    "三类人群各自完成标记后，汇总成这份清单。原则：先处理"被多人标记的"和"涉及核心操作步骤的"，语言美化类修改放最后。",
    "汇总时间：",
    "汇总人：",
    "编号",
    "来源（A/B/C）",
    "位置",
    "问题描述",
    "优先级",
    "修改负责人",
    "完成状态",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8（如有）",
    "9（如有）",
    "10（如有）",
    "□最优先  □优先  □一般",
    "□待处理  □已完成",
    "优先级判断标准",
    "优先级",
    "类型",
    "说明",
    "最优先",
    "方向性问题",
    "整章内容方向跑偏，需要重写",
    "优先",
    "关键细节缺失",
    "重要经验或步骤漏掉，需要补充",
    "一般",
    "表述不准确",
    "大方向对但描述有偏差，需调整措辞",
    "最后",
    "语言优化",
    "内容准确但读起来不够清晰流畅",

    # ===== Form 16: 操作手册深度校验清单 =====
    "Form16-操作手册深度校验清单",
    "使用说明",
    "在三类人群标记和汇总修改之后，进行最后一轮系统性校验。逐项核查，有问题写在"需要补充/修改"栏里。",
    "校验项",
    "检查结果",
    "需要补充/修改的内容",
    "结构层面",
    "目录里是否有"遇到异常情况怎么处理"的章节",
    "□ 是  □ 否",
    "各章节是否按照"读者会遇到什么情境"来划分（而非知识点分类）",
    "□ 是  □ 部分",
    "手册开篇是否说明了"这本手册给谁用、遇到什么情况翻哪章"",
    "□ 是  □ 否",
    "准确性层面",
    "操作步骤是否与骨干员工（角色B）的实际做法一致",
    "□ 是  □ 部分  □ 否",
    "每个步骤是否有"完成标准"（做完了是什么状态）",
    "□ 是  □ 部分  □ 否",
    "术语和缩写是否对目标读者解释清楚了",
    "□ 是  □ 部分",
    "涉及组织规范的内容，是否与角色C确认的标准一致",
    "□ 是  □ 部分  □ 否",
    "完整性层面",
    "角色A提出的困惑，是否都在手册里找到了对应回答",
    "□ 是  □ 部分  □ 否",
    "角色B提到的关键诀窍，是否都保留在初稿中",
    "□ 是  □ 部分  □ 否",
    "至少有一个"出错了/遇到异常时该怎么做"的场景描述",
    "□ 是  □ 否",
    "红线内容（角色C提供）是否都有体现",
    "□ 是  □ 部分  □ 否",
    "可用性层面",
    "步骤之间有没有"隐含步骤"（从A到B中间还需要做什么，但没写）",
    "□ 已检查，无遗漏  □ 发现遗漏：",
    "角色A拿着这份初稿，能独立完成一次操作吗",
    "□ 能  □ 部分能  □ 不能",
    "手册里是否有对应的表单/工具（或标明了在哪里能找到）",
    "□ 是  □ 否",

    # ===== Form 17: 带教手册深度校验清单 =====
    "Form17-带教手册深度校验清单",
    "使用说明",
    "带教手册的校验重点在于"带教人按照这本手册，能独立完成一次带教吗"。",
    "结构层面",
    "带教阶段划分是否清晰（每个阶段的时间范围和目标明确）",
    "各阶段是否都有对应的"示范要点"和"观察要点"",
    "□ 是  □ 部分  □ 否",
    "手册是否有"带教人使用说明"（这本手册怎么用，每阶段用哪部分）",
    "□ 是  □ 否",
    "准确性层面",
    "带教方法描述是否具体到"做什么动作、说什么话"",
    "□ 是  □ 部分",
    "带教人按照这本手册，能独立完成一次带教吗",
    "□ 能  □ 部分能  □ 不能",
    "验收标准是否和管理者（角色C）的标准一致",
    "□ 是  □ 部分  □ 否",
    "完整性层面",
    "是否有"常见带教卡点"的描述（新人在哪里卡住，怎么引导）",
    "□ 是  □ 否",
    "是否有"带教误区"的描述（带教人可能犯的错）",
    "□ 是  □ 否",
    "是否覆盖了完整的带教周期（从开始到验收通关）",
    "□ 是  □ 部分",
    "可用性层面",
    "带教跟进记录的方法是否具体（记什么、什么时候记、记录在哪里）",
    "□ 是  □ 部分",
    "带教人能从手册里找到"这阶段结束了吗"的判断标准吗",
    "□ 是  □ 否",
    "带教跟进记录表/阶段验收表是否已嵌入手册",
    "□ 是  □ 否",

    # ===== Form 18: 应知应会手册深度校验清单 =====
    "Form18-应知应会手册深度校验清单",
    "使用说明",
    "应知应会手册的校验重点在于"新人读完之后，对这个岗位的整体认知地图是否清晰"。",
    "手册是否有"速查索引"或"按场景找内容"的入口",
    "□ 是  □ 否",
    "内容颗粒度是否是"认知地图"级别，而非"操作手册"级别（偏深）",
    "□ 是  □ 偏深需调整",
    "手册开篇是否说明了阅读时机和使用方法",
    "准确性层面",
    "核心术语解释是否准确（角色C确认）",
    "□ 是  □ 部分  □ 否",
    "岗位职责描述是否与实际工作内容一致",
    "□ 是  □ 部分",
    "主要对接部门/联系方式等信息是否最新有效",
    "□ 是  □ 需核实",
    "新人常见问题清单，是否都有对应的简短回答",
    "□ 是  □ 部分  □ 否",
    "雷区清单，是否有至少3条明确的"不能做什么、为什么"",
    "□ 是  □ 否",
    "高频场景，是否都有"遇到了→找谁→怎么处理"的指引",
    "□ 是  □ 部分",
    "可用性层面",
    "角色A读完全本，能用自己的话复述这个岗位的主要工作吗",
    "□ 能  □ 部分  □ 不能",
    "速查表/术语表是否清晰，方便新人翻查",
    "□ 是  □ 需优化",

    # ===== Form 19: 五步优化工作表 =====
    "Form19-五步优化工作表",
    "使用说明",
    "对手册的核心章节逐步应用五步优化法。不需要每一步都大改，而是针对实际问题选择最需要的步骤重点打磨。建议先完成第一步（痛点共鸣），其余步骤视手册内容情况选用。",
    "手册名称：",
    "本次优化的目标章节：",
    "第一步：让人有意愿读——痛点共鸣",
    "目标：开篇第一段，让读者觉得"这说的就是我"。",
    "改写前（原开篇）：",
    "改写后（痛点共鸣段落，150-200字）：",
    "第二步：让人建立连接——场景描述",
    "目标：把"注意X"改写成"当你在Y情境下……"，让读者脑子里能看见画面。",
    "选取需要改写的原表述（1-2条）：",
    "改写后：",
    "第三步：让人理解价值——给出理由",
    "目标：在关键步骤后面加上"这样做的价值是什么"，让读者知道为什么值得按这个要求做。",
    "选取需要补充"理由"的步骤：",
    "补充后：",
    "第四步：让人知道下一步——行动驱动",
    "目标：章节末尾加2-3个自查问题，或者一句话的行动提醒。",
    "本章节末尾的自查问题/行动提醒草稿：",
    "第五步：让人带走一个信念——结尾强化",
    "目标：全文结尾，用一段话说明"做到这件事，对读者自己意味着什么"。",
    "结尾强化段落草稿（50-100字）：",
    "优化前后对比",
    "",
    "优化前",
    "优化后",
    "开篇吸引力",
    "□ 低  □ 中  □ 高",
    "场景感",
    "行动指引清晰度",

    # ===== Form 20: 交叉评审反馈表 =====
    "Form20-交叉评审反馈表",
    "使用说明",
    "同类手册互评时使用（操作手册互评/带教手册互评/应知应会手册互评）。阅读对方手册前三章，用约15-20分钟，提出2-3条有价值的优化建议。",
    "评审基本信息",
    "项目",
    "信息",
    "评审人",
    "被评审手册名称",
    "被评审小组",
    "评审日期",
    "四个维度评审",
    "维度",
    "总体评价",
    "具体发现",
    "内容准确性（有没有发现错误或容易引起误解的表述）",
    "□ 没有发现问题  □ 发现了问题（见下表）",
    "操作可行性（目标读者按这本手册能独立完成操作吗）",
    "□ 能  □ 部分能  □ 不能",
    "语言通俗性（有没有对目标读者来说太专业或解释不清的地方）",
    "□ 通俗清晰  □ 有部分需要改",
    "格式规范性（格式是否清晰，工具和正文是否明确区分）",
    "□ 规范  □ 需要调整",
    "优化建议（每条建议尽量具体：位置+问题+建议方向）",
    "位置（第几章/第几节）",
    "问题描述",
    "建议方向",
    "1",
    "2",
    "3",
    "手册负责人处理决定",
    "反馈编号",
    "处理决定",
    "理由（不采纳的说明为什么）",
    "□ 采纳  □ 不采纳",

    # ===== Form 21: 工作坊后迭代计划表 =====
    "Form21-工作坊后迭代计划表",
    "使用说明",
    "工作坊最后阶段，每个课题组填写一份，用于明确手册发布前还需要完成的工作，以及发布后的维护安排。",
    "课题信息",
    "手册名称：",
    "课题负责人：",
    "工作坊结束时的完成状态",
    "项目",
    "状态",
    "手册核心内容完成度",
    "□ 80%以上  □ 50-80%  □ 50%以下",
    "工具包是否已嵌入手册",
    "□ 已完成  □ 部分完成  □ 未完成",
    "典型案例是否已写入",
    "□ 已完成  □ 部分完成  □ 未完成",
    "五步优化是否已完成",
    "□ 已完成  □ 部分完成  □ 未完成",
    "工作坊后待完成清单",
    "待完成事项",
    "负责人",
    "预计完成时间",
    "发布前审核计划",
    "审核阶段",
    "审核内容",
    "审核方",
    "预计时间",
    "内容审核",
    "操作步骤与实际工作一致性确认",
    "角色B（业务骨干）",
    "合规审核",
    "规范承诺责任界定等内容合规性确认",
    "角色C + 相关职能部门",
    "试用验证",
    "2-3名真实目标读者用手册实际操作一次",
    "角色A类型的真实用户",
    "发布定稿",
    "根据试用反馈做最终调整，完成排版",
    "课题负责人",
    "持续迭代机制",
    "更新触发条件（什么情况下需要启动手册更新）：",
    "□ 每半年定期评审  □ 流程有重大变化时  □ 收集到明显新的案例或问题时",
    "更新信号收集方式（鼓励使用者遇到手册里没写的情况时怎么记录）：",
    "版本管理方式（每次更新如何注明版本号和更新内容）：",
    "工作坊总结",
    "这次工作坊，我收获最大的一点是：",
    "这套手册发布之后，我最想看到的改变是：",
]


def build_shared_strings():
    """Build the sharedStrings.xml content"""
    ss = ['<?xml version="1.0" encoding="UTF-8" standalone="yes"?>']
    ss.append('<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"')
    ss.append(f' count="{len(SHARED_STRINGS)}" uniqueCount="{len(SHARED_STRINGS)}">')
    for s in SHARED_STRINGS:
        ss.append(f'<si><t>{escape_xml(s)}</t></si>')
    ss.append('</sst>')
    return '\n'.join(ss)


# ===== INDEX DATA =====
INDEX_ROWS = [
    (1, "课前准备清单", "工作坊开始前", "全体学员", "Form0-课前准备检查表"),
    (2, "手册类型判断表", "第一天上午", "全组讨论", "Form1-手册类型判断"),
    (3, "课题定位表", "第一天上午", "三类人群确认", "Form2-课题定位表"),
    (4, "访谈准备清单", "访谈开始前", "访谈组织者", "Form3-访谈准备清单"),
    (5, "角色A访谈记录表", "第一天下午", "角色本人或访谈者", "Form4-A角色访谈记录"),
    (6, "角色B访谈记录表", "第一天下午", "角色本人或访谈者", "Form5-B角色访谈记录"),
    (7, "角色C访谈记录表", "第一天下午", "角色本人或访谈者", "Form6-C角色访谈记录"),
    (8, "操作手册材料组织表", "第一天下午末", "小组协作", "Form7-操作手册素材整理"),
    (9, "带教手册材料组织表", "第一天下午末", "小组协作", "Form8-带教手册素材整理"),
    (10, "应知应会手册材料组织表", "第一天下午末", "小组协作", "Form9-应知应会素材整理"),
    (11, "提交前三检查", "提交Skill前", "素材整理负责人", "Form10-Skill提交前自查"),
    (12, "初稿速览检查", "收到初稿后", "小组协作", "Form11-初稿速览检查"),
    (13, "角色A初稿标记记录表", "第二天上午", "角色A", "Form12-A角色审阅记录"),
    (14, "角色B初稿标记记录表", "第二天上午", "角色B", "Form13-B角色审阅记录"),
    (15, "角色C初稿标记记录表", "第二天上午", "角色C", "Form14-C角色审阅记录"),
    (16, "优先级排序汇总表", "第二天上午末", "全组汇总", "Form15-优先级排序汇总"),
    (17, "操作手册深度校验清单", "第二天上午", "小组协作", "Form16-操作手册校验清单"),
    (18, "带教手册深度校验清单", "第二天上午", "小组协作", "Form17-带教手册校验清单"),
    (19, "应知应会手册深度校验清单", "第二天上午", "小组协作", "Form18-应知应会校验清单"),
    (20, "五步优化工作表", "第二天下午", "手册负责人", "Form19-五步优化工作表"),
    (21, "跨手册交叉审阅表", "第二天下午", "评审双方", "Form20-跨手册交叉审阅"),
    (22, "课后迭代计划表", "工作坊收尾", "课题负责人", "Form21-课后迭代计划表"),
]

# ===== STYLE SYSTEM =====
# We define a set of styles for our forms:
# s=0:  Default
# s=1:  Title (blue bg, white bold)
# s=2:  Header row (dark blue bg, white bold)
# s=3:  Section header (light blue bg, dark text bold)
# s=4:  Label (gray bg, dark text)
# s=5:  Input cell (yellow bg, editable)
# s=6:  Checkbox cell (white bg, editable)
# s=7:  Text content (white bg, normal)
# s=8:  Instruction text (light gray, italic-like)
# s=9:  Table header (blue bg, white, centered)
# s=10: Border cell (light border)
# s=11: Input field (white, blue left border)

def get_styles_xml():
    """Build comprehensive styles.xml"""
    return '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <numFmts count="0"/>
  <fonts count="8">
    <font><name val="Arial"/><sz val="11"/><color theme="1"/></font>
    <font><name val="Arial"/><b val="1"/><sz val="14"/><color rgb="00FFFFFF"/></font>
    <font><name val="Arial"/><b val="1"/><sz val="11"/><color rgb="00FFFFFF"/></font>
    <font><name val="Arial"/><b val="1"/><sz val="11"/><color rgb="001B4F9B"/></font>
    <font><name val="Arial"/><sz val="10"/><color rgb="00262626"/></font>
    <font><name val="Arial"/><i val="1"/><sz val="9"/><color rgb="00706060"/></font>
    <font><name val="Arial"/><b val="1"/><sz val="11"/><color rgb="00FFFFFF"/></font>
    <font><name val="Arial"/><sz val="9"/><color rgb="00C00000"/></font>
  </fonts>
  <fills count="9">
    <fill><patternFill patternType="none"/></fill>
    <fill><patternFill patternType="gray125"/></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="001B4F9B"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="00DEEAF1"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="00F2F2F2"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="00FFFFC0"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="00E2EFDA"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="00FCF4E1"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="00BDD7EE"/></patternFill></fill>
  </fills>
  <borders count="5">
    <border><left/><right/><top/><bottom/><diagonal/></border>
    <border><left style="thin"><color rgb="00AAAAAA"/></left><right style="thin"><color rgb="00AAAAAA"/></right><top style="thin"><color rgb="00AAAAAA"/></top><bottom style="thin"><color rgb="00AAAAAA"/></bottom></border>
    <border><bottom style="medium"><color rgb="001B4F9B"/></bottom></border>
    <border><left style="medium"><color rgb="001B4F9B"/></left></border>
    <border><top style="thin"><color rgb="00AAAAAA"/></top><bottom style="thin"><color rgb="00AAAAAA"/></bottom></border>
  </borders>
  <cellStyleXfs count="1">
    <xf numFmtId="0" fontId="0" fillId="0" borderId="0"/>
  </cellStyleXfs>
  <cellXfs count="12">
    <!-- 0: Default -->
    <xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/>
    <!-- 1: Workbook Title - blue bg white bold large -->
    <xf numFmtId="0" fontId="1" fillId="2" borderId="0" xfId="0" applyAlignment="1"><alignment horizontal="center" vertical="center" wrapText="1"/></xf>
    <!-- 2: Section header - blue bg white bold -->
    <xf numFmtId="0" fontId="2" fillId="2" borderId="1" xfId="0" applyAlignment="1"><alignment horizontal="center" vertical="center" wrapText="1"/></xf>
    <!-- 3: Column header - light blue bg dark bold -->
    <xf numFmtId="0" fontId="3" fillId="3" borderId="1" xfId="0" applyAlignment="1"><alignment horizontal="center" vertical="center" wrapText="1"/></xf>
    <!-- 4: Label cell - gray bg -->
    <xf numFmtId="0" fontId="4" fillId="4" borderId="0" xfId="0" applyAlignment="1"><alignment horizontal="left" vertical="center" wrapText="1"/></xf>
    <!-- 5: Input cell - yellow bg editable -->
    <xf numFmtId="0" fontId="0" fillId="5" borderId="1" xfId="0" applyAlignment="1"><alignment horizontal="left" vertical="center" wrapText="1"/></xf>
    <!-- 6: Checkbox cell - white bg editable -->
    <xf numFmtId="0" fontId="0" fillId="0" borderId="1" xfId="0" applyAlignment="1"><alignment horizontal="left" vertical="center" wrapText="1"/></xf>
    <!-- 7: Normal text content - white bg -->
    <xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0" applyAlignment="1"><alignment horizontal="left" vertical="center" wrapText="1"/></xf>
    <!-- 8: Instruction text - italic gray -->
    <xf numFmtId="0" fontId="5" fillId="4" borderId="0" xfId="0" applyAlignment="1"><alignment horizontal="left" vertical="center" wrapText="1"/></xf>
    <!-- 9: Table header in content -->
    <xf numFmtId="0" fontId="6" fillId="2" borderId="1" xfId="0" applyAlignment="1"><alignment horizontal="center" vertical="center" wrapText="1"/></xf>
    <!-- 10: Left blue border input -->
    <xf numFmtId="0" fontId="0" fillId="0" borderId="3" xfId="0" applyAlignment="1"><alignment horizontal="left" vertical="center" wrapText="1"/></xf>
    <!-- 11: Red instruction note -->
    <xf numFmtId="0" fontId="7" fillId="0" borderId="0" xfId="0" applyAlignment="1"><alignment horizontal="left" vertical="center" wrapText="1"/></xf>
  </cellXfs>
</styleSheet>'''


def si(index):
    """Return shared string index"""
    return f'<v>{index}</v>'


def make_cell(ref, style, content_type='s', value=None, inline=False):
    """Make a cell XML element"""
    if inline:
        return f'<c r="{ref}" s="{style}" t="inlineStr"><is><t>{escape_xml(value)}</t></is></c>'
    if content_type == 's':
        return f'<c r="{ref}" s="{style}" t="s">{si(value)}</c>'
    elif content_type == 'f':
        return f'<c r="{ref}" s="{style}"><f>{value}</f><v></v></c>'
    else:
        return f'<c r="{ref}" s="{style}"><v>{value}</v></c>'


def build_row(row_num, cells, ht=None, customHeight=None):
    """Build a row XML element"""
    attrs = f'r="{row_num}"'
    if ht:
        attrs += f' ht="{ht}"'
    if customHeight:
        attrs += ' customHeight="1"'
    cell_xml = '\n    '.join(cells)
    return f'<row {attrs}>\n    {cell_xml}\n  </row>'


def build_index_sheet():
    """Build the 目录 (Index) sheet"""
    rows = []

    # Row 1: Main title
    rows.append(build_row(1, [
        '<c r="A1" s="1" t="inlineStr"><is><t>AI时代经验传承：岗位手册批量开发工作坊</t></is></c>',
        '<c r="B1" s="1" t="inlineStr"><is><t>配套表单集（空白版）</t></is></c>',
    ], ht="40", customHeight="1"))

    # Row 2: empty
    rows.append(build_row(2, [
        '<c r="A2" s="0" t="inlineStr"><is><t></t></is></c>',
    ]))

    # Row 3: column headers
    rows.append(build_row(3, [
        '<c r="A3" s="2" t="inlineStr"><is><t>编号</t></is></c>',
        '<c r="B3" s="2" t="inlineStr"><is><t>表单名称</t></is></c>',
        '<c r="C3" s="2" t="inlineStr"><is><t>使用阶段</t></is></c>',
        '<c r="D3" s="2" t="inlineStr"><is><t>主要填写人</t></is></c>',
        '<c r="E3" s="2" t="inlineStr"><is><t>工作表页码</t></is></c>',
    ], ht="28", customHeight="1"))

    # Data rows
    for i, (num, name, stage, who, sheet_name) in enumerate(INDEX_ROWS):
        r = i + 4
        bg = "3" if i % 2 == 0 else "4"  # alternating
        rows.append(build_row(r, [
            f'<c r="A{r}" s="{bg}" t="inlineStr"><is><t>{num}</t></is></c>',
            f'<c r="B{r}" s="{bg}" t="inlineStr"><is><t>{name}</t></is></c>',
            f'<c r="C{r}" s="{bg}" t="inlineStr"><is><t>{stage}</t></is></c>',
            f'<c r="D{r}" s="{bg}" t="inlineStr"><is><t>{who}</t></is></c>',
            f'<c r="E{r}" s="{bg}" t="inlineStr"><is><t>{sheet_name}</t></is></c>',
        ], ht="22", customHeight="1"))

    # Freeze pane after row 3
    return f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <sheetPr><tabColor rgb="001B4F9B"/></sheetPr>
  <dimension ref="A1:E26"/>
  <sheetViews>
    <sheetView workbookViewId="0">
      <pane ySplit="3" topLeftCell="A4" activePane="bottomLeft" state="frozen"/>
      <selection activeCell="A4" sqref="A4"/>
    </sheetView>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15" customHeight="1"/>
  <cols>
    <col min="1" max="1" width="8" customWidth="1"/>
    <col min="2" max="2" width="28" customWidth="1"/>
    <col min="3" max="3" width="18" customWidth="1"/>
    <col min="4" max="4" width="16" customWidth="1"/>
    <col min="5" max="5" width="22" customWidth="1"/>
  </cols>
  <sheetData>
    {'</sheetData>\n  <sheetData>'.join(rows)}
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
  <printOptions horizontalCentered="1"/>
  <pageSetup orientation="portrait" useFirstPageNumber="1" fitToPage="1"/>
</worksheet>'''


def build_form0_sheet():
    """Form 0: 课前准备检查表"""
    rows = []

    def row(n, cells, ht=None):
        return build_row(n, cells, ht=ht, customHeight=ht is not None)

    # Row 1: Title
    rows.append(row(1, [
        '<c r="A1" s="1" t="inlineStr"><is><t>Form0-课前准备检查表</t></is></c>',
    ], ht="36"))

    # Row 2: Instructions
    rows.append(row(2, [
        '<c r="A2" s="8" t="inlineStr"><is><t>使用说明：工作坊正式开始前，逐项确认。全部勾选后，代表你的课题已经具备开始条件。未完成项需在第一天上午前补齐。</t></is></c>',
    ], ht="40"))

    # Row 3: Section header - 课题基本信息
    rows.append(row(3, [
        '<c r="A3" s="2" t="inlineStr"><is><t>课题基本信息</t></is></c>',
    ]))

    # Row 4: Question
    rows.append(row(4, [
        '<c r="A4" s="4" t="inlineStr"><is><t>我准备开发的手册课题（初步想法，可以在定位阶段调整）：</t></is></c>',
        '<c r="B4" s="5" t="inlineStr"><is><t></t></is></c>',
    ], ht="30"))

    # Row 5: Section header - 材料准备
    rows.append(row(5, [
        '<c r="A5" s="2" t="inlineStr"><is><t>材料准备</t></is></c>',
    ]))

    # Row 6: Table headers
    rows.append(row(6, [
        '<c r="A6" s="9" t="inlineStr"><is><t>准备项</t></is></c>',
        '<c r="B6" s="9" t="inlineStr"><is><t>是否就绪</t></is></c>',
        '<c r="C6" s="9" t="inlineStr"><is><t>备注</t></is></c>',
    ]))

    # Row 7-14: Preparation items
    items = [
        ("确定了课题相关的三类人群（角色A/B/C各有具体人选）", "□ 是  □ 否", ""),
        ("角色A人选已知情并愿意参与访谈", "□ 是  □ 否", "人名："),
        ("角色B人选已知情并愿意参与访谈", "□ 是  □ 否", "人名："),
        ("角色C人选已知情并愿意参与访谈", "□ 是  □ 否", "人名："),
        ("与课题相关的现有操作规程（如有，带来或存在手机里）", "□ 有，已带  □ 无", ""),
        ("与课题相关的现有制度文件（如有）", "□ 有，已带  □ 无", ""),
        ("与课题相关的现有培训课件（如有）", "□ 有，已带  □ 无", ""),
        ("与课题相关的现有表单样本（如有）", "□ 有，已带  □ 无", ""),
        ("录音设备可用（手机录音功能已测试）", "□ 是  □ 否", ""),
        ("语音转文字工具已准备好（微信输入法/讯飞语记/剪映等均可）", "□ 是  □ 否", "用哪个："),
    ]
    for i, (item, status, note) in enumerate(items):
        r = i + 7
        bg_s = "6" if i % 2 == 0 else "7"
        rows.append(row(r, [
            f'<c r="A{r}" s="{bg_s}" t="inlineStr"><is><t>{item}</t></is></c>',
            f'<c r="B{r}" s="{bg_s}" t="inlineStr"><is><t>{status}</t></is></c>',
            f'<c r="C{r}" s="5" t="inlineStr"><is><t>{note}</t></is></c>',
        ], ht="22"))

    # Row 17: Section header - 心理准备
    rows.append(row(17, [
        '<c r="A17" s="2" t="inlineStr"><is><t>心理准备</t></is></c>',
    ]))

    # Row 18-19: Open questions
    rows.append(row(18, [
        '<c r="A18" s="4" t="inlineStr"><is><t>这次工作坊结束时，我希望带走的东西是：</t></is></c>',
    ], ht="30"))
    rows.append(row(19, [
        '<c r="A19" s="5" t="inlineStr"><is><t></t></is></c>',
    ], ht="40"))

    rows.append(row(20, [
        '<c r="A20" s="4" t="inlineStr"><is><t>我预判这个课题在开发过程中最可能遇到的困难是：</t></is></c>',
    ], ht="30"))
    rows.append(row(21, [
        '<c r="A21" s="5" t="inlineStr"><is><t></t></is></c>',
    ], ht="40"))

    return f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <sheetPr><tabColor rgb="001B4F9B"/></sheetPr>
  <dimension ref="A1:C21"/>
  <sheetViews>
    <sheetView workbookViewId="0">
      <pane ySplit="3" topLeftCell="A4" activePane="bottomLeft" state="frozen"/>
    </sheetView>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15" customHeight="1"/>
  <cols>
    <col min="1" max="1" width="65" customWidth="1"/>
    <col min="2" max="2" width="18" customWidth="1"/>
    <col min="3" max="3" width="30" customWidth="1"/>
  </cols>
  <sheetData>
    {'</sheetData>\n  <sheetData>'.join(rows)}
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
  <pageSetup orientation="portrait" fitToPage="1"/>
</worksheet>'''


def build_form_sheet_generic(title, instructions, sections):
    """
    Generic form builder.
    sections: list of (row_type, content)
    row_type: 'title', 'instruction', 'section', 'header', 'item', 'input', 'space'
    """
    rows = []
    r = 1

    def add_row(row_num, cells, ht=None):
        rows.append(build_row(row_num, cells, ht=ht, customHeight=ht is not None))

    add_row(r, [f'<c r="A{r}" s="1" t="inlineStr"><is><t>{title}</t></is></c>'], ht="36")
    r += 1
    if instructions:
        add_row(r, [f'<c r="A{r}" s="8" t="inlineStr"><is><t>{instructions}</t></is></c>'], ht="40")
        r += 1

    for section in sections:
        sec_type = section[0]
        if sec_type == 'space':
            add_row(r, ['<c r="A{}" s="0" t="inlineStr"><is><t></t></is></c>'.format(r)], ht="15")
            r += 1
        elif sec_type == 'section':
            text = section[1]
            cols = section[2] if len(section) > 2 else 1
            if cols == 1:
                add_row(r, [f'<c r="A{r}" s="2" t="inlineStr"><is><t>{text}</t></is></c>'], ht="24")
            else:
                cells = [f'<c r="A{r}" s="2" t="inlineStr"><is><t>{text}</t></is></c>'] + \
                        [f'<c r="{chr(66+i)}{r}" s="2" t="inlineStr"><is><t></t></is></c>' for i in range(cols-1)]
                add_row(r, cells, ht="24")
            r += 1
        elif sec_type == 'header_row':
            headers = section[1:]
            cells = [f'<c r="{chr(65+i)}{r}" s="9" t="inlineStr"><is><t>{h}</t></is></c>' for i, h in enumerate(headers)]
            add_row(r, cells, ht="22")
            r += 1
        elif sec_type == 'item':
            label = section[1]
            value = section[2] if len(section) > 2 else ""
            note = section[3] if len(section) > 3 else ""
            add_row(r, [
                f'<c r="A{r}" s="6" t="inlineStr"><is><t>{label}</t></is></c>',
                f'<c r="B{r}" s="5" t="inlineStr"><is><t>{value}</t></is></c>',
                f'<c r="C{r}" s="5" t="inlineStr"><is><t>{note}</t></is></c>',
            ], ht="22")
            r += 1
        elif sec_type == 'input':
            label = section[1]
            lines = section[2] if len(section) > 2 else 1
            add_row(r, [
                f'<c r="A{r}" s="4" t="inlineStr"><is><t>{label}</t></is></c>',
            ], ht="22" if lines == 1 else 30)
            r += 1
            for _ in range(lines):
                add_row(r, [
                    f'<c r="A{r}" s="5" t="inlineStr"><is><t></t></is></c>',
                ], ht="30" if lines > 1 else "22")
                r += 1
        elif sec_type == 'inline':
            text = section[1]
            add_row(r, [f'<c r="A{r}" s="4" t="inlineStr"><is><t>{text}</t></is></c>'], ht="22"))
            r += 1
        elif sec_type == 'item2':
            label = section[1]
            options = section[2] if len(section) > 2 else ""
            note = section[3] if len(section) > 3 else ""
            add_row(r, [
                f'<c r="A{r}" s="6" t="inlineStr"><is><t>{label}</t></is></c>',
                f'<c r="B{r}" s="6" t="inlineStr"><is><t>{options}</t></is></c>',
                f'<c r="C{r}" s="5" t="inlineStr"><is><t>{note}</t></is></c>',
            ], ht="22")
            r += 1
        elif sec_type == 'triple':
            l1 = section[1]
            l2 = section[2] if len(section) > 2 else ""
            l3 = section[3] if len(section) > 3 else ""
            add_row(r, [
                f'<c r="A{r}" s="6" t="inlineStr"><is><t>{l1}</t></is></c>',
                f'<c r="B{r}" s="6" t="inlineStr"><is><t>{l2}</t></is></c>',
                f'<c r="C{r}" s="6" t="inlineStr"><is><t>{l3}</t></is></c>',
            ], ht="22")
            r += 1

    return f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <sheetPr><tabColor rgb="001B4F9B"/></sheetPr>
  <dimension ref="A1:C{r}"/>
  <sheetViews>
    <sheetView workbookViewId="0">
      <pane ySplit="2" topLeftCell="A3" activePane="bottomLeft" state="frozen"/>
    </sheetView>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15" customHeight="1"/>
  <cols>
    <col min="1" max="1" width="60" customWidth="1"/>
    <col min="2" max="2" width="20" customWidth="1"/>
    <col min="3" max="3" width="25" customWidth="1"/>
  </cols>
  <sheetData>
    {'</sheetData>\n  <sheetData>'.join(rows)}
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75"/>
  <pageSetup orientation="portrait" fitToPage="1"/>
</worksheet>'''


# ===== MAIN BUILD SCRIPT =====
def main():
    # Clean work dir
    work = WORK_DIR
    os.makedirs(work, exist_ok=True)

    # Write styles.xml
    with open(os.path.join(work, 'xl', 'styles.xml'), 'w', encoding='utf-8') as f:
        f.write(get_styles_xml())

    # Write sharedStrings.xml
    with open(os.path.join(work, 'xl', 'sharedStrings.xml'), 'w', encoding='utf-8') as f:
        f.write(build_shared_strings())

    # ===== workbook.xml =====
    wb_sheets = []
    wb_rels = []
    ct_overrides = []
    for i, name in enumerate(SHEET_NAMES):
        sheet_num = i + 1
        rid = f'rId{sheet_num}'
        wb_sheets.append(f'  <sheet name="{escape_xml(name)}" sheetId="{sheet_num}" r:id="{rid}"/>')
        wb_rels.append(f'  <Relationship Id="{rid}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet{sheet_num}.xml"/>')
        ct_overrides.append(f'  <Override PartName="/xl/worksheets/sheet{sheet_num}.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>')

    workbook_xml = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <bookViews><workbookView xWindow="0" yWindow="0" windowWidth="20140" windowHeight="12000"/></bookViews>
  <sheets>
{chr(10).join(wb_sheets)}
  </sheets>
  <calcPr calcId="191029" fullCalcOnLoad="1"/>
</workbook>'''

    workbook_rels = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
  <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml"/>
{chr(10).join(wb_rels)}
</Relationships>'''

    content_types = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
  <Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>
  <Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/>
{chr(10).join(ct_overrides)}
</Types>'''

    # Write workbook.xml
    with open(os.path.join(work, 'xl', 'workbook.xml'), 'w', encoding='utf-8') as f:
        f.write(workbook_xml)

    # Write workbook.xml.rels
    with open(os.path.join(work, 'xl', '_rels', 'workbook.xml.rels'), 'w', encoding='utf-8') as f:
        f.write(workbook_rels)

    # Write [Content_Types].xml
    with open(os.path.join(work, '[Content_Types].xml'), 'w', encoding='utf-8') as f:
        f.write(content_types)

    # Create worksheets directory
    ws_dir = os.path.join(work, 'xl', 'worksheets')
    os.makedirs(ws_dir, exist_ok=True)

    # ===== Build all 22 sheets =====
    # Sheet 1: 目录
    with open(os.path.join(ws_dir, 'sheet1.xml'), 'w', encoding='utf-8') as f:
        f.write(build_index_sheet())

    # Build Forms 0-21 (sheets 2-22)
    for form_num in range(22):
        sheet_content = build_generic_form(form_num)
        with open(os.path.join(ws_dir, f'sheet{form_num+2}.xml'), 'w', encoding='utf-8') as f:
            f.write(sheet_content)

    # ===== Pack the xlsx =====
    import subprocess
    packer = r'C:\Users\Administrator\.claude\skills\Excel表格处理\scripts\xlsx_pack.py'
    result = subprocess.run(['python3', packer, work, OUTPUT_PATH],
                          capture_output=True, text=True)
    print("STDOUT:", result.stdout)
    print("STDERR:", result.stderr)
    print("Return code:", result.returncode)

    if result.returncode == 0:
        print(f"\nSUCCESS: Output written to {OUTPUT_PATH}")
    else:
        print("PACK FAILED")
        print(result.stdout)
        print(result.stderr)


def build_generic_form(form_num):
    """Build a generic form based on form number"""
    # We build each form with proper structure
    # Using inlineStr for all text content

    if form_num == 0:
        return build_form0_sheet()

    # For all other forms, build using a more programmatic approach
    # Since we have 21 forms with different structures, let me build each one properly

    return build_form_by_number(form_num)


def build_form_by_number(n):
    """Build specific form by number 0-21"""

    if n == 1:
        return build_form1()
    elif n == 2:
        return build_form2()
    elif n == 3:
        return build_form3()
    elif n == 4:
        return build_form4()
    elif n == 5:
        return build_form5()
    elif n == 6:
        return build_form6()
    elif n == 7:
        return build_form7()
    elif n == 8:
        return build_form8()
    elif n == 9:
        return build_form9()
    elif n == 10:
        return build_form10()
    elif n == 11:
        return build_form11()
    elif n == 12:
        return build_form12()
    elif n == 13:
        return build_form13()
    elif n == 14:
        return build_form14()
    elif n == 15:
        return build_form15()
    elif n == 16:
        return build_form16()
    elif n == 17:
        return build_form17()
    elif n == 18:
        return build_form18()
    elif n == 19:
        return build_form19()
    elif n == 20:
        return build_form20()
    elif n == 21:
        return build_form21()

    return '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><sheetData></sheetData></worksheet>'


def make_form_sheet(title, instructions, row_data):
    """
    Generic form sheet builder.
    row_data: list of tuples:
      ('title', text, height) - main title row
      ('instruction', text, height) - instruction text
      ('section', text, height) - section header
      ('header', [col1, col2, ...], height) - table headers
      ('row', [cell1, cell2, ...], height, style) - data row
      ('space', height) - empty spacer row
    """
    rows = []
    r = 1

    for item in row_data:
        item_type = item[0]
        if item_type == 'title':
            text = item[1]
            ht = item[2] if len(item) > 2 else "36"
            rows.append(build_row(r, [f'<c r="A{r}" s="1" t="inlineStr"><is><t>{escape_xml(text)}</t></is></c>'], ht=ht, customHeight="1"))
            r += 1
        elif item_type == 'instruction':
            text = item[1]
            ht = item[2] if len(item) > 2 else "40"
            rows.append(build_row(r, [f'<c r="A{r}" s="8" t="inlineStr"><is><t>{escape_xml(text)}</t></is></c>'], ht=ht, customHeight="1"))
            r += 1
        elif item_type == 'section':
            text = item[1]
            ht = item[2] if len(item) > 2 else "24"
            # Check if multi-column
            if len(item) > 3 and item[3] > 1:
                cols = item[3]
                cells = [f'<c r="{chr(65+i)}{r}" s="2" t="inlineStr"><is><t>{escape_xml(text) if i == 0 else ""}</t></is></c>' for i in range(cols)]
                rows.append(build_row(r, cells, ht=ht, customHeight="1"))
            else:
                rows.append(build_row(r, [f'<c r="A{r}" s="2" t="inlineStr"><is><t>{escape_xml(text)}</t></is></c>'], ht=ht, customHeight="1"))
            r += 1
        elif item_type == 'header':
            headers = item[1]
            ht = item[2] if len(item) > 2 else "22"
            cells = [f'<c r="{chr(65+i)}{r}" s="9" t="inlineStr"><is><t>{escape_xml(h)}</t></is></c>' for i, h in enumerate(headers)]
            rows.append(build_row(r, cells, ht=ht, customHeight="1"))
            r += 1
        elif item_type == 'row':
            cells_data = item[1]
            ht = item[2] if len(item) > 2 else "22"
            style = item[3] if len(item) > 3 else "6"
            cells = []
            for i, cd in enumerate(cells_data):
                if isinstance(cd, tuple):
                    cell_text, cell_style = cd
                else:
                    cell_text = cd
                    cell_style = style
                col_letter = chr(65+i)
                cells.append(f'<c r="{col_letter}{r}" s="{cell_style}" t="inlineStr"><is><t>{escape_xml(str(cell_text))}</t></is></c>')
            rows.append(build_row(r, cells, ht=ht, customHeight="1"))
            r += 1
        elif item_type == 'space':
            ht = item[1] if len(item) > 1 else "12"
            rows.append(build_row(r, [f'<c r="A{r}" s="0" t="inlineStr"><is><t></t></is></c>'], ht=ht))
            r += 1

    # Determine cols
    max_cols = 6
    col_widths = []
    for i in range(max_cols):
        col_letter = chr(65+i)
        if i == 0:
            col_widths.append(f'    <col min="{i+1}" max="{i+1}" width="55" customWidth="1"/>')
        elif i < 4:
            col_widths.append(f'    <col min="{i+1}" max="{i+1}" width="20" customWidth="1"/>')
        else:
            col_widths.append(f'    <col min="{i+1}" max="{i+1}" width="15" customWidth="1"/>')

    return f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <sheetPr><tabColor rgb="001B4F9B"/></sheetPr>
  <dimension ref="A1:{chr(64+max_cols)}{r}"/>
  <sheetViews>
    <sheetView workbookViewId="0">
      <pane ySplit="2" topLeftCell="A3" activePane="bottomLeft" state="frozen"/>
    </sheetView>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15" customHeight="1"/>
  <cols>
{chr(10).join(col_widths)}
  </cols>
  <sheetData>
{chr(10).join(rows)}
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75"/>
  <pageSetup orientation="portrait" fitToPage="1"/>
</worksheet>'''


# ===== INDIVIDUAL FORM BUILDERS =====
def build_form1():
    """Form1: 手册类型判断表"""
    return make_form_sheet(
        "Form1-手册类型判断表",
        "使用说明：第一天上午，三类人群小组讨论，用这张表辅助确认本次课题应该开发哪类手册。逐项回答后，综合判断选择类型。",
        [
            ('space', 10),
            ('section', '课题描述（一句话说清楚：什么岗位、什么方面的经验）', 24),
            ('row', ['', ''], 30),
            ('space', 10),
            ('section', '核心判断问题', 24),
            ('header', ['判断问题', '你的答案'], 22),
            ('row', ['这本手册的主要目标读者是谁？', ''], 22),
            ('row', ['读者拿到这本手册，最主要的使用场景是什么？', ''], 22),
            ('row', ['读者使用时，主要需要"知道怎么做"还是"知道是什么/有什么"？', ''], 22),
            ('row', ['这本手册主要帮助读者"自己操作"还是"带别人操作"？', ''], 22),
            ('row', ['读者是在做一件具体任务时翻，还是入职初期整体了解岗位时翻？', ''], 22),
            ('space', 10),
            ('section', '类型特征对照', 24),
            ('header', ['手册类型', '核心特征', '主要受益人', '使用时机'], 22),
            ('row', ['操作手册', '一步一步告诉你怎么做对一件事', '执行者本人', '需要做这件事的时候翻'], 22),
            ('row', ['带教手册', '告诉带教人怎么教新人，分阶段推进', '带教人', '带新人的每个阶段翻'], 22),
            ('row', ['应知应会手册', '帮新人快速建立对岗位的整体认知', '新入职员工', '入职初期，全面了解时翻'], 22),
            ('space', 10),
            ('section', '判断结论', 24),
            ('row', ['本次课题应该开发的手册类型：', '□ 操作手册　　□ 带教手册　　□ 应知应会手册'], 22),
            ('row', ['判断理由（一两句话说明）：', ''], 30),
            ('space', 10),
            ('section', '三类人群确认签字', 24),
            ('header', ['角色A（读者代表）', '角色B（经验代表）', '角色C（管理者代表）'], 22),
            ('row', ['', '', ''], 22),
        ]
    )


def build_form2():
    """Form2: 课题定位表"""
    return make_form_sheet(
        "Form2-课题定位表",
        "使用说明：第一天上午，三类人群共同讨论并填写。这是整个手册开发的起点——定位表确认之前，不要开始准备素材。",
        [
            ('space', 10),
            ('section', '手册基本信息', 24),
            ('row', [('手册名称（暂定）：', '4'), '', ''], 22),
            ('row', [('手册类型（已在表1确认）：□ 操作手册　□ 带教手册　□ 应知应会手册', '4'), '', ''], 22),
            ('row', [('课题负责人：', '4'), '', ''], 22),
            ('space', 10),
            ('section', '五要素填写', 24),
            ('section', '要素一：目标场景', 22),
            ('row', ['这本手册覆盖哪些具体工作情境（能用"当……的时候"描述出来的情境）？', ''], 22),
            ('row', [('场景一：', '5'), '', ''], 22),
            ('row', [('场景二：', '5'), '', ''], 22),
            ('row', [('场景三：', '5'), '', ''], 22),
            ('row', [('场景四（如有）：', '5'), '', ''], 22),
            ('row', ['检查标准：每个场景描述能具体到"在什么时间、在什么地点、做什么事情"。', ''], 20),
            ('space', 10),
            ('section', '要素二：目标人群', 22),
            ('row', ['目标读者是谁（具体描述，不是宽泛的职位名称）？', ''], 22),
            ('row', ['读者的基础：他们已经知道什么、已经会什么？', ''], 22),
            ('row', ['读者的缺口：他们最不知道什么、最容易犯什么错？', ''], 22),
            ('space', 10),
            ('section', '要素三：核心问题', 22),
            ('row', ['这本手册要帮读者解决哪3-5个关键问题（来自角色A的真实困惑）？', ''], 22),
            ('row', [('问题一：', '5'), '', ''], 22),
            ('row', [('问题二：', '5'), '', ''], 22),
            ('row', [('问题三：', '5'), '', ''], 22),
            ('row', [('问题四（如有）：', '5'), '', ''], 22),
            ('row', [('问题五（如有）：', '5'), '', ''], 22),
            ('space', 10),
            ('section', '要素四：预期效果', 22),
            ('row', ['读者用完这本手册之后，行为上应该发生什么变化？', ''], 30),
            ('space', 10),
            ('section', '要素五：颗粒度说明', 22),
            ('row', ['（仅操作手册填写）每个操作单元的颗粒度：'], 20),
            ('row', ['', ''], 22),
            ('row', ['（仅带教手册填写）带教阶段划分：'], 20),
            ('row', ['', ''], 22),
            ('row', ['（仅应知应会手册填写）认知地图边界：'], 20),
            ('row', ['', ''], 22),
            ('space', 10),
            ('section', '三类人群交叉确认', 24),
            ('header', ['确认项', '角色A', '角色B', '角色C'], 22),
            ('row', ['目标场景是否覆盖了读者最常遇到的情境', '□ 同意  □ 需修改', '□ 同意  □ 需修改', '□ 同意  □ 需修改'], 22),
            ('row', ['目标人群描述是否准确', '□ 同意  □ 需修改', '□ 同意  □ 需修改', '□ 同意  □ 需修改'], 22),
            ('row', ['核心问题是否是读者真实面临的困惑', '□ 同意  □ 需修改', '□ 同意  □ 需修改', '□ 同意  □ 需修改'], 22),
            ('row', ['预期效果是否合理可实现', '□ 同意  □ 需修改', '□ 同意  □ 需修改', '□ 同意  □ 需修改'], 22),
            ('row', ['定位表整体确认定稿', '□ 确认', '□ 确认', '□ 确认'], 22),
        ]
    )


def build_form3():
    """Form3: 访谈准备清单"""
    return make_form_sheet(
        "Form3-访谈准备清单",
        "使用说明：三轮访谈开始前，访谈组织者用这张表确认访谈条件已就绪。建议在访谈前一天完成这张表。",
        [
            ('space', 10),
            ('section', '访谈基本安排', 24),
            ('header', ['访谈对象', '人名', '计划时间', '地点/方式', '预计时长'], 22),
            ('row', ['角色A', '', '', '', '约20-30分钟'], 22),
            ('row', ['角色B', '', '', '', '约40-60分钟'], 22),
            ('row', ['角色C', '', '', '', '约20-30分钟'], 22),
            ('space', 10),
            ('section', '准备确认', 24),
            ('header', ['准备项', '是否就绪'], 22),
            ('row', ['对应手册类型的访谈问题脚本已经读过一遍', '□ 是'], 22),
            ('row', ['手机录音功能已开启并测试', '□ 是'], 22),
            ('row', ['关键素材记录表已打开（用于记录要点）', '□ 是'], 22),
            ('row', ['已告知受访者录音的目的（用于转文字、生成手册）', '□ 是'], 22),
            ('row', ['已准备好定位表（访谈中需要参照）', '□ 是'], 22),
            ('row', ['追问句式已熟悉（见表4-6末尾）', '□ 是'], 22),
            ('space', 10),
            ('section', '访谈中需要特别注意的点（针对这次课题的特殊情况）：', 24),
            ('row', ['', ''], 30),
        ]
    )


def build_form4():
    """Form4: A角色访谈记录表"""
    return make_form_sheet(
        "Form4-角色A访谈记录表",
        "使用说明：访谈过程中同步记录，也可以访谈后根据录音补充。记录的目标是抓住"角色A的真实困惑"。",
        [
            ('space', 10),
            ('section', '受访信息', 24),
            ('row', [('角色A姓名：', '4'), '', ('访谈时间：', '4'), '', ('记录人：', '4'), ''], 22),
            ('space', 10),
            ('section', '开场问题记录', 24),
            ('row', ['1. 你做这件事之前，最不确定的是什么？（记录原话）', ''], 30),
            ('row', ['', ''], 30),
            ('row', ['2. 你入职以来，在这个方面犯过哪些错或者踩过什么坑？', ''], 30),
            ('row', ['', ''], 30),
            ('row', ['3. 你有没有在做这件事时，觉得不知道下一步该怎么办的经历？', ''], 30),
            ('row', ['', ''], 30),
            ('space', 10),
            ('section', '核心困惑收集（尽量用原话记录）', 24),
            ('header', ['困惑编号', '困惑内容（原话）', '触发场景（在什么情况下有这个困惑）'], 30),
            ('row', ['A1', '', ''], 22),
            ('row', ['A2', '', ''], 22),
            ('row', ['A3', '', ''], 22),
            ('row', ['A4', '', ''], 22),
            ('row', ['A5', '', ''], 22),
            ('row', ['A6（如有）', '', ''], 22),
            ('space', 10),
            ('section', '你没有主动问，但其实也不清楚的事情（访谈者引导挖掘）：', 24),
            ('row', ['', ''], 40),
            ('space', 10),
            ('section', '追问后获得的补充信息：', 24),
            ('row', ['', ''], 40),
        ]
    )


def build_form5():
    """Form5: B角色访谈记录表"""
    return make_form_sheet(
        "Form5-角色B访谈记录表",
        "使用说明：角色B是这本手册的核心经验来源。访谈的关键是把骨干员工"身体里"的经验"说出来"。记录时尽量保留原话口语。",
        [
            ('space', 10),
            ('section', '受访信息', 24),
            ('row', [('角色B姓名：', '4'), '', ('访谈时间：', '4'), '', ('记录人：', '4'), ''], 22),
            ('space', 10),
            ('section', '操作起点', 24),
            ('row', ['什么情况触发这个操作（是什么信号让你开始做这件事）：', ''], 30),
            ('row', ['', ''], 30),
            ('space', 10),
            ('section', '逐步操作记录（每步至少包含：做什么动作、用什么工具或凭什么判断、完成标准是什么）', 24),
            ('row', ['第一步：', ''], 30),
            ('row', ['→ 判断标准（怎么知道这步做对了）：', ''], 22),
            ('row', ['→ 常见错误（容易在这步做错什么）：', ''], 22),
            ('row', ['第二步：', ''], 30),
            ('row', ['→ 判断标准：', ''], 22),
            ('row', ['→ 常见错误：', ''], 22),
            ('row', ['第三步：', ''], 30),
            ('row', ['→ 判断标准：', ''], 22),
            ('row', ['→ 常见错误：', ''], 22),
            ('row', ['第四步（如有）：', ''], 30),
            ('row', ['第五步（如有）：', ''], 30),
            ('space', 10),
            ('section', '异常情况处理（"如果遇到……，你会怎么做？"）', 24),
            ('row', ['异常情况一：', ''], 22),
            ('row', ['→ 处理方法：', ''], 30),
            ('row', ['异常情况二：', ''], 22),
            ('row', ['→ 处理方法：', ''], 30),
            ('space', 10),
            ('section', '整体完成标准（怎么知道整个操作做对了、做完了）：', 24),
            ('row', ['', ''], 30),
            ('space', 10),
            ('section', '关键诀窍/经验（让你比新人做得好的地方在哪里？）：', 24),
            ('row', ['', ''], 40),
        ]
    )


def build_form6():
    """Form6: C角色访谈记录表"""
    return make_form_sheet(
        "Form6-角色C访谈记录表",
        "使用说明：角色C提供的是"标准视角"——什么叫做合格、什么绝对不能做、达到什么程度才算通过。",
        [
            ('space', 10),
            ('section', '受访信息', 24),
            ('row', [('角色C姓名：', '4'), '', ('访谈时间：', '4'), '', ('记录人：', '4'), ''], 22),
            ('space', 10),
            ('section', '达标标准', 24),
            ('header', ['问题', '角色C回答（记录原话）'], 24),
            ('row', ['做这件事，达到什么水平才算"合格"？', ''], 30),
            ('row', ['有没有你特别看重的几个评判点？', ''], 30),
            ('row', ['新人通常在哪里没达到你的标准？', ''], 30),
            ('row', ['有没有"一旦违反就是大问题"的红线？', ''], 30),
            ('space', 10),
            ('section', '合规要求与红线', 24),
            ('header', ['红线', '后果/原因'], 24),
            ('row', ['1.', ''], 22),
            ('row', ['2.', ''], 22),
            ('row', ['3.', ''], 22),
            ('space', 10),
            ('section', '组织标准依据（如果某些标准有来源文件或规范，注明）：', 24),
            ('row', ['', ''], 30),
            ('space', 10),
            ('section', '验收方式（如果你要核查这件事做没做到位，你会看哪几个点）：', 24),
            ('row', ['', ''], 30),
        ]
    )


def build_form7():
    """Form7: 操作手册素材整理表"""
    return make_form_sheet(
        "Form7-操作手册素材整理表",
        "使用说明：完成三轮访谈录音转文字后，用这张表整理素材包。这张表的内容，就是最终输入给AI Skill的素材。",
        [
            ('space', 10),
            ('section', '【课题基本信息】', 24),
            ('row', [('手册名称：', '4'), '', ''], 22),
            ('row', [('目标读者：', '4'), '', ''], 22),
            ('row', [('核心场景：', '4'), '', ''], 22),
            ('space', 10),
            ('section', '【任务场景列表】（从访谈中提炼出来的主要工作情境）', 24),
            ('row', ['情境一：', ''], 22),
            ('row', ['情境二：', ''], 22),
            ('row', ['情境三：', ''], 22),
            ('row', ['情境四（如有）：', ''], 22),
            ('row', ['情境五（如有）：', ''], 22),
            ('space', 10),
            ('section', '【骨干员工操作讲解（角色B的表述，尽量保留原话）】', 24),
            ('row', [('操作起点：', '4'), '', ''], 22),
            ('row', ['第一步：', ''], 22),
            ('row', ['→判断标准：', ''], 22),
            ('row', ['→常见错误：', ''], 22),
            ('row', ['第二步：', ''], 22),
            ('row', ['第三步：', ''], 22),
            ('row', ['第四步（如有）：', ''], 22),
            ('row', ['第五步（如有）：', ''], 22),
            ('row', [('完成标准：', '4'), '', ''], 22),
            ('row', [('异常情况一及处理方法：', '4'), '', ''], 30),
            ('row', [('异常情况二及处理方法：', '4'), '', ''], 30),
            ('row', [('关键诀窍：', '4'), '', ''], 30),
            ('space', 10),
            ('section', '【角色A提供的困惑和坑】', 24),
            ('row', ['困惑一（什么情况下有这个困惑）：', ''], 22),
            ('row', ['困惑二：', ''], 22),
            ('row', ['困惑三：', ''], 22),
            ('row', ['踩过的坑一（发生了什么、后果是什么）：', ''], 22),
            ('space', 10),
            ('section', '【角色C确认的标准和红线】', 24),
            ('row', [('达标标准：', '4'), '', ''], 22),
            ('row', [('验收要点：', '4'), '', ''], 22),
            ('row', [('红线一（绝对不能做的事）：', '4'), '', ''], 22),
            ('row', [('红线二：', '4'), '', ''], 22),
            ('row', [('红线三（如有）：', '4'), '', ''], 22),
            ('space', 10),
            ('section', '【现有工具/表单（如有）】', 24),
            ('row', [('已有表单名称及用途：', '4'), '', ''], 22),
            ('row', [('已有操作规程文件名称：', '4'), '', ''], 22),
            ('row', [('其他参考材料：', '4'), '', ''], 22),
        ]
    )


def build_form8():
    """Form8: 带教手册素材整理表"""
    return make_form_sheet(
        "Form8-带教手册素材整理表",
        "使用说明：带教手册重点在于"分阶段带教路径"，素材整理以"阶段"为核心组织结构。",
        [
            ('space', 10),
            ('section', '【课题基本信息】', 24),
            ('row', [('手册名称：', '4'), '', ''], 22),
            ('row', [('被带教对象：', '4'), '', ''], 22),
            ('row', [('带教目标：', '4'), '', ''], 22),
            ('row', [('整个带教周期总时长：', '4'), '', ''], 22),
            ('space', 10),
            ('section', '【带教阶段划分】', 24),
            ('row', [('阶段一（时间范围）：', '4'), '阶段目标：', ''], 22),
            ('row', [('阶段二（时间范围）：', '4'), '阶段目标：', ''], 22),
            ('row', [('阶段三（时间范围）：', '4'), '阶段目标：', ''], 22),
            ('row', [('阶段四（如有）：', '4'), '阶段目标：', ''], 22),
            ('space', 10),
            ('section', '【各阶段示范要点】', 24),
            ('row', ['阶段一：', ''], 22),
            ('row', ['  这阶段带教人主要做什么示范：', ''], 22),
            ('row', ['  最需要重点说明的是：', ''], 22),
            ('row', ['  新人最容易卡住的地方：', ''], 22),
            ('row', ['  卡住了怎么引导：', ''], 22),
            ('row', ['  这阶段结束的验收标准：', ''], 22),
            ('space', 10),
            ('section', '【常见带教卡点】', 24),
            ('row', ['卡点一（什么情况、原因、有效的引导方法）：', ''], 30),
            ('row', ['卡点二：', ''], 22),
            ('row', ['卡点三（如有）：', ''], 22),
            ('space', 10),
            ('section', '【最终验收标准（角色C确认）】', 24),
            ('row', [('阶段一达标标准：', '4'), '', ''], 22),
            ('row', [('阶段二达标标准：', '4'), '', ''], 22),
            ('row', [('最终通关标准：', '4'), '', ''], 22),
            ('row', [('验收方式：', '4'), '', ''], 22),
        ]
    )


def build_form9():
    """Form9: 应知应会手册素材整理表"""
    return make_form_sheet(
        "Form9-应知应会手册素材整理表",
        "使用说明：应知应会手册的素材核心是"新人第一个月最需要知道的事情地图"。",
        [
            ('space', 10),
            ('section', '【课题基本信息】', 24),
            ('row', [('手册名称：', '4'), '', ''], 22),
            ('row', [('目标读者（什么阶段的新人）：', '4'), '', ''], 22),
            ('row', [('阅读时机：', '4'), '', ''], 22),
            ('row', [('这本手册覆盖的边界：', '4'), '', ''], 22),
            ('space', 10),
            ('section', '【岗位核心职责（按频次排列）】', 24),
            ('row', ['每天都要做的：', ''], 22),
            ('row', ['1.', ''], 22),
            ('row', ['2.', ''], 22),
            ('row', ['3.', ''], 22),
            ('row', ['每周/每月做的：', ''], 22),
            ('row', ['按需触发的（什么情况下需要做）：', ''], 22),
            ('space', 10),
            ('section', '【高频场景（新人第一个月最常遇到的情境）】', 24),
            ('row', ['情境一（发生了什么→新人需要知道什么→找谁）：', ''], 30),
            ('row', ['情境二：', ''], 22),
            ('row', ['情境三：', ''], 22),
            ('row', ['情境四：', ''], 22),
            ('row', ['情境五：', ''], 22),
            ('space', 10),
            ('section', '【核心术语和概念】', 24),
            ('header', ['术语/缩写', '解释（用大白话解释）'], 30),
            ('row', ['', ''], 22),
            ('row', ['', ''], 22),
            ('row', ['', ''], 22),
            ('space', 10),
            ('section', '【雷区清单】', 24),
            ('row', ['雷区一：', ''], 22),
            ('row', ['  是什么：', ''], 22),
            ('row', ['  为什么不能做：', ''], 22),
            ('row', ['  踩了会怎样：', ''], 22),
            ('row', ['雷区二：', ''], 22),
            ('row', ['雷区三：', ''], 22),
        ]
    )


def build_form10():
    """Form10: Skill提交前自查表"""
    return make_form_sheet(
        "Form10-Skill提交前自查表",
        "使用说明：把素材整理表输入给AI Skill之前，先逐项检查。全部勾选后再提交。",
        [
            ('space', 10),
            ('section', '课题定位表', 24),
            ('header', ['检查项', '状态', '如未完成，需要补充的内容'], 24),
            ('row', ['课题定位表已经过三类人群交叉确认、定稿', '□ 是  □ 未完成', ''], 22),
            ('space', 10),
            ('section', '骨干经验质量', 24),
            ('row', ['角色B的操作讲解达到"动词+对象+判断标准"的颗粒度', '□ 是  □ 部分达到', ''], 22),
            ('row', ['骨干员工的讲解已完成录音转文字，原始口语化内容已整理', '□ 是  □ 未完成', ''], 22),
            ('space', 10),
            ('section', '场景覆盖完整性', 24),
            ('row', ['读者最常见的3-5个情境，在素材里都有对应内容', '□ 是  □ 有遗漏', '遗漏的：'], 22),
            ('row', ['至少有一个"异常情况或出错了怎么处理"的场景', '□ 是  □ 没有', ''], 22),
            ('space', 10),
            ('section', '角色A视角', 24),
            ('row', ['角色A提供的困惑和坑，已整理至少3条具体问题或错误', '□ 是  □ 未完成', ''], 22),
            ('space', 10),
            ('section', '角色C视角', 24),
            ('row', ['角色C的标准和红线已整理，至少有1条明确的达标标准和1条红线', '□ 是  □ 未完成', ''], 22),
            ('space', 10),
            ('section', '格式准备', 24),
            ('row', ['素材整理表已按对应手册类型的格式填写完整', '□ 是  □ 未完成', ''], 22),
            ('space', 10),
            ('section', '提交Skill时附加说明（如有特殊要求或需要Skill特别注意的地方）：', 24),
            ('row', ['', ''], 40),
            ('row', [('预计提交时间：', '4'), '', ('负责提交的人：', '4'), ''], 22),
        ]
    )


def build_form11():
    """Form11: 初稿快速扫描记录"""
    return make_form_sheet(
        "Form11-初稿快速扫描记录",
        "使用说明：收到Skill生成的初稿后，先做一轮快速扫描（10-15分钟），判断"大方向对不对、最大的问题在哪里"。",
        [
            ('space', 10),
            ('section', '初稿基本信息', 24),
            ('row', [('收到初稿时间：', '4'), '', ('初稿总页数/字数（估算）：', '4'), ''], 22),
            ('space', 10),
            ('section', '维度一：结构扫描（看目录和章节标题）', 24),
            ('header', ['扫描问题', '发现'], 24),
            ('row', ['章节划分是否符合课题定位？覆盖的场景是否和定位表一致？', '□ 基本符合  □ 有偏差：'], 22),
            ('row', ['有没有明显缺失的重要场景？', '□ 没有  □ 有：'], 22),
            ('row', ['有没有和手册无关的内容出现在目录里？', '□ 没有  □ 有：'], 22),
            ('row', ['读者遇到最常见的3个问题，能在目录里找到对应章节吗？', '□ 能  □ 部分能  □ 不能'], 22),
            ('space', 10),
            ('section', '维度二：内容扫描（抽查2-3个章节正文）', 24),
            ('row', ['关键操作步骤，是否还原了骨干员工的真实经验？', '□ 是  □ 变成了笼统描述：'], 22),
            ('row', ['有没有Skill自己生成的、与实际情况不符的内容？', '□ 没有  □ 发现：'], 22),
            ('row', ['有没有把"个人经验"写成了"组织标准"的表述？', '□ 没有  □ 发现：'], 22),
            ('space', 10),
            ('section', '维度三：可用性扫描（以目标读者身份翻阅）', 24),
            ('row', ['翻开第一页，读者知道这本手册是给谁用的吗？', '□ 清楚  □ 不清楚'], 22),
            ('row', ['遇到异常情况，读者能找到对应的处理指引吗？', '□ 能  □ 需要翻找  □ 找不到'], 22),
            ('row', ['随机抽查一个操作步骤，读者知道下一步做什么吗？', '□ 知道  □ 需要猜  □ 不知道'], 22),
            ('space', 10),
            ('section', '快速扫描总结', 24),
            ('row', ['初稿整体评价：□ 方向基本对，进入细化标记  □ 有方向性问题，需要先讨论再标记', ''], 22),
            ('row', ['最大的问题（如果有）：', ''], 40),
        ]
    )


def build_form12():
    """Form12: A角色初稿标记记录表"""
    return make_form_sheet(
        "Form12-角色A初稿标记记录表",
        "使用说明：以读者视角阅读初稿，找出"看不懂"或"不知道怎么做"的地方。标记符号：✓（准确保留）/ △（需补充完善）/ ✗（有误需重写）/ ?（不确定需核实）",
        [
            ('space', 10),
            ('section', '标记信息', 24),
            ('row', [('标记人：', '4'), '', ('阅读日期：', '4'), ''], 22),
            ('space', 10),
            ('section', '标记记录', 24),
            ('header', ['编号', '位置（章节+段落描述）', '标记符号', '具体问题', '建议方向'], 30),
            ('row', ['1', '', '', '', ''], 22),
            ('row', ['2', '', '', '', ''], 22),
            ('row', ['3', '', '', '', ''], 22),
            ('row', ['4', '', '', '', ''], 22),
            ('row', ['5', '', '', '', ''], 22),
            ('row', ['6（如有）', '', '', '', ''], 22),
            ('row', ['7（如有）', '', '', '', ''], 22),
            ('space', 10),
            ('section', '你在访谈时提出的困惑，手册里有没有回答？', 24),
            ('header', ['访谈中的困惑', '手册里有没有对应内容', '如有，是否清晰够用'], 24),
            ('row', ['', '□ 有  □ 没有', '□ 清晰  □ 还不够'], 22),
            ('row', ['', '□ 有  □ 没有', '□ 清晰  □ 还不够'], 22),
            ('row', ['', '□ 有  □ 没有', '□ 清晰  □ 还不够'], 22),
        ]
    )


def build_form13():
    """Form13: B角色初稿标记记录表"""
    return make_form_sheet(
        "Form13-角色B初稿标记记录表",
        "使用说明：以骨干员工的经验视角阅读初稿，找出"经验写错了"或"关键细节消失了"的地方。",
        [
            ('space', 10),
            ('section', '标记信息', 24),
            ('row', [('标记人：', '4'), '', ('阅读日期：', '4'), ''], 22),
            ('space', 10),
            ('section', '标记记录', 24),
            ('header', ['编号', '位置（章节+段落描述）', '标记符号', '实际情况是什么（经验描述有何差异）', '修改建议'], 30),
            ('row', ['1', '', '', '', ''], 22),
            ('row', ['2', '', '', '', ''], 22),
            ('row', ['3', '', '', '', ''], 22),
            ('row', ['4', '', '', '', ''], 22),
            ('row', ['5', '', '', '', ''], 22),
            ('row', ['6（如有）', '', '', '', ''], 22),
            ('space', 10),
            ('section', '初稿里有没有特别好地还原了你的经验、应该保留的内容？', 24),
            ('row', ['', ''], 40),
        ]
    )


def build_form14():
    """Form14: C角色初稿标记记录表"""
    return make_form_sheet(
        "Form14-角色C初稿标记记录表",
        "使用说明：以管理者视角阅读初稿，找出"不符合标准"或"存在合规风险"的地方。",
        [
            ('space', 10),
            ('section', '标记信息', 24),
            ('row', [('标记人：', '4'), '', ('阅读日期：', '4'), ''], 22),
            ('space', 10),
            ('section', '标记记录', 24),
            ('header', ['编号', '位置（章节+段落描述）', '标记符号', '标准偏差或合规问题描述', '正确表述应该是'], 30),
            ('row', ['1', '', '', '', ''], 22),
            ('row', ['2', '', '', '', ''], 22),
            ('row', ['3', '', '', '', ''], 22),
            ('row', ['4', '', '', '', ''], 22),
            ('row', ['5（如有）', '', '', '', ''], 22),
            ('space', 10),
            ('section', '你在访谈中明确的红线，在初稿里有没有被正确体现？', 24),
            ('header', ['红线内容', '初稿里的处理', '是否需要修改'], 24),
            ('row', ['', '□ 正确体现  □ 没有提到  □ 表述有误', '□ 需要  □ 不需要'], 22),
            ('row', ['', '□ 正确体现  □ 没有提到  □ 表述有误', '□ 需要  □ 不需要'], 22),
            ('row', ['', '□ 正确体现  □ 没有提到  □ 表述有误', '□ 需要  □ 不需要'], 22),
        ]
    )


def build_form15():
    """Form15: 汇总修改优先级清单"""
    return make_form_sheet(
        "Form15-汇总修改优先级清单",
        "使用说明：三类人群各自完成标记后，汇总成这份清单。原则：先处理"被多人标记的"和"涉及核心操作步骤的"。",
        [
            ('space', 10),
            ('section', '汇总信息', 24),
            ('row', [('汇总时间：', '4'), '', ('汇总人：', '4'), ''], 22),
            ('space', 10),
            ('section', '修改清单', 24),
            ('header', ['编号', '来源（A/B/C）', '位置', '问题描述', '优先级', '修改负责人', '完成状态'], 24),
            ('row', ['1', '', '', '', '□最优先  □优先  □一般', '', '□待处理  □已完成'], 22),
            ('row', ['2', '', '', '', '□最优先  □优先  □一般', '', '□待处理  □已完成'], 22),
            ('row', ['3', '', '', '', '□最优先  □优先  □一般', '', '□待处理  □已完成'], 22),
            ('row', ['4', '', '', '', '□最优先  □优先  □一般', '', '□待处理  □已完成'], 22),
            ('row', ['5', '', '', '', '□最优先  □优先  □一般', '', '□待处理  □已完成'], 22),
            ('row', ['6', '', '', '', '□最优先  □优先  □一般', '', '□待处理  □已完成'], 22),
            ('row', ['7', '', '', '', '□最优先  □优先  □一般', '', '□待处理  □已完成'], 22),
            ('row', ['8（如有）', '', '', '', '□最优先  □优先  □一般', '', '□待处理  □已完成'], 22),
            ('row', ['9（如有）', '', '', '', '□最优先  □优先  □一般', '', '□待处理  □已完成'], 22),
            ('row', ['10（如有）', '', '', '', '□最优先  □优先  □一般', '', '□待处理  □已完成'], 22),
            ('space', 10),
            ('section', '优先级判断标准', 24),
            ('header', ['优先级', '类型', '说明'], 22),
            ('row', ['最优先', '方向性问题', '整章内容方向跑偏，需要重写'], 22),
            ('row', ['优先', '关键细节缺失', '重要经验或步骤漏掉，需要补充'], 22),
            ('row', ['一般', '表述不准确', '大方向对但描述有偏差，需调整措辞'], 22),
            ('row', ['最后', '语言优化', '内容准确但读起来不够清晰流畅'], 22),
        ]
    )


def build_form16():
    """Form16: 操作手册深度校验清单"""
    return make_form_sheet(
        "Form16-操作手册深度校验清单",
        "使用说明：在三类人群标记和汇总修改之后，进行最后一轮系统性校验。逐项核查。",
        [
            ('space', 10),
            ('section', '结构层面', 24),
            ('header', ['校验项', '检查结果', '需要补充/修改的内容'], 24),
            ('row', ['目录里是否有"遇到异常情况怎么处理"的章节', '□ 是  □ 否', ''], 22),
            ('row', ['各章节是否按照"读者会遇到什么情境"来划分（而非知识点分类）', '□ 是  □ 部分', ''], 22),
            ('row', ['手册开篇是否说明了"这本手册给谁用、遇到什么情况翻哪章"', '□ 是  □ 否', ''], 22),
            ('space', 10),
            ('section', '准确性层面', 24),
            ('row', ['操作步骤是否与骨干员工（角色B）的实际做法一致', '□ 是  □ 部分  □ 否', ''], 22),
            ('row', ['每个步骤是否有"完成标准"（做完了是什么状态）', '□ 是  □ 部分  □ 否', ''], 22),
            ('row', ['术语和缩写是否对目标读者解释清楚了', '□ 是  □ 部分', ''], 22),
            ('row', ['涉及组织规范的内容，是否与角色C确认的标准一致', '□ 是  □ 部分  □ 否', ''], 22),
            ('space', 10),
            ('section', '完整性层面', 24),
            ('row', ['角色A提出的困惑，是否都在手册里找到了对应回答', '□ 是  □ 部分  □ 否', ''], 22),
            ('row', ['角色B提到的关键诀窍，是否都保留在初稿中', '□ 是  □ 部分  □ 否', ''], 22),
            ('row', ['至少有一个"出错了/遇到异常时该怎么做"的场景描述', '□ 是  □ 否', ''], 22),
            ('row', ['红线内容（角色C提供）是否都有体现', '□ 是  □ 部分  □ 否', ''], 22),
            ('space', 10),
            ('section', '可用性层面', 24),
            ('row', ['步骤之间有没有"隐含步骤"（从A到B中间还需要做什么，但没写）', '□ 已检查，无遗漏  □ 发现遗漏：', ''], 22),
            ('row', ['角色A拿着这份初稿，能独立完成一次操作吗', '□ 能  □ 部分能  □ 不能', ''], 22),
            ('row', ['手册里是否有对应的表单/工具（或标明了在哪里能找到）', '□ 是  □ 否', ''], 22),
        ]
    )


def build_form17():
    """Form17: 带教手册深度校验清单"""
    return make_form_sheet(
        "Form17-带教手册深度校验清单",
        "使用说明：带教手册的校验重点在于"带教人按照这本手册，能独立完成一次带教吗"。",
        [
            ('space', 10),
            ('section', '结构层面', 24),
            ('header', ['校验项', '检查结果', '需要补充/修改的内容'], 24),
            ('row', ['带教阶段划分是否清晰（每个阶段的时间范围和目标明确）', '□ 是  □ 部分', ''], 22),
            ('row', ['各阶段是否都有对应的"示范要点"和"观察要点"', '□ 是  □ 部分  □ 否', ''], 22),
            ('row', ['手册是否有"带教人使用说明"（这本手册怎么用，每阶段用哪部分）', '□ 是  □ 否', ''], 22),
            ('space', 10),
            ('section', '准确性层面', 24),
            ('row', ['带教方法描述是否具体到"做什么动作、说什么话"', '□ 是  □ 部分', ''], 22),
            ('row', ['带教人按照这本手册，能独立完成一次带教吗', '□ 能  □ 部分能  □ 不能', ''], 22),
            ('row', ['验收标准是否和管理者（角色C）的标准一致', '□ 是  □ 部分  □ 否', ''], 22),
            ('space', 10),
            ('section', '完整性层面', 24),
            ('row', ['是否有"常见带教卡点"的描述（新人在哪里卡住，怎么引导）', '□ 是  □ 否', ''], 22),
            ('row', ['是否有"带教误区"的描述（带教人可能犯的错）', '□ 是  □ 否', ''], 22),
            ('row', ['是否覆盖了完整的带教周期（从开始到验收通关）', '□ 是  □ 部分', ''], 22),
            ('space', 10),
            ('section', '可用性层面', 24),
            ('row', ['带教跟进记录的方法是否具体（记什么、什么时候记、记录在哪里）', '□ 是  □ 部分', ''], 22),
            ('row', ['带教人能从手册里找到"这阶段结束了吗"的判断标准吗', '□ 是  □ 否', ''], 22),
            ('row', ['带教跟进记录表/阶段验收表是否已嵌入手册', '□ 是  □ 否', ''], 22),
        ]
    )


def build_form18():
    """Form18: 应知应会手册深度校验清单"""
    return make_form_sheet(
        "Form18-应知应会手册深度校验清单",
        "使用说明：应知应会手册的校验重点在于"新人读完之后，对这个岗位的整体认知地图是否清晰"。",
        [
            ('space', 10),
            ('section', '结构层面', 24),
            ('header', ['校验项', '检查结果', '需要补充/修改的内容'], 24),
            ('row', ['手册是否有"速查索引"或"按场景找内容"的入口', '□ 是  □ 否', ''], 22),
            ('row', ['内容颗粒度是否是"认知地图"级别，而非"操作手册"级别（偏深）', '□ 是  □ 偏深需调整', ''], 22),
            ('row', ['手册开篇是否说明了阅读时机和使用方法', '□ 是  □ 否', ''], 22),
            ('space', 10),
            ('section', '准确性层面', 24),
            ('row', ['核心术语解释是否准确（角色C确认）', '□ 是  □ 部分  □ 否', ''], 22),
            ('row', ['岗位职责描述是否与实际工作内容一致', '□ 是  □ 部分', ''], 22),
            ('row', ['主要对接部门/联系方式等信息是否最新有效', '□ 是  □ 需核实', ''], 22),
            ('space', 10),
            ('section', '完整性层面', 24),
            ('row', ['新人常见问题清单，是否都有对应的简短回答', '□ 是  □ 部分  □ 否', ''], 22),
            ('row', ['雷区清单，是否有至少3条明确的"不能做什么、为什么"', '□ 是  □ 否', ''], 22),
            ('row', ['高频场景，是否都有"遇到了→找谁→怎么处理"的指引', '□ 是  □ 部分', ''], 22),
            ('space', 10),
            ('section', '可用性层面', 24),
            ('row', ['角色A读完全本，能用自己的话复述这个岗位的主要工作吗', '□ 能  □ 部分  □ 不能', ''], 22),
            ('row', ['速查表/术语表是否清晰，方便新人翻查', '□ 是  □ 需优化', ''], 22),
        ]
    )


def build_form19():
    """Form19: 五步优化工作表"""
    return make_form_sheet(
        "Form19-五步优化工作表",
        "使用说明：对手册的核心章节逐步应用五步优化法。建议先完成第一步（痛点共鸣），其余步骤视手册内容情况选用。",
        [
            ('space', 10),
            ('section', '手册信息', 24),
            ('row', [('手册名称：', '4'), '', ('本次优化的目标章节：', '4'), ''], 22),
            ('space', 10),
            ('section', '第一步：让人有意愿读——痛点共鸣', 24),
            ('row', ['目标：开篇第一段，让读者觉得"这说的就是我"。', ''], 20),
            ('row', ['改写前（原开篇）：', ''], 22),
            ('row', ['', ''], 40),
            ('row', ['改写后（痛点共鸣段落，150-200字）：', ''], 22),
            ('row', ['', ''], 60),
            ('space', 10),
            ('section', '第二步：让人建立连接——场景描述', 24),
            ('row', ['目标：把"注意X"改写成"当你在Y情境下……"，让读者脑子里能看见画面。', ''], 20),
            ('row', ['选取需要改写的原表述（1-2条）：', ''], 22),
            ('row', ['改写后：', ''], 40),
            ('space', 10),
            ('section', '第三步：让人理解价值——给出理由', 24),
            ('row', ['目标：在关键步骤后面加上"这样做的价值是什么"，让读者知道为什么值得按这个要求做。', ''], 20),
            ('row', ['选取需要补充"理由"的步骤：', ''], 22),
            ('row', ['补充后：', ''], 40),
            ('space', 10),
            ('section', '第四步：让人知道下一步——行动驱动', 24),
            ('row', ['目标：章节末尾加2-3个自查问题，或者一句话的行动提醒。', ''], 20),
            ('row', ['本章节末尾的自查问题/行动提醒草稿：', ''], 40),
            ('space', 10),
            ('section', '第五步：让人带走一个信念——结尾强化', 24),
            ('row', ['目标：全文结尾，用一段话说明"做到这件事，对读者自己意味着什么"。', ''], 20),
            ('row', ['结尾强化段落草稿（50-100字）：', ''], 40),
            ('space', 10),
            ('section', '优化前后对比', 24),
            ('header', ['', '优化前', '优化后'], 22),
            ('row', ['开篇吸引力', '□ 低  □ 中  □ 高', '□ 低  □ 中  □ 高'], 22),
            ('row', ['场景感', '□ 低  □ 中  □ 高', '□ 低  □ 中  □ 高'], 22),
            ('row', ['行动指引清晰度', '□ 低  □ 中  □ 高', '□ 低  □ 中  □ 高'], 22),
        ]
    )


def build_form20():
    """Form20: 交叉评审反馈表"""
    return make_form_sheet(
        "Form20-交叉评审反馈表",
        "使用说明：同类手册互评时使用（操作手册互评/带教手册互评/应知应会手册互评）。阅读对方手册前三章，用约15-20分钟，提出2-3条有价值的优化建议。",
        [
            ('space', 10),
            ('section', '评审基本信息', 24),
            ('header', ['项目', '信息'], 22),
            ('row', ['评审人', ''], 22),
            ('row', ['被评审手册名称', ''], 22),
            ('row', ['被评审小组', ''], 22),
            ('row', ['评审日期', ''], 22),
            ('space', 10),
            ('section', '四个维度评审', 24),
            ('header', ['维度', '总体评价', '具体发现'], 24),
            ('row', ['内容准确性（有没有发现错误或容易引起误解的表述）', '□ 没有发现问题  □ 发现了问题', ''], 22),
            ('row', ['操作可行性（目标读者按这本手册能独立完成操作吗）', '□ 能  □ 部分能  □ 不能', ''], 22),
            ('row', ['语言通俗性（有没有对目标读者来说太专业或解释不清的地方）', '□ 通俗清晰  □ 有部分需要改', ''], 22),
            ('row', ['格式规范性（格式是否清晰，工具和正文是否明确区分）', '□ 规范  □ 需要调整', ''], 22),
            ('space', 10),
            ('section', '优化建议（每条建议尽量具体：位置+问题+建议方向）', 24),
            ('header', ['编号', '位置（第几章/第几节）', '问题描述', '建议方向'], 24),
            ('row', ['1', '', '', ''], 22),
            ('row', ['2', '', '', ''], 22),
            ('row', ['3', '', '', ''], 22),
            ('space', 10),
            ('section', '手册负责人处理决定', 24),
            ('header', ['反馈编号', '处理决定', '理由（不采纳的说明为什么）'], 24),
            ('row', ['1', '□ 采纳  □ 不采纳', ''], 22),
            ('row', ['2', '□ 采纳  □ 不采纳', ''], 22),
            ('row', ['3', '□ 采纳  □ 不采纳', ''], 22),
        ]
    )


def build_form21():
    """Form21: 工作坊后迭代计划表"""
    return make_form_sheet(
        "Form21-工作坊后迭代计划表",
        "使用说明：工作坊最后阶段，每个课题组填写一份，用于明确手册发布前还需要完成的工作，以及发布后的维护安排。",
        [
            ('space', 10),
            ('section', '课题信息', 24),
            ('row', [('手册名称：', '4'), '', ('课题负责人：', '4'), ''], 22),
            ('space', 10),
            ('section', '工作坊结束时的完成状态', 24),
            ('header', ['项目', '状态'], 24),
            ('row', ['手册核心内容完成度', '□ 80%以上  □ 50-80%  □ 50%以下'], 22),
            ('row', ['工具包是否已嵌入手册', '□ 已完成  □ 部分完成  □ 未完成'], 22),
            ('row', ['典型案例是否已写入', '□ 已完成  □ 部分完成  □ 未完成'], 22),
            ('row', ['五步优化是否已完成', '□ 已完成  □ 部分完成  □ 未完成'], 22),
            ('space', 10),
            ('section', '工作坊后待完成清单', 24),
            ('header', ['待完成事项', '负责人', '预计完成时间'], 24),
            ('row', ['', '', ''], 22),
            ('row', ['', '', ''], 22),
            ('row', ['', '', ''], 22),
            ('row', ['', '', ''], 22),
            ('space', 10),
            ('section', '发布前审核计划', 24),
            ('header', ['审核阶段', '审核内容', '审核方', '预计时间'], 24),
            ('row', ['内容审核', '操作步骤与实际工作一致性确认', '角色B（业务骨干）', ''], 22),
            ('row', ['合规审核', '规范承诺责任界定等内容合规性确认', '角色C + 相关职能部门', ''], 22),
            ('row', ['试用验证', '2-3名真实目标读者用手册实际操作一次', '角色A类型的真实用户', ''], 22),
            ('row', ['发布定稿', '根据试用反馈做最终调整，完成排版', '课题负责人', ''], 22),
            ('space', 10),
            ('section', '持续迭代机制', 24),
            ('row', ['更新触发条件：□ 每半年定期评审  □ 流程有重大变化时  □ 收集到明显新的案例或问题时', ''], 22),
            ('row', ['更新信号收集方式：', ''], 30),
            ('row', ['版本管理方式：', ''], 30),
            ('space', 10),
            ('section', '工作坊总结', 24),
            ('row', ['这次工作坊，我收获最大的一点是：', ''], 40),
            ('row', ['这套手册发布之后，我最想看到的改变是：', ''], 40),
        ]
    )


if __name__ == '__main__':
    main()
