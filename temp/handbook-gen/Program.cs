using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using DocumentFormat.OpenXml;
using DocumentFormat.OpenXml.Packaging;
using DocumentFormat.OpenXml.Wordprocessing;

namespace HandbookGen;

class Program
{
    // ===== 配色（暖色调，学员手册更活泼） =====
    static string CLR_PRIMARY   = "C0392B";   // 砖红 - 主色
    static string CLR_PRIMARY_L = "E67E22";   // 暖橙
    static string CLR_ACCENT    = "F39C12";   // 暖金
    static string CLR_BG_WARM   = "FAF3E0";   // 米色背景
    static string CLR_BG_PEACH  = "FDEBD0";   // 浅桃
    static string CLR_BG_MINT   = "E8F8F5";   // 浅薄荷
    static string CLR_BG_SKY    = "EBF5FB";   // 浅天蓝
    static string CLR_BG_LAV    = "F4ECF7";   // 浅薰衣草
    static string CLR_TEXT_DARK = "2C3E50";   // 深色文字
    static string CLR_TEXT_GREY = "7F8C8D";   // 灰色文字
    static string CLR_GREEN     = "27AE60";   // 绿色（√ 对）
    static string CLR_RED       = "E74C3C";   // 红色（× 错）
    static string CLR_BORDER    = "D5C4A1";   // 米色边框

    // ===== A4 页面设置 =====
    static readonly UInt32Value A4_WIDTH  = (UInt32Value)11906u;
    static readonly UInt32Value A4_HEIGHT = (UInt32Value)16838u;
    static readonly Int32Value MARGIN_TOP    = (Int32Value)1134;
    static readonly Int32Value MARGIN_BOT    = (Int32Value)1134;
    static readonly Int32Value MARGIN_LEFT   = (Int32Value)1134;
    static readonly Int32Value MARGIN_RIGHT  = (Int32Value)1134;
    static readonly UInt32Value HEADER_DIST  = (UInt32Value)720u;
    static readonly UInt32Value FOOTER_DIST  = (UInt32Value)720u;
    static readonly UInt32Value GUTTER       = (UInt32Value)0u;

    static string OUTPUT = @"D:\2026年课程\竞越\绩效管理和绩效面谈：通过绩效面谈让员工更加胜任\完整课程包\04_学员手册\学员手册_完整版.docx";

    static void Main()
    {
        if (File.Exists(OUTPUT)) File.Delete(OUTPUT);

        using var doc = WordprocessingDocument.Create(OUTPUT, WordprocessingDocumentType.Document);
        var mainPart = doc.AddMainDocumentPart();
        mainPart.Document = new Document();
        var body = mainPart.Document.AppendChild(new Body());

        // 添加样式
        AddStyles(mainPart);

        // 添加页面设置
        SetupPage(mainPart);

        // 添加页眉页脚
        AddHeaderFooter(mainPart);

        // ===== 1. 封面 =====
        BuildCover(body);
        NewPage(body);

        // ===== 2. 课程地图 + 使用说明 =====
        BuildCourseMap(body);
        NewPage(body);

        // ===== 3. 课前准备 =====
        BuildPrep(body);
        NewPage(body);

        // ===== 4. 开场：八个失效场景 =====
        BuildOpeningScenes(body);
        NewPage(body);

        // ===== 5. Part 1 工作空间 =====
        BuildPart1(body);
        NewPage(body);

        // ===== 6. Part 2 工作空间 =====
        BuildPart2(body);
        NewPage(body);

        // ===== 7. Part 3 工作空间 =====
        BuildPart3(body);
        NewPage(body);

        // ===== 8. 下次面谈准备清单（核心4区） =====
        BuildChecklist(body);
        NewPage(body);

        // ===== 9. 工具索引 =====
        BuildToolIndex(body);
        NewPage(body);

        // ===== 10. 附录 A：动作清单 =====
        BuildActionsAppendix(body);
        NewPage(body);

        // ===== 11. 附录 B：话术对比 =====
        BuildScriptCompareAppendix(body);
        NewPage(body);

        // ===== 12. 封底 =====
        BuildBackCover(body);

        // 主体部分 sectPr
        body.AppendChild(MakeFinalSectPr());

        mainPart.Document.Save();
        Console.WriteLine($"OK -> {OUTPUT}");
    }

    // ============================================================
    // 样式
    // ============================================================
    static void AddStyles(MainDocumentPart mainPart)
    {
        var stylePart = mainPart.AddNewPart<StyleDefinitionsPart>();
        var styles = new Styles();

        // 文档默认：宋体/微软雅黑
        styles.Append(new DocDefaults(
            new RunPropertiesDefault(
                new RunPropertiesBaseStyle(
                    new RunFonts { Ascii = "Calibri", HighAnsi = "Calibri", EastAsia = "Microsoft YaHei", ComplexScript = "Calibri" },
                    new FontSize { Val = "21" }, // 10.5pt
                    new FontSizeComplexScript { Val = "21" },
                    new Languages { Val = "zh-CN" }
                )
            ),
            new ParagraphPropertiesDefault(
                new ParagraphPropertiesBaseStyle(
                    new SpacingBetweenLines { After = "100", Line = "360", LineRule = LineSpacingRuleValues.Auto }
                )
            )
        ));

        // 标题1（章节）
        styles.Append(MakeHeadingStyle("Heading1", "Heading 1", "1", 0, 36, CLR_PRIMARY, true, "Microsoft YaHei"));
        // 标题2（小节）
        styles.Append(MakeHeadingStyle("Heading2", "Heading 2", "2", 1, 28, CLR_PRIMARY_L, true, "Microsoft YaHei"));
        // 标题3（子小节）
        styles.Append(MakeHeadingStyle("Heading3", "Heading 3", "3", 2, 24, CLR_TEXT_DARK, true, "Microsoft YaHei"));
        // 标题4
        styles.Append(MakeHeadingStyle("Heading4", "Heading 4", "4", 3, 22, CLR_TEXT_GREY, true, "Microsoft YaHei"));

        // 填空行样式
        styles.Append(new Style(
            new StyleName { Val = "Fill Line" },
            new BasedOn { Val = "Normal" },
            new UIPriority { Val = 1 },
            new StyleParagraphProperties(
                new SpacingBetweenLines { Before = "120", After = "120", Line = "480", LineRule = LineSpacingRuleValues.Auto }
            ),
            new StyleRunProperties(
                new RunFonts { Ascii = "Calibri", HighAnsi = "Calibri", EastAsia = "Microsoft YaHei" },
                new FontSize { Val = "22" }
            )
        ) { Type = StyleValues.Paragraph, StyleId = "FillLine" });

        // 标签样式（小标题/分组标签）
        styles.Append(new Style(
            new StyleName { Val = "Tag" },
            new BasedOn { Val = "Normal" },
            new UIPriority { Val = 1 },
            new StyleParagraphProperties(
                new SpacingBetweenLines { Before = "60", After = "60" }
            ),
            new StyleRunProperties(
                new RunFonts { Ascii = "Calibri", HighAnsi = "Calibri", EastAsia = "Microsoft YaHei" },
                new Bold(),
                new BoldComplexScript(),
                new Color { Val = CLR_PRIMARY_L },
                new FontSize { Val = "20" }
            )
        ) { Type = StyleValues.Paragraph, StyleId = "Tag" });

        // 引用样式
        styles.Append(new Style(
            new StyleName { Val = "Quote" },
            new BasedOn { Val = "Normal" },
            new UIPriority { Val = 1 },
            new StyleParagraphProperties(
                new Indentation { Left = "400", Right = "400" },
                new SpacingBetweenLines { Before = "120", After = "120" }
            ),
            new StyleRunProperties(
                new RunFonts { Ascii = "Calibri", HighAnsi = "Calibri", EastAsia = "Microsoft YaHei" },
                new Italic(),
                new ItalicComplexScript(),
                new Color { Val = CLR_TEXT_GREY }
            )
        ) { Type = StyleValues.Paragraph, StyleId = "Quote" });

        // 封面大标题
        styles.Append(new Style(
            new StyleName { Val = "Cover Title" },
            new BasedOn { Val = "Normal" },
            new UIPriority { Val = 1 },
            new StyleParagraphProperties(
                new SpacingBetweenLines { Before = "0", After = "240" },
                new Justification { Val = JustificationValues.Center }
            ),
            new StyleRunProperties(
                new RunFonts { Ascii = "Calibri", HighAnsi = "Calibri", EastAsia = "Microsoft YaHei" },
                new Bold(),
                new BoldComplexScript(),
                new Color { Val = CLR_PRIMARY },
                new FontSize { Val = "72" }
            )
        ) { Type = StyleValues.Paragraph, StyleId = "CoverTitle" });

        stylePart.Styles = styles;
        stylePart.Styles.Save();
    }

    static Style MakeHeadingStyle(string id, string name, string linkId, int outlineLvl, int halfPt, string color, bool bold, string eastAsia)
    {
        return new Style(
            new StyleName { Val = name },
            new BasedOn { Val = "Normal" },
            new NextParagraphStyle { Val = "Normal" },
            new UIPriority { Val = 9 },
            new StyleParagraphProperties(
                new KeepNext(),
                new KeepLines(),
                new SpacingBetweenLines { Before = "240", After = "120", Line = "360", LineRule = LineSpacingRuleValues.Auto },
                new OutlineLevel { Val = outlineLvl }
            ),
            new StyleRunProperties(
                new RunFonts { Ascii = "Calibri", HighAnsi = "Calibri", EastAsia = eastAsia, ComplexScript = "Calibri" },
                bold ? new Bold() : null,
                bold ? new BoldComplexScript() : null,
                new Color { Val = color },
                new FontSize { Val = halfPt.ToString() }
            )
        ) { Type = StyleValues.Paragraph, StyleId = id };
    }

