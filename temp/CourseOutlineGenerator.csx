using DocumentFormat.OpenXml;
using DocumentFormat.OpenXml.Packaging;
using DocumentFormat.OpenXml.Wordprocessing;

// =============================================================================
// Course Outline Document Generator
// 赋能职能人员——用商业画布打通业务逻辑
// =============================================================================

var outputPath = @"D:/新课开发/职业生涯和画布/赋能职能人员：用商业画布打通业务逻辑/完整课程包/成果展示/04_课程大纲详细版.docx";

using var doc = WordprocessingDocument.Create(outputPath, WordprocessingDocumentType.Document);
var mainPart = doc.AddMainDocumentPart();
mainPart.Document = new Document(new Body());
Body body = mainPart.Document.Body!;

// --- Document Defaults ---
var stylesPart = mainPart.AddNewPart<StyleDefinitionsPart>();
stylesPart.Styles = new Styles();
var styles = stylesPart.Styles!;
CreateStyles(styles);
stylesPart.Styles.Save();

// --- Page Setup ---
var sectPr = new SectionProperties();
sectPr.Append(new PageSize { Width = 11906U, Height = 16838U }); // A4
sectPr.Append(new PageMargin { Top = 1440, Bottom = 1440, Left = 1440U, Right = 1440U, Header = 720U, Footer = 720U });

// =============================================================================
// COVER PAGE
// =============================================================================
body.Append(P("赋能职能人员", "Title", center: true));
body.Append(P("用商业画布打通业务逻辑", "Subtitle", center: true));
body.Append(P(" ", "Normal"));
body.Append(P(" ", "Normal"));
body.Append(P("课程大纲详细版", "Heading2", center: true));
body.Append(P(" ", "Normal"));
body.Append(P(" ", "Normal"));
body.Append(P(" ", "Normal"));
body.Append(P("课程时长：2天（12小时）", "Normal", center: true));
body.Append(P("目标学员：国企/央企职能部门", "Normal", center: true));
body.Append(P(" ", "Normal"));
body.Append(P(" ", "Normal"));
body.Append(P("版本：1.0", "Normal", center: true));
body.Append(P("版权所有：罗宏伟", "Normal", center: true));

// Page break after cover
body.Append(P(" ", "Normal", pageBreak: true));

// =============================================================================
// TABLE OF CONTENTS
// =============================================================================
body.Append(H1("目 录"));
body.Append(P("模块一：看懂生意（3小时）", "TOCEntry"));
body.Append(P("模块二：看懂链路（3小时）", "TOCEntry"));
body.Append(P("模块三：看懂账本（3小时）", "TOCEntry"));
body.Append(P("模块四：找准位置（3小时）", "TOCEntry"));
body.Append(P("附录：物料清单", "TOCEntry"));

body.Append(P(" ", "Normal", pageBreak: true));

// =============================================================================
// COURSE OVERVIEW
// =============================================================================
body.Append(H1("课程概述"));

body.Append(H2("课程基本信息"));

body.Append(InfoTable(new[] {
    ("课程名称", "赋能职能人员——用商业画布打通业务逻辑"),
    ("目标学员", "国企/央企职能部门（人力、财务、法务、行政、采购等）"),
    ("课程时长", "2天（每天6小时，共12小时）"),
    ("核心方法论", "商业画布四模块：看懂生意、看懂链路、看懂账本、找准位置"),
    ("教学形式", "讲授+案例研讨+小组练习+行动学习"),
    ("班级规模", "25-35人/班"),
}));

body.Append(H2("课程背景与目标"));
body.Append(P("职能部门的价值长期被低估。传统观念认为，职能部门是「成本中心」，只花钱不赚钱；职能人员是「支持人员」，配合业务即可，无需理解业务逻辑。"));
body.Append(P("然而，在VUCA时代，这种定位正在被颠覆："));
body.Append(Bullet("业务环境快速变化，职能部门如果不能理解业务逻辑，只能被动响应"));
body.Append(Bullet("数字化转型要求职能人员具备「经营意识」，用商业思维优化工作"));
body.Append(Bullet("国企改革深化，职能部门需要从「执行者」转型为「价值创造者」"));
body.Append(P("本课程旨在帮助职能人员建立商业画布思维，理解业务逻辑，找到自身价值定位，提升对组织的贡献度。"));

body.Append(H2("学员收益"));
body.Append(Numbered("1", "建立商业画布思维：用商业模式视角理解企业运营"));
body.Append(Numbered("2", "看懂业务逻辑：理解价值链、核心流程、成本结构和收入来源"));
body.Append(Numbered("3", "找准职能定位：明确本职能在业务画布中的位置和价值"));
body.Append(Numbered("4", "制定行动方案：形成可落地的职能价值提升计划"));

body.Append(H2("教学方法"));
body.Append(P("本课程采用「训战结合」的教学方法："));
body.Append(Bullet("理论框架讲授（30%）：讲解商业画布四模块的核心概念和方法论"));
body.Append(Bullet("案例分析与研讨（30%）：通过真实企业案例，帮助学员理解商业逻辑"));
body.Append(Bullet("工具演练与练习（25%）：使用商业画布工具，分析本企业/本部门业务"));
body.Append(Bullet("行动计划制定（15%）：在讲师指导下，制定个人/部门的价值提升方案"));

// =============================================================================
// MODULE 1: 看懂生意
// =============================================================================
body.Append(H1("模块一：看懂生意（3小时）"));
body.Append(P("本模块帮助学员建立商业画布的基本概念，理解企业商业模式的核心要素，找到职能部门与业务的连接点。", "Normal"));

body.Append(H2("学习目标"));
body.Append(Numbered("1", "理解商业画布九要素的定义和内涵"));
body.Append(Numbered("2", "掌握商业画布的绘制方法和应用场景"));
body.Append(Numbered("3", "识别本职能与九要素的关联关系"));

