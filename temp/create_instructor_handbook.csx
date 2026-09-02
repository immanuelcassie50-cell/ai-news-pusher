#r "nuget: DocumentFormat.OpenXml, 3.2.0"

using DocumentFormat.OpenXml;
using DocumentFormat.OpenXml.Packaging;
using DocumentFormat.OpenXml.Wordprocessing;

var outputPath = @"D:\新课开发\经验萃取\带教手册\完整课程包\06_讲师手册\讲师手册_组织经验传承_AI赋能岗位带教手册开发.docx";

// Ensure directory exists
Directory.CreateDirectory(Path.GetDirectoryName(outputPath)!);

// Create document
using var doc = WordprocessingDocument.Create(outputPath, WordprocessingDocumentType.Document);
var mainPart = doc.AddMainDocumentPart();
mainPart.Document = new Document(new Body());

var body = mainPart.Document.Body!;

// Helper functions
void AddHeading(string text, int level) {
    var p = new Paragraph(
        new ParagraphProperties(
            new ParagraphStyleId { Val = $"Heading{level}" },
            new SpacingBetweenLines { After = "200", Line = "276", LineRule = LineSpacingRuleValues.Auto }
        ),
        new Run(new Text(text))
    );
    body.Append(p);
}

void AddParagraph(string text, bool bold = false, string? fontSize = null) {
    var runProps = new RunProperties();
    if (bold) runProps.Append(new Bold());
    if (fontSize != null) runProps.Append(new FontSize { Val = fontSize });

    var p = new Paragraph(
        new ParagraphProperties(new SpacingBetweenLines { After = "120" }),
        new Run(runProps, new Text(text))
    );
    body.Append(p);
}

void AddBullet(string text, int level = 0) {
    var indent = new Indentation { Left = (720 + level * 360).ToString(), Hanging = "360" };
    var p = new Paragraph(
        new ParagraphProperties(indent, new SpacingBetweenLines { After = "60" }),
        new Run(new Text(text))
    );
    body.Append(p);
}

void AddTable(string[,] data, double[]? colWidths = null) {
    var tbl = new Table();

    // Table properties
    var tblProps = new TableProperties(
        new TableWidth { Width = "5000", Type = TableWidthUnitValues.Pct },
        new TableBorders(
            new TopBorder { Val = BorderValues.Single, Size = 4 },
            new BottomBorder { Val = BorderValues.Single, Size = 4 },
            new LeftBorder { Val = BorderValues.Single, Size = 4 },
            new RightBorder { Val = BorderValues.Single, Size = 4 },
            new InsideHorizontalBorder { Val = BorderValues.Single, Size = 4 },
            new InsideVerticalBorder { Val = BorderValues.Single, Size = 4 }
        )
    );
    tbl.Append(tblProps);

    int rows = data.GetLength(0);
    int cols = data.GetLength(1);

    for (int r = 0; r < rows; r++) {
        var tr = new TableRow();
        for (int c = 0; c < cols; c++) {
            var tc = new TableCell(
                new TableCellProperties(
                    new TableCellWidth { Width = colWidths != null && c < colWidths.Length ? ((int)(colWidths[c] * 1440)).ToString() : "2000" }
                ),
                new Paragraph(
                    new ParagraphProperties(new SpacingBetweenLines { After = "60" }),
                    new Run(
                        r == 0 ? new Bold() : null,
                        new Text(data[r, c])
                    )
                )
            );
            tr.Append(tc);
        }
        tbl.Append(tr);
    }
    body.Append(tbl);
    body.Append(new Paragraph()); // spacing after table
}

void AddSeparator() {
    body.Append(new Paragraph(
        new ParagraphProperties(
            new ParagraphBorders(
                new BottomBorder { Val = BorderValues.Single, Size = 6, Color = "CCCCCC" }
            ),
            new SpacingBetweenLines { After = "200" }
        )
    ));
}

// ========== DOCUMENT CONTENT ==========

// Cover/Title
AddHeading("《组织经验传承：AI赋能岗位带教手册开发》", 1);
AddHeading("讲师手册", 1);
AddParagraph("");
AddParagraph("版本：V1.0");
AddParagraph("适用对象：内部讲师、培训管理者");
AddParagraph("日期：2026年6月");
AddSeparator();

