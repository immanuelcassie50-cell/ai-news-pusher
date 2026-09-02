#r "nuget: DocumentFormat.OpenXml, 3.2.0"

using DocumentFormat.OpenXml;
using DocumentFormat.OpenXml.Packaging;
using DocumentFormat.OpenXml.Wordprocessing;

string outputPath = @"D:/2026年课程/竞越/释潜：UYLP释放你的领导潜能/完整课程包/05_讲师手册/UYLP_讲师手册_完整版.docx";

Console.WriteLine($"Creating UYLP Instructor Manual at: {outputPath}");

var doc = WordprocessingDocument.Create(outputPath, WordprocessingDocumentType.Document);
var mainPart = doc.AddMainDocumentPart();
mainPart.Document = new Document();
var body = new Body();
mainPart.Document.Append(body);

// Document defaults
var stylesPart = mainPart.AddNewPart<StyleDefinitionsPart>();
var styles = new Styles();
stylesPart.Styles = styles;

var docDefaults = new DocDefaults();
var rPrDefault = new RunPropertiesDefault();
var rPrBase = new RunPropertiesBaseStyle();
rPrBase.Append(new RunFonts { Ascii = "Calibri", HighAnsi = "Calibri", EastAsia = "SimSun", ComplexScript = "Arial" });
rPrBase.Append(new FontSize { Val = "22" });
rPrBase.Append(new FontSizeComplexScript { Val = "22" });
rPrDefault.Append(rPrBase);
docDefaults.Append(rPrDefault);
styles.Append(docDefaults);

// Normal style
var normalStyle = new Style { Type = StyleValues.Paragraph, StyleId = "Normal", Default = true };
var normalPPr = new StyleParagraphProperties();
normalPPr.Append(new SpacingBetweenLines { After = "120", Line = "276", LineRule = LineSpacingRuleValues.Auto });
normalStyle.Append(normalPPr);
var normalRPr = new StyleRunProperties();
normalRPr.Append(new RunFonts { Ascii = "Calibri", HighAnsi = "Calibri", EastAsia = "SimSun", ComplexScript = "Arial" });
normalRPr.Append(new FontSize { Val = "22" });
normalRPr.Append(new FontSizeComplexScript { Val = "22" });
normalStyle.Append(normalRPr);
styles.Append(normalStyle);

// Heading 1
var h1Style = new Style { Type = StyleValues.Paragraph, StyleId = "Heading1" };
var h1PPr = new StyleParagraphProperties();
h1PPr.Append(new KeepNext());
h1PPr.Append(new KeepLines());
h1PPr.Append(new SpacingBetweenLines { Before = "480", After = "120" });
h1PPr.Append(new OutlineLevel { Val = 0 });
h1Style.Append(h1PPr);
var h1RPr = new StyleRunProperties();
h1RPr.Append(new RunFonts { Ascii = "Calibri Light", HighAnsi = "Calibri Light", EastAsia = "SimHei", ComplexScript = "Arial" });
h1RPr.Append(new Bold());
h1RPr.Append(new FontSize { Val = "36" });
h1RPr.Append(new FontSizeComplexScript { Val = "36" });
h1RPr.Append(new Color { Val = "1F3864" });
h1Style.Append(h1RPr);
styles.Append(h1Style);

// Heading 2
var h2Style = new Style { Type = StyleValues.Paragraph, StyleId = "Heading2" };
var h2PPr = new StyleParagraphProperties();
h2PPr.Append(new KeepNext());
h2PPr.Append(new KeepLines());
h2PPr.Append(new SpacingBetweenLines { Before = "360", After = "120" });
h2PPr.Append(new OutlineLevel { Val = 1 });
h2Style.Append(h2PPr);
var h2RPr = new StyleRunProperties();
h2RPr.Append(new RunFonts { Ascii = "Calibri Light", HighAnsi = "Calibri Light", EastAsia = "SimHei" });
h2RPr.Append(new Bold());
h2RPr.Append(new FontSize { Val = "28" });
h2RPr.Append(new FontSizeComplexScript { Val = "28" });
h2RPr.Append(new Color { Val = "2E75B6" });
h2Style.Append(h2RPr);
styles.Append(h2Style);

// Heading 3
var h3Style = new Style { Type = StyleValues.Paragraph, StyleId = "Heading3" };
var h3PPr = new StyleParagraphProperties();
h3PPr.Append(new KeepNext());
h3PPr.Append(new SpacingBetweenLines { Before = "240", After = "80" });
h3PPr.Append(new OutlineLevel { Val = 2 });
h3Style.Append(h3PPr);
var h3RPr = new StyleRunProperties();
h3RPr.Append(new Bold());
h3RPr.Append(new FontSize { Val = "24" });
h3RPr.Append(new FontSizeComplexScript { Val = "24" });
h3RPr.Append(new Color { Val = "2E75B6" });
h3Style.Append(h3RPr);
styles.Append(h3Style);

// Title style
var titleStyle = new Style { Type = StyleValues.Paragraph, StyleId = "Title" };
var titlePPr = new StyleParagraphProperties();
titlePPr.Append(new Justification { Val = JustificationValues.Center });
titlePPr.Append(new SpacingBetweenLines { After = "0" });
titleStyle.Append(titlePPr);
var titleRPr = new StyleRunProperties();
titleRPr.Append(new RunFonts { Ascii = "Calibri Light", HighAnsi = "Calibri Light", EastAsia = "SimHei" });
titleRPr.Append(new Bold());
titleRPr.Append(new FontSize { Val = "56" });
titleRPr.Append(new FontSizeComplexScript { Val = "56" });
titleRPr.Append(new Color { Val = "1F3864" });
titleStyle.Append(titleRPr);
styles.Append(titleStyle);

// Subtitle style
var subtitleStyle = new Style { Type = StyleValues.Paragraph, StyleId = "Subtitle" };
var subtitlePPr = new StyleParagraphProperties();
subtitlePPr.Append(new Justification { Val = JustificationValues.Center });
subtitlePPr.Append(new SpacingBetweenLines { After = "240" });
subtitleStyle.Append(subtitlePPr);
var subtitleRPr = new StyleRunProperties();
subtitleRPr.Append(new RunFonts { Ascii = "Calibri", HighAnsi = "Calibri", EastAsia = "SimSun" });
subtitleRPr.Append(new FontSize { Val = "28" });
subtitleRPr.Append(new FontSizeComplexScript { Val = "28" });
subtitleRPr.Append(new Color { Val = "5A5A5A" });
subtitleStyle.Append(subtitleRPr);
styles.Append(subtitleStyle);

// ListBullet style
var listBulletStyle = new Style { Type = StyleValues.Paragraph, StyleId = "ListBullet" };
var lbPPr = new StyleParagraphProperties();
lbPPr.Append(new SpacingBetweenLines { Before = "60", After = "60" });
lbPPr.Append(new Indentation { Left = "720", Hanging = "360" });
listBulletStyle.Append(lbPPr);
var lbRPr = new StyleRunProperties();
lbRPr.Append(new FontSize { Val = "22" });
listBulletStyle.Append(lbRPr);
styles.Append(listBulletStyle);

// KeyPoint style (IntenseQuote)
var iqStyle = new Style { Type = StyleValues.Paragraph, StyleId = "IntenseQuote" };
var iqPPr = new StyleParagraphProperties();
iqPPr.Append(new Justification { Val = JustificationValues.Center });
iqPPr.Append(new SpacingBetweenLines { Before = "240", After = "240" });
iqStyle.Append(iqPPr);
var iqRPr = new StyleRunProperties();
iqRPr.Append(new Bold());
iqRPr.Append(new FontSize { Val = "24" });
iqRPr.Append(new Color { Val = "4472C4" });
iqStyle.Append(iqRPr);
styles.Append(iqStyle);

