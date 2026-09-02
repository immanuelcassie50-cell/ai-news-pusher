#r "nuget: DocumentFormat.OpenXml, 3.2.0"

using DocumentFormat.OpenXml;
using DocumentFormat.OpenXml.Packaging;
using DocumentFormat.OpenXml.Wordprocessing;

// 配色
const string PRIMARY = "C00000";
const string SECONDARY = "4A4A4A";
const string ACCENT = "B31F28";
const string LIGHT = "D4D4D4";
const string WHITE = "FFFFFF";
const string HEADER_BG = "1F3864";
const string GOLD = "D4A574";
const string LIGHT_GREEN = "E8F5E9";
const string LIGHT_ORANGE = "FFF3E0";
const string LIGHT_BLUE = "E8F0FE";
const string LIGHT_RED = "FFEBEE";

// ============================================================
void CreateInstructorHandbook(string outputPath) {
    using var doc = WordprocessingDocument.Create(outputPath, WordprocessingDocumentType.Document);
    var mainPart = doc.AddMainDocumentPart();
    mainPart.Document = new Document(new Body());
    var body = mainPart.Document.Body!;

    // 样式
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

    // 辅助函数
    Action<string> H1 = (t) => body.Append(new Paragraph(new ParagraphProperties(new ParagraphStyleId { Val = "Heading1" }), new Run(new Text(t))));
    Action<string> H2 = (t) => body.Append(new Paragraph(new ParagraphProperties(new ParagraphStyleId { Val = "Heading2" }), new Run(new Text(t)))));
    Action<string> H3 = (t) => body.Append(new Paragraph(new ParagraphProperties(new ParagraphStyleId { Val = "Heading3" }), new Run(new Text(t)))));
    Action<string> Sec = (t) => body.Append(new Paragraph(new ParagraphProperties(new ParagraphStyleId { Val = "SectionTitle" }), new Run(new Text(t)))));
    Action<string> P = (t) => body.Append(new Paragraph(new ParagraphProperties(new ParagraphStyleId { Val = "BodyText" }), new Run(new Text(t)))));
    Action<string> Tip = (t) => body.Append(new Paragraph(new ParagraphProperties(new ParagraphStyleId { Val = "TipBox" }), new Run(new Text("TIP: " + t)))));
    Action<string> Insight = (t) => body.Append(new Paragraph(new ParagraphProperties(new ParagraphStyleId { Val = "InsightBox" }), new Run(new Text("INSIGHT: " + t)))));
    Action<string> Quote = (t) => body.Append(new Paragraph(new ParagraphProperties(new ParagraphStyleId { Val = "QuoteBox" }), new Run(new Text(t)))));
    Action<string> Time = (t) => body.Append(new Paragraph(new ParagraphProperties(new ParagraphStyleId { Val = "TimeNote" }), new Run(new Text("TIME: " + t)))));
    Action<int> Space = (c) => { for (int i = 0; i < c; i++) body.Append(new Paragraph()); };
    Action BreakPage = () => body.Append(new Paragraph(new Run(new Break { Type = BreakValues.Page })));

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

    // 样式定义
    AddStyle(styles, "TitleCover", "TitleCover", (p) => {
        p.Append(new StyleParagraphProperties(
            new Justification { Val = JustificationValues.Center },
            new SpacingBetweenLines { Before = "800", After = "200" }
        ));
    }, (r) => {
        r.Append(new Bold(), new FontSize { Val = "56" }, new Color { Val = PRIMARY });
    });

    AddStyle(styles, "TitleMain", "TitleMain", (p) => {
        p.Append(new StyleParagraphProperties(
            new Justification { Val = JustificationValues.Center },
            new SpacingBetweenLines { After = "0" }
        ));
    }, (r) => {
        r.Append(new Bold(), new FontSize { Val = "44" }, new Color { Val = PRIMARY });
    });

    AddStyle(styles, "Heading1", "Heading 1", (p) => {
        p.Append(new StyleParagraphProperties(
            new SpacingBetweenLines { Before = "480", After = "240" },
            new KeepNext(),
            new OutlineLevel { Val = 0 },
            new Shading { Fill = PRIMARY }
        ));
    }, (r) => {
        r.Append(new Bold(), new FontSize { Val = "36" }, new Color { Val = WHITE });
    });

    AddStyle(styles, "Heading2", "Heading 2", (p) => {
        p.Append(new StyleParagraphProperties(
            new SpacingBetweenLines { Before = "360", After = "120" },
            new KeepNext(),
            new OutlineLevel { Val = 1 }
        ));
    }, (r) => {
        r.Append(new Bold(), new FontSize { Val = "28" }, new Color { Val = HEADER_BG });
    });

    AddStyle(styles, "Heading3", "Heading 3", (p) => {
        p.Append(new StyleParagraphProperties(
            new SpacingBetweenLines { Before = "240", After = "120" },
            new KeepNext(),
            new OutlineLevel { Val = 2 }
        ));
    }, (r) => {
        r.Append(new Bold(), new FontSize { Val = "24" }, new Color { Val = ACCENT });
    });

    AddStyle(styles, "BodyText", "BodyText", (p) => {
        p.Append(new StyleParagraphProperties(new SpacingBetweenLines { After = "120" }));
    }, (r) => {
        r.Append(new FontSize { Val = "21" }, new Color { Val = SECONDARY });
    });

    AddStyle(styles, "SectionTitle", "SectionTitle", (p) => {
        p.Append(new StyleParagraphProperties(
            new SpacingBetweenLines { Before = "480", After = "200" },
            new KeepNext(),
            new OutlineLevel { Val = 0 }
        ));
    }, (r) => {
        r.Append(new Bold(), new FontSize { Val = "32" }, new Color { Val = PRIMARY });
    });

    AddStyle(styles, "TipBox", "TipBox", (p) => {
        p.Append(new StyleParagraphProperties(
            new SpacingBetweenLines { Before = "120", After = "120" },
            new Shading { Fill = LIGHT_GREEN },
            new ParagraphBorders(new LeftBorder { Val = BorderValues.Single, Size = 24, Color = "2E7D32" })
        ));
    }, (r) => { r.Append(new FontSize { Val = "21" }); });

    AddStyle(styles, "InsightBox", "InsightBox", (p) => {
        p.Append(new StyleParagraphProperties(
            new SpacingBetweenLines { Before = "120", After = "120" },
            new Shading { Fill = LIGHT_ORANGE },
            new ParagraphBorders(new LeftBorder { Val = BorderValues.Single, Size = 24, Color = "E65100" })
        ));
    }, (r) => { r.Append(new FontSize { Val = "21" }); });

    AddStyle(styles, "QuoteBox", "QuoteBox", (p) => {
        p.Append(new StyleParagraphProperties(
            new Justification { Val = JustificationValues.Center },
            new SpacingBetweenLines { Before = "240", After = "240" },
            new ParagraphBorders(new LeftBorder { Val = BorderValues.Single, Size = 24, Color = HEADER_BG }),
            new Indentation { Left = "720", Right = "720" }
        ));
    }, (r) => {
        r.Append(new Italic(), new FontSize { Val = "22" }, new Color { Val = SECONDARY });
    });

    AddStyle(styles, "TimeNote", "TimeNote", (p) => {
        p.Append(new StyleParagraphProperties(
            new SpacingBetweenLines { Before = "60", After = "60" },
            new Shading { Fill = LIGHT_BLUE }
        ));
    }, (r) => {
        r.Append(new FontSize { Val = "20" }, new Color { Val = HEADER_BG });
    });

    // ==================== 封面 ====================
    Space(4);
    body.Append(new Paragraph(new ParagraphProperties(new ParagraphStyleId { Val = "TitleCover" }), new Run(new Text("业务导向的共创式萃取开发"))));
    Space(1);
    body.Append(new Paragraph(new ParagraphProperties(new ParagraphStyleId { Val = "TitleMain" }), new Run(new Text("从经验到方法的课程开发工作坊"))));
    Space(2);
    P("讲师手册");
    Space(4);

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

    Space(3);
    P("讲师姓名：____________________　　日期：____________________");
    Space(2);
    Quote("把活在专家脑子里的经验，炼成组织可以复用的课程资产。");
    BreakPage();

    // ==================== 目录 ====================
    Sec("目 录");
    Space(1);
    P("一、讲师信息表");
    P("二、整体时间安排");
    P("三、讲师角色定位");
    P("四、模块一至十：详细教学设计");
    P("五、附录：课前准备与物料清单");
    Space(2);
    Insight("提示：讲师手册包含每个模块的详细时间分配、教学目标、话术示例、互动设计说明和时间控制提示。");
    BreakPage();

    // ==================== 讲师信息表 ====================
    Sec("一、讲师信息表");
    Space(1);
    H2("基本信息");
    var infoTable = CreateTable("项目", "内容");
    AddRow(infoTable, "讲师姓名", "________________");
    AddRow(infoTable, "授课日期", "________________");
    AddRow(infoTable, "授课地点", "________________");
    AddRow(infoTable, "学员人数", "________________");
    FinishTable(infoTable);
    Space(1);
    H2("课程基本信息");
    var courseTable = CreateTable("项目", "内容");
    AddRow(courseTable, "课程名称", "业务导向的共创式萃取开发");
    AddRow(courseTable, "副标题", "从经验到方法的课程开发工作坊");
    AddRow(courseTable, "课程版本", "V1.0");
    AddRow(courseTable, "工作坊形式", "行动学习型工作坊 - 3天2夜");
    AddRow(courseTable, "总有效工作时间", "约20小时");
    FinishTable(courseTable);
    Space(1);
    BreakPage();

    // ==================== 整体时间安排 ====================
    Sec("二、整体时间安排");
    Space(1);
    H2("三天两夜时间总表");
    Space(1);

    H3("Day 1（第一天）");
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
    AddRow(day1Table, "19:00 - 21:30", "夜间任务", "第一夜：内容萃取与建模", "150分钟");
    FinishTable(day1Table);
    Space(1);

    H3("Day 2（第二天）");
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
    Space(1);

    H3("Day 3（第三天）");
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
    Space(1);
    BreakPage();

    // ==================== 讲师角色定位 ====================
    Sec("三、讲师角色定位");
    Space(1);
    H2("讲师核心定位：流程建筑师 + 进度管理者");
    Space(1);
    P("讲师在本工作坊中扮演的双重角色：");
    Space(1);
    P("1. 流程建筑师");
    P("   - 设计并确保每个环节的逻辑连贯");
    P("   - 搭建学员共创的框架与边界");
    P("   - 营造安全的创作环境");
    Space(1);
    P("2. 进度管理者");
    P("   - 监控时间，确保按时完成各阶段任务");
    P("   - 识别进度滞后风险，及时调整");
    P("   - 确保三天结束时每位学员都有可展示的课程开发文件");
    Space(1);

    H2("讲师「不是」什么");
    var notTable = CreateTable("讲师不是", "说明");
    AddRow(notTable, "内容专家", "不提供专业内容，内容来自学员共创");
    AddRow(notTable, "标准答案", "不给出"最好"的设计，鼓励多元探索");
    AddRow(notTable, "知识灌输者", "不做单向讲授，推动互动与体验");
    FinishTable(notTable);
    Space(1);

    H2("三天结束的评估标准");
    P("核心指标：每位学员的课程开发文件完成质量");
    Space(1);
    var evalTable = CreateTable("维度", "标准");
    AddRow(evalTable, "有用", "课程目标清晰，对目标受众有价值");
    AddRow(evalTable, "有料", "内容经过萃取，有实际案例支撑");
    AddRow(evalTable, "有序", "结构合理，教学逻辑清晰");
    AddRow(evalTable, "有趣", "教学活动设计能激发学习动机");
    FinishTable(evalTable);
    Space(1);
    BreakPage();

    // ==================== 模块一 ====================
    Sec("四、模块一：工作坊启程");
    Space(1);

    H2("时间分配表");
    var m1Table = CreateTable("环节", "时长", "累计");
    AddRow(m1Table, "开场与欢迎", "15分钟", "15分钟");
    AddRow(m1Table, "课程整体介绍", "20分钟", "35分钟");
    AddRow(m1Table, "学员破冰与期待澄清", "25分钟", "60分钟");
    AddRow(m1Table, "四炼模型概述", "20分钟", "80分钟");
    AddRow(m1Table, "小组建设与规则约定", "20分钟", "100分钟");
    AddRow(m1Table, "导入林工案例", "10分钟", "110分钟");
    AddRow(m1Table, "本模块小结与过渡", "10分钟", "120分钟");
    FinishTable(m1Table);
    Space(1);

    H2("教学目标");
    P("完成本模块后，学员能够：");
    P("1. 理解「四有」课程质量标准（有用/有料/有序/有趣）");
    P("2. 描述「四炼模型」的开发流程框架");
    P("3. 明确三天工作坊的学习目标与自己的课程开发主题");
    P("4. 建立有效的学习小组，明确协作规则");
    P("5. 了解林工案例作为贯穿全程的学习参照");
    Space(1);

    H2("核心内容框架");
    P("模块一：工作坊启程");
    P("├── 开场与欢迎（15分钟）");
    P("│   └── 讲师自我介绍、课程背景");
    P("├── 课程整体介绍（20分钟）");
    P("│   ├── 课程定位：从经验到方法");
    P("│   ├── 「四有」质量标准");
    P("│   └── 三天两夜学习路径");
    P("├── 学员破冰与期待澄清（25分钟）");
    P("│   ├── 自我介绍与学习期待");
    P("│   └── 课程开发主题初步定位");
    P("├── 四炼模型概述（20分钟）");
    P("│   ├── 第一炼：炼方向（有用）");
    P("│   ├── 第二炼：炼内容（有料）");
    P("│   ├── 第三炼：炼结构（有序）");
    P("│   └── 第四炼：炼教学（有趣）");
    P("├── 小组建设与规则约定（20分钟）");
    P("│   ├── 4-6人小组组建");
    P("│   └── 协作规则与沟通约定");
    P("├── 导入林工案例（10分钟）");
    P("│   └── 引出贯穿案例");
    P("└── 本模块小结与过渡（10分钟）");
    Space(1);

    H2("讲师开场白示例");
    Quote("各位伙伴，大家早上好！欢迎来到『业务导向的共创式萃取开发』工作坊。");
    Quote("我是今天的讲师[姓名]，在接下来的三天两夜里，我们将一起完成一段特别的旅程——把藏在专家脑子里的经验，炼成组织可以复用的课程资产。");
    Quote("这不是一场普通的培训，而是一次高强度的行动学习工作坊。你们不只是来『听』的，更是来『做』的。三天后，你们每个人都将带着自己开发的课程离开。");
    Space(1);

    H2("互动环节：学员破冰与期待澄清");
    Time("25分钟");
    P("目的：让学员相互认识，明确三天学习目标");
    P("物料：彩色便签纸（每组3种颜色）、大白纸");
    P("流程：");
    P("1. 个人思考：3分钟 — 请思考：你来参加这次工作坊，最想解决的一个课程开发问题是什么？");
    P("2. 个人书写：5分钟 — 在便签纸上写下：①你的姓名 ②你的岗位/角色 ③你最想开发的一门课 ④你对三天学习的期待");
    P("3. 两人分享：10分钟 — 请找到你旁边的伙伴，用2分钟介绍一下你自己和你的期待");
    P("4. 小组汇总：7分钟 — 各组把便签贴在大白纸上，形成小组的『期待墙』");
    Space(1);
    Insight("引导话术：「不用写得很完美，这只是你的初步想法。三天后我们再看，可能会有不同的答案。」");
    Space(1);

    H2("时间控制提示");
    var timeTable = CreateTable("环节", "时间红线", "预警信号", "调整策略");
    AddRow(timeTable, "开场与欢迎", "15分钟", "超过12分钟", "直接进入下一环节");
    AddRow(timeTable, "课程整体介绍", "20分钟", "超过18分钟", "减少举例，直接过渡");
    AddRow(timeTable, "破冰环节", "25分钟", "超过22分钟", "缩短两人分享时间");
    AddRow(timeTable, "小组建设", "20分钟", "超过18分钟", "规则分享只选2组");
    FinishTable(timeTable);
    Space(1);
    BreakPage();

    // ==================== 模块二 ====================
    Sec("五、模块二：第一炼-炼方向（析目的）");
    Space(1);

    H2("时间分配表");
    var m2Table = CreateTable("环节", "时长", "累计");
    AddRow(m2Table, "模块导入与目标说明", "10分钟", "10分钟");
    AddRow(m2Table, "5W1S析目的框架讲解", "20分钟", "30分钟");
    AddRow(m2Table, "林工案例示范：析目的", "20分钟", "50分钟");
    AddRow(m2Table, "学员实践：小组研讨自己的课程目的", "40分钟", "90分钟");
    AddRow(m2Table, "小组分享与点评", "25分钟", "115分钟");
    AddRow(m2Table, "本模块小结与过渡", "5分钟", "120分钟");
    FinishTable(m2Table);
    Space(1);

    H2("教学目标");
    P("完成本模块后，学员能够：");
    P("1. 解释「方向不对，内容白废」的原则");
    P("2. 运用5W1S框架分析课程目的");
    P("3. 为自己的课程开发主题撰写规范的「课程目的陈述」");
    P("4. 识别林工案例中「设备异常快速响应」课程的5W1S要素");
    Space(1);

    H2("5W1S框架讲解");
    P("我来介绍一个特别实用的工具——5W1S析目的框架。");
    Space(1);
    P("What（是什么）：这门课要解决的具体问题是什么？");
    P("Why（为什么）：为什么要解决这个问题？不解决会有什么后果？");
    P("Who（谁）：目标学员是谁？他们的现有水平如何？");
    P("Where（在哪）：课程在什么场景使用？");
    P("When（何时）：什么时候学？学完什么时候用？");
    P("How（如何）：学员学完后，用什么标准衡量他们『学会了』？");
    Space(1);
    Quote("六个问题回答完，你对这门课的方向就非常清晰了。");
    Space(1);

    H2("互动环节：林工案例示范");
    Time("20分钟");
    P("目的：现场演示完整的5W1S分析过程");
    P("讲师动作：在白板上画出5W1S框架表，边讲边填");
    Space(1);
    Quote("「让我们用林工的例子来走一遍。林建峰是设备管理高级工程师，他要开发一门『设备异常快速响应』课程。");
    Quote("What：设备发生异常时，工程师不能快速判断问题根因，导致停机时间过长。");
    Quote("Why：根据统计，每次异常停机平均损失XX万元，而快速响应可以把时间缩短XX%。");
    Quote("Who：设备工程师，3年以上经验，有基本维修技能，但缺乏系统的问题分析思路。");
    Quote("Where：在设备现场，或者模拟设备现场。");
    Quote("When：设备异常发生后『那一刻』。学员需要『即时』调用。");
    Quote("How：学完后，学员能在5分钟内完成异常识别→初步判断→快速处理的标准流程。」");
    Space(1);

    H2("互动环节：学员实践");
    Time("40分钟");
    P("目的：学员为自己选定的课程主题应用5W1S框架");
    P("物料：5W1S分析表（每组2份）、马克笔");
    Space(1);
    Insight("引导话术：「每轮分享给5分钟，组员要做『提问者』而不是『建议者』。多问『为什么』，少说『你应该』。」");
    Space(1);

    H2("学员常见问题与应答（FAQ）");
    var faqTable = CreateTable("问题", "应答");
    AddRow(faqTable, "Q：5W1S是不是每门课都要写得很完整？", "A：不需要。你可以根据课程特点增减。比如内部简单分享会，可能只需要What+Who+How就够了。");
    AddRow(faqTable, "Q：How里的转化标准定得太高或太低怎么办？", "A：太高：学员达不到，会放弃。太低：学员觉得没意思。标准应该是『跳一跳够得着』。");
    AddRow(faqTable, "Q：有些课程是『软技能』，不好量化怎么办？", "A：软技能用『行为锚定』来定标准。比如沟通技巧，不说『提高沟通能力』，而说『能在一对一谈话中3分钟内明确表达自己的核心诉求』。");
    FinishTable(faqTable);
    Space(1);
    BreakPage();

    // ==================== 夜间工作 ====================
    Sec("六、夜间工作设计");
    Space(1);

    H2("第一夜任务说明");
    Space(1);
    P("任务背景：Day 1晚间，学员需要趁热打铁，将白天学习的「炼方向」工具应用到自己的课程主题上，并为Day 2的「炼内容」环节做好准备。");
    Space(1);

    H2("任务内容");
    var night1Table = CreateTable("任务", "具体要求", "产出物");
    AddRow(night1Table, "任务一", "完善自己的5W1S课程目的分析", "完整的5W1S分析表");
    AddRow(night1Table, "任务二", "完成自己的LPRA任务分析", "完整的LPRA分析表");
    AddRow(night1Table, "任务三", "思考：我的课程「最核心的一个经验」是什么？先写出来", "3-5条「经验陈述」");
    FinishTable(night1Table);
    Space(1);

    H2("时间安排");
    var night1TimeTable = CreateTable("时段", "内容");
    AddRow(night1TimeTable, "19:00 - 19:30", "个人完成5W1S和LPRA的最终版");
    AddRow(night1TimeTable, "19:30 - 20:30", "小组交流：每人在组内分享自己的5W1S+LPRA，其他成员提出问题和建议");
    AddRow(night1TimeTable, "20:30 - 21:00", "个人完成「最核心经验」的初步提炼");
    AddRow(night1TimeTable, "21:00 - 21:30", "小组长收集组员问题，提交给讲师（可选）");
    FinishTable(night1TimeTable);
    Space(1);

    H2("第二夜任务说明");
    Space(1);
    P("任务背景：Day 2晚间，学员需要完成教学设计（开场和结尾部分），并为Day 3的综合呈现做准备。");
    Space(1);

    var night2Table = CreateTable("任务", "具体要求", "产出物");
    AddRow(night2Table, "任务一", "设计自己课程的「ADMO开场」方案", "开场设计稿");
    AddRow(night2Table, "任务二", "设计自己课程的「ESA结尾」方案", "结尾设计稿");
    AddRow(night2Table, "任务三", "准备3分钟课程介绍（用于Day 3展示）", "介绍文字稿和PPT（可选）");
    FinishTable(night2Table);
    Space(1);
    BreakPage();

    // ==================== 附录 ====================
    Sec("七、附录：课前准备与物料清单");
    Space(1);

    H2("场地布置要求");
    var venueTable = CreateTable("项目", "标准", "确认");
    AddRow(venueTable, "座位安排", "每组4-6人，围桌或U形", "[ ]");
    AddRow(venueTable, "白板/大白纸架", "每组1个，位置可见", "[ ]");
    AddRow(venueTable, "投影设备", "正常播放，测试完毕", "[ ]");
    AddRow(venueTable, "音响设备", "正常，备用电池准备", "[ ]");
    AddRow(venueTable, "空调/温度", "22-24℃，可调节", "[ ]");
    AddRow(venueTable, "茶水间", "茶歇物资充足", "[ ]");
    FinishTable(venueTable);
    Space(1);

    H2("每组配备清单");
    var materialTable = CreateTable("物料", "数量", "确认");
    AddRow(materialTable, "大白纸", "10张", "[ ]");
    AddRow(materialTable, "彩色马克笔", "6色×2套", "[ ]");
    AddRow(materialTable, "便利贴", "3色×各50张", "[ ]");
    AddRow(materialTable, "铅笔/圆珠笔", "每组6支", "[ ]");
    AddRow(materialTable, "5W1S分析表", "每组10份", "[ ]");
    AddRow(materialTable, "LPRA分析表", "每组10份", "[ ]");
    AddRow(materialTable, "PSTT萃取表", "每组10份", "[ ]");
    AddRow(materialTable, "小组名牌", "每组1个", "[ ]");
    FinishTable(materialTable);
    Space(1);

    H2("版权声明");
    Quote("本手册（包括但不限于文字、内容、图表、流程、话术、模板）版权归课程开发团队所有。");
    Quote("未经书面授权，任何人不得以任何形式进行复制、传播、出版或修改本手册内容。");
    Space(1);

    // 页面设置
    body.Append(new SectionProperties(
        new PageSize { Width = 11906, Height = 16838 },
        new PageMargin { Top = 1440, Right = 1440, Bottom = 1440, Left = 1440, Header = 720, Footer = 720 }
    ));

    mainPart.Document.Save();
    Console.WriteLine($"Instructor handbook created: {outputPath}");
}

