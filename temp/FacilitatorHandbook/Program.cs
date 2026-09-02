using DocumentFormat.OpenXml;
using DocumentFormat.OpenXml.Packaging;
using DocumentFormat.OpenXml.Wordprocessing;

// Output path
string outputPath = @"D:\新课开发\内训师和表达\内训师引导技术\智慧输出课程包\04-学员手册\内训师引导技术_学员手册.docx";

// Create document
using var doc = WordprocessingDocument.Create(outputPath, WordprocessingDocumentType.Document);
var mainPart = doc.AddMainDocumentPart();
mainPart.Document = new Document(new Body());
Body body = mainPart.Document.Body!;

// Styles
var stylesPart = mainPart.AddNewPart<StyleDefinitionsPart>();
stylesPart.Styles = new Styles();
var styles = stylesPart.Styles!;

styles.Append(new DocDefaults(
    new RunPropertiesDefault(new RunPropertiesBaseStyle(
        new RunFonts { Ascii = "Microsoft YaHei", EastAsia = "Microsoft YaHei", HighAnsi = "Microsoft YaHei" },
        new FontSize { Val = "24" },
        new FontSizeComplexScript { Val = "24" }
    )),
    new ParagraphPropertiesDefault(new ParagraphPropertiesBaseStyle(
        new SpacingBetweenLines { After = "160", Line = "276", LineRule = LineSpacingRuleValues.Auto }
    ))
));

// Title style
styles.Append(new Style(
    new StyleName { Val = "Title" },
    new BasedOn { Val = "Normal" },
    new StyleParagraphProperties(
        new Justification { Val = JustificationValues.Center },
        new SpacingBetweenLines { After = "0", Line = "240", LineRule = LineSpacingRuleValues.Auto }
    ),
    new StyleRunProperties(
        new RunFonts { Ascii = "Microsoft YaHei", EastAsia = "Microsoft YaHei", HighAnsi = "Microsoft YaHei" },
        new Bold(),
        new FontSize { Val = "56" },
        new FontSizeComplexScript { Val = "56" },
        new Color { Val = "1F3864" }
    )
) { Type = StyleValues.Paragraph, StyleId = "Title" });

// Heading1 style
styles.Append(new Style(
    new StyleName { Val = "Heading 1" },
    new BasedOn { Val = "Normal" },
    new StyleParagraphProperties(
        new SpacingBetweenLines { Before = "480", After = "240" },
        new KeepNext(),
        new OutlineLevel { Val = 0 }
    ),
    new StyleRunProperties(
        new RunFonts { Ascii = "Microsoft YaHei", EastAsia = "Microsoft YaHei", HighAnsi = "Microsoft YaHei" },
        new Bold(),
        new FontSize { Val = "36" },
        new FontSizeComplexScript { Val = "36" },
        new Color { Val = "1F3864" }
    )
) { Type = StyleValues.Paragraph, StyleId = "Heading1" });

// Heading2 style
styles.Append(new Style(
    new StyleName { Val = "Heading 2" },
    new BasedOn { Val = "Normal" },
    new StyleParagraphProperties(
        new SpacingBetweenLines { Before = "360", After = "120" },
        new KeepNext(),
        new OutlineLevel { Val = 1 }
    ),
    new StyleRunProperties(
        new RunFonts { Ascii = "Microsoft YaHei", EastAsia = "Microsoft YaHei", HighAnsi = "Microsoft YaHei" },
        new Bold(),
        new FontSize { Val = "28" },
        new FontSizeComplexScript { Val = "28" },
        new Color { Val = "2E5496" }
    )
) { Type = StyleValues.Paragraph, StyleId = "Heading2" });

// Heading3 style
styles.Append(new Style(
    new StyleName { Val = "Heading 3" },
    new BasedOn { Val = "Normal" },
    new StyleParagraphProperties(
        new SpacingBetweenLines { Before = "240", After = "120" },
        new KeepNext(),
        new OutlineLevel { Val = 2 }
    ),
    new StyleRunProperties(
        new RunFonts { Ascii = "Microsoft YaHei", EastAsia = "Microsoft YaHei", HighAnsi = "Microsoft YaHei" },
        new Bold(),
        new FontSize { Val = "24" },
        new FontSizeComplexScript { Val = "24" },
        new Color { Val = "4472C4" }
    )
) { Type = StyleValues.Paragraph, StyleId = "Heading3" });

// ChapterTitle style
styles.Append(new Style(
    new StyleName { Val = "ChapterTitle" },
    new BasedOn { Val = "Normal" },
    new StyleParagraphProperties(
        new SpacingBetweenLines { Before = "480", After = "240" },
        new KeepNext(),
        new OutlineLevel { Val = 0 }
    ),
    new StyleRunProperties(
        new RunFonts { Ascii = "Microsoft YaHei", EastAsia = "Microsoft YaHei", HighAnsi = "Microsoft YaHei" },
        new Bold(),
        new FontSize { Val = "44" },
        new FontSizeComplexScript { Val = "44" },
        new Color { Val = "C62828" }
    )
) { Type = StyleValues.Paragraph, StyleId = "ChapterTitle" });

// Quote style
styles.Append(new Style(
    new StyleName { Val = "Quote" },
    new BasedOn { Val = "Normal" },
    new StyleParagraphProperties(
        new Justification { Val = JustificationValues.Center },
        new SpacingBetweenLines { Before = "240", After = "240" },
        new ParagraphBorders(new LeftBorder { Val = BorderValues.Single, Size = 24, Color = "2E5496" }),
        new Indentation { Left = "720", Right = "720" }
    ),
    new StyleRunProperties(
        new Italic(),
        new FontSize { Val = "24" },
        new FontSizeComplexScript { Val = "24" },
        new Color { Val = "424242" }
    )
) { Type = StyleValues.Paragraph, StyleId = "Quote" });

// Tip style
styles.Append(new Style(
    new StyleName { Val = "Tip" },
    new BasedOn { Val = "Normal" },
    new StyleParagraphProperties(
        new SpacingBetweenLines { Before = "120", After = "120" },
        new Shading { Fill = "E8F5E9" }
    ),
    new StyleRunProperties(
        new Bold(),
        new FontSize { Val = "22" },
        new FontSizeComplexScript { Val = "22" }
    )
) { Type = StyleValues.Paragraph, StyleId = "Tip" });

// Warning style
styles.Append(new Style(
    new StyleName { Val = "Warning" },
    new BasedOn { Val = "Normal" },
    new StyleParagraphProperties(
        new SpacingBetweenLines { Before = "120", After = "120" },
        new Shading { Fill = "FFEBEE" }
    ),
    new StyleRunProperties(
        new Bold(),
        new FontSize { Val = "22" },
        new FontSizeComplexScript { Val = "22" }
    )
) { Type = StyleValues.Paragraph, StyleId = "Warning" });

// Practice style
styles.Append(new Style(
    new StyleName { Val = "Practice" },
    new BasedOn { Val = "Normal" },
    new StyleParagraphProperties(
        new SpacingBetweenLines { Before = "120", After = "120" },
        new Shading { Fill = "E3F2FD" }
    ),
    new StyleRunProperties(
        new Bold(),
        new FontSize { Val = "22" },
        new FontSizeComplexScript { Val = "22" },
        new Color { Val = "1565C0" }
    )
) { Type = StyleValues.Paragraph, StyleId = "Practice" });

// FormField style
styles.Append(new Style(
    new StyleName { Val = "FormField" },
    new BasedOn { Val = "Normal" },
    new StyleParagraphProperties(
        new SpacingBetweenLines { Before = "60", After = "60" },
        new ParagraphBorders(new BottomBorder { Val = BorderValues.Dotted, Size = 4, Color = "999999" })
    ),
    new StyleRunProperties(new FontSize { Val = "22" }, new FontSizeComplexScript { Val = "22" })
) { Type = StyleValues.Paragraph, StyleId = "FormField" });

// Copyright style
styles.Append(new Style(
    new StyleName { Val = "Copyright" },
    new BasedOn { Val = "Normal" },
    new StyleParagraphProperties(
        new Justification { Val = JustificationValues.Center },
        new SpacingBetweenLines { Before = "240", After = "240" }
    ),
    new StyleRunProperties(
        new FontSize { Val = "18" },
        new FontSizeComplexScript { Val = "18" },
        new Color { Val = "666666" }
    )
) { Type = StyleValues.Paragraph, StyleId = "Copyright" });

// ========== HELPER FUNCTIONS ==========
void AddTitle(string text) {
    body.Append(new Paragraph(new ParagraphProperties(new ParagraphStyleId { Val = "Title" }), new Run(new Text(text))));
}

void AddH1(string text) {
    body.Append(new Paragraph(new ParagraphProperties(new ParagraphStyleId { Val = "Heading1" }), new Run(new Text(text))));
}

void AddH2(string text) {
    body.Append(new Paragraph(new ParagraphProperties(new ParagraphStyleId { Val = "Heading2" }), new Run(new Text(text))));
}

void AddH3(string text) {
    body.Append(new Paragraph(new ParagraphProperties(new ParagraphStyleId { Val = "Heading3" }), new Run(new Text(text))));
}

void AddChapterTitle(string text) {
    body.Append(new Paragraph(new ParagraphProperties(new ParagraphStyleId { Val = "ChapterTitle" }), new Run(new Text(text))));
}

void AddP(string text) {
    body.Append(new Paragraph(new Run(new Text(text))));
}

void AddQuoteP(string text) {
    body.Append(new Paragraph(new ParagraphProperties(new ParagraphStyleId { Val = "Quote" }), new Run(new Text(text))));
}

void AddTipP(string text) {
    body.Append(new Paragraph(new ParagraphProperties(new ParagraphStyleId { Val = "Tip" }), new Run(new Text("TIP: " + text))));
}

void AddWarningP(string text) {
    body.Append(new Paragraph(new ParagraphProperties(new ParagraphStyleId { Val = "Warning" }), new Run(new Text("WARNING: " + text))));
}

void AddPracticeP(string text) {
    body.Append(new Paragraph(new ParagraphProperties(new ParagraphStyleId { Val = "Practice" }), new Run(new Text("PRACTICE: " + text))));
}

void AddBullet(string text) {
    body.Append(new Paragraph(new ParagraphProperties(new SpacingBetweenLines { Before = "0", After = "80" }, new Indentation { Left = "360", Hanging = "360" }), new Run(new Text("* " + text))));
}

void AddNum(int num, string text) {
    body.Append(new Paragraph(new ParagraphProperties(new SpacingBetweenLines { Before = "0", After = "80" }, new Indentation { Left = "720", Hanging = "360" }), new Run(new Text(num + ". " + text))));
}

void AddSpace() {
    body.Append(new Paragraph(new Run(new Text(""))));
}

void AddDottedLines(int count) {
    for (int i = 0; i < count; i++) {
        body.Append(new Paragraph(new ParagraphProperties(new ParagraphStyleId { Val = "FormField" }), new Run(new Text(" "))));
    }
}

void AddBreak() {
    body.Append(new Paragraph(new Run(new Break { Type = BreakValues.Page })));
}

void AddCopyright() {
    body.Append(new Paragraph(new ParagraphProperties(new ParagraphStyleId { Val = "Copyright" }), new Run(new Text("Copyright - LUO HONGWEI - For course participants only"))));
}