body.Append(H2("时间分配"));

var module1TimeTable = TimeTable(
    new[] { "环节", "时长", "内容", "教学活动" },
    new[] {
        new[] { "导入", "20分钟", "职能部门困境引入", "案例：职能人员的「被边缘化」困境" },
        new[] { "理论讲授", "40分钟", "商业画布概述与九要素", "讲解+互动问答" },
        new[] { "工具演练", "30分钟", "商业画布绘制练习", "小组练习：绘制熟悉的业务画布" },
        new[] { "案例分析", "40分钟", "画布九要素深度解析", "案例：某企业商业画布解读" },
        new[] { "连接点研讨", "30分钟", "职能与业务的连接点", "小组讨论：财务/人力/采购的连接点" },
        new[] { "总结复盘", "20分钟", "模块总结与过渡", "学员分享+讲师点评" },
    }
);
body.Append(module1TimeTable);

body.Append(H2("详细内容"));

body.Append(H3("1.1 商业画布概述（40分钟）"));
body.Append(P("商业画布（Business Model Canvas）由Alexander Osterwalder提出，是一种用来描述企业商业模式、可视化企业价值、寻找改进方向的战略工具。本课程对传统商业画布进行了改良，形成适合职能部门应用的「职能商业画布」。"));
body.Append(P("核心概念："));
body.Append(Bullet("商业模式：企业创造、传递和获取价值的方式"));
body.Append(Bullet("画布思维：用全局视角看业务，而非孤立的职能视角"));
body.Append(Bullet("价值定位：明确「我为谁创造什么价值」"));

body.Append(H3("1.2 画布九要素解析（60分钟）"));
body.Append(InfoTable(new[] {
    ("要素", "定义", "职能视角举例"),
    ("客户细分", "企业服务的人群", "财务：内部客户（各部门）vs 外部客户（监管/股东）"),
    ("价值主张", "解决客户问题的方案", "人力：人才获取、培养、激励的综合方案"),
    ("渠道通路", "触达客户的方式", "采购：供应商开发、评估、管理全流程"),
    ("客户关系", "与客户建立的连接", "法务：日常咨询、专项服务、危机处理"),
    ("收入来源", "企业获益方式", "行政：成本中心 vs 利润中心定位"),
    ("核心资源", "实现价值主张的关键资产", "财务：专业能力、风控体系、数据资产"),
    ("关键业务", "创造价值的主要活动", "人力：招聘、培训、绩效、薪酬"),
    ("重要合作", "上下游合作伙伴", "采购：供应商战略合作生态"),
    ("成本结构", "运营付出的代价", "职能部门的资源消耗与价值产出比"),
}));

body.Append(H3("1.3 职能与业务的连接点（40分钟）"));
body.Append(P("职能部门与业务的连接点，是理解商业画布的关键。通过以下三个问题，帮助学员找到连接点："));
body.Append(Numbered("1", "谁是我们的内部客户？（客户细分）"));
body.Append(Numbered("2", "我们为他们创造什么价值？（价值主张）"));
body.Append(Numbered("3", "我们如何嵌入业务流程？（渠道通路）"));

body.Append(H2("教学物料"));
body.Append(Bullet("商业画布绘制模板（每组1份）"));
body.Append(Bullet("九要素定义卡片（每组1套）"));
body.Append(Bullet("某企业画布案例图（电子版）"));
body.Append(Bullet("连接点分析工作表（每人1份）"));

// =============================================================================
// MODULE 2: 看懂链路
// =============================================================================
body.Append(H1("模块二：看懂链路（3小时）"));
body.Append(P("本模块帮助学员理解价值链分析方法，掌握核心业务流程的识别技巧，明确职能支持如何嵌入业务流程。", "Normal"));

body.Append(H2("学习目标"));
body.Append(Numbered("1", "理解价值链分析的基本框架（波特价值链）"));
body.Append(Numbered("2", "能够识别和描述核心业务流程"));
body.Append(Numbered("3", "掌握职能支持嵌入业务的方法和技巧"));

body.Append(H2("时间分配"));

var module2TimeTable = TimeTable(
    new[] { "环节", "时长", "内容", "教学活动" },
    new[] {
        new[] { "导入", "15分钟", "职能支持的两难困境", "案例：职能部门「两头受气」的现象" },
        new[] { "理论讲授", "35分钟", "波特价值链与改良框架", "讲解+图示演示" },
        new[] { "流程识别", "40分钟", "核心业务流程绘制", "小组练习：绘制本企业核心流程" },
        new[] { "嵌入方法", "45分钟", "职能嵌入业务的方法", "案例+讨论：知名企业职能嵌入实践" },
        new[] { "实践演练", "35分钟", "本企业价值链分析", "行动学习：分析本企业价值链" },
        new[] { "总结过渡", "10分钟", "模块总结与过渡", "关键洞察回顾" },
    }
);
body.Append(module2TimeTable);

body.Append(H2("详细内容"));

body.Append(H3("2.1 价值链分析框架（35分钟）"));
body.Append(P("波特价值链将企业活动分为两类："));
body.Append(P("主要活动（直接创造价值）："));
body.Append(Bullet("进货物流：原材料入库、仓储管理"));
body.Append(Bullet("生产经营：生产制造、服务交付"));
body.Append(Bullet("出货物流：仓储、配送、订单执行"));
body.Append(Bullet("市场营销：推广、销售、品牌建设"));
body.Append(Bullet("售后服务：安装、维修、客户支持"));
body.Append(P("支持活动（辅助创造价值）："));
body.Append(Bullet("基础设施：财务、法务、行政、董事会"));
body.Append(Bullet("技术开发：研发、IT、数据分析"));
body.Append(Bullet("人力资源：招聘、培训、薪酬绩效"));
body.Append(Bullet("采购管理：供应商管理、物资采购"));

