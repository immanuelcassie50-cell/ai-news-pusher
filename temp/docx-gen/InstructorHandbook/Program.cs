using DocumentFormat.OpenXml;
using DocumentFormat.OpenXml.Packaging;
using DocumentFormat.OpenXml.Wordprocessing;

const string OUTPUT_PATH = @"D:\新课开发\经验萃取\手册\完整手册\完整课程包\04_讲师手册.docx";

// Colors - Red/Gray scheme
const string PRIMARY_RED = "C00000";    // Dark red
const string SECONDARY_RED = "E36C0A";  // Orange-red
const string DARK_GRAY = "404040";      // Dark gray for body
const string MEDIUM_GRAY = "595959";    // Medium gray
const string LIGHT_GRAY = "F2F2F2";     // Light gray for backgrounds
const string ACCENT_GRAY = "7F7F7F";    // Accent gray
const string WHITE = "FFFFFF";
const string BLACK = "000000";

// Font sizes (in half-points)
const string TITLE_SIZE = "52";    // 26pt
const string H1_SIZE = "36";      // 18pt
const string H2_SIZE = "28";       // 14pt
const string H3_SIZE = "24";       // 12pt
const string BODY_SIZE = "21";     // 10.5pt
const string SMALL_SIZE = "18";    // 9pt

using var doc = WordprocessingDocument.Create(OUTPUT_PATH, WordprocessingDocumentType.Document);
var mainPart = doc.AddMainDocumentPart();
mainPart.Document = new Document(new Body());

// Set page setup - A4
var sectPr = new SectionProperties(
    new PageSize { Width = 11906, Height = 16838 },
    new PageMargin { Top = 1440, Right = 1440, Bottom = 1440, Left = 1440, Header = 720, Footer = 720 }
);

// ======================= STYLES =======================
var stylesPart = mainPart.AddNewPart<StyleDefinitionsPart>();
var styles = new Styles();

// Document defaults
var docDefaults = new DocDefaults(
    new RunPropertiesDefault(new RunPropertiesBaseStyle(
        new RunFonts { Ascii = "Microsoft YaHei", HighAnsi = "Microsoft YaHei", EastAsia = "Microsoft YaHei" },
        new FontSize { Val = BODY_SIZE },
        new Color { Val = DARK_GRAY }
    ))
);
styles.Append(docDefaults);

// Title style
styles.Append(CreateParagraphStyle("DocTitle", "文档标题", TITLE_SIZE, PRIMARY_RED, true, JustificationValues.Center, "480", "160"));
// H1 style
styles.Append(CreateParagraphStyle("Heading1", "一级标题", H1_SIZE, PRIMARY_RED, true, JustificationValues.Left, "360", "120"));
// H2 style
styles.Append(CreateParagraphStyle("Heading2", "二级标题", H2_SIZE, SECONDARY_RED, true, JustificationValues.Left, "280", "100"));
// H3 style
styles.Append(CreateParagraphStyle("Heading3", "三级标题", H3_SIZE, DARK_GRAY, true, JustificationValues.Left, "240", "80"));
// Instructor Note style
styles.Append(CreateParagraphStyle("InstructorNote", "讲师备注", H3_SIZE, MEDIUM_GRAY, false, JustificationValues.Left, "200", "60"));
// Time allocation style
styles.Append(CreateParagraphStyle("TimeAlloc", "时间分配", BODY_SIZE, ACCENT_GRAY, false, JustificationValues.Left, "120", "60"));
// Body text style
styles.Append(CreateParagraphStyle("BodyText", "正文", BODY_SIZE, DARK_GRAY, false, JustificationValues.Left, "0", "120"));
// Checkbox style
styles.Append(CreateParagraphStyle("Checkbox", "检查项", BODY_SIZE, DARK_GRAY, false, JustificationValues.Left, "0", "60"));
// Red callout style
styles.Append(CreateParagraphStyle("RedCallout", "重点提示", H3_SIZE, PRIMARY_RED, true, JustificationValues.Left, "200", "80"));
// Facilitator script style
styles.Append(CreateParagraphStyle("FacilitatorScript", "引导话术", BODY_SIZE, MEDIUM_GRAY, false, JustificationValues.Left, "160", "80"));

stylesPart.Styles = styles;
stylesPart.Styles.Save();

// ======================= HELPER FUNCTIONS =======================

Style CreateParagraphStyle(string styleId, string name, string size, string color, bool bold, JustificationValues justification, string spaceBefore, string spaceAfter)
{
    return new Style(
        new StyleName { Val = name },
        new BasedOn { Val = "Normal" },
        new NextParagraphStyle { Val = "Normal" },
        new StyleParagraphProperties(
            new SpacingBetweenLines { Before = spaceBefore, After = spaceAfter, Line = "276", LineRule = LineSpacingRuleValues.Auto },
            new Justification { Val = justification }
        ),
        new StyleRunProperties(
            new RunFonts { Ascii = "Microsoft YaHei", HighAnsi = "Microsoft YaHei", EastAsia = "Microsoft YaHei" },
            new FontSize { Val = size },
            new FontSizeComplexScript { Val = size },
            new Color { Val = color },
            new Bold()
        )
    )
    { Type = StyleValues.Paragraph, StyleId = styleId };
}

void AddHeading1(string text)
{
    var p = new Paragraph(
        new ParagraphProperties(new ParagraphStyleId { Val = "Heading1" }),
        new Run(new Text(text))
    );
    mainPart.Document.Body!.Append(p);
}

void AddHeading2(string text)
{
    var p = new Paragraph(
        new ParagraphProperties(new ParagraphStyleId { Val = "Heading2" }),
        new Run(new Text(text))
    );
    mainPart.Document.Body!.Append(p);
}

void AddHeading3(string text)
{
    var p = new Paragraph(
        new ParagraphProperties(new ParagraphStyleId { Val = "Heading3" }),
        new Run(new Text(text))
    );
    mainPart.Document.Body!.Append(p);
}

void AddBody(string text)
{
    var p = new Paragraph(
        new ParagraphProperties(new ParagraphStyleId { Val = "BodyText" }),
        new Run(new Text(text))
    );
    mainPart.Document.Body!.Append(p);
}

void AddInstructorNote(string text)
{
    var p = new Paragraph(
        new ParagraphProperties(
            new ParagraphStyleId { Val = "InstructorNote" },
            new Shading { Val = ShadingPatternValues.Clear, Fill = "FFF2CC" },
            new Indentation { Left = "360" }
        ),
        new Run(new Text("【讲师备注】" + text))
    );
    mainPart.Document.Body!.Append(p);
}

void AddTimeAlloc(string text)
{
    var p = new Paragraph(
        new ParagraphProperties(new ParagraphStyleId { Val = "TimeAlloc" }),
        new Run(new Text(text))
    );
    mainPart.Document.Body!.Append(p);
}

void AddFacilitatorScript(string text)
{
    var p = new Paragraph(
        new ParagraphProperties(
            new ParagraphStyleId { Val = "FacilitatorScript" },
            new Indentation { Left = "360" }
        ),
        new Run(new Text("讲师：" + text))
    );
    mainPart.Document.Body!.Append(p);
}

void AddFacilitatorScriptWithSituation(string situation, string script)
{
    AddHeading3("情境: " + situation);
    AddFacilitatorScript(script);
}

void AddRedCallout(string text)
{
    var p = new Paragraph(
        new ParagraphProperties(
            new ParagraphStyleId { Val = "RedCallout" },
            new Shading { Val = ShadingPatternValues.Clear, Fill = "FCE4D6" }
        ),
        new Run(new Text(text))
    );
    mainPart.Document.Body!.Append(p);
}

void AddCheckBox(string text, bool isChecked = false)
{
    var p = new Paragraph(
        new ParagraphProperties(
            new ParagraphStyleId { Val = "Checkbox" },
            new Indentation { Left = "360" }
        ),
        new Run(new Text((isChecked ? "☑" : "☐") + " " + text))
    );
    mainPart.Document.Body!.Append(p);
}

