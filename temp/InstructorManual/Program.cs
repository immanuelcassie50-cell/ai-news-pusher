using DocumentFormat.OpenXml;
using DocumentFormat.OpenXml.Packaging;
using DocumentFormat.OpenXml.Wordprocessing;

string outputPath = "D:/新课开发/经验萃取/AI时代的经验萃取工作坊（能力版2026）/完整课程包/06_讲师手册/讲师手册_内萃外取并重经验萃取工作坊_v1.0.docx";

using var doc = WordprocessingDocument.Create(outputPath, WordprocessingDocumentType.Document);
var mainPart = doc.AddMainDocumentPart();
mainPart.Document = new Document();
var body = new Body();
mainPart.Document.Append(body);

// Page setup
var sectPr = new SectionProperties(
    new PageSize { Width = 11906, Height = 16838 },
    new PageMargin { Top = 1440, Right = 1440, Bottom = 1440, Left = 1440, Header = 720, Footer = 720 }
);

// Add styles
var stylesPart = mainPart.AddNewPart<StyleDefinitionsPart>();
stylesPart.Styles = new Styles();

AddCoverPage(body);
AddTableOfContents(body);
AddPart1(body);
AddPart2(body);
AddPart3(body);
AddPart4(body);
AddPart5(body);

body.Append(sectPr);
mainPart.Document.Save();

Console.WriteLine("Document created: " + outputPath);

void AddCoverPage(Body body)
{
    body.Append(CreateHeading1("内萃外取并重"));
    body.Append(CreateHeading1("经验萃取工作坊"));
    body.Append(CreateHeading2("讲师手册"));
    body.Append(CreateHeading2("FACILITATOR GUIDE"));
    body.Append(CreateParagraph(""));
    body.Append(CreateParagraph("版本：v1.0"));
    body.Append(CreateParagraph("课程时长：2天（每天6小时）"));
    body.Append(CreateParagraph("建议班级规模：15-25人"));
    body.Append(CreateParagraph(""));
    body.Append(CreateParagraph("本手册为内部培训使用材料，请勿对外传播"));
    body.Append(CreatePageBreak());
}

void AddTableOfContents(Body body)
{
    body.Append(CreateHeading1("目 录"));
    body.Append(CreateHeading2("第一部分：讲师准备"));
    body.Append(CreateParagraph("  1.1 课程目标与学习成果"));
    body.Append(CreateParagraph("  1.2 讲师课前准备清单"));
    body.Append(CreateParagraph("  1.3 学员课前准备清单"));
    body.Append(CreateParagraph("  1.4 教室布置与设备要求"));
    body.Append(CreateParagraph("  1.5 课程材料清单"));
    body.Append(CreateParagraph(""));
    body.Append(CreateHeading2("第二部分：讲师指引"));
    body.Append(CreateParagraph("  2.1 模块一：认知重构"));
    body.Append(CreateParagraph("  2.2 模块二：内萃"));
    body.Append(CreateParagraph("  2.3 模块三：外取"));
    body.Append(CreateParagraph("  2.4 模块四：定位与产出"));
    body.Append(CreateParagraph("  2.5 模块五：落地与延展"));
    body.Append(CreateParagraph(""));
    body.Append(CreateHeading2("第三部分：活动设计"));
    body.Append(CreateParagraph("  3.1 各模块练习活动详解"));
    body.Append(CreateParagraph("  3.2 分组与时间控制建议"));
    body.Append(CreateParagraph("  3.3 讲师观察要点"));
    body.Append(CreateParagraph("  3.4 现场应变方案"));
    body.Append(CreateParagraph(""));
    body.Append(CreateHeading2("第四部分：评估与跟进"));
    body.Append(CreateParagraph("  4.1 学员表现评估标准"));
    body.Append(CreateParagraph("  4.2 课程效果评估方法"));
    body.Append(CreateParagraph("  4.3 课后跟进建议"));
    body.Append(CreateParagraph(""));
    body.Append(CreateHeading2("附录"));
    body.Append(CreateParagraph("  A. 完整PPT页面提示"));
    body.Append(CreateParagraph("  B. 参考资料"));
    body.Append(CreateParagraph("  C. 术语表"));
    body.Append(CreatePageBreak());
}

