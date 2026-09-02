using DocumentFormat.OpenXml;
using DocumentFormat.OpenXml.Packaging;
using DocumentFormat.OpenXml.Wordprocessing;

string outputPath = @"D:\新课开发\内训师和表达\内训师-故事影响力\完整课程包\03_学员手册\学员手册_故事影响力.docx";

using var doc = WordprocessingDocument.Create(outputPath, WordprocessingDocumentType.Document);
var mainPart = doc.AddMainDocumentPart();
mainPart.Document = new Document(new Body());
Body body = mainPart.Document.Body!;

// Styles
var stylesPart = mainPart.AddNewPart<StyleDefinitionsPart>();
stylesPart.Styles = new Styles();
var styles = stylesPart.Styles!;

styles.Append(new DocDefaults(
    new RunPropertiesDefault(new RunPropertiesBaseStyle(
        new RunFonts { Ascii = "Microsoft YaHei", EastAsia = "Microsoft YaHei", HighAnsi = "Microsoft YaHei" },
        new FontSize { Val = "22" },
        new FontSizeComplexScript { Val = "22" }
    )),
    new ParagraphPropertiesDefault(new ParagraphPropertiesBaseStyle(
        new SpacingBetweenLines { After = "160", Line = "276", LineRule = LineSpacingRuleValues.Auto }
    ))
));

// Title
styles.Append(new Style(new StyleName { Val = "Title" }, new BasedOn { Val = "Normal" },
    new StyleParagraphProperties(new Justification { Val = JustificationValues.Center },
        new SpacingBetweenLines { After = "0", Line = "240", LineRule = LineSpacingRuleValues.Auto }),
    new StyleRunProperties(new RunFonts { Ascii = "Microsoft YaHei", EastAsia = "Microsoft YaHei", HighAnsi = "Microsoft YaHei" },
        new Bold(), new FontSize { Val = "56" }, new FontSizeComplexScript { Val = "56" }, new Color { Val = "1F3864" }))
{ Type = StyleValues.Paragraph, StyleId = "Title" });

// Heading1
styles.Append(new Style(new StyleName { Val = "Heading 1" }, new BasedOn { Val = "Normal" },
    new StyleParagraphProperties(new SpacingBetweenLines { Before = "480", After = "240" }, new KeepNext(), new OutlineLevel { Val = 0 }),
    new StyleRunProperties(new RunFonts { Ascii = "Microsoft YaHei", EastAsia = "Microsoft YaHei", HighAnsi = "Microsoft YaHei" },
        new Bold(), new FontSize { Val = "36" }, new FontSizeComplexScript { Val = "36" }, new Color { Val = "1F3864" }))
{ Type = StyleValues.Paragraph, StyleId = "Heading1" });

// Heading2
styles.Append(new Style(new StyleName { Val = "Heading 2" }, new BasedOn { Val = "Normal" },
    new StyleParagraphProperties(new SpacingBetweenLines { Before = "360", After = "120" }, new KeepNext(), new OutlineLevel { Val = 1 }),
    new StyleRunProperties(new RunFonts { Ascii = "Microsoft YaHei", EastAsia = "Microsoft YaHei", HighAnsi = "Microsoft YaHei" },
        new Bold(), new FontSize { Val = "28" }, new FontSizeComplexScript { Val = "28" }, new Color { Val = "2E5496" }))
{ Type = StyleValues.Paragraph, StyleId = "Heading2" });

// Heading3
styles.Append(new Style(new StyleName { Val = "Heading 3" }, new BasedOn { Val = "Normal" },
    new StyleParagraphProperties(new SpacingBetweenLines { Before = "240", After = "120" }, new KeepNext(), new OutlineLevel { Val = 2 }),
    new StyleRunProperties(new RunFonts { Ascii = "Microsoft YaHei", EastAsia = "Microsoft YaHei", HighAnsi = "Microsoft YaHei" },
        new Bold(), new FontSize { Val = "24" }, new FontSizeComplexScript { Val = "24" }, new Color { Val = "4472C4" }))
{ Type = StyleValues.Paragraph, StyleId = "Heading3" });

// Quote
styles.Append(new Style(new StyleName { Val = "Quote" }, new BasedOn { Val = "Normal" },
    new StyleParagraphProperties(new Justification { Val = JustificationValues.Center },
        new SpacingBetweenLines { Before = "240", After = "240" },
        new ParagraphBorders(new LeftBorder { Val = BorderValues.Single, Size = 24, Color = "2E5496" }),
        new Indentation { Left = "720", Right = "720" }),
    new StyleRunProperties(new Italic(), new FontSize { Val = "22" }, new FontSizeComplexScript { Val = "22" }, new Color { Val = "424242" }))
{ Type = StyleValues.Paragraph, StyleId = "Quote" });

// FormField
styles.Append(new Style(new StyleName { Val = "FormField" }, new BasedOn { Val = "Normal" },
    new StyleParagraphProperties(new SpacingBetweenLines { Before = "60", After = "60" },
        new ParagraphBorders(new BottomBorder { Val = BorderValues.Dotted, Size = 4, Color = "999999" })),
    new StyleRunProperties(new FontSize { Val = "22" }, new FontSizeComplexScript { Val = "22" }))
{ Type = StyleValues.Paragraph, StyleId = "FormField" });

// PartTitle
styles.Append(new Style(new StyleName { Val = "PartTitle" }, new BasedOn { Val = "Normal" },
    new StyleParagraphProperties(new SpacingBetweenLines { Before = "360", After = "120" }, new KeepNext(), new OutlineLevel { Val = 1 }),
    new StyleRunProperties(new RunFonts { Ascii = "Microsoft YaHei", EastAsia = "Microsoft YaHei", HighAnsi = "Microsoft YaHei" },
        new Bold(), new FontSize { Val = "32" }, new FontSizeComplexScript { Val = "32" }, new Color { Val = "C62828" }))
{ Type = StyleValues.Paragraph, StyleId = "PartTitle" });

// Insight
styles.Append(new Style(new StyleName { Val = "Insight" }, new BasedOn { Val = "Normal" },
    new StyleParagraphProperties(new SpacingBetweenLines { Before = "120", After = "120" }, new Shading { Fill = "FFF3E0" }),
    new StyleRunProperties(new Bold(), new FontSize { Val = "22" }, new FontSizeComplexScript { Val = "22" }))
{ Type = StyleValues.Paragraph, StyleId = "Insight" });

// Warning
styles.Append(new Style(new StyleName { Val = "Warning" }, new BasedOn { Val = "Normal" },
    new StyleParagraphProperties(new SpacingBetweenLines { Before = "120", After = "120" }, new Shading { Fill = "FFEBEE" }),
    new StyleRunProperties(new Bold(), new FontSize { Val = "22" }, new FontSizeComplexScript { Val = "22" }))
{ Type = StyleValues.Paragraph, StyleId = "Warning" });

// ChapterTitle
styles.Append(new Style(new StyleName { Val = "ChapterTitle" }, new BasedOn { Val = "Normal" },
    new StyleParagraphProperties(new SpacingBetweenLines { Before = "600", After = "300" }, new KeepNext(), new OutlineLevel { Val = 0 }),
    new StyleRunProperties(new RunFonts { Ascii = "Microsoft YaHei", EastAsia = "Microsoft YaHei", HighAnsi = "Microsoft YaHei" },
        new Bold(), new FontSize { Val = "44" }, new FontSizeComplexScript { Val = "44" }, new Color { Val = "1F3864" }))
{ Type = StyleValues.Paragraph, StyleId = "ChapterTitle" });

// Exercise
styles.Append(new Style(new StyleName { Val = "Exercise" }, new BasedOn { Val = "Normal" },
    new StyleParagraphProperties(new SpacingBetweenLines { Before = "200", After = "120" }, new Shading { Fill = "F5F5F5" },
        new ParagraphBorders(new TopBorder { Val = BorderValues.Single, Size = 8, Color = "CCCCCC" },
            new BottomBorder { Val = BorderValues.Single, Size = 8, Color = "CCCCCC" }),
        new Indentation { Left = "180", Right = "180" }),
    new StyleRunProperties(new FontSize { Val = "22" }, new FontSizeComplexScript { Val = "22" }))
{ Type = StyleValues.Paragraph, StyleId = "Exercise" });

