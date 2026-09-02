# UYLP Instructor Manual Generator
# Uses Word COM interop to create the document

$outputPath = "D:\2026年课程\竞越\释潜：UYLP释放你的领导潜能\完整课程包\05_讲师手册\UYLP_讲师手册_完整版.docx"

# Create directory if not exists
$dir = Split-Path $outputPath -Parent
if (!(Test-Path $dir)) {
    New-Item -ItemType Directory -Path $dir -Force | Out-Null
}

Write-Host "Creating Word Application..."
$word = New-Object -ComObject Word.Application
$word.Visible = $false
$word.DisplayAlerts = 0

Write-Host "Creating new document..."
$doc = $word.Documents.Add()
$doc.ActiveWindow.ActivePane.View.SeekView = 0

# Helper function to add heading
function Add-Heading($text, $level) {
    $doc.Content.InsertAfter($text)
    $doc.Content.InsertParagraphAfter()
    $selection = $doc.Content
    $selection.MoveEnd(-1, 1) | Out-Null
    $selection.Font.Size = switch($level) {
        1 { 28 }
        2 { 24 }
        3 { 20 }
        4 { 16 }
        default { 12 }
    }
    $selection.Font.Bold = $true
    $selection.Font.Color = switch($level) {
        1 { 16777215 }  # White
        2 { 16777215 }  # White
        3 { 16777215 }  # White
        4 { 31 }        # Dark blue
        default { 0 }
    }
    if ($level -le 3) {
        $selection.Shading.BackgroundPatternColor = switch($level) {
            1 { 13160460 }  # Dark blue
            2 { 3143414 }   # Medium blue
            3 { 15592913 }  # Orange
            default { 13160460 }
        }
    }
    $selection.MoveEnd(-1, 1) | Out-Null
}

# Helper function to add paragraph
function Add-Paragraph($text) {
    $doc.Content.InsertAfter($text)
    $doc.Content.InsertParagraphAfter()
    $doc.Content.MoveEnd(-1, 1) | Out-Null
}

# Title page
Write-Host "Adding title page..."
$doc.Content.InsertAfter("UYLP")
$doc.Content.InsertParagraphAfter()
Add-Paragraph("释放你的领导潜能")
Add-Paragraph("—— 讲师手册 ——")
Add-Paragraph("")
Add-Paragraph("Unleash Your Leadership Potential")
Add-Paragraph("")
$doc.Content.InsertParagraphAfter()

# Course info box (using bordered paragraph)
$p = $doc.Content.Paragraphs.Add()
$p.Range.Text = "课程定位：企业中高层管理者领导力发展"
$p.Range.Font.Color = 8338880  # Orange-brown
$p.Range.Shading.BackgroundPatternColor = 16769252  # Light yellow

$p = $doc.Content.Paragraphs.Add()
$p.Range.Text = "标准课时：2天（每天6小时，共12小时）"
$p.Range.Font.Color = 8338880

$p = $doc.Content.Paragraphs.Add()
$p.Range.Text = "学员人数：24-32人（建议分组，每组4-8人）"
$p.Range.Font.Color = 8338880

Add-Paragraph("")
Add-Paragraph("版本：完整版 v1.0")
Add-Paragraph("发布日期：2026年6月")

# Page break
$doc.Content.InsertAfter("")
$selection = $doc.Range($doc.Content.End - 1, $doc.Content.End)
$selection.InsertBreak(7)  # wdPageBreak

# Table of Contents
Add-Heading("目录", 1)
Add-Paragraph("第一部分：讲师指南")
Add-Paragraph("  1.1 课程定位与核心价值")
Add-Paragraph("  1.2 讲师角色定位")
Add-Paragraph("  1.3 课程设计理念")
Add-Paragraph("  1.4 教学方法论")
Add-Paragraph("")
Add-Paragraph("第二部分：完整授课指引")
Add-Paragraph("  2.1 模块一：领导者角色与绩效管理体系")
Add-Paragraph("  2.2 模块二：辅导入门：WHEN/HOW/Y")
Add-Paragraph("  2.3 模块三：有效反馈：CAIR模型")
Add-Paragraph("  2.4 模块四：困难谈话")
Add-Paragraph("  2.5 模块五：联结沟通与工作关系")
Add-Paragraph("  2.6 模块六：高级辅导、有效授权与MAP")
Add-Paragraph("")
Add-Paragraph("第三部分：体验活动完整设计")
Add-Paragraph("  3.1 月球会议（第一模块）")
Add-Paragraph("  3.2 三岛救援（第五模块）")
Add-Paragraph("")
Add-Paragraph("第四部分：角色扮演完整设计")
Add-Paragraph("  4.1 辅导对话角色扮演")
Add-Paragraph("  4.2 反馈对话角色扮演")
Add-Paragraph("  4.3 困难谈话角色扮演")
Add-Paragraph("")
Add-Paragraph("第五部分：讲师工具")
Add-Paragraph("  5.1 讲师时间控制表")
Add-Paragraph("  5.2 学员表现观察量表")
Add-Paragraph("  5.3 课程评估指引")
Add-Paragraph("  5.4 危机处理预案")
Add-Paragraph("")
Add-Paragraph("第六部分：附录")
Add-Paragraph("  6.1 核心模型速查")
Add-Paragraph("  6.2 参考资料")
Add-Paragraph("  6.3 术语表")