styles.Save();

// Helper functions
Action<string> AddHeading1 = (text) => {
    var p = new Paragraph();
    var pPr = new ParagraphProperties();
    pPr.Append(new ParagraphStyleId { Val = "Heading1" });
    p.Append(pPr);
    var r = new Run();
    var rPr = new RunProperties();
    rPr.Append(new Bold());
    rPr.Append(new Color { Val = "1F3864" });
    r.Append(rPr);
    r.Append(new Text(text));
    p.Append(r);
    p.Append(new Run(new Break { Type = BreakValues.Page }));
    body.Append(p);
};

Action<string> AddHeading2 = (text) => {
    var p = new Paragraph();
    var pPr = new ParagraphProperties();
    pPr.Append(new ParagraphStyleId { Val = "Heading2" });
    p.Append(pPr);
    var r = new Run();
    var rPr = new RunProperties();
    rPr.Append(new Bold());
    rPr.Append(new Color { Val = "2E75B6" });
    r.Append(rPr);
    r.Append(new Text(text));
    p.Append(r);
    body.Append(p);
};

Action<string> AddHeading3 = (text) => {
    var p = new Paragraph();
    var pPr = new ParagraphProperties();
    pPr.Append(new ParagraphStyleId { Val = "Heading3" });
    p.Append(pPr);
    var r = new Run();
    var rPr = new RunProperties();
    rPr.Append(new Bold());
    rPr.Append(new Color { Val = "2E75B6" });
    r.Append(rPr);
    r.Append(new Text(text));
    p.Append(r);
    body.Append(p);
};

Action<string> AddNormal = (text) => {
    var p = new Paragraph();
    var pPr = new ParagraphProperties();
    pPr.Append(new ParagraphStyleId { Val = "Normal" });
    p.Append(pPr);
    var r = new Run();
    r.Append(new Text(text));
    p.Append(r);
    body.Append(p);
};

Action<string, string> AddBullet = (bullet, text) => {
    var p = new Paragraph();
    var pPr = new ParagraphProperties();
    pPr.Append(new ParagraphStyleId { Val = "ListBullet" });
    p.Append(pPr);
    var r1 = new Run();
    r1.Append(new Text(bullet) { Space = SpaceProcessingModeValues.Preserve });
    p.Append(r1);
    var r2 = new Run();
    r2.Append(new Text(text));
    p.Append(r2);
    body.Append(p);
};

Action<string, string> AddKeyPoint = (label, text) => {
    var p = new Paragraph();
    var pPr = new ParagraphProperties();
    pPr.Append(new ParagraphStyleId { Val = "IntenseQuote" });
    p.Append(pPr);
    var r = new Run();
    var rPr = new RunProperties();
    rPr.Append(new Bold());
    r.Append(rPr);
    r.Append(new Text(label + ": " + text));
    p.Append(r);
    body.Append(p);
};

Action<string[]> AddTable = (string[] rows) => {
    var tbl = new Table();
    var tblPr = new TableProperties();
    tblPr.Append(new TableWidth { Width = "5000", Type = TableWidthUnitValues.Pct });
    tblPr.Append(new TableBorders());
    var borders = new TableBorders();
    borders.Append(new TopBorder { Val = BorderValues.Single, Size = 4, Color = "4472C4" });
    borders.Append(new BottomBorder { Val = BorderValues.Single, Size = 4, Color = "4472C4" });
    borders.Append(new LeftBorder { Val = BorderValues.Single, Size = 4, Color = "4472C4" });
    borders.Append(new RightBorder { Val = BorderValues.Single, Size = 4, Color = "4472C4" });
    borders.Append(new InsideHorizontalBorder { Val = BorderValues.Single, Size = 4, Color = "D9D9D9" });
    borders.Append(new InsideVerticalBorder { Val = BorderValues.Single, Size = 4, Color = "D9D9D9" });
    tblPr.Append(borders);
    tbl.Append(tblPr);

    var tblGrid = new TableGrid();
    tbl.Append(tblGrid);

    for (int i = 0; i < rows.Length; i++) {
        var tr = new TableRow();
        if (i == 0) {
            var thCell = new TableCell();
            var thCellPr = new TableCellProperties();
            thCellPr.Append(new Shading { Fill = "4472C4" });
            thCellPr.Append(new TableCellVerticalAlignment { Val = TableVerticalAlignmentValues.Center });
            thCell.Append(thCellPr);
            var thP = new Paragraph();
            var thPPr = new ParagraphProperties();
            thPPr.Append(new Justification { Val = JustificationValues.Center });
            thP.Append(thPPr);
            var thR = new Run();
            var thRPr = new RunProperties();
            thRPr.Append(new Bold());
            thRPr.Append(new Color { Val = "FFFFFF" });
            thR.Append(thRPr);
            thR.Append(new Text(rows[i]));
            thP.Append(thR);
            thCell.Append(thP);
            tr.Append(thCell);
        } else {
            var cells = rows[i].Split('|');
            foreach (var cell in cells) {
                var tc = new TableCell();
                var tcPr = new TableCellProperties();
                if (i % 2 == 0) tcPr.Append(new Shading { Fill = "F2F2F2" });
                tc.Append(tcPr);
                var tcp = new Paragraph();
                var tcpPr = new ParagraphProperties();
                tcpPr.Append(new Justification { Val = JustificationValues.Left });
                tcp.Append(tcpPr);
                var tcr = new Run();
                tcr.Append(new Text(cell.Trim()));
                tcp.Append(tcr);
                tc.Append(tcp);
                tr.Append(tc);
            }
        }
        tbl.Append(tr);
    }
    body.Append(tbl);
};

// Cover Page
var coverP = new Paragraph();
var coverPPr = new ParagraphProperties();
coverPPr.Append(new ParagraphStyleId { Val = "Title" });
coverP.Append(coverPPr);
var coverR = new Run();
var coverRPr = new RunProperties();
coverRPr.Append(new Bold());
coverRPr.Append(new FontSize { Val = "56" });
coverRPr.Append(new Color { Val = "1F3864" });
coverR.Append(coverRPr);
coverR.Append(new Text("UYLP"));
coverP.Append(coverR);
body.Append(coverP);

var coverSubP = new Paragraph();
var coverSubPPr = new ParagraphProperties();
coverSubPPr.Append(new ParagraphStyleId { Val = "Subtitle" });
coverSubP.Append(coverSubPPr);
var coverSubR = new Run();
var coverSubRPr = new RunProperties();
coverSubRPr.Append(new FontSize { Val = "32" });
coverSubRPr.Append(new Color { Val = "2E75B6" });
coverSubR.Append(coverSubRPr);
coverSubR.Append(new Text("释放你的领导潜能"));
coverSubP.Append(coverSubR);
body.Append(coverSubP);

var coverSub2P = new Paragraph();
var coverSub2PPr = new ParagraphProperties();
coverSub2PPr.Append(new ParagraphStyleId { Val = "Subtitle" });
coverSub2PPr.Append(new SpacingBetweenLines { Before = "480" });
coverSub2P.Append(coverSub2PPr);
var coverSub2R = new Run();
var coverSub2RPr = new RunProperties();
coverSub2RPr.Append(new FontSize { Val = "28" });
coverSub2RPr.Append(new Color { Val = "5A5A5A" });
coverSub2R.Append(coverSub2RPr);
coverSub2R.Append(new Text("Instructor Manual"));
coverSub2P.Append(coverSub2R);
body.Append(coverSub2P);

var coverVerP = new Paragraph();
var coverVerPPr = new ParagraphProperties();
coverVerPPr.Append(new Justification { Val = JustificationValues.Center });
coverVerPPr.Append(new SpacingBetweenLines { Before = "2400" });
coverVerP.Append(coverVerPPr);
var coverVerR = new Run();
coverVerR.Append(new Text("完整版"));
coverVerP.Append(coverVerR);
body.Append(coverVerP);

