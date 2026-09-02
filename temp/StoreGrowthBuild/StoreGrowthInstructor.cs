using DocumentFormat.OpenXml;
using DocumentFormat.OpenXml.Packaging;
using DocumentFormat.OpenXml.Wordprocessing;

string outputDir = @"D:\新课开发\营销\8. 门店增长管理：到店、转化、连带与复购一体化\讲师手册";
System.IO.Directory.CreateDirectory(outputDir);
string outputPath = System.IO.Path.Combine(outputDir, "讲师手册_门店增长管理.docx");

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

// Heading3
styles.Append(new Style(new StyleName { Val = "Heading 3" }, new BasedOn { Val = "Normal" },
    new StyleParagraphProperties(new SpacingBetweenLines { Before = "240", After = "120" }, new KeepNext(), new OutlineLevel { Val = 2 }),
    new StyleRunProperties(new RunFonts { Ascii = "Microsoft YaHei", EastAsia = "Microsoft YaHei", HighAnsi = "Microsoft YaHei" }, new Bold(), new FontSize { Val = "24" }, new FontSizeComplexScript { Val = "24" }, new Color { Val = "404040" })
) { Type = StyleValues.Paragraph, StyleId = "Heading3" });

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

// Script style (for instructor scripts)
styles.Append(new Style(new StyleName { Val = "Script" }, new BasedOn { Val = "Normal" },
    new StyleParagraphProperties(new SpacingBetweenLines { Before = "120", After = "120" }, new Shading { Fill = "F5F5F5" }, new ParagraphBorders(new LeftBorder { Val = BorderValues.Single, Size = 16, Color = "9E9E9E" }), new Indentation { Left = "360" }),
    new StyleRunProperties(new FontSize { Val = "21" }, new FontSizeComplexScript { Val = "21" }, new Color { Val = "333333" })
) { Type = StyleValues.Paragraph, StyleId = "Script" });

// TableHeader
styles.Append(new Style(new StyleName { Val = "TableHeader" }, new BasedOn { Val = "Normal" },
    new StyleParagraphProperties(new Justification { Val = JustificationValues.Center }, new Shading { Fill = "1F3864" }),
    new StyleRunProperties(new Bold(), new Color { Val = "FFFFFF" })
) { Type = StyleValues.Paragraph, StyleId = "TableHeader" });


// Helper functions
void AddTitle(string text) => body.Append(new Paragraph(new ParagraphProperties(new ParagraphStyleId { Val = "Title" }), new Run(new Text(text))));
void AddH1(string text) => body.Append(new Paragraph(new ParagraphProperties(new ParagraphStyleId { Val = "Heading1" }), new Run(new Text(text))));
void AddH2(string text) => body.Append(new Paragraph(new ParagraphProperties(new ParagraphStyleId { Val = "Heading2" }), new Run(new Text(text))));
void AddH3(string text) => body.Append(new Paragraph(new ParagraphProperties(new ParagraphStyleId { Val = "Heading3" }), new Run(new Text(text))));
void AddChapterTitle(string text) => body.Append(new Paragraph(new ParagraphProperties(new ParagraphStyleId { Val = "ChapterTitle" }), new Run(new Text(text))));
void AddP(string text) => body.Append(new Paragraph(new Run(new Text(text))));
void AddQuoteP(string text) => body.Append(new Paragraph(new ParagraphProperties(new ParagraphStyleId { Val = "Quote" }), new Run(new Text(text))));
void AddTipP(string text) => body.Append(new Paragraph(new ParagraphProperties(new ParagraphStyleId { Val = "Tip" }), new Run(new Text(">>> " + text))));
void AddWarningP(string text) => body.Append(new Paragraph(new ParagraphProperties(new ParagraphStyleId { Val = "Warning" }), new Run(new Text("⚠️ " + text))));
void AddTimeP(string text) => body.Append(new Paragraph(new ParagraphProperties(new ParagraphStyleId { Val = "TimeNote" }), new Run(new Text("⏱ " + text))));
void AddBullet(string text) => body.Append(new Paragraph(new ParagraphProperties(new SpacingBetweenLines { Before = "0", After = "80" }, new Indentation { Left = "360", Hanging = "360" }), new Run(new Text("• " + text))));
void AddNum(int num, string text) => body.Append(new Paragraph(new ParagraphProperties(new SpacingBetweenLines { Before = "0", After = "80" }, new Indentation { Left = "720", Hanging = "360" }), new Run(new Text(num + ". " + text))));
void AddSpace() => body.Append(new Paragraph(new Run(new Text(""))));
void AddBreak() => body.Append(new Paragraph(new Run(new Break { Type = BreakValues.Page })));
void AddScript(string text) => body.Append(new Paragraph(new ParagraphProperties(new ParagraphStyleId { Val = "Script" }), new Run(new Text(text))));

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

// ============================================================
// COVER PAGE
// ============================================================
AddSpace(); AddSpace(); AddSpace();
AddTitle("门店增长管理");
AddSpace();
AddP("——讲师手册");
AddSpace(); AddSpace(); AddSpace();
AddP("课程名称：门店增长管理：到店、转化、连带与复购一体化");
AddP("副标题：讲师手册");
AddSpace();
AddP("版本：V1.0");
AddSpace();
AddP("适用对象：零售门店店长、督导、连锁门店管理者");
AddP("预设时长：标准版6小时（1天）");
AddSpace(); AddSpace();
AddP("编制日期：2026年7月");
AddBreak();


// ============================================================
// TABLE OF CONTENTS
// ============================================================
AddH1("目录");
AddP("第一章  课程概述与设计理念 ..................................... 1");
AddP("第二章  讲师使用指南 ........................................... 3");
AddP("第三章  完整授课流程（6小时时间轴）.............................. 7");
AddP("第四章  各模块授课要点与话术 .................................. 13");
AddP("第五章  讲师话术库 ........................................... 22");
AddP("第六章  评估工具 ............................................ 30");
AddP("第七章  资源配置 ............................................ 38");
AddP("第八章  更新维护与常见误区 .................................... 41");
AddBreak();


// ============================================================
// CHAPTER 1: 课程概述与设计理念
// ============================================================
AddChapterTitle("第一章：课程概述与设计理念");

