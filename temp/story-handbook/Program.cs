using DocumentFormat.OpenXml;
using DocumentFormat.OpenXml.Packaging;
using DocumentFormat.OpenXml.Wordprocessing;

string outputPath = @"D:\新课开发\内训师和表达\内训师-故事影响力\完整课程包\04_讲师手册\讲师手册_故事影响力.docx";

using var doc = WordprocessingDocument.Create(outputPath, WordprocessingDocumentType.Document);
var mainPart = doc.AddMainDocumentPart();
mainPart.Document = new Document(new Body());
Body body = mainPart.Document.Body!;

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

// Title style
styles.Append(new Style(new StyleName { Val = "Title" }, new BasedOn { Val = "Normal" },
    new StyleParagraphProperties(new Justification { Val = JustificationValues.Center }, new SpacingBetweenLines { After = "0", Line = "240", LineRule = LineSpacingRuleValues.Auto }),
    new StyleRunProperties(new RunFonts { Ascii = "Microsoft YaHei", EastAsia = "Microsoft YaHei", HighAnsi = "Microsoft YaHei" }, new Bold(), new FontSize { Val = "56" }, new FontSizeComplexScript { Val = "56" }, new Color { Val = "1F3864" })
) { Type = StyleValues.Paragraph, StyleId = "Title" });

// Heading1
styles.Append(new Style(new StyleName { Val = "Heading 1" }, new BasedOn { Val = "Normal" },
    new StyleParagraphProperties(new SpacingBetweenLines { Before = "480", After = "240" }, new KeepNext(), new OutlineLevel { Val = 0 }),
    new StyleRunProperties(new RunFonts { Ascii = "Microsoft YaHei", EastAsia = "Microsoft YaHei", HighAnsi = "Microsoft YaHei" }, new Bold(), new FontSize { Val = "36" }, new FontSizeComplexScript { Val = "36" }, new Color { Val = "1F3864" })
) { Type = StyleValues.Paragraph, StyleId = "Heading1" });

// Heading2
styles.Append(new Style(new StyleName { Val = "Heading 2" }, new BasedOn { Val = "Normal" },
    new StyleParagraphProperties(new SpacingBetweenLines { Before = "360", After = "120" }, new KeepNext(), new OutlineLevel { Val = 1 }),
    new StyleRunProperties(new RunFonts { Ascii = "Microsoft YaHei", EastAsia = "Microsoft YaHei", HighAnsi = "Microsoft YaHei" }, new Bold(), new FontSize { Val = "28" }, new FontSizeComplexScript { Val = "28" }, new Color { Val = "2E5496" })
) { Type = StyleValues.Paragraph, StyleId = "Heading2" });

// ChapterTitle
styles.Append(new Style(new StyleName { Val = "ChapterTitle" }, new BasedOn { Val = "Normal" },
    new StyleParagraphProperties(new SpacingBetweenLines { Before = "480", After = "240" }, new KeepNext(), new OutlineLevel { Val = 0 }),
    new StyleRunProperties(new RunFonts { Ascii = "Microsoft YaHei", EastAsia = "Microsoft YaHei", HighAnsi = "Microsoft YaHei" }, new Bold(), new FontSize { Val = "40" }, new FontSizeComplexScript { Val = "40" }, new Color { Val = "C62828" })
) { Type = StyleValues.Paragraph, StyleId = "ChapterTitle" });

// Quote
styles.Append(new Style(new StyleName { Val = "Quote" }, new BasedOn { Val = "Normal" },
    new StyleParagraphProperties(new Justification { Val = JustificationValues.Center }, new SpacingBetweenLines { Before = "240", After = "240" }, new ParagraphBorders(new LeftBorder { Val = BorderValues.Single, Size = 24, Color = "2E5496" }), new Indentation { Left = "720", Right = "720" }),
    new StyleRunProperties(new Italic(), new FontSize { Val = "22" }, new FontSizeComplexScript { Val = "22" }, new Color { Val = "424242" })
) { Type = StyleValues.Paragraph, StyleId = "Quote" });

// Tip
styles.Append(new Style(new StyleName { Val = "Tip" }, new BasedOn { Val = "Normal" },
    new StyleParagraphProperties(new SpacingBetweenLines { Before = "120", After = "120" }, new Shading { Fill = "E8F5E9" }),
    new StyleRunProperties(new Bold(), new FontSize { Val = "22" }, new FontSizeComplexScript { Val = "22" })
) { Type = StyleValues.Paragraph, StyleId = "Tip" });

// Warning
styles.Append(new Style(new StyleName { Val = "Warning" }, new BasedOn { Val = "Normal" },
    new StyleParagraphProperties(new SpacingBetweenLines { Before = "120", After = "120" }, new Shading { Fill = "FFEBEE" }),
    new StyleRunProperties(new Bold(), new FontSize { Val = "22" }, new FontSizeComplexScript { Val = "22" })
) { Type = StyleValues.Paragraph, StyleId = "Warning" });

// TimeNote
styles.Append(new Style(new StyleName { Val = "TimeNote" }, new BasedOn { Val = "Normal" },
    new StyleParagraphProperties(new SpacingBetweenLines { Before = "60", After = "60" }, new Shading { Fill = "FFF3E0" }),
    new StyleRunProperties(new FontSize { Val = "20" }, new FontSizeComplexScript { Val = "20" }, new Color { Val = "E65100" })
) { Type = StyleValues.Paragraph, StyleId = "TimeNote" });

// Helper functions
void AddTitle(string text) => body.Append(new Paragraph(new ParagraphProperties(new ParagraphStyleId { Val = "Title" }), new Run(new Text(text))));
void AddH1(string text) => body.Append(new Paragraph(new ParagraphProperties(new ParagraphStyleId { Val = "Heading1" }), new Run(new Text(text))));
void AddH2(string text) => body.Append(new Paragraph(new ParagraphProperties(new ParagraphStyleId { Val = "Heading2" }), new Run(new Text(text))));
void AddChapterTitle(string text) => body.Append(new Paragraph(new ParagraphProperties(new ParagraphStyleId { Val = "ChapterTitle" }), new Run(new Text(text))));
void AddP(string text) => body.Append(new Paragraph(new Run(new Text(text))));
void AddQuoteP(string text) => body.Append(new Paragraph(new ParagraphProperties(new ParagraphStyleId { Val = "Quote" }), new Run(new Text(text))));
void AddTipP(string text) => body.Append(new Paragraph(new ParagraphProperties(new ParagraphStyleId { Val = "Tip" }), new Run(new Text(">>> " + text))));
void AddWarningP(string text) => body.Append(new Paragraph(new ParagraphProperties(new ParagraphStyleId { Val = "Warning" }), new Run(new Text("!!! " + text))));
void AddTimeP(string text) => body.Append(new Paragraph(new ParagraphProperties(new ParagraphStyleId { Val = "TimeNote" }), new Run(new Text("TIME: " + text))));
void AddBullet(string text) => body.Append(new Paragraph(new ParagraphProperties(new SpacingBetweenLines { Before = "0", After = "80" }, new Indentation { Left = "360", Hanging = "360" }), new Run(new Text("- " + text))));
void AddNum(int num, string text) => body.Append(new Paragraph(new ParagraphProperties(new SpacingBetweenLines { Before = "0", After = "80" }, new Indentation { Left = "720", Hanging = "360" }), new Run(new Text(num + ". " + text))));
void AddSpace() => body.Append(new Paragraph(new Run(new Text(""))));
void AddBreak() => body.Append(new Paragraph(new Run(new Break { Type = BreakValues.Page })));

