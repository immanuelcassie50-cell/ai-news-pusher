using DocumentFormat.OpenXml;
using DocumentFormat.OpenXml.Packaging;
using DocumentFormat.OpenXml.Wordprocessing;

// Output path
var outputPath = "D:/新课开发/服务和体验/关键时刻：以服务建立企业竞争优势/完整课程包/05_讲师手册/讲师手册_关键时刻.docx";

// Ensure directory exists
Directory.CreateDirectory(Path.GetDirectoryName(outputPath)!);

using var doc = WordprocessingDocument.Create(outputPath, WordprocessingDocumentType.Document);
var mainPart = doc.AddMainDocumentPart();
mainPart.Document = new Document();
var body = new Body();

// ========== Style Definitions ==========
var stylesPart = mainPart.AddNewPart<StyleDefinitionsPart>();
var styles = new Styles();

// Normal style
var normalStyle = new Style { Type = StyleValues.Paragraph, StyleId = "Normal", Default = true };
normalStyle.Append(new StyleName { Val = "Normal" });
var normalPPr = new StyleParagraphProperties();
normalPPr.Append(new SpacingBetweenLines { After = "160", Line = "276", LineRule = LineSpacingRuleValues.Auto });
normalStyle.Append(normalPPr);
var normalRPr = new StyleRunProperties();
normalRPr.Append(new RunPropertiesBaseStyle());
normalStyle.Append(normalRPr);
styles.Append(normalStyle);

// Heading1
var h1Style = CreateStyle("Heading1", "Heading 1", "1F3864", "36", true, false);
styles.Append(h1Style);

// Heading2
var h2Style = CreateStyle("Heading2", "Heading 2", "2E75B6", "28", true, false);
styles.Append(h2Style);

// Heading3
var h3Style = CreateStyle("Heading3", "Heading 3", "333333", "24", true, false);
styles.Append(h3Style);

stylesPart.Styles = styles;
stylesPart.Styles.Save();

// ========== Page Setup ==========
body.Append(new SectionProperties(
    new PageSize { Width = 11906, Height = 16838 },
    new PageMargin { Top = 1440, Right = 1440, Bottom = 1440, Left = 1440, Header = 720, Footer = 720 }
));

// ========== COVER PAGE ==========
AddCoverPage(body);

// ========== PREAMBLE ==========
AddPreamble(body);

// ========== TABLE OF CONTENTS ==========
AddTableOfContents(body);

// ========== ALL MODULES ==========
AddModule1(body);
AddModule2Upper(body);
AddModule2Lower(body);
AddModule3_4(body);
AddModule5(body);
AddModule6(body);

// ========== APPENDIX ==========
AddAppendix(body);

mainPart.Document.Append(body);
mainPart.Document.Save();

Console.WriteLine($"Document created: {outputPath}");

// ========== HELPER FUNCTIONS ==========

Style CreateStyle(string id, string name, string color, string fontSize, bool bold, bool italic)
{
    var style = new Style { Type = StyleValues.Paragraph, StyleId = id, Default = true };
    style.Append(new StyleName { Val = name });

    var pPr = new StyleParagraphProperties();
    pPr.Append(new SpacingBetweenLines { After = "160", Line = "276", LineRule = LineSpacingRuleValues.Auto });
    style.Append(pPr);

    var rPr = new StyleRunProperties();
    if (bold) rPr.Append(new Bold());
    if (italic) rPr.Append(new Italic());
    rPr.Append(new Color { Val = color });
    rPr.Append(new FontSize { Val = fontSize });
    rPr.Append(new FontSizeComplexScript { Val = fontSize });
    style.Append(rPr);

    return style;
}

void AddH1(string text)
{
    var p = new Paragraph();
    p.Append(new ParagraphProperties(new ParagraphStyleId { Val = "Heading1" }));
    p.Append(new Run(new RunProperties(new Bold(), new Color { Val = "1F3864" }, new FontSize { Val = "36" }), new Text(text)));
    body.Append(p);
}

void AddH2(string text)
{
    var p = new Paragraph();
    p.Append(new ParagraphProperties(new ParagraphStyleId { Val = "Heading2" }));
    p.Append(new Run(new RunProperties(new Bold(), new Color { Val = "2E75B6" }, new FontSize { Val = "28" }), new Text(text)));
    body.Append(p);
}

void AddH3(string text)
{
    var p = new Paragraph();
    p.Append(new ParagraphProperties(new ParagraphStyleId { Val = "Heading3" }));
    p.Append(new Run(new RunProperties(new Bold(), new Color { Val = "333333" }, new FontSize { Val = "24" }), new Text(text)));
    body.Append(p);
}

void AddPara(string text)
{
    var p = new Paragraph();
    p.Append(new ParagraphProperties(new SpacingBetweenLines { After = "160", Line = "276", LineRule = LineSpacingRuleValues.Auto }));
    p.Append(new Run(new Text(text)));
    body.Append(p);
}

void AddBullet(string text)
{
    var p = new Paragraph();
    p.Append(new ParagraphProperties(
        new SpacingBetweenLines { After = "80", Line = "276", LineRule = LineSpacingRuleValues.Auto },
        new Indentation { Left = "720", Hanging = "360" }
    ));
    p.Append(new Run(new Text("• " + text)));
    body.Append(p);
}

void AddKeyPoint(string title, string content)
{
    var p = new Paragraph();
    var pPr = new ParagraphProperties();
    pPr.Append(new SpacingBetweenLines { Before = "240", After = "240" });
    pPr.Append(new Shading { Val = ShadingPatternValues.Clear, Fill = "E7EFF9" });
    pPr.Append(new Indentation { Left = "720" });
    var borders = new ParagraphBorders();
    borders.Append(new LeftBorder { Val = BorderValues.Thick, Color = "2E75B6", Size = 24 });
    pPr.Append(borders);
    p.Append(pPr);

    var rPr1 = new RunProperties();
    rPr1.Append(new Bold());
    rPr1.Append(new Color { Val = "1F3864" });
    p.Append(new Run(rPr1, new Text(title + " ") { Space = SpaceProcessingModeValues.Preserve }));

    p.Append(new Run(new Text(content)));
    body.Append(p);
}

