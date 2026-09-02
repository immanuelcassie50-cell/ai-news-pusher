#r "nuget: DocumentFormat.OpenXml, 3.2.0"

using DocumentFormat.OpenXml;
using DocumentFormat.OpenXml.Packaging;
using DocumentFormat.OpenXml.Wordprocessing;
using System.IO;

// Output path
string outputPath = @"D:\新课开发\职业生涯和画布\破局・重启：用 CEO 思维重塑职业生涯\08-工具集锦";
Directory.CreateDirectory(outputPath);

// Helper function to set cell content
void SetCellText(TableCell cell, string text, bool isHeader = false) {
    cell.GetFirstChild<Text>().Text = text;
    if (isHeader) {
        cell.GetFirstChild<Run>().FontWeight = FontWeights.Bold;
    }
}

// Helper to create a table row
TableRow CreateRow(Table table, string[] cells, bool isHeader = false) {
    var row = new TableRow();
    foreach (var cellText in cells) {
        var cell = new TableCell();
        var pp = new TableCellProperties();
        pp.Append(new TableCellWidth() { Type = TableWidthUnitValues.Pct, Width = "2500" });
        cell.Append(pp);
        var p = new Paragraph();
        var run = new Run();
        run.Text = cellText;
        if (isHeader) run.FontWeight = FontWeights.Bold;
        p.Append(run);
        cell.Append(p);
        row.Append(cell);
    }
    table.Append(row);
    return row;
}

