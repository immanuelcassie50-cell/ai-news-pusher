using DocumentFormat.OpenXml;
using DocumentFormat.OpenXml.Packaging;
using DocumentFormat.OpenXml.Wordprocessing;

// ============ 文档内容定义 ============

var courseInfo = new
{
    Name = "零售精英：培养关键技能，打造长效佳绩",
    Subtitle = "两天线上下课，产出一套完整客户应对方案",
    TargetAudience = new[] {
        "零售门店导购/销售",
        "终端销售管理人员",
        "需要提升客户应对能力的销售人员"
    },
    CoreModel = "五力模型：识人 → 链接 → 锚定 → 说服 → 促动",
    ColorRed = "C00000",  // 深红色
    ColorGray = "4A4A4A", // 深灰色
};

// ============ 文档创建 ============

string outputPath = @"D:/新课开发/销售/零售精英：培养关键技能，打造长效佳绩/完整课程包/11-对外宣传文案/零售精英课程对外宣传文案.docx";

using var doc = WordprocessingDocument.Create(outputPath, WordprocessingDocumentType.Document);
var mainPart = doc.AddMainDocumentPart();
mainPart.Document = new Document();
var body = new Body();
mainPart.Document.Append(body);

// 页面设置
var sectionProps = new SectionProperties(
    new PageSize() { Width = 11906, Height = 16838 }, // A4
    new PageMargin() { Top = 1440, Right = 1440, Bottom = 1440, Left = 1440 }
);

// ============ 样式定义 ============

// 创建标题样式
Style heading1Style = new Style()
{
    Type = StyleValues.Paragraph,
    StyleId = "Heading1",
    StyleName = new StyleName() { Val = "标题1" },
    BasedOn = new BasedOn() { Val = "Normal" },
    PrimaryStyle = new PrimaryStyle()
};
heading1Style.Append(new StyleParagraphProperties(
    new KeepNext(),
    new KeepLines(),
    new SpacingBetweenLines() { Before = 480, After = 240 },
    new OutlineLevel() { Val = 0 }
));
heading1Style.Append(new StyleRunProperties(
    new Bold(),
    new Color() { Val = courseInfo.ColorRed },
    new FontSize() { Val = "36" },
    new FontSizeComplexScript() { Val = "36" }
));

// 创建标题样式2
Style heading2Style = new Style()
{
    Type = StyleValues.Paragraph,
    StyleId = "Heading2",
    StyleName = new StyleName() { Val = "标题2" },
    BasedOn = new BasedOn() { Val = "Normal" },
    PrimaryStyle = new PrimaryStyle()
};
heading2Style.Append(new StyleParagraphProperties(
    new KeepNext(),
    new SpacingBetweenLines() { Before = 360, After = 120 },
    new OutlineLevel() { Val = 1 }
));
heading2Style.Append(new StyleRunProperties(
    new Bold(),
    new Color() { Val = courseInfo.ColorGray },
    new FontSize() { Val = "28" },
    new FontSizeComplexScript() { Val = "28" }
));

// 添加样式到文档
var stylesPart = mainPart.AddNewPart<StyleDefinitionsPart>();
var styles = new Styles();
styles.Append(heading1Style);
styles.Append(heading2Style);
stylesPart.Styles = styles;
stylesPart.Styles.Save();

// ============ 辅助方法 ============

Paragraph CreateHeading1(string text)
{
    return new Paragraph(
        new ParagraphProperties(new ParagraphStyleId() { Val = "Heading1" }),
        new Run(new Text(text))
    );
}

Paragraph CreateHeading2(string text)
{
    return new Paragraph(
        new ParagraphProperties(new ParagraphStyleId() { Val = "Heading2" }),
        new Run(new Text(text))
    );
}

Paragraph CreateBodyPara(string text, bool bold = false, string color = null)
{
    var rPr = new RunProperties();
    if (bold) rPr.Append(new Bold());
    if (color != null) rPr.Append(new Color() { Val = color });

    var run = new Run();
    if (rPr.HasChildren) run.PrependChild(rPr);
    run.Append(new Text(text) { Space = SpaceProcessingModeValues.Preserve });

    return new Paragraph(
        new ParagraphProperties(new SpacingBetweenLines() { After = "160", Line = "360", LineRule = LineSpacingRuleValues.Auto }),
        run
    );
}

