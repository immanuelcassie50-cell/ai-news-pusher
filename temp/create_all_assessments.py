#!/usr/bin/env python3
"""
批量生成专业技术人员10大测评Excel文件
"""

import os
import shutil
import subprocess

SKILL_DIR = r"C:\Users\Administrator\.claude\skills\Excel表格处理"
TEMPLATE_DIR = os.path.join(SKILL_DIR, "templates", "minimal_xlsx")
OUTPUT_DIR = r"D:\新课开发\测评表单\专业技术人员10大测评"

# ============================================================
# 评估工具定义 (仅02-10，01已单独创建)
# ============================================================

ASSESSMENTS = {
    "02": {
        "name": "技术人员业务意识诊断量表",
        "file": "02_技术人员业务意识诊断量表.xlsx",
        "questions": 24,
        "dimensions": {
            "业务逻辑理解": (1, 6),
            "价值量化意识": (7, 12),
            "跨角色沟通": (13, 18),
            "需求溯源能力": (19, 24),
        },
        "scale": "情境判断",
        "scoring": "四维度剖面图",
        "interpretations": [
            ("均衡型", "您的业务意识四个维度发展均衡，具备全面的业务翻译能力。"),
            ("理解偏弱", "您的业务逻辑理解维度需要加强，建议多追问'为什么做'。"),
            ("量化偏弱", "您的价值量化意识需要提升，尝试用业务指标表达技术价值。"),
            ("沟通偏弱", "您的跨角色沟通能力需要加强，练习用对方语言表达技术。"),
            ("溯源偏弱", "您的需求溯源能力较弱，注意追问需求的来源和真正目的。"),
        ],
    },
    "03": {
        "name": "技术人员职业路径选择适配性测评",
        "file": "03_技术人员职业路径选择适配性测评.xlsx",
        "questions": 30,
        "dimensions": {
            "深度工作偏好": (1, 6),
            "人际影响偏好": (7, 12),
            "模糊性容忍度": (13, 18),
            "成就归因偏好": (19, 24),
            "控制权需求": (25, 30),
        },
        "scale": "5点量表",
        "scoring": "五维度剖面图(IC/管理倾向颜色区分)",
        "interpretations": [
            ("IC倾向强", "您更适合独立贡献者(IC)的技术发展路径。"),
            ("管理倾向强", "您具备向技术管理方向发展的潜力。"),
            ("均衡发展", "您在IC和管理方向都有一定基础，选择空间较大。"),
            ("深度工作型", "您偏好独立完成复杂任务，适合专家路线。"),
            ("人际影响型", "您喜欢影响和带动他人，适合管理路线。"),
        ],
    },
    "04": {
        "name": "知识更新焦虑与学习行为量表",
        "file": "04_知识更新焦虑与学习行为量表.xlsx",
        "questions": 24,
        "dimensions": {
            "知识更新焦虑": (1, 8),
            "主动学习行为": (9, 16),
            "学习效能感": (17, 24),
        },
        "scale": "焦虑和行为独立计分",
        "scoring": "2x2矩阵(高焦虑高行为/高焦虑低行为/低焦虑高行为/低焦虑低行为)",
        "interpretations": [
            ("高焦虑高行为", "您对知识更新有焦虑感，但也在积极学习。这是健康的成长状态。"),
            ("高焦虑低行为", "您对知识更新感到焦虑，但学习行动不足。需要立即行动来缓解焦虑。"),
            ("低焦虑高行为", "您积极学习但焦虑感低。这是理想的学习状态。"),
            ("低焦虑低行为", "您对知识更新既不焦虑也不积极学习。需要警惕 complacency。"),
            ("效能感高", "您的技术学习自信心强，能够有效整合新知识。"),
            ("效能感低", "您对技术学习存在一定畏难情绪，需要建立信心。"),
        ],
    },
    "05": {
        "name": "技术人员问题解决风格测评",
        "file": "05_技术人员问题解决风格测评.xlsx",
        "questions": 20,
        "dimensions": {
            "系统化偏好": (1, 10),
            "直觉型偏好": (11, 20),
        },
        "scale": "强迫二选一",
        "scoring": "0-7高系统化/8-13平衡型/14-20高直觉",
        "interpretations": [
            ("高系统化型", "您倾向于系统化、一步一步地解决问题，适合复杂系统工程。"),
            ("平衡型", "您兼俱系统化和直觉型的特点，适应能力较强。"),
            ("高直觉型", "您倾向于直觉式的问题解决，适合快速决策场景。"),
        ],
    },
    "06": {
        "name": "技术人员跨职能协作能力诊断",
        "file": "06_技术人员跨职能协作能力诊断.xlsx",
        "questions": 24,
        "dimensions": {
            "沟通适配": (1, 6),
            "标准对齐": (7, 12),
            "协作时机": (13, 18),
            "冲突处理": (19, 24),
        },
        "scale": "情境判断题",
        "scoring": "4选项代表不同协作成熟度水平",
        "interpretations": [
            ("协作成熟", "您的跨职能协作能力成熟，能够有效推动跨部门合作。"),
            ("沟通待提升", "您的沟通适配能力需要加强，注意用对方语言表达。"),
            ("标准待对齐", "您需要加强跨部门标准对齐意识。"),
            ("时机待把握", "您需要更好地判断跨职能协作的介入时机。"),
            ("冲突处理弱", "您需要提升冲突处理和推动共识的能力。"),
        ],
    },
    "07": {
        "name": "技术人员影响力拓展风格测评",
        "file": "07_技术人员影响力拓展风格测评.xlsx",
        "questions": 20,
        "dimensions": {
            "技术权威型": (1, 5),
            "关系网络型": (6, 10),
            "知识传播型": (11, 15),
            "流程推动型": (16, 20),
        },
        "scale": "5点频率量表",
        "scoring": "四模式频率分布+主导影响力模式",
        "interpretations": [
            ("技术权威型主导", "您主要通过技术实力来建立影响力，适合专家路线。"),
            ("关系网络型主导", "您主要通过人际网络来拓展影响，适合管理路线。"),
            ("知识传播型主导", "您主要通过知识分享来扩大影响，适合技术传播路线。"),
            ("流程推动型主导", "您主要通过流程优化来体现价值，适合流程改进路线。"),
            ("均衡发展", "您的各种影响力方式发展均衡，适应能力较强。"),
        ],
    },
    "08": {
        "name": "技术文档与知识传递质量自评",
        "file": "08_技术文档与知识传递质量自评.xlsx",
        "questions": 21,
        "dimensions": {
            "知识外化": (1, 7),
            "知识传授": (8, 14),
            "知识更新": (15, 21),
        },
        "scale": "5点频率量表",
        "scoring": "三维度剖面图",
        "interpretations": [
            ("优秀", "您的技术文档和知识传递能力优秀，是团队的知识桥梁。"),
            ("知识外化强", "您擅长将技术知识外化为文档，知识外化能力强。"),
            ("知识传授强", "您擅长传授技术知识，帮助他人成长做得好。"),
            ("知识更新强", "您擅长追踪和更新技术知识，保持知识新鲜度。"),
            ("整体待提升", "您的技术文档和知识传递能力有较大提升空间。"),
        ],
    },
    "09": {
        "name": "技术人员持续改进意识测评",
        "file": "09_技术人员持续改进意识测评.xlsx",
        "questions": 24,
        "dimensions": {
            "问题感知敏锐度": (1, 6),
            "实验行动意愿": (7, 12),
            "失败接受度": (13, 18),
            "系统化归纳习惯": (19, 24),
        },
        "scale": "5点量表",
        "scoring": "Kaizen行为闭环诊断",
        "interpretations": [
            ("Kaizen践行者", "您具备持续改进的意识和方法论，是团队改进的推动者。"),
            ("问题感知强", "您对问题感知敏锐，能够发现潜在改进点。"),
            ("实验意愿强", "您愿意尝试新方案并承担失败风险。"),
            ("失败接受度高", "您能够从失败中学习，不惧怕失败。"),
            ("归纳习惯好", "您擅长将改进经验系统化并分享。"),
            ("待开发", "您需要加强持续改进的意识和方法。"),
        ],
    },
    "10": {
        "name": "技术人员职业倦怠早期信号量表",
        "file": "10_技术人员职业倦怠早期信号量表.xlsx",
        "questions": 27,
        "dimensions": {
            "技术意义感": (1, 9),
            "精力消耗结构": (10, 18),
            "职业身份稳定性": (19, 27),
        },
        "scale": "4点量表",
        "scoring": "交通灯系统(红/黄/绿三色显示)",
        "interpretations": [
            ("绿灯-低风险", "您的职业倦怠风险较低，目前状态良好。"),
            ("黄灯-需要注意", "您显示出一些倦怠早期信号，需要关注和调整。"),
            ("红灯-高风险", "您的倦怠风险较高，建议立即采取干预措施。"),
            ("意义感低", "您对技术工作的意义感有所下降，需要重新找到技术工作的价值。"),
            ("精力消耗高", "您感到精力消耗过度，需要注意工作生活平衡。"),
            ("身份稳定低", "您对技术职业身份有些迷茫，需要重新规划技术职业路径。"),
        ],
    },
}

