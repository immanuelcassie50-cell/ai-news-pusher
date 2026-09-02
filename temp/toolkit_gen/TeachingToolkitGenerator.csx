#r "nuget: DocumentFormat.OpenXml, 3.2.0"

using DocumentFormat.OpenXml;
using DocumentFormat.OpenXml.Packaging;
using DocumentFormat.OpenXml.Wordprocessing;
using System.IO;

// ============================================================
// Configuration
// ============================================================
string outputDir = @"D:/新课开发/工作手册/跨代际团队隐形期望对齐/完整课程包/06-教学工具集锦";

// Ensure output directory exists
Directory.CreateDirectory(outputDir);

// ============================================================
// Helper Methods
// ============================================================
void AddHeading(Body body, string text, int level)
{
    var p = new Paragraph(
        new ParagraphProperties(
            new SpacingBetweenLines { Before = (level == 1 ? "480" : "360"), After = "120" },
            new OutlineLevel { Val = level - 1 }
        ),
        new Run(
            new RunProperties(
                new RunFonts { Ascii = "Microsoft YaHei", EastAsia = "Microsoft YaHei", HighAnsi = "Microsoft YaHei" },
                new Bold(),
                new FontSize { Val = level == 1 ? "36" : "28" },
                new FontSizeComplexScript { Val = level == 1 ? "36" : "28" },
                new Color { Val = level == 1 ? "1F3864" : "2E5496" }
            ),
            new Text(text)
        )
    );
    body.Append(p);
}

void AddParagraph(Body body, string text, bool bold = false, string color = "333333")
{
    var runProps = new RunProperties(
        new RunFonts { Ascii = "Microsoft YaHei", EastAsia = "Microsoft YaHei", HighAnsi = "Microsoft YaHei" },
        new FontSize { Val = "22" },
        new FontSizeComplexScript { Val = "22" },
        new Color { Val = color }
    );
    if (bold) runProps.Append(new Bold());

    var p = new Paragraph(
        new ParagraphProperties(
            new SpacingBetweenLines { After = "120", Line = "276", LineRule = LineSpacingRuleValues.Auto }
        ),
        new Run(runProps, new Text(text))
    );
    body.Append(p);
}

void AddDiscussionPrompt(Body body, string text)
{
    var p = new Paragraph(
        new ParagraphProperties(
            new SpacingBetweenLines { After = "200", Line = "276", LineRule = LineSpacingRuleValues.Auto },
            new Shading { Val = ShadingPatternValues.Clear, Fill = "FFF2CC" },
            new Indentation { Left = "284", Right = "284" }
        ),
        new Run(
            new RunProperties(
                new RunFonts { Ascii = "Microsoft YaHei", EastAsia = "Microsoft YaHei", HighAnsi = "Microsoft YaHei" },
                new Italic(),
                new FontSize { Val = "21" },
                new FontSizeComplexScript { Val = "21" },
                new Color { Val = "806000" }
            ),
            new Text($"讨论提示：{text}")
        )
    );
    body.Append(p);
}

void AddFillField(Body body, string label)
{
    var p = new Paragraph(
        new ParagraphProperties(
            new SpacingBetweenLines { After = "80" },
            new Shading { Val = ShadingPatternValues.Clear, Fill = "F5F5F5" },
            new Indentation { Left = "284" }
        ),
        new Run(
            new RunProperties(
                new RunFonts { Ascii = "Microsoft YaHei", EastAsia = "Microsoft YaHei", HighAnsi = "Microsoft YaHei" },
                new FontSize { Val = "21" },
                new FontSizeComplexScript { Val = "21" },
                new Color { Val = "666666" }
            ),
            new Text($"{label}：____________")
        )
    );
    body.Append(p);
}

void AddBulletPoint(Body body, string text)
{
    var p = new Paragraph(
        new ParagraphProperties(
            new SpacingBetweenLines { After = "80" },
            new Indentation { Left = "567", Hanging = "284" }
        ),
        new Run(
            new RunProperties(
                new RunFonts { Ascii = "Microsoft YaHei", EastAsia = "Microsoft YaHei", HighAnsi = "Microsoft YaHei" },
                new FontSize { Val = "22" },
                new FontSizeComplexScript { Val = "22" },
                new Color { Val = "333333" }
            ),
            new Text($"• {text}")
        )
    );
    body.Append(p);
}

void AddNumberedPoint(Body body, string text, int number)
{
    var p = new Paragraph(
        new ParagraphProperties(
            new SpacingBetweenLines { After = "80" },
            new Indentation { Left = "567", Hanging = "284" }
        ),
        new Run(
            new RunProperties(
                new RunFonts { Ascii = "Microsoft YaHei", EastAsia = "Microsoft YaHei", HighAnsi = "Microsoft YaHei" },
                new FontSize { Val = "22" },
                new FontSizeComplexScript { Val = "22" },
                new Color { Val = "333333" }
            ),
            new Text($"{number}. {text}")
        )
    );
    body.Append(p);
}

void AddScriptUsageNote(Body body, string text)
{
    var p = new Paragraph(
        new ParagraphProperties(
            new SpacingBetweenLines { After = "200", Line = "276", LineRule = LineSpacingRuleValues.Auto },
            new Shading { Val = ShadingPatternValues.Clear, Fill = "E8F5E9" },
            new Indentation { Left = "284", Right = "284" }
        ),
        new Run(
            new RunProperties(
                new RunFonts { Ascii = "Microsoft YaHei", EastAsia = "Microsoft YaHei", HighAnsi = "Microsoft YaHei" },
                new Italic(),
                new FontSize { Val = "21" },
                new FontSizeComplexScript { Val = "21" },
                new Color { Val = "2E7D32" }
            ),
            new Text($"使用场景：{text}")
        )
    );
    body.Append(p);
}

void AddScriptDesignNote(Body body, string text)
{
    var p = new Paragraph(
        new ParagraphProperties(
            new SpacingBetweenLines { After = "200", Line = "276", LineRule = LineSpacingRuleValues.Auto },
            new Shading { Val = ShadingPatternValues.Clear, Fill = "E3F2FD" },
            new Indentation { Left = "284", Right = "284" }
        ),
        new Run(
            new RunProperties(
                new RunFonts { Ascii = "Microsoft YaHei", EastAsia = "Microsoft YaHei", HighAnsi = "Microsoft YaHei" },
                new Italic(),
                new FontSize { Val = "21" },
                new FontSizeComplexScript { Val = "21" },
                new Color { Val = "1565C0" }
            ),
            new Text($"设计逻辑：{text}")
        )
    );
    body.Append(p);
}

void AddSeparator(Body body)
{
    var p = new Paragraph(
        new ParagraphProperties(
            new SpacingBetweenLines { After = "200", Before = "200" },
            new ParagraphBorders(
                new BottomBorder { Val = BorderValues.Single, Color = "CCCCCC", Size = 4, Space = 1 }
            )
        )
    );
    body.Append(p);
}