// Helper functions
void AddTitle(string text) => body.Append(new Paragraph(new ParagraphProperties(new ParagraphStyleId { Val = "Title" }), new Run(new Text(text))));
void AddH1(string text) => body.Append(new Paragraph(new ParagraphProperties(new ParagraphStyleId { Val = "Heading1" }), new Run(new Text(text))));
void AddH2(string text) => body.Append(new Paragraph(new ParagraphProperties(new ParagraphStyleId { Val = "Heading2" }), new Run(new Text(text))));
void AddH3(string text) => body.Append(new Paragraph(new ParagraphProperties(new ParagraphStyleId { Val = "Heading3" }), new Run(new Text(text))));
void AddChapter(string text) => body.Append(new Paragraph(new ParagraphProperties(new ParagraphStyleId { Val = "ChapterTitle" }), new Run(new Text(text))));
void AddPartTitle(string text) => body.Append(new Paragraph(new ParagraphProperties(new ParagraphStyleId { Val = "PartTitle" }), new Run(new Text(text))));
void AddP(string text) => body.Append(new Paragraph(new Run(new Text(text))));
void AddQuoteP(string text) => body.Append(new Paragraph(new ParagraphProperties(new ParagraphStyleId { Val = "Quote" }), new Run(new Text(text))));
void AddInsightP(string text) => body.Append(new Paragraph(new ParagraphProperties(new ParagraphStyleId { Val = "Insight" }), new Run(new Text("KEY: " + text))));
void AddWarningP(string text) => body.Append(new Paragraph(new ParagraphProperties(new ParagraphStyleId { Val = "Warning" }), new Run(new Text("NOTE: " + text))));
void AddExerciseP(string text) => body.Append(new Paragraph(new ParagraphProperties(new ParagraphStyleId { Val = "Exercise" }), new Run(new Text(text))));
void AddBullet(string text) => body.Append(new Paragraph(new ParagraphProperties(new SpacingBetweenLines { Before = "0", After = "80" }, new Indentation { Left = "360", Hanging = "360" }), new Run(new Text("- " + text))));
void AddNum(int num, string text) => body.Append(new Paragraph(new ParagraphProperties(new SpacingBetweenLines { Before = "0", After = "80" }, new Indentation { Left = "720", Hanging = "360" }), new Run(new Text(num + ". " + text))));
void AddSpace() => body.Append(new Paragraph(new Run(new Text(""))));
void AddDotted(int count = 1) { for (int i = 0; i < count; i++) body.Append(new Paragraph(new ParagraphProperties(new ParagraphStyleId { Val = "FormField" }), new Run(new Text(" ")))); }
void AddBreak() => body.Append(new Paragraph(new Run(new Break { Type = BreakValues.Page })));

Table CreateTable(string[] headers, string fill = "1F3864") {
    var tbl = new Table(new TableProperties(new TableWidth { Width = "5000", Type = TableWidthUnitValues.Pct },
        new TableBorders(new TopBorder { Val = BorderValues.Single, Size = 8, Color = fill },
            new BottomBorder { Val = BorderValues.Single, Size = 8, Color = fill },
            new LeftBorder { Val = BorderValues.Single, Size = 8, Color = fill },
            new RightBorder { Val = BorderValues.Single, Size = 8, Color = fill },
            new InsideHorizontalBorder { Val = BorderValues.Single, Size = 4, Color = "CCCCCC" },
            new InsideVerticalBorder { Val = BorderValues.Single, Size = 4, Color = "CCCCCC" })),
        new TableGrid(new GridColumn()));
    var hr = new TableRow(new TableRowProperties(new TableHeader()));
    foreach (var h in headers) hr.Append(new TableCell(new TableCellProperties(new Shading { Fill = fill }),
        new Paragraph(new ParagraphProperties(new Justification { Val = JustificationValues.Center }),
            new Run(new RunProperties(new Bold(), new Color { Val = "FFFFFF" }), new Text(h)))));
    tbl.Append(hr);
    return tbl;
}

void AddRow(Table tbl, string[] cells) { var tr = new TableRow(); foreach (var c in cells) tr.Append(new TableCell(new Paragraph(new Run(new Text(c))))); tbl.Append(tr); }
void FinishTable(Table tbl) => body.Append(tbl);

// ========== COVER ==========
AddSpace(); AddSpace(); AddSpace();
AddTitle("内训师的故事影响力");
AddSpace();
AddP("工作坊学员手册");
AddSpace(); AddSpace(); AddSpace();
AddP("课程定位：内训师表达能力提升工作坊");
AddP("课程时长：2天工作坊");
AddSpace();
AddP("版本号：V1.0");
AddSpace(); AddSpace(); AddSpace();
AddP("学员姓名：__________________________");
AddP("所在部门：__________________________");
AddP("课程日期：__________________________");
AddP("课程讲师：__________________________");
AddBreak();

// ========== TABLE OF CONTENTS ==========
AddH1("目录");
AddSpace();
AddP("第一章：课程导览");
AddBullet("课程简介与学习目标");
AddBullet("工作坊全景图");
AddBullet("配套材料说明");
AddSpace();
AddP("第二章：故事是工具不是点缀");
AddBullet("核心认知：故事为什么有效");
AddBullet("六种可用故事类型");
AddBullet("选材三问");
AddBullet("本章练习索引");
AddSpace();
AddP("第三章：最简故事结构");
AddBullet("基础四步结构详解");
AddBullet("扩展两步");
AddBullet("三句话测试");
AddBullet("本章练习索引");
AddSpace();
AddP("第四章：从课程倒推故事");
AddBullet("五个故事点位信号");
AddBullet("五步倒推法");
AddBullet("三种放置方式");
AddBullet("避免说教感");
AddBullet("本章练习索引");
AddSpace();
AddP("第五章：讲出来才算数");
AddBullet("五个交付习惯");
AddBullet("三维度定制化");
AddBullet("上台前三问质检");
AddBullet("故事库建设");
AddBullet("本章练习索引");
AddSpace();
AddP("附录");
AddBullet("工具卡：故事点位速查卡");
AddBullet("工具卡：四步故事结构卡");
AddBullet("工具卡：上台前质检清单");
AddBullet("练习册答案（可选）");
AddBreak();

// ========== CHAPTER 1 ==========
AddChapter("第一章：课程导览");

AddH2("课程简介与学习目标");

AddQuoteP("你已经有了课程内容，现在要学会在里面植入让大脑挂得住的钩子。");

AddSpace();
AddP("很多内训师面临同一个困境：课程框架搭好了，内容也扎实，但课讲完之后，学员出了门，两周后问他学了什么，他记不起多少——即使他在课堂上一直在点头。");

AddP("不是因为内容有问题。很多时候，是因为课程里缺少了故事——那种给大脑一个具体场景、让信息真正被带走的东西。");

AddSpace();
AddP("本次工作坊不从零开始教你\"讲故事\"，而是专门针对已经有课程内容的内训师：帮你在现有课程里，系统性地植入故事。");

AddSpace();
AddH3("工作坊学习目标");
AddNum(1, "找到你自己课程里最需要故事的位置");
AddNum(2, "为那个位置写出一个完整的故事草稿");
AddNum(3, "知道这个故事放在哪里、为什么放在那里、面对不同学员时要怎么调整讲法");

AddSpace();
AddH3("工作坊核心产出");
AddP("课程结束时，你会完成一份故事植入方案，包含：");
AddBullet("找到你自己课程里最需要故事的区域");
AddBullet("生成3个素材线索");
AddBullet("写出一个可以朗读的完整故事草稿");
AddBullet("完成一份完整的故事设计（含知识点→故事→位置→衔接方式）");
AddBullet("上台前的三问质检清单");

AddSpace();
AddH2("工作坊全景图");

