using System;
using System.IO;
using System.Linq;
using DocumentFormat.OpenXml;
using DocumentFormat.OpenXml.Packaging;
using DocumentFormat.OpenXml.Wordprocessing;

string outputPath = @"D:\Downloads\行动计划进化课\完成课程包\05_讲师手册\讲师手册.docx";

Directory.CreateDirectory(Path.GetDirectoryName(outputPath)!);

using var doc = WordprocessingDocument.Create(outputPath, WordprocessingDocumentType.Document);
var mainPart = doc.AddMainDocumentPart();
mainPart.Document = new Document();
var body = new Body();
mainPart.Document.Body = body;

var stylesPart = mainPart.AddNewPart<StyleDefinitionsPart>();
stylesPart.Styles = new Styles();

// DocDefaults - simplified
var docDefaults = new DocDefaults();

var rPrDefault = new RunPropertiesDefault();
var rPrBase = new RunFonts();
rPrBase.Ascii = "Calibri";
rPrBase.HighAnsi = "Calibri";
rPrBase.EastAsia = "SimSun";
rPrBase.ComplexScript = "Arial";
rPrDefault.AppendChild(rPrBase);

var szDefault = new FontSize();
szDefault.Val = "22";
rPrDefault.AppendChild(szDefault);

var szCsDefault = new FontSizeComplexScript();
szCsDefault.Val = "22";
rPrDefault.AppendChild(szCsDefault);

docDefaults.AppendChild(rPrDefault);

// Paragraph defaults
var pPrDefault = new ParagraphPropertiesDefault();
var spacingDefault = new SpacingBetweenLines();
spacingDefault.After = "160";
spacingDefault.Line = "276";
spacingDefault.LineRule = LineSpacingRuleValues.Auto;
pPrDefault.AppendChild(spacingDefault);

docDefaults.AppendChild(pPrDefault);
stylesPart.Styles.AppendChild(docDefaults);

// Normal style
var normalStyle = new Style { Type = StyleValues.Paragraph, StyleId = "Normal", Default = true };
normalStyle.AppendChild(new StyleName { Val = "Normal" });
var normalPPr = new StyleParagraphProperties();
var normalSpacing = new SpacingBetweenLines { After = "160", Line = "276", LineRule = LineSpacingRuleValues.Auto };
normalPPr.AppendChild(normalSpacing);
normalStyle.AppendChild(normalPPr);
var normalRPr = new StyleRunProperties();
normalRPr.AppendChild(new RunFonts { Ascii = "Calibri", HighAnsi = "Calibri", EastAsia = "SimSun" });
normalRPr.AppendChild(new FontSize { Val = "22" });
normalRPr.AppendChild(new Color { Val = "333333" });
normalStyle.AppendChild(normalRPr);
stylesPart.Styles.AppendChild(normalStyle);

// Title style
var titleStyle = new Style { Type = StyleValues.Paragraph, StyleId = "Title" };
titleStyle.AppendChild(new StyleName { Val = "Title" });
var titlePPr = new StyleParagraphProperties();
titlePPr.AppendChild(new Justification { Val = JustificationValues.Center });
titlePPr.AppendChild(new SpacingBetweenLines { Before = "0", After = "0" });
titleStyle.AppendChild(titlePPr);
var titleRPr = new StyleRunProperties();
titleRPr.AppendChild(new RunFonts { Ascii = "Calibri Light", HighAnsi = "Calibri Light" });
titleRPr.AppendChild(new Bold());
titleRPr.AppendChild(new FontSize { Val = "52" });
titleRPr.AppendChild(new Color { Val = "1F3864" });
titleStyle.AppendChild(titleRPr);
stylesPart.Styles.AppendChild(titleStyle);

// Heading1
var h1Style = new Style { Type = StyleValues.Paragraph, StyleId = "Heading1" };
h1Style.AppendChild(new StyleName { Val = "Heading 1" });
var h1PPr = new StyleParagraphProperties();
h1PPr.AppendChild(new SpacingBetweenLines { Before = "480", After = "160" });
h1PPr.AppendChild(new OutlineLevel { Val = 0 });
h1PPr.AppendChild(new PageBreakBefore());
h1Style.AppendChild(h1PPr);
var h1RPr = new StyleRunProperties();
h1RPr.AppendChild(new RunFonts { Ascii = "Calibri Light", HighAnsi = "Calibri Light", EastAsia = "SimHei" });
h1RPr.AppendChild(new Bold());
h1RPr.AppendChild(new FontSize { Val = "40" });
h1RPr.AppendChild(new Color { Val = "1F3864" });
h1Style.AppendChild(h1RPr);
stylesPart.Styles.AppendChild(h1Style);

// Heading2
var h2Style = new Style { Type = StyleValues.Paragraph, StyleId = "Heading2" };
h2Style.AppendChild(new StyleName { Val = "Heading 2" });
var h2PPr = new StyleParagraphProperties();
h2PPr.AppendChild(new SpacingBetweenLines { Before = "360", After = "120" });
h2PPr.AppendChild(new OutlineLevel { Val = 1 });
h2Style.AppendChild(h2PPr);
var h2RPr = new StyleRunProperties();
h2RPr.AppendChild(new RunFonts { Ascii = "Calibri Light", HighAnsi = "Calibri Light", EastAsia = "SimHei" });
h2RPr.AppendChild(new Bold());
h2RPr.AppendChild(new FontSize { Val = "32" });
h2RPr.AppendChild(new Color { Val = "1F3864" });
h2Style.AppendChild(h2RPr);
stylesPart.Styles.AppendChild(h2Style);