$doc.Content.InsertBreak(7)  # Page break

# Part 1: Instructor Guide
Add-Heading("第一部分：讲师指南", 1)

Add-Heading("1.1 课程定位与核心价值", 2)
Add-Paragraph("UYLP（Unleash Your Leadership Potential）是一款专注于帮助企业中高层管理者释放领导潜能的体验式课程。")
Add-Paragraph("")

Add-Heading("核心价值主张", 3)
Add-Paragraph("1. 从"管人理事"到"理人管事"：帮助管理者从繁琐的事务中抽身，通过有效的辅导、反馈和授权提升团队整体绩效。")
Add-Paragraph("2. 从"被动应对"到"主动干预"：教授管理者在关键时刻进行有效干预的技能，而不是等问题恶化。")
Add-Paragraph("3. 从"个人英雄"到"教练型领导"：培养管理者的"乘法思维"——通过培养他人成就更大的事业。")
Add-Paragraph("")

Add-Heading("学员收益", 3)
Add-Paragraph("• 掌握辅导、反馈、授权三大核心干预技能")
Add-Paragraph("• 提升困难谈话的处理能力")
Add-Paragraph("• 建立更加稳固的工作关系和团队联结")
Add-Paragraph("• 学会使用MAP模型进行高级辅导和授权")
Add-Paragraph("")

Add-Heading("1.2 讲师角色定位", 2)
Add-Paragraph("UYLP讲师不仅是知识的传递者，更是学习的促进者和体验的引导者。")
Add-Paragraph("")

Add-Heading("三重角色", 3)
Add-Heading("【角色一：学习设计师】", 4)
Add-Paragraph("• 精心设计每一个学习环节，确保体验与反思的平衡")
Add-Paragraph("• 将抽象的领导力概念转化为可操作的行为技能")
Add-Paragraph("• 构建安全的学习环境，让学员敢于尝试和犯错")
Add-Paragraph("")

Add-Heading("【角色二：引导师】", 4)
Add-Paragraph("• 通过提问而非告知来激发学员思考")
Add-Paragraph("• 鼓励学员分享经验，促进相互学习")
Add-Paragraph("• 在关键时刻提供"战略性暂停"，让学员消化体验")
Add-Paragraph("")

Add-Heading("【角色三：教练】", 4)
Add-Paragraph("• 示范而非说教——用自身经验诠释概念")
Add-Paragraph("• 给予及时、正向的反馈，强化正确行为")
Add-Paragraph("• 保持中立，不将自己的价值观强加于学员")
Add-Paragraph("")

Add-Heading("1.3 课程设计理念", 2)
Add-Heading("体验式学习循环", 3)
Add-Paragraph("本课程采用大卫·科尔布（David Kolb）的体验式学习循环作为核心教学设计理念：")
Add-Paragraph("具体经验 → 反思观察 → 抽象概念化 → 主动实践")
Add-Paragraph("每一个模块都遵循这一循环：先通过活动或案例让学员获得"切身体验"，然后引导他们"反思观察"，接着帮助他们"抽象概念化"形成理论框架，最后设计练习让学员"主动实践"。")
Add-Paragraph("")

Add-Heading("3:1参与原则", 3)
Add-Paragraph("根据成人学习理论，成人最佳学习效果来自于3:1的参与比例：")
Add-Paragraph("• 30% 时间用于知识输入（讲解、阅读、观看）")
Add-Paragraph("• 70% 时间用于体验和练习（活动、讨论、角色扮演、反馈）")
Add-Paragraph("本课程严格遵循这一原则，确保学员有充足的动手操作机会。")
Add-Paragraph("")

Add-Heading("1.4 教学方法论", 2)
Add-Heading("核心教学方法", 3)
Add-Heading("【体验式活动】", 4)
Add-Paragraph("• 月球会议：体验领导者在资源受限情况下的决策困境")
Add-Paragraph("• 三岛救援：理解联结沟通的重要性和团队协作的复杂性")
Add-Paragraph("")

Add-Heading("【角色扮演】", 4)
Add-Paragraph("• 辅导对话：练习WHEN/HOW/Y模型的实际应用")
Add-Paragraph("• 反馈对话：运用CAIR模型进行有效反馈")
Add-Paragraph("• 困难谈话：处理敏感话题的沟通技巧")
Add-Paragraph("")

Add-Heading("【小组讨论】", 4)
Add-Paragraph("• 反思问题：连接体验与日常工作场景")
Add-Paragraph("• 经验分享：促进学员间的相互学习")
Add-Paragraph("")

Add-Heading("关键教学原则", 3)
Add-Paragraph("1. 安全感优先：创造一个让学员敢于冒险、坦诚分享的环境")
Add-Paragraph("2. 提问优于告知：通过苏格拉底式提问引导学员自己得出结论")
Add-Paragraph("3. 错误是学习机会：将错误转化为建设性的学习时刻")
Add-Paragraph("4. 联系实际：确保每一个概念都能连接到学员的实际工作场景")

$doc.Content.InsertBreak(7)  # Page break

# Part 2: Complete Teaching Guide
Add-Heading("第二部分：完整授课指引", 1)

