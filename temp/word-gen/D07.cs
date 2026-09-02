using DocumentFormat.OpenXml.Wordprocessing;
using WordGen.Lib;
using static WordGen.Lib.DocxBuilder;

namespace WordGen;

/// <summary>D-07 基础班·AI 工具地图评分表（每人一份）— 8 条评分项 × 5 档</summary>
public static class D07
{
    public static int Run()
    {
        string outPath = @"D:\Downloads\xinjian\德赛西威评审全流程PRD\产出物\02-评审实施\D-07-基础班·AI工具地图评分表（每人一份）.docx";
        var (main, body, doc) = Create(outPath, "D-07");

        body.AppendChild(TitleBlock("基础班·AI 工具地图评分表", "德赛西威 AI 赋能课程评审全流程 / 每人一份"));
        body.AppendChild(Empty());

        body.AppendChild(H2("一、学员信息"));
        var infoTbl = MakeTable(new[] { 1500, 3000, 1500, 3000, 1100 });
        AddRow(infoTbl, RowColored(new[] { "学员姓名", "________________", "所属部门", "________________", "评分日期" }, COLOR_BLUE));
        AddRow(infoTbl, RowColored(new[] { "岗位方向", "项目管理/通用管理/专业职能/测试/开发", "覆盖工具数", "________________", "" }, COLOR_BG, bold: false, textColor: COLOR_TEXT));
        AppendTable(body, infoTbl);

        body.AppendChild(H2("二、评分说明"));
        body.AppendChild(Body("本表用于评审学员提交的《个人 AI 工具地图》。地图应覆盖日常工作高频场景，标注每个工具的适用场景、边界与替代方案。共 8 条评分项 × 5 档。"));

        var ruleTbl = MakeTable(new[] { 1500, 2200, 7300 });
        AddRow(ruleTbl, Row(new[] { "档位", "分值", "语义" }, isHeader: true));
        AddRow(ruleTbl, RowColored(new[] { "很好", "24-25", "超出预期，可作标杆" }, COLOR_GREEN, bold: false, textColor: COLOR_WHITE));
        AddRow(ruleTbl, RowColored(new[] { "较好", "21-23", "达到预期，有亮点" }, COLOR_CYAN, bold: false, textColor: COLOR_WHITE));
        AddRow(ruleTbl, RowColored(new[] { "一般", "18-20", "达到基本要求" }, COLOR_BG, bold: false, textColor: COLOR_TEXT));
        AddRow(ruleTbl, RowColored(new[] { "较差", "15-17", "未达预期，需改进" }, COLOR_YELLOW, bold: false, textColor: COLOR_WHITE));
        AddRow(ruleTbl, RowColored(new[] { "差",   "0-14",  "严重不达标" }, COLOR_ORANGE, bold: false, textColor: COLOR_WHITE));
        AppendTable(body, ruleTbl);

        body.AppendChild(Empty());

        // 三、8 条评分项
        body.AppendChild(H2("三、8 条评分项（8 × 5 档 = 满分 200）"));
        var evalTbl = MakeTable(new[] { 600, 2300, 900, 900, 900, 900, 900, 800 });
        AddRow(evalTbl, Row(new[] { "序号", "评估项", "很好 24-25", "较好 21-23", "一般 18-20", "较差 15-17", "差 0-14", "评分" }, isHeader: true, heightDxa: 600));

        var items = new (string no, string name, string anchor)[]
        {
            ("01", "场景覆盖完整度", "地图是否覆盖本人 80% 以上日常工作场景"),
            ("02", "工具选择判断力", "每个工具的选型理由是否清晰、避免堆砌"),
            ("03", "适用场景描述", "每个工具标注的适用场景是否具体、可执行"),
            ("04", "工具局限说明", "是否坦诚说明工具的能力边界和失败场景"),
            ("05", "替代方案完备", "每个核心工具是否标注 1-2 个替代品"),
            ("06", "内部平台优先", "能用数智小西/内部平台时不引入外部工具"),
            ("07", "信息安全合规", "工具选择是否避开有合规风险的境外平台"),
            ("08", "可推广与更新", "地图结构是否便于同事复用与定期更新"),
        };
        bool alt = false;
        foreach (var (no, name, anchor) in items)
        {
            string fill = alt ? COLOR_BG : COLOR_WHITE;
            var tr = new TableRow();
            tr.AppendChild(MakeCell(no, fill, COLOR_TEXT, 22, true, "center", 600));
            tr.AppendChild(MakeCell(name + "（" + anchor + "）", fill, COLOR_TEXT, 20, false, "left", 2300));
            for (int i = 0; i < 5; i++)
                tr.AppendChild(MakeCell("○", fill, COLOR_BLUE, 24, false, "center", 900));
            tr.AppendChild(MakeCell("____", fill, COLOR_TEXT, 22, false, "center", 800));
            evalTbl.AppendChild(tr);
            alt = !alt;
        }
        AppendTable(body, evalTbl);

        // 四、单项得分汇总
        body.AppendChild(H2("四、单项得分汇总"));
        var sumTbl = MakeTable(new[] { 800, 3000, 1500, 1500, 1500, 1700 });
        AddRow(sumTbl, Row(new[] { "序号", "评估项", "评委 1", "评委 2", "评委 3", "平均" }, isHeader: true));
        for (int i = 0; i < items.Length; i++)
        {
            var (no, name, _) = items[i];
            string fill = i % 2 == 0 ? COLOR_BG : COLOR_WHITE;
            var tr = new TableRow();
            tr.AppendChild(MakeCell(no, fill, COLOR_TEXT, 22, true, "center", 800));
            tr.AppendChild(MakeCell(name, fill, COLOR_TEXT, 20, false, "left", 3000));
            for (int k = 0; k < 3; k++) tr.AppendChild(MakeCell("____", fill, COLOR_TEXT, 22, false, "center", 1500));
            tr.AppendChild(MakeCell("____", fill, COLOR_BLUE, 22, true, "center", 1700));
            sumTbl.AppendChild(tr);
        }
        var totalTr = new TableRow();
        totalTr.AppendChild(MakeCell("合计", COLOR_BLUE, COLOR_WHITE, 22, true, "center", 800));
        totalTr.AppendChild(MakeCell("（8 项 × 平均分 = 总分，满分 200）", COLOR_BLUE, COLOR_WHITE, 20, true, "left", 3000));
        for (int k = 0; k < 3; k++) totalTr.AppendChild(MakeCell("____", COLOR_BLUE, COLOR_WHITE, 22, true, "center", 1500));
        totalTr.AppendChild(MakeCell("____", COLOR_BLUE, COLOR_WHITE, 22, true, "center", 1700));
        sumTbl.AppendChild(totalTr);
        AppendTable(body, sumTbl);

        // 五、评委综合意见
        body.AppendChild(H2("五、评委综合意见"));
        var opTbl = MakeTable(new[] { 2400, 7600 });
        AddRow(opTbl, RowColored(new[] { "亮点", "（最值得推荐的工具组合、推广价值点）" }, COLOR_BG, bold: true, textColor: COLOR_BLUE, sizeHalfPoints: 22));
        AddRow(opTbl, RowColored(new[] { "", "" }, COLOR_WHITE));
        AddRow(opTbl, RowColored(new[] { "", "" }, COLOR_WHITE));
        AddRow(opTbl, RowColored(new[] { "改进建议", "（应补充的工具/场景/应规避的风险）" }, COLOR_BG, bold: true, textColor: COLOR_BLUE, sizeHalfPoints: 22));
        AddRow(opTbl, RowColored(new[] { "", "" }, COLOR_WHITE));
        AddRow(opTbl, RowColored(new[] { "", "" }, COLOR_WHITE));
        AddRow(opTbl, RowColored(new[] { "评委签字", "_________________________________________________" }, COLOR_BG, bold: true, textColor: COLOR_BLUE, sizeHalfPoints: 22));
        AppendTable(body, opTbl);

        // 六、签名栏
        body.AppendChild(H2("六、签名栏"));
        var sigTbl = MakeTable(new[] { 2000, 3000, 2000, 3000 });
        AddRow(sigTbl, RowColored(new[] { "评委姓名", "________________", "评审日期", "________________" }, COLOR_BG, bold: true, textColor: COLOR_BLUE));
        AddRow(sigTbl, RowColored(new[] { "学员确认", "________________", "确认日期", "________________" }, COLOR_BG, bold: true, textColor: COLOR_BLUE));
        AppendTable(body, sigTbl);

        body.AppendChild(Empty());
        body.AppendChild(Body("注：本评分表 1 份/人。评分结果将作为「最具推广价值工具地图奖」评选依据之一。"));

        BindHeaderFooter(main, "D-07");
        main.Document.Save();
        doc.Dispose();
        Console.WriteLine("OK: " + outPath);
        return 0;
    }
}
