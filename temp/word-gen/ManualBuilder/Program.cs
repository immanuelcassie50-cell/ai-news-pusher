using DocumentFormat.OpenXml;
using DocumentFormat.OpenXml.Packaging;
using DocumentFormat.OpenXml.Wordprocessing;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace ManualBuilder
{
    public class Builder
    {
        private readonly string _outputPath;
        public readonly Body _body;
        private readonly MainDocumentPart _mainPart;
        private readonly WordprocessingDocument _doc;

        public Builder(string outputPath)
        {
            _outputPath = outputPath;
            _doc = WordprocessingDocument.Create(outputPath, WordprocessingDocumentType.Document);
            _mainPart = _doc.AddMainDocumentPart();
            _mainPart.Document = new Document();
            _body = _mainPart.Document.AppendChild(new Body());
            InitStyles();
        }

        private void InitStyles()
        {
            var stylesPart = _mainPart.AddNewPart<StyleDefinitionsPart>();
            var styles = new Styles();

            var docDefaults = new DocDefaults();
            var rPrDefault = new RunPropertiesDefault();
            var rPr = new RunPropertiesBaseStyle();
            rPr.Append(new RunFonts() { Ascii = "Calibri", HighAnsi = "Calibri", EastAsia = "Microsoft YaHei", ComplexScript = "Calibri" });
            rPr.Append(new FontSize() { Val = "21" });
            rPr.Append(new FontSizeComplexScript() { Val = "21" });
            rPrDefault.Append(rPr);
            docDefaults.Append(rPrDefault);

            var pPrDefault = new ParagraphPropertiesDefault();
            var pp = new ParagraphPropertiesBaseStyle();
            pp.Append(new SpacingBetweenLines() { After = "80", Line = "300", LineRule = LineSpacingRuleValues.Auto });
            pPrDefault.Append(pp);
            docDefaults.Append(pPrDefault);
            styles.Append(docDefaults);

            // Normal
            var normalStyle = new Style() { Type = StyleValues.Paragraph, StyleId = "Normal", Default = true };
            normalStyle.Append(new StyleName() { Val = "Normal" });
            normalStyle.Append(new PrimaryStyle());
            var npPr = new StyleParagraphProperties();
            npPr.Append(new SpacingBetweenLines() { After = "80", Line = "300", LineRule = LineSpacingRuleValues.Auto });
            normalStyle.Append(npPr);
            var nRPr = new StyleRunProperties();
            nRPr.Append(new RunFonts() { Ascii = "Calibri", HighAnsi = "Calibri", EastAsia = "Microsoft YaHei", ComplexScript = "Calibri" });
            nRPr.Append(new FontSize() { Val = "21" });
            nRPr.Append(new FontSizeComplexScript() { Val = "21" });
            normalStyle.Append(nRPr);
            styles.Append(normalStyle);

            AddHeadingStyle(styles, "Heading1", "heading 1", 1, "32", "1F4E79", true);
            AddHeadingStyle(styles, "Heading2", "heading 2", 2, "26", "2E75B6", true);
            AddHeadingStyle(styles, "Heading3", "heading 3", 3, "22", "2E75B6", true);
            AddHeadingStyle(styles, "Heading4", "heading 4", 4, "21", "404040", true);
            AddHeadingStyle(styles, "Heading5", "heading 5", 5, "20", "595959", true);

            AddCustomStyle(styles, "CoverTitle", "Cover Title", "Normal", "60", "1F4E79", true, true);
            AddCustomStyle(styles, "CoverSubtitle", "Cover Subtitle", "Normal", "32", "404040", false, true);
            AddCustomStyle(styles, "CoverInfo", "Cover Info", "Normal", "24", "595959", false, false);

            // Quote
            var quoteStyle = new Style() { Type = StyleValues.Paragraph, StyleId = "Quote" };
            quoteStyle.Append(new StyleName() { Val = "Quote" });
            quoteStyle.Append(new BasedOn() { Val = "Normal" });
            var qPPr = new StyleParagraphProperties();
            qPPr.Append(new Indentation() { Left = "480", Right = "480" });
            qPPr.Append(new SpacingBetweenLines() { Before = "120", After = "120", Line = "300", LineRule = LineSpacingRuleValues.Auto });
            var qBdr = new ParagraphBorders();
            qBdr.Append(new LeftBorder() { Val = BorderValues.Single, Color = "2E75B6", Size = 24, Space = 8 });
            qPPr.Append(qBdr);
            quoteStyle.Append(qPPr);
            var qRPr = new StyleRunProperties();
            qRPr.Append(new Italic());
            qRPr.Append(new Color() { Val = "404040" });
            quoteStyle.Append(qRPr);
            styles.Append(quoteStyle);

            AddHintStyle(styles, "HintBox", "Hint Box", "F2F2F2", "595959");
            AddHintStyle(styles, "WarningBox", "Warning Box", "FFF2CC", "BF8F00");
            AddHintStyle(styles, "ImportantBox", "Important Box", "DEEAF6", "1F4E79");
            AddHintStyle(styles, "RiskBox", "Risk Box", "FBE5D6", "C00000");
            AddHintStyle(styles, "EnergyBox", "Energy Box", "E2EFDA", "548235");

            // TableNormal
            var tableNormal = new Style() { Type = StyleValues.Table, StyleId = "TableNormal", Default = true };
            tableNormal.Append(new StyleName() { Val = "Normal Table" });
            tableNormal.Append(new PrimaryStyle());
            var tnTblPr = new StyleTableProperties();
            tnTblPr.Append(new TableIndentation() { Width = 0, Type = TableWidthUnitValues.Dxa });
            tnTblPr.Append(new TableCellMarginDefault());
            tableNormal.Append(tnTblPr);
            styles.Append(tableNormal);

            // GridTable
            var tableStyle = new Style() { Type = StyleValues.Table, StyleId = "GridTable" };
            tableStyle.Append(new StyleName() { Val = "Grid Table" });
            tableStyle.Append(new BasedOn() { Val = "TableNormal" });
            tableStyle.Append(new PrimaryStyle());
            var tTblPr = new StyleTableProperties();
            tTblPr.Append(new TableCellMarginDefault(new TopMargin() { Width = "80", Type = TableWidthUnitValues.Dxa }, new BottomMargin() { Width = "80", Type = TableWidthUnitValues.Dxa }, new LeftMargin() { Width = "100", Type = TableWidthUnitValues.Dxa }, new RightMargin() { Width = "100", Type = TableWidthUnitValues.Dxa }));
            tableStyle.Append(tTblPr);
            styles.Append(tableStyle);

            stylesPart.Styles = styles;
        }

        private void AddHeadingStyle(Styles styles, string id, string name, int outlineLevel, string size, string color, bool bold)
        {
            var s = new Style() { Type = StyleValues.Paragraph, StyleId = id };
            s.Append(new StyleName() { Val = name });
            s.Append(new BasedOn() { Val = "Normal" });
            s.Append(new NextParagraphStyle() { Val = "Normal" });
            s.Append(new PrimaryStyle());
            s.Append(new UIPriority() { Val = 9 });
            var pPr = new StyleParagraphProperties();
            pPr.Append(new KeepNext());
            pPr.Append(new KeepLines());
            pPr.Append(new SpacingBetweenLines() { Before = "240", After = "120", Line = "300", LineRule = LineSpacingRuleValues.Auto });
            pPr.Append(new OutlineLevel() { Val = outlineLevel - 1 });
            s.Append(pPr);
            var rPr = new StyleRunProperties();
            rPr.Append(new RunFonts() { Ascii = "Calibri Light", HighAnsi = "Calibri Light", EastAsia = "Microsoft YaHei", ComplexScript = "Calibri Light" });
            rPr.Append(new FontSize() { Val = size });
            rPr.Append(new FontSizeComplexScript() { Val = size });
            rPr.Append(new Color() { Val = color });
            if (bold) { rPr.Append(new Bold()); rPr.Append(new BoldComplexScript()); }
            s.Append(rPr);
            styles.Append(s);
        }

        private void AddCustomStyle(Styles styles, string id, string name, string basedOn, string size, string color, bool bold, bool center)
        {
            var s = new Style() { Type = StyleValues.Paragraph, StyleId = id };
            s.Append(new StyleName() { Val = name });
            s.Append(new BasedOn() { Val = basedOn });
            s.Append(new NextParagraphStyle() { Val = "Normal" });
            s.Append(new PrimaryStyle());
            var pPr = new StyleParagraphProperties();
            if (center) pPr.Append(new Justification() { Val = JustificationValues.Center });
            pPr.Append(new SpacingBetweenLines() { Before = "60", After = "60", Line = "320", LineRule = LineSpacingRuleValues.Auto });
            s.Append(pPr);
            var rPr = new StyleRunProperties();
            rPr.Append(new RunFonts() { Ascii = "Calibri Light", HighAnsi = "Calibri Light", EastAsia = "Microsoft YaHei", ComplexScript = "Calibri Light" });
            rPr.Append(new FontSize() { Val = size });
            rPr.Append(new FontSizeComplexScript() { Val = size });
            rPr.Append(new Color() { Val = color });
            if (bold) { rPr.Append(new Bold()); rPr.Append(new BoldComplexScript()); }
            s.Append(rPr);
            styles.Append(s);
        }

        private void AddHintStyle(Styles styles, string id, string name, string bgColor, string borderColor)
        {
            var s = new Style() { Type = StyleValues.Paragraph, StyleId = id };
            s.Append(new StyleName() { Val = name });
            s.Append(new BasedOn() { Val = "Normal" });
            s.Append(new PrimaryStyle());
            var pPr = new StyleParagraphProperties();
            pPr.Append(new SpacingBetweenLines() { Before = "80", After = "80", Line = "300", LineRule = LineSpacingRuleValues.Auto });
            pPr.Append(new Indentation() { Left = "120", Right = "120" });
            pPr.Append(new Shading() { Val = ShadingPatternValues.Clear, Color = "auto", Fill = bgColor });
            var pbdr = new ParagraphBorders();
            pbdr.Append(new LeftBorder() { Val = BorderValues.Single, Color = borderColor, Size = 24, Space = 4 });
            pPr.Append(pbdr);
            s.Append(pPr);
            styles.Append(s);
        }

        public void H1(string text) { _body.AppendChild(MakeHeading("Heading1", text)); }
        public void H2(string text) { _body.AppendChild(MakeHeading("Heading2", text)); }
        public void H3(string text) { _body.AppendChild(MakeHeading("Heading3", text)); }
        public void H4(string text) { _body.AppendChild(MakeHeading("Heading4", text)); }
        public void H5(string text) { _body.AppendChild(MakeHeading("Heading5", text)); }

        private Paragraph MakeHeading(string styleId, string text)
        {
            var p = new Paragraph();
            var pPr = new ParagraphProperties();
            pPr.Append(new ParagraphStyleId() { Val = styleId });
            p.Append(pPr);
            p.Append(MakeRun(text));
            return p;
        }

        public void P(string text) { _body.AppendChild(MakePara("Normal", text)); }
        public void PQuote(string text) { _body.AppendChild(MakePara("Quote", text)); }
        public void PImportant(string text) { _body.AppendChild(MakePara("ImportantBox", "【关键提示】 " + text)); }
        public void PWarning(string text) { _body.AppendChild(MakePara("WarningBox", "【风险预警】 " + text)); }
        public void PRisk(string text) { _body.AppendChild(MakePara("RiskBox", "【红线提醒】 " + text)); }
        public void PEnergy(string text) { _body.AppendChild(MakePara("EnergyBox", "【能量管理】 " + text)); }
        public void PHint(string text) { _body.AppendChild(MakePara("HintBox", "【讲师注意】 " + text)); }

        private Paragraph MakePara(string styleId, string text)
        {
            var p = new Paragraph();
            var pPr = new ParagraphProperties();
            pPr.Append(new ParagraphStyleId() { Val = styleId });
            p.Append(pPr);
            if (!string.IsNullOrEmpty(text)) p.Append(MakeRun(text));
            return p;
        }

        public Paragraph PInline(params object[] parts)
        {
            var p = new Paragraph();
            var pPr = new ParagraphProperties();
            pPr.Append(new ParagraphStyleId() { Val = "Normal" });
            p.Append(pPr);
            foreach (var part in parts)
            {
                if (part is string s) p.Append(MakeRun(s));
                else if (part is Run r) p.Append(r);
            }
            return p;
        }

        public Run MakeRun(string text)
        {
            var r = new Run();
            r.Append(new Text(text) { Space = SpaceProcessingModeValues.Preserve });
            return r;
        }

        public Run BoldRun(string text)
        {
            var r = new Run();
            var rPr = new RunProperties();
            rPr.Append(new Bold());
            rPr.Append(new BoldComplexScript());
            r.Append(rPr);
            r.Append(new Text(text) { Space = SpaceProcessingModeValues.Preserve });
            return r;
        }

        public Run EmRun(string text)
        {
            var r = new Run();
            var rPr = new RunProperties();
            rPr.Append(new Italic());
            rPr.Append(new ItalicComplexScript());
            r.Append(rPr);
            r.Append(new Text(text) { Space = SpaceProcessingModeValues.Preserve });
            return r;
        }

        public void PBold(string text) { _body.AppendChild(MakeParaBold(text)); }

        private Paragraph MakeParaBold(string text)
        {
            var p = new Paragraph();
            var pPr = new ParagraphProperties();
            pPr.Append(new ParagraphStyleId() { Val = "Normal" });
            pPr.Append(new SpacingBetweenLines() { Before = "80", After = "40" });
            p.Append(pPr);
            var r = new Run();
            var rPr = new RunProperties();
            rPr.Append(new Bold());
            rPr.Append(new BoldComplexScript());
            rPr.Append(new Color() { Val = "1F4E79" });
            r.Append(rPr);
            r.Append(new Text(text) { Space = SpaceProcessingModeValues.Preserve });
            p.Append(r);
            return p;
        }

        public void EmptyLine() { _body.AppendChild(MakePara("Normal", "")); }

        public void PageBreak()
        {
            var p = new Paragraph();
            var r = new Run();
            r.Append(new Break() { Type = BreakValues.Page });
            p.Append(r);
            _body.AppendChild(p);
        }

        public void BulletList(IEnumerable<string> items)
        {
            foreach (var item in items)
            {
                var p = new Paragraph();
                var pPr = new ParagraphProperties();
                pPr.Append(new ParagraphStyleId() { Val = "Normal" });
                pPr.Append(new Indentation() { Left = "420", Hanging = "210" });
                pPr.Append(new SpacingBetweenLines() { After = "60" });
                p.Append(pPr);
                p.Append(MakeRun("• " + item));
                _body.AppendChild(p);
            }
        }

        public void NumberedList(IEnumerable<string> items)
        {
            int n = 1;
            foreach (var item in items)
            {
                var p = new Paragraph();
                var pPr = new ParagraphProperties();
                pPr.Append(new ParagraphStyleId() { Val = "Normal" });
                pPr.Append(new Indentation() { Left = "420", Hanging = "210" });
                pPr.Append(new SpacingBetweenLines() { After = "60" });
                p.Append(pPr);
                p.Append(MakeRun($"{n}. " + item));
                _body.AppendChild(p);
                n++;
            }
        }

        public void Table(string[] headers, IEnumerable<string[]> rows, int[]? colWidthsPct = null)
        {
            int n = headers.Length;
            if (colWidthsPct == null) { colWidthsPct = new int[n]; for (int i = 0; i < n; i++) colWidthsPct[i] = 100 / n; }
            int totalDxa = 9000;
            var colWidths = colWidthsPct.Select(p => (int)((long)p * totalDxa / 100)).ToArray();

            var table = new Table();
            var tblPr = new TableProperties();
            tblPr.Append(new TableStyle() { Val = "GridTable" });
            tblPr.Append(new TableWidth() { Width = totalDxa.ToString(), Type = TableWidthUnitValues.Dxa });
            tblPr.Append(new TableLook() { Val = "04A0", FirstRow = true, LastRow = false, FirstColumn = true, LastColumn = false, NoHorizontalBand = false, NoVerticalBand = true });
            var tblBorders = new TableBorders();
            tblBorders.Append(new TopBorder() { Val = BorderValues.Single, Color = "1F4E79", Size = 8 });
            tblBorders.Append(new BottomBorder() { Val = BorderValues.Single, Color = "1F4E79", Size = 8 });
            tblBorders.Append(new LeftBorder() { Val = BorderValues.Single, Color = "BFBFBF", Size = 4 });
            tblBorders.Append(new RightBorder() { Val = BorderValues.Single, Color = "BFBFBF", Size = 4 });
            tblBorders.Append(new InsideHorizontalBorder() { Val = BorderValues.Single, Color = "D9D9D9", Size = 4 });
            tblBorders.Append(new InsideVerticalBorder() { Val = BorderValues.Single, Color = "D9D9D9", Size = 4 });
            tblPr.Append(tblBorders);
            table.Append(tblPr);

            var tblGrid = new TableGrid();
            foreach (var w in colWidths) tblGrid.Append(new GridColumn() { Width = w.ToString() });
            table.Append(tblGrid);

            var hdrRow = new TableRow();
            var trPr = new TableRowProperties();
            trPr.Append(new TableHeader());
            trPr.Append(new CantSplit());
            hdrRow.Append(trPr);
            for (int i = 0; i < n; i++)
            {
                var tc = new TableCell();
                var tcPr = new TableCellProperties();
                tcPr.Append(new TableCellWidth() { Width = colWidths[i].ToString(), Type = TableWidthUnitValues.Dxa });
                tcPr.Append(new Shading() { Val = ShadingPatternValues.Clear, Color = "auto", Fill = "1F4E79" });
                tcPr.Append(new TableCellVerticalAlignment() { Val = TableVerticalAlignmentValues.Center });
                tc.Append(tcPr);
                var p = new Paragraph();
                var pPr = new ParagraphProperties();
                pPr.Append(new ParagraphStyleId() { Val = "Normal" });
                pPr.Append(new SpacingBetweenLines() { Before = "40", After = "40" });
                pPr.Append(new Justification() { Val = JustificationValues.Center });
                p.Append(pPr);
                var r = new Run();
                var rPr = new RunProperties();
                rPr.Append(new RunFonts() { Ascii = "Calibri", HighAnsi = "Calibri", EastAsia = "Microsoft YaHei" });
                rPr.Append(new Bold());
                rPr.Append(new Color() { Val = "FFFFFF" });
                rPr.Append(new FontSize() { Val = "20" });
                r.Append(rPr);
                r.Append(new Text(headers[i]) { Space = SpaceProcessingModeValues.Preserve });
                p.Append(r);
                tc.Append(p);
                hdrRow.Append(tc);
            }
            table.Append(hdrRow);

            int rowIdx = 0;
            foreach (var row in rows)
            {
                var tr = new TableRow();
                tr.Append(new TableRowProperties(new CantSplit()));
                for (int i = 0; i < n; i++)
                {
                    var tc = new TableCell();
                    var tcPr = new TableCellProperties();
                    tcPr.Append(new TableCellWidth() { Width = colWidths[i].ToString(), Type = TableWidthUnitValues.Dxa });
                    if (rowIdx % 2 == 1) tcPr.Append(new Shading() { Val = ShadingPatternValues.Clear, Color = "auto", Fill = "F2F7FC" });
                    tcPr.Append(new TableCellVerticalAlignment() { Val = TableVerticalAlignmentValues.Top });
                    tc.Append(tcPr);
                    var p = new Paragraph();
                    var pPr = new ParagraphProperties();
                    pPr.Append(new ParagraphStyleId() { Val = "Normal" });
                    pPr.Append(new SpacingBetweenLines() { Before = "40", After = "40" });
                    p.Append(pPr);
                    p.Append(MakeRun(row[i]));
                    tc.Append(p);
                    tr.Append(tc);
                }
                table.Append(tr);
                rowIdx++;
            }

            _body.AppendChild(table);
            EmptyLine();
        }

        public void AddTableOfContents()
        {
            var p = new Paragraph();
            var pPr = new ParagraphProperties();
            pPr.Append(new ParagraphStyleId() { Val = "Heading1" });
            p.Append(pPr);
            p.Append(MakeRun("目录"));
            _body.AppendChild(p);

            var tocP = new Paragraph();
            var fldChar1 = new Run(new FieldChar() { FieldCharType = FieldCharValues.Begin });
            var instrRun = new Run(new FieldCode("TOC \\o \"1-3\" \\h \\z \\u") { Space = SpaceProcessingModeValues.Preserve });
            var fldChar2 = new Run(new FieldChar() { FieldCharType = FieldCharValues.Separate });
            var placeholder = new Run(new Text("[请在 Word 中按 F9 更新目录]") { Space = SpaceProcessingModeValues.Preserve });
            var fldChar3 = new Run(new FieldChar() { FieldCharType = FieldCharValues.End });
            tocP.Append(fldChar1);
            tocP.Append(instrRun);
            tocP.Append(fldChar2);
            tocP.Append(placeholder);
            tocP.Append(fldChar3);
            _body.AppendChild(tocP);
        }

        public void AddHeader(string text)
        {
            var headerPart = _mainPart.AddNewPart<HeaderPart>();
            var hdr = new Header();
            var p = new Paragraph();
            var pPr = new ParagraphProperties();
            pPr.Append(new ParagraphStyleId() { Val = "Normal" });
            pPr.Append(new Justification() { Val = JustificationValues.Right });
            var pbdr = new ParagraphBorders();
            pbdr.Append(new BottomBorder() { Val = BorderValues.Single, Color = "1F4E79", Size = 6, Space = 2 });
            pPr.Append(pbdr);
            p.Append(pPr);
            var r = new Run();
            var rPr = new RunProperties();
            rPr.Append(new RunFonts() { Ascii = "Calibri", HighAnsi = "Calibri", EastAsia = "Microsoft YaHei" });
            rPr.Append(new FontSize() { Val = "18" });
            rPr.Append(new Color() { Val = "595959" });
            r.Append(rPr);
            r.Append(new Text(text) { Space = SpaceProcessingModeValues.Preserve });
            p.Append(r);
            hdr.Append(p);
            headerPart.Header = hdr;

            var sectPr = _body.Elements<SectionProperties>().LastOrDefault();
            if (sectPr == null) sectPr = _body.AppendChild(new SectionProperties());
            sectPr.PrependChild(new HeaderReference() { Type = HeaderFooterValues.Default, Id = _mainPart.GetIdOfPart(headerPart) });
        }

        public void AddPageNumberFooter()
        {
            var footerPart = _mainPart.AddNewPart<FooterPart>();
            var ftr = new Footer();
            var p = new Paragraph();
            var pPr = new ParagraphProperties();
            pPr.Append(new ParagraphStyleId() { Val = "Normal" });
            pPr.Append(new Justification() { Val = JustificationValues.Center });
            var pbdr = new ParagraphBorders();
            pbdr.Append(new TopBorder() { Val = BorderValues.Single, Color = "BFBFBF", Size = 4, Space = 2 });
            pPr.Append(pbdr);
            p.Append(pPr);

            p.Append(MakeRun("讲师手册 · 对话驱动 v1.0  |  "));
            p.Append(new Run(new FieldChar() { FieldCharType = FieldCharValues.Begin }));
            p.Append(new Run(new FieldCode("PAGE") { Space = SpaceProcessingModeValues.Preserve }));
            p.Append(new Run(new FieldChar() { FieldCharType = FieldCharValues.Separate }));
            p.Append(new Run(new Text("1") { Space = SpaceProcessingModeValues.Preserve }));
            p.Append(new Run(new FieldChar() { FieldCharType = FieldCharValues.End }));
            p.Append(MakeRun(" / "));
            p.Append(new Run(new FieldChar() { FieldCharType = FieldCharValues.Begin }));
            p.Append(new Run(new FieldCode("NUMPAGES") { Space = SpaceProcessingModeValues.Preserve }));
            p.Append(new Run(new FieldChar() { FieldCharType = FieldCharValues.Separate }));
            p.Append(new Run(new Text("1") { Space = SpaceProcessingModeValues.Preserve }));
            p.Append(new Run(new FieldChar() { FieldCharType = FieldCharValues.End }));
            ftr.Append(p);
            footerPart.Footer = ftr;

            var sectPr = _body.Elements<SectionProperties>().LastOrDefault();
            if (sectPr == null) sectPr = _body.AppendChild(new SectionProperties());
            sectPr.PrependChild(new FooterReference() { Type = HeaderFooterValues.Default, Id = _mainPart.GetIdOfPart(footerPart) });
        }

        public void Finalize()
        {
            var sectPr = _body.Elements<SectionProperties>().LastOrDefault();
            if (sectPr == null) sectPr = _body.AppendChild(new SectionProperties());
            sectPr.Append(new PageSize() { Width = 11906, Height = 16838, Orient = PageOrientationValues.Portrait });
            sectPr.Append(new PageMargin() { Top = 1440, Right = 1080, Bottom = 1440, Left = 1080, Header = 720, Footer = 720, Gutter = 0 });
            sectPr.Append(new Columns() { Space = "720" });
            sectPr.Append(new DocGrid() { Type = DocGridValues.Lines, LinePitch = 312 });

            _doc.Save();
            _doc.Dispose();
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            string outputPath = @"D:\2026年课程\竞越\绩效管理和绩效面谈：通过绩效面谈让员工更加胜任\完整课程包\03_讲师手册\讲师手册_完整版.docx";
            var dir = Path.GetDirectoryName(outputPath);
            if (!Directory.Exists(dir)) Directory.CreateDirectory(dir);

            var b = new Builder(outputPath);
            Content.WriteAll(b);
            b.AddHeader("对话驱动 · AI时代的绩效面谈与能力发展 · 讲师手册 v1.0");
            b.AddPageNumberFooter();
            b.Finalize();

            var info = new FileInfo(outputPath);
            Console.WriteLine($"Done. Path: {outputPath}");
            Console.WriteLine($"Size: {info.Length} bytes ({info.Length / 1024} KB)");
        }
    }
}
