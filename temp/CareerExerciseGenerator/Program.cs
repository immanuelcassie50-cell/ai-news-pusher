using DocumentFormat.OpenXml;
using DocumentFormat.OpenXml.Packaging;
using DocumentFormat.OpenXml.Wordprocessing;

class Program
{
    static readonly string OutputBase = "D:/新课开发/职业生涯和画布/破局・重启：用 CEO 思维重塑职业生涯/09-练习与成果/";

    static void Main(string[] args)
    {
        Console.WriteLine("Starting to generate career course exercise documents...");

        GenEx1();
        GenEx2();
        GenEx3();
        GenEx4();
        GenEx5();
        GenEx6();
        GenEx7();
        GenEx8();

        Console.WriteLine("All 8 exercise documents generated!");
    }

    // ==================== Exercise 1 ====================
    static void GenEx1()
    {
        string filePath = OutputBase + "01-练习-雇员心态自检.docx";
        using var doc = WordprocessingDocument.Create(filePath, WordprocessingDocumentType.Document);
        var mainPart = doc.AddMainDocumentPart();
        mainPart.Document = new Document();
        var body = new Body();
        mainPart.Document.Append(body);

        AddTitle(body, "练习一:雇员心态自检问卷");
        AddGoal(body, "通过10道自检题目,深入识别自己的职场心态模式,理解雇员心态与经营者心态的核心差异,明确心态转型的方向。");
        AddBackground(body, "雇员心态 vs 经营者心态:雇员等待指令,经营者主动创造;雇员关注任务,经营者关注成果;雇员计算工时,经营者计算价值。");

        var questions = new (string question, (string opt, int score)[] options)[]
        {
            ("1. 关于工作来源", new[] { ("等待上级分配任务", 4), ("主动询问有什么需要帮忙", 2), ("根据目标自行规划", 1), ("被催着才做", 5) }),
            ("2. 遇到问题的第一反应", new[] { ("找上级决定", 4), ("想解决方案再汇报", 2), ("自己想多种方案", 1), ("等别人来解决", 5) }),
            ("3. 关于薪酬的看法", new[] { ("给多少钱干多少活", 5), ("付出与回报要对等", 3), ("先创造价值再谈回报", 1), ("只要不亏就行", 4) }),
            ("4. 对额外工作的态度", new[] { ("不在职责范围内,不做", 4), ("看领导态度决定", 3), ("对成长有帮助就做", 1), ("给加班费就做", 3) }),
            ("5. 职业安全的理解", new[] { ("有一份稳定工作就够了", 4), ("不断提升自己才安全", 1), ("建立个人品牌才安全", 1), ("有个铁饭碗最安全", 4) }),
            ("6. 关于个人成长", new[] { ("公司给培训就够了", 4), ("公司出学费才学", 3), ("自己付费主动学习", 1), ("没时间学习", 5) }),
            ("7. 失败后的反应", new[] { ("这不是我的责任", 4), ("找借口解释", 3), ("总结教训继续前进", 1), ("一蹶不振", 5) }),
            ("8. 对公司问题的关注", new[] { ("关我什么事", 4), ("看看热闹", 3), ("思考如何解决", 1), ("参与解决", 1) }),
            ("9. 关于下班后", new[] { ("工作结束,彻底放松", 3), ("偶尔想想工作", 2), ("经常复盘和规划", 1), ("持续关注行业动态", 1) }),
            ("10. 对自己职业生涯的规划", new[] { ("走一步看一步", 4), ("等公司晋升机会", 3), ("有自己的5年规划", 1), ("持续迭代调整规划", 1) }),
        };

        foreach (var q in questions)
        {
            AddParagraph(body, q.question, bold: true);
            foreach (var (opt, score) in q.options)
            {
                AddParagraph(body, "    " + opt + "  (" + score + "分)");
            }
            body.Append(new Paragraph());
        }

        AddH1(body, "评分标准");
        AddParagraph(body, "请将所有题目得分相加,对照以下标准:");

        var tbl1 = new Table();
        tbl1.Append(MakeHeaderRow(new[] { "总分范围", "心态类型", "特征描述" }));
        tbl1.Append(MakeRow(new[] { "25-40分", "强雇员心态", "依赖指令,规避责任,等待认可" }));
        tbl1.Append(MakeRow(new[] { "15-24分", "中度雇员心态", "有一定主动性,但核心仍是打工者思维" }));
        tbl1.Append(MakeRow(new[] { "8-14分", "轻度雇员心态", "接近经营者思维,需突破关键卡点" }));
        tbl1.Append(MakeRow(new[] { "0-7分", "经营者心态", "主动创造,价值导向,自我负责" }));
        body.Append(tbl1);
        body.Append(new Paragraph());

        AddH1(body, "心态类型判定说明");
        AddH2(body, "强雇员心态(25-40分)");
        AddParagraph(body, "你倾向于等待明确的指令,规避风险和责任,对工作成果的关心超过对价值创造的关心。建议从[完成任务]转向[创造成果],从[上班]转向[事业]。");
        AddH2(body, "中度雇员心态(15-24分)");
        AddParagraph(body, "你有一定的主动性,但核心思维仍然是[付出换取报酬]。建议刻意练习从价值角度思考问题,主动承担更多责任而不计较短期回报。");
        AddH2(body, "轻度雇员心态(8-14分)");
        AddParagraph(body, "你已具备经营者思维雏形,但仍会在某些场景下滑回雇员模式。建议找到自己的[思维卡点],重点突破,持续强化经营者视角。");
        AddH2(body, "经营者心态(0-7分)");
        AddParagraph(body, "你拥有清晰的自我负责心态,主动创造价值,不被短期波动左右。这是课程的核心素养,继续深化和传播这种思维。");

        AddH1(body, "行动建议模板");
        AddParagraph(body, "我的心态转型承诺:");
        AddParagraph(body, "1. 我识别到自己的心态卡点是:_______________________________");
        AddParagraph(body, "2. 我要在_____天内突破这个卡点,具体做法是:_________________");
        AddParagraph(body, "3. 我需要请求_____作为我的 accountability partner(问责伙伴)");

        AddH1(body, "练习后反思");
        AddParagraph(body, "1. 哪个题目的回答最让你意外?为什么?");
        AddParagraph(body, "2. 你的得分准确反映了你的现状吗?有哪些不符合的地方?");
        AddParagraph(body, "3. 如果要转型为经营者心态,你认为最难改变的是什么?");

        AddStudentInfo(body);
        SetPage(doc);
        mainPart.Document.Save();
        Console.WriteLine("Generated: " + filePath);
    }