// Document 1: 个人经营诊断表
Console.WriteLine("Creating 01-个人经营诊断表...");
using (var doc = WordprocessingDocument.Create(Path.Combine(outputPath, "01-个人经营诊断表.docx"), WordprocessingDocumentType.Document)) {
    var mainPart = doc.AddMainDocumentPart();
    mainPart.Document = new Document();
    var body = new Body();

    // Title
    var title = new Paragraph();
    title.Append(new Run(new Text("个人经营诊断表")) { FontSize = new Int32Value(44), Bold = true });
    title.Append(new ParagraphProperties(new Justification() { Val = JustificationValues.Center }));
    body.Append(title);

    // Subtitle
    var sub = new Paragraph();
    sub.Append(new Run(new Text("破局・重启：用CEO思维重塑职业生涯 | 工具表单")) { FontSize = new Int32Value(20) });
    sub.Append(new ParagraphProperties(new Justification() { Val = JustificationValues.Center }));
    body.Append(sub);

    body.Append(new Paragraph());

    // Table
    var table = new Table();
    var tblProp = new TableProperties();
    tblProp.Append(new TableBorders(new TopBorder(), new BottomBorder(), new LeftBorder(), new RightBorder(), new InsideHorizontalBorder(), new InsideVerticalBorder()));
    table.Append(tblProp);

    CreateRow(table, new[] { "诊断维度", "评估问题", "选项(A/B/C/D)", "得分" }, true);
    CreateRow(table, new[] { "等待被安排", "你主动申请过多少次新项目？", "A.0次 B.1-2次 C.3-5次 D.5次以上", "" });
    CreateRow(table, new[] { "第一反应", "遇到问题时你的第一反应是什么？", "A.等指示 B.问同事 C.先想方案 D.直接决定", "" });
    CreateRow(table, new[] { "工作变化", "你目前工作与入职时相比有多大变化？", "A.几乎没变化 B.有些变化 C.变化较大 D.变化很大", "" });
    CreateRow(table, new[] { "薪资提升", "你的薪资与3年前相比？", "A.几乎没提升 B.小幅提升 C.较大提升 D.显著提升", "" });
    CreateRow(table, new[] { "被裁概率", "如果公司突然裁员你觉得概率？", "A.很高 B.较高 C.较低 D.很低", "" });
    CreateRow(table, new[] { "行业发展", "你对所在行业发展趋势的了解程度？", "A.完全不知道 B.知道一些 C.比较清楚 D.非常清楚", "" });
    CreateRow(table, new[] { "自我投资", "你主动投资职业发展的程度？", "A.从来没有 B.偶尔有 C.经常有 D.持续不断", "" });
    CreateRow(table, new[] { "通用能力", "你有多少离开公司也能用的能力？", "A.几乎没有 B.有一些 C.不少 D.非常多", "" });
    CreateRow(table, new[] { "业内评价", "同行如何看待你？", "A.不知道 B.称职执行者 C.领域专家 D.有影响力领导", "" });
    CreateRow(table, new[] { "求职把握", "如果失业多久能找到同等工作？", "A.不确定 B.3-6月 C.1-3月 D.一个月内", "" });

    body.Append(table);
    body.Append(new Paragraph());

    // Scoring guide
    var scoringTitle = new Paragraph();
    scoringTitle.Append(new Run(new Text("评分标准")) { FontSize = new Int32Value(24), Bold = true });
    body.Append(scoringTitle);

    var st = new Table();
    var stp = new TableProperties();
    stp.Append(new TableBorders(new TopBorder(), new BottomBorder(), new LeftBorder(), new RightBorder(), new InsideHorizontalBorder(), new InsideVerticalBorder()));
    st.Append(stp);
    CreateRow(st, new[] { "得分范围", "心态类型", "说明" }, true);
    CreateRow(st, new[] { "25-40分", "强雇员心态", "高度依赖组织和岗位，需要立即开始经营自己的转变" });
    CreateRow(st, new[] { "15-24分", "中度雇员心态", "有一定的经营意识，但还不够系统" });
    CreateRow(st, new[] { "8-14分", "轻度雇员心态", "已经在向经营者心态转变" });
    CreateRow(st, new[] { "0-7分", "经营者心态", "已经建立了较强的自我经营意识" });
    body.Append(st);

    body.Append(new Paragraph());

    // User info
    var uiTitle = new Paragraph();
    uiTitle.Append(new Run(new Text("学员信息")) { FontSize = new Int32Value(24), Bold = true });
    body.Append(uiTitle);

    var uit = new Table();
    var uitp = new TableProperties();
    uitp.Append(new TableBorders(new TopBorder(), new BottomBorder(), new LeftBorder(), new RightBorder(), new InsideHorizontalBorder(), new InsideVerticalBorder()));
    uit.Append(uitp);
    CreateRow(uit, new[] { "姓名", "", "日期", "" }, true);
    CreateRow(uit, new[] { "得分", "", "心态类型", "" });
    body.Append(uit);

    body.Append(new Paragraph());

    // Copyright
    var copy = new Paragraph();
    copy.Append(new Run(new Text("© 罗宏伟 2026 | 仅供课程内部使用")) { FontSize = new Int32Value(16) });
    copy.Append(new ParagraphProperties(new Justification() { Val = JustificationValues.Right }));
    body.Append(copy);

    mainPart.Document.Append(body);
}

Console.WriteLine("Created 01-个人经营诊断表.docx");

