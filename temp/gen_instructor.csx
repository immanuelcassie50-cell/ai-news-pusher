#r "nuget: DocumentFormat.OpenXml, 3.2.0"

using DocumentFormat.OpenXml;
using DocumentFormat.OpenXml.Packaging;
using DocumentFormat.OpenXml.Wordprocessing;

// Color scheme
string PRIMARY = "C00000";
string SECONDARY = "4A4A4A";
string ACCENT = "B31F28";
string LIGHT = "D4D4D4";
string WHITE = "FFFFFF";
string HEADER_BG = "1F3864";
string GOLD = "D4A574";
string LIGHT_GREEN = "E8F5E9";
string LIGHT_ORANGE = "FFF3E0";
string LIGHT_BLUE = "E8F0FE";
string LIGHT_RED = "FFEBEE";
string GREEN = "2E7D32";
string ORANGE = "E65100";

string outputDir = @"D:\新课开发\内训师和表达\业务导向的共创式萃取开发\完整课程包";
string outputPath = outputDir + @"\05-讲师手册\讲师手册_精美版.docx";

// Helper function to add a style
void AddStyle(Styles styles, string styleId, string styleName, StyleParagraphProperties pPr, StyleRunProperties rPr) {
    var style = new Style {
        Type = StyleValues.Paragraph,
        StyleId = styleId,
        StyleName = new StyleName { Val = styleName }
    };
    if (pPr != null) style.Append(pPr);
    if (rPr != null) style.Append(rPr);
    styles.Append(style);
}