AddH1("1.1 课程背景");
AddP("门店经营的核心挑战在于增长，而增长不是单一指标的提升，而是到店、转化、连带、复购四个环节的协同优化。大多数门店管理者的困境在于：客流少了只关注引流，转化低了只盯着促销，连带不够只强调话术，复购下降了才想起会员体系——头痛医头，脚痛医脚，系统性增长沦为一句空话。");
AddP("本课程从\"全链路\"视角出发，帮助店长和督导建立\"到店→转化→连带→复购\"一体化增长思维，掌握每个环节的关键动作和协同机制，实现从单点突破到系统增长的跨越。");

AddH1("1.2 课程设计理念");
AddH2("1.2.1 三个核心原则");
AddBullet("实战导向：每个知识点都对应门店可执行的动作，拒绝\"听起来有道理，做起来无从下手\"的理论堆砌");
AddBullet("全链路思维：四个环节不是独立模块，而是相互关联的闭环系统，单独优化某一环节的效果有限");
AddBullet("数据驱动：用数据发现问题、衡量效果、验证假设，让增长决策有据可依");

AddH2("1.2.2 学员画像与痛点");
AddP("本课程的目标学员是具备一定门店管理经验的店长、督导和连锁门店管理者。他们的典型痛点包括：");
AddBullet("知道要做增长，但不知道从哪里切入，四面出击却收效甚微");
AddBullet("过于关注短期业绩指标，忽视用户全生命周期价值的培养");
AddBullet("有促销经验，但缺乏系统性思维，促销活动与日常运营脱节");
AddBullet("有会员数据但不会用，数据分析能力不足");

AddH2("1.2.3 课程设计逻辑");
AddP("课程遵循\"认知重塑→方法掌握→工具应用→实战验证\"的逻辑：");
AddNum(1, "认知重塑：建立全链路增长思维，理解四环节的内在关联");
AddNum(2, "方法掌握：学习每个环节的核心策略、关键指标和操作要点");
AddNum(3, "工具应用：掌握数据分析工具、跟进表格、话术模板等实用资源");
AddNum(4, "实战验证：通过真实案例研讨和场景练习，将方法落地到学员的门店场景");

AddH1("1.3 课程收益");
AddH2("对学员的收益");
AddBullet("建立全链路增长思维，看清业绩增长的完整路径");
AddBullet("掌握到店、转化、连带、复购四个环节的核心方法");
AddBullet("带走可直接使用的工具模板（数据跟进表、话术卡、检查清单）");
AddBullet("能够识别本门店的增长瓶颈，针对性制定改进计划");

AddH2("对组织的收益");
AddBullet("统一管理语言，让店长与督导使用同一套增长分析框架");
AddBullet("建立门店自检机制，减少总部督导的巡查成本");
AddBullet("沉淀门店最佳实践，形成可复制的增长操作手册");

AddBreak();


// ============================================================
// CHAPTER 2: 讲师使用指南
// ============================================================
AddChapterTitle("第二章：讲师使用指南");

AddH1("2.1 讲师角色定位");
AddP("本课程的讲师定位是\"增长顾问\"而非\"知识灌输者\"。讲师的核心价值在于：");
AddBullet("引导学员从\"经验驱动\"转向\"数据驱动\"的思维方式");
AddBullet("帮助学员将通用方法与本门店实际场景结合");
AddBullet("激发学员之间的经验共享，让学员成为彼此的学习资源");
AddP("讲师不应该是\"正确答案的输出者\"，而应该是\"好问题的提出者\"和\"讨论质量的推动者\"。");

AddH1("2.2 授课注意事项");
AddH2("2.2.1 避免常见误区");
AddTipP("误区一：把课程上成\"成功学分享\"——讲太多励志故事，缺乏可落地的方法");
AddTipP("误区二：过于理论化——满嘴术语概念，学员听完不知道怎么做");
AddTipP("误区三：缺乏互动——从头讲到尾，学员参与度低，知识吸收率差");
AddTipP("误区四：案例脱离实际——用的都是知名品牌案例，学员觉得\"我们店不一样\"");
AddTipP("误区五：忽视个体差异——默认所有学员基础一致，节奏太快或太慢");

AddH2("2.2.2 讲师关键行为");
AddBullet("开场前30秒抓住注意力：用一个问题、一个数据或一个场景让学员意识到课程价值");
AddBullet("每个知识点后留白：给学员2-3分钟消化或讨论，不要连续讲解超过15分钟");
AddBullet("随时观察学员状态：通过眼神、表情、肢体语言判断学员是否跟上");
AddBullet("案例本地化：准备多个行业的门店案例，根据学员背景灵活切换");

AddH1("2.3 离线授课准备");
AddH2("2.3.1 课前一周");
AddBullet("确认学员名单，了解学员的门店业态、规模、管理经验等信息");
AddBullet("根据学员背景调整案例的行业适配性（服装/餐饮/化妆品/电器等）");
AddBullet("准备分组名单，考虑新老店长搭配、门店类型搭配");
AddBullet("发送课前预习材料（可选）：增长思维导图、门店数据自检表");

AddH2("2.3.2 课前三天");
AddBullet("确认场地布置：U型桌/分组桌/剧院式，学员人数与桌椅配置匹配");
AddBullet("确认投影设备、音响、白板/白纸、彩笔等物资");
AddBullet("打印必要的纸质材料（工作手册、练习卡、评估表）");
AddBullet("建立课程群或确认沟通群，用于课中/课后信息传递");

AddH2("2.3.3 课前当天");
AddBullet("提前1小时到场，确认设备正常运行");
AddBullet("摆放桌椅、分发材料包（学员手册、签字笔、便签纸）");
AddBullet("在白板上写下课程名称和\"增长仪表盘\"框架图（营造学习氛围）");
AddBullet("准备签到表，安排学员就座（建议按门店类型或区域交叉分组）");

AddH1("2.4 讲师个人准备");
AddBullet("熟悉课程全部内容，标记出自己最擅长和最不擅长的部分");
AddBullet("准备2-3个\"压箱底\"的亲身经历案例，用于提升说服力");
AddBullet("准备一个\"救命案例\"：当学员说\"我们店情况不一样\"时用的案例");
AddBullet("设定课程目标：不是\"讲完所有内容\"，而是\"让学员带走至少三个可行动项\"");

AddBreak();


// ============================================================
// CHAPTER 3: 完整授课流程
// ============================================================
AddChapterTitle("第三章：完整授课流程（6小时时间轴）");

AddH1("3.1 整体时间分配");
AddP("以下为6小时（360分钟）标准版课程的时间轴，建议严格控制时间，确保课程节奏流畅：");

