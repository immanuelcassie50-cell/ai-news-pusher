using DocumentFormat.OpenXml;
using DocumentFormat.OpenXml.Packaging;
using DocumentFormat.OpenXml.Wordprocessing;

string outputPath = args.Length > 0 ? args[0] : "output.docx";
string outputDir = Path.GetDirectoryName(outputPath) ?? ".";

if (!string.IsNullOrEmpty(outputDir) && outputDir != "." && !Directory.Exists(outputDir))
    Directory.CreateDirectory(outputDir);

var doc = WordprocessingDocument.Create(outputPath, WordprocessingDocumentType.Document);
var mainPart = doc.AddMainDocumentPart();
var body = new Body();

// ---- STYLES ----
var stylesPart = mainPart.AddNewPart<StyleDefinitionsPart>();
var styles = new Styles();

styles.Append(new DocDefaults(
    new RunPropertiesDefault(new RunPropertiesBaseStyle(
        new RunFonts { Ascii = "Microsoft YaHei", HighAnsi = "Microsoft YaHei", EastAsia = "Microsoft YaHei" },
        new FontSize { Val = "24" },
        new FontSizeComplexScript { Val = "24" }
    ))
));

styles.Append(new Style(
    new StyleName { Val = "Normal" },
    new BasedOn { Val = "Normal" },
    new StyleRunProperties(
        new RunFonts { Ascii = "Microsoft YaHei", HighAnsi = "Microsoft YaHei", EastAsia = "Microsoft YaHei" },
        new FontSize { Val = "24" },
        new FontSizeComplexScript { Val = "24" }
    ),
    new StyleParagraphProperties(
        new SpacingBetweenLines { After = "160", Line = "276", LineRule = LineSpacingRuleValues.Auto }
    )
) { Type = StyleValues.Paragraph, StyleId = "Normal" });

styles.Append(new Style(
    new StyleName { Val = "Heading 1" },
    new BasedOn { Val = "Normal" },
    new NextParagraphStyle { Val = "Normal" },
    new StyleRunProperties(
        new RunFonts { Ascii = "Microsoft YaHei", HighAnsi = "Microsoft YaHei", EastAsia = "Microsoft YaHei" },
        new FontSize { Val = "36" },
        new Bold(),
        new Color { Val = "1F3864" }
    ),
    new StyleParagraphProperties(
        new SpacingBetweenLines { Before = "480", After = "240" },
        new OutlineLevel { Val = 0 }
    )
) { Type = StyleValues.Paragraph, StyleId = "Heading1" });

styles.Append(new Style(
    new StyleName { Val = "Heading 2" },
    new BasedOn { Val = "Normal" },
    new NextParagraphStyle { Val = "Normal" },
    new StyleRunProperties(
        new RunFonts { Ascii = "Microsoft YaHei", HighAnsi = "Microsoft YaHei", EastAsia = "Microsoft YaHei" },
        new FontSize { Val = "32" },
        new Bold(),
        new Color { Val = "2E75B6" }
    ),
    new StyleParagraphProperties(
        new SpacingBetweenLines { Before = "360", After = "160" },
        new OutlineLevel { Val = 1 }
    )
) { Type = StyleValues.Paragraph, StyleId = "Heading2" });

styles.Append(new Style(
    new StyleName { Val = "Heading 3" },
    new BasedOn { Val = "Normal" },
    new NextParagraphStyle { Val = "Normal" },
    new StyleRunProperties(
        new RunFonts { Ascii = "Microsoft YaHei", HighAnsi = "Microsoft YaHei", EastAsia = "Microsoft YaHei" },
        new FontSize { Val = "28" },
        new Bold(),
        new Color { Val = "333333" }
    ),
    new StyleParagraphProperties(
        new SpacingBetweenLines { Before = "240", After = "120" },
        new OutlineLevel { Val = 2 }
    )
) { Type = StyleValues.Paragraph, StyleId = "Heading3" });

stylesPart.Styles = styles;
stylesPart.Styles.Save();

// ---- SETTINGS ----
var settingsPart = mainPart.AddNewPart<DocumentSettingsPart>();
settingsPart.Settings = new Settings();
settingsPart.Settings.Save();

// ---- HEADER/FOOTER ----
var headerPart = mainPart.AddNewPart<HeaderPart>();
headerPart.Header = new Header(
    new Paragraph(
        new ParagraphProperties(
            new Justification { Val = JustificationValues.Center },
            new SpacingBetweenLines { After = "0" }
        ),
        new Run(
            new RunProperties(
                new RunFonts { Ascii = "Microsoft YaHei", HighAnsi = "Microsoft YaHei", EastAsia = "Microsoft YaHei" },
                new FontSize { Val = "18" },
                new Color { Val = "666666" }
            ),
            new Text("AI时代的经验萃取工作坊 | 学员手册 v1.0")
        )
    )
);
headerPart.Header.Save();

var footerPart = mainPart.AddNewPart<FooterPart>();
footerPart.Footer = new Footer(
    new Paragraph(
        new ParagraphProperties(
            new Justification { Val = JustificationValues.Center }
        ),
        new Run(
            new RunProperties(
                new RunFonts { Ascii = "Microsoft YaHei", HighAnsi = "Microsoft YaHei", EastAsia = "Microsoft YaHei" },
                new FontSize { Val = "18" },
                new Color { Val = "666666" }
            ),
            new Text("第 ")
        ),
        new Run(
            new RunProperties(
                new RunFonts { Ascii = "Microsoft YaHei", HighAnsi = "Microsoft YaHei", EastAsia = "Microsoft YaHei" },
                new FontSize { Val = "18" },
                new Color { Val = "666666" }
            ),
            new FieldChar { FieldCharType = FieldCharValues.Begin }
        ),
        new Run(
            new RunProperties(
                new RunFonts { Ascii = "Microsoft YaHei", HighAnsi = "Microsoft YaHei", EastAsia = "Microsoft YaHei" },
                new FontSize { Val = "18" },
                new Color { Val = "666666" }
            ),
            new FieldCode(" PAGE ")
        ),
        new Run(
            new RunProperties(
                new RunFonts { Ascii = "Microsoft YaHei", HighAnsi = "Microsoft YaHei", EastAsia = "Microsoft YaHei" },
                new FontSize { Val = "18" },
                new Color { Val = "666666" }
            ),
            new FieldChar { FieldCharType = FieldCharValues.Separate }
        ),
        new Run(
            new RunProperties(
                new RunFonts { Ascii = "Microsoft YaHei", HighAnsi = "Microsoft YaHei", EastAsia = "Microsoft YaHei" },
                new FontSize { Val = "18" },
                new Color { Val = "666666" }
            ),
            new Text("1")
        ),
        new Run(
            new RunProperties(
                new RunFonts { Ascii = "Microsoft YaHei", HighAnsi = "Microsoft YaHei", EastAsia = "Microsoft YaHei" },
                new FontSize { Val = "18" },
                new Color { Val = "666666" }
            ),
            new FieldChar { FieldCharType = FieldCharValues.End }
        ),
        new Run(
            new RunProperties(
                new RunFonts { Ascii = "Microsoft YaHei", HighAnsi = "Microsoft YaHei", EastAsia = "Microsoft YaHei" },
                new FontSize { Val = "18" },
                new Color { Val = "666666" }
            ),
            new Text(" 页")
        )
    )
);
footerPart.Footer.Save();

var sectPr = new SectionProperties();
sectPr.Append(new HeaderReference { Type = HeaderFooterValues.Default, Id = mainPart.GetIdOfPart(headerPart) });
sectPr.Append(new FooterReference { Type = HeaderFooterValues.Default, Id = mainPart.GetIdOfPart(footerPart) });
sectPr.Append(new PageSize { Width = 11906U, Height = 16838U });
sectPr.Append(new PageMargin { Top = 1440, Bottom = 1440, Left = 1440U, Right = 1440U, Header = 720U, Footer = 720U });

// ---- HELPER FUNCTIONS ----
Paragraph CreateParagraph(string text, string styleId = "Normal", bool bold = false, string color = "000000", string fontSize = "24")
{
    var runProps = new RunProperties(
        new RunFonts { Ascii = "Microsoft YaHei", HighAnsi = "Microsoft YaHei", EastAsia = "Microsoft YaHei" },
        new FontSize { Val = fontSize }
    );
    if (bold) runProps.Append(new Bold());
    if (color != "000000") runProps.Append(new Color { Val = color });

    return new Paragraph(
        new ParagraphProperties(new ParagraphStyleId { Val = styleId }),
        new Run(runProps, new Text(text) { Space = SpaceProcessingModeValues.Preserve })
    );
}

Paragraph CreateHeading1(string text) => CreateParagraph(text, "Heading1");
Paragraph CreateHeading2(string text) => CreateParagraph(text, "Heading2");
Paragraph CreateHeading3(string text) => CreateParagraph(text, "Heading3");

Table CreateSimpleTable(bool hasHeader, params string[][] rows)
{
    var table = new Table();
    table.Append(new TableProperties(
        new TableWidth { Width = "5000", Type = TableWidthUnitValues.Pct },
        new TableBorders(
            new TopBorder { Val = BorderValues.Single, Size = 6, Color = "2E75B6" },
            new BottomBorder { Val = BorderValues.Single, Size = 6, Color = "2E75B6" },
            new LeftBorder { Val = BorderValues.Single, Size = 6, Color = "2E75B6" },
            new RightBorder { Val = BorderValues.Single, Size = 6, Color = "2E75B6" },
            new InsideHorizontalBorder { Val = BorderValues.Single, Size = 4, Color = "CCCCCC" },
            new InsideVerticalBorder { Val = BorderValues.Single, Size = 4, Color = "CCCCCC" }
        )
    ));
    var grid = new TableGrid();
    if (rows.Length > 0)
        for (int i = 0; i < rows[0].Length; i++)
            grid.Append(new GridColumn { Width = "0" });
    table.Append(grid);

    bool headerDone = !hasHeader;
    foreach (var row in rows)
    {
        var tr = new TableRow();
        if (hasHeader && !headerDone)
        {
            tr.Append(new TableRowProperties(new TableHeader()));
            headerDone = true;
        }
        foreach (var cellText in row)
        {
            var tc = new TableCell();
            tc.Append(new TableCellProperties(
                new TableCellWidth { Width = "0", Type = TableWidthUnitValues.Auto },
                new Shading { Fill = "FFFFFF" }
            ));
            tc.Append(new Paragraph(
                new ParagraphProperties(new SpacingBetweenLines { After = "0" }),
                new Run(
                    new RunProperties(
                        new RunFonts { Ascii = "Microsoft YaHei", HighAnsi = "Microsoft YaHei", EastAsia = "Microsoft YaHei" },
                        new FontSize { Val = "20" }
                    ),
                    new Text(cellText) { Space = SpaceProcessingModeValues.Preserve }
                )
            ));
            tr.Append(tc);
        }
        table.Append(tr);
    }
    return table;
}

