#r "nuget: DocumentFormat.OpenXml, 3.2.0"

using DocumentFormat.OpenXml;
using DocumentFormat.OpenXml.Packaging;
using DocumentFormat.OpenXml.Wordprocessing;

string outputPath = @"D:\2026年课程\ai课2026整理\脚本小白入门\workbuddy玩转脚本\AI-AGEN脚本四月使用教程\完整课程包\10-宣传文案\认证班宣传文案.docx";

using (var doc = WordprocessingDocument.Create(outputPath, WordprocessingDocumentType.Document))
{
var mainPart = doc.AddMainDocumentPart();
mainPart.Document = new Document(new Body());
Body body = mainPart.Document.Body!;

var stylesPart = mainPart.AddNewPart<StyleDefinitionsPart>();
stylesPart.Styles = new Styles();
var styles = stylesPart.Styles!;

// Doc defaults - Chinese font
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

// Title style - Red
styles.Append(new Style(new StyleName { Val = "Title" }, new BasedOn { Val = "Normal" },
    new StyleParagraphProperties(new Justification { Val = JustificationValues.Center }, new SpacingBetweenLines { After = "0", Line = "240", LineRule = LineSpacingRuleValues.Auto }),
    new StyleRunProperties(new RunFonts { Ascii = "Microsoft YaHei", EastAsia = "Microsoft YaHei", HighAnsi = "Microsoft YaHei" }, new Bold(), new FontSize { Val = "56" }, new FontSizeComplexScript { Val = "56" }, new Color { Val = "C73E3A" })
) { Type = StyleValues.Paragraph, StyleId = "Title" });

// Heading1 - Dark red
styles.Append(new Style(new StyleName { Val = "Heading 1" }, new BasedOn { Val = "Normal" },
    new StyleParagraphProperties(new SpacingBetweenLines { Before = "480", After = "240" }, new KeepNext(), new OutlineLevel { Val = 0 }),
    new StyleRunProperties(new RunFonts { Ascii = "Microsoft YaHei", EastAsia = "Microsoft YaHei", HighAnsi = "Microsoft YaHei" }, new Bold(), new FontSize { Val = "36" }, new FontSizeComplexScript { Val = "36" }, new Color { Val = "9A2E2B" })
) { Type = StyleValues.Paragraph, StyleId = "Heading1" });

// Heading2 - Gray blue
styles.Append(new Style(new StyleName { Val = "Heading 2" }, new BasedOn { Val = "Normal" },
    new StyleParagraphProperties(new SpacingBetweenLines { Before = "360", After = "120" }, new KeepNext(), new OutlineLevel { Val = 1 }),
    new StyleRunProperties(new RunFonts { Ascii = "Microsoft YaHei", EastAsia = "Microsoft YaHei", HighAnsi = "Microsoft YaHei" }, new Bold(), new FontSize { Val = "28" }, new FontSizeComplexScript { Val = "28" }, new Color { Val = "2E5496" })
) { Type = StyleValues.Paragraph, StyleId = "Heading2" });

// Normal style
styles.Append(new Style(new StyleName { Val = "Normal" }, new BasedOn { Val = "Normal" },
    new StyleParagraphProperties(new SpacingBetweenLines { After = "160" }),
    new StyleRunProperties(new RunFonts { Ascii = "Microsoft YaHei", EastAsia = "Microsoft YaHei", HighAnsi = "Microsoft YaHei" }, new FontSize { Val = "24" }, new FontSizeComplexScript { Val = "24" })
) { Type = StyleValues.Paragraph, StyleId = "Normal" });

// Helper functions
void AddTitle(string text) {
    body.Append(new Paragraph(
        new ParagraphProperties(new Justification { Val = JustificationValues.Center }, new SpacingBetweenLines { After = "0" }),
        new Run(new RunProperties(new Bold(), new FontSize { Val = "56" }, new FontSizeComplexScript { Val = "56" }, new Color { Val = "C73E3A" }), new Text(text))
    ));
}

void AddHeading1(string text) {
    body.Append(new Paragraph(
        new ParagraphProperties(new StyleId { Val = "Heading1" }),
        new Run(new Text(text))
    ));
}

void AddHeading2(string text) {
    body.Append(new Paragraph(
        new ParagraphProperties(new StyleId { Val = "Heading2" }),
        new Run(new Text(text))
    ));
}

void AddParagraph(string text, bool center = false) {
    var pProps = new ParagraphProperties();
    if (center) pProps.Append(new Justification { Val = JustificationValues.Center });
    body.Append(new Paragraph(
        pProps,
        new Run(new Text(text))
    ));
}

void AddBullet(string text) {
    body.Append(new Paragraph(
        new ParagraphProperties(new Indentation { Left = "720" }),
        new Run(new Text("• " + text))
    ));
}

void AddPageBreak() {
    body.Append(new Paragraph(
        new Run(new Break { Type = BreakValues.Page })
    ));
}

// ========== DOCUMENT CONTENT ==========

// Main Title
AddTitle("AI工具脚本课");
AddParagraph("WorkBuddy玩转脚本 · 认证班", true);
AddParagraph(" ", true);
AddParagraph("让重复工作自动化，让AI成为你的执行力", true);
AddParagraph("13-17小时，掌握AI文件处理的实战能力", true);

AddPageBreak();

// ========== Section 1: Pain Points ==========
AddHeading1("你是不是经常遇到这些情况？");
AddParagraph(" ");
AddParagraph("每周一早上，把十三个部门的周报汇成一张表，花一个半小时，眼睛都看花了。", true);
AddParagraph("每月末，把合同按规则归档，414个文件，一个个打开、复制、粘贴、改名……手都酸了。", true);
AddParagraph("每季度，从几百份合同里提取关键字段，一份份打开、抄写、汇总……做完人都麻了。", true);
AddParagraph("这些工作，量大、重复、格式枯燥——偏偏又不能不做。", true);
AddParagraph(" ");
AddHeading2("你试过用AI工具，但效果不稳定？");
AddParagraph("有时候AI做得很好，有时候出来的结果完全不对——来回改了几轮，时间比手工做还长。", true);
AddParagraph("问题不在于AI不够智能，而在于——你可能没有把任务说清楚。", true);
AddParagraph(" ");
AddHeading2("同一件事，两种说法，两种结果");
AddParagraph("描述A：「帮我整理一下这些销售数据。」", true);
AddParagraph("→ 结果：来回沟通5轮，最后表头重复6次，格式乱七八糟。", true);
AddParagraph("描述B：「我有6个Excel文件，分别是1月到6月的销售记录。请把6个文件合并成一张总表，只保留一行表头，按成交日期从旧到新排序，新文件叫『2024年上半年销售汇总』。」", true);
AddParagraph("→ 结果：一次完成，格式正确，下载下来直接用。", true);
AddParagraph("两个人的区别不是技术，不是运气，是「把任务说清楚了还是没有」。", true);
AddParagraph("这门课教的，就是这件事。", true);

AddPageBreak();

// ========== Section 2: Course Value ==========
AddHeading1("这门课能帮你什么");
AddHeading2("你将掌握的能力");
AddBullet("判断什么任务适合用AI处理，什么任务不适合");
AddBullet("用四要素框架把任务描述清楚，让AI一次做对");
AddBullet("处理5类Excel高频场景：多表合并、数据清洗、条件筛选、填入模板、差异对比");
AddBullet("处理B类/C类场景：文件整理、文档提取、格式转换");
AddBullet("写出完整的七要素说明书，让同事也能独立使用");
AddBullet("处理变化和迭代，维护你的任务资产库");
AddParagraph(" ");
AddHeading2("你将带走的产出");
AddBullet("一张场景卡：选定一个主场景任务，五章持续打磨");
AddBullet("一份可交付的说明书：同事可以直接使用");
AddBullet("一套任务资产库：说明书+提示词备份+README");
AddParagraph(" ");
AddHeading2("时间投入产出比");
AddParagraph("如果每月花6小时做重复性文件工作：", true);
AddBullet("课程投入：15小时");
AddBullet("学习后每月节省：5小时（80%效率提升）");
AddBullet("年化节省：60小时");
AddBullet("回收周期：约1周");

AddPageBreak();

// ========== Section 3: Course Features ==========
AddHeading1("为什么这门课不一样");
AddHeading2("唯一以「任务描述能力」为核心");
AddParagraph("市面上大多数AI课教的是「这个工具能做什么」，本课程教的是「你怎么把你做的事说清楚」——这是从「会用」到「用好」的本质跨越。这个能力学会了，换任何AI工具都适用。", true);
AddParagraph(" ");
AddHeading2("唯一要求「同学交叉检验」的课程");
AddParagraph("你自己觉得清楚的地方，别人往往看不清楚。本课程在第二、三、五章设置了三轮交叉检验：", true);
AddBullet("任务描述交叉测试（同学扮演AI检验描述是否能执行）");
AddBullet("操作结果交叉验收（同学盲测验收你的输出文件）");
AddBullet("说明书走查测试（同学只靠说明书独立完成任务）");
AddParagraph(" ");
AddHeading2("唯一产出「可交付说明书」的课程");
AddParagraph("学完这门课，你带走的不只是「学过了」，而是一份自己的同事可以直接使用的说明书——这是工具价值从个人到团队的最后一公里。", true);
AddParagraph(" ");
AddHeading2("迭代实战设计");
AddParagraph("同一个场景任务在六章里持续深化，不是每章换新例子。你经历「模糊想法→清晰描述→运行验证→迭代修正→写成说明书→持续维护」的完整生命周期，真正掌握从入门到精通的路径。", true);

AddPageBreak();

// ========== Section 4: Course Outline ==========
AddHeading1("课程大纲");
AddHeading2("第一章 · 认知开篇（1.5-2小时）");
AddBullet("认知自测：8题判断题，发现你对AI工具边界的认知偏差");
AddBullet("WorkBuddy是什么：看完整演示，理解「你说→它做→你验收」的工作方式");
AddBullet("第一次体验：在WorkBuddy里跑通一个真实小任务的完整流程");
AddBullet("场景卡选定：选定接下来五章持续打磨的主场景任务");
AddParagraph(" ");
AddHeading2("第二章 · 任务表达方法（2-2.5小时）—— 最关键的一章");
AddBullet("任务描述四要素：输入/操作/输出/边界条件");
AddBullet("三种常见错误：只说目标不说步骤；用模糊词代替具体要求；忘记边界条件");
AddBullet("任务描述模板：保底版（直接填空）和进阶版（分栏描述）");
AddBullet("迭代修正：第一次没做对怎么继续；在原对话里继续，不重新开");
AddBullet("验收三法：行数核查 / 三行对比 / 边界抽查");
AddParagraph(" ");
AddHeading2("第三章 · Excel数据处理场景（3-4小时）");
AddBullet("A1 多表合并 / A2 数据清洗 / A3 条件筛选 / A4 填入模板 / A5 差异对比");
AddParagraph(" ");
AddHeading2("第四章 · 文件整理与文档提取场景（2.5-3小时）");
AddBullet("B1 批量重命名 / B2 分类归档 / B3 批量查找");
AddBullet("C1 Word字段提取 / C2 PDF表格转Excel / C3 Word转PDF");
AddParagraph(" ");
AddHeading2("第五章 · 使用说明书制作（2-2.5小时）");
AddBullet("七要素框架：用途说明/使用前准备/操作步骤/提示词/输出说明/验收方法/常见问题");
AddBullet("AI辅助起草：用任务信息让AI生成初稿");
AddBullet("走查测试：唯一有效的质量检验方法");
AddParagraph(" ");
AddHeading2("第六章 · 迭代维护与综合实战（2-2.5小时）");
AddBullet("三类变化处理：范围变了/输出要求变了/输入格式变了");
AddBullet("三步迭代：找回对话→描述变化→更新说明书");
AddBullet("任务资产库：说明书+提示词备份+README的管理结构");

AddPageBreak();

// ========== Section 5: Who is this for ==========
AddHeading1("这门课适合谁");
AddHeading2("目标学员");
AddBullet("岗位：HR、行政、财务、运营、项目管理、供应链等需要处理大量重复性文件数据工作的岗位");
AddBullet("基础要求：会用Excel/Word/PDF等日常办公软件即可，不需要任何编程或AI背景");
AddBullet("痛点：每周或每月重复做文件汇总、数据整理、格式转换等工作，耗时且容易出错");
AddParagraph(" ");
AddHeading2("你不需要担心");
AddBullet("「我完全不懂AI」——课程从最基础开始，不需要任何技术背景");
AddBullet("「我怕学不会」——每章都有实操练习，第一次课就让你跑通真实任务");
AddBullet("「我工作很忙没时间」——总课时13-17小时，可以分周学习，也可以集中2天培训");

AddPageBreak();

// ========== Section 6: Testimonials ==========
AddHeading1("学员效果见证");
AddHeading2("课程效果保障");
AddBullet("第一次课就上手：第一章就安排真实任务体验，不是听完六章才让你用");
AddBullet("三轮交叉检验：任务描述/结果验收/说明书走查，确保质量");
AddBullet("场景卡持续深化：一个场景做透，比蜻蜓点水学十个场景更有价值");
AddBullet("说明书交付标准：说明书的唯一检验标准——一个不知情的人只靠说明书独立完成且结果正确");
AddParagraph(" ");
AddHeading2("学员口碑（示例）");
AddParagraph("「以前用AI工具总是不稳定，来回改好几轮。这门课让我明白了问题不在AI，在于我没有把任务说清楚。现在我写完提示词会先让同事看看能不能看懂，再交给AI。」", true);
AddParagraph("—— HR专员 小林", true);
AddParagraph("「我最受用的是说明书这一章。以前我自己会用，但同事不会，我走了之后方法就失传了。现在我有了一份说明书，交给谁都能用。」", true);
AddParagraph("—— 运营主管 小陈", true);

AddPageBreak();

// ========== Section 7: Registration ==========
AddHeading1("报名信息");
AddHeading2("课程形式");
AddBullet("集中培训：2天（每天6-7小时），适合企业内部一次性交付");
AddBullet("分周学习：5周，每周2.5-3.5小时，适合线上课或企业内训分周推进");
AddBullet("自学：约13-17小时，配合作业和检验机制，适合自主学习者");
AddParagraph(" ");
AddHeading2("场地要求");
AddBullet("每人一台电脑（能打开浏览器即可，不需要安装任何软件）");
AddBullet("网络连接（WorkBuddy是在线工具）");
AddBullet("投影设备（讲师演示用）");
AddParagraph(" ");
AddHeading2("班级规模");
AddBullet("20人以内：深度工作坊、企业内训，可保证每位学员得到充分指导");
AddBullet("20-40人：公开课、大规模内训，增配助教");
AddBullet("40人以上：讲座或分享场合，不建议做实操练习");
AddParagraph(" ");
AddHeading2("配套材料");
AddBullet("课程学习伴侣文档：每章配套的学习+练习+反思填写文档");
AddBullet("各场景提示词模板：A1-A5、B1-B3、C1-C3各场景的直接可用模板");
AddBullet("说明书模板：第五章说明书撰写的完整模板");
AddBullet("练习文件包：各场景配套的示例文件，用于课堂练习");
AddParagraph(" ");
AddParagraph("课程费用：详情请咨询课程顾问", true);

AddPageBreak();

// ========== Section 8: CTA ==========
AddParagraph("==========================================", true);
AddParagraph(" ", true);
AddTitle("立即行动");
AddParagraph(" ", true);
AddParagraph("学完这门课，你将带走：", true);
AddBullet("一个能自动化你重复工作的AI工具使用能力");
AddBullet("一份可交付给同事的说明书");
AddBullet("一套持续迭代和维护的方法论");
AddParagraph(" ");
AddParagraph("「你自己觉得清楚的地方，别人往往看不清楚——", true);
AddParagraph("让说明书替你说话，让工具成为团队的能力。」", true);
AddParagraph(" ");
AddParagraph("==========================================", true);
AddParagraph(" ");
AddParagraph("AI工具脚本课 · WorkBuddy玩转脚本 · 认证班", true);
AddParagraph("报名咨询：请联系课程顾问", true);

// Set page setup - A4
body.Append(new SectionProperties(
    new PageSize { Width = 11906, Height = 16838 },
    new PageMargin { Top = 1440, Right = 1440, Bottom = 1440, Left = 1440, Header = 720, Footer = 720 }
));

mainPart.Document.Save();
Console.WriteLine($"Document created: {outputPath}");
}
