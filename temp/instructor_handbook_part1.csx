#r "nuget: DocumentFormat.OpenXml, 3.2.0"

using DocumentFormat.OpenXml;
using DocumentFormat.OpenXml.Packaging;
using DocumentFormat.OpenXml.Wordprocessing;
using System.Text;

string outputPath = @"D:\新课开发\新员工\职场弯道超车-新员工AI\完整课程包\讲师手册\讲师手册_新员工AI职场赋能工作坊_v1.0.docx";
var dir = System.IO.Path.GetDirectoryName(outputPath);
if (!System.IO.Directory.Exists(dir)) System.IO.Directory.CreateDirectory(dir);

using var doc = WordprocessingDocument.Create(outputPath, WordprocessingDocumentType.Document);
var mainPart = doc.AddMainDocumentPart();
mainPart.Document = new Document(new Body());
Body body = mainPart.Document.Body;

// Colors
string PRIMARY_BLUE = "1F4E79", SECONDARY_BLUE = "2E75B6", DARK_GRAY = "404040", MEDIUM_GRAY = "595959", LIGHT_GRAY = "F2F2F2", ACCENT_GRAY = "7F7F7F", TABLE_HEADER_BG = "1F4E79", TABLE_ALT_BG = "D9E2F3", ORANGE = "E36C09";

// Styles Part
var stylesPart = mainPart.AddNewPart<StyleDefinitionsPart>();
stylesPart.Styles = new Styles();
var docDefaults = new DocDefaults();
docDefaults.Append(new RunPropertiesDefault(new RunPropertiesBaseStyle(new RunFonts { Ascii = "SimSun", EastAsia = "SimSun", HighAnsi = "SimSun" }, new FontSize { Val = "24" }, new FontSizeComplexScript { Val = "24" }, new Color { Val = DARK_GRAY })));
docDefaults.Append(new ParagraphPropertiesDefault(new ParagraphPropertiesBaseStyle(new SpacingBetweenLines { After = "160", Line = "276", LineRule = LineSpacingRuleValues.Auto })));
stylesPart.Styles.Append(docDefaults);
stylesPart.Styles.Append(CreateTitleStyle());
stylesPart.Styles.Append(CreateHeading1Style(PRIMARY_BLUE));
stylesPart.Styles.Append(CreateHeading2Style(SECONDARY_BLUE));
stylesPart.Styles.Append(CreateHeading3Style(DARK_GRAY));
stylesPart.Styles.Append(CreateNormalStyle());
stylesPart.Styles.Append(CreateInstructorNoteStyle());
stylesPart.Styles.Append(CreateTipBoxStyle());
stylesPart.Styles.Append(CreateWarningBoxStyle());
stylesPart.Styles.Append(CreateCaseBoxStyle());

Style CreateTitleStyle() => new Style(new StyleName { Val = "Title" }, new BasedOn { Val = "Normal" }, new StyleParagraphProperties(new Justification { Val = JustificationValues.Center }, new SpacingBetweenLines { After = "0", Line = "240", LineRule = LineSpacingRuleValues.Auto }, new Shading { Val = ShadingPatternValues.Clear, Fill = PRIMARY_BLUE }), new StyleRunProperties(new RunFonts { Ascii = "Microsoft YaHei", EastAsia = "Microsoft YaHei", HighAnsi = "Microsoft YaHei" }, new Bold(), new FontSize { Val = "56" }, new FontSizeComplexScript { Val = "56" }, new Color { Val = "FFFFFF" })) { Type = StyleValues.Paragraph, StyleId = "Title" };

Style CreateHeading1Style(string color) => new Style(new StyleName { Val = "Heading 1" }, new BasedOn { Val = "Normal" }, new StyleParagraphProperties(new SpacingBetweenLines { Before = "480", After = "240" }, new KeepNext(), new KeepLines(), new OutlineLevel { Val = 0 }), new StyleRunProperties(new RunFonts { Ascii = "Microsoft YaHei", EastAsia = "Microsoft YaHei", HighAnsi = "Microsoft YaHei" }, new Bold(), new FontSize { Val = "36" }, new FontSizeComplexScript { Val = "36" }, new Color { Val = color })) { Type = StyleValues.Paragraph, StyleId = "Heading1" };

