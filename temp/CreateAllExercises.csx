#r "nuget: DocumentFormat.OpenXml, 3.2.0"

using DocumentFormat.OpenXml;
using DocumentFormat.OpenXml.Packaging;
using DocumentFormat.OpenXml.Wordprocessing;
using System.Text;
using System.IO;

string basePath = "D:/新课开发/工作手册/非正式网络识别与激活/完整课程包/08-练习资料";
string casePath = "D:/新课开发/工作手册/非正式网络识别与激活/完整课程包/09-案例集";

Directory.CreateDirectory(basePath);
Directory.CreateDirectory(casePath);

// ==================== EXERCISE 1 ====================
void CreateExercise1()
{
    string outputPath = Path.Combine(basePath, "01-练习1-行为痕迹识别.docx");
    using var doc = WordprocessingDocument.Create(outputPath, WordprocessingDocumentType.Document);
    var mainPart = doc.AddMainDocumentPart();
    mainPart.Document = new Document(new Body());
    var body = mainPart.Document.Body;

    AddDocDefaults(mainPart);
    AddNumbering(body);

    // Title
    AddParagraph(body, "练习1：行为痕迹识别练习", true, "36", JustificationValues.Center, "400");
    AddParagraph(body, "——从邮件和会议中识别非正式网络的行为痕迹", false, "28", JustificationValues.Center, "200");

    // Section 1: 练习目标
    AddHeading(body, "一、练习目标", 1);
    AddBullet(body, "理解三条识别路径：信息流转痕迹、求助路径、被绕开的节点");
    AddBullet(body, "能够从给定的描述中识别行为痕迹");
    AddBullet(body, "掌握填写行为痕迹收集表的方法");

    // Section 2: 场景描述
    AddHeading(body, "二、场景描述", 1);
    AddParagraph(body, "【背景】某制造业公司最近面临一个跨部门项目延期的困扰。项目负责人老王（项目经理）向公司管理层汇报时说，问题出在各部门配合不力。但管理层希望了解更具体的情况——是谁在配合中出了问题。", false, "24", JustificationValues.Left, "200", "360");

    AddSubHeading(body, "场景一：项目周会邮件");
    AddParagraph(body, "邮件主题：【项目周报】关于A产品线自动化改造项目进度", false, "22", JustificationValues.Left, "0", "720");
    AddParagraph(body, "发件人：老王（项目经理）  主送：生产部张经理、研发部李经理、质量部陈经理", false, "22", JustificationValues.Left, "0", "720");
    AddParagraph(body, "抄送：设备科刘师傅、财务部孙会计、市场部赵总", false, "22", JustificationValues.Left, "0", "720");
    AddParagraph(body, "邮件内容：\"关于这次设备调试的技术参数问题，建议大家直接联系设备科刘师傅确认，他最了解设备的实际状态。另外，市场部赵总提到的一个客户特殊要求，需要评估可行性，请研发部重点关注。\"", false, "22", JustificationValues.Left, "200", "720");

    AddSubHeading(body, "场景二：走廊对话");
    AddParagraph(body, "生产部张经理私下说：\"老王，那个交期问题我也急，但研发那边的技术方案一直定不下来。上次那个新材料的工艺问题，最后还是刘师傅帮我们找了个折中方案，不然肯定要拖更久。我看这事儿要想推进，得先问问刘师傅的意见，他门儿清。\"", false, "22", JustificationValues.Left, "200", "720");

    AddSubHeading(body, "场景三：会议外的电话");
    AddParagraph(body, "质量部陈经理私下给研发部李经理打电话：\"李经理，刚才会上那个质量标准的问题，我觉得我们俩私下再碰一下。市场部赵总提的那个返修率要求，说实话，我们实验室的条件很难达到。但这个问题我不想在正式会议上提，怕老王觉得我们在推脱责任。你看能不能帮忙想想，有没有折中方案？\"", false, "22", JustificationValues.Left, "200", "720");

    // Section 3: 任务要求
    AddHeading(body, "三、任务要求", 1);
    AddParagraph(body, "任务1：识别信息流转痕迹", true, "24");
    AddParagraph(body, "从以上场景中，找出被频繁抄送或提及的人，分析为什么是他/她被关注。", false, "22", JustificationValues.Left, "200", "360");

    AddParagraph(body, "任务2：识别求助路径", true, "24");
    AddParagraph(body, "当遇到问题时，人们第一反应是找谁？这个人与正式流程规定的人选有什么不同？", false, "22", JustificationValues.Left, "200", "360");

    AddParagraph(body, "任务3：识别被绕开的节点", true, "24");
    AddParagraph(body, "哪些正式流程节点被绕开了？被谁绕开？为什么？", false, "22", JustificationValues.Left, "200", "360");

    // Section 4: 产出表格
    AddHeading(body, "四、产出：行为痕迹收集表", 1);
    body.Append(CreateBehaviorTraceTable());

    // Section 5: 讨论问题
    AddHeading(body, "五、讨论问题", 1);
    AddBullet(body, "为什么设备科刘师傅被多方提及，但他并不是项目的正式成员？");
    AddBullet(body, "如果你是项目经理老王，你会如何利用这些信息来推动项目？");
    AddBullet(body, "这三条路径找到的人是同一批人，还是不同的人？说明了什么？");

    AddFooter(mainPart, doc, body);
    mainPart.Document.Save();
    Console.WriteLine($"✓ Created: {outputPath}");
}

