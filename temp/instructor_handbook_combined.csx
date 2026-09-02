#r "nuget: DocumentFormat.OpenXml, 3.2.0"

using DocumentFormat.OpenXml;
using DocumentFormat.OpenXml.Packaging;
using DocumentFormat.OpenXml.Wordprocessing;
using System.Text;

string outputPath = @"D:\新课开发\新员工\职场弯道超车-新员工AI\完整课程包\讲师手册\讲师手册_新员工AI职场赋能工作坊_v1.0.docx";
var dir = System.IO.Path.GetDirectoryName(outputPath);
if (!System.IO.Directory.Exists(dir)) System.IO.Directory.CreateDirectory(dir);

var doc = WordprocessingDocument.Create(outputPath, WordprocessingDocumentType.Document);
using (doc)
{
var mainPart = doc.AddMainDocumentPart();
mainPart.Document = new Document(new Body());
var body = mainPart.Document.Body;

string PRIMARY_BLUE = "1F4E79", SECONDARY_BLUE = "2E75B6", DARK_GRAY = "404040", MEDIUM_GRAY = "595959", LIGHT_GRAY = "F2F2F2", ACCENT_GRAY = "7F7F7F", TABLE_HEADER_BG = "1F4E79", TABLE_ALT_BG = "D9E2F3", ORANGE = "E36C09";

var stylesPart = mainPart.AddNewPart<StyleDefinitionsPart>();
stylesPart.Styles = new Styles();
var docDefaults = new DocDefaults();
docDefaults.Append(new RunPropertiesDefault(new RunPropertiesBaseStyle(new RunFonts { Ascii = "SimSun", EastAsia = "SimSun", HighAnsi = "SimSun" }, new FontSize { Val = "24" }, new FontSizeComplexScript { Val = "24" }, new Color { Val = DARK_GRAY })));
docDefaults.Append(new ParagraphPropertiesDefault(new ParagraphPropertiesBaseStyle(new SpacingBetweenLines { After = "160", Line = "276", LineRule = LineSpacingRuleValues.Auto })));
stylesPart.Styles.Append(docDefaults);
stylesPart.Styles.Append(CreateTitleStyle());
stylesPart.Styles.Append(CreateHeading1Style(PRIMARY_BLUE));
stylesPart.Styles.Append(CreateHeading2Style(SECONDARY_BLUE));
stylesPart.Styles.Append(CreateHeading3Style(DARK_GRAY));
stylesPart.Styles.Append(CreateNormalStyle());
stylesPart.Styles.Append(CreateInstructorNoteStyle());
stylesPart.Styles.Append(CreateTipBoxStyle());
stylesPart.Styles.Append(CreateWarningBoxStyle());
stylesPart.Styles.Append(CreateCaseBoxStyle());

Style CreateTitleStyle() => new Style(new StyleName { Val = "Title" }, new BasedOn { Val = "Normal" }, new StyleParagraphProperties(new Justification { Val = JustificationValues.Center }, new SpacingBetweenLines { After = "0", Line = "240", LineRule = LineSpacingRuleValues.Auto }, new Shading { Val = ShadingPatternValues.Clear, Fill = PRIMARY_BLUE }), new StyleRunProperties(new RunFonts { Ascii = "Microsoft YaHei", EastAsia = "Microsoft YaHei", HighAnsi = "Microsoft YaHei" }, new Bold(), new FontSize { Val = "56" }, new FontSizeComplexScript { Val = "56" }, new Color { Val = "FFFFFF" })) { Type = StyleValues.Paragraph, StyleId = "Title" };

Style CreateHeading1Style(string color) => new Style(new StyleName { Val = "Heading 1" }, new BasedOn { Val = "Normal" }, new StyleParagraphProperties(new SpacingBetweenLines { Before = "480", After = "240" }, new KeepNext(), new KeepLines(), new OutlineLevel { Val = 0 }), new StyleRunProperties(new RunFonts { Ascii = "Microsoft YaHei", EastAsia = "Microsoft YaHei", HighAnsi = "Microsoft YaHei" }, new Bold(), new FontSize { Val = "36" }, new FontSizeComplexScript { Val = "36" }, new Color { Val = color })) { Type = StyleValues.Paragraph, StyleId = "Heading1" };

Style CreateHeading2Style(string color) => new Style(new StyleName { Val = "Heading 2" }, new BasedOn { Val = "Normal" }, new StyleParagraphProperties(new SpacingBetweenLines { Before = "360", After = "120" }, new KeepNext(), new OutlineLevel { Val = 1 }), new StyleRunProperties(new RunFonts { Ascii = "Microsoft YaHei", EastAsia = "Microsoft YaHei", HighAnsi = "Microsoft YaHei" }, new Bold(), new FontSize { Val = "28" }, new FontSizeComplexScript { Val = "28" }, new Color { Val = color })) { Type = StyleValues.Paragraph, StyleId = "Heading2" };

Style CreateHeading3Style(string color) => new Style(new StyleName { Val = "Heading 3" }, new BasedOn { Val = "Normal" }, new StyleParagraphProperties(new SpacingBetweenLines { Before = "240", After = "120" }, new KeepNext(), new OutlineLevel { Val = 2 }), new StyleRunProperties(new RunFonts { Ascii = "Microsoft YaHei", EastAsia = "Microsoft YaHei", HighAnsi = "Microsoft YaHei" }, new Bold(), new FontSize { Val = "24" }, new FontSizeComplexScript { Val = "24" }, new Color { Val = color })) { Type = StyleValues.Paragraph, StyleId = "Heading3" };

Style CreateNormalStyle() => new Style(new StyleName { Val = "Normal" }, new StyleParagraphProperties(new SpacingBetweenLines { After = "160", Line = "276", LineRule = LineSpacingRuleValues.Auto }), new StyleRunProperties(new RunFonts { Ascii = "SimSun", EastAsia = "SimSun", HighAnsi = "SimSun" }, new FontSize { Val = "24" }, new FontSizeComplexScript { Val = "24" }, new Color { Val = DARK_GRAY })) { Type = StyleValues.Paragraph, StyleId = "Normal" };

Style CreateInstructorNoteStyle() => new Style(new StyleName { Val = "InstructorNote" }, new BasedOn { Val = "Normal" }, new StyleParagraphProperties(new SpacingBetweenLines { Before = "120", After = "120" }, new Shading { Val = ShadingPatternValues.Clear, Fill = "FFF2CC" }, new ParagraphBorders(new LeftBorder { Val = BorderValues.Single, Size = 24, Color = "F4B942" })), new StyleRunProperties(new RunFonts { Ascii = "SimSun", EastAsia = "SimSun" }, new Italic(), new FontSize { Val = "21" }, new FontSizeComplexScript { Val = "21" }, new Color { Val = "7F6000" })) { Type = StyleValues.Paragraph, StyleId = "InstructorNote" };

Style CreateTipBoxStyle() => new Style(new StyleName { Val = "TipBox" }, new BasedOn { Val = "Normal" }, new StyleParagraphProperties(new SpacingBetweenLines { Before = "120", After = "120" }, new Shading { Val = ShadingPatternValues.Clear, Fill = "E2EFDA" }, new ParagraphBorders(new LeftBorder { Val = BorderValues.Single, Size = 24, Color = "548235" })), new StyleRunProperties(new RunFonts { Ascii = "SimSun", EastAsia = "SimSun" }, new FontSize { Val = "21" }, new FontSizeComplexScript { Val = "21" }, new Color { Val = "375623" })) { Type = StyleValues.Paragraph, StyleId = "TipBox" };

Style CreateWarningBoxStyle() => new Style(new StyleName { Val = "WarningBox" }, new BasedOn { Val = "Normal" }, new StyleParagraphProperties(new SpacingBetweenLines { Before = "120", After = "120" }, new Shading { Val = ShadingPatternValues.Clear, Fill = "FCE4D6" }, new ParagraphBorders(new LeftBorder { Val = BorderValues.Single, Size = 24, Color = "C00000" })), new StyleRunProperties(new RunFonts { Ascii = "SimSun", EastAsia = "SimSun" }, new FontSize { Val = "21" }, new FontSizeComplexScript { Val = "21" }, new Color { Val = "C00000" })) { Type = StyleValues.Paragraph, StyleId = "WarningBox" };

Style CreateCaseBoxStyle() => new Style(new StyleName { Val = "CaseBox" }, new BasedOn { Val = "Normal" }, new StyleParagraphProperties(new SpacingBetweenLines { Before = "120", After = "120" }, new Shading { Val = ShadingPatternValues.Clear, Fill = "D9E1F2" }, new ParagraphBorders(new LeftBorder { Val = BorderValues.Single, Size = 24, Color = "2E75B6" })), new StyleRunProperties(new RunFonts { Ascii = "SimSun", EastAsia = "SimSun" }, new FontSize { Val = "21" }, new FontSizeComplexScript { Val = "21" }, new Color { Val = "1F4E79" })) { Type = StyleValues.Paragraph, StyleId = "CaseBox" };

var footerPart = mainPart.AddNewPart<FooterPart>();
footerPart.Footer = new Footer(new Paragraph(new ParagraphProperties(new Justification { Val = JustificationValues.Center }, new ParagraphBorders(new TopBorder { Val = BorderValues.Single, Size = 4, Color = PRIMARY_BLUE })), new Run(new RunProperties(new RunFonts { Ascii = "SimSun", EastAsia = "SimSun" }, new FontSize { Val = "18" }, new Color { Val = MEDIUM_GRAY }), new Text("职场弯道超车：新员工AI原生工作方式加速训练营 | 讲师手册 | 第 ") { Space = SpaceProcessingModeValues.Preserve }), new Run(new RunProperties(new RunFonts { Ascii = "SimSun", EastAsia = "SimSun" }, new FontSize { Val = "18" }, new Color { Val = MEDIUM_GRAY }), new FieldChar { FieldCharType = FieldCharValues.Begin }), new Run(new RunProperties(new RunFonts { Ascii = "SimSun", EastAsia = "SimSun" }, new FontSize { Val = "18" }, new Color { Val = MEDIUM_GRAY }), new FieldCode(" PAGE ")), new Run(new RunProperties(new RunFonts { Ascii = "SimSun", EastAsia = "SimSun" }, new FontSize { Val = "18" }, new Color { Val = MEDIUM_GRAY }), new FieldChar { FieldCharType = FieldCharValues.Separate }), new Run(new RunProperties(new RunFonts { Ascii = "SimSun", EastAsia = "SimSun" }, new FontSize { Val = "18" }, new Color { Val = MEDIUM_GRAY }), new Text("1")), new Run(new RunProperties(new RunFonts { Ascii = "SimSun", EastAsia = "SimSun" }, new FontSize { Val = "18" }, new Color { Val = MEDIUM_GRAY }), new FieldChar { FieldCharType = FieldCharValues.End }), new Run(new RunProperties(new RunFonts { Ascii = "SimSun", EastAsia = "SimSun" }, new FontSize { Val = "18" }, new Color { Val = MEDIUM_GRAY }), new Text(" 页") { Space = SpaceProcessingModeValues.Preserve })));

var sectPr = new SectionProperties(new PageSize { Width = 11906, Height = 16838 }, new PageMargin { Top = 1440, Right = 1440, Bottom = 1440, Left = 1440, Header = 720, Footer = 720 }, new FooterReference { Type = HeaderFooterValues.Default, Id = mainPart.GetIdOfPart(footerPart) });

void AddStyledPara(string text, string styleId) { var p = new Paragraph(); p.Append(new ParagraphProperties(new StyleId { Val = styleId })); p.Append(new Run(new Text(text))); body.Append(p); }
void AddHeading1(string text) => AddStyledPara(text, "Heading1");
void AddHeading2(string text) => AddStyledPara(text, "Heading2");
void AddHeading3(string text) => AddStyledPara(text, "Heading3");

void AddPara(string text, string styleId = "Normal", bool bold = false, string color = null) {
    var p = new Paragraph(); p.Append(new ParagraphProperties(new StyleId { Val = styleId }));
    var r = new Run(); var rPr = new RunProperties();
    if (bold) rPr.Append(new Bold());
    if (color != null) rPr.Append(new Color { Val = color });
    r.Append(rPr); r.Append(new Text(text)); p.Append(r); body.Append(p);
}

void AddInstructorNote(string text) { var p = new Paragraph(); p.Append(new ParagraphProperties(new StyleId { Val = "InstructorNote" })); p.Append(new Run(new Text("【讲师备注】" + text))); body.Append(p); }
void AddTipBox(string text) { var p = new Paragraph(); p.Append(new ParagraphProperties(new StyleId { Val = "TipBox" })); p.Append(new Run(new Text("提示: " + text))); body.Append(p); }
void AddWarningBox(string text) { var p = new Paragraph(); p.Append(new ParagraphProperties(new StyleId { Val = "WarningBox" })); p.Append(new Run(new Text("注意: " + text))); body.Append(p); }
void AddCaseBox(string text) { var p = new Paragraph(); p.Append(new ParagraphProperties(new StyleId { Val = "CaseBox" })); p.Append(new Run(new Text("案例: " + text))); body.Append(p); }
void AddEmptyLine() => body.Append(new Paragraph());
void AddBulletPoint(string text, int indent = 0) { var p = new Paragraph(); var pPr = new ParagraphProperties(); pPr.Append(new SpacingBetweenLines { After = "80" }); pPr.Append(new Indentation { Left = (360 + indent * 360).ToString(), Hanging = "180" }); p.Append(pPr); p.Append(new Run(new RunProperties(new RunFonts { Ascii = "SimSun", EastAsia = "SimSun" }, new FontSize { Val = "21" }), new Text("• " + text))); body.Append(p); }
void AddNumberedPoint(string text, int num, int indent = 0) { var p = new Paragraph(); var pPr = new ParagraphProperties(); pPr.Append(new SpacingBetweenLines { After = "80" }); pPr.Append(new Indentation { Left = (360 + indent * 360).ToString(), Hanging = "360" }); p.Append(pPr); p.Append(new Run(new RunProperties(new RunFonts { Ascii = "SimSun", EastAsia = "SimSun" }, new FontSize { Val = "21" }), new Text(num.ToString() + ". " + text))); body.Append(p); }
void AddPageBreak() => body.Append(new Paragraph(new Run(new Break { Type = BreakValues.Page })));

Table CreateTable(string[] headers, string[][] rows) {
    var table = new Table();
    table.Append(new TableProperties(new TableWidth { Width = "5000", Type = TableWidthUnitValues.Pct }, new TableBorders(new TopBorder { Val = BorderValues.Single, Size = 4, Color = "BFBFBF" }, new BottomBorder { Val = BorderValues.Single, Size = 4, Color = "BFBFBF" }, new LeftBorder { Val = BorderValues.Single, Size = 4, Color = "BFBFBF" }, new RightBorder { Val = BorderValues.Single, Size = 4, Color = "BFBFBF" }, new InsideHorizontalBorder { Val = BorderValues.Single, Size = 4, Color = "BFBFBF" }, new InsideVerticalBorder { Val = BorderValues.Single, Size = 4, Color = "BFBFBF" }), new TableCellMarginDefault(new TopMargin { Width = "60", Type = TableWidthUnitValues.Dxa }, new BottomMargin { Width = "60", Type = TableWidthUnitValues.Dxa })));
    var tblGrid = new TableGrid(); foreach (var h in headers) tblGrid.Append(new GridColumn()); table.Append(tblGrid);
    var headerRow = new TableRow(); for (int i = 0; i < headers.Length; i++) { var tc = new TableCell(); tc.Append(new TableCellProperties(new Shading { Val = ShadingPatternValues.Clear, Fill = TABLE_HEADER_BG }, new TableCellVerticalAlignment { Val = TableVerticalAlignmentValues.Center })); tc.Append(new Paragraph(new ParagraphProperties(new Justification { Val = JustificationValues.Center }), new Run(new RunProperties(new RunFonts { Ascii = "Microsoft YaHei", EastAsia = "Microsoft YaHei" }, new Bold(), new Color { Val = "FFFFFF" }, new FontSize { Val = "22" }), new Text(headers[i])))); headerRow.Append(tc); } table.Append(headerRow);
    for (int r = 0; r < rows.Length; r++) { var row = new TableRow(); var fillColor = (r % 2 == 1) ? TABLE_ALT_BG : "FFFFFF"; foreach (var cell in rows[r]) { var tc = new TableCell(); tc.Append(new TableCellProperties(new Shading { Val = ShadingPatternValues.Clear, Fill = fillColor })); tc.Append(new Paragraph(new Run(new RunProperties(new RunFonts { Ascii = "SimSun", EastAsia = "SimSun" }, new FontSize { Val = "21" }), new Text(cell ?? "")))); row.Append(tc); } table.Append(row); }
    return table;
}

void AddTable(Table t) { body.Append(t); body.Append(new Paragraph()); }

// ========== 封面页 ==========
AddPageBreak();
AddPara("职场弯道超车", "Title");
AddPara("新员工AI原生工作方式加速训练营", "Title");
AddEmptyLine();
AddPara("讲师手册", "Title");
AddEmptyLine(); AddEmptyLine(); AddEmptyLine();

var coverInfo = new Paragraph(new ParagraphProperties(new Justification { Val = JustificationValues.Center }), new Run(new RunProperties(new RunFonts { Ascii = "Microsoft YaHei", EastAsia = "Microsoft YaHei" }, new FontSize { Val = "28" }, new Color { Val = DARK_GRAY }), new Text("INSTRUCTOR HANDBOOK")));
body.Append(coverInfo);
AddEmptyLine(); AddEmptyLine();

var versionPara = new Paragraph(new ParagraphProperties(new Justification { Val = JustificationValues.Center }), new Run(new RunProperties(new RunFonts { Ascii = "SimSun", EastAsia = "SimSun" }, new FontSize { Val = "24" }, new Color { Val = MEDIUM_GRAY }), new Text("版本号：V1.0  |  2026年6月")));
body.Append(versionPara);

var confPara = new Paragraph(new ParagraphProperties(new Justification { Val = JustificationValues.Center }), new Run(new RunProperties(new RunFonts { Ascii = "SimSun", EastAsia = "SimSun" }, new FontSize { Val = "20" }, new Color { Val = ACCENT_GRAY }), new Text("内部培训资料  |  仅供讲师使用")));
body.Append(confPara);

// ========== 目录页 ==========
AddPageBreak();
AddHeading1("目录");
AddEmptyLine();
AddPara("第一部分：讲师角色认知与工作坊概览", "Normal", false, PRIMARY_BLUE);
AddBulletPoint("讲师角色定位与核心能力");
AddBulletPoint("课程设计理念与学员画像");
AddBulletPoint("工作坊整体时间安排");
AddBulletPoint("讲师准备工作清单");
AddEmptyLine();
AddPara("第二部分：第一章教学指导（认知重建）", "Normal", false, PRIMARY_BLUE);
AddBulletPoint("章节目标与重难点分析");
AddBulletPoint("知识点1.1：经验差距与AI破局逻辑");
AddBulletPoint("知识点1.2：四类入职困境与AI解法边界");
AddBulletPoint("知识点1.3：AI原生工作方式");
AddBulletPoint("课堂练习指导与时间分配");
AddEmptyLine();
AddPara("第三部分：第二章教学指导（工具全景）", "Normal", false, PRIMARY_BLUE);
AddBulletPoint("章节目标与重难点分析");
AddBulletPoint("知识点2.1：信息流四阶段模型");
AddBulletPoint("知识点2.2：七类工具分工地图");
AddBulletPoint("知识点2.3：AI使用边界与合规意识");
AddBulletPoint("工具演示与学员实操指导");
AddEmptyLine();
AddPara("第四部分：第三章教学指导（提示词）", "Normal", false, PRIMARY_BLUE);
AddBulletPoint("章节目标与重难点分析");
AddBulletPoint("知识点3.1：公有信息与私有信息");
AddBulletPoint("知识点3.2：RCTOCR六步框架");
AddBulletPoint("知识点3.3：五套高频场景提示词模板");
AddBulletPoint("角色扮演与实战演练指导");
AddEmptyLine();
AddPara("第五部分：第四章教学指导（综合演练）", "Normal", false, PRIMARY_BLUE);
AddBulletPoint("章节目标与综合演练设计");
AddBulletPoint("演练场景一：会议纪要AI化");
AddBulletPoint("演练场景二：数据分析报告生成");
AddBulletPoint("演练场景三：跨部门沟通邮件撰写");
AddBulletPoint("个人AI工具包构建指导");
AddEmptyLine();
AddPara("附录：讲师工具箱", "Normal", false, PRIMARY_BLUE);
AddBulletPoint("评估标准与评分细则");
AddBulletPoint("行为观察量表（讲师版）");
AddBulletPoint("参考答案与评分细则");
AddBulletPoint("常见问题与疑难处理");
AddBulletPoint("课后跟进指导");

// ========== 第一部分 ==========
AddPageBreak();
AddHeading1("第一部分：讲师角色认知与工作坊概览");
AddEmptyLine();

AddHeading2("讲师角色定位");
AddPara("本工作坊不是传统意义上的'培训课程'，而是一场以练为主、以教为辅的工作坊。讲师的核心角色是：");
AddEmptyLine();
AddTable(CreateTable(new[] { "角色", "核心职责", "关键行为" }, new[] { new[] { "引导师", "推动进程", "确保每个环节按时完成，维持讨论聚焦" }, new[] { "专家", "内容把关", "确认方向正确，审核产出质量" }, new[] { "教练", "促进学习", "提问而非直接给答案，激发学员思考" }, new[] { "演示者", "技能展示", "熟练演示AI工具，让学员看到可能性" } }));
AddEmptyLine();

AddHeading2("讲师核心能力要求");
AddNumberedPoint("AI工具实操能力：能够熟练演示七类AI工具，并快速解决学员操作中的问题", 1);
AddNumberedPoint("提问引导技巧：能够提出开放性问题激发思考，而非直接告知答案", 2);
AddNumberedPoint("时间控制能力：严格控制各环节时间，确保6小时内完成全部内容", 3);
AddNumberedPoint("现场应变能力：灵活处理各类突发情况，保持课堂氛围积极正向", 4);
AddNumberedPoint("个性化辅导能力：根据学员水平和背景，提供差异化的练习指导", 5);
AddEmptyLine();
AddInstructorNote("讲师在开课前必须完成所有工具的亲自测试。建议开课前一周，在与正式环境相同的条件下完整跑一遍所有演示流程，确保知道每个工具的常见问题和解决方式。");
AddEmptyLine();

AddHeading2("课程设计理念");
AddPara("本课程采用'先听后练'的体验式学习设计，核心理念是：");
AddEmptyLine();
AddTable(CreateTable(new[] { "理念", "含义", "教学中的应用" }, new[] { new[] { "AI是放大器", "AI不能替代专业能力，但能让好能力发挥更大价值", "强调'先有专业判断，再有AI辅助'" }, new[] { "做中学", "通过真实任务练习建立AI使用能力", "每个知识点配套动手练习" }, new[] { "场景驱动", "围绕真实工作场景组织内容", "五套高频模板来自真实场景" }, new[] { "Scaffold", "提供足够支持，让学员在引导下完成挑战", "练习有提示词模板可参照" } }));
AddEmptyLine();

AddHeading2("学员画像分析");
AddPara("本课程面向应届毕业生和新入职员工（入职0-18个月），他们的特点是：");
AddEmptyLine();
AddTable(CreateTable(new[] { "特征", "表现", "教学启示" }, new[] { new[] { "AI认知两极化", "要么过度依赖AI，要么完全不用", "帮助建立对AI能力的准确认知" }, new[] { "缺乏工作经验", "不知道什么是'好的工作成果'", "用具体案例和标准建立参照" }, new[] { "信息框架缺失", "不知道该问AI什么问题", "通过RCTOCR框架建立提问能力" }, new[] { "学习意愿强", "希望快速证明自己的价值", "给予有挑战性的练习，激发成就感" } }));
AddEmptyLine();

AddHeading2("工作坊整体时间安排");
AddPara("课程总时长：6小时（1天）");
AddEmptyLine();
AddTable(CreateTable(new[] { "时间段", "模块", "核心内容", "产出目标" }, new[] { new[] { "09:00-09:30", "开场导入", "课程介绍、学习目标建立", "建立学习动机" }, new[] { "09:30-11:00", "第一章", "认知重建：经验差距与AI破局", "理解四类困境模型" }, new[] { "11:00-12:00", "第二章", "工具全景：七类工具协作体系", "掌握信息流四阶段" }, new[] { "12:00-13:30", "午餐", "", "" }, new[] { "13:30-15:30", "第三章", "提示词：RCTOCR六步框架", "掌握结构化提示词" }, new[] { "15:30-16:30", "第四章", "综合演练：三大场景实战", "产出个人AI工具包" }, new[] { "16:30-17:00", "复盘总结", "回顾与行动计划制定", "明确课后实践方向" }, new[] { "17:00-17:30", "补缺与答疑", "个性化辅导与问题处理", "解决遗留问题" } }));
AddEmptyLine();

AddHeading2("讲师准备工作清单");
AddHeading3("活动准备清单");
AddTable(CreateTable(new[] { "准备项", "负责人", "备注" }, new[] { new[] { "投影设备测试", "助教", "提前30分钟测试" }, new[] { "学员分组名单确认", "助教", "按学员背景均衡分组" }, new[] { "学员手册打印", "助教", "每人1份" }, new[] { "练习材料打印", "助教", "按学员数量准备" }, new[] { "AI工具账号确认", "讲师", "确认所有工具可正常使用" }, new[] { "演示电脑准备", "讲师", "提前测试演示流程" }, new[] { "计时器/时钟", "助教", "控制各环节时间" }, new[] { "白板/大白纸", "助教", "用于小组讨论记录" } }));
AddEmptyLine();
AddTipBox("准备清单说明：所有印刷材料请在开课前一天准备完毕。建议额外准备5份备用，以防现场学员增加或材料损坏。");

// ========== 第二部分 ==========
AddPageBreak();
AddHeading1("第二部分：第一章教学指导（认知重建）");
AddEmptyLine();

AddHeading2("章节目标与重难点");
AddPara("学习目标：");
AddNumberedPoint("理解经验差距的本质，掌握AI弥补信息框架缺失的核心逻辑", 1);
AddNumberedPoint("识别四类典型入职困境（4D模型），准确判断AI在每类困境中的作用边界", 2);
AddNumberedPoint("建立AI原生工作方式的基本思维框架", 3);
AddEmptyLine();
AddPara("教学重难点：");
AddBulletPoint("重点：4D困境模型的识别与应用");
AddBulletPoint("难点：判断经验vs信息框架的区分；AI作用边界的准确判断");
AddEmptyLine();

AddHeading2("知识点 1.1：经验差距的本质与AI的破局方式");
AddPara("核心概念：工作经验由两部分组成——信息框架和判断经验。新人的困境主要集中在信息框架的缺失。");
AddEmptyLine();
AddHeading3("讲解要点");
AddNumberedPoint("信息框架：通过阅读、观察、指导或实践获取的结构性认知，告诉人'该问哪些问题'", 1);
AddNumberedPoint("判断经验：必须通过真实成败经历沉淀的直觉性判断力，真正需要时间积累", 2);
AddNumberedPoint("AI的破局点：让'按需借用信息框架'第一次成为可能", 3);
AddEmptyLine();
AddHeading3("引导话术");
AddCaseBox("讲解开场：'大家想想，你入职后第一次独立做一个任务，最大的感受是什么？是不知道该怎么做，还是知道该做但不确定做得对不对？'");
AddCaseBox("引导讨论：'现在问一下，你遇到的是哪种情况？是不确定该问AI什么问题，还是问完AI之后不知道答案对不对？'");
AddEmptyLine();
AddInstructorNote("这里容易混淆的概念是'判断经验'和'信息框架'。如果学员说'AI给的答案总是不太对'，要区分是信息框架问题（问错了问题）还是判断经验问题（缺乏验证能力）。前者AI可以帮忙，后者需要时间积累。");
AddEmptyLine();

AddHeading2("知识点 1.2：四类入职困境与AI解法边界");
AddPara("4D困境模型：Decode（解码）、Deliver（交付）、Describe（描述）、Digest（消化）");
AddEmptyLine();
AddTable(CreateTable(new[] { "困境类型", "核心问题", "AI可以帮忙", "AI帮不了" }, new[] { new[] { "Decode解码", "不知道任务要求是什么意思", "解释概念、提供框架", "提供你还没有的判断力" }, new[] { "Deliver交付", "知道该做什么，但不知道怎么做", "给出步骤、示范", "替你积累判断经验" }, new[] { "Describe描述", "知道怎么做，但不知道怎么说", "提供表达模板、语言润色", "提供你没有的专业知识" }, new[] { "Digest消化", "获得信息后不知道怎么处理", "举例解释、类比说明", "替你思考和理解" } }));
AddEmptyLine();
AddHeading3("互动练习指导");
AddPara("练习：给学员3分钟思考自己在工作中遇到的困境，尝试用4D模型分类");
AddInstructorNote("如果学员难以分类，可以问'你卡在哪里了？是不知道问什么，还是知道但不会做，还是知道做什么但不知道怎么说？'来帮助定位。");
AddEmptyLine();

AddHeading2("知识点 1.3：AI原生工作方式");
AddPara("AI原生工作方式的核心转变：从'先想后做'到'边做边问'");
AddEmptyLine();
AddHeading3("讲解要点");
AddNumberedPoint("传统工作方式：思考 → 行动 → 验证（慢，反馈周期长）", 1);
AddNumberedPoint("AI原生工作方式：提问 → 验证 → 行动（快，迭代周期短）", 2);
AddNumberedPoint("关键能力：学会提问、学会验证、学会迭代", 3);
AddEmptyLine();
AddCaseBox("正面案例：'我以前写报告要花2小时先想框架，现在用AI 5分钟就能有个初稿，然后我在这个基础上改，30分钟就能完成，还更好。'");
AddCaseBox("反面案例：'我让AI帮我写报告，它写什么我就交什么，结果被领导批评说没有我的思考——AI只是放大器，用得好不好还是看人。'");
AddEmptyLine();

AddHeading2("第一章时间分配");
AddTable(CreateTable(new[] { "环节", "时长", "内容", "讲师注意事项" }, new[] { new[] { "开场引入", "10分钟", "课程介绍、学习目标建立", "重点：激发学员学习动机" }, new[] { "知识点讲解", "30分钟", "1.1+1.2核心概念", "重点：用学员自己的例子说明" }, new[] { "4D模型练习", "20分钟", "个人困境分类+小组分享", "关键：确保每个学员都能分类" }, new[] { "AI原生方式讲解", "15分钟", "1.3核心概念", "重点：正反案例对比" }, new[] { "个人反思", "15分钟", "思考自身工作场景", "关键：联系学员实际工作" } }));
AddEmptyLine();

// ========== 第三部分 ==========
AddPageBreak();
AddHeading1("第三部分：第二章教学指导（工具全景）");
AddEmptyLine();

AddHeading2("章节目标与重难点");
AddPara("学习目标：");
AddNumberedPoint("掌握信息流四阶段模型，理解AI在每个阶段的角色", 1);
AddNumberedPoint("了解七类AI工具的分工与协作方式", 2);
AddNumberedPoint("建立AI使用边界意识，知道什么场景适合用AI，什么场景不适合", 3);
AddEmptyLine();

AddHeading2("知识点 2.1：信息流四阶段模型");
AddPara("信息流四阶段：采集→整理→加工→输出");
AddEmptyLine();
AddTable(CreateTable(new[] { "阶段", "核心问题", "AI可以做什么", "人的角色" }, new[] { new[] { "采集", "需要什么信息？在哪里找？", "搜索、整理、摘要", "判断哪些信息相关" }, new[] { "整理", "信息太多太乱，怎么归类？", "分类、标签、去重", "确定分类逻辑" }, new[] { "加工", "这些信息说明什么？", "分析、推理、找规律", "做出判断和决策" }, new[] { "输出", "怎么呈现给受众？", "生成初稿、语言润色", "审核、修改、定稿" } }));
AddEmptyLine();

AddHeading2("知识点 2.2：七类工具分工地图");
AddTable(CreateTable(new[] { "工具类型", "核心能力", "适用场景", "使用边界" }, new[] { new[] { "聊天机器人", "问答、解释、讨论", "概念理解、思路梳理", "不能替代专业判断" }, new[] { "写作助手", "文章撰写、语言润色", "报告、邮件、方案", "需要人工审核内容" }, new[] { "信息检索", "搜索、摘要、翻译", "资料收集、快速了解", "不能替代深度研究" }, new[] { "数据分析", "数据处理、图表生成", "数据分析、可视化", "需要人定义分析维度" }, new[] { "代码辅助", "代码生成、debug", "编程辅助", "需要人确保逻辑正确" }, new[] { "文档处理", "格式调整、内容整理", "文档排版、格式转换", "不能替代内容创作" }, new[] { "多模态", "图像/音频/视频处理", "创意内容生成", "需要人把控质量标准" } }));
AddEmptyLine();
AddHeading3("工具演示指导");
AddPara("建议每个工具演示不超过3分钟，重点展示：");
AddNumberedPoint("这个工具能做什么（给一个简单例子）", 1);
AddNumberedPoint("怎么用效果最好（给出使用技巧）", 2);
AddNumberedPoint("常见错误和注意事项（提前告知坑）", 3);
AddEmptyLine();
AddInstructorNote("演示工具时，建议使用学员工作相关的场景。如果学员是职能部门，就用办公场景。不要为了展示而展示。");
AddEmptyLine();

AddHeading2("知识点 2.3：AI使用边界与合规意识");
AddPara("AI使用的基本原则：");
AddNumberedPoint("涉密信息不上网：不使用不安全的外部AI工具处理敏感信息", 1);
AddNumberedPoint("内容审核不可少：AI生成的内容必须经过人工审核", 2);
AddNumberedPoint("专业判断靠自己：涉及专业判断的内容，AI只能提供参考", 3);
AddNumberedPoint("工具选择要合理：根据任务性质选择合适的AI工具", 4);
AddEmptyLine();
AddWarningBox("合规提示：涉及公司机密、客户隐私、财务数据等内容，必须使用公司认可的内部AI工具或者完全不用AI。所有AI生成内容在对外发布前必须经过人工审核。");
AddEmptyLine();

// ========== 第四部分 ==========
AddPageBreak();
AddHeading1("第四部分：第三章教学指导（提示词）");
AddEmptyLine();

AddHeading2("章节目标与重难点");
AddPara("学习目标：");
AddNumberedPoint("理解公有信息和私有信息的区别，知道什么可以告诉AI，什么不能", 1);
AddNumberedPoint("掌握RCTOCR六步结构化框架，能够写出高质量提示词", 2);
AddNumberedPoint("熟练使用五套高频场景提示词模板", 3);
AddEmptyLine();

AddHeading2("知识点 3.1：公有信息与私有信息");
AddPara("公有信息：可以公开、不涉及隐私和机密的信息");
AddPara("私有信息：涉及个人隐私、商业机密、内部数据等信息");
AddHeading3("判断原则");
AddCaseBox("如果这个消息发到公司内网上会不会有问题？");
AddEmptyLine();
AddWarningBox("重要提醒：学员必须建立隐私保护意识。在使用外部AI工具时，绝对不能输入客户信息、财务数据、人事信息等敏感内容。如果不确定，先问主管。");
AddEmptyLine();

AddHeading2("知识点 3.2：RCTOCR六步结构化框架");
AddPara("RCTOCR：Role（角色）→ Context（背景）→ Task（任务）→ Output（输出）→ Constraints（约束）→ Refine（优化）");
AddEmptyLine();
AddTable(CreateTable(new[] { "步骤", "含义", "示例" }, new[] { new[] { "Role角色", "你希望AI扮演什么角色", "'你是一位资深市场分析师'" }, new[] { "Context背景", "任务的相关背景信息", "'我们的产品是面向年轻人的运动饮料'" }, new[] { "Task任务", "你希望AI完成什么任务", "'帮我分析竞品的市场定位'" }, new[] { "Output输出", "你希望以什么形式输出", "'用表格呈现，包含品牌、价格、目标人群、渠道策略'" }, new[] { "Constraints约束", "有什么特殊要求或限制", "'只分析国内品牌，数据来源要注明'" }, new[] { "Refine优化", "如何迭代优化结果", "'如果分析不够深入，请指出需要补充的信息'" } }));
AddEmptyLine();

AddHeading2("知识点 3.3：五套高频场景提示词模板");
AddTable(CreateTable(new[] { "场景", "适用时机", "核心价值" }, new[] { new[] { "会议纪要整理", "有录音或笔记，需要快速整理成纪要", "节省时间，结构清晰" }, new[] { "数据分析报告", "有数据，需要生成分析报告", "快速生成初稿，提高效率" }, new[] { "邮件撰写", "需要写正式邮件，特别是跨部门沟通", "语气恰当，结构规范" }, new[] { "方案框架搭建", "有任务，需要设计解决方案框架", "提供思路，拓展视角" }, new[] { "学习资料总结", "有学习材料，需要提炼关键信息", "快速抓重点，节省时间" } }));
AddEmptyLine();

// ========== 第五部分 ==========
AddPageBreak();
AddHeading1("第五部分：第四章教学指导（综合演练）");
AddEmptyLine();

AddHeading2("章节目标与综合演练设计");
AddPara("学习目标：");
AddNumberedPoint("在三个真实场景中应用所学AI工具和方法", 1);
AddNumberedPoint("能够识别自己工作中的AI应用机会", 2);
AddNumberedPoint("建立个人AI工具包，包含提示词库和工具速查表", 3);
AddEmptyLine();

AddHeading2("演练场景一：会议纪要AI化");
AddPara("场景描述：你参加了一个30分钟的头脑风暴会议，会后需要整理一份纪要发给没有参会的同事。");
AddEmptyLine();
AddHeading3("演练目标");
AddBulletPoint("练习信息整理能力：将零散的会议内容结构化");
AddBulletPoint("练习提示词应用：使用'会议纪要整理'模板");
AddBulletPoint("练习输出审核：确保AI生成的纪要准确、完整");
AddEmptyLine();

AddHeading2("演练场景二：数据分析报告生成");
AddPara("场景描述：你手头有一份销售数据（脱敏后的示例数据），需要生成一份简要分析报告。");
AddEmptyLine();
AddHeading3("演练目标");
AddBulletPoint("练习数据分析场景的AI应用");
AddBulletPoint("练习明确任务边界：知道该给AI什么信息、要什么输出");
AddBulletPoint("练习批判性思维：评估AI分析结果的质量");
AddEmptyLine();

AddHeading2("演练场景三：跨部门沟通邮件撰写");
AddPara("场景描述：你需要向IT部门申请一个系统权限，但不确定怎么写邮件能提高申请成功率。");
AddEmptyLine();
AddHeading3("演练目标");
AddBulletPoint("练习正式商务写作场景的AI应用");
AddBulletPoint("练习换位思考：理解受众需求，写出有效的沟通邮件");
AddBulletPoint("练习语言风格的把控");
AddEmptyLine();

AddHeading2("个人AI工具包构建指导");
AddPara("工具包包含三个部分：");
AddEmptyLine();
AddTable(CreateTable(new[] { "组成部分", "内容示例" }, new[] { new[] { "AI工具速查表", "记录常用的AI工具及其适用场景 | 例：写作用ChatGPT，数据分析用Claude" }, new[] { "个人提示词库", "保存效果好、有重复使用价值的提示词 | 例：会议纪要模板、周报生成模板" }, new[] { "使用心得与教训", "记录使用中的问题和解决方案 | 例：'问AI时要把背景说清楚，否则回答会很泛'" } }));
AddEmptyLine();

// ========== 附录 ==========
AddPageBreak();
AddHeading1("附录：讲师工具箱");
AddEmptyLine();

AddHeading2("评估标准与评分细则");
AddPara("学员评估采用A/B/C/D四级评分：");
AddEmptyLine();
AddTable(CreateTable(new[] { "等级", "标准描述" }, new[] { new[] { "A级（90-100分）", "完全达到要求，能独立、准确完成所有任务，表现超出预期" }, new[] { "B级（75-89分）", "达到要求，能在少量提示下完成所有任务，质量良好" }, new[] { "C级（60-74分）", "基本达到要求，需要较多提示才能完成，质量基本合格" }, new[] { "D级（60分以下）", "未达到要求，需要大幅改进或无法完成基本任务" } }));
AddEmptyLine();
AddHeading3("练习评估维度");
AddNumberedPoint("任务理解：是否准确理解任务要求？", 1);
AddNumberedPoint("工具使用：是否合理选择和使用AI工具？", 2);
AddNumberedPoint("提示词质量：RCTOCR框架是否应用得当？", 3);
AddNumberedPoint("输出质量：AI生成内容的准确性、完整性、实用性如何？", 4);
AddNumberedPoint("批判思维：是否能发现AI输出的问题并进行修正？", 5);
AddEmptyLine();

AddHeading2("常见问题与解答汇总");
AddHeading3("第一章相关问题");
AddPara("Q: AI会不会取代人的工作？");
AddPara("A: AI是放大器，能让好能力发挥更大价值，但无法替代人的判断力和专业经验。");
AddEmptyLine();
AddPara("Q: 什么时候不该用AI？");
AddPara("A: 当任务涉及高度机密信息、需要人的专业判断、或AI无法提供准确答案时，不应该依赖AI。");
AddEmptyLine();
AddHeading3("第二章相关问题");
AddPara("Q: 哪个AI工具最好？");
AddPara("A: 没有最好的工具，只有最适合的工具。选择工具要看任务性质、场景需求和个人习惯。");
AddEmptyLine();
AddHeading3("第三章相关问题");
AddPara("Q: 提示词是不是越长越好？");
AddPara("A: 不是。提示词的长度应该与任务的复杂程度匹配。关键是提供必要信息，而不是堆砌文字。");
AddEmptyLine();
AddPara("Q: 怎么判断AI的回答好不好？");
AddPara("A: 三个检验标准：1）内容是否准确；2）逻辑是否通顺；3）是否满足任务需求。");
AddEmptyLine();

AddHeading2("课后跟进指导");
AddTable(CreateTable(new[] { "时间节点", "动作", "目标" }, new[] { new[] { "课后1周内", "实践应用：选择一个真实工作任务使用AI辅助", "将学习转化为习惯" }, new[] { "课后2周内", "完善工具包：补充实践中验证有效的提示词", "建立个人工作流" }, new[] { "课后1个月", "回顾反思：评估AI使用效果，总结改进点", "持续优化使用方式" }, new[] { "课后3个月", "再次评估：检查AI工具包的使用频率和价值", "确认长期效果" } }));
AddEmptyLine();

AddHeading2("讲师自我反思问题");
AddNumberedPoint("本次工作坊中，学员在哪个环节遇到最大困难？原因是什么？", 1);
AddNumberedPoint("AI工具演示是否达到预期效果？有哪些改进空间？", 2);
AddNumberedPoint("时间分配是否合理？哪个环节需要调整？", 3);
AddNumberedPoint("学员反馈最好的环节是哪个？最需要改进的环节是哪个？", 4);
AddNumberedPoint("下次再开这个工作坊，你会在哪些地方做得不同？", 5);
AddEmptyLine();

// ========== 最终页 ==========
AddPageBreak();
AddPara(" ", "Normal");
AddEmptyLine(); AddEmptyLine();
AddPara("—— 讲师手册完 ——", "Normal", true, PRIMARY_BLUE);
AddEmptyLine();
AddPara(" ", "Normal");
AddEmptyLine();
AddPara("职场弯道超车：新员工AI原生工作方式加速训练营", "Normal", false, MEDIUM_GRAY);
AddPara("讲师手册 | 内部培训资料 | 仅供讲师使用", "Normal", false, ACCENT_GRAY);
AddEmptyLine(); AddEmptyLine();
body.Append(new Paragraph(new ParagraphProperties(new Justification { Val = JustificationValues.Center }), new Run(new RunProperties(new RunFonts { Ascii = "SimSun", EastAsia = "SimSun" }, new FontSize { Val = "21" }, new Color { Val = ACCENT_GRAY }), new Text("如有问题，请联系课程开发团队"))));

body.Append(sectPr);
mainPart.Document.Save();
} // end using doc

Console.WriteLine($"Document created: {outputPath}");
Console.WriteLine($"Size: {new System.IO.FileInfo(outputPath).Length / 1024.0 / 1024.0:F2} MB");