# ============================================================
# 题目内容 (来自解读文件)
# ============================================================

QUESTIONS_TEXT = {
    "02": [
        "产品经理提了一个需求，您第一反应是？",
        "面对技术方案评审，您的关注点是？",
        "当业务方需求与技术实现冲突时，您会？",
        "接到一个新需求，您首先会？",
        "系统上线后效果未达预期，您的做法是？",
        "业务方提出一个模糊的需求描述，您会？",
        "技术优化成果汇报，您倾向于用哪种方式？",
        "评估技术投入价值时，您主要看？",
        "周报中描述技术工作，您通常会？",
        "技术选型讨论中，您习惯用哪种论据？",
        "面对\"这个需求做出来有什么用\"的质疑，您会？",
        "用数据说服他人时，您通常依赖？",
        "向非技术人员解释技术方案，您的策略是？",
        "跨部门会议中，您的沟通风格倾向于？",
        "当其他部门不理解您的技术决策时，您会？",
        "技术文档的读者是产品经理，您的写作原则是？",
        "与业务方讨论系统限制时，您的表达方式通常是？",
        "在资源有限的讨论中，您如何推动共识？",
        "分析一个需求时，您习惯从哪里开始？",
        "当需求方说\"先做出来看看效果\"时，您的反应是？",
        "产品经理提出了一个技术难度很大的需求，您的做法是？",
        "发现需求背后的真实问题后，您的处理方式是？",
        "面对\"别人都这么做\"的需求理由，您的态度是？",
        "需求评审时，您最关注的是哪个环节？",
    ],
    "03": [
        "我倾向于独立完成复杂的技术任务，而不是团队协作",
        "在技术深度和团队管理之间，我更享受深度技术工作",
        "我希望有大量不受干扰的时间专注于技术研究",
        "我更喜欢独自思考解决方案，而非讨论式解决问题",
        "技术专业领域的突破比带团队给我更大满足感",
        "当沉浸在代码中时，我感到最充实和有价值",
        "我乐于指导他人的技术成长，看到他们进步让我满足",
        "我主动推动技术决策向有利于团队的方向发展",
        "我享受在跨部门会议中代表技术团队发言",
        "帮助非技术同事理解技术问题对我来说是种乐趣",
        "我希望有机会影响团队的技术文化和方向",
        "我愿意为团队的共同目标做出个人牺牲",
        "在模糊的需求面前，我能保持冷静并推进工作",
        "面对不断变化的业务需求，我能够快速调整",
        "我喜欢在信息不完整的情况下做出技术决策",
        "我对\"没有标准答案\"的技术挑战感到兴奋",
        "我不介意同时处理多个不确定的项目",
        "在需求不清晰时，我有信心带领团队找到方向",
        "当项目成功时，我认为主要是因为团队的努力",
        "我倾向于将个人成就归功于团队的协作",
        "我相信成功来自于大家的共同投入，而非个人能力",
        "我很少单独强调个人在项目中的作用",
        "我更看重团队目标而非个人荣誉",
        "我相信每个人的贡献都是成功的一部分",
        "我希望能够掌控技术决策的最后拍板权",
        "在技术路径选择上，我希望能自己做主",
        "我不愿意在关键技术决策上妥协",
        "我希望能对团队的技术方向有最终决定权",
        "我倾向于一个人承担最终的技术责任",
        "我希望我的技术影响力能够覆盖团队之外",
    ],
    "04": [
        "当看到新技术文章时，我感到时间不够用",
        "我担心自己的技术栈正在变得过时",
        "订阅的技术博客越多，我越感到焦虑",
        "看到年轻程序员用新技术，我会感到压力",
        "我害怕在技术分享会上被问到我不熟悉的技术",
        "当有人说\"现在都不用水技术\"时，我会感到不安",
        "我发现自己在技术更新面前越来越跟不上",
        "我担心自己的技术价值会因知识老化而下降",
        "我主动订阅并阅读技术博客和行业资讯",
        "我会定期安排时间学习新技术",
        "我积极参与技术社区的讨论和知识分享",
        "当遇到不懂的技术时，我会主动学习和研究",
        "我会把学到的新技术应用到实际工作中",
        "我定期参加技术培训和在线课程",
        "我主动寻找机会参与新技术的实践项目",
        "我会记录和整理自己的技术学习笔记",
        "我相信自己有能力掌握任何新技术",
        "面对新的技术挑战，我对自己的学习能力有信心",
        "我觉得自己的技术学习效率很高",
        "我能够将新技术快速整合到现有知识体系中",
        "我认为自己是一个有效的技术学习者",
        "我相信持续学习能让我保持技术竞争力",
        "我对解决从未见过的新问题有信心",
        "我相信自己在技术领域有足够的成长潜力",
    ],
    "05": [
        "遇到问题时，我倾向于先收集数据再分析",
        "我更喜欢按步骤操作而非凭感觉判断",
        "解决问题时，我会列出所有可能的解决方案",
        "我习惯用逻辑推理而非直觉来验证假设",
        "我会在行动前制定详细的行动计划",
        "我更相信系统化的方法而非个人经验",
        "面对复杂问题，我会将其分解为小问题",
        "我习惯用文档记录分析过程",
        "我会用科学方法验证技术方案的有效性",
        "我相信分析比直觉更可靠",
        "我经常凭第一感觉找到问题所在",
        "我相信自己的经验和直觉",
        "我能在信息不完整时快速做出判断",
        "我善于识别问题中的模式并直接应用类似解决方案",
        "我经常跳过详细分析就能看出答案",
        "我相信有时候\"第六感\"比分析更有效",
        "我能在问题现场快速判断问题原因",
        "我习惯快速试错而非慢慢分析",
        "我经常用类比的方式解决新问题",
        "我相信自己的技术直觉经得起验证",
    ],
    "06": [
        "与产品经理讨论需求时，您的开场方式是？",
        "当需要向运营解释系统变更时，您会？",
        "与非技术背景的同事协作时，您的策略是？",
        "在跨部门会议中，您如何表达技术观点？",
        "当对方无法理解技术术语时，您的应对是？",
        "您如何确保技术文档对非技术人员可读？",
        "技术方案与业务目标不一致时，您会？",
        "当产品规格与现有技术架构冲突时，您会？",
        "不同部门对\"完成\"的定义不同时，您会？",
        "如何在协作中建立共同的技术语言？",
        "当团队标准与行业标准有差异时，您会？",
        "如何协调多个部门的技术期望？",
        "您如何判断跨职能协作的介入时机？",
        "在项目早期，您如何参与产品定义？",
        "当需求变更过于频繁时，您会？",
        "您如何平衡主动介入与尊重边界？",
        "何时应主动推动跨部门的技术决策？",
        "如何判断协作已经充分还是需要继续？",
        "面对技术方案分歧，您如何推动共识？",
        "与其他部门产生利益冲突时，您会？",
        "当技术判断与业务判断产生摩擦时，您会？",
        "协作中出现僵局时，您的处理方式是？",
        "如何处理跨部门协作中的责任模糊地带？",
        "当需要打破部门壁垒时，您的策略是？",
    ],
    "07": [
        "我通过解决技术难题来赢得他人的尊重",
        "当别人遇到技术问题时，我会主动提供帮助",
        "我相信用技术实力说话是最好的影响力方式",
        "我在团队中以技术深厚而著称",
        "我通过展示技术方案的价值来推动决策",
        "我主动与不同部门的同事建立工作关系",
        "我善于利用私人关系推动工作进展",
        "我相信\"关系好，事情就顺\"这个道理",
        "我经常通过非正式沟通解决跨部门问题",
        "我会维护一个广泛的技术人脉网络",
        "我主动分享技术知识，帮助他人成长",
        "我通过写技术博客来建立影响力",
        "我乐于在团队中做技术培训",
        "我相信知识分享是扩大影响的有效方式",
        "我经常参与技术社区的活动和讨论",
        "我推动团队建立标准化的技术流程",
        "我相信通过流程可以确保技术质量",
        "我善于用流程来协调不同部门的合作",
        "我通过优化工作流程来体现技术价值",
        "我相信好的流程比个人能力更可靠",
    ],
    "08": [
        "我能够将技术方案的设计思路清晰地记录下来",
        "我能够用图表和流程图来表达技术逻辑",
        "我能够将复杂的技术问题简化为易于理解的形式",
        "我能将代码注释写得清晰且有用",
        "我能够编写让后人易于维护的技术文档",
        "我能够清晰地记录技术决策的原因和背景",
        "我能够将隐性的技术经验转化为文字记录",
        "我能帮助同事理解复杂的技术概念",
        "我能够有效地进行技术方案讲解",
        "我能够回答非技术人员的技术疑问",
        "我能够指导新人理解项目架构",
        "我能够在讨论中清晰地表达技术观点",
        "我能将技术判断的依据解释清楚",
        "我能够将技术风险用非技术语言表达",
        "我定期回顾和更新自己的技术知识",
        "我能够识别哪些技术知识已经过时",
        "我主动学习所属领域的新技术和新趋势",
        "我能够评估新技术的适用性和价值",
        "我定期清理和更新自己的知识库",
        "我能够将新技术整合到现有技术体系中",
        "我能够判断技术债务的优先级并建议更新",
    ],
    "09": [
        "我能够识别出流程中潜在的效率瓶颈",
        "我经常发现系统中可以优化的小细节",
        "我能够提前预判技术债务的积累风险",
        "我对\"差不多就行\"的工作方式感到不安",
        "我能够发现团队协作中的沟通损耗",
        "我经常思考\"有没有更好的方式\"",
        "我愿意尝试新的技术方案，即使不确定是否更好",
        "我会为了验证一个想法而投入时间实验",
        "我愿意为一个想法的失败承担风险",
        "我主动推动技术改进提案的实施",
        "我乐于接受挑战性的技术优化任务",
        "我愿意花时间在生产环境验证改进方案",
        "我能接受失败并从中提取经验教训",
        "我不会因为失败而放弃改进的尝试",
        "我相信很多改进源于多次失败的积累",
        "我能够公开承认自己的技术错误",
        "我能够总结每次改进的成果和教训",
        "我会将改进经验形成文档分享给团队",
        "我习惯将改进措施系统化而非一次性",
        "我能够建立标准化的改进检查清单",
        "我能够将点状的改进经验归纳为方法论",
        "我会定期回顾改进措施的执行效果",
        "我能够将改进成果固化为团队最佳实践",
        "我能够追踪改进措施的系统性影响",
    ],
    "10": [
        "我觉得现在的工作越来越没有技术挑战性",
        "我对新技术失去了以往的热情",
        "写代码从享受变成了完成任务",
        "我觉得自己像一台代码生产机器",
        "我开始怀疑自己是否还热爱技术工作",
        "我觉得技术工作的意义感在下降",
        "我的技术成长速度明显放缓了",
        "我对解决技术难题不再感到兴奋",
        "我觉得工作只是在应付而不是在创造",
        "我经常感到工作压力巨大而无法释放",
        "下班后我完全没有精力再做其他事",
        "我经常因为工作问题而失眠或早醒",
        "我需要用大量休息来恢复工作消耗的精力",
        "我已经很久没有真正放松的感觉了",
        "我的工作占据了大部分的个人时间",
        "我感到身心俱疲，即使休息也无法缓解",
        "我对工作之外的事情越来越不感兴趣",
        "我觉得自己的精力正在被工作抽干",
        "我不确定自己的技术方向是否正确",
        "我不知道未来技术职业该如何发展",
        "我觉得自己停滞不前，没有进步",
        "我对技术职业失去了长期规划的动力",
        "我不确定自己还能在技术道路上走多远",
        "我觉得技术工作不是我真正想要的",
        "我在职业身份上感到迷茫和困惑",
        "我不知道除了技术我还能做什么",
        "我觉得自己被困在了技术职业里",
    ],
}

