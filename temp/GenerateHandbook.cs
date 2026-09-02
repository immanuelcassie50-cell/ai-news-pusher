// Generate handbook using DocumentFormat.OpenXml
#r "nuget: DocumentFormat.OpenXml, 3.2.0"

using DocumentFormat.OpenXml;
using DocumentFormat.OpenXml.Packaging;
using DocumentFormat.OpenXml.Wordprocessing;
using System.IO;

// Output path
string outputPath = @"D:/新课开发/经验萃取/手册/实操手册/完整课程包/04_学员手册/学员手册_岗位实操手册开发_v1.0.docx";

// Create document
using var doc = WordprocessingDocument.Create(outputPath, WordprocessingDocumentType.Document);
var mainPart = doc.AddMainDocumentPart();
mainPart.Document = new Document(new Body());

var body = mainPart.Document.Body;

// ============ STYLES ============
var stylesPart = mainPart.AddNewPart<StyleDefinitionsPart>();
stylesPart.Styles = new Styles();

var docDefaults = new DocDefaults();
var rPrDefault = new RunPropertiesDefault();
var rPr = new RunPropertiesBaseStyle();
rPr.AppendChild(new RunFonts { Ascii = "微软雅黑", HighAnsi = "微软雅黑", EastAsia = "微软雅黑", ComplexScript = "微软雅黑" });
rPr.AppendChild(new FontSize { Val = "24" }); // 12pt
rPr.AppendChild(new FontSizeComplexScript { Val = "24" });
rPrDefault.RunPropertiesBaseStyle = rPr;
docDefaults.AppendChild(rPrDefault);

var pPrDefault = new ParagraphPropertiesDefault();
var pPr = new ParagraphPropertiesBaseStyle();
pPr.AppendChild(new SpacingBetweenLines { After = "200", Line = "360", LineRule = LineSpacingRuleValues.Auto });
pPrDefault.AppendChild(pPr);
docDefaults.AppendChild(pPrDefault);
stylesPart.Styles.AppendChild(docDefaults);

// Title style (一号)
var titleStyle = CreateParagraphStyle("Title", "标题", "1", "44", true, "微软雅黑");
titleStyle.AppendChild(new BasedOn { Val = "Normal" });
stylesPart.Styles.AppendChild(titleStyle);

// Heading1 style (第一章一级)
var h1Style = CreateParagraphStyle("Heading1", "第一章", "1", "32", true, "微软雅黑");
h1Style.AppendChild(new BasedOn { Val = "Normal" });
stylesPart.Styles.AppendChild(h1Style);

// Heading2 style (第二章二级)
var h2Style = CreateParagraphStyle("Heading2", "第二章", "2", "28", true, "微软雅黑");
h2Style.AppendChild(new BasedOn { Val = "Normal" });
stylesPart.Styles.AppendChild(h2Style);

// Heading3 style (第三章三级)
var h3Style = CreateParagraphStyle("Heading3", "第三章", "3", "24", true, "微软雅黑");
h3Style.AppendChild(new BasedOn { Val = "Normal" });
stylesPart.Styles.AppendChild(h3Style);

// Normal style
var normalStyle = new Style { Type = StyleValues.Paragraph, StyleId = "Normal", Default = true };
normalStyle.AppendChild(new StyleName { Val = "Normal" });
normalStyle.AppendChild(new UIPriority { Val = 1 });
stylesPart.Styles.AppendChild(normalStyle);

// Table style
var tableStyle = new Style { Type = StyleValues.Table, StyleId = "TableGrid" };
tableStyle.AppendChild(new StyleName { Val = "Table Grid" });
tableStyle.AppendChild(new BasedOn { Val = "TableNormal" });
tableStyle.AppendChild(new UIPriority { Val = 59 });
var tblPr = new TableStyleAppendCharacters();
var tcPr = new TableCellProperties();
tcPr.AppendChild(new Shading { Fill = "D9E2F3", Val = ShadingPatternValues.Clear });
tblPr.AppendChild(tcPr);
tableStyle.AppendChild(tblPr);
stylesPart.Styles.AppendChild(tableStyle);

stylesPart.Styles.Save();

// ============ PAGE SETUP ============
var sectPr = new SectionProperties();
sectPr.AppendChild(new PageSize { Width = 16838, Height = 23840 }); // A4 landscape? No, 16838x23840 is A4
sectPr.AppendChild(new PageMargin { Top = 1440, Right = 1440, Bottom = 1440, Left = 1440, Header = 720, Footer = 720 });

// ============ COVER PAGE ============
AddCoverPage(body);

// ============ TABLE OF CONTENTS ============
AddToc(body);

// ============ CHAPTER 1: 课程导览 ============
AddChapter1(body);

// ============ CHAPTER 2: 行前准备 ============
AddChapter2(body);

// ============ CHAPTER 3: 学习地图 ============
AddChapter3(body);

// ============ CHAPTER 4: 模块学习指南 ============
AddChapter4(body);

// ============ CHAPTER 5: 配套资源索引 ============
AddChapter5(body);

// ============ CHAPTER 6: 课后支持 ============
AddChapter6(body);

// ============ FOOTER ============
AddFooter(mainPart, sectPr);

body.AppendChild(sectPr);
mainPart.Document.Save();

Console.WriteLine($"Document created: {outputPath}");

// ============ HELPER METHODS ============

Style CreateParagraphStyle(string id, string name, string outlineLevel, string fontSize, bool bold, string fontFamily)
{
    var style = new Style { Type = StyleValues.Paragraph, StyleId = id };
    style.AppendChild(new StyleName { Val = name });
    style.AppendChild(new BasedOn { Val = "Normal" });
    style.AppendChild(new UIPriority { Val = 10 });
    style.AppendChild(new QuickFormat());

    var pPr = new StyleParagraphProperties();
    pPr.AppendChild(new KeepNext());
    pPr.AppendChild(new KeepLines());
    if (bold) pPr.AppendChild(new SpacingBetweenLines { Before = "240", After = "120" });
    else pPr.AppendChild(new SpacingBetweenLines { Before = "120", After = "120" });
    pPr.AppendChild(new OutlineLevel { Val = int.Parse(outlineLevel) });
    style.AppendChild(pPr);

    var rPr = new StyleRunProperties();
    rPr.AppendChild(new RunFonts { Ascii = fontFamily, HighAnsi = fontFamily, EastAsia = fontFamily });
    rPr.AppendChild(new FontSize { Val = fontSize });
    rPr.AppendChild(new FontSizeComplexScript { Val = fontSize });
    if (bold) rPr.AppendChild(new Bold());
    if (bold) rPr.AppendChild(new BoldComplexScript());
    style.AppendChild(rPr);

    return style;
}

