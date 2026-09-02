using System.Text;
using DocumentFormat.OpenXml;
using DocumentFormat.OpenXml.Packaging;
using DocumentFormat.OpenXml.Wordprocessing;

string outputPath = @"D:\2026年课程\竞越\领航：Z世代管理新策略3.0\完整课程包\13_对外销售物料\03_一页纸课程简介.docx";

if (File.Exists(outputPath)) File.Delete(outputPath);

using var doc = WordprocessingDocument.Create(outputPath, WordprocessingDocumentType.Document);
var mainPart = doc.AddMainDocumentPart();
mainPart.Document = new Document(new Body());
var body = mainPart.Document.Body;

// 样式
var stylesPart = mainPart.AddNewPart<StyleDefinitionsPart>();
StringBuilder sb = new StringBuilder();
sb.AppendLine("<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>");
sb.AppendLine("<w:styles xmlns:w=\"http://schemas.openxmlformats.org/wordprocessingml/2006/main\">");
sb.AppendLine("  <w:docDefaults>");
sb.AppendLine("    <w:rPrDefault><w:rPr><w:rFonts w:ascii=\"Arial\" w:hAnsi=\"Arial\" w:eastAsia=\"SimSun\" w:cs=\"Arial\"/><w:sz w:val=\"22\"/><w:szCs w:val=\"22\"/><w:lang w:val=\"en-US\" w:eastAsia=\"zh-CN\" w:bidi=\"ar-SA\"/></w:rPr></w:rPrDefault>");
sb.AppendLine("    <w:pPrDefault><w:pPr><w:spacing w:before=\"0\" w:after=\"60\" w:line=\"288\" w:lineRule=\"auto\"/></w:pPr></w:pPrDefault>");
sb.AppendLine("  </w:docDefaults>");
sb.AppendLine("  <w:style w:type=\"paragraph\" w:default=\"1\" w:styleId=\"Normal\"><w:name w:val=\"Normal\"/><w:qFormat/></w:style>");
sb.AppendLine("  <w:style w:type=\"paragraph\" w:styleId=\"Title\"><w:name w:val=\"Title\"/><w:basedOn w:val=\"Normal\"/><w:next w:val=\"Normal\"/><w:uiPriority w:val=\"10\"/><w:qFormat/><w:pPr><w:spacing w:before=\"0\" w:after=\"120\" w:line=\"380\" w:lineRule=\"auto\"/><w:jc w:val=\"center\"/></w:pPr><w:rPr><w:rFonts w:ascii=\"Arial\" w:hAnsi=\"Arial\" w:eastAsia=\"SimHei\" w:cs=\"Arial\"/><w:b/><w:color w:val=\"0F2A4F\"/><w:sz w:val=\"72\"/><w:szCs w:val=\"72\"/></w:rPr></w:style>");
sb.AppendLine("  <w:style w:type=\"paragraph\" w:styleId=\"Subtitle\"><w:name w:val=\"Subtitle\"/><w:basedOn w:val=\"Normal\"/><w:next w:val=\"Normal\"/><w:uiPriority w:val=\"11\"/><w:qFormat/><w:pPr><w:spacing w:before=\"0\" w:after=\"200\" w:line=\"320\" w:lineRule=\"auto\"/><w:jc w:val=\"center\"/></w:pPr><w:rPr><w:rFonts w:ascii=\"Arial\" w:hAnsi=\"Arial\" w:eastAsia=\"SimHei\" w:cs=\"Arial\"/><w:color w:val=\"2E5496\"/><w:sz w:val=\"32\"/><w:szCs w:val=\"32\"/></w:rPr></w:style>");
sb.AppendLine("  <w:style w:type=\"table\" w:default=\"1\" w:styleId=\"TableNormal\"><w:name w:val=\"Normal Table\"/><w:uiPriority w:val=\"99\"/><w:semiHidden/><w:unhideWhenUsed/><w:tblPr><w:tblInd w:w=\"0\" w:type=\"dxa\"/><w:tblCellMar><w:top w:w=\"0\" w:type=\"dxa\"/><w:left w:w=\"108\" w:type=\"dxa\"/><w:bottom w:w=\"0\" w:type=\"dxa\"/><w:right w:w=\"108\" w:type=\"dxa\"/></w:tblCellMar></w:tblPr></w:style>");
sb.AppendLine("  <w:style w:type=\"table\" w:styleId=\"TableGrid\"><w:name w:val=\"Table Grid\"/><w:basedOn w:val=\"TableNormal\"/><w:uiPriority w:val=\"39\"/><w:tblPr><w:tblBorders><w:top w:val=\"single\" w:sz=\"4\" w:space=\"0\" w:color=\"BFBFBF\"/><w:left w:val=\"single\" w:sz=\"4\" w:space=\"0\" w:color=\"BFBFBF\"/><w:bottom w:val=\"single\" w:sz=\"4\" w:space=\"0\" w:color=\"BFBFBF\"/><w:right w:val=\"single\" w:sz=\"4\" w:space=\"0\" w:color=\"BFBFBF\"/><w:insideH w:val=\"single\" w:sz=\"4\" w:space=\"0\" w:color=\"BFBFBF\"/><w:insideV w:val=\"single\" w:sz=\"4\" w:space=\"0\" w:color=\"BFBFBF\"/></w:tblBorders></w:tblPr></w:style>");
sb.AppendLine("</w:styles>");
using (var sw = new StreamWriter(stylesPart.GetStream(FileMode.Create))) { sw.Write(sb.ToString()); }