# ============================================================
# XML构建工具
# ============================================================

def build_styles():
    return '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <numFmts count="4">
    <numFmt numFmtId="164" formatCode="$#,##0;($#,##0);&quot;-&quot;"/>
    <numFmt numFmtId="165" formatCode="0.0%"/>
    <numFmt numFmtId="166" formatCode="0.0x"/>
    <numFmt numFmtId="167" formatCode="#,##0"/>
  </numFmts>
  <fonts count="5">
    <font><sz val="11"/><name val="微软雅黑"/></font>
    <font><sz val="11"/><name val="微软雅黑"/><color rgb="000000FF"/></font>
    <font><sz val="11"/><name val="微软雅黑"/><color rgb="00000000"/></font>
    <font><sz val="11"/><name val="微软雅黑"/><color rgb="00008000"/></font>
    <font><sz val="11"/><name val="微软雅黑"/><b/></font>
  </fonts>
  <fills count="3">
    <fill><patternFill patternType="none"/></fill>
    <fill><patternFill patternType="gray125"/></fill>
    <fill>
      <patternFill patternType="solid">
        <fgColor rgb="00FFFF00"/>
        <bgColor indexed="64"/>
      </patternFill>
    </fill>
  </fills>
  <borders count="1">
    <border><left/><right/><top/><bottom/><diagonal/></border>
  </borders>
  <cellXfs count="13">
    <xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/>
    <xf numFmtId="0" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1"/>
    <xf numFmtId="0" fontId="2" fillId="0" borderId="0" xfId="0" applyFont="1"/>
    <xf numFmtId="0" fontId="3" fillId="0" borderId="0" xfId="0" applyFont="1"/>
    <xf numFmtId="0" fontId="4" fillId="0" borderId="0" xfId="0" applyFont="1"/>
    <xf numFmtId="164" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>
    <xf numFmtId="164" fontId="2" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>
    <xf numFmtId="165" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>
    <xf numFmtId="165" fontId="2" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>
    <xf numFmtId="167" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>
    <xf numFmtId="167" fontId="2" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>
    <xf numFmtId="1" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>
    <xf numFmtId="0" fontId="1" fillId="2" borderId="0" xfId="0" applyFont="1" applyFill="1"/>
  </cellXfs>