Paragraph CreateBulletPoint(string text, bool isMain = true)
{
    var color = isMain ? courseInfo.ColorRed : courseInfo.ColorGray;
    return new Paragraph(
        new ParagraphProperties(
            new SpacingBetweenLines() { After = "120", Line = "360", LineRule = LineSpacingRuleValues.Auto },
            new Indentation() { Left = "480", Hanging = "240" }
        ),
        new Run(
            new RunProperties(new Color() { Val = color }),
            new Text("◆ ") { Space = SpaceProcessingModeValues.Preserve }
        ),
        new Run(
            new RunProperties(new Color() { Val = courseInfo.ColorGray }),
            new Text(text) { Space = SpaceProcessingModeValues.Preserve }
        )
    );
}

Paragraph CreateNumberedPoint(int num, string text)
{
    return new Paragraph(
        new ParagraphProperties(
            new SpacingBetweenLines() { After = "120", Line = "360", LineRule = LineSpacingRuleValues.Auto },
            new Indentation() { Left = "480", Hanging = "300" }
        ),
        new Run(
            new RunProperties(new Bold(), new Color() { Val = courseInfo.ColorRed }),
            new Text($"{num}. ") { Space = SpaceProcessingModeValues.Preserve }
        ),
        new Run(
            new RunProperties(new Color() { Val = courseInfo.ColorGray }),
            new Text(text) { Space = SpaceProcessingModeValues.Preserve }
        )
    );
}

void AddSeparator()
{
    body.Append(new Paragraph(
        new ParagraphProperties(
            new ParagraphBorders(
                new BottomBorder() { Val = BorderValues.Single, Color = "DDDDDD", Size = 6, Space = 1 }
            ),
            new SpacingBetweenLines() { After = "240" }
        )
    ));
}

Paragraph CreateShadedPara(string text, string fillColor)
{
    var para = new Paragraph();
    var pPr = new ParagraphProperties();
    pPr.Append(new Shading() { Val = ShadingPatternValues.Clear, Color = "auto", Fill = fillColor });
    pPr.Append(new SpacingBetweenLines() { After = "200", Line = "400", LineRule = LineSpacingRuleValues.Auto });
    pPr.Append(new Indentation() { Left = "360", Right = "360" });
    para.Append(pPr);

    var run = new Run();
    var rPr = new RunProperties();
    rPr.Append(new FontSize() { Val = "26" });
    rPr.Append(new Color() { Val = courseInfo.ColorGray });
    run.PrependChild(rPr);
    run.Append(new Text(text) { Space = SpaceProcessingModeValues.Preserve });
    para.Append(run);

    return para;
}

// ============ 第一部分：课程介绍（长版） ============

body.Append(new Paragraph(
    new ParagraphProperties(new Justification() { Val = JustificationValues.Center }),
    new Run(
        new RunProperties(new Bold(), new FontSize() { Val = "56" }, new Color() { Val = courseInfo.ColorRed }),
        new Text("零售精英：培养关键技能，打造长效佳绩")
    )
));

body.Append(new Paragraph(
    new ParagraphProperties(
        new Justification() { Val = JustificationValues.Center },
        new SpacingBetweenLines() { After = "480" }
    ),
    new Run(
        new RunProperties(new Color() { Val = courseInfo.ColorGray }, new FontSize() { Val = "24" }),
        new Text("两天线上下课，产出一套完整客户应对方案")
    )
));

AddSeparator();

// 痛点切入
body.Append(CreateHeading1("痛点切入：零售销售的常见困境"));

string[] painPoints = {
    "客户进门不知道说什么——沉默率高，成单率低",
    "客户类型多样，应对方式单一——用同一种方式对待所有客户",
    "产品知识倒背如流，客户却不买账——缺乏有效的说服方法",
    "忙了一天，业绩却不理想——缺乏系统化的销售思维",
    "客户走了就走了，没有留下任何联系方式——不懂如何建立连接"
};

