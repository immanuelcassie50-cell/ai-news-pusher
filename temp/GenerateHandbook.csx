#r "nuget: DocumentFormat.OpenXml, 3.2.0"

using DocumentFormat.OpenXml;
using DocumentFormat.OpenXml.Packaging;
using DocumentFormat.OpenXml.Wordprocessing;
using System.Text;

// Output path
string outputPath = "D:/新课开发/经验萃取/带教手册/完整课程包/05_学员手册/学员手册_组织经验传承_AI赋能岗位带教手册开发.docx";

// Create document
using var doc = WordprocessingDocument.Create(outputPath, WordprocessingDocumentType.Document);
var mainPart = doc.AddMainDocumentPart();
mainPart.Document = new Document(new Body());
var body = mainPart.Document.Body;

// ==================== HELPER FUNCTIONS ====================

// Create RunProperties with Chinese-friendly font
RunProperties MakeRpr(bool bold = false, string size = "22", string color = "000000", bool italic = false) {
    var rpr = new RunProperties();
    rpr.Append(new RunFonts { Ascii = "Calibri", HighAnsi = "Calibri", EastAsia = "微软雅黑" });
    if (bold) rpr.Append(new Bold());
    if (italic) rpr.Append(new Italic());
    rpr.Append(new FontSize { Val = size });
    rpr.Append(new FontSizeComplexScript { Val = size });
    rpr.Append(new Color { Val = color });
    return rpr;
}

// Create paragraph with style
Paragraph MakeParagraph(string text, string styleId = "Normal", bool bold = false, string size = "22", string color = "333333", bool italic = false) {
    var p = new Paragraph();
    var pPr = new ParagraphProperties();
    pPr.Append(new ParagraphStyleId { Val = styleId });
    p.Append(pPr);
    var run = new Run();
    run.Append(MakeRpr(bold, size, color, italic));
    run.Append(new Text { Text = text });
    p.Append(run);
    return p;
}

// Create heading paragraph
Paragraph MakeHeading(string text, int level) {
    var p = new Paragraph();
    var pPr = new ParagraphProperties();
    string styleId = level == 1 ? "Heading1" : level == 2 ? "Heading2" : "Heading3";
    pPr.Append(new ParagraphStyleId { Val = styleId });
    if (level == 1) pPr.Append(new PageBreakBefore());
    p.Append(pPr);
    var run = new Run();
    string size = level == 1 ? "36" : level == 2 ? "28" : "24";
    string color = level == 1 ? "1F3864" : "2E5496";
    run.Append(MakeRpr(true, size, color));
    run.Append(new Text { Text = text });
    p.Append(run);
    return p;
}

// Create table
Table CreateTable(string[] headers, string[][] rows) {
    var tbl = new Table();

    // Table properties
    var tblPr = new TableProperties();
    tblPr.Append(new TableWidth { Width = "5000", Type = TableWidthUnitValues.Pct });
    tblPr.Append(new TableBorders(
        new TopBorder { Val = BorderValues.Single, Size = 4, Color = "4472C4" },
        new BottomBorder { Val = BorderValues.Single, Size = 4, Color = "4472C4" },
        new LeftBorder { Val = BorderValues.Single, Size = 4, Color = "4472C4" },
        new RightBorder { Val = BorderValues.Single, Size = 4, Color = "4472C4" },
        new InsideHorizontalBorder { Val = BorderValues.Single, Size = 4, Color = "D9E2F3" },
        new InsideVerticalBorder { Val = BorderValues.Single, Size = 4, Color = "D9E2F3" }
    ));
    tblPr.Append(new TableCellMarginDefault(
        new TopMargin { Width = "57", Type = TableWidthUnitValues.Dxa },
        new TableCellLeftMargin { Width = 57, Type = TableWidthValues.Dxa },
        new BottomMargin { Width = "57", Type = TableWidthUnitValues.Dxa },
        new TableCellRightMargin { Width = 57, Type = TableWidthValues.Dxa }
    ));
    tbl.Append(tblPr);

    // Table grid
    var tblGrid = new TableGrid();
    foreach (var h in headers) tblGrid.Append(new GridColumn { Width = "1800" });
    tbl.Append(tblGrid);

    // Header row
    var headerRow = new TableRow();
    headerRow.Append(new TableRowProperties(new TableRowHeight { Val = 400, HeightType = HeightRuleValues.AtLeast }));
    foreach (var h in headers) {
        var tc = new TableCell();
        tc.Append(new TableCellProperties(new TableCellWidth { Width = "1800", Type = TableWidthUnitValues.Dxa }));
        tc.Append(new TableCellProperties(new Shading { Val = ShadingPatternValues.Clear, Fill = "4472C4" }));
        var p = new Paragraph();
        p.Append(new ParagraphProperties(new Justification { Val = JustificationValues.Center }));
        var run = new Run();
        run.Append(MakeRpr(true, "20", "FFFFFF"));
        run.Append(new Text { Text = h });
        p.Append(run);
        tc.Append(p);
        headerRow.Append(tc);
    }
    tbl.Append(headerRow);

    // Data rows
    foreach (var row in rows) {
        var tr = new TableRow();
        foreach (var cell in row) {
            var tc = new TableCell();
            tc.Append(new TableCellProperties(new TableCellWidth { Width = "1800", Type = TableWidthUnitValues.Dxa }));
            var p = new Paragraph();
            var run = new Run();
            run.Append(MakeRpr(false, "20", "333333"));
            run.Append(new Text { Text = cell });
            p.Append(run);
            tc.Append(p);
            tr.Append(tc);
        }
        tbl.Append(tr);
    }

    return tbl;
}

