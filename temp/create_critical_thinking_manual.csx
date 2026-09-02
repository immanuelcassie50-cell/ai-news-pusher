#r "nuget: DocumentFormat.OpenXml, 3.2.0"

using DocumentFormat.OpenXml;
using DocumentFormat.OpenXml.Packaging;
using DocumentFormat.OpenXml.Wordprocessing;

// Output path
string outputPath = @"D:\新课开发\经验萃取\批判思维\完整课程包\04_学员手册\学员手册_批判思维与AI.docx";

// Ensure directory exists
Directory.CreateDirectory(Path.GetDirectoryName(outputPath)!);

var doc = WordprocessingDocument.Create(outputPath, WordprocessingDocumentType.Document);
var mainPart = doc.AddMainDocumentPart();
mainPart.Document = new Document();
var body = new Body();

// Page setup: A4, margins 2.54cm top/bottom, 3.17cm left/right
// 2.54cm = 1440 DXA (1 inch), 3.17cm = 1797 DXA
var sectPr = new SectionProperties();
sectPr.Append(new PageSize { Width = 11906, Height = 16838 });
sectPr.Append(new PageMargin { Top = 1440, Right = 1797, Bottom = 1440, Left = 1797, Header = 720, Footer = 720 });

// Color constants
string PRIMARY_RED = "C62828";
string DARK_GRAY = "424242";
string LIGHT_GRAY = "F5F5F5";
string WHITE = "FFFFFF";

// Helper: Create a paragraph with text
Paragraph MakeP(string text, bool bold=false, int fontSize=22, int spacingAfter=160, bool italic=false, string color="000000") {
    var p = new Paragraph();
    var pPr = new ParagraphProperties();
    var spacing = new SpacingBetweenLines { After = spacingAfter.ToString(), Line = "276", LineRule = LineSpacingRuleValues.Auto };
    pPr.Append(spacing);
    p.Append(pPr);

    var r = new Run();
    var rPr = new RunProperties();
    if (bold) rPr.Append(new Bold());
    if (italic) rPr.Append(new Italic());
    rPr.Append(new FontSize { Val = fontSize.ToString() });
    rPr.Append(new FontSizeComplexScript { Val = fontSize.ToString() });
    if (color != "000000") rPr.Append(new Color { Val = color });
    rPr.Append(new RunFonts { Ascii = "Microsoft YaHei", HighAnsi = "Microsoft YaHei", EastAsia = "Microsoft YaHei" });
    r.Append(rPr);
    r.Append(new Text(text));
    p.Append(r);
    return p;
}

// Helper: H1 - Module title (large red)
Paragraph MakeH1(string text) {
    var p = new Paragraph();
    var pPr = new ParagraphProperties();
    pPr.Append(new SpacingBetweenLines { Before = "400", After = "200" });
    pPr.Append(new KeepNext());
    pPr.Append(new KeepLines());
    pPr.Append(new OutlineLevel { Val = 0 });
    p.Append(pPr);

    var r = new Run();
    var rPr = new RunProperties();
    rPr.Append(new Bold());
    rPr.Append(new FontSize { Val = "36" });
    rPr.Append(new FontSizeComplexScript { Val = "36" });
    rPr.Append(new Color { Val = PRIMARY_RED });
    rPr.Append(new RunFonts { Ascii = "Microsoft YaHei", HighAnsi = "Microsoft YaHei", EastAsia = "Microsoft YaHei" });
    r.Append(rPr);
    r.Append(new Text(text));
    p.Append(r);
    return p;
}

// Helper: H2 - Section title (medium gray)
Paragraph MakeH2(string text) {
    var p = new Paragraph();
    var pPr = new ParagraphProperties();
    pPr.Append(new SpacingBetweenLines { Before = "300", After = "150" });
    pPr.Append(new KeepNext());
    pPr.Append(new OutlineLevel { Val = 1 });
    p.Append(pPr);

    var r = new Run();
    var rPr = new RunProperties();
    rPr.Append(new Bold());
    rPr.Append(new FontSize { Val = "28" });
    rPr.Append(new FontSizeComplexScript { Val = "28" });
    rPr.Append(new Color { Val = DARK_GRAY });
    rPr.Append(new RunFonts { Ascii = "Microsoft YaHei", HighAnsi = "Microsoft YaHei", EastAsia = "Microsoft YaHei" });
    r.Append(rPr);
    r.Append(new Text(text));
    p.Append(r);
    return p;
}

// Helper: H3 - Subsection title
Paragraph MakeH3(string text) {
    var p = new Paragraph();
    var pPr = new ParagraphProperties();
    pPr.Append(new SpacingBetweenLines { Before = "240", After = "120" });
    pPr.Append(new KeepNext());
    pPr.Append(new OutlineLevel { Val = 2 });
    p.Append(pPr);

    var r = new Run();
    var rPr = new RunProperties();
    rPr.Append(new Bold());
    rPr.Append(new FontSize { Val = "24" });
    rPr.Append(new FontSizeComplexScript { Val = "24" });
    rPr.Append(new Color { Val = DARK_GRAY });
    rPr.Append(new RunFonts { Ascii = "Microsoft YaHei", HighAnsi = "Microsoft YaHei", EastAsia = "Microsoft YaHei" });
    r.Append(rPr);
    r.Append(new Text(text));
    p.Append(r);
    return p;
}