void AddBullet(string text)
{
    var p = new Paragraph(
        new ParagraphProperties(
            new ParagraphStyleId { Val = "BodyText" },
            new Indentation { Left = "360" }
        ),
        new Run(new Text("• " + text))
    );
    mainPart.Document.Body!.Append(p);
}

void AddQA(string question, string answer)
{
    var p1 = new Paragraph(
        new ParagraphProperties(new ParagraphStyleId { Val = "BodyText" }),
        new Run(new Text("Q: " + question)) { RunProperties = new RunProperties(new Bold()) }
    );
    var p2 = new Paragraph(
        new ParagraphProperties(
            new ParagraphStyleId { Val = "BodyText" },
            new Indentation { Left = "360" }
        ),
        new Run(new Text("A: " + answer))
    );
    mainPart.Document.Body!.Append(p1);
    mainPart.Document.Body!.Append(p2);
}

void AddActivityChecklist(string activity, params string[] items)
{
    AddHeading3("【" + activity + "】准备清单");
    foreach (var item in items)
    {
        AddCheckBox(item);
    }
}

void AddRubricTable(string title, (string criterion, string excellent, string good, string needsWork)[] rows)
{
    AddHeading3(title);

    var tbl = new Table(
        new TableProperties(
            new TableWidth { Width = "5000", Type = TableWidthUnitValues.Pct },
            new TableBorders(
                new TopBorder { Val = BorderValues.Single, Size = 4, Color = PRIMARY_RED },
                new BottomBorder { Val = BorderValues.Single, Size = 4, Color = PRIMARY_RED },
                new LeftBorder { Val = BorderValues.Single, Size = 4, Color = PRIMARY_RED },
                new RightBorder { Val = BorderValues.Single, Size = 4, Color = PRIMARY_RED },
                new InsideHorizontalBorder { Val = BorderValues.Single, Size = 4, Color = ACCENT_GRAY },
                new InsideVerticalBorder { Val = BorderValues.Single, Size = 4, Color = ACCENT_GRAY }
            )
        ),
        new TableGrid()
    );

    // Header row
    var headerRow = new TableRow();
    headerRow.Append(CreateTableCell("评价维度", true, PRIMARY_RED));
    headerRow.Append(CreateTableCell("优秀 (4分)", true, PRIMARY_RED));
    headerRow.Append(CreateTableCell("良好 (3分)", true, PRIMARY_RED));
    headerRow.Append(CreateTableCell("需改进 (1-2分)", true, PRIMARY_RED));
    tbl.Append(headerRow);

    // Content rows
    foreach (var row in rows)
    {
        var dataRow = new TableRow();
        dataRow.Append(CreateTableCell(row.criterion, true, DARK_GRAY));
        dataRow.Append(CreateTableCell(row.excellent, false, DARK_GRAY));
        dataRow.Append(CreateTableCell(row.good, false, DARK_GRAY));
        dataRow.Append(CreateTableCell(row.needsWork, false, DARK_GRAY));
        tbl.Append(dataRow);
    }

    mainPart.Document.Body!.Append(tbl);
}

void AddRubricTable5Col(string title, (string criterion, string level1, string level2, string level3, string level4)[] rows)
{
    AddHeading3(title);

    var tbl = new Table(
        new TableProperties(
            new TableWidth { Width = "5000", Type = TableWidthUnitValues.Pct },
            new TableBorders(
                new TopBorder { Val = BorderValues.Single, Size = 4, Color = PRIMARY_RED },
                new BottomBorder { Val = BorderValues.Single, Size = 4, Color = PRIMARY_RED },
                new LeftBorder { Val = BorderValues.Single, Size = 4, Color = PRIMARY_RED },
                new RightBorder { Val = BorderValues.Single, Size = 4, Color = PRIMARY_RED },
                new InsideHorizontalBorder { Val = BorderValues.Single, Size = 4, Color = ACCENT_GRAY },
                new InsideVerticalBorder { Val = BorderValues.Single, Size = 4, Color = ACCENT_GRAY }
            )
        ),
        new TableGrid()
    );

    // Header row
    var headerRow = new TableRow();
    headerRow.Append(CreateTableCell("评价维度", true, PRIMARY_RED));
    headerRow.Append(CreateTableCell("4分", true, PRIMARY_RED));
    headerRow.Append(CreateTableCell("3分", true, PRIMARY_RED));
    headerRow.Append(CreateTableCell("2分", true, PRIMARY_RED));
    headerRow.Append(CreateTableCell("1分", true, PRIMARY_RED));
    tbl.Append(headerRow);

    // Content rows
    foreach (var row in rows)
    {
        var dataRow = new TableRow();
        dataRow.Append(CreateTableCell(row.criterion, true, DARK_GRAY));
        dataRow.Append(CreateTableCell(row.level1, false, DARK_GRAY));
        dataRow.Append(CreateTableCell(row.level2, false, DARK_GRAY));
        dataRow.Append(CreateTableCell(row.level3, false, DARK_GRAY));
        dataRow.Append(CreateTableCell(row.level4, false, DARK_GRAY));
        tbl.Append(dataRow);
    }

    mainPart.Document.Body!.Append(tbl);
}

TableCell CreateTableCell(string text, bool isHeader, string textColor)
{
    var cell = new TableCell(
        new TableCellProperties(
            new TableCellWidth { Width = "2000", Type = TableWidthUnitValues.Dxa },
            new Shading { Val = ShadingPatternValues.Clear, Fill = isHeader ? LIGHT_GRAY : WHITE }
        ),
        new Paragraph(
            new ParagraphProperties(
                new Justification { Val = JustificationValues.Center },
                new SpacingBetweenLines { Before = "60", After = "60" }
            ),
            new Run(
                new RunProperties(
                    new Color { Val = textColor },
                    new Bold()
                ),
                new Text(text)
            )
        )
    );
    return cell;
}

void AddSectionDivider(string sectionName)
{
    var p = new Paragraph(
        new ParagraphProperties(
            new ParagraphStyleId { Val = "DocTitle" },
            new Shading { Val = ShadingPatternValues.Clear, Fill = PRIMARY_RED },
            new SpacingBetweenLines { Before = "480", After = "480" }
        ),
        new Run(
            new RunProperties(
                new Color { Val = WHITE },
                new FontSize { Val = TITLE_SIZE }
            ),
            new Text(sectionName)
        )
    );
    mainPart.Document.Body!.Append(p);
}

void AddPageBreak()
{
    mainPart.Document.Body!.Append(new Paragraph(new Run(new Break { Type = BreakValues.Page })));
}

// ======================= DOCUMENT CONTENT =======================

// COVER PAGE
AddHeading1("AI时代经验传承");
AddHeading2("岗位手册批量开发工作坊");
AddHeading3("讲师手册");
AddBody("");
AddBody("");
AddBody("内部培训资料");
AddBody("版本: 1.0");
AddBody("适用对象: 企业内训讲师");

AddPageBreak();

// TABLE OF CONTENTS
AddHeading1("目录");
AddBody("第一部分：讲师开场导入与设计逻辑 ...................................................... 4");
AddBody("第二部分：模块一至模块五完整讲师指引 ............................................ 6");
AddBody("第三部分：常见问题与应对方案 ........................................................ 45");
AddBody("第四部分：活动准备清单与检查项 .................................................... 52");
AddBody("第五部分：评估量规与评分标准 ........................................................ 58");
AddBody("附录：两天工作坊时间分配总表 ........................................................ 65");

AddPageBreak();

// ======================= PART 1: 讲师开场导入 =======================
AddSectionDivider("第一部分：讲师开场导入与设计逻辑");

AddHeading1("1. 开场设计原理");

AddHeading2("1.1 课程背景讲解要点");
AddBody("在课程开始时，讲师需要清晰传达以下核心信息：");
AddBullet("企业经验传承的痛点：最厉害的人离职了，经验还在吗？");
AddBullet("隐性知识的定义：为什么经验丰富的人写出来的东西读者反而看不进去？");
AddBullet("AI时代的新机遇：借助AI Skill工具，大幅提升经验萃取效率");