// Chapter 1: 讲师使用指南
AddHeading("第一章 讲师使用指南", 1);

AddHeading("1.1 讲师角色定位", 2);
AddParagraph("本课程的讲师承担以下核心角色：");
AddBullet("课程设计引导者：推动学员按照结构化流程完成带教手册开发");
AddBullet("经验萃取催化师：引导三类人群（新人代表、优秀带教人、管理者）有效分享经验");
AddBullet("质量把关人：确保每个阶段产出符合质量标准，及时发现问题并调整");
AddBullet("AI工具赋能者：演示和指导学员正确使用AI辅助工具");

AddHeading("1.2 课程整体结构", 2);
AddParagraph("课程分为五个模块，周期为2-3天：");
AddTable(new[,] {
    {"模块", "核心内容", "主要产出", "建议时长" },
    {"模块一", "开场导入与带教手册设计逻辑", "理解手册定位与设计原则", "60-90分钟" },
    {"模块二", "方向定位与带教经验萃取", "定位表定稿+访谈素材", "150-180分钟" },
    {"模块三", "AI辅助生成手册框架与内容", "全景图+大纲+主体内容", "150-180分钟" },
    {"模块四", "带教工具包与典型场景案例", "六种工具+2-3个案例", "90-240分钟" },
    {"模块五", "五步优化法与整合编排", "优化后手册+互评定稿", "120-240分钟" }
}, new double[] { 0.1, 0.3, 0.35, 0.15 });

AddHeading("1.3 讲师关键行为准则", 2);
AddBullet("巡场机制：每个实操环节需定时巡场，重点关注方向偏差");
AddBullet("关卡管理：每个模块结束时必须确认产出质量，未通过则继续");
AddBullet("节奏把控：根据现场能量状态调整任务难度，避免疲劳");
AddBullet("三类视角平衡：确保新人代表、带教人、管理者三方声音都被听到");

AddHeading("1.4 风险预警与应对", 2);
AddTable(new[,] {
    {"风险类型", "预警信号", "应对策略" },
    {"经验萃取偏向「做」而非「教」", "访谈中大量描述操作步骤", "立即追问「您是怎么教他这一步的」" },
    {"内容写成操作手册而非带教手册", "模块内容只有知识点罗列", "检查每个模块是否有「教法+验收」两层" },
    {"话术卡不自然", "话术生硬或太正式", "让组员对练验证，根据反馈调整" },
    {"工具过于复杂", "工具填写超过5分钟", "简化工具，保留核心功能" },
    {"学员类型差异被忽略", "全程只用一种带法", "每个阶段标注差异化策略" },
    {"AI工具不稳定", "生成内容质量差或无法运行", "准备备用方案和手动填充模板" }
}, new double[] { 0.2, 0.35, 0.35 });

AddHeading("1.5 能量管理建议", 2);
AddTable(new[,] {
    {"时段", "能量状态", "任务匹配" },
    {"上午第一节", "高能量", "高认知负荷内容：设计逻辑、定位分析、全景图梳理" },
    {"上午第二节", "能量平稳", "互动性强活动：访谈、讨论、经验碰撞" },
    {"下午第一节", "能量下降", "动手操作为主：AI实操、内容填充，减少纯讲授" },
    {"下午第二节", "最低谷", "成果导向任务：产出检查、展示准备，deadline驱动" }
}, new double[] { 0.2, 0.2, 0.5 });

// Chapter 2: 课程整体设计逻辑
AddHeading("第二章 课程整体设计逻辑", 1);

AddHeading("2.1 核心理念：「做中学」", 2);
AddParagraph("本课程采用任务驱动模式，学员在完成带教手册开发包的过程中掌握方法，而非单纯听讲。讲师的角色是引导和把关，而非灌输。");

AddHeading("2.2 三类人群的价值定位", 2);
AddTable(new[,] {
    {"角色", "核心价值", "在课程中的贡献" },
    {"被带教过的新人代表", "学员视角", "还原被带教过程的真实体验、困惑、卡点和期待" },
    {"优秀带教人", "带教经验视角", "贡献被验证有效的带教方法、节奏把控和因材施教策略" },
    {"部门/团队管理者", "组织标准视角", "界定带教范围边界、质量标准、合规要求和验收标准" }
}, new double[] { 0.2, 0.2, 0.5 });

