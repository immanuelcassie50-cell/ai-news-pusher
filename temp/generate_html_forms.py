#!/usr/bin/env python3
"""Generate HTML print versions for F1-F10 action learning tools"""

import os

OUTPUT_DIR = "D:/新课开发/引导技术/08.行动学习项目运营从单场引导到组织级学习机制/全流程工具表单-html打印版"

HTML_TEMPLATE = '''<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title}</title>
    <style>
        @page {{
            size: A6;
            margin: 5mm;
        }}
        @media print {{
            body {{
                width: 148mm;
                height: 105mm;
                margin: 0;
                padding: 5mm;
                font-size: 9pt;
                line-height: 1.3;
            }}
            .page-break {{ page-break-before: always; }}
            .no-print {{ display: none; }}
        }}
        * {{ box-sizing: border-box; margin: 0; padding: 0; }}
        body {{
            font-family: "Microsoft YaHei", "SimHei", Arial, sans-serif;
            background: #fff;
            color: #333;
            padding: 8px;
        }}
        .header {{
            background: #2c5282;
            color: white;
            padding: 6px 10px;
            margin: -8px -8px 8px -8px;
            font-size: 11pt;
            font-weight: bold;
            text-align: center;
        }}
        .badge {{
            background: #48bb78;
            color: white;
            padding: 2px 6px;
            border-radius: 3px;
            font-size: 7pt;
            display: inline-block;
            margin-bottom: 6px;
        }}
        h1 {{
            font-size: 13pt;
            color: #2c5282;
            margin-bottom: 8px;
            border-bottom: 2px solid #2c5282;
            padding-bottom: 4px;
        }}
        h2 {{
            font-size: 10pt;
            color: #2d3748;
            margin: 8px 0 4px 0;
        }}
        h3 {{
            font-size: 9pt;
            color: #4a5568;
            margin: 6px 0 3px 0;
        }}
        .content-front {{ margin-bottom: 10px; }}
        .content-back {{
            background: #f7fafc;
            padding: 8px;
            margin: 0 -8px -8px -8px;
            border-top: 1px solid #e2e8f0;
        }}
        .level-box {{
            background: #edf2f7;
            border-left: 3px solid #2c5282;
            padding: 5px 8px;
            margin: 5px 0;
            font-size: 8pt;
        }}
        .level-box h3 {{ margin-top: 0; color: #2c5282; }}
        .checklist {{ list-style: none; padding-left: 0; }}
        .checklist li {{ padding: 2px 0; padding-left: 15px; position: relative; font-size: 8pt; }}
        .checklist li:before {{ content: "□"; position: absolute; left: 0; }}
        table {{
            width: 100%;
            border-collapse: collapse;
            font-size: 7pt;
            margin: 5px 0;
        }}
        th, td {{
            border: 1px solid #cbd5e0;
            padding: 3px 5px;
            text-align: left;
        }}
        th {{ background: #2c5282; color: white; }}
        tr:nth-child(even) {{ background: #f7fafc; }}
        .flow-diagram {{
            background: white;
            border: 1px solid #e2e8f0;
            padding: 5px;
            font-family: monospace;
            font-size: 6pt;
            white-space: pre;
            overflow: hidden;
        }}
        .tips {{
            background: #fffbeb;
            border: 1px solid #f59e0b;
            padding: 5px;
            font-size: 7pt;
            margin-top: 8px;
        }}
        .tips::before {{ content: "提示: "; font-weight: bold; color: #b45309; }}
        ul {{ padding-left: 15px; font-size: 8pt; }}
        li {{ margin: 2px 0; }}
    </style>
</head>
<body>
    <div class="header">{header}</div>
    <span class="badge">A6小卡 | 可打印 | 翻转使用</span>

    <div class="content-front">
        {front_content}
    </div>

    <div class="content-back">
        <h2>背面：{back_title}</h2>
        {back_content}
    </div>
</body>
</html>'''

