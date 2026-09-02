import os

html = '''<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>G5 谈判演练</title>
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
        textarea { border: 0.5pt dashed var(--aux); background: #fafafa; padding: 4pt; min-height: 40pt; resize: none; }
        .info-box { background: #f8f9fa; border-left: 3pt solid var(--accent); padding: 6pt 8pt; margin: 6pt 0; }
        .target-box { background: #fff3cd; border: 1pt solid #ffc107; padding: 8pt; border-radius: 4pt; margin: 6pt 0; }
        .negotiation-record td { font-size: 7pt; }
        .footer { margin-top: 10pt; padding-top: 8pt; border-top: 1pt solid var(--aux); display: flex; justify-content: space-between; font-size: 6.5pt; color: var(--aux); font-family: 'Inter Tight', sans-serif; }
    </style>
</head>
<body>
    <div class="header">
        <h1>G5 谈判演练 — License-out双边谈判模拟</h1>
        <div class="meta">
            <span>建议用时：75-90分钟</span>
            <span>题目数量：1个谈判场景</span>
            <span>练习方式：角色扮演 + 谈判实战</span>
        </div>
    </div>

    <div class="two-col">
        <div class="card">
            <h2><span class="num">1</span>谈判设置</h2>

            <h3>谈判背景</h3>
            <div class="info-box">
                华安生物的BD团队与GlobalPharma就HA-001的License-out进行正式谈判。
            </div>

            <h3>双方谈判目标</h3>
            <table>
                <thead><tr><th>条款</th><th>华安生物（卖方）理想</th><th>华安生物底线</th><th>GlobalPharma报价</th></tr></thead>
                <tbody>
                    <tr><td><strong>首付款</strong></td><td>3000万美元</td><td>2000万美元</td><td>1500万美元</td></tr>
                    <tr><td><strong>里程碑</strong></td><td>2.5亿美元</td><td>1.5亿美元</td><td>1.5亿美元</td></tr>
                    <tr><td><strong>Royalty</strong></td><td>12%</td><td>8%</td><td>8%</td></tr>
                </tbody>
            </table>

            <h3>双方筹码</h3>
            <div style="display:grid; grid-template-columns: 1fr 1fr; gap: 6pt;">
                <div class="info-box">
                    <strong>华安生物筹码：</strong>
                    <ul style="margin:4pt 0 0 14pt; padding:0;">
                        <li>HA-001数据优异，Phase II PoC已验证</li>
                        <li>已有另一合作方B在竞争</li>
                        <li>管线具有差异化优势</li>
                        <li>公司现金流紧张，有成交压力</li>
                    </ul>
                </div>
                <div class="info-box">
                    <strong>GlobalPharma筹码：</strong>
                    <ul style="margin:4pt 0 0 14pt; padding:0;">
                        <li>资金实力雄厚</li>
                        <li>全球商业化能力无可替代</li>
                        <li>同类靶点有内部项目可替代</li>
                        <li>谈判经验丰富</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="card">
            <h2><span class="num">2</span>角色分配</h2>

            <div style="display:grid; grid-template-columns: 1fr 1fr; gap: 8pt;">
                <div>
                    <h3>卖方团队（华安生物）</h3>
                    <table>
                        <thead><tr><th>角色</th><th>人数</th><th>职责</th></tr></thead>
                        <tbody>
                            <tr><td>主谈</td><td>1人</td><td>主要发言，掌控节奏</td></tr>
                            <tr><td>副谈</td><td>1人</td><td>补充发言，配合主谈</td></tr>
                            <tr><td>财务支持</td><td>1人</td><td>数据支持</td></tr>
                            <tr><td>记录</td><td>1人</td><td>记录要点</td></tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <h3>买方团队（GlobalPharma）</h3>
                    <table>
                        <thead><tr><th>角色</th><th>人数</th><th>职责</th></tr></thead>
                        <tbody>
                            <tr><td>主谈</td><td>1人</td><td>主要发言，掌控节奏</td></tr>
                            <tr><td>副谈</td><td>1人</td><td>补充发言</td></tr>
                            <tr><td>临床支持</td><td>1人</td><td>临床数据评估</td></tr>
                            <tr><td>记录</td><td>1人</td><td>记录要点</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <h3 style="margin-top:10pt;">谈判议题</h3>
            <div class="target-box">
                <strong>议题一：首付款</strong><br>
                华安生物立场：希望不低于2500万美元 | GlobalPharma立场：控制在2000万美元以内
            </div>
            <div class="target-box">
                <strong>议题二：里程碑设置</strong><br>
                华安生物立场：设置5个研发+3个Regulatory+3个销售里程碑
            </div>
            <div class="target-box">
                <strong>议题三：Royalty率</strong><br>
                华安生物立场：不低于10% | GlobalPharma立场：不超过10%
            </div>
        </div>
    </div>

    <div class="card" style="margin-top:10pt;">
        <h2 style="border-bottom-color:#667eea;"><span class="num" style="background:#667eea;">3</span>谈判流程</h2>
        <div style="display:grid; grid-template-columns: 1fr 1fr 1fr; gap: 10pt;">
            <div>
                <h3>第一轮：开场陈述（10分钟）</h3>
                <div class="info-box">
                    <strong>卖方开场陈述：</strong>
                    <textarea placeholder="请记录开场陈述要点..."></textarea>
                </div>
            </div>
            <div>
                <h3>第二轮：条款谈判（40分钟）</h3>
                <table class="negotiation-record">
                    <thead><tr><th>议题</th><th>轮次</th><th>卖方报价</th><th>买方报价</th></tr></thead>
                    <tbody>
                        <tr><td rowspan="3">首付款</td><td>第1轮</td><td></td><td></td></tr>
                        <tr><td>第2轮</td><td></td><td></td></tr>
                        <tr><td>第3轮</td><td></td><td></td></tr>
                        <tr><td rowspan="2">里程碑</td><td>第1轮</td><td></td><td></td></tr>
                        <tr><td>...</td><td></td><td></td></tr>
                    </tbody>
                </table>
            </div>
            <div>
                <h3>第三轮：达成共识或僵局（15分钟）</h3>
                <div class="target-box">
                    <strong>谈判结果：</strong><br>
                    <label><input type="checkbox"> 达成框架协议</label><br>
                    <label><input type="checkbox"> 达成部分共识，保留分歧</label><br>
                    <label><input type="checkbox"> 陷入僵局，暂停谈判</label>
                </div>
            </div>
        </div>
    </div>

    <div class="footer">
        <span>课程：出海BD实战：创新药License-out与国际化合作</span>
        <span>G5 谈判演练</span>
    </div>
</body>
</html>'''

with open("D:/新课开发/大健康/03 创新药出海与国际化BD/全流程练习题库/G5_谈判演练.html", "w", encoding="utf-8") as f:
    f.write(html)
print("G5 created")
