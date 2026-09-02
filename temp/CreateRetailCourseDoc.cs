// Create retail course promotional document
#r "nuget: DocumentFormat.OpenXml, 3.2.0"

using DocumentFormat.OpenXml;
using DocumentFormat.OpenXml.Packaging;
using DocumentFormat.OpenXml.Wordprocessing;
using DocumentFormat.OpenXml.ExtendedProperties;
using DocumentFormat.OpenXml.VariantTypes;

// Output path
string outputPath = @"D:/新课开发/销售/零售精英：培养关键技能，打造长效佳绩/完整课程包/11-对外宣传文案/零售精英-对外宣传文案.docx";

// Colors
string primaryRed = "C00000";    // Deep red
string darkGray = "333333";      // Dark gray for body
string mediumGray = "666666";    // Medium gray
string lightGray = "F2F2F2";     // Light gray for backgrounds

// Create document
using (var doc = WordprocessingDocument.Create(outputPath, WordprocessingDocumentType.Document))
{
    // Add main parts
    var mainPart = doc.AddMainDocumentPart();
    mainPart.Document = new Document(new Body());
    var body = mainPart.Document.Body;

    // Add document settings
    var settingsPart = mainPart.AddNewPart<DocumentSettingsPart>();
    settingsPart.Settings = new Settings();

    // ============ STYLES ============
    var stylesPart = mainPart.AddNewPart<StyleDefinitionsPart>();
    var styles = new Styles();

    // Normal style
    styles.Append(new Style()
    {
        Type = StyleValues.Paragraph,
        StyleId = "Normal",
        StyleName = new StyleName() { Val = "Normal" },
        PrimaryStyle = new PrimaryStyle()
    });

    // Heading1 - Main title style (Red)
    styles.Append(new Style()
    {
        Type = StyleValues.Paragraph,
        StyleId = "Heading1",
        StyleName = new StyleName() { Val = "heading 1" },
        BasedOn = new BasedOn() { Val = "Normal" },
        Next = new Next() { Val = "Normal" },
        PrimaryStyle = new PrimaryStyle(),
        StyleParagraphProperties = new StyleParagraphProperties(
            new SpacingBetweenLines() { After = "200", Line = "276", LineRule = LineSpacingRuleValues.Auto },
            new KeepNext(),
            new OutlineLevel() { Val = 0 }
        ),
        StyleRunProperties = new StyleRunProperties(
            new Color() { Val = primaryRed },
            new FontSize() { Val = "48" },  // 24pt
            new FontSizeComplexScript() { Val = "48" },
            new Bold()
        )
    });

    // Heading2 - Section title (Dark gray)
    styles.Append(new Style()
    {
        Type = StyleValues.Paragraph,
        StyleId = "Heading2",
        StyleName = new StyleName() { Val = "heading 2" },
        BasedOn = new BasedOn() { Val = "Normal" },
        Next = new Next() { Val = "Normal" },
        PrimaryStyle = new PrimaryStyle(),
        StyleParagraphProperties = new StyleParagraphProperties(
            new SpacingBetweenLines() { After = "120", Line = "276", LineRule = LineSpacingRuleValues.Auto },
            new KeepNext(),
            new OutlineLevel() { Val = 1 }
        ),
        StyleRunProperties = new StyleRunProperties(
            new Color() { Val = darkGray },
            new FontSize() { Val = "36" },  // 18pt
            new FontSizeComplexScript() { Val = "36" },
            new Bold()
        )
    });

    // Heading3 - Subsection
    styles.Append(new Style()
    {
        Type = StyleValues.Paragraph,
        StyleId = "Heading3",
        StyleName = new StyleName() { Val = "heading 3" },
        BasedOn = new BasedOn() { Val = "Normal" },
        Next = new Next() { Val = "Normal" },
        PrimaryStyle = new PrimaryStyle(),
        StyleParagraphProperties = new StyleParagraphProperties(
            new SpacingBetweenLines() { After = "80", Line = "276", LineRule = LineSpacingRuleValues.Auto },
            new OutlineLevel() { Val = 2 }
        ),
        StyleRunProperties = new StyleRunProperties(
            new Color() { Val = primaryRed },
            new FontSize() { Val = "28" },  // 14pt
            new FontSizeComplexScript() { Val = "28" },
            new Bold()
        )
    });

    // Accent style - Red text
    styles.Append(new Style()
    {
        Type = StyleValues.Paragraph,
        StyleId = "Accent",
        StyleName = new StyleName() { Val = "Accent" },
        BasedOn = new BasedOn() { Val = "Normal" },
        PrimaryStyle = new PrimaryStyle(),
        StyleRunProperties = new StyleRunProperties(
            new Color() { Val = primaryRed },
            new Bold()
        )
    });

    // Highlight style - Gray background
    styles.Append(new Style()
    {
        Type = StyleValues.Paragraph,
        StyleId = "Highlight",
        StyleName = new StyleName() { Val = "Highlight" },
        BasedOn = new BasedOn() { Val = "Normal" },
        PrimaryStyle = new PrimaryStyle(),
        StyleParagraphProperties = new StyleParagraphProperties(
            new Shading() { Val = ShadingPatternValues.Clear, Fill = lightGray },
            new SpacingBetweenLines() { After = "160", Line = "276", LineRule = LineSpacingRuleValues.Auto }
        )
    });

    stylesPart.Styles = styles;

    // ============ PAGE SETUP ============
    var sectionProps = new SectionProperties(
        new PageSize() { Width = 11906, Height = 16838 },  // A4
        new PageMargin() { Top = 1440, Right = 1440, Bottom = 1440, Left = 1440 }
    );

    // ============ CONTENT ============

    // Helper functions
    Paragraph CreateParagraph(string text, string styleId = "Normal", string color = null, bool bold = false, int fontSize = 22)
    {
        var p = new Paragraph();
        var pPr = new ParagraphProperties();
        if (styleId != "Normal")
        {
            pPr.Append(new ParagraphStyleId() { Val = styleId });
        }
        p.Append(pPr);

        var r = new Run();
        var rPr = new RunProperties();
        rPr.Append(new FontSize() { Val = fontSize.ToString() });
        rPr.Append(new FontSizeComplexScript() { Val = fontSize.ToString() });
        if (color != null)
            rPr.Append(new Color() { Val = color });
        if (bold)
            rPr.Append(new Bold());
        r.Append(rPr);
        r.Append(new Text(text) { Space = SpaceProcessingModeValues.Preserve });
        p.Append(r);
        return p;
    }

    Paragraph CreateBulletPoint(string text, string styleId = "Normal")
    {
        var p = new Paragraph();
        var pPr = new ParagraphProperties();
        pPr.Append(new ParagraphStyleId() { Val = styleId });
        pPr.Append(new SpacingBetweenLines() { After = "80", Line = "276", LineRule = LineSpacingRuleValues.Auto });
        pPr.Append(new Indentation() { Left = "360", Hanging = "360" });
        p.Append(pPr);

        var r = new Run();
        var rPr = new RunProperties();
        rPr.Append(new Color() { Val = primaryRed });
        rPr.Append(new FontSize() { Val = "22" });
        r.Append(rPr);
        r.Append(new Text("● ") { Space = SpaceProcessingModeValues.Preserve });
        p.Append(r);

        r = new Run();
        rPr = new RunProperties();
        rPr.Append(new FontSize() { Val = "22" });
        r.Append(rPr);
        r.Append(new Text(text) { Space = SpaceProcessingModeValues.Preserve });
        p.Append(r);

        return p;
    }

    // ============ DOCUMENT TITLE ============
    body.Append(CreateParagraph("零售精英：培养关键技能，打造长效佳绩", "Heading1", primaryRed, true, 48));
    body.Append(CreateParagraph("——对外宣传文案——", "Accent", mediumGray, false, 28));

    // Horizontal line (using empty paragraph with bottom border)
    var hrPara = new Paragraph();
    var hrPPr = new ParagraphProperties();
    hrPPr.Append(new ParagraphBorders(
        new BottomBorder() { Val = BorderValues.Single, Size = 12, Color = primaryRed }
    ));
    hrPPr.Append(new SpacingBetweenLines() { After = "400" });
    hrPara.Append(hrPPr);
    body.Append(hrPara);

    // ============ SECTION 1: 课程介绍（长版） ============
    body.Append(CreateParagraph("一、课程介绍（长版）", "Heading2", darkGray, true, 36));

    // 1.1 痛点切入
    body.Append(CreateParagraph("1.1 痛点切入", "Heading3", primaryRed, true, 28));
    body.Append(CreateParagraph("在零售一线，你是否经常遇到这些困境？", "Normal", darkGray, false, 22));
    body.Append(CreateBulletPoint("客户进店转一圈就走，不知道在想什么"));
    body.Append(CreateBulletPoint("说了半天产品优点，客户就是不心动"));
    body.Append(CreateBulletPoint("报价后客户嫌贵，死活不肯成交"));
    body.Append(CreateBulletPoint("客户类型多样，不知道怎么应对"));
    body.Append(CreateBulletPoint("促销做了不少，业绩还是上不去"));

    // 1.2 解决方案
    body.Append(CreateParagraph("1.2 解决方案", "Heading3", primaryRed, true, 28));
    body.Append(CreateParagraph("《零售精英》课程以"五力模型"为核心框架：", "Normal", darkGray, false, 22));
    body.Append(CreateBulletPoint("识人之力 — 快速判断客户类型"));
    body.Append(CreateBulletPoint("链接之力 — 建立信任与好感"));
    body.Append(CreateBulletPoint("锚定之力 — 植入价值锚点"));
    body.Append(CreateBulletPoint("说服之力 — FABE精准说服"));
    body.Append(CreateBulletPoint("促动之力 — 推动快速成交"));

    // 1.3 课程特色
    body.Append(CreateParagraph("1.3 课程特色", "Heading3", primaryRed, true, 28));
    body.Append(CreateBulletPoint("实战派导师：多年终端销售与管理经验，实战案例丰富"));
    body.Append(CreateBulletPoint("场景化教学：还原真实销售场景，学完就能用"));
    body.Append(CreateBulletPoint("工具化呈现：配套实用话术模板，即学即上手"));
    body.Append(CreateBulletPoint("互动式演练：角色扮演+真实案例演练，深度记忆"));

    // 1.4 学员收益
    body.Append(CreateParagraph("1.4 学员收益", "Heading3", primaryRed, true, 28));
    body.Append(CreateParagraph("学完本课程，你将获得：", "Normal", darkGray, false, 22));
    body.Append(CreateBulletPoint("五种客户类型判断方法 — 一眼看穿客户类型"));
    body.Append(CreateBulletPoint("场景式提问技巧 — 问出客户真实需求"));
    body.Append(CreateBulletPoint("FABE说服模型 — 让产品优势真正打动人心"));
    body.Append(CreateBulletPoint("价格谈判四步法 — 优雅报价、灵活让步"));
    body.Append(CreateBulletPoint("客户应对全案 — 各类客户破解策略"));

    // 1.5 适合人群
    body.Append(CreateParagraph("1.5 适合人群", "Heading3", primaryRed, true, 28));
    body.Append(CreateBulletPoint("零售门店导购/销售"));
    body.Append(CreateBulletPoint("终端销售管理人员"));
    body.Append(CreateBulletPoint("希望提升销售能力的从业者"));

    // 1.6 课程安排
    body.Append(CreateParagraph("1.6 课程安排", "Heading3", primaryRed, true, 28));

    // Table for course schedule
    var table = new Table();
    var tblPr = new TableProperties(
        new TableWidth() { Width = "5000", Type = TableWidthUnitValues.Pct },
        new TableBorders(
            new TopBorder() { Val = BorderValues.Single, Size = 8, Color = primaryRed },
            new BottomBorder() { Val = BorderValues.Single, Size = 8, Color = primaryRed },
            new LeftBorder() { Val = BorderValues.Single, Size = 8, Color = primaryRed },
            new RightBorder() { Val = BorderValues.Single, Size = 8, Color = primaryRed },
            new InsideHorizontalBorder() { Val = BorderValues.Single, Size = 4, Color = "CCCCCC" },
            new InsideVerticalBorder() { Val = BorderValues.Single, Size = 4, Color = "CCCCCC" }
        ),
        new TableCellMarginDefault(
            new TopMargin() { Width = "57", Type = TableWidthUnitValues.Dxa },
            new TableCellMarginRight() { Width = "57", Type = TableWidthUnitValues.Dxa },
            new BottomMargin() { Width = "57", Type = TableWidthUnitValues.Dxa },
            new TableCellMarginLeft() { Width = "57", Type = TableWidthUnitValues.Dxa }
        )
    );
    table.Append(tblPr);

    // Table header
    var headerRow = new TableRow();
    headerRow.Append(new TableCell(new Paragraph(new Run(new RunProperties(new Bold(), new FontSize() { Val = "22" }), new Text("模块")))));
    headerRow.Append(new TableCell(new Paragraph(new Run(new RunProperties(new Bold(), new FontSize() { Val = "22" }), new Text("内容")))));
    headerRow.Append(new TableCell(new Paragraph(new Run(new RunProperties(new Bold(), new FontSize() { Val = "22" }), new Text("时长")))));
    table.Append(headerRow);

    // Table rows
    string[,] schedule = {
        { "开篇", "五力模型概述与学习目标", "0.5小时" },
        { "识人之力", "五种客户类型判断法", "1.5小时" },
        { "链接之力", "建立信任的场景化技巧", "1小时" },
        { "锚定之力", "价值锚点植入方法", "1小时" },
        { "说服之力", "FABE说服模型实战", "1.5小时" },
        { "促动之力", "价格谈判与成交促动", "1.5小时" },
        { "综合演练", "情境模拟与案例复盘", "2小时" }
    };

    for (int i = 0; i <= schedule.GetUpperBound(0); i++)
    {
        var row = new TableRow();
        row.Append(new TableCell(new Paragraph(new Run(new RunProperties(new FontSize() { Val = "20" }), new Text(schedule[i, 0])))));
        row.Append(new TableCell(new Paragraph(new Run(new RunProperties(new FontSize() { Val = "20" }), new Text(schedule[i, 1])))));
        row.Append(new TableCell(new Paragraph(new Run(new RunProperties(new FontSize() { Val = "20" }), new Text(schedule[i, 2])))));
        table.Append(row);
    }
    body.Append(table);

    // ============ SECTION 2: 朋友圈/短视频文案（短版） ============
    body.Append(CreateParagraph("二、朋友圈/短视频文案（短版）", "Heading2", darkGray, true, 36));

    // 2.1 一句话共鸣
    body.Append(CreateParagraph("2.1 一句话共鸣", "Heading3", primaryRed, true, 28));
    body.Append(CreateParagraph(""客户不是不想买，是不知道怎么选——你能帮他选对，他就选你。"", "Highlight", darkGray, false, 24));

    // 2.2 课程亮点
    body.Append(CreateParagraph("2.2 课程亮点", "Heading3", primaryRed, true, 28));
    body.Append(CreateBulletPoint("五力模型：识人→链接→锚定→说服→促动"));
    body.Append(CreateBulletPoint("五种客户类型全覆盖"));
    body.Append(CreateBulletPoint("FABE说服+价格谈判实战"));
    body.Append(CreateBulletPoint("学完就能用的实战技巧"));

    // 2.3 行动号召
    body.Append(CreateParagraph("2.3 行动号召", "Heading3", primaryRed, true, 28));
    body.Append(CreateParagraph(""想提升业绩？扫码报名，一起成为零售精英！"", "Highlight", primaryRed, true, 24));

    // ============ SECTION 3: 课程海报文案 ============
    body.Append(CreateParagraph("三、课程海报文案", "Heading2", darkGray, true, 36));

    // 3.1 主标题
    body.Append(CreateParagraph("3.1 主标题", "Heading3", primaryRed, true, 28));
    body.Append(CreateParagraph("零售精英", "Accent", primaryRed, true, 52));
    body.Append(CreateParagraph("培养关键技能，打造长效佳绩", "Normal", darkGray, false, 32));

    // 3.2 副标题
    body.Append(CreateParagraph("3.2 副标题", "Heading3", primaryRed, true, 28));
    body.Append(CreateParagraph(""从'卖产品'到'卖价值'，从'促成单'到'赢口碑'"", "Normal", mediumGray, false, 24));

    // 3.3 核心卖点
    body.Append(CreateParagraph("3.3 核心卖点", "Heading3", primaryRed, true, 28));
    body.Append(CreateBulletPoint("【五力模型】系统化销售思维"));
    body.Append(CreateBulletPoint("【实战工具】拿来就用的成交话术"));
    body.Append(CreateBulletPoint("【案例教学】真实场景深度还原"));
    body.Append(CreateBulletPoint("【即学即用】明天就能提升业绩"));

    // 3.4 行动号召
    body.Append(CreateParagraph("3.4 行动号召", "Heading3", primaryRed, true, 28));
    body.Append(CreateParagraph("扫码报名 | 名额有限 | 拒绝空谈", "Accent", primaryRed, true, 28));

    // ============ SECTION 4: 常见问题Q&A ============
    body.Append(CreateParagraph("四、常见问题Q&A", "Heading2", darkGray, true, 36));

    // Q&A pairs
    (string Q, string A)[] qas = {
        ("Q1: 课程适合什么级别的销售？", "A: 本课程适合初级到中级销售从业人员，包括门店导购、终端销售人员及销售管理者。无论是新人入门还是老手提升，都能获得实用价值。"),
        ("Q2: 课程时长多久？", "A: 完整课程约9小时，可根据企业需求拆分为1-3天的培训方案。"),
        ("Q3: 有配套的学习资料吗？", "A: 报名学员可获得全套学习资料，包括：课程PPT、实用话术手册、客户类型判断工具、FABE模板等。"),
        ("Q4: 课程形式是怎样的？", "A: 线下集中培训为主，线上直播为辅。包含理论讲解、案例分析、角色扮演、实战演练等多种形式。"),
        ("Q5: 学完能达到什么效果？", "A: 根据往期学员反馈，平均业绩提升15%-30%。学员普遍反映客户成交率提高、客单价提升、客户满意度上升。")
    };

    foreach (var (q, a) in qas)
    {
        body.Append(CreateParagraph(q, "Normal", primaryRed, true, 22));
        body.Append(CreateParagraph(a, "Normal", darkGray, false, 22));
        body.Append(new Paragraph()); // Empty line
    }

    // ============ FOOTER ============
    body.Append(new Paragraph()); // Empty line
    var footer = new Paragraph();
    var footerPPr = new ParagraphProperties();
    footerPPr.Append(new Justification() { Val = JustificationValues.Center });
    footer.Append(footerPPr);
    var footerRun = new Run();
    var footerRPr = new RunProperties();
    footerRPr.Append(new Color() { Val = mediumGray });
    footerRPr.Append(new FontSize() { Val = "18" });
    footerRun.Append(footerRPr);
    footerRun.Append(new Text("—— 零售精英课程 —— 成就销售梦想 ——") { Space = SpaceProcessingModeValues.Preserve });
    footer.Append(footerRun);
    body.Append(footer);

    // Add section properties at the end
    body.Append(sectionProps);
}

// Console.WriteLine($"Document created: {outputPath}");
Console.WriteLine("SUCCESS: " + outputPath);