// Document 2: 价值定位图
Console.WriteLine("Creating 02-价值定位图...");
using (var doc = WordprocessingDocument.Create(Path.Combine(outputPath, "02-价值定位图.docx"), WordprocessingDocumentType.Document)) {
    var mainPart = doc.AddMainDocumentPart();
    mainPart.Document = new Document();
    var body = new Body();

    var title = new Paragraph();
    title.Append(new Run(new Text("价值定位图")) { FontSize = new Int32Value(44), Bold = true });
    title.Append(new ParagraphProperties(new Justification() { Val = JustificationValues.Center }));
    body.Append(title);

    var sub = new Paragraph();
    sub.Append(new Run(new Text("破局・重启：用CEO思维重塑职业生涯 | 工具表单")) { FontSize = new Int32Value(20) });
    sub.Append(new ParagraphProperties(new Justification() { Val = JustificationValues.Center }));
    body.Append(sub);

    body.Append(new Paragraph());

    var table = new Table();
    var tblProp = new TableProperties();
    tblProp.Append(new TableBorders(new TopBorder(), new BottomBorder(), new LeftBorder(), new RightBorder(), new InsideHorizontalBorder(), new InsideVerticalBorder()));
    table.Append(tblProp);
    CreateRow(table, new[] { "要素", "内容" }, true);
    CreateRow(table, new[] { "我是谁（身份定位）", "" });
    CreateRow(table, new[] { "我服务谁（目标客户）", "" });
    CreateRow(table, new[] { "我解决什么问题（价值主张）", "" });
    CreateRow(table, new[] { "我与竞争对手有何不同（差异化）", "" });
    CreateRow(table, new[] { "我凭什么让人相信（可信证明）", "" });
    body.Append(table);

    body.Append(new Paragraph());

    var psTitle = new Paragraph();
    psTitle.Append(new Run(new Text("个人定位声明")) { FontSize = new Int32Value(28), Bold = true });
    body.Append(psTitle);

    var psBox = new Paragraph();
    psBox.Append(new Run(new Text("请用以下句式，写出你的个人定位声明：")) { FontSize = new Int32Value(22) });
    body.Append(psBox);

    var psQuote = new Paragraph();
    psQuote.Append(new Run(new Text("\"我帮助___________（目标客户）___________（解决什么问题），通过___________（独特方法），实现___________（可衡量成果）。\"")) { FontSize = new Int32Value(22), Italic = true });
    body.Append(psQuote);

    body.Append(new Paragraph());
    body.Append(new Paragraph());

    var fillArea = new Paragraph();
    fillArea.Append(new Run(new Text("我的定位声明：")) { FontSize = new Int32Value(22), Bold = true });
    body.Append(fillArea);

    for (int i = 0; i < 5; i++) body.Append(new Paragraph());

    var copy = new Paragraph();
    copy.Append(new Run(new Text("© 罗宏伟 2026 | 仅供课程内部使用")) { FontSize = new Int32Value(16) });
    copy.Append(new ParagraphProperties(new Justification() { Val = JustificationValues.Right }));
    body.Append(copy);

    mainPart.Document.Append(body);
}

Console.WriteLine("Created 02-价值定位图.docx");

