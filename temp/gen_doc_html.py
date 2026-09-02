# -*- coding: utf-8 -*-
"""Generate HTML visualizations for each teaching document section"""

import os

OUTPUT_DIR = r"D:\新课开发\行动学习2026\02-对事-教程\完整课程包\教学文档HTML"
os.makedirs(OUTPUT_DIR, exist_ok=True)

RED = "#B8351C"
DARK = "#1F1B16"
INDIGO = "#1F3864"
GRAY = "#666666"

CSS = """<style>
* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: 'Microsoft YaHei', 'PingFang SC', 'Noto Sans SC', sans-serif; background: #f8f8f8; color: #1F1B16; font-size: 15px; line-height: 1.8; }
.header { background: linear-gradient(135deg, #1F3864, #2a4a7f); color: white; padding: 32px 40px; }
.header .part-label { font-size: 12px; letter-spacing: 2px; text-transform: uppercase; opacity: 0.7; margin-bottom: 8px; }
.header h1 { font-size: 28px; font-weight: 600; margin-bottom: 8px; }
.header .subtitle { font-size: 15px; opacity: 0.85; }
.content { padding: 32px 40px; max-width: 900px; margin: 0 auto; }
.toc { background: white; border-radius: 8px; padding: 24px; margin-bottom: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.08); }
.toc h2 { font-size: 16px; color: #1F3864; margin-bottom: 12px; border-bottom: 2px solid #B8351C; display: inline-block; padding-bottom: 4px; }
.toc-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px; }
.toc-item { background: #f8f9fa; padding: 12px 16px; border-radius: 6px; border-left: 3px solid #1F3864; font-size: 13px; }
.toc-item .num { font-weight: 600; color: #B8351C; margin-right: 6px; }
.section { background: white; border-radius: 8px; padding: 28px; margin-bottom: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.08); }
.section h2 { font-size: 20px; color: #1F3864; margin-bottom: 16px; padding-bottom: 8px; border-bottom: 2px solid #B8351C; display: inline-block; }
.section h3 { font-size: 16px; color: #1F3864; margin: 20px 0 12px; }
.section h4 { font-size: 14px; color: #B8351C; margin: 16px 0 8px; font-weight: 600; }
.quote { background: #fff3e0; border-left: 4px solid #B8351C; padding: 16px 20px; margin: 16px 0; border-radius: 0 6px 6px 0; }
.quote p { color: #1F1B16; font-size: 14px; }
.warning { background: #fff8e1; border-left: 4px solid #ff9800; padding: 14px 18px; margin: 16px 0; border-radius: 0 6px 6px 0; }
.warning p { color: #1F1B16; font-size: 13px; }
.tip { background: #e8f5e9; border-left: 4px solid #2e7d32; padding: 14px 18px; margin: 16px 0; border-radius: 0 6px 6px 0; }
.tip p { color: #1F1B16; font-size: 13px; }
.case { background: #e3f2fd; border-left: 4px solid #1565c0; padding: 16px 20px; margin: 16px 0; border-radius: 0 6px 6px 0; }
.case-title { font-weight: 600; color: #1565c0; margin-bottom: 8px; font-size: 14px; }
table { width: 100%; border-collapse: collapse; margin: 16px 0; font-size: 13px; }
th, td { border: 1px solid #ddd; padding: 10px 14px; text-align: left; }
th { background: #1F3864; color: white; font-weight: 500; }
tr:nth-child(even) { background: #f9f9f9; }
.exercise { background: linear-gradient(135deg, #f8f9fa, #e8eaed); border: 1px solid #ddd; border-radius: 8px; padding: 20px; margin: 20px 0; }
.exercise-title { font-weight: 600; color: #B8351C; margin-bottom: 12px; font-size: 15px; }
.step { display: flex; gap: 12px; margin: 12px 0; }
.step-num { background: #B8351C; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 12px; flex-shrink: 0; }
.step-content { flex: 1; }
.bad-bullet { color: #c62828; font-weight: 600; }
.good-bullet { color: #2e7d32; font-weight: 600; }
.flow { display: flex; align-items: center; justify-content: center; gap: 8px; flex-wrap: wrap; margin: 20px 0; }
.flow-item { background: #1F3864; color: white; padding: 8px 16px; border-radius: 20px; font-size: 13px; }
.flow-arrow { color: #B8351C; font-size: 18px; }
.matrix { display: grid; grid-template-columns: repeat(4, 1fr); gap: 2px; margin: 16px 0; }
.matrix-cell { padding: 12px; text-align: center; font-size: 12px; min-height: 60px; display: flex; align-items: center; justify-content: center; }
.matrix-header { background: #1F3864; color: white; font-weight: 600; }
.matrix-high { background: #ffebee; color: #c62828; font-weight: 600; }
.matrix-mid { background: #fff3e0; color: #e65100; }
.matrix-low { background: #e8f5e9; color: #2e7d32; }
.matrix-none { background: #f5f5f5; color: #999; }
.footer { text-align: center; padding: 24px; color: #888; font-size: 12px; }
.page-break { border-top: 2px dashed #ddd; margin: 32px 0; }
.target-tag { display: inline-block; background: #B8351C; color: white; padding: 2px 10px; border-radius: 12px; font-size: 11px; margin-right: 6px; }
.dim-tag { display: inline-block; padding: 2px 8px; border-radius: 4px; font-size: 11px; margin: 2px; }
.dim-resource { background: #e3f2fd; color: #1565c0; }
.dim-process { background: #f3e5f5; color: #7b1fa2; }
.dim-ability { background: #fff9c4; color: #f57f17; }
.dim-system { background: #e8f5e9; color: #2e7d32; }
.dim-mgmt { background: #fce4ec; color: #c2185b; }
.dim-external { background: #fff3e0; color: #e65100; }
.dim-history { background: #efebe9; color: #5d4037; }
</style>"""

def get_html(title, part_label, main_title, subtitle, body_content):
    return f"""<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{title}</title>
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;500;700&family=Noto+Serif+SC:wght@600;700&display=swap" rel="stylesheet">
{CSS}
</head>
<body>
<div class="header">
<div class="part-label">{part_label}</div>
<h1>{main_title}</h1>
<div class="subtitle">{subtitle}</div>
</div>
<div class="content">
{body_content}
</div>
<div class="footer">
<p>© 罗宏伟 · 信息分析与突破口识别 · 行动学习课程</p>
</div>
</body>
</html>"""

def make_toc_item(num, title, desc):
    return f'<div class="toc-item"><span class="num">{num}</span>{title}<br><small style="color:#666;">{desc}</small></div>'

