import os

html = '''<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>F6 谈判准备卡</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;600;700&family=Inter+Tight:wght@400;500;600&display=swap" rel="stylesheet">
    <style>
        :root { --bg: #f5f0e6; --text: #2b2d42; --accent: #ef233c; --aux: #8d99ae; --header-bg: #2b2d42; }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Noto Serif SC', serif; background: var(--bg); color: var(--text); font-size: 8pt; line-height: 1.5; padding: 15mm; }
        @page { size: A4; margin: 0; }
        @media print { body { padding: 8mm; } }
        .card { background: white; border-radius: 6pt; padding: 12pt; margin-bottom: 10pt; box-shadow: 0 2pt 4pt rgba(0,0,0,0.1); }
        .header { background: var(--header-bg); color: white; padding: 10pt 14pt; margin: -15mm -15mm 12pt -15mm; display: flex; justify-content: space-between; align-items: center; }
        .header h1 { font-size: 14pt; font-weight: 700; }
        .header .tag { background: var(--accent); padding: 2pt 8pt; font-size: 7pt; font-family: 'Inter Tight', sans-serif; }
        .front-badge { position: absolute; top: 8pt; right: 8pt; background: var(--accent); color: white; padding: 3pt 8pt; font-size: 8pt; font-family: 'Inter Tight', sans-serif; border-radius: 3pt; }
        .back-badge { position: absolute; top: 8pt; right: 8pt; background: #28a745; color: white; padding: 3pt 8pt; font-size: 8pt; font-family: 'Inter Tight', sans-serif; border-radius: 3pt; }
        h2 { color: var(--header-bg); font-size: 10pt; font-weight: 700; margin: 10pt 0 6pt 0; padding-bottom: 3pt; border-bottom: 1.5pt solid var(--accent); display: flex; align-items: center; gap: 6pt; }
        h2 .num { background: var(--accent); color: white; width: 16pt; height: 16pt; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 8pt; }
        table { width: 100%; border-collapse: collapse; font-size: 7pt; margin-bottom: 6pt; }
        th { background: #e8e8e8; color: var(--text); padding: 3pt 5pt; text-align: left; font-family: 'Inter Tight', sans-serif; font-weight: 600; font-size: 6pt; text-transform: uppercase; }
        td { padding: 3pt 5pt; border-bottom: 0.5pt solid #e0e0e0; vertical-align: top; }
        input[type="text"] { width: 100%; border: none; border-bottom: 0.5pt dashed var(--aux); background: transparent; font-family: inherit; font-size: 7pt; padding: 1pt 0; }
        input:focus { outline: none; border-bottom-color: var(--accent); }
        .checkbox { width: 9pt; height: 9pt; accent-color: var(--accent); }
        .textarea { width: 100%; border: 0.5pt dashed var(--aux); background: #fafafa; font-family: inherit; font-size: 7pt; padding: 4pt; min-height: 40pt; resize: none; }
        .meta-row { display: grid; grid-template-columns: repeat(4, 1fr); gap: 8pt; margin-bottom: 8pt; }
        .meta-item { display: flex; flex-direction: column; gap: 2pt; }
        .meta-label { color: var(--aux); font-family: 'Inter Tight', sans-serif; font-size: 6pt; text-transform: uppercase; }
        .meta-value { border-bottom: 1pt solid var(--aux); padding: 2pt 0; font-weight: 600; font-size: 7pt; }
        .section-divider { border-top: 1pt dashed var(--aux); margin: 10pt 0; }
        .highlight-box { background: linear-gradient(135deg, var(--header-bg) 0%, #3d4159 100%); color: white; padding: 8pt 10pt; border-radius: 4pt; margin: 8pt 0; }
        .highlight-box .label { font-size: 6pt; opacity: 0.8; font-family: 'Inter Tight', sans-serif; text-transform: uppercase; }
        .highlight-box .value { font-size: 11pt; font-weight: 700; margin-top: 2pt; }
        .footer { margin-top: 10pt; padding-top: 6pt; border-top: 1pt solid var(--aux); display: flex; justify-content: space-between; font-size: 6pt; color: var(--aux); font-family: 'Inter Tight', sans-serif; }
        .page-break { page-break-before: always; }
    </style>
</head>
<body>
    <div class="header">
        <h1>F6 谈判准备卡</h1>
        <span class="tag">A4 · 翻转使用 · 谈判战前必读</span>
    </div>

    <div class="card" style="position:relative;">
        <div class="front-badge">正面</div>
        <h2><span class="num">1</span>谈判基本信息</h2>
        <div class="meta-row">
            <div class="meta-item"><span class="meta-label">谈判对手</span><div class="meta-value">________________</div></div>
            <div class="meta-item"><span class="meta-label">谈判日期</span><div class="meta-value">________________</div></div>
            <div class="meta-item"><span class="meta-label">谈判主题</span><div class="meta-value">________________</div></div>
            <div class="meta-item"><span class="meta-label">我方主谈人</span><div class="meta-value">________________</div></div>
        </div>

        <h2><span class="num">2</span>谈判目标设定</h2>
        <div style="margin-bottom:6pt;">
            <label style="font-size:7pt; color:var(--aux); font-family:'Inter Tight',sans-serif;">理想目标（最优期望）</label>
            <textarea class="textarea"></textarea>
        </div>
        <div style="margin-bottom:6pt;">
            <label style="font-size:7pt; color:var(--aux); font-family:'Inter Tight',sans-serif;">现实目标（合理期望）</label>
            <textarea class="textarea"></textarea>
        </div>
        <div>
            <label style="font-size:7pt; color:var(--aux); font-family:'Inter Tight',sans-serif;">底线目标（可接受下限）</label>
            <textarea class="textarea" style="border-color: var(--accent);"></textarea>
        </div>

        <div class="section-divider"></div>

        <h2><span class="num">3</span>我方核心利益排序</h2>
        <table>
            <thead><tr><th>#</th><th>核心利益</th><th>重要程度(1-5)</th><th>备注</th></tr></thead>
            <tbody>
                <tr><td>1</td><td><input type="text"></td><td><input type="text" style="text-align:center;"></td><td><input type="text"></td></tr>
                <tr><td>2</td><td><input type="text"></td><td><input type="text" style="text-align:center;"></td><td><input type="text"></td></tr>
                <tr><td>3</td><td><input type="text"></td><td><input type="text" style="text-align:center;"></td><td><input type="text"></td></tr>
                <tr><td>4</td><td><input type="text"></td><td><input type="text" style="text-align:center;"></td><td><input type="text"></td></tr>
            </tbody>
        </table>

        <h2><span class="num">4</span>谈判策略选择</h2>
        <div style="display:grid; grid-template-columns: repeat(2, 1fr); gap: 6pt;">
            <div style="display:flex; align-items:center; gap:5pt; padding:5pt; background:#f5f5f5; border-radius:3pt;">
                <input type="checkbox" class="checkbox">
                <div><strong style="font-size:7pt;">硬球策略</strong><br><span style="font-size:6pt; color:var(--aux);">实力悬殊、一次性交易</span></div>
            </div>
            <div style="display:flex; align-items:center; gap:5pt; padding:5pt; background:#f5f5f5; border-radius:3pt;">
                <input type="checkbox" class="checkbox">
                <div><strong style="font-size:7pt;">软球策略</strong><br><span style="font-size:6pt; color:var(--aux);">长期合作、关系导向</span></div>
            </div>
            <div style="display:flex; align-items:center; gap:5pt; padding:5pt; background:#fff3cd; border-radius:3pt; border: 1pt solid #ffd700;">
                <input type="checkbox" class="checkbox" checked>
                <div><strong style="font-size:7pt;">原则性谈判</strong><br><span style="font-size:6pt; color:var(--aux);">双方平等、追求双赢</span></div>
            </div>
            <div style="display:flex; align-items:center; gap:5pt; padding:5pt; background:#f5f5f5; border-radius:3pt;">
                <input type="checkbox" class="checkbox">
                <div><strong style="font-size:7pt;">情境谈判</strong><br><span style="font-size:6pt; color:var(--aux);">根据对手反应动态调整</span></div>
            </div>
        </div>
    </div>

    <div class="page-break"></div>

    <div class="card" style="position:relative;">
        <div class="back-badge">背面</div>
        <h2><span class="num">5</span>可接受范围与BATNA</h2>
        <table>
            <thead><tr><th>条款类型</th><th>理想值</th><th>底线值</th><th>我方弹性</th></tr></thead>
            <tbody>
                <tr><td><strong>首付款</strong></td><td><input type="text"></td><td><input type="text"></td><td><input type="text"></td></tr>
                <tr><td><strong>里程碑总额</strong></td><td><input type="text"></td><td><input type="text"></td><td><input type="text"></td></tr>
                <tr><td><strong>Royalty率</strong></td><td><input type="text"></td><td><input type="text"></td><td><input type="text"></td></tr>
                <tr><td><strong>许可范围</strong></td><td><input type="text"></td><td><input type="text"></td><td><input type="text"></td></tr>
            </tbody>
        </table>

        <div class="highlight-box">
            <div class="label">BATNA — 最佳替代方案</div>
            <div class="value">如果没有达成协议，我方的替代方案是什么？</div>
        </div>
        <textarea class="textarea" style="min-height:35pt;"></textarea>

        <div class="section-divider"></div>

        <h2><span class="num">6</span>对方可能的谈判路径</h2>
        <table>
            <thead><tr><th>对方预期策略</th><th>我方应对预案</th></tr></thead>
            <tbody>
                <tr><td><input type="text" placeholder="策略1"></td><td><input type="text"></td></tr>
                <tr><td><input type="text" placeholder="策略2"></td><td><input type="text"></td></tr>
            </tbody>
        </table>

        <h2><span class="num">7</span>谈判筹码分析</h2>
        <table>
            <thead><tr><th>我方筹码</th><th>对方可能看重的价值</th><th>强度(1-5)</th></tr></thead>
            <tbody>
                <tr><td><input type="text"></td><td><input type="text"></td><td><input type="text" style="text-align:center;"></td></tr>
                <tr><td><input type="text"></td><td><input type="text"></td><td><input type="text" style="text-align:center;"></td></tr>
            </tbody>
        </table>

        <div class="section-divider"></div>

        <h2><span class="num">8</span>谈判风险预案</h2>
        <table>
            <thead><tr><th>风险情境</th><th>可能性</th><th>我方应对</th></tr></thead>
            <tbody>
                <tr><td>对话破裂</td><td><span style="color:#dc3545;">高</span>/中/低</td><td><input type="text"></td></tr>
                <tr><td>价格分歧过大</td><td>高/<span style="color:#fd7e14;">中</span>/低</td><td><input type="text"></td></tr>
                <tr><td>对方压价过狠</td><td>高/中/<span style="color:#28a745;">低</span></td><td><input type="text"></td></tr>
            </tbody>
        </table>

        <div class="footer">
            <span>填表人：________________</span>
            <span>日期：________________</span>
        </div>
    </div>
</body>
</html>'''

with open("D:/新课开发/大健康/03 创新药出海与国际化BD/全流程工具表单/F6_谈判准备卡.html", "w", encoding="utf-8") as f:
    f.write(html)
print("F6 created")