Table CreateFormTable(string[] headers, int dataRowCount)
{
    var table = new Table();
    table.Append(new TableProperties(
        new TableWidth { Width = "5000", Type = TableWidthUnitValues.Pct },
        new TableBorders(
            new TopBorder { Val = BorderValues.Single, Size = 6, Color = "2E75B6" },
            new BottomBorder { Val = BorderValues.Single, Size = 6, Color = "2E75B6" },
            new LeftBorder { Val = BorderValues.Single, Size = 6, Color = "2E75B6" },
            new RightBorder { Val = BorderValues.Single, Size = 6, Color = "2E75B6" },
            new InsideHorizontalBorder { Val = BorderValues.Single, Size = 4, Color = "CCCCCC" },
            new InsideVerticalBorder { Val = BorderValues.Single, Size = 4, Color = "CCCCCC" }
        )
    ));
    var grid = new TableGrid();
    foreach (var _ in headers) grid.Append(new GridColumn { Width = "0" });
    table.Append(grid);

    var headerRow = new TableRow();
    headerRow.Append(new TableRowProperties(new TableHeader()));
    foreach (var h in headers)
    {
        var tc = new TableCell();
        tc.Append(new TableCellProperties(new Shading { Fill = "2E75B6" }));
        tc.Append(new Paragraph(
            new ParagraphProperties(new Justification { Val = JustificationValues.Center }),
            new Run(new RunProperties(new Bold(), new Color { Val = "FFFFFF" }, new FontSize { Val = "20" }), new Text(h))
        ));
        headerRow.Append(tc);
    }
    table.Append(headerRow);

    for (int i = 0; i < dataRowCount; i++)
    {
        var tr = new TableRow();
        for (int j = 0; j < headers.Length; j++)
        {
            var tc = new TableCell();
            tc.Append(new TableCellProperties(new Shading { Fill = "FFFFFF" }));
            tc.Append(new Paragraph(
                new ParagraphProperties(new SpacingBetweenLines { After = "0" }),
                new Run(new RunProperties(new FontSize { Val = "20" }, new Text("")))
            ));
            tr.Append(tc);
        }
        table.Append(tr);
    }
    return table;
}

Paragraph CreateHighlightBox(string highlightText, string content)
{
    return new Paragraph(
        new ParagraphProperties(
            new ParagraphBorders(
                new LeftBorder { Val = BorderValues.Single, Size = 24, Color = "2E75B6", Space = 4 }
            ),
            new Indentation { Left = "240" },
            new SpacingBetweenLines { After = "160" }
        ),
        new Run(
            new RunProperties(new Bold(), new FontSize { Val = "24" }, new Color { Val = "2E75B6" }),
            new Text(highlightText)
        ),
        new Run(
            new RunProperties(new FontSize { Val = "24" }, new Color { Val = "333333" }),
            new Text(content)
        )
    );
}

// ============================================================
// DOCUMENT CONTENT
// ============================================================

// COVER PAGE
body.Append(CreateParagraph("", "Normal"));
body.Append(CreateParagraph("", "Normal"));
body.Append(CreateParagraph("", "Normal"));
body.Append(CreateParagraph("", "Normal"));
body.Append(CreateParagraph("", "Normal"));

body.Append(new Paragraph(
    new ParagraphProperties(
        new Justification { Val = JustificationValues.Center },
        new SpacingBetweenLines { After = "0", Line = "480", LineRule = LineSpacingRuleValues.Exact }
    ),
    new Run(
        new RunProperties(
            new RunFonts { Ascii = "Microsoft YaHei", HighAnsi = "Microsoft YaHei", EastAsia = "Microsoft YaHei" },
            new FontSize { Val = "72" },
            new Bold(),
            new Color { Val = "1F3864" }
        ),
        new Text("学员手册")
    )
));

body.Append(new Paragraph(
    new ParagraphProperties(
        new Justification { Val = JustificationValues.Center },
        new SpacingBetweenLines { Before = "480", After = "240" }
    ),
    new Run(
        new RunProperties(
            new RunFonts { Ascii = "Microsoft YaHei", HighAnsi = "Microsoft YaHei", EastAsia = "Microsoft YaHei" },
            new FontSize { Val = "40" },
            new Bold(),
            new Color { Val = "2E75B6" }
        ),
        new Text("内萃外取并重——经验萃取方法与工具两天实战工作坊")
    )
));

body.Append(CreateParagraph("", "Normal"));
body.Append(CreateParagraph("", "Normal"));

body.Append(new Paragraph(
    new ParagraphProperties(
        new Justification { Val = JustificationValues.Center },
        new SpacingBetweenLines { Before = "480", After = "120" }
    ),
    new Run(
        new RunProperties(
            new RunFonts { Ascii = "Microsoft YaHei", HighAnsi = "Microsoft YaHei", EastAsia = "Microsoft YaHei" },
            new FontSize { Val = "28" },
            new Color { Val = "333333" }
        ),
        new Text("主讲人：罗宏伟")
    )
));

body.Append(new Paragraph(
    new ParagraphProperties(
        new Justification { Val = JustificationValues.Center },
        new SpacingBetweenLines { After = "120" }
    ),
    new Run(
        new RunProperties(
            new RunFonts { Ascii = "Microsoft YaHei", HighAnsi = "Microsoft YaHei", EastAsia = "Microsoft YaHei" },
            new FontSize { Val = "28" },
            new Color { Val = "333333" }
        ),
        new Text("手册版本：v1.0")
    )
));

body.Append(CreateParagraph("", "Normal"));

body.Append(new Paragraph(
    new ParagraphProperties(
        new Justification { Val = JustificationValues.Center },
        new SpacingBetweenLines { After = "80" }
    ),
    new Run(
        new RunProperties(
            new RunFonts { Ascii = "Microsoft YaHei", HighAnsi = "Microsoft YaHei", EastAsia = "Microsoft YaHei" },
            new FontSize { Val = "24" },
            new Color { Val = "666666" }
        ),
        new Text("适用对象：培训管理者、知识管理专员、企业内训师、业务骨干与技术骨干、组织发展从业者")
    )
));

body.Append(new Paragraph(
    new ParagraphProperties(
        new Justification { Val = JustificationValues.Center },
        new SpacingBetweenLines { After = "80" }
    ),
    new Run(
        new RunProperties(
            new RunFonts { Ascii = "Microsoft YaHei", HighAnsi = "Microsoft YaHei", EastAsia = "Microsoft YaHei" },
            new FontSize { Val = "24" },
            new Color { Val = "666666" }
        ),
        new Text("课程形式：线下工作坊（两天）")
    )
));

body.Append(new Paragraph(new ParagraphProperties(new PageBreakBefore())));

// TABLE OF CONTENTS
body.Append(CreateHeading1("目录"));
body.Append(CreateParagraph(""));
body.Append(CreateParagraph("写在前面：这本手册怎么用", "Normal", false, "333333", "24"));
body.Append(CreateParagraph("课程地图", "Normal", false, "333333", "24"));
body.Append(CreateParagraph("核心方法论速览：定位先行的双源萃取模型", "Normal", false, "333333", "24"));
body.Append(CreateParagraph("模块一：认知重构——AI时代的经验萃取方法论", "Normal", false, "333333", "24"));
body.Append(CreateParagraph("模块二：内萃——从内部专家身上萃取经验", "Normal", false, "333333", "24"));
body.Append(CreateParagraph("模块三：外取——站在外部经验上少走弯路", "Normal", false, "333333", "24"));
body.Append(CreateParagraph("模块四：定位与产出——让萃取成果落到该落的地方", "Normal", false, "333333", "24"));
body.Append(CreateParagraph("模块五：落地与延展——让萃取能力可持续使用", "Normal", false, "333333", "24"));
body.Append(CreateParagraph("综合练习：跨模块案例", "Normal", false, "333333", "24"));
body.Append(CreateParagraph("附录", "Normal", false, "333333", "24"));

body.Append(new Paragraph(new ParagraphProperties(new PageBreakBefore())));

// 写在前面
body.Append(CreateHeading1("写在前面：这本手册怎么用"));
body.Append(CreateParagraph(""));
body.Append(CreateParagraph("这本手册不是用来「读」的，是用来「填」的。", "Normal", false, "000000", "24"));
body.Append(CreateParagraph(""));
body.Append(CreateParagraph("课程的核心逻辑是四层：定位先行、双源并行、形式适配、人控真伪。这四层逻辑会贯穿两天的全部内容——从你打开这本手册的第一页，到第二天交付一份经过验证的萃取成果，每一步都在这四层逻辑里往前走一格。", "Normal", false, "000000", "24"));
body.Append(CreateParagraph(""));
body.Append(CreateParagraph("手册里每一节都包含三个部分：", "Normal", false, "000000", "24"));
body.Append(CreateParagraph(""));
body.Append(CreateParagraph("核心内容——把大纲里的标题展开成可以理解、可以操作的知识点，包含定义、逻辑、步骤和容易踩的坑。", "Normal", false, "000000", "24"));
body.Append(CreateParagraph(""));
body.Append(CreateParagraph("配套表单——课堂上现场填写，不是课后作业。表单填得越实，你带走的东西就越多。", "Normal", false, "000000", "24"));
body.Append(CreateParagraph(""));
body.Append(CreateParagraph("本节/本模块练习——用来检验你是不是真的理解了，而不只是听懂了。参考答案在手册最后的附录中，建议先自己做完再翻看。", "Normal", false, "000000", "24"));
body.Append(CreateParagraph(""));
body.Append(CreateParagraph("两天结束时，你应该拿走两样东西：一份经过验证、可以直接用的轻量萃取成果，和一套可以课后持续扩展的提示词与技能包工具。这本手册，就是连接这两样东西的脚手架。", "Normal", false, "000000", "24"));

body.Append(new Paragraph(new ParagraphProperties(new PageBreakBefore())));

// 课程地图
body.Append(CreateHeading1("课程地图"));
body.Append(CreateParagraph(""));

body.Append(CreateSimpleTable(false, new[]
{
    new[] { "模块", "对应日程", "核心产出" },
    new[] { "模块一：认知重构", "第一天上午第一节", "AI与人工分工清单、个人提示词资产库雏形" },
    new[] { "模块二：内萃", "第一天上午第二节至下午第一节前半", "工作任务拆解清单、访谈与反弹验证记录、素材分类清单" },
    new[] { "模块三：外取", "第一天下午第一节后半至第二天上午第一节前半", "检索路径清单、信息源头核验记录、边界条件分析表、外取迁移应用方案" },
    new[] { "模块四：定位与产出", "第二天上午第一节后半至下午第一节前半", "萃取定位表、成果形式选型记录、轻量成果初稿与终稿" },
    new[] { "模块五：落地与延展", "第二天下午第二节", "发布前自检记录、提示词工具包应用规划" }
}));

body.Append(new Paragraph(new ParagraphProperties(new PageBreakBefore())));

// 核心方法论速览
body.Append(CreateHeading1("核心方法论速览：定位先行的双源萃取模型"));
body.Append(CreateParagraph(""));
body.Append(CreateParagraph("在进入第一个模块之前，先建立一个总览框架，后面十七节的内容都是在往这个框架里填血肉。", "Normal", false, "000000", "24"));
body.Append(CreateParagraph(""));

body.Append(CreateHeading2("第一层：定位先行"));
body.Append(CreateParagraph("每一次萃取动作开始之前，先回答清楚为谁萃取、为什么萃取、在什么情境下用。定位不清楚，后面所有方法和工具都用不对地方。", "Normal", false, "000000", "24"));
body.Append(CreateParagraph(""));

body.Append(CreateHeading2("第二层：双源并行"));
body.Append(CreateParagraph("经验有两个来源：内部专家身上沉淀下来的隐性经验（内萃），外部标杆、行业实践中可以借鉴的显性经验（外取）。两条路径方法不同、风险不同，要分别掌握，不能用一套方法处理两种来源。", "Normal", false, "000000", "24"));
body.Append(CreateParagraph(""));

body.Append(CreateHeading2("第三层：形式适配"));
body.Append(CreateParagraph("同样一份萃取出来的内容，做成课程、案例、手册、模板、话术、清单、流程还是表单，效果天差地别。形式必须服务于定位，不是先有形式再去凑内容。", "Normal", false, "000000", "24"));
body.Append(CreateParagraph(""));