void AddParagraph(Text content, string styleId = "Normal", bool bold = false, string fontSize = "24")
{
    var para = new Paragraph();
    var pPr = new ParagraphProperties();
    pPr.AppendChild(new StyleId { Val = styleId });
    para.AppendChild(pPr);

    var run = new Run();
    var rPr = new RunProperties();
    rPr.AppendChild(new RunFonts { Ascii = "微软雅黑", HighAnsi = "微软雅黑", EastAsia = "微软雅黑" });
    rPr.AppendChild(new FontSize { Val = fontSize });
    rPr.AppendChild(new FontSizeComplexScript { Val = fontSize });
    if (bold) { rPr.AppendChild(new Bold()); rPr.AppendChild(new BoldComplexScript()); }
    run.AppendChild(rPr);
    run.AppendChild(new Text(content) { Space = SpaceProcessingModeValues.Preserve });
    para.AppendChild(run);
    body.AppendChild(para);
}

void AddHeading1(string text)
{
    var para = new Paragraph();
    var pPr = new ParagraphProperties();
    pPr.AppendChild(new StyleId { Val = "Heading1" });
    pPr.AppendChild(new SpacingBetweenLines { Before = "480", After = "240" });
    para.AppendChild(pPr);

    var run = new Run();
    var rPr = new RunProperties();
    rPr.AppendChild(new RunFonts { Ascii = "微软雅黑", HighAnsi = "微软雅黑", EastAsia = "微软雅黑" });
    rPr.AppendChild(new FontSize { Val = "32" });
    rPr.AppendChild(new FontSizeComplexScript { Val = "32" });
    rPr.AppendChild(new Bold());
    rPr.AppendChild(new BoldComplexScript());
    run.AppendChild(rPr);
    run.AppendChild(new Text(text));
    para.AppendChild(run);
    body.AppendChild(para);
}

void AddHeading2(string text)
{
    var para = new Paragraph();
    var pPr = new ParagraphProperties();
    pPr.AppendChild(new StyleId { Val = "Heading2" });
    pPr.AppendChild(new SpacingBetweenLines { Before = "360", After = "160" });
    para.AppendChild(pPr);

    var run = new Run();
    var rPr = new RunProperties();
    rPr.AppendChild(new RunFonts { Ascii = "微软雅黑", HighAnsi = "微软雅黑", EastAsia = "微软雅黑" });
    rPr.AppendChild(new FontSize { Val = "28" });
    rPr.AppendChild(new FontSizeComplexScript { Val = "28" });
    rPr.AppendChild(new Bold());
    rPr.AppendChild(new BoldComplexScript());
    run.AppendChild(rPr);
    run.AppendChild(new Text(text));
    para.AppendChild(run);
    body.AppendChild(para);
}

void AddHeading3(string text)
{
    var para = new Paragraph();
    var pPr = new ParagraphProperties();
    pPr.AppendChild(new StyleId { Val = "Heading3" });
    pPr.AppendChild(new SpacingBetweenLines { Before = "240", After = "120" });
    para.AppendChild(pPr);

    var run = new Run();
    var rPr = new RunProperties();
    rPr.AppendChild(new RunFonts { Ascii = "微软雅黑", HighAnsi = "微软雅黑", EastAsia = "微软雅黑" });
    rPr.AppendChild(new FontSize { Val = "24" });
    rPr.AppendChild(new FontSizeComplexScript { Val = "24" });
    rPr.AppendChild(new Bold());
    rPr.AppendChild(new BoldComplexScript());
    run.AppendChild(rPr);
    run.AppendChild(new Text(text));
    para.AppendChild(run);
    body.AppendChild(para);
}

void AddBullet(string text, int level = 0)
{
    var para = new Paragraph();
    var pPr = new ParagraphProperties();
    pPr.AppendChild(new SpacingBetweenLines { After = "80" });
    pPr.AppendChild(new Indentation { Left = (720 + level * 360).ToString(), Hanging = "360" });
    para.AppendChild(pPr);

    var run = new Run();
    var rPr = new RunProperties();
    rPr.AppendChild(new RunFonts { Ascii = "微软雅黑", HighAnsi = "微软雅黑", EastAsia = "微软雅黑" });
    rPr.AppendChild(new FontSize { Val = "24" });
    rPr.AppendChild(new FontSizeComplexScript { Val = "24" });
    run.AppendChild(rPr);
    run.AppendChild(new Text(level == 0 ? "• " + text : "◦ " + text));
    para.AppendChild(run);
    body.AppendChild(para);
}

void AddTableRow(Table table, string[] cells, bool header = false)
{
    var tr = new TableRow();
    if (header) tr.AppendChild(new TableRowProperties(new TableHeader()));

    foreach (var cellText in cells)
    {
        var tc = new TableCell();
        var tcPr = new TableCellProperties();
        tcPr.AppendChild(new TableCellWidth { Width = "0", Type = TableWidthUnitValues.Auto });
        if (header)
        {
            tcPr.AppendChild(new Shading { Fill = "2F5496", Val = ShadingPatternValues.Clear });
        }
        tc.AppendChild(tcPr);

        var para = new Paragraph();
        var pPr = new ParagraphProperties();
        pPr.AppendChild(new SpacingBetweenLines { After = "0" });
        para.AppendChild(pPr);

        var run = new Run();
        var rPr = new RunProperties();
        rPr.AppendChild(new RunFonts { Ascii = "微软雅黑", HighAnsi = "微软雅黑", EastAsia = "微软雅黑" });
        rPr.AppendChild(new FontSize { Val = "22" });
        rPr.AppendChild(new FontSizeComplexScript { Val = "22" });
        if (header)
        {
            rPr.AppendChild(new Bold());
            rPr.AppendChild(new Color { Val = "FFFFFF" });
        }
        run.AppendChild(rPr);
        run.AppendChild(new Text(cellText) { Space = SpaceProcessingModeValues.Preserve });
        para.AppendChild(run);
        tc.AppendChild(para);
        tr.AppendChild(tc);
    }
    table.AppendChild(tr);
}