# ===== Part 1: 体检思维 =====
def gen_part1():
    body = """
<div class="section">
<h2>课程概述</h2>
<p>这是一套面向企业管理者和项目负责人的系统化分析方法论课程，专注于解决"如何从复杂现实中有条理地找到真正值得发力的突破口"这一核心问题。</p>

<h3>课程解决的问题</h3>
<ul style="margin-left:20px;margin-top:8px;">
<li>团队做了大量工作，但结果没有达到预期</li>
<li>分析时容易遗漏关键因素</li>
<li>行动方案面面俱到但缺乏重点</li>
<li>找到的方向推动不动，推动了看不到效果</li>
</ul>

<h3>核心方法论框架</h3>
<div class="flow">
<div class="flow-item">体检清单</div><div class="flow-arrow">→</div>
<div class="flow-item">调研设计</div><div class="flow-arrow">→</div>
<div class="flow-item">四维分析</div><div class="flow-arrow">→</div>
<div class="flow-item">突破口识别</div><div class="flow-arrow">→</div>
<div class="flow-item">行动方案</div>
</div>
<div class="flow" style="margin-top:-12px;">
<div class="flow-item" style="background:#B8351C;">画全貌</div>
<div class="flow-item" style="background:#B8351C;">找真相</div>
<div class="flow-item" style="background:#B8351C;">做判断</div>
<div class="flow-item" style="background:#B8351C;">找杠杆</div>
<div class="flow-item" style="background:#B8351C;">能落地</div>
</div>

<h3>课程产出</h3>
<p>学员完成本课程后，将独立产出：</p>
<ul style="margin-left:20px;margin-top:8px;">
<li><strong>一份体检清单</strong>：覆盖关键维度、结构清晰的因素地图</li>
<li><strong>一份四维分析表</strong>：有调研依据的影响评估和可动性判断</li>
<li><strong>2~4个突破口</strong>：集中发力的精准方向</li>
<li><strong>一套行动方案</strong>：可执行、可验证的具体举措</li>
</ul>
</div>

<div class="section">
<h2>三个几乎人人都有的思维偏误</h2>

<h3>偏误一：可及性偏误（最显眼的 ≠ 最重要的）</h3>
<p>人最先想到的原因，往往是最近发生的、最显眼的、最让人烦恼的事情——但这些不一定是最重要的。</p>
<div class="quote"><p><strong>这不是因为大脑天然优先处理"最近发生的、感觉最强烈的"信息。</strong>最烦的问题，不等于最关键的原因。</p></div>

<h3>偏误二：归责偏误（找"谁的问题" ≠ 找"系统性因素"）</h3>
<p>遇到困境，人天然倾向于找"是谁的问题"，而不是"是什么结构性、机制性因素导致了这个结果"。</p>
<div class="quote"><p><strong>把问题定位成"某人的问题"，解法就只剩"换人"或"劝说"——而结构性的、系统性的因素就继续被忽略。</strong></p></div>

<h3>偏误三：局部视角偏误（你看到的，只是你的那一角）</h3>
<p>每个人只能看到自己能接触到的那部分现实。同一项目，一线操作员眼中的根源、中层管理者眼中的根源、高层决策者眼中的根源，可能完全不同。</p>
<div class="warning"><p>这三个偏误不是能力问题，也不是态度问题，是人类认知的内置程序。意识到它们的存在，才有可能有意识地绕开它们。</p></div>
</div>

<div class="section">
<h2>体检思维 vs 找原因思维</h2>

<table>
<tr><th style="width:140px;"></th><th>找原因思维</th><th>体检思维</th></tr>
<tr><td><strong>出发点</strong></td><td>我认为问题在哪里</td><td>影响目标的，可能有哪些因素</td></tr>
<tr><td><strong>分析范围</strong></td><td>自己认为重要的那几个方向</td><td>系统性覆盖所有相关维度</td></tr>
<tr><td><strong>判断依据</strong></td><td>经验、感觉、近期发生的事</td><td>调研收集的真实信息和数据</td></tr>
<tr><td><strong>目标</strong></td><td>找到"根本原因"</td><td>画出完整的因素地图</td></tr>
<tr><td><strong>常见风险</strong></td><td>遗漏关键因素；在次要方向上做大量工作</td><td>需要更多前期时间，但结论更可靠</td></tr>
</table>

<div class="tip"><p><strong>记忆这个区别：</strong>体检思维 = 先画完整地图，再选择走哪条路。找原因思维 = 凭感觉选一条路，然后解释为什么选这条。</p></div>
</div>

<div class="section">
<h2>一个让人沮丧的故事</h2>
<div class="case">
<div class="case-title">某城市轨道交通公司的运营改善课题</div>
<p>2022年启动课题：提升三北线高峰期运输能力，目标是把高峰运能利用率提升8个百分点。</p>
<p>团队做了很多事：增配高峰站务人员、加密早高峰发车间隔、在客流最密集的两个站点做了流量引导优化……</p>
<p><strong>半年后复盘：高峰期运能利用率提升了1.2个百分点。（目标是8个）</strong></p>
<p>一年后，新成员发现：所有措施瞄准的全都是同一个维度——<strong>人员配置和运营调度</strong>。而真正制约运力的核心瓶颈，是关键中转站的<strong>折返线路能力不足</strong>。</p>
<p>这个折返线路问题不是没人知道——只是"大家都知道，但没人把它当成这次课题需要认真研究的对象"。</p>
</div>
<div class="quote"><p><strong>这个团队不是不努力，也不是不聪明。他们认真地解决了他们看到的问题。但是，他们没有先画一张完整的地图，所以他们没有看到那个最关键的位置。</strong></p></div>
</div>

<div class="section">
<h2>练习：看清你当前项目的分析起点</h2>
<div class="exercise">
<div class="exercise-title">第一步：快速列出你认为影响目标的因素（3分钟）</div>
<table>
<tr><th style="width:40px;">#</th><th>你认为影响目标达成的因素</th><th style="width:100px;">偏误标签</th></tr>
<tr><td style="text-align:center;">1</td><td></td><td></td></tr>
<tr><td style="text-align:center;">2</td><td></td><td></td></tr>
<tr><td style="text-align:center;">3</td><td></td><td></td></tr>
<tr><td style="text-align:center;">4</td><td></td><td></td></tr>
<tr><td style="text-align:center;">5</td><td></td><td></td></tr>
<tr><td style="text-align:center;">6</td><td></td><td></td></tr>
<tr><td style="text-align:center;">7</td><td></td><td></td></tr>
<tr><td style="text-align:center;">8</td><td></td><td></td></tr>
</table>
</div>

<div class="exercise">
<div class="exercise-title">第二步：给每条打偏误标签</div>
<ul style="margin-left:20px;">
<li><strong>〔可及〕</strong>它进入清单，是因为最近发生、或者最显眼、最烦人</li>
<li><strong>〔归责〕</strong>它的表述指向一个人或部门（而不是系统性因素）</li>
<li><strong>〔局部〕</strong>它只是你自己视角能看到的，没有考虑其他层级或岗位的视角</li>
</ul>
<p style="margin-top:12px;">打完标签后，看一看：你的清单里，有多大比例是这三类？有没有哪些维度，你觉得应该有但没出现在清单里？</p>
</div>
</div>
"""
    return get_html("Part 1 | 体检思维 - 信息分析与突破口识别", "第一部分", "体检思维", "识别三个认知偏误，建立体检思维框架", body)

