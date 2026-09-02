#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Build the student handbook HTML - Part 6: Habit 4 止盈策略"""

OUTPUT_PATH = r"D:\新课开发\金融学\03-基金定投实战-选基择时与止盈策略\学员手册\03-学员手册.html"

def append(content):
    with open(OUTPUT_PATH, 'a', encoding='utf-8') as f:
        f.write(content)
    print(f"Appended {len(content)} bytes")

h4 = '''
<!-- ══ 习惯 4：止盈策略 ══ -->
<section class="section section-alt" id="h4">
  <div class="container">
    <div class="habit-card reveal">
      <div class="habit-header">
        <p class="habit-num"><span class="tag-module tag-m4">习惯四</span></p>
        <h2 class="habit-title">止盈策略——会买的是徒弟，会卖的才是师傅</h2>
        <p class="habit-subtitle">止盈比止损更难，因为贪婪是人性</p>
      </div>
      <div class="habit-body">

        <div class="insight-box" style="margin-bottom:28px;">
          <p class="insight-quote">"定投赚钱的秘密：不是买得好，而是卖得好。"</p>
          <p class="insight-quote" style="font-size:16px;margin-top:8px;">"设置止盈点，是给自己一个'到点收网'的纪律。没有纪律的投资，就是赌博。"</p>
        </div>

        <!-- 知识点 4.1 -->
        <div class="knowledge-point">
          <h3 class="knowledge-point-title">知识点 4.1：为什么止盈比选基更重要</h3>
          <div class="knowledge-point-content">
            <p>很多人花大量时间研究选哪只基金，却忽略了一个关键问题：<strong>什么时候卖？</strong></p>
            <p style="margin-top:16px;"><strong>一个真实的故事：</strong></p>
            <p>小王在2015年牛市顶点附近买入一只基金，一直定投到2020年。基金净值从最高点跌了50%后又涨了回来，小王的定投终于回本了。</p>
            <p>但问题是：如果他在2015年高点卖掉，然后等市场跌到低点再买入同样的金额，他的收益会是原来的3倍。</p>
          </div>
        </div>

        <div class="callout callout-danger">
          <svg class="callout-icon" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
          <div class="callout-text">
            <strong>核心洞见：</strong>"会买的是徒弟，会卖的是师傅。"选到好基金只是开始，学会止盈才是真正的高手。
          </div>
        </div>

        <div class="callout callout-success">
          <svg class="callout-icon" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
          <div class="callout-text">
            <strong>关键认知：</strong>止盈不是"卖在最高点"，那是不现实的。止盈是"卖在一个合理的点位"，让利润落袋为安。
          </div>
        </div>

        <!-- 知识点 4.2 -->
        <div class="knowledge-point">
          <h3 class="knowledge-point-title">知识点 4.2：四种止盈策略详解</h3>
          <div class="knowledge-point-content">
            <p style="margin-top:16px;"><strong>策略一：目标收益率止盈</strong></p>
            <p>设定一个明确的目标收益率，比如年化15%或累计收益率50%，达到就全部赎回。</p>
            <p><strong>优点：</strong>简单明了，执行容易</p>
            <p><strong>缺点：</strong>可能卖早了，错过大牛市</p>
            <p><strong>适用人群：</strong>追求稳健、不贪心的人</p>
            <div class="framework-ascii" style="margin:12px 0;font-size:11px;">
操作方法：
1. 设定目标收益率，比如累计收益率30%
2. 达到目标后，一次性全部赎回
3. 赎回后重新开始新一轮定投</div>

            <p style="margin-top:20px;"><strong>策略二：分批止盈</strong></p>
            <p>达到目标收益率后，不是全部赎回，而是分批卖出。比如：</p>
            <p>• 收益率达到30%时，赎回30%的份额</p>
            <p>• 收益率达到40%时，再赎回30%的份额</p>
            <p>• 收益率达到50%时，赎回剩余的40%</p>
            <p><strong>优点：</strong>不会完全踏空牛市</p>
            <p><strong>缺点：</strong>操作复杂，可能收益率不是最优</p>
            <p><strong>适用人群：</strong>有一定投资经验，想兼顾稳健和收益的人</p>

            <p style="margin-top:20px;"><strong>策略三：估值止盈（最推荐）</strong></p>
            <p>根据市场估值来判断是否该卖。市场整体估值偏低时持有，估值偏高时分批卖出。</p>
            <p><strong>优点：</strong>有逻辑支撑，能捕捉大牛市</p>
            <p><strong>缺点：</strong>需要关注市场估值数据，有一定门槛</p>
            <p><strong>适用人群：</strong>愿意学习、能坚持关注市场的人</p>
            <div class="framework-ascii" style="margin:12px 0;font-size:11px;">
操作方法：
1. 关注沪深300指数的PE估值
2. 当PE处于历史低位时，坚持定投
3. 当PE进入历史高位区间（PE>70%分位）时，开始分批止盈
4. 当PE进入历史极高位置（PE>90%分位）时，清仓</div>

            <p style="margin-top:20px;"><strong>策略四：最大回撤止盈</strong></p>
            <p>不设固定收益率目标，而是设定一个最大回撤阈值。比如：</p>
            <p>• 从最高点下跌10%时，止盈30%</p>
            <p>• 从最高点下跌15%时，再止盈30%</p>
            <p>• 从最高点下跌20%时，清仓</p>
            <p><strong>优点：</strong>能捕捉大牛市后期的涨幅</p>
            <p><strong>缺点：</strong>需要承受较大波动，心态要求高</p>
            <p><strong>适用人群：</strong>能承受波动、想博取高收益的人</p>
          </div>
        </div>

        <div class="callout callout-danger">
          <svg class="callout-icon" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
          <div class="callout-text">
            <strong>核心洞见：</strong>没有"最好"的止盈策略，只有"最适合你"的止盈策略。选择止盈策略的标准：你能坚持执行的策略，才是最好的策略。
          </div>
        </div>

        <!-- 知识点 4.3 -->
        <div class="knowledge-point">
          <h3 class="knowledge-point-title">知识点 4.3：四种策略对比</h3>
          <div class="knowledge-point-content">
            <table class="data-table">
              <thead><tr><th>策略</th><th style="text-align:center;">收益潜力</th><th style="text-align:center;">执行难度</th><th style="text-align:center;">心理压力</th><th style="text-align:center;">推荐指数</th></tr></thead>
              <tbody>
                <tr><td><strong>目标收益率</strong></td><td style="text-align:center;">中等</td><td style="text-align:center;">★☆☆☆☆</td><td style="text-align:center;">低</td><td style="text-align:center;">⭐⭐⭐⭐</td></tr>
                <tr><td><strong>分批止盈</strong></td><td style="text-align:center;">中高</td><td style="text-align:center;">★★★☆☆</td><td style="text-align:center;">中</td><td style="text-align:center;">⭐⭐⭐⭐</td></tr>
                <tr><td><strong>估值止盈</strong></td><td style="text-align:center;">高</td><td style="text-align:center;">★★★★☆</td><td style="text-align:center;">中高</td><td style="text-align:center;">⭐⭐⭐⭐⭐</td></tr>
                <tr><td><strong>最大回撤</strong></td><td style="text-align:center;">最高</td><td style="text-align:center;">★★★★★</td><td style="text-align:center;">高</td><td style="text-align:center;">⭐⭐⭐</td></tr>
              </tbody>
            </table>
            <p style="margin-top:16px;"><strong>我的建议：</strong></p>
            <p>• 投资新手：先用"目标收益率止盈"，简单易执行</p>
            <p>• 有一定经验：可以用"估值止盈"，收益潜力更大</p>
            <p>• 心态好、能承受波动：可以尝试"分批止盈"或"最大回撤止盈"</p>
          </div>
        </div>

        <!-- 知识点 4.4 -->
        <div class="knowledge-point">
          <h3 class="knowledge-point-title">知识点 4.4：止盈后的钱怎么用</h3>
          <div class="knowledge-point-content">
            <p>止盈不是目的，止盈是为了让财富落袋并继续增值。止盈后的资金，建议这样处理：</p>
            <p style="margin-top:16px;"><strong>方案一：重新开启新一轮定投</strong></p>
            <p>把止盈的资金分成12-24份，继续定投同一只或新的基金。</p>
            <p style="margin-top:12px;"><strong>方案二：配置到低风险资产</strong></p>
            <p>把止盈的资金部分转移到债券基金或货币基金，降低整体风险。</p>
            <p style="margin-top:12px;"><strong>方案三：犒劳自己</strong></p>
            <p>拿出止盈收益的10%-20%来奖励自己，增加正反馈。</p>
          </div>
        </div>

        <div class="callout callout-success">
          <svg class="callout-icon" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
          <div class="callout-text">
            <strong>关键认知：</strong>止盈是"收割成果"，不是"离开战场"。止盈后继续定投，才能让复利持续发挥作用。
          </div>
        </div>

      </div>
    </div>
  </div>
</section>
'''