// 时间分配总表
var timelineTable = CreateTable(new[] { "阶段", "模块", "时长", "累计时间" });
AddRow(timelineTable, new[] { "开场", "签到 + 课程导入", "15分钟", "0:00 - 0:15" });
AddRow(timelineTable, new[] { "第一模块", "到店增长：客流从哪里来", "60分钟", "0:15 - 1:15" });
AddRow(timelineTable, new[] { "第二模块", "转化提升：进店顾客为何不买", "60分钟", "1:15 - 2:15" });
AddRow(timelineTable, new[] { "午休", "午餐 + 休息", "60分钟", "2:15 - 3:15" });
AddRow(timelineTable, new[] { "第三模块", "连带经营：从一件到多件", "50分钟", "3:15 - 4:05" });
AddRow(timelineTable, new[] { "第四模块", "复购管理：让一次顾客变终身", "50分钟", "4:05 - 4:55" });
AddRow(timelineTable, new[] { "总结", "一体化增长闭环 + 行动计划", "55分钟", "4:55 - 5:50" });
AddRow(timelineTable, new[] { "收尾", "Q&A + 前后测 + 课程评价", "10分钟", "5:50 - 6:00" });
FinishTable(timelineTable);

AddH1("3.2 各阶段详细流程");

AddH2("阶段一：开场（0:00 - 0:15）");
AddTimeP("目标：建立课程基调，激发学习兴趣，完成学员破冰");

AddH3("0:00 - 0:05  签到与暖场");
AddBullet("学员签到，分发学员手册");
AddBullet("开场前播放轻音乐或门店增长相关的短视频（选做）");

AddH3("0:05 - 0:12  课程导入");
AddScript("讲师话术：\"在正式开始之前，我想先问大家一个问题——如果你现在是这家门店的店长，这个月业绩下滑了15%，你会先从哪里找原因？\"");
AddBullet("等待3-4位学员快速回答（不评判，只记录在白板上）");
AddBullet("引出核心问题：\"大家看，这是我们常见的应对方式——哪里出问题救哪里。但今天这堂课，我想邀请大家换一种思路——不是救火，而是防火。\"");

AddH3("0:12 - 0:15  课程目标说明");
AddScript("讲师话术：\"今天的课程，我们的目标是三个——第一，建立全链路增长的思维框架；第二，掌握到店、转化、连带、复购四个环节的核心方法；第三，带走至少三个可以立刻在本门店落地执行的动作。达成这三个目标，需要大家的参与和投入。\"");

AddH2("阶段二：第一模块 到店增长（0:15 - 1:15）");
AddTimeP("目标：理解客流增长的底层逻辑，掌握线上线下引流的核心策略");

AddH3("0:15 - 0:25  知识点讲解：客流来源结构");
AddBullet("讲解自然流量、渠道流量、内容流量三大来源");
AddBullet("用\"水池图\"比喻：入水口（获客）和出水口（流失），帮助学员建立流量思维");

AddH3("0:25 - 0:40  案例研讨：某服装品牌如何实现客流增长30%");
AddBullet("呈现该品牌的背景数据、采取的策略、实施的关键动作");
AddBullet("分组讨论：\"他们做的哪些动作适合你的门店？哪些不适合？\"");

AddH3("0:40 - 0:55  方法讲授：线上获客的三大渠道");
AddBullet("本地生活平台（美团、大众点评）的优化要点");
AddBullet("私域流量（微信群、企业微信、小程序）的运营策略");
AddBullet("内容营销（小红书、抖音本地号）的低成本获客方法");

AddH3("0:55 - 1:05  工具练习：客流来源分析表");
AddBullet("学员使用《门店客流来源分析表》对本门店进行快速分析");
AddBullet("讲师巡场，挑选2-3位学员分享（每位1-2分钟）");

AddH3("1:05 - 1:15  要点回顾 + 过渡");
AddBullet("快速回顾本模块的三个核心要点");
AddScript("讲师话术：\"好，刚才我们聊的是如何让顾客走进你的店。但走进来了就够了吗？不一定——进店不购买，是很多门店正在经历的'堰塞湖'。接下来我们看第二个环节：转化。\"");

AddH2("阶段三：第二模块 转化提升（1:15 - 2:15）");
AddTimeP("目标：识别转化率低下的原因，掌握提升进店转化率的核心方法");

AddH3("1:15 - 1:25  场景导入：进店率 vs 转化率");
AddBullet("用数据说明：同等客流下，转化率提升1%，业绩可提升多少");
AddBullet("引出核心问题：\"顾客为什么不买？\"——列出5个常见原因");

AddH3("1:25 - 1:40  知识点讲解：转化率漏斗与关键节点");
AddBullet("进店率 → 接触率 → 体验率 → 成交率 → 复购率的漏斗模型");
AddBullet("每个节点的核心提升策略");

AddH3("1:40 - 1:55  案例研讨：某化妆品店的转化提升实战");
AddBullet("呈现该店铺的现状、问题诊断、解决方案和实施效果");
AddBullet("小组讨论：如果你是这家店的店长，你还会采取什么措施？");

AddH3("1:55 - 2:05  工具练习：《门店转化率自检表》");
AddBullet("学员填写自检表，识别本店转化率的关键瓶颈");
AddBullet("两人一组互评，提出一条改进建议");

AddH3("2:05 - 2:15  要点回顾 + 过渡");
AddBullet("快速回顾本模块的核心框架");
AddScript("讲师话术：\"顾客买了第一件，然后呢？很多门店业绩做不上去，不是因为顾客不买，而是因为只买了'一件'。下一节，我们聊聊如何从一件到多件——连带销售。\"");

AddH2("阶段四：午休（2:15 - 3:15）");
AddTimeP("提示：午休时间60分钟，建议在14:15准时开始下午环节");

AddH2("阶段五：第三模块 连带经营（3:15 - 4:05）");
AddTimeP("目标：理解连带的本质是需求匹配，掌握提升连带率的方法");

AddH3("3:15 - 3:25  观念重塑：连带不是\"加推销\"");
AddBullet("常见误区：连带 = 强行推销 = 骚扰顾客");
AddBullet("正确认知：连带 = 帮顾客发现更多需求 = 提升顾客满意度");