// Document 3: 个人资产负债表
Console.WriteLine("Creating 03-个人资产负债表...");
using (var doc = WordprocessingDocument.Create(Path.Combine(outputPath, "03-个人资产负债表.docx"), WordprocessingDocumentType.Document)) {
    var mainPart = doc.AddMainDocumentPart();
    mainPart.Document = new Document();
    var body = new Body();

    var title = new Paragraph();
    title.Append(new Run(new Text("个人资产负债表")) { FontSize = new Int32Value(44), Bold = true });
    title.Append(new ParagraphProperties(new Justification() { Val = JustificationValues.Center }));
    body.Append(title);

    var sub = new Paragraph();
    sub.Append(new Run(new Text("破局・重启：用CEO思维重塑职业生涯 | 工具表单")) { FontSize = new Int32Value(20) });
    sub.Append(new ParagraphProperties(new Justification() { Val = JustificationValues.Center }));
    body.Append(sub);
    body.Append(new Paragraph());

    // Time Assets
    var t1 = new Paragraph();
    t1.Append(new Run(new Text("一、时间资产")) { FontSize = new Int32Value(28), Bold = true });
    body.Append(t1);

    var tbl1 = new Table();
    var tblProp1 = new TableProperties();
    tblProp1.Append(new TableBorders(new TopBorder(), new BottomBorder(), new LeftBorder(), new RightBorder(), new InsideHorizontalBorder(), new InsideVerticalBorder()));
    tbl1.Append(tblProp1);
    CreateRow(tbl1, new[] { "项目", "具体描述", "评分(1-10)" }, true);
    CreateRow(tbl1, new[] { "每天有效工作时间", "", "" });
    CreateRow(tbl1, new[] { "每周学习成长时间", "", "" });
    CreateRow(tbl1, new[] { "时间利用效率", "", "" });
    body.Append(tbl1);
    body.Append(new Paragraph());

    // Human Assets
    var t2 = new Paragraph();
    t2.Append(new Run(new Text("二、人脉资产")) { FontSize = new Int32Value(28), Bold = true });
    body.Append(t2);

    var tbl2 = new Table();
    var tblProp2 = new TableProperties();
    tblProp2.Append(new TableBorders(new TopBorder(), new BottomBorder(), new LeftBorder(), new RightBorder(), new InsideHorizontalBorder(), new InsideVerticalBorder()));
    tbl2.Append(tblProp2);
    CreateRow(tbl2, new[] { "项目", "具体描述", "评分(1-10)" }, true);
    CreateRow(tbl2, new[] { "行业人脉数量", "", "" });
    CreateRow(tbl2, new[] { "核心人脉质量", "", "" });
    CreateRow(tbl2, new[] { "人脉带来的机会", "", "" });
    body.Append(tbl2);
    body.Append(new Paragraph());

    // Capability Assets
    var t3 = new Paragraph();
    t3.Append(new Run(new Text("三、能力资产")) { FontSize = new Int32Value(28), Bold = true });
    body.Append(t3);

    var tbl3 = new Table();
    var tblProp3 = new TableProperties();
    tblProp3.Append(new TableBorders(new TopBorder(), new BottomBorder(), new LeftBorder(), new RightBorder(), new InsideHorizontalBorder(), new InsideVerticalBorder()));
    tbl3.Append(tblProp3);
    CreateRow(tbl3, new[] { "项目", "具体描述", "评分(1-10)" }, true);
    CreateRow(tbl3, new[] { "专业技能深度", "", "" });
    CreateRow(tbl3, new[] { "可迁移技能广度", "", "" });
    CreateRow(tbl3, new[] { "独特能力组合", "", "" });
    body.Append(tbl3);
    body.Append(new Paragraph());

    // Trust Assets
    var t4 = new Paragraph();
    t4.Append(new Run(new Text("四、信任资产")) { FontSize = new Int32Value(28), Bold = true });
    body.Append(t4);

    var tbl4 = new Table();
    var tblProp4 = new TableProperties();
    tblProp4.Append(new TableBorders(new TopBorder(), new BottomBorder(), new LeftBorder(), new RightBorder(), new InsideHorizontalBorder(), new InsideVerticalBorder()));
    tbl4.Append(tblProp4);
    CreateRow(tbl4, new[] { "项目", "具体描述", "评分(1-10)" }, true);
    CreateRow(tbl4, new[] { "内部口碑", "", "" });
    CreateRow(tbl4, new[] { "外部声誉", "", "" });
    CreateRow(tbl4, new[] { "个人品牌影响力", "", "" });
    body.Append(tbl4);
    body.Append(new Paragraph());

    // Liabilities
    var t5 = new Paragraph();
    t5.Append(new Run(new Text("五、负债")) { FontSize = new Int32Value(28), Bold = true });
    body.Append(t5);

    var tbl5 = new Table();
    var tblProp5 = new TableProperties();
    tblProp5.Append(new TableBorders(new TopBorder(), new BottomBorder(), new LeftBorder(), new RightBorder(), new InsideHorizontalBorder(), new InsideVerticalBorder()));
    tbl5.Append(tblProp5);
    CreateRow(tbl5, new[] { "负债类型", "具体表现", "严重程度(1-10)" }, true);
    CreateRow(tbl5, new[] { "时间负债", "", "" });
    CreateRow(tbl5, new[] { "人脉负债", "", "" });
    CreateRow(tbl5, new[] { "能力负债", "", "" });
    CreateRow(tbl5, new[] { "信任负债", "", "" });
    body.Append(tbl5);
    body.Append(new Paragraph());

    // Net Assets Calc
    var na = new Paragraph();
    na.Append(new Run(new Text("净资产计算")) { FontSize = new Int32Value(24), Bold = true });
    body.Append(na);

    var calcTable = new Table();
    var calcProp = new TableProperties();
    calcProp.Append(new TableBorders(new TopBorder(), new BottomBorder(), new LeftBorder(), new RightBorder(), new InsideHorizontalBorder(), new InsideVerticalBorder()));
    calcTable.Append(calcProp);
    CreateRow(calcTable, new[] { "资产总分", "负债总分", "净资产" }, true);
    CreateRow(calcTable, new[] { "", "", "=资产总分-负债总分" });
    body.Append(calcTable);

    body.Append(new Paragraph());

    var copy = new Paragraph();
    copy.Append(new Run(new Text("© 罗宏伟 2026 | 仅供课程内部使用")) { FontSize = new Int32Value(16) });
    copy.Append(new ParagraphProperties(new Justification() { Val = JustificationValues.Right }));
    body.Append(copy);

    mainPart.Document.Append(body);
}