# ===== Part 2: 体检清单 =====
def gen_part2():
    body = """
<div class="section">
<h2>体检清单是什么，不是什么</h2>

<h3>体检清单是什么</h3>
<p>一份针对"影响项目目标达成"的所有相关因素的<strong>完整列举</strong>。结构化分类，不评价、不排序、只穷举。</p>
<div class="tip"><p><strong>清单不是问题清单，也不是任务清单。它是一份"需要检查"的完整地图。</strong></p></div>

<h3>体检清单不是什么</h3>
<ul style="margin-left:20px;">
<li><span class="bad-bullet">✗</span> 不是"我认为有问题的地方的清单"——那是已经加了判断的清单，而清单阶段还不做判断</li>
<li><span class="bad-bullet">✗</span> 不是"我们打算做的事情的清单"——那是行动清单，混入清单会让分析从一开始就走偏</li>
<li><span class="bad-bullet">✗</span> 不是"越长越好"——长但有大量重叠的清单，不如精简但覆盖全面的清单</li>
</ul>
</div>

<div class="section">
<h2>建立体检清单的三步逻辑</h2>

<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<h4>锚定目标</h4>
<p>在开始列因素之前，先把目标说清楚。目标不清，清单就会跑偏。</p>
<div class="warning"><p><strong>目标设定检查：</strong>"提升运营效率"是方向，不是具体目标。"将高峰期运能利用率从71%提升到79%"才是可以驱动清单的具体目标。</p></div>
</div>
</div>

<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<h4>用维度框架覆盖全貌</h4>
<p>围绕目标，系统列出所有可能影响它的因素类别，用7个维度来辅助：</p>
<div style="margin-top:8px;">
<span class="dim-tag dim-resource">资源维度</span>
<span class="dim-tag dim-process">流程维度</span>
<span class="dim-tag dim-ability">能力维度</span>
<span class="dim-tag dim-system">系统与工具维度</span>
<span class="dim-tag dim-mgmt">管理机制维度</span>
<span class="dim-tag dim-external">外部条件维度</span>
<span class="dim-tag dim-history">历史遗留维度</span>
</div>
</div>
</div>

<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<h4>逐项展开，列出具体条目</h4>
<p>在每个维度下，列出可观测、可评估的具体项目或因素。</p>
<div class="quote"><p><strong>格式要求：名词短语，不加评价。</strong>不是"培训质量很差"（这是评价），而是"关键岗位培训覆盖率"（这是因素）。</p></div>
</div>
</div>
</div>

<div class="section">
<h2>七维框架详解</h2>

<table>
<tr><th style="width:140px;">维度</th><th>典型细项方向</th><th>举例说明</th></tr>
<tr><td><span class="dim-tag dim-resource">资源维度</span></td><td>人力配置、设备状态、预算充足度、时间资源</td><td>人手够不够、设备是否达标、关键岗位有没有空缺</td></tr>
<tr><td><span class="dim-tag dim-process">流程维度</span></td><td>核心操作流程、跨部门协同流程、异常处理流程</td><td>标准流程是什么、实际执行和标准差多远、跨部门交接哪里卡</td></tr>
<tr><td><span class="dim-tag dim-ability">能力维度</span></td><td>团队技能水平、知识掌握程度、工具使用能力</td><td>关键岗位的实际能力和要求的差距在哪里</td></tr>
<tr><td><span class="dim-tag dim-system">系统与工具维度</span></td><td>支撑系统稳定性、工具适配性、数据准确性</td><td>信息系统是否支撑流程、数据是否可信、有哪些手工环节</td></tr>
<tr><td><span class="dim-tag dim-mgmt">管理机制维度</span></td><td>考核指标设计、激励机制、信息传递与反馈机制</td><td>考核指标是否指向对的行为、反馈回路是否通畅</td></tr>
<tr><td><span class="dim-tag dim-external">外部条件维度</span></td><td>政策法规约束、客户或用户行为模式、供应商因素</td><td>有没有外部硬性约束、用户的真实需求和行为是什么</td></tr>
<tr><td><span class="dim-tag dim-history">历史遗留维度</span></td><td>历史问题积累、以往的改善尝试及结果、路径依赖</td><td>过去尝试过什么、为什么成功或失败、有没有历史包袱</td></tr>
</table>

<div class="tip"><p><strong>历史遗留维度是最容易被忽略、但往往最有价值的维度。</strong>了解"以前尝试过什么、结果怎样"，能帮你避免走过的弯路，也是判断某个改善方向"现实可行性"的重要参考。</p></div>
</div>

<div class="section">
<h2>常见误区</h2>

<table>
<tr><th>误区</th><th>典型表现</th><th>怎么修正</th></tr>
<tr><td class="bad-bullet">把评价写成了因素</td><td>"培训效果差""管理层不重视"</td><td>改成名词短语，去掉评价词：改为"培训有效性"或"管理层关注度"</td></tr>
<tr><td class="bad-bullet">把解决方案写成了因素</td><td>"建立反馈机制""引入新系统"</td><td>清单阶段不写解决方案，改为：描述当前状态的问题域</td></tr>
<tr><td class="bad-bullet">遗漏历史维度</td><td>没有任何关于"以前试过什么"的条目</td><td>专门加一个"历史遗留"维度</td></tr>
<tr><td class="bad-bullet">只有内部因素</td><td>没有客户、政策、外包等外部维度</td><td>专门检查"外部条件"维度，至少列出2~3条</td></tr>
<tr><td class="bad-bullet">条目太粗</td><td>"整体管理水平""公司文化"</td><td>继续往下拆：具体体现在哪些机制？哪些具体行为？</td></tr>
</table>
</div>

<div class="section">
<h2>练习：用框架重建你的体检清单</h2>
<div class="exercise">
<div class="exercise-title">第一步：用维度框架重新展开（12分钟）</div>
<table>
<tr><th style="width:140px;">维度</th><th>具体因素条目（名词短语，不加评价）</th></tr>
<tr><td><span class="dim-tag dim-resource">资源维度</span></td><td><br><br></td></tr>
<tr><td><span class="dim-tag dim-process">流程维度</span></td><td><br><br></td></tr>
<tr><td><span class="dim-tag dim-ability">能力维度</span></td><td><br><br></td></tr>
<tr><td><span class="dim-tag dim-system">系统与工具维度</span></td><td><br><br></td></tr>
<tr><td><span class="dim-tag dim-mgmt">管理机制维度</span></td><td><br><br></td></tr>
<tr><td><span class="dim-tag dim-external">外部条件维度</span></td><td><br><br></td></tr>
<tr><td><span class="dim-tag dim-history">历史遗留维度</span></td><td><br></td></tr>
</table>
</div>

<div class="exercise">
<div class="exercise-title">第二步：清单质量自检</div>
<ul style="margin-left:20px;">
<li><strong>覆盖完整性：</strong>是否每个相关维度都有对应条目？有没有某个维度明显比其他维度少很多？</li>
<li><strong>条目可观察性：</strong>每一条，你能想象出"如何去了解它的真实状态"吗？</li>
<li><strong>无重叠无包含：</strong>有没有两条实际上说的是同一件事？</li>
</ul>
</div>
</div>
"""
    return get_html("Part 2 | 体检清单 - 信息分析与突破口识别", "第二部分", "体检清单", "用七维框架系统覆盖所有相关因素", body)

