# ============ CHAPTER 2 ============
add_h(doc, '第二章  每个模块的详细授课指引', 1)

# 2.1 开篇
add_h(doc, '2.1 开篇：高管学习的本质挑战', 2)
add_p(doc, '建议时长：50—60分钟（标准版）/ 30分钟（压缩版）', bold=True)

add_h(doc, '模块目标', 3)
for item in [
    '学员能识别一个现有高管培训项目的3个结构性缺陷',
    '学员能用语言解释"情境学习理论"的核心理念',
    '学员能提出至少2个AI可能重构高管学习项目的具体方向',
]:
    add_bullet(doc, item)

add_h(doc, '开场引导要点', 3)
add_p(doc, '开场不要自我介绍"我是谁我讲什么"。直接呈现一个令人不安的数据或故事，让学员先在头脑里形成疑问——"为什么花了800万，高管觉得没用？"然后再回答这个问题。')
add_p(doc, '推荐开场案例：', bold=True)
p = doc.add_paragraph()
r = p.add_run('某互联网公司连续3年投入800万做高管培训，85%学员认为"内容好有启发"，但CEO在复盘会上说："我不知道这800万换来了什么，战略执行还是老样子。"')
sf(r)
p.paragraph_format.left_indent = Inches(0.3)

add_h(doc, '核心工具讲解要点', 3)
add_p(doc, '传统项目缺陷诊断表（第一部分）', bold=True)
p = doc.add_paragraph()
r = p.add_run('引导要点：带着学员逐行填表，重点是"AI可重构程度"这一列——让学员不只看到问题，而是看到AI能做什么。避免让学员只是抱怨过去的培训，要引导到"如果用AI重构，会怎样"。')
sf(r)
p.paragraph_format.left_indent = Inches(0.3)

add_h(doc, '练习引导说明', 3)
add_p(doc, '练习一：传统项目缺陷诊断（第一级）', bold=True)
p = doc.add_paragraph()
r = p.add_run('引导方式：这道练习的难点在于第2列"具体缺陷描述"——学员容易写泛泛而谈的"内容不实用"。重点引导："不要写内容不实用，要写哪个案例、哪句话让你觉得不实用。情境真实性的具体缺陷，要精确到案例都是别人的公司，无法建立模式识别能力。"')
sf(r)
p.paragraph_format.left_indent = Inches(0.3)

add_h(doc, '过渡与衔接', 3)
add_p(doc, '开篇模块结束后，学员最常见的反应是"确实是这样，但怎么改？"——这制造了良好的学习胃口。')
add_p(doc, '过渡到模块一时：可以说"要重构高管学习项目，首先要搞清楚AI时代需要什么样的高管能力——不是更高级的员工，而是能应对不确定性的决策者。"')

add_h(doc, '讲师注意事项', 3)
for item in [
    '有学员可能开始就挑战"AI介入培训是否合适"——这是好的信号，不要回避，而是邀请他详细说明担忧，引导全班讨论。',
    '开篇破冰环节要谨慎把控时间，建议8分钟以内，避免讨论发散。',
    '案例卡1的三个缺陷是讲师的核心弹药，要熟记，能随时引用。',
]:
    p = doc.add_paragraph()
    r = p.add_run(item)
    sf(r)
    p.paragraph_format.left_indent = Inches(0.3)

# 2.2 模块一
add_h(doc, '2.2 模块一：AI时代高管能力模型重构', 2)
add_p(doc, '建议时长：65分钟（标准版）/ 40分钟（压缩版）', bold=True)

add_h(doc, '模块目标', 3)
for item in [
    '学员能对比说明"传统高管能力模型"与"AI时代高管能力模型"的3个核心差异',
    '学员能为目标学员画像完成1份"能力-情境对照表"',
    '学员能识别AI在2个典型高管决策场景中的具体介入方式',
]:
    add_bullet(doc, item)

