#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Build the student handbook HTML - Part 3: Habit 1 认识基金"""

OUTPUT_PATH = r"D:\新课开发\金融学\03-基金定投实战-选基择时与止盈策略\学员手册\03-学员手册.html"

def append(content):
    with open(OUTPUT_PATH, 'a', encoding='utf-8') as f:
        f.write(content)
    print(f"Appended {len(content)} bytes")

# Habit 1 - 认识基金
h1 = '''
<!-- ══ 习惯 1：认识基金 ══ -->
<section class="section section-alt" id="h1">
  <div class="container">
    <div class="habit-card reveal">
      <div class="habit-header">
        <p class="habit-num"><span class="tag-module tag-m1">习惯一</span></p>
        <h2 class="habit-title">认识基金——基金到底是什么</h2>
        <p class="habit-subtitle">选基金就是选人：一个好基金经理，顶过一万个内幕消息</p>
      </div>
      <div class="habit-body">

        <!-- 核心引言 -->
        <div class="insight-box" style="margin-bottom:28px;">
          <p class="insight-quote">"基金是普通人参与资本市场最友好的方式，但'躺赢'的心态是定投最大的敌人。"</p>
          <p class="insight-source">在我们开始学习选基择时之前，你需要先建立对基金投资的正确认知。基金不是万能的，定投也不是万能的——知道边界在哪里，才是最聪明的投资者。</p>
        </div>

        <!-- 学习目标 -->
        <div class="steps" style="margin-bottom:28px;">
          <div class="step">
            <div class="step-num">1</div>
            <div class="step-content">
              <h3 class="step-title">理解基金到底是什么</h3>
              <p class="step-desc">它和股票有什么区别</p>
            </div>
          </div>
          <div class="step">
            <div class="step-num">2</div>
            <div class="step-content">
              <h3 class="step-title">掌握基金的主要分类和各自特点</h3>
              <p class="step-desc"></p>
            </div>
          </div>
          <div class="step">
            <div class="step-num">3</div>
            <div class="step-content">
              <h3 class="step-title">能够根据自身情况选择适合自己的基金类型</h3>
              <p class="step-desc"></p>
            </div>
          </div>
        </div>

        <!-- 知识点 1.1 -->
        <div class="knowledge-point">
          <h3 class="knowledge-point-title">知识点 1.1：基金是什么</h3>
          <div class="knowledge-point-content">
            <p>基金，就是把很多人的钱集中起来，交给专业的基金经理来管理和投资。</p>
            <p><strong>用一个简单的比喻：</strong></p>
            <p>想象你和其他99个人，每个人出1000元，总共10万元。然后你们请了一个投资高手，帮你们用这10万元去买股票、债券、或者其他投资品。这个"投资高手"就是基金经理，这个10万元的池子就是基金。</p>
            <p><strong>基金的优势：</strong></p>
            <p>1. <strong>分散风险</strong>：基金经理会把钱分散投资到很多只股票或债券里，不像你自己炒股，可能全仓一只股票踩雷。</p>
            <p>2. <strong>专业管理</strong>：基金经理有专业的研究团队、信息渠道、投资经验，普通人很难比得上。</p>
            <p>3. <strong>门槛低</strong>：很多基金10元、100元就能起投，不像买房、炒股票那样需要大额资金。</p>
          </div>
        </div>

        <div class="callout callout-danger">
          <svg class="callout-icon" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
          <div class="callout-text">
            <strong>核心洞见：</strong>基金的本质是"借力"——承认自己不是最专业的投资者，所以把钱交给专业的人打理。这不是懒，是聪明。
          </div>
        </div>

        <!-- 知识点 1.2 -->
        <div class="knowledge-point">
          <h3 class="knowledge-point-title">知识点 1.2：基金和股票的区别</h3>
          <div class="knowledge-point-content">
            <table class="data-table">
              <thead><tr><th>对比维度</th><th>股票</th><th>基金</th></tr></thead>
              <tbody>
                <tr><td>投资门槛</td><td>几百到几千不等</td><td>10元起很常见</td></tr>
                <tr><td>风险程度</td><td>单只股票风险高</td><td>分散投资风险相对低</td></tr>
                <tr><td>收益来源</td><td>依靠选对股票</td><td>依靠基金经理能力+市场整体</td></tr>
                <tr><td>精力投入</td><td>需要研究、盯盘</td><td>不需要频繁操作</td></tr>
                <tr><td>适合人群</td><td>有时间研究、有风险承受能力</td><td>想省心但想分享资本市场红利</td></tr>
              </tbody>
            </table>
            <p style="margin-top:16px;"><strong>关键区别：</strong></p>
            <p>• 买股票，你是在买一家公司。你需要判断这家公司好不好、股价贵不贵。</p>
            <p>• 买基金，你是在买基金经理的能力。你需要判断这个基金经理靠不靠谱、他的投资风格适不适合你。</p>
          </div>
        </div>

        <div class="callout callout-success">
          <svg class="callout-icon" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
          <div class="callout-text">
            <strong>关键认知：</strong>股票是自己下场踢球，基金是请教练替你踢。选择哪个，取决于你的时间、能力和风险偏好。
          </div>
        </div>

        <!-- 知识点 1.3 -->
        <div class="knowledge-point">
          <h3 class="knowledge-point-title">知识点 1.3：基金的主要分类</h3>
          <div class="knowledge-point-content">
            <p><strong>按投资标的分类：</strong></p>
            <p><strong>货币基金</strong>：主要投资银行存款、短期国债等低风险品种。比如大家熟悉的余额宝。本金风险极低，收益稳定但偏低（年化2%-3%左右）。</p>
            <p><strong>债券基金</strong>：主要投资债券（国债、企业债等）。风险中等，收益中等（年化4%-6%左右）。</p>
            <p><strong>股票基金</strong>：主要投资股票。风险较高，收益也较高（长期年化8%-12%是可能的，但波动也大）。</p>
            <p><strong>混合基金</strong>：股票和债券都投，比例灵活。风险收益特征介于债券基金和股票基金之间。</p>
            <p style="margin-top:16px;"><strong>按投资方式分类：</strong></p>
            <p><strong>主动管理型基金</strong>：基金经理主动选股、择时，试图跑赢市场。收益取决于基金经理能力。</p>
            <p><strong>被动指数型基金</strong>：基金经理不主动选股，而是复制某个指数的成分股。典型代表是沪深300指数基金。费率低，长期来看能跑赢70%的主动基金。</p>
          </div>
        </div>

        <div class="callout callout-danger">
          <svg class="callout-icon" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
          <div class="callout-text">
            <strong>核心洞见：</strong>没有"最好"的基金类型，只有"最适合"你的类型。高风险不一定带来高收益，低风险也不代表没收益。关键是你的风险承受能力和投资目标。
          </div>
        </div>

      </div>
    </div>
  </div>
</section>
'''

