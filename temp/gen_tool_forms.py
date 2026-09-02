# -*- coding: utf-8 -*-
"""Generate HTML versions of T1-T6 tool forms"""

import os

OUTPUT_DIR = r"D:\新课开发\行动学习2026\02-对事-教程\完整课程包\全流程工具表单\html"
os.makedirs(OUTPUT_DIR, exist_ok=True)

RED = "#B8351C"
DARK = "#1F1B16"
INDIGO = "#1F3864"

def get_html_header(title):
    return f"""<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{title}</title>
<style>
* {{ margin: 0; padding: 0; box-sizing: border-box; }}
body {{ font-family: 'Microsoft YaHei', 'PingFang SC', sans-serif; background: #f5f5f5; color: {DARK}; font-size: 14px; line-height: 1.6; }}
.header {{ background: linear-gradient(135deg, {INDIGO}, #2a4a7f); color: white; padding: 24px 32px; }}
.header h1 {{ font-size: 22px; font-weight: 600; margin-bottom: 4px; }}
.header .subtitle {{ font-size: 13px; opacity: 0.85; }}
.tool-meta {{ display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; padding: 20px 32px; background: white; border-bottom: 1px solid #e0e0e0; }}
.meta-item {{ display: flex; flex-direction: column; gap: 2px; }}
.meta-label {{ font-size: 11px; color: #888; text-transform: uppercase; letter-spacing: 0.5px; }}
.meta-value {{ font-size: 14px; color: {DARK}; }}
.meta-value input {{ border: none; border-bottom: 1px solid #ccc; width: 100%; padding: 4px 0; font-size: 14px; outline: none; }}
.meta-value input:focus {{ border-bottom-color: {RED}; }}
.content {{ padding: 24px 32px; }}
.section {{ background: white; border-radius: 8px; padding: 20px; margin-bottom: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.08); }}
.section-title {{ font-size: 15px; font-weight: 600; color: {INDIGO}; margin-bottom: 16px; padding-bottom: 8px; border-bottom: 2px solid {RED}; display: inline-block; }}
table {{ width: 100%; border-collapse: collapse; margin-bottom: 16px; }}
th, td {{ border: 1px solid #ddd; padding: 10px 12px; text-align: left; font-size: 13px; }}
th {{ background: {INDIGO}; color: white; font-weight: 500; }}
tr:nth-child(even) {{ background: #f9f9f9; }}
tr:hover {{ background: #f0f4ff; }}
td input, td textarea {{ width: 100%; border: none; background: transparent; font-size: 13px; outline: none; font-family: inherit; resize: none; }}
td input:focus, td textarea:focus {{ background: #fff8e1; }}
.badge {{ display: inline-block; padding: 2px 8px; border-radius: 4px; font-size: 11px; font-weight: 500; }}
.badge-red {{ background: #ffebee; color: {RED}; }}
.badge-blue {{ background: #e3f2fd; color: {INDIGO}; }}
.badge-green {{ background: #e8f5e9; color: #2e7d32; }}
.footer {{ text-align: center; padding: 20px; color: #888; font-size: 12px; }}
.print-btn {{ position: fixed; bottom: 24px; right: 24px; background: {RED}; color: white; border: none; padding: 12px 20px; border-radius: 8px; cursor: pointer; font-size: 14px; box-shadow: 0 4px 12px rgba(184,53,28,0.3); }}
.print-btn:hover {{ background: #a02a14; }}
@media print {{ .print-btn {{ display: none; }} body {{ background: white; }} .section {{ box-shadow: none; border: 1px solid #ddd; }} }}
</style>
</head>
<body>
"""

def get_html_footer():
    return """
<div class="footer">
<p>© 罗宏伟 · 信息分析与突破口识别 · 行动学习课程工具</p>
</div>
<button class="print-btn" onclick="window.print()">🖨️ 打印表单</button>
</body>
</html>
"""