Table CreateTable(string[] headers, string fill = "1F3864") {
    var tbl = new Table(
        new TableProperties(
            new TableWidth { Width = "5000", Type = TableWidthUnitValues.Pct },
            new TableBorders(
                new TopBorder { Val = BorderValues.Single, Size = 8, Color = fill },
                new BottomBorder { Val = BorderValues.Single, Size = 8, Color = fill },
                new LeftBorder { Val = BorderValues.Single, Size = 8, Color = fill },
                new RightBorder { Val = BorderValues.Single, Size = 8, Color = fill },
                new InsideHorizontalBorder { Val = BorderValues.Single, Size = 4, Color = "CCCCCC" },
                new InsideVerticalBorder { Val = BorderValues.Single, Size = 4, Color = "CCCCCC" }
            )
        ), new TableGrid(new GridColumn()));

    var hr = new TableRow(new TableRowProperties(new TableHeader()));
    foreach (var h in headers) {
        hr.Append(new TableCell(new TableCellProperties(new Shading { Fill = fill }), new Paragraph(new ParagraphProperties(new Justification { Val = JustificationValues.Center }), new Run(new RunProperties(new Bold(), new Color { Val = "FFFFFF" }), new Text(h)))));
    }
    tbl.Append(hr);
    return tbl;
}

void AddRow(Table tbl, string[] cells) {
    var tr = new TableRow();
    foreach (var c in cells) {
        tr.Append(new TableCell(new Paragraph(new Run(new Text(c)))));
    }
    tbl.Append(tr);
}

void FinishTable(Table tbl) {
    body.Append(tbl);
}

// ========== COVER ==========
AddSpace(); AddSpace(); AddSpace();
AddTitle("Internal Trainer Facilitation Skills");
AddSpace();
AddP("Student Handbook");
AddSpace(); AddSpace(); AddSpace();
AddP("Course: Internal Trainer Facilitation Skills");
AddP("Target: Corporate trainers and managers improving presentation skills");
AddP("Duration: 2-3 day workshop");
AddSpace();
AddP("Version: V1.0");
AddSpace();
AddP("Trainee Name: __________________________");
AddP("Department: __________________________");
AddP("Course Date: __________________________");
AddP("Instructor: __________________________");
AddSpace();
AddCopyright();
AddBreak();

// ========== Part 1 ==========
AddChapterTitle("Part 1: Understanding Facilitation");
AddQuoteP("The core competency of an internal trainer is not to 'explain knowledge clearly' but to 'help learners find their own answers'. Facilitation is the art that makes this happen.");
AddSpace();
AddH1("1.1 Learning Objectives");
AddH2("Chapter Objectives");
AddNum(1, "Understand the essential differences between three teaching modalities");
AddNum(2, "Recognize the dual identity of internal trainers");
AddNum(3, "Master five dimensions of facilitation effectiveness");
AddNum(4, "Identify current facilitation abilities and development areas");
AddSpace();
AddH2("Content Navigation");
AddP("This chapter includes 3 core concepts, 2 interactive forms, 1 exercise");
AddSpace();
AddCopyright();
AddBreak();

AddH1("1.2 Three Teaching Modalities");
AddP("Teaching is not limited to one approach. Based on the instructor-learner relationship, there are three modalities:");
AddSpace();
AddH2("Modality 1: Lecture-Style Teaching");
AddP("Instructor is the knowledge transmitter, learner is the receiver. Instructor explains clearly, learners listen and remember.");
AddP("Best for: Standardized knowledge, beginners, efficient information transfer");
AddP("Limitations: Passive learning, shallow understanding, uncertain application");
AddSpace();
var t1_1 = CreateTable(new[] { "Dimension", "Lecture-Style" });
AddRow(t1_1, new[] { "Instructor Role", "Knowledge Expert, Transmitter" });
AddRow(t1_1, new[] { "Learner Role", "Passive Receiver" });
AddRow(t1_1, new[] { "Core Mechanism", "Explain, Listen, Remember" });
AddRow(t1_1, new[] { "Knowledge State", "Fixed, Standardized" });
AddRow(t1_1, new[] { "Learning Effect", "Know, Understand" });
FinishTable(t1_1);
AddSpace();

AddH2("Modality 2: Facilitative Teaching");
AddP("Instructor is the learning designer and facilitator, learner is the knowledge constructor. Through questioning, discussion, and reflection, the instructor guides learners to find answers themselves.");
AddP("Best for: Deep understanding, behavior change, learners with some foundation");
AddP("Core Value: Active construction, deeper understanding, easier transfer");
AddSpace();
var t1_2 = CreateTable(new[] { "Dimension", "Facilitative Teaching" });
AddRow(t1_2, new[] { "Instructor Role", "Learning Facilitator, Designer" });
AddRow(t1_2, new[] { "Learner Role", "Active Constructor" });
AddRow(t1_2, new[] { "Core Mechanism", "Question, Discuss, Reflect" });
AddRow(t1_2, new[] { "Knowledge State", "Requires Construction" });
AddRow(t1_2, new[] { "Learning Effect", "Understand, Apply, Transfer" });
FinishTable(t1_2);
AddSpace();

AddH2("Modality 3: Collaborative Teaching");
AddP("Instructor and learners are co-learners, exploring and discovering together. Experience collides and co-creates new understanding.");
AddP("Best for: Complex problems, no standard answers, shared experience available");
AddP("Core Value: Multiple perspective collision, deep co-creation, relationship building");
AddSpace();
var t1_3 = CreateTable(new[] { "Dimension", "Collaborative Teaching" });
AddRow(t1_3, new[] { "Instructor Role", "Co-Learner" });
AddRow(t1_3, new[] { "Learner Role", "Knowledge Contributor" });
AddRow(t1_3, new[] { "Core Mechanism", "Dialogue, Collision, Co-Creation" });
AddRow(t1_3, new[] { "Knowledge State", "Multiple, Generated" });
AddRow(t1_3, new[] { "Learning Effect", "Innovation, Relationship Building" });
FinishTable(t1_3);
AddSpace();

AddQuoteP("Key Insight: The three modalities have no优劣之分. The key is using the right approach for the right situation. Use lecture for efficient knowledge transfer, facilitation for deep understanding, collaboration for complex problems. An excellent internal trainer switches flexibly among all three.");
AddSpace();
AddCopyright();
AddBreak();

AddH1("1.3 Dual Identity of Internal Trainers");
AddP("Internal trainers are neither pure lecturers nor pure learning facilitators. They carry a dual identity:");
AddSpace();
AddH2("Identity 1: Course Developer");
AddP("Internal trainers are responsible for designing course content, selecting teaching methods, and ensuring course objectives are met. This is the trainer's 'designer' role.");
AddP("Core Tasks: Determine what to teach (content), how to teach (method), to what level (objectives)");
AddSpace();
AddH2("Identity 2: Classroom Facilitator");
AddP("Internal trainers are responsible for guiding learner thinking, stimulating discussion, and promoting learning in the classroom. This is the trainer's 'facilitator' role.");
AddP("Core Tasks: Question to stimulate thinking, listen and respond, create a safe learning atmosphere");
AddSpace();

var t1_4 = CreateTable(new[] { "Dimension", "Course Developer", "Classroom Facilitator" });
AddRow(t1_4, new[] { "Core Focus", "Course Objectives and Content", "Learner Learning Process" });
AddRow(t1_4, new[] { "Time Perspective", "Pre-class Preparation", "In-class Delivery" });
AddRow(t1_4, new[] { "Core Activities", "Design, Lesson Planning", "Question, Listen, Respond" });
AddRow(t1_4, new[] { "Success Criteria", "Course Objectives Met", "Learners Truly Understand" });
FinishTable(t1_4);
AddSpace();

AddTipP("Balancing Dual Identity: Internal trainers often fall into two extremes - either too focused on 'what I need to teach', becoming pure lecture; or too focused on 'what learners want', losing direction. Excellent internal trainers switch flexibly between both: designer before class, facilitator during class.");
AddSpace();
AddCopyright();
AddBreak();

AddH1("1.4 Five Dimensions of Facilitation Effectiveness");
AddP("How to judge whether an internal trainer's facilitation is effective? Evaluate from five dimensions:");
AddSpace();
var t1_5 = CreateTable(new[] { "Dimension", "Manifestation", "Assessment Question" });
AddRow(t1_5, new[] { "Dimension 1: Learner Participation", "Learners actively engage in thinking, speaking, and discussion", "How many learners are actively participating?" });
AddRow(t1_5, new[] { "Dimension 2: Question Quality", "Instructor's questions stimulate thinking, not simple recall", "Are questions open or closed?" });
AddRow(t1_5, new[] { "Dimension 3: Response Appropriateness", "Instructor's responses advance thinking, not give answers directly", "Is the response facilitating or telling?" });
AddRow(t1_5, new[] { "Dimension 4: Atmosphere Safety", "Learners dare to speak, ask questions, admit confusion", "Are any learners silent due to fear?" });
AddRow(t1_5, new[] { "Dimension 5: Learning Effectiveness", "Learners can paraphrase, explain, and apply what they learned", "Can learners generalize?" });
FinishTable(t1_5);
AddSpace();

AddH1("1.5 Forms and Exercises");
AddH2("Form 1.1: Self-Assessment of Facilitation Ability");
AddQuoteP("Instructions: Purpose - understand your starting point. Requirement - honest assessment. Time - 5 minutes");
AddSpace();
var f1_1 = CreateTable(new[] { "Behavior Description", "Never", "Occasionally", "Often", "Always" });
AddRow(f1_1, new[] { "1. I ask more questions than lecture in class", "O", "O", "O", "O" });
AddRow(f1_1, new[] { "2. I can design open-ended questions that stimulate thinking", "O", "O", "O", "O" });
AddRow(f1_1, new[] { "3. When responding to learners, I follow up with questions before giving conclusions", "O", "O", "O", "O" });
AddRow(f1_1, new[] { "4. I can identify key information in learner responses and respond effectively", "O", "O", "O", "O" });
AddRow(f1_1, new[] { "5. I can create a safe classroom atmosphere where learners dare to speak", "O", "O", "O", "O" });
AddRow(f1_1, new[] { "6. My discussion activities have clear objectives and methods", "O", "O", "O", "O" });
AddRow(f1_1, new[] { "7. I can effectively harvest discussion results and connect to the topic", "O", "O", "O", "O" });
FinishTable(f1_1);
AddSpace();
AddP("My 'Never' or 'Occasionally' count: ______. These are my key development areas for this course.");
AddSpace();

AddH2("Exercise 1-A (Basic): Three Teaching Modality Identification");
AddP("Read the following 5 teaching scenarios and identify which modality each belongs to:");
AddSpace();
AddP("( ) Instructor explains 'Seven Habits of Highly Effective Meetings', explaining each habit's meaning and usage");
AddP("( ) Instructor asks 'What do you think caused this project to fail?', having learners discuss in groups");
AddP("( ) Instructor and learners explore 'The Impact of AI on HR Work' together, no standard answer");
AddP("( ) Instructor demonstrates how to conduct a performance feedback conversation, then has learners role-play");
AddP("( ) Instructor asks learners to share their experience handling complaints, other learners analyze effective practices");
AddSpace();

AddH2("Exercise 1-B (Application): Facilitation Dimension Assessment");
AddP("Recall your most recent training course and use the five dimensions to assess your facilitation effectiveness:");
AddSpace();
var f1_2 = CreateTable(new[] { "Dimension", "Assessment Score (1-5)", "Specific Example" });
AddRow(f1_2, new[] { "Learner Participation", "", "" });
AddRow(f1_2, new[] { "Question Quality", "", "" });
AddRow(f1_2, new[] { "Response Appropriateness", "", "" });
AddRow(f1_2, new[] { "Atmosphere Safety", "", "" });
AddRow(f1_2, new[] { "Learning Effectiveness", "", "" });
FinishTable(f1_2);
AddSpace();
AddCopyright();
AddBreak();

// ========== Part 2 ==========
AddChapterTitle("Part 2: Effective Questioning");
AddQuoteP("A good question is worth more than ten good answers. Questioning is the primary tool of facilitation and the core competency of internal trainers.");
AddSpace();
AddH1("2.1 Learning Objectives");
AddNum(1, "Master characteristics and applicable scenarios for five question types");
AddNum(2, "Understand the six-level questioning ladder");
AddNum(3, "Master probing techniques");
AddNum(4, "Learn to manage silence and create thinking space");
AddSpace();
AddH2("Content Navigation");
AddP("This chapter includes 5 core concepts, 3 interactive forms, 2 exercises");
AddSpace();
AddCopyright();
AddBreak();

