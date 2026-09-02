// 德赛西威评审项目 Word 文档生成 · 共享品牌组件
// 配色：德赛蓝 #003D7A / 智能青 #00A0E9 / 警示橙 #F37021 / 安全绿 #3CB878
// 字体：思源黑体（中）/ Calibri（英数）；正文小四 12pt / H1 二号 22pt / H2 三号 16pt / H3 小三 15pt
using DocumentFormat.OpenXml;
using DocumentFormat.OpenXml.Packaging;
using DocumentFormat.OpenXml.Wordprocessing;

namespace DesayDocxGen;

public static class DesayBrand
{
    // 品牌色
    public const string DesayBlue   = "003D7A";
    public const string SmartCyan   = "00A0E9";
    public const string AlertOrange = "F37021";
    public const string SafeGreen   = "3CB878";
    public const string TextGray    = "333333";
    public const string BgLight     = "F4F6F9";
    public const string AlertRed    = "D0021B";

    // 字号（half-points: 字号点数×2）
    public const string Sz_H1   = "44"; // 二号 22pt
    public const string Sz_H2   = "32"; // 三号 16pt
    public const string Sz_H3   = "30"; // 小三 15pt
    public const string Sz_Body = "24"; // 小四 12pt
    public const string Sz_Tab  = "22"; // 五号 11pt（表格内）
    public const string Sz_Foot = "18"; // 小五 9pt（页脚/页眉）

    // 字体（中/英）
    public const string FontCN     = "Microsoft YaHei";   // 思源黑体退化方案
    public const string FontCNSerif= "SimSun";
    public const string FontEN     = "Calibri";

    // ========== 页面设置 ==========
    /// <summary>构造 A4 纵向、标准页边距、绑定页眉页脚的 SectionProperties</summary>
    public static SectionProperties BuildSectionProperties(string headerRid, string footerRid)
    {
        return new SectionProperties(
            new HeaderReference { Type = HeaderFooterValues.Default, Id = headerRid },
            new FooterReference { Type = HeaderFooterValues.Default, Id = footerRid },
            new PageSize  { Width = (UInt32Value)11906U, Height = (UInt32Value)16838U },
            // 上下 2.54cm=1440 / 左右 3.18cm=1800 / 页眉页脚 720
            new PageMargin { Top = 1440, Right = (UInt32Value)1800U, Bottom = 1440,
                             Left = (UInt32Value)1800U, Header = (UInt32Value)720U,
                             Footer = (UInt32Value)720U, Gutter = (UInt32Value)0U },
            new DocGrid   { Type = DocGridValues.Lines, LinePitch = 360 }
        );
    }

    // ========== 文档默认 + 样式定义 ==========
    public static void InjectStyles(MainDocumentPart mainPart)
    {
        var stylesPart = mainPart.AddNewPart<StyleDefinitionsPart>();
        stylesPart.Styles = new Styles(
            BuildDocDefaults(),
            BuildNormalStyle(),
            BuildHeading1Style(),
            BuildHeading2Style(),
            BuildHeading3Style(),
            BuildTableHeaderStyle(),
            BuildTableCellStyle(),
            BuildCalloutStyle(),
            BuildFooterStyle()
        );
        stylesPart.Styles.Save();
    }

    private static DocDefaults BuildDocDefaults() => new(
        new RunPropertiesDefault(new RunPropertiesBaseStyle(
            new RunFonts { Ascii = FontEN, HighAnsi = FontEN, EastAsia = FontCN, ComplexScript = FontEN },
            new FontSize { Val = Sz_Body },
            new FontSizeComplexScript { Val = Sz_Body },
            new Color { Val = TextGray },
            new Languages { Val = "en-US", EastAsia = "zh-CN" }
        )),
        new ParagraphPropertiesDefault(new ParagraphPropertiesBaseStyle(
            new SpacingBetweenLines { Before = "0", After = "0",
                Line = "360", LineRule = LineSpacingRuleValues.Auto }
        ))
    );

