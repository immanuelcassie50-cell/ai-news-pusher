#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Build the student handbook HTML - Part 5: Habit 3 定投原理"""

OUTPUT_PATH = r"D:\新课开发\金融学\03-基金定投实战-选基择时与止盈策略\学员手册\03-学员手册.html"

def append(content):
    with open(OUTPUT_PATH, 'a', encoding='utf-8') as f:
        f.write(content)
    print(f"Appended {len(content)} bytes")

h3 = '''
<!-- ══ 习惯 3：定投原理 ══ -->
<section class="section section-alt" id="h3">
  <div class="container">
    <div class="habit-card reveal">
      <div class="habit-header">
        <p class="habit-num"><span class="tag-module tag-m3">习惯三</span></p>
        <h2 class="habit-title">定投原理——让时间成为你的朋友</h2>
        <p class="habit-subtitle">定投的秘密：不需要择时，只需要坚持</p>
      </div>
      <div class="habit-body">

        <div class="insight-box" style="margin-bottom:28px;">
          <p class="insight-quote">"定投最大的敌人不是市场下跌，而是你停止扣款的那一刻。"</p>
          <p class="insight-quote" style="font-size:16px;margin-top:8px;">"微笑曲线听起来简单，但真正在曲线左边持续买入的人，少之又少。"</p>
        </div>

        <!-- 知识点 3.1 -->
        <div class="knowledge-point">
          <h3 class="knowledge-point-title">知识点 3.1：什么是定投</h3>
          <div class="knowledge-point-content">
            <p>定投，全称"定期定额投资"，就是在固定的时间（比如每月1日），投入固定的金额（比如1000元）到某只基金里。</p>
            <p style="margin-top:16px;"><strong>定投的原理：</strong></p>
            <p>不管市场价格高低，你都定期买入。市场价格高的时候，你买的份额少；市场价格低的时候，你买的份额多。</p>
            <p>时间长了，你的买入成本会被"平滑"到一个平均水平，不会在最高点全仓买入，也不会在最低点全部踏空。</p>
            <p style="margin-top:16px;"><strong>用一个比喻：</strong></p>
            <p>定投就像买菜。你每周固定花100元买菜，不管价格高低。如果白菜5块钱1斤，你这周能买20斤；如果猪肉30块钱1斤，你这周只能买3斤多。一年下来，你不会抱怨"怎么有时候买贵了"，因为你的成本是平均的。</p>
          </div>
        </div>

        <div class="callout callout-danger">
          <svg class="callout-icon" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
          <div class="callout-text">
            <strong>核心洞见：</strong>定投的本质是"不择时"——放弃择时的努力，转而用时间和纪律来平滑成本。承认自己无法预测市场，才是最聪明的选择。
          </div>
        </div>

        <!-- 知识点 3.2 -->
        <div class="knowledge-point">
          <h3 class="knowledge-point-title">知识点 3.2：微笑曲线原理</h3>
          <div class="knowledge-point-content">
            <p>微笑曲线是定投最经典的收益来源。</p>
            <p style="margin-top:16px;"><strong>什么是微笑曲线：</strong></p>
            <p>想象市场先涨后跌，最后又涨回来，形成一个"U"型：</p>
            <div class="framework-ascii" style="margin:16px 0;">
净值
  ↑
  │　　　╭──╮
  │　　╱　　　╲
  │　╱　　　　　╲
  │╱　　　　　　　╲
──┴────────────────────→ 时间
  左侧（高位买入）　右侧（地位买入）</div>
            <p style="margin-top:16px;"><strong>微笑曲线为什么能赚钱：</strong></p>
            <p>假设市场从3000点跌到2000点，又涨回3000点。</p>
            <p>如果你在高位一次性买入：成本3000点，回到原点刚好回本。</p>
            <p>如果你在高位开始定投，每月买入一次：</p>
            <p>• 高位买入时份额少</p>
            <p>• 低位买入时份额多</p>
            <p>• 最终你的平均成本低于3000点</p>
            <p>• 当市场回到原点时，你已经赚钱了</p>
          </div>
        </div>

        <div class="callout callout-success">
          <svg class="callout-icon" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
          <div class="callout-text">
            <strong>关键洞见：</strong>市场下跌时，不要停止定投，反而要多投。因为那时候同样的钱能买到更多份额，是你积累份额的最好时机。
          </div>
        </div>

        <!-- 知识点 3.3 -->
        <div class="knowledge-point">
          <h3 class="knowledge-point-title">知识点 3.3：定投的优势与局限</h3>
          <div class="knowledge-point-content">
            <p style="margin-top:16px;"><strong>定投的优势：</strong></p>
            <p>1. <strong>不需要择时</strong>：解决了"什么时候买"的难题</p>
            <p>2. <strong>门槛低</strong>：每月几百元就能开始</p>
            <p>3. <strong>平滑成本</strong>：避免一次性买在高点</p>
            <p>4. <strong>强制储蓄</strong>：不知不觉就存下了钱</p>
            <p>5. <strong>克服人性</strong>：不需要判断市场，该买就买</p>
            <p style="margin-top:16px;"><strong>定投的局限：</strong></p>
            <p>1. <strong>市场单边下跌时也会亏损</strong>：如果市场一直跌，定投也会亏钱</p>
            <p>2. <strong>需要长期坚持</strong>：至少3-5年才能看到明显效果，短期可能亏钱</p>
            <p>3. <strong>不是收益最大化</strong>：放弃了捕捉高点的机会，收益是"中庸"的</p>
            <p>4. <strong>费率问题</strong>：频繁定投可能产生较多手续费</p>
          </div>
        </div>

        <div class="callout callout-success">
          <svg class="callout-icon" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
          <div class="callout-text">
            <strong>关键认知：</strong>定投不是万能的，但它是最适合普通人的投资方式。它不是让你赚最多钱，而是让你在不用操心的情况下，分享资本市场长期增长的红利。
          </div>
        </div>

        <!-- 知识点 3.4 -->
        <div class="knowledge-point">
          <h3 class="knowledge-point-title">知识点 3.4：定投的正确姿势</h3>
          <div class="knowledge-point-content">
            <p style="margin-top:16px;"><strong>定投的频率：</strong></p>
            <table class="data-table">
              <thead><tr><th>频率</th><th>优点</th><th>缺点</th></tr></thead>
              <tbody>
                <tr><td>每周</td><td>分散效果更好</td><td>操作频繁，费神</td></tr>
                <tr><td>每两周</td><td>介于两者之间</td><td></td></tr>
                <tr><td>每月</td><td>简单易坚持</td><td>分散效果略差</td></tr>
              </tbody>
            </table>
            <p style="margin-top:12px;">对于大多数人来说，<strong>每月定投一次</strong>是最合适的，既不会太频繁，又能坚持。</p>
            <p style="margin-top:16px;"><strong>定投的日子：</strong></p>
            <p>建议选择发工资后1-3天，这样钱刚到账就扣款，不会忘记。</p>
            <p>如果你是月光族，可以设定工资到账后立即定投，强制储蓄。</p>
            <p style="margin-top:16px;"><strong>定投的金额：</strong></p>
            <p>一般建议把每月闲钱的30%-50%用于定投。不影响生活，又能积累财富。</p>
          </div>
        </div>

        <div class="callout callout-success">
          <svg class="callout-icon" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
          <div class="callout-text">
            <strong>关键认知：</strong>定投金额不是越大约好，而是"能坚持"的金额才是最好的。如果你设定的金额让你生活质量下降，那这个金额就太大了。
          </div>
        </div>

      </div>
    </div>
  </div>
</section>
'''