    // ============================================================
    // 页面与节
    // ============================================================
    static void SetupPage(MainDocumentPart mainPart)
    {
        var sectPr = mainPart.Document.AppendChild(new SectionProperties(
            new PageSize { Width = A4_WIDTH, Height = A4_HEIGHT, Orient = PageOrientationValues.Portrait },
            new PageMargin { Top = 1134, Right = 1134, Bottom = 1134, Left = 1134, Header = 720, Footer = 720, Gutter = 0 },
            new Columns { Space = "720" },
            new DocGrid { Type = DocGridValues.Lines, LinePitch = 312 }
        ));
        // 注意：这里临时挂着，最终节属性会替换
    }

    static void AddHeaderFooter(MainDocumentPart mainPart)
    {
        // 页眉
        var headerPart = mainPart.AddNewPart<HeaderPart>();
        var header = new Header();
        var hp = new Paragraph();
        hp.Append(MakeRun("学员手册  ·  AI 时代的绩效面谈与能力发展", 18, CLR_PRIMARY_L, true));
        hp.Append(new Run(new TabChar()));
        hp.Append(MakeRun("罗宏伟", 18, CLR_TEXT_GREY, false));
        // 右侧 tab
        var hppr = hp.PrependChild(new ParagraphProperties());
        hppr.Append(new Tabs(new TabStop { Val = TabStopValues.Right, Position = 9000 }));
        hppr.Append(new ParagraphBorders(new BottomBorder { Val = BorderValues.Single, Color = CLR_BORDER, Size = 6 }));
        header.Append(hp);
        headerPart.Header = header;
        headerPart.Header.Save();

        // 页脚（页码）
        var footerPart = mainPart.AddNewPart<FooterPart>();
        var footer = new Footer();
        var fp = new Paragraph();
        var fppr = fp.AppendChild(new ParagraphProperties());
        fppr.Append(new Justification { Val = JustificationValues.Center });
        fppr.Append(new ParagraphBorders(new TopBorder { Val = BorderValues.Single, Color = CLR_BORDER, Size = 6 }));
        fp.Append(new Run(new FieldChar { FieldCharType = FieldCharValues.Begin }));
        fp.Append(new Run(new FieldCode("PAGE \\* MERGEFORMAT")));
        fp.Append(new Run(new FieldChar { FieldCharType = FieldCharValues.End }));
        fp.Append(MakeRun(" / ", 18, CLR_TEXT_GREY, false));
        fp.Append(new Run(new FieldChar { FieldCharType = FieldCharValues.Begin }));
        fp.Append(new Run(new FieldCode("NUMPAGES \\* MERGEFORMAT")));
        fp.Append(new Run(new FieldChar { FieldCharType = FieldCharValues.End }));
        footer.Append(fp);
        footerPart.Footer = footer;
        footerPart.Footer.Save();
    }

    static SectionProperties MakeFinalSectPr()
    {
        return new SectionProperties(
            new HeaderReference { Type = HeaderFooterValues.Default, Id = "rIdHeader1" },
            new FooterReference { Type = HeaderFooterValues.Default, Id = "rIdFooter1" },
            new PageSize { Width = A4_WIDTH, Height = A4_HEIGHT, Orient = PageOrientationValues.Portrait },
            new PageMargin { Top = 1134, Right = 1134, Bottom = 1134, Left = 1134, Header = 720, Footer = 720, Gutter = 0 },
            new Columns { Space = "720" },
            new DocGrid { Type = DocGridValues.Lines, LinePitch = 312 }
        );
    }

    // ============================================================
    // 基础构件
    // ============================================================
    static Run MakeRun(string text, int halfPt = 21, string color = null, bool bold = false)
    {
        var r = new Run();
        var rpr = new RunProperties();
        rpr.Append(new RunFonts { Ascii = "Calibri", HighAnsi = "Calibri", EastAsia = "Microsoft YaHei", ComplexScript = "Calibri" });
        rpr.Append(new FontSize { Val = halfPt.ToString() });
        rpr.Append(new FontSizeComplexScript { Val = halfPt.ToString() });
        if (color != null) rpr.Append(new Color { Val = color });
        if (bold) { rpr.Append(new Bold()); rpr.Append(new BoldComplexScript()); }
        r.Append(rpr);
        r.Append(new Text(text) { Space = SpaceProcessingModeValues.Preserve });
        return r;
    }

    static Paragraph P(string text, string style = null, int halfPt = 21, string color = null, bool bold = false, JustificationValues? align = null)
    {
        var p = new Paragraph();
        var ppr = new ParagraphProperties();
        if (style != null) ppr.Append(new ParagraphStyleId { Val = style });
        if (align.HasValue) ppr.Append(new Justification { Val = align.Value });
        p.Append(ppr);
        p.Append(MakeRun(text, halfPt, color, bold));
        return p;
    }

    static Paragraph PEmpty(double heightPt = 24)
    {
        var p = new Paragraph();
        var ppr = new ParagraphProperties();
        ppr.Append(new SpacingBetweenLines { Before = "0", After = "0", Line = (heightPt * 20).ToString(), LineRule = LineSpacingRuleValues.Exact });
        p.Append(ppr);
        return p;
    }

    static Paragraph Heading(string text, int level, string color = null)
    {
        var styleId = "Heading" + level;
        var p = new Paragraph();
        var ppr = new ParagraphProperties();
        ppr.Append(new ParagraphStyleId { Val = styleId });
        p.Append(ppr);
        p.Append(MakeRun(text, level == 1 ? 36 : (level == 2 ? 28 : (level == 3 ? 24 : 22)), color, true));
        return p;
    }

    static void NewPage(Body body)
    {
        var p = new Paragraph();
        var r = new Run(new Break { Type = BreakValues.Page });
        p.Append(r);
        body.Append(p);
    }

    // 水平分隔线
    static Paragraph HRule(string color = null)
    {
        var p = new Paragraph();
        var ppr = new ParagraphProperties();
        ppr.Append(new ParagraphBorders(new BottomBorder { Val = BorderValues.Single, Color = color ?? CLR_BORDER, Size = 8 }));
        p.Append(ppr);
        return p;
    }

    // 填空行（带下划线）
    static Paragraph FillLine(double lineHeightPt = 28, string indent = "")
    {
        var p = new Paragraph();
        var ppr = new ParagraphProperties();
        ppr.Append(new ParagraphStyleId { Val = "FillLine" });
        ppr.Append(new SpacingBetweenLines { Before = "60", After = "60", Line = (lineHeightPt * 20).ToString(), LineRule = LineSpacingRuleValues.Exact });
        p.Append(ppr);
        // 内容：空白 + 底边线（用 paragraph border 实现）
        return p;
    }

    // 标签块
    static Paragraph TagBlock(string label, string bgColor)
    {
        var p = new Paragraph();
        var ppr = new ParagraphProperties();
        ppr.Append(new Shading { Val = ShadingPatternValues.Clear, Color = "auto", Fill = bgColor });
        ppr.Append(new SpacingBetweenLines { Before = "100", After = "100" });
        ppr.Append(new Indentation { Left = "120", Right = "120" });
        p.Append(ppr);
        p.Append(MakeRun(label, 22, CLR_PRIMARY, true));
        return p;
    }

    // 提示卡片（色块背景）
    static Table CardBlock(string title, List<string> paragraphs, string bgColor, string titleColor)
    {
        var tbl = new Table();
        var tblPr = new TableProperties();
        tblPr.Append(new TableStyle { Val = "TableNormal" });
        tblPr.Append(new TableWidth { Type = TableWidthUnitValues.Pct, Width = "5000" });
        tblPr.Append(new TableBorders(
            new TopBorder { Val = BorderValues.Single, Color = titleColor, Size = 8 },
            new BottomBorder { Val = BorderValues.Single, Color = titleColor, Size = 8 },
            new LeftBorder { Val = BorderValues.Single, Color = titleColor, Size = 8 },
            new RightBorder { Val = BorderValues.Single, Color = titleColor, Size = 8 }
        ));
        tblPr.Append(new TableCellMarginDefault(
            new TopMargin { Width = "120", Type = TableWidthUnitValues.Dxa },
            new BottomMargin { Width = "120", Type = TableWidthUnitValues.Dxa },
            new LeftMargin { Width = "200", Type = TableWidthUnitValues.Dxa },
            new RightMargin { Width = "200", Type = TableWidthUnitValues.Dxa }
        ));
        tbl.Append(tblPr);
        tbl.Append(new TableGrid(new GridColumn { Width = "9500" }));

        var tr = new TableRow();
        var tc = new TableCell();
        var tcpr = new TableCellProperties();
        tcpr.Append(new Shading { Val = ShadingPatternValues.Clear, Color = "auto", Fill = bgColor });
        tcpr.Append(new TableCellWidth { Type = TableWidthUnitValues.Pct, Width = "5000" });
        tc.Append(tcpr);

        if (!string.IsNullOrEmpty(title))
            tc.Append(P(title, null, 24, titleColor, true));

        foreach (var s in paragraphs)
        {
            tc.Append(P(s, null, 21, CLR_TEXT_DARK, false));
        }
        tr.Append(tc);
        tbl.Append(tr);
        return tbl;
    }

