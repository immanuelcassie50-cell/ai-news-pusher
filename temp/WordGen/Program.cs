using DocumentFormat.OpenXml;
using DocumentFormat.OpenXml.Packaging;
using DocumentFormat.OpenXml.Wordprocessing;

string outputPath = @"D:\新课开发\职业生涯和画布\破局・重启：用 CEO 思维重塑职业生涯";
string toolsPath = Path.Combine(outputPath, "08-工具集锦");
string casePath = Path.Combine(outputPath, "07-案例集");
Directory.CreateDirectory(toolsPath);
Directory.CreateDirectory(casePath);

// Helper functions
TableRow CreateRow(Table table, string[] cells, bool isHeader = false) {
    var row = new TableRow();
    foreach (var cellText in cells) {
        var cell = new TableCell();
        var p = new Paragraph();
        var run = new Run();
        var rpr = new RunProperties();
        if (isHeader) rpr.Append(new Bold());
        rpr.Append(new FontSize() { Val = "22" });
        run.Append(rpr);
        run.Append(new Text(cellText));
        p.Append(run);
        cell.Append(p);
        row.Append(cell);
    }
    table.Append(row);
    return row;
}

Paragraph CreatePara(string text, int fontSizePt = 11, bool bold = false) {
    var p = new Paragraph();
    var run = new Run();
    var rpr = new RunProperties();
    if (bold) rpr.Append(new Bold());
    rpr.Append(new FontSize() { Val = (fontSizePt * 2).ToString() });
    run.Append(rpr);
    run.Append(new Text(text));
    p.Append(run);
    return p;
}

Paragraph CreateRightPara(string text, int fontSizePt = 8) {
    var p = new Paragraph();
    var run = new Run();
    var rpr = new RunProperties();
    rpr.Append(new FontSize() { Val = (fontSizePt * 2).ToString() });
    run.Append(rpr);
    run.Append(new Text(text));
    p.Append(run);
    var pp = new ParagraphProperties();
    pp.Append(new Justification() { Val = JustificationValues.Right });
    p.Append(pp);
    return p;
}

// ============== TOOL 1: 个人经营诊断表 ==============
Console.WriteLine("Creating 01-个人经营诊断表...");
using (var doc = WordprocessingDocument.Create(Path.Combine(toolsPath, "01-个人经营诊断表.docx"), WordprocessingDocumentType.Document)) {
    var body = doc.AddMainDocumentPart().Document.Body;
    body.Append(new Paragraph());
    body.Append(CreatePara("个人经营诊断表", 22, true));
    body.Append(CreatePara("破局・重启：用CEO思维重塑职业生涯 | 工具表单", 10));
    body.Append(new Paragraph());
    body.Append(CreatePara("请认真回答以下问题，每题选择一个最符合你现状的选项。每题1-4分，总分40分。", 10));
    body.Append(new Paragraph());

    var table = new Table();
    table.Append(new TableProperties(new TableBorders(new TopBorder(), new BottomBorder(), new LeftBorder(), new RightBorder(), new InsideHorizontalBorder(), new InsideVerticalBorder())));
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
    body.Append(CreatePara("评分标准", 12, true));

    var st = new Table();
    st.Append(new TableProperties(new TableBorders(new TopBorder(), new BottomBorder(), new LeftBorder(), new RightBorder(), new InsideHorizontalBorder(), new InsideVerticalBorder())));
    CreateRow(st, new[] { "得分范围", "心态类型", "说明" }, true);
    CreateRow(st, new[] { "25-40分", "强雇员心态", "高度依赖组织和岗位，需要立即开始经营自己的转变" });
    CreateRow(st, new[] { "15-24分", "中度雇员心态", "有一定的经营意识，但还不够系统" });
    CreateRow(st, new[] { "8-14分", "轻度雇员心态", "已经在向经营者心态转变" });
    CreateRow(st, new[] { "0-7分", "经营者心态", "已经建立了较强的自我经营意识" });
    body.Append(st);

    body.Append(new Paragraph());
    body.Append(CreatePara("学员信息", 12, true));

    var uit = new Table();
    uit.Append(new TableProperties(new TableBorders(new TopBorder(), new BottomBorder(), new LeftBorder(), new RightBorder(), new InsideHorizontalBorder(), new InsideVerticalBorder())));
    CreateRow(uit, new[] { "姓名", "", "日期", "" }, true);
    CreateRow(uit, new[] { "得分", "", "心态类型", "" });
    body.Append(uit);

    body.Append(new Paragraph());
    body.Append(CreateRightPara("© 罗宏伟 2026 | 仅供课程内部使用", 8));
}
Console.WriteLine("Done: 01-个人经营诊断表.docx");