AddInstructorNote("开场前30秒至关重要。建议用一个真实的'扎心问题'引入，例如：'你们部门最厉害的人离职了，他的经验还在吗？'这个问题能让参与者立刻进入思考状态。");

AddHeading2("1.2 三类常见'伪手册'识别");
AddBody("讲师需要帮助学员识别以下三种无效手册类型：");

AddRedCallout("制度汇编型：充满条款引用，读者完全用不起来");
AddBody("典型表现：第12条规定...依据XX规程执行...");
AddRedCallout("课件搬运型：大纲要点罗列，没有场景和案例");
AddBody("典型表现：安全检查三大目标：1. 2. 3.");
AddRedCallout("经验堆砌型：以作者为中心，读者不知该做什么");
AddBody("典型表现：我当年这么做，靠的是责任心...");

AddHeading2("1.3 好手册的四个设计原则");
AddInstructorNote("这是课程的核心知识点，讲师需要用实际案例反复讲解，确保每位学员理解并能应用。");

AddBullet("以场景为入口：读者不是从第一页开始读，而是'遇到什么事翻哪页'");
AddBullet("以动作为核心：每一条内容都指向一个可执行的具体动作");
AddBullet("以真实案例为骨架：抽象道理用真实故事来承载");
AddBullet("以工具为配套：关键环节配表单、话术、清单，看完就能直接用");

AddHeading1("2. 讲师角色定位");

AddHeading2("2.1 课程目标与讲师核心职责");
AddRedCallout("不是讲课，是带着做出来！");
AddBody("工作坊的核心目标：每位参与者现场完成自己课题的手册初稿");
AddBody("讲师的角色：引导者、辅导者、质量把控者");

AddHeading2("2.2 三类人群的价值挖掘");
AddBody("讲师需要理解并有效调动三类不同背景的参与者：");

AddBody("角色A：经验较浅者（入职不足一年或跨岗转入）");
AddBullet("核心价值：读者视角 — 贡献真实困惑与卡点");
AddBullet("访谈重点：引导其回忆当初的迷茫和踩过的坑");

AddBody("角色B：业务骨干（3年以上，绩效优秀）");
AddBullet("核心价值：经验视角 — 贡献可复用的操作经验");
AddBullet("访谈重点：引导其将隐性经验显性化，挖掘判断逻辑");

AddBody("角色C：部门/团队管理者");
AddBullet("核心价值：标准视角 — 把控内容的准确性与规范性");
AddBullet("访谈重点：让其确认'应该怎么做'和'红线在哪里'");

AddHeading1("3. 时间分配总览");
AddTimeAlloc("第一天上午：开场导入 + 模块一（2小时）");
AddTimeAlloc("第一天下午：模块二至模块三前半（4小时）");
AddTimeAlloc("第二天上午：模块三后半至模块四（4小时）");
AddTimeAlloc("第二天下午：模块五 + 成果展示（4小时）");

AddInstructorNote("每个模块结束时，讲师应进行3-5分钟的快速总结，回顾本环节产出，明确下一环节目标。");

AddPageBreak();

// ======================= PART 2: 模块完整讲师指引 =======================
AddSectionDivider("第二部分：模块一至模块五完整讲师指引");

// ===== MODULE 1 =====
AddHeading1("模块一：开场导入与手册设计逻辑");
AddTimeAlloc("时长：约2小时");
AddInstructorNote("模块一是建立框架的关键模块。建议在讲解'伪手册识别'时，多展示实际案例，让学员对照反思自己的工作。");

AddHeading2("1.1 开场导入（20分钟）");

AddFacilitatorScriptWithSituation("引入话题", "各位好，今天我们来解决一个问题：你们部门最厉害的人离职了，他的经验还在吗？三个月后，新人还是在踩同样的坑，那份三十页文档，打开看过一次，再也没人翻过。这不是他写得不认真，而是知识沉淀的方式根本就不对。");

AddFacilitatorScriptWithSituation("揭示本质", "把经验倒进Word文档，和把经验转化成'读者拿到手就能用的手册'，是完全不同的两件事。这次工作坊，就是来把第二件事真正做出来的。");

AddFacilitatorScriptWithSituation("说明目标", "两天之后，你们每个人手里应该有一份完整的手册开发包——定稿的课题定位表、经过校验的手册初稿、配套的工具包和案例。40-50人同时推进，整个组织同步收获40-50本手册初稿。");

AddHeading2("1.2 三类伪手册识别练习（25分钟）");
AddInstructorNote("此练习可单人完成，也可2-3人小组讨论。重点不在于'答对'，而在于建立'读者视角'的判断标准。");

AddActivityChecklist("伪手册识别练习", "准备4段练习材料（提前打印）", "准备白板或投影展示判断框架", "准备参考答案用于讲解");

AddFacilitatorScriptWithSituation("布置任务", "请阅读下面四段内容，判断每段属于哪种类型（制度汇编型/课件搬运型/经验堆砌型/有用的手册），并写出你的判断理由。");

AddFacilitatorScriptWithSituation("引导讨论", "判断的核心标准不是'写得好不好'，而是：读者拿到这段文字，知不知道接下来该做什么？");

AddHeading2("1.3 好手册四原则讲解（30分钟）");
AddInstructorNote("四原则是本课程的核心框架，讲师需要配合大量实际案例帮助学员理解。建议每个原则至少用一个'改写前后'的对比案例。");

AddRubricTable("手册设计原则评分练习", new (string, string, string, string)[]
{
    ("以场景为入口", "按'读者遇到什么情境'组织章节", "部分按场景组织", "按知识点分类组织"),
    ("以动作为核心", "每条都指向可执行的具体动作", "大部分是动作描述", "大量形容词和空泛要求"),
    ("以案例为骨架", "有完整的正面/反面案例", "有案例但不完整", "只有规则没有故事"),
    ("以工具为配套", "关键环节配有表单/清单/话术", "有部分工具", "完全没有工具配套")
});

AddHeading2("1.4 原则评分练习（20分钟）");
AddActivityChecklist("评分练习", "准备待评分的手册片段", "准备评分表模板", "安排小组讨论时间");

AddFacilitatorScriptWithSituation("引导反思", "不要追求每项都打高分。识别'这段内容最大的问题在哪里'，比四项都给中等分更有诊断价值。");

AddHeading2("1.5 三类手册选择（15分钟）");
AddBody("讲师需要清晰传达三类手册的本质区别：");

AddBody("操作手册：");
AddBullet("读者是谁：第一次做某项工作的人");
AddBullet("读者什么时候翻：知道下一步该做什么");
AddBullet("翻完应该能：独立完成操作并知道做对的标准");

AddBody("带教手册：");
AddBullet("读者是谁：承担带教职责的人（老师傅/导师）");
AddBullet("读者什么时候翻：知道怎么把技能传给别人");
AddBullet("翻完应该能：清楚示范什么、怎么验收");

AddBody("应知应会手册：");
AddBullet("读者是谁：刚入职或轮岗的新人");
AddBullet("读者什么时候翻：快速建立岗位认知地图");
AddBullet("翻完应该能：知道岗位边界、常见问题、找谁解决");

AddInstructorNote("最容易混淆的是带教手册和操作手册。关键区分：操作手册的使用者是'做事的人'，带教手册的使用者是'教别人做的人'。");

AddPageBreak();

// ===== MODULE 2 =====
AddHeading1("模块二：方向定位与素材准备");
AddTimeAlloc("时长：约3小时（含访谈练习）");
AddInstructorNote("这是整个工作坊最关键的一步。定位不准，Skill的输出就会跑偏；素材不足，初稿质量就会失真。讲师需要在此环节投入足够时间，确保每位学员的定位表质量达标。");

AddHeading2("2.1 课题定位表讲解（30分钟）");