// Page break
var pb = new Paragraph();
pb.Append(new Run(new Break { Type = BreakValues.Page }));
body.Append(pb);

// TOC
AddHeading2("目录");
AddNormal("");

string[] tocItems = {
    "第一部分：讲师指南",
    "  1.1 课程定位与核心价值",
    "  1.2 讲师角色定位",
    "  1.3 课程设计理念",
    "  1.4 教学方法论",
    "",
    "第二部分：完整授课指引",
    "  2.1 模块一：领导者角色与绩效管理体系",
    "  2.2 模块二：辅导入门（WHEN/HOW/Y）",
    "  2.3 模块三：有效反馈（CAIR模型）",
    "  2.4 模块四：困难谈话",
    "  2.5 模块五：联结沟通与工作关系",
    "  2.6 模块六：高级辅导、有效授权与MAP",
    "",
    "第三部分：体验活动完整设计",
    "  3.1 月球会议（第一模块）",
    "  3.2 三岛救援（第五模块）",
    "",
    "第四部分：角色扮演完整设计",
    "  4.1 反馈对话角色扮演",
    "  4.2 困难谈话角色扮演",
    "",
    "第五部分：讲师工具",
    "  5.1 讲师时间控制表",
    "  5.2 学员表现观察量表",
    "  5.3 课程评估指引",
    "  5.4 危机处理预案",
    "",
    "附录",
    "  A. 核心模型速查",
    "  B. 参考资料",
    "  C. 术语表"
};

foreach (var item in tocItems) {
    AddNormal(item);
}

// Page break
var pb2 = new Paragraph();
pb2.Append(new Run(new Break { Type = BreakValues.Page }));
body.Append(pb2);

// ============== PART 1: INSTRUCTOR GUIDE ==============
AddHeading1("第一部分：讲师指南");

// 1.1 Course Positioning
AddHeading2("1.1 课程定位与核心价值");
AddNormal("UYLP（Unlock Your Leadership Potential）是一套系统化的领导力发展课程，专注于帮助管理者掌握关键的辅导、反馈和授权技能，从而提升团队整体绩效。");

AddHeading3("课程背景");
AddNormal("在现代企业管理中，管理者面临的挑战已从\"事\"转向\"人\"。如何通过有效的干预手段激发团队潜能、解决绩效问题，成为管理者的核心能力。");

AddHeading3("核心价值主张");
AddKeyPoint("核心价值", "从\"命令控制\"到\"辅导赋能\"的转型");
AddBullet("•", "建立系统的绩效辅导思维框架");
AddBullet("•", "掌握可落地的沟通干预工具");
AddBullet("•", "提升管理者的领导力影响力");

AddHeading3("目标学员");
AddNormal("本课程面向中基层管理者，包括：");
AddBullet("•", "新任管理者（0-2年管理经验）");
AddBullet("•", "储备干部/高潜人才");
AddBullet("•", "需要提升辅导技能的经验管理者");

AddHeading3("预期学习成果");
AddNormal("完成本课程后，学员将能够：");
AddBullet("1.", "准确识别需要辅导的时机（WHEN）");
AddBullet("2.", "运用FEAC四步法进行有效辅导");
AddBullet("3.", "应用CAIR模型提供建设性反馈");
AddBullet("4.", "掌握困难谈话的结构化方法");
AddBullet("5.", "建立基于信任的上下级工作关系");
AddBullet("6.", "合理授权并运用MAP进行追踪");

AddNormal("");

// 1.2 Instructor Role
AddHeading2("1.2 讲师角色定位");

AddHeading3("讲师的三重角色");
AddKeyPoint("促动者", "设计安全的学习环境，引导学员主动探索和反思");
AddKeyPoint("专家", "提供专业的方法论和工具，解答实践中的困惑");
AddKeyPoint("教练", "通过提问激发思考，帮助学员将学习转化为行动");

AddHeading3("讲师核心能力要求");
AddTable(new[] {
    "能力维度|具体要求",
    "专业知识|深入理解领导力发展理论，熟练掌握辅导、反馈、授权工具",
    "引导技巧|能够运用提问技术激发讨论，处理课堂中的敏感话题",
    "现场应变|根据学员反应灵活调整教学节奏，及时处理突发情况",
    "经验萃取|能够结合学员分享的案例进行即时复盘和理论升华"
});

AddNormal("");

// 1.3 Course Design Philosophy
AddHeading2("1.3 课程设计理念");

AddHeading3("核心理念：知信行统一");
AddNormal("本课程的设计遵循\"知-信-行\"的统一：");
AddBullet("•", "知（Know）：理解原理和方法");
AddBullet("•", "信（Believe）：认同工具的价值");
AddBullet("•", "行（Do）：在实践中应用和内化");

AddHeading3("教学设计的四项原则");
AddKeyPoint("从问题出发", "每个模块都从真实的管理场景入手");
AddKeyPoint("先体验后讲解", "通过体验活动激发反思，再引出理论框架");
AddKeyPoint("工具可迁移", "强调工具在不同场景中的灵活应用");
AddKeyPoint("行为改变导向", "所有活动设计都指向实际行为改变");

AddNormal("");

// 1.4 Teaching Methodology
AddHeading2("1.4 教学方法论");

AddHeading3("主要教学方法");
AddTable(new[] {
    "教学方法|时长占比|核心作用",
    "体验式活动|30%|通过具身体验激发反思",
    "理论讲解|20%|建立系统知识框架",
    "案例研讨|20%|链接理论与实践",
    "角色扮演|20%|在安全环境中练习技能",
    "即时反馈|10%|强化正确行为，加速学习"
});

AddHeading3("成人学习特点与应对");
AddBullet("•", "经验导向：善用学员经验作为学习资源");
AddBullet("•", "问题中心：聚焦解决实际工作中的问题");
AddBullet("•", "自我导向：尊重学员的自主性和差异性");
AddBullet("•", "即时应用：强调学习的可操作性和可迁移性");

AddHeading3("课堂节奏控制原则");
AddNormal("根据成人注意力曲线，建议采用以下节奏：");
AddBullet("•", "开场15分钟：建立连接，说明目标");
AddBullet("•", "每45分钟：安排一次短暂休息");
AddBullet("•", "每90分钟：安排一次较长的茶歇");
AddBullet("•", "结尾15分钟：回顾总结，强化行动承诺");

// Page break
var pb3 = new Paragraph();
pb3.Append(new Run(new Break { Type = BreakValues.Page }));
body.Append(pb3);

// ============== PART 2: COMPLETE TEACHING GUIDE ==============
AddHeading1("第二部分：完整授课指引");

// Module 1
AddHeading2("2.1 模块一：领导者角色与绩效管理体系");
AddNormal("建议时长：3小时（180分钟）");

AddHeading3("模块目标");
AddBullet("1.", "理解管理者角色的本质转变");
AddBullet("2.", "掌握绩效管理体系的完整框架");
AddBullet("3.", "认识辅导在绩效管理中的核心位置");

AddHeading3("知识要点");
AddKeyPoint("角色转变", "从\"个人贡献者\"到\"团队领导者\"的三大转变：工作范围、权力基础、成功标准");
AddKeyPoint("绩效管理体系", "目标设定 → 过程辅导 → 结果评估 → 反馈发展 的完整闭环");
AddKeyPoint("管理者干预手段", "辅导、反馈、授权是三种核心干预手段");

AddHeading3("授课流程");
AddTable(new[] {
    "环节|时长|内容|方法",
    "破冰与连接|20分钟|自我介绍，分享管理困惑|小组讨论",
    "角色认知|40分钟|领导者角色转变三角|理论讲解+案例分析",
    "绩效管理体系|50分钟|四阶段框架与管理者角色|视频案例+小组研讨",
    "体验活动：月球会议|50分钟|模拟月球生存场景|体验式学习",
    "复盘与总结|20分钟|关键收获与行动计划|个人反思"
});

