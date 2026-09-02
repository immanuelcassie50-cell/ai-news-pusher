#r "nuget: DocumentFormat.OpenXml, 3.2.0"

using DocumentFormat.OpenXml;
using DocumentFormat.OpenXml.Packaging;
using DocumentFormat.OpenXml.Wordprocessing;

string outputPath = "D:/新课开发/工作手册/一线管理者日常辅导对话标准化/完整课程包/07-案例集/案例集.docx";

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
body.Append(MakeTitle("案例集"));
body.Append(MakeBlank());

body.Append(MakeHeading("第一部分：成功案例"));
body.Append(MakeBlank());

body.Append(MakeSubHeading("案例1：迟到辅导的成功对话"));
body.Append(MakeBlank());
body.Append(MakeBody("[背景]"));
body.Append(MakeBody("某生产车间班组长小张，发现新员工小李连续两周迟到。小张没有直接批评，而是按照四步辅导法进行对话。"));
body.Append(MakeBlank());
body.Append(MakeBody("[对话过程]"));
body.Append(MakeBody("主管：小李，最近上班途中有什么不方便吗？我注意到你这周有两次晚到。（先问后说，了解情况）"));
body.Append(MakeBody("员工：唉，别提了。我家附近在修地铁，早上公交车要绕路，比以前多花20多分钟。"));
body.Append(MakeBody("主管：修地铁确实影响不小。那你是怎么解决的呢？（继续追问）"));
body.Append(MakeBody("员工：我试过提前一班公交，但早上要早起一个小时，太累了。"));
body.Append(MakeBody("主管：我理解，提前一班确实辛苦。你觉得有没有什么办法可以既不这么累又能准时到岗？（引导建议）"));
body.Append(MakeBody("员工：如果能租一辆电动车就好了，大概15分钟就能到。但我现在刚来深圳，押金有点困难。"));
body.Append(MakeBody("主管：这个思路不错。电动车确实能解决问题。关于押金的问题，公司有一个员工应急借款政策，我可以帮你申请。（提供资源）"));
body.Append(MakeBody("员工：真的吗？那太好了！"));
body.Append(MakeBody("主管：我们约定一下，这周先提前一班公交，下周我帮你申请借款，你看看买电动车需要多少钱，我们再来跟进。（跟进计划）"));
body.Append(MakeBlank());
body.Append(MakeBody("[效果]"));
body.Append(MakeBody("两周后，小李购买了电动车，再也没有迟到过。更重要的是，小李感受到了主管的关心，后续工作中主动请教，三个月后成为班组的技术骨干。"));
body.Append(MakeBlank());
body.Append(MakeBody("[成功要素分析]"));
body.Append(CreateSimpleTable(
    new[] { "要素", "做法" },
    new[] {
        new[] { "事实确认", "用提问开场，而非直接指出问题，让员工感到被尊重" },
        new[] { "影响阐述", "没有直接批评，而是关心员工遇到的困难" },
        new[] { "建议引导", "让员工自己提出解决方案（电动车），主管提供资源支持" },
        new[] { "跟进落实", "明确的跟进时间和具体行动" }
    }
));
body.Append(MakeBlank());