    // ==================== Exercise 2 ====================
    static void GenEx2()
    {
        string filePath = OutputBase + "02-练习-我的困局识别.docx";
        using var doc = WordprocessingDocument.Create(filePath, WordprocessingDocumentType.Document);
        var mainPart = doc.AddMainDocumentPart();
        mainPart.Document = new Document();
        var body = new Body();
        mainPart.Document.Append(body);

        AddTitle(body, "练习二:我的困局识别表");
        AddGoal(body, "通过系统梳理当前处境、情绪反应和核心担忧,厘清困局的真实面貌,为后续破局行动奠定清晰的问题定义基础。");
        AddBackground(body, "困局的本质往往是[信息不清晰]——看不清现状、看不透恐惧、看不见欲望。系统化的困局识别是破局的第一步。");

        AddH1(body, "一、当前处境描述(5W1H格式)");
        var t1 = new Table();
        t1.Append(MakeHeaderRow(new[] { "维度", "我的描述" }));
        t1.Append(MakeRow(new[] { "What-发生了什么具体事件?" }));
        t1.Append(MakeRow(new[] { "When-什么时候开始的?持续多久?" }));
        t1.Append(MakeRow(new[] { "Where-在哪个场景/领域发生?" }));
        t1.Append(MakeRow(new[] { "Who-涉及哪些关键人物?" }));
        t1.Append(MakeRow(new[] { "Why-我认为的原因是什么?" }));
        t1.Append(MakeRow(new[] { "How-目前我是如何应对的?" }));
        body.Append(t1);
        body.Append(new Paragraph());

        AddH1(body, "二、情绪反应记录表");
        AddParagraph(body, "闭上眼睛,回到那个让你感到困局的场景,注意身体感受和情绪反应:");
        var t2 = new Table();
        t2.Append(MakeHeaderRow(new[] { "情绪类型", "强度(1-10)", "触发情境", "身体感受" }));
        t2.Append(MakeRow(new[] { "焦虑", "", "", "" }));
        t2.Append(MakeRow(new[] { "恐惧", "", "", "" }));
        t2.Append(MakeRow(new[] { "愤怒", "", "", "" }));
        t2.Append(MakeRow(new[] { "无力", "", "", "" }));
        t2.Append(MakeRow(new[] { "羞耻", "", "", "" }));
        t2.Append(MakeRow(new[] { "愧疚", "", "", "" }));
        t2.Append(MakeRow(new[] { "其他:____", "", "", "" }));
        body.Append(t2);
        body.Append(new Paragraph());

        AddH1(body, "三、核心担忧分析表");
        AddParagraph(body, "问自己:[如果这个困局无法解决,最坏的结果是什么?我真正害怕的是?]");
        var t3 = new Table();
        t3.Append(MakeHeaderRow(new[] { "层次", "内容" }));
        t3.Append(MakeRow(new[] { "表面担忧(直接后果)" }));
        t3.Append(MakeRow(new[] { "深层担忧(心理恐惧)" }));
        t3.Append(MakeRow(new[] { "终极担忧(存在焦虑)" }));
        t3.Append(MakeRow(new[] { "这个担忧是真实的还是想象的?" }));
        t3.Append(MakeRow(new[] { "最坏结果真的发生,我能承受吗?" }));
        body.Append(t3);
        body.Append(new Paragraph());

        AddH1(body, "四、真实欲望探索问题");
        AddParagraph(body, "困局的背后往往藏着未被满足的渴望。问自己:");
        string[] desires = {
            "1. 我真正想要的是什么?(不是[不要什么])",
            "2. 这个困局在告诉我缺少什么?",
            "3. 如果没有恐惧,我会做什么选择?",
            "4. 三年后我想处于什么状态?",
            "5. 什么价值观是我不愿妥协的?",
            "6. 我愿意为什么付出代价?",
            "7. 如果这是上天给我的礼物,TA想告诉我什么?",
            "8. 我的热情在哪里?什么事情让我沉浸其中忘记时间?"
        };
        foreach (var d in desires) AddParagraph(body, d);
        body.Append(new Paragraph());

        AddH1(body, "五、破局线索汇总");
        AddParagraph(body, "基于以上分析,我的破局线索是:");
        AddParagraph(body, "1. 核心问题:_______________________________________________");
        AddParagraph(body, "2. 关键情绪:_______________________________________________");
        AddParagraph(body, "3. 真实渴望:_______________________________________________");
        AddParagraph(body, "4. 第一步行动:_____________________________________________");

        AddReflection(body, "练习二");
        AddStudentInfo(body);
        SetPage(doc);
        mainPart.Document.Save();
        Console.WriteLine("Generated: " + filePath);
    }