Console.WriteLine("Created 03-个人资产负债表.docx");

// Document 4: 风险评估决策表
Console.WriteLine("Creating 04-风险评估决策表...");
using (var doc = WordprocessingDocument.Create(Path.Combine(outputPath, "04-风险评估决策表.docx"), WordprocessingDocumentType.Document)) {
    var mainPart = doc.AddMainDocumentPart();
    mainPart.Document = new Document();
    var body = new Body();

    var title = new Paragraph();
    title.Append(new Run(new Text("风险评估决策表")) { FontSize = new Int32Value(44), Bold = true });
    title.Append(new ParagraphProperties(new Justification() { Val = JustificationValues.Center }));
    body.Append(title);

    var sub = new Paragraph();
    sub.Append(new Run(new Text("破局・重启：用CEO思维重塑职业生涯 | 工具表单")) { FontSize = new Int32Value(20) });
    sub.Append(new ParagraphProperties(new Justification() { Val = JustificationValues.Center }));
    body.Append(sub);
    body.Append(new Paragraph());

    var table = new Table();
    var tblProp = new TableProperties();
    tblProp.Append(new TableBorders(new TopBorder(), new BottomBorder(), new LeftBorder(), new RightBorder(), new InsideHorizontalBorder(), new InsideVerticalBorder()));
    table.Append(tblProp);
    CreateRow(table, new[] { "评估维度", "问题", "你的回答" }, true);
    CreateRow(table, new[] { "沉没成本识别", "你在这个方向的已有投入是什么？", "" });
    CreateRow(table, new[] { "沉没成本评估", "这些投入如果放弃，损失有多大？", "" });
    CreateRow(table, new[] { "继续预期", "如果继续，预期收益是什么？", "" });
    CreateRow(table, new[] { "重新开始评估", "如果现在重新开始，起点是什么？", "" });
    CreateRow(table, new[] { "止损点设定", "你的止损点是什么？", "" });
    body.Append(table);
    body.Append(new Paragraph());

    var dtTitle = new Paragraph();
    dtTitle.Append(new Run(new Text("决策类型")) { FontSize = new Int32Value(28), Bold = true });
    body.Append(dtTitle);
    body.Append(new Paragraph());

    body.Append(new Paragraph().Append(new Run(new Text("☐ 止损决策：停止消耗资源的行动")) { FontSize = new Int32Value(22) }));
    body.Append(new Paragraph().Append(new Run(new Text("☐ 投资决策：投入资源获取长期回报")) { FontSize = new Int32Value(22) }));
    body.Append(new Paragraph().Append(new Run(new Text("☐ 重新配置决策：调整资源分配比例")) { FontSize = new Int32Value(22) }));
    body.Append(new Paragraph().Append(new Run(new Text("☐ 扩张决策：在成功基础上加大投入")) { FontSize = new Int32Value(22) }));
    body.Append(new Paragraph());

    var dcTitle = new Paragraph();
    dcTitle.Append(new Run(new Text("决策内容")) { FontSize = new Int32Value(28), Bold = true });
    body.Append(dcTitle);
    body.Append(new Paragraph());

    var dcBox = new Paragraph();
    dcBox.Append(new Run(new Text("我决定_____________（具体行动），原因是_____________，时间节点是_____________。")) { FontSize = new Int32Value(22), Italic = true });
    body.Append(dcBox);
    body.Append(new Paragraph());

    for (int i = 0; i < 4; i++) body.Append(new Paragraph());

    var copy = new Paragraph();
    copy.Append(new Run(new Text("© 罗宏伟 2026 | 仅供课程内部使用")) { FontSize = new Int32Value(16) });
    copy.Append(new ParagraphProperties(new Justification() { Val = JustificationValues.Right }));
    body.Append(copy);

    mainPart.Document.Append(body);
}