body.Append(MakeSubHeading("案例2：老员工辅导的转化"));
body.Append(MakeBlank());
body.Append(MakeBody("[背景]"));
body.Append(MakeBody("新晋升的质量主管小王手下有一位工作15年的质检员老陈。最近老陈在填写检验报告时频繁出错，导致产品漏检风险增加。"));
body.Append(MakeBlank());
body.Append(MakeBody("[对话过程]"));
body.Append(MakeBody("主管：老陈，您好。您在质检这个岗位上已经15年了，是公司最资深的质检员。（先认可资历）"));
body.Append(MakeBody("员工：是啊，以前检验报告都是我负责的，从来没出过问题。"));
body.Append(MakeBody("主管：我知道您经验丰富。我注意到最近检验报告的错误率有所上升，想请教您一下，您觉得可能是什么原因？（把问题具体化）"));
body.Append(MakeBody("员工：这个月产品型号更新太快了，新产品检验标准有十几处修改，我年纪大了，记不住那么多。"));
body.Append(MakeBody("主管：原来如此。新产品标准确实变化大。您在质检岗位这么多年，肯定有自己的一套好方法。您觉得怎么才能既保证质量又不出错呢？（引导建议）"));
body.Append(MakeBody("员工：能不能把检验标准做成小卡片，我放在工位上，对照着填？这样不容易漏。"));
body.Append(MakeBody("主管：这个方法好。我来帮您把最新的检验标准做成核对清单，您看怎么样？（资源支持）"));
body.Append(MakeBlank());
body.Append(MakeBody("[效果]"));
body.Append(MakeBody("使用核对清单后，老陈的错误率降为零。而且老陈主动提出可以把自己的经验整理成培训材料，帮助其他新人。"));
body.Append(MakeBlank());
body.Append(MakeBody("[成功要素分析]"));
body.Append(CreateSimpleTable(
    new[] { "要素", "做法" },
    new[] {
        new[] { "事实确认", "用请教的方式开头，把问题聚焦在具体事实上" },
        new[] { "影响阐述", "先认可老员工的资历，避免对立情绪" },
        new[] { "建议引导", "让老员工自己提出解决方法，尊重其经验" },
        new[] { "跟进落实", "提供具体的资源支持（核对清单）" }
    }
));
body.Append(MakeBlank());

body.Append(MakeSubHeading("案例3：情绪失控后的重建对话"));
body.Append(MakeBlank());
body.Append(MakeBody("[背景]"));
body.Append(MakeBody("车间主任老张第一次找员工小刘谈绩效问题时，小刘情绪激动说你们天天盯着我，眼睛都红了。老张暂停了对话。"));
body.Append(MakeBlank());
body.Append(MakeBody("[第一次对话（暂停）]"));
body.Append(MakeBody("主管：小刘，我看到你很激动。这件事我们先不说了，你先去倒杯水休息一下。（按下暂停键）"));
body.Append(MakeBody("员工：（离开）"));
body.Append(MakeBlank());
body.Append(MakeBody("[第二次对话（三天后）]"));
body.Append(MakeBody("主管：小刘，上次谈话你有些激动，我一直在想是不是我哪里说得不合适。今天想再聊聊，不知道你现在情绪怎么样？（重启谈话，先关心对方感受）"));
body.Append(MakeBody("员工：上次是我不对，我不应该发火。但是您说的话让我觉得您就是在针对我。"));
body.Append(MakeBody("主管：谢谢你愿意告诉我你的感受。我想确认一下，是什么让我显得像在针对你？（追问具体）"));
body.Append(MakeBody("员工：您说我的产出低，可我上个月家里老人生病，我请了一周假，回来后您根本没问一句，直接就说产出低。"));
body.Append(MakeBody("主管：原来是这样。我确实不知道你家里的情况，这是我的疏忽。你家里老人现在身体怎么样？（表达关心）"));
body.Append(MakeBody("员工：已经出院了，谢谢关心。"));
body.Append(MakeBody("主管：那就好。如果你愿意的话，可以跟我讲讲那周请假期间工作是怎么安排的吗？我们来看看怎么在照顾家庭的同时也把工作做好。（实际问题解决）"));
body.Append(MakeBody("员工：其实我回来后每天都加班到很晚，就是想把进度赶回来……"));
body.Append(MakeBody("主管：我看到了。你的努力我都看在眼里。那我们一起想想，有什么办法能让你不那么辛苦？（共同解决）"));
body.Append(MakeBlank());
body.Append(MakeBody("[效果]"));
body.Append(MakeBody("小刘的情绪得到疏导后，主动加班赶进度，绩效逐步提升。更重要的是，老张养成了先了解情况再开口的习惯。"));
body.Append(MakeBlank());

body.Append(MakeHeading("第二部分：失败案例分析"));
body.Append(MakeBlank());

