$outputPath = "D:\新课开发\工作手册\知识工作者深度工作保护\完整课程包\01-课程说明书\课程说明书-深度工作主权V1.0.docx"

$script = @'
using DocumentFormat.OpenXml;
using DocumentFormat.OpenXml.Packaging;
using DocumentFormat.OpenXml.Wordprocessing;

string outputPath = @"D:\新课开发\工作手册\知识工作者深度工作保护\完整课程包\01-课程说明书\课程说明书-深度工作主权V1.0.docx";

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
        new FontSize { Val = "24" },
        new FontSizeComplexScript { Val = "24" }
    )),
    new ParagraphPropertiesDefault(new ParagraphPropertiesBaseStyle(
        new SpacingBetweenLines { After = "160", Line = "276", LineRule = LineSpacingRuleValues.Auto }
    ))
));

styles.Append(new Style(new StyleName { Val = "Title" }, new BasedOn { Val = "Normal" },
    new StyleParagraphProperties(new Justification { Val = JustificationValues.Center }, new SpacingBetweenLines { After = "0", Line = "240", LineRule = LineSpacingRuleValues.Auto }),
    new StyleRunProperties(new RunFonts { Ascii = "Microsoft YaHei", EastAsia = "Microsoft YaHei", HighAnsi = "Microsoft YaHei" }, new Bold(), new FontSize { Val = "56" }, new FontSizeComplexScript { Val = "56" }, new Color { Val = "1F3864" })
) { Type = StyleValues.Paragraph, StyleId = "Title" });

styles.Append(new Style(new StyleName { Val = "Heading 1" }, new BasedOn { Val = "Normal" },
    new StyleParagraphProperties(new SpacingBetweenLines { Before = "480", After = "240" }, new KeepNext(), new OutlineLevel { Val = 0 }),
    new StyleRunProperties(new RunFonts { Ascii = "Microsoft YaHei", EastAsia = "Microsoft YaHei", HighAnsi = "Microsoft YaHei" }, new Bold(), new FontSize { Val = "36" }, new FontSizeComplexScript { Val = "36" }, new Color { Val = "1F3864" })
) { Type = StyleValues.Paragraph, StyleId = "Heading1" });

styles.Append(new Style(new StyleName { Val = "Heading 2" }, new BasedOn { Val = "Normal" },
    new StyleParagraphProperties(new SpacingBetweenLines { Before = "360", After = "120" }, new KeepNext(), new OutlineLevel { Val = 1 }),
    new StyleRunProperties(new RunFonts { Ascii = "Microsoft YaHei", EastAsia = "Microsoft YaHei", HighAnsi = "Microsoft YaHei" }, new Bold(), new FontSize { Val = "28" }, new FontSizeComplexScript { Val = "28" }, new Color { Val = "2E5496" })
) { Type = StyleValues.Paragraph, StyleId = "Heading2" });

styles.Append(new Style(new StyleName { Val = "ChapterTitle" }, new BasedOn { Val = "Normal" },
    new StyleParagraphProperties(new SpacingBetweenLines { Before = "480", After = "240" }, new KeepNext(), new OutlineLevel { Val = 0 }),
    new StyleRunProperties(new RunFonts { Ascii = "Microsoft YaHei", EastAsia = "Microsoft YaHei", HighAnsi = "Microsoft YaHei" }, new Bold(), new FontSize { Val = "40" }, new FontSizeComplexScript { Val = "40" }, new Color { Val = "C62828" })
) { Type = StyleValues.Paragraph, StyleId = "ChapterTitle" });

styles.Append(new Style(new StyleName { Val = "Quote" }, new BasedOn { Val = "Normal" },
    new StyleParagraphProperties(new Justification { Val = JustificationValues.Center }, new SpacingBetweenLines { Before = "240", After = "240" }, new ParagraphBorders(new LeftBorder { Val = BorderValues.Single, Size = 24, Color = "2E5496" }), new Indentation { Left = "720", Right = "720" }),
    new StyleRunProperties(new Italic(), new FontSize { Val = "22" }, new FontSizeComplexScript { Val = "22" }, new Color { Val = "424242" })
) { Type = StyleValues.Paragraph, StyleId = "Quote" });

