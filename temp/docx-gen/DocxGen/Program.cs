using DocumentFormat.OpenXml;
using DocumentFormat.OpenXml.Packaging;
using DocumentFormat.OpenXml.Wordprocessing;

namespace DocxGen;

class Program
{
    const string CJK = "微软雅黑";
    const string ASCII_FONT = "Calibri";

    static void Main()
    {
        string outPath = @"C:\Users\Administrator\Desktop\复盘-顺造\《新机型量产爬坡》课题复盘（demo）.docx";
        using var doc = WordprocessingDocument.Create(outPath, WordprocessingDocumentType.Document);
        var mainPart = doc.AddMainDocumentPart();
        mainPart.Document = new Document();
        var body = new Body();
        mainPart.Document.AppendChild(body);
        AddStyles(mainPart);
        BuildContent(body);
        AddSectionProperties(body);
        Console.WriteLine($"OK: {outPath}");
    }

    // 接受 string[][] 的简洁 Table 构造
    static Table T(int[] widths, string[][] data)
    {
        var table = new Table();
        var tblPr = new TableProperties(
            new TableStyle { Val = "TableGrid" },
            new TableWidth { Width = $"{widths.Sum()}", Type = TableWidthUnitValues.Dxa },
            new TableBorders(
                new TopBorder { Val = BorderValues.Single, Size = 4, Color = "808080" },
                new BottomBorder { Val = BorderValues.Single, Size = 4, Color = "808080" },
                new LeftBorder { Val = BorderValues.Single, Size = 4, Color = "808080" },
                new RightBorder { Val = BorderValues.Single, Size = 4, Color = "808080" },
                new InsideHorizontalBorder { Val = BorderValues.Single, Size = 4, Color = "BFBFBF" },
                new InsideVerticalBorder { Val = BorderValues.Single, Size = 4, Color = "BFBFBF" }),
            new TableLayout { Type = TableLayoutValues.Fixed });
        table.Append(tblPr);
        var grid = new TableGrid();
        foreach (var w in widths) grid.Append(new GridColumn { Width = $"{w}" });
        table.Append(grid);
        for (int r = 0; r < data.Length; r++)
        {
            var tr = new TableRow();
            if (r == 0) tr.Append(new TableRowProperties(new TableHeader()));
            for (int c = 0; c < data[r].Length; c++)
            {
                var tc = new TableCell();
                var tcPr = new TableCellProperties(
                    new TableCellWidth { Width = $"{widths[c]}", Type = TableWidthUnitValues.Dxa });
                if (r == 0)
                    tcPr.Append(new Shading { Val = ShadingPatternValues.Clear, Color = "auto", Fill = "1F3864" });
                tc.Append(tcPr);
                var p = new Paragraph();
                var pPr = new ParagraphProperties();
                pPr.Append(new SpacingBetweenLines { After = "0", Line = "300", LineRule = LineSpacingRuleValues.Auto });
                p.Append(pPr);
                var run = new Run();
                var rPr = new RunProperties(
                    new RunFonts { Ascii = ASCII_FONT, HighAnsi = ASCII_FONT, EastAsia = CJK },
                    new FontSize { Val = "20" });
                if (r == 0)
                {
                    rPr.Append(new Bold());
                    rPr.Append(new BoldComplexScript());
                    rPr.Append(new Color { Val = "FFFFFF" });
                }
                run.Append(rPr);
                run.Append(new Text(data[r][c]) { Space = SpaceProcessingModeValues.Preserve });
                p.Append(run);
                tc.Append(p);
                tr.Append(tc);
            }
            table.Append(tr);
        }
        return table;
    }

    static Paragraph P(string text, string? styleId = null, JustificationValues? jc = null)
    {
        var p = new Paragraph();
        var pPr = new ParagraphProperties();
        if (styleId != null) pPr.Append(new ParagraphStyleId { Val = styleId });
        if (jc.HasValue) pPr.Append(new Justification { Val = jc.Value });
        p.Append(pPr);
        var r = new Run();
        r.Append(new RunProperties(
            new RunFonts { Ascii = ASCII_FONT, HighAnsi = ASCII_FONT, EastAsia = CJK },
            new FontSize { Val = "21" }));
        r.Append(new Text(text) { Space = SpaceProcessingModeValues.Preserve });
        p.Append(r);
        return p;
    }