body.Append(CreateHeading2("第四层：人控真伪"));
body.Append(CreateParagraph("AI能让转写、归纳、生成的速度大幅提升，但萃取出来的内容是不是真实、是不是符合边界、能不能直接用，这道关只能由人来把。", "Normal", false, "000000", "24"));

body.Append(new Paragraph(new ParagraphProperties(new PageBreakBefore())));

// ============================================================
// MODULE 1
// ============================================================
body.Append(CreateHeading1("模块一：认知重构——AI时代的经验萃取方法论"));
body.Append(CreateParagraph(""));

body.Append(CreateHeading2("模块学习目标"));
body.Append(CreateParagraph("完成本模块学习后，你应当能够：", "Normal", false, "000000", "24"));
body.Append(CreateParagraph("1. 准确说出传统萃取的三个卡点，以及AI时代真正改变和没有改变的部分各是什么", "Normal", false, "000000", "24"));
body.Append(CreateParagraph("2. 在自己的实际工作中，划分出哪些环节可以交给AI、哪些环节必须自己把关", "Normal", false, "000000", "24"));
body.Append(CreateParagraph("3. 完成一次结构化提示词的实际调用，并建立起个人提示词资产库的雏形", "Normal", false, "000000", "24"));
body.Append(CreateParagraph("预计学习时长：课堂讲授与实操约90分钟", "Normal", false, "666666", "24"));
body.Append(CreateParagraph(""));

body.Append(CreateHeading2("一、新旧萃取逻辑的分野"));
body.Append(CreateParagraph(""));

body.Append(CreateHeading3("核心内容"));
body.Append(CreateParagraph("经验萃取这件事，从来不是新问题。任何一个运转超过三五年的组织，内部都沉淀着大量没人系统整理过的经验——老师傅怎么处理设备异响、销售冠军怎么应对客户的临门犹豫、客服骨干怎么三句话安抚一个情绪激动的客户。这些经验一直都在产生，但有一个残酷的现实：沉淀的速度永远赶不上流失的速度。人员流动、业务迭代、组织重组，都会让这些经验随着人的离开而消失，而新人只能重新摸索一遍，重复同样的试错成本。", "Normal", false, "000000", "24"));
body.Append(CreateParagraph(""));
body.Append(CreateParagraph("传统的萃取方式，长期卡在三个地方走不出来：", "Normal", false, "000000", "24"));
body.Append(CreateParagraph("第一，靠人力转写。访谈录音要靠人一字一句听写，一场一小时的访谈往往要花三到四个小时整理成文字稿，效率极低，导致很多组织干脆放弃系统化访谈，遇到问题临时找人问。", "Normal", false, "000000", "24"));
body.Append(CreateParagraph("第二，靠个人经验判断。负责萃取的人本身的专业判断力参差不齐，同样一段专家口述，不同的萃取者整理出来的结果可能完全不同，质量没有底线。", "Normal", false, "000000", "24"));
body.Append(CreateParagraph("第三，靠运气找到愿意讲的专家。很多隐性经验的拥有者并不擅长表达，也不一定愿意配合访谈，萃取者常常要碰运气才能找到既懂又愿意讲的专家。", "Normal", false, "000000", "24"));
body.Append(CreateParagraph(""));
body.Append(CreateParagraph("AI的出现，确实改变了这套逻辑里的一部分——转写、归纳、初稿生成的门槛被大幅拉低。一小时的录音几分钟内就能转成文字，几千字的访谈记录几十秒就能提炼出要点，一份案例或话术的初稿几分钟就能生成。这是实打实的效率跃迁。", "Normal", false, "000000", "24"));
body.Append(CreateParagraph(""));
body.Append(CreateParagraph("但AI时代依然有一部分东西没有改变：真实性判断、专业边界、价值取舍，依然只能靠人。AI可以告诉你专家说了什么、说了多少遍、用了什么词，但它判断不了这段话是不是真的反映了专家的真实做法，判断不了这个经验放到另一个场景里是不是依然成立，更判断不了在十种可能的呈现方式里，哪一种对这家企业、这个岗位是最合适的。", "Normal", false, "000000", "24"));
body.Append(CreateParagraph(""));
body.Append(CreateParagraph("本课程要建立的能力地图，正是沿着「方法论到工具、内萃到外取、产出到验真」这条主线展开，两天之后你会拥有一套完整的、可以反复使用的萃取流程，而不只是一次性的成果。", "Normal", false, "000000", "24"));
body.Append(CreateParagraph(""));

body.Append(CreateHighlightBox("重点提示：", "判断一个萃取环节该不该交给AI，最简单的检验标准是问自己一句话——「这件事做错了，后果是谁来承担？」如果答案是「承担不起」，这个环节就必须由人来把关。"));
body.Append(CreateParagraph(""));

body.Append(CreateHeading2("二、AI能做什么，人必须守住什么"));
body.Append(CreateParagraph(""));
body.Append(CreateHeading3("核心内容"));
body.Append(CreateParagraph("把「AI负责快，人负责准」这句话拆开看，可以具体落到四类环节上。", "Normal", false, "000000", "24"));
body.Append(CreateParagraph(""));
body.Append(CreateParagraph("AI可以大幅提效的环节：录音转写、要点归纳、初稿生成、格式转化、批量输出。这些环节的共同特点是——有明确的输入和相对标准化的处理逻辑，正确与否可以被快速核对，即便出错，修正成本也不高。", "Normal", false, "000000", "24"));
body.Append(CreateParagraph(""));
body.Append(CreateParagraph("AI替代不了的环节：方向判断（这次萃取该往哪个方向走）、真实性核验（专家说的是不是真的这么做的）、专业准确性把关（术语、流程是否符合行业实际）、边界识别（这个经验在什么条件下才成立）。这些环节的共同特点是——输入是模糊的、依赖经验背景的判断，做错了影响的不是效率而是可信度，一旦发布出去造成误导，纠错成本极高。", "Normal", false, "000000", "24"));
body.Append(CreateParagraph(""));
body.Append(CreateParagraph("一条简单的分工准则可以贯穿全程：AI负责快，人负责准。把这条准则用在每一个具体环节上，你会发现绝大多数萃取工作中的争议——「这一步到底该不该用AI」——其实都能被快速回答。", "Normal", false, "000000", "24"));
body.Append(CreateParagraph(""));

body.Append(CreateHeading3("配套表单"));
body.Append(CreateParagraph("表单1.1：AI与人工分工清单（个人版）", "Normal", true, "2E75B6", "24"));
body.Append(CreateParagraph("填写说明：结合你日常工作中实际承担过的萃取相关任务（访谈整理、案例编写、手册撰写等），逐项判断分工。", "Normal", false, "666666", "20"));
body.Append(CreateParagraph(""));

body.Append(CreateFormTable(new[] { "工作环节", "当前做法", "可否交给AI", "必须人工把关的理由" }, 6));
body.Append(CreateParagraph(""));

body.Append(CreateHeading3("本节练习"));
body.Append(CreateParagraph("练习1.1（判断题）：AI能够完全替代人工进行萃取内容的真实性判断。（对 / 错）", "Normal", false, "000000", "24"));
body.Append(CreateParagraph("_______________________________________________", "Normal", false, "000000", "24"));
body.Append(CreateParagraph(""));
body.Append(CreateParagraph("练习1.2（选择题）：以下哪一项最适合优先交给AI处理？", "Normal", false, "000000", "24"));
body.Append(CreateParagraph("A. 判断专家口述的内容是否符合企业实际制度", "Normal", false, "000000", "24"));
body.Append(CreateParagraph("B. 把一小时访谈录音转写成文字稿", "Normal", false, "000000", "24"));
body.Append(CreateParagraph("C. 决定某段经验的适用边界", "Normal", false, "000000", "24"));
body.Append(CreateParagraph("D. 判断某份对标案例是否值得迁移", "Normal", false, "000000", "24"));
body.Append(CreateParagraph(""));
body.Append(CreateParagraph("练习1.3（情境简答）：某企业的内训师在转写完一场专家访谈录音后，直接把AI归纳出的要点当作最终萃取成果发布给学员使用。请说明这种做法存在什么风险，应该在哪个环节补上人工核验。", "Normal", false, "000000", "24"));
body.Append(CreateParagraph("_______________________________________________", "Normal", false, "000000", "24"));
body.Append(CreateParagraph("_______________________________________________", "Normal", false, "000000", "24"));

body.Append(CreateParagraph(""));
body.Append(CreateHeading2("三、不讲原理，直接能用：提示词与技能包速览"));
body.Append(CreateParagraph(""));
body.Append(CreateHeading3("核心内容"));
body.Append(CreateParagraph("很多人对「提示词工程」望而生畏，觉得是一门需要专门学习的技术。本课程不展开提示词背后的原理，重点放在两件事上：怎么用现成的提示词解决具体问题，以及怎么把用顺手的提示词沉淀成自己的资产。", "Normal", false, "000000", "24"));
body.Append(CreateParagraph(""));
body.Append(CreateParagraph("结构化提示词的作用，本质上是让AI「听懂」具体场景，而不是靠你反复调教、反复纠正才能猜到你想要什么。一条结构化的提示词通常会交代清楚：要解决什么问题、素材是什么、希望输出成什么形式、有哪些限制条件。把这四件事讲清楚，AI给出的结果可用度会大幅提升。", "Normal", false, "000000", "24"));
body.Append(CreateParagraph(""));
body.Append(CreateParagraph("现场可以直接复用的技能包，包括但不限于：文档摘要技能（把长文档压缩成结构化要点）、音频转文字与纪要生成技能（把录音直接转成带要点标注的纪要）、PPT骨架生成技能（把一份大纲快速转成可编辑的演示框架）、图片内容解读技能（把截图、扫描件中的文字和结构信息提取出来）。这些技能包不需要你理解背后的实现逻辑，拿来就能用。", "Normal", false, "000000", "24"));
body.Append(CreateParagraph(""));
body.Append(CreateParagraph("提示词资产库的建立方法也很简单：每用顺手一条提示词，就用「场景名称、适用工具、提示词全文、注意事项」四个字段记录下来。坚持记录两三周，你会拥有一份真正属于自己的、不断生长的工具库，而不是每次都要重新摸索怎么问AI。", "Normal", false, "000000", "24"));
body.Append(CreateParagraph(""));

body.Append(CreateHeading3("配套表单"));
body.Append(CreateParagraph("表单1.2：个人提示词资产库（雏形）", "Normal", true, "2E75B6", "24"));
body.Append(CreateParagraph("填写说明：本节实操环节，请现场体验一次技能包调用，并把效果较好的一条提示词记录下来；同时贡献一条至团队共享库。", "Normal", false, "666666", "20"));
body.Append(CreateParagraph(""));

body.Append(CreateFormTable(new[] { "场景名称", "适用工具/技能包", "提示词全文（核心指令）", "注意事项" }, 3));
body.Append(CreateParagraph(""));

body.Append(CreateParagraph("团队共享提示词记录单（1条）", "Normal", true, "2E75B6", "24"));
body.Append(CreateParagraph("贡献人：_______________  场景：_______________", "Normal", false, "000000", "24"));
body.Append(CreateParagraph("提示词全文：", "Normal", false, "000000", "24"));
body.Append(CreateParagraph("_______________________________________________", "Normal", false, "000000", "24"));
body.Append(CreateParagraph("_______________________________________________", "Normal", false, "000000", "24"));