</styleSheet>'''

def build_workbook_xml(sheets):
    lines = []
    for i, (sheet_id, sheet_name) in enumerate(sheets):
        if i == 0:
            rid = "rId1"
        else:
            rid = f"rId{i+4}"
        lines.append(f'    <sheet name="{sheet_name}" sheetId="{sheet_id}" r:id="{rid}"/>')
    sheet_xml = '\n'.join(lines)
    return f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook
  xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <fileVersion appName="xl" lastEdited="7" lowestEdited="7"/>
  <workbookPr defaultThemeVersion="166925"/>
  <bookViews>
    <workbookView xWindow="0" yWindow="0" windowWidth="20140" windowHeight="10960"/>
  </bookViews>
  <sheets>
{sheet_xml}
  </sheets>
  <calcPr calcId="191029"/>
</workbook>'''

def build_workbook_rels(sheet_count):
    rels = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1"
    Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet"
    Target="worksheets/sheet1.xml"/>
  <Relationship Id="rId2"
    Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles"
    Target="styles.xml"/>
  <Relationship Id="rId3"
    Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings"
    Target="sharedStrings.xml"/>
'''
    for i in range(1, sheet_count):
        rid = i + 4
        rels += f'  <Relationship Id="rId{rid}"\n'
        rels += f'    Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet"\n'
        rels += f'    Target="worksheets/sheet{i+1}.xml"/>\n'
    rels += '</Relationships>'
    return rels

def build_content_types(sheet_count):
    ct = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/xl/workbook.xml"
    ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
  <Override PartName="/xl/styles.xml"
    ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>
  <Override PartName="/xl/sharedStrings.xml"
    ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/>
'''
    for i in range(sheet_count):
        ct += f'  <Override PartName="/xl/worksheets/sheet{i+1}.xml"\n'
        ct += f'    ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>\n'
    ct += '</Types>'
    return ct