AddFacilitatorScriptWithSituation("强调重要性", "定位表不是走形式，而是真正决定后续所有内容质量的'地基'。AI Skill生成初稿的质量，90%取决于输入的定位是否准确。");

AddFacilitatorScriptWithSituation("讲解五要素", "课题定位表有五个核心要素：目标场景、目标人群、核心问题、预期效果、手册类型。这五个要素缺一不可。");

AddRubricTable("课题定位表五要素检查", new (string, string, string, string)[]
{
    ("目标场景", "能用'当...的时候'描述具体情境", "场景较宽泛", "场景模糊或过于宽泛"),
    ("目标人群", "描述了读者的'基础'和'缺口'", "仅有基础描述", "只有'新员工'等模糊描述"),
    ("核心问题", "3-5个读者的真实困惑", "问题过多或过少", "问题过于抽象或空泛"),
    ("预期效果", "具体可验证的行为描述", "效果描述模糊", "效果不可验证"),
    ("手册类型", "已确认且符合课题特点", "类型待确认", "类型选择明显错误")
});

AddHeading2("2.2 三类人群交叉确认（20分钟）");
AddActivityChecklist("交叉确认准备", "确保每组三类人群（A/B/C）都在场", "准备确认记录表", "准备定时提醒");

AddFacilitatorScriptWithSituation("引导角色A确认", "请角色A（经验较浅者）阅读目标人群描述和核心问题：这个描述符合你当初的真实情况吗？这3-5个问题，是不是你当时真正困惑的问题？");

AddFacilitatorScriptWithSituation("引导角色C确认", "请角色C（管理者）阅读目标场景和预期效果：这个范围是否符合实际需要？这个预期效果，你认为是现实可达成的吗？");

AddInstructorNote("定位表必须经过两类人群确认后，才能进入素材准备环节。如果定位方向有偏差，现在调整比后面改稿要容易得多。");

AddHeading2("2.3 素材准备讲解（25分钟）");
AddRedCallout("Skill的输出质量 = 输入素材的质量");
AddBody("这一节专门解决'输入什么、怎么输入'的问题。");

AddHeading2("2.4 三类手册素材需求");

AddBody("操作手册：");
AddBullet("必须有：任务场景清单 + 骨干员工操作讲解录音");
AddBullet("有了更好：常见问题记录 + 表单样本");

AddBody("带教手册：");
AddBullet("必须有：带教阶段说明 + 各阶段示范要点访谈");
AddBullet("有了更好：现有考核标准 + 带教卡点记录");

AddBody("应知应会手册：");
AddBullet("必须有：岗位核心职责 + 高频场景列表 + 新人常问问题");
AddBullet("有了更好：核心术语解释 + 对接部门信息");

AddHeading2("2.5 三轮结构化访谈（40分钟）");

AddFacilitatorScriptWithSituation("第一轮引导语", "我们现在来问你一些问题，你不需要准备什么，就是把你真实经历过的困惑说出来——越具体越好，越真实越有价值。");

AddFacilitatorScriptWithSituation("第二轮引导语", "接下来我们来问你几个关于你自己怎么做这件事的问题。不用说'应该怎么做'，就说你自己实际怎么做的——包括你的一些小技巧、判断方法，越具体越好。");

AddFacilitatorScriptWithSituation("第三轮引导语", "最后几个问题，我们想问问在你看来，这件事的'标准'应该是什么样的。不是说规定上怎么写，而是你作为管理者，你觉得做对了的样子是什么？");

AddRubricTable("访谈质量评估", new (string, string, string, string)[]
{
    ("角色A贡献", "提供了3条以上具体困惑和踩过的坑", "提供了1-2条困惑", "无法提供有效困惑信息"),
    ("角色B贡献", "提供了完整的操作讲解，包含判断逻辑和诀窍", "操作讲解较完整但缺少判断逻辑", "讲解过于笼统或碎片化"),
    ("角色C贡献", "明确了达标标准和绝对不能做的事", "提供了一些标准但不够明确", "无法提供有效的标准信息")
});

AddInstructorNote("访谈全程开启手机录音。录音转文字后，不需要修改错别字或口语化表达，原文保留即可——口语化内容保留了说话者的真实表达方式，是AI分析的好素材。");

AddHeading2("2.6 追问五个万能句式");
AddBody("在访谈中，当对方的回答很笼统或者停下来的时候，用这五个句式追问：");

AddBullet("让描述更具体：你能举个具体的例子吗？比如……的时候，你是怎么做的？");
AddBullet("深挖判断逻辑：你当时是怎么判断要这样做的？是有什么信号，还是你有什么经验？");
AddBullet("找出隐含步骤：在这一步和下一步之间，有没有你没说出来但实际上要做的事情？");
AddBullet("挖掘反例：有没有做错了或者没做到位的例子？那次发生了什么？");
AddBullet("提炼要点：你刚才说的这些，如果只让你说一句话，最关键的是什么？");

AddPageBreak();

// ===== MODULE 3 =====
AddHeading1("模块三：AI Skill生成初稿与交叉审阅");
AddTimeAlloc("时长：约2.5小时");
AddInstructorNote("这是工作坊效率最高的一步。前面的定位和素材准备到位，Skill可以在10-15分钟内输出一份结构完整的手册初稿。讲师在此环节重点关注输入质量和初稿方向。");

AddHeading2("3.1 Skill工作原理讲解（20分钟）");

AddFacilitatorScriptWithSituation("说明Skill的能力边界", "Skill会做：素材结构化整理、语言流畅化、格式规范化、案例框架生成、检查清单初版。Skill不会做：发明你没有提供的经验、判断内容准确性、识别企业合规风险。");

AddRedCallout("一句话记住Skill的定位：它负责把你的素材变成初稿，它不负责替你提供经验，也不替你做内容判断。");

AddHeading2("3.2 三类手册Skill输入规范（20分钟）");

AddFacilitatorScriptWithSituation("操作手册Skill输入", "必填：课题定位表 + 骨干员工操作讲解录音。选填：任务场景列表、已有SOP、新人常见问题记录、表单样本。");

AddFacilitatorScriptWithSituation("带教手册Skill输入", "必填：课题定位表 + 带教阶段说明 + 各阶段示范要点。选填：带教卡点记录、考核标准、带教周期说明。");

AddFacilitatorScriptWithSituation("应知应会Skill输入", "必填：课题定位表 + 岗位核心职责 + 高频场景列表 + 新人常问问题。选填：核心术语解释、对接部门信息、已有新人培训材料。");

AddHeading2("3.3 提交前三个必查点（15分钟）");

AddFacilitatorScriptWithSituation("检查点一", "骨干经验是否足够具体？读一遍你的素材整理表，看骨干员工的描述能不能让你知道'下一步身体要做什么动作'。");

AddFacilitatorScriptWithSituation("检查点二", "场景是否覆盖了读者最需要的情境？想象一下读者翻开手册最常见的三种情况，这三种情况手册里有没有对应内容？");

AddFacilitatorScriptWithSituation("检查点三", "标准视角是否输入进去了？角色C确认的标准和红线，有没有在素材整理表里体现？如果管理者的视角缺失，Skill生成的手册会有合规风险。");

AddInstructorNote("如果三个检查点里有任何一个'不合格'，先补充素材，再提交Skill。5分钟的补充，比事后大幅修改初稿节省时间得多。");

AddHeading2("3.4 Skill生成初稿与初步审阅（35分钟）");
AddActivityChecklist("Skill生成环节", "确认所有学员已准备就绪", "提前测试Skill工具运行正常", "准备候补方案（离线模式）");

AddFacilitatorScriptWithSituation("快速扫描引导", "拿到初稿后，先不要逐字逐句阅读——先用三个维度做快速扫描：结构对不对、内容准不准、读者能不能用。");

