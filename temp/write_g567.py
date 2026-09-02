#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import os
import sys
sys.stdout.reconfigure(encoding='utf-8')

base = r"D:\新课开发\营销\AI时代的营销\01_营销重生：内容饱和时代的价值坐标重置\全流程练习题库"

# ===== G5 =====
g5_md = '''# G5：模块四练习——GEO渠道布局

## 主题：GEO vs SEO判断、AI友好化内容识别、FAQ布局设计

**设计目的**：本练习旨在帮助学员理解GEO（生成式引擎优化）的核心概念，掌握AI友好化内容的识别方法，以及FAQ布局设计的实操技能。在AI时代，内容不仅要被用户看到，更要能被AI准确理解和推荐。

**适用时机**：模块四教学后，建议用时35-45分钟

**题目数量**：8题

---

## 题目一：GEO vs SEO判断练习

> 请判断以下描述属于GEO特征还是SEO特征？

| 描述 |
|------|
| A. 关键词密度越高越好 |
| B. 内容是否被AI引用和推荐 |
| C. 页面加载速度优化 |
| D. 内容是否包含清晰的问答结构 |
| E. 反向链接数量 |
| F. 内容的原创性和深度 |
| G. 元描述标签优化 |
| H. 内容是否结构化、易于AI解析 |

### 参考答案

| 描述 | 类型 | 说明 |
|------|------|------|
| A 关键词密度越高越好 | **SEO** | 传统SEO思维，AI时代已弱化 |
| B 内容是否被AI引用和推荐 | **GEO** | AI生成答案时的引用来源 |
| C 页面加载速度优化 | **SEO** | 技术性排名因素 |
| D 内容是否包含清晰的问答结构 | **GEO** | AI容易解析和引用 |
| E 反向链接数量 | **SEO** | 传统权威性指标 |
| F 内容的原创性和深度 | **GEO** | AI偏好独特而有深度的内容 |
| G 元描述标签优化 | **SEO** | 传统SEO元素 |
| H 内容是否结构化、易于AI解析 | **GEO** | AI能准确理解内容 |

---

## 题目二：AI友好化内容识别

> 以下是两篇文章的片段，请判断哪篇更可能是AI友好化内容？

**文章A**：
> "本公司成立于2010年，专注于提供优质的解决方案。我们的服务包括A、B、C等多种服务。我们拥有多年的行业经验，服务过1000+客户。我们的愿景是成为行业领先者。"

**文章B**：
> "Q：什么情况下应该选择我们的解决方案？
> A：当您面临以下问题时，我们的解决方案是最佳选择——
> 1. 问题描述：您的团队在处理XX任务时效率低下
> 2. 解决方案：我们的系统可以将效率提升300%
> 3. 真实案例：某电商客户使用后，月均处理量从1万件提升到4万件"

### 参考答案

**文章B更可能是AI友好化内容**

| 维度 | 文章A | 文章B |
|------|-------|-------|
| 结构化程度 | 段落式叙述，无明显层次 | 明确的QA结构 |
| 信息密度 | 信息模糊（"优质解决方案"） | 具体可量化（"效率提升300%"） |
| AI解析难度 | 高（需从文字推断） | 低（清晰的问答格式） |
| 用户意图匹配 | 低（用户无法快速找到答案） | 高（直接回答用户问题） |

**关键洞察**：AI友好化内容的核心特征是：结构清晰、问答明确、数据具体。

---

## 题目三：GEO友好化内容改写

> 某品牌想将以下内容改写成GEO友好化版本。请列出改写要点。

**原文**：
> "我们是一家专业的培训机构，提供各种培训课程。我们的老师都是行业资深专家，上课质量有保证。欢迎大家报名参加我们的课程。"

**改写要点**：
1. 增加具体数据（课程数量、学员数量、满意度等）
2. 采用问答结构（Q&A格式）
3. 明确说明"解决什么问题"
4. 补充真实案例或证据

---

## 题目四：FAQ布局设计练习

> 某SaaS产品想在其官网上布局FAQ，以提升GEO效果。请为以下产品设计FAQ结构。

**产品**：智能客服系统，帮助电商企业提升客服效率

### 参考答案

**FAQ结构设计**

| FAQ类别 | 问题示例 |
|---------|---------|
| 产品功能 | "智能客服系统支持哪些平台？" |
| 核心价值 | "使用智能客服后，人工客服工作量能减少多少？" |
| 实施部署 | "部署智能客服系统需要多长时间？" |
| 价格方案 | "智能客服系统的收费模式是怎样的？" |
| 集成对接 | "能否与我们现有的CRM系统对接？" |
| 数据安全 | "客户聊天数据如何保证安全性？" |
| 效果验证 | "有哪些电商客户案例？效果如何量化？" |

**布局要点**：
- FAQ页面应该有清晰的分类导航
- 每个问题都应该是用户真实会问的问题
- 答案要具体、有数据、可操作
- 答案长度适中（100-300字），便于AI引用

---

## 题目五：GEO内容质量评估

> 请对以下三篇内容进行GEO质量评分（1-10分），并说明评分理由。

| 内容 | 摘要 |
|------|------|
| 内容1 | "如何选择CRM系统？选择CRM系统要考虑功能、易用性、价格、服务等因素。本公司专业提供CRM解决方案，欢迎咨询。" |
| 内容2 | "Q：电商企业选择客服系统时，最重要的3个考量因素是什么？A：1) 响应速度——客户等待超过10秒流失率增加50%；2) 多平台接入——需支持网站、APP、微信、抖音等主流渠道；3) 智能化程度——好的智能客服应能独立解决70%以上常见问题。" |
| 内容3 | "CRM系统是客户关系管理系统的简称，用于帮助企业管理客户信息、提升销售效率。市面上有多种CRM系统，包括A、B、C等品牌。" |

### 参考答案

| 内容 | 评分 | 理由 |
|------|------|------|
| 内容1 | **4分** | 有结构化意识但太短，缺乏具体数据和深度，广告植入明显 |
| 内容2 | **9分** | 完美的GEO友好化结构：问答格式+具体数据+清晰逻辑+可操作性强 |
| 内容3 | **3分** | 纯概念解释，没有回答用户问题，缺乏实用性，AI难以引用 |

---

## 题目六：GEO实施效果预测

> 某品牌将官网内容从"传统SEO内容"改为"GEO友好化内容"。请预测以下指标可能的变化。

| 指标 | 原来（SEO） | 变化预测（GEO） |
|------|------------|----------------|
| 页面关键词排名 | 稳定 | 可能下降（因为减少了关键词堆砌） |
| AI引用率 | 低 | **显著提升** |
| 自然流量 | 稳定 | 长期提升（AI推荐带来新流量） |
| 用户停留时间 | 短 | **延长**（内容更有价值） |
| 转化率 | 一般 | **提升**（用户意图更匹配） |

---

## 题目七：GEO vs SEO渠道选择

> 某B2B企业计划投入内容营销预算，请判断以下渠道更适合GEO还是SEO？

| 渠道 |
|------|
| 官网博客 |
| 知乎问答 |
| 百度知道 |
| 行业垂直媒体 |
| 抖音/短视频平台 |
| LinkedIn文章 |
| 微信公众号 |
| 独立知识库/帮助中心 |

### 参考答案

| 渠道 | 更适合 | 理由 |
|------|--------|------|
| 官网博客 | **GEO** | 品牌自有内容，可完全控制结构 |
| 知乎问答 | **GEO** | 原生QA结构，AI高度信任 |
| 百度知道 | **GEO** | 问答平台，AI容易引用 |
| 行业垂直媒体 | **SEO+GEO** | 两者兼顾，高权重媒体 |
| 抖音/短视频 | **偏SEO** | 内容形式不适合AI解析 |
| LinkedIn文章 | **GEO** | 专业内容，AI来源之一 |
| 微信公众号 | **偏SEO** | 封闭生态，AI难以获取 |
| 独立知识库 | **GEO** | 结构化程度高，AI友好 |

---

## 题目八：GEO内容策略制定

> 你是某在线教育品牌的GEO负责人。品牌定位是"专业职业技能提升"，目标用户是"25-35岁职场人"。请制定一份简单的GEO内容策略。

### 参考答案

**GEO内容策略框架**

| 策略维度 | 具体内容 |
|---------|---------|
| 内容支柱 | 1) 职业技能提升方法论 2) 行业趋势与前景 3) 学员成功案例 |
| 核心问题库 | 针对每个内容支柱，建立20+常见问题清单 |
| 内容格式 | 必须采用QA结构，每个问题对应一个独立页面或章节 |
| 内容深度 | 每篇内容500字以上，包含具体数据、案例、步骤 |
| 更新频率 | 每月更新一次，持续优化 |
| 效果指标 | AI引用率、搜索展现量、转化率 |

---

## 讲师操作指引

### 讨论组织方式

1. **导入（5分钟）**：讲解GEO的核心概念与SEO的区别
2. **个人判断（10分钟）**：学员完成题目一和题目二
3. **小组讨论（15分钟）**：小组讨论题目三至六
4. **全班分享（10分钟）**：每组代表分享题目七和题目八
5. **讲师点评（5分钟）**：总结GEO实施的三个关键点

### GEO实施三个关键点

| 关键点 | 说明 |
|--------|------|
| 结构优于关键词 | 让AI能准确解析内容结构 |
| 问答优于叙述 | 用户的真实问题应该成为内容标题 |
| 深度优于广度 | 一篇深度内容比十篇浅内容更有价值 |

### 过渡语建议

> "通过这组练习，大家可以看到：GEO不是对SEO的否定，而是在AI时代对内容价值的重新定义。好的GEO内容，是让AI愿意引用、用户愿意信任的内容。接下来的G6课后作业，我们要将前面所学应用到一个真实的问题处理挑战中。"
'''