void AddTableHeaderRow(string[] cells)
{
    var row = new TableRow();
    row.Append(new TableRowProperties(new TableHeader()));

    foreach (var cellText in cells)
    {
        var cell = new TableCell();
        var tcPr = new TableCellProperties();
        tcPr.Append(new Shading { Val = ShadingPatternValues.Clear, Fill = "1F3864" });
        tcPr.Append(new TableCellWidth { Width = "2000" });
        cell.Append(tcPr);

        var p = new Paragraph();
        p.Append(new ParagraphProperties(new Justification { Val = JustificationValues.Center }));
        var rPr = new RunProperties();
        rPr.Append(new Bold());
        rPr.Append(new Color { Val = "FFFFFF" });
        rPr.Append(new FontSize { Val = "22" });
        p.Append(new Run(rPr, new Text(cellText)));
        cell.Append(p);
        row.Append(cell);
    }
    body.Append(row);
}

void AddTableDataRow(string[] cells)
{
    var row = new TableRow();

    foreach (var cellText in cells)
    {
        var cell = new TableCell();
        var tcPr = new TableCellProperties();
        tcPr.Append(new Shading { Val = ShadingPatternValues.Clear, Fill = "FFFFFF" });
        tcPr.Append(new TableCellWidth { Width = "2000" });
        cell.Append(tcPr);

        var p = new Paragraph();
        p.Append(new Run(new Text(cellText)));
        cell.Append(p);
        row.Append(cell);
    }
    body.Append(row);
}

void AddPageBreak()
{
    var p = new Paragraph();
    var pPr = new ParagraphProperties();
    pPr.Append(new PageBreakBefore());
    p.Append(pPr);
    body.Append(p);
}

// ========== DOCUMENT SECTIONS ==========

void AddCoverPage(Body body)
{
    // Main Title
    var p1 = new Paragraph();
    p1.Append(new ParagraphProperties(
        new Justification { Val = JustificationValues.Center },
        new SpacingBetweenLines { Before = "2400", After = "480" }
    ));
    var rPr1 = new RunProperties();
    rPr1.Append(new FontSize { Val = "52" });
    rPr1.Append(new Bold());
    rPr1.Append(new Color { Val = "1F3864" });
    p1.Append(new Run(rPr1, new Text("关键时刻")));
    body.Append(p1);

    var p2 = new Paragraph();
    p2.Append(new ParagraphProperties(
        new Justification { Val = JustificationValues.Center },
        new SpacingBetweenLines { Before = "240", After = "960" }
    ));
    var rPr2 = new RunProperties();
    rPr2.Append(new FontSize { Val = "36" });
    rPr2.Append(new Bold());
    rPr2.Append(new Color { Val = "2E75B6" });
    p2.Append(new Run(rPr2, new Text("以服务建立企业竞争优势")));
    body.Append(p2);

    var p3 = new Paragraph();
    p3.Append(new ParagraphProperties(
        new Justification { Val = JustificationValues.Center },
        new SpacingBetweenLines { Before = "480", After = "240" }
    ));
    var rPr3 = new RunProperties();
    rPr3.Append(new FontSize { Val = "28" });
    rPr3.Append(new Color { Val = "666666" });
    p3.Append(new Run(rPr3, new Text("—— 讲师手册 ——")));
    body.Append(p3);

    var p4 = new Paragraph();
    p4.Append(new ParagraphProperties(
        new Justification { Val = JustificationValues.Center },
        new SpacingBetweenLines { Before = "4800", After = "240" }
    ));
    var rPr4 = new RunProperties();
    rPr4.Append(new FontSize { Val = "28" });
    rPr4.Append(new Color { Val = "666666" });
    p4.Append(new Run(rPr4, new Text("FACILITATOR GUIDE")));
    body.Append(p4);

    var p5 = new Paragraph();
    p5.Append(new ParagraphProperties(
        new Justification { Val = JustificationValues.Center },
        new SpacingBetweenLines { Before = "1200", After = "240" }
    ));
    var rPr5 = new RunProperties();
    rPr5.Append(new FontSize { Val = "18" });
    rPr5.Append(new Italic());
    rPr5.Append(new Color { Val = "999999" });
    p5.Append(new Run(rPr5, new Text("本手册为内部培训使用材料，请勿对外传播")));
    body.Append(p5);

    AddPageBreak();
}

void AddPreamble(Body body)
{
    AddH1("关于本课程");

    AddH2("课程定位");
    AddPara("关键时刻（Moment of Truth）课程是一门帮助企业员工建立服务意识、掌握关键时刻服务技能的系统性培训课程。课程核心理念是：服务不是附加价值，而是企业竞争的核心差异化来源。在产品日益同质化的今天，每一次与客户的接触都是建立忠诚度或失去客户的契机。");

    AddH2("课程框架");
    AddPara("课程共分为6个核心部分，涵盖服务意识的建立、服务探索、提议与行动、确认与跟进、以及总结复盘。整体遵循「探索-提议-确认」的客户服务闭环逻辑。");

    AddH2("课程基本信息");
    AddTableHeaderRow(new[] { "项目", "内容" });
    AddTableDataRow(new[] { "课程名称", "关键时刻：以服务建立企业竞争优势" });
    AddTableDataRow(new[] { "课程时长", "2天（每天6小时，共12小时）" });
    AddTableDataRow(new[] { "目标学员", "客户经理、技术工程师、客服中心人员" });
    AddTableDataRow(new[] { "课程类型", "服务意识与服务技能提升" });

    AddH2("设计理念");
    AddBullet("问题驱动，非知识点驱动：每个模块以真实服务失败案例开场，工具在解决问题的过程中自然涌现");
    AddBullet("先震撼后解释：开场先呈现反直觉的案例对比，制造认知冲击，然后再解释背后逻辑");
    AddBullet("练习是骨架：三级难度递进（识别→模仿→创造），每个知识点后都有配套练习");
    AddBullet("内容可超，节奏不拖：模块内容多于实际讲授时间，讲师可灵活取舍");
    AddBullet("闭环机制：每个模块的产出为下一模块的素材，最终流入整合模块");

    AddH2("适用学员");
    AddBullet("面向客户的销售和服务人员");
    AddBullet("技术工程师（需要与客户频繁沟通的专业技术人员）");
    AddBullet("客服中心人员（电话客服、现场服务人员）");
    AddBullet("有意识到「服务很重要，但不知道怎么做」的员工");

    AddPageBreak();
}

