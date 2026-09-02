// D-02 评审及结营仪式流程表
using DocumentFormat.OpenXml;
using DocumentFormat.OpenXml.Packaging;
using DocumentFormat.OpenXml.Wordprocessing;

namespace DesayDocxGen;

public static class Doc02
{
    public static void Build(string outputPath)
    {
        using var doc = WordprocessingDocument.Create(outputPath, WordprocessingDocumentType.Document);
        var mainPart = doc.AddMainDocumentPart();
        mainPart.Document = new Document(new Body());
        DesayBrand.InjectStyles(mainPart);
        var (hRid, fRid) = DesayBrand.AttachHeaderFooter(mainPart, "D-02");
        var body = mainPart.Document.Body!;

        body.Append(DesayBrand.TitleBlock(
            "评审及结营仪式流程表",
            "Desay SV · 内训师班 6 天节奏 · 评审日 + 结营仪式",
            "D-02", "2026 年 X 月 X 日"));
        body.Append(DesayBrand.EmptyP());

        // ===== 总览 =====
        body.Append(DesayBrand.H1("一、流程总览"));
        body.Append(DesayBrand.Body(
            "本流程表覆盖内训师班 6 天的整体节奏，重点详化最后两天的评审日 D5、D6 与当晚的结营仪式。基础班的评审环节因为是「课程结束当日由大众评审现场打分」，单独列在文末作为参考。"));
        body.Append(DesayBrand.Callout(
            "评审分组安排：采用按方向分组（项目管理 / 通用管理 / 专业职能 / 测试 / 开发 五大方向），每组配置同方向评委，确保业务场景理解一致。每个内训师评审时长 = 说课 5 分钟 + 试讲 10 分钟 + AI 追问 5 分钟 = 20 分钟。"));

        // ===== 内训师班 6 天总览 =====
        body.Append(DesayBrand.H1("二、内训师班 6 天总览"));
        var ovHeaders = new[] { "天数", "主题", "上午", "下午", "晚间作业" };
        var ovWidths  = new[] { 700,    1700,   2000,   2000,   1806      };
        var ovRows = new string[][]
        {
            new[] { "D1", "AI 工具与场景再认知",
                "项目启动 / AI 工具地图复习 / 内部平台讲解",
                "41 个场景清单介入 / 学员认领选题",
                "完善个人课程定位表" },
            new[] { "D2", "课程包搭建上半段",
                "三级大纲共创 / 案例库选材",
                "PPT 框架搭建 / 案例打磨",
                "完成大纲 V1 + 案例 V1" },
            new[] { "D3", "课程包搭建下半段",
                "讲师手册撰写 / 学员手册撰写",
                "22 题题库设计 / 进度表搭建",
                "完成手册 V1 + 题库 V1" },
            new[] { "D4", "试讲集训",
                "教学法五步节拍训练 / 跟练设计",
                "试讲分组演练 / 评委标准对齐会",
                "修订试讲脚本与 PPT" },
            new[] { "D5", "评审日上半段",
                "内训师说课 5 分钟 × 5-6 人",
                "内训师试讲 10 分钟 × 5-6 人 + AI 追问",
                "课程包文档自检准备" },
            new[] { "D6", "评审日下半段 + 结营",
                "10 项课程包文档评审",
                "综合评议 + 评审反馈 + 改进建议",
                "结营仪式 18:00 - 19:30" }
        };
        body.Append(DesayBrand.StandardTable(ovHeaders, ovWidths, ovRows));
        body.Append(DesayBrand.EmptyP());

        // ===== D5 详细 =====
        body.Append(DesayBrand.H1("三、评审日 D5 详细时间表"));
        var d5Headers = new[] { "时段", "任务", "负责人", "所需资源", "备注" };
        var d5Widths  = new[] { 1300,   2500,   1300,     1700,       1406  };
        var d5Rows = new string[][]
        {
            new[] { "08:30-09:00", "评委签到 + 资料袋发放",       "HRBP",        "签到表 / 评委资料袋",      "茶歇区开放" },
            new[] { "09:00-09:15", "评审日开场介绍（D-16 PPT）", "项目组组长",   "投影 / PPT",                "评委到位率 100%" },
            new[] { "09:15-09:30", "评审标准最终对齐",            "外部 AI 讲师", "评审指引 D-13",             "回答评委疑问" },
            new[] { "09:30-12:00", "说课环节 第 1-6 位（每人 5 分钟 + 评委记录）", "主持人 + 评委", "计时器 / 评分卡 D-06/D-07", "中间无休息" },
            new[] { "12:00-13:30", "午餐 + 评委初评",            "项目组",        "餐饮 / 评委休息区",         "评委可继续打分" },
            new[] { "13:30-14:00", "下午开场 + AI 追问规则讲解", "外部 AI 讲师",  "AI 追问 5 问参考",          "重申一票否决条款" },
            new[] { "14:00-17:00", "试讲环节 第 1-6 位（每人 10 分钟试讲 + 5 分钟 AI 追问）", "主持人 + 评委", "评分卡 D-09 / D-10", "每两人插 5 分钟切换" },
            new[] { "17:00-17:30", "评委闭门交流 + 当日反馈记录",  "首席评委",    "评委专用会议室",            "不公开" }
        };
        body.Append(DesayBrand.StandardTable(d5Headers, d5Widths, d5Rows));
        body.Append(DesayBrand.EmptyP());

        // ===== D6 详细 =====
        body.Append(DesayBrand.H1("四、评审日 D6 详细时间表"));
        var d6Rows = new string[][]
        {
            new[] { "08:30-09:00", "评委签到 + 课程包文档分发",   "项目组",       "10 项交付物 × N 套",         "电子版同步发放" },
            new[] { "09:00-12:00", "10 项课程包文档评审（评委分组）", "评委", "评分卡 D-10 / 信息安全卡 D-11", "评委可走访学员" },
            new[] { "12:00-13:30", "午餐 + AI 陪跑数据汇报",      "IT 部",        "陪跑数据 D-14 投屏",         "数据按方向汇报" },
            new[] { "13:30-15:30", "综合评议 + 奖项评定（闭门）", "全体评委",     "汇总表 D-15 / 投票工具",     "票数实时计算" },
            new[] { "15:30-16:00", "评审反馈整理 + 改进建议汇总", "项目组",       "反馈模板",                   "用于个性化反馈" },
            new[] { "16:00-17:00", "对内训师集中反馈 + 改进建议", "首席评委",     "投影 / 评审纪要",            "全体内训师参加" },
            new[] { "17:00-18:00", "结营仪式准备 + 物料布置",     "项目组",        "颁奖物料 / 灯光",            "评委可休息" }
        };
        body.Append(DesayBrand.StandardTable(d5Headers, d5Widths, d6Rows));
        body.Append(DesayBrand.EmptyP());

        // ===== 结营仪式 =====
        body.Append(DesayBrand.H1("五、结营仪式时间表（D6 18:00-19:30）"));
        body.Append(DesayBrand.Body(
            "结营仪式取消纸质证书颁发环节，全部采用电子证书 + 学习地图积分形式；学员代表发言改为自愿报名，不做硬性安排。",
            firstLineIndent: false));
        body.Append(DesayBrand.EmptyP());

        var endHeaders = new[] { "时段", "环节", "时长", "执行人", "备注" };
        var endWidths  = new[] { 1300,   2500,   800,     1600,     2006  };
        var endRows = new string[][]
        {
            new[] { "18:00-18:10", "项目总结回顾",                     "10 分钟", "项目组组长",     "数据 + 亮点 + 致谢" },
            new[] { "18:10-18:40", "AI 教练技能 Top 3 示范讲解",       "30 分钟", "Top 3 内训师",   "每人 10 分钟" },
            new[] { "18:40-19:10", "颁奖（6 大奖项）",                 "30 分钟", "颁奖嘉宾",        "5 人一批集体上台" },
            new[] { "19:10-19:20", "内训师代表发言（自愿）",          "10 分钟", "学员代表",        "现场报名" },
            new[] { "19:20-19:25", "电子证书发放 + 学习地图积分入账",  "5 分钟",  "HRBP",            "扫码领取" },
            new[] { "19:25-19:35", "领导致辞",                         "10 分钟", "公司领导",        "总结 + 展望" },
            new[] { "19:35-19:45", "成果交付仪式（数据移交 IT 部）",   "10 分钟", "项目组 + IT 部",  "象征性交接" },
            new[] { "19:45-19:50", "全员合影 + 散会",                  "5 分钟",  "项目组",          "合影分组拍" }
        };
        body.Append(DesayBrand.StandardTable(endHeaders, endWidths, endRows));
        body.Append(DesayBrand.EmptyP());

        // ===== 基础班评审节奏 =====
        body.Append(DesayBrand.H1("六、基础班评审节奏（参考）"));
        body.Append(DesayBrand.Body(
            "基础班为 1 天全员课，无独立评审日，采取「随堂 + 课后」混合评审。"));

        var baseHeaders = new[] { "时点", "评审环节", "评审主体", "评审工具", "权重" };
        var baseWidths  = new[] { 1700,   2300,       1700,        2000,        806 };
        var baseRows = new string[][]
        {
            new[] { "课程结束时", "现场互评（同班同事打分）",        "大众评审团",     "提示词评分卡 D-06 简版", "20%" },
            new[] { "课后 48 小时", "提示词模板互评 + 学员自评",     "学员 + 班委",   "提示词评分卡 D-06",      "40%" },
            new[] { "课后 1 周",   "AI 工具地图评分",                "AI 陪跑组",     "工具地图评分表 D-07",    "10%" },
            new[] { "课后 2-4 周", "场景化应用成果 PK + AI 陪跑数据", "业务方 + 系统", "PK 表 D-08 + 数据 D-14", "30%" }
        };
        body.Append(DesayBrand.StandardTable(baseHeaders, baseWidths, baseRows));
        body.Append(DesayBrand.EmptyP());

        // ===== 签字 =====
        body.Append(DesayBrand.H1("七、流程签字"));
        body.Append(DesayBrand.SignatureBlock(new[] { "项目组组长", "首席评委", "HRBP 负责人" }));

        body.Append(DesayBrand.BuildSectionProperties(hRid, fRid));
        mainPart.Document.Save();
    }
}