void AddTableHeader(Body body, params string[] headers)
{
    var tbl = new Table();

    // Table properties
    var tblPr = new TableProperties(
        new TableWidth { Width = "5000", Type = TableWidthUnitValues.Pct },
        new TableBorders(
            new TopBorder { Val = BorderValues.Single, Color = "1F3864", Size = 8 },
            new BottomBorder { Val = BorderValues.Single, Color = "1F3864", Size = 8 },
            new LeftBorder { Val = BorderValues.Single, Color = "1F3864", Size = 8 },
            new RightBorder { Val = BorderValues.Single, Color = "1F3864", Size = 8 },
            new InsideHorizontalBorder { Val = BorderValues.Single, Color = "CCCCCC", Size = 4 },
            new InsideVerticalBorder { Val = BorderValues.Single, Color = "CCCCCC", Size = 4 }
        ),
        new TableCellMarginDefault(
            new TopMargin { Width = "80", Type = TableWidthUnitValues.DXA },
            new BottomMargin { Width = "80", Type = TableWidthUnitValues.DXA },
            new TableCellLeftMargin { Width = 80, Type = TableWidthValues.Dxa },
            new TableCellRightMargin { Width = 80, Type = TableWidthValues.Dxa }
        )
    );
    tbl.Append(tblPr);

    var tblGrid = new TableGrid();
    foreach (var h in headers) tblGrid.Append(new GridSpan());
    tbl.Append(tblGrid);

    var tr = new TableRow();
    foreach (var h in headers)
    {
        var tc = new TableCell(
            new TableCellProperties(
                new Shading { Val = ShadingPatternValues.Clear, Fill = "1F3864" }
            ),
            new Paragraph(
                new ParagraphProperties(
                    new Justification { Val = JustificationValues.Center },
                    new SpacingBetweenLines { After = "0" }
                ),
                new Run(
                    new RunProperties(
                        new RunFonts { Ascii = "Microsoft YaHei", EastAsia = "Microsoft YaHei", HighAnsi = "Microsoft YaHei" },
                        new Bold(),
                        new FontSize { Val = "22" },
                        new FontSizeComplexScript { Val = "22" },
                        new Color { Val = "FFFFFF" }
                    ),
                    new Text(h)
                )
            )
        );
        tr.Append(tc);
    }
    tbl.Append(tr);
    body.Append(tbl);
}

void AddTableRow(Body body, params string[] cells)
{
    var tbl = body.Elements<Table>().LastOrDefault();
    if (tbl == null) return;

    var tr = new TableRow();
    foreach (var cell in cells)
    {
        var tc = new TableCell(
            new Paragraph(
                new ParagraphProperties(
                    new SpacingBetweenLines { After = "0" }
                ),
                new Run(
                    new RunProperties(
                        new RunFonts { Ascii = "Microsoft YaHei", EastAsia = "Microsoft YaHei", HighAnsi = "Microsoft YaHei" },
                        new FontSize { Val = "21" },
                        new FontSizeComplexScript { Val = "21" },
                        new Color { Val = "333333" }
                    ),
                    new Text(cell)
                )
            )
        );
        tr.Append(tc);
    }
    tbl.Append(tr);
}

void AddToolFormHeader(Body body, string title, string description)
{
    AddHeading(body, title, 2);
    if (!string.IsNullOrEmpty(description))
    {
        AddParagraph(body, description);
    }
}

void AddUsageInstructions(Body body, string[] instructions)
{
    var p = new Paragraph(
        new ParagraphProperties(
            new Shading { Val = ShadingPatternValues.Clear, Fill = "F5F5F5" },
            new SpacingBetweenLines { After = "160" },
            new Indentation { Left = "284", Right = "284" }
        ),
        new Run(
            new RunProperties(
                new RunFonts { Ascii = "Microsoft YaHei", EastAsia = "Microsoft YaHei", HighAnsi = "Microsoft YaHei" },
                new Bold(),
                new FontSize { Val = "22" },
                new FontSizeComplexScript { Val = "22" },
                new Color { Val = "1F3864" }
            ),
            new Text("使用说明")
        )
    );
    body.Append(p);

    foreach (var inst in instructions)
    {
        AddBulletPoint(body, inst);
    }
}

// ============================================================
// Document Creation Functions
// ============================================================