styles.Append(new Style(new StyleName { Val = "Tip" }, new BasedOn { Val = "Normal" },
    new StyleParagraphProperties(new SpacingBetweenLines { Before = "120", After = "120" }, new Shading { Fill = "E8F5E9" }),
    new StyleRunProperties(new Bold(), new FontSize { Val = "22" }, new FontSizeComplexScript { Val = "22" })
) { Type = StyleValues.Paragraph, StyleId = "Tip" });

void AddTitle(string text) => body.Append(new Paragraph(new ParagraphProperties(new ParagraphStyleId { Val = "Title" }), new Run(new Text(text))));
void AddH1(string text) => body.Append(new Paragraph(new ParagraphProperties(new ParagraphStyleId { Val = "Heading1" }), new Run(new Text(text))));
void AddH2(string text) => body.Append(new Paragraph(new ParagraphProperties(new ParagraphStyleId { Val = "Heading2" }), new Run(new Text(text))));
void AddChapterTitle(string text) => body.Append(new Paragraph(new ParagraphProperties(new ParagraphStyleId { Val = "ChapterTitle" }), new Run(new Text(text))));
void AddP(string text) => body.Append(new Paragraph(new Run(new Text(text))));
void AddQuoteP(string text) => body.Append(new Paragraph(new ParagraphProperties(new ParagraphStyleId { Val = "Quote" }), new Run(new Text(text)))));
void AddTipP(string text) => body.Append(new Paragraph(new ParagraphProperties(new ParagraphStyleId { Val = "Tip" }), new Run(new Text(">>> " + text))));
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

AddSpace(); AddSpace(); AddSpace();
AddTitle("深度工作主权手册");
AddTitle("——课程说明书");
AddSpace();
AddP("课程名称：深度工作主权手册——知识工作者的注意力保护与恢复系统");
AddP("课程编号：深度工作-知识工作者-01");
AddSpace();
AddP("版本：V1.0");
AddP("编制日期：2026年7月");
AddP("作者：罗宏伟");
AddSpace(); AddSpace(); AddSpace();
AddP("适用对象：企业内训/认证班/公开课");
AddP("预设时长：2天（每天6小时，共12小时）");
AddP("学员规模：25-40人");
AddBreak();

AddH1("目录");
AddP("第一章  课程概述与定位 ................................. 1");
AddP("第二章  目标学员画像 ................................. 2");
AddP("第三章  核心公理与卖点 ............................... 3");
AddP("第四章  课程目标（知识/技能/态度）................... 4");
AddP("第五章  内容模块概览（16章结构）..................... 5");
AddP("第六章  教学方法论 ................................... 8");
AddP("第七章  课时安排 ..................................... 9");
AddP("第八章  预期成果 ..................................... 11");
AddBreak();

AddChapterTitle("第一章：课程概述与定位");
AddH1("课程背景");
AddP("在知识经济时代，深度工作能力已成为知识工作者的核心竞争力。然而，随着即时通讯工具的普及和协作强度的提升，知识工作者正面临前所未有的注意力危机。");
AddSpace();
AddP("大多数时间管理课程教授的是工具和技巧，但忽略了最根本的问题：注意力不是被\"管理\"走的，是被我们自己一次次\"允许\"拿走的。这一认知重构，是本课程的独特起点。");

AddH1("课程定位");
AddQuoteP("深度工作主权手册不是一门时间管理课，是一门关于注意力主权认知重建的课程。");
AddSpace();
AddP("本课程的核心定位：");
AddBullet("认知层：重建对\"打断\"的认知框架——从外部干扰到主动让渡");
AddBullet("实操层：掌握可即刻落地的时间保护和注意力管理工具");
AddBullet("协作层：学会在团队和组织中建立深度工作文化");
AddBullet("心态层：建立长期主义的职业身份认知");