def make_ss_table(assessment):
    """构建共享字符串表，返回(完整列表, 索引映射)"""
    strings = []

    # 基础标签 (indices 0-7)
    BASE_LABELS = [
        "题号", "题目内容", "选项/评分",
        "维度", "得分", "解读",
        "类型标签", "解读内容",
    ]

    # Index 0: 评估名称 (will be set per assessment)
    strings.append(assessment["name"])  # 0: name
    # Index 1: 使用说明
    strings.append(f"使用说明：请根据自己的实际情况选择最符合的选项。({assessment['scale']})")  # 1
    strings.extend(BASE_LABELS[0:7])  # indices 2-8

    # 维度标签 (starts at index 9)
    dim_idx_start = 9
    dim_labels = list(assessment["dimensions"].keys())
    strings.extend(dim_labels)

    # 结果区域文字 (after dimensions)
    result_idx_start = dim_idx_start + len(dim_labels)
    result_labels = [
        "维度得分汇总", "综合得分", "关键发现", "类型判断",
        f"{assessment['name']}评分结果",
        f"您的{assessment['name']}评估如下：",
        "诊断解读",
    ]
    strings.extend(result_labels)

    # Question texts (after result labels)
    q_idx_start = result_idx_start + len(result_labels)
    q_strings = QUESTIONS_TEXT.get(assessment["file"][:2], [])
    strings.extend(q_strings)

    # Index mapping for build functions
    idx_map = {
        "name": 0,
        "usage": 1,
        "q_num": 2,
        "q_text": 3,
        "option": 4,
        "dim": 5,
        "score": 6,
        "interpret": 7,
        "type_label": 8,
        "interpret_content": 9,
        "dim_start": dim_idx_start,
        "result_start": result_idx_start,
        "q_start": q_idx_start,
        "dim_labels": dim_labels,
    }

    return strings, idx_map