AddH3("3:25 - 3:40  知识点讲解：连带的三种类型");
AddBullet("同类连带：买上衣推荐裤子/鞋子");
AddBullet("场景连带：买衬衫推荐领带/袖扣（正式场合场景）");
AddBullet("礼品连带：买给自己推荐给家人/朋友");

AddH3("3:40 - 3:55  工具与方法：连带话术模板");
AddBullet("\"三问法\"：问场景、问用途、问对象");
AddBullet("\"搭配推荐法\"：让顾客看到完整解决方案");
AddBullet("角色扮演练习：两人一组，模拟连带推荐场景");

AddH3("3:55 - 4:05  要点回顾 + 过渡");
AddBullet("快速回顾连带的三种类型和核心话术");
AddScript("讲师话术：\"连带做得好，客单价翻倍不是梦。但问题是，顾客买完之后，还会再来吗？这就涉及到最后一个环节，也是最难但最有价值的环节——复购。\"");

AddH2("阶段六：第四模块 复购管理（4:05 - 4:55）");
AddTimeP("目标：理解复购的本质是顾客关系经营，掌握会员运营和复购激励的核心方法");

AddH3("4:05 - 4:15  数据洞察：复购率的隐藏价值");
AddBullet("用\"老客 vs 新客\"的成本对比数据说明复购的重要性");
AddBullet("复购频率、复购周期、复购贡献度三维度分析");

AddH3("4:15 - 4:30  知识点讲解：复购管理的四大策略");
AddBullet("会员体系：分层权益设计、积分体系、等级升级机制");
AddBullet("触达机制：定向优惠、节日关怀、生日特权");
AddBullet("内容运营：新品预告、使用教程、会员专属内容");
AddBullet("流失预警：识别高流失风险顾客、挽回话术");

AddH3("4:30 - 4:45  案例研讨：某母婴店的会员精细化运营");
AddBullet("呈现该店铺的会员分层策略、触达频率、效果数据");
AddBullet("小组讨论：\"他们的方法中，哪些适合你的门店？\"");

AddH3("4:45 - 4:55  要点回顾 + 过渡");
AddBullet("快速回顾复购管理的四大策略");
AddScript("讲师话术：\"好的，到这里，四个环节我们都讲完了。但请大家记住一句话——这四个环节不是四个独立的'招式'，而是一套连贯的'剑法'。只有四招协同，才能发挥最大威力。接下来，我们把这套剑法串起来看。\"");

AddH2("阶段七：总结 一体化增长闭环（4:55 - 5:50）");
AddTimeP("目标：帮助学员建立全链路思维，制定个人门店增长计划");

AddH3("4:55 - 5:10  框架整合：四环节协同增长模型");
AddBullet("用\"增长仪表盘\"框架将四个环节整合在一起");
AddBullet("讲解四环节的相互影响关系：一个环节的提升如何带动其他环节");

AddH3("5:10 - 5:30  行动计划制定");
AddBullet("学员使用《门店增长行动计划表》");
AddBullet("每人制定本门店的三个优先改进项（到店/转化/连带/复购中选）");
AddBullet("两人一组互相分享，讲师挑选1-2组进行全班分享");

AddH3("5:30 - 5:45  课程金句与核心收获");
AddScript("讲师话术：\"最后，送大家三句话——第一，增长不是单点突破，是四环节协同；第二，数据不会骗人，但需要你主动去看；第三，最好的增长策略，是适合你门店的那一个，而不是听起来最厉害的。\"");

AddH3("5:45 - 5:50  课程收尾");
AddScript("讲师话术：\"感谢大家今天的参与和投入。课程到此结束，但增长行动才刚刚开始。如果大家课后有任何问题或实践中的困惑，欢迎在课程群里与我交流。祝各位门店业绩长虹！\"");

AddH2("阶段八：收尾 Q&A + 评估（5:50 - 6:00）");
AddBullet("解答学员的现场问题（控制在5分钟以内）");
AddBullet("分发前后测问卷，收集学员评价");
AddBullet("引导学员扫描课程群二维码（如果尚未加入）");
AddBullet("归还物料，清理场地");

AddBreak();


// ============================================================
// CHAPTER 4: 各模块授课要点与话术
// ============================================================
AddChapterTitle("第四章：各模块授课要点与话术");

AddH1("4.1 第一模块 到店增长 授课要点");

AddH2("核心教学目标");
AddBullet("帮助学员建立\"流量思维\"，理解客流不是自然发生的，而是需要主动获取和运营的");
AddBullet("让学员掌握线上线下引流的核心渠道和基本操作要点");
AddBullet("能够识别本门店的主要客流来源，并找到增长机会点");

AddH2("知识点清单");
AddBullet("自然流量：选址决定基础客流，门面和招牌的注意力抢夺");
AddBullet("渠道流量：本地生活平台优化、私域引流、异业合作");
AddBullet("内容流量：小红书/抖音本地号、用户口碑传播");
AddBullet("客流漏斗：获客成本、转化率、留存率的综合评估");

AddH2("常见学员问题应对");
AddTipP("Q：门店位置不好，客流天生就少怎么办？");
AddTipP("A：位置是先天因素，但引流是后天努力。位置不好的门店更需要在'主动获客'上下功夫，比如私域运营、内容营销、异业合作等。分享一个案例：一家社区店通过企业微信运营，实现月均新增熟客200+。\"");

AddTipP("Q：我们店在小城市，不适合做抖音/小红书？");
AddTipP("A：工具没有城乡之分，只有使用方式的差异。小城市的本地号竞争更少，更容易脱颖而出。关键是内容要本地化——拍门店日常、拍顾客故事、拍产品使用场景。\"");

AddH1("4.2 第二模块 转化提升 授课要点");

AddH2("核心教学目标");
AddBullet("帮助学员理解\"顾客为什么不买\"的深层原因，从表面现象深入到本质原因");
AddBullet("让学员掌握转化率提升的系统方法，而非单点技巧");
AddBullet("能够使用《门店转化率自检表》识别本店的转化瓶颈");

AddH2("知识点清单");
AddBullet("转化漏斗五节点：进店率 → 接触率 → 体验率 → 成交率 → 复购率");
AddBullet("影响转化率的四大因素：产品匹配、价格感知、服务体验、信任建立");
AddBullet("视觉营销：门脸、陈列、动线的注意力管理");
AddBullet("话术设计：开放式提问挖掘需求，封闭式提问确认意向");