    // ==================== Exercise 3 ====================
    static void GenEx3()
    {
        string filePath = OutputBase + "03-练习-能力三圈分析.docx";
        using var doc = WordprocessingDocument.Create(filePath, WordprocessingDocumentType.Document);
        var mainPart = doc.AddMainDocumentPart();
        mainPart.Document = new Document();
        var body = new Body();
        mainPart.Document.Append(body);

        AddTitle(body, "练习三:能力三圈分析");
        AddGoal(body, "通过识别擅长区、热情区与世界需要区的交集,找到个人定位的[甜蜜点],为构建不可替代的职业竞争力提供方向。");
        AddBackground(body, "卓越职业轨迹 = 做擅长的事 x 做热爱的事 x 做世界需要的事。三圈交汇处,是个人定位的甜蜜点。");

        AddH1(body, "一、三圈模型说明");
        AddParagraph(body, "请在下图中分别填写三个区域的内容:");

        var t1 = new Table();
        var hr = new TableRow();
        hr.Append(MakeCell("区域", true, "FF6B6B"));
        hr.Append(MakeCell("核心问题", true, "FF6B6B"));
        hr.Append(MakeCell("我的答案", true, "FF6B6B"));
        t1.Append(hr);
        t1.Append(MakeRow(new[] { "擅长区", "我最擅长什么?别人经常夸我什么?" }));
        t1.Append(MakeRow(new[] { "热情区", "我发自内心热爱什么?做什么让我忘记时间?" }));
        t1.Append(MakeRow(new[] { "需要区", "世界/市场需要什么?愿意为什么付钱?" }));
        body.Append(t1);
        body.Append(new Paragraph());

        AddH1(body, "二、擅长区深度挖掘");
        AddH2(body, "2.1 我最擅长的技能(列出10项)");
        for (int i = 1; i <= 10; i++) AddParagraph(body, i + ". _______________________________________________");
        AddH2(body, "2.2 别人经常夸我的能力");
        AddParagraph(body, "(回顾最近6个月,有哪些人对你的哪些方面表示过赞赏或感谢?)");
        for (int i = 1; i <= 5; i++) AddParagraph(body, i + ". _______________________________________________");
        AddH2(body, "2.3 我的独特优势组合");
        AddParagraph(body, "(将2-3项技能组合起来,形成我的独特能力标签)");
        AddParagraph(body, "我的独特优势:_______________________________________________");

        AddH1(body, "三、热情区深度挖掘");
        AddH2(body, "3.1 让我进入心流状态的活动");
        AddParagraph(body, "(描述那些让你完全沉浸、忘记时间流逝的事情)");
        for (int i = 1; i <= 5; i++) AddParagraph(body, i + ". _______________________________________________");
        AddH2(body, "3.2 我愿意无偿投入的事");
        AddParagraph(body, "(什么事情即使没有报酬你也愿意做?)");
        for (int i = 1; i <= 5; i++) AddParagraph(body, i + ". _______________________________________________");
        AddH2(body, "3.3 我的热情来源");
        AddParagraph(body, "我的热情本质是:_______________________________________________");

        AddH1(body, "四、世界需要区深度挖掘");
        AddH2(body, "4.1 市场愿意付费的需求");
        AddParagraph(body, "(列出5个你看到的市场机会或痛点)");
        for (int i = 1; i <= 5; i++) AddParagraph(body, i + ". _______________________________________________");
        AddH2(body, "4.2 未来3年增长最快的领域");
        AddParagraph(body, "(结合行业趋势分析)");
        AddParagraph(body, "1. _______________________________________________");
        AddParagraph(body, "2. _______________________________________________");
        AddParagraph(body, "3. _______________________________________________");
        AddH2(body, "4.3 我的资源可以解决什么问题");
        AddParagraph(body, "(我的能力组合可以服务于哪类客户/市场需求?)");

        AddH1(body, "五、三圈交汇分析");
        AddParagraph(body, "绘制你的三圈交汇图:");
        AddParagraph(body, "");
        AddParagraph(body, "                    世界需要");
        AddParagraph(body, "                       △");
        AddParagraph(body, "                      / \\");
        AddParagraph(body, "                     /   \\");
        AddParagraph(body, "                    /  △  \\");
        AddParagraph(body, "                   / / △ \\ \\");
        AddParagraph(body, "                  / /  |  \\ \\");
        AddParagraph(body, "                 / /   ▼   \\ \\");
        AddParagraph(body, "                ----------------");
        AddParagraph(body, "               擅长 △    △ 热情");
        AddParagraph(body, "");
        AddParagraph(body, "请分别填写:");
        AddParagraph(body, "擅长区(3项):_______________________________________________");
        AddParagraph(body, "热情区(3项):_______________________________________________");
        AddParagraph(body, "需要区(3项):_______________________________________________");
        AddParagraph(body, "交汇区(我的甜蜜点):_______________________________________________");

        AddH1(body, "六、个人定位声明模板");
        AddParagraph(body, "请用以下模板完成你的个人定位声明:");
        AddParagraph(body, "");
        AddParagraph(body, "[模板]");
        AddParagraph(body, "我是_______________________________________________");
        AddParagraph(body, "我帮助_____________________________________________(目标客户/用户)");
        AddParagraph(body, "解决_____________________________________________(核心问题)");
        AddParagraph(body, "不同于其他方案,我_____________________________________________(差异化优势)");
        AddParagraph(body, "");
        AddParagraph(body, "[我的定位声明]");
        for (int i = 0; i < 4; i++) AddParagraph(body, "_______________________________________________");

        AddReflection(body, "练习三");
        AddStudentInfo(body);
        SetPage(doc);
        mainPart.Document.Save();
        Console.WriteLine("Generated: " + filePath);
    }

