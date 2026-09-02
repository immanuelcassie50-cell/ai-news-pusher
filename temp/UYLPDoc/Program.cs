using DocumentFormat.OpenXml;
using DocumentFormat.OpenXml.Packaging;
using DocumentFormat.OpenXml.Wordprocessing;

class UYLPInstructorManual
{
    static readonly string PrimaryColor = "1F4E79";
    static readonly string SecondaryColor = "2E75B6";
    static readonly string AccentColor = "ED7D31";

    static void Main(string[] args)
    {
        string outputPath = @"D:\CC\temp\UYLP_test.docx";
        Directory.CreateDirectory(Path.GetDirectoryName(outputPath)!);

        using var doc = WordprocessingDocument.Create(outputPath, WordprocessingDocumentType.Document);
        var mainPart = doc.MainDocumentPart!;
        if (mainPart.Document == null)
            mainPart.Document = new Document();
        if (mainPart.Document.Body == null)
            mainPart.Document.Body = new Body();
        var body = mainPart.Document.Body;

        // Add styles
        var stylesPart = mainPart.AddNewPart<StyleDefinitionsPart>();
        stylesPart.Styles = CreateStyles();
        stylesPart.Styles.Save();

        // Build content
        AddTitlePage(body);
        AddTableOfContents(body);
        AddPart1(body);
        AddPart2(body);
        AddPart3(body);
        AddPart4(body);
        AddPart5(body);
        AddPart6(body);

        // Page setup
        body.Append(new SectionProperties(
            new PageSize { Width = 11906, Height = 16838 },
            new PageMargin { Top = 1440, Right = 1440, Bottom = 1440, Left = 1440, Header = 720, Footer = 720 }
        ));

        mainPart.Document.Save();
        Console.WriteLine($"Document created: {outputPath}");
    }

    static Styles CreateStyles()
    {
        var styles = new Styles();

        // Normal style
        styles.Append(new Style(
            new StyleName { Val = "Normal" },
            new PrimaryStyle()
        ) { Type = StyleValues.Paragraph, StyleId = "Normal" });

        // Heading 1 style
        styles.Append(new Style(
            new StyleName { Val = "Heading 1" },
            new PrimaryStyle(),
            new StyleParagraphProperties(
                new SpacingBetweenLines { Before = "400", After = "200" },
                new Shading { Val = ShadingPatternValues.Clear, Fill = PrimaryColor },
                new Indentation { Left = "200" },
                new KeepNext(),
                new KeepLines()
            ),
            new StyleRunProperties(
                new Bold(),
                new FontSize { Val = "56" },
                new Color { Val = "FFFFFF" },
                new RunFonts { Ascii = "Microsoft YaHei", HighAnsi = "Microsoft YaHei", EastAsia = "Microsoft YaHei" }
            )
        ) { Type = StyleValues.Paragraph, StyleId = "Heading1" });

        // Heading 2 style
        styles.Append(new Style(
            new StyleName { Val = "Heading 2" },
            new PrimaryStyle(),
            new StyleParagraphProperties(
                new SpacingBetweenLines { Before = "360", After = "180" },
                new Shading { Val = ShadingPatternValues.Clear, Fill = SecondaryColor },
                new Indentation { Left = "100" },
                new KeepNext(),
                new KeepLines()
            ),
            new StyleRunProperties(
                new Bold(),
                new FontSize { Val = "48" },
                new Color { Val = "FFFFFF" },
                new RunFonts { Ascii = "Microsoft YaHei", HighAnsi = "Microsoft YaHei", EastAsia = "Microsoft YaHei" }
            )
        ) { Type = StyleValues.Paragraph, StyleId = "Heading2" });

        // Heading 3 style
        styles.Append(new Style(
            new StyleName { Val = "Heading 3" },
            new PrimaryStyle(),
            new StyleParagraphProperties(
                new SpacingBetweenLines { Before = "300", After = "150" },
                new Shading { Val = ShadingPatternValues.Clear, Fill = AccentColor },
                new Indentation { Left = "100" },
                new KeepNext(),
                new KeepLines()
            ),
            new StyleRunProperties(
                new Bold(),
                new FontSize { Val = "40" },
                new Color { Val = "FFFFFF" },
                new RunFonts { Ascii = "Microsoft YaHei", HighAnsi = "Microsoft YaHei", EastAsia = "Microsoft YaHei" }
            )
        ) { Type = StyleValues.Paragraph, StyleId = "Heading3" });

        // Heading 4 style
        styles.Append(new Style(
            new StyleName { Val = "Heading 4" },
            new PrimaryStyle(),
            new StyleParagraphProperties(
                new SpacingBetweenLines { Before = "240", After = "120" }
            ),
            new StyleRunProperties(
                new Bold(),
                new FontSize { Val = "32" },
                new Color { Val = "1F4E79" },
                new RunFonts { Ascii = "Microsoft YaHei", HighAnsi = "Microsoft YaHei", EastAsia = "Microsoft YaHei" }
            )
        ) { Type = StyleValues.Paragraph, StyleId = "Heading4" });

        return styles;
    }

    static void AddParagraph(Body body, string text, string styleId)
    {
        var p = new Paragraph();
        var pPr = new ParagraphProperties();

        if (styleId == "Heading1")
        {
            pPr.Append(new SpacingBetweenLines { Before = "400", After = "200" });
            pPr.Append(new Shading { Val = ShadingPatternValues.Clear, Fill = PrimaryColor });
            pPr.Append(new Indentation { Left = "200" });
            pPr.Append(new KeepNext());
            pPr.Append(new KeepLines());

            p.Append(pPr);
            p.Append(new Run(
                new RunProperties(
                    new Bold(),
                    new FontSize { Val = "56" },
                    new Color { Val = "FFFFFF" },
                    new RunFonts { Ascii = "Microsoft YaHei", HighAnsi = "Microsoft YaHei", EastAsia = "Microsoft YaHei" }
                ),
                new Text(text)
            ));
        }
        else if (styleId == "Heading2")
        {
            pPr.Append(new SpacingBetweenLines { Before = "360", After = "180" });
            pPr.Append(new Shading { Val = ShadingPatternValues.Clear, Fill = SecondaryColor });
            pPr.Append(new Indentation { Left = "100" });
            pPr.Append(new KeepNext());
            pPr.Append(new KeepLines());

            p.Append(pPr);
            p.Append(new Run(
                new RunProperties(
                    new Bold(),
                    new FontSize { Val = "48" },
                    new Color { Val = "FFFFFF" },
                    new RunFonts { Ascii = "Microsoft YaHei", HighAnsi = "Microsoft YaHei", EastAsia = "Microsoft YaHei" }
                ),
                new Text(text)
            ));
        }
        else if (styleId == "Heading3")
        {
            pPr.Append(new SpacingBetweenLines { Before = "300", After = "150" });
            pPr.Append(new Shading { Val = ShadingPatternValues.Clear, Fill = AccentColor });
            pPr.Append(new Indentation { Left = "100" });
            pPr.Append(new KeepNext());
            pPr.Append(new KeepLines());

            p.Append(pPr);
            p.Append(new Run(
                new RunProperties(
                    new Bold(),
                    new FontSize { Val = "40" },
                    new Color { Val = "FFFFFF" },
                    new RunFonts { Ascii = "Microsoft YaHei", HighAnsi = "Microsoft YaHei", EastAsia = "Microsoft YaHei" }
                ),
                new Text(text)
            ));
        }
        else if (styleId == "Heading4")
        {
            pPr.Append(new SpacingBetweenLines { Before = "240", After = "120" });
            p.Append(pPr);
            p.Append(new Run(
                new RunProperties(
                    new Bold(),
                    new FontSize { Val = "32" },
                    new Color { Val = "1F4E79" },
                    new RunFonts { Ascii = "Microsoft YaHei", HighAnsi = "Microsoft YaHei", EastAsia = "Microsoft YaHei" }
                ),
                new Text(text)
            ));
        }
        else if (styleId == "Title")
        {
            pPr.Append(new Justification { Val = JustificationValues.Center });
            pPr.Append(new SpacingBetweenLines { After = "400" });
            p.Append(pPr);
            p.Append(new Run(
                new RunProperties(
                    new Bold(),
                    new FontSize { Val = "72" },
                    new Color { Val = PrimaryColor },
                    new RunFonts { Ascii = "Microsoft YaHei", HighAnsi = "Microsoft YaHei", EastAsia = "Microsoft YaHei" }
                ),
                new Text(text)
            ));
        }
        else if (styleId == "Subtitle")
        {
            pPr.Append(new Justification { Val = JustificationValues.Center });
            pPr.Append(new SpacingBetweenLines { After = "200" });
            p.Append(pPr);
            p.Append(new Run(
                new RunProperties(
                    new Bold(),
                    new FontSize { Val = "40" },
                    new Color { Val = SecondaryColor },
                    new RunFonts { Ascii = "Microsoft YaHei", HighAnsi = "Microsoft YaHei", EastAsia = "Microsoft YaHei" }
                ),
                new Text(text)
            ));
        }
        else if (styleId == "InfoBox")
        {
            pPr.Append(new SpacingBetweenLines { Before = "100", After = "100" });
            pPr.Append(new Shading { Val = ShadingPatternValues.Clear, Fill = "FFF2CC" });
            pPr.Append(new Indentation { Left = "200", Right = "200" });
            p.Append(pPr);
            p.Append(new Run(
                new RunProperties(
                    new FontSize { Val = "22" },
                    new Color { Val = "7F6000" },
                    new RunFonts { Ascii = "Microsoft YaHei", HighAnsi = "Microsoft YaHei", EastAsia = "Microsoft YaHei" }
                ),
                new Text(text)
            ));
        }
        else if (styleId == "TimeBox")
        {
            pPr.Append(new SpacingBetweenLines { Before = "80", After = "80" });
            pPr.Append(new Shading { Val = ShadingPatternValues.Clear, Fill = "E2EFDA" });
            pPr.Append(new Indentation { Left = "100", Right = "100" });
            p.Append(pPr);
            p.Append(new Run(
                new RunProperties(
                    new Bold(),
                    new FontSize { Val = "22" },
                    new Color { Val = "375623" },
                    new RunFonts { Ascii = "Microsoft YaHei", HighAnsi = "Microsoft YaHei", EastAsia = "Microsoft YaHei" }
                ),
                new Text(text)
            ));
        }
        else if (styleId == "Checklist")
        {
            pPr.Append(new Indentation { Left = "400" });
            pPr.Append(new SpacingBetweenLines { After = "60" });
            p.Append(pPr);
            p.Append(new Run(
                new RunProperties(
                    new FontSize { Val = "22" },
                    new RunFonts { Ascii = "Microsoft YaHei", HighAnsi = "Microsoft YaHei", EastAsia = "Microsoft YaHei" }
                ),
                new Text("□ " + text)
            ));
        }
        else // Normal
        {
            pPr.Append(new SpacingBetweenLines { After = "120" });
            p.Append(pPr);
            p.Append(new Run(
                new RunProperties(
                    new FontSize { Val = "22" },
                    new RunFonts { Ascii = "Microsoft YaHei", HighAnsi = "Microsoft YaHei", EastAsia = "Microsoft YaHei" }
                ),
                new Text(text)
            ));
        }

        body.Append(p);
    }