AddH1("课程特色");
AddNum(1, "公理驱动：每章内容都围绕一个核心公理展开，拒绝碎片化知识点");
AddNum(2, "机制优先：不仅告诉学员\"怎么做\"，更揭示\"为什么这样做有效\"");
AddNum(3, "工具落地：提供可直接使用的工具模板，学完就能用");
AddNum(4, "真实案例：所有案例来自真实企业场景，拒绝虚构");
AddNum(5, "自我反思：每个章节都设计反思环节，促进学员自我觉察");
AddSpace();

AddChapterTitle("第二章：目标学员画像");
AddH1("核心学员群体");
AddP("本课程面向以下两类核心学员：");

AddH2("A类：知识工作者（个体贡献者）");
AddBullet("典型特征：从事复杂脑力工作，需要深度思考和创造性产出");
AddBullet("痛点描述：一天很忙但什么都没做完；频繁被打断后难以重新进入状态");
AddBullet("行为模式：消息秒回、随时在线、加班常态化");
AddBullet("认知盲区：认为问题是工具不够好，而不是注意力使用方式有问题");
AddSpace();

AddH2("B类：团队负责人（管理者）");
AddBullet("典型特征：带领知识型团队，需要设计团队工作机制");
AddBullet("痛点描述：团队会议多、消息多、产出却不明显；团队认知负荷失控不知从何入手");
AddBullet("行为模式：事必躬亲、随时响应、成为团队最大中断源");
AddBullet("认知盲区：把团队效率问题归咎于工具和流程，而非认知负荷设计");
AddSpace();

AddH1("学员画像详解");
var t2_1 = CreateTable(new[] { "维度", "A类：知识工作者", "B类：团队负责人" });
AddRow(t2_1, new[] { "典型岗位", "产品经理、分析师、研发人员、设计师、咨询顾问", "研发经理、项目总监、部门负责人、团队负责人" });
AddRow(t2_1, new[] { "日均深度工作时间", "不足2小时", "不足1.5小时" });
AddRow(t2_1, new[] { "日均被打断次数", "15-30次", "20-40次（含团队成员中断）" });
AddRow(t2_1, new[] { "对课程的期待", "学会保护自己的时间，获得更多产出", "学会设计团队机制，提升整体认知效率" });
AddRow(t2_1, new[] { "最大认知障碍", "\"我必须随时在线才能证明自己的价值\"", "\"团队需要我随时响应，否则会出问题\"" });
FinishTable(t2_1);
AddSpace();

AddH1("学员入学前测");
AddP("建议在课程开始前进行入学前测，了解学员的以下情况：");
AddBullet("当前每日深度工作时间（小时）");
AddBullet("每日被中断的频率和主要来源");
AddBullet("对\"忙碌\"和\"深度工作\"的认知态度");
AddBullet("已经尝试过的注意力管理方法及效果");
AddSpace();

AddChapterTitle("第三章：核心公理与卖点");
AddH1("核心公理");
AddQuoteP("时间管理不是这个时代的问题，注意力归属权才是。你的专注力从来不是被\"管理\"走的，是被你自己一次次\"允许\"拿走的。");
AddSpace();
AddP("这一公理的四大检验维度：");
AddBullet("刺痛性：直接挑战\"我是被打断的受害者\"这个常见认知");
AddBullet("可演绎性：从公理可推演出8个具体论点，环环相扣");
AddBullet("专属性：只对知识工作者有效（流水线工人不适用）");
AddBullet("精准性：不是方法论建议，是一个关于责任归属的判断");
AddSpace();