void AddPart1(Body body)
{
    body.Append(CreateHeading1("第一部分：讲师准备"));

    // 1.1
    body.Append(CreateHeading2("1.1 课程目标与学习成果"));
    body.Append(CreateHeading3("课程核心目标"));
    body.Append(CreateBullet("帮助学员建立完整的经验萃取方法论认知框架"));
    body.Append(CreateBullet("掌握内萃（从内部专家）和外取（从外部标杆）两条路径"));
    body.Append(CreateBullet("理解AI在萃取工作中的分工边界，实现人机协同"));
    body.Append(CreateBullet("完成一次完整的萃取闭环：定位-萃取-产出-验真"));

    body.Append(CreateHeading3("学习成果（两天后学员能够）"));
    body.Append(CreateBullet("使用萃取定位表明确萃取场景、目的、对象与情境"));
    body.Append(CreateBullet("运用工作任务分析法将隐性经验结构化"));
    body.Append(CreateBullet("设计结构化访谈提问清单，完成专家访谈验证"));
    body.Append(CreateBullet("完成外部标杆案例的边界条件拆解与迁移应用"));
    body.Append(CreateBullet("对照成果选型表，选择适当的萃取成果形式"));
    body.Append(CreateBullet("使用三维验证法对AI生成内容进行人工验真"));
    body.Append(CreateBullet("建立可持续复用的提示词资产库和技能包"));

    // 1.2
    body.Append(CreateHeading2("1.2 讲师课前准备清单"));
    body.Append(CreateParagraph("建议在课前48小时内逐项确认以下事项："));

    body.Append(CreateHeading3("内容熟悉度"));
    body.Append(CreateBullet("熟读完整课程大纲和所有模块的教学文档"));
    body.Append(CreateBullet("预演每个模块的练习环节，确保能清晰示范"));
    body.Append(CreateBullet("准备1-2个自己经历的真实萃取案例"));
    body.Append(CreateBullet("熟悉AI工具的操作流程，准备好现场演示"));
    body.Append(CreateBullet("确认各模块时间分配，了解可灵活取舍的内容"));

    body.Append(CreateHeading3("学员信息"));
    body.Append(CreateBullet("了解学员背景：行业分布、岗位层级、工作年限"));
    body.Append(CreateBullet("了解学员对萃取工作的现有经验水平"));
    body.Append(CreateBullet("确认学员数量，预估分组方案"));

    body.Append(CreateHeading3("设备与技术"));
    body.Append(CreateBullet("投影设备测试：确认PPT可以正常演示"));
    body.Append(CreateBullet("音响设备：音频播放和视频演示用"));
    body.Append(CreateBullet("网络环境：确认AI工具可以正常访问"));
    body.Append(CreateBullet("计时工具：投影计时或手机分屏显示"));

    // 1.3
    body.Append(CreateHeading2("1.3 学员课前准备清单"));
    body.Append(CreateHeading3("课前一周发出："));
    body.Append(CreateBullet("明确1个待萃取的经验场景方向"));
    body.Append(CreateBullet("准备相关素材：已有资料、可联系的访谈对象、初步关注的对标企业等"));
    body.Append(CreateBullet("注册指定AI工具账号"));
    body.Append(CreateBullet("自带笔记本电脑，事先测试AI工具访问"));

    body.Append(CreateHeading3("课前两天确认："));
    body.Append(CreateBullet("确认AI账号可用"));
    body.Append(CreateBullet("提交待萃取场景的简要描述"));

    // 1.4
    body.Append(CreateHeading2("1.4 教室布置与设备要求"));
    body.Append(CreateHeading3("座位布置"));
    body.Append(CreateBullet("优先采用圆桌或岛型分组座位（4-6人/组）"));
    body.Append(CreateBullet("避免剧院式座位——本课程需要大量互动讨论"));
    body.Append(CreateBullet("每组配备彩色马克笔+白板纸/便签纸"));

    body.Append(CreateHeading3("设备要求"));
    body.Append(CreateBullet("投影屏幕：可从室内所有位置清晰阅读"));
    body.Append(CreateBullet("音响系统：用于音频播放和视频演示"));
    body.Append(CreateBullet("白板/翻页纸板：用于现场板书和练习展示"));

    // 1.5
    body.Append(CreateHeading2("1.5 课程材料清单"));
    body.Append(CreateBullet("学员手册：每人一份，双面彩印，已装订"));
    body.Append(CreateBullet("工具表单：每人一套（定位表、访谈清单、边界条件表等），已装订"));
    body.Append(CreateBullet("A4白纸：备用，每组至少20张"));
    body.Append(CreateBullet("彩色马克笔：每组一套（4色以上）"));
    body.Append(CreateBullet("便签纸：每组1本，用于小组讨论和成果展示"));
    body.Append(CreateBullet("计时器：投影计时或手机分屏显示"));
    body.Append(CreateBullet("课程PPT：已测试，确保播放正常"));

    body.Append(CreatePageBreak());
}