def build_shared_strings(strings):
    lines = ['<?xml version="1.0" encoding="UTF-8" standalone="yes"?>']
    lines.append('<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" '
                 f'count="{len(strings)}" uniqueCount="{len(strings)}">')
    for s in strings:
        escaped = s.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;')
        lines.append(f'  <si><t>{escaped}</t></si>')
    lines.append('</sst>')
    return '\n'.join(lines)

def build_sheet1(idx_map, q_strings, assessment):
    """填答 sheet"""
    lines = ['<?xml version="1.0" encoding="UTF-8" standalone="yes"?>']
    lines.append('<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" '
                 'xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">')
    lines.append('  <sheetViews><sheetView tabSelected="1" workbookViewId="0"/></sheetViews>')
    lines.append('  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" '
                 'xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>')
    lines.append('  <cols>')
    lines.append('    <col min="1" max="1" width="10" customWidth="1"/>')
    lines.append('    <col min="2" max="2" width="55" customWidth="1"/>')
    lines.append('    <col min="3" max="3" width="30" customWidth="1"/>')
    lines.append('    <col min="4" max="4" width="12" customWidth="1"/>')
    lines.append('  </cols>')
    lines.append('  <sheetData>')

    # Row 1: 标题
    lines.append('    <row r="1" ht="26" customHeight="1">')
    lines.append(f'      <c r="A1" t="s" s="4"><v>{idx_map["name"]}</v></c>')
    lines.append('    </row>')

    # Row 2: 使用说明
    lines.append('    <row r="2" ht="18" customHeight="1">')
    lines.append(f'      <c r="A2" t="s" s="0"><v>{idx_map["usage"]}</v></c>')
    lines.append('    </row>')

    # Row 3: 空行
    lines.append('    <row r="3"><c r="A3"/></row>')

    # Row 4: 表头
    lines.append('    <row r="4" ht="18" customHeight="1">')
    lines.append(f'      <c r="A4" t="s" s="4"><v>{idx_map["q_num"]}</v></c>')
    lines.append(f'      <c r="B4" t="s" s="4"><v>{idx_map["q_text"]}</v></c>')
    lines.append(f'      <c r="C4" t="s" s="4"><v>{idx_map["option"]}</v></c>')
    lines.append(f'      <c r="D4" t="s" s="4"><v>{idx_map["q_num"]}</v></c>')
    lines.append('    </row>')

    # Rows 5+: 题目
    q_start = idx_map["q_start"]
    for i, q_text in enumerate(q_strings):
        row_num = i + 5
        lines.append(f'    <row r="{row_num}">')
        lines.append(f'      <c r="A{row_num}" t="s" s="0"><v>{i+1}</v></c>')
        lines.append(f'      <c r="B{row_num}" t="s" s="0"><v>{q_start + i}</v></c>')
        lines.append(f'      <c r="C{row_num}" t="s" s="0"><v>{idx_map["option"]}</v></c>')
        lines.append(f'      <c r="D{row_num}" s="1"/>')  # 答题区(蓝色输入)
        lines.append(f'    </row>')

    lines.append('  </sheetData>')
    lines.append('</worksheet>')
    return '\n'.join(lines)

