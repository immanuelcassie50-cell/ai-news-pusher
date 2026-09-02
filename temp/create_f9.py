import os

html = '''<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>F9 交易后管理跟踪表</title>
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
        .meta { display: grid; grid-template-columns: repeat(5, 1fr); gap: 5pt; margin-bottom: 10pt; padding: 6pt; background: white; border-radius: 4pt; font-size: 7pt; }
        .meta-item { display: flex; flex-direction: column; gap: 2pt; }
        .meta-label { color: var(--aux); font-family: 'Inter Tight', sans-serif; font-size: 5.5pt; text-transform: uppercase; }
        .meta-value { border-bottom: 1pt solid var(--aux); padding: 2pt 0; font-weight: 600; }
        h2 { color: var(--header-bg); font-size: 9pt; font-weight: 700; margin: 8pt 0 5pt 0; padding-bottom: 2pt; border-bottom: 2pt solid var(--accent); }
        h3 { color: var(--text); font-size: 7pt; font-weight: 600; margin: 5pt 0 3pt 0; }
        .section-box { background: white; border-radius: 4pt; padding: 6pt; margin-bottom: 6pt; box-shadow: 0 1pt 2pt rgba(0,0,0,0.08); }
        table { width: 100%; border-collapse: collapse; font-size: 6pt; margin-bottom: 4pt; }
        th { background: var(--header-bg); color: white; padding: 2.5pt 3pt; text-align: left; font-family: 'Inter Tight', sans-serif; font-weight: 600; font-size: 5pt; text-transform: uppercase; }
        td { padding: 2.5pt 3pt; border-bottom: 0.5pt solid #e0e0e0; vertical-align: middle; }
        tr:nth-child(even) td { background: #fafafa; }
        input[type="text"] { width: 100%; border: none; border-bottom: 0.5pt dashed var(--aux); background: transparent; font-family: inherit; font-size: 5.5pt; padding: 1pt 0; }
        input:focus { outline: none; border-bottom-color: var(--accent); }
        .checkbox { width: 8pt; height: 8pt; accent-color: var(--accent); }
        .status-ok { background: #d4edda; color: #155724; padding: 1pt 4pt; border-radius: 2pt; font-size: 5pt; }
        .status-warn { background: #fff3cd; color: #856404; padding: 1pt 4pt; border-radius: 2pt; font-size: 5pt; }
        .status-danger { background: #f8d7da; color: #721c24; padding: 1pt 4pt; border-radius: 2pt; font-size: 5pt; }
        .summary-box { background: linear-gradient(135deg, var(--header-bg) 0%, #3d4159 100%); color: white; padding: 6pt 10pt; border-radius: 4pt; margin: 6pt 0; display: flex; justify-content: space-between; align-items: center; }
        .summary-box .label { font-size: 6pt; opacity: 0.8; font-family: 'Inter Tight', sans-serif; }
        .summary-box .value { font-size: 14pt; font-weight: 700; }
        .footer { margin-top: 8pt; padding-top: 5pt; border-top: 1pt solid var(--aux); display: flex; justify-content: space-between; font-size: 5.5pt; color: var(--aux); font-family: 'Inter Tight', sans-serif; }
    </style>
</head>
<body>
    <div class="header">
        <h1>F9 交易后管理跟踪表</h1>
        <span class="tag">A4 · 合作运营工具</span>
    </div>

    <div class="meta">
        <div class="meta-item"><span class="meta-label">合作方</span><div class="meta-value">________________</div></div>
        <div class="meta-item"><span class="meta-label">签约日期</span><div class="meta-value">________________</div></div>
        <div class="meta-item"><span class="meta-label">许可范围</span><div class="meta-value">________________</div></div>
        <div class="meta-item"><span class="meta-label">合作负责人</span><div class="meta-value">________________</div></div>
        <div class="meta-item"><span class="meta-label">更新日期</span><div class="meta-value">________________</div></div>
    </div>

    <h2>研发里程碑追踪</h2>
    <div class="section-box">
        <table>
            <thead><tr><th>里程碑事件</th><th>约定时间</th><th>实际完成</th><th>完成状态</th><th>付款状态</th></tr></thead>
            <tbody>
                <tr><td>IND获批</td><td><input type="text"></td><td><input type="text"></td><td><input type="checkbox" class="checkbox"> 已完成 <input type="checkbox" class="checkbox"> 延期 <input type="checkbox" class="checkbox"> 进行中</td><td><input type="checkbox" class="checkbox"> 已付 <input type="checkbox" class="checkbox"> 待付</td></tr>
                <tr><td>首例患者入组（Phase I）</td><td><input type="text"></td><td><input type="text"></td><td><input type="checkbox" class="checkbox"> 已完成 <input type="checkbox" class="checkbox"> 延期 <input type="checkbox" class="checkbox"> 进行中</td><td><input type="checkbox" class="checkbox"> 已付 <input type="checkbox" class="checkbox"> 待付</td></tr>
                <tr><td>Phase I完成</td><td><input type="text"></td><td><input type="text"></td><td><input type="checkbox" class="checkbox"> 已完成 <input type="checkbox" class="checkbox"> 延期 <input type="checkbox" class="checkbox"> 进行中</td><td><input type="checkbox" class="checkbox"> 已付 <input type="checkbox" class="checkbox"> 待付</td></tr>
                <tr><td>PoC数据读出</td><td><input type="text"></td><td><input type="text"></td><td><input type="checkbox" class="checkbox"> 已完成 <input type="checkbox" class="checkbox"> 延期 <input type="checkbox" class="checkbox"> 进行中</td><td><input type="checkbox" class="checkbox"> 已付 <input type="checkbox" class="checkbox"> 待付</td></tr>
                <tr><td>NDA/BLA申报</td><td><input type="text"></td><td><input type="text"></td><td><input type="checkbox" class="checkbox"> 已完成 <input type="checkbox" class="checkbox"> 延期 <input type="checkbox" class="checkbox"> 进行中</td><td><input type="checkbox" class="checkbox"> 已付 <input type="checkbox" class="checkbox"> 待付</td></tr>
                <tr><td>NDA/BLA获批</td><td><input type="text"></td><td><input type="text"></td><td><input type="checkbox" class="checkbox"> 已完成 <input type="checkbox" class="checkbox"> 延期 <input type="checkbox" class="checkbox"> 进行中</td><td><input type="checkbox" class="checkbox"> 已付 <input type="checkbox" class="checkbox"> 待付</td></tr>
            </tbody>
        </table>
    </div>

    <h2>付款跟踪表</h2>
    <div class="section-box">
        <table>
            <thead><tr><th>款项类型</th><th>合同约定金额</th><th>实际收取</th><th>收款日期</th><th>收款状态</th></tr></thead>
            <tbody>
                <tr><td><strong>首付款</strong></td><td><input type="text"></td><td><input type="text"></td><td><input type="text"></td><td><input type="checkbox" class="checkbox"> 已收取</td></tr>
                <tr><td>研发里程碑1</td><td><input type="text"></td><td><input type="text"></td><td><input type="text"></td><td><input type="checkbox" class="checkbox"> 已收取</td></tr>
                <tr><td>研发里程碑2</td><td><input type="text"></td><td><input type="text"></td><td><input type="text"></td><td><input type="checkbox" class="checkbox"> 已收取</td></tr>
                <tr><td>Royalty（季度）</td><td><input type="text"></td><td><input type="text"></td><td><input type="text"></td><td><input type="checkbox" class="checkbox"> 已收取</td></tr>
            </tbody>
        </table>
        <div class="summary-box">
            <div class="label">累计已收款</div>
            <div class="value">______ 万美元</div>
        </div>
    </div>

    <h2>关系健康度评估</h2>
    <div class="section-box">
        <table>
            <thead><tr><th>评估维度</th><th>评估内容</th><th>评分(1-5)</th><th>具体表现</th></tr></thead>
            <tbody>
                <tr><td><strong>沟通顺畅度</strong></td><td>信息传递是否及时准确</td><td><input type="text" style="text-align:center;"></td><td><input type="text"></td></tr>
                <tr><td><strong>决策效率</strong></td><td>重大决策是否及时</td><td><input type="text" style="text-align:center;"></td><td><input type="text"></td></tr>
                <tr><td><strong>问题解决</strong></td><td>争议问题是否有效解决</td><td><input type="text" style="text-align:center;"></td><td><input type="text"></td></tr>
                <tr><td><strong>目标一致性</strong></td><td>双方目标是否一致</td><td><input type="text" style="text-align:center;"></td><td><input type="text"></td></tr>
                <tr><td><strong>信任程度</strong></td><td>互信水平</td><td><input type="text" style="text-align:center;"></td><td><input type="text"></td></tr>
            </tbody>
        </table>
    </div>

    <h2>风险预警信号</h2>
    <div class="section-box">
        <h3>合作层面风险</h3>
        <table>
            <thead><tr><th>风险信号</th><th>监控指标</th><th>阈值</th><th>当前状态</th><th>应对预案</th></tr></thead>
            <tbody>
                <tr><td>合作方财务恶化</td><td><input type="text"></td><td><input type="text"></td><td><span class="status-ok">正常</span> <span class="status-warn">预警</span> <span class="status-danger">危险</span></td><td><input type="text"></td></tr>
                <tr><td>对方核心人员流失</td><td><input type="text"></td><td><input type="text"></td><td><span class="status-ok">正常</span> <span class="status-warn">预警</span> <span class="status-danger">危险</span></td><td><input type="text"></td></tr>
                <tr><td>协议履行争议</td><td><input type="text"></td><td><input type="text"></td><td><span class="status-ok">正常</span> <span class="status-warn">预警</span> <span class="status-danger">危险</span></td><td><input type="text"></td></tr>
            </tbody>
        </table>
        <h3 style="margin-top:6pt;">项目层面风险</h3>
        <table>
            <thead><tr><th>风险信号</th><th>监控指标</th><th>阈值</th><th>当前状态</th><th>应对预案</th></tr></thead>
            <tbody>
                <tr><td>研发进度延期</td><td><input type="text"></td><td><input type="text"></td><td><span class="status-ok">正常</span> <span class="status-warn">预警</span> <span class="status-danger">危险</span></td><td><input type="text"></td></tr>
                <tr><td>临床数据不及预期</td><td><input type="text"></td><td><input type="text"></td><td><span class="status-ok">正常</span> <span class="status-warn">预警</span> <span class="status-danger">危险</span></td><td><input type="text"></td></tr>
                <tr><td>竞争格局变化</td><td><input type="text"></td><td><input type="text"></td><td><span class="status-ok">正常</span> <span class="status-warn">预警</span> <span class="status-danger">危险</span></td><td><input type="text"></td></tr>
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

with open("D:/新课开发/大健康/03 创新药出海与国际化BD/全流程工具表单/F9_交易后管理跟踪表.html", "w", encoding="utf-8") as f:
    f.write(html)
print("F9 created")