// Heading3
var h3Style = new Style { Type = StyleValues.Paragraph, StyleId = "Heading3" };
h3Style.AppendChild(new StyleName { Val = "Heading 3" });
var h3PPr = new StyleParagraphProperties();
h3PPr.AppendChild(new SpacingBetweenLines { Before = "240", After = "80" });
h3PPr.AppendChild(new OutlineLevel { Val = 2 });
h3Style.AppendChild(h3PPr);
var h3RPr = new StyleRunProperties();
h3RPr.AppendChild(new RunFonts { Ascii = "Calibri Light", HighAnsi = "Calibri Light", EastAsia = "SimHei" });
h3RPr.AppendChild(new Bold());
h3RPr.AppendChild(new FontSize { Val = "28" });
h3RPr.AppendChild(new Color { Val = "2E75B6" });
h3Style.AppendChild(h3RPr);
stylesPart.Styles.AppendChild(h3Style);

// ListParagraph
var listStyle = new Style { Type = StyleValues.Paragraph, StyleId = "ListParagraph" };
listStyle.AppendChild(new StyleName { Val = "List Paragraph" });
var listPPr = new StyleParagraphProperties();
listPPr.AppendChild(new SpacingBetweenLines { Before = "0", After = "40" });
listPPr.AppendChild(new Indentation { Left = "720", Hanging = "360" });
listStyle.AppendChild(listPPr);
var listRPr = new StyleRunProperties();
listRPr.AppendChild(new RunFonts { Ascii = "Calibri", HighAnsi = "Calibri", EastAsia = "SimSun" });
listRPr.AppendChild(new FontSize { Val = "22" });
listStyle.AppendChild(listRPr);
stylesPart.Styles.AppendChild(listStyle);

// Quote style
var quoteStyle = new Style { Type = StyleValues.Paragraph, StyleId = "Quote" };
quoteStyle.AppendChild(new StyleName { Val = "Quote" });
var quotePPr = new StyleParagraphProperties();
quotePPr.AppendChild(new SpacingBetweenLines { Before = "240", After = "160" });
quotePPr.AppendChild(new Justification { Val = JustificationValues.Left });
quoteStyle.AppendChild(quotePPr);
var quoteRPr = new StyleRunProperties();
quoteRPr.AppendChild(new RunFonts { Ascii = "Calibri", HighAnsi = "Calibri", EastAsia = "SimSun" });
quoteRPr.AppendChild(new FontSize { Val = "22" });
quoteRPr.AppendChild(new Color { Val = "444444" });
quoteRPr.AppendChild(new Italic());
quoteStyle.AppendChild(quoteRPr);
stylesPart.Styles.AppendChild(quoteStyle);

// IntenseQuote style
var iqStyle = new Style { Type = StyleValues.Paragraph, StyleId = "IntenseQuote" };
iqStyle.AppendChild(new StyleName { Val = "Intense Quote" });
var iqPPr = new StyleParagraphProperties();
iqPPr.AppendChild(new SpacingBetweenLines { Before = "120", After = "120" });
iqPPr.AppendChild(new Justification { Val = JustificationValues.Left });
iqStyle.AppendChild(iqPPr);
var iqRPr = new StyleRunProperties();
iqRPr.AppendChild(new RunFonts { Ascii = "Calibri", HighAnsi = "Calibri", EastAsia = "SimSun" });
iqRPr.AppendChild(new Bold());
iqRPr.AppendChild(new FontSize { Val = "22" });
iqRPr.AppendChild(new Color { Val = "1F3864" });
iqStyle.AppendChild(iqRPr);
stylesPart.Styles.AppendChild(iqStyle);

stylesPart.Styles.Save();

// ==================== CONTENT ====================

// Cover Page
body.AppendChild(CreateParagraph("行动计划进化课", "Title"));
body.AppendChild(CreateParagraph("讲师手册", "Title"));
body.AppendChild(CreateParagraph("", "Normal"));
body.AppendChild(CreateParagraph("", "Normal"));
body.AppendChild(CreateParagraph("版本：1.0", "Normal"));
body.AppendChild(CreateParagraph("适用对象：授权讲师", "Normal"));
body.AppendChild(CreateParagraph("课时：完整课程约12小时（可分模块）", "Normal"));

AddPageBreak(body);

// TOC
body.AppendChild(CreateParagraph("目录", "Heading1"));
body.AppendChild(CreateParagraph("（目录将在Word中更新时自动生成）", "Normal"));
AddPageBreak(body);

// Part 1
body.AppendChild(CreateParagraph("第一部分：课程总览", "Heading1"));

body.AppendChild(CreateParagraph("1.1 课程定位与目标", "Heading2"));
body.AppendChild(CreateParagraph("本课程基于行为设计学核心原理，帮助讲师掌握一套系统化的行动计划设计方法。", "Normal"));

body.AppendChild(CreateParagraph("核心目标", "Heading3"));
body.AppendChild(CreateParagraph("完成本课程学习后，学员将能够：", "Normal"));
body.AppendChild(CreateBulletParagraph("诊断行动计划失败的真正原因（不是意志力问题）"));
body.AppendChild(CreateBulletParagraph("运用触发设计，让行动自己提醒自己"));
body.AppendChild(CreateBulletParagraph("运用能力设计，把行动门槛降到几乎为零"));
body.AppendChild(CreateBulletParagraph("运用动机设计，建立承诺与外部约束机制"));
body.AppendChild(CreateBulletParagraph("运用预案设计，提前预见中断并设计恢复路径"));

body.AppendChild(CreateParagraph("课程价值主张", "Heading3"));
body.AppendChild(CreateParagraph("问题不在于意志力，而在于计划设计。", "IntenseQuote"));
body.AppendChild(CreateParagraph("真正撑得住计划的，往往不是动机最强的人，而是把触发和能力提前设计好了的人。", "Quote"));

body.AppendChild(CreateParagraph("1.2 目标学员画像", "Heading2"));
body.AppendChild(CreateBulletParagraph("有明确目标和行动计划，但执行不下去的职场人"));
body.AppendChild(CreateBulletParagraph("经常制定计划却虎头蛇尾的学习者"));
body.AppendChild(CreateBulletParagraph("企业内部培训师，需要教授行为改变方法论"));

body.AppendChild(CreateParagraph("1.3 课时与结构", "Heading2"));
body.AppendChild(CreateParagraph("课程总时长：约12小时（可根据实际需求拆分）", "Normal"));

