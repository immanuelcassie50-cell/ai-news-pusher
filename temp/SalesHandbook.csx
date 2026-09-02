// Sales Decision Chain Navigation - Student Handbook Generator
#r "nuget: DocumentFormat.OpenXml, 3.2.0"

using DocumentFormat.OpenXml;
using DocumentFormat.OpenXml.Packaging;
using DocumentFormat.OpenXml.Wordprocessing;
using System.Text;

string outputPath = @"D:\新课开发\工作手册\销售复杂决策链地图与导航\完整课程包\04-学员手册\学员手册-销售复杂决策链地图与导航.docx";

using var doc = WordprocessingDocument.Create(outputPath, WordprocessingDocumentType.Document);
var mainPart = doc.AddMainDocumentPart();
mainPart.Document = new Document(new Body());
Body body = mainPart.Document.Body;

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

styles.Append(new Style(new StyleName { Val = "Title" }, new BasedOn { Val = "Normal" },
    new StyleParagraphProperties(new Justification { Val = JustificationValues.Center }, new SpacingBetweenLines { After = "0" }),
    new StyleRunProperties(new RunFonts { Ascii = "Microsoft YaHei", EastAsia = "Microsoft YaHei", HighAnsi = "Microsoft YaHei" }, new Bold(), new FontSize { Val = "56" }, new FontSizeComplexScript { Val = "56" }, new Color { Val = "B71C1C" })
) { Type = StyleValues.Paragraph, StyleId = "Title" });

styles.Append(new Style(new StyleName { Val = "Heading 1" }, new BasedOn { Val = "Normal" },
    new StyleParagraphProperties(new SpacingBetweenLines { Before = "480", After = "240" }, new KeepNext(), new OutlineLevel { Val = 0 }),
    new StyleRunProperties(new RunFonts { Ascii = "Microsoft YaHei", EastAsia = "Microsoft YaHei", HighAnsi = "Microsoft YaHei" }, new Bold(), new FontSize { Val = "36" }, new FontSizeComplexScript { Val = "36" }, new Color { Val = "B71C1C" })
) { Type = StyleValues.Paragraph, StyleId = "Heading1" });

styles.Append(new Style(new StyleName { Val = "Heading 2" }, new BasedOn { Val = "Normal" },
    new StyleParagraphProperties(new SpacingBetweenLines { Before = "360", After = "120" }, new KeepNext(), new OutlineLevel { Val = 1 }),
    new StyleRunProperties(new RunFonts { Ascii = "Microsoft YaHei", EastAsia = "Microsoft YaHei", HighAnsi = "Microsoft YaHei" }, new Bold(), new FontSize { Val = "28" }, new FontSizeComplexScript { Val = "28" }, new Color { Val = "37474F" })
) { Type = StyleValues.Paragraph, StyleId = "Heading2" });

styles.Append(new Style(new StyleName { Val = "Heading 3" }, new BasedOn { Val = "Normal" },
    new StyleParagraphProperties(new SpacingBetweenLines { Before = "240", After = "120" }, new KeepNext(), new OutlineLevel { Val = 2 }),
    new StyleRunProperties(new RunFonts { Ascii = "Microsoft YaHei", EastAsia = "Microsoft YaHei", HighAnsi = "Microsoft YaHei" }, new Bold(), new FontSize { Val = "24" }, new FontSizeComplexScript { Val = "24" }, new Color { Val = "37474F" })
) { Type = StyleValues.Paragraph, StyleId = "Heading3" });

styles.Append(new Style(new StyleName { Val = "Quote" }, new BasedOn { Val = "Normal" },
    new StyleParagraphProperties(new Justification { Val = JustificationValues.Center }, new SpacingBetweenLines { Before = "240", After = "240" }, new ParagraphBorders(new LeftBorder { Val = BorderValues.Single, Size = 24, Color = "B71C1C" }), new Indentation { Left = "720", Right = "720" }),
    new StyleRunProperties(new Italic(), new FontSize { Val = "24" }, new FontSizeComplexScript { Val = "24" }, new Color { Val = "5D4037" })
) { Type = StyleValues.Paragraph, StyleId = "Quote" });