void CreateContractsDocument()
{
    string outputPath = Path.Combine(outputDir, "工具集锦01-05-契约模板.docx");
    Console.WriteLine($"Creating: {outputPath}");

    using var doc = WordprocessingDocument.Create(outputPath, WordprocessingDocumentType.Document);
    var mainPart = doc.AddMainDocumentPart();
    mainPart.Document = new Document(new Body());
    var body = mainPart.Document.Body!;

    // Title
    var titleP = new Paragraph(
        new ParagraphProperties(
            new Justification { Val = JustificationValues.Center },
            new SpacingBetweenLines { After = "400", Line = "240", LineRule = LineSpacingRuleValues.Auto }
        ),
        new Run(
            new RunProperties(
                new RunFonts { Ascii = "Microsoft YaHei", EastAsia = "Microsoft YaHei", HighAnsi = "Microsoft YaHei" },
                new Bold(),
                new FontSize { Val = "56" },
                new FontSizeComplexScript { Val = "56" },
                new Color { Val = "1F3864" }
            ),
            new Text("跨代际团队契约模板")
        )
    );
    body.Append(titleP);

    var subtitleP = new Paragraph(
        new ParagraphProperties(
            new Justification { Val = JustificationValues.Center },
            new SpacingBetweenLines { After = "400" }
        ),
        new Run(
            new RunProperties(
                new RunFonts { Ascii = "Microsoft YaHei", EastAsia = "Microsoft YaHei", HighAnsi = "Microsoft YaHei" },
                new FontSize { Val = "28" },
                new FontSizeComplexScript { Val = "28" },
                new Color { Val = "666666" }
            ),
            new Text("工具集锦 01-05")
        )
    );
    body.Append(subtitleP);

    AddParagraph(body, "作者：罗宏伟　配套《跨代际团队隐性期望对齐手册》使用", false, "888888");
    AddSeparator(body);

    // Usage Instructions
    AddHeading(body, "使用说明", 1);
    AddParagraph(body, "这份契约包不是一份可以直接打印签字的成品，是一套帮助团队"从对话走向文字"的模板工具。真正管用的契约必须从团队自己的"三步摊牌"对话里长出来（方法见主手册第五章），这里提供的每一份模板，目的是降低团队把口头约定转化为书面契约的门槛，而不是替团队做决定。");
    AddParagraph(body, "使用时建议保留每一份模板里的"讨论提示"部分，删除或替换成团队自己的具体约定，"讨论提示"本身不构成契约内容，只是引导团队思考的问题。");
    AddParagraph(body, "模板整体覆盖五个最高频的隐性期望领域：反馈节奏、沟通渠道、任务边界、响应时段、认可方式。团队可以根据自己的实际摩擦点，只挑选其中最紧迫的一到两类先行落地，不必一次性完成全部五类。");
    AddSeparator(body);

    // Contract 1: 反馈节奏约定
    AddHeading(body, "契约模板一：反馈节奏约定", 1);
    AddDiscussionPrompt(body, "布置任务后，多久应该有第一次状态同步？是执行者主动汇报，还是布置者主动询问？如果一段时间没有任何反馈，应该被解读为"进展顺利"还是"可能出了问题"？");
    AddFillField(body, "任务类型");
    AddFillField(body, "首次同步时间点");
    AddFillField(body, "后续同步频率");
    AddFillField(body, ""沉默"的默认解读");
    AddFillField(body, "例外情况");
    AddSeparator(body);

    // Contract 2: 沟通渠道分工
    AddHeading(body, "契约模板二：沟通渠道分工", 1);
    AddDiscussionPrompt(body, "什么事情适合用即时消息（微信/企业微信）？什么事情需要打电话或当面说？什么事情必须走正式邮件或工单系统留痕？下班后收到工作消息，是否需要即时回复？");
    AddFillField(body, "即时消息适用场景");
    AddFillField(body, "当面/电话沟通适用场景");
    AddFillField(body, "正式邮件/工单适用场景");
    AddFillField(body, "非工作时段消息处理原则");
    AddFillField(body, "紧急事项的判断标准");
    AddSeparator(body);

    // Contract 3: 任务交代深度
    AddHeading(body, "契约模板三：任务交代深度", 1);
    AddDiscussionPrompt(body, "布置任务时，默认应该给到什么程度的背景信息？只给结论，还是需要说明背景和评价标准？执行者在信息不足时，主动追问算不算"不够独立"？");
    AddFillField(body, "任务交代最低标准");
    AddFillField(body, "执行者的追问权利");
    AddFillField(body, "自主判断的空间");
    AddSeparator(body);

    // Contract 4: 响应时段与工作边界
    AddHeading(body, "契约模板四：响应时段与工作边界", 1);
    AddDiscussionPrompt(body, "下班后、周末、假期期间，工作消息的响应预期是什么？团队里如果存在不同的边界偏好，怎么在不互相评判的前提下共存？");
    AddFillField(body, "常规工作时段");
    AddFillField(body, "非工作时段响应预期");
    AddFillField(body, "不同个体的边界差异如何处理");
    AddFillField(body, ""敬业度"评价是否与响应速度挂钩");
    AddSeparator(body);

    // Contract 5: 认可与反馈的表达方式
    AddHeading(body, "契约模板五：认可与反馈的表达方式", 1);
    AddDiscussionPrompt(body, "做得好的事情，团队习惯用什么方式表达认可？当众表扬、私下一句话、还是体现在具体的机会分配上？不同人对"被认可"的感知方式是否一样？");
    AddFillField(body, "团队默认的认可方式");
    AddFillField(body, "个体的认可偏好差异");
    AddFillField(body, ""没有负面反馈"是否等于"认可"");

    // Dynamic Adjustment Section
    AddSeparator(body);
    AddHeading(body, "契约动态调整原则", 1);
    AddParagraph(body, "以下条款建议作为固定内容，写入每一份团队契约的末尾：");
    AddParagraph(body, "这份契约不是一次性文件，团队成员的构成、工作节奏、业务性质发生变化时，契约内容需要重新讨论。触发重新讨论的情形包括：某条约定被反复违反或显得不再适用、团队新增成员、团队反馈这份契约在实际使用中造成了新的困扰。除固定的触发情形外，建议每季度做一次简短回顾，确认契约条款是否仍然贴合团队当下的真实工作状态。");
    AddParagraph(body, "契约的每一条都是团队共同商定的结果，不是管理者单方面制定后要求遵守的规定。任何一方在日常工作中，都可以主动提出"我们当时约定的是这样，现在是不是需要重新看一下"，这不是挑事，是维护契约有效性的正常动作。");

    // Implementation Suggestions
    AddSeparator(body);
    AddHeading(body, "契约签署与落地建议", 1);
    AddNumberedPoint(body, "把契约放在团队日常最容易看到的地方（共享文档置顶、团队群公告），而不是存在某个很少打开的文件夹里。", 1);
    AddNumberedPoint(body, "管理者带头在第一次摩擦发生时主动引用契约条款，比如说"我们当时约定的是……"，用一次真实的示范让团队看到这份契约不是摆设。", 2);
    AddNumberedPoint(body, "不要指望契约一次性覆盖所有场景，遇到契约没覆盖到的新摩擦，把它当作补充契约的机会，而不是契约"失效"的证据。", 3);

    Console.WriteLine($"Created: {outputPath}");
}

// ============================================================
// SCRIPT LIBRARY DOCUMENT
// ============================================================