Table CreateTable(string[] headers, string fill = "1F3864") {
    var tbl = new Table(new TableProperties(new TableWidth { Width = "5000", Type = TableWidthUnitValues.Pct },
        new TableBorders(new TopBorder { Val = BorderValues.Single, Size = 8, Color = fill }, new BottomBorder { Val = BorderValues.Single, Size = 8, Color = fill },
            new LeftBorder { Val = BorderValues.Single, Size = 8, Color = fill }, new RightBorder { Val = BorderValues.Single, Size = 8, Color = fill },
            new InsideHorizontalBorder { Val = BorderValues.Single, Size = 4, Color = "CCCCCC" }, new InsideVerticalBorder { Val = BorderValues.Single, Size = 4, Color = "CCCCCC" })),
        new TableGrid(new GridColumn()));
    var hr = new TableRow(new TableRowProperties(new TableHeader()));
    foreach (var h in headers) hr.Append(new TableCell(new TableCellProperties(new Shading { Fill = fill }), new Paragraph(new ParagraphProperties(new Justification { Val = JustificationValues.Center }), new Run(new RunProperties(new Bold(), new Color { Val = "FFFFFF" }), new Text(h)))));
    tbl.Append(hr); return tbl;
}

void AddRow(Table tbl, string[] cells) { var tr = new TableRow(); foreach (var c in cells) tr.Append(new TableCell(new Paragraph(new Run(new Text(c))))); tbl.Append(tr); }
void FinishTable(Table tbl) => body.Append(tbl);

// ==================== COVER ====================
AddSpace(); AddSpace(); AddSpace();
AddTitle("内训师的故事影响力");
AddSpace();
AddP("——培训师指导手册");
AddSpace(); AddSpace(); AddSpace();
AddP("课程名称：内训师的故事影响力");
AddP("副标题：培训师指导手册");
AddSpace();
AddP("版本：V1.0");
AddSpace();
AddP("适用对象：企业内训师、培训管理者");
AddP("预设时长：2.5–3.5小时工作坊");
AddSpace(); AddSpace();
AddP("编制日期：2026年6月");
AddBreak();

// ==================== TABLE OF CONTENTS ====================
AddH1("目录");
AddP("第一章  课程概述 ................................................ 1");
AddP("第二章  课程结构总览 ........................................ 3");
AddP("第三章  第一章教学指导：故事是教学工具 ......................... 5");
AddP("第四章  第二章教学指导：故事类型与选材 ......................... 8");
AddP("第五章  第三章教学指导：最简故事结构 .......................... 11");
AddP("第六章  第四章教学指导：从课程倒推故事 ........................ 15");
AddP("第七章  第五章教学指导：讲述要点与定制化 ........................ 20");
AddP("第八章  评估与产出 .......................................... 24");
AddP("附录 ...................................................... 26");
AddBreak();

// ==================== CHAPTER 1: OVERVIEW ====================
AddChapterTitle("第一章：课程概述");

AddH1("1.1 课程背景与设计出发点");
AddP("大多数内训师面临同一个困境：课程内容有了，框架搭好了，但课堂就是\"燃不起来\"。学员坐在台下，听的时候点头，出门就忘。不是知识不对，是没有被记住的理由。");
AddP("故事，是最古老也最有效的\"让人记住\"的方式。但内训师常见的误区有两个极端：一是完全不用故事，讲课像读PPT；二是随意插故事，讲完没落点，学员觉得\"好像听了个段子\"。");
AddP("本课程不从零开始教\"怎么讲故事\"，而是专门面向**已有课程内容的内训师**，帮助他们在现有课程结构中系统性地\"植入\"故事——让故事成为教学工具，而不是装饰品。");

AddH2("设计的根本逻辑");
AddP("故事之所以有教学价值，是因为它做到了三件知识点本身做不到的事：");
AddBullet("具象化：抽象的原则变成可以想象的场景");
AddBullet("情感激活：情绪是记忆的锚点，有感受的东西才被留下");
AddBullet("模式识别：人通过故事中的模式，比通过规则更快学会行为");
AddP("这三件事不是故事的\"附加效果\"，而是教学本身要完成的核心任务。所以讲好故事，不是在追求课堂风格，而是在提升教学效果。");

AddH1("1.2 目标学员画像与前置要求");
AddH2("基本特征");
AddBullet("企业内部兼职或专职内训师，已有一定课程开发与讲授经验");
AddBullet("能够搭建课程框架，内容专业度较高");
AddBullet("在正式培训场合（而非日常聊天）中，故事运用能力明显薄弱");
AddBullet("对\"讲故事\"有一定抵触或不确定感");

AddH2("典型痛点");
var t1_1 = CreateTable(new[] { "痛点", "具体表现" });
AddRow(t1_1, new[] { "不知道什么时候用", "该用故事的地方用了图表，该讲案例的地方用了定义" });
AddRow(t1_1, new[] { "不知道用什么故事", "找不到合适的素材，或者有素材但觉得\"太平了，不够有力\"" });
AddRow(t1_1, new[] { "讲出来效果差", "故事讲完，学员没反应，或者完全不知道这个故事跟今天课有什么关系" });
AddRow(t1_1, new[] { "担心跑题", "一旦开始讲故事，自己也把握不好收尾时机" });
AddRow(t1_1, new[] { "不会定制", "同一个故事用在不同班，有的班有共鸣，有的班反应平淡，不知道为什么" });
FinishTable(t1_1);

AddH1("1.3 课程定位");
AddH2("不是什么");
AddBullet("不是通用演讲技巧课");
AddBullet("不是\"如何讲一个精彩故事\"的表演训练");

AddH2("是什么");
AddP("针对已开发好课程内容的内训师，提供一套可落地的故事设计与使用方法论，帮助他们在不重建课程结构的前提下，让课程更有感染力、更有记忆点、转化效果更好。");

AddH1("1.4 核心学习目标（行为层面）");
AddNum(1, "识别：能在自己已有课程中找到至少2个适合植入故事的\"故事点位\"");
AddNum(2, "设计：能用最简结构，将一段真实经历或案例改写成一个有教学落点的故事");
AddNum(3, "植入：能说明这个故事放在课程哪个位置、起什么教学作用");
AddNum(4, "定制：能描述在面对不同背景学员时，该如何调整故事的选择或讲法");
AddNum(5, "积累：能说出一套持续收集和管理故事素材的简单方法");
AddBreak();

// ==================== CHAPTER 2: COURSE STRUCTURE ====================
AddChapterTitle("第二章：课程结构总览");

AddH1("2.1 整体时间分配建议");

var t2_1 = CreateTable(new[] { "章节", "主题", "建议时长", "核心产出" });
AddRow(t2_1, new[] { "第一章", "故事的教学本质", "25-35分钟", "找到待改造区域" });
AddRow(t2_1, new[] { "第二章", "故事类型与选材逻辑", "30-40分钟", "3个素材线索" });
AddRow(t2_1, new[] { "第三章", "最简可用故事结构", "30-40分钟", "完整故事草稿" });
AddRow(t2_1, new[] { "第四章（核心）", "基于现有内容的故事设计", "45-55分钟", "故事植入方案" });
AddRow(t2_1, new[] { "第五章", "讲述要点与定制化", "30-40分钟", "质检清单应用" });
FinishTable(t2_1);

AddTipP("第四章是本课程的核心实操章节，时长和练习比重最高，讲师在时间有限时可压缩其他章节，但不建议压缩第四章。");

AddH1("2.2 教学方法与节奏设计");
AddH2("核心教学策略");
AddP("本课程自身必须示范\"故事是什么样子的\"——每一个知识点，都应该用故事来引入或强化，而不是用定义开头。课程本身的设计，就是学员学习\"如何设计故事课程\"的活样本。");