AddHeading3("重点讲解：角色转变三角");
AddNormal("帮助学员理解从个人贡献者到团队领导者的三大转变：");
AddBullet("•", "工作范围：从\"做好自己的事\"到\"通过他人完成工作\"");
AddBullet("•", "权力基础：从\"职位权力\"到\"影响力\"");
AddBullet("•", "成功标准：从\"个人绩效\"到\"团队绩效\"");

AddHeading3("难点提示");
AddNormal("部分学员可能对\"通过他人完成工作\"这一概念存在困惑，特别是技术出身的管理者。引导方式：");
AddBullet("•", "用\"做教练\"而非\"做选手\"的比喻说明");
AddBullet("•", "通过对比：一个人的力量 vs 团队杠杆效应");

AddHeading3("学员常见问题应答");
AddTable(new[] {
    "问题|应答要点",
    "\"我没有足够的时间来辅导团队成员\"|辅导的投入与收益分析：短期看是\"成本\"，长期看是\"投资\"。未辅导导致的绩效问题会消耗更多时间。",
    "\"团队成员不配合辅导怎么办\"|从信任建立的角度切入，强调辅导前关系建设的重要性。",
    "\"技术出身，不知道如何转型\"|用\"专业能力是基础，辅导能力是放大器\"的理念化解焦虑。"
});

AddNormal("");

// Module 2
AddHeading2("2.2 模块二：辅导入门（WHEN/HOW/Y）");
AddNormal("建议时长：3.5小时（210分钟）");

AddHeading3("模块目标");
AddBullet("1.", "识别需要辅导的时机（WHEN）");
AddBullet("2.", "掌握FEAC四步辅导法（HOW）");
AddBullet("3.", "理解辅导的底层逻辑（WHY）");

AddHeading3("核心模型：FEAC四步法");
AddKeyPoint("F - Feel", "感受情境：描述观察到的具体行为和结果");
AddKeyPoint("E - Effect", "影响分析：阐述该行为对团队/项目/目标的影响");
AddKeyPoint("A - Alternative", "替代方案：引导对方思考并提出改进方案");
AddKeyPoint("C - Commitment", "承诺确认：明确下一步行动和时间节点");

AddHeading3("授课流程");
AddTable(new[] {
    "环节|时长|内容|方法",
    "辅导时机识别|40分钟|四类典型辅导时机|案例分析+小组讨论",
    "FEAC模型讲解|50分钟|FEAC四步法结构与话术|理论讲解+示范",
    "角色扮演练习|60分钟|运用FEAC进行辅导练习|三人角色扮演",
    "复盘与工具固化|30分钟|常见错误与改进建议|小组复盘",
    "个人行动计划|30分钟|制定个人实践计划|书面作业"
});

AddHeading3("角色扮演设计：辅导练习");
AddNormal("场景设定：团队成员小李在项目中连续两次未能按时交付任务，影响了团队整体进度。");

AddHeading3("观察员检查清单");
AddBullet("•", "是否先建立信任氛围再开始辅导？");
AddBullet("•", "是否用具体行为而非人格评判来描述问题？");
AddBullet("•", "是否引导对方思考解决方案而非直接给答案？");
AddBullet("•", "是否有明确的行动承诺和时间节点？");

AddNormal("");

// Module 3
AddHeading2("2.3 模块三：有效反馈（CAIR模型）");
AddNormal("建议时长：3小时（180分钟）");

AddHeading3("模块目标");
AddBullet("1.", "理解反馈在绩效改进中的作用");
AddBullet("2.", "掌握CAIR反馈模型");
AddBullet("3.", "区分建设性反馈与评判性反馈");

AddHeading3("核心模型：CAIR反馈法");
AddKeyPoint("C - Context", "情境：具体说明反馈是在什么背景下给出的");
AddKeyPoint("A - Action", "行为：描述具体的行为，而非推断意图");
AddKeyPoint("I - Impact", "影响：说明该行为的影响和后果");
AddKeyPoint("R - Request", "请求：明确期望的行为改变或改进方向");

AddHeading3("建设性反馈 vs 评判性反馈");
AddTable(new[] {
    "维度|建设性反馈|评判性反馈",
    "出发点|帮助对方成长|表达不满或批评",
    "焦点|具体行为|人格或意图",
    "语气|客观描述|主观推断",
    "效果|促进改进|引发防御"
});

AddHeading3("授课流程");
AddTable(new[] {
    "环节|时长|内容|方法",
    "反馈认知|30分钟|反馈的重要性与常见误区|自我反思+小组讨论",
    "CAIR模型|50分钟|模型讲解与话术示范|理论讲解+录像示范",
    "对比练习|40分钟|区分两种反馈风格|配对练习",
    "角色扮演|50分钟|运用CAIR进行反馈|角色扮演+即时反馈",
    "总结应用|30分钟|个人实践计划|书面作业"
});

AddNormal("");

// Module 4
AddHeading2("2.4 模块四：困难谈话");
AddNormal("建议时长：3小时（180分钟）");

AddHeading3("模块目标");
AddBullet("1.", "认识困难谈话的常见类型和挑战");
AddBullet("2.", "掌握困难谈话的结构化准备方法");
AddBullet("3.", "运用\"铺垫-事实-影响-期望\"四步法进行谈话");

AddHeading3("困难谈话四步法");
AddKeyPoint("第一步：铺垫", "创造安全氛围，说明谈话目的");
AddKeyPoint("第二步：事实", "客观描述观察到的情况，避免指责");
AddKeyPoint("第三步：影响", "阐述该情况对团队/项目的影响");
AddKeyPoint("第四步：期望", "明确表达期望的改变或改进方向");

AddHeading3("常见困难谈话类型");
AddBullet("•", "绩效不达标谈话");
AddBullet("•", "行为规范问题谈话");
AddBullet("•", "职业发展/晋升拒绝谈话");
AddBullet("•", "团队冲突调解谈话");

AddHeading3("关键心态准备");
AddNormal("在进入困难谈话前，讲师应帮助学员做好心态准备：");
AddKeyPoint("对事不对人", "聚焦行为和结果，而非人格评判");
AddKeyPoint("双向沟通", "倾听对方的视角，寻找共同解决方案");
AddKeyPoint("非零和思维", "寻求对双方都有利的解决方案");

AddNormal("");

// Module 5
AddHeading2("2.5 模块五：联结沟通与工作关系");
AddNormal("建议时长：3.5小时（210分钟）");

AddHeading3("模块目标");
AddBullet("1.", "理解联结沟通的本质和重要性");
AddBullet("2.", "掌握建立信任关系的关键行为");
AddBullet("3.", "通过\"三岛救援\"体验活动深化理解");

AddHeading3("联结沟通的核心要素");
AddKeyPoint("信任", "信任是所有良好工作关系的基础");
AddKeyPoint("理解", "真正理解对方的立场和感受");
AddKeyPoint("尊重", "尊重对方的专业性和自主性");
AddKeyPoint("承诺", "言行一致，说到做到");

AddHeading3("信任建立的行为指标");
AddBullet("•", "一致性：言行一致，可预测");
AddBullet("•", "开放性：愿意分享信息与想法");
AddBullet("•", "可靠性：说到做到，兑现承诺");
AddBullet("•", "接纳性：尊重差异，接纳不同观点");

