using DocumentFormat.OpenXml;
using DocumentFormat.OpenXml.Packaging;
using DocumentFormat.OpenXml.Wordprocessing;
using System.Text;
using System.IO;

string basePath = "D:/新课开发/工作手册/非正式网络识别与激活/完整课程包/08-练习资料";
string casePath = "D:/新课开发/工作手册/非正式网络识别与激活/完整课程包/09-案例集";

Directory.CreateDirectory(basePath);
Directory.CreateDirectory(casePath);

// ==================== EXERCISE 1 ====================
void CreateExercise1()
{
    string outputPath = Path.Combine(basePath, "01-练习1-行为痕迹识别.docx");
    using var doc = WordprocessingDocument.Create(outputPath, WordprocessingDocumentType.Document);
    var mainPart = doc.AddMainDocumentPart();
    mainPart.Document = new Document(new Body());
    var body = mainPart.Document.Body;

    AddDocDefaults(mainPart);

    // Title
    AddParagraph(body, "练习1：行为痕迹识别练习", true, "36", JustificationValues.Center, "400");
    AddParagraph(body, "——从邮件和会议中识别非正式网络的行为痕迹", false, "28", JustificationValues.Center, "200");

    // Section 1: 练习目标
    AddHeading(body, "一、练习目标", 1);
    AddBullet(body, "理解三条识别路径：信息流转痕迹、求助路径、被绕开的节点");
    AddBullet(body, "能够从给定的描述中识别行为痕迹");
    AddBullet(body, "掌握填写行为痕迹收集表的方法");

    // Section 2: 场景描述
    AddHeading(body, "二、场景描述", 1);
    AddParagraph(body, "【背景】某制造业公司最近面临一个跨部门项目延期的困扰。项目负责人老王（项目经理）向公司管理层汇报时说，问题出在各部门配合不力。但管理层希望了解更具体的情况——是谁在配合中出了问题。", false, "24", JustificationValues.Left, "200", "360");

    AddSubHeading(body, "场景一：项目周会邮件");
    AddParagraph(body, "邮件主题：【项目周报】关于A产品线自动化改造项目进度", false, "22", JustificationValues.Left, "0", "720");
    AddParagraph(body, "发件人：老王（项目经理）  主送：生产部张经理、研发部李经理、质量部陈经理", false, "22", JustificationValues.Left, "0", "720");
    AddParagraph(body, "抄送：设备科刘师傅、财务部孙会计、市场部赵总", false, "22", JustificationValues.Left, "0", "720");
    AddParagraph(body, "邮件内容：\"关于这次设备调试的技术参数问题，建议大家直接联系设备科刘师傅确认，他最了解设备的实际状态。另外，市场部赵总提到的一个客户特殊要求，需要评估可行性，请研发部重点关注。\"", false, "22", JustificationValues.Left, "200", "720");

    AddSubHeading(body, "场景二：走廊对话");
    AddParagraph(body, "生产部张经理私下说：\"老王，那个交期问题我也急，但研发那边的技术方案一直定不下来。上次那个新材料的工艺问题，最后还是刘师傅帮我们找了个折中方案，不然肯定要拖更久。我看这事儿要想推进，得先问问刘师傅的意见，他门儿清。\"", false, "22", JustificationValues.Left, "200", "720");

    AddSubHeading(body, "场景三：会议外的电话");
    AddParagraph(body, "质量部陈经理私下给研发部李经理打电话：\"李经理，刚才会上那个质量标准的问题，我觉得我们俩私下再碰一下。市场部赵总提的那个返修率要求，说实话，我们实验室的条件很难达到。但这个问题我不想在正式会议上提，怕老王觉得我们在推脱责任。你看能不能帮忙想想，有没有折中方案？\"", false, "22", JustificationValues.Left, "200", "720");

    // Section 3: 任务要求
    AddHeading(body, "三、任务要求", 1);
    AddParagraph(body, "任务1：识别信息流转痕迹", true, "24");
    AddParagraph(body, "从以上场景中，找出被频繁抄送或提及的人，分析为什么是他/她被关注。", false, "22", JustificationValues.Left, "200", "360");

    AddParagraph(body, "任务2：识别求助路径", true, "24");
    AddParagraph(body, "当遇到问题时，人们第一反应是找谁？这个人与正式流程规定的人选有什么不同？", false, "22", JustificationValues.Left, "200", "360");

    AddParagraph(body, "任务3：识别被绕开的节点", true, "24");
    AddParagraph(body, "哪些正式流程节点被绕开了？被谁绕开？为什么？", false, "22", JustificationValues.Left, "200", "360");

    // Section 4: 产出表格
    AddHeading(body, "四、产出：行为痕迹收集表", 1);
    body.Append(CreateBehaviorTraceTable());

    // Section 5: 讨论问题
    AddHeading(body, "五、讨论问题", 1);
    AddBullet(body, "为什么设备科刘师傅被多方提及，但他并不是项目的正式成员？");
    AddBullet(body, "如果你是项目经理老王，你会如何利用这些信息来推动项目？");
    AddBullet(body, "这三条路径找到的人是同一批人，还是不同的人？说明了什么？");

    AddFooter(mainPart, doc, body);
    mainPart.Document.Save();
    Console.WriteLine($"Created: {outputPath}");
}