AddH1("2.2 Five Question Types");
AddH2("Type 1: Information-Gathering Questions");
AddP("Used to collect basic information, existing knowledge, or experience from learners. The answer is relatively certain, not pursuing deep thinking.");
AddP("Examples: 'How many people are in your department?', 'Have you encountered this method before?', 'How is this usually handled?'");
AddP("When to use: Opening warm-up, understanding learner background, introducing new topics");
AddSpace();

AddH2("Type 2: Clarification Questions");
AddP("Used to clarify ambiguous parts of learner statements to ensure accurate understanding. Features follow-up on 'unclear' points.");
AddP("Examples: 'When you said effective, what specifically does that mean?', 'Can you give an example?', 'You mean... is that correct?'");
AddP("When to use: Learner response unclear, concept fuzzy, need to confirm understanding");
AddSpace();

AddH2("Type 3: Exploration Questions");
AddP("Used to guide learners to think deeply and explore the essence or possibilities of a problem. Features openness, no standard answer.");
AddP("Examples: 'What other perspective can we view this from?', 'What would happen if we changed the approach?', 'What might be the underlying causes of this phenomenon?'");
AddP("When to use: Need deep thinking, stimulate multiple perspectives, guide reflection");
AddSpace();

AddH2("Type 4: Hypothetical Questions");
AddP("Used to explore possibilities under hypothetical conditions, cultivate imagination and reasoning. Features 'What if...?'");
AddP("Examples: 'What would you do if resources were unlimited?', 'If you were the project leader, how would you proceed?', 'How might the solution differ if we removed this constraint?'");
AddP("When to use: Stimulate creativity, explore possibilities, develop systems thinking");
AddSpace();

AddH2("Type 5: Action-Oriented Questions");
AddP("Used to push learners to transform ideas into specific actions, ensuring learning is applied. Features pointing to the future, specific and executable.");
AddP("Examples: 'What will you do first when you get back?', 'When do you plan to start trying this method?', 'What can you commit to?'");
AddP("When to use: Course closing, promote practice, commitment to change");
AddSpace();

var t2_1 = CreateTable(new[] { "Question Type", "Purpose", "Characteristics", "Typical Phrases" });
AddRow(t2_1, new[] { "Information-Gathering", "Understand background", "Certain answers, simple", "What/How many/Did you" });
AddRow(t2_1, new[] { "Clarification", "Clarify understanding", "For fuzzy points, needs confirmation", "What specifically/Can you give an example" });
AddRow(t2_1, new[] { "Exploration", "Deep thinking", "Open, no standard answer", "What else/What are the causes" });
AddRow(t2_1, new[] { "Hypothetical", "Explore possibilities", "Hypothesis前提, deduce results", "What if..." });
AddRow(t2_1, new[] { "Action-Oriented", "Promote action", "Point to future, executable", "Will you do/Commit to" });
FinishTable(t2_1);
AddSpace();
AddCopyright();
AddBreak();

AddH1("2.3 Six-Level Questioning Ladder");
AddP("The depth of questioning can be divided into six levels from low to high:");
AddSpace();
var t2_2 = CreateTable(new[] { "Level", "Name", "Learner Cognitive Activity", "Question Example" });
AddRow(t2_2, new[] { "Level 1", "Memory and Recall", "Extract information from memory", "What is the name of this model?" });
AddRow(t2_2, new[] { "Level 2", "Understanding and Explanation", "Explain in own words", "Can you explain this concept?" });
AddRow(t2_2, new[] { "Level 3", "Application and Analysis", "Apply learning to new situations", "What scenario can this method be used in?" });
AddRow(t2_2, new[] { "Level 4", "Synthesis and Creation", "Integrate knowledge to create new solutions", "How would you improve this solution?" });
AddRow(t2_2, new[] { "Level 5", "Evaluation and Judgment", "Make judgments based on standards", "Which solution is more effective? Why?" });
AddRow(t2_2, new[] { "Level 6", "Reflection and Transfer", "Reflect on learning process and transfer conditions", "What can you apply to your work?" });
FinishTable(t2_2);
AddSpace();

AddTipP("Question Design Principle: Progress from Level 1 to Level 6, shallow to deep. Don't start with 'What do you think about this method' - learners don't have enough information to answer yet. Build up from lower-level questions first.");
AddSpace();
AddCopyright();
AddBreak();

AddH1("2.4 Probing Techniques");
AddP("Probing is key facilitation technology. After a learner's response, probing can go deeper and excavate deeper thinking.");
AddSpace();
AddH2("Four Probing Strategies");
AddH2("Strategy 1: Downward Probing");
AddP("When a learner gives an opinion or conclusion, probe for evidence or reasons supporting that conclusion.");
AddP("Example:");
AddP("Learner: 'I think this solution is not feasible.'");
AddP("Probe: 'What makes you think it's not feasible? What evidence do you have?'");
AddSpace();

AddH2("Strategy 2: Upward Probing");
AddP("When a learner gives a specific example or detail, probe for the patterns or principles behind that example.");
AddP("Example:");
AddP("Learner: 'Last time our department used this method, the effect was not good.'");
AddP("Probe: 'What were the characteristics of that situation? What are the similarities and differences with today's scenario?'");
AddSpace();

AddH2("Strategy 3: Lateral Probing");
AddP("When a learner focuses on one angle, guide them to consider other angles or related factors.");
AddP("Example:");
AddP("Learner: 'This solution costs too much.'");
AddP("Probe: 'Besides cost, what other factors should be considered? How might it look from a quality perspective?'");
AddSpace();

AddH2("Strategy 4: Specific Probing");
AddP("When a learner's statement is vague, probe for specific details to make the description clearer.");
AddP("Example:");
AddP("Learner: 'Learners didn't respond well.'");
AddP("Probe: 'Specifically, which aspects didn't respond well? Couldn't understand, weren't interested, or other reasons?'");
AddSpace();

AddH2("Probing Phrase Templates");
var t2_3 = CreateTable(new[] { "Situation", "Probing Phrases" });
AddRow(t2_3, new[] { "Need more details", "Can you be more specific? Can you give an example?" });
AddRow(t2_3, new[] { "Need reasoning", "What makes you think that? What evidence is there?" });
AddRow(t2_3, new[] { "Need alternatives", "If not this way, what other approaches are there?" });
AddRow(t2_3, new[] { "Need deeper reasons", "Why did this happen? What is the root cause?" });
AddRow(t2_3, new[] { "Need evaluation", "What are the advantages of this solution? What are the disadvantages?" });
AddRow(t2_3, new[] { "Need action commitment", "How do you plan to apply this? What will you do first?" });
FinishTable(t2_3);
AddSpace();
AddCopyright();
AddBreak();

AddH1("2.5 Silence Management");
AddP("Silence is space for thinking. Trainers need to learn to manage silence and create an atmosphere for deep learner thinking.");
AddSpace();
AddH2("Three Types of Silence");
AddH2("Type 1: Preparatory Silence");
AddP("Learners are organizing their thoughts and not yet ready to answer. This is good silence and should be waited on.");
AddP("Response: Stay quiet, encourage with eye contact, wait for learners to be ready.");
AddSpace();

AddH2("Type 2: Confused Silence");
AddP("Learners don't understand the question or feel it's too difficult to answer.");
AddP("Response: Rephrase the question or break it into simpler sub-questions.");
AddSpace();

AddH2("Type 3: Resistant Silence");
AddP("Learners are unwilling to answer, possibly due to insecurity or irrelevance to the topic.");
AddP("Response: Change the questioning approach or provide options for learners to choose whether to answer.");
AddSpace();

AddH2("Silence Management Techniques");
AddNum(1, "Counting method: Count 5-10 seconds silently before deciding to repeat the question or change approach");
AddNum(2, "Eye contact encouragement: Look expectantly at non-speaking learners, giving non-verbal encouragement");
AddNum(3, "Rephrase method: Rephrase the question differently to make it clearer");
AddNum(4, "Lower difficulty method: Break questions into simpler sub-questions to lower the threshold");
AddNum(5, "Choice method: Provide several options for learners to choose from, lowering thinking difficulty");
AddSpace();

AddWarningP("Common Mistake: Trainers see silence and panic, immediately answering themselves or changing to another learner. This is wrong! Silence is often a signal of thinking. Give sufficient wait time. Research shows effective wait time is 7-12 seconds.");
AddSpace();
AddCopyright();
AddBreak();

AddH1("2.6 Forms and Exercises");
AddH2("Form 2.1: Self-Assessment of Questioning Ability");
AddQuoteP("Instructions: Purpose - assess your current questioning ability. Requirement - honest assessment, find development areas. Time - 5 minutes");
AddSpace();
var f2_1 = CreateTable(new[] { "Behavior Description", "Never", "Occasionally", "Often", "Always" });
AddRow(f2_1, new[] { "1. I design different levels of questions based on teaching objectives", "O", "O", "O", "O" });
AddRow(f2_1, new[] { "2. My questions progress from shallow to deep with progressive relationships", "O", "O", "O", "O" });
AddRow(f2_1, new[] { "3. I use different types of questions (information gathering, clarification, exploration, etc.)", "O", "O", "O", "O" });
AddRow(f2_1, new[] { "4. After learner responses, I probe rather than give answers directly", "O", "O", "O", "O" });
AddRow(f2_1, new[] { "5. I wait for learners to think rather than immediately demanding answers", "O", "O", "O", "O" });
AddRow(f2_1, new[] { "6. My questions are open enough to stimulate learner thinking", "O", "O", "O", "O" });
FinishTable(f2_1);
AddSpace();

AddH2("Form 2.2: Question Design Practice");
AddQuoteP("Instructions: Purpose - practice designing six-level questioning ladders. Requirement - design questions from Level 1 to Level 6 for a teaching topic. Time - 10 minutes");
AddSpace();
AddP("My chosen teaching topic: ____________________________");
var f2_2 = CreateTable(new[] { "Level", "Question Content", "Design Rationale" });
AddRow(f2_2, new[] { "Level 1 (Memory)", "", "" });
AddRow(f2_2, new[] { "Level 2 (Understanding)", "", "" });
AddRow(f2_2, new[] { "Level 3 (Application)", "", "" });
AddRow(f2_2, new[] { "Level 4 (Synthesis)", "", "" });
AddRow(f2_2, new[] { "Level 5 (Evaluation)", "", "" });
AddRow(f2_2, new[] { "Level 6 (Reflection)", "", "" });
FinishTable(f2_2);
AddSpace();

AddH2("Exercise 2-A (Basic): Question Type Identification");
AddP("Identify which type the following questions belong to:");
AddP("( ) 'What is the biggest challenge your department is currently facing?'");
AddP("( ) 'When you said communication has problems, what specifically do you mean?'");
AddP("( ) 'If resources were not limited, how would you design this solution?'");
AddP("( ) 'What are the advantages and disadvantages of this method versus that one?'");
AddP("( ) 'After today's learning, how do you plan to apply it?'");
AddSpace();

AddH2("Exercise 2-B (Application): Probing Technique Practice");
AddP("Design probing questions based on the following learner responses:");
AddSpace();
AddP("Learner A: 'I think this training is not useful.'");
AddP("Your probing: _____________________________________________");
AddSpace();
AddP("Learner B: 'We tried this method before, but the effect was not good.'");
AddP("Your probing: _____________________________________________");
AddSpace();
AddP("Learner C: 'I think we need to change.'");
AddP("Your probing: _____________________________________________");
AddSpace();
AddCopyright();
AddBreak();