void AddTableCellData(Table table, string[] cells)
{
    var tr = new TableRow();
    foreach (var cellText in cells)
    {
        var tc = new TableCell();
        var tcPr = new TableCellProperties();
        tcPr.AppendChild(new TableCellWidth { Width = "0", Type = TableWidthUnitValues.Auto });
        tc.AppendChild(tcPr);

        var para = new Paragraph();
        var pPr = new ParagraphProperties();
        pPr.AppendChild(new SpacingBetweenLines { After = "0" });
        para.AppendChild(pPr);

        var run = new Run();
        var rPr = new RunProperties();
        rPr.AppendChild(new RunFonts { Ascii = "微软雅黑", HighAnsi = "微软雅黑", EastAsia = "微软雅黑" });
        rPr.AppendChild(new FontSize { Val = "22" });
        rPr.AppendChild(new FontSizeComplexScript { Val = "22" });
        run.AppendChild(rPr);
        run.AppendChild(new Text(cellText) { Space = SpaceProcessingModeValues.Preserve });
        para.AppendChild(run);
        tc.AppendChild(para);
        tr.AppendChild(tc);
    }
    table.AppendChild(tr);
}

void AddCoverPage(Body body)
{
    // Main title
    var p1 = new Paragraph();
    var pPr1 = new ParagraphProperties();
    pPr1.AppendChild(new Justification { Val = JustificationValues.Center });
    pPr1.AppendChild(new SpacingBetweenLines { Before = "2400", After = "400" });
    p1.AppendChild(pPr1);
    var r1 = new Run();
    var rPr1 = new RunProperties();
    rPr1.AppendChild(new RunFonts { Ascii = "微软雅黑", HighAnsi = "微软雅黑", EastAsia = "微软雅黑" });
    rPr1.AppendChild(new FontSize { Val = "56" });
    rPr1.AppendChild(new Bold());
    r1.AppendChild(rPr1);
    r1.AppendChild(new Text("AI赋能岗位实操手册开发"));
    p1.AppendChild(r1);
    body.AppendChild(p1);

    // Subtitle
    var p2 = new Paragraph();
    var pPr2 = new ParagraphProperties();
    pPr2.AppendChild(new Justification { Val = JustificationValues.Center });
    pPr2.AppendChild(new SpacingBetweenLines { Before = "200", After = "800" });
    p2.AppendChild(pPr2);
    var r2 = new Run();
    var rPr2 = new RunProperties();
    rPr2.AppendChild(new RunFonts { Ascii = "微软雅黑", HighAnsi = "微软雅黑", EastAsia = "微软雅黑" });
    rPr2.AppendChild(new FontSize { Val = "36" });
    r2.AppendChild(rPr2);
    r2.AppendChild(new Text("学员手册"));
    p2.AppendChild(r2);
    body.AppendChild(p2);

    // Sub-subtitle
    var p3 = new Paragraph();
    var pPr3 = new ParagraphProperties();
    pPr3.AppendChild(new Justification { Val = JustificationValues.Center });
    pPr3.AppendChild(new SpacingBetweenLines { Before = "400", After = "400" });
    p3.AppendChild(pPr3);
    var r3 = new Run();
    var rPr3 = new RunProperties();
    rPr3.AppendChild(new RunFonts { Ascii = "微软雅黑", HighAnsi = "微软雅黑", EastAsia = "微软雅黑" });
    rPr3.AppendChild(new FontSize { Val = "28" });
    r3.AppendChild(rPr3);
    r3.AppendChild(new Text("带着干、现场出——AI赋能岗位实操手册开发工作坊"));
    p3.AppendChild(r3);
    body.AppendChild(p3);

    //适用对象
    var p4 = new Paragraph();
    var pPr4 = new ParagraphProperties();
    pPr4.AppendChild(new Justification { Val = JustificationValues.Center });
    pPr4.AppendChild(new SpacingBetweenLines { Before = "800", After = "200" });
    p4.AppendChild(pPr4);
    var r4 = new Run();
    var rPr4 = new RunProperties();
    rPr4.AppendChild(new RunFonts { Ascii = "微软雅黑", HighAnsi = "微软雅黑", EastAsia = "微软雅黑" });
    rPr4.AppendChild(new FontSize { Val = "24" });
    r4.AppendChild(rPr4);
    r4.AppendChild(new Text("适用对象：企业内训师、培训管理者、业务骨干、管理者"));
    p4.AppendChild(r4);
    body.AppendChild(p4);

    // Version
    var p5 = new Paragraph();
    var pPr5 = new ParagraphProperties();
    pPr5.AppendChild(new Justification { Val = JustificationValues.Center });
    pPr5.AppendChild(new SpacingBetweenLines { Before = "1600", After = "200" });
    p5.AppendChild(pPr5);
    var r5 = new Run();
    var rPr5 = new RunProperties();
    rPr5.AppendChild(new RunFonts { Ascii = "微软雅黑", HighAnsi = "微软雅黑", EastAsia = "微软雅黑" });
    rPr5.AppendChild(new FontSize { Val = "24" });
    r5.AppendChild(rPr5);
    r5.AppendChild(new Text("版本：v1.0"));
    p5.AppendChild(r5);
    body.AppendChild(p5);

    // Copyright
    var p6 = new Paragraph();
    var pPr6 = new ParagraphProperties();
    pPr6.AppendChild(new Justification { Val = JustificationValues.Center });
    pPr6.AppendChild(new SpacingBetweenLines { Before = "400", After = "200" });
    p6.AppendChild(pPr6);
    var r6 = new Run();
    var rPr6 = new RunProperties();
    rPr6.AppendChild(new RunFonts { Ascii = "微软雅黑", HighAnsi = "微软雅黑", EastAsia = "微软雅黑" });
    rPr6.AppendChild(new FontSize { Val = "22" });
    rPr6.AppendChild(new Color { Val = "666666" });
    r6.AppendChild(rPr6);
    r6.AppendChild(new Text("版权所有 · 罗宏伟 · 本手册仅供本课程学员使用"));
    p6.AppendChild(r6);
    body.AppendChild(p6);

    // Page break
    var pBreak = new Paragraph();
    var rBreak = new Run();
    rBreak.AppendChild(new Break { Type = BreakValues.Page });
    pBreak.AppendChild(rBreak);
    body.AppendChild(pBreak);
}