    private static Style BuildNormalStyle() => new(
        new StyleName { Val = "Normal" },
        new PrimaryStyle()
    ) { Type = StyleValues.Paragraph, StyleId = "Normal", Default = true };

    private static Style BuildHeading1Style() => new(
        new StyleName { Val = "heading 1" },
        new BasedOn { Val = "Normal" },
        new NextParagraphStyle { Val = "Normal" },
        new UIPriority { Val = 9 },
        new PrimaryStyle(),
        new StyleParagraphProperties(
            new KeepNext(),
            new KeepLines(),
            new SpacingBetweenLines { Before = "480", After = "240",
                Line = "360", LineRule = LineSpacingRuleValues.Auto },
            new Justification { Val = JustificationValues.Center },
            new OutlineLevel { Val = 0 }
        ),
        new StyleRunProperties(
            new RunFonts { Ascii = FontEN, HighAnsi = FontEN, EastAsia = FontCN, ComplexScript = FontEN },
            new Bold(), new BoldComplexScript(),
            new Color { Val = DesayBlue },
            new FontSize { Val = Sz_H1 },
            new FontSizeComplexScript { Val = Sz_H1 }
        )
    ) { Type = StyleValues.Paragraph, StyleId = "Heading1" };

    private static Style BuildHeading2Style() => new(
        new StyleName { Val = "heading 2" },
        new BasedOn { Val = "Normal" },
        new NextParagraphStyle { Val = "Normal" },
        new UIPriority { Val = 9 },
        new PrimaryStyle(),
        new StyleParagraphProperties(
            new KeepNext(),
            new KeepLines(),
            new SpacingBetweenLines { Before = "360", After = "180",
                Line = "360", LineRule = LineSpacingRuleValues.Auto },
            new OutlineLevel { Val = 1 }
        ),
        new StyleRunProperties(
            new RunFonts { Ascii = FontEN, HighAnsi = FontEN, EastAsia = FontCN, ComplexScript = FontEN },
            new Bold(), new BoldComplexScript(),
            new Color { Val = DesayBlue },
            new FontSize { Val = Sz_H2 },
            new FontSizeComplexScript { Val = Sz_H2 }
        )
    ) { Type = StyleValues.Paragraph, StyleId = "Heading2" };

    private static Style BuildHeading3Style() => new(
        new StyleName { Val = "heading 3" },
        new BasedOn { Val = "Normal" },
        new NextParagraphStyle { Val = "Normal" },
        new UIPriority { Val = 9 },
        new PrimaryStyle(),
        new StyleParagraphProperties(
            new KeepNext(),
            new KeepLines(),
            new SpacingBetweenLines { Before = "240", After = "120",
                Line = "360", LineRule = LineSpacingRuleValues.Auto },
            new OutlineLevel { Val = 2 }
        ),
        new StyleRunProperties(
            new RunFonts { Ascii = FontEN, HighAnsi = FontEN, EastAsia = FontCN, ComplexScript = FontEN },
            new Bold(), new BoldComplexScript(),
            new Color { Val = SmartCyan },
            new FontSize { Val = Sz_H3 },
            new FontSizeComplexScript { Val = Sz_H3 }
        )
    ) { Type = StyleValues.Paragraph, StyleId = "Heading3" };

    private static Style BuildTableHeaderStyle() => new(
        new StyleName { Val = "TableHeader" },
        new BasedOn { Val = "Normal" },
        new StyleParagraphProperties(
            new SpacingBetweenLines { Before = "60", After = "60",
                Line = "300", LineRule = LineSpacingRuleValues.Auto },
            new Justification { Val = JustificationValues.Center }
        ),
        new StyleRunProperties(
            new RunFonts { Ascii = FontEN, HighAnsi = FontEN, EastAsia = FontCN, ComplexScript = FontEN },
            new Bold(), new BoldComplexScript(),
            new Color { Val = "FFFFFF" },
            new FontSize { Val = Sz_Tab },
            new FontSizeComplexScript { Val = Sz_Tab }
        )
    ) { Type = StyleValues.Paragraph, StyleId = "TableHeader" };

