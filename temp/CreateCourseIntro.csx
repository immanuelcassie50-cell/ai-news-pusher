#r "nuget: DocumentFormat.OpenXml, 3.2.0"

using DocumentFormat.OpenXml;
using DocumentFormat.OpenXml.Packaging;
using DocumentFormat.OpenXml.Wordprocessing;

var outputPath = @"D:/新课开发/职业生涯和画布/校招导师赋能：用一张画布构建深度辅导框架/完整课程包/课程大纲/对外大纲（课程介绍）.docx";

using var doc = WordprocessingDocument.Create(outputPath, WordprocessingDocumentType.Document);
var mainPart = doc.MainDocumentPart!;
if (mainPart.Document.Body == null)
{
    mainPart.Document.Append(new Body());
}
var body = mainPart.Document.Body;

// --- Document Defaults ---
var stylesPart = mainPart.AddNewPart<StyleDefinitionsPart>();
stylesPart.Styles = new Styles();
var styles = stylesPart.Styles!;
CreateStyles(styles);
stylesPart.Styles.Save();

// --- Page Setup ---
var sectPr = new SectionProperties();
sectPr.Append(new PageSize { Width = 11906U, Height = 16838U }); // A4
sectPr.Append(new PageMargin { Top = 1440, Bottom = 1440, Left = 1440U, Right = 1440U, Header = 720U, Footer = 720U });

// =============================================================================
// COVER PAGE
// =============================================================================
body.Append(P("校招导师赋能", "Title", center: true));
body.Append(P("用一张画布构建深度辅导框架", "Subtitle", center: true));
body.Append(P(" ", "Normal"));
body.Append(P(" ", "Normal"));
body.Append(P("课程介绍", "Normal", center: true));
body.Append(P(" ", "Normal"));
body.Append(P(" ", "Normal"));
body.Append(P("适用客户：国企/央企校招导师培训 | 金融机构师徒制 | 科技公司新人带教", "Normal", center: true));
body.Append(P(" ", "Normal"));
body.Append(P("版本：1.0", "Normal", center: true));

// Page break after cover
body.Append(P(" ", "Normal", pageBreak: true));

// =============================================================================
// 一、课程定位
// =============================================================================
body.Append(H1("一、课程定位"));
body.Append(H2("一句话定位"));
body.Append(P("一门帮助校招导师从"凭经验带人"切换到"用框架辅导人"的方法课——用一张诊断画布读懂新人、设计辅导动作并形成闭环。", "Quote"));

body.Append(H2("解决的问题"));
body.Append(Bullet("校招新人"参差不齐"——同样的培养机制，为什么有人三个月达标，有人一年还是"扶不起来"？"));
body.Append(Bullet("导师"凭直觉辅导"——发现学员有问题，但不知道从哪里切入，东一榔头西一棒子"));
body.Append(Bullet("辅导"石沉大海"——导师很用心，学员也感动，但三个月后说不出学员到底进步了多少"));
body.Append(Bullet("经验"难以复制"——好导师带出来的徒弟呱呱叫，换个导师就"碰运气""));

// =============================================================================
// 二、目标学员
// =============================================================================
body.Append(H1("二、目标学员"));

body.Append(H2("核心学员"));
body.Append(Bullet("国企/央企校招导师"));
body.Append(Bullet("金融机构师徒制中的指导人"));
body.Append(Bullet("科技公司新人带教负责人"));

body.Append(H2("学员画像"));
body.Append(Bullet("有带校招新人的实际任务"));
body.Append(Bullet("希望从"凭经验"升级到"有框架""));
body.Append(Bullet("愿意用真实案例参与实操"));

// =============================================================================
// 三、学员收益
// =============================================================================
body.Append(H1("三、学员收益"));