add_h(doc, '开场引导要点', 3)
add_p(doc, '带学员读AI时代高管能力三棱锥模型（顶点：判断力；中层：情境建模、决策整合；基础：人机协同、伦理边界）。然后问："你们公司现在的高管能力模型，是哪个版本的？"——让学员对比反思。')

add_h(doc, '核心工具讲解要点', 3)
add_p(doc, 'AI时代高管能力三棱锥（第一章）', bold=True)
p = doc.add_paragraph()
r = p.add_run('引导要点：这个模型是整个课程的元框架之一。重点强调"判断力"作为顶点的意义——不是"知识"、不是"经验"，而是"在信息不完整时做出可辩护决策的能力"。可以用一个思想实验：如果AI明天可以完成你80%的工作，你作为高管还剩下什么不可替代的价值？')
sf(r)
p.paragraph_format.left_indent = Inches(0.3)

add_p(doc, '能力-情境对照表（第二章）', bold=True)
p = doc.add_paragraph()
r = p.add_run('引导要点：先完整呈现示例表，然后让学员基于自己企业的高管项目填写。重点是"AI介入方式"这一列——学员通常写得很模糊，要逼他们写出"AI在哪个决策节点介入、输出什么"。')
sf(r)
p.paragraph_format.left_indent = Inches(0.3)

add_h(doc, '练习引导说明', 3)
add_p(doc, '练习一：能力-情境对照表（第二级）', bold=True)
p = doc.add_paragraph()
r = p.add_run('引导方式：给15分钟独立填写，然后让学员在小组里分享。分享时引导："重点听组员的AI介入方式，看看有没有让你眼前一亮的设计。"每组推荐1个最完整的表格在全班分享。')
sf(r)
p.paragraph_format.left_indent = Inches(0.3)

# 2.3 模块二
add_h(doc, '2.3 模块二：场景推演的核心原理', 2)
add_p(doc, '建议时长：75分钟（标准版）/ 45分钟（压缩版）', bold=True)

add_h(doc, '模块目标', 3)
for item in [
    '学员能用语言解释"情境重构三棱镜"的3个构成要素',
    '学员能识别5种常见推演设计的缺陷',
    '学员能运用三棱镜框架对一个真实高管决策场景进行要素拆解',
]:
    add_bullet(doc, item)

add_h(doc, '开场引导要点', 3)
add_p(doc, '带学员做一个小测试："在座各位，过去一个月做过的最大决策是什么？那个决策你现在能复盘吗？"——让学员意识到，真实的决策反馈周期太长，几乎不可能复盘。引出"场景推演"的价值：在压缩时间内体验完整决策链。')

add_h(doc, '核心工具讲解要点', 3)
add_p(doc, '情境重构三棱镜（第一章）', bold=True)
p = doc.add_paragraph()
r = p.add_run('引导要点：带着学员逐行读三棱镜的三个构成要素（情境变量、决策节点、反馈机制），重点强调"反馈机制"——这是最容易被忽视但最关键的要素。没有即时反馈的推演，只是在玩游戏，不是在学习。')
sf(r)
p.paragraph_format.left_indent = Inches(0.3)

add_p(doc, '五种常见推演设计缺陷（第二章）', bold=True)
p = doc.add_paragraph()
r = p.add_run('引导要点：让学员先尝试自己识别bug（工作纸2-a），然后再揭示答案。这个顺序比直接讲效果更好——学员带着问题来听讲，印象更深刻。')
sf(r)
p.paragraph_format.left_indent = Inches(0.3)

add_h(doc, '练习引导说明', 3)
add_p(doc, '练习二：三棱镜拆解（第二级）', bold=True)
p = doc.add_paragraph()
r = p.add_run('引导方式：给20分钟完成小组场景的拆解。完成后，让每组用2分钟汇报："你们选了什么场景？三个要素各是什么？"讲师即时点评。')
sf(r)
p.paragraph_format.left_indent = Inches(0.3)