// ============== TOOL 2: 价值定位图 ==============
Console.WriteLine("Creating 02-价值定位图...");
using (var doc = WordprocessingDocument.Create(Path.Combine(toolsPath, "02-价值定位图.docx"), WordprocessingDocumentType.Document)) {
    var body = doc.AddMainDocumentPart().Document.Body;
    body.Append(new Paragraph());
    body.Append(CreatePara("价值定位图", 22, true));
    body.Append(CreatePara("破局・重启：用CEO思维重塑职业生涯 | 工具表单", 10));
    body.Append(new Paragraph());

    var table = new Table();
    table.Append(new TableProperties(new TableBorders(new TopBorder(), new BottomBorder(), new LeftBorder(), new RightBorder(), new InsideHorizontalBorder(), new InsideVerticalBorder())));
    CreateRow(table, new[] { "要素", "内容" }, true);
    CreateRow(table, new[] { "我是谁（身份定位）", "" });
    CreateRow(table, new[] { "我服务谁（目标客户）", "" });
    CreateRow(table, new[] { "我解决什么问题（价值主张）", "" });
    CreateRow(table, new[] { "我与竞争对手有何不同（差异化）", "" });
    CreateRow(table, new[] { "我凭什么让人相信（可信证明）", "" });
    body.Append(table);

    body.Append(new Paragraph());
    body.Append(CreatePara("个人定位声明", 14, true));
    body.Append(CreatePara("请用以下句式，写出你的个人定位声明：", 11));
    body.Append(CreatePara("\"我帮助___________（目标客户）___________（解决什么问题），通过___________（独特方法），实现___________（可衡量成果）。\"", 11));
    body.Append(new Paragraph());
    body.Append(CreatePara("我的定位声明：", 11, true));
    for (int i = 0; i < 6; i++) body.Append(new Paragraph());
    body.Append(CreateRightPara("© 罗宏伟 2026 | 仅供课程内部使用", 8));
}
Console.WriteLine("Done: 02-价值定位图.docx");

