#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import os

output_dir = r'D:/新课开发/安全/1.安全重生-从事后处理到事前预测的思维转型/学员手册'
output_file = os.path.join(output_dir, '学员手册.html')
os.makedirs(output_dir, exist_ok=True)

html = """<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>安全重生：从事后处理到事前预测的思维转型 - 学员手册</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;500;600;700&family=Noto+Sans+SC:wght@300;400;500;700&display=swap" rel="stylesheet">
    <style>
        :root {
            --bg-primary: #FAFAF9;
            --bg-secondary: #F5F5F4;
            --bg-card: #FFFFFF;
            --text-primary: #1C1917;
            --text-secondary: #57534E;
            --text-muted: #A8A29E;
            --accent-amber: #D97706;
            --accent-amber-light: #FEF3C7;
            --accent-orange: #C2410C;
            --accent-orange-light: #FFEDD5;
            --accent-green: #15803D;
            --accent-green-light: #DCFCE7;
            --accent-red: #B91C1C;
            --accent-red-light: #FEE2E2;
            --accent-blue: #1D4ED8;
            --accent-blue-light: #DBEAFE;
            --border-light: #E7E5E4;
            --border-medium: #D6D3D1;
        }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: 'Noto Sans SC', -apple-system, BlinkMacSystemFont, sans-serif;
            background: var(--bg-primary);
            color: var(--text-primary);
            line-height: 1.8;
            font-size: 15px;
        }
        .page { max-width: 900px; margin: 0 auto; padding: 40px 20px; }
        .header {
            background: linear-gradient(135deg, #1C1917 0%, #292524 100%);
            color: white;
            padding: 60px 40px;
            border-radius: 12px;
            margin-bottom: 40px;
            position: relative;
            overflow: hidden;
        }
        .header::before {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            width: 300px;
            height: 300px;
            background: radial-gradient(circle, rgba(217,119,6,0.15) 0%, transparent 70%);
            transform: translate(30%, -30%);
        }
        .header-content { position: relative; z-index: 1; }
        .header h1 {
            font-family: 'Noto Serif SC', serif;
            font-size: 32px;
            font-weight: 700;
            margin-bottom: 8px;
            letter-spacing: 2px;
        }
        .header .subtitle {
            font-size: 18px;
            color: #A8A29E;
            margin-bottom: 24px;
        }
        .header-info {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
            font-size: 14px;
            color: #D6D3D1;
        }
        .header-info span { color: #FEF3C7; }
        .quote {
            background: linear-gradient(135deg, #FEF3C7 0%, #FFEDD5 100%);
            border-left: 4px solid var(--accent-amber);
            padding: 20px 24px;
            margin: 24px 0;
            border-radius: 0 8px 8px 0;
            font-style: italic;
            color: var(--text-secondary);
        }
        .section {
            background: var(--bg-card);
            border-radius: 12px;
            padding: 32px;
            margin-bottom: 24px;
            box-shadow: 0 4px 6px -1px rgba(0,0,0,0.07), 0 2px 4px -1px rgba(0,0,0,0.04);
        }
        .section-header {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 24px;
            padding-bottom: 16px;
            border-bottom: 2px solid var(--border-light);
        }
        .chapter-num {
            background: var(--accent-amber);
            color: white;
            width: 40px;
            height: 40px;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            font-size: 18px;
        }
        .section-title {
            font-family: 'Noto Serif SC', serif;
            font-size: 22px;
            font-weight: 600;
            color: var(--text-primary);
        }
        h2 {
            font-family: 'Noto Serif SC', serif;
            font-size: 20px;
            font-weight: 600;
            color: var(--text-primary);
            margin: 32px 0 16px 0;
            padding-left: 12px;
            border-left: 3px solid var(--accent-amber);
        }
        h3 {
            font-size: 16px;
            font-weight: 600;
            color: var(--text-primary);
            margin: 24px 0 12px 0;
        }
        p { margin: 12px 0; color: var(--text-secondary); }
        .highlight-box {
            background: var(--bg-secondary);
            border-radius: 8px;
            padding: 20px;
            margin: 16px 0;
        }
        .insight-box {
            background: linear-gradient(135deg, #FEF3C7 0%, #FFEDD5 100%);
            border-radius: 8px;
            padding: 16px 20px;
            margin: 16px 0;
        }
        .insight-box .label {
            color: var(--accent-orange);
            font-weight: 600;
            font-size: 13px;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 8px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 16px 0;
            font-size: 14px;
        }
        th {
            background: var(--bg-secondary);
            padding: 12px 16px;
            text-align: left;
            font-weight: 600;
            color: var(--text-primary);
            border-bottom: 2px solid var(--border-medium);
        }
        td {
            padding: 12px 16px;
            border-bottom: 1px solid var(--border-light);
            vertical-align: top;
        }
        tr:hover { background: var(--bg-secondary); }
        .checkbox-item {
            display: flex;
            align-items: flex-start;
            gap: 12px;
            padding: 10px 0;
            border-bottom: 1px dashed var(--border-light);
        }
        .checkbox {
            width: 20px;
            height: 20px;
            border: 2px solid var(--border-medium);
            border-radius: 4px;
            flex-shrink: 0;
            margin-top: 2px;
        }
        .input-field {
            border: 1px solid var(--border-light);
            border-radius: 6px;
            padding: 10px 12px;
            font-size: 14px;
            background: var(--bg-card);
            min-height: 40px;
        }
        .input-field.large { min-height: 80px; }
        .matrix-container {
            display: grid;
            grid-template-columns: auto repeat(3, 1fr);
            gap: 2px;
            background: var(--border-medium);
            border-radius: 8px;
            overflow: hidden;
            margin: 16px 0;
        }
        .matrix-cell { padding: 16px; text-align: center; font-size: 14px; }
        .matrix-cell.header { background: var(--bg-secondary); font-weight: 600; }
        .matrix-cell.high { background: #FEE2E2; color: #B91C1C; }
        .matrix-cell.medium { background: #FFEDD5; color: #C2410C; }
        .matrix-cell.low { background: #DCFCE7; color: #15803D; }
        .matrix-cell.very-low { background: #F5F5F4; color: #57534E; }
        .diagram {
            background: var(--bg-secondary);
            border-radius: 8px;
            padding: 24px;
            margin: 16px 0;
            font-family: monospace;
            font-size: 13px;
            line-height: 1.6;
            overflow-x: auto;
            white-space: pre;
        }
        .framework-box {
            border: 2px solid var(--border-light);
            border-radius: 8px;
            padding: 20px;
            margin: 16px 0;
        }
        .framework-title {
            font-weight: 600;
            color: var(--accent-amber);
            margin-bottom: 12px;
            font-size: 15px;
        }
        .commitment-box {
            background: linear-gradient(135deg, #1C1917 0%, #292524 100%);
            color: white;
            border-radius: 8px;
            padding: 24px;
            margin: 24px 0;
        }
        .commitment-box h4 { color: #FEF3C7; margin-bottom: 16px; }
        .commitment-line { display: flex; gap: 12px; margin: 12px 0; }
        .commitment-line .label { color: #A8A29E; flex-shrink: 0; }
        .print-btn {
            position: fixed;
            bottom: 30px;
            right: 30px;
            background: var(--accent-amber);
            color: white;
            border: none;
            padding: 14px 24px;
            border-radius: 50px;
            font-size: 14px;
            font-weight: 600;
            cursor: pointer;
            box-shadow: 0 4px 12px rgba(217,119,6,0.3);
            transition: all 0.3s;
        }
        .print-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 16px rgba(217,119,6,0.4);
        }
        .icon-quote { font-size: 24px; margin-right: 8px; }
        .two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
        .text-center { text-align: center; }
        .text-muted { color: var(--text-muted); }
        @media print {
            body { background: white; }
            .page { max-width: 100%; padding: 20px; }
            .section { box-shadow: none; border: 1px solid #ddd; break-inside: avoid; }
            .print-btn { display: none; }
            @page { size: A4; margin: 15mm; }
        }
    </style>
</head>
<body>
    <button class="print-btn" onclick="window.print()">打印手册</button>
    <div class="page">
        <div class="header">
            <div class="header-content">
                <h1>安全重生</h1>
                <div class="subtitle">从事后处理到事前预测的思维转型 · 学员手册</div>
                <div class="header-info">
                    <div>学员姓名：<span>＿＿＿＿＿＿＿＿＿</span></div>
                    <div>所在部门：<span>＿＿＿＿＿＿＿＿＿</span></div>
                    <div>课程日期：<span>＿＿＿＿＿＿＿＿＿</span></div>
                    <div>课程讲师：<span>＿＿＿＿＿＿＿＿＿</span></div>
                </div>
            </div>
        </div>

        <div class="quote">
            <span class="icon-quote">"</span>事故不是意外，是信号。读到信号的人，在事故发生之前就已经行动了。
        </div>

        <div class="section">
            <div class="section-header">
                <div class="chapter-num">0</div>
                <div class="section-title">如何使用本手册</div>
            </div>
            <p>本手册不是讲义，不是事故案例集，不是考试复习材料。它是你在课程中完成的<strong>工作台</strong>。每一个框架、每一张表单、每一道练习，都要在课堂上完成。</p>
            <h3>三个使用原则：</h3>
            <div class="highlight-box">
                <p><strong>原则一：带着真实工作场景来。</strong> 手册里所有的练习都要用你自己工作中的真实场景，不要虚构例子。</p>
                <p><strong>原则二：写下来比记下来更有价值。</strong> 看懂了不等于会用了，写下来才是真正内化的开始。</p>
                <p><strong>原则三：这是起点，不是终点。</strong> 课程结束不是学习的终点。</p>
            </div>
        </div>

        <div class="section">
            <div class="section-header">
                <div class="chapter-num">0</div>
                <div class="section-title">课程全景图</div>
            </div>
            <div class="diagram">┌─────────────────────────────────────────────────────────────┐
│  ↺   持续进化：预测准确度追踪与学习闭环设计              ↺   │
├─────────────────────────────────────────────────────────────┤
│  落地体系：能力建设路径 ｜ 机制建设要点 ｜ 技术赋能方法    │
│                 第四章：预测性安全管理落地                   │
├─────────────────────────────────────────────────────────────┤
│  实施工具：风险分级矩阵 ｜ 预警指标设定 ｜ 预防性检查清单  │
│                 第三章：预测行动的实施工具                   │
├─────────────────────────────────────────────────────────────┤
│  四大支柱：风险识别早期化 ｜ 信号捕捉敏感化                │
│          预案准备前置化 ｜ 干预时机精准化                   │
│                 第二章：预测性思维的四大支柱                 │
├─────────────────────────────────────────────────────────────┤
│                    范式转变（底层思维）                     │
│              从"救火式"事后处理 → "防火式"事前预测          │
└─────────────────────────────────────────────────────────────┘</div>
        </div>

        <div class="section">
            <div class="section-header">
                <div class="chapter-num">0</div>
                <div class="section-title">表单 0.1：出发点自评</div>
            </div>
            <div class="highlight-box">
                <p><strong>目的：</strong>了解你现在的安全思维模式，课程结束后用同一张表重测，看清变化</p>
                <p><strong>要求：</strong>如实打钩，不需要"表现好看"，这张表只有你自己看</p>
                <p><strong>时间：</strong>5分钟</p>
            </div>
            <table>
                <thead>
                    <tr>
                        <th style="width: 60%;">行为特征</th>
                        <th class="text-center">几乎从不</th>
                        <th class="text-center">偶尔如此</th>
                        <th class="text-center">经常这样</th>
                        <th class="text-center">基本如此</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>1. 我会在事故发生之前主动识别潜在风险</td><td class="text-center"><span class="checkbox"></span></td><td class="text-center"><span class="checkbox"></span></td><td class="text-center"><span class="checkbox"></span></td><td class="text-center"><span class="checkbox"></span></td></tr>
                    <tr><td>2. 我对"风险信号"敏感，能注意到细微异常</td><td class="text-center"><span class="checkbox"></span></td><td class="text-center"><span class="checkbox"></span></td><td class="text-center"><span class="checkbox"></span></td><td class="text-center"><span class="checkbox"></span></td></tr>
                    <tr><td>3. 我会为可能发生的风险提前准备应对预案</td><td class="text-center"><span class="checkbox"></span></td><td class="text-center"><span class="checkbox"></span></td><td class="text-center"><span class="checkbox"></span></td><td class="text-center"><span class="checkbox"></span></td></tr>
                    <tr><td>4. 我清楚知道什么时候应该介入干预</td><td class="text-center"><span class="checkbox"></span></td><td class="text-center"><span class="checkbox"></span></td><td class="text-center"><span class="checkbox"></span></td><td class="text-center"><span class="checkbox"></span></td></tr>
                    <tr><td>5. 每次安全事件后，我会系统复盘而非简单归因</td><td class="text-center"><span class="checkbox"></span></td><td class="text-center"><span class="checkbox"></span></td><td class="text-center"><span class="checkbox"></span></td><td class="text-center"><span class="checkbox"></span></td></tr>
                    <tr><td>6. 我会用数据追踪安全绩效</td><td class="text-center"><span class="checkbox"></span></td><td class="text-center"><span class="checkbox"></span></td><td class="text-center"><span class="checkbox"></span></td><td class="text-center"><span class="checkbox"></span></td></tr>
                    <tr><td>7. 我向团队传递的是"预防文化"而非"救火文化"</td><td class="text-center"><span class="checkbox"></span></td><td class="text-center"><span class="checkbox"></span></td><td class="text-center"><span class="checkbox"></span></td><td class="text-center"><span class="checkbox"></span></td></tr>
                </tbody>
            </table>
            <div class="highlight-box">
                <p><strong>我的"几乎从不"或"偶尔如此"共有 ___ 行。</strong> 这些就是你在这门课里的重点方向。</p>
            </div>
        </div>

        <div class="section">
            <div class="section-header">
                <div class="chapter-num">0</div>
                <div class="section-title">表单 0.2：我的安全场景卡</div>
            </div>
            <div class="highlight-box">
                <p><strong>目的：</strong>选定一个贯穿整个课程的真实安全工作任务</p>
                <p><strong>要求：</strong>选你现在经常要面对的安全管理场景</p>
            </div>
            <table>
                <tr><th style="width: 30%;">场景卡</th><th>你的填写</th></tr>
                <tr><td>我的岗位/角色</td><td><div class="input-field"></div></td></tr>
                <tr><td>我选定的安全场景名称</td><td><div class="input-field"></div></td></tr>
                <tr><td>这个场景目前最大的痛点是什么？</td><td><div class="input-field large"></div></td></tr>
                <tr><td>目前处理这个问题的典型方式</td><td><div class="input-field large"></div></td></tr>
                <tr><td>我最希望改善的是什么</td><td><div class="input-field large"></div></td></tr>
            </table>
        </div>

        <div class="section">
            <div class="section-header">
                <div class="chapter-num">1</div>
                <div class="section-title">第一章：安全思维的范式转变</div>
            </div>
            <div class="quote"><span class="icon-quote">"</span>如果你一直在灭火，唯一的办法就是学会不点火。</div>

            <h2>1.1 事后处理的代价</h2>
            <p>一件事发生了。设备故障了。人员受伤了。管理层问："怎么回事？"一线说："意外。"然后一切恢复正常。<strong>但什么都没改变。</strong></p>

            <div class="insight-box">
                <div class="label">核心洞见</div>
                <p>事后处理真正的问题不是处理得不够快、不够好，而是它永远只处理"这一次"，不处理"下一次"。</p>
            </div>

            <h3>事后处理的四个代价</h3>
            <div class="highlight-box">
                <p><strong>代价一：损失已经发生</strong> - 无论处理得多好，伤亡已经造成</p>
                <p><strong>代价二：归因永远偏差</strong> - 事后归因本质上是"后视镜思维"</p>
                <p><strong>代价三：整改永远滞后</strong> - 新的风险永远会绕过已有的整改清单</p>
                <p><strong>代价四：组织记忆短暂</strong> - 整改措施的执行力度会在3-6个月内衰减</p>
            </div>

            <h2>1.2 事前预测的价值</h2>
            <p>事前预测不是"预知未来"，而是建立一套系统，让<strong>风险信号</strong>能够在变成事故之前被读到、被响应。</p>

            <div class="two-col">
                <div class="framework-box">
                    <div class="framework-title">事后处理模式</div>
                    <div class="diagram">风险积累 → 风险突破 → 事故发生 → 应急响应 → 归因整改
                           ↑
                      永远在这里救火
                           ↓
              新循环...（无限循环）</div>
                </div>
                <div class="framework-box">
                    <div class="framework-title">事前预测模式</div>
                    <div class="diagram">风险识别 → 信号捕捉 → 预案准备 → 干预介入 → 风险化解
                           ↑
                      永远在这里干预
                           ↓
              新循环...（持续优化）</div>
                </div>
            </div>

            <div class="insight-box">
                <div class="label">关键认知</div>
                <p>每1元的预防投入，平均可以节省4-7元的事后处理成本。</p>
            </div>

            <h2>1.3 从"救火员"到"防火者"</h2>
            <table>
                <thead><tr><th>维度</th><th>救火员</th><th>防火者</th></tr></thead>
                <tbody>
                    <tr><td>焦点</td><td>已经发生的事</td><td>可能会发生的事</td></tr>
                    <tr><td>时间</td><td>现在</td><td>未来</td></tr>
                    <tr><td>思维</td><td>反应式</td><td>预见式</td></tr>
                    <tr><td>工具</td><td>应急预案</td><td>预测系统</td></tr>
                    <tr><td>效果</td><td>减少损失</td><td>防止发生</td></tr>
                </tbody>
            </table>
        </div>

        <div class="section">
            <div class="section-header">
                <div class="chapter-num">2</div>
                <div class="section-title">第二章：预测性思维的四大支柱</div>
            </div>
            <div class="quote"><span class="icon-quote">"</span>预测性思维不是一种能力，而是一种系统。四大支柱，缺一不可。</div>

            <h2>2.1 支柱一：风险识别早期化</h2>
            <div class="insight-box">
                <div class="label">风险演变的五个阶段</div>
                <p><strong>阶段一：潜伏期</strong>——风险因素已经存在，但还没有产生任何可观测的信号</p>
                <p><strong>阶段二：萌芽期</strong>——开始出现极其细微的异常信号</p>
                <p><strong>阶段三：显现期</strong>——异常信号变得明显</p>
                <p><strong>阶段四：爆发期</strong>——事故发生，造成损失</p>
                <p><strong>阶段五：消退期</strong>——损失处理完毕</p>
                <p style="margin-top:12px;color:var(--accent-orange);"><strong>早期识别的目标，是在阶段一和阶段二就发现风险。</strong></p>
            </div>

            <h2>2.2 支柱二：信号捕捉敏感化</h2>
            <p><strong>信号</strong>是真实的预警信息。<strong>噪音</strong>是虚假的无意义信息。敏感化的本质，是提高"信号识别率"，同时降低"噪音干扰率"。</p>

            <h2>2.3 支柱三：预案准备前置化</h2>
            <p>不是等风险变成了事故，才开始想该怎么办。<strong>预测预案</strong>的思维是：针对"小信号"准备应对方案，使得小问题不会演变成大事故。</p>

            <h2>2.4 支柱四：干预时机精准化</h2>
            <div class="two-col">
                <div class="framework-box" style="border-color:var(--accent-red);">
                    <div class="framework-title" style="color:var(--accent-red);">干预太早</div>
                    <ul style="margin-left:16px;font-size:14px;color:var(--text-secondary);">
                        <li>浪费资源</li>
                        <li>团队疲劳</li>
                        <li>失去公信力</li>
                    </ul>
                </div>
                <div class="framework-box" style="border-color:var(--accent-orange);">
                    <div class="framework-title" style="color:var(--accent-orange);">干预太晚</div>
                    <ul style="margin-left:16px;font-size:14px;color:var(--text-secondary);">
                        <li>风险已经演变成事故</li>
                        <li>损失已经造成</li>
                        <li>失去最佳化解窗口</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="section">
            <div class="section-header">
                <div class="chapter-num">3</div>
                <div class="section-title">第三章：预测行动的实施工具</div>
            </div>
            <div class="quote"><span class="icon-quote">"</span>思维落地需要工具。四个工具，帮你把预测性思维变成日常工作。</div>

            <h2>3.1 风险分级矩阵</h2>
            <p><strong>风险 = 可能性 × 严重性</strong></p>

            <div class="matrix-container">
                <div class="matrix-cell header"></div>
                <div class="matrix-cell header">低</div>
                <div class="matrix-cell header">中</div>
                <div class="matrix-cell header">高</div>
                <div class="matrix-cell header">高</div>
                <div class="matrix-cell medium">中</div>
                <div class="matrix-cell high">高</div>
                <div class="matrix-cell high">极高</div>
                <div class="matrix-cell header">中</div>
                <div class="matrix-cell very-low">极低</div>
                <div class="matrix-cell medium">低</div>
                <div class="matrix-cell medium">中</div>
                <div class="matrix-cell header">低</div>
                <div class="matrix-cell very-low">极低</div>
                <div class="matrix-cell very-low">极低</div>
                <div class="matrix-cell medium">低</div>
            </div>

            <table>
                <thead><tr><th>风险等级</th><th>响应策略</th><th>响应时间</th></tr></thead>
                <tbody>
                    <tr><td style="color:var(--accent-red);"><strong>极高风险</strong></td><td>立即停止，升级处理</td><td>立即</td></tr>
                    <tr><td style="color:var(--accent-orange);"><strong>高风险</strong></td><td>立即关注，制定控制措施</td><td>24小时内</td></tr>
                    <tr><td style="color:var(--accent-amber);"><strong>中风险</strong></td><td>纳入计划，加强监控</td><td>一周内</td></tr>
                    <tr><td style="color:var(--accent-green);"><strong>低风险</strong></td><td>日常管理，观察变化</td><td>月度</td></tr>
                    <tr><td style="color:var(--text-muted);"><strong>极低风险</strong></td><td>接受风险，维持现状</td><td>不需要</td></tr>
                </tbody>
            </table>

            <h2>3.2 预警指标设定表</h2>
            <div class="insight-box">
                <div class="label">事后指标 vs 预警指标</div>
                <p><strong>事后指标：</strong>你已经迟到了，它告诉你"你迟到了"</p>
                <p><strong>预警指标：</strong>它告诉你"按照现在的节奏，你会迟到"</p>
            </div>

            <h2>3.3 预防性检查清单</h2>
            <div class="two-col">
                <div class="framework-box">
                    <div class="framework-title">传统清单</div>
                    <p>问"这个设备有问题吗？"</p>
                </div>
                <div class="framework-box">
                    <div class="framework-title">预防性清单</div>
                    <p>问"这个设备的信号告诉我们什么？"</p>
                </div>
            </div>
        </div>

        <div class="section">
            <div class="section-header">
                <div class="chapter-num">4</div>
                <div class="section-title">第四章：预测性安全管理落地</div>
            </div>
            <div class="quote"><span class="icon-quote">"</span>思维转变只是开始，落地才是关键。</div>

            <h2>4.1 能力建设路径</h2>
            <div class="highlight-box">
                <p><strong>个人能力：</strong>观察力 / 判断力 / 响应力</p>
                <p><strong>团队能力：</strong>共享语言 / 集体敏感 / 协调响应</p>
                <p><strong>组织能力：</strong>制度支撑 / 流程嵌入 / 技术赋能</p>
            </div>

            <h3>能力建设路径图</h3>
            <div class="diagram">阶段一：意识觉醒（1-30天）
├── 建立理解和识别
└── 选择1个试点场景开始尝试

阶段二：工具建设（31-90天）
├── 建立风险分级矩阵和预警指标
└── 制定预防性检查清单

阶段三：习惯养成（91-180天）
├── 日常巡检中运用预防性检查清单
└── 建立"信号分享"的团队沟通机制

阶段四：系统进化（180天+）
├── 建立组织层面的预测性安全管理机制
└── 形成"预防文化"</div>
        </div>

        <div class="section">
            <div class="section-header">
                <div class="chapter-num">5</div>
                <div class="section-title">第五章：持续进化机制</div>
            </div>
            <div class="quote"><span class="icon-quote">"</span>预测性思维不是一次培训就能建立的，需要在实践中持续进化。</div>

            <h2>5.1 复盘方法论</h2>
            <p><strong>有效复盘</strong>的核心，是把每一次实践都变成学习的机会，无论结果是"避免了事故"还是"发生了事故"。</p>

            <h2>5.2 预测准确度追踪</h2>
            <div class="insight-box">
                <div class="label">准确度分析维度</div>
                <p><strong>真阳性（命中）</strong>——捕捉到信号 → 风险真的在积累</p>
                <p><strong>假阳性（误报）</strong>——捕捉到信号 → 但风险并没有积累</p>
                <p><strong>真阴性（正确放过）</strong>——没有捕捉到信号 → 风险确实没有积累</p>
                <p><strong>假阴性（漏报）</strong>——没有捕捉到信号 → 但风险在积累</p>
            </div>
        </div>

        <div class="section">
            <div class="section-header">
                <div class="chapter-num">C</div>
                <div class="section-title">课程收尾：我的30天行动计划</div>
            </div>

            <h3>综合实战：五个章节全链路</h3>
            <table>
                <thead><tr><th>章节</th><th>关键动作</th><th>你的产出</th></tr></thead>
                <tbody>
                    <tr><td>第一章</td><td>识别你的安全思维模式</td><td>□救火员 □转型中 □防火者</td></tr>
                    <tr><td>第二章</td><td>四大支柱自检，找到最弱支柱</td><td>最弱支柱：___</td></tr>
                    <tr><td>第三章</td><td>完成风险分级和预警指标设定</td><td>3个主要风险的预警指标</td></tr>
                    <tr><td>第四章</td><td>制定30天行动计划</td><td>第一个目标：___</td></tr>
                    <tr><td>第五章</td><td>建立你的学习闭环</td><td>日/周/月闭环时间</td></tr>
                </tbody>
            </table>

            <h3>我的30天安全转型行动计划</h3>
            <table>
                <thead><tr><th>阶段</th><th>目标</th><th>我要做的一件事</th><th>成功标志</th></tr></thead>
                <tbody>
                    <tr><td>第1-10天</td><td>建立意识</td><td><div class="input-field"></div></td><td><div class="input-field"></div></td></tr>
                    <tr><td>第11-20天</td><td>工具落地</td><td><div class="input-field"></div></td><td><div class="input-field"></div></td></tr>
                    <tr><td>第21-30天</td><td>习惯养成</td><td><div class="input-field"></div></td><td><div class="input-field"></div></td></tr>
                </tbody>
            </table>

            <div class="commitment-box">
                <h4>行动承诺</h4>
                <p>我承诺从今天开始，坚持以下行动：</p>
                <div class="commitment-line"><span class="label">行动1：</span><span>_________________________________</span></div>
                <div class="commitment-line"><span class="label">行动2：</span><span>_________________________________</span></div>
                <div class="commitment-line"><span class="label">行动3：</span><span>_________________________________</span></div>
                <hr style="margin:16px 0;border:none;border-top:1px solid rgba(255,255,255,0.2);">
                <p>签名：________________　日期：________________</p>
            </div>
        </div>

        <div class="section">
            <div class="section-header">
                <div class="chapter-num">附</div>
                <div class="section-title">附录一：核心概念速查</div>
            </div>
            <table>
                <thead><tr><th>概念</th><th>定义</th></tr></thead>
                <tbody>
                    <tr><td>事后处理</td><td>等事故发生后再进行响应和整改的被动安全管理模式</td></tr>
                    <tr><td>事前预测</td><td>在风险还处于早期信号阶段就进行识别和干预的主动安全管理模式</td></tr>
                    <tr><td>救火员思维</td><td>等事情发生再处理的反应式思维方式</td></tr>
                    <tr><td>防火者思维</td><td>在风险积累阶段就主动干预的预见式思维方式</td></tr>
                    <tr><td>风险识别早期化</td><td>在风险潜伏期和萌芽期就识别风险的能力</td></tr>
                    <tr><td>信号捕捉敏感化</td><td>能够捕捉到细微异常信号的能力</td></tr>
                    <tr><td>预警指标</td><td>在事故发生之前就能预测事故即将发生的前兆指标</td></tr>
                    <tr><td>学习闭环</td><td>实践→记录→复盘→提炼→应用→实践的持续进化循环</td></tr>
                </tbody>
            </table>
        </div>

        <div class="section">
            <div class="section-header">
                <div class="chapter-num">附</div>
                <div class="section-title">附录二：实践工具速查索引</div>
            </div>
            <table>
                <thead><tr><th>工具</th><th>名称</th><th>主要用途</th></tr></thead>
                <tbody>
                    <tr><td>0.1</td><td>出发点自评</td><td>了解起点，课后重测对比</td></tr>
                    <tr><td>0.2</td><td>安全场景卡</td><td>锁定贯穿全程的真实安全场景</td></tr>
                    <tr><td>1.1</td><td>安全思维画像</td><td>诊断安全思维模式</td></tr>
                    <tr><td>四大支柱</td><td>自检表</td><td>评估四大支柱现状</td></tr>
                    <tr><td>3.1</td><td>风险分级矩阵</td><td>对风险进行分级和响应</td></tr>
                    <tr><td>3.2</td><td>预警指标设定表</td><td>建立预警指标体系</td></tr>
                    <tr><td>3.3</td><td>预防性检查清单</td><td>从"查隐患"升级为"读信号"</td></tr>
                    <tr><td>4.1</td><td>个人行动计划表</td><td>30天行动计划制定</td></tr>
                    <tr><td>5.1</td><td>复盘框架</td><td>结构化复盘方法</td></tr>
                    <tr><td>5.2</td><td>预测准确度追踪表</td><td>追踪预测准确度</td></tr>
                </tbody>
            </table>
        </div>

        <div class="section">
            <div class="section-header">
                <div class="chapter-num">附</div>
                <div class="section-title">附录三：课程金句集</div>
            </div>
            <div class="quote"><span class="icon-quote">"</span>事故不是意外，是信号。读到信号的人，在事故发生之前就已经行动了。</div>
            <div class="quote"><span class="icon-quote">"</span>如果你一直在灭火，唯一的办法就是学会不点火。</div>
            <div class="quote"><span class="icon-quote">"</span>事后处理真正的问题不是处理得不够快、不够好，而是它永远只处理"这一次"，不处理"下一次"。</div>
            <div class="quote"><span class="icon-quote">"</span>预测性思维不是一种能力，而是一种系统。四大支柱，缺一不可。</div>
            <div class="quote"><span class="icon-quote">"</span>不是等事情坏了再修，而是读到信号之后提前动。</div>
            <div class="quote"><span class="icon-quote">"</span>从"救火员"到"防火者"的转变，不是一个人更努力，而是换了一种工作方式。</div>

            <div style="text-align:center;margin-top:32px;padding-top:24px;border-top:2px solid var(--border-light);">
                <p style="color:var(--text-muted);font-size:13px;">版权所有 · 罗宏伟 · 本手册仅供本课程学员使用</p>
            </div>
        </div>
    </div>
</body>
</html>"""

with open(output_file, 'w', encoding='utf-8') as f:
    f.write(html)

print('HTML handbook generated successfully!')
print('Output file:', output_file)
print('File size:', os.path.getsize(output_file), 'bytes')
