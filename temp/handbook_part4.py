# ============ CHAPTER 6 ============
add_h(doc, '第六章  评估标准与评分细则', 1)

add_h(doc, '6.1 学员个人评估', 2)
add_h(doc, '6.1.1 课程全程评估体系', 3)
et = doc.add_table(rows=6, cols=5)
et.style = 'Table Grid'
for i, h in enumerate(['评估层次', '评估内容', '评估方法', '评估时点', '权重']):
    set_cell(et.cell(0, i), h, bold=True)
ed = [
    ['反应层', '满意度 Relevance', '即时问卷', '每个模块结束时', '10%'],
    ['学习层', '知识掌握度', '情境测试', 'D2', '15%'],
    ['行为层', '工具使用频率', '系统日志+访谈', 'D30/D60/D90', '25%'],
    ['结果层', '业务指标变化', '数据分析', 'D180/D360', '30%'],
    ['迁移层', '决策质量提升', 'AI模拟+专家评估', 'D30/D90', '20%'],
]
for ri, row in enumerate(ed):
    for ci, val in enumerate(row):
        set_cell(et.cell(ri+1, ci), val)
doc.add_paragraph()

add_h(doc, '6.1.2 综合演战评分细则', 3)
add_p(doc, '综合演战是课程的核心产出环节，每组方案按以下维度评分：')
wt = doc.add_table(rows=7, cols=5)
wt.style = 'Table Grid'
for i, h in enumerate(['评分维度', '权重', '优秀(90-100)', '良好(70-89)', '合格(60-69)']):
    set_cell(wt.cell(0, i), h, bold=True)
wd = [
    ['情境真实性', '20%', '三棱镜完整，参数配置合理有据', '三棱镜较完整，参数基本合理', '三棱镜有缺失，参数依据模糊'],
    ['五步法完整性', '20%', '五步完整，每步AI介入方式具体可操作', '五步较完整，AI介入方式较具体', '五步有缺失，AI介入方式模糊'],
    ['评估体系', '20%', '三层次完整，指标具体可测量', '三层次较完整，指标基本可测量', '层次有缺失，指标模糊'],
    ['工具选型', '15%', '工具选择有明确依据，组合合理', '工具选择有依据，组合基本合理', '工具选择依据模糊'],
    ['落地可行性', '15%', '路径清晰，里程碑可实现，风险可控', '路径较清晰，里程碑较可实现', '路径有一定模糊性'],
    ['汇报呈现', '10%', '结构清晰，表达流畅，时间控制好', '结构较清晰，表达较流畅', '结构或表达有明显问题'],
]
for ri, row in enumerate(wd):
    for ci, val in enumerate(row):
        set_cell(wt.cell(ri+1, ci), val)
doc.add_paragraph()

add_h(doc, '6.1.3 学员个人评分标准', 3)
ic = [
    ('出勤率（满分20分）', '全勤20分，迟到/早退每次扣5分，旷课0分'),
    ('课堂参与（满分30分）', '发言质量高+15分，中等+10分，低+5分，从不发言0分'),
    ('练习完成（满分30分）', '按时完成+10分/练习，共3个练习'),
    ('最终产出（满分20分）', '综合演战个人贡献度评估'),
]
for criteria, desc in ic:
    p = doc.add_paragraph()
    r = p.add_run(criteria + '：')
    sf(r, bold=True)
    r2 = p.add_run(desc)
    sf(r2)

add_h(doc, '6.2 讲师自评标准', 2)
ie = [
    ('内容熟悉度', '能否脱稿讲述核心概念？是否需要频繁看资料？'),
    ('时间控制', '是否在规定时间内完成每个模块？超时了多少次？'),
    ('学员回应', '学员是否积极参与？是否有沉默或抵触？'),
    ('AI演示质量', '演示是否成功？失败的原因是什么？'),
    ('讨论引导', '是否有效激发学员发言？是否控制住了发散？'),
]
for dim, questions in ie:
    p = doc.add_paragraph()
    r = p.add_run(dim + '：')
    sf(r, bold=True)
    r2 = p.add_run(questions)
    sf(r2)