append(h1)

# Form 1.1
form11 = '''
<!-- 表单 1.1 我的基金类型选择表 -->
<section class="section section-warm">
  <div class="container">
    <div class="form-section reveal">
      <div class="form-header">
        <div class="form-title">表单 1.1｜我的基金类型选择表</div>
        <div class="form-subtitle">目的：根据自己的风险偏好和投资目标，确定适合你的基金类型 | 时间：10分钟</div>
      </div>
      <div class="form-body">
        <p style="font-size:13px;font-weight:700;margin-bottom:12px;">第一步：评估我的风险承受能力</p>
        <table class="data-table" style="margin-bottom:24px;">
          <thead><tr><th style="width:60%;">问题</th><th>选项（请在符合你情况的○里打勾）</th></tr></thead>
          <tbody>
            <tr><td>我的年龄大约是</td><td>○ 25岁以下  ○ 25-35岁  ○ 35-50岁  ○ 50岁以上</td></tr>
            <tr><td>我能承受的最大亏损是</td><td>○ 本金不能亏  ○ 10%以内  ○ 20%以内  ○ 30%也能接受</td></tr>
            <tr><td>我的投资经验</td><td>○ 完全小白  ○ 了解一点  ○ 有过实际投资  ○ 专业级</td></tr>
            <tr><td>我的收入稳定性</td><td>○ 非常稳定（公务员、国企等）  ○ 比较稳定  ○ 不太稳定</td></tr>
          </tbody>
        </table>

        <p style="font-size:13px;font-weight:700;margin-bottom:12px;">第二步：确定我的风险等级</p>
        <table class="data-table" style="margin-bottom:24px;">
          <thead><tr><th>风险等级</th><th>特征描述</th><th>适合人群</th><th>我的选择</th></tr></thead>
          <tbody>
            <tr><td><strong>保守型</strong></td><td>不能承受本金亏损，追求稳健收益</td><td>老年人、极度厌恶风险者</td><td>○</td></tr>
            <tr><td><strong>稳健型</strong></td><td>能承受5%-10%短期亏损，追求适度增值</td><td>追求稳健增值的投资者</td><td>○</td></tr>
            <tr><td><strong>积极型</strong></td><td>能承受20%-30%短期亏损，追求较高收益</td><td>有一定经验、收入稳定者</td><td>○</td></tr>
            <tr><td><strong>激进型</strong></td><td>能承受30%以上亏损，追求高收益</td><td>年轻人、有专业知识者</td><td>○</td></tr>
          </tbody>
        </table>

        <p style="font-size:13px;font-weight:700;margin-bottom:12px;">第三步：匹配我的基金类型</p>
        <table class="data-table">
          <thead><tr><th>风险等级</th><th>建议的基金类型</th><th>我的选择</th></tr></thead>
          <tbody>
            <tr><td><strong>保守型</strong></td><td>货币基金 + 纯债基金</td><td>○</td></tr>
            <tr><td><strong>稳健型</strong></td><td>债券基金为主 + 少量混合基金</td><td>○</td></tr>
            <tr><td><strong>积极型</strong></td><td>股票基金/混合基金 + 部分指数基金</td><td>○</td></tr>
            <tr><td><strong>激进型</strong></td><td>股票基金 + 指数基金 + 部分行业基金</td><td>○</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</section>
'''