void AddPart2(Body body)
{
    body.Append(CreateHeading1("第二部分：讲师指引"));

    // Module 1
    body.Append(CreateHeading2("2.1 模块一：认知重构——AI时代的经验萃取方法论"));
    body.Append(CreateTimeBox("【模块一】建议时长：45-60分钟"));
    body.Append(CreateKeyPoint("模块目标"));
    body.Append(CreateBullet("帮助学员理解AI时代萃取工作的本质变化"));
    body.Append(CreateBullet("建立AI与人工的分工框架"));
    body.Append(CreateBullet("体验技能包，建立提示词资产库意识"));

    body.Append(CreateKeyPoint("核心引导要点"));
    body.Append(CreateBullet("开场不要介绍'今天学什么'。直接呈现反直觉案例：经验一直在产生，但沉淀速度永远赶不上流失速度。"));
    body.Append(CreateBullet("重点强调：AI改变的是转写、归纳、初稿生成的效率，但方向判断、真实性核验、专业准确性把关、边界识别依然只能靠人。"));
    body.Append(CreateBullet("实操环节：让学员对照清单，圈出自己工作中'该交给AI'和'必须自己把关'的环节。"));

    body.Append(CreateInstructorNote("讲师注意事项"));
    body.Append(CreateBullet("学员可能会说'我们公司AI用得很少'——不要争辩，引导他们思考'如果AI可以提效，你会怎么分配时间？'"));
    body.Append(CreateBullet("学员对提示词可能感到陌生——告诉他们：现场直接能用，不需要懂原理。"));

    // Module 2
    body.Append(CreateHeading2("2.2 模块二：内萃——从内部专家身上萃取经验"));
    body.Append(CreateTimeBox("【模块二】建议时长：2.5-3小时"));
    body.Append(CreateKeyPoint("模块目标"));
    body.Append(CreateBullet("掌握工作任务分析法，将隐性经验显性化"));
    body.Append(CreateBullet("设计结构化访谈提问清单"));
    body.Append(CreateBullet("完成访谈验证，确保内容不失真"));
    body.Append(CreateBullet("使用AI辅助完成录音转写和素材分类"));

    body.Append(CreateKeyPoint("核心引导要点"));
    body.Append(CreateBullet("开场引导：'为什么不能直接问专家\"你的经验是什么\"？'——因为人很难凭空总结自己的隐性知识。"));
    body.Append(CreateBullet("工作任务分析法的核心：先拆任务-再拆动作-最后拆判断点。"));
    body.Append(CreateBullet("访谈技术的关键：不是听专家讲完就结束，而是带着追问'弹'回去验证。"));
    body.Append(CreateBullet("实操：两两访谈，全程录音。素材要分成三类：操作步骤类、判断逻辑类、话术表达类。"));

    body.Append(CreateInstructorNote("讲师注意事项"));
    body.Append(CreateBullet("学员问'专家很忙不愿意配合怎么办'——这是组织层面的问题，不是技术问题。"));
    body.Append(CreateBullet("学员访谈时容易变成'聊天'——提醒他们按照结构化提问清单来，追问'还有呢'来验证判断点。"));

    // Module 3
    body.Append(CreateHeading2("2.3 模块三：外取——站在外部经验上少走弯路"));
    body.Append(CreateTimeBox("【模块三】建议时长：2.5-3小时"));
    body.Append(CreateKeyPoint("模块目标"));
    body.Append(CreateBullet("设计精准检索路径，找到可用的外部经验"));
    body.Append(CreateBullet("确认信息源头，分辨一手与转述资料"));
    body.Append(CreateBullet("识别边界条件，避免生搬硬套"));
    body.Append(CreateBullet("完成从'他们怎么做'到'我们怎么用'的迁移"));

    body.Append(CreateKeyPoint("核心引导要点"));
    body.Append(CreateBullet("开场引导：'学华为、学阿里，学到的常常只是表面动作。为什么？'——因为没有拆解经验背后的边界条件。"));
    body.Append(CreateBullet("边界条件拆解四要素：行业阶段、组织规模、资源条件、决策环境。"));
    body.Append(CreateBullet("迁移的核心逻辑：保留内核，替换外壳。不是复制动作，而是理解背后的逻辑，然后根据自身条件重新设计。"));

    body.Append(CreateInstructorNote("讲师注意事项"));
    body.Append(CreateBullet("学员可能会举'我们行业特殊，学不了'——这是逃避思考的借口。"));
    body.Append(CreateBullet("学员可能过度依赖网络资料——提醒他们一手资料和二手转述的差异，鼓励追溯原始出处。"));

    // Module 4
    body.Append(CreateHeading2("2.4 模块四：定位与产出——让萃取成果落到该落的地方"));
    body.Append(CreateTimeBox("【模块四】建议时长：2.5-3小时"));
    body.Append(CreateKeyPoint("模块目标"));
    body.Append(CreateBullet("使用萃取定位表明确场景、目的、对象、情境"));
    body.Append(CreateBullet("对照成果选型表选择适当的产出形式"));
    body.Append(CreateBullet("现场生成轻量成果（案例/话术/模板/清单）"));
    body.Append(CreateBullet("使用三维验证法完成人工验真"));

    body.Append(CreateKeyPoint("核心引导要点"));
    body.Append(CreateBullet("强调：萃取从来不是为了萃取本身。每次萃取之前，先回答定位四问。"));
    body.Append(CreateBullet("成果形式选型：'重'成果（手册/课程）现场只做框架规划；'轻'成果现场生成。"));
    body.Append(CreateBullet("三维验证法：准确性、可用性、完整性。"));

    body.Append(CreateInstructorNote("讲师注意事项"));
    body.Append(CreateBullet("学员可能会问'为什么不直接做完整的课程'——两天工作坊的目标是建立能力，不是产出一份文档。"));
    body.Append(CreateBullet("学员可能对AI生成内容过度信任——提醒他们：AI负责快，人负责准。验真环节不能省。"));

    // Module 5
    body.Append(CreateHeading2("2.5 模块五：落地与延展——让萃取能力可持续使用"));
    body.Append(CreateTimeBox("【模块五】建议时长：1.5-2小时"));
    body.Append(CreateKeyPoint("模块目标"));
    body.Append(CreateBullet("完成发布前的必检清单"));
    body.Append(CreateBullet("建立提示词资产库的持续迭代方法"));
    body.Append(CreateBullet("展示萃取成果，总结学习收获"));

    body.Append(CreateKeyPoint("核心引导要点"));
    body.Append(CreateBullet("发布前必检清单：内容合规性、版本管理。"));
    body.Append(CreateBullet("成果展示：每组5分钟，分享本次萃取的成果和心得。"));
    body.Append(CreateBullet("结尾引导：让每位学员写下'离开教室后，第一个要萃取的经验场景是什么'。"));

    body.Append(CreateInstructorNote("讲师注意事项"));
    body.Append(CreateBullet("课程结束时可能会有学员意犹未尽——这是好事，告诉他们提示词工具包可以课后继续使用和迭代。"));

    body.Append(CreatePageBreak());
}

