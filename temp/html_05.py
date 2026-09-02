# -*- coding: utf-8 -*-
"""生成 HTML 05 - 成果展示与工具包"""

def create_html_05():
    html = '''<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>手册进化_05_成果展示与工具包</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;600;700&family=Noto+Sans+SC:wght@300;400;500;700&display=swap" rel="stylesheet">
    <style>
        :root {
            --primary: #2b2d42;
            --secondary: #8d99ae;
            --accent: #ef233c;
            --accent-light: #d90429;
            --bg: #edf2f4;
            --bg-card: #ffffff;
            --text: #1a1a2e;
            --text-light: #6c757d;
            --success: #276749;
            --success-bg: #f0fff4;
        }

        * { margin: 0; padding: 0; box-sizing: border-box; }

        body {
            font-family: 'Noto Sans SC', -apple-system, BlinkMacSystemFont, sans-serif;
            background: var(--bg);
            color: var(--text);
            line-height: 1.8;
            font-size: 15px;
        }

        .nav {
            background: var(--primary);
            color: white;
            padding: 12px 24px;
            position: sticky;
            top: 0;
            z-index: 100;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .nav-title {
            font-family: 'Noto Serif SC', serif;
            font-size: 1rem;
            font-weight: 600;
        }

        .nav-links {
            display: flex;
            gap: 8px;
        }

        .nav-links a {
            color: rgba(255,255,255,0.85);
            text-decoration: none;
            padding: 6px 12px;
            border-radius: 6px;
            font-size: 0.85rem;
        }

        .nav-links a:hover, .nav-links a.active {
            background: rgba(255,255,255,0.15);
            color: white;
        }

        .container {
            max-width: 900px;
            margin: 0 auto;
            padding: 32px 24px;
        }

        .doc-header {
            background: linear-gradient(135deg, var(--primary) 0%, #3d405b 100%);
            color: white;
            padding: 40px 32px;
            border-radius: 12px;
            margin-bottom: 32px;
            text-align: center;
        }

        .doc-header h1 {
            font-family: 'Noto Serif SC', serif;
            font-size: 1.8rem;
            font-weight: 700;
            margin-bottom: 8px;
        }

        .doc-header .subtitle {
            font-size: 1rem;
            opacity: 0.9;
        }

        .doc-header .tag {
            display: inline-block;
            background: var(--accent);
            color: white;
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 0.75rem;
            margin-top: 12px;
        }

        .section {
            background: var(--bg-card);
            border-radius: 12px;
            padding: 28px 32px;
            margin-bottom: 24px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.06);
        }

        .section-title {
            font-family: 'Noto Serif SC', serif;
            font-size: 1.25rem;
            font-weight: 600;
            color: var(--primary);
            margin-bottom: 20px;
            padding-bottom: 12px;
            border-bottom: 2px solid var(--accent);
        }

        .deliverable-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 16px;
            margin: 20px 0;
        }

        .deliverable-card {
            background: var(--bg);
            border-radius: 10px;
            padding: 20px 16px;
            text-align: center;
            border-top: 3px solid var(--accent);
        }

        .deliverable-icon {
            font-size: 2rem;
            margin-bottom: 12px;
        }

        .deliverable-name {
            font-weight: 600;
            color: var(--primary);
            margin-bottom: 6px;
        }

        .deliverable-desc {
            font-size: 0.8rem;
            color: var(--text-light);
        }

        .transformation-flow {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 16px;
            margin: 32px 0;
            flex-wrap: wrap;
        }

        .flow-box {
            background: var(--bg);
            padding: 16px 24px;
            border-radius: 10px;
            text-align: center;
            min-width: 140px;
        }

        .flow-box.old {
            border: 2px solid var(--secondary);
        }

        .flow-box.new {
            border: 2px solid var(--success);
            background: var(--success-bg);
        }

        .flow-box .label {
            font-size: 0.75rem;
            color: var(--text-light);
            margin-bottom: 4px;
        }

        .flow-box .content {
            font-weight: 600;
            color: var(--primary);
        }

        .flow-arrow {
            color: var(--accent);
            font-size: 1.5rem;
            font-weight: bold;
        }

        .comparison-table {
            width: 100%;
            border-collapse: collapse;
            font-size: 0.9rem;
            margin: 20px 0;
        }

        .comparison-table th {
            background: var(--primary);
            color: white;
            padding: 12px;
            text-align: left;
        }

        .comparison-table td {
            padding: 12px;
            border-bottom: 1px solid #e2e8f0;
        }

        .comparison-table tr:nth-child(even) {
            background: var(--bg);
        }

        .tool-list {
            margin: 20px 0;
        }

        .tool-item {
            display: flex;
            align-items: flex-start;
            gap: 16px;
            padding: 16px;
            background: var(--bg);
            border-radius: 10px;
            margin-bottom: 12px;
        }

        .tool-num {
            background: var(--accent);
            color: white;
            width: 28px;
            height: 28px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            font-size: 0.85rem;
            flex-shrink: 0;
        }

        .tool-info {
            flex: 1;
        }

        .tool-name {
            font-weight: 600;
            color: var(--primary);
            margin-bottom: 4px;
        }

        .tool-desc {
            font-size: 0.85rem;
            color: var(--text-light);
        }

        .success-box {
            background: var(--success-bg);
            border: 1px solid var(--success);
            border-radius: 10px;
            padding: 24px;
            margin: 24px 0;
            text-align: center;
        }

        .success-box .title {
            font-family: 'Noto Serif SC', serif;
            font-size: 1.3rem;
            font-weight: 700;
            color: var(--success);
            margin-bottom: 12px;
        }

        .success-box .desc {
            color: var(--text-light);
            font-size: 0.95rem;
        }

        .summary-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 16px;
            margin: 20px 0;
        }

        .summary-card {
            background: var(--bg);
            border-radius: 10px;
            padding: 20px;
        }

        .summary-card .card-title {
            font-weight: 600;
            color: var(--primary);
            margin-bottom: 12px;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .summary-card ul {
            margin-left: 20px;
            font-size: 0.9rem;
            color: var(--text-light);
        }

        .summary-card li {
            margin-bottom: 6px;
        }

        .nav-footer {
            display: flex;
            justify-content: space-between;
            margin-top: 32px;
            padding-top: 20px;
            border-top: 1px solid var(--border, #e2e8f0);
        }

        .nav-footer a {
            color: var(--primary);
            text-decoration: none;
            font-size: 0.9rem;
            display: flex;
            align-items: center;
            gap: 6px;
        }

        .nav-footer a:hover {
            color: var(--accent);
        }

        @media print {
            body { background: white; }
            .section { box-shadow: none; border: 1px solid #ddd; }
            .nav { display: none; }
        }

        @media (max-width: 768px) {
            .deliverable-grid { grid-template-columns: 1fr; }
            .summary-grid { grid-template-columns: 1fr; }
            .comparison-table { font-size: 0.8rem; }
        }
    </style>
</head>
<body>
    <nav class="nav">
        <span class="nav-title">手册进化：从"阅读版"到"执行手册"</span>
        <div class="nav-links">
            <a href="01-开篇与转化框架.html">01</a>
            <a href="02-场景定位与标准动作转化.html">02</a>
            <a href="03-判断标准卡与分级处置.html">03</a>
            <a href="04-情境案例与高频问答.html">04</a>
            <a href="05-成果展示与工具包.html" class="active">05</a>
        </div>
    </nav>

    <div class="container">
        <header class="doc-header">
            <h1>成果展示与工具包</h1>
            <p class="subtitle">Module 05: 课程成果汇总与工具包说明</p>
            <span class="tag">完成手册转化的完整路径</span>
        </header>

        <section class="section">
            <h2 class="section-title">课程核心产出</h2>

            <div class="transformation-flow">
                <div class="flow-box old">
                    <div class="label">输入</div>
                    <div class="content">阅读版手册</div>
                </div>
                <span class="flow-arrow">→</span>
                <div class="flow-box new">
                    <div class="label">输出</div>
                    <div class="content">执行手册</div>
                </div>
            </div>

            <div class="deliverable-grid">
                <div class="deliverable-card">
                    <div class="deliverable-icon">📋</div>
                    <div class="deliverable-name">场景节点链</div>
                    <div class="deliverable-desc">把场景拆解为可照做的节点序列</div>
                </div>
                <div class="deliverable-card">
                    <div class="deliverable-icon">✅</div>
                    <div class="deliverable-name">标准动作清单</div>
                    <div class="deliverable-desc">可打卡、可核对的清单结构</div>
                </div>
                <div class="deliverable-card">
                    <div class="deliverable-icon">🎯</div>
                    <div class="deliverable-name">判断标准卡</div>
                    <div class="deliverable-desc">关键节点的判断条件与逻辑</div>
                </div>
                <div class="deliverable-card">
                    <div class="deliverable-icon">📊</div>
                    <div class="deliverable-name">分级处置表</div>
                    <div class="deliverable-desc">按严重程度分类的处置动作</div>
                </div>
                <div class="deliverable-card">
                    <div class="deliverable-icon">📖</div>
                    <div class="deliverable-name">情境案例</div>
                    <div class="deliverable-desc">真实场景串起的判断逻辑</div>
                </div>
                <div class="deliverable-card">
                    <div class="deliverable-icon">❓</div>
                    <div class="deliverable-name">高频问答</div>
                    <div class="deliverable-desc">覆盖真正会卡壳的现场问题</div>
                </div>
            </div>
        </section>

        <section class="section">
            <h2 class="section-title">阅读版 vs 执行版：全面对比</h2>

            <table class="comparison-table">
                <thead>
                    <tr>
                        <th>对比维度</th>
                        <th>阅读版手册</th>
                        <th>执行版手册</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>内容组织</strong></td>
                        <td>按信息完整度组织<br>（背景→流程→注意事项）</td>
                        <td>按决策点组织<br>（条件→动作→判断→处置）</td>
                    </tr>
                    <tr>
                        <td><strong>颗粒度</strong></td>
                        <td>模糊表述<br>（"注意安全"、"必要时"）</td>
                        <td>可量化条件<br>（温度>85℃、回流比<1.2）</td>
                    </tr>
                    <tr>
                        <td><strong>结构</strong></td>
                        <td>段落式叙述<br>逻辑隐藏在文字中</td>
                        <td>卡片式结构<br>逻辑显性化</td>
                    </tr>
                    <tr>
                        <td><strong>断点</strong></td>
                        <td>一带而过<br>（"视情况处理"）</td>
                        <td>明确触发条件<br>和决策路径</td>
                    </tr>
                    <tr>
                        <td><strong>异常处理</strong></td>
                        <td>笼统描述<br>（"异常情况报IT"）</td>
                        <td>分级分类<br>（轻微→中度→严重）</td>
                    </tr>
                    <tr>
                        <td><strong>学习效果</strong></td>
                        <td>读得懂，但不知道怎么判断和执行</td>
                        <td>知道什么时候该做什么判断，怎么处置</td>
                    </tr>
                </tbody>
            </table>
        </section>

        <section class="section">
            <h2 class="section-title">配套工具包</h2>

            <div class="tool-list">
                <div class="tool-item">
                    <div class="tool-num">1</div>
                    <div class="tool-info">
                        <div class="tool-name">场景节点链写作模板</div>
                        <div class="tool-desc">将场景描述转化为可照做的节点链（含触发条件、动作、结果确认）</div>
                    </div>
                </div>
                <div class="tool-item">
                    <div class="tool-num">2</div>
                    <div class="tool-info">
                        <div class="tool-name">标准动作清单模板</div>
                        <div class="tool-desc">把模糊流程写成可打卡、可核对的清单结构</div>
                    </div>
                </div>
                <div class="tool-item">
                    <div class="tool-num">3</div>
                    <div class="tool-info">
                        <div class="tool-name">判断标准卡模板</div>
                        <div class="tool-desc">在关键节点给出判断条件（条件信号+判断结论+对应动作+关键变量+可忽略因素）</div>
                    </div>
                </div>
                <div class="tool-item">
                    <div class="tool-num">4</div>
                    <div class="tool-info">
                        <div class="tool-name">分级处置表模板</div>
                        <div class="tool-desc">按严重程度分级，每级对应明确的处置动作和时限</div>
                    </div>
                </div>
                <div class="tool-item">
                    <div class="tool-num">5</div>
                    <div class="tool-info">
                        <div class="tool-name">情境案例写作模板</div>
                        <div class="tool-desc">用真实场景串起判断逻辑（情境背景+异常征兆+判断过程+处置动作+结果复盘）</div>
                    </div>
                </div>
                <div class="tool-item">
                    <div class="tool-num">6</div>
                    <div class="tool-info">
                        <div class="tool-name">高频问答分类框架</div>
                        <div class="tool-desc">覆盖真正会卡壳的现场问题（边界判断+遗漏处理+多发异常+特殊情况等）</div>
                    </div>
                </div>
                <div class="tool-item">
                    <div class="tool-num">7</div>
                    <div class="tool-info">
                        <div class="tool-name">手册转化自检清单</div>
                        <div class="tool-desc">诊断现有手册缺什么，验收转化完成度（12项检查要点）</div>
                    </div>
                </div>
            </div>
        </section>

        <section class="section">
            <h2 class="section-title">课程核心主张</h2>

            <div class="success-box">
                <div class="title">读得懂 ≠ 做得对</div>
                <div class="desc">
                    阅读版手册解决的是"信息有没有被交代清楚"<br>
                    执行手册解决的是"一个从没干过这件事的人，<br>
                    拿着它，能不能在没人带的情况下把事做对、做完整、不出事故"<br><br>
                    <strong>这中间差的不是内容量，是内容的组织方式。</strong>
                </div>
            </div>

            <div class="summary-grid">
                <div class="summary-card">
                    <div class="card-title">📌 转化前</div>
                    <ul>
                        <li>信息完整但组织混乱</li>
                        <li>判断逻辑隐含在文字中</li>
                        <li>异常处理一带而过</li>
                        <li>执行者需要自己提炼判断</li>
                    </ul>
                </div>
                <div class="summary-card">
                    <div class="card-title">📌 转化后</div>
                    <ul>
                        <li>按决策点组织内容</li>
                        <li>判断逻辑显性化</li>
                        <li>分级分类明确处置</li>
                        <li>执行者可以直接照做</li>
                    </ul>
                </div>
            </div>
        </section>

        <section class="section">
            <h2 class="section-title">后续使用建议</h2>

            <div class="summary-card" style="margin-bottom: 16px;">
                <div class="card-title">🎯 立即行动</div>
                <ul>
                    <li>选择一门现有课程的手册，用自检清单诊断缺什么</li>
                    <li>选择一个模块，用节点链模板做一次转化练习</li>
                    <li>和同事互相用自检清单审查对方的手册</li>
                </ul>
            </div>

            <div class="summary-card">
                <div class="card-title">📈 持续迭代</div>
                <ul>
                    <li>每次培训后收集执行者的反馈，更新手册</li>
                    <li>定期用自检清单复盘手册的转化完成度</li>
                    <li>建立手册迭代机制，让手册持续进化</li>
                </ul>
            </div>
        </section>

        <nav class="nav-footer">
            <a href="04-情境案例与高频问答.html">← 上一节：情境案例与高频问答</a>
            <a href="01-开篇与转化框架.html">返回目录 →</a>
        </nav>
    </div>
</body>
</html>'''

    return html

if __name__ == '__main__':
    html = create_html_05()
    output_path = 'D:/新课开发/经验萃取/阅读手册转执行手册/完整课程包/009-HTML可视化/05-成果展示与工具包.html'
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(html)
    print(f'已生成: {output_path}')