body.Append(MakeSubHeading("案例4：直接批评导致对抗"));
body.Append(MakeBlank());
body.Append(MakeBody("[背景]"));
body.Append(MakeBody("班组长小赵发现员工小钱连续三天迟到，直接在早会上点名批评。"));
body.Append(MakeBlank());
body.Append(MakeBody("[对话过程]"));
body.Append(MakeBody("主管：小钱，你怎么又迟到了？三天迟到两次，像话吗？（直接批评）"));
body.Append(MakeBody("员工：路上堵车，我也没办法。"));
body.Append(MakeBody("主管：堵车？别人怎么都能准时？就你特殊？（继续批评）"));
body.Append(MakeBody("员工：您这是针对我！别人也有迟到的时候您怎么不说？（产生对立）"));
body.Append(MakeBlank());
body.Append(MakeBody("[结果]"));
body.Append(MakeBody("小钱第二天又迟到了，而且对主管的辅导产生了强烈的抵触情绪。"));
body.Append(MakeBlank());
body.Append(MakeBody("[错误分析]"));
body.Append(CreateSimpleTable(
    new[] { "错误点", "正确做法" },
    new[] {
        new[] { "直接批评", "应该先问原因，了解情况" },
        new[] { "在公开场合批评", "应该私下单独谈话" },
        new[] { "用反问句", "应该用陈述句表达关心" },
        new[] { "没有给员工解释的机会", "应该先听员工说" }
    }
));
body.Append(MakeBlank());

body.Append(MakeSubHeading("案例5：只说影响不讲建议"));
body.Append(MakeBlank());
body.Append(MakeBody("[背景]"));
body.Append(MakeBody("主管老孙发现员工小周的销售业绩下滑30%，进行了一次辅导对话。"));
body.Append(MakeBlank());
body.Append(MakeBody("[对话过程]"));
body.Append(MakeBody("主管：小周，你这个月业绩下滑得很厉害，你知道吗？（直接指出）"));
body.Append(MakeBody("员工：我知道……"));
body.Append(MakeBody("主管：你知道？你知不知道你一个人拖了整个团队的后腿？（只说影响）"));
body.Append(MakeBody("员工：……"));
body.Append(MakeBody("主管：下个月再这样，年终奖就没了。（施加压力）"));
body.Append(MakeBody("员工：好的。（沉默离开）"));
body.Append(MakeBlank());
body.Append(MakeBody("[结果]"));
body.Append(MakeBody("小周虽然表面接受，但心里很不服气。他觉得主管只会施压，从不帮助他解决问题。一个月后，小周选择了离职。"));
body.Append(MakeBlank());
body.Append(MakeBody("[错误分析]"));
body.Append(CreateSimpleTable(
    new[] { "错误点", "正确做法" },
    new[] {
        new[] { "只说问题不说原因", "应该先问员工自己怎么分析原因" },
        new[] { "只说对团队的影响", "应该联系到员工本人的长远发展" },
        new[] { "只给压力不给支持", "应该引导员工自己提出解决方案并提供资源" },
        new[] { "没有跟进计划", "应该有明确的跟进时间和检验方式" }
    }
));
body.Append(MakeBlank());

body.Append(MakeSubHeading("案例6：忽略情绪导致对话失败"));
body.Append(MakeBlank());
body.Append(MakeBody("[背景]"));
body.Append(MakeBody("主管小刘与员工小陈谈绩效问题时，员工情绪明显激动，但主管继续讲道理。"));
body.Append(MakeBlank());
body.Append(MakeBody("[对话过程]"));
body.Append(MakeBody("主管：小陈，你最近绩效不好，我们来谈谈。（开场）"));
body.Append(MakeBody("员工：你们就知道看数据，有没有人关心过我们实际多辛苦？（情绪出现）"));
body.Append(MakeBody("主管：辛苦我们知道，但绩效就是绩效，这是事实。（继续讲道理）"));
body.Append(MakeBody("员工：你们在办公室里吹空调，我们在车间里汗流浃背！（情绪升级）"));
body.Append(MakeBody("主管：情绪化不能解决问题，你要冷静一下。（要求员工冷静）"));
body.Append(MakeBody("员工：我很冷静！（实际上已经情绪失控）"));
body.Append(MakeBlank());
body.Append(MakeBody("[结果]"));
body.Append(MakeBody("对话彻底失败，小陈摔门而出。当天下午就提交了调岗申请。"));
body.Append(MakeBlank());
body.Append(MakeBody("[错误分析]"));
body.Append(CreateSimpleTable(
    new[] { "错误点", "正确做法" },
    new[] {
        new[] { "忽视情绪信号", "应该及时识别员工情绪失控的早期信号" },
        new[] { "继续讲道理", "情绪失控时应该暂停对话" },
        new[] { "要求对方冷静", "应该把决定权交给对方" },
        new[] { "没有后续跟进", "应该在员工冷静后择日再谈" }
    }
));
body.Append(MakeBlank());