body.Append(CreateParagraph(""));
body.Append(CreateHeading2("模块一练习"));
body.Append(CreateParagraph("练习1.5（判断题）：一条提示词写得越复杂、考虑的情况越多，效果就一定越好。（对 / 错）", "Normal", false, "000000", "24"));
body.Append(CreateParagraph(""));
body.Append(CreateParagraph("练习1.6（简答）：请用「AI负责快，人负责准」这条准则，重新评估你过去做过的一次萃取工作，指出当时哪个该由人把关的环节被忽略了。", "Normal", false, "000000", "24"));
body.Append(CreateParagraph("_______________________________________________", "Normal", false, "000000", "24"));
body.Append(CreateParagraph("_______________________________________________", "Normal", false, "000000", "24"));
body.Append(CreateParagraph(""));
body.Append(CreateParagraph("练习1.7（实操）：现场体验任意一个技能包（文档摘要 / 音频转纪要 / PPT骨架生成 / 图片内容解读），并简要记录使用效果。", "Normal", false, "000000", "24"));
body.Append(CreateParagraph("使用的技能包：_______________  效果评价：_______________", "Normal", false, "000000", "24"));

body.Append(CreateParagraph(""));
body.Append(CreateHeading2("本模块知识框架"));
body.Append(CreateParagraph("• 经验萃取的老问题：沉淀速度赶不上流失速度", "Normal", false, "000000", "24"));
body.Append(CreateParagraph("• 传统萃取三个卡点：人力转写、个人经验判断、靠运气找专家", "Normal", false, "000000", "24"));
body.Append(CreateParagraph("• AI改变的：转写、归纳、初稿生成", "Normal", false, "000000", "24"));
body.Append(CreateParagraph("• AI没改变的：真实性判断、专业边界、价值取舍", "Normal", false, "000000", "24"));
body.Append(CreateParagraph("• 分工准则：AI负责快，人负责准", "Normal", false, "000000", "24"));
body.Append(CreateParagraph("• 提示词资产化：场景名称、适用工具、提示词全文、注意事项", "Normal", false, "000000", "24"));

body.Append(new Paragraph(new ParagraphProperties(new PageBreakBefore())));

// ============================================================
// MODULE 2
// ============================================================
body.Append(CreateHeading1("模块二：内萃——从内部专家身上萃取经验"));
body.Append(CreateParagraph(""));

body.Append(CreateHeading2("模块学习目标"));
body.Append(CreateParagraph("完成本模块学习后，你应当能够：", "Normal", false, "000000", "24"));
body.Append(CreateParagraph("1. 运用工作任务分析的逻辑，把一项隐性经验拆解到可执行动作层级", "Normal", false, "000000", "24"));
body.Append(CreateParagraph("2. 运用反弹技术完成一次结构化专家访谈，并验证整理结果没有失真", "Normal", false, "000000", "24"));
body.Append(CreateParagraph("3. 把访谈录音转化为可直接使用的分类素材", "Normal", false, "000000", "24"));
body.Append(CreateParagraph("预计学习时长：课堂讲授与实操约150分钟（含两两访谈环节）", "Normal", false, "666666", "24"));
body.Append(CreateParagraph(""));

body.Append(CreateHeading2("四、工作任务分析：把隐性经验显性化的结构化方法"));
body.Append(CreateParagraph(""));
body.Append(CreateHeading3("核心内容"));
body.Append(CreateParagraph("萃取经验时最容易犯的一个错误，是直接问专家「你的经验是什么」。这个问题听起来合理，实际上很难得到有用的答案——人很难凭空总结自己的隐性知识。一个干了十五年的设备维修师傅，让他直接说出「你的经验是什么」，他大概率只能说出「多看多练」「凭手感」这类无法落地的话，并不是他藏私，而是隐性经验本身就不是以「总结句」的形式存在于他脑子里的，而是嵌在一连串具体动作和判断里的。", "Normal", false, "000000", "24"));
body.Append(CreateParagraph(""));
body.Append(CreateParagraph("工作任务分析要解决的，正是这个问题。它的基本逻辑是先拆任务，再拆动作，最后拆判断点：", "Normal", false, "000000", "24"));
body.Append(CreateParagraph("第一步，把一个岗位或场景拆成若干个相对独立的工作任务（比如「处理设备异响」是一个任务）。", "Normal", false, "000000", "24"));
body.Append(CreateParagraph("第二步，把每个任务拆成具体的操作动作序列（先听声音判断大致部位，再触摸感受震动，再用工具检测具体读数……）。", "Normal", false, "000000", "24"));
body.Append(CreateParagraph("第三步，在每个动作之间找出关键判断点——专家是依据什么信息，决定下一步该怎么做的（如果震动幅度超过某个手感阈值，就直接停机检查，而不是继续观察……）。这一层判断点，往往才是真正值钱的隐性经验。", "Normal", false, "000000", "24"));
body.Append(CreateParagraph(""));
body.Append(CreateParagraph("任务颗粒度的把握需要练习：拆得太粗（比如「处理异常」四个字）没法用，拆得太细（精细到每一秒的动作）又没人愿意看、也没必要。一个实用的标准是——拆到能让一个新手照着做、在大多数情况下不出大错的颗粒度即可。", "Normal", false, "000000", "24"));
body.Append(CreateParagraph(""));

body.Append(CreateHeading3("配套表单"));
body.Append(CreateParagraph("表单2.1：工作任务拆解清单（初稿）", "Normal", true, "2E75B6", "24"));
body.Append(CreateParagraph("填写说明：选定一个你熟悉的岗位或场景，按「任务环节—具体动作—关键判断点」三层完成拆解。", "Normal", false, "666666", "20"));
body.Append(CreateParagraph(""));

body.Append(CreateFormTable(new[] { "任务环节（大）", "具体动作（中）", "关键判断点（细）" }, 5));

body.Append(CreateParagraph(""));
body.Append(CreateHeading2("五、反弹技术：如何提问，才能把「凭经验」问成「可执行动作」"));
body.Append(CreateParagraph(""));
body.Append(CreateHeading3("核心内容"));
body.Append(CreateParagraph("反弹技术的核心，不是听专家讲完就结束，而是带着追问「弹」回去验证。它解决的是一个普遍现象：专家说的第一遍答案，往往是被高度压缩过的结论，而不是真实的操作过程。要把这层压缩打开，需要一套结构化的提问清单和反复确认的动作。", "Normal", false, "000000", "24"));
body.Append(CreateParagraph(""));
body.Append(CreateParagraph("结构化提问清单可以围绕四个问题展开：这件事多久遇到一次（确认这是高频还是低频场景，决定萃取的优先级）、最容易在哪一步出问题（定位风险点和真正需要萃取的难点）、你自己怎么分步处理（引导专家进入具体动作描述，而不是停留在结论）、你怎么判断做对了（挖出隐藏在动作背后的判断标准）。", "Normal", false, "000000", "24"));
body.Append(CreateParagraph(""));
body.Append(CreateParagraph("追问技巧的关键，是面对专家说「我就是凭感觉」这类回答时不轻易放过，而是继续往下问——「这种感觉具体是什么提醒了你？」「上次有没有一次感觉判断错了，后来你是怎么发现的？」这类追问往往能把模糊的「凭感觉」，问出具体可复制的动作线索。", "Normal", false, "000000", "24"));
body.Append(CreateParagraph(""));
body.Append(CreateParagraph("最后一步是反弹验证：把整理好的内容，再讲给专家听一遍，请他确认有没有失真、有没有遗漏关键判断。这一步常被省略，但恰恰是保证萃取质量最关键的一步——没有经过反弹确认的整理结果，本质上只是萃取者自己的理解，不能算作专家经验。", "Normal", false, "000000", "24"));
body.Append(CreateParagraph(""));

body.Append(CreateHighlightBox("重点提示：", "反弹验证不是简单问「对不对」，而是把整理后的具体动作和判断点逐条复述，请专家逐条确认。笼统地问「对不对」，专家很容易随口说「对」，起不到验证作用。"));
body.Append(CreateParagraph(""));

body.Append(CreateHeading3("配套表单"));
body.Append(CreateParagraph("表单2.2：结构化访谈提问清单与反弹验证记录", "Normal", true, "2E75B6", "24"));
body.Append(CreateParagraph("填写说明：本节进行两两访谈，互为访谈者与被访谈专家，全程录音。访谈者按下方四个核心问题展开提问并记录追问内容，访谈结束后完成反弹验证。", "Normal", false, "666666", "20"));
body.Append(CreateParagraph(""));
body.Append(CreateParagraph("访谈对象：_______________  访谈场景：_______________", "Normal", false, "000000", "24"));
body.Append(CreateParagraph(""));

body.Append(CreateFormTable(new[] { "核心问题", "专家原始回答要点", "追问内容" }, 4));
body.Append(CreateParagraph(""));

body.Append(CreateParagraph("反弹验证记录", "Normal", true, "2E75B6", "24"));
body.Append(CreateParagraph("整理后向专家复述的内容要点：", "Normal", false, "000000", "24"));
body.Append(CreateParagraph("_______________________________________________", "Normal", false, "000000", "24"));
body.Append(CreateParagraph(""));
body.Append(CreateParagraph("专家确认结果（无误 / 有修正）：_______________", "Normal", false, "000000", "24"));
body.Append(CreateParagraph("修正说明：", "Normal", false, "000000", "24"));
body.Append(CreateParagraph("_______________________________________________", "Normal", false, "000000", "24"));

body.Append(CreateParagraph(""));
body.Append(CreateHeading2("六、从录音稿到可用素材：转写、分类、提炼"));
body.Append(CreateParagraph(""));
body.Append(CreateHeading3("核心内容"));
body.Append(CreateParagraph("访谈结束后，原始录音需要经过三道工序才能变成可用素材。", "Normal", false, "000000", "24"));
body.Append(CreateParagraph(""));
body.Append(CreateParagraph("第一道工序是录音转文字。AI辅助转写可以大幅缩短整理时间，但常见质量问题需要留意：专有名词识别错误（设备型号、专业术语）、方言或语速过快导致的漏字错字、多人交叉发言时的角色混淆。优化技巧包括：转写前提供专有名词清单、转写后优先核对专业术语密集的段落。", "Normal", false, "000000", "24"));
body.Append(CreateParagraph(""));
body.Append(CreateParagraph("第二道工序是素材三分类，把转写文字稿按内容性质拆分成三类：操作步骤类（明确的动作序列，比如「先做什么、再做什么」）、判断逻辑类（依据什么信息做什么决策，比如「如果……就……」）、话术表达类（专家原话中可以直接复用的表达方式，比如安抚客户的具体说法）。这三类素材后续会分别适配不同的成果形式——操作步骤类适合做成流程或清单，判断逻辑类适合做成案例或培训内容，话术表达类适合直接做成话术卡。", "Normal", false, "000000", "24"));
body.Append(CreateParagraph(""));
body.Append(CreateParagraph("第三道工序是AI辅助初步归类与人工复核。AI可以根据关键词和句式特征，把转写稿初步打上分类标签，但人工复核必须跟上——因为同一句话可能既包含操作步骤又隐含判断逻辑，AI容易只识别表面动作，漏掉背后的判断点，这一步必须由熟悉业务的人来纠偏。", "Normal", false, "000000", "24"));
body.Append(CreateParagraph(""));

body.Append(CreateHeading3("配套表单"));
body.Append(CreateParagraph("表单2.3：素材分类清单", "Normal", true, "2E75B6", "24"));
body.Append(CreateParagraph("填写说明：将本节访谈录音转写后，按三类素材进行分类，标注AI初步归类结果与人工复核后的最终结果。", "Normal", false, "666666", "20"));
body.Append(CreateParagraph(""));