foreach (var pain in painPoints)
{
    body.Append(CreateBulletPoint(pain, false));
}

body.Append(new Paragraph(new ParagraphProperties(new SpacingBetweenLines() { After = "240" })));

// 解决方案
body.Append(CreateHeading1("解决方案：五力模型"));

body.Append(CreateBodyPara("零售精英课程基于独创的「五力销售模型」，帮助销售人员从被动应对转向主动成交：", true));

string[] fivePowers = {
    "识人 → 快速判断客户类型",
    "链接 → 建立信任与情感连接",
    "锚定 → 挖掘需求，找到切入点",
    "说服 → 运用FABE模型，有效呈现价值",
    "促动 → 推动决策，达成成交"
};

foreach (var power in fivePowers)
{
    body.Append(new Paragraph(
        new ParagraphProperties(
            new SpacingBetweenLines() { After = "120" },
            new Indentation() { Left = "720" }
        ),
        new Run(
            new RunProperties(new Bold(), new Color() { Val = courseInfo.ColorRed }),
            new Text(power.Substring(0, 2) + " ") { Space = SpaceProcessingModeValues.Preserve }
        ),
        new Run(
            new RunProperties(new Color() { Val = courseInfo.ColorGray }),
            new Text(power.Substring(3)) { Space = SpaceProcessingModeValues.Preserve }
        )
    ));
}

body.Append(new Paragraph(new ParagraphProperties(new SpacingBetweenLines() { After = "240" })));

// 课程特色
body.Append(CreateHeading1("课程特色"));

string[] features = {
    "场景卡贯穿全程：真实销售场景还原，即学即用",
    "五力模型系统方法：从理论到实践，完整闭环",
    "两天产出一套完整客户应对方案：带着问题来，带着方案走"
};

for (int i = 0; i < features.Length; i++)
{
    body.Append(CreateNumberedPoint(i + 1, features[i]));
}

body.Append(new Paragraph(new ParagraphProperties(new SpacingBetweenLines() { After = "240" })));

// 学员收益
body.Append(CreateHeading1("学员收益"));

body.Append(CreateBodyPara("完成课程后，您将：", true));

string[] benefits = {
    "掌握五种客户类型判断方法，一眼看穿客户需求",
    "学会场景式提问技巧，挖掘客户真正痛点",
    "掌握FABE说服模型，让产品价值自己说话",
    "带走一套可直接使用的全案（课程专属工具包）"
};

foreach (var benefit in benefits)
{
    body.Append(CreateBulletPoint(benefit));
}

body.Append(new Paragraph(new ParagraphProperties(new SpacingBetweenLines() { After = "240" })));

// 适合人群
body.Append(CreateHeading1("适合人群"));

foreach (var audience in courseInfo.TargetAudience)
{
    body.Append(CreateBulletPoint(audience));
}

body.Append(new Paragraph(new ParagraphProperties(new SpacingBetweenLines() { After = "240" })));

// 课程安排
body.Append(CreateHeading1("课程安排"));

body.Append(CreateBodyPara("形式：线上下课（两天）", false, courseInfo.ColorGray));
body.Append(CreateBodyPara("产出：每位学员产出一套完整的客户应对方案", false, courseInfo.ColorGray));
body.Append(CreateBodyPara("工具：课程提供专属场景卡和FABE话术模板", false, courseInfo.ColorGray));

// 分页
body.Append(new Paragraph(
    new ParagraphProperties(
        new PageBreakBefore(),
        new SpacingBetweenLines() { After = "240" }
    )
));

// ============ 第二部分：朋友圈/短视频文案（短版） ============

body.Append(CreateHeading1("朋友圈/短视频文案（短版）"));

body.Append(CreateHeading2("版本一：引发共鸣型"));

body.Append(CreateShadedPara("客户进门不知道说什么？忙了一天，业绩却不理想？——那是因为你还在用'硬推销'的方式做销售。", "FFF5F5"));
body.Append(CreateShadedPara("《零售精英》课程，用五力模型教你从'卖产品'到'卖方案'。两天课程，带走一套可直接用的客户应对全案。", "FFF5F5"));
body.Append(CreateShadedPara("改变一句开场白，多开十单不是梦。", "FFF5F5"));