AddH1("课程八大核心卖点");
AddH2("卖点一：认知重构——从\"被打断\"到\"主动让渡\"");
AddP("不是教你怎么抵抗打断，而是让你看清打断背后你自己扮演的角色");
AddSpace();
AddH2("卖点二：忙碌上瘾机制——揭示\"被需要感\"的心理成本");
AddP("为什么你一边抱怨太忙，一边拒绝能真正减少打断的安排");
AddSpace();
AddH2("卖点三：退出成本设计——让边界真正有效的秘诀");
AddP("为什么没有代价的边界等于没有边界，以及如何设计有效的退出成本");
AddSpace();
AddH2("卖点四：可见性管理——让深度工作产出被看见");
AddP("空出来的日历格子看起来像懒惰，除非你让别人看见里面发生了什么");
AddSpace();
AddH2("卖点五：重启税量化——多任务切换的真实代价");
AddP("你以为自己在多任务处理，其实是在反复缴纳重启税");
AddSpace();
AddH2("卖点六：环境设计——从意志力依赖到系统设计");
AddP("靠自制力守住的边界，迟早会在你最累的那天失守");
AddSpace();
AddH2("卖点七：团队契约——从个人边界到集体信任");
AddP("你一个人守住边界没有用，除非大家都知道规则一样");
AddSpace();
AddH2("卖点八：恢复即投资——把认知资源主动存回去");
AddP("恢复不是躺平，是把掏空的认知资源主动存回去的主动过程");
AddSpace();

AddChapterTitle("第四章：课程目标（知识/技能/态度）");
AddH1("知识目标");
AddP("学员在课程结束后能够：");
AddNum(1, "解释\"注意力主动让渡\"这一核心公理的含义及其对个人工作的启示");
AddNum(2, "描述忙碌上瘾的心理机制，理解\"被需要感\"如何影响时间分配决策");
AddNum(3, "列举时间盒设计失败的三个主要原因，并解释退出成本的重要性");
AddNum(4, "说明中断日志的记录价值，理解注意力被谁、以什么理由、按什么频率定价");
AddNum(5, "阐述会议审计的核心逻辑，区分\"低效会议\"与\"未授权会议\"");
AddNum(6, "解释认知切换成本（重启税）的形成机制及其对多任务工作者的影响");
AddNum(7, "区分主动恢复与被动恢复，理解不同类型疲惫对应的恢复方式");
AddNum(8, "说明团队深度工作契约的必要性及设计原则");
AddSpace();

AddH1("技能目标");
AddP("学员在课程结束后能够：");
AddNum(1, "设计并执行一个带有退出成本的时间盒计划，确保时间盒不被自己打破");
AddNum(2, "制作一份符合团队需求的深度工作计划表，让边界声明真正被看见");
AddNum(3, "使用中断日志工具连续记录5个工作日，并基于数据提出针对性改善方案");
AddNum(4, "运用会议审计框架评估团队会议效率，提出具体的会议精简方案");
AddNum(5, "为不同类型的深度工作设计相应的环境隔离方案");
AddNum(6, "设计一个适合个人情况的恢复练习库，并将其嵌入日常工作节奏");
AddNum(7, "主持一次团队深度工作契约讨论会议，并产出可执行的团队约定");
AddNum(8, "向上管理边界，在教会领导如何定价自己时间的同时维护良好的工作关系");
AddSpace();

AddH1("态度目标");
AddP("学员在课程结束后能够：");
AddNum(1, "承认自己过去在注意力让渡中扮演的主动角色，放弃\"我是受害者\"的认知");
AddNum(2, "正视\"忙碌\"作为社交货币的成瘾性，愿意为深度工作放弃部分\"被需要感\"");
AddNum(3, "接受\"恢复是下一次深度工作的入场券\"这一认知，将恢复置于优先级更前端");
AddNum(4, "理解\"长期主义者最先放弃的是随时可用这个人设\"，愿意承受短期口碑压力");
AddNum(5, "认同团队深度工作文化需要有人先做示范，愿意成为那个先说出口的人");
AddNum(6, "建立对注意力主权不可让渡的信念，持续践行课程中的方法和工具");
AddSpace();