AddWarningP("如果本课程讲得很干、全是理论框架，学员不会相信故事有用。");

AddH2("各类练习比例");
var t2_2 = CreateTable(new[] { "教学活动类型", "建议时间占比", "说明" });
AddRow(t2_2, new[] { "讲授与示范", "约35%", "每次讲授后必须接练习，不做超过15分钟的连续讲授" });
AddRow(t2_2, new[] { "个人练习（写/想）", "约30%", "第三、四章的结构套用练习为主" });
AddRow(t2_2, new[] { "小组互评", "约20%", "以反馈为主，不做大组展示" });
AddRow(t2_2, new[] { "全班讨论", "约15%", "集中在第一章和第五章" });
FinishTable(t2_2);

AddH1("2.3 练习比例设计");
AddNum(1, "诊断型：判断哪个故事版本更有教学效果（第一章）");
AddNum(2, "识别型：标注故事点位，说明判断依据（第四章前段）");
AddNum(3, "套用型：用四步结构搭出故事草稿（第三章）");
AddNum(4, "设计型：从自己课程内容出发，完整完成故事设计（第四章主练习）");
AddNum(5, "定制型：针对不同学员背景，调整故事的选择或讲法（第五章）");
AddBreak();

// ==================== CHAPTER 3: CHAPTER 1 TEACHING GUIDE ====================
AddChapterTitle("第三章：第一章教学指导");

AddH1("3.1 教学目的与关键认知");
AddH2("教学目的");
AddP("打破\"故事=风格偏好\"的认知，建立\"故事=教学工具\"的框架。本章不讲大量理论，而是通过体验性活动让学员直接感受到有故事和没故事的差异。");

AddH2("关键认知转变");
AddQuoteP("故事不是用来让课堂变好看的。故事是让学员把知识从耳朵带进大脑、从大脑带回工作的桥梁。");

AddH1("3.2 各节内容要点");
AddH2("1.1 一个测试：你会记住哪个版本？");
AddP("给学员呈现同一个知识点的两种表达版本——纯知识陈述版 vs. 包含故事的版本。请学员5分钟后默写能记住的内容。引导学员自己发现：被记住的，往往是有场景的那一版。");

AddH2("1.2 故事为什么有效：三个机制");
AddBullet("具象锚点：人的记忆更擅长保留场景，而非抽象规则");
AddBullet("情绪激活：带有情绪的信息，记忆留存率远高于中性信息");
AddBullet("模式迁移：学员通过故事中角色的处境，完成\"我遇到类似情况时该怎么办\"的预演");

AddH2("1.3 故事在教学中的四种功能位置");
var t3_1 = CreateTable(new[] { "位置", "教学任务", "故事的作用", "典型形式" });
AddRow(t3_1, new[] { "开场", "激活注意力、建立学习动机", "制造悬念，或触发学员的切身痛点", "一个尚未被解决的困境场景" });
AddRow(t3_1, new[] { "知识点引入前", "让学员产生\"我需要这个工具\"的感受", "先展示\"没有这个方法会怎样\"的真实场景", "失败案例、麻烦场景" });
AddRow(t3_1, new[] { "知识点强化后", "让知识从\"听懂了\"变成\"记住了\"", "把刚学的原则还原成可以想象的具体场景", "应用案例、正向场景" });
AddRow(t3_1, new[] { "收尾", "激活行动意愿，留下情感印象", "让学员代入\"做到之后会是什么样\"", "未来投射、情感场景" });
FinishTable(t3_1);

AddH1("3.3 教学活动设计");
AddH2("开场活动：两个版本的记忆测试");
AddP("讲师示范：呈现同一个知识点（建议用\"绩效反馈应针对行为而非评价人\"这个知识点）的两个版本——");
AddP("版本A（纯知识陈述）：绩效反馈应以可观察的具体行为为依据，而非对人的评价。有效的反馈描述行为本身和它带来的影响，并指向可改变的方向。");
AddP("版本B（包含故事）：有个主管，带了一名工作三年的员工，年底绩效面谈……三个月后，这名员工离职了。");
AddP("5分钟后请学员默写，看哪个版本记得更多。");

AddH1("3.4 时间分配建议");
var t3_2 = CreateTable(new[] { "环节", "建议时间", "备注" });
AddRow(t3_2, new[] { "开场活动：记忆测试", "10分钟", "体验5分钟 + 讨论5分钟" });
AddRow(t3_2, new[] { "三个机制讲解", "10分钟", "不要超过15分钟连续讲授" });
AddRow(t3_2, new[] { "四种功能位置", "8分钟", "配合表格讲解" });
AddRow(t3_2, new[] { "练习A：找到待改造区域", "7分钟", "给学员动手标记自己的课程" });
FinishTable(t3_2);

AddH1("3.5 常见问题与应对");
AddH2("Q1：学员说\"我没有什么好故事\"");
AddP("应对：告诉学员\"不是缺素材，是不知道哪些素材算故事\"。用第二章的六种故事类型和素材来源地图来说明。");

AddH2("Q2：学员觉得故事会占用太多时间，影响课程进度");
AddP("应对：强调故事不需要长——教学中最有效的故事，往往是那种\"刚刚够\"的故事。2分钟的开场故事、30秒的强化故事都是完整的故事。");

AddH2("Q3：学员担心故事讲不好会冷场");
AddP("应对：先完成第三章的四步结构练习，故事有骨架就不怕。第五章的五个交付习惯也能帮助提升讲述效果。");

AddH1("3.6 讲师示范故事稿");
AddH2("示范故事：那个说\"这个课没用\"的学员");
AddP("【第一步：时空锚定】那是一个客服技能培训班，第二天下午。班里有个学员，坐在最后排靠窗的位置，从第一天开始，手机就放在桌上——不是偷看，就是放着，偶尔扫一眼。");
AddP("【第二步：张力触发】下午的组内练习开始了。其他人都在讨论，他的工作表放在面前，一个字没动过。");
AddP("【第三步：行动转化】我走过去，在他旁边蹲下来，说了一句话：\"这一栏，你比我更有发言权——你每天接电话，我没接过。\"他停了大概一秒钟，然后低头，开始在工作表上写字。后来那张工作表，他那一栏写得最详细。");
AddP("【第四步：意义落点】我从那次之后开始想：参与感，很少是靠要求换来的——更多的时候，是靠找到那个只有他能回答的问题来的。");

AddTimeP("讲出来约90秒，非常适合用作\"开场故事\"或\"收尾故事\"的示范。");
AddBreak();

// ==================== CHAPTER 4: CHAPTER 2 TEACHING GUIDE ====================
AddChapterTitle("第四章：第二章教学指导");

AddH1("4.1 教学目的与关键认知");
AddH2("教学目的");
AddP("解决\"我没有好故事\"的错误认知，让学员认识到故事素材的来源比他们想象的宽广得多，并建立选材的基本判断标准。");

AddH2("关键认知");
AddQuoteP("故事不是\"找到的\"，而是\"选出来的\"。你需要的不是一个\"完美故事\"，而是一个能和今天的知识点产生真实连接的场景。");