def build_sheet2(idx_map, assessment):
    """结果 sheet"""
    lines = ['<?xml version="1.0" encoding="UTF-8" standalone="yes"?>']
    lines.append('<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" '
                 'xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">')
    lines.append('  <sheetViews><sheetView tabSelected="0" workbookViewId="0"/></sheetViews>')
    lines.append('  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" '
                 'xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>')
    lines.append('  <cols>')
    lines.append('    <col min="1" max="1" width="22" customWidth="1"/>')
    lines.append('    <col min="2" max="2" width="12" customWidth="1"/>')
    lines.append('    <col min="3" max="3" width="50" customWidth="1"/>')
    lines.append('  </cols>')
    lines.append('  <sheetData>')

    # Row 1: 标题
    result_title_idx = idx_map["result_start"] + 4  # "评估名称评分结果"
    lines.append('    <row r="1" ht="26" customHeight="1">')
    lines.append(f'      <c r="A1" t="s" s="4"><v>{result_title_idx}</v></c>')
    lines.append('    </row>')

    # Row 2: 说明
    desc_idx = idx_map["result_start"] + 5
    lines.append('    <row r="2" ht="18" customHeight="1">')
    lines.append(f'      <c r="A2" t="s" s="0"><v>{desc_idx}</v></c>')
    lines.append('    </row>')

    # Row 3: 空行
    lines.append('    <row r="3"><c r="A3"/></row>')

    # Row 4: 维度得分汇总标题
    lines.append('    <row r="4" ht="18" customHeight="1">')
    lines.append(f'      <c r="A4" t="s" s="4"><v>{idx_map["result_start"]}</v></c>')
    lines.append('    </row>')

    # Row 5: 表头
    lines.append('    <row r="5" ht="18" customHeight="1">')
    lines.append(f'      <c r="A5" t="s" s="4"><v>{idx_map["dim"]}</v></c>')
    lines.append(f'      <c r="B5" t="s" s="4"><v>{idx_map["score"]}</v></c>')
    lines.append(f'      <c r="C5" t="s" s="4"><v>{idx_map["interpret"]}</v></c>')
    lines.append('    </row>')

    # Rows 6+: 维度均值
    dim_labels = idx_map["dim_labels"]
    dim_start = idx_map["dim_start"]
    q_count = assessment["questions"]

    for i, dim_name in enumerate(dim_labels):
        row_num = 6 + i
        start_q, end_q = assessment["dimensions"][dim_name]
        # 填答sheet中题目行 = 4 + 题号 (题目从第5行开始)
        start_row = 4 + start_q
        end_row = 4 + end_q
        formula = f"AVERAGE(填答!D{start_row}:D{end_row})"
        lines.append(f'    <row r="{row_num}">')
        lines.append(f'      <c r="A{row_num}" t="s" s="0"><v>{dim_start + i}</v></c>')
        lines.append(f'      <c r="B{row_num}" s="8"><f>{formula}</f><v></v></c>')
        lines.append(f'      <c r="C{row_num}" t="s" s="0"><v>{idx_map["interpret"]}</v></c>')
        lines.append(f'    </row>')

    # 综合得分行
    next_row = 6 + len(dim_labels)
    dim_ranges = []
    for dim_name in dim_labels:
        start_q, end_q = assessment["dimensions"][dim_name]
        start_row = 4 + start_q
        end_row = 4 + end_q
        dim_ranges.append(f"AVERAGE(填答!D{start_row}:D{end_row})")
    all_avgs = "+".join(dim_ranges)
    formula = f"({all_avgs})/{len(dim_labels)}"

    lines.append(f'    <row r="{next_row}">')
    lines.append(f'      <c r="A{next_row}" t="s" s="0"><v>{idx_map["result_start"]+1}</v></c>')  # "综合得分"
    lines.append(f'      <c r="B{next_row}" s="8"><f>{formula}</f><v></v></c>')
    lines.append(f'      <c r="C{next_row}" t="s" s="0"><v>{idx_map["interpret"]}</v></c>')
    lines.append(f'    </row>')

    # 空行
    next_row += 1
    lines.append(f'    <row r="{next_row}"><c r="A{next_row}"/></row>')

    # 类型判断
    next_row += 1
    lines.append(f'    <row r="{next_row}" ht="18" customHeight="1">')
    lines.append(f'      <c r="A{next_row}" t="s" s="4"><v>{idx_map["result_start"]+3}</v></c>')  # "类型判断"
    lines.append(f'    </row>')

    next_row += 1
    lines.append(f'    <row r="{next_row}">')
    lines.append(f'      <c r="A{next_row}" s="2"><f>"综合评估结果"</f><v></v></c>')
    lines.append(f'    </row>')

    lines.append('  </sheetData>')
    lines.append('</worksheet>')
    return '\n'.join(lines)

def build_sheet3(idx_map, q_strings, assessment):
    """题库 sheet"""
    lines = ['<?xml version="1.0" encoding="UTF-8" standalone="yes"?>']
    lines.append('<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" '
                 'xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">')
    lines.append('  <sheetViews><sheetView tabSelected="0" workbookViewId="0"/></sheetViews>')
    lines.append('  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" '
                 'xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>')
    lines.append('  <cols>')
    lines.append('    <col min="1" max="1" width="8" customWidth="1"/>')
    lines.append('    <col min="2" max="2" width="55" customWidth="1"/>')
    lines.append('    <col min="3" max="3" width="30" customWidth="1"/>')
    lines.append('    <col min="4" max="4" width="15" customWidth="1"/>')
    lines.append('    <col min="5" max="5" width="25" customWidth="1"/>')
    lines.append('  </cols>')
    lines.append('  <sheetData>')

    # Row 1: 表头
    lines.append('    <row r="1" ht="18" customHeight="1">')
    lines.append(f'      <c r="A1" t="s" s="4"><v>{idx_map["q_num"]}</v></c>')
    lines.append(f'      <c r="B1" t="s" s="4"><v>{idx_map["q_text"]}</v></c>')
    lines.append(f'      <c r="C1" t="s" s="4"><v>{idx_map["option"]}</v></c>')
    lines.append(f'      <c r="D1" t="s" s="4"><v>{idx_map["dim"]}</v></c>')
    lines.append(f'      <c r="E1" t="s" s="4"><v>{idx_map["interpret"]}</v></c>')
    lines.append('    </row>')

    # Rows 2+: 题目
    dim_labels = idx_map["dim_labels"]
    dim_start = idx_map["dim_start"]
    q_start = idx_map["q_start"]

    for i, q_text in enumerate(q_strings):
        row_num = i + 2
        q_num = i + 1

        # 找到这道题对应的维度索引
        dim_idx = dim_start
        for j, (dim_name, (start_q, end_q)) in enumerate(assessment["dimensions"].items()):
            if start_q <= q_num <= end_q:
                dim_idx = dim_start + j
                break

        lines.append(f'    <row r="{row_num}">')
        lines.append(f'      <c r="A{row_num}" t="s" s="0"><v>{i+1}</v></c>')
        lines.append(f'      <c r="B{row_num}" t="s" s="0"><v>{q_start + i}</v></c>')
        lines.append(f'      <c r="C{row_num}" t="s" s="0"><v>{idx_map["option"]}</v></c>')
        lines.append(f'      <c r="D{row_num}" t="s" s="0"><v>{dim_idx}</v></c>')
        lines.append(f'      <c r="E{row_num}" t="s" s="0"><v>{idx_map["option"]}</v></c>')
        lines.append(f'    </row>')

    lines.append('  </sheetData>')
    lines.append('</worksheet>')
    return '\n'.join(lines)

