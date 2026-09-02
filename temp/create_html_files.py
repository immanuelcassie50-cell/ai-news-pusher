import os

base_path = "D:/新课开发/领导力/中基层/04带队伍用AI/全流程练习题库"

# I1 HTML
i1_html = '''<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>I1：开场破冰——管理者AI角色认知测试</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: "PingFang SC", "Microsoft YaHei", sans-serif; line-height: 1.8; color: #333; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); min-height: 100vh; padding: 20px; }
        .container { max-width: 900px; margin: 0 auto; background: #fff; border-radius: 16px; box-shadow: 0 20px 60px rgba(0,0,0,0.3); overflow: hidden; }
        header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #fff; padding: 40px 50px; }
        header h1 { font-size: 28px; margin-bottom: 10px; }
        header .subtitle { font-size: 16px; opacity: 0.9; }
        .purpose { background: #f8f9ff; border-left: 4px solid #667eea; padding: 20px 30px; margin: 30px 50px; border-radius: 0 8px 8px 0; }
        .purpose h2 { font-size: 16px; color: #667eea; margin-bottom: 10px; }
        .purpose p { font-size: 14px; color: #666; }
        .meta { display: flex; gap: 30px; margin: 20px 50px; font-size: 14px; color: #888; }
        .questions { padding: 0 50px 40px; }
        .question-card { background: #fff; border: 1px solid #e8e8f0; border-radius: 12px; margin-bottom: 30px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
        .question-header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #fff; padding: 20px 30px; font-size: 18px; font-weight: 600; }
        .question-body { padding: 25px 30px; }
        .scenario { background: #f5f5fa; padding: 20px 25px; border-radius: 8px; font-size: 16px; color: #333; margin-bottom: 20px; border-left: 4px solid #764ba2; }
        .discussion { font-size: 15px; color: #667eea; font-weight: 600; margin-bottom: 20px; }
        .answer-section { background: #fff; border-top: 1px dashed #e8e8f0; padding: 25px 30px; }
        .answer-section h3 { font-size: 15px; color: #333; margin-bottom: 15px; display: flex; align-items: center; gap: 8px; }
        .answer-badge { display: inline-block; padding: 4px 12px; border-radius: 20px; font-size: 13px; font-weight: 600; }
        .badge-type { background: #e8f5e9; color: #2e7d32; }
        table { width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 20px; }
        th { background: #f5f5fa; color: #667eea; font-weight: 600; text-align: left; padding: 12px 15px; border: 1px solid #e8e8f0; }
        td { padding: 12px 15px; border: 1px solid #e8e8f0; vertical-align: top; }
        .analysis-box { background: #f8f9ff; padding: 15px 20px; border-radius: 8px; font-size: 14px; color: #555; margin-top: 15px; }
        .key-point { background: #fff3e0; padding: 12px 18px; border-radius: 8px; font-size: 14px; color: #e65100; margin-top: 15px; }
        .key-point strong { display: block; margin-bottom: 5px; }
        .insight-box { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #fff; padding: 20px 25px; border-radius: 12px; font-size: 15px; margin-top: 15px; }
        .insight-box strong { display: block; margin-bottom: 8px; }
        .instructor-section { background: #f0f4ff; padding: 30px 50px; border-top: 2px solid #667eea; }
        .instructor-section h2 { font-size: 20px; color: #333; margin-bottom: 25px; }
        .instructor-block { background: #fff; padding: 25px 30px; border-radius: 12px; margin-bottom: 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.05); }
        .instructor-block h3 { font-size: 16px; color: #667eea; margin-bottom: 15px; }
        .step-list { display: flex; flex-direction: column; gap: 12px; }
        .step { display: flex; align-items: flex-start; gap: 15px; }
        .step-num { background: #667eea; color: #fff; width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; font-weight: 600; flex-shrink: 0; }
        .step-content { flex: 1; }
        .step-content strong { display: block; color: #333; margin-bottom: 3px; }
        .step-content span { font-size: 14px; color: #666; }
        .mistake-table th { background: #ffebee; color: #c62828; }
        .mistake-table td:first-child { font-weight: 600; color: #c62828; }
        .transition-box { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #fff; padding: 20px 25px; border-radius: 12px; font-size: 15px; line-height: 1.8; margin-top: 20px; }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <h1>I1：开场破冰——管理者AI角色认知测试</h1>
            <p class="subtitle">主题：你是"自己用AI"还是"带团队用AI"</p>
        </header>
        <div class="purpose">
            <h2>设计目的</h2>
            <p>通过本组练习，帮助学员快速识别自己在AI使用中的角色定位——究竟是亲力亲为的"执行者"，还是能够赋能团队的"管理者"。很多管理者误以为"我自己会用AI=我会带团队用AI"，却忽略了两者之间存在本质的能力鸿沟。本练习旨在打破这种认知偏差，帮助学员建立正确的AI带队意识。</p>
        </div>
        <div class="meta"><span>适用时机：课程开场破冰环节</span><span>建议用时：20-25分钟</span><span>题目数量：5题</span></div>
        <div class="questions">
            <div class="question-card">
                <div class="question-header">题目一</div>
                <div class="question-body">
                    <div class="scenario">"我每天都用ChatGPT写邮件、做方案，效率提升了很多"</div>
                    <div class="discussion">讨论问题：这位管理者的问题出在哪里？请思考：他会用AI带团队吗？</div>
                    <div class="answer-section">
                        <h3><span class="answer-badge badge-type">执行者思维</span> 类型判断</h3>
                        <table><tr><th style="width:25%;">判断维度</th><th>分析</th></tr><tr><td>角色错位</td><td>描述的是"个人使用AI"，而非"带团队用AI"——两者是截然不同的能力要求</td></tr><tr><td>能力边界</td><td>自己用好AI是个人生产力工具，带团队用AI需要：制定策略、建立流程、辅导成员、评估效果</td></tr><tr><td>常见误区</td><td>很多管理者认为"我都会了，教团队不难"，实际上会做与会教是两个完全不同的技能体系</td></tr></table>
                        <div class="key-point"><strong>关键洞察：</strong>会用AI的人 ≠ 能带团队用AI的人。管理者AI带队的核心能力是"赋能团队"，而非"自己高效"。</div>
                        <div class="analysis-box"><strong>自我检测问题：</strong>你用AI写的邮件/方案，团队成员看过吗？能理解你的思路吗？你有把AI使用经验总结成团队可复用的方法论吗？</div>
                    </div>
                </div>
            </div>
            <div class="question-card">
                <div class="question-header">题目二</div>
                <div class="question-body">
                    <div class="scenario">"我已经给团队开了两次AI培训课了，大家还是不太会用"</div>
                    <div class="discussion">讨论问题：这位管理者可能忽略了什么？仅仅"培训"就足够了吗？</div>
                    <div class="answer-section">
                        <h3><span class="answer-badge badge-type">重"教"轻"带"</span> 类型判断</h3>
                        <table><tr><th style="width:25%;">判断维度</th><th>分析</th></tr><tr><td>培训≠赋能</td><td>培训是知识传递，赋能是让对方真正能独立解决问题</td></tr><tr><td>意愿问题</td><td>团队不用的原因可能是：不知道为什么要用、担心被替代、感觉麻烦</td></tr><tr><td>环境问题</td><td>有没有给团队足够的练习时间？有没有把AI工具融入工作流程？</td></tr><tr><td>反馈问题</td><td>有没有人跟踪使用情况？做得好有没有正向激励？</td></tr></table>
                        <div class="insight-box"><strong>核心洞察：</strong>"培训是发信号弹，赋能是修路。修路比发信号弹难十倍，但只有修好路，团队才能真正到达目的地。"</div>
                    </div>
                </div>
            </div>
            <div class="question-card">
                <div class="question-header">题目三</div>
                <div class="question-body">
                    <div class="scenario">"我把AI工具列为团队必学技能，三个月内必须掌握，否则影响绩效"</div>
                    <div class="discussion">讨论问题：这种做法可能带来什么问题？</div>
                    <div class="answer-section">
                        <h3><span class="answer-badge badge-type">刚性管理思维</span> 类型判断</h3>
                        <table><tr><th style="width:25%;">风险维度</th><th>分析</th></tr><tr><td>心理抵触</td><td>强制要求往往引发逆反心理，"要我学"变成被动应付</td></tr><tr><td>形式主义</td><td>团队可能为应付考核而"表演使用"，实际并未真正内化</td></tr><tr><td>忽略差异</td><td>不同成员的AI基础、学习速度、应用场景不同，一刀切的要求可能挫伤积极性</td></tr><tr><td>短期效应</td><td>达标后可能立刻停止使用，没有形成持续习惯</td></tr></table>
                        <div class="key-point"><strong>更有效的做法：</strong>先展示AI的威力（看到价值）→ 再激发学习意愿（想学）→ 最后提供支持（会学）。找到团队中的"AI先锋"，让他们先尝到甜头，形成示范效应。</div>
                    </div>
                </div>
            </div>
            <div class="question-card">
                <div class="question-header">题目四</div>
                <div class="question-body">
                    <div class="scenario">"我用AI一个小时完成了三个人的工作，团队效率太低了"</div>
                    <div class="discussion">讨论问题：这种"效率对比"的思维有什么问题？</div>
                    <div class="answer-section">
                        <h3><span class="answer-badge badge-type">工具效率误区</span> 类型判断</h3>
                        <table><tr><th style="width:25%;">判断维度</th><th>分析</th></tr><tr><td>个人vs团队</td><td>你一个人用AI完成的工作，是否需要团队协作才能产生更大价值？</td></tr><tr><td>能力传递</td><td>你用AI高效完成了，但团队成员学到了什么？能力有提升吗？</td></tr><tr><td>格局局限</td><td>一个人的高效如果不能带动团队整体提升，管理者的价值就没有真正发挥</td></tr><tr><td>可持续性</td><td>如果你请假/离职了，团队怎么办？</td></tr></table>
                        <div class="insight-box"><strong>灵魂拷问：</strong>"你的团队离开你能正常运转吗？如果答案是不能，说明你还没真正学会带团队。"</div>
                    </div>
                </div>
            </div>
            <div class="question-card">
                <div class="question-header">题目五</div>
                <div class="question-body">
                    <div class="scenario">"我觉得AI时代不需要那么多人了吧，有些岗位可以被替代"</div>
                    <div class="discussion">讨论问题：这种思维对吗？管理者应该如何看待AI与团队的关系？</div>
                    <div class="answer-section">
                        <h3><span class="answer-badge badge-type">根本性误解</span> 类型判断</h3>
                        <table><tr><th style="width:25%;">判断维度</th><th>分析</th></tr><tr><td>角色错位</td><td>管理者关心"AI替代谁"是HR和战略层面的问题，带团队的管理者应该关心"如何用AI让团队更强"</td></tr><tr><td>价值判断</td><td>AI是来替代人的，还是来放大人能力的？不同使用方式带来不同结果</td></tr><tr><td>团队稳定</td><td>传递"AI替代论"会严重打击团队信心和安全感</td></tr><tr><td>管理失职</td><td>管理者最重要的职责是赋能成员发展，而非预判谁该被淘汰</td></tr></table>
                        <div class="insight-box"><strong>核心金句：</strong>"AI时代，管理者最重要的任务不是预测谁会被替代，而是确保你的团队成为不可替代的那一个。"</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="instructor-section">
            <h2>讲师操作指引</h2>
            <div class="instructor-block">
                <h3>讨论组织方式</h3>
                <div class="step-list">
                    <div class="step"><div class="step-num">1</div><div class="step-content"><strong>导入（3分钟）</strong><span>说明练习目的——帮助学员认清"自己用AI"与"带团队用AI"的区别，邀请学员自我评估：你是哪种状态？</span></div></div>
                    <div class="step"><div class="step-num">2</div><div class="step-content"><strong>个人测评（5分钟）</strong><span>每题思考30秒，选出自己的判断。</span></div></div>
                    <div class="step"><div class="step-num">3</div><div class="step-content"><strong>小组讨论（10分钟）</strong><span>每组讨论1-2题，分享各自的理解和工作中遇到的类似案例。</span></div></div>
                    <div class="step"><div class="step-num">4</div><div class="step-content"><strong>全班分享（5分钟）</strong><span>各组代表发言，讲师总结共性问题。</span></div></div>
                    <div class="step"><div class="step-num">5</div><div class="step-content"><strong>讲师点评（5分钟）</strong><span>揭示核心洞察——AI带队的管理者角色转型。</span></div></div>
                </div>
            </div>
            <div class="instructor-block">
                <h3>常见学员误区</h3>
                <table class="mistake-table"><tr><th style="width:40%;">误区</th><th>正确认知</th></tr><tr><td>"我AI用得好就能带好团队"</td><td>用AI是个人技能，带团队是另一套能力体系</td></tr><tr><td>"开了培训就算赋能了"</td><td>培训只是起点，真正的赋能需要跟进、反馈、激励</td></tr><tr><td>"用AI提升团队效率就够了"</td><td>效率只是结果，能力成长才是可持续的价值</td></tr><tr><td>"AI可以替代部分团队成员"</td><td>AI是放大器，不是替代者；管理者的任务是让团队更强</td></tr></table>
            </div>
            <div class="transition-box"><strong>过渡语建议：</strong>在点评结束后，可以这样过渡到正式课程内容——"通过刚才的练习，大家可以看到：AI时代对管理者提出了新的要求——从'自己高效'到'赋能团队'。接下来，我们就进入模块一——管理者AI角色认知，看看从'执行者'到'赋能者'需要跨越哪些关键鸿沟。"</div>
        </div>
    </div>
</body>
</html>'''