AddH1("4.2 各节内容要点");
AddH2("2.1 六种可用的故事类型");
var t4_1 = CreateTable(new[] { "类型", "说明", "适用场景", "注意事项" });
AddRow(t4_1, new[] { "亲历型", "讲师本人的真实经历", "任何需要建立信任感的节点", "避免变成自我推销" });
AddRow(t4_1, new[] { "见闻型", "讲师观察到或听说的事情", "亲身经历素材不够用时的补充", "要交代来源" });
AddRow(t4_1, new[] { "案例型", "工作中的真实案例（可脱敏处理）", "专业知识点的应用场景展示", "做好脱敏" });
AddRow(t4_1, new[] { "反例型", "失败、错误或代价的真实场景", "学员容易忽视某个关键注意点时", "避免让某人显得愚蠢" });
AddRow(t4_1, new[] { "类比隐喻型", "用熟悉的事物比拟陌生概念", "讲抽象、复杂的概念时", "类比要与学员经验高度重叠" });
AddRow(t4_1, new[] { "未来投射型", "描绘\"如果做到了，会是什么样\"", "收尾激励、建立行动动机时", "要足够具体" });
FinishTable(t4_1);

AddH2("2.2 素材来源地图");
AddBullet("自身经历：工作、学习、生活中被触动的瞬间（最优先）");
AddBullet("学员案例：过往培训班中学员分享的真实情境（使用前需处理脱敏）");
AddBullet("同行交流：同岗位、同行业人员遇到的真实问题");
AddBullet("内部文档：公司复盘报告、案例库、客诉记录");
AddBullet("公开资料：新闻、行业报告中的真实事件（标注来源即可）");

AddWarningP("不建议大量使用影视剧、名人故事作为核心教学故事——它们与学员距离太远，\"真实感\"弱。");

AddH2("2.3 什么故事不适合用");
AddBullet("与本组织文化或价值观明显冲突的故事");
AddBullet("无法被学员在工作场景中\"代入\"的故事");
AddBullet("涉及仍在职人员且可能影响其声誉的故事");
AddBullet("讲师明显\"赢了\"或\"比学员厉害\"的故事");

AddH2("2.4 选材的基本判断标准（三个自问）");
AddNum(1, "这个故事里的人物或处境，学员能\"认出来\"吗？（相关性）");
AddNum(2, "这个故事里发生的事，学员会相信\"这是真的\"吗？（可信度）");
AddNum(3, "讲完这个故事，我能用一句话说清它和课程知识点的关系吗？（落点清晰度）");

AddH1("4.3 教学活动设计");
AddH2("练习B：为待改造区域找到3个素材线索");
AddP("给学员10分钟，针对自己课程中练习A标记的\"待改造区域\"，列出3个可能的故事素材（类型不限），并说明素材来源。不要求写完整故事，只要列出\"有一次……\"级别的素材线索。");

AddH1("4.4 时间分配建议");
var t4_2 = CreateTable(new[] { "环节", "建议时间", "备注" });
AddRow(t4_2, new[] { "六种故事类型", "12分钟", "配合表格讲解，每种类型举一个例子" });
AddRow(t4_2, new[] { "素材来源地图", "5分钟", "重点说明\"学员案例\"和\"内部文档\"" });
AddRow(t4_2, new[] { "三个自问判断标准", "5分钟", "强调\"落点清晰度\"的重要性" });
AddRow(t4_2, new[] { "练习B：素材线索", "12分钟", "动手写，不要只停留在想的层面" });
FinishTable(t4_2);

AddH1("4.5 常见问题与应对");
AddH2("Q1：学员说\"我的工作很无聊，没有什么好故事\"");
AddP("应对：引导学员重新定义\"好故事\"——不需要惊天动地，只需要给学员一个可以想象的场景。日常工作中的一个小挑战、小意外、小发现，都是好素材。");

AddH2("Q2：学员担心用学员案例会泄露隐私");
AddP("应对：强调脱敏原则——改姓名、模糊可识别特征。核心判断标准：讲完这个故事，当事人本人如果在现场，不会感到被暴露或被评判。");

AddH2("Q3：学员选了素材但不确定和知识点的关系");
AddP("应对：这是正常现象。这个问题会在第三章（四步结构）和第四章（五步倒推）中解决。现在只需要列出素材线索，不需要完全想清楚怎么用。");

AddTipP("讲师自己经历的\"意外\"往往是最有感染力的故事——它展示了讲师的真实思考过程，而不只是完美的结论。");
AddBreak();

// ==================== CHAPTER 5: CHAPTER 3 TEACHING GUIDE ====================
AddChapterTitle("第五章：第三章教学指导（核心实操）");

AddH1("5.1 教学目的与关键认知");
AddH2("教学目的");
AddP("给学员一个可以立刻上手的故事搭建工具。核心不是\"讲一个精彩故事\"，而是\"讲一个有教学效果的完整故事\"。");

AddH2("关键认知");
AddQuoteP("四步结构不是写作技巧，是大脑处理故事的自然节奏。时空锚定让人\"进场\"，张力触发让人\"想听\"，行动转化让人\"可迁移\"，意义落点让人\"记得住\"。");

AddH1("5.2 四步结构详解与示范");

AddH2("第一步：时空锚定");
AddP("给故事一个可以想象的起点。时间，地点，人物——至少说清楚其中两个。");
AddP("【为什么这步不能省】没有锚点，听众的大脑是悬空的。当你说\"有次培训……\"，大脑无法开始构建场景。");
AddP("【讲师示范】\"那是一个客服技能培训班，第二天下午。班里有个学员，坐在最后排靠窗的位置……\"");

AddH2("第二步：张力触发");
AddP("引入一个冲突、困境或意外——用\"但是\"\"然后突然\"\"没想到\"来制造阻力。");
AddP("【为什么这步最重要】没有张力的故事不是故事，是陈述。听众会等着你说\"然后呢\"，是因为有什么东西还没解决。");
AddP("【讲师示范】\"下午的组内练习开始了，其他人都在讨论，他的工作表放在面前，一个字没动过。\"");

AddH2("第三步：行动与转化");
AddP("有人做了什么，发生了什么变化。不需要完美收场，但要有一个\"有人应对了这件事\"的具体动作。");
AddP("【为什么这步是核心】故事的\"可迁移性\"来自这一步。学员在这里看见了一个具体的行动，他们的大脑在预演：如果是我，我可以这样做。");
AddP("【讲师示范】\"我走过去，在他旁边蹲下来，说了一句话……他停了大概一秒钟，然后低头，开始写字。\"");

AddH2("第四步：意义落点");
AddP("用一到两句话，把故事和课程知识点的连接说清楚。这一步，是故事和教学之间的桥。");
AddP("【为什么这步不能省】没有落点的故事是孤立的事件。学员听完会觉得有趣，但不知道这跟今天学的东西有什么关系。");
AddP("【讲师示范】\"我从那次之后开始想：参与感，很少是靠要求换来的——更多的时候，是靠找到那个只有他能回答的问题来的。\"");

AddH1("5.3 个人练习指导");
AddH2("练习C：搭出你的第一个故事草稿");
AddP("取练习B里选出的\"最想开发的那个素材\"，用基础四步结构写出这个故事的完整草稿。时间控制：写出来不超过3分钟讲述时长。");

AddH2("练习D：两人互讲，互给反馈");
AddP("两人一组。每人用2分钟讲述自己的故事草稿，然后另一方用四个问题给反馈：");

var t5_1 = CreateTable(new[] { "问题", "反馈目的" });
AddRow(t5_1, new[] { "哪一步让你最清楚地进入了场景？", "找到最有效的锚定点" });
AddRow(t5_1, new[] { "哪一步让你感觉\"跳出来了\"？", "找到卡点" });
AddRow(t5_1, new[] { "落点句是什么？你能重复出来吗？", "检验落点清晰度" });
AddRow(t5_1, new[] { "故事和知识点的关系清晰吗？", "检验逻辑关联" });
FinishTable(t5_1);