    private static Style BuildTableCellStyle() => new(
        new StyleName { Val = "TableCell" },
        new BasedOn { Val = "Normal" },
        new StyleParagraphProperties(
            new SpacingBetweenLines { Before = "40", After = "40",
                Line = "300", LineRule = LineSpacingRuleValues.Auto }
        ),
        new StyleRunProperties(
            new FontSize { Val = Sz_Tab },
            new FontSizeComplexScript { Val = Sz_Tab }
        )
    ) { Type = StyleValues.Paragraph, StyleId = "TableCell" };

    private static Style BuildCalloutStyle() => new(
        new StyleName { Val = "Callout" },
        new BasedOn { Val = "Normal" },
        new StyleParagraphProperties(
            new ParagraphBorders(
                new LeftBorder { Val = BorderValues.Single, Size = 24, Space = 8, Color = AlertOrange }
            ),
            new Shading { Val = ShadingPatternValues.Clear, Color = "auto", Fill = BgLight },
            new SpacingBetweenLines { Before = "120", After = "120",
                Line = "360", LineRule = LineSpacingRuleValues.Auto },
            new Indentation { Left = "240" }
        ),
        new StyleRunProperties(
            new RunFonts { EastAsia = FontCN, Ascii = FontEN },
            new FontSize { Val = Sz_Body },
            new FontSizeComplexScript { Val = Sz_Body }
        )
    ) { Type = StyleValues.Paragraph, StyleId = "Callout" };

    private static Style BuildFooterStyle() => new(
        new StyleName { Val = "Footer" },
        new BasedOn { Val = "Normal" },
        new StyleParagraphProperties(
            new SpacingBetweenLines { Before = "0", After = "0",
                Line = "240", LineRule = LineSpacingRuleValues.Auto },
            new Justification { Val = JustificationValues.Center }
        ),
        new StyleRunProperties(
            new FontSize { Val = Sz_Foot },
            new FontSizeComplexScript { Val = Sz_Foot },
            new Color { Val = "808080" }
        )
    ) { Type = StyleValues.Paragraph, StyleId = "Footer" };

    // ========== 页眉页脚 ==========
    /// <summary>构造统一的页眉：左侧项目名 + 右侧文件编号 + 底部色条</summary>
    public static (string headerRid, string footerRid) AttachHeaderFooter(
        MainDocumentPart mainPart, string fileCode)
    {
        // 页眉
        var headerPart = mainPart.AddNewPart<HeaderPart>();
        headerPart.Header = new Header(BuildHeaderTable(fileCode));
        headerPart.Header.Save();
        // 页脚
        var footerPart = mainPart.AddNewPart<FooterPart>();
        footerPart.Footer = new Footer(BuildFooterParagraph());
        footerPart.Footer.Save();

        return (mainPart.GetIdOfPart(headerPart), mainPart.GetIdOfPart(footerPart));
    }

    private static Table BuildHeaderTable(string fileCode)
    {
        var tbl = new Table(
            new TableProperties(
                new TableWidth { Type = TableWidthUnitValues.Pct, Width = "5000" },
                new TableBorders(
                    new TopBorder    { Val = BorderValues.Nil },
                    new LeftBorder   { Val = BorderValues.Nil },
                    new BottomBorder { Val = BorderValues.Single, Size = 12, Color = DesayBlue },
                    new RightBorder  { Val = BorderValues.Nil },
                    new InsideHorizontalBorder { Val = BorderValues.Nil },
                    new InsideVerticalBorder   { Val = BorderValues.Nil }
                ),
                new TableLook { Val = "04A0" }
            ),
            new TableGrid(new GridColumn { Width = "6000" }, new GridColumn { Width = "2306" }),
            new TableRow(
                MakeHeaderCell("德赛西威 AI 赋能课程评审全流程", "6000", JustificationValues.Left, DesayBlue),
                MakeHeaderCell(fileCode, "2306", JustificationValues.Right, AlertOrange)
            )
        );
        return tbl;
    }