// Create form table (for practice forms)
Table CreateFormTable(string[,] cells, int cols) {
    var tbl = new Table();
    var tblPr = new TableProperties();
    tblPr.Append(new TableWidth { Width = "5000", Type = TableWidthUnitValues.Pct });
    tblPr.Append(new TableBorders(
        new TopBorder { Val = BorderValues.Single, Size = 4, Color = "4472C4" },
        new BottomBorder { Val = BorderValues.Single, Size = 4, Color = "4472C4" },
        new LeftBorder { Val = BorderValues.Single, Size = 4, Color = "4472C4" },
        new RightBorder { Val = BorderValues.Single, Size = 4, Color = "4472C4" },
        new InsideHorizontalBorder { Val = BorderValues.Single, Size = 4, Color = "D9E2F3" },
        new InsideVerticalBorder { Val = BorderValues.Single, Size = 4, Color = "D9E2F3" }
    ));
    tbl.Append(tblPr);

    var tblGrid = new TableGrid();
    for (int i = 0; i < cols; i++) tblGrid.Append(new GridColumn { Width = "2000" });
    tbl.Append(tblGrid);

    int rows = cells.GetLength(0);
    for (int r = 0; r < rows; r++) {
        var tr = new TableRow();
        for (int c = 0; c < cols; c++) {
            var tc = new TableCell();
            var tcPr = new TableCellProperties();
            tcPr.Append(new TableCellWidth { Width = "2000", Type = TableWidthUnitValues.Dxa });
            if (r == 0) tcPr.Append(new Shading { Val = ShadingPatternValues.Clear, Fill = "4472C4" });
            tc.Append(tcPr);
            var p = new Paragraph();
            var pPr = new ParagraphProperties();
            if (r == 0) pPr.Append(new Justification { Val = JustificationValues.Center });
            p.Append(pPr);
            var run = new Run();
            if (r == 0) run.Append(MakeRpr(true, "20", "FFFFFF"));
            else run.Append(MakeRpr(false, "20", "333333"));
            run.Append(new Text { Text = cells[r, c] });
            p.Append(run);
            tc.Append(p);
            tr.Append(tc);
        }
        tbl.Append(tr);
    }
    return tbl;
}

// ==================== ADD STYLES ====================

var stylesPart = mainPart.AddNewPart<StyleDefinitionsPart>();
var styles = new Styles();

// DocDefaults
styles.Append(new DocDefaults(
    new RunPropertiesDefault(
        new RunPropertiesBaseStyle(
            new RunFonts { Ascii = "Calibri", HighAnsi = "Calibri", EastAsia = "微软雅黑" },
            new FontSize { Val = "22" },
            new FontSizeComplexScript { Val = "22" }
        )
    ),
    new ParagraphPropertiesDefault(
        new ParagraphPropertiesBaseStyle(
            new SpacingBetweenLines { After = "160", Line = "276", LineRule = LineSpacingRuleValues.Auto }
        )
    )
));

// Heading1 style
var h1Style = new Style { Type = StyleValues.Paragraph, StyleId = "Heading1" };
h1Style.Append(new StyleName { Val = "Heading 1" });
h1Style.Append(new BasedOn { Val = "Normal" });
h1Style.Append(new NextParagraphStyle { Val = "Normal" });
h1Style.Append(new StyleParagraphProperties(
    new KeepNext(),
    new KeepLines(),
    new SpacingBetweenLines { Before = "480", After = "160" },
    new OutlineLevel { Val = 0 }
));
h1Style.Append(new StyleRunProperties(
    new Bold(),
    new FontSize { Val = "36" },
    new FontSizeComplexScript { Val = "36" },
    new Color { Val = "1F3864" }
));
styles.Append(h1Style);

// Heading2 style
var h2Style = new Style { Type = StyleValues.Paragraph, StyleId = "Heading2" };
h2Style.Append(new StyleName { Val = "Heading 2" });
h2Style.Append(new BasedOn { Val = "Normal" });
h2Style.Append(new NextParagraphStyle { Val = "Normal" });
h2Style.Append(new StyleParagraphProperties(
    new KeepNext(),
    new KeepLines(),
    new SpacingBetweenLines { Before = "360", After = "120" },
    new OutlineLevel { Val = 1 }
));
h2Style.Append(new StyleRunProperties(
    new Bold(),
    new FontSize { Val = "28" },
    new FontSizeComplexScript { Val = "28" },
    new Color { Val = "2E5496" }
));
styles.Append(h2Style);

// Heading3 style
var h3Style = new Style { Type = StyleValues.Paragraph, StyleId = "Heading3" };
h3Style.Append(new StyleName { Val = "Heading 3" });
h3Style.Append(new BasedOn { Val = "Normal" });
h3Style.Append(new NextParagraphStyle { Val = "Normal" });
h3Style.Append(new StyleParagraphProperties(
    new KeepNext(),
    new SpacingBetweenLines { Before = "240", After = "80" },
    new OutlineLevel { Val = 2 }
));
h3Style.Append(new StyleRunProperties(
    new Bold(),
    new FontSize { Val = "24" },
    new FontSizeComplexScript { Val = "24" },
    new Color { Val = "2E5496" }
));
styles.Append(h3Style);

// Normal style
var normalStyle = new Style { Type = StyleValues.Paragraph, StyleId = "Normal" };
normalStyle.Append(new StyleName { Val = "Normal" });
normalStyle.Append(new StyleParagraphProperties(
    new SpacingBetweenLines { After = "160", Line = "276", LineRule = LineSpacingRuleValues.Auto }
));
normalStyle.Append(new StyleRunProperties(
    new RunFonts { Ascii = "Calibri", HighAnsi = "Calibri", EastAsia = "微软雅黑" },
    new FontSize { Val = "22" },
    new Color { Val = "333333" }
));
styles.Append(normalStyle);

stylesPart.Styles = styles;
stylesPart.Styles.Save();

// ==================== ADD DOCUMENT CONTENT ====================

// ===== 封面 =====
body.Append(MakeParagraph("", "Normal", false, "22", "333333")); // Spacer
body.Append(MakeParagraph("", "Normal", false, "22", "333333"));
body.Append(MakeParagraph("", "Normal", false, "22", "333333"));

var coverTitle = new Paragraph();
var coverTitlePr = new ParagraphProperties();
coverTitlePr.Append(new Justification { Val = JustificationValues.Center });
coverTitle.Append(coverTitlePr);
var coverTitleRun = new Run();
coverTitleRun.Append(MakeRpr(true, "56", "1F3864"));
coverTitleRun.Append(new Text { Text = "组织经验传承" });
coverTitle.Append(coverTitleRun);
body.Append(coverTitle);

var coverSubtitle = new Paragraph();
var coverSubtitlePr = new ParagraphProperties();
coverSubtitlePr.Append(new Justification { Val = JustificationValues.Center });
coverSubtitlePr.Append(new SpacingBetweenLines { Before = "240" });
coverSubtitle.Append(coverSubtitlePr);
var coverSubtitleRun = new Run();
coverSubtitleRun.Append(MakeRpr(true, "40", "2E5496"));
coverSubtitleRun.Append(new Text { Text = "AI赋能岗位带教手册开发" });
coverSubtitle.Append(coverSubtitleRun);
body.Append(coverSubtitle);