// Helper: Bullet point
Paragraph MakeBullet(string text) {
    var p = new Paragraph();
    var pPr = new ParagraphProperties();
    pPr.Append(new SpacingBetweenLines { After = "80" });
    var indent = new Indentation { Left = "720", Hanging = "360" };
    pPr.Append(indent);
    p.Append(pPr);

    var r = new Run();
    var rPr = new RunProperties();
    rPr.Append(new FontSize { Val = "22" });
    rPr.Append(new FontSizeComplexScript { Val = "22" });
    rPr.Append(new RunFonts { Ascii = "Microsoft YaHei", HighAnsi = "Microsoft YaHei", EastAsia = "Microsoft YaHei" });
    r.Append(rPr);
    r.Append(new Text("• " + text));
    p.Append(r);
    return p;
}

// Helper: Checkbox item
Paragraph MakeCheckbox(string text) {
    var p = new Paragraph();
    var pPr = new ParagraphProperties();
    pPr.Append(new SpacingBetweenLines { After = "80" });
    var indent = new Indentation { Left = "720", Hanging = "360" };
    pPr.Append(indent);
    p.Append(pPr);

    var r = new Run();
    var rPr = new RunProperties();
    rPr.Append(new FontSize { Val = "22" });
    rPr.Append(new FontSizeComplexScript { Val = "22" });
    rPr.Append(new RunFonts { Ascii = "Microsoft YaHei", HighAnsi = "Microsoft YaHei", EastAsia = "Microsoft YaHei" });
    r.Append(rPr);
    r.Append(new Text("☐ " + text));
    p.Append(r);
    return p;
}

// Helper: Table creation with header
Table MakeTable(string[] headers, string[,] rows) {
    var tbl = new Table();

    // Table properties with borders
    var tblPr = new TableProperties();
    var tblBorders = new TableBorders();
    tblBorders.Append(new TopBorder { Val = BorderValues.Single, Size = 4 });
    tblBorders.Append(new BottomBorder { Val = BorderValues.Single, Size = 4 });
    tblBorders.Append(new LeftBorder { Val = BorderValues.Single, Size = 4 });
    tblBorders.Append(new RightBorder { Val = BorderValues.Single, Size = 4 });
    tblBorders.Append(new InsideHorizontalBorder { Val = BorderValues.Single, Size = 4 });
    tblBorders.Append(new InsideVerticalBorder { Val = BorderValues.Single, Size = 4 });
    tblPr.Append(tblBorders);
    tbl.Append(tblPr);

    // Header row
    var headerRow = new TableRow();
    foreach (var h in headers) {
        var tc = new TableCell();
        var tcPr = new TableCellProperties();
        tcPr.Append(new Shading { Val = ShadingPatternValues.Clear, Fill = PRIMARY_RED });
        tc.Append(tcPr);
        var p = new Paragraph();
        var r = new Run();
        var rPr = new RunProperties();
        rPr.Append(new Bold());
        rPr.Append(new Color { Val = WHITE });
        rPr.Append(new FontSize { Val = "22" });
        rPr.Append(new RunFonts { Ascii = "Microsoft YaHei", HighAnsi = "Microsoft YaHei", EastAsia = "Microsoft YaHei" });
        r.Append(rPr);
        r.Append(new Text(h));
        p.Append(r);
        tc.Append(p);
        headerRow.Append(tc);
    }
    tbl.Append(headerRow);

    // Data rows with alternating colors
    for (int i = 0; i < rows.GetLength(0); i++) {
        var row = new TableRow();
        string fillColor = (i % 2 == 0) ? WHITE : LIGHT_GRAY;
        for (int j = 0; j < rows.GetLength(1); j++) {
            var tc = new TableCell();
            var tcPr = new TableCellProperties();
            tcPr.Append(new Shading { Val = ShadingPatternValues.Clear, Fill = fillColor });
            tc.Append(tcPr);
            var p = new Paragraph();
            var r = new Run();
            var rPr = new RunProperties();
            rPr.Append(new FontSize { Val = "22" });
            rPr.Append(new RunFonts { Ascii = "Microsoft YaHei", HighAnsi = "Microsoft YaHei", EastAsia = "Microsoft YaHei" });
            r.Append(rPr);
            r.Append(new Text(rows[i, j]));
            p.Append(r);
            tc.Append(p);
            row.Append(tc);
        }
        tbl.Append(row);
    }
    return tbl;
}

// Helper: Page break
Paragraph MakePageBreak() {
    return new Paragraph(new ParagraphProperties(new PageBreakBefore()));
}