    // ==================== Exercise 4 ====================
    static void GenEx4()
    {
        string filePath = OutputBase + "04-练习-价值定位图.docx";
        using var doc = WordprocessingDocument.Create(filePath, WordprocessingDocumentType.Document);
        var mainPart = doc.AddMainDocumentPart();
        mainPart.Document = new Document();
        var body = new Body();
        mainPart.Document.Append(body);

        AddTitle(body, "练习四:价值定位图绘制");
        AddGoal(body, "通过六维定位框架(身份、客户、价值主张、差异化、可信证明、定位声明),系统构建个人品牌定位的完整图谱。");
        AddBackground(body, "定位的本质是[在目标客户心智中建立独特而有价值的位置]。清晰的定位让你在众多竞争者中脱颖而出,让对的人主动靠近你。");

        AddH1(body, "一、六维定位框架");

        AddH2(body, "维度1:身份定位——我是谁");
        AddParagraph(body, "[问题]用一句话介绍自己,你会怎么说?");
        AddParagraph(body, "");
        AddParagraph(body, "身份标签示例:");
        AddParagraph(body, "- 前BAT产品专家 -> 转型为[AI商业化顾问]");
        AddParagraph(body, "- 15年销售总监 -> 转型为[企业业绩增长教练]");
        AddParagraph(body, "");
        AddParagraph(body, "我的身份定位(20字以内):");
        for (int i = 0; i < 3; i++) AddParagraph(body, "_______________________________________________");

        AddH2(body, "维度2:目标客户——我服务谁");
        AddParagraph(body, "[问题]谁是最愿意为你付费/追随的人?");
        AddParagraph(body, "");
        AddParagraph(body, "客户画像维度:");
        var t1 = new Table();
        t1.Append(MakeHeaderRow(new[] { "维度", "具体描述" }));
        t1.Append(MakeRow(new[] { "行业/领域" }));
        t1.Append(MakeRow(new[] { "职位/角色" }));
        t1.Append(MakeRow(new[] { "企业规模" }));
        t1.Append(MakeRow(new[] { "年龄段" }));
        t1.Append(MakeRow(new[] { "核心痛点" }));
        t1.Append(MakeRow(new[] { "决策模式" }));
        body.Append(t1);
        body.Append(new Paragraph());
        AddParagraph(body, "我的目标客户(3个典型画像):");
        for (int i = 0; i < 3; i++) AddParagraph(body, "画像" + (i + 1) + ":_______________________________________________");

        AddH2(body, "维度3:价值主张——我解决什么问题");
        AddParagraph(body, "[问题]客户因为什么问题找到你?你给他们带来什么改变?");
        AddParagraph(body, "");
        AddParagraph(body, "价值主张层级:");
        var t2 = new Table();
        t2.Append(MakeHeaderRow(new[] { "层级", "问题/价值" }));
        t2.Append(MakeRow(new[] { "功能价值", "具体能做什么?" }));
        t2.Append(MakeRow(new[] { "情感价值", "带来什么感受?" }));
        t2.Append(MakeRow(new[] { "身份价值", "代表什么身份象征?" }));
        t2.Append(MakeRow(new[] { "改变价值", "带来什么改变/成果?" }));
        body.Append(t2);
        body.Append(new Paragraph());
        AddParagraph(body, "我的核心价值主张:");
        for (int i = 0; i < 4; i++) AddParagraph(body, "_______________________________________________");

        AddH2(body, "维度4:差异化——我与竞争对手有何不同");
        AddParagraph(body, "[问题]如果客户选择你而不是其他人,为什么?");
        AddParagraph(body, "");
        AddParagraph(body, "差异化分析:");
        var t3 = new Table();
        t3.Append(MakeHeaderRow(new[] { "维度", "竞争对手", "我" }));
        t3.Append(MakeRow(new[] { "专业背景" }));
        t3.Append(MakeRow(new[] { "核心能力" }));
        t3.Append(MakeRow(new[] { "服务方式" }));
        t3.Append(MakeRow(new[] { "客户群体" }));
        t3.Append(MakeRow(new[] { "独特资源" }));
        body.Append(t3);
        body.Append(new Paragraph());
        AddParagraph(body, "我的独特差异化(3点):");
        for (int i = 0; i < 3; i++) AddParagraph(body, (i + 1) + ". _______________________________________________");

        AddH2(body, "维度5:可信证明——我凭什么让人相信");
        AddParagraph(body, "[问题]你有什么证据证明你能做到你说的?");
        AddParagraph(body, "");
        var t4 = new Table();
        t4.Append(MakeHeaderRow(new[] { "证明类型", "具体内容" }));
        t4.Append(MakeRow(new[] { "成功案例", "(3-5个代表性案例)" }));
        t4.Append(MakeRow(new[] { "专业资质", "(证书、学历、认证)" }));
        t4.Append(MakeRow(new[] { "社会证明", "(推荐信、评价、媒体报道)" }));
        t4.Append(MakeRow(new[] { "个人故事", "(你的独特经历如何证明能力)" }));
        t4.Append(MakeRow(new[] { "数据成果", "(可量化的成果数字)" }));
        body.Append(t4);
        body.Append(new Paragraph());

        AddH2(body, "维度6:个人定位声明完整版");
        AddParagraph(body, "[整合以上五维,完成你的完整定位声明]");
        AddParagraph(body, "");
        AddParagraph(body, "+-----------------------------------------------------+");
        AddParagraph(body, "|                                                         |");
        AddParagraph(body, "|  我是_______________________________________________    |");
        AddParagraph(body, "|  我帮助_____________________________________________    |");
        AddParagraph(body, "|  解决_____________________________________________    |");
        AddParagraph(body, "|  不同于其他方案,我__________________________________    |");
        AddParagraph(body, "|  我凭什么:_________________________________________    |");
        AddParagraph(body, "|                                                         |");
        AddParagraph(body, "+-----------------------------------------------------+");

        AddH1(body, "二、价值定位图(可视化)");
        AddParagraph(body, "请在下方空白处用图形/文字绘制你的定位图:");
        AddParagraph(body, "");
        AddParagraph(body, "(可使用以下框架绘制)");
        AddParagraph(body, "");
        AddParagraph(body, "                    价值主张");
        AddParagraph(body, "                       △");
        AddParagraph(body, "                      /|\\");
        AddParagraph(body, "                     / | \\");
        AddParagraph(body, "                    /  |  \\");
        AddParagraph(body, "                   /   |   \\");
        AddParagraph(body, "       身份定位 ----┼---- 目标客户");
        AddParagraph(body, "                  \\    |    /");
        AddParagraph(body, "                   \\   |   /");
        AddParagraph(body, "                    \\  |  /");
        AddParagraph(body, "                     \\ | /");
        AddParagraph(body, "                      ▼▽▼");
        AddParagraph(body, "                   差异化 + 可信证明");
        AddParagraph(body, "");
        for (int i = 0; i < 8; i++) AddParagraph(body, "");

        AddReflection(body, "练习四");
        AddStudentInfo(body);
        SetPage(doc);
        mainPart.Document.Save();
        Console.WriteLine("Generated: " + filePath);
    }

    // ==================== Exercise 5 ====================
    static void GenEx5()
    {
        string filePath = OutputBase + "05-练习-时间资产盘点.docx";
        using var doc = WordprocessingDocument.Create(filePath, WordprocessingDocumentType.Document);
        var mainPart = doc.AddMainDocumentPart();
        mainPart.Document = new Document();
        var body = new Body();
        mainPart.Document.Append(body);

        AddTitle(body, "练习五:时间资产盘点");
        AddGoal(body, "通过一周时间追踪,清晰识别时间消费模式,区分有效时间、消耗时间与投资时间,制定时间优化承诺并付诸行动。");
        AddBackground(body, "时间是人类唯一真正平等的资产——每个人每天都是24小时。但时间用在哪里,成果就产生在哪里。CEO们把时间视为投资,而非消耗。");

        AddH1(body, "一、一周时间追踪表");
        AddParagraph(body, "请如实记录本周7天的时间分配(单位:小时)");

        var t1 = new Table();
        var headerCells = new[] { "时间类别", "周一", "周二", "周三", "周四", "周五", "周六", "周日", "合计" }
            .Select((text, i) => MakeCell(text, true, "4472C4"))
            .ToArray();
        var hr = new TableRow();
        foreach (var cell in headerCells) hr.Append(cell);
        t1.Append(hr);

        string[] cats = { "睡眠", "吃饭/洗漱", "通勤", "工作(任务)", "无效会议", "无效社交媒体", "闲聊/无聊", "运动健身", "学习成长", "陪伴家人", "兴趣爱好", "其他" };
        foreach (var cat in cats)
        {
            var row = new TableRow();
            row.Append(MakeCell(cat, true));
            for (int i = 0; i < 8; i++) row.Append(MakeCell("", false));
            t1.Append(row);
        }
        body.Append(t1);
        body.Append(new Paragraph());

        AddH1(body, "二、时间资产评估表");
        var t2 = new Table();
        t2.Append(MakeHeaderRow(new[] { "时间类型", "定义", "本周小时数", "占比", "评估" }));
        t2.Append(MakeRow(new[] { "有效时间", "直接产生价值/成果的时间", "", "", "□ 充足  □ 不足  □ 严重不足" }));
        t2.Append(MakeRow(new[] { "投资时间", "对未来有长期回报的时间", "", "", "□ 充足  □ 不足  □ 严重不足" }));
        t2.Append(MakeRow(new[] { "消耗时间", "必要但不产生价值的时间", "", "", "□ 正常  □ 过多" }));
        t2.Append(MakeRow(new[] { "浪费时间", "既无价值也无必要的时间", "", "", "□ 很少  □ 较多  □ 严重" }));
        body.Append(t2);
        body.Append(new Paragraph());

        AddH1(body, "三、关键发现");
        AddParagraph(body, "基于以上数据,我的关键发现是:");
        AddParagraph(body, "");
        AddParagraph(body, "1. 我的时间浪费主要在:_______________________________________________");
        AddParagraph(body, "2. 我的高效时间主要在:_______________________________________________");
        AddParagraph(body, "3. 我最需要优化的是:_______________________________________________");
        AddParagraph(body, "4. 如果每天多出2小时,我会用来:_______________________________________");

        AddH1(body, "四、时间优化建议");
        AddParagraph(body, "基于评估结果,我承诺做出以下改变:");
        AddParagraph(body, "");
        AddParagraph(body, "[立即停止](Stop Doing)");
        for (int i = 0; i < 3; i++) AddParagraph(body, (i + 1) + ". _______________________________________________");
        AddParagraph(body, "");
        AddParagraph(body, "[开始行动](Start Doing)");
        for (int i = 0; i < 3; i++) AddParagraph(body, (i + 1) + ". _______________________________________________");
        AddParagraph(body, "");
        AddParagraph(body, "[持续优化](Continue Doing)");
        for (int i = 0; i < 3; i++) AddParagraph(body, (i + 1) + ". _______________________________________________");

        AddH1(body, "五、改变承诺签名栏");
        AddParagraph(body, "");
        AddParagraph(body, "我郑重承诺:从______年______月______日起,我将践行以上时间优化计划。");
        AddParagraph(body, "");
        AddParagraph(body, "我将每周复盘一次时间使用情况,持续追踪90天。");
        AddParagraph(body, "");
        AddParagraph(body, "签名:______________________    日期:______年______月______日");

        AddReflection(body, "练习五");
        AddStudentInfo(body);
        SetPage(doc);
        mainPart.Document.Save();
        Console.WriteLine("Generated: " + filePath);
    }

