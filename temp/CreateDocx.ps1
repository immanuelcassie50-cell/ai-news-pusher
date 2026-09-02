# Word COM Automation for Case Study Document
$outputPath = "D:/新课开发/职业生涯和画布/破局・重启：用CEO思维重塑职业生涯/07-案例集/案例集.docx"

# Create Word COM object
$word = New-Object -ComObject Word.Application
$word.Visible = $false
$doc = $word.Documents.Add()

# Helper function to add heading
function Add-Heading($text, $level) {
    $range = $doc.Content
    $range.Collapse(1)  # wdCollapseEnd
    $range.InsertAfter($text)
    $range.Paragraphs.Item($range.Paragraphs.Count).Style = $word.ActiveDocument.Styles["Heading$level"]
    $range.InsertParagraphAfter()
}

# Helper function to add paragraph
function Add-Paragraph($text) {
    $doc.Content.InsertAfter($text)
    $doc.Content.Paragraphs.Item($doc.Content.Paragraphs.Count).Range.InsertParagraphAfter()
}

# Helper function to add bullet
function Add-Bullet($text) {
    $doc.Content.InsertAfter("• " + $text)
    $doc.Content.Paragraphs.Item($doc.Content.Paragraphs.Count).Range.InsertParagraphAfter()
}

# ============ DOCUMENT CONTENT ============

# Cover
$doc.Content.Text = "破局・重启：用CEO思维重塑职业生涯`r`n案例集`r`n`r`n`r`n`r`n版本：1.0`r`n版权所有：罗宏伟`r`n"
$doc.Content.Paragraphs.Item(1).Range.Font.Size = 28
$doc.Content.Paragraphs.Item(1).Range.Font.Bold = $true
$doc.Content.Paragraphs.Item(1).Range.Font.Color = 2591707  # Dark blue
$doc.Content.Paragraphs.Item(1).Alignment = 1  # wdAlignCenter

$doc.Content.Paragraphs.Item(2).Range.Font.Size = 22
$doc.Content.Paragraphs.Item(2).Alignment = 1

# Page break
$doc.Content.InsertAfter("")
$doc.ActiveWindow.Selection.InsertBreak(7)  # wdPageBreak

# Main content - use explicit paragraphs
$p = $doc.Paragraphs.Add()
$p.Range.Text = "案例集说明"
$p.Style = $word.ActiveDocument.Styles["Heading1"]
$p = $doc.Paragraphs.Add()
$p.Range.Text = "本案例集简介"
$p.Style = $word.ActiveDocument.Styles["Heading2"]
$p = $doc.Paragraphs.Add()
$p.Range.Text = "本案例集是「破局・重启：用CEO思维重塑职业生涯」课程的核心教学材料之一。案例以虚构人物林晓的职业生涯经历为主线，贯穿课程四大模块，帮助学员在真实情境中理解并应用CEO思维框架。"

$p = $doc.Paragraphs.Add()
$p.Range.Text = "案例结构"
$p.Style = $word.ActiveDocument.Styles["Heading2"]
$p = $doc.Paragraphs.Add()
$p.Range.Text = "每个案例均包含以下七个组成部分："
Add-Bullet "案例基本信息：人物背景与场景设定"
Add-Bullet "案例背景：事件发展的完整脉络"
Add-Bullet "核心冲突：推动故事发展的关键矛盾"
Add-Bullet "决策两难：没有标准答案的战略抉择"
Add-Bullet "案例分析要点：讲师引导讨论的关键维度"
Add-Bullet "讨论问题：激发学员深度思考的开放性问题"
Add-Bullet "案例启示：从个案抽象出的普适性洞察"

$p = $doc.Paragraphs.Add()
$p.Range.Text = "教学目标"
$p.Style = $word.ActiveDocument.Styles["Heading2"]
Add-Bullet "模块一：帮助学员看清自己当前"被经营"的被动处境，意识到个人价值不等于岗位价值"
Add-Bullet "模块二：引导学员探索个人定位，找到差异化竞争优势"
Add-Bullet "模块三：教会学员用资产负债表工具全面盘点人生资产"
Add-Bullet "模块四：推动学员制定可落地的90天行动计划"