    private static TableCell MakeHeaderCell(string text, string width,
        JustificationValues align, string colorHex)
    {
        return new TableCell(
            new TableCellProperties(
                new TableCellWidth { Type = TableWidthUnitValues.Dxa, Width = width },
                new TableCellBorders(
                    new TopBorder { Val = BorderValues.Nil },
                    new LeftBorder { Val = BorderValues.Nil },
                    new BottomBorder { Val = BorderValues.Nil },
                    new RightBorder { Val = BorderValues.Nil }
                ),
                new VerticalTextAlignmentOnPage { Val = VerticalJustificationValues.Center }
            ),
            new Paragraph(
                new ParagraphProperties(
                    new SpacingBetweenLines { Before = "0", After = "0" },
                    new Justification { Val = align }
                ),
                new Run(
                    new RunProperties(
                        new RunFonts { Ascii = FontEN, EastAsia = FontCN, HighAnsi = FontEN },
                        new Bold(), new BoldComplexScript(),
                        new Color { Val = colorHex },
                        new FontSize { Val = Sz_Foot },
                        new FontSizeComplexScript { Val = Sz_Foot }
                    ),
                    new Text(text) { Space = SpaceProcessingModeValues.Preserve }
                )
            )
        );
    }

    private static Paragraph BuildFooterParagraph()
    {
        // "第 X 页 / 共 Y 页"
        return new Paragraph(
            new ParagraphProperties(
                new ParagraphStyleId { Val = "Footer" },
                new ParagraphBorders(
                    new TopBorder { Val = BorderValues.Single, Size = 6, Color = "DDDDDD", Space = 4 }
                )
            ),
            new Run(new RunProperties(new FontSize { Val = Sz_Foot }), new Text("第 ") { Space = SpaceProcessingModeValues.Preserve }),
            // PAGE 字段
            FieldRun("PAGE"),
            new Run(new RunProperties(new FontSize { Val = Sz_Foot }), new Text(" 页 / 共 ") { Space = SpaceProcessingModeValues.Preserve }),
            FieldRun("NUMPAGES"),
            new Run(new RunProperties(new FontSize { Val = Sz_Foot }), new Text(" 页") { Space = SpaceProcessingModeValues.Preserve })
        );
    }

    private static OpenXmlElement FieldRun(string instruction)
    {
        // 复合字段：begin / instr / separate / 结果占位 / end
        var holder = new Run(
            new RunProperties(new FontSize { Val = Sz_Foot }),
            new FieldChar { FieldCharType = FieldCharValues.Begin }
        );
        // 一次包不下，所以拆成多个 Run 由调用方插入也行，但这里返回单个 Run 不可行——改用 SimpleField
        return new SimpleField { Instruction = $" {instruction} \\* MERGEFORMAT " };
    }

    // ========== 段落辅助 ==========
    public static Paragraph H1(string text) =>
        new(new ParagraphProperties(new ParagraphStyleId { Val = "Heading1" }),
            BasicRun(text, true));

    public static Paragraph H2(string text) =>
        new(new ParagraphProperties(new ParagraphStyleId { Val = "Heading2" }),
            BasicRun(text, true));

    public static Paragraph H3(string text) =>
        new(new ParagraphProperties(new ParagraphStyleId { Val = "Heading3" }),
            BasicRun(text, true));