    static void AddPageBreak(Body body)
    {
        body.Append(new Paragraph(new Run(new Break { Type = BreakValues.Page })));
    }

    static void AddTable(Body body, string[][] rows)
    {
        var table = new Table();

        var tblPr = new TableProperties(
            new TableWidth { Width = "5000", Type = TableWidthUnitValues.Pct },
            new TableBorders(
                new TopBorder { Val = BorderValues.Single, Size = 4, Color = SecondaryColor },
                new BottomBorder { Val = BorderValues.Single, Size = 4, Color = SecondaryColor },
                new LeftBorder { Val = BorderValues.Single, Size = 4, Color = SecondaryColor },
                new RightBorder { Val = BorderValues.Single, Size = 4, Color = SecondaryColor },
                new InsideHorizontalBorder { Val = BorderValues.Single, Size = 2, Color = "CCCCCC" },
                new InsideVerticalBorder { Val = BorderValues.Single, Size = 2, Color = "CCCCCC" }
            )
        );
        table.Append(tblPr);

        int colCount = rows[0].Length;
        var tblGrid = new TableGrid();
        for (int i = 0; i < colCount; i++)
            tblGrid.Append(new GridColumn { Width = (9360 / colCount).ToString() });
        table.Append(tblGrid);

        for (int r = 0; r < rows.Length; r++)
        {
            var row = new TableRow();
            bool isHeader = r == 0;

            for (int c = 0; c < rows[r].Length; c++)
            {
                var cell = new TableCell();
                cell.Append(new TableCellProperties(
                    new TableCellWidth { Width = "0", Type = TableWidthUnitValues.Auto }
                ));

                if (isHeader)
                    cell.Append(new TableCellProperties(new Shading { Val = ShadingPatternValues.Clear, Fill = PrimaryColor }));

                var p = new Paragraph();
                p.Append(new ParagraphProperties(
                    new SpacingBetweenLines { Before = "60", After = "60" },
                    new Indentation { Left = "100", Right = "100" }
                ));

                var rPr = new RunProperties(
                    new Bold { Val = isHeader ? OnOffValue.FromBoolean(true) : null }!,
                    new FontSize { Val = "20" },
                    new Color { Val = isHeader ? "FFFFFF" : "000000" },
                    new RunFonts { Ascii = "Microsoft YaHei", HighAnsi = "Microsoft YaHei", EastAsia = "Microsoft YaHei" }
                );

                p.Append(new Run(rPr, new Text(rows[r][c])));
                cell.Append(p);
                row.Append(cell);
            }
            table.Append(row);
        }

        body.Append(table);
    }

    // Content builders
    static void AddTitlePage(Body body)
    {
        AddParagraph(body, "UYLP", "Title");
        AddParagraph(body, "释放你的领导潜能", "Subtitle");
        AddParagraph(body, "—— 讲师手册 ——", "Subtitle");
        AddParagraph(body, "", "Normal");
        AddParagraph(body, "Unleash Your Leadership Potential", "Subtitle");
        AddParagraph(body, "", "Normal");
        AddParagraph(body, "", "Normal");
        AddParagraph(body, "课程定位：企业中高层管理者领导力发展", "InfoBox");
        AddParagraph(body, "标准课时：2天（每天6小时，共12小时）", "InfoBox");
        AddParagraph(body, "学员人数：24-32人（建议分组，每组4-8人）", "InfoBox");
        AddParagraph(body, "", "Normal");
        AddParagraph(body, "", "Normal");
        AddParagraph(body, "版本：完整版 v1.0", "Normal");
        AddParagraph(body, "发布日期：2026年6月", "Normal");
        AddPageBreak(body);
    }

    static void AddTableOfContents(Body body)
    {
        AddParagraph(body, "目录", "Heading1");

        string[] toc = new[] {
            "第一部分：讲师指南",
            "  1.1 课程定位与核心价值",
            "  1.2 讲师角色定位",
            "  1.3 课程设计理念",
            "  1.4 教学方法论",
            "",
            "第二部分：完整授课指引",
            "  2.1 模块一：领导者角色与绩效管理体系",
            "  2.2 模块二：辅导入门：WHEN/HOW/Y",
            "  2.3 模块三：有效反馈：CAIR模型",
            "  2.4 模块四：困难谈话",
            "  2.5 模块五：联结沟通与工作关系",
            "  2.6 模块六：高级辅导、有效授权与MAP",
            "",
            "第三部分：体验活动完整设计",
            "  3.1 月球会议（第一模块）",
            "  3.2 三岛救援（第五模块）",
            "",
            "第四部分：角色扮演完整设计",
            "  4.1 辅导对话角色扮演",
            "  4.2 反馈对话角色扮演",
            "  4.3 困难谈话角色扮演",
            "",
            "第五部分：讲师工具",
            "  5.1 讲师时间控制表",
            "  5.2 学员表现观察量表",
            "  5.3 课程评估指引",
            "  5.4 危机处理预案",
            "",
            "第六部分：附录",
            "  6.1 核心模型速查",
            "  6.2 参考资料",
            "  6.3 术语表"
        };

        foreach (var item in toc)
            AddParagraph(body, item, "Normal");

        AddPageBreak(body);
    }

