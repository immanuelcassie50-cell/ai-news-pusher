import os

base_path = "D:/新课开发/领导力/中基层/04带队伍用AI/全流程练习题库"

# I3 HTML
i3_html = '''<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>I3：团队诊断——我的团队AI成熟度评估</title>
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
        .purpose ul { font-size: 14px; color: #666; margin-left: 20px; margin-top: 8px; }
        .meta { display: flex; gap: 30px; margin: 20px 50px; font-size: 14px; color: #888; }
        .model-section { padding: 0 50px 30px; }
        .model-intro { background: #f8f9ff; border-radius: 12px; padding: 25px 30px; margin-bottom: 25px; text-align: center; }
        .model-intro h3 { font-size: 18px; color: #667eea; margin-bottom: 15px; }
        .quadrant-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin: 20px 0; }
        .quadrant { border-radius: 12px; padding: 20px; text-align: center; }
        .q1 { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #fff; }
        .q2 { background: #f5f5fa; border: 2px solid #667eea; }
        .q3 { background: #f5f5fa; border: 2px solid #ccc; }
        .q4 { background: #fff3e0; border: 2px solid #ff9800; }
        .quadrant h4 { font-size: 15px; margin-bottom: 8px; }
        .quadrant p { font-size: 12px; opacity: 0.9; }
        .quadrant-table { width: 100%; border-collapse: collapse; font-size: 13px; margin-top: 20px; }
        .quadrant-table th { background: #f5f5fa; color: #667eea; padding: 12px; border: 1px solid #e8e8f0; }
        .quadrant-table td { padding: 12px; border: 1px solid #e8e8f0; vertical-align: top; }
        .dimension-section { padding: 0 50px 30px; }
        .dimension-header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #fff; padding: 15px 25px; font-size: 18px; font-weight: 600; border-radius: 12px 12px 0 0; }
        .dimension-card { background: #fff; border: 1px solid #e8e8f0; border-radius: 0 0 12px 12px; padding: 25px 30px; margin-bottom: 30px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
        .question-item { background: #f8f9ff; padding: 15px 20px; border-radius: 8px; margin-bottom: 15px; border-left: 4px solid #667eea; }
        .question-item p { font-size: 14px; color: #333; margin-bottom: 10px; }
        .options { display: flex; flex-wrap: wrap; gap: 10px; }
        .option { background: #fff; border: 1px solid #e8e8f0; padding: 8px 15px; border-radius: 20px; font-size: 13px; color: #666; }
        .score-section { padding: 0 50px 30px; }
        .score-card { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #fff; border-radius: 12px; padding: 30px; }
        .score-card h3 { font-size: 18px; margin-bottom: 20px; }
        .score-table { width: 100%; border-collapse: collapse; font-size: 14px; }
        .score-table th { background: rgba(255,255,255,0.2); padding: 12px 15px; text-align: left; }
        .score-table td { padding: 12px 15px; border-top: 1px solid rgba(255,255,255,0.2); }
        .discussion-section { padding: 0 50px 30px; }
        .discussion-card { background: #f8f9ff; border-radius: 12px; padding: 25px 30px; }
        .discussion-card h3 { font-size: 16px; color: #667eea; margin-bottom: 15px; }
        .discussion-card ol { font-size: 14px; color: #666; margin-left: 20px; }
        .discussion-card li { margin-bottom: 10px; }
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
            <h1>I3：团队诊断——我的团队AI成熟度评估</h1>
            <p class="subtitle">主题：四象限评估法与团队AI就绪度诊断</p>
        </header>
        <div class="purpose">
            <h2>设计目的</h2>
            <p>通过系统的自我评估工具，帮助管理者全面了解团队在AI使用方面的现状，发现优势与短板。本练习引入"AI成熟度四象限"模型，从意识、能力、工具、环境四个维度诊断团队的AI就绪程度。</p>
            <ul>
                <li>认知现状：帮助管理者客观评估团队当前的AI使用状态</li>
                <li>发现短板：识别团队在AI赋能方面的关键缺口</li>
                <li>明确方向：基于诊断结果，制定针对性的提升计划</li>
            </ul>
        </div>
        <div class="meta"><span>适用时机：模块三团队诊断环节</span><span>建议用时：25-30分钟</span><span>题目数量：4维度 × 5题 = 20道自评题</span></div>
        <div class="model-section">
            <div class="model-intro">
                <h3 style="font-size:18px;color:#667eea;margin-bottom:15px;">AI成熟度四象限模型</h3>
                <div class="quadrant-grid">
                    <div class="quadrant q2"><h4>第二象限</h4><p>高意识+低能力<br>技能培训+实战练习</p></div>
                    <div class="quadrant q1"><h4>第一象限（高成熟度）</h4><p>高意识+高能力<br>赋能和授权</p></div>
                    <div class="quadrant q3"><h4>第四象限</h4><p>低意识+低能力<br>先激发意识再传授技能</p></div>
                    <div class="quadrant q4"><h4>第三象限</h4><p>低意识+高能力潜力<br>挖掘潜力，激活动机</p></div>
                </div>
                <table class="quadrant-table">
                    <tr><th style="width:20%;">象限</th><th>特征</th><th>管理重点</th></tr>
                    <tr><td>第一象限</td><td>高意识+高能力</td><td>赋能和授权，发挥标杆作用</td></tr>
                    <tr><td>第二象限</td><td>高意识+低能力</td><td>技能培训+实战练习，转化为第一步</td></tr>
                    <tr><td>第三象限</td><td>低意识+低能力</td><td>先激发意识，再传授技能</td></tr>
                    <tr><td>第四象限</td><td>低意识+高能力潜力</td><td>挖掘潜力，激活使用动机</td></tr>
                </table>
            </div>
        </div>
        <div class="dimension-section">
            <div class="dimension-header">第一维度：团队AI意识评估</div>
            <div class="dimension-card">
                <p style="font-size:14px;color:#666;margin-bottom:20px;">评估团队成员对AI的认知、态度和接受程度</p>
                <div class="question-item">
                    <p><strong>题目一：</strong>你的团队成员对"为什么需要用AI"这个问题的回答，普遍是：</p>
                    <div class="options">
                        <span class="option">A. "AI是趋势，不学会被淘汰"（危机驱动型）</span>
                        <span class="option">B. "学AI能让我们工作更轻松、效率更高"（收益驱动型）</span>
                        <span class="option">C. "不知道为什么要学，领导让学就学"（被动接受型）</span>
                        <span class="option">D. "AI没什么用，我自己做更快"（抵触型）</span>
                    </div>
                </div>
                <div class="question-item">
                    <p><strong>题目二：</strong>团队成员私下讨论AI时，最常见的话题是：</p>
                    <div class="options">
                        <span class="option">A. "又出什么新工具了？试试看"</span>
                        <span class="option">B. "AI能不能帮我做某某工作"</span>
                        <span class="option">C. "AI会不会取代我的工作"</span>
                        <span class="option">D. "又要做新东西，学不动了"</span>
                    </div>
                </div>
                <div class="question-item">
                    <p><strong>题目三：</strong>当公司要求学习AI新工具时，团队成员的第一反应通常是：</p>
                    <div class="options">
                        <span class="option">A. 主动了解，寻找应用场景</span>
                        <span class="option">B. 观望等待，看别人怎么用</span>
                        <span class="option">C. 抱怨又要学新东西</span>
                        <span class="option">D. 直接拒绝或无视</span>
                    </div>
                </div>
                <div class="question-item">
                    <p><strong>题目四：</strong>你的团队成员是否认为"AI能力"是职业发展的必要技能？</p>
                    <div class="options">
                        <span class="option">A. 是的，这是核心竞争力</span>
                        <span class="option">B. 有点用，但不是必须的</span>
                        <span class="option">C. 不确定，看公司要求</span>
                        <span class="option">D. 不是，做好本职工作就行</span>
                    </div>
                </div>
                <div class="question-item">
                    <p><strong>题目五：</strong>团队成员对"AI可能替代某些工作"的看法：</p>
                    <div class="options">
                        <span class="option">A. 积极应对，主动学习AI提升自己</span>
                        <span class="option">B. 理性看待，接受变化但有所准备</span>
                        <span class="option">C. 有点担忧，但不知道该怎么办</span>
                        <span class="option">D. 不在乎，觉得不会发生在自己身上</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="dimension-section">
            <div class="dimension-header">第二维度：团队AI能力评估</div>
            <div class="dimension-card">
                <p style="font-size:14px;color:#666;margin-bottom:20px;">评估团队成员实际使用AI工具的技能水平</p>
                <div class="question-item">
                    <p><strong>题目六：</strong>你的团队中，能独立使用至少一款AI工具完成工作任务的人占比：</p>
                    <div class="options"><span class="option">A. 80%以上</span><span class="option">B. 50%-80%</span><span class="option">C. 20%-50%</span><span class="option">D. 20%以下</span></div>
                </div>
                <div class="question-item">
                    <p><strong>题目七：</strong>团队成员使用AI时，最常见的困难是：</p>
                    <div class="options"><span class="option">A. 不知道该用什么工具</span><span class="option">B. 知道工具但不会用</span><span class="option">C. 会用但效果不好</span><span class="option">D. 效果可以但不知道用在哪里</span></div>
                </div>
                <div class="question-item">
                    <p><strong>题目八：</strong>当给团队成员一个具体任务时，能主动思考"这个任务可以用AI完成"的比例：</p>
                    <div class="options"><span class="option">A. 大部分人（80%以上）能想到</span><span class="option">B. 约一半人能想到</span><span class="option">C. 少部分人（30%以下）能想到</span><span class="option">D. 几乎没人能想到</span></div>
                </div>
                <div class="question-item">
                    <p><strong>题目九：</strong>团队成员在使用AI生成内容后，通常会：</p>
                    <div class="options"><span class="option">A. 直接使用或做少量修改</span><span class="option">B. 大幅修改以符合需求</span><span class="option">C. 质疑AI结果，选择自己重做</span><span class="option">D. 不用AI结果，继续传统方式</span></div>
                </div>
                <div class="question-item">
                    <p><strong>题目十：</strong>你的团队中，有人能针对同一任务，根据不同AI工具的特点选择最合适的工具吗？</p>
                    <div class="options"><span class="option">A. 有很多人可以</span><span class="option">B. 少数人可以</span><span class="option">C. 只有AI用得特别好的几个人可以</span><span class="option">D. 基本没有这样的人</span></div>
                </div>
            </div>
        </div>
        <div class="dimension-section">
            <div class="dimension-header">第三维度：AI工具与资源评估</div>
            <div class="dimension-card">
                <p style="font-size:14px;color:#666;margin-bottom:20px;">评估团队可获取的AI工具、平台和资源情况</p>
                <div class="question-item">
                    <p><strong>题目十一：</strong>你的团队目前使用的AI工具种类数量：</p>
                    <div class="options"><span class="option">A. 5种以上，有明确的工具矩阵</span><span class="option">B. 3-5种，零散使用</span><span class="option">C. 1-2种，偶尔使用</span><span class="option">D. 几乎没用什么AI工具</span></div>
                </div>
                <div class="question-item">
                    <p><strong>题目十二：</strong>团队成员获取AI工具的难度：</p>
                    <div class="options"><span class="option">A. 很容易，公司统一配了工具和账号</span><span class="option">B. 比较容易，自己可以申请</span><span class="option">C. 比较困难，需要走复杂流程</span><span class="option">D. 几乎没有渠道</span></div>
                </div>
                <div class="question-item">
                    <p><strong>题目十三：</strong>关于AI工具的使用培训，团队目前的状态是：</p>
                    <div class="options"><span class="option">A. 有系统的培训体系，新人入职即培训</span><span class="option">B. 有一些培训，但不系统</span><span class="option">C. 偶尔有培训，主要靠自学</span><span class="option">D. 基本没有培训</span></div>
                </div>
                <div class="question-item">
                    <p><strong>题目十四：</strong>团队是否有AI使用的标准和规范（如提示词模板、工作流程等）：</p>
                    <div class="options"><span class="option">A. 有完整的SOP和模板库</span><span class="option">B. 有一些模板，但不成体系</span><span class="option">C. 有人总结过，但没推广</span><span class="option">D. 没有，都是个人自己摸索</span></div>
                </div>
                <div class="question-item">
                    <p><strong>题目十五：</strong>团队在AI使用过程中遇到问题时，获取支持的难易程度：</p>
                    <div class="options"><span class="option">A. 很容易，有专人支持</span><span class="option">B. 比较容易，可以问同事</span><span class="option">C. 比较困难，不知道问谁</span><span class="option">D. 完全没有支持</span></div>
                </div>
            </div>
        </div>
        <div class="dimension-section">
            <div class="dimension-header">第四维度：团队AI文化评估</div>
            <div class="dimension-card">
                <p style="font-size:14px;color:#666;margin-bottom:20px;">评估团队对AI使用的氛围、规范和激励机制</p>
                <div class="question-item">
                    <p><strong>题目十六：</strong>你的团队在推进AI使用时，团队成员之间的协作状态：</p>
                    <div class="options"><span class="option">A. 积极分享经验，互相学习</span><span class="option">B. 各学各的，偶尔交流</span><span class="option">C. 没什么交流，各干各的</span><span class="option">D. 有人愿意分享，但没人听</span></div>
                </div>
                <div class="question-item">
                    <p><strong>题目十七：</strong>当有人用AI取得了好的工作成果时，团队的反应通常是：</p>
                    <div class="options"><span class="option">A. 主动请教方法，积极学习</span><span class="option">B. 表示认可，但不一定模仿</span><span class="option">C. 认为是偶然，不觉得有什么特别</span><span class="option">D. 表示质疑，觉得不够可靠</span></div>
                </div>
                <div class="question-item">
                    <p><strong>题目十八：</strong>团队是否有定期复盘AI使用效果、分享最佳实践的机制：</p>
                    <div class="options"><span class="option">A. 有，固定周期（如每月）</span><span class="option">B. 有，但不固定</span><span class="option">C. 偶尔有，看情况</span><span class="option">D. 基本没有</span></div>
                </div>
                <div class="question-item">
                    <p><strong>题目十九：</strong>当AI使用结果出错或产生问题时，团队的态度是：</p>
                    <div class="options"><span class="option">A. 分析原因，优化使用方式，继续尝试</span><span class="option">B. 认为AI不可靠，放弃使用</span><span class="option">C. 隐瞒或推卸责任</span><span class="option">D. 回到传统方式，不再尝试</span></div>
                </div>
                <div class="question-item">
                    <p><strong>题目二十：</strong>从公司/团队整体氛围看，你认为AI在团队工作中的定位是：</p>
                    <div class="options"><span class="option">A. 核心生产力工具，深度融入工作</span><span class="option">B. 有用的辅助工具，按需使用</span><span class="option">C. 锦上添花，可有可无</span><span class="option">D. 摆设或负担，没什么实际价值</span></div>
                </div>
            </div>
        </div>
        <div class="score-section">
            <div class="score-card">
                <h3>评分标准与结果解读</h3>
                <p style="margin-bottom:15px;font-size:14px;"><strong>计分方式：</strong>A=4分，B=3分，C=2分，D=1分 | 总分范围：20-80分</p>
                <table class="score-table">
                    <tr><th style="width:25%;">总分</th><th>成熟度等级</th><th>特征描述</th></tr>
                    <tr><td>65-80</td><td>成熟期</td><td>团队AI就绪度高，是组织的AI先锋</td></tr>
                    <tr><td>50-64</td><td>成长期</td><td>有基础但需突破，处于快速发展期</td></tr>
                    <tr><td>35-49</td><td>萌芽期</td><td>刚起步，需要系统性的意识和能力建设</td></tr>
                    <tr><td>20-34</td><td>初始期</td><td>几乎从零开始，需要全方位的改变</td></tr>
                </table>
            </div>
        </div>
        <div class="discussion-section">
            <div class="discussion-card">
                <h3>讨论问题</h3>
                <ol>
                    <li>你的团队评估结果处于哪个成熟度阶段？与你的预期相符吗？</li>
                    <li>四个维度中，哪个维度得分最低？这个短板对整体的影响是什么？</li>
                    <li>如果要提升团队成熟度，你认为最优先应该从哪个维度突破？为什么？</li>
                    <li>对照组其他学员的团队，有哪些值得借鉴的做法？</li>
                </ol>
            </div>
        </div>
        <div class="instructor-section">
            <h2>讲师操作指引</h2>
            <div class="instructor-block">
                <h3>评估组织方式</h3>
                <div class="step-list">
                    <div class="step"><div class="step-num">1</div><div class="step-content"><strong>导入（3分钟）</strong><span>介绍AI成熟度四象限模型，说明评估目的</span></div></div>
                    <div class="step"><div class="step-num">2</div><div class="step-content"><strong>自评（10分钟）</strong><span>每人独立完成20道自评题，记录各维度得分</span></div></div>
                    <div class="step"><div class="step-num">3</div><div class="step-content"><strong>小组对比（8分钟）</strong><span>小组内分享评估结果，讨论差异原因</span></div></div>
                    <div class="step"><div class="step-num">4</div><div class="step-content"><strong>全班讨论（5分钟）</strong><span>邀请几位学员分享诊断结果和初步发现</span></div></div>
                    <div class="step"><div class="step-num">5</div><div class="step-content"><strong>讲师点评（5分钟）</strong><span>总结共性问题，引出下一练习</span></div></div>
                </div>
            </div>
            <div class="transition-box"><strong>过渡语建议：</strong>通过今天的诊断，大家对自己的团队有了更清晰的认识。接下来，我们就进入最关键的环节——根据不同成熟度的成员，设计针对性的带教策略，让每一个人都能在AI时代找到自己的位置。</div>
        </div>
    </div>
</body>
</html>'''