AddChapterTitle("第五章：内容模块概览（16章结构）");
AddH1("PART 1：认知层至实操层（第1-10章）");
var t5_1 = CreateTable(new[] { "章序", "章标题", "引言金句", "核心内容", "类型" });
AddRow(t5_1, new[] { "第1章", "打断从来不是意外，是一场你参与签署的交易", "每一次随手点开的提示，都是一次主权的转让", "公理展开：注意力主动让渡的机制、即时满足偏好", "公理展开" });
AddRow(t5_1, new[] { "第2章", "忙碌是一种可以上瘾的社交货币", "你不是没时间深度工作，你是舍不得放弃被需要感", "忙碌成瘾的心理机制、间歇性强化原理", "原创新增" });
AddRow(t5_1, new[] { "第3章", "时间盒失败，是因为没有退出成本", "一个没有代价的边界，等于没有边界", "退出成本设计原理、紧急判断的焦虑驱动", "原创新增" });
AddRow(t5_1, new[] { "第4章", "深度工作计划表是写给别人看的边界声明", "你为自己保护的时间，最终是靠别人尊重才存在的", "公开边界的组织行为学原理", "原创新增" });
AddRow(t5_1, new[] { "第5章", "中断日志记录的是你的注意力被谁定价了", "每一条中断记录，都是一次隐藏的议价过程", "中断日志工具设计、双向定价机制", "原创新增" });
AddRow(t5_1, new[] { "第6章", "大多数会议从未被授权存在过", "会议室的门槛太低，是因为没人为召开会议付过代价", "会议成本不对称机制、会议审计框架", "原创新增" });
AddRow(t5_1, new[] { "第7章", "你以为在多任务处理，其实在反复缴纳重启税", "切换不是免费的，你只是没看到账单", "注意力残留机制、重启成本量化", "迁移改写" });
AddRow(t5_1, new[] { "第8章", "专注力不是意志力游戏，是环境设计游戏", "靠自制力守住的边界，迟早会在你最累那天失守", "意志力资源有限论、环境设计三层面", "原创新增" });
AddRow(t5_1, new[] { "第9章", "恢复不是躺平，是把掏空的认知资源存回去", "休息如果没有设计，就只是把疲惫带到明天", "主动vs被动恢复、分层恢复练习库", "原创新增" });
AddRow(t5_1, new[] { "第10章", "团队契约保护的是团队的共同信任", "你一个人守住边界没有用，除非大家都知道规则一样", "团队契约vs个人边界、契约制定与维护", "原创新增" });
FinishTable(t5_1);
AddSpace();

AddH1("PART 2：协作层至心态层（第11-16章）");
var t5_2 = CreateTable(new[] { "章序", "章标题", "引言金句", "核心内容", "类型" });
AddRow(t5_2, new[] { "第11章", "向上管理边界是教会领导定价你的时间", "边界不用解释，只需要反复出现", "预期重校机制、具体边界设定方法", "原创新增" });
AddRow(t5_2, new[] { "第12章", "护住的时间没有产出证据会被第一个收回", "空出来的日历格子看起来像懒惰", "产出可见性设计、里程碑标注", "原创新增" });
AddRow(t5_2, new[] { "第13章", "管理者的认知负荷来自没被承认的重启成本", "你不是决策太多，是决策之间的缝隙从没被算进工作量", "管理者视角的认知负荷管理", "公理展开" });
AddRow(t5_2, new[] { "第14章", "团队深度工作文化从一次公开的拒绝开始", "没有人会先做那件让自己显得不合群的事", "群体行为先例效应、文化转变启动机制", "原创新增" });
AddRow(t5_2, new[] { "第15章", "恢复练习是下一次深度工作的入场券", "你不是靠意志力撑过一天，是靠恢复才能撑到专注", "恢复因果颠倒、透支隐性成本", "原创新增" });
AddRow(t5_2, new[] { "第16章", "长期主义者最先放弃随时可用这个人设", "你越想成为永远在线的人，能做的事越少", "响应速度vs判断质量、护城河构建", "迁移改写" });
FinishTable(t5_2);
AddSpace();

