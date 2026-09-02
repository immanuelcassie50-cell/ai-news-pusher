import os

html = '''<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>F10 案例复盘卡</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;600;700&family=Inter+Tight:wght@400;500;600&display=swap" rel="stylesheet">
    <style>
        :root { --bg: #f5f0e6; --text: #2b2d42; --accent: #ef233c; --aux: #8d99ae; --header-bg: #2b2d42; }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Noto Serif SC', serif; background: var(--bg); color: var(--text); font-size: 9pt; line-height: 1.5; padding: 15mm; }
        @page { size: A4; margin: 0; }
        @media print { body { padding: 8mm; } .page-break { page-break-before: always; } }
        .header { background: var(--header-bg); color: white; padding: 10pt 14pt; margin: -15mm -15mm 12pt -15mm; display: flex; justify-content: space-between; align-items: center; }
        .header h1 { font-size: 14pt; font-weight: 700; }
        .header .tag { background: var(--accent); padding: 2pt 8pt; font-size: 7pt; font-family: 'Inter Tight', sans-serif; }
        .card { background: white; border-radius: 6pt; padding: 12pt; margin-bottom: 10pt; box-shadow: 0 2pt 4pt rgba(0,0,0,0.1); }
        .front-badge { position: absolute; top: 8pt; right: 8pt; background: var(--accent); color: white; padding: 3pt 8pt; font-size: 8pt; font-family: 'Inter Tight', sans-serif; border-radius: 3pt; }
        .back-badge { position: absolute; top: 8pt; right: 8pt; background: #28a745; color: white; padding: 3pt 8pt; font-size: 8pt; font-family: 'Inter Tight', sans-serif; border-radius: 3pt; }
        h2 { color: var(--header-bg); font-size: 10pt; font-weight: 700; margin: 10pt 0 6pt 0; padding-bottom: 3pt; border-bottom: 1.5pt solid var(--accent); display: flex; align-items: center; gap: 6pt; }
        h2 .num { background: var(--accent); color: white; width: 18pt; height: 18pt; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 9pt; }
        h3 { color: var(--text); font-size: 9pt; font-weight: 600; margin: 8pt 0 4pt 0; }
        table { width: 100%; border-collapse: collapse; font-size: 7pt; margin-bottom: 6pt; }
        th { background: #e8e8e8; color: var(--text); padding: 3pt 5pt; text-align: left; font-family: 'Inter Tight', sans-serif; font-weight: 600; font-size: 6pt; text-transform: uppercase; }
        td { padding: 3pt 5pt; border-bottom: 0.5pt solid #e0e0e0; vertical-align: top; }
        input[type="text"], textarea { width: 100%; border: none; border-bottom: 0.5pt dashed var(--aux); background: transparent; font-family: inherit; font-size: 7pt; padding: 1pt 0; }
        input:focus, textarea:focus { outline: none; border-bottom-color: var(--accent); }
        .meta-row { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8pt; margin-bottom: 8pt; }
        .meta-item { display: flex; flex-direction: column; gap: 2pt; }
        .meta-label { color: var(--aux); font-family: 'Inter Tight', sans-serif; font-size: 6pt; text-transform: uppercase; }
        .meta-value { border-bottom: 1pt solid var(--aux); padding: 2pt 0; font-weight: 600; font-size: 7pt; }
        .textarea { width: 100%; border: 0.5pt dashed var(--aux); background: #fafafa; font-family: inherit; font-size: 7pt; padding: 5pt; min-height: 50pt; resize: none; }
        .section-divider { border-top: 1pt dashed var(--aux); margin: 10pt 0; }
        .highlight-box { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 10pt 12pt; border-radius: 4pt; margin: 8pt 0; text-align: center; }
        .highlight-box .label { font-size: 7pt; opacity: 0.9; margin-bottom: 4pt; }
        .highlight-box .value { font-size: 12pt; font-weight: 700; }
        .mindset-box { background: #f8f9fa; border-left: 4pt solid var(--accent); padding: 8pt 10pt; margin: 6pt 0; }
        .mindset-box p { font-size: 8pt; margin: 2pt 0; }
        .footer { margin-top: 10pt; padding-top: 6pt; border-top: 1pt solid var(--aux); display: flex; justify-content: space-between; font-size: 6pt; color: var(--aux); font-family: 'Inter Tight', sans-serif; }
        .page-break { page-break-before: always; }
    </style>
</head>
<body>
    <div class="header">
        <h1>F10 案例复盘卡</h1>
        <span class="tag">A4 · 翻转使用 · 持续改进工具</span>
    </div>

    <div class="card" style="position:relative;">
        <div class="front-badge">正面</div>

        <h2><span class="num">1</span>交易基本信息</h2>
        <div class="meta-row">
            <div class="meta-item"><span class="meta-label">交易名称</span><div class="meta-value">________________</div></div>
            <div class="meta-item"><span class="meta-label">合作方</span><div class="meta-value">________________</div></div>
            <div class="meta-item"><span class="meta-label">签约日期</span><div class="meta-value">________________</div></div>
        </div>
        <div class="meta-row">
            <div class="meta-item"><span class="meta-label">签约金额</span><div class="meta-value">________________</div></div>
            <div class="meta-item"><span class="meta-label">填表人</span><div class="meta-value">________________</div></div>
            <div class="meta-item"><span class="meta-label">复盘日期</span><div class="meta-value">________________</div></div>
        </div>

        <div class="section-divider"></div>

        <h2><span class="num">2</span>这次交易做对了什么？</h2>
        <p style="font-size:7pt; color:var(--aux); margin-bottom:4pt; font-style:italic;">（保留好的做法）</p>
        <textarea class="textarea" placeholder="答：___________________________________________________________________"></textarea>

        <div class="section-divider"></div>

        <h2><span class="num">3</span>重来一次，会在哪里做不同的事？</h2>
        <p style="font-size:7pt; color:var(--aux); margin-bottom:4pt; font-style:italic;">（提炼改进点）</p>
        <textarea class="textarea" placeholder="答：___________________________________________________________________"></textarea>

        <div class="section-divider"></div>

        <h2><span class="num">4</span>下次遇到类似交易，第一步做什么？</h2>
        <p style="font-size:7pt; color:var(--aux); margin-bottom:4pt; font-style:italic;">（形成行动锚点）</p>
        <textarea class="textarea" placeholder="答：___________________________________________________________________"></textarea>
    </div>

    <div class="page-break"></div>

    <div class="card" style="position:relative;">
        <div class="back-badge">背面</div>

        <div class="highlight-box">
            <div class="label">复盘不是为了追究责任</div>
            <div class="value">而是为了下一次做得更好</div>
        </div>

        <div class="mindset-box">
            <p><strong>好的经验要保留</strong> → 这是你的核心竞争力</p>
            <p><strong>错的教训要提炼</strong> → 这是你下次进步的基础</p>
            <p><strong>行动的锚点要固化</strong> → 这是你快速响应的武器</p>
        </div>

        <div class="section-divider"></div>

        <h3>BD交易复盘维度</h3>
        <table>
            <thead><tr><th>复盘维度</th><th>关键问题</th></tr></thead>
            <tbody>
                <tr><td><strong>交易结构</strong></td><td>交易结构是否合理？条款设计是否实现双赢？</td></tr>
                <tr><td><strong>谈判过程</strong></td><td>谈判策略是否有效？哪些节点处理得好/不好？</td></tr>
                <tr><td><strong>尽职调查</strong></td><td>尽调准备是否充分？应对是否得当？</td></tr>
                <tr><td><strong>合作方评估</strong></td><td>合作方选择是否正确？适配度评估是否准确？</td></tr>
                <tr><td><strong>执行管理</strong></td><td>交易后管理是否到位？关系维护是否有效？</td></tr>
                <tr><td><strong>团队协作</strong></td><td>内部协作是否顺畅？决策机制是否高效？</td></tr>
            </tbody>
        </table>

        <div class="section-divider"></div>

        <h3>能力提升计划</h3>
        <table>
            <thead><tr><th>能力领域</th><th>当前(1-5)</th><th>目标(1-5)</th><th>提升行动</th><th>时间节点</th></tr></thead>
            <tbody>
                <tr><td>管线评估能力</td><td><input type="text" style="text-align:center;"></td><td><input type="text" style="text-align:center;"></td><td><input type="text"></td><td><input type="text"></td></tr>
                <tr><td>交易结构设计</td><td><input type="text" style="text-align:center;"></td><td><input type="text" style="text-align:center;"></td><td><input type="text"></td><td><input type="text"></td></tr>
                <tr><td>谈判技巧</td><td><input type="text" style="text-align:center;"></td><td><input type="text" style="text-align:center;"></td><td><input type="text"></td><td><input type="text"></td></tr>
                <tr><td>尽调应对</td><td><input type="text" style="text-align:center;"></td><td><input type="text" style="text-align:center;"></td><td><input type="text"></td><td><input type="text"></td></tr>
            </tbody>
        </table>

        <div class="section-divider"></div>

        <h3>本次交易学到的最重要的3件事</h3>
        <input type="text" placeholder="1. _______________________________________________________________" style="margin-bottom:3pt;">
        <input type="text" placeholder="2. _______________________________________________________________" style="margin-bottom:3pt;">
        <input type="text" placeholder="3. _______________________________________________________________">

        <div class="footer">
            <span>复盘人：________________</span>
            <span>参与人员：________________</span>
        </div>
    </div>
</body>
</html>'''

with open("D:/新课开发/大健康/03 创新药出海与国际化BD/全流程工具表单/F10_案例复盘卡.html", "w", encoding="utf-8") as f:
    f.write(html)
print("F10 created")