var coverLabel = new Paragraph();
var coverLabelPr = new ParagraphProperties();
coverLabelPr.Append(new Justification { Val = JustificationValues.Center });
coverLabelPr.Append(new SpacingBetweenLines { Before = "960" });
coverLabel.Append(coverLabelPr);
var coverLabelRun = new Run();
coverLabelRun.Append(MakeRpr(true, "32", "4472C4"));
coverLabelRun.Append(new Text { Text = "学员手册" });
coverLabel.Append(coverLabelRun);
body.Append(coverLabel);

body.Append(MakeParagraph("", "Normal", false, "22", "333333"));
body.Append(MakeParagraph("", "Normal", false, "22", "333333"));

var infoTable = new Table();
var infoTblPr = new TableProperties();
infoTblPr.Append(new TableWidth { Width = "3000", Type = TableWidthUnitValues.Pct });
infoTblPr.Append(new Justification { Val = JustificationValues.Center });
infoTable.Append(infoTblPr);
var infoTblGrid = new TableGrid();
infoTblGrid.Append(new GridColumn { Width = "3000" });
infoTable.Append(infoTblGrid);

string[,] infoCells = {
    { "学员姓名", "________________________" },
    { "所在部门", "________________________" },
    { "课程日期", "________________________" },
    { "课程讲师", "________________________" }
};
for (int r = 0; r < 4; r++) {
    var tr = new TableRow();
    for (int c = 0; c < 2; c++) {
        var tc = new TableCell();
        var tcPr = new TableCellProperties();
        tcPr.Append(new TableCellWidth { Width = "3000", Type = TableWidthUnitValues.Dxa });
        tc.Append(tcPr);
        var p = new Paragraph();
        var run = new Run();
        run.Append(MakeRpr(c == 0, "24", c == 0 ? "1F3864" : "333333"));
        run.Append(new Text { Text = infoCells[r, c] });
        p.Append(run);
        tc.Append(p);
        tr.Append(tc);
    }
    infoTable.Append(tr);
}
body.Append(infoTable);

body.Append(MakeParagraph("", "Normal", false, "22", "333333"));
body.Append(MakeParagraph("", "Normal", false, "22", "333333"));

var quoteP = new Paragraph();
var quotePPr = new ParagraphProperties();
quotePPr.Append(new Justification { Val = JustificationValues.Center });
quoteP.Append(quotePPr);
var quoteRun = new Run();
quoteRun.Append(MakeRpr(false, "22", "666666", true));
quoteRun.Append(new Text { Text = "\"带教不是把事情交代清楚，而是让你的徒弟真正学会。\"" });
quoteP.Append(quoteRun);
body.Append(quoteP);

// Page break after cover
body.Append(new Paragraph(new Run(new Break { Type = BreakValues.Page})));

// ===== 使用指南 =====
body.Append(MakeHeading("如何使用这本手册", 1));

body.Append(MakeParagraph("这本手册不是讲义，不是笔记，不是课后读物。", "Normal", false, "22", "333333"));
body.Append(MakeParagraph("它是你在课程中完成的工作台。每一个框架、每一张表单、每一道练习，都要在课堂上完成。你做完的每一页，都是你带走的真实成果，而不是别人告诉你的理论。", "Normal", false, "22", "333333"));

body.Append(MakeParagraph("三个使用原则：", "Normal", true, "22", "1F3864"));

body.Append(MakeParagraph("原则一：带着真实任务来", "Normal", true, "22", "333333"));
body.Append(MakeParagraph("手册里所有的练习都要用你自己工作中的真实场景，不要虚构例子。真实的任务，才有真实的收获。", "Normal", false, "22", "333333"));

body.Append(MakeParagraph("原则二：写下来比记下来更有价值", "Normal", true, "22", "333333"));
body.Append(MakeParagraph("看懂了不等于会用，写下来才是真正内化的开始。每一道练习，都请认真完成，不要留空。", "Normal", false, "22", "333333"));

body.Append(MakeParagraph("原则三：这是起点，不是终点", "Normal", true, "22", "333333"));
body.Append(MakeParagraph("课程结束不是学习的终点。手册最后一章是你的行动计划——回到工作中，每完成一次，回来翻一翻这本手册。", "Normal", false, "22", "333333"));

// ===== 课程全景图 =====
body.Append(MakeHeading("课程全景图", 1));

body.Append(MakeParagraph("三天课程，两大核心能力，一个方向：", "Normal", true, "22", "1F3864"));

var overviewTable = CreateTable(
    new[] { "时间", "核心任务", "你会带走什么" },
    new[] {
        new[] { "第一天", "理解带教手册是什么 + 锁定方向 + 挖掘原料", "定位表 + 访谈原料" },
        new[] { "第二天", "AI辅助生成手册骨架 + 开发工具包与案例", "手册框架 + 工具包" },
        new[] { "第三天", "五步优化 + 整合编排 + 成果展示", "完整可用的带教手册" }
    }
);
body.Append(overviewTable);

body.Append(MakeParagraph("", "Normal", false, "22", "333333"));

body.Append(MakeParagraph("这本手册最终会包含以下核心模块：", "Normal", false, "22", "333333"));

string[,] moduleCells = {
    { "模块", "解决什么问题", "使用时机" },
    { "学员画像与差异化策略", "要带的是什么人？不同类型怎么区别对待？", "接到带教任务时" },
    { "带教内容全景图", "要教哪些内容？先教什么后教什么？", "制定带教计划时" },
    { "分阶段带教计划", "按周/月划分，每个阶段教什么、验什么", "每个阶段开始时" },
    { "教学方法与带教技巧", "不同内容用什么方式教最有效", "准备教学时" },
    { "关键节点评估工具", "怎么判断学员"真的会了"", "阶段结束时" },
    { "带教话术与沟通指南", "怎么说不伤人、还有效", "遇到沟通困难时" },
    { "带教工具包", "评估表、日志、速查表等配套工具", "全程使用" }
};
body.Append(CreateFormTable(moduleCells, 3));

// ===== 学习准备 =====
body.Append(MakeHeading("学习准备", 1));

// 课前自评
body.Append(MakeHeading("课前自评", 2));