body.Append(H3("2.2 核心业务流程识别（40分钟）"));
body.Append(P("核心流程是直接连接客户、创造价值的活动序列。识别核心流程的方法："));
body.Append(Numbered("1", "客户导向：从客户视角看，哪些活动直接满足客户需求？"));
body.Append(Numbered("2", "价值创造：哪些活动是价值形成的必要环节？"));
body.Append(Numbered("3", "差异化：哪些活动是竞争优势的来源？"));
body.Append(P("常见核心流程示例："));
body.Append(Bullet("制造业：研发→采购→生产→质检→仓储→销售→服务"));
body.Append(Bullet("服务业：获客→咨询→方案→执行→交付→售后"));
body.Append(Bullet("电商：引流→浏览→下单→支付→物流→签收→评价"));

body.Append(H3("2.3 职能嵌入业务的方法（45分钟）"));
body.Append(P("职能嵌入业务的三种模式："));
body.Append(H3("模式一：流程嵌入"));
body.Append(P("将职能工作嵌入核心业务流程的关键节点，实现业务与职能的同步推进。"));
body.Append(P("案例：某科技公司财务BP（业务伙伴）模式"));
body.Append(Bullet("财务BP嵌入产品线，参与产品全生命周期管理"));
body.Append(Bullet("从立项→研发→上市→退市，财务全程参与"));
body.Append(Bullet("实现业务决策的财务支撑前置化"));

body.Append(H3("模式二：服务嵌入"));
body.Append(P("将职能服务标准化、可视化，让业务部门清晰知道何时需要何种支持。"));
body.Append(P("案例：某集团HR共享服务中心（SSC）模式"));
body.Append(Bullet("建立HR服务门户，业务部门自助查询和申请"));
body.Append(Bullet("将标准服务（入转调离、薪酬核算）流程化"));
body.Append(Bullet("非标准服务（组织发展、人才培养）专项化"));

body.Append(H3("模式三：决策嵌入"));
body.Append(P("让职能人员参与业务决策，成为决策团队的核心成员。"));
body.Append(P("案例：某上市公司法务参与投资决策"));
body.Append(Bullet("重大投资项目中，法务作为核心成员参与尽调"));
body.Append(Bullet("法务意见作为决策依据之一"));
body.Append(Bullet("风险控制从「事后审查」转为「事前参与」"));

body.Append(H2("教学物料"));
body.Append(Bullet("波特价值链分析模板（每组1份）"));
body.Append(Bullet("核心流程绘制工具（电子版）"));
body.Append(Bullet("职能嵌入案例集（PDF）"));
body.Append(Bullet("价值链分析工作表（每人1份）"));

// =============================================================================
// MODULE 3: 看懂账本
// =============================================================================
body.Append(H1("模块三：看懂账本（3小时）"));
body.Append(P("本模块帮助学员理解企业成本结构和收入来源，掌握职能价值量化的方法，建立经营意识。", "Normal"));

body.Append(H2("学习目标"));
body.Append(Numbered("1", "理解企业成本结构的构成和分析方法"));
body.Append(Numbered("2", "理解收入来源和盈利能力的关系"));
body.Append(Numbered("3", "掌握职能价值量化的思路和工具"));

body.Append(H2("时间分配"));

var module3TimeTable = TimeTable(
    new[] { "环节", "时长", "内容", "教学活动" },
    new[] {
        new[] { "导入", "15分钟", "职能部门的「账本盲区」", "案例：花了多少钱？创造了多少价值？" },
        new[] { "成本分析", "45分钟", "成本结构分析方法", "理论+演练：职能部门成本归集" },
        new[] { "收入分析", "40分钟", "收入来源与价值链条", "案例：某企业收入结构解读" },
        new[] { "价值量化", "50分钟", "职能价值量化方法", "工具演练：价值量化三步法" },
        new[] { "案例研讨", "25分钟", "职能价值量化实践", "案例：某企业HR价值量化报告" },
        new[] { "总结过渡", "5分钟", "模块总结与过渡", "关键公式回顾" },
    }
);
body.Append(module3TimeTable);

body.Append(H2("详细内容"));

body.Append(H3("3.1 成本结构分析（45分钟）"));
body.Append(P("成本结构是指企业运营过程中各项成本的构成和比例关系。分析方法："));
body.Append(Numbered("1", "成本分类：直接成本 vs 间接成本"));
body.Append(Numbered("2", "成本归集：按照业务活动或部门归集"));
body.Append(Numbered("3", "成本分析：固定成本 vs 变动成本，结构占比"));
body.Append(P("职能部门成本分析的特殊性："));
body.Append(Bullet("间接成本为主：职能部门通常不直接产生收入，成本多为分摊"));
body.Append(Bullet("难以精确归集：职能工作往往支持多个业务，难以精确分配"));
body.Append(Bullet("隐性成本：沟通成本、协调成本、等待成本常被忽略"));

body.Append(H3("3.2 收入来源分析（40分钟）"));
body.Append(P("收入来源分析帮助我们理解「钱从哪里来」，从而理解业务本质。"));
body.Append(P("收入结构分析维度："));
body.Append(Bullet("收入类型：产品收入、服务收入、平台收入"));
body.Append(Bullet("客户类型：ToB、ToC、ToG，不同客户的价值贡献"));
body.Append(Bullet("收入时段：一次性收入 vs 持续性收入"));
body.Append(Bullet("盈利能力：毛利率、净利率、各业务线贡献"));

body.Append(H3("3.3 职能价值量化（50分钟）"));
body.Append(P("职能价值量化的核心问题：职能部门花了多少钱？创造了多少价值？"));
body.Append(P("职能价值量化三步法："));