append(form11)

# Form 1.2
form12 = '''
<!-- 表单 1.2 基金基础知识自测 -->
<section class="section section-alt">
  <div class="container">
    <div class="form-section reveal">
      <div class="form-header">
        <div class="form-title">表单 1.2｜基金基础知识自测</div>
        <div class="form-subtitle">目的：检验你对基金基础知识的掌握程度 | 要求：不看提示，独立完成 | 时间：5分钟</div>
      </div>
      <div class="form-body">
        <p style="font-size:13px;margin-bottom:16px;"><strong>请判断以下说法是否正确（TRUE=正确/FALSE=错误）：</strong></p>
        <table class="data-table" style="margin-bottom:16px;">
          <tbody>
            <tr><td style="width:5%;">1.</td><td>基金就是把很多投资者的钱集中起来，交给基金经理管理。</td><td style="width:15%;text-align:center;">（　　　）</td></tr>
            <tr><td>2.</td><td>货币基金的主要投资标的是股票，所以风险很高。</td><td style="text-align:center;">（　　　）</td></tr>
            <tr><td>3.</td><td>指数型基金是被动管理型基金，基金经理不需要主动选股。</td><td style="text-align:center;">（　　　）</td></tr>
            <tr><td>4.</td><td>基金净值越低，说明这只基金越便宜，越值得买。</td><td style="text-align:center;">（　　　）</td></tr>
            <tr><td>5.</td><td>基金适合长期持有，因为短期内市场波动难以预测。</td><td style="text-align:center;">（　　　）</td></tr>
          </tbody>
        </table>

        <details class="answer-toggle">
          <summary>点击查看参考答案</summary>
          <div class="answer-content">
            <p>1. TRUE　2. FALSE（货币基金投资的是银行存款等低风险品种）　3. TRUE　4. FALSE（净值高低不是判断依据，要看增长率和基金经理能力）　5. TRUE</p>
            <p style="margin-top:8px;"><strong>我的得分：______分（答对5题满分）</strong></p>
          </div>
        </details>
      </div>
    </div>
  </div>
</section>
'''

append(form12)