append(h3)

# Form 3.1
form31 = '''
<!-- 表单 3.1 我的定投计划表 -->
<section class="section section-warm">
  <div class="container">
    <div class="form-section reveal">
      <div class="form-header">
        <div class="form-title">表单 3.1｜我的定投计划表</div>
        <div class="form-subtitle">目的：制定一份完整的、可执行的定投计划 | 用真实的数字填写，不要留空 | 时间：12分钟</div>
      </div>
      <div class="form-body">
        <p style="font-size:13px;font-weight:700;margin-bottom:12px;">第一步：确认我的定投资金来源</p>
        <table class="data-table" style="margin-bottom:24px;">
          <thead><tr><th style="width:60%;">问题</th><th>回答</th></tr></thead>
          <tbody>
            <tr><td>我每月可用于投资的闲钱大约是</td><td>______ 元</td></tr>
            <tr><td>我打算用____%的闲钱做定投</td><td>______%</td></tr>
            <tr><td>我每月定投的金额是</td><td>______ 元</td></tr>
            <tr><td>我定投的资金来源是</td><td>○ 工资  ○ 奖金  ○ 副业收入  ○ 其他</td></tr>
          </tbody>
        </table>

        <p style="font-size:13px;font-weight:700;margin-bottom:12px;">第二步：选择定投的基金</p>
        <table class="data-table" style="margin-bottom:24px;">
          <thead><tr><th style="width:60%;">问题</th><th>回答</th></tr></thead>
          <tbody>
            <tr><td>我选择定投的基金名称是</td><td></td></tr>
            <tr><td>基金代码是</td><td></td></tr>
            <tr><td>选择这只基金的理由是</td><td></td></tr>
          </tbody>
        </table>

        <p style="font-size:13px;font-weight:700;margin-bottom:12px;">第三步：设定定投规则</p>
        <table class="data-table" style="margin-bottom:24px;">
          <thead><tr><th style="width:40%;">项目</th><th>设置</th></tr></thead>
          <tbody>
            <tr><td><strong>定投频率</strong></td><td>○ 每周  ○ 每两周  ○ 每月  ○ 其他____</td></tr>
            <tr><td><strong>每次定投金额</strong></td><td>______ 元</td></tr>
            <tr><td><strong>定投日期（建议发工资后1-3天）</strong></td><td>每月____日</td></tr>
            <tr><td><strong>定投渠道</strong></td><td>○ 支付宝  ○ 天天基金  ○ 银行App  ○ 其他____</td></tr>
            <tr><td><strong>计划持有期限</strong></td><td>____年</td></tr>
          </tbody>
        </table>

        <p style="font-size:13px;font-weight:700;margin-bottom:12px;">第四步：我的定投目标</p>
        <div class="exercise-form">
          <p>我的定投目标是：</p>
          <p>短期目标（1-3年）：____________</p>
          <p>中期目标（3-5年）：____________</p>
          <p>长期目标（5年以上）：____________</p>
          <p>我希望通过定投实现：____________</p>
        </div>
      </div>
    </div>
  </div>
</section>
'''

