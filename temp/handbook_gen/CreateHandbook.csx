#r "nuget: DocumentFormat.OpenXml, 3.2.0"

using DocumentFormat.OpenXml;
using DocumentFormat.OpenXml.Packaging;
using DocumentFormat.OpenXml.Wordprocessing;
using System.IO;

// Configuration
string outputPath = @"D:/新课开发/工作手册/客户隐性需求挖掘与验证/完整课程包/03_学员手册/学员手册_客户隐性需求挖掘与验证.docx";
string fontEA = "Microsoft YaHei";
string fontAscii = "Arial";
string colorAccent = "C41E3A";
string colorDark = "8B0000";
string colorText = "333333";

// Helpers
RunProperties MakeRp(string fontSize = "24", bool bold = false, string color = null) {
    var rp = new RunProperties();
    rp.AppendChild(new RunFonts { EastAsia = fontEA, Ascii = fontAscii, HighAnsi = fontAscii, ComplexScript = fontAscii });
    if (bold) rp.AppendChild(new Bold());
    if (color != null) rp.AppendChild(new Color { Val = color });
    rp.AppendChild(new FontSize { Val = fontSize });
    rp.AppendChild(new FontSizeComplexScript { Val = fontSize });
    return rp;
}

Paragraph MakeParagraph(string text, RunProperties rp, JustificationValues? jc = null) {
    var p = new Paragraph();
    var pPr = new ParagraphProperties();
    if (jc.HasValue) pPr.AppendChild(new Justification { Val = jc.Value });
    p.AppendChild(pPr);
    var run = new Run();
    foreach (var c in rp.ChildElements) run.AppendChild(c.CloneNode(true));
    run.AppendChild(new Text(text) { Space = SpaceProcessingModeValues.Preserve });
    p.AppendChild(run);
    return p;
}

Paragraph PageBreak() {
    var p = new Paragraph();
    var run = new Run();
    run.AppendChild(new Break { Type = BreakValues.Page });
    p.AppendChild(run);
    return p;
}

Paragraph ColorBlock(string text, string bgColor, string textColor = "FFFFFF", string fontSize = "28") {
    var p = new Paragraph();
    var pPr = new ParagraphProperties();
    pPr.AppendChild(new Shading { Val = ShadingPatternValues.Clear, Color = "auto", Fill = bgColor });
    pPr.AppendChild(new SpacingBetweenLines { Before = "80", After = "80", Line = "400", LineRule = LineSpacingRuleValues.Auto });
    pPr.AppendChild(new Justification { Val = JustificationValues.Center });
    p.AppendChild(pPr);
    var rp = new RunProperties();
    rp.AppendChild(new RunFonts { EastAsia = fontEA, Ascii = fontAscii, HighAnsi = fontAscii });
    rp.AppendChild(new Bold());
    rp.AppendChild(new Color { Val = textColor });
    rp.AppendChild(new FontSize { Val = fontSize });
    rp.AppendChild(new FontSizeComplexScript { Val = fontSize });
    var run = new Run();
    foreach (var c in rp.ChildElements) run.AppendChild(c.CloneNode(true));
    run.AppendChild(new Text(text) { Space = SpaceProcessingModeValues.Preserve });
    p.AppendChild(run);
    return p;
}

Paragraph Heading(string num, string title, string goldQuote = null) {
    var p = new Paragraph();
    var pPr = new ParagraphProperties();
    pPr.AppendChild(new SpacingBetweenLines { Before = "400", After = "200", Line = "360", LineRule = LineSpacingRuleValues.Auto });
    p.AppendChild(pPr);
    var rp1 = MakeRp("24", true, colorAccent);
    var run1 = new Run(); foreach (var c in rp1.ChildElements) run1.AppendChild(c.CloneNode(true));
    run1.AppendChild(new Text(num + "  ") { Space = SpaceProcessingModeValues.Preserve });
    p.AppendChild(run1);
    var rp2 = MakeRp("32", true, "1F1F1F");
    var run2 = new Run(); foreach (var c in rp2.ChildElements) run2.AppendChild(c.CloneNode(true));
    run2.AppendChild(new Text(title) { Space = SpaceProcessingModeValues.Preserve });
    p.AppendChild(run2);
    if (goldQuote != null) {
        var rp3 = MakeRp("21", false, "666666");
        var run3 = new Run(); foreach (var c in rp3.ChildElements) run3.AppendChild(c.CloneNode(true));
        run3.AppendChild(new Text("\n" + goldQuote) { Space = SpaceProcessingModeValues.Preserve });
        p.AppendChild(run3);
    }
    return p;
}

Paragraph SubHeading(string text, int level = 2) {
    var p = new Paragraph();
    var pPr = new ParagraphProperties();
    pPr.AppendChild(new SpacingBetweenLines { Before = "280", After = "120", Line = "320", LineRule = LineSpacingRuleValues.Auto });
    pPr.AppendChild(new KeepNext());
    p.AppendChild(pPr);
    var sz = level == 2 ? "28" : "24";
    var rp = MakeRp(sz, true, level == 2 ? "1F1F1F" : "333333");
    var run = new Run(); foreach (var c in rp.ChildElements) run.AppendChild(c.CloneNode(true));
    run.AppendChild(new Text(text) { Space = SpaceProcessingModeValues.Preserve });
    p.AppendChild(run);
    return p;
}

Paragraph BodyPara(string text) {
    var p = new Paragraph();
    var pPr = new ParagraphProperties();
    pPr.AppendChild(new SpacingBetweenLines { Before = "60", After = "120", Line = "320", LineRule = LineSpacingRuleValues.Auto });
    pPr.AppendChild(new Justification { Val = JustificationValues.Both });
    p.AppendChild(pPr);
    var rp = MakeRp("24", false, colorText);
    var run = new Run(); foreach (var c in rp.ChildElements) run.AppendChild(c.CloneNode(true));
    run.AppendChild(new Text(text) { Space = SpaceProcessingModeValues.Preserve });
    p.AppendChild(run);
    return p;
}

Paragraph BulletPara(string text) {
    var p = new Paragraph();
    var pPr = new ParagraphProperties();
    pPr.AppendChild(new Indentation { Left = "720", Hanging = "360" });
    pPr.AppendChild(new SpacingBetweenLines { Before = "40", After = "80", Line = "300", LineRule = LineSpacingRuleValues.Auto });
    p.AppendChild(pPr);
    var rp = MakeRp("24", false, colorText);
    var run = new Run(); foreach (var c in rp.ChildElements) run.AppendChild(c.CloneNode(true));
    run.AppendChild(new Text("•  " + text) { Space = SpaceProcessingModeValues.Preserve });
    p.AppendChild(run);
    return p;
}

Paragraph QQHeader(string q) {
    var p = new Paragraph();
    var pPr = new ParagraphProperties();
    pPr.AppendChild(new SpacingBetweenLines { Before = "300", After = "80", Line = "300", LineRule = LineSpacingRuleValues.Auto });
    p.AppendChild(pPr);
    var rp = MakeRp("24", true, colorAccent);
    var run = new Run(); foreach (var c in rp.ChildElements) run.AppendChild(c.CloneNode(true));
    run.AppendChild(new Text("问：" + q) { Space = SpaceProcessingModeValues.Preserve });
    p.AppendChild(run);
    return p;
}

Paragraph QAAnswer(string a) {
    var p = new Paragraph();
    var pPr = new ParagraphProperties();
    pPr.AppendChild(new Indentation { Left = "360" });
    pPr.AppendChild(new SpacingBetweenLines { Before = "40", After = "120", Line = "300", LineRule = LineSpacingRuleValues.Auto });
    pPr.AppendChild(new Justification { Val = JustificationValues.Both });
    p.AppendChild(pPr);
    var rp = MakeRp("24", false, "444444");
    var run = new Run(); foreach (var c in rp.ChildElements) run.AppendChild(c.CloneNode(true));
    run.AppendChild(new Text("答：" + a) { Space = SpaceProcessingModeValues.Preserve });
    p.AppendChild(run);
    return p;
}

Paragraph Divider() {
    var p = new Paragraph();
    var pPr = new ParagraphProperties();
    var pBdr = new ParagraphBorders();
    pBdr.AppendChild(new BottomBorder { Val = BorderValues.Single, Size = 4, Color = "DDDDDD", Space = 1 });
    pPr.AppendChild(pBdr);
    pPr.AppendChild(new SpacingBetweenLines { Before = "200", After = "200" });
    p.AppendChild(pPr);
    return p;
}

Paragraph PartBanner(string text, string fillColor) {
    var p = new Paragraph();
    var pPr = new ParagraphProperties();
    pPr.AppendChild(new Justification { Val = JustificationValues.Center });
    pPr.AppendChild(new Shading { Val = ShadingPatternValues.Clear, Color = "auto", Fill = fillColor });
    pPr.AppendChild(new SpacingBetweenLines { Before = "200", After = "200" });
    p.AppendChild(pPr);
    var rp = new RunProperties();
    rp.AppendChild(new RunFonts { EastAsia = fontEA, Ascii = fontAscii, HighAnsi = fontAscii });
    rp.AppendChild(new Bold());
    rp.AppendChild(new Color { Val = "FFFFFF" });
    rp.AppendChild(new FontSize { Val = "32" });
    rp.AppendChild(new FontSizeComplexScript { Val = "32" });
    var run = new Run(); foreach (var c in rp.ChildElements) run.AppendChild(c.CloneNode(true));
    run.AppendChild(new Text(text) { Space = SpaceProcessingModeValues.Preserve });
    p.AppendChild(run);
    return p;
}