    static void AddPart1(Body body)
    {
        AddParagraph(body, "第一部分：讲师指南", "Heading1");

        // 1.1
        AddParagraph(body, "1.1 课程定位与核心价值", "Heading2");
        AddParagraph(body, "UYLP（Unleash Your Leadership Potential）是一款专注于帮助企业中高层管理者释放领导潜能的体验式课程。", "Normal");
        AddParagraph(body, "", "Normal");
        AddParagraph(body, "核心价值主张", "Heading3");
        AddParagraph(body, "1. 从\"管人理事\"到\"理人管事\"：帮助管理者从繁琐的事务中抽身，通过有效的辅导、反馈和授权提升团队整体绩效。", "Normal");
        AddParagraph(body, "2. 从\"被动应对\"到\"主动干预\"：教授管理者在关键时刻进行有效干预的技能，而不是等问题恶化。", "Normal");
        AddParagraph(body, "3. 从\"个人英雄\"到\"教练型领导\"：培养管理者的\"乘法思维\"——通过培养他人成就更大的事业。", "Normal");
        AddParagraph(body, "", "Normal");
        AddParagraph(body, "学员收益", "Heading3");
        AddParagraph(body, "• 掌握辅导、反馈、授权三大核心干预技能", "Normal");
        AddParagraph(body, "• 提升困难谈话的处理能力", "Normal");
        AddParagraph(body, "• 建立更加稳固的工作关系和团队联结", "Normal");
        AddParagraph(body, "• 学会使用MAP模型进行高级辅导和授权", "Normal");
        AddParagraph(body, "", "Normal");

        // 1.2
        AddParagraph(body, "1.2 讲师角色定位", "Heading2");
        AddParagraph(body, "UYLP讲师不仅是知识的传递者，更是学习的促进者和体验的引导者。", "Normal");
        AddParagraph(body, "", "Normal");
        AddParagraph(body, "三重角色", "Heading3");
        AddParagraph(body, "【角色一：学习设计师】", "Heading4");
        AddParagraph(body, "• 精心设计每一个学习环节，确保体验与反思的平衡", "Normal");
        AddParagraph(body, "• 将抽象的领导力概念转化为可操作的行为技能", "Normal");
        AddParagraph(body, "• 构建安全的学习环境，让学员敢于尝试和犯错", "Normal");
        AddParagraph(body, "", "Normal");
        AddParagraph(body, "【角色二：引导师】", "Heading4");
        AddParagraph(body, "• 通过提问而非告知来激发学员思考", "Normal");
        AddParagraph(body, "• 鼓励学员分享经验，促进相互学习", "Normal");
        AddParagraph(body, "• 在关键时刻提供\"战略性暂停\"，让学员消化体验", "Normal");
        AddParagraph(body, "", "Normal");
        AddParagraph(body, "【角色三：教练】", "Heading4");
        AddParagraph(body, "• 示范而非说教——用自身经验诠释概念", "Normal");
        AddParagraph(body, "• 给予及时、正向的反馈，强化正确行为", "Normal");
        AddParagraph(body, "• 保持中立，不将自己的价值观强加于学员", "Normal");
        AddParagraph(body, "", "Normal");

        // 1.3
        AddParagraph(body, "1.3 课程设计理念", "Heading2");
        AddParagraph(body, "体验式学习循环", "Heading3");
        AddParagraph(body, "本课程采用大卫·科尔布（David Kolb）的体验式学习循环作为核心教学设计理念：", "Normal");
        AddParagraph(body, "", "Normal");
        AddParagraph(body, "具体经验 → 反思观察 → 抽象概念化 → 主动实践", "Normal");
        AddParagraph(body, "", "Normal");
        AddParagraph(body, "每一个模块都遵循这一循环：先通过活动或案例让学员获得\"切身体验\"，然后引导他们\"反思观察\"，接着帮助他们\"抽象概念化\"形成理论框架，最后设计练习让学员\"主动实践\"。", "Normal");
        AddParagraph(body, "", "Normal");
        AddParagraph(body, "3:1参与原则", "Heading3");
        AddParagraph(body, "根据成人学习理论，成人最佳学习效果来自于3:1的参与比例：", "Normal");
        AddParagraph(body, "• 30% 时间用于知识输入（讲解、阅读、观看）", "Normal");
        AddParagraph(body, "• 70% 时间用于体验和练习（活动、讨论、角色扮演、反馈）", "Normal");
        AddParagraph(body, "本课程严格遵循这一原则，确保学员有充足的动手操作机会。", "Normal");
        AddParagraph(body, "", "Normal");

        // 1.4
        AddParagraph(body, "1.4 教学方法论", "Heading2");
        AddParagraph(body, "核心教学方法", "Heading3");
        AddParagraph(body, "【体验式活动】", "Heading4");
        AddParagraph(body, "• 月球会议：体验领导者在资源受限情况下的决策困境", "Normal");
        AddParagraph(body, "• 三岛救援：理解联结沟通的重要性和团队协作的复杂性", "Normal");
        AddParagraph(body, "", "Normal");
        AddParagraph(body, "【角色扮演】", "Heading4");
        AddParagraph(body, "• 辅导对话：练习WHEN/HOW/Y模型的实际应用", "Normal");
        AddParagraph(body, "• 反馈对话：运用CAIR模型进行有效反馈", "Normal");
        AddParagraph(body, "• 困难谈话：处理敏感话题的沟通技巧", "Normal");
        AddParagraph(body, "", "Normal");
        AddParagraph(body, "【小组讨论】", "Heading4");
        AddParagraph(body, "• 反思问题：连接体验与日常工作场景", "Normal");
        AddParagraph(body, "• 经验分享：促进学员间的相互学习", "Normal");
        AddParagraph(body, "", "Normal");
        AddParagraph(body, "关键教学原则", "Heading3");
        AddParagraph(body, "1. 安全感优先：创造一个让学员敢于冒险、坦诚分享的环境", "Normal");
        AddParagraph(body, "2. 提问优于告知：通过苏格拉底式提问引导学员自己得出结论", "Normal");
        AddParagraph(body, "3. 错误是学习机会：将错误转化为建设性的学习时刻", "Normal");
        AddParagraph(body, "4. 联系实际：确保每一个概念都能连接到学员的实际工作场景", "Normal");

        AddPageBreak(body);
    }