void AddPart3(Body body)
{
    body.Append(CreateHeading1("第三部分：活动设计"));

    body.Append(CreateHeading2("3.1 各模块练习活动详解"));

    body.Append(CreateHeading3("模块一练习：AI与人工分工清单实操（15分钟）"));
    body.Append(CreateKeyPoint("操作步骤："));
    body.Append(CreateBullet("发给学员《AI与人工分工清单》表格"));
    body.Append(CreateBullet("让学员独立思考10分钟，在两列各列出3-5项"));
    body.Append(CreateBullet("两人一组交流5分钟，互相补充"));
    body.Append(CreateBullet("邀请2-3组分享，全班讨论分歧"));

    body.Append(CreateKeyPoint("讲师观察要点："));
    body.Append(CreateBullet("学员列出的'必须自己把关'项是否包含：方向判断、真实性核验、专业边界识别"));
    body.Append(CreateBullet("是否有学员把所有工作都列到'该交给AI'——这是常见的认知偏差"));

    body.Append(CreateHeading3("模块二练习：两两访谈练习（30分钟）"));
    body.Append(CreateKeyPoint("操作步骤："));
    body.Append(CreateBullet("两人一组，确定访谈者和受访者角色"));
    body.Append(CreateBullet("访谈者使用结构化提问清单，访谈20分钟（全程录音）"));
    body.Append(CreateBullet("访谈者用3分钟把整理结果复述给受访者验证"));
    body.Append(CreateBullet("角色互换，重复上述步骤"));

    body.Append(CreateKeyPoint("分组建议："));
    body.Append(CreateBullet("优先选择不熟悉的伙伴作为访谈对象，增加练习难度"));
    body.Append(CreateBullet("同一组学员避免选择相同的工作场景"));

    body.Append(CreateKeyPoint("讲师观察要点："));
    body.Append(CreateBullet("访谈者是否过度使用封闭式问题——好的访谈应该多用开放式追问"));
    body.Append(CreateBullet("验证环节是否认真——这是最容易被跳过的步骤"));

    body.Append(CreateHeading3("模块三练习：边界条件拆解练习（25分钟）"));
    body.Append(CreateBullet("学员选定一个想要学习的外部标杆案例"));
    body.Append(CreateBullet("使用《边界条件分析表》完成四要素拆解"));
    body.Append(CreateBullet("对照自身条件，标记'完全符合''部分符合''不符合'"));
    body.Append(CreateBullet("设计迁移应用方案初稿"));

    body.Append(CreateHeading3("模块四练习：轻量成果现场生成（35分钟）"));
    body.Append(CreateBullet("学员基于前三天积累的素材和定位表"));
    body.Append(CreateBullet("选择成果形式：案例/话术/模板/清单（任选其一）"));
    body.Append(CreateBullet("使用对应提示词，现场生成初稿"));
    body.Append(CreateBullet("用三维验证法完成自检"));

    // 3.2
    body.Append(CreateHeading2("3.2 分组与时间控制建议"));
    body.Append(CreateHeading3("分组原则"));
    body.Append(CreateBullet("每组4-6人，确保每位学员有足够发言机会"));
    body.Append(CreateBullet("混合分组：不同行业、不同岗位的学员分在同一组，促进视角碰撞"));
    body.Append(CreateBullet("尽量避免同一部门的学员分在同一组"));

    body.Append(CreateHeading3("两天课程时间分配"));
    body.Append(CreateKeyPoint("第一天："));
    body.Append(CreateBullet("上午第一节（45-60分钟）：模块一：认知重构"));
    body.Append(CreateBullet("上午第二节（60-75分钟）：模块二前半：工作任务分析法+访谈技术"));
    body.Append(CreateBullet("下午第一节（75分钟）：模块二后半+模块三前半：素材分类+外取检索"));
    body.Append(CreateBullet("下午第二节（60-75分钟）：模块三后半：边界条件识别+迁移方法"));

    body.Append(CreateKeyPoint("第二天："));
    body.Append(CreateBullet("上午第一节（60-75分钟）：模块三收尾+模块四前半：迁移应用+定位表"));
    body.Append(CreateBullet("上午第二节（75分钟）：模块四中段：成果选型+现场产出"));
    body.Append(CreateBullet("下午第一节（75分钟）：模块四收尾+模块五前半：三维验证+必检清单"));
    body.Append(CreateBullet("下午第二节（60-75分钟）：模块五收尾：技能包+成果展示+答疑"));

    // 3.3
    body.Append(CreateHeading2("3.3 讲师观察要点"));
    body.Append(CreateHeading3("学员参与度观察"));
    body.Append(CreateBullet("哪些学员在讨论中比较沉默——找机会单独提问"));
    body.Append(CreateBullet("哪些学员过于活跃——注意控制时间，给其他人发言机会"));
    body.Append(CreateBullet("小组讨论时，讲师巡场观察各组的讨论质量和方向"));

    body.Append(CreateHeading3("内容理解度观察"));
    body.Append(CreateBullet("学员在做练习时是否参考了课程提供的表格/框架"));
    body.Append(CreateBullet("学员分享时的用词——是否使用了课程教授的概念"));
    body.Append(CreateBullet("学员能否用自己的语言复述核心概念——这是真正理解的标志"));

    body.Append(CreateHeading3("能量管理观察"));
    body.Append(CreateBullet("午前30分钟：学员能量开始下滑，引入互动练习"));
    body.Append(CreateBullet("午饭后30分钟：生理性低谷，避免工具密集讲解，用轻松讨论替代"));
    body.Append(CreateBullet("下午最后60分钟：学员期待'真正带走东西'，留给综合练习和总结"));

    // 3.4
    body.Append(CreateHeading2("3.4 现场应变方案"));

    body.Append(CreateKeyPoint("情境一：学员认为某个工具在实际工作里根本用不了"));
    body.Append(CreateBullet("应对：不要防御，先问'你最近遇到的具体情况是什么样的？'让学员描述具体场景，然后一起分析。"));

    body.Append(CreateKeyPoint("情境二：某个学员持续主导讨论，其他人插不进来"));
    body.Append(CreateBullet("应对：感谢这位学员的分享，然后主动请其他人：'刚才这个观点，有没有人有不同的经验？'或者用练习把讨论结构化。"));

    body.Append(CreateKeyPoint("情境三：练习时间不够"));
    body.Append(CreateBullet("应对：优先保证第三级练习（真实场景应用）的时间，缩减第一级和第二级练习的展开讨论。"));

    body.Append(CreateKeyPoint("情境四：学员没有真实场景可用于练习"));
    body.Append(CreateBullet("应对：如果真的特殊，可以让他们用家庭或生活场景替代。"));

    body.Append(CreateKeyPoint("情境五：AI工具无法访问或运行缓慢"));
    body.Append(CreateBullet("应对：切换到'纯人工'模式，让学员先用手写整理素材。AI工具恢复后补上转写和生成环节。"));

    body.Append(CreatePageBreak());
}