body.Append(H3("第一步：成本归集（回答「花了多少钱」）"));
body.Append(P("方法：按照作业成本法，将职能部门的工作分解为若干活动，分别归集成本。"));
body.Append(P("公式：职能成本 = 人员成本 + 运营成本 + 分摊成本"));
body.Append(P("工具：职能成本归集表"));

body.Append(H3("第二步：价值识别（回答「创造了什么价值」）"));
body.Append(P("方法：识别职能工作对业务的支撑作用，区分直接价值和间接价值。"));
body.Append(P("直接价值：可量化、可追溯的业务支撑成果"));
body.Append(Bullet("例：招聘完成率、培训合格率、风险规避金额"));
body.Append(P("间接价值：难以量化但确实存在的业务支撑成果"));
body.Append(Bullet("例：组织稳定性、员工满意度、合规保障"));

body.Append(H3("第三步：价值计量（回答「价值有多大」）"));
body.Append(P("方法：用替代指标或估算方法量化价值。"));
body.Append(P("价值计量方法："));
body.Append(Bullet("成本节约法：优化流程后节省了多少成本"));
body.Append(Bullet("风险规避法：避免了多少潜在损失"));
body.Append(Bullet("收入贡献法：对收入增长的贡献比例"));
body.Append(Bullet("效率提升法：提升了几个百分点的效率"));

body.Append(H2("教学物料"));
body.Append(Bullet("成本结构分析模板（每组1份）"));
body.Append(Bullet("价值量化三步法工具包（电子版）"));
body.Append(Bullet("职能价值量化表示例（每组1份）"));
body.Append(Bullet("HR价值量化案例（PDF）"));

// =============================================================================
// MODULE 4: 找准位置
// =============================================================================
body.Append(H1("模块四：找准位置（3小时）"));
body.Append(P("本模块帮助学员运用商业画布定位法，明确职能价值主张，制定可落地的行动方案。", "Normal"));

body.Append(H2("学习目标"));
body.Append(Numbered("1", "掌握画布定位法的应用方法"));
body.Append(Numbered("2", "能够清晰表达职能价值主张"));
body.Append(Numbered("3", "制定出本部门的价值提升行动计划"));

body.Append(H2("时间分配"));

var module4TimeTable = TimeTable(
    new[] { "环节", "时长", "内容", "教学活动" },
    new[] {
        new[] { "导入", "10分钟", "职能定位的三个层次", "模型：执行者→支持者→价值创造者" },
        new[] { "定位方法", "40分钟", "画布定位法详解", "理论+演练：绘制职能定位画布" },
        new[] { "价值主张", "35分钟", "职能价值主张设计", "工具：价值主张画布练习" },
        new[] { "行动方案", "50分钟", "行动计划制定", "行动学习：小组制定部门行动方案" },
        new[] { "汇报点评", "35分钟", "行动计划汇报", "每组5分钟汇报+点评" },
        new[] { "课程总结", "10分钟", "整体回顾与展望", "关键收获+后续跟进" },
    }
);
body.Append(module4TimeTable);

body.Append(H2("详细内容"));

body.Append(H3("4.1 画布定位法（40分钟）"));
body.Append(P("画布定位法是将商业画布应用于职能定位的方法，通过四个维度找到职能在企业中的位置。"));

body.Append(InfoTable(new[] {
    ("定位维度", "核心问题", "分析方法" },
    new[] { "价值定位", "我们为谁创造什么价值？", "客户需求+自身能力匹配" },
    new[] { "能力定位", "我们的核心竞争力是什么？", "SWOT分析+价值链定位" },
    new[] { "关系定位", "我们与业务部门的关系？", "合作伙伴模型" },
    new[] { "资源定位", "我们的核心资源是什么？", "资源能力分析" },
}));

body.Append(H3("4.2 职能价值主张（35分钟）"));
body.Append(P("价值主张是职能定位的核心回答：「我们为内部客户创造什么独特价值？」"));
body.Append(P("价值主张的四个要素："));
body.Append(Numbered("1", "目标客户：谁是我们的内部客户？他们的核心诉求是什么？"));
body.Append(Numbered("2", "价值内容：我们提供什么具体价值？（效率/成本/风险/合规）"));
body.Append(Numbered("3", "差异化：我们与过去/其他部门的差异是什么？"));
body.Append(Numbered("4", "衡量标准：如何衡量我们的价值贡献？"));
body.Append(P("好的价值主张标准："));
body.Append(Bullet("清晰：业务部门能听懂、能理解"));
body.Append(Bullet("具体：可量化、可验证"));
body.Append(Bullet("独特：与其他职能部门有差异化"));
body.Append(Bullet("可行：当前资源能力可实现"));

body.Append(H3("4.3 行动方案制定（50分钟）"));
body.Append(P("基于前三个模块的分析，制定本部门的价值提升行动方案。"));

body.Append(H3("行动方案框架"));
body.Append(P("现状分析："));
body.Append(Bullet("我们在商业画布上的当前位置"));
body.Append(Bullet("当前面临的主要挑战"));
body.Append(Bullet("已有优势和可复用资源"));
body.Append(P("目标设定："));
body.Append(Bullet("一年内要达成的3个核心目标"));
body.Append(Bullet("目标需要可量化、可追踪"));
body.Append(P("行动路径："));
body.Append(Bullet("第一阶段（第1-30天）：快速突破点"));
body.Append(Bullet("第二阶段（第31-90天）：能力建设期"));
body.Append(Bullet("第三阶段（第91-180天）：价值显现期"));
body.Append(P("资源需求："));
body.Append(Bullet("需要的支持：人员/预算/授权"));
body.Append(Bullet("需要的协作：哪些部门需要配合"));
body.Append(P("风险预案："));
body.Append(Bullet("可能遇到的阻力/障碍"));
body.Append(Bullet("应对预案"));

