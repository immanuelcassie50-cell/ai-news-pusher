# PowerShell script to create 6 tool form Word documents for 破局・重启 course
# Using COM Object to create Word documents

$word = New-Object -ComObject Word.Application
$word.Visible = $false
$word.DisplayAlerts = 0

$outputPath = "D:/新课开发/职业生涯和画布/破局・重启：用 CEO 思维重塑职业生涯/08-工具集锦"

function Create-TableRow($table, $cells, $isHeader = $false) {
    $row = $table.Rows.Add()
    $row.Height = 400
    for ($i = 0; $i -lt $cells.Count; $i++) {
        $cell = $row.Cells[$i + 1]
        $cell.Range.Text = $cells[$i]
        $cell.Range.Font.Size = 10
        $cell.Range.Font.Name = "微软雅黑"
        if ($isHeader) {
            $cell.Range.Font.Bold = $true
            $cell.Range.ParagraphFormat.Alignment = 1 # center
        }
    }
    return $row
}

function Add-Copyright($doc) {
    $para = $doc.Paragraphs.Add()
    $para.Range.Text = ""
    $para.Range.InsertParagraphAfter()

    $para2 = $doc.Paragraphs.Add()
    $para2.Range.Text = "© 罗宏伟 2026 | 仅供课程内部使用"
    $para2.Range.Font.Size = 8
    $para2.Range.Font.Name = "微软雅黑"
    $para2.Range.Font.Color = 12632256
    $para2.Range.ParagraphFormat.Alignment = 2 # right
}

# Document 1: 个人经营诊断表
Write-Host "Creating 01-个人经营诊断表..."
$doc = $word.Documents.Add()
$doc.PageSetup.PageSize = 1 # A4

$title = $doc.Paragraphs.Add()
$title.Range.Text = "个人经营诊断表"
$title.Range.Font.Size = 22
$title.Range.Font.Bold = $true
$title.Range.Font.Name = "微软雅黑"
$title.Range.ParagraphFormat.Alignment = 1

$subtitle = $doc.Paragraphs.Add()
$subtitle.Range.Text = "破局・重启：用CEO思维重塑职业生涯 | 工具表单"
$subtitle.Range.Font.Size = 10
$subtitle.Range.Font.Name = "微软雅黑"
$subtitle.Range.ParagraphFormat.Alignment = 1

$doc.Paragraphs.Add()

$intro = $doc.Paragraphs.Add()
$intro.Range.Text = "请认真回答以下问题，每题选择一个最符合你现状的选项。每题1-4分，总分40分。"
$intro.Range.Font.Size = 10
$intro.Range.Font.Name = "微软雅黑"

$doc.Paragraphs.Add()

# Create table
$table = $doc.Tables.Add($doc.Paragraphs.Add().Range, 11, 4)
$table.Borders.Enable = 1

# Header
Create-TableRow $table @("诊断维度", "评估问题", "选项(A/B/C/D)", "得分") $true

# Data rows
$data = @(
    @("等待被安排", "你主动申请过多少次新项目？", "A.0次 B.1-2次 C.3-5次 D.5次以上", ""),
    @("第一反应", "遇到问题时你的第一反应是什么？", "A.等指示 B.问同事 C.先想方案 D.直接决定", ""),
    @("工作变化", "你目前工作与入职时相比有多大变化？", "A.几乎没变化 B.有些变化 C.变化较大 D.变化很大", ""),
    @("薪资提升", "你的薪资与3年前相比？", "A.几乎没提升 B.小幅提升 C.较大提升 D.显著提升", ""),
    @("被裁概率", "如果公司突然裁员你觉得概率？", "A.很高 B.较高 C.较低 D.很低", ""),
    @("行业发展", "你对所在行业发展趋势的了解程度？", "A.完全不知道 B.知道一些 C.比较清楚 D.非常清楚", ""),
    @("自我投资", "你主动投资职业发展的程度？", "A.从来没有 B.偶尔有 C.经常有 D.持续不断", ""),
    @("通用能力", "你有多少"离开公司也能用"的能力？", "A.几乎没有 B.有一些 C.不少 D.非常多", ""),
    @("业内评价", "同行如何看待你？", "A.不知道 B.称职执行者 C.领域专家 D.有影响力领导", ""),
    @("求职把握", "如果失业多久能找到同等工作？", "A.不确定 B.3-6月 C.1-3月 D.一个月内", "")
)