// ========== Part 3 ==========
AddChapterTitle("Part 3: Listening and Responding");
AddQuoteP("The highest level of listening is not hearing what learners say, but hearing what they don't say - those pauses, hesitations, and emotions are the most important information.");
AddSpace();
AddH1("3.1 Learning Objectives");
AddNum(1, "Understand four levels of listening and improve listening quality");
AddNum(2, "Master response strategies for four response scenarios");
AddNum(3, "Learn to use non-verbal facilitation tools");
AddNum(4, "Create an atmosphere of deep dialogue in the classroom");
AddSpace();
AddH2("Content Navigation");
AddP("This chapter includes 4 core concepts, 2 interactive forms, 2 exercises");
AddSpace();
AddCopyright();
AddBreak();

AddH1("3.2 Four Levels of Listening");
AddH2("Level 1: Pretend Listening");
AddP("Not listening at all. Seemingly looking but actually thinking about your own things.");
AddP("Manifestations: Wandering eyes, mechanical nodding, no response at all, unable to paraphrase learner content");
AddSpace();

AddH2("Level 2: Selective Listening");
AddP("Only hearing parts you want to hear, ignoring other content. Listening with preconceptions.");
AddP("Manifestations: Only focusing on points of personal interest, easily interrupting learners, omitting important information when paraphrasing");
AddSpace();

AddH2("Level 3: Focused Listening");
AddP("Seriously hearing every word learners say, focusing on the content itself.");
AddP("Manifestations: Steady eye contact, nodding response, accurately paraphrasing content, focusing on 'what was said'");
AddSpace();

AddH2("Level 4: Deep Listening");
AddP("Not only hearing content but also focusing on learner emotions, intentions, and unspoken words.");
AddP("Manifestations: Can perceive learner emotional changes, can paraphrase learner subtext, can respond to learner unexpressed concerns");
AddSpace();

var t3_1 = CreateTable(new[] { "Level", "Focus", "Learner Feeling", "Trainer Manifestation" });
AddRow(t3_1, new[] { "Pretend Listening", "Not listening", "Not valued", "Wandering eyes" });
AddRow(t3_1, new[] { "Selective Listening", "What they care about", "Ignored", "Easily interrupts" });
AddRow(t3_1, new[] { "Focused Listening", "What was said", "Heard", "Nodding response" });
AddRow(t3_1, new[] { "Deep Listening", "Said and unsaid", "Understood", "Perceives emotions" });
FinishTable(t3_1);
AddSpace();
AddCopyright();
AddBreak();

AddH1("3.3 Four Response Scenarios");
AddH2("Scenario 1: When Learners Share Experience");
AddP("When learners share their experiences or cases, the trainer's task is to enrich the sharing, not to judge or give advice.");
AddP("Strategies:");
AddP("- Probe for details: Make the story more complete");
AddP("- Acknowledge feelings: Make learners feel respected");
AddP("- Connect to topic: Link experience to learning content");
AddSpace();
AddP("Example phrases:");
AddP("'That situation must have made you feel...'");
AddP("'How did you handle it at the time?'");
AddP("'How does this experience relate to what we learned today?'");
AddSpace();

AddH2("Scenario 2: When Learners Ask Questions");
AddP("When learners ask questions, trainers need to judge whether it's a real question or false question, and the true intention behind it.");
AddP("Strategies:");
AddP("- Clarify first: Confirm what the question is");
AddP("- Guide then: Guide learners to find answers themselves");
AddP("- Supplement last: Supplement and improve after learners find answers");
AddSpace();
AddP("Example phrases:");
AddP("'For this question, let me confirm first... is this what you mean?'");
AddP("'How do you think it could be solved? I'd like to hear your thoughts.'");
AddP("'Does anyone else have similar questions?'");
AddSpace();

AddH2("Scenario 3: When Learners Express Confusion");
AddP("When learners indicate they don't understand or have difficulties, trainers need to first accept the confusion, then provide support.");
AddP("Strategies:");
AddP("- Accept confusion: Let learners know confusion is normal");
AddP("- Confirm boundaries: Clarify where the confusion lies");
AddP("- Provide support: Re-explain in a new way or provide more examples");
AddSpace();
AddP("Example phrases:");
AddP("'Many people are confused by this at first, which is normal.'");
AddP("'Can you tell me which part you find difficult?'");
AddP("'Let me try explaining this in another way...'");
AddSpace();

AddH2("Scenario 4: When Learners Express Opinions");
AddP("When learners express viewpoints, trainers need to respect opinions and guide thinking, not negate or impose their own views.");
AddP("Strategies:");
AddP("- Acknowledge opinion: Make learners feel respected");
AddP("- Explore reasons: Understand the thinking behind the opinion");
AddP("- Guide reflection: Have learners consider limitations of their viewpoint");
AddSpace();
AddP("Example phrases:");
AddP("'This perspective is interesting. Can you tell me how you arrived at this conclusion?'");
AddP("'If viewed from another angle, might there be any differences?'");
AddSpace();
AddCopyright();
AddBreak();

AddH1("3.4 Non-Verbal Facilitation Tools");
AddP("Communication is more than language. Non-verbal information often conveys more emotion and intention.");
AddSpace();
AddH2("Body Language");
AddNum(1, "Open posture: Lean slightly forward to show attention and interest");
AddNum(2, "Eye contact: Maintain appropriate eye contact with speakers to show focus");
AddNum(3, "Nodding response: Moderate nodding indicates acknowledgment and understanding");
AddNum(4, "Facial expressions: Show emotions consistent with content, demonstrate empathy");
AddSpace();

AddH2("Space Utilization");
AddNum(1, "Position changes: Don't always stand in the same position; move appropriately to adjust atmosphere");
AddNum(2, "Distance adjustment: Maintain appropriate distance from learners, neither too close nor too far");
AddNum(3, "Gesture guidance: Use concise gestures to reinforce verbal information");
AddSpace();

AddH2("Voice Utilization");
AddNum(1, "Tone variation: Use tone changes to emphasize important information");
AddNum(2, "Pause technique: Pause at key points to let information sink in");
AddNum(3, "Pace adjustment: Adjust pace according to content; slow down at difficult points");
AddSpace();

AddH2("Supporting Tools");
AddNum(1, "Whiteboard: Record learner viewpoints so they see they are valued");
AddNum(2, "Sticky notes: Let each learner write down thoughts to reduce speaking pressure");
AddNum(3, "Timer: Let learners know time limits to improve efficiency");
AddSpace();
AddCopyright();
AddBreak();

AddH1("3.5 Forms and Exercises");
AddH2("Form 3.1: Self-Assessment of Listening and Responding");
AddQuoteP("Instructions: Purpose - assess your current listening and responding ability. Requirement - honest assessment. Time - 5 minutes");
AddSpace();
var f3_1 = CreateTable(new[] { "Behavior Description", "Never", "Occasionally", "Often", "Always" });
AddRow(f3_1, new[] { "1. I maintain focused eye contact when learners are speaking", "O", "O", "O", "O" });
AddRow(f3_1, new[] { "2. I can paraphrase the main content of learner statements to confirm understanding", "O", "O", "O", "O" });
AddRow(f3_1, new[] { "3. I can perceive emotional changes when learners are speaking", "O", "O", "O", "O" });
AddRow(f3_1, new[] { "4. When responding to learners, I accept first then guide", "O", "O", "O", "O" });
AddRow(f3_1, new[] { "5. I use probing rather than giving direct answers when responding to learners", "O", "O", "O", "O" });
AddRow(f3_1, new[] { "6. I can identify the real confusion behind learner false questions", "O", "O", "O", "O" });
FinishTable(f3_1);
AddSpace();

AddH2("Exercise 3-A (Basic): Listening Level Identification");
AddP("Identify which listening level the following trainer behaviors belong to:");
AddP("( ) Trainer nods while learners are speaking but looks at their phone");
AddP("( ) Trainer only focuses on 'data' part of learner speech, ignoring underlying concerns");
AddP("( ) Trainer accurately paraphrases learner content and confirms understanding in their own words");
AddP("( ) Trainer perceives learner unexpressed anxiety and gently asks 'Is there anything else you're worried about?'");
AddSpace();

AddH2("Exercise 3-B (Application): Response Scenario Practice");
AddP("Design response phrases for each of the following scenarios:");
AddSpace();
AddP("Scenario 1: Learner shares their experience successfully completing a project");
AddP("Your response: _____________________________________________");
AddSpace();
AddP("Scenario 2: Learner asks 'This method sounds good, but can it really be used?'");
AddP("Your response: _____________________________________________");
AddSpace();
AddP("Scenario 3: Learner says 'I don't quite understand why we need to do this'");
AddP("Your response: _____________________________________________");
AddSpace();
AddCopyright();
AddBreak();

// ========== Part 4 ==========
AddChapterTitle("Part 4: Discussion Design and Facilitation");
AddQuoteP("Discussion is not for excitement, but for learners to construct their own understanding through collision. Designing discussion is designing the possibility of learning occurring.");
AddSpace();
AddH1("4.1 Learning Objectives");
AddNum(1, "Master five elements of discussion design");
AddNum(2, "Learn effective management during discussions");
AddNum(3, "Master methods for harvesting discussion results");
AddNum(4, "Handle common problems in discussions");
AddSpace();
AddH2("Content Navigation");
AddP("This chapter includes 5 core concepts, 2 interactive forms, 2 exercises");
AddSpace();
AddCopyright();
AddBreak();

AddH1("4.2 Five Elements of Discussion Design");
AddH2("Element 1: Clear Objectives");
AddP("Discussions must have clear learning objectives, not discussion for discussion's sake.");
AddP("Design points:");
AddP("- What problem should the discussion solve?");
AddP("- What should learners gain after the discussion?");
AddP("- How to judge whether the discussion achieved its objectives?");
AddSpace();

AddH2("Element 2: Question-Driven");
AddP("The core of discussion is a good question, which should be:");
AddP("- Open: No single correct answer");
AddP("- Meaningful: Related to course content");
AddP("- Debatable: Has different perspectives and viewpoints");
AddSpace();

AddH2("Element 3: Clear Rules");
AddP("Clear rules must be established before discussion begins so learners know how to proceed:");
AddP("- Speaking rules: Who speaks, speaking order, speaking time");
AddP("- Listening rules: How to treat different opinions");
AddP("- Decision rules: How to form conclusions or consensus");
AddSpace();

AddH2("Element 4: Reasonable Time");
AddP("Discussion time should be just right:");
AddP("- Too short: Learners haven't had time for deep thinking yet");
AddP("- Too long: Learner attention scatters, discussion diverges");
AddP("- General guideline: 3-5 minutes for individual thinking, 10-15 minutes for group discussion");
AddSpace();

AddH2("Element 5: Specific Outcomes");
AddP("Discussions should have visible outputs for later review and verification:");
AddP("- Record on whiteboard/chart paper");
AddP("- Form written conclusions");
AddP("- Produce specific action plans");
AddSpace();

var t4_1 = CreateTable(new[] { "Element", "Design Points", "Common Problems" });
AddRow(t4_1, new[] { "Clear Objectives", "What problem to solve", "Vague objectives, unfocused discussion" });
AddRow(t4_1, new[] { "Question-Driven", "Good question is core", "Question too closed or too open" });
AddRow(t4_1, new[] { "Clear Rules", "How learners proceed", "Unclear rules, chaotic discussion" });
AddRow(t4_1, new[] { "Reasonable Time", "Right thinking time", "Too short or too long" });
AddRow(t4_1, new[] { "Specific Outcomes", "Visible output", "No conclusions after discussion" });
FinishTable(t4_1);
AddSpace();
AddCopyright();
AddBreak();

AddH1("4.3 Discussion Process Management");
AddH2("Before Discussion: Setup and Start");
AddP("Before discussions begin, preparation is needed:");
AddP("- Clarify discussion questions and objectives");
AddP("- Explain discussion rules and time");
AddP("- Give learners individual thinking time (3-5 minutes)");
AddP("- Encourage each learner to think independently first, then participate in discussion");
AddSpace();