AddH1("内容字数分配");
AddP("总计：约46,900字（在4万至5.5万字区间内）");
AddBullet("写在前面：1,500字");
AddBullet("PART 1（10章）：26,000字");
AddBullet("PART 1 Q&A：2,200字");
AddBullet("PART 2（6章）：14,600字");
AddBullet("PART 2 Q&A：2,000字");
AddBullet("写给同行结语：600字");
AddSpace();

AddChapterTitle("第六章：教学方法论");
AddH1("核心教学原则");
AddH2("原则一：问题驱动，非知识点驱动");
AddP("每个模块以一个真实失败案例开场，工具在解决问题的过程中自然涌现。");
AddSpace();
AddH2("原则二：先震撼后解释");
AddP("开场先呈现反直觉的案例或数据，然后再解释背后逻辑。认知冲突是学习的最佳起点。");
AddSpace();
AddH2("原则三：练习是骨架");
AddP("每个知识点后都有配套练习，三级难度递进：识别、应用、创造。课堂练习时间不低于总时长的40%。");
AddSpace();
AddH2("原则四：工具可直接带走");
AddP("每个工具都是完整的、可直接使用的版本，不留半成品。学员学完即可在工作中落地。");
AddSpace();

AddH1("主要教学方法");
AddH2("案例分析法");
AddP("所有案例均来自真实企业场景，每个案例都包含：背景、决策过程、结果、反思。");
AddSpace();
AddH2("工具演练法");
AddP("每个工具有完整的操作演示和练习环节。学员在课堂上演练，讲师现场指导。");
AddSpace();
AddH2("自我反思法");
AddP("每个章节设置反思环节，引导学员对照自己的实际情况进行思考。");
AddSpace();
AddH2("小组讨论法");
AddP("复杂话题（如团队契约设计、向上管理边界）采用小组讨论形式，让不同背景的学员互相启发。");
AddSpace();

AddChapterTitle("第七章：课时安排");
AddH1("总体时间规划");
AddP("课程总时长：2天，每天6小时，共计12小时");
AddBullet("第一天上午：课程导入+第1-4章（3小时）");
AddBullet("第一天下午：第5-8章+练习（3小时）");
AddBullet("第二天上午：第9-12章+练习（3小时）");
AddBullet("第二天下午：第13-16章+综合练习+行动承诺（3小时）");
AddSpace();

AddH1("详细课时分配");
var t7_1 = CreateTable(new[] { "时段", "内容", "时长", "活动形式" });
AddRow(t7_1, new[] { "Day 1 上午", "课程导入+公理建立", "30分钟", "讲授+互动" });
AddRow(t7_1, new[] { "Day 1 上午", "第1章：打断从来不是意外", "30分钟", "讲授+案例" });
AddRow(t7_1, new[] { "Day 1 上午", "第2章：忙碌上瘾机制", "30分钟", "讲授+自我反思" });
AddRow(t7_1, new[] { "Day 1 上午", "第3章：时间盒与退出成本", "45分钟", "讲授+工具演练" });
AddRow(t7_1, new[] { "Day 1 上午", "第4章：深度工作计划表", "30分钟", "讲授+练习" });
AddRow(t7_1, new[] { "Day 1 上午", "上午复盘+答疑", "15分钟", "讨论" });
AddRow(t7_1, new[] { "Day 1 下午", "第5章：中断日志", "45分钟", "讲授+工具演练" });
AddRow(t7_1, new[] { "Day 1 下午", "第6章：会议审计", "45分钟", "讲授+小组讨论" });
AddRow(t7_1, new[] { "Day 1 下午", "第7章：重启税", "30分钟", "讲授+案例分析" });
AddRow(t7_1, new[] { "Day 1 下午", "第8章：环境设计", "45分钟", "讲授+练习" });
AddRow(t7_1, new[] { "Day 1 下午", "第一天复盘+工具整理", "15分钟", "反思" });
AddRow(t7_1, new[] { "Day 2 上午", "第9章：恢复机制", "45分钟", "讲授+练习" });
AddRow(t7_1, new[] { "Day 2 上午", "第10章：团队契约", "45分钟", "讲授+小组讨论" });
AddRow(t7_1, new[] { "Day 2 上午", "第11章：向上管理边界", "45分钟", "讲授+角色扮演" });
AddRow(t7_1, new[] { "Day 2 上午", "第12章：产出可见性", "30分钟", "讲授+练习" });
AddRow(t7_1, new[] { "Day 2 下午", "第13章：管理者认知负荷", "30分钟", "讲授+讨论" });
AddRow(t7_1, new[] { "Day 2 下午", "第14章：团队文化建立", "45分钟", "讲授+小组练习" });
AddRow(t7_1, new[] { "Day 2 下午", "第15章：恢复即投资", "30分钟", "讲授+反思" });
AddRow(t7_1, new[] { "Day 2 下午", "第16章：长期主义者心态", "30分钟", "讲授+讨论" });
AddRow(t7_1, new[] { "Day 2 下午", "综合演练+行动承诺", "45分钟", "练习+承诺" });
FinishTable(t7_1);
AddSpace();