void AddToc(Body body)
{
    AddHeading1("目录");

    string[] tocItems = new[] {
        "第一章　课程导览",
        "第二章　行前准备",
        "第三章　学习地图",
        "第四章　模块学习指南",
        "第五章　配套资源索引",
        "第六章　课后支持"
    };

    foreach (var item in tocItems)
    {
        var para = new Paragraph();
        var pPr = new ParagraphProperties();
        pPr.AppendChild(new SpacingBetweenLines { After = "160" });
        pPr.AppendChild(new Indentation { Left = "720" });
        para.AppendChild(pPr);

        var run = new Run();
        var rPr = new RunProperties();
        rPr.AppendChild(new RunFonts { Ascii = "微软雅黑", HighAnsi = "微软雅黑", EastAsia = "微软雅黑" });
        rPr.AppendChild(new FontSize { Val = "26" });
        run.AppendChild(rPr);
        run.AppendChild(new Text(item));
        para.AppendChild(run);
        body.AppendChild(para);
    }

    // Page break
    var pBreak = new Paragraph();
    var rBreak = new Run();
    rBreak.AppendChild(new Break { Type = BreakValues.Page });
    pBreak.AppendChild(rBreak);
    body.AppendChild(pBreak);
}

void AddChapter1(Body body)
{
    AddHeading1("第一章　课程导览");

    AddHeading2("1.1 课程介绍");

    AddParagraph("本工作坊是一门以"做中学"为核心的设计型课程，学员在讲师的引导下，通过结构化萃取与AI辅助，将散落在不同人身上的岗位实战经验，沉淀为一套目标读者拿到手就能用、翻开就能照着做的实操手册。", "Normal", false, "24");

    AddHeading3("课程定位");
    AddParagraph("不是"讲方法论让学员回去自己做"，而是"在工作坊里把手册做出来"。所有方法讲解都嵌入在做的过程中，学员是通过完成任务来掌握方法，而不是先学方法再去应用。", "Normal", false, "24");

    AddHeading3("核心逻辑");
    AddBullet("问出来而不是写出来：通过结构化访谈从三类人群中萃取经验");
    AddBullet("AI做初稿，人把质量关：AI负责转化，人负责验证");
    AddBullet("三个视角交叉共创：经验较浅者、业务骨干、管理者三维交叉");

    AddHeading3("解决什么问题");
    AddBullet("关键岗位经验高度属人化，核心人员离职/调岗后经验断层");
    AddBullet("现有知识沉淀物与一线实操脱节，"有文件但没人看"");
    AddBullet("新人上手周期长，同一个坑不同人反复踩");
    AddBullet("经验传承依赖师带徒，质量因人而异、效率难以规模化");

    AddHeading2("1.2 三类人群画像与角色定位");
    AddParagraph("本工作坊参与者分为三类人群，各有不同的角色定位和核心价值：", "Normal", false, "24");

    // Table for three personae
    var tbl1 = new Table();
    var tblPr1 = new TableProperties();
    tblPr1.AppendChild(new TableWidth { Width = "100%", Type = TableWidthUnitValues.Pct });
    tblPr1.AppendChild(new TableBorders(
        new TopBorder { Val = BorderValues.Single, Size = 4, Color = "2F5496" },
        new BottomBorder { Val = BorderValues.Single, Size = 4, Color = "2F5496" },
        new LeftBorder { Val = BorderValues.Single, Size = 4, Color = "2F5496" },
        new RightBorder { Val = BorderValues.Single, Size = 4, Color = "2F5496" },
        new InsideHorizontalBorder { Val = BorderValues.Single, Size = 4, Color = "2F5496" },
        new InsideVerticalBorder { Val = BorderValues.Single, Size = 4, Color = "2F5496" }
    ));
    tbl1.AppendChild(tblPr1);

    AddTableRow(tbl1, new[] { "人群", "画像描述", "核心价值", "典型心态" }, true);
    AddTableCellData(tbl1, new[] { "经验较浅者", "入职1年以内或跨岗转入，对本岗位业务尚在摸索期", "提供"读者视角"——说出真实困惑与卡点，充当手册的目标读者代表", ""我想知道遇到XX情况到底该怎么办"" });
    AddTableCellData(tbl1, new[] { "业务骨干", "3年以上经验，绩效优秀，公认的"会干活的人"", "提供"经验视角"——贡献可复用的操作经验、判断逻辑、避坑技巧", ""我知道怎么做，但让我写我真不知道从何下笔"" });
    AddTableCellData(tbl1, new[] { "管理者", "负责团队管理或业务把控，了解制度要求和常见风险", "提供"标准视角"——把控内容的准确性、规范性与合规性", ""沉淀经验是好事，但内容必须准确，不能有制度风险"" });

    body.AppendChild(tbl1);

    AddHeading2("1.3 你在课程中的收获");
    AddParagraph("完成本次工作坊后，你将带走：", "Normal", false, "24");

    AddBullet("一套完整的岗位实操手册开发包（六件套）");
    AddBullet("结构化萃取 + AI辅助的方法论与实操技能");
    AddBullet("可直接复用的AI提示词模板库");
    AddBullet("一套经验萃取访谈的问题清单与技巧");
    AddBullet("手册后续迭代优化的路径与方法");

    // Page break
    var pBreak = new Paragraph();
    var rBreak = new Run();
    rBreak.AppendChild(new Break { Type = BreakValues.Page });
    pBreak.AppendChild(rBreak);
    body.AppendChild(pBreak);
}

void AddChapter2(Body body)
{
    AddHeading1("第二章　行前准备");

    AddHeading2("2.1 需要提前准备的资料清单");
    AddParagraph("请在课前收集并整理与本组主题相关的现有资料，作为工作坊素材输入：", "Normal", false, "24");

    AddBullet("现有制度文件、操作规范、SOP");
    AddBullet("已有的培训课件或内部教材");
    AddBullet("常用工作表单、模板");
    AddBullet("产品/服务相关技术资料");
    AddBullet("客户反馈或投诉记录（脱敏）");
    AddBullet("过往出现过的典型问题或事故记录（脱敏）");

    AddHeading2("2.2 笔记本电脑和AI工具要求");
    AddParagraph("请确保携带支持以下要求的笔记本电脑：", "Normal", false, "24");

    AddBullet("系统要求：Windows 10/11 或 macOS 10.15 以上");
    AddBullet("网络：稳定的WiFi连接，用于访问AI工具");
    AddBullet("AI工具账号：提前注册并测试以下工具可用性");
    AddBullet("推荐工具：ChatGPT、Claude、文心一言、通义千问等主流AI对话工具");
    AddBullet("录音转文字工具：用于访谈记录转写（如有道云笔记、讯飞听见等）");

    AddHeading2("2.3 录音设备准备");
    AddParagraph("访谈环节需要全程录音，建议准备：", "Normal", false, "24");

    AddBullet("手机或录音笔（确保存储空间充足）");
    AddBullet("如有条件，可准备领夹式麦克风以提高录音质量");
    AddBullet("提前测试录音APP的可用性");

    AddHeading2("2.4 建议准备的一件工作经历");
    AddParagraph("在课程开始前，请回忆并记录一个让你印象深刻的工作经历：", "Normal", false, "24");

    AddBullet("一个你曾经遇到困难的任务场景");
    AddBullet("你是如何一步步解决这个问题的");
    AddBullet("这个经历中有哪些"如果当初有人告诉我就好了"的经验");
    AddParagraph("这个经历将在课程的经验萃取环节中使用，帮助你理解什么是好的手册内容。", "Normal", false, "24");

    // Page break
    var pBreak = new Paragraph();
    var rBreak = new Run();
    rBreak.AppendChild(new Break { Type = BreakValues.Page });
    pBreak.AppendChild(rBreak);
    body.AppendChild(pBreak);
}

