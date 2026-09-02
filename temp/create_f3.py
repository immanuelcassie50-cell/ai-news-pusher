import os

html = '''<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>F3 交易结构设计模板</title>
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
            font-size: 9pt;
            line-height: 1.5;
            padding: 20mm;
        }
        @page { size: A4; margin: 0; }
        @media print { body { padding: 10mm; } }
        .header {
            background: var(--header-bg);
            color: white;
            padding: 10pt 14pt;
            margin: -20mm -20mm 12pt -20mm;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .header h1 { font-size: 14pt; font-weight: 700; letter-spacing: 0.5pt; }
        .header .tag { background: var(--accent); padding: 2pt 8pt; font-size: 7pt; font-family: 'Inter Tight', sans-serif; }
        .meta {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 6pt;
            margin-bottom: 12pt;
            padding: 8pt;
            background: white;
            border-radius: 4pt;
            font-size: 7pt;
        }
        .meta-item { display: flex; flex-direction: column; gap: 2pt; }
        .meta-label { color: var(--aux); font-family: 'Inter Tight', sans-serif; font-size: 6pt; text-transform: uppercase; }
        .meta-value { border-bottom: 1pt solid var(--aux); padding: 2pt 0; font-weight: 600; }
        h2 {
            color: var(--header-bg);
            font-size: 10pt;
            font-weight: 700;
            margin: 10pt 0 6pt 0;
            padding-bottom: 3pt;
            border-bottom: 2pt solid var(--accent);
        }
        .section-box {
            background: white;
            border-radius: 4pt;
            padding: 8pt;
            margin-bottom: 8pt;
            box-shadow: 0 1pt 2pt rgba(0,0,0,0.08);
        }
        table {
            width: 100%;
            border-collapse: collapse;
            font-size: 7pt;
            margin-bottom: 6pt;
        }
        th {
            background: var(--header-bg);
            color: white;
            padding: 4pt 5pt;
            text-align: left;
            font-family: 'Inter Tight', sans-serif;
            font-weight: 600;
            font-size: 6pt;
            text-transform: uppercase;
        }
        td { padding: 4pt 5pt; border-bottom: 0.5pt solid #e0e0e0; vertical-align: middle; }
        tr:nth-child(even) td { background: #fafafa; }
        input[type="text"], input[type="number"] {
            width: 100%;
            border: none;
            border-bottom: 1pt dashed var(--aux);
            background: transparent;
            font-family: inherit;
            font-size: 7pt;
            padding: 1pt 0;
        }
        input:focus { outline: none; border-bottom-color: var(--accent); }
        .checkbox-group { display: flex; gap: 8pt; flex-wrap: wrap; }
        .checkbox-item { display: flex; align-items: center; gap: 3pt; font-size: 7pt; }
        input[type="checkbox"] { width: 10pt; height: 10pt; accent-color: var(--accent); }
        .two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 10pt; }
        .formula-box {
            background: linear-gradient(135deg, var(--header-bg) 0%, #3d4159 100%);
            color: white;
            padding: 8pt 12pt;
            border-radius: 4pt;
            margin: 8pt 0;
            text-align: center;
        }
        .formula-box .label { font-size: 7pt; opacity: 0.8; margin-bottom: 2pt; font-family: 'Inter Tight', sans-serif; }
        .formula-box .formula { font-size: 10pt; font-weight: 600; }
        .highlight { color: #ffd700; }
        .hint {
            background: #fffbea;
            border-left: 3pt solid #ffd700;
            padding: 6pt 8pt;
            margin: 8pt 0;
            font-size: 7pt;
            color: #665500;
        }
        .checklist {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 3pt 12pt;
            margin: 8pt 0;
        }
        .checklist-item { display: flex; align-items: center; gap: 4pt; font-size: 7pt; }
        .footer {
            margin-top: 12pt;
            padding-top: 8pt;
            border-top: 1pt solid var(--aux);
            display: flex;
            justify-content: space-between;
            font-size: 7pt;
            color: var(--aux);
            font-family: 'Inter Tight', sans-serif;
        }
        .royalty-table td:nth-child(4), .royalty-table th:nth-child(4) { text-align: center; background: #f0f4f8 !important; font-weight: 600; }
    </style>
</head>
<body>
    <div class="header">
        <h1>F3 交易结构设计模板</h1>
        <span class="tag">A4 · License-out核心工具</span>
    </div>

    <div class="meta">
        <div class="meta-item">
            <span class="meta-label">管线名称</span>
            <div class="meta-value">________________</div>
        </div>
        <div class="meta-item">
            <span class="meta-label">交易对手</span>
            <div class="meta-value">________________</div>
        </div>
        <div class="meta-item">
            <span class="meta-label">设计日期</span>
            <div class="meta-value">________________</div>
        </div>
        <div class="meta-item">
            <span class="meta-label">版本</span>
            <div class="meta-value">________________</div>
        </div>
    </div>

    <h2>交易结构要素清单</h2>
    <div class="section-box">
        <table>
            <thead>
                <tr>
                    <th>结构要素</th>
                    <th>标准选项</th>
                    <th>本次交易设定</th>
                    <th>优先级</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>许可类型</strong></td>
                    <td>
                        <div class="checkbox-group">
                            <label class="checkbox-item"><input type="checkbox"> 独占</label>
                            <label class="checkbox-item"><input type="checkbox"> 非独占</label>
                            <label class="checkbox-item"><input type="checkbox"> 独家</label>
                        </div>
                    </td>
                    <td><input type="text" placeholder="请填写"></td>
                    <td><input type="text" placeholder="高/中/低"></td>
                </tr>
                <tr>
                    <td><strong>许可范围</strong></td>
                    <td>
                        <div class="checkbox-group">
                            <label class="checkbox-item"><input type="checkbox"> 全球</label>
                            <label class="checkbox-item"><input type="checkbox"> 区域</label>
                            <label class="checkbox-item"><input type="checkbox"> 国家</label>
                        </div>
                    </td>
                    <td><input type="text" placeholder="请填写"></td>
                    <td><input type="text" placeholder="高/中/低"></td>
                </tr>
                <tr>
                    <td><strong>许可领域</strong></td>
                    <td>
                        <div class="checkbox-group">
                            <label class="checkbox-item"><input type="checkbox"> 全部适应症</label>
                            <label class="checkbox-item"><input type="checkbox"> 特定适应症</label>
                        </div>
                    </td>
                    <td><input type="text" placeholder="请填写"></td>
                    <td><input type="text" placeholder="高/中/低"></td>
                </tr>
                <tr>
                    <td><strong>许可期限</strong></td>
                    <td>
                        <div class="checkbox-group">
                            <label class="checkbox-item"><input type="checkbox"> 固定期限</label>
                            <label class="checkbox-item"><input type="checkbox"> 至专利到期</label>
                        </div>
                    </td>
                    <td><input type="text" placeholder="请填写"></td>
                    <td><input type="text" placeholder="高/中/低"></td>
                </tr>
                <tr>
                    <td><strong>再许可权</strong></td>
                    <td>
                        <div class="checkbox-group">
                            <label class="checkbox-item"><input type="checkbox"> 有</label>
                            <label class="checkbox-item"><input type="checkbox"> 无</label>
                            <label class="checkbox-item"><input type="checkbox"> 经授权可</label>
                        </div>
                    </td>
                    <td><input type="text" placeholder="请填写"></td>
                    <td><input type="text" placeholder="高/中/低"></td>
                </tr>
                <tr>
                    <td><strong>转授权</strong></td>
                    <td>
                        <div class="checkbox-group">
                            <label class="checkbox-item"><input type="checkbox"> 允许</label>
                            <label class="checkbox-item"><input type="checkbox"> 禁止</label>
                        </div>
                    </td>
                    <td><input type="text" placeholder="请填写"></td>
                    <td><input type="text" placeholder="高/中/低"></td>
                </tr>
            </tbody>
        </table>
    </div>

    <h2>首付款（Upfront Payment）估算</h2>
    <div class="section-box">
        <table>
            <thead>
                <tr>
                    <th>管线阶段</th>
                    <th>参考区间（万美元）</th>
                    <th>影响因素</th>
                </tr>
            </thead>
            <tbody>
                <tr><td>临床前</td><td>100-500</td><td>数据成熟度、靶点热门程度</td></tr>
                <tr><td>Phase I</td><td>500-2000</td><td>初步人体数据、安全性验证</td></tr>
                <tr><td>Phase II</td><td>2000-8000</td><td>PoC数据、疗效验证</td></tr>
                <tr><td>Phase III</td><td>5000-20000</td><td>确证性数据、接近上市</td></tr>
            </tbody>
        </table>
        <div class="two-col" style="margin-top: 8pt;">
            <div>
                <label style="font-size: 6pt; color: var(--aux); font-family: 'Inter Tight', sans-serif; text-transform: uppercase;">固定首付款</label>
                <input type="text" placeholder="______ 万美元">
            </div>
            <div>
                <label style="font-size: 6pt; color: var(--aux); font-family: 'Inter Tight', sans-serif; text-transform: uppercase;">股权对冲</label>
                <input type="text" placeholder="______ 万美元或______%股权">
            </div>
        </div>
        <div style="margin-top: 6pt;">
            <label style="font-size: 6pt; color: var(--aux); font-family: 'Inter Tight', sans-serif; text-transform: uppercase;">定价依据</label>
            <input type="text" placeholder="请填写定价依据">
        </div>
    </div>

    <h2>里程碑款项（Milestone Payments）</h2>
    <div class="section-box">
        <table>
            <thead>
                <tr>
                    <th>里程碑类型</th>
                    <th>里程碑事件</th>
                    <th>金额（万美元）</th>
                    <th>付款时间</th>
                    <th>达成条件</th>
                </tr>
            </thead>
            <tbody>
                <tr><td rowspan="6"><strong>研发里程碑</strong></td><td>IND获批</td><td><input type="text"></td><td><input type="text"></td><td><input type="text"></td></tr>
                <tr><td>首例患者入组（Phase I）</td><td><input type="text"></td><td><input type="text"></td><td><input type="text"></td></tr>
                <tr><td>Phase I完成</td><td><input type="text"></td><td><input type="text"></td><td><input type="text"></td></tr>
                <tr><td>首例患者入组（Phase II）</td><td><input type="text"></td><td><input type="text"></td><td><input type="text"></td></tr>
                <tr><td>Phase II完成/PoC</td><td><input type="text"></td><td><input type="text"></td><td><input type="text"></td></tr>
                <tr><td>Phase III完成</td><td><input type="text"></td><td><input type="text"></td><td><input type="text"></td></tr>
                <tr><td rowspan="3"><strong>Regulatory里程碑</strong></td><td>NDA/BLA申报</td><td><input type="text"></td><td><input type="text"></td><td><input type="text"></td></tr>
                <tr><td>NDA/BLA获批</td><td><input type="text"></td><td><input type="text"></td><td><input type="text"></td></tr>
                <tr><td>首个适应症上市</td><td><input type="text"></td><td><input type="text"></td><td><input type="text"></td></tr>
                <tr><td rowspan="3"><strong>销售里程碑</strong></td><td>年销售额达1亿美元</td><td><input type="text"></td><td><input type="text"></td><td><input type="text"></td></tr>
                <tr><td>年销售额达5亿美元</td><td><input type="text"></td><td><input type="text"></td><td><input type="text"></td></tr>
                <tr><td>年销售额达10亿美元</td><td><input type="text"></td><td><input type="text"></td><td><input type="text"></td></tr>
            </tbody>
        </table>
        <div style="text-align: right; padding: 4pt; background: #f0f4f8; border-radius: 3pt; font-family: 'Inter Tight', sans-serif; font-size: 8pt;">
            <strong>里程碑款项总计：</strong> <span style="color: var(--accent); font-weight: 700;">______ 万美元</span>
        </div>
    </div>

    <h2>Royalty率设计</h2>
    <div class="section-box">
        <table class="royalty-table">
            <thead>
                <tr>
                    <th>地区</th>
                    <th>最低Royalty率</th>
                    <th>中位Royalty率</th>
                    <th>本次设定</th>
                </tr>
            </thead>
            <tbody>
                <tr><td><strong>美国</strong></td><td>5%</td><td>8-12%</td><td><input type="text" placeholder="%"></td></tr>
                <tr><td><strong>欧洲</strong></td><td>4%</td><td>6-10%</td><td><input type="text" placeholder="%"></td></tr>
                <tr><td><strong>日本</strong></td><td>4%</td><td>6-10%</td><td><input type="text" placeholder="%"></td></tr>
                <tr><td><strong>中国</strong></td><td>3%</td><td>5-8%</td><td><input type="text" placeholder="%"></td></tr>
                <tr><td><strong>其他新兴市场</strong></td><td>2%</td><td>4-6%</td><td><input type="text" placeholder="%"></td></tr>
            </tbody>
        </table>
        <div style="margin-top: 6pt;">
            <label style="font-size: 6pt; color: var(--aux); font-family: 'Inter Tight', sans-serif; text-transform: uppercase;">Royalty结构设计</label>
            <input type="text" style="margin-top: 3pt;" placeholder="固定/递进/销售里程碑触发">
        </div>
    </div>

    <h2>其他经济条款</h2>
    <div class="section-box">
        <table>
            <thead>
                <tr><th>条款类型</th><th>设计内容</th><th>说明</th></tr>
            </thead>
            <tbody>
                <tr><td><strong>开发费用分担</strong></td><td><input type="text" placeholder="请填写"></td><td><input type="text" placeholder="请填写"></td></tr>
                <tr><td><strong>商业化费用分担</strong></td><td><input type="text" placeholder="请填写"></td><td><input type="text" placeholder="请填写"></td></tr>
                <tr><td><strong>供应价格</strong></td><td><input type="text" placeholder="请填写"></td><td><input type="text" placeholder="请填写"></td></tr>
                <tr><td><strong>研发协助</strong></td><td><input type="text" placeholder="请填写"></td><td><input type="text" placeholder="请填写"></td></tr>
                <tr><td><strong>销售分成</strong></td><td><input type="text" placeholder="请填写"></td><td><input type="text" placeholder="请填写"></td></tr>
            </tbody>
        </table>
    </div>

    <h2>非经济条款要点</h2>
    <div class="section-box">
        <table>
            <thead>
                <tr><th>条款类型</th><th>关键内容</th><th>我方底线</th><th>对方可能要求</th></tr>
            </thead>
            <tbody>
                <tr><td><strong>研发控制权</strong></td><td><input type="text"></td><td><input type="text"></td><td><input type="text"></td></tr>
                <tr><td><strong>商业化决策权</strong></td><td><input type="text"></td><td><input type="text"></td><td><input type="text"></td></tr>
                <tr><td><strong>知识产权归属</strong></td><td><input type="text"></td><td><input type="text"></td><td><input type="text"></td></tr>
                <tr><td><strong>保密义务</strong></td><td><input type="text"></td><td><input type="text"></td><td><input type="text"></td></tr>
                <tr><td><strong>竞业限制</strong></td><td><input type="text"></td><td><input type="text"></td><td><input type="text"></td></tr>
                <tr><td><strong>终止条款</strong></td><td><input type="text"></td><td><input type="text"></td><td><input type="text"></td></tr>
            </tbody>
        </table>
    </div>

    <div class="hint">
        <strong>提示：</strong>交易结构设计是谈判的基础，但也要保持灵活性。好的交易结构应该实现"双赢"，让双方都有动力推动项目成功。
    </div>

    <div class="checklist">
        <div class="checklist-item"><input type="checkbox"> 许可范围已明确</div>
        <div class="checklist-item"><input type="checkbox"> 首付款估算有数据支撑</div>
        <div class="checklist-item"><input type="checkbox"> 里程碑设置覆盖主要研发节点</div>
        <div class="checklist-item"><input type="checkbox"> Royalty率在合理区间内</div>
        <div class="checklist-item"><input type="checkbox"> 开发/商业化费用分担已明确</div>
        <div class="checklist-item"><input type="checkbox"> 核心非经济条款已识别底线</div>
    </div>

    <div class="footer">
        <span>填表人：________________</span>
        <span>日期：________________</span>
        <span>版本：v1.0</span>
    </div>
</body>
</html>'''

with open("D:/新课开发/大健康/03 创新药出海与国际化BD/全流程工具表单/F3_交易结构设计模板.html", "w", encoding="utf-8") as f:
    f.write(html)
print("F3 created successfully")
