using DocumentFormat.OpenXml;
using DocumentFormat.OpenXml.Packaging;
using DocumentFormat.OpenXml.Wordprocessing;

string tempPath = @"D:\CC\temp\output_temp.docx";
string outputPath = @"D:\新课开发\销售\零售精英：培养关键技能，打造长效佳绩\完整课程包\11-对外宣传文案\零售精英-对外宣传文案.docx";

string dir = Path.GetDirectoryName(outputPath);
if (!Directory.Exists(dir)) Directory.CreateDirectory(dir);

var doc = WordprocessingDocument.Create(tempPath, WordprocessingDocumentType.Document);
var mainPart = doc.AddMainDocumentPart();
mainPart.Document = new Document(new Body());

var body = mainPart.Document.Body;

var sectPr = new SectionProperties(
    new PageSize { Width = 11906, Height = 16838 },
    new PageMargin { Top = 1440, Right = 1440, Bottom = 1440, Left = 1440, Header = 720, Footer = 720 }
);

const string RED = "C00000";
const string DARK_RED = "8B0000";
const string GRAY = "595959";
const string DARK_GRAY = "333333";
const string LIGHT_GRAY = "666666";

Paragraph MakePara(string text, string styleId = "Normal", bool bold = false, string color = null, int fontSize = 22, bool center = false, string bgColor = null)
{
    var p = new Paragraph();
    var pPr = new ParagraphProperties();
    if (styleId != "Normal") pPr.Append(new ParagraphStyleId { Val = styleId });
    if (center) pPr.Append(new Justification { Val = JustificationValues.Center });
    pPr.Append(new SpacingBetweenLines { After = "160", Line = "276", LineRule = LineSpacingRuleValues.Auto });
    if (bgColor != null) pPr.Append(new Shading { Val = ShadingPatternValues.Clear, Fill = bgColor });
    p.Append(pPr);

    var r = new Run();
    var rPr = new RunProperties();
    rPr.Append(new FontSize { Val = fontSize.ToString() });
    rPr.Append(new FontSizeComplexScript { Val = fontSize.ToString() });
    if (bold) rPr.Append(new Bold());
    if (color != null) rPr.Append(new Color { Val = color });
    rPr.Append(new RunFonts { Ascii = "Calibri", HighAnsi = "Calibri", EastAsia = "SimSun", ComplexScript = "Arial" });
    r.Append(rPr);
    r.Append(new Text(text) { Space = SpaceProcessingModeValues.Preserve });
    p.Append(r);
    return p;
}

Paragraph MakeHeading(string text, int level)
{
    var p = new Paragraph();
    var pPr = new ParagraphProperties();
    pPr.Append(new ParagraphStyleId { Val = $"Heading{level}" });
    pPr.Append(new SpacingBetweenLines { Before = level == 1 ? "480" : "360", After = level == 1 ? "160" : "120" });
    if (level == 1) pPr.Append(new PageBreakBefore());
    p.Append(pPr);

    var r = new Run();
    var rPr = new RunProperties();
    rPr.Append(new Bold());
    rPr.Append(new Color { Val = level == 1 ? RED : DARK_GRAY });
    rPr.Append(new RunFonts { Ascii = "Calibri Light", HighAnsi = "Calibri Light", EastAsia = "SimHei" });
    rPr.Append(new FontSize { Val = level == 1 ? "40" : level == 2 ? "32" : "26" });
    rPr.Append(new FontSizeComplexScript { Val = level == 1 ? "40" : level == 2 ? "32" : "26" });
    r.Append(rPr);
    r.Append(new Text(text));
    p.Append(r);
    return p;
}

Paragraph MakeBullet(string text, bool indent = false, string color = null)
{
    var p = new Paragraph();
    var pPr = new ParagraphProperties();
    pPr.Append(new SpacingBetweenLines { After = "60", Line = "276", LineRule = LineSpacingRuleValues.Auto });
    if (indent) pPr.Append(new Indentation { Left = "720" });
    p.Append(pPr);

    var r = new Run();
    var rPr = new RunProperties();
    rPr.Append(new FontSize { Val = "22" });
    rPr.Append(new Color { Val = color ?? DARK_GRAY });
    rPr.Append(new RunFonts { Ascii = "Calibri", HighAnsi = "Calibri", EastAsia = "SimSun" });
    r.Append(rPr);
    r.Append(new Text("• " + text) { Space = SpaceProcessingModeValues.Preserve });
    p.Append(r);
    return p;
}