with open(f"{base_path}/I3_团队诊断：我的团队AI成熟度评估.html", "w", encoding="utf-8") as f:
    f.write(i3_html)
print("I3 HTML created")

# I4 HTML
i4_html = '''<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>I4：画像匹配——四类成员带教策略设计</title>
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
        .purpose ul { font-size: 14px; color: #666; margin-left: 20px; margin-top: 8px; }
        .meta { display: flex; gap: 30px; margin: 20px 50px; font-size: 14px; color: #888; }
        .profile-section { padding: 0 50px 30px; }
        .profile-card { background: #fff; border: 1px solid #e8e8f0; border-radius: 12px; margin-bottom: 25px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
        .profile-header { padding: 20px 25px; color: #fff; }
        .profile-header.p1 { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }
        .profile-header.p2 { background: linear-gradient(135deg, #e65100 0%, #ff9800 100%); }
        .profile-header.p3 { background: linear-gradient(135deg, #1976d2 0%, #42a5f5 100%); }
        .profile-header.p4 { background: linear-gradient(135deg, #7b1fa2 0%, #ba68c8 100%); }
        .profile-header h3 { font-size: 18px; margin-bottom: 5px; }
        .profile-header .subtitle { font-size: 13px; opacity: 0.9; }
        .profile-body { padding: 20px 25px; }
        .profile-info { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-bottom: 15px; }
        .info-item { background: #f5f5fa; padding: 10px 15px; border-radius: 8px; }
        .info-item label { font-size: 12px; color: #888; display: block; }
        .info-item span { font-size: 14px; color: #333; font-weight: 500; }
        .profile-section-title { font-size: 14px; color: #667eea; font-weight: 600; margin: 15px 0 8px; }
        .profile-text { font-size: 14px; color: #666; margin-bottom: 8px; }
        .challenge-box { background: #fff3e0; padding: 12px 18px; border-radius: 8px; margin-top: 15px; border-left: 4px solid #ff9800; }
        .challenge-box strong { font-size: 13px; color: #e65100; display: block; margin-bottom: 5px; }
        .challenge-box p { font-size: 13px; color: #666; }
        .task-section { padding: 0 50px 30px; }
        .task-card { background: #f8f9ff; border-radius: 12px; padding: 25px 30px; margin-bottom: 20px; border-left: 4px solid #667eea; }
        .task-card h3 { font-size: 16px; color: #667eea; margin-bottom: 15px; }
        .task-card p { font-size: 14px; color: #666; margin-bottom: 12px; }
        .task-card ol { font-size: 14px; color: #666; margin-left: 20px; }
        .task-card li { margin-bottom: 8px; }
        .answer-section { padding: 0 50px 30px; }
        .answer-block { background: #fff; border: 1px solid #e8e8f0; border-radius: 12px; margin-bottom: 20px; overflow: hidden; }
        .answer-header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #fff; padding: 15px 25px; font-size: 16px; font-weight: 600; }
        .answer-body { padding: 20px 25px; }
        .strategy-table { width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 15px; }
        .strategy-table th { background: #f5f5fa; color: #667eea; padding: 12px 15px; border: 1px solid #e8e8f0; text-align: left; }
        .strategy-table td { padding: 12px 15px; border: 1px solid #e8e8f0; vertical-align: top; }
        .insight-box { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #fff; padding: 15px 20px; border-radius: 8px; font-size: 14px; margin-top: 15px; }
        .insight-box strong { display: block; margin-bottom: 5px; }
        .key-point { background: #fff3e0; padding: 12px 18px; border-radius: 8px; font-size: 14px; color: #e65100; margin-top: 15px; }
        .instructor-section { background: #f0f4ff; padding: 30px 50px; border-top: 2px solid #667eea; }
        .instructor-section h2 { font-size: 20px; color: #333; margin-bottom: 25px; }
        .instructor-block { background: #fff; padding: 25px 30px; border-radius: 12px; margin-bottom: 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.05); }
        .instructor-block h3 { font-size: 16px; color: #667eea; margin-bottom: 15px; }
        .compare-table { width: 100%; border-collapse: collapse; font-size: 13px; }
        .compare-table th { background: #f5f5fa; color: #667eea; padding: 12px; border: 1px solid #e8e8f0; }
        .compare-table td { padding: 12px; border: 1px solid #e8e8f0; vertical-align: top; }
        .transition-box { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #fff; padding: 20px 25px; border-radius: 12px; font-size: 15px; line-height: 1.8; margin-top: 20px; }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <h1>I4：画像匹配——四类成员带教策略设计</h1>
            <p class="subtitle">主题：因人而异的AI带队方法论</p>
        </header>
        <div class="purpose">
            <h2>设计目的</h2>
            <p>通过四类典型成员画像的分析与策略设计，帮助管理者理解"不同成熟度的成员需要不同的带教方式"。本练习让管理者实际演练画像识别与策略匹配，提升AI带队的针对性和有效性。</p>
            <ul>
                <li>识别差异：帮助管理者识别团队中不同类型成员的AI使用状态</li>
                <li>因人施策：针对不同成熟度的成员，设计针对性的带教策略</li>
                <li>场景落地：将抽象的方法论转化为可操作的具体行动</li>
            </ul>
        </div>
        <div class="meta"><span>适用时机：模块四策略设计环节</span><span>建议用时：30-35分钟</span><span>题目数量：4个成员画像 + 4个策略设计任务</span></div>
        <div class="profile-section">
            <div class="profile-card">
                <div class="profile-header p1">
                    <h3>画像一：小李——"AI先锋"</h3>
                    <p class="subtitle">第一象限：高意识+高能力</p>
                </div>
                <div class="profile-body">
                    <div class="profile-info">
                        <div class="info-item"><label>年龄/入职</label><span>26岁/2年</span></div>
                        <div class="info-item"><label>岗位</label><span>运营专员</span></div>
                        <div class="info-item"><label>技术背景</label><span>自学过编程</span></div>
                    </div>
                    <p class="profile-section-title">AI使用现状</p>
                    <p class="profile-text">已熟练使用ChatGPT、Midjourney、Notion AI等多种工具。日常工作中60%的重复性工作已用AI自动化。经常主动研究新出现的AI工具。</p>
                    <p class="profile-section-title">典型表现</p>
                    <p class="profile-text">团队讨论时经常说"这个可以用AI做"。私下给同事推荐好用的AI工具。但有时过于追求新工具，影响本职工作。</p>
                    <div class="challenge-box"><strong>管理者挑战</strong><p>如何让他的AI能力产生组织价值而非个人兴趣？如何引导他成为团队的AI教练而非独行侠？</p></div>
                </div>
            </div>
            <div class="profile-card">
                <div class="profile-header p2">
                    <h3>画像二：王姐——"资深抵触者"</h3>
                    <p class="subtitle">第三象限：低意识+低能力</p>
                </div>
                <div class="profile-body">
                    <div class="profile-info">
                        <div class="info-item"><label>年龄/入职</label><span>42岁/15年</span></div>
                        <div class="info-item"><label>岗位</label><span>高级运营经理</span></div>
                        <div class="info-item"><label>技术背景</label><span>电脑熟练但不追新</span></div>
                    </div>
                    <p class="profile-section-title">AI使用现状</p>
                    <p class="profile-text">几乎不用任何AI工具。认为"我干了15年，不需要这些花里胡哨的东西"。担心AI会让她"变得不重要"。</p>
                    <p class="profile-section-title">典型表现</p>
                    <p class="profile-text">公开表示"AI写的方案没温度"。对团队AI培训不感兴趣，从不参与。私下说"你们年轻人就知道偷懒"。</p>
                    <div class="challenge-box"><strong>管理者挑战</strong><p>如何突破她的心理防线，让她愿意尝试？如何让她感受到AI是赋能而非威胁？如何处理她对年轻员工的潜在竞争心态？</p></div>
                </div>
            </div>
            <div class="profile-card">
                <div class="profile-header p3">
                    <h3>画像三：小张——"焦虑跟随者"</h3>
                    <p class="subtitle">第二象限：高意识+低能力</p>
                </div>
                <div class="profile-body">
                    <div class="profile-info">
                        <div class="info-item"><label>年龄/入职</label><span>30岁/4年</span></div>
                        <div class="info-item"><label>岗位</label><span>运营主管</span></div>
                        <div class="info-item"><label>技术背景</label><span>基础尚可但缺乏深度</span></div>
                    </div>
                    <p class="profile-section-title">AI使用现状</p>
                    <p class="profile-text">知道AI很重要，也很焦虑自己落后。尝试过几次，但效果不理想。学了很多工具，但工作中还是不会用。</p>
                    <p class="profile-section-title">典型表现</p>
                    <p class="profile-text">经常问"现在什么工具最火"。收藏了很多教程，但几乎没看完过。每次听新的AI分享都热血沸腾，回家就放下。</p>
                    <div class="challenge-box"><strong>管理者挑战</strong><p>如何把他的焦虑转化为持续行动？如何帮他建立"小步快走"的习惯而非"三天打鱼"？如何让他从"知道很多"到"做到一些"？</p></div>
                </div>
            </div>
            <div class="profile-card">
                <div class="profile-header p4">
                    <h3>画像四：老陈——"沉默观望者"</h3>
                    <p class="subtitle">第四象限：低意识+高能力潜力</p>
                </div>
                <div class="profile-body">
                    <div class="profile-info">
                        <div class="info-item"><label>年龄/入职</label><span>38岁/8年</span></div>
                        <div class="info-item"><label>岗位</label><span>运营经理</span></div>
                        <div class="info-item"><label>技术背景</label><span>技术底子不错，但很低调</span></div>
                    </div>
                    <p class="profile-section-title">AI使用现状</p>
                    <p class="profile-text">没有公开表态支持或反对AI。私下其实已经用AI处理过一些工作。但从不在团队分享，也不太参与AI讨论。</p>
                    <p class="profile-section-title">典型表现</p>
                    <p class="profile-text">开会时问到AI就说"我了解一下"。实际上已经用AI写过几次报告，但没人知道。心态是"不落后就行，不要做出头鸟"。</p>
                    <div class="challenge-box"><strong>管理者挑战</strong><p>如何识别他的真实状态，不被表面沉默误导？如何激发他的分享意愿，发挥影响力？如何让他从"观望者"变成"贡献者"？</p></div>
                </div>
            </div>
        </div>
        <div class="task-section">
            <h3 style="font-size:18px;color:#333;margin-bottom:20px;">策略设计任务</h3>
            <div class="task-card">
                <h3>任务一：为"AI先锋"小李设计带教策略</h3>
                <p><strong>背景：</strong>小李AI能力突出，但他的能力没有转化为团队价值，反而有时因为研究新工具影响本职工作。</p>
                <ol>
                    <li>小李目前处于AI成熟度的哪个阶段？</li>
                    <li>针对小李，应该采用什么类型的带教方式？</li>
                    <li>请设计一个具体可行的带教计划，包含：目标、策略、行动、评估方式</li>
                </ol>
            </div>
            <div class="task-card">
                <h3>任务二：为"资深抵触者"王姐设计带教策略</h3>
                <p><strong>背景：</strong>王姐是团队资深成员，有很强的业务能力和人脉，但极度抵触AI。她在团队中有影响力，如果不能转化她，可能影响整体推进。</p>
                <ol>
                    <li>王姐抵触AI的核心原因可能是什么？</li>
                    <li>针对王姐，应该采用什么类型的带教方式？</li>
                    <li>如果你是她的上司，如何在尊重她的前提下，引导她做出改变？</li>
                </ol>
            </div>
            <div class="task-card">
                <h3>任务三：为"焦虑跟随者"小张设计带教策略</h3>
                <p><strong>背景：</strong>小张知道AI重要，也愿意学，但总停留在"收藏-忘记-再收藏"的循环。他需要的不只是培训，而是一套能实际落地的行为改变方案。</p>
                <ol>
                    <li>小张的问题本质是什么？是意愿、能力还是环境？</li>
                    <li>针对小张，应该采用什么类型的带教方式？</li>
                    <li>如何设计一个"小步快走"的行动方案，让他能持续进步？</li>
                </ol>
            </div>
            <div class="task-card">
                <h3>任务四：为"沉默观望者"老陈设计带教策略</h3>
                <p><strong>背景：</strong>老陈其实是潜在的AI使用者，但他的低调和观望态度让他成为"隐形用户"。如果能激活他，他可能是团队最好的AI布道者。</p>
                <ol>
                    <li>为什么老陈选择沉默观望？他的顾虑可能是什么？</li>
                    <li>针对老陈，应该采用什么类型的带教方式？</li>
                    <li>如何设计一个"自然激活"的策略，让他在不感到压力的情况下分享AI经验？</li>
                </ol>
            </div>
        </div>
        <div class="answer-section">
            <h3 style="font-size:18px;color:#333;margin-bottom:20px;">参考答案</h3>
            <div class="answer-block">
                <div class="answer-header">小李的带教策略</div>
                <div class="answer-body">
                    <p style="font-size:14px;color:#666;margin-bottom:15px;"><strong>象限定位：</strong>第一象限（高意识+高能力）——AI先锋</p>
                    <p style="font-size:14px;color:#666;margin-bottom:15px;"><strong>核心策略：</strong>赋能与授权 + 责任转化</p>
                    <table class="strategy-table">
                        <tr><th style="width:25%;">维度</th><th>策略</th><th>具体行动</th></tr>
                        <tr><td>角色转化</td><td>从"AI爱好者"转为"AI教练"</td><td>明确要求他负责带2-3位团队成员的AI入门</td></tr>
                        <tr><td>目标绑定</td><td>AI能力与业务目标挂钩</td><td>要求他的AI应用必须产出可衡量的业务成果</td></tr>
                        <tr><td>展示机会</td><td>创造分享场景</td><td>每月安排他做一次AI应用分享，建立影响力</td></tr>
                        <tr><td>边界设定</td><td>平衡探索与本职</td><td>明确每周AI研究时间不超过5小时，需完成本职工作</td></tr>
                    </table>
                    <div class="insight-box"><strong>关键洞察：</strong>对AI先锋，不是教他用AI，而是教他如何用影响力放大AI的价值。</div>
                </div>
            </div>
            <div class="answer-block">
                <div class="answer-header">王姐的带教策略</div>
                <div class="answer-body">
                    <p style="font-size:14px;color:#666;margin-bottom:15px;"><strong>象限定位：</strong>第三象限（低意识+低能力）——资深抵触者</p>
                    <p style="font-size:14px;color:#666;margin-bottom:15px;"><strong>核心策略：</strong>价值连接 + 消除威胁 + 尊重先行</p>
                    <table class="strategy-table">
                        <tr><th style="width:20%;">阶段</th><th>策略</th><th>具体行动</th></tr>
                        <tr><td>第一步</td><td>单独对话，了解顾虑</td><td>私下找王姐聊天，问她对AI的真实看法，不批评不反驳</td></tr>
                        <tr><td>第二步</td><td>找到她的"甜蜜点"</td><td>了解她工作中最费时的部分，寻找AI可以帮她省力的场景</td></tr>
                        <tr><td>第三步</td><td>展示而非推销</td><td>让她看到年轻员工用AI解决了某个她关心的问题，而非讲道理</td></tr>
                        <tr><td>第四步</td><td>降低使用门槛</td><td>提供她能轻松上手的工具，而非让她学一套复杂系统</td></tr>
                        <tr><td>第五步</td><td>正向激励</td><td>当她有哪怕一点点尝试时，立刻给予认可和感谢</td></tr>
                    </table>
                    <div class="key-point"><strong>话术建议：</strong>"王姐，您15年的经验是团队的宝贝。AI没办法复制您的判断力和人脉，但可以让您少做一些重复劳动，把精力放在更重要的事情上。"</div>
                </div>
            </div>
            <div class="answer-block">
                <div class="answer-header">小张的带教策略</div>
                <div class="answer-body">
                    <p style="font-size:14px;color:#666;margin-bottom:15px;"><strong>象限定位：</strong>第二象限（高意识+低能力）——焦虑跟随者</p>
                    <p style="font-size:14px;color:#666;margin-bottom:15px;"><strong>核心策略：</strong>降低门槛 + 聚焦场景 + 建立习惯</p>
                    <table class="strategy-table">
                        <tr><th style="width:25%;">维度</th><th>策略</th><th>具体行动</th></tr>
                        <tr><td>锁定一个场景</td><td>不求多，只求一个</td><td>让他选择一个最高频、最费时的工作场景，只练这一个场景的AI应用</td></tr>
                        <tr><td>建立微习惯</td><td>每天5分钟</td><td>设定每天用AI完成一个小任务（如写一封邮件），不追求完美</td></tr>
                        <tr><td>即时反馈</td><td>快速看到效果</td><td>让他记录使用AI前后完成同样任务的时间对比，用数据说话</td></tr>
                        <tr><td>同伴支持</td><td>找学习伙伴</td><td>给他配对一个AI使用积极的同事，互相监督鼓励</td></tr>
                        <tr><td>降低预期</td><td>允许不完美</td><td>明确告诉他：AI生成的东西不需要完美，先用起来再优化</td></tr>
                    </table>
                    <div class="insight-box"><strong>关键洞察：</strong>小张的问题不是学不会，而是想太多、做太少。管理的重点是帮他"启动"，一旦他体验到一次成功的AI应用，焦虑就会转化为动力。</div>
                </div>
            </div>
            <div class="answer-block">
                <div class="answer-header">老陈的带教策略</div>
                <div class="answer-body">
                    <p style="font-size:14px;color:#666;margin-bottom:15px;"><strong>象限定位：</strong>第四象限（低意识+高能力潜力）——沉默观望者</p>
                    <p style="font-size:14px;color:#666;margin-bottom:15px;"><strong>核心策略：</strong>识别+激活+赋权</p>
                    <table class="strategy-table">
                        <tr><th style="width:25%;">维度</th><th>策略</th><th>具体行动</th></tr>
                        <tr><td>识别真实状态</td><td>私下观察和试探</td><td>通过1on1或私下聊天，试探他对AI的真实态度，可能他已经在用</td></tr>
                        <tr><td>消除顾虑</td><td>明确没有压力</td><td>告诉他"我们不是在考核AI使用，只是想了解大家的需求"</td></tr>
                        <tr><td>创造自然场景</td><td>而非正式要求</td><td>在团队讨论某个实际问题时，自然地问"老陈，这个您打算怎么做？有没有什么工具可以用？"</td></tr>
                        <tr><td>给予展示机会</td><td>降低分享门槛</td><td>让他分享一个"我最近发现的一个工作技巧"，而非"AI使用心得"</td></tr>
                        <tr><td>认可贡献</td><td>正向激励</td><td>当他分享了任何经验（不管是否涉及AI），给予真诚的认可</td></tr>
                    </table>
                    <div class="insight-box"><strong>关键洞察：</strong>老陈的沉默往往是因为他不想"出风头"或担心"枪打出头鸟"。对他来说，最有效的方式是创造一个"安全分享"的氛围，让他自然地贡献而不感到压力。</div>
                </div>
            </div>
        </div>
        <div class="instructor-section">
            <h2>讲师操作指引</h2>
            <div class="instructor-block">
                <h3>策略设计组织方式</h3>
                <div class="step-list">
                    <div class="step"><div class="step-num">1</div><div class="step-content"><strong>画像介绍（5分钟）</strong><span>讲解四类成员的典型特征，强调"不同人需要不同策略"</span></div></div>
                    <div class="step"><div class="step-num">2</div><div class="step-content"><strong>任务发放（2分钟）</strong><span>每组抽取1-2个画像进行策略设计</span></div></div>
                    <div class="step"><div class="step-num">3</div><div class="step-content"><strong>小组策略设计（12分钟）</strong><span>根据画像信息，设计完整的带教策略</span></div></div>
                    <div class="step"><div class="step-num">4</div><div class="step-content"><strong>全班分享与点评（10分钟）</strong><span>各组分享策略，讲师点评优劣</span></div></div>
                    <div class="step"><div class="step-num">5</div><div class="step-content"><strong>总结归纳（5分钟）</strong><span>提炼四类成员带教的共性原则</span></div></div>
                </div>
            </div>
            <div class="instructor-block">
                <h3>四类成员带教对照表</h3>
                <table class="compare-table">
                    <tr><th style="width:20%;">成员类型</th><th>核心问题</th><th>带教重点</th><th>禁忌</th></tr>
                    <tr><td>AI先锋</td><td>能力未转化为价值</td><td>赋能与责任转化</td><td>不要打击他的热情，但也要设定边界</td></tr>
                    <tr><td>资深抵触者</td><td>担心被替代/不重要</td><td>价值连接与尊重</td><td>不要批评他的态度，不要强制要求</td></tr>
                    <tr><td>焦虑跟随者</td><td>想太多做太少</td><td>降低门槛建立习惯</td><td>不要给太多信息，不要制造更多焦虑</td></tr>
                    <tr><td>沉默观望者</td><td>不想出风头</td><td>识别状态激活意愿</td><td>不要公开点名，不要强制分享</td></tr>
                </table>
            </div>
            <div class="transition-box"><strong>核心理念总结：</strong>"AI带队的本质不是整齐划一地教会所有人用同样的工具，而是根据每个人的特点，找到让他们拥抱AI的独特路径。管理者最重要的能力是'读懂人'，然后'因人施策'。"</div>
        </div>
    </div>
</body>
</html>'''

with open(f"{base_path}/I4_画像匹配：四类成员带教策略设计.html", "w", encoding="utf-8") as f:
    f.write(i4_html)
print("I4 HTML created")