Style CreateHeading2Style(string color) => new Style(new StyleName { Val = "Heading 2" }, new BasedOn { Val = "Normal" }, new StyleParagraphProperties(new SpacingBetweenLines { Before = "360", After = "120" }, new KeepNext(), new OutlineLevel { Val = 1 }), new StyleRunProperties(new RunFonts { Ascii = "Microsoft YaHei", EastAsia = "Microsoft YaHei", HighAnsi = "Microsoft YaHei" }, new Bold(), new FontSize { Val = "28" }, new FontSizeComplexScript { Val = "28" }, new Color { Val = color })) { Type = StyleValues.Paragraph, StyleId = "Heading2" };

Style CreateHeading3Style(string color) => new Style(new StyleName { Val = "Heading 3" }, new BasedOn { Val = "Normal" }, new StyleParagraphProperties(new SpacingBetweenLines { Before = "240", After = "120" }, new KeepNext(), new OutlineLevel { Val = 2 }), new StyleRunProperties(new RunFonts { Ascii = "Microsoft YaHei", EastAsia = "Microsoft YaHei", HighAnsi = "Microsoft YaHei" }, new Bold(), new FontSize { Val = "24" }, new FontSizeComplexScript { Val = "24" }, new Color { Val = color })) { Type = StyleValues.Paragraph, StyleId = "Heading3" };

Style CreateNormalStyle() => new Style(new StyleName { Val = "Normal" }, new StyleParagraphProperties(new SpacingBetweenLines { After = "160", Line = "276", LineRule = LineSpacingRuleValues.Auto }), new StyleRunProperties(new RunFonts { Ascii = "SimSun", EastAsia = "SimSun", HighAnsi = "SimSun" }, new FontSize { Val = "24" }, new FontSizeComplexScript { Val = "24" }, new Color { Val = DARK_GRAY })) { Type = StyleValues.Paragraph, StyleId = "Normal" };

Style CreateInstructorNoteStyle() => new Style(new StyleName { Val = "InstructorNote" }, new BasedOn { Val = "Normal" }, new StyleParagraphProperties(new SpacingBetweenLines { Before = "120", After = "120" }, new Shading { Val = ShadingPatternValues.Clear, Fill = "FFF2CC" }, new ParagraphBorders(new LeftBorder { Val = BorderValues.Single, Size = 24, Color = "F4B942" })), new StyleRunProperties(new RunFonts { Ascii = "SimSun", EastAsia = "SimSun" }, new Italic(), new FontSize { Val = "21" }, new FontSizeComplexScript { Val = "21" }, new Color { Val = "7F6000" })) { Type = StyleValues.Paragraph, StyleId = "InstructorNote" };

Style CreateTipBoxStyle() => new Style(new StyleName { Val = "TipBox" }, new BasedOn { Val = "Normal" }, new StyleParagraphProperties(new SpacingBetweenLines { Before = "120", After = "120" }, new Shading { Val = ShadingPatternValues.Clear, Fill = "E2EFDA" }, new ParagraphBorders(new LeftBorder { Val = BorderValues.Single, Size = 24, Color = "548235" })), new StyleRunProperties(new RunFonts { Ascii = "SimSun", EastAsia = "SimSun" }, new FontSize { Val = "21" }, new FontSizeComplexScript { Val = "21" }, new Color { Val = "375623" })) { Type = StyleValues.Paragraph, StyleId = "TipBox" };

Style CreateWarningBoxStyle() => new Style(new StyleName { Val = "WarningBox" }, new BasedOn { Val = "Normal" }, new StyleParagraphProperties(new SpacingBetweenLines { Before = "120", After = "120" }, new Shading { Val = ShadingPatternValues.Clear, Fill = "FCE4D6" }, new ParagraphBorders(new LeftBorder { Val = BorderValues.Single, Size = 24, Color = "C00000" })), new StyleRunProperties(new RunFonts { Ascii = "SimSun", EastAsia = "SimSun" }, new FontSize { Val = "21" }, new FontSizeComplexScript { Val = "21" }, new Color { Val = "C00000" })) { Type = StyleValues.Paragraph, StyleId = "WarningBox" };