append(form31)

# Form 3.2
form32 = '''
<!-- 表单 3.2 定投记录追踪表 -->
<section class="section section-alt">
  <div class="container">
    <div class="form-section reveal">
      <div class="form-header">
        <div class="form-title">表单 3.2｜定投记录追踪表</div>
        <div class="form-subtitle">目的：记录你的定投执行情况，定期检视 | 每月更新一次，坚持追踪 | 时间：5分钟/次</div>
      </div>
      <div class="form-body">
        <p style="font-size:13px;margin-bottom:16px;"><strong>我的定投标的：</strong>____________</p>
        <table class="data-table" style="margin-bottom:16px;">
          <thead><tr><th>定投日期</th><th style="text-align:center;">定投金额（元）</th><th style="text-align:center;">当日净值（元）</th><th style="text-align:center;">买入份额</th><th style="text-align:center;">累计投入（元）</th><th style="text-align:center;">累计份额</th><th style="text-align:center;">当前市值（元）</th><th style="text-align:center;">收益率</th></tr></thead>
          <tbody>
            <tr><td>____年__月__日</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td>____年__月__日</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td>____年__月__日</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td>____年__月__日</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td>____年__月__日</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td><strong>合计</strong></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
          </tbody>
        </table>
        <p style="font-size:12px;color:var(--gray-50);margin-bottom:16px;"><strong>收益率计算公式：</strong>收益率 =（当前市值 - 累计投入）/ 累计投入 × 100%</p>

        <p style="font-size:13px;font-weight:700;margin-bottom:12px;">我的定投检视记录：</p>
        <table class="data-table">
          <thead><tr><th>检视时间</th><th style="text-align:center;">累计收益率</th><th>和预期比</th><th>需要调整吗？</th></tr></thead>
          <tbody>
            <tr><td>____年__月</td><td style="text-align:center;">%</td><td>○ 超预期  ○ 符合  ○ 不及预期</td><td>○ 无需调整  ○ 需要调整</td></tr>
            <tr><td>____年__月</td><td style="text-align:center;">%</td><td>○ 超预期  ○ 符合  ○ 不及预期</td><td>○ 无需调整  ○ 需要调整</td></tr>
            <tr><td>____年__月</td><td style="text-align:center;">%</td><td>○ 超预期  ○ 符合  ○ 不及预期</td><td>○ 无需调整  ○ 需要调整</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</section>
'''

