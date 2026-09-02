using WordGen.Lib;
using DocumentFormat.OpenXml.Wordprocessing;
using static WordGen.Lib.DocxBuilder;

namespace WordGen;

/// <summary>
/// D-06 基础班·提示词模板评分卡（每人一份）
/// 10 条评分项 × 5 档 + 评委建议 + 总分 + 签名
/// </summary>
public static class D06
{
    public static int Run()
    {
        string outPath = @"D:\Downloads\xinjian\德赛西威评审全流程PRD\产出物\02-评审实施\D-06-基础班·提示词模板评分卡（每人一份）.docx";
        var (main, body, doc) = Create(outPath, "D-06");

        // 标题块
        body.AppendChild(TitleBlock("基础班·提示词模板评分卡", "德赛西威 AI 赋能课程评审全流程 / 每人一份"));
        body.AppendChild(Empty());

        // 学员信息
        body.AppendChild(H2("一、学员信息"));
        var infoTbl = MakeTable(new[] { 1500, 3000, 1500, 3000, 1100 });
        AddRow(infoTbl, RowColored(new[] { "学员姓名", "________________", "所属部门", "________________", "评分日期" }, COLOR_BLUE));
        AddRow(infoTbl, RowColored(new[] { "岗位方向", "项目管理/通用管理/专业职能/测试/开发（请勾选）", "提示词主题", "________________", "" }, COLOR_BG, bold: false, textColor: COLOR_TEXT));
        AppendTable(body, infoTbl);

        // 评分说明
        body.AppendChild(H2("二、评分说明"));
        var ruleP = Body("本表用于评审学员提交的本岗提示词模板（3-5 个），按 10 个评估项逐一打分，每项满分 25 分，按 5 档制评定。");
        body.AppendChild(ruleP);

        // 5 档标准表
        var ruleTbl = MakeTable(new[] { 1500, 2200, 7300 });
        AddRow(ruleTbl, Row(new[] { "档位", "分值", "语义" }, isHeader: true));
        AddRow(ruleTbl, RowColored(new[] { "很好", "24-25", "超出预期，可作标杆" }, COLOR_GREEN, bold: false, textColor: COLOR_WHITE));
        AddRow(ruleTbl, RowColored(new[] { "较好", "21-23", "达到预期，有亮点" }, COLOR_CYAN, bold: false, textColor: COLOR_WHITE));
        AddRow(ruleTbl, RowColored(new[] { "一般", "18-20", "达到基本要求" }, COLOR_BG, bold: false, textColor: COLOR_TEXT));
        AddRow(ruleTbl, RowColored(new[] { "较差", "15-17", "未达预期，需改进" }, COLOR_YELLOW, bold: false, textColor: COLOR_WHITE));
        AddRow(ruleTbl, RowColored(new[] { "差",   "0-14",  "严重不达标" }, COLOR_ORANGE, bold: false, textColor: COLOR_WHITE));
        AppendTable(body, ruleTbl);

        body.AppendChild(Body("评分方式：评委在所选档位画\"○\"，或在右侧\"评分\"栏填入具体分数。最终单项得分为各评委平均值。"));
        body.AppendChild(Empty());

        // 三、10 条评分项
        body.AppendChild(H2("三、10 条评分项（10 × 5 档 = 满分 250）"));

        var evalTbl = MakeTable(new[] { 600, 1900, 1100, 1100, 1100, 1100, 1100, 1100 });
        AddRow(evalTbl, Row(new[] { "序号", "评估项", "很好\n24-25", "较好\n21-23", "一般\n18-20", "较差\n15-17", "差\n0-14", "评分" }, isHeader: true, heightDxa: 600));

        var items = new (string no, string name, string anchor)[]
        {
            ("01", "业务场景还原度", "是否针对真实工作场景、痛点描述具体"),
            ("02", "四段式结构完整性", "角色/背景/目标/约束四要素是否齐全"),
            ("03", "角色定位精准度", "AI 角色是否专业、有边界"),
            ("04", "约束条件合理性", "安全/格式/风格约束是否到位"),
            ("05", "提示词可复用性", "换场景/换人能否用"),
            ("06", "业务价值可衡量", "能否算出节省时间/提升质量"),
            ("07", "提示词迭代次数", "至少测试过 3 次并优化"),
            ("08", "同事复用情况", "是否被同岗位其他人用"),
            ("09", "信息安全合规", "是否遵守红黄绿灯+脱敏"),
            ("10", "与工具地图一致性", "提示词所用工具是否与个人工具地图匹配"),
        };
        bool alt = false;
        foreach (var (no, name, anchor) in items)
        {
            string fill = alt ? COLOR_BG : COLOR_WHITE;
            var cells = new[]
            {
                no, name + "（" + anchor + "）", "○", "○", "○", "○", "○", "____"
            };
            // 自定义：第一列加粗居中，第二列左对齐文本，其他居中
            var tr = new TableRow();
            tr.AppendChild(MakeCell(no, fill, COLOR_TEXT, 22, true, "center", 600));
            tr.AppendChild(MakeCell(name + "（" + anchor + "）", fill, COLOR_TEXT, 20, false, "left", 2500));
            for (int i = 0; i < 5; i++)
                tr.AppendChild(MakeCell("○", fill, COLOR_BLUE, 26, false, "center", 700));
            tr.AppendChild(MakeCell("____", fill, COLOR_TEXT, 22, false, "center", 800));
            evalTbl.AppendChild(tr);
            alt = !alt;
        }
        AppendTable(body, evalTbl);

        // 四、单项得分汇总
        body.AppendChild(H2("四、单项得分汇总"));
        var sumTbl = MakeTable(new[] { 800, 2500, 1500, 1500, 1500, 1200 });
        AddRow(sumTbl, Row(new[] { "序号", "评估项", "评委 1", "评委 2", "评委 3", "平均" }, isHeader: true));
        for (int i = 0; i < items.Length; i++)
        {
            var (no, name, _) = items[i];
            string fill = i % 2 == 0 ? COLOR_BG : COLOR_WHITE;
            var tr = new TableRow();
            tr.AppendChild(MakeCell(no, fill, COLOR_TEXT, 22, true, "center", 600));
            tr.AppendChild(MakeCell(name, fill, COLOR_TEXT, 20, false, "left", 2500));
            for (int k = 0; k < 3; k++) tr.AppendChild(MakeCell("____", fill, COLOR_TEXT, 22, false, "center", 800));
            tr.AppendChild(MakeCell("____", fill, COLOR_BLUE, 22, true, "center", 800));
            sumTbl.AppendChild(tr);
        }
        // 合计行
        var totalTr = new TableRow();
        totalTr.AppendChild(MakeCell("合计", COLOR_BLUE, COLOR_WHITE, 22, true, "center", 600));
        totalTr.AppendChild(MakeCell("（10 项 × 平均分 = 总分，满分 250）", COLOR_BLUE, COLOR_WHITE, 20, true, "left", 2500));
        for (int k = 0; k < 3; k++) totalTr.AppendChild(MakeCell("____", COLOR_BLUE, COLOR_WHITE, 22, true, "center", 800));
        totalTr.AppendChild(MakeCell("____", COLOR_BLUE, COLOR_WHITE, 22, true, "center", 800));
        sumTbl.AppendChild(totalTr);
        AppendTable(body, sumTbl);

        // 五、评委综合意见
        body.AppendChild(H2("五、评委综合意见"));
        var opTbl = MakeTable(new[] { 2400, 7600 });
        AddRow(opTbl, RowColored(new[] { "亮点", "（可复制的方法、值得推广的实践、最佳实践点）" }, COLOR_BG, bold: true, textColor: COLOR_BLUE, sizeHalfPoints: 22));
        AddRow(opTbl, RowColored(new[] { "", "" }, COLOR_WHITE));
        AddRow(opTbl, RowColored(new[] { "", "" }, COLOR_WHITE));
        AddRow(opTbl, RowColored(new[] { "改进建议", "（具体可执行的下一步行动）" }, COLOR_BG, bold: true, textColor: COLOR_BLUE, sizeHalfPoints: 22));
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
        body.AppendChild(Body("注：本评分卡 1 份/人，由 AI 方法论专家填写。评分结果将作为「最具业务价值提示词奖」评选依据之一。"));

        BindHeaderFooter(main, "D-06");
        main.Document.Save();
        doc.Dispose();
        Console.WriteLine("OK: " + outPath);
        return 0;
    }
}
