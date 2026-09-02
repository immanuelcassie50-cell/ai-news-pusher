ch5_html = '''
<!-- ===== CHAPTER 5 ===== -->
<div class="chapter" id="ch5">
<div class="chapter-header">
  <div class="chapter-label">第二层：经营分析技术</div>
  <h2 class="chapter-title">第五章　习惯 5：迭代精进</h2>
  <div class="chapter-subtitle">现金为王——识别经营风险信号</div>
</div>

<blockquote class="chapter-quote">"企业死亡的第一原因是什么？不是亏损，是现金流断裂。"<br><span class="quote-attr">—— 全球企业破产统计数据</span></blockquote>

<div class="chapter-goals">
  <div class="goals-title">&#127919; 本章学习目标</div>
  <ol class="goals-list">
    <li>识别常见的经营风险信号，尤其是现金流相关的预警信号</li>
    <li>理解"现金为王"的真正含义——为什么利润是虚的，现金流是实的</li>
    <li>掌握用财务指标组合判断企业经营健康度的方法</li>
  </ol>
</div>

<div class="content-nav">
  <div class="nav-title">&#128506; 内容导航</div>
  <div class="nav-items">本章包含 <strong>3 个核心概念</strong>、<strong>2 个互动表单</strong>、<strong>3 道练习</strong></div>
</div>

<!-- KNOWLEDGE POINT 5.1 -->
<div class="kp">
  <div class="kp-title">知识点 5.1：为什么"现金为王"</div>

  <div class="kp-lead">利润和现金流，哪个更重要？绝大多数人答错了。</div>

  <div class="case-study">
    <div class="case-title">&#128194; 案例：两家餐厅的故事</div>
    <p>餐厅 A：月营收 30 万，利润 5 万，但客户都是月结 60 天的企业客户。</p>
    <p>餐厅 B：月营收 30 万，利润 3 万，但客户都是当场付现金。</p>
    <div class="case-insight">
      <strong>问题：</strong>哪家餐厅的实际经营更危险？<br>
      <strong>答案：</strong>餐厅 A 看起来利润更高，但 60 天账期意味着它需要垫付两个月的资金。如果每月营收 30 万，它实际需要约 <strong>180 万</strong>的周转资金才能维持运转。一旦有大客户倒闭无法付款，它可能在"账面上盈利"的情况下突然死亡。
    </div>
  </div>

  <div class="key-insight">
    <div class="key-insight-icon">&#128161;</div>
    <div class="key-insight-text"><strong>核心洞见：</strong>利润是"账面上算出来的"，现金流是"口袋里真有的"。利润可以靠会计调整（折旧、坏账准备、存货计价），但现金流是实打实的进出。高手看财务数据，首先看现金流——这是一切经营风险的最后防线。</div>
  </div>
</div>

<!-- KNOWLEDGE POINT 5.2 -->
<div class="kp">
  <div class="kp-title">知识点 5.2：七大经营风险信号</div>

  <div class="kp-lead">以下七个信号出现任何一个，都应该引起警觉：</div>

  <div class="risk-signals">
    <div class="risk-signal">
      <div class="rs-num rs-danger">1</div>
      <div class="rs-content">
        <div class="rs-title">经营现金流持续为负</div>
        <div class="rs-desc">主业一直在"烧钱"，没有造血能力</div>
      </div>
    </div>
    <div class="risk-signal">
      <div class="rs-num rs-warning">2</div>
      <div class="rs-content">
        <div class="rs-title">应收账款增速超过收入增速</div>
        <div class="rs-desc">货卖出去了，钱没收回来，堆积在应收账款里</div>
      </div>
    </div>
    <div class="risk-signal">
      <div class="rs-num rs-warning">3</div>
      <div class="rs-content">
        <div class="rs-title">存货增速超过收入增速</div>
        <div class="rs-desc">东西生产了卖不掉，资金被库存套住</div>
      </div>
    </div>
    <div class="risk-signal">
      <div class="rs-num rs-danger">4</div>
      <div class="rs-content">
        <div class="rs-title">短期借款大幅增加</div>
        <div class="rs-desc">用银行短期贷款维持运营，说明长期资金在失血</div>
      </div>
    </div>
    <div class="risk-signal">
      <div class="rs-num rs-warning">5</div>
      <div class="rs-content">
        <div class="rs-title">毛利率持续下降</div>
        <div class="rs-desc">定价能力在丧失，或成本控制在恶化</div>
      </div>
    </div>
    <div class="risk-signal">
      <div class="rs-num rs-danger">6</div>
      <div class="rs-content">
        <div class="rs-title">经营现金流 < 净利润</div>
        <div class="rs-desc">利润很好但收不到钱，利润质量存疑</div>
      </div>
    </div>
    <div class="risk-signal">
      <div class="rs-num rs-warning">7</div>
      <div class="rs-content">
        <div class="rs-title">现金转换周期（CCC）越来越长</div>
        <div class="rs-desc">资金周转效率在恶化，运营风险在积累</div>
      </div>
    </div>
  </div>
</div>

<!-- KNOWLEDGE POINT 5.3 -->
<div class="kp">
  <div class="kp-title">知识点 5.3：健康度判断的三合一模型</div>

  <div class="kp-lead">判断一家企业是否健康，需要同时看三个维度的组合：</div>

  <div class="health-model">
    <div class="hm-item">
      <div class="hm-header">盈利性</div>
      <div class="hm-question">净利润 > 0 ？毛利率稳定或上升？</div>
      <div class="hm-icon hm-icon-ok">&#10003;</div>
    </div>
    <div class="hm-plus">+</div>
    <div class="hm-item">
      <div class="hm-header">流动性</div>
      <div class="hm-question">经营现金流 > 0 ？现金余额充足？</div>
      <div class="hm-icon hm-icon-ok">&#10003;</div>
    </div>
    <div class="hm-plus">+</div>
    <div class="hm-item">
      <div class="hm-header">效率性</div>
      <div class="hm-question">CCC 在缩短？资产周转率在提升？</div>
      <div class="hm-icon hm-icon-ok">&#10003;</div>
    </div>
  </div>

  <div class="verdict-box">
    <div class="verdict-title">四种健康度组合：</div>
    <div class="verdict-items">
      <div class="verdict-item"><span class="vcheck">&#10003;</span> 三者都好 → 优秀，稳健成长</div>
      <div class="verdict-item"><span class="vcheck">&#10003;</span> 盈利好 + 流动性差 → "账面富贵"，警惕现金流</div>
      <div class="verdict-item"><span class="vdanger">&#10007;</span> 盈利差 + 流动性差 → 双重危机，高度危险</div>
      <div class="verdict-item"><span class="vwarning">&#8722;</span> 盈利好 + 流动性好 + 效率差 → 管理粗放，需要精细化</div>
    </div>
  </div>
</div>

<!-- FORM 5.1 -->
<div class="form-block">
  <div class="form-header">
    <div class="form-num">表单 5.1</div>
    <div class="form-title">企业经营健康度体检表</div>
  </div>

  <div class="form-intro-sm">
    <strong>填写说明：</strong>用你熟悉的企业或部门数据，完成这个健康度诊断。
  </div>

  <div class="form-table">
    <div class="form-table-row">
      <div class="form-table-label">该企业的净利润趋势？（上升/下降/稳定）</div>
      <div class="form-table-input"></div>
    </div>
    <div class="form-table-row">
      <div class="form-table-label">该企业的经营现金流状况？（正值/负值/接近零）</div>
      <div class="form-table-input"></div>
    </div>
    <div class="form-table-row">
      <div class="form-table-label">该企业的现金转换周期趋势？（缩短/拉长/稳定）</div>
      <div class="form-table-input"></div>
    </div>
    <div class="form-table-row">
      <div class="form-table-label">出现上述任何一个风险信号了吗？</div>
      <div class="form-table-input"></div>
    </div>
    <div class="form-table-row">
      <div class="form-table-label">你的综合健康度判断：</div>
      <div class="form-table-input"></div>
    </div>
  </div>
</div>

<!-- FORM 5.2 -->
<div class="form-block">
  <div class="form-header">
    <div class="form-num">表单 5.2</div>
    <div class="form-title">场景卡风险扫描</div>
  </div>

  <div class="form-intro-sm">
    <strong>填写说明：</strong>用你场景卡中的任务，做一次风险信号扫描。
  </div>

  <div class="form-table">
    <div class="form-table-row">
      <div class="form-table-label">这个任务最可能触发哪个风险信号？</div>
      <div class="form-table-input"></div>
    </div>
    <div class="form-table-row">
      <div class="form-table-label">这个任务对现金流的潜在影响是什么？</div>
      <div class="form-table-input"></div>
    </div>
    <div class="form-table-row">
      <div class="form-table-label">如果这个任务失败，最坏情况下的财务后果是什么？</div>
      <div class="form-table-input"></div>
    </div>
    <div class="form-table-row">
      <div class="form-table-label">你应该如何建立监控机制来提前预警？</div>
      <div class="form-table-input"></div>
    </div>
  </div>
</div>

<!-- EXERCISES -->
<div class="exercises">
  <div class="exercises-title">&#128221; 本章练习</div>

  <div class="exercise">
    <div class="exercise-header">
      <span class="exercise-label">练习 5-A（基础）</span>
      <span class="exercise-type">信号识别</span>
    </div>
    <p>以下是一家公司的财务摘要，判断哪些是风险信号：</p>
    <div class="exercise-ques">
      <p>1. 净利润 800 万，经营现金流 -200 万 → 风险信号？________（是/否）</p>
      <p>2. 收入增长 30%，应收账款增长 80% → 风险信号？________（是/否）</p>
      <p>3. 毛利率 45%，连续三年稳定 → 风险信号？________（是/否）</p>
      <p>4. 短期借款增加 50%，长期借款减少 30% → 风险信号？________（是/否）</p>
    </div>
  </div>

  <div class="exercise">
    <div class="exercise-header">
      <span class="exercise-label">练习 5-B（应用）</span>
      <span class="exercise-type">健康度判断</span>
    </div>
    <p>某公司：盈利良好（净利润增长 20%），但经营现金流连续两年为负，且现金转换周期从 60 天拉长到 90 天。请分析这家公司的健康度及潜在风险。</p>
    <div class="exercise-answer-lines">
      <div class="answer-line"></div>
      <div class="answer-line"></div>
    </div>
  </div>

  <div class="exercise">
    <div class="exercise-header">
      <span class="exercise-label">练习 5-C（拓展）</span>
      <span class="exercise-type">监控设计</span>
    </div>
    <p>从你的场景卡出发，设计一个适合你部门的现金流监控指标体系。</p>
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
习惯 5：迭代精进
│
├── 现金为王
│   ├── 利润是意见，现金流是事实
│   └── 现金流断裂是 企业死亡的第一原因
│
├── 七大风险信号
│   ├── 经营现金流持续为负
│   ├── 应收账款增速 > 收入增速
│   ├── 存货增速 > 收入增速
│   ├── 短期借款大幅增加
│   ├── 毛利率持续下降
│   ├── 经营现金流 < 净利润
│   └── CCC 越来越长
│
└── 健康度三合一
    ├── 盈利性（净利润 > 0，毛利率稳定）
    ├── 流动性（经营现金流 > 0）
    └── 效率性（CCC 缩短，周转率提升）
  </pre>
</div>

<div class="chapter-promise">
  <div class="promise-title">本章行为承诺：</div>
  <div class="promise-content">
    从今天起，我承诺每月检查我所在部门的<br>
    现金流健康度指标：_______________<br><br>
    签名：________________　日期：________________
  </div>
</div>

</div>
'''

with open('D:/新课开发/管理学/30-财务经营思维/学员手册/学员手册_财务经营思维.html', 'a', encoding='utf-8') as f:
    f.write(ch5_html)

print("Chapter 5 written")