body.Append(CreateHeading2("版本二：成果导向型"));

body.Append(CreateShadedPara("两天时间，换一套完整销售方法论。", "F5F5F5"));
body.Append(CreateShadedPara("识人·链接·锚定·说服·促动——五力模型，把你从'卖产品的'变成'解决需求的'。", "F5F5F5"));
body.Append(CreateShadedPara("早学早受益，现在报名，送场景卡工具包。", "F5F5F5"));

body.Append(CreateHeading2("版本三：行动号召型"));

body.Append(CreateShadedPara("想做'零售精英'？来上课！", "FFF5F5"));
body.Append(CreateShadedPara("五力模型 + 场景卡 + 全案输出——两天线上下课，学会一套可复制的销售方法。", "FFF5F5"));
body.Append(CreateShadedPara("名额有限，扫码咨询！", "FFF5F5"));

// 分页
body.Append(new Paragraph(
    new ParagraphProperties(
        new PageBreakBefore(),
        new SpacingBetweenLines() { After = "240" }
    )
));

// ============ 第三部分：课程海报文案 ============

body.Append(CreateHeading1("课程海报文案"));

body.Append(CreateHeading2("主标题"));

body.Append(new Paragraph(
    new ParagraphProperties(
        new Justification() { Val = JustificationValues.Center },
        new SpacingBetweenLines() { After = "240" }
    ),
    new Run(
        new RunProperties(new Bold(), new FontSize() { Val = "48" }, new Color() { Val = courseInfo.ColorRed }),
        new Text("零售精英")
    )
));

body.Append(CreateHeading2("副标题"));

body.Append(new Paragraph(
    new ParagraphProperties(
        new Justification() { Val = JustificationValues.Center },
        new SpacingBetweenLines() { After = "360" }
    ),
    new Run(
        new RunProperties(new FontSize() { Val = "32" }, new Color() { Val = courseInfo.ColorGray }),
        new Text("培养关键技能，打造长效佳绩")
    )
));

body.Append(CreateHeading2("核心卖点（3-5个）"));

string[] highlights = {
    "五力模型：识人→链接→锚定→说服→促动",
    "场景卡贯穿全程，真实场景即学即用",
    "两天产出一套完整客户应对方案",
    "带走可复制的销售方法论"
};

foreach (var highlight in highlights)
{
    body.Append(new Paragraph(
        new ParagraphProperties(
            new Justification() { Val = JustificationValues.Center },
            new SpacingBetweenLines() { After = "160" }
        ),
        new Run(
            new RunProperties(new Bold(), new FontSize() { Val = "24" }, new Color() { Val = courseInfo.ColorGray }),
            new Text("★ " + highlight)
        )
    ));
}

body.Append(new Paragraph(new ParagraphProperties(new SpacingBetweenLines() { After = "360" })));

body.Append(CreateHeading2("行动号召"));

body.Append(new Paragraph(
    new ParagraphProperties(
        new Justification() { Val = JustificationValues.Center },
        new SpacingBetweenLines() { After = "240" }
    ),
    new Run(
        new RunProperties(new Bold(), new FontSize() { Val = "28" }, new Color() { Val = courseInfo.ColorRed }),
        new Text("扫码咨询，领取课程大纲")
    )
));

// 分页
body.Append(new Paragraph(
    new ParagraphProperties(
        new PageBreakBefore(),
        new SpacingBetweenLines() { After = "240" }
    )
));

// ============ 第四部分：咨询话术/常见问题应对 ============

body.Append(CreateHeading1("咨询话术/常见问题应对"));

body.Append(CreateHeading2("一、课程介绍话术"));

body.Append(new Paragraph(
    new ParagraphProperties(
        new Shading() { Val = ShadingPatternValues.Clear, Color = "auto", Fill = "F5F5F5" },
        new SpacingBetweenLines() { After = "120", Line = "400", LineRule = LineSpacingRuleValues.Auto },
        new Indentation() { Left = "360", Right = "360" }
    ),
    new Run(new RunProperties(new Bold(), new Color() { Val = courseInfo.ColorRed }), new Text("（开场）"))
));
body.Append(CreateShadedPara("您好，欢迎咨询《零售精英》课程。这是一门专门针对零售门店导购、销售人员以及终端销售管理人员的实战课程。", "F5F5F5"));

