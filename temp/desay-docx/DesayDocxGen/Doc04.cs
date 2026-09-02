// D-04 评审奖项设置与评奖标准
using DocumentFormat.OpenXml;
using DocumentFormat.OpenXml.Packaging;
using DocumentFormat.OpenXml.Wordprocessing;

namespace DesayDocxGen;

public static class Doc04
{
    public static void Build(string outputPath)
    {
        using var doc = WordprocessingDocument.Create(outputPath, WordprocessingDocumentType.Document);
        var mainPart = doc.AddMainDocumentPart();
        mainPart.Document = new Document(new Body());
        DesayBrand.InjectStyles(mainPart);
        var (hRid, fRid) = DesayBrand.AttachHeaderFooter(mainPart, "D-04");
        var body = mainPart.Document.Body!;

        body.Append(DesayBrand.TitleBlock(
            "评审奖项设置与评奖标准",
            "Desay SV · 六大奖项 · 客观数据驱动的评奖体系",
            "D-04", "2026 年 X 月 X 日"));
        body.Append(DesayBrand.EmptyP());

        // ===== 奖项总则 =====
        body.Append(DesayBrand.H1("一、奖项设置总则"));
        body.Append(DesayBrand.Body(
            "本评审取消传统「特别贡献奖」这类主观奖项，全部奖项以客观打分 + 客观数据为基础，确保评奖结果可解释、可申诉、可复盘。六大奖项分为三个层级：个人产出层（提示词奖、应用奖、工具地图奖、内训师奖）、团队层（推广卓越团队奖）、合规层（安全合规标兵奖）。"));
        body.Append(DesayBrand.Callout(
            "评奖前置条件：任何参评学员必须通过 D-11 信息安全一票否决检查。触发红灯者即取消所有奖项资格，不进入闭门评议。"));

        // ===== 六大奖项总览 =====
        body.Append(DesayBrand.H1("二、六大奖项总览"));
        var ovHeaders = new[] { "奖项名称", "数量", "评选依据", "奖品 / 价值", "颁奖人" };
        var ovWidths  = new[] { 2400,        700,    2200,        2000,        1006     };
        var ovRows = new string[][]
        {
            new[] { "最具业务价值提示词奖", "1-2 个",
                "提示词评分卡 D-06 综合得分 Top 1-2",
                "入选公司级 AI 应用案例库 + 现金激励",
                "公司高管" },
            new[] { "最佳场景化应用奖",     "1-2 个",
                "场景化作业 D-08 的 5 维评分综合 Top",
                "公司内网首页推荐 + 周报专栏专访",
                "业务方代表" },
            new[] { "最具推广价值工具地图奖", "1 个",
                "工具地图 D-07 评分 + 同事复用次数综合",
                "入选新员工入职必修 + 学分加成",
                "HRBP 负责人" },
            new[] { "最佳 AI 内训师奖",     "若干（不超过 5 名）",
                "内训师班综合评分 Top（10 项课程包 40% + AI 教练 40% + 陪跑 20%）",
                "AI 内训师证书 + 优先外派学习名额",
                "公司高管" },
            new[] { "AI 推广卓越团队奖",    "1 组",
                "部门整体参与度（>80%） + 应用率（>60%）",
                "部门绩效加分 + 团建经费支持",
                "公司高管" },
            new[] { "AI 安全合规标兵奖",     "1-2 名",
                "连续 4 周陪跑期零违规 + 主动发现并上报至少 1 项安全风险",
                "安全合规证书 + 信息安全部嘉奖",
                "IT 安全负责人" }
        };
        body.Append(DesayBrand.StandardTable(ovHeaders, ovWidths, ovRows));
        body.Append(DesayBrand.EmptyP());

        // ===== 单项奖详情 1 =====
        body.Append(DesayBrand.H1("三、单项奖详细评奖标准"));

        body.Append(DesayBrand.H2("3.1 最具业务价值提示词奖"));
        body.Append(DesayBrand.Body("评选对象：基础班全体学员（含内训师班）。", firstLineIndent: false));
        body.Append(DesayBrand.Body("评分来源：D-06 提示词评分卡的 10 条评分项综合得分。", firstLineIndent: false));
        body.Append(DesayBrand.Body("当选门槛：综合得分 ≥ 200 分（满分 250），且其中「业务价值可衡量」单项 ≥ 21 分。", firstLineIndent: false));
        var pHeaders = new[] { "评选维度", "权重", "说明" };
        var pWidths  = new[] { 2200,        900,    5206  };
        var pRows = new string[][]
        {
            new[] { "10 项评分总分",     "60%", "D-06 评分卡 10 项总分（满分 250）" },
            new[] { "业务领导加权评议",   "20%", "对应业务方向的业务方评委打高分项数量" },
            new[] { "AI 方法论评议",      "10%", "AI 方法论评委打分均值" },
            new[] { "陪跑数据",          "10%", "应用次数 + 节省时间 + 同事复用综合" }
        };
        body.Append(DesayBrand.StandardTable(pHeaders, pWidths, pRows));
        body.Append(DesayBrand.EmptyP());

        body.Append(DesayBrand.H2("3.2 最佳场景化应用奖"));
        body.Append(DesayBrand.Body("评选对象：完成课后 2-4 周场景化作业的学员。", firstLineIndent: false));
        body.Append(DesayBrand.Body("评分来源：D-08 场景化应用 PK 表的 5 维评分（业务问题清晰度 / AI 方案完整度 / 实施数据真实度 / 节省时间显著度 / 推广价值）。", firstLineIndent: false));
        body.Append(DesayBrand.Callout("加分项：作业中包含「与传统方案对比的数据图表」可酌情加 2-3 分。"));
        body.Append(DesayBrand.EmptyP());

        body.Append(DesayBrand.H2("3.3 最具推广价值工具地图奖"));
        body.Append(DesayBrand.Body("评选对象：基础班全员提交的个人 AI 工具地图。", firstLineIndent: false));
        body.Append(DesayBrand.Body("评分来源：D-07 工具地图评分表（8 条 × 5 档）+ 大众评审的「复用意愿」打分。", firstLineIndent: false));
        var mapHeaders = new[] { "评选维度", "权重", "说明" };
        var mapWidths  = new[] { 2200,        900,    5206  };
        var mapRows = new string[][]
        {
            new[] { "8 项评分总分",      "50%", "D-07 评分表 8 项总分（满分 200）" },
            new[] { "同事复用次数",      "30%", "陪跑期内该工具地图被同事下载和使用的次数" },
            new[] { "大众评审复用意愿",   "20%", "大众评审「我愿意用」打分均值" }
        };
        body.Append(DesayBrand.StandardTable(mapHeaders, mapWidths, mapRows));
        body.Append(DesayBrand.EmptyP());

        body.Append(DesayBrand.H2("3.4 最佳 AI 内训师奖"));
        body.Append(DesayBrand.Body("评选对象：完整完成 6 天内训师班并通过 D-11 信息安全检查的全部内训师。", firstLineIndent: false));
        body.Append(DesayBrand.Body("评分公式：综合得分 = 10 项课程包 D-10 × 40% + AI 教练技能 D-09 × 40% + AI 陪跑 D-14 × 20%。", firstLineIndent: false));
        body.Append(DesayBrand.Body("当选门槛：综合得分 ≥ 21（5 档制）且 4 大类 AI 教练技能均不低于 18 分。", firstLineIndent: false));
        body.Append(DesayBrand.Callout("内训师按方向限额：每个方向（5 大方向）最多 1 名当选，确保覆盖均匀。"));
        body.Append(DesayBrand.EmptyP());

        body.Append(DesayBrand.H2("3.5 AI 推广卓越团队奖"));
        body.Append(DesayBrand.Body("评选对象：派出 ≥ 5 名学员参与本项目的部门。", firstLineIndent: false));
        var tHeaders = new[] { "评选维度",          "权重", "数据来源" };
        var tWidths  = new[] { 2500,                900,    4806      };
        var tRows = new string[][]
        {
            new[] { "部门参与度（>80%）",  "30%", "HRBP 报名 + 完课统计" },
            new[] { "部门应用率（>60%）",  "30%", "IT 部陪跑后台陪跑期内活跃用户占比" },
            new[] { "部门优秀作品数量",    "20%", "入围个人奖项的学员数量" },
            new[] { "部门提示词复用次数",  "20%", "部门内提示词被跨岗位调用次数" }
        };
        body.Append(DesayBrand.StandardTable(tHeaders, tWidths, tRows));
        body.Append(DesayBrand.EmptyP());

        body.Append(DesayBrand.H2("3.6 AI 安全合规标兵奖"));
        body.Append(DesayBrand.Body("评选对象：完成基础班或内训师班的全员。", firstLineIndent: false));
        body.Append(DesayBrand.Body("评选门槛：连续 4 周陪跑期内零违规 + 主动发现并上报至少 1 项安全风险（可经 IT 部门验证为真）。", firstLineIndent: false));
        body.Append(DesayBrand.Body("评选数据来源：D-11 一票否决记录 + IT 安全工单系统。", firstLineIndent: false));
        body.Append(DesayBrand.EmptyP());

        // ===== 评奖流程 =====
        body.Append(DesayBrand.H1("四、评奖流程"));
        var flowHeaders = new[] { "步骤", "内容", "执行人", "时点" };
        var flowWidths  = new[] { 700,    3500,   1700,     2406  };
        var flowRows = new string[][]
        {
            new[] { "1", "信息安全前置筛查（D-11 红灯者出局）", "IT 安全代表",    "评审日 D6 14:00 前" },
            new[] { "2", "评分汇总与公式计算（D-15）",           "项目组",          "评审日 D6 14:00-15:00" },
            new[] { "3", "六大奖项候选名单生成（按公式排序）",   "项目组",          "评审日 D6 15:00-15:30" },
            new[] { "4", "评委闭门评议 + 投票",                   "全体评委",        "评审日 D6 15:30-16:30" },
            new[] { "5", "结果公示 24 小时（评委内部群）",       "首席评委",        "评审日 D6 17:00 起" },
            new[] { "6", "结营仪式颁奖",                          "颁奖嘉宾",       "结营仪式 18:40-19:10" },
            new[] { "7", "结果公开（公司内网）",                  "HRBP",            "结营后 24 小时内" }
        };
        body.Append(DesayBrand.StandardTable(flowHeaders, flowWidths, flowRows));
        body.Append(DesayBrand.EmptyP());

        // ===== 申诉机制 =====
        body.Append(DesayBrand.H1("五、申诉机制"));
        body.Append(DesayBrand.Body(
            "学员对评奖结果有异议的，可在结果公开后 5 个工作日内向项目组提交书面申诉，附具体证据。项目组在 10 个工作日内组织 3 名原评委之外的专家复核，复核结果为最终结果。", firstLineIndent: false));
        body.Append(DesayBrand.Callout(
            "申诉范围限定为「评分数据明显错误」「评委资格存疑」「公式计算错误」三类。对评委主观打分本身不接受申诉。"));

        // ===== 签字 =====
        body.Append(DesayBrand.H1("六、方案签字"));
        body.Append(DesayBrand.SignatureBlock(new[] { "项目组组长", "首席评委", "公司分管领导" }));

        body.Append(DesayBrand.BuildSectionProperties(hRid, fRid));
        mainPart.Document.Save();
    }
}
