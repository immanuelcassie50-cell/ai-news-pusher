export const meta = {
  name: 'course-26-ob-full-production',
  description: 'Complete course package production for 26-组织行为学基础',
  phases: [
    { title: 'Course Design', detail: 'Design course framework and content' },
    { title: 'Written Materials', detail: 'Teaching docs, handbooks, assessment, exercises, pre-course' },
    { title: 'Presentation', detail: 'PPT, Excel, HTML materials' },
  ],
}

const outputPath = 'D:/新课开发/管理学/26-组织行为学基础'

phase('Course Design')
const designResult = await agent({
  prompt: `Design the complete course framework for 26-组织行为学基础 (Organizational Behavior Fundamentals).

Course Overview:
- Name: 组织行为学基础——个体、群体、组织三层视角
- Audience: New managers, HR professionals, anyone wanting to understand employee behavior systematically
- Duration: 1 day (6-8 hours)
- Problem: Managers lack systematic frameworks to understand how individual differences, group dynamics, and organizational factors interact to affect employee behavior

Three-Layer Framework:
1. Individual Layer: Big Five personality, attribution errors, motivation theories
2. Group Layer: Group dynamics, leadership, influence, conflict, team collaboration
3. Organizational Layer: Organizational structure, culture, power, change

Design 9 modules plus opening, synthesis, and closing sections. For each module specify:
- Learning objectives
- Key concepts
- Case studies
- Tools/forms
- Exercises

Output the complete design document to: ${outputPath}/课程设计框架.md

Use high-quality writing style with concrete examples and memorable insights.`,
  label: 'course-design',
  phase: 'Course Design'
})

log('Course design complete. Now launching parallel written material production...')

phase('Written Materials')

const [teachingDocsResult, handbooksResult, assessmentResult] = await parallel([
  () => agent({
    prompt: `Create the complete teaching document package for 26-组织行为学基础.

Output to: ${outputPath}/教学文档/

Create these 5 files in Markdown format:
1. 00-课程总览与场景卡.md - Course overview, scenario card mechanism, learning map
2. 01-第一部分-个体层.md - Modules 1-3: Big Five personality, attribution errors, motivation
3. 02-第二部分-群体层.md - Modules 4-7: Group dynamics, leadership, influence, conflict, teams
4. 03-第三部分-组织层.md - Modules 8-9: Organizational structure and culture
5. 04-综合应用与收尾.md - Three-layer diagnosis exercise and 30-day action plan

Reference format from: D:/2026年课程/新课开发demo/教学文档demo/
Follow the same quality standards with:
- Concrete case studies with vivid details
- Interactive exercises for each module
- Forms and tools with specific fill-in items
- Key insights highlighted with special formatting
- Gold standard writing quality`,
    label: 'teaching-docs',
    phase: 'Written Materials'
  }),

  () => agent({
    prompt: `Create the complete participant handbook for 26-组织行为学基础.

Output to: ${outputPath}/学员手册/
File: 组织行为学基础_学员手册.md

The handbook should be a "workbook" that participants complete during the course.
Structure:
- Introduction: Course overview, self-assessment form, scenario card
- Individual Layer Chapters (3): Big Five, Attribution, Motivation - each with forms and exercises
- Group Layer Chapters (4): Group dynamics, Leadership, Influence, Conflict, Teams - each with forms and exercises
- Organizational Layer Chapters (2): Structure, Culture - each with forms and exercises
- Synthesis: Three-layer diagnosis exercise
- Closing: 30-day action plan, resource recommendations

Reference format from: D:/2026年课程/新课开发demo/学员手册demo/高效能使用AI的七个习惯_学员手册_v1.0.md

Each chapter should include:
- Learning objectives
- Key concepts with vivid examples
- Interactive forms (to be completed in class)
- Exercises with clear instructions
- Knowledge framework summary
- Behavioral commitment section`,
    label: 'handbooks',
    phase: 'Written Materials'
  }),

  () => agent({
    prompt: `Create the complete assessment toolkit for 26-组织行为学基础.

Output to: ${outputPath}/评估工具包/

Create these files:
1. 01_前测题库_学员版.md - Pre-course assessment with: basic info, self-rating scales, multiple choice, scenarios
2. 02_后测题库_学员版.md - Post-course assessment with comparable structure plus application questions
3. 03_参考答案与评分细则.md - Answer key and scoring guidelines for instructor use
4. 04_行为观察量表_讲师版.md - Classroom observation checklist by module
5. 05_数据分析与课程改进指南.md - How to analyze results and adjust course
6. 06_可视化评估看板.html - Visual dashboard of class results

Reference format from: D:/2026年课程/新课开发demo/评估工具包/
Include comprehensive answer keys and detailed scoring rubrics.`,
    label: 'assessment',
    phase: 'Written Materials'
  })
])

