#r "nuget: DocumentFormat.OpenXml, 3.2.0"

using DocumentFormat.OpenXml;
using DocumentFormat.OpenXml.Packaging;
using DocumentFormat.OpenXml.Wordprocessing;

// Output path
string outputPath = args.Length > 0 ? args[0] : "output.docx";

var doc = WordprocessingDocument.Create(outputPath, WordprocessingDocumentType.Document);
var mainPart = doc.AddMainDocumentPart();
mainPart.Document = new Document();
var body = new Body();

// Set page size and margins (A4)
var sectionProps = new SectionProperties(
    new PageSize { Width = 11906, Height = 16838 },
    new PageMargin { Top = 1440, Right = 1440, Bottom = 1440, Left = 1440, Header = 720, Footer = 720 }
);

// Helper functions
Action<string, string, bool> AddHeading = (text, styleId, bool isBold) => {
    var p = new Paragraph();
    var pPr = new ParagraphProperties(new ParagraphStyleId { Val = styleId });
    p.Append(pPr);
    var r = new Run();
    var rPr = new RunProperties(new Bold());
    r.Append(rPr);
    r.Append(new Text(text));
    p.Append(r);
    body.Append(p);
};

Action<string> AddParagraph = (text) => {
    var p = new Paragraph();
    var r = new Run();
    r.Append(new Text(text));
    p.Append(r);
    body.Append(p);
};

Action<string, string[]> AddBulletPoint = (text, levels) => {
    var p = new Paragraph();
    var pPr = new ParagraphProperties();
    pPr.Append(new NumberingProperties(new NumberingLevelReference { Val = levels.Length - 1 },
        new NumberingId { Val = 1 }));
    p.Append(pPr);
    var r = new Run();
    r.Append(new Text(text));
    p.Append(r);
    body.Append(p);
};

// Title
var title = new Paragraph();
var titleProps = new ParagraphProperties(
    new Justification { Val = JustificationValues.Center },
    new SpacingBetweenLines { After = "400" }
);
title.Append(titleProps);
var titleRun = new Run();
var titleRunProps = new RunProperties(
    new Bold(),
    new FontSize { Val = "48" },
    new FontSizeComplexScript { Val = "48" }
);
titleRun.Append(titleRunProps);
titleRun.Append(new Text("关键时刻：以服务建立企业竞争优势"));
title.Append(titleRun);
body.Append(title);

// Subtitle
var subtitle = new Paragraph();
var subProps = new ParagraphProperties(
    new Justification { Val = JustificationValues.Center },
    new SpacingBetweenLines { After = "400" }
);
subtitle.Append(subProps);
var subRun = new Run();
var subRunProps = new RunProperties(
    new FontSize { Val = "28" },
    new FontSizeComplexScript { Val = "28" },
    new Color { Val = "666666" }
);
subRun.Append(subRunProps);
subRun.Append(new Text("——服务类版权课学员大纲"));
subtitle.Append(subRun);
body.Append(subtitle);

// Course positioning section
AddHeading("课程定位", "Heading1", true);
AddParagraph("服务类版权课");
AddParagraph("");
AddParagraph("目标学员：");
AddBulletPoint("客户经理", new[] { "0" });
AddBulletPoint("技术工程师", new[] { "0" });
AddBulletPoint("客服中心人员", new[] { "0" });
AddParagraph("");

// Course framework
AddHeading("课程框架", "Heading1", true);
AddParagraph("");
AddParagraph("第一部分：理解服务，树立服务意识");
AddParagraph("第二部分探索（上）：客户利益分析、内部客户、期望管理、倾听");
AddParagraph("第二部分探索（下）：提问技术、聆听技术、异议引导、案例分析");
AddParagraph("第三四部分提议与行动：恰当提议、双重分析、5C原则、心理需要、呈现利益");
AddParagraph("第五部分确认：画龙点睛、补救济机会、确认用语、综合复盘");
AddParagraph("第六部分总结：知识地图、关系经营、行动计划");
AddParagraph("");

// Module details
AddHeading("第一部分：理解服务，树立服务意识", "Heading1", true);
AddHeading("学习目标", "Heading2", true);
AddBulletPoint("理解服务的本质和价值", new[] { "0" });
AddBulletPoint("识别服务意识在工作中的具体表现", new[] { "0" });
AddBulletPoint("建立以客户为中心的服务理念", new[] { "0" });
AddParagraph("");
AddHeading("内容概要", "Heading2", true);
AddParagraph("服务意识觉醒：通过案例分析，理解服务不只是技能，而是态度和价值观");
AddParagraph("关键时刻概念：引入关键时刻（Moment of Truth）理论");
AddParagraph("服务利润链：理解服务与企业价值的关联");
AddParagraph("");