void AddTableOfContents(Body body)
{
    AddH1("目录");

    var tocItems = new[]
    {
        "第一部分 | 理解服务，树立服务意识",
        "第二部分（上）| 探索 - 客户利益分析、内部客户、期望管理、倾听",
        "第二部分（下）| 探索 - 提问技术、聆听技术、异议引导",
        "第三-四部分 | 提议与行动 - 恰当提议、双重分析、5C原则、心理需要、呈现利益",
        "第五部分 | 确认 - 画龙点睛、补救机会、确认用语、综合复盘",
        "第六部分 | 总结 - 知识地图、关系经营、行动计划",
        "附录一 | 讲师资格要求与课前准备清单",
        "附录二 | 课堂时间分配总表",
        "附录三 | 常见学员问题及应对方式",
        "附录四 | 教具/物料清单",
        "附录五 | 课后辅导建议"
    };

    foreach (var item in tocItems)
    {
        AddPara(item);
    }

    AddPageBreak();
}

void AddModule1(Body body)
{
    AddH1("第一部分 | 理解服务，树立服务意识");
    AddPara("——让学员理解服务的本质，建立正确的服务意识框架");

    AddH2("建议时长");
    AddPara("55-70 分钟");

    AddH2("模块目标");
    AddBullet("学员能说出服务的本质：服务是创造价值、传递价值的过程");
    AddBullet("学员能区分「产品价值」与「服务价值」，理解两者如何相互强化");
    AddBullet("学员理解「关键时刻」的概念：每一个与客户的接触点都是建立或破坏信任的机会");

    AddH2("教学重难点");
    AddBullet("重点：理解服务意识的本质，从「卖产品」到「提供解决方案」的思维转变");
    AddBullet("难点：帮助学员识别自己日常工作中的关键时刻，建立主动服务意识");

    AddH2("推荐活动形式");
    AddBullet("案例讨论（小组）：分析服务失败与成功的对比案例");
    AddBullet("个人反思：识别自己工作中的关键时刻");

    AddH2("开场引导");
    AddPara("不要直接讲解「什么是服务」。先带学员读小李的故事——他在售后场景中的遭遇。然后问：「小李的诉求合理吗？工程师的处理方式有哪些问题？」让学员带着思考进入模块。");

    AddH2("核心概念讲解要点");

    AddH3("1. 服务的本质");
    AddPara("服务不是产品的附加项，而是价值的传递媒介。在竞争激烈的市场中，产品本身很难形成持续差异化，但服务可以。服务是客户感知价值的重要组成部分，甚至在某些行业（如金融、咨询、软件）服务本身就是核心产品。");

    AddH3("2. 关键时刻（Moment of Truth）");
    AddPara("关键时刻是指客户与企业发生接触的任何时刻。在这些时刻，客户会形成对企业的印象——正面的或负面的。研究表明，一个不满意的客户平均会告诉9-10个人，而一个满意的客户只会告诉3-4个人。关键时刻管理是服务营销的核心。");

    AddH3("3. 服务意识三层模型");
    AddPara("第一层：主动意识——看到客户需求；第二层：解决方案意识——提供超出期望的解决方案；第三层：情感连接意识——与客户建立信任关系。三层逐步深入，构成完整的服务意识。");

    AddH2("练习引导说明");
    AddH3("练习一：关键时刻识别（第一级）");
    AddPara("引导方式：给学员5分钟独立填写关键事件，然后两两分享，最后全班讨论。重点关注学员能否识别出那些「看似平常但实际很重要」的时刻。");

    AddH3("练习二：服务差距分析（第二级）");
    AddPara("引导方式：让学员分析自己经历的一次好的服务体验和一次差的服务体验，对比差距。这个练习帮助学员从客户视角理解服务。");

    AddH2("讲师话术模板");
    AddKeyPoint("开场引导：", "「大家有没有遇到过这样的情况：你买了一个产品，但售后服务让你对整个品牌失望？反过来，有没有因为服务特别好而对某个品牌产生忠诚？」");
    AddKeyPoint("概念讲解：", "「服务不是我们给了客户什么，而是客户感受到了什么。同样一杯咖啡，在路边摊和在五星酒店，客户期待和感知是不同的。」");
    AddKeyPoint("过渡总结：", "「理解服务意识是第一步。接下来我们要学习如何在每一个关键时刻把握机会，创造让客户难忘的正面体验。」");

    AddH2("过渡与衔接");
    AddPara("这个模块结束后，学员应该理解：服务不是「额外的付出」，而是「核心的竞争力」。接下来进入探索阶段——如何在服务过程中真正理解客户的需求和期望。");

    AddPageBreak();
}

void AddModule2Upper(Body body)
{
    AddH1("第二部分（上）| 探索 - 客户利益分析、内部客户、期望管理、倾听");
    AddPara("——在服务开始前，准确理解客户真正需要什么");

    AddH2("建议时长");
    AddPara("60-75 分钟");

    AddH2("模块目标");
    AddBullet("学员能准确分析客户的利益需求（显性需求）和情感需求（隐性需求）");
    AddBullet("学员能识别「内部客户」的概念，理解内部服务影响外部服务");
    AddBullet("学员能运用「期望管理」技巧设定合理的客户期望");
    AddBullet("学员掌握基本的倾听技巧，能在服务对话中表现出真正的倾听");

    AddH2("教学重难点");
    AddBullet("重点：利益分析和倾听技术——这是准确理解客户需求的基础");
    AddBullet("难点：区分「客户说的」和「客户真正需要的」，以及平衡客户期望");

    AddH2("推荐活动形式");
    AddBullet("角色扮演（两人对练）：练习利益分析对话");
    AddBullet("案例分析（小组）：分析期望管理成功与失败的案例");
    AddBullet("倾听练习（配对）：通过录音回放分析倾听表现");

    AddH2("开场引导");
    AddPara("带学员读张工程师的案例——他花了很大力气解决了客户提出的问题，但客户并不满意。问：「张工程师做错了什么？」让学员讨论2分钟后揭示答案——他解决了错误的问题。");

    AddH2("核心概念讲解要点");

    AddH3("1. 客户利益分析");
    AddPara("客户利益分为三个层次：业务利益（解决问题、提升效率、降低成本）、个人利益（成就感、面子、安全感）、情感利益（被尊重、被理解、放心感）。优秀的服务者不只是解决业务问题，而是三个层次同时回应。");

    AddH3("2. 内部客户概念");
    AddPara("「内部客户」是指组织内部的同事和部门。外部客户的服务体验很大程度上取决于内部服务的质量。跨部门协作不畅会直接反映在外部客户面前。内部客户意识是服务意识的重要组成部分。");

    AddH3("3. 期望管理");
    AddPara("客户期望是服务感知的参照点。过高的承诺会提高客户期望，一旦无法兑现就会产生不满；过低的承诺则会降低服务感知。优秀的服务者会设定「可实现的超越」——承诺七分，服务十分。");

    AddH3("4. 倾听技术");
    AddPara("倾听不只是听客户说了什么，还要听「没说什么」。倾听的三个层次：听见（听到了话语）、听懂（理解了意思）、听进去（让对方感受到被理解）。用身体语言表现倾听：眼神接触、点头、适当沉默。");

    AddH2("练习引导说明");
    AddH3("练习一：利益层次分析（第一级）");
    AddPara("引导方式：给出3个客户场景，让学员识别每个场景中客户可能有的三个层次的利益需求。重点关注「个人利益」和「情感利益」是否被识别出来。");

    AddH3("练习二：期望值设定（第二级）");
    AddPara("引导方式：角色扮演，一个学员扮演客服，一个扮演提出高要求的客户。练习设定合理期望同时不伤害客户关系。");

    AddH2("讲师话术模板");
    AddKeyPoint("利益分析：", "「客户说『我要快』——这是他的解决方案，不是他的需求。快是为了什么？可能是为了赶工期、为了不被领导批评、为了让自己安心。问『为什么』才能找到真正的利益。」");
    AddKeyPoint("期望管理：", "「不要害怕说『这有点挑战』或者『根据以往经验需要X天』。客户讨厌的不是等待，而是『不知道要等多久』。管理期望从给出具体时间框架开始。」");
    AddKeyPoint("倾听示范：", "「（面对情绪激动的客户）『我听到您说了……我理解这对您很重要……请您继续说，我在认真听。』——这几秒钟的停顿和复述，比立刻给解决方案更能平息客户情绪。」");

    AddH2("过渡与衔接");
    AddPara("理解了利益和期望，下一步就是如何通过提问和聆听来深入探索客户需求。进入第二部分（下）：提问技术、聆听技术与异议引导。");

    AddPageBreak();
}