AddH1("5.4 时间分配建议");
var t5_2 = CreateTable(new[] { "环节", "建议时间", "备注" });
AddRow(t5_2, new[] { "四步结构讲解 + 示范", "12分钟", "配合讲师示范故事完整演示" });
AddRow(t5_2, new[] { "扩展两步（感官细节、情绪内心）", "5分钟", "有时间再加，不是必须" });
AddRow(t5_2, new[] { "练习C：写故事草稿", "15分钟", "核心产出时间，不要压缩" });
AddRow(t5_2, new[] { "练习D：两人互讲反馈", "10分钟", "每组2分钟讲述 + 2分钟反馈" });
FinishTable(t5_2);

AddH1("5.5 讲师示范故事完整稿");
AddP("【完整四步故事：布置任务时说清验收标准】");
AddP("【第一步：时空锚定】去年，部门里有一个技术主管，刚带了一个三人的小项目组。");
AddP("【第二步：张力触发】他让其中一名成员做一份\"完整的竞品分析报告\"。三天后，那名成员发来了一份28页的文档。主管打开看了10分钟，说了一句话：\"这不是我要的，重新做。\"成员问：\"那你要什么？\"主管说了将近8分钟——可以在周五评审会上直接用的、重点是竞品的定价策略、PPT格式不超过15页、每个结论要有数据支持。这8分钟的内容，如果在任务开始前就说了，那28页的文档就不会存在。");
AddP("【第三步：行动转化】那次之后，这个主管做了一个调整：每次布置任务，在说完任务内容之后，都会补一句\"我需要看到的最终结果是……格式是……用途是……\"。每次多说大约15秒，但后续需要返工的情况明显减少了。");
AddP("【第四步：意义落点】他后来跟我说了一句话，我觉得挺有意思的——他说，我以前以为说清楚任务就够了。那次之后才意识到，\"说清楚做什么\"和\"说清楚做成什么样\"，是两件完全不同的事。");

AddTimeP("讲出来约2分30秒，适合用作\"知识点引入前\"或\"后置强化\"位置的故事演示。");

AddH1("5.6 常见问题与应对");
AddH2("Q1：学员说\"我不知道怎么开头\"");
AddP("应对：先从\"时间\"开始——\"去年\"\"有一次\"\"那时候\"都是好的开头方式。先给时间锚点，其他的自然会跟上来。");

AddH2("Q2：学员故事有五步但缺第四步");
AddP("应对：这是最常见的问题。提醒学员：落点不能省，它不是\"总结\"，而是\"连接\"——把故事和知识点连在一起的桥。");

AddH2("Q3：学员说\"我觉得这个故事太简单了，不够精彩\"");
AddP("应对：教学故事不需要精彩，需要完整。一个有骨架的简单故事，比一个混乱的精彩故事更有教学效果。");
AddBreak();

// ==================== CHAPTER 6: CHAPTER 4 TEACHING GUIDE ====================
AddChapterTitle("第六章：第四章教学指导（从课程倒推故事）");

AddH1("6.1 教学目的与关键认知");
AddH2("教学目的");
AddP("这是本课程的核心实操章节。帮助学员掌握一套\"从课程内容倒推故事\"的设计方法，而不是先有故事再找机会用。");

AddH2("关键认知");
AddQuoteP("找故事点位，不是问\"我可以在哪里用故事\"，而是问\"这里，学员缺少什么——是画面感、是警觉感、还是行动的动力？\"缺什么，就用能提供什么的故事。");

AddH1("6.2 五个故事需求信号");
AddP("不是每个知识点都需要故事，但每个重要的知识段落，都应该评估一下是否有故事需求。以下五个信号，是最常见的\"这里需要一个故事\"的提示。");

var t6_1 = CreateTable(new[] { "信号", "课程里的表现", "需要什么故事", "故事的任务" });
AddRow(t6_1, new[] { "信号一：概念过于抽象", "全是定义和原则，没有可以想象的场景", "类比隐喻型或案例型", "把抽象概念转化为可以想象的具体场景" });
AddRow(t6_1, new[] { "信号二：错误高发区", "学员在实际工作中反复犯这个错", "反例型", "让学员感受到\"原来如果我这样做，会有这样的代价\"" });
AddRow(t6_1, new[] { "信号三：动机薄弱区", "认知上接受，但行动上没有驱动力", "正例型或未来投射型", "让\"做到之后会是什么样\"变得具体" });
AddRow(t6_1, new[] { "信号四：章节转折点", "从A话题切换到B话题，学员注意力需要重新调动", "过渡型（短故事）", "作为两个主题之间的\"桥\"" });
AddRow(t6_1, new[] { "信号五：开场或收尾", "需要激活注意力或激活行动冲动", "悬念型（开场）、情感型（收尾）", "激活投入状态或留下情感印象" });
FinishTable(t6_1);

AddH1("6.3 五步倒推法详解");

AddH2("第一步：找到知识点的核心行为变化");
AddP("这个知识点，学完之后，你希望学员做出什么**具体的、可观察的行为改变**？");
AddP("不是\"了解验收标准的重要性\"，而是：\"布置任务时，在说完任务内容之后，还会补充一句：'我需要的最终结果是……格式是……交付时间是……用途是……'\"");

AddH2("第二步：找到\"典型失败场景\"");
AddP("如果不做这个行为变化，在什么具体的工作情境下会付出代价？");
AddP("【示例】产品经理布置了\"请做一份完整的用户调研报告\"，下周三收到28页报告，完全不是要的方向，让对方重做——那8分钟的说明，如果在任务开始前就说了，那28页的文档就不会存在。");

AddH2("第三步：找到\"典型成功场景\"");
AddP("如果正确地做了这个行为，在什么情境下产生了明显的不同？");
AddP("【示例】同一个产品经理，这次在布置任务时说清楚了验收标准：格式、用途、截止时间。对方说\"好，我明白了\"，下周三第一稿就基本达到预期方向。");

AddH2("第四步：决定用哪个场景");
var t6_2 = CreateTable(new[] { "学员状态", "选哪个场景", "原因" });
AddRow(t6_2, new[] { "觉得\"这个我知道了，不需要刻意做\"", "失败场景", "用代价打破盲点" });
AddRow(t6_2, new[] { "觉得\"做这件事很麻烦，没必要\"", "失败场景", "让代价足够真实" });
AddRow(t6_2, new[] { "认知上认可，但行动上没有动力", "成功场景", "激活动力" });
AddRow(t6_2, new[] { "完全不了解这个概念", "先失败场景，再成功场景", "先让学员看见问题，再展示解法" });
FinishTable(t6_2);

AddH2("第五步：把选定场景套入四步结构");
AddP("回到第三章的四步结构，把选定的场景，按照四步写成故事草稿。");

AddH1("6.4 三种故事放置方式");
AddH2("前置引入型（先讲故事，再讲知识）");
AddP("故事用来制造\"我需要这个方法\"的感受，然后知识点作为答案进入。");
AddP("【示例转接语】\"回到刚才那个情境——如果那个产品经理手上有一个工具，可以在30秒内把验收标准说清楚，会怎样？今天这部分，我们就来解决这个问题。\"");

AddH2("后置强化型（先讲知识，再用故事固化）");
AddP("知识点讲完后用一句话\"场景回调\"，然后进入故事。");
AddP("【示例转接语】\"说完了这个方法，我想给大家讲一个例子——看看这个方法用在实际情境里是什么效果。\"");