append(form32)

# Exercises for Habit 3
h3_exercises = '''
<!-- 习惯 3 练习 -->
<section class="section section-warm">
  <div class="container">
    <div class="section-head reveal">
      <p class="eyebrow">课堂练习</p>
      <h2 class="serif">第三章练习</h2>
    </div>

    <div class="exercise reveal" style="margin-bottom:24px;">
      <div class="exercise-header">
        <div class="exercise-icon"><svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg></div>
        <span class="exercise-title">练习 3-A（基础）：微笑曲线计算</span>
      </div>
      <div class="exercise-body">
        <p class="exercise-instruction">假设市场经历以下过程（每月定投1000元）：</p>
        <p class="exercise-instruction">• 第1个月：净值2.0元</p>
        <p class="exercise-instruction">• 第2个月：净值1.5元</p>
        <p class="exercise-instruction">• 第3个月：净值1.0元</p>
        <p class="exercise-instruction">• 第4个月：净值1.5元</p>
        <p class="exercise-instruction">• 第5个月：净值2.0元（回到原点）</p>
        <div class="exercise-form">
          <p>请计算：</p>
          <p>第1个月：买入份额 = 1000 / 2.0 = ____份</p>
          <p>第2个月：买入份额 = 1000 / 1.5 = ____份</p>
          <p>第3个月：买入份额 = 1000 / 1.0 = ____份</p>
          <p>第4个月：买入份额 = 1000 / 1.5 = ____份</p>
          <p>第5个月：买入份额 = 1000 / 2.0 = ____份</p>
          <p style="margin-top:12px;">累计买入份额：____________份</p>
          <p>累计投入金额：____________元</p>
          <p>平均成本：____________元</p>
          <p style="margin-top:12px;">如果第5个月净值回到2.0元，当前市值：____________元</p>
          <p>收益率：____________%</p>
          <p style="margin-top:12px;">对比：如果第1个月一次性买入5000元，收益率是____%</p>
        </div>
      </div>
    </div>

    <div class="exercise reveal" style="margin-bottom:24px;">
      <div class="exercise-header">
        <div class="exercise-icon"><svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg></div>
        <span class="exercise-title">练习 3-B（应用）：定投计划设计</span>
      </div>
      <div class="exercise-body">
        <p class="exercise-instruction">小张月收入12000元，每月支出约8000元，能存下4000元。他打算从这4000元中拿出一半（2000元）做定投。</p>
        <p class="exercise-instruction">请帮小张设计定投计划：</p>
        <div class="exercise-form">
          <p>小张的定投设计：</p>
          <p>定投金额：____元/月</p>
          <p>定投频率：____</p>
          <p>定投日期建议：____</p>
          <p style="margin-top:12px;">定投标的选择建议：</p>
          <p>基金类型应该是：____________</p>
          <p>为什么：____________</p>
          <p style="margin-top:12px;">小张的定投纪律建议：</p>
          <p>1. ____________</p>
          <p>2. ____________</p>
          <p>3. ____________</p>
        </div>
      </div>
    </div>

    <div class="exercise reveal">
      <div class="exercise-header">
        <div class="exercise-icon"><svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg></div>
        <span class="exercise-title">练习 3-C（拓展）：我的真实定投计划</span>
      </div>
      <div class="exercise-body">
        <p class="exercise-instruction">用你自己的真实财务情况，完成这份定投计划：</p>
        <div class="exercise-form">
          <textarea style="height:260px;" placeholder="我的月收入：____________元
我的月支出：____________元
我能用于定投的金额：____________元

我的定投计划：
基金名称：____________
基金代码：____________
定投金额：____________元
定投频率：____________
定投日期：____________
计划持有期限：____________

我定投的目标是：
1. ____________
2. ____________

我给自己设定的定投纪律是：
1. ____________
2. ____________
3. ____________

签名：________________　日期：________________"></textarea>
        </div>
      </div>
    </div>
  </div>
</section>
'''