AddH2("During Discussion: Observation and Intervention");
AddP("Trainers should play the role of observer and facilitator during discussion:");
AddP("- Walk around to observe each group's discussion");
AddP("- Ask questions at appropriate times to guide deeper discussion");
AddP("- Monitor time and control pace");
AddP("- Encourage silent learners to participate");
AddP("- Correct discussions that deviate from the topic");
AddSpace();

AddH2("After Discussion: Harvest and Summary");
AddP("Discussion results must be harvested after discussion:");
AddP("- Have each group share their discussion results");
AddP("- Trainer extracts common viewpoints and points of disagreement");
AddP("- Connect discussion results to course topic");
AddP("- Provide trainer's supplements or summary");
AddSpace();

AddH2("Discussion Result Harvesting Methods");
var t4_2 = CreateTable(new[] { "Method", "Applicable Scenario", "Operation Points" });
AddRow(t4_2, new[] { "Viewpoint Display", "Collect multiple viewpoints", "List all viewpoints on whiteboard, no evaluation" });
AddRow(t4_2, new[] { "Categorization", "Many viewpoints need organizing", "Categorize similar viewpoints, extract themes" });
AddRow(t4_2, new[] { "Consensus Confirmation", "Need to form conclusions", "Confirm consensus item by item" });
AddRow(t4_2, new[] { "Difference Focusing", "Viewpoint disagreement", "Focus on differences, guide deeper discussion" });
AddRow(t4_2, new[] { "Action Implementation", "Need action plans", "Transform from discussion to action, specific practices" });
FinishTable(t4_2);
AddSpace();
AddCopyright();
AddBreak();

AddH1("4.4 Handling Common Discussion Problems");
AddH2("Problem 1: Discussion Stalls");
AddP("Reasons: Question too difficult or too open, learners unaccustomed to speaking, atmosphere not safe enough");
AddP("Response: Provide individual thinking time, lower question difficulty, have learners write before speaking, use choice questions to lower threshold");
AddSpace();

AddH2("Problem 2: Discussion Deviates from Topic");
AddP("Reasons: Poor question design, trainer didn't guide in time, learners not interested in topic");
AddP("Response: Trainer pulls back in time, use probing to connect topic, adjust questions if necessary");
AddSpace();

AddH2("Problem 3: One Learner Dominates Discussion");
AddP("Reasons: Other learners not confident enough, trainer didn't intervene in time");
AddP("Response: Set number of发言 times per person, use 'round-robin' rule, call on specific people to speak");
AddSpace();

AddH2("Problem 4: Viewpoint Conflicts Appear");
AddP("Reasons: Normal phenomenon, indicating deep discussion");
AddP("Response: Affirm value of conflict, guide both sides to communicate face-to-face, find common ground");
AddSpace();

AddH2("Problem 5: Time Insufficient");
AddP("Reasons: Discussion time designed unreasonably, discussion process diverged");
AddP("Response: Set timer, trainer interrupts at appropriate times, selectively go deep rather than cover everything");
AddSpace();
AddCopyright();
AddBreak();

AddH1("4.5 Forms and Exercises");
AddH2("Form 4.1: Discussion Design Checklist");
AddQuoteP("Instructions: Purpose - use when designing discussion activities to ensure five elements are complete. Requirement - fill out before each discussion activity design. Time - 10 minutes");
AddSpace();
AddP("Discussion topic: ____________________________");
var f4_1 = CreateTable(new[] { "Element", "Check Points", "Completion Status" });
AddRow(f4_1, new[] { "Clear Objectives", "What problem to solve? What will learners gain?", "Yes / No" });
AddRow(f4_1, new[] { "Question-Driven", "Is the question open? Are there different viewpoints?", "Yes / No" });
AddRow(f4_1, new[] { "Clear Rules", "What are speaking rules? How much time?", "Yes / No" });
AddRow(f4_1, new[] { "Reasonable Time", "Individual thinking time? Group discussion time?", "Yes / No" });
AddRow(f4_1, new[] { "Specific Outcomes", "What is the discussion output? How to display?", "Yes / No" });
FinishTable(f4_1);
AddSpace();

AddH2("Exercise 4-A (Basic): Discussion Design Practice");
AddP("Design a complete discussion activity for the following topic:");
AddSpace();
AddP("Topic: 'How to improve team meeting efficiency'");
AddP("Learning objective: Learners can identify characteristics of inefficient meetings and propose improvement suggestions");
AddSpace();
AddP("Discussion question (open-ended): ________________________________");
AddP("Individual thinking time: ______ minutes");
AddP("Group discussion time: ______ minutes");
AddP("Discussion rules (at least 3):");
AddP("1. ________________________________");
AddP("2. ________________________________");
AddP("3. ________________________________");
AddP("Expected output (output form): ________________________________");
AddSpace();

AddH2("Exercise 4-B (Application): Discussion Question Identification");
AddP("Identify whether the following discussion questions are effective and explain why:");
AddP("( ) 'Do you think this method is good or not?'");
AddP("( ) 'Please discuss: Why did the project fail? You may consider three dimensions: people, process, resources'");
AddP("( ) 'What ideas do you have?'");
AddSpace();
AddCopyright();
AddBreak();

// ========== Part 5 ==========
AddChapterTitle("Part 5: Experience Activation");
AddQuoteP("Learners do not come with empty heads. Every learner has valuable experience. The task of facilitation is to activate this experience and make it learning material.");
AddSpace();
AddH1("5.1 Learning Objectives");
AddNum(1, "Understand the Activate-Bridge-Extract three-stage model");
AddNum(2, "Master techniques for activating learner experience");
AddNum(3, "Learn to connect personal experience with learning content");
AddNum(4, "Guide learners to extract patterns from experience");
AddSpace();
AddH2("Content Navigation");
AddP("This chapter includes 3 core concepts, 2 interactive forms, 2 exercises");
AddSpace();
AddCopyright();
AddBreak();

AddH1("5.2 Activate-Bridge-Extract Three-Stage Model");
AddP("Experience activation is a complete process divided into three stages:");
AddSpace();

AddH2("Stage 1: Activate");
AddP("Goal: Evoke learners' existing related experiences and bring experiences to the surface.");
AddP("Key question: For this topic, what experiences do learners have from before?");
AddP("Operation methods:");
AddP("- Evoke memory through questioning: 'Have you encountered a situation where...'");
AddP("- Provide specific scenario descriptions to help learners contrast with their own experience");
AddP("- Use sticky notes or group sharing so everyone has the opportunity to recall");
AddSpace();

AddH2("Stage 2: Bridge");
AddP("Goal: Build connections between learners' personal experience and new learning content.");
AddP("Key question: What connection exists between your experience and today's learning?");
AddP("Operation methods:");
AddP("- Guide learner reflection: 'What are the similarities and differences between your experience and the model we learned today?'");
AddP("- Use analogy or contrast to help connect: 'The situation you encountered is like what we just talked about...'");
AddP("- Have learners discover 'shadows' in their experience - parts that vaguely conform to new knowledge");
AddSpace();

AddH2("Stage 3: Extract");
AddP("Goal: Extract generalizable patterns from specific experiences.");
AddP("Key question: From your experience, what generalizable experience can be summarized?");
AddP("Operation methods:");
AddP("- Ask 'So...' questions: From specific story to general pattern");
AddP("- Guide naming: Give this pattern a name");
AddP("- Discuss applicable boundaries: Under what circumstances is this experience useful, under what circumstances might it not apply");
AddSpace();

var t5_1 = CreateTable(new[] { "Stage", "Goal", "Key Question", "Trainer Task" });
AddRow(t5_1, new[] { "Activate", "Evoke experience", "What experiences do learners have?", "Question to evoke memory" });
AddRow(t5_1, new[] { "Bridge", "Build connections", "What connection between experience and content?", "Contrast, analogy" });
AddRow(t5_1, new[] { "Extract", "Form patterns", "What generalizable can be extracted?", "Probe, name" });
FinishTable(t5_1);
AddSpace();

AddTipP("The three stages are not a linear process but a cyclical iteration. In actual teaching, the cycle of 'activate-bridge-extract' may be experienced multiple times, making understanding increasingly deeper.");
AddSpace();
AddCopyright();
AddBreak();

AddH1("5.3 Experience Activation Techniques");
AddH2("Technique 1: Scenario Anchoring");
AddP("By describing a specific scenario, help learners 'enter' that scene, thereby evoking related experiences.");
AddP("Example: 'Imagine you are in a project meeting. The project manager just reported that the project schedule has been delayed by two weeks... What would you do in this situation?'");
AddSpace();

AddH2("Technique 2: Experience Mapping");
AddP("Systematically organize learner experiences in different scenarios to help learners see the richness of their own experiences.");
AddP("Example: 'Please write down three scenarios where you needed to give performance feedback. When did this happen? Who was the target? What was the result?'");
AddSpace();

AddH2("Technique 3: Contrast Bridging");
AddP("Compare learner experience with new learning content to find similarities and differences.");
AddP("Example: 'What you said about listening first then speaking - what are the similarities and differences with the deep listening model we learned?'");
AddSpace();

AddH2("Technique 4: Pattern Extraction");
AddP("Guide learners to summarize generalizable patterns from specific experiences.");
AddP("Example: 'From the three people who shared, what do you think are the common key points for effective coaching?'");
AddSpace();
AddCopyright();
AddBreak();

AddH1("5.4 Forms and Exercises");
AddH2("Form 5.1: Experience Activation Design");
AddQuoteP("Instructions: Purpose - design a complete experience activation activity. Requirement - design according to three-stage model. Time - 10 minutes");
AddSpace();
AddP("Learning topic: ____________________________");
var f5_1 = CreateTable(new[] { "Stage", "Design Content" });
AddRow(f5_1, new[] { "Activate: How to evoke learner related experiences?", "" });
AddRow(f5_1, new[] { "Bridge: How to connect experience with content?", "" });
AddRow(f5_1, new[] { "Extract: How to guide forming generalizable patterns?", "" });
FinishTable(f5_1);
AddSpace();

AddH2("Exercise 5-A (Basic): Three-Stage Identification");
AddP("Identify which stage the following teaching activities belong to:");
AddP("( ) 'Please recall how many project retrospectives you've done in the past year.'");
AddP("( ) 'What you said about listening first then speaking - what connection does it have with the deep listening model we learned?'");
AddP("( ) 'From everyone's sharing, we can extract three key actions for effective coaching...'");
AddP("( ) 'When you encounter a demotivated subordinate, what do you usually do?'");
AddSpace();

AddH2("Exercise 5-B (Application): Design an Experience Activation");
AddP("For the topic 'Effective Delegation', design a three-stage experience activation activity:");
AddSpace();
AddP("[Activate Stage]");
AddP("Evoking question: ________________________________");
AddP("Operation method: ________________________________");
AddSpace();
AddP("[Bridge Stage]");
AddP("Connecting question: ________________________________");
AddP("Operation method: ________________________________");
AddSpace();
AddP("[Extract Stage]");
AddP("Extracting question: ________________________________");
AddP("Expected output: ________________________________");
AddSpace();
AddCopyright();
AddBreak();

// ========== Part 6 ==========
AddChapterTitle("Part 6: Reflection and Transfer");
AddQuoteP("Learning does not happen at the training site but in the thinking and application after training. Reflection is the accelerator of learning, and transfer is the destination of learning.");
AddSpace();
AddH1("6.1 Learning Objectives");
AddNum(1, "Understand the three-layer reflection framework");
AddNum(2, "Master the usage of implementation intention cards");
AddNum(3, "Plan a 30-day transfer path");
AddNum(4, "Establish mechanisms for continuous learning");
AddSpace();
AddH2("Content Navigation");
AddP("This chapter includes 3 core concepts, 2 interactive forms, 2 exercises");
AddSpace();
AddCopyright();
AddBreak();

AddH1("6.2 Three-Layer Reflection Framework");
AddP("Reflection has three layers, each focusing on different dimensions:");
AddSpace();