body.Append(H2("能力收益"));
body.Append(Numbered("1", "看得准——用冰山模型系统理解新人，从"看行为"升级到"看动机""));
body.Append(Numbered("2", "治得准——用差距诊断画布区分技能/知识/态度差距，不同差距不同疗法"));
body.Append(Numbered("3", "落得实——用辅导动作设计表让每次辅导都具体、可执行、有反馈"));
body.Append(Numbered("4", "闭得环——用跟进复盘画布建立辅导闭环，让辅导结果可衡量"));

body.Append(H2("工具收益"));
body.Append(Bullet("带走一套完整的深度辅导画布（基于真实学员的完整辅导案例）"));
body.Append(Bullet("带走四张可立即使用的工具：新人画像冰山图、差距诊断画布、辅导动作设计表、跟进复盘画布"));
body.Append(Bullet("带走一套可复制的辅导方法论，后续带任何新人都可以用"));

// =============================================================================
// 四、课程内容概览
// =============================================================================
body.Append(H1("四、课程内容概览"));

body.Append(H2("课程框架：一画四步"));

// Create a simple 4-cell table for the framework
body.Append(FrameworkTable(
    new[] { "模块", "核心内容", "工具产出" },
    new[] {
        new[] { "第一步：看人", "校招新人的三重差异分析\n冰山模型五层次解读", "新人画像冰山图" },
        new[] { "第二步：诊断差距", "三类差距识别\n优先级判定矩阵", "差距诊断画布" },
        new[] { "第三步：设计动作", "辅导动作四要素\n教练式提问 vs 告知式建议", "辅导动作设计表" },
        new[] { "第四步：跟进复盘", "跟进机制建立\n结构化复盘七步法", "跟进复盘画布" },
    }
));

body.Append(P(" ", "Normal"));
body.Append(P("全课用一张"深度辅导画布"串联四个模块，学员最终产出一份完整的辅导案例，可在实际工作中直接使用。", "Note"));

// =============================================================================
// 五、课程时长
// =============================================================================
body.Append(H1("五、课程时长"));

body.Append(H2("完整版：1天（6小时）"));

var timeTable = TimeTable(
    new[] { "时间段", "内容", "时长" },
    new[] {
        new[] { "上午", "第一章：辅导的起点（看人）\n第二章：诊断差距", "90分钟\n90分钟" },
        new[] { "下午", "第三章：设计辅导动作\n第四章：跟进与复盘\n第五章：综合实战与路演", "120分钟\n90分钟\n90分钟" },
    }
);
body.Append(timeTable);
body.Append(P(" ", "Normal"));
body.Append(H2("半天版：3小时（压缩版）"));
body.Append(Bullet("适合工作节奏紧张、无法安排全天培训的企业"));
body.Append(Bullet("保留核心工具教学和角色扮演，压缩分享环节"));

// =============================================================================
// 六、交付形式
// =============================================================================
body.Append(H1("六、交付形式"));

body.Append(H2("学员配套"));
body.Append(Bullet("课程工作手册（含所有工具模板）"));
body.Append(Bullet("工具速查卡（可撕下随身携带）"));
body.Append(Bullet("完整版深度辅导画布（课堂产出）"));

body.Append(H2("讲师配套"));
body.Append(Bullet("完整版课程幻灯片"));
body.Append(Bullet("讲师手册（含教学指南、示范案例）"));
body.Append(Bullet("学员工具电子版（可打印）"));

body.Append(H2("交付方式"));
body.Append(Bullet("线下面授（首选）"));
body.Append(Bullet("线上直播+工作坊（支持异地学员）"));

// =============================================================================
// FOOTER
// =============================================================================
body.Append(P(" ", "Normal", pageBreak: true));
body.Append(P("如需进一步沟通课程细节，请联系课程顾问", "Normal", center: true));
body.Append(P("课程版权归属：罗宏伟 | 版本1.0", "Normal", center: true));

// Append section properties
body.Append(sectPr);

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