def generate_t1():
    content = get_html_header("T1 | 体检清单工具") + """
<div class="header">
<h1>体检清单工具</h1>
<div class="subtitle">系统扫描影响目标的所有相关因素 · 先穷举，后判断</div>
</div>

<div class="tool-meta">
<div class="meta-item"><span class="meta-label">项目名称</span><div class="meta-value"><input type="text" placeholder="填写项目名称"></div></div>
<div class="meta-item"><span class="meta-label">核心目标</span><div class="meta-value"><input type="text" placeholder="填写可测量的目标"></div></div>
<div class="meta-item"><span class="meta-label">填写日期</span><div class="meta-value"><input type="text" placeholder="YYYY-MM-DD"></div></div>
<div class="meta-item"><span class="meta-label">填写人</span><div class="meta-value"><input type="text" placeholder="你的姓名"></div></div>
</div>

<div class="content">
<div class="section">
<div class="section-title">使用说明</div>
<p style="color: #666; font-size: 13px; margin-bottom: 12px;">体检清单的目标是：穷举式地列出所有可能影响目标达成的因素。<strong>不加评价，不做排序，只管覆盖。</strong>评价和排序是后面四维分析的环节。</p>
<p style="color: #666; font-size: 13px; margin-bottom: 8px;"><strong>格式要求：</strong>名词短语，不加评价。不是"培训质量差"，而是"关键岗位培训覆盖率"。</p>
<p style="color: #666; font-size: 13px;"><strong>维度覆盖：</strong>从以下7个维度系统扫描，不要只停留在你最容易想到的方向。</p>
</div>

<div class="section">
<div class="section-title">体检清单（7维扫描）</div>
<table>
<tr><th style="width:120px;">维度</th><th>具体因素条目（名词短语，不加评价）</th><th style="width:80px;">备注</th></tr>
<tr><td><span class="badge badge-blue">资源维度</span></td>
<td><textarea rows="3" placeholder="人力配置、设备状态、预算充足度、时间资源..."></textarea></td>
<td></td></tr>
<tr><td><span class="badge badge-blue">流程维度</span></td>
<td><textarea rows="3" placeholder="核心操作流程、跨部门协同流程、异常处理流程..."></textarea></td>
<td></td></tr>
<tr><td><span class="badge badge-blue">能力维度</span></td>
<td><textarea rows="3" placeholder="团队技能水平、知识掌握程度、工具使用能力..."></textarea></td>
<td></td></tr>
<tr><td><span class="badge badge-blue">系统与工具维度</span></td>
<td><textarea rows="3" placeholder="支撑系统稳定性、工具适配性、数据准确性..."></textarea></td>
<td></td></tr>
<tr><td><span class="badge badge-blue">管理机制维度</span></td>
<td><textarea rows="3" placeholder="考核指标设计、激励机制、信息传递与反馈机制..."></textarea></td>
<td></td></tr>
<tr><td><span class="badge badge-blue">外部条件维度</span></td>
<td><textarea rows="3" placeholder="政策法规约束、客户或用户行为模式、供应商因素..."></textarea></td>
<td></td></tr>
<tr><td><span class="badge badge-blue">历史遗留维度</span></td>
<td><textarea rows="3" placeholder="历史问题积累、以往的改善尝试及结果、路径依赖..."></textarea></td>
<td></td></tr>
</table>
</div>

<div class="section">
<div class="section-title">自我检查</div>
<table>
<tr><th style="width:200px;">检查问题</th><th>回答</th></tr>
<tr><td>有没有只有你自己视角能看到的因素？（别人可能看不到）</td><td><input type="text" placeholder="是/否 + 具体说明"></td></tr>
<tr><td>有没有指向人或部门的因素？（而不是系统性因素）</td><td><input type="text" placeholder="是/否 + 具体说明"></td></tr>
<tr><td>有没有最近发生、最显眼、最烦人的因素？（可能是可及性偏误）</td><td><input type="text" placeholder="是/否 + 具体说明"></td></tr>
</table>
</div>
</div>
""" + get_html_footer()

    with open(os.path.join(OUTPUT_DIR, "T1_体检清单工具.html"), "w", encoding="utf-8") as f:
        f.write(content)
    print("Generated T1_体检清单工具.html")

