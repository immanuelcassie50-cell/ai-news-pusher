import os

html = '''<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>G3 交易结构设计练习</title>
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
        .two-col { display: grid; grid-template-columns: 1.2fr 1fr; gap: 10pt; }
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
        .result-box { background: linear-gradient(135deg, var(--header-bg) 0%, #3d4159 100%); color: white; padding: 8pt 10pt; border-radius: 4pt; margin: 8pt 0; text-align: center; }
        .result-box .label { font-size: 6pt; opacity: 0.8; font-family: 'Inter Tight', sans-serif; text-transform: uppercase; }
        .result-box .value { font-size: 16pt; font-weight: 700; }
        .info-box { background: #f8f9fa; border-left: 3pt solid var(--accent); padding: 6pt 8pt; margin: 6pt 0; font-size: 7.5pt; }
        .scheme-a { border: 2pt solid #667eea; border-radius: 4pt; padding: 8pt; margin: 6pt 0; background: #f8f5ff; }
        .scheme-b { border: 2pt solid #28a745; border-radius: 4pt; padding: 8pt; margin: 6pt 0; background: #f0fff4; }
        .scheme-c { border: 2pt solid #fd7e14; border-radius: 4pt; padding: 8pt; margin: 6pt 0; background: #fffaf0; }
        .scheme-tag { display: inline-block; padding: 2pt 8pt; border-radius: 3pt; font-size: 7pt; font-weight: 600; margin-bottom: 4pt; }
        .checkbox-group { display: flex; gap: 8pt; margin: 4pt 0; }
        .checkbox-item { display: flex; align-items: center; gap: 3pt; font-size: 7.5pt; }
        input[type="checkbox"] { width: 10pt; height: 10pt; accent-color: var(--accent); }
        .footer { margin-top: 12pt; padding-top: 8pt; border-top: 1pt solid var(--aux); display: flex; justify-content: space-between; font-size: 6.5pt; color: var(--aux); font-family: 'Inter Tight', sans-serif; }
    </style>
</head>
<body>
    <div class="header">
        <h1>G3 交易结构设计练习 — 设计HA-001的License-out交易结构</h1>
        <div class="meta">
            <span>建议用时：45-60分钟</span>
            <span>题目数量：1个设计任务</span>
            <span>练习方式：小组设计 + 方案汇报</span>
        </div>
    </div>

    <div class="two-col">
        <div class="card">
            <h2><span class="num">1</span>谈判背景与双方期望</h2>

            <div style="display:grid; grid-template-columns: 1fr 1fr; gap: 8pt;">
                <div class="info-box">
                    <strong>管线信息</strong><br>
                    HA-001（PD-L1/TGF-β双抗）<br>
                    Phase II完成，PoC已验证<br>
                    ORR 45%，mPFS 12.5个月<br>
                    参考估值：3-5亿美元
                </div>
                <div class="info-box" style="background:#fff3cd;">
                    <strong>GlobalPharma报价</strong><br>
                    首付款：1500万美元<br>
                    里程碑：1.5亿美元<br>
                    Royalty：8%
                </div>
            </div>

            <h3>任务一：首付款设计</h3>
            <table>
                <thead><tr><th>设计要素</th><th>你的方案</th><th>设计依据</th></tr></thead>
                <tbody>
                    <tr><td><strong>首付款金额</strong></td><td><input type="text" placeholder="______万美元"></td><td><input type="text"></td></tr>
                    <tr><td><strong>占总交易额比例</strong></td><td><input type="text" placeholder="______%"></td><td>参考：8-15%</td></tr>
                </tbody>
            </table>

            <h3>任务二：里程碑设计</h3>
            <table>
                <thead><tr><th>里程碑类型</th><th>里程碑事件</th><th>金额（万美元）</th><th>设计依据</th></tr></thead>
                <tbody>
                    <tr><td rowspan="4"><strong>研发里程碑</strong></td><td>Phase III入组</td><td><input type="text" style="width:50pt;"></td><td rowspan="4"><input type="text" style="width:60pt;"></td></tr>
                    <tr><td>Phase III完成</td><td><input type="text" style="width:50pt;"></td></tr>
                    <tr><td>NDA/BLA申报</td><td><input type="text" style="width:50pt;"></td></tr>
                    <tr><td>NDA/BLA获批</td><td><input type="text" style="width:50pt;"></td></tr>
                    <tr><td rowspan="2"><strong>销售里程碑</strong></td><td>年销售达1亿美元</td><td><input type="text" style="width:50pt;"></td><td rowspan="2"><input type="text" style="width:60pt;"></td></tr>
                    <tr><td>年销售达5亿美元</td><td><input type="text" style="width:50pt;"></td></tr>
                </tbody>
            </table>
            <div style="text-align:right; font-size:7.5pt;">
                <strong>里程碑总计：</strong><input type="text" placeholder="______万" style="width:70pt;"> 万美元
            </div>

            <h3>任务三：Royalty设计</h3>
            <table>
                <thead><tr><th>设计要素</th><th>你的方案</th><th>参考区间</th></tr></thead>
                <tbody>
                    <tr><td><strong>Royalty率</strong></td><td><input type="text" placeholder="______%"></td><td>8-12%</td></tr>
                    <tr><td><strong>递进结构</strong></td><td><label class="checkbox-item"><input type="checkbox"> 是</label> <label class="checkbox-item"><input type="checkbox"> 否</label></td><td>阶梯递增</td></tr>
                    <tr><td><strong>专利到期递减</strong></td><td><label class="checkbox-item"><input type="checkbox"> 是</label> <label class="checkbox-item"><input type="checkbox"> 否</label></td><td>降至1-2%</td></tr>
                </tbody>
            </table>
        </div>

        <div class="card">
            <h2><span class="num">2</span>三个交易方案设计</h2>

            <div class="scheme-a">
                <span class="scheme-tag" style="background:#667eea; color:white;">方案A：进取型</span>
                <table>
                    <thead><tr><th>条款</th><th>设定值</th><th>策略说明</th></tr></thead>
                    <tbody>
                        <tr><td>首付款</td><td><input type="text" placeholder="______万" style="width:55pt;"></td><td><input type="text" style="width:80pt;"></td></tr>
                        <tr><td>里程碑</td><td><input type="text" placeholder="______万" style="width:55pt;"></td><td><input type="text" style="width:80pt;"></td></tr>
                        <tr><td>Royalty</td><td><input type="text" placeholder="______%" style="width:55pt;"></td><td><input type="text" style="width:80pt;"></td></tr>
                        <tr><td colspan="2"><strong>总交易价值：</strong><input type="text" placeholder="______万" style="width:60pt;"></td><td></td></tr>
                    </tbody>
                </table>
                <strong>适用场景：</strong><input type="text" placeholder="________________________________">
            </div>

            <div class="scheme-b">
                <span class="scheme-tag" style="background:#28a745; color:white;">方案B：平衡型</span>
                <table>
                    <thead><tr><th>条款</th><th>设定值</th><th>策略说明</th></tr></thead>
                    <tbody>
                        <tr><td>首付款</td><td><input type="text" placeholder="______万" style="width:55pt;"></td><td><input type="text" style="width:80pt;"></td></tr>
                        <tr><td>里程碑</td><td><input type="text" placeholder="______万" style="width:55pt;"></td><td><input type="text" style="width:80pt;"></td></tr>
                        <tr><td>Royalty</td><td><input type="text" placeholder="______%" style="width:55pt;"></td><td><input type="text" style="width:80pt;"></td></tr>
                        <tr><td colspan="2"><strong>总交易价值：</strong><input type="text" placeholder="______万" style="width:60pt;"></td><td></td></tr>
                    </tbody>
                </table>
                <strong>适用场景：</strong><input type="text" placeholder="________________________________">
            </div>

            <div class="scheme-c">
                <span class="scheme-tag" style="background:#fd7e14; color:white;">方案C：保守型</span>
                <table>
                    <thead><tr><th>条款</th><th>设定值</th><th>策略说明</th></tr></thead>
                    <tbody>
                        <tr><td>首付款</td><td><input type="text" placeholder="______万" style="width:55pt;"></td><td><input type="text" style="width:80pt;"></td></tr>
                        <tr><td>里程碑</td><td><input type="text" placeholder="______万" style="width:55pt;"></td><td><input type="text" style="width:80pt;"></td></tr>
                        <tr><td>Royalty</td><td><input type="text" placeholder="______%" style="width:55pt;"></td><td><input type="text" style="width:80pt;"></td></tr>
                        <tr><td colspan="2"><strong>总交易价值：</strong><input type="text" placeholder="______万" style="width:60pt;"></td><td></td></tr>
                    </tbody>
                </table>
                <strong>适用场景：</strong><input type="text" placeholder="________________________________">
            </div>
        </div>
    </div>

    <div class="card" style="margin-top:10pt;">
        <h2 style="border-bottom-color:#667eea;"><span class="num" style="background:#667eea;">3</span>评估问题与互评</h2>
        <div style="display:grid; grid-template-columns: 1fr 1fr 1fr; gap: 10pt;">
            <div class="info-box">
                <strong>问题一：首付款vs里程碑的权衡</strong><br>
                在资金压力下，是否应该接受较低首付款换取更高里程碑？为什么？
                <textarea placeholder="讨论记录：__________________________"></textarea>
            </div>
            <div class="info-box">
                <strong>问题二：Royalty率的合理区间</strong><br>
                12%的Royalty率是否合理？如何确定合理的Royalty区间？
                <textarea placeholder="讨论记录：__________________________"></textarea>
            </div>
            <div class="info-box">
                <strong>问题三：条款组合的逻辑</strong><br>
                不同的首付款/里程碑/Royalty组合反映的是什么？
                <textarea placeholder="讨论记录：__________________________"></textarea>
            </div>
        </div>

        <h3 style="margin-top:10pt;">小组互评维度</h3>
        <table>
            <thead><tr><th>评估维度</th><th>权重</th><th>第1组</th><th>第2组</th><th>第3组</th><th>第4组</th></tr></thead>
            <tbody>
                <tr><td><strong>价值实现度</strong></td><td>30%</td><td></td><td></td><td></td><td></td></tr>
                <tr><td><strong>风险分担</strong></td><td>25%</td><td></td><td></td><td></td><td></td></tr>
                <tr><td><strong>激励相容</strong></td><td>25%</td><td></td><td></td><td></td><td></td></tr>
                <tr><td><strong>可执行性</strong></td><td>20%</td><td></td><td></td><td></td><td></td></tr>
            </tbody>
        </table>
    </div>

    <div class="footer">
        <span>课程：出海BD实战：创新药License-out与国际化合作</span>
        <span>G3 交易结构设计练习</span>
    </div>
</body>
</html>'''

with open("D:/新课开发/大健康/03 创新药出海与国际化BD/全流程练习题库/G3_交易结构设计练习.html", "w", encoding="utf-8") as f:
    f.write(html)
print("G3 created")