void CreateStyles(Styles styles)
{
    // Normal style
    var normal = new Style { Type = StyleValues.Paragraph, StyleId = "Normal", Default = true };
    normal.Append(new StyleName { Val = "Normal" });
    normal.Append(new PrimaryStyle());
    var normalPPr = new StyleParagraphProperties();
    normalPPr.Append(new Spacing { After = 160, Line = 276, LineRule = LineSpacingRuleValues.Auto });
    normal.Append(normalPPr);
    var normalRPr = new StyleRunProperties();
    normalRPr.Append(new RunFonts { Ascii = "Calibri", HighAnsi = "Calibri", EastAsia = "SimSun", ComplexScript = "Arial" });
    normalRPr.Append(new FontSize { Val = "22" });
    normalRPr.Append(new Color { Val = "333333" });
    normal.Append(normalRPr);
    styles.Append(normal);

    // Title style
    var title = new Style { Type = StyleValues.Paragraph, StyleId = "Title" };
    title.Append(new StyleName { Val = "Title" });
    title.Append(new BasedOn { Val = "Normal" });
    var titlePPr = new StyleParagraphProperties();
    titlePPr.Append(new Justification { Val = JustificationValues.Center });
    titlePPr.Append(new Spacing { After = 80 });
    title.Append(titlePPr);
    var titleRPr = new StyleRunProperties();
    titleRPr.Append(new Bold());
    titleRPr.Append(new FontSize { Val = "52" });
    titleRPr.Append(new Color { Val = "1F3864" });
    title.Append(titleRPr);
    styles.Append(title);

    // Subtitle style
    var subtitle = new Style { Type = StyleValues.Paragraph, StyleId = "Subtitle" };
    subtitle.Append(new StyleName { Val = "Subtitle" });
    subtitle.Append(new BasedOn { Val = "Normal" });
    var subtitlePPr = new StyleParagraphProperties();
    subtitlePPr.Append(new Justification { Val = JustificationValues.Center });
    subtitlePPr.Append(new Spacing { After = 320 });
    subtitle.Append(subtitlePPr);
    var subtitleRPr = new StyleRunProperties();
    subtitleRPr.Append(new FontSize { Val = "30" });
    subtitleRPr.Append(new Color { Val = "4472C4" });
    subtitle.Append(subtitleRPr);
    styles.Append(subtitle);

    // Heading1
    var h1 = new Style { Type = StyleValues.Paragraph, StyleId = "Heading1" };
    h1.Append(new StyleName { Val = "heading 1" });
    h1.Append(new BasedOn { Val = "Normal" });
    h1.Append(new Next { Val = "Normal" });
    var h1PPr = new StyleParagraphProperties();
    h1PPr.Append(new KeepNext());
    h1PPr.Append(new KeepLines());
    h1PPr.Append(new Spacing { Before = 480, After = 160 });
    h1PPr.Append(new OutlineLvl { Val = 0 });
    h1.Append(h1PPr);
    var h1RPr = new StyleRunProperties();
    h1RPr.Append(new Bold());
    h1RPr.Append(new FontSize { Val = "40" });
    h1RPr.Append(new Color { Val = "1F3864" });
    h1.Append(h1RPr);
    styles.Append(h1);

    // Heading2
    var h2 = new Style { Type = StyleValues.Paragraph, StyleId = "Heading2" };
    h2.Append(new StyleName { Val = "heading 2" });
    h2.Append(new BasedOn { Val = "Normal" });
    h2.Append(new Next { Val = "Normal" });
    var h2PPr = new StyleParagraphProperties();
    h2PPr.Append(new KeepNext());
    h2PPr.Append(new KeepLines());
    h2PPr.Append(new Spacing { Before = 360, After = 120 });
    h2PPr.Append(new OutlineLvl { Val = 1 });
    h2.Append(h2PPr);
    var h2RPr = new StyleRunProperties();
    h2RPr.Append(new Bold());
    h2RPr.Append(new FontSize { Val = "32" });
    h2RPr.Append(new Color { Val = "1F3864" });
    h2.Append(h2RPr);
    styles.Append(h2);

    // Heading3
    var h3 = new Style { Type = StyleValues.Paragraph, StyleId = "Heading3" };
    h3.Append(new StyleName { Val = "heading 3" });
    h3.Append(new BasedOn { Val = "Normal" });
    h3.Append(new Next { Val = "Normal" });
    var h3PPr = new StyleParagraphProperties();
    h3PPr.Append(new KeepNext());
    h3PPr.Append(new Spacing { Before = 240, After = 80 });
    h3PPr.Append(new OutlineLvl { Val = 2 });
    h3.Append(h3PPr);
    var h3RPr = new StyleRunProperties();
    h3RPr.Append(new Bold());
    h3RPr.Append(new FontSize { Val = "26" });
    h3RPr.Append(new Color { Val = "1F3864" });
    h3.Append(h3RPr);
    styles.Append(h3);

    // ListParagraph
    var listP = new Style { Type = StyleValues.Paragraph, StyleId = "ListParagraph" };
    listP.Append(new StyleName { Val = "List Paragraph" });
    listP.Append(new BasedOn { Val = "Normal" });
    var listPPr = new StyleParagraphProperties();
    listPPr.Append(new Spacing { After = 60, Before = 0 });
    listP.Append(listPPr);
    var listRPr = new StyleRunProperties();
    listRPr.Append(new FontSize { Val = "22" });
    listP.Append(listRPr);
    styles.Append(listP);

    // Quote style
    var quote = new Style { Type = StyleValues.Paragraph, StyleId = "Quote" };
    quote.Append(new StyleName { Val = "Quote" });
    quote.Append(new BasedOn { Val = "Normal" });
    var quotePPr = new StyleParagraphProperties();
    quotePPr.Append(new Spacing { After = 200, Before = 200 });
    quotePPr.Append(new Indentation { Left = "720", Right = "720" });
    quote.Append(quotePPr);
    var quoteRPr = new StyleRunProperties();
    quoteRPr.Append(new Italic());
    quoteRPr.Append(new Color { Val = "4472C4" });
    quote.Append(quoteRPr);
    styles.Append(quote);

    // Note style
    var note = new Style { Type = StyleValues.Paragraph, StyleId = "Note" };
    note.Append(new StyleName { Val = "Note" });
    note.Append(new BasedOn { Val = "Normal" });
    var notePPr = new StyleParagraphProperties();
    notePPr.Append(new Spacing { After = 160 });
    note.Append(notePPr);
    var noteRPr = new StyleRunProperties();
    noteRPr.Append(new Italic());
    noteRPr.Append(new Color { Val = "666666" });
    note.Append(noteRPr);
    styles.Append(note);
}