AddH2("夹心结构型（故事前两步→讲知识→故事后两步）");
AddP("开头只讲故事的前两步，制造悬念；知识点讲完之后，回到故事的后两步。适合需要较深理解才能\"看懂\"故事的情况。");
AddP("【示例转接语（知识点讲完后）】\"好，我们带着刚才讲的这个方法，再回到那个产品经理的情境——现在你来看，他后来做了什么……\"");

AddH1("6.5 如何避免说教感");
AddP("故事讲完之后，很多人会自然地说：\"所以，大家以后要……\"这在内容上完全正确，但听起来像在说教。");

AddH2("效果更好的方式，是把结论\"还给\"学员");
AddP("不说：\"所以你们在布置任务的时候，一定要说清楚验收标准。\"");
AddP("而是说：\"那个产品经理后来跟我说了一句话，让我觉得挺有意思的——他说，我以前以为把任务描述清楚了就够了，说清楚'做什么'。但那次之后，我发现'做什么'和'做成什么样'，是两件完全不同的事。\"");

AddH1("6.6 练习F+G：核心产出设计");
AddH2("练习F：完整故事植入方案");
AddP("选取自己当前正在讲或即将讲的课程中的一个模块，完成以下工作：");
AddNum(1, "识别1-2个\"故事点位\"，说明识别依据");
AddNum(2, "用五步操作设计一个故事草稿");
AddNum(3, "确定故事放置位置和衔接方式");
AddP("小组内互相展示，反馈三个问题：落点清晰吗？逻辑关联顺畅吗？放置位置目的合理吗？");

AddH1("6.7 时间分配建议");
var t6_3 = CreateTable(new[] { "环节", "建议时间", "备注" });
AddRow(t6_3, new[] { "五个故事需求信号", "10分钟", "配合练习E" });
AddRow(t6_3, new[] { "五步倒推法讲解", "12分钟", "配合完整示例" });
AddRow(t6_3, new[] { "三种放置方式", "5分钟", "快速过，重点在实操" });
AddRow(t6_3, new[] { "练习F：完整方案设计", "20分钟", "核心产出时间" });
AddRow(t6_3, new[] { "练习G：小组互评", "10分钟", "三人一组，每组3分钟" });
FinishTable(t6_3);

AddH1("6.8 常见问题与应对");
AddH2("Q1：学员不知道自己的课程需要什么样的故事");
AddP("应对：用五步倒推法从头走一遍——先确认行为目标，再找失败/成功场景。方向对了，故事自然就有了。");

AddH2("Q2：学员故事和知识点的关联不够直接");
AddP("应对：检查落点句。好的落点句应该能用一句话说清楚\"这说明了什么\"，而且和知识点的核心原则一致。");

AddH2("Q3：学员故事放在错误的位置");
AddP("应对：帮助学员确认故事要完成的任务——是\"引发需求感\"还是\"固化记忆\"？任务不同，放置位置不同。");
AddBreak();

// ==================== CHAPTER 7: CHAPTER 5 TEACHING GUIDE ====================
AddChapterTitle("第七章：第五章教学指导（讲述要点与定制化）");

AddH1("7.1 教学目的与关键认知");
AddH2("教学目的");
AddP("帮助学员理解：同一个故事设计好之后，讲述方式和对象适配依然会影响最终效果。本章解决\"设计完了还是讲不好\"\"换一个班效果就差了\"的问题。");

AddH2("关键认知");
AddQuoteP("五个交付习惯不是表演技巧，是让听众的大脑能够跟上故事节奏的结构性安排。停顿不是空白，是让信息落地的过程。");

AddH1("7.2 两种讲法对比体验");
AddP("先让学员感受两种讲法的差异。阅读教学文档中\"先读两种讲法的描述\"部分，然后讨论：");

var t7_1 = CreateTable(new[] { "问题", "参考要点" });
AddRow(t7_1, new[] { "两种讲法哪种更可能让你记住这个故事？", "讲法B更有可能——因为有画面感和情绪连接" });
AddRow(t7_1, new[] { "讲法B做了哪些讲法A没做的事？", "停顿、现在时、轻声讲、留白、第一人身反思式落点" });
AddRow(t7_1, new[] { "那三秒的停顿，在故事里起了什么作用？", "让张力句真正落地，给听众大脑处理时间" });
AddRow(t7_1, new[] { "B最后那句话的语气是什么感觉？", "发现的语气，不是宣告；留有余地让听众自己思考" });
FinishTable(t7_1);

AddH1("7.3 五个交付习惯详解");

AddH2("习惯一：用\"现在时\"讲过去的事");
AddP("张力触发那一步，用现在进行时描述——让听众\"看见\"正在发生的事，而不是在听汇报。");
AddP("【练习指引】把你的故事草稿里，张力触发的核心句子，从过去式改成现在时，读出来感受差异。");

AddH2("习惯二：一个细节够用，不需要堆叠");
AddP("一个精准的细节，比大量形容词更有画面感。\"门口电话铃响了，没有人接\"比\"气氛很紧张\"传递更多信息。");
AddP("【练习指引】在你的故事草稿里，找到感官细节最少的地方，加入一个具体的、可被看见的细节。");

AddH2("习惯三：在最有张力的那句话之后停顿");
AddP("两秒的停顿做两件事：让那句话真正落地，给听众大脑一点处理时间。很多人因为紧张把停顿省掉，结果每一秒都在接收新信息，情绪没有机会跟上。");
AddP("【练习指引】在你的故事脚本上，标出两个停顿位置——张力触发核心句之后，意义落点之前。");

AddH2("习惯四：落点句不宣告");
AddP("用第一人称的、不完整的、留有余地的表达。\"我从那次之后开始想——\"比\"这说明了什么什么原理\"更能让听众主动参与思考。");
AddP("【练习指引】把你故事草稿的落点句，改成第一人称反思形式，或以问题结尾。");

AddH2("习惯五：故事结束后要有一个\"回程\"动作");
AddP("故事讲完，需要一句过渡语把学员从故事情境带回课程内容。这句话不能硬切，而是顺着故事的情绪自然引出知识点。");
AddP("【讲师示范】\"那次之后，我就开始想：什么样的问题，才是'只有他能回答'的问题？今天我们这部分讲的，正是找到这个问题的方法。\"");
AddP("【练习指引】在你的故事草稿后面，写一句过渡语，把故事的情绪和课程内容用逻辑线连起来。");

AddH1("7.4 设计阶段六件事");
AddP("以上五个习惯是讲述层面的。在这之前，还有六件事值得在设计阶段就检查好——如果这些问题没有发现，上台了也改不了。");

var t7_2 = CreateTable(new[] { "事项", "检查标准" });
AddRow(t7_2, new[] { "三句话测试", "骨架清晰再补细节，三句话说不清楚先梳理主线" });
AddRow(t7_2, new[] { "故事和知识点的逻辑方向", "落点句和知识点核心原则是否在说同一件事" });
AddRow(t7_2, new[] { "避免\"我最厉害\"型故事", "困境+发现比成功更能代入，\"我也曾经不知道\"比\"我很厉害\"更有效" });
AddRow(t7_2, new[] { "真实人物的脱敏处理", "当事人如果在场，不会感到被暴露或被评判" });
AddRow(t7_2, new[] { "给故事留一点\"空白\"", "不要把每件事都说得明明白白，留余地让听众参与" });
AddRow(t7_2, new[] { "故事需要定期更新", "同一个故事讲十次，第十次讲师自己已经没有情感反应了" });
FinishTable(t7_2);

AddH1("7.5 三维度定制化");
AddP("同一个故事，有时候在一个班反应热烈，在另一个班听众无动于衷。原因通常不是故事本身有问题，而是\"相关性距离\"——学员感觉这个故事是在说\"我这种人\"还是\"另一类人的事\"。");