Style CreateCaseBoxStyle() => new Style(new StyleName { Val = "CaseBox" }, new BasedOn { Val = "Normal" }, new StyleParagraphProperties(new SpacingBetweenLines { Before = "120", After = "120" }, new Shading { Val = ShadingPatternValues.Clear, Fill = "D9E1F2" }, new ParagraphBorders(new LeftBorder { Val = BorderValues.Single, Size = 24, Color = "2E75B6" })), new StyleRunProperties(new RunFonts { Ascii = "SimSun", EastAsia = "SimSun" }, new FontSize { Val = "21" }, new FontSizeComplexScript { Val = "21" }, new Color { Val = "1F4E79" })) { Type = StyleValues.Paragraph, StyleId = "CaseBox" };

// Footer
var footerPart = mainPart.AddNewPart<FooterPart>();
footerPart.Footer = new Footer(new Paragraph(new ParagraphProperties(new Justification { Val = JustificationValues.Center }, new ParagraphBorders(new TopBorder { Val = BorderValues.Single, Size = 4, Color = PRIMARY_BLUE })), new Run(new RunProperties(new RunFonts { Ascii = "SimSun", EastAsia = "SimSun" }, new FontSize { Val = "18" }, new Color { Val = MEDIUM_GRAY }), new Text("职场弯道超车：新员工AI原生工作方式加速训练营 | 讲师手册 | 第 ") { Space = SpaceProcessingModeValues.Preserve }), new Run(new RunProperties(new RunFonts { Ascii = "SimSun", EastAsia = "SimSun" }, new FontSize { Val = "18" }, new Color { Val = MEDIUM_GRAY }), new FieldChar { FieldCharType = FieldCharValues.Begin }), new Run(new RunProperties(new RunFonts { Ascii = "SimSun", EastAsia = "SimSun" }, new FontSize { Val = "18" }, new Color { Val = MEDIUM_GRAY }), new FieldCode(" PAGE ")), new Run(new RunProperties(new RunFonts { Ascii = "SimSun", EastAsia = "SimSun" }, new FontSize { Val = "18" }, new Color { Val = MEDIUM_GRAY }), new FieldChar { FieldCharType = FieldCharValues.Separate }), new Run(new RunProperties(new RunFonts { Ascii = "SimSun", EastAsia = "SimSun" }, new FontSize { Val = "18" }, new Color { Val = MEDIUM_GRAY }), new Text("1")), new Run(new RunProperties(new RunFonts { Ascii = "SimSun", EastAsia = "SimSun" }, new FontSize { Val = "18" }, new Color { Val = MEDIUM_GRAY }), new FieldChar { FieldCharType = FieldCharValues.End }), new Run(new RunProperties(new RunFonts { Ascii = "SimSun", EastAsia = "SimSun" }, new FontSize { Val = "18" }, new Color { Val = MEDIUM_GRAY }), new Text(" 页") { Space = SpaceProcessingModeValues.Preserve })));

var sectPr = new SectionProperties(new PageSize { Width = 11906, Height = 16838 }, new PageMargin { Top = 1440, Right = 1440, Bottom = 1440, Left = 1440, Header = 720, Footer = 720 }, new FooterReference { Type = HeaderFooterValues.Default, Id = mainPart.GetIdOfPart(footerPart) });

// Helper methods
void AddStyledPara(string text, string styleId) { var p = new Paragraph(); p.Append(new ParagraphProperties(new StyleId { Val = styleId })); p.Append(new Run(new Text(text))); body.Append(p); }
void AddHeading1(string text) => AddStyledPara(text, "Heading1");
void AddHeading2(string text) => AddStyledPara(text, "Heading2");
void AddHeading3(string text) => AddStyledPara(text, "Heading3");

void AddPara(string text, string styleId = "Normal", bool bold = false, string color = null) {
    var p = new Paragraph(); p.Append(new ParagraphProperties(new StyleId { Val = styleId }));
    var r = new Run(); var rPr = new RunProperties();
    if (bold) rPr.Append(new Bold());
    if (color != null) rPr.Append(new Color { Val = color });
    r.Append(rPr); r.Append(new Text(text)); p.Append(r); body.Append(p);
}