// Paragraph helpers
static Paragraph P(string text, string styleId = "Normal", bool center = false, bool pageBreak = false)
{
    var pPr = new ParagraphProperties();
    pPr.Append(new ParagraphStyleId { Val = styleId });
    if (center) pPr.Append(new Justification { Val = JustificationValues.Center });
    if (pageBreak) pPr.Append(new PageBreakBefore());
    var para = new Paragraph();
    para.Append(pPr);
    if (!string.IsNullOrEmpty(text))
        para.Append(new Run(new Text(text)));
    return para;
}

static Paragraph H1(string text) => P(text, "Heading1", pageBreak: true);
static Paragraph H2(string text) => P(text, "Heading2");
static Paragraph H3(string text) => P(text, "Heading3");

static Paragraph Bullet(string text)
{
    var pPr = new ParagraphProperties();
    pPr.Append(new ParagraphStyleId { Val = "ListParagraph" });
    var para = new Paragraph();
    para.Append(pPr);
    para.Append(new Run(new Text("• " + text)));
    return para;
}

static Paragraph Numbered(string number, string text)
{
    var pPr = new ParagraphProperties();
    pPr.Append(new ParagraphStyleId { Val = "ListParagraph" });
    var para = new Paragraph();
    para.Append(pPr);
    para.Append(new Run(new Text(number + ". " + text)));
    return para;
}