append(h4)

# Form 4.1
form41 = '''
<!-- 表单 4.1 止盈策略选择表 -->
<section class="section section-warm">
  <div class="container">
    <div class="form-section reveal">
      <div class="form-header">
        <div class="form-title">表单 4.1｜止盈策略选择表</div>
        <div class="form-subtitle">目的：根据自己的情况，选择最适合的止盈策略 | 如实评估自己的情况 | 时间：10分钟</div>
      </div>
      <div class="form-body">
        <p style="font-size:13px;font-weight:700;margin-bottom:12px;">第一步：评估我的投资性格</p>
        <table class="data-table" style="margin-bottom:24px;">
          <thead><tr><th style="width:60%;">问题</th><th>选项</th></tr></thead>
          <tbody>
            <tr><td>我能承受多大的账户波动？</td><td>○ 10%以内就想卖  ○ 20%能接受  ○ 30%也能忍</td></tr>
            <tr><td>我每月愿意花多少时间关注基金？</td><td>○ 很少（5分钟以内）  ○ 偶尔（半小时内）  ○ 愿意经常看</td></tr>
            <tr><td>我的投资目标是？</td><td>○ 稳健增值  ○ 较高收益  ○ 追求最高收益</td></tr>
            <tr><td>我投资经验是？</td><td>○ 完全新手  ○ 有过投资经历  ○ 有多年经验</td></tr>
          </tbody>
        </table>

        <p style="font-size:13px;font-weight:700;margin-bottom:12px;">第二步：匹配止盈策略</p>
        <table class="data-table" style="margin-bottom:24px;">
          <thead><tr><th>策略</th><th>特点</th><th>适合人群</th><th>我的选择</th></tr></thead>
          <tbody>
            <tr><td><strong>目标收益率止盈</strong></td><td>简单明了，设定目标后自动执行</td><td>新手、没时间看盘、追求稳健</td><td>○</td></tr>
            <tr><td><strong>分批止盈</strong></td><td>分成几批卖出，兼顾稳健和收益</td><td>有经验、能承受一定波动</td><td>○</td></tr>
            <tr><td><strong>估值止盈</strong></td><td>根据市场估值判断，能捕捉大牛市</td><td>愿意学习、能坚持关注市场</td><td>○</td></tr>
            <tr><td><strong>最大回撤止盈</strong></td><td>从高点下跌一定比例后止盈</td><td>心态好、能承受大波动</td><td>○</td></tr>
          </tbody>
        </table>

        <p style="font-size:13px;font-weight:700;margin-bottom:12px;">第三步：设定我的止盈参数</p>
        <table class="data-table" style="margin-bottom:24px;">
          <thead><tr><th>策略</th><th>参数设定</th><th>我的选择</th></tr></thead>
          <tbody>
            <tr><td><strong>目标收益率止盈</strong></td><td>目标收益率：____%</td><td></td></tr>
            <tr><td><strong>分批止盈</strong></td><td>第一批止盈点：____%，止盈比例：____%</td><td></td></tr>
            <tr><td><strong>估值止盈</strong></td><td>开始止盈的PE分位：____%</td><td></td></tr>
            <tr><td><strong>最大回撤止盈</strong></td><td>回撤____%时，止盈____%</td><td></td></tr>
          </tbody>
        </table>

        <p style="font-size:13px;font-weight:700;margin-bottom:12px;">第四步：我的止盈计划卡</p>
        <div class="exercise-form">
          <p>我选择的止盈策略：____________</p>
          <p>止盈触发条件：____________</p>
          <p style="margin-top:12px;">止盈操作步骤：</p>
          <p>① ____________</p>
          <p>② ____________</p>
          <p>③ ____________</p>
          <p style="margin-top:12px;">止盈后资金处理方式：____________</p>
        </div>
      </div>
    </div>
  </div>
</section>
'''