var t1 = new Table();
t1.AppendChild(CreateTableProperties());
t1.AppendChild(CreateHeaderRow(new[] { "模块", "主题", "建议时长" }));
t1.AppendChild(CreateTableRow(new[] { "开篇", "计划为什么总是想得美做不到", "45-60分钟" }));
t1.AppendChild(CreateTableRow(new[] { "核心框架", "行动公式：触发x能力x动机", "60分钟" }));
t1.AppendChild(CreateTableRow(new[] { "触发设计", "目视法、匹配法、绑定法", "150分钟" }));
t1.AppendChild(CreateTableRow(new[] { "能力设计", "流程优化、分区法、模板法", "210分钟" }));
t1.AppendChild(CreateTableRow(new[] { "动机设计", "承诺法、激励法、游戏化", "210分钟" }));
t1.AppendChild(CreateTableRow(new[] { "预案设计", "如果-那么预案", "90分钟" }));
t1.AppendChild(CreateTableRow(new[] { "整合实战", "综合设计与演练", "120分钟" }));
body.AppendChild(t1);

body.AppendChild(CreateParagraph("1.4 教学准备", "Heading2"));
body.AppendChild(CreateParagraph("讲师准备", "Heading3"));
body.AppendChild(CreateBulletParagraph("完整阅读教学文档，熟悉每个模块的核心原理"));
body.AppendChild(CreateBulletParagraph("准备个人计划事故复盘案例（贯穿全课程的示范素材）"));
body.AppendChild(CreateBulletParagraph("准备3-5个额外真实案例，用于讲解和互动"));
body.AppendChild(CreateBulletParagraph("提前了解学员行业背景，针对性准备案例"));

body.AppendChild(CreateParagraph("物料准备", "Heading3"));
body.AppendChild(CreateBulletParagraph("学员手册（每人一本）"));
body.AppendChild(CreateBulletParagraph("练习册（每人一本）"));
body.AppendChild(CreateBulletParagraph("行动计划表（每人一份）"));
body.AppendChild(CreateBulletParagraph("白板/大白纸（用于小组讨论）"));

body.AppendChild(CreateParagraph("环境要求", "Heading3"));
body.AppendChild(CreateBulletParagraph("可调动的座椅安排（便于小组讨论）"));
body.AppendChild(CreateBulletParagraph("清晰的可视化屏幕或投影"));
body.AppendChild(CreateBulletParagraph("充足的电源插座"));

AddPageBreak(body);

// Part 2
body.AppendChild(CreateParagraph("第二部分：讲师指南", "Heading1"));

body.AppendChild(CreateParagraph("2.1 讲师角色定位", "Heading2"));
body.AppendChild(CreateParagraph("讲师在本课程中承担多重角色：", "Normal"));

body.AppendChild(CreateParagraph("设计师而非监督者", "Heading3"));
body.AppendChild(CreateParagraph("讲师的核心任务是帮助学员建立计划可以被设计出来的信念，而不是监督学员要坚持。", "Normal"));

body.AppendChild(CreateParagraph("引导者而非灌输者", "Heading3"));
body.AppendChild(CreateParagraph("讲师应引导学员自己得出结论，而不是直接告诉答案。", "Normal"));

body.AppendChild(CreateParagraph("教练而非裁判", "Heading3"));
body.AppendChild(CreateParagraph("讲师要关注每个学员的独特情况，提供个性化的设计建议。", "Normal"));

body.AppendChild(CreateParagraph("2.2 授课原则", "Heading2"));

body.AppendChild(CreateParagraph("原则一：从学员的真实案例出发", "Heading3"));
body.AppendChild(CreateParagraph("开篇的计划事故复盘练习是最重要的环节。", "Normal"));
body.AppendChild(CreateParagraph("讲师话术：", "IntenseQuote"));
body.AppendChild(CreateParagraph("\"这份复盘会贯穿整个课程。你不需要凭空想象后面的练习场景，直接用它就行。\"", "Quote"));

body.AppendChild(CreateParagraph("原则二：先打破再建立", "Heading3"));
body.AppendChild(CreateParagraph("在引入任何新方法之前，先帮助学员打破意志力不足这个归因。", "Normal"));

body.AppendChild(CreateParagraph("原则三：方法要落在具体场景上", "Heading3"));
body.AppendChild(CreateParagraph("每个方法都要配合具体的、可想象的使用场景。", "Normal"));

body.AppendChild(CreateParagraph("原则四：留足练习时间", "Heading3"));
body.AppendChild(CreateParagraph("练习是课程真正的骨架。讲师要控制讲解时间，确保练习时间不被压缩。", "Normal"));

body.AppendChild(CreateParagraph("2.3 时间分配建议", "Heading2"));
body.AppendChild(CreateParagraph("以下是一个标准的2小时模块时间分配：", "Normal"));

var t2 = new Table();
t2.AppendChild(CreateTableProperties());
t2.AppendChild(CreateHeaderRow(new[] { "环节", "时长", "内容要点" }));
t2.AppendChild(CreateTableRow(new[] { "开场", "10分钟", "回顾上节内容，本节目标" }));
t2.AppendChild(CreateTableRow(new[] { "原理讲解", "20分钟", "方法原理+案例（2-3个）" }));
t2.AppendChild(CreateTableRow(new[] { "案例分析", "15分钟", "引导学员诊断案例" }));
t2.AppendChild(CreateTableRow(new[] { "练习时间", "40分钟", "学员为计划设计应用该方法" }));
t2.AppendChild(CreateTableRow(new[] { "小组分享", "15分钟", "2-3组分享设计，全班讨论" }));
t2.AppendChild(CreateTableRow(new[] { "总结收尾", "10分钟", "核心要点回顾，下节预告" }));
t2.AppendChild(CreateTableRow(new[] { "缓冲时间", "10分钟", "问答、补充、应变" }));
body.AppendChild(t2);

AddPageBreak(body);

