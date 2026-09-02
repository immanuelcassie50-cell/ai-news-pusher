using DocumentFormat.OpenXml;
using DocumentFormat.OpenXml.Packaging;
using DocumentFormat.OpenXml.Wordprocessing;

string outputPath = args.Length > 0 ? args[0] : "D:/CC/temp/讲师手册_绩效支持工具萃取与定制输出.docx";

// Create document
using var doc = WordprocessingDocument.Create(outputPath, WordprocessingDocumentType.Document);
var mainPart = doc.AddMainDocumentPart();
mainPart.Document = new Document(new Body());

var body = mainPart.Document.Body!;

// Set page settings
var sectPr = new SectionProperties(
    new PageSize { Width = 11906, Height = 16838 }, // A4
    new PageMargin { Top = 1440, Right = 1440, Bottom = 1440, Left = 1440, Header = 720, Footer = 720 }
);

// Helper functions
Paragraph MakeHeading(string text, int level) {
    var p = new Paragraph();
    var pPr = new ParagraphProperties(new ParagraphStyleId { Val = $"Heading{level}" });
    p.Append(pPr);
    var run = new Run(new Text(text));
    p.Append(run);
    return p;
}

Paragraph MakePara(string text, bool bold = false, string? color = null) {
    var p = new Paragraph();
    var run = new Run();
    var rPr = new RunProperties();
    if (bold) rPr.Append(new Bold());
    if (color != null) rPr.Append(new Color { Val = color });
    run.Append(rPr);
    run.Append(new Text(text));
    p.Append(run);
    return p;
}

Paragraph MakeBullet(string text, bool instructor = false, string? instructorText = null) {
    var p = new Paragraph();
    var pPr = new ParagraphProperties(new NumberingProperties(
        new NumberingLevelReference { Val = 0 },
        new NumberingId { Val = 1 }
    ));
    p.Append(pPr);

    if (instructor && instructorText != null) {
        var run1 = new Run();
        var rPr1 = new RunProperties(new Bold(), new Color { Val = "C00000" });
        run1.Append(rPr1);
        run1.Append(new Text($"[讲师] ") { Space = SpaceProcessingModeValues.Preserve });
        p.Append(run1);

        var run2 = new Run();
        var rPr2 = new RunProperties(new Italic(), new Color { Val = "0066CC" });
        run2.Append(rPr2);
        run2.Append(new Text(instructorText));
        p.Append(run2);
    } else {
        var run = new Run(new Text(text));
        p.Append(run);
    }
    return p;
}