g5_html = '''<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <title>G5：模块四练习 - GEO渠道布局</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: "PingFang SC", sans-serif; background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); min-height: 100vh; padding: 20px; }
        .container { max-width: 900px; margin: 0 auto; background: #fff; border-radius: 16px; box-shadow: 0 20px 60px rgba(0,0,0,0.3); }
        header { background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); color: #fff; padding: 40px 50px; }
        header h1 { font-size: 28px; margin-bottom: 10px; }
        .subtitle { font-size: 16px; opacity: 0.9; }
        .purpose { background: #f0f9ff; border-left: 4px solid #4facfe; padding: 20px 30px; margin: 30px 50px; }
        .purpose h2 { font-size: 16px; color: #4facfe; margin-bottom: 10px; }
        .purpose p { font-size: 14px; color: #666; }
        .meta { display: flex; gap: 30px; margin: 20px 50px; font-size: 14px; color: #888; }
        .questions { padding: 0 50px 40px; }
        .question-card { background: #fff; border: 1px solid #e0f0ff; border-radius: 12px; margin-bottom: 30px; overflow: hidden; }
        .question-header { background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); color: #fff; padding: 20px 30px; font-size: 18px; font-weight: 600; }
        .question-body { padding: 25px 30px; }
        .scenario { background: #f0f9ff; padding: 20px; border-radius: 8px; font-size: 16px; margin-bottom: 20px; border-left: 4px solid #00f2fe; }
        .answer-section { border-top: 2px dashed #eee; padding: 25px 30px; }
        .answer-label { font-size: 13px; color: #999; margin-bottom: 15px; text-transform: uppercase; letter-spacing: 2px; }
        .answer-table { width: 100%; border-collapse: collapse; margin: 15px 0; }
        .answer-table th, .answer-table td { border: 1px solid #eee; padding: 12px 15px; text-align: left; font-size: 14px; }
        .answer-table th { background: #f0f9ff; color: #4facfe; }
        .key-insight { background: #f0f9ff; border: 1px solid #b0d4f0; border-radius: 8px; padding: 15px 20px; margin-top: 15px; font-size: 14px; }
        .answer-area { background: #fafafa; border: 2px dashed #ddd; border-radius: 8px; height: 80px; margin-top: 15px; }
        .instructor-notes { background: #f0fff0; border-left: 4px solid #28a745; padding: 20px 25px; margin: 30px 50px; }
        .instructor-notes h2 { font-size: 16px; color: #28a745; margin-bottom: 15px; }
        .instructor-notes ul { padding-left: 20px; font-size: 14px; color: #555; line-height: 1.8; }
        .transition-box { background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); color: #fff; padding: 25px 30px; margin: 30px 50px; border-radius: 12px; font-size: 15px; }
        .print-btn { position: fixed; bottom: 30px; right: 30px; background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); color: #fff; border: none; padding: 12px 24px; border-radius: 50px; font-size: 14px; cursor: pointer; }
        @media print { body { background: white; } .print-btn { display: none; } }
    </style>
</head>
<body>
<div class="container">
<header><h1>G5：模块四练习——GEO渠道布局</h1><div class="subtitle">01_营销重生：内容饱和时代的价值坐标重置</div></header>
<div class="purpose"><h2>设计目的</h2><p>理解GEO核心概念，掌握AI友好化内容识别方法和FAQ布局设计实操技能。</p></div>
<div class="meta"><span>适用时机：模块四教学后</span><span>建议用时：35-45分钟</span><span>题目数量：8题</span></div>
<div class="questions">
<div class="question-card"><div class="question-header">题目一：GEO vs SEO判断</div><div class="question-body">
<div class="scenario">判断：A关键词密度、B被AI引用、C页面速度、D问答结构、E反向链接、F内容深度、G元描述、H结构化</div>
<div class="answer-section"><div class="answer-label">参考答案</div>
<table class="answer-table"><tr><th>描述</th><th>类型</th></tr><tr><td>A关键词密度</td><td>SEO</td></tr><tr><td>B被AI引用</td><td>GEO</td></tr><tr><td>C页面速度</td><td>SEO</td></tr><tr><td>D问答结构</td><td>GEO</td></tr><tr><td>E反向链接</td><td>SEO</td></tr><tr><td>F内容深度</td><td>GEO</td></tr><tr><td>G元描述</td><td>SEO</td></tr><tr><td>H结构化</td><td>GEO</td></tr></table>
</div><div class="answer-area"></div></div></div>
<div class="question-card"><div class="question-header">题目二：AI友好化内容识别</div><div class="question-body">
<div class="scenario">文章A（模糊叙述）vs 文章B（QA结构+具体数据），哪篇更AI友好？</div>
<div class="answer-section"><div class="answer-label">参考答案</div>
<div class="key-insight"><strong>答案：文章B</strong><br>文章A：段落式叙述，信息模糊（"优质解决方案"），AI解析难度高<br>文章B：QA结构+具体数据（"效率提升300%"）+清晰逻辑，AI容易解析和引用</div>
</div><div class="answer-area"></div></div></div>
<div class="question-card"><div class="question-header">题目三：GEO友好化内容改写</div><div class="question-body">
<div class="scenario">将"我们是一家专业培训机构，老师资深，欢迎报名"改写成GEO友好化版本。列出改写要点。</div>
<div class="answer-section"><div class="answer-label">参考答案</div>
<div class="key-insight"><strong>改写要点：</strong><br>1.增加具体数据（课程数量、学员数量、满意度等）<br>2.采用问答结构（Q&A格式）<br>3.明确说明"解决什么问题"<br>4.补充真实案例或证据</div>
</div><div class="answer-area"></div></div></div>
<div class="question-card"><div class="question-header">题目四：FAQ布局设计</div><div class="question-body">
<div class="scenario">为智能客服系统设计FAQ结构（面向电商企业）</div>
<div class="answer-section"><div class="answer-label">参考答案</div>
<table class="answer-table"><tr><th>FAQ类别</th><th>问题示例</th></tr><tr><td>产品功能</td><td>智能客服支持哪些平台？</td></tr><tr><td>核心价值</td><td>使用后人工工作量能减少多少？</td></tr><tr><td>实施部署</td><td>部署需要多长时间？</td></tr><tr><td>价格方案</td><td>收费模式是怎样的？</td></tr><tr><td>效果验证</td><td>有哪些客户案例？效果如何量化？</td></tr></table>
</div><div class="answer-area"></div></div></div>
<div class="question-card"><div class="question-header">题目五：GEO内容质量评估</div><div class="question-body">
<div class="scenario">对三篇内容打分（1-10）：内容1（模糊推销）、内容2（QA+数据）、内容3（概念解释）</div>
<div class="answer-section"><div class="answer-label">参考答案</div>
<table class="answer-table"><tr><th>内容</th><th>评分</th><th>理由</th></tr><tr><td>内容1</td><td>4分</td><td>有结构但太短，缺乏数据，广告明显</td></tr><tr><td>内容2</td><td>9分</td><td>完美GEO结构：QA+数据+逻辑+可操作</td></tr><tr><td>内容3</td><td>3分</td><td>纯概念，无用户价值，AI难以引用</td></tr></table>
</div><div class="answer-area"></div></div></div>
<div class="question-card"><div class="question-header">题目六：GEO实施效果预测</div><div class="question-body">
<div class="scenario">预测从SEO转GEO后：页面排名、AI引用率、自然流量、停留时间、转化率的变化</div>
<div class="answer-section"><div class="answer-label">参考答案</div>
<table class="answer-table"><tr><th>指标</th><th>变化</th></tr><tr><td>页面排名</td><td>可能下降（减少关键词堆砌）</td></tr><tr><td>AI引用率</td><td>显著提升</td></tr><tr><td>自然流量</td><td>长期提升（AI推荐带来新流量）</td></tr><tr><td>停留时间</td><td>延长（内容更有价值）</td></tr><tr><td>转化率</td><td>提升（用户意图更匹配）</td></tr></table>
</div><div class="answer-area"></div></div></div>
<div class="question-card"><div class="question-header">题目七：GEO vs SEO渠道选择</div><div class="question-body">
<div class="scenario">判断渠道更适合GEO还是SEO：官网博客、知乎、百度知道、垂直媒体、抖音、LinkedIn、微信、知识库</div>
<div class="answer-section"><div class="answer-label">参考答案</div>
<table class="answer-table"><tr><th>渠道</th><th>类型</th></tr><tr><td>官网博客</td><td>GEO</td></tr><tr><td>知乎问答</td><td>GEO</td></tr><tr><td>百度知道</td><td>GEO</td></tr><tr><td>行业垂直媒体</td><td>SEO+GEO</td></tr><tr><td>抖音/短视频</td><td>偏SEO</td></tr><tr><td>LinkedIn</td><td>GEO</td></tr><tr><td>微信公众号</td><td>偏SEO</td></tr><tr><td>独立知识库</td><td>GEO</td></tr></table>
</div><div class="answer-area"></div></div></div>
<div class="question-card"><div class="question-header">题目八：GEO内容策略制定</div><div class="question-body">
<div class="scenario">为"专业职业技能提升"在线教育品牌（目标用户25-35岁职场人）制定GEO内容策略</div>
<div class="answer-section"><div class="answer-label">参考答案</div>
<div class="key-insight"><strong>策略框架：</strong><br>内容支柱：1)职业技能提升方法论 2)行业趋势与前景 3)学员成功案例<br>核心问题库：每个支柱建立20+常见问题清单<br>内容格式：必须采用QA结构<br>内容深度：每篇500字以上，含数据+案例+步骤<br>效果指标：AI引用率、搜索展现量、转化率</div>
</div><div class="answer-area"></div></div></div>
</div>
<div class="instructor-notes">
<h2>讲师操作指引</h2>
<h3>GEO实施三个关键点</h3>
<ul><li>结构优于关键词——让AI能准确解析内容结构</li><li>问答优于叙述——用户的真实问题应该成为内容标题</li><li>深度优于广度——一篇深度内容比十篇浅内容更有价值</li></ul>
<div class="transition-box">GEO不是对SEO的否定，而是在AI时代对内容价值的重新定义。好的GEO内容，是让AI愿意引用、用户愿意信任的内容。接下来的G6课后作业，我们要将前面所学应用到真实的问题处理挑战中。</div>
</div>
</div>
<button class="print-btn" onclick="window.print()">打印练习题</button>
</body>
</html>'''