AddH2("Layer 1: Content Reflection (What)");
AddP("Reflect on the learning content itself. What did I learn?");
AddP("Core questions:");
AddP("- What is the most important learning point today?");
AddP("- Which viewpoint or tool impressed me most?");
AddP("- What previous understandings were wrong or incomplete?");
AddSpace();

AddH2("Layer 2: Process Reflection (How)");
AddP("Reflect on the learning process and methods. How did I learn?");
AddP("Core questions:");
AddP("- During the learning process, what gave me the most收获?");
AddP("- How has my thinking approach changed?");
AddP("- How can I improve my learning methods?");
AddSpace();

AddH2("Layer 3: Transfer Reflection (So What)");
AddP("Reflect on the application of learning outcomes. What is the significance of this learning for me?");
AddP("Core questions:");
AddP("- How do I plan to apply what I learned today?");
AddP("- What obstacles might I encounter? How will I overcome them?");
AddP("- What impact will this learning have on my future work?");
AddSpace();

var t6_1 = CreateTable(new[] { "Layer", "Focus", "Core Question", "Reflection Question Example" });
AddRow(t6_1, new[] { "Content Reflection", "What was learned", "What", "What is the most important learning point today?" });
AddRow(t6_1, new[] { "Process Reflection", "How learned", "How", "How has my thinking approach changed?" });
AddRow(t6_1, new[] { "Transfer Reflection", "What it means", "So What", "How do I plan to apply this?" });
FinishTable(t6_1);
AddSpace();

AddTipP("The sequence of three-layer reflection is important: reflect on content first (what was learned), then process (how learned), finally transfer (how to use). Don't start with 'how will you use this' - learners haven't yet organized what they learned.");
AddSpace();
AddCopyright();
AddBreak();

AddH1("6.3 Implementation Intention Cards");
AddP("Implementation intention is a technology that transforms willingness into action. Research shows that simply saying 'I will do X' is not effective, but 'When situation Y occurs, I will do Z' is much better.");
AddSpace();

AddH2("Components of Implementation Intention");
var t6_2 = CreateTable(new[] { "Component", "Description and Example" });
AddRow(t6_2, new[] { "Target Behavior", "What I will do", "I will write feedback points before each performance conversation" });
AddRow(t6_2, new[] { "Trigger Situation", "When what situation occurs", "When I feel like saying 'You这个人...'" });
AddRow(t6_2, new[] { "Alternative Behavior", "What I will do instead", "I will say 'I observed... this behavior's consequence is...'" });
FinishTable(t6_2);
AddSpace();

AddH2("Implementation Intention Card Template");
AddQuoteP("When _________________________________, ");
AddQuoteP("I will _________________________________.");
AddSpace();

AddH2("Usage Scenarios");
AddNum(1, "At course end: Have each learner write down their most important implementation intention");
AddNum(2, "One week after training: Remind learners to review their implementation intentions");
AddNum(3, "One month after training: Check implementation intention execution");
AddSpace();
AddCopyright();
AddBreak();

AddH1("6.4 30-Day Transfer Path");
AddP("Learning transfer is a continuous process requiring systematic support. Here is the 30-day transfer path:");
AddSpace();

AddH2("Week 1 (Days 1-7): Consolidate Memory");
AddP("Goal: Transform short-term memory into long-term memory");
AddP("Actions:");
AddP("- Spend 10 minutes reviewing today's learning content each day");
AddP("- Explain learning content to family or colleagues");
AddP("- Record application scenarios in phone memo");
AddSpace();

AddH2("Week 2 (Days 8-14): Try Application");
AddP("Goal: Try applying 1-2 tools or methods in real work");
AddP("Actions:");
AddP("- Identify the tool you most want to try");
AddP("- Design specific application scenarios and plans");
AddP("- Find a safe opportunity to try");
AddSpace();

AddH2("Week 3 (Days 15-21): Review and Adjust");
AddP("Goal: Analyze the effects of attempts and adjust optimization");
AddP("Actions:");
AddP("- Review attempts over two weeks and record results");
AddP("- Analyze what was effective and what needs adjustment");
AddP("- Adjust strategies and prepare to continue application");
AddSpace();

AddH2("Week 4 (Days 22-30): Form Habits");
AddP("Goal: Solidify effective practices into habits");
AddP("Actions:");
AddP("- Identify which practices to continue");
AddP("- Establish reminder and persistence mechanisms");
AddP("- Share with colleagues for social support");
AddSpace();

var t6_3 = CreateTable(new[] { "Week", "Goal", "Core Action", "Milestone" });
AddRow(t6_3, new[] { "Week 1", "Consolidate Memory", "Review, explain to others", "Can paraphrase core content in own words" });
AddRow(t6_3, new[] { "Week 2", "Try Application", "Design scenarios, actually try", "At least 1 attempt" });
AddRow(t6_3, new[] { "Week 3", "Review and Adjust", "Record results, analyze and adjust", "Form initial experience" });
AddRow(t6_3, new[] { "Week 4", "Form Habits", "Persistence mechanism, share and support", "1 reproducible practice" });
FinishTable(t6_3);
AddSpace();
AddCopyright();
AddBreak();

AddH1("6.5 Forms and Exercises");
AddH2("Form 6.1: Implementation Intention Card");
AddQuoteP("Instructions: Purpose - transform learning willingness into specific action. Requirement - write down your most important implementation intention. Time - 5 minutes");
AddSpace();
AddP("Most important tool/method I learned: ____________________________");
AddP("I will use it in ____________________________ (scenario)");
AddP("When _________________________________ (trigger situation),");
AddP("I will _________________________________ (alternative behavior).");
AddSpace();
AddP("I anticipate possible obstacles: ________________________________");
AddP("My response method is: ________________________________");
AddSpace();

AddH2("Form 6.2: 30-Day Action Plan");
AddQuoteP("Instructions: Purpose - plan 30-day learning transfer. Requirement - set one core goal per week. Time - 15 minutes");
AddSpace();
var f6_1 = CreateTable(new[] { "Week", "My Goal", "Specific Actions | When to Start | Measurement Criteria" });
AddRow(f6_1, new[] { "Week 1 Consolidate Memory", "", "" });
AddRow(f6_1, new[] { "Week 2 Try Application", "", "" });
AddRow(f6_1, new[] { "Week 3 Review and Adjust", "", "" });
AddRow(f6_1, new[] { "Week 4 Form Habits", "", "" });
FinishTable(f6_1);
AddSpace();

AddH2("Exercise 6-A (Basic): Three-Layer Reflection Practice");
AddP("For what you learned today about 'five question types', complete three-layer reflection:");
AddSpace();
AddP("[Content Reflection] One most important viewpoint I learned: ________________________________");
AddP("[Process Reflection] Something worth maintaining about my learning method: ________________________________");
AddP("[Transfer Reflection] I plan to use this tool in ________________ scenario because: ________________________________");
AddSpace();

AddH2("Exercise 6-B (Application): Design Your Implementation Intention");
AddP("For the most important tool or method you learned in the course, design an implementation intention:");
AddSpace();
AddP("Tool/Method: ________________________________");
AddP("Target behavior: ________________________________");
AddP("Trigger situation: ________________________________");
AddP("Alternative behavior: ________________________________");
AddSpace();
AddCopyright();
AddBreak();

// ========== Part 7 ==========
AddChapterTitle("Part 7: Integration into Design");
AddQuoteP("Facilitation technology is not an ornament but the overall framework of the course. Integrate facilitation into design and let learning happen naturally.");
AddSpace();
AddH1("7.1 Learning Objectives");
AddNum(1, "Identify four types of facilitation timing");
AddNum(2, "Master seven elements of facilitation scripts");
AddNum(3, "Integrate facilitation technology into overall course design");
AddNum(4, "Design a complete course outline using facilitation technology");
AddSpace();
AddH2("Content Navigation");
AddP("This chapter includes 4 core concepts, 2 interactive forms, 2 exercises");
AddSpace();
AddCopyright();
AddBreak();

AddH1("7.2 Four Types of Facilitation Timing");
AddP("In courses, facilitation is not appropriate at any time. The right timing must be seized.");
AddSpace();

AddH2("Timing 1: Before Concept Introduction");
AddP("Position: Before introducing new concepts");
AddP("Purpose: Activate related experiences and lay groundwork for new concepts");
AddP("Facilitation method: Question to evoke experience");
AddP("Example: 'Before we learn about performance feedback, has anyone encountered a situation where...'");
AddSpace();

AddH2("Timing 2: At Viewpoint Collision");
AddP("Position: When learners have different viewpoints");
AddP("Purpose: Deepen understanding and cultivate critical thinking");
AddP("Facilitation method: Trigger discussion and guide deliberation");
AddP("Example: 'Person A says it should be done this way, Person B says it should be done that way. What does everyone think?'");
AddSpace();

AddH2("Timing 3: At Method Application");
AddP("Position: After learning new methods or tools");
AddP("Purpose: Promote application and deepen understanding");
AddP("Facilitation method: Practice + reflection");
AddP("Example: 'Everyone just practiced this model. Now please share: what difficulties did you encounter in practice?'");
AddSpace();

AddH2("Timing 4: At Summary Transition");
AddP("Position: At the end of each section or entire course");
AddP("Purpose: Consolidate learning and connect to next section");
AddP("Facilitation method: Guide reflection + intention setting");
AddP("Example: 'What did we learn today? What impressed you most? What different thing will you do tomorrow?'");
AddSpace();

var t7_1 = CreateTable(new[] { "Timing", "Position", "Purpose", "Facilitation Method" });
AddRow(t7_1, new[] { "Before Concept Introduction", "Before new concepts", "Activate experience for groundwork", "Question to evoke experience" });
AddRow(t7_1, new[] { "At Viewpoint Collision", "When viewpoints differ", "Deepen understanding cultivate thinking", "Trigger discussion" });
AddRow(t7_1, new[] { "At Method Application", "After learning methods", "Promote application deepen understanding", "Practice + reflection" });
AddRow(t7_1, new[] { "At Summary Transition", "At conclusion", "Consolidate learning connect sections", "Reflection + intention setting" });
FinishTable(t7_1);
AddSpace();
AddCopyright();
AddBreak();

AddH1("7.3 Seven Elements of Facilitation Scripts");
AddP("A facilitation script is the trainer's 'script' during facilitation activities, containing seven elements:");
AddSpace();

AddH2("Element 1: Warm-up Question");
AddP("Purpose: Attract attention and establish learning motivation");
AddP("Example: 'Have you noticed a phenomenon in teams recently...'");
AddSpace();

AddH2("Element 2: Core Question");
AddP("Purpose: Trigger deep thinking and promote construction");
AddP("Example: 'Faced with this situation, what would you do if it were you?'");
AddSpace();

AddH2("Element 3: Probing Design");
AddP("Purpose: Guide depth and excavate more thinking");
AddP("Example: 'What makes you think that way? Can you tell me your reasoning?'");
AddSpace();

AddH2("Element 4: Time Arrangement");
AddP("Purpose: Control pace and ensure completion");
AddP("Example: 'Now I will give everyone 3 minutes for individual thinking, then 5 minutes for group discussion'");
AddSpace();

AddH2("Element 5: Presentation Method");
AddP("Purpose: Make output visible and facilitate subsequent discussion");
AddP("Example: 'Please write your conclusions on the whiteboard. Each group sends a representative to share.'");
AddSpace();

AddH2("Element 6: Harvest Strategy");
AddP("Purpose: Extract outcomes and connect to learning objectives");
AddP("Example: 'From each group's sharing, we can see three key points...'");
AddSpace();

AddH2("Element 7: Transition Language");
AddP("Purpose: Naturally connect to next segment");
AddP("Example: 'Everyone's discussion was wonderful. Now let's turn our attention to...'");
AddSpace();
AddCopyright();
AddBreak();