# F1: 项目分级卡
f1_html = HTML_TEMPLATE.format(
    title="F1 行动学习项目分级卡",
    header="F1：行动学习项目分级卡",
    front_content='''
    <h1>三级项目分级标准</h1>

    <div class="level-box">
        <h3>【L1 单场工作坊级】</h3>
        <b>定义：</b>一场1-2天的集中引导，解决一个具体业务问题<br>
        <b>典型特征：</b>问题明确、范围清晰、可在单场内完成<br>
        <b>项目周期：</b>1天-2周
    </div>

    <div class="level-box">
        <h3>【L2 项目跟进级】</h3>
        <b>定义：</b>多场工作坊 + 期间行动执行 + 定期跟进辅导<br>
        <b>典型特征：</b>问题较复杂需分阶段、需行动验证、涉及跨部门<br>
        <b>项目周期：</b>1-3个月
    </div>

    <div class="level-box">
        <h3>【L3 机制建设级】</h3>
        <b>定义：</b>系统性行动学习项目 + 内部引导师培养<br>
        <b>典型特征：</b>涉及组织层面问题、同步培养引导师梯队<br>
        <b>项目周期：</b>6个月-1年+
    </div>
    ''',
    back_title="分级判断流程",
    back_content='''
    <div class="flow-diagram">
这个问题属于哪个级别？
        │
        ▼
┌─────────────────────────────┐
│ 需要跨部门协调吗？           │
└─────────────────────────────┘
    是 ↙       ↘ 否
    ▼              ▼
继续问           继续问
    │              │
    ▼              ▼
需要跟踪      单场能否
验证效果吗？  完成解决？
    │              │
是↙   ↘否    是↙   ↘否
▼         ▼   ▼       ▼
【L2】   【L1】【L1】  继续问
                        │
                        ▼
              需要同步培养引导师？
                        │
                  是↙   ↘否
                  ▼       ▼
              【L3】    【L2】
    </div>
    <div class="tips">分级是为了匹配资源，不是越高越好。L1能解决的不必做成L3。</div>
    '''
)

# F2: 课题来源评估表
f2_html = HTML_TEMPLATE.format(
    title="F2 课题来源评估表",
    header="F2：课题来源评估表",
    front_content='''
    <h1>课题准入六维评估</h1>
    <table>
        <tr><th>维度</th><th>评估要点</th><th>通过标准</th></tr>
        <tr><td>问题可定义性</td><td>问题边界清晰、可描述差距</td><td>能用WSDF完整描述</td></tr>
        <tr><td>业务重要性</td><td>对业务目标影响程度</td><td>与年度重点相关</td></tr>
        <tr><td>利益相关方支持</td><td>发起人支持度、关键部门态度</td><td>至少1位高管支持</td></tr>
        <tr><td>可落地执行性</td><td>方案可控性、资源可行性</td><td>执行主体明确</td></tr>
        <tr><td>学习价值</td><td>对参与者能力提升帮助</td><td>有成长价值</td></tr>
        <tr><td>行动学习适配度</td><td>问题答案未知、需多方协作</td><td>问题开放、有讨论空间</td></tr>
    </table>
    ''',
    back_title="评估决策流程",
    back_content='''
    <div class="flow-diagram">
收到课题申请
        │
        ▼
┌───────────────────┐
│ Step1: 问题可定义性│→不通过：退回重新定义
└───────────────────┘
        │通过
        ▼
┌───────────────────┐
│ Step2: 业务重要性  │→不通过：降级或婉拒
└───────────────────┘
        │通过
        ▼
┌───────────────────┐
│ Step3: 利益相关方  │→不通过：先做利益相关方管理
└───────────────────┘
        │通过
        ▼
┌───────────────────┐
│ Step4: 可落地性    │→不通过：调整项目范围
└───────────────────┘
        │通过
        ▼
    批准立项
    </div>
    <div class="tips">评估是帮助申请者提高成功率，不是刁难。</div>
    '''
)