body.Append(MakeParagraph("填写说明：目的：了解你现在的起点，课程结束后用同一张表重测，看清变化。要求：如实打勾，不需要"表现好看"，这张表只有你自己看。时间：5分钟", "Normal", false, "20", "666666", true));

string[,] selfEvalCells = {
    { "行为特征", "几乎\n从不", "偶尔\n如此", "经常\n这样", "基本\n如此" },
    { "1. 我清楚带教手册和岗位操作手册的本质区别", "", "", "", "" },
    { "2. 我能说清楚带教手册必须回答的六个核心问题", "", "", "", "" },
    { "3. 我了解不同类型学员（应届生/社招/转岗）的差异化带教策略", "", "", "", "" },
    { "4. 我掌握结构化访谈技巧，能从优秀带教人身上萃取经验", "", "", "", "" },
    { "5. 我能设计分阶段的带教计划，并制定可衡量的验收标准", "", "", "", "" },
    { "6. 我会使用AI工具辅助生成手册内容", "", "", "", "" }
};
body.Append(CreateFormTable(selfEvalCells, 5));

body.Append(MakeParagraph("", "Normal", false, "22", "333333"));
body.Append(MakeParagraph("我的"几乎从不"或"偶尔如此"共有 _____ 行。这些就是你在这门课里的重点方向。", "Normal", false, "22", "333333"));

// 场景卡
body.Append(MakeHeading("我的场景卡", 2));

body.Append(MakeParagraph("填写说明：目的：选定一个贯穿整个课程的真实工作任务，后续所有练习都围绕它展开。要求：选一个你现在经常要做的任务，不是"以后可能做的"。提示：选那个你每周至少做一次、做完有点累、下次还得再做的任务。", "Normal", false, "20", "666666", true));

string[,] sceneCells = {
    { "场景卡", "你的填写" },
    { "我的岗位/角色", "" },
    { "我选定的任务名称", "" },
    { "这个任务通常怎么做？（简述主要步骤，3行以内）", "" },
    { "目前这个任务最让我头疼的地方", "" },
    { "如果AI能帮上忙，我最希望改善什么", "" },
    { "这个任务最终产出是什么形式（报告/邮件/方案/数据/其他）", "" }
};
body.Append(CreateFormTable(sceneCells, 2));

body.Append(MakeParagraph("", "Normal", false, "22", "333333"));
body.Append(MakeParagraph("关键提示：填好这张卡，收好。课程中所有练习都会用到它。课程结束时，你手上会有这个任务的完整带教方案。", "Normal", false, "22", "1F3864", true));

// ===== 模块一 =====
body.Append(MakeHeading("模块一：理解带教手册的本质", 1));

body.Append(MakeHeading("学习目标", 2));
body.Append(MakeParagraph("1. 识别"伪带教手册"与真正的带教手册的本质差异", "Normal", false, "22", "333333"));
body.Append(MakeParagraph("2. 理解带教手册与岗位操作手册的核心区别", "Normal", false, "22", "333333"));
body.Append(MakeParagraph("3. 掌握带教手册必须回答的六个核心问题", "Normal", false, "22", "333333"));

body.Append(MakeHeading("核心概念：三种"伪带教手册"", 2));

body.Append(MakeParagraph("第一种：岗位说明书改装型", "Normal", true, "22", "2E5496"));
body.Append(MakeParagraph("把岗位职责和技能要求列了一遍。内容是对的，但读完之后带教人还是不知道"我该怎么教"——只知道"我该教什么"。", "Normal", false, "22", "333333"));

body.Append(MakeParagraph("第二种：培训课件搬运型", "Normal", true, "22", "2E5496"));
body.Append(MakeParagraph("把新员工培训PPT变成Word。信息量很大，但没有教学设计——没有说这些内容应该按什么顺序教，用什么方式教，怎么判断学员学会了。", "Normal", false, "22", "333333"));

body.Append(MakeParagraph("第三种：带教制度型", "Normal", true, "22", "2E5496"));
body.Append(MakeParagraph("规定了带教周期、考核方式、导师签字流程。制度是对的，但带教人翻开后还是不知道"明天具体要做什么"。", "Normal", false, "22", "333333"));

body.Append(MakeHeading("带教手册的准确定位", 2));

body.Append(MakeParagraph("带教手册不是培训课件，不是制度文件，也不是新员工入职指南。", "Normal", true, "22", "1F3864"));
body.Append(MakeParagraph("它是带教人工位上随手能翻的"教学工具书"。", "Normal", false, "22", "333333"));

body.Append(MakeParagraph("核心判断标准：一个没带过人的员工，拿到这本手册后，能不能知道"第一天该做什么"？遇到学员学不进去的时候，能不能翻到解决方案？", "Normal", false, "22", "333333", true));

string[,] diffCells = {
    { "维度", "岗位操作手册", "带教手册" },
    { "核心问题", "这件事怎么做", "怎么教会别人做这件事" },
    { "读者", "操作者本人", "带教人（师傅、导师）" },
    { "内容重心", "操作步骤、判断标准", "教什么、按什么顺序教、怎么教、怎么验收" },
    { "成功标准", "照着做能做对", "照着带能把人带出来" },
    { "隐性知识重点", "操作中的判断逻辑", "教学节奏、因材施教、纠错技巧" }
};
body.Append(CreateFormTable(diffCells, 3));

body.Append(MakeHeading("六个核心问题", 2));

body.Append(MakeParagraph("一本合格的带教手册，必须能够回答以下六个问题：", "Normal", false, "22", "333333"));

body.Append(MakeParagraph("第一个问题：教什么？", "Normal", true, "22", "2E5496"));
body.Append(MakeParagraph("不是把岗位所有内容都塞进去，而是：在带教周期内，必须让学员掌握哪些核心技能？优先级怎么排？", "Normal", false, "22", "333333"));

body.Append(MakeParagraph("第二个问题：按什么顺序教？", "Normal", true, "22", "2E5496"));
body.Append(MakeParagraph("哪些内容必须先掌握才能学后面的？哪些可以并行推进？带教手册需要把这个"学习路径"画清楚。", "Normal", false, "22", "333333"));

body.Append(MakeParagraph("第三个问题：怎么教？", "Normal", true, "22", "2E5496"));
body.Append(MakeParagraph("不同类型的内容，教法是不一样的：知识类（讲解+举例+提问确认）、技能类（演示→陪练→独立操作）、判断力类（案例分析+场景模拟+带教人解说决策逻辑）。", "Normal", false, "22", "333333"));

