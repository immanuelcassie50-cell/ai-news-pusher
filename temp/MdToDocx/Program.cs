using System.Text.RegularExpressions;
using DocumentFormat.OpenXml;
using DocumentFormat.OpenXml.Packaging;
using DocumentFormat.OpenXml.Wordprocessing;

// Input and output paths
string studentMd = @"D:\新课开发\导师和带教\导师带教\新版\传统版\完整课程包\03_学员手册\导师带教实战工作坊_学员手册_v1.0.md";
string instructorMd = @"D:\新课开发\导师和带教\导师带教\新版\传统版\完整课程包\04_讲师手册\导师带教实战工作坊_讲师手册_v1.0.md";
string studentOut = @"D:\新课开发\导师和带教\导师带教\新版\传统版\完整课程包\03_学员手册\导师带教实战工作坊_学员手册_v1.0.docx";
string instructorOut = @"D:\新课开发\导师和带教\导师带教\新版\传统版\完整课程包\04_讲师手册\导师带教实战工作坊_讲师手册_v1.0.docx";

Console.WriteLine("Converting Student Handbook...");
ConvertMdToDocx(studentMd, studentOut, "学员手册");
Console.WriteLine("Student Handbook done: " + studentOut);

Console.WriteLine("Converting Instructor Handbook...");
ConvertMdToDocx(instructorMd, instructorOut, "讲师手册");
Console.WriteLine("Instructor Handbook done: " + instructorOut);

Console.WriteLine("All conversions complete!");