Table MakeTimeTable() {
    var tbl = new Table();
    var tblPr = new TableProperties(
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
    tbl.Append(tblPr);

    var tblGrid = new TableGrid();
    tbl.Append(tblGrid);

    // Header row
    var headerRow = new TableRow();
    headerRow.Append(new TableCell(new Paragraph(new Run(new RunProperties(new Bold()), new Text("模块")))));
    headerRow.Append(new TableCell(new Paragraph(new Run(new RunProperties(new Bold()), new Text("建议时长")))));
    headerRow.Append(new TableCell(new Paragraph(new Run(new RunProperties(new Bold()), new Text("最多不超过")))));
    headerRow.Append(new TableCell(new Paragraph(new Run(new RunProperties(new Bold()), new Text("关键产出")))));
    tbl.Append(headerRow);

    // Data rows
    string[,] rows = {
        { "热身", "30min", "40min", "判断工具好坏的三个标准" },
        { "模块一：需求诊断", "90min", "100min", "填好的需求诊断卡" },
        { "模块二：专家访谈与内容萃取", "60min", "70min", "四格萃取框架记录" },
        { "模块三：工具选型", "60min", "70min", "确定的工具类型" },
        { "模块四：工具语言怎么写", "90min", "100min", "工具内容初稿" },
        { "模块五：动手制作+互评", "90min", "不压缩", "工具成品第一版" },
        { "模块六：验证与迭代", "30min", "不压缩", "验证计划" },
        { "收尾", "30min", "不压缩", "行动承诺卡" }
    };

    for (int i = 0; i < rows.GetLength(0); i++) {
        var row = new TableRow();
        row.Append(new TableCell(new Paragraph(new Run(new Text(rows[i, 0])))));
        row.Append(new TableCell(new Paragraph(new Run(new Text(rows[i, 1])))));
        row.Append(new TableCell(new Paragraph(new Run(new Text(rows[i, 2])))));
        row.Append(new TableCell(new Paragraph(new Run(new Text(rows[i, 3])))));
        tbl.Append(row);
    }

    return tbl;
}

// ==================== COVER PAGE ====================
body.Append(new Paragraph()); // spacer
body.Append(new Paragraph()); // spacer
body.Append(MakePara("绩效支持工具萃取与定制输出", true, "1F4E79"));
body.Append(MakePara("线下工作坊 · 讲师手册", false, "1F4E79"));
body.Append(new Paragraph());
body.Append(new Paragraph());
body.Append(MakePara("国际版权课讲师手册标准版", false, "666666"));
body.Append(new Paragraph());
body.Append(new Paragraph());
body.Append(MakePara("课程时长：一天（6.5小时有效教学时间）", false));
body.Append(MakePara("目标学员：业务骨干、岗位专家、知识萃取者", false));
body.Append(MakePara("教学方式：情境沉浸 + 刻意练习 + 真实产出", false));
body.Append(new Paragraph());
body.Append(new Paragraph());
body.Append(MakePara("讲师手册版本", false, "999999"));
body.Append(MakePara("本手册为讲师执行标准版本，包含完整的模块设计、", false));
body.Append(MakePara("讲师引导话术、时间标记和注意事项。", false));

// Page break
body.Append(new Paragraph(new Run(new Break { Type = BreakValues.Page })));

// ==================== TABLE OF CONTENTS ====================
body.Append(MakeHeading("目 录", 1));
body.Append(new Paragraph(new Run(new RunProperties(new Bold()), new Text("一、讲师手册使用说明"))));
body.Append(new Paragraph(new Run(new RunProperties(new Bold()), new Text("二、课程概述与设计理念"))));
body.Append(new Paragraph(new Run(new RunProperties(new Bold()), new Text("三、讲师执行注意事项"))));
body.Append(new Paragraph(new Run(new RunProperties(new Bold()), new Text("四、时间分配建议表"))));
body.Append(new Paragraph(new Run(new RunProperties(new Bold()), new Text("五、各模块详细设计"))));
body.Append(new Paragraph(new Run(new RunProperties(new Bold()), new Text("   热身（30分钟）"))));
body.Append(new Paragraph(new Run(new RunProperties(new Bold()), new Text("   模块一：需求诊断（90分钟）"))));
body.Append(new Paragraph(new Run(new RunProperties(new Bold()), new Text("   模块二：专家访谈与内容萃取（60分钟）"))));
body.Append(new Paragraph(new Run(new RunProperties(new Bold()), new Text("   模块三：工具选型（60分钟）"))));
body.Append(new Paragraph(new Run(new RunProperties(new Bold()), new Text("   模块四：工具语言怎么写（90分钟）"))));
body.Append(new Paragraph(new Run(new RunProperties(new Bold()), new Text("   模块五：动手制作+互评（90分钟）"))));
body.Append(new Paragraph(new Run(new RunProperties(new Bold()), new Text("   模块六：验证与迭代（30分钟）"))));
body.Append(new Paragraph(new Run(new RunProperties(new Bold()), new Text("   收尾（30分钟）"))));
body.Append(new Paragraph(new Run(new RunProperties(new Bold()), new Text("六、配套工具包清单"))));
body.Append(new Paragraph(new Run(new RunProperties(new Bold()), new Text("七、常见问题处理"))));
body.Append(new Paragraph(new Run(new RunProperties(new Bold()), new Text("八、附录"))));

// Page break
body.Append(new Paragraph(new Run(new Break { Type = BreakValues.Page })));

// ==================== SECTION 1: INSTRUCTOR MANUAL USAGE ====================
body.Append(MakeHeading("一、讲师手册使用说明", 1));
body.Append(MakeHeading("1.1 手册结构", 2));
body.Append(MakePara("本手册按照课程时间线组织，从开场到收尾，每一模块包含："));
body.Append(MakeBullet("模块目标：本模块结束时要达成的学员产出"));
body.Append(MakeBullet("时间分配：建议时长和最长时限"));
body.Append(MakeBullet("详细设计：完整的活动流程和引导步骤"));
body.Append(MakeBullet("讲师话术：可供参考的引导语言（用不同颜色标注）"));
body.Append(MakeBullet("注意事项：常见问题和应对方式"));

body.Append(MakeHeading("1.2 颜色标注说明", 2));
body.Append(MakePara("[红色] 讲师关键话术 - 需要讲师直接说出的话"));
body.Append(MakePara("[蓝色] 讲师引导提示 - 讲师应该注意的时机和方式"));
body.Append(MakePara("[紫色] 常见问题应对 - 学员可能提出的疑问和回应方式"));

body.Append(MakeHeading("1.3 使用原则", 2));
body.Append(MakeBullet("话术仅供参考：讲师应根据现场实际情况调整表达方式"));
body.Append(MakeBullet("时间是上限：标注「最多不超过」的时间是硬上限，不得超出"));
body.Append(MakeBullet("产出优先：讨论和活动的产出比完整性更重要，宁可做完不要做满"));
body.Append(new Paragraph(new Run(new Break { Type = BreakValues.Page })));

// ==================== SECTION 2: COURSE OVERVIEW ====================
body.Append(MakeHeading("二、课程概述与设计理念", 1));
body.Append(MakeHeading("2.1 课程背景", 2));
body.Append(MakePara("很多人做绩效支持工具，第一步就错了。"));
body.Append(MakePara("他们花了大量时间整理课件、找模板、做PPT，最后交出一份「工具」——打开一看，是一篇800字的操作说明。没人用，没人看，压在共享盘里吃灰。"));
body.Append(MakePara("问题不在于态度不认真，而在于从一开始就没搞清楚：工具不是用来教人的，是用来在对的时候帮人做对事的。"));

body.Append(MakeHeading("2.2 学员画像", 2));
body.Append(MakePara("本课程的典型学员特征："));
body.Append(MakeBullet("业务骨干，有实际工作经验但非培训专业背景"));
body.Append(MakeBullet("有做工具的经验，但做出来的工具没人用"));
body.Append(MakeBullet("上过培训师认证课，但感觉理论和实际脱节"));
body.Append(MakeBullet("核心疑问：「这次会不会又是听完有道理、回去没法用？」"));

body.Append(MakeHeading("2.3 三个核心认知误区", 2));
body.Append(MakePara("学员在来上课之前，通常有三个认知误区："));
body.Append(MakeBullet("误区一：做工具 = 整理知识", true, "把知识点归纳好就是好工具"));
body.Append(MakeBullet("误区二：内容越全越好", true, "怕遗漏所以什么都往里塞"));
body.Append(MakeBullet("误区三：专家说的 = 员工需要的", true, "把专家的话原样整理进去"));

body.Append(MakeHeading("2.4 设计理念", 2));
body.Append(MakeBullet("上午建认知，下午动手做 - 认知不对，动手越努力越偏"));
body.Append(MakeBullet("每个模块有一个「转折点」- 让学员自己发现错了"));
body.Append(MakeBullet("每个模块结束有具体产出 - 不是笔记，是工具素材的一部分"));
body.Append(new Paragraph(new Run(new Break { Type = BreakValues.Page })));

// ==================== SECTION 3: INSTRUCTOR NOTES ====================
body.Append(MakeHeading("三、讲师执行注意事项", 1));
body.Append(MakeHeading("3.1 节奏控制", 2));
body.Append(MakePara("[红色] 核心原则：下午14:00必须进入模块四，无论上午讲到哪里。"));
body.Append(MakePara("如果来不及，压缩模块三的讨论，不压缩模块四和五。产出比讨论重要。"));
body.Append(new Paragraph());

body.Append(MakePara("全天节奏最大的风险是：上午讲多了，下午没时间做。"));
body.Append(MakePara("[蓝色] 建议：每个模块结束时看一眼时间，如果超时立即进入下一模块，不要恋战。"));

body.Append(MakeHeading("3.2 学员状态管理", 2));
body.Append(MakePara("最容易出现的状态：下午13:30~14:30，饭后困倦，加上模块四是纯内容输入，容易脱离。"));
body.Append(MakePara("[红色] 处理方式：模块四必须穿插大量「当场改写」的练习，不要大段讲完再练。"));
body.Append(MakePara("节奏要快，每个小练习不超过5分钟。讲一条规则、立刻练一条、分享一次。"));

body.Append(MakeHeading("3.3 对非培训专业背景学员的处理", 2));
body.Append(MakePara("业务骨干来上课，最大的心理障碍是：「这是培训的事，跟我关系不大。」"));
body.Append(MakePara("[红色] 讲师要从第一分钟开始打破这个心理："));
body.Append(MakePara("「今天我们做的事情，不是在教你怎么做培训。你是最了解你的业务场景的人，你才能做出真正有用的工具。培训科班出身的人，反而做不出来——他们不在现场，不知道真正卡在哪里。」"));
body.Append(MakePara("贯穿全天反复强调：好工具的核心原料是业务知识，不是培训技能。"));

body.Append(MakeHeading("3.4 关键时机提醒", 2));
body.Append(MakeBullet("热身结束：确认学员已经理解「工具和课件是两种东西」"));
body.Append(MakeBullet("模块一结束：确认每个学员都有自己确定的场景"));
body.Append(MakeBullet("模块二结束：确认四格框架都被填满"));
body.Append(MakeBullet("模块三结束：确认工具类型已选定"));
body.Append(MakeBullet("模块四结束：确认工具有内容初稿"));
body.Append(MakeBullet("模块五结束：确认有第一版成品"));
body.Append(new Paragraph(new Run(new Break { Type = BreakValues.Page })));

// ==================== SECTION 4: TIME ALLOCATION ====================
body.Append(MakeHeading("四、时间分配建议表", 1));
body.Append(MakePara("以下时间分配为标准设置，实际执行时可根据现场情况微调，但「不压缩」栏目不得突破。"));
body.Append(new Paragraph());
body.Append(MakeTimeTable());
body.Append(new Paragraph());
body.Append(MakePara("[蓝色] 提示：午休前不要拖堂。12:00准时结束，让学员休息。下午13:00准时开始。", true));
body.Append(new Paragraph(new Run(new Break { Type = BreakValues.Page })));

// ==================== SECTION 5: MODULE DESIGNS ====================
body.Append(MakeHeading("五、各模块详细设计", 1));

// ----- WARM UP -----
body.Append(MakeHeading("热身（30分钟）", 2));
body.Append(MakePara("[模块目标] 让学员承认「我做的工具可能没人用」，然后产生好奇：那什么样的工具有人用？"));
body.Append(MakePara("[时间分配] 开场活动10分钟 + 建立标准20分钟"));
body.Append(new Paragraph());

body.Append(MakeHeading("开场活动（10分钟）", 3));
body.Append(MakePara("[红色] 讲师说："));
body.Append(MakePara("「每人回想并写下：你做过或见过的一个绩效支持工具，可以是清单、速查表、Excel、流程图任何形式。」"));
body.Append(MakePara("「然后回答两个问题：这个工具，上周有人主动打开过吗？如果有人打开，他们找到了想要的东西吗？」"));
body.Append(new Paragraph());
body.Append(MakePara("[蓝色] 操作方式：不用说答案，举手就好。"));
body.Append(MakePara("两个都是「是」的举手。只一个「是」的举手。两个都不确定的举手。"));
body.Append(MakePara("通常，两个都是「是」的人寥寥无几。"));
body.Append(new Paragraph());
body.Append(MakePara("[红色] 讲师说："));
body.Append(MakePara("「这不是你们的问题。这是因为没有人教过我们，工具和课件是两种完全不同的东西，设计逻辑从根上就不一样。今天我们要解决的，就是这个问题。」"));

body.Append(MakeHeading("建立判断标准（20分钟）", 3));
body.Append(MakePara("展示三个工具，让学员投票：哪个是「好工具」？"));
body.Append(new Paragraph());
body.Append(MakePara("工具A：一分2页的「零售门店收银操作规范」，包含背景说明、注意事项、详细步骤图解，内容非常完整。"));
body.Append(MakePara("工具B：一张收银台旁边的小卡片，正面5个步骤，背面3个常见错误+解决方法，字够大，一眼能看清。"));
body.Append(MakePara("工具C：一个Excel文件，输入购买金额，自动计算积分和优惠。"));
body.Append(new Paragraph());
body.Append(MakePara("[蓝色] 投票后，讲师引出三个维度："));
body.Append(MakePara("[红色] 讲师说："));
body.Append(MakePara("「好工具不靠『全』，靠『在对的时候帮人做对事』。」"));
body.Append(MakePara("「用这三个问题来判断：」"));
body.Append(MakePara("「用户在需要它的那一刻，能在30秒内找到吗？」"));
body.Append(MakePara("「找到之后，不需要解释就能用吗？」"));
body.Append(MakePara("「用完之后，操作结果是对的吗？」"));
body.Append(MakePara("「三个都是『是』，才算好工具。」"));
body.Append(new Paragraph());
body.Append(MakePara("[蓝色] 注意：不要在这里讲太多理论。投票，讨论，给出标准，结束。留悬念：怎么做出这样的工具？等下午。"));

// ----- MODULE 1 -----
body.Append(new Paragraph(new Run(new Break { Type = BreakValues.Page })));
body.Append(MakeHeading("模块一：需求诊断（90分钟）", 2));
body.Append(MakePara("[模块目标] 一张填好的「需求诊断卡」，里面写着学员自己工作场景中最值得做工具的需求。"));
body.Append(MakePara("[核心问题] 哪些场景值得做工具？哪些不值得？"));
body.Append(new Paragraph());

body.Append(MakeHeading("1.1 工具需求的四个触发信号（20分钟）", 3));
body.Append(MakePara("[红色] 讲师开场说："));
body.Append(MakePara("「工具做多了没用，比工具没做更浪费。今天我们先学会——什么场景不做工具，是对的。」"));
body.Append(new Paragraph());
body.Append(MakePara("四个信号："));
body.Append(MakeBullet("信号一：频率高 - 同样的问题，一个月内被问超过三次"));
body.Append(MakeBullet("信号二：风险高 - 做错了，代价大"));
body.Append(MakeBullet("信号三：变化快 - 规则三个月改一次"));
body.Append(MakeBullet("信号四：新手多 - 新人集中入职期或流动率高"));
body.Append(new Paragraph());
body.Append(MakePara("[蓝色] 这四个信号不是非此即彼，一个场景可能同时满足多个。满足越多，越值得优先做工具。"));

body.Append(MakeHeading("1.2 需求优先级判断：双维矩阵（20分钟）", 3));
body.Append(MakePara("用两个维度判断优先级：横轴是发生频率，纵轴是出错代价。"));
body.Append(MakeBullet("高代价+高频 = 必须做"));
body.Append(MakeBullet("高代价+低频 = 优先做"));
body.Append(MakeBullet("低代价+高频 = 考虑做"));
body.Append(MakeBullet("低代价+低频 = 先放着"));
body.Append(new Paragraph());
body.Append(MakePara("[蓝色] 落在「必须做」区间的例子：ICU护士每次用药的剂量核算、银行柜员每次开户的身份核验。"));

body.Append(MakeHeading("1.3 容易踩的坑（15分钟）", 3));
body.Append(MakePara("[红色] 讲师要专门讲这个坑："));
body.Append(MakePara("「最常见的错误：把『学习需求』当『工具需求』。这是整个需求诊断环节最重要的判断。」"));
body.Append(new Paragraph());
body.Append(MakePara("场景举例：某工厂品质主管说新人上岗后不认真做首件检验，想做一张操作卡。"));
body.Append(MakePara("[蓝色] 引导学员讨论：这是工具需求吗？"));
body.Append(new Paragraph());
body.Append(MakePara("答案：不是。这是学习需求。员工不是不知道怎么检，是不理解为什么要检。"));
body.Append(MakePara("[红色] 判断口诀："));
body.Append(MakePara("如果问题的根源是「不知道为什么」，用培训。"));
body.Append(MakePara("如果问题的根源是「知道为什么，但在现场想不起来怎么做」，用工具。"));

body.Append(MakeHeading("1.4 活动：需求诊断练习（25分钟）", 3));
body.Append(MakePara("[蓝色] 发放「需求诊断卡」（配套工具包第1张）"));
body.Append(MakePara("三个场景描述："));
body.Append(MakeBullet("场景A（零售）：便利店早班收银员备用金清点，流程7步，但经常填错格式或遗漏步骤"));
body.Append(MakeBullet("场景B（医疗）：护士不知道怎么跟家属解释知情同意书的内容"));
body.Append(MakeBullet("场景C（金融）：客户经理记不住理财产品参数，每次都要查后台系统"));
body.Append(new Paragraph());
body.Append(MakePara("[蓝色] 学员任务：判断三个场景哪个是工具需求、哪个是学习需求、哪个两者都有。"));
body.Append(new Paragraph());
body.Append(MakePara("[红色] 标准答案（讲师引导用）："));
body.Append(MakePara("场景A：工具需求。员工知道要做，不知道具体格式和步骤，一张操作卡片解决问题。"));
body.Append(MakePara("场景B：学习需求。根本问题是没受过沟通训练，工具兜不住。"));
body.Append(MakePara("场景C：工具需求。知识记不住是正常的，不该靠记，做一份随时可查的产品对比速查表。"));
body.Append(new Paragraph());
body.Append(MakePara("[红色] 活动结束语："));
body.Append(MakePara("「判断对了，你就省下了至少一半的冤枉功夫。很多工具没人用，不是做得不好，是从一开始就做了不该做的东西。」"));

// ----- MODULE 2 -----
body.Append(new Paragraph(new Run(new Break { Type = BreakValues.Page })));
body.Append(MakeHeading("模块二：专家访谈与内容萃取（60分钟）", 2));
body.Append(MakePara("[模块目标] 一份「四格萃取框架」记录，里面有访谈对象的真实操作智慧。"));
body.Append(MakePara("[核心问题] 确定了要做工具，内容从哪来？"));
body.Append(new Paragraph());

body.Append(MakeHeading("2.1 专家脑子里有什么你还没问到（10分钟）", 3));
body.Append(MakePara("[红色] 讲师说："));
body.Append(MakePara("「答案不在你脑子里，在那些每天做这件事的人身上。问题是，你要知道怎么问，才能问出真正有用的东西。」"));
body.Append(new Paragraph());
body.Append(MakePara("做了20年销售的老王，他的经验是真实存在的。但如果你问他「你怎么判断客户要不要」，他会说「感觉嘛，做久了就有感觉了」。"));
body.Append(MakePara("[蓝色] 这不是他在敷衍，是因为高度熟练的技能会自动化，当事人自己也说不清楚判断依据是什么。"));
body.Append(MakePara("真正有价值的，是他脑子里那些具体的判断节点——哪个时刻他会感到「不对」，他的眼神会落在哪里，他会追问什么。"));

body.Append(MakeHeading("2.2 四种核心问法（15分钟）", 3));
body.Append(MakeBullet("[红色] 问法一：关键事件", true, "帮我想一个案例——一次做得特别顺的，或者一次差点出错但被你救回来的。能跟我说说吗？"));
body.Append(MakeBullet("[红色] 问法二：此刻你在想什么", true, "你刚才说你看了一眼觉得不对那个时候你脑子里在想什么？你注意到了什么？"));
body.Append(MakeBullet("[红色] 问法三：失误场景还原", true, "新手最容易在哪个地方出错？你见过最典型的一次失误是什么样的？"));
body.Append(MakeBullet("[红色] 问法四：如果我是新手", true, "如果一个刚上岗三天的新人来做这件事，你希望他在做之前先知道哪几件事？"));
body.Append(new Paragraph());
body.Append(MakePara("[蓝色] 不要问「你一般怎么做」。「一般」会让人说废话。具体的案例，会把真实的操作逻辑带出来。"));

body.Append(MakeHeading("2.3 整理萃取内容的四格框架（10分钟）", 3));
body.Append(MakePara("访谈结束后，把内容往四个格子里归："));
body.Append(MakeBullet("格子一：关键步骤 - 做这件事，不能省略的步骤是哪几个？（通常不超过9步）"));
body.Append(MakeBullet("格子二：判断节点 - 在哪几个时刻，需要做出判断？判断的依据是什么？"));
body.Append(MakeBullet("格子三：常见错误 - 新手最容易在哪里犯错？错了之后的表现是什么？"));
body.Append(MakeBullet("格子四：例外情况 - 什么情况下标准流程不适用？遇到例外怎么处理？"));
body.Append(new Paragraph());
body.Append(MakePara("[红色] 讲师说："));
body.Append(MakePara("「访谈记录整理完，先不要急着做工具。把内容分进这四个格子，哪个格子是空的，说明你还没问够，再回去补问。四个格子都满了，你的工具内容就有了基础。」"));

body.Append(MakeHeading("2.4 活动：模拟萃取访谈（20分钟）", 3));
body.Append(MakePara("两人一组。一人扮演「业务专家」，用自己真实的工作场景，一人扮演「萃取者」，用四种问法进行访谈，时间10分钟。"));
body.Append(MakePara("结束后，萃取者用四格框架整理，检查哪个格子空着，还需要问什么。互换角色，再来一轮。"));
body.Append(new Paragraph());
body.Append(MakePara("[蓝色] 讲师观察要点：萃取者是否在追问「那个时候你脑子里在想什么」，还是停在「你一般怎么做」。前者才能挖出真正有用的内容。"));

// ----- MODULE 3 -----
body.Append(new Paragraph(new Run(new Break { Type = BreakValues.Page })));
body.Append(MakeHeading("模块三：工具选型（60分钟）", 2));
body.Append(MakePara("[模块目标] 确定学员要做的工具类型——是用操作卡、判断树、Excel，还是组合？"));
body.Append(MakePara("[核心问题] 这个场景，应该做什么类型的工具？"));
body.Append(new Paragraph());

body.Append(MakeHeading("3.1 先问三个问题，再选工具（15分钟）", 3));
body.Append(MakePara("在看工具类型之前，先问清楚这个场景的三个基本属性："));
body.Append(MakeBullet("问题一：用户在什么时候用它？操作开始前/操作过程中/遇到问题时"));
body.Append(MakeBullet("问题二：用户在什么环境下用它？有电脑/在生产线旁/在客户面前"));
body.Append(MakeBullet("问题三：内容是什么类型的？步骤型/判断型/计算型/关系型"));
body.Append(new Paragraph());

body.Append(MakeHeading("3.2 工具类型与场景的匹配逻辑（20分钟）", 3));
body.Append(MakeBullet("工作指导卡/操作速查表 - 适合步骤型内容，频繁执行，用户在操作中对照使用"));
body.Append(MakeBullet("决策支持工具（决策树/判断矩阵） - 适合判断型内容，输入条件不同结果不同"));
body.Append(MakeBullet("错误防范清单 - 适合高风险操作，已知的常见错误有固定模式"));
body.Append(MakeBullet("Excel计算工具 - 适合计算型内容，有固定公式，需要输入数据得出结果"));
body.Append(MakeBullet("流程图/决策树（可视化版） - 适合关系型内容，流程分支多，用于培训前理解"));
body.Append(new Paragraph());
body.Append(MakePara("[蓝色] 一个场景可能需要不止一个工具。工具不是越多越好，但「一个工具装所有内容」通常是最糟糕的方案。"));

body.Append(MakeHeading("3.3 活动：工具选型练习（15分钟）", 3));
body.Append(MakePara("[蓝色] 发放「选型决策卡」（配套工具包第2张）"));
body.Append(MakePara("学员完成三步：用三个问题分析场景 → 写出推荐的工具类型 → 说明是否需要多个工具配合。"));
body.Append(new Paragraph());
body.Append(MakePara("[蓝色] 小组代表分享，讲师点评选型逻辑，重点不是「对不对」，而是「理由够不够清楚」。"));

// ----- MODULE 4 -----
body.Append(new Paragraph(new Run(new Break { Type = BreakValues.Page })));
body.Append(MakeHeading("模块四：工具语言怎么写（90分钟）", 2));
body.Append(MakePara("[模块目标] 一段用「工具语言」写出来的内容——可以放进工具的初稿。"));
body.Append(MakePara("[核心问题] 有了内容，为什么写出来还是没人用？"));
body.Append(new Paragraph());

body.Append(MakeHeading("4.1 工具语言和正常写作的根本区别（10分钟）", 3));
body.Append(MakePara("[红色] 讲师说："));
body.Append(MakePara("「你可能写的每一个字都是对的，但如果用户在用的时候要停下来想一下，这个工具就已经失败了。」"));
body.Append(new Paragraph());
body.Append(MakePara("大多数人写东西，是训练出来写「给人读的文字」——有逻辑、有铺垫、有解释。"));
body.Append(MakePara("工具语言不是用来读的，是用来在操作中扫一眼就能执行的。"));
body.Append(new Paragraph());
body.Append(MakePara("[蓝色] 对比示例："));
body.Append(MakePara("普通写法：「在进行静脉采血操作之前，护士需要对患者进行身份确认...」"));
body.Append(MakePara("工具语言：「1. 核对患者姓名+腕带（出声说+眼睛看）」"));
body.Append(MakePara("同样的内容，第一种要读完再执行，第二种边做边对照。"));

body.Append(MakeHeading("4.2 工具语言的六条写作规则（30分钟）", 3));
body.Append(MakeBullet("[红色] 规则一：动词开头", true, "不写「注意核对信息」，写「核对患者姓名与腕带」。「注意」「确保」「关注」全部删掉。"));
body.Append(MakeBullet("[红色] 规则二：一句话只说一件事", true, "不写「检查设备状态并记录异常情况」，拆成两条。做完第一件就忘了第二件。"));
body.Append(MakeBullet("[红色] 规则三：判断条件用如果…则…格式", true, "不写「遇到特殊情况要灵活处理」，写「如果X，则Y」。「灵活处理」是废话。"));
body.Append(MakeBullet("[红色] 规则四：数字代替描述词", true, "不写「适量」，写「3~5滴」；不写「尽快」，写「15分钟内」。能量化的全部量化。"));
body.Append(MakeBullet("[红色] 规则五：层级不超过两层", true, "主条目是操作步骤，子条目是补充说明。第三层以上的嵌套，用户在操作中看不了。"));
body.Append(MakeBullet("[红色] 规则六：省略背景，从行动开始", true, "工具不需要解释「为什么这样做」。用户在操作中只需要知道「做什么」。"));
body.Append(new Paragraph());
body.Append(MakePara("[蓝色] 这个环节节奏要快。讲一条规则，立刻练一条，分享一次。不要大段讲完再练。"));

body.Append(MakeHeading("4.3 最容易写坏的地方：判断节点（15分钟）", 3));
body.Append(MakePara("步骤型内容容易写，但现实工作中充满了「遇到X情况怎么办」。这些判断节点如果没写进工具，工具在边界情况就会失效。"));
body.Append(new Paragraph());
body.Append(MakePara("[蓝色] 示例（金融：信用卡申请审核）："));
body.Append(MakePara("不完整的版本只有步骤，完整的版本需要加入判断节点："));
body.Append(MakePara("如身份证与系统信息不符→要求提供补充证明，暂停审核"));
body.Append(MakePara("如有逾期记录（近2年内）→进入人工复核通道"));
body.Append(MakePara("月收入≥申请额度30%→直接审批；<30%→降额后审批或拒批"));
body.Append(new Paragraph());
body.Append(MakePara("[红色] 判断节点是工具的真正价值所在。专家能处理边界情况，是因为他们脑子里有这些判断。工具要做的，是把这些判断显式化。"));

body.Append(MakeHeading("4.4 活动：改写练习（30分钟）", 3));
body.Append(MakePara("[蓝色] 发放「改写练习卡」（配套工具包第3张）"));
body.Append(MakePara("两段「专家原话」，学员任务是把它们改写成可以放进工具的内容，用上今天学的六条规则。"));
body.Append(new Paragraph());
body.Append(MakePara("原话A（制造业：涂装车间换色操作）：「换色之前一定要把管路冲干净...喷枪的压力要重新调一下...」"));
body.Append(MakePara("原话B（零售：门店投诉处理）：「遇到客户投诉，先不要急着解释...500块以内你自己可以处理...」"));
body.Append(new Paragraph());
body.Append(MakePara("小组对比改写版本，讨论：哪条规则最容易忘？哪个地方判断节点最关键？"));

// ----- MODULE 5 -----
body.Append(new Paragraph(new Run(new Break { Type = BreakValues.Page })));
body.Append(MakeHeading("模块五：动手制作+互评（90分钟）", 2));
body.Append(MakePara("[模块目标] 这是今天的核心产出环节。前面所有内容，都是为了这90分钟能做出真东西。"));
body.Append(new Paragraph());

body.Append(MakeHeading("5.1 制作前的准备（5分钟）", 3));
body.Append(MakePara("[红色] 讲师要反复强调："));
body.Append(MakePara("在开始制作之前，每个人对照检查："));
body.Append(MakeBullet("我的场景诊断完成了吗？（模块一的产出）"));
body.Append(MakeBullet("我的萃取记录四个格子都填了吗？（模块二的产出）"));
body.Append(MakeBullet("我的工具选型定了吗？一个工具还是多个？（模块三的产出）"));
body.Append(MakeBullet("我有粗略的内容草稿了吗？（模块四的改写练习）"));
body.Append(new Paragraph());
body.Append(MakePara("[红色] 如果有任何空缺，先补，再做。做工具不能从0开始——素材不够，做出来的工具一定是空架子。"));

body.Append(MakeHeading("5.2 各类工具的制作要点（20分钟）", 3));
body.Append(MakePara("操作指导卡/速查表要求："));
body.Append(MakeBullet("单面A4或A5，不得超过一页"));
body.Append(MakeBullet("字号不小于12pt，在实际使用环境要能一眼看清"));
body.Append(MakeBullet("右上角必须有：工具名称、适用场景、版本号、更新日期"));
body.Append(new Paragraph());
body.Append(MakePara("错误防范清单要求："));
body.Append(MakeBullet("每一条都是一个独立的可确认动作，有复选框□在左边"));
body.Append(MakeBullet("按操作顺序排列（用户在操作过程中逐条打钩，不是跳着看）"));
body.Append(new Paragraph());
body.Append(MakePara("Excel工具包要求："));
body.Append(MakeBullet("视觉上明确区分三个区域：输入区（浅蓝）/ 计算区（锁定+灰色）/ 输出区（加粗或绿色）"));
body.Append(new Paragraph());
body.Append(MakePara("决策支持工具（决策树）要求："));
body.Append(MakeBullet("最多4层判断，超过4层用户在现场会迷路"));
body.Append(MakeBullet("终点必须是行动指令，不能是「继续评估」或「视情况而定」"));

body.Append(MakeHeading("5.3 互评环节（30分钟）", 3));
body.Append(MakePara("制作完成后，两人交换工具，用「四问自检法」互评："));
body.Append(new Paragraph());
body.Append(MakeBullet("第一问：我能在30秒内理解这个工具是干什么用的吗？"));
body.Append(MakeBullet("第二问：我能在不问任何人的情况下，从头到尾完成一次完整操作吗？"));
body.Append(MakeBullet("第三问：遇到「不对劲」的情况，工具告诉我怎么办了吗？"));
body.Append(MakeBullet("第四问：这个工具有没有哪句话，我读了之后还是不知道该做什么？"));
body.Append(new Paragraph());
body.Append(MakePara("不是评分，是把发现的问题用便利贴写下来，贴在工具上，然后当面交流。"));
body.Append(new Paragraph());
body.Append(MakePara("[红色] 互评结束后，每人有15分钟修改第一版。"));

body.Append(MakeHeading("5.4 常见错误提醒（5分钟）", 3));
body.Append(MakeBullet("操作指导卡：为了「完整」塞进去背景说明，结果核心步骤被稀释"));
body.Append(MakeBullet("操作指导卡：步骤写得太粗，新手不知道检查什么、怎么检查、合格标准是什么"));
body.Append(MakeBullet("错误防范清单：写了「确保」「保证」类词语，这种词没有具体行为对应"));
body.Append(MakeBullet("Excel工具：公式和数据混在一起，用户不知道哪格能改哪格不能改"));

// ----- MODULE 6 -----
body.Append(new Paragraph(new Run(new Break { Type = BreakValues.Page })));
body.Append(MakeHeading("模块六：验证与迭代（30分钟）", 2));
body.Append(MakePara("[模块目标] 一个验证计划——什么时候、用什么方法、找谁来测试你的工具。"));
body.Append(MakePara("[核心问题] 做完了，怎么知道它真的有效？"));
body.Append(new Paragraph());

body.Append(MakeHeading("6.1 三种快速验证方法（15分钟）", 3));
body.Append(MakeBullet("方法一：五秒测试 - 找没参与过工具制作的同事，把工具给他看5秒盖住，问他这个工具是做什么用的"));
body.Append(MakeBullet("方法二：出声思考法 - 找真实目标用户，让他用工具完成操作，同时说出想法，你在旁边记录"));
body.Append(MakeBullet("方法三：对比数据 - 工具上线后对比前后的错误/问题发生频率"));
body.Append(new Paragraph());
body.Append(MakePara("[蓝色] 出声思考法是最有效的验证方法。一次出声思考，能发现3~5个真实的可用性问题。"));

body.Append(MakeHeading("6.2 如果用户说「用不上」（10分钟）", 3));
body.Append(MakePara("「用不上」有三种可能，解法不同："));
body.Append(MakeBullet("可能A：工具本身的问题（找不到、看不懂、用起来太麻烦）→ 解法：改工具"));
body.Append(MakeBullet("可能B：使用场景设计的问题（放错地方了）→ 解法：改工具的部署方式，不是改内容"));
body.Append(MakeBullet("可能C：这个需求本来就不是工具需求 → 解法：回模块一，重新诊断"));
body.Append(new Paragraph());
body.Append(MakePara("[红色] 「没人用」不等于「工具不好」。先找原因，再决定怎么改。"));

body.Append(MakeHeading("6.3 迭代的节奏（5分钟）", 3));
body.Append(MakeBullet("上线第一周：主动找2~3个用户做出声思考，收集第一手反馈，快速修订"));
body.Append(MakeBullet("上线一个月后：统计使用情况，是否有人反馈「这里不对了」"));
body.Append(MakeBullet("业务变化时：流程、规则、产品一旦变化，工具必须同步更新"));
body.Append(new Paragraph());
body.Append(MakePara("[红色] 工具上必须有版本号和更新日期。不是形式，是责任。过期工具比没有工具更危险。"));

// ----- CLOSING -----
body.Append(new Paragraph(new Run(new Break { Type = BreakValues.Page })));
body.Append(MakeHeading("收尾（30分钟）", 2));
body.Append(MakePara("[模块目标] 未来两周的具体行动计划。"));
body.Append(new Paragraph());

body.Append(MakeHeading("行动承诺（20分钟）", 3));
body.Append(MakePara("[蓝色] 发放「行动承诺卡」（配套工具包第6张）"));
body.Append(MakePara("学员填写："));
body.Append(MakeBullet("我要做的场景"));
body.Append(MakeBullet("我选择的工具类型"));
body.Append(MakeBullet("我打算在（日期）完成第一版"));
body.Append(MakeBullet("我的验证对象是谁"));
body.Append(new Paragraph());
body.Append(MakePara("[红色] 讲师说："));
body.Append(MakePara("「工具的价值在验证之后才能体现。现在就定好时间，不要说『回去再说』。」"));
body.Append(MakePara("「把行动承诺卡拍照，发给你的主管或者今天的一位同伴。有人说你的计划，完成率会高很多。」"));

body.Append(MakeHeading("课程回顾（10分钟）", 3));
body.Append(MakePara("快速回顾今天学到的内容："));
body.Append(MakeBullet("好工具的三个判断标准"));
body.Append(MakeBullet("需求诊断：四信号+优先级矩阵+工具/学习需求判断"));
body.Append(MakeBullet("专家访谈四格框架"));
body.Append(MakeBullet("工具选型三问"));
body.Append(MakeBullet("工具语言六条规则"));
body.Append(MakeBullet("验证方法"));
body.Append(new Paragraph());
body.Append(MakePara("[红色] 最后说："));
body.Append(MakePara("「课程结束。带上你的工具，回去验证。」"));

// ==================== SECTION 6: TOOLKIT LIST ====================
body.Append(new Paragraph(new Run(new Break { Type = BreakValues.Page })));
body.Append(MakeHeading("六、配套工具包清单", 1));
body.Append(MakePara("以下工具在工作坊当天人手一份，贯穿全天使用："));
body.Append(new Paragraph());

body.Append(MakeHeading("第1张：需求诊断卡", 2));
body.Append(MakeBullet("四信号核查表（频率/风险/变化/新手）"));
body.Append(MakeBullet("工具需求vs学习需求判断框"));
body.Append(MakeBullet("双维优先级矩阵（可手填）"));

body.Append(MakeHeading("第2张：选型决策卡", 2));
body.Append(MakeBullet("三问分析框（时机/环境/内容类型）"));
body.Append(MakeBullet("工具类型适用场景对照表"));
body.Append(MakeBullet("工具组合策略示意图"));

body.Append(MakeHeading("第3张：改写练习卡", 2));
body.Append(MakeBullet("两段原话练习素材（制造业+零售）"));
body.Append(MakeBullet("六条写作规则速查"));
body.Append(MakeBullet("工具文字自检清单"));

body.Append(MakeHeading("第4张：四格萃取框架卡", 2));
body.Append(MakeBullet("关键步骤/判断节点/常见错误/例外情况四格"));
body.Append(MakeBullet("四种核心访谈问法提示"));

body.Append(MakeHeading("第5张：互评检查卡", 2));
body.Append(MakeBullet("四问自检法"));
body.Append(MakeBullet("各类工具的质量标准（可逐项打钩）"));
body.Append(MakeBullet("便利贴式反馈区域"));

body.Append(MakeHeading("第6张：行动承诺卡", 2));
body.Append(MakeBullet("我要做的场景"));
body.Append(MakeBullet("我选择的工具类型"));
body.Append(MakeBullet("我打算在（日期）完成第一版"));
body.Append(MakeBullet("我的验证对象是谁"));

// ==================== SECTION 7: FAQ ====================
body.Append(new Paragraph(new Run(new Break { Type = BreakValues.Page })));
body.Append(MakeHeading("七、常见问题处理", 1));

body.Append(MakeHeading("Q1: 学员说「我们公司没有这种情况」怎么办？", 2));
body.Append(MakePara("引导学员用自己的真实场景来思考。如果确实没有，可以用提供的示范行业案例（零售/制造/金融/医疗）来讨论。重要的是掌握方法，不是场景本身。"));

body.Append(MakeHeading("Q2: 学员觉得自己的场景「太简单了不值得做工具」怎么办？", 2));
body.Append(MakePara("用优先级矩阵来判断。如果落在「考虑做」或「必须做」区间，就值得做。工具的价值不在于复杂，在于在对的时候帮人做对事。"));

body.Append(MakeHeading("Q3: 模块二访谈练习时，学员问「我找不到专家怎么办？」", 2));
body.Append(MakePara("可以用角色扮演的方式：一人扮演专家，一人扮演萃取者。提供角色卡给学员，里面有专家的背景和可能的回答。"));

body.Append(MakeHeading("Q4: 下午学员困了怎么办？", 2));
body.Append(MakePara("这是正常现象。处理方式：站立活动5分钟，或者让学员两人一组互相讲解。模块四穿插练习不要停，停了更难拉回来。"));

body.Append(MakeHeading("Q5: 互评时学员不愿意说真话怎么办？", 2));
body.Append(MakePara("强调这是「便利贴反馈」方式，不是评分，是帮助对方。用四问自检法，问题用便利贴写下来贴在工具上，当面交流。"));

body.Append(MakeHeading("Q6: 学员做出来的工具太复杂怎么办？", 2));
body.Append(MakePara("提醒：单面A4或A5，不得超过一页。超过就要重新筛选内容，不是调小字号。工具的核心价值是「在对的时候帮人做对事」，不是信息全。"));

// ==================== SECTION 8: APPENDIX ====================
body.Append(new Paragraph(new Run(new Break { Type = BreakValues.Page })));
body.Append(MakeHeading("八、附录", 1));

body.Append(MakeHeading("附录A：工具文字自检清单", 2));
body.Append(MakePara("写完之后，过一遍这个清单："));
body.Append(MakeBullet("每条都是「动词+宾语」开头"));
body.Append(MakeBullet("没有「注意」「确保」「关注」「适当」「及时」等模糊词"));
body.Append(MakeBullet("数字能量化的都已量化"));
body.Append(MakeBullet("判断节点已写成「如果…则…」"));
body.Append(MakeBullet("没有超过两层的嵌套结构"));
body.Append(MakeBullet("去掉背景说明后，内容还是完整的"));

body.Append(MakeHeading("附录B：各模块核心产出汇总", 2));
body.Append(MakePara("热身：判断工具好坏的三个标准"));
body.Append(MakePara("模块一：填好的需求诊断卡"));
body.Append(MakePara("模块二：四格萃取框架记录"));
body.Append(MakePara("模块三：确定的工具类型"));
body.Append(MakePara("模块四：工具内容初稿"));
body.Append(MakePara("模块五：工具成品第一版"));
body.Append(MakePara("模块六：验证计划"));
body.Append(MakePara("收尾：行动承诺卡"));

body.Append(MakeHeading("附录C：参考书籍和资料", 2));
body.Append(MakePara("《绩效支持：将学习融入工作的策略和方法》"));
body.Append(MakePara("《ASTD培训经理指南》"));
body.Append(MakePara("《将培训转化为业务结果》"));

// Add section properties
body.Append(sectPr);

// Save
mainPart.Document.Save();
Console.WriteLine($"Document created: {outputPath}");