Add-Heading("课程时间总览", 2)
Add-Paragraph("【Day 1 时间表】")
Add-Paragraph("08:30-09:00 | 签到与准备 | 学员签到，发放材料")
Add-Paragraph("09:00-09:15 | 开场 | 课程介绍，目标设定")
Add-Paragraph("09:15-10:45 | 模块一 | 领导者角色与绩效管理体系")
Add-Paragraph("10:45-11:00 | 茶歇")
Add-Paragraph("11:00-12:30 | 模块二（上）| 辅导入门：WHEN/HOW/Y")
Add-Paragraph("12:30-13:30 | 午餐")
Add-Paragraph("13:30-15:30 | 模块二（下）| 辅导入门：角色扮演练习")
Add-Paragraph("15:30-15:45 | 茶歇")
Add-Paragraph("15:45-17:15 | 模块三 | 有效反馈：CAIR模型")
Add-Paragraph("17:15-17:30 | 总结 | 当日回顾，明日预告")
Add-Paragraph("")
Add-Paragraph("【Day 2 时间表】")
Add-Paragraph("08:30-09:00 | 签到与回顾 | 回答学员问题，回顾昨日内容")
Add-Paragraph("09:00-10:30 | 模块四 | 困难谈话")
Add-Paragraph("10:30-10:45 | 茶歇")
Add-Paragraph("10:45-12:15 | 模块五（上）| 联结沟通与工作关系")
Add-Paragraph("12:15-13:15 | 午餐")
Add-Paragraph("13:15-15:15 | 模块五（下）| 三岛救援体验活动")
Add-Paragraph("15:15-15:30 | 茶歇")
Add-Paragraph("15:30-17:00 | 模块六 | 高级辅导、有效授权与MAP")
Add-Paragraph("17:00-17:30 | 总结 | 课程总结，行为承诺")

$doc.Content.InsertBreak(7)  # Page break

# Module 1
Add-Heading("2.1 模块一：领导者角色与绩效管理体系", 2)
Add-Paragraph("[模块时长：90分钟]")
Add-Paragraph("")

Add-Heading("学习目标", 3)
Add-Paragraph("• 理解领导者在绩效管理体系中的角色转变")
Add-Paragraph("• 掌握从"任务分配者"到"绩效辅导者"的角色转换")
Add-Paragraph("• 认识传统绩效评估的局限性")
Add-Paragraph("")

Add-Heading("知识要点", 3)
Add-Heading("【传统vs现代绩效管理】", 4)
Add-Paragraph("传统模式：年度评估 → 评分 → 奖惩")
Add-Paragraph("现代模式：持续辅导 → 实时反馈 → 共同发展")
Add-Paragraph("")

Add-Heading("【管理者在绩效管理中的新角色】", 4)
Add-Paragraph("1. 诊断者：了解团队成员的发展阶段和需求")
Add-Paragraph("2. 辅导者：通过辅导帮助员工提升能力")
Add-Paragraph("3. 反馈者：提供及时、具体、正向的反馈")
Add-Paragraph("4. 授权者：在合适的时机进行有效授权")
Add-Paragraph("")

Add-Heading("体验活动：月球会议", 3)
Add-Paragraph("[时间：45分钟 | 物料：A3纸、月球地图、投票贴纸、计分表]")
Add-Paragraph("")

Add-Heading("【活动流程】", 4)
Add-Paragraph("1. 情境导入（5分钟）")
Add-Paragraph("2. 个人决策（10分钟）")
Add-Paragraph("3. 小组讨论与决策（15分钟）")
Add-Paragraph("4. 小组汇报与讲师点评（10分钟）")
Add-Paragraph("5. 反思总结（5分钟）")
Add-Paragraph("")

Add-Heading("常见学员问题及应答", 3)
Add-Paragraph("Q: "我们公司已经有了绩效考核系统，还需要辅导吗？"")
Add-Paragraph("A: "绩效考核系统解决的是'评估'问题，而辅导解决的是'发展'问题。两者相辅相成。"")
Add-Paragraph("")

Add-Heading("重点/难点提示", 3)
Add-Paragraph("[重点] 强调管理者角色的转变——从"裁判"到"教练"")
Add-Paragraph("[难点] 帮助学员理解"辅导"不是"监控"或"检查"，而是一种支持性对话")

$doc.Content.InsertBreak(7)  # Page break

# Module 2
Add-Heading("2.2 模块二：辅导入门：WHEN/HOW/Y", 2)
Add-Paragraph("[模块时长：120分钟]")
Add-Paragraph("")

Add-Heading("学习目标", 3)
Add-Paragraph("• 掌握"何时辅导"（WHEN）的判断标准")
Add-Paragraph("• 学会"如何辅导"（HOW）的STAR模型")
Add-Paragraph("• 理解"为什么辅导"（Y）对员工动机的重要性")
Add-Paragraph("")

Add-Heading("核心模型：辅导三问", 3)
Add-Heading("【WHEN - 何时辅导】", 4)
Add-Paragraph("• 绩效下降时：员工表现低于预期")
Add-Paragraph("• 发展机会时：新任务、新角色、新挑战")
Add-Paragraph("• 主动请求时：员工主动寻求反馈或帮助")
Add-Paragraph("• 关键转折时：职业发展、岗位变动、重要决策")
Add-Paragraph("")

Add-Heading("【HOW - 如何辅导：STAR模型】", 4)
Add-Paragraph("• S - Situation：描述情境，提供背景")
Add-Paragraph("• T - Task：明确任务，说明期望")
Add-Paragraph("• A - Action：询问行动，了解过程")
Add-Paragraph("• R - Result：探讨结果，给予反馈")
Add-Paragraph("")