body.Append(MakeHeading("第三部分：讨论要点"));
body.Append(MakeBlank());

body.Append(MakeSubHeading("讨论1：辅导对话的时机选择"));
body.Append(MakeBody("问题："));
body.Append(MakeBody("1. 什么时候是进行辅导对话的最佳时机？"));
body.Append(MakeBody("2. 如果员工明显情绪不好，应该立即谈话还是改天再谈？"));
body.Append(MakeBody("3. 辅导对话应该定期进行还是等问题出现再进行？"));
body.Append(MakeBlank());
body.Append(MakeBody("参考答案："));
body.Append(MakeBody("- 发现问题的第一时间是最佳谈话时机，但前提是双方都冷静"));
body.Append(MakeBody("- 情绪不好时应该改天再谈，给员工情绪缓冲的时间"));
body.Append(MakeBody("- 定期的绩效沟通可以预防问题恶化，但不应替代问题发生后的及时辅导"));
body.Append(MakeBlank());

body.Append(MakeSubHeading("讨论2：辅导与批评的区别"));
body.Append(MakeBody("问题："));
body.Append(MakeBody("1. 辅导对话和批评有什么本质区别？"));
body.Append(MakeBody("2. 管理者在辅导中应该处于什么位置？"));
body.Append(MakeBody("3. 如果员工坚持说自己没问题，主管应该怎么办？"));
body.Append(MakeBlank());
body.Append(MakeBody("参考答案："));
body.Append(MakeBody("- 批评是单向的信息传递，辅导是双向的对话"));
body.Append(MakeBody("- 主管应该是帮助者的角色，而非裁判或法官"));
body.Append(MakeBody("- 员工不认同时，应该追问具体事实，而不是争辩观点"));
body.Append(MakeBlank());

body.Append(MakeSubHeading("讨论3：辅导效果评估"));
body.Append(MakeBody("问题："));
body.Append(MakeBody("1. 如何判断一次辅导对话是否成功？"));
body.Append(MakeBody("2. 短期行为改变和长期态度转变哪个更重要？"));
body.Append(MakeBody("3. 如果辅导后员工行为有改善但态度没变，应该怎么办？"));
body.Append(MakeBlank());
body.Append(MakeBody("参考答案："));
body.Append(MakeBody("- 成功的标准：员工愿意说真话、主动提出建议、愿意配合改进"));
body.Append(MakeBody("- 长期态度转变更重要，短期内可能被迫改变但很快会反弹"));
body.Append(MakeBody("- 继续用辅导的方式跟进，耐心等待，避免再次批评"));
body.Append(MakeBlank());

body.Append(MakeSubHeading("讨论4：特殊情况的处理"));
body.Append(MakeBody("问题："));
body.Append(MakeBody("1. 如果员工在辅导过程中突然提出离职要求，应该如何应对？"));
body.Append(MakeBody("2. 如果员工提到的问题是管理者的责任，应该如何处理？"));
body.Append(MakeBody("3. 如果多次辅导都没有效果，下一步应该怎么做？"));
body.Append(MakeBlank());
body.Append(MakeBody("参考答案："));
body.Append(MakeBody("- 员工提出离职时先暂停对话，表示理解，事后详细沟通"));
body.Append(MakeBody("- 管理者要勇于承认自己的责任，这反而能赢得尊重"));
body.Append(MakeBody("- 多次辅导无效应考虑岗位匹配度问题，或寻求HR支持"));
body.Append(MakeBlank());

body.Append(sectPr);

mainPart.Document.Append(body);
mainPart.Document.Save();
doc.Dispose();

Console.WriteLine("Document created: " + outputPath);