def generate_t2():
    content = get_html_header("T2 | 四维分析表") + """
<div class="header">
<h1>四维分析表</h1>
<div class="subtitle">系统性判断每个关键因素的影响与可动性 · 影响大 + 可动 = 突破口候选</div>
</div>

<div class="tool-meta">
<div class="meta-item"><span class="meta-label">项目名称</span><div class="meta-value"><input type="text" placeholder="填写项目名称"></div></div>
<div class="meta-item"><span class="meta-label">核心目标</span><div class="meta-value"><input type="text" placeholder="填写可测量的目标"></div></div>
<div class="meta-item"><span class="meta-label">填写日期</span><div class="meta-value"><input type="text" placeholder="YYYY-MM-DD"></div></div>
<div class="meta-item"><span class="meta-label">填写人</span><div class="meta-value"><input type="text" placeholder="你的姓名"></div></div>
</div>

<div class="content">
<div class="section">
<div class="section-title">四维分析说明</div>
<table>
<tr><th style="width:140px;">维度</th><th>判断标准</th><th>评级选项</th></tr>
<tr><td><span class="badge badge-red">影响大小</span></td>
<td>这个因素对目标的影响有多显著？</td>
<td>高 / 中 / 低</td></tr>
<tr><td><span class="badge badge-red">影响范围</span></td>
<td>这个因素的影响是局部还是系统性的？</td>
<td>全局性 / 局部性</td></tr>
<tr><td><span class="badge badge-red">可动性</span></td>
<td>这个因素，实际上能被推动改善吗？</td>
<td>直接可动 / 间接可动 / 当前不可动</td></tr>
<tr><td><span class="badge badge-red">突破可能性</span></td>
<td>在可动的前提下，能推动到什么程度？</td>
<td>高 / 中 / 低</td></tr>
</table>
</div>

<div class="section">
<div class="section-title">四维分析表</div>
<table>
<tr>
<th>因素名称</th>
<th style="width:90px;">影响大小</th>
<th style="width:90px;">影响范围</th>
<th style="width:110px;">可动性</th>
<th style="width:110px;">突破可能性</th>
<th>判断依据（来自调研/事实）</th>
</tr>
<tr>
<td><input type="text" placeholder="从体检清单选取关键因素"></td>
<td><select style="width:100%;border:none;background:transparent;"><option value="">请选择</option><option>高</option><option>中</option><option>低</option></select></td>
<td><select style="width:100%;border:none;background:transparent;"><option value="">请选择</option><option>全局性</option><option>局部性</option></select></td>
<td><select style="width:100%;border:none;background:transparent;"><option value="">请选择</option><option>直接可动</option><option>间接可动</option><option>当前不可动</option></select></td>
<td><select style="width:100%;border:none;background:transparent;"><option value="">请选择</option><option>高</option><option>中</option><option>低</option></select></td>
<td><textarea rows="2" placeholder="判断依据..."></textarea></td>
</tr>
<tr><td><input type="text"></td><td><select style="width:100%;border:none;background:transparent;"><option value="">请选择</option><option>高</option><option>中</option><option>低</option></select></td><td><select style="width:100%;border:none;background:transparent;"><option value="">请选择</option><option>全局性</option><option>局部性</option></select></td><td><select style="width:100%;border:none;background:transparent;"><option value="">请选择</option><option>直接可动</option><option>间接可动</option><option>当前不可动</option></select></td><td><select style="width:100%;border:none;background:transparent;"><option value="">请选择</option><option>高</option><option>中</option><option>低</option></select></td><td><textarea rows="2"></textarea></td></tr>
<tr><td><input type="text"></td><td><select style="width:100%;border:none;background:transparent;"><option value="">请选择</option><option>高</option><option>中</option><option>低</option></select></td><td><select style="width:100%;border:none;background:transparent;"><option value="">请选择</option><option>全局性</option><option>局部性</option></select></td><td><select style="width:100%;border:none;background:transparent;"><option value="">请选择</option><option>直接可动</option><option>间接可动</option><option>当前不可动</option></select></td><td><select style="width:100%;border:none;background:transparent;"><option value="">请选择</option><option>高</option><option>中</option><option>低</option></select></td><td><textarea rows="2"></textarea></td></tr>
<tr><td><input type="text"></td><td><select style="width:100%;border:none;background:transparent;"><option value="">请选择</option><option>高</option><option>中</option><option>低</option></select></td><td><select style="width:100%;border:none;background:transparent;"><option value="">请选择</option><option>全局性</option><option>局部性</option></select></td><td><select style="width:100%;border:none;background:transparent;"><option value="">请选择</option><option>直接可动</option><option>间接可动</option><option>当前不可动</option></select></td><td><select style="width:100%;border:none;background:transparent;"><option value="">请选择</option><option>高</option><option>中</option><option>低</option></select></td><td><textarea rows="2"></textarea></td></tr>
<tr><td><input type="text"></td><td><select style="width:100%;border:none;background:transparent;"><option value="">请选择</option><option>高</option><option>中</option><option>低</option></select></td><td><select style="width:100%;border:none;background:transparent;"><option value="">请选择</option><option>全局性</option><option>局部性</option></select></td><td><select style="width:100%;border:none;background:transparent;"><option value="">请选择</option><option>直接可动</option><option>间接可动</option><option>当前不可动</option></select></td><td><select style="width:100%;border:none;background:transparent;"><option value="">请选择</option><option>高</option><option>中</option><option>低</option></select></td><td><textarea rows="2"></textarea></td></tr>
</table>
</div>

<div class="section">
<div class="section-title">可动性陷阱检查</div>
<table>
<tr><th>陷阱描述</th><th>自我检查</th></tr>
<tr><td>把"应该可动"当成"实际可动"了</td><td><input type="text" placeholder="有/无 + 说明"></td></tr>
<tr><td>只考虑自己能做什么，忘了需要其他人配合</td><td><input type="text" placeholder="有/无 + 说明"></td></tr>
<tr><td>可动性判断基于假设而非事实</td><td><input type="text" placeholder="有/无 + 说明"></td></tr>
</table>
</div>
</div>
""" + get_html_footer()

    with open(os.path.join(OUTPUT_DIR, "T2_四维分析表.html"), "w", encoding="utf-8") as f:
        f.write(content)
    print("Generated T2_四维分析表.html")