body.Append(MakeParagraph("第四个问题：怎么知道学员学会了？", "Normal", true, "22", "2E5496"));
body.Append(MakeParagraph("差的验收标准："能做报表了"。好的验收标准："能独立完成日常运营报表，数据口径与标准模板一致，完成时间不超过45分钟，连续三次无需带教人纠错"。", "Normal", false, "22", "333333"));

body.Append(MakeParagraph("第五个问题：遇到问题怎么办？", "Normal", true, "22", "2E5496"));
body.Append(MakeParagraph("学员学不进去怎么办？犯了错怎么纠正才有效果？不同类型学员需要怎么区分？这些问题要给出具体的应对策略。", "Normal", false, "22", "333333"));

body.Append(MakeParagraph("第六个问题：带教过程怎么管？", "Normal", true, "22", "2E5496"));
body.Append(MakeParagraph("带教周期怎么规划？关键节点怎么把控？带教记录怎么留？带教结束怎么做交接？", "Normal", false, "22", "333333"));

// 练习
body.Append(MakeHeading("练习 1-1：快速辨认练习", 2));
body.Append(MakeParagraph("用你公司的带教材料对号入座，理解"伪带教手册"的具体含义：", "Normal", false, "22", "333333"));

string[,] checkCells = {
    { "检查项", "有/没有/不确定" },
    { "有没有说"带教人应该怎么教"（而不只是教什么）", "" },
    { "有没有说"什么时候放手，判断标准是什么"", "" },
    { "有没有说"学员不同类型，带法怎么调"", "" },
    { "有没有说"这个阶段结束，怎么知道学员学会了"", "" }
};
body.Append(CreateFormTable(checkCells, 2));

body.Append(MakeHeading("练习 1-2：六个问题检验练习", 2));
body.Append(MakeParagraph("用六个核心问题作为"评分表"，评估你现有材料的覆盖情况：", "Normal", false, "22", "333333"));

string[,] scoreCells = {
    { "核心问题", "覆盖程度", "最大缺口" },
    { "教什么（核心技能清单+优先级）", "完全覆盖/部分覆盖/完全没有", "" },
    { "按什么顺序教（学习路径）", "完全覆盖/部分覆盖/完全没有", "" },
    { "怎么教（教法建议）", "完全覆盖/部分覆盖/完全没有", "" },
    { "怎么知道学会了（验收标准）", "完全覆盖/部分覆盖/完全没有", "" },
    { "遇到问题怎么办（应对策略）", "完全覆盖/部分覆盖/完全没有", "" },
    { "过程怎么管（记录与工具）", "完全覆盖/部分覆盖/完全没有", "" }
};
body.Append(CreateFormTable(scoreCells, 3));

// ===== 模块二 =====
body.Append(MakeHeading("模块二：带教手册定位表", 1));

body.Append(MakeHeading("学习目标", 2));
body.Append(MakeParagraph("1. 理解带教手册定位的五个维度", "Normal", false, "22", "333333"));
body.Append(MakeParagraph("2. 能够区分不同类型学员的带教策略差异", "Normal", false, "22", "333333"));
body.Append(MakeParagraph("3. 掌握可衡量的验收标准写法", "Normal", false, "22", "333333"));

body.Append(MakeHeading("定位的五个维度", 2));

body.Append(MakeParagraph("维度一：带教对象画像", "Normal", true, "22", "2E5496"));

string[,] learnerCells = {
    { "学员类型", "典型特征", "带教重点" },
    { "应届生", "零基础或接近零基础，学习意愿强但职业习惯待培养", "从岗位认知开始，重点在基础技能和职业习惯" },
    { "社招有相关经验者", "有基础但可能有"旧习惯"，可能高估自己的适应速度", "先识别已有能力，重点在差异项和公司特有要求" },
    { "转岗员工", "有职场经验但跨领域，学习能力强但容易用旧框架套新业务", "重点在思维转换和关键差异，需要"为什么"多于"怎么做"" }
};
body.Append(CreateFormTable(learnerCells, 3));

body.Append(MakeParagraph("维度二：带教内容范围", "Normal", true, "22", "2E5496"));
body.Append(MakeParagraph("判断标准：带教结束时，如果学员没掌握这项内容，会不会直接影响他的独立上岗能力？如果"会"，就放进来。", "Normal", false, "22", "333333"));

body.Append(MakeParagraph("维度三：带教周期与阶段划分", "Normal", true, "22", "2E5496"));

string[,] phaseCells = {
    { "阶段", "典型时长", "核心任务" },
    { "认知期", "第1周左右", "了解岗位全貌、熟悉环境和基本流程" },
    { "跟学期", "第2～4周", "在师傅指导下完成核心操作" },
    { "试手期", "第5～8周", "独立完成常规操作，师傅在旁监督和纠偏" },
    { "独立期", "第9～12周", "独立处理常见场景，师傅仅在异常情况介入" }
};
body.Append(CreateFormTable(phaseCells, 3));

body.Append(MakeParagraph("维度四：验收标准", "Normal", true, "22", "2E5496"));
body.Append(MakeParagraph("写法类型对比：差的写法（主观、无法衡量）："基本掌握了核心技能"。好的写法（可观察、可衡量）："能独立完成日常数据核查，口径准确率100%，完成时间不超过30分钟，连续两周无需带教人介入纠错"。", "Normal", false, "22", "333333"));

body.Append(MakeParagraph("维度五：约束条件", "Normal", true, "22", "2E5496"));
body.Append(MakeParagraph("带教人每天能投入多少时间？学员是否有固定学习时间？是否有安全规程影响上手时机？", "Normal", false, "22", "333333"));

// 练习
body.Append(MakeHeading("练习 2-1：填写带教手册定位表", 2));

body.Append(MakeParagraph("第 ___ 组 · 带教手册定位表", "Normal", true, "22", "1F3864"));
body.Append(MakeParagraph("基本信息", "Normal", true, "22", "2E5496"));

string[,] basicInfoCells = {
    { "信息项", "填写内容" },
    { "手册工作标题", "" },
    { "所属岗位/业务线", "" },
    { "开发组成员（姓名+角色）", "" }
};
body.Append(CreateFormTable(basicInfoCells, 2));