void AddChapter3(Body body)
{
    AddHeading1("第三章　学习地图");

    AddHeading2("3.1 三天整体路线图");
    AddParagraph("以下是三天工作坊的整体安排与核心产出：", "Normal", false, "24");

    // Day 1 table
    var tblDay1 = new Table();
    var tblPrD1 = new TableProperties();
    tblPrD1.AppendChild(new TableWidth { Width = "100%", Type = TableWidthUnitValues.Pct });
    tblPrD1.AppendChild(new TableBorders(
        new TopBorder { Val = BorderValues.Single, Size = 4, Color = "2F5496" },
        new BottomBorder { Val = BorderValues.Single, Size = 4, Color = "2F5496" },
        new LeftBorder { Val = BorderValues.Single, Size = 4, Color = "2F5496" },
        new RightBorder { Val = BorderValues.Single, Size = 4, Color = "2F5496" },
        new InsideHorizontalBorder { Val = BorderValues.Single, Size = 4, Color = "BBBBBB" },
        new InsideVerticalBorder { Val = BorderValues.Single, Size = 4, Color = "2F5496" }
    ));
    tblDay1.AppendChild(tblPrD1);

    AddTableRow(tblDay1, new[] { "时段", "模块", "核心内容", "时长", "产出" }, true);
    AddTableCellData(tblDay1, new[] { "上午", "模块一", "开场导入 + 阅读版手册设计逻辑", "90分钟", "理解手册定位与设计原则" });
    AddTableCellData(tblDay1, new[] { "上午", "模块二", "课题定位表 + 三类人群结构化访谈", "90分钟", "课题定位表 + 访谈录音" });
    AddTableCellData(tblDay1, new[] { "下午", "模块三前半", "AI生成手册设计方案 + 三级大纲搭建", "90分钟", "设计方案 + 内容大纲" });
    AddTableCellData(tblDay1, new[] { "下午", "模块三后半", "手册主体内容填充与交叉验证", "90分钟", "内容初稿" });

    body.AppendChild(tblDay1);

    AddParagraph(" ", "Normal", false, "24");

    // Day 2 table
    var tblDay2 = new Table();
    var tblPrD2 = new TableProperties();
    tblPrD2.AppendChild(new TableWidth { Width = "100%", Type = TableWidthUnitValues.Pct });
    tblPrD2.AppendChild(new TableBorders(
        new TopBorder { Val = BorderValues.Single, Size = 4, Color = "2F5496" },
        new BottomBorder { Val = BorderValues.Single, Size = 4, Color = "2F5496" },
        new LeftBorder { Val = BorderValues.Single, Size = 4, Color = "2F5496" },
        new RightBorder { Val = BorderValues.Single, Size = 4, Color = "2F5496" },
        new InsideHorizontalBorder { Val = BorderValues.Single, Size = 4, Color = "BBBBBB" },
        new InsideVerticalBorder { Val = BorderValues.Single, Size = 4, Color = "2F5496" }
    ));
    tblDay2.AppendChild(tblPrD2);

    AddTableRow(tblDay2, new[] { "时段", "模块", "核心内容", "时长", "产出" }, true);
    AddTableCellData(tblDay2, new[] { "上午", "模块四前半", "工具包开发（流程图+话术模板+检查清单）", "90分钟", "核心工具包（经验证）" });
    AddTableCellData(tblDay2, new[] { "上午", "模块四后半", "典型案例开发（正面+反面+情景选择）", "90分钟", "典型案例集" });
    AddTableCellData(tblDay2, new[] { "下午", "工具与案例嵌入", "工具包与案例嵌入手册对应位置", "90分钟", "完整手册（含工具与案例）" });
    AddTableCellData(tblDay2, new[] { "下午", "阶段复盘", "各组展示当前产出 + 讲师点评", "90分钟", "明确第三天优化重点" });

    body.AppendChild(tblDay2);

    AddParagraph(" ", "Normal", false, "24");

    // Day 3 table
    var tblDay3 = new Table();
    var tblPrD3 = new TableProperties();
    tblPrD3.AppendChild(new TableWidth { Width = "100%", Type = TableWidthUnitValues.Pct });
    tblPrD3.AppendChild(new TableBorders(
        new TopBorder { Val = BorderValues.Single, Size = 4, Color = "2F5496" },
        new BottomBorder { Val = BorderValues.Single, Size = 4, Color = "2F5496" },
        new LeftBorder { Val = BorderValues.Single, Size = 4, Color = "2F5496" },
        new RightBorder { Val = BorderValues.Single, Size = 4, Color = "2F5496" },
        new InsideHorizontalBorder { Val = BorderValues.Single, Size = 4, Color = "BBBBBB" },
        new InsideVerticalBorder { Val = BorderValues.Single, Size = 4, Color = "2F5496" }
    ));
    tblDay3.AppendChild(tblPrD3);

    AddTableRow(tblDay3, new[] { "时段", "模块", "核心内容", "时长", "产出" }, true);
    AddTableCellData(tblDay3, new[] { "上午", "模块五前半", "五步优化法（逐步讲解+逐步实操）", "90分钟", "完成五步优化后的手册" });
    AddTableCellData(tblDay3, new[] { "上午", "模块五后半", "简版使用说明 + 手册整合编排", "90分钟", "简版使用说明 + 编排后手册" });
    AddTableCellData(tblDay3, new[] { "下午", "组间交叉评审", "交叉评审 + 当场修改", "90分钟", "经互评迭代的高完成度手册" });
    AddTableCellData(tblDay3, new[] { "下午", "成果展示与收尾", "各组展示 + 讲师点评 + 后续规划", "90分钟", "高完成度手册开发包全套" });

    body.AppendChild(tblDay3);

    AddHeading2("3.2 每天的核心任务和产出");

    AddHeading3("第一天：定位与萃取");
    AddBullet("核心任务：明确手册要解决什么问题，从三类人群中萃取核心经验");
    AddBullet("核心产出：课题定位表（定稿）、访谈录音与关键经验记录");

    AddHeading3("第二天：内容构建");
    AddBullet("核心任务：将萃取的经验转化为结构化手册内容，开发工具包与典型案例");
    AddBullet("核心产出：手册主体内容初稿、核心工具包（经验证）、典型案例集");

    AddHeading3("第三天：优化与整合");
    AddBullet("核心任务：运用五步优化法提升手册可读性，完成整合编排与组间互评");
    AddBullet("核心产出：高完成度手册开发包全套（含使用说明）");

    // Page break
    var pBreak = new Paragraph();
    var rBreak = new Run();
    rBreak.AppendChild(new Break { Type = BreakValues.Page });
    pBreak.AppendChild(rBreak);
    body.AppendChild(pBreak);
}