# ===== Part 3: 调研设计 =====
def gen_part3():
    body = """
<div class="section">
<h2>为什么不能跳过调研</h2>
<div class="case">
<div class="case-title">同一张清单，两种命运</div>
<p><strong>陈磊团队：</strong>"时间紧，我们有丰富的行业经验，直接根据经验判断就好。"一周内完成了全套分析和行动方案。</p>
<p><strong>王静团队：</strong>"先花两周弄清楚我们真正不知道的是哪些，再分析。"做了深度访谈、现场观察、数据分析。两周后才开始分析。</p>
<p><strong>三个月后：</strong>陈磊团队的方案被基层评价为"听起来合理，但不是我们真正卡的地方"。王静团队的方案推进阻力小得多。</p>
</div>
<div class="warning"><p><strong>一个原则要反复记在脑子里：</strong>清单告诉你"需要了解什么"，调研才是"去找到真实答案"的过程。没有调研支撑的分析，是在用假设做判断。</p></div>
</div>

<div class="section">
<h2>调研设计的四个核心问题</h2>

<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<h4>哪些信息我已经有，哪些需要重新收集？</h4>
<p>先盘点库存：内部数据库的历史数据、内部报告和分析文件、行业基准数据、历史决策文件。</p>
<div class="warning"><p><strong>重要提醒：</strong>"有一些数据"不等于"这个因素不用再调研了"。数据通常只能告诉你当前水平和变化趋势，但无法告诉你"为什么是这个水平"。</p></div>
</div>
</div>

<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<h4>需要收集的信息，用什么方式收集？</h4>
<table>
<tr><th style="width:100px;">调研方式</th><th>最适合获取的信息类型</th></tr>
<tr><td><strong>深度访谈</strong></td><td>判断类、经验类、隐性知识、"为什么"类</td></tr>
<tr><td><strong>现场观察</strong></td><td>流程类、行为类、物理空间类</td></tr>
<tr><td><strong>数据分析</strong></td><td>量化类、趋势类、分布类、对比类</td></tr>
<tr><td><strong>文档研读</strong></td><td>历史类、政策类、机制设计类</td></tr>
</table>
<div class="tip"><p><strong>最容易被忽略的是现场观察。</strong>很多人觉得"我们知道流程是怎样的"，但在实际工作中，人们不总是按照标准流程操作。</p></div>
</div>
</div>

<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<h4>找谁收集？</h4>
<p><strong>基本原则：同一个问题，要向不同层级的人了解。</strong></p>
<table>
<tr><th style="width:120px;">调研对象</th><th>能提供的独特视角</th></tr>
<tr><td>一线操作员工</td><td>实际操作流程与标准的差距；"大家都知道但不说"的问题</td></tr>
<tr><td>中层管理者</td><td>跨部门协同的实际状况；资源和权限层面的真实限制</td></tr>
<tr><td>高层决策者</td><td>战略优先级；外部约束的真实来源</td></tr>
<tr><td>历史改善参与者</td><td>以前尝试过什么、为什么没有持续；隐性障碍是什么</td></tr>
<tr><td>外部利益相关方</td><td>客户/用户的真实体验和需求</td></tr>
</table>
</div>
</div>

<div class="step">
<div class="step-num">4</div>
<div class="step-content">
<h4>怎么确保信息的可靠性？</h4>
<p><strong>三个可靠性陷阱：</strong></p>
<ul style="margin-left:20px;margin-top:8px;">
<li><span class="bad-bullet">✗</span> 只收集支持预设假设的信息</li>
<li><span class="bad-bullet">✗</span> 混淆"说的"和"做的"</li>
<li><span class="bad-bullet">✗</span> 只有单一来源</li>
</ul>
<div class="tip"><p><strong>交叉验证原则：</strong>重要的判断，需要来自不同角度的信息互相印证。访谈+数据+现场观察，三条信息指向同一个事实，这个判断才是可信的。</p></div>
</div>
</div>
</div>

<div class="section">
<h2>特别维度：历史改善尝试</h2>
<p>在所有调研维度里，有一个最常被跳过、但往往最关键的维度：<strong>这个问题或这个方向，以前改善过吗？</strong></p>

<h4>如果改善过：</h4>
<ul style="margin-left:20px;">
<li>当时做了什么？效果怎样？</li>
<li>为什么有效或无效？有没有持续？为什么没有持续？</li>
</ul>

<h4>如果没有改善过：</h4>
<ul style="margin-left:20px;">
<li>为什么没有做过？不是没想到，就是遇到了某种障碍——那个障碍是什么？</li>
</ul>

<div class="quote"><p><strong>历史改善尝试的价值：</strong>帮你避免推荐已经被证明无效的方向；理解"大家都认为应该做但一直没做"的方向背后藏着什么真实的障碍；判断"这个因素到底可不可动"最直接的参考依据之一。</p></div>

<h4>建议专门设计的访谈问题：</h4>
<ol style="margin-left:20px;">
<li>"过去X年里，有没有人专门针对这个问题或这个方向做过改善尝试？"</li>
<li>"当时具体做了什么？结果怎样？"</li>
<li>"你认为为什么有效/无效？"</li>
<li>"目前这个方向如果要推进，你认为最大的障碍是什么？"</li>
</ol>
</div>

<div class="section">
<h2>练习：设计你的调研计划</h2>
<div class="exercise">
<div class="exercise-title">第一步：信息分类（8分钟）</div>
<p>对体检清单里的每条因素标注：</p>
<ul style="margin-left:20px;margin-top:8px;">
<li><strong>〔有〕</strong> 现有数据或文件可以基本覆盖这条</li>
<li><strong>〔访〕</strong> 需要通过访谈来了解真实状态</li>
<li><strong>〔观〕</strong> 需要通过现场观察来了解实际发生的情况</li>
<li><strong>〔文〕</strong> 需要通过文档研读来了解历史背景或机制设计</li>
<li><strong>〔数〕</strong> 需要通过数据分析来了解量化水平或趋势</li>
</ul>
</div>

<div class="exercise">
<div class="exercise-title">第二步：确定调研计划</div>
<table>
<tr><th>调研内容</th><th style="width:80px;">方式</th><th style="width:80px;">找谁</th><th style="width:80px;">预计时间</th><th style="width:60px;">状态</th></tr>
<tr><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td></td><td></td><td></td><td></td><td></td></tr>
</table>
<p style="margin-top:12px;"><strong>特别检查：</strong>有没有至少一个专门针对"历史改善尝试"的访谈？有没有覆盖一线员工的视角？</p>
</div>
</div>
"""
    return get_html("Part 3 | 调研设计 - 信息分析与突破口识别", "第三部分", "调研设计", "设计完整的信息收集方案，让分析落在真实信息上", body)