// Part 3
body.AppendChild(CreateParagraph("第三部分：教学模块详解", "Heading1"));

body.AppendChild(CreateParagraph("模块一：开篇——你的计划为什么总是想得美做不到", "Heading2"));

body.AppendChild(CreateParagraph("1. 教学目的", "Heading3"));
body.AppendChild(CreateBulletParagraph("帮助学员看清计划失败的真正原因不是意志力不足"));
body.AppendChild(CreateBulletParagraph("建立计划可以被设计出来的核心信念"));
body.AppendChild(CreateBulletParagraph("完成一份个人计划事故复盘，作为全课程的真实案例素材"));

body.AppendChild(CreateParagraph("2. 核心内容", "Heading3"));

body.AppendChild(CreateParagraph("【Why篇】为什么你的计划总是想得美，做不到", "Heading3"));
body.AppendChild(CreateBulletParagraph("两个典型画面：压在文件夹底下的行动计划表、被红色箭头提醒的健身计划"));
body.AppendChild(CreateBulletParagraph("真实案例库：新年计划、在线课完成率、早起打卡群"));
body.AppendChild(CreateBulletParagraph("关键认知：意志力是世界上最靠不住的东西"));

body.AppendChild(CreateParagraph("【What篇】计划失败的真正原因是什么", "Heading3"));
body.AppendChild(CreateBulletParagraph("关键认知：问题出在设计，不在你身上"));
body.AppendChild(CreateBulletParagraph("真实案例：核潜艇官兵体检设计、垃圾分类实验"));

body.AppendChild(CreateParagraph("【How篇】这门课会怎么带你走", "Heading3"));
body.AppendChild(CreateBulletParagraph("课程全景图：13个部分的关系"));
body.AppendChild(CreateBulletParagraph("核心框架预告：触发x能力x动机"));

body.AppendChild(CreateParagraph("3. 讲师话术（完整讲解词）", "Heading3"));

body.AppendChild(CreateParagraph("【开场白】", "IntenseQuote"));
body.AppendChild(CreateParagraph("\"在正式开始之前，先做一件很小的事。停顿三秒，回想你这辈子定过的所有计划里，有没有哪一份，是你坚持到了最后、彻底完成的？\"", "Quote"));
body.AppendChild(CreateParagraph("\"这不是因为你这个人特别没毅力。这是几乎所有人的共同处境。这门课接下来要讲的第一件事，就是为什么会这样。\"", "Quote"));

body.AppendChild(CreateParagraph("【金句】", "IntenseQuote"));
body.AppendChild(CreateParagraph("\"意志力是世界上最靠不住的东西——它会疲劳，会消耗，会在你最需要它的时候恰好掉线。\"", "Quote"));
body.AppendChild(CreateParagraph("\"真正的改变，不是让自己变成一个更有毅力的人，而是让自己拥有一套不需要毅力就能运转的行为系统。\"", "Quote"));

body.AppendChild(CreateParagraph("4. 案例讲解流程", "Heading3"));

body.AppendChild(CreateParagraph("案例一：新年计划", "IntenseQuote"));
body.AppendChild(CreateBulletParagraph("讲述角度：从几乎必然失败的现象切入"));
body.AppendChild(CreateBulletParagraph("每年一月计划，到二月底朋友圈没人再提，到十二月又出现在下一年的清单里"));

body.AppendChild(CreateParagraph("案例二：在线课完成率", "IntenseQuote"));
body.AppendChild(CreateBulletParagraph("讲述角度：用数据揭示买课到真正学习的鸿沟"));
body.AppendChild(CreateBulletParagraph("60%的付费课程从未打开；打开的用户中完成率不到10%"));

body.AppendChild(CreateParagraph("案例三：早起打卡群", "IntenseQuote"));
body.AppendChild(CreateBulletParagraph("追踪什么人最终坚持下来"));
body.AppendChild(CreateBulletParagraph("关键发现：坚持下来的人不是意志力强，而是用了不靠毅力的方法"));

body.AppendChild(CreateParagraph("5. 互动设计说明", "Heading3"));

body.AppendChild(CreateParagraph("互动名称：计划事故复盘（最重要的互动环节）", "Normal"));
body.AppendChild(CreateBulletParagraph("目的：找到一次学员真实经历过的计划没执行下去的事"));
body.AppendChild(CreateBulletParagraph("时长：10分钟独立书写 + 5分钟自愿分享"));

body.AppendChild(CreateParagraph("引导话术：", "IntenseQuote"));
body.AppendChild(CreateParagraph("\"现在轮到你了。不需要查任何资料，凭记忆完成就好。\"", "Quote"));
body.AppendChild(CreateParagraph("\"选一件具体的事，不要选'我一直都做不到的早起'这种笼统描述。\"", "Quote"));

body.AppendChild(CreateParagraph("6. 提问设计", "Heading3"));

body.AppendChild(CreateParagraph("Q1：打破意志力不够的归因", "IntenseQuote"));
body.AppendChild(CreateParagraph("\"你有没有见过一个人，比你意志力更坚定、更自律，但最后他的计划还是失败了？\"", "Quote"));

body.AppendChild(CreateParagraph("Q2：引导反思自己的计划失败", "IntenseQuote"));
body.AppendChild(CreateParagraph("\"回想你曾经制定过的一个计划，它是在哪个具体的时刻被中断的？\"", "Quote"));

body.AppendChild(CreateParagraph("7. 常见问题与应对", "Heading3"));

body.AppendChild(CreateParagraph("Q：学员说我就是意志力不够，没有别的问题怎么办？", "IntenseQuote"));
body.AppendChild(CreateBulletParagraph("不要直接反驳，而是引导他做一个实验"));
body.AppendChild(CreateBulletParagraph("讲师话术：\"我邀请你做一个小实验。选一件你一直想做但没做成的小事，用目视法，坚持一周。你会发现同样的自己，只是换了一个设计，结果就不同了。\"", 0));