body.Append(new Paragraph(
    new ParagraphProperties(
        new Shading() { Val = ShadingPatternValues.Clear, Color = "auto", Fill = "F5F5F5" },
        new SpacingBetweenLines() { After = "120", Line = "400", LineRule = LineSpacingRuleValues.Auto },
        new Indentation() { Left = "360", Right = "360" }
    ),
    new Run(new RunProperties(new Bold(), new Color() { Val = courseInfo.ColorRed }), new Text("（课程核心）"))
));
body.Append(CreateShadedPara("课程核心是'五力模型'——识人、链接、锚定、说服、促动，帮助销售人员从被动应对转向主动成交。课程采用场景卡教学，两天时间，您可以带走一套完整的客户应对方案。", "F5F5F5"));

body.Append(new Paragraph(
    new ParagraphProperties(
        new Shading() { Val = ShadingPatternValues.Clear, Color = "auto", Fill = "F5F5F5" },
        new SpacingBetweenLines() { After = "240", Line = "400", LineRule = LineSpacingRuleValues.Auto },
        new Indentation() { Left = "360", Right = "360" }
    ),
    new Run(new RunProperties(new Bold(), new Color() { Val = courseInfo.ColorRed }), new Text("（学员收益）"))
));
body.Append(CreateShadedPara("学完这门课，您会掌握五种客户类型判断、场景式提问技巧、FABE说服模型，还能获得课程专属的工具包。", "F5F5F5"));

body.Append(CreateHeading2("二、常见问题Q&A"));

// Q1
body.Append(new Paragraph(
    new ParagraphProperties(new SpacingBetweenLines() { After = "120" }),
    new Run(new RunProperties(new Bold(), new Color() { Val = courseInfo.ColorRed }), new Text("Q1：这个课程适合我这样的新手销售吗？"))
));
body.Append(new Paragraph(
    new ParagraphProperties(new SpacingBetweenLines() { After = "240" }),
    new Run(new RunProperties(new Color() { Val = courseInfo.ColorGray }), new Text("A：非常适合。课程从基础的销售思维开始，帮助您建立系统化的销售框架。五力模型简单易上手，场景卡教学让您直接在'真实场景'中练习，特别适合希望快速提升的新人。"))
));

// Q2
body.Append(new Paragraph(
    new ParagraphProperties(new SpacingBetweenLines() { After = "120" }),
    new Run(new RunProperties(new Bold(), new Color() { Val = courseInfo.ColorRed }), new Text("Q2：我已经做了几年销售，还需要学这个吗？"))
));
body.Append(new Paragraph(
    new ParagraphProperties(new SpacingBetweenLines() { After = "240" }),
    new Run(new RunProperties(new Color() { Val = courseInfo.ColorGray }), new Text("A：如果您感觉自己遇到了业绩瓶颈，'老方法不管用，新方法不会用'，这门课正是为您设计的。五力模型帮您把经验系统化，场景卡帮您应对不同类型的客户。很多老销售学完都说'终于把以前的碎片化经验串起来了'。"))
));

// Q3
body.Append(new Paragraph(
    new ParagraphProperties(new SpacingBetweenLines() { After = "120" }),
    new Run(new RunProperties(new Bold(), new Color() { Val = courseInfo.ColorRed }), new Text("Q3：两天课程能学到什么？能落地吗？"))
));
body.Append(new Paragraph(
    new ParagraphProperties(new SpacingBetweenLines() { After = "240" }),
    new Run(new RunProperties(new Color() { Val = courseInfo.ColorGray }), new Text("A：课程采用'半天学习+半天实践'的模式，每个知识点都有对应的场景卡练习。课程结束时，每位学员都会产出一套自己的客户应对方案，这是可以直接带回去用的。而且课程提供工具包，里面有场景卡模板和FABE话术模板。"))
));