add_p(doc, '建议：每次课程结束后，用10分钟完成讲师自评表，记录本次授课的改进点。')

doc.add_page_break()

# ============ CHAPTER 7 ============
add_h(doc, '第七章  风险预案与替代方案', 1)

add_h(doc, '7.1 技术风险预案', 2)
tbl = doc.add_table(rows=5, cols=3)
tbl.style = 'Table Grid'
for i, h in enumerate(['风险类型', '概率', '应对方案']):
    set_cell(tbl.cell(0, i), h, bold=True)
tr = [
    ['AI工具不可用', '中', '提前准备录制的演示视频或截图；改为纯讨论模式，延长小组讨论环节；使用提前下载好的AI输出案例作为替代展示'],
    ['网络连接不稳定', '高', '提前测试网络，准备移动热点；所有课程材料离线备份（PPT、文档、案例）；减少需要实时联网的环节'],
    ['投影设备故障', '低', '提前30分钟测试投影；准备PPT转PDF版本作为备份；如故障无法修复，改为白板讲解'],
    ['学员设备问题', '低', '准备公用账号供没有自己账号的学员使用；安排助教协助解决技术问题'],
]
for ri, row in enumerate(tr):
    for ci, val in enumerate(row):
        set_cell(tbl.cell(ri+1, ci), val)
doc.add_paragraph()

add_h(doc, '7.2 内容风险预案', 2)
cr = [
    ('学员质疑课程理论基础', '中', '承认局限性，邀请学员分享替代框架；如果质疑有道理，课后将反馈纳入课程迭代；避免防御性回应'),
    ('学员挑战讲师专业性', '中', '诚实承认知识边界，邀请学员分享经验；把问题抛回给全班讨论；避免假装权威'),
    ('讨论偏离主题', '高', '用白板记录偏离的观点，稍后回头处理；温和打断："这个话题很有价值，我们先记下来，回到主议题"'),
    ('学员对案例不感兴趣', '低', '立即切换到学员自己的案例；邀请学员提供他们经历过的类似情境'),
]
for risk, prob, solution in cr:
    p = doc.add_paragraph()
    r = p.add_run(risk + '：')
    sf(r, bold=True)
    r2 = p.add_run('[' + prob + ']' + solution)
    sf(r2)

add_h(doc, '7.3 参与度风险预案', 2)
pr = [
    ('学员整体参与度低', '高', '增加互动环节（投票、匿名提问）；将大组讨论拆分为两两对话；降低问题难度，增加结构化提示'),
    ('某组成员过于沉默', '中', '安排助教深入该组引导；给该组布置具体任务而非开放性问题；减少全班讨论，增加小组讨论'),
    ('情绪冲突发生', '低', '立即暂停讨论，承认冲突存在；单独与相关方沟通；如果情绪激烈，考虑休息片刻'),
    ('学员要求课后持续联系', '低', '在课程开始时就说明后续联系方式；提供课程专属答疑邮箱或群；避免在课程期间做出无法兑现的承诺'),
]
for risk, prob, solution in pr:
    p = doc.add_paragraph()
    r = p.add_run(risk + '：')
    sf(r, bold=True)
    r2 = p.add_run('[' + prob + ']' + solution)
    sf(r2)

add_h(doc, '7.4 时间风险预案', 2)
tr2 = [
    ('某个模块超时', '高', '优先保证核心概念讲解，压缩练习环节；非核心内容可宣布"留作课后阅读"；不要为了赶时间牺牲收尾质量'),
    ('整体课程时间不够', '中', '优先保证综合演战和汇报环节（这是核心产出）；压缩茶歇时间；第二天早上做简短回顾而非冗长复盘'),
    ('讨论陷入僵局', '中', '引入新信息或外部专家视角；强制切换到"两两对话"模式；用结构化问题引导'),
    ('学员反复提问超出范围', '低', '承认问题价值，承诺课后单独交流；用"这是个好问题，我们稍后深入"简短回应'),
]
for risk, prob, solution in tr2:
    p = doc.add_paragraph()
    r = p.add_run(risk + '：')
    sf(r, bold=True)
    r2 = p.add_run('[' + prob + ']' + solution)
    sf(r2)

