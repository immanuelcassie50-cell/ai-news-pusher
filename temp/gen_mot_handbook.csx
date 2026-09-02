#r "nuget: DocumentFormat.OpenXml, 3.2.0"

using DocumentFormat.OpenXml;
using DocumentFormat.OpenXml.Packaging;
using DocumentFormat.OpenXml.Wordprocessing;

string outputPath = "D:/CC/temp/output_handbook.docx";

string dir = Path.GetDirectoryName(outputPath);
if (!string.IsNullOrEmpty(dir) && !Directory.Exists(dir))
    Directory.CreateDirectory(dir);

// Colors
string primaryColor = "1F3864";
string accentColor = "2E75B6";
string textColor = "333333";
string lightGray = "F2F2F2";
string headerBg = "4472C4";
string white = "FFFFFF";

// Fonts
string bodyFont = "Calibri";
string headingFont = "Calibri Light";
string cjkFont = "Microsoft YaHei";

using (WordprocessingDocument doc = WordprocessingDocument.Create(outputPath, WordprocessingDocumentType.Document)) {
    MainDocumentPart mainPart = doc.AddMainDocumentPart();
    mainPart.Document = new Document(new Body());

    Body body = mainPart.Document.Body;

// Page settings
SectionProperties sectPr = new SectionProperties(
    new PageSize { Width = 11906, Height = 16838 },
    new PageMargin { Top = 1440, Right = 1440, Bottom = 1440, Left = 1440, Header = 720, Footer = 720 }
);

// Helper: Create heading paragraph
Paragraph CreateHeading(string text, int level, bool pageBreak = false) {
    Paragraph p = new Paragraph();
    ParagraphProperties pPr = new ParagraphProperties();
    pPr.Append(new SpacingBetweenLines {
        Before = level == 1 ? "480" : level == 2 ? "360" : "240",
        After = "120",
        Line = "276",
        LineRule = LineSpacingRuleValues.Auto
    });
    if (pageBreak) pPr.Append(new PageBreakBefore());
    p.Append(pPr);

    Run r = new Run();
    RunProperties rPr = new RunProperties();
    rPr.Append(new RunFonts { Ascii = headingFont, HighAnsi = headingFont, EastAsia = cjkFont });
    rPr.Append(new Bold());
    rPr.Append(new Color { Val = primaryColor });

    int fontSize = level == 1 ? 28 : level == 2 ? 24 : 22;
    rPr.Append(new FontSize { Val = (fontSize * 2).ToString() });
    rPr.Append(new FontSizeComplexScript { Val = (fontSize * 2).ToString() });

    r.Append(rPr);
    r.Append(new Text(text));
    p.Append(r);

    return p;
}

// Helper: Create body paragraph
Paragraph CreateBody(string text, bool indent = false) {
    Paragraph p = new Paragraph();
    ParagraphProperties pPr = new ParagraphProperties();
    pPr.Append(new SpacingBetweenLines { After = "160", Line = "276", LineRule = LineSpacingRuleValues.Auto });
    if (indent) pPr.Append(new Indentation { FirstLineChars = 200 });
    p.Append(pPr);

    Run r = new Run();
    RunProperties rPr = new RunProperties();
    rPr.Append(new RunFonts { Ascii = bodyFont, HighAnsi = bodyFont, EastAsia = cjkFont });
    rPr.Append(new Color { Val = textColor });
    rPr.Append(new FontSize { Val = "22" });
    rPr.Append(new FontSizeComplexScript { Val = "22" });
    r.Append(rPr);
    r.Append(new Text(text) { Space = SpaceProcessingModeValues.Preserve });
    p.Append(r);

    return p;
}

// Helper: Create bullet point
Paragraph CreateBullet(string text, int level = 0) {
    Paragraph p = new Paragraph();
    ParagraphProperties pPr = new ParagraphProperties();
    pPr.Append(new SpacingBetweenLines { After = "60", Line = "276", LineRule = LineSpacingRuleValues.Auto });
    int leftIndent = 720 + (level * 360);
    int hangingIndent = 360;
    pPr.Append(new Indentation { Left = leftIndent.ToString(), Hanging = hangingIndent.ToString() });
    p.Append(pPr);

    Run r = new Run();
    RunProperties rPr = new RunProperties();
    rPr.Append(new RunFonts { Ascii = bodyFont, HighAnsi = bodyFont, EastAsia = cjkFont });
    rPr.Append(new Color { Val = textColor });
    rPr.Append(new FontSize { Val = "22" });
    r.Append(rPr);
    r.Append(new Text("• " + text) { Space = SpaceProcessingModeValues.Preserve });
    p.Append(r);

    return p;
}

// Helper: Create info box
Paragraph CreateInfoBox(string title, string content) {
    Paragraph p = new Paragraph();
    ParagraphProperties pPr = new ParagraphProperties();
    pPr.Append(new SpacingBetweenLines { Before = "200", After = "200", Line = "276", LineRule = LineSpacingRuleValues.Auto });
    pPr.Append(new ParagraphBorders(
        new LeftBorder { Val = BorderValues.Single, Size = 12, Color = accentColor }
    ));
    pPr.Append(new Indentation { Left = "360" });
    p.Append(pPr);

    if (!string.IsNullOrEmpty(title)) {
        Run r1 = new Run();
        RunProperties rPr1 = new RunProperties();
        rPr1.Append(new RunFonts { Ascii = bodyFont, HighAnsi = bodyFont, EastAsia = cjkFont });
        rPr1.Append(new Bold());
        rPr1.Append(new Color { Val = accentColor });
        rPr1.Append(new FontSize { Val = "22" });
        r1.Append(rPr1);
        r1.Append(new Text(title + " ") { Space = SpaceProcessingModeValues.Preserve });
        p.Append(r1);
    }

    Run r2 = new Run();
    RunProperties rPr2 = new RunProperties();
    rPr2.Append(new RunFonts { Ascii = bodyFont, HighAnsi = bodyFont, EastAsia = cjkFont });
    rPr2.Append(new Color { Val = textColor });
    rPr2.Append(new FontSize { Val = "22" });
    r2.Append(rPr2);
    r2.Append(new Text(content) { Space = SpaceProcessingModeValues.Preserve });
    p.Append(r2);

    return p;
}

// Helper: Create table
Table CreateTable(string[] headers, string[][] rows, int[] colWidths = null) {
    Table tbl = new Table();

    TableProperties tblPr = new TableProperties();
    tblPr.Append(new TableWidth { Width = "5000", Type = TableWidthUnitValues.Pct });
    tblPr.Append(new TableBorders(
        new TopBorder { Val = BorderValues.Single, Size = 4, Color = headerBg },
        new BottomBorder { Val = BorderValues.Single, Size = 4, Color = headerBg },
        new LeftBorder { Val = BorderValues.Single, Size = 4, Color = headerBg },
        new RightBorder { Val = BorderValues.Single, Size = 4, Color = headerBg },
        new InsideHorizontalBorder { Val = BorderValues.Single, Size = 4, Color = "CCCCCC" },
        new InsideVerticalBorder { Val = BorderValues.Single, Size = 4, Color = "CCCCCC" }
    ));
    tbl.Append(tblPr);

    TableGrid tblGrid = new TableGrid();
    for (int i = 0; i < headers.Length; i++) {
        int width = (colWidths != null && i < colWidths.Length) ? colWidths[i] : 2000;
        tblGrid.Append(new GridColumn { Width = width.ToString() });
    }
    tbl.Append(tblGrid);

    // Header row
    TableRow headerRow = new TableRow();
    for (int i = 0; i < headers.Length; i++) {
        TableCell tc = new TableCell();
        TableCellProperties tcPr = new TableCellProperties();
        tcPr.Append(new Shading { Val = ShadingPatternValues.Clear, Color = "auto", Fill = headerBg });
        tcPr.Append(new TableCellVerticalAlignment { Val = TableVerticalAlignmentValues.Center });
        tc.Append(tcPr);

        Paragraph p = new Paragraph();
        ParagraphProperties pPr = new ParagraphProperties();
        pPr.Append(new SpacingBetweenLines { After = "0" });
        p.Append(pPr);

        Run r = new Run();
        RunProperties rPr = new RunProperties();
        rPr.Append(new RunFonts { Ascii = bodyFont, HighAnsi = bodyFont, EastAsia = cjkFont });
        rPr.Append(new Bold());
        rPr.Append(new Color { Val = white });
        rPr.Append(new FontSize { Val = "20" });
        r.Append(rPr);
        r.Append(new Text(headers[i]));
        p.Append(r);

        tc.Append(p);
        headerRow.Append(tc);
    }
    tbl.Append(headerRow);

    // Data rows
    foreach (string[] rowData in rows) {
        TableRow row = new TableRow();
        for (int i = 0; i < rowData.Length; i++) {
            TableCell tc = new TableCell();
            TableCellProperties tcPr = new TableCellProperties();
            tcPr.Append(new TableCellVerticalAlignment { Val = TableVerticalAlignmentValues.Center });
            tc.Append(tcPr);

            Paragraph p = new Paragraph();
            ParagraphProperties pPr = new ParagraphProperties();
            pPr.Append(new SpacingBetweenLines { After = "0" });
            p.Append(pPr);

            Run r = new Run();
            RunProperties rPr = new RunProperties();
            rPr.Append(new RunFonts { Ascii = bodyFont, HighAnsi = bodyFont, EastAsia = cjkFont });
            rPr.Append(new Color { Val = textColor });
            rPr.Append(new FontSize { Val = "20" });
            r.Append(rPr);
            r.Append(new Text(rowData[i]));
            p.Append(r);

            tc.Append(p);
            row.Append(tc);
        }
        tbl.Append(row);
    }

    return tbl;
}

// Helper: Empty line
Paragraph EmptyLine() {
    Paragraph p = new Paragraph();
    ParagraphProperties pPr = new ParagraphProperties();
    pPr.Append(new SpacingBetweenLines { After = "80" });
    p.Append(pPr);
    return p;
}

// Helper: Create centered text
Paragraph CreateCenteredText(string text, bool bold = false, string color = null, int fontSize = 22) {
    Paragraph p = new Paragraph();
    ParagraphProperties pPr = new ParagraphProperties();
    pPr.Append(new Justification { Val = JustificationValues.Center });
    pPr.Append(new SpacingBetweenLines { After = "160" });
    p.Append(pPr);

    Run r = new Run();
    RunProperties rPr = new RunProperties();
    rPr.Append(new RunFonts { Ascii = bodyFont, HighAnsi = bodyFont, EastAsia = cjkFont });
    if (bold) rPr.Append(new Bold());
    if (color != null) rPr.Append(new Color { Val = color });
    rPr.Append(new FontSize { Val = (fontSize * 2).ToString() });
    rPr.Append(new FontSizeComplexScript { Val = (fontSize * 2).ToString() });
    r.Append(rPr);
    r.Append(new Text(text) { Space = SpaceProcessingModeValues.Preserve });
    p.Append(r);

    return p;
}

// ============ DOCUMENT CONTENT ============

// ============ COVER PAGE ============
body.Append(EmptyLine());
body.Append(EmptyLine());
body.Append(CreateCenteredText("关键时刻", true, primaryColor, 36));
body.Append(CreateCenteredText("以服务建立企业竞争优势", true, primaryColor, 32));
body.Append(EmptyLine());
body.Append(EmptyLine());
body.Append(CreateCenteredText("学员手册", false, accentColor, 28));
body.Append(EmptyLine());
body.Append(EmptyLine());
body.Append(EmptyLine());

// Course info table
Table infoTable = new Table();
TableProperties tblPr = new TableProperties();
tblPr.Append(new TableWidth { Width = "5000", Type = TableWidthUnitValues.Pct });
tblPr.Append(new TableBorders(
    new TopBorder { Val = BorderValues.Single, Size = 4, Color = accentColor },
    new BottomBorder { Val = BorderValues.Single, Size = 4, Color = accentColor },
    new LeftBorder { Val = BorderValues.Single, Size = 4, Color = accentColor },
    new RightBorder { Val = BorderValues.Single, Size = 4, Color = accentColor },
    new InsideHorizontalBorder { Val = BorderValues.Single, Size = 4, Color = "CCCCCC" }
));
infoTable.Append(tblPr);

TableGrid grid = new TableGrid();
grid.Append(new GridColumn { Width = "2500" });
grid.Append(new GridColumn { Width = "5000" });
infoTable.Append(grid);

void AddInfoRow(string label, string value) {
    TableRow row = new TableRow();
    TableCell labelCell = new TableCell();
    TableCellProperties lcPr = new TableCellProperties();
    lcPr.Append(new Shading { Val = ShadingPatternValues.Clear, Color = "auto", Fill = lightGray });
    lcPr.Append(new TableCellVerticalAlignment { Val = TableVerticalAlignmentValues.Center });
    labelCell.Append(lcPr);
    Paragraph lp = new Paragraph();
    ParagraphProperties lpPr = new ParagraphProperties();
    lpPr.Append(new SpacingBetweenLines { After = "0" });
    lpPr.Append(new Indentation { Left = "120" });
    lp.Append(lpPr);
    Run lr = new Run();
    RunProperties lrPr = new RunProperties();
    lrPr.Append(new RunFonts { Ascii = bodyFont, HighAnsi = bodyFont, EastAsia = cjkFont });
    lrPr.Append(new Bold());
    lrPr.Append(new Color { Val = primaryColor });
    lrPr.Append(new FontSize { Val = "22" });
    lr.Append(lrPr);
    lr.Append(new Text(label));
    lp.Append(lr);
    labelCell.Append(lp);
    row.Append(labelCell);

    TableCell valueCell = new TableCell();
    TableCellProperties vcPr = new TableCellProperties();
    vcPr.Append(new TableCellVerticalAlignment { Val = TableVerticalAlignmentValues.Center });
    valueCell.Append(vcPr);
    Paragraph vp = new Paragraph();
    ParagraphProperties vpPr = new ParagraphProperties();
    vpPr.Append(new SpacingBetweenLines { After = "0" });
    vpPr.Append(new Indentation { Left = "120" });
    vp.Append(vpPr);
    Run vr = new Run();
    RunProperties vrPr = new RunProperties();
    vrPr.Append(new RunFonts { Ascii = bodyFont, HighAnsi = bodyFont, EastAsia = cjkFont });
    vrPr.Append(new Color { Val = textColor });
    vrPr.Append(new FontSize { Val = "22" });
    vr.Append(vrPr);
    vr.Append(new Text(value));
    vp.Append(vr);
    valueCell.Append(vp);
    row.Append(valueCell);

    infoTable.Append(row);
}

AddInfoRow("课程时长", "2天（每天6小时，共12小时）");
AddInfoRow("目标学员", "客户经理、技术工程师、客服中心人员");
AddInfoRow("课程版本", "v1.0");

body.Append(infoTable);

body.Append(EmptyLine());
body.Append(EmptyLine());

// Quote
Paragraph quoteP = new Paragraph();
ParagraphProperties qpPr = new ParagraphProperties();
qpPr.Append(new Justification { Val = JustificationValues.Center });
qpPr.Append(new SpacingBetweenLines { Before = "400", After = "400" });
quoteP.Append(qpPr);
Run quoteR = new Run();
RunProperties quoteRPr = new RunProperties();
quoteRPr.Append(new RunFonts { Ascii = bodyFont, HighAnsi = bodyFont, EastAsia = cjkFont });
quoteRPr.Append(new Italic());
quoteRPr.Append(new Color { Val = accentColor });
quoteRPr.Append(new FontSize { Val = "24" });
quoteR.Append(quoteRPr);
quoteR.Append(new Text("\"服务的本质，是让客户感受到被理解、被尊重、被成就。\""));
quoteP.Append(quoteR);
body.Append(quoteP);

// Page break to content
body.Append(new Paragraph(new PageBreakBefore()));

// ============ TABLE OF CONTENTS ============
body.Append(CreateHeading("目 录", 1));
body.Append(EmptyLine());

string[] tocItems = new[] {
    "如何使用本手册",
    "Part 1: 理解服务，树立服务意识",
    "Part 2上: 探索 - 客户利益分析",
    "Part 2下: 探索 - 提问与聆听技术",
    "Part 3-4: 提议与行动",
    "Part 5: 确认",
    "Part 6: 总结与行动计划",
    "附录一: 关键工具速查表",
    "附录二: 术语表"
};

foreach (string item in tocItems) {
    body.Append(CreateBullet(item));
}

body.Append(new Paragraph(new PageBreakBefore()));

// ============ HOW TO USE THIS HANDBOOK ============
body.Append(CreateHeading("如何使用本手册", 1, true));

body.Append(CreateInfoBox("本手册的性质", "这不是一本讲义，不是笔记，也不是课后读物。它是你的工作台。每一个框架、每一张表单、每一道练习，都需要在课堂上完成。你做完的每一页，都是你带走的真实成果。"));

body.Append(EmptyLine());
body.Append(CreateHeading("三个使用原则", 2));

body.Append(CreateBody("原则一：带着真实任务来"));
body.Append(CreateBody("手册里所有的练习都要用你自己工作中的真实场景，不要虚构例子。真实的任务，才有真实的收获。", true));

body.Append(EmptyLine());
body.Append(CreateBody("原则二：写下来比记下来更有价值"));
body.Append(CreateBody("看懂了不等于会用，写下来才是真正内化的开始。每一道练习，都请认真完成，不要留空。", true));

body.Append(EmptyLine());
body.Append(CreateBody("原则三：这是起点，不是终点"));
body.Append(CreateBody("课程结束不是学习的终点。手册最后一章是你的行动计划——回到工作中，将每次服务都视为练习的机会。", true));

// ============ PART 1 ============
body.Append(CreateHeading("Part 1: 理解服务，树立服务意识", 1, true));

body.Append(CreateHeading("学习目标", 2));
body.Append(CreateBullet("理解服务的本质和价值"));
body.Append(CreateBullet("识别关键时刻（MOT）的概念"));
body.Append(CreateBullet("掌握以客户为中心的服务理念"));
body.Append(CreateBullet("建立主动服务意识"));

body.Append(EmptyLine());
body.Append(CreateHeading("核心概念", 2));

body.Append(CreateBody("服务的定义"));
body.Append(CreateBody("服务不仅仅是完成一项任务或提供产品，它是一种让客户感受到价值的行为。真正的服务发生在每一次与客户的接触点——我们称之为\"关键时刻\"（Moment of Truth）。", true));

body.Append(EmptyLine());
body.Append(CreateInfoBox("关键时刻（MOT）", "由北欧航空公司前CEO詹·卡尔森提出，指客户与服务组织接触的任何一个时刻，这个时刻虽然短暂，但决定了客户对服务质量的感知和整体满意度。"));

body.Append(EmptyLine());
body.Append(CreateHeading("案例：航空公司的启示", 2));
body.Append(CreateBody("北欧航空公司曾在激烈竞争中被对手超越，濒临亏损。詹·卡尔森接任后提出了一个简单却革命性的理念：\"北极星\"——让每一位员工都成为客户心中的英雄。他们发现，一个乘客从到达机场到离开机场，会经历40多个关键时刻。每一个关键时刻，都是展现服务品质的机会，也是建立忠诚度的契机。", true));

body.Append(EmptyLine());
body.Append(CreateHeading("服务的五个层级", 2));

Table serviceLevels = new Table();
TableProperties slTblPr = new TableProperties();
slTblPr.Append(new TableWidth { Width = "5000", Type = TableWidthUnitValues.Pct });
slTblPr.Append(new TableBorders(
    new TopBorder { Val = BorderValues.Single, Size = 4, Color = "CCCCCC" },
    new BottomBorder { Val = BorderValues.Single, Size = 4, Color = "CCCCCC" },
    new LeftBorder { Val = BorderValues.Single, Size = 4, Color = "CCCCCC" },
    new RightBorder { Val = BorderValues.Single, Size = 4, Color = "CCCCCC" },
    new InsideHorizontalBorder { Val = BorderValues.Single, Size = 4, Color = "CCCCCC" },
    new InsideVerticalBorder { Val = BorderValues.Single, Size = 4, Color = "CCCCCC" }
));
serviceLevels.Append(slTblPr);

TableGrid slGrid = new TableGrid();
slGrid.Append(new GridColumn { Width = "1500" });
slGrid.Append(new GridColumn { Width = "6000" });
serviceLevels.Append(slGrid);

void AddServiceLevel(int level, string name, string desc) {
    TableRow row = new TableRow();
    TableCell levelCell = new TableCell();
    TableCellProperties lcPr = new TableCellProperties();
    lcPr.Append(new Shading { Val = ShadingPatternValues.Clear, Color = "auto", Fill = level <= 2 ? headerBg : lightGray });
    lcPr.Append(new TableCellVerticalAlignment { Val = TableVerticalAlignmentValues.Center });
    levelCell.Append(lcPr);
    Paragraph lp = new Paragraph();
    ParagraphProperties lpPr = new ParagraphProperties();
    lpPr.Append(new Justification { Val = JustificationValues.Center });
    lpPr.Append(new SpacingBetweenLines { After = "0" });
    lp.Append(lpPr);
    Run lr = new Run();
    RunProperties lrPr = new RunProperties();
    lrPr.Append(new RunFonts { Ascii = bodyFont, HighAnsi = bodyFont, EastAsia = cjkFont });
    lrPr.Append(new Bold());
    lrPr.Append(new Color { Val = level <= 2 ? white : primaryColor });
    lrPr.Append(new FontSize { Val = "22" });
    lr.Append(lrPr);
    lr.Append(new Text(level.ToString()));
    lp.Append(lr);
    levelCell.Append(lp);
    row.Append(levelCell);

    TableCell nameCell = new TableCell();
    TableCellProperties ncPr = new TableCellProperties();
    ncPr.Append(new TableCellVerticalAlignment { Val = TableVerticalAlignmentValues.Center });
    nameCell.Append(ncPr);
    Paragraph np = new Paragraph();
    ParagraphProperties npPr = new ParagraphProperties();
    npPr.Append(new SpacingBetweenLines { After = "0" });
    npPr.Append(new Indentation { Left = "120" });
    np.Append(npPr);
    Run nr = new Run();
    RunProperties nrPr = new RunProperties();
    nrPr.Append(new RunFonts { Ascii = bodyFont, HighAnsi = bodyFont, EastAsia = cjkFont });
    nrPr.Append(new Bold());
    nrPr.Append(new Color { Val = primaryColor });
    nrPr.Append(new FontSize { Val = "22" });
    nr.Append(nrPr);
    nr.Append(new Text(name + "：" + desc));
    np.Append(nr);
    nameCell.Append(np);
    row.Append(nameCell);

    serviceLevels.Append(row);
}

AddServiceLevel(1, "基本合规", "满足客户明确提出的要求");
AddServiceLevel(2, "主动服务", "预见客户需求并主动满足");
AddServiceLevel(3, "个性化关怀", "根据客户特点提供定制化服务");
AddServiceLevel(4, "超越期望", "提供客户未曾期望的惊喜");
AddServiceLevel(5, "情感连接", "与客户建立深度信任和情感纽带");

body.Append(serviceLevels);

// ============ PART 2 上 ============
body.Append(CreateHeading("Part 2上: 探索 - 客户利益分析", 1, true));

body.Append(CreateHeading("学习目标", 2));
body.Append(CreateBullet("理解客户的利益诉求"));
body.Append(CreateBullet("识别内部客户和外部客户"));
body.Append(CreateBullet("掌握客户期望管理的方法"));
body.Append(CreateBullet("培养倾听能力"));

body.Append(EmptyLine());
body.Append(CreateHeading("客户利益分析", 2));

body.Append(CreateBody("客户购买的不是产品或服务本身，而是产品或服务带来的利益。我们需要从三个维度分析客户利益：", true));

body.Append(EmptyLine());
body.Append(CreateInfoBox("显性利益", "客户明确知道和期望从服务中获得的好处，如：快速响应、问题解决、质量保证等。"));
body.Append(EmptyLine());
body.Append(CreateInfoBox("隐性利益", "客户可能没有明确表达但同样重要的利益，如：被尊重的感觉、省心的体验、信任感等。"));
body.Append(EmptyLine());
body.Append(CreateInfoBox("情感利益", "服务体验带来的情感满足，如：安全感、归属感、价值感等。"));

body.Append(EmptyLine());
body.Append(CreateHeading("内部客户的概念", 2));
body.Append(CreateBody("在组织内部，下一个流程的接收者就是你的客户。理解内部客户的概念，有助于提升整体服务链条的质量。", true));

body.Append(EmptyLine());
Table internalClientTable = CreateTable(
    new[] { "内部客户类型", "服务提供者", "服务内容" },
    new[] {
        new[] { "前台→后台", "客服代表", "准确的需求信息、完整的背景" },
        new[] { "销售→交付", "客户经理", "清晰的客户期望、合理的承诺" },
        new[] { "交付→支持", "技术工程师", "完整的问题描述、必要的资源" },
        new[] { "所有层级→财务", "各部门", "准确的费用数据、及时的报销" }
    },
    new[] { 2000, 2500, 3000 }
);
body.Append(internalClientTable);

body.Append(EmptyLine());
body.Append(CreateHeading("期望管理", 2));
body.Append(CreateBody("管理客户期望是服务成功的关键。过度承诺会导致客户失望，而适当的期望设定可以建立信任。", true));

body.Append(EmptyLine());
body.Append(CreateInfoBox("期望管理的黄金法则", "永远让客户的期望略低于你能够提供的服务水平。这样每一次服务都会成为一次惊喜，而不是一次失望。"));

body.Append(EmptyLine());
body.Append(CreateHeading("倾听的五个层次", 2));

string[][] listeningLevels = new[] {
    new[] { "5", "最高层次", "站在客户角度，全面理解其情感、需求和期望" },
    new[] { "4", "专注倾听", "全神贯注，不打断，关注语言和非语言信息" },
    new[] { "3", "选择性倾听", "听到自己想听的内容，容易错过重要信息" },
    new[] { "2", "假装倾听", "表面回应，内心在想其他事情" },
    new[] { "1", "最低层次", "完全不听，只顾自己说话" }
};
Table listeningTable = CreateTable(
    new[] { "层次", "名称", "特征" },
    listeningLevels,
    new[] { 1000, 2000, 4500 }
);
body.Append(listeningTable);

// ============ PART 2 下 ============
body.Append(CreateHeading("Part 2下: 探索 - 提问与聆听技术", 1, true));

body.Append(CreateHeading("学习目标", 2));
body.Append(CreateBullet("掌握开放式提问和封闭式提问的运用场景"));
body.Append(CreateBullet("学会使用SPIN提问法挖掘客户需求"));
body.Append(CreateBullet("运用高级聆听技术深入理解客户"));
body.Append(CreateBullet("掌握异议引导的处理方法"));

body.Append(EmptyLine());
body.Append(CreateHeading("提问技术", 2));

body.Append(CreateBody("提问是了解客户需求的关键工具。不同类型的提问有不同的作用：", true));

body.Append(EmptyLine());
string[][] questionTypes = new[] {
    new[] { "封闭式", "获取确认、具体信息", "\"您希望什么时候收到？\"", "快速确认、节约时间" },
    new[] { "开放式", "了解感受、想法、原因", "\"您对这个方案有什么看法？\"", "深入了解、建立关系" },
    new[] { "探究式", "深挖问题、澄清模糊", "\"您能详细说说具体是什么情况吗？\"", "发现真实需求" },
    new[] { "组合式", "全面了解、系统分析", "结合多种提问方式", "完整的需求诊断" }
};
Table questionTable = CreateTable(
    new[] { "类型", "作用", "示例", "适用场景" },
    questionTypes,
    new[] { 1500, 2000, 3000, 2000 }
);
body.Append(questionTable);

body.Append(EmptyLine());
body.Append(CreateHeading("SPIN提问法", 2));
body.Append(CreateInfoBox("SPIN", "一种系统化的需求挖掘方法，由四种类型的提问组成：背景问题、难点问题、影响问题、价值问题。"));

body.Append(EmptyLine());
Table spinTable = CreateTable(
    new[] { "类型", "问题特征", "示例" },
    new[] {
        new[] { "S - 背景问题", "了解基本情况", "\"您目前使用什么系统？\"" },
        new[] { "P - 难点问题", "发现问题和痛点", "\"这个问题对您的工作有什么影响？\"" },
        new[] { "I - 影响问题", "探索问题后果", "\"如果不解决，会造成什么损失？\"" },
        new[] { "N - 价值问题", "挖掘解决价值", "\"如果解决了，能为您带来什么？\"" }
    },
    new[] { 2000, 2500, 3000 }
);
body.Append(spinTable);

body.Append(EmptyLine());
body.Append(CreateHeading("聆听技术", 2));

body.Append(CreateBody("高级聆听技术帮助我们更深入地理解客户：", true));
body.Append(CreateBullet("全神贯注：放下手机，保持眼神接触"));
body.Append(CreateBullet("积极回应：使用\"我理解\"、\"请继续\"等语言反馈"));
body.Append(CreateBullet("复述确认：用自己的话复述客户的意思"));
body.Append(CreateBullet("情感标注：识别并回应客户的情感状态"));
body.Append(CreateBullet("沉默运用：给客户思考和表达的空间"));

body.Append(EmptyLine());
body.Append(CreateHeading("异议引导", 2));
body.Append(CreateBody("当客户提出异议时，不要急于反驳，而是要引导客户自己看到问题的另一面。", true));

body.Append(EmptyLine());
body.Append(CreateInfoBox("异议处理四步法", "第一步：倾听——完整听取客户的异议，不打断；第二步：共情——表达对客户感受的理解；第三步：探索——询问更多信息，了解异议背后的原因；第四步：引导——用问题引导客户自己找到解决方案。"));

// ============ PART 3-4 ============
body.Append(CreateHeading("Part 3-4: 提议与行动", 1, true));

body.Append(CreateHeading("学习目标", 2));
body.Append(CreateBullet("掌握服务提议的要素和结构"));
body.Append(CreateBullet("学会根据客户情况定制服务方案"));
body.Append(CreateBullet("确保行动计划的可行性和清晰度"));
body.Append(CreateBullet("协调资源，确保承诺的兑现"));

body.Append(EmptyLine());
body.Append(CreateHeading("服务提议", 2));
body.Append(CreateBody("服务提议是将服务意识转化为具体承诺的关键环节。一个好的服务提议应该包含：", true));

body.Append(EmptyLine());
body.Append(CreateBullet("明确的服务内容：具体描述将提供的服务"));
body.Append(CreateBullet("清晰的时间表：约定服务的时间节点"));
body.Append(CreateBullet("双方的责任：明确客户和服务提供者各自的角色"));
body.Append(CreateBullet("可衡量的标准：让客户知道服务完成的标准是什么"));
body.Append(CreateBullet("风险提示：诚实告知可能的风险和限制"));

body.Append(EmptyLine());
body.Append(CreateHeading("行动计划", 2));
body.Append(CreateBody("行动计划的制定要遵循SMART原则：", true));

body.Append(EmptyLine());
Table smartTable = CreateTable(
    new[] { "要素", "含义", "示例" },
    new[] {
        new[] { "Specific（具体）", "目标明确", "\"为客户解决产品故障\"而非\"提高服务质量\"" },
        new[] { "Measurable（可衡量）", "可以量化评估", "\"在2小时内响应\"而非\"快速响应\"" },
        new[] { "Achievable（可达成）", "在能力范围内", "考虑资源、人力、时间等因素" },
        new[] { "Relevant（相关）", "与客户需求相关", "聚焦客户最关心的问题" },
        new[] { "Time-bound（有时限）", "有明确的截止日期", "\"本周五前完成\"而非\"尽快\"" }
    },
    new[] { 2000, 2500, 3000 }
);
body.Append(smartTable);

// ============ PART 5 ============
body.Append(CreateHeading("Part 5: 确认", 1, true));

body.Append(CreateHeading("学习目标", 2));
body.Append(CreateBullet("理解确认在服务中的重要性"));
body.Append(CreateBullet("掌握确认的方法和时机"));
body.Append(CreateBullet("学会处理确认后的反馈"));
body.Append(CreateBullet("将确认作为持续服务的起点"));

body.Append(EmptyLine());
body.Append(CreateHeading("确认的意义", 2));
body.Append(CreateBody("确认是服务闭环的关键步骤。通过确认，我们确保服务承诺得到兑现，客户期望得到满足，同时也为持续改进收集宝贵的反馈。", true));

body.Append(EmptyLine());
body.Append(CreateHeading("确认的时机", 2));

body.Append(CreateBody("服务前确认：", false));
body.Append(CreateBullet("明确客户对服务的期望"));
body.Append(CreateBullet("确认时间、地点、具体需求"));
body.Append(CreateBullet("告知客户将如何进行服务"));

body.Append(EmptyLine());
body.Append(CreateBody("服务中确认：", false));
body.Append(CreateBullet("阶段性进展通报"));
body.Append(CreateBullet("及时处理客户的新需求或疑虑"));
body.Append(CreateBullet("调整服务方向（如需要）"));

body.Append(EmptyLine());
body.Append(CreateBody("服务后确认：", false));
body.Append(CreateBullet("回顾完成的服务内容"));
body.Append(CreateBullet("确认客户满意度"));
body.Append(CreateBullet("记录客户反馈和改进建议"));
body.Append(CreateBullet("探讨后续服务需求"));

body.Append(EmptyLine());
body.Append(CreateHeading("确认的方法", 2));
body.Append(CreateBullet("口头确认：适合简单的服务内容和即时反馈"));
body.Append(CreateBullet("书面确认：适合重要服务承诺和正式协议"));
body.Append(CreateBullet("邮件确认：适合需要记录和追溯的场景"));
body.Append(CreateBullet("面对面确认：适合复杂问题和关系建立"));

// ============ PART 6 ============
body.Append(CreateHeading("Part 6: 总结与行动计划", 1, true));

body.Append(CreateHeading("课程核心框架", 2));
body.Append(CreateBody("关键时刻服务模式（MOT Service Model）：", true));

body.Append(EmptyLine());
Table motTable = CreateTable(
    new[] { "阶段", "核心动作", "关键技能" },
    new[] {
        new[] { "探索（Explore）", "了解客户需求、利益、期望", "提问技术、聆听技术、利益分析" },
        new[] { "提议（Propose）", "提出服务方案", "方案设计、期望管理、SMART规划" },
        new[] { "行动（Action）", "执行服务承诺", "资源协调、时间管理、问题解决" },
        new[] { "确认（Confirm）", "确保承诺兑现", "确认检查、反馈收集、关系维护" }
    },
    new[] { 2000, 3000, 3000 }
);
body.Append(motTable);

body.Append(EmptyLine());
body.Append(CreateHeading("学员行动计划", 2));
body.Append(CreateBody("请根据课程所学，制定您的30天服务提升行动计划：", true));

body.Append(EmptyLine());
body.Append(CreateInfoBox("行动计划要点", "选择1-2个在工作中最常见的服务场景，应用课程中学到的服务模式。设定具体、可衡量的改进目标，并记录每周的进展和反思。"));

body.Append(EmptyLine());
body.Append(CreateHeading("反思问题", 2));
body.Append(CreateBullet("在过去一周的服务中，你印象最深刻的\"关键时刻\"是什么？"));
body.Append(CreateBullet("你在服务中最大的优势是什么？有什么可以进一步强化的？"));
body.Append(CreateBullet("你希望在哪些服务场景中应用今天学到的方法？"));
body.Append(CreateBullet("有什么障碍可能阻碍你应用这些技能？如何克服？"));

// ============ APPENDIX 1 ============
body.Append(CreateHeading("附录一: 关键工具速查表", 1, true));

body.Append(CreateHeading("服务利益分析表", 2));
Table benefitAnalysis = CreateTable(
    new[] { "客户类型", "显性利益", "隐性利益", "情感利益" },
    new[] {
        new[] { "外部客户", "", "", "" },
        new[] { "内部客户", "", "", "" }
    },
    new[] { 2000, 2500, 2500, 2000 }
);
body.Append(benefitAnalysis);

body.Append(EmptyLine());
body.Append(CreateHeading("客户期望管理检查表", 2));
body.Append(CreateBullet("是否清晰了解了客户的期望？ □"));
body.Append(CreateBullet("是否对服务范围进行了明确界定？ □"));
body.Append(CreateBullet("是否诚实告知了服务的限制和风险？ □"));
body.Append(CreateBullet("是否设定了合理的期望值？ □"));
body.Append(CreateBullet("客户是否对服务方案表示认可？ □"));

body.Append(EmptyLine());
body.Append(CreateHeading("SPIN提问练习表", 2));
Table spinPractice = CreateTable(
    new[] { "客户场景", "背景问题(S)", "难点问题(P)", "影响问题(I)", "价值问题(N)" },
    new[] {
        new[] { "场景1", "", "", "", "" },
        new[] { "场景2", "", "", "", "" }
    },
    new[] { 1500, 2000, 2000, 2000, 2000 }
);
body.Append(spinPractice);

// ============ APPENDIX 2 ============
body.Append(CreateHeading("附录二: 术语表", 1, true));

Table glossary = CreateTable(
    new[] { "术语", "英文", "定义" },
    new[] {
        new[] { "关键时刻", "Moment of Truth (MOT)", "客户与服务组织接触的任何一个时刻，决定客户对服务质量的感知" },
        new[] { "服务利润链", "Service Profit Chain", "揭示服务企业利润与员工满意度和忠诚度、客户满意度之间关系的理论" },
        new[] { "内部客户", "Internal Customer", "组织内部下一个流程的接收者，如前台与后台之间的关系" },
        new[] { "期望管理", "Expectation Management", "通过设定和管理客户期望来提高客户满意度的实践" },
        new[] { "服务蓝图", "Service Blueprint", "以可视化方式描述服务过程的图表，包括客户行为、前台接触、后台支持等" },
        new[] { "客户满意度", "Customer Satisfaction", "客户对产品或服务满足其期望程度的评价" },
        new[] { "服务承诺", "Service Promise", "企业对客户服务质量和范围的正式承诺" },
        new[] { "服务闭环", "Service Loop", "从服务准备到执行再到确认的完整服务过程" }
    },
    new[] { 2000, 2500, 4000 }
);
body.Append(glossary);

// ============ FOOTER ============
body.Append(EmptyLine());
body.Append(EmptyLine());
Paragraph footerP = new Paragraph();
ParagraphProperties fpPr = new ParagraphProperties();
fpPr.Append(new Justification { Val = JustificationValues.Center });
fpPr.Append(new SpacingBetweenLines { Before = "600" });
footerP.Append(fpPr);
Run footerR = new Run();
RunProperties footerRPr = new RunProperties();
footerRPr.Append(new RunFonts { Ascii = bodyFont, HighAnsi = bodyFont, EastAsia = cjkFont });
footerRPr.Append(new Italic());
footerRPr.Append(new Color { Val = "666666" });
footerRPr.Append(new FontSize { Val = "18" });
footerR.Append(footerRPr);
footerR.Append(new Text("版权所有 · 本手册仅供本课程学员使用"));
footerP.Append(footerR);
body.Append(footerP);

// Add section properties
body.Append(sectPr);

// Save document
    mainPart.Document.Save();

    Console.WriteLine("Document created successfully: " + outputPath);
    Console.WriteLine("File size: " + new FileInfo(outputPath).Length + " bytes");
}