    // 通用内容表（带标题色块）
    static Table SimpleTable(List<(string hdr, string color)> headers, List<List<string>> rows, List<int> colWidthsPct = null)
    {
        var tbl = new Table();
        var tblPr = new TableProperties();
        tblPr.Append(new TableStyle { Val = "TableNormal" });
        tblPr.Append(new TableWidth { Type = TableWidthUnitValues.Pct, Width = "5000" });
        tblPr.Append(new TableBorders(
            new TopBorder { Val = BorderValues.Single, Color = CLR_BORDER, Size = 6 },
            new BottomBorder { Val = BorderValues.Single, Color = CLR_BORDER, Size = 6 },
            new LeftBorder { Val = BorderValues.Single, Color = CLR_BORDER, Size = 6 },
            new RightBorder { Val = BorderValues.Single, Color = CLR_BORDER, Size = 6 },
            new InsideHorizontalBorder { Val = BorderValues.Single, Color = CLR_BORDER, Size = 4 },
            new InsideVerticalBorder { Val = BorderValues.Single, Color = CLR_BORDER, Size = 4 }
        ));
        tblPr.Append(new TableCellMarginDefault(
            new TopMargin { Width = "80", Type = TableWidthUnitValues.Dxa },
            new BottomMargin { Width = "80", Type = TableWidthUnitValues.Dxa },
            new LeftMargin { Width = "120", Type = TableWidthUnitValues.Dxa },
            new RightMargin { Width = "120", Type = TableWidthUnitValues.Dxa }
        ));
        tbl.Append(tblPr);

        int n = headers.Count;
        var grid = new TableGrid();
        var colPcts = colWidthsPct ?? Enumerable.Range(0, n).Select(i => 5000 / n).ToList();
        foreach (var w in colPcts) grid.Append(new GridColumn { Width = (w * 9500 / 5000).ToString() });
        tbl.Append(grid);

        // 表头
        var hr = new TableRow();
        var hrpr = new TableRowProperties();
        hrpr.Append(new TableHeader());
        hr.Append(hrpr);
        for (int i = 0; i < n; i++)
        {
            var hc = new TableCell();
            var hcpr = new TableCellProperties();
            hcpr.Append(new Shading { Val = ShadingPatternValues.Clear, Color = "auto", Fill = headers[i].color });
            hcpr.Append(new TableCellWidth { Type = TableWidthUnitValues.Pct, Width = colPcts[i].ToString() });
            hc.Append(hcpr);
            hc.Append(P(headers[i].hdr, null, 22, "FFFFFF", true));
            hr.Append(hc);
        }
        tbl.Append(hr);

        // 行
        foreach (var row in rows)
        {
            var tr = new TableRow();
            for (int i = 0; i < n; i++)
            {
                var rc = new TableCell();
                var rcpr = new TableCellProperties();
                rcpr.Append(new TableCellWidth { Type = TableWidthUnitValues.Pct, Width = colPcts[i].ToString() });
                rc.Append(rcpr);
                rc.Append(P(row[i], null, 21, CLR_TEXT_DARK, false));
                tr.Append(rc);
            }
            tbl.Append(tr);
        }
        return tbl;
    }

    // 填空格行（带下划线）- 多个并排
    static Table FillRow(List<string> labels, List<string> underlines, string bgColor = null)
    {
        var tbl = new Table();
        var tblPr = new TableProperties();
        tblPr.Append(new TableWidth { Type = TableWidthUnitValues.Pct, Width = "5000" });
        tblPr.Append(new TableBorders(
            new BottomBorder { Val = BorderValues.Single, Color = CLR_BORDER, Size = 4 }
        ));
        tblPr.Append(new TableCellMarginDefault(
            new TopMargin { Width = "60", Type = TableWidthUnitValues.Dxa },
            new BottomMargin { Width = "60", Type = TableWidthUnitValues.Dxa },
            new LeftMargin { Width = "60", Type = TableWidthUnitValues.Dxa },
            new RightMargin { Width = "60", Type = TableWidthUnitValues.Dxa }
        ));
        tbl.Append(tblPr);
        int n = labels.Count;
        var grid = new TableGrid();
        var w = 9500 / n;
        for (int i = 0; i < n; i++) grid.Append(new GridColumn { Width = w.ToString() });
        tbl.Append(grid);

        var tr = new TableRow();
        var trpr = new TableRowProperties();
        trpr.Append(new TableRowHeight { Val = (UInt32Value)900u, HeightType = HeightRuleValues.AtLeast });
        tr.Append(trpr);
        for (int i = 0; i < n; i++)
        {
            var tc = new TableCell();
            var tcpr = new TableCellProperties();
            tcpr.Append(new TableCellWidth { Type = TableWidthUnitValues.Pct, Width = (5000 / n).ToString() });
            tc.Append(tcpr);
            var pp = new Paragraph();
            var pppr = new ParagraphProperties();
            pppr.Append(new SpacingBetweenLines { Before = "0", After = "0", Line = "600", LineRule = LineSpacingRuleValues.Exact });
            pp.Append(pppr);
            if (!string.IsNullOrEmpty(labels[i]))
            {
                pp.Append(MakeRun(labels[i] + "：", 20, CLR_TEXT_GREY, true));
            }
            pp.Append(MakeRun(" " + underlines[i], 20, CLR_TEXT_DARK, false));
            tc.Append(pp);
            tr.Append(tc);
        }
        tbl.Append(tr);
        return tbl;
    }

    // 留白填空行（多行）
    static IEnumerable<OpenXmlElement> FillLines(int n = 4, double linePt = 28)
    {
        for (int i = 0; i < n; i++)
        {
            yield return FillLine(linePt);
        }
    }

    // 提示框（带 emoji 风格图标）
    static Table TipBox(string icon, string title, string body, string bg, string titleClr)
    {
        var tbl = new Table();
        var tblPr = new TableProperties();
        tblPr.Append(new TableWidth { Type = TableWidthUnitValues.Pct, Width = "5000" });
        tblPr.Append(new TableBorders(
            new LeftBorder { Val = BorderValues.Thick, Color = titleClr, Size = 24 },
            new TopBorder { Val = BorderValues.Single, Color = CLR_BORDER, Size = 4 },
            new BottomBorder { Val = BorderValues.Single, Color = CLR_BORDER, Size = 4 },
            new RightBorder { Val = BorderValues.Single, Color = CLR_BORDER, Size = 4 }
        ));
        tblPr.Append(new TableCellMarginDefault(
            new TopMargin { Width = "120", Type = TableWidthUnitValues.Dxa },
            new BottomMargin { Width = "120", Type = TableWidthUnitValues.Dxa },
            new LeftMargin { Width = "240", Type = TableWidthUnitValues.Dxa },
            new RightMargin { Width = "200", Type = TableWidthUnitValues.Dxa }
        ));
        tbl.Append(tblPr);
        tbl.Append(new TableGrid(new GridColumn { Width = "9500" }));

        var tr = new TableRow();
        var tc = new TableCell();
        var tcpr = new TableCellProperties();
        tcpr.Append(new Shading { Val = ShadingPatternValues.Clear, Color = "auto", Fill = bg });
        tcpr.Append(new TableCellWidth { Type = TableWidthUnitValues.Pct, Width = "5000" });
        tc.Append(tcpr);

        var p1 = new Paragraph();
        p1.Append(MakeRun($"{icon}  {title}", 22, titleClr, true));
        tc.Append(p1);

        if (!string.IsNullOrEmpty(body))
        {
            var p2 = new Paragraph();
            p2.Append(MakeRun(body, 21, CLR_TEXT_DARK, false));
            tc.Append(p2);
        }

        tr.Append(tc);
        tbl.Append(tr);
        return tbl;
    }

    // ============================================================
    // 1. 封面
    // ============================================================
    static void BuildCover(Body body)
    {
        // 顶部留白
        for (int i = 0; i < 3; i++) body.Append(PEmpty(40));

        // 主标题
        body.Append(P("对话驱动", "CoverTitle"));
        body.Append(P("AI 时代的绩效面谈与能力发展", null, 56, CLR_PRIMARY, true, JustificationValues.Center));
        body.Append(PEmpty(20));
        body.Append(P("学员手册", null, 36, CLR_PRIMARY_L, true, JustificationValues.Center));

        body.Append(PEmpty(40));
        body.Append(HRule(CLR_PRIMARY));
        body.Append(PEmpty(20));

        // 课程价值主张
        body.Append(P("这本手册，是你今天的工作空间。", null, 28, CLR_TEXT_DARK, true, JustificationValues.Center));
        body.Append(P("不是讲义，是你的分析对象、你的四步法、你的话术、你的下次面谈计划。", null, 24, CLR_TEXT_GREY, false, JustificationValues.Center));
        body.Append(PEmpty(40));

        // 信息填写区
        body.Append(SimpleTable(
            new List<(string, string)> {
                ("姓    名", CLR_PRIMARY),
                ("所在部门/团队", CLR_PRIMARY_L),
                ("课程日期", CLR_ACCENT),
                ("分析对象（员工代号）", "16A085"),
                ("问责伙伴（下午填）", "8E44AD")
            },
            new List<List<string>> { new() { "____________", "____________", "____________", "____________", "____________" } },
            new List<int> { 1500, 1500, 1000, 2000, 1500 }
        ));

        body.Append(PEmpty(40));
        body.Append(HRule(CLR_BORDER));
        body.Append(PEmpty(20));

        // 底部信息
        body.Append(P("开发者：罗宏伟", null, 24, CLR_PRIMARY, true, JustificationValues.Center));
        body.Append(P("竞越课程  ·  绩效管理和绩效面谈：通过绩效面谈让员工更加胜任", null, 22, CLR_TEXT_GREY, false, JustificationValues.Center));
    }

