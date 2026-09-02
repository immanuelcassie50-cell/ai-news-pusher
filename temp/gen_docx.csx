#r "nuget: DocumentFormat.OpenXml, 3.2.0"

using DocumentFormat.OpenXml;
using DocumentFormat.OpenXml.Packaging;
using DocumentFormat.OpenXml.Wordprocessing;
using System;
using System.IO;

string outputPath = @"D:\2026年课程\竞越\创新领导力：打造创新型团队\完整课程表\00-课程总览\课程大纲_对外.docx";

// 确保目录存在
Directory.CreateDirectory(Path.GetDirectoryName(outputPath));

using (var doc = WordprocessingDocument.Create(outputPath, WordprocessingDocumentType.Document))
{
    var mainPart = doc.AddMainDocumentPart();
    mainPart.Document = new Document();
    var body = new Body();

    // 页面设置：A4，标准边距
    var sectPr = new SectionProperties();
    sectPr.Append(new PageSize { Width = 11906, Height = 16838, Orient = PageOrientationValues.Portrait });
    sectPr.Append(new PageMargin { Top = 1440, Right = 1440, Bottom = 1440, Left = 1440, Header = 720, Footer = 720, Gutter = 0 });
    sectPr.Append(new Columns { Space = "720" });
    sectPr.Append(new DocGrid { LinePitch = 312 });

    // 设置 Normal 样式（中文字体）
    var stylesPart = mainPart.AddNewPart<StyleDefinitionsPart>();
    var styles = new Styles();

    var docDefaults = new DocDefaults();
    var rPrDefault = new RunPropertiesDefault();
    var rPrDef = new RunPropertiesBaseStyle();
    rPrDef.Append(new RunFonts { Ascii = "Microsoft YaHei", EastAsia = "Microsoft YaHei", HighAnsi = "Microsoft YaHei", ComplexScript = "Microsoft YaHei" });
    rPrDef.Append(new FontSize { Val = "21" });
    rPrDef.Append(new FontSizeComplexScript { Val = "21" });
    rPrDefault.Append(rPrDef);
    docDefaults.Append(rPrDefault);

    var pPrDefault = new ParagraphPropertiesDefault();
    pPrDefault.Append(new SpacingBetweenLines { After = "120", Line = "360", LineRule = LineSpacingRuleValues.Auto });
    docDefaults.Append(pPrDefault);

    styles.Append(docDefaults);

    // Normal 样式
    var normalStyle = new Style { Type = StyleValues.Paragraph, StyleId = "Normal", Default = true };
    normalStyle.Append(new StyleName { Val = "Normal" });
    var normalRPr = new StyleRunProperties();
    normalRPr.Append(new RunFonts { Ascii = "Microsoft YaHei", EastAsia = "Microsoft YaHei", HighAnsi = "Microsoft YaHei" });
    normalRPr.Append(new FontSize { Val = "21" });
    normalStyle.Append(normalRPr);
    styles.Append(normalStyle);

    // Heading 1
    var h1 = new Style { Type = StyleValues.Paragraph, StyleId = "Heading1" };
    h1.Append(new StyleName { Val = "heading 1" });
    h1.Append(new BasedOn { Val = "Normal" });
    var h1PPr = new StyleParagraphProperties();
    h1PPr.Append(new SpacingBetweenLines { Before = "360", After = "180", Line = "360", LineRule = LineSpacingRuleValues.Auto });
    h1PPr.Append(new OutlineLevel { Val = 0 });
    h1.Append(h1PPr);
    var h1RPr = new StyleRunProperties();
    h1RPr.Append(new Bold());
    h1RPr.Append(new FontSize { Val = "36" });
    h1RPr.Append(new Color { Val = "1A4D8C" });
    h1RPr.Append(new RunFonts { Ascii = "Microsoft YaHei", EastAsia = "Microsoft YaHei", HighAnsi = "Microsoft YaHei" });
    h1.Append(h1RPr);
    styles.Append(h1);

    // Heading 2
    var h2 = new Style { Type = StyleValues.Paragraph, StyleId = "Heading2" };
    h2.Append(new StyleName { Val = "heading 2" });
    h2.Append(new BasedOn { Val = "Normal" });
    var h2PPr = new StyleParagraphProperties();
    h2PPr.Append(new SpacingBetweenLines { Before = "240", After = "120", Line = "360", LineRule = LineSpacingRuleValues.Auto });
    h2PPr.Append(new OutlineLevel { Val = 1 });
    h2.Append(h2PPr);
    var h2RPr = new StyleRunProperties();
    h2RPr.Append(new Bold());
    h2RPr.Append(new FontSize { Val = "28" });
    h2RPr.Append(new Color { Val = "1A4D8C" });
    h2RPr.Append(new RunFonts { Ascii = "Microsoft YaHei", EastAsia = "Microsoft YaHei", HighAnsi = "Microsoft YaHei" });
    h2.Append(h2RPr);
    styles.Append(h2);

    // Heading 3
    var h3 = new Style { Type = StyleValues.Paragraph, StyleId = "Heading3" };
    h3.Append(new StyleName { Val = "heading 3" });
    h3.Append(new BasedOn { Val = "Normal" });
    var h3PPr = new StyleParagraphProperties();
    h3PPr.Append(new SpacingBetweenLines { Before = "180", After = "100", Line = "360", LineRule = LineSpacingRuleValues.Auto });
    h3PPr.Append(new OutlineLevel { Val = 2 });
    h3.Append(h3PPr);
    var h3RPr = new StyleRunProperties();
    h3RPr.Append(new Bold());
    h3RPr.Append(new FontSize { Val = "24" });
    h3RPr.Append(new Color { Val = "2A5D9C" });
    h3RPr.Append(new RunFonts { Ascii = "Microsoft YaHei", EastAsia = "Microsoft YaHei", HighAnsi = "Microsoft YaHei" });
    h3.Append(h3RPr);
    styles.Append(h3);

    stylesPart.Styles = styles;

    // 辅助方法
    void AddPara(string text, string styleId = null, bool bold = false, int fontSize = 21, string color = null, JustificationValues? align = null)
    {
        var p = new Paragraph();
        var pPr = new ParagraphProperties();
        if (styleId != null) pPr.Append(new ParagraphStyleId { Val = styleId });
        if (align.HasValue) pPr.Append(new Justification { Val = align.Value });
        p.Append(pPr);
        var r = new Run();
        var rPr = new RunProperties();
        if (bold) rPr.Append(new Bold());
        rPr.Append(new FontSize { Val = fontSize.ToString() });
        rPr.Append(new RunFonts { Ascii = "Microsoft YaHei", EastAsia = "Microsoft YaHei", HighAnsi = "Microsoft YaHei" });
        if (color != null) rPr.Append(new Color { Val = color });
        r.Append(rPr);
        r.Append(new Text { Text = text, Space = SpaceProcessingModeValues.Preserve });
        p.Append(r);
        body.Append(p);
    }

    void AddHeading(string text, int level) => AddPara(text, "Heading" + level, true, level == 1 ? 36 : (level == 2 ? 28 : 24), level == 1 ? "1A4D8C" : (level == 2 ? "1A4D8C" : "2A5D9C"));

    void AddQuote(string text)
    {
        var p = new Paragraph();
        var pPr = new ParagraphProperties();
        pPr.Append(new Indentation { Left = "480", Right = "480" });
        pPr.Append(new SpacingBetweenLines { Before = "120", After = "120" });
        pPr.Append(new ParagraphBorders(new LeftBorder { Val = BorderValues.Single, Color = "B81025", Size = 18, Space = 8 }));
        p.Append(pPr);
        var r = new Run();
        var rPr = new RunProperties();
        rPr.Append(new Italic());
        rPr.Append(new FontSize { Val = "22" });
        rPr.Append(new Color { Val = "4A4748" });
        rPr.Append(new RunFonts { Ascii = "Microsoft YaHei", EastAsia = "Microsoft YaHei", HighAnsi = "Microsoft YaHei" });
        r.Append(rPr);
        r.Append(new Text { Text = text, Space = SpaceProcessingModeValues.Preserve });
        p.Append(r);
        body.Append(p);
    }

    // ========== 文档内容 ==========

    // 封面信息
    AddPara("创新领导力：打造创新型团队", "Heading1", true, 48, "1A4D8C", JustificationValues.Center);
    AddPara("对外课程大纲（销售版）", null, false, 28, "4A4748", JustificationValues.Center);
    body.Append(new Paragraph(new Run(new Break())));

    AddPara("目标受众：中高层管理者（团队负责人、总监、VP 及以上）", null, false, 22, null, JustificationValues.Center);
    AddPara("课程时长：两天工作坊（约 14 小时）", null, false, 22, null, JustificationValues.Center);
    AddPara("班级规模：24-36 人", null, false, 22, null, JustificationValues.Center);
    AddPara("版本：v1.0（2026 年 6 月）", null, false, 22, null, JustificationValues.Center);
    body.Append(new Paragraph(new Run(new Break())));

    // 分割线
    var hr = new Paragraph();
    var hrPPr = new ParagraphProperties();
    hrPPr.Append(new ParagraphBorders(new BottomBorder { Val = BorderValues.Single, Color = "B81025", Size = 12, Space = 1 }));
    hrPPr.Append(new SpacingBetweenLines { Before = "0", After = "240" });
    hr.Append(hrPPr);
    body.Append(hr);

    // 一、为什么这门课是现在管理者最该上的一门课
    AddHeading("一、为什么这门课是现在管理者最该上的一门课", 1);

    AddHeading("1.1 一个让所有管理者都该停下来想一想的场景", 2);
    AddPara("有一家公司，产品总监赵建设做了所有\"对\"的事——申请创新预算，搭建创意平台，组建创新小组，送骨干参加创新思维工作坊。");
    AddPara("半年后，平台上有 51 条提案。成功落地的：0 条。");
    AddPara("最后一次季度复盘会上，他问大家\"我们哪里出了问题\"。会议室里，沉默了十几秒。");
    AddPara("然后有人说\"时机不对\"。有人说\"行业太卷\"。");
    AddPara("没有人说出真实的想法——包括那个三个月前曾经私下告诉赵建设\"我们的提案平台没有人真的在认真看\"的骨干员工。这一次，他也没有说。");
    AddQuote("这不是个别公司的故事。这是我们接触过的大量中高层管理者共同面对的真实困境。");

    AddHeading("1.2 你可能也遇到过的现象", 2);
    AddPara("仔细回想一下你自己的团队——");
    AddPara("• 你是不是真心想推动团队创新，已经投入了不少资源？");
    AddPara("• 团队是不是不缺创意，不缺工具，也不缺培训，但就是出不了真正有突破的成果？");
    AddPara("• 在会议上，是不是大家越来越默契地\"先听老板怎么说\"，然后围绕你的判断展开讨论？");
    AddPara("• 团队成员是不是越来越倾向于做\"有把握成功\"的事，而不愿意冒险尝试\"不确定能不能成\"的方向？");
    AddPara("• 当一个项目遇到挫折时，团队是不是倾向于\"先低调处理\"，而不是第一时间摆到台面上讨论？");
    AddPara("如果你对其中任何一项的回答是\"是的\"，那么问题可能不是你想象的\"团队还不够努力\"或\"市场变化太快\"。");
    AddQuote("问题很可能出在你身上——出在你无意识中使用的管理方式上。");

    AddHeading("1.3 一个被严重低估的真相", 2);
    AddPara("在创新这件事上，有一件事被绝大多数管理者严重低估了：");
    AddQuote("管理者的日常行为，本身就是塑造团队创新能力的最强单一变量。");
    AddPara("哈佛商学院 Amy Edmondson 历时十余年的研究发现，影响团队创新产出最大的单一因素，不是预算，不是工具，不是团队成员的聪明程度，而是心理安全感——成员是否敢于表达不成熟的想法。");
    AddPara("Google 内部的 Project Aristotle 项目分析了 180 多个团队，得出一个出乎所有人意料的结论：成员的个人素质，对团队表现的影响远远小于团队成员的互动方式。");
    AddPara("这两项研究的共同指向是同一个结论：团队的天花板不是成员的智商，而是管理者给团队创造了多少\"敢说、能碰、快学\"的空间。");
    AddPara("这个空间，不是花钱能买来的，不是培训能替代的。它是被管理者每一次的回应方式、每一个会议的发言方式、每一次对失败的反应方式，一点一点塑造出来的。");
    AddQuote("你今天的管理方式，正在决定你团队明天的创新能力。");

    AddHeading("1.4 这门课和其他创新课的本质区别", 2);
    AddPara("市场上关于\"创新\"的培训和书籍汗牛充栋。本课程的差异化定位在于：");
    AddPara("第一，从\"管理者本人\"切入，而非\"团队方法论\"。");
    AddPara("大量创新课程把焦点放在流程、工具、文化建设上，但忽略了最关键的一环——管理者的日常行为本身就是塑造团队创新能力的最大单一变量。本课程全程围绕\"管理者的行为\"展开。");
    AddPara("第二，把\"认知\"和\"行为\"分开设计。");
    AddPara("第一天上午主要做认知重构（让管理者意识到自己有多少关于创新的认知盲区），第一天下午主要做行动方案（让管理者把认知转化为可操作的工作系统），第二天上午做能力建构，第二天全部做实战模拟。");
    AddPara("第三，所有产出都是\"回到团队就能用\"的。");
    AddPara("课程结束时，每位学员会带走：一份自己团队的创新健康度诊断、一份挑战卡的完整分析、一份三件事的行动承诺清单。这些不是作业，而是回到岗位第一周就能开始做的事。");

    // 二、学员将带走什么
    AddHeading("二、学员将带走什么", 1);
    AddPara("完成两天课程后，每位学员将能够：");
    AddPara("1. 用\"五个关键因素\"框架系统诊断自己团队的创新健康状态——找到团队创新不出成果的真正原因");
    AddPara("2. 识别自己日常管理中至少 3 种\"无意识的创新抑制行为\"，并制定调整方案");
    AddPara("3. 用\"四层洞察框架\"做一次客户洞察穿透练习");
    AddPara("4. 用\"假设-最小验证-预定义改变条件-显性学习\"四步循环，把一个真实项目改写为迭代方案");
    AddPara("5. 在面对真实组织问题时，能用\"行为链分析\"找出系统性原因，而非简单归因于个人");
    AddPara("6. 形成一份在 30 天内可执行的领导行为改变行动承诺");

    // 三、课程内容全景
    AddHeading("三、课程内容全景", 1);

    AddHeading("3.1 两天课程地图", 2);
    AddPara("第一天：看见真相，从运营管理者到创新型领导者");
    AddPara("• 上午（开场 + 第一至三部分）：开场案例 + 八个真相测试 + 五个关键影响因素 + 创新型领导者 vs 运营管理者");
    AddPara("• 下午（第四至五部分）：客户洞察 + 交互涌现 + 创新挑战卡作业");
    AddPara("第二天：从认知到行动，从案例到承诺");
    AddPara("• 上午（第六至八部分）：敏捷迭代 + 管理者角色 + 三大要素对挑战卡的完整分析");
    AddPara("• 下午（第九至十二部分）：情景模拟诊断亮界科技 + 如果你是张力方案设计 + 连接自己的团队 + 行动承诺 + 课程收尾");

    AddHeading("3.2 五大核心模块详解", 2);

    AddHeading("模块一：八个真相测试（认知重构）", 3);
    AddPara("每个管理者都有关于\"创新\"的认知模型。其中不少是错的、或者被严重误导的。");
    AddPara("八大常见误解：");
    AddPara("• 创新能力主要取决于成员的聪明程度和创意天赋？");
    AddPara("• 鼓励员工犯错，是打造创新文化的有效方式？");
    AddPara("• 一个高绩效的执行型团队，通常也更容易在创新上有突破？");
    AddPara("• 管理者主动提出创意方向，有助于引导团队创新？");
    AddPara("• 团队对失败越宽容，创新产出的质量就越高？");
    AddPara("• 要提升团队创新力，首先要给大家更多\"自由时间\"？");
    AddPara("• 真正的客户需求，通过用户访谈就能有效识别？");
    AddPara("• 创新型领导者的核心任务，是筛选好想法并给予资源支持？");
    AddPara("这八个判断涵盖了管理者对创新最常见的误解。课程一开始，学员就要对每个判断做出选择，然后逐题对照答案，揭示这些\"想当然\"的认知背后有哪些被低估的研究、被忽视的真相。");

    AddHeading("模块二：五个关键影响因素（团队诊断）", 3);
    AddPara("哪五个因素决定了一个团队能否持续创新？");
    AddPara("• 心理安全感：团队成员敢不敢说出还不成熟的想法？");
    AddPara("• 认知多样性：团队里有没有不同思维方式的人，他们能不能被听到？");
    AddPara("• 探索空间：团队成员有没有时间做一些\"不确定有没有用\"的探索？");
    AddPara("• 学习速度：团队从失败中提取洞察的速度有多快？");
    AddPara("• 领导者信号：你的日常行为在向团队传递什么信号？");
    AddPara("每个因素都有对应的快速诊断题（1-5 分制），学员完成 5 个因素共 20 道诊断题后，会得到一份\"团队创新健康度快照\"（100 分制）。");

    AddHeading("模块三：创新型领导者 vs 运营管理者（行为自省）", 3);
    AddPara("同样面对一个团队成员提出的不成熟想法，运营管理者和创新型领导者的回应方式截然不同：");
    AddPara("• 有人提出不成熟的想法——\"想清楚了再来找我\" vs \"这个想法最有意思的地方是什么？说说\"");
    AddPara("• 实验失败了——\"为什么会失败？怎么避免下次再发生\" vs \"我们从这个失败里学到了什么新的东西\"");
    AddPara("• 团队方向出现分歧——\"我来拍板：方向是X\" vs \"我听到了两个不同方向，我们先把各自的假设摆出来\"");
    AddPara("• 招募团队成员——倾向于找\"能力强、方向匹配\"的人 vs 刻意寻找\"与团队现有思维方式不同\"的人");
    AddPara("更进一步，课程会揭示 5 种\"无意识的创新抑制行为\"——那些看起来是在做\"负责任的管理\"，实际上在无意中压制创新的行为。");

    AddHeading("模块四：三大要素（打造创新型团队的操作系统）", 3);
    AddPara("要素一：客户洞察");
    AddPara("理解客户真正的需求，需要穿越四个层次：任务层、阻力层、动力层、背景层。管理者在客户洞察中的真正角色，不是等报告，而是创造条件让团队持续做第一手接触。");
    AddPara("要素二：交互涌现");
    AddPara("创新往往不是从单一的聪明人脑子里冒出来的，而是从不同知识、不同经验、不同视角的碰撞中\"涌现\"出来的。管理者要做的，是成为\"碰撞条件的设计师\"。三种机制：定期的知识流通渠道、边界地带的共同项目、保护异质声音。");
    AddPara("要素三：敏捷迭代");
    AddPara("敏捷迭代的核心不是\"快速失败\"，而是用最小成本验证最大假设。四个关键动作：明确假设 → 最小验证 → 预定义改变条件 → 显性萃取学习。");

    AddHeading("模块五：综合实践·亮界科技案例分析", 3);
    AddPara("两天课程的最后大半天，学员将以\"组织创新诊断专家\"的身份，对一个真实组织（亮界科技）的完整失败案例进行系统性诊断。");
    AddPara("学员需要用两天学到的全部框架，对这个案例做：");
    AddPara("1. 五个关键因素的诊断");
    AddPara("2. 三大要素的失效分析");
    AddPara("3. 领导者行为链分析（具体行为 → 信号传递 → 团队行为改变 → 系统性后果）");
    AddPara("然后从诊断转向行动——\"如果你是张力，你会做哪三件不同的事\"？三件事要分别对应下周之内、30 天内、90 天内。");

    // 四、典型学员画像
    AddHeading("四、典型学员画像", 1);
    AddHeading("4.1 这门课最适合谁", 2);
    AddPara("画像 A：企业内\"想做事\"的中高层管理者");
    AddPara("30-45 岁，带 5-30 人团队，真心想推动团队创新，已经投入了预算、工具、培训，但团队的创新产出始终起不来。");
    AddPara("画像 B：企业内\"被逼上梁山\"的业务负责人");
    AddPara("35-50 岁，带 30-100 人团队，公司业绩压力巨大，需要团队有创新突破。");
    AddPara("画像 C：组织发展专家 / HR 业务伙伴");
    AddPara("30-45 岁，负责企业内的领导力发展项目，想给中高层管理者推荐一门\"治本\"的课程。");

    AddHeading("4.2 这门课不太适合谁", 2);
    AddPara("• 团队规模小于 5 人的基层管理者");
    AddPara("• 期待\"听完就有答案\"的学员");
    AddPara("• 只对\"工具和方法论\"感兴趣、不愿意照镜子的学员");
    AddPara("• 期望\"讲师给出所有答案\"的学员");

    // 五、课程对组织的价值
    AddHeading("五、课程对组织的价值", 1);
    AddHeading("5.1 个人层面", 2);
    AddPara("每位学员将带走 9 份核心工具产出：创新挑战卡、团队创新健康度诊断表、领导行为盘点表、四层洞察表、知识流通审计表、迭代方案表、个人诊断报告、亮界科技诊断报告、30 天行动承诺卡。");
    AddHeading("5.2 团队层面", 2);
    AddPara("每位学员回到团队后，预期会在 30 天内产生以下变化：更高的心理安全感、更多的异质声音、更快的学习速度、更扎实的客户洞察、更敏捷的迭代能力。");
    AddHeading("5.3 组织层面", 2);
    AddPara("当一批管理者同时完成本课程并执行 30 天行动承诺时，组织会在以下方面发生可观测的变化：创新提案数量显著上升、失败项目的复盘质量显著改善、跨部门合作频率提升、关键岗位人员流失率下降。");

    // 六、为什么值得
    AddHeading("六、为什么这门课值得这个投入", 1);
    AddHeading("6.1 创新失败的代价远比课程费用高昂", 2);
    AddPara("一个典型的中型企业，每年在\"创新\"上投入的资源通常在数百万到数千万元之间。如果本课程能让管理者识别并调整自己的\"无意识创新抑制行为\"，让创新项目的成功率提升 20%，节省的资源往往是课程费用的数十倍。");
    AddHeading("6.2 课程的可验证产出", 2);
    AddPara("本课程不是\"激发热情\"型的培训，而是有清晰可验证产出的课程：每位学员带回 9 份工具产出 + 1 份 30 天行动承诺；30 天后回看会；90 天后线上复盘。");
    AddHeading("6.3 课程的核心承诺", 2);
    AddQuote("学员在课程结束时，会带走一份具体的、可执行的、30 天内可以开始做的事清单。如果 30 天后学员告诉我们\"我没有做出任何改变\"，我们会免费提供一次线上辅导。");

    // 七、常见问题
    AddHeading("七、常见问题", 1);
    AddPara("Q1：两天课程能真正改变一个人的管理行为吗？");
    AddPara("A：两天课程不能\"改变\"行为，但能\"启动\"改变。本课程的全部设计都围绕一个核心问题：让管理者意识到自己的无意识抑制行为，并形成一份具体的行动承诺。");
    AddPara("Q2：课程内容是讲师讲得多，还是学员练得多？");
    AddPara("A：学员练的时间占比超过 50%。两天课程包含 5 个核心练习、1 个完整的情景模拟、9 份工具产出。");
    AddPara("Q3：学员需要提前准备什么？");
    AddPara("A：学员需要带一个\"自己团队的真实挑战\"来——一个你正在面对的创新相关的问题。");
    AddPara("Q4：课程是否提供后续支持？");
    AddPara("A：是的。三级后续支持：30 天回看会、90 天复盘会、永久学习群。");
    AddPara("Q5：企业内训和公开课的区别是什么？");
    AddPara("A：内容框架完全一致。企业内训可以在案例、诊断因素、行动承诺环节、后续支持四个方面定制。");

    // 八、两天详细日程
    AddHeading("八、两天详细日程", 1);
    AddHeading("第一天（Day 1）：看见真相", 2);
    AddPara("• 09:00-09:30 课程导入 + 赵建设案例");
    AddPara("• 09:30-10:00 第一部分：八个真相测试");
    AddPara("• 10:00-10:15 茶歇");
    AddPara("• 10:15-12:00 第二部分：五个关键影响因素（含诊断）");
    AddPara("• 12:00-13:30 午休");
    AddPara("• 13:30-14:30 第三部分：创新型领导者 vs 运营管理者（含行为盘点）");
    AddPara("• 14:30-16:30 第四部分：要素一·客户洞察（含四层洞察练习）");
    AddPara("• 16:30-16:45 茶歇");
    AddPara("• 16:45-17:30 第五部分：要素二·交互涌现（含知识流通审计）");
    AddPara("• 17:30-17:45 今日总结 + 创新挑战卡作业说明");

    AddHeading("第二天（Day 2）：从认知到行动", 2);
    AddPara("• 09:00-09:15 开场：两人快速对话");
    AddPara("• 09:15-11:00 第六部分：要素三·敏捷迭代（含最小可学习实验）");
    AddPara("• 11:00-11:15 茶歇");
    AddPara("• 11:15-12:00 第七部分：管理者在迭代中的角色");
    AddPara("• 12:00-13:30 午休");
    AddPara("• 13:30-14:30 第八部分：三大要素对挑战卡的完整分析");
    AddPara("• 14:30-15:00 亮界科技案例背景材料阅读");
    AddPara("• 15:00-16:30 第九部分：情景模拟·诊断亮界科技");
    AddPara("• 16:30-16:45 茶歇");
    AddPara("• 16:45-17:30 第十部分：如果你是张力");
    AddPara("• 17:30-17:45 第十一部分：连接自己的团队");
    AddPara("• 17:45-18:30 第十二部分：行动承诺 + 课程收尾");

    // 九、配套服务
    AddHeading("九、配套服务", 1);
    AddHeading("9.1 课前", 2);
    AddPara("课前 7 天发送预习材料；课前 1 天发送学员手册 + 工具模板；学员填写课前调研问卷。");
    AddHeading("9.2 课中", 2);
    AddPara("24-36 人小班教学，4-6 人小组，全程讲师 + 1 名助教，全部工具模板 + 案例材料 + 速查卡。");
    AddHeading("9.3 课后", 2);
    AddPara("24 小时内：核心金句 PDF；第 7 天：班级群\"一周回看\"问题；第 30 天：30 天回看会；第 90 天：90 天复盘会；永久学习群。");

    // 十、课程投资
    AddHeading("十、课程投资", 1);
    AddHeading("公开课", 2);
    AddPara("• 标准价：人民币 18,800 元 / 人（含学费、教材、午餐、茶歇、课后 90 天支持）");
    AddPara("• 早鸟价：人民币 15,800 元 / 人（开课前 30 天报名）");
    AddPara("• 三人以上团购：人民币 14,800 元 / 人");
    AddHeading("企业内训", 2);
    AddPara("• 标准价：人民币 380,000 元 / 场（限 36 人以内）");
    AddPara("• 定制服务：人民币 80,000 元 / 项");

    // 结尾
    body.Append(new Paragraph(new Run(new Break())));
    var hr2 = new Paragraph();
    var hr2PPr = new ParagraphProperties();
    hr2PPr.Append(new ParagraphBorders(new BottomBorder { Val = BorderValues.Single, Color = "B81025", Size = 12, Space = 1 }));
    hr2PPr.Append(new SpacingBetweenLines { Before = "0", After = "240" });
    hr2.Append(hr2PPr);
    body.Append(hr2);

    AddQuote("创新型领导者最核心的工作，不是永远做出正确的决策，而是创造一个让正确的信息能够被说出来、被听见、被认真对待的环境。当这个环境存在，正确的决策发生的概率，会自然地提高。");
    AddQuote("两天后，你的团队不会自动改变。但你会改变——这才是所有改变的起点。");

    body.Append(sectPr);
    mainPart.Document.Append(body);
    mainPart.Document.Save();
}

Console.WriteLine($"已生成: {outputPath}");
Console.WriteLine($"文件大小: {new FileInfo(outputPath).Length / 1024} KB");
