#!/usr/bin/env python3
# -*- coding: utf-8 -*-

html_content = """<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>F3：RACI矩阵模板 - 人机协同责任分配工具</title>
    <style>
        @page {
            size: A4;
            margin: 12mm 10mm;
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            font-family: "Microsoft YaHei", "PingFang SC", "SimHei", sans-serif;
            font-size: 9pt;
            line-height: 1.4;
            color: #2c3e50;
            background: #ffffff;
            max-width: 210mm;
            margin: 0 auto;
            padding: 10mm 12mm;
        }

        .header {
            text-align: center;
            margin-bottom: 12px;
            padding-bottom: 10px;
            border-bottom: 2px solid #3498db;
        }

        .header h1 {
            font-size: 18pt;
            color: #2c3e50;
            margin-bottom: 4px;
        }

        .header .subtitle {
            font-size: 10pt;
            color: #7f8c8d;
        }

        .header .purpose {
            font-size: 8pt;
            color: #95a5a6;
            margin-top: 6px;
        }

        .role-section {
            margin-bottom: 12px;
        }

        .section-title {
            font-size: 11pt;
            color: #2980b9;
            margin-bottom: 6px;
            padding-left: 8px;
            border-left: 3px solid #3498db;
        }

        .role-table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 10px;
            font-size: 8.5pt;
        }

        .role-table th {
            background: #34495e;
            color: white;
            padding: 5px 6px;
            text-align: center;
            font-weight: 500;
        }

        .role-table td {
            padding: 4px 6px;
            border: 1px solid #bdc3c7;
            text-align: center;
        }

        .role-table tr:nth-child(even) td {
            background: #f8f9fa;
        }

        .role-code {
            font-weight: bold;
            font-size: 10pt;
        }

        .role-H { color: #e74c3c; font-weight: bold; }
        .role-A { color: #3498db; font-weight: bold; }
        .role-S { color: #27ae60; font-weight: bold; }
        .role-R { color: #e67e22; font-weight: bold; }
        .role-C { color: #9b59b6; font-weight: bold; }
        .role-I { color: #7f8c8d; font-weight: bold; }

        .matrix-section {
            margin-bottom: 12px;
        }

        .matrix-table {
            width: 100%;
            border-collapse: collapse;
            font-size: 8pt;
        }

        .matrix-table th {
            background: #2c3e50;
            color: white;
            padding: 6px 4px;
            text-align: center;
            font-weight: 500;
            border: 1px solid #34495e;
        }

        .matrix-table th.col-role {
            background: #34495e;
            min-width: 50px;
        }

        .matrix-table th.col-decision {
            background: #1a252f;
            text-align: left;
            padding-left: 6px;
        }

        .matrix-table td {
            padding: 5px 4px;
            border: 1px solid #bdc3c7;
            text-align: center;
            transition: all 0.2s;
        }

        .matrix-table tr:nth-child(odd) td {
            background: #fafafa;
        }

        .matrix-table tr:hover td {
            background: #ebf5fb;
        }

        .matrix-table td:first-child {
            text-align: left;
            padding-left: 6px;
            background: #f5f6fa !important;
            font-weight: 500;
        }

        .matrix-table td:first-child .zh {
            display: block;
            color: #2c3e50;
        }

        .matrix-table td:first-child .en {
            display: block;
            color: #7f8c8d;
            font-size: 7pt;
        }

        .raci-H { background: #fadbd8 !important; color: #c0392b; font-weight: bold; }
        .raci-A { background: #d6eaf8 !important; color: #2471a3; font-weight: bold; }
        .raci-S { background: #d5f5e3 !important; color: #1e8449; font-weight: bold; }
        .raci-R { background: #fdebd0 !important; color: #d35400; font-weight: bold; }
        .raci-C { background: #f5eef8 !important; color: #7d3c98; font-weight: bold; }
        .raci-I { background: #f2f3f4 !important; color: #626567; }

        .handover-section {
            margin-bottom: 12px;
        }

        .handover-table {
            width: 100%;
            border-collapse: collapse;
            font-size: 8pt;
        }

        .handover-table th {
            background: #16a085;
            color: white;
            padding: 5px 6px;
            text-align: left;
            font-weight: 500;
        }

        .handover-table td {
            padding: 4px 6px;
            border: 1px solid #bdc3c7;
        }

        .handover-table tr:nth-child(even) td {
            background: #e8f8f5;
        }

        .arrow {
            display: inline-block;
            padding: 2px 6px;
            background: #1abc9c;
            color: white;
            border-radius: 3px;
            font-size: 7pt;
        }

        .guide-section {
            margin-bottom: 10px;
        }

        .guide-box {
            background: #fef9e7;
            border: 1px solid #f9e79f;
            border-radius: 4px;
            padding: 8px 10px;
        }

        .guide-box h3 {
            color: #d68910;
            font-size: 9pt;
            margin-bottom: 6px;
        }

        .guide-steps {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            gap: 6px;
            margin-top: 8px;
        }

        .guide-step {
            background: #fff;
            border: 1px solid #f39c12;
            border-radius: 3px;
            padding: 5px;
            text-align: center;
        }

        .guide-step .step-num {
            display: inline-block;
            width: 18px;
            height: 18px;
            background: #f39c12;
            color: white;
            border-radius: 50%;
            font-size: 8pt;
            line-height: 18px;
            margin-bottom: 3px;
        }

        .guide-step .step-title {
            font-size: 7.5pt;
            color: #2c3e50;
            font-weight: bold;
            display: block;
        }

        .guide-step .step-time {
            font-size: 7pt;
            color: #7f8c8d;
        }

        .legend {
            display: flex;
            justify-content: center;
            gap: 12px;
            margin-bottom: 10px;
            font-size: 7.5pt;
            flex-wrap: wrap;
        }

        .legend-item {
            display: flex;
            align-items: center;
            gap: 4px;
        }

        .legend-color {
            width: 14px;
            height: 14px;
            border-radius: 2px;
        }

        .legend-H { background: #fadbd8; border: 1px solid #e74c3c; }
        .legend-A { background: #d6eaf8; border: 1px solid #3498db; }
        .legend-S { background: #d5f5e3; border: 1px solid #27ae60; }
        .legend-R { background: #fdebd0; border: 1px solid #e67e22; }
        .legend-C { background: #f5eef8; border: 1px solid #9b59b6; }
        .legend-I { background: #f2f3f4; border: 1px solid #7f8c8d; }

        .footer {
            text-align: center;
            font-size: 7pt;
            color: #95a5a6;
            padding-top: 8px;
            border-top: 1px solid #ecf0f1;
        }

        @media print {
            body {
                padding: 0;
                font-size: 8pt;
            }

            .matrix-table tr:hover td {
                background: inherit;
            }

            .header {
                margin-bottom: 8px;
                padding-bottom: 6px;
            }

            .guide-box {
                background: #fef9e7 !important;
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact;
            }

            .raci-H, .raci-A, .raci-S, .raci-R, .raci-C, .raci-I {
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact;
            }

            .guide-step, .role-table th, .matrix-table th, .handover-table th {
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact;
            }
        }

        .bottom-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
        }

        .mode-table {
            width: 100%;
            border-collapse: collapse;
            font-size: 8pt;
        }

        .mode-table th {
            background: #8e44ad;
            color: white;
            padding: 4px 6px;
            text-align: left;
        }

        .mode-table td {
            padding: 3px 6px;
            border: 1px solid #bdc3c7;
        }

        .mode-table tr:nth-child(even) td {
            background: #f5eef8;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>F3：RACI矩阵模板</h1>
        <div class="subtitle">A4单张 | 人机协同责任分配工具</div>
        <div class="purpose">明确人类与AI系统在各类决策中的责任分配，确保人机协作清晰、高效、可追溯</div>
    </div>

    <div class="legend">
        <div class="legend-item"><div class="legend-color legend-H"></div><span class="role-H">H</span>=Human 人类决策</div>
        <div class="legend-item"><div class="legend-color legend-A"></div><span class="role-A">A</span>=AI 系统执行</div>
        <div class="legend-item"><div class="legend-color legend-S"></div><span class="role-S">S</span>=Shared 共享</div>
        <div class="legend-item"><div class="legend-color legend-R"></div><span class="role-R">R</span>=Responsible 执行</div>
        <div class="legend-item"><div class="legend-color legend-C"></div><span class="role-C">C</span>=Consulted 咨询</div>
        <div class="legend-item"><div class="legend-color legend-I"></div><span class="role-I">I</span>=Informed 知会</div>
    </div>

    <div class="role-section">
        <div class="section-title">角色定义 | Role Definitions</div>
        <table class="role-table">
            <tr>
                <th>代码</th>
                <th>角色</th>
                <th>说明</th>
            </tr>
            <tr>
                <td><span class="role-code role-H">H</span></td>
                <td>Human / 人员</td>
                <td>人类负责，最终决策者，对结果承担主要责任</td>
            </tr>
            <tr>
                <td><span class="role-code role-A">A</span></td>
                <td>AI / System / 系统</td>
                <td>AI/系统负责，自动化执行，提供分析建议</td>
            </tr>
            <tr>
                <td><span class="role-code role-S">S</span></td>
                <td>Shared / 共享</td>
                <td>人类与AI共同负责，双方协同完成</td>
            </tr>
            <tr>
                <td><span class="role-code role-R">R</span></td>
                <td>Responsible / 执行</td>
                <td>实际任务执行者，负责具体操作实施</td>
            </tr>
            <tr>
                <td><span class="role-code role-C">C</span></td>
                <td>Consulted / 咨询</td>
                <td>决策前提供输入，被咨询方</td>
            </tr>
            <tr>
                <td><span class="role-code role-I">I</span></td>
                <td>Informed / 知会</td>
                <td>决策后通知方，获知结果</td>
            </tr>
        </table>
    </div>

    <div class="matrix-section">
        <div class="section-title">RACI矩阵 | RACI Matrix - 人机协同决策分配表</div>
        <table class="matrix-table">
            <thead>
                <tr>
                    <th class="col-decision">决策类型 Decision Type</th>
                    <th class="col-role">战略<br>Strategic</th>
                    <th class="col-role">日常运营<br>Operations</th>
                    <th class="col-role">风险评估<br>Risk</th>
                    <th class="col-role">资源配置<br>Resource</th>
                    <th class="col-role">绩效评估<br>Performance</th>
                    <th class="col-role">异常处理<br>Exception</th>
                    <th class="col-role">流程优化<br>Optimization</th>
                    <th class="col-role">人员管理<br>People</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><span class="zh">数据收集与整理</span><span class="en">Data Collection</span></td>
                    <td class="raci-C">C</td>
                    <td class="raci-S">S</td>
                    <td class="raci-S">S</td>
                    <td class="raci-C">C</td>
                    <td class="raci-S">S</td>
                    <td class="raci-I">I</td>
                    <td class="raci-C">C</td>
                    <td class="raci-I">I</td>
                </tr>
                <tr>
                    <td><span class="zh">趋势分析与预测</span><span class="en">Trend Analysis</span></td>
                    <td class="raci-C">C</td>
                    <td class="raci-A">A</td>
                    <td class="raci-S">S</td>
                    <td class="raci-C">C</td>
                    <td class="raci-S">S</td>
                    <td class="raci-I">I</td>
                    <td class="raci-C">C</td>
                    <td class="raci-I">I</td>
                </tr>
                <tr>
                    <td><span class="zh">方案生成与评估</span><span class="en">Option Generation</span></td>
                    <td class="raci-S">S</td>
                    <td class="raci-S">S</td>
                    <td class="raci-S">S</td>
                    <td class="raci-S">S</td>
                    <td class="raci-S">S</td>
                    <td class="raci-R">R</td>
                    <td class="raci-S">S</td>
                    <td class="raci-S">S</td>
                </tr>
                <tr>
                    <td><span class="zh">风险识别与量化</span><span class="en">Risk Identification</span></td>
                    <td class="raci-C">C</td>
                    <td class="raci-I">I</td>
                    <td class="raci-A">A</td>
                    <td class="raci-I">I</td>
                    <td class="raci-I">I</td>
                    <td class="raci-R">R</td>
                    <td class="raci-I">I</td>
                    <td class="raci-I">I</td>
                </tr>
                <tr>
                    <td><span class="zh">决策建议输出</span><span class="en">Decision Recommendation</span></td>
                    <td class="raci-A">A</td>
                    <td class="raci-A">A</td>
                    <td class="raci-A">A</td>
                    <td class="raci-A">A</td>
                    <td class="raci-A">A</td>
                    <td class="raci-S">S</td>
                    <td class="raci-A">A</td>
                    <td class="raci-A">A</td>
                </tr>
                <tr>
                    <td><span class="zh">最终决策确认</span><span class="en">Final Decision</span></td>
                    <td class="raci-H">H</td>
                    <td class="raci-S">S</td>
                    <td class="raci-H">H</td>
                    <td class="raci-H">H</td>
                    <td class="raci-H">H</td>
                    <td class="raci-H">H</td>
                    <td class="raci-H">H</td>
                    <td class="raci-H">H</td>
                </tr>
                <tr>
                    <td><span class="zh">执行实施与监控</span><span class="en">Execution & Monitoring</span></td>
                    <td class="raci-A">A</td>
                    <td class="raci-A">A</td>
                    <td class="raci-A">A</td>
                    <td class="raci-A">A</td>
                    <td class="raci-A">A</td>
                    <td class="raci-A">A</td>
                    <td class="raci-A">A</td>
                    <td class="raci-A">A</td>
                </tr>
                <tr>
                    <td><span class="zh">结果反馈与改进</span><span class="en">Feedback & Improvement</span></td>
                    <td class="raci-S">S</td>
                    <td class="raci-S">S</td>
                    <td class="raci-S">S</td>
                    <td class="raci-S">S</td>
                    <td class="raci-S">S</td>
                    <td class="raci-S">S</td>
                    <td class="raci-S">S</td>
                    <td class="raci-S">S</td>
                </tr>
            </tbody>
        </table>
    </div>

    <div class="bottom-grid">
        <div class="handover-section">
            <div class="section-title">交接点标注 | Handover Points</div>
            <table class="handover-table">
                <tr>
                    <th>交接点</th>
                    <th>触发条件</th>
                    <th>交接方向</th>
                </tr>
                <tr>
                    <td><strong>数据→分析</strong></td>
                    <td>数据准备完成</td>
                    <td><span class="arrow">H → AI</span></td>
                </tr>
                <tr>
                    <td><strong>分析→建议</strong></td>
                    <td>分析结果输出</td>
                    <td><span class="arrow">AI → H</span></td>
                </tr>
                <tr>
                    <td><strong>建议→决策</strong></td>
                    <td>决策时间节点</td>
                    <td><span class="arrow">AI → H</span></td>
                </tr>
                <tr>
                    <td><strong>决策→执行</strong></td>
                    <td>决策确认完成</td>
                    <td><span class="arrow">H → AI</span></td>
                </tr>
                <tr>
                    <td><strong>执行→反馈</strong></td>
                    <td>任务完成/异常</td>
                    <td><span class="arrow">AI → H</span></td>
                </tr>
            </table>
        </div>

        <div class="mode-section">
            <div class="section-title">人机协作模式</div>
            <table class="mode-table">
                <tr>
                    <th>模式</th>
                    <th>适用场景</th>
                    <th>比例</th>
                </tr>
                <tr>
                    <td><span class="role-H">H主导型</span></td>
                    <td>战略决策、重大风险</td>
                    <td>H 80% : AI 20%</td>
                </tr>
                <tr>
                    <td><span class="role-A">A主导型</span></td>
                    <td>日常运营、数据分析</td>
                    <td>H 20% : AI 80%</td>
                </tr>
                <tr>
                    <td><span class="role-S">共享型</span></td>
                    <td>方案评估、反馈改进</td>
                    <td>H 50% : AI 50%</td>
                </tr>
                <tr>
                    <td><span class="role-A">自动化型</span></td>
                    <td>高频重复、标准化</td>
                    <td>H 10% : AI 90%</td>
                </tr>
            </table>
        </div>
    </div>

    <div class="guide-section">
        <div class="section-title">讲师操作指引 | Instructor Guide</div>
        <div class="guide-box">
            <h3>教学流程建议 (45分钟)</h3>
            <div class="guide-steps">
                <div class="guide-step">
                    <span class="step-num">1</span>
                    <span class="step-title">开场导入</span>
                    <span class="step-time">5分钟</span>
                </div>
                <div class="guide-step">
                    <span class="step-num">2</span>
                    <span class="step-title">矩阵讲解</span>
                    <span class="step-time">10分钟</span>
                </div>
                <div class="guide-step">
                    <span class="step-num">3</span>
                    <span class="step-title">互动练习</span>
                    <span class="step-time">15分钟</span>
                </div>
                <div class="guide-step">
                    <span class="step-num">4</span>
                    <span class="step-title">案例分析</span>
                    <span class="step-time">10分钟</span>
                </div>
                <div class="guide-step">
                    <span class="step-num">5</span>
                    <span class="step-title">总结要点</span>
                    <span class="step-time">5分钟</span>
                </div>
            </div>
        </div>
    </div>

    <div class="footer">
        <strong>F3：RACI矩阵模板</strong> | 人机协同责任分配工具 | v1.0 | 适用场景：人机协同决策、责任分配、流程优化
    </div>
</body>
</html>"""

import os

target_dir = r"D:\新课开发\数字化转型\2.人机协同权责边界与决策分级：从44%分工到18%系统重构的补课\全流程工具表单"
os.makedirs(target_dir, exist_ok=True)

path = os.path.join(target_dir, "F3_RACI矩阵模板.html")
with open(path, 'w', encoding='utf-8') as f:
    f.write(html_content)
print(f"HTML file written to: {path}")