body.Append(MakeParagraph("带教对象画像", "Normal", true, "22", "2E5496"));
string[,] objCells = {
    { "信息项", "填写内容" },
    { "本手册主要面向", "应届生 / 社招有相关经验者 / 转岗员工（可多选）" },
    { "各类学员的关键特征描述", "" }
};
body.Append(CreateFormTable(objCells, 2));

body.Append(MakeParagraph("验收标准", "Normal", true, "22", "2E5496"));
string[,] stdCells = {
    { "标准类型", "填写内容" },
    { "带教结束时学员应该能独立完成什么", "" },
    { ""带出来了"的判定标准（至少3条）", "1.\n2.\n3." }
};
body.Append(CreateFormTable(stdCells, 2));

// ===== 模块三 =====
body.Append(MakeHeading("模块三：带教经验萃取", 1));

body.Append(MakeHeading("学习目标", 2));
body.Append(MakeParagraph("1. 理解"岗位操作知识"与"带教知识"的本质区别", "Normal", false, "22", "333333"));
body.Append(MakeParagraph("2. 掌握三类人群的结构化访谈技巧", "Normal", false, "22", "333333"));
body.Append(MakeParagraph("3. 能够把"做了什么"转化为"怎么教的"", "Normal", false, "22", "333333"));

body.Append(MakeHeading("两类知识的区别", 2));

string[,] knowCells = {
    { "岗位操作手册萃取的是", "带教手册萃取的是" },
    { ""我怎么做这件事"", ""我怎么教会别人做这件事"" },
    { "操作步骤、判断标准、注意事项", "教学步骤、节奏把控、因材施教、纠错技巧" }
};
body.Append(CreateFormTable(knowCells, 2));

body.Append(MakeParagraph("关键追问习惯：当访谈对象说"我们这个岗位要做XX操作，具体分三步……"的时候，要追问的是"你教这三步的时候，是一次性教完还是拆开教？你怎么判断第一步学会了再教第二步？"", "Normal", false, "22", "333333", true));

body.Append(MakeHeading("三类人群，三个视角", 2));

string[,] crowdCells = {
    { "角色", "主要贡献", "访谈重点" },
    { "被带教过的新人代表", "学员视角——还原被带教过程中的真实体验、困惑和期待", "当时最迷茫的是什么？什么做法最有效？哪个阶段最难熬？" },
    { "优秀带教人", "带教经验视角——分享被验证有效的教法、节奏和因材施教策略", "你怎么开始带？怎么判断学员的底子？怎么知道该放手了？" },
    { "管理者", "组织标准视角——界定带教的范围、质量标准和验收标准", "你期望带教结束后学员达到什么水平？哪些内容是硬要求？" }
};
body.Append(CreateFormTable(crowdCells, 3));

body.Append(MakeHeading("访谈追问技巧", 2));

body.Append(MakeParagraph("把"做了什么"变成"怎么教的"：", "Normal", true, "22", "1F3864"));

string[,] askCells = {
    { "被访者说的", "你要追问的" },
    { ""我会先演示一遍"", ""演示的时候你会特别强调什么？会不会特意把容易错的地方放慢？"" },
    { ""然后让他自己做"", ""看他做的时候你关注什么？什么表现说明他真会了？"" },
    { ""这个人悟性差"", ""你具体观察到什么行为？你怎么调整带法的？"" },
    { ""一般两周后放手"", ""两周这个时间是怎么来的？有没有提前或延后的情况？触发条件是什么？"" }
};
body.Append(CreateFormTable(askCells, 2));

// 练习
body.Append(MakeHeading("练习 3-1：三轮结构化访谈", 2));

body.Append(MakeParagraph("第一轮：访谈被带教过的新人代表", "Normal", true, "22", "2E5496"));
body.Append(MakeParagraph("访谈清单：", "Normal", false, "22", "333333"));
string[,] int1Cells = {
    { "#", "问题", "追问方向" },
    { "1", "你刚来这个岗位的时候，最迷茫的是什么？", "是哪个具体的环节或任务让你不知道从哪里开始？" },
    { "2", "师傅教你的时候，哪个做法让你进步最快？", "那个做法具体是怎么做的？他说了什么、做了什么？" },
    { "3", "哪个阶段你觉得最难熬？什么帮你撑过来了？", "那段时间最大的障碍是什么？是技能上的还是心理上的？" },
    { "4", "你觉得师傅什么时候放手太早了/太晚了？", "如果那个时候他多帮一把/少帮一把，结果会怎么不同？" }
};
body.Append(CreateFormTable(int1Cells, 3));

body.Append(MakeParagraph("第二轮：访谈优秀带教人", "Normal", true, "22", "2E5496"));
string[,] int2Cells = {
    { "#", "问题", "追问方向" },
    { "1", "你带新人一般怎么开始？第一天/第一周做什么？", "为什么这样开始？" },
    { "2", "你怎么判断这个新人的基础和接受能力？", "你看什么？问什么？做什么来判断？" },
    { "3", "你教一个复杂操作的时候，一般分几步教？", "第一步教完怎么判断可以教第二步了？" },
    { "4", "你怎么判断他真的学会了，不是"看着会了"？", "有没有被"假会"骗过？那次怎么发现的？" }
};
body.Append(CreateFormTable(int2Cells, 3));

body.Append(MakeParagraph("第三轮：访谈管理者", "Normal", true, "22", "2E5496"));
string[,] int3Cells = {
    { "#", "问题", "追问方向" },
    { "1", "你对带教人的期望是什么？带教结束时你怎么判断带得好不好？", "你看什么指标？观察学员的什么表现？" },
    { "2", "见过的最好的带教做法是什么？最差的呢？", "好在哪里/差在哪里？具体发生了什么？" },
    { "3", "带教期内，哪些内容是必须教到位的"硬杠杠"？", "如果这些没教到，会出现什么后果？" }
};
body.Append(CreateFormTable(int3Cells, 3));

// ===== 模块四 =====
body.Append(MakeHeading("模块四：AI辅助生成手册", 1));

body.Append(MakeHeading("学习目标", 2));
body.Append(MakeParagraph("1. 掌握带教内容全景图的梳理方法", "Normal", false, "22", "333333"));
body.Append(MakeParagraph("2. 能够设计分阶段带教计划", "Normal", false, "22", "333333"));
body.Append(MakeParagraph("3. 理解三级大纲的标准结构", "Normal", false, "22", "333333"));

body.Append(MakeHeading("带教内容全景图", 2));

