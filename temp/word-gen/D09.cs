using DocumentFormat.OpenXml.Wordprocessing;
using WordGen.Lib;
using static WordGen.Lib.DocxBuilder;

namespace WordGen;

/// <summary>D-09 内训师班·AI 教练技能评估表 — 20 条 × 4 大类 × 5 档</summary>
public static class D09
{
    public static int Run()
    {
        string outPath = @"D:\Downloads\xinjian\德赛西威评审全流程PRD\产出物\02-评审实施\D-09-内训师班·AI教练技能评估表（每人一份）.docx";
        var (main, body, doc) = Create(outPath, "D-09");

        body.AppendChild(TitleBlock("内训师班·AI 教练技能评估表", "德赛西威 AI 赋能课程评审全流程 / 每人一份"));
        body.AppendChild(Empty());

        body.AppendChild(H2("一、内训师信息"));
        var infoTbl = MakeTable(new[] { 1500, 3000, 1500, 3000, 1100 });
        AddRow(infoTbl, RowColored(new[] { "内训师姓名", "________________", "所属部门", "________________", "评估日期" }, COLOR_BLUE));
        AddRow(infoTbl, RowColored(new[] { "讲授主题", "________________", "试讲时长", "____ 分钟", "" }, COLOR_BG, bold: false, textColor: COLOR_TEXT));
        AppendTable(body, infoTbl);

        body.AppendChild(H2("二、评分说明"));
        body.AppendChild(Body("本表用于评估内训师讲授 AI 课程的综合能力。共 4 大类、20 条评估项 × 5 档。满分 500。评委打分：每条 25 分，按 5 档制。"));
        body.AppendChild(Empty());

        var ruleTbl = MakeTable(new[] { 1500, 2200, 7300 });
        AddRow(ruleTbl, Row(new[] { "档位", "分值", "语义" }, isHeader: true));
        AddRow(ruleTbl, RowColored(new[] { "很好", "24-25", "超出预期，可作标杆" }, COLOR_GREEN, bold: false, textColor: COLOR_WHITE));
        AddRow(ruleTbl, RowColored(new[] { "较好", "21-23", "达到预期，有亮点" }, COLOR_CYAN, bold: false, textColor: COLOR_WHITE));
        AddRow(ruleTbl, RowColored(new[] { "一般", "18-20", "达到基本要求" }, COLOR_BG, bold: false, textColor: COLOR_TEXT));
        AddRow(ruleTbl, RowColored(new[] { "较差", "15-17", "未达预期，需改进" }, COLOR_YELLOW, bold: false, textColor: COLOR_WHITE));
        AddRow(ruleTbl, RowColored(new[] { "差",   "0-14",  "严重不达标" }, COLOR_ORANGE, bold: false, textColor: COLOR_WHITE));
        AppendTable(body, ruleTbl);
        body.AppendChild(Empty());

        // 三、20 条评分项，分 4 大类
        body.AppendChild(H2("三、20 条评分项（4 大类 × 5 条 × 5 档 = 满分 500）"));
        body.AppendChild(Empty());

        var categories = new (string code, string name, (string no, string name, string anchor)[] items)[]
        {
            ("A", "工具判断力（01-05）", new (string, string, string)[]
            {
                ("01", "工具选择判断力", "能否根据场景推荐最合适的 AI 工具"),
                ("02", "工具组合能力", "能否把多个工具组合成工作流"),
                ("03", "数智小西/内部平台定位讲解", "是否能让学员理解\"内部平台能做什么不能做什么\""),
                ("04", "工具局限说明", "是否坦诚说明 AI 工具的能力边界"),
                ("05", "工具迭代预判", "是否提示\"工具会变、能力不变\"的长期主义"),
            }),
            ("B", "场景植入能力（06-10）", new (string, string, string)[]
            {
                ("06", "业务问题诊断", "能否从学员描述中识别真问题"),
                ("07", "场景化教学设计", "能否用真实案例代替抽象概念"),
                ("08", "41 个场景清单的活用", "能否针对学员岗位精准推荐场景"),
                ("09", "跨岗位场景迁移", "能否让管理岗理解开发岗的场景"),
                ("10", "场景化课后行动", "能否让学员课后 48 小时有可执行动作"),
            }),
            ("C", "学员引导能力（11-15）", new (string, string, string)[]
            {
                ("11", "0 基础学员引导", "能否让\"没碰过 AI\"的人也能跟上"),
                ("12", "跟练节奏把控", "能否在 90 分钟跟练环节不让学员掉队"),
                ("13", "模板提炼引导", "能否帮学员从 1 个案例提炼出可复用方法"),
                ("14", "错误示范应对", "学员给出烂提示词时能否正向引导而非批评"),
                ("15", "学员成果反馈", "能否对每个学员的成果给出有价值反馈"),
            }),
            ("D", "教学法多样性（16-20）", new (string, string, string)[]
            {
                ("16", "5 步教学节拍执行度", "引发兴趣→植入工具→跟练→模板提炼→成果交付"),
                ("17", "案例/故事/游戏/视频运用", "形式是否多样且服务目标"),
                ("18", "互动设计", "提问/小组讨论/互评等环节的设计"),
                ("19", "控场能力", "能否应对冷场/热场过度/技术故障"),
                ("20", "安全合规意识持续植入", "能否把红黄绿灯贯穿全程"),
            }),
        };

        int totalItems = 0;
        int grandTotal = 0;
        foreach (var (code, catName, items) in categories)
        {
            // 大类标题条
            body.AppendChild(MakeColoredBar(catName, COLOR_BLUE));
            var evalTbl = MakeTable(new[] { 600, 2400, 900, 900, 900, 900, 900, 800 });
            AddRow(evalTbl, Row(new[] { "序号", "评估项", "很好 24-25", "较好 21-23", "一般 18-20", "较差 15-17", "差 0-14", "评分" }, isHeader: true, heightDxa: 600));
            bool alt = false;
            foreach (var (no, name, anchor) in items)
            {
                string fill = alt ? COLOR_BG : COLOR_WHITE;
                var tr = new TableRow();
                tr.AppendChild(MakeCell(no, fill, COLOR_TEXT, 22, true, "center", 600));
                tr.AppendChild(MakeCell(name + "（" + anchor + "）", fill, COLOR_TEXT, 20, false, "left", 2400));
                for (int i = 0; i < 5; i++)
                    tr.AppendChild(MakeCell("○", fill, COLOR_BLUE, 24, false, "center", 900));
                tr.AppendChild(MakeCell("____", fill, COLOR_TEXT, 22, false, "center", 800));
                evalTbl.AppendChild(tr);
                alt = !alt;
                totalItems++;
            }
            AppendTable(body, evalTbl);
            grandTotal += items.Length * 25;
        }

        // 四、单项得分汇总
        body.AppendChild(H2("四、单项得分汇总"));
        var sumTbl = MakeTable(new[] { 800, 3000, 1500, 1500, 1500, 1700 });
        AddRow(sumTbl, Row(new[] { "序号", "评估项", "评委 1", "评委 2", "评委 3", "平均" }, isHeader: true));
        int idx = 0;
        foreach (var (code, catName, items) in categories)
        {
            // 大类小计行
            AddRow(sumTbl, RowColored(new[] { code, catName, "", "", "", "____" }, COLOR_BG, bold: true, textColor: COLOR_BLUE, sizeHalfPoints: 22));
            bool alt = false;
            foreach (var (no, name, _) in items)
            {
                string fill = alt ? COLOR_WHITE : COLOR_BG;
                var tr = new TableRow();
                tr.AppendChild(MakeCell(no, fill, COLOR_TEXT, 22, true, "center", 800));
                tr.AppendChild(MakeCell(name, fill, COLOR_TEXT, 20, false, "left", 3000));
                for (int k = 0; k < 3; k++) tr.AppendChild(MakeCell("____", fill, COLOR_TEXT, 22, false, "center", 1500));
                tr.AppendChild(MakeCell("____", fill, COLOR_BLUE, 22, true, "center", 1700));
                sumTbl.AppendChild(tr);
                alt = !alt;
                idx++;
            }
        }
        var totalTr = new TableRow();
        totalTr.AppendChild(MakeCell("合计", COLOR_BLUE, COLOR_WHITE, 22, true, "center", 800));
        totalTr.AppendChild(MakeCell($"（20 项 × 平均分 = 总分，满分 {grandTotal}）", COLOR_BLUE, COLOR_WHITE, 20, true, "left", 3000));
        for (int k = 0; k < 3; k++) totalTr.AppendChild(MakeCell("____", COLOR_BLUE, COLOR_WHITE, 22, true, "center", 1500));
        totalTr.AppendChild(MakeCell("____", COLOR_BLUE, COLOR_WHITE, 22, true, "center", 1700));
        sumTbl.AppendChild(totalTr);
        AppendTable(body, sumTbl);

        // 五、评委综合意见
        body.AppendChild(H2("五、评委综合意见"));
        var opTbl = MakeTable(new[] { 2400, 7600 });
        AddRow(opTbl, RowColored(new[] { "亮点", "（最值得推广的教学方法/场景化设计）" }, COLOR_BG, bold: true, textColor: COLOR_BLUE, sizeHalfPoints: 22));
        AddRow(opTbl, RowColored(new[] { "", "" }, COLOR_WHITE));
        AddRow(opTbl, RowColored(new[] { "", "" }, COLOR_WHITE));
        AddRow(opTbl, RowColored(new[] { "改进建议", "（下次讲授时具体的可执行调整）" }, COLOR_BG, bold: true, textColor: COLOR_BLUE, sizeHalfPoints: 22));
        AddRow(opTbl, RowColored(new[] { "", "" }, COLOR_WHITE));
        AddRow(opTbl, RowColored(new[] { "", "" }, COLOR_WHITE));
        AddRow(opTbl, RowColored(new[] { "评委签字", "_________________________________________________" }, COLOR_BG, bold: true, textColor: COLOR_BLUE, sizeHalfPoints: 22));
        AppendTable(body, opTbl);

        // 六、签名栏
        body.AppendChild(H2("六、签名栏"));
        var sigTbl = MakeTable(new[] { 2000, 3000, 2000, 3000 });
        AddRow(sigTbl, RowColored(new[] { "评委姓名", "________________", "评审日期", "________________" }, COLOR_BG, bold: true, textColor: COLOR_BLUE));
        AddRow(sigTbl, RowColored(new[] { "内训师确认", "________________", "确认日期", "________________" }, COLOR_BG, bold: true, textColor: COLOR_BLUE));
        AppendTable(body, sigTbl);

        body.AppendChild(Empty());
        body.AppendChild(Body("注：本评估表 1 份/人。评估结果将作为「最佳 AI 内训师奖」评选核心依据之一。"));

        BindHeaderFooter(main, "D-09");
        main.Document.Save();
        doc.Dispose();
        Console.WriteLine("OK: " + outPath);
        return 0;
    }

    /// <summary>分类标题横条</summary>
    private static DocumentFormat.OpenXml.Wordprocessing.Paragraph MakeColoredBar(string text, string color)
    {
        var p = new DocumentFormat.OpenXml.Wordprocessing.Paragraph();
        var pPr = new DocumentFormat.OpenXml.Wordprocessing.ParagraphProperties(
            new Shading { Val = ShadingPatternValues.Clear, Color = "auto", Fill = color },
            new SpacingBetweenLines { Before = "240", After = "120", Line = "300", LineRule = LineSpacingRuleValues.Auto });
        pPr.AppendChild(new Justification { Val = JustificationValues.Left });
        pPr.AppendChild(new Indentation { Left = "200" });
        p.AppendChild(pPr);
        p.AppendChild(MakeRun(text, "FFFFFF", 24, true));
        return p;
    }
}