# ===== Part 4: 四维分析 =====
def gen_part4():
    body = """
<div class="section">
<h2>四维分析框架</h2>
<p>四维分析的目的，是对每一个关键因素做出四个方面的系统性判断，从而帮你找到"值得集中投入"的那几个方向。</p>

<div style="display:grid;grid-template-columns:repeat(2,1fr);gap:16px;margin-top:20px;">
<div style="background:#fff3e0;border-radius:8px;padding:16px;border-left:4px solid #ff9800;">
<h4 style="color:#e65100;margin-bottom:8px;">维度一：影响大小</h4>
<p style="font-size:13px;">这个因素对目标的影响有多显著？<br>如果这个因素改善30%，目标大约会变化多少？</p>
</div>
<div style="background:#e3f2fd;border-radius:8px;padding:16px;border-left:4px solid #1565c0;">
<h4 style="color:#1565c0;margin-bottom:8px;">维度二：影响范围</h4>
<p style="font-size:13px;">这个因素的影响是局部的，还是系统性的？<br>改变一个地方，多处受益的是系统性。</p>
</div>
<div style="background:#ffebee;border-radius:8px;padding:16px;border-left:4px solid #c62828;">
<h4 style="color:#c62828;margin-bottom:8px;">维度三：可动性</h4>
<p style="font-size:13px;">这个因素，实际上能被推动改善吗？<br>直接可动 / 间接可动 / 当前不可动</p>
</div>
<div style="background:#e8f5e9;border-radius:8px;padding:16px;border-left:4px solid #2e7d32;">
<h4 style="color:#2e7d32;margin-bottom:8px;">维度四：突破可能性</h4>
<p style="font-size:13px;">在可动的前提下，能推动到什么程度？<br>当前在哪里？能改善到哪里？路径清晰吗？</p>
</div>
</div>
</div>

<div class="section">
<h2>可动性：最关键的维度</h2>

<h3>三类可动性</h3>
<table>
<tr><th style="width:120px;">分类</th><th>含义</th><th>关键特征</th></tr>
<tr><td><strong>直接可动</strong></td><td>在本项目周期内可以实质性推动</td><td>有实施路径；有行动主体；所需资源可以筹到</td></tr>
<tr><td><strong>间接可动</strong></td><td>不直接控制，但可以通过影响相关方来推动</td><td>需要其他人/部门的配合；需要利益相关方的支持</td></tr>
<tr><td><strong>当前不可动</strong></td><td>受制于外部政策、预算上限、硬性合同约束</td><td>改变需要远超项目范围的权限或资源</td></tr>
</table>

<div class="warning"><p><strong>最大陷阱：把"不舒服的事实"归入"不可动"。</strong>很多常见的"不可动"理由实际上只是"困难"，不是"不可动"。把"困难"错误地归入"不可动"，会让突破口识别从一开始就错过最有价值的地方。</p></div>

<h3>常见"不可动"理由的正确挑战</h3>
<ul style="margin-left:20px;">
<li>"这是政策规定，改不了" → 政策是谁制定的？有没有弹性空间？有没有先例性调整？</li>
<li>"预算已经定了，增加不了" → 预算是怎么决定的？有没有临时调整的机制？</li>
<li>"这需要A部门配合，他们不可能同意" → A部门有什么顾虑？有没有让成本更低的合作方式？</li>
<li>"以前试过，没用" → 当时是什么方式？方向不对，还是执行不到位，还是时机不对？</li>
</ul>

<div class="tip"><p><strong>"间接可动"往往是最有价值的突破口所在。</strong>通过影响相关方、提供数据支持、建立合作机制等方式，这类因素是可以被推动的——只是需要连接到利益相关方分析。</p></div>
</div>

<div class="section">
<h2>突破口识别的优先级矩阵</h2>

<div style="display:flex;justify-content:center;margin:20px 0;">
<div style="display:grid;grid-template-columns:100px repeat(3, 1fr);gap:2px;width:100%;max-width:500px;">
<div style="background:#1F3864;color:white;padding:10px;font-size:12px;"></div>
<div style="background:#c62828;color:white;padding:10px;font-size:12px;text-align:center;font-weight:600;">高影响</div>
<div style="background:#ef6c00;color:white;padding:10px;font-size:12px;text-align:center;font-weight:600;">中影响</div>
<div style="background:#2e7d32;color:white;padding:10px;font-size:12px;text-align:center;font-weight:600;">低影响</div>

<div style="background:#1565c0;color:white;padding:10px;font-size:12px;font-weight:600;">直接可动</div>
<div style="background:#ffebee;padding:10px;text-align:center;"><span style="color:#c62828;font-weight:700;">★ 优先</span></div>
<div style="background:#fff3e0;padding:10px;text-align:center;">次优先</div>
<div style="background:#e8f5e9;padding:10px;text-align:center;color:#2e7d32;">暂缓</div>

<div style="background:#1565c0;color:white;padding:10px;font-size:12px;font-weight:600;">间接可动</div>
<div style="background:#ffebee;padding:10px;text-align:center;"><span style="color:#c62828;font-weight:700;">★ 优先</span></div>
<div style="background:#fff3e0;padding:10px;text-align:center;">次优先</div>
<div style="background:#e8f5e9;padding:10px;text-align:center;color:#2e7d32;">暂缓</div>

<div style="background:#1565c0;color:white;padding:10px;font-size:12px;font-weight:600;">当前不可动</div>
<div style="background:#fce4ec;padding:10px;text-align:center;"><span style="color:#880e4f;">🔲 单独标注</span></div>
<div style="background:#f5f5f5;padding:10px;text-align:center;color:#999;">可忽略</div>
<div style="background:#f5f5f5;padding:10px;text-align:center;color:#999;">可忽略</div>
</div>
</div>

<ul style="margin-left:20px;">
<li><span class="good-bullet">★ 优先突破口</span>（可动+高影响）：从这区域里找2~4个核心突破口</li>
<li><span style="color:#ef6c00;font-weight:600;">次优先</span>（可动+中影响）：作为配套行动，不是主攻方向</li>
<li><span style="color:#880e4f;">🔲 单独标注</span>（当前不可动+高影响）：明确说明约束存在，围绕它调整方案</li>
<li><span style="color:#999;">暂缓/忽略</span>：影响小的因素，现阶段不是优先项</li>
</ul>
</div>

<div class="section">
<h2>练习：完成你的四维分析</h2>
<div class="exercise">
<div class="exercise-title">第一步：选出关键因素并做四维评估</div>
<table>
<tr><th>因素名称</th><th style="width:70px;">影响大小</th><th style="width:80px;">影响范围</th><th style="width:90px;">可动性</th><th style="width:100px;">突破可能性</th><th>判断依据</th></tr>
<tr><td></td><td><select style="width:100%;border:none;background:transparent;"><option></option><option>高</option><option>中</option><option>低</option></select></td>
<td><select style="width:100%;border:none;background:transparent;"><option></option><option>全局</option><option>局部</option></select></td>
<td><select style="width:100%;border:none;background:transparent;"><option></option><option>直接可动</option><option>间接可动</option><option>当前不可动</option></select></td>
<td><select style="width:100%;border:none;background:transparent;"><option></option><option>高</option><option>中</option><option>低</option></select></td>
<td></td></tr>
<tr><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td></td><td></td><td></td><td></td><td></td><td></td></tr>
</table>
</div>

<div class="exercise">
<div class="exercise-title">第二步：对"当前不可动"的判断发起挑战</div>
<p>找出标注为"当前不可动"的所有因素，逐一回答：</p>
<ul style="margin-left:20px;margin-top:8px;">
<li>这个因素不可动的具体约束是什么？（越具体越好）</li>
<li>在什么条件改变的情况下，这个约束会松动？</li>
<li>有没有间接推动的可能性？</li>
</ul>
</div>
</div>
"""
    return get_html("Part 4 | 四维分析 - 信息分析与突破口识别", "第四部分", "四维分析", "系统性判断每个因素的影响力与可动性", body)