AddH2("案例选择建议");
AddP("优先选择与学员业态相近的案例。以下是推荐的案例适配表：");
var caseTable = CreateTable(new[] { "学员业态", "推荐案例方向" });
AddRow(caseTable, new[] { "服装/鞋帽", "买手店/集合店的场景化陈列提升转化" });
AddRow(caseTable, new[] { "化妆品/护肤", "BA专业化培训提升成交率" });
AddRow(caseTable, new[] { "餐饮/小吃", "菜单设计和点餐流程优化提升客单价" });
AddRow(caseTable, new[] { "电器/3C", "体验区设计提升高端产品转化率" });
AddRow(caseTable, new[] { "母婴/儿童", "游乐区+零售区的转化设计" });
FinishTable(caseTable);

AddH1("4.3 第三模块 连带经营 授课要点");

AddH2("核心教学目标");
AddBullet("帮助学员建立\"连带是正向价值而非推销负担\"的认知");
AddBullet("让学员掌握三种连带类型的应用场景和话术模板");
AddBullet("能够通过角色扮演练习，将连带话术内化为自然表达");

AddH2("知识点清单");
AddBullet("连带本质：满足顾客的关联需求，而非强行推销");
AddBullet("同类连带：款式搭配、功能互补、场景延伸");
AddBullet("场景连带：节日送礼、居家自用、送礼探病");
AddBullet("话术框架：\"三问法\"——问场景、问用途、问对象");
AddBullet("连带指标：连带率 = 购买件数/成交单数，目标是>1.5");

AddH2("练习组织要点");
AddTipP("角色扮演时，一位学员扮演'热情推销但让顾客反感'的BA，另一位扮演顾客——目的是让学员体验'什么是错误的连带'。");
AddTipP("随后换角色，扮演'专业顾问式推荐'的BA，让顾客感受到被理解和帮助。");
AddTipP("练习后让两组学员分享感受差异，讲师点评：\"连带的本质是帮顾客做决策，不是替顾客做决策。\"");

AddH1("4.4 第四模块 复购管理 授课要点");

AddH2("核心教学目标");
AddBullet("帮助学员理解复购的本质是\"顾客关系经营\"，而非\"优惠促销\"");
AddBullet("让学员掌握会员分层运营的基本方法和复购激励设计");
AddBullet("能够识别高流失风险顾客并采取针对性的挽回措施");

AddH2("知识点清单");
AddBullet("复购价值：老客获客成本是新客的1/5，客单价是1.3倍");
AddBullet("会员分层：引流客、活跃客、沉睡客、流失客的分层策略");
AddBullet("触达设计：触达频率、触达内容、触达时机三要素");
AddBullet("流失预警：购买频次下降、客单价下降、互动减少的识别");
AddBullet("挽回话术：以关心代替推销，以专属代替通用");

AddH2("注意事项");
AddWarningP("不要把复购管理上成\"会员卡销售课\"——会员卡的目的是建立长期关系，而不是一次性充值");
AddWarningP("避免过度营销——过高的触达频率会导致顾客反感，反而加速流失");

AddBreak();


// ============================================================
// CHAPTER 5: 讲师话术库
// ============================================================
AddChapterTitle("第五章：讲师话术库");

AddH1("5.1 开场话术");

AddH2("5.1.1 课程导入话术（开场前30秒）");
AddScript("\"在正式开始之前，我想先问大家一个问题——如果你现在是这家门店的店长，这个月业绩下滑了15%，你会先从哪里找原因？是去街上发传单拉客？还是想办法做促销活动？还是——先冷静下来，看看数据，分析一下问题到底出在哪里？\"");
AddP("设计意图：用一个问题制造认知冲突，让学员意识到\"习惯性反应\"与\"专业分析\"的区别");

AddH2("5.1.2 课程价值说明话术");
AddScript("\"今天的课程，我们的目标不是给大家打鸡血，也不是教大家几招'万能促销术'。我们的目标是——让你拥有一套分析门店增长问题的思维框架，和一套可以立即落地执行的增长方法。这套方法曾经在某某品牌/某某门店验证过，帮助他们在3个月内实现了业绩提升。\"");
AddP("设计意图：明确课程价值主张，建立学员的预期，避免\"期待错位\"");

AddH2("5.1.3 参与承诺话术");
AddScript("\"在开始之前，我想邀请大家做一个承诺——今天课程中，如果你听到任何让你觉得'有道理但我的店不一样'的想法，请先举手告诉我'我的店情况是……'，然后我们一起来讨论怎么调整。因为脱离门店实际场景的方法，都是纸上谈兵。\"");
AddP("设计意图：预先管理\"我的店不一样\"的抵触心理，邀请学员成为课程的共建者");

AddH1("5.2 过渡话术");

AddH2("模块一 → 模块二过渡");
AddScript("\"好，刚才我们聊的是如何让顾客'走进'你的店。大家有没有注意到一个问题——顾客走进来了，就代表他会买吗？不一定。我见过很多门店，门庭若市，但收银台冷冷清清。进店率解决的是'人从哪儿来'，但转化率解决的是'人为什么不买'。接下来，我们进入第二个环节。\"");
AddP("设计意图：用反差场景引发学员思考，建立\"到店≠成交\"的认知");

AddH2("模块二 → 模块三过渡");
AddScript("\"刚才我们解决了'顾客为什么不买'的问题。现在我想问大家一个新问题——顾客买了，买了多少？一件？还是一件带了一件？如果只是买了一件就走了，那前面我们讲的转化率再高，业绩天花板还是在那儿。所以，接下来我们聊聊怎么让顾客从'买一件'变成'买一套'——连带销售。\"");
AddP("设计意图：用业绩天花板的概念引出连带的重要性，自然过渡");

AddH2("模块三 → 模块四过渡");
AddScript("\"连带做好了，客单价翻倍，业绩提升明显。但是——还有一个更重要的问题：顾客买完这一次之后，还会再来吗？如果不来，你每一次都要重新获客，重新做转化，重新做连带，获客成本居高不下。所以，接下来我们聊最后一个环节，也是最有价值的环节——复购管理。\"");
AddP("设计意图：用成本思维引出复购的重要性，为四环节整合做铺垫");

AddH2("模块四 → 总结过渡");
AddScript("\"好的，到这里，四个环节我们都讲完了。但请大家记住一句话——这四个环节不是四个独立的'招式'，而是一套连贯的'剑法'。单独练某一招，也能打出一点效果，但只有四招协同，才能发挥最大威力。接下来，我们把这套剑法串起来，看看怎么在你的门店里使出来。\"");
AddP("设计意图：建立\"全链路协同\"的系统思维，避免学员将四环节割裂学习");

