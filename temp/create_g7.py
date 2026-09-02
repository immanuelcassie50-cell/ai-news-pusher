import os

html = '''<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>G7 谈判演练（完整版）</title>
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
        .two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 10pt; }
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
        .target-box { background: #fff3cd; border: 1pt solid #ffc107; padding: 8pt; border-radius: 4pt; margin: 6pt 0; }
        .result-box { background: linear-gradient(135deg, var(--header-bg) 0%, #3d4159 100%); color: white; padding: 8pt 10pt; border-radius: 4pt; text-align: center; }
        .result-box .label { font-size: 6pt; opacity: 0.8; font-family: 'Inter Tight', sans-serif; text-transform: uppercase; }
        .result-box .value { font-size: 18pt; font-weight: 700; }
        .negotiation-table td { font-size: 7pt; }
        .tag { display: inline-block; padding: 2pt 6pt; border-radius: 3pt; font-size: 6pt; font-weight: 600; }
        .tag-success { background: #d4edda; color: #155724; }
        .tag-warning { background: #fff3cd; color: #856404; }
        .tag-danger { background: #f8d7da; color: #721c24; }
        .footer { margin-top: 10pt; padding-top: 8pt; border-top: 1pt solid var(--aux); display: flex; justify-content: space-between; font-size: 6.5pt; color: var(--aux); font-family: 'Inter Tight', sans-serif; }
    </style>
</head>
<body>
    <div class="header">
        <h1>G7 谈判演练（完整版）— License-out实战模拟</h1>
        <div class="meta">
            <span>建议用时：90-120分钟</span>
            <span>题目数量：2个谈判场景</span>
            <span>练习方式：完整流程演练</span>
        </div>
    </div>

    <div class="three-col">
        <div class="card">
            <h2><span class="num">1</span>谈判场景一：首轮接触</h2>

            <div class="info-box">
                <strong>背景：</strong>华安生物BD总监张明与欧洲药企BioVinc的BD总监Sarah进行首次会面。
            </div>

            <h3>谈判目标（张明）</h3>
            <table>
                <thead><tr><th>条款</th><th>期望值</th></tr></thead>
                <tbody>
                    <tr><td>首付款</td><td>2500万美元以上</td></tr>
                    <tr><td>里程碑</td><td>2亿美元以上</td></tr>
                    <tr><td>Royalty</td><td>10%以上</td></tr>
                </tbody>
            </table>

            <h3>Sarah的开场陈述记录</h3>
            <textarea placeholder="记录对方开场要点..."></textarea>

            <h3>你的应答策略</h3>
            <textarea placeholder="你的应答策略..."></textarea>

            <div class="result-box" style="margin-top:8pt;">
                <div class="label">本轮谈判结果</div>
                <div style="margin-top:4pt;">
                    <span class="tag tag-success">达成共识</span>
                    <span class="tag tag-warning">部分共识</span>
                    <span class="tag tag-danger">陷入僵局</span>
                </div>
            </div>
        </div>

        <div class="card">
            <h2><span class="num">2</span>谈判场景二：尽职调查后</h2>

            <div class="info-box">
                <strong>背景：</strong>尽调完成后，BioVinc的团队提出了一些质疑，你需要回应。
            </div>

            <h3>尽调反馈要点</h3>
            <div class="target-box">
                <strong>问题1：</strong>Phase II样本量较小（n=62），数据可信度？
                <textarea placeholder="你的回应..." style="min-height:30pt;"></textarea>
            </div>
            <div class="target-box">
                <strong>问题2：</strong>竞争对手AZD联合治疗数据更优？
                <textarea placeholder="你的回应..." style="min-height:30pt;"></textarea>
            </div>
            <div class="target-box">
                <strong>问题3：</strong>期望降低首付款至1500万美元
                <textarea placeholder="你的回应..." style="min-height:30pt;"></textarea>
            </div>

            <h3>调整后的交易条件</h3>
            <table>
                <thead><tr><th>条款</th><th>原期望</th><th>调整后</th></tr></thead>
                <tbody>
                    <tr><td>首付款</td><td>2500万美元</td><td><input type="text" style="width:60pt;"></td></tr>
                    <tr><td>里程碑</td><td>2亿美元</td><td><input type="text" style="width:60pt;"></td></tr>
                    <tr><td>Royalty</td><td>10%</td><td><input type="text" style="width:40pt;"></td></tr>
                </tbody>
            </table>
        </div>

        <div class="card">
            <h2><span class="num">3</span>谈判场景三：最终签约</h2>

            <div class="info-box">
                <strong>背景：</strong>经过多轮谈判，双方接近达成协议，但仍有最后一个分歧需要解决。
            </div>

            <h3>最后分歧点</h3>
            <div class="target-box">
                <strong>Royalty率分歧：</strong><br>
                华安生物坚持：10%<br>
                BioVinc出价：8%
            </div>

            <h3>解决方案设计</h3>
            <table>
                <thead><tr><th>方案</th><th>内容</th></tr></thead>
                <tbody>
                    <tr><td><strong>方案A</strong></td><td>接受8%，换取更高里程碑</td></tr>
                    <tr><td><strong>方案B</strong></td><td>坚持10%，降低部分里程碑</td></tr>
                    <tr><td><strong>方案C</strong></td><td>递进Royalty（前5年8%，后10年10%）</td></tr>
                    <tr><td><strong>方案D</strong></td><td><input type="text" style="width:100pt;"></td></tr>
                </tbody>
            </table>

            <h3>最终合同条款</h3>
            <table>
                <thead><tr><th>条款</th><th>最终值</th></tr></thead>
                <tbody>
                    <tr><td>首付款</td><td><input type="text" style="width:60pt;"></td></tr>
                    <tr><td>研发里程碑</td><td><input type="text" style="width:60pt;"></td></tr>
                    <tr><td>监管里程碑</td><td><input type="text" style="width:60pt;"></td></tr>
                    <tr><td>销售里程碑</td><td><input type="text" style="width:60pt;"></td></tr>
                    <tr><td>Royalty率</td><td><input type="text" style="width:40pt;"></td></tr>
                    <tr><td><strong>总交易价值</strong></td><td><input type="text" style="width:60pt;"></td></tr>
                </tbody>
            </table>

            <div class="result-box" style="margin-top:6pt;">
                <div class="label">谈判结果</div>
                <div class="value">成功/失败/暂停</div>
            </div>
        </div>
    </div>

    <div class="card" style="margin-top:10pt;">
        <h2 style="border-bottom-color:#667eea;"><span class="num" style="background:#667eea;">4</span>谈判技巧自评表</h2>
        <div style="display:grid; grid-template-columns: 1fr 1fr 1fr 1fr; gap: 10pt;">
            <div>
                <h3>开场技巧</h3>
                <table class="negotiation-table">
                    <thead><tr><th>要点</th><th>自评</th></tr></thead>
                    <tbody>
                        <tr><td>价值主张清晰</td><td><input type="text" style="width:30pt;"></td></tr>
                        <tr><td>态度专业自信</td><td><input type="text" style="width:30pt;"></td></tr>
                        <tr><td>倾听对方需求</td><td><input type="text" style="width:30pt;"></td></tr>
                    </tbody>
                </table>
            </div>
            <div>
                <h3>议价技巧</h3>
                <table class="negotiation-table">
                    <thead><tr><th>要点</th><th>自评</th></tr></thead>
                    <tbody>
                        <tr><td>让步策略合理</td><td><input type="text" style="width:30pt;"></td></tr>
                        <tr><td>条件交换灵活</td><td><input type="text" style="width:30pt;"></td></tr>
                        <tr><td>底线意识清晰</td><td><input type="text" style="width:30pt;"></td></tr>
                    </tbody>
                </table>
            </div>
            <div>
                <h3>应对技巧</h3>
                <table class="negotiation-table">
                    <thead><tr><th>要点</th><th>自评</th></tr></thead>
                    <tbody>
                        <tr><td>质疑回应得当</td><td><input type="text" style="width:30pt;"></td></tr>
                        <tr><td>数据支撑有力</td><td><input type="text" style="width:30pt;"></td></tr>
                        <tr><td>情绪控制良好</td><td><input type="text" style="width:30pt;"></td></tr>
                    </tbody>
                </table>
            </div>
            <div>
                <h3>收尾技巧</h3>
                <table class="negotiation-table">
                    <thead><tr><th>要点</th><th>自评</th></tr></thead>
                    <tbody>
                        <tr><td>总结要点清晰</td><td><input type="text" style="width:30pt;"></td></tr>
                        <tr><td>下一步明确</td><td><input type="text" style="width:30pt;"></td></tr>
                        <tr><td>关系维护得当</td><td><input type="text" style="width:30pt;"></td></tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <div class="footer">
        <span>课程：出海BD实战：创新药License-out与国际化合作</span>
        <span>G7 谈判演练（完整版）</span>
    </div>
</body>
</html>'''

with open("D:/新课开发/大健康/03 创新药出海与国际化BD/全流程练习题库/G7_谈判演练.html", "w", encoding="utf-8") as f:
    f.write(html)
print("G7 created")