void AddChapter4(Body body)
{
    AddHeading1("第四章　模块学习指南");

    AddHeading2("4.1 第一天：手册设计逻辑 + 方向定位 + 经验萃取");

    AddHeading3("模块一：开场导入与手册设计逻辑");
    AddParagraph("学习目标：", "Normal", true, "24");
    AddBullet("区分"阅读版实操手册"与制度文件、培训课件的本质差异");
    AddBullet("说出好手册的四个设计原则（场景为入口、动作为核心、案例为骨架、工具为配套）");
    AddBullet("描述手册的三种使用场景及对应的内容组织逻辑");

    AddParagraph("学习内容：", "Normal", true, "24");
    AddBullet("课程开场：为什么最厉害的人的经验最难被文字化");
    AddBullet("好vs坏手册对比：专家视角 vs 读者视角的错位");
    AddBullet("阅读版手册的四个设计原则");
    AddBullet("手册的三种使用场景预设");

    AddHeading3("模块二：方向定位与经验萃取");
    AddParagraph("学习目标：", "Normal", true, "24");
    AddBullet("使用课题定位表明确手册的目标场景、目标人群、核心问题和预期效果");
    AddBullet("运用三类人群分角色访谈法，从困惑、经验、标准三个维度完成结构化经验萃取");
    AddBullet("使用追问技巧将模糊经验转化为可记录的具体素材");

    AddParagraph("学习内容：", "Normal", true, "24");
    AddBullet("课题定位表填写：目标场景、目标人群、核心问题、预期效果");
    AddBullet("三类人群分角色访谈：经验较浅者说困惑、骨干说经验、管理者说标准");
    AddBullet("访谈提问清单与追问技巧：频次、易错点、分步处理、判断标准");

    AddHeading2("4.2 第二天：大纲搭建 + 内容填充 + 工具包 + 案例开发");

    AddHeading3("模块三：AI辅助生成手册框架与内容");
    AddParagraph("学习目标：", "Normal", true, "24");
    AddBullet("使用AI工具将访谈录音/素材转化为结构化的手册设计方案");
    AddBullet("搭建包含一级、二级、三级的完整内容大纲");
    AddBullet("按"场景描述 + 操作步骤 + 注意事项"完成手册主体内容填充");

    AddParagraph("学习内容：", "Normal", true, "24");
    AddBullet("AI辅助输出手册设计方案：场景覆盖、模块结构、内容方向");
    AddBullet("从设计方案到完整三级大纲的搭建方法");
    AddBullet("内容质量把控：步骤具体、表述通俗、内容真实");
    AddBullet("三类人群交叉验证：经验较浅者能看懂、骨干确认写准、管理者确认合规");

    AddHeading3("模块四：工具包开发与案例开发");
    AddParagraph("学习目标：", "Normal", true, "24");
    AddBullet("开发四种核心工具（操作流程图、话术模板、检查清单、常见问题速查表）");
    AddBullet("按标准流程开发三种形式的典型案例（正面案例、反面案例、情景选择案例）");

    AddParagraph("学习内容：", "Normal", true, "24");
    AddBullet("工具包的四种核心形式及适用场景");
    AddBullet("AI辅助批量生成工具包初稿 + 人工验证关键工具");
    AddBullet("案例的三种形式：正面案例、反面案例、情景选择案例");
    AddBullet("工具与案例嵌入手册的位置选择与衔接方法");

    AddHeading2("4.3 第三天：五步优化 + 整合编排 + 互评 + 展示");

    AddHeading3("模块五：五步优化法与整合编排");
    AddParagraph("学习目标：", "Normal", true, "24");
    AddBullet("运用五步优化法（痛点共鸣→场景描述→价值植入→行动促进→价值升华）对手册进行结构性优化");
    AddBullet("编写简版使用说明（10分钟快速上手指南）");
    AddBullet("完成手册的格式统一与整合编排");

    AddParagraph("学习内容：", "Normal", true, "24");
    AddBullet("五步优化法详解：每一步的核心要点与实操方法");
    AddBullet("简版使用说明的结构与编写方法");
    AddBullet("手册整合编排：格式统一、内容编排顺序确认");
    AddBullet("组间交叉评审：五个维度（准确性、可行性、通俗性、规范性、合规性）");

    AddParagraph("学习目标：", "Normal", true, "24");
    AddBullet("各组代表展示手册核心亮点");
    AddBullet("接收讲师点评与优化方向建议");
    AddBullet("了解手册后续迭代的方法与路径");

    // Page break
    var pBreak = new Paragraph();
    var rBreak = new Run();
    rBreak.AppendChild(new Break { Type = BreakValues.Page });
    pBreak.AppendChild(rBreak);
    body.AppendChild(pBreak);
}

