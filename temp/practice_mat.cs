#r "nuget: DocumentFormat.OpenXml, 3.2.0"

using DocumentFormat.OpenXml;
using DocumentFormat.OpenXml.Packaging;
using DocumentFormat.OpenXml.Wordprocessing;

string outputPath = "D:/新课开发/工作手册/一线管理者日常辅导对话标准化/完整课程包/09-练习材料/练习材料集.docx";

var doc = WordprocessingDocument.Create(outputPath, WordprocessingDocumentType.Document);
var mainPart = doc.AddMainDocumentPart();
mainPart.Document = new Document();
var body = new Body();

var sectPr = new SectionProperties(
    new PageSize { Width = 16838, Height = 11906 },
    new PageMargin { Top = 1440, Right = 1440, Bottom = 1440, Left = 1800, Header = 720, Footer = 720, Gutter = 0 }
);

Paragraph MakeTitle(string text) {
    return new Paragraph(
        new ParagraphProperties(
            new Justification { Val = JustificationValues.Center },
            new SpacingBetweenLines { Before = "400", After = "400" }
        ),
        new Run(
            new RunProperties(
                new Bold(),
                new FontSize { Val = "32" },
                new FontSizeComplexScript { Val = "32" },
                new Color { Val = "1F3864" }
            ),
            new Text(text)
        )
    );
}

Paragraph MakeHeading(string text) {
    return new Paragraph(
        new ParagraphProperties(
            new SpacingBetweenLines { Before = "300", After = "200" }
        ),
        new Run(
            new RunProperties(
                new Bold(),
                new FontSize { Val = "28" },
                new FontSizeComplexScript { Val = "28" },
                new Color { Val = "1F3864" }
            ),
            new Text(text)
        )
    );
}

Paragraph MakeSubHeading(string text) {
    return new Paragraph(
        new ParagraphProperties(
            new SpacingBetweenLines { Before = "240", After = "120" }
        ),
        new Run(
            new RunProperties(
                new Bold(),
                new FontSize { Val = "24" },
                new FontSizeComplexScript { Val = "24" }
            ),
            new Text(text)
        )
    );
}

Paragraph MakeBody(string text) {
    return new Paragraph(
        new ParagraphProperties(
            new SpacingBetweenLines { After = "120", Line = "276", LineRule = LineSpacingRuleValues.Auto }
        ),
        new Run(
            new RunProperties(
                new FontSize { Val = "21" },
                new FontSizeComplexScript { Val = "21" }
            ),
            new Text(text)
        )
    );
}

Paragraph MakeBlank() {
    return new Paragraph(new Run(new Text("")));
}

Table CreateSimpleTable(string[] headers, string[][] rows) {
    var tbl = new Table();
    var tblPr = new TableProperties(
        new TableBorders(
            new TopBorder { Val = BorderValues.Single, Size = 4, Color = "000000" },
            new BottomBorder { Val = BorderValues.Single, Size = 4, Color = "000000" },
            new LeftBorder { Val = BorderValues.Single, Size = 4, Color = "000000" },
            new RightBorder { Val = BorderValues.Single, Size = 4, Color = "000000" },
            new InsideHorizontalBorder { Val = BorderValues.Single, Size = 4, Color = "000000" },
            new InsideVerticalBorder { Val = BorderValues.Single, Size = 4, Color = "000000" }
        ),
        new TableWidth { Width = "5000", Type = TableWidthUnitValues.Pct }
    );
    tbl.Append(tblPr);

    var headerRow = new TableRow();
    foreach (var h in headers) {
        var tc = new TableCell(
            new TableCellProperties(new Shading { Fill = "1F3864" }),
            new Paragraph(
                new ParagraphProperties(new Justification { Val = JustificationValues.Center }),
                new Run(
                    new RunProperties(
                        new Bold(),
                        new Color { Val = "FFFFFF" },
                        new FontSize { Val = "21" },
                        new FontSizeComplexScript { Val = "21" }
                    ),
                    new Text(h)
                )
            )
        );
        headerRow.Append(tc);
    }
    tbl.Append(headerRow);

    foreach (var row in rows) {
        var tr = new TableRow();
        foreach (var cell in row) {
            var tc = new TableCell(
                new Paragraph(
                    new Run(
                        new RunProperties(
                            new FontSize { Val = "21" },
                            new FontSizeComplexScript { Val = "21" }
                        ),
                        new Text(cell)
                    )
                )
            );
            tr.Append(tc);
        }
        tbl.Append(tr);
    }
    return tbl;
}