// Helper functions
void AddTitle(string text) => body.Append(new Paragraph(new ParagraphProperties(new ParagraphStyleId { Val = "Title" }), new Run(new Text(text))));
void AddH1(string text) => body.Append(new Paragraph(new ParagraphProperties(new ParagraphStyleId { Val = "Heading1" }), new Run(new Text(text))));
void AddH2(string text) => body.Append(new Paragraph(new ParagraphProperties(new ParagraphStyleId { Val = "Heading2" }), new Run(new Text(text))));
void AddH3(string text) => body.Append(new Paragraph(new ParagraphProperties(new ParagraphStyleId { Val = "Heading3" }), new Run(new Text(text))));
void AddP(string text) => body.Append(new Paragraph(new Run(new Text(text))));
void AddQuoteP(string text) => body.Append(new Paragraph(new ParagraphProperties(new ParagraphStyleId { Val = "Quote" }), new Run(new Text(text)))));
void AddSpace() => body.Append(new Paragraph(new Run(new Text(""))));
void AddBullet(string text) => body.Append(new Paragraph(new ParagraphProperties(new Indentation { Left = "360", Hanging = "360" }), new Run(new Text("• " + text))));
void AddNum(int num, string text) => body.Append(new Paragraph(new ParagraphProperties(new Indentation { Left = "720", Hanging = "360" }), new Run(new Text(num + ". " + text))));
void AddBreak() => body.Append(new Paragraph(new Run(new Break { Type = BreakValues.Page })));