var t0 = CreateTable(new[] { "章节", "核心问题", "你会做什么", "你将带走什么" });
AddRow(t0, new[] { "第一部分", "故事为什么有教学价值？有哪些类型可以用？", "找到课程里最需要故事的区域，生成3个素材线索", "标注好的\"待改造区域\" + 3个素材线索" });
AddRow(t0, new[] { "第二部分", "一个故事至少要有什么才算完整？", "用四步结构写出一个故事草稿", "一个可以朗读的完整故事草稿" });
AddRow(t0, new[] { "第三部分", "怎么从已有课程内容倒推出故事？", "完成一份完整的故事设计", "故事植入方案（含知识点→故事→位置→衔接方式）" });
AddRow(t0, new[] { "第四部分", "讲出来时有什么要注意？怎么针对不同学员调整？", "用质检清单检验故事草稿，完成定制化练习", "上台前的三问质检清单" });
FinishTable(t0);

AddSpace();
AddH2("配套材料说明");

AddP("本学员手册是工作坊期间的全程共读文档——上课时对照着看，课后当备课工具书翻。全程不需要拼命记笔记，内容、案例和练习都在这里。");

AddSpace();
AddP("请带这件东西来：工作坊里所有练习，都会直接用到你自己的课程内容。请带着你目前正在讲或正在开发的一门课程的大纲，或者至少一个你熟悉的课程模块的核心知识点。");

AddSpace();
AddH2("起始测试");

AddQuoteP("假设一周之后有人问你\"上次培训讲了什么内容\"，你更可能记起哪个版本？为什么？");

AddSpace();
AddP("版本A：绩效反馈应以可观察的具体行为为依据，而非对人的评价。有效的反馈描述行为本身和它带来的影响，并指向可改变的方向。");

AddSpace();
AddP("版本B：有个主管，带了一名工作三年的员工，年底绩效面谈。主管说了一句话：\"你这个人做事总是不够主动。\"员工沉默了三秒，说：\"我不太理解，具体是什么事情？\"主管说：\"就是……总体感觉你比较被动。\"员工出了会议室，跟同事说了一句话：\"我真不知道我哪里出了问题，但我感觉我被否定了整个人。\"三个月后，这名员工离职了。");

AddSpace();
AddP("版本A和版本B说的是完全相同的知识点：反馈要针对行为，而不是评价人本身。但只有一个版本，大脑有地方\"挂住\"它——这就是今天整个工作坊要解决的问题。");

AddDotted(3);
AddBreak();

// ========== CHAPTER 2 ==========
AddChapter("第二章：故事是工具不是点缀");

AddPartTitle("核心认知：故事为什么有效");

AddH2("为什么故事能做到这些：三个机制");

AddP("不是因为故事更\"有趣\"，也不是风格偏好。是因为故事做到了三件事，这三件事，用列知识点的方式做不到。");

AddSpace();
AddH3("第一：给记忆一个可以挂住的钩子（具象化）");

AddP("人脑存储信息的方式，不是把规则打包归档，而是把\"可以想象的场景\"存起来。闭上眼睛，你脑子里浮现的是画面，不是定义。");

AddP("当你只有\"主动确认对方理解的三个步骤\"，学员的大脑没有地方放这件事——它是悬空的。但当你给了\"三周会议+两个月的误差+签合同前一天才发现\"，学员的大脑里出现了一个具体场景，那个场景就是钩子，知识点挂在上面，才能被带走。");

AddSpace();
AddH3("第二：激活情绪，让记忆固化（情绪记忆效应）");

AddP("携带情绪的信息，在大脑里的留存深度远高于中性信息。故事天然携带情绪。那个产品团队的例子，会让人产生一种隐约的熟悉感——\"这种事我也见过\"——或者一种轻微的警觉——\"如果这发生在我身上，会很麻烦\"。这个感受，就是记忆的固化剂。");

AddSpace();
AddH3("第三：提供可以迁移的行为模式（模式识别）");

AddP("比直接告诉一个人\"下次要确认理解\"更有效的，是让他在脑子里走一遍\"如果不确认会怎样\"的完整路径。故事完成的正是这件事——学员通过故事里角色的经历，完成了\"那个情境下的我会怎么做\"的预演。预演，比指令更容易转化为实际行动。");

AddSpace();
AddInsightP("关键认知：故事不是调料，是传输介质——知识要被记住、要被用到，需要一个具体的场景来承载它。没有场景的知识，就像没有钩子的画，挂不住。");

AddSpace();
AddH2("故事在教学中能做什么：四个位置");

AddP("故事不是随时随地可以放的。不同位置的故事，承担不同的教学任务，目的不同，使用的故事类型也不同。");

AddSpace();
var t1 = CreateTable(new[] { "位置", "教学任务", "故事的作用", "典型形式" });
AddRow(t1, new[] { "开场", "激活注意力，建立学习动机", "制造悬念，或触发学员的切身痛点", "一个尚未被解决的困境场景" });
AddRow(t1, new[] { "知识点引入前", "让学员感受到\"我需要这个方法\"", "先展示\"没有这个方法会怎样\"的真实场景", "失败案例、麻烦场景" });
AddRow(t1, new[] { "知识点强化后", "让知识从\"听懂了\"变成\"记住了\"", "把刚学的原则还原成可以想象的具体场景", "应用案例、正向场景" });
AddRow(t1, new[] { "收尾", "激活行动意愿，留下情感印象", "让学员代入\"做到之后会是什么样\"", "未来投射、情感场景" });
FinishTable(t1);

AddSpace();
AddWarningP("一个模块不需要用到所有四个位置，但在为课程植入故事时，要先弄清楚这个故事想在哪个位置、完成什么教学任务——不同任务需要不同类型的故事。");

AddSpace();
AddPartTitle("六种可用故事类型");

AddH2("亲历型：你自己经历过的事");

AddP("讲师本人的真实经历，是感染力最强的故事类型。学员能感受到\"这是真实的\"，信任感最高。");

AddP("典型开头：\"去年我在带一个团队时……\" / \"有一次我亲眼看到……\"");

AddWarningP("效果最好的亲历故事，往往不是讲师赢了的故事，而是讲师也曾经困惑过、出过错、然后有了一个发现的故事。学员更容易代入一个面对困境的人，而不是一个从来没出过错的专家。");

AddSpace();
AddH2("见闻型：你听说过或观察到的事");

AddP("不是你亲身经历，但来自真实见闻——同事说的、你旁观的、学员分享的。");

AddP("典型开头：\"我有个做客服的朋友，她说……\" / \"我旁听过一次这样的会议……\"");

AddWarningP("要交代来源，不要把别人的故事包装成自己的经历。");

AddSpace();
AddH2("案例型：来自工作场景的真实案例");

AddP("企业培训中使用频率最高的类型——具体的工作情境中真实发生的事：项目、会议、客诉、复盘、业务改变……");

AddWarningP("涉及真实人物的案例要做基本脱敏（改掉姓名，模糊可识别的信息）。");

AddSpace();
AddH2("反例型：失败或错误的场景");

AddP("专门展示\"不这样做会怎样\"的故事。教学价值来自让学员感到警觉——\"原来如果我这样做，会有这样的代价。\"");

AddWarningP("最好的反例，是那种\"换了谁都可能犯的错\"——因为有足够的情境合理性，让学员感到\"我也可能这样做\"。");

AddSpace();
AddH2("类比隐喻型：用熟悉解释陌生");

AddP("不一定有完整情节，更像一个比喻——把一个抽象的概念，映射到一个学员已经熟悉的场景上，让概念可以被立刻理解。");

AddWarningP("类比必须和学员的日常生活经验高度重叠，否则解释起来比原来的概念更复杂。");

AddSpace();
AddH2("未来投射型：描绘\"如果做到了，会是什么样\"");

AddP("不是描述过去发生的事，而是把学员带进一个假想的未来场景——一个他们还没经历但可以想象的画面。");

AddWarningP("这类故事必须足够具体，才有说服力。\"你的工作会变得更好\"完全没有效果；\"你下次在那个情境里，会知道该说哪句话\"才有代入感。");

AddSpace();
AddPartTitle("选材三问");

AddH2("怎么判断一个素材值不值得用");

AddP("在决定用一个故事素材之前，先问自己三个问题：");

AddSpace();
AddH3("第一问：认出来吗？");

AddP("这个故事里的人物或处境，今天这群学员能\"认出来\"吗？认出来不一定是\"这完全和我一样\"，而是\"这类情况我见过、遇到过、或者听说过\"。");

AddSpace();
AddH3("第二问：相信吗？");

AddP("这个故事里发生的事，学员会相信这是真实存在的吗？故事可以改编、可以脱敏，但它需要经得起\"这件事在现实中会发生\"的基本判断。");