Paragraph MakeBody(string text, string color = null)
{
    var p = new Paragraph();
    var pPr = new ParagraphProperties();
    pPr.Append(new SpacingBetweenLines { After = "160", Line = "276", LineRule = LineSpacingRuleValues.Auto });
    p.Append(pPr);

    var r = new Run();
    var rPr = new RunProperties();
    rPr.Append(new FontSize { Val = "22" });
    rPr.Append(new Color { Val = color ?? DARK_GRAY });
    rPr.Append(new RunFonts { Ascii = "Calibri", HighAnsi = "Calibri", EastAsia = "SimSun" });
    r.Append(rPr);
    r.Append(new Text(text) { Space = SpaceProcessingModeValues.Preserve });
    p.Append(r);
    return p;
}

Paragraph MakeHighlightBox(string text, string bgColor = "FCE4D6")
{
    var p = new Paragraph();
    var pPr = new ParagraphProperties();
    pPr.Append(new SpacingBetweenLines { After = "120", Line = "276", LineRule = LineSpacingRuleValues.Auto });
    pPr.Append(new Shading { Val = ShadingPatternValues.Clear, Fill = bgColor });
    pPr.Append(new Indentation { Left = "360", Right = "360" });
    p.Append(pPr);

    var r = new Run();
    var rPr = new RunProperties();
    rPr.Append(new FontSize { Val = "22" });
    rPr.Append(new Color { Val = DARK_GRAY });
    rPr.Append(new RunFonts { Ascii = "Calibri", HighAnsi = "Calibri", EastAsia = "SimSun" });
    r.Append(rPr);
    r.Append(new Text(text) { Space = SpaceProcessingModeValues.Preserve });
    p.Append(r);
    return p;
}

// Cover
body.Append(MakePara("零售精英", "Title", bold: true, color: RED, fontSize: 56, center: true));
body.Append(MakePara("培养关键技能，打造长效佳绩", "Subtitle", color: DARK_GRAY, fontSize: 32, center: true));
body.Append(MakePara(" ", "Normal", fontSize: 20));

// Part 1: Course Introduction
body.Append(MakeHeading("一、课程介绍（长版）", 1));

body.Append(MakeHeading("痛点切入", 2));
body.Append(MakeBody("零售终端的竞争，归根结底是人的竞争。"));
body.Append(MakeBody("你是否经常遇到这些困惑："));
body.Append(MakeBullet("客户进店转一圈就走了，不知道他在想什么"));
body.Append(MakeBullet("介绍了半天产品，客户却不买账"));
body.Append(MakeBullet("报价后客户转身就走，价格谈不拢"));
body.Append(MakeBullet("客户类型各异，用同一套话术效果平平"));
body.Append(MakeBullet("促销期忙成陀螺，促销一过业绩就跌"));
body.Append(MakeHighlightBox("根本原因：缺乏系统的客户识别与应对能力——不是态度问题，是方法论问题。"));

body.Append(MakeHeading("解决方案：五力模型", 2));
body.Append(MakeBody("五力模型——从\"卖产品\"到\"经营客户价值\"的升级路径："));
body.Append(MakeBullet("识人之力：5秒判断客户类型，一把钥匙开一把锁", true));
body.Append(MakeBullet("链接之力：场景化提问，让客户主动说需求", true));
body.Append(MakeBullet("锚定之力：FABE话术，让产品价值无可反驳", true));
body.Append(MakeBullet("说服之力：价格谈判四步法，谈出双赢结果", true));
body.Append(MakeBullet("促动之力：临门一脚催单术，让观望变成行动", true));

