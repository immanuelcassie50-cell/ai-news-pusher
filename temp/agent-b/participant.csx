#r "nuget: DocumentFormat.OpenXml, 3.2.0"

using DocumentFormat.OpenXml;
using DocumentFormat.OpenXml.Packaging;
using DocumentFormat.OpenXml.Wordprocessing;
using System.IO;

string outputPath = @"D:\2026年课程\竞越\一线管理者的五项关键\补充课程包\02-学员手册\学员手册_完整版.docx";

// ---------- helpers ----------
string CN(string en, string cn) => cn; // we directly use CN content

void SetRun(OpenXmlElement parent, string text, RunProperties rPr)
{
    var r = new Run(rPr?.CloneNode(true), new Text(text) { Space = SpaceProcessingModeValues.Preserve });
    parent.AppendChild(r);
}

Paragraph P(string text = null, JustificationValues? jc = null, ParagraphProperties pPr = null)
{
    var p = new Paragraph();
    var pp = pPr?.CloneNode(true) as ParagraphProperties ?? new ParagraphProperties();
    if (jc.HasValue) pp.Append(new Justification { Val = jc.Value });
    if (pp.HasChildren || jc.HasValue) p.AppendChild(pp);
    if (text != null) p.AppendChild(new Run(new Text(text) { Space = SpaceProcessingModeValues.Preserve }));
    return p;
}

RunProperties RPr(string fontCN, string fontEN, int halfPt, bool bold = false, string color = null)
{
    var rPr = new RunProperties();
    var rf = new RunFonts();
    rf.Ascii = fontEN;
    rf.EastAsia = fontCN;
    rf.ComplexScript = fontEN;
    rPr.Append(rf);
    rPr.Append(new FontSize { Val = halfPt.ToString() });
    rPr.Append(new FontSizeComplexScript { Val = halfPt.ToString() });
    if (bold) { rPr.Append(new Bold()); rPr.Append(new BoldComplexScript()); }
    if (color != null) rPr.Append(new Color { Val = color });
    return rPr;
}

Paragraph Heading1(string text)
{
    var p = new Paragraph();
    var pPr = new ParagraphProperties();
    pPr.Append(new ParagraphStyleId { Val = "Heading1" });
    pPr.Append(new SpacingBetweenLines { Before = "480", After = "240", Line = "360", LineRule = LineSpacingRuleValues.Auto });
    pPr.Append(new OutlineLevel { Val = 0 });
    p.AppendChild(pPr);
    p.AppendChild(new Run(RPr("黑体", "Arial", 36, bold: true, color: "1F3864"), new Text(text) { Space = SpaceProcessingModeValues.Preserve }));
    return p;
}

Paragraph Heading2(string text)
{
    var p = new Paragraph();
    var pPr = new ParagraphProperties();
    pPr.Append(new ParagraphStyleId { Val = "Heading2" });
    pPr.Append(new SpacingBetweenLines { Before = "360", After = "180", Line = "360", LineRule = LineSpacingRuleValues.Auto });
    pPr.Append(new OutlineLevel { Val = 1 });
    p.AppendChild(pPr);
    p.AppendChild(new Run(RPr("黑体", "Arial", 28, bold: true, color: "2F5496"), new Text(text) { Space = SpaceProcessingModeValues.Preserve }));
    return p;
}

Paragraph Heading3(string text)
{
    var p = new Paragraph();
    var pPr = new ParagraphProperties();
    pPr.Append(new ParagraphStyleId { Val = "Heading3" });
    pPr.Append(new SpacingBetweenLines { Before = "240", After = "120", Line = "360", LineRule = LineSpacingRuleValues.Auto });
    pPr.Append(new OutlineLevel { Val = 2 });
    p.AppendChild(pPr);
    p.AppendChild(new Run(RPr("黑体", "Arial", 24, bold: true, color: "2F5496"), new Text(text) { Space = SpaceProcessingModeValues.Preserve }));
    return p;
}

Paragraph Body(string text, bool indent = true)
{
    var p = new Paragraph();
    var pPr = new ParagraphProperties();
    if (indent) pPr.Append(new Indentation { FirstLineChars = 200, FirstLine = "420" });
    pPr.Append(new SpacingBetweenLines { Before = "0", After = "120", Line = "360", LineRule = LineSpacingRuleValues.Auto });
    p.AppendChild(pPr);
    p.AppendChild(new Run(RPr("宋体", "Times New Roman", 22), new Text(text) { Space = SpaceProcessingModeValues.Preserve }));
    return p;
}

Paragraph FillLine() // ____ for handwriting
{
    var p = new Paragraph();
    var pPr = new ParagraphProperties();
    pPr.Append(new SpacingBetweenLines { Before = "120", After = "120", Line = "480", LineRule = LineSpacingRuleValues.Auto });
    p.AppendChild(pPr);
    p.AppendChild(new Run(RPr("宋体", "Times New Roman", 22), new Text("________________________________________________________") { Space = SpaceProcessingModeValues.Preserve }));
    return p;
}

Paragraph Callout(string text) // highlighted box - key notes
{
    var p = new Paragraph();
    var pPr = new ParagraphProperties();
    pPr.Append(new ParagraphBorders(
        new TopBorder { Val = BorderValues.Single, Size = 8, Color = "2F5496", Space = 4 },
        new BottomBorder { Val = BorderValues.Single, Size = 8, Color = "2F5496", Space = 4 },
        new LeftBorder { Val = BorderValues.Single, Size = 24, Color = "2F5496", Space = 4 },
        new RightBorder { Val = BorderValues.Single, Size = 8, Color = "2F5496", Space = 4 }
    ));
    pPr.Append(new Shading { Val = ShadingPatternValues.Clear, Fill = "DEEBF6" });
    pPr.Append(new SpacingBetweenLines { Before = "120", After = "120", Line = "320", LineRule = LineSpacingRuleValues.Auto });
    pPr.Append(new Indentation { Left = "200", Right = "200" });
    p.AppendChild(pPr);
    p.AppendChild(new Run(RPr("宋体", "Times New Roman", 22, bold: true, color: "1F3864"), new Text("✍  " + text) { Space = SpaceProcessingModeValues.Preserve }));
    return p;
}