void AddInstructorNote(string text) { var p = new Paragraph(); p.Append(new ParagraphProperties(new StyleId { Val = "InstructorNote" })); p.Append(new Run(new Text("【讲师备注】" + text))); body.Append(p); }
void AddTipBox(string text) { var p = new Paragraph(); p.Append(new ParagraphProperties(new StyleId { Val = "TipBox" })); p.Append(new Run(new Text("提示: " + text))); body.Append(p); }
void AddWarningBox(string text) { var p = new Paragraph(); p.Append(new ParagraphProperties(new StyleId { Val = "WarningBox" })); p.Append(new Run(new Text("注意: " + text))); body.Append(p); }
void AddCaseBox(string text) { var p = new Paragraph(); p.Append(new ParagraphProperties(new StyleId { Val = "CaseBox" })); p.Append(new Run(new Text("案例: " + text))); body.Append(p); }
void AddEmptyLine() => body.Append(new Paragraph());
void AddBulletPoint(string text, int indent = 0) { var p = new Paragraph(); var pPr = new ParagraphProperties(); pPr.Append(new SpacingBetweenLines { After = "80" }); pPr.Append(new Indentation { Left = (360 + indent * 360).ToString(), Hanging = "180" }); p.Append(pPr); p.Append(new Run(new RunProperties(new RunFonts { Ascii = "SimSun", EastAsia = "SimSun" }, new FontSize { Val = "21" }), new Text("• " + text))); body.Append(p); }
void AddNumberedPoint(string text, int num, int indent = 0) { var p = new Paragraph(); var pPr = new ParagraphProperties(); pPr.Append(new SpacingBetweenLines { After = "80" }); pPr.Append(new Indentation { Left = (360 + indent * 360).ToString(), Hanging = "360" }); p.Append(pPr); p.Append(new Run(new RunProperties(new RunFonts { Ascii = "SimSun", EastAsia = "SimSun" }, new FontSize { Val = "21" }), new Text(num.ToString() + ". " + text))); body.Append(p); }
void AddPageBreak() => body.Append(new Paragraph(new Run(new Break { Type = BreakValues.Page })));

Table CreateTable(string[] headers, string[][] rows) {
    var table = new Table();
    table.Append(new TableProperties(new TableWidth { Width = "5000", Type = TableWidthUnitValues.Pct }, new TableBorders(new TopBorder { Val = BorderValues.Single, Size = 4, Color = "BFBFBF" }, new BottomBorder { Val = BorderValues.Single, Size = 4, Color = "BFBFBF" }, new LeftBorder { Val = BorderValues.Single, Size = 4, Color = "BFBFBF" }, new RightBorder { Val = BorderValues.Single, Size = 4, Color = "BFBFBF" }, new InsideHorizontalBorder { Val = BorderValues.Single, Size = 4, Color = "BFBFBF" }, new InsideVerticalBorder { Val = BorderValues.Single, Size = 4, Color = "BFBFBF" }), new TableCellMarginDefault(new TopMargin { Width = "60", Type = TableWidthUnitValues.Dxa }, new BottomMargin { Width = "60", Type = TableWidthUnitValues.Dxa })));
    var tblGrid = new TableGrid(); foreach (var h in headers) tblGrid.Append(new GridColumn()); table.Append(tblGrid);
    var headerRow = new TableRow(); for (int i = 0; i < headers.Length; i++) { var tc = new TableCell(); tc.Append(new TableCellProperties(new Shading { Val = ShadingPatternValues.Clear, Fill = TABLE_HEADER_BG }, new TableCellVerticalAlignment { Val = TableVerticalAlignmentValues.Center })); tc.Append(new Paragraph(new ParagraphProperties(new Justification { Val = JustificationValues.Center }), new Run(new RunProperties(new RunFonts { Ascii = "Microsoft YaHei", EastAsia = "Microsoft YaHei" }, new Bold(), new Color { Val = "FFFFFF" }, new FontSize { Val = "22" }), new Text(headers[i])))); headerRow.Append(tc); } table.Append(headerRow);
    for (int r = 0; r < rows.Length; r++) { var row = new TableRow(); var fillColor = (r % 2 == 1) ? TABLE_ALT_BG : "FFFFFF"; foreach (var cell in rows[r]) { var tc = new TableCell(); tc.Append(new TableCellProperties(new Shading { Val = ShadingPatternValues.Clear, Fill = fillColor })); tc.Append(new Paragraph(new Run(new RunProperties(new RunFonts { Ascii = "SimSun", EastAsia = "SimSun" }, new FontSize { Val = "21" }), new Text(cell ?? "")))); row.Append(tc); } table.Append(row); }
    return table;
}

void AddTable(Table t) { body.Append(t); body.Append(new Paragraph()); }

Console.WriteLine("Part 1 complete");