AddHeading3("授课流程");
AddTable(new[] {
    "环节|时长|内容|方法",
    "联结沟通认知|30分钟|联结沟通的重要性|视频案例",
    "信任基础|50分钟|信任建立的四大行为|理论讲解+小组讨论",
    "体验活动：三岛救援|70分钟|模拟灾后救援场景|体验式学习",
    "关心理论与实践|30分钟|了解-关心-影响的层次|理论讲解",
    "总结与行动计划|30分钟|个人联结沟通计划|书面作业"
});

AddNormal("");

// Module 6
AddHeading2("2.6 模块六：高级辅导、有效授权与MAP");
AddNormal("建议时长：3.5小时（210分钟）");

AddHeading3("模块目标");
AddBullet("1.", "理解高级辅导的情境与策略");
AddBullet("2.", "掌握有效授权的步骤与原则");
AddBullet("3.", "运用MAP进行授权后的追踪管理");

AddHeading3("高级辅导策略");
AddNormal("根据员工的准备度（能力×意愿）采用不同的辅导风格：");
AddBullet("•", "高准备度（能力强、意愿高）：低介入，支持为主");
AddBullet("•", "中准备度：教练式辅导，共同解决问题");
AddBullet("•", "低准备度（能力弱或意愿低）：指令式辅导，明确指导");

AddHeading3("有效授权的步骤");
AddKeyPoint("明确任务", "清晰说明需要完成什么工作");
AddKeyPoint("设定期望", "明确质量标准、时间节点和关键里程碑");
AddKeyPoint("授予权力", "明确授权范围和决策权限");
AddKeyPoint("确保资源", "确认完成工作所需的资源和支持");
AddKeyPoint("约定沟通", "约定过程中的汇报频率和方式");

AddHeading3("MAP追踪模型");
AddKeyPoint("M - Monitor", "监控：定期检查进度和关键指标");
AddKeyPoint("A - Assess", "评估：评估表现与期望的差距");
AddKeyPoint("P - Provide", "提供支持：根据需要提供指导或调整");

AddHeading3("授权常见误区");
AddBullet("•", "\"授权=放权\"：完全放手不管");
AddBullet("•", "\"授权=命令\"：名义授权，实际还是自己干");
AddBullet("•", "选择性地授权：只授权简单任务，不授权挑战性任务");
AddBullet("•", "授权后过度干预：微观管理，破坏信任");

// Page break
var pb4 = new Paragraph();
pb4.Append(new Run(new Break { Type = BreakValues.Page }));
body.Append(pb4);

// ============== PART 3: EXPERIENCE ACTIVITIES ==============
AddHeading1("第三部分：体验活动完整设计");

// Moon Meeting
AddHeading2("3.1 月球会议（第一模块）");

AddHeading3("活动概述");
AddNormal("\"月球会议\"是一项经典的体验式学习活动，模拟月球灾难场景，要求团队在资源有限的情况下做出生存决策。活动时间：50分钟。");

AddHeading3("学习目标");
AddBullet("1.", "理解领导者在团队决策中的作用");
AddBullet("2.", "体验系统思维在资源分配决策中的重要性");
AddBullet("3.", "感受\"共识决策\"与\"快速决策\"的张力");
AddBullet("4.", "反思管理者在信息不对称情况下的决策模式");

AddHeading3("物料清单");
AddTable(new[] {
    "物品|数量|备注",
    "月球会议情境卡片|每组1套|包含15件物品清单",
    "月球会议决策表|每组1张|A3纸打印",
    "笔|每组2支|用于记录和打勾",
    "计时器|1个|讲师使用",
    "大白纸|每组2张|用于小组讨论记录",
    "彩纸（红/黄/绿）|各5张|用于最终投票"
});

AddHeading3("场景设置");
AddNormal("情境描述（讲师朗读）：");
AddNormal("\"你们是月球探险队的成员。在完成月球表面探索任务后，你们的飞船引擎损坏，无法返回地球。飞船只能承载你们中的2人返回。剩余5名队员必须留在月球基地等待救援，但据估计，救援队至少需要2周才能到达。\"");
AddNormal("");
AddNormal("你们必须在15件物品中，选择最重要的5件，以帮助留在月球基地的队员存活2周。");

AddHeading3("15件物品清单");
AddNormal("1. 太阳眼镜 2. 食物浓缩液 3. 救生绳 4. 止血绷带 5. 手持匕首 6. 氮气容器 7. 地图（月球背面）8. 救生筏（充气式）9. 巧克力10. 信号火箭11. 驱蚊剂12. 热水13. 月球地图14. 磁性指南针15. 发电机组");

AddHeading3("引导话术");
AddNormal("开场（5分钟）：");
AddNormal("\"请想象你们正站在月球表面。你们的飞船引擎坏了，只有2人能先回去求救，其他人必须留在月球基地。2周后救援才会到达。在接下来的30分钟里，你们需要作为团队做出决策：哪5件物品是最关键的，能帮助留在月球基地的队员存活2周？\"");
AddNormal("");
AddNormal("过程引导（25分钟）：");
AddBullet("•", "第5分钟：\"每个人先独立思考2分钟，然后分享你的选择和理由。\"");
AddBullet("•", "第10分钟：\"现在开始小组讨论，请尝试达成共识。\"");
AddBullet("•", "第20分钟：\"还有5分钟，请做出最终决策。\"");
AddBullet("•", "第25分钟：\"时间到，请每组报告你们的选择。\"");

AddHeading3("复盘问题");
AddTable(new[] {
    "问题|目的|时长",
    "\"你们组是如何做决策的？有人主导吗？\"|反思团队决策模式|5分钟",
    "\"个人决策和团队决策有差异吗？\"|认识共识的价值|3分钟",
    "\"你们如何处理分歧？\"|探索冲突处理方式|3分钟",
    "\"这个活动与管理者角色有什么联系？\"|链接学习目标|5分钟",
    "\"在信息不完全的情况下，如何做出决策？\"|提炼管理启示|4分钟"
});

AddHeading3("讲师小结");
AddNormal("通过月球会议活动，学员可以深刻体验到：");
AddBullet("•", "领导者的角色不是\"给出正确答案\"，而是\"引导团队找到最佳方案\"");
AddBullet("•", "有效的决策需要整合多元观点");
AddBullet("•", "资源有限时，优先级排序至关重要");
AddBullet("•", "信任和开放的团队氛围能提升决策质量");

AddHeading3("时间控制表");
AddTable(new[] {
    "阶段|时长|关键节点",
    "开场与情境说明|5分钟|确保全员理解情境",
    "个人独立思考|2分钟|每人先独立思考",
    "小组讨论与决策|25分钟|第10分钟、第20分钟、第25分钟提醒",
    "各组汇报|5分钟|每组1分钟",
    "复盘讨论|13分钟|按问题表进行",
    "总计|50分钟|严格控制时间"
});

AddNormal("");

// Three Islands
AddHeading2("3.2 三岛救援（第五模块）");

AddHeading3("活动概述");
AddNormal("\"三岛救援\"是一项复杂的团队协作体验活动，模拟海难后分居三岛的幸存者需要制定救援计划。通过活动，学员可以体验跨团队协作、信息整合和资源分配的挑战。活动时间：70分钟。");

AddHeading3("学习目标");
AddBullet("1.", "理解跨团队协作的复杂性和重要性");
AddBullet("2.", "体验有效沟通的结构和方法");
AddBullet("3.", "感受信息不对称情况下的决策挑战");
AddBullet("4.", "反思联结沟通在团队协作中的价值");

AddHeading3("物料清单");
AddTable(new[] {
    "物品|数量|备注",
    "三岛救援情境卡|A/B/C三套|每套包含不同岛屿信息",
    "三岛救援地图|每组1张|A3尺寸",
    "各岛资源清单|每组1套|详细列出各岛资源和人员",
    "沟通记录表|每组2张|用于记录跨组沟通内容",
    "大白纸|每组3张|用于整合信息和制定计划",
    "彩笔|每组1套|用于书写和标记",
    "计时器|1个|讲师使用",
    "信封|9个|用于三轮信息传递"
});