// Helper: Section divider with background
Paragraph MakeSectionDivider(string text) {
    var p = new Paragraph();
    var pPr = new ParagraphProperties();
    pPr.Append(new SpacingBetweenLines { Before = "200", After = "200" });
    pPr.Append(new Justification { Val = JustificationValues.Center });
    pPr.Append(new Shading { Val = ShadingPatternValues.Clear, Fill = PRIMARY_RED });
    p.Append(pPr);

    var r = new Run();
    var rPr = new RunProperties();
    rPr.Append(new Bold());
    rPr.Append(new FontSize { Val = "32" });
    rPr.Append(new FontSizeComplexScript { Val = "32" });
    rPr.Append(new Color { Val = WHITE });
    rPr.Append(new RunFonts { Ascii = "Microsoft YaHei", HighAnsi = "Microsoft YaHei", EastAsia = "Microsoft YaHei" });
    r.Append(rPr);
    r.Append(new Text(text));
    p.Append(r);
    return p;
}

// Helper: Quote/Note box
Paragraph MakeNote(string text) {
    var p = new Paragraph();
    var pPr = new ParagraphProperties();
    pPr.Append(new SpacingBetweenLines { After = "160" });
    pPr.Append(new Indentation { Left = "720", Right = "720" });
    pPr.Append(new Shading { Val = ShadingPatternValues.Clear, Fill = LIGHT_GRAY });
    p.Append(pPr);

    var r = new Run();
    var rPr = new RunProperties();
    rPr.Append(new Italic());
    rPr.Append(new FontSize { Val = "22" });
    rPr.Append(new FontSizeComplexScript { Val = "22" });
    rPr.Append(new Color { Val = DARK_GRAY });
    rPr.Append(new RunFonts { Ascii = "Microsoft YaHei", HighAnsi = "Microsoft YaHei", EastAsia = "Microsoft YaHei" });
    r.Append(rPr);
    r.Append(new Text("\U0001F4DD " + text));
    p.Append(r);
    return p;
}

// Helper: Numbered list item
Paragraph MakeNumbered(int num, string text) {
    var p = new Paragraph();
    var pPr = new ParagraphProperties();
    pPr.Append(new SpacingBetweenLines { After = "80" });
    pPr.Append(new Indentation { Left = "720", Hanging = "360" });
    p.Append(pPr);

    var r = new Run();
    var rPr = new RunProperties();
    rPr.Append(new FontSize { Val = "22" });
    rPr.Append(new FontSizeComplexScript { Val = "22" });
    rPr.Append(new RunFonts { Ascii = "Microsoft YaHei", HighAnsi = "Microsoft YaHei", EastAsia = "Microsoft YaHei" });
    r.Append(rPr);
    r.Append(new Text(num + ". " + text));
    p.Append(r);
    return p;
}

// ==================== COVER PAGE ====================
body.Append(MakeH1("AI时代批判思维与幻觉识别"));
body.Append(MakeH2("学员手册"));
body.Append(new Paragraph(new ParagraphProperties(new SpacingBetweenLines { After = "400" })));
body.Append(MakeP("AI幻觉识别与批判思维实战", false, 28, 200, true, DARK_GRAY));
body.Append(new Paragraph(new ParagraphProperties(new SpacingBetweenLines { After = "600" })));
body.Append(MakeP("目标学员：知识工作者、管理者、决策者", false, 22, 120));
body.Append(MakeP("课程时长：2天工作坊", false, 22, 120));
body.Append(MakeP("版本：v1.0 | 2026年6月", false, 22, 120));
body.Append(MakePageBreak());

// ==================== TABLE OF CONTENTS ====================
body.Append(MakeH1("目录"));
body.Append(MakeP("课程导览", false, 22, 120));
body.Append(MakeP("模块一：AI为什么一本正经胡说八道", false, 22, 120));
body.Append(MakeP("模块二：批判思维四步法", false, 22, 120));
body.Append(MakeP("模块三：验证工具箱与批判性提示词", false, 22, 120));
body.Append(MakeP("模块四：实战演练与行动承诺", false, 22, 120));
body.Append(MakeP("附录：术语表 / 推荐资源 / 反馈表", false, 22, 120));
body.Append(MakePageBreak());

// ==================== MODULE 0: COURSE INTRODUCTION ====================
body.Append(MakeH1("课程导览"));

body.Append(MakeH2("欢迎词"));
body.Append(MakeP("欢迎参加《AI时代批判思维与幻觉识别》课程！在这个AI日益渗透工作与生活的时代，我们每天都会接触到大量由AI生成的信息、内容和决策建议。然而，AI并非完美——它会\"一本正经地胡说八道\"，产生所谓的\"AI幻觉\"。"));
body.Append(MakeP("本课程将帮助您建立系统的批判思维框架，掌握识别和应对AI幻觉的方法，成为AI时代的明智用户和决策者。"));