    // ============================================================
    // 2. 课程地图 + 使用说明
    // ============================================================
    static void BuildCourseMap(Body body)
    {
        body.Append(Heading("课程地图", 1, CLR_PRIMARY));
        body.Append(P("今天你要走过的四个工作空间，对应一个完整的绩效面谈周期。", null, 22, CLR_TEXT_GREY, false));
        body.Append(PEmpty(20));

        // 四个工作空间 - 表格卡片
        body.Append(SimpleTable(
            new List<(string, string)> {
                ("工作空间", CLR_PRIMARY),
                ("主要内容", CLR_BG_PEACH)
            },
            new List<List<string>> {
                new() { "上午 · 开场 + Part 1", "识别 8 个失效场景，认清自己最怕哪一种  ·  建立四步面谈法，演练共看事实 + 探寻归因" },
                new() { "下午上 · Part 2", "练习说真话：正面·全面·情面·事面  ·  识别 AI 时代 5 类新场景及处理方法" },
                new() { "下午下 · Part 3", "区分评估面谈 vs 发展面谈  ·  应用双轨胜任度框架分析员工" },
                new() { "临走前 · 下次面谈清单", "把今天的方法转化为你下次面谈的具体准备  ·  找到你的问责伙伴，约定 30 天后的跟进" }
            },
            new List<int> { 1800, 3200 }
        ));

        body.Append(PEmpty(30));
        body.Append(Heading("使用说明", 2));
        body.Append(CardBlock("这本手册是工作空间，不是讲义",
            new List<string> {
                "内容框架在现场讲解，这里是你记录真实洞见、完成演练、规划下一步的空间。",
                "每个填空区都是为你的真实分析对象设计的。越具体，越能在现场用上。",
                "重要提醒：P39-42 的「下次面谈准备清单」，是今天课程对你下周工作最直接有价值的产出。"
            },
            CLR_BG_PEACH, CLR_PRIMARY_L));

        body.Append(PEmpty(20));
        body.Append(TipBox("★", "使用建议",
            "1) 课前先在「课前准备」写下你带来的一个困境  2) 演练时直接用手册上的表格记笔记  3) 临走前 25 分钟认真完成「下次面谈准备清单」",
            CLR_BG_MINT, "16A085"));
    }

    // ============================================================
    // 3. 课前准备
    // ============================================================
    static void BuildPrep(Body body)
    {
        body.Append(Heading("课前准备", 1, CLR_PRIMARY));
        body.Append(P("进入课堂前，请在脑子里准备两件事：", null, 22, CLR_TEXT_DARK, false));
        body.Append(PEmpty(10));

        body.Append(TagBlock("你的分析对象", CLR_BG_PEACH));
        body.Append(P("一名你即将（或应该）进行绩效面谈的员工，或一名你在绩效面谈上感到困难的员工。", null, 22, CLR_TEXT_DARK, false));
        body.Append(P("请用代号，不用实名：__________________________", null, 22, CLR_PRIMARY, true));
        body.Append(PEmpty(15));

        body.Append(TagBlock("你带来的一个困境", CLR_BG_SKY));
        body.Append(P("在绩效面谈上，你最真实的困难是什么？用一句话写下来：", null, 22, CLR_TEXT_DARK, false));
        body.Append(PEmpty(10));
        foreach (var el in FillLines(4, 28)) body.Append(el);

        body.Append(PEmpty(20));
        body.Append(TipBox("◇", "为什么这两个准备重要？",
            "今天课程的每一个工具，都要回到你带来的这个分析对象上。如果你只听方法不联系实际，课后你不会有任何改变。",
            CLR_BG_LAV, "8E44AD"));
    }

    // ============================================================
    // 4. 开场：八个失效场景
    // ============================================================
    static void BuildOpeningScenes(Body body)
    {
        body.Append(Heading("开场：八个失效场景", 1, CLR_PRIMARY));
        body.Append(P("我们用一个 30 分钟的活动开始今天。桌上有 8 张场景卡。", null, 22, CLR_TEXT_DARK, false));
        body.Append(P("前 5 张是经典场景，后 3 张（6/7/8）是 AI 时代的新场景。", null, 22, CLR_TEXT_GREY, false));
        body.Append(PEmpty(15));

        // 八个场景速查表
        body.Append(SimpleTable(
            new List<(string, string)> {
                ("卡号", CLR_PRIMARY),
                ("场景关键词", CLR_PRIMARY_L),
                ("失效原因", CLR_ACCENT),
                ("AI 时代", "16A085")
            },
            new List<List<string>> {
                new() { "1", "员工不接受评估结果", "评估依据没共识", "" },
                new() { "2", "员工说「我一直很努力」", "管理者陷入辩解", "" },
                new() { "3", "面谈变成沉默的审判", "员工感觉被定罪", "" },
                new() { "4", "员工说「这不是我的问题」", "归因错位，归到外部", "" },
                new() { "5", "面谈后什么都没改变", "行动清单无人跟进", "" },
                new() { "6", "员工：「这个成果是 AI 做的」", "归因模糊，分不清人机贡献", "新" },
                new() { "7", "员工：「我不知道自己的价值」", "方向迷失，AI 时代新型迷茫", "新" },
                new() { "8", "员工产出远高于可观察的判断", "能力与产出漂移", "新" }
            },
            new List<int> { 800, 2400, 2400, 1900 }
        ));

        body.Append(PEmpty(25));
        body.Append(Heading("我的场景卡识别记录", 2));

        body.Append(P("我「经历过」的场景是（卡号）：____________________", null, 24, CLR_PRIMARY, true));
        body.Append(P("我「最怕遇到」的场景是（卡号）：____________________", null, 24, CLR_PRIMARY_L, true));
        body.Append(PEmpty(10));
        body.Append(P("这两张卡，我能想到的真实背景是：", null, 22, CLR_TEXT_DARK, false));
        foreach (var el in FillLines(4, 30)) body.Append(el);

        body.Append(PEmpty(20));
        body.Append(Heading("AI 时代的三个新场景（第 6、7、8 张）", 3));
        body.Append(P("在我的工作环境里，这三类新情境出现的频率：", null, 22, CLR_TEXT_DARK, false));
        body.Append(PEmpty(10));

        body.Append(SimpleTable(
            new List<(string, string)> {
                ("频率", CLR_PRIMARY),
                ("我的真实情况（打勾或简注）", CLR_BG_PEACH)
            },
            new List<List<string>> {
                new() { "□ 经常出现，已经头疼", "_____________________________" },
                new() { "□ 偶尔出现，还没找到方法", "_____________________________" },
                new() { "□ 目前不多，但感觉要来了", "_____________________________" },
                new() { "□ 暂时没有，但今天想先有准备", "_____________________________" }
            },
            new List<int> { 2500, 5000 }
        ));
    }

    // ============================================================
    // 5. Part 1 工作空间
    // ============================================================
    static void BuildPart1(Body body)
    {
        body.Append(Heading("Part 1  ·  面谈的价值与四步面谈法", 1, CLR_PRIMARY));
        body.Append(P("本节目标：建立评估面谈的完整操作框架——四步面谈法。", null, 22, CLR_TEXT_GREY, false));
        body.Append(PEmpty(15));

        // 1.1 面谈的真实价值
        body.Append(Heading("1.1  面谈的真实价值（我的笔记）", 2));
        body.Append(TagBlock("对你而言", CLR_BG_PEACH));
        body.Append(P("面谈对管理者真正的价值（不是 HR 的要求）：", null, 22, CLR_TEXT_DARK, true));
        foreach (var el in FillLines(3, 30)) body.Append(el);
        body.Append(PEmpty(10));
        body.Append(TagBlock("做好面谈的五个前提条件", CLR_BG_SKY));
        body.Append(P("1. ____________________________________________________", null, 22, CLR_TEXT_DARK, false));
        body.Append(P("2. ____________________________________________________", null, 22, CLR_TEXT_DARK, false));
        body.Append(P("3. ____________________________________________________", null, 22, CLR_TEXT_DARK, false));
        body.Append(P("4. ____________________________________________________", null, 22, CLR_TEXT_DARK, false));
        body.Append(P("5. AI 时代新增——归因清晰：_____________________________", null, 22, CLR_PRIMARY, true));
        body.Append(PEmpty(20));

        // 1.2 四步面谈法
        body.Append(Heading("1.2  四步面谈法", 2));
        body.Append(P("四步法的逻辑是：先让事实立稳，再让归因清晰，再让缺口可见，最后共建方向。", null, 22, CLR_TEXT_GREY, false));
        body.Append(PEmpty(15));

        AddStepBlock(body, "第一步", "共看事实", CLR_PRIMARY,
            new List<string> { "含义：______________________________", "起手话术（我的版本）：______________________________" });

        AddStepBlock(body, "第二步", "探寻归因", CLR_PRIMARY_L,
            new List<string> { "含义：______________________________", "参考问题（选一个你会用的）：______________________________", "这一步为什么在 AI 时代特别重要：______________________________" });

        AddStepBlock(body, "第三步", "分析缺口", CLR_ACCENT,
            new List<string> { "含义：______________________________", "三个缺口层次：______________________________", "AI 时代新增的第四层缺口类型：______________________________" });

        AddStepBlock(body, "第四步", "共建方向", "16A085",
            new List<string> { "含义：______________________________", "起手问题（我的版本）：______________________________" });

        body.Append(PEmpty(15));
        body.Append(Heading("1.3  配对演练记录（骨架练习）", 2));

        body.Append(TagBlock("第一轮（重点练习第一步和第二步）", CLR_BG_PEACH));
        body.Append(P("我扮演的角色：  □  管理者     □  员工", null, 22, CLR_TEXT_DARK, true));
        body.Append(P("最难做到的是：", null, 22, CLR_TEXT_DARK, false));
        foreach (var el in FillLines(2, 28)) body.Append(el);
        body.Append(P("伙伴给我的反馈：", null, 22, CLR_TEXT_DARK, false));
        foreach (var el in FillLines(2, 28)) body.Append(el);
        body.Append(PEmpty(15));

        body.Append(TagBlock("第二轮（四步都走一遍）", CLR_BG_SKY));
        body.Append(P("我扮演的角色：  □  管理者     □  员工", null, 22, CLR_TEXT_DARK, true));
        body.Append(P("第二步（探寻归因）里，我用的问题是：", null, 22, CLR_TEXT_DARK, false));
        foreach (var el in FillLines(2, 28)) body.Append(el);
        body.Append(P("员工角色的反应是：", null, 22, CLR_TEXT_DARK, false));
        foreach (var el in FillLines(2, 28)) body.Append(el);
        body.Append(PEmpty(15));

        body.Append(TagBlock("第三轮（AI 归因情境，如有时间）", CLR_BG_LAV));
        body.Append(P("我注意到在这个场景里，探寻归因的问题，员工的反应是：", null, 22, CLR_TEXT_DARK, false));
        foreach (var el in FillLines(3, 30)) body.Append(el);

        body.Append(PEmpty(20));
        body.Append(Heading("1.4  全班复盘洞见", 2));
        body.Append(TagBlock("从演练里，我最大的发现是", CLR_BG_MINT));
        foreach (var el in FillLines(2, 30)) body.Append(el);
        body.Append(PEmpty(10));
        body.Append(TagBlock("探寻归因这一步，对我来说最难的地方是", CLR_BG_PEACH));
        foreach (var el in FillLines(2, 30)) body.Append(el);
    }

