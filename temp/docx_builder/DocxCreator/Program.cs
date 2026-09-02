using DocumentFormat.OpenXml;
using DocumentFormat.OpenXml.Packaging;
using DocumentFormat.OpenXml.Wordprocessing;

string outputPath = args.Length > 0 ? args[0] : "output.docx";

var doc = WordprocessingDocument.Create(outputPath, WordprocessingDocumentType.Document);
var mainPart = doc.AddMainDocumentPart();
mainPart.Document = new Document();
var body = new Body();

// Page setup - A4
var sectionProps = new SectionProperties(
    new PageSize { Width = 11906, Height = 16838 },
    new PageMargin { Top = 1440, Right = 1440, Bottom = 1440, Left = 1440, Header = 720, Footer = 720 }
);

// Styles
var stylesPart = mainPart.AddNewPart<StyleDefinitionsPart>();
var styles = new Styles();

// Normal style
var normalStyle = new Style
{
    Type = StyleValues.Paragraph,
    StyleId = "Normal",
    Default = true
};
normalStyle.Append(new StyleName { Val = "Normal" });
normalStyle.Append(new StyleParagraphProperties(
    new SpacingBetweenLines { After = "160", Line = "276", LineRule = LineSpacingRuleValues.Auto }));
normalStyle.Append(new StyleRunProperties(
    new RunFonts { Ascii = "Calibri", HighAnsi = "Calibri", EastAsia = "SimSun", ComplexScript = "Arial" },
    new FontSize { Val = "22" }));
styles.Append(normalStyle);

// Heading1 style
var h1Style = new Style
{
    Type = StyleValues.Paragraph,
    StyleId = "Heading1"
};
h1Style.Append(new StyleName { Val = "Heading 1" });
h1Style.Append(new BasedOn { Val = "Normal" });
h1Style.Append(new StyleParagraphProperties(
    new SpacingBetweenLines { Before = "240", After = "120" },
    new KeepNext(),
    new OutlineLevel { Val = 0 }));
h1Style.Append(new StyleRunProperties(
    new Bold(),
    new FontSize { Val = "32" },
    new Color { Val = "2F5496" }));
styles.Append(h1Style);

// Heading2 style
var h2Style = new Style
{
    Type = StyleValues.Paragraph,
    StyleId = "Heading2"
};
h2Style.Append(new StyleName { Val = "Heading 2" });
h2Style.Append(new BasedOn { Val = "Normal" });
h2Style.Append(new StyleParagraphProperties(
    new SpacingBetweenLines { Before = "200", After = "80" },
    new KeepNext(),
    new OutlineLevel { Val = 1 }));
h2Style.Append(new StyleRunProperties(
    new Bold(),
    new FontSize { Val = "26" },
    new Color { Val = "2F5496" }));
styles.Append(h2Style);

stylesPart.Styles = styles;
stylesPart.Styles.Save();

// Title
var title = new Paragraph();
var titleProps = new ParagraphProperties(
    new Justification { Val = JustificationValues.Center },
    new SpacingBetweenLines { After = "400" });
title.Append(titleProps);
var titleRun = new Run();
var titleRunProps = new RunProperties(
    new Bold(),
    new FontSize { Val = "56" },
    new FontSizeComplexScript { Val = "56" },
    new Color { Val = "1F4E79" });
titleRun.Append(titleRunProps);
titleRun.Append(new Text("关键时刻：以服务建立企业竞争优势"));
title.Append(titleRun);
body.Append(title);

// Subtitle
var subtitle = new Paragraph();
var subProps = new ParagraphProperties(
    new Justification { Val = JustificationValues.Center },
    new SpacingBetweenLines { After = "600" });
subtitle.Append(subProps);
var subRun = new Run();
var subRunProps = new RunProperties(
    new FontSize { Val = "32" },
    new FontSizeComplexScript { Val = "32" },
    new Color { Val = "666666" });
subRun.Append(subRunProps);
subRun.Append(new Text("课程介绍"));
subtitle.Append(subRun);
body.Append(subtitle);

// Course Background Section
var hBg = new Paragraph();
hBg.Append(new ParagraphProperties(new ParagraphStyleId { Val = "Heading1" }));
hBg.Append(new Run(new Text("课程背景")));
body.Append(hBg);