AddHeading3("场景设置");
AddNormal("情境描述（讲师朗读）：");
AddNormal("\"你们是一支国际救援队的成员。海难导致12名幸存者分别被困在三个相邻的岛屿上。每个岛屿有4名幸存者，但各岛的情况和资源不同。你们救援队必须制定一个统一的救援计划，在48小时内救出所有幸存者。\"");
AddNormal("");
AddNormal("三个岛屿的情况：");
AddBullet("•", "A岛：有4名重伤员，靠近航道但礁石多，有淡水资源");
AddBullet("•", "B岛：有4名轻伤员，有一艘受损渔船，食品充足");
AddBullet("•", "C岛：有4名健康人员，但有人试图划船离开，有一台能用的无线电");

AddHeading3("三岛信息（分三组发放）");
AddNormal("A岛团队获取的信息：");
AddBullet("•", "A岛有4名重伤员需要紧急救援");
AddBullet("•", "A岛靠近主航道但有暗礁");
AddBullet("•", "A岛有淡水资源");
AddBullet("•", "B岛方向有渔船，可能有食品");
AddBullet("•", "C岛有无线电，可以联系外界");

AddNormal("B岛团队获取的信息：");
AddBullet("•", "B岛有4名轻伤员，有一艘受损渔船");
AddBullet("•", "B岛食品充足");
AddBullet("•", "A岛有淡水资源，重伤员需要救援");
AddBullet("•", "C岛有人试图划船离开");
AddBullet("•", "救援时间窗口只有48小时");

AddNormal("C岛团队获取的信息：");
AddBullet("•", "C岛有4名健康人员");
AddBullet("•", "C岛有能用的无线电设备");
AddBullet("•", "有人提议直接划船去对面大陆");
AddBullet("•", "A岛方向有暗礁");
AddBullet("•", "B岛有渔船和食品");

AddHeading3("引导话术");
AddNormal("开场（5分钟）：");
AddNormal("\"想象你们是国际救援队的三个小组。海难导致12名幸存者分居三个岛屿。你们每个小组只知道自己岛屿的情况，必须通过沟通来整合信息，制定统一的救援计划。\"");
AddNormal("");
AddNormal("第一轮沟通（15分钟）：");
AddNormal("\"各组先讨论5分钟，了解本岛情况。然后每组选出一名'信使'，可以进行一对一的跨组沟通。每次沟通后，请记录关键信息。\"");
AddNormal("");
AddNormal("第二轮沟通（15分钟）：");
AddNormal("\"现在进入第二轮沟通。请尝试整合更多信息，并开始讨论救援计划的框架。\"");
AddNormal("");
AddNormal("第三轮与决策（20分钟）：");
AddNormal("\"最后一轮沟通。请各组整合所有信息，制定完整的救援计划，包括：谁先救？如何救？用什么资源？\"");
AddNormal("");
AddNormal("汇报与讨论（15分钟）：");
AddNormal("\"请每组用3分钟汇报你们的救援计划，然后我们一起讨论。\"");

AddHeading3("复盘问题");
AddTable(new[] {
    "问题|目的|时长",
    "\"各组在沟通中遇到了什么挑战？\"|识别沟通障碍|5分钟",
    "\"信息不对称是如何影响决策的？\"|体验信息整合的难度|5分钟",
    "\"有没有出现'本位主义'的情况？\"|反思跨团队协作的误区|5分钟",
    "\"什么行为促进了有效协作？\"|提炼联结沟通的关键行为|5分钟",
    "\"这个活动与实际工作中的跨部门协作有什么联系？\"|链接学习与应用|5分钟"
});

AddHeading3("讲师小结要点");
AddNormal("通过三岛救援活动，学员可以深刻体验到：");
AddBullet("•", "跨团队协作需要主动沟通和信息共享");
AddBullet("•", "信息不对称是常态，要善于提问和确认");
AddBullet("•", "\"本位主义\"会阻碍整体最优方案的产生");
AddBullet("•", "有效的联结沟通是跨团队协作的基石");
AddBullet("•", "信任和开放度影响信息交换的质量");

AddHeading3("时间控制表");
AddTable(new[] {
    "阶段|时长|关键节点",
    "开场与情境说明|5分钟|确保全员理解规则",
    "各组讨论本岛情况|5分钟|理解本岛信息",
    "第一轮跨组沟通|15分钟|每组5分钟讨论+沟通",
    "第二轮跨组沟通|15分钟|深化信息整合",
    "第三轮与决策|20分钟|制定救援计划",
    "各组汇报|10分钟|每组3分钟",
    "复盘讨论|10分钟|按问题表进行",
    "总计|70分钟|可能需要适当延长"
});

// Page break
var pb5 = new Paragraph();
pb5.Append(new Run(new Break { Type = BreakValues.Page }));
body.Append(pb5);

// ============== PART 4: ROLE PLAY DESIGNS ==============
AddHeading1("第四部分：角色扮演完整设计");

// Feedback Role Play
AddHeading2("4.1 反馈对话角色扮演");

AddHeading3("场景设定");
AddNormal("背景：小张是市场部的营销专员，最近负责一个新品推广项目。上周的项目汇报会上，小张展示的方案被客户质疑有几个关键数据计算错误。作为小张的直属经理，你需要和小张进行一次反馈谈话。");

AddHeading3("角色背景");

AddHeading3("经理角色指引");
AddNormal("你是小张的直属经理王总。你观察到：");
AddBullet("•", "小张最近工作压力很大，经常加班");
AddBullet("•", "这次项目时间很紧，小张主动加班但还是出了问题");
AddBullet("•", "你希望这次反馈能帮助小张成长，而不是让她沮丧");
AddBullet("•", "你的目标是：让小张认识到问题，同时保持她的工作积极性");

AddHeading3("小张角色指引");
AddNormal("你是小张，一个入职2年的营销专员。你：");
AddBullet("•", "对这个项目投入了很多心血，加班了好几晚");
AddBullet("•", "知道自己在数据计算上有疏漏，但觉得是因为时间太紧");
AddBullet("•", "担心这个失误会影响你的绩效评估");
AddBullet("•", "希望经理能理解你的处境，给你一些支持而不是批评");

AddHeading3("观察员检查清单");
AddNormal("请观察员从以下维度进行观察：");
AddBullet("•", "经理是否创造了安全的谈话氛围？");
AddBullet("•", "是否用具体行为而非人格评判来描述问题？");
AddBullet("•", "是否倾听了小张的解释和感受？");
AddBullet("•", "反馈是否指向具体、可改进的行为？");
AddBullet("•", "是否有明确的后续行动和期望？");

AddHeading3("反馈指引（用于观察员复盘）");
AddNormal("复盘时，请使用以下框架：");
AddBullet("1.", "做得好的地方：哪些行为促进了有效沟通？");
AddBullet("2.", "可以改进的地方：如果重新来过，会如何调整？");
AddBullet("3.", "具体建议：给经理/小张的具体建议是什么？");

AddNormal("");

// Difficult Conversation Role Play
AddHeading2("4.2 困难谈话角色扮演");

AddHeading3("场景设定");
AddNormal("背景：李明是研发部的资深工程师，技术能力很强，但最近三个月他的项目交付频繁延期，影响了团队的整体进度。作为研发部经理，你需要和李明进行一次困难谈话。");

AddHeading3("角色背景");

AddHeading3("经理角色指引");
AddNormal("你是研发部经理张总。你了解到：");
AddBullet("•", "李明技术能力强，是团队的技术骨干");
AddBullet("•", "但最近三个月项目交付确实有问题，延迟了2-3次");
AddBullet("•", "团队其他成员对此有抱怨");
AddBullet("•", "你的目标不是惩罚李明，而是了解原因并帮助他改进");
AddBullet("•", "你担心直接指出问题会伤害李明的自尊心");