void AddModule2Lower(Body body)
{
    AddH1("第二部分（下）| 探索 - 提问技术、聆听技术、异议引导");
    AddPara("——通过有效的提问和聆听，挖掘客户真实需求");

    AddH2("建议时长");
    AddPara("60-75 分钟");

    AddH2("模块目标");
    AddBullet("学员能运用「探索式提问」深入挖掘客户需求");
    AddBullet("学员能区分「封闭式提问」和「开放式提问」的使用场景");
    AddBullet("学员掌握深度聆听技巧，能听出客户话语背后的情绪和需求");
    AddBullet("学员能识别和处理客户异议，将异议转化为服务机会");

    AddH2("教学重难点");
    AddBullet("重点：开放式提问和深度聆听——这是准确理解需求的关键技能");
    AddBullet("难点：如何通过提问引导而不审问，如何在有异议时保持服务姿态");

    AddH2("推荐活动形式");
    AddBullet("提问练习（配对）：用开放式问题深入了解对方需求");
    AddBullet("聆听实验（小组）：通过角色扮演体验深度聆听和浅度聆听差异");
    AddBullet("异议处理演练：练习将客户异议转化为服务机会");

    AddH2("开场引导");
    AddPara("展示两个对话对比：一个是用封闭式问题快速「审问」，一个是开放式问题「聊天式探索」。让学员判断哪个效果好，然后讨论为什么。");

    AddH2("核心概念讲解要点");

    AddH3("1. 提问技术");
    AddPara("封闭式问题（可以用「是/否」回答）：用于确认信息、缩小范围。开放式问题（需要描述回答）：用于探索需求、打开话题。探索式追问：连续追问「为什么」「比如」「能举个例子吗」，直到找到真正的需求。");

    AddH3("2. 聆听技术");
    AddPara("深度聆听的四个要点：专注（放下手中事情），共情（想象自己站在客户角度），复述（用自己的话总结客户的表达），确认（确认理解是否准确）。聆听的敌人：打断客户、想好答案、评判客户。");

    AddH3("3. 异议引导");
    AddPara("客户异议不是障碍，而是深入了解需求的机会。「您说得对……同时……」（先承认，合理转折）。常见的异议类型：不着急、觉得贵、不信任、已经用别家了。每种类型有不同的应对策略。");

    AddH2("练习引导说明");
    AddH3("练习一：开放式问题设计（第一级）");
    AddPara("引导方式：给出5个封闭式问题，让学员改写成开放式问题。然后两人配对，互相练习用开放式问题了解对方的「工作烦恼」。");

    AddH3("练习二：深度聆听（第二级）");
    AddPara("引导方式：一人讲述自己最近的工作困惑3分钟，另一人只聆听不提问。然后复述听到的内容，对方评价是否准确。这个练习让学员体验「被听到」的感觉。");

    AddH3("练习三：异议处理（第三级）");
    AddPara("引导方式：角色扮演，设定「客户提出价格异议」场景。让学员练习使用「认可-理解-转化」框架处理异议。");

    AddH2("讲师话术模板");
    AddKeyPoint("开放式提问：", "「您能描述一下理想中的服务体验是什么样的吗？」「当时的情况是怎样的？」「这对您意味着什么？」——这些问题帮助客户展开思考，让服务者看到需求的全貌。」");
    AddKeyPoint("深度聆听：", "「（对方说完后停顿2秒）『让我确认一下我听到了……您说的是……对吗？』——这个简单的复述动作，告诉客户『我在认真听』。」");
    AddKeyPoint("异议处理：", "「『您的担心是有道理的，确实市场上有些产品……（承认）。不过我们之所以……（转折），是因为……（给出差异点）。这对您意味着……（利益呈现）。」");

    AddH2("过渡与衔接");
    AddPara("探索阶段的完成意味着我们真正理解了客户的需求和期望。接下来进入第三部分：如何基于理解，提出恰当的服务方案。");

    AddPageBreak();
}