AddSpace();
AddH3("第三问：说清楚吗？");

AddP("讲完这个故事，我能用一句话说清它和今天课程内容的关系吗？如果需要绕三圈才能解释，说明故事和知识点的连接还没有想清楚。");

AddSpace();
AddInsightP("三个问题都能答\"是\"，这个素材值得用。有一个答\"不确定\"，先放下，找其他的。");

AddSpace();
AddPartTitle("本章练习索引");

AddH2("练习A：找到你的\"待改造区域\" — 第一级难度");

AddExerciseP("类型：识别型 | 用时：5分钟");
AddExerciseP("浏览一遍你的大纲，找出最密集地堆了知识点、最没有场景感的那一段——那里是最需要故事的地方。");

AddSpace();
AddP("这一段的标题或主题是：");
AddDotted(2);
AddP("它的核心知识点是（用一句话描述）：");
AddDotted(2);
AddP("你觉得学员为什么可能记不住这里（可以多选）：");
AddP("□ 概念太抽象，听完之后脑子里没有画面");
AddP("□ 学员可能觉得\"这个我知道\"，没有动力深入");
AddP("□ 没有实际案例，学员不确定用在哪里");
AddP("□ 内容重要但不紧迫，学员不觉得和自己有关");
AddP("□ 其他：___________________________________________");
AddP("这段内容里，学员最可能在哪个行为或决策上出问题？");
AddDotted(3);

AddSpace();
AddH2("练习B：为你的\"待改造区域\"找到3个素材线索 — 第二级难度");

AddExerciseP("类型：素材生成型 | 用时：8-10分钟");
AddExerciseP("不需要写完整故事，也不需要想清楚怎么用——就是用一两句话描述\"有这样一件事或一个场景，可能和这个知识点有关\"。");

AddSpace();
var t2 = CreateTable(new[] { "编号", "用一两句话描述这个场景或事件", "故事类型", "素材来源" });
AddRow(t2, new[] { "素材1", "", "", "" });
AddRow(t2, new[] { "素材2", "", "", "" });
AddRow(t2, new[] { "素材3", "", "", "" });
FinishTable(t2);

AddSpace();
AddP("从三个素材里选一个你觉得最有可能用得上的：");
AddP("我会优先考虑素材 ______，因为：");
AddDotted(3);
AddBreak();

// ========== CHAPTER 3 ==========
AddChapter("第三章：最简故事结构");

AddPartTitle("基础四步结构详解");

AddH2("基础四步结构");

AddP("一个故事有四个组成部分，拆解开来，就是一个可以套用的工具。");

AddSpace();
AddH3("第一步：时空锚定");

AddP("给故事一个可以想象的起点。时间、地点、人物——至少说清楚其中两个。");

AddP("为什么这步不能省：没有锚点，听众的大脑是悬空的。当你说\"那是客服技能培训班的第二天下午，班里有个学员坐在最后排靠窗……\"，一个画面开始形成了。");

AddP("怎么做：不需要完整描述所有细节，2–3个锚点就够。");

AddSpace();
AddH3("第二步：张力触发");

AddP("引入一个冲突、困境或意外——用\"但是\"、\"然后突然\"、\"没想到\"来制造阻力。");

AddP("为什么这步最重要：没有张力的故事不是故事，是陈述。听众会等着你说\"然后呢\"，是因为有什么东西还没解决。");

AddSpace();
AddH3("第三步：行动转化");

AddP("有人做了什么，发生了什么变化。不需要完美收场，但要有一个\"有人应对了这件事\"的具体动作，以及这个动作之后发生了什么。");

AddP("为什么这步是核心：故事的\"可迁移性\"来自这一步。学员在这里看见了一个具体的行动，他们的大脑在预演：如果是我，我可以这样做。");

AddSpace();
AddH3("第四步：意义落点");

AddP("用一到两句话，把故事和课程知识点的连接说清楚。这一步，是故事和教学之间的桥。");

AddP("为什么这步不能省：没有落点的故事是孤立的事件。学员听完会觉得有趣，但不知道这跟今天学的东西有什么关系。");

AddSpace();
AddInsightP("四步结构不是写作技巧，是大脑处理故事的自然节奏。时空锚定让人\"进场\"，张力触发让人\"想听\"，行动转化让人\"可迁移\"，意义落点让人\"记得住\"。哪步缺失，那步对应的效果就消失了。");

AddSpace();
AddPartTitle("扩展两步");

AddH2("在四步基础上：扩展两步");

AddP("基础四步是最小可用单元。如果你有更多时间，或者这个故事需要更强的感染力，可以加入以下两步：");

AddSpace();
AddH3("第五步：感官细节（加在第一步或第二步中）");

AddP("在时空锚定或张力触发阶段，加入一个具体的感官细节——听众能看见或感受到的东西。");

AddP("不是这样的：\"那个培训室很嘈杂，气氛很紧张，大家都很不自在。\"");
AddP("而是这样的：\"手机放在桌上，不是偷看，就是放着，偶尔扫一眼。\"");

AddWarningP("一个精准的细节，听众的大脑会自动补全画面。形容词给的是判断，细节给的是画面。");

AddSpace();
AddH3("第六步：情绪内心（加在第二步或第三步中）");

AddP("在张力出现的时刻，或在行动之前，加入讲述者（或故事主角）的内心反应。");

AddP("不是这样的：\"我当时不知道该怎么办。\"（太模糊）");
AddP("而是这样的：\"我站在那里，想了两秒——我如果直接说'请大家参与讨论'，他会怎么反应？\"");

AddWarningP("内心独白给了听众一个可以代入的通道，他们不只是在观察这件事，而是在和故事主角一起思考。");

AddSpace();
AddH2("不同位置的故事，长度不一样");

AddP("故事不是越长越好。教学场景中最有效的故事，往往是\"刚刚够\"的——细节够进入场景，长度不打断课程节奏。");

AddSpace();
var t3 = CreateTable(new[] { "故事所在位置", "建议包含的步骤", "参考时长" });
AddRow(t3, new[] { "开场故事", "完整四步，可加感官细节", "2-4分钟" });
AddRow(t3, new[] { "知识点引入前（钩子型）", "前两步即可，制造张力，不给答案", "1-2分钟" });
AddRow(t3, new[] { "知识点强化后（固化型）", "可以直接从第三步到落点", "30秒-1分钟" });
AddRow(t3, new[] { "章节过渡（桥型）", "第一步加简短第二步，轻描即可", "30-60秒" });
AddRow(t3, new[] { "收尾故事", "完整四步，可加感官细节和情绪内心", "2-3分钟" });
FinishTable(t3);

AddSpace();
AddPartTitle("三句话测试");

AddH2("快速自检：三句话测试");

AddP("在把一个故事写进课程之前，先试着用三句话说完它：");

AddNum(1, "第一句：发生了什么（时空背景 + 张力）");
AddNum(2, "第二句：怎么应对的（行动 + 转化）");
AddNum(3, "第三句：这说明什么（落点）");

AddSpace();
AddP("三句话能说清楚——故事的骨架存在，细节可以在上面生长。");
AddP("三句话说不清楚——骨架需要先梳理。在骨架不清晰的故事上堆细节，只会让它更乱。");

AddSpace();
AddP("试着用三句话说一个你知道的故事：");
AddP("第一句（发生了什么）：");
AddDotted(2);
AddP("第二句（怎么应对的）：");
AddDotted(2);
AddP("第三句（这说明什么）：");
AddDotted(2);

AddSpace();
AddPartTitle("本章练习索引");

AddH2("练习C：搭出你的第一个故事草稿 — 第三级难度");

AddExerciseP("类型：结构套用型产出 | 用时：15分钟");
AddExerciseP("取你在练习B里选出的\"最想开发的那个素材\"，用基础四步结构写出这个故事的完整草稿。");

AddSpace();
AddP("第一步：时空锚定（时间 + 地点 + 人物，至少两个要素）");
AddDotted(3);
AddP("第二步：张力触发（那个\"不对劲\"是什么）");
AddDotted(3);
AddP("第三步：行动转化（有人做了什么，发生了什么变化）");
AddDotted(3);
AddP("第四步：意义落点（这说明了什么，和知识点的关系是什么）");
AddDotted(3);
AddP("选填——感官细节或情绪内心（如果某步需要更强的画面感，在这里补充）");
AddDotted(2);