AddRubricTable("初稿快速扫描维度", new (string, string, string, string)[]
{
    ("结构对不对", "章节划分符合定位，场景覆盖完整", "部分章节与定位有偏差", "章节逻辑混乱，场景缺失"),
    ("内容准不准", "关键步骤还原了骨干的真实经验", "部分步骤被简化或误解", "关键经验缺失或被错误解读"),
    ("读者能不能用", "读者知道下一步该做什么", "部分内容读者无法执行", "读者看完仍不知如何行动")
});

AddHeading2("3.5 三类人群交叉阅读标记（25分钟）");
AddRedCallout("三类人群各自带着不同视角阅读，用统一标记符号在初稿上做标记：✓（准确保留）、△（需补充完善）、✗（需删除或重写）、？（不确定需核实）");

AddHeading2("角色A阅读任务（读者视角）");
AddBullet("找出'看不懂'或'不知道怎么做'的地方");
AddBullet("标记类型：专业术语没解释、缺乏完成标准、看完不知下一步");

AddHeading2("角色B阅读任务（经验视角）");
AddBullet("找出'经验写错了'或'遗漏了关键细节'的地方");
AddBullet("标记类型：步骤被过度简化、关键诀窍消失、场景被写得太简单");

AddHeading2("角色C阅读任务（标准视角）");
AddBullet("找出'不符合标准'或'存在合规风险'的地方");
AddBullet("标记类型：与公司规范不一致、表述有合规风险、强制动作被写成选项");

AddHeading2("3.6 汇总标记确定修改重点（15分钟）");
AddInstructorNote("汇总原则：先处理'高频+高影响'的问题——被多个人标记的问题，和涉及核心操作步骤的问题，优先处理。");

AddRubricTable("修改优先级分类", new (string, string, string, string)[]
{
    ("最优先", "内容方向性问题", "整个章节内容方向跑偏，需要重写", "第二天上午优先处理"),
    ("优先", "关键细节缺失", "重要经验或步骤被漏掉，需要补充", "第二天上午处理"),
    ("一般", "表述不准确", "大方向对但描述有偏差", "第二天有空处理"),
    ("最后", "语言优化", "内容准确但读起来不够清晰", "有时间再做")
});

AddPageBreak();

// ===== MODULE 4 =====
AddHeading1("模块四：人工深度校验与工具案例补充");
AddTimeAlloc("时长：约3.5小时");
AddInstructorNote("Skill负责速度，人负责质量。这一模块的重心是：把AI生成的初稿变成真正准确、可用的手册。这是整个工作坊中最考验'人的价值'的环节。");

AddHeading2("4.1 为什么这一步决定质量（15分钟）");

AddFacilitatorScriptWithSituation("强调人控价值", "AI不知道你的实际情况。AI生成的'检查步骤'可能和你们实际设备不匹配。AI不能判断隐性知识——骨干说'看灯光闪了两下就是异常'，AI可能理解不到这个细节。AI不能识别合规风险——企业内部的规范标准，AI无法验证是否符合。");

AddRedCallout("核心认知：AI负责速度，人负责质量。这不是说AI不重要，而是说你们的工作经验、判断力和对标准的把握，是这份手册最终能不能被使用的决定因素。");

AddHeading2("4.2 校验的三个层次（25分钟）");

AddHeading3("第一层：准确性");
AddBody("核心问题：操作步骤是否还原了真实的经验？有没有'正确但没用'的表述？");
AddFacilitatorScriptWithSituation("检查方法", "逐一步骤阅读，把自己想象成第一次做这件事的人。这一步，我看完知道具体要做什么吗？这一步有告诉我'做完了的标准是什么'吗？");

AddHeading3("第二层：完整性");
AddBody("核心问题：有没有遗漏读者最需要的场景？关键的'反面案例'有没有体现？");
AddBullet("容易漏掉的内容一：'出错了怎么办'的场景");
AddBullet("容易漏掉的内容二：'踩过才知道'的隐性知识");

AddHeading3("第三层：可用性");
AddBody("核心问题：目标读者照着做，第一次能做对吗？步骤颗粒度是否足够？");
AddFacilitatorScriptWithSituation("检查方法", "让你课题的目标读者拿着初稿，真的去执行一遍——他能完成吗？");

AddHeading2("4.3 三类手册校验清单（20分钟）");

AddRubricTable("操作手册校验清单核心项", new (string, string, string, string)[]
{
    ("结构层面", "有'异常情况怎么处理'的章节", "部分场景有异常处理", "缺少异常处理内容"),
    ("准确性层面", "操作步骤与骨干实际做法一致", "大部分一致，部分有偏差", "关键步骤描述失真"),
    ("完整性层面", "角色A困惑都有对应回答", "部分困惑未被回答", "大量困惑被遗漏"),
    ("可用性层面", "读者能独立完成一次操作", "部分情况能完成", "读者无法照着做")
});

AddRubricTable("带教手册校验清单核心项", new (string, string, string, string)[]
{
    ("结构层面", "带教阶段划分清晰，各阶段目标明确", "阶段划分较清晰", "缺少阶段划分"),
    ("准确性层面", "带教人照手册能独立完成一次带教", "部分能独立完成", "无法指导带教"),
    ("完整性层面", "有常见带教卡点描述", "有部分卡点描述", "缺少卡点内容"),
    ("可用性层面", "带教人能找到'这阶段结束了吗'的判断标准", "部分阶段有判断标准", "缺少判断标准")
});

AddRubricTable("应知应会手册校验清单核心项", new (string, string, string, string)[]
{
    ("结构层面", "有速查索引或按场景找内容的入口", "有索引但不够便捷", "缺少索引入口"),
    ("准确性层面", "核心术语解释准确", "大部分准确", "有错误术语解释"),
    ("完整性层面", "新人常见问题都有简短回答", "部分问题有回答", "大量问题未覆盖"),
    ("可用性层面", "新人能用自己的话复述岗位主要工作", "部分能复述", "无法建立认知地图")
});

AddHeading2("4.4 工具包开发（30分钟）");
AddRedCallout("工具解决'怎么做'，案例解决'为什么这样做'和'不这样做会怎样'。案例是手册中最有温度的部分——人记不住规则，但记得住故事。");

AddHeading3("工具开发三步法");
AddFacilitatorScriptWithSituation("第一步", "用AI辅助生成工具初版。把手册已校验的内容发送给AI，附加提示词：'根据以下手册内容，生成一份检查清单/跟进记录表/速查表'。");

AddFacilitatorScriptWithSituation("第二步", "人工验证工具初稿。重点核查四点：术语是否准确、流程是否符合实际、话术是否自然、是否有合规风险。");

AddFacilitatorScriptWithSituation("第三步", "嵌入手册对应位置。工具不是放在附录里算数，而是要嵌入到手册里'读者最需要它的那个位置'。");

AddHeading2("4.5 典型案例开发（30分钟）");

AddHeading3("案例三种形式");
AddBullet("正面案例：让读者看到'按这个方法做，是什么效果'");
AddBullet("反面案例：让读者看到'不这样做，会发生什么'");
AddBullet("情景选择案例：给多个可能选项及各自后果");

AddHeading3("案例写作结构");
AddBullet("背景（1-2句）：什么人，在什么情境下，遇到了什么情况");
AddBullet("过程（3-5步）：当时怎么做的，或者做错了怎么处理");
AddBullet("结果（1-2句）：最终发生了什么");
AddBullet("启示（1句话）：读者从这个案例里应该带走什么");

AddInstructorNote("反面案例里如果涉及真实事故或人员，需要做好脱敏处理：不用真实姓名，不用可以识别具体时间和地点的信息，聚焦于'场景和教训'而不是'追责'。");

AddPageBreak();

// ===== MODULE 5 =====
AddHeading1("模块五：五步优化与成果收尾");
AddTimeAlloc("时长：约3小时");
AddInstructorNote("五步优化法专门解决'读者没有理由继续翻下去'的问题。前四步在前两天逐步完成，第五步（价值升华）在第二天下午集中处理。");

AddHeading2("5.1 五步优化法（90分钟）");