body.Append(MakeH2("课程全景图"));
body.Append(MakeTable(new string[] { "模块", "核心内容", "学习成果" }, new string[,] {
    { "模块一", "AI幻觉的本质与类型", "理解AI为什么会产生幻觉" },
    { "模块二", "批判思维四步法", "掌握质疑-验证-检验-推演框架" },
    { "模块三", "验证工具箱", "获得实用的批判性AI使用工具" },
    { "模块四", "实战与承诺", "制定个人实践计划" }
}));

body.Append(MakeH2("学习目标"));
body.Append(MakeBullet("理解AI幻觉的概念、类型及其产生机制"));
body.Append(MakeBullet("掌握批判思维四步法的理论框架"));
body.Append(MakeBullet("学会使用五种实用的AI验证工具"));
body.Append(MakeBullet("能够在实际工作中应用批判性AI提示词"));
body.Append(MakeBullet("制定并承诺执行30天实践计划"));

body.Append(MakeH2("课程结构与时间安排"));
body.Append(MakeTable(new string[] { "时间", "内容" }, new string[,] {
    { "第一天 上午", "模块一：AI为什么一本正经胡说八道" },
    { "第一天 下午", "模块二：批判思维四步法" },
    { "第二天 上午", "模块三：验证工具箱与批判性提示词" },
    { "第二天 下午", "模块四：实战演练与行动承诺" }
}));

body.Append(MakeH2("学员须知"));
body.Append(MakeCheckbox("课前准备：携带实际工作中遇到的AI使用案例"));
body.Append(MakeCheckbox("积极参与：大胆分享观点和疑问"));
body.Append(MakeCheckbox("学以致用：课程中的练习都来源于真实工作场景"));
body.Append(MakeCheckbox("持续实践：30天实践计划是课程的重要组成部分"));
body.Append(MakePageBreak());

// ==================== MODULE 1 ====================
body.Append(MakeSectionDivider("模块一"));
body.Append(MakeH1("AI为什么一本正经胡说八道"));

body.Append(MakeH2("学习目标"));
body.Append(MakeBullet("理解AI幻觉的定义和本质特征"));
body.Append(MakeBullet("掌握四种主要幻觉类型的识别方法"));
body.Append(MakeBullet("了解AI产生幻觉的技术原理"));
body.Append(MakeBullet("建立对AI输出持批判性审视的意识"));

body.Append(MakeH2("核心概念：什么是AI幻觉"));
body.Append(MakeNote("AI幻觉是指大语言模型生成的内容听起来合理、流畅，但实际上包含错误、不准确或完全虚构的信息，而且这些内容往往以自信、确定的方式呈现。"));
body.Append(MakeP("关键特征："));
body.Append(MakeBullet("表面合理性：语言流畅、语法正确、格式规范"));
body.Append(MakeBullet("内容虚构性：事实、数据、引用可能完全不存在"));
body.Append(MakeBullet("自信呈现：AI以高置信度输出，难以识别错误"));
body.Append(MakeBullet("难以察觉：即使有逻辑错误，也容易被流畅的语言掩盖"));

body.Append(MakeH2("四种幻觉类型详解"));
body.Append(MakeH3("类型一：事实性错误"));
body.Append(MakeP("定义：AI生成的内容包含虚假的事实陈述，如错误的数据、日期、人名、统计数据等。"));
body.Append(MakeTable(new string[] { "场景", "示例", "识别要点" }, new string[,] {
    { "数据造假", "2024年Q3财报显示营收增长45%", "要求核实具体数据来源" },
    { "人物虚构", "张教授在《自然》杂志发表论文", "验证作者是否存在" },
    { "历史歪曲", "哥伦布在1812年发现美洲", "明显的时间逻辑错误" },
    { "数字夸张", "这种方法有效率达99.9%", "极端数字需特别警惕" }
}));

body.Append(MakeH3("类型二：逻辑错误"));
body.Append(MakeP("定义：AI在推理过程中出现逻辑漏洞，如因果混淆、循环论证、以偏概全等。"));
body.Append(MakeTable(new string[] { "错误类型", "特征", "示例" }, new string[,] {
    { "因果混淆", "把相关性当作因果性", "冰淇淋销量增加导致溺水人数增加" },
    { "循环论证", "用结论证明前提", "这本书是好书，因为它很受欢迎" },
    { "以偏概全", "用个别案例得出普遍结论", "某人说有效，所以方法一定有效" },
    { "滑坡谬误", "不合理地假设一连串后果", "如果不这么做，一切都会崩溃" }
}));

body.Append(MakeH3("类型三：语境错误"));
body.Append(MakeP("定义：AI未能准确理解问题的具体语境，生成与问题意图不符的答案。"));
body.Append(MakeBullet("问题模糊时自动假设不存在的背景"));
body.Append(MakeBullet("跨文化/跨领域理解出现偏差"));
body.Append(MakeBullet("专业术语在特定行业的特殊含义被忽略"));
body.Append(MakeBullet("讽刺、反讽、幽默被误解为字面意思"));