AddSpace();
AddP("写完之后，做三句话测试：");
AddP("一句话说完时空 + 张力：________________________________________");
AddP("一句话说完行动 + 转化：________________________________________");
AddP("一句话说完落点：________________________________________");
AddP("三句话清楚吗？□ 清楚  □ 需要调整，调整方向是：___________________");

AddSpace();
AddH2("练习D：两人互讲，互给反馈 — 同伴练习");

AddExerciseP("类型：交叉测试 | 用时：10分钟");
AddExerciseP("两人一组。每人用2分钟朗读（或讲述）自己的故事草稿，然后另一方用四个问题给反馈。");

AddSpace();
var t4 = CreateTable(new[] { "问题", "你的回答" });
AddRow(t4, new[] { "哪一步让你最清楚地进入了场景？（第几步，哪句话）", "" });
AddRow(t4, new[] { "哪一步让你感觉\"跳出来了\"，脑子开始走神？", "" });
AddRow(t4, new[] { "落点句是什么？你听完之后能重复出来吗？", "" });
AddRow(t4, new[] { "这个故事和讲述者课程里的知识点，关系清晰吗？", "" });
FinishTable(t4);

AddSpace();
AddP("听完反馈之后，记录你要调整的地方：");
AddP("我要修改第 ______ 步，调整方向是：______________________________");
AddBreak();

// ========== CHAPTER 4 ==========
AddChapter("第四章：从课程倒推故事");

AddPartTitle("五个故事点位信号");

AddH2("第一步：找到\"故事点位\"——课程里哪里需要故事");

AddP("不是每个知识点都需要故事，但每个重要的知识段落，都应该评估一下是否有故事需求。以下五个信号，是最常见的\"这里需要一个故事\"的提示。");

AddSpace();
AddH3("信号一：概念过于抽象");

AddP("表现：这段内容全是定义、原则、框架，没有一个可以想象的场景。学员听的时候在点头，但你知道他们没有在真正理解。");

AddP("需要什么故事：类比隐喻型或案例型——把抽象概念转化为可以想象的具体场景。");

AddSpace();
AddH3("信号二：错误高发区");

AddP("表现：这是一个学员在实际工作中反复犯的错，或者是一个在大多数人看来\"这有什么问题？\"的地方。");

AddP("需要什么故事：反例型——让学员感受到\"原来如果我这样做，会有这样的代价\"。");

AddSpace();
AddH3("信号三：动机薄弱区");

AddP("表现：学员在认知上已经接受了这个方法，但在情感上还没有\"我想做这件事\"的动力。知道但不做，通常不是能力问题，是动机问题。");

AddP("需要什么故事：正例型（成功场景）或未来投射型——让学员感受到\"如果做到了，会是什么样\"。");

AddSpace();
AddH3("信号四：章节转折点");

AddP("表现：课程从一个主题切换到另一个主题，学员刚在A话题里，突然进入B话题，会有\"断\"的感觉。");

AddP("需要什么故事：过渡型——一个短故事，作为两个主题之间的\"桥\"。");

AddSpace();
AddH3("信号五：开场或收尾");

AddP("表现：开场需要一个故事来帮学员从\"人到了脑子还没到\"的状态切入；收尾需要一个故事来让学员带着真实的情感冲动离开。");

AddSpace();
AddInsightP("找故事点位，不是问\"我可以在哪里用故事\"，而是问\"这里，学员缺少什么——是画面感、是警觉感、还是行动的动力？\"缺什么，就用能提供什么的故事。");

AddSpace();
AddH2("练习E：识别你课程模块里的故事点位 — 第二级难度");

AddExerciseP("类型：识别型 | 用时：8分钟");
AddExerciseP("针对你在练习A里标记的\"待改造区域\"，用下面这张表评估故事需求信号。");

AddSpace();
var t5 = CreateTable(new[] { "信号", "在你的\"待改造区域\"里，有这个情况吗？", "如果有，大概在哪里？（一句话描述）" });
AddRow(t5, new[] { "概念过于抽象", "□ 有  □ 没有", "" });
AddRow(t5, new[] { "错误高发区", "□ 有  □ 没有", "" });
AddRow(t5, new[] { "动机薄弱区", "□ 有  □ 没有", "" });
AddRow(t5, new[] { "章节转折点", "□ 有  □ 没有", "" });
AddRow(t5, new[] { "开场或收尾", "□ 有  □ 没有", "" });
FinishTable(t5);

AddSpace();
AddP("我最想优先处理的故事点位是：________________________________");
AddP("我选这个点位的原因（对应哪个信号，为什么这个点位对课程效果影响最大）：");
AddDotted(3);

AddSpace();
AddPartTitle("五步倒推法");

AddH2("五步倒推法：从知识点反向设计故事");

AddP("现在你知道了\"在哪里\"需要故事。接下来的五步，是从知识点倒推出可用故事的完整流程。");

AddSpace();
AddH3("第一步：找到知识点的\"核心行为变化\"");

AddP("这个知识点，学完之后，你希望学员做出什么具体的、可观察的行为改变？");

AddP("不是\"了解验收标准的重要性\"，而是：\"布置任务时，在说完任务内容之后，还会补充一句：'我需要的最终结果是……格式是……'\"");

AddWarningP("如果你不清楚行为变化是什么，你选的故事可能只是\"说明了这件事很重要\"，而不是\"让学员看清楚了他们需要做什么不同的事\"。");

AddP("你的知识点的核心行为变化（一句话，要具体到可观察的行为）：");
AddDotted(3);

AddSpace();
AddH3("第二步：找到\"典型失败场景\"");

AddP("如果不做这个行为变化（或者做错了），在什么具体的工作情境下会付出代价？");

AddP("你的\"典型失败场景\"（1-3句话描述核心情节）：");
AddDotted(4);

AddSpace();
AddH3("第三步：找到\"典型成功场景\"");

AddP("如果正确地做了这个行为，在什么情境下产生了明显的不同？");

AddP("你的\"典型成功场景\"（1-3句话描述核心情节）：");
AddDotted(4);

AddSpace();
AddH3("第四步：决定用哪个场景，以及为什么");

AddP("失败场景和成功场景，是两种不同的教学驱动力。选哪个，取决于这群学员最需要什么：");

AddSpace();
var t6 = CreateTable(new[] { "学员状态", "选哪个场景", "原因" });
AddRow(t6, new[] { "觉得\"这个我知道了，不需要刻意做\"", "失败场景", "用代价打破盲点，触发\"原来我没做到\"" });
AddRow(t6, new[] { "觉得\"做这件事很麻烦，没必要\"", "失败场景", "让代价足够真实，让麻烦和风险的对比清晰" });
AddRow(t6, new[] { "认知上认可，但行动上没有动力", "成功场景", "让\"做到之后会怎样\"变得具体，激活动力" });
AddRow(t6, new[] { "完全不了解这个概念", "先失败场景，再成功场景", "先让学员看见问题，再展示解法" });
FinishTable(t6);

AddSpace();
AddP("针对你的目标学员，你会选哪个场景，原因是什么：");
AddP("我选 □ 失败场景  □ 成功场景，原因是：______________________________");
AddDotted(2);

AddSpace();
AddH3("第五步：把选定场景套入四步结构");

AddP("回到第二部分的四步结构，把你选定的场景，按照四步写成故事草稿。");

AddP("□ 是，已经清楚呈现了");
AddP("□ 需要调整，我要修改第 ______ 步，方向是：__________________________");

AddSpace();
AddPartTitle("三种放置方式");

AddH2("故事怎么和知识点衔接：三种放置方式");

AddP("故事设计好之后，下一步是放置方式——故事和知识点怎么连接，不同的方式会带来不同的课程节奏感。");

AddSpace();
AddH3("前置引入型");

AddP("是什么：先讲故事，再讲知识点。故事用来制造\"我需要这个方法\"的感受，然后知识点作为答案进入。");

AddP("典型节奏：故事（制造问题感）→ 一个指向知识的悬挂问题 → 知识点讲解 → 收尾回应");