body.Append(MakeTitle("一线管理者日常辅导对话标准化"));
body.Append(MakeTitle("练习材料集"));
body.Append(MakeBlank());

body.Append(MakeHeading("第一部分：角色扮演场景卡"));
body.Append(MakeBlank());

body.Append(MakeSubHeading("场景1：迟到问题约谈"));
body.Append(MakeBody("【背景描述】"));
body.Append(MakeBody("员工小张最近一个月迟到了5次，每次迟到5-10分钟。主管老李通过出勤记录发现了这个问题，但没有立即责备，而是计划进行一次辅导对话。"));
body.Append(MakeBlank());
body.Append(MakeBody("【角色分配】"));
body.Append(MakeBody("主管（扮演者A）：老李，班组长"));
body.Append(MakeBody("员工（扮演者B）：小张，入职2年的生产工人"));
body.Append(MakeBlank());
body.Append(MakeBody("【对话目标】"));
body.Append(MakeBody("1. 主管能用提问的方式了解迟到的真实原因"));
body.Append(MakeBody("2. 主管能讲清迟到对团队和员工本人的影响"));
body.Append(MakeBody("3. 员工能自己说出改善的建议"));
body.Append(MakeBody("4. 双方约定具体的跟进时间和检验方式"));
body.Append(MakeBlank());
body.Append(MakeBody("【评估标准】"));
body.Append(MakeBody("• 主管开口第一句是否为问句（非判断句）"));
body.Append(MakeBody("• 是否有3轮以上的追问了解事实"));
body.Append(MakeBody("• 影响阐述是否具体"));
body.Append(MakeBody("• 建议是否由员工自己说出"));
body.Append(MakeBody("• 是否有明确的跟进计划"));
body.Append(MakeBlank());
body.Append(MakeBody("【时间要求】10-15分钟"));
body.Append(MakeBlank());

body.Append(MakeSubHeading("场景2：绩效下滑沟通"));
body.Append(MakeBody("【背景描述】"));
body.Append(MakeBody("客服员工小王这个月的客户满意度评分从90分下降到75分，主管需要了解原因并帮助改善。"));
body.Append(MakeBlank());
body.Append(MakeBody("【角色分配】"));
body.Append(MakeBody("主管（扮演者A）：客服组长"));
body.Append(MakeBody("员工（扮演者B）：小王，客服代表"));
body.Append(MakeBlank());
body.Append(MakeBody("【对话目标】"));
body.Append(MakeBody("1. 主管先请员工自己分析数据下滑的原因"));
body.Append(MakeBody("2. 主管用客观数据与员工归因进行对照"));
body.Append(MakeBody("3. 区分态度问题、能力问题还是外部因素"));
body.Append(MakeBody("4. 引导员工自己说出具体的改善方案"));
body.Append(MakeBlank());
body.Append(MakeBody("【评估标准】"));
body.Append(MakeBody("• 主管是否先问员工自己的归因"));
body.Append(MakeBody("• 是否有拿数据对照而非直接否定员工说法"));
body.Append(MakeBody("• 建议是否由员工自己提出"));
body.Append(MakeBody("• 是否约定了具体的数据检验时间点"));
body.Append(MakeBlank());

body.Append(MakeSubHeading("场景3：老员工不服管"));
body.Append(MakeBody("【背景描述】"));
body.Append(MakeBody("新提拔的班组长小陈，手下有个老员工老周，比小陈早进厂5年。小陈第一次指出老周操作不规范的问题时，老周说：这活我干的时候你还没进厂呢。"));
body.Append(MakeBlank());
body.Append(MakeBody("【角色分配】"));
body.Append(MakeBody("主管（扮演者A）：小陈，新提拔的班组长"));
body.Append(MakeBody("老员工（扮演者B）：老周，资深员工"));
body.Append(MakeBlank());
body.Append(MakeBody("【对话目标】"));
body.Append(MakeBody("1. 主管先认可老员工的资历"));
body.Append(MakeBody("2. 把话题引回到具体操作细节上"));
body.Append(MakeBody("3. 让老员工自己说出更好的处理方式"));
body.Append(MakeBody("4. 将老员工的经验转化为团队资源"));
body.Append(MakeBlank());
body.Append(MakeBody("【评估标准】"));
body.Append(MakeBody("• 主管是否先认可对方资历而非争辩"));
body.Append(MakeBody("• 能否把讨论聚焦在具体事情上而非谁更有资格"));
body.Append(MakeBody("• 是否邀请老员工参与解决方案的制定"));
body.Append(MakeBody("• 能否将对抗转化为合作"));
body.Append(MakeBlank());