body.Append(CreateFormTable(new[] { "素材内容摘要", "AI初步分类", "人工复核结果", "来源（访谈对象/环节）" }, 4));

body.Append(CreateParagraph(""));
body.Append(CreateHeading2("模块二练习"));
body.Append(CreateParagraph("练习2.1（简答）：为什么不能直接问专家「你的经验是什么」？请用工作任务分析的逻辑解释原因。", "Normal", false, "000000", "24"));
body.Append(CreateParagraph("_______________________________________________", "Normal", false, "000000", "24"));
body.Append(CreateParagraph("_______________________________________________", "Normal", false, "000000", "24"));
body.Append(CreateParagraph(""));
body.Append(CreateParagraph("练习2.2（情境案例）：访谈中专家说「这个我就是凭感觉判断的」，请写出你会用的两个追问句子，目的是把「凭感觉」问出具体可复制的动作。", "Normal", false, "000000", "24"));
body.Append(CreateParagraph("追问一：_______________________________________________", "Normal", false, "000000", "24"));
body.Append(CreateParagraph("追问二：_______________________________________________", "Normal", false, "000000", "24"));
body.Append(CreateParagraph(""));
body.Append(CreateParagraph("练习2.3（判断题）：反弹验证就是把录音原封不动地再放给专家听一遍。（对 / 错）", "Normal", false, "000000", "24"));
body.Append(CreateParagraph(""));
body.Append(CreateParagraph("练习2.4（实操）：选择你本节访谈获得的一段素材（或假设一段素材），完成一次素材三分类划分，并说明这段素材后续更适合做成哪种成果形式。", "Normal", false, "000000", "24"));
body.Append(CreateParagraph("_______________________________________________", "Normal", false, "000000", "24"));

body.Append(CreateParagraph(""));
body.Append(CreateHeading2("本模块知识框架"));
body.Append(CreateParagraph("• 工作任务分析三层：任务—动作—判断点", "Normal", false, "000000", "24"));
body.Append(CreateParagraph("• 颗粒度标准：能让新手照着做、大多数情况不出大错", "Normal", false, "000000", "24"));
body.Append(CreateParagraph("• 反弹技术四问：多久遇到一次、最容易哪一步出问题、自己怎么分步处理、怎么判断做对了", "Normal", false, "000000", "24"));
body.Append(CreateParagraph("• 反弹验证：复述整理结果，逐条请专家确认，而非笼统问「对不对」", "Normal", false, "000000", "24"));
body.Append(CreateParagraph("• 素材三分类：操作步骤类、判断逻辑类、话术表达类", "Normal", false, "000000", "24"));
body.Append(CreateParagraph("• AI初分类 + 人工复核，防止漏掉隐藏判断点", "Normal", false, "000000", "24"));

body.Append(new Paragraph(new ParagraphProperties(new PageBreakBefore())));

// ============================================================
// MODULE 3
// ============================================================
body.Append(CreateHeading1("模块三：外取——站在外部经验上少走弯路"));
body.Append(CreateParagraph(""));

body.Append(CreateHeading2("模块学习目标"));
body.Append(CreateParagraph("完成本模块学习后，你应当能够：", "Normal", false, "000000", "24"));
body.Append(CreateParagraph("1. 针对一个外取主题设计出可执行的检索路径", "Normal", false, "000000", "24"));
body.Append(CreateParagraph("2. 对一份外部资料完成信息源头核验，判断其可信度等级", "Normal", false, "000000", "24"));
body.Append(CreateParagraph("3. 拆解一个对标案例的边界条件，并完成一份迁移应用方案初稿", "Normal", false, "000000", "24"));
body.Append(CreateParagraph("预计学习时长：课堂讲授与实操约150分钟（横跨第一天下午与第二天上午）", "Normal", false, "666666", "24"));
body.Append(CreateParagraph(""));

body.Append(CreateHeading2("七、找得到：精准检索的路径与方法"));
body.Append(CreateParagraph(""));
body.Append(CreateHeading3("核心内容"));
body.Append(CreateParagraph("外取的第一个难题不是没有信息，而是信息太多，但能用的太少。", "Normal", false, "000000", "24"));
body.Append(CreateParagraph(""));
body.Append(CreateParagraph("检索路径设计的核心，是从一个模糊的主题出发，逐步拆解出具体的关键词组合和信息源类型，而不是直接把主题词丢进搜索框。一个可行的拆解顺序是：先明确「想了解的具体问题是什么」（不是「学华为」，而是「华为在某个具体环节怎么做绩效校准」），再拆出与这个具体问题相关的关键词组合，最后根据问题性质匹配信息源类型。", "Normal", false, "000000", "24"));
body.Append(CreateParagraph(""));
body.Append(CreateParagraph("四类信息源各有适用场景与局限：公开资料（企业官网、公开演讲、年报）权威度高但披露的往往是结论而非过程；行业报告（第三方研究机构、咨询公司报告）系统性强但存在立场倾向，需要交叉验证；案例库（教学案例库、行业案例集）操作细节丰富但案例本身可能存在时间滞后或简化加工；专家访谈（行业从业者的一手讲述）信息新鲜度高但样本量小、个人色彩重。检索时优先想清楚这次外取要解决什么性质的问题，再决定主攻哪类信息源。", "Normal", false, "000000", "24"));
body.Append(CreateParagraph(""));

body.Append(CreateHeading3("配套表单"));
body.Append(CreateParagraph("表单3.1：检索路径清单（个人版）", "Normal", true, "2E75B6", "24"));
body.Append(CreateParagraph("填写说明：选定一个你工作中需要外取的主题，按「具体问题—关键词组合—信息源类型—检索顺序」完成路径设计。", "Normal", false, "666666", "20"));
body.Append(CreateParagraph(""));
body.Append(CreateParagraph("待外取主题：_______________", "Normal", false, "000000", "24"));
body.Append(CreateParagraph("具体待解决的问题：_______________", "Normal", false, "000000", "24"));
body.Append(CreateParagraph(""));

body.Append(CreateFormTable(new[] { "关键词组合", "适用信息源类型", "检索顺序（先后）", "备注" }, 3));

body.Append(CreateParagraph(""));
body.Append(CreateHeading2("八、信得过：确认信息源头，分辨一手与转述"));
body.Append(CreateParagraph(""));
body.Append(CreateHeading3("核心内容"));
body.Append(CreateParagraph("「听说华为这样做」和「华为官方这样说」，是完全不同性质的两条信息，但在实际的检索结果里，这两类信息常常混在一起，让人难以分辨。信息源头确认有三个具体动作：查发布主体（是企业官方、第三方研究机构、自媒体还是匿名转述）、查发布时间（信息是否还在有效期内，管理实践会随时间迭代）、查原始出处（这条信息最早出自哪里，是不是经过了多层转述）。", "Normal", false, "000000", "24"));
body.Append(CreateParagraph(""));
body.Append(CreateParagraph("基于这三个动作，可以把信息可信度分成三级：一手资料（企业官方发布、当事人原始讲述，可信度最高）、二手转述（媒体报道、第三方总结，经过一层加工，需关注是否标注信息来源）、三手演绎（自媒体二次解读、网络流传的「干货总结」，往往掺杂了大量主观推断，可信度最低，不能直接作为萃取依据）。", "Normal", false, "000000", "24"));
body.Append(CreateParagraph(""));

body.Append(CreateHighlightBox("重点提示：", "检索结果排在前面的内容，不等于可信度最高的内容。搜索引擎排序依据的是热度和相关性，不是真实性，这两者经常是不同的标准。"));
body.Append(CreateParagraph(""));

body.Append(CreateHeading3("配套表单"));
body.Append(CreateParagraph("表单3.2：信息源头核验记录", "Normal", true, "2E75B6", "24"));
body.Append(CreateParagraph("填写说明：选取一份你本次外取过程中获得的资料，完成源头核验并判定可信度等级。", "Normal", false, "666666", "20"));
body.Append(CreateParagraph(""));

body.Append(CreateFormTable(new[] { "资料标题/内容摘要", "发布主体", "发布时间", "原始出处", "可信度等级", "判断依据" }, 2));

body.Append(CreateParagraph(""));
body.Append(CreateHeading2("九、看得清：边界条件识别——别人的经验为什么不能直接抄"));
body.Append(CreateParagraph(""));
body.Append(CreateHeading3("核心内容"));
body.Append(CreateParagraph("一个常见误区是「学华为」「学阿里」，但学到的往往只是表面动作——某个考核表格、某句口号、某个流程节点，而真正起作用的，是这些动作背后的一整套前提条件。把表面动作直接搬过来，脱离了原本的前提条件，效果往往天差地别，甚至适得其反。", "Normal", false, "000000", "24"));
body.Append(CreateParagraph(""));
body.Append(CreateParagraph("边界条件拆解可以围绕四个要素展开：行业阶段（对标企业当时处在快速扩张期还是成熟稳定期）、组织规模（人员数量、管理层级是否与自身相当）、资源条件（对标企业当时投入的资源量级是否是自己能承受的）、决策环境（对标企业的组织文化、决策机制是否支持这种做法落地）。", "Normal", false, "000000", "24"));
body.Append(CreateParagraph(""));
body.Append(CreateParagraph("以「学华为的狼性文化」为例，这套机制真正起作用的前提，包含了当时华为所处的高速增长期市场环境、与之配套的高强度激励分配机制、以及一整套人才淘汰与补充体系。如果一家企业只抄了「加班文化」这一个表面动作，却没有同步建立配套的激励与晋升机制，大概率只会引发员工流失，而不是激发战斗力。", "Normal", false, "000000", "24"));
body.Append(CreateParagraph(""));

body.Append(CreateHeading3("配套表单"));
body.Append(CreateParagraph("表单3.3：边界条件分析表（对标案例版）", "Normal", true, "2E75B6", "24"));
body.Append(CreateParagraph("填写说明：选定一个你本次外取的对标案例，逐项拆解边界条件，最后明确该案例真正起作用的核心前提。", "Normal", false, "666666", "20"));
body.Append(CreateParagraph(""));
body.Append(CreateParagraph("对标案例名称：_______________", "Normal", false, "000000", "24"));
body.Append(CreateParagraph(""));

body.Append(CreateFormTable(new[] { "边界要素", "对标案例的实际情况", "我方现状", "是否匹配" }, 4));
body.Append(CreateParagraph(""));
body.Append(CreateParagraph("该案例真正起作用的核心前提（总结）：", "Normal", false, "000000", "24"));
body.Append(CreateParagraph("_______________________________________________", "Normal", false, "000000", "24"));

body.Append(CreateParagraph(""));
body.Append(CreateHeading2("十、用得上：从「他们怎么做」到「我们怎么用」的迁移方法"));
body.Append(CreateParagraph(""));
body.Append(CreateHeading3("核心内容"));
body.Append(CreateParagraph("迁移的核心逻辑是保留内核，替换外壳——把别人经验中真正起作用的本质动作提炼出来，再根据自己的实际条件，重新设计一套适配自己情境的具体做法，而不是照搬对方的具体形式。", "Normal", false, "000000", "24"));
body.Append(CreateParagraph(""));
body.Append(CreateParagraph("迁移三步法具体展开为：第一步，识别可迁移的本质动作（剥离掉具体的工具名称、表格样式这些「外壳」，找到背后真正起作用的逻辑，比如「通过即时反馈缩短试错周期」这个内核，而不是对方具体用的某个反馈系统）；第二步，对照自身边界条件（结合表单3.3的拆解结果，看看哪些前提条件自己具备，哪些不具备）；第三步，设计适配方案（针对不具备的前提条件，设计替代性的落地方式，让本质动作能够在自己的条件下成立）。", "Normal", false, "000000", "24"));
body.Append(CreateParagraph(""));