add_h(doc, '7.5 替代方案速查表', 2)
add_p(doc, '当以下情况发生时，直接切换到对应替代方案：')
at = doc.add_table(rows=6, cols=2)
at.style = 'Table Grid'
for i, h in enumerate(['情况', '替代方案']):
    set_cell(at.cell(0, i), h, bold=True)
ad = [
    ['AI演示失败', '立即切到提前录制的视频；或展示静态PPT+讲师口述；或邀请已试过的学员分享'],
    ['某个案例学员不熟悉', '立即切换到行业通用案例；或邀请该行业学员提供真实背景'],
    ['讨论时间不够', '将开放讨论改为结构化两两对话；每人写下来再分享'],
    ['学员人数超过30人', '增加1名助教；将小组讨论改为小组代表发言；减少需要全员发言的环节'],
    ['学员人数少于10人', '增加个人练习时间；将小组汇报改为人人汇报；增加深度追问'],
]
for ri, row in enumerate(ad):
    for ci, val in enumerate(row):
        set_cell(at.cell(ri+1, ci), val)
doc.add_paragraph()

doc.add_page_break()

# ============ CHAPTER 8 ============
add_h(doc, '第八章  课后跟进建议', 1)

add_h(doc, '8.1 课后24小时内', 2)
items_24 = [
    ('发送课程资源包', '包含：课程PPT、工具清单、Prompt模板库、推荐阅读书单'),
    ('发送课程录屏链接', '如课程有录制，在课后24小时内发送给学员'),
    ('发布同期学员交流群', '邀请所有学员加入长期有效的交流群'),
    ('发送训后实践任务', '明确D30/D60/D90的实践任务，具体到"做什么"而非"学什么"'),
    ('收集课程反馈', '发送匿名满意度调研问卷，48小时内收集'),
]
for action, desc in items_24:
    p = doc.add_paragraph()
    r = p.add_run(action + '：')
    sf(r, bold=True)
    r2 = p.add_run(desc)
    sf(r2)

add_h(doc, '8.2 训后30天跟进（D30）', 2)
d30 = [
    ('发送复习邮件', '回顾课程核心概念和工具，特别是学员反馈中最需要的部分'),
    ('邀请实践分享', '"在过去30天里，你有没有用过今天学的某个工具？结果如何？"'),
    ('一对一答疑', '为有需要的学员提供30分钟一对一咨询（可选，自愿报名）'),
    ('收集典型案例', '如果有学员成功将课程内容落地，邀请他们撰写案例分享'),
]
for action, desc in d30:
    p = doc.add_paragraph()
    r = p.add_run(action + '：')
    sf(r, bold=True)
    r2 = p.add_run(desc)
    sf(r2)

add_h(doc, '8.3 训后90天跟进（D90）', 2)
d90 = [
    ('发送行为改变评估', '通过简短问卷了解学员在工作中是否应用了课程所学'),
    ('追踪决策质量', '如果可能，邀请学员分享一个真实决策案例，用课程框架做复盘'),
    ('发送进阶内容', '根据学员实践情况，推送针对性的进阶学习资料'),
    ('邀请参与下一期课程', '作为"学长"分享经验，或作为助教协助授课'),
]
for action, desc in d90:
    p = doc.add_paragraph()
    r = p.add_run(action + '：')
    sf(r, bold=True)
    r2 = p.add_run(desc)
    sf(r2)

add_h(doc, '8.4 讲师个人复盘', 2)
ir = [
    ('课程完成度评估', '哪些模块按计划完成？哪些被压缩或跳过？原因是什么？'),
    ('学员反馈总结', '学员满意度如何？哪些环节评价最高？哪些最低？'),
    ('关键事件记录', '有没有突发情况？如何处理的？有什么可以改进的？'),
    ('个人收获与反思', '这次授课中，我自己学到了什么？有什么新的洞见？'),
    ('课程迭代建议', '基于这次授课，课程内容、案例、练习可以如何改进？'),
]
for dim, questions in ir:
    p = doc.add_paragraph()
    r = p.add_run(dim + '：')
    sf(r, bold=True)
    r2 = p.add_run(questions)
    sf(r2)