# F3: 项目启动工作表
f3_html = HTML_TEMPLATE.format(
    title="F3 项目启动工作表",
    header="F3：项目启动工作表",
    front_content='''
    <h1>项目启动 Checklist</h1>
    <p><b>项目名称：</b>________________ <b>级别：</b>□L1 □L2 □L3</p>

    <h3>组织层面</h3>
    <ul class="checklist">
        <li>项目发起人确认</li>
        <li>项目导师确认</li>
        <li>项目组成员名单确定</li>
        <li>角色分工明确</li>
    </ul>

    <h3>课题层面</h3>
    <ul class="checklist">
        <li>课题背景资料已收集</li>
        <li>WSDF问题定义已完成</li>
        <li>课题边界已明确</li>
        <li>成功标准已定义</li>
    </ul>

    <h3>资源层面</h3>
    <ul class="checklist">
        <li>引导师已确认</li>
        <li>场地设备已准备</li>
        <li>预算已审批</li>
    </ul>
    ''',
    back_title="启动会检查流程",
    back_content='''
    <div class="flow-diagram">
项目立项批准
        │
        ▼
┌─────────────────────────┐
│ 启动会准备（提前1周）     │
│ • 确认参会人员           │
│ • 准备问题背景资料       │
│ • 发送启动会邀请         │
└─────────────────────────┘
        │
        ▼
┌─────────────────────────┐
│ 启动会执行（2-4小时）     │
│ • 欢迎与背景介绍         │
│ • 导师致辞（3-5分钟）    │
│ • WSDF确认             │
│ • 角色分工确认          │
└─────────────────────────┘
        │
        ▼
┌─────────────────────────┐
│ 启动会后24小时内         │
│ • 发送会议纪要           │
│ • 确认行动项             │
│ • 下次会议时间确认       │
└─────────────────────────┘
        │
        ▼
   项目正式进入执行阶段
    </div>
    <div class="tips">启动会不是走过场，是项目成功的关键锚点。</div>
    '''
)

# F4: 跟进节奏设计表
f4_html = HTML_TEMPLATE.format(
    title="F4 跟进节奏设计表",
    header="F4：跟进节奏设计表",
    front_content='''
    <h1>跟进节奏设计模板</h1>
    <p><b>项目名称：</b>________________ <b>级别：</b>□L1 □L2 □L3</p>

    <table>
        <tr><th>节点</th><th>时间</th><th>形式</th><th>核心目标</th></tr>
        <tr><td>启动会</td><td>Week 0</td><td>工作坊</td><td>问题定义、角色分工</td></tr>
        <tr><td>第1次跟进</td><td>Week___</td><td>□工作坊 □线上</td><td></td></tr>
        <tr><td>第2次跟进</td><td>Week___</td><td>□工作坊 □线上</td><td></td></tr>
        <tr><td>第3次跟进</td><td>Week___</td><td>□工作坊 □线上</td><td></td></tr>
        <tr><td>结项评审</td><td>Week___</td><td>演示+评审</td><td>成果汇报</td></tr>
    </table>

    <h3>跟进形式选择</h3>
    <table>
        <tr><th>形式</th><th>适用场景</th><th>时长</th></tr>
        <tr><td>集中工作坊</td><td>复杂问题需深度讨论</td><td>2-4小时</td></tr>
        <tr><td>线上跟进</td><td>进度确认轻量沟通</td><td>30-60分钟</td></tr>
        <tr><td>现场走访</td><td>方案落地实地验证</td><td>1-2小时</td></tr>
    </table>
    ''',
    back_title="节奏设计决策框架",
    back_content='''
    <div class="flow-diagram">
L1：单场工作坊
└─ 无需跟进节点，直接结项

L2：项目跟进级
├─ 启动+2-3次跟进+结项
├─ 每次间隔2-4周
└─ 总周期1-3个月

L3：机制建设级
├─ 启动+4-6次跟进+结项
├─ 前期每2周一次
├─ 后期每月一次
└─ 总周期6个月-1年+
    </div>
    <div class="tips">节奏核心是"保持张力"，L2项目每月一次集中跟进是合适节奏。</div>
    '''
)