def generate_t3():
    content = get_html_header("T3 | 突破口识别矩阵") + """
<div class="header">
<h1>突破口识别矩阵</h1>
<div class="subtitle">快速定位优先突破口 · 影响大 + 可动 = 优先突破</div>
</div>

<div class="tool-meta">
<div class="meta-item"><span class="meta-label">项目名称</span><div class="meta-value"><input type="text" placeholder="填写项目名称"></div></div>
<div class="meta-item"><span class="meta-label">核心目标</span><div class="meta-value"><input type="text" placeholder="填写可测量的目标"></div></div>
<div class="meta-item"><span class="meta-label">填写日期</span><div class="meta-value"><input type="text" placeholder="YYYY-MM-DD"></div></div>
<div class="meta-item"><span class="meta-label">填写人</span><div class="meta-value"><input type="text" placeholder="你的姓名"></div></div>
</div>

<div class="content">
<div class="section">
<div class="section-title">突破口三条件</div>
<table>
<tr><th style="width:30px;"></th><th>条件说明</th><th>自我评估</th></tr>
<tr><td><span class="badge badge-red">1</span></td><td><strong>影响显著</strong>：改善之后，目标指标有可感知的变化</td><td><input type="text" placeholder="满足/待验证"></td></tr>
<tr><td><span class="badge badge-red">2</span></td><td><strong>有实际撬动可能</strong>：在当前资源、权限、时机条件下可以实质性推动</td><td><input type="text" placeholder="满足/待验证"></td></tr>
<tr><td><span class="badge badge-red">3</span></td><td><strong>项目周期内可见效</strong>：不是三年后才见效</td><td><input type="text" placeholder="满足/待验证"></td></tr>
</table>
</div>

<div class="section">
<div class="section-title">优先级矩阵</div>
<table>
<tr><th></th><th style="background:#c62828;">高影响</th><th style="background:#ef6c00;">中影响</th><th style="background:#2e7d32;">低影响</th></tr>
<tr><td style="background:#1565c0; color:white; font-weight:600;">直接可动</td>
<td style="background:#ffebee;"><strong>★ 优先突破口</strong><br><input type="text" placeholder="因素名"></td>
<td style="background:#fff3e0;"><strong>次优先</strong><br><input type="text" placeholder="因素名"></td>
<td style="background:#e8f5e9;"><strong>暂缓</strong><br><input type="text" placeholder="因素名"></td></tr>
<tr><td style="background:#1565c0; color:white; font-weight:600;">间接可动</td>
<td style="background:#ffebee;"><strong>★ 优先突破口</strong><br><input type="text" placeholder="因素名"></td>
<td style="background:#fff3e0;"><strong>次优先</strong><br><input type="text" placeholder="因素名"></td>
<td style="background:#e8f5e9;"><strong>暂缓</strong><br><input type="text" placeholder="因素名"></td></tr>
<tr><td style="background:#1565c0; color:white; font-weight:600;">当前不可动</td>
<td style="background:#fce4ec;"><strong>单独标注</strong><br><input type="text" placeholder="因素名"></td>
<td style="background:#f5f5f5;"><strong>可忽略</strong><br><input type="text" placeholder="因素名"></td>
<td style="background:#f5f5f5;"><strong>可忽略</strong><br><input type="text" placeholder="因素名"></td></tr>
</table>
</div>

<div class="section">
<div class="section-title">深度验证（候选突破口用）</div>
<table>
<tr><th style="width:200px;">验证问题</th><th>回答</th></tr>
<tr><td>这个突破口具体是什么状态在影响目标？</td><td><textarea rows="2"></textarea></td></tr>
<tr><td>如果在这里发力，最好的结果是什么？需要多长时间能看到？</td><td><textarea rows="2"></textarea></td></tr>
<tr><td>发力的代价是什么？（资源/时间/政治成本）</td><td><textarea rows="2"></textarea></td></tr>
<tr><td>哪些人的配合是必须的？他们现在的态度？</td><td><textarea rows="2"></textarea></td></tr>
<tr><td>这个突破口和其他突破口之间有什么关系？</td><td><textarea rows="2"></textarea></td></tr>
</table>
</div>
</div>
""" + get_html_footer()

    with open(os.path.join(OUTPUT_DIR, "T3_突破口识别矩阵.html"), "w", encoding="utf-8") as f:
        f.write(content)
    print("Generated T3_突破口识别矩阵.html")