add_h(doc, '8.5 学员学习效果追踪表', 2)
add_p(doc, '建议使用以下表格追踪学员学习效果：')
tt = doc.add_table(rows=6, cols=6)
tt.style = 'Table Grid'
for i, h in enumerate(['学员', 'D30实践任务完成情况', 'D60工具使用频率', 'D90决策质量自评', '实际业务应用', '备注']):
    set_cell(tt.cell(0, i), h, bold=True)
for i in range(1, 6):
    for j in range(6):
        tt.cell(i, j).text = ' '
doc.add_paragraph()

doc.add_page_break()

# ============ APPENDIX 1 ============
add_h(doc, '附录一  核心工具速查表', 1)

add_h(doc, 'A1.1 情境重构三棱镜', 2)
pt = doc.add_table(rows=4, cols=3)
pt.style = 'Table Grid'
for i, h in enumerate(['构成要素', '定义', '设计要点']):
    set_cell(pt.cell(0, i), h, bold=True)
pd = [
    ['情境变量', '影响决策的外部信息集', '足够真实、足够复杂、可操控'],
    ['决策节点', '参与者必须做出选择的关键时刻', '足够模糊、足够压力、有时间约束'],
    ['反馈机制', '决策后的结果呈现方式', '即时、可理解、与真实结果相关'],
]
for ri, row in enumerate(pd):
    for ci, val in enumerate(row):
        set_cell(pt.cell(ri+1, ci), val)
doc.add_paragraph()

add_h(doc, 'A1.2 决策推演五步法', 2)
ft = doc.add_table(rows=6, cols=3)
ft.style = 'Table Grid'
for i, h in enumerate(['步骤', '核心问题', 'AI介入方式']):
    set_cell(ft.cell(0, i), h, bold=True)
fd = [
    ['步骤1 情境初始化', '参与者在什么情境下做决策？', 'AI生成动态商业情境数据包'],
    ['步骤2 角色分配', '谁在做决策？利益如何分布？', 'AI模拟利益相关方反应'],
    ['步骤3 决策推进', '决策如何展开？', 'AI根据选择实时扩展情境'],
    ['步骤4 结果呈现', '决策产生了什么结果？', 'AI多维反馈（财务/组织/市场/声誉）'],
    ['步骤5 复盘反馈', '从这次决策中学到了什么？', 'AI辅助生成个性化复盘报告'],
]
for ri, row in enumerate(fd):
    for ci, val in enumerate(row):
        set_cell(ft.cell(ri+1, ci), val)
doc.add_paragraph()

add_h(doc, 'A1.3 Prompt工程四大原则', 2)
pmt = doc.add_table(rows=5, cols=2)
pmt.style = 'Table Grid'
for i, h in enumerate(['原则', '说明']):
    set_cell(pmt.cell(0, i), h, bold=True)
pmd = [
    ['角色注入要具体', '不是"你是CEO"，而是"你是有20年经验、经历过一次失败、正在寻找新方向的CEO"'],
    ['情境构建要分层', '第一层初始情境→第二层触发事件→第三层利益相关者反应→第四层时间压力'],
    ['反馈设计要挑刺', '不是"你说得有道理"，而是"你的隐含假设是什么？这个假设可能不成立的理由是？"'],
    ['输出结构要可追踪', '立场声明→核心论点→支撑论据→风险提示→替代方案'],
]
for ri, row in enumerate(pmd):
    for ci, val in enumerate(row):
        set_cell(pmt.cell(ri+1, ci), val)
doc.add_paragraph()

add_h(doc, 'A1.4 学习迁移对勾模型', 2)
hook_text = """对勾转化率参考：
• 知识获取→决策能力：60%（断层原因：情境过于简化）
• 决策能力→行动表现：40%（断层原因：时间压力不足）
• 行动表现→习惯改变：20%（断层原因：缺乏持续跟踪）"""
p = doc.add_paragraph()
r = p.add_run(hook_text)
sf(r, size=10)