    // ==================== Exercise 6 ====================
    static void GenEx6()
    {
        string filePath = OutputBase + "06-练习-人脉资产盘点.docx";
        using var doc = WordprocessingDocument.Create(filePath, WordprocessingDocumentType.Document);
        var mainPart = doc.AddMainDocumentPart();
        mainPart.Document = new Document();
        var body = new Body();
        mainPart.Document.Append(body);

        AddTitle(body, "练习六:人脉资产盘点");
        AddGoal(body, "通过系统盘点核心人脉网络,评估人脉质量与分布,识别人脉盲区与机会,制定人脉拓展行动计划,构建有价值的职业网络。");
        AddBackground(body, "你的收入水平,通常等于你最常接触的5个人的平均值。CEO们不仅精进自己,还善于经营人脉——他们把关系视为资产,而非工具。");

        AddH1(body, "一、核心人脉清单(20人)");
        AddParagraph(body, "请列出你最重要的20个人脉关系(按重要程度排序):");

        var t1 = new Table();
        t1.Append(MakeHeaderRow(new[] { "序号", "姓名", "关系类型", "认识渠道", "认识时长", "关键时刻可用性", "对我的价值" }));
        for (int i = 1; i <= 20; i++)
        {
            var row = new TableRow();
            row.Append(MakeCell(i.ToString(), true));
            for (int j = 0; j < 6; j++) row.Append(MakeCell("", false));
            t1.Append(row);
        }
        body.Append(t1);
        body.Append(new Paragraph());
        AddParagraph(body, "关系类型选项:导师/ mentee / 同行 / 客户 / 供应商 / 投资人 / 朋友 / 家人 / 政府/机构 / 其他");
        AddParagraph(body, "关键时刻可用性:□ 高  □ 中  □ 低");

        AddH1(body, "二、人脉质量评估");
        AddParagraph(body, "评估你的核心人脉网络的整体质量:");

        var t2 = new Table();
        t2.Append(MakeHeaderRow(new[] { "评估维度", "评分(1-10)", "具体表现" }));
        t2.Append(MakeRow(new[] { "多样性", "(不同行业/背景的人脉占比)" }));
        t2.Append(MakeRow(new[] { "深度", "(有多少人可以深度信任)" }));
        t2.Append(MakeRow(new[] { "广度", "(认识多少弱关系但有价值的人)" }));
        t2.Append(MakeRow(new[] { "互惠性", "(有多少双向有价值的关系)" }));
        t2.Append(MakeRow(new[] { "新鲜度", "(多久没认识新朋友了)" }));
        t2.Append(MakeRow(new[] { "跨层级", "(有多少比你高层或底层的人脉)" }));
        body.Append(t2);
        body.Append(new Paragraph());

        AddH1(body, "三、人脉质量雷达图");
        AddParagraph(body, "请根据上表评分,在下方绘制你的雷达图(10分为满分):");
        AddParagraph(body, "");
        AddParagraph(body, "                    10");
        AddParagraph(body, "                     △");
        AddParagraph(body, "                    /|\\");
        AddParagraph(body, "                   / | \\");
        AddParagraph(body, "                  /  |  \\");
        AddParagraph(body, "                 /   |   \\");
        AddParagraph(body, "                /    |    \\");
        AddParagraph(body, "               ------+------");
        AddParagraph(body, "              多样性 深度  广度");
        AddParagraph(body, "                     △");
        AddParagraph(body, "                    /|\\");
        AddParagraph(body, "                   / | \\");
        AddParagraph(body, "                  /  |  \\");
        AddParagraph(body, "                 /   |   \\");
        AddParagraph(body, "                /    |    \\");
        AddParagraph(body, "               ------+------");
        AddParagraph(body, "            互惠性   新鲜度  跨层级");
        for (int i = 0; i < 6; i++) AddParagraph(body, "");

        AddH1(body, "四、人脉资源地图");
        AddParagraph(body, "请绘制你的人脉在不同行业的分布:");
        AddParagraph(body, "");

        var t3 = new Table();
        t3.Append(MakeHeaderRow(new[] { "行业/领域", "人数", "核心人物", "连接强度" }));
        string[] industries = { "科技/互联网", "金融/投资", "医疗/健康", "教育/培训", "制造/实业", "政府/公共事务", "媒体/传播", "咨询/专业服务", "消费品/零售", "其他" };
        foreach (var ind in industries)
        {
            var row = new TableRow();
            row.Append(MakeCell(ind, false));
            for (int j = 0; j < 3; j++) row.Append(MakeCell("", false));
            t3.Append(row);
        }
        body.Append(t3);
        body.Append(new Paragraph());
        AddParagraph(body, "连接强度:□ 强(深度信任)  □ 中(有限接触)  □ 弱(仅一面之缘)");
        AddParagraph(body, "");

        AddH1(body, "五、人脉拓展行动计划");
        AddParagraph(body, "基于以上分析,我的人脉优化计划:");
        AddParagraph(body, "");
        AddParagraph(body, "[我需要加强的领域]");
        AddParagraph(body, "1. _______________________________________________");
        AddParagraph(body, "2. _______________________________________________");
        AddParagraph(body, "3. _______________________________________________");
        AddParagraph(body, "");
        AddParagraph(body, "[本月人脉行动](具体要做的事)");
        for (int i = 0; i < 5; i++) AddParagraph(body, (i + 1) + ". _______________________________________________");
        AddParagraph(body, "");
        AddParagraph(body, "[我要主动联系的3个人]");
        for (int i = 0; i < 3; i++) AddParagraph(body, "_______________________________________________");
        AddParagraph(body, "");
        AddParagraph(body, "[我要建立的新连接类型]");
        AddParagraph(body, "_______________________________________________");

        AddReflection(body, "练习六");
        AddStudentInfo(body);
        SetPage(doc);
        mainPart.Document.Save();
        Console.WriteLine("Generated: " + filePath);
    }