void ConvertMdToDocx(string mdPath, string docxPath, string docType)
{
    string[] lines = File.ReadAllLines(mdPath);

    using var doc = WordprocessingDocument.Create(docxPath, WordprocessingDocumentType.Document);
    var mainPart = doc.AddMainDocumentPart();
    mainPart.Document = new Document(new Body());
    var body = mainPart.Document.Body!;

    // Add styles
    var stylesPart = mainPart.AddNewPart<StyleDefinitionsPart>();
    stylesPart.Styles = new Styles();
    var styles = stylesPart.Styles!;

    // DocDefaults - Chinese font, 12pt
    styles.Append(new DocDefaults(
        new RunPropertiesDefault(new RunPropertiesBaseStyle(
            new RunFonts { Ascii = "Microsoft YaHei", EastAsia = "Microsoft YaHei", HighAnsi = "Microsoft YaHei" },
            new FontSize { Val = "24" },
            new FontSizeComplexScript { Val = "24" }
        )),
        new ParagraphPropertiesDefault(new ParagraphPropertiesBaseStyle(
            new SpacingBetweenLines { After = "160", Line = "276", LineRule = LineSpacingRuleValues.Auto }
        ))
    ));

    // Title style (H1)
    styles.Append(new Style(
        new StyleName { Val = "Title" },
        new BasedOn { Val = "Normal" },
        new PrimaryStyle(),
        new StyleParagraphProperties(
            new Justification { Val = JustificationValues.Center },
            new SpacingBetweenLines { After = "0", Line = "240", LineRule = LineSpacingRuleValues.Auto }
        ),
        new StyleRunProperties(
            new RunFonts { Ascii = "Microsoft YaHei", EastAsia = "Microsoft YaHei", HighAnsi = "Microsoft YaHei" },
            new Bold(),
            new FontSize { Val = "56" },
            new FontSizeComplexScript { Val = "56" },
            new Color { Val = "1F3864" }
        )
    ) { Type = StyleValues.Paragraph, StyleId = "Title" });

    // Heading1 style
    styles.Append(new Style(
        new StyleName { Val = "Heading 1" },
        new BasedOn { Val = "Normal" },
        new PrimaryStyle(),
        new StyleParagraphProperties(
            new SpacingBetweenLines { Before = "480", After = "240" },
            new KeepNext(),
            new OutlineLevel { Val = 0 }
        ),
        new StyleRunProperties(
            new RunFonts { Ascii = "Microsoft YaHei", EastAsia = "Microsoft YaHei", HighAnsi = "Microsoft YaHei" },
            new Bold(),
            new FontSize { Val = "36" },
            new FontSizeComplexScript { Val = "36" },
            new Color { Val = "1F3864" }
        )
    ) { Type = StyleValues.Paragraph, StyleId = "Heading1" });

    // Heading2 style
    styles.Append(new Style(
        new StyleName { Val = "Heading 2" },
        new BasedOn { Val = "Normal" },
        new PrimaryStyle(),
        new StyleParagraphProperties(
            new SpacingBetweenLines { Before = "360", After = "120" },
            new KeepNext(),
            new OutlineLevel { Val = 1 }
        ),
        new StyleRunProperties(
            new RunFonts { Ascii = "Microsoft YaHei", EastAsia = "Microsoft YaHei", HighAnsi = "Microsoft YaHei" },
            new Bold(),
            new FontSize { Val = "28" },
            new FontSizeComplexScript { Val = "28" },
            new Color { Val = "2E5496" }
        )
    ) { Type = StyleValues.Paragraph, StyleId = "Heading2" });

    // Heading3 style
    styles.Append(new Style(
        new StyleName { Val = "Heading 3" },
        new BasedOn { Val = "Normal" },
        new PrimaryStyle(),
        new StyleParagraphProperties(
            new SpacingBetweenLines { Before = "240", After = "120" },
            new KeepNext(),
            new OutlineLevel { Val = 2 }
        ),
        new StyleRunProperties(
            new RunFonts { Ascii = "Microsoft YaHei", EastAsia = "Microsoft YaHei", HighAnsi = "Microsoft YaHei" },
            new Bold(),
            new FontSize { Val = "24" },
            new FontSizeComplexScript { Val = "24" },
            new Color { Val = "4472C4" }
        )
    ) { Type = StyleValues.Paragraph, StyleId = "Heading3" });

    // Quote style
    styles.Append(new Style(
        new StyleName { Val = "Quote" },
        new BasedOn { Val = "Normal" },
        new PrimaryStyle(),
        new StyleParagraphProperties(
            new Justification { Val = JustificationValues.Center },
            new SpacingBetweenLines { Before = "240", After = "240" },
            new ParagraphBorders(new LeftBorder { Val = BorderValues.Single, Size = 24, Color = "2E5496" }),
            new Indentation { Left = "720", Right = "720" }
        ),
        new StyleRunProperties(
            new Italic(),
            new FontSize { Val = "22" },
            new FontSizeComplexScript { Val = "22" },
            new Color { Val = "424242" }
        )
    ) { Type = StyleValues.Paragraph, StyleId = "Quote" });

    // FormField style (for dotted lines)
    styles.Append(new Style(
        new StyleName { Val = "FormField" },
        new BasedOn { Val = "Normal" },
        new StyleParagraphProperties(
            new SpacingBetweenLines { Before = "60", After = "60" },
            new ParagraphBorders(new BottomBorder { Val = BorderValues.Dotted, Size = 4, Color = "999999" })
        ),
        new StyleRunProperties(
            new FontSize { Val = "22" },
            new FontSizeComplexScript { Val = "22" }
        )
    ) { Type = StyleValues.Paragraph, StyleId = "FormField" });

    // TableHeader style
    styles.Append(new Style(
        new StyleName { Val = "TableHeader" },
        new BasedOn { Val = "Normal" },
        new StyleParagraphProperties(
            new Justification { Val = JustificationValues.Center },
            new Shading { Fill = "1F3864" }
        ),
        new StyleRunProperties(
            new Bold(),
            new Color { Val = "FFFFFF" }
        )
    ) { Type = StyleValues.Paragraph, StyleId = "TableHeader" });

    // Normal style
    styles.Append(new Style(
        new StyleName { Val = "Normal" },
        new StyleParagraphProperties(
            new SpacingBetweenLines { After = "160", Line = "276", LineRule = LineSpacingRuleValues.Auto }
        ),
        new StyleRunProperties(
            new RunFonts { Ascii = "Microsoft YaHei", EastAsia = "Microsoft YaHei", HighAnsi = "Microsoft YaHei" },
            new FontSize { Val = "24" },
            new FontSizeComplexScript { Val = "24" }
        )
    ) { Type = StyleValues.Paragraph, StyleId = "Normal" });

    styles.Save();

    // Parse and add content
    int i = 0;
    while (i < lines.Length)
    {
        string line = lines[i];

        // Skip empty lines but preserve some spacing
        if (string.IsNullOrWhiteSpace(line))
        {
            i++;
            continue;
        }

        // H1: # Title or ## Title (major sections)
        if (line.StartsWith("# "))
        {
            string text = line.Substring(2).Trim();
            // Check if it's the document title (first H1)
            if (i == 0 || (i > 0 && string.IsNullOrWhiteSpace(lines[i-1])))
            {
                var p = new Paragraph(new ParagraphProperties(new ParagraphStyleId { Val = "Title" }));
                p.Append(new Run(new Text(text)));
                body.Append(p);
            }
            else
            {
                var p = new Paragraph(new ParagraphProperties(new ParagraphStyleId { Val = "Heading1" }));
                p.Append(new Run(new Text(text)));
                body.Append(p);
            }
            i++;
            continue;
        }

        // H2: ## Title
        if (line.StartsWith("## "))
        {
            string text = line.Substring(3).Trim();
            // Check for page break markers (---)
            if (text == "---")
            {
                body.Append(new Paragraph(new Run(new Break { Type = BreakValues.Page })));
            }
            else
            {
                var p = new Paragraph(new ParagraphProperties(new ParagraphStyleId { Val = "Heading2" }));
                p.Append(new Run(new Text(text)));
                body.Append(p);
            }
            i++;
            continue;
        }

        // H3: ### Title
        if (line.StartsWith("### "))
        {
            string text = line.Substring(4).Trim();
            var p = new Paragraph(new ParagraphProperties(new ParagraphStyleId { Val = "Heading3" }));
            p.Append(new Run(new Text(text)));
            body.Append(p);
            i++;
            continue;
        }

        // Table: lines starting with |
        if (line.TrimStart().StartsWith("|"))
        {
            // Collect all consecutive table rows
            var tableLines = new List<string>();
            while (i < lines.Length && lines[i].TrimStart().StartsWith("|"))
            {
                tableLines.Add(lines[i]);
                i++;
            }

            // Parse and create table
            var table = ParseMarkdownTable(tableLines);
            body.Append(table);
            continue;
        }

        // Blockquote: > text
        if (line.TrimStart().StartsWith(">"))
        {
            // Collect consecutive blockquote lines
            var quoteLines = new List<string>();
            while (i < lines.Length && (lines[i].TrimStart().StartsWith(">") || string.IsNullOrWhiteSpace(lines[i].Trim())))
            {
                if (lines[i].TrimStart().StartsWith(">"))
                {
                    quoteLines.Add(lines[i]);
                }
                i++;
            }

            // Create quote paragraph
            foreach (var qLine in quoteLines)
            {
                string text = qLine.TrimStart('>', ' ').Trim();
                if (!string.IsNullOrEmpty(text))
                {
                    var p = new Paragraph(new ParagraphProperties(new ParagraphStyleId { Val = "Quote" }));
                    p.Append(new Run(new Text(text)));
                    body.Append(p);
                }
            }
            continue;
        }

        // Bullet list: - or * item
        if (line.TrimStart().StartsWith("- ") || line.TrimStart().StartsWith("* "))
        {
            var p = new Paragraph(new ParagraphProperties(
                new SpacingBetweenLines { Before = "0", After = "80" },
                new Indentation { Left = "720", Hanging = "360" }
            ));
            string text = line.TrimStart('-', '*', ' ').Trim();
            p.Append(new Run(new Text("• " + text)));
            body.Append(p);
            i++;
            continue;
        }

        // Numbered list: 1. item
        var numberedMatch = Regex.Match(line.TrimStart(), @"^(\d+)\.\s+(.+)$");
        if (numberedMatch.Success)
        {
            var p = new Paragraph(new ParagraphProperties(
                new SpacingBetweenLines { Before = "0", After = "80" },
                new Indentation { Left = "720", Hanging = "360" }
            ));
            string text = numberedMatch.Groups[2].Value.Trim();
            p.Append(new Run(new Text(numberedMatch.Groups[1].Value + ". " + text)));
            body.Append(p);
            i++;
            continue;
        }

        // Form field line: ____ or ___ or similar
        if (Regex.IsMatch(line.Trim(), @"^_{3,}|唐代|_____|　{3,}"))
        {
            var p = new Paragraph(new ParagraphProperties(new ParagraphStyleId { Val = "FormField" }));
            p.Append(new Run(new Text("")));
            body.Append(p);
            i++;
            continue;
        }

        // Checkbox: (　) or (X) or [ ]
        if (line.Contains("（") && (line.Contains("）") || line.Contains("○")))
        {
            var p = new Paragraph(new ParagraphProperties(
                new SpacingBetweenLines { Before = "60", After = "60" }
            ));
            AddFormattedText(p, line);
            body.Append(p);
            i++;
            continue;
        }

        // Regular paragraph - check for bold/italic formatting
        var para = new Paragraph(new ParagraphProperties(
            new SpacingBetweenLines { Before = "60", After = "60" }
        ));
        AddFormattedText(para, line);
        body.Append(para);
        i++;
    }

    // Add section properties (A4 page)
    body.Append(new SectionProperties(
        new PageSize { Width = 11906, Height = 16838 },
        new PageMargin { Top = 1440, Right = 1440, Bottom = 1440, Left = 1440, Header = 720, Footer = 720 }
    ));

    mainPart.Document.Save();
}