void CreateScriptsDocument()
{
    string outputPath = Path.Combine(outputDir, "工具集锦06-话术库.docx");
    Console.WriteLine($"Creating: {outputPath}");

    using var doc = WordprocessingDocument.Create(outputPath, WordprocessingDocumentType.Document);
    var mainPart = doc.AddMainDocumentPart();
    mainPart.Document = new Document(new Body());
    var body = mainPart.Document.Body!;

    // Title
    var titleP = new Paragraph(
        new ParagraphProperties(
            new Justification { Val = JustificationValues.Center },
            new SpacingBetweenLines { After = "400", Line = "240", LineRule = LineSpacingRuleValues.Auto }
        ),
        new Run(
            new RunProperties(
                new RunFonts { Ascii = "Microsoft YaHei", EastAsia = "Microsoft YaHei", HighAnsi = "Microsoft YaHei" },
                new Bold(),
                new FontSize { Val = "56" },
                new FontSizeComplexScript { Val = "56" },
                new Color { Val = "1F3864" }
            ),
            new Text("代际对话话术库")
        )
    );
    body.Append(titleP);

    var subtitleP = new Paragraph(
        new ParagraphProperties(
            new Justification { Val = JustificationValues.Center },
            new SpacingBetweenLines { After = "400" }
        ),
        new Run(
            new RunProperties(
                new RunFonts { Ascii = "Microsoft YaHei", EastAsia = "Microsoft YaHei", HighAnsi = "Microsoft YaHei" },
                new FontSize { Val = "28" },
                new FontSizeComplexScript { Val = "28" },
                new Color { Val = "666666" }
            ),
            new Text("工具集锦 06")
        )
    );
    body.Append(subtitleP);

    AddParagraph(body, "作者：罗宏伟　配套《跨代际团队隐性期望对齐手册》使用", false, "888888");
    AddSeparator(body);

    // Usage Instructions
    AddHeading(body, "使用说明", 1);
    AddParagraph(body, "这份话术库不是要求逐字背诵的台词本，是一套"开口方式"的参照系。跨代际对话最大的障碍往往不是不知道该谈什么，是不知道怎么开口才不显得冒犯或者太较真。这里的每一组话术，都配有对应的使用场景和背后的设计逻辑，使用时建议按照自己的语言习惯调整措辞，只保留其中的结构和分寸感。");
    AddParagraph(body, "话术分为五组：破冰开场类、期望摊牌类、反驳预处理类、冲突降温类、认可表达类。每组内区分了"管理者视角"和"员工视角"两种版本，因为权力位置不同，开口的心理成本和合适的措辞也不同。");
    AddSeparator(body);

    // Group 1: 破冰开场话术
    AddHeading(body, "第一组：破冰开场话术——如何主动提起"我们可能有默认标准不一样"", 1);

    AddParagraph(body, "管理者视角", true, "1F3864");
    AddScriptUsageNote(body, "管理者主动向员工提出期望对齐话题");
    AddParagraph(body, ""我最近意识到，我们团队里可能存在一些没说清楚的默认工作方式，比如我习惯用简短消息布置任务，但我不确定这对你来说信息够不够。想找个时间聊聊，也想听听你对我有没有类似的观察，这不是批评，只是想把话说开。"");
    AddScriptDesignNote(body, "管理者先主动暴露自己可能存在的问题，降低对方开口时的心理压力；明确说"不是批评"，减少防御心理；结尾邀请对方对等回应，把对话设定为双向的，而不是单向的评估。");
    AddParagraph(body, ""我留意到最近咱们在几次协作上有点小别扭，我不确定是不是我们对'该怎么配合'这件事有些没说清楚的地方，想听听你的感受，也说说我的。"");
    AddSeparator(body);

    AddParagraph(body, "员工视角", true, "2E5496");
    AddScriptUsageNote(body, "员工主动向管理者提出期望确认话题");
    AddParagraph(body, ""我最近在想一个事情，不确定说得对不对——我感觉我们对'什么算及时回复'这件事可能理解不太一样，我想跟您确认一下，不是有意见，是想确认之后怎么配合更顺畅。"");
    AddScriptDesignNote(body, ""不确定说得对不对"和"不是有意见"降低了对上级提出观察的心理风险；用"确认之后怎么配合更顺畅"把话题定位为提效，而不是抱怨。");
    AddParagraph(body, ""我这边有个小疑问想跟您聊聊，就是关于任务交代的详细程度，我担心自己理解得不够准，想确认一下咱们对这件事的默认标准是什么，这样我可以做得更符合预期。"");
    AddSeparator(body);

    // Group 2: 期望摊牌话术
    AddHeading(body, "第二组：期望摊牌话术——把心里的默认标准说出来", 1);

    AddParagraph(body, "管理者视角", true, "1F3864");
    AddScriptUsageNote(body, "管理者向员工说明自己的默认工作标准");
    AddParagraph(body, ""我先说说我这边的默认标准。我习惯的是，任务交出去之后如果没有主动来问我，我会默认是进展顺利，不会主动追问。这可能和你习惯的方式不一样，想听听你那边通常是怎么判断'需不需要主动汇报'的。"");
    AddScriptDesignNote(body, "先说出自己的标准，而不是先要求对方说明，符合"权力位置更高的一方先示弱"的原则；用"想听听你那边"给出明确的对话轮转信号。");
    AddParagraph(body, ""我对'交代任务给多细'这件事的习惯是，给一个大方向和目标，剩下的细节相信你能判断。但我知道不是每个人都习惯这种方式，你觉得对你来说，这个程度够不够，还是需要我给得更具体一些？"");
    AddSeparator(body);

    AddParagraph(body, "员工视角", true, "2E5496");
    AddScriptUsageNote(body, "员工向管理者说明自己的工作习惯");
    AddParagraph(body, ""我这边的习惯是，如果拿到的任务信息不够完整，我会倾向于先确认清楚了再动手，而不是自己猜一个方向做。这可能跟有些前辈习惯的'先做起来再说'不太一样，我想确认一下，您更希望我用哪种方式？"");
    AddScriptDesignNote(body, "把自己的工作习惯讲清楚，同时用"想确认您更希望我用哪种方式"把最终选择权交还给对方，避免显得是在要求对方改变。");
    AddParagraph(body, ""跟您坦白说一下我的感受，如果超过一天没收到反馈，我心里会有点没底，不确定是不是哪里做得不对。我知道这可能跟您平时'没消息就是没问题'的习惯不太一样，想问问看，有没有可能在关键节点给我一个简单的确认？"");
    AddSeparator(body);

    // Group 3: 反驳预处理话术
    AddHeading(body, "第三组：反驳预处理话术——提前化解对方最可能的抵触", 1);

    AddParagraph(body, "管理者视角（用于向团队推行新的对齐机制时）", true, "1F3864");
    AddScriptUsageNote(body, "管理者在推行期望对齐机制前，先处理可能的质疑");
    AddParagraph(body, ""我知道有人可能会觉得，这种把工作习惯写成契约的做法有点小题大做，正常配合不就行了吗，何必这么正式。但我们过去几个月确实因为一些没说清楚的默认标准，产生过不必要的误会，与其等误会发生了再处理，不如提前把话说清楚，这样以后遇到摩擦，我们有一个共同的参照，而不是各自猜。"");
    AddScriptDesignNote(body, "先说出对方可能的质疑（"小题大做"），再给出理由回应，让质疑在被说出来的那一刻就失去大部分力量。");
    AddSeparator(body);

    AddParagraph(body, "员工视角（用于向年长同事或上级提出期望调整建议时）", true, "2E5496");
    AddScriptUsageNote(body, "员工在提出期望调整建议前，先化解可能的负面标签");
    AddParagraph(body, ""我知道这样说可能显得我比较计较细节，但我发现如果一开始就把这些小事说清楚，后面反而能少很多误会，所以想跟您提一下，不是要挑毛病，是希望以后配合能更顺。"");
    AddScriptDesignNote(body, "主动承认"显得计较"这个可能的负面标签，再解释真实动机，减少对方对动机的怀疑。");
    AddSeparator(body);

    // Group 4: 冲突降温话术
    AddHeading(body, "第四组：冲突降温话术——摩擦已经发生时怎么开口", 1);

    AddParagraph(body, "通用（不区分权力位置，适用于摩擦发生后主动破冰）", true, "1F3864");
    AddScriptUsageNote(body, "摩擦发生后，双方主动破冰使用");
    AddParagraph(body, ""刚才那个事情，我感觉咱们俩可能不是真的意见不合，是各自的默认标准不一样，我想停下来聊两句，看看能不能把这个标准说清楚，而不是继续各说各的。"");
    AddScriptDesignNote(body, "把"意见不合"重新定义为"标准不同"，从对立框架转到核对框架，降低对话的对抗性。");
    AddParagraph(body, ""我刚才的反应可能有点急，我先说一下我当时是怎么想的，也想听听你当时的想法是什么，我们看看是不是中间有什么误会。"");
    AddScriptDesignNote(body, "承认自己情绪反应可能有问题，主动降低对方的防御姿态，同时保留了解释和被理解的空间。");
    AddParagraph(body, ""我们要不要先各自说说，刚才那件事让自己不舒服的具体点是什么，不是评价对错，只是想弄清楚到底卡在哪儿。"");
    AddScriptDesignNote(body, "明确排除"评价对错"这个可能引发辩论的框架，聚焦在"卡在哪儿"这个具体、可拆解的问题上。");
    AddSeparator(body);

    // Group 5: 认可表达话术
    AddHeading(body, "第五组：认可表达话术——跨代际团队里怎么让"认可"真的被感知到", 1);

    AddParagraph(body, "管理者对不同代际风格的成员", true, "1F3864");
    AddScriptUsageNote(body, "管理者向习惯即时反馈的年轻成员表达认可");
    AddParagraph(body, ""这个方案我看了，思路很清楚，尤其是第二部分的处理方式，比我预想的要好，你可以继续按这个方向推进。"");
    AddScriptDesignNote(body, "具体指出好在哪里，而不是笼统说"不错"，让对方能准确知道哪部分值得延续。");
    AddScriptUsageNote(body, "管理者向习惯"没消息就是好消息"的年长成员主动打破沉默表达认可");
    AddParagraph(body, ""最近这几个项目你处理得都很稳，我知道我平时很少特意说这个，但这次想专门提一句，你这种把控节奏的方式，团队里其他人可以多学学。"");
    AddScriptDesignNote(body, "承认自己"很少特意说"这一点，让认可显得更真实，而不是走过场；具体提到"其他人可以学学"，赋予认可实质性的分量。");
    AddSeparator(body);

    AddParagraph(body, "员工对上级或年长同事的认可表达", true, "2E5496");
    AddScriptUsageNote(body, "员工主动向上级或年长同事表达具体认可（跨代际团队里这个方向常常被忽略）");
    AddParagraph(body, ""上次您在那个客户沟通上处理得特别稳，我当时学到不少，想跟您说一声。"");
    AddScriptDesignNote(body, "跨代际团队里，认可的表达经常被默认为只从上到下发生，年轻员工主动向年长同事或上级表达具体认可，同样是建立信任的重要动作，只是很少被鼓励或示范。");
    AddSeparator(body);

    // Usage Reminders
    AddHeading(body, "话术使用的三个提醒", 1);
    AddNumberedPoint(body, "这些话术是结构参照，不是固定台词，直接照搬容易显得生硬，建议保留其中"先说自己的标准""明确排除评价对错""具体而非笼统"这几个核心结构，用自己的语言重新组织。", 1);
    AddNumberedPoint(body, "话术的效果很大程度上取决于关系基础和时机，同样一句话，在信任基础好的关系里能打开对话，在信任基础薄弱或对方正处于情绪高点时，可能起反效果，开口前先判断一下当下是不是合适的时机。", 2);
    AddNumberedPoint(body, "如果对话没有按预想的方向进行，不要强行推进，可以说一句"看来这个话题需要更多时间，我们先缓一缓，改天再聊"，给彼此一个体面的退出空间，比硬撑着谈完更重要。", 3);

    Console.WriteLine($"Created: {outputPath}");
}