    // ==================== Exercise 7 ====================
    static void GenEx7()
    {
        string filePath = OutputBase + "07-练习-90天行动计划.docx";
        using var doc = WordprocessingDocument.Create(filePath, WordprocessingDocumentType.Document);
        var mainPart = doc.AddMainDocumentPart();
        mainPart.Document = new Document();
        var body = new Body();
        mainPart.Document.Append(body);

        AddTitle(body, "练习七:90天行动计划制定");
        AddGoal(body, "运用OKR方法论,将宏大愿景拆解为可落地的90天目标与关键结果,设置清晰的里程碑,确保每天的行动都与大方向对齐。");
        AddBackground(body, "CEO的核心能力之一是把愿景转化为可执行的计划。90天是一个理想的目标周期——足够长以产生实质改变,足够短以保持紧迫感。");

        AddH1(body, "一、Objective(目标)设定");
        AddParagraph(body, "[什么是O]");
        AddParagraph(body, "Objective是你90天后想要实现的愿景状态,应该是:");
        AddParagraph(body, "- 激动人心的(让你早上有动力起床)");
        AddParagraph(body, "- 定性的(描述一种状态,不是数字)");
        AddParagraph(body, "- 有挑战性的(不是轻松能达到的)");
        AddParagraph(body, "");
        AddParagraph(body, "[我的90天O]");
        AddParagraph(body, "");
        for (int i = 0; i < 4; i++) AddParagraph(body, "_______________________________________________");
        AddParagraph(body, "");

        AddH1(body, "二、Key Results(关键结果)设定");
        AddParagraph(body, "[什么是KR]");
        AddParagraph(body, "Key Results是衡量目标是否达成的具体指标,应该是:");
        AddParagraph(body, "- 定量的(可以评分/衡量的)");
        AddParagraph(body, "- 有挑战性的(完成度70%就算成功)");
        AddParagraph(body, "- 具体的(不是模糊的方向)");
        AddParagraph(body, "");

        var t1 = new Table();
        t1.Append(MakeHeaderRow(new[] { "KR", "目标值", "当前值", "完成度", "风险/依赖" }));
        for (int i = 1; i <= 3; i++)
        {
            var row = new TableRow();
            row.Append(MakeCell("KR" + i, true));
            for (int j = 0; j < 4; j++) row.Append(MakeCell("", false));
            t1.Append(row);
        }
        body.Append(t1);
        body.Append(new Paragraph());

        AddH1(body, "三、12周里程碑");
        var t2 = new Table();
        t2.Append(MakeHeaderRow(new[] { "周次", "起止日期", "核心任务", "预期成果", "完成度" }));
        for (int i = 1; i <= 12; i++)
        {
            var row = new TableRow();
            row.Append(MakeCell("第" + i + "周", true));
            row.Append(MakeCell("", false));
            row.Append(MakeCell("", false));
            row.Append(MakeCell("", false));
            row.Append(MakeCell("□ 完成  □ 部分  □ 未完成", false));
            t2.Append(row);
        }
        body.Append(t2);
        body.Append(new Paragraph());

        AddH1(body, "四、第一阶段详细计划(1-30天)");
        AddParagraph(body, "[阶段目标]");
        for (int i = 0; i < 2; i++) AddParagraph(body, "_______________________________________________");
        AddParagraph(body, "");

        var t3 = new Table();
        t3.Append(MakeHeaderRow(new[] { "时间", "行动项", "所需资源", "障碍/风险", "应对方案" }));
        for (int i = 1; i <= 10; i++)
        {
            var row = new TableRow();
            row.Append(MakeCell("第___周", false));
            for (int j = 0; j < 4; j++) row.Append(MakeCell("", false));
            t3.Append(row);
        }
        body.Append(t3);
        body.Append(new Paragraph());

        AddH1(body, "五、第二阶段详细计划(31-60天)");
        AddParagraph(body, "[阶段目标]");
        for (int i = 0; i < 2; i++) AddParagraph(body, "_______________________________________________");
        AddParagraph(body, "");

        var t4 = new Table();
        t4.Append(MakeHeaderRow(new[] { "时间", "行动项", "所需资源", "障碍/风险", "应对方案" }));
        for (int i = 1; i <= 10; i++)
        {
            var row = new TableRow();
            row.Append(MakeCell("第___周", false));
            for (int j = 0; j < 4; j++) row.Append(MakeCell("", false));
            t4.Append(row);
        }
        body.Append(t4);
        body.Append(new Paragraph());

        AddH1(body, "六、第三阶段详细计划(61-90天)");
        AddParagraph(body, "[阶段目标]");
        for (int i = 0; i < 2; i++) AddParagraph(body, "_______________________________________________");
        AddParagraph(body, "");

        var t5 = new Table();
        t5.Append(MakeHeaderRow(new[] { "时间", "行动项", "所需资源", "障碍/风险", "应对方案" }));
        for (int i = 1; i <= 10; i++)
        {
            var row = new TableRow();
            row.Append(MakeCell("第___周", false));
            for (int j = 0; j < 4; j++) row.Append(MakeCell("", false));
            t5.Append(row);
        }
        body.Append(t5);
        body.Append(new Paragraph());

        AddH1(body, "七、每日行动追踪");
        AddParagraph(body, "从今天开始,每天回答这三个问题:");
        AddParagraph(body, "");
        var t6 = new Table();
        t6.Append(MakeHeaderRow(new[] { "日期", "今天最重要的1件事", "与90天目标的相关性", "完成情况" }));
        for (int i = 1; i <= 14; i++)
        {
            var row = new TableRow();
            row.Append(MakeCell("Day " + i, false));
            for (int j = 0; j < 3; j++) row.Append(MakeCell("", false));
            t6.Append(row);
        }
        body.Append(t6);

        AddReflection(body, "练习七");
        AddStudentInfo(body);
        SetPage(doc);
        mainPart.Document.Save();
        Console.WriteLine("Generated: " + filePath);
    }

