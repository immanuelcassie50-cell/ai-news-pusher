import os

path = 'D:/新课开发/数字化转型/2.人机协同权责边界与决策分级：从44%分工到18%系统重构的补课/全流程工具表单/F8_效果验证追踪表.html'

html = '''<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>F8：效果验证追踪表</title>
    <style>
        :root {
            --primary: #2563eb;
            --primary-light: #3b82f6;
            --success: #16a34a;
            --warning: #ca8a04;
            --danger: #dc2626;
            --bg: #f8fafc;
            --card-bg: #ffffff;
            --text: #1e293b;
            --text-light: #64748b;
            --border: #e2e8f0;
        }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Microsoft YaHei", sans-serif;
            background: var(--bg);
            color: var(--text);
            font-size: 13px;
            line-height: 1.5;
        }
        .page {
            width: 210mm;
            min-height: 297mm;
            margin: 10px auto;
            padding: 15mm 20mm;
            background: var(--card-bg);
            box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        }
        .header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 20px;
            padding-bottom: 15px;
            border-bottom: 3px solid var(--primary);
        }
        .header-left h1 { font-size: 24px; color: var(--primary); margin-bottom: 5px; }
        .header-left .subtitle { color: var(--text-light); font-size: 12px; }
        .header-right { text-align: right; }
        .badge {
            display: inline-block;
            padding: 4px 12px;
            background: var(--primary);
            color: white;
            border-radius: 20px;
            font-size: 11px;
            font-weight: 500;
        }
        .purpose-box {
            background: linear-gradient(135deg, #eff6ff 0%, #f0f9ff 100%);
            border-left: 4px solid var(--primary);
            padding: 12px 15px;
            margin-bottom: 20px;
            border-radius: 0 8px 8px 0;
        }
        .purpose-box h3 { color: var(--primary); font-size: 13px; margin-bottom: 5px; }
        .purpose-box p { color: var(--text-light); font-size: 12px; }
        .section { margin-bottom: 20px; }
        .section-title {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 14px;
            font-weight: 600;
            color: var(--text);
            margin-bottom: 12px;
            padding-bottom: 8px;
            border-bottom: 2px solid var(--border);
        }
        .section-title .icon {
            width: 24px;
            height: 24px;
            background: var(--primary);
            color: white;
            border-radius: 6px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 12px;
        }
        .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; }
        .kpi-card {
            background: var(--bg);
            border-radius: 10px;
            padding: 15px;
            border: 1px solid var(--border);
        }
        .kpi-card h4 {
            font-size: 13px;
            color: var(--primary);
            margin-bottom: 10px;
            display: flex;
            align-items: center;
            gap: 6px;
        }
        .kpi-card h4 .num {
            width: 20px;
            height: 20px;
            background: var(--primary);
            color: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 11px;
        }
        table { width: 100%; border-collapse: collapse; font-size: 11px; margin-bottom: 10px; }
        th { background: var(--primary); color: white; padding: 8px 6px; text-align: left; font-weight: 500; }
        td { padding: 8px 6px; border-bottom: 1px solid var(--border); }
        tr:nth-child(even) { background: #f8fafc; }
        .status {
            display: inline-flex;
            align-items: center;
            gap: 4px;
            padding: 3px 8px;
            border-radius: 12px;
            font-size: 10px;
            font-weight: 500;
        }
        .status.success { background: #dcfce7; color: var(--success); }
        .status.warning { background: #fef9c3; color: var(--warning); }
        .status.danger { background: #fee2e2; color: var(--danger); }
        .status.pending { background: #f1f5f9; color: var(--text-light); }
        .summary-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; }
        .summary-item {
            background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
            color: white;
            padding: 15px;
            border-radius: 10px;
            text-align: center;
        }
        .summary-item h5 { font-size: 10px; opacity: 0.9; margin-bottom: 5px; }
        .summary-item .value { font-size: 24px; font-weight: 700; }
        .summary-item .sub { font-size: 9px; opacity: 0.8; }
        .timeline { position: relative; padding-left: 20px; }
        .timeline::before {
            content: '';
            position: absolute;
            left: 6px;
            top: 0;
            bottom: 0;
            width: 2px;
            background: var(--border);
        }
        .timeline-item {
            position: relative;
            margin-bottom: 15px;
            padding: 12px;
            background: var(--bg);
            border-radius: 8px;
            border: 1px solid var(--border);
        }
        .timeline-item::before {
            content: '';
            position: absolute;
            left: -18px;
            top: 15px;
            width: 12px;
            height: 12px;
            background: var(--primary);
            border-radius: 50%;
            border: 3px solid white;
            box-shadow: 0 0 0 2px var(--primary);
        }
        .timeline-item h5 { font-size: 12px; color: var(--primary); margin-bottom: 6px; }
        .timeline-item .metrics { display: flex; gap: 15px; font-size: 10px; color: var(--text-light); }
        .progress-bar { height: 8px; background: var(--border); border-radius: 4px; overflow: hidden; }
        .progress-bar .fill { height: 100%; background: var(--primary); border-radius: 4px; transition: width 0.3s; }
        .guide-box {
            background: #fffbeb;
            border: 1px solid #fcd34d;
            border-radius: 8px;
            padding: 15px;
            margin-top: 15px;
        }
        .guide-box h4 { color: var(--warning); font-size: 12px; margin-bottom: 8px; }
        .guide-box ol { padding-left: 18px; font-size: 11px; color: var(--text); }
        .guide-box li { margin-bottom: 4px; }
        .change { font-size: 10px; color: var(--success); }
        .value.before { color: var(--text-light); font-size: 14px; font-weight: 400; }
        @media print {
            body { background: white; }
            .page { box-shadow: none; margin: 0; width: 100%; min-height: auto; }
            @page { size: A4; margin: 10mm; }
        }
    </style>
</head>
<body>
    <div class="page">
        <div class="header">
            <div class="header-left">
                <h1>F8：效果验证追踪表</h1>
                <div class="subtitle">A4单张 | 转型效果验证工具</div>
            </div>
            <div class="header-right"><span class="badge">v1.0</span></div>
        </div>
        <div class="purpose-box">
            <h3>目的说明</h3>
            <p>追踪和验证人机协同（H-AI）转型项目的实施效果，系统性评估效率提升、错误率下降、决策时效和人员满意度四大维度的KPI达成情况。</p>
        </div>
        <div class="section">
            <div class="section-title"><span class="icon">&#128202;</span> KPI追踪总览</div>
            <div class="summary-grid">
                <div class="summary-item"><h5>效率提升</h5><div class="value">&#8212;%</div><div class="sub">目标: 20%+</div></div>
                <div class="summary-item"><h5>错误率下降</h5><div class="value">&#8212;%</div><div class="sub">目标: 15%+</div></div>
                <div class="summary-item"><h5>决策时效</h5><div class="value">&#8212;%</div><div class="sub">目标: 30%+</div></div>
                <div class="summary-item"><h5>人员满意度</h5><div class="value">&#8212;</div><div class="sub">目标: &#2265;4.0</div></div>
            </div>
        </div>
        <div class="section">
            <div class="section-title"><span class="icon">1</span> 效率提升 (Efficiency Improvement)</div>
            <div class="grid-2">
                <div class="kpi-card">
                    <h4><span class="num">1</span>决策处理时间对比</h4>
                    <table>
                        <tr><th>决策类型</th><th>转型前</th><th>转型后</th><th>提升</th></tr>
                        <tr><td>常规决策</td><td><span class="value before">&#8212;h</span></td><td><span class="value before">&#8212;h</span></td><td><span class="change">&#8212;%</span></td></tr>
                        <tr><td>复杂决策</td><td><span class="value before">&#8212;h</span></td><td><span class="value before">&#8212;h</span></td><td><span class="change">&#8212;%</span></td></tr>
                        <tr><td>紧急决策</td><td><span class="value before">&#8212;h</span></td><td><span class="value before">&#8212;h</span></td><td><span class="change">&#8212;%</span></td></tr>
                    </table>
                </div>
                <div class="kpi-card">
                    <h4><span class="num">2</span>任务完成率追踪</h4>
                    <table>
                        <tr><th>周期</th><th>计划</th><th>实际</th><th>完成率</th></tr>
                        <tr><td>第1周</td><td>&#8212;</td><td>&#8212;</td><td><span class="status pending">&#8212;%</span></td></tr>
                        <tr><td>第2周</td><td>&#8212;</td><td>&#8212;</td><td><span class="status pending">&#8212;%</span></td></tr>
                        <tr><td>第3周</td><td>&#8212;</td><td>&#8212;</td><td><span class="status pending">&#8212;%</span></td></tr>
                        <tr><td>第4周</td><td>&#8212;</td><td>&#8212;</td><td><span class="status pending">&#8212;%</span></td></tr>
                    </table>
                </div>
            </div>
        </div>
        <div class="section">
            <div class="section-title"><span class="icon">2</span> 错误率下降 (Error Rate Reduction)</div>
            <div class="kpi-card">
                <h4><span class="num">3</span>决策错误率对比</h4>
                <table>
                    <tr><th>错误类型</th><th>转型前</th><th>当前</th><th>下降幅度</th><th>趋势</th></tr>
                    <tr><td>判断失误</td><td>&#8212;%</td><td>&#8212;%</td><td><span class="change">&#8212;%</span></td><td><span class="status pending">&#11036;</span></td></tr>
                    <tr><td>信息遗漏</td><td>&#8212;%</td><td>&#8212;%</td><td><span class="change">&#8212;%</span></td><td><span class="status pending">&#11036;</span></td></tr>
                    <tr><td>执行偏差</td><td>&#8212;%</td><td>&#8212;%</td><td><span class="change">&#8212;%</span></td><td><span class="status pending">&#11036;</span></td></tr>
                </table>
            </div>
        </div>
        <div class="section">
            <div class="section-title"><span class="icon">3</span> 决策时效 (Decision Timeliness)</div>
            <div class="grid-2">
                <div class="kpi-card">
                    <h4><span class="num">4</span>平均决策时间（按类型）</h4>
                    <table>
                        <tr><th>决策类型</th><th>基线</th><th>目标</th><th>当前</th><th>达成</th></tr>
                        <tr><td>类型A</td><td>&#8212;h</td><td>&#8212;h</td><td>&#8212;h</td><td><span class="status pending">&#8212;%</span></td></tr>
                        <tr><td>类型B</td><td>&#8212;h</td><td>&#8212;h</td><td>&#8212;h</td><td><span class="status pending">&#8212;%</span></td></tr>
                        <tr><td>类型C</td><td>&#8212;h</td><td>&#8212;h</td><td>&#8212;h</td><td><span class="status pending">&#8212;%</span></td></tr>
                    </table>
                </div>
                <div class="kpi-card">
                    <h4><span class="num">5</span>自动解决率统计</h4>
                    <div style="text-align: center; padding: 20px 0;">
                        <div style="font-size: 12px; color: var(--text-light); margin-bottom: 10px;">本月自动解决率</div>
                        <div style="font-size: 48px; font-weight: 700; color: var(--primary);">&#8212;%</div>
                        <div style="font-size: 11px; color: var(--text-light); margin-top: 5px;">目标: &#8212;%</div>
                        <div class="progress-bar" style="margin-top: 15px;"><div class="fill" style="width: 0%;"></div></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="section">
            <div class="section-title"><span class="icon">4</span> 人员满意度 (Staff Satisfaction)</div>
            <div class="grid-2">
                <div class="kpi-card">
                    <h4><span class="num">6</span>调查评分追踪</h4>
                    <table>
                        <tr><th>调查维度</th><th>第1次</th><th>第2次</th><th>第3次</th><th>趋势</th></tr>
                        <tr><td>协作便捷度</td><td>&#8212;</td><td>&#8212;</td><td>&#8212;</td><td><span class="status pending">&#11036;</span></td></tr>
                        <tr><td>系统信任度</td><td>&#8212;</td><td>&#8212;</td><td>&#8212;</td><td><span class="status pending">&#11036;</span></td></tr>
                        <tr><td>工作满意度</td><td>&#8212;</td><td>&#8212;</td><td>&#8212;</td><td><span class="status pending">&#11036;</span></td></tr>
                    </table>
                    <div style="font-size: 9px; color: var(--text-light); margin-top: 8px;">评分标准: 1=非常不满意, 2=不满意, 3=一般, 4=满意, 5=非常满意</div>
                </div>
                <div class="kpi-card">
                    <h4><span class="num">7</span>人员采用率统计</h4>
                    <table>
                        <tr><th>部门</th><th>总人数</th><th>活跃用户</th><th>采用率</th></tr>
                        <tr><td>&#8212;</td><td>&#8212;</td><td>&#8212;</td><td><span class="status pending">&#8212;%</span></td></tr>
                    </table>
                    <div style="margin-top: 15px;">
                        <div style="display: flex; justify-content: space-between; font-size: 10px; color: var(--text-light); margin-bottom: 5px;">
                            <span>整体采用率</span><span>&#8212;% / &#8212;% 目标</span>
                        </div>
                        <div class="progress-bar"><div class="fill" style="width: 0%;"></div></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="section">
            <div class="section-title"><span class="icon">&#128197;</span> 验证时间线 (Verification Timeline)</div>
            <div class="timeline">
                <div class="timeline-item">
                    <h5>30天检查点 &#8212; 初期指标与快速成果</h5>
                    <div style="font-size: 11px; color: var(--text-light); margin-bottom: 10px;">验证日期: __________</div>
                    <div class="metrics">
                        <span>&#9745; 决策处理时间缩短10%</span>
                        <span>&#9745; 任务完成率 &#2265;85%</span>
                        <span>&#9745; 错误率下降5%</span>
                    </div>
                </div>
                <div class="timeline-item">
                    <h5>90天检查点 &#8212; 持续指标与趋势分析</h5>
                    <div style="font-size: 11px; color: var(--text-light); margin-bottom: 10px;">验证日期: __________</div>
                    <div class="metrics">
                        <span>&#9745; 决策处理时间缩短20%</span>
                        <span>&#9745; 周期时间缩短 &#2265;15%</span>
                        <span>&#9745; 采用率 &#2265;70%</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="section">
            <div class="section-title"><span class="icon">&#128221;</span> 迭代日志 (Iteration Log)</div>
            <table>
                <tr><th>日期</th><th>变更内容</th><th>预期影响</th><th>实际结果</th><th>调整措施</th></tr>
                <tr><td>&#8212;</td><td>&#8212;</td><td>&#8212;</td><td>&#8212;</td><td>&#8212;</td></tr>
                <tr><td>&#8212;</td><td>&#8212;</td><td>&#8212;</td><td>&#8212;</td><td>&#8212;</td></tr>
            </table>
        </div>
        <div class="guide-box">
            <h4>讲师操作指引 (Instructor Guide)</h4>
            <ol>
                <li><strong>初始填写</strong>: 项目启动时填写基线值，作为转型前的参照标准</li>
                <li><strong>定期更新</strong>: 每周更新当前值，确保数据时效性</li>
                <li><strong>30天检查</strong>: 全面检查，识别早期胜利和需调整内容</li>
                <li><strong>90天检查</strong>: 深度分析，评估持续效果和趋势</li>
                <li><strong>迭代记录</strong>: 每次调整时记录变更内容和预期影响</li>
            </ol>
        </div>
        <div style="text-align: center; margin-top: 20px; padding-top: 15px; border-top: 1px solid var(--border); font-size: 10px; color: var(--text-light);">
            表单版本: F8-v1.0 | 更新日期: 2026-08-18 | 人机协同转型效果验证工具
        </div>
    </div>
</body>
</html>'''

with open(path, 'w', encoding='utf-8') as f:
    f.write(html)
print('HTML file created successfully at:', path)