def generate_t4():
    content = get_html_header("T4 | 行动方案工具") + """
<div class="header">
<h1>行动方案工具</h1>
<div class="subtitle">把突破口转化为可落地的行动方案 · What → How → Pre-flight</div>
</div>

<div class="tool-meta">
<div class="meta-item"><span class="meta-label">项目名称</span><div class="meta-value"><input type="text" placeholder="填写项目名称"></div></div>
<div class="meta-item"><span class="meta-label">核心目标</span><div class="meta-value"><input type="text" placeholder="填写可测量的目标"></div></div>
<div class="meta-item"><span class="meta-label">突破口</span><div class="meta-value"><input type="text" placeholder="从T3确定突破口"></div></div>
<div class="meta-item"><span class="meta-label">填写人</span><div class="meta-value"><input type="text" placeholder="你的姓名"></div></div>
</div>

<div class="content">
<div class="section">
<div class="section-title">第一层：解决方向（What）</div>
<p style="color: #666; font-size: 13px; margin-bottom: 12px;"><strong>模板：</strong>我们要通过【具体方式】，改善【具体因素】，使【具体指标】从【当前状态】达到【目标状态】。</p>
<textarea rows="3" style="width:100%;border:1px solid #ddd;padding:12px;font-size:14px;border-radius:4px;" placeholder="我们要通过____________，改善____________，使____________从____________达到____________。"></textarea>
</div>

<div class="section">
<div class="section-title">第二层：具体举措（How）</div>
<p style="color: #666; font-size: 13px; margin-bottom: 12px;">一个突破口通常需要2~5个相互配合的举措。</p>
<table>
<tr>
<th style="width:40px;">序号</th>
<th style="width:200px;">举措描述<br><span style="font-weight:400;font-size:11px;">做什么（具体动作）</span></th>
<th style="width:120px;">负责人</th>
<th style="width:100px;">时间节点</th>
<th>成效标准<br><span style="font-weight:400;font-size:11px;">可观察的验证点</span></th>
</tr>
<tr><td style="text-align:center;font-weight:600;">1</td><td><textarea rows="2"></textarea></td><td><input type="text"></td><td><input type="text" placeholder="YYYY-MM-DD"></td><td><textarea rows="2"></textarea></td></tr>
<tr><td style="text-align:center;font-weight:600;">2</td><td><textarea rows="2"></textarea></td><td><input type="text"></td><td><input type="text" placeholder="YYYY-MM-DD"></td><td><textarea rows="2"></textarea></td></tr>
<tr><td style="text-align:center;font-weight:600;">3</td><td><textarea rows="2"></textarea></td><td><input type="text"></td><td><input type="text" placeholder="YYYY-MM-DD"></td><td><textarea rows="2"></textarea></td></tr>
<tr><td style="text-align:center;font-weight:600;">4</td><td><textarea rows="2"></textarea></td><td><input type="text"></td><td><input type="text" placeholder="YYYY-MM-DD"></td><td><textarea rows="2"></textarea></td></tr>
</table>
</div>

<div class="section">
<div class="section-title">第三层：前置条件检查（Pre-flight Check）</div>
<table>
<tr><th style="width:200px;">检查项</th><th>状态</th><th>备注</th></tr>
<tr><td>资源到位了吗？（预算/人力/工具）</td><td><select style="width:100%;border:none;"><option value="">请选择</option><option>已到位</option><option>部分到位</option><option>未到位</option></select></td><td><input type="text"></td></tr>
<tr><td>权限具备了吗？（决策权/审批权）</td><td><select style="width:100%;border:none;"><option value="">请选择</option><option>已具备</option><option>部分具备</option><option>未具备</option></select></td><td><input type="text"></td></tr>
<tr><td>关键人的配合确认了吗？</td><td><select style="width:100%;border:none;"><option value="">请选择</option><option>已确认</option><option>待确认</option><option>未确认</option></select></td><td><input type="text"></td></tr>
<tr><td>有没有其他前置条件目前还不具备？</td><td><input type="text" placeholder="如有，请说明"></td><td><input type="text"></td></tr>
</table>
</div>

<div class="section">
<div class="section-title">风险与对策</div>
<table>
<tr><th style="width:200px;">可能的风险</th><th>应对策略</th></tr>
<tr><td><textarea rows="2"></textarea></td><td><textarea rows="2"></textarea></td></tr>
<tr><td><textarea rows="2"></textarea></td><td><textarea rows="2"></textarea></td></tr>
</table>
</div>
</div>
""" + get_html_footer()

    with open(os.path.join(OUTPUT_DIR, "T4_行动方案工具.html"), "w", encoding="utf-8") as f:
        f.write(content)
    print("Generated T4_行动方案工具.html")