    // ==================== Exercise 8 ====================
    static void GenEx8()
    {
        string filePath = OutputBase + "08-练习-行动承诺书.docx";
        using var doc = WordprocessingDocument.Create(filePath, WordprocessingDocumentType.Document);
        var mainPart = doc.AddMainDocumentPart();
        mainPart.Document = new Document();
        var body = new Body();
        mainPart.Document.Append(body);

        AddTitle(body, "练习八:行动承诺书");
        AddGoal(body, "通过正式的书面承诺,明确你的核心行动承诺与成果预期,签署承诺书形成约束力,为90天转型之旅建立责任机制。");
        AddBackground(body, "承诺的力量在于公开与正式。当一个人把承诺写下来并签名,就形成了心理契约——这大大增加了行动的概率。CEO们对自己和他人的承诺都极其认真。");

        AddH1(body, "行动承诺书");
        AddParagraph(body, "");
        AddParagraph(body, "        [破局.重启:用CEO思维重塑职业生涯]");
        AddParagraph(body, "");
        AddParagraph(body, "                  正式承诺书");
        AddParagraph(body, "");
        AddParagraph(body, "签署日期:______年______月______日");
        AddParagraph(body, "");

        AddH2(body, "我郑重承诺做到以下三件事:");
        AddParagraph(body, "");
        AddParagraph(body, "第一件事:_______________________________________________");
        AddParagraph(body, "完成时间:______年______月______日之前");
        AddParagraph(body, "为什么这件事对我重要:___________________________________");
        AddParagraph(body, "");
        AddParagraph(body, "第二件事:_______________________________________________");
        AddParagraph(body, "完成时间:______年______月______日之前");
        AddParagraph(body, "为什么这件事对我重要:___________________________________");
        AddParagraph(body, "");
        AddParagraph(body, "第三件事:_______________________________________________");
        AddParagraph(body, "完成时间:______年______月______日之前");
        AddParagraph(body, "为什么这件事对我重要:___________________________________");
        AddParagraph(body, "");

        AddH2(body, "当我兑现承诺,我将获得的成果:");
        AddParagraph(body, "");
        AddParagraph(body, "1. 短期成果(30天内):");
        for (int i = 0; i < 3; i++) AddParagraph(body, "_______________________________________________");
        AddParagraph(body, "");
        AddParagraph(body, "2. 中期成果(60天内):");
        for (int i = 0; i < 3; i++) AddParagraph(body, "_______________________________________________");
        AddParagraph(body, "");
        AddParagraph(body, "3. 长期成果(90天及以后):");
        for (int i = 0; i < 3; i++) AddParagraph(body, "_______________________________________________");
        AddParagraph(body, "");

        AddH2(body, "我预见的障碍与应对策略:");
        AddParagraph(body, "");
        AddParagraph(body, "障碍1:_______________________________________________");
        AddParagraph(body, "应对:_______________________________________________");
        AddParagraph(body, "");
        AddParagraph(body, "障碍2:_______________________________________________");
        AddParagraph(body, "应对:_______________________________________________");
        AddParagraph(body, "");
        AddParagraph(body, "障碍3:_______________________________________________");
        AddParagraph(body, "应对:_______________________________________________");
        AddParagraph(body, "");

        AddH2(body, "承诺人签署");
        AddParagraph(body, "");
        AddParagraph(body, "我理解并同意:");
        AddParagraph(body, "- 此承诺书是我真实意愿的表达");
        AddParagraph(body, "- 我将全力以赴兑现承诺");
        AddParagraph(body, "- 如未完成,我将进行复盘并调整策略");
        AddParagraph(body, "- 我愿意为此承担全部责任");
        AddParagraph(body, "");
        AddParagraph(body, "");
        AddParagraph(body, "签名:______________________");
        AddParagraph(body, "日期:______年______月______日");
        AddParagraph(body, "");
        AddParagraph(body, "地点:_______________________________________________");
        AddParagraph(body, "");

        AddH2(body, "见证人签字(可选)");
        AddParagraph(body, "");
        AddParagraph(body, "我见证了承诺人的签署,并愿意在其需要时提供支持与鼓励。");
        AddParagraph(body, "");
        AddParagraph(body, "见证人1:______________________    联系方式:_______________");
        AddParagraph(body, "签名:______________________    日期:______年______月______日");
        AddParagraph(body, "");
        AddParagraph(body, "见证人2:______________________    联系方式:_______________");
        AddParagraph(body, "签名:______________________    日期:______年______月______日");
        AddParagraph(body, "");

        AddH1(body, "承诺保存与执行建议");
        AddParagraph(body, "1. 将此承诺书放在你每天能看到的地方(办公桌、手机壁纸等)");
        AddParagraph(body, "2. 告诉3个信任的朋友你的承诺,让他们成为你的问责伙伴");
        AddParagraph(body, "3. 每周复盘一次进度,在承诺书上记录完成情况");
        AddParagraph(body, "4. 90天后,对照承诺书进行最终成果评估");
        AddParagraph(body, "");

        AddParagraph(body, "");
        AddParagraph(body, "-------------------------------------------------------------");
        AddParagraph(body, " 破局.重启  |  用CEO思维重塑职业生涯  |  承诺的力量在于行动 ");
        AddParagraph(body, "-------------------------------------------------------------");

        AddReflection(body, "练习八");
        AddStudentInfo(body);
        SetPage(doc);
        mainPart.Document.Save();
        Console.WriteLine("Generated: " + filePath);
    }

    // ==================== Helper Methods ====================

    static void AddTitle(Body body, string text)
    {
        var p = new Paragraph();
        var pPr = new ParagraphProperties(
            new Justification { Val = JustificationValues.Center },
            new SpacingBetweenLines { After = "400", Line = "360", LineRule = LineSpacingRuleValues.Auto }
        );
        p.Append(pPr);
        var r = new Run();
        var rPr = new RunProperties(
            new Bold(),
            new FontSize { Val = "40" },
            new FontSizeComplexScript { Val = "40" },
            new Color { Val = "2F5496" }
        );
        r.Append(rPr);
        r.Append(new Text(text));
        p.Append(r);
        body.Append(p);
    }

