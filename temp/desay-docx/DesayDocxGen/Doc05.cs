// D-05 评审物料清单（25+ 项物料）
using DocumentFormat.OpenXml;
using DocumentFormat.OpenXml.Packaging;
using DocumentFormat.OpenXml.Wordprocessing;

namespace DesayDocxGen;

public static class Doc05
{
    public static void Build(string outputPath)
    {
        using var doc = WordprocessingDocument.Create(outputPath, WordprocessingDocumentType.Document);
        var mainPart = doc.AddMainDocumentPart();
        mainPart.Document = new Document(new Body());
        DesayBrand.InjectStyles(mainPart);
        var (hRid, fRid) = DesayBrand.AttachHeaderFooter(mainPart, "D-05");
        var body = mainPart.Document.Body!;

        body.Append(DesayBrand.TitleBlock(
            "评审物料清单",
            "Desay SV · 25+ 项物料 · 按列表准备 · 责任到人",
            "D-05", "2026 年 X 月 X 日"));
        body.Append(DesayBrand.EmptyP());

        // ===== 使用说明 =====
        body.Append(DesayBrand.H1("一、使用说明"));
        body.Append(DesayBrand.Body(
            "本清单覆盖评审日及结营仪式所需的全部物料，按「场地与硬件」「评委物料」「学员物料」「电子系统」「应急备份」五大类组织。每项物料明确数量、负责方、负责人和完成情况，项目组每周例会按此清单逐项点检。"));
        body.Append(DesayBrand.Callout(
            "完成情况栏使用三档标记：■ 已完成 / ◐ 部分完成（备注差异）/ □ 未开始。评审日 T-3 前所有物料必须 ■。"));

        // ===== 类别 1：场地与硬件 =====
        body.Append(DesayBrand.H1("二、场地与硬件"));
        var siteHeaders = new[] { "序号", "物料 / 设备", "数量", "负责方", "负责人", "完成情况" };
        var siteWidths  = new[] { 600,    2600,           700,    1200,     1200,     2006     };
        var siteRows = new string[][]
        {
            new[] { "1", "评审主会场（容纳 60 人）",       "1 间",   "行政部",   "_____",   "□" },
            new[] { "2", "评委闭门评议室（容纳 12 人）",   "1 间",   "行政部",   "_____",   "□" },
            new[] { "3", "学员休息区 + 茶歇区",             "1 处",   "行政部",   "_____",   "□" },
            new[] { "4", "投影 + 大屏（4K）",               "2 套",   "IT 部",    "_____",   "□" },
            new[] { "5", "无线话筒（含备用）",              "4 支",   "IT 部",    "_____",   "□" },
            new[] { "6", "扩声系统",                        "1 套",   "IT 部",    "_____",   "□" },
            new[] { "7", "计时器（电子）",                  "2 个",   "项目组",   "_____",   "□" },
            new[] { "8", "签到指示牌 / 引导标识",          "10 个",  "项目组",   "_____",   "□" },
            new[] { "9", "主背景板（含项目主视觉）",        "1 套",   "项目组",   "_____",   "□" },
            new[] { "10", "颁奖台 + 灯光",                  "1 套",   "行政部",   "_____",   "□" }
        };
        body.Append(DesayBrand.StandardTable(siteHeaders, siteWidths, siteRows));
        body.Append(DesayBrand.EmptyP());

        // ===== 类别 2：评委物料 =====
        body.Append(DesayBrand.H1("三、评委物料"));
        var jurHeaders = new[] { "序号", "物料", "数量", "负责方", "负责人", "完成情况" };
        var jurWidths  = new[] { 600,    2600,    700,    1200,     1200,     2006     };
        var jurRows = new string[][]
        {
            new[] { "11", "评委胸牌 + 席卡",                            "12 套",   "项目组",   "_____",   "□" },
            new[] { "12", "评委资料袋（含 D-03、D-04、D-13、评分卡）", "12 袋",   "项目组",   "_____",   "□" },
            new[] { "13", "D-06 提示词评分卡（A4 打印）",                "200 份",  "项目组",   "_____",   "□" },
            new[] { "14", "D-07 工具地图评分表（A4 打印）",              "200 份",  "项目组",   "_____",   "□" },
            new[] { "15", "D-09 AI 教练技能评估表（A4 打印）",           "100 份",  "项目组",   "_____",   "□" },
            new[] { "16", "D-10 10 项课程包检查表（A4 打印）",           "100 份",  "项目组",   "_____",   "□" },
            new[] { "17", "D-11 一票否决检查表（A4 打印）",              "100 份",  "项目组",   "_____",   "□" },
            new[] { "18", "评委专用签字笔（蓝色）",                     "30 支",   "项目组",   "_____",   "□" },
            new[] { "19", "评委茶饮 + 点心",                            "—",       "行政部",   "_____",   "□" },
            new[] { "20", "评委餐食",                                    "12 份",   "行政部",   "_____",   "□" }
        };
        body.Append(DesayBrand.StandardTable(jurHeaders, jurWidths, jurRows));
        body.Append(DesayBrand.EmptyP());

        // ===== 类别 3：学员物料 =====
        body.Append(DesayBrand.H1("四、学员物料"));
        var stuRows = new string[][]
        {
            new[] { "21", "学员胸牌（按方向颜色区分）",                 "60 个",   "HRBP",     "_____",   "□" },
            new[] { "22", "D-12 评审准备自我检查表（学员人手一份）",   "60 份",   "项目组",   "_____",   "□" },
            new[] { "23", "D-13 课程评审指引（学员人手一份）",          "60 份",   "项目组",   "_____",   "□" },
            new[] { "24", "10 项课程包文档资料夹（学员自带）",          "—",       "学员",     "学员本人", "□" },
            new[] { "25", "试讲临时备份 U 盘",                          "20 个",   "项目组",   "_____",   "□" },
            new[] { "26", "学员餐食 + 茶歇",                            "—",       "行政部",   "_____",   "□" }
        };
        body.Append(DesayBrand.StandardTable(jurHeaders, jurWidths, stuRows));
        body.Append(DesayBrand.EmptyP());

        // ===== 类别 4：电子系统 =====
        body.Append(DesayBrand.H1("五、电子系统与数据"));
        var sysHeaders = new[] { "序号", "系统 / 数据", "用途", "负责方", "负责人", "完成情况" };
        var sysWidths  = new[] { 600,    2400,           1800,    1200,     1200,     1106    };
        var sysRows = new string[][]
        {
            new[] { "27", "D-08 场景化应用 PK Excel（电子）",  "现场实时计算",     "项目组",   "_____",   "□" },
            new[] { "28", "D-14 AI 陪跑数据 Excel（电子）",     "结果汇报 + 颁奖", "IT 部",    "_____",   "□" },
            new[] { "29", "D-15 成果评审得分汇总 Excel（电子）","闭门评议",         "项目组",   "_____",   "□" },
            new[] { "30", "大众评审电子打分页面（H5）",        "扫码打分",         "IT 部",    "_____",   "□" },
            new[] { "31", "D-19 评审日信息门户 HTML",           "评委 + 学员浏览",   "项目组",   "_____",   "□" },
            new[] { "32", "D-20 AI 案例视频墙 HTML",            "结营后上线",       "项目组",   "_____",   "□" },
            new[] { "33", "电子证书模板（含动态填写）",        "结营当晚发放",     "HRBP",     "_____",   "□" },
            new[] { "34", "学习地图积分对接",                  "结营当晚入账",     "HRBP",     "_____",   "□" }
        };
        body.Append(DesayBrand.StandardTable(sysHeaders, sysWidths, sysRows));
        body.Append(DesayBrand.EmptyP());

        // ===== 类别 5：应急备份 =====
        body.Append(DesayBrand.H1("六、应急备份"));
        var bakRows = new string[][]
        {
            new[] { "35", "投影备用机",                "1 台",   "IT 部",    "_____",   "□" },
            new[] { "36", "电池备用（话筒 + 计时器）", "若干",   "IT 部",    "_____",   "□" },
            new[] { "37", "评分卡空白备份",            "30 份",  "项目组",   "_____",   "□" },
            new[] { "38", "应急医疗箱",                "1 个",   "行政部",   "_____",   "□" },
            new[] { "39", "应急照明（停电备用）",     "2 个",   "行政部",   "_____",   "□" },
            new[] { "40", "现场照片 / 视频拍摄人员",   "1-2 名", "项目组",   "_____",   "□" }
        };
        body.Append(DesayBrand.StandardTable(siteHeaders, siteWidths, bakRows));
        body.Append(DesayBrand.EmptyP());

        // ===== 物料点检节点 =====
        body.Append(DesayBrand.H1("七、物料点检节点"));
        var ckHeaders = new[] { "时点", "点检范围", "负责人", "记录方式" };
        var ckWidths  = new[] { 1500,   3700,        1700,     1406      };
        var ckRows = new string[][]
        {
            new[] { "T-14 天", "电子系统全要素压测",                   "IT 部",    "压测报告" },
            new[] { "T-7 天",  "印制类物料完成情况点检",                "项目组",   "本清单更新" },
            new[] { "T-3 天",  "全要素一对一点检（含应急）",            "项目组组长", "本清单更新" },
            new[] { "T-1 天",  "彩排 + 现场布置完成确认",                "项目组 + IT", "彩排纪要" },
            new[] { "T-Day",   "评审日开始前 1 小时最终点检",            "项目组组长", "现场签字" }
        };
        body.Append(DesayBrand.StandardTable(ckHeaders, ckWidths, ckRows));
        body.Append(DesayBrand.EmptyP());

        // ===== 备注 =====
        body.Append(DesayBrand.H1("八、备注"));
        body.Append(DesayBrand.Body("一、学员自带物料只包含「自己负责的 10 项课程包文档」，其他全部由项目组准备。", firstLineIndent: false));
        body.Append(DesayBrand.Body("二、所有印制类物料必须使用本项目设计系统配色（德赛蓝 + 智能青 + 警示橙 + 安全绿）。", firstLineIndent: false));
        body.Append(DesayBrand.Body("三、评分卡印制份数按「评委数 × 内训师数 × 2 倍冗余」预估，本表给出建议下限。", firstLineIndent: false));
        body.Append(DesayBrand.Body("四、餐饮提供清真和素食选项；评委餐食与学员分餐安排。", firstLineIndent: false));

        // ===== 签字 =====
        body.Append(DesayBrand.H1("九、清单签字"));
        body.Append(DesayBrand.SignatureBlock(new[] { "项目组组长", "行政部对接人", "IT 部对接人" }));

        body.Append(DesayBrand.BuildSectionProperties(hRid, fRid));
        mainPart.Document.Save();
    }
}