void AddFormattedText(Paragraph p, string text)
{
    // Handle **bold** text
    int pos = 0;
    while (pos < text.Length)
    {
        int boldStart = text.IndexOf("**", pos);
        if (boldStart == -1)
        {
            // No more bold, add remaining text
            if (pos < text.Length)
            {
                p.Append(new Run(new Text(text.Substring(pos)) { Space = SpaceProcessingModeValues.Preserve }));
            }
            break;
        }

        // Add text before bold marker
        if (boldStart > pos)
        {
            p.Append(new Run(new Text(text.Substring(pos, boldStart - pos)) { Space = SpaceProcessingModeValues.Preserve }));
        }

        int boldEnd = text.IndexOf("**", boldStart + 2);
        if (boldEnd == -1)
        {
            // Unclosed bold
            p.Append(new Run(new Text(text.Substring(boldStart)) { Space = SpaceProcessingModeValues.Preserve }));
            break;
        }

        string boldText = text.Substring(boldStart + 2, boldEnd - boldStart - 2);
        var boldRun = new Run(new Text(boldText));
        boldRun.RunProperties = new RunProperties(new Bold());
        p.Append(boldRun);

        pos = boldEnd + 2;
    }
}

Table ParseMarkdownTable(List<string> lines)
{
    var table = new Table();

    // Table properties
    var tblProps = new TableProperties(
        new TableWidth { Width = "5000", Type = TableWidthUnitValues.Pct },
        new TableBorders(
            new TopBorder { Val = BorderValues.Single, Size = 8, Color = "1F3864" },
            new BottomBorder { Val = BorderValues.Single, Size = 8, Color = "1F3864" },
            new LeftBorder { Val = BorderValues.Single, Size = 8, Color = "1F3864" },
            new RightBorder { Val = BorderValues.Single, Size = 8, Color = "1F3864" },
            new InsideHorizontalBorder { Val = BorderValues.Single, Size = 4, Color = "CCCCCC" },
            new InsideVerticalBorder { Val = BorderValues.Single, Size = 4, Color = "CCCCCC" }
        )
    );
    table.Append(tblProps);
    table.Append(new TableGrid(new GridColumn()));

    // Parse rows
    bool isFirstRow = true;
    foreach (var line in lines)
    {
        string[] cells = line.Split('|', StringSplitOptions.RemoveEmptyEntries)
            .Select(c => c.Trim())
            .ToArray();

        var row = new TableRow();

        foreach (var cellText in cells)
        {
            var cell = new TableCell();

            // Header row styling
            if (isFirstRow)
            {
                cell.Append(new TableCellProperties(
                    new Shading { Fill = "1F3864" },
                    new TableCellVerticalAlignment { Val = TableVerticalAlignmentValues.Center }
                ));

                var p = new Paragraph();
                p.Append(new ParagraphProperties(
                    new Justification { Val = JustificationValues.Center },
                    new SpacingBetweenLines { Before = "60", After = "60" }
                ));
                var run = new Run(new Text(cellText));
                run.RunProperties = new RunProperties(
                    new Bold(),
                    new Color { Val = "FFFFFF" }
                );
                p.Append(run);
                cell.Append(p);
            }
            else
            {
                cell.Append(new TableCellProperties(
                    new TableCellVerticalAlignment { Val = TableVerticalAlignmentValues.Center }
                ));

                var p = new Paragraph();
                p.Append(new ParagraphProperties(
                    new SpacingBetweenLines { Before = "60", After = "60" }
                ));
                p.Append(new Run(new Text(cellText) { Space = SpaceProcessingModeValues.Preserve }));
                cell.Append(p);
            }

            row.Append(cell);
        }

        table.Append(row);
        isFirstRow = false;
    }

    return table;
}
