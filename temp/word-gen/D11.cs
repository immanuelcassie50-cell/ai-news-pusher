using DocumentFormat.OpenXml.Wordprocessing;
using WordGen.Lib;
using static WordGen.Lib.DocxBuilder;

namespace WordGen;

/// <summary>D-11 信息安全合规一票否决检查表
/// 12 类岗位敏感清单 + 5 类脱敏标准 + 4 条一票否决 + 自评/评委双签</summary>
public static class D11
{
    public static int Run()
    {
        string outPath = @"D:\Downloads\xinjian\德赛西威评审全流程PRD\产出物\02-评审实施\D-11-信息安全合规一票否决检查表（每人一份）.docx";
        var (main, body, doc) = Create(outPath, "D-11");

        body.AppendChild(TitleBlock("信息安全合规一票否决检查表", "德赛西威 AI 赋能课程评审全流程 / 每人一份"));
        body.AppendChild(Empty());

        body.AppendChild(H2("一、学员/内训师信息"));
        var infoTbl = MakeTable(new[] { 1500, 3000, 1500, 3000, 1100 });
        AddRow(infoTbl, RowColored(new[] { "姓名", "________________", "所属部门", "________________", "检查日期" }, COLOR_BLUE));
        AddRow(infoTbl, RowColored(new[] { "岗位类别", "________________", "涉及敏感数据等级", "红/黄/绿（请勾选）", "" }, COLOR_BG, bold: false, textColor: COLOR_TEXT));
        AppendTable(body, infoTbl);

        body.AppendChild(H2("二、4 条一票否决原则（任一触发即取消评审资格）"));
        body.AppendChild(Body("本节是评审红线。一旦在课程、提示词、案例、应用成果中发现以下任一情况，评委必须勾选\"触发\"并停止评审。"));
        body.AppendChild(Empty());

        var vetoTbl = MakeTable(new[] { 700, 4800, 1500, 1500, 1500 });
        AddRow(vetoTbl, Row(new[] { "序号", "一票否决原则", "自评：未触发", "评委：未触发", "评委：触发" }, isHeader: true, heightDxa: 600));
        var vetoItems = new (string no, string text)[]
        {
            ("01", "不用 AI 验证 AI — AI 生成的核查结论不可作为唯一依据，必须人工核验"),
            ("02", "AI 说\"没有\" ≠ 事实不存在 — 关键事实须通过官方渠道或人工核实"),
            ("03", "AI 推测的内部规定全部作废 — 涉及制度/流程须以正式文件为准"),
            ("04", "正式输出必须人工核实后发出 — 不得直接对外发布 AI 生成内容"),
        };
        bool alt = false;
        foreach (var (no, text) in vetoItems)
        {
            string fill = alt ? COLOR_BG : COLOR_WHITE;
            var tr = new TableRow();
            tr.AppendChild(MakeCell(no, fill, COLOR_TEXT, 22, true, "center", 700));
            tr.AppendChild(MakeCell(text, fill, COLOR_TEXT, 20, false, "left", 4800));
            tr.AppendChild(MakeCell("□", fill, COLOR_GREEN, 26, false, "center", 1500));
            tr.AppendChild(MakeCell("□", fill, COLOR_GREEN, 26, false, "center", 1500));
            tr.AppendChild(MakeCell("□", fill, COLOR_RED, 26, false, "center", 1500));
            vetoTbl.AppendChild(tr);
            alt = !alt;
        }
        AppendTable(body, vetoTbl);

        body.AppendChild(Empty());
        body.AppendChild(Body("说明：若\"评委：触发\"勾选 ≥1 项，即一票否决，本表评审结果记 0 分，学员失去当届所有奖项资格。"));

        // 三、5 类脱敏标准
        body.AppendChild(H2("三、5 类脱敏标准（绿/黄/红 灯判定）"));
        body.AppendChild(Body("任何输入到 AI 工具的内容，必须先按本表完成脱敏。脱敏后方可输入。"));
        body.AppendChild(Empty());

        var lampTbl = MakeTable(new[] { 1500, 3000, 5500 });
        AddRow(lampTbl, Row(new[] { "信号灯", "类别", "脱敏标准" }, isHeader: true, heightDxa: 600));
        AddRow(lampTbl, RowColored(new[] { "绿灯", "公开信息", "公司公开资料/已发布的财报/官网/招股书等——可直接输入" }, COLOR_GREEN, bold: true, textColor: COLOR_WHITE, sizeHalfPoints: 22));
        AddRow(lampTbl, RowColored(new[] { "黄灯", "公司内部信息", "公司名→XX公司 / 人名→员工A / 产品代号→项目X / 金额→XX万元 / 日期→保留格式替换年份——脱敏后输入" }, COLOR_YELLOW, bold: true, textColor: COLOR_TEXT, sizeHalfPoints: 22));
        AddRow(lampTbl, RowColored(new[] { "红灯", "保密信息", "未发布专利/内部财报/客户隐私/员工隐私/源代码/未公开战略——禁止输入任何 AI 工具" }, COLOR_RED, bold: true, textColor: COLOR_WHITE, sizeHalfPoints: 22));
        AppendTable(body, lampTbl);

        // 四、12 类岗位敏感清单
        body.AppendChild(H2("四、12 类岗位敏感清单（学员必须逐项自评）"));
        body.AppendChild(Body("请根据本人岗位逐项检查本岗可能接触的敏感数据类型，标出红/黄/绿级别。"));
        body.AppendChild(Empty());

        var jobTbl = MakeTable(new[] { 700, 3000, 1500, 1500, 1500, 1800 });
        AddRow(jobTbl, Row(new[] { "序号", "岗位/数据类别", "绿灯", "黄灯", "红灯", "本人是否接触" }, isHeader: true, heightDxa: 600));

        var jobs = new[]
        {
            ("01", "财务/审计岗 — 内部财报/未公开业绩"),
            ("02", "人力资源岗 — 员工薪资/绩效/晋升名单"),
            ("03", "法务/合规岗 — 未公开诉讼/合同/合规结论"),
            ("04", "研发岗 — 源代码/未发布专利/技术路线"),
            ("05", "产品岗 — 未发布产品规划/客户名单"),
            ("06", "销售/商务岗 — 客户合同/价格/商务策略"),
            ("07", "供应链岗 — 供应商底价/采购条款"),
            ("08", "战略/投资岗 — 投融资方案/估值"),
            ("09", "运营岗 — 用户数据/未公开运营数据"),
            ("10", "IT/安全岗 — 系统架构/账号权限"),
            ("11", "高管/秘书岗 — 经营决策/内部会议纪要"),
            ("12", "其他 — 公司未公开任何内部信息"),
        };
        alt = false;
        foreach (var (no, text) in jobs)
        {
            string fill = alt ? COLOR_BG : COLOR_WHITE;
            var tr = new TableRow();
            tr.AppendChild(MakeCell(no, fill, COLOR_TEXT, 22, true, "center", 700));
            tr.AppendChild(MakeCell(text, fill, COLOR_TEXT, 20, false, "left", 3000));
            tr.AppendChild(MakeCell("□", fill, COLOR_GREEN, 22, false, "center", 1500));
            tr.AppendChild(MakeCell("□", fill, COLOR_YELLOW, 22, false, "center", 1500));
            tr.AppendChild(MakeCell("□", fill, COLOR_RED, 22, false, "center", 1500));
            tr.AppendChild(MakeCell("□ 是 / □ 否", fill, COLOR_TEXT, 20, false, "center", 1800));
            jobTbl.AppendChild(tr);
            alt = !alt;
        }
        AppendTable(body, jobTbl);

        // 五、提示词/案例脱敏核查
        body.AppendChild(H2("五、提示词/案例脱敏核查（5 条必须逐项打勾）"));
        body.AppendChild(Body("学员提交的所有提示词模板、案例、场景化应用成果，都必须通过以下 5 项核查。"));
        body.AppendChild(Empty());

        var checkTbl = MakeTable(new[] { 700, 5800, 1500, 2000 });
        AddRow(checkTbl, Row(new[] { "序号", "核查项", "自评：已脱敏", "评委：合规" }, isHeader: true, heightDxa: 600));
        var checks = new[]
        {
            ("01", "公司名是否已替换为\"XX公司\""),
            ("02", "人名是否已替换为\"员工A/B/C\""),
            ("03", "产品代号是否已替换为\"项目X\""),
            ("04", "金额是否已替换为\"XX万元\"，日期是否仅保留格式不暴露年份"),
            ("05", "是否未出现任何未公开专利/客户名/源代码片段/未发布规划"),
        };
        alt = false;
        foreach (var (no, text) in checks)
        {
            string fill = alt ? COLOR_BG : COLOR_WHITE;
            var tr = new TableRow();
            tr.AppendChild(MakeCell(no, fill, COLOR_TEXT, 22, true, "center", 700));
            tr.AppendChild(MakeCell(text, fill, COLOR_TEXT, 20, false, "left", 5800));
            tr.AppendChild(MakeCell("□", fill, COLOR_GREEN, 22, false, "center", 1500));
            tr.AppendChild(MakeCell("□ 合规 / □ 不合规", fill, COLOR_TEXT, 20, false, "center", 2000));
            checkTbl.AppendChild(tr);
            alt = !alt;
        }
        AppendTable(body, checkTbl);

        // 六、处置与签字
        body.AppendChild(H2("六、处置与签字"));
        body.AppendChild(Body("绿灯：合规通过，正常进入下一轮评审。"));
        body.AppendChild(Body("黄灯：要求学员 24 小时内完成脱敏并重新提交，未完成者奖项降级。"));
        body.AppendChild(Body("红灯：一票否决——直接取消本届评审资格，记录备案，由 AI 方法论专家约谈。"));
        body.AppendChild(Empty());

        var sigTbl = MakeTable(new[] { 2400, 7600 });
        AddRow(sigTbl, RowColored(new[] { "学员自评结论", "□ 绿灯通过   □ 黄灯待整改   □ 红灯一票否决" }, COLOR_BG, bold: true, textColor: COLOR_BLUE, sizeHalfPoints: 22));
        AddRow(sigTbl, RowColored(new[] { "评委复评结论", "□ 绿灯通过   □ 黄灯待整改   □ 红灯一票否决" }, COLOR_BG, bold: true, textColor: COLOR_BLUE, sizeHalfPoints: 22));
        AddRow(sigTbl, RowColored(new[] { "评委意见", "_________________________________________________" }, COLOR_BG, bold: true, textColor: COLOR_BLUE, sizeHalfPoints: 22));
        AddRow(sigTbl, RowColored(new[] { "", "" }, COLOR_WHITE));
        AddRow(sigTbl, RowColored(new[] { "", "" }, COLOR_WHITE));
        AddRow(sigTbl, RowColored(new[] { "学员签字", "________________", }, COLOR_BG, bold: true, textColor: COLOR_BLUE, sizeHalfPoints: 22));
        AddRow(sigTbl, RowColored(new[] { "评委签字", "________________", }, COLOR_BG, bold: true, textColor: COLOR_BLUE, sizeHalfPoints: 22));
        AddRow(sigTbl, RowColored(new[] { "日期", "________________", }, COLOR_BG, bold: true, textColor: COLOR_BLUE, sizeHalfPoints: 22));
        AppendTable(body, sigTbl);

        body.AppendChild(Empty());
        body.AppendChild(Body("注：本表 1 份/人，自评 + 评委双签方为有效。评委签字需来自 AI 方法论专家组的成员。"));

        BindHeaderFooter(main, "D-11");
        main.Document.Save();
        doc.Dispose();
        Console.WriteLine("OK: " + outPath);
        return 0;
    }
}
