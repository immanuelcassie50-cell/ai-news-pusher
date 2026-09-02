# -*- coding: utf-8 -*-
"""生成 HTML 03 - 判断标准卡与分级处置"""

def create_html_03():
    html = '''<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>手册进化_03_判断标准卡与分级处置</title>
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

        .card {
            background: var(--bg);
            border-radius: 8px;
            padding: 20px 24px;
            margin-bottom: 16px;
            border-left: 4px solid var(--accent);
        }

        .card-title {
            font-weight: 600;
            color: var(--primary);
            margin-bottom: 12px;
            font-size: 1rem;
        }

        .card-content {
            color: var(--text-light);
            font-size: 0.95rem;
        }

        .card-content ul {
            margin-left: 20px;
            margin-top: 8px;
        }

        .card-content li {
            margin-bottom: 6px;
        }

        .highlight-box {
            background: linear-gradient(135deg, #fff5f5 0%, #fed7d7 100%);
            border: 1px solid var(--accent);
            border-radius: 8px;
            padding: 20px 24px;
            margin: 20px 0;
        }

        .highlight-box .label {
            color: var(--accent);
            font-weight: 600;
            font-size: 0.85rem;
            margin-bottom: 8px;
        }

        .standard-card {
            background: var(--bg-card);
            border: 1px solid var(--border, #e2e8f0);
            border-radius: 10px;
            padding: 20px;
            margin-bottom: 16px;
        }

        .standard-header {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 14px;
        }

        .standard-icon {
            width: 36px;
            height: 36px;
            background: var(--accent);
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: 700;
        }

        .standard-title {
            font-weight: 600;
            color: var(--primary);
        }

        .condition-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
            margin: 16px 0;
        }

        .condition-item {
            background: var(--bg);
            padding: 14px 16px;
            border-radius: 8px;
            font-size: 0.9rem;
        }

        .condition-item .num {
            color: var(--accent);
            font-weight: 600;
        }

        .condition-item .label {
            color: var(--text-light);
            font-size: 0.8rem;
        }

        .level-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 16px;
            margin-top: 20px;
        }

        .level-card {
            background: var(--bg);
            border-radius: 10px;
            padding: 20px 16px;
            text-align: center;
            position: relative;
            overflow: hidden;
        }

        .level-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
        }

        .level-card.level-1::before { background: #48bb78; }
        .level-card.level-2::before { background: #ed8936; }
        .level-card.level-3::before { background: var(--accent); }

        .level-card .level-name {
            font-size: 1.1rem;
            font-weight: 700;
            margin-bottom: 8px;
        }

        .level-1 .level-name { color: #276749; }
        .level-2 .level-name { color: #c05621; }
        .level-3 .level-name { color: var(--accent); }

        .level-card .level-desc {
            font-size: 0.85rem;
            color: var(--text-light);
            margin-bottom: 12px;
        }

        .level-card .level-action {
            background: var(--bg-card);
            padding: 10px;
            border-radius: 6px;
            font-size: 0.85rem;
            color: var(--primary);
        }

        .level-card .level-time {
            margin-top: 10px;
            font-size: 0.8rem;
            color: var(--accent);
            font-weight: 600;
        }

        .formula-box {
            background: var(--primary);
            color: white;
            border-radius: 10px;
            padding: 24px;
            margin: 20px 0;
            text-align: center;
        }

        .formula-box .title {
            font-size: 0.9rem;
            opacity: 0.8;
            margin-bottom: 12px;
        }

        .formula-box .formula {
            font-family: 'Noto Serif SC', serif;
            font-size: 1.2rem;
            font-weight: 600;
        }

        .flow-diagram {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
            margin: 24px 0;
            flex-wrap: wrap;
        }

        .flow-step {
            background: var(--bg);
            padding: 12px 20px;
            border-radius: 8px;
            font-size: 0.9rem;
            color: var(--primary);
            font-weight: 500;
        }

        .flow-arrow {
            color: var(--accent);
            font-size: 1.2rem;
        }

        .tip-box {
            background: #ebf8ff;
            border: 1px solid #63b3ed;
            border-radius: 8px;
            padding: 16px 20px;
            margin: 16px 0;
        }

        .tip-box .tip-label {
            color: #2b6cb0;
            font-weight: 600;
            font-size: 0.85rem;
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
    </style>
</head>
<body>
    <nav class="nav">
        <span class="nav-title">手册进化：从"阅读版"到"执行手册"</span>
        <div class="nav-links">
            <a href="01-开篇与转化框架.html">01</a>
            <a href="02-场景定位与标准动作转化.html">02</a>
            <a href="03-判断标准卡与分级处置.html" class="active">03</a>
            <a href="04-情境案例与高频问答.html">04</a>
            <a href="05-成果展示与工具包.html">05</a>
        </div>
    </nav>

    <div class="container">
        <header class="doc-header">
            <h1>判断标准卡与分级处置</h1>
            <p class="subtitle">Module 03: 在关键节点给出判断条件，按严重程度分级处置</p>
            <span class="tag">核心工具：判断标准卡 + 分级处置表</span>
        </header>

        <section class="section">
            <h2 class="section-title">为什么需要判断标准卡？</h2>
            <div class="card">
                <div class="card-title">阅读版的问题</div>
                <div class="card-content">
                    <ul>
                        <li>"注意观察温度变化" — 多少度算异常？没有说</li>
                        <li>"必要时联系技术人员" — 什么时候必要？没定义</li>
                        <li>"及时处理" — 多及时？5分钟？30分钟？</li>
                    </ul>
                </div>
            </div>
            <div class="highlight-box">
                <div class="label">判断标准卡解决的核心问题</div>
                <p>把隐性的判断逻辑显性化，让执行者不需要"自己判断该判断什么"</p>
            </div>
        </section>

        <section class="section">
            <h2 class="section-title">判断标准卡的结构</h2>
            <div class="formula-box">
                <div class="title">判断标准卡 =</div>
                <div class="formula">条件信号 → 判断结论 → 对应动作 → 关键变量 + 可忽略因素</div>
            </div>

            <div class="condition-grid">
                <div class="condition-item">
                    <div class="num">条件信号</div>
                    <div class="label">满足什么条件时触发判断？</div>
                </div>
                <div class="condition-item">
                    <div class="num">判断结论</div>
                    <div class="label">满足条件后得出什么结论？</div>
                </div>
                <div class="condition-item">
                    <div class="num">对应动作</div>
                    <div class="label">结论后立即执行什么动作？</div>
                </div>
                <div class="condition-item">
                    <div class="num">关键变量</div>
                    <div class="label">哪些参数影响判断？</div>
                </div>
            </div>

            <div class="card">
                <div class="card-title">可忽略因素（关键！）</div>
                <div class="card-content">
                    明确标注哪些因素<strong>不影响</strong>判断，避免执行者被无关信息干扰。
                    <br><br>
                    示例：判断塔顶温升是否异常时，<strong>环境温度变化可忽略</strong>（因为工艺设计已考虑温差补偿）
                </div>
            </div>
        </section>

        <section class="section">
            <h2 class="section-title">案例：塔顶温升异常判断</h2>

            <div class="standard-card">
                <div class="standard-header">
                    <div class="standard-icon">!</div>
                    <div class="standard-title">判断标准卡：塔顶温升异常</div>
                </div>

                <div class="condition-grid">
                    <div class="condition-item">
                        <div class="num">条件信号 1</div>
                        <div class="label">塔顶温度 > 85℃</div>
                    </div>
                    <div class="condition-item">
                        <div class="num">条件信号 2</div>
                        <div class="label">回流比 < 1.2</div>
                    </div>
                </div>

                <div style="text-align: center; margin: 16px 0; color: var(--accent); font-weight: 600;">
                    同时满足 → 判断结论：冷凝效果下降，需立即处置
                </div>

                <div class="card-content" style="margin-top: 16px;">
                    <strong>对应动作：</strong>
                    <ul>
                        <li>① 降低原料进料量30%</li>
                        <li>② 开大循环冷却水流量</li>
                        <li>③ 观察10分钟，如温度持续上升立即停料</li>
                    </ul>
                </div>
            </div>

            <div class="flow-diagram">
                <div class="flow-step">发现温度>85℃</div>
                <span class="flow-arrow">→</span>
                <div class="flow-step">检查回流比</div>
                <span class="flow-arrow">→</span>
                <div class="flow-step">确认回流比<1.2</div>
                <span class="flow-arrow">→</span>
                <div class="flow-step">执行降温处置</div>
            </div>

            <div class="tip-box">
                <div class="tip-label">💡 关键变量 vs 可忽略因素</div>
                <p style="margin-top: 8px; font-size: 0.9rem;">
                    <strong>关键变量：</strong>温度阈值（85℃）、时间窗口（10分钟）<br>
                    <strong>可忽略因素：</strong>环境温度变化、进水压力波动（±5%以内）
                </p>
            </div>
        </section>

        <section class="section">
            <h2 class="section-title">分级处置：按严重程度分类</h2>
            <p style="margin-bottom: 20px; color: var(--text-light);">
                不是所有异常都一个处置方式。按严重程度分级，每级对应明确的处置动作和时限。
            </p>

            <div class="level-grid">
                <div class="level-card level-1">
                    <div class="level-name">轻微</div>
                    <div class="level-desc">参数轻微偏移<br>自行调整可恢复</div>
                    <div class="level-action">降低进料量<br>加大冷却</div>
                    <div class="level-time">5分钟内处置</div>
                </div>
                <div class="level-card level-2">
                    <div class="level-name">中度</div>
                    <div class="level-desc">参数明显异常<br>需技术支持</div>
                    <div class="level-action">联系班长<br>远程指导</div>
                    <div class="level-time">立即联系</div>
                </div>
                <div class="level-card level-3">
                    <div class="level-name">严重</div>
                    <div class="level-desc">参数失控<br>有安全风险</div>
                    <div class="level-action">立即停机<br>上报+疏散</div>
                    <div class="level-time">即时处置</div>
                </div>
            </div>

            <div class="highlight-box" style="margin-top: 24px;">
                <div class="label">分级原则</div>
                <ul style="margin-top: 8px;">
                    <li><strong>轻微：</strong>执行者自己能处理，不升级</li>
                    <li><strong>中度：</strong>需要技术支持，但不需要外部救援</li>
                    <li><strong>严重：</strong>需要启动应急流程，可能涉及人身安全</li>
                </ul>
            </div>
        </section>

        <section class="section">
            <h2 class="section-title">分级处置表模板</h2>
            <table style="width: 100%; border-collapse: collapse; font-size: 0.9rem;">
                <thead>
                    <tr style="background: var(--primary); color: white;">
                        <th style="padding: 12px; text-align: left;">分级</th>
                        <th style="padding: 12px; text-align: left;">判断条件</th>
                        <th style="padding: 12px; text-align: left;">处置动作</th>
                        <th style="padding: 12px; text-align: left;">时限</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="background: #f0fff4;">
                        <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;"><strong style="color: #276749;">轻微</strong></td>
                        <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;">参数轻微偏移，自行调整可恢复</td>
                        <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;">降低进料量+加大冷却</td>
                        <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;">5分钟</td>
                    </tr>
                    <tr style="background: #fffaf0;">
                        <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;"><strong style="color: #c05621;">中度</strong></td>
                        <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;">参数明显异常，需技术支持</td>
                        <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;">联系班长远程指导</td>
                        <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;">立即</td>
                    </tr>
                    <tr style="background: #fff5f5;">
                        <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;"><strong style="color: var(--accent);">严重</strong></td>
                        <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;">参数失控，有安全风险</td>
                        <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;">立即停机+上报+疏散</td>
                        <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;">即时</td>
                    </tr>
                </tbody>
            </table>
        </section>

        <section class="section">
            <h2 class="section-title">本模块要点总结</h2>
            <div class="card">
                <div class="card-title">判断标准卡的核心价值</div>
                <div class="card-content">
                    把"经验判断"转化为"条件判断"，让新人也能准确判断。
                </div>
            </div>
            <div class="card">
                <div class="card-title">分级处置的核心价值</div>
                <div class="card-content">
                    让执行者知道什么时候该自己处理，什么时候该升级，避免两个极端：过度谨慎或过度冒险。
                </div>
            </div>
            <div class="card">
                <div class="card-title">常见错误</div>
                <div class="card-content">
                    <ul>
                        <li>判断条件模糊（"温度异常"而不是">85℃"）</li>
                        <li>缺少可忽略因素（让执行者无所适从）</li>
                        <li>分级标准不清晰（不知道什么情况算"严重"）</li>
                    </ul>
                </div>
            </div>
        </section>

        <nav class="nav-footer">
            <a href="02-场景定位与标准动作转化.html">← 上一节：场景定位与标准动作转化</a>
            <a href="04-情境案例与高频问答.html">下一节：情境案例与高频问答 →</a>
        </nav>
    </div>
</body>
</html>'''

    return html

if __name__ == '__main__':
    html = create_html_03()
    output_path = 'D:/新课开发/经验萃取/阅读手册转执行手册/完整课程包/009-HTML可视化/03-判断标准卡与分级处置.html'
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(html)
    print(f'已生成: {output_path}')