AddHeading3("第一步：痛点共鸣（让人有意愿读）");
AddFacilitatorScriptWithSituation("开篇引导", "手册开篇不要上来就讲规范，先让读者觉得'这说的就是我'。核心句式：'你是不是也遇到过这种情况……'");
AddActivityChecklist("痛点共鸣练习", "准备角色A提供的原始困惑素材", "准备3-5个痛点共鸣段落范例", "安排小组互评时间");

AddHeading3("第二步：场景描述（让人建立连接）");
AddFacilitatorScriptWithSituation("技巧讲解", "把抽象的操作要求转化为读者能看见的画面。不写'注意核实关键信息'，而写'当你拿到一份数据，先做三件事——看日期是不是最新的、看口径和上次是不是一致、看合计数能不能对上'。");
AddActivityChecklist("场景描述练习", "选择手册中3个核心操作步骤", "将每步改写为具象化场景描述", "检查改写后是否保留了动作要领");

AddHeading3("第三步：价值植入（让人深度认同）");
AddFacilitatorScriptWithSituation("技巧讲解", "不只告诉读者'怎么做'，还要讲清楚'为什么这样做是对的'。对比展示：标准做法 vs 常见错误做法，结果差异一目了然。");
AddActivityChecklist("价值植入练习", "准备标准做法描述", "准备常见错误描述及后果", "将两者对比呈现");

AddHeading3("第四步：行动促进（让人转化行动）");
AddBullet("每个章节末尾设计'自查问题'：做完这件事，问自己这三个问题");
AddBullet("记忆口诀设计：核心步骤浓缩为8字以内的口诀");
AddActivityChecklist("行动促进练习", "为各章节设计自查问题", "提炼记忆口诀", "验证口诀可记性和准确性");

AddHeading3("第五步：价值升华（让人铭记在心）");
AddFacilitatorScriptWithSituation("结尾设计", "手册结尾不是'以上就是全部内容'，而是让读者带走一个信念。结尾设计：'三个月后你会发现……'——描绘成长画面。业务骨干寄语：用前辈的真实经验给读者打气。");
AddActivityChecklist("价值升华练习", "撰写手册结尾信念段落", "邀请角色B贡献寄语", "打磨结尾让读者有获得感");

AddHeading2("5.2 简版使用说明编写（30分钟）");
AddRedCallout("简版使用说明的目标：10分钟读完就能上手。");
AddBody("结构包括：");
AddBullet("这本手册是做什么的（一句话说清）");
AddBullet("你现在最需要看哪几页（按使用阶段分阶段推荐）");
AddBullet("遇到问题怎么快速查找（按场景索引）");
AddBullet("手册里最重要的5条建议");

AddHeading2("5.3 手册整合编排与交叉评审（45分钟）");
AddActivityChecklist("整合编排准备", "统一格式规范检查清单", "准备交叉评审表格", "安排互评时间");

AddFacilitatorScriptWithSituation("格式统一说明", "统一格式规范：标题层级、字体字号、图表样式。内容编排顺序确认：封面 → 使用说明 → 目录 → 各章节 → 工具包汇总 → 附录。");

AddRubricTable("交叉评审维度", new (string, string, string, string)[]
{
    ("内容准确性", "所有信息准确无误", "少量信息待核实", "存在明显错误"),
    ("操作可行性", "步骤可执行性100%", "大部分步骤可执行", "存在无法执行的步骤"),
    ("语言通俗性", "读者能完全理解", "部分表述需优化", "大量表述晦涩"),
    ("格式规范性", "格式完全统一", "少量格式不一致", "格式混乱"),
    ("合规安全性", "无合规风险", "少量表述需确认", "存在明显合规问题")
});

AddHeading2("5.4 成果展示与后续规划（60分钟）");
AddActivityChecklist("成果展示准备", "每组精选1本手册展示", "准备3分钟展示稿", "准备讲师点评清单");

AddFacilitatorScriptWithSituation("展示引导", "各人代表展示手册核心亮点（每组精选1本，每组3分钟）。展示重点：这本手册解决什么问题？最有特色的部分是哪里？");

AddFacilitatorScriptWithSituation("点评要点", "讲师点评与优化方向：指出亮点、提出1-2条建设性建议、确认后续完善计划。");

AddHeading2("5.5 后续规划建议");
AddBody("课后跟进节点：");
AddBullet("课后1周内：根据交叉评审意见完成最终修改");
AddBullet("课后2周内：完成内容审核和合规审核");
AddBullet("课后1个月内：2-3名真实目标读者试用验证");
AddBullet("课后3个月：首次定期评审，更新案例和工具");

AddInstructorNote("提醒学员：工作坊结束不等于手册完成。AI Skill配套的提示词模板已提供，确保参与者课后能独立持续迭代。");

AddPageBreak();

// ======================= PART 3: 常见问题与应对 =======================
AddSectionDivider("第三部分：常见问题与应对方案");

AddHeading1("1. 课程实施常见问题");

AddQA("学员说'我的岗位经验不足一年，能做出有价值的手册吗？'",
    "能。你的价值在于'读者视角'——你还记得当初的困惑和卡点，这恰恰是老员工已经遗忘的内容。你主要贡献角色A的视角，让手册更贴合真实读者需求。");

AddQA("学员选错了手册类型怎么办？",
    "工作坊第一模块有专门的判断框架帮助确认。如果实在难以判断，优先选择操作手册（适用性最广）。在实操过程中，如果发现类型选择明显偏差，可在模块二定位环节调整。");

AddQA("学员反映'两天时间真的能完成一本手册吗？'",
    "能。本工作坊的设计专为两天密集产出优化。AI Skill承担初稿生成，让你从'从零写'变为'从初稿改'。关键在于定位准确和素材充足。已有多个企业验证，两天确实可以现场产出手册完整初稿。");

AddQA("AI生成的内容不可靠怎么办？",
    "AI生成的内容需要人工校验后才能使用，这是设计预期。AI负责'速度'，人负责'质量'。工作坊专门设计了人工校验环节（三层次校验框架）确保内容准确。学员应关注的是'校验'环节而非'质疑'AI本身。");

AddQA("学员说'Skill不会用/工具出问题了'",
    "提前准备离线模式：准备手工填写定位表的Word模板，准备'素材整理表'的备用格式。技术上，确保提前测试过所有工具，候补方案到位。");

AddQA("学员素材不足，无法生成有效初稿怎么办？",
    "模块二访谈环节投入更多时间，确保三类人群都能提供有效信息。如果素材质量实在不够，可以：1) 扩大访谈范围，邀求助其他同事；2) 暂时使用'假设情境'完成练习，课后补充真实素材。");

AddQA("三类人群混编分组难以实现怎么办？",
    "最低配置：每组至少有角色A（新手视角）和角色B（经验视角）。角色C可由讲师或组长代为提供标准视角。若角色A缺失，可引导角色B回忆自己当初的困惑。");

AddQA("学员在实操环节偏离主题怎么办？",
    "用定位表作为'方向盘'：每个实操环节开始时，让学员对照定位表确认'我现在做的是否在定位范围内'。偏离时温和但明确地引导回归。");

AddHeading1("2. 讲师临场应对技巧");

AddQA("学员提出的问题超出课程范围怎么办？",
    "记录下来，课后单独交流。课程时间宝贵，不在课程核心框架内的问题不应占用集体时间。可以说：'这个问题很有价值，我们课后单独探讨。'");

AddQA("学员之间的观点冲突如何处理？",
    "如果A和B对某个操作细节有分歧，引导用证据说话：'有没有具体的案例或数据支持？''我们可以做个快速测试验证哪个更有效。'将冲突转化为学习机会。");

AddQA("某个学员过于沉默不愿参与怎么办？",
    "私下沟通了解原因。可能是不确定自己的价值（鼓励其贡献读者视角），也可能是性格内向（可安排书面分享替代口头分享）。");