// ============== TOOL 3: 个人资产负债表 ==============
Console.WriteLine("Creating 03-个人资产负债表...");
using (var doc = WordprocessingDocument.Create(Path.Combine(toolsPath, "03-个人资产负债表.docx"), WordprocessingDocumentType.Document)) {
    var body = doc.AddMainDocumentPart().Document.Body;
    body.Append(new Paragraph());
    body.Append(CreatePara("个人资产负债表", 22, true));
    body.Append(CreatePara("破局・重启：用CEO思维重塑职业生涯 | 工具表单", 10));
    body.Append(new Paragraph());

    body.Append(CreatePara("一、时间资产", 14, true));
    var t1 = new Table(); t1.Append(new TableProperties(new TableBorders(new TopBorder(), new BottomBorder(), new LeftBorder(), new RightBorder(), new InsideHorizontalBorder(), new InsideVerticalBorder())));
    CreateRow(t1, new[] { "项目", "具体描述", "评分(1-10)" }, true);
    CreateRow(t1, new[] { "每天有效工作时间", "", "" });
    CreateRow(t1, new[] { "每周学习成长时间", "", "" });
    CreateRow(t1, new[] { "时间利用效率", "", "" });
    body.Append(t1); body.Append(new Paragraph());

    body.Append(CreatePara("二、人脉资产", 14, true));
    var t2 = new Table(); t2.Append(new TableProperties(new TableBorders(new TopBorder(), new BottomBorder(), new LeftBorder(), new RightBorder(), new InsideHorizontalBorder(), new InsideVerticalBorder())));
    CreateRow(t2, new[] { "项目", "具体描述", "评分(1-10)" }, true);
    CreateRow(t2, new[] { "行业人脉数量", "", "" });
    CreateRow(t2, new[] { "核心人脉质量", "", "" });
    CreateRow(t2, new[] { "人脉带来的机会", "", "" });
    body.Append(t2); body.Append(new Paragraph());

    body.Append(CreatePara("三、能力资产", 14, true));
    var t3 = new Table(); t3.Append(new TableProperties(new TableBorders(new TopBorder(), new BottomBorder(), new LeftBorder(), new RightBorder(), new InsideHorizontalBorder(), new InsideVerticalBorder())));
    CreateRow(t3, new[] { "项目", "具体描述", "评分(1-10)" }, true);
    CreateRow(t3, new[] { "专业技能深度", "", "" });
    CreateRow(t3, new[] { "可迁移技能广度", "", "" });
    CreateRow(t3, new[] { "独特能力组合", "", "" });
    body.Append(t3); body.Append(new Paragraph());

    body.Append(CreatePara("四、信任资产", 14, true));
    var t4 = new Table(); t4.Append(new TableProperties(new TableBorders(new TopBorder(), new BottomBorder(), new LeftBorder(), new RightBorder(), new InsideHorizontalBorder(), new InsideVerticalBorder())));
    CreateRow(t4, new[] { "项目", "具体描述", "评分(1-10)" }, true);
    CreateRow(t4, new[] { "内部口碑", "", "" });
    CreateRow(t4, new[] { "外部声誉", "", "" });
    CreateRow(t4, new[] { "个人品牌影响力", "", "" });
    body.Append(t4); body.Append(new Paragraph());

    body.Append(CreatePara("五、负债", 14, true));
    var t5 = new Table(); t5.Append(new TableProperties(new TableBorders(new TopBorder(), new BottomBorder(), new LeftBorder(), new RightBorder(), new InsideHorizontalBorder(), new InsideVerticalBorder())));
    CreateRow(t5, new[] { "负债类型", "具体表现", "严重程度(1-10)" }, true);
    CreateRow(t5, new[] { "时间负债", "", "" });
    CreateRow(t5, new[] { "人脉负债", "", "" });
    CreateRow(t5, new[] { "能力负债", "", "" });
    CreateRow(t5, new[] { "信任负债", "", "" });
    body.Append(t5); body.Append(new Paragraph());

    body.Append(CreatePara("净资产计算", 12, true));
    var calc = new Table(); calc.Append(new TableProperties(new TableBorders(new TopBorder(), new BottomBorder(), new LeftBorder(), new RightBorder(), new InsideHorizontalBorder(), new InsideVerticalBorder())));
    CreateRow(calc, new[] { "资产总分", "负债总分", "净资产" }, true);
    CreateRow(calc, new[] { "", "", "=资产总分-负债总分" });
    body.Append(calc);

    body.Append(new Paragraph());
    body.Append(CreateRightPara("© 罗宏伟 2026 | 仅供课程内部使用", 8));
}
Console.WriteLine("Done: 03-个人资产负债表.docx");