AddHeading("2.3 质量关卡设计", 2);
AddParagraph("每个模块设置质量关卡，确保方向正确后再推进：");
AddBullet("关卡一：定位确认 — 带教对象区分到位、内容范围合理、验收标准可衡量");
AddBullet("关卡二：全景图确认 — 技能清单完整、依赖关系合理、阶段划分贴合实际");
AddBullet("关卡三：大纲确认 — 逻辑性、完整性、实用性三项达标");
AddBullet("关卡四：内容交叉验证 — 写到「怎么教」层面、验收标准可观察、差异化有标注");
AddBullet("关卡五：组间互评 — 带教逻辑性、教法可操作性、差异化覆盖、工具实用性");

AddHeading("2.4 产出递进逻辑", 2);
AddParagraph("产出物按以下顺序逐步构建：");
AddBullet("定位表（范围锁定）→ 全景图（内容梳理）→ 分阶段计划（时间规划）→ 教法设计（怎么教）→ 工具包（配套支撑）→ 案例（温度补充）→ 优化（五步打磨）→ 整合（最终成品）");

// Chapter 3: 模块详细讲师指引
AddHeading("第三章 模块详细讲师指引", 1);

// Module 1
AddHeading("模块一：开场导入与带教手册设计逻辑", 2);
AddParagraph("建议时长：两天版60分钟 / 三天版90分钟");

AddHeading("1.1 教学目的", 2);
AddParagraph("打破「带教就是让新人跟着看」的惯性认知，建立对「带教手册」产品的正确理解，形成开发共识。");

AddHeading("1.2 讲授逻辑", 2);
AddParagraph("开场导入（20分钟）：");
AddBullet("提出扎心问题：「团队带新人最强的那个人，他的带法被总结过吗？」");
AddBullet("追问：「如果明天他不带了，换另一个人来带，效果能一样吗？」");
AddBullet("引出核心矛盾：带教质量完全属人化，组织缺少标准化带教工具");

AddParagraph("场景对比（15分钟）：");
AddBullet("展示两个场景：同一岗位，两种带法（A：「看几遍就会」，B：「分四步，第三天独立」）");
AddBullet("引出区别：不是能力差距，而是方法差距——拆分步骤、控制节奏、渐进放手、即时反馈");

AddParagraph("带教手册定位（25分钟）：");
AddBullet("三种「伪带教手册」识别：岗位说明书改装型、培训课件搬运型、制度型");
AddBullet("带教手册的四个设计原则：以学员成长路径为主线、以教学动作为核心、以差异化为内置能力、以评估验收为节奏锚点");
AddBullet("六个核心问题：教什么、按什么顺序教、怎么教、怎么验收、问题怎么办、过程怎么管");

AddHeading("1.3 关键点", 2);
AddBullet("开场要「扎心」，让学员意识到问题的紧迫性");
AddBullet("场景对比要具体，让学员看到带教质量差异的真实案例");
AddBullet("定位要清晰，防止后续工作方向偏差");

AddHeading("1.4 常见问题", 2);
AddBullet("学员说「我们公司已经有带教材料了」→ 引导辨认现有材料属于哪种「伪手册」");
AddBullet("学员对「会做≠会教」不理解 → 用场景对比中的具体差异说明");

AddHeading("1.5 互动设计", 2);
AddBullet("开场练习（5分钟）：回忆个人带教体验，填写体验表");
AddBullet("快速辨认练习（3分钟）：对照表格检查公司现有材料");
AddBullet("六个问题检验练习（8分钟）：评估现有材料覆盖程度");

// Module 2
AddHeading("模块二：方向定位与带教经验萃取", 2);
AddParagraph("建议时长：两天版150分钟 / 三天版180分钟");

AddHeading("2.1 教学目的", 2);
AddParagraph("完成带教手册的精准定位，并通过结构化访谈从三类人群中萃取核心带教经验。");