# Exercises for Habit 1
h1_exercises = '''
<!-- 习惯 1 练习 -->
<section class="section section-warm">
  <div class="container">
    <div class="section-head reveal">
      <p class="eyebrow">课堂练习</p>
      <h2 class="serif">第一章练习</h2>
    </div>

    <div class="exercise reveal" style="margin-bottom:24px;">
      <div class="exercise-header">
        <div class="exercise-icon"><svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg></div>
        <span class="exercise-title">练习 1-A（基础）：基金分类匹配</span>
      </div>
      <div class="exercise-body">
        <p class="exercise-instruction">请将以下基金类型与对应的特点连线：</p>
        <table class="data-table">
          <thead><tr><th>基金类型</th><th>特点</th></tr></thead>
          <tbody>
            <tr><td>货币基金</td><td>A. 主要投资债券，风险中等</td></tr>
            <tr><td>债券基金</td><td>B. 复制指数成分股，被动管理</td></tr>
            <tr><td>股票基金</td><td>C. 主要投资股票，风险较高</td></tr>
            <tr><td>指数基金</td><td>D. 投资银行存款等，风险极低</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="exercise reveal" style="margin-bottom:24px;">
      <div class="exercise-header">
        <div class="exercise-icon"><svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg></div>
        <span class="exercise-title">练习 1-B（应用）：基金类型选择</span>
      </div>
      <div class="exercise-body">
        <p class="exercise-instruction">小王，30岁，公务员，收入稳定但不高，目前有10万元存款，可以承受20%以内的亏损，投资经验为零。</p>
        <p class="exercise-instruction">请帮小王分析：</p>
        <div class="exercise-form">
          <p>• 他的风险等级应该是：____________</p>
          <p>• 建议他的基金组合是：____________</p>
          <p>• 理由是：____________</p>
        </div>
      </div>
    </div>

    <div class="exercise reveal">
      <div class="exercise-header">
        <div class="exercise-icon"><svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg></div>
        <span class="exercise-title">练习 1-C（拓展）：我的基金类型规划</span>
      </div>
      <div class="exercise-body">
        <p class="exercise-instruction">用自己的情况，完成这份规划：</p>
        <div class="exercise-form">
          <textarea style="height:200px;" placeholder="我的年龄：____岁
我的风险偏好：____型（保守/稳健/积极/激进）
我能承受的最大亏损：____%
我的投资经验：____________

我打算这样配置基金：
货币基金：____%（用途：____________）
债券基金：____%（用途：____________）
股票/混合基金：____%（用途：____________）
指数基金：____%（用途：____________）

签名：________________　日期：________________"></textarea>
        </div>
      </div>
    </div>
  </div>
</section>
'''

append(h1_exercises)

# Habit 1 知识框架
h1_framework = '''
<!-- 习惯 1 知识框架 -->
<section class="section section-alt">
  <div class="container">
    <div class="kf reveal">
      <div class="kf-header">
        <div class="kf-icon"><svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg></div>
        <span class="kf-title">第一章知识框架</span>
      </div>
      <div class="kf-body">
        <div class="framework-ascii">
习惯 1：认识基金——基金到底是什么
│
├── 基金的本质
│   └── 把钱交给专业的人打理，本质是"借力"
│
├── 基金 vs 股票
│   ├── 股票：自己选股，判断公司好不好
│   └── 基金：选基金经理，判断他的能力
│
├── 基金分类（按投资标的）
│   ├── 货币基金：低风险，收益2%-3%
│   ├── 债券基金：中风险，收益4%-6%
│   ├── 股票基金：高风险，收益8%-12%
│   └── 混合基金：风险收益介于股债之间
│
└── 基金分类（按管理方式）
    ├── 主动管理型：靠基金经理能力
    └── 被动指数型：复制指数，费率低
        </div>
      </div>
    </div>

    <div class="exercise reveal" style="margin-top:24px;">
      <div class="exercise-header">
        <div class="exercise-icon"><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></div>
        <span class="exercise-title">本章行为承诺</span>
      </div>
      <div class="exercise-body">
        <p style="font-size:13px;margin-bottom:12px;">从今天起，我投资基金的第一件事是先问自己：</p>
        <p style="font-size:15px;font-weight:700;color:var(--red);margin-bottom:16px;font-family:var(--font-serif);">"这只基金是什么类型？风险有多高？"</p>
        <p style="font-size:13px;margin-bottom:8px;"><strong>我承诺：</strong></p>
        <div class="checklist">
          <div class="checklist-item"><div class="checklist-box"></div><span class="checklist-text">搞清楚自己要投资的是什么类型的基金</span></div>
          <div class="checklist-item"><div class="checklist-box"></div><span class="checklist-text">不被"高收益"迷惑，先看风险</span></div>
          <div class="checklist-item"><div class="checklist-box"></div><span class="checklist-text">了解自己的风险承受能力，不超出边界</span></div>
        </div>
        <div class="signature-line" style="margin-top:16px;">
          <div class="signature-field"><span>签名：</span><div class="line"></div></div>
          <div class="signature-field"><span>日期：</span><div class="line"></div></div>
        </div>
      </div>
    </div>
  </div>
</section>
'''

append(h1_framework)

print("Habit 1 complete")