# F5: 引导师能力评估矩阵
f5_html = HTML_TEMPLATE.format(
    title="F5 引导师能力评估矩阵",
    header="F5：引导师能力评估矩阵",
    front_content='''
    <h1>引导师能力雷达图</h1>
    <p><b>被评估人：</b>__________ <b>评估日期：</b>__________</p>

    <table>
        <tr><th>能力维度</th><th>1待发展</th><th>2基础</th><th>3熟练</th><th>4专家</th></tr>
        <tr><td>问题诊断</td><td>依赖他人</td><td>识别简单</td><td>区分复杂</td><td>处理嵌套</td></tr>
        <tr><td>流程设计</td><td>照搬标准</td><td>微调</td><td>独立设计</td><td>创新方法</td></tr>
        <tr><td>场域构建</td><td>需协助</td><td>维持秩序</td><td>营造氛围</td><td>激发碰撞</td></tr>
        <tr><td>提问技巧</td><td>封闭提问</td><td>开放提问</td><td>追问有深度</td><td>提问即引导</td></tr>
        <tr><td>中立立场</td><td>易被拉偏</td><td>基本中立</td><td>始终中立</td><td>引导自省</td></tr>
        <tr><td>冲突处理</td><td>回避激化</td><td>缓和表面</td><td>化解深层</td><td>转化动力</td></tr>
        <tr><td>成果转化</td><td>散乱无结构</td><td>基本结构</td><td>清晰可落地</td><td>可复制</td></tr>
        <tr><td>学员成长</td><td>不关注</td><td>偶尔反馈</td><td>主动辅导</td><td>设计路径</td></tr>
    </table>

    <p><b>综合评级：</b>8-12分发展期 | 13-20分成长期 | 21-26分成熟期 | 27-32分专家期</p>
    ''',
    back_title="评估流程与反馈",
    back_content='''
    <div class="flow-diagram">
评估前准备
        │
        ▼
┌─────────────────────────┐
│ 确认评估目的             │
│ • 发展性/选拔性/诊断性   │
└─────────────────────────┘
        │
        ▼
┌─────────────────────────┐
│ 选择评估方式             │
│ • 自评/上级评/项目方评   │
│ • 360评                 │
└─────────────────────────┘
        │
        ▼
┌─────────────────────────┐
│ 行为锚定评分             │
│ • 基于具体行为           │
│ • 每项需实例支持         │
└─────────────────────────┘
        │
        ▼
┌─────────────────────────┐
│ 反馈与发展讨论           │
│ • 先肯定优势             │
│ • 共同制定发展计划       │
└─────────────────────────┘
    </div>
    <div class="tips">评估不是为了贴标签，每次评估后应有具体发展行动。</div>
    '''
)

# F6: 引导师发展计划表
f6_html = HTML_TEMPLATE.format(
    title="F6 引导师发展计划表",
    header="F6：引导师发展计划表",
    front_content='''
    <h1>引导师发展路径</h1>
    <p><b>引导师：</b>__________ <b>当前评级：</b>__________ <b>周期：</b>__________至__________</p>

    <table>
        <tr><th>维度</th><th>当前</th><th>目标</th><th>差距</th></tr>
        <tr><td>问题诊断</td><td></td><td></td><td></td></tr>
        <tr><td>流程设计</td><td></td><td></td><td></td></tr>
        <tr><td>场域构建</td><td></td><td></td><td></td></tr>
        <tr><td>提问技巧</td><td></td><td></td><td></td></tr>
    </table>

    <h3>发展路径选择</h3>
    <table>
        <tr><th>路径</th><th>适用</th><th>关键里程碑</th><th>周期</th></tr>
        <tr><td>A快速成长</td><td>有一定基础</td><td>3个L1→带L2</td><td>3-6月</td></tr>
        <tr><td>B稳健发展</td><td>新手/基础弱</td><td>理论→实习→独立</td><td>6-12月</td></tr>
        <tr><td>C专家精长</td><td>成熟引导师</td><td>L3主导→导师</td><td>12-18月</td></tr>
    </table>
    ''',
    back_title="发展计划执行",
    back_content='''
    <div class="flow-diagram">
制定发展计划
        │
        ▼
┌─────────────────────────┐
│ 执行阶段                 │
│ • 参与学习和项目         │
│ • 记录心得和反思         │
│ • 主动寻求反馈           │
└─────────────────────────┘
        │
        ▼
┌─────────────────────────┐
│ 阶段性评估（每季度）      │
│ • 对照目标检查进展       │
│ • 识别偏差原因           │
│ • 调整发展策略           │
└─────────────────────────┘
        │
        ▼
┌─────────────────────────┐
│ 里程碑评审               │
│ • 达到节点时专项评估     │
│ • 通过则进入下一阶段     │
│ • 未通过则调整计划       │
└─────────────────────────┘
        │
        ▼
    持续循环直到达成目标
    </div>
    <div class="tips">发展计划需定期（每季度）回顾调整，引导师成长是动态的。</div>
    '''
)