AddHeading3("李明角色指引");
AddNormal("你是李明，入职5年的资深工程师。你：");
AddBullet("•", "觉得自己技术很强，但最近确实遇到了一些问题");
AddBullet("•", "项目延期的部分原因是需求频繁变更，而不是你的能力问题");
AddBullet("•", "感到委屈，觉得管理层不体谅技术实现的难度");
AddBullet("•", "担心被贴上\"表现不佳\"的标签");

AddHeading3("观察员检查清单");
AddNormal("请观察员从以下维度进行观察：");
AddBullet("•", "经理是否在谈话开始前做好了充分准备？");
AddBullet("•", "是否先让李明表达了他的观点和感受？");
AddBullet("•", "谈话结构是否符合\"铺垫-事实-影响-期望\"四步法？");
AddBullet("•", "是否避免了指责和评判，聚焦于行为和结果？");
AddBullet("•", "最终是否达成了双方都能接受的改进方案？");

AddHeading3("复盘框架");
AddNormal("复盘时，请讨论以下问题：");
AddBullet("1.", "这场谈话的主要挑战是什么？");
AddBullet("2.", "经理在建立信任氛围方面做得如何？");
AddBullet("3.", "李明的防御性反应是否被有效化解？");
AddBullet("4.", "最终达成的方案是否具体、可执行？");
AddBullet("5.", "如果重新进行这场谈话，有什么改进空间？");

// Page break
var pb6 = new Paragraph();
pb6.Append(new Run(new Break { Type = BreakValues.Page }));
body.Append(pb6);

// ============== PART 5: INSTRUCTOR TOOLS ==============
AddHeading1("第五部分：讲师工具");

// Time Control Table
AddHeading2("5.1 讲师时间控制表");

AddHeading3("UYLP课程整体时间分配");
AddNormal("标准课程时间：2天（每天6小时，总计12小时）");
AddTable(new[] {
    "天数|模块|时长|累计",
    "第一天上午|模块一：领导者角色与绩效管理体系|3小时|3小时",
    "第一天上午|模块二：辅导入门（WHEN/HOW/Y）前30分钟|0.5小时|3.5小时",
    "第一天下午|模块二：辅导入门（续）+ 体验活动|3小时|6.5小时",
    "第一天下午|模块三：有效反馈（CAIR模型）|2.5小时|9小时",
    "第二天上午|模块四：困难谈话|3小时|12小时",
    "第二天上午|模块五：联结沟通与工作关系|2小时|14小时",
    "第二天下午|模块五：体验活动（三岛救援）|1.5小时|15.5小时",
    "第二天下午|模块六：高级辅导、有效授权与MAP|3小时|18.5小时",
    "第二天下午|总结与行动计划|1.5小时|20小时"
});

AddNormal("注：可根据实际情况调整各模块的时间分配，保持总时长不变。");

AddHeading3("单模块时间控制建议");
AddNormal("每个模块（以3小时为例）建议时间分配：");
AddBullet("•", "开场与连接：15-20分钟");
AddBullet("•", "理论讲解：40-50分钟");
AddBullet("•", "体验/练习活动：60-70分钟");
AddBullet("•", "讨论与复盘：20-30分钟");
AddBullet("•", "总结与行动计划：10-15分钟");

AddNormal("");

// Performance Observation Form
AddHeading2("5.2 学员表现观察量表");

AddHeading3("整体课堂表现观察");
AddTable(new[] {
    "观察维度|观察要点|学员A|学员B|学员C|学员D",
    "参与度|积极发言| | | | ",
    "参与度|主动提问| | | | ",
    "倾听|认真聆听他人| | | | ",
    "倾听|做好记录| | | | ",
    "思考|能提出有深度的观点| | | | ",
    "互动|与组员有效合作| | | | ",
    "应用|能将学习与实际工作关联| | | | "
});

AddHeading3("技能练习观察（角色扮演/辅导练习）");
AddTable(new[] {
    "技能维度|观察要点|学员A|学员B|学员C|学员D",
    "建立氛围|使用开放性语言| | | | ",
    "建立氛围|展现尊重与接纳| | | | ",
    "内容结构|逻辑清晰，层次分明| | | | ",
    "内容结构|聚焦行为而非人格| | | | ",
    "倾听|确认理解对方观点| | | | ",
    "倾听|用提问澄清细节| | | | ",
    "影响|阐述行为的影响| | | | ",
    "影响|从对方角度阐述影响| | | | ",
    "行动|引导对方提出解决方案| | | | ",
    "行动|明确下一步行动| | | | ",
    "行动|约定时间节点| | | | "
});

AddNormal("评分标准：5=优秀 4=良好 3=达标 2=需改进 1=不达标");

AddNormal("");

// Course Evaluation Guide
AddHeading2("5.3 课程评估指引");

AddHeading3("四级评估模型");
AddNormal("本课程采用Kirkpatrick四级评估模型：");

AddHeading3("第一级：反应评估（课程结束时）");
AddNormal("通过问卷调查收集学员对课程的即时反应：");
AddBullet("•", "课程内容的实用性评分（1-5分）");
AddBullet("•", "讲师的授课质量评分（1-5分）");
AddBullet("•", "培训组织的满意度评分（1-5分）");
AddBullet("•", "\"最实用的一个工具/方法\"（开放式）");
AddBullet("•", "\"最想改进的一个行为\"（开放式）");

AddHeading3("第二级：学习评估（课程结束后1个月）");
AddNormal("通过测试或作业评估学员的学习成果：");
AddBullet("•", "FEAC/CAIR模型的理论测试");
AddBullet("•", "实际辅导案例的分析报告");
AddBullet("•", "角色扮演视频的自我评估");

AddHeading3("第三级：行为评估（课程结束后3个月）");
AddNormal("通过360度反馈或上级观察评估行为改变：");
AddBullet("•", "直接上级评估下属的辅导频率和质量");
AddBullet("•", "团队成员评估反馈文化的改变");
AddBullet("•", "关键利益相关者访谈");

AddHeading3("第四级：结果评估（课程结束后6-12个月）");
AddNormal("通过业务指标评估对组织的影响：");
AddBullet("•", "团队绩效指标的改善");
AddBullet("•", "员工敬业度/满意度评分变化");
AddBullet("•", "管理岗位流失率变化");

AddNormal("");

// Crisis Management
AddHeading2("5.4 危机处理预案");

AddHeading3("常见课堂危机及应对策略");

AddHeading3("1. 学员沉默不语");
AddNormal("可能原因：");
AddBullet("•", "问题太开放，不知道如何回答");
AddBullet("•", "担心回答错误");
AddBullet("•", "与小组不熟悉");
AddNormal("应对策略：");
AddBullet("•", "将开放性问题改为选择题或判断题");
AddBullet("•", "先请比较活跃的学员分享，降低心理门槛");
AddBullet("•", "给予更多思考时间，或改为小组讨论");
AddBullet("•", "用\"匿名纸条\"方式收集意见");

AddHeading3("2. 学员过度主导讨论");
AddNormal("可能原因：");
AddBullet("•", "性格外向，习惯表达");
AddBullet("•", "想展示自己");
AddNormal("应对策略：");
AddBullet("•", "感谢其贡献，明确表示\"我们来听听其他人的观点\"");
AddBullet("•", "采用\"接力发言\"方式，每人限时发言");
AddBullet("•", "设置更具体的问题，引导其他学员参与");
AddBullet("•", "在小组讨论环节，特别邀请沉默者发言");