append(form41)

# Form 4.2
form42 = '''
<!-- 表单 4.2 我的止盈执行追踪表 -->
<section class="section section-alt">
  <div class="container">
    <div class="form-section reveal">
      <div class="form-header">
        <div class="form-title">表单 4.2｜我的止盈执行追踪表</div>
        <div class="form-subtitle">目的：记录止盈操作执行情况，定期复盘 | 每次止盈后记录，坚持追踪 | 时间：5分钟/次</div>
      </div>
      <div class="form-body">
        <p style="font-size:13px;margin-bottom:16px;"><strong>我的定投标的：</strong>____________　　<strong>我的止盈策略：</strong>____________</p>
        <table class="data-table" style="margin-bottom:24px;">
          <thead><tr><th>止盈日期</th><th>触发原因</th><th style="text-align:center;">止盈金额（元）</th><th style="text-align:center;">止盈份额</th><th style="text-align:center;">收益率</th><th>止盈后状态</th></tr></thead>
          <tbody>
            <tr><td>____年__月__日</td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td>____年__月__日</td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td>____年__月__日</td><td></td><td></td><td></td><td></td><td></td></tr>
          </tbody>
        </table>

        <p style="font-size:13px;font-weight:700;margin-bottom:12px;">止盈后资金使用记录：</p>
        <table class="data-table" style="margin-bottom:24px;">
          <thead><tr><th>止盈日期</th><th style="text-align:center;">止盈金额</th><th>重新定投标的</th><th style="text-align:center;">定投金额</th><th>开始日期</th></tr></thead>
          <tbody>
            <tr><td></td><td style="text-align:center;">元</td><td></td><td style="text-align:center;">元</td><td>____年__月__日</td></tr>
            <tr><td></td><td style="text-align:center;">元</td><td></td><td style="text-align:center;">元</td><td>____年__月__日</td></tr>
          </tbody>
        </table>

        <p style="font-size:13px;font-weight:700;margin-bottom:12px;">止盈复盘记录：</p>
        <table class="data-table">
          <thead><tr><th>复盘时间</th><th>止盈操作是否正确</th><th>总结</th></tr></thead>
          <tbody>
            <tr><td>____年__月</td><td>○ 是  ○ 否</td><td></td></tr>
            <tr><td>____年__月</td><td>○ 是  ○ 否</td><td></td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</section>
'''