def generate_t5():
    content = get_html_header("T5 | 调研计划工具") + """
<div class="header">
<h1>调研计划工具</h1>
<div class="subtitle">设计完整的信息收集方案 · 知己知彼，不拍脑袋</div>
</div>

<div class="tool-meta">
<div class="meta-item"><span class="meta-label">项目名称</span><div class="meta-value"><input type="text" placeholder="填写项目名称"></div></div>
<div class="meta-item"><span class="meta-label">核心目标</span><div class="meta-value"><input type="text" placeholder="填写可测量的目标"></div></div>
<div class="meta-item"><span class="meta-label">体检清单完成</span><div class="meta-value"><input type="text" placeholder="是/否"></div></div>
<div class="meta-item"><span class="meta-label">填写人</span><div class="meta-value"><input type="text" placeholder="你的姓名"></div></div>
</div>

<div class="content">
<div class="section">
<div class="section-title">调研设计四问</div>
<table>
<tr><th style="width:40px;"></th><th>问题</th><th>回答</th></tr>
<tr><td><span class="badge badge-blue">1</span></td><td><strong>哪些信息我已经有？</strong><br>先盘点库存：内部数据库、历史报告、行业基准...</td><td><textarea rows="3"></textarea></td></tr>
<tr><td><span class="badge badge-blue">2</span></td><td><strong>需要收集的信息用什么方式？</strong><br>访谈/现场观察/数据分析/文档研读</td><td><textarea rows="3"></textarea></td></tr>
<tr><td><span class="badge badge-blue">3</span></td><td><strong>找谁收集？</strong><br>同一问题向不同层级的人了解</td><td><textarea rows="3"></textarea></td></tr>
<tr><td><span class="badge badge-blue">4</span></td><td><strong>怎么确保信息可靠性？</strong><br>交叉验证原则：重要判断需多来源印证</td><td><textarea rows="3"></textarea></td></tr>
</table>
</div>

<div class="section">
<div class="section-title">调研计划表</div>
<table>
<tr>
<th style="width:30px;">序号</th>
<th style="width:150px;">调研内容</th>
<th style="width:100px;">调研方式</th>
<th style="width:100px;">调研对象</th>
<th style="width:80px;">负责人</th>
<th style="width:100px;">预计时间</th>
<th style="width:80px;">状态</th>
</tr>
<tr><td style="text-align:center;">1</td><td><textarea rows="2"></textarea></td>
<td><select style="width:100%;border:none;"><option value="">选择</option><option>深度访谈</option><option>现场观察</option><option>数据分析</option><option>文档研读</option></select></td>
<td><input type="text"></td>
<td><input type="text"></td>
<td><input type="text" placeholder="X天/周"></td>
<td><select style="width:100%;border:none;"><option>待开始</option><option>进行中</option><option>已完成</option></select></td></tr>
<tr><td style="text-align:center;">2</td><td><textarea rows="2"></textarea></td>
<td><select style="width:100%;border:none;"><option value="">选择</option><option>深度访谈</option><option>现场观察</option><option>数据分析</option><option>文档研读</option></select></td>
<td><input type="text"></td>
<td><input type="text"></td>
<td><input type="text" placeholder="X天/周"></td>
<td><select style="width:100%;border:none;"><option>待开始</option><option>进行中</option><option>已完成</option></select></td></tr>
<tr><td style="text-align:center;">3</td><td><textarea rows="2"></textarea></td>
<td><select style="width:100%;border:none;"><option value="">选择</option><option>深度访谈</option><option>现场观察</option><option>数据分析</option><option>文档研读</option></select></td>
<td><input type="text"></td>
<td><input type="text"></td>
<td><input type="text" placeholder="X天/周"></td>
<td><select style="width:100%;border:none;"><option>待开始</option><option>进行中</option><option>已完成</option></select></td></tr>
<tr><td style="text-align:center;">4</td><td><textarea rows="2"></textarea></td>
<td><select style="width:100%;border:none;"><option value="">选择</option><option>深度访谈</option><option>现场观察</option><option>数据分析</option><option>文档研读</option></select></td>
<td><input type="text"></td>
<td><input type="text"></td>
<td><input type="text" placeholder="X天/周"></td>
<td><select style="width:100%;border:none;"><option>待开始</option><option>进行中</option><option>已完成</option></select></td></tr>
</table>
</div>

<div class="section">
<div class="section-title">特别维度：历史改善尝试</div>
<p style="color: #666; font-size: 13px; margin-bottom: 12px;">这个问题或这个方向，以前改善过吗？这个问题最容易跳过，但往往最有价值。</p>
<table>
<tr><th style="width:200px;">问题</th><th>回答</th></tr>
<tr><td>以前针对此目标做过改善尝试吗？</td><td><input type="text" placeholder="是/否 + 简要说明"></td></tr>
<tr><td>当时做了什么？结果怎样？</td><td><textarea rows="2"></textarea></td></tr>
<tr><td>为什么有效或无效？</td><td><textarea rows="2"></textarea></td></tr>
<tr><td>如果没改善过，有过什么障碍？</td><td><textarea rows="2"></textarea></td></tr>
</table>
</div>
</div>
""" + get_html_footer()

    with open(os.path.join(OUTPUT_DIR, "T5_调研计划工具.html"), "w", encoding="utf-8") as f:
        f.write(content)
    print("Generated T5_调研计划工具.html")