// ============================================================
// NEW TOOLS DOCUMENT
// ============================================================

void CreateNewToolsDocument()
{
    string outputPath = Path.Combine(outputDir, "工具集锦07-新增工具.docx");
    Console.WriteLine($"Creating: {outputPath}");

    using var doc = WordprocessingDocument.Create(outputPath, WordprocessingDocumentType.Document);
    var mainPart = doc.AddMainDocumentPart();
    mainPart.Document = new Document(new Body());
    var body = mainPart.Document.Body!;

    // Title
    var titleP = new Paragraph(
        new ParagraphProperties(
            new Justification { Val = JustificationValues.Center },
            new SpacingBetweenLines { After = "400", Line = "240", LineRule = LineSpacingRuleValues.Auto }
        ),
        new Run(
            new RunProperties(
                new RunFonts { Ascii = "Microsoft YaHei", EastAsia = "Microsoft YaHei", HighAnsi = "Microsoft YaHei" },
                new Bold(),
                new FontSize { Val = "56" },
                new FontSizeComplexScript { Val = "56" },
                new Color { Val = "1F3864" }
            ),
            new Text("跨代际团队新增教学工具")
        )
    );
    body.Append(titleP);

    var subtitleP = new Paragraph(
        new ParagraphProperties(
            new Justification { Val = JustificationValues.Center },
            new SpacingBetweenLines { After = "400" }
        ),
        new Run(
            new RunProperties(
                new RunFonts { Ascii = "Microsoft YaHei", EastAsia = "Microsoft YaHei", HighAnsi = "Microsoft YaHei" },
                new FontSize { Val = "28" },
                new FontSizeComplexScript { Val = "28" },
                new Color { Val = "666666" }
            ),
            new Text("工具集锦 07")
        )
    );
    body.Append(subtitleP);

    AddParagraph(body, "作者：罗宏伟　配套《跨代际团队隐性期望对齐手册》使用", false, "888888");
    AddSeparator(body);

    // ===== Tool 1: 隐性期望识别表 =====
    AddHeading(body, "工具一：隐性期望识别表", 1);

    var p = new Paragraph(
        new ParagraphProperties(
            new Shading { Val = ShadingPatternValues.Clear, Fill = "E8F5E9" },
            new SpacingBetweenLines { After = "160" },
            new Indentation { Left = "284", Right = "284" }
        ),
        new Run(
            new RunProperties(
                new RunFonts { Ascii = "Microsoft YaHei", EastAsia = "Microsoft YaHei", HighAnsi = "Microsoft YaHei" },
                new FontSize { Val = "22" },
                new FontSizeComplexScript { Val = "22" },
                new Color { Val = "2E7D32" }
            ),
            new Text("用途：用于引导学员识别自己的隐性期望。帮助学员在对话前先自我觉察，明确自己真正在意的是什么。")
        )
    );
    body.Append(p);

    AddUsageInstructions(body, new[] {
        "使用时机：课程导入阶段，或在"三步摊牌"对话练习前使用",
        "操作方式：学员独立填写表格，然后与搭档分享",
        "重点提示：让学员意识到隐性期望的存在是关键，不要求一次全部识别",
        "后续跟进：可以在课程结束时再次填写，对比认知变化"
    });

    // Create table for Tool 1
    var tbl1 = new Table();

    // Table properties
    var tblPr1 = new TableProperties(
        new TableWidth { Width = "5000", Type = TableWidthUnitValues.Pct },
        new TableBorders(
            new TopBorder { Val = BorderValues.Single, Color = "1F3864", Size = 8 },
            new BottomBorder { Val = BorderValues.Single, Color = "1F3864", Size = 8 },
            new LeftBorder { Val = BorderValues.Single, Color = "1F3864", Size = 8 },
            new RightBorder { Val = BorderValues.Single, Color = "1F3864", Size = 8 },
            new InsideHorizontalBorder { Val = BorderValues.Single, Color = "CCCCCC", Size = 4 },
            new InsideVerticalBorder { Val = BorderValues.Single, Color = "CCCCCC", Size = 4 }
        ),
        new TableCellMarginDefault(
            new TopMargin { Width = "80", Type = TableWidthUnitValues.DXA },
            new BottomMargin { Width = "80", Type = TableWidthUnitValues.DXA },
            new TableCellLeftMargin { Width = 80, Type = TableWidthValues.Dxa },
            new TableCellRightMargin { Width = 80, Type = TableWidthValues.Dxa }
        )
    );
    tbl1.Append(tblPr1);

    var tblGrid1 = new TableGrid();
    tblGrid1.Append(new GridSpan()); // 序号
    tblGrid1.Append(new GridSpan()); // 期望领域
    tblGrid1.Append(new GridSpan()); // 我的隐性期望
    tblGrid1.Append(new GridSpan()); // 如果没被满足，我会...
    tblGrid1.Append(new GridSpan()); // 我通常如何应对
    tbl1.Append(tblGrid1);

    // Header row
    var tr1 = new TableRow();
    string[] headers1 = { "序号", "期望领域", "我的隐性期望（未说出口的）", "如果没被满足，我会...", "我通常如何应对" };
    foreach (var h in headers1)
    {
        var tc = new TableCell(
            new TableCellProperties(
                new Shading { Val = ShadingPatternValues.Clear, Fill = "1F3864" }
            ),
            new Paragraph(
                new ParagraphProperties(
                    new Justification { Val = JustificationValues.Center },
                    new SpacingBetweenLines { After = "0" }
                ),
                new Run(
                    new RunProperties(
                        new RunFonts { Ascii = "Microsoft YaHei", EastAsia = "Microsoft YaHei", HighAnsi = "Microsoft YaHei" },
                        new Bold(),
                        new FontSize { Val = "20" },
                        new FontSizeComplexScript { Val = "20" },
                        new Color { Val = "FFFFFF" }
                    ),
                    new Text(h)
                )
            )
        );
        tr1.Append(tc);
    }
    tbl1.Append(tr1);

    // Data rows
    string[] areas = { "反馈节奏", "沟通方式", "任务边界", "工作边界", "认可方式", "其他" };
    for (int i = 0; i < 6; i++)
    {
        var tr = new TableRow();
        tr.Append(new TableCell(new Paragraph(new Run(new Text((i + 1).ToString())))));
        tr.Append(new TableCell(new Paragraph(new Run(new Text(areas[i])))));
        tr.Append(new TableCell(new Paragraph(new Run(new Text("")))));
        tr.Append(new TableCell(new Paragraph(new Run(new Text("")))));
        tr.Append(new TableCell(new Paragraph(new Run(new Text("")))));
        tbl1.Append(tr);
    }
    body.Append(tbl1);
    AddSeparator(body);

    // ===== Tool 2: 三步摊牌对话练习卡 =====
    AddHeading(body, "工具二：三步摊牌对话练习卡", 1);

    p = new Paragraph(
        new ParagraphProperties(
            new Shading { Val = ShadingPatternValues.Clear, Fill = "E8F5E9" },
            new SpacingBetweenLines { After = "160" },
            new Indentation { Left = "284", Right = "284" }
        ),
        new Run(
            new RunProperties(
                new RunFonts { Ascii = "Microsoft YaHei", EastAsia = "Microsoft YaHei", HighAnsi = "Microsoft YaHei" },
                new FontSize { Val = "22" },
                new FontSizeComplexScript { Val = "22" },
                new Color { Val = "2E7D32" }
            ),
            new Text("用途：供学员对练使用。引导两名学员分别扮演管理者和员工，练习"三步摊牌"对话流程。")
        )
    );
    body.Append(p);

    AddUsageInstructions(body, new[] {
        "使用时机：课程中的对话练习环节",
        "操作方式：两名学员一组，分别抽取角色卡，一方扮演管理者，一方扮演员工",
        "练习次数：每组至少练习3轮，然后交换角色",
        "观察要点：请其他学员观察并记录对话中的"开口方式"和"结构框架""
    });

    // Three-step cards
    AddHeading(body, "第一步：摊——说出自己的标准", 2);
    AddBulletPoint(body, "角色A：我先说说我这边的默认标准...");
    AddBulletPoint(body, "角色B：我想听听你那边通常是怎么判断的？");

    AddHeading(body, "第二步：听——了解对方的标准", 2);
    AddBulletPoint(body, "角色B：那我这边的情况是...");
    AddBulletPoint(body, "角色A：我想确认一下，你那边通常是怎么判断的？");

    AddHeading(body, "第三步：找——共同参照点", 2);
    AddBulletPoint(body, "双方讨论：我们的标准有什么不同？");
    AddBulletPoint(body, "双方讨论：我们可以怎么约定？");
    AddSeparator(body);

    // ===== Tool 3: 团队契约共创工作表 =====
    AddHeading(body, "工具三：团队契约共创工作表", 1);

    p = new Paragraph(
        new ParagraphProperties(
            new Shading { Val = ShadingPatternValues.Clear, Fill = "E8F5E9" },
            new SpacingBetweenLines { After = "160" },
            new Indentation { Left = "284", Right = "284" }
        ),
        new Run(
            new RunProperties(
                new RunFonts { Ascii = "Microsoft YaHei", EastAsia = "Microsoft YaHei", HighAnsi = "Microsoft YaHei" },
                new FontSize { Val = "22" },
                new FontSizeComplexScript { Val = "22" },
                new Color { Val = "2E7D32" }
            ),
            new Text("用途：引导团队一起制定契约。工作表帮助团队从讨论走向具体的文字约定。")
        )
    );
    body.Append(p);

    AddUsageInstructions(body, new[] {
        "使用时机：团队契约制定环节，建议在完成"三步摊牌"练习后使用",
        "操作方式：团队全体参与，每人先独立填写"我的期望"，然后集体讨论合并",
        "讨论顺序：先讨论最紧迫的1-2个领域，不必一次性讨论全部五个领域",
        "记录人：指定一名记录员，将讨论结果填写到工作表中"
    });

    AddHeading(body, "团队信息", 2);
    AddFillField(body, "团队名称");
    AddFillField(body, "参与人数");
    AddFillField(body, "讨论日期");
    AddFillField(body, "记录人");

    AddHeading(body, "契约内容", 2);
    AddDiscussionPrompt(body, "请讨论并填写以下五个领域的约定（每个领域至少约定一条具体的、可操作的行为）：");

    AddParagraph(body, "领域一：反馈节奏", true, "1F3864");
    AddFillField(body, "我们的约定");
    AddFillField(body, "约定原因（为什么这条对我们重要）");

    AddParagraph(body, "领域二：沟通渠道", true, "1F3864");
    AddFillField(body, "我们的约定");
    AddFillField(body, "约定原因");

    AddParagraph(body, "领域三：任务交代", true, "1F3864");
    AddFillField(body, "我们的约定");
    AddFillField(body, "约定原因");

    AddParagraph(body, "领域四：响应时段", true, "1F3864");
    AddFillField(body, "我们的约定");
    AddFillField(body, "约定原因");

    AddParagraph(body, "领域五：认可方式", true, "1F3864");
    AddFillField(body, "我们的约定");
    AddFillField(body, "约定原因");

    AddHeading(body, "动态调整约定", 2);
    AddBulletPoint(body, "触发重新讨论的情形：");
    AddFillField(body, "情形1");
    AddFillField(body, "情形2");
    AddFillField(body, "情形3");
    AddFillField(body, "建议回顾频率");
    AddSeparator(body);

    // ===== Tool 4: 信号窗口观察清单 =====
    AddHeading(body, "工具四：信号窗口观察清单", 1);

    p = new Paragraph(
        new ParagraphProperties(
            new Shading { Val = ShadingPatternValues.Clear, Fill = "E8F5E9" },
            new SpacingBetweenLines { After = "160" },
            new Indentation { Left = "284", Right = "284" }
        ),
        new Run(
            new RunProperties(
                new RunFonts { Ascii = "Microsoft YaHei", EastAsia = "Microsoft YaHei", HighAnsi = "Microsoft YaHei" },
                new FontSize { Val = "22" },
                new FontSizeComplexScript { Val = "22" },
                new Color { Val = "2E7D32" }
            ),
            new Text("用途：识别冲突预警信号。帮助管理者在冲突升级前发现并处理隐性摩擦。")
        )
    );
    body.Append(p);

    AddUsageInstructions(body, new[] {
        "使用时机：日常管理中的观察记录，或在1对1谈话前回顾",
        "操作方式：管理者或团队成员在观察到相关信号时打勾",
        "关注频率：建议每周至少回顾一次",
        "响应原则：发现信号后主动约时间沟通，不要等到摩擦显性化"
    });

    // Create table for Tool 4
    var tbl4 = new Table();

    var tblPr4 = new TableProperties(
        new TableWidth { Width = "5000", Type = TableWidthUnitValues.Pct },
        new TableBorders(
            new TopBorder { Val = BorderValues.Single, Color = "1F3864", Size = 8 },
            new BottomBorder { Val = BorderValues.Single, Color = "1F3864", Size = 8 },
            new LeftBorder { Val = BorderValues.Single, Color = "1F3864", Size = 8 },
            new RightBorder { Val = BorderValues.Single, Color = "1F3864", Size = 8 },
            new InsideHorizontalBorder { Val = BorderValues.Single, Color = "CCCCCC", Size = 4 },
            new InsideVerticalBorder { Val = BorderValues.Single, Color = "CCCCCC", Size = 4 }
        ),
        new TableCellMarginDefault(
            new TopMargin { Width = "80", Type = TableWidthUnitValues.DXA },
            new BottomMargin { Width = "80", Type = TableWidthUnitValues.DXA },
            new TableCellLeftMargin { Width = 80, Type = TableWidthValues.Dxa },
            new TableCellRightMargin { Width = 80, Type = TableWidthValues.Dxa }
        )
    );
    tbl4.Append(tblPr4);

    var tblGrid4 = new TableGrid();
    tblGrid4.Append(new GridSpan());
    tblGrid4.Append(new GridSpan());
    tblGrid4.Append(new GridSpan());
    tblGrid4.Append(new GridSpan());
    tbl4.Append(tblGrid4);

    // Header row
    var tr4 = new TableRow();
    string[] headers4 = { "类别", "预警信号", "观察日期", "备注" };
    foreach (var h in headers4)
    {
        var tc = new TableCell(
            new TableCellProperties(
                new Shading { Val = ShadingPatternValues.Clear, Fill = "1F3864" }
            ),
            new Paragraph(
                new ParagraphProperties(
                    new Justification { Val = JustificationValues.Center },
                    new SpacingBetweenLines { After = "0" }
                ),
                new Run(
                    new RunProperties(
                        new RunFonts { Ascii = "Microsoft YaHei", EastAsia = "Microsoft YaHei", HighAnsi = "Microsoft YaHei" },
                        new Bold(),
                        new FontSize { Val = "20" },
                        new FontSizeComplexScript { Val = "20" },
                        new Color { Val = "FFFFFF" }
                    ),
                    new Text(h)
                )
            )
        );
        tr4.Append(tc);
    }
    tbl4.Append(tr4);

    // Data rows
    string[,] signals = {
        { "沟通类", "对方回复变简短或延迟", "", "" },
        { "沟通类", "开始使用正式渠道（邮件）代替即时消息", "", "" },
        { "沟通类", "避免当面沟通，选择消息代替", "", "" },
        { "反馈类", "超过约定的反馈周期没有同步", "", "" },
        { "反馈类", "收到负面反馈后情绪反应明显", "", "" },
        { "协作类", "开始绕过既定流程", "", "" },
        { "协作类", "对任务分配表现出抵触", "", "" },
        { "态度类", "会议参与度下降", "", "" },
        { "态度类", "对以往认可表现平淡", "", "" },
        { "态度类", "开始评价别人的工作方式", "", "" }
    };

    for (int i = 0; i < 10; i++)
    {
        var tr = new TableRow();
        tr.Append(new TableCell(new Paragraph(new Run(new Text(signals[i, 0])))));
        tr.Append(new TableCell(new Paragraph(new Run(new Text(signals[i, 1])))));
        tr.Append(new TableCell(new Paragraph(new Run(new Text(signals[i, 2])))));
        tr.Append(new TableCell(new Paragraph(new Run(new Text(signals[i, 3])))));
        tbl4.Append(tr);
    }
    body.Append(tbl4);
    AddSeparator(body);

    // ===== Tool 5: 摩擦点追踪表 =====
    AddHeading(body, "工具五：摩擦点追踪表", 1);

    p = new Paragraph(
        new ParagraphProperties(
            new Shading { Val = ShadingPatternValues.Clear, Fill = "E8F5E9" },
            new SpacingBetweenLines { After = "160" },
            new Indentation { Left = "284", Right = "284" }
        ),
        new Run(
            new RunProperties(
                new RunFonts { Ascii = "Microsoft YaHei", EastAsia = "Microsoft YaHei", HighAnsi = "Microsoft YaHei" },
                new FontSize { Val = "22" },
                new FontSizeComplexScript { Val = "22" },
                new Color { Val = "2E7D32" }
            ),
            new Text("用途：用于课后持续追踪。帮助团队记录、分析和跟进隐性摩擦点，确保契约落地。")
        )
    );
    body.Append(p);

    AddUsageInstructions(body, new[] {
        "使用时机：每次发现或处理摩擦后填写",
        "操作方式：管理者或指定人员填写追踪记录",
        "回顾频率：建议每月团队会议时回顾一次追踪表",
        "改进验证：每次回顾时确认上一期的摩擦点是否已解决"
    });

    // Create table for Tool 5
    var tbl5 = new Table();

    var tblPr5 = new TableProperties(
        new TableWidth { Width = "5000", Type = TableWidthUnitValues.Pct },
        new TableBorders(
            new TopBorder { Val = BorderValues.Single, Color = "1F3864", Size = 8 },
            new BottomBorder { Val = BorderValues.Single, Color = "1F3864", Size = 8 },
            new LeftBorder { Val = BorderValues.Single, Color = "1F3864", Size = 8 },
            new RightBorder { Val = BorderValues.Single, Color = "1F3864", Size = 8 },
            new InsideHorizontalBorder { Val = BorderValues.Single, Color = "CCCCCC", Size = 4 },
            new InsideVerticalBorder { Val = BorderValues.Single, Color = "CCCCCC", Size = 4 }
        ),
        new TableCellMarginDefault(
            new TopMargin { Width = "80", Type = TableWidthUnitValues.DXA },
            new BottomMargin { Width = "80", Type = TableWidthUnitValues.DXA },
            new TableCellLeftMargin { Width = 80, Type = TableWidthValues.Dxa },
            new TableCellRightMargin { Width = 80, Type = TableWidthValues.Dxa }
        )
    );
    tbl5.Append(tblPr5);

    var tblGrid5 = new TableGrid();
    tblGrid5.Append(new GridSpan());
    tblGrid5.Append(new GridSpan());
    tblGrid5.Append(new GridSpan());
    tblGrid5.Append(new GridSpan());
    tblGrid5.Append(new GridSpan());
    tblGrid5.Append(new GridSpan());
    tbl5.Append(tblGrid5);

    // Header row
    var tr5 = new TableRow();
    string[] headers5 = { "序号", "摩擦描述", "发生日期", "涉及成员", "处理方式", "状态", "下次跟进" };
    foreach (var h in headers5)
    {
        var tc = new TableCell(
            new TableCellProperties(
                new Shading { Val = ShadingPatternValues.Clear, Fill = "1F3864" }
            ),
            new Paragraph(
                new ParagraphProperties(
                    new Justification { Val = JustificationValues.Center },
                    new SpacingBetweenLines { After = "0" }
                ),
                new Run(
                    new RunProperties(
                        new RunFonts { Ascii = "Microsoft YaHei", EastAsia = "Microsoft YaHei", HighAnsi = "Microsoft YaHei" },
                        new Bold(),
                        new FontSize { Val = "20" },
                        new FontSizeComplexScript { Val = "20" },
                        new Color { Val = "FFFFFF" }
                    ),
                    new Text(h)
                )
            )
        );
        tr5.Append(tc);
    }
    tbl5.Append(tr5);

    // Empty rows for tracking
    for (int i = 0; i < 8; i++)
    {
        var tr = new TableRow();
        tr.Append(new TableCell(new Paragraph(new Run(new Text((i + 1).ToString())))));
        tr.Append(new TableCell(new Paragraph(new Run(new Text("")))));
        tr.Append(new TableCell(new Paragraph(new Run(new Text("")))));
        tr.Append(new TableCell(new Paragraph(new Run(new Text("")))));
        tr.Append(new TableCell(new Paragraph(new Run(new Text("")))));
        tr.Append(new TableCell(new Paragraph(new Run(new Text("待处理/已解决")))));
        tr.Append(new TableCell(new Paragraph(new Run(new Text("")))));
        tbl5.Append(tr);
    }
    body.Append(tbl5);

    Console.WriteLine($"Created: {outputPath}");
}