void AddPart4(Body body)
{
    body.Append(CreateHeading1("第四部分：评估与跟进"));

    body.Append(CreateHeading2("4.1 学员表现评估标准"));

    body.Append(CreateHeading3("课堂参与度评估（过程性评估）"));
    body.Append(CreateBullet("讨论参与：能否在小组讨论中贡献有效观点"));
    body.Append(CreateBullet("练习完成度：是否按时完成各项练习，产出质量如何"));
    body.Append(CreateBullet("跨组交流：是否愿意分享自己的经验和案例"));

    body.Append(CreateHeading3("学习成果评估（总结性评估）"));
    body.Append(CreateBullet("AI与人工分工清单：是否能清晰区分AI和人工的分工边界"));
    body.Append(CreateBullet("工作任务拆解清单：任务颗粒度是否恰当（不太粗不太细）"));
    body.Append(CreateBullet("访谈录音与验证记录：是否有追问验证环节，记录是否完整"));
    body.Append(CreateBullet("边界条件分析表：四要素是否完整，迁移逻辑是否合理"));
    body.Append(CreateBullet("轻量成果终稿：是否通过三维验证法检验"));
    body.Append(CreateBullet("提示词资产库：是否建立了可复用的提示词框架"));

    body.Append(CreateHeading2("4.2 课程效果评估方法"));

    body.Append(CreateHeading3("即时反馈（课程结束时）"));
    body.Append(CreateBullet("课堂反馈表：满意度、实用性、讲师表现、整体评价"));
    body.Append(CreateBullet("学习收获分享：每组3分钟展示，检验学习效果"));

    body.Append(CreateHeading3("短期跟踪（课后一周）"));
    body.Append(CreateBullet("跟进邮件：询问学员是否开始应用课程所学"));
    body.Append(CreateBullet("社群交流：鼓励学员在微信群分享实践案例"));

    body.Append(CreateHeading3("长期评估（课后一个月）"));
    body.Append(CreateBullet("一对一访谈：了解学员在实际萃取任务中的应用情况"));
    body.Append(CreateBullet("成果展示：邀请学员提交自己的萃取成果，评选优秀案例"));

    body.Append(CreateHeading2("4.3 课后跟进建议"));

    body.Append(CreateHeading3("对学员的建议"));
    body.Append(CreateBullet("课后一周内：选择一个实际萃取任务，运用课程所学完成一次完整萃取"));
    body.Append(CreateBullet("课后一月内：建立并迭代自己的提示词资产库"));
    body.Append(CreateBullet("持续实践：将萃取变成日常习惯，而非一次性项目"));

    body.Append(CreateHeading3("对组织的建议"));
    body.Append(CreateBullet("建立内部萃取案例库：鼓励学员提交优秀萃取成果"));
    body.Append(CreateBullet("组织萃取工作坊：定期举办内萃/外取分享会"));
    body.Append(CreateBullet("培养萃取师：选拔有潜力的学员进一步培养"));
    body.Append(CreateBullet("建立提示词共享机制：搭建团队级别的提示词资产库"));

    body.Append(CreateHeading3("对讲师的建议"));
    body.Append(CreateBullet("记录学员的优秀案例：用于后续课程的案例补充"));
    body.Append(CreateBullet("收集学员反馈：持续优化课程内容和教学方法"));
    body.Append(CreateBullet("更新工具包：根据新技术和新案例迭代提示词和技能包"));

    body.Append(CreatePageBreak());
}