body.AppendChild(CreateParagraph("Q：学员觉得写复盘太麻烦了，不想写怎么办？", "IntenseQuote"));
body.AppendChild(CreateBulletParagraph("简化要求：不需要写得太详细，只要回答四个问题就行"));
body.AppendChild(CreateBulletParagraph("强调价值：这份复盘会贯穿整个课程，是后面所有练习的素材"));

body.AppendChild(CreateParagraph("8. 检验点设计", "Heading3"));

body.AppendChild(CreateBulletParagraph("打破我意志力不够这个习惯性归因"));
body.AppendChild(CreateBulletParagraph("开始相信计划失败是可以被设计出来的问题，因此也可以被设计出来的方法解决"));
body.AppendChild(CreateBulletParagraph("完成了一份属于他自己的真实案例"));

body.AppendChild(CreateParagraph("快速检验方法：", "Normal"));
body.AppendChild(CreateBulletParagraph("举手调研：现在还认为自己的计划失败主要是因为意志力不够的同学，请举手。"));

body.AppendChild(CreateParagraph("9. 时间分配", "Heading3"));

var t3 = new Table();
t3.AppendChild(CreateTableProperties());
t3.AppendChild(CreateHeaderRow(new[] { "环节", "时长", "备注" }));
t3.AppendChild(CreateTableRow(new[] { "开场引入", "5分钟", "停顿回忆练习" }));
t3.AppendChild(CreateTableRow(new[] { "Why篇讲解", "15分钟", "两个画面+案例库" }));
t3.AppendChild(CreateTableRow(new[] { "What篇讲解", "10分钟", "核心认知+成功案例" }));
t3.AppendChild(CreateTableRow(new[] { "练习：计划事故复盘", "10分钟", "独立完成" }));
t3.AppendChild(CreateTableRow(new[] { "自愿分享", "5分钟", "2-3人分享" }));
t3.AppendChild(CreateTableRow(new[] { "How篇预告", "5分钟", "课程全景图" }));
t3.AppendChild(CreateTableRow(new[] { "总结与下节预告", "5分钟", "核心信念强化" }));
t3.AppendChild(CreateTableRow(new[] { "合计", "55分钟", "可根据实际调整" }));
body.AppendChild(t3);

AddPageBreak(body);

// Module 2
body.AppendChild(CreateParagraph("模块二：核心框架——行动公式", "Heading2"));

body.AppendChild(CreateParagraph("1. 教学目的", "Heading3"));
body.AppendChild(CreateBulletParagraph("帮助学员理解行动发生的底层逻辑"));
body.AppendChild(CreateBulletParagraph("掌握触发x能力x动机行动公式"));
body.AppendChild(CreateBulletParagraph("学会诊断一个计划失败主要卡在哪一环"));

body.AppendChild(CreateParagraph("2. 核心内容", "Heading3"));

body.AppendChild(CreateParagraph("行动公式：触发 x 能力 x 动机", "IntenseQuote"));
body.AppendChild(CreateParagraph("三者不是加起来凑够分就行的关系，而是相乘的关系——触发10分、能力10分，但动机那天恰好是0分，结果还是0。", "Normal"));

body.AppendChild(CreateParagraph("【触发】", "Heading3"));
body.AppendChild(CreateParagraph("那一刻，有没有什么东西在提醒你。现在该做这件事了。没有触发，行动不会自己冒出来。", "Normal"));

body.AppendChild(CreateParagraph("【能力】", "Heading3"));
body.AppendChild(CreateParagraph("那一刻，这件事做起来容不容易。如果门槛太高，大脑会自动选更简单的事。", "Normal"));

body.AppendChild(CreateParagraph("【动机】", "Heading3"));
body.AppendChild(CreateParagraph("那一刻，你有多想做这件事。动机受状态影响很大，今天可能是10分，明天可能是0。", "Normal"));

body.AppendChild(CreateParagraph("3. 讲师话术", "Heading3"));

body.AppendChild(CreateParagraph("【公式引入】", "IntenseQuote"));
body.AppendChild(CreateParagraph("\"在你正式开始练习之前，先预告一下这门课的核心框架，让你知道接下来在学什么。\"", "Quote"));
body.AppendChild(CreateParagraph("\"任何一个行动，无论大小，要在某个具体的时刻真正发生，背后都同时需要三样东西凑齐：触发、能力、动机。\"", "Quote"));

body.AppendChild(CreateParagraph("【三者关系】", "IntenseQuote"));
body.AppendChild(CreateParagraph("\"三者的关系，不是'加起来凑够分就行'，而是相乘的关系——触发10分、能力10分，但动机那天恰好是0分，结果还是0。\"", "Quote"));

body.AppendChild(CreateParagraph("【关键洞察】", "IntenseQuote"));
body.AppendChild(CreateParagraph("\"真正撑得住计划的，往往不是动机最强的人，而是把触发和能力提前设计好了的人——因为这两项一旦设计完成，几乎不会随着你今天的状态好坏而消失。\"", "Quote"));

body.AppendChild(CreateParagraph("4. 案例讲解", "Heading3"));

body.AppendChild(CreateParagraph("案例：体检单上的红色箭头", "IntenseQuote"));
body.AppendChild(CreateBulletParagraph("场景：体检报告出来，看到超标指标，暗下决心要每天走八千步"));
body.AppendChild(CreateBulletParagraph("触发：体检报告那天的决心很强烈，但这不是持续的触发"));
body.AppendChild(CreateBulletParagraph("能力：走八千步本身不难，但如果没有提前安排时间/路线，就变得很难"));
body.AppendChild(CreateBulletParagraph("动机：第一周很强，第五周可能就淡了"));

body.AppendChild(CreateParagraph("5. 互动设计", "Heading3"));

body.AppendChild(CreateParagraph("互动名称：行动公式诊断", "Normal"));
body.AppendChild(CreateBulletParagraph("时长：10分钟"));
body.AppendChild(CreateBulletParagraph("形式：小组讨论，每组分析2-3个学员的复盘案例"));

body.AppendChild(CreateParagraph("6. 提问设计", "Heading3"));