AddH1("5.3 案例导入话术");

AddH2("案例呈现话术（通用模板）");
AddScript("\"接下来我想给大家分享一个案例。这家店/品牌面临的情况是这样的——【简述背景】。当时他们的做法是——【简述策略】。三个月后，他们的结果是——【呈现数据】。我想请大家思考三个问题：第一，他们做对了什么？第二，他们哪些做法可能不适合你的门店？第三，如果是你，你会怎么做？\"");
AddP("设计意图：明确案例学习的目标，避免\"听完热闹\"的情况");

AddH2("引导讨论话术");
AddScript("\"给大家5分钟时间，两人一组讨论一下——他们的做法中，哪些可以直接复制到你的门店？哪些需要调整？怎么调整？5分钟后，我请1-2组来分享。\"");
AddP("设计意图：明确讨论任务和控制时间，确保讨论质量");

AddH1("5.4 练习点评话术");

AddH2("练习前引导话术");
AddScript("\"接下来我们做一个练习。这个练习的目的是——【明确目的】。我会给大家【时间】分钟完成。完成之后，我会请几位同学来分享一下。分享的格式是——【明确格式，如：我的门店是……，我的发现是……，我的行动计划是……】。现在，开始。\"");
AddP("设计意图：让学员知道\"为什么练\"、\"练多久\"、\"怎么分享\"，减少无效练习");

AddH2("练习点评话术（正面示范）");
AddScript("\"刚才我听到了几个非常好的分享。比如某某店长的分享，他提到了——【复述亮点】。这个做法的聪明之处在于——【解释为什么好】。如果大家回去落地，建议先从这个开始，因为它——【说明可操作性】。\"");
AddP("设计意图：强化正面行为，让被表扬的学员有成就感，给其他学员可模仿的榜样");

AddH2("练习点评话术（问题指出）");
AddScript("\"刚才有些同学的分享提到——【引述问题表述】。我理解你的顾虑，你担心的是——【共情理解】。但我想补充一点——【提供新视角或纠正】。其实换个角度看——【给出替代方案】。大家觉得呢？\"");
AddP("设计意图：以引导代替直接否定，保护学员的面子和讨论积极性");

AddH1("5.5 课程收尾话术");

AddH2("核心金句收尾");
AddScript("\"最后，送大家三句话——\"");
AddP("第一，增长不是单点突破，是四环节协同；");
AddP("第二，数据不会骗人，但需要你主动去看；");
AddP("第三，最好的增长策略，是适合你门店的那一个，而不是听起来最厉害的。\"");
AddP("设计意图：用三句话概括课程核心，便于学员记忆和传播");

AddH2("行动号召话术");
AddScript("\"课程到这里就结束了。但我希望大家记住，课程结束才是增长的开始。我布置一个小作业——回去之后，用今天发的《门店增长行动计划表》，填写三个你打算优先改进的项目。不需要完美，先动起来。一个月后，如果你想和我聊聊实践中的困惑，课程群里找我。\"");
AddP("设计意图：将课程延伸至课后，建立持续学习的氛围");

AddH2("告别话术");
AddScript("\"感谢大家今天的参与和投入。我看到很多店长全程都非常认真，甚至有人在做笔记的时候还画了图——非常好，这说明你在思考。感谢大家，祝各位门店业绩长虹！\"");
AddP("设计意图：真诚感谢，正向反馈，让学员带着好心情离开");

AddBreak();


// ============================================================
// CHAPTER 6: 评估工具
// ============================================================
AddChapterTitle("第六章：评估工具");

AddH1("6.1 前后测题库");

AddH2("前测问卷（课前5分钟完成）");
AddP("目的：了解学员的基线水平，帮助讲师调整课程深度和案例选择");
AddSpace();

var preTestTable = CreateTable(new[] { "题号", "题目", "选项" });
AddRow(preTestTable, new[] { "1", "你的门店目前最困扰的增长问题是？（单选）", "A. 客流少，不知道怎么引流  B. 进店人多，但购买的人少  C. 顾客只买一件，连带率低  D. 顾客买完就不来了，复购差  E. 四个环节都有问题" });
AddRow(preTestTable, new[] { "2", "你门店的月均客流大概是什么量级？（单选）", "A. 500人以下  B. 500-2000人  C. 2000-5000人  D. 5000人以上" });
AddRow(preTestTable, new[] { "3", "你是否系统学习过门店增长相关的课程？（单选）", "A. 从未  B. 听过一些公开课  C. 系统学习过一门课程  D. 学习过多门相关课程" });
AddRow(preTestTable, new[] { "4", "你门店目前有在使用任何数据分析工具吗？（单选）", "A. 没有用过  B. 用Excel简单记录  C. 用门店系统自带的数据报表  D. 有专门的数据分析流程" });
AddRow(preTestTable, new[] { "5", "你预计今天课程后，你会做出几个具体的行动改变？（单选）", "A. 0个  B. 1个  C. 2-3个  D. 4个以上" });
FinishTable(preTestTable);

AddH2("后测问卷（课后5分钟完成）");
AddP("目的：评估课程效果，收集学员反馈，改进后续课程");
AddSpace();

var postTestTable = CreateTable(new[] { "题号", "题目", "选项" });
AddRow(postTestTable, new[] { "1", "今天课程后，你对门店增长的理解有什么变化？（单选）", "A. 没什么变化  B. 有了一些新认识  C. 建立了一套系统的框架  D. 认知有了质的提升" });
AddRow(postTestTable, new[] { "2", "今天课程中，哪个模块对你最有价值？（单选）", "A. 到店增长  B. 转化提升  C. 连带经营  D. 复购管理  E. 四环节整合" });
AddRow(postTestTable, new[] { "3", "你计划回去后优先改进哪个环节？（单选）", "A. 到店增长  B. 转化提升  C. 连带经营  D. 复购管理" });
AddRow(postTestTable, new[] { "4", "你对今天课程的总体满意度是？（单选）", "A. 不满意  B. 一般  C. 满意  D. 非常满意" });
AddRow(postTestTable, new[] { "5", "你愿意向同行推荐这门课程吗？（单选）", "A. 不愿意  B. 可能会  C. 愿意  D. 非常愿意" });
FinishTable(postTestTable);