Add-Heading("【Y - 为什么辅导】", 4)
Add-Paragraph("• 激发内在动机：帮助员工看到"我为什么要做这件事"")
Add-Paragraph("• 建立情感联结：通过辅导建立信任关系")
Add-Paragraph("• 创造意义感：让工作成为实现更大目标的途径")

$doc.Content.InsertBreak(7)  # Page break

# Module 3
Add-Heading("2.3 模块三：有效反馈：CAIR模型", 2)
Add-Paragraph("[模块时长：90分钟]")
Add-Paragraph("")

Add-Heading("CAIR模型", 3)
Add-Heading("【C - Context 情境】", 4)
Add-Paragraph("• 提供具体的时间和情境")
Add-Paragraph("• "昨天下午的团队会议上..."")
Add-Paragraph("")

Add-Heading("【A - Action 行为】", 4)
Add-Paragraph("• 描述具体可观察的行为")
Add-Paragraph("• "你打断了小王的发言，然后直接提出了自己的方案"")
Add-Paragraph("")

Add-Heading("【I - Impact 影响】", 4)
Add-Paragraph("• 说明行为的影响")
Add-Paragraph("• "这让小王有些尴尬，也影响了团队讨论的充分性"")
Add-Paragraph("")

Add-Heading("【R - Request 请求】", 4)
Add-Paragraph("• 提出具体的改变请求")
Add-Paragraph("• "下次能否先让小王说完，你再做补充？"")
Add-Paragraph("")

Add-Heading("角色扮演：反馈对话", 3)
Add-Paragraph("[时间：30分钟 | 场景：经理向员工反馈其在项目汇报中的表现]")

$doc.Content.InsertBreak(7)  # Page break

# Module 4
Add-Heading("2.4 模块四：困难谈话", 2)
Add-Paragraph("[模块时长：90分钟]")
Add-Paragraph("")

Add-Heading("困难谈话类型", 3)
Add-Paragraph("• 绩效问题谈话")
Add-Paragraph("• 行为问题谈话")
Add-Paragraph("• 纪律处分谈话")
Add-Paragraph("• 裁员/降职谈话")
Add-Paragraph("• 处理冲突谈话")
Add-Paragraph("")

Add-Heading("准备框架：PLACE", 3)
Add-Paragraph("• P - Purpose：明确谈话目的")
Add-Paragraph("• L - Logic：准备逻辑结构")
Add-Paragraph("• A - Anticipate：预判对方反应")
Add-Paragraph("• C - Compose：调整自己心态")
Add-Paragraph("• E - Evidence：准备具体证据")
Add-Paragraph("")

Add-Heading("谈话技巧", 3)
Add-Paragraph("[开场] 先建立情感联结，再进入正题")
Add-Paragraph("[中段] 使用"我"开头的陈述，避免指责")
Add-Paragraph("[结尾] 明确下一步行动计划")

$doc.Content.InsertBreak(7)  # Page break

# Module 5
Add-Heading("2.5 模块五：联结沟通与工作关系", 2)
Add-Paragraph("[模块时长：120分钟]")
Add-Paragraph("")

Add-Heading("体验活动：三岛救援", 3)
Add-Paragraph("[时间：60分钟 | 物料：三岛地图、角色卡、资源表、投票贴]")
Add-Paragraph("")

Add-Heading("【活动流程】", 4)
Add-Paragraph("1. 情境导入（10分钟）")
Add-Paragraph("2. 角色分配与任务理解（10分钟）")
Add-Paragraph("3. 岛屿内协商（20分钟）")
Add-Paragraph("4. 岛屿间谈判与交易（15分钟）")
Add-Paragraph("5. 结果揭晓与复盘（25分钟）")
Add-Paragraph("")

Add-Heading("核心概念：工作关系四层模型", 3)
Add-Paragraph("[第一层：认识层] 知道对方是谁，点头之交")
Add-Paragraph("[第二层：交易层] 基于工作任务的互动")
Add-Paragraph("[第三层：合作层] 共同目标，主动互助")
Add-Paragraph("[第四层：联结层] 深度信任，全方位支持")

$doc.Content.InsertBreak(7)  # Page break

# Module 6
Add-Heading("2.6 模块六：高级辅导、有效授权与MAP", 2)
Add-Paragraph("[模块时长：120分钟]")
Add-Paragraph("")

Add-Heading("MAP模型", 3)
Add-Heading("【M - Measure 衡量】", 4)
Add-Paragraph("• 明确衡量标准和成功指标")
Add-Paragraph("• "我们如何知道任务完成了？"")
Add-Paragraph("")

Add-Heading("【A - Align 对齐】", 4)
Add-Paragraph("• 确保目标和方式的一致性")
Add-Paragraph("• "这样做是否符合我们的价值观和原则？"")
Add-Paragraph("")

Add-Heading("【P - Process 流程】", 4)
Add-Paragraph("• 明确里程碑和检查点")
Add-Paragraph("• "我们如何分阶段进行？何时检查进展？"")
Add-Paragraph("")