// ============================================================
// COVER PAGE
// ============================================================

void CreateCoverPage()
{
    string outputPath = Path.Combine(outputDir, "工具集封面.docx");
    Console.WriteLine($"Creating: {outputPath}");

    using var doc = WordprocessingDocument.Create(outputPath, WordprocessingDocumentType.Document);
    var mainPart = doc.AddMainDocumentPart();
    mainPart.Document = new Document(new Body());
    var body = mainPart.Document.Body!;

    // Set page properties for landscape A3
    var sectionProps = new SectionProperties(
        new PageSize { Width = 16838, Height = 11906, Orient = PageOrientationValues.Landscape },
        new PageMargin { Top = 720, Bottom = 720, Left = 1080, Right = 1080 }
    );

    // Main title
    var titleP = new Paragraph(
        new ParagraphProperties(
            new Justification { Val = JustificationValues.Center },
            new SpacingBetweenLines { After = "600", Line = "360", LineRule = LineSpacingRuleValues.Auto }
        ),
        new Run(
            new RunProperties(
                new RunFonts { Ascii = "Microsoft YaHei", EastAsia = "Microsoft YaHei", HighAnsi = "Microsoft YaHei" },
                new Bold(),
                new FontSize { Val = "72" },
                new FontSizeComplexScript { Val = "72" },
                new Color { Val = "1F3864" }
            ),
            new Text("跨代际团队隐性期望对齐")
        )
    );
    body.Append(titleP);

    // Subtitle
    var subtitleP = new Paragraph(
        new ParagraphProperties(
            new Justification { Val = JustificationValues.Center },
            new SpacingBetweenLines { After = "800" }
        ),
        new Run(
            new RunProperties(
                new RunFonts { Ascii = "Microsoft YaHei", EastAsia = "Microsoft YaHei", HighAnsi = "Microsoft YaHei" },
                new Bold(),
                new FontSize { Val = "48" },
                new FontSizeComplexScript { Val = "48" },
                new Color { Val = "2E5496" }
            ),
            new Text("教学工具集锦")
        )
    );
    body.Append(subtitleP);

    // Decorative line
    var lineP = new Paragraph(
        new ParagraphProperties(
            new Justification { Val = JustificationValues.Center },
            new SpacingBetweenLines { After = "600" },
            new ParagraphBorders(
                new BottomBorder { Val = BorderValues.Single, Color = "1F3864", Size = 12, Space = 1 }
            )
        ),
        new Run(
            new RunProperties(
                new RunFonts { Ascii = "Microsoft YaHei", EastAsia = "Microsoft YaHei", HighAnsi = "Microsoft YaHei" },
                new FontSize { Val = "24" },
                new FontSizeComplexScript { Val = "24" },
                new Color { Val = "CCCCCC" }
            ),
            new Text(" ")
        )
    );
    body.Append(lineP);

    // Tool list
    var toolsP = new Paragraph(
        new ParagraphProperties(
            new Justification { Val = JustificationValues.Center },
            new SpacingBetweenLines { After = "200" }
        ),
        new Run(
            new RunProperties(
                new RunFonts { Ascii = "Microsoft YaHei", EastAsia = "Microsoft YaHei", HighAnsi = "Microsoft YaHei" },
                new FontSize { Val = "28" },
                new FontSizeComplexScript { Val = "28" },
                new Color { Val = "666666" }
            ),
            new Text("工具集锦 01-05  契约模板（5份）")
        )
    );
    body.Append(toolsP);

    toolsP = new Paragraph(
        new ParagraphProperties(
            new Justification { Val = JustificationValues.Center },
            new SpacingBetweenLines { After = "200" }
        ),
        new Run(
            new RunProperties(
                new RunFonts { Ascii = "Microsoft YaHei", EastAsia = "Microsoft YaHei", HighAnsi = "Microsoft YaHei" },
                new FontSize { Val = "28" },
                new FontSizeComplexScript { Val = "28" },
                new Color { Val = "666666" }
            ),
            new Text("工具集锦 06  话术库（5组）")
        )
    );
    body.Append(toolsP);

    toolsP = new Paragraph(
        new ParagraphProperties(
            new Justification { Val = JustificationValues.Center },
            new SpacingBetweenLines { After = "800" }
        ),
        new Run(
            new RunProperties(
                new RunFonts { Ascii = "Microsoft YaHei", EastAsia = "Microsoft YaHei", HighAnsi = "Microsoft YaHei" },
                new FontSize { Val = "28" },
                new FontSizeComplexScript { Val = "28" },
                new Color { Val = "666666" }
            ),
            new Text("工具集锦 07  新增工具（5份）")
        )
    );
    body.Append(toolsP);

    // Author info
    var authorP = new Paragraph(
        new ParagraphProperties(
            new Justification { Val = JustificationValues.Center },
            new SpacingBetweenLines { After = "200" }
        ),
        new Run(
            new RunProperties(
                new RunFonts { Ascii = "Microsoft YaHei", EastAsia = "Microsoft YaHei", HighAnsi = "Microsoft YaHei" },
                new FontSize { Val = "24" },
                new FontSizeComplexScript { Val = "24" },
                new Color { Val = "888888" }
            ),
            new Text("作者：罗宏伟")
        )
    );
    body.Append(authorP);

    var dateP = new Paragraph(
        new ParagraphProperties(
            new Justification { Val = JustificationValues.Center },
            new SpacingBetweenLines { After = "200" }
        ),
        new Run(
            new RunProperties(
                new RunFonts { Ascii = "Microsoft YaHei", EastAsia = "Microsoft YaHei", HighAnsi = "Microsoft YaHei" },
                new FontSize { Val = "22" },
                new FontSizeComplexScript { Val = "22" },
                new Color { Val = "AAAAAA" }
            ),
            new Text("配套《跨代际团队隐性期望对齐手册》使用")
        )
    );
    body.Append(dateP);

    body.Append(new Paragraph(sectionProps));

    Console.WriteLine($"Created: {outputPath}");
}

// ============================================================
// MAIN EXECUTION
// ============================================================
Console.WriteLine("Starting Teaching Toolkit Generation...");
Console.WriteLine($"Output directory: {outputDir}");

try
{
    CreateContractsDocument();
    CreateScriptsDocument();
    CreateNewToolsDocument();
    CreateCoverPage();
    Console.WriteLine("\nAll documents created successfully!");
}
catch (Exception ex)
{
    Console.WriteLine($"Error: {ex.Message}");
    Console.WriteLine(ex.StackTrace);
}