void AddModule3_4(Body body)
{
    AddH1("第三-四部分 | 提议与行动 - 恰当提议、双重分析、5C原则、心理需要、呈现利益");
    AddPara("——基于对客户的理解，提出恰当的服务方案并有效呈现");

    AddH2("建议时长");
    AddPara("75-90 分钟");

    AddH2("模块目标");
    AddBullet("学员能基于利益分析，提出「恰当」的解决方案——不过度承诺，也不自我设限");
    AddBullet("学员掌握「双重分析」方法：从客户视角和企业视角同时评估方案可行性");
    AddBullet("学员理解并运用5C原则（Clear, Complete, Concrete, Correct, Consideration）撰写服务方案");
    AddBullet("学员能识别客户的心理需要，在方案呈现中呼应情感需求");
    AddBullet("学员掌握「呈现利益」的技巧：用客户语言而非产品语言表达价值");

    AddH2("教学重难点");
    AddBullet("重点：恰当提议和利益呈现——这是将服务理解转化为服务行动的关键环节");
    AddBullet("难点：平衡客户期望与企业能力，以及用客户语言表达价值");

    AddH2("推荐活动形式");
    AddBullet("方案设计练习（个人）：根据给定的客户场景设计服务方案");
    AddBullet("角色扮演（两人对练）：向「客户」呈现方案，收集反馈并改进");
    AddBullet("案例分析（小组）：分析成功和失败的服务提议案例");

    AddH2("开场引导");
    AddPara("带学员读王经理的故事——他提交了一份「完美」的技术方案，但客户拒绝了。问：「为什么客户会拒绝一个看起来很专业的方案？」让学员讨论2分钟后揭示答案——方案是从产品角度设计的，不是从客户利益角度设计的。");

    AddH2("核心概念讲解要点");

    AddH3("1. 恰当提议（Appropriate Proposal）");
    AddPara("恰当的提议不是「最好的」方案，而是「最适合」客户当前情况的方案。过度承诺会损害信任，承诺不足会降低感知价值。恰当 = 满足客户核心需求 + 在企业能力范围内 + 给客户留有超越空间。");

    AddH3("2. 双重分析（Dual Analysis）");
    AddPara("提出方案前，同时从两个角度分析：从客户角度——这个方案解决了什么问题？带来了什么价值？从企业角度——这个方案可行吗？成本收益如何？只有两个角度都通过，方案才具备实施条件。");

    AddH3("3. 5C原则");
    AddPara("Clear（清晰）：方案目标明确，客户能听懂。Complete（完整）：覆盖了问题的各个层面。Concrete（具体）：有具体的行动步骤和时间。Correct（正确）：技术上可行、符合企业政策。Considerate（体贴）：考虑了客户的其他顾虑和限制。");

    AddH3("4. 心理需要回应");
    AddPara("客户不只是买功能，也是买感觉。方案中要回应客户的心理需要：安全感（我会保护你的利益）、尊严感（你的需求很重要）、掌控感（你有选择权）、信任感（我们说到做到）。");

    AddH3("5. 利益呈现（Presenting Benefits）");
    AddPara("用「客户语言」而非「产品语言」呈现利益。错误示范：「我们的产品有XXX功能」（产品语言）。正确示范：「这意味着您可以XXX（客户利益）」。FEA框架：Feature（功能）→ Evidence（证据）→ Advantage（优势）→ Benefit（利益）。");

    AddH2("练习引导说明");
    AddH3("练习一：5C方案检查（第一级）");
    AddPara("引导方式：给出一个存在问题的服务方案，让学员用5C原则找出每个C的缺陷。");

    AddH3("练习二：利益改写（第二级）");
    AddPara("引导方式：给出一组「产品语言」表述，让学员改写成「利益语言」。然后两人配对，互相用利益语言介绍同一个产品。");

    AddH3("练习三：综合提案（第三级）");
    AddPara("引导方式：基于之前练习的客户场景，学员独立完成一份完整的服务方案，包括双重分析、5C检查和利益呈现。完成后邀请2-3位学员分享，全班用5C标准反馈。");

    AddH2("讲师话术模板");
    AddKeyPoint("恰当提议：", "「方案不需要多完美，关键是对症下药。客户现在最痛的是什么？我们的方案能解决这个问题吗？如果能，就是恰当的。」");
    AddKeyPoint("利益呈现：", "「不要说『我们有24小时响应』——说『意味着您的生产线如果停机，最多等24小时就能恢复，我们知道时间就是金钱。』」");
    AddKeyPoint("双重分析提醒：", "「大家写方案时容易只考虑『怎么让客户满意』，忘了想『我们能做得到吗』。一个无法兑现的承诺，比不承诺更有害。」");

    AddH2("过渡与衔接");
    AddPara("好的方案是成功的一半，另一半在于如何确认客户接受了这个方案，以及在服务过程中如何管理客户满意度。进入第五部分：确认——画龙点睛的服务收尾。");

    AddPageBreak();
}

