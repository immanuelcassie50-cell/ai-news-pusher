ch3_html = '''
<!-- ===== CHAPTER 3 ===== -->
<div class="chapter" id="ch3">
<div class="chapter-header">
  <div class="chapter-label">第二层：经营分析技术</div>
  <h2 class="chapter-title">第三章　习惯 3：优势锚定</h2>
  <div class="chapter-subtitle">读懂关键经营指标——毛利率、周转率、现金转换周期</div>
</div>

<blockquote class="chapter-quote">"不会看指标的管理者，就像蒙着眼睛开车——知道在动，但不知道开向哪里。"<br><span class="quote-attr">—— 经营分析箴言</span></blockquote>

<div class="chapter-goals">
  <div class="goals-title">&#127919; 本章学习目标</div>
  <ol class="goals-list">
    <li>掌握毛利率、净资产收益率（ROE）、周转率、现金转换周期四大指标的计算逻辑</li>
    <li>能够用指标解读业务现状，而不是只会背公式</li>
    <li>理解指标之间的关联——为什么看指标要看"一组"而不是"一个"</li>
  </ol>
</div>

<div class="content-nav">
  <div class="nav-title">&#128506; 内容导航</div>
  <div class="nav-items">本章包含 <strong>3 个核心概念</strong>、<strong>2 个互动表单</strong>、<strong>3 道练习</strong></div>
</div>

<!-- KNOWLEDGE POINT 3.1 -->
<div class="kp">
  <div class="kp-title">知识点 3.1：毛利率——"这是生意的底线"</div>

  <div class="formula-box">
    <div class="formula">毛利率 = (营业收入 - 营业成本) / 营业收入 × 100%</div>
    <div class="formula-desc">毛利率反映的是：每卖 100 元钱的东西，你能留下多少来覆盖费用和盈利</div>
  </div>

  <div class="case-study">
    <div class="case-title">&#128194; 案例：两家奶茶店的对比</div>
    <div class="case-table">
      <div class="case-table-header">
        <div></div>
        <div>门店 A</div>
        <div>门店 B</div>
      </div>
      <div class="case-table-row">
        <div>月营收</div><div>28 万</div><div>22 万</div>
      </div>
      <div class="case-table-row">
        <div>营业成本</div><div>11.2 万</div><div>6.6 万</div>
      </div>
      <div class="case-table-row">
        <div>毛利润</div><div>16.8 万</div><div>15.4 万</div>
      </div>
      <div class="case-table-row">
        <div>毛利率</div><div>60%</div><div>70%</div>
      </div>
    </div>
    <div class="case-insight">
      <strong>洞察：</strong>门店 A 营收更高，但门店 B 毛利率更高。这意味着 B 更擅长控制成本，或者产品定价更有空间。如果 B 能把营收做到和 A 一样，它的利润将远超 A。
    </div>
  </div>

  <div class="key-insight">
    <div class="key-insight-icon">&#128161;</div>
    <div class="key-insight-text"><strong>核心洞见：</strong>毛利率是"生意的底线"。如果毛利率低于行业水平，说明你的成本控制或定价能力出了问题。如果毛利率持续下降，说明你的竞争力在削弱——要么成本上涨、要么被迫降价、要么产品结构出了问题。</div>
  </div>
</div>

<!-- KNOWLEDGE POINT 3.2 -->
<div class="kp">
  <div class="kp-title">知识点 3.2：周转率——"这是速度的战场"</div>

  <div class="kp-lead">周转率衡量的是资产的使用效率——投入的资产，能在一年内转动多少次、产生多少收入。</div>

  <div class="indicator-cards">
    <div class="indicator-card">
      <div class="ic-title">存货周转率</div>
      <div class="ic-formula">营业成本 / 平均存货</div>
      <div class="ic-meaning">存货转了几次？次数越高，说明卖得越快</div>
      <div class="ic-example">例：周转率 6 次 = 存货平均 60 天卖完一次</div>
    </div>
    <div class="indicator-card">
      <div class="ic-title">应收账款周转率</div>
      <div class="ic-formula">营业收入 / 平均应收账款</div>
      <div class="ic-meaning">钱多久能收回来？次数越高，说明回款越快</div>
      <div class="ic-example">例：周转率 8 次 = 平均 45 天回款一次</div>
    </div>
    <div class="indicator-card">
      <div class="ic-title">总资产周转率</div>
      <div class="ic-formula">营业收入 / 平均总资产</div>
      <div class="ic-meaning">总资产一年能创造几次收入？</div>
      <div class="ic-example">例：周转率 1.5 次 = 投入 1 元一年产生 1.5 元收入</div>
    </div>
  </div>

  <div class="key-insight">
    <div class="key-insight-icon">&#128161;</div>
    <div class="key-insight-text"><strong>核心洞见：</strong>周转率是"速度"的游戏。同样的资产，转得越快，赚得越多。同样 100 万的存货，A 公司一年转 4 次（卖 400 万），B 公司一年转 8 次（卖 800 万）——B 公司的资产效率是 A 公司的两倍，这就是运营能力的差距。</div>
  </div>
</div>

<!-- KNOWLEDGE POINT 3.3 -->
<div class="kp">
  <div class="kp-title">知识点 3.3：现金转换周期——"这是生死线"</div>

  <div class="kp-lead">现金转换周期（Cash Conversion Cycle, CCC）是最能反映企业经营效率的核心指标。</div>

  <div class="formula-box">
    <div class="formula">CCC = 存货周转天数 + 应收账款周转天数 - 应付账款周转天数</div>
    <div class="formula-desc">你从付款给供应商，到收到客户货款，中间需要垫付多少天的资金</div>
  </div>

  <div class="ccc-diagram">
    <div class="ccc-step">
      <div class="ccc-num">1</div>
      <div class="ccc-content">
        <div class="ccc-title">买原料，付供应商</div>
        <div class="ccc-desc">应付账款周转天数（你拖供应商的天数）</div>
      </div>
    </div>
    <div class="ccc-plus">+</div>
    <div class="ccc-step">
      <div class="ccc-num">2</div>
      <div class="ccc-content">
        <div class="ccc-title">生产，存成品</div>
        <div class="ccc-desc">存货周转天数（东西在仓库待多久）</div>
      </div>
    </div>
    <div class="ccc-plus">+</div>
    <div class="ccc-step">
      <div class="ccc-num">3</div>
      <div class="ccc-content">
        <div class="ccc-title">卖货，等回款</div>
        <div class="ccc-desc">应收账款周转天数（客户欠你多久）</div>
      </div>
    </div>
    <div class="ccc-equals">=</div>
    <div class="ccc-result">
      <div class="ccc-result-title">CCC</div>
      <div class="ccc-result-desc">你真正需要垫资的天数</div>
    </div>
  </div>

  <div class="verdict-box">
    <div class="verdict-title">CCC 的解读逻辑：</div>
    <div class="verdict-items">
      <div class="verdict-item"><span class="vcheck">&#10003;</span> CCC 越短越好 → 资金周转越快，需要的运营资金越少</div>
      <div class="verdict-item"><span class="vcheck">&#10003;</span> CCC 为负数最好 → 应付账款天数 > 存货+应收账款天数，你是在用供应商的钱做生意</div>
      <div class="verdict-item"><span class="vdanger">&#10007;</span> CCC 越来越长 → 资金被套在库存和应收账款里，经营风险在积累</div>
    </div>
  </div>
</div>

<!-- FORM 3.1 -->
<div class="form-block">
  <div class="form-header">
    <div class="form-num">表单 3.1</div>
    <div class="form-title">关键指标计算与分析表</div>
  </div>

  <div class="form-intro-sm">
    <strong>填写说明：</strong>找一个你熟悉的企业数据，计算并分析这些指标。
  </div>

  <div class="form-table">
    <div class="form-table-row">
      <div class="form-table-label">该企业的毛利率是多少？与行业平均比如何？</div>
      <div class="form-table-input"></div>
    </div>
    <div class="form-table-row">
      <div class="form-table-label">该企业的存货周转天数大约是多少天？</div>
      <div class="form-table-input"></div>
    </div>
    <div class="form-table-row">
      <div class="form-table-label">该企业的应收账款周转天数大约是多少天？</div>
      <div class="form-table-input"></div>
    </div>
    <div class="form-table-row">
      <div class="form-table-label">该企业的现金转换周期（CCC）大约是多少天？</div>
      <div class="form-table-input"></div>
    </div>
    <div class="form-table-row">
      <div class="form-table-label">基于以上指标，你的综合判断是？</div>
      <div class="form-table-input"></div>
    </div>
  </div>
</div>

<!-- FORM 3.2 -->
<div class="form-block">
  <div class="form-header">
    <div class="form-num">表单 3.2</div>
    <div class="form-title">场景卡指标分析</div>
  </div>

  <div class="form-intro-sm">
    <strong>填写说明：</strong>用你场景卡中的任务，找出它最相关的 3 个经营指标。
  </div>

  <div class="form-table">
    <div class="form-table-row">
      <div class="form-table-label">这个任务主要影响哪个"率"？（毛利率/周转率/现金转换周期）</div>
      <div class="form-table-input"></div>
    </div>
    <div class="form-table-row">
      <div class="form-table-label">该指标当前的水平是多少？</div>
      <div class="form-table-input"></div>
    </div>
    <div class="form-table-row">
      <div class="form-table-label">如果这个指标改善 10%，对整体利润有什么影响？</div>
      <div class="form-table-input"></div>
    </div>
    <div class="form-table-row">
      <div class="form-table-label">改善这个指标，最可能的路径是什么？</div>
      <div class="form-table-input"></div>
    </div>
  </div>
</div>

<!-- EXERCISES -->
<div class="exercises">
  <div class="exercises-title">&#128221; 本章练习</div>

  <div class="exercise">
    <div class="exercise-header">
      <span class="exercise-label">练习 3-A（基础）</span>
      <span class="exercise-type">指标计算</span>
    </div>
    <p>某公司年营业收入 1000 万元，营业成本 600 万元，平均存货 100 万元，平均应收账款 80 万元，平均应付账款 60 万元。计算：</p>
    <div class="exercise-ques">
      <p>毛利率：__________</p>
      <p>存货周转天数（假设一年 360 天）：__________</p>
      <p>应收账款周转天数（假设一年 360 天）：__________</p>
      <p>现金转换周期（CCC）：__________</p>
    </div>
  </div>

  <div class="exercise">
    <div class="exercise-header">
      <span class="exercise-label">练习 3-B（应用）</span>
      <span class="exercise-type">指标诊断</span>
    </div>
    <p>门店 A 和门店 B 的数据如下，哪个门店的经营质量更高？为什么？</p>
    <div class="case-table" style="margin: 16px 0;">
      <div class="case-table-header"><div>指标</div><div>门店 A</div><div>门店 B</div></div>
      <div class="case-table-row"><div>毛利率</div><div>55%</div><div>62%</div></div>
      <div class="case-table-row"><div>存货周转天数</div><div>30 天</div><div>50 天</div></div>
      <div class="case-table-row"><div>应收账款周转天数</div><div>15 天</div><div>45 天</div></div>
    </div>
    <div class="exercise-answer-lines">
      <div class="answer-line"></div>
    </div>
  </div>

  <div class="exercise">
    <div class="exercise-header">
      <span class="exercise-label">练习 3-C（拓展）</span>
      <span class="exercise-type">场景应用</span>
    </div>
    <p>从你的场景卡出发，选择一个最关键的经营指标，计算你当前的水平，并制定一个改善目标。</p>
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
习惯 3：优势锚定
│
├── 毛利率
│   ├── 公式：(收入-成本)/收入
│   └── 意义：生意的底线，竞争能力的体现
│
├── 周转率体系
│   ├── 存货周转率：卖得快不快
│   ├── 应收账款周转率：钱回得快不快
│   └── 总资产周转率：资产用得效率高不高
│
└── 现金转换周期（CCC）
    ├── 公式：存货天数+应收账款天数-应付账款天数
    └── 意义：垫资天数越短越好，负数最佳
  </pre>
</div>

<div class="chapter-promise">
  <div class="promise-title">本章行为承诺：</div>
  <div class="promise-content">
    从今天起，我承诺每月跟踪我所在部门的<br>
    三个关键经营指标：_______________<br><br>
    签名：________________　日期：________________
  </div>
</div>

</div>
'''

with open('D:/新课开发/管理学/30-财务经营思维/学员手册/学员手册_财务经营思维.html', 'a', encoding='utf-8') as f:
    f.write(ch3_html)

print("Chapter 3 written")