// Q4
body.Append(new Paragraph(
    new ParagraphProperties(new SpacingBetweenLines() { After = "120" }),
    new Run(new RunProperties(new Bold(), new Color() { Val = courseInfo.ColorRed }), new Text("Q4：课程是线上还是线下？听不懂怎么办？"))
));
body.Append(new Paragraph(
    new ParagraphProperties(new SpacingBetweenLines() { After = "240" }),
    new Run(new RunProperties(new Color() { Val = courseInfo.ColorGray }), new Text("A：课程采用线上直播形式，学员可以实时参与互动。课后还有录播回放，有效期一个月，方便复习。如果学习中有任何问题，可以在学员群里随时提问，老师会答疑。"))
));

// Q5
body.Append(new Paragraph(
    new ParagraphProperties(new SpacingBetweenLines() { After = "120" }),
    new Run(new RunProperties(new Bold(), new Color() { Val = courseInfo.ColorRed }), new Text("Q5：学完课程有什么后续服务吗？"))
));
body.Append(new Paragraph(
    new ParagraphProperties(new SpacingBetweenLines() { After = "240" }),
    new Run(new RunProperties(new Color() { Val = courseInfo.ColorGray }), new Text("A：学员加入专属学习群，持续交流。课程工具包长期可用，后续如有更新可以免费获取。我们也会不定期在群里分享销售技巧和案例。"))
));

body.Append(CreateHeading2("三、价格异议应对"));

body.Append(new Paragraph(
    new ParagraphProperties(new SpacingBetweenLines() { After = "120" }),
    new Run(new RunProperties(new Bold(), new Color() { Val = courseInfo.ColorRed }), new Text("客户："这个价格有点贵，能不能便宜点？""))
));
body.Append(new Paragraph(
    new ParagraphProperties(new SpacingBetweenLines() { After = "120" }),
    new Run(new RunProperties(new Bold(), new Color() { Val = courseInfo.ColorGray }), new Text("应对思路：")),
    new Run(new RunProperties(new Color() { Val = courseInfo.ColorGray }), new Text(""我理解您的考虑。让我帮您算一笔账：如果学完这门课，您一个月多开2-3单，每单按1000元利润算，那就是2000-3000元的额外收益。课程投入不到一个月多赚的钱，但学到的方法是长期可用的。而且课程提供工具包，您回去就能用，不用再额外花钱买资料了。""))
));
body.Append(new Paragraph(
    new ParagraphProperties(new SpacingBetweenLines() { After = "240" }),
    new Run(new RunProperties(new Color() { Val = courseInfo.ColorGray }), new Text("（如果客户还要优惠）"如果今天报名，我们可以赠送一套场景卡工具包（电子版），这是我们的学员专享福利。""))
));

body.Append(new Paragraph(
    new ParagraphProperties(new SpacingBetweenLines() { After = "120" }),
    new Run(new RunProperties(new Bold(), new Color() { Val = courseInfo.ColorRed }), new Text("客户："网上有很多销售课程，为什么要选这个？""))
));
body.Append(new Paragraph(
    new ParagraphProperties(new SpacingBetweenLines() { After = "240" }),
    new Run(new RunProperties(new Bold(), new Color() { Val = courseInfo.ColorGray }), new Text("应对思路：")),
    new Run(new RunProperties(new Color() { Val = courseInfo.ColorGray }), new Text(""您说得对，网上确实有很多课程。但这门课有几个不同：第一，这是专门针对零售场景的，不是泛泛的销售理论；第二，我们有配套的场景卡，您可以直接在工作中对照使用；第三，课程结束后您不是学完就结束了，有学员群持续支持，有问题可以随时问。这是一套完整的学习+实践+复盘的服务。""))
));

// ============ 保存文档 ============

body.Append(sectionProps);
mainPart.Document.Save();

Console.WriteLine($"文档已生成: {outputPath}");
Console.WriteLine("包含以下内容：");
Console.WriteLine("1. 课程介绍（长版）");
Console.WriteLine("2. 朋友圈/短视频文案（短版）");
Console.WriteLine("3. 课程海报文案");
Console.WriteLine("4. 咨询话术/常见问题应对");