AddH2("前后测对比分析");
AddP("前后测数据对比可反映：");
AddBullet("学员在课程前后的认知变化（尤其是题1的选项分布变化）");
AddBullet("学员的行动意愿变化（题5）");
AddBullet("课程内容与学员需求的匹配度（题2反映最受欢迎的模块）");

AddH1("6.2 行为观察量表");
AddP("讲师在课程进行过程中，通过观察学员的以下行为，评估学员的参与度和学习状态：");
AddSpace();

var observeTable = CreateTable(new[] { "观察维度", "优秀（3分）", "良好（2分）", "一般（1分）" });
AddRow(observeTable, new[] { "专注度", "全程专注听讲、记录笔记", "大部分时间专注，偶尔走神", "频繁走神或做与课程无关的事" });
AddRow(observeTable, new[] { "参与度", "主动回答问题、分享观点", "被点名时能回答，参与讨论", "沉默寡言，不参与讨论" });
AddRow(observeTable, new[] { "互动质量", "发言有观点、有案例支撑", "发言能结合门店实际", "发言较少或内容空洞" });
AddRow(observeTable, new[] { "练习投入", "练习认真完成，有深度思考", "按时完成练习", "敷衍完成或依赖他人" });
AddRow(observeTable, new[] { "状态变化", "课程后半段比前半段更投入", "状态基本平稳", "后半段明显疲劳或分心" });
FinishTable(observeTable);

AddH2("评分标准");
AddP("每维度3分，总分15分。评分结果可作为后续一对一辅导的参考依据。");

AddH1("6.3 讲师自评表");
AddP("课程结束后，讲师填写以下自评表，用于持续改进授课质量：");
AddSpace();

var selfEvalTable = CreateTable(new[] { "评估维度", "评估要点", "评分(1-5)" });
AddRow(selfEvalTable, new[] { "时间控制", "各模块时间是否按计划执行？哪些环节超时/提前？原因是什么？" });
AddRow(selfEvalTable, new[] { "学员参与", "学员讨论是否积极？角色扮演是否投入？分享是否有深度？" });
AddRow(selfEvalTable, new[] { "内容适配", "案例是否与学员背景匹配？学员是否有\"我的店不一样\"的抵触？" });
AddRow(selfEvalTable, new[] { "突发状况", "是否有设备故障/学员冲突/其他突发状况？处理方式是否妥当？" });
AddRow(selfEvalTable, new[] { "最大收获", "今天课程中，觉得最成功的环节是？" });
AddRow(selfEvalTable, new[] { "最大挑战", "今天课程中，觉得最需要改进的环节是？" });
FinishTable(selfEvalTable);

AddBreak();


// ============================================================
// CHAPTER 7: 资源配置
// ============================================================
AddChapterTitle("第七章：资源配置");

AddH1("7.1 课前准备清单");

AddH2("物料准备（建议提前3天确认）");
var prepTable = CreateTable(new[] { "物料名称", "数量", "负责人", "确认状态" });
AddRow(prepTable, new[] { "学员手册", "按学员人数", "助教", "□ 已确认" });
AddRow(prepTable, new[] { "签字笔", "每人1支", "助教", "□ 已确认" });
AddRow(prepTable, new[] { "便签纸（不同颜色）", "每组1包", "助教", "□ 已确认" });
AddRow(prepTable, new[] { "白板/大白纸", "2-3张", "场地方", "□ 已确认" });
AddRow(prepTable, new[] { "彩色马克笔", "4色×2套", "助教", "□ 已确认" });
AddRow(prepTable, new[] { "A4纸（草稿用）", "每人5张", "助教", "□ 已确认" });
AddRow(prepTable, new[] { "前后测问卷", "各按人数", "助教", "□ 已确认" });
AddRow(prepTable, new[] { "课程满意度调查表", "按人数", "助教", "□ 已确认" });
AddRow(prepTable, new[] { "签到表", "1张", "助教", "□ 已确认" });
AddRow(prepTable, new[] { "笔记本电脑", "1台", "讲师", "□ 已确认" });
AddRow(prepTable, new[] { "投影仪/转接头", "1套", "场地方", "□ 已确认" });
AddRow(prepTable, new[] { "音响/麦克风", "视人数定", "场地方", "□ 已确认" });
AddRow(prepTable, new[] { "翻页器", "1个", "讲师", "□ 已确认" });
FinishTable(prepTable);

AddH2("电子文件准备");
var fileTable = CreateTable(new[] { "文件名称", "格式", "用途" });
AddRow(fileTable, new[] { "课程PPT", ".pptx", "投影演示" });
AddRow(fileTable, new[] { "门店客流来源分析表", ".xlsx", "学员练习" });
AddRow(fileTable, new[] { "门店转化率自检表", ".xlsx", "学员练习" });
AddRow(fileTable, new[] { "门店增长行动计划表", ".xlsx", "学员制定计划" });
AddRow(fileTable, new[] { "前后测问卷", ".pdf", "现场打印" });
FinishTable(fileTable);

AddH1("7.2 场地要求");

AddH2("场地布置要求");
AddBullet("人数限制：建议15-40人，人数太少讨论不活跃，人数太多难以覆盖");
AddBullet("座位安排：U型桌或分组桌优先，避免剧院式（不利于互动）");
AddBullet("空间要求：每人至少1.5平米的活动空间，保证分组讨论时不会互相干扰");
AddBullet("光线要求：自然光+灯光结合，避免昏暗或强光直射");

AddH2("设备要求");
AddBullet("投影：分辨率1024×768以上，亮度3000流明以上");
AddBullet("音响：能覆盖全场的扩音设备，领夹麦优先（解放双手）");
AddBullet("白板/投影屏：至少有一个用于板书和脑图绘制");

AddH2("环境要求");
AddBullet("温度：控制在22-26摄氏度，过冷或过热都会影响学员注意力");
AddBullet("茶歇：课间10-15分钟休息，准备茶点和饮品");
AddBullet("手机管理：建议课程开始前请学员将手机调至静音或使用飞行模式");

AddH1("7.3 人员配置建议");
var staffTable = CreateTable(new[] { "角色", "人数", "职责" });
AddRow(staffTable, new[] { "主讲讲师", "1人", "负责课程讲授、案例引导、练习点评" });
AddRow(staffTable, new[] { "助教/督导", "1人", "负责物料准备、设备调试、课后跟进" });
AddRow(staffTable, new[] { "班主任/班主任助理", "1人", "负责学员签到、现场协调、突发状况处理" });
FinishTable(staffTable);

