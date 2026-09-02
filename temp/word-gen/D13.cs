using DocumentFormat.OpenXml.Wordprocessing;
using WordGen.Lib;
using static WordGen.Lib.DocxBuilder;

namespace WordGen;

/// <summary>D-13 课程评审指引（每人一份）— AI 课说课 5 步 + 试讲 6 条 + AI 追问 5 问</summary>
public static class D13
{
    public static int Run()
    {
        string outPath = @"D:\Downloads\xinjian\德赛西威评审全流程PRD\产出物\02-评审实施\D-13-课程评审指引（每人一份）.docx";
        var (main, body, doc) = Create(outPath, "D-13");

        body.AppendChild(TitleBlock("课程评审指引", "德赛西威 AI 赋能课程评审全流程 / 每人一份 / 内训师专用"));
        body.AppendChild(Empty());

        body.AppendChild(H2("一、评审总览"));
        body.AppendChild(Body("本指引供内训师参加 D5-D6 课程评审日使用。内训师评审分为 3 部分：5 分钟说课 + 10 分钟试讲 + 5 分钟 AI 追问。"));
        body.AppendChild(Empty());

        var overviewTbl = MakeTable(new[] { 1500, 2500, 1500, 4500 });
        AddRow(overviewTbl, Row(new[] { "环节", "时长", "形式", "核心评价" }, isHeader: true, heightDxa: 600));
        AddRow(overviewTbl, RowColored(new[] { "AI 课说课", "5 分钟", "PPT 演示", "业务问题诊断/AI 方案/提示词/效果/可复制性", }, COLOR_CYAN, bold: true, textColor: COLOR_WHITE, sizeHalfPoints: 22));
        AddRow(overviewTbl, RowColored(new[] { "AI 教练试讲", "10 分钟", "现场讲授", "工具判断力/场景植入/学员引导/教学法多样性", }, COLOR_GREEN, bold: true, textColor: COLOR_WHITE, sizeHalfPoints: 22));
        AddRow(overviewTbl, RowColored(new[] { "AI 追问", "5 分钟", "评委提问", "数智小西/场景迁移/脱敏细节/成本对比/工具迭代", }, COLOR_ORANGE, bold: true, textColor: COLOR_WHITE, sizeHalfPoints: 22));
        AppendTable(body, overviewTbl);

        // 二、AI 课说课 5 步
        body.AppendChild(H2("二、AI 课说课 5 步（5 分钟）"));
        body.AppendChild(Body("说课不是念 PPT，而是讲清楚\"为什么这样做、效果如何、别人能否复用\"。每步 1 分钟。"));
        body.AppendChild(Empty());

        var teachTbl = MakeTable(new[] { 600, 2200, 7200 });
        AddRow(teachTbl, Row(new[] { "步骤", "要点", "参考话术与提示" }, isHeader: true, heightDxa: 600));

        var steps = new (string no, string key, string content)[]
        {
            ("01", "业务问题诊断", "我观察到的真问题是什么？数据/频次/痛感——不抽象，举 1 个具体案例（人/事/时/地）。"),
            ("02", "AI 方案设计", "为什么是 AI 方案？为什么不是传统方案？用了哪些工具/提示词/数据流？逻辑链要清晰。"),
            ("03", "提示词模板展示", "把 1 个最核心的提示词模板完整念出来——四段式（角色/背景/目标/约束）一气呵成，不掩饰。"),
            ("04", "效果数据对比", "用数据说话：节省了多少时间/提升了多少质量/被多少同事复用。最好有前后对比图。"),
            ("05", "可复制性论证", "换一个人/换一个部门，能否复现？需要什么前提？坦诚说局限性比吹嘘更得分。"),
        };
        bool alt = false;
        foreach (var (no, key, content) in steps)
        {
            string fill = alt ? COLOR_BG : COLOR_WHITE;
            var tr = new TableRow();
            tr.AppendChild(MakeCell(no, fill, COLOR_BLUE, 26, true, "center", 600));
            tr.AppendChild(MakeCell(key, fill, COLOR_BLUE, 22, true, "left", 2200));
            tr.AppendChild(MakeCell(content, fill, COLOR_TEXT, 20, false, "left", 7200));
            teachTbl.AppendChild(tr);
            alt = !alt;
        }
        AppendTable(body, teachTbl);

        // 三、试讲 6 条
        body.AppendChild(H2("三、AI 教练试讲 6 条"));
        body.AppendChild(Body("试讲不是表演，而是展示\"你能不能把 AI 课讲明白\"。评委看的是教学法，不是演技。"));
        body.AppendChild(Empty());

        var trialTbl = MakeTable(new[] { 600, 2200, 7200 });
        AddRow(trialTbl, Row(new[] { "序号", "试讲原则", "落地动作" }, isHeader: true, heightDxa: 600));

        var trials = new (string no, string key, string content)[]
        {
            ("01", "只聚焦一个 AI 场景", "10 分钟只讲 1 个场景——讲透胜过讲 3 个皮毛。评委想知道你能不能\"打深井\"。"),
            ("02", "形式多样", "实操 + 案例 + 视频 + 讨论至少 2 种组合。形式服务于目标，不为形式而形式。"),
            ("03", "有一个亮点", "让人记住的一个金句/一个演示/一个反常识结论。评委打分往往就靠这一点。"),
            ("04", "开场结尾精心设计", "开场 30 秒抓住注意力（提问/反常识/现场演示），结尾 30 秒回扣主题并给出行动指引。"),
            ("05", "完全按培训师角色走", "不解释你为什么这样设计、也不问评委\"你们懂了吗\"——培训师自信地走完全程。"),
            ("06", "同组之间互相过渡衔接", "如果你不是第一个讲，主动承接上一位的结尾\"刚刚张老师讲的……，我接着……\"。"),
        };
        alt = false;
        foreach (var (no, key, content) in trials)
        {
            string fill = alt ? COLOR_BG : COLOR_WHITE;
            var tr = new TableRow();
            tr.AppendChild(MakeCell(no, fill, COLOR_BLUE, 26, true, "center", 600));
            tr.AppendChild(MakeCell(key, fill, COLOR_BLUE, 22, true, "left", 2200));
            tr.AppendChild(MakeCell(content, fill, COLOR_TEXT, 20, false, "left", 7200));
            trialTbl.AppendChild(tr);
            alt = !alt;
        }
        AppendTable(body, trialTbl);

        // 四、AI 追问 5 问
        body.AppendChild(H2("四、AI 追问 5 问（评委专用，内训师提前准备）"));
        body.AppendChild(Body("以下 5 问是评委最常追问的\"硬问题\"。内训师应提前思考答案，避免被问倒。"));
        body.AppendChild(Empty());

        var qaTbl = MakeTable(new[] { 600, 4400, 5000 });
        AddRow(qaTbl, Row(new[] { "序号", "评委追问", "准备方向（仅供内训师参考）" }, isHeader: true, heightDxa: 600));

        var qas = new (string no, string q, string hint)[]
        {
            ("Q1", "这个提示词在公司内部平台（数智小西）能跑吗？", "明确说明：是否依赖数智小西不支持的能力（如多模态/工具调用）。如不能，给出降级方案。"),
            ("Q2", "如果学员不告诉你他具体做什么岗位，这套提示词还成立吗？", "展示你设计的可迁移性——是否在提示词中预留了岗位占位符，或用通用角色写法。"),
            ("Q3", "数据脱敏你具体做了哪些处理？", "逐条说 5 类脱敏标准（公司/人名/产品代号/金额/日期），并展示 1 个脱敏前后对比。"),
            ("Q4", "你这个 AI 方案的成本和传统方案比，节省在哪里？", "分项量化：人力时间/返工次数/沟通成本/错误率。最好给一个 ROI 数字。"),
            ("Q5", "如果 AI 平台下周升级了，你这套方法还能用吗？", "强调\"工具会变、能力不变\"——你的方法论是工具无关的（角色/结构/迭代），不绑定特定版本。"),
        };
        alt = false;
        foreach (var (no, q, hint) in qas)
        {
            string fill = alt ? COLOR_BG : COLOR_WHITE;
            var tr = new TableRow();
            tr.AppendChild(MakeCell(no, fill, COLOR_ORANGE, 26, true, "center", 600));
            tr.AppendChild(MakeCell(q, fill, COLOR_TEXT, 20, false, "left", 4400));
            tr.AppendChild(MakeCell(hint, fill, COLOR_TEXT, 20, false, "left", 5000));
            qaTbl.AppendChild(tr);
            alt = !alt;
        }
        AppendTable(body, qaTbl);

        // 五、评审当天注意事项
        body.AppendChild(H2("五、评审当天注意事项"));
        body.AppendChild(Body("1. 提前 30 分钟到场，调试设备（投影/电脑/翻页笔/AI 工具登录状态）。"));
        body.AppendChild(Body("2. 提示词模板打印 3 份（评委人手 1 份），AI 工具地图打印 1 份供展示。"));
        body.AppendChild(Body("3. 严格按 5+10+5 分钟分配，剩 1 分钟不拖堂，剩 2 分钟主动加速。"));
        body.AppendChild(Body("4. 被追问时不抢话、不答\"我们回去研究\"——坦诚比圆滑得分。"));
        body.AppendChild(Body("5. 评审结束当日完成《D-09 AI 教练技能评估表》签字归档。"));
        body.AppendChild(Empty());

        // 六、信息安全自检提醒
        body.AppendChild(H2("六、信息安全自检（评审前 5 分钟必做）"));
        body.AppendChild(Body("1. 所有 PPT/案例/提示词是否已完成 5 类脱敏？"));
        body.AppendChild(Body("2. 是否避免直接输入未公开专利/客户名/源代码？"));
        body.AppendChild(Body("3. 是否避免直接展示员工薪资/内部财报？"));
        body.AppendChild(Body("4. 如有不确定项，是否在评审前与 AI 方法论专家组确认？"));
        body.AppendChild(Empty());

        // 七、签名栏
        body.AppendChild(H2("七、签名栏"));
        var sigTbl = MakeTable(new[] { 2400, 7600 });
        AddRow(sigTbl, RowColored(new[] { "内训师签字", "________________", }, COLOR_BG, bold: true, textColor: COLOR_BLUE, sizeHalfPoints: 22));
        AddRow(sigTbl, RowColored(new[] { "评审日期", "________________", }, COLOR_BG, bold: true, textColor: COLOR_BLUE, sizeHalfPoints: 22));
        AddRow(sigTbl, RowColored(new[] { "信息安复合规确认", "□ 已完成 5 类脱敏核查，承诺无红灯违规" }, COLOR_BG, bold: true, textColor: COLOR_BLUE, sizeHalfPoints: 22));
        AppendTable(body, sigTbl);

        body.AppendChild(Empty());
        body.AppendChild(Body("注：本指引 1 份/人。建议在评审日前 1 周开始按 5 步说课逻辑整理材料，避免临场卡壳。"));

        BindHeaderFooter(main, "D-13");
        main.Document.Save();
        doc.Dispose();
        Console.WriteLine("OK: " + outPath);
        return 0;
    }
}
