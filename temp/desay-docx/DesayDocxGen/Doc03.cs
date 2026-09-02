// D-03 评审团组建方案与职责分工
using DocumentFormat.OpenXml;
using DocumentFormat.OpenXml.Packaging;
using DocumentFormat.OpenXml.Wordprocessing;

namespace DesayDocxGen;

public static class Doc03
{
    public static void Build(string outputPath)
    {
        using var doc = WordprocessingDocument.Create(outputPath, WordprocessingDocumentType.Document);
        var mainPart = doc.AddMainDocumentPart();
        mainPart.Document = new Document(new Body());
        DesayBrand.InjectStyles(mainPart);
        var (hRid, fRid) = DesayBrand.AttachHeaderFooter(mainPart, "D-03");
        var body = mainPart.Document.Body!;

        body.Append(DesayBrand.TitleBlock(
            "评审团组建方案与职责分工",
            "Desay SV · 业务方 + AI 方法论 + 大众评审 + 数据四源",
            "D-03", "2026 年 X 月 X 日"));
        body.Append(DesayBrand.EmptyP());

        // ===== 设计逻辑 =====
        body.Append(DesayBrand.H1("一、设计逻辑：双轴评审"));
        body.Append(DesayBrand.Body(
            "本评审打破传统「领导评 + 学员评」二元结构，建立「业务真实度 × AI 正确度」双轴评审机制。任何一根轴失分，都不能授奖。这样确保评出来的不是「AI 玩得花但业务没用」，也不是「业务真实但 AI 用错」。"));
        body.Append(DesayBrand.Callout(
            "权重比例：业务方 40% + AI 方法论 30% + 大众评审 20% + AI 陪跑数据 10%。其中 AI 陪跑是唯一系统打分维度，剔除主观偏差。"));

        // ===== 评审团构成 =====
        body.Append(DesayBrand.H1("二、评审团构成"));
        var headers1 = new[] { "类别", "人数", "来源", "权重", "主要评什么" };
        var widths1  = new[] { 1700,   700,    2500,    700,    2706         };
        var rows1 = new string[][]
        {
            new[] { "专家评审团-业务方", "4-5 人",
                "项目管理 / 通用管理 / 专业职能 / 测试 / 开发 五大方向各 1 名业务领导",
                "40%",
                "业务问题被解得怎么样、提示词是否针对真痛点、方案是否能复制" },
            new[] { "专家评审团-AI 方法论", "2-3 人",
                "外部 AI 讲师 1 名 + HRBP 1 名 + IT 安全代表 1 名",
                "30%",
                "AI 方法论是否正确、四段式结构是否完整、信息安全是否合规" },
            new[] { "大众评审团-同事互评", "5-10 人/班",
                "学员同方向同事，按方向随机抽签",
                "20%",
                "这个提示词我能不能用、模板可读性、跨人复用性" },
            new[] { "AI 陪跑数据", "系统",
                "IT 部对接陪跑数据中台，自动采集",
                "10%",
                "课后 2-4 周实际应用次数、节省时间、产出数量、同事复用次数" }
        };
        body.Append(DesayBrand.StandardTable(headers1, widths1, rows1));
        body.Append(DesayBrand.EmptyP());

        // ===== 业务方评审团 =====
        body.Append(DesayBrand.H2("2.1 业务方专家评审团详情"));
        body.Append(DesayBrand.Body(
            "业务方评审团是评审的核心力量。为保证评的是「真业务」，每位业务方评委必须与自己评审的方向匹配，禁止跨方向打分。"));

        var bizHeaders = new[] { "方向", "评委席位", "推荐来源", "对齐重点" };
        var bizWidths  = new[] { 1500,   1200,        3500,         2106     };
        var bizRows = new string[][]
        {
            new[] { "项目管理", "1 名", "项目管理委员会 PMO 总监 / 资深 PMP",
                "评估提示词是否解决「跨部门沟通效率 / 风险预警 / 资源拉通」三类真痛点" },
            new[] { "通用管理", "1 名", "组织发展部 OD 负责人 / HRBP 总监",
                "评估提示词是否解决「会议纪要 / 述职报告 / 人才盘点」三类真痛点" },
            new[] { "专业职能", "1 名", "财务 / 法务 / 采购 / 供应链 任一职能负责人",
                "评估提示词是否解决「合同审阅 / 月结报告 / 供应商画像」三类真痛点" },
            new[] { "测试",     "1 名", "测试中心负责人 / 资深测试架构师",
                "评估提示词是否解决「测试用例生成 / 缺陷归类 / 报告自动化」三类真痛点" },
            new[] { "开发",     "1 名", "研发中心技术总监 / 资深架构师",
                "评估提示词是否解决「代码审阅 / 文档生成 / 需求拆分」三类真痛点" }
        };
        body.Append(DesayBrand.StandardTable(bizHeaders, bizWidths, bizRows));
        body.Append(DesayBrand.EmptyP());

        // ===== AI 方法论评审团 =====
        body.Append(DesayBrand.H2("2.2 AI 方法论评审团详情"));
        var aiHeaders = new[] { "席位",    "数量", "职责描述" };
        var aiWidths  = new[] { 2000,      800,    5506      };
        var aiRows = new string[][]
        {
            new[] { "外部 AI 讲师",   "1 名",
                "负责评审标准对齐会主持、AI 追问环节质量保证、5 步教学节拍执行度打分" },
            new[] { "HRBP",          "1 名",
                "负责整体节奏控制、评委间冲突仲裁、大众评审组织、与公司学习地图体系对接" },
            new[] { "IT 安全代表",   "1 名",
                "负责信息安全一票否决审查、红黄绿灯执行督导、敏感信息脱敏标准把关" }
        };
        body.Append(DesayBrand.StandardTable(aiHeaders, aiWidths, aiRows));
        body.Append(DesayBrand.EmptyP());

        // ===== 大众评审团组织 =====
        body.Append(DesayBrand.H2("2.3 大众评审团组织方式"));
        body.Append(DesayBrand.Body(
            "大众评审团按内训师所在方向随机抽签产生，每方向 5-10 人。原则上由学员的同方向同事担任，不允许同班学员互评（避免熟人打分失真）。",
            firstLineIndent: false));
        body.Append(DesayBrand.Body(
            "大众评审采用电子化打分（扫码进入评分页面），评分维度简化为 3 项：① 提示词我能不能用（40%）；② 案例是否贴近我的工作场景（30%）；③ 是否愿意推荐给身边同事（30%）。"));
        body.Append(DesayBrand.EmptyP());

        // ===== AI 陪跑数据接入 =====
        body.Append(DesayBrand.H2("2.4 AI 陪跑数据接入方式"));
        body.Append(DesayBrand.Body(
            "陪跑数据由 IT 部对接公司内部 AI 平台（数智小西）的应用日志自动采集，剔除主观偏差。采集维度见 D-14，得分计算公式："));
        body.Append(DesayBrand.Callout(
            "陪跑得分 = 提示词应用次数 × 25% + 业务节省时间小时数 × 30% + 业务产出数量 × 25% + 同事复用次数 × 20%，最终按 5 档（24-25 / 21-23 / 18-20 / 15-17 / 0-14）映射回 25 分制。"));

        // ===== 评审职责分工 =====
        body.Append(DesayBrand.H1("三、评审职责分工矩阵"));
        var matHeaders = new[] { "评审环节", "业务方", "AI 方法论", "大众评审", "陪跑数据" };
        var matWidths  = new[] { 2300,        1500,    1500,         1500,        1506      };
        var matRows = new string[][]
        {
            new[] { "提示词模板评分（D-06）", "主评",    "复评",    "并行打分", "辅助" },
            new[] { "AI 工具地图评分（D-07）", "辅助",    "主评",    "并行打分", "辅助" },
            new[] { "场景化应用 PK（D-08）",   "主评",    "辅助",    "并行打分", "主评" },
            new[] { "AI 教练技能（D-09）",    "辅助",    "主评",    "—",        "—" },
            new[] { "课程包检查（D-10）",     "主评",    "主评",    "—",        "—" },
            new[] { "信息安全一票否决（D-11）", "复评",  "主评",    "—",        "—" },
            new[] { "AI 陪跑得分（D-14）",    "—",      "—",       "—",        "唯一来源" },
            new[] { "综合评议（闭门）",      "投票权",  "投票权",  "—",        "数据参考" }
        };
        body.Append(DesayBrand.StandardTable(matHeaders, matWidths, matRows));
        body.Append(DesayBrand.EmptyP());

        // ===== 评委守则 =====
        body.Append(DesayBrand.H1("四、评委守则"));

        body.Append(DesayBrand.H2("4.1 评分纪律"));
        body.Append(DesayBrand.Body("一、坚持 5 档 25 分制，禁止给整数分以外的小数；同档位内可微调。", firstLineIndent: false));
        body.Append(DesayBrand.Body("二、严禁评委之间相互讨论分数，闭门评议前禁止比对。", firstLineIndent: false));
        body.Append(DesayBrand.Body("三、评委不得评审与自己直接管理或亲属关系的学员，需主动申报回避。", firstLineIndent: false));
        body.Append(DesayBrand.Body("四、评分卡须在评审结束前 30 分钟交回，逾期视为弃权该项打分。", firstLineIndent: false));

        body.Append(DesayBrand.H2("4.2 AI 追问指引"));
        body.Append(DesayBrand.Body("每位内训师试讲后预留 5 分钟 AI 追问环节，评委可从 D-13 给出的 5 问中任选 2-3 问。", firstLineIndent: false));
        body.Append(DesayBrand.Body("追问原则：不挑刺、不显摆，只问与「业务真实度 × AI 正确度」双轴相关的问题。", firstLineIndent: false));

        body.Append(DesayBrand.H2("4.3 一票否决执行"));
        body.Append(DesayBrand.Callout(
            "评委若发现学员触发 4 条一票否决之一，须当场举手示意 IT 安全代表，由 IT 安全代表确认后填写 D-11，违规等级达红灯立即取消该学员所有奖项资格，无须闭门评议。"));

        // ===== 标准对齐会 =====
        body.Append(DesayBrand.H1("五、评委标准对齐会安排"));
        body.Append(DesayBrand.Body(
            "评审日前 7 个工作日召开评委标准对齐会，全体评委必须出席（含候补）。会议时长 60 分钟，议程如下："));
        var alignHeaders = new[] { "时段", "议题", "主讲" };
        var alignWidths  = new[] { 1500,   4700,   2106 };
        var alignRows = new string[][]
        {
            new[] { "10 分钟", "项目背景 + 评审目标",                  "项目组组长" },
            new[] { "15 分钟", "评分卡逐条解读（D-06 / D-07 / D-09）",  "外部 AI 讲师" },
            new[] { "10 分钟", "信息安全一票否决条款解读（D-11）",      "IT 安全代表" },
            new[] { "10 分钟", "AI 追问 5 问示范",                       "外部 AI 讲师" },
            new[] { "10 分钟", "评委 Q&A",                              "全员" },
            new[] { "5 分钟",  "评分卡试填演练",                        "项目组" }
        };
        body.Append(DesayBrand.StandardTable(alignHeaders, alignWidths, alignRows));
        body.Append(DesayBrand.EmptyP());

        // ===== 签字 =====
        body.Append(DesayBrand.H1("六、方案签字"));
        body.Append(DesayBrand.SignatureBlock(new[] { "项目组组长", "首席评委", "HRBP 负责人" }));

        body.Append(DesayBrand.BuildSectionProperties(hRid, fRid));
        mainPart.Document.Save();
    }
}