foreach ($row in $data) {
    Create-TableRow $table $row
}

$doc.Paragraphs.Add()

# Scoring guide
$scoringTitle = $doc.Paragraphs.Add()
$scoringTitle.Range.Text = "评分标准"
$scoringTitle.Range.Font.Size = 12
$scoringTitle.Range.Font.Bold = $true
$scoringTitle.Range.Font.Name = "微软雅黑"

$scoringTable = $doc.Tables.Add($doc.Paragraphs.Add().Range, 5, 3)
$scoringTable.Borders.Enable = 1
Create-TableRow $scoringTable @("得分范围", "心态类型", "说明") $true
Create-TableRow $scoringTable @("25-40分", "强雇员心态", "高度依赖组织和岗位，需要立即开始"经营自己"的转变")
Create-TableRow $scoringTable @("15-24分", "中度雇员心态", "有一定的经营意识，但还不够系统")
Create-TableRow $scoringTable @("8-14分", "轻度雇员心态", "已经在向经营者心态转变")
Create-TableRow $scoringTable @("0-7分", "经营者心态", "已经建立了较强的自我经营意识")

$doc.Paragraphs.Add()

# User info
$infoTitle = $doc.Paragraphs.Add()
$infoTitle.Range.Text = "学员信息"
$infoTitle.Range.Font.Size = 12
$infoTitle.Range.Font.Bold = $true

$infoTable = $doc.Tables.Add($doc.Paragraphs.Add().Range, 2, 4)
$infoTable.Borders.Enable = 1
Create-TableRow $infoTable @("姓名", "", "日期", "")
Create-TableRow $infoTable @("得分", "", "心态类型", "")

Add-Copyright $doc

$doc.SaveAs([ref]"$outputPath/01-个人经营诊断表.docx", [ref]16)
$doc.Close()
$doc = $null

Write-Host "Created 01-个人经营诊断表.docx"

# Document 2: 价值定位图
Write-Host "Creating 02-价值定位图..."
$doc = $word.Documents.Add()
$doc.PageSetup.PageSize = 1

$title = $doc.Paragraphs.Add()
$title.Range.Text = "价值定位图"
$title.Range.Font.Size = 22
$title.Range.Font.Bold = $true
$title.Range.Font.Name = "微软雅黑"
$title.Range.ParagraphFormat.Alignment = 1

$subtitle = $doc.Paragraphs.Add()
$subtitle.Range.Text = "破局・重启：用CEO思维重塑职业生涯 | 工具表单"
$subtitle.Range.Font.Size = 10
$subtitle.Range.Font.Name = "微软雅黑"
$subtitle.Range.ParagraphFormat.Alignment = 1

$doc.Paragraphs.Add()

$table2 = $doc.Tables.Add($doc.Paragraphs.Add().Range, 6, 2)
$table2.Borders.Enable = 1
Create-TableRow $table2 @("要素", "内容") $true
Create-TableRow $table2 @("我是谁（身份定位）", "")
Create-TableRow $table2 @("我服务谁（目标客户）", "")
Create-TableRow $table2 @("我解决什么问题（价值主张）", "")
Create-TableRow $table2 @("我与竞争对手有何不同（差异化）", "")
Create-TableRow $table2 @("我凭什么让人相信（可信证明）", "")

$doc.Paragraphs.Add()

# Position statement box
$psTitle = $doc.Paragraphs.Add()
$psTitle.Range.Text = "个人定位声明"
$psTitle.Range.Font.Size = 14
$psTitle.Range.Font.Bold = $true
$psTitle.Range.Font.Name = "微软雅黑"
$psTitle.Range.Font.Color = 255

