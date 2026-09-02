import os

html = '''<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>F7 条款优先级矩阵</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;600;700&family=Inter+Tight:wght@400;500;600&display=swap" rel="stylesheet">
    <style>
        :root { --bg: #f5f0e6; --text: #2b2d42; --accent: #ef233c; --aux: #8d99ae; --header-bg: #2b2d42; }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Noto Serif SC', serif; background: var(--bg); color: var(--text); font-size: 7.5pt; line-height: 1.4; padding: 16mm; }
        @page { size: A4; margin: 0; }
        @media print { body { padding: 10mm; } }
        .header { background: var(--header-bg); color: white; padding: 9pt 14pt; margin: -16mm -16mm 10pt -16mm; display: flex; justify-content: space-between; align-items: center; }
        .header h1 { font-size: 13pt; font-weight: 700; }
        .header .tag { background: var(--accent); padding: 2pt 8pt; font-size: 7pt; font-family: 'Inter Tight', sans-serif; }
        .meta { display: grid; grid-template-columns: repeat(3, 1fr); gap: 6pt; margin-bottom: 10pt; padding: 7pt; background: white; border-radius: 4pt; font-size: 7pt; }
        .meta-item { display: flex; flex-direction: column; gap: 2pt; }
        .meta-label { color: var(--aux); font-family: 'Inter Tight', sans-serif; font-size: 6pt; text-transform: uppercase; }
        .meta-value { border-bottom: 1pt solid var(--aux); padding: 2pt 0; font-weight: 600; }
        h2 { color: var(--header-bg); font-size: 9pt; font-weight: 700; margin: 8pt 0 5pt 0; padding-bottom: 2pt; border-bottom: 2pt solid var(--accent); }
        .section-box { background: white; border-radius: 4pt; padding: 7pt; margin-bottom: 7pt; box-shadow: 0 1pt 2pt rgba(0,0,0,0.08); }
        table { width: 100%; border-collapse: collapse; font-size: 6.5pt; margin-bottom: 5pt; }
        th { background: var(--header-bg); color: white; padding: 3pt 4pt; text-align: left; font-family: 'Inter Tight', sans-serif; font-weight: 600; font-size: 5.5pt; text-transform: uppercase; }
        td { padding: 3pt 4pt; border-bottom: 0.5pt solid #e0e0e0; vertical-align: middle; }
        tr:nth-child(even) td { background: #fafafa; }
        input[type="text"], textarea { width: 100%; border: none; border-bottom: 0.5pt dashed var(--aux); background: transparent; font-family: inherit; font-size: 6pt; padding: 1pt 0; }
        input:focus, textarea:focus { outline: none; border-bottom-color: var(--accent); }
        .checkbox { width: 9pt; height: 9pt; accent-color: var(--accent); }
        .priority-high { background: #dc3545; color: white; padding: 2pt 6pt; border-radius: 2pt; font-size: 6pt; font-family: 'Inter Tight', sans-serif; }
        .priority-med { background: #fd7e14; color: white; padding: 2pt 6pt; border-radius: 2pt; font-size: 6pt; font-family: 'Inter Tight', sans-serif; }
        .priority-low { background: #28a745; color: white; padding: 2pt 6pt; border-radius: 2pt; font-size: 6pt; font-family: 'Inter Tight', sans-serif; }
        .scheme-box { border: 1.5pt solid var(--header-bg); border-radius: 4pt; padding: 6pt; margin-bottom: 5pt; }
        .scheme-box h3 { font-size: 8pt; color: var(--header-bg); margin: 0 0 4pt 0; }
        .scheme-box.highlight { border-color: var(--accent); background: #fff8f8; }
        .redline { border-left: 3pt solid #dc3545; padding-left: 6pt; margin: 4pt 0; }
        .warning { border-left: 3pt solid #fd7e14; padding-left: 6pt; margin: 4pt 0; }
        .footer { margin-top: 10pt; padding-top: 6pt; border-top: 1pt solid var(--aux); display: flex; justify-content: space-between; font-size: 6pt; color: var(--aux); font-family: 'Inter Tight', sans-serif; }
    </style>
</head>
<body>
    <div class="header">
        <h1>F7 条款优先级矩阵</h1>
        <span class="tag">A4 · 条款博弈导航</span>
    </div>

    <div class="meta">
        <div class="meta-item"><span class="meta-label">管线名称</span><div class="meta-value">________________</div></div>
        <div class="meta-item"><span class="meta-label">交易对手</span><div class="meta-value">________________</div></div>
        <div class="meta-item"><span class="meta-label">分析日期</span><div class="meta-value">________________</div></div>
    </div>

    <h2>核心条款重要性评估</h2>
    <div class="section-box">
        <table>
            <thead>
                <tr><th>条款类型</th><th>我方立场</th><th>对方可能立场</th><th>重要性</th><th>争议可能性</th></tr>
            </thead>
            <tbody>
                <tr><td><strong>首付款金额</strong></td><td><input type="text" placeholder="我方期望"></td><td><input type="text" placeholder="对方可能"></td><td><input type="text" style="text-align:center;"></td><td>高/中/低</td></tr>
                <tr><td><strong>里程碑款项总额</strong></td><td><input type="text"></td><td><input type="text"></td><td><input type="text" style="text-align:center;"></td><td>高/中/低</td></tr>
                <tr><td><strong>Royalty率</strong></td><td><input type="text"></td><td><input type="text"></td><td><input type="text" style="text-align:center;"></td><td>高/中/低</td></tr>
                <tr><td><strong>许可范围（地域）</strong></td><td><input type="text"></td><td><input type="text"></td><td><input type="text" style="text-align:center;"></td><td>高/中/低</td></tr>
                <tr><td><strong>许可范围（适应症）</strong></td><td><input type="text"></td><td><input type="text"></td><td><input type="text" style="text-align:center;"></td><td>高/中/低</td></tr>
                <tr><td><strong>独占性条款</strong></td><td><input type="text"></td><td><input type="text"></td><td><input type="text" style="text-align:center;"></td><td>高/中/低</td></tr>
                <tr><td><strong>研发控制权</strong></td><td><input type="text"></td><td><input type="text"></td><td><input type="text" style="text-align:center;"></td><td>高/中/低</td></tr>
                <tr><td><strong>知识产权归属</strong></td><td><input type="text"></td><td><input type="text"></td><td><input type="text" style="text-align:center;"></td><td>高/中/低</td></tr>
                <tr><td><strong>改进药归属</strong></td><td><input type="text"></td><td><input type="text"></td><td><input type="text" style="text-align:center;"></td><td>高/中/低</td></tr>
                <tr><td><strong>竞业限制</strong></td><td><input type="text"></td><td><input type="text"></td><td><input type="text" style="text-align:center;"></td><td>高/中/低</td></tr>
                <tr><td><strong>终止条款</strong></td><td><input type="text"></td><td><input type="text"></td><td><input type="text" style="text-align:center;"></td><td>高/中/低</td></tr>
            </tbody>
        </table>
    </div>

    <h2>谈判优先级排序</h2>
    <div class="section-box">
        <div class="scheme-box highlight">
            <h3><span class="priority-high">第一优先级</span> — 必须争取</h3>
            <table>
                <thead><tr><th>条款</th><th>我方目标</th><th>让步底线</th><th>谈判策略</th></tr></thead>
                <tbody>
                    <tr><td><input type="text"></td><td><input type="text"></td><td><input type="text"></td><td><input type="text"></td></tr>
                    <tr><td><input type="text"></td><td><input type="text"></td><td><input type="text"></td><td><input type="text"></td></tr>
                </tbody>
            </table>
        </div>
        <div class="scheme-box">
            <h3><span class="priority-med">第二优先级</span> — 尽量争取</h3>
            <table>
                <thead><tr><th>条款</th><th>我方目标</th><th>让步底线</th><th>谈判策略</th></tr></thead>
                <tbody>
                    <tr><td><input type="text"></td><td><input type="text"></td><td><input type="text"></td><td><input type="text"></td></tr>
                    <tr><td><input type="text"></td><td><input type="text"></td><td><input type="text"></td><td><input type="text"></td></tr>
                </tbody>
            </table>
        </div>
        <div class="scheme-box">
            <h3><span class="priority-low">第三优先级</span> — 可以灵活</h3>
            <table>
                <thead><tr><th>条款</th><th>我方目标</th><th>让步底线</th><th>谈判策略</th></tr></thead>
                <tbody>
                    <tr><td><input type="text"></td><td><input type="text"></td><td><input type="text"></td><td><input type="text"></td></tr>
                    <tr><td><input type="text"></td><td><input type="text"></td><td><input type="text"></td><td><input type="text"></td></tr>
                </tbody>
            </table>
        </div>
    </div>

    <h2>让步空间分析</h2>
    <div class="section-box">
        <table>
            <thead><tr><th>我方让步空间</th><th>可接受范围</th><th>让步代价</th><th>交换价值</th></tr></thead>
            <tbody>
                <tr><td><strong>首付款</strong></td><td><input type="text" placeholder="_____至_____"></td><td><input type="text"></td><td><input type="text"></td></tr>
                <tr><td><strong>里程碑</strong></td><td><input type="text" placeholder="_____至_____"></td><td><input type="text"></td><td><input type="text"></td></tr>
                <tr><td><strong>Royalty率</strong></td><td><input type="text" placeholder="_____至_____"></td><td><input type="text"></td><td><input type="text"></td></tr>
                <tr><td><strong>许可地域</strong></td><td><input type="text" placeholder="扩大/缩小"></td><td><input type="text"></td><td><input type="text"></td></tr>
            </tbody>
        </table>
        <div style="margin-top:5pt;">
            <label style="font-size:6pt; color:var(--aux); font-family:'Inter Tight',sans-serif;">如果我方让步，希望对方回报：</label>
            <input type="text" style="margin-top:2pt;">
        </div>
    </div>

    <div style="display:grid; grid-template-columns: 1fr 1fr; gap: 8pt;">
        <div class="section-box">
            <h2 style="margin-top:0;">红线清单</h2>
            <div class="redline">
                <strong style="font-size:7pt;">绝对红线（不可逾越）</strong>
                <table style="margin-top:4pt;">
                    <thead><tr><th>条款</th><th>底线</th></tr></thead>
                    <tbody>
                        <tr><td><input type="text" placeholder="条款名"></td><td><input type="text"></td></tr>
                        <tr><td><input type="text" placeholder="条款名"></td><td><input type="text"></td></tr>
                    </tbody>
                </table>
            </div>
            <div class="warning" style="margin-top:6pt;">
                <strong style="font-size:7pt;">警示线（谨慎跨越）</strong>
                <table style="margin-top:4pt;">
                    <thead><tr><th>条款</th><th>预警标准</th></tr></thead>
                    <tbody>
                        <tr><td><input type="text" placeholder="条款名"></td><td><input type="text"></td></tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="section-box">
            <h2 style="margin-top:0;">条款组合方案</h2>
            <div class="scheme-box highlight">
                <h3>方案A：进取型</h3>
                <div style="font-size:6pt; color:var(--aux);">高首付 + 低里程碑</div>
                <div style="margin-top:4pt;"><input type="text" placeholder="首付款："></div>
                <div><input type="text" placeholder="里程碑："></div>
            </div>
            <div class="scheme-box">
                <h3>方案B：平衡型</h3>
                <div style="font-size:6pt; color:var(--aux);">中首付 + 中里程碑</div>
                <div style="margin-top:4pt;"><input type="text" placeholder="首付款："></div>
                <div><input type="text" placeholder="里程碑："></div>
            </div>
        </div>
    </div>

    <div class="footer">
        <span>填表人：________________</span>
        <span>日期：________________</span>
        <span>版本：v1.0</span>
    </div>
</body>
</html>'''

with open("D:/新课开发/大健康/03 创新药出海与国际化BD/全流程工具表单/F7_条款优先级矩阵.html", "w", encoding="utf-8") as f:
    f.write(html)
print("F7 created")