AddHeading("2.2 讲授逻辑", 2);
AddParagraph("方向定位（50分钟）：");
AddBullet("带教手册定位表五个维度：带教对象画像、内容范围、带教周期与阶段划分、验收标准、约束条件");
AddBullet("不同学员类型的定位差异：应届生、社招有经验者、转岗员工、不同专业背景");
AddBullet("定位颗粒度原则：聚焦核心技能，不是整个岗位所有内容");

AddParagraph("带教经验萃取（90-120分钟）：");
AddBullet("萃取的区分：不是萃取「怎么做」，而是萃取「怎么教」");
AddBullet("三类人群分角色访谈：新人代表（说体验）、优秀带教人（说带法）、管理者（说标准）");
AddBullet("访谈追问技巧：把「做了什么」变成「怎么教的」");

AddHeading("2.3 关键点", 2);
AddBullet("定位表填写后必须逐组确认，未通过则不进入下一步");
AddBullet("访谈核心追问习惯：「你教这个步骤的时候，会怎么做？什么时候放手？怎么判断学会了？」");
AddBullet("全程录音，访谈后立即整理要点");

AddHeading("2.4 巡场重点", 2);
AddBullet("带教对象是否区分清楚");
AddBullet("内容范围是否合理（不是整个岗位所有内容）");
AddBullet("验收标准是否可衡量（不是「基本掌握」）");
AddBullet("是否在追问「怎么教」而不只是「教什么」");

// Module 3
AddHeading("模块三：AI辅助生成带教手册框架与内容", 2);
AddParagraph("建议时长：两天版150分钟 / 三天版180分钟");

AddHeading("3.1 教学目的", 2);
AddParagraph("将萃取到的带教经验通过AI辅助转化为结构化的带教手册框架和主体内容。");

AddHeading("3.2 讲授逻辑", 2);
AddParagraph("带教内容全景图（50分钟）：");
AddBullet("岗位核心技能清单：带教期内必须掌握的核心技能");
AddBullet("知识技能分类：知识类（讲解+举例）、技能类（演示→陪练→独立）、判断力类（案例+模拟）");
AddBullet("依赖关系梳理：先学A才能学B，画出学习路径");

AddParagraph("分阶段带教计划（40分钟）：");
AddBullet("典型四阶段：认知期→跟学期→试手期→独立期");
AddBullet("每阶段明确：阶段目标、教学重点、教法选择、里程碑验收");
AddBullet("差异化标注：不同学员类型的阶段差异");

AddParagraph("手册设计方案与三级大纲（50分钟）：");
AddBullet("一级大纲：以阶段划分为主线");
AddBullet("三级大纲：每个模块必须包含「教学目标+教法+验收标准」三层");

AddParagraph("主体内容填充（80分钟）：");
AddBullet("按大纲逐模块填充：教学目标、教法选择、示范要点、练习设计、常见错误与纠正、验收标准");
AddBullet("差异化标注：不同学员类型的调整方式");

AddHeading("3.3 关键点", 2);
AddBullet("AI负责生成初稿，人负责验证准确性");
AddBullet("最常见偏差：只写了「教什么」没写「怎么教」");
AddBullet("内容填充标准：每个模块必须包含完整的「教法+验收标准」两层");

AddHeading("3.4 巡场重点", 2);
AddBullet("是否停留在「教什么」层面而没有写到「怎么教」");
AddBullet("教学顺序是否符合学习规律");
AddBullet("是否有明确的「放手时机」判断标准");

// Module 4
AddHeading("模块四：带教工具包与典型场景案例", 2);
AddParagraph("建议时长：两天版90分钟（压缩）/ 三天版240分钟");

AddHeading("4.1 教学目的", 2);
AddParagraph("为带教手册开发配套的带教工具包和典型场景案例。");

AddHeading("4.2 讲授逻辑", 2);
AddParagraph("带教工具包开发：");
AddBullet("六种核心工具：起点评估工具、阶段检查表、话术卡、日志模板、评估表、速查表");
AddBullet("AI辅助批量生成工具初稿，人工验证重点");
AddBullet("工具与主体内容的嵌入位置确认");

AddParagraph("典型场景案例开发：");
AddBullet("三种形式：成功带教案例、带教失误案例、因材施教案例");
AddBullet("案例采集四维度：带教启动、教学过程、遇到困难、评估与放手");