    static void AddPart2(Body body)
    {
        AddParagraph(body, "第二部分：完整授课指引", "Heading1");

        // 时间总览
        AddParagraph(body, "课程时间总览", "Heading2");
        AddParagraph(body, "【Day 1 时间表】", "Heading3");
        AddTable(body, new string[][] {
            new[] { "时间", "模块/活动", "内容", "物料" },
            new[] { "08:30-09:00", "签到与准备", "学员签到，发放材料", "签到表、学员手册" },
            new[] { "09:00-09:15", "开场", "课程介绍，目标设定", "PPT" },
            new[] { "09:15-10:45", "模块一", "领导者角色与绩效管理体系", "月球会议物料" },
            new[] { "10:45-11:00", "茶歇", "", "" },
            new[] { "11:00-12:30", "模块二（上）", "辅导入门：WHEN/HOW/Y", "角色扮演卡" },
            new[] { "12:30-13:30", "午餐", "", "" },
            new[] { "13:30-15:30", "模块二（下）", "辅导入门：角色扮演练习", "观察量表" },
            new[] { "15:30-15:45", "茶歇", "", "" },
            new[] { "15:45-17:15", "模块三", "有效反馈：CAIR模型", "反馈对话案例" },
            new[] { "17:15-17:30", "总结", "当日回顾，明日预告", "反思问卷" }
        });

        AddParagraph(body, "", "Normal");
        AddParagraph(body, "【Day 2 时间表】", "Heading3");
        AddTable(body, new string[][] {
            new[] { "时间", "模块/活动", "内容", "物料" },
            new[] { "08:30-09:00", "签到与回顾", "回答学员问题，回顾昨日内容", "答疑清单" },
            new[] { "09:00-10:30", "模块四", "困难谈话", "角色扮演卡" },
            new[] { "10:30-10:45", "茶歇", "", "" },
            new[] { "10:45-12:15", "模块五（上）", "联结沟通与工作关系", "三岛救援物料" },
            new[] { "12:15-13:15", "午餐", "", "" },
            new[] { "13:15-15:15", "模块五（下）", "三岛救援体验活动", "复盘问题卡" },
            new[] { "15:15-15:30", "茶歇", "", "" },
            new[] { "15:30-17:00", "模块六", "高级辅导、有效授权与MAP", "授权练习材料" },
            new[] { "17:00-17:30", "总结", "课程总结，行为承诺", "行动计划表" }
        });

        AddPageBreak(body);

        // 模块一
        AddParagraph(body, "2.1 模块一：领导者角色与绩效管理体系", "Heading2");
        AddParagraph(body, "模块时长：90分钟", "TimeBox");
        AddParagraph(body, "学习目标", "Heading3");
        AddParagraph(body, "• 理解领导者在绩效管理体系中的角色转变", "Normal");
        AddParagraph(body, "• 掌握从\"任务分配者\"到\"绩效辅导者\"的角色转换", "Normal");
        AddParagraph(body, "• 认识传统绩效评估的局限性", "Normal");
        AddParagraph(body, "", "Normal");
        AddParagraph(body, "知识要点", "Heading3");
        AddParagraph(body, "【传统vs现代绩效管理】", "Heading4");
        AddParagraph(body, "传统模式：年度评估 → 评分 → 奖惩", "Normal");
        AddParagraph(body, "现代模式：持续辅导 → 实时反馈 → 共同发展", "Normal");
        AddParagraph(body, "", "Normal");
        AddParagraph(body, "【管理者在绩效管理中的新角色】", "Heading4");
        AddParagraph(body, "1. 诊断者：了解团队成员的发展阶段和需求", "Normal");
        AddParagraph(body, "2. 辅导者：通过辅导帮助员工提升能力", "Normal");
        AddParagraph(body, "3. 反馈者：提供及时、具体、正向的反馈", "Normal");
        AddParagraph(body, "4. 授权者：在合适的时机进行有效授权", "Normal");
        AddParagraph(body, "", "Normal");
        AddParagraph(body, "体验活动：月球会议", "Heading3");
        AddParagraph(body, "时间：45分钟 | 物料：A3纸、月球地图、投票贴纸、计分表", "TimeBox");
        AddParagraph(body, "", "Normal");
        AddParagraph(body, "【活动流程】", "Heading4");
        AddParagraph(body, "1. 情境导入（5分钟）", "Normal");
        AddParagraph(body, "2. 个人决策（10分钟）", "Normal");
        AddParagraph(body, "3. 小组讨论与决策（15分钟）", "Normal");
        AddParagraph(body, "4. 小组汇报与讲师点评（10分钟）", "Normal");
        AddParagraph(body, "5. 反思总结（5分钟）", "Normal");
        AddParagraph(body, "", "Normal");
        AddParagraph(body, "常见学员问题及应答", "Heading3");
        AddParagraph(body, "Q: \"我们公司已经有了绩效考核系统，还需要辅导吗？\"", "InfoBox");
        AddParagraph(body, "A: \"绩效考核系统解决的是'评估'问题，而辅导解决的是'发展'问题。两者相辅相成。\"", "Normal");
        AddParagraph(body, "", "Normal");
        AddParagraph(body, "重点/难点提示", "Heading3");
        AddParagraph(body, "【重点】强调管理者角色的转变——从\"裁判\"到\"教练\"", "Normal");
        AddParagraph(body, "【难点】帮助学员理解\"辅导\"不是\"监控\"或\"检查\"，而是一种支持性对话", "Normal");

        AddPageBreak(body);

        // 模块二
        AddParagraph(body, "2.2 模块二：辅导入门：WHEN/HOW/Y", "Heading2");
        AddParagraph(body, "模块时长：120分钟", "TimeBox");
        AddParagraph(body, "学习目标", "Heading3");
        AddParagraph(body, "• 掌握\"何时辅导\"（WHEN）的判断标准", "Normal");
        AddParagraph(body, "• 学会\"如何辅导\"（HOW）的STAR模型", "Normal");
        AddParagraph(body, "• 理解\"为什么辅导\"（Y）对员工动机的重要性", "Normal");
        AddParagraph(body, "", "Normal");
        AddParagraph(body, "核心模型：辅导三问", "Heading3");
        AddParagraph(body, "【WHEN - 何时辅导】", "Heading4");
        AddParagraph(body, "• 绩效下降时：员工表现低于预期", "Normal");
        AddParagraph(body, "• 发展机会时：新任务、新角色、新挑战", "Normal");
        AddParagraph(body, "• 主动请求时：员工主动寻求反馈或帮助", "Normal");
        AddParagraph(body, "• 关键转折时：职业发展、岗位变动、重要决策", "Normal");
        AddParagraph(body, "", "Normal");
        AddParagraph(body, "【HOW - 如何辅导：STAR模型】", "Heading4");
        AddParagraph(body, "• S - Situation：描述情境，提供背景", "Normal");
        AddParagraph(body, "• T - Task：明确任务，说明期望", "Normal");
        AddParagraph(body, "• A - Action：询问行动，了解过程", "Normal");
        AddParagraph(body, "• R - Result：探讨结果，给予反馈", "Normal");
        AddParagraph(body, "", "Normal");
        AddParagraph(body, "【Y - 为什么辅导】", "Heading4");
        AddParagraph(body, "• 激发内在动机：帮助员工看到\"我为什么要做这件事\"", "Normal");
        AddParagraph(body, "• 建立情感联结：通过辅导建立信任关系", "Normal");
        AddParagraph(body, "• 创造意义感：让工作成为实现更大目标的途径", "Normal");
        AddParagraph(body, "", "Normal");
        AddParagraph(body, "角色扮演设计", "Heading3");
        AddParagraph(body, "时间：45分钟 | 场景：新晋经理辅导下属处理客户投诉", "TimeBox");

        AddPageBreak(body);

        // 模块三
        AddParagraph(body, "2.3 模块三：有效反馈：CAIR模型", "Heading2");
        AddParagraph(body, "模块时长：90分钟", "TimeBox");
        AddParagraph(body, "学习目标", "Heading3");
        AddParagraph(body, "• 掌握CAIR反馈模型四个步骤", "Normal");
        AddParagraph(body, "• 区分配对性反馈与正面反馈", "Normal");
        AddParagraph(body, "• 学会在日常工作中即时反馈", "Normal");
        AddParagraph(body, "", "Normal");
        AddParagraph(body, "CAIR模型", "Heading3");
        AddParagraph(body, "【C - Context 情境】", "Heading4");
        AddParagraph(body, "• 提供具体的时间和情境", "Normal");
        AddParagraph(body, "• \"昨天下午的团队会议上...\"", "Normal");
        AddParagraph(body, "", "Normal");
        AddParagraph(body, "【A - Action 行为】", "Heading4");
        AddParagraph(body, "• 描述具体可观察的行为", "Normal");
        AddParagraph(body, "• \"你打断了小王的发言，然后直接提出了自己的方案\"", "Normal");
        AddParagraph(body, "", "Normal");
        AddParagraph(body, "【I - Impact 影响】", "Heading4");
        AddParagraph(body, "• 说明行为的影响", "Normal");
        AddParagraph(body, "• \"这让小王有些尴尬，也影响了团队讨论的充分性\"", "Normal");
        AddParagraph(body, "", "Normal");
        AddParagraph(body, "【R - Request 请求】", "Heading4");
        AddParagraph(body, "• 提出具体的改变请求", "Normal");
        AddParagraph(body, "• \"下次能否先让小王说完，你再做补充？\"", "Normal");
        AddParagraph(body, "", "Normal");
        AddParagraph(body, "角色扮演：反馈对话", "Heading3");
        AddParagraph(body, "时间：30分钟 | 场景：经理向员工反馈其在项目汇报中的表现", "TimeBox");

        AddPageBreak(body);

        // 模块四
        AddParagraph(body, "2.4 模块四：困难谈话", "Heading2");
        AddParagraph(body, "模块时长：90分钟", "TimeBox");
        AddParagraph(body, "学习目标", "Heading3");
        AddParagraph(body, "• 认识困难谈话的本质和常见类型", "Normal");
        AddParagraph(body, "• 掌握困难谈话的准备框架", "Normal");
        AddParagraph(body, "• 学会在谈话中保持冷静和专注", "Normal");
        AddParagraph(body, "", "Normal");
        AddParagraph(body, "困难谈话类型", "Heading3");
        AddParagraph(body, "• 绩效问题谈话", "Normal");
        AddParagraph(body, "• 行为问题谈话", "Normal");
        AddParagraph(body, "• 纪律处分谈话", "Normal");
        AddParagraph(body, "• 裁员/降职谈话", "Normal");
        AddParagraph(body, "• 处理冲突谈话", "Normal");
        AddParagraph(body, "", "Normal");
        AddParagraph(body, "准备框架：PLACE", "Heading3");
        AddParagraph(body, "• P - Purpose：明确谈话目的", "Normal");
        AddParagraph(body, "• L - Logic：准备逻辑结构", "Normal");
        AddParagraph(body, "• A - Anticipate：预判对方反应", "Normal");
        AddParagraph(body, "• C - Compose：调整自己心态", "Normal");
        AddParagraph(body, "• E - Evidence：准备具体证据", "Normal");
        AddParagraph(body, "", "Normal");
        AddParagraph(body, "谈话技巧", "Heading3");
        AddParagraph(body, "【开场】先建立情感联结，再进入正题", "Normal");
        AddParagraph(body, "【中段】使用\"我\"开头的陈述，避免指责", "Normal");
        AddParagraph(body, "【结尾】明确下一步行动计划", "Normal");

        AddPageBreak(body);

        // 模块五
        AddParagraph(body, "2.5 模块五：联结沟通与工作关系", "Heading2");
        AddParagraph(body, "模块时长：120分钟", "TimeBox");
        AddParagraph(body, "学习目标", "Heading3");
        AddParagraph(body, "• 理解联结沟通的概念和重要性", "Normal");
        AddParagraph(body, "• 掌握建立和维护工作关系的技巧", "Normal");
        AddParagraph(body, "• 学会在团队中创造\"联结感\"", "Normal");
        AddParagraph(body, "", "Normal");
        AddParagraph(body, "体验活动：三岛救援", "Heading3");
        AddParagraph(body, "时间：60分钟 | 物料：三岛地图、角色卡、资源表、投票贴", "TimeBox");
        AddParagraph(body, "", "Normal");
        AddParagraph(body, "【活动流程】", "Heading4");
        AddParagraph(body, "1. 情境导入（10分钟）", "Normal");
        AddParagraph(body, "2. 角色分配与任务理解（10分钟）", "Normal");
        AddParagraph(body, "3. 岛屿内协商（20分钟）", "Normal");
        AddParagraph(body, "4. 岛屿间谈判与交易（15分钟）", "Normal");
        AddParagraph(body, "5. 结果揭晓与复盘（25分钟）", "Normal");
        AddParagraph(body, "", "Normal");
        AddParagraph(body, "核心概念：工作关系四层模型", "Heading3");
        AddParagraph(body, "【第一层：认识层】知道对方是谁，点头之交", "Normal");
        AddParagraph(body, "【第二层：交易层】基于工作任务的互动", "Normal");
        AddParagraph(body, "【第三层：合作层】共同目标，主动互助", "Normal");
        AddParagraph(body, "【第四层：联结层】深度信任，全方位支持", "Normal");

        AddPageBreak(body);

        // 模块六
        AddParagraph(body, "2.6 模块六：高级辅导、有效授权与MAP", "Heading2");
        AddParagraph(body, "模块时长：120分钟", "TimeBox");
        AddParagraph(body, "学习目标", "Heading3");
        AddParagraph(body, "• 掌握复杂情境下的高级辅导技能", "Normal");
        AddParagraph(body, "• 理解有效授权的原则和流程", "Normal");
        AddParagraph(body, "• 学会使用MAP模型进行系统化辅导", "Normal");
        AddParagraph(body, "", "Normal");
        AddParagraph(body, "MAP模型", "Heading3");
        AddParagraph(body, "【M - Measure 衡量】", "Heading4");
        AddParagraph(body, "• 明确衡量标准和成功指标", "Normal");
        AddParagraph(body, "• \"我们如何知道任务完成了？\"", "Normal");
        AddParagraph(body, "", "Normal");
        AddParagraph(body, "【A - Align 对齐】", "Heading4");
        AddParagraph(body, "• 确保目标和方式的一致性", "Normal");
        AddParagraph(body, "• \"这样做是否符合我们的价值观和原则？\"", "Normal");
        AddParagraph(body, "", "Normal");
        AddParagraph(body, "【P - Process 流程】", "Heading4");
        AddParagraph(body, "• 明确里程碑和检查点", "Normal");
        AddParagraph(body, "• \"我们如何分阶段进行？何时检查进展？\"", "Normal");
        AddParagraph(body, "", "Normal");
        AddParagraph(body, "授权的层次", "Heading3");
        AddParagraph(body, "【层次一：执行】告知具体做什么", "Normal");
        AddParagraph(body, "【层次二：审批】需要上级批准", "Normal");
        AddParagraph(body, "【层次三：建议】可以提建议，由上级决定", "Normal");
        AddParagraph(body, "【层次四：同意】可以行动，但需要上级同意", "Normal");
        AddParagraph(body, "【层次五：自行决定】完全自主决定", "Normal");
        AddParagraph(body, "【层次六：委任】将权力完全委托给下属", "Normal");

        AddPageBreak(body);
    }