    static Paragraph LP(string label, string content)
    {
        var p = new Paragraph();
        p.Append(new ParagraphProperties(new ParagraphStyleId { Val = "Normal" }));
        var r1 = new Run();
        r1.Append(new RunProperties(new RunFonts { Ascii = ASCII_FONT, HighAnsi = ASCII_FONT, EastAsia = CJK },
            new Bold(), new BoldComplexScript(), new FontSize { Val = "21" }));
        r1.Append(new Text(label) { Space = SpaceProcessingModeValues.Preserve });
        p.Append(r1);
        var r2 = new Run();
        r2.Append(new RunProperties(new RunFonts { Ascii = ASCII_FONT, HighAnsi = ASCII_FONT, EastAsia = CJK },
            new FontSize { Val = "21" }));
        r2.Append(new Text(content) { Space = SpaceProcessingModeValues.Preserve });
        p.Append(r2);
        return p;
    }

    static Paragraph Tip(string text) => P("💡 " + text, "Tip");

    static void AddStyles(MainDocumentPart mainPart)
    {
        var stylesPart = mainPart.AddNewPart<StyleDefinitionsPart>();
        var styles = new Styles();
        stylesPart.Styles = styles;
        styles.DocDefaults = new DocDefaults(
            new RunPropertiesDefault(new RunPropertiesBaseStyle(
                new RunFonts { Ascii = ASCII_FONT, HighAnsi = ASCII_FONT, EastAsia = CJK, ComplexScript = ASCII_FONT },
                new FontSize { Val = "21" },
                new FontSizeComplexScript { Val = "21" })),
            new ParagraphPropertiesDefault(new ParagraphPropertiesBaseStyle(
                new SpacingBetweenLines { After = "0", Line = "360", LineRule = LineSpacingRuleValues.Auto })));
        AddS(styles, "Normal", null, null);
        AddS(styles, "H1", () => new StyleParagraphProperties(
            new SpacingBetweenLines { Before = "360", After = "180", Line = "360", LineRule = LineSpacingRuleValues.Auto },
            new OutlineLevel { Val = 0 }, new KeepNext(), new KeepLines()),
            () => new StyleRunProperties(
                new RunFonts { Ascii = ASCII_FONT, HighAnsi = ASCII_FONT, EastAsia = CJK },
                new Bold(), new BoldComplexScript(),
                new FontSize { Val = "36" }, new FontSizeComplexScript { Val = "36" },
                new Color { Val = "1F3864" }));
        AddS(styles, "H2", () => new StyleParagraphProperties(
            new SpacingBetweenLines { Before = "240", After = "120", Line = "360", LineRule = LineSpacingRuleValues.Auto },
            new OutlineLevel { Val = 1 }, new KeepNext()),
            () => new StyleRunProperties(
                new RunFonts { Ascii = ASCII_FONT, HighAnsi = ASCII_FONT, EastAsia = CJK },
                new Bold(), new BoldComplexScript(),
                new FontSize { Val = "28" }, new FontSizeComplexScript { Val = "28" },
                new Color { Val = "2E74B5" }));
        AddS(styles, "H3", () => new StyleParagraphProperties(
            new SpacingBetweenLines { Before = "180", After = "80", Line = "360", LineRule = LineSpacingRuleValues.Auto },
            new OutlineLevel { Val = 2 }, new KeepNext()),
            () => new StyleRunProperties(
                new RunFonts { Ascii = ASCII_FONT, HighAnsi = ASCII_FONT, EastAsia = CJK },
                new Bold(), new BoldComplexScript(),
                new FontSize { Val = "24" }, new FontSizeComplexScript { Val = "24" },
                new Color { Val = "1F3864" }));
        AddS(styles, "CoverTitle", () => new StyleParagraphProperties(
            new SpacingBetweenLines { Before = "0", After = "240", Line = "420", LineRule = LineSpacingRuleValues.Auto },
            new Justification { Val = JustificationValues.Center }),
            () => new StyleRunProperties(
                new RunFonts { Ascii = ASCII_FONT, HighAnsi = ASCII_FONT, EastAsia = CJK },
                new Bold(), new BoldComplexScript(),
                new FontSize { Val = "52" }, new FontSizeComplexScript { Val = "52" },
                new Color { Val = "1F3864" }));
        AddS(styles, "Tip", () => new StyleParagraphProperties(
            new SpacingBetweenLines { Before = "60", After = "60", Line = "360", LineRule = LineSpacingRuleValues.Auto },
            new ParagraphBorders(
                new TopBorder { Val = BorderValues.Single, Size = 4, Color = "BFBFBF" },
                new BottomBorder { Val = BorderValues.Single, Size = 4, Color = "BFBFBF" },
                new LeftBorder { Val = BorderValues.Single, Size = 4, Color = "BFBFBF" },
                new RightBorder { Val = BorderValues.Single, Size = 4, Color = "BFBFBF" }),
            new Shading { Val = ShadingPatternValues.Clear, Color = "auto", Fill = "F2F7FC" },
            new Indentation { Left = "200", Right = "200" }),
            () => new StyleRunProperties(
                new RunFonts { Ascii = ASCII_FONT, HighAnsi = ASCII_FONT, EastAsia = CJK },
                new FontSize { Val = "20" }, new Color { Val = "404040" }));
    }