AddHeading("4.3 关键点", 2);
AddBullet("工具质量标准：带教人在5分钟内能填完或查完");
AddBullet("话术卡必须让组员对练验证，自然可操作");
AddBullet("案例的「温度」来自真实经历，不是AI编造");

AddHeading("4.4 巡场重点", 2);
AddBullet("评估维度是否对应实际工作场景");
AddBullet("话术是否自然、可操作");
AddBullet("日志模板是否足够简洁");

// Module 5
AddHeading("模块五：五步优化法与整合编排", 2);
AddParagraph("建议时长：两天版120分钟 / 三天版240分钟");

AddHeading("5.1 教学目的", 2);
AddParagraph("运用五步优化法对带教手册进行结构性优化，完成快速上手指南编写、整合编排和组间互评。");

AddHeading("5.2 讲授逻辑", 2);
AddParagraph("第一步：共鸣唤醒（让人愿意读）");
AddBullet("手册开篇先描述真实困境，让读者觉得「这说的就是我的处境」");
AddBullet("核心句式：「你是不是也遇到过这种情况——」");

AddParagraph("第二步：场景还原（让人看懂）");
AddBullet("把抽象的带教建议转化为带教人能看见的具体教学画面");
AddBullet("三要素：具体动作、数量/条件、判断标准");

AddParagraph("第三步：原理透传（让人信服）");
AddBullet("不只告诉「怎么教」，还要讲清楚「为什么这样教有效」");
AddBullet("用大白话解释，不用学术术语");

AddParagraph("第四步：行动锚点（让人会用）");
AddBullet("各章节末尾设计「带教自查」问题");
AddBullet("提炼核心带教口诀（8字以内）");

AddParagraph("第五步：价值升华（让人记住）");
AddBullet("手册结尾不是「祝带教顺利」，而是让带教人理解这件事的意义");

AddParagraph("整合编排与组间互评：");
AddBullet("统一格式规范，确认编排顺序");
AddBullet("组间交叉评审：用「没带过人的普通人」视角检验");

AddHeading("5.3 关键点", 2);
AddBullet("五步优化不改变核心内容，只改变呈现方式");
AddBullet("整合阶段不重写内容，目标 是「完整」而非「完美」");
AddBullet("评审要具体到「翻到第X页，建议改成...」");

// Chapter 4: 讲师资源库
AddHeading("第四章 讲师资源库", 1);

AddHeading("4.1 讲师工具清单", 2);
AddTable(new[,] {
    {"工具类型", "工具名称", "使用时机", "存放位置" },
    {"定位工具", "带教手册定位表", "模块二开始", "学员材料包" },
    {"萃取工具", "三类人群访谈清单", "模块二访谈环节", "学员材料包" },
    {"生成工具", "AI提示词模板集", "模块三、四", "电子资源包" },
    {"优化工具", "五步优化法检核表", "模块五", "学员材料包" },
    {"评审工具", "组间互评记录表", "模块五", "学员材料包" }
}, new double[] { 0.15, 0.25, 0.3, 0.2 });

AddHeading("4.2 优质样例清单", 2);
AddBullet("起点评估表样例：评估问题、判断标准、策略建议");
AddBullet("话术卡样例：四类场景（布置任务/纠错反馈/正向激励/困难沟通）");
AddBullet("检查表样例：每阶段一张，包含必教内容和里程碑验收");
AddBullet("日志模板样例：每日版和每周版");
AddBullet("成功/失误/因材施教案例样例各一个");
AddBullet("「伪带教手册」反面样例三种");

AddHeading("4.3 AI提示词模板", 2);
AddParagraph("全景图生成提示词：");
AddParagraph("请根据以下带教内容素材，生成一份《XX岗位带教内容全景图》。包含：技能清单与分类、依赖关系说明、优先级排序、并行教学识别、关键里程碑技能标注。");

AddParagraph("大纲生成提示词：");
AddParagraph("请根据以下信息，生成一份《XX岗位带教手册》设计方案和三级大纲。一级大纲以阶段划分为主线；三级大纲每个模块必须包含：教学目标、教法选择、示范要点、练习设计、常见错误与纠正、验收标准。");