AddP("适合用在：学员对即将讲到的方法还没有感受到必要性的时候。");

AddSpace();
AddH3("后置强化型");

AddP("是什么：先讲知识点，再用故事来固化记忆。故事是知识点的具象化版本。");

AddP("典型节奏：知识点讲解（原则/方法/步骤）→ 故事（把原则还原成场景）→ 确认理解");

AddP("适合用在：知识点本身逻辑清晰但缺乏画面感；或者学员听懂了但你不确定他们记得住时。");

AddSpace();
AddH3("夹心结构型");

AddP("是什么：先讲故事的前半段（只到张力触发，制造悬念），让学员带着\"然后呢\"进入知识点讲解，知识点讲完后再回到故事，用后半段收尾。");

AddP("适合用在：故事里的行动，需要学员有一定知识储备才能理解其价值；或者你想用悬念把注意力贯穿整个知识点讲解。");

AddSpace();
AddInsightP("三种方式没有绝对的优劣，关键是学员在那个时刻最需要什么——是\"为什么我需要这个方法\"的触发感，是\"这个方法实际上是什么样子\"的画面感，还是\"一根从头到尾保持注意力\"的悬念线。");

AddSpace();
AddPartTitle("避免说教感");

AddH2("如何避免说教感");

AddP("故事讲完之后，很多人会自然地说：\"所以，大家以后要……\"这在内容上完全正确，但听起来像在说教，而不是在分享发现。");

AddSpace();
AddH3("效果更好的方式，是把结论\"还给\"学员：");

AddP("不说这个：\"所以你们在布置任务的时候，一定要说清楚验收标准。\"");

AddP("而是这样：\"那个产品经理后来跟我说了一句话——他说，我以前以为把任务描述清楚了就够了。那次之后我发现，'做什么'和'做成什么样'，是两件完全不同的事。\"");

AddP("或者这样：\"你们觉得，那个下属做了三天的报告，最后需要重做——谁的责任更大一点？\"");

AddSpace();
AddInsightP("让学员自己说出结论，或者逼近结论，比讲师直接宣告，记忆深度要高得多。而且这个结论，因为是学员自己得出的，感觉是\"我发现的\"，而不是\"被要求的\"。");

AddSpace();
AddPartTitle("本章练习索引");

AddH2("练习F：完整故事植入方案 — 第三级难度（核心产出）");

AddExerciseP("类型：综合产出 | 用时：20分钟（这是本工作坊最重要的练习，请保留足够时间）");
AddExerciseP("这里是整个工作坊的核心产出。所有前面练习的内容都在这里汇集——不需要从头开始写，是整合和完善。");

AddSpace();
AddP("我的课程模块");
AddP("课程名称 / 模块名称：________________________________________");
AddP("核心知识点（一句话）：________________________________________");

AddSpace();
AddP("第一项：故事点位");
AddP("这个故事对应的点位信号（从五个信号里选一个）：________________");
AddP("这个故事在知识点的（选一个）：");
AddP("□ 前面（前置引入型）  □ 后面（后置强化型）  □ 夹心结构（两侧）");
AddP("放在这个位置的原因：________________________________________");
AddDotted(2);

AddSpace();
AddP("第二项：故事草稿");
AddP("第一步（时空锚定）：");
AddDotted(2);
AddP("第二步（张力触发）：");
AddDotted(3);
AddP("第三步（行动转化）：");
AddDotted(3);
AddP("第四步（意义落点）：");
AddDotted(2);

AddSpace();
AddP("第三项：衔接方式");
AddP("从故事进入知识点的转接语（或从知识点回到故事的转接语）：");
AddDotted(3);

AddSpace();
AddP("第四项：避免说教");
AddP("意义落点这步，你打算用什么方式把结论还给学员：");
AddP("□ 用第一人称的反思句（如\"我从那次之后开始想……\"）");
AddP("□ 在故事结束后抛一个问题给学员（写出问题：________________________）");
AddP("□ 让故事本身说话，不做额外评论");
AddP("□ 其他：________________________________________________");

AddSpace();
AddH2("练习G：小组互评故事植入方案 — 同伴检验");

AddExerciseP("类型：小组互评 | 用时：10分钟");
AddExerciseP("三人一组。每人用3分钟展示自己的故事植入方案。其他两人用三个问题给反馈。");

AddSpace();
var t7 = CreateTable(new[] { "检查问题", "你的回答（\"是\"或\"否\"，加一句说明）" });
AddRow(t7, new[] { "这个故事的意义落点清晰吗？听完之后，我能用一句话重复它和知识点的关系吗？", "" });
AddRow(t7, new[] { "这个故事的场景，对这门课的目标学员来说，感觉有关联吗？", "" });
AddRow(t7, new[] { "这个故事放在这个位置的目的是什么——\"引起需求感\"、\"固化记忆\"还是\"激活行动\"？目的合理吗？", "" });
FinishTable(t7);

AddSpace();
AddP("记录你收到的最有价值的一条反馈：________________________________");
AddDotted(2);
AddP("你决定根据这条反馈做什么调整：__________________________________");
AddDotted(2);
AddBreak();

// ========== CHAPTER 5 ==========
AddChapter("第五章：讲出来才算数");

AddPartTitle("五个交付习惯");

AddH2("五个让故事活起来的交付习惯");

AddSpace();
AddH3("习惯一：用\"现在时\"讲过去的事");

AddP("讲法A说的是：\"他的工作表放在面前，一个字没动过。\"过去时——在陈述一件已经发生完了的事。");

AddP("讲法B说的是：\"他的工作表，一个字没动过。\"听起来像在现场。没有用\"放在面前\"这样的旁观者描述，而是用\"一个字没动过\"这种当下感的语气，让听众感觉自己也在那个房间里。");

AddWarningP("切换的时机是张力触发那一步——当故事里\"不对劲\"的状态出现时，用现在进行时描述，而不是过去式报告。");

AddSpace();
AddH3("习惯二：一个细节够用，不需要堆叠");

AddP("讲法B里有一句话：\"手机放在桌上，不是偷看，就是放着，偶尔扫一眼。\"这一句话，比\"他很不专注，心不在焉\"传递了更多的信息，也更有画面感。");

AddWarningP("一个精准的细节，听众的大脑会自动补全画面。形容词给的是判断，细节给的是画面。");

AddSpace();
AddH3("习惯三：在最有张力的那句话之后停顿");

AddP("讲法B说\"他的工作表，一个字没动过\"之后，停顿了。那个停顿大概是两秒。");

AddP("在课堂上，两秒的停顿有重量：第一，让那句话真正\"落地\"了；第二，给了听众的大脑一点时间，去完成\"我能想象这个场景\"的处理。");

AddSpace();
AddH3("习惯四：落点句不宣告");

AddP("讲法A的落点：\"好，这说明了什么呢？……大家记一下这个原则。\"内容完全对，但\"这说明了什么呢\"是宣告——在说\"我现在要总结了\"。学员从故事的情境里被拉出来，进入了\"被教\"的模式。");

AddP("讲法B的落点：\"我从那次之后开始想——参与感，很少是靠要求换来的。\"这是第一人称的、不完整的、留有余地的表达。那个空白，是留给听众自己填的。");

AddSpace();
AddH3("习惯五：故事结束后要有一个\"回程\"动作");

AddP("故事讲完了，要从那个场景切换回课程内容，需要一句过渡语。没有这句话，学员还停在故事的情境里，而不是跟着你进入知识点。");

AddP("但这句话不能是硬切——不是\"好，故事讲完了，现在我们来看知识点\"，而是顺着故事的情绪，自然地引出课程内容。");

AddWarningP("示例：\"那次之后，我就开始想：什么样的问题，才是'只有他能回答'的问题？今天我们这部分讲的，正是找到这个问题的方法。\"");

AddSpace();
AddInsightP("五个习惯——现在时、一个具体细节、停顿、落点不宣告、回程过渡——每一个单独练，都能改善效果。它们不是表演技巧，是让听众的大脑能够跟上故事节奏的结构性安排。");

AddSpace();
AddH2("上台前值得检查的六件事");

