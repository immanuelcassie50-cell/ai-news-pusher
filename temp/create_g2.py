import os

html = '''<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>G2 管线估值练习</title>
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
        .three-col { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10pt; }
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
        textarea { border: 0.5pt dashed var(--aux); background: #fafafa; padding: 4pt; min-height: 45pt; resize: none; }
        .calc-row { display: grid; grid-template-columns: 1fr auto auto; gap: 6pt; align-items: center; margin: 4pt 0; font-size: 7.5pt; }
        .calc-row input { text-align: center; }
        .result-box { background: linear-gradient(135deg, var(--header-bg) 0%, #3d4159 100%); color: white; padding: 8pt 10pt; border-radius: 4pt; margin: 8pt 0; text-align: center; }
        .result-box .label { font-size: 6pt; opacity: 0.8; font-family: 'Inter Tight', sans-serif; text-transform: uppercase; }
        .result-box .value { font-size: 16pt; font-weight: 700; }
        .highlight { background: #fff3cd; padding: 1pt 4pt; border-radius: 2pt; }
        .info-box { background: #f8f9fa; border-left: 3pt solid var(--accent); padding: 6pt 8pt; margin: 6pt 0; font-size: 7.5pt; }
        .footer { margin-top: 12pt; padding-top: 8pt; border-top: 1pt solid var(--aux); display: flex; justify-content: space-between; font-size: 6.5pt; color: var(--aux); font-family: 'Inter Tight', sans-serif; }
    </style>
</head>
<body>
    <div class="header">
        <h1>G2 管线估值练习 — HA-001管线的系统性价值评估</h1>
        <div class="meta">
            <span>建议用时：45-60分钟</span>
            <span>题目数量：4个估值任务</span>
            <span>练习方式：个人计算 + 小组讨论</span>
        </div>
    </div>

    <div class="three-col">
        <div class="card">
            <h2><span class="num">1</span>任务一：rNPV法估值</h2>

            <h3>估值假设</h3>
            <table>
                <thead><tr><th>参数</th><th>数值</th><th>依据</th></tr></thead>
                <tbody>
                    <tr><td>成功概率（Phase II→NDA）</td><td><strong>65%</strong></td><td>基于PoC数据</td></tr>
                    <tr><td>折现率</td><td><strong>12%</strong></td><td>行业标准</td></tr>
                    <tr><td>专利有效期至</td><td><strong>2039年</strong></td><td>核心专利</td></tr>
                    <tr><td>峰值销售份额</td><td><input type="text" placeholder="____%" style="width:40pt;"></td><td>竞争格局</td></tr>
                </tbody>
            </table>

            <h3>计算步骤</h3>
            <div class="calc-row">
                <span>NSCLC市场容量：300亿美元</span>
            </div>
            <div class="calc-row">
                <span>目标市场份额：</span>
                <input type="text" placeholder="__%">
                <span>HA-001峰值销售 = <input type="text" style="width:50pt;">亿美元</span>
            </div>

            <h3>年销售预测（简化）</h3>
            <table>
                <thead><tr><th>Year</th><th>销售</th><th>折现因子</th><th>PV</th></tr></thead>
                <tbody>
                    <tr><td>2027 (Y1)</td><td><input type="text" style="width:45pt;"></td><td>1/1.12</td><td><input type="text" style="width:45pt;"></td></tr>
                    <tr><td>2028 (Y2)</td><td><input type="text" style="width:45pt;"></td><td>1/1.12²</td><td><input type="text" style="width:45pt;"></td></tr>
                    <tr><td>2029 (Y3)</td><td><input type="text" style="width:45pt;"></td><td>1/1.12³</td><td><input type="text" style="width:45pt;"></td></tr>
                    <tr><td>2030 (Y4)</td><td><input type="text" style="width:45pt;"></td><td>1/1.12⁴</td><td><input type="text" style="width:45pt;"></td></tr>
                    <tr><td>2031 (Y5)</td><td><input type="text" style="width:45pt;"></td><td>1/1.12⁵</td><td><input type="text" style="width:45pt;"></td></tr>
                </tbody>
            </table>

            <div class="result-box">
                <div class="label">rNPV估值结果</div>
                <div class="value">______ 亿美元</div>
            </div>
        </div>

        <div class="card">
            <h2><span class="num">2</span>任务二：可比交易法</h2>

            <h3>可比交易案例</h3>
            <table>
                <thead><tr><th>案例</th><th>类型</th><th>阶段</th><th>首付款</th><th>总交易额</th></tr></thead>
                <tbody>
                    <tr><td>A</td><td>PD-1单抗</td><td>Phase III</td><td>1.5亿</td><td>8亿</td></tr>
                    <tr><td>B</td><td>PD-L1/TGF-β双抗</td><td>Phase I</td><td>0.5亿</td><td>4亿</td></tr>
                    <tr><td>C</td><td>双特异性抗体</td><td>Phase II</td><td>1.0亿</td><td>6亿</td></tr>
                    <tr><td>D</td><td>IO药物</td><td>Phase II</td><td>2.0亿</td><td>10亿</td></tr>
                </tbody>
            </table>

            <h3>计算步骤</h3>
            <div class="info-box">
                <strong>选择案例：</strong><input type="text" placeholder="A/B/C/D" style="width:30pt;">（理由：____________）
            </div>
            <div class="calc-row" style="margin-top:6pt;">
                <span>首付款/峰值销售比率：</span>
                <input type="text" placeholder="__%">
            </div>
            <div class="calc-row">
                <span>HA-001峰值销售：</span>
                <input type="text" placeholder="__亿">
                <span>亿美元</span>
            </div>
            <div class="calc-row">
                <span>阶段调整：</span>
                <input type="text" placeholder="±__%">
            </div>

            <div class="result-box">
                <div class="label">可比交易法估值结果</div>
                <div class="value">______ 亿美元</div>
            </div>
        </div>

        <div class="card">
            <h2><span class="num">3</span>任务三：成本加成法</h2>

            <h3>计算步骤</h3>
            <div class="info-box">
                <strong>历史研发成本：</strong>8000万美元
            </div>
            <table>
                <thead><tr><th>加成系数</th><th>估值结果</th></tr></thead>
                <tbody>
                    <tr><td>3倍（最低）</td><td>2.4亿美元</td></tr>
                    <tr><td>4倍（合理）</td><td>3.2亿美元</td></tr>
                    <tr><td>5倍（乐观）</td><td>4.0亿美元</td></tr>
                </tbody>
            </table>

            <h3>成功概率调整</h3>
            <div class="calc-row">
                <span>当前成功概率（至上市）：约40%</span>
            </div>
            <div class="calc-row">
                <span>风险调整后估值 = <input type="text" style="width:50pt;">× 40% =</span>
            </div>

            <h3>加上里程碑价值</h3>
            <div class="calc-row">
                <span>剩余里程碑价值：</span>
                <input type="text" placeholder="__亿">
            </div>
            <div class="calc-row">
                <span>总估值 = <input type="text" style="width:40pt;"> + <input type="text" style="width:40pt;"> =</span>
            </div>

            <div class="result-box">
                <div class="label">成本加成法估值结果</div>
                <div class="value">______ 亿美元</div>
            </div>
        </div>
    </div>

    <div class="card" style="margin-top:10pt;">
        <h2 style="border-bottom-color:#667eea;"><span class="num" style="background:#667eea;">4</span>任务四：估值结果综合与敏感性分析</h2>
        <div style="display:grid; grid-template-columns: 1fr 1fr 1fr; gap: 10pt;">
            <div>
                <h3>估值结果汇总</h3>
                <table>
                    <thead><tr><th>方法</th><th>结果</th><th>权重</th><th>加权</th></tr></thead>
                    <tbody>
                        <tr><td>rNPV法</td><td><input type="text" style="width:45pt;"></td><td>40%</td><td></td></tr>
                        <tr><td>可比交易法</td><td><input type="text" style="width:45pt;"></td><td>40%</td><td></td></tr>
                        <tr><td>成本加成法</td><td><input type="text" style="width:45pt;"></td><td>20%</td><td></td></tr>
                    </tbody>
                </table>
                <div class="result-box" style="padding:6pt 8pt;">
                    <div class="label">综合估值</div>
                    <div class="value" style="font-size:14pt;">______ 亿美元</div>
                </div>
            </div>
            <div>
                <h3>敏感性分析</h3>
                <table>
                    <thead><tr><th>假设</th><th>乐观</th><th>基准</th><th>悲观</th></tr></thead>
                    <tbody>
                        <tr><td>成功概率</td><td>75%</td><td>65%</td><td>50%</td></tr>
                        <tr><td>峰值市场份额</td><td>7%</td><td>5%</td><td>3%</td></tr>
                        <tr><td>折现率</td><td>10%</td><td>12%</td><td>15%</td></tr>
                        <tr><td><strong>估值结果</strong></td><td><strong>__亿</strong></td><td><strong>__亿</strong></td><td><strong>__亿</strong></td></tr>
                    </tbody>
                </table>
            </div>
            <div>
                <h3>估值区间确定</h3>
                <div class="info-box">
                    <strong>估值区间：</strong><input type="text" placeholder="__-__亿"> 亿美元
                </div>
                <div class="info-box">
                    <strong>建议报价区间：</strong><input type="text" placeholder="__-__亿"> 亿美元
                </div>
                <h3 style="margin-top:10pt;">讨论问题</h3>
                <div class="info-box" style="background:#fffde7;">
                    <strong>问题1：</strong>哪个估值方法最可靠？为什么？<br><br>
                    <strong>问题2：</strong>哪个假设对估值影响最大？
                </div>
            </div>
        </div>
    </div>

    <div class="footer">
        <span>课程：出海BD实战：创新药License-out与国际化合作</span>
        <span>G2 管线估值练习</span>
    </div>
</body>
</html>'''

with open("D:/新课开发/大健康/03 创新药出海与国际化BD/全流程练习题库/G2_管线估值练习.html", "w", encoding="utf-8") as f:
    f.write(html)
print("G2 created")