body.Append(MakeParagraph("全景图回答三个问题：", "Normal", true, "22", "1F3864"));
body.Append(MakeParagraph("1. 教什么：这个岗位在带教周期内，必须让学员掌握的核心技能有哪些？", "Normal", false, "22", "333333"));
body.Append(MakeParagraph("2. 怎么分类：哪些是知识类、技能类、判断力类？", "Normal", false, "22", "333333"));
body.Append(MakeParagraph("3. 按什么顺序：哪些必须先学会才能学后面的？优先级怎么排？", "Normal", false, "22", "333333"));

body.Append(MakeParagraph("知识技能分类的三个类型：", "Normal", true, "22", "2E5496"));

string[,] typeCells = {
    { "类型", "特征", "适合的教法", "典型内容举例" },
    { "知识类", "需要理解、记忆", "讲解+举例+提问确认", "业务流程、制度规则" },
    { "技能类", "需要反复练习，形成肌肉记忆", "演示→陪练→独立操作", "操作系统操作、表单填写" },
    { "判断力类", "需要经验积累", "案例分析+场景模拟", "异常情况处理、客户投诉应对" }
};
body.Append(CreateFormTable(typeCells, 4));

body.Append(MakeHeading("分阶段带教计划", 2));

body.Append(MakeParagraph("每个阶段按以下结构填写：", "Normal", false, "22", "333333"));
body.Append(MakeParagraph("本阶段教学重点——重点教什么？用什么方式教？", "Normal", false, "22", "333333"));
body.Append(MakeParagraph("里程碑验收——阶段结束时确认达标的标准（可观察的行为）", "Normal", false, "22", "333333"));
body.Append(MakeParagraph("差异化标注——应届生/社招有经验者/转岗员工各怎么调", "Normal", false, "22", "333333"));
body.Append(MakeParagraph("带教人投入时间——每天大概投入多少时间", "Normal", false, "22", "333333"));

body.Append(MakeHeading("三级大纲的标准结构", 2));

body.Append(MakeParagraph("每个带教内容模块，内部都要包含以下三层：", "Normal", false, "22", "333333"));

string[,] outlineCells = {
    { "层次", "内容", "回答的问题" },
    { "教学目标", "本模块教完后，学员应该能做到什么", ""教完之后我要达到什么效果"" },
    { "教法设计", "推荐用什么方式教（讲解/演示/陪练/放手）", ""这个东西我怎么教"" },
    { "验收标准", "怎么判断学员在这个模块学会了", ""我怎么知道他真的掌握了"" }
};
body.Append(CreateFormTable(outlineCells, 3));

// 练习
body.Append(MakeHeading("练习 4-1：梳理带教内容全景图", 2));

string[,] skillCells = {
    { "序号", "技能/内容名称", "类型（知识/技能/判断力）", "优先级" },
    { "1", "", "", "" },
    { "2", "", "", "" },
    { "3", "", "", "" },
    { "4", "", "", "" },
    { "5", "", "", "" }
};
body.Append(CreateFormTable(skillCells, 4));

// ===== 模块五 =====
body.Append(MakeHeading("模块五：五步优化法", 1));

body.Append(MakeHeading("学习目标", 2));
body.Append(MakeParagraph("1. 理解"内容好"不等于"手册好"的优化思维", "Normal", false, "22", "333333"));
body.Append(MakeParagraph("2. 掌握共鸣唤醒、场景还原、原理透传、行动锚点、价值升华五步法", "Normal", false, "22", "333333"));

body.Append(MakeHeading("第一步：共鸣唤醒——让人愿意读", 2));
body.Append(MakeParagraph("共鸣不是"写得感人"，而是"让读者在翻开手册的一瞬间，感觉到'这本手册懂我'"。", "Normal", false, "22", "333333"));
body.Append(MakeParagraph("核心句式：描述真实困境——"你是不是也遇到过这种情况……"", "Normal", false, "22", "333333"));

body.Append(MakeHeading("第二步：场景还原——让人建立连接", 2));
body.Append(MakeParagraph("场景还原是把"步骤"变成"画面"的过程。", "Normal", false, "22", "333333"));
body.Append(MakeParagraph("三个要素：具体动作（我要做什么）、数量/条件（做多少才够）、判断标准（什么时候该停了）。", "Normal", false, "22", "333333"));

body.Append(MakeHeading("第三步：原理透传——让人深度认同", 2));
body.Append(MakeParagraph("不只告诉带教人"怎么教"，还要讲清楚"为什么这样教有效"。原理说明：说人话、讲因果、有对比。", "Normal", false, "22", "333333"));

body.Append(MakeHeading("第四步：行动锚点——让人转化行动", 2));
body.Append(MakeParagraph("各章节末尾设计3个自查问题：", "Normal", false, "22", "333333"));
body.Append(MakeParagraph("我今天/这周教了哪几项内容？学员分别掌握到什么程度？", "Normal", false, "22", "333333"));
body.Append(MakeParagraph("在这几项里，学员最容易出问题的是哪个地方？我打算怎么调整？", "Normal", false, "22", "333333"));
body.Append(MakeParagraph("我现在的带教节奏对这个学员来说是快了还是慢了？", "Normal", false, "22", "333333"));

body.Append(MakeParagraph("带教口诀设计（8字以内，朗朗上口）：", "Normal", true, "22", "2E5496"));

string[,] mottoCells = {
    { "核心原则", "好口诀示例" },
    { "先拆后教", "先拆后教，不贪多" },
    { "看会不算会", "我做一遍不算，自己做对三遍才算" },
    { "纠错要及时", "错完就纠，趁热打铁" },
    { "放手看表现", "放手看表现，不看时间" }
};
body.Append(CreateFormTable(mottoCells, 2));

body.Append(MakeHeading("第五步：价值升华——让人铭记在心", 2));
body.Append(MakeParagraph("结尾方式一：画面结尾——描述三个月后的场景。", "Normal", false, "22", "333333"));
body.Append(MakeParagraph("结尾方式二：过来人寄语——用真实感受打动新任带教人。", "Normal", false, "22", "333333"));
body.Append(MakeParagraph("结尾方式三：自我对话结尾——邀请带教人思考。", "Normal", false, "22", "333333"));

// ===== 综合练习 =====
body.Append(MakeHeading("综合练习与行动计划", 1));

body.Append(MakeHeading("综合实战：带教手册开发全链路", 2));