    static void AddPart3(Body body)
    {
        AddParagraph(body, "第三部分：体验活动完整设计", "Heading1");

        // 月球会议
        AddParagraph(body, "3.1 月球会议（第一模块）", "Heading2");
        AddParagraph(body, "活动概述", "Heading3");
        AddParagraph(body, "【活动名称】月球会议 | 【活动类型】决策模拟 | 【活动时间】45分钟", "Normal");
        AddParagraph(body, "【活动目的】体验领导者在资源受限情况下的决策困境，理解不同决策风格的利弊", "TimeBox");
        AddParagraph(body, "", "Normal");
        AddParagraph(body, "物料清单", "Heading3");
        AddParagraph(body, "A3月球地图（每组1张）", "Checklist");
        AddParagraph(body, "角色卡（每组6张）", "Checklist");
        AddParagraph(body, "决策记录表（每组1份）", "Checklist");
        AddParagraph(body, "投票贴纸（每组红、黄、绿各10张）", "Checklist");
        AddParagraph(body, "白板/海报纸（用于小组汇报）", "Checklist");
        AddParagraph(body, "计时器", "Checklist");
        AddParagraph(body, "", "Normal");
        AddParagraph(body, "场景设置", "Heading3");
        AddParagraph(body, "【情境设定】", "Heading4");
        AddParagraph(body, "1969年，阿波罗11号登月任务中，宇航员在月球表面遇到紧急状况。他们必须在限定时间内，从15件物品中选出5件最重要的，以便在月球表面生存并返回轨道。", "Normal");
        AddParagraph(body, "", "Normal");
        AddParagraph(body, "【任务目标】", "Heading4");
        AddParagraph(body, "小组需要在20分钟内达成共识，选择5件最重要的物品，并说明理由。", "Normal");
        AddParagraph(body, "", "Normal");
        AddParagraph(body, "【角色分配】（每组6人）", "Heading4");
        AddParagraph(body, "• 指挥官：负责最终决策", "Normal");
        AddParagraph(body, "• 首席科学家：提供技术分析", "Normal");
        AddParagraph(body, "• 通讯专家：负责记录和沟通", "Normal");
        AddParagraph(body, "• 医生：关注人员安全", "Normal");
        AddParagraph(body, "• 工程师：提供工程视角", "Normal");
        AddParagraph(body, "• 财务官：评估资源成本", "Normal");
        AddParagraph(body, "", "Normal");
        AddParagraph(body, "引导话术", "Heading3");
        AddParagraph(body, "【活动导入】", "Heading4");
        AddParagraph(body, "\"各位，欢迎来到1969年的NASA任务控制中心。我们刚刚收到阿波罗11号的紧急信号——宇航员在月球表面遇到了意外状况。现在，你们是地球上唯一能够帮助他们做出生死抉择的人。\"", "Normal");
        AddParagraph(body, "", "Normal");
        AddParagraph(body, "【规则说明】", "Heading4");
        AddParagraph(body, "\"你们有20分钟时间进行讨论和决策。请注意：1）每个角色必须发言；2）最终决策需要全组同意；3）请在决策记录表上写下你们的选择和理由。\"", "Normal");
        AddParagraph(body, "", "Normal");
        AddParagraph(body, "【时间提醒】", "Heading4");
        AddParagraph(body, "• 15分钟时：\"还剩5分钟，请开始形成共识\"", "Normal");
        AddParagraph(body, "• 18分钟时：\"还剩2分钟，请做出最终决定\"", "Normal");
        AddParagraph(body, "• 20分钟时：\"时间到，请停止讨论\"", "Normal");
        AddParagraph(body, "", "Normal");
        AddParagraph(body, "复盘问题", "Heading3");
        AddParagraph(body, "【个人反思】", "Heading4");
        AddParagraph(body, "1. 在讨论过程中，你扮演了什么角色？", "Normal");
        AddParagraph(body, "2. 你是否充分表达了你的观点？", "Normal");
        AddParagraph(body, "3. 小组最终的决策是否体现了你的想法？", "Normal");
        AddParagraph(body, "", "Normal");
        AddParagraph(body, "【团队反思】", "Heading4");
        AddParagraph(body, "1. 小组是如何做出决策的？有没有发生冲突？如何解决的？", "Normal");
        AddParagraph(body, "2. 小组中是否存在\"一言堂\"或\"沉默者\"？这对结果有什么影响？", "Normal");
        AddParagraph(body, "3. 如果时间更紧/更充裕，结果会不同吗？", "Normal");
        AddParagraph(body, "", "Normal");
        AddParagraph(body, "【联系实际】", "Heading4");
        AddParagraph(body, "1. 这个活动与你工作中的哪些决策场景相似？", "Normal");
        AddParagraph(body, "2. 作为领导者，你如何在有限信息和时间内做出高质量决策？", "Normal");
        AddParagraph(body, "3. 你的团队在决策过程中是否存在类似的角色问题？", "Normal");
        AddParagraph(body, "", "Normal");
        AddParagraph(body, "时间控制", "Heading3");
        AddTable(body, new string[][] {
            new[] { "环节", "时长", "讲师动作" },
            new[] { "情境导入", "5分钟", "介绍背景，分配角色" },
            new[] { "个人决策", "10分钟", "分发材料，计时观察" },
            new[] { "小组讨论", "15分钟", "巡视各组，必要时引导" },
            new[] { "汇报点评", "10分钟", "邀请小组分享，讲师点评" },
            new[] { "总结延伸", "5分钟", "联系模块主题，总结要点" }
        });
        AddParagraph(body, "", "Normal");
        AddParagraph(body, "讲师注意事项", "Heading3");
        AddParagraph(body, "【重点】强调\"共识\"而非\"投票\"——领导者的工作是促进共识", "Normal");
        AddParagraph(body, "【重点】观察每个小组的权力动态：谁在主导？谁在沉默？", "Normal");
        AddParagraph(body, "【难点】部分学员可能过于认真/竞争，观察他们的情绪反应", "Normal");
        AddParagraph(body, "【难点】如果小组陷入僵局，可以提示\"指挥官可以行使最终决定权\"", "Normal");

        AddPageBreak(body);

        // 三岛救援
        AddParagraph(body, "3.2 三岛救援（第五模块）", "Heading2");
        AddParagraph(body, "活动概述", "Heading3");
        AddParagraph(body, "【活动名称】三岛救援 | 【活动类型】资源协调与谈判模拟 | 【活动时间】60分钟", "Normal");
        AddParagraph(body, "【活动目的】体验跨部门协作的复杂性，理解联结沟通的重要性", "TimeBox");
        AddParagraph(body, "", "Normal");
        AddParagraph(body, "物料清单", "Heading3");
        AddParagraph(body, "三岛地图（每组1张）", "Checklist");
        AddParagraph(body, "角色卡（每岛2-3张）", "Checklist");
        AddParagraph(body, "资源交换协议表（每组3份）", "Checklist");
        AddParagraph(body, "岛屿专属资源卡（每岛1套）", "Checklist");
        AddParagraph(body, "紧急救援任务卡（每组1张）", "Checklist");
        AddParagraph(body, "计时器", "Checklist");
        AddParagraph(body, "", "Normal");
        AddParagraph(body, "场景设置", "Heading3");
        AddParagraph(body, "【情境设定】", "Heading4");
        AddParagraph(body, "三座相邻的岛屿——能源岛、制造岛、科技岛——突然遭遇海啸袭击。三岛居民必须相互协作，共同完成紧急救援任务。每座岛屿拥有不同的专属资源，但救援任务需要多岛屿资源配合才能完成。", "Normal");
        AddParagraph(body, "", "Normal");
        AddParagraph(body, "【任务目标】", "Heading4");
        AddParagraph(body, "• 主要目标：在30分钟内完成紧急救援任务", "Normal");
        AddParagraph(body, "• 次要目标：最大化各岛屿的生存资源", "Normal");
        AddParagraph(body, "", "Normal");
        AddParagraph(body, "【角色分配】（每组8-12人，分为3岛）", "Heading4");
        AddParagraph(body, "【能源岛】（2-4人）", "Normal");
        AddParagraph(body, "• 岛屿领袖：负责对外谈判", "Normal");
        AddParagraph(body, "• 能源专家：拥有电力和燃料专业知识", "Normal");
        AddParagraph(body, "", "Normal");
        AddParagraph(body, "【制造岛】（2-4人）", "Normal");
        AddParagraph(body, "• 岛屿领袖：负责对外谈判", "Normal");
        AddParagraph(body, "• 生产专家：拥有物资生产专业知识", "Normal");
        AddParagraph(body, "", "Normal");
        AddParagraph(body, "【科技岛】（2-4人）", "Normal");
        AddParagraph(body, "• 岛屿领袖：负责对外谈判", "Normal");
        AddParagraph(body, "• 技术专家：拥有医疗和通讯专业知识", "Normal");
        AddParagraph(body, "", "Normal");
        AddParagraph(body, "引导话术", "Heading3");
        AddParagraph(body, "【活动导入】", "Heading4");
        AddParagraph(body, "\"各位，现在你们分别是三座岛屿的居民。能源岛拥有电力和燃料，制造岛拥有原材料和生产设备，科技岛拥有医疗设备和技术人才。三座岛屿都遭受了海啸袭击，现在有一项紧急救援任务需要你们共同完成——救援被困在海上的一艘渔船。\"", "Normal");
        AddParagraph(body, "", "Normal");
        AddParagraph(body, "【规则说明】", "Heading4");
        AddParagraph(body, "\"请注意：1）每座岛屿只能与相邻岛屿直接交流；2）资源和物品只能通过'渡轮'运输；3）谈判达成后需要填写交换协议表；4）任务成功的条件是所有岛屿一致同意救援方案。\"", "Normal");
        AddParagraph(body, "", "Normal");
        AddParagraph(body, "【时间提醒】", "Heading4");
        AddParagraph(body, "• 10分钟时：宣布\"第一轮谈判结束\"", "Normal");
        AddParagraph(body, "• 20分钟时：宣布\"进入最后阶段\"", "Normal");
        AddParagraph(body, "• 30分钟时：宣布\"任务截止\"", "Normal");
        AddParagraph(body, "", "Normal");
        AddParagraph(body, "复盘问题", "Heading3");
        AddParagraph(body, "【个人反思】", "Heading4");
        AddParagraph(body, "1. 在谈判中，你最关注的是什么？", "Normal");
        AddParagraph(body, "2. 你岛上的决策机制是怎样的？", "Normal");
        AddParagraph(body, "3. 你与其他岛屿建立的关系如何？", "Normal");
        AddParagraph(body, "", "Normal");
        AddParagraph(body, "【团队反思】", "Heading4");
        AddParagraph(body, "1. 三个岛屿之间发生了什么？你们如何达成（或者未能达成）共识？", "Normal");
        AddParagraph(body, "2. 信息共享在这项活动中扮演了什么角色？", "Normal");
        AddParagraph(body, "3. 领导者在跨部门协作中应该扮演什么角色？", "Normal");
        AddParagraph(body, "", "Normal");
        AddParagraph(body, "【联系实际】", "Heading4");
        AddParagraph(body, "1. 这个活动与你工作中的跨部门协作有什么相似之处？", "Normal");
        AddParagraph(body, "2. 你是否遇到过类似的\"岛屿心态\"？如何打破？", "Normal");
        AddParagraph(body, "3. 如何在组织中建立更广泛的联结网络？", "Normal");
        AddParagraph(body, "", "Normal");
        AddParagraph(body, "时间控制", "Heading3");
        AddTable(body, new string[][] {
            new[] { "环节", "时长", "讲师动作" },
            new[] { "情境导入", "10分钟", "介绍背景，分配角色" },
            new[] { "岛屿内协商", "10分钟", "各组讨论内部需求" },
            new[] { "跨岛谈判", "20分钟", "引导岛屿间交流" },
            new[] { "任务结果宣布", "5分钟", "宣布结果" },
            new[] { "复盘讨论", "15分钟", "引导反思，联系实际" }
        });
        AddParagraph(body, "", "Normal");
        AddParagraph(body, "讲师注意事项", "Heading3");
        AddParagraph(body, "【重点】观察岛屿之间的信息流——谁在主动沟通？谁被边缘化？", "Normal");
        AddParagraph(body, "【重点】注意\"谈判僵局\"——如果小组卡住，可以引入\"外部调解人\"角色", "Normal");
        AddParagraph(body, "【难点】部分学员可能过于关注\"赢得谈判\"而忽略\"共同目标\"", "Normal");
        AddParagraph(body, "【难点】确保复盘时联系到工作场景，避免活动变成纯粹的游戏", "Normal");

        AddPageBreak(body);
    }