// ============== TOOL 4: 风险评估决策表 ==============
Console.WriteLine("Creating 04-风险评估决策表...");
using (var doc = WordprocessingDocument.Create(Path.Combine(toolsPath, "04-风险评估决策表.docx"), WordprocessingDocumentType.Document)) {
    var body = doc.AddMainDocumentPart().Document.Body;
    body.Append(new Paragraph());
    body.Append(CreatePara("风险评估决策表", 22, true));
    body.Append(CreatePara("破局・重启：用CEO思维重塑职业生涯 | 工具表单", 10));
    body.Append(new Paragraph());

    var table = new Table();
    table.Append(new TableProperties(new TableBorders(new TopBorder(), new BottomBorder(), new LeftBorder(), new RightBorder(), new InsideHorizontalBorder(), new InsideVerticalBorder())));
    CreateRow(table, new[] { "评估维度", "问题", "你的回答" }, true);
    CreateRow(table, new[] { "沉没成本识别", "你在这个方向的已有投入是什么？", "" });
    CreateRow(table, new[] { "沉没成本评估", "这些投入如果放弃，损失有多大？", "" });
    CreateRow(table, new[] { "继续预期", "如果继续，预期收益是什么？", "" });
    CreateRow(table, new[] { "重新开始评估", "如果现在重新开始，起点是什么？", "" });
    CreateRow(table, new[] { "止损点设定", "你的止损点是什么？", "" });
    body.Append(table);

    body.Append(new Paragraph());
    body.Append(CreatePara("决策类型", 14, true));
    body.Append(new Paragraph());
    body.Append(CreatePara("□ 止损决策：停止消耗资源的行动", 11));
    body.Append(CreatePara("□ 投资决策：投入资源获取长期回报", 11));
    body.Append(CreatePara("□ 重新配置决策：调整资源分配比例", 11));
    body.Append(CreatePara("□ 扩张决策：在成功基础上加大投入", 11));
    body.Append(new Paragraph());

    body.Append(CreatePara("决策内容", 14, true));
    body.Append(new Paragraph());
    body.Append(CreatePara("我决定_____________（具体行动），原因是_____________，时间节点是_____________。", 11));
    for (int i = 0; i < 4; i++) body.Append(new Paragraph());
    body.Append(CreateRightPara("© 罗宏伟 2026 | 仅供课程内部使用", 8));
}
Console.WriteLine("Done: 04-风险评估决策表.docx");

// ============== TOOL 5: 个人品牌审计表 ==============
Console.WriteLine("Creating 05-个人品牌审计表...");
using (var doc = WordprocessingDocument.Create(Path.Combine(toolsPath, "05-个人品牌审计表.docx"), WordprocessingDocumentType.Document)) {
    var body = doc.AddMainDocumentPart().Document.Body;
    body.Append(new Paragraph());
    body.Append(CreatePara("个人品牌审计表", 22, true));
    body.Append(CreatePara("破局・重启：用CEO思维重塑职业生涯 | 工具表单", 10));
    body.Append(new Paragraph());

    var table = new Table();
    table.Append(new TableProperties(new TableBorders(new TopBorder(), new BottomBorder(), new LeftBorder(), new RightBorder(), new InsideHorizontalBorder(), new InsideVerticalBorder())));
    CreateRow(table, new[] { "审计维度", "评估问题", "评估结果" }, true);
    CreateRow(table, new[] { "品牌认知", "别人提到你的名字时会想到什么？", "" });
    CreateRow(table, new[] { "品牌差异化", "你的独特标签是什么？", "" });
    CreateRow(table, new[] { "品牌一致性", "你的言行是否一致？", "" });
    CreateRow(table, new[] { "品牌传播", "你主动传播自己品牌的方式？", "" });
    CreateRow(table, new[] { "品牌资产", "你积累的品牌权益有多少？", "" });
    body.Append(table);

    body.Append(new Paragraph());
    body.Append(CreatePara("品牌建设行动计划", 14, true));
    body.Append(new Paragraph());

    var aptable = new Table();
    aptable.Append(new TableProperties(new TableBorders(new TopBorder(), new BottomBorder(), new LeftBorder(), new RightBorder(), new InsideHorizontalBorder(), new InsideVerticalBorder())));
    CreateRow(aptable, new[] { "行动项", "具体措施", "完成时间", "状态" }, true);
    CreateRow(aptable, new[] { "1.", "", "", "□" });
    CreateRow(aptable, new[] { "2.", "", "", "□" });
    CreateRow(aptable, new[] { "3.", "", "", "□" });
    body.Append(aptable);

    body.Append(new Paragraph());
    body.Append(CreatePara("姓名：___________    日期：___________", 11));
    body.Append(new Paragraph());
    body.Append(CreateRightPara("© 罗宏伟 2026 | 仅供课程内部使用", 8));
}
Console.WriteLine("Done: 05-个人品牌审计表.docx");