# 2.4 模块三
add_h(doc, '2.4 模块三：AI辅助决策模拟的设计方法', 2)
add_p(doc, '建议时长：90分钟（标准版）/ 50分钟（压缩版）', bold=True)

add_h(doc, '模块目标', 3)
for item in [
    '学员能完整复述"决策推演五步法"的每一步操作',
    '学员能在AI辅助下完成五步法中至少3步的具体设计',
    '学员能针对一个具体高管学习项目完成五步法的完整设计',
]:
    add_bullet(doc, item)

add_h(doc, '开场引导要点', 3)
add_p(doc, '直接问："各位过去用AI做过什么？生成文案？做PPT？"——让学员发现，AI在高管学习领域的应用几乎没有人探索过。然后展示一个AI辅助情境初始化的现场演示。')

add_h(doc, '核心工具讲解要点', 3)
add_p(doc, '决策推演五步法（第一章）', bold=True)
p = doc.add_paragraph()
r = p.add_run('引导要点：五步法是本课程的核心操作方法论。讲解时用"战略并购"案例完整走一遍五步：①AI生成并购情境数据包；②AI模拟各方利益相关者反应；③AI根据选择实时扩展情境；④AI多维反馈（财务+组织+市场）；⑤AI辅助生成个性化复盘报告。')
sf(r)
p.paragraph_format.left_indent = Inches(0.3)

add_p(doc, 'AI辅助情境初始化演示（第二章）', bold=True)
p = doc.add_paragraph()
r = p.add_run('引导要点：这是整个课程最重要的演示环节。讲师应提前准备一个情境Prompt模板，现场实时生成一个商业情境。生成后，让学员点评："这个情境真实吗？哪里可以改进？"——让学员参与Prompt的优化，建立对AI能力的直观认知。')
sf(r)
p.paragraph_format.left_indent = Inches(0.3)

# 2.5 模块四
add_h(doc, '2.5 模块四：高仿真商业情境的构建技术', 2)
add_p(doc, '建议时长：60分钟（标准版）/ 35分钟（压缩版）', bold=True)

add_h(doc, '模块目标', 3)
for item in [
    '学员能说明"情境参数矩阵"中至少6个关键参数及其取值范围',
    '学员能针对一个给定的高管决策场景设计出合理的参数配置',
    '学员能识别3种常见的情境失真问题及其来源',
]:
    add_bullet(doc, item)

add_h(doc, '开场引导要点', 3)
add_p(doc, '问学员一个问题："你们公司现在的案例教学，用的情境是你们自己公司的吗？"——通常答案是否定的。然后问："为什么不是？"——引导学员发现：真实案例有商业敏感性，公开案例不够真实。AI可以解决这个矛盾。')

add_h(doc, '核心工具讲解要点', 3)
add_p(doc, '情境参数矩阵（第一章）', bold=True)
p = doc.add_paragraph()
r = p.add_run('引导要点：带着学员逐行读情境参数矩阵的6个参数（信息完整度、数据真实性、决策时间窗口、结果反馈周期、角色数量、利益冲突强度）。重点强调"利益冲突强度"——最常见的设计失误是把情境设计成"利益高度一致"，真实商业情境中，利益冲突是常态。')
sf(r)
p.paragraph_format.left_indent = Inches(0.3)

add_p(doc, '三种常见失真问题（第二章）', bold=True)
p = doc.add_paragraph()
r = p.add_run('引导要点：用学员自己经历过的"不真实"案例来解释失真类型。比如："有没有人经历过培训里的案例太完美的情况？"——让学员自己举例，然后对号入座到失真分类。')
sf(r)
p.paragraph_format.left_indent = Inches(0.3)

# 2.6 模块五
add_h(doc, '2.6 模块五：AI决策模拟工具链与平台选择', 2)
add_p(doc, '建议时长：60分钟（标准版）/ 30分钟（压缩版）', bold=True)