body.Append(MakeSubHeading("场景4：情绪失控处理"));
body.Append(MakeBody("【背景描述】"));
body.Append(MakeBody("主管找员工小刘谈绩效问题，谈到一半小刘突然情绪激动，声音变大说你们天天就知道盯着我，别人迟到怎么没人管，眼眶都红了。"));
body.Append(MakeBlank());
body.Append(MakeBody("【角色分配】"));
body.Append(MakeBody("主管（扮演者A）：生产主管"));
body.Append(MakeBody("员工（扮演者B）：小刘，情绪激动的员工"));
body.Append(MakeBlank());
body.Append(MakeBody("【对话目标】"));
body.Append(MakeBody("1. 主管能识别情绪失控的信号"));
body.Append(MakeBody("2. 主动按下暂停键，不继续讲道理"));
body.Append(MakeBody("3. 给员工情绪空间，约定改天再谈"));
body.Append(MakeBody("4. 事后能重启谈话并真正解决问题"));
body.Append(MakeBlank());
body.Append(MakeBody("【评估标准】"));
body.Append(MakeBody("• 能否识别情绪失控的早期信号"));
body.Append(MakeBody("• 是否果断暂停而非继续讲道理"));
body.Append(MakeBody("• 暂停时是否把决定权交给对方"));
body.Append(MakeBody("• 是否有约定具体的后续沟通时间"));
body.Append(MakeBlank());

body.Append(MakeHeading("第二部分：场景演练记录表"));
body.Append(MakeBlank());

body.Append(CreateSimpleTable(
    new[] { "项目", "内容" },
    new[] {
        new[] { "演练日期", "____年____月____日" },
        new[] { "演练地点", "" },
        new[] { "场景类型", "□迟到问题 □绩效下滑 □老员工不服管 □情绪失控 □其他" },
        new[] { "主管", "" },
        new[] { "员工", "" },
        new[] { "观察员", "" }
    }
));

body.Append(MakeBlank());
body.Append(MakeSubHeading("演练过程记录"));
body.Append(MakeBlank());
body.Append(MakeBody("1. 主管开场方式：________________"));
body.Append(MakeBody("   是否符合先问后说原则：□是 □否"));
body.Append(MakeBlank());
body.Append(MakeBody("2. 事实确认追问轮数：____轮"));
body.Append(MakeBlank());
body.Append(MakeBody("3. 影响阐述情况："));
body.Append(MakeBody("   • 是否具体：□是 □否"));
body.Append(MakeBody("   • 是否联系到员工本人：□是 □否"));
body.Append(MakeBlank());
body.Append(MakeBody("4. 建议引导情况："));
body.Append(MakeBody("   • 建议由谁提出：□主管 □员工"));
body.Append(MakeBody("   • 是否具体可执行：□是 □否"));
body.Append(MakeBlank());
body.Append(MakeBody("5. 跟进计划："));
body.Append(MakeBody("   • 时间点：________________"));
body.Append(MakeBody("   • 检验方式：________________"));
body.Append(MakeBlank());

body.Append(MakeSubHeading("反馈与改进"));
body.Append(MakeBody("观察员反馈要点："));
body.Append(MakeBody("________________________________________"));
body.Append(MakeBlank());
body.Append(MakeBody("主管自我反思："));
body.Append(MakeBody("________________________________________"));
body.Append(MakeBlank());
body.Append(MakeBody("下次演练重点改进："));
body.Append(MakeBody("________________________________________"));
body.Append(MakeBlank());

body.Append(MakeHeading("第三部分：自我评估问卷"));
body.Append(MakeBlank());

body.Append(MakeSubHeading("知识掌握自测（判断题）"));
body.Append(MakeBlank());

body.Append(CreateSimpleTable(
    new[] { "题目", "正确", "错误" },
    new[] {
        new[] { "1. 辅导对话的第一步应该是直接指出员工的问题。", "□", "□" },
        new[] { "2. 你怎么又迟到了是标准的辅导开场白。", "□", "□" },
        new[] { "3. 事实确认阶段，主管应该先听员工说，再做判断。", "□", "□" },
        new[] { "4. 影响阐述时，只讲对团队的影响就够了。", "□", "□" },
        new[] { "5. 建议最好由员工自己说出来。", "□", "□" },
        new[] { "6. 没有跟进计划的辅导约等于没谈。", "□", "□" }
    }
));