body.Append(MakeH3("类型四：偏见放大"));
body.Append(MakeP("定义：AI在训练过程中学习并放大了数据中的偏见，或在回答中强化了刻板印象。"));
body.Append(MakeBullet("性别偏见：某些职业被自动与特定性别关联"));
body.Append(MakeBullet("文化偏见：用西方视角解读全球性问题"));
body.Append(MakeBullet("确认偏见：倾向于提供支持用户已有观点的信息"));
body.Append(MakeBullet("时效性偏见：过时的信息被当作当前事实"));

body.Append(MakeH2("认知自测"));
body.Append(MakeP("以下哪些陈述是AI幻觉的表现？请思考后再查看答案。"));
body.Append(MakeNumbered(1, "AI用流畅的语言描述了一个不存在的历史事件"));
body.Append(MakeNumbered(2, "AI提供的数据与权威来源一致"));
body.Append(MakeNumbered(3, "AI的结论基于错误的因果推断"));
body.Append(MakeNumbered(4, "AI忽略了问题的文化背景给出了字面回答"));
body.Append(MakeNumbered(5, "AI的建议反映了训练数据中的性别刻板印象"));
body.Append(MakeNote("答案：以上全部都是AI幻觉的表现。幻觉不一定是非事实性的，逻辑错误、语境错误和偏见放大同样属于幻觉范畴。"));

body.Append(MakeH2("练习区"));
body.Append(MakeP("练习1：识别事实性错误"));
body.Append(MakeP("尝试向AI询问一个您熟悉领域的事实（如您的专业、您所在行业、您经历过的项目），观察AI是否会生成错误或虚构的信息。"));
body.Append(MakeCheckbox("记录AI出错的具体内容"));
body.Append(MakeCheckbox("思考：如果不是您熟悉的领域，是否能发现这些错误？"));
body.Append(MakePageBreak());

// ==================== MODULE 2 ====================
body.Append(MakeSectionDivider("模块二"));
body.Append(MakeH1("批判思维四步法"));

body.Append(MakeH2("学习目标"));
body.Append(MakeBullet("理解批判思维四步法的完整框架"));
body.Append(MakeBullet("掌握每一步的具体操作方法和技巧"));
body.Append(MakeBullet("能够在实际工作中应用四步法评估AI输出"));
body.Append(MakeBullet("建立系统性批判思维的习惯"));

body.Append(MakeH2("四步法概述"));
body.Append(MakeTable(new string[] { "步骤", "核心问题", "关键动作" }, new string[,] {
    { "第一步：质疑假设", "AI的前提假设是什么？是否合理？", "追问背景、条件、适用范围" },
    { "第二步：验证来源", "信息来源是什么？可靠吗？", "交叉验证、查找原始来源" },
    { "第三步：检验证据", "支撑结论的证据充分吗？", "分析数据、案例、逻辑链" },
    { "第四步：推演结论", "结论是否经得起推敲？", "压力测试、反例思考" }
}));

body.Append(MakeH2("第一步：质疑假设"));
body.Append(MakeP("任何AI输出都建立在某些假设之上。识别这些假设是批判性评估的第一步。"));
body.Append(MakeH3("常见假设类型"));
body.Append(MakeBullet("时间假设：AI假设的情况是否基于当前信息？"));
body.Append(MakeBullet("地域假设：AI的建议是否考虑了本地化因素？"));
body.Append(MakeBullet("条件假设：前提条件是否适用于您的情况？"));
body.Append(MakeBullet("范围假设：AI是否在过度扩展结论的适用范围？"));
body.Append(MakeH3("质疑话术"));
body.Append(MakeP("\"你做出这个结论的前提条件是什么？\""));
body.Append(MakeP("\"这个建议适用于什么类型的组织或情况？\""));
body.Append(MakeP("\"如果我的具体情况是......，这个建议还适用吗？\""));

body.Append(MakeH2("第二步：验证来源"));
body.Append(MakeP("AI生成的内容可能来自训练数据中的模式匹配，而非真实的信息源。验证来源是确保信息准确性的关键。"));
body.Append(MakeH3("验证方法"));
body.Append(MakeBullet("要求AI提供具体的数据来源和研究引用"));
body.Append(MakeBullet("使用独立搜索引擎核实关键事实"));
body.Append(MakeBullet("查找原始文献或权威发布"));
body.Append(MakeBullet("检查信息来源的时效性（AI知识有截止日期）"));
body.Append(MakeH3("验证话术"));
body.Append(MakeP("\"请提供支持这个结论的具体研究或数据来源\""));
body.Append(MakeP("\"这项研究的具体作者、期刊和时间是什么？\""));
body.Append(MakeP("\"这些数据的采集时间和样本量是多少？\""));