TableCell MkCell(string text, bool header)
{
    var run = new Run();
    if (header) run.Append(new RunProperties(new Bold(), new Color { Val = "FFFFFF" }));
    run.Append(new Text(text) { Space = SpaceProcessingModeValues.Preserve });
    return new TableCell(
        new TableCellProperties(
            new Shading { Val = ShadingPatternValues.Clear, Color = "auto", Fill = header ? "1F3864" : "FFFFFF" },
            new TableCellMargin(
                new TopMargin { Width = "100", Type = TableWidthUnitValues.Dxa },
                new BottomMargin { Width = "100", Type = TableWidthUnitValues.Dxa },
                new LeftMargin { Width = "120", Type = TableWidthUnitValues.Dxa },
                new RightMargin { Width = "120", Type = TableWidthUnitValues.Dxa })),
        new Paragraph(run));
}

Table MkTable(string[] headers, string[][] rows, int[] widths)
{
    var t = new Table();
    t.Append(new TableProperties(
        new TableStyle { Val = "TableGrid" },
        new TableWidth { Width = "5000", Type = TableWidthUnitValues.Pct },
        new TableLook { Val = "04A0", FirstRow = true }));
    var grid = new TableGrid();
    foreach (var w in widths) grid.Append(new GridColumn { Width = w.ToString() });
    t.Append(grid);
    var hr = new TableRow(new TableRowProperties(new TableHeader()));
    foreach (var h in headers) hr.Append(MkCell(h, true));
    t.Append(hr);
    foreach (var r in rows)
    {
        var tr = new TableRow();
        foreach (var c in r) tr.Append(MkCell(c, false));
        t.Append(tr);
    }
    return t;
}

// ===== 顶部标识 =====
body.Append(new Paragraph(
    new ParagraphProperties(new SpacingBetweenLines { Before = "0", After = "60" }),
    new Run(new RunProperties(new Bold(), new Color { Val = "1F3864" }, new FontSize { Val = "20" }), new Text("竞越 · 罗宏伟版权课"))));

// ===== 主标题 =====
body.Append(new Paragraph(
    new ParagraphProperties(new ParagraphStyleId { Val = "Title" }, new SpacingBetweenLines { Before = "0", After = "80" }),
    new Run(new Text("领航·4.0"))));

// ===== 副标题 =====
body.Append(new Paragraph(
    new ParagraphProperties(new ParagraphStyleId { Val = "Subtitle" }, new SpacingBetweenLines { Before = "0", After = "160" }),
    new Run(new Text("AI时代的Z世代管理新策略"))));

// ===== 一段话定位 =====
body.Append(new Paragraph(
    new ParagraphProperties(new SpacingBetweenLines { Before = "0", After = "160" }),
    new Run(new RunProperties(new Color { Val = "1F3864" }, new FontSize { Val = "22" }),
    new Text("Z世代（95/00后）从来不知道没有AI的工作是什么样的——他们带进团队的，不只是个性和期待，还有一整套AI工具的使用习惯。本课程用2天时间，把「领鲜四力」框架全面升级到AI时代，给你5+套当天就能用的工作纸和一份针对你团队的30天管理改进清单。"))));

// ===== 模块清单 =====
body.Append(new Paragraph(
    new ParagraphProperties(new SpacingBetweenLines { Before = "120", After = "100" }),
    new Run(new RunProperties(new Bold(), new Color { Val = "1F3864" }, new FontSize { Val = "24" }), new Text("五大模块  /  2天 · 13小时"))));