void AddPart5(Body body)
{
    body.Append(CreateHeading1("附录"));

    body.Append(CreateHeading2("A. 完整PPT页面提示"));

    body.Append(CreateHeading3("模块一（认知重构）PPT结构"));
    body.Append(CreateBullet("P1-3：课程开场——反直觉数据"));
    body.Append(CreateBullet("P4-6：AI时代改变的部分 vs 没有改变的部分"));
    body.Append(CreateBullet("P7-9：AI与人工分工准则"));
    body.Append(CreateBullet("P10-12：技能包速览"));
    body.Append(CreateBullet("P13：实操说明"));

    body.Append(CreateHeading3("模块二（内萃）PPT结构"));
    body.Append(CreateBullet("P14-16：为什么不能直接问'你的经验是什么'"));
    body.Append(CreateBullet("P17-20：工作任务分析法"));
    body.Append(CreateBullet("P21-24：访谈技术"));
    body.Append(CreateBullet("P25-27：追问技巧"));
    body.Append(CreateBullet("P28-30：素材三分类"));

    body.Append(CreateHeading3("模块三（外取）PPT结构"));
    body.Append(CreateBullet("P31-33：外取难题：信息太多，能用的太少"));
    body.Append(CreateBullet("P34-36：精准检索路径设计"));
    body.Append(CreateBullet("P37-39：信息源头确认三动作"));
    body.Append(CreateBullet("P40-43：边界条件拆解四要素"));
    body.Append(CreateBullet("P44-46：迁移三步法"));

    body.Append(CreateHeading3("模块四（定位与产出）PPT结构"));
    body.Append(CreateBullet("P47-49：萃取定位表四要素"));
    body.Append(CreateBullet("P50-53：成果形式选型表"));
    body.Append(CreateBullet("P54-56：轻成果 vs 重成果的产出策略"));
    body.Append(CreateBullet("P57-60：三维验证法"));

    body.Append(CreateHeading3("模块五（落地与延展）PPT结构"));
    body.Append(CreateBullet("P61-63：发布前必检清单"));
    body.Append(CreateBullet("P64-66：提示词资产库迭代方法"));
    body.Append(CreateBullet("P67-69：萃取成果展示与点评"));
    body.Append(CreateBullet("P70：课程总结与后续跟进"));

    body.Append(CreateHeading2("B. 参考资料"));

    body.Append(CreateHeading3("内部资源"));
    body.Append(CreateBullet("《AI时代经验萃取方法论工作坊》学员手册"));
    body.Append(CreateBullet("《萃取定位表》《工作任务拆解清单》《边界条件分析表》等工具表单"));
    body.Append(CreateBullet("《结构化提示词工具包》"));

    body.Append(CreateHeading3("推荐阅读"));
    body.Append(CreateBullet("《经验流动：组织知识管理的最佳实践》"));
    body.Append(CreateBullet("《SECI模型：知识创造的螺旋》（野中郁次郎）——内隐知识与外显知识转化的经典理论"));

    body.Append(CreateHeading2("C. 术语表"));
    body.Append(CreateBullet("内萃：从组织内部专家身上萃取隐性经验的方法，通过访谈和任务分析实现。"));
    body.Append(CreateBullet("外取：从组织外部标杆案例身上学习可迁移经验的方法，通过边界条件分析和迁移设计实现。"));
    body.Append(CreateBullet("定位表：明确萃取场景、目的、对象、情境的工具，确保萃取方向正确。"));
    body.Append(CreateBullet("工作任务分析法：将隐性经验显性化的结构化方法，通过拆解任务-动作-判断点来还原专家思维。"));
    body.Append(CreateBullet("结构化访谈：带着预设问题清单和追问弹进行的专家访谈技术，确保信息完整性和真实性。"));
    body.Append(CreateBullet("边界条件：影响经验适用性的关键前提要素，包括行业阶段、组织规模、资源条件、决策环境。"));
    body.Append(CreateBullet("迁移：将外部经验转化为自身可用的解决方案的过程，核心是'保留内核，替换外壳'。"));
    body.Append(CreateBullet("三维验证法：从准确性、可用性、完整性三个维度验证萃取成果质量的方法。"));
    body.Append(CreateBullet("提示词资产库：积累的场景化提示词集合，包含场景名称、适用工具、提示词全文、注意事项。"));
    body.Append(CreateBullet("技能包：针对特定任务类型的提示词组合，如文档摘要技能包、案例生成技能包等。"));

    body.Append(CreateParagraph(""));
    body.Append(CreateHeading2("— 讲师手册完 —"));
    body.Append(CreateParagraph("如有疑问，请联系课程开发团队"));
}