def build_sheet4(idx_map, assessment):
    """解读库 sheet"""
    lines = ['<?xml version="1.0" encoding="UTF-8" standalone="yes"?>']
    lines.append('<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" '
                 'xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">')
    lines.append('  <sheetViews><sheetView tabSelected="0" workbookViewId="0"/></sheetViews>')
    lines.append('  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" '
                 'xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>')
    lines.append('  <cols>')
    lines.append('    <col min="1" max="1" width="18" customWidth="1"/>')
    lines.append('    <col min="2" max="2" width="75" customWidth="1"/>')
    lines.append('  </cols>')
    lines.append('  <sheetData>')

    # Row 1: 表头
    lines.append('    <row r="1" ht="18" customHeight="1">')
    lines.append(f'      <c r="A1" t="s" s="4"><v>{idx_map["type_label"]}</v></c>')
    lines.append(f'      <c r="B1" t="s" s="4"><v>{idx_map["interpret_content"]}</v></c>')
    lines.append('    </row>')

    # Rows 2+: 解读内容
    interpretations = assessment.get("interpretations", [])
    for i, (label, content) in enumerate(interpretations):
        row_num = i + 2
        label_escaped = label.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;')
        content_escaped = content.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;')
        lines.append(f'    <row r="{row_num}">')
        lines.append(f'      <c r="A{row_num}" t="s" s="0"><v>{label_escaped}</v></c>')
        lines.append(f'      <c r="B{row_num}" t="s" s="0"><v>{content_escaped}</v></c>')
        lines.append(f'    </row>')

    lines.append('  </sheetData>')
    lines.append('</worksheet>')
    return '\n'.join(lines)

def create_assessment(key, assessment):
    """为一个评估工具创建xlsx文件"""
    print(f"\n{'='*60}")
    print(f"Creating {assessment['file']}")
    print(f"{'='*60}")

    # 构建共享字符串表
    strings, idx_map = make_ss_table(assessment)
    q_strings = QUESTIONS_TEXT.get(key, [])

    # 复制模板
    work_dir = os.path.join(r"D:\CC\temp", f"xlsx_work_{key}")
    if os.path.exists(work_dir):
        shutil.rmtree(work_dir)
    shutil.copytree(TEMPLATE_DIR, work_dir)

    # 写入styles.xml
    with open(os.path.join(work_dir, 'xl', 'styles.xml'), 'w', encoding='utf-8') as f:
        f.write(build_styles())

    # 写入sharedStrings.xml
    with open(os.path.join(work_dir, 'xl', 'sharedStrings.xml'), 'w', encoding='utf-8') as f:
        f.write(build_shared_strings(strings))

    # 写入workbook.xml
    sheets = [(1, "填答"), (2, "结果"), (3, "题库"), (4, "解读库")]
    with open(os.path.join(work_dir, 'xl', 'workbook.xml'), 'w', encoding='utf-8') as f:
        f.write(build_workbook_xml(sheets))

    # 写入workbook.xml.rels
    with open(os.path.join(work_dir, 'xl', '_rels', 'workbook.xml.rels'), 'w', encoding='utf-8') as f:
        f.write(build_workbook_rels(4))

    # 写入Content_Types.xml
    with open(os.path.join(work_dir, '[Content_Types].xml'), 'w', encoding='utf-8') as f:
        f.write(build_content_types(4))

    # 写入4个sheet
    sheet1_content = build_sheet1(idx_map, q_strings, assessment)
    sheet2_content = build_sheet2(idx_map, assessment)
    sheet3_content = build_sheet3(idx_map, q_strings, assessment)
    sheet4_content = build_sheet4(idx_map, assessment)

    for sheet_num, content in [(1, sheet1_content), (2, sheet2_content),
                                (3, sheet3_content), (4, sheet4_content)]:
        sheet_path = os.path.join(work_dir, 'xl', 'worksheets', f'sheet{sheet_num}.xml')
        with open(sheet_path, 'w', encoding='utf-8') as f:
            f.write(content)

    # 打包
    output_file = os.path.join(OUTPUT_DIR, assessment["file"])
    result = subprocess.run(
        ['python3', os.path.join(SKILL_DIR, 'scripts', 'xlsx_pack.py'),
         work_dir, output_file],
        capture_output=True, text=True
    )
    print(result.stdout)
    if result.returncode != 0:
        print("ERROR:", result.stderr)
        return False

    # 验证
    val_result = subprocess.run(
        ['python3', os.path.join(SKILL_DIR, 'scripts', 'formula_check.py'), output_file],
        capture_output=True, text=True
    )
    print(val_result.stdout)
    return val_result.returncode == 0

def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)

    keys_to_create = ["02", "03", "04", "05", "06", "07", "08", "09", "10"]
    success_count = 0

    for key in keys_to_create:
        if key in ASSESSMENTS:
            if create_assessment(key, ASSESSMENTS[key]):
                success_count += 1
                print(f"SUCCESS: {ASSESSMENTS[key]['file']}")
            else:
                print(f"FAILED: {ASSESSMENTS[key]['file']}")

    print(f"\n{'='*60}")
    print(f"Completed: {success_count}/{len(keys_to_create)} files created successfully")
    print(f"{'='*60}")

if __name__ == '__main__':
    main()