AddH1("茶歇与休息安排");
AddP("每天安排两次茶歇：上午10:30-10:45（15分钟），下午15:00-15:15（15分钟）");
AddP("午餐时间：12:00-13:30（1.5小时）");
AddSpace();

AddChapterTitle("第八章：预期成果");
AddH1("学员层面的预期成果");
AddH2("短期成果（课程结束时）");
AddNum(1, "每位学员完成一份个人注意力审计报告（中断日志分析）");
AddNum(2, "每位学员制定一份个人深度工作计划，包含时间盒设计和环境改造方案");
AddNum(3, "每位学员主持或参与一次团队深度工作契约讨论，明确至少3项团队约定");
AddNum(4, "每位学员建立个人的恢复练习库，选择至少3种适合的恢复方式");
AddNum(5, "每位学员制定一份21天行动承诺，承诺在课程结束后落实一项具体改变");
AddSpace();

AddH2("中期成果（课程后30天）");
AddNum(1, "学员每日深度工作时间平均提升50%以上");
AddNum(2, "学员周均被打断次数下降30%以上");
AddNum(3, "学员团队开始运行至少一项团队级深度工作保护机制");
AddNum(4, "学员恢复练习的执行率达到70%以上");
AddSpace();

AddH2("长期成果（课程后90天）");
AddNum(1, "学员建立稳定的深度工作习惯，日均深度工作时间达到3小时以上");
AddNum(2, "学员所带团队的会议数量下降20%以上");
AddNum(3, "学员形成\"注意力主权不可让渡\"的长期信念");
AddNum(4, "学员成为组织内深度工作文化的推动者和示范者");
AddSpace();

AddH1("组织层面的预期成果");
AddNum(1, "团队整体认知负荷可视化，识别出主要的注意力消耗黑洞");
AddNum(2, "建立团队级深度工作保护机制，降低无效会议和无计划中断");
AddNum(3, "形成团队内部的深度工作文化，减少对\"随时在线\"的隐性奖励");
AddNum(4, "提升团队整体产出质量，降低因认知切换导致的返工和决策失误");
AddSpace();

AddH1("课程效果评估方式");
AddBullet("课前测：了解学员基线状态（深度工作时间、被打断频率、认知状态）");
AddBullet("课中评：讲师观察学员练习表现，即时反馈");
AddBullet("课后测：课程结束后30天、90天跟踪评估");
AddBullet("组织评估：团队层面的会议数量、产出质量、成员满意度变化");
AddSpace();
AddSpace();
AddP("——课程说明书完——");
Console.WriteLine("Document created: " + outputPath);
'@

$script | Out-File -FilePath "D:\CC\temp\deepwork_doc\Program.cs" -Encoding UTF8