Add-Heading("授权的层次", 3)
Add-Paragraph("[层次一：执行] 告知具体做什么")
Add-Paragraph("[层次二：审批] 需要上级批准")
Add-Paragraph("[层次三：建议] 可以提建议，由上级决定")
Add-Paragraph("[层次四：同意] 可以行动，但需要上级同意")
Add-Paragraph("[层次五：自行决定] 完全自主决定")
Add-Paragraph("[层次六：委任] 将权力完全委托给下属")

$doc.Content.InsertBreak(7)  # Page break

# Part 3: Experiential Activities
Add-Heading("第三部分：体验活动完整设计", 1)

Add-Heading("3.1 月球会议（第一模块）", 2)
Add-Heading("活动概述", 3)
Add-Paragraph("[活动名称] 月球会议 | [活动类型] 决策模拟 | [活动时间] 45分钟")
Add-Paragraph("[活动目的] 体验领导者在资源受限情况下的决策困境，理解不同决策风格的利弊")
Add-Paragraph("")

Add-Heading("物料清单", 3)
Add-Paragraph("□ A3月球地图（每组1张）")
Add-Paragraph("□ 角色卡（每组6张）")
Add-Paragraph("□ 决策记录表（每组1份）")
Add-Paragraph("□ 投票贴纸（每组红、黄、绿各10张）")
Add-Paragraph("□ 白板/海报纸（用于小组汇报）")
Add-Paragraph("□ 计时器")
Add-Paragraph("")

Add-Heading("场景设置", 3)
Add-Heading("[情境设定]", 4)
Add-Paragraph("1969年，阿波罗11号登月任务中，宇航员在月球表面遇到紧急状况。他们必须在限定时间内，从15件物品中选出5件最重要的，以便在月球表面生存并返回轨道。")
Add-Paragraph("")

Add-Heading("[任务目标]", 4)
Add-Paragraph("小组需要在20分钟内达成共识，选择5件最重要的物品，并说明理由。")
Add-Paragraph("")

Add-Heading("[角色分配]（每组6人）", 4)
Add-Paragraph("• 指挥官：负责最终决策")
Add-Paragraph("• 首席科学家：提供技术分析")
Add-Paragraph("• 通讯专家：负责记录和沟通")
Add-Paragraph("• 医生：关注人员安全")
Add-Paragraph("• 工程师：提供工程视角")
Add-Paragraph("• 财务官：评估资源成本")
Add-Paragraph("")

Add-Heading("引导话术", 3)
Add-Heading("[活动导入]", 4)
Add-Paragraph(""各位，欢迎来到1969年的NASA任务控制中心。我们刚刚收到阿波罗11号的紧急信号——宇航员在月球表面遇到了意外状况。现在，你们是地球上唯一能够帮助他们做出生死抉择的人。"")
Add-Paragraph("")

Add-Heading("[规则说明]", 4)
Add-Paragraph(""你们有20分钟时间进行讨论和决策。请注意：1）每个角色必须发言；2）最终决策需要全组同意；3）请在决策记录表上写下你们的选择和理由。"")
Add-Paragraph("")

Add-Heading("[时间提醒]", 4)
Add-Paragraph("• 15分钟时："还剩5分钟，请开始形成共识"")
Add-Paragraph("• 18分钟时："还剩2分钟，请做出最终决定"")
Add-Paragraph("• 20分钟时："时间到，请停止讨论"")
Add-Paragraph("")

Add-Heading("复盘问题", 3)
Add-Heading("[个人反思]", 4)
Add-Paragraph("1. 在讨论过程中，你扮演了什么角色？")
Add-Paragraph("2. 你是否充分表达了你的观点？")
Add-Paragraph("3. 小组最终的决策是否体现了你的想法？")
Add-Paragraph("")

Add-Heading("[团队反思]", 4)
Add-Paragraph("1. 小组是如何做出决策的？有没有发生冲突？如何解决的？")
Add-Paragraph("2. 小组中是否存在"一言堂"或"沉默者"？这对结果有什么影响？")
Add-Paragraph("3. 如果时间更紧/更充裕，结果会不同吗？")
Add-Paragraph("")

Add-Heading("[联系实际]", 4)
Add-Paragraph("1. 这个活动与你工作中的哪些决策场景相似？")
Add-Paragraph("2. 作为领导者，你如何在有限信息和时间内做出高质量决策？")
Add-Paragraph("3. 你的团队在决策过程中是否存在类似的角色问题？")
Add-Paragraph("")

Add-Heading("时间控制", 3)
Add-Paragraph("情境导入：5分钟 - 介绍背景，分配角色")
Add-Paragraph("个人决策：10分钟 - 分发材料，计时观察")
Add-Paragraph("小组讨论：15分钟 - 巡视各组，必要时引导")
Add-Paragraph("汇报点评：10分钟 - 邀请小组分享，讲师点评")
Add-Paragraph("总结延伸：5分钟 - 联系模块主题，总结要点")

$doc.Content.InsertBreak(7)  # Page break

Add-Heading("3.2 三岛救援（第五模块）", 2)
Add-Heading("活动概述", 3)
Add-Paragraph("[活动名称] 三岛救援 | [活动类型] 资源协调与谈判模拟 | [活动时间] 60分钟")
Add-Paragraph("[活动目的] 体验跨部门协作的复杂性，理解联结沟通的重要性")
Add-Paragraph("")