$p = $doc.Paragraphs.Add()
$p.Range.Text = "使用建议"
$p.Style = $word.ActiveDocument.Styles["Heading2"]
$p = $doc.Paragraphs.Add()
$p.Range.Text = "建议授课时长：每个案例30-45分钟，其中案例阅读10分钟、引导讨论15-20分钟、总结提炼5-10分钟。"
$p = $doc.Paragraphs.Add()
$p.Range.Text = "讨论环节设计：建议采用"苏格拉底式提问"，通过递进式问题引导学员自己得出结论，而非直接给出答案。"

# ============ 案例一 ============
$p = $doc.Paragraphs.Add()
$p.Range.Text = "模块一案例：看清局——林晓的"被经营"困局"
$p.Style = $word.ActiveDocument.Styles["Heading1"]

$p = $doc.Paragraphs.Add()
$p.Range.Text = "案例基本信息"
$p.Style = $word.ActiveDocument.Styles["Heading2"]

# Create table for basic info
$table = $doc.Tables.Add($doc.Paragraphs.Item($doc.Paragraphs.Count).Range, 7, 2)
$table.Cell(1,1).Range.Text = "人物"
$table.Cell(1,2).Range.Text = "林晓"
$table.Cell(2,1).Range.Text = "性别"
$table.Cell(2,2).Range.Text = "女"
$table.Cell(3,1).Range.Text = "年龄"
$table.Cell(3,2).Range.Text = "34岁"
$table.Cell(4,1).Range.Text = "职业"
$table.Cell(4,2).Range.Text = "某互联网公司产品运营经理"
$table.Cell(5,1).Range.Text = "工作年限"
$table.Cell(5,2).Range.Text = "8年"
$table.Cell(6,1).Range.Text = "教育背景"
$table.Cell(6,2).Range.Text = "二本毕业，校招进入现公司"
$table.Cell(7,1).Range.Text = "晋升轨迹"
$table.Cell(7,2).Range.Text = "从基层做起，经历过2次晋升，1次调岗"

$p = $doc.Paragraphs.Add()
$p.Range.Text = "案例背景"
$p.Style = $word.ActiveDocument.Styles["Heading2"]
$p = $doc.Paragraphs.Add()
$p.Range.Text = "林晓是一家互联网公司产品运营部的经理，在这家公司已经工作了整整8年。"
$p = $doc.Paragraphs.Add()
$p.Range.Text = "当年她以应届生身份校招进入公司，从最基础的数据运营专员做起。凭着踏实肯干的性格和出色的业绩表现，她先后获得两次晋升，从专员一路做到经理。她所负责的用户运营工作也一直是公司的标杆项目，连续三年绩效考核获得A级评定。"
$p = $doc.Paragraphs.Add()
$p.Range.Text = "然而，一切在三个月前发生了转折。"
$p = $doc.Paragraphs.Add()
$p.Range.Text = "公司新任CEO上任后启动了战略调整，核心方向从"用户增长"转向"成本控制"。作为调整的一部分，林晓所在的产品运营部被裁撤——整个团队被拆分到两个不同的部门。林晓被安排到了一个边缘岗位：数据整理组，负责日常数据的汇总和报表制作，不再参与任何核心项目的策划和执行。"
$p = $doc.Paragraphs.Add()
$p.Range.Text = "更让她感到不安的是，她发现过去那些对她"重用"的领导，在部门调整后都选择了沉默，没有人主动跟她沟通职业发展的问题。她感觉自己从一颗"明星"瞬间变成了一颗"弃子"。"

$p = $doc.Paragraphs.Add()
$p.Range.Text = "核心冲突"
$p.Style = $word.ActiveDocument.Styles["Heading2"]
$p = $doc.Paragraphs.Add()
$p.Range.Text = "林晓一直信奉一条职场铁律："好好工作就会被认可"。她八年如一日地坚守这条信念，勤奋、踏实、从不抱怨。然而这次组织调整让她第一次深刻地意识到："
$p = $doc.Paragraphs.Add()
$p.Range.Text = "一个人的价值，未必是由她的能力决定的，而是由她所在的"位置"决定的。"
$p.Font.Bold = $true
$p = $doc.Paragraphs.Add()
$p.Range.Text = "当她还在为绩效考核A级的荣誉沾沾自喜时，公司已经在战略层面做出了将她边缘化的决定。那些她引以为傲的"能力"和"业绩"，在公司层面的决策中，似乎并没有她想象中那么重要。"
$p = $doc.Paragraphs.Add()
$p.Range.Text = "她陷入了深深的困惑："
Add-Bullet "是自己的能力真的不行，还是从一开始她就误解了职场成功的法则？"
Add-Bullet "如果能力不是决定因素，那什么才是？"
Add-Bullet "她是应该继续等待——等待公司重新发现她的价值，还是应该主动出击——掌握自己职业发展的主动权？"