body.Append(H2("教学物料"));
body.Append(Bullet("职能定位画布模板（每组1份）"));
body.Append(Bullet("价值主张画布模板（每组1份）"));
body.Append(Bullet("行动方案制定模板（每组1份）"));
body.Append(Bullet("行动计划汇报模板（电子版）"));

// =============================================================================
// APPENDIX: MATERIALS LIST
// =============================================================================
body.Append(H1("附录：物料清单"));

body.Append(H2("课前准备物料"));

var preCourseTable = MaterialsTable(
    new[] { "序号", "物料名称", "规格/数量", "负责人", "备注" },
    new[] {
        new[] { "1", "学员手册", "每人1本", "会务组", "提前印刷装订" },
        new[] { "2", "商业画布模板", "每组2份", "会务组", "A3尺寸" },
        new[] { "3", "九要素卡片", "每组1套", "会务组", "打印覆膜" },
        new[] { "4", "价值链分析模板", "每组2份", "会务组", "A3尺寸" },
        new[] { "5", "行动计划模板", "每组2份", "会务组", "A3尺寸" },
        new[] { "6", "大白纸/白板", "每组1张", "会务组", "A1尺寸" },
        new[] { "7", "马克笔", "每组4色各2支", "会务组", "黑/红/蓝/绿" },
        new[] { "8", "便签纸", "每组1包", "会务组", "多色混装" },
    }
);
body.Append(preCourseTable);

body.Append(H2("讲师准备物料"));

var instructorTable = MaterialsTable(
    new[] { "序号", "物料名称", "数量", "负责人", "备注" },
    new[] {
        new[] { "1", "讲师手册", "1本", "讲师", "含完整教案" },
        new[] { "2", "PPT课件", "1套", "讲师", "U盘备份" },
        new[] { "3", "案例集", "1套", "讲师", "含讨论答案" },
        new[] { "4", "价值量化案例", "3-5个", "讲师", "PDF版本" },
        new[] { "5", "行业数据资料", "准备2-3个行业", "讲师", "用于案例对比" },
        new[] { "6", "计时器", "1个", "讲师", "控制研讨时间" },
        new[] { "7", "备用电脑", "1台", "会务组", "防止设备故障" },
    }
);
body.Append(instructorTable);

body.Append(H2("场地布置要求"));

body.Append(Bullet("课桌布置：采用鱼骨式或岛屿式，便于小组讨论"));
body.Append(Bullet("投影设备：投影仪+幕布，建议配备备用投影仪"));
body.Append(Bullet("音响设备：无线麦克风2个（讲师+学员代表）"));
body.Append(Bullet("白板/大白纸：每组配备1张"));
body.Append(Bullet("茶水间：咖啡、茶水、点心，便于课间休息"));
body.Append(Bullet("温度控制：空调温度适宜，建议22-24度"));

body.Append(H2("课后跟进物料"));

body.Append(Bullet("学员行动计划模板（电子版）：课后让学员完善并提交"));
body.Append(Bullet("课程评估问卷（电子版）：收集学员反馈"));
body.Append(Bullet("课程回访安排：课后1个月、3个月跟进回访"));
body.Append(Bullet("下次课程邀请函模板：用于持续运营"));

// =============================================================================
// FINAL: Attach section properties
// =============================================================================
body.Append(sectPr);

// =============================================================================
// HELPER METHODS
// =============================================================================