    static void AddGoal(Body body, string text)
    {
        var p = new Paragraph();
        var pPr = new ParagraphProperties(
            new SpacingBetweenLines { After = "200", Line = "320", LineRule = LineSpacingRuleValues.Auto }
        );
        p.Append(pPr);
        var r = new Run();
        var rPr = new RunProperties(new Bold(), new Color { Val = "4472C4" });
        r.Append(rPr);
        r.Append(new Text("练习目标:"));
        p.Append(r);
        p.Append(new Text(text));
        body.Append(p);
    }

    static void AddBackground(Body body, string text)
    {
        var p = new Paragraph();
        var pPr = new ParagraphProperties(
            new SpacingBetweenLines { After = "200", Line = "320", LineRule = LineSpacingRuleValues.Auto }
        );
        p.Append(pPr);
        var r = new Run();
        var rPr = new RunProperties(new Italic(), new Color { Val = "666666" });
        r.Append(rPr);
        r.Append(new Text("背景知识:" + text));
        p.Append(r);
        body.Append(p);
    }

    static void AddH1(Body body, string text)
    {
        var p = new Paragraph();
        var pPr = new ParagraphProperties(
            new SpacingBetweenLines { Before = "400", After = "200" }
        );
        p.Append(pPr);
        var r = new Run();
        var rPr = new RunProperties(
            new Bold(),
            new FontSize { Val = "32" },
            new FontSizeComplexScript { Val = "32" },
            new Color { Val = "1F4E79" }
        );
        r.Append(rPr);
        r.Append(new Text(text));
        p.Append(r);
        body.Append(p);
    }

    static void AddH2(Body body, string text)
    {
        var p = new Paragraph();
        var pPr = new ParagraphProperties(
            new SpacingBetweenLines { Before = "300", After = "150" }
        );
        p.Append(pPr);
        var r = new Run();
        var rPr = new RunProperties(
            new Bold(),
            new FontSize { Val = "28" },
            new FontSizeComplexScript { Val = "28" },
            new Color { Val = "2F5496" }
        );
        r.Append(rPr);
        r.Append(new Text(text));
        p.Append(r);
        body.Append(p);
    }

    static void AddParagraph(Body body, string text, bool bold = false)
    {
        var p = new Paragraph();
        var pPr = new ParagraphProperties(
            new SpacingBetweenLines { After = "120", Line = "320", LineRule = LineSpacingRuleValues.Auto }
        );
        p.Append(pPr);
        var r = new Run();
        var rPr = new RunProperties(
            new FontSize { Val = "22" },
            new FontSizeComplexScript { Val = "22" }
        );
        if (bold) rPr.Append(new Bold());
        r.Append(rPr);
        r.Append(new Text(text));
        p.Append(r);
        body.Append(p);
    }

    static TableRow MakeHeaderRow(string[] cells)
    {
        var row = new TableRow();
        foreach (var text in cells)
        {
            row.Append(MakeCell(text, true));
        }
        return row;
    }

    static TableRow MakeRow(string[] cells)
    {
        var row = new TableRow();
        foreach (var text in cells)
        {
            row.Append(MakeCell(text, false));
        }
        return row;
    }

    static TableCell MakeCell(string text, bool isHeader, string bgColor = null)
    {
        var cell = new TableCell();
        var tcPr = new TableCellProperties();

        tcPr.Append(new TableCellBorders(
            new TopBorder { Val = BorderValues.Single, Size = 4, Color = "999999" },
            new BottomBorder { Val = BorderValues.Single, Size = 4, Color = "999999" },
            new LeftBorder { Val = BorderValues.Single, Size = 4, Color = "999999" },
            new RightBorder { Val = BorderValues.Single, Size = 4, Color = "999999" }
        ));

        tcPr.Append(new TableCellMargin(
            new TopMargin { Width = "60", Type = TableWidthUnitValues.Dxa },
            new BottomMargin { Width = "60", Type = TableWidthUnitValues.Dxa },
            new LeftMargin { Width = "100", Type = TableWidthUnitValues.Dxa },
            new RightMargin { Width = "100", Type = TableWidthUnitValues.Dxa }
        ));

        if (isHeader)
        {
            tcPr.Append(new Shading { Val = ShadingPatternValues.Clear, Fill = "4472C4" });
            tcPr.Append(new TableCellVerticalAlignment { Val = TableVerticalAlignmentValues.Center });
        }
        else if (!string.IsNullOrEmpty(bgColor))
        {
            tcPr.Append(new Shading { Val = ShadingPatternValues.Clear, Fill = bgColor });
        }

        cell.Append(tcPr);

        var p = new Paragraph();
        var pPr = new ParagraphProperties(
            new SpacingBetweenLines { After = "60" }
        );
        p.Append(pPr);

        var r = new Run();
        var rPr = new RunProperties(
            new FontSize { Val = "21" },
            new FontSizeComplexScript { Val = "21" }
        );
        if (isHeader) rPr.Append(new Bold());
        r.Append(rPr);
        r.Append(new Text(text));
        p.Append(r);
        cell.Append(p);

        return cell;
    }

    static void AddReflection(Body body, string exerciseName)
    {
        AddH1(body, "练习后反思 - " + exerciseName);
        AddParagraph(body, "完成练习后,请思考以下问题:");
        AddParagraph(body, "");
        AddParagraph(body, "1. 通过这个练习,我最深刻的领悟是:");
        AddParagraph(body, "   _______________________________________________");
        AddParagraph(body, "");
        AddParagraph(body, "2. 我发现自己的盲区/卡点是:");
        AddParagraph(body, "   _______________________________________________");
        AddParagraph(body, "");
        AddParagraph(body, "3. 我决定立即采取的行动是:");
        AddParagraph(body, "   _______________________________________________");
        AddParagraph(body, "");
    }

    static void AddStudentInfo(Body body)
    {
        AddH1(body, "学员信息区");
        var infoTable = new Table();
        infoTable.Append(MakeRow(new[] { "姓名", "" }));
        infoTable.Append(MakeRow(new[] { "日期", "" }));
        infoTable.Append(MakeRow(new[] { "组别", "" }));
        body.Append(infoTable);
        body.Append(new Paragraph());
    }

    static void SetPage(WordprocessingDocument doc)
    {
        var body = doc.MainDocumentPart.Document.Body;
        var sectPr = new SectionProperties(
            new PageSize { Width = 16838, Height = 11906 },
            new PageMargin
            {
                Top = 1134,
                Right = 1134,
                Bottom = 1134,
                Left = 1134,
                Header = 720,
                Footer = 720,
                Gutter = 0
            }
        );
        body.Append(sectPr);
    }
}