AddH1("7.4 Integrating Facilitation into Course Design");
AddH2("Design Principles");
AddNum(1, "Facilitation is the framework, not ornament: The entire course unfolds through facilitation, not occasionally inserting facilitation into lecture");
AddNum(2, "Lecture supports facilitation: Necessary lecture provides knowledge and background for facilitation");
AddNum(3, "Reflection after experience: Every experiential activity must be followed by reflection and extraction");
AddNum(4, "From part to whole: Design facilitation activities first, then consider how to connect them");
AddSpace();

AddH2("Design Steps");
AddNum(1, "Determine learning objectives: Clarify what learners should be able to do after the course");
AddNum(2, "Design facilitation activities: Design facilitation activities around objectives (discussion, practice, case studies, etc.)");
AddNum(3, "Supplement necessary lecture: Analyze what knowledge foundation facilitation activities need and design necessary lecture");
AddNum(4, "Arrange facilitation timing: Place facilitation activities at appropriate timing (before concept introduction, at viewpoint collision, etc.)");
AddNum(5, "Write facilitation scripts: Fill in seven elements to form complete facilitation scripts");
AddSpace();

AddH2("Facilitative Course Outline Template");
AddQuoteP("Course outline example (two-hour course):");
AddSpace();
var t7_2 = CreateTable(new[] { "Time", "Content", "Teaching Method", "Facilitation Elements" });
AddRow(t7_2, new[] { "0-10 min", "Course Introduction", "Question warm-up", "Questions to provoke thinking" });
AddRow(t7_2, new[] { "10-30 min", "Core Concept Lecture", "Lecture + Question", "Facilitation before concept introduction" });
AddRow(t7_2, new[] { "30-60 min", "Group Discussion Practice", "Facilitation discussion", "Seven-element complete facilitation script" });
AddRow(t7_2, new[] { "60-75 min", "Reporting and Commentary", "Respond and probe", "Probing design" });
AddRow(t7_2, new[] { "75-90 min", "Method Application", "Practice + Reflection", "Transition language design" });
AddRow(t7_2, new[] { "90-120 min", "Summary and Action", "Guide reflection + intention setting", "Implementation intention card" });
FinishTable(t7_2);
AddSpace();
AddCopyright();
AddBreak();

AddH1("7.5 Forms and Exercises");
AddH2("Form 7.1: Facilitation Timing Identification");
AddQuoteP("Instructions: Purpose - identify where in your course facilitation is appropriate. Requirement - review your course content and identify four types of timing. Time - 10 minutes");
AddSpace();
AddP("Course topic: ____________________________");
var f7_1 = CreateTable(new[] { "Timing Type", "Identified Position", "Specific Design Approach" });
AddRow(f7_1, new[] { "Before Concept Introduction", "", "" });
AddRow(f7_1, new[] { "At Viewpoint Collision", "", "" });
AddRow(f7_1, new[] { "At Method Application", "", "" });
AddRow(f7_1, new[] { "At Summary Transition", "", "" });
FinishTable(f7_1);
AddSpace();

AddH2("Form 7.2: Facilitation Script Design");
AddQuoteP("Instructions: Purpose - design a complete facilitation script. Requirement - fill in according to seven elements. Time - 15 minutes");
AddSpace();
AddP("Facilitation session name: ____________________________");
AddP("Course position: ____________________________");
AddP("Learning objective: ____________________________");
var f7_2 = CreateTable(new[] { "Element", "Design Content" });
AddRow(f7_2, new[] { "Warm-up Question", "" });
AddRow(f7_2, new[] { "Core Question", "" });
AddRow(f7_2, new[] { "Probing Design", "" });
AddRow(f7_2, new[] { "Time Arrangement", "" });
AddRow(f7_2, new[] { "Presentation Method", "" });
AddRow(f7_2, new[] { "Harvest Strategy", "" });
AddRow(f7_2, new[] { "Transition Language", "" });
FinishTable(f7_2);
AddSpace();

AddH2("Exercise 7-A (Basic): Facilitation Timing Identification");
AddP("Identify which facilitation timing the following scenarios belong to:");
AddP("( ) Before learning 'Effective Meetings', first asking learners 'What was the most effective meeting you participated in?'");
AddP("( ) After learner discussion, sharing respective viewpoints and triggering further thinking");
AddP("( ) After learners practiced the 'STAR Method', asking everyone to share difficulties encountered in practice");
AddP("( ) At course end, asking learners 'What is the most important thing you learned today?'");
AddSpace();

AddH2("Exercise 7-B (Application): Design a Facilitative Course Outline");
AddP("Choose a familiar topic and design a two-hour facilitative course outline:");
AddSpace();
AddP("Course topic: ____________________________");
AddP("Overall objective: ____________________________");
var f7_3 = CreateTable(new[] { "Time", "Content", "Teaching Method", "Facilitation Timing" });
AddRow(f7_3, new[] { "", "", "", "" });
AddRow(f7_3, new[] { "", "", "", "" });
AddRow(f7_3, new[] { "", "", "", "" });
AddRow(f7_3, new[] { "", "", "", "" });
FinishTable(f7_3);
AddSpace();
AddCopyright();
AddBreak();

// ========== TOOLS APPENDIX ==========
AddChapterTitle("Appendix: Quick Reference Tools");
AddQuoteP("12 quick reference cards covering core tools and phrases for quick lookup in practice.");
AddSpace();
AddCopyright();
AddBreak();

AddH1("Quick Reference 1: Five Question Types");
var tc1 = CreateTable(new[] { "Type", "Purpose", "Typical Phrases", "When to Use" });
AddRow(tc1, new[] { "Information-Gathering", "Understand background", "What/How many/Did you", "Opening warm-up" });
AddRow(tc1, new[] { "Clarification", "Clarify understanding", "What specifically/Example", "Response unclear" });
AddRow(tc1, new[] { "Exploration", "Deep thinking", "What else/Causes", "Need deep thinking" });
AddRow(tc1, new[] { "Hypothetical", "Explore possibilities", "What if...", "Stimulate creativity" });
AddRow(tc1, new[] { "Action-Oriented", "Promote action", "Will you do/Commit", "Course closing" });
FinishTable(tc1);
AddSpace();
AddCopyright();
AddBreak();

AddH1("Quick Reference 2: Six-Level Questioning Ladder");
var tc2 = CreateTable(new[] { "Level", "Name", "Cognitive Activity", "Question Example" });
AddRow(tc2, new[] { "1", "Memory", "Extract information", "What is the name of this model?" });
AddRow(tc2, new[] { "2", "Understanding", "Explain", "Can you explain it?" });
AddRow(tc2, new[] { "3", "Application", "Apply to new situations", "What scenario can this be used in?" });
AddRow(tc2, new[] { "4", "Synthesis", "Integrate and create", "How would you improve it?" });
AddRow(tc2, new[] { "5", "Evaluation", "Judge and decide", "Which is more effective? Why?" });
AddRow(tc2, new[] { "6", "Reflection", "Reflect on learning", "What can you apply?" });
FinishTable(tc2);
AddSpace();
AddCopyright();
AddBreak();

AddH1("Quick Reference 3: Probing Phrases");
var tc3 = CreateTable(new[] { "Situation", "Probing Phrases" });
AddRow(tc3, new[] { "Need more details", "Can you be more specific?/Can you give an example?" });
AddRow(tc3, new[] { "Need reasoning", "What makes you think that?/What evidence?" });
AddRow(tc3, new[] { "Need alternatives", "If not this way, what other approaches?" });
AddRow(tc3, new[] { "Need deeper reasons", "Why did this happen?/Root cause?" });
AddRow(tc3, new[] { "Need evaluation", "Advantages?/Disadvantages?" });
AddRow(tc3, new[] { "Need action", "How apply?/What first?" });
FinishTable(tc3);
AddSpace();
AddCopyright();
AddBreak();

AddH1("Quick Reference 4: Four Listening Levels");
var tc4 = CreateTable(new[] { "Level", "Focus", "Learner Feeling", "Improvement Direction" });
AddRow(tc4, new[] { "Pretend Listening", "Not listening", "Not valued", "Stay focused" });
AddRow(tc4, new[] { "Selective Listening", "What they care about", "Ignored", "Pay full attention" });
AddRow(tc4, new[] { "Focused Listening", "What was said", "Heard", "Perceive emotions" });
AddRow(tc4, new[] { "Deep Listening", "Said and unsaid", "Understood", "Notice subtext" });
FinishTable(tc4);
AddSpace();
AddCopyright();
AddBreak();

AddH1("Quick Reference 5: Four Response Scenarios");
var tc5 = CreateTable(new[] { "Scenario", "Core Strategy", "Example Phrases" });
AddRow(tc5, new[] { "Learner shares experience", "Probe details + Acknowledge feelings", "That must have made you feel..." });
AddRow(tc5, new[] { "Learner asks question", "Clarify first + Guide then", "Your question is... is this what you mean?" });
AddRow(tc5, new[] { "Learner expresses confusion", "Accept confusion + Confirm boundaries", "Many people are confused at first" });
AddRow(tc5, new[] { "Learner expresses opinion", "Acknowledge + Explore reasons", "Interesting perspective, how did you arrive at this?" });
FinishTable(tc5);
AddSpace();
AddCopyright();
AddBreak();

AddH1("Quick Reference 6: Non-Verbal Facilitation Tools");
AddP("Body language: Open posture, eye contact, nodding, facial expressions for empathy");
AddP("Space utilization: Position changes, distance adjustment, gesture guidance");
AddP("Voice utilization: Tone variation, pause technique, pace adjustment");
AddP("Supporting tools: Whiteboard recording, sticky notes, timers");
AddSpace();
AddCopyright();
AddBreak();

AddH1("Quick Reference 7: Five Discussion Design Elements");
var tc7 = CreateTable(new[] { "Element", "Design Points", "Check Question" });
AddRow(tc7, new[] { "Clear Objectives", "What problem to solve", "What should discussion achieve?" });
AddRow(tc7, new[] { "Question-Driven", "Good question is core", "Is the question open?" });
AddRow(tc7, new[] { "Clear Rules", "How to proceed", "Do learners know how to discuss?" });
AddRow(tc7, new[] { "Reasonable Time", "Right thinking time", "Enough but not excessive?" });
AddRow(tc7, new[] { "Specific Outcomes", "Visible output", "What is produced?" });
FinishTable(tc7);
AddSpace();
AddCopyright();
AddBreak();

AddH1("Quick Reference 8: Discussion Harvest Methods");
var tc8 = CreateTable(new[] { "Method", "Applicable Scenario", "Operation Points" });
AddRow(tc8, new[] { "Viewpoint Display", "Collect multiple viewpoints", "List all viewpoints without evaluation" });
AddRow(tc8, new[] { "Categorization", "Many viewpoints need organizing", "Categorize similar viewpoints" });
AddRow(tc8, new[] { "Consensus Confirmation", "Need to form conclusions", "Confirm consensus item by item" });
AddRow(tc8, new[] { "Difference Focusing", "Viewpoint disagreement", "Focus on differences for depth" });
AddRow(tc8, new[] { "Action Implementation", "Need action plans", "Transform to specific practices" });
FinishTable(tc8);
AddSpace();
AddCopyright();
AddBreak();

AddH1("Quick Reference 9: Experience Activation Three Stages");
var tc9 = CreateTable(new[] { "Stage", "Goal", "Key Question", "Operation Method" });
AddRow(tc9, new[] { "Activate", "Evoke experience", "What experiences?", "Question to evoke memory" });
AddRow(tc9, new[] { "Bridge", "Build connections", "What connection?", "Contrast, analogy" });
AddRow(tc9, new[] { "Extract", "Form patterns", "What generalizable?", "Probe, name" });
FinishTable(tc9);
AddSpace();
AddCopyright();
AddBreak();