string[,] roadCells = {
    { "阶段", "核心任务", "我的产出" },
    { "第一步：理解手册定位", "区分真伪手册、回答六个核心问题", "" },
    { "第二步：方向定位", "填写定位表、确定带教对象和周期", "" },
    { "第三步：经验萃取", "完成三轮访谈、填写原料汇总表", "" },
    { "第四步：内容生成", "全景图+分阶段计划+三级大纲", "" },
    { "第五步：工具开发", "六种工具+典型案例", "" },
    { "第六步：五步优化", "共鸣+场景+原理+行动+价值", "" }
};
body.Append(CreateFormTable(roadCells, 3));

body.Append(MakeHeading("我的30天行动计划", 2));

string[,] actionCells = {
    { "阶段", "目标", "我要做的一件事", "怎么知道自己做到了" },
    { "第1-10天", "建立意识", "每次带教前过一遍六个核心问题", "" },
    { "第11-20天", "建立技能", "用全景图方法梳理本岗位带教内容", "" },
    { "第21-30天", "建立系统", "完成第一版带教手册初稿", "" }
};
body.Append(CreateFormTable(actionCells, 4));

body.Append(MakeParagraph("", "Normal", false, "22", "333333"));
body.Append(MakeParagraph("30天后可以检验的一个具体指标：", "Normal", true, "22", "2E5496"));
body.Append(MakeParagraph("（不是"学到了什么"，而是具体的变化，例如："我能独立完成一本带教手册的框架设计"或"我带出了一位能独立上岗的新人"）", "Normal", false, "22", "666666", true));

// ===== 附录 =====
body.Append(MakeHeading("附录一：工具速查", 1));

string[,] toolCells = {
    { "工具名称", "工具用途", "使用时机", "填/查需要的时间" },
    { "学员起点评估工具", "快速了解学员的底子，制定个性化带教计划", "接到带教任务后，第一次见面时", "10～15分钟" },
    { "分阶段带教检查表", "每个阶段结束时，检查"该教的教了没、该验收的验了没"", "每个阶段末尾", "3～5分钟" },
    { "带教话术卡", "高频带教场景的标准话术，拿来就能用", "布置任务、纠错反馈、激励、困难沟通时", "1～2分钟/条" },
    { "带教日志模板", "每日/每周记录带教进展，留痕可查", "每天带教结束后", "3～5分钟/天" },
    { "阶段评估表", "每个阶段验收时的结构化评估工具", "阶段切换前使用", "10～15分钟" },
    { "常见问题速查表", "按"学员出现XX情况→可能原因→应对策略"组织", "遇到问题时", "1～3分钟/条" }
};
body.Append(CreateFormTable(toolCells, 4));

body.Append(MakeHeading("附录二：术语表", 1));

string[,] termCells = {
    { "术语", "定义" },
    { "带教手册", "带教人工位上随手能翻的"教学工具书"，回答"怎么教会别人做这件事"" },
    { "六个核心问题", "教什么/按什么顺序教/怎么教/怎么知道学会了/遇到问题怎么办/过程怎么管" },
    { "三类人群", "新人代表（学员视角）、优秀带教人（经验视角）、管理者（组织标准视角）" },
    { "全景图", "带教内容清单+分类+优先级+依赖关系，回答"教什么、先教什么"" },
    { "分阶段带教计划", "按阶段划分，每个阶段有目标、方法和里程碑验收" },
    { "五步优化法", "共鸣唤醒→场景还原→原理透传→行动锚点→价值升华" },
    { "人类溢价", "AI无法替代的人类独特价值：判断力、情境感、创造性、责任感" }
};
body.Append(CreateFormTable(termCells, 2));

// ===== 结尾 =====
body.Append(new Paragraph(new Run(new Break { Type = BreakValues.Page })));

var endTitle = new Paragraph();
var endTitlePr = new ParagraphProperties();
endTitlePr.Append(new Justification { Val = JustificationValues.Center });
endTitle.Append(endTitlePr);
var endTitleRun = new Run();
endTitleRun.Append(MakeRpr(true, "36", "1F3864"));
endTitleRun.Append(new Text { Text = "致出发的你" });
endTitle.Append(endTitleRun);
body.Append(endTitle);

body.Append(MakeParagraph("", "Normal", false, "22", "333333"));

body.Append(MakeParagraph("你用三天时间，走完了这本手册的开发之旅。", "Normal", false, "22", "333333"));
body.Append(MakeParagraph("这不是一套理论，而是一套可以从明天起就开始用的工作方式。你在课堂上完成的每一张表单、每一道练习、每一个产出，都是真实的成果，不是作业。", "Normal", false, "22", "333333"));

body.Append(MakeParagraph("", "Normal", false, "22", "333333"));

body.Append(MakeParagraph("带教是一件需要情感投入的事。这本手册的真正价值，不在于它的内容有多完整，而在于你——愿意把"带得好"从一个人的经验，变成任何人都能照着用的工具。", "Normal", false, "22", "333333"));

body.Append(MakeParagraph("", "Normal", false, "22", "333333"));

var quote2P = new Paragraph();
var quote2PPr = new ParagraphProperties();
quote2PPr.Append(new Justification { Val = JustificationValues.Center });
quote2P.Append(quote2PPr);
var quote2Run = new Run();
quote2Run.Append(MakeRpr(false, "24", "2E5496", true));
quote2Run.Append(new Text { Text = "领先一步，枪打出头鸟；落后半步，别人牵牛我拔桩；领先半步，吃尽红利。" });
quote2P.Append(quote2Run);
body.Append(quote2P);

body.Append(MakeParagraph("", "Normal", false, "22", "333333"));

body.Append(MakeParagraph("这就是组织经验传承的意义。", "Normal", true, "22", "1F3864"));
body.Append(MakeParagraph("恭喜你完成了本次工作坊！", "Normal", false, "22", "333333"));

// ===== SECTION PROPERTIES =====
var sectPr = new SectionProperties();
sectPr.Append(new PageSize { Width = 11906u, Height = 16838u }); // A4
sectPr.Append(new PageMargin { Top = 1440u, Bottom = 1440u, Left = 1440u, Right = 1440u, Header = 720u, Footer = 720u });
body.Append(sectPr);

// Save
mainPart.Document.Save();

Console.WriteLine($"Document created: {outputPath}");
Console.WriteLine("Done!");