AddNum(1, "先做三句话测试，再写完整故事：骨架不清晰的故事，加再多细节也变不好");
AddNum(2, "检查故事和知识点的逻辑方向是否一致：有时故事支持的结论和知识点有微妙的偏差");
AddNum(3, "避免\"我最厉害\"型故事：学员更容易代入一个面对困境的人，而不是一个从来没不出错的专家");
AddNum(4, "真实人物的脱敏处理：当事人本人如果在场，不会感到被暴露或被评判");
AddNum(5, "给故事留一点\"空白\"：听众主动参与理解，记忆更深");
AddNum(6, "故事需要定期更新：同一个故事讲十次，第十次讲师自己已经没有情感反应了");

AddSpace();
AddPartTitle("三维度定制化");

AddH2("让同一个故事在不同班里都有效：三维度定制化");

AddP("同一个故事，有时候在一个班反应热烈，在另一个班听众无动于衷。原因通常不是故事本身有问题，而是\"相关性距离\"——这群学员感觉故事里的事是在说\"我这种人\"，还是在说\"另一类人的事\"。");

AddP("调整这个距离，不需要重新设计故事，只需要在三个维度上微调：");

AddSpace();
AddH3("维度一：行业与职能相关性");

AddP("故事里的场景，是否贴近这群学员的日常工作？调整方式：改变故事中人物的职位描述、工作场景、行业背景——不改变核心情节，只调整背景设定。");

AddSpace();
AddH3("维度二：年资与经验层次");

AddP("故事里的困境，是否是这个层次的人实际会遇到的？调整方式：改变故事主角的经验程度，让困境的复杂度和这群学员匹配。");

AddSpace();
AddH3("维度三：当下关切与痛点焦点");

AddP("故事的情感焦点，是否触碰到了这群学员现在最在意的事？调整方式：根据这群学员当前最关心的议题，调整故事里着重描述的\"代价\"或\"收获\"。");

AddSpace();
AddH2("练习H：为两种学员背景调整你的故事 — 第三级难度");

AddExerciseP("类型：定制化适配 | 用时：10分钟");
AddExerciseP("取你在练习F里完成的故事草稿，想象以下两种不同的学员背景，说明你会在哪个维度做什么调整。");

AddSpace();
AddP("你的故事草稿面向的是什么学员（写出你设想的那群人）：_________________");
AddDotted(2);

AddSpace();
var t8 = CreateTable(new[] { "假设背景", "你会调整哪个维度？", "具体调整方向（一两句话）" });
AddRow(t8, new[] { "全部是基层员工，工作年限3年以内", "", "" });
AddRow(t8, new[] { "全部是中高层管理者，有8年以上工作经验", "", "" });
FinishTable(t8);

AddSpace();
AddP("思考一下：你调整的是故事内容本身，还是故事的侧重点和角度？_____________");

AddSpace();
AddPartTitle("上台前三问质检");

AddH2("上台前的三问质检清单");

AddP("每次讲这个故事之前——或者在完成故事草稿后做最终检验——用这三个问题过一遍：");

AddSpace();
AddH3("第一问：这个故事，今天这群学员会觉得\"跟我有关\"吗？");

AddP("如果答案是\"可能不太有关\"，检查维度一（行业/职能相关性）和维度二（年资/经验层次），看是否需要调整背景设定。");

AddSpace();
AddH3("第二问：这个故事里发生的事，他们会觉得\"有可能发生在我身上\"吗？");

AddP("如果答案是\"不太可能\"，检查故事的真实感——是否过于戏剧化、过于理想化，或者场景太遥远。");

AddSpace();
AddH3("第三问：故事讲完，他们会有\"我想要那个结果\"或者\"我不想要那个代价\"的感受吗？");

AddP("如果答案是\"可能没有\"，检查意义落点是否足够具体，以及故事的结局是否足够真实、足够在意料之中又在意料之外。");

AddSpace();
AddP("三个问题都能答\"是\"——这个故事可以上台了。");

AddSpace();
AddPartTitle("故事库建设");

AddH2("持续积累：三句话故事库");

AddP("每一次讲完课，是一次素材更新的机会。但大多数人不会在课后记录，等到下次备课时，那个在课上有强烈共鸣的学员分享、那个自己讲到一半才发现很有效的例子，都已经消失了。");

AddP("建一个故事库，不需要复杂工具，只需要一个随时能打开的地方，用最简单的三句话记录：");

AddSpace();
AddBullet("场景句：发生了什么（一句话，说清人物+情境+一个关键细节）");
AddBullet("张力句：哪里不对劲，或者哪里发生了转变（一句话）");
AddBullet("用途句：这个素材可能和哪类知识点有关联（一句话）");

AddSpace();
AddWarningP("不需要写完整故事，也不需要整理得很好看。粗糙的素材记录，远比精美的空白文档更有价值。每个月抽时间翻一翻记录，把其中一两条扩充成完整的四步故事草稿。");

AddSpace();
AddPartTitle("本章练习索引");

AddH2("工作坊总结：整理你今天带走的东西");

AddExerciseP("在这里做一次完整的整理");

AddSpace();
var t9 = CreateTable(new[] { "产出", "主要内容（关键词就够了）" });
AddRow(t9, new[] { "我的\"待改造区域\"（来自练习A）", "" });
AddRow(t9, new[] { "我选出的故事素材（来自练习B）", "" });
AddRow(t9, new[] { "我的故事草稿（来自练习C/D）", "" });
AddRow(t9, new[] { "我的完整故事植入方案（来自练习F）", "" });
AddRow(t9, new[] { "我的定制化调整思路（来自练习H）", "" });
FinishTable(t9);

AddSpace();
AddP("我今天最重要的三个认知变化：");
AddP("1. 我以前以为 ___________________________，现在认识到 ___________________________");
AddP("2. 我以前以为 ___________________________，现在认识到 ___________________________");
AddP("3. 我以前以为 ___________________________，现在认识到 ___________________________");

AddSpace();
AddP("我计划在接下来两周内具体做的一件事：");
AddDotted(3);

AddSpace();
AddH2("工作坊知识框架全景");

AddP("内训师的故事影响力");
AddP("│");
AddP("├── 第一部分：故事是工具，不是点缀");
AddP("│   ├── 为什么故事有效：具象化·情绪记忆·模式识别");
AddP("│   ├── 故事在教学中的四个位置（开场/引入/强化/收尾）");
AddP("│   └── 六种可用的故事类型 + 三问选材标准");
AddP("│");
AddP("├── 第二部分：一个故事至少要有什么");
AddP("│   ├── 基础四步结构：时空锚定→张力触发→行动转化→意义落点");
AddP("│   ├── 扩展两步：感官细节 + 情绪内心");
AddP("│   ├── 长度参考：按故事位置决定详略");
AddP("│   └── 三句话测试：骨架对了，细节才有意义");
AddP("│");
AddP("├── 第三部分：从课程内容倒推故事（核心）");
AddP("│   ├── 找故事点位：五个需要故事的信号");
AddP("│   ├── 五步倒推法：行为变化→失败场景→成功场景→选择→套入结构");
AddP("│   ├── 三种放置方式：前置引入 / 后置强化 / 夹心结构");
AddP("│   └── 落点不宣告：把结论还给学员");
AddP("│");
AddP("└── 第四部分：讲出来才算数");
AddP("    ├── 五个交付习惯：现在时·一个细节·停顿·落点不宣告·回程过渡");
AddP("    ├── 设计阶段六件事：逻辑方向·脱敏·空白·更新……");
AddP("    ├── 三维度定制化：行业职能·年资经验·当下关切");
AddP("    └── 三句话故事库：持续积累素材");
AddBreak();

// ========== APPENDIX ==========
AddChapter("附录：工具卡");

AddH2("工具卡一：基础四步结构速查");

var t10 = CreateTable(new[] { "步骤", "名称", "作用", "最简做法", "如果缺失会怎样" });
AddRow(t10, new[] { "第一步", "时空锚定", "给大脑一个\"进场\"的起点", "说清时间/地点/人物中至少两个", "听众悬空，画面形不成" });
AddRow(t10, new[] { "第二步", "张力触发", "让听众产生\"然后呢\"的需求", "引入\"但是\"\"然后突然\"\"没想到\"", "故事变成陈述，听众没有理由继续" });
AddRow(t10, new[] { "第三步", "行动转化", "提供可迁移的行为模式", "具体描述做了什么，以及之后发生了什么", "学员只看见了问题，没看见方向" });
AddRow(t10, new[] { "第四步", "意义落点", "连接故事和知识点", "用一句话说清\"这说明了什么\"", "故事是孤立事件，和今天的内容没有关系" });
FinishTable(t10);