body.Append(MakeBlank());
body.Append(MakeSubHeading("技能应用自测（情景题）"));
body.Append(MakeBlank());
body.Append(MakeBody("情境：你发现员工小李连续两周绩效下滑20%。"));
body.Append(MakeBody("请选择你认为最合适的开场白："));
body.Append(MakeBody("A. 小李，你这周绩效怎么下滑了这么多？"));
body.Append(MakeBody("B. 小李，最近的数据有些变化，你自己怎么看？"));
body.Append(MakeBody("C. 小李，你知不知道你拖了团队后腿？"));
body.Append(MakeBody("D. 小李，你的表现太差了，明天来我办公室一趟。"));
body.Append(MakeBlank());
body.Append(MakeBody("正确答案：B"));
body.Append(MakeBlank());

body.Append(MakeSubHeading("态度转变自测（评分题）"));
body.Append(MakeBody("请根据你的实际情况评分（1-5分，1分=完全不符合，5分=完全符合）"));
body.Append(MakeBlank());

body.Append(CreateSimpleTable(
    new[] { "评估项目", "评分" },
    new[] {
        new[] { "1. 我愿意在开口前先花时间了解事实。", "□1 □2 □3 □4 □5" },
        new[] { "2. 我能克制住直接给答案的冲动。", "□1 □2 □3 □4 □5" },
        new[] { "3. 我重视让员工自己说出解决方案。", "□1 □2 □3 □4 □5" },
        new[] { "4. 我会坚持执行跟进计划。", "□1 □2 □3 □4 □5" }
    }
));

body.Append(MakeBlank());

body.Append(MakeHeading("第四部分：行动计划模板"));
body.Append(MakeBlank());

body.Append(MakeSubHeading("个人改进计划"));
body.Append(CreateSimpleTable(
    new[] { "项目", "内容" },
    new[] {
        new[] { "姓名", "" },
        new[] { "部门", "" },
        new[] { "填写日期", "" }
    }
));

body.Append(MakeBlank());
body.Append(MakeBody("我的辅导薄弱点"));
body.Append(MakeBody("（请列出你最希望在接下来的练习中改进的1-2个具体点）"));
body.Append(MakeBlank());
body.Append(MakeBody("1. _______________"));
body.Append(MakeBody("2. _______________"));
body.Append(MakeBlank());
body.Append(MakeBody("具体改进行动"));
body.Append(MakeBody("（针对每个薄弱点，写出具体要做什么）"));
body.Append(MakeBlank());
body.Append(MakeBody("目标行为1：_______________"));
body.Append(MakeBody("具体行动："));
body.Append(MakeBody("- _______________"));
body.Append(MakeBody("- _______________"));
body.Append(MakeBlank());
body.Append(MakeBody("目标行为2：_______________"));
body.Append(MakeBody("具体行动："));
body.Append(MakeBody("- _______________"));
body.Append(MakeBody("- _______________"));
body.Append(MakeBlank());

body.Append(MakeSubHeading("三周实践记录"));
body.Append(MakeBlank());

body.Append(MakeBody("第一周实践记录（____月____日 - ____月____日）"));
body.Append(MakeBody("实践场景：_______________"));
body.Append(MakeBody("具体做法：_______________"));
body.Append(MakeBody("遇到困难：_______________"));
body.Append(MakeBody("心得：_______________"));
body.Append(MakeBlank());

body.Append(MakeBody("第二周实践记录（____月____日 - ____月____日）"));
body.Append(MakeBody("实践场景：_______________"));
body.Append(MakeBody("具体做法：_______________"));
body.Append(MakeBody("遇到困难：_______________"));
body.Append(MakeBody("心得：_______________"));
body.Append(MakeBlank());

body.Append(MakeBody("第三周实践记录（____月____日 - ____月____日）"));
body.Append(MakeBody("实践场景：_______________"));
body.Append(MakeBody("具体做法：_______________"));
body.Append(MakeBody("遇到困难：_______________"));
body.Append(MakeBody("心得：_______________"));
body.Append(MakeBlank());

body.Append(MakeSubHeading("心得总结"));
body.Append(MakeBody("通过三周实践，我最大的收获是："));
body.Append(MakeBody("_______________________________________________"));
body.Append(MakeBlank());
body.Append(MakeBody("我仍然需要改进的地方是："));
body.Append(MakeBody("_______________________________________________"));
body.Append(MakeBlank());
body.Append(MakeBody("我会继续坚持的做法是："));
body.Append(MakeBody("_______________________________________________"));

body.Append(sectPr);

mainPart.Document.Append(body);
mainPart.Document.Save();
doc.Dispose();

Console.WriteLine("Document created: " + outputPath);
