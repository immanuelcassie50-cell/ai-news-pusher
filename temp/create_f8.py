import os

html = '''<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>F8 合作评估检查表</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;600;700&family=Inter+Tight:wght@400;500;600&display=swap" rel="stylesheet">
    <style>
        :root { --bg: #f5f0e6; --text: #2b2d42; --accent: #ef233c; --aux: #8d99ae; --header-bg: #2b2d42; }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Noto Serif SC', serif; background: var(--bg); color: var(--text); font-size: 8pt; line-height: 1.4; padding: 18mm; }
        @page { size: A4; margin: 0; }
        @media print { body { padding: 10mm; } }
        .header { background: var(--header-bg); color: white; padding: 10pt 14pt; margin: -18mm -18mm 10pt -18mm; display: flex; justify-content: space-between; align-items: center; }
        .header h1 { font-size: 13pt; font-weight: 700; }
        .header .tag { background: var(--accent); padding: 2pt 8pt; font-size: 7pt; font-family: 'Inter Tight', sans-serif; }
        .meta { display: grid; grid-template-columns: repeat(4, 1fr); gap: 6pt; margin-bottom: 10pt; padding: 7pt; background: white; border-radius: 4pt; font-size: 7pt; }
        .meta-item { display: flex; flex-direction: column; gap: 2pt; }
        .meta-label { color: var(--aux); font-family: 'Inter Tight', sans-serif; font-size: 6pt; text-transform: uppercase; }
        .meta-value { border-bottom: 1pt solid var(--aux); padding: 2pt 0; font-weight: 600; }
        h2 { color: var(--header-bg); font-size: 9pt; font-weight: 700; margin: 10pt 0 5pt 0; padding-bottom: 2pt; border-bottom: 2pt solid var(--accent); }
        h3 { color: var(--text); font-size: 7.5pt; font-weight: 600; margin: 6pt 0 4pt 0; }
        .section-box { background: white; border-radius: 4pt; padding: 7pt; margin-bottom: 7pt; box-shadow: 0 1pt 2pt rgba(0,0,0,0.08); }
        table { width: 100%; border-collapse: collapse; font-size: 6.5pt; margin-bottom: 5pt; }
        th { background: var(--header-bg); color: white; padding: 3pt 4pt; text-align: left; font-family: 'Inter Tight', sans-serif; font-weight: 600; font-size: 6pt; text-transform: uppercase; }
        td { padding: 3pt 4pt; border-bottom: 0.5pt solid #e0e0e0; vertical-align: middle; }
        tr:nth-child(even) td { background: #fafafa; }
        input[type="text"] { width: 100%; border: none; border-bottom: 0.5pt dashed var(--aux); background: transparent; font-family: inherit; font-size: 6pt; padding: 1pt 0; }
        input:focus { outline: none; border-bottom-color: var(--accent); }
        .score { width: 25pt; text-align: center; font-weight: 600; color: var(--header-bg); }
        .risk-h { color: #dc3545; font-weight: 600; }
        .risk-m { color: #fd7e14; }
        .risk-l { color: #28a745; }
        .adapt-high { background: #d4edda; color: #155724; padding: 2pt 6pt; border-radius: 2pt; font-size: 6pt; }
        .adapt-med { background: #fff3cd; color: #856404; padding: 2pt 6pt; border-radius: 2pt; font-size: 6pt; }
        .adapt-low { background: #f8d7da; color: #721c24; padding: 2pt 6pt; border-radius: 2pt; font-size: 6pt; }
        .decision-box { background: #f0f4f8; border-radius: 4pt; padding: 8pt; margin: 8pt 0; }
        .footer { margin-top: 10pt; padding-top: 6pt; border-top: 1pt solid var(--aux); display: flex; justify-content: space-between; font-size: 6pt; color: var(--aux); font-family: 'Inter Tight', sans-serif; }
    </style>
</head>
<body>
    <div class="header">
        <h1>F8 合作评估检查表</h1>
        <span class="tag">A4 · 合作决策工具</span>
    </div>

    <div class="meta">
        <div class="meta-item"><span class="meta-label">合作方名称</span><div class="meta-value">________________</div></div>
        <div class="meta-item"><span class="meta-label">评估日期</span><div class="meta-value">________________</div></div>
        <div class="meta-item"><span class="meta-label">管线名称</span><div class="meta-value">________________</div></div>
        <div class="meta-item"><span class="meta-label">评估人</span><div class="meta-value">________________</div></div>
    </div>

    <h2>合作方基本情况</h2>
    <div class="section-box">
        <table>
            <thead><tr><th>评估维度</th><th>信息收集</th><th>评估结论</th></tr></thead>
            <tbody>
                <tr><td><strong>总部所在地</strong></td><td><input type="text"></td><td><input type="text"></td></tr>
                <tr><td><strong>主营业务</strong></td><td><input type="text"></td><td><input type="text"></td></tr>
                <tr><td><strong>公司规模</strong></td><td><input type="text"></td><td><input type="text"></td></tr>
                <tr><td><strong>财务状况</strong></td><td><input type="text"></td><td><input type="text"></td></tr>
                <tr><td><strong>市值/估值</strong></td><td><input type="text"></td><td><input type="text"></td></tr>
                <tr><td><strong>历史合作案例</strong></td><td><input type="text"></td><td><input type="text"></td></tr>
            </tbody>
        </table>
    </div>

    <h2>能力评估</h2>
    <div class="section-box">
        <table>
            <thead><tr><th>能力维度</th><th>评估内容</th><th>评分(1-5)</th><th>证据/说明</th></tr></thead>
            <tbody>
                <tr><td><strong>研发能力</strong></td><td><input type="text"></td><td class="score"><input type="text" style="text-align:center;"></td><td><input type="text"></td></tr>
                <tr><td><strong>临床开发能力</strong></td><td><input type="text"></td><td class="score"><input type="text" style="text-align:center;"></td><td><input type="text"></td></tr>
                <tr><td><strong>Regulatory能力</strong></td><td><input type="text"></td><td class="score"><input type="text" style="text-align:center;"></td><td><input type="text"></td></tr>
                <tr><td><strong>生产能力</strong></td><td><input type="text"></td><td class="score"><input type="text" style="text-align:center;"></td><td><input type="text"></td></tr>
                <tr><td><strong>商业化能力</strong></td><td><input type="text"></td><td class="score"><input type="text" style="text-align:center;"></td><td><input type="text"></td></tr>
                <tr><td><strong>资金实力</strong></td><td><input type="text"></td><td class="score"><input type="text" style="text-align:center;"></td><td><input type="text"></td></tr>
            </tbody>
        </table>
    </div>

    <h2>风险点识别</h2>
    <div class="section-box">
        <h3>合作方风险</h3>
        <table>
            <thead><tr><th>风险类型</th><th>风险描述</th><th>概率</th><th>影响</th><th>风险等级</th></tr></thead>
            <tbody>
                <tr><td><strong>财务风险</strong></td><td><input type="text"></td><td><span class="risk-h">高</span>/中/低</td><td><span class="risk-h">高</span>/中/低</td><td><input type="text"></td></tr>
                <tr><td><strong>运营风险</strong></td><td><input type="text"></td><td>高/<span class="risk-m">中</span>/低</td><td>高/<span class="risk-m">中</span>/低</td><td><input type="text"></td></tr>
                <tr><td><strong>战略风险</strong></td><td><input type="text"></td><td>高/中/<span class="risk-l">低</span></td><td>高/<span class="risk-m">中</span>/低</td><td><input type="text"></td></tr>
                <tr><td><strong>声誉风险</strong></td><td><input type="text"></td><td>高/中/<span class="risk-l">低</span></td><td>高/<span class="risk-m">中</span>/低</td><td><input type="text"></td></tr>
            </tbody>
        </table>
    </div>

    <h2>合作适配度评估</h2>
    <div class="section-box">
        <table>
            <thead><tr><th>适配维度</th><th>权重</th><th>评分(1-5)</th><th>加权得分</th></tr></thead>
            <tbody>
                <tr><td><strong>战略匹配度</strong></td><td>25%</td><td class="score"><input type="text" style="text-align:center;"></td><td></td></tr>
                <tr><td><strong>能力互补度</strong></td><td>20%</td><td class="score"><input type="text" style="text-align:center;"></td><td></td></tr>
                <tr><td><strong>资源整合度</strong></td><td>20%</td><td class="score"><input type="text" style="text-align:center;"></td><td></td></tr>
                <tr><td><strong>文化融合度</strong></td><td>15%</td><td class="score"><input type="text" style="text-align:center;"></td><td></td></tr>
                <tr><td><strong>风险可控度</strong></td><td>20%</td><td class="score"><input type="text" style="text-align:center;"></td><td></td></tr>
            </tbody>
        </table>
        <div style="display:flex; justify-content:flex-end; align-items:center; gap:8pt; margin-top:5pt;">
            <strong>综合适配度得分：</strong>
            <span style="font-size:14pt; font-weight:700; color:var(--header-bg);">______</span>
        </div>
        <div class="decision-box">
            <strong>适配度结论：</strong>
            <span class="adapt-high">高度适配</span>
            <span class="adapt-med">中度适配</span>
            <span class="adapt-low">低度适配</span>
        </div>
    </div>

    <h2>决策建议</h2>
    <div class="section-box">
        <div style="margin-bottom:6pt;">
            <label style="font-size:6pt; color:var(--aux); font-family:'Inter Tight',sans-serif;">优势分析</label>
            <input type="text" style="margin-top:2pt;">
            <input type="text" style="margin-top:2pt;">
        </div>
        <div style="margin-bottom:6pt;">
            <label style="font-size:6pt; color:var(--aux); font-family:'Inter Tight',sans-serif;">风险分析</label>
            <input type="text" style="margin-top:2pt;">
            <input type="text" style="margin-top:2pt;">
        </div>
        <div class="decision-box" style="background:#fff3cd; border:1pt solid #ffd700;">
            <strong>综合决策建议：</strong>
            <div style="margin-top:4pt; font-size:7pt;">
                <label style="margin-right:10pt;"><input type="checkbox" style="width:10pt;height:10pt;accent-color:#28a745;"> 强烈推荐合作</label>
                <label style="margin-right:10pt;"><input type="checkbox" style="width:10pt;height:10pt;accent-color:#28a745;"> 推荐合作（有条件）</label>
                <label style="margin-right:10pt;"><input type="checkbox" style="width:10pt;height:10pt;accent-color:#ffc107;"> 暂缓决定</label>
                <label style="margin-right:10pt;"><input type="checkbox" style="width:10pt;height:10pt;accent-color:#dc3545;"> 不推荐合作</label>
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

with open("D:/新课开发/大健康/03 创新药出海与国际化BD/全流程工具表单/F8_合作评估检查表.html", "w", encoding="utf-8") as f:
    f.write(html)
print("F8 created")