static Table FrameworkTable(string[] headers, string[][] rows)
{
    return GenericTable(headers, rows, new[] { 1800, 5000, 2500 });
}

static Table TimeTable(string[] headers, string[][] rows)
{
    return GenericTable(headers, rows, new[] { 1500, 6000, 1800 });
}

static Table GenericTable(string[] headers, string[][] rows, int[] widths)
{
    var table = new Table();
    var tblPr = new TableProperties();
    tblPr.Append(new TableWidth { Width = "10000", Type = TableWidthUnitValues.Pct });
    tblPr.Append(new TableLayout { Type = TableLayoutValues.Fixed });
    var borders = new TableBorders();
    borders.Append(new TopBorder { Val = BorderValues.Single, Size = 8U, Color = "1F3864" });
    borders.Append(new BottomBorder { Val = BorderValues.Single, Size = 8U, Color = "1F3864" });
    borders.Append(new LeftBorder { Val = BorderValues.Single, Size = 4U, Color = "BFBFBF" });
    borders.Append(new RightBorder { Val = BorderValues.Single, Size = 4U, Color = "BFBFBF" });
    borders.Append(new InsideHorizontalBorder { Val = BorderValues.Single, Size = 4U, Color = "BFBFBF" });
    borders.Append(new InsideVerticalBorder { Val = BorderValues.Single, Size = 4U, Color = "BFBFBF" });
    tblPr.Append(borders);
    tblPr.Append(new TableJustification { Val = TableRowAlignmentValues.Center });
    table.Append(tblPr);

    var grid = new TableGrid();
    foreach (var w in widths)
        grid.Append(new GridColumn { Width = (w * 20).ToString() });
    table.Append(grid);

    // Header row
    var headerRow = new TableRow();
    for (int i = 0; i < headers.Length; i++)
    {
        var cell = new TableCell();
        var cellPr = new TableCellProperties();
        cellPr.Append(new TableCellWidth { Width = (widths[i] * 20).ToString(), Type = TableWidthUnitValues.Dxa });
        cellPr.Append(new Shading { Fill = "1F3864" });
        cell.Append(cellPr);
        var para = new Paragraph();
        var pPr = new ParagraphProperties();
        pPr.Append(new Justification { Val = JustificationValues.Center });
        para.Append(pPr);
        var run = new Run(new Text(headers[i]));
        run.RunProperties = new RunProperties();
        run.RunProperties.Append(new Bold());
        run.RunProperties.Append(new Color { Val = "FFFFFF" });
        run.RunProperties.Append(new FontSize { Val = "22" });
        para.Append(run);
        cell.Append(para);
        headerRow.Append(cell);
    }
    table.Append(headerRow);

    // Data rows
    foreach (var row in rows)
    {
        var tr = new TableRow();
        for (int i = 0; i < row.Length; i++)
        {
            var cell = new TableCell();
            var cellPr = new TableCellProperties();
            cellPr.Append(new TableCellWidth { Width = (widths[i] * 20).ToString(), Type = TableWidthUnitValues.Dxa });
            if (i == 0)
                cellPr.Append(new Shading { Fill = "F2F2F2" });
            cell.Append(cellPr);
            var para = new Paragraph();
            var pPr = new ParagraphProperties();
            pPr.Append(new Justification { Val = i == 0 ? JustificationValues.Center : JustificationValues.Left });
            para.Append(pPr);
            var run = new Run(new Text(row[i]));
            run.RunProperties = new RunProperties();
            run.RunProperties.Append(new FontSize { Val = "20" });
            if (i == 0)
                run.RunProperties.Append(new Bold());
            para.Append(run);
            cell.Append(para);
            tr.Append(cell);
        }
        table.Append(tr);
    }
    return table;
}