append(form42)

# Exercises for Habit 4
h4_exercises = '''
<!-- 习惯 4 练习 -->
<section class="section section-warm">
  <div class="container">
    <div class="section-head reveal">
      <p class="eyebrow">课堂练习</p>
      <h2 class="serif">第四章练习</h2>
    </div>

    <div class="exercise reveal" style="margin-bottom:24px;">
      <div class="exercise-header">
        <div class="exercise-icon"><svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg></div>
        <span class="exercise-title">练习 4-A（基础）：止盈策略识别</span>
      </div>
      <div class="exercise-body">
        <p class="exercise-instruction">判断以下投资者采用的止盈策略类型：</p>
        <p class="exercise-instruction">① 小李设定了一个目标：基金收益率达到30%就全部赎回</p>
        <p class="exercise-instruction">② 小王关注沪深300指数的PE估值，当PE超过历史70%分位时开始卖出</p>
        <p class="exercise-instruction">③ 小张的策略是：从最高点下跌10%时，卖掉30%的仓位</p>
        <p class="exercise-instruction">④ 小刘的分批策略：30%时卖30%，40%时卖30%，50%时清仓</p>
        <table class="data-table" style="margin-top:16px;">
          <thead><tr><th style="width:15%;">投资者</th><th>止盈策略类型</th></tr></thead>
          <tbody>
            <tr><td>① 小李</td><td></td></tr>
            <tr><td>② 小王</td><td></td></tr>
            <tr><td>③ 小张</td><td></td></tr>
            <tr><td>④ 小刘</td><td></td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="exercise reveal" style="margin-bottom:24px;">
      <div class="exercise-header">
        <div class="exercise-icon"><svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg></div>
        <span class="exercise-title">练习 4-B（应用）：止盈策略对比分析</span>
      </div>
      <div class="exercise-body">
        <p class="exercise-instruction">小赵分别用两种策略做定投，最终都触发了止盈，请帮他对比：</p>
        <p class="exercise-instruction" style="background:var(--warm);padding:12px;border-radius:4px;margin:12px 0;"><strong>策略A（目标收益率止盈）：</strong>目标收益率：40% | 实际收益率：42%时止盈 | 持有时间：3年 | 累计投入：36000元 | 收益金额：约15000元</p>
        <p class="exercise-instruction" style="background:var(--warm);padding:12px;border-radius:4px;margin-bottom:16px;"><strong>策略B（估值止盈）：</strong>持有时间：5年（市场经历了一轮大牛市）| 累计投入：60000元 | 收益金额：约55000元</p>
        <div class="exercise-form">
          <p>对比分析：</p>
          <p>收益率角度：____________</p>
          <p>绝对收益角度：____________</p>
          <p>时间效率（年化收益）角度：____________</p>
          <p>我学到的教训是：____________</p>
        </div>
      </div>
    </div>

    <div class="exercise reveal">
      <div class="exercise-header">
        <div class="exercise-icon"><svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg></div>
        <span class="exercise-title">练习 4-C（拓展）：我的止盈实战方案</span>
      </div>
      <div class="exercise-body">
        <p class="exercise-instruction">用你真实的投资目标，制定一份完整的止盈方案：</p>
        <div class="exercise-form">
          <textarea style="height:260px;" placeholder="我的投资目标：____________
我能承受的最大亏损：____%

我选择的止盈策略：____________

我的止盈参数设定：
第一止盈点：____%时，赎回____%
第二止盈点：____%时，赎回____%
最终清仓点：____%

止盈后的资金安排：
① ____%继续定投
② ____%转入低风险资产
③ ____%犒劳自己

我给自己的止盈纪律是：
1. ____________
2. ____________

签名：________________　日期：________________"></textarea>
        </div>
      </div>
    </div>
  </div>
</section>
'''