    static void AddPart4(Body body)
    {
        AddParagraph(body, "第四部分：角色扮演完整设计", "Heading1");

        AddParagraph(body, "角色扮演设计原则", "Heading2");
        AddParagraph(body, "UYLP课程中的角色扮演遵循以下设计原则：", "Normal");
        AddParagraph(body, "1. 真实性：场景来源于真实工作情境", "Normal");
        AddParagraph(body, "2. 安全性：创造一个允许犯错的学习环境", "Normal");
        AddParagraph(body, "3. 聚焦性：每次角色扮演聚焦于一个特定技能", "Normal");
        AddParagraph(body, "4. 循环性：练习 → 反馈 → 改进 → 再练习", "Normal");
        AddParagraph(body, "", "Normal");

        // 4.1 辅导对话角色扮演
        AddParagraph(body, "4.1 辅导对话角色扮演", "Heading2");
        AddParagraph(body, "建议时长：45分钟（每组3轮，每轮15分钟）", "TimeBox");
        AddParagraph(body, "场景设定", "Heading3");
        AddParagraph(body, "【场景】新晋经理小李辅导下属小王处理客户投诉", "Normal");
        AddParagraph(body, "【背景】小王是客服部的一名资深员工，业务能力强，但最近连续收到两起客户投诉。经理小李需要与小王进行辅导对话。", "Normal");
        AddParagraph(body, "", "Normal");
        AddParagraph(body, "角色背景", "Heading3");
        AddParagraph(body, "【辅导员 - 小李】", "Heading4");
        AddParagraph(body, "• 角色：客服部新晋升的经理，3个月管理经验", "Normal");
        AddParagraph(body, "• 目标：帮助小王找到问题根源，提升客户服务质量", "Normal");
        AddParagraph(body, "• 顾虑：担心处理不好会伤害与小王的关系", "Normal");
        AddParagraph(body, "", "Normal");
        AddParagraph(body, "【被辅导者 - 小王】", "Heading4");
        AddParagraph(body, "• 角色：客服部资深员工，入职5年，连续两个月绩效优秀", "Normal");
        AddParagraph(body, "• 目标：解释情况，希望得到理解和支持", "Normal");
        AddParagraph(body, "• 顾虑：担心被质疑能力，影响晋升", "Normal");
        AddParagraph(body, "", "Normal");
        AddParagraph(body, "观察员指引", "Heading3");
        AddParagraph(body, "【观察重点】", "Heading4");
        AddParagraph(body, "1. 辅导员是否建立了情感联结（Y）？", "Normal");
        AddParagraph(body, "2. 是否使用了STAR模型（S-T-A-R四步是否完整）？", "Normal");
        AddParagraph(body, "3. 辅导员是否在\"审问\"而非\"辅导\"？", "Normal");
        AddParagraph(body, "4. 小王的反应是什么？辅导是否有效？", "Normal");
        AddParagraph(body, "", "Normal");
        AddParagraph(body, "【记录要点】", "Heading4");
        AddParagraph(body, "• 关键对话片段（记录原话）", "Normal");
        AddParagraph(body, "• 辅导是否聚焦于行为而非人格", "Normal");
        AddParagraph(body, "• 是否达成了具体的改进行动", "Normal");
        AddParagraph(body, "", "Normal");
        AddParagraph(body, "反馈指引", "Heading3");
        AddParagraph(body, "【反馈顺序】", "Heading4");
        AddParagraph(body, "1. 先让辅导员分享感受：\"你觉得这次对话怎么样？\"", "Normal");
        AddParagraph(body, "2. 再让被辅导者分享感受：\"你的感受是什么？\"", "Normal");
        AddParagraph(body, "3. 观察员提供具体反馈（基于记录）", "Normal");
        AddParagraph(body, "4. 讲师总结要点，引入改进建议", "Normal");
        AddParagraph(body, "", "Normal");

        AddPageBreak(body);

        // 4.2 反馈对话角色扮演
        AddParagraph(body, "4.2 反馈对话角色扮演", "Heading2");
        AddParagraph(body, "建议时长：45分钟（每组3轮，每轮15分钟）", "TimeBox");
        AddParagraph(body, "场景设定", "Heading3");
        AddParagraph(body, "【场景】项目经理张明向团队成员刘芳反馈其在项目汇报中的表现", "Normal");
        AddParagraph(body, "【背景】刘芳在上周的项目汇报会上介绍了她负责的模块进展。她的汇报内容详实，但表达方式有些混乱，有时重复，有时跳跃。项目经理张明需要与刘芳进行反馈对话。", "Normal");
        AddParagraph(body, "", "Normal");
        AddParagraph(body, "角色背景", "Heading3");
        AddParagraph(body, "【反馈者 - 张明】", "Heading4");
        AddParagraph(body, "• 角色：项目经理，有8年工作经验", "Normal");
        AddParagraph(body, "• 目标：帮助刘芳提升汇报能力，同时不打击她的积极性", "Normal");
        AddParagraph(body, "• 顾虑：刘芳是团队骨干，担心反馈影响团队氛围", "Normal");
        AddParagraph(body, "", "Normal");
        AddParagraph(body, "【接收者 - 刘芳】", "Heading4");
        AddParagraph(body, "• 角色：高级工程师，第一次负责重要汇报", "Normal");
        AddParagraph(body, "• 目标：了解自己的表现，希望下次做得更好", "Normal");
        AddParagraph(body, "• 顾虑：担心被领导认为能力不足", "Normal");
        AddParagraph(body, "", "Normal");
        AddParagraph(body, "观察重点", "Heading3");
        AddParagraph(body, "1. 反馈是否符合CAIR模型？（Context-Action-Impact-Request）", "Normal");
        AddParagraph(body, "2. 是否区分了\"观察\"与\"推断\"？", "Normal");
        AddParagraph(body, "3. 请求是否具体、可操作？", "Normal");
        AddParagraph(body, "4. 双方的情绪反应如何？", "Normal");

        AddPageBreak(body);

        // 4.3 困难谈话角色扮演
        AddParagraph(body, "4.3 困难谈话角色扮演", "Heading2");
        AddParagraph(body, "建议时长：60分钟（每组3轮，每轮20分钟）", "TimeBox");
        AddParagraph(body, "场景设定", "Heading3");
        AddParagraph(body, "【场景】部门总监陈总与即将被劝退的员工小周进行离职谈话", "Normal");
        AddParagraph(body, "【背景】小周入职公司3年，担任市场专员。近半年绩效持续下滑，未能达到考核要求。公司决定与其协商解除劳动合同。陈总需要与小周进行这项困难谈话。", "Normal");
        AddParagraph(body, "", "Normal");
        AddParagraph(body, "角色背景", "Heading3");
        AddParagraph(body, "【谈话者 - 陈总】", "Heading4");
        AddParagraph(body, "• 角色：市场部总监，与小周共事3年", "Normal");
        AddParagraph(body, "• 目标：传达公司决定，尽可能减少对小周的伤害，维护良好关系", "Normal");
        AddParagraph(body, "• 顾虑：与小周有私人交情，感到愧疚", "Normal");
        AddParagraph(body, "", "Normal");
        AddParagraph(body, "【接收者 - 小周】", "Heading4");
        AddParagraph(body, "• 角色：市场专员，对公司有感情", "Normal");
        AddParagraph(body, "• 目标：了解原因，争取合理补偿，维护尊严", "Normal");
        AddParagraph(body, "• 顾虑：担心失去工作后的经济压力", "Normal");
        AddParagraph(body, "", "Normal");
        AddParagraph(body, "观察重点", "Heading3");
        AddParagraph(body, "1. 谈话者是否遵循了PLACE准备框架？", "Normal");
        AddParagraph(body, "2. 开场是否建立了情感联结？", "Normal");
        AddParagraph(body, "3. 是否使用了\"我\"开头的陈述？", "Normal");
        AddParagraph(body, "4. 谈话者如何处理对方的情绪反应？", "Normal");
        AddParagraph(body, "5. 结尾是否明确了后续安排？", "Normal");
        AddParagraph(body, "", "Normal");
        AddParagraph(body, "特别提示", "Heading3");
        AddParagraph(body, "【讲师注意】此场景涉及敏感话题，讲师需要：", "InfoBox");
        AddParagraph(body, "• 在活动前强调\"这是学习场景，与真实情况不同\"", "Normal");
        AddParagraph(body, "• 观察学员的情绪反应，必要时暂停活动", "Normal");
        AddParagraph(body, "• 在复盘时强调\"同理心\"和\"尊重\"的重要性", "Normal");
        AddParagraph(body, "• 不要评判学员的表现，而是引导自我反思", "Normal");

        AddPageBreak(body);
    }