$p = $doc.Paragraphs.Add()
$p.Range.Text = "案例启示"
$p.Style = $word.ActiveDocument.Styles["Heading2"]
$p = $doc.Paragraphs.Add()
$p.Range.Text = "林晓的故事并非个例。在职业生涯的长河中，每个人都可能面临类似的"被调整"。真正决定一个人职业高度的，不是某一次选择的对错，而是他是否具备CEO思维——把职业生涯当作一家公司来经营。"
$p = $doc.Paragraphs.Add()
$p.Range.Text = "当你把选择权交给别人，你就成为了别人棋盘上的一颗棋子。只有主动经营自己，才能掌握命运的主动权。"

# ============ 案例二 ============
$p = $doc.Paragraphs.Add()
$p.Range.Text = "模块二案例：立战略——林晓的"个人定位"探索"
$p.Style = $word.ActiveDocument.Styles["Heading1"]

$p = $doc.Paragraphs.Add()
$p.Range.Text = "案例基本信息"
$p.Style = $word.ActiveDocument.Styles["Heading2"]

$table = $doc.Tables.Add($doc.Paragraphs.Item($doc.Paragraphs.Count).Range, 4, 2)
$table.Cell(1,1).Range.Text = "所处阶段"
$table.Cell(1,2).Range.Text = "职业转型探索期"
$table.Cell(2,1).Range.Text = "核心任务"
$table.Cell(2,2).Range.Text = "重新定义个人定位，找到差异化价值"
$table.Cell(3,1).Range.Text = "关键工具"
$table.Cell(3,2).Range.Text = "个人商业画布、个人定位三问"
$table.Cell(4,1).Range.Text = "时间背景"
$table.Cell(4,2).Range.Text = "部门调整后第2个月，开始反思职业方向"

$p = $doc.Paragraphs.Add()
$p.Range.Text = "案例背景"
$p.Style = $word.ActiveDocument.Styles["Heading2"]
$p = $doc.Paragraphs.Add()
$p.Range.Text = "在朋友的推荐下，林晓参加了一个职业发展规划工作坊。第一次接触"CEO思维"这个概念时，她感到既陌生又新奇。工作坊的老师说了一句让她印象深刻的话："
$p = $doc.Paragraphs.Add()
$p.Range.Text = ""你的职业生涯就是一家公司，你是这家公司的唯一创始人兼CEO。你的能力是产品，你的时间是资本，你的每一次选择都是战略决策。""
$p.Font.Italic = $true
$p = $doc.Paragraphs.Add()
$p.Range.Text = "这句话像一道闪电，照亮了她过去8年从未思考过的盲区。"
$p = $doc.Paragraphs.Add()
$p.Range.Text = "带着这个全新的视角，林晓开始用"个人商业画布"工具重新审视自己。在填写的过程中，她发现自己从来没有认真思考过三个问题："
Add-Bullet "我的核心能力是什么？"
Add-Bullet "我的独特价值在哪里？"
Add-Bullet "谁是我的"目标客户"——谁愿意为我的能力买单？"

$p = $doc.Paragraphs.Add()
$p.Range.Text = "案例启示"
$p.Style = $word.ActiveDocument.Styles["Heading2"]
$p = $doc.Paragraphs.Add()
$p.Range.Text = "个人定位不是"你想成为谁"，而是"市场需要什么"和"你能提供什么"的交集。一个好的定位，需要同时满足三个条件："
Add-Bullet "你擅长做这件事（能力）"
Add-Bullet "你热爱做这件事（动力）"
Add-Bullet "有人愿意为这件事付费（市场）"
$p = $doc.Paragraphs.Add()
$p.Range.Text = "只有三者重叠的区域，才是真正的"甜蜜点"。"

# ============ 案例三 ============
$p = $doc.Paragraphs.Add()
$p.Range.Text = "模块三案例：调资产——林晓的"资产负债表"盘点"
$p.Style = $word.ActiveDocument.Styles["Heading1"]

$p = $doc.Paragraphs.Add()
$p.Range.Text = "案例基本信息"
$p.Style = $word.ActiveDocument.Styles["Heading2"]

