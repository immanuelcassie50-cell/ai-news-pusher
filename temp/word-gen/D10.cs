using DocumentFormat.OpenXml.Wordprocessing;
using WordGen.Lib;
using static WordGen.Lib.DocxBuilder;

namespace WordGen;

/// <summary>D-10 内训师班·10 项课程包交付物检查表（每人一份）
/// 10 项交付物 × 4 维（完整度/质量/AI 嵌入度/可推广性）× 5 档</summary>
public static class D10
{
    public static int Run()
    {
        string outPath = @"D:\Downloads\xinjian\德赛西威评审全流程PRD\产出物\02-评审实施\D-10-内训师班·10项课程包交付物检查表（每人一份）.docx";
        var (main, body, doc) = Create(outPath, "D-10");

        body.AppendChild(TitleBlock("内训师班·10 项课程包交付物检查表", "德赛西威 AI 赋能课程评审全流程 / 每人一份"));
        body.AppendChild(Empty());

        body.AppendChild(H2("一、内训师信息"));
        var infoTbl = MakeTable(new[] { 1500, 3000, 1500, 3000, 1100 });
        AddRow(infoTbl, RowColored(new[] { "内训师姓名", "________________", "所属部门", "________________", "检查日期" }, COLOR_BLUE));
        AddRow(infoTbl, RowColored(new[] { "课程包名称", "________________", "目标学员", "________________", "" }, COLOR_BG, bold: false, textColor: COLOR_TEXT));
        AppendTable(body, infoTbl);

        body.AppendChild(H2("二、评分说明"));
        body.AppendChild(Body("本表用于评估内训师 10 项课程包交付物。每项从 4 个维度（完整度/质量/AI 嵌入度/可推广性）按 5 档制评分。10 项 × 4 维 × 25 分 = 满分 1000。"));
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

        // 三、10 项交付物 × 4 维评分
        body.AppendChild(H2("三、10 项交付物 × 4 维评分（满分 1000）"));

        var deliverables = new (string no, string name, string desc)[]
        {
            ("01", "课程定位表",       "目标学员、痛点、价值主张、与现有课程差异"),
            ("02", "三级大纲",         "章/节/知识点 三级，逻辑链清晰"),
            ("03", "PPT",              "结构清晰、案例丰富、视觉统一、不超 20 页"),
            ("04", "案例库",           "≥3 个真实业务案例，含数据/对话/前后对比"),
            ("05", "说明书",           "讲师使用手册，含目标/大纲/讲法/常见问答"),
            ("06", "进度表",           "6 天节奏细化到半天，含交付物截止点"),
            ("07", "22 题题库",        "理论 8+案例 8+实操 6，含答案与评分点"),
            ("08", "3-5 任务行动改善", "学员课后 2-4 周可执行的具体动作"),
            ("09", "讲师手册",         "逐页讲解话术、互动设计、控场预案"),
            ("10", "学员手册",         "跟练步骤、模板填空、提示词样例、作业指引"),
        };

        // 表头：序号 | 交付物 | 完整度 | 质量 | AI 嵌入度 | 可推广性 | 总分
        var evalTbl = MakeTable(new[] { 600, 2200, 1300, 1300, 1300, 1300, 1900 });
        AddRow(evalTbl, Row(new[] { "序号", "交付物（说明）", "完整度 25", "质量 25", "AI 嵌入度 25", "可推广性 25", "4 维平均" }, isHeader: true, heightDxa: 600));
        bool alt = false;
        foreach (var (no, name, desc) in deliverables)
        {
            string fill = alt ? COLOR_BG : COLOR_WHITE;
            var tr = new TableRow();
            tr.AppendChild(MakeCell(no, fill, COLOR_TEXT, 22, true, "center", 600));
            tr.AppendChild(MakeCell(name + "（" + desc + "）", fill, COLOR_TEXT, 20, false, "left", 2200));
            for (int i = 0; i < 4; i++)
                tr.AppendChild(MakeCell("____", fill, COLOR_TEXT, 22, false, "center", 1300));
            tr.AppendChild(MakeCell("____", fill, COLOR_BLUE, 22, true, "center", 1900));
            evalTbl.AppendChild(tr);
            alt = !alt;
        }
        var totalTr = new TableRow();
        totalTr.AppendChild(MakeCell("合计", COLOR_BLUE, COLOR_WHITE, 22, true, "center", 600));
        totalTr.AppendChild(MakeCell("（10 项 × 4 维 × 25 分 = 满分 1000）", COLOR_BLUE, COLOR_WHITE, 20, true, "left", 2200));
        for (int k = 0; k < 4; k++) totalTr.AppendChild(MakeCell("____", COLOR_BLUE, COLOR_WHITE, 22, true, "center", 1300));
        totalTr.AppendChild(MakeCell("____", COLOR_BLUE, COLOR_WHITE, 22, true, "center", 1900));
        evalTbl.AppendChild(totalTr);
        AppendTable(body, evalTbl);

        // 四、AI 嵌入度专项核查
        body.AppendChild(H2("四、AI 嵌入度专项核查（每项交付物至少 1 个 AI 元素）"));
        var aiTbl = MakeTable(new[] { 600, 2400, 7000 });
        AddRow(aiTbl, Row(new[] { "序号", "交付物", "AI 元素说明（提示词 / 工具 / 案例 / 互动）" }, isHeader: true));
        foreach (var (no, name, _) in deliverables)
        {
            string fill = int.Parse(no) % 2 == 1 ? COLOR_BG : COLOR_WHITE;
            var tr = new TableRow();
            tr.AppendChild(MakeCell(no, fill, COLOR_TEXT, 22, true, "center", 600));
            tr.AppendChild(MakeCell(name, fill, COLOR_TEXT, 20, false, "left", 2400));
            tr.AppendChild(MakeCell("________________________________", fill, COLOR_TEXT, 20, false, "left", 7000));
            aiTbl.AppendChild(tr);
        }
        AppendTable(body, aiTbl);

        // 五、评委综合意见
        body.AppendChild(H2("五、评委综合意见"));
        var opTbl = MakeTable(new[] { 2400, 7600 });
        AddRow(opTbl, RowColored(new[] { "亮点", "（最值得推广的课程包、最佳实践点）" }, COLOR_BG, bold: true, textColor: COLOR_BLUE, sizeHalfPoints: 22));
        AddRow(opTbl, RowColored(new[] { "", "" }, COLOR_WHITE));
        AddRow(opTbl, RowColored(new[] { "", "" }, COLOR_WHITE));
        AddRow(opTbl, RowColored(new[] { "缺项说明", "（缺失的交付物/未达标的维度）" }, COLOR_BG, bold: true, textColor: COLOR_BLUE, sizeHalfPoints: 22));
        AddRow(opTbl, RowColored(new[] { "", "" }, COLOR_WHITE));
        AddRow(opTbl, RowColored(new[] { "", "" }, COLOR_WHITE));
        AddRow(opTbl, RowColored(new[] { "改进建议", "（具体可执行的补全动作）" }, COLOR_BG, bold: true, textColor: COLOR_BLUE, sizeHalfPoints: 22));
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
        body.AppendChild(Body("注：本检查表 1 份/人。检查结果将作为「最佳 AI 内训师奖」评选核心依据。10 项交付物任一项未达基本要求（<18 分）将影响整体认证。"));

        BindHeaderFooter(main, "D-10");
        main.Document.Save();
        doc.Dispose();
        Console.WriteLine("OK: " + outPath);
        return 0;
    }
}