# ===== G6 =====
g6_md = '''# G6：课后作业——真实问题处理挑战

## 主题：应用竞对互换测试、品牌内容诊断、个人行动计划

**设计目的**：本作业旨在将课程前四个模块所学的知识（内容饱和认知、竞对互换测试、价值重置、GEO渠道布局）应用于学员的真实工作场景。学员需要选择一个真实的内容营销问题，完成从诊断到解决方案的完整流程。

**作业形式**：个人独立完成

**建议完成时间**：课后1周内

---

## 作业一：应用竞对互换测试到真实工作

**任务**：
1. 选择你品牌的一个核心竞品
2. 收集竞品最近1个月发布的20条核心内容
3. 完成竞对互换测试（参照G3的表格格式）
4. 回答：测试结果揭示了哪些你之前没有注意到的差异化资产或同质化风险？

---

## 作业二：完成品牌内容诊断

**任务**：
1. 诊断你品牌当前的内容结构（参照G2的框架）
2. 识别是否存在以下任一"自我毁灭式循环"：
   - 竞品追踪型循环
   - 热点驱动型循环
   - 数量补偿型循环
3. 用GEO框架评估你品牌官网内容的AI友好程度

---

## 作业三：制定个人行动计划

**任务**：基于前两个作业的发现，制定一份30天的内容行动计划

| 维度 | 具体行动 |
|------|---------|
| 内容支柱 | 确定1-2个核心内容支柱 |
| 人机协作 | 规划AI辅助内容生产的分工方案 |
| GEO优化 | 列出需要优化的3个FAQ页面 |
| 效果验证 | 设定30天后的验证指标 |

---

## 参考答案

### 作业一参考答案

**竞对互换测试框架**

| 测试维度 | 我方内容 | 竞品内容 | 互换评估 |
|---------|---------|---------|---------|
| 调性感觉 | 记录原始调性 | 记录原始调性 | 我方内容换到竞品是否违和？ |
| 目标人群 | 记录目标人群 | 记录目标人群 | 竞品内容换到我方是否违和？ |
| 核心话题 | 记录话题类型 | 记录话题类型 | 评估双向不可替代性 |

**差异化资产识别**：如果某内容"只能属于自己"，不能被竞品"穿走"，这就是护城河资产。

### 作业二参考答案

**自我毁灭式循环识别清单**

| 循环类型 | 自查问题 |
|---------|---------|
| 竞品追踪型 | "我们是不是每周都在分析竞品发了什么？" |
| 热点驱动型 | "没有热点时，我们的内容计划是什么？" |
| 数量补偿型 | "我们的内容效果追踪是否只看阅读量？" |

**GEO自评表**

| 评估项 | 是/否 | 改进方向 |
|--------|-----|---------|
| 内容是否有清晰的QA结构？ | 待填写 |  |
| 答案是否包含具体数据？ | 待填写 |  |
| 内容是否结构化易解析？ | 待填写 |  |

### 作业三参考答案

**30天行动计划模板**

| 阶段 | 周数 | 核心任务 |
|------|------|---------|
| 第一周 | 第1-7天 | 完成竞对互换测试+内容诊断 |
| 第二周 | 第8-14天 | 确定内容支柱+优化分工 |
| 第三周 | 第15-21天 | 完成3个FAQ的GEO优化 |
| 第四周 | 第22-30天 | 收集数据+验证效果 |

**验证指标建议**：AI引用率变化、内容互动率变化、搜索展现量变化
'''