// ==================== EXERCISE 2 ====================
void CreateExercise2()
{
    string outputPath = Path.Combine(basePath, "02-练习2-隐性影响力中心判断.docx");
    using var doc = WordprocessingDocument.Create(outputPath, WordprocessingDocumentType.Document);
    var mainPart = doc.AddMainDocumentPart();
    mainPart.Document = new Document(new Body());
    var body = mainPart.Document.Body;

    AddDocDefaults(mainPart);

    AddParagraph(body, "练习2：隐性影响力中心判断练习", true, "36", JustificationValues.Center, "400");
    AddParagraph(body, "——识别三类隐性影响力中心：资历型、翻译型、担保型", false, "28", JustificationValues.Center, "200");

    AddHeading(body, "一、练习目标", 1);
    AddBullet(body, "理解三类隐性影响力中心的特征和区分标准");
    AddBullet(body, "能够根据给定的描述判断人物属于哪类中心");
    AddBullet(body, "掌握三类中心的评估方法");

    AddHeading(body, "二、核心概念回顾", 1);

    // Table for concept summary
    var table = new Table();
    table.Append(new TableProperties(
        new TableWidth { Width = "5000", Type = TableWidthUnitValues.Pct },
        new TableBorders(
            new TopBorder { Val = BorderValues.Single, Size = 8, Color = "000000" },
            new BottomBorder { Val = BorderValues.Single, Size = 8, Color = "000000" },
            new LeftBorder { Val = BorderValues.Single, Size = 8, Color = "000000" },
            new RightBorder { Val = BorderValues.Single, Size = 8, Color = "000000" },
            new InsideHorizontalBorder { Val = BorderValues.Single, Size = 4, Color = "000000" },
            new InsideVerticalBorder { Val = BorderValues.Single, Size = 4, Color = "000000" }
        ));

    var headerRow = new TableRow(new TableRowProperties(new TableHeader()));
    headerRow.Append(CreateHeaderCell("类型", "1200"));
    headerRow.Append(CreateHeaderCell("影响力来源", "1500"));
    headerRow.Append(CreateHeaderCell("典型特征", "2500"));
    headerRow.Append(CreateHeaderCell("失效信号", "2000"));
    table.Append(headerRow);

    string[,] rows = {
        { "资历型", "记忆", "\"以前是怎么处理的\"\n见证过好几任领导更替", "离职后组织反复踩同样的坑" },
        { "翻译型", "跨语言", "两边都信他不会偏心\n能翻译技术/管理语言", "调岗后跨部门协作断崖式下降" },
        { "担保型", "信誉", "\"我看过，没问题\"\n长期没有出错的背书记录", "连续背书失误后效力瓦解" }
    };

    for (int i = 0; i < 3; i++)
    {
        var row = new TableRow();
        row.Append(CreateDataCell(rows[i, 0], "1200"));
        row.Append(CreateDataCell(rows[i, 1], "1500"));
        row.Append(CreateDataCell(rows[i, 2], "2500"));
        row.Append(CreateDataCell(rows[i, 3], "2000"));
        table.Append(row);
    }
    body.Append(table);

    AddHeading(body, "三、场景描述", 1);
    AddParagraph(body, "以下是5个关键人物的描述，请仔细阅读每个人的背景和特征，判断他们分别属于哪类隐性影响力中心。", false, "24", JustificationValues.Left, "200");

    AddSubHeading(body, "人物A：综合协调干事老陈");
    AddParagraph(body, "在某国企工作超过25年，见证了公司从国企改革到上市的整个历程。现在是综合协调部门的正处级干事，没有分管任何业务条线，但每次几位副总开会意见不一致时，最后都会私下找他商量。他的办公室里常年放着一本厚厚的笔记，记录着历次重要决策的背景和原因。同事们遇到搞不清楚的历史惯例时，第一反应都是\"去问问老陈\"。", false, "22", JustificationValues.Left, "200", "360");

    AddSubHeading(body, "人物B：技术翻译小李");
    AddParagraph(body, "研发部门的技术骨干，在公司工作8年，同时有3年市场部工作经验。她能把研发部门的技术方案\"翻译\"成市场部能理解的语言，也能把客户需求用技术语言准确传达给研发团队。两边的人都信任她，认为她不会偏向任何一方。有一次她被借调到项目管理部半年，那段时间研发和市场之间的协调效率明显下降。", false, "22", JustificationValues.Left, "200", "360");

    AddSubHeading(body, "人物C：财务老会计孙姨");
    AddParagraph(body, "财务部资深会计，在公司工作20年，负责成本核算。她经手的预算从来没有出现过重大遗漏，多次在关键决策前提供的数据让高管们改变了原有判断。她常说\"做了这么多年账，谁的预算能兑现、谁的预算会虚高，我心里门儿清\"。每次公司有大额投资，高管们都会私下找她确认财务可行性。", false, "22", JustificationValues.Left, "200", "360");

    AddSubHeading(body, "人物D：销售经理老周");
    AddParagraph(body, "销售部经理，在公司工作12年，在区域市场有极强的人脉关系。他带领团队连续3年完成业绩目标，获得集团表彰。但他性格强势，跟生产部经理多次发生冲突，两人互不信任对方部门提供的信息。", false, "22", JustificationValues.Left, "200", "360");

    AddSubHeading(body, "人物E：采购专员小王");
    AddParagraph(body, "采购部专员，入职3年，是公司为数不多的\"空降\"员工（从前一家公司跳槽而来）。他与供应商的关系处理得非常好，能拿到比前任更低的价格。但他在公司内部人脉较浅，跟其他部门协作时经常需要反复解释自己的决策理由。", false, "22", JustificationValues.Left, "200", "360");

    AddHeading(body, "四、任务要求", 1);
    AddParagraph(body, "任务：完成隐性影响力中心评估表", true, "24");
    AddParagraph(body, "根据以上描述，判断每个人属于哪类中心，并说明判断依据。", false, "22", JustificationValues.Left, "200", "360");

    body.Append(CreateEvaluationTable());

    AddHeading(body, "五、讨论问题", 1);
    AddBullet(body, "如果一个人同时具备两种以上特征，应该如何分类？");
    AddBullet(body, "如果识别出的关键节点属于\"资历型\"但即将退休，应该如何建议？");
    AddBullet(body, "为什么同一组织中需要同时存在多种类型的隐性影响力中心？");

    AddFooter(mainPart, doc, body);
    mainPart.Document.Save();
    Console.WriteLine($"Created: {outputPath}");
}

Table CreateEvaluationTable()
{
    var table = new Table();
    table.Append(new TableProperties(
        new TableWidth { Width = "5000", Type = TableWidthUnitValues.Pct },
        new TableBorders(
            new TopBorder { Val = BorderValues.Single, Size = 8, Color = "000000" },
            new BottomBorder { Val = BorderValues.Single, Size = 8, Color = "000000" },
            new LeftBorder { Val = BorderValues.Single, Size = 8, Color = "000000" },
            new RightBorder { Val = BorderValues.Single, Size = 8, Color = "000000" },
            new InsideHorizontalBorder { Val = BorderValues.Single, Size = 4, Color = "000000" },
            new InsideVerticalBorder { Val = BorderValues.Single, Size = 4, Color = "000000" }
        ));

    var headerRow = new TableRow(new TableRowProperties(new TableHeader()));
    headerRow.Append(CreateHeaderCell("人物", "1000"));
    headerRow.Append(CreateHeaderCell("中心类型", "1200"));
    headerRow.Append(CreateHeaderCell("判断依据", "3000"));
    headerRow.Append(CreateHeaderCell("组织价值", "1800"));
    table.Append(headerRow);

    string[] names = { "A", "B", "C", "D", "E" };
    foreach (var name in names)
    {
        var row = new TableRow();
        row.Append(CreateDataCell($"人物{name}", "1000"));
        row.Append(CreateDataCell("", "1200"));
        row.Append(CreateDataCell("", "3000"));
        row.Append(CreateDataCell("", "1800"));
        table.Append(row);
    }
    return table;
}

// ==================== EXERCISE 3 ====================
void CreateExercise3()
{
    string outputPath = Path.Combine(basePath, "03-练习3-非正式网络地图绘制.docx");
    using var doc = WordprocessingDocument.Create(outputPath, WordprocessingDocumentType.Document);
    var mainPart = doc.AddMainDocumentPart();
    mainPart.Document = new Document(new Body());
    var body = mainPart.Document.Body;

    AddDocDefaults(mainPart);

    AddParagraph(body, "练习3：非正式网络地图绘制练习", true, "36", JustificationValues.Center, "400");
    AddParagraph(body, "——基于行为数据绘制网络关系图", false, "28", JustificationValues.Center, "200");

    AddHeading(body, "一、练习目标", 1);
    AddBullet(body, "理解网络地图的基本构成要素：节点、连接、方向");
    AddBullet(body, "能够将行为数据转化为网络关系图");
    AddBullet(body, "掌握识别关键节点的方法");

    AddHeading(body, "二、网络地图基础概念", 1);

    AddSubHeading(body, "1. 节点（Node）");
    AddParagraph(body, "代表组织中的个体。根据其在网络中的位置，可分为：", false, "24", JustificationValues.Left, "100");
    AddBullet(body, "中心节点：连接数量多，信息枢纽");
    AddBullet(body, "边缘节点：连接数量少，相对孤立");
    AddBullet(body, "桥接节点：连接两个不同群体");

    AddSubHeading(body, "2. 连接（Edge）");
    AddParagraph(body, "代表个体之间的实际协作关系。根据方向性，可分为：", false, "24", JustificationValues.Left, "100");
    AddBullet(body, "无向连接：双向协作，如互相抄送");
    AddBullet(body, "有向连接：单向流动，如求助关系");

    AddSubHeading(body, "3. 连接强度");
    AddParagraph(body, "根据互动频率，分为强连接和弱连接。强连接意味着高频协作，弱连接则相反。", false, "24", JustificationValues.Left, "200");

    AddHeading(body, "三、场景描述", 1);
    AddParagraph(body, "某科技公司项目组在一次内部项目中，收集到了以下协作行为数据（匿名化处理）：", false, "24", JustificationValues.Left, "200");

    // Data summary table
    var table = new Table();
    table.Append(new TableProperties(
        new TableWidth { Width = "5000", Type = TableWidthUnitValues.Pct },
        new TableBorders(
            new TopBorder { Val = BorderValues.Single, Size = 8, Color = "000000" },
            new BottomBorder { Val = BorderValues.Single, Size = 8, Color = "000000" },
            new LeftBorder { Val = BorderValues.Single, Size = 8, Color = "000000" },
            new RightBorder { Val = BorderValues.Single, Size = 8, Color = "000000" },
            new InsideHorizontalBorder { Val = BorderValues.Single, Size = 4, Color = "000000" },
            new InsideVerticalBorder { Val = BorderValues.Single, Size = 4, Color = "000000" }
        ));

    var headerRow = new TableRow(new TableRowProperties(new TableHeader()));
    headerRow.Append(CreateHeaderCell("行为类型", "2000"));
    headerRow.Append(CreateHeaderCell("发起人", "1500"));
    headerRow.Append(CreateHeaderCell("(" , "1500"));
    headerRow.Append(CreateHeaderCell("接收人", "1500"));
    headerRow.Append(CreateHeaderCell("频率", "1000"));
    table.Append(headerRow);

    string[,] behaviorData = {
        { "邮件抄送", "产品经理A", "→", "技术负责人B", "高" },
        { "邮件抄送", "产品经理A", "→", "项目经理C", "高" },
        { "邮件抄送", "项目经理C", "→", "技术负责人B", "高" },
        { "技术咨询", "工程师D", "→", "技术负责人B", "高" },
        { "技术咨询", "工程师E", "→", "技术负责人B", "中" },
        { "资源协调", "项目经理C", "→", "行政主管F", "中" },
        { "跨部门沟通", "项目经理C", "→", "市场专员G", "低" },
        { "邮件抄送", "市场专员G", "→", "产品经理A", "中" },
        { "求助", "工程师D", "→", "工程师E", "中" },
        { "信息传递", "行政主管F", "→", "项目经理C", "低" }
    };

    for (int i = 0; i < 10; i++)
    {
        var row = new TableRow();
        row.Append(CreateDataCell(behaviorData[i, 0], "2000"));
        row.Append(CreateDataCell(behaviorData[i, 1], "1500"));
        row.Append(CreateDataCell(behaviorData[i, 2], "1500"));
        row.Append(CreateDataCell(behaviorData[i, 3], "1500"));
        row.Append(CreateDataCell(behaviorData[i, 4], "1000"));
        table.Append(row);
    }
    body.Append(table);

    AddHeading(body, "四、任务要求", 1);

    AddParagraph(body, "任务1：绘制网络关系草图", true, "24");
    AddParagraph(body, "根据以上数据，在下方空白区域绘制简单的网络关系图。", false, "22", JustificationValues.Left, "100", "360");
    AddParagraph(body, "提示：", true, "22");
    AddBullet(body, "用圆圈表示节点（人物），标注姓名");
    AddBullet(body, "用箭头表示关系方向");
    AddBullet(body, "用线条粗细表示互动频率（粗=高频，细=低频）");

    AddParagraph(body, "【此处空白供绘图】", false, "22", JustificationValues.Left, "400", "360");

    AddParagraph(body, "任务2：识别关键节点", true, "24");
    AddParagraph(body, "根据你绘制的网络图，回答以下问题：", false, "22", JustificationValues.Left, "100", "360");
    AddBullet(body, "谁是信息枢纽？这个人连接了多少个节点？");
    AddBullet(body, "是否存在桥接节点？连接了哪两个群体？");
    AddBullet(body, "哪些节点相对边缘化？");
    AddBullet(body, "这个网络结构有什么特点？", true, "22");

    AddHeading(body, "五、产出：网络地图草稿", 1);
    body.Append(CreateNetworkMapTable());

    AddHeading(body, "六、讨论问题", 1);
    AddBullet(body, "技术负责人B为什么成为信息枢纽？这和他的职位匹配吗？");
    AddBullet(body, "如果B突然离职，这个网络会发生什么变化？");
    AddBullet(body, "如何利用这张网络图来优化团队协作？");

    AddFooter(mainPart, doc, body);
    mainPart.Document.Save();
    Console.WriteLine($"Created: {outputPath}");
}

Table CreateNetworkMapTable()
{
    var table = new Table();
    table.Append(new TableProperties(
        new TableWidth { Width = "5000", Type = TableWidthUnitValues.Pct },
        new TableBorders(
            new TopBorder { Val = BorderValues.Single, Size = 8, Color = "000000" },
            new BottomBorder { Val = BorderValues.Single, Size = 8, Color = "000000" },
            new LeftBorder { Val = BorderValues.Single, Size = 8, Color = "000000" },
            new RightBorder { Val = BorderValues.Single, Size = 8, Color = "000000" },
            new InsideHorizontalBorder { Val = BorderValues.Single, Size = 4, Color = "000000" },
            new InsideVerticalBorder { Val = BorderValues.Single, Size = 4, Color = "000000" }
        ));

    var headerRow = new TableRow(new TableRowProperties(new TableHeader()));
    headerRow.Append(CreateHeaderCell("节点（人物）", "1500"));
    headerRow.Append(CreateHeaderCell("角色类型", "1500"));
    headerRow.Append(CreateHeaderCell("连接数", "1000"));
    headerRow.Append(CreateHeaderCell("主要连接对象", "2000"));
    headerRow.Append(CreateHeaderCell("备注", "1500"));
    table.Append(headerRow);

    string[] nodes = { "A", "B", "C", "D", "E", "F", "G" };
    foreach (var node in nodes)
    {
        var row = new TableRow();
        row.Append(CreateDataCell($"人物{node}", "1500"));
        row.Append(CreateDataCell("", "1500"));
        row.Append(CreateDataCell("", "1000"));
        row.Append(CreateDataCell("", "2000"));
        row.Append(CreateDataCell("", "1500"));
        table.Append(row);
    }
    return table;
}

// ==================== HELPER FUNCTIONS ====================
TableCell CreateHeaderCell(string text, string width)
{
    var cell = new TableCell();
    cell.Append(new TableCellProperties(
        new Shading { Val = ShadingPatternValues.Clear, Fill = "E0E0E0" },
        new TableCellWidth { Width = width, Type = TableWidthUnitValues.DXA },
        new TableCellVerticalAlignment { Val = TableVerticalAlignmentValues.Center }
    ));
    cell.Append(CreateTableParagraph(text, true));
    return cell;
}

TableCell CreateDataCell(string text, string width)
{
    var cell = new TableCell();
    cell.Append(new TableCellProperties(
        new Shading { Val = ShadingPatternValues.Clear, Fill = "FFFFFF" },
        new TableCellWidth { Width = width, Type = TableWidthUnitValues.DXA },
        new TableCellVerticalAlignment { Val = TableVerticalAlignmentValues.Center }
    ));
    cell.Append(CreateTableParagraph(text, false));
    return cell;
}

Paragraph CreateTableParagraph(string text, bool bold)
{
    var runProps = new RunProperties(
        new RunFonts { Ascii = "Microsoft YaHei", HighAnsi = "Microsoft YaHei", EastAsia = "Microsoft YaHei" },
        new FontSize { Val = "22" }
    );
    if (bold) runProps.Append(new Bold());
    var para = new Paragraph(new ParagraphProperties(
        new SpacingBetweenLines { Before = "60", After = "60" },
        new Justification { Val = JustificationValues.Center }
    ));
    para.Append(new Run(runProps, new Text(text)));
    return para;
}

void AddDocDefaults(MainDocumentPart mainPart)
{
    var stylesPart = mainPart.AddNewPart<StyleDefinitionsPart>();
    var styles = new Styles();
    styles.Append(new DocDefaults(
        new RunPropertiesDefault(new RunPropertiesBaseStyle(
            new RunFonts { Ascii = "Microsoft YaHei", HighAnsi = "Microsoft YaHei", EastAsia = "Microsoft YaHei" },
            new FontSize { Val = "24" },
            new FontSizeComplexScript { Val = "24" },
            new Languages { Val = "en-US", EastAsia = "zh-CN" }
        ))
    ));
    stylesPart.Styles = styles;
    stylesPart.Styles.Save();
}

void AddParagraph(Body body, string text, bool bold, string fontSize, JustificationValues justify, string spacingAfter = "200", string indentLeft = "")
{
    var para = new Paragraph();
    var pPr = new ParagraphProperties(new SpacingBetweenLines { After = spacingAfter });
    if (!string.IsNullOrEmpty(indentLeft))
        pPr.Append(new Indentation { Left = indentLeft });
    if (justify != JustificationValues.Left)
        pPr.Append(new Justification { Val = justify });

    para.Append(pPr);

    var rPr = new RunProperties(
        new RunFonts { Ascii = "Microsoft YaHei", HighAnsi = "Microsoft YaHei", EastAsia = "Microsoft YaHei" },
        new FontSize { Val = fontSize }
    );
    if (bold) rPr.Append(new Bold());
    para.Append(new Run(rPr, new Text(text)));
    body.Append(para);
}

void AddHeading(Body body, string text, int level)
{
    var para = new Paragraph();
    var spacing = level == 1 ? "400" : "200";
    para.Append(new ParagraphProperties(
        new SpacingBetweenLines { Before = spacing, After = "200" },
        new KeepNext(),
        new OutlineLevel { Val = level - 1 }
    ));
    var rPr = new RunProperties(
        new RunFonts { Ascii = "Microsoft YaHei", HighAnsi = "Microsoft YaHei", EastAsia = "Microsoft YaHei" },
        new FontSize { Val = level == 1 ? "32" : "28" },
        new Bold()
    );
    para.Append(new Run(rPr, new Text(text)));
    body.Append(para);
}

void AddSubHeading(Body body, string text)
{
    var para = new Paragraph();
    para.Append(new ParagraphProperties(
        new SpacingBetweenLines { Before = "200", After = "100" },
        new KeepNext()
    ));
    para.Append(new Run(
        new RunProperties(
            new RunFonts { Ascii = "Microsoft YaHei", HighAnsi = "Microsoft YaHei", EastAsia = "Microsoft YaHei" },
            new FontSize { Val = "26" },
            new Bold()
        ),
        new Text(text)
    ));
    body.Append(para);
}

void AddBullet(Body body, string text, bool bold = false)
{
    var para = new Paragraph();
    para.Append(new ParagraphProperties(
        new SpacingBetweenLines { After = "100" },
        new Indentation { Left = "360", Hanging = "360" }
    ));
    var rPr = new RunProperties(
        new RunFonts { Ascii = "Microsoft YaHei", HighAnsi = "Microsoft YaHei", EastAsia = "Microsoft YaHei" },
        new FontSize { Val = "24" }
    );
    if (bold) rPr.Append(new Bold());
    para.Append(new Run(rPr, new Text("• " + text)));
    body.Append(para);
}

void AddFooter(MainDocumentPart mainPart, WordprocessingDocument doc, Body body)
{
    var footerPart = mainPart.AddNewPart<FooterPart>();
    var footer = new Footer();
    var para = new Paragraph(new ParagraphProperties(new Justification { Val = JustificationValues.Center }));
    para.Append(new Run(
        new RunProperties(
            new RunFonts { Ascii = "Microsoft YaHei", HighAnsi = "Microsoft YaHei", EastAsia = "Microsoft YaHei" },
            new FontSize { Val = "20" }
        ),
        new Text("非正式网络识别与激活 | 练习资料")
    ));
    footer.Append(para);
    footerPart.Footer = footer;
    footerPart.Footer.Save();

    var sectPr = new SectionProperties();
    sectPr.Append(new FooterReference { Type = HeaderFooterValues.Default, Id = mainPart.GetIdOfPart(footerPart) });
    sectPr.Append(new PageSize { Width = 11906, Height = 16838 });
    sectPr.Append(new PageMargin { Top = 1440, Right = 1440, Bottom = 1440, Left = 1440 });
    body.Append(new Paragraph(new ParagraphProperties(sectPr)));
}

// ==================== EXECUTE ====================
Console.WriteLine("Creating exercises...");
CreateExercise1();
CreateExercise2();
CreateExercise3();
Console.WriteLine("\nExercises 1-3 created successfully!");
