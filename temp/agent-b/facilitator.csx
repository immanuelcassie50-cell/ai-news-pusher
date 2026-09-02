#r "nuget: DocumentFormat.OpenXml, 3.2.0"

using DocumentFormat.OpenXml;
using DocumentFormat.OpenXml.Packaging;
using DocumentFormat.OpenXml.Wordprocessing;

string outputPath = @"D:\2026年课程\竞越\一线管理者的五项关键\补充课程包\03-讲师手册\讲师手册_完整版.docx";

// ---------- helpers ----------
RunProperties RPr(string fontCN, string fontEN, int halfPt, bool bold = false, string color = null)
{
    var rPr = new RunProperties();
    rPr.Append(new RunFonts { Ascii = fontEN, EastAsia = fontCN, ComplexScript = fontEN });
    rPr.Append(new FontSize { Val = halfPt.ToString() });
    rPr.Append(new FontSizeComplexScript { Val = halfPt.ToString() });
    if (bold) { rPr.Append(new Bold()); rPr.Append(new BoldComplexScript()); }
    if (color != null) rPr.Append(new Color { Val = color });
    return rPr;
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

Paragraph Heading1(string text)
{
    var p = new Paragraph();
    var pPr = new ParagraphProperties();
    pPr.Append(new ParagraphStyleId { Val = "Heading1" });
    pPr.Append(new SpacingBetweenLines { Before = "480", After = "240", Line = "360", LineRule = LineSpacingRuleValues.Auto });
    pPr.Append(new OutlineLevel { Val = 0 });
    p.AppendChild(pPr);
    p.AppendChild(new Run(RPr("黑体", "Arial", 40, bold: true, color: "1F3864"), new Text(text) { Space = SpaceProcessingModeValues.Preserve }));
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
    p.AppendChild(new Run(RPr("黑体", "Arial", 32, bold: true, color: "2F5496"), new Text(text) { Space = SpaceProcessingModeValues.Preserve }));
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
    p.AppendChild(new Run(RPr("黑体", "Arial", 28, bold: true, color: "2F5496"), new Text(text) { Space = SpaceProcessingModeValues.Preserve }));
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

Paragraph Quote(string text)
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
    pPr.Append(new SpacingBetweenLines { Before = "120", After = "120", Line = "360", LineRule = LineSpacingRuleValues.Auto });
    pPr.Append(new Indentation { Left = "200", Right = "200" });
    p.AppendChild(pPr);
    p.AppendChild(new Run(RPr("宋体", "Times New Roman", 22, color: "1F3864"),
        new Text("▌ " + text) { Space = SpaceProcessingModeValues.Preserve }));
    return p;
}

Paragraph TimeLabel(string time, string stage)
{
    var p = new Paragraph();
    var pPr = new ParagraphProperties();
    pPr.Append(new SpacingBetweenLines { Before = "60", After = "60", Line = "320", LineRule = LineSpacingRuleValues.Auto });
    p.AppendChild(pPr);
    p.AppendChild(new Run(RPr("黑体", "Arial", 22, bold: true, color: "C00000"), new Text("【" + time + "】 ") { Space = SpaceProcessingModeValues.Preserve }));
    p.AppendChild(new Run(RPr("黑体", "Arial", 22, bold: true, color: "1F3864"), new Text(stage) { Space = SpaceProcessingModeValues.Preserve }));
    return p;
}

Table BuildTable(string[][] rows, int[] colWidths, int fontHalfPt = 20, int headerFontHalfPt = 22)
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
    tbl.AppendChild(tblPr);
    var grid = new TableGrid();
    foreach (var w in colWidths) grid.Append(new GridColumn { Width = w.ToString() });
    tbl.AppendChild(grid);
    for (int i = 0; i < rows.Length; i++)
    {
        var tr = new TableRow();
        if (i == 0) tr.AppendChild(new TableRowProperties(new CantSplit()));
        for (int j = 0; j < rows[i].Length; j++)
        {
            var tc = new TableCell();
            var tcPr = new TableCellProperties();
            tcPr.Append(new TableCellWidth { Width = colWidths[j].ToString(), Type = TableWidthUnitValues.Dxa });
            if (i == 0) tcPr.Append(new Shading { Val = ShadingPatternValues.Clear, Fill = "2F5496" });
            tc.AppendChild(tcPr);
            var para = new Paragraph();
            var pp = new ParagraphProperties();
            pp.Append(new SpacingBetweenLines { Before = "60", After = "60", Line = "320", LineRule = LineSpacingRuleValues.Auto });
            pp.Append(new Justification { Val = (i == 0 || j == 0) ? JustificationValues.Center : JustificationValues.Left });
            para.AppendChild(pp);
            string color = (i == 0) ? "FFFFFF" : "000000";
            bool bold = (i == 0 || j == 0);
            int sz = (i == 0) ? headerFontHalfPt : fontHalfPt;
            para.AppendChild(new Run(RPr("宋体", "Arial", sz, bold: bold, color: color), new Text(rows[i][j]) { Space = SpaceProcessingModeValues.Preserve }));
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

var stylesPart = mainPart.AddNewPart<StyleDefinitionsPart>();
var styles = new Styles();
var docDefaults = new DocDefaults();
var rPrDefault = new RunPropertiesDefault();
rPrDefault.Append(new RunPropertiesBaseStyle(
    new RunFonts { Ascii = "Times New Roman", EastAsia = "宋体", ComplexScript = "Times New Roman" },
    new FontSize { Val = "22" }, new FontSizeComplexScript { Val = "22" }));
docDefaults.Append(rPrDefault);
docDefaults.Append(new ParagraphPropertiesDefault(new SpacingBetweenLines { Line = "360", LineRule = LineSpacingRuleValues.Auto }));
styles.Append(docDefaults);

var normal = new Style { Type = StyleValues.Paragraph, StyleId = "Normal", Default = true };
normal.Append(new StyleName { Val = "Normal" });
normal.Append(new StyleRunProperties(
    new RunFonts { Ascii = "Times New Roman", EastAsia = "宋体", ComplexScript = "Times New Roman" },
    new FontSize { Val = "22" }, new FontSizeComplexScript { Val = "22" }));
styles.Append(normal);

Style MakeHeading(string id, string name, int halfPt, string color, int outline)
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
    rPr.Append(new RunFonts { Ascii = "Arial", EastAsia = "黑体", ComplexScript = "Arial" });
    rPr.Append(new Bold()); rPr.Append(new BoldComplexScript());
    rPr.Append(new FontSize { Val = halfPt.ToString() });
    rPr.Append(new FontSizeComplexScript { Val = halfPt.ToString() });
    rPr.Append(new Color { Val = color });
    s.Append(rPr);
    return s;
}
styles.Append(MakeHeading("Heading1", "heading 1", 40, "1F3864", 0));
styles.Append(MakeHeading("Heading2", "heading 2", 32, "2F5496", 1));
styles.Append(MakeHeading("Heading3", "heading 3", 28, "2F5496", 2));
stylesPart.Styles = styles;

var sectPr = new SectionProperties();
sectPr.Append(new PageSize { Width = 11906, Height = 16838 });
sectPr.Append(new PageMargin { Top = 1418, Right = 1418, Bottom = 1418, Left = 1418, Header = 720, Footer = 720, Gutter = 0 });
sectPr.Append(new Columns { Space = "720" });
sectPr.Append(new DocGrid { Type = DocGridValues.Lines, LinePitch = 312 });

var headerPart = mainPart.AddNewPart<HeaderPart>();
var header = new Header();
var hPara = new Paragraph();
var hPpr = new ParagraphProperties();
hPpr.Append(new Justification { Val = JustificationValues.Center });
hPpr.Append(new ParagraphBorders(new BottomBorder { Val = BorderValues.Single, Size = 4, Color = "C00000", Space = 1 }));
hPara.AppendChild(hPpr);
hPara.AppendChild(new Run(RPr("黑体", "Arial", 18, bold: true, color: "1F3864"),
    new Text("一线管理者的现代五项 · 讲师手册") { Space = SpaceProcessingModeValues.Preserve }));
header.AppendChild(hPara);
headerPart.Header = header;
sectPr.Append(new HeaderReference { Id = mainPart.GetIdOfPart(headerPart), Type = HeaderFooterValues.Default });

var footerPart = mainPart.AddNewPart<FooterPart>();
var footer = new Footer();
var fPara = new Paragraph();
var fPpr = new ParagraphProperties();
fPpr.Append(new Justification { Val = JustificationValues.Center });
fPara.AppendChild(fPpr);
fPara.AppendChild(new Run(RPr("宋体", "Times New Roman", 18, color: "808080"), new Text("【内部资料】 第 ") { Space = SpaceProcessingModeValues.Preserve }));
fPara.AppendChild(new Run(RPr("宋体", "Times New Roman", 18, color: "808080"), new SimpleField { Instruction = "PAGE \\* MERGEFORMAT" }));
fPara.AppendChild(new Run(RPr("宋体", "Times New Roman", 18, color: "808080"), new Text(" 页 / 共 ") { Space = SpaceProcessingModeValues.Preserve }));
fPara.AppendChild(new Run(RPr("宋体", "Times New Roman", 18, color: "808080"), new SimpleField { Instruction = "NUMPAGES \\* MERGEFORMAT" }));
fPara.AppendChild(new Run(RPr("宋体", "Times New Roman", 18, color: "808080"), new Text(" 页") { Space = SpaceProcessingModeValues.Preserve }));
footer.AppendChild(fPara);
footerPart.Footer = footer;
sectPr.Append(new FooterReference { Id = mainPart.GetIdOfPart(footerPart), Type = HeaderFooterValues.Default });

// COVER
var coverPara = new Paragraph();
var cPpr = new ParagraphProperties();
cPpr.Append(new SpacingBetweenLines { Before = "2000", After = "240" });
coverPara.AppendChild(cPpr);
coverPara.AppendChild(new Run(RPr("黑体", "Arial", 28, bold: true, color: "C00000"), new Text("【内部资料 · 讲师专用】") { Space = SpaceProcessingModeValues.Preserve }));
body.AppendChild(coverPara);

body.AppendChild(P(null, JustificationValues.Center));
var titlePara = new Paragraph();
var tPpr = new ParagraphProperties();
tPpr.Append(new Justification { Val = JustificationValues.Center });
tPpr.Append(new SpacingBetweenLines { Before = "240", After = "240" });
titlePara.AppendChild(tPpr);
titlePara.AppendChild(new Run(RPr("黑体", "Arial", 56, bold: true, color: "1F3864"), new Text("一线管理者的现代五项") { Space = SpaceProcessingModeValues.Preserve }));
body.AppendChild(titlePara);

var subPara = new Paragraph();
var sPpr = new ParagraphProperties();
sPpr.Append(new Justification { Val = JustificationValues.Center });
subPara.AppendChild(sPpr);
subPara.AppendChild(new Run(RPr("宋体", "Times New Roman", 32, color: "2F5496"), new Text("讲师手册 Facilitator Guide") { Space = SpaceProcessingModeValues.Preserve }));
body.AppendChild(subPara);

body.AppendChild(P(null, JustificationValues.Center));
body.AppendChild(P(null, JustificationValues.Center));
body.AppendChild(P(null, JustificationValues.Center));
body.AppendChild(P(null, JustificationValues.Center));
body.AppendChild(P(null, JustificationValues.Center));

var infoPara = new Paragraph();
var iPpr = new ParagraphProperties();
iPpr.Append(new Justification { Val = JustificationValues.Center });
iPpr.Append(new SpacingBetweenLines { Before = "120", After = "120" });
iPpr.Append(new ParagraphBorders(
    new TopBorder { Val = BorderValues.Double, Size = 12, Color = "1F3864", Space = 4 },
    new BottomBorder { Val = BorderValues.Double, Size = 12, Color = "1F3864", Space = 4 }
));
infoPara.AppendChild(iPpr);
infoPara.AppendChild(new Run(RPr("宋体", "Times New Roman", 24), new Text("授 课 时 长：12.5–13 小时（两日线下工作坊）") { Space = SpaceProcessingModeValues.Preserve }));
body.AppendChild(infoPara);
var infoPara2 = new Paragraph();
infoPara2.AppendChild(new ParagraphProperties(new Justification { Val = JustificationValues.Center }, new SpacingBetweenLines { Before = "180", After = "120" }));
infoPara2.AppendChild(new Run(RPr("宋体", "Times New Roman", 24), new Text("授 课 对 象：带团队的一线管理者") { Space = SpaceProcessingModeValues.Preserve }));
body.AppendChild(infoPara2);
var infoPara3 = new Paragraph();
infoPara3.AppendChild(new ParagraphProperties(new Justification { Val = JustificationValues.Center }, new SpacingBetweenLines { Before = "180", After = "120" }));
infoPara3.AppendChild(new Run(RPr("宋体", "Times New Roman", 24), new Text("讲  师：________________________") { Space = SpaceProcessingModeValues.Preserve }));
body.AppendChild(infoPara3);
var infoPara4 = new Paragraph();
infoPara4.AppendChild(new ParagraphProperties(new Justification { Val = JustificationValues.Center }, new SpacingBetweenLines { Before = "180", After = "120" }));
infoPara4.AppendChild(new Run(RPr("宋体", "Times New Roman", 24), new Text("授 课 日 期：________________________") { Space = SpaceProcessingModeValues.Preserve }));
body.AppendChild(infoPara4);

body.AppendChild(P(null, JustificationValues.Center));
body.AppendChild(P(null, JustificationValues.Center));
var motto = new Paragraph();
var mPpr = new ParagraphProperties();
mPpr.Append(new Justification { Val = JustificationValues.Center });
motto.AppendChild(mPpr);
motto.AppendChild(new Run(RPr("宋体", "Times New Roman", 24, color: "808080"), new Text("—— 让每个学员带着自己的「管理行动地图」离开课堂 ——") { Space = SpaceProcessingModeValues.Preserve }));
body.AppendChild(motto);

PageBreak(body);

body.AppendChild(Heading1("一、写给讲师：课程理念"));
body.AppendChild(Heading2("开场就用的话"));
body.AppendChild(Quote("教学不是「传输信息」，是「让人发生改变」。这两天，我们不做知识的搬运工，我们做改变的催化剂——让学员用工具解决自己的真实问题，真的往前走一步。"));
body.AppendChild(Heading2("三个核心教学原则"));
body.AppendChild(Heading3("原则一：学员是「有经验的人」，不是「空白的学员」"));
body.AppendChild(Body("一线管理者来上课，心里通常有一道防线：「我做了这么多年，你能教我什么新东西？」 这道防线不是傲慢，是正当的自我保护——他们经历了太多「上完课、回去还是老样子」的培训。打破这道防线的唯一方式，不是讲理，是让他们在课堂里用工具解决自己的真实问题，真的往前走了一步。这一步一旦发生，他们就会从怀疑者变成工具的自发传播者。"));
body.AppendChild(Heading3("原则二：每个工具，必须在学员面前完整示范一遍"));
body.AppendChild(Body("每个模块的工具，在讲完之后、让学员练习之前，都需要讲师用一个具体的案例（李明的故事）完整示范一遍工具的使用过程——不是用 PPT「展示最终结果」，而是现场「走一遍」。这对学员的意义是：看见「这个工具在真实情景里长什么样」，而不只是「听懂了原理」。"));
body.AppendChild(Heading3("原则三：工具练习必须用真实场景"));
body.AppendChild(Body("每个练习环节都要明确要求学员用自己工作里的真实案例，不接受「假设」或「举个例子」。如果学员说「我用我们的一个假想客户来练」，温和但坚定地说：「今天我们一定要用真实的——你现在团队里最近正在面对的，不需要很大，越真实越有价值。」 课堂上的时间有限，用真实案例的一小时，等于用假设案例的三小时。"));
PageBreak(body);

body.AppendChild(Heading1("二、两日完整流程表"));
body.AppendChild(Body("以下时间为建议值，可根据实际班级人数与节奏 ±5 分钟调整。"));
body.AppendChild(Heading2("Day 1（第一天 · 共 6.5 小时）"));
body.AppendChild(BuildTable(new string[][] {
    new[] { "时段", "时长", "环节", "工具/要点" },
    new[] { "09:00–09:15", "15 分钟", "开场导入", "学员脑子里锁定一个真实难题" },
    new[] { "09:15–11:15", "120 分钟", "模块一：复制成功", "螺旋深挖 4 问（讲师示范 + 两轮角色演练）" },
    new[] { "11:15–11:30", "15 分钟", "茶歇", "—" },
    new[] { "11:30–13:00", "90 分钟", "模块二：共谋抓手", "花刺投票（全员演练 + 小组练习）" },
    new[] { "13:00–14:00", "60 分钟", "午餐", "—" },
    new[] { "14:00–14:10", "10 分钟", "导入：为什么难题总是解决不了", "为模块三做情感预备" },
    new[] { "14:10–15:10", "60 分钟", "模块三（上）：问题树讲解 + 示范 + 小组练习", "问题树（白板现场构建）" },
    new[] { "15:10–15:25", "15 分钟", "茶歇", "—" },
    new[] { "15:25–17:15", "110 分钟", "模块三（下）：魔力破解提问讲解 + 个人练习 + 复盘", "魔力破解提问（安静书写时段）" },
}, new[] { 1900, 1100, 3800, 3200 }));
body.AppendChild(P(" "));
body.AppendChild(Heading2("Day 2（第二天 · 共 6 小时）"));
body.AppendChild(BuildTable(new string[][] {
    new[] { "时段", "时长", "环节", "工具/要点" },
    new[] { "09:00–09:10", "10 分钟", "第二天导入：第一天回顾 + 模块四铺垫", "现场收集 2-3 人一句话回顾" },
    new[] { "09:10–10:10", "60 分钟", "模块四（上）：发散矩阵讲解 + 示范 + 小组练习", "双矩阵之发散矩阵（引导者轮换）" },
    new[] { "10:10–10:25", "15 分钟", "茶歇 + 画廊式分享", "组间互看挂纸" },
    new[] { "10:25–11:25", "60 分钟", "模块四（下）：收敛矩阵讲解 + 小组练习", "双矩阵之收敛矩阵" },
    new[] { "11:25–11:40", "15 分钟", "全班展示与复盘", "迁移承诺落笔" },
    new[] { "11:40–12:40", "60 分钟", "午餐", "—" },
    new[] { "12:40–13:00", "20 分钟", "导入：救火队长的代价", "为模块五做情感预备" },
    new[] { "13:00–14:00", "60 分钟", "模块五：推演双表格讲解 + 示范", "推演双表格" },
    new[] { "14:00–14:15", "15 分钟", "茶歇", "—" },
    new[] { "14:15–15:15", "60 分钟", "模块五：个人独立练习 + 互评 + 分享", "推演双表格填写" },
    new[] { "15:15–15:30", "15 分钟", "复盘与迁移承诺", "填反思日志 5" },
    new[] { "15:30–16:30", "60 分钟", "总结与个人行动计划", "总结 + 行动计划 + 结语" },
}, new[] { 1900, 1100, 3800, 3200 }));
PageBreak(body);

body.AppendChild(Heading1("三、模块一：复制成功（2 小时）"));
body.AppendChild(Heading2("模块信息"));
body.AppendChild(BuildTable(new string[][] {
    new[] { "项目", "内容" },
    new[] { "时长", "120 分钟" },
    new[] { "对应能力点", "M1-1 提炼成功案例的可复制原则；M1-2 主持螺旋深挖 4 问对话" },
    new[] { "物料", "参考卡 1、练习表 1A / 1B、计时器" },
}, new[] { 2200, 7800 }));
body.AppendChild(Heading2("120 分钟时间分解"));
body.AppendChild(BuildTable(new string[][] {
    new[] { "时段", "时长", "环节" },
    new[] { "0–10 分钟", "10 分钟", "导入：你知道谁做得好，但你知道为什么吗" },
    new[] { "10–12 分钟", "2 分钟", "目标说明" },
    new[] { "12–30 分钟", "18 分钟", "工具讲解：螺旋深挖 4 问" },
    new[] { "30–50 分钟", "20 分钟", "讲师示范：与一位学员现场进行完整 4 问对话" },
    new[] { "50–75 分钟", "25 分钟", "第一轮角色演练（A 管理者 / B 团队成员）" },
    new[] { "75–100 分钟", "25 分钟", "第二轮角色互换练习" },
    new[] { "100–115 分钟", "15 分钟", "全班分享与复盘" },
    new[] { "115–120 分钟", "5 分钟", "迁移承诺" },
}, new[] { 2500, 1500, 6000 }));

body.AppendChild(Heading2("导入关键话术（0–10 分钟）"));
body.AppendChild(TimeLabel("0 分钟", "主线问题"));
body.AppendChild(Quote("我先问大家一个问题——在你的团队里，最近半年，有没有某一个成员，做了某一件事，结果特别好，让你觉得'哇，这家伙厉害'？（停顿）有的话举个手——不用说出来，只是举一下。"));
body.AppendChild(TimeLabel("3 分钟", "深入问题"));
body.AppendChild(Quote("好，现在我再问第二个问题：那个成功，你有没有系统地想过——为什么他/她这次能做成，背后的关键动作是什么，其他人能不能学？"));
body.AppendChild(TimeLabel("5 分钟", "分支应对"));
body.AppendChild(Quote("（若沉默）沉默是最好的答案。绝大多数管理者，知道谁做得好，但从来没有认真去想'好'背后的可复制机制是什么。今天的第一件工具，就是帮你解决这件事。"));

body.AppendChild(Heading2("工具讲解要点（12–30 分钟）"));
body.AppendChild(Body("4 问各自挖的是不同的层：问 1 挖「行为」，问 2 挖「思维」，问 3 挖「原则」，问 4 挖「路径」。「螺旋」意味着任何一问答案不清，就回到上一问重问。"));
body.AppendChild(Quote("为什么叫'螺旋'？因为这 4 个问题不是直线推进的——如果回答者在某一问卡住了，你要回到前一问再问一遍，直到这一问的答案真的清楚了，再往下走。这个回头和重问的动作，就是'螺旋'。"));
body.AppendChild(Body("李明案例预热：李明的员工小王成交率高出团队 30%，李明准备用 4 问找答案。"));

body.AppendChild(Heading2("讲师示范关键话术（30–50 分钟）"));
body.AppendChild(Quote("（对全班）接下来，我要请一位同学帮个忙——XXX，你之前跟我说，你们团队里有一个最近做得不错的案例，对吧？我现在当着大家的面，用 4 问和你聊一聊，你只需要诚实地回答我就好，不需要有任何准备。"));
body.AppendChild(Quote("（示范结束后）对全班：大家注意，整个过程里，我用 4 问之外的追问是什么？"));
body.AppendChild(Body("常见追问技巧：能不能更具体一点？这个原则在其他场景也成立吗？如果你只能说一件最关键的事，是哪个？"));

body.AppendChild(Heading2("角色演练走位与干预（50–100 分钟）"));
body.AppendChild(BuildTable(new string[][] {
    new[] { "现象", "应对" },
    new[] { "A 在问 1 不追问「具体行为」直接跳到问 2", "走近轻声：先在问 1 停一下——他/她说的这个，已经是一个可以让别人照着做的具体动作了吗？" },
    new[] { "问 3 回答仍是行为而非原则", "提示 A：这是行为，不是原则。可以问一下：为什么'认真研究客户需求'这件事有效——背后的道理是什么？" },
    new[] { "对话停留在表面无真实细节", "示意停下：B，能不能说一个非常具体的时刻？比如当时你说了哪句话，对方反应是什么？" },
    new[] { "A 不敢追问，接受模糊答案", "走近轻声：你的工作是不接受模糊——可以再追一次：能不能再具体说一下？" },
}, new[] { 4500, 5500 }));

body.AppendChild(Heading2("迁移承诺（115–120 分钟）"));
body.AppendChild(Quote("把刚才第三层的回答，写进你的反思日志 1——'我打算和___（姓名）___聊一次，案例是___（简单描述）___，时间是___（具体到某一天）___。'"));
body.AppendChild(Heading2("讲师自检清单"));
body.AppendChild(Body("· 示范环节是否真正找了一位学员现场进行了真实的 4 问对话，而不是讲师自问自答？"));
body.AppendChild(Body("· 在示范中，问 3 是否出现过「B 第一次给的答案仍然是行为而非原则」的情况，而你是否示范了追问？"));
body.AppendChild(Body("· 第一轮演练中，是否至少有一次走近某组，帮助「管理者」学员追问「问 3」？"));
body.AppendChild(Body("· 复盘第三层的承诺，是否具体到「哪位成员、什么案例、哪一天」？"));
PageBreak(body);

body.AppendChild(Heading1("四、模块二：共谋抓手（1.5 小时）"));
body.AppendChild(Heading2("模块信息"));
body.AppendChild(BuildTable(new string[][] {
    new[] { "项目", "内容" },
    new[] { "时长", "90 分钟" },
    new[] { "对应能力点", "M2-1 识别业绩驱动因素；M2-2 主持花刺投票" },
    new[] { "物料", "参考卡 2、练习表 2A / 2B、花形/刺形贴纸、便利贴、活动挂纸" },
}, new[] { 2200, 7800 }));
body.AppendChild(Heading2("90 分钟时间分解"));
body.AppendChild(BuildTable(new string[][] {
    new[] { "时段", "时长", "环节" },
    new[] { "0–8 分钟", "8 分钟", "导入：会议开了，但走出去没有重点" },
    new[] { "8–10 分钟", "2 分钟", "目标说明" },
    new[] { "10–22 分钟", "12 分钟", "工具讲解：花刺投票的逻辑与步骤" },
    new[] { "22–45 分钟", "23 分钟", "全员演练：以课程抓手为主题做一轮全员花刺投票" },
    new[] { "45–70 分钟", "25 分钟", "小组练习：真实业绩议题的花刺投票模拟" },
    new[] { "70–82 分钟", "12 分钟", "全班分享与复盘" },
    new[] { "82–90 分钟", "8 分钟", "迁移承诺" },
}, new[] { 2500, 1500, 6000 }));

body.AppendChild(Heading2("导入关键话术"));
body.AppendChild(Quote("我想先请大家回忆一件事——最近一次你主持或者参加的'业绩讨论会'或者'问题分析会'，散会的时候是什么感觉？（停顿）有没有这种情况：大家讨论了很多，但走出会议室，你说不清楚今天决定了什么？"));
body.AppendChild(Quote("今天的第二件工具，叫花刺投票。它解决的不是'开会的效率'，而是'会后是否真的有共识、有行动'的问题。"));
body.AppendChild(Body("关键讲解要点："));
body.AppendChild(Quote("为什么要'静默'投票？因为在一般的讨论会里，声音最大的人或者级别最高的人，往往会主导结论——即使其他人有不同看法，也不会开口。静默投票，让每个人的真实判断都进入结果，不被'社会压力'影响。"));
body.AppendChild(Quote("为什么要分'花'和'刺'？因为推动业绩，不只是找机会，还要识别障碍。很多团队会议只讨论'我们要做什么'，但忽略了'有什么东西会让这些行动失效'。刺票，就是在识别那个'拦路虎'。"));

body.AppendChild(Heading2("小组练习走位与干预"));
body.AppendChild(BuildTable(new string[][] {
    new[] { "现象", "应对" },
    new[] { "主持人对组员的抓手做评判（'这个不可能'）", "走近轻声：这一步不评判——先让大家把所有想到的都列出来，好不好留到投票和讨论再说。" },
    new[] { "有人等别人先贴，然后跟着贴", "提示主持人：投票前先说一句：大家先各自想好，不要等别人——我数到 3，大家同时贴。" },
    new[] { "只讨论了花票最多的，忘了讨论刺票最多的", "在该组讨论快结束时走近：还有一件事——刺票最多的那个，你们讨论了吗？" },
}, new[] { 4500, 5500 }));

body.AppendChild(Heading2("迁移承诺"));
body.AppendChild(Quote("写进反思日志——下次我打算在___（什么议题）___的团队会议上用花刺投票，时间大概是___（某天）___。在用之前，我需要提前准备的是___（候选抓手清单/贴纸/会议主题说明）___。"));
body.AppendChild(Heading2("干扰情景应对"));
body.AppendChild(BuildTable(new string[][] {
    new[] { "情景", "应对" },
    new[] { "学员说'这是民主决策，不是我的风格'", "花刺投票不是'让团队决策'，是'让管理者看清楚团队的真实判断'——最终决定权还在你，但你会有更完整的信息去做决定。" },
    new[] { "投票结果出来后主管说'这个结果不对'", "这个分歧本身是信息：是团队没有看到你看到的东西，还是你没有看到团队看到的东西？这两者后续行动完全不同。" },
    new[] { "刺票投给了'上级不支持'等超出团队控制范围", "不评判，但在讨论阶段说：这条提醒我们，有一类障碍需要向上级申请支持，现在先聚焦团队内部可推动的抓手。" },
}, new[] { 4500, 5500 }));
PageBreak(body);

body.AppendChild(Heading1("五、模块三：应对难题（3 小时）"));
body.AppendChild(Heading2("模块信息"));
body.AppendChild(BuildTable(new string[][] {
    new[] { "项目", "内容" },
    new[] { "时长", "180 分钟（含一次茶歇）" },
    new[] { "对应能力点", "M3-1 问题树拆解；M3-2 魔力破解提问" },
    new[] { "物料", "参考卡 3A/3B、练习表 3A/3B、A3 白纸、马克笔" },
}, new[] { 2200, 7800 }));
body.AppendChild(Heading2("180 分钟时间分解"));
body.AppendChild(BuildTable(new string[][] {
    new[] { "时段", "时长", "环节" },
    new[] { "0–10 分钟", "10 分钟", "导入：为什么难题总是解决不了" },
    new[] { "10–12 分钟", "2 分钟", "目标说明" },
    new[] { "12–30 分钟", "18 分钟", "工具讲解一：问题树的逻辑与构建" },
    new[] { "30–50 分钟", "20 分钟", "讲师示范：李明问题树现场构建" },
    new[] { "50–90 分钟", "40 分钟", "小组练习：构建问题树" },
    new[] { "90–105 分钟", "15 分钟", "茶歇 + 阶段回顾" },
    new[] { "105–120 分钟", "15 分钟", "工具讲解二：魔力破解提问 5 问" },
    new[] { "120–140 分钟", "20 分钟", "个人练习：魔力破解提问" },
    new[] { "140–155 分钟", "15 分钟", "两人互述 + 全班分享" },
    new[] { "155–170 分钟", "15 分钟", "复盘" },
    new[] { "170–180 分钟", "10 分钟", "迁移承诺" },
}, new[] { 2500, 1500, 6000 }));

body.AppendChild(Heading2("导入关键话术（0–10 分钟）"));
body.AppendChild(Quote("下午好——我们进入今天最重头的模块：应对难题。我想先问一个有点直接的问题：你现在手上，有没有一个问题，你已经试了不止一种方法，但还是没有解决——你都快被它烦透了？"));
body.AppendChild(Quote("这种问题，有一个共同的特征：它很模糊。你说不清楚它到底是什么，只是知道'有哪里不对劲'。而一个说不清楚的问题，是没有办法被真正解决的——因为你还不知道它的真实形状是什么。问题树解决的第一件事，不是'怎么解决问题'，而是'看清楚问题是什么'。"));

body.AppendChild(Heading2("工具讲解一：问题树（12–30 分钟）"));
body.AppendChild(Body("问题树四步：①写下症状 ②第一层拆解（哪几个方面） ③第二层拆解（每个方面的具体原因） ④找切入点（影响大 + 我能影响）。"));
body.AppendChild(Quote("第四步是整个问题树最重要的步骤，也是最容易被跳过的。很多人画了问题树，但最后还是不知道从哪里下手，原因就是没有明确地做'找切入点'这个动作。切入点有两个标准——'影响大'和'我能影响'。这两个标准要同时满足。'影响大但我没有权限动'的不算切入点，那叫'需要向上争取的支持'。'我能动但影响很小'的也不是好切入点。"));

body.AppendChild(Heading2("讲师示范：李明问题树（30–50 分钟）"));
body.AppendChild(Quote("我现在用李明的难题，当着大家的面把问题树构建一遍。大家的任务：观察我在哪个步骤花了最多时间，以及我是怎么判断'切入点'的。"));
body.AppendChild(Body("示范流程（讲师现场在白板上画）："));
body.AppendChild(Body("· 症状：李明的门店连续两季度业绩未达标"));
body.AppendChild(Body("· 一级分支：客流 / 转化率 / 客单价 / 复购"));
body.AppendChild(Body("· 二级分支（以「转化率」为例）：接待响应慢 / 演示方式不够吸引人（小王改进了这个）/ 竞品比价 / 导购话术不够强"));
body.AppendChild(Quote("在李明的情况里，'接待响应慢'和'演示方式不够吸引人'这两条，影响都比较大，而且都是李明能够直接管理的——不需要总部支持，不需要改产品。这两个就是切入点。"));

body.AppendChild(Heading2("小组练习走位与干预（50–90 分钟）"));
body.AppendChild(BuildTable(new string[][] {
    new[] { "现象", "应对" },
    new[] { "一级分支拆得不 MECE", "走近提问：这两条是同一个层面的东西吗？一个是原因，一个是……什么？" },
    new[] { "小组停留在一级不展开二级", "先在一级里选一条最重要的，只展开这一条的二级——不需要把所有一级都展开" },
    new[] { "切入点选了需要总部批准的事", "走近问：在这棵树里，有没有一条是'你本周就可以动的'？" },
    new[] { "小组在讨论解决方案", "我们先把树画完，解决方案留到后面——现在的任务是'看清楚问题是什么'" },
}, new[] { 3500, 6500 }));

body.AppendChild(Heading2("魔力破解提问讲解（105–120 分钟）"));
body.AppendChild(BuildTable(new string[][] {
    new[] { "问", "核心视角" },
    new[] { "问 1 破假设", "我们一直认为某件事不可能/必须是这样——这个假设真的对吗？" },
    new[] { "问 2 借他山", "其他行业/场景有没有面对过类似问题？他们怎么解决的？" },
    new[] { "问 3 极端情景", "如果资源充足会怎么做？如果只有 1/10 资源呢？" },
    new[] { "问 4 换位思考", "从客户/团队/竞争对手/上级角度看是什么样的？" },
    new[] { "问 5 倒推法", "想象一年后这个问题已经解决了，你是怎么做到的？" },
}, new[] { 2000, 8000 }));
body.AppendChild(Quote("这 5 个问题，不是让你'全部回答'，而是把它们当作 5 把钥匙——用每一把去试一试你的切入点，看看哪一把让你产生了'哦，这个角度我之前没想过'的感觉。有一把奏效，就够了。"));

body.AppendChild(Heading2("个人练习：魔力破解提问（120–140 分钟）"));
body.AppendChild(Body("这是全课程最需要讲师「闭嘴」的时刻：13 分钟安静书写，讲师只做巡场，不主动开口。"));
body.AppendChild(Heading2("干扰情景应对"));
body.AppendChild(BuildTable(new string[][] {
    new[] { "情景", "应对" },
    new[] { "学员觉得问题树就是'鱼骨图'", "今天的重点不是'它叫什么名字'，而是用它完成第四步'找切入点'这个在日常分析中最容易被跳过的动作。" },
    new[] { "把'解决方案'写进了树", "这条是解决方案，不是原因——问题树里我们只放'原因'，不放'方案'。可以把它放到旁边。" },
    new[] { "5 问都答了但没一个让他/她感觉新", "走近问：最没意思的是哪个？有时候'觉得没意思'说明这个方向你已经想过了；有时候说明这个角度对你来说有点陌生，但陌生的角度往往是新方向的入口。" },
}, new[] { 4000, 6000 }));

body.AppendChild(Heading2("迁移承诺（170–180 分钟）"));
body.AppendChild(Quote("把刚才第三层的回答写进反思日志 3——'切入点是____；新方向是____；我打算____（具体行动）____（时间节点）'。"));
body.AppendChild(Heading2("第一天总结（额外 5 分钟）"));
body.AppendChild(Quote("今天我们走了三件工具：复制成功，共谋抓手，应对难题。这三件工具，有没有人能一句话说一下，它们之间的关系是什么？"));
PageBreak(body);

body.AppendChild(Heading1("六、模块四：引领共创（3 小时）"));
body.AppendChild(Heading2("模块信息"));
body.AppendChild(BuildTable(new string[][] {
    new[] { "项目", "内容" },
    new[] { "时长", "180 分钟（含茶歇）" },
    new[] { "对应能力点", "M4-1 主持发散矩阵；M4-2 主持收敛矩阵" },
    new[] { "物料", "参考卡 4、练习表 4A / 4B、大张挂纸、便利贴、马克笔" },
}, new[] { 2200, 7800 }));
body.AppendChild(Heading2("180 分钟时间分解"));
body.AppendChild(BuildTable(new string[][] {
    new[] { "时段", "时长", "环节" },
    new[] { "0–10 分钟", "10 分钟", "第二天导入：第一天回顾 + 共创必要性" },
    new[] { "10–12 分钟", "2 分钟", "目标说明" },
    new[] { "12–30 分钟", "18 分钟", "工具讲解一：发散矩阵结构与主持逻辑" },
    new[] { "30–45 分钟", "15 分钟", "讲师示范：发散矩阵现场演示" },
    new[] { "45–80 分钟", "35 分钟", "小组练习一：发散矩阵（引导者轮换）" },
    new[] { "80–95 分钟", "15 分钟", "茶歇 + 发散成果展示（画廊式）" },
    new[] { "95–115 分钟", "20 分钟", "工具讲解二：收敛矩阵结构与主持逻辑" },
    new[] { "115–150 分钟", "35 分钟", "小组练习二：收敛矩阵" },
    new[] { "150–165 分钟", "15 分钟", "全班展示与复盘" },
    new[] { "165–180 分钟", "15 分钟", "迁移承诺" },
}, new[] { 2500, 1500, 6000 }));

body.AppendChild(Heading2("第二天导入关键话术（0–10 分钟）"));
body.AppendChild(Quote("早上好——我们先快速回顾一下昨天。我们走了三件工具：螺旋深挖 4 问，花刺投票，问题树 + 魔力破解提问。有没有人愿意用一句话，说一下昨天让你印象最深的一个点？"));
body.AppendChild(Quote("昨天结束的时候，大家都找到了一个'切入点'和一个'新方向'。今天上午，我们把这个新方向，带进一个团队共创的过程——不是你自己想方案，而是你作为管理者，引导你的团队一起把方案想出来。"));

body.AppendChild(Heading2("工具讲解一：发散矩阵（12–30 分钟）"));
body.AppendChild(BuildTable(new string[][] {
    new[] { " ", "团队内部可控", "需要外部资源/协调" },
    new[] { "短期（1-4 周）", "Q1 快赢区", "Q2 协调推进区" },
    new[] { "中长期（1-3 个月）", "Q3 能力建设区", "Q4 战略布局区" },
}, new[] { 2200, 3900, 3900 }));
body.AppendChild(Quote("为什么要用矩阵来做脑暴？因为人在自然状态下，想到的点子几乎都是'短期、内部可控'的——也就是 Q1 格子里的东西。这不是坏事，但这意味着 Q2、Q3、Q4 三个格子里可能有价值的想法，从来没有机会出现。"));
body.AppendChild(Quote("作为引导者，在发散阶段，你的工作是不评判——不管想法多奇怪，都让它出现，写到便利贴上。评判这件事，留给收敛矩阵。如果你在发散阶段就说'这个不现实'，下次大家就不会再说了。"));

body.AppendChild(Heading2("引导者的提问方式（四个格子）"));
body.AppendChild(BuildTable(new string[][] {
    new[] { "格子", "提问方式" },
    new[] { "Q1 短期 + 内部", "接下来 4 周，我们团队自己能马上动起来的事，有哪些？" },
    new[] { "Q2 短期 + 外部", "如果能争取到总部/其他部门/合作方的支持，近期能做什么？" },
    new[] { "Q3 中长期 + 内部", "3 个月之内，我们需要在团队能力上建立什么？" },
    new[] { "Q4 中长期 + 外部", "从战略角度，有什么是需要提前布局、需要争取资源的？" },
}, new[] { 2500, 7500 }));

body.AppendChild(Heading2("工具讲解二：收敛矩阵（95–115 分钟）"));
body.AppendChild(BuildTable(new string[][] {
    new[] { " ", "高影响力", "低影响力" },
    new[] { "落地容易", "★ 优先行动区", "随机应变区" },
    new[] { "落地困难", "战略项目区", "暂不考虑区" },
}, new[] { 2200, 3900, 3900 }));
body.AppendChild(Quote("发散矩阵给了我们很多想法——现在的问题是，从这些想法里，我们怎么决定先做哪个？收敛矩阵用两个维度来评估：影响力（做了之后对主题目标的改善有多大）和落地难度（实现起来有多难）。最重要的格子是左上角——高影响力 + 落地难度低。这里是'优先行动区'。"));
body.AppendChild(Body("主持收敛矩阵的三步骤："));
body.AppendChild(Body("① 独立评估：每人在收敛矩阵上独立标注，不讨论"));
body.AppendChild(Body("② 对比 + 讨论：汇总评估，找出分歧最大的几条专门讨论"));
body.AppendChild(Body("③ 确定优先行动区：选出 2-3 条，写明谁负责、做什么、第一步什么时候完成"));

body.AppendChild(Heading2("走位关键观察点"));
body.AppendChild(BuildTable(new string[][] {
    new[] { "现象", "应对" },
    new[] { "引导者在发散阶段评判想法", "走近轻声：发散阶段先不评判——你可以说'好，记下来，继续'，评判等到下半段" },
    new[] { "Q4 格子空了，没有人提想法", "提示引导者：问一下大家，如果总部愿意支持我们做一件战略性的事，最想争取什么？" },
    new[] { "引导者说得比成员多", "走近轻声：作为引导者，你的产想法可以等最后——现在先听大家的，你的工作是提问，不是提想法" },
    new[] { "行动计划写成'加强 XX'或'提升 XX'", "行动计划需要能让人看懂——谁来做，做什么具体的事，第一步什么时候完成——'加强'不是行动，是方向。" },
}, new[] { 4500, 5500 }));

body.AppendChild(Heading2("迁移承诺（165–180 分钟）"));
body.AppendChild(Quote("在反思日志 4 里，写：'我打算在____（议题）的团队会议上，试用一次双矩阵。时间是____。我预计在发散阶段最容易出现的挑战是____，我会这样应对：____'"));
body.AppendChild(Heading2("干扰情景应对"));
body.AppendChild(BuildTable(new string[][] {
    new[] { "情景", "应对" },
    new[] { "学员说'头脑风暴我们团队不擅长'", "双矩阵有一个专门帮助'不说话的团队'的机制——便利贴是每人独立写，不需要开口说。你可以先说：'不需要说话，先写 3 分钟'。" },
    new[] { "收敛矩阵讨论时某学员一直主导", "引导者使用轮问技巧：'我想请 A 来说——你对这条的影响力怎么看？'" },
    new[] { "优先行动区选了一条需要总部批准才能做的事", "提示：把'争取支持的行动'作为一个前置动作写进计划。" },
}, new[] { 4000, 6000 }));
PageBreak(body);

body.AppendChild(Heading1("七、模块五：前瞻思考（2 小时）"));
body.AppendChild(Heading2("模块信息"));
body.AppendChild(BuildTable(new string[][] {
    new[] { "项目", "内容" },
    new[] { "时长", "120 分钟" },
    new[] { "对应能力点", "M5-1 风险推演；M5-2 机会推演" },
    new[] { "物料", "参考卡 5、练习表 5A / 5B、行动计划表、结业卡" },
}, new[] { 2200, 7800 }));
body.AppendChild(Heading2("120 分钟时间分解"));
body.AppendChild(BuildTable(new string[][] {
    new[] { "时段", "时长", "环节" },
    new[] { "0–8 分钟", "8 分钟", "导入：救火队长的代价" },
    new[] { "8–10 分钟", "2 分钟", "目标说明" },
    new[] { "10–25 分钟", "15 分钟", "工具讲解：推演双表格的逻辑与结构" },
    new[] { "25–40 分钟", "15 分钟", "讲师示范：李明的推演（风险 + 机会）" },
    new[] { "40–80 分钟", "40 分钟", "个人独立练习：完成双表格" },
    new[] { "80–95 分钟", "15 分钟", "两人互评 + 全班分享" },
    new[] { "95–110 分钟", "15 分钟", "复盘" },
    new[] { "110–120 分钟", "10 分钟", "迁移承诺" },
}, new[] { 2500, 1500, 6000 }));

body.AppendChild(Heading2("导入关键话术"));
body.AppendChild(Quote("我想先请大家回忆一件事——过去一年，有没有发生过一件'让你很被动'的事：你提前根本没想到它会发生，但它发生了，然后你花了远比'提前防范'多得多的时间和精力去应对？有的话，举个手。"));
body.AppendChild(Quote("如果你当时提前 30 分钟认真想了一下'这件事有没有可能出问题'，会不会就不需要后来那段时间的救火了？"));

body.AppendChild(Heading2("工具讲解要点"));
body.AppendChild(Quote("有几点要特别注意。第一，风险推演表里，'预防行动'和'应急预案'是两件不同的事。预防是在风险发生之前做的，降低它发生的概率；应急是在它真的发生之后做的，降低它的影响程度。两者都要有，不能只有其中一个。"));
body.AppendChild(Quote("第二，机会推演表和风险推演表必须同时做。只做风险，你会陷入过度保守；只做机会，你会低估障碍。两张表放在一起，才是完整的前瞻视角。"));
body.AppendChild(Quote("第三，这两张表不是一次做完就放在抽屉里——它是一个动态的跟踪工具，每隔 2-4 周，把表拿出来看一遍，更新概率和状态，这才是它真正的价值。"));

body.AppendChild(Heading2("讲师示范：李明的推演（25–40 分钟）"));
body.AppendChild(Body("示范主题：李明的优先行动是「在全团队推广体验式销售方法，目标是本季度将平均成交率从现有水平提升 15%」。"));
body.AppendChild(Body("风险推演示例："));
body.AppendChild(BuildTable(new string[][] {
    new[] { "风险", "概率", "影响", "预防行动", "应急预案" },
    new[] { "只有小王掌握，培训后其他人学不会", "中", "高", "用 4 问详细记录小王操作步骤，制作一页纸的'步骤卡'", "安排小王每周带 1-2 人做真实陪访" },
    new[] { "新竞争对手突然加大促销", "高", "高", "提前监测对手动向；建立老客户维护机制", "启动老客户专属回馈活动，快速响应" },
    new[] { "部分员工抵触（嫌麻烦）", "中", "中", "先和有意愿的 2-3 人试行，让他们成为内部示范者", "找出具体抵触原因，个别辅导" },
}, new[] { 3500, 1200, 1200, 3000, 3500 }));
body.AppendChild(Body("机会推演示例："));
body.AppendChild(BuildTable(new string[][] {
    new[] { "机会", "概率", "价值", "捕捉行动", "准备工作" },
    new[] { "本季度新品上市，体验式销售最适合", "高", "高", "提前准备新品体验演示方案", "本月内完成全员培训，确保新品到货时人人会用" },
    new[] { "对手服务质量下滑，客户主动来打听", "中", "高", "设计专门的'竞品客户到店接待流程'", "梳理差异化优势，制作对比说明" },
}, new[] { 3500, 1200, 1200, 3000, 3500 }));

body.AppendChild(Heading2("个人独立练习走位（40–80 分钟）"));
body.AppendChild(BuildTable(new string[][] {
    new[] { "现象", "应对" },
    new[] { "风险写得太模糊（如'市场变化'）", "这个风险如果要更具体，会是'如果 ____ 具体发生了，对你的行动意味着什么'？" },
    new[] { "机会表很空", "机会不一定是大好事——有时候是'某件之前做不到的事突然变得可能了'，有没有这种可能？" },
    new[] { "应急预案写'立刻开会讨论'", "开会讨论是过程，不是应急预案——明天早上第一个电话打给谁，第一件事做什么？把那件事写出来。" },
}, new[] { 4000, 6000 }));

body.AppendChild(Heading2("迁移承诺（110–120 分钟）"));
body.AppendChild(Quote("在反思日志 5 里，写：'我今天推演的行动是____。概率高 + 影响大的风险是____，我计划在____（时间）启动预防行动。最有价值的机会是____，准备工作我会在____（时间）之前完成。'"));
body.AppendChild(Heading2("干扰情景应对"));
body.AppendChild(BuildTable(new string[][] {
    new[] { "情景", "应对" },
    new[] { "学员说'这些都是假设，推演有用吗'", "是假设——但有质量的假设，比等到事情发生了再想要主动很多。推演的价值不是预测未来，而是提前思考'如果……'，当它真的发生时，你已经想过了，不需要临场发挥。" },
    new[] { "机会表的'捕捉行动'和'准备工作'一样", "区别在于：准备工作，是机会还没出现时你现在就可以做的；捕捉行动，是机会一旦出现了，你立刻要做的第一件事。" },
}, new[] { 3500, 6500 }));
PageBreak(body);

body.AppendChild(Heading1("八、工具使用规范"));
body.AppendChild(Body("本章给出每个工具的标准化使用规范，讲师在讲解环节、培训带班、新讲师交接时统一参考。"));

body.AppendChild(Heading2("M1 螺旋深挖 4 问·使用规范"));
body.AppendChild(BuildTable(new string[][] {
    new[] { "维度", "规范" },
    new[] { "适用场景", "团队里有成功案例想提炼复制时" },
    new[] { "不适用场景", "临时性任务反馈、绩效评估面谈（与本工具目标不同）" },
    new[] { "最小时间", "单次 4 问对话 12-15 分钟" },
    new[] { "必备物料", "参考卡 1、练习表 1B" },
    new[] { "成功标志", "产出 1 条用一句话说清的「可迁移原则」" },
    new[] { "失败标志", "问 3 答案仍是行为描述（'我做了 X'）而非原则" },
}, new[] { 2400, 7600 }));

body.AppendChild(Heading2("M2 花刺投票·使用规范"));
body.AppendChild(BuildTable(new string[][] {
    new[] { "维度", "规范" },
    new[] { "适用场景", "团队讨论业绩/优先级，需要形成共识时" },
    new[] { "不适用场景", "紧急单点决策、需要快速拍板的事项" },
    new[] { "最小时间", "4 步流程至少 25 分钟" },
    new[] { "必备物料", "花形/刺形贴纸、便利贴、白板/挂纸" },
    new[] { "成功标志", "花票最多 = 真实优先机会；刺票最多 = 真实关键障碍" },
    new[] { "失败标志", "主管在列候选时做了评判、投票前公开讨论导致跟风" },
}, new[] { 2400, 7600 }));

body.AppendChild(Heading2("M3 问题树 + 魔力破解提问·使用规范"));
body.AppendChild(BuildTable(new string[][] {
    new[] { "维度", "规范" },
    new[] { "适用场景", "遇到模糊难题、经验解决不了的新问题" },
    new[] { "不适用场景", "已经有清晰解法的常规任务" },
    new[] { "最小时间", "问题树 30 分钟 + 魔力提问 20 分钟 = 50 分钟" },
    new[] { "必备物料", "A3 白纸、马克笔、参考卡 3A/3B" },
    new[] { "成功标志", "切入点满足「影响大 + 我能影响」；魔力提问中至少 1 问带来新方向" },
    new[] { "失败标志", "问题树只到一级、切入点选了超出能力范围的事、5 问泛泛而答" },
}, new[] { 2400, 7600 }));

body.AppendChild(Heading2("M4 高效脑暴双矩阵·使用规范"));
body.AppendChild(BuildTable(new string[][] {
    new[] { "维度", "规范" },
    new[] { "适用场景", "需要引导团队共创方案（发散 + 收敛）" },
    new[] { "不适用场景", "纯信息同步会议、单人决策汇报" },
    new[] { "最小时间", "发散 25 分钟 + 收敛 25 分钟 = 50 分钟" },
    new[] { "必备物料", "挂纸、便利贴、马克笔、参考卡 4" },
    new[] { "成功标志", "4 个格子均有产出；优先行动区有 2-3 条具体行动（人/事/时间）" },
    new[] { "失败标志", "发散阶段过早评判；收敛阶段「谁声音大说了算」" },
}, new[] { 2400, 7600 }));

body.AppendChild(Heading2("M5 推演双表格·使用规范"));
body.AppendChild(BuildTable(new string[][] {
    new[] { "维度", "规范" },
    new[] { "适用场景", "重要行动启动之前；每 2-4 周回顾更新" },
    new[] { "不适用场景", "微小例行事务、纯信息收集任务" },
    new[] { "最小时间", "双表格完整填写 30 分钟；回顾更新 15 分钟" },
    new[] { "必备物料", "练习表 5A/5B、参考卡 5" },
    new[] { "成功标志", "至少 3 个风险情景 + 2 个机会情景；每条都有「预防+应急」或「准备+捕捉」" },
    new[] { "失败标志", "风险/机会写得模糊、应急预案写「开会讨论」、只做一张表" },
}, new[] { 2400, 7600 }));
PageBreak(body);

body.AppendChild(Heading1("九、学员常见问题与应对"));
body.AppendChild(BuildTable(new string[][] {
    new[] { "问题", "应对" },
    new[] { "我团队里没什么特别成功的案例", "不一定要是'很大'的成功——有没有某次，一个成员处理了一个以前处理不好的客户投诉？越小越好。" },
    new[] { "我们团队开会一直就是主管直接定方向", "花刺投票不是让团队决策，是让管理者看清团队的真实判断——最终决定权还在你，但信息更完整。" },
    new[] { "4 问和绩效面谈有什么区别", "绩效面谈目的是评估和激励；4 问目的是提炼知识——绩效面谈问'你做了多少'，4 问问'你的成功可以被别人学会吗'。" },
    new[] { "问题树跟鱼骨图差不多啊", "结构相似，但今天的重点是用它完成第四步'找切入点'这个在日常分析中最容易被跳过的动作。" },
    new[] { "我们团队头脑风暴大家都不说话", "便利贴是每人独立写，不需要开口说。你可以先说：'不需要说话，先写 3 分钟'。" },
    new[] { "我工作节奏极快，没时间提前规划", "不需要每件事都用——只选最重要的 1 件，下周要启动的那件，花 15 分钟填一下。15 分钟防火，可能省下 15 小时救火。" },
    new[] { "推演都是假设，有用吗", "推演的价值不是预测未来，而是提前思考'如果……'，当它真的发生时，你已经想过了，不需要临场发挥。" },
    new[] { "用 5 个工具太多了，记不住", "记住主线就够了：成功原则（M1）→ 优先机会（M2）→ 新方向（M3）→ 行动方案（M4）→ 风险机会准备（M5）。" },
    new[] { "回去之后团队不配合怎么办", "工具的有效性 80% 取决于使用它的文化。先用小场景、用 1-2 次，让大家看到'这个方法真的有用'，再扩大范围。" },
}, new[] { 4000, 6000 }));
PageBreak(body);

body.AppendChild(Heading1("十、课程效果评估"));
body.AppendChild(Heading2("评估维度"));
body.AppendChild(BuildTable(new string[][] {
    new[] { "维度", "评估方式", "时间点" },
    new[] { "反应层", "课后满意度问卷（1-5 分）", "课程结束当天" },
    new[] { "学习层", "工具使用知识测验（5 选 3 案例分析）", "课程结束当天" },
    new[] { "行为层", "4 周后回访：是否真的用上了工具、用在哪、用得怎样", "课后 4 周" },
    new[] { "结果层", "3-6 个月后回访：管理行为/团队绩效的变化", "课后 3-6 个月" },
}, new[] { 2200, 4500, 3300 }));

body.AppendChild(Heading2("课中即时反馈信号"));
body.AppendChild(Body("· 学员在练习中是否使用了自己真实的业务场景（是 → 行为层转化概率高）"));
body.AppendChild(Body("· 学员迁移承诺是否具体到「谁/什么/什么时候」（是 → 行为层转化概率高）"));
body.AppendChild(Body("· 全班分享中是否有人主动说出「以前没想过」的角度（是 → 学习层达成度高）"));
body.AppendChild(Body("· 复盘环节学员的总结是否复述了工具的核心逻辑（是 → 反应层达成）"));

body.AppendChild(Heading2("讲师自评表（课后填写）"));
body.AppendChild(BuildTable(new string[][] {
    new[] { "项目", "1（差）→ 5（优）" },
    new[] { "开场导入是否建立了学员的紧迫感", "1   2   3   4   5" },
    new[] { "每个工具是否现场示范（而非 PPT 展示）", "1   2   3   4   5" },
    new[] { "演练环节学员是否使用了真实案例", "1   2   3   4   5" },
    new[] { "走位干预是否在关键时刻给出了具体引导", "1   2   3   4   5" },
    new[] { "复盘三层是否让学员具体到行动承诺", "1   2   3   4   5" },
    new[] { "全程时间控制是否在 ±5 分钟内", "1   2   3   4   5" },
}, new[] { 6000, 4000 }));
PageBreak(body);

body.AppendChild(Heading1("附录 A：开场话术（逐字稿）"));
body.AppendChild(Quote("在开始之前，我想请大家做一件事——不需要写，也不需要说，只是在脑子里想一想。"));
body.AppendChild(Quote("过去这三个月，你遇到的让你最头疼的一件管理难题，是什么？（停顿 5 秒）"));
body.AppendChild(Quote("不一定是大事，可以是一个老是反复出现的问题，可以是一个你已经试了几种方法还是没解决的事，可以是一件你知道应该做但一直没有找到好方法的事。"));
body.AppendChild(Quote("好，记住这个事。这两天，我们会把你脑子里的这件事，至少带进两个工具里认真分析一遍。"));
body.AppendChild(Quote("今天和明天，我们会一起看五件工具。它们分别针对五种一线管理者最常见的困境——"));
body.AppendChild(Quote("当你团队里有人做出了好成绩，但你不知道怎么让其他人也学会——第一个工具帮你解决这件事；当团队开会讨论业绩，大家说了很多，但走出会议室没有人知道重点是什么——第二个工具帮你解决这件事；当你面对一个真的很棘手、经验也解决不了的难题——第三个工具；当你激发团队一起想办法，但团队会议变成'主管一个人说话'或者'几个人吵架'——第四个工具；当你总是在事情出了问题之后才开始应对，而不是提前预判——第五个工具。"));

body.AppendChild(Heading1("附录 B：结束话术（逐字稿）"));
body.AppendChild(Quote("两天。我们走了五件工具，每一件都在你的真实业务场景里跑了至少一遍。"));
body.AppendChild(Quote("李明，那个我们虚构的店长，用 4 问挖出了小王成功的秘密；用花刺投票让团队共同定了优先级；用问题树看清楚了新竞争对手真正威胁的是哪一个环节；用双矩阵和团队共创出了三条优先行动；用推演双表格提前准备好了主要的风险和机会。"));
body.AppendChild(Quote("但李明是虚构的。你们手里的那份行动计划，是真实的。下周一，看着那张计划表，选第一件事去做。不需要五件工具一起用，不需要完美地用——先做一次，然后再来改进。"));
body.AppendChild(Quote("这两天谢谢大家的认真投入。走好。"));

body.AppendChild(Heading1("附录 C：应急处理"));
body.AppendChild(BuildTable(new string[][] {
    new[] { "情景", "应对" },
    new[] { "学员对工具抵触，'这都是老一套'", "不强辩，把工具在真实场景里现场示范一次——示范比说服更有效。" },
    new[] { "学员走神/聊天，氛围涣散", "立即切到全员参与的环节（便利贴、贴票、走到白板前），物理移动唤醒注意力。" },
    new[] { "学员问题太尖锐超出课程范围", "记录问题，承诺课后 1 对 1 沟通，回到主线。'这个值得单独讨论'。" },
    new[] { "学员公开反对某个工具", "不否定，请他/她用一个具体案例走一遍——很多'反对'走一遍就化解了。" },
    new[] { "时间严重超支", "立刻砍掉'复盘第三层'，改为课后在反思日志上完成。绝不省略'迁移承诺'。" },
    new[] { "学员情绪爆发（被点名批评后的发泄）", "立即停 5 秒，给学员时间说完，温和复述他/她的核心感受，再引导回工具。" },
    new[] { "现场设备故障（投影/白板笔）", "备用方案：用 A3 挂纸 + 马克笔现场画——这恰好是本课程标准做法，反而更有真实感。" },
}, new[] { 4000, 6000 }));

body.AppendChild(Heading1("附录 D：五工具连接图（讲师白板用）"));
body.AppendChild(Body("讲师在第二天下午的总结环节现场画出这张关系图（不用 PPT）。"));
body.AppendChild(Quote("M1 提炼成功原则 → M2 用花刺投票确定优先机会和关键障碍 → M3 用问题树 + 魔力提问找新切入角度 → M4 用双矩阵共创优先行动方案 → M5 用推演双表格做前瞻准备 → 学员带着管理行动地图回到真实工作。"));
body.AppendChild(Body("这五件工具覆盖了一线管理者带团队时遇到的 80% 的情境——它们不是 5 个散件，而是一个完整系统。"));

body.AppendChild(sectPr);

} // end using

Console.WriteLine("OK: " + outputPath);