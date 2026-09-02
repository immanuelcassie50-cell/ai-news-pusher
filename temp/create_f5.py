import os

html = '''<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>F5 IP边界分析表</title>
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
        .meta { display: grid; grid-template-columns: repeat(3, 1fr); gap: 6pt; margin-bottom: 10pt; padding: 7pt; background: white; border-radius: 4pt; font-size: 7pt; }
        .meta-item { display: flex; flex-direction: column; gap: 2pt; }
        .meta-label { color: var(--aux); font-family: 'Inter Tight', sans-serif; font-size: 6pt; text-transform: uppercase; }
        .meta-value { border-bottom: 1pt solid var(--aux); padding: 2pt 0; font-weight: 600; }
        h2 { color: var(--header-bg); font-size: 9pt; font-weight: 700; margin: 10pt 0 5pt 0; padding-bottom: 2pt; border-bottom: 2pt solid var(--accent); }
        h3 { color: var(--text); font-size: 7.5pt; font-weight: 600; margin: 5pt 0 3pt 0; }
        .section-box { background: white; border-radius: 4pt; padding: 7pt; margin-bottom: 7pt; box-shadow: 0 1pt 2pt rgba(0,0,0,0.08); }
        table { width: 100%; border-collapse: collapse; font-size: 6.5pt; margin-bottom: 5pt; }
        th { background: var(--header-bg); color: white; padding: 3pt 4pt; text-align: left; font-family: 'Inter Tight', sans-serif; font-weight: 600; font-size: 6pt; text-transform: uppercase; }
        td { padding: 3pt 4pt; border-bottom: 0.5pt solid #e0e0e0; vertical-align: middle; }
        tr:nth-child(even) td { background: #fafafa; }
        input[type="text"] { width: 100%; border: none; border-bottom: 0.5pt dashed var(--aux); background: transparent; font-family: inherit; font-size: 6pt; padding: 1pt 0; }
        input:focus { outline: none; border-bottom-color: var(--accent); }
        .checkbox { width: 9pt; height: 9pt; accent-color: var(--accent); }
        .strength-box { display: inline-block; padding: 2pt 6pt; border-radius: 2pt; font-size: 6pt; font-family: 'Inter Tight', sans-serif; }
        .strength-strong { background: #d4edda; color: #155724; }
        .strength-medium { background: #fff3cd; color: #856404; }
        .strength-weak { background: #f8d7da; color: #721c24; }
        .risk-high { color: #dc3545; font-weight: 600; }
        .risk-med { color: #fd7e14; }
        .risk-low { color: #28a745; }
        .footer { margin-top: 10pt; padding-top: 6pt; border-top: 1pt solid var(--aux); display: flex; justify-content: space-between; font-size: 6pt; color: var(--aux); font-family: 'Inter Tight', sans-serif; }
    </style>
</head>
<body>
    <div class="header">
        <h1>F5 IP边界分析表</h1>
        <span class="tag">A4 · IP保护与尽调核心工具</span>
    </div>

    <div class="meta">
        <div class="meta-item"><span class="meta-label">管线名称</span><div class="meta-value">________________</div></div>
        <div class="meta-item"><span class="meta-label">合作方</span><div class="meta-value">________________</div></div>
        <div class="meta-item"><span class="meta-label">分析日期</span><div class="meta-value">________________</div></div>
    </div>

    <h2>专利布局分析 — 核心专利清单</h2>
    <div class="section-box">
        <table>
            <thead>
                <tr><th>专利类型</th><th>专利号</th><th>申请日</th><th>到期日</th><th>保护范围</th><th>地域覆盖</th><th>状态</th></tr>
            </thead>
            <tbody>
                <tr><td><strong>化合物专利</strong></td><td><input type="text"></td><td><input type="text"></td><td><input type="text"></td><td><input type="text"></td><td><input type="text"></td><td><input type="text"></td></tr>
                <tr><td><strong>晶型专利</strong></td><td><input type="text"></td><td><input type="text"></td><td><input type="text"></td><td><input type="text"></td><td><input type="text"></td><td><input type="text"></td></tr>
                <tr><td><strong>制剂专利</strong></td><td><input type="text"></td><td><input type="text"></td><td><input type="text"></td><td><input type="text"></td><td><input type="text"></td><td><input type="text"></td></tr>
                <tr><td><strong>工艺专利</strong></td><td><input type="text"></td><td><input type="text"></td><td><input type="text"></td><td><input type="text"></td><td><input type="text"></td><td><input type="text"></td></tr>
                <tr><td><strong>用途专利</strong></td><td><input type="text"></td><td><input type="text"></td><td><input type="text"></td><td><input type="text"></td><td><input type="text"></td><td><input type="text"></td></tr>
                <tr><td><strong>方法专利</strong></td><td><input type="text"></td><td><input type="text"></td><td><input type="text"></td><td><input type="text"></td><td><input type="text"></td><td><input type="text"></td></tr>
            </tbody>
        </table>
    </div>

    <h2>专利保护强度评估</h2>
    <div class="section-box">
        <table>
            <thead>
                <tr><th>评估维度</th><th>评估内容</th><th>评分(1-5)</th><th>说明</th></tr>
            </thead>
            <tbody>
                <tr><td><strong>保护范围宽度</strong></td><td>权利要求范围是否宽泛</td><td><input type="text" style="text-align:center;"></td><td><input type="text"></td></tr>
                <tr><td><strong>授权稳定性</strong></td><td>是否已获授权，审查历史</td><td><input type="text" style="text-align:center;"></td><td><input type="text"></td></tr>
                <tr><td><strong>专利家族完整性</strong></td><td>是否覆盖主要市场国</td><td><input type="text" style="text-align:center;"></td><td><input type="text"></td></tr>
                <tr><td><strong>技术替代性</strong></td><td>是否容易被绕开</td><td><input type="text" style="text-align:center;"></td><td><input type="text"></td></tr>
                <tr><td><strong>到期时间</strong></td><td>剩余保护期长度</td><td><input type="text" style="text-align:center;"></td><td><input type="text"></td></tr>
            </tbody>
        </table>
        <div style="margin-top:5pt;">
            <strong>综合保护强度：</strong>
            <span class="strength-box strength-strong">强</span>
            <span class="strength-box strength-medium">中</span>
            <span class="strength-box strength-weak">弱</span>
        </div>
    </div>

    <h2>技术秘密识别</h2>
    <div class="section-box">
        <h3>技术秘密清单</h3>
        <table>
            <thead>
                <tr><th>#</th><th>技术秘密内容</th><th>潜在价值</th><th>保护措施</th><th>泄露风险</th></tr>
            </thead>
            <tbody>
                <tr><td>1</td><td><input type="text"></td><td><input type="text" placeholder="高/中/低"></td><td><input type="text"></td><td><input type="text" placeholder="高/中/低"></td></tr>
                <tr><td>2</td><td><input type="text"></td><td><input type="text" placeholder="高/中/低"></td><td><input type="text"></td><td><input type="text" placeholder="高/中/低"></td></tr>
                <tr><td>3</td><td><input type="text"></td><td><input type="text" placeholder="高/中/低"></td><td><input type="text"></td><td><input type="text" placeholder="高/中/低"></td></tr>
            </tbody>
        </table>
        <div style="margin-top:5pt;">
            <label style="font-size:6pt; color:var(--aux); font-family:'Inter Tight',sans-serif;">与技术秘密的关系</label>
            <div style="display:flex; gap:8pt; margin-top:3pt; font-size:6pt;">
                <label><input type="checkbox" class="checkbox"> 部分专利+部分秘密</label>
                <label><input type="checkbox" class="checkbox"> 核心专利保护</label>
                <label><input type="checkbox" class="checkbox"> 核心秘密保护</label>
                <label><input type="checkbox" class="checkbox"> 互为补充</label>
            </div>
        </div>
    </div>

    <h2>数据合规边界</h2>
    <div class="section-box">
        <table>
            <thead>
                <tr><th>数据类型</th><th>来源</th><th>合规性</th><th>风险等级</th><th>说明</th></tr>
            </thead>
            <tbody>
                <tr><td>临床前数据</td><td><input type="text"></td><td><input type="checkbox" class="checkbox"> 合规 <input type="checkbox" class="checkbox"> 待确认</td><td><input type="text" placeholder="高/中/低"></td><td><input type="text"></td></tr>
                <tr><td>临床数据</td><td><input type="text"></td><td><input type="checkbox" class="checkbox"> 合规 <input type="checkbox" class="checkbox"> 待确认</td><td><input type="text" placeholder="高/中/低"></td><td><input type="text"></td></tr>
                <tr><td>真实世界数据</td><td><input type="text"></td><td><input type="checkbox" class="checkbox"> 合规 <input type="checkbox" class="checkbox"> 待确认</td><td><input type="text" placeholder="高/中/低"></td><td><input type="text"></td></tr>
            </tbody>
        </table>
    </div>

    <h2>FTO分析摘要</h2>
    <div class="section-box">
        <table>
            <thead><tr><th>分析维度</th><th>内容</th></tr></thead>
            <tbody>
                <tr><td><strong>分析范围</strong></td><td><input type="text"></td></tr>
                <tr><td><strong>分析方法</strong></td><td><input type="text"></td></tr>
                <tr><td><strong>主要风险专利</strong></td><td><input type="text"></td></tr>
                <tr><td><strong>风险评估结论</strong></td><td><input type="text"></td></tr>
                <tr><td><strong>规避设计建议</strong></td><td><input type="text"></td></tr>
            </tbody>
        </table>
    </div>

    <h2>IP风险矩阵</h2>
    <div class="section-box">
        <table>
            <thead><tr><th>风险类型</th><th>风险描述</th><th>概率</th><th>影响</th><th>应对策略</th></tr></thead>
            <tbody>
                <tr><td>专利被无效</td><td><input type="text"></td><td><span class="risk-high">高</span>/<span class="risk-med">中</span>/<span class="risk-low">低</span></td><td><span class="risk-high">高</span>/<span class="risk-med">中</span>/<span class="risk-low">低</span></td><td><input type="text"></td></tr>
                <tr><td>专利被绕开</td><td><input type="text"></td><td><span class="risk-high">高</span>/<span class="risk-med">中</span>/<span class="risk-low">低</span></td><td><span class="risk-high">高</span>/<span class="risk-med">中</span>/<span class="risk-low">低</span></td><td><input type="text"></td></tr>
                <tr><td>技术秘密泄露</td><td><input type="text"></td><td><span class="risk-high">高</span>/<span class="risk-med">中</span>/<span class="risk-low">低</span></td><td><span class="risk-high">高</span>/<span class="risk-med">中</span>/<span class="risk-low">低</span></td><td><input type="text"></td></tr>
                <tr><td>数据合规违规</td><td><input type="text"></td><td><span class="risk-high">高</span>/<span class="risk-med">中</span>/<span class="risk-low">低</span></td><td><span class="risk-high">高</span>/<span class="risk-med">中</span>/<span class="risk-low">低</span></td><td><input type="text"></td></tr>
            </tbody>
        </table>
    </div>

    <div class="footer">
        <span>填表人：________________</span>
        <span>日期：________________</span>
        <span>版本：v1.0</span>
    </div>
</body>
</html>'''

with open("D:/新课开发/大健康/03 创新药出海与国际化BD/全流程工具表单/F5_IP边界分析表.html", "w", encoding="utf-8") as f:
    f.write(html)
print("F5 created")