    public static Paragraph Body(string text, bool firstLineIndent = true)
    {
        var pPr = new ParagraphProperties(
            new ParagraphStyleId { Val = "Normal" },
            new SpacingBetweenLines { Before = "60", After = "60",
                Line = "360", LineRule = LineSpacingRuleValues.Auto }
        );
        if (firstLineIndent)
            pPr.Append(new Indentation { FirstLineChars = 200 });
        return new Paragraph(pPr, BasicRun(text, false));
    }

    public static Paragraph Callout(string text) =>
        new(new ParagraphProperties(new ParagraphStyleId { Val = "Callout" }),
            BasicRun(text, false));

    public static Paragraph EmptyP() =>
        new(new ParagraphProperties(
            new SpacingBetweenLines { Before = "0", After = "0", Line = "240", LineRule = LineSpacingRuleValues.Auto }));

    public static Run BasicRun(string text, bool bold)
    {
        var rPr = new RunProperties(
            new RunFonts { Ascii = FontEN, HighAnsi = FontEN, EastAsia = FontCN, ComplexScript = FontEN }
        );
        if (bold) { rPr.Append(new Bold()); rPr.Append(new BoldComplexScript()); }
        return new Run(rPr, new Text(text) { Space = SpaceProcessingModeValues.Preserve });
    }

    // ========== 标题块（封面：蓝底白字大标题 + 副标题） ==========
    public static Table TitleBlock(string title, string subtitle, string code, string date)
    {
        var tbl = new Table(
            new TableProperties(
                new TableWidth { Type = TableWidthUnitValues.Pct, Width = "5000" },
                new TableBorders(
                    new TopBorder    { Val = BorderValues.Nil },
                    new LeftBorder   { Val = BorderValues.Nil },
                    new BottomBorder { Val = BorderValues.Nil },
                    new RightBorder  { Val = BorderValues.Nil },
                    new InsideHorizontalBorder { Val = BorderValues.Nil },
                    new InsideVerticalBorder   { Val = BorderValues.Nil }
                ),
                new TableLook { Val = "04A0" }
            ),
            new TableGrid(new GridColumn { Width = "8306" }),
            // 主标题行
            new TableRow(
                new TableRowProperties(new TableRowHeight { Val = 1100, HeightType = HeightRuleValues.AtLeast }),
                new TableCell(
                    new TableCellProperties(
                        new TableCellWidth { Type = TableWidthUnitValues.Dxa, Width = "8306" },
                        new Shading { Val = ShadingPatternValues.Clear, Color = "auto", Fill = DesayBlue },
                        new VerticalTextAlignmentOnPage { Val = VerticalJustificationValues.Center }
                    ),
                    new Paragraph(
                        new ParagraphProperties(
                            new SpacingBetweenLines { Before = "240", After = "120" },
                            new Justification { Val = JustificationValues.Center }
                        ),
                        new Run(
                            new RunProperties(
                                new RunFonts { Ascii = FontEN, EastAsia = FontCN, HighAnsi = FontEN },
                                new Bold(), new BoldComplexScript(),
                                new Color { Val = "FFFFFF" },
                                new FontSize { Val = "48" },
                                new FontSizeComplexScript { Val = "48" }
                            ),
                            new Text(title) { Space = SpaceProcessingModeValues.Preserve }
                        )
                    ),
                    new Paragraph(
                        new ParagraphProperties(
                            new SpacingBetweenLines { Before = "0", After = "240" },
                            new Justification { Val = JustificationValues.Center }
                        ),
                        new Run(
                            new RunProperties(
                                new RunFonts { Ascii = FontEN, EastAsia = FontCN, HighAnsi = FontEN },
                                new Color { Val = "FFFFFF" },
                                new FontSize { Val = "22" },
                                new FontSizeComplexScript { Val = "22" }
                            ),
                            new Text(subtitle) { Space = SpaceProcessingModeValues.Preserve }
                        )
                    )
                )
            ),
            // 元信息行（编号 + 日期 + 项目名）
            new TableRow(
                new TableRowProperties(new TableRowHeight { Val = 400, HeightType = HeightRuleValues.AtLeast }),
                new TableCell(
                    new TableCellProperties(
                        new TableCellWidth { Type = TableWidthUnitValues.Dxa, Width = "8306" },
                        new Shading { Val = ShadingPatternValues.Clear, Color = "auto", Fill = SmartCyan }
                    ),
                    new Paragraph(
                        new ParagraphProperties(
                            new SpacingBetweenLines { Before = "60", After = "60" },
                            new Justification { Val = JustificationValues.Center }
                        ),
                        new Run(
                            new RunProperties(
                                new RunFonts { Ascii = FontEN, EastAsia = FontCN, HighAnsi = FontEN },
                                new Color { Val = "FFFFFF" },
                                new FontSize { Val = Sz_Tab },
                                new FontSizeComplexScript { Val = Sz_Tab }
                            ),
                            new Text($"文件编号：{code}   |   制定日期：{date}   |   保密级别：内部使用") { Space = SpaceProcessingModeValues.Preserve }
                        )
                    )
                )
            )
        );
        return tbl;
    }