g6_html = '''<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <title>G6：课后作业 - 真实问题处理挑战</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: "PingFang SC", sans-serif; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); min-height: 100vh; padding: 20px; }
        .container { max-width: 900px; margin: 0 auto; background: #fff; border-radius: 16px; box-shadow: 0 20px 60px rgba(0,0,0,0.3); }
        header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #fff; padding: 40px 50px; }
        header h1 { font-size: 28px; margin-bottom: 10px; }
        .subtitle { font-size: 16px; opacity: 0.9; }
        .purpose { background: #f8f9ff; border-left: 4px solid #667eea; padding: 20px 30px; margin: 30px 50px; }
        .purpose h2 { font-size: 16px; color: #667eea; margin-bottom: 10px; }
        .purpose p { font-size: 14px; color: #666; }
        .meta { display: flex; gap: 30px; margin: 20px 50px; font-size: 14px; color: #888; }
        .homework { padding: 0 50px 40px; }
        .homework-card { background: #fff; border: 1px solid #e8e8f0; border-radius: 12px; margin-bottom: 30px; overflow: hidden; }
        .homework-header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #fff; padding: 20px 30px; font-size: 18px; font-weight: 600; }
        .homework-body { padding: 25px 30px; }
        .task { background: #f8f9ff; padding: 20px; border-radius: 8px; font-size: 15px; margin-bottom: 15px; }
        .answer-section { border-top: 2px dashed #eee; padding: 25px 30px; }
        .answer-label { font-size: 13px; color: #999; margin-bottom: 15px; }
        .answer-table { width: 100%; border-collapse: collapse; margin: 15px 0; }
        .answer-table th, .answer-table td { border: 1px solid #eee; padding: 12px 15px; font-size: 14px; }
        .answer-table th { background: #f8f9ff; color: #667eea; }
        .key-insight { background: #f8f9ff; border: 1px solid #d0d5f0; border-radius: 8px; padding: 15px 20px; margin-top: 15px; font-size: 14px; }
        .answer-area { background: #fafafa; border: 2px dashed #ddd; border-radius: 8px; height: 100px; margin-top: 15px; }
        .print-btn { position: fixed; bottom: 30px; right: 30px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #fff; border: none; padding: 12px 24px; border-radius: 50px; font-size: 14px; cursor: pointer; }
        @media print { body { background: white; } .print-btn { display: none; } }
    </style>
</head>
<body>
<div class="container">
<header><h1>G6：课后作业——真实问题处理挑战</h1><div class="subtitle">01_营销重生：内容饱和时代的价值坐标重置</div></header>
<div class="purpose"><h2>设计目的</h2><p>将课程前四个模块所学知识应用于真实工作场景，完成从诊断到解决方案的完整流程。</p></div>
<div class="meta"><span>作业形式：个人独立完成</span><span>建议完成时间：课后1周内</span></div>
<div class="homework">
<div class="homework-card"><div class="homework-header">作业一：应用竞对互换测试到真实工作</div><div class="homework-body">
<div class="task"><strong>任务：</strong>1.选择你品牌的一个核心竞品 2.收集竞品最近1个月发布的20条核心内容 3.完成竞对互换测试 4.回答：测试结果揭示了哪些差异化资产或同质化风险？</div>
<div class="answer-section"><div class="answer-label">竞对互换测试框架</div>
<table class="answer-table"><tr><th>测试维度</th><th>我方内容</th><th>竞品内容</th><th>互换评估</th></tr><tr><td>调性感觉</td><td>记录原始调性</td><td>记录原始调性</td><td>我方换到竞品是否违和？</td></tr><tr><td>目标人群</td><td>记录目标人群</td><td>记录目标人群</td><td>竞品换到我方是否违和？</td></tr><tr><td>核心话题</td><td>记录话题类型</td><td>记录话题类型</td><td>评估双向不可替代性</td></tr></table>
<div class="key-insight"><strong>差异化资产识别：</strong>如果某内容"只能属于自己"，不能被竞品"穿走"，这就是护城河资产。</div>
</div><div class="answer-area"></div></div></div>
<div class="homework-card"><div class="homework-header">作业二：完成品牌内容诊断</div><div class="homework-body">
<div class="task"><strong>任务：</strong>1.诊断当前内容结构 2.识别是否存在自我毁灭式循环 3.用GEO框架评估官网内容的AI友好程度</div>
<div class="answer-section"><div class="answer-label">自我毁灭式循环识别清单</div>
<table class="answer-table"><tr><th>循环类型</th><th>自查问题</th></tr><tr><td>竞品追踪型</td><td>我们是不是每周都在分析竞品发了什么？</td></tr><tr><td>热点驱动型</td><td>没有热点时，我们的内容计划是什么？</td></tr><tr><td>数量补偿型</td><td>我们的内容效果追踪是否只看阅读量？</td></tr></table>
<div class="key-insight"><strong>GEO自评表：</strong>内容是否有清晰的QA结构？答案是否包含具体数据？内容是否结构化易解析？</div>
</div><div class="answer-area"></div></div></div>
<div class="homework-card"><div class="homework-header">作业三：制定个人行动计划</div><div class="homework-body">
<div class="task"><strong>任务：</strong>基于前两个作业的发现，制定一份30天的内容行动计划</div>
<div class="answer-section"><div class="answer-label">30天行动计划模板</div>
<table class="answer-table"><tr><th>阶段</th><th>周数</th><th>核心任务</th></tr><tr><td>第一周</td><td>第1-7天</td><td>完成竞对互换测试+内容诊断</td></tr><tr><td>第二周</td><td>第8-14天</td><td>确定内容支柱+优化分工</td></tr><tr><td>第三周</td><td>第15-21天</td><td>完成3个FAQ的GEO优化</td></tr><tr><td>第四周</td><td>第22-30天</td><td>收集数据+验证效果</td></tr></table>
<div class="key-insight"><strong>验证指标建议：</strong>AI引用率变化、内容互动率变化、搜索展现量变化</div>
</div><div class="answer-area"></div></div></div>
</div>
</div>
<button class="print-btn" onclick="window.print()">打印作业</button>
</body>
</html>'''