body.Append(MakeHeading("课程特色", 2));
body.Append(MakeBullet("实战场景：真实零售案例还原，非模拟、非概念", true));
body.Append(MakeBullet("工具落地：5张客户类型判断卡+4步谈判工具卡，随身携带即用", true));
body.Append(MakeBullet("行为改变：训后30天跟进，3个真实客户应对案例分析", true));
body.Append(MakeBullet("效果可见：成交流程标准化，业绩提升可量化", true));

body.Append(MakeHeading("学员收益", 2));
body.Append(MakeBullet("五种客户类型判断方法：支配型、表现型、分析型、友善型、混合型——一眼看穿客户性格", true));
body.Append(MakeBullet("场景式提问话术：开放型、确认型、引导型、排除型——让客户自己说服自己", true));
body.Append(MakeBullet("FABE说服模型：Feature-Advantage-Benefit-Evidence，让产品介绍无懈可击", true));
body.Append(MakeBullet("价格谈判四步法：报价-解围-让步-锁定，谈出利润空间", true));
body.Append(MakeBullet("客户应对全案：10个典型场景的完整应对脚本", true));

body.Append(MakeHeading("适合人群", 2));
body.Append(MakeBullet("零售门店导购、销售顾问", true));
body.Append(MakeBullet("终端销售管理人员（店长、督导、区域经理）", true));
body.Append(MakeBullet("需要提升客户沟通与成交能力的零售从业者", true));

body.Append(MakeHeading("课程安排", 2));
body.Append(MakeBullet("标准课时：2天（每天6小时），可根据企业需求拆分为4个半天", true));
body.Append(MakeBullet("教学方式：理论讲解40% + 案例研讨30% + 情景演练30%", true));
body.Append(MakeBullet("配套材料：学员手册 + 工具卡 + 训后跟进手册", true));
body.Append(MakeBullet("班级规模：30-50人/班效果最佳", true));

// Part 2: Short Version
body.Append(MakeHeading("二、朋友圈/短视频文案（短版）", 1));

body.Append(MakeHeading("一句话共鸣", 2));
body.Append(MakeHighlightBox("\"客户不是不喜欢产品，是你的介绍没说到他心里去。\""));

body.Append(MakeHeading("课程亮点", 2));
body.Append(MakeBullet("5秒判断客户类型 → 不再说错话", true));
body.Append(MakeBullet("场景化提问 → 让客户自己说出需求", true));
body.Append(MakeBullet("FABE话术 → 让产品价值无可反驳", true));
body.Append(MakeBullet("价格谈判四步法 → 谈出双赢保住利润", true));
body.Append(MakeBullet("10个真实场景全案 → 学完就能用", true));

body.Append(MakeHeading("行动号召", 2));
body.Append(MakeHighlightBox("与其在旺季忙成一团，不如现在投资自己。\n零售精英课，让你的成交率翻倍！\n扫码咨询，预约公开课名额。", "FCE4D6"));

// Part 3: Poster Copy
body.Append(MakeHeading("三、课程海报文案", 1));

body.Append(MakePara("【主标题】", "Normal", bold: true, color: RED, fontSize: 22));
body.Append(MakePara("零售精英", "Normal", bold: true, color: RED, fontSize: 44, center: true));
body.Append(MakePara("培养关键技能，打造长效佳绩", "Normal", bold: true, color: DARK_GRAY, fontSize: 28, center: true));

body.Append(MakePara("【副标题】", "Normal", bold: true, color: RED, fontSize: 22));
body.Append(MakePara("五力模型：识人 · 链接 · 锚定 · 说服 · 促动", "Normal", color: GRAY, fontSize: 24, center: true));

body.Append(MakePara("【核心卖点】", "Normal", bold: true, color: RED, fontSize: 22));
body.Append(MakeBullet("5种客户类型 → 一眼看穿客户性格", true));
body.Append(MakeBullet("场景提问四式 → 让客户自己说服自己", true));
body.Append(MakeBullet("FABE话术 → 让产品价值无可反驳", true));
body.Append(MakeBullet("价格谈判四步法 → 谈出双赢保住利润", true));
body.Append(MakeBullet("10个真实场景 → 全流程可落地执行", true));