body.Append(MakeH2("第三步：检验证据"));
body.Append(MakeP("即使来源可靠，证据本身也需要仔细审视。证据与结论之间的逻辑关系至关重要。"));
body.Append(MakeH3("证据评估框架"));
body.Append(MakeBullet("证据类型：统计数据、案例研究、专家意见、逻辑推演"));
body.Append(MakeBullet("样本质量：样本量、代表性、采集方法的科学性"));
body.Append(MakeBullet("因果关系：是相关性还是真正的因果关系？"));
body.Append(MakeBullet("逻辑链：从证据到结论的推理是否严密？"));
body.Append(MakeH3("检验话术"));
body.Append(MakeP("\"这个数据是在什么背景下采集的？\""));
body.Append(MakeP("\"除了这个证据，还有哪些因素可能影响结论？\""));
body.Append(MakeP("\"如果换个角度分析，结论会不同吗？\""));

body.Append(MakeH2("第四步：推演结论"));
body.Append(MakeP("最后一步是对结论进行\"压力测试\"——假设各种可能的情况，看结论是否依然成立。"));
body.Append(MakeH3("推演技巧"));
body.Append(MakeBullet("极端情况测试：如果情况极端化，结论还成立吗？"));
body.Append(MakeBullet("反例寻找：主动寻找不支持结论的反例"));
body.Append(MakeBullet("时间维度：短期/长期来看，结论是否同样有效？"));
body.Append(MakeBullet("规模效应：小规模可行的方案，大规模是否可行？"));
body.Append(MakeH3("推演话术"));
body.Append(MakeP("\"如果把这个方案推广到100倍的规模，会出现什么问题？\""));
body.Append(MakeP("\"一年后回看，这个决定是否仍然正确？\""));
body.Append(MakeP("\"有什么情况会导致这个结论完全不成立？\""));

body.Append(MakeH2("工作表：四步法应用模板"));
body.Append(MakeTable(new string[] { "步骤", "我的问题", "验证结果" }, new string[,] {
    { "质疑假设", "", "" },
    { "验证来源", "", "" },
    { "检验证据", "", "" },
    { "推演结论", "", "" }
}));
body.Append(MakeNote("在实际工作中，每次使用AI输出时，都建议填写此工作表，逐步培养批判思维习惯。"));

body.Append(MakeH2("练习区"));
body.Append(MakeP("练习：使用四步法分析AI输出"));
body.Append(MakeP("找一个您最近收到的AI建议或回答，使用四步法进行分析："));
body.Append(MakeCheckbox("第一步：AI的前提假设是什么？这些假设合理吗？"));
body.Append(MakeCheckbox("第二步：信息来源是什么？如何验证？"));
body.Append(MakeCheckbox("第三步：支撑证据是否充分？逻辑是否严密？"));
body.Append(MakeCheckbox("第四步：结论能否经受住反例测试？"));
body.Append(MakePageBreak());

// ==================== MODULE 3 ====================
body.Append(MakeSectionDivider("模块三"));
body.Append(MakeH1("验证工具箱与批判性提示词"));

body.Append(MakeH2("学习目标"));
body.Append(MakeBullet("掌握五种实用的AI验证工具"));
body.Append(MakeBullet("学会使用批判性提示词获取更可靠的AI输出"));
body.Append(MakeBullet("建立个人AI使用最佳实践"));

body.Append(MakeH2("工具一：事实核查三步法"));
body.Append(MakeP("当AI提供具体事实、数据或引用时，使用此工具进行核查。"));
body.Append(MakeH3("第一步：拆解具体 CLAIM"));
body.Append(MakeBullet("将AI的陈述分解为可验证的具体Claim"));
body.Append(MakeBullet("识别：具体数字、特定人物、明确时间、具体地点"));
body.Append(MakeH3("第二步：独立验证"));
body.Append(MakeBullet("使用至少两个独立来源进行交叉验证"));
body.Append(MakeBullet("优先使用权威来源：政府数据、学术论文、官方发布"));
body.Append(MakeH3("第三步：评估一致性"));
body.Append(MakeBullet("多个来源一致 --> 高可信度"));
body.Append(MakeBullet("来源冲突 --> 需要进一步判断"));
body.Append(MakeBullet("无法验证 --> 标记为\"待核实\""));

body.Append(MakeH2("工具二：来源可靠性评估"));
body.Append(MakeP("不是所有来源都同样可靠。使用以下框架评估来源质量。"));
body.Append(MakeTable(new string[] { "维度", "高可靠性", "低可靠性" }, new string[,] {
    { "权威性", "政府机构、学术期刊、知名媒体", "匿名来源、社交媒体帖子" },
    { "专业性", "领域专家、认证机构", "非专业人士、不相关领域" },
    { "时效性", "近期发布、定期更新", "过时信息、来源不明" },
    { "透明度", "方法论公开、数据可追溯", "来源模糊、无法验证" }
}));