append(h4_exercises)

# Habit 4 framework
h4_framework = '''
<!-- 习惯 4 知识框架 -->
<section class="section section-alt">
  <div class="container">
    <div class="kf reveal">
      <div class="kf-header">
        <div class="kf-icon"><svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg></div>
        <span class="kf-title">第四章知识框架</span>
      </div>
      <div class="kf-body">
        <div class="framework-ascii">
习惯 4：止盈策略——会买的是徒弟，会卖的才是师傅
│
├── 止盈的重要性
│   ├── 不会止盈，定投可能白干
│   ├── 贪婪是止盈最大的敌人
│   └── 止盈是"收割成果"的纪律
│
├── 四种止盈策略
│   ├── 目标收益率止盈：简单，适合新手
│   ├── 分批止盈：稳健，适合有经验者
│   ├── 估值止盈：收益高，需要关注市场
│   └── 最大回撤止盈：收益最高，心理压力大
│
└── 止盈后的资金处理
    ├── 继续定投
    ├── 配置低风险资产
    └── 适度犒劳自己
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
          <div class="checklist-item"><div class="checklist-box"></div><span class="checklist-text">买入基金的第一天就设定止盈点</span></div>
          <div class="checklist-item"><div class="checklist-box"></div><span class="checklist-text">达到止盈点后，不贪婪，坚决执行</span></div>
          <div class="checklist-item"><div class="checklist-box"></div><span class="checklist-text">止盈后不停止定投，让复利继续</span></div>
        </div>
        <p style="font-size:15px;font-weight:700;color:var(--red);margin:16px 0 8px;font-family:var(--font-serif);">"卖掉盈利的，持有亏损的"——这是反人性的操作，才是真正的高手。</p>
        <div class="signature-line">
          <div class="signature-field"><span>签名：</span><div class="line"></div></div>
          <div class="signature-field"><span>日期：</span><div class="line"></div></div>
        </div>
      </div>
    </div>
  </div>
</section>
'''

append(h4_framework)

print("Habit 4 complete")