body.AppendChild(CreateParagraph("Q1：理解相乘关系", "IntenseQuote"));
body.AppendChild(CreateParagraph("\"假设你今天触发是满分10分，能力也是10分，但动机是0分——行动会发生吗？\"", "Quote"));

body.AppendChild(CreateParagraph("Q2：引导诊断", "IntenseQuote"));
body.AppendChild(CreateParagraph("\"回想你刚才写的那个失败计划。如果给它装一个'故障诊断灯'，哪个灯会亮——触发？能力？还是动机？\"", "Quote"));

body.AppendChild(CreateParagraph("7. 常见问题", "Heading3"));

body.AppendChild(CreateParagraph("Q：那动机是不是就不重要了？", "IntenseQuote"));
body.AppendChild(CreateBulletParagraph("解释：动机当然重要，三者缺一不可"));
body.AppendChild(CreateBulletParagraph("重点：触发和能力设计好了，能保证计划的下限；动机设计好了，能提升上限。"));

body.AppendChild(CreateParagraph("8. 检验点", "Heading3"));

body.AppendChild(CreateBulletParagraph("学员能用行动公式分析自己那份计划失败的原因"));
body.AppendChild(CreateBulletParagraph("学员能说出为什么触发和能力设计性价比高于动机设计"));

body.AppendChild(CreateParagraph("9. 时间分配", "Heading3"));

var t4 = new Table();
t4.AppendChild(CreateTableProperties());
t4.AppendChild(CreateHeaderRow(new[] { "环节", "时长", "备注" }));
t4.AppendChild(CreateTableRow(new[] { "公式引入", "10分钟", "触发x能力x动机讲解" }));
t4.AppendChild(CreateTableRow(new[] { "相乘关系讲解", "10分钟", "用案例说明为何是相乘" }));
t4.AppendChild(CreateTableRow(new[] { "行动公式诊断练习", "15分钟", "用学员自己的案例" }));
t4.AppendChild(CreateTableRow(new[] { "小组分享", "10分钟", "每组2-3个案例" }));
t4.AppendChild(CreateTableRow(new[] { "总结与下节预告", "5分钟", "触发设计预告" }));
t4.AppendChild(CreateTableRow(new[] { "合计", "50分钟", "建议与下节合并" }));
body.AppendChild(t4);

AddPageBreak(body);

// Module 3-12 summary
body.AppendChild(CreateParagraph("模块三至十二：详细模块内容（框架）", "Heading2"));

body.AppendChild(CreateParagraph("以下为后续模块的核心结构说明，每个模块的完整内容（讲师话术、案例、互动、时间分配等）请参照教学文档。", "Normal"));

body.AppendChild(CreateParagraph("模块三：触发设计（上）——目视法与匹配法", "Heading3"));
body.AppendChild(CreateBulletParagraph("目视法：让提醒在视野范围内自然出现"));
body.AppendChild(CreateBulletParagraph("匹配法：把新行为嫁接在已有习惯上"));

body.AppendChild(CreateParagraph("模块四：触发设计（下）——绑定法与提醒设计", "Heading3"));
body.AppendChild(CreateBulletParagraph("绑定法：把想要的行为和必须做的行为绑定"));
body.AppendChild(CreateBulletParagraph("提醒设计：利用时间、空间、人物特征设计触发"));

body.AppendChild(CreateParagraph("模块五至七：能力设计", "Heading3"));
body.AppendChild(CreateBulletParagraph("流程优化：减少步骤，降低启动门槛"));
body.AppendChild(CreateBulletParagraph("提前准备：消除执行前的障碍"));
body.AppendChild(CreateBulletParagraph("分区法与弱化法：减少干扰，降低执行阻力"));
body.AppendChild(CreateBulletParagraph("模板法与简化法：用模板简化决策"));

body.AppendChild(CreateParagraph("模块八至十：动机设计", "Heading3"));
body.AppendChild(CreateBulletParagraph("承诺法与公开化：建立外在约束"));
body.AppendChild(CreateBulletParagraph("激励法与游戏化：增加内在趣味"));
body.AppendChild(CreateBulletParagraph("关系绑定与损失规避：用关系和损失增加动力"));

body.AppendChild(CreateParagraph("模块十一：预案设计", "Heading3"));
body.AppendChild(CreateBulletParagraph("如果-那么预案：提前预见中断点"));
body.AppendChild(CreateBulletParagraph("恢复路径设计：中断后如何快速接回"));

body.AppendChild(CreateParagraph("模块十二：整合实战", "Heading3"));
body.AppendChild(CreateBulletParagraph("综合运用四大维度的设计方法"));
body.AppendChild(CreateBulletParagraph("为真实计划重新设计完整方案"));

AddPageBreak(body);

// Part 4
body.AppendChild(CreateParagraph("第四部分：综合演练指引", "Heading1"));

body.AppendChild(CreateParagraph("4.1 演练设计原理", "Heading2"));
body.AppendChild(CreateParagraph("综合演练是课程的高潮环节。前面各模块已经分别讲了触发、能力、动机、预案四个维度的设计方法，综合演练的任务是把这些方法整合起来，运用到学员自己的真实计划上。", "Normal"));

body.AppendChild(CreateParagraph("4.2 演练流程", "Heading2"));

body.AppendChild(CreateParagraph("第一阶段：个人设计（40分钟）", "Heading3"));
body.AppendChild(CreateBulletParagraph("学员基于自己的计划事故复盘，重新设计一个完整的新计划"));
body.AppendChild(CreateBulletParagraph("必须包含：至少一个触发设计、至少一个能力设计、至少一个动机设计、至少一个预案设计"));
body.AppendChild(CreateBulletParagraph("用行动计划表呈现设计成果"));

body.AppendChild(CreateParagraph("第二阶段：小组评审（30分钟）", "Heading3"));
body.AppendChild(CreateBulletParagraph("4-5人小组，每位学员用3分钟分享自己的新计划"));
body.AppendChild(CreateBulletParagraph("其他组员按照诊断清单提出建议"));
body.AppendChild(CreateBulletParagraph("小组选出1-2个最有代表性的方案"));