AddP("说明：如果是30人以下的课程，可以由主讲讲师兼任助教，班主任角色由组织方对接人承担。");

AddBreak();


// ============================================================
// CHAPTER 8: 更新维护
// ============================================================
AddChapterTitle("第八章：更新维护与常见误区");

AddH1("8.1 常见误区");
AddP("以下是讲师在授课过程中容易陷入的误区，请引以为戒：");

AddH2("认知层面误区");
AddWarningP("把课程上成\"分享会\"：全程讲自己的成功经验，缺乏方法论框架，学员听完觉得'有道理但学不来'");
AddWarningP("过度依赖成功案例：只讲大品牌/标杆案例，学员觉得'我们店太小/太偏远/太不一样'，产生距离感");
AddWarningP("忽视个体差异：用同一套内容面对不同业态、不同规模的学员，导致部分学员觉得太简单或太难");

AddH2("互动层面误区");
AddWarningP("互动流于形式：问了问题没人回答，就跳过继续讲——应该调整提问方式或给更多思考时间");
AddWarningP("讨论时间失控：给了讨论任务但没控制时间，导致后续内容被压缩");
AddWarningP("学员分享过度展开：某位学员分享时，其他学员开始刷手机——应该适时收拢，将长分享留到茶歇");

AddH2("节奏层面误区");
AddWarningP("前松后紧：前半段讲得慢，后半段赶进度，关键的\"复购管理\"和\"总结\"被压缩");
AddWarningP("练习时间不足：给学员练习时间太少，导致学员还没思考完就被迫进入下一环节");
AddWarningP("午休后开场难：下午开始时学员注意力涣散，应该用一个有吸引力的话题或互动游戏开场");

AddH1("8.2 讲师提示");

AddH2("关于案例使用");
AddTipP("每个模块至少准备2-3个不同行业的案例，避免只用单一行业");
AddTipP("案例数据要真实——如果用\"某品牌\"而非真实品牌，数据要合理但不要过于精确（避免被追问）");
AddTipP("案例呈现要简洁——先讲结果吸引注意力，再讲过程和分析，不要把所有细节一次讲完");

AddH2("关于学员互动");
AddTipP("当学员说\"我的店不一样\"时，不要否定，而是追问\"你的店是哪里不一样？\"——把问题转化为讨论素材");
AddTipP("对于沉默型学员，可以在练习后的分享环节用\"自愿+点名\"结合的方式");
AddTipP("对于过于活跃型学员（爱打断、爱长篇大论），可以用\"你的观点很棒，我们茶歇再深入聊\"礼貌收束");

AddH2("关于时间管理");
AddTipP("每个模块预留5分钟的\"弹性时间\"，用于处理突发提问或讨论延展");
AddTipP("如果某个环节超时，下一个环节要适当压缩——不要往后拖延");
AddTipP("下午开场前可以做一个5分钟的\"醒神活动\"——比如快速回顾上午内容的小测验");

AddH1("8.3 反馈收集");
AddP("课程结束后，请通过以下方式收集反馈，用于持续改进课程：");

AddH2("即时反馈（课后收集）");
AddBullet("课后满意度调查表（纸质或扫码填写）");
AddBullet("前后测问卷对比分析");
AddBullet("讲师自评表填写");

AddH2("延迟反馈（课后1-2周）");
AddBullet("跟进学员的实践情况：通过课程群询问\"行动计划\"的执行进展");
AddBullet("收集学员的实践案例：邀请学员分享成功经验或失败教训");
AddBullet("组织方反馈收集：与组织方HR/培训负责人沟通课程效果和后续需求");

AddH2("反馈整理与归档");
AddBullet("每次课程后更新《课程迭代记录》，记录本次课程的亮点、问题和建议");
AddBullet("每年至少进行一次课程内容的大更新，替换过时的案例和数据");
AddBullet("建立\"讲师社群\"，让不同场次的讲师分享授课经验和学员反馈");

AddH1("8.4 课程迭代记录表");
AddSpace();
var iterTable = CreateTable(new[] { "迭代日期", "迭代版本", "主要更新内容", "更新原因" });
AddRow(iterTable, new[] { "2026-07-13", "V1.0", "初始版本发布", "新开课程" });
FinishTable(iterTable);
AddSpace();
AddP("备注：本手册为初始版本（V1.0），请在每次课程结束后更新迭代记录。");

AddBreak();


// ============================================================
// APPENDIX
// ============================================================
AddChapterTitle("附录");

AddH1("附录一：工具清单");
AddP("以下工具在课程中会使用，请确保每位学员都能获取：");
AddBullet("《门店客流来源分析表》");
AddBullet("《门店转化率自检表》");
AddBullet("《连带话术卡》");
AddBullet("《会员分层运营模板》");
AddBullet("《门店增长行动计划表》");

AddH1("附录二：推荐阅读");
AddBullet("《零售的哲学》——7-Eleven创始人铃木敏文");
AddBullet("《从大处方到单场破亿：门店业绩提升实战笔记》——接地气的门店运营案例集");
AddBullet("《顾客为什么购买》——了解顾客进店后的行为逻辑");

AddH1("附录三：术语表");
var termTable = CreateTable(new[] { "术语", "定义" });
AddRow(termTable, new[] { "到店", "顾客实际进入门店的行为，是客流量的核心指标" });
AddRow(termTable, new[] { "转化率", "进店顾客中实际购买的比例，反映顾客购买决策效率" });
AddRow(termTable, new[] { "连带率", "成交单数中包含两件及以上商品的比例，反映客单价提升空间" });
AddRow(termTable, new[] { "复购率", "在一定周期内重复购买的顾客比例，反映顾客忠诚度" });
AddRow(termTable, new[] { "私域流量", "品牌自主拥有、可免费多次触达的用户群体（如微信群、企业微信）" });
AddRow(termTable, new[] { "连带销售", "引导顾客在单次购买中购买多于一件商品的销售策略" });
FinishTable(termTable);

AddSpace(); AddSpace();
AddP("—— 手册正文完 ——");
AddP("编制日期：2026年7月");
AddP("版本：V1.0");
AddP("如有更新，请以最新版本为准。");

mainPart.Document.Save();
Console.WriteLine("Instructor handbook generated successfully: " + outputPath);