Add-Heading("物料清单", 3)
Add-Paragraph("□ 三岛地图（每组1张）")
Add-Paragraph("□ 角色卡（每岛2-3张）")
Add-Paragraph("□ 资源交换协议表（每组3份）")
Add-Paragraph("□ 岛屿专属资源卡（每岛1套）")
Add-Paragraph("□ 紧急救援任务卡（每组1张）")
Add-Paragraph("□ 计时器")
Add-Paragraph("")

Add-Heading("场景设置", 3)
Add-Heading("[情境设定]", 4)
Add-Paragraph("三座相邻的岛屿——能源岛、制造岛、科技岛——突然遭遇海啸袭击。三岛居民必须相互协作，共同完成紧急救援任务。每座岛屿拥有不同的专属资源，但救援任务需要多岛屿资源配合才能完成。")
Add-Paragraph("")

Add-Heading("[任务目标]", 4)
Add-Paragraph("• 主要目标：在30分钟内完成紧急救援任务")
Add-Paragraph("• 次要目标：最大化各岛屿的生存资源")
Add-Paragraph("")

Add-Heading("[角色分配]（每组8-12人，分为3岛）", 4)
Add-Paragraph("[能源岛]（2-4人）")
Add-Paragraph("• 岛屿领袖：负责对外谈判")
Add-Paragraph("• 能源专家：拥有电力和燃料专业知识")
Add-Paragraph("")
Add-Paragraph("[制造岛]（2-4人）")
Add-Paragraph("• 岛屿领袖：负责对外谈判")
Add-Paragraph("• 生产专家：拥有物资生产专业知识")
Add-Paragraph("")
Add-Paragraph("[科技岛]（2-4人）")
Add-Paragraph("• 岛屿领袖：负责对外谈判")
Add-Paragraph("• 技术专家：拥有医疗和通讯专业知识")

$doc.Content.InsertBreak(7)  # Page break

# Part 4: Role Play Designs
Add-Heading("第四部分：角色扮演完整设计", 1)

Add-Heading("角色扮演设计原则", 2)
Add-Paragraph("UYLP课程中的角色扮演遵循以下设计原则：")
Add-Paragraph("1. 真实性：场景来源于真实工作情境")
Add-Paragraph("2. 安全性：创造一个允许犯错的学习环境")
Add-Paragraph("3. 聚焦性：每次角色扮演聚焦于一个特定技能")
Add-Paragraph("4. 循环性：练习 → 反馈 → 改进 → 再练习")
Add-Paragraph("")

Add-Heading("4.1 辅导对话角色扮演", 2)
Add-Paragraph("[建议时长：45分钟（每组3轮，每轮15分钟）]")
Add-Paragraph("")

Add-Heading("场景设定", 3)
Add-Paragraph("[场景] 新晋经理小李辅导下属小王处理客户投诉")
Add-Paragraph("[背景] 小王是客服部的一名资深员工，业务能力强，但最近连续收到两起客户投诉。经理小李需要与小王进行辅导对话。")
Add-Paragraph("")

Add-Heading("角色背景", 3)
Add-Heading("[辅导员 - 小李]", 4)
Add-Paragraph("• 角色：客服部新晋升的经理，3个月管理经验")
Add-Paragraph("• 目标：帮助小王找到问题根源，提升客户服务质量")
Add-Paragraph("• 顾虑：担心处理不好会伤害与小王的关系")
Add-Paragraph("")

Add-Heading("[被辅导者 - 小王]", 4)
Add-Paragraph("• 角色：客服部资深员工，入职5年，连续两个月绩效优秀")
Add-Paragraph("• 目标：解释情况，希望得到理解和支持")
Add-Paragraph("• 顾虑：担心被质疑能力，影响晋升")
Add-Paragraph("")

Add-Heading("观察员指引", 3)
Add-Heading("[观察重点]", 4)
Add-Paragraph("1. 辅导员是否建立了情感联结（Y）？")
Add-Paragraph("2. 是否使用了STAR模型（S-T-A-R四步是否完整）？")
Add-Paragraph("3. 辅导员是否在"审问"而非"辅导"？")
Add-Paragraph("4. 小王的反应是什么？辅导是否有效？")
Add-Paragraph("")

Add-Heading("[记录要点]", 4)
Add-Paragraph("• 关键对话片段（记录原话）")
Add-Paragraph("• 辅导是否聚焦于行为而非人格")
Add-Paragraph("• 是否达成了具体的改进行动")
Add-Paragraph("")

Add-Heading("反馈指引", 3)
Add-Heading("[反馈顺序]", 4)
Add-Paragraph("1. 先让辅导员分享感受："你觉得这次对话怎么样？"")
Add-Paragraph("2. 再让被辅导者分享感受："你的感受是什么？"")
Add-Paragraph("3. 观察员提供具体反馈（基于记录）")
Add-Paragraph("4. 讲师总结要点，引入改进建议")

$doc.Content.InsertBreak(7)  # Page break

Add-Heading("4.2 反馈对话角色扮演", 2)
Add-Paragraph("[建议时长：45分钟（每组3轮，每轮15分钟）]")
Add-Paragraph("")

Add-Heading("场景设定", 3)
Add-Paragraph("[场景] 项目经理张明向团队成员刘芳反馈其在项目汇报中的表现")
Add-Paragraph("[背景] 刘芳在上周的项目汇报会上介绍了她负责的模块进展。她的汇报内容详实，但表达方式有些混乱，有时重复，有时跳跃。")
Add-Paragraph("")