# ===== Part 5: 突破口识别 =====
def gen_part5():
    body = """
<div class="section">
<h2>什么是突破口</h2>
<p>突破口不是简单的"重要且可做的因素"，它有<strong>三个同时成立</strong>的条件：</p>

<div style="display:grid;gap:12px;margin:20px 0;">
<div style="background:#ffebee;border-radius:8px;padding:16px;border-left:4px solid #c62828;">
<strong style="color:#c62828;">条件一：影响显著</strong><br>
<p style="font-size:13px;margin-top:4px;">这个因素改善之后，目标指标会有<strong>可感知的变化</strong>，不是微弱的边际改善。</p>
</div>
<div style="background:#e3f2fd;border-radius:8px;padding:16px;border-left:4px solid #1565c0;">
<strong style="color:#1565c0;">条件二：有实际撬动可能</strong><br>
<p style="font-size:13px;margin-top:4px;">在当前的资源、权限、时机条件下，这个因素是可以被<strong>实质性推动</strong>的（直接可动或间接可动）。</p>
</div>
<div style="background:#e8f5e9;border-radius:8px;padding:16px;border-left:4px solid #2e7d32;">
<strong style="color:#2e7d32;">条件三：项目周期内可见效</strong><br>
<p style="font-size:13px;margin-top:4px;">在这个项目的时间框架内，能看到<strong>真实的改变</strong>——不是三年后见效，不是依赖若干个其他大变化先发生。</p>
</div>
</div>

<div class="warning"><p><strong>三个条件缺一不可。</strong>影响大但完全不可动，不是突破口。可动但影响很小，也不是突破口。可动且影响大但需要五年才能见效，在这个项目里也不是突破口。</p></div>
</div>

<div class="section">
<h2>深度验证5问</h2>
<p>对每个候选突破口，做深度验证——把这5个问题都回答清楚：</p>

<div style="display:grid;gap:12px;margin-top:16px;">
<div style="background:#f8f9fa;padding:16px;border-radius:8px;">
<strong>问题1：</strong>这个突破口<strong>具体是什么状态</strong>在影响目标？<br>
<p style="font-size:13px;color:#666;margin-top:4px;">不能是"管理机制不健全"这样的大词，要具体到：什么具体的状态，通过什么具体的路径，影响了目标的哪个方面？</p>
</div>
<div style="background:#f8f9fa;padding:16px;border-radius:8px;">
<strong>问题2：</strong>如果在这里发力，<strong>最好的结果是什么</strong>？需要多长时间能看到？<br>
<p style="font-size:13px;color:#666;margin-top:4px;">要有一个基于调研的现实预估，不是乐观假设。</p>
</div>
<div style="background:#f8f9fa;padding:16px;border-radius:8px;">
<strong>问题3：</strong><strong>发力的代价是什么</strong>？<br>
<p style="font-size:13px;color:#666;margin-top:4px;">需要调动什么资源？会触动哪些敏感的利益关系？</p>
</div>
<div style="background:#f8f9fa;padding:16px;border-radius:8px;">
<strong>问题4：</strong>哪些人的配合是必须的？<br>
<p style="font-size:13px;color:#666;margin-top:4px;">如果是"间接可动"的突破口，能不能真正推动取决于那些需要配合的人是否支持。</p>
</div>
<div style="background:#f8f9fa;padding:16px;border-radius:8px;">
<strong>问题5：</strong>这个突破口和<strong>其他突破口之间有什么关系</strong>？<br>
<p style="font-size:13px;color:#666;margin-top:4px;">有没有依存关系？（A必须先推进，B才能发力）有没有相互强化的关系？有没有冲突？</p>
</div>
</div>
</div>

<div class="section">
<h2>练习：识别你的突破口</h2>
<div class="exercise">
<div class="exercise-title">第一步：把因素映射到优先级矩阵</div>
<table>
<tr><th></th><th style="background:#c62828;">高影响</th><th style="background:#ef6c00;">中影响</th><th style="background:#2e7d32;">低影响</th></tr>
<tr><td style="background:#1565c0;color:white;font-weight:600;">直接可动</td><td></td><td></td><td></td></tr>
<tr><td style="background:#1565c0;color:white;font-weight:600;">间接可动</td><td></td><td></td><td></td></tr>
<tr><td style="background:#1565c0;color:white;font-weight:600;">当前不可动</td><td></td><td></td><td></td></tr>
</table>
</div>

<div class="exercise">
<div class="exercise-title">第二步：深度验证每个候选突破口</div>
<table>
<tr><th style="width:180px;">验证问题</th><th>突破口1：</th><th>突破口2：</th></tr>
<tr><td><strong>具体是什么状态在影响目标？</strong></td><td></td><td></td></tr>
<tr><td><strong>最好的结果是什么？需要多长时间？</strong></td><td></td><td></td></tr>
<tr><td><strong>发力的代价是什么？</strong></td><td></td><td></td></tr>
<tr><td><strong>哪些人的配合是必须的？</strong></td><td></td><td></td></tr>
<tr><td><strong>与其他突破口的关系？</strong></td><td></td><td></td></tr>
</table>
</div>
</div>

<div class="section">
<h2>需要注意的信号</h2>
<ul style="margin-left:20px;">
<li><span class="bad-bullet">⚠</span> <strong>突破口超过4个</strong> → 通常意味着在"可动性"判断上太宽松了</li>
<li><span class="bad-bullet">⚠</span> <strong>所有突破口都是"直接可动"的</strong> → 可能规避了需要跨部门协调的"间接可动"因素——后者往往是高价值杠杆点</li>
<li><span class="bad-bullet">⚠</span> <strong>所有突破口都指向同一个部门</strong> → 局部视角偏误可能还没有被完全纠正</li>
<li><span class="bad-bullet">⚠</span> <strong>某个突破口回答不了深度验证的问题</strong> → 这个方向还需要补充调研，或者颗粒度太粗</li>
</ul>

<div class="tip"><p><strong>少即是多。</strong>精准的3个突破口，比宽泛的20条行动更有价值。</p></div>
</div>
"""
    return get_html("Part 5 | 突破口识别 - 信息分析与突破口识别", "第五部分", "突破口识别", "从优先矩阵中找到真正的杠杆点", body)