Table CreateTable(string[] headers, string fill = "B71C1C") {
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

// ========== COVER ==========
AddSpace(); AddSpace(); AddSpace();
AddTitle("销售复杂决策链地图与导航");
AddSpace();
AddP("——学员手册");
AddSpace(); AddSpace(); AddSpace();
AddP("目标学员：项目型销售、复杂B2B销售从业者");
AddP("课程时长：2天（12小时）");
AddP("课程作者：罗宏伟");
AddBreak();

// ========== TABLE OF CONTENTS ==========
AddH1("目录");
AddSpace();
AddP("一、课程介绍");
AddP("    - 课程简介 · 核心公理 · 学习目标 · 课程结构");
AddP("");
AddP("二、PART 1 认知层·实操层·协作层");
AddP("    - 第一章至第十一章");
AddP("");
AddP("三、PART 2 心态层");
AddP("    - 第一章至第五章");
AddP("");
AddP("四、课程总结");
AddP("    - 核心收获 · 行动计划制定");
AddP("");
AddP("五、附录：实用工具");
AddP("    - 决策链地图模板 · 话术模板 · 复盘检查表 · 长期关系维护计划");
AddBreak();

// ========== SECTION 1: COURSE INTRODUCTION ==========
AddH1("一、课程介绍");

AddH2("1.1 课程简介");
AddP("本课程聚焦B2B销售中最核心也最容易被低估的问题：复杂决策链的识别与导航。");
AddP("当你跟进了几个月的项目，因为一个从未谋面的信息安全负责人的一句话就推翻重来；当你以为找到了关键决策人，却在最后一刻被另一个角色否决——这些"意外"不是运气问题，是决策链认知的缺口。");
AddP("本课程帮助你建立完整的决策链思维，掌握识别和应对不同否决权角色的方法，让你在复杂项目中少一些侥幸，多一些踏实。");

AddH2("1.2 核心公理");
AddQuoteP("复杂决策链里没有"决策人"，只有在不同阶段轮流掌握否决权的人。");
AddQuoteP("销售盯着"谁签字"找人，往往找到的是否决权已经过期的那个人。");

AddH2("1.3 学习目标");
AddP("完成本课程学习后，学员将能够：");
AddNum(1, "理解复杂决策链的核心运作机制——权力是分阶段轮换的否决权");
AddNum(2, "识别客户组织中真正握有否决权的角色（尤其是那些沉默的、不主动露面的）");
AddNum(3, "绘制完整的决策链地图，包括四层结构：谁买单、谁拍板、谁把关、谁使绊子");
AddNum(4, "掌握不同节点的差异化沟通策略");
AddNum(5, "运用结构化复盘工具，持续优化决策链认知");
AddNum(6, "建立长期关系经营思维，不把内部推荐人当一次性工具使用");

AddH2("1.4 课程结构");
var t0 = CreateTable(new[] { "模块", "内容", "课时" });
AddRow(t0, new[] { "PART 1 认知层·实操层·协作层", "11个核心章节，涵盖决策链的认知框架和实操方法", "8小时" });
AddRow(t0, new[] { "PART 2 心态层", "5个章节，聚焦复盘心态和长期关系经营", "3小时" });
AddRow(t0, new[] { "课程总结与行动计划", "核心收获回顾、行动计划制定", "1小时" });
FinishTable(t0);
AddBreak();

// ========== PART 1 ==========
AddH1("二、PART 1 认知层·实操层·协作层");

// Chapter 1
AddH2("第一章 复杂决策链里没有"决策人"，只有轮流掌握否决权的人");
AddH3("核心要点");
AddBullet("权力不是握在一个人手里的东西，是一根接力棒，在不同阶段交给不同的人");
AddBullet("每个人在自己那一棒里都是真实的权力拥有者，但没有一个人从头到尾握着整根接力棒");
AddBullet("复杂组织里的决策链像一条河，河水途经不同的闸口，每个闸口都有一个人负责开关");
AddH3("实践要点");
AddNum(1, "忘掉"找到关键人"这个概念——Think \"找到每一棒交接时握棒的人\"");
AddNum(2, "每一道闸都要单独攻克——前一棒的认可不会自动传递到后一棒");
AddNum(3, "不要赌唯一的关键人——你需要做的是在每一道闸口出现之前，提前知道它在哪里");
AddH3("思考题");
AddP("回顾你最近丢掉的或者差点丢掉的单子，是不是在某个"闸口"上出了问题？当时是哪一个闸口？");
AddH3("要点总结");
AddQuoteP("你不需要去赌那个唯一的关键人是不是站在你这边——你需要做的，是在每一道闸口出现之前，提前知道它在哪里。");

// Chapter 2
AddH2("第二章 你交的朋友，是否决权已经过期的那批人");
AddH3("核心要点");
AddBullet("一个人愿意花时间跟你聊，往往因为他手里的权力不大，所以有闲功夫");
AddBullet("真正握着后段否决权的人，通常忙得没空跟供应商建立私交");
AddBullet("越是在前一类人身上投入感情和时间，越容易把"关系好"当成"进展顺利"的证据");
AddH3("关系自查练习");
AddP("列出你当前重点客户中，你最依赖的3个内部联系人。然后问自己：这三个人的否决权在哪个阶段？他们能拦住我的单子吗？");
AddH3("要点总结");
AddQuoteP("愿意见你和能拦住你，从来不是同一批人。你交的朋友，往往是否决权已经过期或者还没轮到的那批人。");

// Chapter 3
AddH2("第三章 你手里的联系人名单，是一张假地图");
AddH3("核心要点");
AddBullet("CRM名单只覆盖了客户组织里愿意主动露面的那一小部分");
AddBullet("真正的把关层是那种一句话就能让项目停摆的人，而这批人往往从来没有出现在你的名单上");
AddBullet("答案不在客户嘴里，在客户过往的采购行为里");
AddH3("工具模板：联系人地图诊断表");
var t3 = CreateTable(new[] { "联系人", "部门/职位", "在名单里的原因", "如果他说\"不\"单子会停吗？", "真正的否决权在哪里？" });
AddRow(t3, new[] { "张总", "业务部", "主动联系", "？", "？" });
AddRow(t3, new[] { "李经理", "IT部", "参与会议", "？", "？" });
AddRow(t3, new[] { "（自行填写）", "", "", "", "" });
FinishTable(t3);
AddH3("要点总结");
AddQuoteP("你手里的联系人名单，是客户愿意让你看见的那部分组织架构，不是真实的那部分。");

// Chapter 4
AddH2("第四章 决策链地图的四层：谁买单、谁拍板、谁把关、谁使绊子");
AddH3("核心框架");
var t4 = CreateTable(new[] { "层级", "定义", "典型角色" });
AddRow(t4, new[] { "第一层：谁买单", "真正需要为预算结果负责的人", "业务负责人、预算持有人" });
AddRow(t4, new[] { "第二层：谁拍板", "业务方向上的决策者，决定"要不要做、选谁做"", "业务总监、项目负责人" });
AddRow(t4, new[] { "第三层：谁把关", "只决定"这么做符不符合规矩"，不决定做不做", "法务、合规、信息安全、集团采购" });
AddRow(t4, new[] { "第四层：谁使绊子", "没有正式话语权，但能通过非正式渠道影响结果", "边缘利益方、竞争对手关系者" });
FinishTable(t4);
AddH3("要点总结");
AddQuoteP("一张能用的地图，不是画出所有人的头衔，是画出他们分别站在哪一层。");

// Chapter 5
AddH2("第五章 找到那个不承认自己有权力的人");
AddH3("核心要点");
AddBullet("真正有一票否决权的人，往往表现得最不显眼");
AddBullet("业务负责人需要证明判断力，所以必须投入、热情、有存在感；把关角色工作成果是"没出事"，天然导向低调");
AddBullet("级别越低调、话越少、越不主动加你微信的人，反而可能是那个能一句话让项目重来的人");
AddH3("发现方法");
AddBullet("方法一：观察"谁在被别人提前打招呼"——被特意照顾的沉默者，往往手里有分量");
AddBullet("方法二：看流程留下的制度性节点——制度要求签字或知会的岗位，比会议室里的存在感更可靠");
AddH3("情景回忆练习");
AddP("回想一次你参加的客户会议，试着回忆一下，当时谁说得最少？那个人后来在项目中扮演了什么角色？");
AddH3("要点总结");
AddQuoteP("权力最大的人，往往最不需要证明自己有权力，所以他们经常是那个最沉默的人。");

// Chapter 6
AddH2("第六章 预算审批不是一道关卡，是一条河");
AddH3("核心要点");
AddBullet("预算审批本身不是一个动作，是一条流程，里面藏着好几个独立的节点");
AddBullet("客户嘴里的"预算"，至少对应三层完全不同的含义：想不想花、有没有权力花、钱怎么合规地流到你账上");
AddH3("预算流程探测问题清单");
AddNum(1, ""如果今天签合同，最快多久能付第一笔款？"");
AddNum(2, ""类似规模的采购项目，付款走的是什么流程？"");
AddNum(3, ""有没有一个金额门槛，超过了需要走额外的审批？"");
AddNum(4, ""财务那边对这个项目有没有什么特殊要求？""");
AddH3("要点总结");
AddQuoteP("预算批下来那一刻，不是终点，是另一条更隐蔽的流程刚刚开始。");

// Chapter 7
AddH2("第七章 技术评估节点否决的不是方案，是风险");
AddH3("核心要点");
AddBullet("评审人此刻真正在意的问题已经变了：不是"这个产品好不好"，是"如果我在评审意见里签字通过，将来出了问题，我要不要负责"");
AddBullet("技术评审人签字通过不会得到额外奖励，但一旦选错，要承担的后果是实实在在的");
AddBullet("这是一种典型的非对称激励：收益有限，风险很大");
AddH3("话术模板：技术评估前的话术");
AddQuoteP(""王总，我想跟您确认一件事。如果这个方案将来在实施过程中遇到问题，是我们双方的联合团队一起来处理，还是以我们为主？这个确认清楚了，我心里也有底，评审会上也好跟各位老师汇报清楚。"");
AddH3("要点总结");
AddQuoteP("技术评估会上被否掉的很少是能力问题，多数时候是没人愿意为你的方案承担万一出错的责任。");

// Chapter 8
AddH2("第八章 同一件事，对不同的人要讲不同的故事");
AddH3("核心要点");
AddBullet("不同角色的评判标准完全不同：业务看效率和结果，财务看成本结构，法务看风险控制，技术看可控性");
AddBullet("核心事实必须一致，不能对不同的人说不同的数字。变化的是叙述的入口和重点，不是事实本身");
AddH3("工具模板：角色关切点清单");
var t8 = CreateTable(new[] { "角色", "姓名", "部门", "核心关切点", "每次沟通前提醒" });
AddRow(t8, new[] { "业务负责人", "", "", "", "" });
AddRow(t8, new[] { "财务负责人", "", "", "", "" });
AddRow(t8, new[] { "技术把关", "", "", "", "" });
AddRow(t8, new[] { "合规/法务", "", "", "", "" });
AddRow(t8, new[] { "高层拍板人", "", "", "", "" });
FinishTable(t8);
AddH3("要点总结");
AddQuoteP("同一份方案，讲给业务听是效率，讲给财务听是成本，讲给合规听是风险控制，讲错对象，再好的方案也白讲。");

// Chapter 9
AddH2("第九章 该等的时候别推，该推的时候别等");
AddH3("核心要点");
AddBullet("业务类角色（业务、渠道、需求方）：工作成果是"完成了什么"，欢迎推动");
AddBullet("把关类角色（法务、合规、审计、安全评估）：工作成果是"没出什么问题"，推动制造压力");
AddH3("判断工具：该等还是该推");
var t9 = CreateTable(new[] { "问题", "答案倾向", "行动" });
AddRow(t9, new[] { "这个角色的工作成果是"完成了什么"还是"没出什么问题"？", ""完成了什么"", "推" });
AddRow(t9, new[], new[] { "", ""没出什么问题"", "等" });
AddRow(t9, new[] { "这个角色是业务推进者还是审核把关者？", "业务推进者", "推" });
AddRow(t9, new[] { "", "审核把关者", "等" });
AddRow(t9, new[] { "催他对他有利还是有压力？", "有利", "推" });
AddRow(t9, new[] { "", "有压力", "等" });
FinishTable(t9);
AddH3("要点总结");
AddQuoteP("业务节点该推的时候别等，把关节点该等的时候别推，分清这两种节奏，你花的力气才能真正用在推动结果上。");

// Chapter 10
AddH2("第十章 内部推荐人不是你的盟友，是你的翻译官");
AddH3("核心要点");
AddBullet("真正有价值的内部推荐人，最核心的作用不是替你说话，是替你翻译");
AddBullet("他能告诉你：某个会议上大家没说出口的顾虑到底是什么；某句场面话背后真实的意思；哪个部门表面配合、实际上在拖后腿");
AddBullet("真正牢固的推荐人关系，建立在"我理解你的处境，我不会让你为难"这个基础上");
AddH3("关系诊断：你的推荐人关系健康吗？");
var t10 = CreateTable(new[] { "检查点", "是", "否" });
AddRow(t10, new[] { "我是否只在需要帮忙时才联系他？", "□", "□" });
AddRow(t10, new[] { "我是否经常要求他在内部为我说话？", "□", "□" });
AddRow(t10, new[] { "我是否理解他在组织内部的政治风险？", "□", "□" });
AddRow(t10, new[] { "我们的话题是否总是围绕我的项目？", "□", "□" });
AddRow(t10, new[] { "我是否在项目结束后就减少联系？", "□", "□" });
FinishTable(t10);
AddH3("要点总结");
AddQuoteP("内部推荐人帮你做的最重要的事，不是替你说好话，是替你把客户内部的真实语言翻译给你听。");

// Chapter 11
AddH2("第十一章 向决策链顶端汇报时，你卖的不是方案");
AddH3("核心要点");
AddBullet("高层出现在评审链的末端，通常不是因为他对方案细节有兴趣，是因为流程要求他对这个决定负最终责任");
AddBullet("他真正想确认的，是这个决定放在他的责任范围里，会不会出什么他没预料到的问题");
AddBullet("把汇报重点放在"决策链上已经发生了什么"，而不是重新从头讲一遍产品价值");
AddH3("话术模板：高层汇报开场");
AddQuoteP(""张总，感谢您抽出时间。我今天不是来重新讲一遍方案的——方案的具体内容，我们的业务部门和技术团队已经跟您汇报过了。我今天主要想跟您同步一下，到您这里之前，这条流程已经跑了多久、各个环节的结论是什么，以及我们为可能的风险准备了什么样的保障措施。"");
AddH3("要点总结");
AddQuoteP("高层评审要的不是被说服，是被证明这个决定不会出问题。");
AddBreak();

// ========== PART 2 ==========
AddH1("三、PART 2 心态层");

// Chapter 1
AddH2("第一章 复盘不是写你为什么赢了，是写你把地图停在了哪一天");
AddH3("核心要点");
AddBullet("很多复盘默认了一个前提：这次赢了，说明方法是对的。但在复杂决策链的世界里，这个前提未必成立");
AddBullet("真正值得复盘的问题是——这张地图，你是从头跟到尾一直在更新，还是在某个节点之后就停下来了？");
AddBullet("赢单靠的不是地图画得全，是运气好，中间没有触发那些本该被发现却没被发现的隐藏节点");
AddH3("工具模板：赢单复盘检查表");
var t_p2_1 = CreateTable(new[] { "检查项", "答案" });
AddRow(t_p2_1, new[] { "决策链地图最后更新日期", "" });
AddRow(t_p2_1, new[] { "最后一版地图之后，项目推进了多久？", "" });
AddRow(t_p2_1, new[] { "在最后更新和签约之间，有没有出现过你没预判到的角色？", "" });
AddRow(t_p2_1, new[] { "那个角色的否决权在你画地图时，你知道他存在吗？", "" });
AddRow(t_p2_1, new[] { "如果知道，为什么没有在地图上？", "" });
AddRow(t_p2_1, new[] { "下次如何避免同样的盲区？", "" });
FinishTable(t_p2_1);
AddH3("要点总结");
AddQuoteP("大多数复盘写的是结果，真正有用的复盘写的是那张地图在哪一天停止了更新。");

// Chapter 2
AddH2("第二章 丢单不是因为不够努力，是因为地图没有更新");
AddH3("核心要点");
AddBullet("丢单最常见的真正原因，跟努力程度关系不大，是因为决策链本身在项目推进过程中发生了变化，而销售的认知没有跟着更新");
AddBullet("决策链地图不是画一次就能定型的东西，它会随着客户组织的变化而变化");
AddH3("需要更新地图的信号");
var t_p2_2 = CreateTable(new[] { "信号", "可能含义" });
AddRow(t_p2_2, new[] { "客户内部出现新的邮件抄送人", "新的角色被纳入决策链" });
AddRow(t_p2_2, new[] { "原本熟悉的联系人突然对某些问题变得含糊", "他的角色或权限可能发生变化" });
AddRow(t_p2_2, new[] { "项目推进节奏在没有明显原因的情况下突然变慢", "可能有新的把关角色介入" });
AddRow(t_p2_2, new[] { "对方开始问一些你之前没遇到过的问题", "决策链结构可能在重新洗牌" });
FinishTable(t_p2_2);
AddH3("要点总结");
AddQuoteP("丢单最常见的原因，不是判断错了当下，是没有跟上决策链本身在变化。");

// Chapter 3
AddH2("第三章 那个帮你说话的人，值得比这一单活得更久的关系");
AddH3("核心要点");
AddBullet("签单之后，很多销售会不自觉地降低跟内部推荐人的联系频率，这是一种非常常见但代价不小的行为模式");
AddBullet("真正牢固的关系，是即便没有正在进行的项目，依然愿意花时间维护，因为你认同这个人本身，不只是认同他能带来的价值");
AddBullet("长期维护比维护它的成本高得多，这种投资在职业中后期会跟别人拉开明显差距");
AddH3("行动计划模板：长期关系维护计划");
var t_p2_3 = CreateTable(new[] { "推荐人姓名", "公司", "当前职位", "最近联系时间", "关系深度", "维护计划" });
AddRow(t_p2_3, new[] { "", "", "", "", "□深 □中 □浅", "" });
AddRow(t_p2_3, new[] { "", "", "", "", "□深 □中 □浅", "" });
AddRow(t_p2_3, new[] { "", "", "", "", "□深 □中 □浅", "" });
FinishTable(t_p2_3);
AddH3("要点总结");
AddQuoteP("内部推荐人是这一单的副产品，把他当成长期关系来经营，比把他当成这一单的工具，走得更远。");

// Chapter 4
AddH2("第四章 你把否决人判断错了，团队会怎么看你");
AddH3("核心要点");
AddBullet("判断失误之后最重要的不是证明自己没错，是让团队看到你怎么修正错误");
AddBullet("团队真正在意的，是你能不能诚实地区分这两者：信息本身就无法提前获取（可接受） vs 信息其实存在只是自己没有花足够精力去核实（需要改进）");
AddH3("反思问题");
AddNum(1, "当时依据的信息是什么？");
AddNum(2, "这个信息为什么后来被证明不准确或者不完整？");
AddNum(3, "如果重来一次，在同样的信息条件下，我会不会做出不同的判断？");
AddH3("要点总结");
AddQuoteP("说清楚错在哪里，比证明自己一直是对的，更能守住这份信任。");

// Chapter 5
AddH2("第五章 这份工作练的是看清权力，不是讨好人");
AddH3("核心要点");
AddBullet("处好关系只是手段，真正需要练的能力，是看清一个组织的权力到底是怎么分布和流动的");
AddBullet("擅长处关系的人，覆盖的往往是愿意主动亲近他们的人，而不是那些真正握着否决权的人");
AddBullet("讨好是情绪层面的努力，看清权力结构是认知层面的努力，前者能带来短期的舒适感，后者才能带来长期的确定性");
AddH3("两种能力的本质区别");
var t_p2_5 = CreateTable(new[] { "能力", "解决的是", "带来的" });
AddRow(t_p2_5, new[] { "情商/处关系", ""对方愿不愿意跟你说话"", "短期的舒适感" });
AddRow(t_p2_5, new[] { "权力结构判断力", ""对方说的话有没有分量"", "长期的确定性" });
FinishTable(t_p2_5);
AddH3("要点总结");
AddQuoteP("讨好是一种本能反应，看清权力结构，才是这份工作真正需要练的能力。");
AddBreak();

// ========== COURSE SUMMARY ==========
AddH1("四、课程总结");

AddH2("核心收获");
AddBullet("复杂决策链里没有"决策人"，只有轮流掌握否决权的人");
AddBullet("你交的朋友，往往是否决权已经过期或者还没轮到的那批人");
AddBullet("联系人名单是客户愿意让你看见的那部分组织架构，不是真实的那部分");
AddBullet("决策链地图的四层：谁买单、谁拍板、谁把关、谁使绊子");
AddBullet("权力最大的人，往往最不需要证明自己有权力");
AddBullet("预算审批不是一道关卡，是一条河");
AddBullet("技术评估节点否决的不是方案，是风险");
AddBullet("同一件事，对不同的人要讲不同的故事");
AddBullet("该等的时候别推，该推的时候别等");
AddBullet("内部推荐人不是你的盟友，是你的翻译官");
AddBullet("向高层汇报时，你卖的不是方案，是决策链已经跑通的确定感");
AddBullet("复盘不是写你为什么赢了，是写你把地图停在了哪一天");
AddBullet("丢单不是因为不够努力，是因为地图没有更新");
AddBullet("那个帮你说话的人，值得比这一单活得更久的关系");
AddBullet("这份工作练的是看清权力，不是讨好人");

AddH2("行动计划制定");
AddP("请根据本次课程学习，制定您的个人行动计划：");
AddSpace();
AddP("我的三个关键收获：");
AddP("1. ________________________________________________");
AddP("2. ________________________________________________");
AddP("3. ________________________________________________");
AddSpace();
AddP("我在决策链导航方面最需要改进的一点：");
AddP("________________________________________________");
AddSpace();
AddP("未来30天的具体行动：");
AddP("行动1：________________________________________________");
AddP("行动2：________________________________________________");
AddP("行动3：________________________________________________");
AddSpace();
AddP("我需要克服的最大障碍：");
AddP("________________________________________________");
AddSpace();
AddP("我需要获得的支持：");
AddP("________________________________________________");
AddBreak();

// ========== APPENDIX ==========
AddH1("五、附录：实用工具");

AddH2("附录A：决策链地图模板");
AddP("客户名称：____________________    项目名称：____________________    日期：____________________");
AddSpace();
AddP("┌─────────────────────────────────────────────────────────────────┐");
AddP("│                        决策链地图                                │");
AddP("├─────────────────────────────────────────────────────────────────┤");
AddP("│                                                                 │");
AddP("│  第一层：谁买单                                                  │");
AddP("│  姓名：__________  部门：__________  影响力：□强 □中 □弱        │");
AddP("│  关注点：________________________________________________      │");
AddP("│                                                                 │");
AddP("│  ────────────────────────────────────────────────────────────  │");
AddP("│                                                                 │");
AddP("│  第二层：谁拍板                                                  │");
AddP("│  姓名：__________  部门：__________  影响力：□强 □中 □弱        │");
AddP("│  关注点：________________________________________________      │");
AddP("│                                                                 │");
AddP("│  ────────────────────────────────────────────────────────────  │");
AddP("│                                                                 │");
AddP("│  第三层：谁把关                                                  │");
AddP("│  姓名：__________  部门：__________  影响力：□强 □中 □弱        │");
AddP("│  法务合规：□有 □无    安全评估：□有 □无    集团采购：□有 □无 │");
AddP("│                                                                 │");
AddP("│  ────────────────────────────────────────────────────────────  │");
AddP("│                                                                 │");
AddP("│  第四层：谁使绊子                                                │");
AddP("│  姓名：__________  部门：__________  影响力：□强 □中 □弱        │");
AddP("│  可能的顾虑：________________________________________________  │");
AddP("│                                                                 │");
AddP("└─────────────────────────────────────────────────────────────────┘");
AddSpace();
AddP("地图更新时间：____________________    下次更新计划：____________________");

AddH2("附录B：话术模板");
AddP("1. 技术评估前的话术：");
AddQuoteP(""王总，我想跟您确认一件事。如果这个方案将来在实施过程中遇到问题，是我们双方的联合团队一起来处理，还是以我们为主？这个确认清楚了，我心里也有底，评审会上也好跟各位老师汇报清楚。"");
AddSpace();
AddP("2. 高层汇报开场：");
AddQuoteP(""张总，感谢您抽出时间。我今天不是来重新讲一遍方案的——方案的具体内容，我们的业务部门和技术团队已经跟您汇报过了。我今天主要想跟您同步一下，到您这里之前，这条流程已经跑了多久、各个环节的结论是什么，以及我们为可能的风险准备了什么样的保障措施。"");

AddH2("附录C：复盘检查表");
var t_app_c = CreateTable(new[] { "检查项", "答案" });
AddRow(t_app_c, new[] { "决策链地图最后更新日期", "" });
AddRow(t_app_c, new[] { "最后一版地图之后，项目推进了多久？", "" });
AddRow(t_app_c, new[] { "在最后更新和签约之间，有没有出现过你没预判到的角色？", "" });
AddRow(t_app_c, new[] { "那个角色的否决权在你画地图时，你知道他存在吗？", "" });
AddRow(t_app_c, new[] { "如果知道，为什么没有在地图上？", "" });
AddRow(t_app_c, new[] { "下次如何避免同样的盲区？", "" });
FinishTable(t_app_c);

AddH2("附录D：长期关系维护计划");
var t_app_d = CreateTable(new[] { "推荐人姓名", "公司", "当前职位", "最近联系时间", "关系深度", "维护计划" });
AddRow(t_app_d, new[] { "", "", "", "", "□深 □中 □浅", "" });
AddRow(t_app_d, new[] { "", "", "", "", "□深 □中 □浅", "" });
AddRow(t_app_d, new[] { "", "", "", "", "□深 □中 □浅", "" });
AddRow(t_app_d, new[] { "", "", "", "", "□深 □中 □浅", "" });
AddRow(t_app_d, new[] { "", "", "", "", "□深 □中 □浅", "" });
FinishTable(t_app_d);

AddSpace(); AddSpace();
AddP("© 罗宏伟 版权所有");
AddP("本手册仅供学员内部学习使用，未经授权不得外传。");

// Final section properties
body.Append(new SectionProperties(
    new PageSize { Width = 11906, Height = 16838 },
    new PageMargin { Top = 1440, Right = 1440, Bottom = 1440, Left = 1440, Header = 720, Footer = 720 }
));

mainPart.Document.Save();
Console.WriteLine("Student handbook created successfully: " + outputPath);
Console.WriteLine("Total paragraphs: " + body.ChildElements.Count);