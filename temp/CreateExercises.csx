#r "nuget: DocumentFormat.OpenXml, 3.2.0"

using DocumentFormat.OpenXml;
using DocumentFormat.OpenXml.Packaging;
using DocumentFormat.OpenXml.Wordprocessing;
using System.IO;

// Helper functions
string GetBasePath() => "D:/新课开发/工作手册/非正式网络识别与激活/完整课程包/08-练习资料";
string GetCasePath() => "D:/新课开发/工作手册/非正式网络识别与激活/完整课程包/09-案例集";

// Exercise 1: 行为痕迹识别练习
void CreateExercise1()
{
    string outputPath = Path.Combine(GetBasePath(), "01-练习1-行为痕迹识别.docx");
    using var doc = WordprocessingDocument.Create(outputPath, WordprocessingDocumentType.Document);
    var mainPart = doc.AddMainDocumentPart();
    mainPart.Document = new Document(new Body());

    var body = mainPart.Document.Body;

    // Title
    body.Append(new Paragraph(new ParagraphProperties(new Justification { Val = JustificationValues.Center }, new SpacingBetweenLines { After = "400" }),
        new Run(new RunProperties(new RunFonts { Ascii = "Microsoft YaHei", HighAnsi = "Microsoft YaHei", EastAsia = "Microsoft YaHei" }, new FontSize { Val = "36" }, new Bold()), new Text("练习1：行为痕迹识别练习"))));

    // Subtitle
    body.Append(new Paragraph(new ParagraphProperties(new SpacingBetweenLines { After = "300" }),
        new Run(new RunProperties(new RunFonts { Ascii = "Microsoft YaHei", HighAnsi = "Microsoft YaHei", EastAsia = "Microsoft YaHei" }, new FontSize { Val = "28" }), new Text("——从邮件和会议中识别非正式网络的行为痕迹"))));

    AddHeading(body, "练习目标", "1");
    body.Append(new Paragraph(new ParagraphProperties(new SpacingBetweenLines { After = "200" }),
        new Run(new Text("1. 理解三条识别路径：信息流转痕迹、求助路径、被绕开的节点")));
    body.Append(new Paragraph(new ParagraphProperties(new SpacingBetweenLines { After = "200" }),
        new Run(new Text("2. 能够从给定的描述中识别行为痕迹")));
    body.Append(new Paragraph(new ParagraphProperties(new SpacingBetweenLines { After = "200" }),
        new Run(new Text("3. 掌握填写行为痕迹收集表的方法"))));

    AddHeading(body, "场景描述", "1");

    // Scenario box
    body.Append(new Paragraph(new ParagraphProperties(new SpacingBetweenLines { After = "200" }, new Shading { Val = ShadingPatternValues.Clear, Fill = "F5F5F5" }),
        new Run(new RunProperties(new Italic(), new RunFonts { Ascii = "Microsoft YaHei", HighAnsi = "Microsoft YaHei", EastAsia = "Microsoft YaHei" }, new FontSize { Val = "24" }),
            new Text("【场景背景】"))));

    body.Append(new Paragraph(new ParagraphProperties(new SpacingBetweenLines { After = "200" }, new Indentation { Left = "360" }),
        new Run(new Text("某制造业公司最近面临一个跨部门项目延期的困扰。项目负责人老王（项目经理）向公司管理层汇报时说，问题出在各部门配合不力。但管理层希望了解更具体的情况——是谁在配合中出了问题，是流程问题还是人的问题。")));

    body.Append(new Paragraph(new ParagraphProperties(new SpacingBetweenLines { Before = "200", After = "200" }, new Indentation { Left = "360" }),
        new Run(new Text("以下是截取的三组典型沟通场景（已匿名化处理）："))));

    // Scenario 1
    AddSubHeading(body, "场景一：项目周会邮件");
    body.Append(new Paragraph(new ParagraphProperties(new SpacingBetweenLines { After = "100" }, new Indentation { Left = "360" }),
        new Run(new Text("邮件主题：【项目周报】关于A产品线自动化改造项目进度"))));
    body.Append(new Paragraph(new ParagraphProperties(new SpacingBetweenLines { After = "100" }, new Indentation { Left = "360" }),
        new Run(new Text("发件人：老王（项目经理）"))));
    body.Append(new Paragraph(new ParagraphProperties(new SpacingBetweenLines { After = "100" }, new Indentation { Left = "360" }),
        new Run(new Text("主送：生产部张经理、研发部李经理、质量部陈经理"))));
    body.Append(new Paragraph(new ParagraphProperties(new SpacingBetweenLines { After = "100" }, new Indentation { Left = "360" }),
        new Run(new Text("抄送：设备科刘师傅、财务部孙会计、市场部赵总"))));
    body.Append(new Paragraph(new ParagraphProperties(new SpacingBetweenLines { After = "200" }, new Indentation { Left = "360" }),
        new Run(new Text("邮件内容提到：\"关于这次设备调试的技术参数问题，建议大家直接联系设备科刘师傅确认，他最了解设备的实际状态。另外，市场部赵总提到的一个客户特殊要求，需要评估可行性，请研发部重点关注。\""))));

    // Scenario 2
    AddSubHeading(body, "场景二：走廊对话");
    body.Append(new Paragraph(new ParagraphProperties(new SpacingBetweenLines { After = "200" }, new Indentation { Left = "360" }),
        new Run(new Text("生产部张经理在走廊里遇到项目经理老王，私下说："))));
    body.Append(new Paragraph(new ParagraphProperties(new SpacingBetweenLines { After = "200" }, new Indentation { Left = "720" }),
        new Run(new Text("\"老王，那个交期问题我也急，但研发那边的技术方案一直定不下来。上次那个新材料的工艺问题，最后还是刘师傅帮我们找了个折中方案，不然肯定要拖更久。我看这事儿要想推进，得先问问刘师傅的意见，他门儿清。\""))));

    // Scenario 3
    AddSubHeading(body, "场景三：会议外的电话");
    body.Append(new Paragraph(new ParagraphProperties(new SpacingBetweenLines { After = "200" }, new Indentation { Left = "360" }),
        new Run(new Text("质量部陈经理在会议结束后，私下给研发部李经理打了个电话："))));
    body.Append(new Paragraph(new ParagraphProperties(new SpacingBetweenLines { After = "200" }, new Indentation { Left = "720" }),
        new Run(new Text("\"李经理，刚才会上那个质量标准的问题，我觉得我们俩私下再碰一下。市场部赵总提的那个返修率要求，说实话，我们实验室的条件很难达到。但这个问题我不想在正式会议上提，怕老王觉得我们在推脱责任。你看能不能帮忙想想，有没有折中方案？\""))));

    AddHeading(body, "任务要求", "1");
    body.Append(new Paragraph(new ParagraphProperties(new SpacingBetweenLines { After = "100" }),
        new Run(new Bold(), new Text("任务1：识别信息流转痕迹"))));
    body.Append(new Paragraph(new ParagraphProperties(new SpacingBetweenLines { After = "200" }, new Indentation { Left = "360" }),
        new Run(new Text("从以上场景中，找出被频繁抄送或提及的人，分析为什么是他/她被关注。"))));

    body.Append(new Paragraph(new ParagraphProperties(new SpacingBetweenLines { After = "100" }),
        new Run(new Bold(), new Text("任务2：识别求助路径"))));
    body.Append(new Paragraph(new ParagraphProperties(new SpacingBetweenLines { After = "200" }, new Indentation { Left = "360" }),
        new Run(new Text("当遇到问题时，人们第一反应是找谁？这个人与正式流程规定的人选有什么不同？"))));

    body.Append(new Paragraph(new ParagraphProperties(new SpacingBetweenLines { After = "100" }),
        new Run(new Bold(), new Text("任务3：识别被绕开的节点"))));
    body.Append(new Paragraph(new ParagraphProperties(new SpacingBetweenLines { After = "200" }, new Indentation { Left = "360" }),
        new Run(new Text("哪些正式流程节点被绕开了？被谁绕开？为什么？"))));

    AddHeading(body, "产出：行为痕迹收集表", "1");

    // Table
    var table = new Table(new TableProperties(
        new TableWidth { Width = "5000", Type = TableWidthUnitValues.Pct },
        new TableBorders(
            new TopBorder { Val = BorderValues.Single, Size = 8, Color = "000000" },
            new BottomBorder { Val = BorderValues.Single, Size = 8, Color = "000000" },
            new LeftBorder { Val = BorderValues.Single, Size = 8, Color = "000000" },
            new RightBorder { Val = BorderValues.Single, Size = 8, Color = "000000" },
            new InsideHorizontalBorder { Val = BorderValues.Single, Size = 4, Color = "000000" },
            new InsideVerticalBorder { Val = BorderValues.Single, Size = 4, Color = "000000" }
        ));

    // Table header
    var headerRow = new TableRow(new TableRowProperties(new TableHeader()));
    headerRow.Append(CreateCell("行为痕迹类型", true));
    headerRow.Append(CreateCell("涉及人员", true));
    headerRow.Append(CreateCell("具体行为描述", true));
    headerRow.Append(CreateCell("推断原因", true));
    table.Append(headerRow);

    // Data rows
    string[,] data = {
        { "信息流转痕迹", "", "", "" },
        { "求助路径", "", "", "" },
        { "被绕开的节点", "", "", "" }
    };

    for (int i = 0; i < 3; i++)
    {
        var row = new TableRow();
        row.Append(CreateCell(data[i, 0], false));
        row.Append(CreateCell(data[i, 1], false));
        row.Append(CreateCell(data[i, 2], false));
        row.Append(CreateCell(data[i, 3], false));
        table.Append(row);
    }

    body.Append(table);

    AddHeading(body, "讨论问题", "1");
    body.Append(new Paragraph(new ParagraphProperties(new SpacingBetweenLines { After = "100" }, new NumberingProperties(new NumberingLevelReference { Val = 0 }, new NumberingId { Val = 1 })),
        new Run(new Text("为什么设备科刘师傅被多方提及，但他并不是项目的正式成员？"))));
    body.Append(new Paragraph(new ParagraphProperties(new SpacingBetweenLines { After = "100" }, new NumberingProperties(new NumberingLevelReference { Val = 0 }, new NumberingId { Val = 1 })),
        new Run(new Text("如果你是项目经理老王，你会如何利用这些信息来推动项目？"))));
    body.Append(new Paragraph(new ParagraphProperties(new SpacingBetweenLines { After = "200" }, new NumberingProperties(new NumberingLevelReference { Val = 0 }, new NumberingId { Val = 1 })),
        new Run(new Text("这三条路径找到的人是同一批人，还是不同的人？说明了什么？"))));

    // Footer
    AddFooter(mainPart, doc);

    mainPart.Document.Save();
    Console.WriteLine($"Created: {outputPath}");
}

TableCell CreateCell(string text, bool isHeader)
{
    var cell = new TableCell();
    cell.Append(new TableCellProperties(
        new Shading { Val = ShadingPatternValues.Clear, Fill = isHeader ? "E0E0E0" : "FFFFFF" },
        new TableCellVerticalAlignment { Val = TableVerticalAlignmentValues.Center }
    ));
    var para = new Paragraph(new ParagraphProperties(new SpacingBetweenLines { Before = "60", After = "60" }));
    para.Append(new Run(new RunProperties(
        isHeader ? (OpenXmlElement)new Bold() : new RunProperties(),
        new RunFonts { Ascii = "Microsoft YaHei", HighAnsi = "Microsoft YaHei", EastAsia = "Microsoft YaHei" },
        new FontSize { Val = "22" }
    ), new Text(text)));
    cell.Append(para);
    return cell;
}

void AddHeading(Body body, string text, string level)
{
    var para = new Paragraph();
    para.Append(new ParagraphProperties(
        new SpacingBetweenLines { Before = level == "1" ? "400" : "200", After = "200" },
        new KeepNext(),
        new OutlineLevel { Val = level == "1" ? 0 : 1 }
    ));
    var runProps = new RunProperties(
        new RunFonts { Ascii = "Microsoft YaHei", HighAnsi = "Microsoft YaHei", EastAsia = "Microsoft YaHei" },
        new FontSize { Val = level == "1" ? "32" : "28" },
        new Bold()
    );
    para.Append(new Run(runProps, new Text(text)));
    body.Append(para);
}

void AddSubHeading(Body body, string text)
{
    var para = new Paragraph();
    para.Append(new ParagraphProperties(
        new SpacingBetweenLines { Before = "200", After = "100" },
        new KeepNext()
    ));
    para.Append(new Run(
        new RunProperties(
            new RunFonts { Ascii = "Microsoft YaHei", HighAnsi = "Microsoft YaHei", EastAsia = "Microsoft YaHei" },
            new FontSize { Val = "26" },
            new Bold()
        ),
        new Text(text)
    ));
    body.Append(para);
}

void AddFooter(MainDocumentPart mainPart, WordprocessingDocument doc)
{
    var footerPart = mainPart.AddNewPart<FooterPart>();
    var footer = new Footer();
    var para = new Paragraph(new ParagraphProperties(new Justification { Val = JustificationValues.Center }));
    para.Append(new Run(
        new RunProperties(
            new RunFonts { Ascii = "Microsoft YaHei", HighAnsi = "Microsoft YaHei", EastAsia = "Microsoft YaHei" },
            new FontSize { Val = "20" }
        ),
        new Text("非正式网络识别与激活 | 练习资料")
    ));
    footer.Append(para);
    footerPart.Footer = footer;
    footerPart.Footer.Save();

    var sectPr = new SectionProperties();
    sectPr.Append(new FooterReference { Type = HeaderFooterValues.Default, Id = mainPart.GetIdOfPart(footerPart) });
    sectPr.Append(new PageSize { Width = 11906, Height = 16838 });
    sectPr.Append(new PageMargin { Top = 1440, Right = 1440, Bottom = 1440, Left = 1440 });

    var body = mainPart.Document.Body;
    body.Append(new Paragraph(new ParagraphProperties(sectPr)));
}

// Execute
CreateExercise1();
Console.WriteLine("Exercise 1 creation complete!");