# ===== G7 =====
g7_md = '''# G7：讲师配套答案与评分标准

## 主题：为G1-G6所有练习提供参考答案、评分标准与讲师点评要点

**适用对象**：培训讲师

**使用说明**：本手册汇总了G1-G6所有练习的参考答案，并提供评分标准和讲师点评要点。

---

## G1：开场暖场练习题——参考答案

| 题目 | 核心要点 |
|------|---------|
| 题目一 | 数量失控是内容饱和的第一层症状；麻木比焦虑更危险 |
| 题目二 | 外部信号驱动内部生产是自我毁灭式循环的典型触发点 |
| 题目三 | 承认"大部分内容是无效的"是跳出循环的第一步 |
| 题目四 | 不是执行力的问题，是"值不值得做"的判断力问题 |
| 题目五 | 缺乏清晰的价值坐标——"这条内容是为了解决什么问题？" |
| 题目六 | AI时代的内容竞争是"谁的内容更值得被AI推荐" |

---

## G2：模块一练习——参考答案与点评要点

### 题目答案汇总

| 题目 | 答案 | 关键判断点 |
|------|------|-----------|
| 题目一 | 内容饱和现象+饱和影响 | 供给没变，产出质量下降 |
| 题目二 | 品牌稀释与认知同质化 | "听过但无感" |
| 题目三 | 价值失焦 | 官方内容停留在"告知"，探店内容做到了"感知" |
| 题目四 | 热点驱动型循环 | 深度内容被推迟，没有标杆内容 |
| 题目五 | 资源分散陷阱 | 12个方向0.4人，无法形成专业深度 |
| 题目六 | 品牌价值稀释 | 福利依赖症，没有心智预售 |
| 题目七 | 竞品追踪型循环 | 永远慢半拍，20%-30%流量 |
| 题目八 | B2B认知迷局 | "看过但不知道区别" |
| 题目九 | 注意力失焦 | "暴力运营"困境，社群不是发信息的渠道 |
| 题目十 | 价值沉淀vs短期流量 | 品牌70%+热点30% |

### 评分标准

| 等级 | 分数段 | 标准描述 |
|------|--------|---------|
| 优秀 | 90-100分 | 能准确判断每题类型，循环节点识别清晰 |
| 良好 | 75-89分 | 能判断大部分题目类型，理由基本完整 |
| 合格 | 60-74分 | 能识别部分题目类型，理由不完整 |
| 不合格 | <60分 | 判断错误较多，循环识别能力不足 |

---

## G3：模块二练习——参考答案与点评要点

### 竞对互换测试评估维度

| 维度 | 优秀标准 | 合格标准 |
|------|---------|---------|
| 调性匹配度 | 准确判断换牌后是否违和 | 基本判断正确 |
| 护城河识别 | 能清晰识别"不可替代性"高低 | 能识别明显差异 |
| 策略建议 | 具体可行，分"学习什么"和"不学习什么" | 有一定建议 |

### 评分标准

| 等级 | 分数段 | 标准描述 |
|------|--------|---------|
| 优秀 | 90-100分 | 测试操作规范，结果分析深入，策略建议具体 |
| 良好 | 75-89分 | 测试基本规范，分析较完整 |
| 合格 | 60-74分 | 测试基本完成，分析有部分缺失 |
| 不合格 | <60分 | 测试流于形式，分析浮于表面 |

---

## G4：模块三练习——参考答案与点评要点

| 题目 | 核心答案要点 |
|------|-------------|
| 题目一 | A/B/D=可持续能力；C/E=爆款思维 |
| 题目二 | 信息类AI可生成；深度类必须人工；数据报告人机协作 |
| 题目三 | 分工表完整+一致性方法4条 |
| 题目四 | 热点依赖症诊断+4步建设建议 |
| 题目五 | 选择方案B+新旧逻辑对比 |
| 题目六 | 初级阶段+3步升级路径 |
| 题目七 | AI主力/人机协作/人工主力分类正确 |
| 题目八 | 分歧根源+跨部门协作流程完整 |

### 人机协作三原则

1. AI做重复，人做判断
2. AI扩张能力边界，不替代核心
3. 人工审核不可省略

---

## G5：模块四练习——参考答案与点评要点

| 题目 | 核心答案要点 |
|------|-------------|
| 题目一 | A/C/E/G=SEO；B/D/F/H=GEO |
| 题目二 | 文章B更AI友好：QA结构+具体数据 |
| 题目三 | 改写要点4条 |
| 题目四 | FAQ结构6类别 |
| 题目五 | 内容1=4分；内容2=9分；内容3=3分 |
| 题目六 | AI引用率+停留时间+转化率提升；排名可能下降 |
| 题目七 | 知乎/百度知道/LinkedIn/知识库=GEO |
| 题目八 | GEO策略框架完整 |

### GEO三关键点

1. 结构优于关键词
2. 问答优于叙述
3. 深度优于广度

---

## G6：课后作业——评估标准

### 评估维度与权重

| 评估维度 | 权重 | 说明 |
|---------|------|------|
| 问题诊断的清晰度 | 30% | 竞对互换测试完成度+内容诊断准确性 |
| 解决方案的合理性 | 30% | 行动计划的具体性和可行性 |
| 工具应用的规范性 | 20% | GEO框架使用的准确性 |
| 执行计划的完整性 | 20% | 30天计划的步骤和验证指标 |

### 分项评分标准

| 等级 | 得分 | 标准 |
|------|------|------|
| 优秀 | 90-100分 | 四个维度全部表现优秀 |
| 良好 | 75-89分 | 三个维度表现良好 |
| 合格 | 60-74分 | 两个维度基本达标 |
| 不合格 | <60分 | 两个维度以上不达标 |

---

## 综合讲师点评指南

### 课程整体点评要点

| 环节 | 点评重点 |
|------|---------|
| G1开场 | 强调内容饱和不是外部问题，是需要重置价值坐标的信号 |
| G2问题识别 | 强调自我毁灭式循环的三种典型模式 |
| G3竞对测试 | 强调"真正资产"vs"以为的资产"的区别 |
| G4价值重置 | 强调AI是做不了的事，让人做人最擅长的事 |
| G5 GEO布局 | 强调GEO是让AI愿意引用、用户愿意信任的内容 |
| G6总结 | 强调30天行动计划的可执行性和验证指标的重要性 |

### 课程时间分配参考

| 环节 | 建议时长 |
|------|---------|
| G1开场暖场 | 20-25分钟 |
| G2问题类型识别 | 35-45分钟 |
| G3 WSDF定义训练 | 40-50分钟 |
| G4价值重置 | 40-50分钟 |
| G5 GEO渠道布局 | 35-45分钟 |
| G6作业布置说明 | 15-20分钟 |
| **总计** | 3-3.5小时 |
'''

