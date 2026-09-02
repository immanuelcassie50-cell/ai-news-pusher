# -*- coding: utf-8 -*-
"""生成 HTML 04 - 情境案例与高频问答"""

def create_html_04():
    html = '''<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>手册进化_04_情境案例与高频问答</title>
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

        .case-card {
            background: var(--bg);
            border-radius: 10px;
            padding: 24px;
            margin: 20px 0;
            border-left: 4px solid var(--accent);
        }

        .case-header {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 16px;
        }

        .case-badge {
            background: var(--accent);
            color: white;
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 0.8rem;
            font-weight: 600;
        }

        .case-title {
            font-weight: 600;
            color: var(--primary);
        }

        .case-timeline {
            position: relative;
            padding-left: 24px;
            margin: 20px 0;
        }

        .case-timeline::before {
            content: '';
            position: absolute;
            left: 6px;
            top: 0;
            bottom: 0;
            width: 2px;
            background: var(--secondary);
        }

        .timeline-item {
            position: relative;
            margin-bottom: 20px;
            padding-left: 20px;
        }

        .timeline-item::before {
            content: '';
            position: absolute;
            left: -18px;
            top: 8px;
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background: var(--accent);
            border: 2px solid var(--bg);
        }

        .timeline-item.situation::before { background: #48bb78; }
        .timeline-item.signal::before { background: #ed8936; }
        .timeline-item.action::before { background: var(--accent); }
        .timeline-item.result::before { background: #4299e1; }

        .timeline-label {
            font-size: 0.75rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 4px;
        }

        .timeline-item.situation .timeline-label { color: #276749; }
        .timeline-item.signal .timeline-label { color: #c05621; }
        .timeline-item.action .timeline-label { color: var(--accent); }
        .timeline-item.result .timeline-label { color: #2b6cb0; }

        .timeline-content {
            background: var(--bg-card);
            padding: 12px 16px;
            border-radius: 8px;
            font-size: 0.95rem;
        }

        .comparison-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            margin: 20px 0;
        }

        .comparison-card {
            background: var(--bg);
            border-radius: 10px;
            padding: 20px;
        }

        .comparison-card.before {
            border-top: 3px solid var(--secondary);
        }

        .comparison-card.after {
            border-top: 3px solid #48bb78;
        }

        .comparison-label {
            font-size: 0.75rem;
            font-weight: 600;
            text-transform: uppercase;
            margin-bottom: 12px;
        }

        .comparison-card.before .comparison-label { color: var(--secondary); }
        .comparison-card.after .comparison-label { color: #276749; }

        .comparison-content {
            font-size: 0.95rem;
            color: var(--text-light);
        }

        .qa-section {
            margin: 24px 0;
        }

        .qa-item {
            background: var(--bg);
            border-radius: 10px;
            padding: 20px;
            margin-bottom: 16px;
        }

        .qa-q {
            display: flex;
            align-items: flex-start;
            gap: 12px;
            margin-bottom: 12px;
        }

        .qa-badge {
            background: var(--accent);
            color: white;
            padding: 2px 8px;
            border-radius: 4px;
            font-size: 0.75rem;
            font-weight: 600;
            flex-shrink: 0;
        }

        .qa-question {
            font-weight: 600;
            color: var(--primary);
        }

        .qa-a {
            display: flex;
            align-items: flex-start;
            gap: 12px;
            background: var(--bg-card);
            padding: 12px 16px;
            border-radius: 8px;
            border-left: 3px solid #48bb78;
        }

        .qa-badge-a {
            background: #48bb78;
            color: white;
            padding: 2px 8px;
            border-radius: 4px;
            font-size: 0.75rem;
            font-weight: 600;
            flex-shrink: 0;
        }

        .qa-answer {
            color: var(--text-light);
            font-size: 0.9rem;
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

        .tip-box {
            background: #f0fff4;
            border: 1px solid #48bb78;
            border-radius: 8px;
            padding: 16px 20px;
            margin: 16px 0;
        }

        .tip-box .tip-label {
            color: #276749;
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
            <a href="03-判断标准卡与分级处置.html">03</a>
            <a href="04-情境案例与高频问答.html" class="active">04</a>
            <a href="05-成果展示与工具包.html">05</a>
        </div>
    </nav>

    <div class="container">
        <header class="doc-header">
            <h1>情境案例与高频问答</h1>
            <p class="subtitle">Module 04: 用真实场景串起判断逻辑，覆盖真正会卡壳的问题</p>
            <span class="tag">核心工具：案例五要素 + 问答分类框架</span>
        </header>

        <section class="section">
            <h2 class="section-title">为什么需要情境案例？</h2>
            <div class="highlight-box">
                <div class="label">案例的核心价值</div>
                <p>案例让人有"代入感"——看到真实场景，就能把前面的节点链、判断标准、分级处置串起来理解。</p>
            </div>
            <p style="margin-top: 16px; color: var(--text-light);">
                好的案例不是"正面典型"，而是<strong>真实的问题解决过程</strong>——包括犹豫、判断、决策、复盘。
            </p>
        </section>

        <section class="section">
            <h2 class="section-title">案例示范：反应釜升温异常处置</h2>

            <div class="case-card">
                <div class="case-header">
                    <span class="case-badge">化工场景</span>
                    <span class="case-title">反应釜运行中，塔顶温度突然升高</span>
                </div>

                <div class="case-timeline">
                    <div class="timeline-item situation">
                        <div class="timeline-label">情境背景</div>
                        <div class="timeline-content">
                            <strong>14:30</strong>，反应釜已稳定运行2小时，操作员小王按例行巡检。
                        </div>
                    </div>
                    <div class="timeline-item signal">
                        <div class="timeline-label">异常征兆</div>
                        <div class="timeline-content">
                            DCS画面显示：塔顶温度从82℃缓慢升至<strong>86℃</strong>，回流比从1.4降至<strong>1.1</strong>。
                        </div>
                    </div>
                    <div class="timeline-item action">
                        <div class="timeline-label">判断与处置</div>
                        <div class="timeline-content">
                            小王判断：温度>85℃ + 回流比<1.2 → 冷凝效果下降<br><br>
                            立即动作：<br>
                            ① 降低原料进料量30%<br>
                            ② 开大循环冷却水流量<br>
                            ③ 观察10分钟
                        </div>
                    </div>
                    <div class="timeline-item result">
                        <div class="timeline-label">结果复盘</div>
                        <div class="timeline-content">
                            10分钟后，塔顶温度回落至83℃，回流比恢复至1.3。<br>
                            复盘原因：冷却水进水温度偏高导致冷凝效率下降。
                        </div>
                    </div>
                </div>
            </div>

            <div class="tip-box">
                <div class="tip-label">💡 案例编写检查清单</div>
                <p style="margin-top: 8px; font-size: 0.9rem;">
                    ☑ 有具体时间节点 ☑ 有量化参数 ☑ 有判断逻辑 ☑ 有处置动作 ☑ 有结果反馈
                </p>
            </div>
        </section>

        <section class="section">
            <h2 class="section-title">阅读版 vs 执行版：案例对比</h2>

            <div class="comparison-grid">
                <div class="comparison-card before">
                    <div class="comparison-label">阅读版（原始素材）</div>
                    <div class="comparison-content">
                        "反应釜运行过程中，如发现温度异常，应及时采取措施，必要时联系技术人员进行处理。"
                    </div>
                </div>
                <div class="comparison-card after">
                    <div class="comparison-label">执行版（转化后）</div>
                    <div class="comparison-content">
                        <strong>触发：</strong>塔顶温度>85℃ 且 回流比<1.2<br>
                        <strong>判断：</strong>冷凝效果下降<br>
                        <strong>动作：</strong>①降进料30% ②开大冷却水 ③观察10分钟<br>
                        <strong>升级：</strong>温度持续上升 → 立即停料上报
                    </div>
                </div>
            </div>

            <div class="highlight-box">
                <div class="label">关键差异</div>
                <p>阅读版：模糊的"及时采取措施" → 执行版：明确的"条件→判断→动作→升级"完整链路</p>
            </div>
        </section>

        <section class="section">
            <h2 class="section-title">案例五要素模板</h2>
            <table style="width: 100%; border-collapse: collapse; font-size: 0.9rem;">
                <thead>
                    <tr style="background: var(--primary); color: white;">
                        <th style="padding: 12px; text-align: left;">要素</th>
                        <th style="padding: 12px; text-align: left;">含义</th>
                        <th style="padding: 12px; text-align: left;">示例</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;"><strong>情境背景</strong></td>
                        <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;">在什么场景下发生</td>
                        <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;">反应釜运行2小时后</td>
                    </tr>
                    <tr>
                        <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;"><strong>异常征兆</strong></td>
                        <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;">出现了什么异常信号</td>
                        <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;">温度升至86℃</td>
                    </tr>
                    <tr>
                        <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;"><strong>判断过程</strong></td>
                        <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;">如何分析问题</td>
                        <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;">温度+回流比双重确认</td>
                    </tr>
                    <tr>
                        <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;"><strong>处置动作</strong></td>
                        <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;">采取了什么行动</td>
                        <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;">降进料+加大冷却</td>
                    </tr>
                    <tr>
                        <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;"><strong>结果复盘</strong></td>
                        <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;">处理后的结果+反思</td>
                        <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;">温度回落，分析原因</td>
                    </tr>
                </tbody>
            </table>
        </section>

        <section class="section">
            <h2 class="section-title">高频问答分类框架</h2>
            <p style="margin-bottom: 20px; color: var(--text-light);">
                手册里的Q&A不是"知识点问答"，而是<strong>真正会卡壳的现场问题</strong>。
            </p>

            <div class="qa-section">
                <div class="qa-item">
                    <div class="qa-q">
                        <span class="qa-badge">边界判断</span>
                        <span class="qa-question">"这种情况算不算异常？我不确定该不该处理"</span>
                    </div>
                    <div class="qa-a">
                        <span class="qa-badge-a">答</span>
                        <span class="qa-answer">
                            明确边界条件：<br>
                            异常 = 温度>85℃ <strong>且</strong> 回流比<1.2<br>
                            不确定时：先按异常处理，同时联系班长确认。
                        </span>
                    </div>
                </div>

                <div class="qa-item">
                    <div class="qa-q">
                        <span class="qa-badge">遗漏处理</span>
                        <span class="qa-question">"没遇到过这种情况，不知道怎么处理"</span>
                    </div>
                    <div class="qa-a">
                        <span class="qa-badge-a">答</span>
                        <span class="qa-answer">
                            兜底原则：<br>
                            ① 停止当前操作<br>
                            ② 保持设备安全状态<br>
                            ③ 立即联系班长或技术员<br>
                            <em>不要"试试看"——安全第一</em>
                        </span>
                    </div>
                </div>

                <div class="qa-item">
                    <div class="qa-q">
                        <span class="qa-badge">交接配合</span>
                        <span class="qa-question">"交接班时发现异常，这算谁的责任？"</span>
                    </div>
                    <div class="qa-a">
                        <span class="qa-badge-a">答</span>
                        <span class="qa-answer">
                            责任转移节点：<strong>签字确认时</strong><br>
                            交接班发现异常 → 交出方处理完毕才能离开<br>
                            接班后发现的异常 → 接班方承担责任
                        </span>
                    </div>
                </div>

                <div class="qa-item">
                    <div class="qa-q">
                        <span class="qa-badge">权限问题</span>
                        <span class="qa-question">"这种情况我能自己决定吗？要不要上报？"</span>
                    </div>
                    <div class="qa-a">
                        <span class="qa-badge-a">答</span>
                        <span class="qa-answer">
                            轻微异常：执行者自主处理<br>
                            中度异常：联系班长后处理<br>
                            严重异常：<strong>立即上报</strong>，不等指示
                        </span>
                    </div>
                </div>
            </div>
        </section>

        <section class="section">
            <h2 class="section-title">本模块要点总结</h2>
            <div class="tip-box">
                <div class="tip-label">📋 情境案例编写原则</div>
                <ul style="margin-top: 8px; font-size: 0.9rem;">
                    <li><strong>真实感：</strong>场景要具体，有时间、有参数、有判断</li>
                    <li><strong>完整性：</strong>覆盖判断→决策→执行→结果全流程</li>
                    <li><strong>可借鉴：</strong>让读者遇到类似情况时有参照</li>
                </ul>
            </div>
            <div class="tip-box">
                <div class="tip-label">📋 高频问答编写原则</div>
                <ul style="margin-top: 8px; font-size: 0.9rem;">
                    <li><strong>来源真实：</strong>问题来自一线调研，不是想当然</li>
                    <li><strong>回答可操作：</strong>能直接照做，不是原则性要求</li>
                    <li><strong>覆盖边界：</strong>重点回答"不确定怎么办"的问题</li>
                </ul>
            </div>
        </section>

        <nav class="nav-footer">
            <a href="03-判断标准卡与分级处置.html">← 上一节：判断标准卡与分级处置</a>
            <a href="05-成果展示与工具包.html">下一节：成果展示与工具包 →</a>
        </nav>
    </div>
</body>
</html>'''

    return html

if __name__ == '__main__':
    html = create_html_04()
    output_path = 'D:/新课开发/经验萃取/阅读手册转执行手册/完整课程包/009-HTML可视化/04-情境案例与高频问答.html'
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(html)
    print(f'已生成: {output_path}')