body.Append(CreateHeading3("配套表单"));
body.Append(CreateParagraph("表单3.4：外取迁移应用方案（初稿）", "Normal", true, "2E75B6", "24"));
body.Append(CreateParagraph("填写说明：基于表单3.3的边界条件分析，完成迁移应用方案初稿，分三部分填写。", "Normal", false, "666666", "20"));
body.Append(CreateParagraph(""));
body.Append(CreateParagraph("可迁移的本质动作（剥离外壳后的核心逻辑）：", "Normal", false, "000000", "24"));
body.Append(CreateParagraph("_______________________________________________", "Normal", false, "000000", "24"));
body.Append(CreateParagraph(""));
body.Append(CreateParagraph("自身边界条件对照（哪些前提具备，哪些不具备）：", "Normal", false, "000000", "24"));
body.Append(CreateParagraph("_______________________________________________", "Normal", false, "000000", "24"));
body.Append(CreateParagraph(""));
body.Append(CreateParagraph("适配方案设计（针对不具备的前提条件，设计的替代落地方式）：", "Normal", false, "000000", "24"));
body.Append(CreateParagraph("_______________________________________________", "Normal", false, "000000", "24"));
body.Append(CreateParagraph(""));
body.Append(CreateParagraph("预期效果与潜在风险：", "Normal", false, "000000", "24"));
body.Append(CreateParagraph("_______________________________________________", "Normal", false, "000000", "24"));

body.Append(CreateParagraph(""));
body.Append(CreateHeading2("模块三练习"));
body.Append(CreateParagraph("练习3.1（选择题）：以下哪一项最接近「一手资料」？", "Normal", false, "000000", "24"));
body.Append(CreateParagraph("A. 某行业自媒体对华为管理的转述总结", "Normal", false, "000000", "24"));
body.Append(CreateParagraph("B. 企业官方发布会公开发布的原始内容", "Normal", false, "000000", "24"));
body.Append(CreateParagraph("C. 论坛网友整理的「干货合集」", "Normal", false, "000000", "24"));
body.Append(CreateParagraph("D. 某培训机构二次加工的课程讲义", "Normal", false, "000000", "24"));
body.Append(CreateParagraph(""));
body.Append(CreateParagraph("练习3.2（简答）：请举一个你听过或经历过的「学华为却学歪了」的例子，说明这个例子可能漏掉了边界条件四要素中的哪一个。", "Normal", false, "000000", "24"));
body.Append(CreateParagraph("_______________________________________________", "Normal", false, "000000", "24"));
body.Append(CreateParagraph("_______________________________________________", "Normal", false, "000000", "24"));
body.Append(CreateParagraph(""));
body.Append(CreateParagraph("练习3.3（情境案例）：你想外取某零售企业的会员运营经验，请设计三组可用于检索的关键词组合。", "Normal", false, "000000", "24"));
body.Append(CreateParagraph("1._______________  2._______________  3._______________", "Normal", false, "000000", "24"));
body.Append(CreateParagraph(""));
body.Append(CreateParagraph("练习3.4（实操）：用迁移三步法（识别本质动作—对照边界条件—设计适配方案），对你熟悉的一个外部案例做一次简要迁移分析。", "Normal", false, "000000", "24"));
body.Append(CreateParagraph("_______________________________________________", "Normal", false, "000000", "24"));

body.Append(CreateParagraph(""));
body.Append(CreateHeading2("本模块知识框架"));
body.Append(CreateParagraph("• 外取第一难题：信息太多，能用的太少", "Normal", false, "000000", "24"));
body.Append(CreateParagraph("• 检索路径：具体问题→关键词组合→匹配信息源类型", "Normal", false, "000000", "24"));
body.Append(CreateParagraph("• 四类信息源：公开资料、行业报告、案例库、专家访谈", "Normal", false, "000000", "24"));
body.Append(CreateParagraph("• 可信度三级：一手资料、二手转述、三手演绎", "Normal", false, "000000", "24"));
body.Append(CreateParagraph("• 边界条件四要素：行业阶段、组织规模、资源条件、决策环境", "Normal", false, "000000", "24"));
body.Append(CreateParagraph("• 迁移三步法：识别本质动作—对照边界条件—设计适配方案", "Normal", false, "000000", "24"));

body.Append(new Paragraph(new ParagraphProperties(new PageBreakBefore())));

// ============================================================
// MODULE 4
// ============================================================
body.Append(CreateHeading1("模块四：定位与产出——让萃取成果落到该落的地方"));
body.Append(CreateParagraph(""));

body.Append(CreateHeading2("模块学习目标"));
body.Append(CreateParagraph("完成本模块学习后，你应当能够：", "Normal", false, "000000", "24"));
body.Append(CreateParagraph("1. 完整填写一份萃取定位表，并据此判断成果形式", "Normal", false, "000000", "24"));
body.Append(CreateParagraph("2. 运用成果形式选型对照表，为本次萃取任务选定合适的产出形式", "Normal", false, "000000", "24"));
body.Append(CreateParagraph("3. 现场生成一份轻量成果，并运用三维验证法完成人工验真", "Normal", false, "000000", "24"));
body.Append(CreateParagraph("预计学习时长：课堂讲授与实操约180分钟（横跨第二天上午与下午第一节）", "Normal", false, "666666", "24"));
body.Append(CreateParagraph(""));

body.Append(CreateHeading2("十一、先有定位表：萃取不是目的，解决问题才是"));
body.Append(CreateParagraph(""));
body.Append(CreateHeading3("核心内容"));
body.Append(CreateParagraph("一个容易被忽略的前提是：没想清楚为谁萃取、为什么萃取，做出来的东西大概率没人用。很多萃取项目投入了大量精力，最后产出的手册、案例放在共享盘里无人问津，根本原因往往不是内容质量不够，而是从一开始就没有定位清楚。", "Normal", false, "000000", "24"));
body.Append(CreateParagraph(""));
body.Append(CreateParagraph("定位表的四个要素是：场景（这次萃取的内容会在什么具体情境下被使用，比如新员工入职第一周、客户投诉升级处理时）、目的（希望使用者在用了这份成果之后，能多做到什么、少犯什么错误）、对象（谁会真正打开并使用这份成果，他们的经验水平和阅读习惯是什么）、情境（使用时的具体条件，比如是现场快速查阅，还是有充分时间系统学习）。", "Normal", false, "000000", "24"));
body.Append(CreateParagraph(""));
body.Append(CreateParagraph("定位颗粒度的原则是不求面面俱到，求指向明确。一份定位表如果写得过于宽泛（「提升团队整体能力」），后续所有判断都会失去抓手；定位写得越具体，后面的形式选择、内容取舍就越容易做对。", "Normal", false, "000000", "24"));
body.Append(CreateParagraph(""));

body.Append(CreateHeading3("配套表单"));
body.Append(CreateParagraph("表单4.1：萃取定位表（定稿）", "Normal", true, "2E75B6", "24"));
body.Append(CreateParagraph("填写说明：结合你本次工作坊的实际萃取任务（内萃或外取均可），逐项填写并请讲师确认。", "Normal", false, "666666", "20"));
body.Append(CreateParagraph(""));

body.Append(CreateFormTable(new[] { "要素", "填写内容" }, 4));
body.Append(CreateParagraph(""));
body.Append(CreateParagraph("讲师确认意见：_______________", "Normal", false, "000000", "24"));

body.Append(CreateParagraph(""));
body.Append(CreateHeading2("十二、一张表看懂成果形式怎么选"));
body.Append(CreateParagraph(""));
body.Append(CreateHeading3("核心内容"));
body.Append(CreateParagraph("萃取出来的内容，可以呈现为多种成果形式，常见的有八种：课程、案例、手册、模板、话术、清单、流程、表单。同一份内容素材，选错了呈现形式，效果会大打折扣。", "Normal", false, "000000", "24"));
body.Append(CreateParagraph(""));
body.Append(CreateParagraph("选型判断可以依据两个维度：使用频率（这件事使用者会频繁遇到，还是偶尔遇到一次）与使用场景的紧急程度（出现问题时，使用者是有时间系统学习，还是需要立刻查阅照做）。高频率、低紧急度的内容（比如新人入职常态化学习的知识体系）更适合做成课程或手册；低频率、高紧急度的内容（比如设备突发故障的处理步骤）更适合做成清单或流程，确保使用者能在最短时间内找到答案并照做。", "Normal", false, "000000", "24"));
body.Append(CreateParagraph(""));

body.Append(CreateFormTable(new[] { "成果形式", "适用范围", "优点", "缺点" }, 8));

body.Append(CreateParagraph(""));
body.Append(CreateHeading3("配套表单"));
body.Append(CreateParagraph("表单4.2：成果形式选型记录", "Normal", true, "2E75B6", "24"));
body.Append(CreateParagraph("填写说明：结合表单4.1的定位结果，对照上表两个判断维度，确定本次萃取的目标成果形式并说明理由。", "Normal", false, "666666", "20"));
body.Append(CreateParagraph(""));
body.Append(CreateParagraph("本次萃取内容的使用频率（高 / 中 / 低）：_______________", "Normal", false, "000000", "24"));
body.Append(CreateParagraph("本次萃取内容使用场景的紧急程度（高 / 中 / 低）：_______________", "Normal", false, "000000", "24"));
body.Append(CreateParagraph("选定的成果形式：_______________", "Normal", false, "000000", "24"));
body.Append(CreateParagraph("选型理由：", "Normal", false, "000000", "24"));
body.Append(CreateParagraph("_______________________________________________", "Normal", false, "000000", "24"));

body.Append(CreateParagraph(""));
body.Append(CreateHeading2("十三、现场产出：重成果点到为止，轻成果当场交付"));
body.Append(CreateParagraph(""));
body.Append(CreateHeading3("核心内容"));
body.Append(CreateParagraph("成果分量不同，现场处理方式也不同。手册、课程等「重」成果，现场只完成框架规划，不做全文产出，因为这类成果体量大，需要课后投入更多时间打磨，工作坊内强行赶工只会牺牲质量。案例、话术、模板、清单等「轻」成果，现场提供对应的提示词，直接调用AI生成初稿，当场就能拿到可用的产出。", "Normal", false, "000000", "24"));
body.Append(CreateParagraph(""));
body.Append(CreateParagraph("AI生成初稿之后，人工优化要关注三个要点：场景是否贴合（生成内容是不是真的对应你定位表里写的那个具体场景，而不是一个泛泛的通用版本）、表达是否自然（是不是读起来像AI生成的套话，还是符合目标使用者的语言习惯）、信息是否准确（生成内容中的具体数据、流程、术语是否符合实际，AI生成内容存在编造细节的风险，这一步必须逐条核对）。", "Normal", false, "000000", "24"));
body.Append(CreateParagraph(""));