// ============================================================
void AddStyle(Styles styles, string styleId, string name, Action<StyleParagraphProperties> paraProps, Action<StyleRunProperties> runProps) {
    var style = new Style() { Type = StyleValues.Paragraph, StyleId = styleId };
    style.Append(new StyleName { Val = name });
    style.Append(new BasedOn { Val = "Normal" });
    var pPr = new StyleParagraphProperties();
    paraProps(pPr);
    style.Append(pPr);
    var rPr = new StyleRunProperties();
    runProps(rPr);
    style.Append(rPr);
    styles.Append(style);
}

// ============================================================
// 学员手册
// ============================================================
void CreateStudentHandbook(string outputPath) {
    using var doc = WordprocessingDocument.Create(outputPath, WordprocessingDocumentType.Document);
    var mainPart = doc.AddMainDocumentPart();
    mainPart.Document = new Document(new Body());
    var body = mainPart.Document.Body!;

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

    // 辅助函数
    Action<string> Day = (t) => body.Append(new Paragraph(new ParagraphProperties(new ParagraphStyleId { Val = "DayTitle" }), new Run(new Text(t)))));
    Action<string> Mod = (t) => body.Append(new Paragraph(new ParagraphProperties(new ParagraphStyleId { Val = "ModuleTitle" }), new Run(new Text(t)))));
    Action<string> Act = (t) => body.Append(new Paragraph(new ParagraphProperties(new ParagraphStyleId { Val = "ActivityTitle" }), new Run(new Text(t)))));
    Action<string> P = (t) => body.Append(new Paragraph(new ParagraphProperties(new ParagraphStyleId { Val = "BodyText" }), new Run(new Text(t)))));
    Action<string> Field = (t) => body.Append(new Paragraph(new ParagraphProperties(new ParagraphStyleId { Val = "FormField" }), new Run(new Text(t)))));
    Action<string> Reflect = (t) => body.Append(new Paragraph(new ParagraphProperties(new ParagraphStyleId { Val = "ReflectionBox" }), new Run(new Text("REFLECTION: " + t)))));
    Action<string> Night = (t) => body.Append(new Paragraph(new ParagraphProperties(new ParagraphStyleId { Val = "NightTask" }), new Run(new Text("NIGHT TASK: " + t)))));
    Action<string> Tip = (t) => body.Append(new Paragraph(new ParagraphProperties(new ParagraphStyleId { Val = "TipBox" }), new Run(new Text("TIP: " + t)))));
    Action<string> Quote = (t) => body.Append(new Paragraph(new ParagraphProperties(new ParagraphStyleId { Val = "QuoteBox" }), new Run(new Text(t)))));
    Action<int> Space = (c) => { for (int i = 0; i < c; i++) body.Append(new Paragraph()); };
    Action BreakPage = () => body.Append(new Paragraph(new Run(new Break { Type = BreakValues.Page })));

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

    // 样式定义
    AddStyle(styles, "TitleCover", "TitleCover", (p) => {
        p.Append(new StyleParagraphProperties(
            new Justification { Val = JustificationValues.Center },
            new SpacingBetweenLines { Before = "600", After = "200" }
        ));
    }, (r) => { r.Append(new Bold(), new FontSize { Val = "52" }, new Color { Val = PRIMARY }); });

    AddStyle(styles, "TitleMain", "TitleMain", (p) => {
        p.Append(new StyleParagraphProperties(
            new Justification { Val = JustificationValues.Center },
            new SpacingBetweenLines { After = "0" }
        ));
    }, (r) => { r.Append(new Bold(), new FontSize { Val = "40" }, new Color { Val = PRIMARY }); });

    AddStyle(styles, "DayTitle", "DayTitle", (p) => {
        p.Append(new StyleParagraphProperties(
            new SpacingBetweenLines { Before = "600", After = "200" },
            new KeepNext(),
            new Shading { Fill = PRIMARY }
        ));
    }, (r) => { r.Append(new Bold(), new FontSize { Val = "32" }, new Color { Val = WHITE }); });

    AddStyle(styles, "ModuleTitle", "ModuleTitle", (p) => {
        p.Append(new StyleParagraphProperties(
            new SpacingBetweenLines { Before = "400", After = "160" },
            new KeepNext(),
            new OutlineLevel { Val = 0 }
        ));
    }, (r) => { r.Append(new Bold(), new FontSize { Val = "28" }, new Color { Val = HEADER_BG }); });

    AddStyle(styles, "ActivityTitle", "ActivityTitle", (p) => {
        p.Append(new StyleParagraphProperties(
            new SpacingBetweenLines { Before = "280", After = "120" },
            new KeepNext()
        ));
    }, (r) => { r.Append(new Bold(), new FontSize { Val = "24" }, new Color { Val = ACCENT }); });

    AddStyle(styles, "BodyText", "BodyText", (p) => {
        p.Append(new StyleParagraphProperties(new SpacingBetweenLines { After = "120" }));
    }, (r) => { r.Append(new FontSize { Val = "21" }, new Color { Val = SECONDARY }); });

    AddStyle(styles, "FormField", "FormField", (p) => {
        p.Append(new StyleParagraphProperties(
            new SpacingBetweenLines { Before = "60", After = "60" },
            new ParagraphBorders(new BottomBorder { Val = BorderValues.Dotted, Size = 4, Color = "999999" })
        ));
    }, (r) => { r.Append(new FontSize { Val = "21" }); });

    AddStyle(styles, "ReflectionBox", "ReflectionBox", (p) => {
        p.Append(new StyleParagraphProperties(
            new SpacingBetweenLines { Before = "160", After = "160" },
            new Shading { Fill = LIGHT_ORANGE },
            new ParagraphBorders(new LeftBorder { Val = BorderValues.Single, Size = 24, Color = GOLD })
        ));
    }, (r) => { r.Append(new FontSize { Val = "21" }); });

    AddStyle(styles, "NightTask", "NightTask", (p) => {
        p.Append(new StyleParagraphProperties(
            new SpacingBetweenLines { Before = "120", After = "120" },
            new Shading { Fill = LIGHT_BLUE }
        ));
    }, (r) => { r.Append(new Bold(), new FontSize { Val = "21" }, new Color { Val = HEADER_BG }); });

    AddStyle(styles, "TipBox", "TipBox", (p) => {
        p.Append(new StyleParagraphProperties(
            new SpacingBetweenLines { Before = "120", After = "120" },
            new Shading { Fill = LIGHT_GREEN }
        ));
    }, (r) => { r.Append(new FontSize { Val = "21" }); });

    AddStyle(styles, "QuoteBox", "QuoteBox", (p) => {
        p.Append(new StyleParagraphProperties(
            new Justification { Val = JustificationValues.Center },
            new SpacingBetweenLines { Before = "200", After = "200" },
            new ParagraphBorders(new LeftBorder { Val = BorderValues.Single, Size = 24, Color = HEADER_BG }),
            new Indentation { Left = "720", Right = "720" }
        ));
    }, (r) => { r.Append(new Italic(), new FontSize { Val = "22" }, new Color { Val = SECONDARY }); });

    // ==================== 封面 ====================
    Space(3);
    body.Append(new Paragraph(new ParagraphProperties(new ParagraphStyleId { Val = "TitleCover" }), new Run(new Text("业务导向的共创式萃取开发"))));
    Space(1);
    body.Append(new Paragraph(new ParagraphProperties(new ParagraphStyleId { Val = "TitleMain" }), new Run(new Text("从经验到方法的课程开发工作坊"))));
    Space(2);
    P("工  作  坊  手  册");
    Space(1);
    P("3天2夜 - 行动学习版");
    Space(3);
    P("姓名：____________________　　课题：____________________　　日期：____________");
    Space(3);
    Quote("把活在专家脑子里的经验，炼成组织可以复用的课程资产。");
    BreakPage();

    // ==================== 使用说明 ====================
    Mod("如何使用本手册");
    Space(1);
    P("这本手册是你三天工作坊的开发工作台——不是笔记本，而是你正在开发的真实课程的设计文件。三天结束时，手册就是你的课程开发成果。");
    Space(1);
    P("- 每个活动工作表请在对应模块环节进行中完成");
    P("- 使用你自己真实的课题，不是虚拟案例");
    P("- 金色反思框是你自己的，请写真实的感受和发现");
    P("- 每天的「夜间工作」任务在对应页面有详细指引");
    P("- 手册最后有「四炼产出汇总页」，用于Day 3整合和展示");
    Space(1);

    Mod("经验课程化-四炼模型");
    var modelTable = CreateTable("炼", "内容", "产出", "质量标准");
    AddRow(modelTable, "第一炼-炼方向", "课程目的5W1S + 工作任务分析", "有用的课程定位", "有用");
    AddRow(modelTable, "第二炼-炼内容", "PSTT萃取 + 共创式萃取（开采挖收）+ 创意建模", "有料的方法论", "有料");
    AddRow(modelTable, "第三炼-炼结构", "教学目标 + 课程架构", "有序的课程框架", "有序");
    AddRow(modelTable, "第四炼-炼教学", "学习螺旋 + 互动矩阵 + STAR案例 + ADMO/ESA", "有趣的教学设计", "有趣");
    FinishTable(modelTable);
    Space(1);
    Tip("贯穿案例：林工（林建峰），设备管理高级工程师，开发「设备异常快速响应」课程——他的困境和解决过程，是大多数SME学员的镜像。");
    Space(1);

    Act("我的课题启动卡");
    P("我正在开发的课程，针对【　　　】，解决【　　　】，培训后他们能【　　　】");
    P("（Day 1开始时填写，全程修订）");
    Space(1);
    BreakPage();

    // ==================== Day 1 ====================
    Day("Day 1 上午 - 模块一 - 工作坊启程");
    Space(1);
    Mod("四有课程 - 破冰 - 课题启动");
    Space(1);

    Act("Activity 1A - 专家名片");
    var nameTable = CreateTable("我的名字/专业绰号 + 我的课题名称", "");
    AddRow(nameTable, "如果这门课开发成功，最受益的人会有什么不同？（用一个具体场景描述）", "");
    AddRow(nameTable, "我对这三天工作坊最大的一个期待 + 一个担忧：", "");
    FinishTable(nameTable);
    Space(1);

    Act("四有课程自评");
    P("（Day 1填写现有课程 / Day 3填写新开发课程）");
    var fourTable = CreateTable("维度", "现有课程评分（1-5）", "现有课程的问题是什么？", "新课程改善目标");
    AddRow(fourTable, "有用", "", "", "");
    AddRow(fourTable, "有料", "", "", "");
    AddRow(fourTable, "有序", "", "", "");
    AddRow(fourTable, "有趣", "", "", "");
    FinishTable(fourTable);
    Space(1);

    Reflect("我对这三天工作坊的心态准备：");
    Field("我的期待：");
    Field("我的担忧：");
    Space(1);
    BreakPage();

    // Day 1 下午
    Day("Day 1 下午 - 模块二-三 - 第一炼-炼方向");
    Space(1);
    Mod("5W1S + 工作任务分析 = 有用");
    Space(1);

    Act("Activity 2A - 课程目的5W1S分析表");
    var fiveWTable = CreateTable("Why（为什么）", "背后的业务问题/组织需要是什么？");
    AddRow(fiveWTable, "Who（学员是谁）", "背景/经验/在这个领域的主要困难是什么？");
    AddRow(fiveWTable, "What（解决什么）", "课程前后，学员在哪件事上有什么不同？");
    AddRow(fiveWTable, "When（什么时候）", "单次还是系列？与其他培训的关系？");
    AddRow(fiveWTable, "Where（什么场合）", "线下/线上/工作现场？有什么约束条件？");
    AddRow(fiveWTable, "So What（业务GAP）", "业务现状与业务目标的差距是什么？可以量化吗？");
    AddRow(fiveWTable, "So What（行为GAP）", "学员当前行为与期望行为的差距是什么？（行为化描述）");
    FinishTable(fiveWTable);
    Space(1);

    Act("Activity 3A - 工作任务分析表（理-列-析-明）");
    var lpraTable = CreateTable("工作任务（动宾结构）", "主要问题/困难（行为化描述）", "根本原因（知识/技能/态度/系统）", "做对了的行为/方法是什么？");
    for (int i = 0; i < 5; i++) AddRow(lpraTable, "", "", "", "");
    FinishTable(lpraTable);
    Space(1);

    Reflect("第一炼结束：我对自己课题的认识，和三天前相比有什么不同？有什么是我之前以为清楚但其实不清楚的？");
    Field("");
    Field("");
    Space(1);

    Night("第一夜任务：修订课题启动卡（第一页），补充工作任务分析中最有价值但还不够具体的部分");
    Field("");
    Field("");
    Field("");
    Space(1);
    BreakPage();

    // ==================== Day 2 ====================
    Day("Day 2 上午 - 模块四-六 - 第二炼-炼内容");
    Space(1);
    Mod("PSTT萃取 + 共创实战 + 创意建模 = 有料");
    Space(1);

    Act("Activity 4A - 我的PSTT方法论卡片");
    P("先个人填写草稿，然后进入共创式萃取（开采挖收），萃取后修订完善。");
    Space(1);
    var psttTable = CreateTable("Purpose（目的）", "这套方法是为了达成什么目的？");
    AddRow(psttTable, "Step（步骤）", "1. \n2. \n3. \n4. ");
    AddRow(psttTable, "Tips（注意事项）", "");
    AddRow(psttTable, "Tool（辅助工具）", "");
    FinishTable(psttTable);
    Space(1);

    Act("Activity 5A - 共创式萃取记录（开采挖收）");
    P("当你作为被萃取者（SME）时，记录萃取过程中最有价值的追问和你的回答。当你作为提问者时，记录你问的最有穿透力的追问。");
    var extractTable = CreateTable("角色", "最有价值的追问（来自「挖」的环节）", "这个追问帮我发现了什么？（修订我的PSTT）");
    for (int i = 0; i < 3; i++) AddRow(extractTable, "", "", "");
    FinishTable(extractTable);
    Space(1);

    Act("Activity 6A - 创意建模工作区");
    P("我选择的模型类型：流程 / 框架 / 层级 / 循环 / 星形 / 对比（选择一种）");
    Field("我的模型名字 + 命名逻辑：");
    Space(1);
    P("模型草图（手绘区）：");
    Space(6);
    Reflect("共创式萃取后，我发现自己经验里哪个部分是我之前认为理所当然但其实对别人来说完全不清楚的？");
    Field("");
    Field("");
    Space(1);

    Night("第二夜任务：完善课程规划表（明天模块七的模板），确认章节结构和每章目标草稿");
    Field("");
    Field("");
    Space(1);
    BreakPage();

    // Day 2 下午
    Day("Day 2 下午 - 模块七 - 第三炼-炼结构");
    Space(1);
    Mod("教学目标 + 课程架构 = 有序");
    Space(1);

    Act("Activity 7A - 课程规划表");
    var planTable = CreateTable("章节名称（包装后的标题）", "教学目标（Know/Do/Believe格式）", "主要内容要点 + 关键活动", "K/D/B比例", "时间");
    for (int i = 0; i < 7; i++) AddRow(planTable, "", "", "", "", "");
    AddRow(planTable, "合计", "", "", "100%", "");
    FinishTable(planTable);
    Space(1);

    Reflect("课程结构整理后，你发现内容的先后顺序和你最初想的有什么不同？改变顺序的原因是什么？");
    Field("");
    Field("");
    Space(1);
    BreakPage();

    // ==================== Day 3 ====================
    Day("Day 3 上午 - 模块八-九 - 第四炼-炼教学");
    Space(1);
    Mod("学习螺旋 + 案例 + 首尾设计 = 有趣");
    Space(1);

    Act("Activity 8A - 教学活动设计卡（选一章节）");
    P("选取课程规划表中一个关键章节，完成该章节的教学活动详细设计。");
    Field("本章节名称 + 核心教学目标（Know/Do/Believe）：");
    Space(1);
    var spiralTable = CreateTable("触发（Trigger）", "建构（Build）", "应用（Apply）", "学习螺旋时间分配");
    AddRow(spiralTable, "", "", "", "");
    FinishTable(spiralTable);
    Space(1);

    Act("Activity 9A - 教学案例（STAR格式）");
    P("为你选定的章节写一个STAR格式的教学案例，检验自己是否符合四原则：一致性/真实性/戏剧性/客观性。");
    var starTable = CreateTable("Situation（情境）", "时间/地点/背景，越具体越好");
    AddRow(starTable, "Task（任务/挑战）", "面临的关键挑战或任务是什么");
    AddRow(starTable, "Action（行动）", "采取了哪些关键行动——这是教学重点，要有步骤和判断逻辑");
    AddRow(starTable, "Result（结果）", "结果如何？为什么会是这个结果？");
    FinishTable(starTable);
    Space(1);
    P("配套教学问题（3个）：帮助学员自己从案例中发现原则（不是告知答案）");
    Field("1. ");
    Field("2. ");
    Field("3. ");
    Space(1);

    Act("Activity 9B - 开场（ADMO）+ 结尾（ESA）设计框架");
    Field("我的课程内容（具体文字草稿）：");
    Field("");
    Space(1);
    var admoTable = CreateTable("ADMO-A 抓注意（Attention）", "");
    AddRow(admoTable, "ADMO-D 激欲望（Desire）", "");
    AddRow(admoTable, "ADMO-M 建动力（Motivation）", "");
    AddRow(admoTable, "ADMO-O 给蓝图（Overview）", "");
    AddRow(admoTable, "ESA-E 评估学习（Evaluation）", "");
    AddRow(admoTable, "ESA-S 总结要点（Summary）", "");
    AddRow(admoTable, "ESA-A 行动计划（Action）", "");
    FinishTable(admoTable);
    Space(1);

    Reflect("第四炼里，什么活动设计让你感到「如果我是学员，我会真正参与进去」？设计这个活动时，你用了什么思路？");
    Field("");
    Field("");
    Space(1);
    BreakPage();

    // ==================== 四炼产出汇总 ====================
    Day("四炼产出汇总");
    Space(1);
    Mod("Course Development Summary - 作品展示准备");
    P("整合四炼产出，准备Day 3下午的3分钟作品展示。");
    Space(1);

    Act("第一炼产出（炼方向）");
    P("-> 我的课程定位一句话");
    Field("");
    Space(1);

    Act("第二炼产出（炼内容）");
    P("-> 我的方法论名称 + 核心步骤（PSTT精华）");
    Field("");
    P("-> 我的视觉模型名称 + 类型");
    Field("");
    Space(1);

    Act("第三炼产出（炼结构）");
    P("-> 课程有几章，每章的目标类型是什么");
    Field("");
    Space(1);

    Act("第四炼产出（炼教学）");
    P("-> 我的代表性互动活动 + 案例名称");
    Field("");
    Space(1);

    Act("3分钟展示脚本草稿");
    P("（开发者介绍课程定位 + 方法论亮点 + 最大的三天收获）");
    Field("");
    Field("");
    Field("");
    Field("");
    Space(1);

    Act("我的30天承诺");
    P("在 ______ 天内，我会完成：");
    Field("");
    P("我邀请 ______ 在那个日期后问我：「课程PPT做好了吗？」");
    Space(1);
    BreakPage();

    // ==================== 行动计划 ====================
    Day("行动计划");
    Space(1);
    Mod("30/60/90天跟进行动承诺");
    Space(1);

    Act("我的30天承诺");
    var actionTable = CreateTable("行动项", "具体内容", "截止日期", "所需支持");
    for (int i = 0; i < 3; i++) AddRow(actionTable, (i+1).ToString(), "", "", "");
    FinishTable(actionTable);
    Space(1);

    Act("写给未来自己的话");
    Quote("亲爱的自己：");
    P("当你在未来的某一天翻开这本手册，我想让你记得：");
    Space(1);
    P("我选择开发这门课，是因为我相信：");
    Field("");
    P("我对未来的自己最大的期待是：");
    Field("");
    P("如果遇到困难，我想对未来的自己说：");
    Field("");
    Space(1);
    P("签名：_________________　　日期：_____年_____月_____日");
    Space(1);

    Tip("温暖提醒：行动计划不是为了完成而完成，而是为了让课程真正落地。建议您在30天后回顾这份承诺，给自己的行动打分；60天后进行一次中期复盘；90天后做一次全面总结。");
    Space(1);

    Mod("版权声明");
    var copyTable = CreateTable("项目", "内容");
    AddRow(copyTable, "课程名称", "业务导向的共创式萃取开发：从经验到方法的课程开发工作坊");
    AddRow(copyTable, "版本号", "V1.0");
    AddRow(copyTable, "发布日期", "2026年6月");
    AddRow(copyTable, "版权所有", "(c) 2026");
    FinishTable(copyTable);
    Space(1);

    Quote("本学员手册的所有内容，包括但不限于文字、图表、模型、工具表单、案例示范等，均受中华人民共和国著作权法保护。");
    Quote("本手册内容仅供学员个人学习使用，未经授权不得用于商业用途。");
    Space(1);

    Quote("「把活在专家脑子里的经验，炼成组织可以复用的课程资产。」");
    P("—— 课程开发团队 - 2026年6月 V1.0");

    // 页面设置
    body.Append(new SectionProperties(
        new PageSize { Width = 11906, Height = 16838 },
        new PageMargin { Top = 1440, Right = 1440, Bottom = 1440, Left = 1440, Header = 720, Footer = 720 }
    ));

    mainPart.Document.Save();
    Console.WriteLine($"Student handbook created: {outputPath}");
}

// ============================================================
string outputDir = @"D:\新课开发\内训师和表达\业务导向的共创式萃取开发\完整课程包";

CreateInstructorHandbook($@"{outputDir}\05-讲师手册\讲师手册_精美版.docx");
CreateStudentHandbook($@"{outputDir}\06-学员手册\学员手册_精美版.docx");

Console.WriteLine("Both handbooks created successfully!");