$table = $doc.Tables.Add($doc.Paragraphs.Item($doc.Paragraphs.Count).Range, 4, 2)
$table.Cell(1,1).Range.Text = "所处阶段"
$table.Cell(1,2).Range.Text = "职业重启准备期"
$table.Cell(2,1).Range.Text = "核心任务"
$table.Cell(2,2).Range.Text = "全面盘点个人资产与负债"
$table.Cell(3,1).Range.Text = "关键工具"
$table.Cell(3,2).Range.Text = "个人资产负债表"
$table.Cell(4,1).Range.Text = "时间背景"
$table.Cell(4,2).Range.Text = "个人定位确定后，开始系统梳理资源"

$p = $doc.Paragraphs.Add()
$p.Range.Text = "案例背景"
$p.Style = $word.ActiveDocument.Styles["Heading2"]
$p = $doc.Paragraphs.Add()
$p.Range.Text = "在确定了"运营专家"的定位方向后，导师建议林晓用"个人资产负债表"工具对自己进行一次全面的盘点。"
$p = $doc.Paragraphs.Add()
$p.Range.Text = "这个工具的核心理念是：把你自己当作一家公司，你的职业生涯就是这家公司的经营。用资产负债表的逻辑来审视你的人生资源——哪些是资产，哪些是负债。"
$p = $doc.Paragraphs.Add()
$p.Range.Text = "林晓花了一周时间，认真填写了这张表。当她把结果写出来的时候，她被自己吓了一跳。"

$p = $doc.Paragraphs.Add()
$p.Range.Text = "核心洞察"
$p.Style = $word.ActiveDocument.Styles["Heading2"]
$p = $doc.Paragraphs.Add()
$p.Range.Text = "经过这番盘点，林晓得出了一个让她心惊的结论："
$p = $doc.Paragraphs.Add()
$p.Range.Text = "她过去8年一直在"消耗资产"而不是"增值资产"。"
$p.Font.Bold = $true
$p = $doc.Paragraphs.Add()
$p.Range.Text = "她把最宝贵的青春年华花在了重复性的工作上，没有刻意投资自己的能力资产和人脉资产。她像一家只顾着日常运营、却从不考虑长期发展的公司——账面数字看似稳定，实则在悄悄贬值。"

$p = $doc.Paragraphs.Add()
$p.Range.Text = "案例启示"
$p.Style = $word.ActiveDocument.Styles["Heading2"]
$p = $doc.Paragraphs.Add()
$p.Range.Text = "个人资产负债表是一面镜子，照出你真实的财务状况。更重要的是，它是一张导航图，告诉你下一步应该把资源投向哪里。"
$p = $doc.Paragraphs.Add()
$p.Range.Text = "真正的聪明人，不是想办法节省消耗，而是想办法加速增值。当你的资产增长速度快于消耗速度时，你就开始走向富足。反之，你就是在悄然走向破产。"

# ============ 案例四 ============
$p = $doc.Paragraphs.Add()
$p.Range.Text = "模块四案例：起新局——林晓的"90天行动计划""
$p.Style = $word.ActiveDocument.Styles["Heading1"]

$p = $doc.Paragraphs.Add()
$p.Range.Text = "案例基本信息"
$p.Style = $word.ActiveDocument.Styles["Heading2"]

$table = $doc.Tables.Add($doc.Paragraphs.Item($doc.Paragraphs.Count).Range, 4, 2)
$table.Cell(1,1).Range.Text = "所处阶段"
$table.Cell(1,2).Range.Text = "职业转型执行期"
$table.Cell(2,1).Range.Text = "核心任务"
$table.Cell(2,2).Range.Text = "制定并执行90天转型行动计划"
$table.Cell(3,1).Range.Text = "关键工具"
$table.Cell(3,2).Range.Text = "90天行动计划表、每周复盘机制"
$table.Cell(4,1).Range.Text = "时间背景"
$table.Cell(4,2).Range.Text = "完成前三个模块学习后，正式启动转型"