AddHeading3("3. 学员提出敏感/个人问题");
AddNormal("可能原因：");
AddBullet("•", "对某个工具有困惑");
AddBullet("•", "想分享个人经历");
AddNormal("应对策略：");
AddBullet("•", "感谢提问，将问题\"化个人为普遍\"");
AddBullet("•", "\"这是个很好的问题，我们私下来交流\"");
AddBullet("•", "如果涉及隐私，明确表示尊重并转移回课程内容");
AddBullet("•", "避免在课堂上讨论具体的绩效问题或个人矛盾");

AddHeading3("4. 学员挑战讲师观点");
AddNormal("可能原因：");
AddBullet("•", "有不同的实践经验");
AddBullet("•", "对某个工具有疑虑");
AddNormal("应对策略：");
AddBullet("•", "开放心态倾听，\"你分享的经历是什么？\"");
AddBullet("•", "邀请其他学员发表不同观点");
AddBullet("•", "承认工具的局限性，讨论适用边界");
AddBullet("•", "\"你的观点很有价值，能详细说说吗？\"");

AddHeading3("5. 学员情绪激动");
AddNormal("可能原因：");
AddBullet("•", "课程内容触及过往经历");
AddBullet("•", "与同事/上级有矛盾");
AddNormal("应对策略：");
AddBullet("•", "保持冷静，表达理解");
AddBullet("•", "必要时暂停活动");
AddBullet("•", "私下沟通，了解情况");
AddBullet("•", "如果情绪严重超标，建议休息或寻求专业帮助");
AddBullet("•", "不要在课堂上施加压力");

AddHeading3("6. 活动参与度低");
AddNormal("可能原因：");
AddBullet("•", "活动设计不符合学员需求");
AddBullet("•", "时间安排不合理");
AddBullet("•", "学员疲劳");
AddNormal("应对策略：");
AddBullet("•", "询问原因，了解真实想法");
AddBullet("•", "调整活动形式（如从小组改为两人对话）");
AddBullet("•", "安排短暂休息");
AddBullet("•", "强调活动的实际应用价值");

AddHeading3("危机处理原则");
AddKeyPoint("安全第一", "始终确保学员的人身安全和心理安全");
AddKeyPoint("尊重差异", "允许不同观点，避免正面冲突");
AddKeyPoint("灵活应变", "根据现场情况灵活调整计划");
AddKeyPoint("课后跟进", "对需要个别关注的学员课后跟进");

// Page break
var pb7 = new Paragraph();
pb7.Append(new Run(new Break { Type = BreakValues.Page }));
body.Append(pb7);

// ============== APPENDIX ==============
AddHeading1("附录");

// Appendix A: Core Models
AddHeading2("附录A：核心模型速查");

AddHeading3("FEAC辅导四步法");
AddTable(new[] {
    "步骤|关键行为|话术示例",
    "F - Feel 感受情境|描述具体行为和结果|\"我注意到你这个月的项目报告提交了3次，每次都有数据错误...\"",
    "E - Effect 影响分析|阐述对团队/目标的影响|\"这导致团队需要花额外时间来核对数据，影响了整体工作效率...\"",
    "A - Alternative 替代方案|引导对方思考方案|\"你觉得下次如何避免这个问题？\"",
    "C - Commitment 承诺确认|明确行动和时间|\"那我们约定下周一之前完成修订，到时候再对一遍，好吗？\""
});

AddHeading3("CAIR反馈法");
AddTable(new[] {
    "步骤|关键行为|话术示例",
    "C - Context 情境|说明反馈的背景|\"在今天下午的客户会议上...\"",
    "A - Action 行为|描述具体行为|\"你打断了客户三次，提供了不同的建议...\"",
    "I - Impact 影响|阐述影响和后果|\"这让客户显得不受尊重，会议氛围变得紧张...\"",
    "R - Request 请求|明确期望改变|\"下次能否先完整听完客户的表述再回应？\""
});

AddHeading3("困难谈话四步法");
AddTable(new[] {
    "步骤|关键行为|话术示例",
    "铺垫|创造安全氛围，说明目的|\"今天想和你聊一下项目进展的问题，这是一次坦诚的沟通...\"",
    "事实|客观描述，避免指责|\"最近三周，项目有两次延期...\"（而非\"你总是拖延\"）",
    "影响|阐述对团队的影响|\"这影响了团队的整体进度，也让其他同事需要加班来弥补...\"",
    "期望|明确期望改变|\"希望我们能一起找到解决方案，确保后续项目按时交付...\""
});

AddHeading3("MAP授权追踪");
AddTable(new[] {
    "步骤|关键行为|问题提示",
    "M - Monitor 监控|定期检查进度|\"这个项目的当前进度如何？\"",
    "A - Assess 评估|评估差距与风险|\"目前的状态和预期有什么差距吗？\"",
    "P - Provide 提供支持|根据需要提供指导|\"需要我提供什么支持？\""
});

AddHeading3("辅导风格选择（根据员工准备度）");
AddTable(new[] {
    "准备度|特征|辅导风格|管理者行为",
    "高|能力强、意愿高|支持型|设定挑战性目标，充分授权",
    "中-高|能力强、意愿不稳定|教练型|双向沟通，共同解决问题",
    "中-低|能力弱、意愿高|导师型|提供明确指导，鼓励提问",
    "低|能力弱或意愿低|指令型|具体指导，密切监督"
});

AddNormal("");

// Appendix B: References
AddHeading2("附录B：参考资料");

AddHeading3("推荐书籍");
AddBullet("1.", "《非暴力沟通》- 马歇尔·卢森堡");
AddBullet("2.", "《关键对话》- 科里·帕特森等");
AddBullet("3.", "《高绩效教练》- 约翰·惠特默");
AddBullet("4.", "《领导力教练》- 凯伦·金西等");
AddBullet("5.", "《权力的48条法则》- 罗伯特·格林");

AddHeading3("推荐视频资源");
AddBullet("•", "TED演讲：\"How great leaders inspire action\" - Simon Sinek");
AddBullet("•", "TED演讲：\"The power of vulnerability\" - Brené Brown");
AddBullet("•", "TED演讲：\"The art of asking\" - Amanda Palmer");

AddHeading3("管理工具推荐");
AddBullet("•", "GROW模型（目标-现实-选择-意愿）");
AddBullet("•", "SBI反馈模型（情境-行为-影响）");
AddBullet("•", "STAR复盘法（情境-任务-行动-结果）");

AddNormal("");

// Appendix C: Glossary
AddHeading2("附录C：术语表");

AddTable(new[] {
    "术语|英文|定义",
    "UYLP|Unlock Your Leadership Potential|释放你的领导潜能，一套领导力发展课程体系",
    "辅导|Coaching|通过提问和引导，帮助对方自我反思和找到解决方案的管理方式",
    "反馈|Feedback|关于行为、表现或结果的信息，帮助对方调整和改进",
    "授权|Delegation|将任务和责任分配给团队成员，并赋予相应的决策权",
    "绩效管理|Performance Management|包括目标设定、过程辅导、结果评估和反馈发展的完整体系",
    "FEAC|FEAC Model|感受情境-影响分析-替代方案-承诺确认的四步辅导法",
    "CAIR|CAIR Model|情境-行为-影响-请求的四步反馈法",
    "MAP|MAP Model|监控-评估-支持的授权追踪模型",
    "准备度|Readiness|员工完成任务的能力和意愿的综合状态"
});

// ============== PAGE SETUP ==============
var sectPr = new SectionProperties();
var pageSize = new PageSize { Width = 16838, Height = 23811 }; // A4
var pageMargin = new PageMargin { Top = 1134, Right = 1134, Bottom = 1134, Left = 1134, Header = 851, Footer = 851 };
sectPr.Append(pageSize);
sectPr.Append(pageMargin);
body.Append(sectPr);

// Save
mainPart.Document.Save();
doc.Dispose();
Console.WriteLine($"Document created successfully: {outputPath}");