log('Teaching docs, handbooks, and assessment complete. Launching exercises and pre-course materials...')

const [exercisesResult, preCourseResult, mgmtToolsResult] = await parallel([
  () => agent({
    prompt: `Create the complete exercise library and scenario cards for 26-组织行为学基础.

Output to: ${outputPath}/练习题库/

Create these files (both .md and .html versions):
1. G1_开场暖场练习题 - Icebreaker activities
2. G2_模块一练习_大五人格识别 - Personality identification exercises
3. G3_模块二练习_归因风格判断 - Attribution style exercises
4. G4_模块三练习_动机诊断与激励设计 - Motivation diagnosis exercises
5. G5_模块四练习_群体思维识别 - Groupthink identification
6. G6_模块五练习_影响力策略选择 - Influence strategy exercises
7. G7_模块六练习_冲突处理与共识达成 - Conflict resolution exercises
8. G8_模块七练习_团队健康度评估 - Team health assessment
9. G9_模块八练习_组织结构分析 - Organizational structure analysis
10. G10_模块九练习_组织文化诊断 - Culture diagnosis
11. G11_综合练习_三层归因诊断 - Three-layer attribution synthesis
12. G12_课后作业_真实问题处理挑战 - Post-course assignment
13. G13_讲师配套答案与评分标准 - Answer key for all exercises

Also create: ${outputPath}/场景卡/00_场景库_总览_使用指南.md

Reference format from: D:/2026年课程/新课开发demo/全流程练习题库/`,
    label: 'exercises',
    phase: 'Written Materials'
  }),

  () => agent({
    prompt: `Create the complete pre-course blended learning package for 26-组织行为学基础.

Output to: ${outputPath}/混合学习课前包/

Create these files:
1. 01_课前导读.html - High-quality HTML with course overview, comparison columns, learning goals
2. 02_预习材料_方法速览.html - Quick reference guides for all OB tools
3. 03_自我诊断问卷.html - Pre-course self-diagnosis
4. 04_我的场景卡.html - Scenario card for participants to select their real management issue
5. 05_行前清单.md - Pre-class checklist
6. 06_开营破冰活动指南.md - Opening icebreaker guide

Reference format from: D:/2026年课程/新课开发demo/混合学习课前包/
The HTML files should be high quality, printable (A3 landscape), with consistent visual design.`,
    label: 'pre-course',
    phase: 'Written Materials'
  }),

  () => agent({
    prompt: `Create the complete management tools package for 26-组织行为学基础.

Output to: ${outputPath}/管理者工具包/

Create these files:
1. 01_行为观察指南_管理者版.md - Guide for managers to observe employee behavior using OB frameworks
2. 02_辅导对话脚本_管理者版.md - Coaching conversation scripts based on OB theory
3. 03_管理者工具包_可视化.html - Visual dashboard of management tools

Reference format from: D:/2026年课程/新课开发demo/管理者工具包/`,
    label: 'mgmt-tools',
    phase: 'Written Materials'
  })
])