g7_html = '''<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <title>G7：讲师配套答案与评分标准</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: "PingFang SC", sans-serif; background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%); min-height: 100vh; padding: 20px; }
        .container { max-width: 900px; margin: 0 auto; background: #fff; border-radius: 16px; box-shadow: 0 20px 60px rgba(0,0,0,0.3); }
        header { background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%); color: #fff; padding: 40px 50px; }
        header h1 { font-size: 28px; margin-bottom: 10px; }
        .subtitle { font-size: 16px; opacity: 0.9; }
        .purpose { background: #f0fff4; border-left: 4px solid #11998e; padding: 20px 30px; margin: 30px 50px; }
        .purpose h2 { font-size: 16px; color: #11998e; margin-bottom: 10px; }
        .content { padding: 0 50px 40px; }
        .section { background: #fff; border: 1px solid #e0f0e8; border-radius: 12px; margin-bottom: 30px; overflow: hidden; }
        .section-header { background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%); color: #fff; padding: 20px 30px; font-size: 18px; font-weight: 600; }
        .section-body { padding: 25px 30px; }
        .answer-table { width: 100%; border-collapse: collapse; margin: 15px 0; }
        .answer-table th, .answer-table td { border: 1px solid #eee; padding: 12px 15px; font-size: 14px; text-align: left; }
        .answer-table th { background: #f0fff4; color: #11998e; }
        .key-box { background: #f0fff4; border: 1px solid #b0e0c8; border-radius: 8px; padding: 15px 20px; margin-top: 15px; font-size: 14px; }
        .grading-table { width: 100%; border-collapse: collapse; margin: 15px 0; }
        .grading-table th, .grading-table td { border: 1px solid #ddd; padding: 12px 15px; font-size: 14px; }
        .grading-table th { background: #f0fff0; color: #28a745; }
        .print-btn { position: fixed; bottom: 30px; right: 30px; background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%); color: #fff; border: none; padding: 12px 24px; border-radius: 50px; font-size: 14px; cursor: pointer; }
        @media print { body { background: white; } .print-btn { display: none; } }
    </style>
</head>
<body>
<div class="container">
<header><h1>G7：讲师配套答案与评分标准</h1><div class="subtitle">01_营销重生：内容饱和时代的价值坐标重置</div></header>
<div class="purpose"><h2>使用说明</h2><p>汇总G1-G6所有练习的参考答案，并提供评分标准和讲师点评要点。讲师可根据本手册进行课堂点评、作业批改和学员评估。</p></div>
<div class="content">
<div class="section"><div class="section-header">G1：开场暖场练习题——参考答案</div><div class="section-body">
<table class="answer-table"><tr><th>题目</th><th>核心要点</th></tr><tr><td>题目一</td><td>数量失控是内容饱和的第一层症状；麻木比焦虑更危险</td></tr><tr><td>题目二</td><td>外部信号驱动内部生产是自我毁灭式循环的典型触发点</td></tr><tr><td>题目三</td><td>承认"大部分内容是无效的"是跳出循环的第一步</td></tr><tr><td>题目四</td><td>不是执行力的问题，是"值不值得做"的判断力问题</td></tr><tr><td>题目五</td><td>缺乏清晰的价值坐标</td></tr><tr><td>题目六</td><td>AI时代的内容竞争是"谁的内容更值得被AI推荐"</td></tr></table>
</div></div>
<div class="section"><div class="section-header">G2：模块一练习——参考答案</div><div class="section-body">
<table class="answer-table"><tr><th>题目</th><th>答案</th><th>关键判断点</th></tr><tr><td>题目一</td><td>内容饱和+饱和影响</td><td>供给没变，产出质量下降</td></tr><tr><td>题目二</td><td>品牌稀释</td><td>"听过但无感"</td></tr><tr><td>题目三</td><td>价值失焦</td><td>"告知"vs"感知"</td></tr><tr><td>题目四</td><td>热点驱动型循环</td><td>无标杆内容</td></tr><tr><td>题目五</td><td>资源分散陷阱</td><td>12方向0.4人</td></tr><tr><td>题目六</td><td>品牌价值稀释</td><td>福利依赖症</td></tr><tr><td>题目七</td><td>竞品追踪型循环</td><td>永远慢半拍</td></tr><tr><td>题目八</td><td>B2B认知迷局</td><td>"看过但不知区别"</td></tr><tr><td>题目九</td><td>注意力失焦</td><td>暴力运营困境</td></tr><tr><td>题目十</td><td>价值vs流量</td><td>品牌70%+热点30%</td></tr></table>
<div class="key-box"><strong>评分标准：</strong>优秀90-100分（准确判断每题，循环节点清晰）；良好75-89分（大部分判断正确）；合格60-74分（部分识别）；不合格<60分（判断错误多）</div>
</div></div>
<div class="section"><div class="section-header">G3：模块二练习——参考答案</div><div class="section-body">
<table class="answer-table"><tr><th>题目</th><th>核心答案</th></tr><tr><td>题目一</td><td>晨光可被夜航借用，夜航难被晨光借用——晨光内容护城河浅</td></tr><tr><td>题目二</td><td>透亮护城河深（专业内容）；水光护城河浅（可被复制）</td></tr><tr><td>题目三</td><td>85%相似度=极度同质化——AI时代需要场景解决方案</td></tr><tr><td>题目四</td><td>宝贝树可替代性中等；妈咪宝贝UGC护城河深</td></tr><tr><td>题目五</td><td>清醒护城河极深——瑞幸借用有限</td></tr><tr><td>题目六</td><td>双向兼容=同质化严重——深度需成为用户关系</td></tr><tr><td>题目七</td><td>6步操作流程：选竞品→收集→换牌→反向→差距→策略</td></tr><tr><td>题目八</td><td>博雅=价值观护城河（深窄）；职升机=结果护城河（宽浅）</td></tr></table>
<div class="key-box"><strong>评分标准：</strong>优秀90-100分（测试规范，分析深入，策略具体）；良好75-89分（基本规范，分析完整）；合格60-74分（基本完成，有缺失）；不合格<60分（流于形式）</div>
</div></div>
<div class="section"><div class="section-header">G4：模块三练习——参考答案</div><div class="section-body">
<table class="answer-table"><tr><th>题目</th><th>核心答案</th></tr><tr><td>题目一</td><td>A/C/E=爆款思维；B/D=可持续能力</td></tr><tr><td>题目二</td><td>产品上新/行业周报/FAQ=AI可生成；深度文章/客户故事=必须人工；数据报告=人机协作</td></tr><tr><td>题目三</td><td>分工表6环节+一致性方法4条</td></tr><tr><td>题目四</td><td>热点依赖症+4步建设建议</td></tr><tr><td>题目五</td><td>方案B+新旧逻辑3组对比</td></tr><tr><td>题目六</td><td>初级阶段+3步升级路径</td></tr><tr><td>题目七</td><td>药品说明书/疾病FAQ=AI主力；健康科普/产品教程/行业报告=人机协作；患者故事/医生专访/品牌公益=人工主力</td></tr><tr><td>题目八</td><td>分歧根源=缺乏统一价值坐标+跨部门协作流程</td></tr></table>
<div class="key-box"><strong>人机协作三原则：</strong>1.AI做重复，人做判断 2.AI扩张能力边界，不替代核心 3.人工审核不可省略</div>
</div></div>
<div class="section"><div class="section-header">G5：模块四练习——参考答案</div><div class="section-body">
<table class="answer-table"><tr><th>题目</th><th>核心答案</th></tr><tr><td>题目一</td><td>A/C/E/G=SEO；B/D/F/H=GEO</td></tr><tr><td>题目二</td><td>文章B更AI友好——QA结构+具体数据</td></tr><tr><td>题目三</td><td>改写要点：具体数据+QA结构+明确问题+真实案例</td></tr><tr><td>题目四</td><td>FAQ结构6类：产品功能/核心价值/实施部署/价格方案/集成对接/效果验证</td></tr><tr><td>题目五</td><td>内容1=4分；内容2=9分；内容3=3分</td></tr><tr><td>题目六</td><td>AI引用率+停留时间+转化率提升；排名可能下降</td></tr><tr><td>题目七</td><td>GEO：知乎/百度知道/LinkedIn/知识库；SEO+GEO：垂直媒体</td></tr><tr><td>题目八</td><td>GEO策略框架：内容支柱+问题库+QA格式+深度要求+效果指标</td></tr></table>
<div class="key-box"><strong>GEO三关键点：</strong>1.结构优于关键词 2.问答优于叙述 3.深度优于广度</div>
</div></div>
<div class="section"><div class="section-header">G6：课后作业——评估标准</div><div class="section-body">
<table class="answer-table"><tr><th>评估维度</th><th>权重</th><th>说明</th></tr><tr><td>问题诊断的清晰度</td><td>30%</td><td>竞对互换测试完成度+内容诊断准确性</td></tr><tr><td>解决方案的合理性</td><td>30%</td><td>行动计划的具体性和可行性</td></tr><tr><td>工具应用的规范性</td><td>20%</td><td>GEO框架使用的准确性</td></tr><tr><td>执行计划的完整性</td><td>20%</td><td>30天计划的步骤和验证指标</td></tr></table>
<table class="grading-table" style="margin-top:15px"><tr><th>等级</th><th>得分</th><th>标准</th></tr><tr><td>优秀</td><td>90-100分</td><td>四个维度全部表现优秀</td></tr><tr><td>良好</td><td>75-89分</td><td>三个维度表现良好</td></tr><tr><td>合格</td><td>60-74分</td><td>两个维度基本达标</td></tr><tr><td>不合格</td><td><60分</td><td>两个维度以上不达标</td></tr></table>
</div></div>
<div class="section"><div class="section-header">综合讲师点评指南</div><div class="section-body">
<table class="answer-table"><tr><th>环节</th><th>点评重点</th></tr><tr><td>G1开场</td><td>内容饱和不是外部问题，是需要重置价值坐标的信号</td></tr><tr><td>G2问题识别</td><td>自我毁灭式循环的三种典型模式</td></tr><tr><td>G3竞对测试</td><td>"真正资产"vs"以为的资产"的区别</td></tr><tr><td>G4价值重置</td><td>AI做不了的事，让人做人最擅长的事</td></tr><tr><td>G5 GEO布局</td><td>让AI愿意引用、用户愿意信任的内容</td></tr><tr><td>G6总结</td><td>30天行动计划的可执行性和验证指标</td></tr></table>
</div></div>
</div>
</div>
<button class="print-btn" onclick="window.print()">打印答案</button>
</body>
</html>'''

files = {
    "G5_模块四练习_GEO渠道布局.md": g5_md,
    "G5_模块四练习_GEO渠道布局.html": g5_html,
    "G6_课后作业_真实问题处理挑战.md": g6_md,
    "G6_课后作业_真实问题处理挑战.html": g6_html,
    "G7_讲师配套答案与评分标准.md": g7_md,
    "G7_讲师配套答案与评分标准.html": g7_html,
}

for filename, content in files.items():
    filepath = os.path.join(base, filename)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Written: {filename}")

print("All G5-G7 files done!")