    static void AddStepBlock(Body body, string step, string title, string color, List<string> fillItems)
    {
        body.Append(TagBlock($"{step}  ·  {title}", CLR_BG_PEACH));
        var ppr = body.LastChild as Paragraph;
        if (ppr != null) {
            var pprPr = ppr.GetFirstChild<ParagraphProperties>();
            // 调整色
        }
        foreach (var item in fillItems)
        {
            body.Append(P(item, null, 22, CLR_TEXT_DARK, false));
            // 填空空间
            body.Append(P("________________________________________________________________", null, 22, CLR_PRIMARY, false));
        }
        body.Append(PEmpty(10));
    }

    // ============================================================
    // 6. Part 2 工作空间
    // ============================================================
    static void BuildPart2(Body body)
    {
        body.Append(Heading("Part 2  ·  艰难面谈：说真话的技术", 1, CLR_PRIMARY));
        body.Append(P("本节目标：识别说真话时遇到的真正困难，掌握正面·全面·情面·事面四原则。", null, 22, CLR_TEXT_GREY, false));
        body.Append(PEmpty(15));

        // 2.1 三类成因
        body.Append(Heading("2.1  艰难面谈的三类成因", 2));
        body.Append(TagBlock("成因一", CLR_BG_PEACH));
        foreach (var el in FillLines(2, 28)) body.Append(el);
        body.Append(PEmpty(8));
        body.Append(TagBlock("成因二", CLR_BG_SKY));
        foreach (var el in FillLines(2, 28)) body.Append(el);
        body.Append(PEmpty(8));
        body.Append(TagBlock("成因三（AI 时代新增）", CLR_BG_LAV));
        foreach (var el in FillLines(2, 28)) body.Append(el);
        body.Append(PEmpty(15));
        body.Append(TipBox("★", "对我来说，最常遇到的成因是：", "______________________________________________________________", CLR_BG_MINT, "16A085"));

        // 2.2 四原则
        body.Append(PEmpty(15));
        body.Append(Heading("2.2  正面 · 全面 · 情面 · 事面", 2));
        body.Append(P("这四个原则不是选择关系，是同时成立。说真话的人必须同时做到。", null, 22, CLR_TEXT_GREY, false));
        body.Append(PEmpty(15));

        AddPrincipleBlock(body, "正面", "直接说出问题", CLR_PRIMARY,
            new List<string> { "核心要点：______________________________", "话术对比——我认为更有效的说法是 B，区别在于：______________________________" });

        AddPrincipleBlock(body, "全面", "看到整体，不以偏概全", CLR_PRIMARY_L,
            new List<string> { "核心要点：______________________________", "AI 时代「全面」需要额外考虑的：______________________________" });

        AddPrincipleBlock(body, "情面", "照顾情感，保护尊严", CLR_ACCENT,
            new List<string> { "核心要点：______________________________", "AI 时代员工的情感需要特别关注的一类：______________________________" });

        AddPrincipleBlock(body, "事面", "基于可观察的具体事实", "16A085",
            new List<string> { "核心要点：______________________________", "「事面」在 AI 时代包含的归因维度：______________________________" });

        body.Append(PEmpty(15));
        body.Append(TipBox("◇", "我在四原则里最难做到的是：", "______________________________________________________________", CLR_BG_PEACH, CLR_PRIMARY));

        // 2.3 五类场景速查
        body.Append(PEmpty(15));
        body.Append(Heading("2.3  AI 时代五类艰难场景速查", 2));

        AddSceneType(body, "类型 A", "归因抗议型", CLR_PRIMARY,
            "员工说：「这个成果是 AI 工具帮我做的，你这样评不公平。」",
            new List<string> { "处理关键：______________________________", "第一句话参考：______________________________" });

        AddSceneType(body, "类型 B", "方向迷失型", CLR_PRIMARY_L,
            "员工说：「我在 AI 时代感觉不知道自己的价值在哪里。」",
            new List<string> { "处理关键：______________________________", "第一句话参考：______________________________" });

        AddSceneType(body, "类型 C", "漂移识别型", CLR_ACCENT,
            "员工自认为正常，但管理者观察到能力与产出不匹配。",
            new List<string> { "处理关键：______________________________", "关键话术原则：从 __________ 说，不从 __________ 说。" });

        AddSceneType(body, "类型 D", "美化成果型", "16A085",
            "产出质量系统性高于可观察的判断水平。",
            new List<string> { "处理关键：______________________________", "下期对这名员工的要求重点是：______________________________" });

        AddSceneType(body, "类型 E", "AI 品行型", "8E44AD",
            "员工用 AI 规避思考、不加判断就提交，或有诚信边界问题。",
            new List<string> { "处理关键：______________________________", "这类问题为什么不能被软化为技能问题：______________________________" });

        // 2.4 场景讨论活动
        body.Append(PEmpty(15));
        body.Append(Heading("2.4  场景讨论活动记录", 2));
        body.Append(TagBlock("活动 3：五类场景小组讨论", CLR_BG_PEACH));
        body.Append(P("我们桌讨论最热烈的场景类型是：__________ 类型", null, 22, CLR_PRIMARY, true));
        body.Append(P("管理者面对这类场景最大的心理挑战是：", null, 22, CLR_TEXT_DARK, false));
        foreach (var el in FillLines(3, 30)) body.Append(el);

        // 2.5 角色扮演
        body.Append(PEmpty(15));
        body.Append(Heading("2.5  角色扮演记录", 2));

        body.Append(TagBlock("第一轮（经典艰难场景）", CLR_BG_SKY));
        body.Append(P("我扮演的角色：_______________", null, 22, CLR_TEXT_DARK, true));
        body.Append(P("使用了「事面」原则吗？", null, 22, CLR_TEXT_DARK, false));
        foreach (var el in FillLines(2, 28)) body.Append(el);
        body.Append(P("观察者给我最有价值的反馈：", null, 22, CLR_TEXT_DARK, false));
        foreach (var el in FillLines(2, 28)) body.Append(el);
        body.Append(PEmpty(10));

        body.Append(TagBlock("第二轮（AI 时代特有场景）", CLR_BG_LAV));
        body.Append(P("场景类型：__________ 类型", null, 22, CLR_PRIMARY, true));
        body.Append(P("当员工说了那句让我不知道怎么接的话，我的实际反应是：", null, 22, CLR_TEXT_DARK, false));
        foreach (var el in FillLines(2, 28)) body.Append(el);
        body.Append(P("回顾今天学到的方法，更好的回应方式应该是：", null, 22, CLR_TEXT_DARK, false));
        foreach (var el in FillLines(2, 28)) body.Append(el);

        // 2.6 AI 时代品行问题
        body.Append(PEmpty(15));
        body.Append(Heading("2.6  AI 时代品行问题（我的笔记）", 2));
        body.Append(TagBlock("三类 AI 时代新品行问题", CLR_BG_PEACH));
        body.Append(P("一：________________________________________________________", null, 22, CLR_TEXT_DARK, false));
        body.Append(P("二：________________________________________________________", null, 22, CLR_TEXT_DARK, false));
        body.Append(P("三：________________________________________________________", null, 22, CLR_TEXT_DARK, false));
        body.Append(PEmpty(10));
        body.Append(P("这三类问题为什么不能被处理成纯粹的技能提升：", null, 22, CLR_TEXT_DARK, false));
        foreach (var el in FillLines(3, 30)) body.Append(el);
    }

    static void AddPrincipleBlock(Body body, string name, string subtitle, string color, List<string> fills)
    {
        body.Append(TagBlock($"{name}  ·  {subtitle}", CLR_BG_PEACH));
        foreach (var s in fills)
        {
            body.Append(P(s, null, 22, CLR_TEXT_DARK, false));
            body.Append(P("________________________________________________________________", null, 22, color, false));
        }
        body.Append(PEmpty(8));
    }