    static void AddS(Styles styles, string id, Func<StyleParagraphProperties>? pPr, Func<StyleRunProperties>? rPr)
    {
        var s = new Style { Type = StyleValues.Paragraph, StyleId = id };
        s.Append(new StyleName { Val = id });
        if (pPr != null) s.Append(pPr());
        if (rPr != null) s.Append(rPr());
        styles.Append(s);
    }

    static void BuildContent(Body body)
    {
        // 封面
        body.Append(P(""));
        body.Append(P(""));
        body.Append(P("课题复盘工作坊", "Normal", JustificationValues.Center));
        body.Append(P("（制造业 Demo 示例）", "Normal", JustificationValues.Center));
        body.Append(P(""));
        body.Append(P("《新机型量产爬坡》课题复盘", "CoverTitle"));
        body.Append(P("——首件良率从 85% 提升至 95%", "Normal", JustificationValues.Center));
        body.Append(P(""));
        body.Append(P(""));

        // 一、基本信息
        body.Append(P("一、基本信息", "H1"));
        body.Append(T(new[] { 2200, 6600 }, new string[][] {
            new[] { "项目", "内容" },
            new[] { "学员姓名", "李XX" },
            new[] { "所在公司/部门", "XX 智能科技股份有限公司·制造中心·NPI 项目组" },
            new[] { "课题名称", "如何在 2025 年 9 月底前将某新机型扫地机器人量产爬坡良率从 85% 提升至 95%" },
            new[] { "课题目标（含数字）", "首件良率 ≥ 95%，月度产能爬坡至 50K 台，整机月度售后率 < 2%，单台制造成本下降 8%" },
            new[] { "本次复盘周期", "2025 年 4 月 至 2025 年 6 月（NPI 阶段）" },
            new[] { "复盘日期", "2025 年 6 月（第二次集中研讨）" }
        }));
        body.Append(P(""));
        body.Append(Tip("本 Demo 用于演示复盘工作坊配套表单的填写逻辑。课题选自制造业最常见的\"新机型量产爬坡\"场景——每个制造负责人都会遇到，与顺造 6 个内部课题保持距离。"));
        body.Append(P(""));

        // 二、表单1
        body.Append(P("二、表单 1：个人行动情况盘点", "H1"));
        body.Append(P("（一）完成的工作任务", "H2"));
        body.Append(T(new[] { 600, 8200 }, new string[][] {
            new[] { "序号", "工作任务描述" },
            new[] { "1", "牵头完成新机型 X1 的模具 T0 试模，输出 18 项关键尺寸首件报告（Cpk ≥ 1.33 通过 14 项，不达标 4 项）" },
            new[] { "2", "组织工艺、品质、生产三方完成 4 个工段（总装 / 注塑 / SMT / 包装）的产线 Layout 与节拍测算，识别 3 个瓶颈工位" },
            new[] { "3", "完成整机 SOP v1 编写，覆盖 12 个工序、56 个工步，关键扭矩点全部标注" },
            new[] { "4", "协调供应链提前 2 周备齐 LDS 雷达 / 滚刷模组 / 电池组 / 主控板 4 类关键物料的安全库存" },
            new[] { "5", "在 5 月组织 3 轮小批量试产（500 台 / 1000 台 / 2000 台），跟踪问题清单闭环" },
            new[] { "6", "联合品质部建立量产阶段 FAI / OQC / 售后三道防线的返修数据日报机制" },
            new[] { "7", "推动结构组完成齿轮箱异响的工艺验证 v2（轴承预压量调整），验证通过后纳入 SOP" }
        }));
        body.Append(P(""));
        body.Append(P("（二）产生的工作结果", "H2"));
        body.Append(T(new[] { 600, 8200 }, new string[][] {
            new[] { "序号", "结果描述（数字/事实）" },
            new[] { "1", "本阶段累计试产 3,500 台，整机首件良率 85.2%，完成阶段目标的 89.6%（目标 95%）" },
            new[] { "2", "T0 试模关键尺寸 Cpk ≥ 1.33 通过率 77.8%（14/18 项），不达标项 4 项集中在注塑外壳" },
            new[] { "3", "月产能爬坡至 35K 台 / 月，达成 70% 阶段目标（目标 50K 台 / 月）" },
            new[] { "4", "售后率 2.8%，超过目标 2.0%，其中 65% 售后问题集中在滚刷缠绕与电池盖装配不到位两个点" },
            new[] { "5", "单台制造成本较试产前下降 5.3%（目标 8%），BOM 国产化贡献 2.1% / 工艺优化贡献 2.0% / 良率提升贡献 1.2%" },
            new[] { "6", "问题清单 87 项，闭环 71 项，剩余 16 项主要集中在总装段良率" }
        }));
        body.Append(P(""));
        body.Append(P("（三）目前存在的问题与不足", "H2"));
        body.Append(T(new[] { 600, 8200 }, new string[][] {
            new[] { "序号", "问题描述" },
            new[] { "1", "总装段良率卡 85%，连续 3 周无提升，每天 8% 的下线不良集中在滚刷装配卡扣断裂与电池盖缝隙超标两个工位" },
            new[] { "2", "LDS 雷达模组在量产前一周发现批次性信号偏移不良率 3.5%，临时切回备用供应商，量产节奏被打乱 5 天" },
            new[] { "3", "注塑外壳关键尺寸 Cpk 连续两批 < 1.33，模具厂家认为公差太严不愿意重新调模，研发坚持尺寸不能放宽" },
            new[] { "4", "售后端滚刷缠绕 10 年没彻底解决，研发认为是用户使用场景问题，工艺认为是滚刷材质问题，互相推诿" }
        }));
        body.Append(P(""));
        body.Append(LP("结果总体判断：", "☑ 低于预期"));
        body.Append(LP("一句话描述当前进展：", "整机良率 85.2% 较目标 95% 差 9.8 个百分点，月产能达成 70%，售后率 2.8% 超目标。核心卡点是总装段卡扣 / 缝隙两个工位的不良，注塑 Cpk 不达标，以及滚刷缠绕 10 年顽疾没人牵头。"));
        body.Append(P(""));

        // 三、表单2
        body.Append(P("三、表单 2：替代方案梳理", "H1"));
        body.Append(LP("本次聚焦的卡点：", "总装段良率卡 85%，连续 3 周无提升，每天 8% 的下线不良集中在滚刷装配卡扣断裂与电池盖缝隙超标两个工位"));
        body.Append(P(""));
        body.Append(P("第一步：关键结果", "H2"));
        body.Append(T(new[] { 2900, 2900, 2900 }, new string[][] {
            new[] { "希望达到的结果", "当前实际水平", "期望水平" },
            new[] { "总装段下线良率", "85.2%", "≥ 95%" },
            new[] { "滚刷卡扣断裂率", "5.2%", "≤ 0.5%" },
            new[] { "电池盖缝隙超标率", "3.1%", "≤ 0.3%" },
            new[] { "总装段单工位节拍", "68 秒", "≤ 50 秒" }
        }));
        body.Append(P(""));
        body.Append(P("第二步：当前做法与最佳实践", "H2"));
        body.Append(T(new[] { 600, 6600, 1600 }, new string[][] {
            new[] { "序号", "做法描述", "效果如何？" },
            new[] { "1", "滚刷卡扣靠工人手动对齐压入，无定位工装", "效果差，断裂率 5.2%" },
            new[] { "2", "电池盖装配使用电动拧紧枪，但扭矩统一设为 1.2N·m，未区分电池盖材质公差", "缝隙超标率 3.1%" },
            new[] { "3", "工位 SOP v1 已下发，但工人反馈工装按压方向与现场实际操作方向相反", "执行率仅 60%" }
        }));
        body.Append(P(""));
        body.Append(P("第三步：提取原理", "H2"));
        body.Append(T(new[] { 4400, 4400 }, new string[][] {
            new[] { "有效做法", "背后原理（关键词）" },
            new[] { "SMT 段使用视觉定位 + 机械手自动贴装，2 年无虚焊", "视觉定位 + 自动化消除人为对齐误差" },
            new[] { "注塑车间关键尺寸用 SPC 自动监控，偏移超 0.05mm 自动停机", "过程实时防错 + 偏移即停机" },
            new[] { "电池包组装段扭矩枪与 MES 联动，每颗螺丝扭矩实时上传", "数字化防错 + 数据可追溯" }
        }));
        body.Append(P(""));
        body.Append(P("第四步：替代方案", "H2"));
        body.Append(T(new[] { 600, 4400, 2400, 1600 }, new string[][] {
            new[] { "序号", "替代方案描述", "依据哪条原理", "可行性初判" },
            new[] { "1", "滚刷卡扣装配增加定位工装 + 半自动压入设备，工人只需放入滚刷", "视觉定位 + 自动化", "高" },
            new[] { "2", "电池盖装配扭矩枪按电池盖批次自动加载对应扭矩值，MES 记录每颗螺丝", "数字化防错", "高" },
            new[] { "3", "总装段关键工位增加视觉检测，缝隙 > 0.3mm 自动报警并标记", "过程实时防错", "中" },
            new[] { "4", "注塑 Cpk 不达标工装由模具厂家出 2 套调整方案，1 周内对比验证", "快速对比 + 数据选优", "中" },
            new[] { "5", "滚刷材质由 PA66 改为 PA66+30% 玻纤，已在小批量验证缠绕率下降 60%", "材料端解决", "中" },
            new[] { "6", "SOP v1 现场反向问题立即修订 v2，组织工人试运行 3 天再定稿", "现场验证 + 工人参与", "高" }
        }));
        body.Append(P(""));
        body.Append(LP("优选方案：", "方案 1（滚刷定位工装 + 半自动压入）+ 方案 2（电池盖扭矩数字化）+ 方案 6（SOP v2 现场验证）组合，7 月在 2 条总装线并行试点 2 周，对比良率与节拍变化。"));
        body.Append(LP("理由：", "三个方案均无需新设备采购，工装开发 1.5 周可完成；方案 1 / 2 直接打在两个核心卡点上，预计单工位不良率从 8% 降至 2% 以下；方案 6 解决 SOP 执行率问题，无需额外成本。"));
        body.Append(P(""));

        // 四、表单3
        body.Append(P("四、表单 3：利益相关方冲突处理", "H1"));
        body.Append(LP("本次处理的卡点对象：", "注塑外壳关键尺寸 Cpk < 1.33，模具厂家不愿意重新调模，研发坚持尺寸不能放宽，量产爬坡卡进度"));
        body.Append(P(""));
        body.Append(P("第一步：描绘冲突", "H2"));
        body.Append(T(new[] { 4400, 4400 }, new string[][] {
            new[] { "我方希望", "对方的表现/立场" },
            new[] { "模具厂在 2 周内重新调模，关键尺寸 Cpk 提至 ≥ 1.33", "公差太严，调模成本 80 万远超他们的边际收益，不愿意投入" }
        }));
        body.Append(P(""));
        body.Append(LP("冲突的本质是：", "☑ 利益分歧（双方都想要良品率，但调模成本由谁承担有矛盾）"));
        body.Append(P(""));
        body.Append(P("第二步：利益分析", "H2"));
        body.Append(T(new[] { 2200, 3700, 2900 }, new string[][] {
            new[] { "维度", "我方关注什么？", "对方关注什么？" },
            new[] { "最在意的核心利益", "量产爬坡按期推进，整机良率达标", "调模成本回收 + 不打破现有产线节奏" },
            new[] { "我方不太在意但对方很在意的", "调模 80 万具体由谁出", "调模费用结算方式 + 后续订单量" },
            new[] { "对方不太在意但我方很在意的", "模具厂后续服务响应速度", "Cpk 数值本身（达标即可）" }
        }));
        body.Append(P(""));
        body.Append(P("第三步：利益共识", "H2"));
        body.Append(P("对方最在意的，我能给吗？给什么？"));
        body.Append(P("能给。调模 80 万费用由我方承担 60%（48 万），模具厂承担 40%（32 万）作为共同投入；同时承诺该模具对应的两款机型未来 3 年量产订单优先由该模具厂承接，预计订单金额超 800 万。"));
        body.Append(P(""));
        body.Append(P("我最在意的，对方能配合吗？需要什么条件？"));
        body.Append(P("可以配合。条件是调模方案由模具厂出 2 套对比，1 周内完成验证；调模后 Cpk 达到 1.33 的 6 项关键尺寸要明确写入质量协议。"));
        body.Append(P(""));
        body.Append(P("双方都能接受的方向是："));
        body.Append(P("成本共担：60% / 40% 比例；订单绑定：未来 3 年两款机型优先；指标明确：6 项关键尺寸 Cpk ≥ 1.33 写入质量协议，未达标按比例扣款。"));
        body.Append(P(""));
        body.Append(P("第四步：推进方案", "H2"));
        body.Append(P("卖点清单（对模具厂而言，配合调模有什么好处）", "H3"));
        body.Append(T(new[] { 600, 8200 }, new string[][] {
            new[] { "序号", "对模具厂的好处" },
            new[] { "1", "调模费 60% 由我方承担，模具厂只需出 40%（32 万），降低单方投入" },
            new[] { "2", "未来 3 年两款机型量产订单优先由该模具厂承接，预计订单金额超 800 万" },
            new[] { "3", "6 项 Cpk 指标写入质量协议，量产后模具厂可凭达标记录获得公司\"战略供应商\"评级" },
            new[] { "4", "调模过程纳入双方联合项目组，研发、品质、模具厂三方共建，后续新品导入可复用此模式" }
        }));
        body.Append(P(""));
        body.Append(P("需求说明书（需要模具厂做什么）", "H3"));
        body.Append(T(new[] { 3800, 1500, 1500, 2000 }, new string[][] {
            new[] { "需要对方做什么", "由谁负责", "完成时间", "完成标准" },
            new[] { "提交 2 套调模方案（保守/激进）", "模具厂项目经理", "7 月 8 日", "2 套方案文档，含预期 Cpk 提升" },
            new[] { "选定 1 套方案完成调模", "模具厂调模工程师", "7 月 25 日", "6 项关键尺寸 Cpk ≥ 1.33" },
            new[] { "调模后试产 500 台验证", "模具厂 + 我方品质", "8 月 5 日", "试产良率 ≥ 95%，PPM ≤ 500" },
            new[] { "签署《Cpk 质量协议》", "模具厂副总 + 我方品质总监", "8 月 10 日", "协议归档，未达标扣款比例明确" }
        }));
        body.Append(P(""));

        // 五、表单4
        body.Append(P("五、表单 4：风险识别与应对", "H1"));
        body.Append(LP("本次评估针对的方案或阶段：", "7—9 月重点推进：滚刷定位工装 + 电池盖扭矩数字化 + 模具共担调模 + 注塑 Cpk 达标"));
        body.Append(P(""));
        body.Append(P("第一步：识别风险", "H2"));
        body.Append(T(new[] { 600, 8200 }, new string[][] {
            new[] { "序号", "风险描述" },
            new[] { "1", "滚刷卡扣定位工装投入使用后，工人不适应新工装节拍，初期 1 周良率反降" },
            new[] { "2", "电池盖扭矩数字化改造期间，电池盖批次混用导致 MES 数据错位" },
            new[] { "3", "模具共担调模 1 周内未达 Cpk 1.33，需二次调模，量产爬坡延期 2 周" },
            new[] { "4", "滚刷材质由 PA66 改 PA66+30% 玻纤后，用户实测缠绕率反弹（不同家庭场景差异大）" },
            new[] { "5", "LDS 雷达备用供应商产能不足，主供应商延迟时切回备用无法补量" },
            new[] { "6", "量产爬坡期 50K / 月目标冲击产能瓶颈，注塑车间日产能 1.5K 卡死" }
        }));
        body.Append(P(""));
        body.Append(P("第二步：评估风险等级", "H2"));
        body.Append(T(new[] { 2900, 1300, 1300, 1300, 2000 }, new string[][] {
            new[] { "风险", "发生概率（1-3）", "影响严重性（1-3）", "风险等级", "优先级" },
            new[] { "风险 1：工装适应期良率反降", "3", "2", "6", "高" },
            new[] { "风险 2：扭矩数字化批次混用", "2", "2", "4", "中" },
            new[] { "风险 3：调模未达 Cpk 1.33", "2", "3", "6", "高" },
            new[] { "风险 4：滚刷材质反弹", "2", "2", "4", "中" },
            new[] { "风险 5：LDS 备用供应商产能不足", "2", "3", "6", "高" },
            new[] { "风险 6：注塑日产能瓶颈", "3", "2", "6", "高" }
        }));
        body.Append(P(""));
        body.Append(P("评分说明：概率：1=偶发，2=可能，3=很可能 ｜ 严重性：1=轻微，2=较重，3=严重 ｜ 风险等级：6-9=高，3-5=中，1-2=低", "Normal"));
        body.Append(P(""));
        body.Append(P("第三步：预防措施（针对高风险）", "H2"));
        body.Append(T(new[] { 2600, 4400, 1200, 1200 }, new string[][] {
            new[] { "风险", "预防措施", "责任人", "完成时间" },
            new[] { "风险 1：工装适应期", "工装上线前对 4 个工位工人做 2 天实操培训；上线首周工装厂家驻场 3 天答疑", "NPI 工程师", "工装上线前 3 天" },
            new[] { "风险 3：调模未达 Cpk", "调模前先做 1 套试模件 50 件 SPC 验证；调模方案优先选保守方案打底", "模具厂 + 品质", "7 月 8 日" },
            new[] { "风险 5：LDS 备用供应商产能", "备用供应商季度评估 1 次产能；常备 2 周安全库存；与备用供应商签订产能保供协议", "供应链", "7 月 1 日起持续" },
            new[] { "风险 6：注塑日产能瓶颈", "注塑车间 1.5K 上限工装投入 2 套；3 号机备件库存增加 1 倍；夜班排产 1 周验证", "注塑车间主任", "7 月 20 日" }
        }));
        body.Append(P(""));
        body.Append(P("第四步：应急方案", "H2"));
        body.Append(T(new[] { 2600, 2400, 3400, 1200 }, new string[][] {
            new[] { "风险", "触发条件", "应急动作", "负责人" },
            new[] { "风险 1：工装适应期", "上线 3 天良率反降 > 5%", "立即恢复原工装 + 工艺人员现场跟岗 3 天；每日 2 次良率通报", "NPI 经理" },
            new[] { "风险 3：调模未达 Cpk", "首轮试模 50 件 Cpk < 1.20", "立即启动备选方案调模；延期 2 周预案同步通知海外销售", "模具厂 + 制造总监" },
            new[] { "风险 5：LDS 备用供应商", "主供应商延迟 > 7 天", "48 小时内启动备用供应商补货 2 周用量；同步启动临时工艺替代", "供应链" },
            new[] { "风险 6：注塑产能瓶颈", "注塑日产能连续 3 天 < 1.4K", "启动外协注塑厂 2 周；同步优化产品结构减少瓶颈工序", "注塑 + 计划" }
        }));
        body.Append(P(""));

        // 六、表单5
        body.Append(P("六、表单 5：下一阶段行动计划", "H1"));
        body.Append(LP("下一阶段时间范围：", "2025 年 7 月 至 2025 年 9 月"));
        body.Append(P(""));
        body.Append(P("第一步：Stop / Continue / Start", "H2"));
        body.Append(P("Stop——停止做的事", "H3"));
        body.Append(T(new[] { 600, 4400, 3800 }, new string[][] {
            new[] { "序号", "停止的行动", "停止的理由" },
            new[] { "1", "总装段工人手动对齐压入滚刷卡扣", "断裂率 5.2% 无法靠培训解决，工人已疲惫，新工装可替代" },
            new[] { "2", "电池盖扭矩枪统一 1.2N·m 设置", "未考虑材质公差，缝隙超标 3.1%，数字化可按批次自动加载" }
        }));
        body.Append(P(""));
        body.Append(P("Continue——继续做的事", "H3"));
        body.Append(T(new[] { 600, 4400, 3800 }, new string[][] {
            new[] { "序号", "继续的行动", "为什么继续" },
            new[] { "1", "FAI / OQC / 售后三道防线日报机制", "问题闭环速度从 7 天缩短到 2 天，是量产期的核心看板" },
            new[] { "2", "LDS 雷达双供应商管理（主 + 备）", "主供应商价格 / 性能最优，备用供应商保产能，不能合并" },
            new[] { "3", "BOM 国产化推进", "已贡献 2.1% 成本下降，还剩 4 类件可推，潜力还在" }
        }));
        body.Append(P(""));
        body.Append(P("Start——开始做的事", "H3"));
        body.Append(T(new[] { 600, 4400, 3800 }, new string[][] {
            new[] { "序号", "新增的行动", "预期效果" },
            new[] { "1", "滚刷卡扣定位工装 + 半自动压入", "滚刷断裂率从 5.2% 降至 ≤ 0.5%" },
            new[] { "2", "电池盖扭矩数字化（按批次自动加载 + MES 记录）", "缝隙超标率从 3.1% 降至 ≤ 0.3%" },
            new[] { "3", "模具共担调模（60% / 40%）+ 6 项 Cpk 质量协议", "注塑关键尺寸 Cpk 提至 ≥ 1.33" }
        }));
        body.Append(P(""));
        body.Append(P("第二步：行动任务清单", "H2"));
        body.Append(T(new[] { 600, 3600, 1300, 1200, 1200, 1900 }, new string[][] {
            new[] { "序号", "具体任务", "责任人", "开始时间", "检查节点", "完成标准" },
            new[] { "1", "完成滚刷定位工装设计 + 2 套样品制作", "工装工程师王XX", "7 月 1 日", "7 月 12 日", "2 套工装验证合格，可上线" },
            new[] { "2", "完成电池盖扭矩数字化改造 + MES 联调", "IT + 工艺陈XX", "7 月 5 日", "7 月 20 日", "扭矩按批次自动加载，每颗数据可追溯" },
            new[] { "3", "完成模具共担谈判 + 调模方案确定", "NPI 李XX + 模具厂", "7 月 1 日", "7 月 8 日", "2 套调模方案评审通过" },
            new[] { "4", "完成调模 + 6 项 Cpk SPC 验证", "模具厂 + 品质", "7 月 10 日", "7 月 25 日", "6 项 Cpk ≥ 1.33" },
            new[] { "5", "2 条总装线并行试点 2 周", "NPI + 总装车间", "7 月 20 日", "8 月 5 日", "试点良率 ≥ 95%，单工位节拍 ≤ 50 秒" },
            new[] { "6", "签署 Cpk 质量协议", "品质总监 + 模具厂副总", "8 月 1 日", "8 月 10 日", "协议归档，未达标扣款比例明确" },
            new[] { "7", "建立每周一量产爬坡简报机制", "NPI 李XX", "7 月 7 日起", "每周持续", "每周一 9:00 前简报到位，含良率 / 产能 / 售后 / 卡点" }
        }));
        body.Append(P(""));
        body.Append(P("第三步：行为设计", "H2"));
        body.Append(T(new[] { 2800, 2600, 1800, 2600 }, new string[][] {
            new[] { "关键动作", "当前执行阻力", "选用的行为设计方法", "具体怎么设计" },
            new[] { "滚刷定位工装上线", "工人已习惯手动操作，新工装上线初期可能嫌麻烦绕过", "目视法 + 强制触发", "工位张贴\"工装使用 3 步法\"；新工装按压完成度与工位绩效挂钩，未用扣分" },
            new[] { "电池盖扭矩数字化", "电池盖批次混用风险", "强制触发 + 警报提醒", "MES 批次切换时自动校验；扭矩异常自动锁枪，工程师解锁后才能继续" },
            new[] { "调模 Cpk 达标", "模具厂可能先交付试模件应付", "提前准备 + 保险兜底", "试模件 50 件提前 SPC 验证模板备好；保留 1 套激进备选方案" },
            new[] { "量产爬坡周简报", "周一周会经常被挤压", "警报提醒", "每周日 18:00 自动推送模板，9:00 截止前未交自动提醒 NPI 经理" }
        }));
        body.Append(P(""));
        body.Append(P("第四步：支持与资源需求", "H2"));
        body.Append(T(new[] { 4000, 2400, 2400 }, new string[][] {
            new[] { "需要什么支持", "向谁申请", "什么时间前确认" },
            new[] { "滚刷定位工装开发费 18 万", "公司 NPI 预算", "7 月 5 日前" },
            new[] { "电池盖扭矩数字化改造 IT 工时 30 人天", "IT 部门 + 数字化运营", "7 月 5 日前" },
            new[] { "模具共担费用 48 万", "公司管理层 / 财务", "7 月 8 日前" },
            new[] { "外协注塑厂 2 周产能 5K 件备援", "供应链 / 计划", "7 月 15 日前" }
        }));
        body.Append(P(""));

        // 七、今日复盘承诺
        body.Append(P("七、今日复盘承诺", "H1"));
        body.Append(P("今天最重要的一个认知变化：", "H3"));
        body.Append(P("原来以为是\"研发不出活\"，今天意识到是\"我没把研发拉进项目组\"。卡扣和滚刷材质问题推了 1 个月没人牵头，是因为我没有给研发一个具体的合作界面。下次类似问题，要在工装打样的第一周就把研发的工艺接口人拉进群。"));
        body.Append(P(""));
        body.Append(P("我承诺在 2025 年 7 月 25 日 之前，对 滚刷定位工装 + 电池盖扭矩数字化 + 模具共担调模 3 件事的 2 条总装线试点负责人 ，完成 2 周并行试点的良率与节拍数据收集与对比分析报告 ，完成标准是 报告含 3 项数据（试点良率 ≥ 95% / 单工位节拍 ≤ 50 秒 / 单台制造成本下降 5% 以上）并提交 NPI 评审会讨论 。"));
        body.Append(P(""));
        body.Append(Tip("承诺写得越具体，回去之后越不会变成空话。\"继续推进量产爬坡\"不是承诺，\"7 月 25 日前完成 2 周试点数据对比报告并提交 NPI 评审会\"是承诺。"));
        body.Append(P(""));
        body.Append(P("—— 完 ——", "Normal", JustificationValues.Center));
    }

    static void AddSectionProperties(Body body)
    {
        var sectPr = new SectionProperties(
            new PageSize { Width = 11906, Height = 16838, Orient = PageOrientationValues.Portrait },
            new PageMargin { Top = 1440, Right = 1440, Bottom = 1440, Left = 1440, Header = 720, Footer = 720, Gutter = 0 });
        body.Append(sectPr);
    }
}
