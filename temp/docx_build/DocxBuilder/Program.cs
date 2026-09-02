using DocumentFormat.OpenXml;
using DocumentFormat.OpenXml.Packaging;
using DocumentFormat.OpenXml.Wordprocessing;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace DocxBuilder
{
    class Program
    {
        // Theme colors (burgundy + gold + paper)
        const string Burgundy = "8E2A2A";
        const string BurgundyDeep = "6E1F1F";
        const string Gold = "B8923E";
        const string GoldDeep = "8C6F2A";
        const string Paper = "F2EDE5";
        const string PaperDeep = "E8E0D2";
        const string Ink = "1A1A22";
        const string InkSub = "4A4A52";
        const string Rule = "D9D2C5";
        const string BurgundySoft = "F4E5E2";
        const string GoldSoft = "F4ECD8";

        static void Main(string[] args)
        {
            string outputPath = @"D:\2026年课程\顺造科技\AI\评审\02-学员指南\智能体Skill知识库交付指引.docx";
            Directory.CreateDirectory(Path.GetDirectoryName(outputPath)!);

            using (var doc = WordprocessingDocument.Create(outputPath, WordprocessingDocumentType.Document))
            {
                var mainPart = doc.AddMainDocumentPart();
                mainPart.Document = new Document();
                var body = new Body();
                mainPart.Document.AppendChild(body);

                SetupStyles(mainPart);

                // Page setup
                var sectPr = new SectionProperties(
                    new PageSize { Width = 11906, Height = 16838, Orient = PageOrientationValues.Portrait },
                    new PageMargin { Top = 1440, Right = 1440, Bottom = 1440, Left = 1440, Header = 720, Footer = 720, Gutter = 0 }
                );

                AddTitlePage(body);
                AddTableOfContents(body);

                AddHeading1(body, "第一章", "什么时候需要做\"附加项\"", "WHEN");
                AddBodyPara(body, "一个反直觉的认知：附加项不是越多越好。");
                AddCallout(body, "关键判断",
                    "看到别人做了智能体，我也做一个；看到别人做了知识库，我也做一个。结果是：每样都做了 1 个，每样都不深，评审时被问到细节就露馅。" +
                    "正确做法是：根据你的 AI 介入级别，按需选择 1-2 个附加项，做到\"评审官现场提问你能答 3 层\"的程度。");

                AddHeading2(body, "1.1 AI 介入 5 级与附加项的对应关系");
                AddTable(body,
                    headers: new[] { "级别", "业务含义", "学员交付物", "建议附加项" },
                    rows: new[] {
                        new[] { "L1", "个人提示词", "1 个 HTML + 1 个 prompt", "结构化提示词" },
                        new[] { "L2", "团队共用提示词", "1 个 HTML + 团队 prompt 模板", "结构化提示词（必做）" },
                        new[] { "L3", "多轮结构化对话", "1 个 HTML + 完整对话流", "结构化提示词 + 知识库" },
                        new[] { "L4", "工具集成", "1 个 HTML + 系统截图", "结构化提示词 + 智能体 + 知识库" },
                        new[] { "L5", "智能体自动化", "1 个 HTML + 自动化效果", "结构化提示词 + 智能体 + Skill + 知识库" }
                    },
                    colWidths: new[] { 1100, 1900, 2700, 3000 });

                AddHeading2(body, "1.2 学员选择附加项的 3 步决策法");
                AddNumberedList(body, new[] {
                    "Step 1：先看你的 AI 级别。如果课题在 L1-L2 → 只做结构化提示词。L3-L4 → 结构化提示词 + 1 个附加项。L5 → 全做。",
                    "Step 2：看你的业务重复度。每月/每周都做的业务 → 知识库必做。步骤多、走流程 → 智能体必做。跨部门可复用 → Skill 必做。",
                    "Step 3：看你的能力。不会写代码 → 先做结构化提示词 + 知识库。会用 Dify/Aily/Coze → 加做智能体。会用 Claude Code → 加做 Skill。"
                });

                AddHeading2(body, "1.3 评分权重参考");
                AddTable(body,
                    headers: new[] { "附加项", "评审加分（满分 10）", "评审官最关心" },
                    rows: new[] {
                        new[] { "结构化提示词", "0-3 分", "完整性、可复用性、可推广性" },
                        new[] { "智能体", "0-3 分", "场景适配性、可配置性、ROI" },
                        new[] { "Skill", "0-2 分", "可复用性、文档完整性、scripts 质量" },
                        new[] { "知识库", "0-2 分", "知识结构化、检索友好性、更新机制" }
                    },
                    colWidths: new[] { 2000, 2700, 4000 });

                AddQuote(body, "重点：结构化提示词是所有附加项的\"地基\"。如果你的 prompt 写得稀烂，做再多的智能体/Skill/知识库都没用——它们都基于 prompt 运转。");

                AddHeading1(body, "第二章", "结构化提示词（必备）", "PROMPT");
                AddBodyPara(body, "用业务语言讲：普通提示词是在对话框里随手打的一句话；结构化提示词是一份\"AI 角色说明书\"。" +
                    "普通提示词是一次性对话，结构化提示词是可复用的\"操作手册\"——100 次任务都按同一标准输出，团队所有人都能直接用。");

                AddHeading2(body, "2.1 LangGPT 九大要素");
                AddTable(body,
                    headers: new[] { "#", "要素", "含义", "业务化翻译" },
                    rows: new[] {
                        new[] { "1", "Role 角色", "AI 扮演谁", "\"你是谁\"——一个具体的人" },
                        new[] { "2", "Profile 画像", "角色的背景信息", "\"你有什么经验\"——10 年经验、擅长 X" },
                        new[] { "3", "Background 背景", "当前任务的具体情境", "\"现在发生了什么\"" },
                        new[] { "4", "Goals 目标", "角色要完成什么", "\"你要做什么\"——具体输出" },
                        new[] { "5", "Constraints 约束", "必须遵守的规则", "\"不能做什么\"" },
                        new[] { "6", "Skills 技能", "可以调用的能力", "\"你会什么\"" },
                        new[] { "7", "Workflow 工作流", "任务的执行步骤", "\"按什么顺序做\"" },
                        new[] { "8", "OutputFormat 输出格式", "结果的呈现形态", "\"怎么呈现\"——表格/JSON/列表" },
                        new[] { "9", "Initialization 开场白", "启动时的第一句话", "\"你第一次说什么\"" }
                    },
                    colWidths: new[] { 600, 1700, 2500, 3900 });

                AddHeading2(body, "2.2 完整模板示例");

                AddHeading3(body, "场景 1：HR 招聘邀请邮件生成器");
                AddCodeBlock(body, @"# Role 角色
你是一位资深 HR 招聘专员，专注于技术岗位招聘。

# Profile 画像
- 10 年互联网公司 HR 经验
- 熟悉技术岗位能力模型
- 沟通风格：专业但不生硬

# Background 背景
- 公司：顺造科技（小米生态链，清洁电器）
- 当前任务：为通过初筛的候选人撰写面试邀请邮件
- 输入：候选人姓名、应聘岗位、面试时间、面试官姓名

# Goals 目标
1. 输出 1 封面试邀请邮件
2. 提供 3 个版本供选择：正式版 / 简洁版 / 亲切版
3. 邮件字数控制在 150-250 字

# Constraints 约束
- 不透露具体薪资范围
- 不使用 AI 痕迹明显的词汇
- 称呼统一使用""您好""+ 姓
- 必须包含：面试时间、地点、面试官、联系方式
- 落款统一为""顺造科技 HR 团队""

# Skills 技能
- 中文邮件撰写
- 多版本内容生成

# Workflow 工作流
1. 接收输入参数
2. 构思 3 个不同语气的版本
3. 每个版本独立撰写
4. 输出时附版本说明

# OutputFormat 输出格式
## 正式版
[邮件正文]
## 简洁版
[邮件正文]
## 亲切版
[邮件正文]

# Initialization 开场白
""请提供候选人姓名、应聘岗位、面试时间和面试官姓名，
我将为您生成 3 个版本的邀请邮件。""");

                AddHeading3(body, "场景 2：财务报销单初审");
                AddCodeBlock(body, @"# Role 角色
你是一位严谨的财务初审专员。

# Profile 画像
- 8 年企业财务经验
- 熟悉小米顺造差旅和业务招待标准
- 审核风格：细致、严格、就事论事

# Background 背景
- 公司：顺造科技
- 输入：报销单 Excel（含金额、类别、发票号、说明）

# Goals 目标
1. 标记所有不合规条目
2. 计算合规总额和不合规总额
3. 输出审核报告

# Constraints 约束
- 餐饮单次超 500 元标""待复核""
- 出租车票必须连号，缺号标""异常""
- 差旅住宿单晚超 800 元标""超标""
- 发票号重复标""疑似重复""

# OutputFormat 输出格式
| 行号 | 异常类型 | 具体说明 | 建议处理 |
合计：合规 X 元，不合规 Y 元");

                AddHeading3(body, "场景 3：客户回访分类");
                AddCodeBlock(body, @"# Role 角色
你是一位资深的客户成功经理。

# Profile 画像
- 7 年 B2B 客户成功经验
- 服务过 200+ 制造业客户
- 分析风格：客观、有洞察

# Goals 目标
1. 将每条回访记录分类到 5 类之一
2. 流失风险条目额外标注预警等级（高/中/低）
3. 提取本月 3 个最突出的客户声音

# Constraints 约束
- 分类必须基于记录内容，不臆测
- 流失风险等级判断需提供 1 句依据
- 突出声音每条不超过 30 字

# OutputFormat 输出格式
## 分类汇总
| 类别 | 数量 | 占比 |
## 流失风险列表
| 客户名 | 等级 | 依据 |
## 三大突出声音
1. ...
2. ...
3. ...");

                AddHeading3(body, "场景 4：内容合规初审");
                AddCodeBlock(body, @"# Role 角色
你是一位严格的内容合规审核员。

# Profile 画像
- 5 年互联网内容审核经验
- 熟悉《广告法》《互联网广告管理办法》

# Goals 目标
1. 标记所有违规词
2. 提供合规替换建议
3. 给出合规评分（0-100）

# Constraints 约束
- 极限词（最佳、第一、唯一）一律标""高风险""
- 医疗功效暗示（治疗、根治）一律标""高风险""
- 数据无出处标""待补充""

# OutputFormat 输出格式
## 整体评分：[X]/100
## 违规清单
| 位置 | 原文 | 风险等级 | 替换建议 |
## 修改后版本
[完整替换后文案]");

                AddHeading3(body, "场景 5：周报生成助手");
                AddCodeBlock(body, @"# Role 角色
你是一位效率教练，擅长把零散工作记录整理成结构化周报。

# Profile 画像
- 擅长将口语化表达转化为专业书面语
- 注重""成果导向""和""数据支撑""

# Goals 目标
1. 按""本周完成 / 进行中 / 下周计划 / 需支持""4 段输出
2. 每段 3-5 个 bullet
3. 关键成果必须配数字

# Constraints 约束
- 删除重复表述
- 删除无意义口水话
- 口语转书面（""搞了个会"" → ""组织跨部门会议""）

# OutputFormat 输出格式
## 本周完成
- [成果 1（含数字）]
## 进行中
- [事项 1（预计完成时间）]
## 下周计划
- [计划 1]
## 需支持
- [障碍 1 + 需要的帮助]");

                AddHeading2(body, "2.3 评分点：评审官看什么");
                AddTable(body,
                    headers: new[] { "评分维度", "满分", "看什么", "怎么拿满分" },
                    rows: new[] {
                        new[] { "完整性", "30", "9 大要素是否齐全", "缺 1 个扣 5 分，缺 3 个不及格" },
                        new[] { "可复用性", "30", "换人/换场景能否直接用", "必须用 [变量] 占位符，参数化输入" },
                        new[] { "可推广性", "20", "跨部门/跨公司能否复用", "业务逻辑抽象到位，不绑定特定公司" },
                        new[] { "可读性", "20", "排版是否清晰", "Markdown 分段、表格、列表分明" }
                    },
                    colWidths: new[] { 1500, 800, 2700, 3700 });

                AddHeading1(body, "第三章", "智能体（可选 · L4+）", "AGENT");
                AddBodyPara(body, "智能体 = AI 员工。普通 AI 对话是顾问（你问它才答），智能体是员工（你安排好工作，它自己跑）。" +
                    "Dify / 飞书 Aily / Coze 是雇员工的公司。");

                AddHeading2(body, "3.1 智能体的 5 个组成要素");
                AddTable(body,
                    headers: new[] { "要素", "类比", "业务化解释" },
                    rows: new[] {
                        new[] { "Role 角色", "岗位说明书", "AI 员工是谁、做什么、做到什么标准" },
                        new[] { "Tools 工具", "办公设备", "它能调什么——查数据库、发邮件、读 PDF" },
                        new[] { "Knowledge 知识库", "内部资料库", "它知道什么——公司制度、行业规范、历史案例" },
                        new[] { "Memory 记忆", "工作经验", "它记得什么——历史对话、用户偏好" },
                        new[] { "Trigger 触发器", "闹钟", "什么时候自动启动——定时、邮件到达、表单提交" }
                    },
                    colWidths: new[] { 2000, 2000, 4700 });

                AddHeading2(body, "3.2 在 Dify / 飞书 Aily 上怎么搭");

                AddHeading3(body, "3.2.1 Dify 搭建步骤（5 步上手）");
                AddNumberedList(body, new[] {
                    "Step 1：注册 Dify 账号（dify.ai，国内有 SaaS 版）",
                    "Step 2：创建\"工作室\"，类型选 Chatflow（多轮对话型）或 Workflow（流程自动化型）",
                    "Step 3：编排工作流：用户输入 → 关键词提取 → 知识库检索 → LLM 处理 → 输出结果",
                    "Step 4：配置 LLM（模型选 MiniMax-M3，Temperature 0.3，Max Tokens 2000）",
                    "Step 5：发布到飞书机器人或网页"
                });

                AddHeading3(body, "3.2.2 飞书 Aily 搭建步骤");
                AddNumberedList(body, new[] {
                    "Step 1：进入飞书 Aily 后台（aily.feishu.cn）",
                    "Step 2：创建智能体 → 选择\"自定义智能体\"",
                    "Step 3：配置能力（多维表工具、知识库）",
                    "Step 4：编写 Prompt（直接复用第二章的结构化提示词）",
                    "Step 5：发布到飞书群机器人"
                });

                AddHeading2(body, "3.3 演示视频脚本（3 分钟）");
                AddTable(body,
                    headers: new[] { "时间", "镜头", "解说词" },
                    rows: new[] {
                        new[] { "0:00-0:30", "全屏展示智能体配置页", "这是我在 Dify 上搭建的助手，基于 MiniMax-M3 模型" },
                        new[] { "0:30-1:00", "滚动到工作流编排", "工作流包含 5 个节点：输入、提取、检索、处理、输出" },
                        new[] { "1:00-2:00", "切到对话框发送测试问题", "现在我模拟一个真实场景，发送数据" },
                        new[] { "2:00-2:30", "滚动到输出结果", "10 秒后，AI 给出结果" },
                        new[] { "2:30-3:00", "全屏 ROI 对比", "改造前 8 小时，改造后 2.5 小时，节省 75%" }
                    },
                    colWidths: new[] { 1500, 2700, 4500 });

                AddHeading2(body, "3.4 评分点");
                AddTable(body,
                    headers: new[] { "评分维度", "满分", "看什么" },
                    rows: new[] {
                        new[] { "场景适配性", "30", "智能体解决的痛点是否真实、具体" },
                        new[] { "可配置性", "25", "其他人能否按文档复制你的智能体" },
                        new[] { "ROI", "25", "时间/质量/成本的实际改善（必须有数字）" },
                        new[] { "演示完整性", "20", "录屏是否清晰、流畅、有故事性" }
                    },
                    colWidths: new[] { 1800, 900, 6000 });

                AddHeading1(body, "第四章", "Skill（可选 · L4+）", "SKILL");
                AddBodyPara(body, "Skill = 一次配好，AI 反复用的\"操作手册包\"。普通提示词每次都要重新打，Skill 写好后以后任何时候只要给 AI 输入文件，它就按手册跑流程。" +
                    "类比：普通提示词 = 每次口头交代任务；Skill = 给 AI 写岗位 SOP。");

                AddHeading2(body, "4.1 Skill 的 3 个组成要素");
                AddTable(body,
                    headers: new[] { "要素", "是什么", "类比" },
                    rows: new[] {
                        new[] { "SKILL.md", "Markdown 格式的\"AI 操作手册\"", "岗位 SOP" },
                        new[] { "examples/", "输入输出示例文件", "案例库" },
                        new[] { "scripts/", "可执行的代码脚本", "工具箱" }
                    },
                    colWidths: new[] { 2000, 4200, 2500 });
                AddBodyPara(body, "学员可以简化：只做 SKILL.md + 1-2 个 examples，scripts 可选。");

                AddHeading2(body, "4.2 SKILL.md 模板（简化版 · 学员友好）");
                AddCodeBlock(body, @"---
name: your-skill-name
description: ""用一句话描述 Skill 的功能 + 触发词。""
---

# 你的 Skill 名称

## 概述
[2-3 句话说清楚这个 Skill 解决什么问题]

**输入：** [列出需要的输入文件或参数]
**输出：** [列出最终交付物]
**耗时：** [预计处理时间]

---

## 输入文件规格

| 文件名 | 必填 | 内容 |
|--------|------|------|
| input_01_xxx.md | ✅ | 描述 |
| input_02_xxx.xlsx | ✅ | 描述 |

---

## 执行步骤

### Step 0：准备输入文件
[告诉用户怎么准备]

### Step 1：让 AI 读取本 SKILL.md
对 AI 说：""请使用 [skill-name] skill，输入文件在 [你的目录]""

### Step 2：AI 解析输入
[说明 AI 会做什么]

### Step 3：AI 逐项处理
[说明处理逻辑]

### Step 4：输出结果
[说明输出文件位置和命名规则]

---

## 输出规格

| 项目 | 规格 |
|------|------|
| 文件格式 | .docx / .xlsx / .html |
| 文件名 | [命名规则] |
| 字数/行数 | [规模] |

---

## 适用场景举例

| 场景 | 描述 |
|------|------|
| 场景 1 | ... |
| 场景 2 | ... |");

                AddHeading2(body, "4.3 评分点");
                AddTable(body,
                    headers: new[] { "评分维度", "满分", "看什么" },
                    rows: new[] {
                        new[] { "可复用性", "35", "换部门/换业务能否 0 改动直接用" },
                        new[] { "文档完整性", "30", "SKILL.md + examples + scripts 是否齐全" },
                        new[] { "scripts 质量", "20", "脚本可执行、有错误处理、有示例输出" },
                        new[] { "设计美学", "15", "文档排版、命名规范、可读性" }
                    },
                    colWidths: new[] { 1800, 900, 6000 });

                AddHeading1(body, "第五章", "知识库（可选 · L4+）", "KNOWLEDGE");
                AddBodyPara(body, "知识库 = 团队的\"集体记忆\"。普通文档散落在个人电脑、邮件、聊天记录中，知识库把\"经验\"变成\"可检索、可复用、可继承\"的资产。" +
                    "类比：普通文档 = 个人日记（自己看得懂）；知识库 = 公司 wiki（团队都能查）。");

                AddHeading2(body, "5.1 知识库的 4 个核心特征");
                AddTable(body,
                    headers: new[] { "特征", "含义", "业务化解释" },
                    rows: new[] {
                        new[] { "结构化", "有清晰分类", "像图书馆——按主题/部门/时间分" },
                        new[] { "可检索", "输入关键词能找到", "像 Google——输入 1 句话能定位" },
                        new[] { "可更新", "有版本管理", "像 Git——谁改的、改了什么、何时改的" },
                        new[] { "可继承", "新人快速上手", "像教科书——换人来用也能看懂" }
                    },
                    colWidths: new[] { 1500, 2400, 4800 });

                AddHeading2(body, "5.2 在飞书多维表上建（最快上手）");
                AddTable(body,
                    headers: new[] { "字段名", "类型", "必填", "说明" },
                    rows: new[] {
                        new[] { "标题", "单行文本", "✅", "条目名（动词 + 对象 + 场景）" },
                        new[] { "分类", "单选", "✅", "流程/制度/案例/工具/问题" },
                        new[] { "适用场景", "多选", "✅", "招聘/财务/HR/IT/..." },
                        new[] { "核心要点", "多行文本", "✅", "关键经验或结论" },
                        new[] { "关联流程", "关联记录", "❌", "链接到具体流程" },
                        new[] { "创建人", "人员", "✅", "谁沉淀的" },
                        new[] { "创建时间", "日期", "✅", "—" },
                        new[] { "最近更新", "日期", "✅", "—" },
                        new[] { "标签", "多选", "❌", "自定义标签" },
                        new[] { "状态", "单选", "✅", "草稿/已审核/已发布/已废弃" }
                    },
                    colWidths: new[] { 1500, 1300, 800, 5100 });

                AddHeading2(body, "5.3 评分点");
                AddTable(body,
                    headers: new[] { "评分维度", "满分", "看什么" },
                    rows: new[] {
                        new[] { "知识结构化", "35", "分类是否清晰、字段是否完整" },
                        new[] { "检索友好性", "25", "标题是否含关键词、是否有标签" },
                        new[] { "更新机制", "20", "是否有版本管理、是否有定期 review" },
                        new[] { "可推广性", "20", "跨部门能否复用" }
                    },
                    colWidths: new[] { 1800, 900, 6000 });

                AddHeading1(body, "第六章", "交付清单与自检", "CHECKLIST");

                AddHeading2(body, "6.1 交付清单总览");
                AddBodyPara(body, "所有学员必交件：");
                AddBulletList(body, new[] {
                    "业务流程手册（Word，由其他 agent 负责）",
                    "HTML 可视化（A3 海报 + 长文档两套，由本指引指导）",
                    "10 分钟路演逐字稿（由其他 agent 负责）",
                    "Q&A 应对（由其他 agent 负责）"
                });

                AddBodyPara(body, "按 AI 级别附加件：");
                AddTable(body,
                    headers: new[] { "AI 级别", "附加件 1", "附加件 2", "附加件 3" },
                    rows: new[] {
                        new[] { "L1-L2", "结构化提示词", "—", "—" },
                        new[] { "L3", "结构化提示词", "知识库（推荐）", "—" },
                        new[] { "L4", "结构化提示词", "智能体", "知识库" },
                        new[] { "L5", "结构化提示词", "智能体", "Skill + 知识库" }
                    },
                    colWidths: new[] { 1500, 2400, 2400, 2400 });

                AddHeading2(body, "6.2 评审当天的\"演示\"清单");
                AddTable(body,
                    headers: new[] { "附加项", "推荐演示形式", "理由" },
                    rows: new[] {
                        new[] { "结构化提示词", "现场直接打开对话框跑一遍", "现场真实感最强" },
                        new[] { "智能体", "提前录 3 分钟视频", "现场网络不稳定" },
                        new[] { "Skill", "展示 SKILL.md + 跑 1 个示例", "让评审官看到可复用性" },
                        new[] { "知识库", "截图 + 现场查询演示", "视觉冲击力" }
                    },
                    colWidths: new[] { 1800, 3500, 3400 });

                AddHeading2(body, "6.3 现场被问倒的 3 个高频问题");

                AddHeading3(body, "Q1: 你这个 prompt 在别的业务能直接用吗？");
                AddBodyPara(body, "A 模板：能。这个 prompt 的核心是 [X 个变量]，[变量 1]=[业务对象]，[变量 2]=[流程角色]。换到客服场景，把 [变量 1] 改成'客户问题'，[变量 2] 改成'客服专员'，整个逻辑就迁移过去了。");

                AddHeading3(body, "Q2: 你的智能体出错怎么办？");
                AddBodyPara(body, "A 模板：我设置了 3 道防线：① 关键词匹配，命中预设规则直接调用；② 知识库检索，找不到时返回 fallback 答案；③ 异常上报，置信度低于 0.6 时转人工。");

                AddHeading3(body, "Q3: 知识库怎么保证不过时？");
                AddBodyPara(body, "A 模板：我们设了 3 个机制：① 每条都有'最近更新'字段，>90 天自动标黄提醒；② 每月 1 号部门 review，过时条目标'已废弃'；③ 重大变化触发全员通知。");

                AddQuote(body, "附加项的本质不是\"多做几样\"，而是\"把一件事做透\"。L1-L2 学员把 1 个 prompt 打磨到团队 5 人能直接用，比做 5 个智能体强 10 倍。" +
                    "评审官最反感的不是\"做得少\"，是\"看起来做得多但一问就崩\"。宁可少做 1 个，做深 1 个。");

                AddHeading1(body, "附录 A", "完整 SKILL.md 模板", "APPENDIX");
                AddCodeBlock(body, @"---
name: skill-name
description: ""用 1-2 句话说明 Skill 的功能 + 触发词。""
---

# Skill 中文名

## 概述
[2-3 句话说清楚：解决什么问题、输入什么、输出什么、预计耗时]

**输入：** [列出 1-3 个输入文件]
**输出：** [列出最终交付物]
**耗时：** [分钟/小时]

---

## 依赖安装

[列出脚本依赖]

---

## 输入文件规格

| 文件名（模糊匹配） | 必填 | 内容 |
|---|---|---|
| `01_xxx.md` | ✅ | 描述 |
| `02_xxx.xlsx` | ✅ | 描述 |
| `03_xxx.md` | ❌ | 描述 |

---

## 执行步骤（4 步）

### Step 0：准备输入文件
[具体怎么准备，文件放哪里]

### Step 1：让 Claude 读取本 SKILL.md
对 Claude 说：""请使用 [skill-name] skill，输入文件在 [目录]""

### Step 2：Claude 解析输入
[说明解析逻辑]

### Step 3：Claude 逐项处理
[说明处理流程]

### Step 4：输出结果
[说明输出位置和命名]

---

## 输出规格

| 项目 | 规格 |
|---|---|
| 文件格式 | .docx / .xlsx / .html |
| 文件名 | [命名规则] |
| 规模 | [字数/行数] |

---

## 适用场景举例

| 场景 | 描述 |
|---|---|
| 场景 1 | ... |
| 场景 2 | ... |

---

## 注意事项
- [坑 1 + 怎么避免]
- [坑 2 + 怎么避免]");

                AddHeading1(body, "附录 B", "完整智能体配置说明模板", "APPENDIX");
                AddBodyPara(body, "学员交付智能体时，需附一份配置说明文档（10 节），让评审官知道你的智能体怎么搭的、能做什么、效果如何。");
                AddTable(body,
                    headers: new[] { "节", "标题", "内容要点" },
                    rows: new[] {
                        new[] { "1", "智能体基本信息", "名称、平台、URL、维护人、启用时间" },
                        new[] { "2", "解决的业务问题", "痛点描述 + 目标（具体场景 + 数字 + 后果）" },
                        new[] { "3", "角色与提示词", "完整粘贴结构化提示词" },
                        new[] { "4", "工作流设计", "截图或文字描述工作流节点" },
                        new[] { "5", "工具与知识库", "列出每个工具和知识库的名称、用途" },
                        new[] { "6", "测试用例", "至少 3 个测试用例，含输入/预期/实际/通过" },
                        new[] { "7", "ROI 评估", "改造前 vs 改造后的时间/质量/成本" },
                        new[] { "8", "局限性与风险", "列出 2-3 个风险 + 应对方案" },
                        new[] { "9", "后续优化计划", "优化项 + 时间" },
                        new[] { "10", "演示视频", "3 分钟录屏文件路径" }
                    },
                    colWidths: new[] { 800, 2400, 5500 });

                AddHeading1(body, "附录 C", "完整知识库条目模板", "APPENDIX");

                AddHeading2(body, "C.1 单条知识的标准结构");
                AddCodeBlock(body, @"## 标题：[动词 + 对象 + 场景]
[例：批量筛选简历的标准操作流程]

### 分类
流程 / 制度 / 案例 / 工具 / 问题

### 适用场景
- 场景 1：[具体描述]
- 场景 2：[具体描述]

### 核心要点
1. 要点 1：[关键经验或结论]
2. 要点 2：[关键经验或结论]
3. 要点 3：[关键经验或结论]

### 关键数据
- 关键数字 1：[数字 + 单位 + 时间]
- 关键数字 2：[数字 + 单位 + 时间]

### 关联资源
- 关联流程：[链接]
- 关联文档：[链接]
- 关联人员：[姓名]

### 操作步骤
1. 步骤 1：...
2. 步骤 2：...
3. 步骤 3：...

### 常见问题
- Q：[问题]
  A：[答案]

### 创建信息
- 创建人：[姓名]
- 创建时间：YYYY-MM-DD
- 最近更新：YYYY-MM-DD
- 状态：草稿 / 已审核 / 已发布 / 已废弃
- 标签：#标签1 #标签2");

                AddHeading2(body, "C.2 真实场景示例：3 条知识条目");

                AddHeading3(body, "条目 1：批量筛选简历的标准操作流程");
                AddTable(body,
                    headers: new[] { "字段", "内容" },
                    rows: new[] {
                        new[] { "分类", "流程" },
                        new[] { "适用场景", "招聘高峰期（月度集中、校招），简历量 ≥ 100 份/批次，技术岗" },
                        new[] { "核心要点", "① AI 批量评分筛选前 80% ② 人工只看 Top 15 ③ 评分标准文档化" },
                        new[] { "关键数据", "处理 240 份简历：8h → 2.5h（节省 75%）；候选遗漏率：10-15% → <1%" },
                        new[] { "关联资源", "AI-handbook skill《招聘流程升级》、评分标准 v2.3、HR 小王" },
                        new[] { "创建信息", "HR 小王 / 2026-04-15 / 已发布 / #招聘 #AI评分 #流程" }
                    },
                    colWidths: new[] { 1700, 7000 });

                AddHeading3(body, "条目 2：报销单初审的常见异常类型");
                AddTable(body,
                    headers: new[] { "字段", "内容" },
                    rows: new[] {
                        new[] { "分类", "问题" },
                        new[] { "适用场景", "财务初审环节，所有员工的月度报销" },
                        new[] { "核心要点", "① 8 类异常按风险等级分 ② 高风险 100% 退回 ③ Top 3 反馈业务部门" },
                        new[] { "关键数据", "月均 300+ 单，异常率 18%，Top 3：发票连号缺失 35%、餐饮超标 22%、重复 15%" },
                        new[] { "创建信息", "财务小李 / 2026-05-10 / 已发布 / #财务 #报销 #异常" }
                    },
                    colWidths: new[] { 1700, 7000 });

                AddHeading3(body, "条目 3：客户回访分类的标签体系");
                AddTable(body,
                    headers: new[] { "字段", "内容" },
                    rows: new[] {
                        new[] { "分类", "制度" },
                        new[] { "适用场景", "月度客户回访、用户反馈分析、客服质检" },
                        new[] { "核心要点", "① 5 类标签（赞扬/咨询/投诉/建议/流失）② 流失风险分 3 级 ③ AI + 人工抽检 10%" },
                        new[] { "关键数据", "月均 800+ 条，分类准确率 92%，流失风险 5%/15%/30%" },
                        new[] { "创建信息", "客服主管小张 / 2026-03-20 / 已发布 / #客服 #分类 #标签体系" }
                    },
                    colWidths: new[] { 1700, 7000 });

                AddHeading1(body, "结语", "写给学员的话", "EPILOGUE");
                AddQuote(body, "附加项的本质不是\"多做几样\"，而是\"把一件事做透\"。评审官最反感的不是\"做得少\"，是\"看起来做得多但一问就崩\"。宁可少做 1 个，做深 1 个。");

                AddBodyPara(body, "祝你做出有灵魂的 AI 项目成果。");
                AddBodyPara(body, "—— 顺造科技 AI 项目组 · 2026.06");

                body.AppendChild(sectPr);
                mainPart.Document.Save();
                Console.WriteLine($"OK Document created: {outputPath}");
            }
        }

        // ==================== STYLE SETUP ====================
        static void SetupStyles(MainDocumentPart mainPart)
        {
            var stylesPart = mainPart.AddNewPart<StyleDefinitionsPart>();
            var styles = new Styles();

            styles.DocDefaults = new DocDefaults(
                new RunPropertiesDefault(
                    new RunPropertiesBaseStyle(
                        new RunFonts { Ascii = "Calibri", HighAnsi = "Calibri", EastAsia = "Microsoft YaHei", ComplexScript = "Arial" },
                        new FontSize { Val = "22" },
                        new FontSizeComplexScript { Val = "22" }
                    )
                ),
                new ParagraphPropertiesDefault(
                    new ParagraphPropertiesBaseStyle(
                        new SpacingBetweenLines { After = "160", Line = "360", LineRule = LineSpacingRuleValues.Auto }
                    )
                )
            );

            styles.AppendChild(new Style(
                new StyleName { Val = "Normal" },
                new PrimaryStyle()
            )
            {
                Type = StyleValues.Paragraph,
                StyleId = "Normal",
                Default = true,
                StyleParagraphProperties = new StyleParagraphProperties(
                    new SpacingBetweenLines { After = "120", Line = "360", LineRule = LineSpacingRuleValues.Auto }
                ),
                StyleRunProperties = new StyleRunProperties(
                    new RunFonts { Ascii = "Calibri", HighAnsi = "Calibri", EastAsia = "Microsoft YaHei" },
                    new FontSize { Val = "22" }
                )
            });

            styles.AppendChild(new Style(
                new StyleName { Val = "heading 1" },
                new BasedOn { Val = "Normal" },
                new NextParagraphStyle { Val = "Normal" },
                new UIPriority { Val = 9 },
                new PrimaryStyle()
            )
            {
                Type = StyleValues.Paragraph,
                StyleId = "Heading1",
                StyleParagraphProperties = new StyleParagraphProperties(
                    new SpacingBetweenLines { Before = "600", After = "240", Line = "360", LineRule = LineSpacingRuleValues.Auto },
                    new OutlineLevel { Val = 0 }
                ),
                StyleRunProperties = new StyleRunProperties(
                    new RunFonts { Ascii = "Cambria", HighAnsi = "Cambria", EastAsia = "Microsoft YaHei" },
                    new Bold(),
                    new Color { Val = Burgundy },
                    new FontSize { Val = "44" }
                )
            });

            styles.AppendChild(new Style(
                new StyleName { Val = "heading 2" },
                new BasedOn { Val = "Normal" },
                new NextParagraphStyle { Val = "Normal" },
                new UIPriority { Val = 9 },
                new PrimaryStyle()
            )
            {
                Type = StyleValues.Paragraph,
                StyleId = "Heading2",
                StyleParagraphProperties = new StyleParagraphProperties(
                    new SpacingBetweenLines { Before = "400", After = "160", Line = "360", LineRule = LineSpacingRuleValues.Auto },
                    new OutlineLevel { Val = 1 }
                ),
                StyleRunProperties = new StyleRunProperties(
                    new RunFonts { Ascii = "Cambria", HighAnsi = "Cambria", EastAsia = "Microsoft YaHei" },
                    new Bold(),
                    new Color { Val = Burgundy },
                    new FontSize { Val = "32" }
                )
            });

            styles.AppendChild(new Style(
                new StyleName { Val = "heading 3" },
                new BasedOn { Val = "Normal" },
                new NextParagraphStyle { Val = "Normal" },
                new UIPriority { Val = 9 },
                new PrimaryStyle()
            )
            {
                Type = StyleValues.Paragraph,
                StyleId = "Heading3",
                StyleParagraphProperties = new StyleParagraphProperties(
                    new SpacingBetweenLines { Before = "240", After = "120", Line = "360", LineRule = LineSpacingRuleValues.Auto },
                    new OutlineLevel { Val = 2 }
                ),
                StyleRunProperties = new StyleRunProperties(
                    new RunFonts { Ascii = "Cambria", HighAnsi = "Cambria", EastAsia = "Microsoft YaHei" },
                    new Bold(),
                    new Color { Val = BurgundyDeep },
                    new FontSize { Val = "26" }
                )
            });

            styles.AppendChild(new Style(
                new StyleName { Val = "Code" },
                new BasedOn { Val = "Normal" },
                new PrimaryStyle()
            )
            {
                Type = StyleValues.Paragraph,
                StyleId = "CodeStyle",
                StyleParagraphProperties = new StyleParagraphProperties(
                    new SpacingBetweenLines { Before = "120", After = "120", Line = "300", LineRule = LineSpacingRuleValues.Auto },
                    new Shading { Val = ShadingPatternValues.Clear, Color = "auto", Fill = "1A1A22" },
                    new Indentation { Left = "200", Right = "200" }
                ),
                StyleRunProperties = new StyleRunProperties(
                    new RunFonts { Ascii = "Consolas", HighAnsi = "Consolas", EastAsia = "Microsoft YaHei" },
                    new Color { Val = "E8E2D2" },
                    new FontSize { Val = "18" }
                )
            });

            styles.AppendChild(new Style(
                new StyleName { Val = "Quote" },
                new BasedOn { Val = "Normal" },
                new PrimaryStyle()
            )
            {
                Type = StyleValues.Paragraph,
                StyleId = "QuoteStyle",
                StyleParagraphProperties = new StyleParagraphProperties(
                    new SpacingBetweenLines { Before = "240", After = "240", Line = "360", LineRule = LineSpacingRuleValues.Auto },
                    new Shading { Val = ShadingPatternValues.Clear, Color = "auto", Fill = BurgundySoft },
                    new ParagraphBorders(
                        new LeftBorder { Val = BorderValues.Single, Size = 24, Color = Burgundy }
                    ),
                    new Indentation { Left = "200", Right = "200" }
                ),
                StyleRunProperties = new StyleRunProperties(
                    new RunFonts { Ascii = "Cambria", HighAnsi = "Cambria", EastAsia = "Microsoft YaHei" },
                    new Italic(),
                    new Color { Val = Ink },
                    new FontSize { Val = "24" }
                )
            });

            stylesPart.Styles = styles;
        }

        // ==================== HELPERS ====================
        static Paragraph MakePara(string? styleId = null, params OpenXmlElement[] runs)
        {
            var p = new Paragraph();
            if (styleId != null)
            {
                p.AppendChild(new ParagraphProperties(new ParagraphStyleId { Val = styleId }));
            }
            foreach (var r in runs) p.AppendChild(r);
            return p;
        }

        static Run MakeRun(string text, string? color = null, bool bold = false, bool italic = false,
            string? sizeHalfPt = null, string? fontAscii = null)
        {
            var run = new Run();
            var rpr = new RunProperties();
            if (color != null) rpr.AppendChild(new Color { Val = color });
            if (bold) rpr.AppendChild(new Bold());
            if (italic) rpr.AppendChild(new Italic());
            if (sizeHalfPt != null) rpr.AppendChild(new FontSize { Val = sizeHalfPt });
            if (fontAscii != null) rpr.AppendChild(new RunFonts { Ascii = fontAscii, HighAnsi = fontAscii });
            if (rpr.HasChildren) run.AppendChild(rpr);
            run.AppendChild(new Text(text) { Space = SpaceProcessingModeValues.Preserve });
            return run;
        }

        static void AddTitlePage(Body body)
        {
            body.AppendChild(MakePara(null, MakeRun("", sizeHalfPt: "60")));

            body.AppendChild(MakePara(null,
                new Run(
                    new RunProperties(
                        new Color { Val = GoldDeep },
                        new FontSize { Val = "20" }
                    ),
                    new Text("学员技术指引包 · 顺造科技 AI 项目") { Space = SpaceProcessingModeValues.Preserve }
                )
            ));
            body.AppendChild(MakePara(null, MakeRun("")));

            body.AppendChild(MakePara(null,
                new Run(
                    new RunProperties(
                        new RunFonts { Ascii = "Cambria", HighAnsi = "Cambria" },
                        new Bold(),
                        new Color { Val = Burgundy },
                        new FontSize { Val = "60" }
                    ),
                    new Text("智能体 / Skill / 知识库") { Space = SpaceProcessingModeValues.Preserve }
                )
            ));
            body.AppendChild(MakePara(null,
                new Run(
                    new RunProperties(
                        new RunFonts { Ascii = "Cambria", HighAnsi = "Cambria" },
                        new Bold(),
                        new Color { Val = Ink },
                        new FontSize { Val = "48" }
                    ),
                    new Text("交付指引") { Space = SpaceProcessingModeValues.Preserve }
                )
            ));

            body.AppendChild(MakePara(null, MakeRun("")));
            body.AppendChild(MakePara(null,
                new Run(
                    new RunProperties(
                        new RunFonts { Ascii = "Cambria", HighAnsi = "Cambria" },
                        new Italic(),
                        new Color { Val = InkSub },
                        new FontSize { Val = "24" }
                    ),
                    new Text("附加项不是\"多做几样\"，而是\"把一件事做透\"。") { Space = SpaceProcessingModeValues.Preserve }
                )
            ));

            var ruleP = new Paragraph();
            ruleP.AppendChild(new ParagraphProperties(
                new ParagraphBorders(
                    new TopBorder { Val = BorderValues.Single, Size = 12, Color = Gold }
                ),
                new SpacingBetweenLines { Before = "240", After = "240" }
            ));
            body.AppendChild(ruleP);

            body.AppendChild(MakeTable(
                headers: new[] { "版本", "目标读者", "AI 介入级别", "完成时间" },
                rows: new[] {
                    new[] { "v1.0", "部门学员 / 业务小白", "L1-L5 全覆盖", "2026.06" }
                },
                colWidths: new[] { 2000, 3000, 2200, 1500 },
                headerColor: Paper,
                headerTextColor: Burgundy
            ));

            body.AppendChild(MakePara(null, new Run(new Break { Type = BreakValues.Page })));
        }

        static void AddTableOfContents(Body body)
        {
            body.AppendChild(MakePara(null,
                new Run(
                    new RunProperties(
                        new RunFonts { Ascii = "Cambria", HighAnsi = "Cambria" },
                        new Bold(),
                        new Color { Val = Burgundy },
                        new FontSize { Val = "32" }
                    ),
                    new Text("目  录") { Space = SpaceProcessingModeValues.Preserve }
                )
            ));
            body.AppendChild(MakePara(null, MakeRun("")));

            var items = new[] {
                "第一章 · 什么时候需要做\"附加项\"",
                "第二章 · 结构化提示词（必备）",
                "第三章 · 智能体（可选 · L4+）",
                "第四章 · Skill（可选 · L4+）",
                "第五章 · 知识库（可选 · L4+）",
                "第六章 · 交付清单与自检",
                "附录 A · 完整 SKILL.md 模板",
                "附录 B · 完整智能体配置说明模板",
                "附录 C · 完整知识库条目模板"
            };

            foreach (var item in items)
            {
                body.AppendChild(MakePara(null,
                    new Run(
                        new RunProperties(
                            new RunFonts { Ascii = "Cambria", HighAnsi = "Cambria" },
                            new Color { Val = InkSub },
                            new FontSize { Val = "22" }
                        ),
                        new Text("§  " + item) { Space = SpaceProcessingModeValues.Preserve }
                    )
                ));
            }

            body.AppendChild(MakePara(null, new Run(new Break { Type = BreakValues.Page })));
        }

        static void AddHeading1(Body body, string numLabel, string title, string eyebrow)
        {
            body.AppendChild(MakePara(null,
                new Run(
                    new RunProperties(
                        new RunFonts { Ascii = "Consolas", HighAnsi = "Consolas" },
                        new Color { Val = GoldDeep },
                        new FontSize { Val = "18" }
                    ),
                    new Text($"—— {eyebrow} ——") { Space = SpaceProcessingModeValues.Preserve }
                )
            ));

            body.AppendChild(MakePara(null,
                new Run(
                    new RunProperties(
                        new RunFonts { Ascii = "Cambria", HighAnsi = "Cambria" },
                        new Italic(),
                        new Color { Val = Burgundy },
                        new FontSize { Val = "80" }
                    ),
                    new Text(numLabel) { Space = SpaceProcessingModeValues.Preserve }
                )
            ));

            body.AppendChild(MakePara("Heading1",
                new Run(
                    new RunProperties(
                        new RunFonts { Ascii = "Cambria", HighAnsi = "Cambria" },
                        new Bold(),
                        new Color { Val = Ink },
                        new FontSize { Val = "40" }
                    ),
                    new Text(title) { Space = SpaceProcessingModeValues.Preserve }
                )
            ));

            var ruleP = new Paragraph();
            ruleP.AppendChild(new ParagraphProperties(
                new ParagraphBorders(
                    new TopBorder { Val = BorderValues.Single, Size = 6, Color = Burgundy }
                ),
                new SpacingBetweenLines { Before = "120", After = "240" }
            ));
            body.AppendChild(ruleP);
        }

        static void AddHeading2(Body body, string text)
        {
            body.AppendChild(MakePara("Heading2", MakeRun(text, color: Burgundy, bold: true, sizeHalfPt: "32")));
        }

        static void AddHeading3(Body body, string text)
        {
            body.AppendChild(MakePara("Heading3", MakeRun(text, color: BurgundyDeep, bold: true, sizeHalfPt: "26")));
        }

        static void AddBodyPara(Body body, string text)
        {
            body.AppendChild(MakePara(null, MakeRun(text, color: InkSub, sizeHalfPt: "22")));
        }

        static void AddQuote(Body body, string text)
        {
            body.AppendChild(MakePara("QuoteStyle",
                new Run(
                    new RunProperties(
                        new RunFonts { Ascii = "Cambria", HighAnsi = "Cambria" },
                        new Italic(),
                        new Color { Val = Ink },
                        new FontSize { Val = "24" }
                    ),
                    new Text("\"" + text + "\"") { Space = SpaceProcessingModeValues.Preserve }
                )
            ));
        }

        static void AddCallout(Body body, string label, string text)
        {
            body.AppendChild(MakePara(null,
                new Run(
                    new RunProperties(
                        new RunFonts { Ascii = "Consolas", HighAnsi = "Consolas" },
                        new Bold(),
                        new Color { Val = Burgundy },
                        new FontSize { Val = "18" }
                    ),
                    new Text("▎  " + label) { Space = SpaceProcessingModeValues.Preserve }
                )
            ));
            body.AppendChild(MakePara(null,
                new Run(
                    new RunProperties(
                        new RunFonts { Ascii = "Cambria", HighAnsi = "Cambria" },
                        new Italic(),
                        new Color { Val = InkSub },
                        new FontSize { Val = "22" }
                    ),
                    new Text(text) { Space = SpaceProcessingModeValues.Preserve }
                )
            ));
            body.AppendChild(MakePara(null, MakeRun("")));
        }

        static void AddCodeBlock(Body body, string code)
        {
            var lines = code.Split('\n');
            for (int i = 0; i < lines.Length; i++)
            {
                body.AppendChild(MakePara("CodeStyle",
                    new Run(
                        new RunProperties(
                            new RunFonts { Ascii = "Consolas", HighAnsi = "Consolas" },
                            new Color { Val = "E8E2D2" },
                            new FontSize { Val = "16" }
                        ),
                        new Text(lines[i]) { Space = SpaceProcessingModeValues.Preserve }
                    )
                ));
            }
            body.AppendChild(MakePara(null, MakeRun("")));
        }

        static void AddBulletList(Body body, string[] items)
        {
            foreach (var item in items)
            {
                var p = new Paragraph();
                p.AppendChild(new ParagraphProperties(
                    new Indentation { Left = "360", Hanging = "240" },
                    new SpacingBetweenLines { After = "80" }
                ));
                p.AppendChild(new Run(
                    new RunProperties(
                        new Color { Val = Burgundy },
                        new Bold()
                    ),
                    new Text("•  ") { Space = SpaceProcessingModeValues.Preserve }
                ));
                p.AppendChild(MakeRun(item, color: InkSub, sizeHalfPt: "22"));
                body.AppendChild(p);
            }
        }

        static void AddNumberedList(Body body, string[] items)
        {
            for (int i = 0; i < items.Length; i++)
            {
                var p = new Paragraph();
                p.AppendChild(new ParagraphProperties(
                    new Indentation { Left = "360", Hanging = "360" },
                    new SpacingBetweenLines { After = "80" }
                ));
                p.AppendChild(new Run(
                    new RunProperties(
                        new RunFonts { Ascii = "Cambria", HighAnsi = "Cambria" },
                        new Color { Val = Burgundy },
                        new Bold(),
                        new FontSize { Val = "24" }
                    ),
                    new Text($"{i + 1}. ") { Space = SpaceProcessingModeValues.Preserve }
                ));
                p.AppendChild(MakeRun(items[i], color: InkSub, sizeHalfPt: "22"));
                body.AppendChild(p);
            }
        }

        static void AddTable(Body body, string[] headers, string[][] rows, int[] colWidths,
            string headerColor = PaperDeep, string headerTextColor = BurgundyDeep)
        {
            body.AppendChild(MakeTable(headers, rows, colWidths, headerColor, headerTextColor));
        }

        static Table MakeTable(string[] headers, string[][] rows, int[] colWidths,
            string headerColor, string headerTextColor)
        {
            var table = new Table();

            var tblPr = new TableProperties(
                new TableWidth { Type = TableWidthUnitValues.Dxa, Width = "9000" },
                new TableBorders(
                    new TopBorder { Val = BorderValues.Single, Size = 4, Color = Burgundy },
                    new BottomBorder { Val = BorderValues.Single, Size = 4, Color = Burgundy },
                    new LeftBorder { Val = BorderValues.Single, Size = 4, Color = Rule },
                    new RightBorder { Val = BorderValues.Single, Size = 4, Color = Rule },
                    new InsideHorizontalBorder { Val = BorderValues.Single, Size = 2, Color = Rule },
                    new InsideVerticalBorder { Val = BorderValues.Single, Size = 2, Color = Rule }
                ),
                new TableCellMarginDefault(
                    new TopMargin { Width = "80", Type = TableWidthUnitValues.Dxa },
                    new BottomMargin { Width = "80", Type = TableWidthUnitValues.Dxa },
                    new LeftMargin { Width = "120", Type = TableWidthUnitValues.Dxa },
                    new RightMargin { Width = "120", Type = TableWidthUnitValues.Dxa }
                )
            );
            table.AppendChild(tblPr);

            var grid = new TableGrid();
            foreach (var w in colWidths)
            {
                grid.AppendChild(new GridColumn { Width = w.ToString() });
            }
            table.AppendChild(grid);

            var headerRow = new TableRow();
            headerRow.AppendChild(new TableRowProperties(new TableHeader()));
            foreach (var (h, i) in headers.Select((x, i) => (x, i)))
            {
                var cell = new TableCell();
                cell.AppendChild(new TableCellProperties(
                    new TableCellWidth { Width = colWidths[i].ToString(), Type = TableWidthUnitValues.Dxa },
                    new Shading { Val = ShadingPatternValues.Clear, Color = "auto", Fill = headerColor }
                ));
                cell.AppendChild(MakePara(null,
                    new Run(
                        new RunProperties(
                            new RunFonts { Ascii = "Cambria", HighAnsi = "Cambria" },
                            new Bold(),
                            new Color { Val = headerTextColor },
                            new FontSize { Val = "22" }
                        ),
                        new Text(h) { Space = SpaceProcessingModeValues.Preserve }
                    )
                ));
                headerRow.AppendChild(cell);
            }
            table.AppendChild(headerRow);

            foreach (var row in rows)
            {
                var tr = new TableRow();
                for (int i = 0; i < row.Length; i++)
                {
                    var cell = new TableCell();
                    cell.AppendChild(new TableCellProperties(
                        new TableCellWidth { Width = colWidths[i].ToString(), Type = TableWidthUnitValues.Dxa }
                    ));
                    cell.AppendChild(MakePara(null,
                        new Run(
                            new RunProperties(
                                new RunFonts { Ascii = "Calibri", HighAnsi = "Calibri", EastAsia = "Microsoft YaHei" },
                                new Color { Val = InkSub },
                                new FontSize { Val = "20" }
                            ),
                            new Text(row[i]) { Space = SpaceProcessingModeValues.Preserve }
                        )
                    ));
                    tr.AppendChild(cell);
                }
                table.AppendChild(tr);
            }

            return table;
        }
    }
}