    static void AddSceneType(Body body, string label, string name, string color, string quote, List<string> fills)
    {
        body.Append(TagBlock($"{label}  ·  {name}", CLR_BG_SKY));
        var p = new Paragraph();
        p.Append(MakeRun(quote, 22, CLR_PRIMARY, true));
        body.Append(p);
        foreach (var s in fills)
        {
            body.Append(P(s, null, 22, CLR_TEXT_DARK, false));
            body.Append(P("________________________________________________________________", null, 22, color, false));
        }
        body.Append(PEmpty(8));
    }

    // ============================================================
    // 7. Part 3 工作空间
    // ============================================================
    static void BuildPart3(Body body)
    {
        body.Append(Heading("Part 3  ·  发展面谈与双轨成长", 1, CLR_PRIMARY));
        body.Append(P("本节目标：区分评估面谈 vs 发展面谈，用双轨胜任度框架分析员工发展需要。", null, 22, CLR_TEXT_GREY, false));
        body.Append(PEmpty(15));

        // 3.1 评估 vs 发展
        body.Append(Heading("3.1  发展面谈 vs 评估面谈（我的理解）", 2));

        body.Append(SimpleTable(
            new List<(string, string)> {
                ("维度", CLR_PRIMARY),
                ("评估面谈", CLR_PRIMARY_L),
                ("发展面谈", CLR_ACCENT)
            },
            new List<List<string>> {
                new() { "时态", "______________________________", "______________________________" },
                new() { "焦点", "______________________________", "______________________________" },
                new() { "角色", "______________________________", "______________________________" },
                new() { "AI 时代的挑战", "______________________________", "______________________________" }
            },
            new List<int> { 1500, 3000, 3000 }
        ));

        body.Append(PEmpty(15));
        body.Append(TipBox("◇", "我在发展面谈上最常见的误区是：", "______________________________________________________________", CLR_BG_PEACH, CLR_PRIMARY));

        // 3.2 双轨框架
        body.Append(PEmpty(15));
        body.Append(Heading("3.2  双轨胜任度框架", 2));

        body.Append(TagBlock("AI 协作力轨道（工具轨）", CLR_BG_SKY));
        body.Append(P("包含的能力：", null, 22, CLR_TEXT_DARK, true));
        foreach (var el in FillLines(2, 28)) body.Append(el);
        body.Append(P("重要提醒（AI 协作力和人类深度的关系）：", null, 22, CLR_TEXT_DARK, true));
        foreach (var el in FillLines(2, 28)) body.Append(el);
        body.Append(PEmpty(10));

        body.Append(TagBlock("人类深度轨道（价值轨）", CLR_BG_LAV));
        body.Append(P("判断力类：____________________________________________________", null, 22, CLR_TEXT_DARK, false));
        body.Append(P("关系力类：____________________________________________________", null, 22, CLR_TEXT_DARK, false));
        body.Append(P("领域深度类：__________________________________________________", null, 22, CLR_TEXT_DARK, false));
        body.Append(PEmpty(10));

        body.Append(TagBlock("我的分析对象在双轨上的现状", CLR_BG_PEACH));
        body.Append(P("AI 协作力轨道：  □  明显不足    □  基本够用    □  已经较强", null, 22, CLR_PRIMARY, true));
        body.Append(P("人类深度轨道：  □  明显不足    □  基本够用    □  已经较强", null, 22, CLR_PRIMARY, true));
        body.Append(P("当前更紧迫的发展轨道：__________，原因：____________________________", null, 22, CLR_TEXT_DARK, false));
        foreach (var el in FillLines(2, 28)) body.Append(el);

        // 3.3 从缺口到发展
        body.Append(PEmpty(15));
        body.Append(Heading("3.3  从目标缺口到发展需要（分析练习）", 2));

        body.Append(P("我的分析对象的主要绩效缺口：", null, 22, CLR_TEXT_DARK, true));
        foreach (var el in FillLines(2, 28)) body.Append(el);

        body.Append(PEmpty(10));
        body.Append(TagBlock("缺口类型判断", CLR_BG_SKY));
        body.Append(P("□  技能缺口（不会做）", null, 22, CLR_TEXT_DARK, false));
        body.Append(P("□  行为缺口（知道但没做）", null, 22, CLR_TEXT_DARK, false));
        body.Append(P("□  认知缺口（理解偏差）", null, 22, CLR_TEXT_DARK, false));
        body.Append(P("□  AI 工具协作缺口（工具能力不足）", null, 22, CLR_PRIMARY, true));
        body.Append(P("□  其他：_____________", null, 22, CLR_TEXT_DARK, false));
        body.Append(PEmpty(10));

        body.Append(TagBlock("这个缺口：", CLR_BG_PEACH));
        body.Append(P("□  AI 工具可以帮他补上（→ 发展重点是 AI 协作力轨道）", null, 22, CLR_TEXT_DARK, false));
        body.Append(P("□  必须人自己发展（→ 发展重点是人类深度轨道）", null, 22, CLR_TEXT_DARK, false));
        body.Append(P("□  两者都有（→ 双轨都需要，优先级是__________）", null, 22, CLR_PRIMARY, true));
        body.Append(PEmpty(10));
        body.Append(P("对应的发展路径（具体方式）：", null, 22, CLR_TEXT_DARK, true));
        foreach (var el in FillLines(3, 30)) body.Append(el);

        // 3.4 三个启动问题
        body.Append(PEmpty(15));
        body.Append(Heading("3.4  发展对话三个启动问题", 2));

        body.Append(TagBlock("启动问题一（通用开场）", CLR_BG_PEACH));
        body.Append(P("「这个周期结束，如果让你自己来说，你最满意的成长是什么？你觉得还有哪里值得再提升？」", null, 22, CLR_PRIMARY, true));
        body.Append(PEmpty(5));
        body.Append(P("这个问题，我预计我的分析对象会怎么回答：", null, 22, CLR_TEXT_DARK, false));
        foreach (var el in FillLines(2, 28)) body.Append(el);

        body.Append(PEmpty(10));
        body.Append(TagBlock("启动问题二（AI 时代特有）", CLR_BG_SKY));
        body.Append(P("「在你用 AI 工具最多的那类工作里，你觉得自己在这个过程里做了什么？你希望在哪方面变得更有能力？」", null, 22, CLR_PRIMARY, true));
        body.Append(PEmpty(5));
        body.Append(P("这个问题，我更想用哪个版本 / 在什么场合用：", null, 22, CLR_TEXT_DARK, false));
        foreach (var el in FillLines(2, 28)) body.Append(el);

        body.Append(PEmpty(10));
        body.Append(TagBlock("启动问题三（具体化）", CLR_BG_LAV));
        body.Append(P("「如果这个周期有一件事让你感觉『我在成长』，那会是什么样的一件事？」", null, 22, CLR_PRIMARY, true));
        body.Append(PEmpty(5));
        body.Append(P("我打算在以下情况下用这个问题：", null, 22, CLR_TEXT_DARK, false));
        foreach (var el in FillLines(2, 28)) body.Append(el);

        // 3.5 配对演练
        body.Append(PEmpty(15));
        body.Append(Heading("3.5  配对演练记录（发展对话开场）", 2));

        body.Append(P("我扮演的角色：  □  管理者     □  员工", null, 22, CLR_TEXT_DARK, true));
        body.Append(P("我使用的启动问题是：", null, 22, CLR_TEXT_DARK, false));
        foreach (var el in FillLines(2, 28)) body.Append(el);
        body.Append(P("员工角色在听到这个问题后，反应是：", null, 22, CLR_TEXT_DARK, false));
        foreach (var el in FillLines(2, 28)) body.Append(el);
        body.Append(P("和评估面谈的对话感受相比，最明显的不同是：", null, 22, CLR_TEXT_DARK, false));
        foreach (var el in FillLines(2, 28)) body.Append(el);
        body.Append(P("伙伴的反馈：", null, 22, CLR_TEXT_DARK, false));
        foreach (var el in FillLines(2, 28)) body.Append(el);
        body.Append(P("我在发展对话开场上，最需要练习的是：", null, 22, CLR_TEXT_DARK, false));
        foreach (var el in FillLines(2, 28)) body.Append(el);
    }

