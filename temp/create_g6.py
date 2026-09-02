import os

html = '''<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>G6 综合演练与总结</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;600;700&family=Inter+Tight:wght@400;500;600&display=swap" rel="stylesheet">
    <style>
        :root { --bg: #f5f0e6; --text: #2b2d42; --accent: #ef233c; --aux: #8d99ae; --header-bg: #2b2d42; }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Noto Serif SC', serif; background: var(--bg); color: var(--text); font-size: 8.5pt; line-height: 1.45; padding: 14mm; }
        @page { size: A3 landscape; margin: 0; }
        @media print { body { padding: 10mm; } }
        .header { background: var(--header-bg); color: white; padding: 10pt 14pt; margin: -14mm -14mm 12pt -14mm; display: flex; justify-content: space-between; align-items: center; }
        .header h1 { font-size: 16pt; font-weight: 700; }
        .header .meta { display: flex; gap: 10pt; font-size: 7.5pt; font-family: 'Inter Tight', sans-serif; }
        .header .meta span { background: rgba(255,255,255,0.15); padding: 2pt 8pt; border-radius: 3pt; }
        .three-col { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10pt; }
        .card { background: white; border-radius: 5pt; padding: 10pt; box-shadow: 0 1pt 3pt rgba(0,0,0,0.08); }
        .card h2 { color: var(--header-bg); font-size: 10pt; font-weight: 700; margin: 0 0 6pt 0; padding-bottom: 3pt; border-bottom: 2pt solid var(--accent); display: flex; align-items: center; gap: 6pt; }
        .card h2 .num { background: var(--accent); color: white; width: 20pt; height: 20pt; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 9pt; }
        h3 { color: var(--header-bg); font-size: 9pt; font-weight: 600; margin: 8pt 0 4pt 0; }
        table { width: 100%; border-collapse: collapse; font-size: 7.5pt; margin: 6pt 0; }
        th { background: var(--header-bg); color: white; padding: 4pt 6pt; text-align: left; font-family: 'Inter Tight', sans-serif; font-weight: 600; font-size: 6.5pt; text-transform: uppercase; }
        td { padding: 4pt 6pt; border-bottom: 0.5pt solid #e0e0e0; vertical-align: middle; }
        tr:nth-child(even) td { background: #fafafa; }
        input[type="text"], textarea { width: 100%; border: none; border-bottom: 0.5pt dashed var(--aux); background: transparent; font-family: inherit; font-size: 7.5pt; padding: 1pt 0; }
        input:focus, textarea:focus { outline: none; border-bottom-color: var(--accent); }
        textarea { border: 0.5pt dashed var(--aux); background: #fafafa; padding: 4pt; min-height: 45pt; resize: none; }
        .info-box { background: #f8f9fa; border-left: 3pt solid var(--accent); padding: 6pt 8pt; margin: 6pt 0; }
        .timeline-item { border-left: 2pt solid var(--accent); padding-left: 8pt; margin: 8pt 0; }
        .timeline-item .time { font-size: 6.5pt; color: var(--aux); font-family: 'Inter Tight', sans-serif; }
        .score-box { background: linear-gradient(135deg, var(--header-bg) 0%, #3d4159 100%); color: white; padding: 8pt; border-radius: 4pt; text-align: center; }
        .score-box .label { font-size: 6pt; opacity: 0.8; font-family: 'Inter Tight', sans-serif; text-transform: uppercase; }
        .score-box .value { font-size: 18pt; font-weight: 700; }
        .self-eval-item { display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 6pt; align-items: center; margin: 4pt 0; }
        .footer { margin-top: 10pt; padding-top: 8pt; border-top: 1pt solid var(--aux); display: flex; justify-content: space-between; font-size: 6.5pt; color: var(--aux); font-family: 'Inter Tight', sans-serif; }
    </style>
</head>
<body>
    <div class="header">
        <h1>G6 综合演练与总结 — License-out全流程实战演练</h1>
        <div class="meta">
            <span>建议用时：90-120分钟</span>
            <span>题目数量：1个综合案例</span>
            <span>练习方式：团队实战 + 即时复盘</span>
        </div>
    </div>

    <div class="three-col">
        <div class="card">
            <h2><span class="num">1</span>演练流程时间轴</h2>

            <div class="timeline-item">
                <div class="time">0-10分钟</div>
                <strong>任务发布</strong><br>
                宣布演练任务和规则
            </div>
            <div class="timeline-item">
                <div class="time">10-30分钟</div>
                <strong>第一阶段：估值与方案设计</strong><br>
                使用F1-F3设计估值和交易结构
            </div>
            <div class="timeline-item">
                <div class="time">30-50分钟</div>
                <strong>第二阶段：谈判（角色扮演）</strong><br>
                买卖双方进行谈判
            </div>
            <div class="timeline-item">
                <div class="time">50-65分钟</div>
                <strong>第三阶段：尽调应对</strong><br>
                模拟尽调问答环节
            </div>
            <div class="timeline-item">
                <div class="time">65-80分钟</div>
                <strong>第四阶段：签约与交割</strong><br>
                完成合同签署流程
            </div>
            <div class="timeline-item">
                <div class="time">80-100分钟</div>
                <strong>第五阶段：复盘与互评</strong><br>
                团队互评与讲师点评
            </div>
            <div class="timeline-item">
                <div class="time">100-120分钟</div>
                <strong>总结与答疑</strong>
            </div>
        </div>

        <div class="card">
            <h2><span class="num">2</span>演练任务书</h2>

            <h3>任务背景</h3>
            <div class="info-box">
                恒瑞医药的BD团队正在推进CS-009（BTK抑制剂）的License-out。
                该管线用于治疗套细胞淋巴瘤（MCL），Phase II PoC已验证。
                目标合作方：全球前20大药企。
            </div>

            <h3>管线基本信息</h3>
            <table>
                <thead><tr><th>项目</th><th>内容</th></tr></thead>
                <tbody>
                    <tr><td><strong>化合物</strong></td><td>CS-009（BTK抑制剂）</td></tr>
                    <tr><td><strong>适应症</strong></td><td>套细胞淋巴瘤（MCL）</td></tr>
                    <tr><td><strong>当前阶段</strong></td><td>Phase II PoC</td></tr>
                    <tr><td><strong>ORR</strong></td><td>72%</td></tr>
                    <tr><td><strong>3级以上AE</strong></td><td>12%</td></tr>
                    <tr><td><strong>专利到期</strong></td><td>2038年</td></tr>
                </tbody>
            </table>

            <h3>团队分工</h3>
            <table>
                <thead><tr><th>角色</th><th>职责</th></tr></thead>
                <tbody>
                    <tr><td>卖方BD总监</td><td>主谈</td></tr>
                    <tr><td>卖方医学顾问</td><td>临床数据支持</td></tr>
                    <tr><td>买方BD总监</td><td>主谈</td></tr>
                    <tr><td>买方医学顾问</td><td>尽调提问</td></tr>
                    <tr><td>观察员</td><td>评估记录</td></tr>
                </tbody>
            </table>
        </div>

        <div class="card">
            <h2><span class="num">3</span>演练评分标准</h2>

            <h3>团队评分维度</h3>
            <table>
                <thead><tr><th>维度</th><th>分值</th><th>评分标准</th></tr></thead>
                <tbody>
                    <tr><td><strong>估值分析</strong></td><td>20分</td><td>方法合理性、数据支撑</td></tr>
                    <tr><td><strong>谈判策略</strong></td><td>25分</td><td>策略清晰度、应变能力</td></tr>
                    <tr><td><strong>条款设计</strong></td><td>20分</td><td>价值实现、风险分担</td></tr>
                    <tr><td><strong>团队协作</strong></td><td>15分</td><td>分工配合、现场协同</td></tr>
                    <tr><td><strong>专业礼仪</strong></td><td>10分</td><td>职业素养、沟通技巧</td></tr>
                    <tr><td><strong>临场应变</strong></td><td>10分</td><td>处理突发问题能力</td></tr>
                </tbody>
            </table>

            <div style="margin-top:8pt;">
                <h3>个人评分（观察员填写）</h3>
                <div class="self-eval-item">
                    <span>卖方BD总监</span>
                    <input type="text" placeholder="__分">
                </div>
                <div class="self-eval-item">
                    <span>卖方医学顾问</span>
                    <input type="text" placeholder="__分">
                </div>
                <div class="self-eval-item">
                    <span>买方BD总监</span>
                    <input type="text" placeholder="__分">
                </div>
                <div class="self-eval-item">
                    <span>买方医学顾问</span>
                    <input type="text" placeholder="__分">
                </div>
            </div>
        </div>
    </div>

    <div class="card" style="margin-top:10pt;">
        <h2 style="border-bottom-color:#667eea;"><span class="num" style="background:#667eea;">4</span>复盘问题清单</h2>
        <div style="display:grid; grid-template-columns: 1fr 1fr 1fr; gap: 10pt;">
            <div class="info-box">
                <strong>问题一：估值环节</strong>
                <ul style="margin:4pt 0 0 14pt;">
                    <li>使用了哪些估值方法？</li>
                    <li>估值依据是否充分？</li>
                    <li>最终报价是否合理？</li>
                </ul>
                <textarea placeholder="复盘记录..."></textarea>
            </div>
            <div class="info-box">
                <strong>问题二：谈判环节</strong>
                <ul style="margin:4pt 0 0 14pt;">
                    <li>谈判策略是否有效？</li>
                    <li>哪些地方可以改进？</li>
                    <li>双方是否存在信息不对称？</li>
                </ul>
                <textarea placeholder="复盘记录..."></textarea>
            </div>
            <div class="info-box">
                <strong>问题三：整体评估</strong>
                <ul style="margin:4pt 0 0 14pt;">
                    <li>交易是否达成？条件如何？</li>
                    <li>最大收获是什么？</li>
                    <li>最大教训是什么？</li>
                </ul>
                <textarea placeholder="复盘记录..."></textarea>
            </div>
        </div>
    </div>

    <div class="footer">
        <span>课程：出海BD实战：创新药License-out与国际化合作</span>
        <span>G6 综合演练与总结</span>
    </div>
</body>
</html>'''

with open("D:/新课开发/大健康/03 创新药出海与国际化BD/全流程练习题库/G6_综合演练与总结.html", "w", encoding="utf-8") as f:
    f.write(html)
print("G6 created")