// ============== TOOL 6: 90天行动计划表 ==============
Console.WriteLine("Creating 06-90天行动计划表...");
using (var doc = WordprocessingDocument.Create(Path.Combine(toolsPath, "06-90天行动计划表.docx"), WordprocessingDocumentType.Document)) {
    var body = doc.AddMainDocumentPart().Document.Body;
    body.Append(new Paragraph());
    body.Append(CreatePara("90天行动计划表", 22, true));
    body.Append(CreatePara("破局・重启：用CEO思维重塑职业生涯 | 工具表单", 10));
    body.Append(new Paragraph());

    body.Append(CreatePara("Objective（目标）：90天后，我希望达成的状态是", 12, true));
    for (int i = 0; i < 3; i++) body.Append(new Paragraph());
    body.Append(new Paragraph());

    body.Append(CreatePara("Key Results（关键结果）", 12, true));
    body.Append(new Paragraph());

    var krtable = new Table();
    krtable.Append(new TableProperties(new TableBorders(new TopBorder(), new BottomBorder(), new LeftBorder(), new RightBorder(), new InsideHorizontalBorder(), new InsideVerticalBorder())));
    CreateRow(krtable, new[] { "KR", "关键结果", "目标值", "当前值" }, true);
    CreateRow(krtable, new[] { "KR1", "", "", "" });
    CreateRow(krtable, new[] { "KR2", "", "", "" });
    CreateRow(krtable, new[] { "KR3", "", "", "" });
    body.Append(krtable);
    body.Append(new Paragraph());

    body.Append(CreatePara("里程碑表格（12周）", 12, true));
    body.Append(new Paragraph());

    var mstable = new Table();
    mstable.Append(new TableProperties(new TableBorders(new TopBorder(), new BottomBorder(), new LeftBorder(), new RightBorder(), new InsideHorizontalBorder(), new InsideVerticalBorder())));
    CreateRow(mstable, new[] { "周次", "关键行动", "成果验收", "完成" }, true);
    for (int i = 1; i <= 12; i++) CreateRow(mstable, new[] { "第" + i + "周", "", "", "□" });
    body.Append(mstable);
    body.Append(new Paragraph());

    body.Append(CreatePara("行动承诺", 12, true));
    body.Append(CreatePara("我承诺完成以上90天行动计划：", 11));
    body.Append(new Paragraph());
    body.Append(CreatePara("签名：________________    日期：________________", 11));
    body.Append(new Paragraph());
    body.Append(CreateRightPara("© 罗宏伟 2026 | 仅供课程内部使用", 8));
}
Console.WriteLine("Done: 06-90天行动计划表.docx");