static Styles CreateStyles(Styles styles)
{
    // Title style
    var titleStyle = new Style { Type = StyleValues.Paragraph, StyleId = "Title", Default = true };
    titleStyle.Append(new StyleName { Val = "Title" });
    titleStyle.Append(new BasedOn { Val = "Normal" });
    var titlePPr = new StyleParagraphProperties();
    titlePPr.Append(new Justification { Val = JustificationValues.Center });
    titlePPr.Append(new SpacingBetweenLines { After = "160" });
    titleStyle.Append(titlePPr);
    var titleRPr = new StyleRunProperties();
    titleRPr.Append(new Bold());
    titleRPr.Append(new FontSize { Val = "56" });
    titleRPr.Append(new Color { Val = "1F3864" });
    titleStyle.Append(titleRPr);
    styles.Append(titleStyle);

    // Subtitle style
    var subtitleStyle = new Style { Type = StyleValues.Paragraph, StyleId = "Subtitle" };
    subtitleStyle.Append(new StyleName { Val = "Subtitle" });
    subtitleStyle.Append(new BasedOn { Val = "Normal" });
    var subPPr = new StyleParagraphProperties();
    subPPr.Append(new Justification { Val = JustificationValues.Center });
    subPPr.Append(new SpacingBetweenLines { After = "320" });
    subtitleStyle.Append(subPPr);
    var subRPr = new StyleRunProperties();
    subRPr.Append(new Bold());
    subRPr.Append(new FontSize { Val = "40" });
    subRPr.Append(new Color { Val = "4472C4" });
    subtitleStyle.Append(subRPr);
    styles.Append(subtitleStyle);

    // Heading1 style
    var h1Style = new Style { Type = StyleValues.Paragraph, StyleId = "Heading1" };
    h1Style.Append(new StyleName { Val = "heading 1" });
    h1Style.Append(new BasedOn { Val = "Normal" });
    h1Style.Append(new NextParagraphStyle { Val = "Normal" });
    var h1PPr = new StyleParagraphProperties();
    h1PPr.Append(new SpacingBetweenLines { Before = "480", After = "160" });
    h1PPr.Append(new KeepNext());
    h1PPr.Append(new KeepLines());
    h1PPr.Append(new OutlineLevel { Val = 0 });
    h1Style.Append(h1PPr);
    var h1RPr = new StyleRunProperties();
    h1RPr.Append(new Bold());
    h1RPr.Append(new FontSize { Val = "44" });
    h1RPr.Append(new Color { Val = "1F3864" });
    h1Style.Append(h1RPr);
    styles.Append(h1Style);

    // Heading2 style
    var h2Style = new Style { Type = StyleValues.Paragraph, StyleId = "Heading2" };
    h2Style.Append(new StyleName { Val = "heading 2" });
    h2Style.Append(new BasedOn { Val = "Normal" });
    h2Style.Append(new NextParagraphStyle { Val = "Normal" });
    var h2PPr = new StyleParagraphProperties();
    h2PPr.Append(new SpacingBetweenLines { Before = "360", After = "120" });
    h2PPr.Append(new KeepNext());
    h2PPr.Append(new OutlineLevel { Val = 1 });
    h2Style.Append(h2PPr);
    var h2RPr = new StyleRunProperties();
    h2RPr.Append(new Bold());
    h2RPr.Append(new FontSize { Val = "32" });
    h2RPr.Append(new Color { Val = "1F3864" });
    h2Style.Append(h2RPr);
    styles.Append(h2Style);

    // Heading3 style
    var h3Style = new Style { Type = StyleValues.Paragraph, StyleId = "Heading3" };
    h3Style.Append(new StyleName { Val = "heading 3" });
    h3Style.Append(new BasedOn { Val = "Normal" });
    h3Style.Append(new NextParagraphStyle { Val = "Normal" });
    var h3PPr = new StyleParagraphProperties();
    h3PPr.Append(new SpacingBetweenLines { Before = "240", After = "80" });
    h3PPr.Append(new KeepNext());
    h3PPr.Append(new OutlineLevel { Val = 2 });
    h3Style.Append(h3PPr);
    var h3RPr = new StyleRunProperties();
    h3RPr.Append(new Bold());
    h3RPr.Append(new FontSize { Val = "28" });
    h3RPr.Append(new Color { Val = "1F3864" });
    h3Style.Append(h3RPr);
    styles.Append(h3Style);

    // Normal style
    var normalStyle = new Style { Type = StyleValues.Paragraph, StyleId = "Normal", Default = true };
    normalStyle.Append(new StyleName { Val = "Normal" });
    var normalPPr = new StyleParagraphProperties();
    normalPPr.Append(new SpacingBetweenLines { After = "160", Line = "276", LineRule = LineSpacingRuleValues.Auto });
    normalStyle.Append(normalPPr);
    var normalRPr = new StyleRunProperties();
    normalRPr.Append(new FontSize { Val = "22" });
    normalRPr.Append(new Color { Val = "333333" });
    normalStyle.Append(normalRPr);
    styles.Append(normalStyle);

    // TOCEntry style
    var tocStyle = new Style { Type = StyleValues.Paragraph, StyleId = "TOCEntry" };
    tocStyle.Append(new StyleName { Val = "TOC Entry" });
    tocStyle.Append(new BasedOn { Val = "Normal" });
    var tocPPr = new StyleParagraphProperties();
    tocPPr.Append(new SpacingBetweenLines { After = "80" });
    tocPPr.Append(new Indentation { Left = "360" });
    tocStyle.Append(tocPPr);
    var tocRPr = new StyleRunProperties();
    tocRPr.Append(new FontSize { Val = "24" });
    tocStyle.Append(tocRPr);
    styles.Append(tocStyle);

    // ListParagraph style
    var listStyle = new Style { Type = StyleValues.Paragraph, StyleId = "ListParagraph" };
    listStyle.Append(new StyleName { Val = "List Paragraph" });
    listStyle.Append(new BasedOn { Val = "Normal" });
    var listPPr = new StyleParagraphProperties();
    listPPr.Append(new SpacingBetweenLines { After = "40" });
    listPPr.Append(new Indentation { Left = "360" });
    listStyle.Append(listPPr);
    var listRPr = new StyleRunProperties();
    listRPr.Append(new FontSize { Val = "22" });
    listStyle.Append(listRPr);
    styles.Append(listStyle);

    return styles;
}

static Paragraph P(string text, string styleId = "Normal", bool center = false, bool pageBreak = false)
{
    var pPr = new ParagraphProperties();
    pPr.Append(new ParagraphStyleId { Val = styleId });
    if (center) pPr.Append(new Justification { Val = JustificationValues.Center });
    if (pageBreak) pPr.Append(new PageBreakBefore());
    var para = new Paragraph();
    para.Append(pPr);
    if (!string.IsNullOrEmpty(text))
        para.Append(new Run(new Text(text)));
    return para;
}

static Paragraph H1(string text) => P(text, "Heading1", pageBreak: true);
static Paragraph H2(string text) => P(text, "Heading2");
static Paragraph H3(string text) => P(text, "Heading3");

static Paragraph Bullet(string text)
{
    var pPr = new ParagraphProperties();
    pPr.Append(new ParagraphStyleId { Val = "ListParagraph" });
    var para = new Paragraph();
    para.Append(pPr);
    para.Append(new Run(new Text("• " + text)));
    return para;
}

static Paragraph Numbered(string number, string text)
{
    var pPr = new ParagraphProperties();
    pPr.Append(new ParagraphStyleId { Val = "ListParagraph" });
    var para = new Paragraph();
    para.Append(pPr);
    para.Append(new Run(new Text(number + ". " + text)));
    return para;
}