with open(f"{base_path}/I1_开场破冰：管理者AI角色认知测试.html", "w", encoding="utf-8") as f:
    f.write(i1_html)
print("I1 HTML created")

# I2 HTML
i2_html = '''<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>I2：案例分析——会"用"≠会"带"</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: "PingFang SC", "Microsoft YaHei", sans-serif; line-height: 1.8; color: #333; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); min-height: 100vh; padding: 20px; }
        .container { max-width: 900px; margin: 0 auto; background: #fff; border-radius: 16px; box-shadow: 0 20px 60px rgba(0,0,0,0.3); overflow: hidden; }
        header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #fff; padding: 40px 50px; }
        header h1 { font-size: 28px; margin-bottom: 10px; }
        header .subtitle { font-size: 16px; opacity: 0.9; }
        .purpose { background: #f8f9ff; border-left: 4px solid #667eea; padding: 20px 30px; margin: 30px 50px; border-radius: 0 8px 8px 0; }
        .purpose h2 { font-size: 16px; color: #667eea; margin-bottom: 10px; }
        .purpose p { font-size: 14px; color: #666; }
        .meta { display: flex; gap: 30px; margin: 20px 50px; font-size: 14px; color: #888; }
        .case-section { padding: 0 50px 30px; }
        .case-intro { background: #f8f9ff; border-radius: 12px; padding: 25px 30px; margin-bottom: 25px; }
        .case-intro h3 { font-size: 16px; color: #667eea; margin-bottom: 15px; }
        .case-intro p { font-size: 14px; color: #666; margin-bottom: 8px; }
        .profile-card { background: #fff; border: 1px solid #e8e8f0; border-radius: 12px; padding: 20px 25px; margin-bottom: 20px; }
        .profile-card h4 { font-size: 18px; color: #333; margin-bottom: 10px; }
        .story-card { background: #fff; border: 1px solid #e8e8f0; border-radius: 12px; margin-bottom: 20px; overflow: hidden; }
        .story-header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #fff; padding: 15px 25px; font-size: 16px; font-weight: 600; }
        .story-body { padding: 20px 25px; }
        .story-body p { font-size: 14px; color: #555; margin-bottom: 12px; line-height: 1.8; }
        .dialogue { background: #f5f5fa; padding: 15px 20px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #764ba2; font-style: italic; }
        .questions-section { padding: 0 50px 40px; }
        .question-item { background: #fff; border: 1px solid #e8e8f0; border-radius: 12px; padding: 20px 25px; margin-bottom: 15px; }
        .question-item h4 { font-size: 15px; color: #667eea; margin-bottom: 10px; }
        .question-item p { font-size: 14px; color: #666; }
        .answer-section { background: #f8f9ff; padding: 30px 50px; border-top: 2px solid #667eea; }
        .answer-section h3 { font-size: 18px; color: #333; margin-bottom: 20px; }
        .answer-block { background: #fff; border-radius: 12px; padding: 20px 25px; margin-bottom: 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.05); }
        .answer-block h4 { font-size: 15px; color: #667eea; margin-bottom: 12px; }
        table { width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 15px; }
        th { background: #f5f5fa; color: #667eea; font-weight: 600; text-align: left; padding: 12px 15px; border: 1px solid #e8e8f0; }
        td { padding: 12px 15px; border: 1px solid #e8e8f0; vertical-align: top; }
        .insight-box { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #fff; padding: 20px 25px; border-radius: 12px; font-size: 15px; margin-top: 15px; }
        .insight-box strong { display: block; margin-bottom: 8px; }
        .key-point { background: #fff3e0; padding: 12px 18px; border-radius: 8px; font-size: 14px; color: #e65100; margin-top: 15px; }
        .action-table td:first-child { font-weight: 600; color: #667eea; }
        .instructor-section { background: #f0f4ff; padding: 30px 50px; border-top: 2px solid #667eea; }
        .instructor-section h2 { font-size: 20px; color: #333; margin-bottom: 25px; }
        .instructor-block { background: #fff; padding: 25px 30px; border-radius: 12px; margin-bottom: 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.05); }
        .instructor-block h3 { font-size: 16px; color: #667eea; margin-bottom: 15px; }
        .step-list { display: flex; flex-direction: column; gap: 12px; }
        .step { display: flex; align-items: flex-start; gap: 15px; }
        .step-num { background: #667eea; color: #fff; width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; font-weight: 600; flex-shrink: 0; }
        .step-content { flex: 1; }
        .step-content strong { display: block; color: #333; margin-bottom: 3px; }
        .step-content span { font-size: 14px; color: #666; }
        .transition-box { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #fff; padding: 20px 25px; border-radius: 12px; font-size: 15px; line-height: 1.8; margin-top: 20px; }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <h1>I2：案例分析——会"用"≠会"带"</h1>
            <p class="subtitle">主题：一位"AI达人"管理者的带队困境</p>
        </header>
        <div class="purpose">
            <h2>设计目的</h2>
            <p>通过深度案例分析，帮助学员理解一个关键陷阱——个人AI能力与团队AI赋能能力之间存在巨大鸿沟。案例中的主人公是一位"AI达人"，自己玩得转各种AI工具，却在带团队时频频碰壁。本练习旨在让学员从真实场景中领悟：会使用AI与管理AI团队是两个完全不同的能力维度。</p>
        </div>
        <div class="meta"><span>适用时机：模块二案例研讨环节</span><span>建议用时：25-30分钟</span><span>题目数量：1个完整案例 + 5个思考题</span></div>
        <div class="case-section">
            <div class="case-intro">
                <h3>人物档案：张明（化名）</h3>
                <p><strong>年龄：</strong>35岁，某互联网公司运营总监</p>
                <p><strong>AI使用经验：</strong>2年，是公司公认的"AI达人"</p>
                <p><strong>个人成就：</strong>用AI提效显著，曾用ChatGPT+Midjourney在3天内完成原本需要2周的营销方案</p>
                <p><strong>团队情况：</strong>下属8人，负责公司核心业务的运营工作</p>
            </div>
            <div class="profile-card">
                <h4>背景描述</h4>
                <p style="font-size:14px;color:#666;">张明在2024年初开始系统学习AI工具，很快成为公司内部的"AI布道者"。2024年第三季度，公司任命他为运营总监，希望他能"用AI赋能团队，提升整体运营效率"。上任三个月后，张明向公司汇报：我已经给团队做了5次AI培训，团队80%的成员都在用AI工具了。</p>
                <p style="font-size:14px;color:#666;margin-top:10px;"><strong style="color:#c62828;">然而，年底的360度评估却暴露了问题：</strong></p>
                <ul style="font-size:14px;color:#666;margin-left:20px;margin-top:8px;">
                    <li>团队成员评价："只知道让我们学AI，但从来不帮我们解决实际问题"</li>
                    <li>虽然80%的人"用过"AI，但实际工作中真正用AI解决问题的不到20%</li>
                    <li>团队整体绩效没有明显提升，反而因为"学习AI"占用了大量工作时间</li>
                </ul>
            </div>
            <div class="story-card">
                <div class="story-header">第一幕：踌躇满志</div>
                <div class="story-body">
                    <p>张明上任第一天，召开了团队会议。</p>
                    <div class="dialogue">"各位，从今天开始，我们要全面拥抱AI。我过去一年研究了很多AI工具，真的太厉害了——以前我们要花一周做的方案，现在用AI一天就能搞定。"</div>
                    <p>他从包里掏出一份足足30页的PPT："这是我整理的AI工具大全，里面有50多个工具的使用教程，大家回去好好学。"</p>
                    <p>团队成员面面相觑。资深员工老王问："张总，这些工具我们在工作中怎么用呢？"张明胸有成竹："我下周会安排一次培训，把主流工具都讲一遍。大家学会了，效率肯定能提升。"</p>
                </div>
            </div>
            <div class="story-card">
                <div class="story-header">第二幕：培训之殇</div>
                <div class="story-body">
                    <p>接下来的一个月，张明连续开了三场AI培训：</p>
                    <ul style="font-size:14px;color:#666;margin-left:20px;"><li>第一场：ChatGPT从入门到精通（3小时）</li><li>第二场：Midjourney作图实战（2小时）</li><li>第三场：AI写作技巧大全（2小时）</li></ul>
                    <p style="margin-top:15px;">培训现场很热闹，张明讲得眉飞色舞，团队成员也在记笔记。但培训结束后，团队成员几乎没有人用AI工具。询问原因，得到的回答是："记不住那么多东西""不知道用在哪里""工作中好像用不上"。张明很郁闷："我都讲得这么详细了，怎么还是不会用？"</p>
                </div>
            </div>
            <div class="story-card">
                <div class="story-header">第三幕：强制推行</div>
                <div class="story-body">
                    <p>张明决定加大力度。他宣布：每月检查一次AI使用情况、不会用AI的员工年终绩效不能评A、所有方案必须用AI辅助生成。这一政策引发了团队更大的抵触。</p>
                    <div class="dialogue">"张总就是为了自己出风头，根本不管我们死活"</div>
                    <div class="dialogue">"张总，我干了15年运营，从来不靠这些花里胡哨的东西。你让我用AI写文案，我写的比AI好十倍。"——老员工王姐</div>
                </div>
            </div>
            <div class="story-card">
                <div class="story-header">第四幕：无声的抵抗</div>
                <div class="story-body">
                    <p>到了年底，张明的团队呈现一种诡异的"AI双轨制"：</p>
                    <ul style="font-size:14px;color:#666;margin-left:20px;margin-top:8px;"><li>表面上看：80%的团队成员在用AI工具</li><li>实际上看：真正在核心工作中用AI解决问题的只有2-3个人</li><li>大部分人只是在张明检查前"表演性使用"</li></ul>
                    <p style="margin-top:15px;">团队氛围也变得微妙：有人消极怠工，有人私下议论"他就是来镀金的"，有人干脆选择了离职。</p>
                    <div class="dialogue">"我真的不知道为什么，我这么努力推动AI落地，团队就是不配合。"——张明</div>
                </div>
            </div>
        </div>
        <div class="questions-section">
            <h3 style="font-size:18px;color:#333;margin-bottom:20px;">讨论问题</h3>
            <div class="question-item"><h4>问题一</h4><p>张明的问题出在哪里？请从"角色定位"角度分析。</p></div>
            <div class="question-item"><h4>问题二</h4><p>张明的三次培训为什么没有效果？请分析培训内容与团队实际需求之间的错位。</p></div>
            <div class="question-item"><h4>问题三</h4><p>张明宣布的"强制使用AI"政策为什么引发了更大抵触？这反映了什么管理问题？</p></div>
            <div class="question-item"><h4>问题四</h4><p>团队成员对张明的评价"只知道让我们学AI，但从来不帮我们解决实际问题"说明什么？</p></div>
            <div class="question-item"><h4>问题五</h4><p>如果你是张明的教练，你会给他什么建议？请设计一个改变现状的具体行动方案。</p></div>
        </div>
        <div class="answer-section">
            <h3>参考答案</h3>
            <div class="answer-block">
                <h4>问题一参考答案：张明的核心问题</h4>
                <p style="font-size:14px;color:#666;margin-bottom:15px;"><strong>混淆了"个人AI能力"与"团队AI赋能能力"</strong></p>
                <table><tr><th style="width:25%;">维度</th><th>张明的做法</th><th>正确做法</th></tr><tr><td>关注点</td><td>自己会用多少AI工具</td><td>团队在工作中遇到什么问题，AI能怎么解决</td></tr><tr><td>角色定位</td><td>AI技术的传播者</td><td>业务问题的解决者+AI工具的连接者</td></tr><tr><td>能力结构</td><td>个人工具使用技能</td><td>需求洞察+场景设计+辅导反馈+持续跟进</td></tr><tr><td>价值衡量</td><td>自己用AI做了多少事</td><td>团队能力提升了多少，业绩改善了多少</td></tr></table>
                <div class="key-point"><strong>关键洞察：</strong>张明本质上还是在用"执行者思维"做管理。他没有完成从"做事"到"让人做事"的角色转型。</div>
            </div>
            <div class="answer-block">
                <h4>问题二参考答案：培训无效的三大原因</h4>
                <table><tr><th style="width:25%;">原因</th><th>具体表现</th><th>背后逻辑</th></tr><tr><td>内容错位</td><td>讲"AI能做什么"而非"你能用AI做什么"</td><td>脱离了团队的实际工作场景</td></tr><tr><td>动机缺失</td><td>没有让团队看到"为什么要学"</td><td>员工感受不到学习的紧迫性和收益</td></tr><tr><td>应用断层</td><td>培训结束就结束，没有后续跟进</td><td>从"知道"到"做到"需要刻意练习和反馈</td></tr></table>
                <div class="insight-box"><strong>培训有效性公式：</strong>有效培训 = 明确场景 × 看到价值 × 刻意练习 × 及时反馈</div>
            </div>
            <div class="answer-block">
                <h4>问题五参考答案：张明的改变行动方案</h4>
                <table class="action-table"><tr><th style="width:20%;">阶段</th><th>行动</th><th>目标</th></tr><tr><td>第一周</td><td>个别访谈每位团队成员，了解他们工作中的具体痛点</td><td>诊断真实需求</td></tr><tr><td>第二周</td><td>从痛点中提炼3个最高频的问题，寻找AI解决方案</td><td>建立场景连接</td></tr><tr><td>第三周</td><td>选择一个试点场景，亲自示范用AI完整解决一个问题</td><td>展示AI价值</td></tr><tr><td>第四周</td><td>辅导1-2位积极成员在真实工作中使用AI，记录效果</td><td>建立团队信心</td></tr><tr><td>第五周</td><td>组织分享会，让试点成员讲述自己的使用体验</td><td>形成口碑传播</td></tr><tr><td>第六周起</td><td>根据反馈持续优化，每月设立小目标，不做硬性考核</td><td>培养使用习惯</td></tr></table>
                <div class="insight-box"><strong>核心理念转变：</strong>"从'让团队学AI'转变为'用AI解决团队的问题'——当团队发现AI真的能帮他们省力、出成果时，学习就会自发发生。"</div>
            </div>
        </div>
        <div class="instructor-section">
            <h2>讲师操作指引</h2>
            <div class="instructor-block">
                <h3>案例研讨组织方式</h3>
                <div class="step-list">
                    <div class="step"><div class="step-num">1</div><div class="step-content"><strong>案例发放（3分钟）</strong><span>提前发放案例或现场阅读，确保每位学员了解案例背景</span></div></div>
                    <div class="step"><div class="step-num">2</div><div class="step-content"><strong>个人思考（5分钟）</strong><span>每个问题独立思考，记录关键观点</span></div></div>
                    <div class="step"><div class="step-num">3</div><div class="step-content"><strong>小组研讨（12分钟）</strong><span>4-5人为一组，讨论案例中的问题，给出解决方案</span></div></div>
                    <div class="step"><div class="step-num">4</div><div class="step-content"><strong>全班分享（8分钟）</strong><span>每组代表发言，其他组补充</span></div></div>
                    <div class="step"><div class="step-num">5</div><div class="step-content"><strong>讲师点评（5分钟）</strong><span>揭示案例背后的核心管理原则</span></div></div>
                </div>
            </div>
            <div class="transition-box"><strong>过渡语建议：</strong>在点评结束后，可以这样过渡——"张明的故事告诉我们：AI时代，管理者最重要的转型是从'自己用AI'到'赋能团队用AI'。但这个转型不是自然而然发生的，它需要管理者主动走出舒适区，学习一套新的能力。下一步，我们就来看看：管理者AI带队的核心能力模型是什么。"</div>
        </div>
    </div>
</body>
</html>'''

with open(f"{base_path}/I2_案例分析：会'用'≠会'带'.html", "w", encoding="utf-8") as f:
    f.write(i2_html)
print("I2 HTML created")