body.Append(CreateHeading3("配套表单"));
body.Append(CreateParagraph("表单4.3：轻量成果初稿生成记录", "Normal", true, "2E75B6", "24"));
body.Append(CreateParagraph("填写说明：若本次选型为「轻」成果，使用提供的提示词现场生成初稿并记录；若选型为「重」成果，则填写框架规划部分。", "Normal", false, "666666", "20"));
body.Append(CreateParagraph(""));
body.Append(CreateParagraph("选定成果形式：_______________", "Normal", false, "000000", "24"));
body.Append(CreateParagraph(""));
body.Append(CreateParagraph("若为轻成果——使用的提示词/技能包名称：_______________", "Normal", false, "000000", "24"));
body.Append(CreateParagraph("AI生成初稿概述（核心内容要点）：", "Normal", false, "000000", "24"));
body.Append(CreateParagraph("_______________________________________________", "Normal", false, "000000", "24"));
body.Append(CreateParagraph("_______________________________________________", "Normal", false, "000000", "24"));
body.Append(CreateParagraph(""));
body.Append(CreateParagraph("初步优化记录（场景贴合度 / 表达自然度 / 信息准确度，分别简要说明）：", "Normal", false, "000000", "24"));
body.Append(CreateParagraph("_______________________________________________", "Normal", false, "000000", "24"));
body.Append(CreateParagraph(""));
body.Append(CreateParagraph("若为重成果——框架规划（章节/模块结构）：", "Normal", false, "000000", "24"));
body.Append(CreateParagraph("_______________________________________________", "Normal", false, "000000", "24"));

body.Append(CreateParagraph(""));
body.Append(CreateHeading2("十四、AI初稿，人工验真：三维验证法"));
body.Append(CreateParagraph(""));
body.Append(CreateHeading3("核心内容"));
body.Append(CreateParagraph("AI生成的初稿，无论看起来多么完整，在正式使用前都必须经过三维验证：", "Normal", false, "000000", "24"));
body.Append(CreateParagraph(""));
body.Append(CreateParagraph("准确性验证——信息是否符合事实，术语是否准确，边界是否清楚。这是最基础也最容易被跳过的一关，AI生成内容经常会「看起来很专业」，但其中混入了不准确的细节或臆造的数据，必须逐条比对原始素材进行核实。", "Normal", false, "000000", "24"));
body.Append(CreateParagraph(""));
body.Append(CreateParagraph("可用性验证——目标使用者拿到手，能不能直接用，哪里会卡住。这一关最好的方式是找一个符合定位表中「对象」画像的人实际试用一遍，记录他在哪一步停顿、哪一步看不懂。", "Normal", false, "000000", "24"));
body.Append(CreateParagraph(""));
body.Append(CreateParagraph("完整性验证——易错点、易忽视点、关键判断点是否都覆盖到了。对照表单2.1或表单3.3中拆解出的关键判断点逐条检查，确认成果稿没有遗漏掉那些真正决定成败的细节。", "Normal", false, "000000", "24"));
body.Append(CreateParagraph(""));

body.Append(CreateHeading3("配套表单"));
body.Append(CreateParagraph("表单4.4：三维验证法核验表", "Normal", true, "2E75B6", "24"));
body.Append(CreateParagraph("填写说明：本节进行互换成果、交叉核验，按三个维度逐项核查，记录核验结果与待修改项。", "Normal", false, "666666", "20"));
body.Append(CreateParagraph(""));

body.Append(CreateFormTable(new[] { "验证维度", "核验问题", "核验结果", "待修改项" }, 3));

body.Append(CreateParagraph(""));
body.Append(CreateHeading2("模块四练习"));
body.Append(CreateParagraph("练习4.1（判断题）：成果形式应该先确定好，再去找匹配的内容来填。（对 / 错）", "Normal", false, "000000", "24"));
body.Append(CreateParagraph(""));
body.Append(CreateParagraph("练习4.2（简答）：如果某萃取成果「使用频率高、使用场景不紧急」，参照表单4.2的两个判断维度，更适合做成什么形式？请说明理由。", "Normal", false, "000000", "24"));
body.Append(CreateParagraph("_______________________________________________", "Normal", false, "000000", "24"));
body.Append(CreateParagraph(""));
body.Append(CreateParagraph("练习4.3（情境案例）：你完成的轻量成果初稿，第一次试用者反馈「内容是对的，但读起来很卡，不知道从哪里下手」。这属于三维验证法中的哪一个维度的问题？应该怎么修改？", "Normal", false, "000000", "24"));
body.Append(CreateParagraph("_______________________________________________", "Normal", false, "000000", "24"));
body.Append(CreateParagraph(""));
body.Append(CreateParagraph("练习4.4（实操）：用萃取定位表四要素，为你本次工作坊的实际萃取任务完成定位（已在表单4.1中完成可不重复作答）。", "Normal", false, "000000", "24"));

body.Append(CreateParagraph(""));
body.Append(CreateHeading2("本模块知识框架"));
body.Append(CreateParagraph("• 定位表四要素：场景、目的、对象、情境", "Normal", false, "000000", "24"));
body.Append(CreateParagraph("• 颗粒度原则：不求面面俱到，求指向明确", "Normal", false, "000000", "24"));
body.Append(CreateParagraph("• 成果形式八种：课程、案例、手册、模板、话术、清单、流程、表单", "Normal", false, "000000", "24"));
body.Append(CreateParagraph("• 选型两维度：使用频率、使用场景紧急程度", "Normal", false, "000000", "24"));
body.Append(CreateParagraph("• 重成果点到为止（框架规划），轻成果当场交付（直接生成）", "Normal", false, "000000", "24"));
body.Append(CreateParagraph("• AI生成优化三要点：场景贴合、表达自然、信息准确", "Normal", false, "000000", "24"));
body.Append(CreateParagraph("• 三维验证法：准确性、可用性、完整性", "Normal", false, "000000", "24"));

body.Append(new Paragraph(new ParagraphProperties(new PageBreakBefore())));

// ============================================================
// MODULE 5
// ============================================================
body.Append(CreateHeading1("模块五：落地与延展——让萃取能力可持续使用"));
body.Append(CreateParagraph(""));

body.Append(CreateHeading2("模块学习目标"));
body.Append(CreateParagraph("完成本模块学习后，你应当能够：", "Normal", false, "000000", "24"));
body.Append(CreateParagraph("1. 运用发布前必检清单，判断一份萃取成果是否可以正式交付使用", "Normal", false, "000000", "24"));
body.Append(CreateParagraph("2. 建立起课后持续维护提示词资产库与技能包的方法", "Normal", false, "000000", "24"));
body.Append(CreateParagraph("3. 制定个人课后应用规划，让萃取能力在课后持续发挥作用", "Normal", false, "000000", "24"));
body.Append(CreateParagraph("预计学习时长：课堂讲授与展示约90分钟", "Normal", false, "666666", "24"));
body.Append(CreateParagraph(""));

body.Append(CreateHeading2("十五、发布前的必检清单"));
body.Append(CreateParagraph(""));
body.Append(CreateHeading3("核心内容"));
body.Append(CreateParagraph("经过三维验证的成果，在正式发布交付使用前，还需要过最后一道关——发布前必检。这一关主要看两件事：", "Normal", false, "000000", "24"));
body.Append(CreateParagraph(""));
body.Append(CreateParagraph("内容合规性——成果中是否涉及需要审核的对外表达或制度解读。涉及企业制度的解读性内容、对外公开使用的表达内容，必须经过企业相关职能部门（如人力资源、法务、品牌公关）审核确认后才能正式发布，工作坊现场产出的所有成果，本质上都是初稿版本，这一点需要特别提醒自己。", "Normal", false, "000000", "24"));
body.Append(CreateParagraph(""));
body.Append(CreateParagraph("版本管理——草稿与定稿如何区分，避免误用未经验证的内容。建议在文件命名或文档标注上清晰区分「初稿/待审」与「定稿/已发布」，避免团队成员误把工作坊现场生成的初稿当作可以直接对外使用的定稿。", "Normal", false, "000000", "24"));
body.Append(CreateParagraph(""));

body.Append(CreateHeading3("配套表单"));
body.Append(CreateParagraph("表单5.1：发布前自检记录", "Normal", true, "2E75B6", "24"));
body.Append(CreateParagraph("填写说明：对照下方检查项，逐条确认本次产出的成果是否可以交付使用。", "Normal", false, "666666", "20"));
body.Append(CreateParagraph(""));

body.Append(CreateFormTable(new[] { "检查项", "是否符合", "说明" }, 4));
body.Append(CreateParagraph(""));
body.Append(CreateParagraph("总体判断（可交付使用 / 需进一步修改与审核）：_______________", "Normal", false, "000000", "24"));

body.Append(CreateParagraph(""));
body.Append(CreateHeading2("十六、提示词与技能包的课后复用方法"));
body.Append(CreateParagraph(""));
body.Append(CreateHeading3("核心内容"));
body.Append(CreateParagraph("工作坊结束不代表萃取能力的建设就此打住，恰恰相反，真正的考验在课后。", "Normal", false, "000000", "24"));
body.Append(CreateParagraph(""));
body.Append(CreateParagraph("提示词资产库的持续补充，关键是养成一个习惯：每次遇到新场景、获得新素材时，先看看资产库里有没有现成可改的提示词，用完之后再花一分钟把效果好的版本记录回去。两三个月坚持下来，资产库会从工作坊带走的雏形，逐渐成长为真正贴合自己工作场景的工具体系。", "Normal", false, "000000", "24"));
body.Append(CreateParagraph(""));
body.Append(CreateParagraph("内萃与外取两条路径，课后应当各自独立继续推进，不必每次都凑齐两条路径才能做事——遇到内部专家资源丰富的场景就侧重内萃，遇到内部经验空白、需要对标参考的场景就侧重外取，两条路径根据实际需要灵活启用。", "Normal", false, "000000", "24"));
body.Append(CreateParagraph(""));
body.Append(CreateParagraph("技能包的选用原则是匹配任务而不是图省事，避免「大材小用」（用复杂技能包处理一个简单任务，反而拖慢速度）或「小材大用」（用简单技能包硬撑一个复杂任务，效果打折扣）。建立起对自己常用技能包能力边界的清晰认知，是课后持续高效使用这套工具体系的前提。", "Normal", false, "000000", "24"));

body.Append(CreateParagraph(""));
body.Append(CreateHeading2("十七、成果展示与总结答疑"));
body.Append(CreateParagraph(""));
body.Append(CreateHeading3("核心内容"));
body.Append(CreateParagraph("每位学员现场展示本次萃取成果（建议每人5分钟），讲师针对展示内容进行点评，并给出可优化方向。展示环节结束后，统一交付完整的提示词工具包，并预留时间进行全场答疑。", "Normal", false, "000000", "24"));
body.Append(CreateParagraph(""));

body.Append(CreateHeading3("配套表单"));
body.Append(CreateParagraph("表单5.2：课后行动规划表", "Normal", true, "2E75B6", "24"));
body.Append(CreateParagraph("填写说明：结合本次工作坊所学，制定课后第一周、第一个月的具体行动计划。", "Normal", false, "666666", "20"));
body.Append(CreateParagraph(""));

body.Append(CreateFormTable(new[] { "时间范围", "计划行动", "预期产出" }, 2));

body.Append(CreateParagraph(""));
body.Append(CreateHeading2("模块五练习"));
body.Append(CreateParagraph("练习5.1（简答）：草稿与定稿如果不做区分，可能给团队带来什么风险？", "Normal", false, "000000", "24"));
body.Append(CreateParagraph("_______________________________________________", "Normal", false, "000000", "24"));
body.Append(CreateParagraph(""));
body.Append(CreateParagraph("练习5.2（判断题）：技能包是越万能越好，一个技能包能处理的任务种类越多越好。（对 / 错）", "Normal", false, "000000", "24"));
body.Append(CreateParagraph(""));
body.Append(CreateParagraph("练习5.3（实操）：写出你课后打算在第一周内复用的1个技能包和1条提示词，并说明具体的应用场景。", "Normal", false, "000000", "24"));
body.Append(CreateParagraph("技能包：_______________  应用场景：_______________", "Normal", false, "000000", "24"));
body.Append(CreateParagraph("提示词场景：_______________", "Normal", false, "000000", "24"));