# ===== Part 6: 行动方案 =====
def gen_part6():
    body = """
<div class="section">
<h2>行动方案的三层结构</h2>

<div class="step">
<div class="step-num" style="background:#1F3864;">1</div>
<div class="step-content">
<h4>解决方向（What）</h4>
<p>对这个突破口的行动承诺。一句话说清楚：<strong>我们要通过什么具体方式，改善什么具体因素，使什么具体指标从当前状态达到什么目标状态。</strong></p>
<div class="quote"><p><strong>模板：</strong>我们要通过【具体方式】，改善【具体因素】，使【具体指标】从【当前状态】达到【目标状态】。</p></div>
</div>
</div>

<div class="step">
<div class="step-num" style="background:#1F3864;">2</div>
<div class="step-content">
<h4>具体举措（How）</h4>
<p>一个突破口通常需要2~5个相互配合的举措。</p>
<ul style="margin-left:20px;margin-top:8px;">
<li><strong>做什么</strong>（具体动作，不是方向）</li>
<li><strong>谁来做</strong>（具体的人或角色）</li>
<li><strong>什么时候</strong>（具体的里程碑时间）</li>
<li><strong>怎么验证</strong>（可观察的成效标准）</li>
</ul>
</div>
</div>

<div class="step">
<div class="step-num" style="background:#1F3864;">3</div>
<div class="step-content">
<h4>前置条件检查（Pre-flight check）</h4>
<p>飞机起飞前的系统性检查清单：</p>
<ul style="margin-left:20px;margin-top:8px;">
<li><strong>资源到位了吗？</strong>不是"理论上有"，而是"已经和相关负责人确认了可以用"</li>
<li><strong>权限具备了吗？</strong>需不需要上级授权？有没有跨部门的审批流程？</li>
<li><strong>关键人的配合确认了吗？</strong>他们的态度是支持、观望还是有顾虑？</li>
<li><strong>有没有什么前置条件目前还不具备？</strong>如果有，需要先做什么来创造这个条件？</li>
</ul>
</div>
</div>
</div>

<div class="section">
<h2>方向陈述：好 vs 坏</h2>

<table>
<tr><th style="width:50%;color:#c62828;">✗ 坏的方向陈述</th><th style="color:#2e7d32;">✓ 好的方向陈述</th></tr>
<tr><td>"加强跨部门协同"</td><td>"通过建立系统直连，消除运营部与调度部的人工信息传递，将传递延迟从40分钟缩短至5分钟"</td></tr>
<tr><td>"优化培训体系"</td><td>"通过每月一次跨部门复盘会，将当前单向信息流改为双向反馈机制，使调度决策响应时间从4小时缩短至1.5小时"</td></tr>
<tr><td>"提升服务质量"</td><td>"通过重新设计投诉分类规则和处理权限下放，将投诉平均处理时长从3.2天缩短到1天以内"</td></tr>
</table>

<div class="warning"><p><strong>最常见的错误：</strong>使用"加强""优化""提升""完善"等不具体的动词。把这些词删掉，逼迫自己说清楚"具体做什么"。</p></div>
</div>

<div class="section">
<h2>练习：完成你的行动方案</h2>
<div class="exercise">
<div class="exercise-title">突破口行动方案</div>
<table>
<tr><th style="width:120px;"></th><th>内容</th></tr>
<tr><td><strong>突破口名称</strong></td><td></td></tr>
<tr><td><strong>解决方向</strong></td><td>我们要通过____________，改善____________，使____________从____________达到____________。</td></tr>
<tr><td><strong>举措一</strong></td><td><strong>做什么：</strong><br><strong>谁来做：</strong><br><strong>时间节点：</strong><br><strong>成效标准：</strong></td></tr>
<tr><td><strong>举措二</strong></td><td><strong>做什么：</strong><br><strong>谁来做：</strong><br><strong>时间节点：</strong><br><strong>成效标准：</strong></td></tr>
<tr><td><strong>前置条件</strong></td><td>资源：□已有 □需确认<br>权限：□具备 □需争取<br>关键配合方：<br>目前不具备的条件及获取计划：</td></tr>
</table>
</div>
</div>

<div class="section">
<h2>逻辑链验证</h2>
<p><strong>一个有分析依据的行动方案，应该能够从每一个具体举措，一步步追溯回到分析链的起点。</strong></p>

<div class="flow">
<div class="flow-item">体检清单<br><small>某个因素</small></div>
<div class="flow-arrow">→</div>
<div class="flow-item">调研信息<br><small>真实状态</small></div>
<div class="flow-arrow">→</div>
<div class="flow-item">四维分析<br><small>判断</small></div>
<div class="flow-arrow">→</div>
<div class="flow-item">突破口<br><small>选择</small></div>
<div class="flow-arrow">→</div>
<div class="flow-item">解决方向</div>
<div class="flow-arrow">→</div>
<div class="flow-item" style="background:#B8351C;">具体举措</div>
</div>

<div class="tip"><p><strong>区分"有分析依据的行动方案"和"拍脑袋的行动清单"，就看能不能跑通这条逻辑链。</strong></p></div>
</div>
"""
    return get_html("Part 6 | 行动方案 - 信息分析与突破口识别", "第六部分", "行动方案", "把突破口转化为可落地的具体行动", body)