add_h(doc, '模块目标', 3)
for item in [
    '学员能对比评估至少4类AI辅助推演工具的优劣势',
    '学员能运用"工具选择决策树"为自己的项目选择合适的工具组合',
    '学员能完成至少1个AI工具的实操练习',
]:
    add_bullet(doc, item)

add_h(doc, '开场引导要点', 3)
add_p(doc, '开场展示一个令人惊讶的对比：用同一个情境，分别用"糟糕的Prompt"和"优秀的Prompt"让AI生成结果。让学员看到Prompt质量的差异直接导致输出质量的差异。引出："工具本身不重要，用工具的方式才重要。"')

add_h(doc, '核心工具讲解要点', 3)
add_p(doc, '四类工具对比（第一章）', bold=True)
p = doc.add_paragraph()
r = p.add_run('引导要点：通用LLM（ChatGPT/Claude）、专用模拟平台（Simon等）、数据可视化工具（Tableau）、协作平台（Miro/Notion）——每类工具用一句话说清"最适合谁、不适合谁"。重点不是记住每个工具，而是理解"工具选择的逻辑"。')
sf(r)
p.paragraph_format.left_indent = Inches(0.3)

add_p(doc, 'Prompt工程四大原则（第二章）', bold=True)
p = doc.add_paragraph()
r = p.add_run('引导要点：这是模块五最重要的内容。角色注入要具体、情境构建要分层、反馈设计要"挑刺"、输出结构要可追踪。每一个原则都用正反对比例子说明。')
sf(r)
p.paragraph_format.left_indent = Inches(0.3)

# 2.7 模块六
add_h(doc, '2.7 模块六：高管理学习项目的评估体系设计', 2)
add_p(doc, '建议时长：60分钟（标准版）/ 35分钟（压缩版）', bold=True)

add_h(doc, '模块目标', 3)
for item in [
    '学员能说明"学习迁移对勾模型"的两个阶段和4个关键转化点',
    '学员能为AI辅助的高管学习项目设计完整的评估方案',
    '学员能使用"迁移效果评估矩阵"评估一个已有项目的迁移效果',
]:
    add_bullet(doc, item)

add_h(doc, '开场引导要点', 3)
add_p(doc, '问学员："你们公司上一个高管培训项目，是怎么评估效果的？"——通常答案只有"满意度问卷"。然后展示一个令人不安的数据："满意度高但行为改变率不足15%"——引出评估体系的缺失。')

add_h(doc, '核心工具讲解要点', 3)
add_p(doc, '学习迁移对勾模型（第一章）', bold=True)
p = doc.add_paragraph()
r = p.add_run('引导要点：对勾底部（知识获取）到顶部（习惯改变）的转化率逐级下降：60%→40%→20%。重点是解释"为什么"——每个断层的原因是什么，如何在设计阶段就预防这些断层。')
sf(r)
p.paragraph_format.left_indent = Inches(0.3)

add_p(doc, '双轨评估框架（第二章）', bold=True)
p = doc.add_paragraph()
r = p.add_run('引导要点：轨道A（学习过程评估）和轨道B（决策质量评估）并行。重点强调轨道B更难做但更有价值——"即时满意度高不代表学习效果好"，这是反直觉但真实的结论。')
sf(r)
p.paragraph_format.left_indent = Inches(0.3)

# 2.8 模块七
add_h(doc, '2.8 模块七：企业落地路径与常见陷阱', 2)
add_p(doc, '建议时长：50分钟（标准版）/ 30分钟（压缩版）', bold=True)

add_h(doc, '模块目标', 3)
for item in [
    '学员能描述企业落地AI辅助高管学习项目的3个典型路径',
    '学员能识别至少5个常见落地陷阱并给出预防方案',
    '学员能为自己企业制定一份简化的落地路线图',
]:
    add_bullet(doc, item)