static Table InfoTable((string label, string value)[] items)
{
    var table = new Table();
    var tblPr = new TableProperties();
    tblPr.Append(new TableWidth { Width = "5000", Type = TableWidthUnitValues.Pct });
    tblPr.Append(new TableLayout { Type = TableLayoutValues.Fixed });
    var borders = new TableBorders();
    borders.Append(new TopBorder { Val = BorderValues.Single, Size = 8U, Color = "1F3864" });
    borders.Append(new BottomBorder { Val = BorderValues.Single, Size = 8U, Color = "1F3864" });
    borders.Append(new LeftBorder { Val = BorderValues.Single, Size = 4U, Color = "BFBFBF" });
    borders.Append(new RightBorder { Val = BorderValues.Single, Size = 4U, Color = "BFBFBF" });
    borders.Append(new InsideHorizontalBorder { Val = BorderValues.Single, Size = 4U, Color = "BFBFBF" });
    borders.Append(new InsideVerticalBorder { Val = BorderValues.Single, Size = 4U, Color = "BFBFBF" });
    tblPr.Append(borders);
    tblPr.Append(new TableJustification { Val = TableRowAlignmentValues.Center });
    table.Append(tblPr);

    var grid = new TableGrid();
    grid.Append(new GridColumn { Width = "2400" });
    grid.Append(new GridColumn { Width = "7200" });
    table.Append(grid);

    foreach (var (label, value) in items)
    {
        var row = new TableRow();

        var labelCell = new TableCell();
        var labelCellPr = new TableCellProperties();
        labelCellPr.Append(new TableCellWidth { Width = "2400", Type = TableWidthUnitValues.Dxa });
        labelCellPr.Append(new Shading { Fill = "F2F2F2" });
        labelCell.Append(labelCellPr);
        var labelPara = new Paragraph();
        labelPara.Append(new ParagraphProperties(new Justification { Val = JustificationValues.Center }));
        var labelRun = new Run(new Text(label));
        labelRun.RunProperties = new RunProperties();
        labelRun.RunProperties.Append(new Bold());
        labelPara.Append(labelRun);
        labelCell.Append(labelPara);
        row.Append(labelCell);

        var valueCell = new TableCell();
        var valueCellPr = new TableCellProperties();
        valueCellPr.Append(new TableCellWidth { Width = "7200", Type = TableWidthUnitValues.Dxa });
        valueCell.Append(valueCellPr);
        valueCell.Append(new Paragraph(new Run(new Text(value))));
        row.Append(valueCell);

        table.Append(row);
    }
    return table;
}

static Table ThreeColTable((string col1, string col2, string col3)[] items)
{
    var table = new Table();
    var tblPr = new TableProperties();
    tblPr.Append(new TableWidth { Width = "5000", Type = TableWidthUnitValues.Pct });
    tblPr.Append(new TableLayout { Type = TableLayoutValues.Fixed });
    var borders = new TableBorders();
    borders.Append(new TopBorder { Val = BorderValues.Single, Size = 8U, Color = "1F3864" });
    borders.Append(new BottomBorder { Val = BorderValues.Single, Size = 8U, Color = "1F3864" });
    borders.Append(new LeftBorder { Val = BorderValues.Single, Size = 4U, Color = "BFBFBF" });
    borders.Append(new RightBorder { Val = BorderValues.Single, Size = 4U, Color = "BFBFBF" });
    borders.Append(new InsideHorizontalBorder { Val = BorderValues.Single, Size = 4U, Color = "BFBFBF" });
    borders.Append(new InsideVerticalBorder { Val = BorderValues.Single, Size = 4U, Color = "BFBFBF" });
    tblPr.Append(borders);
    table.Append(tblPr);

    var grid = new TableGrid();
    grid.Append(new GridColumn { Width = "2000" });
    grid.Append(new GridColumn { Width = "3500" });
    grid.Append(new GridColumn { Width = "4100" });
    table.Append(grid);

    // Header
    var headerRow = new TableRow();
    headerRow.Append(new TableRowProperties(new TableHeader()));
    string[] headers = { "要素", "定义", "职能视角举例" };
    int[] widths = { 2000, 3500, 4100 };
    for (int i = 0; i < 3; i++)
    {
        var cell = new TableCell();
        var cellPr = new TableCellProperties();
        cellPr.Append(new TableCellWidth { Width = widths[i].ToString(), Type = TableWidthUnitValues.Dxa });
        cellPr.Append(new Shading { Fill = "1F3864" });
        cell.Append(cellPr);
        var para = new Paragraph();
        para.Append(new ParagraphProperties(new Justification { Val = JustificationValues.Center }));
        var run = new Run(new Text(headers[i]));
        run.RunProperties = new RunProperties();
        run.RunProperties.Append(new Bold());
        run.RunProperties.Append(new Color { Val = "FFFFFF" });
        para.Append(run);
        cell.Append(para);
        headerRow.Append(cell);
    }
    table.Append(headerRow);

    foreach (var (col1, col2, col3) in items)
    {
        var row = new TableRow();
        string[] vals = { col1, col2, col3 };
        for (int i = 0; i < 3; i++)
        {
            var cell = new TableCell();
            var cellPr = new TableCellProperties();
            cellPr.Append(new TableCellWidth { Width = widths[i].ToString(), Type = TableWidthUnitValues.Dxa });
            cell.Append(cellPr);
            cell.Append(new Paragraph(new Run(new Text(vals[i]))));
            row.Append(cell);
        }
        table.Append(row);
    }
    return table;
}