using (var doc = WordprocessingDocument.Create(outputPath, WordprocessingDocumentType.Document))
{
    var mainPart = doc.AddMainDocumentPart();
    mainPart.Document = new Document(new Body());
    var body = mainPart.Document.Body!;

    // Styles
    var stylesPart = mainPart.AddNewPart<StyleDefinitionsPart>();
    stylesPart.Styles = new Styles();
    var styles = stylesPart.Styles!;

    styles.Append(new DocDefaults(
        new RunPropertiesDefault(new RunPropertiesBaseStyle(
            new RunFonts { Ascii = "Microsoft YaHei", EastAsia = "Microsoft YaHei" },
            new FontSize { Val = "21" }
        )),
        new ParagraphPropertiesDefault(new ParagraphPropertiesBaseStyle(
            new SpacingBetweenLines { After = "160", Line = "276", LineRule = LineSpacingRuleValues.Auto }
        ))
    ));

    // Add styles - TitleCover
    {
        var pPr = new StyleParagraphProperties(
            new Justification { Val = JustificationValues.Center },
            new SpacingBetweenLines { Before = "800", After = "200" }
        );
        var rPr = new StyleRunProperties(new Bold(), new FontSize { Val = "56" }, new Color { Val = PRIMARY });
        AddStyle(styles, "TitleCover", "TitleCover", pPr, rPr);
    }
    // Add styles - TitleMain
    {
        var pPr = new StyleParagraphProperties(
            new Justification { Val = JustificationValues.Center },
            new SpacingBetweenLines { After = "0" }
        );
        var rPr = new StyleRunProperties(new Bold(), new FontSize { Val = "44" }, new Color { Val = PRIMARY });
        AddStyle(styles, "TitleMain", "TitleMain", pPr, rPr);
    }
    // Add styles - Heading1
    {
        var pPr = new StyleParagraphProperties(
            new SpacingBetweenLines { Before = "480", After = "240" },
            new KeepNext(),
            new OutlineLevel { Val = 0 },
            new Shading { Fill = PRIMARY }
        );
        var rPr = new StyleRunProperties(new Bold(), new FontSize { Val = "36" }, new Color { Val = WHITE });
        AddStyle(styles, "Heading1", "Heading 1", pPr, rPr);
    }
    // Add styles - Heading2
    {
        var pPr = new StyleParagraphProperties(
            new SpacingBetweenLines { Before = "360", After = "120" },
            new KeepNext(),
            new OutlineLevel { Val = 1 }
        );
        var rPr = new StyleRunProperties(new Bold(), new FontSize { Val = "28" }, new Color { Val = HEADER_BG });
        AddStyle(styles, "Heading2", "Heading 2", pPr, rPr);
    }
    // Add styles - Heading3
    {
        var pPr = new StyleParagraphProperties(
            new SpacingBetweenLines { Before = "240", After = "120" },
            new KeepNext(),
            new OutlineLevel { Val = 2 }
        );
        var rPr = new StyleRunProperties(new Bold(), new FontSize { Val = "24" }, new Color { Val = ACCENT });
        AddStyle(styles, "Heading3", "Heading 3", pPr, rPr);
    }
    // Add styles - BodyText
    {
        var pPr = new StyleParagraphProperties(
            new SpacingBetweenLines { After = "120" }
        );
        var rPr = new StyleRunProperties(new FontSize { Val = "21" }, new Color { Val = SECONDARY });
        AddStyle(styles, "BodyText", "BodyText", pPr, rPr);
    }
    // Add styles - SectionTitle
    {
        var pPr = new StyleParagraphProperties(
            new SpacingBetweenLines { Before = "480", After = "200" },
            new KeepNext(),
            new OutlineLevel { Val = 0 }
        );
        var rPr = new StyleRunProperties(new Bold(), new FontSize { Val = "32" }, new Color { Val = PRIMARY });
        AddStyle(styles, "SectionTitle", "SectionTitle", pPr, rPr);
    }
    // Add styles - TipBox
    {
        var pPr = new StyleParagraphProperties(
            new SpacingBetweenLines { Before = "120", After = "120" },
            new Shading { Fill = LIGHT_GREEN },
            new ParagraphBorders(new LeftBorder { Val = BorderValues.Single, Size = 24, Color = GREEN })
        );
        var rPr = new StyleRunProperties(new FontSize { Val = "21" }, new Color { Val = SECONDARY });
        AddStyle(styles, "TipBox", "TipBox", pPr, rPr);
    }
    // Add styles - InsightBox
    {
        var pPr = new StyleParagraphProperties(
            new SpacingBetweenLines { Before = "120", After = "120" },
            new Shading { Fill = LIGHT_ORANGE },
            new ParagraphBorders(new LeftBorder { Val = BorderValues.Single, Size = 24, Color = ORANGE })
        );
        var rPr = new StyleRunProperties(new FontSize { Val = "21" }, new Color { Val = SECONDARY });
        AddStyle(styles, "InsightBox", "InsightBox", pPr, rPr);
    }
    // Add styles - QuoteBox
    {
        var pPr = new StyleParagraphProperties(
            new Justification { Val = JustificationValues.Center },
            new SpacingBetweenLines { Before = "240", After = "240" },
            new ParagraphBorders(new LeftBorder { Val = BorderValues.Single, Size = 24, Color = HEADER_BG }),
            new Indentation { Left = "720", Right = "720" }
        );
        var rPr = new StyleRunProperties(new Italic(), new FontSize { Val = "22" }, new Color { Val = SECONDARY });
        AddStyle(styles, "QuoteBox", "QuoteBox", pPr, rPr);
    }
    // Add styles - TimeNote
    {
        var pPr = new StyleParagraphProperties(
            new SpacingBetweenLines { Before = "60", After = "60" },
            new Shading { Fill = LIGHT_BLUE }
        );
        var rPr = new StyleRunProperties(new FontSize { Val = "20" }, new Color { Val = HEADER_BG });
        AddStyle(styles, "TimeNote", "TimeNote", pPr, rPr);
    }

    // Helper functions
    void AddH1(string text) => body.Append(new Paragraph(
        new ParagraphProperties(new ParagraphStyleId { Val = "Heading1" }),
        new Run(new Text(text))));

    void AddH2(string text) => body.Append(new Paragraph(
        new ParagraphProperties(new ParagraphStyleId { Val = "Heading2" }),
        new Run(new Text(text))));

    void AddH3(string text) => body.Append(new Paragraph(
        new ParagraphProperties(new ParagraphStyleId { Val = "Heading3" }),
        new Run(new Text(text))));

    void AddSec(string text) => body.Append(new Paragraph(
        new ParagraphProperties(new ParagraphStyleId { Val = "SectionTitle" }),
        new Run(new Text(text))));

    void AddP(string text) => body.Append(new Paragraph(
        new ParagraphProperties(new ParagraphStyleId { Val = "BodyText" }),
        new Run(new Text(text))));

    void AddTip(string text) => body.Append(new Paragraph(
        new ParagraphProperties(new ParagraphStyleId { Val = "TipBox" }),
        new Run(new Text("TIP: " + text))));

    void AddInsight(string text) => body.Append(new Paragraph(
        new ParagraphProperties(new ParagraphStyleId { Val = "InsightBox" }),
        new Run(new Text("INSIGHT: " + text))));

    void AddQuote(string text) => body.Append(new Paragraph(
        new ParagraphProperties(new ParagraphStyleId { Val = "QuoteBox" }),
        new Run(new Text(text))));

    void AddTime(string text) => body.Append(new Paragraph(
        new ParagraphProperties(new ParagraphStyleId { Val = "TimeNote" }),
        new Run(new Text("TIME: " + text))));

    void AddSpace(int count) { for (int i = 0; i < count; i++) body.Append(new Paragraph()); }

    void AddBreakPage() => body.Append(new Paragraph(new Run(new Break { Type = BreakValues.Page })));

    Table CreateTable(params string[] headers) {
        var tbl = new Table(
            new TableProperties(
                new TableWidth { Width = "5000", Type = TableWidthUnitValues.Pct },
                new TableBorders(
                    new TopBorder { Val = BorderValues.Single, Size = 8, Color = HEADER_BG },
                    new BottomBorder { Val = BorderValues.Single, Size = 8, Color = HEADER_BG },
                    new LeftBorder { Val = BorderValues.Single, Size = 8, Color = HEADER_BG },
                    new RightBorder { Val = BorderValues.Single, Size = 8, Color = HEADER_BG },
                    new InsideHorizontalBorder { Val = BorderValues.Single, Size = 4, Color = LIGHT },
                    new InsideVerticalBorder { Val = BorderValues.Single, Size = 4, Color = LIGHT }
                )
            )
        );
        var headerRow = new TableRow(new TableRowProperties(new TableHeader()));
        foreach (var h in headers)
            headerRow.Append(new TableCell(
                new TableCellProperties(new Shading { Fill = HEADER_BG }),
                new Paragraph(new ParagraphProperties(new Justification { Val = JustificationValues.Center }),
                    new Run(new RunProperties(new Bold(), new Color { Val = WHITE }), new Text(h)))
            ));
        tbl.Append(headerRow);
        return tbl;
    }

    void AddRow(Table tbl, params string[] cells) {
        var row = new TableRow();
        foreach (var c in cells)
            row.Append(new TableCell(new Paragraph(new Run(new Text(c)))));
        tbl.Append(row);
    }

    void FinishTable(Table tbl) => body.Append(tbl);

    // ==================== COVER ====================
    AddSpace(4);
    body.Append(new Paragraph(new ParagraphProperties(new ParagraphStyleId { Val = "TitleCover" }),
        new Run(new Text("业务导向的共创式萃取开发"))));
    AddSpace(1);
    body.Append(new Paragraph(new ParagraphProperties(new ParagraphStyleId { Val = "TitleMain" }),
        new Run(new Text("从经验到方法的课程开发工作坊"))));
    AddSpace(2);
    AddP("讲师手册");
    AddSpace(4);

    var coverTable = new Table(new TableProperties(
        new TableWidth { Width = "4000", Type = TableWidthUnitValues.Pct },
        new TableBorders(
            new TopBorder { Val = BorderValues.Single, Size = 4, Color = LIGHT },
            new BottomBorder { Val = BorderValues.Single, Size = 4, Color = LIGHT },
            new LeftBorder { Val = BorderValues.Single, Size = 4, Color = LIGHT },
            new RightBorder { Val = BorderValues.Single, Size = 4, Color = LIGHT },
            new InsideHorizontalBorder { Val = BorderValues.Single, Size = 2, Color = LIGHT }
        )
    ));
    AddRow(coverTable, "版本", "V1.0");
    AddRow(coverTable, "形式", "3天2夜 - 行动学习版");
    AddRow(coverTable, "总有效工作时间", "约20小时");
    FinishTable(coverTable);

    AddSpace(3);
    AddP("讲师姓名：____________________　　日期：____________________");
    AddSpace(2);
    AddQuote("把活在专家脑子里的经验，炼成组织可以复用的课程资产。");
    AddBreakPage();

    // ==================== TOC ====================
    AddSec("目  录");
    AddSpace(1);
    AddP("一、讲师信息表");
    AddP("二、整体时间安排");
    AddP("三、讲师角色定位");
    AddP("四、模块一至十：详细教学设计");
    AddP("五、附录：课前准备与物料清单");
    AddSpace(2);
    AddInsight("提示：讲师手册包含每个模块的详细时间分配、教学目标、话术示例、互动设计说明和时间控制提示。");
    AddBreakPage();

    // ==================== INSTRUCTOR INFO ====================
    AddSec("一、讲师信息表");
    AddSpace(1);
    AddH2("基本信息");
    var infoTable = CreateTable("项目", "内容");
    AddRow(infoTable, "讲师姓名", "________________");
    AddRow(infoTable, "授课日期", "________________");
    AddRow(infoTable, "授课地点", "________________");
    AddRow(infoTable, "学员人数", "________________");
    FinishTable(infoTable);
    AddSpace(1);
    AddH2("课程基本信息");
    var courseTable = CreateTable("项目", "内容");
    AddRow(courseTable, "课程名称", "业务导向的共创式萃取开发");
    AddRow(courseTable, "副标题", "从经验到方法的课程开发工作坊");
    AddRow(courseTable, "课程版本", "V1.0");
    AddRow(courseTable, "工作坊形式", "行动学习型工作坊 - 3天2夜");
    AddRow(courseTable, "总有效工作时间", "约20小时");
    FinishTable(courseTable);
    AddSpace(1);
    AddBreakPage();

    // ==================== SCHEDULE ====================
    AddSec("二、整体时间安排");
    AddSpace(1);
    AddH2("三天两夜时间总表");
    AddSpace(1);

    AddH3("Day 1（第一天）");
    var day1Table = CreateTable("时间段", "模块", "主题", "时长");
    AddRow(day1Table, "08:30 - 09:00", "-", "报到与准备", "30分钟");
    AddRow(day1Table, "09:00 - 11:00", "模块一", "工作坊启程", "120分钟");
    AddRow(day1Table, "11:00 - 11:15", "-", "茶歇", "15分钟");
    AddRow(day1Table, "11:15 - 13:15", "模块二", "第一炼-炼方向（析目的）", "120分钟");
    AddRow(day1Table, "13:15 - 14:15", "-", "午餐", "60分钟");
    AddRow(day1Table, "14:15 - 15:45", "模块三", "第一炼-炼方向（析任务）", "90分钟");
    AddRow(day1Table, "15:45 - 16:00", "-", "茶歇", "15分钟");
    AddRow(day1Table, "16:00 - 18:00", "模块四", "第二炼-炼内容（萃取）", "120分钟");
    AddRow(day1Table, "18:00 - 19:00", "-", "晚餐", "60分钟");
    AddRow(day1Table, "19:00 - 21:30", "夜间任务", "第一夜：内容获取与建模", "150分钟");
    FinishTable(day1Table);
    AddSpace(1);

    AddH3("Day 2（第二天）");
    var day2Table = CreateTable("时间段", "模块", "主题", "时长");
    AddRow(day2Table, "08:30 - 09:00", "-", "回顾与热身", "30分钟");
    AddRow(day2Table, "09:00 - 11:00", "模块五", "第二炼-炼内容（建模）", "120分钟");
    AddRow(day2Table, "11:00 - 11:15", "-", "茶歇", "15分钟");
    AddRow(day2Table, "11:15 - 13:15", "模块六", "第三炼-炼结构", "120分钟");
    AddRow(day2Table, "13:15 - 14:15", "-", "午餐", "60分钟");
    AddRow(day2Table, "14:15 - 16:15", "模块七", "第三炼-炼结构（教学目标）", "120分钟");
    AddRow(day2Table, "16:15 - 16:30", "-", "茶歇", "15分钟");
    AddRow(day2Table, "16:30 - 18:30", "模块八", "第四炼-炼教学（开场）", "120分钟");
    AddRow(day2Table, "18:30 - 19:30", "-", "晚餐", "60分钟");
    AddRow(day2Table, "19:30 - 21:30", "夜间任务", "第二夜：教学设计与试讲", "120分钟");
    FinishTable(day2Table);
    AddSpace(1);

    AddH3("Day 3（第三天）");
    var day3Table = CreateTable("时间段", "模块", "主题", "时长");
    AddRow(day3Table, "08:30 - 09:00", "-", "回顾与热身", "30分钟");
    AddRow(day3Table, "09:00 - 11:00", "模块九", "第四炼-炼教学（结尾）", "120分钟");
    AddRow(day3Table, "11:00 - 11:15", "-", "茶歇", "15分钟");
    AddRow(day3Table, "11:15 - 13:15", "模块十", "综合呈现与复盘", "120分钟");
    AddRow(day3Table, "13:15 - 14:15", "-", "午餐", "60分钟");
    AddRow(day3Table, "14:15 - 16:15", "成果发表", "课程开发文件展示", "120分钟");
    AddRow(day3Table, "16:15 - 16:30", "-", "茶歇", "15分钟");
    AddRow(day3Table, "16:30 - 17:30", "闭幕", "总结与结业", "60分钟");
    FinishTable(day3Table);
    AddSpace(1);
    AddBreakPage();

    // ==================== INSTRUCTOR ROLE ====================
    AddSec("三、讲师角色定位");
    AddSpace(1);
    AddH2("讲师核心定位：流程建筑师 + 进度管理者");
    AddSpace(1);
    AddP("讲师在本工作坊中扮演的双重角色：");
    AddSpace(1);
    AddP("1. 流程建筑师");
    AddP("   - 设计并确保每个环节的逻辑连贯");
    AddP("   - 搭建学员共创的框架与边界");
    AddP("   - 造就安全的创作环境");
    AddSpace(1);
    AddP("2. 进度管理者");
    AddP("   - 监控时间，确保按时完成各阶段任务");
    AddP("   - 识别进度滞后风险，及时调整");
    AddP("   - 确保三天结束时每位学员都有可展示的课程开发文件");
    AddSpace(1);

    AddH2("讲师「不是」什么");
    var notTable = CreateTable("讲师不是", "说明");
    AddRow(notTable, "内容专家", "不提供专业内容，内容来自学员共创");
    AddRow(notTable, "标准答案", "不给出'最好'的设计，鼓励多元探索");
    AddRow(notTable, "知识灌输者", "不做单向讲授，推动互动与体验");
    FinishTable(notTable);
    AddSpace(1);

    AddH2("三天结束的评估标准");
    AddP("核心指标：每位学员的课程开发文件完成质量");
    AddSpace(1);
    var evalTable = CreateTable("维度", "标准");
    AddRow(evalTable, "有用", "课程目标清晰，对目标受众有价值");
    AddRow(evalTable, "有料", "内容经过萃取，有实际案例支撑");
    AddRow(evalTable, "有序", "结构合理，教学逻辑清晰");
    AddRow(evalTable, "有趣", "教学活动设计能激发学习动机");
    FinishTable(evalTable);
    AddSpace(1);
    AddBreakPage();

    // ==================== MODULE 1 ====================
    AddSec("四、模块一：工作坊启程");
    AddSpace(1);

    AddH2("时间分配表");
    var m1Table = CreateTable("环节", "时长", "累计");
    AddRow(m1Table, "开场与欢迎", "15分钟", "15分钟");
    AddRow(m1Table, "课程整体介绍", "20分钟", "35分钟");
    AddRow(m1Table, "学员破冰与期待澄清", "25分钟", "60分钟");
    AddRow(m1Table, "四炼模型概述", "20分钟", "80分钟");
    AddRow(m1Table, "小组建设与规则约定", "20分钟", "100分钟");
    AddRow(m1Table, "导入林工案例", "10分钟", "110分钟");
    AddRow(m1Table, "本模块小结与过渡", "10分钟", "120分钟");
    FinishTable(m1Table);
    AddSpace(1);

    AddH2("教学目标");
    AddP("完成本模块后，学员能够：");
    AddP("1. 理解「四有」课程质量标准（有用/有料/有序/有趣）");
    AddP("2. 描述「四炼模型」的开发流程框架");
    AddP("3. 明确三天工作坊的学习目标与自己的课程开发主题");
    AddP("4. 建立有效的学习小组，明确协作规则");
    AddP("5. 了解林工案例作为贯穿全程的学习参照");
    AddSpace(1);

    AddH2("核心内容框架");
    AddP("模块一：工作坊启程");
    AddP("|—— 开场与欢迎（15分钟）");
    AddP("|—— 课程整体介绍（20分钟）");
    AddP("|—— 学员破冰与期待澄清（25分钟）");
    AddP("|—— 四炼模型概述（20分钟）");
    AddP("|—— 小组建设与规则约定（20分钟）");
    AddP("|—— 导入林工案例（10分钟）");
    AddP("|—— 本模块小结与过渡（10分钟）");
    AddSpace(1);

    AddH2("讲师开场白示例");
    AddQuote("各位伙伴，大家早上好！欢迎来到『业务导向的共创式萃取开发』工作坊。");
    AddQuote("我是今天的讲师[姓名]，在接下来的三天两夜里，我们将一起完成一段特别的旅程——把藏在专家脑子里的经验，炼成组织可以复用的课程资产。");
    AddQuote("这不是一场普通的培训，而是一次高强度的行动学习工作坊。你们不只是来「听」的，更是来「做」的。三天后，你们每个人都将带着自己开发的课程离开。");
    AddSpace(1);

    AddH2("互动环节：学员破冰与期待澄清");
    AddTime("25分钟");
    AddP("目的：让学员相互认识，明确三天学习目标");
    AddP("物料：彩色便笺纸（每组3种颜色）、大白纸");
    AddP("流程：");
    AddP("1. 个人思考：3分钟 — 请思考：你来参加这次工作坊，最想解决的一个课程开发问题是什么？");
    AddP("2. 个人书写：5分钟 — 在便笺纸上写下：①你的姓名 ②你的岗位/角色 ③你最想开发的一门课 ④你对三天学习的期待");
    AddP("3. 两人分享：10分钟 — 请找到你旁边的伙伴，用2分钟介绍一下你自己和你的期待");
    AddP("4. 小组汇总：7分钟 — 各组把便笺贴在大白纸上，形成小组的『期待墙』");
    AddSpace(1);
    AddInsight("引导话术：「不用写得很完美，这只是你的初步想法。三天后我们再看，可能会有不同的答案。」");
    AddSpace(1);

    AddH2("时间控制提示");
    var timeTable = CreateTable("环节", "时间红线", "预警信号", "调整策略");
    AddRow(timeTable, "开场与欢迎", "15分钟", "超过12分钟", "直接进入下一环节");
    AddRow(timeTable, "课程整体介绍", "20分钟", "超过18分钟", "减少例子，直接过渡");
    AddRow(timeTable, "破冰环节", "25分钟", "超过22分钟", "缩短两人分享时间");
    AddRow(timeTable, "小组建设", "20分钟", "超过18分钟", "规则分享只选2组");
    FinishTable(timeTable);
    AddSpace(1);
    AddBreakPage();

    // ==================== MODULE 2 ====================
    AddSec("五、模块二：第一炼-炼方向（析目的）");
    AddSpace(1);

    AddH2("时间分配表");
    var m2Table = CreateTable("环节", "时长", "累计");
    AddRow(m2Table, "模块导入与目标说明", "10分钟", "10分钟");
    AddRow(m2Table, "5W1S析目的框架讲解", "20分钟", "30分钟");
    AddRow(m2Table, "林工案例示范：析目的", "20分钟", "50分钟");
    AddRow(m2Table, "学员实践：小组研讨自己的课程目的", "40分钟", "90分钟");
    AddRow(m2Table, "小组分享与点评", "25分钟", "115分钟");
    AddRow(m2Table, "本模块小结与过渡", "5分钟", "120分钟");
    FinishTable(m2Table);
    AddSpace(1);

    AddH2("教学目标");
    AddP("完成本模块后，学员能够：");
    AddP("1. 解释「方向不对，内容白废」的原则");
    AddP("2. 运用5W1S框架分析课程目的");
    AddP("3. 为自己的课程开发主题撰写规范的「课程目的陈述」");
    AddP("4. 识别林工案例中「设备异常快速响应」课程的5W1S要素");
    AddSpace(1);

    AddH2("5W1S框架讲解");
    AddP("我来介绍一个特别实用的工具——5W1S析目的框架。");
    AddSpace(1);
    AddP("What（是什么）：这门课要解决的具体问题是什么？");
    AddP("Why（为什么）：为什么要解决这个问题？不解决会有什么后果？");
    AddP("Who（谁）：目标学员是谁？他们的现有水平如何？");
    AddP("Where（在哪）：课程在什么场景使用？");
    AddP("When（何时）：什么时候学？学完什么时候用？");
    AddP("How（如何）：学员学完后，用什么标准衡量他们『学会了』？");
    AddSpace(1);
    AddQuote("六个问题回答完，你对这门课的方向就非常清晰了。");
    AddSpace(1);

    AddH2("互动环节：林工案例示范");
    AddTime("20分钟");
    AddP("目的：现场演示完整的5W1S分析过程");
    AddP("讲师动作：在白板上画出5W1S框架表，边讲边填");
    AddSpace(1);
    AddQuote("「让我们用林工的例子来走一遍。林建峰是设备管理高级工程师，他要开发一门『设备异常快速响应』课程。");
    AddQuote("What：设备发生异常时，工程师不能快速判断问题根因，导致停机时间过长。");
    AddQuote("Why：根据统计，每次异常停机平均损失XX万元，而快速响应可以把时间缩短XX%。");
    AddQuote("Who：设备工程师，3年以上经验，有基本维修技能，但缺乏系统的问题分析思路。");
    AddQuote("Where：在设备现场，或者模拟设备现场。");
    AddQuote("When：设备异常发生后『那一刻』。学员需要『即时』调用。");
    AddQuote("How：学完后，学员能在5分钟内完成异常识别→初步判断→快速处理的标准流程。」");
    AddSpace(1);

    AddH2("互动环节：学员实践");
    AddTime("40分钟");
    AddP("目的：学员为自己选定的课程主题应用5W1S框架");
    AddP("物料：5W1S分析表（每组4份）、马克笔");
    AddSpace(1);
    AddInsight("引导话术：「每轮分享给5分钟，组员要做『提问者』而不是『建议者』。多问『为什么』，少说『你应该』。」");
    AddSpace(1);

    AddH2("学员常见问题与应答（FAQ）");
    var faqTable = CreateTable("问题", "应答");
    AddRow(faqTable, "Q：5W1S是否每门课都要写得很完整？", "A：不需要。你可以根据课程特点增减。比如内部简单分享会，可能只需要What+Who+How就够了。");
    AddRow(faqTable, "Q：How里的转化标准定得太高或太低怎么办？", "A：太高：学员达不到，会放弃。太低：学员觉得没意思。标准应该是『跳一跳够得着』。");
    AddRow(faqTable, "Q：有些课程是『软技能』，不好量化怎么办？", "A：软技能用『行为锚定』来定标准。比如沟通技巧，不说『提高沟通能力』，而说『能在一对一谈话中3分钟内明确表达自己的核心请求』。");
    FinishTable(faqTable);
    AddSpace(1);
    AddBreakPage();

    // ==================== NIGHT TASKS ====================
    AddSec("六、夜间任务设计");
    AddSpace(1);

    AddH2("第一夜任务说明");
    AddSpace(1);
    AddP("任务背景：Day 1晚间，学员需要趁热打铁，将白天学习的『炼方向』工具应用到自己的课程主题上，并为Day 2的『炼内容』环节做好准备。");
    AddSpace(1);

    AddH2("任务内容");
    var night1Table = CreateTable("任务", "具体要求", "产出物");
    AddRow(night1Table, "任务一", "完善自己的5W1S课程目的分析", "完整的5W1S分析表");
    AddRow(night1Table, "任务二", "完成自己的LPRA任务分析", "完整的LPRA分析表");
    AddRow(night1Table, "任务三", "思考：我的课程「最核心的一个经验」是什么？先写出来", "3-5条『经验陈述』");
    FinishTable(night1Table);
    AddSpace(1);

    AddH2("时间安排");
    var night1TimeTable = CreateTable("时段", "内容");
    AddRow(night1TimeTable, "19:00 - 19:30", "个人完成5W1S和LPRA的最终版");
    AddRow(night1TimeTable, "19:30 - 20:30", "小组交流：每人在组内分享自己的5W1S+LPRA，其他成员提出问题和建议");
    AddRow(night1TimeTable, "20:30 - 21:00", "个人完成「最核心经验」的初步提炼");
    AddRow(night1TimeTable, "21:00 - 21:30", "小组长收集组员问题，提交给讲师（可选）");
    FinishTable(night1TimeTable);
    AddSpace(1);

    AddH2("第二夜任务说明");
    AddSpace(1);
    AddP("任务背景：Day 2晚间，学员需要完成教学设计（开场和结尾部分），并为Day 3的综合呈现做准备。");
    AddSpace(1);

    var night2Table = CreateTable("任务", "具体要求", "产出物");
    AddRow(night2Table, "任务一", "设计自己课程的『ADMO开场』方案", "开场设计稿");
    AddRow(night2Table, "任务二", "设计自己课程的『ESA结尾』方案", "结尾设计稿");
    AddRow(night2Table, "任务三", "准备3分钟课程介绍（用于Day 3展示）", "介绍文字稿和PPT（可选）");
    FinishTable(night2Table);
    AddSpace(1);
    AddBreakPage();

    // ==================== APPENDIX ====================
    AddSec("七、附录：课前准备与物料清单");
    AddSpace(1);

    AddH2("场地布置要求");
    var venueTable = CreateTable("项目", "标准", "确认");
    AddRow(venueTable, "席位安排", "每组4-6人，围桌或U形", "[ ]");
    AddRow(venueTable, "白板/大白纸架", "每组1个，位置可见", "[ ]");
    AddRow(venueTable, "投影设备", "正常播放，测试完成", "[ ]");
    AddRow(venueTable, "音响设备", "正常，备用电池准备", "[ ]");
    AddRow(venueTable, "空调/温度", "22-24℃，可调节", "[ ]");
    AddRow(venueTable, "茶水间", "茶歇物资充裕", "[ ]");
    FinishTable(venueTable);
    AddSpace(1);

    AddH2("每组配备清单");
    var materialTable = CreateTable("物料", "数量", "确认");
    AddRow(materialTable, "大白纸", "10张", "[ ]");
    AddRow(materialTable, "彩色马克笔", "6色x2套", "[ ]");
    AddRow(materialTable, "便利贴", "3色x各50张", "[ ]");
    AddRow(materialTable, "铅笔/圆珠笔", "每组6支", "[ ]");
    AddRow(materialTable, "5W1S分析表", "每组10份", "[ ]");
    AddRow(materialTable, "LPRA分析表", "每组10份", "[ ]");
    AddRow(materialTable, "PSTT萃取表", "每组10份", "[ ]");
    AddRow(materialTable, "小组名牌", "每组1个", "[ ]");
    FinishTable(materialTable);
    AddSpace(1);

    AddH2("版权声明");
    AddQuote("本手册（包括但不限于文字、内容、图表、流程、话术、模板）版权归课程开发团队所有。");
    AddQuote("未经书面授权，任何人不得以任何形式进行复制、传播、出版或修改本手册内容。");
    AddSpace(1);

    // Page setup
    body.Append(new SectionProperties(
        new PageSize { Width = 11906, Height = 16838 },
        new PageMargin { Top = 1440, Right = 1440, Bottom = 1440, Left = 1440, Header = 720, Footer = 720 }
    ));

    mainPart.Document.Save();
    Console.WriteLine("Instructor handbook created: " + outputPath);
}

Console.WriteLine("Done!");