body.Append(CreateParagraph("在竞争日益激烈的商业环境中，服务已成为企业建立差异化竞争优势的核心手段。"));

body.Append(CreateParagraph("本课程基于国际领先的服务管理理论，结合中国企业实际场景，帮助学员掌握在关键服务时刻把握机会、建立客户信任、提升服务价值的核心能力。"));

body.Append(CreateParagraph("学员将学习如何通过专业的服务技巧，将每一次与客户的接触转化为建立长期关系的机会，从而为企业创造可持续的竞争优势。"));

// Course Value Section
var hVal = new Paragraph();
hVal.Append(new ParagraphProperties(new ParagraphStyleId { Val = "Heading1" }));
hVal.Append(new Run(new Text("课程价值")));
body.Append(hVal);

body.Append(CreateHeading2("对个人的价值"));
body.Append(CreateBullet("掌握关键时刻服务核心理论与方法"));
body.Append(CreateBullet("提升客户沟通和问题解决能力"));
body.Append(CreateBullet("增强职场竞争力和职业发展空间"));
body.Append(CreateBullet("建立以客户为中心的服务思维"));

body.Append(CreateHeading2("对企业的价值"));
body.Append(CreateBullet("统一服务标准，提升客户体验一致性"));
body.Append(CreateBullet("通过优质服务建立品牌忠诚度"));
body.Append(CreateBullet("减少客户流失，提升客户生命周期价值"));
body.Append(CreateBullet("培养服务文化，形成组织竞争优势"));

// Target Audience
var hTarget = new Paragraph();
hTarget.Append(new ParagraphProperties(new ParagraphStyleId { Val = "Heading1" }));
hTarget.Append(new Run(new Text("适合对象")));
body.Append(hTarget);

body.Append(CreateParagraph("本课程专为以下岗位设计："));
body.Append(CreateBullet("客户经理"));
body.Append(CreateBullet("技术工程师"));
body.Append(CreateBullet("客服中心人员"));
body.Append(CreateBullet("需要频繁与客户接触的服务人员"));

body.Append(CreateParagraph("企业内训建议覆盖整个客户服务相关部门，确保服务理念和技能的统一落地。"));

// Course Framework
var hFrame = new Paragraph();
hFrame.Append(new ParagraphProperties(new ParagraphStyleId { Val = "Heading1" }));
hFrame.Append(new Run(new Text("课程框架")));
body.Append(hFrame);

body.Append(CreateParagraph("课程采用\"理解—探索—提议—确认—总结\"的逻辑结构，系统覆盖服务全流程："));

body.Append(CreateHeading2("第一部分：理解服务，树立服务意识"));
body.Append(CreateBullet("服务的本质与价值"));

body.Append(CreateHeading2("第二部分探索（上）：客户视角"));
body.Append(CreateBullet("客户利益分析"));
body.Append(CreateBullet("内部客户概念"));
body.Append(CreateBullet("期望管理"));
body.Append(CreateBullet("倾听技术"));

body.Append(CreateHeading2("第二部分探索（下）：沟通技术"));
body.Append(CreateBullet("提问技术"));
body.Append(CreateBullet("聆听技术"));
body.Append(CreateBullet("异议引导"));
body.Append(CreateBullet("案例分析"));

body.Append(CreateHeading2("第三四部分：提议与行动"));
body.Append(CreateBullet("恰当提议"));
body.Append(CreateBullet("双重分析"));
body.Append(CreateBullet("5C原则"));
body.Append(CreateBullet("心理需要"));
body.Append(CreateBullet("呈现利益"));

body.Append(CreateHeading2("第五部分：确认"));
body.Append(CreateBullet("画龙点睛"));
body.Append(CreateBullet("补救济机会"));
body.Append(CreateBullet("确认用语"));
body.Append(CreateBullet("综合复盘"));

body.Append(CreateHeading2("第六部分：总结与行动"));
body.Append(CreateBullet("知识地图"));
body.Append(CreateBullet("关系经营"));
body.Append(CreateBullet("行动计划"));

// Teaching Methods
var hMethod = new Paragraph();
hMethod.Append(new ParagraphProperties(new ParagraphStyleId { Val = "Heading1" }));
hMethod.Append(new Run(new Text("教学方式")));
body.Append(hMethod);

