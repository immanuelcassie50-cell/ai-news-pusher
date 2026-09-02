html_content = """<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <title>F4：决策触发机制设计表</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: "Microsoft YaHei", "PingFang SC", sans-serif; background: #f5f7fa; color: #2c3e50; font-size: 13px; }
        .page { width: 210mm; min-height: 297mm; padding: 15mm 20mm; margin: 10px auto; background: #fff; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
        .header { text-align: center; margin-bottom: 20px; padding-bottom: 15px; border-bottom: 3px solid #3498db; }
        .header h1 { font-size: 24px; color: #2c3e50; margin-bottom: 8px; }
        .header .subtitle { font-size: 14px; color: #7f8c8d; }
        .header .meta { font-size: 11px; color: #95a5a6; margin-top: 5px; }
        .section { margin-bottom: 20px; }
        .section-title { font-size: 15px; font-weight: bold; color: #fff; background: linear-gradient(90deg, #3498db, #2980b9); padding: 8px 15px; border-radius: 4px 4px 0 0; }
        .section-title.green { background: linear-gradient(90deg, #27ae60, #229954); }
        .section-title.yellow { background: linear-gradient(90deg, #f39c12, #d68910); }
        .section-title.red { background: linear-gradient(90deg, #e74c3c, #c0392b); }
        .section-title.purple { background: linear-gradient(90deg, #9b59b6, #8e44ad); }
        .section-content { border: 1px solid #e0e0e0; border-top: none; padding: 15px; background: #fff; border-radius: 0 0 4px 4px; }
        table { width: 100%; border-collapse: collapse; margin-bottom: 10px; font-size: 12px; }
        th, td { padding: 8px 10px; text-align: left; border: 1px solid #ddd; }
        th { background: #f8f9fa; font-weight: bold; }
        tr:hover { background: #f8f9fa; }
        .level-l1 { background: #d4edda; color: #155724; padding: 3px 10px; border-radius: 12px; font-weight: bold; font-size: 11px; }
        .level-l2 { background: #fff3cd; color: #856404; padding: 3px 10px; border-radius: 12px; font-weight: bold; font-size: 11px; }
        .level-l3 { background: #f8d7da; color: #721c24; padding: 3px 10px; border-radius: 12px; font-weight: bold; font-size: 11px; }
        .purpose-box { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #fff; padding: 15px 20px; border-radius: 8px; margin-bottom: 15px; }
        .purpose-box h3 { margin-bottom: 8px; font-size: 14px; }
        .purpose-box p { font-size: 12px; opacity: 0.95; }
        .escalation-path { display: flex; align-items: center; justify-content: center; padding: 15px; background: #f8f9fa; border-radius: 8px; margin: 15px 0; }
        .path-step { padding: 12px 20px; border-radius: 6px; text-align: center; min-width: 120px; }
        .path-step.l1 { background: #27ae60; color: #fff; }
        .path-step.l2 { background: #f39c12; color: #fff; }
        .path-step.l3 { background: #e74c3c; color: #fff; }
        .path-step .label { font-size: 11px; opacity: 0.85; }
        .path-step .title { font-size: 14px; font-weight: bold; }
        .path-step .desc { font-size: 10px; opacity: 0.8; margin-top: 5px; }
        .path-arrow { font-size: 24px; color: #7f8c8d; margin: 0 10px; }
        .trigger-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; }
        .trigger-card { border: 1px solid #e0e0e0; border-radius: 6px; padding: 12px; background: #fff; }
        .trigger-card .card-header { font-weight: bold; font-size: 13px; margin-bottom: 8px; padding-bottom: 8px; border-bottom: 2px solid; }
        .trigger-card.threshold .card-header { border-color: #3498db; color: #3498db; }
        .trigger-card.anomaly .card-header { border-color: #9b59b6; color: #9b59b6; }
        .trigger-card.frequency .card-header { border-color: #f39c12; color: #f39c12; }
        .trigger-card.combined .card-header { border-color: #27ae60; color: #27ae60; }
        .trigger-card .item { display: flex; justify-content: space-between; padding: 4px 0; font-size: 11px; border-bottom: 1px dashed #eee; }
        .trigger-card .item:last-child { border-bottom: none; }
        .instructor-box { background: #fff9e6; border: 1px solid #f39c12; border-radius: 6px; padding: 15px; }
        .instructor-box h4 { color: #d68910; margin-bottom: 10px; font-size: 13px; }
        .instructor-box ul { margin-left: 20px; font-size: 11px; }
        .instructor-box li { margin: 5px 0; }
        .quote { font-style: italic; color: #7f8c8d; border-left: 3px solid #3498db; padding-left: 15px; margin: 10px 0; }
        .response-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; }
        .response-card { padding: 15px; border-radius: 8px; text-align: center; color: #fff; }
        .response-card.l1 { background: linear-gradient(135deg, #27ae60, #229954); }
        .response-card.l2 { background: linear-gradient(135deg, #f39c12, #d68910); }
        .response-card.l3 { background: linear-gradient(135deg, #e74c3c, #c0392b); }
        .response-card h5 { font-size: 14px; margin-bottom: 10px; }
        .response-card .time { font-size: 20px; font-weight: bold; margin: 8px 0; }
        .response-card .detail { font-size: 10px; opacity: 0.9; }
        .footer { text-align: center; padding-top: 15px; border-top: 1px solid #e0e0e0; color: #95a5a6; font-size: 10px; }
        .flow-diagram { background: #f8f9fa; padding: 20px; border-radius: 8px; text-align: center; }
        .flow-box { display: inline-block; padding: 10px 15px; margin: 5px; border-radius: 6px; font-size: 11px; color: #fff; }
        .flow-start { background: #3498db; }
        .flow-l1 { background: #27ae60; }
        .flow-l2 { background: #f39c12; }
        .flow-l3 { background: #e74c3c; }
        .flow-end { background: #9b59b6; }
        @media print { body { background: #fff; -webkit-print-color-adjust: exact; print-color-adjust: exact; } .page { box-shadow: none; margin: 0; padding: 10mm 15mm; } .section-title.green { background: #27ae60 !important; } .section-title.yellow { background: #f39c12 !important; } .section-title.red { background: #e74c3c !important; } .section-title.purple { background: #9b59b6 !important; } .response-card.l1, .response-card.l2, .response-card.l3 { -webkit-print-color-adjust: exact; print-color-adjust: exact; } .path-step.l1, .path-step.l2, .path-step.l3 { -webkit-print-color-adjust: exact; print-color-adjust: exact; } .level-l1, .level-l2, .level-l3 { -webkit-print-color-adjust: exact; print-color-adjust: exact; } .trigger-card .card-header { -webkit-print-color-adjust: exact; print-color-adjust: exact; } .purpose-box { -webkit-print-color-adjust: exact; print-color-adjust: exact; } .instructor-box { background: #fff9e6 !important; } }
        @page { size: A4; margin: 0; }
    </style>
</head>
<body>
    <div class="page">
        <div class="header">
            <h1>F4：决策触发机制设计表</h1>
            <div class="subtitle">A4单张 | 决策升级路径设计工具</div>
            <div class="meta">人机协同权责边界与决策分级 | 数字化转型核心工具</div>
        </div>
        <div class="purpose-box">
            <h3>目的说明</h3>
            <p>定义AI与人类在决策过程中的触发机制，明确何时应自动处理、何时应升级人工判断、何时应介入管理。确保人机协同决策有清晰的边界和升级路径。</p>
        </div>
        <div class="escalation-path">
            <div class="path-step l1"><div class="label">L1</div><div class="title">自动处理</div><div class="desc">AI独立执行<br/>即时响应</div></div>
            <span class="path-arrow">→</span>
            <div class="path-step l2"><div class="label">L2</div><div class="title">人工决策</div><div class="desc">AI呈现选项<br/>人类做选择</div></div>
            <span class="path-arrow">→</span>
            <div class="path-step l3"><div class="label">L3</div><div class="title">管理介入</div><div class="desc">领导层决策<br/>审批执行</div></div>
        </div>
        <div class="section">
            <div class="section-title">决策分级概述</div>
            <div class="section-content">
                <table>
                    <tr><th>级别</th><th>决策层级</th><th>说明</th><th>响应特点</th></tr>
                    <tr><td><span class="level-l1">L1</span></td><td>自动处理</td><td>AI独立处理，通知人类</td><td>即时响应，自动执行</td></tr>
                    <tr><td><span class="level-l2">L2</span></td><td>人工决策</td><td>AI呈现选项，人类决策</td><td>及时响应，协商执行</td></tr>
                    <tr><td><span class="level-l3">L3</span></td><td>管理介入</td><td>领导层介入决策</td><td>谨慎响应，审批执行</td></tr>
                </table>
            </div>
        </div>
        <div class="section">
            <div class="section-title purple">触发条件分类</div>
            <div class="section-content">
                <div class="trigger-grid">
                    <div class="trigger-card threshold"><div class="card-header">阈值触发 Threshold</div>
                        <div class="item"><span>准确率</span><span>&lt; 85% → L2</span></div>
                        <div class="item"><span>响应时间</span><span>&gt; 30秒 → L1</span></div>
                        <div class="item"><span>错误率</span><span>&gt; 5% → L2</span></div>
                        <div class="item"><span>成本超支</span><span>&gt; 10% → L3</span></div>
                    </div>
                    <div class="trigger-card anomaly"><div class="card-header">异常触发 Anomaly</div>
                        <div class="item"><span>行为异常</span><span>统计检测 → L2</span></div>
                        <div class="item"><span>数据漂移</span><span>分布比较 → L2</span></div>
                        <div class="item"><span>系统错误</span><span>日志分析 → L1/L2</span></div>
                        <div class="item"><span>安全威胁</span><span>规则匹配 → L3</span></div>
                    </div>
                    <div class="trigger-card frequency"><div class="card-header">频率触发 Frequency</div>
                        <div class="item"><span>同一问题重复</span><span>3次/小时 → L2</span></div>
                        <div class="item"><span>相似决策模式</span><span>5次/天 → L2</span></div>
                        <div class="item"><span>连续失败</span><span>2次 → L2</span></div>
                        <div class="item"><span>用户投诉</span><span>1次 → L3</span></div>
                    </div>
                    <div class="trigger-card combined"><div class="card-header">组合触发 Combined</div>
                        <div class="item"><span>低准确率+高频次</span><span>AND → L2</span></div>
                        <div class="item"><span>异常+成本超标</span><span>AND → L3</span></div>
                        <div class="item"><span>阈值超标+新类型</span><span>OR → L2</span></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="section">
            <div class="section-title green">响应时效要求</div>
            <div class="section-content">
                <div class="response-grid">
                    <div class="response-card l1"><h5>L1 自动处理</h5><div class="time">&lt; 1分钟</div><div class="detail">响应时间</div><div style="margin-top:10px;font-size:10px;">通知时间: 5分钟内<br/>记录: 自动存档</div></div>
                    <div class="response-card l2"><h5>L2 人工决策</h5><div class="time">2-4小时</div><div class="detail">确认+决策时间</div><div style="margin-top:10px;font-size:10px;">确认: 2小时内<br/>决策: 4小时内<br/>记录: 需填写理由</div></div>
                    <div class="response-card l3"><h5>L3 管理介入</h5><div class="time">24小时</div><div class="detail">决策完成时间</div><div style="margin-top:10px;font-size:10px;">确认: 30分钟内<br/>会议: 24小时内<br/>记录: 完整审批</div></div>
                </div>
            </div>
        </div>
        <div class="section">
            <div class="section-title">决策升级路径表</div>
            <div class="section-content">
                <table>
                    <tr><th>决策类型</th><th>触发条件</th><th>响应时效</th><th>升级路径</th><th>负责人</th></tr>
                    <tr><td>内容生成审核</td><td>AI生成内容 | 准确率≥90%</td><td>即时</td><td><span class="level-l1">L1</span>→<span class="level-l2">L2</span>→<span class="level-l3">L3</span></td><td>内容专员</td></tr>
                    <tr><td>数据分析确认</td><td>报告数据 | 置信度≥85%</td><td>2小时内</td><td><span class="level-l1">L1</span>→<span class="level-l2">L2</span>→<span class="level-l3">L3</span></td><td>数据分析师</td></tr>
                    <tr><td>风险评估</td><td>高风险场景 | 风险值>70</td><td>30分钟内</td><td><span class="level-l2">L2</span>→<span class="level-l3">L3</span></td><td>风险经理</td></tr>
                    <tr><td>资源调配</td><td>资源不足 | 超负荷>20%</td><td>1小时内</td><td><span class="level-l2">L2</span>→<span class="level-l3">L3</span></td><td>运营主管</td></tr>
                    <tr><td>异常处理</td><td>系统异常 | 影响>10用户</td><td>即时</td><td><span class="level-l1">L1</span>→<span class="level-l2">L2</span>→<span class="level-l3">L3</span></td><td>运维工程师</td></tr>
                    <tr><td>重复投诉</td><td>同一问题 | 3次</td><td>即时</td><td><span class="level-l2">L2</span>→<span class="level-l3">L3</span></td><td>客服经理</td></tr>
                    <tr><td>成本审批</td><td>超预算 | >5%</td><td>24小时内</td><td><span class="level-l2">L2</span>→<span class="level-l3">L3</span></td><td>财务总监</td></tr>
                    <tr><td>新业务决策</td><td>从未见过 | 无参考</td><td>即时</td><td><span class="level-l3">L3</span></td><td>高管团队</td></tr>
                </table>
            </div>
        </div>
        <div class="section">
            <div class="section-title yellow">升级流程图</div>
            <div class="section-content">
                <div class="flow-diagram">
                    <div style="margin:10px 0;"><span class="flow-box flow-start">触发事件发生</span></div>
                    <div style="margin:10px 0;">↓</div>
                    <div style="margin:10px 0;"><span class="flow-box" style="background:#3498db;">条件评估<br/><small>阈值/异常/频率</small></span></div>
                    <div style="margin:10px 0;">↓</div>
                    <div style="margin:10px 0;"><span class="flow-box flow-l1">L1 自动处理</span> <span style="color:#7f8c8d;">|</span> <span class="flow-box flow-l2">L2 人工决策</span> <span style="color:#7f8c8d;">|</span> <span class="flow-box flow-l3">L3 管理介入</span></div>
                    <div style="margin:10px 0;">↓</div>
                    <div style="margin:10px 0;"><span class="flow-box flow-end">记录并闭环</span></div>
                </div>
            </div>
        </div>
        <div class="section">
            <div class="section-title red">讲师操作指引</div>
            <div class="section-content">
                <div class="instructor-box">
                    <h4>使用场景</h4>
                    <ul>
                        <li><strong>课前准备:</strong> 打印本表作为教学辅助</li>
                        <li><strong>课堂讲解:</strong> 用流程图说明升级机制</li>
                        <li><strong>案例讨论:</strong> 用表格分析真实业务场景</li>
                        <li><strong>实操演练:</strong> 模拟触发场景进行演练</li>
                    </ul>
                    <div class="quote">"升级不是推卸责任，而是让最合适的人做最合适的决定"</div>
                    <h4 style="margin-top:15px;">讲解要点</h4>
                    <ul>
                        <li>强调"触发条件"的核心作用——不是时间驱动，是条件驱动</li>
                        <li>说明三级响应的区别：即时响应 vs 及时响应 vs 谨慎响应</li>
                        <li>举例：某电商平台的AI客服升级机制</li>
                        <li>互动：让学员为自己业务场景设计触发条件</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="footer">F4-v1.0 | 决策触发机制设计表 | 适用于人机协同决策培训 | 可直接打印 (Ctrl+P)</div>
    </div>
</body>
</html>"""

path = "D:/新课开发/数字化转型/2.人机协同权责边界与决策分级：从44%分工到18%系统重构的补课/全流程工具表单/F4_决策触发机制设计表.html"
with open(path, "w", encoding="utf-8") as f:
    f.write(html_content)
print("HTML file created successfully")