void AddChapter5(Body body)
{
    AddHeading1("第五章　配套资源索引");

    AddHeading2("5.1 工具表单清单");
    AddParagraph("本课程提供以下工具表单，学员可在学习过程中使用：", "Normal", false, "24");

    var tblTools = new Table();
    var tblPrTools = new TableProperties();
    tblPrTools.AppendChild(new TableWidth { Width = "100%", Type = TableWidthUnitValues.Pct });
    tblPrTools.AppendChild(new TableBorders(
        new TopBorder { Val = BorderValues.Single, Size = 4, Color = "2F5496" },
        new BottomBorder { Val = BorderValues.Single, Size = 4, Color = "2F5496" },
        new LeftBorder { Val = BorderValues.Single, Size = 4, Color = "2F5496" },
        new RightBorder { Val = BorderValues.Single, Size = 4, Color = "2F5496" },
        new InsideHorizontalBorder { Val = BorderValues.Single, Size = 4, Color = "BBBBBB" },
        new InsideVerticalBorder { Val = BorderValues.Single, Size = 4, Color = "2F5496" }
    ));
    tblTools.AppendChild(tblPrTools);

    AddTableRow(tblTools, new[] { "表单编号", "表单名称", "所属模块", "主要用途" }, true);
    AddTableCellData(tblTools, new[] { "表单1.1", "课题定位表", "模块二", "明确手册的目标场景、目标人群、核心问题和预期效果" });
    AddTableCellData(tblTools, new[] { "表单1.2", "访谈提问清单", "模块二", "结构化访谈的问题清单与追问技巧指引" });
    AddTableCellData(tblTools, new[] { "表单1.3", "访谈记录表", "模块二", "记录访谈中的关键步骤、判断标准、易错点" });
    AddTableCellData(tblTools, new[] { "表单2.1", "手册设计方案模板", "模块三", "AI辅助生成设计方案的结构化模板" });
    AddTableCellData(tblTools, new[] { "表单2.2", "三级大纲模板", "模块三", "搭建手册内容大纲的结构化模板" });
    AddTableCellData(tblTools, new[] { "表单3.1", "工具包开发清单", "模块四", "四种工具（流程图/话术/清单/速查表）的开发清单" });
    AddTableCellData(tblTools, new[] { "表单3.2", "案例开发模板", "模块四", "三种案例（正面/反面/情景选择）的开发模板" });
    AddTableCellData(tblTools, new[] { "表单4.1", "五步优化检查表", "模块五", "五步优化法的自查检查表" });
    AddTableCellData(tblTools, new[] { "表单4.2", "组间互评表", "模块五", "组间交叉评审的五维评审表" });

    body.AppendChild(tblTools);

    AddHeading2("5.2 练习题库说明");
    AddParagraph("本课程的练习设计以"做中学"为核心，每个模块都配套有针对性的实操练习：", "Normal", false, "24");

    AddHeading3("练习类型一：即时实操");
    AddBullet("在每个知识点讲解后，立即在手册上实操");
    AddBullet("两天版：标注待优化位置");
    AddBullet("三天版：现场完成修改");

    AddHeading3("练习类型二：小组协作");
    AddBullet("三类人群分组讨论，共同完成任务");
    AddBullet("强调真实的经验输出，而非理论讨论");

    AddHeading3("练习类型三：交叉验证");
    AddBullet("三类人群互相审读彼此的产出");
    AddBullet("带着具体检验标准进行结构化反馈");

    AddHeading2("5.3 场景库使用");
    AddParagraph("课程提供多种典型场景供学员参考和对标：", "Normal", false, "24");

    AddBullet("正面场景：好的手册案例，展示如何以场景为入口组织内容");
    AddBullet("反面场景："伪手册"案例，分析制度汇编型、课件搬运型、经验堆砌型的问题");
    AddBullet("参考场景：往期优秀学员产出，展示可达成的质量标准");

    AddParagraph("场景库的使用建议：", "Normal", true, "24");
    AddBullet("在模块一学习后，对照正面场景审视自己公司的现有文档");
    AddBullet("在模块二访谈后，用反面场景检验萃取的素材是否真实");
    AddBullet("在模块五优化后，用优秀场景作为迭代目标");

    // Page break
    var pBreak = new Paragraph();
    var rBreak = new Run();
    rBreak.AppendChild(new Break { Type = BreakValues.Page });
    pBreak.AppendChild(rBreak);
    body.AppendChild(pBreak);
}