AddQA("时间紧张，实操环节超时怎么办？",
    "优先确保核心产出环节（定位表→初稿→校验）不压缩。非核心环节（优化、交叉评审）可适当精简。重点：学员离开时手里要有可用的手册初稿。");

AddQA("学员对AI生成的初稿期望过高怎么办？",
    "提前管理预期：'AI生成的是初稿，不是终稿。初稿到终稿需要人工校验和优化。'展示往期学员的优秀案例，说明他们也是经过多轮修改才达标的。");

AddHeading1("3. 课程内容常见疑问");

AddQA("操作手册和带教手册到底有什么区别？",
    "核心区别在于'使用者是谁'。操作手册给'做事的人'用，翻开是为了知道下一步怎么做；带教手册给'教别人做的人'用，翻开是为了知道怎么把技能传给别人。如果写的是'操作步骤'但目标是'教会别人'，那它还是操作手册而非带教手册。");

AddQA("应知应会手册和培训课件有什么区别？",
    "培训课件是'讲给学员听的'，有讲师讲解才有意义；应知应会是'写给读者看的'，没有讲师也能独立使用。课件可以按知识体系组织，应知应会必须按'读者什么时候会翻开'的场景组织。");

AddQA("为什么强调'三类人群'而不是个人独立完成？",
    "因为每类人群贡献的信息是不同的。角色A记得困惑（读者视角），角色B有操作经验（经验视角），角色C知道标准（规范视角）。单一角色写出来的东西容易有盲区，三类人群交叉校验才能确保内容完整、准确、可用。");

AddQA("学员问'手册完成后还需要做什么'",
    "1) 内部评审：由岗位负责人或部门主管审核内容准确性；2) 合规审核：涉及对外沟通、服务承诺的内容须经职能部门审核；3) 试用验证：找2-3名真实目标读者试用，收集反馈；4) 发布存档：定稿后纳入企业知识库。");

AddPageBreak();

// ======================= PART 4: 活动准备清单 =======================
AddSectionDivider("第四部分：活动准备清单与检查项");

AddHeading1("1. 课前14天准备检查项");

string[] prep14Days = new string[]
{
    "确认场地：能容纳40-50人，分5组，每组有独立讨论空间",
    "确认分组：提前完成三类人群混编分组，确认每位参与者的手册课题和角色",
    "发送课前通知：告知参与者准备现有资料（制度文件/SOP/表单等）",
    "确认录音功能：提醒参与者确认手机录音功能可用",
    "准备教材打印：学员手册、定位表模板、访谈问题清单",
    "准备教具：白板/投影、计时器、打印用纸、笔",
    "测试AI Skill工具：确保所有参与者能正常访问和使用",
    "准备候补方案：离线手工填写模板、备用网络热点"
};

foreach (var item in prep14Days)
    AddCheckBox(item);

AddHeading1("2. 课前7天准备检查项");

string[] prep7Days = new string[]
{
    "确认最终参与者名单和分组",
    "检查AI Skill工具访问权限",
    "打印所有工作表和模板（定位表、访谈记录表、校验清单）",
    "准备学员手册（电子版或纸质版）",
    "准备讲师手册（含完整流程和备用内容）",
    "确认音响设备、投影设备、备用电脑",
    "准备茶歇和午餐（如果适用）",
    "发送最终日程安排给参与者"
};

foreach (var item in prep7Days)
    AddCheckBox(item);

AddHeading1("3. 课前1天准备检查项");

string[] prep1Day = new string[]
{
    "场地布置：桌椅分组摆放、投影/白板到位",
    "资料分装：每组一份资料袋（含所有模板）",
    "设备调试：投影、音响、电脑、备用设备",
    "打印备用：额外打印10%备用份数",
    "签到材料：签到表、名牌、座位表",
    "茶歇确认：饮用水、纸杯、文具补充",
    "应急联络：确认所有讲师和助教联系方式",
    "打印最终版日程和紧急预案"
};

foreach (var item in prep1Day)
    AddCheckBox(item);

AddHeading1("4. 每天课程开始前检查项");

string[] dailyCheck = new string[]
{
    "检查投影设备和音响正常工作",
    "确认每组都有足够的模板和纸张",
    "准备好当天的时间节点提醒（可用手机计时器）",
    "确认各组助教到位并理解当天流程",
    "检查前一天产出物是否保存完好",
    "确认茶歇和设备支持到位",
    "讲师准备好的核心话术和引导词",
    "备用方案的准备状态"
};

foreach (var item in dailyCheck)
    AddCheckBox(item);

AddHeading1("5. 每组助教职责清单");

AddHeading2("模块一（开场导入）");
AddBullet("协助讲师布置练习材料");
AddBullet("引导迟到者快速进入状态");
AddBullet("记录学员提出的典型问题");

AddHeading2("模块二（定位与素材）");
AddBullet("逐组检查定位表完成质量");
AddBullet("确认三类人群交叉确认完成");
AddBullet("协助访谈小组找到安静空间");
AddBullet("检查录音是否正常进行");

AddHeading2("模块三（AI生成）");
AddBullet("协助学员解决工具使用问题");
AddBullet("监控初稿生成进度");
AddBullet("收集交叉标记记录表");

AddHeading2("模块四（校验补充）");
AddBullet("协助校验流程推进");
AddBullet("确保每人都完成了工具包和案例");
AddBullet("检查工具嵌入手册的位置是否合适");

AddHeading2("模块五（优化收尾）");
AddBullet("协助整合编排流程");
AddBullet("组织交叉评审环节");
AddBullet("记录成果展示的亮点和问题");

AddHeading1("6. 设备与材料清单");

AddHeading2("投影设备");
AddBody("投影仪×1、投影幕布或大白板、电脑×1（备用）、HDMI线缆、翻页笔");

AddHeading2("音响设备");
AddBody("麦克风×2（手持+头戴）、音响系统×1、备用电池");

AddHeading2("文具用品");
AddBody("白板笔（红/黑/蓝）×各5支、白板擦×2、A4纸×500张、便利贴×10本、回形针×10盒");

AddHeading2("打印材料");
AddBody("学员手册×50、定位表×50、访谈记录表×50、校验清单×50、交叉评审表×50");

AddHeading2("其他物资");
AddBody("饮用水×足量、纸杯×足量、姓名牌×50、组别标识牌×5、计时器×1");

AddHeading1("7. 场地布置要求");

AddHeading2("空间布局");
AddBullet("5组，每组8-10人");
AddBullet("每组配一张大桌或拼桌，便于讨论和书写");
AddBullet("组与组之间有足够通道空间");
AddBullet("讲师/助教能在组间自由走动");

AddHeading2("电源与网络");
AddBullet("每组附近有电源插座（笔记本充电用）");
AddBullet("场地有稳定WiFi覆盖");
AddBullet("备用移动热点（以防万一）");

AddHeading2("投影位置");
AddBullet("讲师能用投影展示PPT和屏幕");
AddBullet("所有学员都能看清屏幕内容");
AddBullet("有足够书写白板或墙面用于板书");

AddPageBreak();

// ======================= PART 5: 评估量规 =======================
AddSectionDivider("第五部分：评估量规与评分标准");

AddHeading1("1. 手册质量评估量规（四级评分）");

AddRubricTable5Col("手册质量综合评估", new (string, string, string, string, string)[]
{
    ("结构完整性 (25%)", "4分：完全符合四原则（场景/动作/案例/工具），逻辑清晰", "3分：基本符合四原则，有轻微遗漏", "2分：部分章节结构混乱或缺失重要内容", "1分：大量内容缺失或结构完全混乱"),
    ("内容准确性 (25%)", "4分：完全准确，三类人群校验通过", "3分：基本准确，少量细节待核实", "2分：存在明显错误或偏差", "1分：内容存在重大错误"),
    ("实用可用性 (25%)", "4分：读者100%能照着手册执行", "3分：大部分内容可执行，少量步骤需补充", "2分：存在读者无法执行的步骤", "1分：读者基本无法照着做"),
    ("语言表达 (15%)", "4分：语言流畅，通俗易懂，无歧义", "3分：基本流畅，偶有表述不清", "2分：存在较多晦涩表述", "1分：大量内容难以理解"),
    ("格式规范性 (10%)", "4分：完全符合格式规范，整洁美观", "3分：基本规范，有轻微不一致", "2分：格式混乱，部分内容难辨认", "1分：格式完全不规范")
});