body.Append(MakePara("【行动号召】", "Normal", bold: true, color: RED, fontSize: 22));
body.Append(MakePara("与其在旺季忙成一团，不如现在投资自己", "Normal", color: DARK_GRAY, fontSize: 24, center: true));
body.Append(MakePara("零售精英课，让你的成交率翻倍！", "Normal", bold: true, color: RED, fontSize: 28, center: true));
body.Append(MakePara("扫码咨询，预约公开课名额", "Normal", color: GRAY, fontSize: 22, center: true));

// Part 4: FAQ
body.Append(MakeHeading("四、常见问题Q&A", 1));

body.Append(MakePara("Q1：学员没有销售基础，能听懂吗？", "Normal", bold: true, fontSize: 22));
body.Append(MakeBullet("可以。课程从客户识别开始，循序渐进，不要求学员有销售基础。", true));
body.Append(MakeBullet("我们有很多从门店新人做起的学员，训后反馈\"原来销售有这么多门道\"。", true));
body.Append(MakeBullet("课程提供完整的话术模板，即使零基础也能快速上手。", true));

body.Append(MakePara("Q2：课程内容适用于哪些零售业态？", "Normal", bold: true, fontSize: 22));
body.Append(MakeBullet("课程底层逻辑通用，适合所有零售业态：服装鞋帽、家居建材、数码电器、汽车4S店、化妆品、珠宝等。", true));
body.Append(MakeBullet("我们会根据企业所属行业，提供针对性的案例和话术调整。", true));

body.Append(MakePara("Q3：学了之后能马上用得上吗？", "Normal", bold: true, fontSize: 22));
body.Append(MakeBullet("可以。课程每个模块都提供工具卡和话术卡，训后即可在工作中使用。", true));
body.Append(MakeBullet("我们还提供训后30天跟进服务，学员在工作中遇到问题可以随时咨询。", true));
body.Append(MakeBullet("很多学员反馈：学完第一周使用新方法，成交量就有明显提升。", true));

body.Append(MakePara("Q4：课程时间太长，店员难以集中脱岗怎么办？", "Normal", bold: true, fontSize: 22));
body.Append(MakeBullet("我们提供三种交付模式：", true));
body.Append(MakeBullet("标准2天：集中培训，效果最佳", true));
body.Append(MakeBullet("模块化4个半天：每次3小时，可分两周完成", true));
body.Append(MakeBullet("线上+线下混合：线上学理论，线下做演练", true));

body.Append(MakePara("Q5：培训效果怎么衡量？", "Normal", bold: true, fontSize: 22));
body.Append(MakeBullet("我们提供三级评估体系：", true));
body.Append(MakeBullet("反应层：学员满意度调查（课程当天）", true));
body.Append(MakeBullet("学习层：知识掌握测试（课程结束）", true));
body.Append(MakeBullet("行为层：训后30天客户应对案例追踪（业绩数据对比）", true));

body.Append(MakePara("Q6：课程价格是多少？", "Normal", bold: true, fontSize: 22));
body.Append(MakeBullet("标准版课程定价为XX万/天（含教材、工具包、训后辅导）。", true));
body.Append(MakeBullet("定制版（结合企业实际情况和案例）需要进一步沟通。", true));
body.Append(MakeBullet("相比学员成交率的提升，这是一个高回报的投资。", true));

body.Append(MakePara("Q7：能不能先试听一下课程？", "Normal", bold: true, fontSize: 22));
body.Append(MakeBullet("可以。我们提供1小时线上试听服务，由讲师亲自讲解一个模块的核心内容。", true));
body.Append(MakeBullet("您可以直观感受课程质量和讲师风格，再决定是否合作。", true));

// Footer
body.Append(MakePara(" ", "Normal", fontSize: 20));
body.Append(MakePara("—— 完 ——", "Normal", center: true, color: "999999", fontSize: 20));

body.Append(sectPr);

mainPart.Document.Save();
doc.Dispose();
File.Copy(tempPath, outputPath, true);
File.Delete(tempPath);
Console.WriteLine($"Document created: {outputPath}");