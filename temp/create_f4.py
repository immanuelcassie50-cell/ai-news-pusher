import os

html = '''<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>F4 尽调准备清单</title>
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
            font-size: 8pt;
            line-height: 1.4;
            padding: 18mm;
        }
        @page { size: A4; margin: 0; }
        @media print { body { padding: 10mm; } }
        .header {
            background: var(--header-bg);
            color: white;
            padding: 10pt 14pt;
            margin: -18mm -18mm 12pt -18mm;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .header h1 { font-size: 13pt; font-weight: 700; }
        .header .tag { background: var(--accent); padding: 2pt 8pt; font-size: 7pt; font-family: 'Inter Tight', sans-serif; }
        .meta {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 6pt;
            margin-bottom: 10pt;
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
            font-size: 9pt;
            font-weight: 700;
            margin: 10pt 0 5pt 0;
            padding-bottom: 3pt;
            border-bottom: 2pt solid var(--accent);
        }
        h3 {
            color: var(--text);
            font-size: 8pt;
            font-weight: 600;
            margin: 6pt 0 4pt 0;
        }
        .section-box {
            background: white;
            border-radius: 4pt;
            padding: 7pt;
            margin-bottom: 7pt;
            box-shadow: 0 1pt 2pt rgba(0,0,0,0.08);
        }
        table {
            width: 100%;
            border-collapse: collapse;
            font-size: 6.5pt;
            margin-bottom: 5pt;
        }
        th {
            background: var(--header-bg);
            color: white;
            padding: 3pt 4pt;
            text-align: left;
            font-family: 'Inter Tight', sans-serif;
            font-weight: 600;
            font-size: 6pt;
            text-transform: uppercase;
        }
        td { padding: 3pt 4pt; border-bottom: 0.5pt solid #e0e0e0; vertical-align: middle; }
        tr:nth-child(even) td { background: #fafafa; }
        input[type="text"] {
            width: 100%;
            border: none;
            border-bottom: 0.5pt dashed var(--aux);
            background: transparent;
            font-family: inherit;
            font-size: 6pt;
            padding: 1pt 0;
        }
        input:focus { outline: none; border-bottom-color: var(--accent); }
        .checkbox { width: 10pt; height: 10pt; accent-color: var(--accent); }
        .schedule-row td { font-weight: 600; background: #f0f4f8 !important; }
        .footer {
            margin-top: 10pt;
            padding-top: 6pt;
            border-top: 1pt solid var(--aux);
            display: flex;
            justify-content: space-between;
            font-size: 6pt;
            color: var(--aux);
            font-family: 'Inter Tight', sans-serif;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>F4 尽调准备清单</h1>
        <span class="tag">A4 · 尽调应对指南</span>
    </div>

    <div class="meta">
        <div class="meta-item">
            <span class="meta-label">管线名称</span>
            <div class="meta-value">________________</div>
        </div>
        <div class="meta-item">
            <span class="meta-label">合作方</span>
            <div class="meta-value">________________</div>
        </div>
        <div class="meta-item">
            <span class="meta-label">计划尽调日期</span>
            <div class="meta-value">________________</div>
        </div>
    </div>

    <h2>技术尽调清单 — 药效与临床数据</h2>
    <div class="section-box">
        <table>
            <thead>
                <tr><th>材料名称</th><th>状态</th><th>责任方</th><th>截止日期</th></tr>
            </thead>
            <tbody>
                <tr><td>作用机制（MOA）研究报告</td><td><input type="checkbox" class="checkbox"> 已 <input type="checkbox" class="checkbox"> 待</td><td><input type="text"></td><td><input type="text"></td></tr>
                <tr><td>临床前药效数据汇总</td><td><input type="checkbox" class="checkbox"> 已 <input type="checkbox" class="checkbox"> 待</td><td><input type="text"></td><td><input type="text"></td></tr>
                <tr><td>Phase I安全性与耐受性数据</td><td><input type="checkbox" class="checkbox"> 已 <input type="checkbox" class="checkbox"> 待</td><td><input type="text"></td><td><input type="text"></td></tr>
                <tr><td>Phase II有效性数据（若有）</td><td><input type="checkbox" class="checkbox"> 已 <input type="checkbox" class="checkbox"> 待</td><td><input type="text"></td><td><input type="text"></td></tr>
                <tr><td>临床生物标志物数据</td><td><input type="checkbox" class="checkbox"> 已 <input type="checkbox" class="checkbox"> 待</td><td><input type="text"></td><td><input type="text"></td></tr>
                <tr><td>患者亚组分析数据</td><td><input type="checkbox" class="checkbox"> 已 <input type="checkbox" class="checkbox"> 待</td><td><input type="text"></td><td><input type="text"></td></tr>
                <tr><td>长期随访数据（安全性）</td><td><input type="checkbox" class="checkbox"> 已 <input type="checkbox" class="checkbox"> 待</td><td><input type="text"></td><td><input type="text"></td></tr>
                <tr><td>药物相互作用数据</td><td><input type="checkbox" class="checkbox"> 已 <input type="checkbox" class="checkbox"> 待</td><td><input type="text"></td><td><input type="text"></td></tr>
            </tbody>
        </table>
    </div>

    <h2>技术尽调清单 — 安全性评估</h2>
    <div class="section-box">
        <table>
            <thead>
                <tr><th>材料名称</th><th>状态</th><th>责任方</th><th>截止日期</th></tr>
            </thead>
            <tbody>
                <tr><td>毒理学研究完整报告</td><td><input type="checkbox" class="checkbox"> 已 <input type="checkbox" class="checkbox"> 待</td><td><input type="text"></td><td><input type="text"></td></tr>
                <tr><td>SAE（严重不良事件）汇总</td><td><input type="checkbox" class="checkbox"> 已 <input type="checkbox" class="checkbox"> 待</td><td><input type="text"></td><td><input type="text"></td></tr>
                <tr><td>中毒剂量（NOAEL/LOAEL）数据</td><td><input type="checkbox" class="checkbox"> 已 <input type="checkbox" class="checkbox"> 待</td><td><input type="text"></td><td><input type="text"></td></tr>
                <tr><td>特殊人群（肝/肾损伤）数据</td><td><input type="checkbox" class="checkbox"> 已 <input type="checkbox" class="checkbox"> 待</td><td><input type="text"></td><td><input type="text"></td></tr>
                <tr><td>妊娠/哺乳期使用数据</td><td><input type="checkbox" class="checkbox"> 已 <input type="checkbox" class="checkbox"> 待</td><td><input type="text"></td><td><input type="text"></td></tr>
            </tbody>
        </table>
    </div>

    <h2>技术尽调清单 — CMC</h2>
    <div class="section-box">
        <table>
            <thead>
                <tr><th>材料名称</th><th>状态</th><th>责任方</th><th>截止日期</th></tr>
            </thead>
            <tbody>
                <tr><td>原料药生产工艺描述</td><td><input type="checkbox" class="checkbox"> 已 <input type="checkbox" class="checkbox"> 待</td><td><input type="text"></td><td><input type="text"></td></tr>
                <tr><td>制剂处方及工艺资料</td><td><input type="checkbox" class="checkbox"> 已 <input type="checkbox" class="checkbox"> 待</td><td><input type="text"></td><td><input type="text"></td></tr>
                <tr><td>质量标准及检验方法</td><td><input type="checkbox" class="checkbox"> 已 <input type="checkbox" class="checkbox"> 待</td><td><input type="text"></td><td><input type="text"></td></tr>
                <tr><td>稳定性数据（支持临床进度）</td><td><input type="checkbox" class="checkbox"> 已 <input type="checkbox" class="checkbox"> 待</td><td><input type="text"></td><td><input type="text"></td></tr>
                <tr><td>GMP合规证明</td><td><input type="checkbox" class="checkbox"> 已 <input type="checkbox" class="checkbox"> 待</td><td><input type="text"></td><td><input type="text"></td></tr>
                <tr><td>供应商资质审计报告</td><td><input type="checkbox" class="checkbox"> 已 <input type="checkbox" class="checkbox"> 待</td><td><input type="text"></td><td><input type="text"></td></tr>
            </tbody>
        </table>
    </div>

    <h2>商业尽调清单</h2>
    <div class="section-box">
        <h3>市场与竞争</h3>
        <table>
            <thead>
                <tr><th>材料名称</th><th>状态</th><th>责任方</th><th>截止日期</th></tr>
            </thead>
            <tbody>
                <tr><td>市场调研报告（适应症领域）</td><td><input type="checkbox" class="checkbox"> 已 <input type="checkbox" class="checkbox"> 待</td><td><input type="text"></td><td><input type="text"></td></tr>
                <tr><td>竞争格局分析报告</td><td><input type="checkbox" class="checkbox"> 已 <input type="checkbox" class="checkbox"> 待</td><td><input type="text"></td><td><input type="text"></td></tr>
                <tr><td>目标患者群体分析</td><td><input type="checkbox" class="checkbox"> 已 <input type="checkbox" class="checkbox"> 待</td><td><input type="text"></td><td><input type="text"></td></tr>
                <tr><td>定价与准入策略</td><td><input type="checkbox" class="checkbox"> 已 <input type="checkbox" class="checkbox"> 待</td><td><input type="text"></td><td><input type="text"></td></tr>
                <tr><td>医保目录进入策略</td><td><input type="checkbox" class="checkbox"> 已 <input type="checkbox" class="checkbox"> 待</td><td><input type="text"></td><td><input type="text"></td></tr>
                <tr><td>医生调研/市场声音</td><td><input type="checkbox" class="checkbox"> 已 <input type="checkbox" class="checkbox"> 待</td><td><input type="text"></td><td><input type="text"></td></tr>
            </tbody>
        </table>
        <h3 style="margin-top:8pt;">商业化规划</h3>
        <table>
            <thead>
                <tr><th>材料名称</th><th>状态</th><th>责任方</th><th>截止日期</th></tr>
            </thead>
            <tbody>
                <tr><td>商业化初步方案</td><td><input type="checkbox" class="checkbox"> 已 <input type="checkbox" class="checkbox"> 待</td><td><input type="text"></td><td><input type="text"></td></tr>
                <tr><td>销售团队能力评估</td><td><input type="checkbox" class="checkbox"> 已 <input type="checkbox" class="checkbox"> 待</td><td><input type="text"></td><td><input type="text"></td></tr>
                <tr><td>生产能力评估报告</td><td><input type="checkbox" class="checkbox"> 已 <input type="checkbox" class="checkbox"> 待</td><td><input type="text"></td><td><input type="text"></td></tr>
                <tr><td>供应链可靠性分析</td><td><input type="checkbox" class="checkbox"> 已 <input type="checkbox" class="checkbox"> 待</td><td><input type="text"></td><td><input type="text"></td></tr>
            </tbody>
        </table>
    </div>

    <h2>法律与IP尽调清单</h2>
    <div class="section-box">
        <h3>知识产权</h3>
        <table>
            <thead>
                <tr><th>材料名称</th><th>状态</th><th>责任方</th><th>截止日期</th></tr>
            </thead>
            <tbody>
                <tr><td>专利清单（全家族）</td><td><input type="checkbox" class="checkbox"> 已 <input type="checkbox" class="checkbox"> 待</td><td><input type="text"></td><td><input type="text"></td></tr>
                <tr><td>专利证书复印件</td><td><input type="checkbox" class="checkbox"> 已 <input type="checkbox" class="checkbox"> 待</td><td><input type="text"></td><td><input type="text"></td></tr>
                <tr><td>专利审查历史</td><td><input type="checkbox" class="checkbox"> 已 <input type="checkbox" class="checkbox"> 待</td><td><input type="text"></td><td><input type="text"></td></tr>
                <tr><td>专利保护范围分析</td><td><input type="checkbox" class="checkbox"> 已 <input type="checkbox" class="checkbox"> 待</td><td><input type="text"></td><td><input type="text"></td></tr>
                <tr><td>技术秘密清单及保护措施</td><td><input type="checkbox" class="checkbox"> 已 <input type="checkbox" class="checkbox"> 待</td><td><input type="text"></td><td><input type="text"></td></tr>
                <tr><td>Freedom to Operate分析</td><td><input type="checkbox" class="checkbox"> 已 <input type="checkbox" class="checkbox"> 待</td><td><input type="text"></td><td><input type="text"></td></tr>
                <tr><td>侵权风险评估</td><td><input type="checkbox" class="checkbox"> 已 <input type="checkbox" class="checkbox"> 待</td><td><input type="text"></td><td><input type="text"></td></tr>
            </tbody>
        </table>
        <h3 style="margin-top:8pt;">法律合规</h3>
        <table>
            <thead>
                <tr><th>材料名称</th><th>状态</th><th>责任方</th><th>截止日期</th></tr>
            </thead>
            <tbody>
                <tr><td>公司注册文件</td><td><input type="checkbox" class="checkbox"> 已 <input type="checkbox" class="checkbox"> 待</td><td><input type="text"></td><td><input type="text"></td></tr>
                <tr><td>股权结构图</td><td><input type="checkbox" class="checkbox"> 已 <input type="checkbox" class="checkbox"> 待</td><td><input type="text"></td><td><input type="text"></td></tr>
                <tr><td>历史融资法律文件</td><td><input type="checkbox" class="checkbox"> 已 <input type="checkbox" class="checkbox"> 待</td><td><input type="text"></td><td><input type="text"></td></tr>
                <tr><td>关联交易披露</td><td><input type="checkbox" class="checkbox"> 已 <input type="checkbox" class="checkbox"> 待</td><td><input type="text"></td><td><input type="text"></td></tr>
                <tr><td>重大合同清单</td><td><input type="checkbox" class="checkbox"> 已 <input type="checkbox" class="checkbox"> 待</td><td><input type="text"></td><td><input type="text"></td></tr>
                <tr><td>诉讼/仲裁记录</td><td><input type="checkbox" class="checkbox"> 已 <input type="checkbox" class="checkbox"> 待</td><td><input type="text"></td><td><input type="text"></td></tr>
                <tr><td>监管处罚记录</td><td><input type="checkbox" class="checkbox"> 已 <input type="checkbox" class="checkbox"> 待</td><td><input type="text"></td><td><input type="text"></td></tr>
            </tbody>
        </table>
    </div>

    <h2>材料准备时间表</h2>
    <div class="section-box">
        <table>
            <thead>
                <tr><th>阶段</th><th>时间节点</th><th>负责人</th><th>交付物</th><th>状态</th></tr>
            </thead>
            <tbody>
                <tr class="schedule-row"><td colspan="5">第一周</td></tr>
                <tr><td></td><td>Day 1-2</td><td><input type="text"></td><td>尽调材料清单确认</td><td><input type="checkbox" class="checkbox"></td></tr>
                <tr><td></td><td>Day 3-5</td><td><input type="text"></td><td>内部材料收集</td><td><input type="checkbox" class="checkbox"></td></tr>
                <tr class="schedule-row"><td colspan="5">第二周</td></tr>
                <tr><td></td><td>Day 6-8</td><td><input type="text"></td><td>材料整理与分类</td><td><input type="checkbox" class="checkbox"></td></tr>
                <tr><td></td><td>Day 9-10</td><td><input type="text"></td><td>法律合规审查</td><td><input type="checkbox" class="checkbox"></td></tr>
                <tr class="schedule-row"><td colspan="5">第三周</td></tr>
                <tr><td></td><td>Day 11-13</td><td><input type="text"></td><td>数据房间（Data Room）准备</td><td><input type="checkbox" class="checkbox"></td></tr>
                <tr><td></td><td>Day 14</td><td><input type="text"></td><td>预演尽调会议</td><td><input type="checkbox" class="checkbox"></td></tr>
                <tr class="schedule-row"><td colspan="5">第四周</td></tr>
                <tr><td></td><td>Day 15-20</td><td><input type="text"></td><td>尽调会议进行</td><td><input type="checkbox" class="checkbox"></td></tr>
                <tr><td></td><td>Day 21</td><td><input type="text"></td><td>补充材料准备</td><td><input type="checkbox" class="checkbox"></td></tr>
            </tbody>
        </table>
    </div>

    <h2>尽调会议准备</h2>
    <div class="section-box">
        <table>
            <thead>
                <tr><th>角色</th><th>姓名</th><th>职责</th><th>联系方式</th></tr>
            </thead>
            <tbody>
                <tr><td>总协调人</td><td><input type="text"></td><td><input type="text"></td><td><input type="text"></td></tr>
                <tr><td>技术讲解人</td><td><input type="text"></td><td><input type="text"></td><td><input type="text"></td></tr>
                <tr><td>临床数据讲解人</td><td><input type="text"></td><td><input type="text"></td><td><input type="text"></td></tr>
                <tr><td>商务/BD负责人</td><td><input type="text"></td><td><input type="text"></td><td><input type="text"></td></tr>
                <tr><td>法务/IP负责人</td><td><input type="text"></td><td><input type="text"></td><td><input type="text"></td></tr>
            </tbody>
        </table>
        <div style="margin-top:6pt;">
            <label style="font-size:6pt; color:var(--aux); font-family:'Inter Tight',sans-serif;">预准备的问题清单</label>
            <div style="display:grid; grid-template-columns: 1fr 1fr; gap:3pt; margin-top:3pt;">
                <input type="text" placeholder="高频问题1：" style="font-size:6pt;">
                <input type="text" placeholder="高频问题2：" style="font-size:6pt;">
                <input type="text" placeholder="高频问题3：" style="font-size:6pt;">
                <input type="text" placeholder="高频问题4：" style="font-size:6pt;">
            </div>
        </div>
    </div>

    <div class="footer">
        <span>填表人：________________</span>
        <span>日期：________________</span>
        <span>版本：v1.0</span>
    </div>
</body>
</html>'''

with open("D:/新课开发/大健康/03 创新药出海与国际化BD/全流程工具表单/F4_尽调准备清单.html", "w", encoding="utf-8") as f:
    f.write(html)
print("F4 created successfully")