AddParagraph("工具包生成提示词：");
AddParagraph("请根据以下信息，生成一套《XX岗位带教工具包》初稿，包含六种工具：起点评估工具（5-8个问题）、分阶段带教检查表、带教话术卡（四类场景）、日志模板、阶段评估表、常见问题速查表（8-10个问题）。");

AddHeading("4.4 课后任务清单模板", 2);
AddTable(new[,] {
    {"任务类型", "任务描述", "配套提示词", "建议完成时间" },
    {"五步优化落地", "按待优化清单逐章补充共鸣段落、场景还原、原理说明", "使用模块三提供的提示词模板", "两周内" },
    {"差异化策略完善", "检查所有章节的具体差异化标注", "对照定位表补充", "两周内" },
    {"话术卡精修", "对着实际使用场景逐条打磨话术", "请有经验者对练验证", "一个月内" },
    {"速查表补全", "根据试用中新遇到的问题补充条目", "第一次试用后更新", "一个月内" },
    {"排版定稿", "统一标题层级、字体、表格格式", "使用Word排版工具", "两周内" }
}, new double[] { 0.2, 0.3, 0.25, 0.15 });

// Chapter 5: 附录
AddHeading("第五章 附录", 1);

AddHeading("附录A：PPT备注要点", 2);
AddParagraph("封面页：课程名称、适用对象、版本信息");
AddParagraph("每个模块开始页：模块名称、时长、学习目标");
AddParagraph("每个要点页：关键论述、案例/数据支持");
AddParagraph("每个练习页：练习要求、时间提示、产出说明");
AddParagraph("每个总结页：本模块要点回顾、过渡到下一模块的说明");

AddHeading("附录B：道具清单", 2);
AddTable(new[,] {
    {"道具类型", "具体物品", "数量", "备注" },
    {"纸质材料", "学员材料包（定位表、访谈清单、练习模板）", "按学员人数", "课前3天打印" },
    {"纸质材料", "组间互评记录表", "按组数", "课前3天打印" },
    {"纸质材料", "五步优化法检核表", "按学员人数", "课前3天打印" },
    {"电子材料", "AI提示词模板集", "U盘/邮件", "课前1周准备" },
    {"电子材料", "优质样例集", "U盘/邮件", "课前1周准备" },
    {"设备", "录音设备", "按组数", "手机即可" },
    {"设备", "投影/大屏", "按场地", "确保每组能看到" },
    {"文具", "大白纸/白板", "按组数", "记录讨论要点" }
}, new double[] { 0.2, 0.35, 0.15, 0.2 });

AddHeading("附录C：质量红线清单", 2);
AddParagraph("带教手册特有的质量风险，必须重点关注：");
AddBullet("只写了「教什么」没写「怎么教」：最常见偏差，必须包含教法选择和演示/练习设计");
AddBullet("没有评估验收标准：每个阶段必须有可观察、可衡量的验收标准");
AddBullet("差异化停留在口号：必须具体到「在这个环节怎么调整」");
AddBullet("话术不自然：必须让带教人念出来不觉得别扭");
AddBullet("工具太复杂：记录工具必须5分钟内能填完");
AddBullet("忽略带教关系管理：需要覆盖建立信任、给反馈、处理冲突等软技能");

AddHeading("附录D：课后支持体系", 2);
AddParagraph("后续迭代方法：");
AddBullet("版本管理建议：版本号+更新记录");
AddBullet("定期更新触发条件：岗位技能要求变化、带教人反馈、学员类型变化、公司制度调整");
AddBullet("使用反馈收集方法：带教结束后填写简短反馈表");

AddParagraph("与实际带教工作的衔接：");
AddBullet("带教启动会上导入手册：让带教人和学员都了解手册");
AddBullet("手册使用频率：关键节点查阅，不是每天翻");
AddBullet("与岗位操作手册协同：带教手册教「怎么教」，岗位操作手册教「怎么做」");

// Final paragraph
AddSeparator();
AddParagraph("本手册版本：V1.0 | 更新日期：2026年6月 | 归口：内部培训部");
AddParagraph("如有问题，请联系课程开发团队。");

// Save document
mainPart.Document.Save();
Console.WriteLine($"Document created: {outputPath}");