AddH2("维度一：行业与职能相关性");
AddP("调整故事中人物的职位描述、工作场景、行业背景——不改变核心情节，只调整背景设定。");
AddP("【示例】\"没有说清验收标准\"的故事：技术团队用开发经理和程序员，销售团队用销售经理和大客户项目负责人。");

AddH2("维度二：年资与经验层次");
AddP("改变故事主角的经验程度，让困境的复杂度和学员匹配。");
AddP("【示例】\"给下属做绩效反馈\"的故事：新晋管理者用三个月的新手，中层管理者用遇到新挑战的老手。");

AddH2("维度三：当下关切与痛点焦点");
AddP("根据学员当前最关心的议题，调整故事里着重描述的\"代价\"或\"收获\"。");
AddP("【示例】对面临团队流失压力的管理者，重点描述员工离职前的情绪变化；对关注效率的技术管理者，重点描述返工和时间损耗。");

AddH1("7.6 练习H：为两种学员背景调整你的故事");
AddP("取练习F里完成的故事草稿，想象两种不同的学员背景，说明在哪个维度做什么调整。");

var t7_3 = CreateTable(new[] { "假设背景", "调整维度", "具体调整方向" });
AddRow(t7_3, new[] { "全部是基层员工，工作年限3年以内", "年资/经验层次", "让故事主角也是类似资历，面对的困境更贴近新人实际遇到的情况" });
AddRow(t7_3, new[] { "全部是中高层管理者，有8年以上工作经验", "当下关切/痛点焦点", "故事的代价描述更侧重管理挑战和团队效能，而非个人技能" });
FinishTable(t7_3);

AddP("思考：你调整的是故事内容本身，还是故事的侧重点和角度？");

AddH1("7.7 上台前三问质检清单");
AddP("每次讲这个故事之前，用这三个问题做最终检验：");

var t7_4 = CreateTable(new[] { "问题", "如果\"不确定\"怎么办" });
AddRow(t7_4, new[] { "这个故事，今天这群学员会觉得\"跟我有关\"吗？", "检查行业/职能相关性和年资/经验层次" });
AddRow(t7_4, new[] { "这个故事里发生的事，他们会觉得\"有可能发生在我身上\"吗？", "检查故事的真实感——是否过于戏剧化" });
AddRow(t7_4, new[] { "故事讲完，他们会有\"我想要那个结果\"或\"我不想要那个代价\"的感受吗？", "检查意义落点是否足够具体，结局是否足够真实" });
FinishTable(t7_4);

AddH1("7.8 故事库建设");
AddP("不要等到备课时才找故事。故事库需要持续积累——建立一个简单的记录方式，用最简单的三句话记录：");
AddBullet("场景句：发生了什么（一句话，说清人物+情境+一个关键细节）");
AddBullet("张力句：哪里不对劲，或者哪里发生了转变（一句话）");
AddBullet("用途句：这个素材可能和哪类知识点有关联（一句话）");
AddP("故事库不需要完美。粗糙的素材记录，远比精美的空白文档更有价值。");

AddH1("7.9 时间分配建议");
var t7_5 = CreateTable(new[] { "环节", "建议时间", "备注" });
AddRow(t7_5, new[] { "两种讲法对比体验", "8分钟", "阅读 + 讨论，确保学员感受到差异" });
AddRow(t7_5, new[] { "五个交付习惯讲解", "10分钟", "每个习惯约2分钟，配合学员练习" });
AddRow(t7_5, new[] { "设计阶段六件事", "5分钟", "快速过，重点在引起重视" });
AddRow(t7_5, new[] { "三维度定制化", "8分钟", "配合练习H" });
AddRow(t7_5, new[] { "练习H：定制化适配", "10分钟", "核心产出时间" });
FinishTable(t7_5);

AddH1("7.10 常见问题与应对");
AddH2("Q1：学员说\"我不是表演型的人，停顿这些我做不到\"");
AddP("应对：停顿不是为了表演，是为了信息落地。告诉学员：这不是演技要求，是让听众能跟上的技术需要。");

AddH2("Q2：学员故事很长，讲了5分钟还停不下来");
AddP("应对：教学故事通常1-3分钟。引导学员做三句话测试——骨架清楚后，再决定哪些细节要加回来。");

AddH2("Q3：学员说\"我讲不出那种感觉\"");
AddP("应对：先不要追求\"感觉\"，先追求\"结构完整\"。感觉是熟练之后自然出来的，不是模仿出来的。");
AddBreak();

// ==================== CHAPTER 8: ASSESSMENT ====================
AddChapterTitle("第八章：评估与产出");

AddH1("8.1 过程性评估");
AddP("每章练习后，不做统一打分，由讲师或学员小组用以下标准做快速反馈：");

var t8_1 = CreateTable(new[] { "检查项", "标准" });
AddRow(t8_1, new[] { "故事有没有完整的基础四步结构", "有 / 部分有 / 缺" });
AddRow(t8_1, new[] { "落点句是否清晰", "很清晰 / 模糊 / 缺失" });
AddRow(t8_1, new[] { "故事与知识点的逻辑关联是否顺畅", "顺畅 / 需要解释 / 不通" });
FinishTable(t8_1);

AddH1("8.2 终结性学习产出");
AddP("课程结束时，每位学员应能提交（或口头展示）一份\"故事植入方案\"，包含：");

AddNum(1, "选定的课程模块名称与核心知识点");
AddNum(2, "标注的1-2个故事点位及其功能定位");
AddNum(3, "至少1个完整故事草稿（基础四步结构）");
AddNum(4, "说明这个故事的放置位置和衔接方式");
AddNum(5, "说明针对目标学员的定制考虑");

AddH1("8.3 评分维度与权重");
var t8_2 = CreateTable(new[] { "维度", "说明", "权重" });
AddRow(t8_2, new[] { "结构完整性", "故事是否包含基础四步，有无明显断层", "30%" });
AddRow(t8_2, new[] { "落点清晰度", "故事与知识点的关联是否不需要额外解释就能理解", "30%" });
AddRow(t8_2, new[] { "位置合理性", "放置位置与故事的功能是否匹配", "20%" });
AddRow(t8_2, new[] { "学员适配性", "是否考虑了目标学员的背景和痛点", "20%" });
FinishTable(t8_2);
AddBreak();

// ==================== APPENDIX ====================
AddChapterTitle("附录：工具卡与练习参考");

AddH1("附录一：工具卡速查");

AddH2("工具卡一：基础四步结构速查");
var tA1 = CreateTable(new[] { "步骤", "名称", "作用", "最简做法", "如果缺失会怎样" });
AddRow(tA1, new[] { "第一步", "时空锚定", "给大脑一个\"进场\"的起点", "说清时间/地点/人物中至少两个", "听众悬空，画面形不成" });
AddRow(tA1, new[] { "第二步", "张力触发", "让听众产生\"然后呢\"的需求", "引入\"但是\"/\"然后突然\"/\"没想到\"", "故事变成陈述，听众没有理由继续" });
AddRow(tA1, new[] { "第三步", "行动转化", "提供可迁移的行为模式", "具体描述做了什么，以及之后发生了什么", "学员只看见了问题，没看见方向" });
AddRow(tA1, new[] { "第四步", "意义落点", "连接故事和知识点", "用一句话说清\"这说明了什么\"", "故事是孤立事件，和今天的内容没有关系" });
FinishTable(tA1);