# ===== Appendix: 完整分析路径回顾 =====
def gen_appendix():
    body = """
<div class="section">
<h2>完整分析路径回顾</h2>

<div style="text-align:center;margin:20px 0;">
<div style="display:inline-block;background:#1F3864;color:white;padding:12px 24px;border-radius:8px;margin:4px;">第一部分<br><small style="opacity:0.7;">体检思维</small></div>
<div style="display:inline-block;color:#B8351C;font-size:20px;vertical-align:middle;">→</div>
<div style="display:inline-block;background:#1F3864;color:white;padding:12px 24px;border-radius:8px;margin:4px;">第二部分<br><small style="opacity:0.7;">体检清单</small></div>
<div style="display:inline-block;color:#B8351C;font-size:20px;vertical-align:middle;">→</div>
<div style="display:inline-block;background:#1F3864;color:white;padding:12px 24px;border-radius:8px;margin:4px;">第三部分<br><small style="opacity:0.7;">调研设计</small></div>
<div style="display:inline-block;color:#B8351C;font-size:20px;vertical-align:middle;">→</div>
<div style="display:inline-block;background:#1F3864;color:white;padding:12px 24px;border-radius:8px;margin:4px;">第四部分<br><small style="opacity:0.7;">四维分析</small></div>
<div style="display:inline-block;color:#B8351C;font-size:20px;vertical-align:middle;">→</div>
<div style="display:inline-block;background:#1F3864;color:white;padding:12px 24px;border-radius:8px;margin:4px;">第五部分<br><small style="opacity:0.7;">突破口识别</small></div>
<div style="display:inline-block;color:#B8351C;font-size:20px;vertical-align:middle;">→</div>
<div style="display:inline-block;background:#B8351C;color:white;padding:12px 24px;border-radius:8px;margin:4px;">第六部分<br><small style="opacity:0.7;">行动方案</small></div>
</div>

<table>
<tr><th>部分</th><th>核心产出</th></tr>
<tr><td>第一部分：体检思维</td><td>对分析偏误的清醒认识</td></tr>
<tr><td>第二部分：体检清单</td><td>完整体检清单（覆盖7个维度）</td></tr>
<tr><td>第三部分：调研设计</td><td>调研计划 + 真实信息</td></tr>
<tr><td>第四部分：四维分析</td><td>四维分析表（有调研依据）</td></tr>
<tr><td>第五部分：突破口识别</td><td>2~4个突破口</td></tr>
<tr><td>第六部分：行动方案</td><td>可落地的行动方案</td></tr>
</table>
</div>

<div class="section">
<h2>完整分析文件模板</h2>
<div class="exercise">
<table>
<tr><th style="width:120px;">项目名称</th><td></td></tr>
<tr><th>核心目标</th><td></td></tr>
<tr><th>分析日期</th><td></td></tr>
</table>

<table>
<tr><th colspan="2">A. 体检清单（7维度）</th></tr>
<tr><td style="width:140px;"><span class="dim-tag dim-resource">资源维度</span></td><td></td></tr>
<tr><td><span class="dim-tag dim-process">流程维度</span></td><td></td></tr>
<tr><td><span class="dim-tag dim-ability">能力维度</span></td><td></td></tr>
<tr><td><span class="dim-tag dim-system">系统与工具维度</span></td><td></td></tr>
<tr><td><span class="dim-tag dim-mgmt">管理机制维度</span></td><td></td></tr>
<tr><td><span class="dim-tag dim-external">外部条件维度</span></td><td></td></tr>
<tr><td><span class="dim-tag dim-history">历史遗留维度</span></td><td></td></tr>
</table>

<table>
<tr><th colspan="6">B. 四维分析表</th></tr>
<tr><th>因素</th><th>影响大小</th><th>影响范围</th><th>可动性</th><th>突破可能性</th><th>判断依据</th></tr>
<tr><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td></td><td></td><td></td><td></td><td></td><td></td></tr>
</table>

<table>
<tr><th colspan="3">C. 突破口识别（2~4个）</th></tr>
<tr><th>突破口</th><th>选择依据</th><th>关键配合方</th></tr>
<tr><td></td><td></td><td></td></tr>
<tr><td></td><td></td><td></td></tr>
</table>
</div>
</div>

<div class="section">
<h2>常用问题速查</h2>

<div style="margin-bottom:16px;">
<strong style="color:#B8351C;">Q：体检清单要有多少条才算够？</strong>
<p style="font-size:13px;margin-top:4px;">覆盖5~7个主要维度、每个维度有3~5条具体条目，通常20~35条。条目太少（少于15条）通常意味着有维度被遗漏；条目太多（超过50条）通常意味着条目太细或有重复。</p>
</div>

<div style="margin-bottom:16px;">
<strong style="color:#B8351C;">Q：四维分析里一定要有真实数据吗？可以用估算吗？</strong>
<p style="font-size:13px;margin-top:4px;">影响大小和突破可能性可以做方向性判断，但要有来自调研的依据（访谈信息、类比经验等）。可动性的判断必须有具体依据。</p>
</div>

<div style="margin-bottom:16px;">
<strong style="color:#B8351C;">Q：突破口一定要是"直接可动"的吗？</strong>
<p style="font-size:13px;margin-top:4px;"><strong>不是。</strong>"间接可动"的突破口往往是影响更大、价值更高的方向——只是需要通过影响相关方来推动。不要因为"直接可动"就偏好直接可动的突破口，要基于影响大小来判断。</p>
</div>

<div>
<strong style="color:#B8351C;">Q：如果所有高影响因素都是"当前不可动"的，怎么办？</strong>
<p style="font-size:13px;margin-top:4px;">这种情况相对罕见，通常意味着两种可能：一是课题目标设定需要重新考虑；二是"不可动"的判断太保守，需要重新审视是否有间接推动的可能。建议带给项目组和上级讨论。</p>
</div>
</div>
"""
    return get_html("附录 | 信息分析与突破口识别", "附录", "完整教程结构回顾", "完整分析路径与参考模板", body)

if __name__ == "__main__":
    gen_files = [
        ("01_体检思维.html", gen_part1),
        ("02_体检清单.html", gen_part2),
        ("03_调研设计.html", gen_part3),
        ("04_四维分析.html", gen_part4),
        ("05_突破口识别.html", gen_part5),
        ("06_行动方案.html", gen_part6),
        ("00_课程概览与附录.html", gen_appendix),
    ]
    for fname, gen_fn in gen_files:
        content = gen_fn()
        with open(os.path.join(OUTPUT_DIR, fname), "w", encoding="utf-8") as f:
            f.write(content)
        print(f"Generated {fname}")
    print("\nAll HTML teaching documents generated successfully!")