// Helper methods
Paragraph CreateParagraph(string text)
{
    var p = new Paragraph();
    var pPr = new ParagraphProperties();
    pPr.Append(new SpacingBetweenLines { After = "160", Line = "276", LineRule = LineSpacingRuleValues.Auto });
    p.Append(pPr);
    if (!string.IsNullOrEmpty(text))
    {
        var r = new Run();
        var rPr = new RunProperties();
        rPr.Append(new RunFonts { Ascii = "Calibri", HighAnsi = "Calibri", EastAsia = "Microsoft YaHei" });
        rPr.Append(new FontSize { Val = "22" });
        r.Append(rPr);
        r.Append(new Text { Text = text });
        p.Append(r);
    }
    return p;
}

Paragraph CreateHeading1(string text)
{
    var p = new Paragraph();
    var pPr = new ParagraphProperties();
    pPr.Append(new SpacingBetweenLines { After = "240", Line = "276", LineRule = LineSpacingRuleValues.Auto });
    pPr.Append(new OutlineLevel { Val = 0 });
    p.Append(pPr);
    var r = new Run();
    var rPr = new RunProperties();
    rPr.Append(new RunFonts { Ascii = "Calibri Light", HighAnsi = "Calibri Light", EastAsia = "Microsoft YaHei" });
    rPr.Append(new FontSize { Val = "48" });
    rPr.Append(new Color { Val = "1F4E79" });
    rPr.Append(new Bold());
    r.Append(rPr);
    r.Append(new Text { Text = text });
    p.Append(r);
    return p;
}