AddH2("扩展两步");
var tA1b = CreateTable(new[] { "步骤", "名称", "加在哪里", "核心做法" });
AddRow(tA1b, new[] { "第五步", "感官细节", "第一步或第二步中", "一个可以被看见的具体细节，不是形容词的堆叠" });
AddRow(tA1b, new[] { "第六步", "情绪内心", "第二步或第三步中", "第一人称内心独白，让听众可以代入" });
FinishTable(tA1b);

AddH2("工具卡二：五个故事点位信号");
var tA2 = CreateTable(new[] { "信号", "课程里的表现", "推荐故事类型", "故事的任务" });
AddRow(tA2, new[] { "概念过于抽象", "全是定义和原则，没有可以想象的场景", "类比隐喻型、案例型", "把概念转化为可以想象的具体场景" });
AddRow(tA2, new[] { "错误高发区", "学员容易犯但感受不到代价", "反例型", "让代价变得真实可感" });
AddRow(tA2, new[] { "动机薄弱区", "认知上接受，但行动上没有驱动力", "正例型、未来投射型", "让\"做到之后\"的状态变得具体" });
AddRow(tA2, new[] { "章节转折点", "两个主题之间需要过渡", "过渡型（短故事）", "作为两个话题之间的情境桥" });
AddRow(tA2, new[] { "开场或收尾", "需要激活注意力或激活行动冲动", "悬念型（开场）、情感型（收尾）", "激活投入状态或留下情感印象" });
FinishTable(tA2);

AddH2("工具卡三：六种故事类型速查");
var tA3 = CreateTable(new[] { "类型", "特征", "最适合的位置", "注意点" });
AddRow(tA3, new[] { "亲历型", "讲师本人的真实经历", "任何需要建立信任感的节点", "避免\"我最厉害\"叙事——困境和发现比成功更有代入感" });
AddRow(tA3, new[] { "见闻型", "听说的或观察到的事", "亲历素材不够时补充", "要交代来源，不要把别人的故事包装成自己的" });
AddRow(tA3, new[] { "案例型", "工作场景中真实发生的事", "展示知识点的实际应用", "做好脱敏——当事人在场不感到被暴露" });
AddRow(tA3, new[] { "反例型", "失败或错误的场景", "错误高发区，打破学员盲点", "避免让任何人显得愚蠢——换了谁都可能犯" });
AddRow(tA3, new[] { "类比隐喻型", "用熟悉解释陌生", "抽象概念的具象化", "类比必须在学员的经验范围内" });
AddRow(tA3, new[] { "未来投射型", "描绘\"做到了会是什么样\"", "课程收尾或动机薄弱区", "必须足够具体——\"会变好\"没有效果" });
FinishTable(tA3);

AddH2("工具卡四：上台前三问质检清单");
AddP("第一问：这个故事，今天这群学员会觉得\"跟我有关\"吗？");
AddP("□ 是，继续 | □ 不确定 → 检查：行业/职能相关性是否匹配，年资/经验层次是否匹配");
AddP("");
AddP("第二问：这个故事里发生的事，他们会觉得\"有可能发生在我身上\"吗？");
AddP("□ 是，继续 | □ 不确定 → 检查：故事是否过于戏剧化或理想化，真实感是否足够");
AddP("");
AddP("第三问：故事讲完，他们会有\"我想要那个结果\"或\"我不想要那个代价\"的感受吗？");
AddP("□ 是，可以上台了 | □ 不确定 → 检查：意义落点是否足够具体，结局是否有真实代价感");

AddH2("工具卡五：五步倒推法速查");
var tA5 = CreateTable(new[] { "步骤", "核心问题", "产出内容" });
AddRow(tA5, new[] { "第一步", "这个知识点，学完之后学员要做出什么具体的、可观察的行为改变？", "行为目标描述（一句话，要具体到可观察）" });
AddRow(tA5, new[] { "第二步", "不做这件事，在什么具体情境下会付出代价？", "典型失败场景（1-3句话描述核心情节）" });
AddRow(tA5, new[] { "第三步", "正确地做了这件事，在什么情境下产生了什么明显的不同？", "典型成功场景（1-3句话描述核心情节）" });
AddRow(tA5, new[] { "第四步", "针对这群学员，用失败场景还是成功场景？为什么？", "选择 + 理由（一句话）" });
AddRow(tA5, new[] { "第五步", "把选定场景套入基础四步结构，写出故事草稿。", "完整故事草稿" });
FinishTable(tA5);

AddH2("选择失败场景还是成功场景的判断逻辑");
AddBullet("学员觉得\"我已经知道了\" → 失败场景（打破盲点）");
AddBullet("学员觉得\"没必要这样做\" → 失败场景（让代价真实）");
AddBullet("学员认可但没动力去做 → 成功场景（激活动力）");
AddBullet("学员完全不了解这件事 → 先失败，再成功");

AddH1("附录二：课程辅助材料清单");
var tA6 = CreateTable(new[] { "材料编号", "材料名称", "类型", "说明" });
AddRow(tA6, new[] { "M01", "学员共读教学文档", "主体教学内容", "分章节，完整内容" });
AddRow(tA6, new[] { "M02", "工作坊练习册（空白版）", "练习材料", "各章练习的记录页，含提示结构" });
AddRow(tA6, new[] { "M03", "工作坊练习册（参考示例版）", "练习材料", "含虚构学员案例，用于示范" });
AddRow(tA6, new[] { "M04", "故事点位速查卡", "工具卡片", "五种\"故事需求信号\"的判断提示，单页" });
AddRow(tA6, new[] { "M05", "四步故事结构卡", "工具卡片", "基础四步+扩展两步，含示例提示语，单页" });
AddRow(tA6, new[] { "M06", "上台前质检清单", "工具卡片", "三个定制化自问，可贴在备课笔记本上" });
FinishTable(tA6);

AddH1("附录三：常见问题FAQ");
AddH2("Q：故事会不会占用太多课程时间？");
AddP("A：教学故事通常1-3分钟。一天的工作坊里，穿插4-5个故事，总时长也不过10-15分钟。但带来的记忆效果，远超过同等时长的知识点陈述。");

AddH2("Q：没有讲故事天赋的人能学会吗？");
AddP("A：本课程不教\"天赋\"，教的是\"结构\"。四步结构是任何人都可以学会的工具。熟练之后，表达自然会流畅起来。");

AddH2("Q：故事讲冷场了怎么办？");
AddP("A：先检查故事的结构——是不是缺少张力触发？是不是落点不清晰？结构完整的故事，即使讲得不够生动，也不会冷场。不怕讲不精彩，怕讲没有骨架。");

AddH2("Q：同一个故事讲多了会不会失去效果？");
AddP("A：会。所以故事库需要持续更新。每次课后，记录学员反馈最好的那个故事，定期淘汰失去感染力的故事，补充新素材。");

AddH2("Q：如何在有限时间内完成所有练习？");
AddP("A：第四章（故事植入方案）是核心练习，不能压缩。其他章节的练习时间可以根据实际情况调整。如果时间紧张，可以用口头讨论代替书面练习。");

// ==================== FINALIZE DOCUMENT ====================
var finalSectPr = new SectionProperties(
    new PageSize { Width = 16838, Height = 11906, Orient = PageOrientationValues.Landscape },
    new PageMargin
    {
        Top = 720,
        Right = 720,
        Bottom = 720,
        Left = 720,
        Header = 400,
        Footer = 400,
        Gutter = 0
    },
    new PageNumberType { Start = 1, Format = NumberFormatValues.Decimal }
);

body.Append(finalSectPr);

// Save the document
doc.Save();
Console.WriteLine("Document saved successfully!");
Console.WriteLine("Output path: " + outputPath);