body.Append(MakeH2("工具三：逻辑谬误识别"));
body.Append(MakeP("以下是AI输出中最常见的逻辑谬误，识别它们能帮助您发现错误推理。"));
body.Append(MakeTable(new string[] { "谬误类型", "定义", "识别信号" }, new string[,] {
    { "稻草人谬误", "歪曲对方观点后攻击", "AI似乎在反驳一个你没说的观点" },
    { "诉诸权威", "用权威代替论证", "某知名专家说而不给证据" },
    { "非黑即白", "只有两个极端选项", "忽略中间立场和复杂情况" },
    { "诉诸情感", "用情感代替逻辑", "使用煽动性语言而非理性分析" },
    { "合成谬误", "从部分为真推断整体为真", "每个部分都有效，所以整体有效" }
}));

body.Append(MakeH2("工具四：多角度验证框架"));
body.Append(MakeP("对于重要决策或复杂问题，从多个角度获取AI的输入。"));
body.Append(MakeH3("角度一：事实角度"));
body.Append(MakeP("提示词：\"列出支持/反对这个观点的具体事实和数据\""));
body.Append(MakeH3("角度二：利弊角度"));
body.Append(MakeP("提示词：\"从短期和长期分别分析这个决定/观点的利弊\""));
body.Append(MakeH3("角度三：反例角度"));
body.Append(MakeP("提示词：\"找出这个方法/观点失效的典型场景\""));
body.Append(MakeH3("角度四：实施角度"));
body.Append(MakeP("提示词：\"分析这个方案的实际执行中会遇到哪些挑战\""));

body.Append(MakeH2("工具五：批判性提示词模板"));
body.Append(MakeP("以下是经过实践验证的批判性提示词，使用它们获取更可靠的AI输出。"));
body.Append(MakeH3("核查提示词"));
body.Append(MakeP("\"对于你刚才的回答，请指出哪些地方你不确定或需要进一步核实。\""));
body.Append(MakeP("\"请提供这个结论的具体数据来源和研究出处。\""));
body.Append(MakeH3("求真提示词"));
body.Append(MakeP("\"我需要你对这个话题提出质疑和反对意见。\""));
body.Append(MakeP("\"如果你的结论可能是错的，请说明最可能出错的地方。\""));
body.Append(MakeH3("限制提示词"));
body.Append(MakeP("\"在回答前，请先说明你的知识截止日期和可能的局限性。\""));
body.Append(MakeP("\"这个建议的适用边界是什么？在什么情况下不适用？\""));
body.Append(MakeH3("多版本提示词"));
body.Append(MakeP("\"请从三个不同的角度/立场分析这个问题。\""));
body.Append(MakeP("\"请分别给出乐观、中立、悲观三种情景下的分析和结论。\""));

body.Append(MakeH2("练习区"));
body.Append(MakeP("练习：使用批判性提示词"));
body.Append(MakeP("选择一个问题，分别用普通提示词和批判性提示词向AI提问，对比结果差异。"));
body.Append(MakeCheckbox("尝试\"请指出你的不确定性\"类型的提示词"));
body.Append(MakeCheckbox("尝试要求AI提供反例或质疑自己的结论"));
body.Append(MakeCheckbox("记录哪种提示词获得了更可靠的回答"));
body.Append(MakePageBreak());

// ==================== MODULE 4 ====================
body.Append(MakeSectionDivider("模块四"));
body.Append(MakeH1("实战演练与行动承诺"));

body.Append(MakeH2("学习目标"));
body.Append(MakeBullet("通过真实案例整合所学内容"));
body.Append(MakeBullet("制定个人化的30天实践计划"));
body.Append(MakeBullet("建立持续改进的反馈机制"));

body.Append(MakeH2("案例分析指引"));
body.Append(MakeP("以下案例来自真实工作场景。请运用所学知识进行分析。"));
body.Append(MakeH3("案例一：AI辅助决策失误"));
body.Append(MakeP("情境：某公司CEO使用AI分析市场趋势，AI建议大规模进入某个新兴市场。"));
body.Append(MakeBullet("AI的依据：\"根据我们的分析，该市场未来5年复合增长率将达45%\""));
body.Append(MakeBullet("实际情况：AI引用的数据来自一篇非权威报告，且样本量极小"));
body.Append(MakeH3("分析问题："));
body.Append(MakeCheckbox("这个案例涉及哪些类型的AI幻觉？"));
body.Append(MakeCheckbox("四步法中，哪一步本应该发现这个问题？"));
body.Append(MakeCheckbox("应该使用哪些验证工具？"));

body.Append(MakeH3("案例二：AI生成的虚假引用"));
body.Append(MakeP("情境：研究员使用AI辅助文献综述，AI生成了一份看似专业的参考文献列表。"));
body.Append(MakeBullet("实际情况：部分引用是AI编造的，论文和期刊并不存在"));
body.Append(MakeH3("分析问题："));
body.Append(MakeCheckbox("为什么会发生这种情况？"));
body.Append(MakeCheckbox("如何验证AI提供的学术引用？"));
body.Append(MakeCheckbox("应该建立怎样的文献核查流程？"));