$p = $doc.Paragraphs.Add()
$p.Range.Text = "案例背景"
$p.Style = $word.ActiveDocument.Styles["Heading2"]
$p = $doc.Paragraphs.Add()
$p.Range.Text = "完成前三个模块的学习后，林晓感觉自己像被升级了一台新的操作系统。她第一次用CEO的视角来看待自己的职业生涯，第一次清晰地看到了自己的资产与负债，第一次认真地思考了自己的定位。"
$p = $doc.Paragraphs.Add()
$p.Range.Text = "但她知道，认知升级只是第一步，真正的考验是执行。"
$p = $doc.Paragraphs.Add()
$p.Range.Text = "在导师的指导下，林晓制定了一份"90天转型行动计划"。这份计划的核心是一个决策："
$p = $doc.Paragraphs.Add()
$p.Range.Text = "止损决策：不再等待内部调岗机会，立即开始外部探索。"
$p.Font.Bold = $true
$p = $doc.Paragraphs.Add()
$p.Range.Text = "她的理由是：等待是最贵的成本。与其把命运交给别人，不如主动出击。哪怕失败了，至少知道自己败在哪里。"

# 90天计划表格
$p = $doc.Paragraphs.Add()
$p.Range.Text = "90天行动计划"
$p.Style = $word.ActiveDocument.Styles["Heading2"]

$table = $doc.Tables.Add($doc.Paragraphs.Item($doc.Paragraphs.Count).Range, 4, 5)
$table.Cell(1,1).Range.Text = "阶段"
$table.Cell(1,2).Range.Text = "时间"
$table.Cell(1,3).Range.Text = "核心任务"
$table.Cell(1,4).Range.Text = "具体行动"
$table.Cell(1,5).Range.Text = "预期成果"

$table.Cell(2,1).Range.Text = "第一阶段"
$table.Cell(2,2).Range.Text = "第1-30天"
$table.Cell(2,3).Range.Text = "个人品牌重塑"
$table.Cell(2,4).Range.Text = "更新简历，突出可量化成果；重新包装LinkedIn和职业社交形象；开始撰写行业洞察文章"
$table.Cell(2,5).Range.Text = "简历通过率提升，获得首批面试机会"

$table.Cell(3,1).Range.Text = "第二阶段"
$table.Cell(3,2).Range.Text = "第31-60天"
$table.Cell(3,3).Range.Text = "深度networking"
$table.Cell(3,4).Range.Text = "每周至少认识2个新朋友；参加3场行业线下活动；主动联系目标公司内部人员"
$table.Cell(3,5).Range.Text = "建立有效人脉圈，获取内部推荐"

$table.Cell(4,1).Range.Text = "第三阶段"
$table.Cell(4,2).Range.Text = "第61-90天"
$table.Cell(4,3).Range.Text = "offer冲刺"
$table.Cell(4,4).Range.Text = "拿到至少2个offer；全面评估每个offer的优劣势；做出最终选择"
$table.Cell(4,5).Range.Text = "成功转型，薪资提升30%+"

$p = $doc.Paragraphs.Add()
$p.Range.Text = "成果"
$p.Style = $word.ActiveDocument.Styles["Heading2"]
$p = $doc.Paragraphs.Add()
$p.Range.Text = "林晓严格执行了这份计划。"
$p = $doc.Paragraphs.Add()
$p.Range.Text = "在第30天，她收到了第一个面试邀请。"
$p = $doc.Paragraphs.Add()
$p.Range.Text = "在第45天，她同时有3个面试在进行中。"
$p = $doc.Paragraphs.Add()
$p.Range.Text = "在第60天，她拿到了第一个offer——某成长型公司的运营总监岗位，薪资提升25%。"
$p = $doc.Paragraphs.Add()
$p.Range.Text = "在第75天，她又收到了第二个offer——一家知名互联网公司的高级运营经理岗位，薪资提升30%。"
$p = $doc.Paragraphs.Add()
$p.Range.Text = "经过慎重比较，林晓选择了第二个offer。她说理由有三："
Add-Bullet "公司品牌更有利于未来发展"
Add-Bullet "岗位更符合"运营专家"的定位"
Add-Bullet "直接汇报给业务负责人，成长空间更大"

$p = $doc.Paragraphs.Add()
$p.Range.Text = "案例启示"
$p.Style = $word.ActiveDocument.Styles["Heading2"]
$p = $doc.Paragraphs.Add()
$p.Range.Text = "任何伟大的计划，都必须落实到每一天的具体行动中。"
$p = $doc.Paragraphs.Add()
$p.Range.Text = "90天看起来不长，但足够改变很多事。关键不是你有多少时间，而是你把时间用在哪里。"
$p = $doc.Paragraphs.Add()
$p.Range.Text = "当你用CEO思维来经营自己时，你会发现：机会不是等来的，是创造出来的。命运不是被动接受的，是主动争取的。"