    // ============================================================
    // 8. 下次面谈准备清单（核心 - 4 区）
    // ============================================================
    static void BuildChecklist(Body body)
    {
        body.Append(Heading("下次面谈准备清单", 1, CLR_PRIMARY));
        body.Append(P("（这是今天最重要的 25 分钟产出）", null, 28, CLR_PRIMARY_L, true));
        body.Append(PEmpty(10));

        // 顶部信息
        body.Append(SimpleTable(
            new List<(string, string)> {
                ("面谈对象（员工代号）", CLR_PRIMARY),
                ("面谈预计时间", CLR_PRIMARY_L)
            },
            new List<List<string>> { new() { "____________", "____________________" } },
            new List<int> { 3500, 6500 }
        ));

        body.Append(PEmpty(20));

        // ==== 第一区 ====
        body.Append(Heading("第一区  ·  事实与归因准备", 2, CLR_PRIMARY));
        body.Append(P("这场面谈里，最需要深入讨论的 1-2 个绩效事实：", null, 22, CLR_TEXT_DARK, true));
        body.Append(PEmpty(5));

        body.Append(TagBlock("事实 1", CLR_BG_PEACH));
        body.Append(P("________________________________________________________________", null, 22, CLR_PRIMARY, false));
        body.Append(PEmpty(8));
        body.Append(P("这个事实的归因我的判断是：", null, 22, CLR_TEXT_DARK, true));
        body.Append(P("________________________________________________________________", null, 22, CLR_PRIMARY, false));
        body.Append(PEmpty(8));
        body.Append(P("归因是否清晰？", null, 22, CLR_TEXT_DARK, true));
        body.Append(P("□  清晰（可以直接进入缺口分析）", null, 22, CLR_TEXT_DARK, false));
        body.Append(P("□  模糊（需要在第二步探寻归因时共同探索）", null, 22, CLR_TEXT_DARK, false));
        body.Append(PEmpty(5));
        body.Append(P("如果模糊，我准备用什么问题来探寻归因：", null, 22, CLR_TEXT_DARK, true));
        body.Append(P("________________________________________________________________", null, 22, CLR_PRIMARY, false));
        body.Append(PEmpty(15));

        body.Append(TagBlock("事实 2（如有）", CLR_BG_SKY));
        body.Append(P("________________________________________________________________", null, 22, CLR_PRIMARY, false));
        body.Append(PEmpty(8));
        body.Append(P("归因判断和是否需要探寻：", null, 22, CLR_TEXT_DARK, true));
        body.Append(P("________________________________________________________________", null, 22, CLR_PRIMARY, false));
        body.Append(PEmpty(8));
        body.Append(P("________________________________________________________________", null, 22, CLR_PRIMARY, false));
        body.Append(PEmpty(20));

        // ==== 第二区 ====
        body.Append(Heading("第二区  ·  预估难点与准备", 2, CLR_PRIMARY_L));
        body.Append(P("这场面谈里，我预计最难的时刻是：", null, 22, CLR_TEXT_DARK, true));
        body.Append(P("________________________________________________________________", null, 22, CLR_PRIMARY_L, false));
        body.Append(PEmpty(8));

        body.Append(TagBlock("难点的类型", CLR_BG_SKY));
        body.Append(P("□  员工可能不接受评估结果", null, 22, CLR_TEXT_DARK, false));
        body.Append(P("□  员工可能情绪激动", null, 22, CLR_TEXT_DARK, false));
        body.Append(P("□  我需要说一件我一直在回避的事", null, 22, CLR_TEXT_DARK, false));
        body.Append(P("□  这可能是 AI 时代的五类特有场景之 __________ 类型", null, 22, CLR_PRIMARY, true));
        body.Append(P("□  其他：_____________", null, 22, CLR_TEXT_DARK, false));
        body.Append(PEmpty(8));

        body.Append(P("我的应对准备（参考四原则和五类场景的方法）：", null, 22, CLR_TEXT_DARK, true));
        foreach (var el in FillLines(3, 30)) body.Append(el);
        body.Append(PEmpty(8));

        body.Append(P("如果遇到最坏的情况（完全对抗或完全沉默），我的处理方式是：", null, 22, CLR_TEXT_DARK, true));
        body.Append(P("________________________________________________________________", null, 22, CLR_PRIMARY_L, false));
        body.Append(P("________________________________________________________________", null, 22, CLR_PRIMARY_L, false));
        body.Append(PEmpty(20));

        // ==== 第三区 ====
        body.Append(Heading("第三区  ·  发展对话规划", 2, CLR_ACCENT));
        body.Append(P("这个员工，双轨状态评估：", null, 22, CLR_TEXT_DARK, true));
        body.Append(P("AI 协作力：  □  不足    □  够用    □  较强", null, 22, CLR_PRIMARY, true));
        body.Append(P("人类深度：  □  不足    □  够用    □  较强", null, 22, CLR_PRIMARY, true));
        body.Append(PEmpty(8));

        body.Append(P("这次发展对话，我最想达到的一个结果是：", null, 22, CLR_TEXT_DARK, true));
        body.Append(P("________________________________________________________________", null, 22, CLR_ACCENT, false));
        body.Append(PEmpty(8));

        body.Append(P("我打算用的启动问题是：", null, 22, CLR_TEXT_DARK, true));
        body.Append(P("________________________________________________________________", null, 22, CLR_ACCENT, false));
        body.Append(PEmpty(8));

        body.Append(P("我预计员工可能的回应方向，以及我的引导准备：", null, 22, CLR_TEXT_DARK, true));
        foreach (var el in FillLines(3, 30)) body.Append(el);
        body.Append(PEmpty(8));

        body.Append(P("这次发展面谈希望员工带走的一个方向感（不是行动清单，是一个有方向感的感受）：", null, 22, CLR_TEXT_DARK, true));
        body.Append(P("________________________________________________________________", null, 22, CLR_ACCENT, false));
        body.Append(PEmpty(20));

        // ==== 第四区 ====
        body.Append(Heading("第四区  ·  四步面谈预演（关键词版）", 2, "16A085"));

        body.Append(TagBlock("第一步 —— 共看事实", CLR_BG_MINT));
        body.Append(P("我的开场语：", null, 22, CLR_TEXT_DARK, true));
        body.Append(P("________________________________________________________________", null, 22, "16A085", false));
        body.Append(PEmpty(8));

        body.Append(TagBlock("第二步 —— 探寻归因", CLR_BG_MINT));
        body.Append(P("我准备的第一个问题：", null, 22, CLR_TEXT_DARK, true));
        body.Append(P("________________________________________________________________", null, 22, "16A085", false));
        body.Append(PEmpty(8));

        body.Append(TagBlock("第三步 —— 分析缺口", CLR_BG_MINT));
        body.Append(P("我会怎么说，基于什么事面：", null, 22, CLR_TEXT_DARK, true));
        body.Append(P("________________________________________________________________", null, 22, "16A085", false));
        body.Append(P("________________________________________________________________", null, 22, "16A085", false));
        body.Append(PEmpty(8));

        body.Append(TagBlock("第四步 —— 共建方向", CLR_BG_MINT));
        body.Append(P("我的起手问题：", null, 22, CLR_TEXT_DARK, true));
        body.Append(P("________________________________________________________________", null, 22, "16A085", false));
        body.Append(PEmpty(12));

        body.Append(TipBox("★", "这场面谈里，我最想做到但以前没做到的一件事是：",
            "______________________________________________________________________________",
            CLR_BG_PEACH, CLR_PRIMARY));

        body.Append(PEmpty(20));
        body.Append(Heading("问责伙伴", 2, "8E44AD"));
        body.Append(P("我的问责伙伴：______________________________", null, 22, CLR_TEXT_DARK, true));
        body.Append(P("联系方式：______________________________", null, 22, CLR_TEXT_DARK, true));
        body.Append(P("我们的约定——面谈完成后，我会告诉他 / 她：", null, 22, CLR_TEXT_DARK, true));
        body.Append(P("________________________________________________________________", null, 22, "8E44AD", false));
        body.Append(P("________________________________________________________________", null, 22, "8E44AD", false));
        body.Append(PEmpty(8));
        body.Append(P("30 天内，我会做到的一件事（和绩效面谈相关）：", null, 22, CLR_TEXT_DARK, true));
        body.Append(P("________________________________________________________________", null, 22, "8E44AD", false));
    }

    // ============================================================
    // 9. 工具索引
    // ============================================================
    static void BuildToolIndex(Body body)
    {
        body.Append(Heading("工具索引", 1, CLR_PRIMARY));
        body.Append(P("今天讲到的所有工具，一张表全部找得到。", null, 22, CLR_TEXT_GREY, false));
        body.Append(PEmpty(15));

        body.Append(SimpleTable(
            new List<(string, string)> {
                ("工具 / 框架", CLR_PRIMARY),
                ("用途", CLR_PRIMARY_L),
                ("在手册的位置", CLR_ACCENT)
            },
            new List<List<string>> {
                new() { "四步面谈法（共看事实→探寻归因→分析缺口→共建方向）", "评估面谈的完整操作框架", "Part 1" },
                new() { "归因探寻参考问题", "在面谈第二步共同澄清员工的人类贡献", "Part 1" },
                new() { "正面 · 全面 · 情面 · 事面", "艰难面谈说真话的四个操作原则", "Part 2" },
                new() { "AI 时代五类艰难场景速查", "识别和处理 AI 时代特有的面谈困境", "Part 2" },
                new() { "演练观察清单", "作为观察者给管理者角色提供结构化反馈", "活动时发放" },
                new() { "双轨胜任度框架", "分析员工在 AI 时代的能力发展方向", "Part 3" },
                new() { "缺口 → 发展需要分析路径", "从绩效缺口识别双轨发展需要", "Part 3" },
                new() { "发展对话三个启动问题", "开启有员工参与感的发展面谈", "Part 3" },
                new() { "下次面谈准备清单", "将课程工具转化为下次真实面谈的具体准备", "P39-42" }
            },
            new List<int> { 3500, 4000, 2500 }
        ));

        body.Append(PEmpty(20));
        body.Append(TipBox("◇", "如果只能带走一个工具：",
            "下次面谈准备清单。填完之后拍照发给自己的问责伙伴。",
            CLR_BG_PEACH, CLR_PRIMARY));
    }