void AddModule5(Body body)
{
    AddH1("第五部分 | 确认 - 画龙点睛、补救机会、确认用语、综合复盘");
    AddPara("——在关键时刻画上圆满的句号，将满意客户转化为忠诚客户");

    AddH2("建议时长");
    AddPara("55-70 分钟");

    AddH2("模块目标");
    AddBullet("学员理解「画龙点睛」的意义：服务结束时的确认动作决定客户最终感知");
    AddBullet("学员能识别「补救机会」——服务失误后的第二次机会，往往比第一次更能建立忠诚");
    AddBullet("学员掌握「确认用语」的标准表达，在服务关键时刻使用恰当的语言");
    AddBullet("学员能运用「综合复盘」方法对一次服务经历进行完整回顾和总结");

    AddH2("教学重难点");
    AddBullet("重点：画龙点睛和确认用语——这是服务闭环的核心环节");
    AddBullet("难点：如何在服务失误后进行有效的补救和关系修复");

    AddH2("推荐活动形式");
    AddBullet("案例分析（小组）：分析服务补救成功和失败的案例");
    AddBullet("角色扮演（对练）：练习服务结束时的确认对话");
    AddBullet("复盘练习（个人）：对自己最近一次服务经历进行复盘");

    AddH2("开场引导");
    AddPara("问学员：「服务结束的那一刻，你们一般会说什么？」收集几个答案后，展示两个对比：一个是匆匆结束（『好了，就这样，有问题再联系』），一个是画龙点睛（『让我确认一下今天我们达成的内容……』）。问学员：「如果你是客户，哪种让你更放心？」");

    AddH2("核心概念讲解要点");

    AddH3("1. 画龙点睛（Service Closure）");
    AddPara("服务结束时的确认动作，是「关键时刻中的关键时刻」。好的结尾让客户感到：事情是确定的、我的需求被认真对待、有问题还能找到你。四个确认要素：确认内容（我们今天做了什么）、确认时间（什么时候完成）、确认感受（您对这个结果满意吗）、确认后续（如果有问题怎么联系）。");

    AddH3("2. 补救机会（Recovery Opportunity）");
    AddPara("服务失误是不可避免的，但处理失误的方式可以决定结果。研究表明，主动承认错误并解决问题的客户，满意度比从未出现问题时更高（被称为「服务补救悖论」）。补救的关键：承认错误 → 表示歉意 → 分析原因 → 提出方案 → 跟踪确认。");

    AddH3("3. 确认用语（Confirmation Language）");
    AddPara("服务结束时使用的语言会影响客户的事后回忆。肯定性确认（「我很高兴我们达成了一致」）比中性表述（「就这样」）更能让客户记住正面体验。避免「但是」（会让之前说的都无效）。");

    AddH3("4. 综合复盘（Service Review）");
    AddPara("服务复盘是持续提升服务能力的关键。四个复盘维度：客户视角（他的需求被满足了吗）、自己视角（我做对了什么、可以改进什么）、流程视角（系统是否支持好的服务）、未来视角（下一次如何做得更好）。");

    AddH2("练习引导说明");
    AddH3("练习一：确认对话设计（第一级）");
    AddPara("引导方式：给出几个不同的服务结束场景，让学员设计确认对话。两人配对练习，互相扮演服务者和客户。");

    AddH3("练习二：服务补救（第二级）");
    AddPara("引导方式：角色扮演「服务出了问题」，学员练习使用补救框架处理投诉。最后讨论：什么时候补救有效？什么时候无效？");

    AddH3("练习三：服务复盘（第三级）");
    AddPara("引导方式：让学员回忆最近一次不满意的服务经历（可以是自己是服务者，也可以是客户）。用四个复盘维度写一篇简短的复盘报告。邀请2-3位分享。");

    AddH2("讲师话术模板");
    AddKeyPoint("画龙点睛：", "「让我来确认一下今天的成果：我们约定了……时间节点是……如果过程中有新情况，您可以联系我……您看还有什么需要补充的吗？」");
    AddKeyPoint("补救开场：", "「我认真听了您说的情况，我承认在……方面我们做得不够好。我很抱歉。让我来看看我们能怎么解决……」");
    AddKeyPoint("复盘提醒：", "「每次服务结束，不要急着接下一个任务。花2分钟在脑子里过一遍：今天客户的核心需求是什么？我有没有真正回应？这个经历对我下次有什么启示？」");

    AddH2("过渡与衔接");
    AddPara("确认是单个关键时刻的收尾，但服务能力的提升需要整体复盘和持续改进。进入最后一部分：总结——建立服务知识地图，制定个人行动计划。");

    AddPageBreak();
}

void AddModule6(Body body)
{
    AddH1("第六部分 | 总结 - 知识地图、关系经营、行动计划");
    AddPara("——将两天的学习转化为可落地的服务能力提升计划");

    AddH2("建议时长");
    AddPara("50-60 分钟");

    AddH2("模块目标");
    AddBullet("学员能绘制自己的「关键时刻服务知识地图」，串联各模块知识点");
    AddBullet("学员理解「关系经营」的概念：将单次服务转化为长期关系");
    AddBullet("学员制定具体的「服务改进行动计划」，包含可衡量的目标和具体的练习场景");

    AddH2("教学重难点");
    AddBullet("重点：知识地图的绘制和行动计划的制定——这是将学习转化为行为的关键");
    AddBullet("难点：从「知道」到「做到」——如何确保行动计划能够被执行");

    AddH2("推荐活动形式");
    AddBullet("知识地图绘制（个人+小组）：用可视化方式串联课程知识点");
    AddBullet("关系经营讨论（小组）：讨论如何将单次服务转化为长期客户关系");
    AddBullet("行动计划制定（个人）：制定30天服务改进计划");

    AddH2("开场引导");
    AddPara("「两天的学习即将结束。在离开教室之前，我想请大家回想：来之前你对服务的理解是什么？现在呢？」让学员安静思考1分钟后，进入知识地图环节。");

    AddH2("核心概念讲解要点");

    AddH3("1. 关键时刻服务知识地图");
    AddPara("将两天的学习内容串联成一张地图：探索（理解需求）→ 提议（提出方案）→ 确认（闭环收尾）。每个环节的核心技能：探索（提问、聆听、利益分析）→ 提议（5C原则、利益呈现）→ 确认（画龙点睛、服务补救）。");

    AddH3("2. 关系经营（Relationship Management）");
    AddPara("单次服务是「交易」，持续服务是「关系」。关系经营的关键：主动跟进（不只是等客户来找）、个性化关怀（记住客户的特点和偏好）、创造惊喜（在承诺之外给一点小惊喜）。研究表明，获得一个新客户的成本是保持一个老客户的5倍。");

    AddH3("3. 行动计划制定（30-Day Action Plan）");
    AddPara("好的行动计划包含：具体目标（不是「我要提升服务」，而是「我要在每次服务开始时先确认客户期望」）、可衡量的指标（每周至少3次主动确认）、具体的练习场景（选择哪些场景先练习）、跟进机制（如何自我监督）。");

    AddH2("练习引导说明");
    AddH3("练习一：知识地图绘制（第二级）");
    AddPara("引导方式：给学员15分钟，在白纸或A4纸上画出自己版本的「关键时刻服务知识地图」。包括：你认为最重要的3个知识点、最想改进的1个技能、最大的1个认知转变。完成后邀请3-4位分享。");

    AddH3("练习二：关系经营计划（第二级）");
    AddPara("引导方式：小组讨论「你如何将一次好的服务体验转化为长期客户关系？」每组给出3个具体做法，全班汇总。");

    AddH3("练习三：30天行动计划（第三级）");
    AddPara("引导方式：这是整门课最重要的产出练习。给学员20分钟完成自己的30天行动计划。包含：重点练习的技能（选1个）、第一个练习场景（选1个具体场景）、自我监督方式（找谁监督/怎么记录）。完成后两人配对互相说出对方的计划，增加社会承诺感。");

    AddH2("讲师话术模板");
    AddKeyPoint("知识地图总结：", "「探索-提议-确认，这三个环节不是割裂的，而是一个循环。每次服务结束，都是下一次服务开始的探索阶段。持续改进的秘诀，就是让这个循环不断转动。」");
    AddKeyPoint("关系经营：", "「客户忠诚度不是靠『产品质量好』建立的，而是靠『我记得你是谁，你记得我的需求』建立的。每一次服务结束后的跟进，都是关系存钱的机会。」");
    AddKeyPoint("结束语：", "「课程到这里就结束了，但你们的练习才刚刚开始。记住：服务不是天赋，是可以学习的技能；不是一次表现，是持续的练习。第一步，你现在就可以迈出去。」");

    AddH2("结尾仪式");
    AddPara("可以增加一个小仪式：让每位学员在卡片上写下「我离开这个教室后，第一个要做的服务改进是什么」，收集后随机抽3-5张朗读。这让学员带着明确的承诺离开。");

    AddPageBreak();
}

