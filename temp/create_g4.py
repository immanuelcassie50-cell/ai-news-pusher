import os

html = '''<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>G4 尽调应对练习</title>
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
        .scene-box { background: #f8f9fa; border-left: 4pt solid var(--accent); padding: 8pt 10pt; margin: 6pt 0; }
        .q-box { background: #fffde7; border: 1pt dashed #ffc107; padding: 8pt; border-radius: 4pt; margin: 8pt 0; }
        .q-box .q { font-weight: 600; color: #856404; font-size: 8pt; margin-bottom: 4pt; }
        .answer-area { background: white; border: 1pt solid #e0e0e0; padding: 6pt; border-radius: 3pt; min-height: 50pt; }
        input[type="text"], textarea { width: 100%; border: none; border-bottom: 0.5pt dashed var(--aux); background: transparent; font-family: inherit; font-size: 7.5pt; padding: 1pt 0; }
        input:focus, textarea:focus { outline: none; border-bottom-color: var(--accent); }
        textarea { border: 0.5pt dashed var(--aux); background: #fafafa; padding: 4pt; min-height: 45pt; resize: none; }
        .role-table td { font-size: 7.5pt; }
        .footer { margin-top: 10pt; padding-top: 8pt; border-top: 1pt solid var(--aux); display: flex; justify-content: space-between; font-size: 6.5pt; color: var(--aux); font-family: 'Inter Tight', sans-serif; }
    </style>
</head>
<body>
    <div class="header">
        <h1>G4 尽调应对练习 — 跨国药企尽调场景模拟</h1>
        <div class="meta">
            <span>建议用时：60-75分钟</span>
            <span>题目数量：3个尽调场景</span>
            <span>练习方式：场景模拟 + 角色扮演</span>
        </div>
    </div>

    <div class="three-col">
        <div class="card">
            <h2><span class="num">1</span>场景一：临床数据尽调</h2>

            <div class="scene-box">
                <strong>尽调背景：</strong>GlobalPharma的临床开发负责人李华对HA-001的临床数据提出尖锐问题。
            </div>

            <div class="q-box">
                <div class="q">问题1：关于ORR数据</div>
                <em>"Phase II的ORR是45%，比Keytruda的35%高出10个百分点。但样本量只有82例，这个数据能否支持确证性III期研究？"</em>
                <div class="answer-area">
                    <input type="text" placeholder="你的应答：">
                </div>
            </div>

            <div class="q-box">
                <div class="q">问题2：关于亚组分析</div>
                <em>"PD-L1 TPS≥50%的患者中ORR达60%，但阴性患者中只有22%。你们如何定位患者人群？"</em>
                <div class="answer-area">
                    <input type="text" placeholder="你的应答：">
                </div>
            </div>

            <div class="q-box">
                <div class="q">问题3：关于安全性数据</div>
                <em>"3级以上AE发生率8%不错，但间质性肺疾病（ILD）发生率达5%，这个安全性信号如何考虑？"</em>
                <div class="answer-area">
                    <input type="text" placeholder="你的应答：">
                </div>
            </div>
        </div>

        <div class="card">
            <h2><span class="num">2</span>场景二：CMC尽调</h2>

            <div class="scene-box">
                <strong>尽调背景：</strong>CMC负责人刘伟对HA-001的生产工艺和质量控制提出问题。
            </div>

            <div class="q-box">
                <div class="q">问题1：关于生产工艺</div>
                <em>"目前使用3,000L不锈钢生物反应器，Scale-up到15,000L如何保证产品质量一致性？"</em>
                <div class="answer-area">
                    <input type="text" placeholder="你的应答：">
                </div>
            </div>

            <div class="q-box">
                <div class="q">问题2：关于可比性研究</div>
                <em>"Phase II期间对生产工艺进行过变更（批号XX），是否经过充分的可比性研究？"</em>
                <div class="answer-area">
                    <input type="text" placeholder="你的应答：">
                </div>
            </div>

            <div class="q-box">
                <div class="q">问题3：关于供应商</div>
                <em>"关键原材料依赖单一供应商，如何应对供应链中断风险？"</em>
                <div class="answer-area">
                    <input type="text" placeholder="你的应答：">
                </div>
            </div>
        </div>

        <div class="card">
            <h2><span class="num">3</span>场景三：IP尽调</h2>

            <div class="scene-box">
                <strong>尽调背景：</strong>法务负责人陈刚对HA-001的知识产权布局提出问题。
            </div>

            <div class="q-box">
                <div class="q">问题1：关于专利保护范围</div>
                <em>"核心化合物专利权利要求1保护范围是否足够宽泛？如果竞品通过改变CDR区绕开专利如何应对？"</em>
                <div class="answer-area">
                    <input type="text" placeholder="你的应答：">
                </div>
            </div>

            <div class="q-box">
                <div class="q">问题2：关于FTO</div>
                <em>"是否进行过Freedom to Operate分析？市场是否有潜在侵权风险？"</em>
                <div class="answer-area">
                    <input type="text" placeholder="你的应答：">
                </div>
            </div>

            <h3 style="margin-top:10pt;">场景四：角色扮演</h3>
            <table class="role-table">
                <thead><tr><th>角色</th><th>人数</th><th>职责</th></tr></thead>
                <tbody>
                    <tr><td>尽调方</td><td>3人</td><td>提问、追问</td></tr>
                    <tr><td>被尽调方</td><td>4人</td><td>主讲、辅助</td></tr>
                    <tr><td>观察员</td><td>2人</td><td>评估、记录</td></tr>
                </tbody>
            </table>
            <div class="scene-box" style="margin-top:6pt;">
                <strong>场景设定：</strong>尽调第一天下午的临床数据审查会议，30分钟。
            </div>
        </div>
    </div>

    <div class="card" style="margin-top:10pt;">
        <h2 style="border-bottom-color:#667eea;">尽调应答技巧要点</h2>
        <div style="display:grid; grid-template-columns: 1fr 1fr 1fr; gap: 10pt;">
            <div style="background:#f0fff4; border-left:3pt solid #28a745; padding:8pt;">
                <strong style="color:#155724;">1. 数据说话</strong><br>
                <span style="font-size:7.5pt;">用数据回答数据问题，不要用主观感受</span>
            </div>
            <div style="background:#f0fff4; border-left:3pt solid #28a745; padding:8pt;">
                <strong style="color:#155724;">2. 坦诚直面</strong><br>
                <span style="font-size:7.5pt;">对负面问题不要回避，承认并解释应对措施</span>
            </div>
            <div style="background:#f0fff4; border-left:3pt solid #28a745; padding:8pt;">
                <strong style="color:#155724;">3. 主动引导</strong><br>
                <span style="font-size:7.5pt;">在回答中主动提供额外信息，展示全面性</span>
            </div>
        </div>
    </div>

    <div class="footer">
        <span>课程：出海BD实战：创新药License-out与国际化合作</span>
        <span>G4 尽调应对练习</span>
    </div>
</body>
</html>'''

with open("D:/新课开发/大健康/03 创新药出海与国际化BD/全流程练习题库/G4_尽调应对练习.html", "w", encoding="utf-8") as f:
    f.write(html)
print("G4 created")