doc.add_page_break()

# ============ APPENDIX 2 ============
add_h(doc, '附录二  场景卡使用指南', 1)

add_h(doc, 'A2.1 场景卡是什么', 2)
add_p(doc, '场景卡是本课程的核心学习工具，每张场景卡呈现一个高管在真实商业环境中面临的决策困境，学员需要在AI模拟器中完成：①分析情境；②做出决策；③推演后果；④复盘反思。')

add_h(doc, 'A2.2 场景卡使用流程', 2)
sflow = [
    ('Day 1上午', '场景卡发放→个人独立决策→AI模拟推演'),
    ('Day 1下午', '小组讨论→后果链分析→方案优化'),
    ('Day 2上午', '专家点评→框架提炼→落地可行性评估'),
]
for t, flow in sflow:
    p = doc.add_paragraph()
    r = p.add_run(t + '：')
    sf(r, bold=True)
    r2 = p.add_run(flow)
    sf(r2)

add_h(doc, 'A2.3 场景卡使用强度层级', 2)
ulevels = [
    ('层级一：微场景（15-20分钟）', '仅使用背景任务+关键节点+留白提问；小组快速讨论→各组汇报→讲师点评'),
    ('层级二：标准场景（30-45分钟）', '完整使用全部七个模块；角色扮演+小组讨论+讲师引导'),
    ('层级三：深度场景（60-90分钟）', '标准场景+AI辅助推演+决策复盘'),
    ('层级四：项目制场景（持续跟进）', '学员带真实工作难题进入场景；讲师跟踪辅导'),
]
for level, desc in ulevels:
    p = doc.add_paragraph()
    r = p.add_run(level + '：')
    sf(r, bold=True)
    r2 = p.add_run(desc)
    sf(r2)

add_h(doc, 'A2.4 场景卡选择矩阵', 2)
smt = doc.add_table(rows=5, cols=3)
smt.style = 'Table Grid'
for i, h in enumerate(['课程模块', '推荐场景集', '推荐强度']):
    set_cell(smt.cell(0, i), h, bold=True)
smd = [
    ['战略思维与决策', '高管战略决策', '层级二/三'],
    ['组织变革领导力', '组织变革管理', '层级二/三'],
    ['危机管理与风险决策', '危机应对与风险管理', '层级二/三'],
    ['资源整合与优先级', '资源配置与优先级', '层级一/二'],
]
for ri, row in enumerate(smd):
    for ci, val in enumerate(row):
        set_cell(smt.cell(ri+1, ci), val)
doc.add_paragraph()

add_h(doc, 'A2.5 场景卡设计质量检查清单', 2)
checklist = [
    '情境真实性：行业背景具体，不是"某公司"；企业情况有细节；时间节点紧迫感合理',
    '角色张力：至少3个角色，利益诉求不同；角色立场合理，不是"好人"vs"坏人"',
    '决策质量：至少2个关键决策点；每个决策没有标准答案，各有代价；决策结果可推演',
    '教学价值：留白提问能激发主动探索；四层提问覆盖不同思维层次；可提炼1-3条可迁移原则',
]
for item in checklist:
    add_bullet(doc, item)

doc.add_page_break()

# ============ CLOSING ============
add_h(doc, '结语', 1)
closing = """本讲师手册是课程交付的核心参考资料。讲师应在课前完成全面熟悉，在授课过程中持续积累反馈，并在每次课程结束后进行复盘迭代。

课程的最终价值不在于手册本身，而在于讲师与学员在真实对话中产生的洞见。

期待每一位使用本手册的讲师，都能在这个基础上创造属于自己的授课风格。
"""
p = doc.add_paragraph()
r = p.add_run(closing)
sf(r)

doc.add_paragraph()
p2 = doc.add_paragraph()
p2.alignment = WD_ALIGN_PARAGRAPH.CENTER
r2 = p2.add_run('高管学习项目重构：AI辅助的场景推演与决策模拟设计 · 讲师手册 v1.0')
sf(r2, bold=True)

# SAVE
doc.save(OUT)
print('Document saved successfully!')