# ============ 使用说明 ============
$p = $doc.Paragraphs.Add()
$p.Range.Text = "案例使用说明"
$p.Style = $word.ActiveDocument.Styles["Heading1"]

$p = $doc.Paragraphs.Add()
$p.Range.Text = "各模块案例如何配合教学"
$p.Style = $word.ActiveDocument.Styles["Heading2"]
$p = $doc.Paragraphs.Add()
$p.Range.Text = "建议教学顺序"
$p.Style = $word.ActiveDocument.Styles["Heading3"]
$p = $doc.Paragraphs.Add()
$p.Range.Text = "建议按照案例集的自然顺序进行教学：模块一 → 模块二 → 模块三 → 模块四。每个案例都建立在前一个案例的认知基础上，顺序颠倒可能会影响教学效果。"

$p = $doc.Paragraphs.Add()
$p.Range.Text = "模块间的逻辑关系"
$p.Style = $word.ActiveDocument.Styles["Heading3"]
Add-Bullet "模块一（看清局）：帮助学员建立危机意识，意识到"被动等待"的危险性"
Add-Bullet "模块二（立战略）：在危机意识基础上，引导学员思考"我要往哪里走""
Add-Bullet "模块三（调资产）：在明确方向后，帮助学员看清"我现在有什么""
Add-Bullet "模块四（起新局）：在前三个模块基础上，推动学员制定"我现在要做什么""

$p = $doc.Paragraphs.Add()
$p.Range.Text = "时间分配建议"
$p.Style = $word.ActiveDocument.Styles["Heading3"]
$p = $doc.Paragraphs.Add()
$p.Range.Text = "全套案例教学建议总时长：3-4小时"
Add-Bullet "模块一：45-60分钟（案例阅读10分钟，讨论30分钟，总结10分钟）"
Add-Bullet "模块二：45-60分钟"
Add-Bullet "模块三：50-70分钟（因为包含表格工具讲解）"
Add-Bullet "模块四：45-60分钟"

$p = $doc.Paragraphs.Add()
$p.Range.Text = "讨论环节设计建议"
$p.Style = $word.ActiveDocument.Styles["Heading2"]
$p = $doc.Paragraphs.Add()
$p.Range.Text = "苏格拉底式提问法"
$p.Style = $word.ActiveDocument.Styles["Heading3"]
$p = $doc.Paragraphs.Add()
$p.Range.Text = "建议采用"苏格拉底式提问"进行案例讨论，而非直接给出答案。核心原则是：通过递进式问题，引导学员自己得出结论。"
$p = $doc.Paragraphs.Add()
$p.Range.Text = "提问层次："
Add-Bullet "第一层（事实层）：案例中发生了什么？林晓面临的情况是什么？"
Add-Bullet "第二层（分析层）：为什么会发生这种情况？林晓的问题出在哪里？"
Add-Bullet "第三层（决策层）：如果是你，你会怎么选择？你会问自己什么问题？"
Add-Bullet "第四层（行动层）：从现在开始，你要做什么具体的行动？"

$p = $doc.Paragraphs.Add()
$p.Range.Text = "小组讨论设计"
$p.Style = $word.ActiveDocument.Styles["Heading3"]
$p = $doc.Paragraphs.Add()
$p.Range.Text = "建议将学员分成3-4人小组，每个小组讨论一个特定问题，5-8分钟后各组分享结论。讲师进行总结和点评。"

$p = $doc.Paragraphs.Add()
$p.Range.Text = "角色扮演设计"
$p.Style = $word.ActiveDocument.Styles["Heading3"]
$p = $doc.Paragraphs.Add()
$p.Range.Text = "针对模块四的90天行动计划，可以设计角色扮演环节：让学员扮演林晓，向"面试官"（由其他学员扮演）推销自己。"

$p = $doc.Paragraphs.Add()
$p.Range.Text = "后续跟进建议"
$p.Style = $word.ActiveDocument.Styles["Heading2"]
Add-Bullet "课后作业：让学员为自己制定一份类似的"个人资产负债表"或"90天行动计划""
Add-Bullet "一个月后跟进：让学员分享自己在执行计划过程中的进展和困难"
Add-Bullet "三个月后跟进：让学员复盘自己的转型经历，无论成功还是失败都是宝贵的学习素材"

# Save and close
$doc.SaveAs([ref]$outputPath, [ref]16)  # wdFormatXMLDocument (16)
$doc.Close()
$word.Quit()

Write-Host "Document created: $outputPath"