Console.WriteLine("Created 04-风险评估决策表.docx");

// Document 5: 个人品牌审计表
Console.WriteLine("Creating 05-个人品牌审计表...");
using (var doc = WordprocessingDocument.Create(Path.Combine(outputPath, "05-个人品牌审计表.docx"), WordprocessingDocumentType.Document)) {
    var mainPart = doc.AddMainDocumentPart();
    mainPart.Document = new Document();
    var body = new Body();

    var title = new Paragraph();
    title.Append(new Run(new Text("个人品牌审计表")) { FontSize = new Int32Value(44), Bold = true });
    title.Append(new ParagraphProperties(new Justification() { Val = JustificationValues.Center }));
    body.Append(title);

    var sub = new Paragraph();
    sub.Append(new Run(new Text("破局・重启：用CEO思维重塑职业生涯 | 工具表单")) { FontSize = new Int32Value(20) });
    sub.Append(new ParagraphProperties(new Justification() { Val = JustificationValues.Center }));
    body.Append(sub);
    body.Append(new Paragraph());

    var table = new Table();
    var tblProp = new TableProperties();
    tblProp.Append(new TableBorders(new TopBorder(), new BottomBorder(), new LeftBorder(), new RightBorder(), new InsideHorizontalBorder(), new InsideVerticalBorder()));
    table.Append(tblProp);
    CreateRow(table, new[] { "审计维度", "评估问题", "评估结果" }, true);
    CreateRow(table, new[] { "品牌认知", "别人提到你的名字时会想到什么？", "" });
    CreateRow(table, new[] { "品牌差异化", "你的独特标签是什么？", "" });
    CreateRow(table, new[] { "品牌一致性", "你的言行是否一致？", "" });
    CreateRow(table, new[] { "品牌传播", "你主动传播自己品牌的方式？", "" });
    CreateRow(table, new[] { "品牌资产", "你积累的品牌权益有多少？", "" });
    body.Append(table);
    body.Append(new Paragraph());

    var apTitle = new Paragraph();
    apTitle.Append(new Run(new Text("品牌建设行动计划")) { FontSize = new Int32Value(28), Bold = true });
    body.Append(apTitle);
    body.Append(new Paragraph());

    var aptable = new Table();
    var aptblProp = new TableProperties();
    aptblProp.Append(new TableBorders(new TopBorder(), new BottomBorder(), new LeftBorder(), new RightBorder(), new InsideHorizontalBorder(), new InsideVerticalBorder()));
    aptable.Append(aptblProp);
    CreateRow(aptable, new[] { "行动项", "具体措施", "完成时间", "状态" }, true);
    CreateRow(aptable, new[] { "1.", "", "", "☐" });
    CreateRow(aptable, new[] { "2.", "", "", "☐" });
    CreateRow(aptable, new[] { "3.", "", "", "☐" });
    body.Append(aptable);
    body.Append(new Paragraph());

    var copy = new Paragraph();
    copy.Append(new Run(new Text("© 罗宏伟 2026 | 仅供课程内部使用")) { FontSize = new Int32Value(16) });
    copy.Append(new ParagraphProperties(new Justification() { Val = JustificationValues.Right }));
    body.Append(copy);

    mainPart.Document.Append(body);
}

Console.WriteLine("Created 05-个人品牌审计表.docx");

