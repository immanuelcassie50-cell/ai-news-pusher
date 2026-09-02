// D-01 评审项目推进计划
// 包含：封面 + 项目背景 + 6 项任务推进表 + 附件清单 + 签字栏
using DocumentFormat.OpenXml;
using DocumentFormat.OpenXml.Packaging;
using DocumentFormat.OpenXml.Wordprocessing;

namespace DesayDocxGen;

public static class Doc01
{
    public static void Build(string outputPath)
    {
        using var doc = WordprocessingDocument.Create(outputPath, WordprocessingDocumentType.Document);
        var mainPart = doc.AddMainDocumentPart();
        mainPart.Document = new Document(new Body());
        DesayBrand.InjectStyles(mainPart);
        var (hRid, fRid) = DesayBrand.AttachHeaderFooter(mainPart, "D-01");
        var body = mainPart.Document.Body!;

        // ===== 封面 =====
        body.Append(DesayBrand.TitleBlock(
            "评审项目推进计划",
            "Desay SV · AI 赋能内训师项目 · 第一阶段交付物",
            "D-01", "2026 年 X 月 X 日"));
        body.Append(DesayBrand.EmptyP());

        // ===== 项目背景 =====
        body.Append(DesayBrand.H1("一、项目背景与评审定位"));
        body.Append(DesayBrand.Body(
            "本项目面向德赛西威 2000+ 学员，覆盖项目管理、通用管理、专业职能、测试、开发五大方向，采用「1 天全员基础赋能班 + 6 天内训师赋能班」两段式交付。区别于传统业务课程评审，本评审的核心命题不是「这门课讲得好不好」，而是「学员用 AI 提的提示词能不能真解决业务问题，内训师能不能把这套方法讲透并被复制」。"));
        body.Append(DesayBrand.Body(
            "评审产出的判断对象有三：① 基础班离场三件套（个人 AI 工具地图、3-5 个本岗提示词、内训师选题意向表）；② 内训师 10 项课程包（课程定位表、三级大纲、PPT、案例、说明书、进度表、22 题题库、3-5 任务行动改善计划、讲师手册、学员手册）；③ 课后 2-4 周陪跑期间真实业务场景中的应用数据。"));
        body.Append(DesayBrand.Callout(
            "评审红线：信息安全红黄绿灯 + 4 条一票否决（不用 AI 验证 AI / AI 说没有不代表事实不存在 / AI 推测的内部规定全部作废 / 正式输出必须人工核实后发出）。任何环节触发红灯，奖项资格取消。"));

        // ===== 6 项任务推进表 =====
        body.Append(DesayBrand.H1("二、六项核心任务推进表"));
        body.Append(DesayBrand.Body(
            "下表分解评审筹备到结营交付的六项关键任务，每项均明确关键交付点、责任分工、所需资源和完成标准，作为项目组周例会的进度跟踪基线。",
            firstLineIndent: false));
        body.Append(DesayBrand.EmptyP());

        var headers1 = new[] { "序号", "核心任务", "关键交付点", "责任方", "所需资源", "完成标准" };
        var widths1  = new[] { 600,    1700,       2500,         1300,    1100,       1106     };
        var rows1 = new string[][]
        {
            new[] { "1", "评审方案确定",
                "评审目标拆解 / 评价对象与维度确认 / 三类评审团构成与权重 / 六大奖项设置",
                "项目组 + HRBP",
                "PRD 文档 / 业务方需求清单",
                "项目领导小组签字确认 D-03 / D-04 两份文件" },
            new[] { "2", "评审筹备物料完成",
                "推进计划 / 流程表 / 评审团方案 / 奖项标准 / 物料清单 五份文件全部定稿",
                "项目组",
                "Word 模板 / 设计系统色板",
                "5 份文件归档至产出物目录 / 各方传阅无异议" },
            new[] { "3", "评分工具准备",
                "提示词评分卡 D-06 / 工具地图评分表 D-07 / AI 教练评估表 D-09 / 课程包检查表 D-10 / 一票否决检查表 D-11 / 评审指引 D-13 印制",
                "项目组 + IT 部",
                "电子模板 / A4 打印 / 评委资料袋",
                "评审日前 3 个工作日完成印制 / 评委资料袋齐全" },
            new[] { "4", "评审团组建与对齐",
                "业务方 4-5 人 / AI 方法论 2-3 人 / 大众评审 5-10 人/班 / 数据系统接入",
                "HRBP + IT 部",
                "评委邀请函 / 评审标准对齐会 30 分钟",
                "评委名单确定 / 标准对齐会签到完整 / IT 完成数据接口" },
            new[] { "5", "评审日执行",
                "内训师说课 5 分钟 / 试讲 10 分钟 / AI 追问 5 分钟 / 10 项课程包文档评审 / 闭门评议",
                "项目组 + 评审团",
                "评审场地 / 投影 / 计时器 / 评分卡 / 茶歇",
                "全部学员完成评审 / 评分卡全部回收 / 现场零信息安全事件" },
            new[] { "6", "结营交付与归档",
                "项目成果汇报 / 颁奖 / 电子证书发放 / 数据移交 IT / 优秀作品上线案例库",
                "项目组 + HRBP + IT 部",
                "颁奖物料 / 电子证书模板 / 案例库后台权限",
                "颁奖完成 / 证书发出 / 优秀作品上线公司案例库" }
        };
        body.Append(DesayBrand.StandardTable(headers1, widths1, rows1));
        body.Append(DesayBrand.EmptyP());

        // ===== 附件清单 =====
        body.Append(DesayBrand.H1("三、配套交付物清单"));
        body.Append(DesayBrand.Body(
            "本项目共产出 20 份评审支持文件，分三阶段交付。本表为评审筹备阶段 5 份的索引，完整清单见统一规范文档。",
            firstLineIndent: false));
        body.Append(DesayBrand.EmptyP());

        var headers2 = new[] { "编号", "文件名称", "类型", "用途说明" };
        var widths2  = new[] { 900,    3200,       1000,    3206     };
        var rows2 = new string[][]
        {
            new[] { "D-01", "评审项目推进计划",       "Word", "项目领导小组 / 项目组使用，对应本文件" },
            new[] { "D-02", "评审及结营仪式流程表",   "Word", "六天节奏的详细时间表，分发给评委及内训师" },
            new[] { "D-03", "评审团组建方案与职责分工", "Word", "三类评审团（业务方 / AI 方法论 / 大众 + 数据）" },
            new[] { "D-04", "评审奖项设置与评奖标准",  "Word", "六大奖项的数量、依据、奖品、颁奖人安排" },
            new[] { "D-05", "评审物料清单",            "Word", "25+ 项物料的负责方、数量、完成情况追踪" }
        };
        body.Append(DesayBrand.StandardTable(headers2, widths2, rows2));
        body.Append(DesayBrand.EmptyP());

        // ===== 关键时间节点 =====
        body.Append(DesayBrand.H1("四、关键时间节点"));
        var headers3 = new[] { "节点", "日期（占位）", "里程碑", "负责人" };
        var widths3  = new[] { 1500,   2000,           3300,     1506    };
        var rows3 = new string[][]
        {
            new[] { "T-21 天", "2026 年 X 月 X 日", "评审方案定稿，5 份筹备文件全部归档", "项目组组长" },
            new[] { "T-14 天", "2026 年 X 月 X 日", "评审团名单确定，评委邀请函发出",     "HRBP" },
            new[] { "T-7 天",  "2026 年 X 月 X 日", "评委标准对齐会，物料印制完成",       "项目组 + HRBP" },
            new[] { "T-3 天",  "2026 年 X 月 X 日", "场地布置完成，评委资料袋封袋",       "项目组" },
            new[] { "T-1 天",  "2026 年 X 月 X 日", "全要素彩排，设备调试",               "项目组" },
            new[] { "T-Day",   "2026 年 X 月 X 日", "评审日 + 结营仪式正式举办",           "项目领导小组" },
            new[] { "T+3 天",  "2026 年 X 月 X 日", "评审结果公示，电子证书发放完成",     "HRBP" },
            new[] { "T+7 天",  "2026 年 X 月 X 日", "优秀作品上线公司案例库，数据完成移交", "IT 部" }
        };
        body.Append(DesayBrand.StandardTable(headers3, widths3, rows3));
        body.Append(DesayBrand.EmptyP());

        // ===== 风险预案 =====
        body.Append(DesayBrand.H1("五、风险预案"));
        var headers4 = new[] { "序号", "风险点", "应对预案" };
        var widths4  = new[] { 700,    2800,     4806      };
        var rows4 = new string[][]
        {
            new[] { "1", "评委时间冲突",
                "提前 14 天确认评委日程，每类评审团准备 1 名候补人选，候补人选同步参加标准对齐会" },
            new[] { "2", "内训师试讲临时缺席",
                "试讲改为录播加同步答辩，10 项课程包评审照常进行，AI 教练技能评分按录播打分" },
            new[] { "3", "现场出现红灯（保密信息输入 AI）",
                "立即暂停该学员评审，由 IT 安全代表现场确认违规等级，按 D-11 一票否决条款处置" },
            new[] { "4", "陪跑数据 IT 接口延迟",
                "IT 部提前 5 天压测，准备人工导出备份方案，最终数据以 IT 系统为准" },
            new[] { "5", "结营仪式时长超时",
                "主持人配置计时提示牌，致辞和发言环节硬性按时切换，颁奖采用 5 人一批集体上台方式提效" }
        };
        body.Append(DesayBrand.StandardTable(headers4, widths4, rows4));
        body.Append(DesayBrand.EmptyP());

        // ===== 签字栏 =====
        body.Append(DesayBrand.H1("六、审批签字"));
        body.Append(DesayBrand.SignatureBlock(new[] { "项目组组长", "HRBP 负责人", "项目领导小组" }));

        // ===== 节属性 =====
        body.Append(DesayBrand.BuildSectionProperties(hRid, fRid));
        mainPart.Document.Save();
    }
}
