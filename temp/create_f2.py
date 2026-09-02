import os

html = '''<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>F2 管线价值评估工作表</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;600;700&family=Inter+Tight:wght@400;500;600&display=swap" rel="stylesheet">
    <style>
        :root {
            --bg: #f5f0e6;
            --text: #2b2d42;
            --accent: #ef233c;
            --aux: #8d99ae;
            --header-bg: #2b2d42;
        }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: 'Noto Serif SC', serif;
            background: var(--bg);
            color: var(--text);
            font-size: 10pt;
            line-height: 1.5;
            padding: 20mm;
        }
        @page { size: A4; margin: 0; }
        @media print {
            body { padding: 10mm; }
            .page-break { page-break-before: always; }
        }
        .header {
            background: var(--header-bg);
            color: white;
            padding: 12pt 16pt;
            margin: -20mm -20mm 16pt -20mm;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .header h1 {
            font-family: 'Noto Serif SC', serif;
            font-size: 16pt;
            font-weight: 700;
            letter-spacing: 0.5pt;
        }
        .header .tag {
            background: var(--accent);
            padding: 3pt 8pt;
            font-size: 8pt;
            font-family: 'Inter Tight', sans-serif;
        }
        .meta {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 8pt;
            margin-bottom: 14pt;
            padding: 10pt;
            background: white;
            border-radius: 4pt;
            font-size: 8pt;
        }
        .meta-item { display: flex; flex-direction: column; gap: 2pt; }
        .meta-label { color: var(--aux); font-family: 'Inter Tight', sans-serif; font-size: 7pt; text-transform: uppercase; }
        .meta-value { border-bottom: 1pt solid var(--aux); padding: 2pt 0; font-weight: 600; }
        h2 {
            color: var(--header-bg);
            font-size: 11pt;
            font-weight: 700;
            margin: 14pt 0 8pt 0;
            padding-bottom: 4pt;
            border-bottom: 2pt solid var(--accent);
            display: flex;
            align-items: center;
            gap: 6pt;
        }
        h2::before { content: attr(data-letter); font-size: 14pt; color: var(--accent); font-weight: 700; }
        .section-box {
            background: white;
            border-radius: 4pt;
            padding: 10pt;
            margin-bottom: 10pt;
            box-shadow: 0 1pt 3pt rgba(0,0,0,0.08);
        }
        table {
            width: 100%;
            border-collapse: collapse;
            font-size: 8pt;
            margin-bottom: 8pt;
        }
        th {
            background: var(--header-bg);
            color: white;
            padding: 5pt 6pt;
            text-align: left;
            font-family: 'Inter Tight', sans-serif;
            font-weight: 600;
            font-size: 7pt;
            text-transform: uppercase;
        }
        td {
            padding: 5pt 6pt;
            border-bottom: 0.5pt solid #e0e0e0;
            vertical-align: top;
        }
        tr:nth-child(even) td { background: #fafafa; }
        .weight-col { width: 12%; text-align: center; font-family: 'Inter Tight', sans-serif; font-weight: 600; color: var(--aux); }
        .score-col { width: 10%; text-align: center; }
        .reason-col { width: 38%; }
        input[type="text"], input[type="number"] {
            width: 100%;
            border: none;
            border-bottom: 1pt dashed var(--aux);
            background: transparent;
            font-family: inherit;
            font-size: 8pt;
            padding: 2pt 0;
            text-align: center;
        }
        input:focus { outline: none; border-bottom-color: var(--accent); }
        .subtotal {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            gap: 8pt;
            padding: 6pt 10pt;
            background: #f0f4f8;
            border-radius: 3pt;
            margin-top: 6pt;
            font-family: 'Inter Tight', sans-serif;
            font-size: 8pt;
        }
        .subtotal-label { color: var(--aux); text-transform: uppercase; }
        .subtotal-value { font-weight: 700; color: var(--header-bg); font-size: 10pt; }
        .formula-box {
            background: linear-gradient(135deg, var(--header-bg) 0%, #3d4159 100%);
            color: white;
            padding: 10pt 14pt;
            border-radius: 4pt;
            margin: 12pt 0;
            text-align: center;
        }
        .formula-box .label { font-size: 8pt; opacity: 0.8; margin-bottom: 4pt; font-family: 'Inter Tight', sans-serif; }
        .formula-box .formula { font-size: 11pt; font-weight: 600; letter-spacing: 0.5pt; }
        .formula-box .highlight { color: #ffd700; }
        .three-col {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 10pt;
            margin: 10pt 0;
        }
        .three-col-item {
            background: #fafafa;
            border: 1pt solid #e8e8e8;
            border-radius: 3pt;
            padding: 8pt;
            text-align: center;
        }
        .three-col-item .label { font-size: 7pt; color: var(--aux); font-family: 'Inter Tight', sans-serif; text-transform: uppercase; margin-bottom: 4pt; }
        .three-col-item .value { font-size: 12pt; font-weight: 700; color: var(--header-bg); }
        .checklist {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 4pt 16pt;
            margin: 10pt 0;
        }
        .checklist-item {
            display: flex;
            align-items: center;
            gap: 6pt;
            font-size: 8pt;
            padding: 3pt 0;
        }
        .checklist-item input[type="checkbox"] { width: 12pt; height: 12pt; accent-color: var(--accent); }
        .footer {
            margin-top: 16pt;
            padding-top: 10pt;
            border-top: 1pt solid var(--aux);
            display: flex;
            justify-content: space-between;
            font-size: 8pt;
            color: var(--aux);
            font-family: 'Inter Tight', sans-serif;
        }
        .hint {
            background: #fffbea;
            border-left: 3pt solid #ffd700;
            padding: 8pt 10pt;
            margin: 10pt 0;
            font-size: 8pt;
            color: #665500;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>F2 管线价值评估工作表</h1>
        <span class="tag">A4 · 交易定价基础</span>
    </div>

    <div class="meta">
        <div class="meta-item">
            <span class="meta-label">管线名称</span>
            <div class="meta-value">________________</div>
        </div>
        <div class="meta-item">
            <span class="meta-label">靶点/适应症</span>
            <div class="meta-value">________________</div>
        </div>
        <div class="meta-item">
            <span class="meta-label">当前阶段</span>
            <div class="meta-value">________________</div>
        </div>
        <div class="meta-item">
            <span class="meta-label">评估日期</span>
            <div class="meta-value">________________</div>
        </div>
    </div>

    <h2 data-letter="W">临床价值评估</h2>
    <div class="section-box">
        <table>
            <thead>
                <tr>
                    <th>评估维度</th>
                    <th class="weight-col">权重</th>
                    <th class="score-col">评分(1-5)</th>
                    <th>加权得分</th>
                    <th class="reason-col">评估依据</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>疗效优势</strong></td>
                    <td class="weight-col">25%</td>
                    <td class="score-col"><input type="number" min="1" max="5"></td>
                    <td></td>
                    <td><input type="text" placeholder="数据支撑说明"></td>
                </tr>
                <tr>
                    <td><strong>安全性优势</strong></td>
                    <td class="weight-col">20%</td>
                    <td class="score-col"><input type="number" min="1" max="5"></td>
                    <td></td>
                    <td><input type="text" placeholder="数据支撑说明"></td>
                </tr>
                <tr>
                    <td><strong>给药便利性</strong></td>
                    <td class="weight-col">10%</td>
                    <td class="score-col"><input type="number" min="1" max="5"></td>
                    <td></td>
                    <td><input type="text" placeholder="数据支撑说明"></td>
                </tr>
                <tr>
                    <td><strong>患者依从性</strong></td>
                    <td class="weight-col">10%</td>
                    <td class="score-col"><input type="number" min="1" max="5"></td>
                    <td></td>
                    <td><input type="text" placeholder="数据支撑说明"></td>
                </tr>
                <tr>
                    <td><strong>差异化程度</strong></td>
                    <td class="weight-col">20%</td>
                    <td class="score-col"><input type="number" min="1" max="5"></td>
                    <td></td>
                    <td><input type="text" placeholder="数据支撑说明"></td>
                </tr>
                <tr>
                    <td><strong>临床未满足需求</strong></td>
                    <td class="weight-col">15%</td>
                    <td class="score-col"><input type="number" min="1" max="5"></td>
                    <td></td>
                    <td><input type="text" placeholder="数据支撑说明"></td>
                </tr>
            </tbody>
        </table>
        <div class="subtotal">
            <span class="subtotal-label">临床价值小计：</span>
            <span class="subtotal-value">______ 分</span>
        </div>
    </div>

    <h2 data-letter="M">市场潜力评估</h2>
    <div class="section-box">
        <table>
            <thead>
                <tr>
                    <th>评估维度</th>
                    <th class="weight-col">权重</th>
                    <th class="score-col">评分(1-5)</th>
                    <th>加权得分</th>
                    <th class="reason-col">评估依据</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>市场容量（TAM）</strong></td>
                    <td class="weight-col">20%</td>
                    <td class="score-col"><input type="number" min="1" max="5"></td>
                    <td></td>
                    <td><input type="text" placeholder="数据支撑说明"></td>
                </tr>
                <tr>
                    <td><strong>增长速度</strong></td>
                    <td class="weight-col">15%</td>
                    <td class="score-col"><input type="number" min="1" max="5"></td>
                    <td></td>
                    <td><input type="text" placeholder="数据支撑说明"></td>
                </tr>
                <tr>
                    <td><strong>竞争格局</strong></td>
                    <td class="weight-col">20%</td>
                    <td class="score-col"><input type="number" min="1" max="5"></td>
                    <td></td>
                    <td><input type="text" placeholder="数据支撑说明"></td>
                </tr>
                <tr>
                    <td><strong>准入壁垒</strong></td>
                    <td class="weight-col">15%</td>
                    <td class="score-col"><input type="number" min="1" max="5"></td>
                    <td></td>
                    <td><input type="text" placeholder="数据支撑说明"></td>
                </tr>
                <tr>
                    <td><strong>定价空间</strong></td>
                    <td class="weight-col">15%</td>
                    <td class="score-col"><input type="number" min="1" max="5"></td>
                    <td></td>
                    <td><input type="text" placeholder="数据支撑说明"></td>
                </tr>
                <tr>
                    <td><strong>医保覆盖可能性</strong></td>
                    <td class="weight-col">15%</td>
                    <td class="score-col"><input type="number" min="1" max="5"></td>
                    <td></td>
                    <td><input type="text" placeholder="数据支撑说明"></td>
                </tr>
            </tbody>
        </table>
        <div class="subtotal">
            <span class="subtotal-label">市场潜力小计：</span>
            <span class="subtotal-value">______ 分</span>
        </div>
    </div>

    <h2 data-letter="T">交易可行性评估</h2>
    <div class="section-box">
        <table>
            <thead>
                <tr>
                    <th>评估维度</th>
                    <th class="weight-col">权重</th>
                    <th class="score-col">评分(1-5)</th>
                    <th>加权得分</th>
                    <th class="reason-col">评估依据</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>临床数据成熟度</strong></td>
                    <td class="weight-col">25%</td>
                    <td class="score-col"><input type="number" min="1" max="5"></td>
                    <td></td>
                    <td><input type="text" placeholder="数据支撑说明"></td>
                </tr>
                <tr>
                    <td><strong>Regulatory路径清晰度</strong></td>
                    <td class="weight-col">20%</td>
                    <td class="score-col"><input type="number" min="1" max="5"></td>
                    <td></td>
                    <td><input type="text" placeholder="数据支撑说明"></td>
                </tr>
                <tr>
                    <td><strong>IP保护强度</strong></td>
                    <td class="weight-col">20%</td>
                    <td class="score-col"><input type="number" min="1" max="5"></td>
                    <td></td>
                    <td><input type="text" placeholder="数据支撑说明"></td>
                </tr>
                <tr>
                    <td><strong>潜在合作伙伴数量</strong></td>
                    <td class="weight-col">15%</td>
                    <td class="score-col"><input type="number" min="1" max="5"></td>
                    <td></td>
                    <td><input type="text" placeholder="数据支撑说明"></td>
                </tr>
                <tr>
                    <td><strong>交易时间窗口</strong></td>
                    <td class="weight-col">10%</td>
                    <td class="score-col"><input type="number" min="1" max="5"></td>
                    <td></td>
                    <td><input type="text" placeholder="数据支撑说明"></td>
                </tr>
                <tr>
                    <td><strong>地缘政治风险</strong></td>
                    <td class="weight-col">10%</td>
                    <td class="score-col"><input type="number" min="1" max="5"></td>
                    <td></td>
                    <td><input type="text" placeholder="数据支撑说明"></td>
                </tr>
            </tbody>
        </table>
        <div class="subtotal">
            <span class="subtotal-label">交易可行性小计：</span>
            <span class="subtotal-value">______ 分</span>
        </div>
    </div>

    <div class="formula-box">
        <div class="label">综合价值得分计算公式</div>
        <div class="formula">
            临床价值 <span class="highlight">× 40%</span> + 市场潜力 <span class="highlight">× 35%</span> + 交易可行性 <span class="highlight">× 25%</span> = <span class="highlight">______</span> 分
        </div>
    </div>

    <h2>估值参考范围</h2>
    <div class="section-box">
        <table>
            <thead>
                <tr>
                    <th>估值方法</th>
                    <th>估算值（万美元）</th>
                    <th>适用条件</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>DCF现金流折现</strong></td>
                    <td><input type="text" placeholder="请填写"></td>
                    <td><input type="text" placeholder="请填写"></td>
                </tr>
                <tr>
                    <td><strong>风险调整净现值（rNPV）</strong></td>
                    <td><input type="text" placeholder="请填写"></td>
                    <td><input type="text" placeholder="请填写"></td>
                </tr>
                <tr>
                    <td><strong>交易可比公司法</strong></td>
                    <td><input type="text" placeholder="请填写"></td>
                    <td><input type="text" placeholder="请填写"></td>
                </tr>
                <tr>
                    <td><strong>研发成本加成法</strong></td>
                    <td><input type="text" placeholder="请填写"></td>
                    <td><input type="text" placeholder="请填写"></td>
                </tr>
            </tbody>
        </table>
        <div class="three-col">
            <div class="three-col-item">
                <div class="label">最低估值</div>
                <div class="value">______</div>
            </div>
            <div class="three-col-item">
                <div class="label">中位估值</div>
                <div class="value">______</div>
            </div>
            <div class="three-col-item">
                <div class="label">最高估值</div>
                <div class="value">______</div>
            </div>
        </div>
    </div>

    <h2>估值敏感性分析</h2>
    <div class="section-box">
        <table>
            <thead>
                <tr>
                    <th>关键假设</th>
                    <th>乐观情景</th>
                    <th>基准情景</th>
                    <th>悲观情景</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>临床成功率</td>
                    <td><input type="text" placeholder="%"></td>
                    <td><input type="text" placeholder="%"></td>
                    <td><input type="text" placeholder="%"></td>
                </tr>
                <tr>
                    <td>上市时间</td>
                    <td><input type="text" placeholder="年"></td>
                    <td><input type="text" placeholder="年"></td>
                    <td><input type="text" placeholder="年"></td>
                </tr>
                <tr>
                    <td>峰值市场份额</td>
                    <td><input type="text" placeholder="%"></td>
                    <td><input type="text" placeholder="%"></td>
                    <td><input type="text" placeholder="%"></td>
                </tr>
                <tr>
                    <td>定价水平</td>
                    <td><input type="text" placeholder="万元/年"></td>
                    <td><input type="text" placeholder="万元/年"></td>
                    <td><input type="text" placeholder="万元/年"></td>
                </tr>
                <tr>
                    <td><strong>估值结果</strong></td>
                    <td><strong>______</strong></td>
                    <td><strong>______</strong></td>
                    <td><strong>______</strong></td>
                </tr>
            </tbody>
        </table>
    </div>

    <h2>谈判建议</h2>
    <div class="section-box">
        <div style="margin-bottom: 10pt;">
            <label style="font-size: 8pt; color: var(--aux); font-family: 'Inter Tight', sans-serif; text-transform: uppercase;">建议报价区间</label>
            <input type="text" style="width: 100%; margin-top: 4pt;">
        </div>
        <div style="margin-bottom: 10pt;">
            <label style="font-size: 8pt; color: var(--aux); font-family: 'Inter Tight', sans-serif; text-transform: uppercase;">价格锚点设定</label>
            <input type="text" style="width: 100%; margin-top: 4pt;">
        </div>
        <div>
            <label style="font-size: 8pt; color: var(--aux); font-family: 'Inter Tight', sans-serif; text-transform: uppercase;">让步空间</label>
            <input type="text" style="width: 100%; margin-top: 4pt;">
        </div>
    </div>

    <div class="hint">
        <strong>提示：</strong>估值是艺术与科学的结合，数据是基础，但也要考虑市场情绪、竞争态势和交易时机。估值结果是一个参考区间，不是精确数字。
    </div>

    <div class="checklist">
        <div class="checklist-item"><input type="checkbox"> 临床价值评估已完成</div>
        <div class="checklist-item"><input type="checkbox"> 市场潜力评估已覆盖主要维度</div>
        <div class="checklist-item"><input type="checkbox"> 交易可行性已考虑监管和IP因素</div>
        <div class="checklist-item"><input type="checkbox"> 至少使用两种估值方法进行交叉验证</div>
        <div class="checklist-item"><input type="checkbox"> 敏感性分析已识别关键驱动因素</div>
        <div class="checklist-item"><input type="checkbox"> 谈判建议已明确报价区间和让步空间</div>
    </div>

    <div class="footer">
        <span>填表人：________________</span>
        <span>日期：________________</span>
        <span>版本：v1.0</span>
    </div>
</body>
</html>'''

with open("D:/新课开发/大健康/03 创新药出海与国际化BD/全流程工具表单/F2_管线价值评估工作表.html", "w", encoding="utf-8") as f:
    f.write(html)
print("F2 created successfully")