AddHeading("第二部分探索（上）：客户视角", "Heading1", true);
AddHeading("学习目标", "Heading2", true);
AddBulletPoint("掌握客户利益分析方法", new[] { "0" });
AddBulletPoint("理解内部客户概念及其重要性", new[] { "0" });
AddBulletPoint("学会管理客户期望", new[] { "0" });
AddBulletPoint("掌握有效倾听技术", new[] { "0" });
AddParagraph("");
AddHeading("内容概要", "Heading2", true);
AddParagraph("客户利益分析：区分产品特征、客户利益和用户价值");
AddParagraph("内部客户：理解组织内部服务关系对外部服务的影响");
AddParagraph("期望管理：识别、设定和引导客户期望的技巧");
AddParagraph("倾听技术：active listening 主动倾听技巧");
AddParagraph("");

AddHeading("第二部分探索（下）：沟通技术", "Heading1", true);
AddHeading("学习目标", "Heading2", true);
AddBulletPoint("掌握开放式和封闭式提问技术", new[] { "0" });
AddBulletPoint("深化聆听和理解能力", new[] { "0" });
AddBulletPoint("学会引导客户接受不同观点", new[] { "0" });
AddBulletPoint("通过案例分析强化技能应用", new[] { "0" });
AddParagraph("");
AddHeading("内容概要", "Heading2", true);
AddParagraph("提问技术：开放式问题挖掘需求，封闭式问题确认理解");
AddParagraph("聆听技术：层次化聆听，从表面到深层");
AddParagraph("异议引导：处理客户反对意见的黄金法则");
AddParagraph("案例分析：真实服务场景角色扮演与讨论");
AddParagraph("");

AddHeading("第三四部分：提议与行动", "Heading1", true);
AddHeading("学习目标", "Heading2", true);
AddBulletPoint("学会提出恰当的服务提议", new[] { "0" });
AddBulletPoint("掌握双赢谈判的双重分析", new[] { "0" });
AddBulletPoint("运用5C原则确保提议质量", new[] { "0" });
AddBulletPoint("理解客户心理需要并呈现利益", new[] { "0" });
AddParagraph("");
AddHeading("内容概要", "Heading2", true);
AddParagraph("恰当提议：符合客户需求和期望的建议");
AddParagraph("双重分析：既分析自己也分析对手的谈判策略");
AddParagraph("5C原则：Clear清晰、Complete完整、Correct准确、Convincing有说服力、Concrete具体");
AddParagraph("心理需要：马斯洛需求层次在服务中的应用");
AddParagraph("呈现利益：FAB法则（Feature-Advantage-Benefit）");
AddParagraph("");

AddHeading("第五部分：确认", "Heading1", true);
AddHeading("学习目标", "Heading2", true);
AddBulletPoint("掌握服务过程中的确认技巧", new[] { "0" });
AddBulletPoint("学会在关键时刻画龙点睛", new[] { "0" });
AddBulletPoint("补救济机会，转化不满为满意", new[] { "0" });
AddBulletPoint("使用正确的确认用语巩固服务成果", new[] { "0" });
AddParagraph("");
AddHeading("内容概要", "Heading2", true);
AddParagraph("画龙点睛：在服务结束时给客户留下深刻正面印象");
AddParagraph("补救济机会：服务失误后的补救策略");
AddParagraph("确认用语：服务确认的标准话术");
AddParagraph("综合复盘：服务全过程回顾与优化");
AddParagraph("");

AddHeading("第六部分：总结与行动", "Heading1", true);
AddHeading("学习目标", "Heading2", true);
AddBulletPoint("绘制个人服务知识地图", new[] { "0" });
AddBulletPoint("理解关系经营的重要性", new[] { "0" });
AddBulletPoint("制定个人服务能力提升计划", new[] { "0" });
AddParagraph("");
AddHeading("内容概要", "Heading2", true);
AddParagraph("知识地图：整合课程所学，构建个人服务方法论");
AddParagraph("关系经营：从一次服务到长期关系的转化策略");
AddParagraph("行动计划：SMART目标制定，将学习转化为行动");
AddParagraph("");

// Course info
AddHeading("课程信息", "Heading1", true);
AddParagraph("建议时长：2天（每天6小时，共12小时）");
AddParagraph("班级规模：20-30人");
AddParagraph("教学方式：理论讲解、案例分析、角色扮演、小组讨论、工具实践");

body.Append(sectionProps);
mainPart.Document.Append(body);
mainPart.Document.Save();
doc.Dispose();

Console.WriteLine($"Document created: {outputPath}");