Table BuildTable(string[][] rows, int[] colWidths, bool headerShade = true)
{
    var tbl = new Table();
    var tblPr = new TableProperties();
    tblPr.Append(new TableStyle { Val = "TableGrid" });
    tblPr.Append(new TableWidth { Width = "5000", Type = TableWidthUnitValues.Pct });
    tblPr.Append(new TableBorders(
        new TopBorder { Val = BorderValues.Single, Size = 4, Color = "808080" },
        new BottomBorder { Val = BorderValues.Single, Size = 4, Color = "808080" },
        new LeftBorder { Val = BorderValues.Single, Size = 4, Color = "808080" },
        new RightBorder { Val = BorderValues.Single, Size = 4, Color = "808080" },
        new InsideHorizontalBorder { Val = BorderValues.Single, Size = 4, Color = "BFBFBF" },
        new InsideVerticalBorder { Val = BorderValues.Single, Size = 4, Color = "BFBFBF" }
    ));
    tblPr.Append(new TableLook { Val = "04A0", FirstRow = true, LastRow = false, FirstColumn = true, LastColumn = false, NoHorizontalBand = false, NoVerticalBand = true });
    tbl.AppendChild(tblPr);

    var grid = new TableGrid();
    foreach (var w in colWidths) grid.Append(new GridColumn { Width = w.ToString() });
    tbl.AppendChild(grid);

    for (int i = 0; i < rows.Length; i++)
    {
        var tr = new TableRow();
        var trPr = new TableRowProperties();
        if (i == 0) trPr.Append(new CantSplit());
        tr.AppendChild(trPr);
        for (int j = 0; j < rows[i].Length; j++)
        {
            var tc = new TableCell();
            var tcPr = new TableCellProperties();
            tcPr.Append(new TableCellWidth { Width = colWidths[j].ToString(), Type = TableWidthUnitValues.Dxa });
            if (i == 0 && headerShade) tcPr.Append(new Shading { Val = ShadingPatternValues.Clear, Fill = "2F5496" });
            tc.AppendChild(tcPr);
            var para = new Paragraph();
            var pp = new ParagraphProperties();
            pp.Append(new SpacingBetweenLines { Before = "60", After = "60", Line = "320", LineRule = LineSpacingRuleValues.Auto });
            pp.Append(new Justification { Val = (i == 0 || j == 0) ? JustificationValues.Center : JustificationValues.Left });
            para.AppendChild(pp);
            string color = (i == 0 && headerShade) ? "FFFFFF" : "000000";
            bool bold = (i == 0 || j == 0);
            para.AppendChild(new Run(RPr("宋体", "Arial", 20, bold: bold, color: color), new Text(rows[i][j]) { Space = SpaceProcessingModeValues.Preserve }));
            tc.AppendChild(para);
            tr.AppendChild(tc);
        }
        tbl.AppendChild(tr);
    }
    return tbl;
}

void PageBreak(Body body) { body.AppendChild(new Paragraph(new Run(new Break { Type = BreakValues.Page }))); }