    static void AddPart5(Body body)
    {
        AddParagraph(body, "第五部分：讲师工具", "Heading1");

        // 5.1 时间控制表
        AddParagraph(body, "5.1 讲师时间控制表", "Heading2");
        AddParagraph(body, "【Day 1 时间表】", "Heading3");
        AddTable(body, new string[][] {
            new[] { "时间", "模块/活动", "内容", "物料" },
            new[] { "08:30-09:00", "签到与准备", "学员签到，发放材料", "签到表、学员手册" },
            new[] { "09:00-09:15", "开场", "课程介绍，目标设定", "PPT" },
            new[] { "09:15-10:45", "模块一", "领导者角色与绩效管理体系", "月球会议物料" },
            new[] { "10:45-11:00", "茶歇", "", "" },
            new[] { "11:00-12:30", "模块二（上）", "辅导入门：WHEN/HOW/Y", "角色扮演卡" },
            new[] { "12:30-13:30", "午餐", "", "" },
            new[] { "13:30-15:30", "模块二（下）", "辅导入门：角色扮演练习", "观察量表" },
            new[] { "15:30-15:45", "茶歇", "", "" },
            new[] { "15:45-17:15", "模块三", "有效反馈：CAIR模型", "反馈对话案例" },
            new[] { "17:15-17:30", "总结", "当日回顾，明日预告", "反思问卷" }
        });

        AddParagraph(body, "", "Normal");
        AddParagraph(body, "【Day 2 时间表】", "Heading3");
        AddTable(body, new string[][] {
            new[] { "时间", "模块/活动", "内容", "物料" },
            new[] { "08:30-09:00", "签到与回顾", "回答学员问题，回顾昨日内容", "答疑清单" },
            new[] { "09:00-10:30", "模块四", "困难谈话", "角色扮演卡" },
            new[] { "10:30-10:45", "茶歇", "", "" },
            new[] { "10:45-12:15", "模块五（上）", "联结沟通与工作关系", "三岛救援物料" },
            new[] { "12:15-13:15", "午餐", "", "" },
            new[] { "13:15-15:15", "模块五（下）", "三岛救援体验活动", "复盘问题卡" },
            new[] { "15:15-15:30", "茶歇", "", "" },
            new[] { "15:30-17:00", "模块六", "高级辅导、有效授权与MAP", "授权练习材料" },
            new[] { "17:00-17:30", "总结", "课程总结，行为承诺", "行动计划表" }
        });

        AddPageBreak(body);

        // 5.2 学员表现观察量表
        AddParagraph(body, "5.2 学员表现观察量表", "Heading2");
        AddParagraph(body, "讲师在授课过程中使用此量表观察学员表现，用于个性化反馈和课程调整。", "Normal");
        AddParagraph(body, "", "Normal");
        AddParagraph(body, "【观察量表模板】", "Heading3");
        AddTable(body, new string[][] {
            new[] { "学员姓名", "模块", "参与度", "关键行为", "发展建议" },
            new[] { "1", "模块一", "□高 □中 □低", "", "" },
            new[] { "2", "模块一", "□高 □中 □低", "", "" },
            new[] { "3", "模块一", "□高 □中 □低", "", "" },
            new[] { "4", "模块一", "□高 □中 □低", "", "" },
            new[] { "5", "模块一", "□高 □中 □低", "", "" }
        });
        AddParagraph(body, "", "Normal");
        AddParagraph(body, "【参与度评估标准】", "Heading4");
        AddParagraph(body, "高：主动发言，提出深刻问题，积极参与讨论和活动", "Normal");
        AddParagraph(body, "中：偶尔发言，能够配合小组活动", "Normal");
        AddParagraph(body, "低：很少发言或从不发言，需要特别关注", "Normal");
        AddParagraph(body, "", "Normal");
        AddParagraph(body, "【关键行为记录】", "Heading4");
        AddParagraph(body, "• 辅导/反馈技能展示", "Normal");
        AddParagraph(body, "• 领导力行为表现", "Normal");
        AddParagraph(body, "• 团队协作表现", "Normal");
        AddParagraph(body, "• 反思深度", "Normal");

        AddPageBreak(body);

        // 5.3 课程评估指引
        AddParagraph(body, "5.3 课程评估指引", "Heading2");
        AddParagraph(body, "评估层次", "Heading3");
        AddParagraph(body, "【反应层】学员对课程的满意度", "Normal");
        AddParagraph(body, "• 评估方式：课后问卷", "Normal");
        AddParagraph(body, "• 评估时点：课程结束", "Normal");
        AddParagraph(body, "", "Normal");
        AddParagraph(body, "【学习层】学员是否掌握了知识和技能", "Normal");
        AddParagraph(body, "• 评估方式：角色扮演表现、课堂讨论", "Normal");
        AddParagraph(body, "• 评估时点：课程进行中", "Normal");
        AddParagraph(body, "", "Normal");
        AddParagraph(body, "【行为层】学员是否将所学应用到工作中", "Normal");
        AddParagraph(body, "• 评估方式：课后30天行为跟踪", "Normal");
        AddParagraph(body, "• 评估时点：课程结束后30天", "Normal");
        AddParagraph(body, "", "Normal");
        AddParagraph(body, "【结果层】课程对组织绩效的影响", "Normal");
        AddParagraph(body, "• 评估方式：团队绩效指标对比", "Normal");
        AddParagraph(body, "• 评估时点：课程结束后90天", "Normal");
        AddParagraph(body, "", "Normal");
        AddParagraph(body, "课后问卷模板", "Heading3");
        AddParagraph(body, "【课程满意度】（1-5分，5分为最高）", "Normal");
        AddTable(body, new string[][] {
            new[] { "评估项目", "评分" },
            new[] { "课程内容实用性", "12345" },
            new[] { "培训方式有效性", "12345" },
            new[] { "讲师授课质量", "12345" },
            new[] { "学习环境", "12345" },
            new[] { "总体满意度", "12345" }
        });
        AddParagraph(body, "", "Normal");
        AddParagraph(body, "【开放式问题】", "Normal");
        AddParagraph(body, "1. 你认为最有价值的内容是什么？", "Normal");
        AddParagraph(body, "2. 你认为需要改进的地方是什么？", "Normal");
        AddParagraph(body, "3. 你计划如何将所学应用到工作中？", "Normal");

        AddPageBreak(body);

        // 5.4 危机处理预案
        AddParagraph(body, "5.4 危机处理预案", "Heading2");
        AddParagraph(body, "常见危机情况及处理方法", "Heading3");
        AddParagraph(body, "【情况1：学员之间的冲突】", "Heading4");
        AddParagraph(body, "表现：两名学员在讨论中发生激烈争执", "Normal");
        AddParagraph(body, "处理：", "Normal");
        AddParagraph(body, "1. 保持冷静，不要立即站队", "Normal");
        AddParagraph(body, "2. 说\"我看到你们有不同的观点，这很好。让我们听听各自的理由\"", "Normal");
        AddParagraph(body, "3. 将焦点从\"对错\"转向\"学习\"", "Normal");
        AddParagraph(body, "4. 如果冲突持续，私下分别沟通", "Normal");
        AddParagraph(body, "", "Normal");
        AddParagraph(body, "【情况2：学员情绪崩溃】", "Heading4");
        AddParagraph(body, "表现：学员因话题触及敏感点而情绪失控", "Normal");
        AddParagraph(body, "处理：", "Normal");
        AddParagraph(body, "1. 立即暂停活动", "Normal");
        AddParagraph(body, "2. 私下关心询问：\"我注意到你有些情绪，是否需要休息一下？\"", "Normal");
        AddParagraph(body, "3. 给予空间，不过度追问", "Normal");
        AddParagraph(body, "4. 课后跟进关怀", "Normal");
        AddParagraph(body, "", "Normal");
        AddParagraph(body, "【情况3：学员质疑课程内容】", "Heading4");
        AddParagraph(body, "表现：学员公开质疑某个模型的实用性或正确性", "Normal");
        AddParagraph(body, "处理：", "Normal");
        AddParagraph(body, "1. 感谢质疑：\"这是一个好问题/有深度的思考\"", "Normal");
        AddParagraph(body, "2. 邀请分享观点：\"能否详细说说你的看法？\"", "Normal");
        AddParagraph(body, "3. 将问题抛给全体学员讨论", "Normal");
        AddParagraph(body, "4. 总结时强调\"情境适用性\"而非\"绝对正确\"", "Normal");
        AddParagraph(body, "", "Normal");
        AddParagraph(body, "【情况4：活动参与度低】", "Heading4");
        AddParagraph(body, "表现：学员对活动缺乏投入，敷衍了事", "Normal");
        AddParagraph(body, "处理：", "Normal");
        AddParagraph(body, "1. 反思活动设计是否与学员需求匹配", "Normal");
        AddParagraph(body, "2. 调整分组，将活跃学员与沉默学员搭配", "Normal");
        AddParagraph(body, "3. 使用\"选择权\"技巧：\"你可以选择参与A或B，但不能不选择\"", "Normal");
        AddParagraph(body, "4. 课后与个别学员交流了解原因", "Normal");

        AddPageBreak(body);
    }