void AddChapter6(Body body)
{
    AddHeading1("第六章　课后支持");

    AddHeading2("6.1 课后任务清单");
    AddParagraph("工作坊结束后，建议按以下优先级完成剩余任务：", "Normal", false, "24");

    var tblTasks = new Table();
    var tblPrTasks = new TableProperties();
    tblPrTasks.AppendChild(new TableWidth { Width = "100%", Type = TableWidthUnitValues.Pct });
    tblPrTasks.AppendChild(new TableBorders(
        new TopBorder { Val = BorderValues.Single, Size = 4, Color = "2F5496" },
        new BottomBorder { Val = BorderValues.Single, Size = 4, Color = "2F5496" },
        new LeftBorder { Val = BorderValues.Single, Size = 4, Color = "2F5496" },
        new RightBorder { Val = BorderValues.Single, Size = 4, Color = "2F5496" },
        new InsideHorizontalBorder { Val = BorderValues.Single, Size = 4, Color = "BBBBBB" },
        new InsideVerticalBorder { Val = BorderValues.Single, Size = 4, Color = "2F5496" }
    ));
    tblTasks.AppendChild(tblPrTasks);

    AddTableRow(tblTasks, new[] { "优先级", "任务内容", "配套工具", "预估工时" }, true);
    AddTableCellData(tblTasks, new[] { "高", "工具包精修：剩余工具的人工验证与话术打磨", "表单3.1 + AI提示词模板", "2-3小时" });
    AddTableCellData(tblTasks, new[] { "高", "案例补充：补齐1-2个案例，完成情景选择案例开发", "表单3.2 + AI提示词模板", "2-3小时" });
    AddTableCellData(tblTasks, new[] { "中", "五步优化落地：按标注逐章完成痛点共鸣、场景描述等优化", "表单4.1 + 五步优化法", "3-4小时" });
    AddTableCellData(tblTasks, new[] { "中", "简版使用说明：基于现场框架补充完整内容", "课程提供的框架模板", "1-2小时" });
    AddTableCellData(tblTasks, new[] { "低", "整合编排：格式统一、排版定稿", "格式规范指南", "1-2小时" });

    body.AppendChild(tblTasks);

    AddHeading2("6.2 后续迭代方法");
    AddParagraph("手册开发不是一次性工作，需要建立持续迭代的机制：", "Normal", false, "24");

    AddHeading3("版本管理建议");
    AddBullet("版本号格式：主版本号.次版本号（如v1.0、v1.1、v2.0）");
    AddBullet("重大结构调整时升级主版本号");
    AddBullet("小幅优化时升级次版本号");
    AddBullet("每次更新记录：更新内容、更新日期、更新人");

    AddHeading3("定期更新机制");
    AddBullet("建议频率：每季度一次例行审视，每年一次系统性修订");
    AddBullet("触发条件：新法规新制度、业务重大变化、读者反馈集中问题");
    AddBullet("更新流程：收集反馈→评估优先级→分配修订任务→审核发布");

    AddHeading3("读者反馈收集");
    AddBullet("建立手册使用反馈渠道（如在线表单、定期访谈）");
    AddBullet("鼓励读者在阅读时标注问题和建议");
    AddBullet("定期汇总反馈，纳入下次修订");

    AddHeading3("AI辅助迭代");
    AddParagraph("将读者反馈输入AI，生成更新建议：", "Normal", false, "24");
    AddBullet("输入：读者反馈原文 + 当前手册内容");
    AddBullet("AI输出：针对性的修改建议");
    AddBullet("人工审核：确认AI建议是否符合实际情况");

    AddHeading2("6.3 反馈收集方式");
    AddParagraph("我们非常重视学员的反馈，用于持续改进课程质量：", "Normal", false, "24");

    AddBullet("课程结束时的满意度问卷");
    AddBullet("手册使用一段时间后的效果追踪访谈");
    AddBullet("邮件反馈：可发送至课程组织方邮箱");
    AddBullet("建议被采纳的学员，将获得下一期课程的优先参与资格");

    AddParagraph(" ", "Normal", false, "24");

    // Closing
    var pClose = new Paragraph();
    var pPrClose = new ParagraphProperties();
    pPrClose.AppendChild(new Justification { Val = JustificationValues.Center });
    pPrClose.AppendChild(new SpacingBetweenLines { Before = "800", After = "200" });
    pClose.AppendChild(pPrClose);
    var rClose = new Run();
    var rPrClose = new RunProperties();
    rPrClose.AppendChild(new RunFonts { Ascii = "微软雅黑", HighAnsi = "微软雅黑", EastAsia = "微软雅黑" });
    rPrClose.AppendChild(new FontSize { Val = "26" });
    rPrClose.AppendChild(new Bold());
    rClose.AppendChild(rPrClose);
    rClose.AppendChild(new Text("祝学习愉快，产出丰富！"));
    pClose.AppendChild(rClose);
    body.AppendChild(pClose);

    var pEnd = new Paragraph();
    var pPrEnd = new ParagraphProperties();
    pPrEnd.AppendChild(new Justification { Val = JustificationValues.Center });
    pPrEnd.AppendChild(new SpacingBetweenLines { Before = "200", After = "200" });
    pEnd.AppendChild(pPrEnd);
    var rEnd = new Run();
    var rPrEnd = new RunProperties();
    rPrEnd.AppendChild(new RunFonts { Ascii = "微软雅黑", HighAnsi = "微软雅黑", EastAsia = "微软雅黑" });
    rPrEnd.AppendChild(new FontSize { Val = "22" });
    rPrEnd.AppendChild(new Color { Val = "666666" });
    rEnd.AppendChild(rPrEnd);
    rEnd.AppendChild(new Text("学员手册 · 岗位实操手册开发 · v1.0"));
    pEnd.AppendChild(rEnd);
    body.AppendChild(pEnd);
}

void AddFooter(MainDocumentPart mainPart, SectionProperties sectPr)
{
    var footerPart = mainPart.AddNewPart<FooterPart>();
    var footer = new Footer();

    var para = new Paragraph();
    var pPr = new ParagraphProperties();
    pPr.AppendChild(new Justification { Val = JustificationValues.Center });
    para.AppendChild(pPr);

    // Course name run
    var run1 = new Run();
    var rPr1 = new RunProperties();
    rPr1.AppendChild(new RunFonts { Ascii = "微软雅黑", HighAnsi = "微软雅黑", EastAsia = "微软雅黑" });
    rPr1.AppendChild(new FontSize { Val = "18" });
    rPr1.AppendChild(new Color { Val = "666666" });
    run1.AppendChild(rPr1);
    run1.AppendChild(new Text("AI赋能岗位实操手册开发") { Space = SpaceProcessingModeValues.Preserve });
    para.AppendChild(run1);

    // Separator
    var run2 = new Run();
    var rPr2 = new RunProperties();
    rPr2.AppendChild(new RunFonts { Ascii = "微软雅黑", HighAnsi = "微软雅黑", EastAsia = "微软雅黑" });
    rPr2.AppendChild(new FontSize { Val = "18" });
    rPr2.AppendChild(new Color { Val = "666666" });
    run2.AppendChild(rPr2);
    run2.AppendChild(new Text(" | ") { Space = SpaceProcessingModeValues.Preserve });
    para.AppendChild(run2);

    // Page number field
    var run3 = new Run();
    var rPr3 = new RunProperties();
    rPr3.AppendChild(new RunFonts { Ascii = "微软雅黑", HighAnsi = "微软雅黑", EastAsia = "微软雅黑" });
    rPr3.AppendChild(new FontSize { Val = "18" });
    rPr3.AppendChild(new Color { Val = "666666" });
    run3.AppendChild(rPr3);
    run3.AppendChild(new Text("第 ") { Space = SpaceProcessingModeValues.Preserve });
    para.AppendChild(run3);

    var pageNumRun = new Run();
    var pageField = new SimpleField { Instruction = "PAGE" };
    pageNumRun.AppendChild(new RunProperties(
        new RunFonts { Ascii = "微软雅黑", HighAnsi = "微软雅黑", EastAsia = "微软雅黑" },
        new FontSize { Val = "18" },
        new Color { Val = "666666" }
    ));
    pageField.AppendChild(pageNumRun);
    para.AppendChild(pageField);

    var run4 = new Run();
    var rPr4 = new RunProperties();
    rPr4.AppendChild(new RunFonts { Ascii = "微软雅黑", HighAnsi = "微软雅黑", EastAsia = "微软雅黑" });
    rPr4.AppendChild(new FontSize { Val = "18" });
    rPr4.AppendChild(new Color { Val = "666666" });
    run4.AppendChild(rPr4);
    run4.AppendChild(new Text(" 页") { Space = SpaceProcessingModeValues.Preserve });
    para.AppendChild(run4);

    footer.AppendChild(para);
    footerPart.Footer = footer;
    footerPart.Footer.Save();

    string footerId = mainPart.GetIdOfPart(footerPart);
    sectPr.AppendChild(new FooterReference { Type = HeaderFooterValues.Default, Id = footerId });
}