AddHeading1("2. 讲师授课评估量规");

AddRubricTable5Col("讲师授课质量评估", new (string, string, string, string, string)[]
{
    ("时间把控 (20%)", "精准控时，各环节节奏恰当", "基本按时完成，有轻微偏差", "明显超时或拖延", "严重超时或时间混乱"),
    ("学员参与度 (25%)", "全员积极参与，互动热烈", "大部分人参与，氛围良好", "少数人参与，整体较沉闷", "几乎无人参与"),
    ("产出质量 (25%)", "所有学员完成高质量产出", "大部分学员完成可接受产出", "部分学员完成基础产出", "大量学员未完成基本产出"),
    ("问题应对 (15%)", "灵活应对各种突发情况", "能处理常规问题", "遇到问题略显被动", "问题处理不当导致课堂受影响"),
    ("专业性 (15%)", "展示高度专业性和控场能力", "专业性良好", "基本专业但偶有失误", "专业性不足或出现明显错误")
});

AddHeading1("3. 学员表现评估（个人评分参考）");

AddRubricTable5Col("学员个人表现评估", new (string, string, string, string, string)[]
{
    ("参与贡献", "积极分享，提供高质量素材和观点", "参与讨论，贡献基本价值", "偶尔发言，需被点名", "几乎不参与"),
    ("学习态度", "认真投入，主动学习和提问", "态度端正，能完成基本任务", "偶尔走神，需提醒", "态度消极，影响他人"),
    ("协作精神", "主动帮助他人，促进团队合作", "能与他人配合完成任务", "需要协调才能合作", "协作困难，影响团队"),
    ("进步幅度", "从零基础到能独立完成手册开发", "有显著进步，基本掌握方法", "进步有限，仍需指导", "无明显进步")
});

AddHeading1("4. 工作坊整体效果评估");

AddRubricTable5Col("两天工作坊整体效果评估", new (string, string, string, string, string)[]
{
    ("产出数量 (30%)", "40-50本手册初稿全部完成", "85%以上完成", "70%以上完成", "低于70%完成"),
    ("产出质量 (30%)", "大部分手册可直接进入审核流程", "一半以上手册质量达标", "少量手册质量达标", "几乎没有达标的产出"),
    ("学员满意度 (20%)", "满意度调查90%以上满意", "80%以上满意", "70%以上满意", "低于70%满意"),
    ("后续应用价值 (20%)", "手册已纳入实际工作流程", "手册计划在未来3个月应用", "手册有待进一步修改后应用", "手册难以实际应用")
});

AddHeading1("5. 各产出物评分权重");

AddBody("两天工作坊的核心产出物及评分权重：");
AddBullet("课题定位表（定稿）：20% — 定位表是后续所有工作的基础");
AddBullet("手册初稿（含交叉标记）：25% — 检验定位和素材准备的质量");
AddBullet("手册校验版：20% — 检验人工校验环节的深度");
AddBullet("工具包（至少2个）：15% — 检验工具开发和嵌入能力");
AddBullet("典型案例（1-2个）：10% — 检验案例开发能力");
AddBullet("五步优化版+简版使用说明：10% — 检验整体优化能力");

AddInstructorNote("评分目的不是排名，而是帮助讲师了解整体产出质量，识别改进方向。建议在课后进行匿名满意度调研，收集改进建议。");

AddPageBreak();

// ======================= APPENDIX: 时间分配总表 =======================
AddSectionDivider("附录：两天工作坊时间分配总表");

AddHeading1("第一天时间安排");

var day1Schedule = new (string time, string module, string content, string output)[]
{
    ("08:30-09:00", "签到准备", "场地布置确认、设备调试、资料分装", "就绪状态"),
    ("09:00-09:30", "开场导入", "课程背景、目标说明、三类人群角色介绍", "整体认知框架"),
    ("09:30-10:30", "模块一（前半）", "手册设计逻辑、四原则讲解、伪手册识别", "掌握设计原则"),
    ("10:30-10:45", "茶歇", "", ""),
    ("10:45-11:45", "模块一（后半）", "三类手册选择判断、四原则评分练习", "确认手册类型"),
    ("11:45-12:00", "阶段总结", "回顾上午产出、预告下午内容", ""),
    ("12:00-13:30", "午餐休息", "", ""),
    ("13:30-14:30", "模块二（前半）", "课题定位表讲解、三类人群交叉确认", "定位表初稿"),
    ("14:30-15:30", "模块二（后半）", "素材准备讲解、三轮结构化访谈", "访谈录音+素材"),
    ("15:30-15:45", "茶歇", "", ""),
    ("15:45-17:00", "模块二（续）", "素材整理练习、Skill输入格式整理", "素材整理表"),
    ("17:00-17:15", "第一天总结", "回顾产出、确认第二天准备", "")
};

foreach (var item in day1Schedule)
{
    AddBody(item.time + " " + item.module);
    AddBullet(item.content);
    if (!string.IsNullOrEmpty(item.output))
        AddInstructorNote("产出：" + item.output);
}

AddHeading1("第二天时间安排");

var day2Schedule = new (string time, string module, string content, string output)[]
{
    ("08:30-09:00", "第二天开场", "回顾第一天内容、明确第二天目标", ""),
    ("09:00-10:00", "模块三+四（前半）", "Skill生成初稿、三类人群交叉标记", "手册初稿（含标记）"),
    ("10:00-10:15", "茶歇", "", ""),
    ("10:15-11:30", "模块四（续）", "人工深度校验（准确性/完整性/可用性）", "手册校验版"),
    ("11:30-12:00", "模块四（续）", "工具包开发、典型案例撰写", "工具包+案例"),
    ("12:00-13:30", "午餐休息", "", ""),
    ("13:30-14:30", "模块五（前半）", "五步优化法（痛点共鸣、场景描述）", "优化进行中"),
    ("14:30-15:30", "模块五（续）", "五步优化法（价值植入、行动促进、价值升华）", "五步优化完成"),
    ("15:30-15:45", "茶歇", "", ""),
    ("15:45-16:30", "模块五（续）", "简版使用说明、交叉评审", "手册整合编排"),
    ("16:30-17:30", "收尾环节", "成果展示、点评、答疑、后续规划", "完整手册开发包")
};

foreach (var item in day2Schedule)
{
    AddBody(item.time + " " + item.module);
    AddBullet(item.content);
    if (!string.IsNullOrEmpty(item.output))
        AddInstructorNote("产出：" + item.output);
}

AddHeading1("两天版成果标准");

AddRedCallout("现场完成：");
AddBullet("课题定位表：定稿，经讲师确认");
AddBullet("手册初稿：Skill生成，经三类人群交叉标记验证");
AddBullet("手册校验版：核心内容完成人工深度校验");
AddBullet("工具包：完成至少2个关键工具的人工验证，嵌入手册");
AddBullet("典型案例：每人完成1-2个核心案例，嵌入手册");
AddBullet("五步优化：完整讲解，手册从开篇到结尾完成结构性优化");
AddBullet("简版使用说明：完整定稿");
AddBullet("整合编排：经交叉评审修改定稿");

AddRedCallout("全班批量产出：40-50人×1本手册 = 组织同步收获40-50本岗位手册初稿");

// Final section properties
mainPart.Document.Body!.Append(sectPr);

// Save
mainPart.Document.Save();

Console.WriteLine("Instructor Handbook created successfully!");
Console.WriteLine("Output: " + OUTPUT_PATH);
Console.WriteLine("Pages: ~120+");
Console.WriteLine("Color scheme: Red/Gray professional");