append(h3_exercises)

# Habit 3 framework
h3_framework = '''
<!-- 习惯 3 知识框架 -->
<section class="section section-alt">
  <div class="container">
    <div class="kf reveal">
      <div class="kf-header">
        <div class="kf-icon"><svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg></div>
        <span class="kf-title">第三章知识框架</span>
      </div>
      <div class="kf-body">
        <div class="framework-ascii">
习惯 3：定投原理——让时间成为你的朋友
│
├── 什么是定投
│   └── 固定时间、固定金额投资同一只基金
│
├── 微笑曲线原理
│   ├── 高位少买，低位多买
│   ├── 市场下跌时不停止，反而要多投
│   └── 最终平均成本低于高点
│
├── 定投优势
│   ├── 不需要择时
│   ├── 门槛低
│   ├── 平滑成本
│   ├── 强制储蓄
│   └── 克服人性
│
└── 定投局限
    ├── 单边下跌也会亏
    ├── 需要长期坚持
    └── 收益不是最大化
        </div>
      </div>
    </div>

    <div class="exercise reveal" style="margin-top:24px;">
      <div class="exercise-header">
        <div class="exercise-icon"><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></div>
        <span class="exercise-title">本章行为承诺</span>
      </div>
      <div class="exercise-body">
        <p style="font-size:13px;margin-bottom:12px;">从今天起，我承诺：</p>
        <div class="checklist">
          <div class="checklist-item"><div class="checklist-box"></div><span class="checklist-text">设定自动定投，让扣款自动进行</span></div>
          <div class="checklist-item"><div class="checklist-box"></div><span class="checklist-text">市场下跌时，不恐慌，不停止</span></div>
          <div class="checklist-item"><div class="checklist-box"></div><span class="checklist-text">每月检视一次定投记录</span></div>
        </div>
        <p style="font-size:15px;font-weight:700;color:var(--red);margin:16px 0 8px;font-family:var(--font-serif);">"当别人恐惧时，我贪婪；当别人贪婪时，我恐惧。"</p>
        <div class="signature-line">
          <div class="signature-field"><span>签名：</span><div class="line"></div></div>
          <div class="signature-field"><span>日期：</span><div class="line"></div></div>
        </div>
      </div>
    </div>
  </div>
</section>
'''

append(h3_framework)

print("Habit 3 complete")