body.Append(MakeH3("案例三：偏见放大的招聘建议"));
body.Append(MakeP("情境：HR使用AI筛选简历，AI系统性地偏好某些背景的候选人。"));
body.Append(MakeBullet("根本原因：训练数据中存在的历史偏见被AI学习并放大"));
body.Append(MakeH3("分析问题："));
body.Append(MakeCheckbox("这是哪种类型的幻觉？"));
body.Append(MakeCheckbox("如何在AI应用中识别和缓解偏见？"));
body.Append(MakeCheckbox("组织应该建立怎样的AI使用伦理规范？"));

body.Append(MakeH2("行动承诺制定"));
body.Append(MakeP("课程学习的最终目的是改变行为。请制定您的个人行动承诺。"));
body.Append(MakeH3("承诺框架"));
body.Append(MakeTable(new string[] { "维度", "我的承诺", "具体行动" }, new string[,] {
    { "认知改变", "建立对AI输出的批判意识", "" },
    { "工具应用", "每次重要决策前使用四步法", "" },
    { "习惯养成", "记录并复盘AI相关错误", "" },
    { "能力提升", "学习所在领域的核心知识", "" }
}));

body.Append(MakeH2("30天实践计划"));
body.Append(MakeP("第1-7天：基础建立期"));
body.Append(MakeBullet("每天使用AI时，至少提出一个批判性追问"));
body.Append(MakeBullet("记录AI的3次\"不确定\"或\"需要核实\"的回应"));
body.Append(MakeBullet("阅读1篇关于AI幻觉的深度文章"));
body.Append(MakeP("第8-14天：工具应用期"));
body.Append(MakeBullet("对AI提供的每个重要数据点进行来源验证"));
body.Append(MakeBullet("使用四步法分析一个复杂问题"));
body.Append(MakeBullet("尝试使用批判性提示词模板"));
body.Append(MakeP("第15-21天：习惯强化期"));
body.Append(MakeBullet("将AI使用纳入日常工作流程"));
body.Append(MakeBullet("建立一个AI输出核查清单"));
body.Append(MakeBullet("与同事分享学习心得"));
body.Append(MakeP("第22-30天：整合输出期"));
body.Append(MakeBullet("总结30天实践的经验教训"));
body.Append(MakeBullet("制定长期的AI批判性使用策略"));
body.Append(MakeBullet("与他人分享您的最佳实践"));
body.Append(MakePageBreak());

// ==================== APPENDIX ====================
body.Append(MakeH1("附录"));

body.Append(MakeH2("术语表"));
body.Append(MakeTable(new string[] { "术语", "定义" }, new string[,] {
    { "AI幻觉", "AI生成的内容听起来合理但实际包含错误或虚构信息的现象" },
    { "批判思维", "对信息进行主动、系统和深入分析的思维模式" },
    { "事实核查", "验证信息真实性、准确性的过程" },
    { "逻辑谬误", "推理过程中的错误模式" },
    { "确认偏见", "倾向于接受支持已有观点信息的倾向" },
    { "训练数据", "用于训练AI模型的数据集" },
    { "提示词", "用户向AI系统输入的指令或问题" },
    { "四步法", "质疑假设-验证来源-检验证据-推演结论的批判思维框架" }
}));

body.Append(MakeH2("推荐资源"));
body.Append(MakeH3("书籍"));
body.Append(MakeBullet("《批判性思维》- Benjamin Keogh"));
body.Append(MakeBullet("《思考，快与慢》- Daniel Kahneman"));
body.Append(MakeBullet("《AI 2041》- 李开复"));
body.Append(MakeH3("在线资源"));
body.Append(MakeBullet("斯坦福AI实验室：https://ai.stanford.edu/"));
body.Append(MakeBullet("MIT人机交互研究：https://www.media.mit.edu/"));
body.Append(MakeBullet("OpenAI安全指南：https://openai.com/safety/"));

body.Append(MakeH2("反馈表"));
body.Append(MakeP("课程名称：AI时代批判思维与幻觉识别"));
body.Append(MakeP("日期：________________"));
body.Append(MakeP("姓名：________________"));
body.Append(MakeTable(new string[] { "评估维度", "评分(1-5)", "建议" }, new string[,] {
    { "课程内容实用性", "", "" },
    { "教学方法有效性", "", "" },
    { "案例分析贴合度", "", "" },
    { "工具模板实用性", "", "" },
    { "整体满意度", "", "" }
}));
body.Append(MakeP("您最感兴趣的模块是：________________"));
body.Append(MakeP("您认为需要加强的内容是：________________"));
body.Append(MakeP("其他建议：________________"));

// Final section properties
body.Append(sectPr);

mainPart.Document.Append(body);

// Save
doc.Save();
Console.WriteLine("Document created: " + outputPath);