$psBox = $doc.Paragraphs.Add()
$psBox.Range.Text = "请用以下句式，写出你的个人定位声明："
$psBox.Range.Font.Size = 10

$psQuote = $doc.Paragraphs.Add()
$psQuote.Range.Text = "`"我帮助___________（目标客户）___________（解决什么问题），通过___________（独特方法），实现___________（可衡量成果）。`""
$psQuote.Range.Font.Size = 11
$psQuote.Range.Font.Italic = $true

$doc.Paragraphs.Add()
$doc.Paragraphs.Add()

$fillArea = $doc.Paragraphs.Add()
$fillArea.Range.Text = "我的定位声明："
$fillArea.Range.Font.Size = 11
$fillArea.Range.Font.Bold = $true

for ($i = 0; $i -lt 5; $i++) {
    $doc.Paragraphs.Add()
}

Add-Copyright $doc

$doc.SaveAs([ref]"$outputPath/02-价值定位图.docx", [ref]16)
$doc.Close()
$doc = $null

Write-Host "Created 02-价值定位图.docx"

# Document 3: 个人资产负债表
Write-Host "Creating 03-个人资产负债表..."
$doc = $word.Documents.Add()
$doc.PageSetup.PageSize = 1

$title = $doc.Paragraphs.Add()
$title.Range.Text = "个人资产负债表"
$title.Range.Font.Size = 22
$title.Range.Font.Bold = $true
$title.Range.Font.Name = "微软雅黑"
$title.Range.ParagraphFormat.Alignment = 1

$subtitle = $doc.Paragraphs.Add()
$subtitle.Range.Text = "破局・重启：用CEO思维重塑职业生涯 | 工具表单"
$subtitle.Range.Font.Size = 10
$subtitle.Range.Font.Name = "微软雅黑"
$subtitle.Range.ParagraphFormat.Alignment = 1

$doc.Paragraphs.Add()

# Time Assets
$t1 = $doc.Paragraphs.Add()
$t1.Range.Text = "一、时间资产"
$t1.Range.Font.Size = 14
$t1.Range.Font.Bold = $true

$tbl1 = $doc.Tables.Add($doc.Paragraphs.Add().Range, 4, 3)
$tbl1.Borders.Enable = 1
Create-TableRow $tbl1 @("项目", "具体描述", "评分(1-10)") $true
Create-TableRow $tbl1 @("每天有效工作时间", "", "")
Create-TableRow $tbl1 @("每周学习成长时间", "", "")
Create-TableRow $tbl1 @("时间利用效率", "", "")

$doc.Paragraphs.Add()

# Human Assets
$t2 = $doc.Paragraphs.Add()
$t2.Range.Text = "二、人脉资产"
$t2.Range.Font.Size = 14
$t2.Range.Font.Bold = $true

$tbl2 = $doc.Tables.Add($doc.Paragraphs.Add().Range, 4, 3)
$tbl2.Borders.Enable = 1
Create-TableRow $tbl2 @("项目", "具体描述", "评分(1-10)") $true
Create-TableRow $tbl2 @("行业人脉数量", "", "")
Create-TableRow $tbl2 @("核心人脉质量", "", "")
Create-TableRow $tbl2 @("人脉带来的机会", "", "")

$doc.Paragraphs.Add()

# Capability Assets
$t3 = $doc.Paragraphs.Add()
$t3.Range.Text = "三、能力资产"
$t3.Range.Font.Size = 14
$t3.Range.Font.Bold = $true

$tbl3 = $doc.Tables.Add($doc.Paragraphs.Add().Range, 4, 3)
$tbl3.Borders.Enable = 1
Create-TableRow $tbl3 @("项目", "具体描述", "评分(1-10)") $true
Create-TableRow $tbl3 @("专业技能深度", "", "")
Create-TableRow $tbl3 @("可迁移技能广度", "", "")
Create-TableRow $tbl3 @("独特能力组合", "", "")

$doc.Paragraphs.Add()

# Trust Assets
$t4 = $doc.Paragraphs.Add()
$t4.Range.Text = "四、信任资产"
$t4.Range.Font.Size = 14
$t4.Range.Font.Bold = $true

$tbl4 = $doc.Tables.Add($doc.Paragraphs.Add().Range, 4, 3)
$tbl4.Borders.Enable = 1
Create-TableRow $tbl4 @("项目", "具体描述", "评分(1-10)") $true
Create-TableRow $tbl4 @("内部口碑", "", "")
Create-TableRow $tbl4 @("外部声誉", "", "")
Create-TableRow $tbl4 @("个人品牌影响力", "", "")

$doc.Paragraphs.Add()

# Liabilities
$t5 = $doc.Paragraphs.Add()
$t5.Range.Text = "五、负债"
$t5.Range.Font.Size = 14
$t5.Range.Font.Bold = $true
$t5.Range.Font.Color = 255

$tbl5 = $doc.Tables.Add($doc.Paragraphs.Add().Range, 5, 3)
$tbl5.Borders.Enable = 1
Create-TableRow $tbl5 @("负债类型", "具体表现", "严重程度(1-10)") $true
Create-TableRow $tbl5 @("时间负债", "", "")
Create-TableRow $tbl5 @("人脉负债", "", "")
Create-TableRow $tbl5 @("能力负债", "", "")
Create-TableRow $tbl5 @("信任负债", "", "")

$doc.Paragraphs.Add()

# Net Assets
$na = $doc.Paragraphs.Add()
$na.Range.Text = "净资产计算"
$na.Range.Font.Size = 12
$na.Range.Font.Bold = $true

$calcTable = $doc.Tables.Add($doc.Paragraphs.Add().Range, 2, 3)
$calcTable.Borders.Enable = 1
Create-TableRow $calcTable @("资产总分", "负债总分", "净资产") $true
Create-TableRow $calcTable @("", "", "=资产总分-负债总分")

Add-Copyright $doc

$doc.SaveAs([ref]"$outputPath/03-个人资产负债表.docx", [ref]16)
$doc.Close()
$doc = $null

Write-Host "Created 03-个人资产负债表.docx"

# Document 4: 风险评估决策表
Write-Host "Creating 04-风险评估决策表..."
$doc = $word.Documents.Add()
$doc.PageSetup.PageSize = 1

$title = $doc.Paragraphs.Add()
$title.Range.Text = "风险评估决策表"
$title.Range.Font.Size = 22
$title.Range.Font.Bold = $true
$title.Range.Font.Name = "微软雅黑"
$title.Range.ParagraphFormat.Alignment = 1

$subtitle = $doc.Paragraphs.Add()
$subtitle.Range.Text = "破局・重启：用CEO思维重塑职业生涯 | 工具表单"
$subtitle.Range.Font.Size = 10
$subtitle.Range.Font.Name = "微软雅黑"
$subtitle.Range.ParagraphFormat.Alignment = 1

$doc.Paragraphs.Add()

$tbl = $doc.Tables.Add($doc.Paragraphs.Add().Range, 6, 3)
$tbl.Borders.Enable = 1
Create-TableRow $tbl @("评估维度", "问题", "你的回答") $true
Create-TableRow $tbl @("沉没成本识别", "你在这个方向的已有投入是什么？", "")
Create-TableRow $tbl @("沉没成本评估", "这些投入如果放弃，损失有多大？", "")
Create-TableRow $tbl @("继续预期", "如果继续，预期收益是什么？", "")
Create-TableRow $tbl @("重新开始评估", "如果现在重新开始，起点是什么？", "")
Create-TableRow $tbl @("止损点设定", "你的止损点是什么？", "")

$doc.Paragraphs.Add()

# Decision Types
$dtTitle = $doc.Paragraphs.Add()
$dtTitle.Range.Text = "决策类型"
$dtTitle.Range.Font.Size = 14
$dtTitle.Range.Font.Bold = $true

$doc.Paragraphs.Add()
$doc.Paragraphs.Add()

$dt1 = $doc.Paragraphs.Add()
$dt1.Range.Text = "☐ 止损决策：停止消耗资源的行动"
$dt1.Range.Font.Size = 11

$dt2 = $doc.Paragraphs.Add()
$dt2.Range.Text = "☐ 投资决策：投入资源获取长期回报"
$dt2.Range.Font.Size = 11

$dt3 = $doc.Paragraphs.Add()
$dt3.Range.Text = "☐ 重新配置决策：调整资源分配比例"
$dt3.Range.Font.Size = 11

$dt4 = $doc.Paragraphs.Add()
$dt4.Range.Text = "☐ 扩张决策：在成功基础上加大投入"
$dt4.Range.Font.Size = 11

$doc.Paragraphs.Add()

# Decision Content
$dcTitle = $doc.Paragraphs.Add()
$dcTitle.Range.Text = "决策内容"
$dcTitle.Range.Font.Size = 14
$dcTitle.Range.Font.Bold = $true

$doc.Paragraphs.Add()
$dcBox = $doc.Paragraphs.Add()
$dcBox.Range.Text = "我决定_____________（具体行动），原因是_____________，时间节点是_____________。"
$dcBox.Range.Font.Size = 11
$dcBox.Range.Font.Italic = $true

for ($i = 0; $i -lt 4; $i++) {
    $doc.Paragraphs.Add()
}

Add-Copyright $doc

$doc.SaveAs([ref]"$outputPath/04-风险评估决策表.docx", [ref]16)
$doc.Close()
$doc = $null

Write-Host "Created 04-风险评估决策表.docx"

# Document 5: 个人品牌审计表
Write-Host "Creating 05-个人品牌审计表..."
$doc = $word.Documents.Add()
$doc.PageSetup.PageSize = 1

$title = $doc.Paragraphs.Add()
$title.Range.Text = "个人品牌审计表"
$title.Range.Font.Size = 22
$title.Range.Font.Bold = $true
$title.Range.Font.Name = "微软雅黑"
$title.Range.ParagraphFormat.Alignment = 1

$subtitle = $doc.Paragraphs.Add()
$subtitle.Range.Text = "破局・重启：用CEO思维重塑职业生涯 | 工具表单"
$subtitle.Range.Font.Size = 10
$subtitle.Range.Font.Name = "微软雅黑"
$subtitle.Range.ParagraphFormat.Alignment = 1

$doc.Paragraphs.Add()

$tbl = $doc.Tables.Add($doc.Paragraphs.Add().Range, 6, 3)
$tbl.Borders.Enable = 1
Create-TableRow $tbl @("审计维度", "评估问题", "评估结果") $true
Create-TableRow $tbl @("品牌认知", "别人提到你的名字时会想到什么？", "")
Create-TableRow $tbl @("品牌差异化", "你的独特标签是什么？", "")
Create-TableRow $tbl @("品牌一致性", "你的言行是否一致？", "")
Create-TableRow $tbl @("品牌传播", "你主动传播自己品牌的方式？", "")
Create-TableRow $tbl @("品牌资产", "你积累的品牌权益有多少？", "")

$doc.Paragraphs.Add()

# Action Plan
$apTitle = $doc.Paragraphs.Add()
$apTitle.Range.Text = "品牌建设行动计划"
$apTitle.Range.Font.Size = 14
$apTitle.Range.Font.Bold = $true

$doc.Paragraphs.Add()

$aptbl = $doc.Tables.Add($doc.Paragraphs.Add().Range, 4, 4)
$aptbl.Borders.Enable = 1
Create-TableRow $aptbl @("行动项", "具体措施", "完成时间", "状态") $true
Create-TableRow $aptbl @("1.", "", "", "☐")
Create-TableRow $aptbl @("2.", "", "", "☐")
Create-TableRow $aptbl @("3.", "", "", "☐")

$doc.Paragraphs.Add()
$doc.Paragraphs.Add()

# User info
$infoTable = $doc.Tables.Add($doc.Paragraphs.Add().Range, 1, 2)
$infoTable.Borders.Enable = 1
$infoCell = $infoTable.Rows[1].Cells[1]
$infoCell.Range.Text = "姓名：___________    日期：___________"

Add-Copyright $doc

$doc.SaveAs([ref]"$outputPath/05-个人品牌审计表.docx", [ref]16)
$doc.Close()
$doc = $null

Write-Host "Created 05-个人品牌审计表.docx"

# Document 6: 90天行动计划表
Write-Host "Creating 06-90天行动计划表..."
$doc = $word.Documents.Add()
$doc.PageSetup.PageSize = 1

$title = $doc.Paragraphs.Add()
$title.Range.Text = "90天行动计划表"
$title.Range.Font.Size = 22
$title.Range.Font.Bold = $true
$title.Range.Font.Name = "微软雅黑"
$title.Range.ParagraphFormat.Alignment = 1

$subtitle = $doc.Paragraphs.Add()
$subtitle.Range.Text = "破局・重启：用CEO思维重塑职业生涯 | 工具表单"
$subtitle.Range.Font.Size = 10
$subtitle.Range.Font.Name = "微软雅黑"
$subtitle.Range.ParagraphFormat.Alignment = 1

$doc.Paragraphs.Add()

# Objective
$objTitle = $doc.Paragraphs.Add()
$objTitle.Range.Text = "Objective（目标）：90天后，我希望达成的状态是"
$objTitle.Range.Font.Size = 12
$objTitle.Range.Font.Bold = $true

$objBox = $doc.Paragraphs.Add()
$objBox.Range.Text = ""
for ($i = 0; $i -lt 3; $i++) { $doc.Paragraphs.Add() }

$doc.Paragraphs.Add()

# Key Results
$krTitle = $doc.Paragraphs.Add()
$krTitle.Range.Text = "Key Results（关键结果）"
$krTitle.Range.Font.Size = 12
$krTitle.Range.Font.Bold = $true

$doc.Paragraphs.Add()

$krtbl = $doc.Tables.Add($doc.Paragraphs.Add().Range, 4, 4)
$krtbl.Borders.Enable = 1
Create-TableRow $krtbl @("KR", "关键结果", "目标值", "当前值") $true
Create-TableRow $krtbl @("KR1", "", "", "")
Create-TableRow $krtbl @("KR2", "", "", "")
Create-TableRow $krtbl @("KR3", "", "", "")

$doc.Paragraphs.Add()

# Milestones
$msTitle = $doc.Paragraphs.Add()
$msTitle.Range.Text = "里程碑表格（12周）"
$msTitle.Range.Font.Size = 12
$msTitle.Range.Font.Bold = $true

$doc.Paragraphs.Add()

$mstbl = $doc.Tables.Add($doc.Paragraphs.Add().Range, 13, 4)
$mstbl.Borders.Enable = 1
Create-TableRow $mstbl @("周次", "关键行动", "成果验收", "完成") $true
for ($i = 1; $i -le 12; $i++) {
    Create-TableRow $mstbl @("第$i`周", "", "", "☐")
}

$doc.Paragraphs.Add()

# Commitment
$cmTitle = $doc.Paragraphs.Add()
$cmTitle.Range.Text = "行动承诺"
$cmTitle.Range.Font.Size = 12
$cmTitle.Range.Font.Bold = $true

$cmBox = $doc.Paragraphs.Add()
$cmBox.Range.Text = "我承诺完成以上90天行动计划："
$cmBox.Range.Font.Size = 11

$doc.Paragraphs.Add()
$cmSign = $doc.Paragraphs.Add()
$cmSign.Range.Text = "签名：________________    日期：________________"
$cmSign.Range.Font.Size = 11

Add-Copyright $doc

$doc.SaveAs([ref]"$outputPath/06-90天行动计划表.docx", [ref]16)
$doc.Close()
$doc = $null

Write-Host "Created 06-90天行动计划表.docx"

# Cleanup
$word.Quit()
$word = $null

Write-Host "All 6 tool documents created successfully!"
