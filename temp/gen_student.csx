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
string outputPath = outputDir + @"\06-学员手册\学员手册_精美版.docx";

void AddStyle(Styles styles, string styleId, string styleName, StyleParagraphProperties pPr, StyleRunProperties rPr) {
    var style = new Style {
        Type = StyleValues.Paragraph,
        StyleId = styleId,
        StyleName = new StyleName { Val = styleName }
    };
    style.Append(pPr);
    style.Append(rPr);
    styles.Append(style);
}

using (var doc = WordprocessingDocument.Create(outputPath, WordprocessingDocumentType.Document))
{
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

    // TitleCover
    {
        var pPr = new StyleParagraphProperties(
            new Justification { Val = JustificationValues.Center },
            new SpacingBetweenLines { Before = "800", After = "200" }
        );
        var rPr = new StyleRunProperties(new Bold(), new FontSize { Val = "56" }, new Color { Val = PRIMARY });
        AddStyle(styles, "TitleCover", "TitleCover", pPr, rPr);
    }
    // TitleMain
    {
        var pPr = new StyleParagraphProperties(
            new Justification { Val = JustificationValues.Center },
            new SpacingBetweenLines { After = "0" }
        );
        var rPr = new StyleRunProperties(new Bold(), new FontSize { Val = "44" }, new Color { Val = PRIMARY });
        AddStyle(styles, "TitleMain", "TitleMain", pPr, rPr);
    }
    // Heading1
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
    // Heading2
    {
        var pPr = new StyleParagraphProperties(
            new SpacingBetweenLines { Before = "360", After = "120" },
            new KeepNext(),
            new OutlineLevel { Val = 1 }
        );
        var rPr = new StyleRunProperties(new Bold(), new FontSize { Val = "28" }, new Color { Val = HEADER_BG });
        AddStyle(styles, "Heading2", "Heading 2", pPr, rPr);
    }
    // Heading3
    {
        var pPr = new StyleParagraphProperties(
            new SpacingBetweenLines { Before = "240", After = "120" },
            new KeepNext(),
            new OutlineLevel { Val = 2 }
        );
        var rPr = new StyleRunProperties(new Bold(), new FontSize { Val = "24" }, new Color { Val = ACCENT });
        AddStyle(styles, "Heading3", "Heading 3", pPr, rPr);
    }
    // BodyText
    {
        var pPr = new StyleParagraphProperties(
            new SpacingBetweenLines { After = "120" }
        );
        var rPr = new StyleRunProperties(new FontSize { Val = "21" }, new Color { Val = SECONDARY });
        AddStyle(styles, "BodyText", "BodyText", pPr, rPr);
    }
    // SectionTitle
    {
        var pPr = new StyleParagraphProperties(
            new SpacingBetweenLines { Before = "480", After = "200" },
            new KeepNext(),
            new OutlineLevel { Val = 0 }
        );
        var rPr = new StyleRunProperties(new Bold(), new FontSize { Val = "32" }, new Color { Val = PRIMARY });
        AddStyle(styles, "SectionTitle", "SectionTitle", pPr, rPr);
    }
    // TipBox
    {
        var pPr = new StyleParagraphProperties(
            new SpacingBetweenLines { Before = "120", After = "120" },
            new Shading { Fill = LIGHT_GREEN },
            new ParagraphBorders(new LeftBorder { Val = BorderValues.Single, Size = 24, Color = GREEN })
        );
        var rPr = new StyleRunProperties(new FontSize { Val = "21" }, new Color { Val = SECONDARY });
        AddStyle(styles, "TipBox", "TipBox", pPr, rPr);
    }
    // InsightBox
    {
        var pPr = new StyleParagraphProperties(
            new SpacingBetweenLines { Before = "120", After = "120" },
            new Shading { Fill = LIGHT_ORANGE },
            new ParagraphBorders(new LeftBorder { Val = BorderValues.Single, Size = 24, Color = ORANGE })
        );
        var rPr = new StyleRunProperties(new FontSize { Val = "21" }, new Color { Val = SECONDARY });
        AddStyle(styles, "InsightBox", "InsightBox", pPr, rPr);
    }
    // QuoteBox
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
    // TimeNote
    {
        var pPr = new StyleParagraphProperties(
            new SpacingBetweenLines { Before = "60", After = "60" },
            new Shading { Fill = LIGHT_BLUE }
        );
        var rPr = new StyleRunProperties(new FontSize { Val = "20" }, new Color { Val = HEADER_BG });
        AddStyle(styles, "TimeNote", "TimeNote", pPr, rPr);
    }
    // ActivityBox
    {
        var pPr = new StyleParagraphProperties(
            new SpacingBetweenLines { Before = "200", After = "120" },
            new Shading { Fill = LIGHT_RED },
            new ParagraphBorders(new LeftBorder { Val = BorderValues.Single, Size = 24, Color = PRIMARY })
        );
        var rPr = new StyleRunProperties(new FontSize { Val = "21" }, new Color { Val = SECONDARY });
        AddStyle(styles, "ActivityBox", "ActivityBox", pPr, rPr);
    }
    // ReflectionBox
    {
        var pPr = new StyleParagraphProperties(
            new SpacingBetweenLines { Before = "200", After = "120" },
            new Shading { Fill = GOLD },
            new ParagraphBorders(new LeftBorder { Val = BorderValues.Single, Size = 24, Color = ORANGE })
        );
        var rPr = new StyleRunProperties(new Italic(), new FontSize { Val = "21" }, new Color { Val = SECONDARY });
        AddStyle(styles, "ReflectionBox", "ReflectionBox", pPr, rPr);
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

    void AddActivity(string text) => body.Append(new Paragraph(
        new ParagraphProperties(new ParagraphStyleId { Val = "ActivityBox" }),
        new Run(new Text(text))));

    void AddReflection(string text) => body.Append(new Paragraph(
        new ParagraphProperties(new ParagraphStyleId { Val = "ReflectionBox" }),
        new Run(new Text(text))));

    void AddTip(string text) => body.Append(new Paragraph(
        new ParagraphProperties(new ParagraphStyleId { Val = "TipBox" }),
        new Run(new Text(text))));

    void AddInsight(string text) => body.Append(new Paragraph(
        new ParagraphProperties(new ParagraphStyleId { Val = "InsightBox" }),
        new Run(new Text(text))));

    void AddQuote(string text) => body.Append(new Paragraph(
        new ParagraphProperties(new ParagraphStyleId { Val = "QuoteBox" }),
        new Run(new Text(text))));

    void AddTime(string text) => body.Append(new Paragraph(
        new ParagraphProperties(new ParagraphStyleId { Val = "TimeNote" }),
        new Run(new Text(text))));

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
    AddP("工  作  坊  手  册");
    AddSpace(1);
    AddP("3天2夜 · 行动学习版");
    AddSpace(3);

    var infoTable = new Table(new TableProperties(
        new TableWidth { Width = "4000", Type = TableWidthUnitValues.Pct },
        new TableBorders(
            new TopBorder { Val = BorderValues.Single, Size = 4, Color = LIGHT },
            new BottomBorder { Val = BorderValues.Single, Size = 4, Color = LIGHT },
            new LeftBorder { Val = BorderValues.Single, Size = 4, Color = LIGHT },
            new RightBorder { Val = BorderValues.Single, Size = 4, Color = LIGHT },
            new InsideHorizontalBorder { Val = BorderValues.Single, Size = 2, Color = LIGHT }
        )
    ));
    AddRow(infoTable, "姓名", "________________");
    AddRow(infoTable, "课题", "________________");
    AddRow(infoTable, "日期", "________________");
    FinishTable(infoTable);

    AddSpace(2);
    AddQuote("把活在专家脑子里的经验，炼成组织可以复用的课程资产。");
    AddBreakPage();

    // ==================== HOW TO USE ====================
    AddSec("如何使用本手册");
    AddSpace(1);
    AddP("这本手册是你三天工作坊的开发工作台——不是笔记本，而是你正在开发的真实课程的设计文件。三天结束时，手册就是你的课程开发成果。");
    AddSpace(1);
    AddP("- 每个活动工作表请在对应模块环节进行中完成");
    AddP("- 使用你自己真实的课题，不是虚拟案例");
    AddActivity("金色反思框是你自己的，请写真实的感受和发现");
    AddP("- 每天的「夜间工作」任务在对应页面有详细指引");
    AddP("- 手册最后有「四炼产出汇总页」，用于Day 3整合和展示");
    AddSpace(2);

    // Four Refinements Model
    AddSec("经验课程化 · 四炼模型");
    AddSpace(1);
    var modelTable = CreateTable("炼", "内容", "产出", "质量标准");
    AddRow(modelTable, "第一炼 · 炼方向", "课程目的5W1S + 工作任务分析", "有用的课程定位", "5W1S完整");
    AddRow(modelTable, "第二炼 · 炼内容", "PSTT萃取 + 共创式萃取（开采挖收）+ 创意建模", "有料的方法论", "PSTT完整");
    AddRow(modelTable, "第三炼 · 炼结构", "教学目标 + 课程架构", "有序的课程框架", "K/D/B比例合理");
    AddRow(modelTable, "第四炼 · 炼教学", "学习螺旋 + 互动矩阵 + STAR案例 + ADMO/ESA", "有趣的教学设计", "ADMO+ESA完整");
    FinishTable(modelTable);
    AddSpace(1);
    AddTip("贯穿案例：林工（林建峰），设备管理高级工程师，开发「设备异常快速响应」课程——他的困境和解决过程，是大多数SME学员的镜像。");
    AddSpace(2);

    // My topic card
    AddSec("我的课题启动卡");
    AddSpace(1);
    AddP("我正在开发的课程，针对【　　　】，解决【　　　】，培训后他们能【　　　】");
    AddP("(Day 1开始时填写，全程修订)");
    AddBreakPage();

    // ==================== DAY 1 ====================
    AddH1("Day 1 上午 · 模块一 · 工作坊启程");
    AddSpace(1);
    AddH2("四有课程 · 破冰 · 课题启动");
    AddSpace(1);

    AddH3("Activity 1A · 专家名片");
    AddSpace(1);
    var cardTable = CreateTable("我的名字/专业绰号 + 我的课题名称", "");
    AddRow(cardTable, "如果这门课开发成功，最受益的人会有什么不同？（用一个具体场景描述）", "");
    AddRow(cardTable, "我对这三天工作坊最大的一个期待 + 一个担忧：", "");
    FinishTable(cardTable);
    AddSpace(2);

    AddH3("四有课程自评");
    AddP("(Day 1填写现有课程 / Day 3填写新开发课程)");
    var ratingTable = CreateTable("维度", "现有课程评分（1-5）", "现有课程的问题是什么？", "新课程改善目标");
    AddRow(ratingTable, "有用", "", "", "");
    AddRow(ratingTable, "有料", "", "", "");
    AddRow(ratingTable, "有序", "", "", "");
    AddRow(ratingTable, "有趣", "", "", "");
    FinishTable(ratingTable);
    AddSpace(2);

    AddReflection("我对这三天工作坊的心态准备：");
    AddP("我的期待：_______________________________________________");
    AddP("我的担忧：_______________________________________________");
    AddBreakPage();

    // Day 1 afternoon
    AddH1("Day 1 下午 · 模块二·三 · 第一炼·炼方向");
    AddSpace(1);
    AddH2("5W1S + 工作任务分析 = 有用");
    AddSpace(1);

    AddH3("Activity 2A · 课程目的5W1S分析表");
    AddSpace(1);
    var a2aTable = CreateTable("维度", "分析内容");
    AddRow(a2aTable, "Why（为什么）", "背后的业务问题/组织需要是什么？");
    AddRow(a2aTable, "Who（学员是谁）", "背景/经验/在这个领域的主要困难是什么？");
    AddRow(a2aTable, "What（解决什么）", "课程前后，学员在哪件事上有什么不同？");
    AddRow(a2aTable, "When（什么时候）", "单次还是系列？与其他培训的关系？");
    AddRow(a2aTable, "Where（什么场合）", "线下/线上/工作现场？有什么约束条件？");
    AddRow(a2aTable, "So What（业务GAP）", "业务现状与业务目标的差距是什么？可以量化吗？");
    AddRow(a2aTable, "So What（行为GAP）", "学员当前行为与期望行为的差距是什么？（行为化描述）");
    FinishTable(a2aTable);
    AddSpace(2);

    AddH3("Activity 3A · 工作任务分析表（理-列-析-明）");
    AddSpace(1);
    var a3aTable = CreateTable("工作任务（动宾结构）", "主要问题/困难（行为化描述）", "根本原因（知识/技能/态度/系统）", "做对了的行为/方法是什么？");
    AddRow(a3aTable, "", "", "", "");
    AddRow(a3aTable, "", "", "", "");
    AddRow(a3aTable, "", "", "", "");
    AddRow(a3aTable, "", "", "", "");
    AddRow(a3aTable, "", "", "", "");
    FinishTable(a3aTable);
    AddSpace(2);

    AddReflection("第一炼结束：我对自己课题的认识，和三天前相比有什么不同？有什么是我之前以为清楚但其实不清楚的？");
    AddP("_______________________________________________");
    AddP("_______________________________________________");
    AddSpace(2);

    AddH3("第一夜任务");
    AddActivity("修订课题启动卡（第一页），补充工作任务分析中最有价值但还不够具体的部分：");
    AddP("_______________________________________________");
    AddP("_______________________________________________");
    AddP("_______________________________________________");
    AddBreakPage();

    // ==================== DAY 2 ====================
    AddH1("Day 2 上午 · 模块四·五·六 · 第二炼·炼内容");
    AddSpace(1);
    AddH2("PSTT萃取 + 共创实战 + 创意建模 = 有料");
    AddSpace(1);

    AddH3("Activity 4A · 我的PSTT方法论卡片");
    AddP("先个人填写草稿，然后进入共创式萃取（开采挖收），萃取后修订完善。");
    AddSpace(1);
    var a4aTable = CreateTable("维度", "内容");
    AddRow(a4aTable, "Purpose（目的）", "这套方法是为了达成什么目的？");
    AddRow(a4aTable, "Step（步骤）", "具体实施步骤（每步用动宾结构命名，通常3-7步）：\n1.\n2.\n3.\n4.");
    AddRow(a4aTable, "Tips（注意事项）", "关键注意事项/常见错误/边界条件（每步都要有Tips）：");
    AddRow(a4aTable, "Tool（辅助工具）", "支持方法执行的工具/模板/检查清单：");
    FinishTable(a4aTable);
    AddSpace(2);

    AddH3("Activity 5A · 共创式萃取记录（开采挖收）");
    AddP("当你作为被萃取者（SME）时，记录萃取过程中最有价值的追问和你的回答。当你作为提问者时，记录你问的最有穿透力的追问。");
    AddSpace(1);
    var a5aTable = CreateTable("角色", "最有价值的追问（来自「挖」的环节）", "这个追问帮我发现了什么？（修订我的PSTT）");
    AddRow(a5aTable, "", "", "");
    AddRow(a5aTable, "", "", "");
    AddRow(a5aTable, "", "", "");
    FinishTable(a5aTable);
    AddSpace(2);

    AddH3("Activity 6A · 创意建模工作区");
    AddP("在下面的大空白区域手绘你的视觉模型");
    AddSpace(1);
    AddP("我选择的模型类型：流程 / 框架 / 层级 / 循环 / 星形 / 对比（选择一种）");
    AddP("我的模型名字 + 命名逻辑：");
    AddP("_______________________________________________");
    AddSpace(1);
    AddP("模型草图（手绘区）：");
    // Drawing area
    var drawTable = new Table(new TableProperties(
        new TableWidth { Width = "5000", Type = TableWidthUnitValues.Pct },
        new TableBorders(
            new TopBorder { Val = BorderValues.Single, Size = 4, Color = SECONDARY },
            new BottomBorder { Val = BorderValues.Single, Size = 4, Color = SECONDARY },
            new LeftBorder { Val = BorderValues.Single, Size = 4, Color = SECONDARY },
            new RightBorder { Val = BorderValues.Single, Size = 4, Color = SECONDARY }
        )
    ));
    for (int i = 0; i < 10; i++)
        drawTable.Append(new TableRow(new TableCell(new Paragraph(new Run(new Text(""))))));
    FinishTable(drawTable);
    AddSpace(2);

    AddReflection("共创式萃取后，我发现自己经验里哪个部分是我之前认为理所当然但其实对别人来说完全不清楚的？");
    AddP("_______________________________________________");
    AddP("_______________________________________________");
    AddSpace(2);

    AddH3("第二夜任务");
    AddActivity("完善课程规划表（明天模块七的模板），确认章节结构和每章目标草稿：");
    AddP("_______________________________________________");
    AddP("_______________________________________________");
    AddBreakPage();

    // Day 2 afternoon
    AddH1("Day 2 下午 · 模块七 · 第三炼·炼结构");
    AddSpace(1);
    AddH2("教学目标 + 课程架构 = 有序");
    AddSpace(1);

    AddH3("Activity 7A · 课程规划表");
    AddSpace(1);
    var a7aTable = CreateTable("章节名称（包装后的标题）", "教学目标（Know/Do/Believe格式）", "主要内容要点 + 关键活动", "K/D/B比例", "时间");
    AddRow(a7aTable, "", "", "", "", "");
    AddRow(a7aTable, "", "", "", "", "");
    AddRow(a7aTable, "", "", "", "", "");
    AddRow(a7aTable, "", "", "", "", "");
    AddRow(a7aTable, "", "", "", "", "");
    AddRow(a7aTable, "", "", "", "", "");
    AddRow(a7aTable, "合计", "", "", "100%", "");
    FinishTable(a7aTable);
    AddSpace(2);

    AddReflection("课程结构整理后，你发现内容的先后顺序和你最初想的有什么不同？改变顺序的原因是什么？");
    AddP("_______________________________________________");
    AddP("_______________________________________________");
    AddBreakPage();

    // ==================== DAY 3 ====================
    AddH1("Day 3 上午 · 模块八·九 · 第四炼·炼教学");
    AddSpace(1);
    AddH2("学习螺旋 + 案例 + 首尾设计 = 有趣");
    AddSpace(1);

    AddH3("Activity 8A · 教学活动设计卡（选一章节）");
    AddP("选取课程规划表中一个关键章节，完成该章节的教学活动详细设计。");
    AddSpace(1);
    AddP("本章节名称 + 核心教学目标（Know/Do/Believe）：");
    AddP("_______________________________________________");
    AddSpace(1);
    var a8aTable = CreateTable("触发（Trigger）", "建构（Build）", "应用（Apply）", "学习螺旋时间分配");
    AddRow(a8aTable, "", "", "", "");
    AddRow(a8aTable, "", "", "", "");
    FinishTable(a8aTable);
    AddSpace(2);

    AddH3("Activity 9A · 教学案例（STAR格式）");
    AddP("为你选定的章节写一个STAR格式的教学案例，检验自己是否符合四原则：一致性/真实性/戏剧性/客观性。");
    AddSpace(1);
    var a9aTable = CreateTable("维度", "内容");
    AddRow(a9aTable, "Situation（情境）", "时间/地点/背景，越具体越好");
    AddRow(a9aTable, "Task（任务/挑战）", "面临的关键挑战或任务是什么");
    AddRow(a9aTable, "Action（行动）", "采取了哪些关键行动——这是教学重点，要有步骤和判断逻辑");
    AddRow(a9aTable, "Result（结果）", "结果如何？为什么会是这个结果？");
    FinishTable(a9aTable);
    AddSpace(1);
    AddP("配套教学问题（3个）：帮助学员自己从案例中发现原则（不是告知答案）");
    AddP("1. _______________________________________________");
    AddP("2. _______________________________________________");
    AddP("3. _______________________________________________");
    AddSpace(2);

    AddH3("Activity 9B · 开场（ADMO）+ 结尾（ESA）设计框架");
    AddSpace(1);
    AddP("我的课程内容（具体文字草稿）：");
    AddP("_______________________________________________");
    AddP("_______________________________________________");
    AddSpace(1);
    var a9bTable = CreateTable("环节", "内容设计");
    AddRow(a9bTable, "ADMO-A 抓注意（Attention）", "");
    AddRow(a9bTable, "ADMO-D 激欲望（Desire）", "");
    AddRow(a9bTable, "ADMO-M 建动力（Motivation）", "");
    AddRow(a9bTable, "ADMO-O 给蓝图（Overview）", "");
    AddRow(a9bTable, "ESA-E 评估学习（Evaluation）", "");
    AddRow(a9bTable, "ESA-S 总结要点（Summary）", "");
    AddRow(a9bTable, "ESA-A 行动计划（Action）", "");
    FinishTable(a9bTable);
    AddSpace(2);

    AddReflection("第四炼里，什么活动设计让你感到「如果我是学员，我会真正参与进去」？设计这个活动时，你用了什么思路？");
    AddP("_______________________________________________");
    AddP("_______________________________________________");
    AddBreakPage();

    // ==================== SUMMARY ====================
    AddH1("四炼产出汇总");
    AddSpace(1);
    AddH2("Course Development Summary · 作品展示准备");
    AddP("整合四炼产出，准备Day 3下午的3分钟作品展示。");
    AddSpace(1);

    AddH3("第一炼产出（炼方向）");
    AddP("→ 我的课程定位一句话");
    AddP("_______________________________________________");
    AddSpace(1);

    AddH3("第二炼产出（炼内容）");
    AddP("→ 我的方法论名称 + 核心步骤（PSTT精华）");
    AddP("_______________________________________________");
    AddP("→ 我的视觉模型名称 + 类型");
    AddP("_______________________________________________");
    AddSpace(1);

    AddH3("第三炼产出（炼结构）");
    AddP("→ 课程有几章，每章的目标类型是什么");
    AddP("_______________________________________________");
    AddSpace(1);

    AddH3("第四炼产出（炼教学）");
    AddP("→ 我的代表性互动活动 + 案例名称");
    AddP("_______________________________________________");
    AddSpace(1);

    AddH3("3分钟展示脚本草稿");
    AddP("（开发者介绍课程定位 + 方法论亮点 + 最大的三天收获）");
    AddP("_______________________________________________");
    AddP("_______________________________________________");
    AddP("_______________________________________________");
    AddP("_______________________________________________");
    AddSpace(1);

    AddH3("我的30天承诺");
    AddP("在 ______ 天内，我会完成：");
    AddP("_______________________________________________");
    AddP("我邀请 ______ 在那个日期后问我：「课程PPT做好了吗？」");
    AddBreakPage();

    // ==================== ACTION PLAN ====================
    AddH1("行动计划");
    AddSpace(1);
    AddH2("30/60/90天跟进行动承诺");
    AddSpace(1);

    AddH3("我的30天承诺");
    var actionTable = CreateTable("行动项", "具体内容", "截止日期", "所需支持");
    AddRow(actionTable, "1", "", "", "");
    AddRow(actionTable, "2", "", "", "");
    AddRow(actionTable, "3", "", "", "");
    FinishTable(actionTable);
    AddSpace(2);

    AddH3("写给未来自己的话");
    AddP("亲爱的自己：");
    AddP("当你在未来的某一天翻开这本手册，我想让你记得：");
    AddP("我选择开发这门课，是因为我相信：");
    AddP("_______________________________________________");
    AddP("我对未来的自己最大的期待是：");
    AddP("_______________________________________________");
    AddP("如果遇到困难，我想对未来的自己说：");
    AddP("_______________________________________________");
    AddSpace(2);
    AddP("签名：_________________");
    AddP("日期：_____年_____月_____日");
    AddSpace(2);

    AddInsight("温暖提醒：行动计划不是为了完成而完成，而是为了让课程真正落地。建议您在30天后回顾这份承诺，给自己的行动打分；60天后进行一次中期复盘；90天后做一次全面总结。");
    AddBreakPage();

    // ==================== COPYRIGHT ====================
    AddH1("版权声明");
    AddSpace(1);
    var copyTable = CreateTable("项目", "内容");
    AddRow(copyTable, "课程名称", "业务导向的共创式萃取开发：从经验到方法的课程开发工作坊");
    AddRow(copyTable, "版本号", "V1.0");
    AddRow(copyTable, "发布日期", "2026年6月");
    AddRow(copyTable, "版权所有", "© 2026");
    FinishTable(copyTable);
    AddSpace(1);
    AddP("版权声明：");
    AddP("本学员手册的所有内容，包括但不限于文字、图表、模型、工具表单、案例示范等，均受中华人民共和国著作权法保护。");
    AddSpace(1);
    AddP("免责声明：");
    AddP("- 本手册内容仅供学员个人学习使用，未经授权不得用于商业用途");
    AddP("- 本手册中的案例为教学需要而设计，如有雷同纯属巧合");
    AddP("- 因使用本手册内容而产生的任何决策或行动，由使用者自行负责");
    AddSpace(2);
    AddQuote("「把活在专家脑子里的经验，炼成组织可以复用的课程资产。」");
    AddSpace(1);
    AddP("—— 课程开发团队");
    AddP("2026年6月 V1.0");

    // Page setup
    body.Append(new SectionProperties(
        new PageSize { Width = 11906, Height = 16838 },
        new PageMargin { Top = 1440, Right = 1440, Bottom = 1440, Left = 1440, Header = 720, Footer = 720 }
    ));

    mainPart.Document.Save();
    Console.WriteLine("Student handbook created: " + outputPath);
}

Console.WriteLine("Done!");