// ---------- create doc ----------
using (var doc = WordprocessingDocument.Create(outputPath, WordprocessingDocumentType.Document))
{
var mainPart = doc.AddMainDocumentPart();
mainPart.Document = new Document();
var body = new Body();
mainPart.Document.AppendChild(body);

// ---------- styles ----------
var stylesPart = mainPart.AddNewPart<StyleDefinitionsPart>();
var styles = new Styles();

// DocDefaults
var docDefaults = new DocDefaults();
var rPrDefault = new RunPropertiesDefault();
rPrDefault.Append(new RunPropertiesBaseStyle(
    (new RunFonts { Ascii = "Times New Roman", EastAsia = "宋体", ComplexScript = "Times New Roman" }),
    new FontSize { Val = "22" },
    new FontSizeComplexScript { Val = "22" }
));
docDefaults.Append(rPrDefault);
var pPrDefault = new ParagraphPropertiesDefault();
pPrDefault.Append(new ParagraphPropertiesBaseStyle(new SpacingBetweenLines { Line = "360", LineRule = LineSpacingRuleValues.Auto }));
docDefaults.Append(pPrDefault);
styles.Append(docDefaults);

// Normal style
var normal = new Style { Type = StyleValues.Paragraph, StyleId = "Normal", Default = true };
normal.Append(new StyleName { Val = "Normal" });
normal.Append(new StyleRunProperties(
    new RunFonts { Ascii = "Times New Roman", EastAsia = "宋体", ComplexScript = "Times New Roman" },
    new FontSize { Val = "22" }, new FontSizeComplexScript { Val = "22" }));
styles.Append(normal);

// Heading styles
Style MakeHeading(string id, string name, string fontCN, int halfPt, string color, int outline)
{
    var s = new Style { Type = StyleValues.Paragraph, StyleId = id };
    s.Append(new StyleName { Val = name });
    s.Append(new BasedOn { Val = "Normal" });
    s.Append(new NextParagraphStyle { Val = "Normal" });
    s.Append(new UIPriority { Val = 9 });
    var pPr = new StyleParagraphProperties();
    pPr.Append(new SpacingBetweenLines { Before = (halfPt * 12).ToString(), After = "120", Line = "360", LineRule = LineSpacingRuleValues.Auto });
    pPr.Append(new OutlineLevel { Val = outline });
    pPr.Append(new KeepNext());
    s.Append(pPr);
    var rPr = new StyleRunProperties();
    rPr.Append(new RunFonts { Ascii = "Arial", EastAsia = fontCN, ComplexScript = "Arial" });
    rPr.Append(new Bold()); rPr.Append(new BoldComplexScript());
    rPr.Append(new FontSize { Val = halfPt.ToString() });
    rPr.Append(new FontSizeComplexScript { Val = halfPt.ToString() });
    rPr.Append(new Color { Val = color });
    s.Append(rPr);
    return s;
}
styles.Append(MakeHeading("Heading1", "heading 1", "黑体", 36, "1F3864", 0));
styles.Append(MakeHeading("Heading2", "heading 2", "黑体", 28, "2F5496", 1));
styles.Append(MakeHeading("Heading3", "heading 3", "黑体", 24, "2F5496", 2));

stylesPart.Styles = styles;

// ---------- page setup ----------
var sectPr = new SectionProperties();
sectPr.Append(new PageSize { Width = 11906, Height = 16838 }); // A4 portrait
sectPr.Append(new PageMargin { Top = 1418, Right = 1418, Bottom = 1418, Left = 1418, Header = 720, Footer = 720, Gutter = 0 }); // 2.5cm = 1418 dxa
sectPr.Append(new Columns { Space = "720" });
sectPr.Append(new DocGrid { Type = DocGridValues.Lines, LinePitch = 312 });

// ---------- header/footer ----------
var headerPart = mainPart.AddNewPart<HeaderPart>();
var header = new Header();
var hPara = new Paragraph();
var hPpr = new ParagraphProperties();
hPpr.Append(new ParagraphStyleId { Val = "Header" });
hPpr.Append(new Justification { Val = JustificationValues.Center });
hPpr.Append(new ParagraphBorders(new BottomBorder { Val = BorderValues.Single, Size = 4, Color = "2F5496", Space = 1 }));
hPara.AppendChild(hPpr);
hPara.AppendChild(new Run(RPr("黑体", "Arial", 18, bold: true, color: "1F3864"),
    new Text("一线管理者的现代五项 · 学员手册") { Space = SpaceProcessingModeValues.Preserve }));
header.AppendChild(hPara);
headerPart.Header = header;
sectPr.Append(new HeaderReference { Id = mainPart.GetIdOfPart(headerPart), Type = HeaderFooterValues.Default });

var footerPart = mainPart.AddNewPart<FooterPart>();
var footer = new Footer();
var fPara = new Paragraph();
var fPpr = new ParagraphProperties();
fPpr.Append(new ParagraphStyleId { Val = "Footer" });
fPpr.Append(new Justification { Val = JustificationValues.Center });
fPara.AppendChild(fPpr);
fPara.AppendChild(new Run(RPr("宋体", "Times New Roman", 18, color: "808080"),
    new Text("v1.0 · 第 ") { Space = SpaceProcessingModeValues.Preserve }));
fPara.AppendChild(new Run(RPr("宋体", "Times New Roman", 18, color: "808080"),
    new SimpleField { Instruction = "PAGE \\* MERGEFORMAT" }));
fPara.AppendChild(new Run(RPr("宋体", "Times New Roman", 18, color: "808080"),
    new Text(" 页 / 共 ") { Space = SpaceProcessingModeValues.Preserve }));
fPara.AppendChild(new Run(RPr("宋体", "Times New Roman", 18, color: "808080"),
    new SimpleField { Instruction = "NUMPAGES \\* MERGEFORMAT" }));
fPara.AppendChild(new Run(RPr("宋体", "Times New Roman", 18, color: "808080"),
    new Text(" 页") { Space = SpaceProcessingModeValues.Preserve }));
footer.AppendChild(fPara);
footerPart.Footer = footer;
sectPr.Append(new FooterReference { Id = mainPart.GetIdOfPart(footerPart), Type = HeaderFooterValues.Default });

// ---------- COVER ----------
var coverPara = new Paragraph();
var cPpr = new ParagraphProperties();
cPpr.Append(new SpacingBetweenLines { Before = "2400", After = "240" });
coverPara.AppendChild(cPpr);
coverPara.AppendChild(new Run(RPr("黑体", "Arial", 28, bold: true, color: "808080"),
    new Text("一线管理者的工作记录手册") { Space = SpaceProcessingModeValues.Preserve }));
body.AppendChild(coverPara);

body.AppendChild(P(null, JustificationValues.Center));
var titlePara = new Paragraph();
var tPpr = new ParagraphProperties();
tPpr.Append(new Justification { Val = JustificationValues.Center });
tPpr.Append(new SpacingBetweenLines { Before = "240", After = "240" });
titlePara.AppendChild(tPpr);
titlePara.AppendChild(new Run(RPr("黑体", "Arial", 56, bold: true, color: "1F3864"),
    new Text("一线管理者的现代五项") { Space = SpaceProcessingModeValues.Preserve }));
body.AppendChild(titlePara);

var subPara = new Paragraph();
var sPpr = new ParagraphProperties();
sPpr.Append(new Justification { Val = JustificationValues.Center });
sPpr.Append(new SpacingBetweenLines { Before = "120", After = "240" });
subPara.AppendChild(sPpr);
subPara.AppendChild(new Run(RPr("宋体", "Times New Roman", 28, color: "2F5496"),
    new Text("Participant Workbook") { Space = SpaceProcessingModeValues.Preserve }));
body.AppendChild(subPara);

body.AppendChild(P(null, JustificationValues.Center));
body.AppendChild(P(null, JustificationValues.Center));

// Cover info box
var infoPara = new Paragraph();
var iPpr = new ParagraphProperties();
iPpr.Append(new Justification { Val = JustificationValues.Center });
iPpr.Append(new SpacingBetweenLines { Before = "120", After = "120" });
iPpr.Append(new ParagraphBorders(
    new TopBorder { Val = BorderValues.Double, Size = 12, Color = "1F3864", Space = 4 },
    new BottomBorder { Val = BorderValues.Double, Size = 12, Color = "1F3864", Space = 4 }
));
infoPara.AppendChild(iPpr);
infoPara.AppendChild(new Run(RPr("宋体", "Times New Roman", 22),
    new Text("学 员 姓 名：____________________________") { Space = SpaceProcessingModeValues.Preserve }));
body.AppendChild(infoPara);

var infoPara2 = new Paragraph();
var iPpr2 = new ParagraphProperties();
iPpr2.Append(new Justification { Val = JustificationValues.Center });
iPpr2.Append(new SpacingBetweenLines { Before = "240", After = "120" });
infoPara2.AppendChild(iPpr2);
infoPara2.AppendChild(new Run(RPr("宋体", "Times New Roman", 22),
    new Text("所 属 团 队 / 部 门：____________________________") { Space = SpaceProcessingModeValues.Preserve }));
body.AppendChild(infoPara2);

var infoPara3 = new Paragraph();
var iPpr3 = new ParagraphProperties();
iPpr3.Append(new Justification { Val = JustificationValues.Center });
iPpr3.Append(new SpacingBetweenLines { Before = "240", After = "120" });
infoPara3.AppendChild(iPpr3);
infoPara3.AppendChild(new Run(RPr("宋体", "Times New Roman", 22),
    new Text("授 课 日 期：________ 年 ____ 月 ____ 日   ～   ________ 年 ____ 月 ____ 日") { Space = SpaceProcessingModeValues.Preserve }));
body.AppendChild(infoPara3);

var infoPara4 = new Paragraph();
var iPpr4 = new ParagraphProperties();
iPpr4.Append(new Justification { Val = JustificationValues.Center });
iPpr4.Append(new SpacingBetweenLines { Before = "240", After = "120" });
infoPara4.AppendChild(iPpr4);
infoPara4.AppendChild(new Run(RPr("宋体", "Times New Roman", 22),
    new Text("讲  师：____________________________") { Space = SpaceProcessingModeValues.Preserve }));
body.AppendChild(infoPara4);

body.AppendChild(P(null, JustificationValues.Center));
body.AppendChild(P(null, JustificationValues.Center));
body.AppendChild(P(null, JustificationValues.Center));

// Cover use note
var usePara = new Paragraph();
var uPpr = new ParagraphProperties();
uPpr.Append(new Justification { Val = JustificationValues.Center });
uPpr.Append(new SpacingBetweenLines { Before = "120", After = "120" });
usePara.AppendChild(uPpr);
usePara.AppendChild(new Run(RPr("宋体", "Times New Roman", 22, color: "808080"),
    new Text("—— 这本手册是你的工作记录，不是培训讲义 ——") { Space = SpaceProcessingModeValues.Preserve }));
body.AppendChild(usePara);

var usePara2 = new Paragraph();
var u2Ppr = new ParagraphProperties();
u2Ppr.Append(new Justification { Val = JustificationValues.Center });
usePara2.AppendChild(u2Ppr);
usePara2.AppendChild(new Run(RPr("宋体", "Times New Roman", 20, color: "808080"),
    new Text("每个模块包含：内容提要 / 练习页 / 反思日志；所有内容只属于你，不需要提交。") { Space = SpaceProcessingModeValues.Preserve }));
body.AppendChild(usePara2);

PageBreak(body);

// ---------- TOC ----------
body.AppendChild(Heading1("目  录"));
body.AppendChild(P("一、课前自我评估 ……………………………………………………… 3", null));
body.AppendChild(P("二、模块一：复制成功（螺旋深挖 4 问）………………………… 4", null));
body.AppendChild(P("三、模块二：共谋抓手（花刺投票）………………………………… 9", null));
body.AppendChild(P("四、模块三：应对难题（问题树 + 魔力破解提问）………… 14", null));
body.AppendChild(P("五、模块四：引领共创（高效脑暴双矩阵）……………………… 20", null));
body.AppendChild(P("六、模块五：前瞻思考（推演双表格）……………………………… 25", null));
body.AppendChild(P("七、个人行动计划 ……………………………………………………… 30", null));
body.AppendChild(P("八、工具速查表 ………………………………………………………… 31", null));
PageBreak(body);

// ---------- Pre-assessment ----------
body.AppendChild(Heading1("一、课前自我评估"));
body.AppendChild(Body("请在开课前，凭第一感觉完成以下评估。1=很少，5=经常。"));

body.AppendChild(BuildTable(new string[][] {
    new[] { "陈述", "1（很少）→ 5（经常）" },
    new[] { "我能系统地从团队成功案例里，提炼出可以教给别人的具体方法", "1   2   3   4   5" },
    new[] { "我主持的团队会议，结束时有清晰共识和明确行动项", "1   2   3   4   5" },
    new[] { "遇到经验解决不了的新难题，我能找到新的切入角度", "1   2   3   4   5" },
    new[] { "我能有效引导团队共同提出方案，而不是只靠我自己想", "1   2   3   4   5" },
    new[] { "我能提前识别重要工作的主要风险和机会，而不是等问题来了再应对", "1   2   3   4   5" },
}, new[] { 6500, 4000 }));

body.AppendChild(P(" "));
body.AppendChild(Heading3("写给自己"));
body.AppendChild(Body("这两天你最想解决的管理困境是什么（用一句话描述）："));
body.AppendChild(FillLine());
body.AppendChild(FillLine());
body.AppendChild(Callout("✍  真实场景填写：本评估不要追求\"漂亮\"，写第一直觉就好。两日课程结束后回头对比，看到变化。"));
PageBreak(body);

// ---------- Module 1 ----------
body.AppendChild(Heading1("二、模块一：复制成功"));
body.AppendChild(Heading2("内容提要"));
body.AppendChild(Heading3("工具名称"));
body.AppendChild(Body("螺旋深挖 4 问"));
body.AppendChild(Heading3("核心逻辑"));
body.AppendChild(Body("知道团队里谁做得好，不等于知道可以怎么复制。4 问帮你把\"成功\"从模糊的印象，拆解成可以被学习和传授的知识。"));
body.AppendChild(Heading3("4 问结构"));
body.AppendChild(BuildTable(new string[][] {
    new[] { "问题", "挖的是什么", "常见陷阱" },
    new[] { "问 1：你具体做了什么，和平时有什么不同？", "行为（可观察的具体动作）", "回答是形容词（\"认真\"\"用心\"）而非动作" },
    new[] { "问 2：你为什么这么做，当时你是怎么想的？", "思维（判断逻辑）", "跳过这一问直接到问 3" },
    new[] { "问 3：如果提炼成一个核心原则，你会怎么说？", "洞见（可迁移的原则）", "说出来的还是具体做法，不是原则" },
    new[] { "问 4：如果教给新同事，最关键的 2-3 步是什么？", "路径（可操作的步骤）", "步骤太多或太模糊" },
}, new[] { 3000, 3000, 4000 }));
body.AppendChild(Body("\"螺旋\"的含义：任何一问的答案不够清晰时，回到上一问再追问一遍，而不是强行继续。"));

body.AppendChild(Heading2("练习页 1A　成功案例记录单"));
body.AppendChild(Body("我打算用 4 问访谈的团队成员：____________________________"));
body.AppendChild(Body("这位成员的成功案例简述："));
body.AppendChild(FillLine());
body.AppendChild(FillLine());
body.AppendChild(Body("这个成功最让我感到\"不知道怎么复制\"的地方是："));
body.AppendChild(FillLine());
body.AppendChild(FillLine());
body.AppendChild(Callout("✍  真实场景填写：先用一句话写下一个团队里真实发生过的成功案例，不要用\"假设\"。"));

body.AppendChild(Heading2("练习页 1B　4 问对话记录表"));
body.AppendChild(Body("（在课堂角色演练中填写，记录你作为\"管理者\"访谈时得到的关键回答）"));
body.AppendChild(BuildTable(new string[][] {
    new[] { "问题", "对方的回答（关键词即可）", "追问了什么" },
    new[] { "问 1：具体做了什么不同？", "", "" },
    new[] { "问 2：为什么这样做？", "", "" },
    new[] { "问 3：提炼成一个原则是什么？", "", "" },
    new[] { "问 4：关键 2-3 步是什么？", "", "" },
}, new[] { 3000, 3500, 3500 }));
body.AppendChild(Body("这次访谈，我提炼出的最有价值的\"成功原则\"是："));
body.AppendChild(FillLine());
body.AppendChild(FillLine());
body.AppendChild(Body("如果要把这个原则教给另一个成员，我会这么说（用一两句话）："));
body.AppendChild(FillLine());
body.AppendChild(FillLine());

body.AppendChild(Heading2("反思日志 · 模块一"));
body.AppendChild(Body("1. 角色演练后，我最深的感受是："));
body.AppendChild(FillLine());
body.AppendChild(FillLine());
body.AppendChild(Body("2. 以前我在复制成功上的习惯做法是 ____________________；用了 4 问之后，有什么不同："));
body.AppendChild(FillLine());
body.AppendChild(FillLine());
body.AppendChild(Body("3. 这周之内，我打算和 ____________（谁）做一次 4 问访谈，案例是 ____________，时间是 ____________。"));
body.AppendChild(FillLine());
PageBreak(body);

// ---------- Module 2 ----------
body.AppendChild(Heading1("三、模块二：共谋抓手"));
body.AppendChild(Heading2("内容提要"));
body.AppendChild(Heading3("工具名称"));
body.AppendChild(Body("花刺投票"));
body.AppendChild(Heading3("核心逻辑"));
body.AppendChild(Body("团队会议的结论，不应该是\"声音最大的人\"或\"职级最高的人\"的选择——它应该是集体智慧的真实反映。花刺投票用结构化的集体决策，让每个人的判断都被看见。"));
body.AppendChild(Heading3("工具结构"));
body.AppendChild(Body("第一步：列候选抓手 — 引导团队写出所有可能的因素/行动（便利贴），不评判，数量越多越好。"));
body.AppendChild(Body("第二步：静默投票 — 每人各 2 票：花票（= 我认为这个最值得优先推进）和刺票（= 我认为这个是最关键的障碍，不解决其他什么都难做）。安静地贴，不交流，不跟风。"));
body.AppendChild(Body("第三步：统计结果 — 花票最多 = 团队的优先机会（做它）；刺票最多 = 团队的关键障碍（先解决它，或者同步解决）。"));
body.AppendChild(Body("第四步：讨论确认 — 只讨论票数最高的项目，其余暂不处理。问：花票最多的这个，我们怎么推进？刺票最多的这个，谁来负责推动解决？"));
body.AppendChild(Callout("✍  为什么\"静默\"投票？避免社会压力影响判断——在公开表决时，大家往往跟着主管或声音最大的人走，看不到真实的集体判断。"));

body.AppendChild(Heading2("练习页 2A　抓手清单"));
body.AppendChild(Body("我打算用花刺投票的业绩议题是："));
body.AppendChild(FillLine());
body.AppendChild(Body("提前思考：可能列入候选的抓手（先自己想 3-5 条，课堂上会和团队共同补充）："));
body.AppendChild(FillLine());
body.AppendChild(FillLine());
body.AppendChild(FillLine());
body.AppendChild(FillLine());
body.AppendChild(FillLine());

body.AppendChild(Heading2("练习页 2B　花刺投票记录表（模拟主持记录）"));
body.AppendChild(Body("本次投票主题：____________________________"));
body.AppendChild(BuildTable(new string[][] {
    new[] { "候选抓手", "花票数", "刺票数", "备注" },
    new[] { "", "", "", "" },
    new[] { "", "", "", "" },
    new[] { "", "", "", "" },
    new[] { "", "", "", "" },
    new[] { "", "", "", "" },
}, new[] { 4000, 1700, 1700, 2700 }));
body.AppendChild(Body("花票最多（优先推进）：________________________（花票 ____ 张）"));
body.AppendChild(Body("刺票最多（关键障碍）：________________________（刺票 ____ 张）"));
body.AppendChild(Body("讨论结论："));
body.AppendChild(Body("  · 花票最高的这个，我们的推进方式是："));
body.AppendChild(FillLine());
body.AppendChild(Body("  · 刺票最高的这个，我会安排 __________（谁）来负责推动解决："));
body.AppendChild(FillLine());

body.AppendChild(Heading2("反思日志 · 模块二"));
body.AppendChild(Body("1. 花刺投票的结果，和我事先预期的相比，有什么不一样："));
body.AppendChild(FillLine());
body.AppendChild(FillLine());
body.AppendChild(Body("2. 如果把这个工具用在我下周的一次团队会议上，最大的挑战可能是："));
body.AppendChild(FillLine());
body.AppendChild(FillLine());
body.AppendChild(Body("3. 我打算在 ____________________（什么议题）的团队会议上用花刺投票，时间大概是 ____________________，需要提前准备 ____________________。"));
body.AppendChild(FillLine());
PageBreak(body);

// ---------- Module 3 ----------
body.AppendChild(Heading1("四、模块三：应对难题"));
body.AppendChild(Heading2("内容提要"));
body.AppendChild(Heading3("工具名称"));
body.AppendChild(Body("问题树 ＋ 魔力破解提问"));
body.AppendChild(Heading3("核心逻辑"));
body.AppendChild(Body("解决难题的第一步，不是\"怎么解决\"，而是\"搞清楚它到底是什么\"。问题树帮你把模糊的大问题拆解成可操作的具体子问题；魔力破解提问帮你在找到切入点之后，从 5 个不同视角看到新的可能性。"));
body.AppendChild(Heading3("问题树的构建步骤"));
body.AppendChild(BuildTable(new string[][] {
    new[] { "步骤", "内容" },
    new[] { "第一步", "写下症状（你观察到的\"不对劲\"的表现）" },
    new[] { "第二步", "第一层拆解：这可能是哪几个方面的问题？" },
    new[] { "第三步", "第二层拆解：每个方面，可能的具体原因是什么？" },
    new[] { "第四步", "找切入点：哪个二级分支，既影响大，又是我能真正推动的？" },
}, new[] { 2200, 7800 }));
body.AppendChild(Body("切入点的两个标准：影响大 + 我能影响（两者同时满足）。"));
body.AppendChild(Heading3("魔力破解提问 · 5 问"));
body.AppendChild(BuildTable(new string[][] {
    new[] { "问", "核心视角" },
    new[] { "问 1（破假设）", "我们一直认为某件事不可能/必须是这样——这个假设真的对吗？" },
    new[] { "问 2（借他山）", "其他行业/场景有没有面对过类似问题？他们怎么解决的？" },
    new[] { "问 3（极端情景）", "如果资源充足会怎么做？如果只有 1/10 的资源呢？" },
    new[] { "问 4（换位思考）", "从客户/团队/竞争对手/上级的角度，这个问题是什么样的？" },
    new[] { "问 5（倒推法）", "想象一年后这个问题已经解决了，你是怎么做到的？" },
}, new[] { 2200, 7800 }));
body.AppendChild(Callout("✍  使用方式：不是全部回答，而是用每个问题\"试\"一下你的切入点，看哪一把钥匙让你产生\"这个角度我以前没想到\"的感觉。"));

body.AppendChild(Heading2("练习页 3A　问题树模板"));
body.AppendChild(Body("我要分析的难题（症状描述）："));
body.AppendChild(FillLine());
body.AppendChild(FillLine());
body.AppendChild(Body("第一层分解（这个症状背后，可能是哪几个方面的问题？列 3-4 个）："));
body.AppendChild(Body("一、________________________________________________________"));
body.AppendChild(Body("二、________________________________________________________"));
body.AppendChild(Body("三、________________________________________________________"));
body.AppendChild(Body("第二层分解（选最重要的 1-2 个一级分支，各自展开具体原因）："));
body.AppendChild(Body("针对 \"____________________\" 这一分支，可能的具体原因："));
body.AppendChild(FillLine());
body.AppendChild(FillLine());
body.AppendChild(FillLine());
body.AppendChild(Body("我找到的切入点（标注在树上，并在下面写出理由）："));
body.AppendChild(Body("切入点是：________________________________________________________"));
body.AppendChild(Body("理由（为什么它既影响大，又是我能影响的）："));
body.AppendChild(FillLine());
body.AppendChild(FillLine());

body.AppendChild(Heading2("练习页 3B　魔力破解提问记录表"));
body.AppendChild(Body("我的切入点（来自问题树）：________________________________________________________"));
body.AppendChild(BuildTable(new string[][] {
    new[] { "问题", "我的回答（先全部写，再圈出最有价值的一个）" },
    new[] { "问 1（破假设）：我们一直认为 ____ 是不可能的/必须的，这是真的吗？", "" },
    new[] { "问 2（借他山）：其他地方怎么解决类似问题的？", "" },
    new[] { "问 3（极端情景）：资源充足/只有 1/10 时怎么做？", "" },
    new[] { "问 4（换位思考）：从对方角度看，这个问题是什么样的？", "" },
    new[] { "问 5（倒推法）：一年后问题解决了，发生了什么？", "" },
}, new[] { 4500, 5500 }));
body.AppendChild(Body("让我最受启发的那一问是问 ____ ，因为："));
body.AppendChild(FillLine());
body.AppendChild(FillLine());
body.AppendChild(Body("这带来的新方向是："));
body.AppendChild(FillLine());
body.AppendChild(FillLine());

body.AppendChild(Heading2("反思日志 · 模块三"));
body.AppendChild(Body("1. 用问题树分析完我的难题，我最大的发现是："));
body.AppendChild(FillLine());
body.AppendChild(FillLine());
body.AppendChild(Body("2. 魔力破解提问里，哪一问给了我以前真的没有想到的角度："));
body.AppendChild(FillLine());
body.AppendChild(FillLine());
body.AppendChild(Body("3. 我的切入点是 ____________________，新方向是 ____________________。接下来，我打算 ____________________（具体行动），时间节点是 ____________________。"));
body.AppendChild(FillLine());
PageBreak(body);

// ---------- Module 4 ----------
body.AppendChild(Heading1("五、模块四：引领共创"));
body.AppendChild(Heading2("内容提要"));
body.AppendChild(Heading3("工具名称"));
body.AppendChild(Body("高效脑暴双矩阵"));
body.AppendChild(Heading3("核心逻辑"));
body.AppendChild(Body("大多数团队脑暴失败的原因，是发散和收敛没有被清晰地分开。发散时过早评判，想法就死了；收敛时缺乏依据，\"谁说了算\"又回来了。双矩阵把两个阶段分开，各自有结构、有工具。"));
body.AppendChild(Heading3("发散矩阵（2×2）"));
body.AppendChild(BuildTable(new string[][] {
    new[] { " ", "团队内部可控", "需要外部资源/协调" },
    new[] { "短期（1-4 周）", "Q1 快赢区：立刻能动的", "Q2 协调推进区：需要争取支持的" },
    new[] { "中长期（1-3 个月）", "Q3 能力建设区：团队能力积累", "Q4 战略布局区：需要提前布局的" },
}, new[] { 2500, 3750, 3750 }));
body.AppendChild(Body("引导发散的提问方式：每个格子用对应的提问引导，强制每格至少产出 2-3 个想法。"));
body.AppendChild(Heading3("收敛矩阵（2×2）"));
body.AppendChild(BuildTable(new string[][] {
    new[] { " ", "高影响力", "低影响力" },
    new[] { "落地容易", "★ 优先行动区", "随机应变区" },
    new[] { "落地困难", "战略项目区", "暂不考虑区" },
}, new[] { 2500, 3750, 3750 }));
body.AppendChild(Body("引导收敛的步骤：先独立评估（每人在收敛矩阵上标注），再对比讨论分歧，最终聚焦\"优先行动区\"的 2-3 条，写明行动计划。"));
body.AppendChild(Callout("✍  引导者的核心原则：发散阶段不评判；收敛阶段不主导——让矩阵的逻辑引导聚焦，而不是\"让主管的意见引导聚焦\"。"));

body.AppendChild(Heading2("练习页 4A　发散矩阵工作纸"));
body.AppendChild(Body("脑暴主题（来自 M3 的新方向）：________________________________________________________"));
body.AppendChild(BuildTable(new string[][] {
    new[] { " ", "团队内部可控", "需要外部资源/协调" },
    new[] { "短期（1-4 周）", "", "" },
    new[] { "中长期（1-3 个月）", "", "" },
}, new[] { 2500, 3750, 3750 }));
body.AppendChild(Body("作为引导者，在哪个格子产出了最意外的想法：Q ____ ，想法是：____________________________"));
body.AppendChild(Body("在哪个格子最难引导：Q ____ ，原因可能是：____________________________"));

body.AppendChild(Heading2("练习页 4B　收敛矩阵工作纸"));
body.AppendChild(Body("把发散矩阵里的想法，按影响力和落地难度在下面标位置（写编号或关键词）："));
body.AppendChild(BuildTable(new string[][] {
    new[] { " ", "高影响力", "低影响力" },
    new[] { "落地容易", "★", "" },
    new[] { "落地困难", "", "" },
}, new[] { 2500, 3750, 3750 }));
body.AppendChild(Body("优先行动区（★格子）确定的 2-3 条："));
body.AppendChild(FillLine());
body.AppendChild(FillLine());
body.AppendChild(Body("讨论中出现的最大分歧是哪一条 ____________________，分歧的原因是："));
body.AppendChild(FillLine());

body.AppendChild(Heading2("反思日志 · 模块四"));
body.AppendChild(Body("1. 作为\"引导者\"主持发散阶段，最难的一刻是："));
body.AppendChild(FillLine());
body.AppendChild(FillLine());
body.AppendChild(Body("2. 如果把双矩阵引入我下周的团队会议，最可能有什么不同："));
body.AppendChild(FillLine());
body.AppendChild(FillLine());
body.AppendChild(Body("3. 我打算在 ____________________（议题）的团队会议上用一次双矩阵，时间是 ____________________。我预计发散阶段最大的挑战是 ____________________，我的应对方式是 ____________________。"));
body.AppendChild(FillLine());
PageBreak(body);

// ---------- Module 5 ----------
body.AppendChild(Heading1("六、模块五：前瞻思考"));
body.AppendChild(Heading2("内容提要"));
body.AppendChild(Heading3("工具名称"));
body.AppendChild(Body("推演双表格"));
body.AppendChild(Heading3("核心逻辑"));
body.AppendChild(Body("防火比救火的成本低，但一线管理者在高压运营环境下，天然倾向于\"有问题了再处理\"。推演双表格用两张表——风险推演和机会推演——帮你在 30 分钟内，把一个重要行动的主要不确定性想一遍，提前准备好应对方案。"));
body.AppendChild(Heading3("风险推演表（表一）"));
body.AppendChild(BuildTable(new string[][] {
    new[] { "列", "填写原则" },
    new[] { "可能的风险", "写具体场景：\"如果 ____ 发生了\"，不写\"内部风险\"这类模糊词" },
    new[] { "发生概率", "高/中/低，基于现有情况的判断" },
    new[] { "影响程度", "高/中/低，对行动目标的实质影响" },
    new[] { "预防行动", "现在做什么，降低风险发生的概率" },
    new[] { "应急预案", "风险真的发生时，第一时间做什么——具体到人和动作" },
    new[] { "负责人 + 时间节点", "具体到人，具体到日期" },
}, new[] { 3000, 7000 }));
body.AppendChild(Body("优先处理逻辑：概率高 + 影响大 = 最高优先级（必须有预防措施 AND 应急预案）。"));
body.AppendChild(Heading3("机会推演表（表二）"));
body.AppendChild(BuildTable(new string[][] {
    new[] { "列", "填写原则" },
    new[] { "可能的机会", "写\"如果 ____ 发生了，对我们是好事\"的具体场景" },
    new[] { "出现概率", "高/中/低" },
    new[] { "潜在价值", "高/中/低，对目标的积极影响" },
    new[] { "捕捉行动", "机会出现了，立刻做什么" },
    new[] { "准备工作", "现在就可以做的，让自己能快速抓住机会" },
    new[] { "负责人 + 时间节点", "具体到人，具体到日期" },
}, new[] { 3000, 7000 }));
body.AppendChild(Callout("✍  重要：两张表必须同时做——只做风险 = 过度保守；只做机会 = 低估障碍。"));

body.AppendChild(Heading2("练习页 5A　风险推演表"));
body.AppendChild(Body("我推演的行动：________________________________________________________"));
body.AppendChild(Body("行动目标：________________________________________________________"));
body.AppendChild(BuildTable(new string[][] {
    new[] { "可能的风险", "概率", "影响", "预防行动", "应急预案", "负责人", "时间节点" },
    new[] { "", "高/中/低", "高/中/低", "", "", "", "" },
    new[] { "", "高/中/低", "高/中/低", "", "", "", "" },
    new[] { "", "高/中/低", "高/中/低", "", "", "", "" },
}, new[] { 2200, 1100, 1100, 1500, 1500, 1200, 1400 }));
body.AppendChild(Body("最高优先级风险（概率高 + 影响大）：____________________________"));
body.AppendChild(Body("预防行动：____________________________　　应急预案：____________________________"));

body.AppendChild(Heading2("练习页 5B　机会推演表"));
body.AppendChild(Body("同一行动的机会推演：________________________________________________________"));
body.AppendChild(BuildTable(new string[][] {
    new[] { "可能的机会", "概率", "价值", "捕捉行动", "准备工作", "负责人", "时间节点" },
    new[] { "", "高/中/低", "高/中/低", "", "", "", "" },
    new[] { "", "高/中/低", "高/中/低", "", "", "", "" },
}, new[] { 2200, 1100, 1100, 1500, 1500, 1200, 1400 }));
body.AppendChild(Body("最高价值机会（概率高 + 价值高）：____________________________"));
body.AppendChild(Body("准备工作我会在 ____________________（日期）前完成。"));

body.AppendChild(Heading2("反思日志 · 模块五"));
body.AppendChild(Body("1. 填完两张表，我发现了一个以前真的没想过的风险或机会："));
body.AppendChild(FillLine());
body.AppendChild(FillLine());
body.AppendChild(Body("2. 如果每次重要行动前都先花 30 分钟推演——对我最有价值的改变是："));
body.AppendChild(FillLine());
body.AppendChild(FillLine());
body.AppendChild(Body("3. 这两张表，我打算什么时候拿给我的团队成员看？____________________"));
body.AppendChild(FillLine());
PageBreak(body);

// ---------- Personal Action Plan ----------
body.AppendChild(Heading1("七、个人行动计划"));
body.AppendChild(Body("课程结尾完成。这是接下来 4 周你具体要用这些工具做的事，不是培训总结。"));
body.AppendChild(BuildTable(new string[][] {
    new[] { "项目", "内容" },
    new[] { "这两天，我最想解决的管理难题是", "" },
    new[] { "我打算最先用的工具是", "" },
    new[] { "具体场景（什么时候/和谁/用在什么问题上）", "" },
    new[] { "接下来一周的第一个行动是", "" },
    new[] { "4 周后，我希望发生的改变是", "" },
    new[] { "我需要的支持（如果有的话）", "" },
}, new[] { 3500, 6500 }));
body.AppendChild(P(" "));
body.AppendChild(FillLine());
body.AppendChild(FillLine());
body.AppendChild(FillLine());
PageBreak(body);

// ---------- Tool Quick Reference ----------
body.AppendChild(Heading1("八、工具速查表"));
body.AppendChild(Body("课后快速回顾：每件工具的使用场景 + 最关键的一步。"));
body.AppendChild(BuildTable(new string[][] {
    new[] { "工具", "使用场景", "最关键的一步" },
    new[] { "螺旋深挖 4 问", "团队里有成功案例想提炼复制时", "问 3：把成功提炼成原则，而不是只记录动作" },
    new[] { "花刺投票", "团队讨论业绩/优先级，需要形成共识时", "静默投票：每人各自决定，不跟风" },
    new[] { "问题树", "遇到模糊的难题，不知道从哪里下手时", "第四步：找切入点（影响大 + 我能影响）" },
    new[] { "魔力破解提问", "已有切入点，但想法用尽了，需要新视角时", "选最让你\"没想过\"的那一问，深入想一想" },
    new[] { "高效脑暴双矩阵", "需要引导团队共创方案，发散 + 收敛时", "发散不评判，收敛看矩阵，不看\"谁说的\"" },
    new[] { "推演双表格", "重要行动启动之前，想提前做好风险和机会的准备时", "两张表同时做，预防和应急都要有" },
}, new[] { 2500, 3750, 3750 }));

body.AppendChild(P(" "));
body.AppendChild(Heading2("五件工具的连接逻辑"));
body.AppendChild(Body("M1 提炼\"成功原则\" → M2 用花刺投票确定\"优先机会\"和\"关键障碍\" → M3 用问题树 + 魔力提问找\"新切入角度\" → M4 用双矩阵共创\"优先行动方案\" → M5 用推演双表格做\"前瞻准备\" → 学员带着\"管理行动地图\"回到真实工作。"));
body.AppendChild(Callout("✍  这是你的\"管理行动地图\"——五件工具不是独立散件，而是一个完整系统。"));

// append sectPr last
body.AppendChild(sectPr);

} // end using

Console.WriteLine("OK: " + outputPath);