# F7: 成果沉淀模板
f7_html = HTML_TEMPLATE.format(
    title="F7 成果沉淀模板",
    header="F7：成果沉淀模板",
    front_content='''
    <h1>成果沉淀标准格式</h1>
    <p><b>项目：</b>________________ <b>日期：</b>__________ <b>沉淀人：</b>__________</p>

    <h3>问题定义（WSDF）</h3>
    <ul>
        <li><b>What：</b></li>
        <li><b>Situation：</b></li>
        <li><b>Degree：</b></li>
        <li><b>Frequency：</b></li>
    </ul>

    <h3>根因分析（五问法）</h3>
    <ul>
        <li>Q1: 为什么重要？→</li>
        <li>Q2: 根本原因？→</li>
        <li>Q3: 为什么有这个原因？→</li>
        <li>Q4: 更深层原因？→</li>
        <li>Q5: 系统因素？</li>
    </ul>

    <h3>解决方案（FAR评估）</h3>
    <table>
        <tr><th>维度</th><th>评估</th></tr>
        <tr><td>F可行性</td><td></td></tr>
        <tr><td>A可接受性</td><td></td></tr>
        <tr><td>R风险</td><td></td></tr>
    </table>
    ''',
    back_title="成果应用指引",
    back_content='''
    <div class="flow-diagram">
成果沉淀后应用路径：

个人应用
├─ 复盘反思，固化经验
├─ 形成个人方法论
└─ 指导后续类似项目

团队应用
├─ 内部分享，经验传承
├─ 作为参考案例
└─ 纳入团队知识库

组织应用
├─ 纳入企业大学案例库
├─ 纳入标准化流程
└─ 复制到其他部门
    </div>

    <div class="tips">成果沉淀是知识管理核心动作，好成果让后来者可学习借鉴。</div>
    '''
)

# F8: 知识沉淀评估表
f8_html = HTML_TEMPLATE.format(
    title="F8 知识沉淀评估表",
    header="F8：知识沉淀评估表",
    front_content='''
    <h1>知识沉淀质量评估</h1>
    <p><b>成果：</b>________________ <b>评估人：</b>__________</p>

    <table>
        <tr><th>评估维度</th><th>权重</th><th>评估要点</th></tr>
        <tr><td>完整性</td><td>20%</td><td>WSDF四要素、根因分析、实施验证</td></tr>
        <tr><td>准确性</td><td>20%</td><td>描述准确、有事实依据、数据可信</td></tr>
        <tr><td>实用性</td><td>25%</td><td>方案可落地、他人可复制、有操作性</td></tr>
        <tr><td>创新性</td><td>15%</td><td>独特解决思路、可推广方法论</td></tr>
        <tr><td>可读性</td><td>10%</td><td>表达清晰、结构合理</td></tr>
        <tr><td>可追溯性</td><td>10%</td><td>过程记录完整、逻辑清晰</td></tr>
    </table>

    <h3>分项评分</h3>
    <p>总分：______ /100分</p>
    <p><b>综合评级：</b>□卓越(90+) □良好(75-89) □合格(60-74) □待改进(<60)</p>
    ''',
    back_title="评估流程与反馈",
    back_content='''
    <div class="flow-diagram">
成果提交
        │
        ▼
┌─────────────────────────┐
│ 形式审查                 │
│ • 是否使用标准模板       │
│ • 必填项是否完整         │
└─────────────────────────┘
        │通过
        ▼
┌─────────────────────────┐
│ 实质评审                 │
│ • 六维度逐项评分         │
│ • 给出得分和说明         │
│ • 形成综合评级           │
└─────────────────────────┘
        │
        ▼
┌─────────────────────────┐
│ 反馈与跟踪               │
│ • 反馈给沉淀人           │
│ • 优秀案例予以表彰       │
│ • 待改进提供改进指导     │
└─────────────────────────┘
    </div>
    <div class="tips">评估是为提升质量，不是卡人。待改进需给具体改进建议。</div>
    '''
)

