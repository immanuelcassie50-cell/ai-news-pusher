#!/usr/bin/env python3
html = '''<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>F6：系统性重构路径规划表</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;500;700&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Noto Sans SC', -apple-system, BlinkMacSystemFont, sans-serif; font-size: 10pt; line-height: 1.5; color: #2c3e50; background: #f8f9fa; }
        @page { size: A4; margin: 12mm 10mm; }
        .page { width: 210mm; min-height: 297mm; margin: 10px auto; background: #ffffff; box-shadow: 0 2px 10px rgba(0,0,0,0.1); padding: 12mm 10mm; }
        .header { background: linear-gradient(135deg, #1a5276 0%, #2980b9 100%); color: white; padding: 8mm 10mm; margin: -12mm -10mm 6mm -10mm; position: relative; }
        .header::after { content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 4px; background: linear-gradient(90deg, #f39c12, #e74c3c, #9b59b6); }
        .header-top { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 4px; }
        .doc-id { font-size: 24pt; font-weight: 700; letter-spacing: 2px; }
        .doc-meta { text-align: right; font-size: 7pt; opacity: 0.9; }
        .header-bottom { display: flex; justify-content: space-between; align-items: flex-end; }
        .doc-title { font-size: 14pt; font-weight: 500; margin-bottom: 2px; }
        .doc-subtitle { font-size: 8pt; opacity: 0.85; }
        .insight-badge { background: rgba(255,255,255,0.15); border: 1px solid rgba(255,255,255,0.3); border-radius: 4px; padding: 4px 8px; font-size: 7pt; text-align: center; }
        .insight-badge strong { display: block; font-size: 14pt; font-weight: 700; color: #f39c12; }
        .section { margin-bottom: 5mm; break-inside: avoid; }
        .section-title { font-size: 9pt; font-weight: 700; color: #1a5276; padding-bottom: 2px; border-bottom: 2px solid #2980b9; margin-bottom: 4px; display: flex; align-items: center; gap: 6px; }
        .section-title::before { content: ''; width: 4px; height: 10px; background: #2980b9; border-radius: 2px; }
        table { width: 100%; border-collapse: collapse; font-size: 8pt; margin-bottom: 3mm; }
        th { background: #e8f4fc; color: #1a5276; font-weight: 600; text-align: left; padding: 3px 5px; border: 1px solid #b8d4e8; font-size: 7.5pt; }
        td { padding: 3px 5px; border: 1px solid #d5dfe8; vertical-align: top; }
        tr:nth-child(even) { background: #f4f9fc; }
        .score-cell { text-align: center; font-weight: 600; color: #c0392b; }
        .phase-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 3mm; margin-bottom: 4mm; }
        .phase-card { border: 1px solid #d5dfe8; border-radius: 4px; overflow: hidden; break-inside: avoid; }
        .phase-header { color: white; padding: 4px 6px; text-align: center; }
        .phase-header.phase1 { background: linear-gradient(135deg, #3498db 0%, #5dade2 100%); }
        .phase-header.phase2 { background: linear-gradient(135deg, #9b59b6 0%, #af7ac5 100%); }
        .phase-header.phase3 { background: linear-gradient(135deg, #e67e22 0%, #f39c12 100%); }
        .phase-header.phase4 { background: linear-gradient(135deg, #27ae60 0%, #52be80 100%); }
        .phase-num { font-size: 7pt; opacity: 0.9; }
        .phase-name { font-size: 10pt; font-weight: 700; }
        .phase-days { font-size: 6.5pt; opacity: 0.85; }
        .phase-body { padding: 4px 5px; font-size: 7pt; }
        .phase-section { margin-bottom: 3px; }
        .phase-section-title { font-weight: 600; color: #1a5276; font-size: 6.5pt; margin-bottom: 1px; }
        .phase-goal { background: #fef9e7; border-left: 2px solid #f39c12; padding: 2px 4px; font-size: 6.5pt; margin-bottom: 3px; }
        .phase-list { list-style: none; padding-left: 0; }
        .phase-list li { padding: 1px 0; padding-left: 8px; position: relative; font-size: 6.5pt; }
        .phase-list li::before { content: '→'; position: absolute; left: 0; color: #2980b9; }
        .phase-milestone { background: #e8f8f5; border-radius: 2px; padding: 2px 4px; font-size: 6.5pt; }
        .phase-resource { font-size: 6pt; color: #7f8c8d; padding: 1px 0; }
        .timeline { position: relative; margin: 5mm 0; padding-left: 15mm; }
        .timeline::before { content: ''; position: absolute; left: 6mm; top: 0; bottom: 0; width: 3px; background: linear-gradient(180deg, #3498db 0%, #9b59b6 33%, #e67e22 66%, #27ae60 100%); border-radius: 2px; }
        .timeline-item { position: relative; margin-bottom: 4mm; padding-left: 5mm; }
        .timeline-item::before { content: ''; position: absolute; left: -11mm; top: 2px; width: 10px; height: 10px; border-radius: 50%; border: 2px solid #fff; box-shadow: 0 0 0 2px currentColor; }
        .timeline-item.phase1::before { background: #3498db; color: #3498db; }
        .timeline-item.phase2::before { background: #9b59b6; color: #9b59b6; }
        .timeline-item.phase3::before { background: #e67e22; color: #e67e22; }
        .timeline-item.phase4::before { background: #27ae60; color: #27ae60; }
        .timeline-header { display: flex; align-items: center; gap: 4px; margin-bottom: 2px; }
        .timeline-phase { font-weight: 700; font-size: 9pt; color: #1a5276; }
        .timeline-name { font-size: 8pt; color: #5d6d7e; }
        .timeline-days { background: #ecf0f1; padding: 1px 5px; border-radius: 3px; font-size: 6.5pt; color: #7f8c8d; }
        .timeline-content { display: grid; grid-template-columns: repeat(3, 1fr); gap: 3mm; font-size: 7pt; }
        .timeline-section { background: #f8f9fa; padding: 3px 5px; border-radius: 3px; }
        .timeline-section-title { font-weight: 600; color: #1a5276; font-size: 6.5pt; margin-bottom: 2px; }
        .gap-matrix { display: grid; grid-template-columns: 2fr 1fr 1fr 2fr 0.5fr; gap: 1px; background: #d5dfe8; border-radius: 4px; overflow: hidden; font-size: 7pt; }
        .gap-header { background: #1a5276; color: white; padding: 4px; text-align: center; font-weight: 600; font-size: 7pt; }
        .gap-cell { background: #ffffff; padding: 3px 4px; text-align: center; }
        .gap-dim { text-align: left; font-weight: 500; background: #e8f4fc; }
        .gap-current, .gap-target { font-weight: 700; font-size: 9pt; }
        .gap-current { background: #fdebd0; }
        .gap-target { background: #d5f5e3; }
        .gap-desc { text-align: left; font-size: 6.5pt; color: #5d6d7e; }
        .gap-priority { text-align: center; }
        .maturity-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 2mm; }
        .maturity-card { border: 1px solid #d5dfe8; border-radius: 4px; padding: 4px; text-align: center; break-inside: avoid; }
        .maturity-level { display: inline-block; padding: 2px 8px; border-radius: 10px; font-weight: 700; font-size: 9pt; margin-bottom: 2px; }
        .maturity-card.l1 .maturity-level { background: #fadbd8; color: #c0392b; }
        .maturity-card.l2 .maturity-level { background: #fdebd0; color: #d35400; }
        .maturity-card.l3 .maturity-level { background: #fef9e7; color: #b7950b; }
        .maturity-card.l4 .maturity-level { background: #d5f5e3; color: #1e8449; }
        .maturity-card.l5 .maturity-level { background: #d4e6f1; color: #1a5276; }
        .maturity-name { font-weight: 600; font-size: 8pt; color: #2c3e50; margin-bottom: 2px; }
        .maturity-desc { font-size: 6.5pt; color: #7f8c8d; }
        .factors-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2mm; }
        .factor-card { background: linear-gradient(135deg, #f8f9fa 0%, #ecf0f1 100%); border-left: 3px solid; padding: 4px 5px; border-radius: 0 4px 4px 0; break-inside: avoid; }
        .factor-card.leadership { border-color: #e74c3c; }
        .factor-card.strategy { border-color: #9b59b6; }
        .factor-card.execution { border-color: #3498db; }
        .factor-card.resource { border-color: #f39c12; }
        .factor-card.culture { border-color: #1abc9c; }
        .factor-card.tech { border-color: #27ae60; }
        .factor-title { font-weight: 700; font-size: 8pt; color: #2c3e50; margin-bottom: 2px; }
        .factor-desc { font-size: 6.5pt; color: #7f8c8d; }
        .risk-table th { background: #f8f9fa; }
        .risk-level { display: inline-block; padding: 1px 4px; border-radius: 3px; font-size: 6pt; font-weight: 600; }
        .risk-level.high { background: #fadbd8; color: #c0392b; }
        .risk-level.medium { background: #fef9e7; color: #b7950b; }
        .risk-level.low { background: #d5f5e3; color: #1e8449; }
        .instructor-box { background: linear-gradient(135deg, #fef9e7 0%, #fdebd0 100%); border: 1px solid #f39c12; border-radius: 4px; padding: 5px; margin-bottom: 3mm; }
        .instructor-header { display: flex; align-items: center; gap: 6px; margin-bottom: 4px; }
        .instructor-icon { width: 20px; height: 20px; background: #f39c12; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: 700; font-size: 10pt; }
        .instructor-title { font-weight: 700; color: #b7950b; font-size: 9pt; }
        .instructor-content { display: grid; grid-template-columns: 1fr 1fr; gap: 4mm; font-size: 7pt; }
        .instructor-section { background: rgba(255,255,255,0.5); padding: 4px; border-radius: 3px; }
        .instructor-section-title { font-weight: 600; color: #b7950b; font-size: 7.5pt; margin-bottom: 3px; padding-bottom: 2px; border-bottom: 1px dashed #f39c12; }
        .flow-table { width: 100%; font-size: 6.5pt; }
        .flow-table th { background: #fdebd0; font-size: 6.5pt; }
        .question-list { list-style: none; }
        .question-list li { padding: 2px 0; padding-left: 10px; position: relative; font-size: 6.5pt; }
        .question-list li::before { content: '"'; position: absolute; left: 0; color: #f39c12; font-weight: 700; }
        .homework-box { background: #e8f8f5; border: 1px solid #1abc9c; border-radius: 3px; padding: 4px; margin-top: 3px; }
        .homework-title { font-weight: 600; color: #1abc9c; font-size: 7pt; margin-bottom: 2px; }
        .homework-list { list-style: none; font-size: 6.5pt; }
        .homework-list li { padding: 1px 0; display: flex; align-items: center; gap: 4px; }
        .homework-list li::before { content: counter(item); counter-increment: item; display: inline-flex; align-items: center; justify-content: center; width: 12px; height: 12px; background: #1abc9c; color: white; border-radius: 50%; font-size: 6pt; font-weight: 700; }
        .footer { margin-top: 5mm; padding-top: 3mm; border-top: 1px solid #d5dfe8; display: flex; justify-content: space-between; font-size: 6.5pt; color: #95a5a6; }
        @media print { body { background: white; -webkit-print-color-adjust: exact; print-color-adjust: exact; } .page { box-shadow: none; margin: 0; padding: 10mm 8mm; } .header { margin: -10mm -8mm 5mm -8mm; -webkit-print-color-adjust: exact; print-color-adjust: exact; } .phase-header, .maturity-level, .factor-card, .instructor-box { -webkit-print-color-adjust: exact; print-color-adjust: exact; } }
    </style>
</head>
<body>
    <div class="page">
        <div class="header">
            <div class="header-top">
                <div><div class="doc-id">F6</div><div class="doc-meta">A4单张 | 转型路径规划工具</div></div>
                <div class="insight-badge"><strong>18%</strong><div>企业完成系统性重构</div></div>
            </div>
            <div class="header-bottom">
                <div><div class="doc-title">系统性重构路径规划表</div><div class="doc-subtitle">Systematic Restructuring Roadmap</div></div>
            </div>
        </div>
        <div class="section">
            <div class="section-title">一、现状评估（五维评分）</div>
            <table>
                <tr><th style="width:15%">评估维度</th><th style="width:45%">说明</th><th style="width:40%">得分（1-5）</th></tr>
                <tr><td><strong>战略匹配度</strong></td><td>H-AI协作与企业战略目标的一致性</td><td class="score-cell">___</td></tr>
                <tr><td><strong>流程成熟度</strong></td><td>人机协同流程的标准化程度</td><td class="score-cell">___</td></tr>
                <tr><td><strong>技术支撑度</strong></td><td>基础设施与工具链的完备性</td><td class="score-cell">___</td></tr>
                <tr><td><strong>组织适配度</strong></td><td>团队能力与组织架构的匹配度</td><td class="score-cell">___</td></tr>
                <tr><td><strong>文化支撑度</strong></td><td>员工对H-AI协作的接受度与参与度</td><td class="score-cell">___</td></tr>
                <tr><td colspan="2" style="text-align:right;font-weight:600;">现状评估总分：</td><td class="score-cell" style="font-size:11pt;">___ / 25</td></tr>
            </table>
        </div>
        <div class="section">
            <div class="section-title">二、成熟度等级参照表</div>
            <div class="maturity-grid">
                <div class="maturity-card l1"><div class="maturity-level">L1</div><div class="maturity-name">初始级</div><div class="maturity-desc">无正式H-AI协作体系，任务随机分配</div></div>
                <div class="maturity-card l2"><div class="maturity-level">L2</div><div class="maturity-name">反应级</div><div class="maturity-desc">被动响应问题，缺乏前瞻性规划</div></div>
                <div class="maturity-card l3"><div class="maturity-level">L3</div><div class="maturity-name">定义级</div><div class="maturity-desc">基础流程已定义，但执行不一致</div></div>
                <div class="maturity-card l4"><div class="maturity-level">L4</div><div class="maturity-name">管理级</div><div class="maturity-desc">主动测量、管理和监控协作效果</div></div>
                <div class="maturity-card l5"><div class="maturity-level">L5</div><div class="maturity-name">优化级</div><div class="maturity-desc">持续优化，形成正向循环机制</div></div>
            </div>
        </div>
        <div class="section">
            <div class="section-title">三、差距分析矩阵</div>
            <div class="gap-matrix">
                <div class="gap-header">维度</div><div class="gap-header">当前等级</div><div class="gap-header">目标等级</div><div class="gap-header">差距描述</div><div class="gap-header">优先</div>
                <div class="gap-cell gap-dim">战略匹配度</div><div class="gap-cell gap-current">L___</div><div class="gap-cell gap-target">L___</div><div class="gap-cell gap-desc"></div><div class="gap-cell gap-priority"><input type="checkbox"></div>
                <div class="gap-cell gap-dim">流程成熟度</div><div class="gap-cell gap-current">L___</div><div class="gap-cell gap-target">L___</div><div class="gap-cell gap-desc"></div><div class="gap-cell gap-priority"><input type="checkbox"></div>
                <div class="gap-cell gap-dim">技术支撑度</div><div class="gap-cell gap-current">L___</div><div class="gap-cell gap-target">L___</div><div class="gap-cell gap-desc"></div><div class="gap-cell gap-priority"><input type="checkbox"></div>
                <div class="gap-cell gap-dim">组织适配度</div><div class="gap-cell gap-current">L___</div><div class="gap-cell gap-target">L___</div><div class="gap-cell gap-desc"></div><div class="gap-cell gap-priority"><input type="checkbox"></div>
                <div class="gap-cell gap-dim">文化支撑度</div><div class="gap-cell gap-current">L___</div><div class="gap-cell gap-target">L___</div><div class="gap-cell gap-desc"></div><div class="gap-cell gap-priority"><input type="checkbox"></div>
            </div>
        </div>
        <div class="section">
            <div class="section-title">四、四阶段重构路线图</div>
            <div class="phase-grid">
                <div class="phase-card">
                    <div class="phase-header phase1"><div class="phase-num">Phase 1</div><div class="phase-name">评估期</div><div class="phase-days">0-30 天</div></div>
                    <div class="phase-body">
                        <div class="phase-goal"><strong>核心目标：</strong>摸清家底，识别关键差距</div>
                        <div class="phase-section"><div class="phase-section-title">主要活动</div><ul class="phase-list"><li>全面调研（问卷+访谈）</li><li>流程梳理与建模</li><li>五维度成熟度自评</li><li>差距分析识别瓶颈</li></ul></div>
                        <div class="phase-section"><div class="phase-section-title">里程碑</div><div class="phase-milestone">《现状评估报告》完成</div></div>
                        <div class="phase-section"><div class="phase-section-title">所需资源</div><div class="phase-resource">项目经理x1 | 业务骨干x2-3 | ITx1</div></div>
                    </div>
                </div>
                <div class="phase-card">
                    <div class="phase-header phase2"><div class="phase-num">Phase 2</div><div class="phase-name">设计期</div><div class="phase-days">30-60 天</div></div>
                    <div class="phase-body">
                        <div class="phase-goal"><strong>核心目标：</strong>明确目标，设计路径</div>
                        <div class="phase-section"><div class="phase-section-title">主要活动</div><ul class="phase-list"><li>定义目标状态</li><li>设计目标架构</li><li>制定实施计划</li><li>资源规划与预算</li></ul></div>
                        <div class="phase-section"><div class="phase-section-title">里程碑</div><div class="phase-milestone">《实施路线图》获批</div></div>
                        <div class="phase-section"><div class="phase-section-title">所需资源</div><div class="phase-resource">方案设计师x2 | 变革专员x1</div></div>
                    </div>
                </div>
                <div class="phase-card">
                    <div class="phase-header phase3"><div class="phase-num">Phase 3</div><div class="phase-name">实施期</div><div class="phase-days">60-180 天</div></div>
                    <div class="phase-body">
                        <div class="phase-goal"><strong>核心目标：</strong>执行落地，解决问题</div>
                        <div class="phase-section"><div class="phase-section-title">主要活动</div><ul class="phase-list"><li>试点项目启动</li><li>流程再造与标准化</li><li>技术平台部署</li><li>团队能力建设</li></ul></div>
                        <div class="phase-section"><div class="phase-section-title">里程碑</div><div class="phase-milestone">Day 90试点 | Day 150推广</div></div>
                        <div class="phase-section"><div class="phase-section-title">所需资源</div><div class="phase-resource">团队x4-6 | 培训讲师x1-2</div></div>
                    </div>
                </div>
                <div class="phase-card">
                    <div class="phase-header phase4"><div class="phase-num">Phase 4</div><div class="phase-name">优化期</div><div class="phase-days">180+ 天</div></div>
                    <div class="phase-body">
                        <div class="phase-goal"><strong>核心目标：</strong>固化成果，持续迭代</div>
                        <div class="phase-section"><div class="phase-section-title">主要活动</div><ul class="phase-list"><li>效果全面评估</li><li>最佳实践固化</li><li>制度化完善</li><li>持续优化机制建立</li></ul></div>
                        <div class="phase-section"><div class="phase-section-title">里程碑</div><div class="phase-milestone">成熟度提升确认</div></div>
                        <div class="phase-section"><div class="phase-section-title">所需资源</div><div class="phase-resource">运营团队 | 质量管理</div></div>
                    </div>
                </div>
            </div>
            <div class="timeline">
                <div class="timeline-item phase1">
                    <div class="timeline-header"><span class="timeline-phase">Phase 1 评估期</span><span class="timeline-name">Assessment</span><span class="timeline-days">0-30天</span></div>
                    <div class="timeline-content"><div class="timeline-section"><div class="timeline-section-title">核心任务</div>现状全面调研、五维度评估、差距分析</div><div class="timeline-section"><div class="timeline-section-title">成功标准</div>覆盖率大于等于90%、访谈100%</div><div class="timeline-section"><div class="timeline-section-title">输出</div>《现状评估报告》《差距矩阵》</div></div>
                </div>
                <div class="timeline-item phase2">
                    <div class="timeline-header"><span class="timeline-phase">Phase 2 设计期</span><span class="timeline-name">Design</span><span class="timeline-days">30-60天</span></div>
                    <div class="timeline-content"><div class="timeline-section"><div class="timeline-section-title">核心任务</div>目标定义、架构设计、实施计划</div><div class="timeline-section"><div class="timeline-section-title">成功标准</div>目标获认可、计划细化可执行</div><div class="timeline-section"><div class="timeline-section-title">输出</div>《目标状态定义》《路线图》</div></div>
                </div>
                <div class="timeline-item phase3">
                    <div class="timeline-header"><span class="timeline-phase">Phase 3 实施期</span><span class="timeline-name">Implementation</span><span class="timeline-days">60-180天</span></div>
                    <div class="timeline-content"><div class="timeline-section"><div class="timeline-section-title">核心任务</div>试点大于推广、流程标准化、培训</div><div class="timeline-section"><div class="timeline-section-title">成功标准</div>KPI达成、覆盖率大于等于80%</div><div class="timeline-section"><div class="timeline-section-title">输出</div>新流程、新能力、新制度</div></div>
                </div>
                <div class="timeline-item phase4">
                    <div class="timeline-header"><span class="timeline-phase">Phase 4 优化期</span><span class="timeline-name">Optimization</span><span class="timeline-days">180+天</span></div>
                    <div class="timeline-content"><div class="timeline-section"><div class="timeline-section-title">核心任务</div>评估复盘、最佳实践、知识管理</div><div class="timeline-section"><div class="timeline-section-title">成功标准</div>等级提升大于等于1级</div><div class="timeline-section"><div class="timeline-section-title">输出</div>持续优化机制</div></div>
                </div>
            </div>
        </div>
        <div class="section">
            <div class="section-title">五、关键成功因素与风险</div>
            <div class="factors-grid">
                <div class="factor-card leadership"><div class="factor-title">领导力</div><div class="factor-desc">高层持续支持与参与</div></div>
                <div class="factor-card strategy"><div class="factor-title">战略</div><div class="factor-desc">与业务战略紧密对齐</div></div>
                <div class="factor-card execution"><div class="factor-title">执行</div><div class="factor-desc">分阶段推进，试点验证</div></div>
                <div class="factor-card resource"><div class="factor-title">资源</div><div class="factor-desc">充足资源投入与保障</div></div>
                <div class="factor-card culture"><div class="factor-title">文化</div><div class="factor-desc">变革意愿与接受度</div></div>
                <div class="factor-card tech"><div class="factor-title">技术</div><div class="factor-desc">平台工具的稳定可靠</div></div>
            </div>
        </div>
        <table class="risk-table" style="margin-top:3mm;">
            <tr><th style="width:25%">风险项</th><th style="width:12%">可能性</th><th style="width:12%">影响度</th><th style="width:51%">应对策略</th></tr>
            <tr><td>资源不足</td><td><span class="risk-level medium">中</span></td><td><span class="risk-level high">高</span></td><td>提前规划，建立优先级</td></tr>
            <tr><td>变革阻力</td><td><span class="risk-level high">高</span></td><td><span class="risk-level high">高</span></td><td>充分沟通，早期参与</td></tr>
            <tr><td>技术问题</td><td><span class="risk-level medium">中</span></td><td><span class="risk-level medium">中</span></td><td>充分测试，备选方案</td></tr>
            <tr><td>优先级冲突</td><td><span class="risk-level high">高</span></td><td><span class="risk-level medium">中</span></td><td>明确治理结构，高层仲裁</td></tr>
            <tr><td>效果不达预期</td><td><span class="risk-level medium">中</span></td><td><span class="risk-level high">高</span></td><td>阶段性检查，及时调整</td></tr>
        </table>
        <div class="section">
            <div class="section-title">六、讲师操作指引</div>
            <div class="instructor-box">
                <div class="instructor-header"><div class="instructor-icon">!</div><div class="instructor-title">讲师使用指南</div></div>
                <div class="instructor-content">
                    <div class="instructor-section">
                        <div class="instructor-section-title">引导流程（约2小时）</div>
                        <table class="flow-table"><tr><th>环节</th><th>时间</th><th>内容</th></tr><tr><td>导入</td><td>10min</td><td>18%现象与重构必要性</td></tr><tr><td>评估</td><td>30min</td><td>现状五维评估练习</td></tr><tr><td>分析</td><td>30min</td><td>差距分析矩阵填写</td></tr><tr><td>规划</td><td>40min</td><td>四阶段路线图制定</td></tr><tr><td>讨论</td><td>30min</td><td>小组分享与点评</td></tr><tr><td>总结</td><td>20min</td><td>要点回顾与作业布置</td></tr></table>
                    </div>
                    <div class="instructor-section">
                        <div class="instructor-section-title">引导话术</div>
                        <ul class="question-list"><li>在座各位，你们企业目前的人机协作处于哪个等级？</li><li>你们觉得最制约发展的维度是哪一个？为什么？</li><li>如果给你们180天，最先要解决的是什么？</li><li>对照目标状态，我们今天回去后第一件事做什么？</li></ul>
                        <div class="homework-box"><div class="homework-title">课后作业</div><ol class="homework-list" style="counter-reset: item;"><li>五维现状评分</li><li>目标状态定义</li><li>关键差距识别</li><li>优先改进行动建议</li></ol></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer"><div>工具版本：F6 | 适用场景：企业H-AI协作转型规划</div><div>更新时间：2026-08</div></div>
    </div>
</body>
</html>'''

import os
os.chdir('D:/新课开发/数字化转型/2.人机协同权责边界与决策分级：从44%分工到18%系统重构的补课/全流程工具表单')
with open('F6_系统性重构路径规划表.html', 'w', encoding='utf-8') as f:
    f.write(html)
print('HTML file created successfully')