    static void AddPart6(Body body)
    {
        AddParagraph(body, "第六部分：附录", "Heading1");

        // 6.1 核心模型速查
        AddParagraph(body, "6.1 核心模型速查", "Heading2");
        AddParagraph(body, "辅导三问模型（WHEN/HOW/Y）", "Heading3");
        AddTable(body, new string[][] {
            new[] { "维度", "内容", "关键问题" },
            new[] { "WHEN", "何时辅导", "绩效下降时/发展机会时/主动请求时/关键转折时" },
            new[] { "HOW", "如何辅导（STAR）", "S-情境/T-任务/A-行动/R-结果" },
            new[] { "Y", "为什么辅导", "激发动机/建立联结/创造意义" }
        });
        AddParagraph(body, "", "Normal");
        AddParagraph(body, "CAIR反馈模型", "Heading3");
        AddTable(body, new string[][] {
            new[] { "步骤", "内容", "示例" },
            new[] { "C - Context", "情境", "昨天下午的团队会议上" },
            new[] { "A - Action", "行为", "你打断了小王的发言" },
            new[] { "I - Impact", "影响", "这让小王有些尴尬" },
            new[] { "R - Request", "请求", "下次能否先让小王说完？" }
        });
        AddParagraph(body, "", "Normal");
        AddParagraph(body, "MAP辅导模型", "Heading3");
        AddTable(body, new string[][] {
            new[] { "维度", "内容", "关键问题" },
            new[] { "M - Measure", "衡量", "我们如何知道任务完成了？" },
            new[] { "A - Align", "对齐", "这样做是否符合价值观？" },
            new[] { "P - Process", "流程", "如何分阶段进行？" }
        });
        AddParagraph(body, "", "Normal");
        AddParagraph(body, "PLACE准备框架", "Heading3");
        AddTable(body, new string[][] {
            new[] { "步骤", "内容" },
            new[] { "P - Purpose", "明确谈话目的" },
            new[] { "L - Logic", "准备逻辑结构" },
            new[] { "A - Anticipate", "预判对方反应" },
            new[] { "C - Compose", "调整自己心态" },
            new[] { "E - Evidence", "准备具体证据" }
        });
        AddParagraph(body, "", "Normal");
        AddParagraph(body, "授权层次模型", "Heading3");
        AddTable(body, new string[][] {
            new[] { "层次", "描述", "管理者角色" },
            new[] { "1", "执行", "告知具体做什么" },
            new[] { "2", "审批", "需要上级批准" },
            new[] { "3", "建议", "可以提建议，由上级决定" },
            new[] { "4", "同意", "可以行动，但需要上级同意" },
            new[] { "5", "自行决定", "完全自主决定" },
            new[] { "6", "委任", "将权力完全委托给下属" }
        });

        AddPageBreak(body);

        // 6.2 参考资料
        AddParagraph(body, "6.2 参考资料", "Heading2");
        AddParagraph(body, "【书籍】", "Heading3");
        AddParagraph(body, "1. 《非暴力沟通》- 马歇尔·卢森堡", "Normal");
        AddParagraph(body, "2. 《教练式辅导》- 希尔维亚·希尔德", "Normal");
        AddParagraph(body, "3. 《高绩效教练》- 约翰·惠特莫尔", "Normal");
        AddParagraph(body, "4. 《关键对话》- 科里·帕特森等", "Normal");
        AddParagraph(body, "5. 《联盟》- 里德·霍夫曼等", "Normal");
        AddParagraph(body, "", "Normal");
        AddParagraph(body, "【模型来源】", "Heading3");
        AddParagraph(body, "1. STAR模型：源于教练技术（Gallwey《高绩效教练》）", "Normal");
        AddParagraph(body, "2. CAIR模型：源于绩效反馈最佳实践", "Normal");
        AddParagraph(body, "3. 体验式学习循环：Kolb（科尔布）经验学习理论", "Normal");

        AddPageBreak(body);

        // 6.3 术语表
        AddParagraph(body, "6.3 术语表", "Heading2");
        AddTable(body, new string[][] {
            new[] { "术语", "英文", "定义" },
            new[] { "辅导", "Coaching", "通过对话支持员工发展能力和绩效的管理行为" },
            new[] { "反馈", "Feedback", "对他人行为提供信息以帮助其改进的过程" },
            new[] { "授权", "Empowerment", "将决策权下放给下属的管理实践" },
            new[] { "绩效管理", "Performance Management", "持续提升个体和团队绩效的系统方法" },
            new[] { "困难谈话", "Difficult Conversation", "涉及敏感话题需要谨慎处理的沟通" },
            new[] { "联结沟通", "Connective Communication", "建立和维护工作关系的沟通方式" },
            new[] { "角色扮演", "Role Play", "模拟真实场景进行练习的教学方法" },
            new[] { "体验式学习", "Experiential Learning", "通过亲身体验和反思进行学习的方法" }
        });

        AddParagraph(body, "", "Normal");
        AddParagraph(body, "", "Normal");
        AddParagraph(body, "—— 手册结束 ——", "Title");
    }
}