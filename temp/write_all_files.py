#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import os
import sys

# Set encoding for Windows
sys.stdout.reconfigure(encoding='utf-8')

base = r"D:\新课开发\营销\AI时代的营销\01_营销重生：内容饱和时代的价值坐标重置\全流程练习题库"
os.makedirs(base, exist_ok=True)

# Define all files with their content
files = {}

# G4 HTML
files["G4_模块三练习_价值重置.html"] = '''<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <title>G4：模块三练习 - 价值重置</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: "PingFang SC", sans-serif; line-height: 1.8; background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); min-height: 100vh; padding: 20px; }
        .container { max-width: 900px; margin: 0 auto; background: #fff; border-radius: 16px; box-shadow: 0 20px 60px rgba(0,0,0,0.3); }
        header { background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); color: #fff; padding: 40px 50px; }
        header h1 { font-size: 28px; margin-bottom: 10px; }
        .subtitle { font-size: 16px; opacity: 0.9; }
        .purpose { background: #fff5f7; border-left: 4px solid #f5576c; padding: 20px 30px; margin: 30px 50px; }
        .purpose h2 { font-size: 16px; color: #f5576c; margin-bottom: 10px; }
        .purpose p { font-size: 14px; color: #666; }
        .meta { display: flex; gap: 30px; margin: 20px 50px; font-size: 14px; color: #888; }
        .questions { padding: 0 50px 40px; }
        .question-card { background: #fff; border: 1px solid #f0e0e8; border-radius: 12px; margin-bottom: 30px; overflow: hidden; }
        .question-header { background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); color: #fff; padding: 20px 30px; font-size: 18px; font-weight: 600; }
        .question-body { padding: 25px 30px; }
        .scenario { background: #fff5f7; padding: 20px; border-radius: 8px; font-size: 16px; margin-bottom: 20px; border-left: 4px solid #f5576c; }
        .answer-section { border-top: 2px dashed #eee; padding: 25px 30px; }
        .answer-label { font-size: 13px; color: #999; margin-bottom: 15px; text-transform: uppercase; letter-spacing: 2px; }
        .answer-table { width: 100%; border-collapse: collapse; margin: 15px 0; }
        .answer-table th, .answer-table td { border: 1px solid #eee; padding: 12px 15px; text-align: left; font-size: 14px; }
        .answer-table th { background: #fff5f7; color: #f5576c; }
        .key-insight { background: #fff5f7; border: 1px solid #f0b0c0; border-radius: 8px; padding: 15px 20px; margin-top: 15px; font-size: 14px; }
        .answer-area { background: #fafafa; border: 2px dashed #ddd; border-radius: 8px; height: 100px; margin-top: 15px; }
        .answer-hint { font-size: 13px; color: #aaa; margin-top: 10px; }
        .instructor-notes { background: #f0fff0; border-left: 4px solid #28a745; padding: 20px 25px; margin: 30px 50px; }
        .instructor-notes h2 { font-size: 16px; color: #28a745; margin-bottom: 15px; }
        .instructor-notes h3 { font-size: 14px; color: #333; margin-top: 15px; margin-bottom: 8px; }
        .instructor-notes ul { padding-left: 20px; font-size: 14px; color: #555; line-height: 1.8; }
        .transition-box { background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); color: #fff; padding: 25px 30px; margin: 30px 50px; border-radius: 12px; font-size: 15px; }
        .print-btn { position: fixed; bottom: 30px; right: 30px; background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); color: #fff; border: none; padding: 12px 24px; border-radius: 50px; font-size: 14px; cursor: pointer; }
        @media print { body { background: white; padding: 0; } .container { box-shadow: none; } .print-btn { display: none; } }
    </style>
</head>
<body>
<div class="container">
<header><h1>G4：模块三练习——价值重置</h1><div class="subtitle">01_营销重生：内容饱和时代的价值坐标重置</div></header>
<div class="purpose"><h2>设计目的</h2><p>帮助学员完成从"爆款思维"到"可持续能力"的认知转变，掌握AI时代内容价值分类和人机协作分工的实际操作技能。</p></div>
<div class="meta"><span>适用时机：模块三教学后</span><span>建议用时：40-50分钟</span><span>题目数量：8题</span></div>
<div class="questions">
<div class="question-card"><div class="question-header">题目一：爆款思维 vs 可持续能力判断</div><div class="question-body">
<div class="scenario">请判断以下内容属于"爆款思维"还是"可持续能力"：A 最全指南10万+阅读、B 创始人口述3万阅读转化高、C 节日海报5万阅读但衰减60%、D 客户案例8000阅读但转化极高、E 逆向评测8万阅读但争议大</div>
<div class="answer-section"><div class="answer-label">参考答案</div>
<table class="answer-table"><tr><th>内容</th><th>类型</th><th>理由</th></tr><tr><td>A</td><td>爆款思维</td><td>SEO爆款逻辑，追求点击率而非长期价值</td></tr><tr><td>B</td><td>可持续能力</td><td>品牌理念内容具有长期沉淀价值</td></tr><tr><td>C</td><td>爆款思维</td><td>热点内容生命周期短</td></tr><tr><td>D</td><td>可持续能力</td><td>信任背书价值，持续为销售赋能</td></tr><tr><td>E</td><td>爆款思维</td><td>争议是双刃剑，损害品牌信任</td></tr></table>
</div><div class="answer-area"></div><div class="answer-hint">学员作答区</div></div></div>
<div class="question-card"><div class="question-header">题目二：AI内容分类</div><div class="question-body">
<div class="scenario">请分类：产品上新通知、行业周报、深度观点文章、FAQ文档、客户案例故事、数据报告——AI可生成/必须人工/人机协作</div>
<div class="answer-section"><div class="answer-label">参考答案</div>
<table class="answer-table"><tr><th>内容类型</th><th>分类</th><th>理由</th></tr><tr><td>产品上新通知</td><td>AI可生成</td><td>格式固定变量清晰</td></tr><tr><td>行业周报</td><td>AI可生成</td><td>信息收集整理是AI强项</td></tr><tr><td>深度观点文章</td><td>必须人工</td><td>需行业洞察，AI无法创造洞见</td></tr><tr><td>FAQ文档</td><td>AI可生成</td><td>标准化问答</td></tr><tr><td>客户案例故事</td><td>必须人工</td><td>需真实采访情感捕捉</td></tr><tr><td>数据报告</td><td>人机协作</td><td>AI处理数据，分析洞察需人</td></tr></table>
</div><div class="answer-area"></div><div class="answer-hint">学员作答区</div></div></div>
<div class="question-card"><div class="question-header">题目三：人机协作分工设计</div><div class="question-body">
<div class="scenario">B2B软件品牌，团队1主编+2编辑+1AI助手。请设计分工表并说明如何保证品牌调性一致性。</div>
<div class="answer-section"><div class="answer-label">参考答案</div>
<table class="answer-table"><tr><th>工作环节</th><th>负责人</th><th>AI角色</th></tr><tr><td>内容策略制定</td><td>主编</td><td>提供数据支持</td></tr><tr><td>选题策划</td><td>主编</td><td>生成选题建议</td></tr><tr><td>资料收集</td><td>编辑</td><td>AI快速收集</td></tr><tr><td>初稿写作</td><td>分情况</td><td>信息类AI写，深度类人写</td></tr><tr><td>人工改写</td><td>编辑</td><td>根据品牌调性修改</td></tr><tr><td>审核发布</td><td>主编</td><td>AI做合规检查</td></tr></table>
<div class="key-insight"><strong>一致性方法：</strong>建立品牌内容风格指南 + 建立品牌Prompt模板 + 人工审核不可省略 + 定期反馈优化</div>
</div><div class="answer-area"></div><div class="answer-hint">学员作答区</div></div></div>
<div class="question-card"><div class="question-header">题目四：爆款思维戒断</div><div class="question-body">
<div class="scenario">餐饮品牌小王：每天为发什么发愁，跟风竞品，追热点流量就没了。请给出建议。</div>
<div class="answer-section"><div class="answer-label">参考答案</div>
<div class="key-insight"><strong>诊断：</strong>热点依赖症——没有核心内容支柱<br><strong>建议：</strong>1.建立2-3个内容支柱主题（全年可用）2.每周1-2条非热点内容 3.热点控制在30%以内 4.深耕客户案例、品牌故事等长效资产</div>
</div><div class="answer-area"></div><div class="answer-hint">学员作答区</div></div></div>
<div class="question-card"><div class="question-header">题目五：AI时代价值重置</div><div class="question-body">
<div class="scenario">方案A每天20条内容 vs 方案B每天3条精选内容。请选择并说明理由。</div>
<div class="answer-section"><div class="answer-label">参考答案</div>
<div class="key-insight"><strong>选择方案B</strong><br>方案A：20条=用户从噪音中找有用的；内容多被AI稀释；同质化用户记不住<br>方案B：3条=每条值得花时间；AI更容易推荐高质量内容；精选用户记住调性<br><strong>新逻辑：</strong>质量=推荐权重；发得准=被记住；内容=信任</div>
</div><div class="answer-area"></div><div class="answer-hint">学员作答区</div></div></div>
<div class="question-card"><div class="question-header">题目六：可持续内容能力诊断</div><div class="question-body">
<div class="scenario">某消费品牌5人团队每月80条：80%产品推广、70%AI生成、只追踪阅读量、"每天赶稿没时间思考"。判断能力阶段。</div>
<div class="answer-section"><div class="answer-label">参考答案</div>
<div class="key-insight"><strong>判断：初级阶段（追逐数量型）</strong><br>80%产品推广0%品牌→初级<br>过度依赖AI无人工深度→初级<br>只看流量不看转化→初级<br><strong>升级：</strong>第一个月建内容分类比例；第二个月培养深度内容编辑；第三个月引入转化追踪</div>
</div><div class="answer-area"></div><div class="answer-hint">学员作答区</div></div></div>
<div class="question-card"><div class="question-header">题目七：AI内容分类升级版</div><div class="question-body">
<div class="scenario">医疗健康品牌AI辅助分类：药品说明书、健康科普、患者故事、医生专访、疾病FAQ、产品教程、行业报告、品牌公益报道。标注：AI主力/人机协作/人工主力</div>
<div class="answer-section"><div class="answer-label">参考答案</div>
<table class="answer-table"><tr><th>内容类型</th><th>分类</th></tr><tr><td>药品说明书解读</td><td>AI主力</td></tr><tr><td>健康科普文章</td><td>人机协作</td></tr><tr><td>患者故事</td><td>人工主力</td></tr><tr><td>医生专访</td><td>人工主力</td></tr><tr><td>疾病FAQ</td><td>AI主力</td></tr><tr><td>产品使用教程</td><td>人机协作</td></tr><tr><td>行业研究报告</td><td>人机协作</td></tr><tr><td>品牌公益活动报道</td><td>人工主力</td></tr></table>
</div><div class="answer-area"></div><div class="answer-hint">学员作答区</div></div></div>
<div class="question-card"><div class="question-header">题目八：跨部门人机协作流程</div><div class="question-body">
<div class="scenario">内容团队要提高写作效率，营销团队要快速生成多版本投放素材。分析根源并设计流程。</div>
<div class="answer-section"><div class="answer-label">参考答案</div>
<div class="key-insight"><strong>分歧根源：</strong>缺乏统一的内容价值坐标——内容追求质量，营销追求数量<br><br><strong>流程：</strong>策略制定（内容定标准，营销提需求，AI分析竞品）→内容生产（内容负责人工主力，营销提需求，AI生成标准化）→审核（内容把控质量，营销审合规，AI自检）→改写（营销改多版本，AI支持）</div>
</div><div class="answer-area"></div><div class="answer-hint">学员作答区</div></div></div>
</div>
<div class="instructor-notes">
<h2>讲师操作指引</h2>
<h3>人机协作三原则</h3>
<ul><li>AI做重复，人做判断</li><li>AI扩张能力边界不替代核心</li><li>人工审核不可省略</li></ul>
<div class="transition-box">AI时代的价值重置不是"用AI替代人"，而是"让AI做人做不了的事，让人做人最擅长的事"。爆款思维追逐流量，可持续能力建立信任。接下来的模块四，我们要学习如何在GEO渠道上进行内容布局。</div>
</div>
</div>
<button class="print-btn" onclick="window.print()">打印练习题</button>
</body>
</html>'''

# Write all files
for filename, content in files.items():
    filepath = os.path.join(base, filename)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Written: {filename}")

print("Done!")