    // ============================================================
    // 10. 附录 A：动作清单
    // ============================================================
    static void BuildActionsAppendix(Body body)
    {
        body.Append(Heading("附录 A  ·  面谈前后的关键动作清单", 1, CLR_PRIMARY));
        body.Append(P("这是我们建议的「最小可行流程」。做完这些，你的面谈质量就会有显著提升。", null, 22, CLR_TEXT_GREY, false));
        body.Append(PEmpty(15));

        body.Append(TagBlock("面谈前（至少 1 周前完成）", CLR_BG_PEACH));
        body.Append(SimpleTable(
            new List<(string, string)> {
                ("打勾", CLR_PRIMARY),
                ("动作", CLR_BG_PEACH)
            },
            new List<List<string>> {
                new() { "□", "回顾这个周期里，这名员工最重要的 3-5 个绩效事实（具体事件，不是印象）" },
                new() { "□", "对这些事实做初步的归因判断（哪些归因清晰，哪些需要在面谈里共同探索）" },
                new() { "□", "识别这名员工的主要绩效缺口，初步判断缺口类型" },
                new() { "□", "预判可能出现的面谈困难，准备应对方案" },
                new() { "□", "用双轨框架初步分析这名员工的发展方向" },
                new() { "□", "把面谈时间提前告知员工，并说明面谈的大概方向（让员工有机会自我评估准备）" }
            },
            new List<int> { 1000, 9000 }
        ));

        body.Append(PEmpty(15));
        body.Append(TagBlock("面谈中", CLR_BG_SKY));
        body.Append(SimpleTable(
            new List<(string, string)> {
                ("打勾", CLR_PRIMARY),
                ("动作", CLR_BG_SKY)
            },
            new List<List<string>> {
                new() { "□", "第一步：邀请员工先说，不抢先陈述评估结论" },
                new() { "□", "第二步：至少问一个归因探寻的问题，真正等待答案" },
                new() { "□", "第三步：说负面反馈时，先确认你有事面支撑（具体情境 + 行为），再说结论" },
                new() { "□", "第四步：用共建的问题开场，而不是直接发布行动要求" },
                new() { "□", "发展面谈部分：用启动问题先听员工的，再补充你的分析" }
            },
            new List<int> { 1000, 9000 }
        ));

        body.Append(PEmpty(15));
        body.Append(TagBlock("面谈后（1 周内）", CLR_BG_LAV));
        body.Append(SimpleTable(
            new List<(string, string)> {
                ("打勾", CLR_PRIMARY),
                ("动作", CLR_BG_LAV)
            },
            new List<List<string>> {
                new() { "□", "把面谈里共识的行动（双方的）写下来发给员工确认" },
                new() { "□", "在日常工作里给面谈里承诺的支持做第一个动作" },
                new() { "□", "30 天后做一次简短的跟进——不是正式面谈，是 5 分钟的面谈里说的那件事，进展怎么样了" }
            },
            new List<int> { 1000, 9000 }
        ));
    }

    // ============================================================
    // 11. 附录 B：话术对比
    // ============================================================
    static void BuildScriptCompareAppendix(Body body)
    {
        body.Append(Heading("附录 B  ·  话术对比速查", 1, CLR_PRIMARY));
        body.Append(P("左边是常见但无效的说法，右边是更有效的版本。", null, 22, CLR_TEXT_GREY, false));
        body.Append(P("原因不在话术本身，而在背后的姿态：从评判到好奇，从发布到共建。", null, 22, CLR_TEXT_GREY, false));
        body.Append(PEmpty(15));

        // 第一组：说「负面反馈」时
        body.Append(Heading("说「负面反馈」时", 2, CLR_PRIMARY));
        AddScriptCompareRow(body,
            "你总是不能按时提交……",
            "在 Q3 里，有三次提交比计划晚了 2 天以上——7 月的 X 报告、8 月的 Y 报告和 9 月的 Z 汇报。我想了解一下，这三次里是什么情况？");
        AddScriptCompareRow(body,
            "你的工作质量这个季度不稳定。",
            "我注意到 X 项目里的客户分析部分，结论和我们自己的客户访谈数据有明显出入。当时你是怎么判断的？");
        body.Append(PEmpty(15));

        // 第二组：探寻归因
        body.Append(Heading("探寻归因时", 2, CLR_PRIMARY_L));
        AddScriptCompareRow(body,
            "这个报告你是不是用 AI 做的？（质问式）",
            "这个报告里，你最满意的判断是哪个部分？当时你是怎么想到的？（好奇式）");
        AddScriptCompareRow(body,
            "你说你的成绩主要是 AI 做的，那我重新考虑一下评分。（直接让步）",
            "你提到了 AI 工具的参与，我想我们一起来看看——在整个过程里，你的判断体现在哪些地方？（共同探索）");
        body.Append(PEmpty(15));

        // 第三组：开启发展对话
        body.Append(Heading("开启发展对话时", 2, CLR_ACCENT));
        AddScriptCompareRow(body,
            "接下来你需要在 X 方面提升，我建议你去参加 Y 培训。（单方面发布）",
            "这个季度结束，如果让你自己来说，你最满意的成长是什么？你觉得有哪里还可以不一样？（先听后引导）");
        AddScriptCompareRow(body,
            "在 AI 时代，你应该多学习 AI 工具。（方向过于笼统）",
            "在你用 AI 最多的那类工作里，你觉得你自己做了什么？你希望在哪方面变得更有能力？（双轨开场）");
        body.Append(PEmpty(15));

        // 第四组：处理情绪
        body.Append(Heading("处理面谈中的情绪时", 2, "16A085"));
        AddScriptCompareRow(body,
            "「好了好了，你先别激动……」（降温但压制）",
            "「我听到了，这件事对你来说很重要。我想确认我真的理解了你的感受——你的意思是……（复述）？」（承接，再澄清）");
        AddScriptCompareRow(body,
            "沉默等待（完全不回应）",
            "「你现在可能需要一点时间整理一下。我们可以先暂停一两分钟——这场对话对我来说很重要，我想确保我们能在对的状态下继续。」（给空间，不逃跑）");
    }

    static void AddScriptCompareRow(Body body, string wrong, string right)
    {
        var tbl = new Table();
        var tblPr = new TableProperties();
        tblPr.Append(new TableWidth { Type = TableWidthUnitValues.Pct, Width = "5000" });
        tblPr.Append(new TableBorders(
            new TopBorder { Val = BorderValues.Single, Color = CLR_BORDER, Size = 4 },
            new BottomBorder { Val = BorderValues.Single, Color = CLR_BORDER, Size = 4 },
            new LeftBorder { Val = BorderValues.Single, Color = CLR_BORDER, Size = 4 },
            new RightBorder { Val = BorderValues.Single, Color = CLR_BORDER, Size = 4 },
            new InsideVerticalBorder { Val = BorderValues.Single, Color = CLR_BORDER, Size = 4 }
        ));
        tblPr.Append(new TableCellMarginDefault(
            new TopMargin { Width = "120", Type = TableWidthUnitValues.Dxa },
            new BottomMargin { Width = "120", Type = TableWidthUnitValues.Dxa },
            new LeftMargin { Width = "180", Type = TableWidthUnitValues.Dxa },
            new RightMargin { Width = "180", Type = TableWidthUnitValues.Dxa }
        ));
        tbl.Append(tblPr);
        tbl.Append(new TableGrid(
            new GridColumn { Width = "4750" },
            new GridColumn { Width = "4750" }
        ));

        var tr = new TableRow();
        // 左：错
        var tc1 = new TableCell();
        var tc1pr = new TableCellProperties();
        tc1pr.Append(new Shading { Val = ShadingPatternValues.Clear, Color = "auto", Fill = "FDEDEC" });
        tc1pr.Append(new TableCellWidth { Type = TableWidthUnitValues.Pct, Width = "2500" });
        tc1.Append(tc1pr);
        var p1 = new Paragraph();
        p1.Append(MakeRun("× ", 26, CLR_RED, true));
        p1.Append(MakeRun(wrong, 22, CLR_TEXT_DARK, false));
        tc1.Append(p1);
        tr.Append(tc1);
        // 右：对
        var tc2 = new TableCell();
        var tc2pr = new TableCellProperties();
        tc2pr.Append(new Shading { Val = ShadingPatternValues.Clear, Color = "auto", Fill = "EAFAF1" });
        tc2pr.Append(new TableCellWidth { Type = TableWidthUnitValues.Pct, Width = "2500" });
        tc2.Append(tc2pr);
        var p2 = new Paragraph();
        p2.Append(MakeRun("√ ", 26, CLR_GREEN, true));
        p2.Append(MakeRun(right, 22, CLR_TEXT_DARK, false));
        tc2.Append(p2);
        tr.Append(tc2);

        tbl.Append(tr);
        body.Append(tbl);
        body.Append(PEmpty(8));
    }

    // ============================================================
    // 12. 封底
    // ============================================================
    static void BuildBackCover(Body body)
    {
        for (int i = 0; i < 4; i++) body.Append(PEmpty(40));

        body.Append(P("走出这间教室之前，最后看一眼：", null, 28, CLR_PRIMARY, true, JustificationValues.Center));
        body.Append(PEmpty(30));
        body.Append(HRule(CLR_PRIMARY));
        body.Append(PEmpty(20));

        body.Append(P("1.  你的分析对象是谁。", null, 32, CLR_TEXT_DARK, true, JustificationValues.Center));
        body.Append(P("2.  你带来的那个困境，今天有了什么变化。", null, 32, CLR_TEXT_DARK, true, JustificationValues.Center));
        body.Append(P("3.  你最想在下场面谈里做对的一件事。", null, 32, CLR_TEXT_DARK, true, JustificationValues.Center));
        body.Append(P("4.  你的问责伙伴是谁，你 30 天后要跟进什么。", null, 32, CLR_TEXT_DARK, true, JustificationValues.Center));

        body.Append(PEmpty(30));
        body.Append(HRule(CLR_PRIMARY));
        body.Append(PEmpty(20));

        body.Append(P("从今天开始，做一个有方法的管理者。", null, 36, CLR_PRIMARY, true, JustificationValues.Center));
        body.Append(P("不是更难，是更稳。", null, 30, CLR_PRIMARY_L, false, JustificationValues.Center));
        body.Append(PEmpty(40));

        body.Append(HRule(CLR_BORDER));
        body.Append(PEmpty(10));
        body.Append(P("学员手册  ·  完整版  ·  竞越课程", null, 20, CLR_TEXT_GREY, false, JustificationValues.Center));
        body.Append(P("开发者：罗宏伟", null, 20, CLR_TEXT_GREY, false, JustificationValues.Center));
    }
}
