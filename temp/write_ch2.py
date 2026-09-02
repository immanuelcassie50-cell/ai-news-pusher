ch2_html = '''
<!-- ===== CHAPTER 2 ===== -->
<div class="chapter" id="ch2">
<div class="chapter-header">
  <div class="chapter-label">第一层：经营思维基础</div>
  <h2 class="chapter-title">第二章　习惯 2：意图先行</h2>
  <div class="chapter-subtitle">带着问题读报表——三张报表的底层逻辑</div>
</div>

<blockquote class="chapter-quote">"利润是数字游戏，现金是生死之战。"<br><span class="quote-attr">—— 经营管理箴言</span></blockquote>

<div class="chapter-goals">
  <div class="goals-title">&#127919; 本章学习目标</div>
  <ol class="goals-list">
    <li>理解资产负债表、利润表、现金流量表三张报表的核心逻辑</li>
    <li>掌握三张报表之间的内在联系与互相验证关系</li>
    <li>能够用自己的语言解释"为什么看报表要先看现金流量表"</li>
  </ol>
</div>

<div class="content-nav">
  <div class="nav-title">&#128506; 内容导航</div>
  <div class="nav-items">本章包含 <strong>3 个核心概念</strong>、<strong>2 个互动表单</strong>、<strong>3 道练习</strong></div>
</div>

<!-- KNOWLEDGE POINT 2.1 -->
<div class="kp">
  <div class="kp-title">知识点 2.1：资产负债表——"这是一张快照"</div>

  <div class="kp-lead">资产负债表展示的是一个瞬间——此时此刻，你的资产、负债、所有者权益各是多少。</div>

  <div class="formula-box">
    <div class="formula">资产 = 负债 + 所有者权益</div>
    <div class="formula-desc">这个等式告诉我们：你的钱从哪里来（负债 + 权益），你的钱到哪里去（资产）</div>
  </div>

  <div class="three-col">
    <div class="three-col-item">
      <div class="tci-header">资产</div>
      <div class="tci-subheader">钱到哪里去</div>
      <div class="tci-content">
        <p>流动资产：现金、应收账款、存货</p>
        <p>非流动资产：固定资产、无形资产、长期投资</p>
      </div>
      <div class="tci-question">我的资产质量高吗？哪些是"僵死资产"？</div>
    </div>
    <div class="three-col-item">
      <div class="tci-header">负债</div>
      <div class="tci-subheader">钱从哪里来（借来的）</div>
      <div class="tci-content">
        <p>流动负债：应付账款、短期借款</p>
        <p>长期负债：长期借款、债券</p>
      </div>
      <div class="tci-question">我的负债结构健康吗？短期偿债压力大吗？</div>
    </div>
    <div class="three-col-item">
      <div class="tci-header">权益</div>
      <div class="tci-subheader">钱从哪里来（自己的）</div>
      <div class="tci-content">
        <p>实收资本、资本公积</p>
        <p>未分配利润、盈余公积</p>
      </div>
      <div class="tci-question">我的股东回报水平如何？</div>
    </div>
  </div>

  <div class="key-insight">
    <div class="key-insight-icon">&#128161;</div>
    <div class="key-insight-text"><strong>核心洞见：</strong>资产负债表的核心问题是"家底厚不厚"。一个资产规模大但负债率高的企业，和一个资产规模小但负债率低的企业，哪个更健康？不能只看数字，要看结构。</div>
  </div>
</div>

<!-- KNOWLEDGE POINT 2.2 -->
<div class="kp">
  <div class="kp-title">知识点 2.2：利润表——"这是一场演出"</div>

  <div class="kp-lead">利润表展示的是一段时间内，你的收入、成本、费用、利润分别是多少。</div>

  <div class="formula-box">
    <div class="formula">收入 - 成本 - 费用 = 利润</div>
    <div class="formula-desc">但注意：利润表用的是"权责发生制"——签了合同就算收入，不一定收到了现金</div>
  </div>

  <div class="profit-structure">
    <div class="ps-item ps-revenue">
      <div class="ps-label">营业收入</div>
      <div class="ps-desc">卖了什么、卖了多少钱</div>
    </div>
    <div class="ps-minus">-</div>
    <div class="ps-item ps-cost">
      <div class="ps-label">营业成本</div>
      <div class="ps-desc">直接材料和人工</div>
    </div>
    <div class="ps-equals">=</div>
    <div class="ps-item ps-gross">
      <div class="ps-label">毛利润</div>
      <div class="ps-desc">毛利率 = 毛利润 / 营业收入</div>
    </div>
    <div class="ps-minus">-</div>
    <div class="ps-item ps-expense">
      <div class="ps-label">期间费用</div>
      <div class="ps-desc">销售费用 + 管理费用 + 财务费用</div>
    </div>
    <div class="ps-equals">=</div>
    <div class="ps-item ps-net">
      <div class="ps-label">净利润</div>
      <div class="ps-desc">最终赚了多少钱</div>
    </div>
  </div>

  <div class="key-insight">
    <div class="key-insight-icon">&#9888;</div>
    <div class="key-insight-text"><strong>重要警示：</strong>利润表最大的陷阱是"有利润但没钱"。签了合同算收入，但款项可能一年后才收到；卖了货确认收入，但客户可能永远不付款。利润是"意见"，现金流是"事实"——这就是为什么要同时看利润表和现金流量表。</div>
  </div>
</div>

<!-- KNOWLEDGE POINT 2.3 -->
<div class="kp">
  <div class="kp-title">知识点 2.3：现金流量表——"这是真相时刻"</div>

  <div class="kp-lead">现金流量表展示的是一段时间内，你的现金流入和现金流出分别是多少。</div>

  <div class="cash-flow-sections">
    <div class="cfs-item">
      <div class="cfs-header">经营活动现金流</div>
      <div class="cfs-desc">主营业务带来的现金进出</div>
      <div class="cfs-question">卖货收到的钱 > 采购付出的钱？</div>
    </div>
    <div class="cfs-item">
      <div class="cfs-header">投资活动现金流</div>
      <div class="cfs-desc">买设备、投项目带来的现金进出</div>
      <div class="cfs-question">在建工程、对外投资是否过大？</div>
    </div>
    <div class="cfs-item">
      <div class="cfs-header">筹资活动现金流</div>
      <div class="cfs-desc">借钱、还钱、分红带来的现金进出</div>
      <div class="cfs-question">银行借款是增加还是减少？</div>
    </div>
  </div>

  <div class="key-insight">
    <div class="key-insight-icon">&#128161;</div>
    <div class="key-insight-text"><strong>核心洞见：</strong>现金流量表是企业的"体检报告"。一个企业可以暂时亏损（利润表不好看），但只要现金流不断，它就能活下去。但现金流断裂，再高的利润也只是"纸面富贵"。这就是为什么很多企业"账面上有利润，但银行里没钱"——这不是财务造假，是财务的基本规律。</div>
  </div>
</div>

<!-- KNOWLEDGE POINT 2.4 -->
<div class="kp">
  <div class="kp-title">知识点 2.4：三张报表的内在联系</div>

  <div class="kp-lead">三张报表不是孤立的，它们之间有严密的内在逻辑关系——</div>

  <div class="report-relationship">
    <div class="rr-item">
      <div class="rr-box rr-balance">资产负债表</div>
      <div class="rr-arrow">&#8596;</div>
      <div class="rr-box rr-profit">利润表</div>
      <div class="rr-arrow">&#8596;</div>
      <div class="rr-box rr-cash">现金流量表</div>
    </div>
    <div class="rr-labels">
      <div class="rr-label">利润表累计的净利润 → 流入未分配利润 → 影响资产负债表权益</div>
      <div class="rr-label">净利润 + 应收应付变化 → 经营活动现金流（间接法）</div>
      <div class="rr-label">固定资产折旧 → 减少利润但不减少现金 → 影响现金流</div>
    </div>
  </div>

  <div class="verdict-box">
    <div class="verdict-title">判断一家企业健康度的快速方法：</div>
    <div class="verdict-items">
      <div class="verdict-item"><span class="vcheck">&#10003;</span> 经营现金流 > 净利润 → 利润质量高（钱真的回来了）</div>
      <div class="verdict-item"><span class="vcheck">&#10003;</span> 经营现金流 > 0 → 主业能自己造血</div>
      <div class="verdict-item"><span class="vcheck">&#10003;</span> 资产负债率适中（因行业而异） → 财务杠杆健康</div>
    </div>
  </div>
</div>

<!-- FORM 2.1 -->
<div class="form-block">
  <div class="form-header">
    <div class="form-num">表单 2.1</div>
    <div class="form-title">三表联动分析表</div>
  </div>

  <div class="form-intro-sm">
    <strong>填写说明：</strong>找一个你熟悉的企业（可以是你所在公司、上市公司、竞争对手），尝试完成这张表。
  </div>

  <div class="form-table">
    <div class="form-table-row">
      <div class="form-table-label">这家公司最近一期的净利润是多少？</div>
      <div class="form-table-input"></div>
    </div>
    <div class="form-table-row">
      <div class="form-table-label">同一时期的经营活动现金流是多少？</div>
      <div class="form-table-input"></div>
    </div>
    <div class="form-table-row">
      <div class="form-table-label">两者相比，你发现了什么？（利润质量如何）</div>
      <div class="form-table-input"></div>
    </div>
    <div class="form-table-row">
      <div class="form-table-label">这家公司的资产负债率大概是多少？</div>
      <div class="form-table-input"></div>
    </div>
    <div class="form-table-row">
      <div class="form-table-label">基于以上分析，你对这家公司财务健康度的判断是？</div>
      <div class="form-table-input"></div>
    </div>
  </div>
</div>

<!-- FORM 2.2 -->
<div class="form-block">
  <div class="form-header">
    <div class="form-num">表单 2.2</div>
    <div class="form-title">场景卡三表画像</div>
  </div>

  <div class="form-intro-sm">
    <strong>填写说明：</strong>用你场景卡中的任务，想象它背后涉及的三张报表关键科目。
  </div>

  <div class="form-table">
    <div class="form-table-row">
      <div class="form-table-label">这个任务主要影响资产负债表哪些科目？</div>
      <div class="form-table-input"></div>
    </div>
    <div class="form-table-row">
      <div class="form-table-label">这个任务如何影响收入和成本？（利润表）</div>
      <div class="form-table-input"></div>
    </div>
    <div class="form-table-row">
      <div class="form-table-label">这个任务对现金流有什么影响？</div>
      <div class="form-table-input"></div>
    </div>
    <div class="form-table-row">
      <div class="form-table-label">三者联系起来，你的综合判断是？</div>
      <div class="form-table-input"></div>
    </div>
  </div>
</div>

<!-- EXERCISES -->
<div class="exercises">
  <div class="exercises-title">&#128221; 本章练习</div>

  <div class="exercise">
    <div class="exercise-header">
      <span class="exercise-label">练习 2-A（基础）</span>
      <span class="exercise-type">报表连线</span>
    </div>
    <p>将以下描述与对应的报表类型连线：</p>
    <div class="exercise-ques">
      <p>"我们今年赚了 500 万" → （　　　）</p>
      <p>"我们账上还有 200 万现金" → （　　　）</p>
      <p>"我们总资产 3000 万，负债 1800 万" → （　　　）</p>
      <p>"我们今年收到了 600 万现金，但付了 400 万出去" → （　　　）</p>
    </div>
    <div class="连线题选项">利润表 / 资产负债表 / 现金流量表</div>
  </div>

  <div class="exercise">
    <div class="exercise-header">
      <span class="exercise-label">练习 2-B（应用）</span>
      <span class="exercise-type">利润质量判断</span>
    </div>
    <p>某公司年报显示：净利润 800 万元，但经营活动现金流为 -200 万元。请分析这种情况的可能原因，并判断这家公司的利润质量。</p>
    <div class="exercise-answer-lines">
      <div class="answer-line"></div>
      <div class="answer-line"></div>
      <div class="answer-line"></div>
    </div>
  </div>

  <div class="exercise">
    <div class="exercise-header">
      <span class="exercise-label">练习 2-C（拓展）</span>
      <span class="exercise-type">三表预测</span>
    </div>
    <p>如果你是老板，看到以下组合，请判断哪种情况更危险，并说明理由：</p>
    <div class="exercise-ques">
      <p>A. 净利润高 + 经营活动现金流低</p>
      <p>B. 净利润低 + 经营活动现金流高</p>
    </div>
    <div class="exercise-answer-lines">
      <div class="answer-line"></div>
      <div class="answer-line"></div>
    </div>
  </div>
</div>

<!-- KNOWLEDGE FRAMEWORK -->
<div class="kp-framework">
  <div class="framework-title">&#10003; 本章知识框架</div>
  <pre class="framework-pre">
习惯 2：意图先行
│
├── 资产负债表
│   ├── 核心等式：资产 = 负债 + 权益
│   ├── 反映：某一时点的"家底"
│   └── 关键问题：资产质量、负债结构
│
├── 利润表
│   ├── 核心等式：收入 - 成本 - 费用 = 利润
│   ├── 反映：一段时期的"演出成绩"
│   └── 关键问题：权责发生制 ≠ 现金
│
└── 现金流量表
    ├── 三类活动：经营 / 投资 / 筹资
    ├── 反映：实际的"生死之战"
    └── 关键问题：经营现金流 > 0 是底线
  </pre>
</div>

<div class="chapter-promise">
  <div class="promise-title">本章行为承诺：</div>
  <div class="promise-content">
    从今天起，在我看到任何财务数据时，<br>
    我承诺先问：现金流怎么样？<br><br>
    我将从这个数据开始验证：_________________________________<br><br>
    签名：________________　日期：________________
  </div>
</div>

</div>
'''

with open('D:/新课开发/管理学/30-财务经营思维/学员手册/学员手册_财务经营思维.html', 'a', encoding='utf-8') as f:
    f.write(ch2_html)

print("Chapter 2 written")