body.AppendChild(CreateParagraph("第三阶段：全班分享（30分钟）", "Heading3"));
body.AppendChild(CreateBulletParagraph("每组分享1个最有代表性的方案"));
body.AppendChild(CreateBulletParagraph("全班讨论：哪些设计最值得借鉴？哪些地方可以优化？"));

body.AppendChild(CreateParagraph("第四阶段：承诺与监督（20分钟）", "Heading3"));
body.AppendChild(CreateBulletParagraph("学员书面承诺：未来一周要做什么"));
body.AppendChild(CreateBulletParagraph("两两配对：互相监督对方的执行"));
body.AppendChild(CreateBulletParagraph("建立后续跟进机制"));

body.AppendChild(CreateParagraph("4.3 讲师话术", "Heading2"));

body.AppendChild(CreateParagraph("【开场引导】", "IntenseQuote"));
body.AppendChild(CreateParagraph("\"现在到了课程最关键的环节——你要把自己的真实计划重新设计一遍。前面学的每一个方法，都要用上去。\"", "Quote"));
body.AppendChild(CreateParagraph("\"这不是一个作业，这是一个承诺。设计完之后，你要真的去执行。\"", "Quote"));

body.AppendChild(CreateParagraph("【承诺引导】", "IntenseQuote"));
body.AppendChild(CreateParagraph("\"设计完成后，你要做一件事：写下你的承诺。不是承诺给老师看，是承诺给自己看。\"", "Quote"));
body.AppendChild(CreateParagraph("\"找一个搭档，你们互相监督对方的执行。一周后，你们再联系，汇报执行情况。\"", "Quote"));

AddPageBreak(body);

// Part 5
body.AppendChild(CreateParagraph("第五部分：评估工具使用说明", "Heading1"));

body.AppendChild(CreateParagraph("5.1 评估维度", "Heading2"));

body.AppendChild(CreateParagraph("知识掌握", "Heading3"));
body.AppendChild(CreateBulletParagraph("评估方式：练习册答题、案例分析"));
body.AppendChild(CreateBulletParagraph("检验学员是否理解行动公式的原理和应用"));

body.AppendChild(CreateParagraph("技能运用", "Heading3"));
body.AppendChild(CreateBulletParagraph("评估方式：综合演练中的设计方案"));
body.AppendChild(CreateBulletParagraph("检验学员能否综合运用四大维度的设计方法"));

body.AppendChild(CreateParagraph("行为改变", "Heading3"));
body.AppendChild(CreateBulletParagraph("评估方式：课后一周行动计划执行情况"));

body.AppendChild(CreateParagraph("学习转化", "Heading3"));
body.AppendChild(CreateBulletParagraph("评估方式：课后30天跟进访谈"));

body.AppendChild(CreateParagraph("5.2 评估工具", "Heading2"));

body.AppendChild(CreateBulletParagraph("工具一：学员手册"));
body.AppendChild(CreateBulletParagraph("工具二：练习册"));
body.AppendChild(CreateBulletParagraph("工具三：行动计划表"));
body.AppendChild(CreateBulletParagraph("工具四：课后跟进表"));

body.AppendChild(CreateParagraph("5.3 评估时间表", "Heading2"));

var t5 = new Table();
t5.AppendChild(CreateTableProperties());
t5.AppendChild(CreateHeaderRow(new[] { "时间点", "评估内容", "评估方式" }));
t5.AppendChild(CreateTableRow(new[] { "课前", "学员基础水平", "访谈/问卷" }));
t5.AppendChild(CreateTableRow(new[] { "课中", "知识掌握", "练习册+演练" }));
t5.AppendChild(CreateTableRow(new[] { "课后一周", "行为改变", "跟进访谈" }));
t5.AppendChild(CreateTableRow(new[] { "课后30天", "学习转化", "跟进访谈" }));
body.AppendChild(t5);

AddPageBreak(body);

// Part 6 - Appendix
body.AppendChild(CreateParagraph("第六部分：附录", "Heading1"));

body.AppendChild(CreateParagraph("附录一：课程资源清单", "Heading2"));

body.AppendChild(CreateParagraph("【教学材料】", "Normal"));
body.AppendChild(CreateBulletParagraph("教学文档（13个模块的完整教学内容）"));
body.AppendChild(CreateBulletParagraph("讲师手册（本书）"));
body.AppendChild(CreateBulletParagraph("学员手册（每个模块的核心要点）"));
body.AppendChild(CreateBulletParagraph("练习册（六关练习题）"));

body.AppendChild(CreateParagraph("【工具表单】", "Normal"));
body.AppendChild(CreateBulletParagraph("计划事故复盘表"));
body.AppendChild(CreateBulletParagraph("行动计划表（新计划设计模板）"));
body.AppendChild(CreateBulletParagraph("诊断清单（四大维度检查）"));
body.AppendChild(CreateBulletParagraph("承诺书模板"));
body.AppendChild(CreateBulletParagraph("课后跟进表"));

body.AppendChild(CreateParagraph("【视觉材料】", "Normal"));
body.AppendChild(CreateBulletParagraph("课程PPT（每个模块的演示文稿）"));
body.AppendChild(CreateBulletParagraph("HTML可视化版本（在线学习用）"));

body.AppendChild(CreateParagraph("附录二：参考文献", "Heading2"));
body.AppendChild(CreateBulletParagraph("《福格行为模型》- B.J. Fogg"));
body.AppendChild(CreateBulletParagraph("《习惯的力量》- Charles Duhigg"));
body.AppendChild(CreateBulletParagraph("《原子习惯》- James Clear"));
body.AppendChild(CreateBulletParagraph("《行为设计学》- Nir Eyal"));

body.AppendChild(CreateParagraph("附录三：常见问题汇总（FAQ）", "Heading2"));