body.Append(CreateBullet("理论讲解：系统传授服务管理核心理论"));
body.Append(CreateBullet("案例分析：深入剖析真实服务场景"));
body.Append(CreateBullet("角色扮演：模拟关键服务时刻"));
body.Append(CreateBullet("小组讨论：分享经验相互学习"));
body.Append(CreateBullet("工具实践：运用服务工具落地技能"));

// Course Info
var hInfo = new Paragraph();
hInfo.Append(new ParagraphProperties(new ParagraphStyleId { Val = "Heading1" }));
hInfo.Append(new Run(new Text("课程信息")));
body.Append(hInfo);

// Table for course info
var table = new Table();
var tblProps = new TableProperties(
    new TableWidth { Width = "5000", Type = TableWidthUnitValues.Pct },
    new TableBorders(
        new TopBorder { Val = BorderValues.Single, Size = 4, Color = "2F5496" },
        new BottomBorder { Val = BorderValues.Single, Size = 4, Color = "2F5496" },
        new LeftBorder { Val = BorderValues.Single, Size = 4, Color = "2F5496" },
        new RightBorder { Val = BorderValues.Single, Size = 4, Color = "2F5496" },
        new InsideHorizontalBorder { Val = BorderValues.Single, Size = 4, Color = "2F5496" },
        new InsideVerticalBorder { Val = BorderValues.Single, Size = 4, Color = "2F5496" }
    )
);
table.Append(tblProps);

var grid = new TableGrid();
table.Append(grid);

table.Append(CreateTableRow("建议时长", "2天（每天6小时，共12小时）", true));
table.Append(CreateTableRow("班级规模", "20-30人", true));
table.Append(CreateTableRow("教学地点", "企业内训或指定场地", true));
table.Append(CreateTableRow("配套物料", "学员手册、工具卡、案例集", true));

body.Append(table);

// Footer quote
body.Append(CreateParagraph(""));
var quote = new Paragraph();
var quoteProps = new ParagraphProperties(
    new Justification { Val = JustificationValues.Center },
    new SpacingBetweenLines { Before = "400", After = "400" }
);
quote.Append(quoteProps);
var quoteRun = new Run();
var quoteRunProps = new RunProperties(
    new Italic(),
    new FontSize { Val = "24" },
    new Color { Val = "666666" }
);
quoteRun.Append(quoteRunProps);
quoteRun.Append(new Text("\"服务的本质是在关键时刻创造价值\""));
quote.Append(quoteRun);
body.Append(quote);

body.Append(sectionProps);
mainPart.Document.Append(body);
mainPart.Document.Save();
doc.Dispose();

Console.WriteLine($"Document created: {outputPath}");

// Helper functions
static Paragraph CreateParagraph(string text)
{
    var p = new Paragraph();
    var r = new Run();
    r.Append(new Text(text));
    p.Append(r);
    return p;
}

static Paragraph CreateHeading2(string text)
{
    var p = new Paragraph();
    p.Append(new ParagraphProperties(new ParagraphStyleId { Val = "Heading2" }));
    p.Append(new Run(new Text(text)));
    return p;
}

static Paragraph CreateBullet(string text)
{
    var p = new Paragraph();
    var pPr = new ParagraphProperties();
    pPr.Append(new Indentation { Left = "720", Hanging = "360" });
    p.Append(pPr);
    var r = new Run();
    r.Append(new Text(text));
    p.Append(r);
    return p;
}

static TableRow CreateTableRow(string label, string value, bool headerRow)
{
    var row = new TableRow();

    var cell1 = new TableCell();
    cell1.Append(new TableCellProperties(
        new TableCellWidth { Width = "2500", Type = TableWidthUnitValues.Pct }));
    if (headerRow)
    {
        cell1.Append(new TableCellProperties(
            new Shading { Fill = "2F5496", Color = "FFFFFF", Val = ShadingPatternValues.Clear }));
    }
    cell1.Append(new Paragraph(
        new ParagraphProperties(new Justification { Val = JustificationValues.Left }),
        new Run(new Text(label)) { RunProperties = new RunProperties(new Bold()) }));
    row.Append(cell1);

    var cell2 = new TableCell();
    cell2.Append(new TableCellProperties(
        new TableCellWidth { Width = "7500", Type = TableWidthUnitValues.Pct }));
    cell2.Append(new Paragraph(new Run(new Text(value))));
    row.Append(cell2);

    return row;
}