// ==================== BUILD DOCUMENT ====================
using (var doc = WordprocessingDocument.Create(outputPath, WordprocessingDocumentType.Document))
{
    var mainPart = doc.AddMainDocumentPart();
    mainPart.Document = new Document();
    var body = new Body();
    mainPart.Document.AppendChild(body);

    // Page setup
    var sectPr = new SectionProperties();
    sectPr.AppendChild(new PageSize { Width = 11906, Height = 16838 });
    sectPr.AppendChild(new PageMargin { Top = 1440, Bottom = 1440, Left = 1440, Right = 1440, Header = 720, Footer = 720 });

    // Styles
    var stylesPart = mainPart.AddNewPart<StyleDefinitionsPart>();
    var styles = new Styles();

    var ns = new Style { Type = StyleValues.Paragraph, StyleId = "Normal" };
    ns.AppendChild(new StyleName { Val = "Normal" });
    ns.AppendChild(new StyleParagraphProperties(
        new SpacingBetweenLines { Before = "60", After = "120", Line = "320", LineRule = LineSpacingRuleValues.Auto },
        new Justification { Val = JustificationValues.Both }));
    var nrpr = new StyleRunProperties();
    nrpr.AppendChild(new RunFonts { EastAsia = fontEA, Ascii = fontAscii, HighAnsi = fontAscii });
    nrpr.AppendChild(new Color { Val = colorText });
    nrpr.AppendChild(new FontSize { Val = "24" });
    nrpr.AppendChild(new FontSizeComplexScript { Val = "24" });
    ns.AppendChild(nrpr);
    styles.AppendChild(ns);

    var h1 = new Style { Type = StyleValues.Paragraph, StyleId = "Heading1" };
    h1.AppendChild(new StyleName { Val = "Heading 1" });
    h1.AppendChild(new BasedOn { Val = "Normal" });
    h1.AppendChild(new StyleParagraphProperties(
        new SpacingBetweenLines { Before = "400", After = "200", Line = "360", LineRule = LineSpacingRuleValues.Auto },
        new KeepNext(),
        new OutlineLevel { Val = 0 }));
    var h1rpr = new StyleRunProperties();
    h1rpr.AppendChild(new RunFonts { EastAsia = fontEA, Ascii = fontAscii, HighAnsi = fontAscii });
    h1rpr.AppendChild(new Bold());
    h1rpr.AppendChild(new Color { Val = "1F1F1F" });
    h1rpr.AppendChild(new FontSize { Val = "36" });
    h1rpr.AppendChild(new FontSizeComplexScript { Val = "36" });
    h1.AppendChild(h1rpr);
    styles.AppendChild(h1);

    var h2 = new Style { Type = StyleValues.Paragraph, StyleId = "Heading2" };
    h2.AppendChild(new StyleName { Val = "Heading 2" });
    h2.AppendChild(new BasedOn { Val = "Normal" });
    h2.AppendChild(new StyleParagraphProperties(
        new SpacingBetweenLines { Before = "280", After = "120", Line = "320", LineRule = LineSpacingRuleValues.Auto },
        new KeepNext(),
        new OutlineLevel { Val = 1 }));
    var h2rpr = new StyleRunProperties();
    h2rpr.AppendChild(new RunFonts { EastAsia = fontEA, Ascii = fontAscii, HighAnsi = fontAscii });
    h2rpr.AppendChild(new Bold());
    h2rpr.AppendChild(new Color { Val = "1F1F1F" });
    h2rpr.AppendChild(new FontSize { Val = "28" });
    h2rpr.AppendChild(new FontSizeComplexScript { Val = "28" });
    h2.AppendChild(h2rpr);
    styles.AppendChild(h2);

    var h3 = new Style { Type = StyleValues.Paragraph, StyleId = "Heading3" };
    h3.AppendChild(new StyleName { Val = "Heading 3" });
    h3.AppendChild(new BasedOn { Val = "Normal" });
    h3.AppendChild(new StyleParagraphProperties(
        new SpacingBetweenLines { Before = "200", After = "80", Line = "300", LineRule = LineSpacingRuleValues.Auto },
        new KeepNext(),
        new OutlineLevel { Val = 2 }));
    var h3rpr = new StyleRunProperties();
    h3rpr.AppendChild(new RunFonts { EastAsia = fontEA, Ascii = fontAscii, HighAnsi = fontAscii });
    h3rpr.AppendChild(new Bold());
    h3rpr.AppendChild(new Color { Val = "333333" });
    h3rpr.AppendChild(new FontSize { Val = "24" });
    h3rpr.AppendChild(new FontSizeComplexScript { Val = "24" });
    h3.AppendChild(h3rpr);
    styles.AppendChild(h3);
    stylesPart.Styles = styles;
    stylesPart.Styles.Save();

    // ===== COVER PAGE =====
    body.AppendChild(ColorBlock("", colorAccent));
    body.AppendChild(ColorBlock("", colorAccent));

    var coverTitle = new Paragraph();
    var ctPPr = new ParagraphProperties();
    ctPPr.AppendChild(new Justification { Val = JustificationValues.Center });
    ctPPr.AppendChild(new SpacingBetweenLines { Before = "600", After = "100" });
    coverTitle.AppendChild(ctPPr);
    var ctRPr = new RunProperties();
    ctRPr.AppendChild(new RunFonts { EastAsia = fontEA, Ascii = fontAscii, HighAnsi = fontAscii });
    ctRPr.AppendChild(new Bold());
    ctRPr.AppendChild(new Color { Val = colorDark });
    ctRPr.AppendChild(new FontSize { Val = "72" });
    ctRPr.AppendChild(new FontSizeComplexScript { Val = "72" });
    var ctRun = new Run(); foreach (var c in ctRPr.ChildElements) ctRun.AppendChild(c.CloneNode(true));
    ctRun.AppendChild(new Text("客户隐性需求") { Space = SpaceProcessingModeValues.Preserve });
    coverTitle.AppendChild(ctRun);
    body.AppendChild(coverTitle);

    var coverTitle2 = new Paragraph();
    var ct2PPr = new ParagraphProperties();
    ct2PPr.AppendChild(new Justification { Val = JustificationValues.Center });
    ct2PPr.AppendChild(new SpacingBetweenLines { Before = "0", After = "400" });
    coverTitle2.AppendChild(ct2PPr);
    var ct2Run = new Run(); foreach (var c in ctRPr.ChildElements) ct2Run.AppendChild(c.CloneNode(true));
    ct2Run.AppendChild(new Text("挖掘与验证") { Space = SpaceProcessingModeValues.Preserve });
    coverTitle2.AppendChild(ct2Run);
    body.AppendChild(coverTitle2);

    var subP = new Paragraph();
    var subPPr = new ParagraphProperties();
    subPPr.AppendChild(new Justification { Val = JustificationValues.Center });
    subPPr.AppendChild(new SpacingBetweenLines { Before = "100", After = "300" });
    subP.AppendChild(subPPr);
    var subRPr = new RunProperties();
    subRPr.AppendChild(new RunFonts { EastAsia = fontEA, Ascii = fontAscii, HighAnsi = fontAscii });
    subRPr.AppendChild(new Color { Val = "666666" });
    subRPr.AppendChild(new FontSize { Val = "28" });
    subRPr.AppendChild(new FontSizeComplexScript { Val = "28" });
    var subRun = new Run(); foreach (var c in subRPr.ChildElements) subRun.AppendChild(c.CloneNode(true));
    subRun.AppendChild(new Text("写给产品、销售与客户成功团队") { Space = SpaceProcessingModeValues.Preserve });
    subP.AppendChild(subRun);
    body.AppendChild(subP);

    var quoteP = new Paragraph();
    var qpPr = new ParagraphProperties();
    qpPr.AppendChild(new Justification { Val = JustificationValues.Center });
    qpPr.AppendChild(new SpacingBetweenLines { Before = "200", After = "200" });
    qpPr.AppendChild(new Indentation { Left = "720", Right = "720" });
    quoteP.AppendChild(qpPr);
    var qrPr = new RunProperties();
    qrPr.AppendChild(new RunFonts { EastAsia = fontEA, Ascii = fontAscii, HighAnsi = fontAscii });
    qrPr.AppendChild(new Italic());
    qrPr.AppendChild(new Color { Val = "888888" });
    qrPr.AppendChild(new FontSize { Val = "22" });
    qrPr.AppendChild(new FontSizeComplexScript { Val = "22" });
    var qRun = new Run(); foreach (var c in qrPr.ChildElements) qRun.AppendChild(c.CloneNode(true));
    qRun.AppendChild(new Text("那些客户不会写进需求文档，却决定这单能不能成、这个客户能不能留住的东西") { Space = SpaceProcessingModeValues.Preserve });
    quoteP.AppendChild(qRun);
    body.AppendChild(quoteP);
    body.AppendChild(Divider());

    var authorP = new Paragraph();
    var aPPr = new ParagraphProperties();
    aPPr.AppendChild(new Justification { Val = JustificationValues.Center });
    aPPr.AppendChild(new SpacingBetweenLines { Before = "300", After = "100" });
    authorP.AppendChild(aPPr);
    var arPr = new RunProperties();
    arPr.AppendChild(new RunFonts { EastAsia = fontEA, Ascii = fontAscii, HighAnsi = fontAscii });
    arPr.AppendChild(new Color { Val = "555555" });
    arPr.AppendChild(new FontSize { Val = "24" });
    arPr.AppendChild(new FontSizeComplexScript { Val = "24" });
    var aRun = new Run(); foreach (var c in arPr.ChildElements) aRun.AppendChild(c.CloneNode(true));
    aRun.AppendChild(new Text("作者：罗宏伟") { Space = SpaceProcessingModeValues.Preserve });
    authorP.AppendChild(aRun);
    body.AppendChild(authorP);
    body.AppendChild(PageBreak());

    // ===== TABLE OF CONTENTS =====
    var tocTitle = new Paragraph();
    var ttPPr = new ParagraphProperties();
    ttPPr.AppendChild(new Justification { Val = JustificationValues.Center });
    ttPPr.AppendChild(new SpacingBetweenLines { Before = "200", After = "400" });
    tocTitle.AppendChild(ttPPr);
    var ttRPr = new RunProperties();
    ttRPr.AppendChild(new RunFonts { EastAsia = fontEA, Ascii = fontAscii, HighAnsi = fontAscii });
    ttRPr.AppendChild(new Bold());
    ttRPr.AppendChild(new Color { Val = colorDark });
    ttRPr.AppendChild(new FontSize { Val = "44" });
    ttRPr.AppendChild(new FontSizeComplexScript { Val = "44" });
    var ttRun = new Run(); foreach (var c in ttRPr.ChildElements) ttRun.AppendChild(c.CloneNode(true));
    ttRun.AppendChild(new Text("目  录") { Space = SpaceProcessingModeValues.Preserve });
    tocTitle.AppendChild(ttRun);
    body.AppendChild(tocTitle);

    string[] tocEntries = {
        "第一章  课程导论",
        "第二章  如何使用本手册",
        "第三章  学习路径图",
        "   PART 1：挖掘与验证的方法",
        "   PART 2：这份工作最终练的是什么",
        "第四章  正文内容",
        "   PART 1 各章完整内容",
        "   PART 2 各章完整内容",
        "第五章  深度问答",
        "第六章  工具包",
        "第七章  附录",
    };
    foreach (var entry in tocEntries) {
        bool isPart = entry.TrimStart().StartsWith("PART");
        var tp = new Paragraph();
        var tpPr = new ParagraphProperties();
        tpPr.AppendChild(new SpacingBetweenLines { Before = "80", After = "80", Line = "320", LineRule = LineSpacingRuleValues.Auto });
        tpPr.AppendChild(new Indentation { Left = isPart ? "720" : "360" });
        tp.AppendChild(tpPr);
        var tRPr = new RunProperties();
        tRPr.AppendChild(new RunFonts { EastAsia = fontEA, Ascii = fontAscii, HighAnsi = fontAscii });
        tRPr.AppendChild(new Bold { Val = !isPart ? true : false });
        tRPr.AppendChild(new Color { Val = isPart ? "888888" : "333333" });
        tRPr.AppendChild(new FontSize { Val = isPart ? "22" : "26" });
        tRPr.AppendChild(new FontSizeComplexScript { Val = isPart ? "22" : "26" });
        var tRun = new Run(); foreach (var c in tRPr.ChildElements) tRun.AppendChild(c.CloneNode(true));
        tRun.AppendChild(new Text(entry) { Space = SpaceProcessingModeValues.Preserve });
        tp.AppendChild(tRun);
        body.AppendChild(tp);
    }
    body.AppendChild(PageBreak());

    // ===== CHAPTER 1: COURSE INTRODUCTION =====
    body.AppendChild(ColorBlock("第一章  课程导论", colorAccent));
    body.AppendChild(BodyPara(""));

    body.AppendChild(SubHeading("课程背景与价值", 2));
    body.AppendChild(BodyPara("客户嘴上说的需求，是他准备好被追责的那部分；他没说的需求，才是真正决定他会不会点头的那部分。而那部分，九成与产品好不好用无关，与他会不会因为这次决定在公司里被人翻旧账有关。"));
    body.AppendChild(BodyPara("AI把信息检索和方案生成的门槛拉到了地板，客户能说出口的需求，任何一个像样的团队都能满足；能不能挖到客户说不出口的那部分，正在变成这个行业里少数还值钱的能力。"));
    body.AppendChild(BodyPara("这本课程不教你更专业的话术，教你怎么把一次访谈、一次验证实验、一次优先级排序，变成真正读懂一个人而不是读懂一份文档的过程。"));

    body.AppendChild(SubHeading("目标学员画像", 2));
    body.AppendChild(BodyPara("本课程专为以下学员设计："));
    body.AppendChild(BulletPara("产品经理：能够收集表层需求，但屡屡在验收之后遇到\"客户当时明明说没问题\"的诡异落差"));
    body.AppendChild(BulletPara("销售：签单时一切顺利，但客户后期不续约或转介绍率低"));
    body.AppendChild(BulletPara("客户成功：客户表面满意，但真实需求未被满足导致流失"));

    body.AppendChild(SubHeading("学员收益（5-8条）", 2));
    body.AppendChild(BulletPara("掌握隐性需求的两层结构：交付层需求 vs 存续层需求"));
    body.AppendChild(BulletPara("学会识别决策链中的三种角色：决策人、使用者、影响者"));
    body.AppendChild(BulletPara("掌握\"让对方说漏嘴\"的访谈技巧，而非标准化问卷收集"));
    body.AppendChild(BulletPara("学会设计排错式验证实验，而非自我证明式验证"));
    body.AppendChild(BulletPara("掌握\"责任敞口\"维度，让优先级排序真正可落地执行"));
    body.AppendChild(BulletPara("建立信号词典，积累\"当时没当回事、后来证明关键\"的判断直觉"));
    body.AppendChild(BulletPara("理解三层团队（产品/销售/客户成功）的信息互补性，学会拼图而非各自为战"));
    body.AppendChild(BulletPara("在挖深的过程中保持对人的耐心，避免职业性轻蔑"));

    body.AppendChild(SubHeading("教学方法说明", 2));
    body.AppendChild(BodyPara("本课程采用\"公理展开 + 案例推演\"的教学方法。第一层公理是\"客户在需求文档里写的，是经过自我保护过滤器后剩下的部分\"，所有工具和技巧都从这一公理展开。第二层公理是\"满足需求是及格线，接住没说出口的那句话才是门槛\"，所有心态调整都围绕这一层展开。"));

    body.AppendChild(SubHeading("课时安排", 2));
    body.AppendChild(BulletPara("PART 1（10章）：挖掘与验证的方法 — 约8-10课时"));
    body.AppendChild(BulletPara("PART 2（5章）：这份工作最终练的是什么 — 约4-5课时"));
    body.AppendChild(BulletPara("实战练习与复盘 — 约2-3课时"));
    body.AppendChild(BulletPara("合计约15课时"));

    body.AppendChild(PageBreak());

    // ===== CHAPTER 2: HOW TO USE THIS HANDBOOK =====
    body.AppendChild(ColorBlock("第二章  如何使用本手册", colorAccent));
    body.AppendChild(BodyPara(""));

    body.AppendChild(SubHeading("学习方法建议", 2));
    body.AppendChild(BulletPara("先读公理，再看工具：本手册的工具和技巧都从公理展开，理解公理是正确使用工具的前提"));
    body.AppendChild(BulletPara("带着自己的项目读：每一章的内容都对应一个具体的判断场景，建议边读边回想自己经历过的类似情况"));
    body.AppendChild(BulletPara("PART 2 比 PART 1 更难读：因为它处理的是心态和职业风险，需要反复揣摩"));
    body.AppendChild(BulletPara("问答部分先自己做答：每个问题先自己想3分钟，再看原文，比直接阅读效果更好"));

    body.AppendChild(SubHeading("配套资源说明", 2));
    body.AppendChild(BulletPara("《附录工具包》：访谈脚本、验证模板、优先级矩阵、复盘表，配合各章使用"));
    body.AppendChild(BulletPara("《完整课程包》：包含教学设计、PPT、学员手册（本书）、讲师手册"));

    body.AppendChild(SubHeading("实践练习提示", 2));
    body.AppendChild(BodyPara("每章后的思考题建议落在纸面上写下来，而非只在脑子里想——写的过程中会发现自己其实没想清楚。案例库的建立需要时间，建议从今天的项目开始记录，不要等\"攒够经验\"再开始。"));

    body.AppendChild(PageBreak());

    // ===== CHAPTER 3: LEARNING PATH =====
    body.AppendChild(ColorBlock("第三章  学习路径图", colorAccent));
    body.AppendChild(BodyPara(""));

    body.AppendChild(SubHeading("PART 1：挖掘与验证的方法", 2));
    body.AppendChild(BodyPara("10章内容结构：围绕\"隐性需求的两层结构\"这一公理展开，从\"发现信号\"到\"验证假设\"到\"排错复盘\"的完整闭环。"));

    string[] part1Ch = {
        "第1章  签字那一刻，他签的不是需求，是免责声明",
        "第2章  需求分两层，一层能写进合同，一层只能靠猜",
        "第3章  访谈不是收集信息，是让对方说漏嘴",
        "第4章  决策链里谁说了算，和谁签字画押，常常不是一个人",
        "第5章  风险规避不是一种性格，是一种岗位反应",
        "第6章  验证实验不是证明你对了，是证明你还没错",
        "第7章  隐性成功标准，是客户不会写在验收单上但决定续约的那条线",
        "第8章  需求优先级矩阵排的不是功能，是谁的政治风险最高",
        "第9章  把隐性需求摆上桌面，是一次拆弹，不是一次汇报",
        "第10章 复盘不是找失败原因，是找当时明明看到却没当回事的那个信号",
    };
    foreach (var ch in part1Ch) {
        var cp = new Paragraph();
        var cpPr = new ParagraphProperties();
        cpPr.AppendChild(new Indentation { Left = "360" });
        cpPr.AppendChild(new SpacingBetweenLines { Before = "60", After = "60", Line = "280", LineRule = LineSpacingRuleValues.Auto });
        cp.AppendChild(cpPr);
        var cRPr = new RunProperties();
        cRPr.AppendChild(new RunFonts { EastAsia = fontEA, Ascii = fontAscii, HighAnsi = fontAscii });
        cRPr.AppendChild(new Color { Val = "444444" });
        cRPr.AppendChild(new FontSize { Val = "22" });
        cRPr.AppendChild(new FontSizeComplexScript { Val = "22" });
        var cRun = new Run(); foreach (var c in cRPr.ChildElements) cRun.AppendChild(c.CloneNode(true));
        cRun.AppendChild(new Text(ch) { Space = SpaceProcessingModeValues.Preserve });
        cp.AppendChild(cRun);
        body.AppendChild(cp);
    }

    body.AppendChild(SubHeading("PART 1 各章学习目标", 2));
    body.AppendChild(BulletPara("第1-2章：理解\"两层需求\"公理，建立读文档时的防御性阅读习惯"));
    body.AppendChild(BulletPara("第3-5章：掌握挖掘隐性需求的访谈技巧和决策链分析方法"));
    body.AppendChild(BulletPara("第6-8章：学会设计验证实验和优先级排序，建立\"排错\"而非\"证明\"的验证思维"));
    body.AppendChild(BulletPara("第9-10章：掌握说出隐性需求的时机和方法，建立案例复盘习惯"));

    body.AppendChild(SubHeading("PART 2：这份工作最终练的是什么", 2));
    body.AppendChild(BodyPara("5章内容结构：围绕\"接住没说出口的那句话\"这一门槛公理展开，处理的是挖隐性需求工作的心态代价和职业风险。"));

    string[] part2Ch = {
        "第1章  你不是在为客户的需求负责，是在为他没说出口的那句话负责",
        "第2章  被客户当场否定的方案，常常是被验证对了的方案",
        "第3章  案例库是你的记忆，不是你的战绩单",
        "第4章  产品、销售、客户成功抢的不是各自的指标，是谁先看懂这单生意",
        "第5章  这份工作最终练的不是提问技巧，是你对人愿不愿意继续抱有耐心",
    };
    foreach (var ch in part2Ch) {
        var cp = new Paragraph();
        var cpPr = new ParagraphProperties();
        cpPr.AppendChild(new Indentation { Left = "360" });
        cpPr.AppendChild(new SpacingBetweenLines { Before = "60", After = "60", Line = "280", LineRule = LineSpacingRuleValues.Auto });
        cp.AppendChild(cpPr);
        var cRPr = new RunProperties();
        cRPr.AppendChild(new RunFonts { EastAsia = fontEA, Ascii = fontAscii, HighAnsi = fontAscii });
        cRPr.AppendChild(new Color { Val = "444444" });
        cRPr.AppendChild(new FontSize { Val = "22" });
        cRPr.AppendChild(new FontSizeComplexScript { Val = "22" });
        var cRun = new Run(); foreach (var c in cRPr.ChildElements) cRun.AppendChild(c.CloneNode(true));
        cRun.AppendChild(new Text(ch) { Space = SpaceProcessingModeValues.Preserve });
        cp.AppendChild(cRun);
        body.AppendChild(cp);
    }

    body.AppendChild(SubHeading("PART 2 各章学习目标", 2));
    body.AppendChild(BulletPara("第1章：区分\"合同责任\"和\"这份工作的真正责任\"，建立对着人而非对着文档工作的意识"));
    body.AppendChild(BulletPara("第2章：理解\"被反驳\"和\"被判断错\"不是同一回事，建立等待的耐心"));
    body.AppendChild(BulletPara("第3章：建立以\"差点漏掉什么\"为记录维度的案例库习惯"));
    body.AppendChild(BulletPara("第4章：理解三个团队信息互补性，学会在关键节点推动三方同步"));
    body.AppendChild(BulletPara("第5章：警惕挖得越深越容易看轻人的职业风险，保持对人的耐心"));

    body.AppendChild(PageBreak());

    // ===== CHAPTER 4: FULL CONTENT - PART 1 =====
    body.AppendChild(ColorBlock("第四章  正文内容", colorAccent));
    body.AppendChild(BodyPara(""));
    body.AppendChild(PartBanner("PART 1  挖掘与验证的方法", "C41E3A"));
    body.AppendChild(BodyPara(""));

    // P1 Ch1
    body.AppendChild(Heading("第一章", "签字那一刻，他签的不是需求，是免责声明", "客户不是在描述他要什么，是在给自己留后路"));
    body.AppendChild(BodyPara("那份采购意向书我记得很清楚，客户方的技术总监签字前问了我一句：\"如果上线之后效果不达标，责任怎么界定？\"我当时以为这是走流程，现在回头看，那才是整场谈判里最真实的一句话。他后面在需求确认表上写的那些条款——响应时间、功能清单、并发指标——都是给这句话打的补丁。"));
    body.AppendChild(BodyPara("我们习惯把客户提交的需求文档当成他真正想要的东西，按照文档去设计、去交付、去验收，然后发现验收通过了，客户却不满意，或者满意了却不续约。原因不在文档写得不够细，在于文档从来不是需求本身，是需求经过一道\"这份东西我能不能为它签字负责\"的过滤器之后剩下的部分。客户在写需求文档的时候，脑子里同时运行着两套逻辑：一套是\"我们业务上真正需要什么\"，另一套是\"这份文档一旦出问题，我要怎么解释我当时是怎么想的\"。第二套逻辑几乎总是赢，因为对个体来说，一次业务优化失败的成本，远远小于一次\"决策失误\"被写进年终总结的成本。"));
    body.AppendChild(BodyPara("有意思的是，这个过滤器不是恶意的，也不是故意隐瞒。大多数客户方的对接人自己也没意识到，他提交给你的需求文档，早就被这套自我保护机制筛过一遍。你去问他\"还有别的顾虑吗\"，他会诚实地说\"没有了\"，因为在他自己的认知里，那些顾虑已经变成了文档里的某个条款。"));
    body.AppendChild(BodyPara("挖掘隐性需求的第一步，不是去问客户\"你还有什么没说的\"，这个问题客户自己也答不上来。第一步是承认一个前提：你拿到手的需求文档，本质上是一份\"如果出问题我怎么解释\"的自我保护清单，而不是一份\"我业务上真正需要什么\"的说明书。带着这个前提去读文档，你会开始留意那些写得特别具体、特别量化的条款——这类条款背后往往藏着一次具体的历史事故。"));
    body.AppendChild(SubHeading("本章小结", 3));
    body.AppendChild(BulletPara("需求文档是自我保护清单，不是需求说明书"));
    body.AppendChild(BulletPara("两套逻辑同时运行：业务需求 vs 解释成本"));
    body.AppendChild(BulletPara("写得特别具体量化的条款背后藏着历史事故"));
    body.AppendChild(SubHeading("思考题", 3));
    body.AppendChild(BulletPara("回顾你最近一个项目：客户在需求文档里哪条条款写得最具体？这个具体性背后可能藏着什么？"));
    body.AppendChild(PageBreak());

    // P1 Ch2
    body.AppendChild(Heading("第二章", "需求分两层，一层能写进合同，一层只能靠猜", "写进合同的需求负责成交，没写的那层负责续约"));
    body.AppendChild(BodyPara("有个客户成功团队的同事跟我讲过一个案例，一家做工业设备的公司买了他们的数字化管理系统，合同里写得清清楚楚：设备联网率、故障预警准确率、维护成本下降比例，三项指标全部达标，验收通过，可续约季度到了，对方迟迟不签，最后给出的理由是\"我们内部对这套系统的接受度不高\"。这个理由笼统得像一句客套话，但如果你去问一句\"具体是哪个岗位接受度不高\"，往往能听到真正的原因——设备维护班组的老师傅觉得这套系统在\"教他们怎么修设备\"。"));
    body.AppendChild(BodyPara("这就是我说的两层需求。第一层是能写进合同、能被量化、能在验收会上被逐条打钩的需求，我们叫它\"交付层需求\"。第二层是决定这个客户会不会续约、会不会推荐、会不会在内部帮你说话的需求，它通常和权力、面子、岗位安全感、部门之间的关系有关，我们叫它\"存续层需求\"。这两层需求几乎不重叠，交付层需求负责让你签下这一单，存续层需求负责这个客户能不能留下来。"));
    body.AppendChild(BodyPara("绝大多数产品和销售团队把全部精力放在满足第一层，因为第一层是可以被写下来、被度量、被验收的，而第二层因为看不见、量不出来，几乎被整个行业系统性地忽视了。"));
    body.AppendChild(BodyPara("存续层需求怎么找，没有标准答案，但有一个可靠的入口：去看这个客户组织里，谁的岗位价值会因为这次采购而发生变化。数字化系统上线，通常意味着某些岗位的信息优势被削弱，某些岗位的工作被系统替代了一部分。"));
    body.AppendChild(BodyPara("我自己在判断存续层需求的时候，有一个笨办法，就是画一张组织关系图，不是画谁向谁汇报，是画这次采购决定之后，每个相关岗位的\"话语权\"会往上走还是往下走。话语权往下走的人，哪怕他在会议上一言不发，甚至嘴上说着\"全力配合\"，这单生意最后能不能存续，很大程度取决于你有没有想办法在流程设计里给他留一个体面的位置。"));
    body.AppendChild(SubHeading("本章小结", 3));
    body.AppendChild(BulletPara("交付层需求负责签单，存续层需求负责续约"));
    body.AppendChild(BulletPara("没有一个岗位的考核指标直接写着\"你有没有理解客户没说出口的顾虑\""));
    body.AppendChild(BulletPara("画\"话语权变化图\"是找到存续层需求的有效入口"));
    body.AppendChild(SubHeading("思考题", 3));
    body.AppendChild(BulletPara("你目前正在跟进的客户里，哪个岗位的话语权最可能因为这次采购往下走？你打算怎么给他留一个体面的位置？"));
    body.AppendChild(PageBreak());

    // P1 Ch3
    body.AppendChild(Heading("第三章", "访谈不是收集信息，是让对方说漏嘴", "你问的问题越标准，得到的答案越没用"));
    body.AppendChild(BodyPara("有一次陪一位资深销售去见客户，我准备了一整套结构化访谈问题，痛点、目标、预算、决策流程，一条一条问下去，对方回答得也很标准，效率、成本、竞争力，这几个词轮流出现。访谈结束后我觉得挺顺利，那位销售却皱着眉说这单还差得远。他后来跟我讲了一句话，我一直记着：\"你问的是他准备好回答的问题，他当然给你准备好的答案。\""));
    body.AppendChild(BodyPara("我们受的访谈训练大多来自用户调研方法论，强调结构化、强调追问、强调不要引导对方，这些方法在了解客户表层需求的时候确实有效，但对隐性需求几乎失效，因为隐性需求恰恰是客户没有准备好回答的部分。你越是用标准化的问题去问，对方越是用标准化的答案去应付。真正有效的访谈，目标不是让对方完整地回答你的问题，是在对话的某个自然的缝隙里，让他说出一句他自己都没准备说的话。"));
    body.AppendChild(BodyPara("有个方法我用了很多年，效果一直不错：把问题从\"你需要什么\"换成\"你们现在是怎么做这件事的\"。前一种问法逼着对方在头脑里做一次总结、提炼、包装的工作，答案天然是加工过的。后一种问法只是让他描述一个具体的操作过程，而人在描述具体过程的时候，会不自觉地带出真实的情绪和抱怨。"));
    body.AppendChild(BodyPara("追问的时机同样重要。大多数人被问到敏感问题会本能地用一个笼统的答案挡回去，比如\"整体上还是挺配合的\"，这时候如果你顺着这句话往下追问\"具体是哪个环节配合得比较好\"，对方往往会愣一下——这个迟疑本身就是信息，比任何一句回答都值钱。"));
    body.AppendChild(BodyPara("访谈快结束的时候，我习惯留一个不太正式的尾巴，比如收拾资料的时候随口问一句\"对了，这套系统真正上线之后，你们内部谁会最不适应\"，这句话看起来是闲聊，因为访谈的\"正式感\"已经解除了，对方的防备也松了一点，很多次最关键的信息就是在这个松弛的瞬间冒出来的。"));
    body.AppendChild(SubHeading("本章小结", 3));
    body.AppendChild(BulletPara("把\"你需要什么\"换成\"你们现在是怎么做的\""));
    body.AppendChild(BulletPara("接住笼统的答案，往具体里追"));
    body.AppendChild(BulletPara("访谈尾巴的松弛瞬间是最关键信息的来源"));
    body.AppendChild(SubHeading("思考题", 3));
    body.AppendChild(BulletPara("用\"你们现在是怎么做的\"重新设计你下一次客户访谈的开场问题，并记录对方的回答与以往有何不同。"));
    body.AppendChild(PageBreak());

    // P1 Ch4
    body.AppendChild(Heading("第四章", "决策链里谁说了算，和谁签字画押，常常不是一个人", "你签合同的那个人，未必是那个真正会用你产品的人"));
    body.AppendChild(BodyPara("有一单生意签得异常顺利，采购经理很爽快，条款几乎没怎么谈就通过了，我们当时都觉得遇上了理想客户。上线三个月，使用率低得离谱，后来才弄明白，真正天天要用这套系统的是一线的运营团队，而采购经理只是走流程签字的人，他甚至没有仔细问过一线团队的意见。"));
    body.AppendChild(BodyPara("企业客户内部的决策链，很少是一个人说了算，通常至少有三种角色同时存在：一种是有预算审批权、能拍板签字的人，我们叫他决策人；一种是真正每天要用这套产品、感受最直接的人，我们叫他使用者；还有一种是虽然不掌握预算，但在内部有非正式话语权、能影响决策人判断的人，我们叫他影响者。这三种角色经常不重合，甚至彼此的利益诉求是冲突的。"));
    body.AppendChild(BodyPara("我见过一个很典型的错配案例：一家零售企业采购一套库存管理系统，决策人是财务总监，他最在意的是库存周转率的数据能不能好看。真正操作系统的是仓库主管，他最在意的是新系统会不会比原来那套Excel表格更麻烦。产品团队按照财务总监的诉求做了一套数据非常漂亮的看板，仓库主管却因为操作流程繁琐消极抵抗，最后数据看板里的数字全靠人工估算填进去。"));
    body.AppendChild(BodyPara("识别决策链角色，不能只靠对方递过来的组织架构图，那份架构图反映的是正式权力，不是真实的话语分布。比较可靠的办法是在每一次会议里留意谁在说话时会看向谁的眼神，谁提出的意见会被反复引用，谁一开口大家就安静下来听。"));
    body.AppendChild(SubHeading("本章小结", 3));
    body.AppendChild(BulletPara("决策人/使用者/影响者，三种角色经常不重合"));
    body.AppendChild(BulletPara("只服务决策人，产品交付出来使用者不买账"));
    body.AppendChild(BulletPara("主动去和使用者层面的人单独聊，决策人和影响者的话经过了层层包装"));
    body.AppendChild(SubHeading("思考题", 3));
    body.AppendChild(BulletPara("你目前项目的决策链里，使用者是谁？他有没有出现在正式的需求会议上？他可能的隐性顾虑是什么？"));
    body.AppendChild(PageBreak());

    // P1 Ch5
    body.AppendChild(Heading("第五章", "风险规避不是一种性格，是一种岗位反应", "他不是谨慎，他是怕担责任"));
    body.AppendChild(BodyPara("有个客户对接人，方案里但凡有一点点不确定性，哪怕是极小的概率，他都要反复确认、层层加码保险条款，团队里私下叫他\"谨慎先生\"。后来我们才知道，他前一份工作是因为一次系统升级出了故障被追责，从那以后几乎变了一个人。这不是性格，是岗位创伤留下的反应模式，而这种反应模式，恰恰是很多客户需求里最难被理解、也最容易被误判为\"难搞\"的部分。"));
    body.AppendChild(BodyPara("我们习惯把客户表现出的谨慎、犹豫、反复确认理解成个人性格特质，觉得这个人天生保守、不好合作，然后在方案设计里绕开他，或者干脆换个更容易沟通的对接人。这个判断经常是错的。风险规避倾向绝大多数时候不是性格决定的，是岗位曾经承受过的责任压力决定的。"));
    body.AppendChild(BodyPara("挖掘风险规避偏好，有效的做法不是去问\"你担心什么风险\"，这个问题太直接，对方大概率会用一个体面的答案敷衍过去。更好的做法是观察他对哪一类问题反应最激烈，哪怕这类问题在你看来无关紧要。如果一个人对交付时间的延误容忍度很高，却对一次小小的数据误差反应极其强烈，这个反差本身就是信号。"));
    body.AppendChild(BodyPara("我记得有一次给一家制造企业做方案，对方的生产总监反复问一个问题：\"如果新系统出问题，能不能立刻切回老系统？\"这个问题问了不下五次，我们一开始觉得他有点小题大做，后来了解到，他两年前主导过一次生产管理系统切换，因为没有回退方案，出问题之后整整停产两天。知道这段历史之后，我们把回退方案单独做成一份文档，详细到每一步的操作时间。风险规避需求一旦被真正接住，客户表现出来的\"难搞\"往往会消失。"));
    body.AppendChild(SubHeading("本章小结", 3));
    body.AppendChild(BulletPara("风险规避背后有一段具体的历史，追责留下的岗位反应模式"));
    body.AppendChild(BulletPara("观察对哪类问题反应最激烈，是找到真正雷区的有效方式"));
    body.AppendChild(BulletPara("接住风险规避需求，需要的不是技术方案，是有人认真对待他付出过代价的那件事"));
    body.AppendChild(SubHeading("思考题", 3));
    body.AppendChild(BulletPara("你最近遇到的最\"难搞\"的客户，他的反复确认集中在哪类问题上？这个集中性背后可能藏着什么？"));
    body.AppendChild(PageBreak());

    // P1 Ch6
    body.AppendChild(Heading("第六章", "验证实验不是证明你对了，是证明你还没错", "一次成功的验证，是让你安心地继续往前走一小步"));
    body.AppendChild(BodyPara("有个产品经理跟我说过一句挺扎心的话，他做了一个耗时三周的用户调研，最后写出的报告结论跟他调研前的假设一模一样，团队里有人开玩笑说这三周白花了。他后来想通一件事——如果调研结论和假设不一样，才叫白花时间吗？其实不是，调研的价值从来不是证明假设有多正确，是排除假设错得离谱的可能性。"));
    body.AppendChild(BodyPara("我们对\"验证\"这个词有一个普遍的误解，觉得验证的目的是证明我们的判断是对的，于是设计验证实验的时候，会不自觉地往能证明自己对的方向去引导。这种验证做出来的结果再漂亮，都是自我欺骗式的确认，它没有真正降低任何风险。"));
    body.AppendChild(BodyPara("真正有价值的验证实验，目标从来不是证明\"我猜对了\"，是证明\"我还没有明显猜错\"。这两者的区别决定了实验的设计方式完全不同。证明猜对了的实验，会选择最支持假设的场景和样本；证明还没猜错的实验，会主动选择最有可能推翻假设的场景和样本。"));
    body.AppendChild(BodyPara("验证实验的成本控制也是一门学问，很多团队一提到验证就想到大规模灰度发布或者完整的用户调研，成本高、周期长，反而错过了在早期用极低成本排除风险的机会。我用得比较多的是\"最小暴露实验\"，就是用最小的动作暴露出隐性需求存不存在。"));
    body.AppendChild(SubHeading("本章小结", 3));
    body.AppendChild(BulletPara("验证的目标是\"还没猜错\"，不是\"猜对了\""));
    body.AppendChild(BulletPara("排错式验证选择最严苛的场景，证明式验证选择最支持的场景"));
    body.AppendChild(BulletPara("最小暴露实验：用一句话、一封邮件、一次闲聊排除风险"));
    body.AppendChild(SubHeading("思考题", 3));
    body.AppendChild(BulletPara("你目前方案里最有争议的一条假设是什么？能不能设计一个最小暴露实验，在正式投入之前先验证一下？"));
    body.AppendChild(PageBreak());

    // P1 Ch7
    body.AppendChild(Heading("第七章", "隐性成功标准，是客户不会写在验收单上但决定续约的那条线", "满分的验收单和续约的决定，经常是两回事"));
    body.AppendChild(BodyPara("验收单上的分数衡量的是\"这套东西是不是按合同约定交付了\"，续约决定衡量的是另一件完全不同的事，叫\"这套东西有没有让我在组织里更好过\"。这两件事经常没什么关系，验收单是给系统打分，续约决定是给一个人这段时间的处境打分。"));
    body.AppendChild(BodyPara("隐性成功标准落地下来其实就是几类具体的东西：这套系统上线之后，负责它的那个人在公司里的处境有没有变好；他日常的工作负担有没有真的减轻；他和其他部门的关系有没有因为这次采购变得更紧张。这些标准从来不会出现在验收单的打分项里，但它们才是客户心里真正给这个项目打分的地方。"));
    body.AppendChild(BodyPara("我见过一个反直觉的案例：一套客服系统上线后各项技术指标都达标，验收全票通过，但半年后客户的续约意愿明显下降。深入了解才发现，原因出在这套系统效率太高，导致客服团队原本需要的人力比预期少了三分之一，客服主管虽然嘴上认可系统好用，心里却在担心自己团队会不会因为\"人效提升\"被裁减。技术指标越漂亮，反而让他越不安。"));
    body.AppendChild(BodyPara("找隐性成功标准，一个可靠的入口是去问客户对接人一个问题：\"这个项目做成之后，对你来说最理想的结果是什么样子？\"注意这个问题问的不是\"系统达到什么效果\"，是\"对你来说\"。"));
    body.AppendChild(SubHeading("本章小结", 3));
    body.AppendChild(BulletPara("验收单衡量交付层，续约决定衡量存续层"));
    body.AppendChild(BulletPara("技术指标漂亮和客户处境变好，经常是两件方向不同的事"));
    body.AppendChild(BulletPara("问\"对你来说最理想的结果是什么样子\"，而非\"系统达到什么效果\""));
    body.AppendChild(SubHeading("思考题", 3));
    body.AppendChild(BulletPara("你最近一个项目的验收单分数是多少？你有没有问过那个签字的人，这段时间他自己在公司里的处境有没有因为这个项目发生变化？"));
    body.AppendChild(PageBreak());

    // P1 Ch8
    body.AppendChild(Heading("第八章", "需求优先级矩阵排的不是功能，是谁的政治风险最高", "最先做的那个功能，往往不是最有用的，是最保险的"));
    body.AppendChild(BodyPara("有一次做需求优先级排序，团队按照标准的\"重要性/紧急性\"矩阵把功能列了一遍，排在最前面的是数据分析看板，因为它对业务价值的提升最大。方案提给客户之后，对方却坚持要求先做权限管理模块，理由含糊，说是\"更基础\"。后来才明白，客户所在的部门刚经历过一次数据泄露事件被内部通报，权限管理对他们来说不是\"更基础\"，是\"更安全\"——这个安全指的是他这个岗位不会再因为类似事件被问责的安全。"));
    body.AppendChild(BodyPara("传统的需求优先级排序方法，基本都建立在\"价值\"和\"成本\"两个维度上，价值高、成本低的功能先做，这套逻辑在纯粹理性决策的世界里没问题，但现实中的优先级排序几乎从来不是纯理性的，因为每一个功能背后都站着一个具体的人，而这个人在决定优先级的时候，第一反应往往不是\"这个功能能带来多少业务价值\"，是\"这个功能如果不做，我会不会因此承担风险\"。"));
    body.AppendChild(BodyPara("我后来在做优先级矩阵的时候，会额外加一个维度，姑且叫它\"责任敞口\"，衡量的是如果这个功能不优先做，客户方相关负责人需要承担多大的解释成本。责任敞口高的功能，即便业务价值排名不靠前，也应该往前排，因为它解决的不是效率问题，是让某个具体的人不用在会议上被追问\"为什么这个还没做\"。"));
    body.AppendChild(BodyPara("判断责任敞口，一个实用的办法是回到前面讲的决策链角色分析，去问一句\"如果这个功能三个月内做不出来，谁会被问到，他要怎么解释\"。能清晰回答出\"谁会被问、怎么解释\"的功能，责任敞口就高；答不上来、觉得\"应该没什么大问题\"的功能，责任敞口就低。"));
    body.AppendChild(SubHeading("本章小结", 3));
    body.AppendChild(BulletPara("优先级排序的三个维度：业务价值 + 实现成本 + 责任敞口"));
    body.AppendChild(BulletPara("责任敞口解决的是让具体的人不被问责的问题"));
    body.AppendChild(BulletPara("\"谁会被问、怎么解释\"是判断责任敞口的有效问题"));
    body.AppendChild(SubHeading("思考题", 3));
    body.AppendChild(BulletPara("用三个维度重新审视你目前的需求列表：哪个功能的\"责任敞口\"最高？谁会因为它没做而面临解释压力？"));
    body.AppendChild(PageBreak());

    // P1 Ch9
    body.AppendChild(Heading("第九章", "把隐性需求摆上桌面，是一次拆弹，不是一次汇报", "说出客户没说的那句话，是这行最冒险也最值钱的时刻"));
    body.AppendChild(BodyPara("第一次在正式会议上把一个隐性需求直接说出来，是我入行第三年的事。当时判断出客户方的技术负责人真正抵触的不是新系统，是担心自己团队的价值被削弱，我在方案汇报里加了一句\"我们理解，这次升级不是要替代原有团队的专业判断，而是把重复性的工作交给系统\"，这句话不长，会议室里那位技术负责人的表情却明显松了一下，后来那单生意推进得异常顺利。"));
    body.AppendChild(BodyPara("把隐性需求摆上桌面，风险在于你猜的不一定对，而一旦猜错，说出来反而会显得冒犯。所以说出隐性需求这件事，从来不是直接把猜测和盘托出，而是用一种留有余地的方式先探一下水温，常见的做法是把猜测包装成一个开放式的假设。"));
    body.AppendChild(BodyPara("时机的选择同样重要。把隐性需求摆上桌面，最好的时机不是在正式的方案汇报会上，那种场合所有人都端着，谁也不会当场承认自己的顾虑；比较好的时机是一对一的非正式沟通，或者是方案还在草案阶段、双方都还没有正式表态的阶段。"));
    body.AppendChild(BodyPara("说出客户没说的那句话，永远是一次拆弹，拆对了，信任关系会跳跃式地建立起来；拆错了，可能会前功尽弃。但值得冒这个险，因为大多数竞争对手根本不会走到这一步，而你愿意去猜、去说、去承担说错的风险，这份意愿本身就是客户选择继续信任你的理由。"));
    body.AppendChild(SubHeading("本章小结", 3));
    body.AppendChild(BulletPara("把猜测包装成开放式假设，而非直接陈述"));
    body.AppendChild(BulletPara("最好的时机是一对一非正式沟通，或方案草案阶段"));
    body.AppendChild(BulletPara("拆弹的意愿本身就是差异化的信任建立方式"));
    body.AppendChild(SubHeading("思考题", 3));
    body.AppendChild(BulletPara("你目前对客户隐性需求的判断是什么？有没有找到合适的时机和方式把它摆上桌面？"));
    body.AppendChild(PageBreak());

    // P1 Ch10
    body.AppendChild(Heading("第十章", "复盘不是找失败原因，是找当时明明看到却没当回事的那个信号", "每一次错配，之前都有一个被忽略的细节"));
    body.AppendChild(BodyPara("有一单没能续约的项目，我们做了一次复盘会，大家列了一堆表面原因——市场环境变化、客户预算收缩、竞品价格更低，每一条听起来都合理，也都能让人心安理得地把责任归给外部因素。会议快结束的时候，我把当初的访谈记录翻出来重新看了一遍，发现在项目启动阶段的一次沟通里，客户方对接人随口说过一句\"我们领导对这类系统一直有点保留意见\"，这句话当时被我们当成客套话一带而过，压根没写进正式的风险清单，回头看，那才是这个项目最后没能续约的真正伏笔。"));
    body.AppendChild(BodyPara("绝大多数复盘会做的其实不是复盘，是找一个能让所有人都心安理得的失败原因。把复盘停在这一层，等于放弃了这次复盘本该带来的价值——找到那个当时其实已经出现过、但被忽略掉的信号。"));
    body.AppendChild(BodyPara("这类信号有一个共同的特点，出现的时候几乎都很轻，一句随口的话、一次没有展开的犹豫、一个没有被追问的模糊回答，正因为轻，才容易被忽略，也正因为轻，才最接近真实——如果客户真的很在意某件事，反而不太会在初次沟通里就直接摊开讲，会用一句看似不经意的话先试探一下你的反应。"));
    body.AppendChild(BodyPara("建立案例库和复盘表的意义正在这里，不是记录\"这单赢了\"\"那单输了\"这么简单的结果，是把每一次项目里那些轻描淡写却最后被证明关键的信号一条条记下来，形成一份属于自己的信号词典。做的项目越多，你会发现某些表达方式反复出现。"));
    body.AppendChild(SubHeading("本章小结", 3));
    body.AppendChild(BulletPara("复盘找的是\"当时明明看到却没当回事的信号\"，不是失败原因"));
    body.AppendChild(BulletPara("信号的特点：轻描写、不经意、随口一说"));
    body.AppendChild(BulletPara("信号词典需要靠自己一个个真实项目攒出来"));
    body.AppendChild(SubHeading("思考题", 3));
    body.AppendChild(BulletPara("回顾你最近一次失败或错配的项目：当时有没有哪个\"轻\"的信号出现过？你有没有接住？"));
    body.AppendChild(PageBreak());

    // ===== PART 2 BANNER =====
    body.AppendChild(PartBanner("PART 2  这份工作最终练的是什么", "8B0000"));
    body.AppendChild(BodyPara(""));

    // P2 Ch1
    body.AppendChild(Heading("第一章", "你不是在为客户的需求负责，是在为他没说出口的那句话负责", "满足需求是及格线，接住没说出口的那句话才是这份工作的门槛"));
    body.AppendChild(BodyPara("有个刚入行的产品经理问我，把需求文档里的每一条都实现了，是不是就算尽到责任了。这个问题我想了很久，最后的答案是，尽到的是合同责任，没尽到的是这份工作真正的责任。合同责任是对着一份文档负责，这份工作真正的责任，是对着那个坐在你对面、把一部分真心话咽回去的人负责。"));
    body.AppendChild(BodyPara("这两种责任经常被混为一谈，因为大多数团队的考核标准只承认第一种，需求实现率、验收通过率、上线时间，这些指标衡量的都是你和文档之间的关系，没有一个指标衡量你和那个人之间的关系。时间久了，很容易养成一种习惯，把工作理解成\"完成文档\"而不是\"理解一个人\"。"));
    body.AppendChild(BodyPara("我自己是从一次很难堪的经历里想明白这件事的。有个客户在项目中期突然情绪很大，指责我们完全没理解他们的需求，我当时很委屈。后来冷静下来想，他愤怒的点从来不是那份文档，是他之前跟我提过一句\"我们团队现在压力很大，希望这个项目能减轻一点负担\"，这句话我记在了会议纪要里，但没有真正把它当成一个需要被回应的诉求，只当成一句场面话。那次之后我才明白，客户很多时候不是在气产品做得不够好，是在气那句话说出口之后，没人真正接住。"));
    body.AppendChild(BodyPara("接住没说出口的那句话，不是要求你把每一句客套话都当成金科玉律去执行，那样反而会让工作变得混乱。这份责任更接近一种筛选的能力——在客户说的所有话里，分辨出哪些是场面话，哪些是场面话包装下的真实诉求，然后至少让对方感觉到，那句真实的诉求，你听见了。"));
    body.AppendChild(SubHeading("本章小结", 3));
    body.AppendChild(BulletPara("合同责任是对着文档，这份工作的真正责任是对着人"));
    body.AppendChild(BulletPara("客户气的是那句话说出来之后，没人接住"));
    body.AppendChild(BulletPara("每次复盘多问自己一句：客户这段时间哪句话我当时没太当回事，却是他真正在意的？"));
    body.AppendChild(SubHeading("思考题", 3));
    body.AppendChild(BulletPara("回想你最近一个客户：他说过的哪句话你当时没接住，现在想起来才发现那是他的真心话？"));
    body.AppendChild(PageBreak());

    // P2 Ch2
    body.AppendChild(Heading("第二章", "被客户当场否定的方案，常常是被验证对了的方案", "他反驳你的那一刻，可能正是你说中了他不想承认的事"));
    body.AppendChild(BodyPara("第一次被客户当场否定方案，我印象特别深，那是一次内部提案会，我把判断出的隐性需求直接写进了方案的开篇，客户方负责人当场脸色就变了，说我们完全误解了他们的情况。当时我以为这单彻底黄了，散会之后垂头丧气了好几天。三周之后对方主动联系我们，说想重新讨论那份方案，理由是他回去想了很久，觉得我们说的其实有道理。"));
    body.AppendChild(BodyPara("这次经历让我明白一件事，被反驳和被判断错了，不是同一回事。人在被说中真心话的那一刻，第一反应经常不是认同，是防御，因为承认\"你说得对\"等于承认自己身上有一部分之前一直在回避的东西，这种承认对大多数人来说都需要时间。"));
    body.AppendChild(BodyPara("这不代表所有被否定的方案都是对的，把每一次反驳都自我安慰成\"这是被说中了\"，是一种更危险的自欺。区分这两种情况，我用的一个笨办法是看反驳的具体内容：如果对方反驳的是事实层面，比如\"你们说的这个数据不对\"，这种反驳大概率就是真的判断错了；如果对方反驳的是情绪层面，比如语气突然变冲、反复强调\"你们不了解我们的情况\"，却说不出具体哪里错了，这种反驳更接近防御性的情绪反应。"));
    body.AppendChild(BodyPara("我现在的做法是，宁可承担被当场否定的风险，也要把判断说出来，因为哪怕当场被否定，这句话也已经种进对方心里，往后的日子里，他自己会有时间慢慢消化。比起说得漂亮但没有触及真相的方案，我更相信一份被反驳过的、真实的判断，最终留下的影响力更持久。"));
    body.AppendChild(SubHeading("本章小结", 3));
    body.AppendChild(BulletPara("被反驳和被判断错，不是同一回事"));
    body.AppendChild(BulletPara("事实层面反驳=真的判断错；情绪层面反驳=可能说中了"));
    body.AppendChild(BulletPara("被反驳过的真实判断，比顺滑的接受更持久"));
    body.AppendChild(SubHeading("思考题", 3));
    body.AppendChild(BulletPara("你最近一次被客户当众否定的方案是什么？现在重新回想，那个否定里有没有情绪层面的防御成分？"));
    body.AppendChild(PageBreak());

    // P2 Ch3
    body.AppendChild(Heading("第三章", "案例库是你的记忆，不是你的战绩单", "你记住的不是赢了哪一单，是当时哪里差点看漏了"));
    body.AppendChild(BodyPara("团队里以前有个习惯，每单结束都要写一份复盘，标题基本都是\"XX项目成功经验总结\"，写法也很固定。这种文档存了一大堆，真正遇到实际问题的时候，很少有人会回去翻这些文档，因为里面写的都是结果好看之后倒推出来的经验，读起来正确，用起来空洞。"));
    body.AppendChild(BodyPara("后来我们改了写法，不再强调\"成功经验\"，改成专门记录每单里那个\"差点被忽略、后来证明很关键\"的具体信号，比如某次会议上客户随口提的一句话，某次沟通里对方突然的沉默，某个被我们当时判断为无关紧要、后来证明恰恰是关键的细节。这种记录方式远没有\"成功经验总结\"读起来体面，甚至有点像在记录自己曾经的疏忽，但恰恰是这份不体面，让它变得真正有用。"));
    body.AppendChild(BodyPara("案例库和战绩单最大的区别在于，战绩单的功能是证明你很厉害，供别人参考、供自己邀功；案例库的功能是提醒你自己曾经在哪里差点判断错，供未来的自己少走一次弯路。前者面向外部，是给别人看的；后者面向自己，是给自己用的。"));
    body.AppendChild(BodyPara("我自己整理案例库的习惯是，每次记录都强迫自己写一句\"这次差点漏掉的是什么\"，哪怕这单最后结果是好的，也要老老实实找出中间某个被侥幸绕过去的风险点。这个习惯坚持下来之后，翻案例库的时候会有一种很奇怪的感受，不是骄傲，是一种持续的、轻微的警觉感。"));
    body.AppendChild(SubHeading("本章小结", 3));
    body.AppendChild(BulletPara("案例库记\"差点漏掉什么\"，战绩单记\"赢在哪里\""));
    body.AppendChild(BulletPara("让人读完心安理得的复盘，大概率什么都没记住"));
    body.AppendChild(BulletPara("每条记录写一句\"这次差点漏掉的是什么\""));
    body.AppendChild(SubHeading("思考题", 3));
    body.AppendChild(BulletPara("从今天开始，建立你自己的案例库，第一条记录：最近一个项目里，哪个\"轻\"的信号你差点忽略？"));
    body.AppendChild(PageBreak());

    // P2 Ch4
    body.AppendChild(Heading("第四章", "产品、销售、客户成功抢的不是各自的指标，是谁先看懂这单生意", "三个团队看到的是同一个客户的三张脸"));
    body.AppendChild(BodyPara("有一次三方开会，销售抱怨产品交付得太慢影响了签单节奏，产品抱怨销售承诺了太多超出能力范围的功能，客户成功抱怨自己夹在中间，客户的真实抱怨永远最后一个才传到他们耳朵里。散会之后我想了很久，突然意识到一件事，这三个团队吵架的表面理由都是流程和职责，但底层其实是同一个问题——他们各自和客户接触的那一刻，看到的是客户不同的一张脸，而没有人把这三张脸拼在一起看。"));
    body.AppendChild(BodyPara("销售接触客户的时候，客户展现出来的是\"我需要说服自己的领导同意这笔预算\"的那张脸，语言里全是价值和收益；产品接触客户的时候，客户展现出来的是\"我要保证这套东西真的能用起来不出问题\"的那张脸，语言里全是细节和担忧；客户成功接触客户的时候，客户展现出来的往往是使用过程中最真实、最琐碎、也最接近隐性需求的那张脸。这三张脸拼在一起，才是这个客户完整的样子。"));
    body.AppendChild(BodyPara("问题在于，大多数组织的激励机制天然鼓励这三个团队各自为战。三个团队各自对着自己的指标努力，加总起来对客户的理解却是碎片化的，这不是哪个人不够专业，是整套激励结构从设计上就没有鼓励信息在三者之间真正流动。"));
    body.AppendChild(BodyPara("我见过做得比较好的团队，会在项目的几个关键节点强制拉一次三方同步会，不是汇报进度，是专门交换\"客户最近说了什么让你觉得有点不对劲的话\"，这类信息琐碎、不成体系，很容易在常规汇报里被过滤掉，但恰恰是这类碎片信息拼起来，才能还原出客户真实的处境。"));
    body.AppendChild(SubHeading("本章小结", 3));
    body.AppendChild(BulletPara("三张脸：销售看到价值脸，产品看到担忧脸，客户成功看到真实脸"));
    body.AppendChild(BulletPara("三个团队各自对着自己的指标努力，信息碎片化是结构问题"));
    body.AppendChild(BulletPara("三方同步会的价值：拼三张脸，还原完整客户"));
    body.AppendChild(SubHeading("思考题", 3));
    body.AppendChild(BulletPara("你所在团队和其他两个团队之间，有没有定期的三方信息同步机制？如果没有，你能做点什么来推动这件事？"));
    body.AppendChild(PageBreak());

    // P2 Ch5
    body.AppendChild(Heading("第五章", "这份工作最终练的不是提问技巧，是你对人愿不愿意继续抱有耐心", "挖得越深，越容易看轻人；看轻人的那一刻，这份工作就废了"));
    body.AppendChild(BodyPara("入行久了会有一种职业病，看人说话会不自觉地开始分析这句话背后藏着什么，哪句是场面话，哪句才是真心，这种敏感一开始是种能力，练得多了，慢慢会变成一种习惯性的怀疑——听到任何人说\"没问题\"，第一反应就是这背后一定藏着什么没说的东西。我自己曾经有一段时间陷得很深，跟朋友聊天都会不自觉地去分析对方话里的潜台词。"));
    body.AppendChild(BodyPara("这份职业病背后其实藏着一个更根本的问题，就是挖隐性需求这件事做久了，很容易滑向一种对人性的轻蔑——觉得所有人说的话都是包装过的，真话永远藏在没说出口的那部分。这种滑坡一旦发生，工作反而会做得更差，因为你开始只关心那些藏起来的东西，忽略了很多时候，人说出口的话本身就是真心的。"));
    body.AppendChild(BodyPara("我用了很长时间才想清楚，挖隐性需求这份能力，本质上不是怀疑人的能力，是理解人的能力，这两者听起来接近，其实完全不同。怀疑人的出发点是\"你一定在骗我\"，理解人的出发点是\"你自己可能也没完全想清楚，我愿意陪你一起弄明白\"。"));
    body.AppendChild(BodyPara("这份工作做到最后，比拼的从来不是谁的访谈技巧更精细、谁的判断模型更周密，是谁能在见识过足够多的人情世故之后，依然愿意相信眼前这个人，愿意花时间去弄清楚他到底在想什么，而不是提前给他下一个\"这人肯定在装\"的判断。"));
    body.AppendChild(SubHeading("本章小结", 3));
    body.AppendChild(BulletPara("挖得越深，越容易看轻人——这是这份工作最大的职业风险"));
    body.AppendChild(BulletPara("不是怀疑人的能力，是理解人的能力"));
    body.AppendChild(BulletPara("每次意识到自己在怀疑一句话的时候，先问自己：如果这句话就是字面意思，会怎样？"));
    body.AppendChild(SubHeading("思考题", 3));
    body.AppendChild(BulletPara("你有没有过\"挖得太深反而看轻人\"的经历？那次经历对你后来的工作方式有没有改变？"));
    body.AppendChild(PageBreak());

    // ===== CHAPTER 5: DEEP Q&A =====
    body.AppendChild(ColorBlock("第五章  深度问答", colorAccent));
    body.AppendChild(BodyPara(""));

    body.AppendChild(PartBanner("PART 1  精选问答（5题）", "F5F0F0"));
    body.AppendChild(QQHeader("客户明明说了\"没有其他顾虑\"，我要不要继续追问？会不会显得不信任对方？"));
    body.AppendChild(QAAnswer("看对方说\"没有其他顾虑\"时候的语速和表情，如果这句话说得很快、几乎没有停顿，大概率是真心话；但如果这句话之前有一个短暂的停顿，或者语气比刚才的对话明显轻了一档，这种\"轻描淡写的没有\"往往才最值得追问。追问的时候不要直接问\"真的没有吗\"，可以换成一个具体的场景假设，比如\"如果这套系统上线之后，你们团队里有人反馈不适应，你估计会是哪类问题\"。"));

    body.AppendChild(QQHeader("怎么判断决策链里的\"影响者\"，尤其是那种表面上级别不高、但好像很有话语权的人？"));
    body.AppendChild(QAAnswer("我用得最多的办法是留意会议里的沉默模式。真正的决策人开会时说话通常比较随意，因为他知道自己有最终拍板权；真正的影响者说话反而会比较克制、比较少，但只要他一开口，屋子里明显会安静下来。还有一个更简单的信号，就是散会之后谁被单独留下来多聊了两句。"));

    body.AppendChild(QQHeader("如果我判断出的隐性需求和公司的产品方向冲突，怎么办？"));
    body.AppendChild(QAAnswer("不要假装这个矛盾不存在，硬把效率卖点包装成安全卖点，这种包装很容易被识破，反而损失信任。比较诚实的做法是承认产品在效率维度上的优势，同时具体说明这套效率提升会怎么落地到不增加对方风险敞口的方式。"));

    body.AppendChild(QQHeader("验证实验做完了，结果显示假设站不住，团队已经投入了不少资源，这时候该不该推翻重来？"));
    body.AppendChild(QAAnswer("验证实验的意义就在于把这个决定提前到损失最小的时候做，如果验证已经明确显示方向有问题，还是要接受这个结果，损失当然是真实的，但和继续投入到正式上线之后再暴露问题相比，早期推翻的成本永远更低。"));

    body.AppendChild(QQHeader("加入\"责任敞口\"维度之后，会不会导致产品越来越迎合客户内部的政治顾虑？"));
    body.AppendChild(QAAnswer("责任敞口这个维度不是要取代业务价值维度，是补充。真正麻烦的是那种业务价值很高、责任敞口却很低的功能，这类功能最容易被一直往后拖，因为没有人急着替它说话，这时候需要有人主动站出来替这个功能的长期价值发声。"));

    body.AppendChild(PartBanner("PART 2  精选问答（5题）", "F0F0F5"));

    body.AppendChild(QQHeader("接住了客户没说出口的诉求，但公司内部流程不允许对应调整，是不是等于白挖了？"));
    body.AppendChild(QAAnswer("不算白挖，接住这层诉求本身就有价值，哪怕暂时改变不了流程。至少可以做的是，让客户感受到这层诉求被听见了，即便结果没变，态度是不一样的——客户要的不是问题立刻被解决，是被认真对待的感觉。"));

    body.AppendChild(QQHeader("被客户当场否定之后，要不要立刻在会上反驳澄清，还是先接受，之后再找机会说明？"));
    body.AppendChild(QAAnswer("我现在的习惯是当场不反驳，先接住对方的情绪，说一句类似\"我理解，这个点确实需要我们再想想\"，把当场的对抗先降下来，具体的澄清放到会后单独沟通里去做。公开对峙很容易让对方为了面子更强硬，私下沟通给了双方都不需要顾及旁人眼光的空间。"));

    body.AppendChild(QQHeader("案例库记录了很多客户的敏感信息，有没有信息安全或者职业道德上的问题？"));
    body.AppendChild(QAAnswer("案例库的记录原则应该是记信号、记判断逻辑，不记具体到能识别出个人身份的敏感细节。可以记\"客户方某个岗位存在因历史事故导致的风险规避倾向\"，不应该记具体到谁、什么事故、什么后果这种可以被还原出真实身份的信息。"));

    body.AppendChild(QQHeader("三方协作会议开起来很难，怎么真正推动这种同步机制落地？"));
    body.AppendChild(QAAnswer("比较现实的做法是，先从小范围、非正式的沟通开始，不追求建立正式制度，而是在关键项目节点，主动约相关的产品或销售同事喝杯咖啡，聊十分钟客户最近的动态，这种非正式的信息交换成本很低，容易持续，做出效果之后再考虑向上争取变成正式机制。"));

    body.AppendChild(QQHeader("怎么判断自己有没有陷入\"看轻人\"的职业病里？"));
    body.AppendChild(QAAnswer("回想最近一次和客户或者同事的对话，如果自己第一反应是\"这句话肯定有别的意思\"，先别急着往下分析，问自己一句，如果这句话就是字面意思，会怎样。如果答案是\"那也没什么问题\"，说明你其实不需要过度解读；如果答案是\"那说不通，肯定有别的意思\"，再认真去分析背后的诉求。"));

    body.AppendChild(PageBreak());

    // ===== CHAPTER 6: TOOLKIT =====
    body.AppendChild(ColorBlock("第六章  工具包", colorAccent));
    body.AppendChild(BodyPara(""));
    body.AppendChild(BodyPara("本工具包是《客户隐性需求挖掘与验证》课程的配套实操材料，使用时请结合手册正文中的判断逻辑，不建议脱离正文单独套用。"));

    body.AppendChild(SubHeading("一、隐性需求挖掘访谈脚本包", 2));
    body.AppendChild(SubHeading("1.1 访谈前准备清单", 3));
    body.AppendChild(BulletPara("查对接人的岗位和司龄，判断是否可能经历过与本次采购相关的历史事故"));
    body.AppendChild(BulletPara("查这次采购在客户组织内部大致会影响到哪些岗位，提前列出决策人/使用者/影响者"));
    body.AppendChild(BulletPara("准备两到三个\"具体场景式\"问题，避免通篇使用\"你需要什么\"这类总结式提问"));

    body.AppendChild(SubHeading("1.2 核心提问模板", 3));
    body.AppendChild(BulletPara("打开话题：\"你们现在是怎么处理这件事的，方便具体说说这个流程吗？\""));
    body.AppendChild(BulletPara("探测风险：\"如果这套方案上线之后出了点小问题，一般是谁会最先被问到？\""));
    body.AppendChild(BulletPara("探测决策链：\"除了您，这件事最后拍板还需要过哪些人？\""));
    body.AppendChild(BulletPara("收尾松弛追问：\"对了，这套系统真正上线之后，你们内部谁会最不适应？\""));

    body.AppendChild(SubHeading("1.3 追问技巧提示", 3));
    body.AppendChild(BodyPara("对方给出笼统回答时，不要直接质疑，用具体化追问把对方的笼统表态拉回具体场景。对方出现明显停顿或岔开话题时，不要当场逼问，先记下这个时间点，留到复盘或下一次非正式沟通里再验证。"));

    body.AppendChild(SubHeading("二、验证实验设计模板", 2));
    body.AppendChild(SubHeading("2.1 排错式验证设计五问", 3));
    body.AppendChild(BulletPara("这次验证要排除的最坏可能是什么，而不是要证明的最好结果是什么？"));
    body.AppendChild(BulletPara("如果专门找最挑剔、最抵触的场景或人选来测试，假设还站得住吗？"));
    body.AppendChild(BulletPara("这次验证的最小动作是什么？能不能用一句话、一封邮件完成？"));
    body.AppendChild(BulletPara("如果验证结果推翻了原假设，团队有没有心理准备接受？"));
    body.AppendChild(BulletPara("这次验证的结果，谁来判断是否通过，判断标准提前写没写清楚？"));

    body.AppendChild(SubHeading("2.2 最小暴露实验参考做法", 3));
    body.AppendChild(BodyPara("在正式方案提交前，挑出方案里最具争议的一条，单独抽出来，用非正式的方式（一次闲聊、一封邮件）抛给关键人物，观察对方未经准备的第一反应。在小范围试点阶段，优先选择最不容易被说服的那类人作为试点对象。"));

    body.AppendChild(SubHeading("三、需求优先级矩阵工具", 2));
    body.AppendChild(SubHeading("3.1 三维评估表", 3));
    body.AppendChild(BulletPara("业务价值：这个功能对客户业务指标的实际提升程度（1-5分）"));
    body.AppendChild(BulletPara("实现成本：团队完成这个功能所需要的时间与资源投入（1-5分）"));
    body.AppendChild(BulletPara("责任敞口：如果这个功能不优先做，客户方相关负责人是否会面临具体的解释压力（1-5分）"));

    body.AppendChild(SubHeading("3.2 排序建议逻辑", 3));
    body.AppendChild(BulletPara("责任敞口高 + 业务价值高：优先级最高"));
    body.AppendChild(BulletPara("责任敞口高 + 业务价值一般：建议靠前安排，解决的是不让具体的人被问责"));
    body.AppendChild(BulletPara("责任敞口低 + 业务价值高：容易被无限期拖延，需要有人主动推动"));
    body.AppendChild(BulletPara("责任敞口低 + 业务价值也低：直接砍掉或长期搁置"));

    body.AppendChild(SubHeading("四、案例库与复盘表", 2));
    body.AppendChild(SubHeading("4.1 案例记录原则", 3));
    body.AppendChild(BulletPara("只记信号和判断逻辑，不记可识别出具体个人身份的敏感细节"));
    body.AppendChild(BulletPara("每条记录必须包含一句\"当时差点被忽略的信号是什么\""));

    body.AppendChild(SubHeading("4.2 复盘表字段建议", 3));
    body.AppendChild(BulletPara("项目基本信息（行业、规模、项目类型，不含可识别身份信息）"));
    body.AppendChild(BulletPara("表层需求（写进合同或需求文档的内容）"));
    body.AppendChild(BulletPara("事后判断的隐性需求（复盘时才想清楚、当初没有充分识别的真实诉求）"));
    body.AppendChild(BulletPara("被忽略的信号（当初出现过、但没被当回事的一句话、一个停顿）"));
    body.AppendChild(BulletPara("后续动作建议（类似信号再次出现时，下一步应该怎么做）"));

    body.AppendChild(SubHeading("4.3 信号词典（示例条目）", 3));
    body.AppendChild(BulletPara("\"我们内部对这个还有点讨论\"，通常意味着决策链中存在尚未被说服的关键人物"));
    body.AppendChild(BulletPara("\"这个我们再看看流程\"，通常意味着预算审批或内部流程中存在未言明的障碍"));
    body.AppendChild(BulletPara("\"应该没什么大问题\"，语气偏轻时，值得留意——真正没问题的表态通常会带具体理由"));

    body.AppendChild(PageBreak());

    // ===== CHAPTER 7: APPENDIX =====
    body.AppendChild(ColorBlock("第七章  附  录", colorAccent));
    body.AppendChild(BodyPara(""));

    body.AppendChild(SubHeading("延伸阅读", 2));
    body.AppendChild(BulletPara("《客户说》—— 了解客户沟通中的深层心理机制"));
    body.AppendChild(BulletPara("《影响力》—— 理解决策背后的心理学原理"));
    body.AppendChild(BulletPara("《思考，快与慢》—— 识别直觉判断与理性分析的边界"));
    body.AppendChild(BulletPara("《非暴力沟通》—— 在高压场景下保持有效对话的能力"));
    body.AppendChild(BulletPara("《只有偏执狂才能生存》—— 在商业环境中识别隐性风险信号"));

    body.AppendChild(SubHeading("课程评估标准", 2));
    body.AppendChild(BodyPara("本课程采用行为改变导向的评估框架，而非知识记忆导向："));

    body.AppendChild(SubHeading("Level 1：满意度评估", 3));
    body.AppendChild(BulletPara("学员对课程内容、案例真实性和实用性的主观满意度"));

    body.AppendChild(SubHeading("Level 2：学习评估", 3));
    body.AppendChild(BulletPara("学员能否准确复述\"两层需求\"公理和\"责任敞口\"概念"));
    body.AppendChild(BulletPara("学员能否识别出自己过往项目中的\"差点漏掉\"信号"));

    body.AppendChild(SubHeading("Level 3：行为评估（课后30天）", 3));
    body.AppendChild(BulletPara("学员是否开始使用\"你们现在是怎么做的\"替代\"你需要什么\"作为访谈开场"));
    body.AppendChild(BulletPara("学员是否开始建立/更新自己的案例库记录"));
    body.AppendChild(BulletPara("学员是否推动了团队三方同步机制的建立"));

    body.AppendChild(SubHeading("Level 4：结果评估（课后90天）", 3));
    body.AppendChild(BulletPara("学员负责项目的续约率是否有可衡量的提升"));
    body.AppendChild(BulletPara("学员团队的复盘会是否开始真正关注\"被忽略的信号\"而非外部归因"));
    body.AppendChild(BulletPara("信号词典是否积累了超过10条来源于真实项目的条目"));

    body.AppendChild(Divider());
    body.AppendChild(SubHeading("写在前面", 2));
    body.AppendChild(BodyPara("那份验收报告我现在还留着，评分是四十五分满分四十三分，客户方的项目经理在最后一栏写着\"整体满意，达到预期\"。三个月后续约会议上，同一个人坐在我对面，说的第一句话是：\"说实话，当时你们没搞懂我们真正要什么。\"我把验收报告推过去给他看，他看了一眼，没接话。那一刻我才明白，那四十三分从来不是他的真实评价，是他当时不想在会议纪要里写下\"我没想清楚\"这五个字。"));
    body.AppendChild(BodyPara("后来我用了很长时间才想通一件事：客户在验收单上签的字、在需求文档里勾选的选项、在访谈里说出口的那句\"我们主要考虑效率提升\"，都是他愿意公开背书的那部分。真正决定他会不会续约、会不会推荐、会不会在下一轮预算会上帮你说话的，是另一层他自己都未必想清楚、更不会写进文档的东西——他怕不怕这次采购在年底被审计部门问起来，他怕不怕用了新系统之后自己那套做了八年的经验被证明是错的。"));
    body.AppendChild(BodyPara("这本手册写给产品经理、销售、客户成功团队里那些已经能把表层需求收集得很扎实、却屡屡在验收之后、续约之前遇到\"客户当时明明说没问题\"这种诡异落差的人。AI 把信息检索和方案生成的门槛拉到了地板，客户能说出口的需求，任何一个像样的团队都能满足；能不能挖到客户说不出口的那部分，正在变成这个行业里少数还值钱的能力。"));
    body.AppendChild(BodyPara("这本手册不教你更专业的话术，教你怎么把一次访谈、一次验证实验、一次优先级排序，变成真正读懂一个人而不是读懂一份文档的过程。"));

    body.AppendChild(Divider());
    body.AppendChild(SubHeading("写给同行", 2));
    body.AppendChild(BodyPara("这本手册写完，回头看，最想说的其实不是任何一条方法，是一个提醒——挖隐性需求这件事，练到最后比的不是谁更会猜，是谁更愿意在猜错的时候老老实实认，在猜对了却被否定的时候不气馁地再等一等。我们这行经常被人以为靠的是敏锐和技巧，其实靠的更多是耐心，是愿意花时间陪一个人把他自己都没想清楚的东西一起想清楚，这份耐心，AI 替代不了，任何一套标准化流程也替代不了。"));
    body.AppendChild(BodyPara("写这本手册的过程里，我自己也重新想清楚了不少事，有几段回忆写出来的时候还是会有点不好意思，但这些不体面的瞬间，恰恰是这份工作最真实的部分。希望这本手册对你有点用，如果哪里不对，也欢迎你告诉我，这本身也是一次隐性需求的挖掘和验证。"));

    var authorFinal = new Paragraph();
    var afPPr = new ParagraphProperties();
    afPPr.AppendChild(new Justification { Val = JustificationValues.Right });
    afPPr.AppendChild(new SpacingBetweenLines { Before = "400", After = "100" });
    authorFinal.AppendChild(afPPr);
    var afRPr = new RunProperties();
    afRPr.AppendChild(new RunFonts { EastAsia = fontEA, Ascii = fontAscii, HighAnsi = fontAscii });
    afRPr.AppendChild(new Color { Val = "888888" });
    afRPr.AppendChild(new FontSize { Val = "24" });
    var afRun = new Run(); foreach (var c in afRPr.ChildElements) afRun.AppendChild(c.CloneNode(true));
    afRun.AppendChild(new Text("罗宏伟") { Space = SpaceProcessingModeValues.Preserve });
    authorFinal.AppendChild(afRun);
    body.AppendChild(authorFinal);

    var copyrightP = new Paragraph();
    var cpPPr = new ParagraphProperties();
    cpPPr.AppendChild(new Justification { Val = JustificationValues.Center });
    cpPPr.AppendChild(new SpacingBetweenLines { Before = "200", After = "100" });
    copyrightP.AppendChild(cpPPr);
    var cpRPr = new RunProperties();
    cpRPr.AppendChild(new RunFonts { EastAsia = fontEA, Ascii = fontAscii, HighAnsi = fontAscii });
    cpRPr.AppendChild(new Color { Val = "AAAAAA" });
    cpRPr.AppendChild(new FontSize { Val = "20" });
    var cpRun = new Run(); foreach (var c in cpRPr.ChildElements) cpRun.AppendChild(c.CloneNode(true));
    cpRun.AppendChild(new Text("© 罗宏伟  |  客户隐性需求挖掘与验证  |  内部学员手册") { Space = SpaceProcessingModeValues.Preserve });
    copyrightP.AppendChild(cpRun);
    body.AppendChild(copyrightP);

    // ===== FINALIZE =====
    body.AppendChild(sectPr);
    mainPart.Document.Save();
}

Console.WriteLine("Document created: " + outputPath);
Console.WriteLine("File size: " + new FileInfo(outputPath).Length + " bytes");