Add-Heading("4.3 困难谈话角色扮演", 2)
Add-Paragraph("[建议时长：60分钟（每组3轮，每轮20分钟）]")
Add-Paragraph("")

Add-Heading("场景设定", 3)
Add-Paragraph("[场景] 部门总监陈总与即将被劝退的员工小周进行离职谈话")
Add-Paragraph("[背景] 小周入职公司3年，担任市场专员。近半年绩效持续下滑，未能达到考核要求。公司决定与其协商解除劳动合同。")
Add-Paragraph("")

Add-Heading("特别提示", 3)
Add-Paragraph("[讲师注意] 此场景涉及敏感话题，讲师需要：")
Add-Paragraph("• 在活动前强调"这是学习场景，与真实情况不同"")
Add-Paragraph("• 观察学员的情绪反应，必要时暂停活动")
Add-Paragraph("• 在复盘时强调"同理心"和"尊重"的重要性")
Add-Paragraph("• 不要评判学员的表现，而是引导自我反思")

$doc.Content.InsertBreak(7)  # Page break

# Part 5: Instructor Tools
Add-Heading("第五部分：讲师工具", 1)

Add-Heading("5.1 讲师时间控制表", 2)
Add-Paragraph("【Day 1】")
Add-Paragraph("08:30-09:00 签到与准备")
Add-Paragraph("09:00-09:15 开场")
Add-Paragraph("09:15-10:45 模块一")
Add-Paragraph("10:45-11:00 茶歇")
Add-Paragraph("11:00-12:30 模块二（上）")
Add-Paragraph("12:30-13:30 午餐")
Add-Paragraph("13:30-15:30 模块二（下）")
Add-Paragraph("15:30-15:45 茶歇")
Add-Paragraph("15:45-17:15 模块三")
Add-Paragraph("17:15-17:30 总结")
Add-Paragraph("")
Add-Paragraph("【Day 2】")
Add-Paragraph("08:30-09:00 签到与回顾")
Add-Paragraph("09:00-10:30 模块四")
Add-Paragraph("10:30-10:45 茶歇")
Add-Paragraph("10:45-12:15 模块五（上）")
Add-Paragraph("12:15-13:15 午餐")
Add-Paragraph("13:15-15:15 模块五（下）")
Add-Paragraph("15:15-15:30 茶歇")
Add-Paragraph("15:30-17:00 模块六")
Add-Paragraph("17:00-17:30 总结")

$doc.Content.InsertBreak(7)  # Page break

Add-Heading("5.2 学员表现观察量表", 2)
Add-Paragraph("讲师在授课过程中使用此量表观察学员表现，用于个性化反馈和课程调整。")
Add-Paragraph("")
Add-Paragraph("[观察量表模板]")
Add-Paragraph("学员姓名 | 模块 | 参与度 | 关键行为 | 发展建议")
Add-Paragraph("1 | 模块一 | □高 □中 □低 | | ")
Add-Paragraph("2 | 模块一 | □高 □中 □低 | | ")
Add-Paragraph("3 | 模块一 | □高 □中 □低 | | ")
Add-Paragraph("")
Add-Paragraph("[参与度评估标准]")
Add-Paragraph("高：主动发言，提出深刻问题，积极参与讨论和活动")
Add-Paragraph("中：偶尔发言，能够配合小组活动")
Add-Paragraph("低：很少发言或从不发言，需要特别关注")

$doc.Content.InsertBreak(7)  # Page break

Add-Heading("5.3 课程评估指引", 2)
Add-Heading("评估层次", 3)
Add-Paragraph("[反应层] 学员对课程的满意度")
Add-Paragraph("• 评估方式：课后问卷")
Add-Paragraph("• 评估时点：课程结束")
Add-Paragraph("")
Add-Paragraph("[学习层] 学员是否掌握了知识和技能")
Add-Paragraph("• 评估方式：角色扮演表现、课堂讨论")
Add-Paragraph("• 评估时点：课程进行中")
Add-Paragraph("")
Add-Paragraph("[行为层] 学员是否将所学应用到工作中")
Add-Paragraph("• 评估方式：课后30天行为跟踪")
Add-Paragraph("• 评估时点：课程结束后30天")
Add-Paragraph("")
Add-Paragraph("[结果层] 课程对组织绩效的影响")
Add-Paragraph("• 评估方式：团队绩效指标对比")
Add-Paragraph("• 评估时点：课程结束后90天")

$doc.Content.InsertBreak(7)  # Page break

Add-Heading("5.4 危机处理预案", 2)
Add-Heading("常见危机情况及处理方法", 3)
Add-Heading("[情况1：学员之间的冲突]", 4)
Add-Paragraph("表现：两名学员在讨论中发生激烈争执")
Add-Paragraph("处理：")
Add-Paragraph("1. 保持冷静，不要立即站队")
Add-Paragraph("2. 说"我看到你们有不同的观点，这很好。让我们听听各自的理由"")
Add-Paragraph("3. 将焦点从"对错"转向"学习"")
Add-Paragraph("4. 如果冲突持续，私下分别沟通")
Add-Paragraph("")