    // ========== 通用表格构造器 ==========
    /// <summary>构造蓝底白字表头 + 交替灰色行 + 边框的表格</summary>
    public static Table StandardTable(string[] headers, int[] widthsDxa, string[][] rows,
        bool alternating = true)
    {
        var tbl = new Table(
            BuildTableProperties(),
            BuildTableGrid(widthsDxa),
            BuildHeaderRow(headers, widthsDxa)
        );
        for (int i = 0; i < rows.Length; i++)
        {
            tbl.Append(BuildDataRow(rows[i], widthsDxa, alternating && (i % 2 == 1)));
        }
        return tbl;
    }

    public static TableProperties BuildTableProperties()
    {
        return new TableProperties(
            new TableWidth { Type = TableWidthUnitValues.Pct, Width = "5000" },
            new TableBorders(
                new TopBorder    { Val = BorderValues.Single, Size = 6, Color = DesayBlue },
                new LeftBorder   { Val = BorderValues.Single, Size = 6, Color = DesayBlue },
                new BottomBorder { Val = BorderValues.Single, Size = 6, Color = DesayBlue },
                new RightBorder  { Val = BorderValues.Single, Size = 6, Color = DesayBlue },
                new InsideHorizontalBorder { Val = BorderValues.Single, Size = 4, Color = "BFBFBF" },
                new InsideVerticalBorder   { Val = BorderValues.Single, Size = 4, Color = "BFBFBF" }
            ),
            new TableLayout { Type = TableLayoutValues.Fixed },
            new TableLook { Val = "04A0", FirstRow = true, LastRow = false,
                            FirstColumn = false, LastColumn = false,
                            NoHorizontalBand = false, NoVerticalBand = true }
        );
    }

    public static TableGrid BuildTableGrid(int[] widths)
    {
        var grid = new TableGrid();
        foreach (var w in widths) grid.Append(new GridColumn { Width = w.ToString() });
        return grid;
    }

    public static TableRow BuildHeaderRow(string[] headers, int[] widths)
    {
        var row = new TableRow(
            new TableRowProperties(
                new TableRowHeight { Val = (UInt32Value)600U, HeightType = HeightRuleValues.AtLeast },
                new TableHeader()
            )
        );
        for (int i = 0; i < headers.Length; i++)
        {
            row.Append(new TableCell(
                new TableCellProperties(
                    new TableCellWidth { Type = TableWidthUnitValues.Dxa, Width = widths[i].ToString() },
                    new Shading { Val = ShadingPatternValues.Clear, Color = "auto", Fill = DesayBlue },
                    new VerticalTextAlignmentOnPage { Val = VerticalJustificationValues.Center }
                ),
                new Paragraph(
                    new ParagraphProperties(
                        new ParagraphStyleId { Val = "TableHeader" }
                    ),
                    new Run(
                        new RunProperties(
                            new RunFonts { Ascii = FontEN, EastAsia = FontCN, HighAnsi = FontEN },
                            new Bold(), new BoldComplexScript(),
                            new Color { Val = "FFFFFF" },
                            new FontSize { Val = Sz_Tab },
                            new FontSizeComplexScript { Val = Sz_Tab }
                        ),
                        new Text(headers[i]) { Space = SpaceProcessingModeValues.Preserve }
                    )
                )
            ));
        }
        return row;
    }