static Table FourColTable((string col1, string col2, string col3, string col4)[] items)
{
    var table = new Table();
    var tblPr = new TableProperties();
    tblPr.Append(new TableWidth { Width = "5000", Type = TableWidthUnitValues.Pct });
    tblPr.Append(new TableLayout { Type = TableLayoutValues.Fixed });
    var borders = new TableBorders();
    borders.Append(new TopBorder { Val = BorderValues.Single, Size = 8U, Color = "1F3864" });
    borders.Append(new BottomBorder { Val = BorderValues.Single, Size = 8U, Color = "1F3864" });
    borders.Append(new LeftBorder { Val = BorderValues.Single, Size = 4U, Color = "BFBFBF" });
    borders.Append(new RightBorder { Val = BorderValues.Single, Size = 4U, Color = "BFBFBF" });
    borders.Append(new InsideHorizontalBorder { Val = BorderValues.Single, Size = 4U, Color = "BFBFBF" });
    borders.Append(new InsideVerticalBorder { Val = BorderValues.Single, Size = 4U, Color = "BFBFBF" });
    tblPr.Append(borders);
    table.Append(tblPr);

    var grid = new TableGrid();
    grid.Append(new GridColumn { Width = "1800" });
    grid.Append(new GridColumn { Width = "3500" });
    grid.Append(new GridColumn { Width = "2500" });
    grid.Append(new GridColumn { Width = "1800" });
    table.Append(grid);

    // Header
    var headerRow = new TableRow();
    headerRow.Append(new TableRowProperties(new TableHeader()));
    string[] headers = { "定位维度", "核心问题", "分析方法", "行动要点" };
    int[] widths = { 1800, 3500, 2500, 1800 };
    for (int i = 0; i < 4; i++)
    {
        var cell = new TableCell();
        var cellPr = new TableCellProperties();
        cellPr.Append(new TableCellWidth { Width = widths[i].ToString(), Type = TableWidthUnitValues.Dxa });
        cellPr.Append(new Shading { Fill = "1F3864" });
        cell.Append(cellPr);
        var para = new Paragraph();
        para.Append(new ParagraphProperties(new Justification { Val = JustificationValues.Center }));
        var run = new Run(new Text(headers[i]));
        run.RunProperties = new RunProperties();
        run.RunProperties.Append(new Bold());
        run.RunProperties.Append(new Color { Val = "FFFFFF" });
        para.Append(run);
        cell.Append(para);
        headerRow.Append(cell);
    }
    table.Append(headerRow);

    foreach (var (col1, col2, col3, col4) in items)
    {
        var row = new TableRow();
        string[] vals = { col1, col2, col3, col4 };
        for (int i = 0; i < 4; i++)
        {
            var cell = new TableCell();
            var cellPr = new TableCellProperties();
            cellPr.Append(new TableCellWidth { Width = widths[i].ToString(), Type = TableWidthUnitValues.Dxa });
            cell.Append(cellPr);
            cell.Append(new Paragraph(new Run(new Text(vals[i]))));
            row.Append(cell);
        }
        table.Append(row);
    }
    return table;
}

static Table TimeTable(string[] headers, string[][] rows)
{
    return GenericTable(headers, rows, new[] { 1200, 1200, 2500, 4700 });
}

static Table MaterialsTable(string[] headers, string[][] rows)
{
    return GenericTable(headers, rows, new[] { 600, 2500, 1500, 1200, 2800 });
}

static Table GenericTable(string[] headers, string[][] rows, int[] colWidths)
{
    var table = new Table();
    var tblPr = new TableProperties();
    tblPr.Append(new TableWidth { Width = "5000", Type = TableWidthUnitValues.Pct });
    tblPr.Append(new TableLayout { Type = TableLayoutValues.Fixed });
    var borders = new TableBorders();
    borders.Append(new TopBorder { Val = BorderValues.Single, Size = 8U, Color = "1F3864" });
    borders.Append(new BottomBorder { Val = BorderValues.Single, Size = 8U, Color = "1F3864" });
    borders.Append(new LeftBorder { Val = BorderValues.Single, Size = 4U, Color = "BFBFBF" });
    borders.Append(new RightBorder { Val = BorderValues.Single, Size = 4U, Color = "BFBFBF" });
    borders.Append(new InsideHorizontalBorder { Val = BorderValues.Single, Size = 4U, Color = "BFBFBF" });
    borders.Append(new InsideVerticalBorder { Val = BorderValues.Single, Size = 4U, Color = "BFBFBF" });
    tblPr.Append(borders);
    tblPr.Append(new TableJustification { Val = TableRowAlignmentValues.Center });
    table.Append(tblPr);

    var grid = new TableGrid();
    foreach (var w in colWidths)
        grid.Append(new GridColumn { Width = w.ToString() });
    table.Append(grid);

    // Header Row
    var headerRow = new TableRow();
    headerRow.Append(new TableRowProperties(new TableHeader()));
    for (int i = 0; i < headers.Length; i++)
    {
        var cell = new TableCell();
        var cellPr = new TableCellProperties();
        cellPr.Append(new TableCellWidth { Width = colWidths[i].ToString(), Type = TableWidthUnitValues.Dxa });
        cellPr.Append(new Shading { Fill = "1F3864" });
        cell.Append(cellPr);
        var para = new Paragraph();
        para.Append(new ParagraphProperties(new Justification { Val = JustificationValues.Center }));
        var run = new Run(new Text(headers[i]));
        run.RunProperties = new RunProperties();
        run.RunProperties.Append(new Bold());
        run.RunProperties.Append(new Color { Val = "FFFFFF" });
        para.Append(run);
        cell.Append(para);
        headerRow.Append(cell);
    }
    table.Append(headerRow);

    // Data Rows
    foreach (var rowData in rows)
    {
        var row = new TableRow();
        for (int i = 0; i < rowData.Length; i++)
        {
            var cell = new TableCell();
            var cellPr = new TableCellProperties();
            cellPr.Append(new TableCellWidth { Width = colWidths[i].ToString(), Type = TableWidthUnitValues.Dxa });
            cell.Append(cellPr);

            var lines = rowData[i].Split(';');
            foreach (var line in lines)
            {
                var trimmedLine = line.Trim();
                if (!string.IsNullOrEmpty(trimmedLine))
                    cell.Append(new Paragraph(new Run(new Text(trimmedLine))));
            }
            row.Append(cell);
        }
        table.Append(row);
    }
    return table;
}