Add-Heading("[情况2：学员情绪崩溃]", 4)
Add-Paragraph("表现：学员因话题触及敏感点而情绪失控")
Add-Paragraph("处理：")
Add-Paragraph("1. 立即暂停活动")
Add-Paragraph("2. 私下关心询问："我注意到你有些情绪，是否需要休息一下？"")
Add-Paragraph("3. 给予空间，不过度追问")
Add-Paragraph("4. 课后跟进关怀")
Add-Paragraph("")

Add-Heading("[情况3：活动参与度低]", 4)
Add-Paragraph("表现：学员对活动缺乏投入，敷衍了事")
Add-Paragraph("处理：")
Add-Paragraph("1. 反思活动设计是否与学员需求匹配")
Add-Paragraph("2. 调整分组，将活跃学员与沉默学员搭配")
Add-Paragraph("3. 使用"选择权"技巧："你可以选择参与A或B，但不能不选择"")
Add-Paragraph("4. 课后与个别学员交流了解原因")

$doc.Content.InsertBreak(7)  # Page break

# Part 6: Appendix
Add-Heading("第六部分：附录", 1)

Add-Heading("6.1 核心模型速查", 2)
Add-Heading("辅导三问模型（WHEN/HOW/Y）", 3)
Add-Paragraph("WHEN | 何时辅导 | 绩效下降时/发展机会时/主动请求时/关键转折时")
Add-Paragraph("HOW | 如何辅导（STAR）| S-情境/T-任务/A-行动/R-结果")
Add-Paragraph("Y | 为什么辅导 | 激发动机/建立联结/创造意义")
Add-Paragraph("")
Add-Paragraph("CAIR反馈模型")
Add-Paragraph("C - Context | 情境 | 昨天下午的团队会议上")
Add-Paragraph("A - Action | 行为 | 你打断了小王的发言")
Add-Paragraph("I - Impact | 影响 | 这让小王有些尴尬")
Add-Paragraph("R - Request | 请求 | 下次能否先让小王说完？")
Add-Paragraph("")
Add-Paragraph("MAP辅导模型")
Add-Paragraph("M - Measure | 衡量 | 我们如何知道任务完成了？")
Add-Paragraph("A - Align | 对齐 | 这样做是否符合价值观？")
Add-Paragraph("P - Process | 流程 | 如何分阶段进行？")
Add-Paragraph("")
Add-Paragraph("PLACE准备框架")
Add-Paragraph("P - Purpose | 明确谈话目的")
Add-Paragraph("L - Logic | 准备逻辑结构")
Add-Paragraph("A - Anticipate | 预判对方反应")
Add-Paragraph("C - Compose | 调整自己心态")
Add-Paragraph("E - Evidence | 准备具体证据")
Add-Paragraph("")
Add-Paragraph("授权层次模型")
Add-Paragraph("层次1：执行 | 告知具体做什么")
Add-Paragraph("层次2：审批 | 需要上级批准")
Add-Paragraph("层次3：建议 | 可以提建议，由上级决定")
Add-Paragraph("层次4：同意 | 可以行动，但需要上级同意")
Add-Paragraph("层次5：自行决定 | 完全自主决定")
Add-Paragraph("层次6：委任 | 将权力完全委托给下属")

$doc.Content.InsertBreak(7)  # Page break

Add-Heading("6.2 参考资料", 2)
Add-Heading("【书籍】", 3)
Add-Paragraph("1. 《非暴力沟通》- 马歇尔·卢森堡")
Add-Paragraph("2. 《教练式辅导》- 希尔维亚·希尔德")
Add-Paragraph("3. 《高绩效教练》- 约翰·惠特莫尔")
Add-Paragraph("4. 《关键对话》- 科里·帕特森等")
Add-Paragraph("5. 《联盟》- 里德·霍夫曼等")
Add-Paragraph("")
Add-Heading("【模型来源】", 3)
Add-Paragraph("1. STAR模型：源于教练技术（Gallwey《高绩效教练》）")
Add-Paragraph("2. CAIR模型：源于绩效反馈最佳实践")
Add-Paragraph("3. 体验式学习循环：Kolb（科尔布）经验学习理论")

$doc.Content.InsertBreak(7)  # Page break

Add-Heading("6.3 术语表", 2)
Add-Paragraph("术语 | 英文 | 定义")
Add-Paragraph("辅导 | Coaching | 通过对话支持员工发展能力和绩效的管理行为")
Add-Paragraph("反馈 | Feedback | 对他人行为提供信息以帮助其改进的过程")
Add-Paragraph("授权 | Empowerment | 将决策权下放给下属的管理实践")
Add-Paragraph("绩效管理 | Performance Management | 持续提升个体和团队绩效的系统方法")
Add-Paragraph("困难谈话 | Difficult Conversation | 涉及敏感话题需要谨慎处理的沟通")
Add-Paragraph("联结沟通 | Connective Communication | 建立和维护工作关系的沟通方式")
Add-Paragraph("角色扮演 | Role Play | 模拟真实场景进行练习的教学方法")
Add-Paragraph("体验式学习 | Experiential Learning | 通过亲身体验和反思进行学习的方法")
Add-Paragraph("")
Add-Paragraph("")
Add-Paragraph("—— 手册结束 ——")

# Save and close
Write-Host "Saving document..."
$doc.SaveAs($outputPath, 16)  # wdFormatDocumentDefault = 16
$doc.Close($false)
$word.Quit()

Write-Host "Document saved to: $outputPath"
Write-Host "Done!"