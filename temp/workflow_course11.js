export const meta = {
  name: 'course-11-resource-map',
  description: 'Complete course development for 政治学/11_资源地图-能源粮食与关键矿产的地缘博弈',
  phases: ['Phase 1: Architecture', 'Phase 2: Teaching Docs', 'Phase 3: Handbooks', 'Phase 4: Assessment'],
}

const BASE = 'D:/新课开发/政治学/11_资源地图-能源粮食与关键矿产的地缘博弈'

// ========== PHASE 1 ==========
phase('Phase 1: Architecture')

const archResult = await agent(`Create course architecture files for "11_资源地图-能源粮食与关键矿产的地缘博弈".

## Output Files in ${BASE}

### 1. 00_课程边界.md
Course boundary (500+ chars) covering:
- 输入: Target audience characteristics
- 输出: Behavioral outcomes after course
- 面向人群: Specific description
- 解决的痛点: Pain points addressed
- 实现的目标: Capabilities gained

Course covers: Energy (oil/gas/coal/renewables), food security, critical minerals (rare earth/lithium/cobalt) - their geopolitical distribution, strategic vulnerability, and resource competition.

### 2. 00_课程大纲.md
Detailed outline with:
- 课程基本信息表
- 课程设计理念
- 学习目标（行为化）
- 模块大纲（4-6 modules）
- 时间分配表

### 3. 01_教学设计总览.md
Teaching design overview:
- 学员分析
- 教学策略选择
- 核心教学原理
-与国际版权课标准对齐

Return summary of what you created.`, {label: 'Course Architecture', phase: 'Phase 1: Architecture'})

log('Phase 1 done: Architecture files created')

// ========== PHASE 2 ==========
phase('Phase 2: Teaching Docs')

const docsResult = await agent(`Create teaching documents for "11_资源地图-能源粮食与关键矿产的地缘博弈" in ${BASE}/教学文档/

Course modules:
- 模块1: 能源地缘政治
- 模块2: 粮食安全与农业资源
- 模块3: 关键矿产争夺战
- 模块4: 资源博弈案例分析
- 模块5: 资源战略与中国的选择

Create 6 files following the demo format from D:/2026年课程/新课开发demo/教学文档demo/:

1. 00-课程总览与场景卡.md - 全程导览、学习地图、场景卡机制
2. 01-第一部分-资源与权力.md - 模块1-2 content with 案例、互动设计
3. 02-第二部分-关键矿产.md - 模块3-4 content
4. 03-第三部分-战略分析.md - 模块5 content
5. 04-第四部分-案例复盘.md - 俄乌能源战等案例
6. 05-第五部分-未来趋势.md - 能源转型与总结

Each file should have: 学习目标、知识点、案例、互动设计、练习、知识框架总结

Return summary of created files.`, {label: 'Teaching Documents', phase: 'Phase 2: Teaching Docs'})

log('Phase 2 done: Teaching documents created')

// ========== PHASE 3 ==========
phase('Phase 3: Handbooks')

const handbookResult = await agent(`Create student and instructor handbooks for "11_资源地图-能源粮食与关键矿产的地缘博弈".

### 1. Student Handbook: ${BASE}/学员手册/01_资源地图_学员手册.md

Follow format from D:/2026年课程/新课开发demo/学员手册demo/高效能使用AI的七个习惯_学员手册_v1.0.md

Structure:
- 引言（课程全景图、使用指南）
- 表单0.1 出发点自评
- 表单0.2 我的场景卡
- 7 chapters covering resource geopolitics topics
- 课程收尾（综合实战、重测自评、30天行动计划）
- 附录（术语速查表、工具速查索引）

Content adapted for resource geopolitics:
- 资源主权意识
- 资源博弈意图分析
- 资源禀赋评估
- 资源供应链分析
- 资源格局演变推演
- 资源战略洞察
- 资源知识体系构建

### 2. Instructor Handbook: ${BASE}/讲师手册/01_资源地图_讲师手册.md

Follow demo format, include:
- 讲师准备清单
- 教学流程总览
- 每个模块的：教学目标、核心概念、案例库、互动设计、时间分配
- 常见问题与应对
- 评估指导

Return summary.`, {label: 'Handbooks', phase: 'Phase 3: Handbooks'})

log('Phase 3 done: Handbooks created')

// ========== PHASE 4 ==========
phase('Phase 4: Assessment')

const assessResult = await agent(`Create assessment toolkit for "11_资源地图-能源粮食与关键矿产的地缘博弈" in ${BASE}/评估工具包/

### 1. 01_前测题库_学员版.md
Follow D:/2026年课程/新课开发demo/评估工具包/ format:
- 基本信息表
- 第一部分：自评（5分制，10题）
- 第二部分：单选（10题）
- 第三部分：多选
- 第四部分：情境简答
- 第五部分：信心自评

### 2. 02_后测题库_学员版.md
Similar to pre-test with different questions

### 3. 03_参考答案与评分细则.md
Answer keys + scoring rubrics

### 4. 04_行为观察量表_讲师版.md
Observable behaviors for resource geopolitics thinking

### 5. 05_数据分析与课程改进指南.md
Data analysis methods

### 6. 06_可视化评估看板.html
HTML dashboard with charts

Return summary.`, {label: 'Assessment Toolkit', phase: 'Phase 4: Assessment'})

log('Phase 4 done: Assessment toolkit created')

return { archResult, docsResult, handbookResult, assessResult }