// Document 6: 90天行动计划表
Console.WriteLine("Creating 06-90天行动计划表...");
using (var doc = WordprocessingDocument.Create(Path.Combine(outputPath, "06-90天行动计划表.docx"), WordprocessingDocumentType.Document)) {
    var mainPart = doc.AddMainDocumentPart();
    mainPart.Document = new Document();
    var body = new Body();

    var title = new Paragraph();
    title.Append(new Run(new Text("90天行动计划表")) { FontSize = new Int32Value(44), Bold = true });
    title.Append(new ParagraphProperties(new Justification() { Val = JustificationValues.Center }));
    body.Append(title);

    var sub = new Paragraph();
    sub.Append(new Run(new Text("破局・重启：用CEO思维重塑职业生涯 | 工具表单")) { FontSize = new Int32Value(20) });
    sub.Append(new ParagraphProperties(new Justification() { Val = JustificationValues.Center }));
    body.Append(sub);
    body.Append(new Paragraph());

    // Objective
    var objTitle = new Paragraph();
    objTitle.Append(new Run(new Text("Objective（目标）：90天后，我希望达成的状态是")) { FontSize = new Int32Value(24), Bold = true });
    body.Append(objTitle);
    for (int i = 0; i < 3; i++) body.Append(new Paragraph());
    body.Append(new Paragraph());

    // Key Results
    var krTitle = new Paragraph();
    krTitle.Append(new Run(new Text("Key Results（关键结果）")) { FontSize = new Int32Value(24), Bold = true });
    body.Append(krTitle);
    body.Append(new Paragraph());

    var krtable = new Table();
    var krtblProp = new TableProperties();
    krtblProp.Append(new TableBorders(new TopBorder(), new BottomBorder(), new LeftBorder(), new RightBorder(), new InsideHorizontalBorder(), new InsideVerticalBorder()));
    krtable.Append(krtblProp);
    CreateRow(krtable, new[] { "KR", "关键结果", "目标值", "当前值" }, true);
    CreateRow(krtable, new[] { "KR1", "", "", "" });
    CreateRow(krtable, new[] { "KR2", "", "", "" });
    CreateRow(krtable, new[] { "KR3", "", "", "" });
    body.Append(krtable);
    body.Append(new Paragraph());

    // Milestones
    var msTitle = new Paragraph();
    msTitle.Append(new Run(new Text("里程碑表格（12周）")) { FontSize = new Int32Value(24), Bold = true });
    body.Append(msTitle);
    body.Append(new Paragraph());

    var mstable = new Table();
    var mstblProp = new TableProperties();
    mstblProp.Append(new TableBorders(new TopBorder(), new BottomBorder(), new LeftBorder(), new RightBorder(), new InsideHorizontalBorder(), new InsideVerticalBorder()));
    mstable.Append(mstblProp);
    CreateRow(mstable, new[] { "周次", "关键行动", "成果验收", "完成" }, true);
    for (int i = 1; i <= 12; i++) {
        CreateRow(mstable, new[] { "第" + i + "周", "", "", "☐" });
    }
    body.Append(mstable);
    body.Append(new Paragraph());

    // Commitment
    var cmTitle = new Paragraph();
    cmTitle.Append(new Run(new Text("行动承诺")) { FontSize = new Int32Value(24), Bold = true });
    body.Append(cmTitle);

    var cmBox = new Paragraph();
    cmBox.Append(new Run(new Text("我承诺完成以上90天行动计划：")) { FontSize = new Int32Value(22) });
    body.Append(cmBox);
    body.Append(new Paragraph());

    var cmSign = new Paragraph();
    cmSign.Append(new Run(new Text("签名：________________    日期：________________")) { FontSize = new Int32Value(22) });
    body.Append(cmSign);
    body.Append(new Paragraph());

    var copy = new Paragraph();
    copy.Append(new Run(new Text("© 罗宏伟 2026 | 仅供课程内部使用")) { FontSize = new Int32Value(16) });
    copy.Append(new ParagraphProperties(new Justification() { Val = JustificationValues.Right }));
    body.Append(copy);

    mainPart.Document.Append(body);
}

Console.WriteLine("Created 06-90天行动计划表.docx");

Console.WriteLine("\nAll 6 tool documents created successfully!");