Paragraph CreateHeading2(string text)
{
    var p = new Paragraph();
    var pPr = new ParagraphProperties();
    pPr.Append(new SpacingBetweenLines { After = "200", Line = "276", LineRule = LineSpacingRuleValues.Auto });
    pPr.Append(new OutlineLevel { Val = 1 });
    p.Append(pPr);
    var r = new Run();
    var rPr = new RunProperties();
    rPr.Append(new RunFonts { Ascii = "Calibri Light", HighAnsi = "Calibri Light", EastAsia = "Microsoft YaHei" });
    rPr.Append(new FontSize { Val = "36" });
    rPr.Append(new Color { Val = "2F5496" });
    rPr.Append(new Bold());
    r.Append(rPr);
    r.Append(new Text { Text = text });
    p.Append(r);
    return p;
}

Paragraph CreateHeading3(string text)
{
    var p = new Paragraph();
    var pPr = new ParagraphProperties();
    pPr.Append(new SpacingBetweenLines { After = "160", Line = "276", LineRule = LineSpacingRuleValues.Auto });
    pPr.Append(new OutlineLevel { Val = 2 });
    p.Append(pPr);
    var r = new Run();
    var rPr = new RunProperties();
    rPr.Append(new RunFonts { Ascii = "Calibri", HighAnsi = "Calibri", EastAsia = "Microsoft YaHei" });
    rPr.Append(new FontSize { Val = "28" });
    rPr.Append(new Color { Val = "2F5496" });
    rPr.Append(new Bold());
    r.Append(rPr);
    r.Append(new Text { Text = text });
    p.Append(r);
    return p;
}

Paragraph CreateBullet(string text)
{
    var p = new Paragraph();
    var pPr = new ParagraphProperties();
    pPr.Append(new SpacingBetweenLines { After = "80", Line = "276", LineRule = LineSpacingRuleValues.Auto });
    pPr.Append(new Indentation { Left = "720", Hanging = "360" });
    p.Append(pPr);
    var r = new Run();
    var rPr = new RunProperties();
    rPr.Append(new RunFonts { Ascii = "Calibri", HighAnsi = "Calibri", EastAsia = "Microsoft YaHei" });
    rPr.Append(new FontSize { Val = "22" });
    r.Append(rPr);
    r.Append(new Text { Text = "• " + text });
    p.Append(r);
    return p;
}

Paragraph CreateKeyPoint(string text)
{
    var p = new Paragraph();
    var pPr = new ParagraphProperties();
    pPr.Append(new SpacingBetweenLines { After = "80", Line = "276", LineRule = LineSpacingRuleValues.Auto });
    p.Append(pPr);
    var r = new Run();
    var rPr = new RunProperties();
    rPr.Append(new RunFonts { Ascii = "Calibri", HighAnsi = "Calibri", EastAsia = "Microsoft YaHei" });
    rPr.Append(new FontSize { Val = "24" });
    rPr.Append(new Color { Val = "7B1FA2" });
    rPr.Append(new Bold());
    r.Append(rPr);
    r.Append(new Text { Text = text });
    p.Append(r);
    return p;
}

Paragraph CreateTimeBox(string text)
{
    var p = new Paragraph();
    var pPr = new ParagraphProperties();
    pPr.Append(new SpacingBetweenLines { After = "80", Line = "276", LineRule = LineSpacingRuleValues.Auto });
    p.Append(pPr);
    var r = new Run();
    var rPr = new RunProperties();
    rPr.Append(new RunFonts { Ascii = "Calibri", HighAnsi = "Calibri", EastAsia = "Microsoft YaHei" });
    rPr.Append(new FontSize { Val = "22" });
    rPr.Append(new Color { Val = "7B1FA2" });
    rPr.Append(new Italic());
    r.Append(rPr);
    r.Append(new Text { Text = text });
    p.Append(r);
    return p;
}

Paragraph CreateInstructorNote(string text)
{
    var p = new Paragraph();
    var pPr = new ParagraphProperties();
    pPr.Append(new SpacingBetweenLines { After = "80", Line = "276", LineRule = LineSpacingRuleValues.Auto });
    p.Append(pPr);
    var r = new Run();
    var rPr = new RunProperties();
    rPr.Append(new RunFonts { Ascii = "Calibri", HighAnsi = "Calibri", EastAsia = "Microsoft YaHei" });
    rPr.Append(new FontSize { Val = "22" });
    rPr.Append(new Color { Val = "C00000" });
    r.Append(rPr);
    r.Append(new Text { Text = text });
    p.Append(r);
    return p;
}

Paragraph CreatePageBreak()
{
    var p = new Paragraph();
    var r = new Run();
    r.Append(new Break { Type = BreakValues.Page });
    p.Append(r);
    return p;
}