body.AppendChild(CreateParagraph("Q1：这个课程和一般的时间管理课有什么区别？", "IntenseQuote"));
body.AppendChild(CreateParagraph("时间管理课通常关注如何安排时间，本课程关注如何让行动自动发生。", "Normal"));

body.AppendChild(CreateParagraph("Q2：如果学员的动机真的很低，是不是这个课程没用？", "IntenseQuote"));
body.AppendChild(CreateParagraph("如果动机是零，说明这件事对学员来说本身就不是真正的目标。先帮助学员找到真正的目标，比教授方法更重要。", "Normal"));

body.AppendChild(CreateParagraph("Q3：课后学员反馈当时听懂了，但回去还是不知道怎么用怎么办？", "IntenseQuote"));
body.AppendChild(CreateParagraph("这是正常的迁移困难。讲师可以在课程结束时预留15分钟，让学员直接演练为明天的某个计划设计触发。", "Normal"));

body.AppendChild(CreateParagraph("Q4：我已经试过很多方法了，这个课会有什么不同？", "IntenseQuote"));
body.AppendChild(CreateParagraph("很多方法没用，不是因为方法本身错了，而是因为方法没有系统化。这个课给你的是一套系统——四个维度组合起来，才能真正撑住一个计划。", "Normal"));

body.AppendChild(CreateParagraph("", "Normal"));
body.AppendChild(CreateParagraph("", "Normal"));
body.AppendChild(CreateParagraph("—— 讲师手册正文结束 ——", "Normal"));
body.AppendChild(CreateParagraph("", "Normal"));

// Section properties (A4)
var sectPr = new SectionProperties();
sectPr.AppendChild(new PageSize { Width = 11906, Height = 16838 });
sectPr.AppendChild(new PageMargin { Top = 1440, Right = 1440, Bottom = 1440, Left = 1440, Header = 720, Footer = 720, Gutter = 0 });
body.AppendChild(sectPr);

Console.WriteLine("Instructor Manual created: " + outputPath);
Console.WriteLine("File size: " + new FileInfo(outputPath).Length + " bytes");

// Helper functions
Paragraph CreateParagraph(string text, string styleId)
{
    var para = new Paragraph();
    var pPr = new ParagraphProperties();
    pPr.AppendChild(new ParagraphStyleId { Val = styleId });
    para.AppendChild(pPr);
    var run = new Run();
    run.AppendChild(new Text(text) { Space = SpaceProcessingModeValues.Preserve });
    para.AppendChild(run);
    return para;
}

Paragraph CreateBulletParagraph(string text, int indentLevel = 0)
{
    var para = new Paragraph();
    var pPr = new ParagraphProperties();
    pPr.AppendChild(new ParagraphStyleId { Val = "ListParagraph" });
    pPr.AppendChild(new Indentation { Left = ((indentLevel + 1) * 720).ToString(), Hanging = "360" });
    para.AppendChild(pPr);
    var run = new Run();
    run.AppendChild(new Text("• ") { Space = SpaceProcessingModeValues.Preserve });
    para.AppendChild(run);
    run = new Run();
    run.AppendChild(new Text(text) { Space = SpaceProcessingModeValues.Preserve });
    para.AppendChild(run);
    return para;
}

void AddPageBreak(Body b)
{
    var para = new Paragraph();
    var run = new Run();
    run.AppendChild(new Break { Type = BreakValues.Page });
    para.AppendChild(run);
    b.AppendChild(para);
}

TableProperties CreateTableProperties()
{
    return new TableProperties(
        new TableWidth { Width = "5000", Type = TableWidthUnitValues.Pct },
        new TableBorders(
            new TopBorder { Val = BorderValues.Single, Size = 4, Color = "1F3864" },
            new BottomBorder { Val = BorderValues.Single, Size = 4, Color = "1F3864" },
            new LeftBorder { Val = BorderValues.Single, Size = 4, Color = "1F3864" },
            new RightBorder { Val = BorderValues.Single, Size = 4, Color = "1F3864" },
            new InsideHorizontalBorder { Val = BorderValues.Single, Size = 4, Color = "2E75B6" },
            new InsideVerticalBorder { Val = BorderValues.Single, Size = 4, Color = "2E75B6" }
        ),
        new TableCellMarginDefault(
            new TopMargin { Width = "57", Type = TableWidthUnitValues.Auto },
            new TableCellMargin(
                new LeftMargin { Width = "108", Type = TableWidthUnitValues.Auto },
                new RightMargin { Width = "108", Type = TableWidthUnitValues.Auto }
            )
        )
    );
}

TableRow CreateHeaderRow(string[] cells)
{
    var row = new TableRow();
    foreach (var cellText in cells)
    {
        var cell = new TableCell();
        var tcPr = new TableCellProperties();
        tcPr.AppendChild(new Shading { Val = ShadingPatternValues.Clear, Color = "1F3864", Fill = "1F3864" });
        tcPr.AppendChild(new TableCellVerticalAlignment { Val = TableVerticalAlignmentValues.Center });
        cell.AppendChild(tcPr);
        var para = new Paragraph();
        var pPr = new ParagraphProperties();
        pPr.AppendChild(new Justification { Val = JustificationValues.Center });
        para.AppendChild(pPr);
        var run = new Run();
        var rPr = new RunProperties();
        rPr.AppendChild(new Bold());
        rPr.AppendChild(new Color { Val = "FFFFFF" });
        rPr.AppendChild(new FontSize { Val = "22" });
        run.AppendChild(rPr);
        run.AppendChild(new Text(cellText));
        para.AppendChild(run);
        cell.AppendChild(para);
        row.AppendChild(cell);
    }
    return row;
}

TableRow CreateTableRow(string[] cells)
{
    var row = new TableRow();
    foreach (var cellText in cells)
    {
        var cell = new TableCell();
        var para = new Paragraph();
        var pPr = new ParagraphProperties();
        para.AppendChild(pPr);
        var run = new Run();
        run.AppendChild(new Text(cellText));
        para.AppendChild(run);
        cell.AppendChild(para);
        row.AppendChild(cell);
    }
    return row;
}