add_h(doc, '开场引导要点', 3)
add_p(doc, '问学员："在座各位，有多少人已经开始尝试用AI做高管培训了？"——通常只有少数人举手。然后说："先别急，在开始之前，我们需要知道7种会让你失败的陷阱。"——制造悬念，引导学员认真听讲。')

add_h(doc, '核心工具讲解要点', 3)
add_p(doc, '三条落地路径（第一章）', bold=True)
p = doc.add_paragraph()
r = p.add_run('引导要点：探索期（3-6个月/<10万）、试点期（6-12个月/10-30万）、扩展期（12-24个月/30万+）。重点不是让学员记住数字，而是让他们判断"你们公司现在在哪一步"。')
sf(r)
p.paragraph_format.left_indent = Inches(0.3)

add_p(doc, '5个常见陷阱（第二章）', bold=True)
p = doc.add_paragraph()
r = p.add_run('引导要点：工具先行场景后置、过度依赖AI忽视人的判断、评估体系缺失、情境过于简化、高管期望错位。每个陷阱用一句话总结——让学员能带走的不是理论，是"避坑指南"。')
sf(r)
p.paragraph_format.left_indent = Inches(0.3)

# 2.9 综合演战
add_h(doc, '2.9 综合演战：设计一个真实高管学习项目方案', 2)
add_p(doc, '建议时长：120分钟（标准版）/ 60分钟（压缩版）', bold=True)

add_h(doc, '演战目标', 3)
for item in [
    '学员能以小组为单位完成一个完整的AI辅助高管学习项目方案设计',
    '方案涵盖：目标学员定位、核心决策场景、五步法推演设计、情境参数配置、工具链选择、评估体系、落地路径',
]:
    add_bullet(doc, item)

add_h(doc, '活动序列', 3)
war_seq = [
    ('C1 项目选题', '10分钟', '选题说明+小组分工'),
    ('C2 需求分析', '20分钟', '目标学员定位+场景选择'),
    ('C3 情境设计', '30分钟', '三棱镜分析+参数配置'),
    ('C4 推演设计', '30分钟', '五步法完整设计'),
    ('C5 工具与评估', '20分钟', '工具选型+评估体系'),
    ('C6 整合汇报', '20分钟', '方案整合+汇报准备'),
    ('C7 小组汇报', '15分钟/组', '每组10分钟汇报+5分钟点评'),
]
for act, t, desc in war_seq:
    p = doc.add_paragraph()
    r = p.add_run(act + '（' + t + '）：')
    sf(r, bold=True)
    r2 = p.add_run(desc)
    sf(r2)

add_h(doc, '汇报点评要点', 3)
add_p(doc, '每组汇报后，讲师从以下5个维度进行点评：')
eval_dims = [
    ('情境真实性（20%）', '三棱镜是否完整？参数配置是否合理有据？'),
    ('五步法完整性（20%）', '五步是否完整？AI介入方式是否具体可操作？'),
    ('评估体系（20%）', '三层次是否完整？指标是否具体可测量？'),
    ('工具选型（15%）', '选择是否有依据？组合是否合理？'),
    ('落地可行性（15%）', '路径是否清晰？里程碑是否可实现？'),
]
for dim, desc in eval_dims:
    p = doc.add_paragraph()
    r = p.add_run(dim + '：')
    sf(r, bold=True)
    r2 = p.add_run(desc)
    sf(r2)

add_h(doc, '讲师注意事项', 3)
for item in [
    '汇报环节超时是常态。提前告知："每组严格10分钟，超时1分钟扣1分。"——提前立规矩比现场求情有效。',
    '如果某组方案明显不完整，不要当场批评，而是问："如果再给一周完善，你们觉得最需要改的是什么？"——给建设性反馈。',
    '全部汇报结束后，留10分钟做整体点评：共性优点、共性不足、后续建议。不要只点名问题，要给出路。',
]:
    p = doc.add_paragraph()
    r = p.add_run(item)
    sf(r)
    p.paragraph_format.left_indent = Inches(0.3)

doc.add_page_break()