# F9: 运营机制检查清单
f9_html = HTML_TEMPLATE.format(
    title="F9 运营机制检查清单",
    header="F9：运营机制检查清单",
    front_content='''
    <h1>运营体系完整检查</h1>
    <p><b>被检查：</b>________________ <b>检查人：</b>__________</p>

    <h3>战略层（5项）</h3>
    <ul class="checklist">
        <li>行动学习在战略中有明确位置</li>
        <li>与年度人才培养计划衔接</li>
        <li>高层对价值有共识</li>
        <li>有明确政策或管理办法</li>
    </ul>

    <h3>组织层（4项）</h3>
    <ul class="checklist">
        <li>有明确管理部门或负责人</li>
        <li>内部引导师梯队已建立（2名+）</li>
        <li>引导师有职责和发展通道</li>
        <li>项目管理有明确分工</li>
    </ul>

    <h3>项目层（6项）</h3>
    <ul class="checklist">
        <li>课题来源机制稳定</li>
        <li>课题评估有标准流程</li>
        <li>项目分级有明确标准</li>
        <li>启动/跟进/沉淀有标准化工具</li>
    </ul>
    ''',
    back_title="检查结果与改进计划",
    back_content='''
    <div class="flow-diagram">
成熟度评级：

初始级：5项以下达标
└─ 先建立基础流程，从项目层开始

发展级：5-10项达标
└─ 补齐短板，重点突破

规范级：11-15项达标
└─ 优化细节，提升质量

卓越级：16-20项达标
└─ 持续创新，输出方法论
    </div>

    <div class="tips">建议每半年进行一次系统评估，持续跟踪成熟度。</div>
    '''
)

# F10: 项目台账（Excel说明页）
f10_html = HTML_TEMPLATE.format(
    title="F10 行动学习项目台账",
    header="F10：行动学习项目台账",
    front_content='''
    <h1>Excel台账说明</h1>
    <p>本工具为Excel工作簿，包含以下工作表：</p>

    <h3>工作表清单</h3>
    <table>
        <tr><th>工作表</th><th>用途</th></tr>
        <tr><td>行动学习项目台账</td><td>管理所有项目主数据</td></tr>
        <tr><td>课题来源追踪</td><td>追踪课题申请到分配全过程</td></tr>
        <tr><td>引导师管理</td><td>管理引导师信息和项目记录</td></tr>
        <tr><td>成果库索引</td><td>索引所有沉淀成果</td></tr>
        <tr><td>数据看板</td><td>自动统计关键指标</td></tr>
    </table>

    <h3>主要字段</h3>
    <ul>
        <li>项目编号、项目名称、项目级别</li>
        <li>课题来源、发起部门、引导师</li>
        <li>启动/结项日期、项目状态</li>
        <li>跟进次数、参与人数、成果沉淀</li>
        <li>业务价值、备注</li>
    </ul>
    ''',
    back_title="使用说明",
    back_content='''
    <div class="flow-diagram">
台账使用流程：

项目立项后
├─ 在"项目台账"录入项目信息
├─ 在"课题来源追踪"更新申请状态
└─ 项目进行中定期更新进度

项目结项后
├─ 更新台账中的结项信息
├─ 在"成果库索引"登记成果
└─ 在"引导师管理"更新项目数量

数据看板
└─ 自动统计项目数量、状态等指标
    </div>

    <div class="tips">台账是运营管理的核心工具，需指定专人维护和更新。</div>
    '''
)

# Write all HTML files
files = [
    ("F1_行动学习项目分级卡.html", f1_html),
    ("F2_课题来源评估表.html", f2_html),
    ("F3_项目启动工作表.html", f3_html),
    ("F4_跟进节奏设计表.html", f4_html),
    ("F5_引导师能力评估矩阵.html", f5_html),
    ("F6_引导师发展计划表.html", f6_html),
    ("F7_成果沉淀模板.html", f7_html),
    ("F8_知识沉淀评估表.html", f8_html),
    ("F9_运营机制检查清单.html", f9_html),
    ("F10_行动学习项目台账.html", f10_html),
]

for filename, content in files:
    filepath = os.path.join(OUTPUT_DIR, filename)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Generated: {filename}")

print("\nAll HTML files generated successfully!")