    public static TableRow BuildDataRow(string[] cells, int[] widths, bool shaded)
    {
        var row = new TableRow(
            new TableRowProperties(
                new TableRowHeight { Val = (UInt32Value)320U, HeightType = HeightRuleValues.AtLeast }
            )
        );
        for (int i = 0; i < cells.Length; i++)
        {
            var cellProps = new TableCellProperties(
                new TableCellWidth { Type = TableWidthUnitValues.Dxa, Width = widths[i].ToString() },
                new VerticalTextAlignmentOnPage { Val = VerticalJustificationValues.Center }
            );
            if (shaded)
                cellProps.Append(new Shading { Val = ShadingPatternValues.Clear, Color = "auto", Fill = BgLight });

            row.Append(new TableCell(
                cellProps,
                new Paragraph(
                    new ParagraphProperties(new ParagraphStyleId { Val = "TableCell" }),
                    new Run(
                        new RunProperties(
                            new RunFonts { Ascii = FontEN, EastAsia = FontCN, HighAnsi = FontEN },
                            new FontSize { Val = Sz_Tab },
                            new FontSizeComplexScript { Val = Sz_Tab }
                        ),
                        new Text(cells[i] ?? "") { Space = SpaceProcessingModeValues.Preserve }
                    )
                )
            ));
        }
        return row;
    }

    // ========== 签名栏（评委 + 学员 + 日期） ==========
    public static Table SignatureBlock(string[] signers)
    {
        var widths = new[] { 1500, 2500, 1500, 2806 };
        var tbl = new Table(BuildTableProperties(), BuildTableGrid(widths));
        foreach (var sig in signers)
        {
            tbl.Append(new TableRow(
                new TableRowProperties(
                    new TableRowHeight { Val = (UInt32Value)600U, HeightType = HeightRuleValues.AtLeast }
                ),
                LabelCell(sig + "签字：", 1500),
                BlankCell(2500),
                LabelCell("日期：", 1500),
                BlankCell(2806)
            ));
        }
        return tbl;
    }

    private static TableCell LabelCell(string text, int width)
    {
        return new TableCell(
            new TableCellProperties(
                new TableCellWidth { Type = TableWidthUnitValues.Dxa, Width = width.ToString() },
                new Shading { Val = ShadingPatternValues.Clear, Color = "auto", Fill = BgLight },
                new VerticalTextAlignmentOnPage { Val = VerticalJustificationValues.Center }
            ),
            new Paragraph(
                new ParagraphProperties(
                    new ParagraphStyleId { Val = "TableCell" },
                    new Justification { Val = JustificationValues.Right }
                ),
                new Run(
                    new RunProperties(
                        new RunFonts { Ascii = FontEN, EastAsia = FontCN, HighAnsi = FontEN },
                        new Bold(), new BoldComplexScript(),
                        new Color { Val = DesayBlue },
                        new FontSize { Val = Sz_Tab },
                        new FontSizeComplexScript { Val = Sz_Tab }
                    ),
                    new Text(text) { Space = SpaceProcessingModeValues.Preserve }
                )
            )
        );
    }

    private static TableCell BlankCell(int width)
    {
        return new TableCell(
            new TableCellProperties(
                new TableCellWidth { Type = TableWidthUnitValues.Dxa, Width = width.ToString() }
            ),
            new Paragraph(new ParagraphProperties(new ParagraphStyleId { Val = "TableCell" }))
        );
    }
}