// ============== CASE STUDIES ==============
Console.WriteLine("\nCreating 案例集...");
using (var doc = WordprocessingDocument.Create(Path.Combine(casePath, "案例集.docx"), WordprocessingDocumentType.Document)) {
    var body = doc.AddMainDocumentPart().Document.Body;

    body.Append(new Paragraph());
    body.Append(CreatePara("破局・重启：用CEO思维重塑职业生涯", 22, true));
    body.Append(CreatePara("案例集", 18, true));
    body.Append(CreatePara("版本 1.0 | © 罗宏伟 2026", 10));
    body.Append(new Paragraph());

    body.Append(CreatePara("案例一：林晓的\"被经营\"困局", 16, true));
    body.Append(CreatePara("模块一：看清局", 11));
    body.Append(new Paragraph());
    body.Append(CreatePara("【案例背景】", 12, true));
    body.Append(CreatePara("林晓在现公司工作8年，自认为勤勤恳恳，连续3年绩效考核A。", 11));
    body.Append(new Paragraph());
    body.Append(CreatePara("【转折时刻】", 12, true));
    body.Append(CreatePara("三个月前，公司战略调整，宣布裁撤产品运营部，林晓被安排到边缘岗位。", 11));
    body.Append(new Paragraph());
    body.Append(CreatePara("【核心冲突】", 12, true));
    body.Append(CreatePara("1. \"我这么努力，为什么是我被边缘化？\"", 11));
    body.Append(CreatePara("2. \"8年的经验，为什么找不到好机会？\"", 11));
    body.Append(CreatePara("3. \"我是该等待，还是该离开？\"", 11));
    body.Append(new Paragraph());
    body.Append(CreatePara("【案例启示】", 12, true));
    body.Append(CreatePara("雇员心态的三个典型特征：等待被安排、岗位即身份、努力即价值。", 11));
    body.Append(new Paragraph());

    body.Append(CreatePara("案例二：林晓的\"个人定位\"探索", 16, true));
    body.Append(CreatePara("模块二：立战略", 11));
    body.Append(new Paragraph());
    body.Append(CreatePara("【案例背景】", 12, true));
    body.Append(CreatePara("在朋友的建议下，林晓开始用\"CEO思维\"重新审视自己的职业生涯。", 11));
    body.Append(new Paragraph());
    body.Append(CreatePara("【定位声明】", 12, true));
    body.Append(CreatePara("\"我帮助互联网企业从0到1搭建运营体系，擅长跨部门协调和精细化运营。\"", 11));
    body.Append(new Paragraph());

    body.Append(CreatePara("案例三：林晓的\"资产负债表\"盘点", 16, true));
    body.Append(CreatePara("模块三：调资产", 11));
    body.Append(new Paragraph());
    body.Append(CreatePara("【资产盘点结果】", 12, true));
    body.Append(CreatePara("时间资产：每天有效工作时间约4小时", 11));
    body.Append(CreatePara("人脉资产：业内人脉较少", 11));
    body.Append(CreatePara("能力资产：运营能力、数据分析能力、项目管理能力", 11));
    body.Append(CreatePara("信任资产：公司内部口碑较好，但外界认知度低", 11));
    body.Append(new Paragraph());
    body.Append(CreatePara("【核心洞察】", 12, true));
    body.Append(CreatePara("她发现自己一直在\"消耗资产\"而不是\"增值资产\"。", 11));
    body.Append(new Paragraph());

    body.Append(CreatePara("案例四：林晓的\"90天行动计划\"", 16, true));
    body.Append(CreatePara("模块四：起新局", 11));
    body.Append(new Paragraph());
    body.Append(CreatePara("【第一个可执行决策】", 12, true));
    body.Append(CreatePara("止损决策：不再等待内部调岗机会，立即开始外部探索。", 11));
    body.Append(new Paragraph());
    body.Append(CreatePara("【最终成果】", 12, true));
    body.Append(CreatePara("林晓在第75天拿到了一个新公司的offer，职位是高级运营经理，薪资提升30%。", 11));
    body.Append(new Paragraph());

    body.Append(new Paragraph());
    body.Append(CreateRightPara("© 罗宏伟 2026 | 仅供课程内部使用", 8));
}
Console.WriteLine("Done: 案例集.docx");

Console.WriteLine("\n========================================");
Console.WriteLine("All documents created successfully!");