log('Exercises, pre-course, and management tools complete. Launching presentation materials...')

phase('Presentation')

const [pptResult, formsResult, outlineResult] = await parallel([
  () => agent({
    prompt: `Create the complete PPT presentation for 26-组织行为学基础 (120-160 slides).

Output to: ${outputPath}/PPT/
File: 26-组织行为学基础_演示文稿.pptx

Structure:
1. Opening (5-8 slides): Cover, overview, objectives, agenda, opening case
2. Individual Layer (35-45 slides):
   - Module 1: Big Five Personality (12-15 slides)
   - Module 2: Attribution Errors (10-12 slides)
   - Module 3: Motivation and Incentives (12-15 slides)
3. Group Layer (40-55 slides):
   - Module 4: Group Dynamics (10-12 slides)
   - Module 5: Leadership and Influence (12-15 slides)
   - Module 6: Conflict and Consensus (10-12 slides)
   - Module 7: Team Collaboration (10-12 slides)
4. Organizational Layer (25-35 slides):
   - Module 8: Organizational Structure (12-18 slides)
   - Module 9: Organizational Culture (12-18 slides)
5. Synthesis (8-10 slides): Three-layer diagnosis framework and case study
6. Closing (5-8 slides): Summary, 30-day action plan, resources, feedback

Each slide should be concise with visual elements (charts, diagrams, icons).
Use concrete case studies with vivid details.
Key insights should be prominently displayed.

Quality standard: Professional corporate training presentation level.`,
    label: 'ppt',
    phase: 'Presentation'
  }),

  () => agent({
    prompt: `Create the complete Excel forms package for 26-组织行为学基础.

Output to: ${outputPath}/配套表单和指引-Excel版/

Create these Excel files:
1. 表单使用指引.xlsx - Guide for using all forms
2. 学员信息表.xlsx - Participant information and pre-course self-assessment
3. 前测成绩记录表.xlsx - Pre-test recording with auto-calculation and charts
4. 后测成绩记录表.xlsx - Post-test recording with comparison to pre-test
5. 课堂行为观察记录表.xlsx - In-class observation tracking by instructor
6. 培训效果综合分析表.xlsx - Comprehensive training effectiveness analysis
7. 30天行动计划跟踪表.xlsx - 30-day action plan tracking

Reference format from: D:/2026年课程/新课开发demo/配套表单和指引-Excel版/

Features needed:
- Auto-calculation formulas
- Visual charts for data comparison
- Professional table design
- Print-friendly`,
    label: 'forms-excel',
    phase: 'Presentation'
  }),

  () => agent({
    prompt: `Create the course outline HTML showcase for 26-组织行为学基础.

Output to: ${outputPath}/课程大纲HTML/
File: 课程大纲_组织行为学基础.html

Create a high-quality HTML page that showcases:
1. Header with course name and tagline
2. Course info card (duration, audience, format)
3. Background and problem statement (why this course matters)
4. Learning objectives (what participants will take away)
5. Complete course outline (all 9 modules with descriptions)
6. Teaching methodology (how learning happens)
7. Enrollment CTA

Reference format from: D:/2026年课程/新课开发demo/课程大纲HTML/课程大纲_同事教同事.html

Design requirements:
- High-quality HTML with consistent branding
- Print-friendly (white background, no shadows)
- Responsive design
- Professional and attractive to drive enrollment`,
    label: 'outline-html',
    phase: 'Presentation'
  })
])

log('All materials production complete!')

return {
  status: 'complete',
  outputPath: outputPath,
  materialsProduced: [
    '课程设计框架.md',
    '教学文档 (5个文件)',
    '学员手册',
    '评估工具包 (6个文件)',
    '练习题库 (13个文件 + 场景卡)',
    '混合学习课前包 (6个文件)',
    '管理者工具包 (3个文件)',
    'PPT演示文稿 (120-160页)',
    '配套表单Excel (7个文件)',
    '课程大纲HTML'
  ]
}