Table CreateBehaviorTraceTable()
{
    var table = new Table();
    table.Append(new TableProperties(
        new TableWidth { Width = "5000", Type = TableWidthUnitValues.Pct },
        new TableBorders(
            new TopBorder { Val = BorderValues.Single, Size = 8, Color = "000000" },
            new BottomBorder { Val = BorderValues.Single, Size = 8, Color = "000000" },
            new LeftBorder { Val = BorderValues.Single, Size = 8, Color = "000000" },
            new RightBorder { Val = BorderValues.Single, Size = 8, Color = "000000" },
            new InsideHorizontalBorder { Val = BorderValues.Single, Size = 4, Color = "000000" },
            new InsideVerticalBorder { Val = BorderValues.Single, Size = 4, Color = "000000" }
        ));

    // Header
    var headerRow = new TableRow(new TableRowProperties(new TableHeader()));
    headerRow.Append(CreateHeaderCell("行为痕迹类型", "1500"));
    headerRow.Append(CreateHeaderCell("涉及人员", "1200"));
    headerRow.Append(CreateHeaderCell("具体行为描述", "2500"));
    headerRow.Append(CreateHeaderCell("推断原因", "2000"));
    table.Append(headerRow);

    // Data rows
    string[,] rows = {
        { "信息流转痕迹", "", "", "" },
        { "求助路径", "", "", "" },
        { "被绕开的节点", "", "", "" }
    };

    foreach (var rowData in rows)
    {
        var row = new TableRow();
        row.Append(CreateDataCell(rowData[0], "1500"));
        row.Append(CreateDataCell(rowData[1], "1200"));
        row.Append(CreateDataCell(rowData[2], "2500"));
        row.Append(CreateDataCell(rowData[3], "2000"));
        table.Append(row);
    }
    return table;
}

TableCell CreateHeaderCell(string text, string width)
{
    var cell = new TableCell();
    cell.Append(new TableCellProperties(
        new Shading { Val = ShadingPatternValues.Clear, Fill = "E0E0E0" },
        new TableCellWidth { Width = width, Type = TableWidthUnitValues.DXA },
        new TableCellVerticalAlignment { Val = TableVerticalAlignmentValues.Center }
    ));
    cell.Append(CreateTableParagraph(text, true));
    return cell;
}

TableCell CreateDataCell(string text, string width)
{
    var cell = new TableCell();
    cell.Append(new TableCellProperties(
        new Shading { Val = ShadingPatternValues.Clear, Fill = "FFFFFF" },
        new TableCellWidth { Width = width, Type = TableWidthUnitValues.DXA },
        new TableCellVerticalAlignment { Val = TableVerticalAlignmentValues.Center }
    ));
    cell.Append(CreateTableParagraph(text, false));
    return cell;
}

Paragraph CreateTableParagraph(string text, bool bold)
{
    var runProps = new RunProperties(
        new RunFonts { Ascii = "Microsoft YaHei", HighAnsi = "Microsoft YaHei", EastAsia = "Microsoft YaHei" },
        new FontSize { Val = "22" }
    );
    if (bold) runProps.Append(new Bold());
    var para = new Paragraph(new ParagraphProperties(
        new SpacingBetweenLines { Before = "60", After = "60" },
        new Justification { Val = JustificationValues.Center }
    ));
    para.Append(new Run(runProps, new Text(text)));
    return para;
}

void AddDocDefaults(MainDocumentPart mainPart)
{
    var stylesPart = mainPart.AddNewPart<StyleDefinitionsPart>();
    var styles = new Styles();
    styles.Append(new DocDefaults(
        new RunPropertiesDefault(new RunPropertiesBaseStyle(
            new RunFonts { Ascii = "Microsoft YaHei", HighAnsi = "Microsoft YaHei", EastAsia = "Microsoft YaHei" },
            new FontSize { Val = "24" },
            new FontSizeComplexScript { Val = "24" },
            new Languages { Val = "en-US", EastAsia = "zh-CN" }
        ))
    ));
    stylesPart.Styles = styles;
    stylesPart.Styles.Save();
}

void AddNumbering(Body body)
{
    // Numbering definitions would go here for proper lists
}

void AddParagraph(Body body, string text, bool bold, string fontSize, JustificationValues justify, string spacingAfter = "200", string indentLeft = "")
{
    var para = new Paragraph();
    var pPr = new ParagraphProperties(
        new SpacingBetweenLines { After = spacingAfter }
    );
    if (!string.IsNullOrEmpty(indentLeft))
        pPr.Append(new Indentation { Left = indentLeft });
    if (justify != JustificationValues.Left)
        pPr.Append(new Justification { Val = justify });

    para.Append(pPr);

    var rPr = new RunProperties(
        new RunFonts { Ascii = "Microsoft YaHei", HighAnsi = "Microsoft YaHei", EastAsia = "Microsoft YaHei" },
        new FontSize { Val = fontSize }
    );
    if (bold) rPr.Append(new Bold());
    para.Append(new Run(rPr, new Text(text)));
    body.Append(para);
}

void AddHeading(Body body, string text, int level)
{
    var para = new Paragraph();
    var spacing = level == 1 ? "400" : "200";
    para.Append(new ParagraphProperties(
        new SpacingBetweenLines { Before = spacing, After = "200" },
        new KeepNext(),
        new OutlineLevel { Val = level - 1 }
    ));
    var rPr = new RunProperties(
        new RunFonts { Ascii = "Microsoft YaHei", HighAnsi = "Microsoft YaHei", EastAsia = "Microsoft YaHei" },
        new FontSize { Val = level == 1 ? "32" : "28" },
        new Bold()
    );
    para.Append(new Run(rPr, new Text(text)));
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

void AddBullet(Body body, string text)
{
    var para = new Paragraph();
    para.Append(new ParagraphProperties(
        new SpacingBetweenLines { After = "100" },
        new Indentation { Left = "360", Hanging = "360" }
    ));
    para.Append(new Run(
        new RunProperties(
            new RunFonts { Ascii = "Microsoft YaHei", HighAnsi = "Microsoft YaHei", EastAsia = "Microsoft YaHei" },
            new FontSize { Val = "24" }
        ),
        new Text("• " + text)
    ));
    body.Append(para);
}

void AddFooter(MainDocumentPart mainPart, WordprocessingDocument doc, Body body)
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
    body.Append(new Paragraph(new ParagraphProperties(sectPr)));
}

// Run
CreateExercise1();
Console.WriteLine("\nAll exercises creation complete!");