def generate_t6():
    content = get_html_header("T6 | 历史经验挖掘表") + """
<div class="header">
<h1>历史经验挖掘表</h1>
<div class="subtitle">从过去的改善尝试中提取有价值的教训 · 不要重复同样的错误</div>
</div>

<div class="tool-meta">
<div class="meta-item"><span class="meta-label">项目名称</span><div class="meta-value"><input type="text" placeholder="填写项目名称"></div></div>
<div class="meta-item"><span class="meta-label">核心目标</span><div class="meta-value"><input type="text" placeholder="填写可测量的目标"></div></div>
<div class="meta-item"><span class="meta-label">填写日期</span><div class="meta-value"><input type="text" placeholder="YYYY-MM-DD"></div></div>
<div class="meta-item"><span class="meta-label">填写人</span><div class="meta-value"><input type="text" placeholder="你的姓名"></div></div>
</div>

<div class="content">
<div class="section">
<div class="section-title">为什么要挖掘历史经验？</div>
<p style="color: #666; font-size: 13px; margin-bottom: 12px;">很多项目方向不是第一次尝试。历史上有人做过类似改善，但可能失败了。挖掘这些历史经验，可以：</p>
<p style="color: #666; font-size: 13px; margin-bottom: 8px;">• 避免重复同样的错误</p>
<p style="color: #666; font-size: 13px; margin-bottom: 8px;">• 借鉴有效的做法</p>
<p style="color: #666; font-size: 13px; margin-bottom: 8px;">• 识别为什么以前推动不了</p>
<p style="color: #666; font-size: 13px;">• 找到现在的时机为什么成熟了</p>
</div>

<div class="section">
<div class="section-title">历史改善尝试记录</div>
<table>
<tr>
<th style="width:30px;">序号</th>
<th style="width:120px;">尝试时间</th>
<th style="width:150px;">改善内容</th>
<th style="width:150px;">当时的结果</th>
<th>为什么未达预期/失败？</th>
</tr>
<tr>
<td style="text-align:center;font-weight:600;">1</td>
<td><input type="text" placeholder="YYYY年"></td>
<td><textarea rows="2"></textarea></td>
<td><textarea rows="2"></textarea></td>
<td><textarea rows="2"></textarea></td>
</tr>
<tr>
<td style="text-align:center;font-weight:600;">2</td>
<td><input type="text" placeholder="YYYY年"></td>
<td><textarea rows="2"></textarea></td>
<td><textarea rows="2"></textarea></td>
<td><textarea rows="2"></textarea></td>
</tr>
<tr>
<td style="text-align:center;font-weight:600;">3</td>
<td><input type="text" placeholder="YYYY年"></td>
<td><textarea rows="2"></textarea></td>
<td><textarea rows="2"></textarea></td>
<td><textarea rows="2"></textarea></td>
</tr>
</table>
</div>

<div class="section">
<div class="section-title">关键教训提炼</div>
<table>
<tr><th style="width:200px;">教训维度</th><th>具体教训</th></tr>
<tr><td><span class="badge badge-red">失败原因</span></td><td><textarea rows="2" placeholder="这次改善失败的核心原因是什么？"></textarea></td></tr>
<tr><td><span class="badge badge-blue">有效做法</span></td><td><textarea rows="2" placeholder="当时有什么做法是有效的，可以借鉴的？"></textarea></td></tr>
<tr><td><span class="badge badge-green">条件变化</span></td><td><textarea rows="2" placeholder="和以前相比，现在什么条件变了？（时机/资源/权限/人员）"></textarea></td></tr>
<tr><td><span class="badge badge-blue">行动建议</span></td><td><textarea rows="2" placeholder="基于历史教训，这次应该怎么做？"></textarea></td></tr>
</table>
</div>

<div class="section">
<div class="section-title">历史人物访谈（如果可能）</div>
<p style="color: #666; font-size: 13px; margin-bottom: 12px;">找到当年参与过改善尝试的人，直接访谈是最有价值的历史经验挖掘方式。</p>
<table>
<tr>
<th style="width:120px;">访谈对象</th>
<th style="width:100px;">当时角色</th>
<th style="width:100px;">联系方式</th>
<th style="width:80px;">计划时间</th>
<th>关键收获</th>
</tr>
<tr>
<td><input type="text"></td>
<td><input type="text"></td>
<td><input type="text"></td>
<td><input type="text" placeholder="YYYY-MM-DD"></td>
<td><textarea rows="2"></textarea></td>
</tr>
<tr>
<td><input type="text"></td>
<td><input type="text"></td>
<td><input type="text"></td>
<td><input type="text" placeholder="YYYY-MM-DD"></td>
<td><textarea rows="2"></textarea></td>
</tr>
</table>
</div>
</div>
""" + get_html_footer()

    with open(os.path.join(OUTPUT_DIR, "T6_历史经验挖掘表.html"), "w", encoding="utf-8") as f:
        f.write(content)
    print("Generated T6_历史经验挖掘表.html")

if __name__ == "__main__":
    generate_t1()
    generate_t2()
    generate_t3()
    generate_t4()
    generate_t5()
    generate_t6()
    print("\nAll T1-T6 HTML forms generated successfully!")
