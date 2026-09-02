using DocumentFormat.OpenXml;
using DocumentFormat.OpenXml.Packaging;
using DocumentFormat.OpenXml.Wordprocessing;

string outputPath = @D:新课开发工作手册知识工作者深度工作保护完整课程包01-课程说明书课程说明书-深度工作主权V1.0.docx;

using var doc = WordprocessingDocument.Create(outputPath, WordprocessingDocumentType.Document);
var mainPart = doc.AddMainDocumentPart();
mainPart.Document = new Document(new Body());
Body body = mainPart.Document.Body;

var stylesPart = mainPart.AddNewPart<StyleDefinitionsPart>();
stylesPart.Styles = new Styles();
var styles = stylesPart.Styles;

styles.Append(new DocDefaults(
    new RunPropertiesDefault(new RunPropertiesBaseStyle(
        new RunFonts { Ascii = Microsoft YaHei, EastAsia = Microsoft YaHei, HighAnsi = Microsoft YaHei },
        new FontSize { Val = 24 },
        new FontSizeComplexScript { Val = 24 }
    )),
    new ParagraphPropertiesDefault(new ParagraphPropertiesBaseStyle(
        new SpacingBetweenLines { After = 160, Line = 276, LineRule = LineSpacingRuleValues.Auto }
    ))
));

styles.Append(new Style(new StyleName { Val = Title }, new BasedOn { Val = Normal },
    new StyleParagraphProperties(new Justification { Val = JustificationValues.Center }, new SpacingBetweenLines { After = 0, Line = 240, LineRule = LineSpacingRuleValues.Auto }),
    new StyleRunProperties(new RunFonts { Ascii = Microsoft YaHei, EastAsia = Microsoft YaHei, HighAnsi = Microsoft YaHei }, new Bold(), new FontSize { Val = 56 }, new FontSizeComplexScript { Val = 56 }, new Color { Val = 1F3864 })
) { Type = StyleValues.Paragraph, StyleId = Title });

styles.Append(new Style(new StyleName { Val = Heading 1 }, new BasedOn { Val = Normal },
    new StyleParagraphProperties(new SpacingBetweenLines { Before = 480, After = 240 }, new KeepNext(), new OutlineLevel { Val = 0 }),
    new StyleRunProperties(new RunFonts { Ascii = Microsoft YaHei, EastAsia = Microsoft YaHei, HighAnsi = Microsoft YaHei }, new Bold(), new FontSize { Val = 36 }, new FontSizeComplexScript { Val = 36 }, new Color { Val = 1F3864 })
) { Type = StyleValues.Paragraph, StyleId = Heading1 });

styles.Append(new Style(new StyleName { Val = Heading 2 }, new BasedOn { Val = Normal },
    new StyleParagraphProperties(new SpacingBetweenLines { Before = 360, After = 120 }, new KeepNext(), new OutlineLevel { Val = 1 }),
    new StyleRunProperties(new RunFonts { Ascii = Microsoft YaHei, EastAsia = Microsoft YaHei, HighAnsi = Microsoft YaHei }, new Bold(), new FontSize { Val = 28 }, new FontSizeComplexScript { Val = 28 }, new Color { Val = 2E5496 })
) { Type = StyleValues.Paragraph, StyleId = Heading2 });

styles.Append(new Style(new StyleName { Val = ChapterTitle }, new BasedOn { Val = Normal },
    new StyleParagraphProperties(new SpacingBetweenLines { Before = 480, After = 240 }, new KeepNext(), new OutlineLevel { Val = 0 }),
    new StyleRunProperties(new RunFonts { Ascii = Microsoft YaHei, EastAsia = Microsoft YaHei, HighAnsi = Microsoft YaHei }, new Bold(), new FontSize { Val = 40 }, new FontSizeComplexScript { Val = 40 }, new Color { Val = C62828 })
) { Type = StyleValues.Paragraph, StyleId = ChapterTitle });

void AddTitle(string text) => body.Append(new Paragraph(new ParagraphProperties(new ParagraphStyleId { Val = Title }), new Run(new Text(text))));
void AddH1(string text) => body.Append(new Paragraph(new ParagraphProperties(new ParagraphStyleId { Val = Heading1 }), new Run(new Text(text))));
void AddH2(string text) => body.Append(new Paragraph(new ParagraphProperties(new ParagraphStyleId { Val = Heading2 }), new Run(new Text(text))));
void AddChapterTitle(string text) => body.Append(new Paragraph(new ParagraphProperties(new ParagraphStyleId { Val = ChapterTitle }), new Run(new Text(text))));
void AddP(string text) => body.Append(new Paragraph(new Run(new Text(text))));
void AddBullet(string text) => body.Append(new Paragraph(new ParagraphProperties(new SpacingBetweenLines { Before = 0, After = 80 }, new Indentation { Left = 360, Hanging = 360 }), new Run(new Text(•  + text)))));
void AddSpace() => body.Append(new Paragraph(new Run(new Text())));
void AddBreak() => body.Append(new Paragraph(new Run(new Break { Type = BreakValues.Page })));

AddSpace(); AddSpace(); AddSpace();
AddTitle(深度工作主权手册);
AddTitle(——课程说明书);
AddSpace();
AddP(课程名称：深度工作主权手册——知识工作者的注意力保护与恢复系统);
AddP(版本：V1.0);
AddP(日期：2026年7月);
AddBreak();

Console.WriteLine(Document created:  + outputPath);