body.Append(CreateParagraph(""));
body.Append(CreateHeading2("本模块知识框架"));
body.Append(CreateParagraph("• 发布前必检两要点：内容合规性、版本管理", "Normal", false, "000000", "24"));
body.Append(CreateParagraph("• 工作坊现场产出均为初稿，须经相关部门审核后方可正式发布", "Normal", false, "000000", "24"));
body.Append(CreateParagraph("• 提示词资产库持续补充：新场景、新素材进来后及时迭代", "Normal", false, "000000", "24"));
body.Append(CreateParagraph("• 内萃外取两条路径课后独立、灵活推进", "Normal", false, "000000", "24"));
body.Append(CreateParagraph("• 技能包选用原则：匹配任务，避免大材小用或小材大用", "Normal", false, "000000", "24"));

body.Append(new Paragraph(new ParagraphProperties(new PageBreakBefore())));

// ============================================================
// COMPREHENSIVE EXERCISE
// ============================================================
body.Append(CreateHeading1("综合练习：跨模块案例"));
body.Append(CreateParagraph(""));

body.Append(CreateHeading2("案例背景"));
body.Append(CreateParagraph("某制造企业的质检岗位即将迎来一批新员工。该企业有一位从业十二年的资深质检员，擅长通过外观和手感快速判断产品是否存在隐性瑕疵，但从未系统总结过自己的判断标准；与此同时，行业内一家头部企业已经公开分享过其「质检异常分级处理机制」的部分实践。该企业希望在两周内，为新员工准备一份可以直接上手使用的质检异常处理指南。", "Normal", false, "000000", "24"));
body.Append(CreateParagraph(""));

body.Append(CreateHeading2("任务要求"));
body.Append(CreateParagraph("请运用本手册四层逻辑（定位先行、双源并行、形式适配、人控真伪），完整走一遍萃取流程，依次完成以下五步，并简要记录关键决策：", "Normal", false, "000000", "24"));
body.Append(CreateParagraph(""));
body.Append(CreateParagraph("第一步（定位）：参照表单4.1的四要素，为这次萃取任务完成定位。", "Normal", false, "000000", "24"));
body.Append(CreateParagraph("_______________________________________________", "Normal", false, "000000", "24"));
body.Append(CreateParagraph(""));
body.Append(CreateParagraph("第二步（内萃）：参照工作任务分析的逻辑，列出你会向这位资深质检员提出的至少3个反弹技术核心问题。", "Normal", false, "000000", "24"));
body.Append(CreateParagraph("_______________________________________________", "Normal", false, "000000", "24"));
body.Append(CreateParagraph(""));
body.Append(CreateParagraph("第三步（外取）：参照边界条件四要素，说明在借鉴这家头部企业的「异常分级处理机制」时，最需要重点核验的1-2个边界条件是什么，为什么。", "Normal", false, "000000", "24"));
body.Append(CreateParagraph("_______________________________________________", "Normal", false, "000000", "24"));
body.Append(CreateParagraph(""));
body.Append(CreateParagraph("第四步（形式适配）：参照成果形式选型的两个判断维度，说明这份「质检异常处理指南」更适合做成清单、流程还是手册，并说明理由。", "Normal", false, "000000", "24"));
body.Append(CreateParagraph("_______________________________________________", "Normal", false, "000000", "24"));
body.Append(CreateParagraph(""));
body.Append(CreateParagraph("第五步（人控真伪）：列出你会用三维验证法中的哪一个维度，重点核查这份成果在新员工实际使用时最容易出问题的地方。", "Normal", false, "000000", "24"));
body.Append(CreateParagraph("_______________________________________________", "Normal", false, "000000", "24"));

body.Append(new Paragraph(new ParagraphProperties(new PageBreakBefore())));

// ============================================================
// APPENDIX
// ============================================================
body.Append(CreateHeading1("附录一：核心术语表"));
body.Append(CreateParagraph(""));

var terms = new (string term, string definition)[] {
    ("内萃", "从内部专家身上沉淀下来的隐性经验中，通过结构化方法提炼出可复用知识的过程。"),
    ("外取", "从外部标杆、行业实践等显性经验中，提炼出可借鉴内容并完成本地化适配的过程。"),
    ("工作任务分析", "把隐性经验拆解为「任务—动作—判断点」三层结构，使其具体化、可操作化的方法。"),
    ("反弹技术", "通过结构化提问获取专家口述内容后，再将整理结果复述给专家确认，防止整理失真的访谈验证方法。"),
    ("边界条件", "一项外部经验得以成立、产生效果的前提条件，通常包括行业阶段、组织规模、资源条件、决策环境四个要素。"),
    ("三维验证法", "从准确性、可用性、完整性三个维度，对AI生成的萃取成果初稿进行人工核验的方法。"),
    ("萃取定位表", "明确一次萃取任务的场景、目的、对象、情境四要素的工具表单，是后续所有萃取决策的起点。")
};

foreach (var (term, definition) in terms)
{
    body.Append(new Paragraph(
        new ParagraphProperties(
            new SpacingBetweenLines { After = "120" }
        ),
        new Run(
            new RunProperties(new Bold(), new FontSize { Val = "24" }, new Color { Val = "2E75B6" }),
            new Text(term + "：")
        ),
        new Run(
            new RunProperties(new FontSize { Val = "24" }),
            new Text(definition)
        )
    ));
}

body.Append(new Paragraph(new ParagraphProperties(new PageBreakBefore())));

body.Append(CreateHeading1("附录二：练习参考答案与解析"));
body.Append(CreateParagraph(""));

body.Append(CreateHeading2("模块一"));
body.Append(CreateParagraph("1.1 错。AI可以协助归纳和呈现信息，但无法独立判断内容是否真实反映了专家的实际做法，这一判断依赖业务背景和经验积累。", "Normal", false, "000000", "24"));
body.Append(CreateParagraph("1.2 B。录音转文字属于标准化处理环节，正确与否容易核对，适合优先交给AI。", "Normal", false, "000000", "24"));
body.Append(CreateParagraph("1.3 风险在于：AI归纳的要点可能存在归纳偏差或遗漏关键判断点，未经人工核验直接发布，一旦内容失真会误导学员。应在「转写归纳」之后增加「人工核验与反弹确认」环节。", "Normal", false, "000000", "24"));
body.Append(CreateParagraph(""));

body.Append(CreateHeading2("模块二"));
body.Append(CreateParagraph("2.1 因为隐性经验本身不是以「总结句」的形式存在的，而是嵌在具体动作和判断点中，直接要求专家总结，得到的往往是空泛、无法落地的回答，必须通过任务—动作—判断点的结构化拆解才能显性化。", "Normal", false, "000000", "24"));
body.Append(CreateParagraph("2.2 参考追问：① 「这种感觉具体是什么提醒了你？是听到的声音、看到的现象，还是摸到的震动？」 ② 「上一次有没有一次凭感觉判断错了的情况，后来你是怎么发现错了的？」", "Normal", false, "000000", "24"));
body.Append(CreateParagraph("2.3 错。反弹验证是把整理后的具体内容复述给专家逐条确认，而不是简单重放录音。", "Normal", false, "000000", "24"));
body.Append(CreateParagraph(""));

body.Append(CreateHeading2("模块三"));
body.Append(CreateParagraph("3.1 B。企业官方发布会内容属于一手资料，发布主体明确、未经转述加工。", "Normal", false, "000000", "24"));
body.Append(CreateParagraph("3.2 参考方向：常见的遗漏要素是「资源条件」或「决策环境」——只学到表面的考核或文化口号，却没有配套的资源投入或决策机制支撑。", "Normal", false, "000000", "24"));
body.Append(CreateParagraph("3.3 参考关键词组合方向：会员等级体系设计、会员复购运营机制、会员权益成本测算等，具体需结合实际待解决问题确定。", "Normal", false, "000000", "24"));
body.Append(CreateParagraph(""));

body.Append(CreateHeading2("模块四"));
body.Append(CreateParagraph("4.1 错。形式必须服务于定位，应先完成定位与内容判断，再根据使用频率和紧急程度选择适配的成果形式。", "Normal", false, "000000", "24"));
body.Append(CreateParagraph("4.2 参考方向：使用频率高、紧急程度不高的内容更适合做成课程或手册，因为使用者有时间系统学习，需要的是体系完整性而非即时查阅速度。", "Normal", false, "000000", "24"));
body.Append(CreateParagraph("4.3 属于可用性验证维度的问题。修改方向：调整内容结构和呈现顺序，使其更符合目标使用者的实际使用习惯，必要时增加导航性提示。", "Normal", false, "000000", "24"));
body.Append(CreateParagraph(""));

body.Append(CreateHeading2("模块五"));
body.Append(CreateParagraph("5.1 风险：团队成员可能误把未经审核的初稿当作可以直接对外使用的定稿，一旦其中存在不准确或不合规的内容，会造成实际损失或合规风险。", "Normal", false, "000000", "24"));
body.Append(CreateParagraph("5.2 错。技能包应当匹配具体任务，过于万能的技能包在处理简单任务时反而效率更低，应根据任务复杂度选用合适颗粒度的技能包。", "Normal", false, "000000", "24"));

body.Append(new Paragraph(new ParagraphProperties(new PageBreakBefore())));

body.Append(CreateHeading1("附录三：提示词与技能包资产库模板（空白扩展版）"));
body.Append(CreateParagraph(""));
body.Append(CreateParagraph("课后请持续使用此表，将工作坊中及课后实践中沉淀出的好用提示词逐条记录，长期积累形成个人资产库。", "Normal", false, "666666", "20"));
body.Append(CreateParagraph(""));

body.Append(CreateFormTable(new[] { "序号", "场景名称", "适用工具/技能包", "提示词全文（核心指令）", "注意事项", "记录日期" }, 5));

body.Append(new Paragraph(new ParagraphProperties(new PageBreakBefore())));

body.Append(CreateHeading1("附录四：课后第一个月行动计划模板"));
body.Append(CreateParagraph(""));
body.Append(CreateParagraph("填写说明：建议在工作坊结束当天即完成本表，趁热打铁明确课后第一个月的具体行动节奏。", "Normal", false, "666666", "20"));
body.Append(CreateParagraph(""));

body.Append(CreateFormTable(new[] { "周次", "计划完成的萃取任务", "主要使用的方法（内萃/外取/两者结合）", "预期产出形式" }, 4));

body.Append(new Paragraph(new ParagraphProperties(new PageBreakBefore())));

// CLOSING
body.Append(CreateHeading1("结语"));
body.Append(CreateParagraph(""));
body.Append(CreateParagraph("两天的工作坊结束之后，你手里会有一份经过验证的轻量萃取成果，和一套结构化的提示词工具包。但这本手册真正想留给你的，不是这一份成果，而是这套定位先行、双源并行、形式适配、人控真伪的方法论本身。", "Normal", false, "000000", "24"));
body.Append(CreateParagraph(""));
body.Append(CreateParagraph("下一次遇到新的萃取任务时，不管是内部专家的隐性经验，还是外部标杆的可借鉴实践，希望你都能想起这本手册里走过的十七节内容，照着这套流程，独立完成一次完整的萃取闭环。", "Normal", false, "000000", "24"));
body.Append(CreateParagraph(""));

// Final section properties
body.Append(sectPr);

// ============================================================
// SAVE
// ============================================================
mainPart.Document = new Document(body);
doc.Save();

Console.WriteLine($"Document created successfully: {outputPath}");