void AddAppendix(Body body)
{
    AddH1("附录一 | 讲师资格要求与课前准备清单");

    AddH2("讲师资格要求");
    AddH3("基本资质");
    AddBullet("具备企业培训或客户服务相关领域3年以上工作经验");
    AddBullet("接受过「关键时刻」课程体系内部认证");
    AddBullet("具备良好的表达能力和现场应变能力");
    AddBullet("熟悉课程内容，能够流畅引导各模块的讨论和练习");

    AddH3("推荐特质");
    AddBullet("有实际客户服务经验（销售、技术支持、客服等岗位）");
    AddBullet("善于倾听，能敏感地捕捉学员的反馈并调整引导方式");
    AddBullet("有耐心，愿意等待学员思考和表达");
    AddBullet("有服务意识——讲师本身是课程的「活教材」");

    AddH2("课前准备清单");
    AddH3("【建议】请在课前48小时内逐项确认以下事项");

    AddH3("内容熟悉度");
    AddBullet("熟读本次讲授的模块对应的教学文档");
    AddBullet("准备自己在每个模块上的1-2个真实亲身经历案例");
    AddBullet("预演各练习的示范答案，确保能在现场展示");
    AddBullet("熟悉附录中的参考答案，准备好应对学员的不同答案");

    AddH3("学员信息");
    AddBullet("了解学员背景：行业、岗位层级、平均工作年限");
    AddBullet("了解学员现有服务水平（可通过报名问卷或访谈收集）");
    AddBullet("识别可能对课程提出质疑或认知抵触的学员类型");
    AddBullet("确认学员规模：20人以内（最佳）、20-30人（可行）、30人以上（需调整互动设计）");

    AddH3("材料准备");
    AddBullet("学员手册（每人一份，已打印）");
    AddBullet("配套表单（每人一套，已装订）");
    AddBullet("A4纸备用，用于额外练习书写");
    AddBullet("白板/翻页纸板，用于现场板书和练习展示");
    AddBullet("计时器（建议使用投影计时，或手机分屏显示）");
    AddBullet("贴纸或卡片，用于练习成果展示（推荐A5卡片）");

    AddH3("室内布置");
    AddBullet("圆桌或岛型分组座位（4-6人一组）——优先于剧院式座位");
    AddBullet("每桌配备彩色马克笔 + 白板纸/便签纸");
    AddBullet("讲台可见但不孤立，讲师能方便地走到学员间");
    AddBullet("投影屏幕可从室内所有位置清晰阅读");

    AddPageBreak();

    AddH1("附录二 | 课堂时间分配总表");

    AddPara("以下为2天（每天6小时）课程的时间分配建议。总计12小时 = 720分钟。");

    AddH2("第一天时间分配");
    AddTableHeaderRow(new[] { "时间段", "内容模块", "时长", "活动形式" });
    AddTableDataRow(new[] { "0:00-0:30", "签到、预热", "30分钟", "自由交流" });
    AddTableDataRow(new[] { "0:30-1:00", "开场破冰 + 课程框架介绍", "30分钟", "讲师引导" });
    AddTableDataRow(new[] { "1:00-1:55", "第一部分：理解服务，树立服务意识", "55分钟", "概念讲解 + 案例讨论" });
    AddTableDataRow(new[] { "1:55-2:05", "休息", "10分钟", "" });
    AddTableDataRow(new[] { "2:05-3:20", "第二部分（上）：探索 - 利益分析、期望管理、倾听", "75分钟", "概念讲解 + 角色扮演" });
    AddTableDataRow(new[] { "3:20-3:50", "午餐", "30分钟", "" });
    AddTableDataRow(new[] { "3:50-5:05", "第二部分（下）：提问技术、聆听技术、异议引导", "75分钟", "概念讲解 + 配对练习" });
    AddTableDataRow(new[] { "5:05-5:15", "休息", "10分钟", "" });
    AddTableDataRow(new[] { "5:15-6:00", "第一天总结 + 第二天预习", "45分钟", "个人复盘 + 小组分享" });

    AddH2("第二天时间分配");
    AddTableHeaderRow(new[] { "时间段", "内容模块", "时长", "活动形式" });
    AddTableDataRow(new[] { "0:00-0:30", "签到 + 回顾第一天内容", "30分钟", "小组复述" });
    AddTableDataRow(new[] { "0:30-1:00", "第二部分回顾答疑", "30分钟", "问答互动" });
    AddTableDataRow(new[] { "1:00-2:30", "第三-四部分：提议与行动", "90分钟", "方案设计 + 角色扮演" });
    AddTableDataRow(new[] { "2:30-2:40", "休息", "10分钟", "" });
    AddTableDataRow(new[] { "2:40-3:50", "第五部分：确认 - 画龙点睛、服务补救、综合复盘", "70分钟", "案例分析 + 复盘练习" });
    AddTableDataRow(new[] { "3:50-4:20", "午餐", "30分钟", "" });
    AddTableDataRow(new[] { "4:20-5:20", "第六部分：总结 - 知识地图、关系经营、行动计划", "60分钟", "知识地图 + 30天计划" });
    AddTableDataRow(new[] { "5:20-5:30", "休息", "10分钟", "" });
    AddTableDataRow(new[] { "5:30-6:00", "结课仪式 + 行动计划分享", "30分钟", "小组分享 + 全体仪式" });

    AddPageBreak();

    AddH1("附录三 | 常见学员问题及应对方式");

    AddH2("情境一：学员认为「服务不就是讨好客户吗」");
    AddPara("问题本质：学员把服务理解为「卑微的迎合」，而非「专业的价值传递」。");
    AddKeyPoint("应对方式：", "「服务不是讨好，是专业。讨好是无原则的退让，服务是在专业基础上创造客户价值。两者的区别在于：讨好是『客户说什么都对』，服务是『我比你更懂你的需求』。真正的服务高手，是让客户觉得『你懂我』，而不是『你听我的』。」");

    AddH2("情境二：学员说「我工作太忙了，没时间做这些」");
    AddPara("问题本质：学员把服务视为「额外工作」，而非「工作方式」。");
    AddKeyPoint("应对方式：", "「好的服务不是增加工作量，而是减少问题。如果每次服务都做到位，客户的重复投诉、紧急电话会少很多。服务做得好，是给自己省时间，不是添麻烦。」");

    AddH2("情境三：学员说「客户期望太高了，怎么做都不满意」");
    AddPara("问题本质：学员没有掌握期望管理技巧，或者遇到了确实难以满足的客户。");
    AddKeyPoint("应对方式：", "「客户的期望有一部分是我们自己造成的——过度承诺。另一个原因是『信息不对称』——客户不知道我们的难处。所以管理期望有两个层面：一是承诺前管理（不要说满），二是信息透明（让客户知道我们在做什么）。如果确实遇到难以满足的客户，也要专业地说『这是我们能做到的，您看看是否接受』。」");

    AddH2("情境四：学员主导讨论，其他人插不进来");
    AddPara("问题本质：有个别非常活跃的学员，占据了大部分发言时间。");
    AddKeyPoint("应对方式：", "感谢这位学员的分享，然后主动请其他人：「刚才这个观点，有没有人在实际工作中有不同的经验？」或者直接用练习把讨论结构化——每人写下答案，不只是口头讨论。」");

    AddH2("情境五：练习时间不够");
    AddPara("问题本质：内容讲解超时，到练习环节剩余时间不足。");
    AddKeyPoint("应对方式：", "优先保证第三级练习（真实场景应用）的时间，缩减第一级和第二级练习的展开讨论。如果时间实在不够，可以把某个练习改为课后独立完成，第二天再快速分享要点。」");

    AddH2("情境六：学员说「这些在真实工作中根本用不了」");
    AddPara("问题本质：学员认为课程内容「太理论化」，与实际脱节。");
    AddKeyPoint("应对方式：", "「你说得很对——如果我们只是『听』，那是用不了。但这门课的设计是『用』。每个练习都有真实场景，每个工具都有操作步骤。今天回去之后，选一个真实的客户对话，用『探索-提议-确认』的结构过一遍，你就会发现——你已经在用了。」");

    AddPageBreak();

    AddH1("附录四 | 教具/物料清单");

    AddH2("核心物料");
    AddTableHeaderRow(new[] { "序号", "物料名称", "数量", "备注" });
    AddTableDataRow(new[] { "1", "学员手册", "每人1本", "含课程内容、案例、练习表单" });
    AddTableDataRow(new[] { "2", "配套表单集", "每人1套", "含练习表单、行动计划模板" });
    AddTableDataRow(new[] { "3", "A4纸（空白）", "每人10张", "备用练习书写" });
    AddTableDataRow(new[] { "4", "白板纸（A1或A2）", "每组2张", "小组练习展示用" });
    AddTableDataRow(new[] { "5", "彩色马克笔", "每组1套（4色）", "白板纸书写" });
    AddTableDataRow(new[] { "6", "便签纸", "每组1本", "快速想法记录" });
    AddTableDataRow(new[] { "7", "计时器/倒计时APP", "1个", "控制练习时间" });
    AddTableDataRow(new[] { "8", "名片/姓名牌", "每人1个", "便于相互认识" });

    AddH2("场地布置要求");
    AddBullet("座位：岛型或圆桌分组，每组4-6人");
    AddBullet("白板：至少1个， preferably 2个");
    AddBullet("投影：屏幕清晰可见，配备翻页笔");
    AddBullet("音响：用于开场音乐、热场视频（如有）");
    AddBullet("茶歇区：设置在教室外，不影响课程进行");
    AddBullet("电源插座：每桌附近有插座，供学员设备充电");
    AddBullet("温度：提前调试，室温保持在22-24度");
    AddBullet("灯光：可调节亮度，便于投影和书写");

    AddH2("可选物料（根据预算增加）");
    AddBullet("拍立得相机：拍摄小组练习场景，用于结课回顾");
    AddBullet("小奖品：奖励积极参与的学员（如书签、文具）");
    AddBullet("课程徽章/证书：结课时颁发，增强仪式感");

    AddPageBreak();

    AddH1("附录五 | 课后辅导建议");

    AddH2("课后跟进时间线");
    AddTableHeaderRow(new[] { "时间节点", "跟进内容", "方式" });
    AddTableDataRow(new[] { "课后24小时内", "发送课程PPT金句版、知识点清单", "邮件/微信" });
    AddTableDataRow(new[] { "课后3天", "确认学员行动计划落实情况", "邮件收集" });
    AddTableDataRow(new[] { "课后7天", "第一次实践分享（选2-3个成功案例）", "线上群分享" });
    AddTableDataRow(new[] { "课后14天", "第一次答疑（30分钟线上会议）", "视频会议" });
    AddTableDataRow(new[] { "课后30天", "行动计划完成情况跟进", "邮件/电话" });
    AddTableDataRow(new[] { "课后90天", "深度复盘 + 新场景练习（可选）", "线下工作坊" });

    AddH2("行动计划的跟进机制");
    AddPara("学员在课程结束时制定「30天服务改进行动计划」，建议以下跟进方式：");
    AddBullet("承诺公开化：行动计划在小组内互相知晓，形成社会承诺");
    AddBullet("自我打卡：每天用1句话记录自己的服务实践，发到课程群");
    AddBullet("同伴监督：两两组队，互相询问对方的行动计划进展");
    AddBullet("讲师支持：学员遇到实践困惑可以随时联系讲师，获得指导");

    AddH2("进阶学习建议");
    AddBullet("三个月内：选择1-2个模块进行深化学习，阅读推荐书单");
    AddBullet("六个月内：申请担任课程助教，获得现场实战机会");
    AddBullet("一年内：完成内部讲师认证，可以独立授课");
    AddBullet("持续：每季度回顾一次自己的服务表现，找出新一年的改进重点");

    AddH2("推荐阅读");
    AddBullet("《关键时刻》- 詹·卡尔森（Jan Carlzon）- 服务的经典之作");
    AddBullet("《服务意识》- 培训与发展协会");
    AddBullet("《客户服务的100个基本》- 麦克·贝恩");

    AddH2("结语");
    AddPara("课程结束了，但服务之旅才刚刚开始。每一个「关键时刻」都是一次建立信任的机会。愿各位在今后的工作中，创造更多让客户难忘的正面时刻，也在这个过程中，收获属于自己的职业成就感。");
}