string[] mods = {
    "▎ 开场 30min    AI时代的Z世代管理困局全景扫描",
    "▎ Part 1 认知力 150min    五感驱动模型（含价值感） + 三不怕特征 + 管理策略更新",
    "▎ Part 2 适应力 210min    融入期四阶段（AI版） + 1+3清单AI升级版 + 坦诚交流与AI话题",
    "▎ Part 3 链接力 150min    5W2H+H人机协作视角 + 辅导对话五步（含学习归因）",
    "▎ Part 4 愿景力 165min    八大内驱力4.0 + 游戏设计画布4.0（含防AI走捷径机制）"
};
foreach (var m in mods)
{
    body.Append(new Paragraph(
        new ParagraphProperties(new SpacingBetweenLines { Before = "0", After = "50" }),
        new Run(new Text(m) { Space = SpaceProcessingModeValues.Preserve })));
}

// ===== 课程特色 =====
body.Append(new Paragraph(
    new ParagraphProperties(new SpacingBetweenLines { Before = "160", After = "100" }),
    new Run(new RunProperties(new Bold(), new Color { Val = "1F3864" }, new FontSize { Val = "24" }), new Text("课程特色  /  为什么不一样"))));

string[] feats = {
    "✓ 理论有根，升级有据 — 四力框架经过500+场企业实践验证，AI升级基于真实困惑",
    "✓ 工具完整，拿来即用 — 5+套工作纸（1+3清单、5W2H+H、辅导卡片、游戏画布4.0、30天清单）",
    "✓ 演练真实，学以致用 — 8个体验活动 + 4个角色扮演，优先用学员自己的真实场景",
    "✓ AI不恐慌，更新有路径 — 不回避AI也不鼓吹，给管理者具体可走的升级路径"
};
foreach (var f in feats)
{
    body.Append(new Paragraph(
        new ParagraphProperties(new SpacingBetweenLines { Before = "0", After = "50" }),
        new Run(new Text(f) { Space = SpaceProcessingModeValues.Preserve })));
}

// ===== 对象 + 规格 =====
body.Append(MkTable(
    new[] { "对象", "规格" },
    new[] {
        new[] { "基层主管到中层经理\nHRBP / 人才发展\n正在推动AI工具落地的组织\n新晋管理者（首批下属即Z世代）", "时长：2天 · 13小时\n形式：面授工作坊\n规模：16–24人最优\n讲师：罗宏伟\n主理方：竞越" }
    },
    new[] { 5000, 4000 }));

// ===== CTA / 联系方式 =====
body.Append(new Paragraph(
    new ParagraphProperties(new Justification { Val = JustificationValues.Center }, new SpacingBetweenLines { Before = "200", After = "60" }),
    new Run(new RunProperties(new Bold(), new Color { Val = "1F3864" }, new FontSize { Val = "24" }), new Text("联系方式"))));
body.Append(new Paragraph(
    new ParagraphProperties(new Justification { Val = JustificationValues.Center }, new SpacingBetweenLines { After = "40" }),
    new Run(new Text("讲师：罗宏伟   |   助理：小颖"))));
body.Append(new Paragraph(
    new ParagraphProperties(new Justification { Val = JustificationValues.Center }, new SpacingBetweenLines { After = "40" }),
    new Run(new Text("微信/电话：______________________（销售时填入）"))));
body.Append(new Paragraph(
    new ParagraphProperties(new Justification { Val = JustificationValues.Center }, new SpacingBetweenLines { After = "40" }),
    new Run(new Text("邮箱：______________________（销售时填入）"))));
body.Append(new Paragraph(
    new ParagraphProperties(new Justification { Val = JustificationValues.Center }, new SpacingBetweenLines { Before = "120", After = "0" }),
    new Run(new RunProperties(new Italic(), new Color { Val = "606060" }, new FontSize { Val = "20" }), new Text("—— 领航·4.0  和你一起，把AI时代的Z世代管理，从焦虑变成资产。"))));

// Section properties (A4 + 较窄margin 适合一页纸)
body.Append(new SectionProperties(
    new PageSize { Width = 11906, Height = 16838, Orient = PageOrientationValues.Portrait },
    new PageMargin { Top = 1080, Right = 1080, Bottom = 1080, Left = 1080, Header = 540, Footer = 540, Gutter = 0 },
    new Columns { Space = "720" },
    new DocGrid { LinePitch = 312 }));

mainPart.Document.Save();

var fi = new FileInfo(outputPath);
Console.WriteLine($"OK 文件已生成: {outputPath}");
Console.WriteLine($"文件大小: {fi.Length / 1024.0:F1} KB");