AddSpace();
AddP("扩展两步");
var t11 = CreateTable(new[] { "步骤", "名称", "加在哪里", "核心做法" });
AddRow(t11, new[] { "第五步", "感官细节", "第一步或第二步中", "一个可以被看见的具体细节，不是形容词的堆叠" });
AddRow(t11, new[] { "第六步", "情绪内心", "第二步或第三步中", "第一人称内心独白，让听众可以代入" });
FinishTable(t11);

AddSpace();
AddP("三句话测试");
AddNum(1, "第一句说完：时空 + 张力（发生了什么）");
AddNum(2, "第二句说完：行动 + 转化（怎么应对的）");
AddNum(3, "第三句说完：落点（这说明什么）");
AddSpace();
AddP("三句话清晰 → 骨架存在，可以补细节；三句话说不清楚 → 先梳理主线，不要先补细节。");

AddSpace();
AddH2("工具卡二：五个故事点位信号");

var t12 = CreateTable(new[] { "信号", "课程里的表现", "推荐故事类型", "故事的任务" });
AddRow(t12, new[] { "概念过于抽象", "全是定义和原则，没有可以想象的场景", "类比隐喻型、案例型", "把概念转化为可以想象的具体场景" });
AddRow(t12, new[] { "错误高发区", "学员容易犯但感受不到代价", "反例型", "让代价变得真实可感" });
AddRow(t12, new[] { "动机薄弱区", "认知上接受，但行动上没有驱动力", "正例型，未来投射型", "让\"做到之后\"的状态变得具体" });
AddRow(t12, new[] { "章节转折点", "两个主题之间需要过渡", "过渡型（短故事）", "作为两个话题之间的情境桥" });
AddRow(t12, new[] { "开场或收尾", "需要激活注意力或激活行动冲动", "悬念型（开场）、情感型（收尾）", "激活投入状态或留下情感印象" });
FinishTable(t12);

AddSpace();
AddH2("工具卡三：六种故事类型速查");

var t13 = CreateTable(new[] { "类型", "特征", "最适合的位置", "一个注意点" });
AddRow(t13, new[] { "亲历型", "讲师本人的真实经历", "任何需要建立信任感的节点", "避免\"我最厉害\"叙事——困境和发现比成功更有代入感" });
AddRow(t13, new[] { "见闻型", "听说的或观察到的事", "亲历素材不够时补充", "要交代来源，不要把别人的故事包装成自己的" });
AddRow(t13, new[] { "案例型", "工作场景中真实发生的事", "展示知识点的实际应用", "做好脱敏——当事人在场不感到被暴露" });
AddRow(t13, new[] { "反例型", "失败或错误的场景", "错误高发区，打破学员盲点", "避免让任何人显得愚蠢——要让人觉得\"换了谁都可能犯\"" });
AddRow(t13, new[] { "类比隐喻型", "用熟悉解释陌生", "抽象概念的具象化", "类比必须在学员的经验范围内" });
AddRow(t13, new[] { "未来投射型", "描绘\"做到了会是什么样\"", "课程收尾或动机薄弱区", "必须足够具体——\"会变好\"没有效果" });
FinishTable(t13);

AddSpace();
AddH2("工具卡四：上台前三问质检清单");

AddP("在每次用这个故事上课之前，用三个问题快速自检：");

AddSpace();
AddP("第一问：这个故事，今天这群学员会觉得\"跟我有关\"吗？");
AddP("□ 是，继续");
AddP("□ 不确定 → 检查：行业/职能相关性是否匹配，年资/经验层次是否匹配");

AddSpace();
AddP("第二问：这个故事里发生的事，他们会觉得\"有可能发生在我身上\"吗？");
AddP("□ 是，继续");
AddP("□ 不确定 → 检查：故事是否过于戏剧化或理想化，真实感是否足够");

AddSpace();
AddP("第三问：故事讲完，他们会有\"我想要那个结果\"或\"我不想要那个代价\"的感受吗？");
AddP("□ 是，可以上台了");
AddP("□ 不确定 → 检查：意义落点是否足够具体，结局是否有真实代价感");

AddSpace();
AddH2("工具卡五：五步倒推法速查");

var t14 = CreateTable(new[] { "步骤", "核心问题", "产出内容" });
AddRow(t14, new[] { "第一步", "这个知识点，学完之后学员要做出什么具体的、可观察的行为改变？", "行为目标描述（一句话，要具体到可观察）" });
AddRow(t14, new[] { "第二步", "不做这件事，在什么具体情境下会付出代价？", "典型失败场景（1-3句话描述核心情节）" });
AddRow(t14, new[] { "第三步", "正确地做了这件事，在什么情境下产生了什么明显的不同？", "典型成功场景（1-3句话描述核心情节）" });
AddRow(t14, new[] { "第四步", "针对这群学员，用失败场景还是成功场景？为什么？", "选择 + 理由（一句话）" });
AddRow(t14, new[] { "第五步", "把选定场景套入基础四步结构，写出故事草稿。", "完整故事草稿" });
FinishTable(t14);

AddSpace();
AddP("选择失败场景还是成功场景的判断逻辑：");
AddBullet("学员觉得\"我已经知道了\" → 失败场景（打破盲点）");
AddBullet("学员觉得\"没必要这样做\" → 失败场景（让代价真实）");
AddBullet("学员认可但没动力去做 → 成功场景（激活动力）");
AddBullet("学员完全不了解这件事 → 先失败，再成功");

AddSpace();
AddH2("附录：练习册答案（可选）");

AddH3("练习1 参考答案");
AddP("问题1：更可能记起版本B，因为有具体场景");
AddP("问题2：六个组做出来的东西差异大得出乎意料");
AddP("问题3：不能，因为版本A没有画面感，只有概念");
AddP("问题4：会用版本B开场，调整方向是加入更多细节让场景更具体");

AddSpace();
AddH3("练习3 参考答案");
AddP("故事A：亲历型");
AddP("故事B：见闻型");
AddP("故事C：案例型");
AddP("故事D：反例型");
AddP("故事E：类比隐喻型");
AddP("故事F：未来投射型");

AddSpace();
AddH3("练习6 参考答案");
AddP("故事A缺失：行动转化（只有复盘描述，没有展现后续改变）");
AddP("故事B缺失：感官细节（故事完整，但缺乏具体感官描写）");
AddP("故事C缺失：行动转化（只有代价描述，没有展示如何应对）");
AddP("故事D缺失：张力触发（直接进入结果，缺乏冲突铺垫）");

AddSpace();
AddH3("练习7 参考答案");
AddP("时空锚定：\"那是一个客服团队的月度培训，周三早上\"");
AddP("张力触发：\"后排有三个学员开始低声讨论，其中一个人在看手机\"");
AddP("行动转化：\"我问了一句：'你们刚才说的，是我讲的哪一个点？'\"");
AddP("意义落点：\"学员低头看手机，不一定是在逃避课堂……\"");
AddP("扩展步骤用到了：感官细节（\"后排有三个学员开始低声讨论\"）");

AddSpace();
AddH3("练习9 参考答案（三句话测试）");
AddP("第一句：新同事发邮件时把45万写成4.5万，客户投诉");
AddP("第二句：领导开会强调细节重要性，但新同事其实不确定该找谁确认");
AddP("第三句：这件事说明，不确定时有没有人可问，比细不细心更重要");
AddSpace();
AddWarningP("以上答案仅供参考，学员有其他合理答案均算正确。");

AddSpace();
AddSpace();
AddQuoteP("版权所有 · 内训师的故事影响力工作坊 · 本手册仅供本课程学员使用");

body.Append(new SectionProperties(new PageSize { Width = 11906, Height = 16838 },
    new PageMargin { Top = 1440, Right = 1440, Bottom = 1440, Left = 1440, Header = 720, Footer = 720 }));

mainPart.Document.Save();
Console.WriteLine("Student handbook created: " + outputPath);
Console.WriteLine("Total paragraphs: " + body.ChildElements.Count);