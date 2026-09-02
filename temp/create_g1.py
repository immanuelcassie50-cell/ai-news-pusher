import os

html = '''<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>G1 开场案例讨论</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;600;700&family=Inter+Tight:wght@400;500;600&display=swap" rel="stylesheet">
    <style>
        :root { --bg: #f5f0e6; --text: #2b2d42; --accent: #ef233c; --aux: #8d99ae; --header-bg: #2b2d42; }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Noto Serif SC', serif; background: var(--bg); color: var(--text); font-size: 9pt; line-height: 1.5; padding: 15mm; }
        @page { size: A3 landscape; margin: 0; }
        @media print { body { padding: 10mm; } }
        .header { background: var(--header-bg); color: white; padding: 12pt 16pt; margin: -15mm -15mm 14pt -15mm; display: flex; justify-content: space-between; align-items: center; }
        .header h1 { font-size: 18pt; font-weight: 700; }
        .header .meta { display: flex; gap: 12pt; font-size: 8pt; font-family: 'Inter Tight', sans-serif; }
        .header .meta span { background: rgba(255,255,255,0.15); padding: 3pt 8pt; border-radius: 3pt; }
        .two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 12pt; }
        .card { background: white; border-radius: 6pt; padding: 12pt; box-shadow: 0 2pt 5pt rgba(0,0,0,0.08); }
        .card h2 { color: var(--header-bg); font-size: 11pt; font-weight: 700; margin: 0 0 8pt 0; padding-bottom: 4pt; border-bottom: 2pt solid var(--accent); display: flex; align-items: center; gap: 8pt; }
        .card h2 .num { background: var(--accent); color: white; width: 22pt; height: 22pt; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 10pt; }
        h3 { color: var(--header-bg); font-size: 10pt; font-weight: 600; margin: 10pt 0 6pt 0; }
        .info-box { background: #f8f9fa; border-left: 4pt solid var(--accent); padding: 8pt 10pt; margin: 8pt 0; font-size: 8pt; }
        table { width: 100%; border-collapse: collapse; font-size: 8pt; margin: 8pt 0; }
        th { background: var(--header-bg); color: white; padding: 5pt 8pt; text-align: left; font-family: 'Inter Tight', sans-serif; font-weight: 600; font-size: 7pt; text-transform: uppercase; }
        td { padding: 5pt 8pt; border-bottom: 0.5pt solid #e0e0e0; vertical-align: top; }
        tr:nth-child(even) td { background: #fafafa; }
        input[type="text"], textarea { width: 100%; border: none; border-bottom: 1pt dashed var(--aux); background: transparent; font-family: inherit; font-size: 8pt; padding: 2pt 0; }
        input:focus, textarea:focus { outline: none; border-bottom-color: var(--accent); }
        textarea { border: 0.5pt dashed var(--aux); background: #fafafa; padding: 5pt; min-height: 60pt; resize: none; }
        .checkbox-group { display: flex; flex-wrap: wrap; gap: 10pt; margin: 6pt 0; }
        .checkbox-item { display: flex; align-items: flex-start; gap: 4pt; font-size: 8pt; }
        input[type="checkbox"] { width: 12pt; height: 12pt; accent-color: var(--accent); margin-top: 2pt; }
        .answer-area { background: #fffde7; border: 1pt dashed #ffc107; padding: 8pt; border-radius: 4pt; margin: 8pt 0; }
        .answer-area label { font-size: 7pt; color: #665500; font-family: 'Inter Tight', sans-serif; text-transform: uppercase; }
        .highlight { background: #fff3cd; padding: 2pt 6pt; border-radius: 2pt; }
        .footer { margin-top: 14pt; padding-top: 10pt; border-top: 1pt solid var(--aux); display: flex; justify-content: space-between; font-size: 7pt; color: var(--aux); font-family: 'Inter Tight', sans-serif; }
    </style>
</head>
<body>
    <div class="header">
        <h1>G1 开场案例讨论 — 某Biotech的License-out决策困境</h1>
        <div class="meta">
            <span>建议用时：30-40分钟</span>
            <span>题目数量：1个主案例</span>
            <span>练习方式：小组讨论 + 角色扮演</span>
        </div>
    </div>

    <div class="two-col">
        <div class="card">
            <h2><span class="num">1</span>案例背景</h2>

            <h3>公司背景</h3>
            <div class="info-box">
                <strong>华安生物</strong>成立于2015年，专注于肿瘤领域创新药研发。创始人王博士曾任职于跨国药企。<br><br>
                <strong>核心管线HA-001：</strong>
                <ul style="margin: 4pt 0 0 16pt;">
                    <li>靶点：PD-L1/TGF-β双特异性抗体</li>
                    <li>适应症：非小细胞肺癌（NSCLC）</li>
                    <li>当前阶段：Phase II完成，PoC数据已读出</li>
                    <li>ORR：45%（显著优于同类竞品）</li>
                    <li>3级以上AE发生率：仅8%</li>
                </ul>
            </div>

            <h3>市场背景</h3>
            <div style="display:grid; grid-template-columns: 1fr 1fr; gap: 8pt; font-size: 8pt;">
                <div style="background:#f5f5f5; padding:6pt; border-radius:3pt;">
                    <strong>全球PD-1/PD-L1市场规模</strong><br>
                    超过400亿美元
                </div>
                <div style="background:#f5f5f5; padding:6pt; border-radius:3pt;">
                    <strong>双特异性抗体</strong><br>
                    下一代肿瘤免疫治疗方向
                </div>
            </div>

            <h3>两家合作方offer对比</h3>
            <table>
                <thead>
                    <tr><th>条款</th><th>合作方A（美国MNC）</th><th>合作方B（欧洲药企）</th></tr>
                </thead>
                <tbody>
                    <tr><td><strong>首付款</strong></td><td>1500万美元</td><td>500万美元</td></tr>
                    <tr><td><strong>里程碑</strong></td><td>1.5亿美元</td><td>3亿美元</td></tr>
                    <tr><td><strong>Royalty</strong></td><td>10%</td><td>12%</td></tr>
                    <tr><td><strong>许可范围</strong></td><td>全球权益</td><td>除大中华区外</td></tr>
                    <tr><td><strong>特点</strong></td><td>资金强、商业化强、条件保守</td><td>研发强、商业化一般</td></tr>
                </tbody>
            </table>
        </div>

        <div class="card">
            <h2><span class="num">2</span>华安生物的困境</h2>

            <div class="info-box" style="background:#fff3cd; border-color: #ffc107;">
                <ul style="margin:0; padding-left:16pt;">
                    <li>两家条件各有优劣，难以取舍</li>
                    <li>公司账上现金仅够维持<strong>12个月</strong></li>
                    <li>Phase III需要大量资金投入</li>
                    <li>董事会期望今年完成至少一笔License-out</li>
                    <li>公司也在考虑自主推进商业化的可能性</li>
                </ul>
            </div>

            <h3>讨论问题一：战略决策判断</h3>
            <p style="font-size:8pt; color:#666; margin-bottom:6pt;">王博士应该接受哪个合作方的offer？为什么？</p>
            <div class="answer-area">
                <label>请选择并说明理由</label>
                <div class="checkbox-group">
                    <label class="checkbox-item"><input type="checkbox"> 接受合作方A（理由：________________）</label>
                    <label class="checkbox-item"><input type="checkbox"> 接受合作方B（理由：________________）</label>
                    <label class="checkbox-item"><input type="checkbox"> 都不接受，选择自主商业化</label>
                    <label class="checkbox-item"><input type="checkbox"> 要求两家重新报价</label>
                    <label class="checkbox-item"><input type="checkbox"> 其他方案（________________）</label>
                </div>
            </div>

            <h3>讨论问题二：管线价值评估</h3>
            <p style="font-size:8pt; color:#666; margin-bottom:6pt;">如果你是华安生物的BD总监，使用F2表格框架分析HA-001的价值。</p>
            <div class="answer-area">
                <label>临床价值评估要点</label>
                <textarea></textarea>
            </div>
            <div class="answer-area">
                <label>建议估值区间</label>
                <input type="text" placeholder="______ - ______ 亿美元">
            </div>
        </div>
    </div>

    <div class="card" style="margin-top:12pt;">
        <h2><span class="num">3</span>BD决策框架与常见陷阱</h2>
        <div style="display:grid; grid-template-columns: 1fr 1fr; gap: 12pt;">
            <div>
                <h3>BD决策的四个维度</h3>
                <table>
                    <thead><tr><th>维度</th><th>关键问题</th></tr></thead>
                    <tbody>
                        <tr><td><strong>战略匹配</strong></td><td>是否符合公司长期战略？</td></tr>
                        <tr><td><strong>价值实现</strong></td><td>是否能实现管线的合理价值？</td></tr>
                        <tr><td><strong>风险控制</strong></td><td>是否有效控制风险？</td></tr>
                        <tr><td><strong>执行可行性</strong></td><td>条款是否具有可执行性？</td></tr>
                    </tbody>
                </table>
            </div>
            <div>
                <h3>常见决策陷阱</h3>
                <div style="background:#fff5f5; border-left:3pt solid #ef233c; padding:8pt; margin-bottom:6pt; font-size:8pt;">
                    <strong>现金压力导致的低价出售</strong><br>在资金压力下可能被迫接受不合理的价格
                </div>
                <div style="background:#fff5f5; border-left:3pt solid #ef233c; padding:8pt; margin-bottom:6pt; font-size:8pt;">
                    <strong>过度乐观的估值</strong><br>对管线价值过于自信，错过最佳交易窗口
                </div>
                <div style="background:#fff5f5; border-left:3pt solid #ef233c; padding:8pt; font-size:8pt;">
                    <strong>忽视合作方能力评估</strong><br>只关注条款，忽视合作方执行能力
                </div>
            </div>
        </div>
    </div>

    <div class="footer">
        <span>课程：出海BD实战：创新药License-out与国际化合作</span>
        <span>G1 开场案例讨论 · 讲师操作指引见背面</span>
    </div>
</body>
</html>'''

with open("D:/新课开发/大健康/03 创新药出海与国际化BD/全流程练习题库/G1_开场案例讨论.html", "w", encoding="utf-8") as f:
    f.write(html)
print("G1 created")