AddH1("Quick Reference 10: Three-Layer Reflection Framework");
var tc10 = CreateTable(new[] { "Layer", "Focus", "Core Question", "Reflection Question" });
AddRow(tc10, new[] { "Content Reflection", "What was learned", "What", "Most important learning point?" });
AddRow(tc10, new[] { "Process Reflection", "How learned", "How", "Thinking approach changed?" });
AddRow(tc10, new[] { "Transfer Reflection", "What it means", "So What", "How to apply?" });
FinishTable(tc10);
AddSpace();
AddCopyright();
AddBreak();

AddH1("Quick Reference 11: 30-Day Transfer Path");
var tc11 = CreateTable(new[] { "Week", "Goal", "Core Action", "Milestone" });
AddRow(tc11, new[] { "Week 1", "Consolidate Memory", "Review, explain to others", "Paraphrase in own words" });
AddRow(tc11, new[] { "Week 2", "Try Application", "Design scenarios, try", "At least 1 attempt" });
AddRow(tc11, new[] { "Week 3", "Review and Adjust", "Record results, analyze", "Form initial experience" });
AddRow(tc11, new[] { "Week 4", "Form Habits", "Establish mechanism, share", "1 reproducible practice" });
FinishTable(tc11);
AddSpace();
AddCopyright();
AddBreak();

AddH1("Quick Reference 12: Facilitation Timing and Scripts");
var tc12 = CreateTable(new[] { "Timing", "Position", "Facilitation Method" });
AddRow(tc12, new[] { "Before Concept Introduction", "Before new concepts", "Question to evoke experience" });
AddRow(tc12, new[] { "At Viewpoint Collision", "When viewpoints differ", "Trigger discussion and deliberation" });
AddRow(tc12, new[] { "At Method Application", "After learning methods", "Practice + reflection" });
AddRow(tc12, new[] { "At Summary Transition", "At conclusion", "Reflection + intention setting" });
FinishTable(tc12);
AddSpace();
AddP("Seven facilitation script elements: Warm-up Question -> Core Question -> Probing Design -> Time Arrangement -> Presentation Method -> Harvest Strategy -> Transition Language");
AddSpace();
AddCopyright();
AddBreak();

// ========== 30-DAY PRACTICE LOG ==========
AddChapterTitle("Appendix: 30-Day Practice Log");
AddQuoteP("Learning transfer is a journey, not an event. Record daily and make change visible.");
AddSpace();
AddH1("30-Day Practice Log Instructions");
AddP("Usage method:");
AddNum(1, "Choose a time each day (recommended morning or before bed) to fill in");
AddNum(2, "Key records: what attempts you made, what difficulties you encountered, what gains you had");
AddNum(3, "Review once per week to see your progress");
AddNum(4, "After 30 days, summarize your growth and changes");
AddSpace();

AddH2("My 30-Day Commitment");
AddP("I commit to spending ______ minutes daily on learning and practice for the next 30 days");
AddP("The one behavior I most want to change is: ________________________________");
AddP("The self I expect to be after 30 days: ________________________________");
AddP("Signature: ________________ Date: ________________");
AddSpace();
AddCopyright();
AddBreak();

AddH1("Week 1 Log (Days 1-7)");
var log1 = CreateTable(new[] { "Date", "Learning Content | What I Tried | Difficulties Encountered | My Gains" });
for (int i = 1; i <= 7; i++) {
    AddRow(log1, new[] { "Day " + i, "", "", "" });
}
FinishTable(log1);
AddSpace();
AddP("Week 1 Summary:");
AddDottedLines(3);
AddSpace();
AddCopyright();
AddBreak();

AddH1("Week 2 Log (Days 8-14)");
var log2 = CreateTable(new[] { "Date", "Learning Content | What I Tried | Difficulties Encountered | My Gains" });
for (int i = 8; i <= 14; i++) {
    AddRow(log2, new[] { "Day " + i, "", "", "" });
}
FinishTable(log2);
AddSpace();
AddP("Week 2 Summary:");
AddDottedLines(3);
AddSpace();
AddCopyright();
AddBreak();

AddH1("Week 3 Log (Days 15-21)");
var log3 = CreateTable(new[] { "Date", "Learning Content | What I Tried | Difficulties Encountered | My Gains" });
for (int i = 15; i <= 21; i++) {
    AddRow(log3, new[] { "Day " + i, "", "", "" });
}
FinishTable(log3);
AddSpace();
AddP("Week 3 Summary:");
AddDottedLines(3);
AddSpace();
AddCopyright();
AddBreak();

AddH1("Week 4 Log (Days 22-30)");
var log4 = CreateTable(new[] { "Date", "Learning Content | What I Tried | Difficulties Encountered | My Gains" });
for (int i = 22; i <= 30; i++) {
    AddRow(log4, new[] { "Day " + i, "", "", "" });
}
FinishTable(log4);
AddSpace();
AddP("Week 4 Summary:");
AddDottedLines(3);
AddSpace();
AddCopyright();
AddBreak();

AddH1("30-Day Achievement Summary");
AddP("I completed ______ days of learning and practice");
AddP("The change I am most satisfied with: ________________________________");
AddP("The biggest difficulty I encountered: ________________________________");
AddP("How I overcame this difficulty: ________________________________");
AddP("The most important thing I learned: ________________________________");
AddP("What I plan to continue: ________________________________");
AddP("Signature: ________________ Date: ________________");
AddSpace();
AddCopyright();
AddBreak();

// ========== COURSE EVALUATION ==========
AddChapterTitle("Appendix: Course Evaluation");
AddH1("Course Satisfaction Survey");
AddQuoteP("Thank you for attending this course. Please take 5 minutes to fill out the following evaluation. Your feedback will help us continuously improve.");
AddSpace();
AddP("Course Name: Internal Trainer Facilitation Skills");
AddP("Course Date: ____________ Instructor: ____________");
AddP("Trainee Name: ____________ Department: ____________");
AddSpace();

AddH2("1. Overall Course Evaluation");
var eval1 = CreateTable(new[] { "Evaluation Item", "Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied" });
AddRow(eval1, new[] { "1. Course content practicality", "O", "O", "O", "O", "O" });
AddRow(eval1, new[] { "2. Teaching method effectiveness", "O", "O", "O", "O", "O" });
AddRow(eval1, new[] { "3. Instructor professional level", "O", "O", "O", "O", "O" });
AddRow(eval1, new[] { "4. Classroom interaction atmosphere", "O", "O", "O", "O", "O" });
AddRow(eval1, new[] { "5. Time arrangement reasonableness", "O", "O", "O", "O", "O" });
AddRow(eval1, new[] { "6. Overall course evaluation", "O", "O", "O", "O", "O" });
FinishTable(eval1);
AddSpace();

AddH2("2. Course Content Evaluation");
var eval2 = CreateTable(new[] { "Content Module", "Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied" });
AddRow(eval2, new[] { "Part 1: Understanding Facilitation", "O", "O", "O", "O", "O" });
AddRow(eval2, new[] { "Part 2: Effective Questioning", "O", "O", "O", "O", "O" });
AddRow(eval2, new[] { "Part 3: Listening and Responding", "O", "O", "O", "O", "O" });
AddRow(eval2, new[] { "Part 4: Discussion Design and Facilitation", "O", "O", "O", "O", "O" });
AddRow(eval2, new[] { "Part 5: Experience Activation", "O", "O", "O", "O", "O" });
AddRow(eval2, new[] { "Part 6: Reflection and Transfer", "O", "O", "O", "O", "O" });
AddRow(eval2, new[] { "Part 7: Integration into Design", "O", "O", "O", "O", "O" });
AddRow(eval2, new[] { "Quick Reference Tools", "O", "O", "O", "O", "O" });
FinishTable(eval2);
AddSpace();

AddH2("3. Open-Ended Questions");
AddP("1. What do you think is the most valuable part of this course?");
AddDottedLines(3);
AddP("2. What do you think needs improvement?");
AddDottedLines(3);
AddP("3. How do you plan to apply what you learned?");
AddDottedLines(3);
AddP("4. Do you have other suggestions?");
AddDottedLines(3);
AddSpace();

AddH2("4. Learning Gains Self-Assessment");
AddQuoteP("Course end - reassess your facilitation ability (compare with Form 1.1):");
AddSpace();
var eval3 = CreateTable(new[] { "Behavior Description", "Never", "Occasionally", "Often", "Always" });
AddRow(eval3, new[] { "1. I ask more questions than lecture in class", "O", "O", "O", "O" });
AddRow(eval3, new[] { "2. I can design open-ended questions that stimulate thinking", "O", "O", "O", "O" });
AddRow(eval3, new[] { "3. When responding to learners, I follow up with questions before giving conclusions", "O", "O", "O", "O" });
AddRow(eval3, new[] { "4. I can identify key information in learner responses and respond effectively", "O", "O", "O", "O" });
AddRow(eval3, new[] { "5. I can create a safe classroom atmosphere where learners dare to speak", "O", "O", "O", "O" });
AddRow(eval3, new[] { "6. My discussion activities have clear objectives and methods", "O", "O", "O", "O" });
AddRow(eval3, new[] { "7. I can effectively harvest discussion results and connect to the topic", "O", "O", "O", "O" });
FinishTable(eval3);
AddSpace();
AddP("Post-course 'Often' or 'Always' count: ______ (Pre-course: ______)");
AddP("Dimension with greatest change: ________________________________");
AddSpace();
AddCopyright();
AddBreak();

// ========== FINAL ==========
AddChapterTitle("Conclusion");
AddQuoteP("From 'lecturer' to 'facilitator' is not an improvement in ability but a transformation in role. This road has no destination, only the direction of continuous improvement.");
AddSpace();
AddP("Over 2-3 days, you systematically learned the seven core competencies of internal trainer facilitation:");
AddBullet("Understanding Facilitation: Understand three teaching modalities and recognize your dual identity");
AddBullet("Effective Questioning: Ignite learner thinking with questions, design question sequences from shallow to deep");
AddBullet("Listening and Responding: Deep listening, appropriate response, create atmosphere of deep dialogue");
AddBullet("Discussion Design and Facilitation: Design effective discussions, manage processes, harvest results");
AddBullet("Experience Activation: Activate-Bridge-Extract, make learner experience learning material");
AddBullet("Reflection and Transfer: Three-layer reflection framework, implementation intention cards, 30-day transfer path");
AddBullet("Integration into Design: Four facilitation timing, seven facilitation script elements, make facilitation the course framework");
AddSpace();
AddP("These are not knowledge to 'finish learning and stop', but abilities that 'require continuous practice'.");
AddP("Recommendations for your future work:");
AddNum(1, "Try using at least one facilitation technology in each session you deliver");
AddNum(2, "Each month, choose one course unit to design entirely in facilitative style");
AddNum(3, "Each quarter, conduct a self-assessment and record your progress and challenges");
AddNum(4, "Find peers to observe each other and provide mutual feedback");
AddSpace();
AddQuoteP("The best learning is teaching others; the best growth is reflecting in practice.");
AddQuoteP("May you become a true facilitator - not telling learners the answers, but helping them find their own answers.");
AddSpace();
AddP("Starting today, starting now, starting with your first session.");
AddSpace();
AddSpace();
AddCopyright();
AddSpace();
AddSpace();
AddSpace();
AddSpace();
AddP("----------------------------------------------------------");
AddP("Internal Trainer Facilitation Skills - Student Handbook V1.0");
AddP("Copyright - LUO HONGWEI - For course participants only");
AddSpace();

// ========== FINAL SECTION PROPERTIES ==========
body.Append(new SectionProperties(
    new PageSize { Width = 11906, Height = 16838 },
    new PageMargin { Top = 1440, Right = 1440, Bottom = 1440, Left = 1440, Header = 720, Footer = 720 }
));

mainPart.Document.Save();
Console.WriteLine("Student handbook created: " + outputPath);
Console.WriteLine("Total content blocks: " + body.ChildElements.Count);