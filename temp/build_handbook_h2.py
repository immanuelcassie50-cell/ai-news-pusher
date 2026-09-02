#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Build the student handbook HTML - Part 4: Habit 2 选基策略"""

OUTPUT_PATH = r"D:\新课开发\金融学\03-基金定投实战-选基择时与止盈策略\学员手册\03-学员手册.html"

def append(content):
    with open(OUTPUT_PATH, 'a', encoding='utf-8') as f:
        f.write(content)
    print(f"Appended {len(content)} bytes")

h2 = '''
<!-- ══ 习惯 2：选基策略 ══ -->
<section class="section section-alt" id="h2">
  <div class="container">
    <div class="habit-card reveal">
      <div class="habit-header">
        <p class="habit-num"><span class="tag-module tag-m2">习惯二</span></p>
        <h2 class="habit-title">选基策略——如何挑选好基金</h2>
        <p class="habit-subtitle">选基金就是选人：一个好基金经理，顶过一万个内幕消息</p>
      </div>
      <div class="habit-body">

        <div class="insight-box" style="margin-bottom:28px;">
          <p class="insight-quote">"基民亏钱的三大原因：选错基金、持有太短、卖得太早。第一条的责任在基金经理，后两条的责任在自己。"</p>
        </div>

        <!-- 知识点 2.1 -->
        <div class="knowledge-point">
          <h3 class="knowledge-point-title">知识点 2.1：选基金的五大维度</h3>
          <div class="knowledge-point-content">
            <p>选基金不是凭感觉，而是有系统的方法。我总结了五个最重要的维度：</p>
            <p style="margin-top:16px;"><strong>维度一：基金经理</strong></p>
            <p>基金经理是基金的灵魂。一个好的基金经理：</p>
            <p>• 有稳定的投资风格（不追涨杀跌、不漂移）</p>
            <p>• 经历过牛熊市考验（至少3-5年）</p>
            <p>• 管理规模适中（太大不好管，太小有清盘风险）</p>
            <p style="margin-top:16px;"><strong>维度二：基金规模</strong></p>
            <p>基金规模不是越大越好，也不是越小越好：</p>
            <p>• 规模太大（超过100亿）：基金经理难以灵活调仓，容易"船大难掉头"</p>
            <p>• 规模太小（少于2亿）：有清盘风险，而且可能影响赎回</p>
            <p>• 合适规模：2亿-100亿之间，具体要看基金类型</p>
            <p style="margin-top:16px;"><strong>维度三：历史业绩</strong></p>
            <p>看历史业绩，但不是看"最近一个月涨了多少"，而是：</p>
            <p>• 长期业绩（3年、5年）是骡子是马</p>
            <p>• 是否能跑赢业绩比较基准（基金给自己设的对标线）</p>
            <p>• 业绩的稳定性（不要今年前三明年垫底）</p>
            <p style="margin-top:16px;"><strong>维度四：费率</strong></p>
            <p>基金的手续费看似不起眼，但长期复利影响很大：</p>
            <p>• 申购费：买的时候收，通常1%-1.5%</p>
            <p>• 管理费：每年收取，通常0.5%-1.5%</p>
            <p>• 赎回费：持有不满一年赎回时收，通常0.5%-1.5%</p>
            <p style="margin-top:16px;"><strong>维度五：风险指标</strong></p>
            <p>• 最大回撤：从最高点到最低点跌了多少</p>
            <p>• 夏普比率：承担一单位风险能获得多少超额收益</p>
            <p>• 标准差：基金净值的波动程度</p>
          </div>
        </div>

        <div class="callout callout-danger">
          <svg class="callout-icon" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
          <div class="callout-text">
            <strong>核心洞见：</strong>选基金不是选"最赚钱的"，而是选"最适合你的"。高收益往往伴随高风险，适合自己的才是最好的。
          </div>
        </div>

        <!-- 知识点 2.2 -->
        <div class="knowledge-point">
          <h3 class="knowledge-point-title">知识点 2.2：如何读懂基金评级</h3>
          <div class="knowledge-point-content">
            <p>基金评级是第三方机构对基金的综合评估，目前国内主要的评级机构有：</p>
            <p>• 晨星评级（五年五星最高）</p>
            <p>• 银河证券评级</p>
            <p>• 招商证券评级</p>
            <p style="margin-top:16px;"><strong>评级怎么看：</strong></p>
            <p>⭐⭐⭐⭐⭐ 五星基金：同类基金中表现最好的前10%</p>
            <p>⭐⭐⭐⭐ 四星基金：前11%-30%</p>
            <p>⭐⭐⭐ 三星基金：前31%-50%</p>
            <p style="margin-top:16px;"><strong>评级的局限：</strong></p>
            <p>1. 评级反映的是过去，不是未来。过去表现好的基金，未来不一定好。</p>
            <p>2. 评级只对同类基金有效，不能跨类型比较。</p>
            <p>3. 有些基金可能因为换了基金经理，评级已经过时。</p>
          </div>
        </div>

        <div class="callout callout-success">
          <svg class="callout-icon" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
          <div class="callout-text">
            <strong>关键认知：</strong>基金评级是参考，不是圣旨。拿到五星的基金也可能亏钱，拿到三星的基金也可能逆袭。评级的意义是帮你缩小选择范围，而不是直接给你答案。
          </div>
        </div>

        <!-- 知识点 2.3 -->
        <div class="knowledge-point">
          <h3 class="knowledge-point-title">知识点 2.3：常见选基误区</h3>
          <div class="knowledge-point-content">
            <p><strong>误区一：追涨杀跌</strong></p>
            <p>"这只基金最近涨得好，赶紧买！"——这是最容易亏钱的方式。基金净值已经涨上去了，你买入就是高位接盘。</p>
            <p style="margin-top:16px;"><strong>误区二：买冠军基金</strong></p>
            <p>"去年收益率最高的基金，今年还会涨吧？"——错了。基金行业有"冠军魔咒"，每年的冠军基金，第二年往往表现平平。因为市场风格会变，去年的策略未必适合今年。</p>
            <p style="margin-top:16px;"><strong>误区三：只看净值高低</strong></p>
            <p>"净值才1块钱，比3块钱的便宜多了！"——这是错误的认知。基金净值高低和它是否值得买没有关系。净值3元的基金可能比1元的更值得买，因为基金经理能力更强。</p>
            <p style="margin-top:16px;"><strong>误区四：买新基金</strong></p>
            <p>"新基金便宜，1块钱净值！"——新基金没有历史业绩可参考，而且通常有封闭期无法赎回。老基金有历史数据可以分析，更值得参考。</p>
          </div>
        </div>

        <div class="callout callout-success">
          <svg class="callout-icon" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
          <div class="callout-text">
            <strong>关键认知：</strong>选基金的本质是选人、选体系、选纪律。不要被表面的数字迷惑，要看背后的逻辑。
          </div>
        </div>

        <!-- 知识点 2.4 -->
        <div class="knowledge-point">
          <h3 class="knowledge-point-title">知识点 2.4：选基检查清单</h3>
          <div class="knowledge-point-content">
            <p>在买入一只基金之前，请逐项检查：</p>
            <div class="checklist" style="margin-top:12px;">
              <div class="checklist-item"><div class="checklist-box"></div><span class="checklist-text">这只基金的基金经理是谁？他的从业年限有多长？</span></div>
              <div class="checklist-item"><div class="checklist-box"></div><span class="checklist-text">这只基金过去3-5年的业绩如何？是否跑赢基准？</span></div>
              <div class="checklist-item"><div class="checklist-box"></div><span class="checklist-text">这只基金的规模是多少？是否有清盘风险？</span></div>
              <div class="checklist-item"><div class="checklist-box"></div><span class="checklist-text">这只基金的手续费是多少？长期持有是否划算？</span></div>
              <div class="checklist-item"><div class="checklist-box"></div><span class="checklist-text">这只基金的风险指标（最大回撤、夏普比率）如何？</span></div>
              <div class="checklist-item"><div class="checklist-box"></div><span class="checklist-text">我是否了解这只基金的投资策略和风格？</span></div>
              <div class="checklist-item"><div class="checklist-box"></div><span class="checklist-text">这只基金适合我的风险承受能力吗？</span></div>
              <div class="checklist-item"><div class="checklist-box"></div><span class="checklist-text">我打算持有这只基金多久？</span></div>
            </div>
            <p style="margin-top:12px;">如果以上问题你都能回答，并且答案都满意，那就可以考虑买入。</p>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>
'''

append(h2)

# Form 2.1
form21 = '''
<!-- 表单 2.1 选基评估表（十维度） -->
<section class="section section-warm">
  <div class="container">
    <div class="form-section reveal">
      <div class="form-header">
        <div class="form-title">表单 2.1｜选基评估表（十维度）</div>
        <div class="form-subtitle">目的：用系统化的方法评估一只基金是否值得买入 | 对每个维度进行打分（1-10分）| 时间：15分钟</div>
      </div>
      <div class="form-body">
        <p style="font-size:13px;font-weight:700;margin-bottom:12px;">请对你要评估的基金填写以下表格：</p>
        <table class="data-table" style="margin-bottom:16px;">
          <thead><tr><th style="width:20%;">评估维度</th><th>评估要点</th><th style="width:12%;text-align:center;">评分（1-10）</th><th>我的备注</th></tr></thead>
          <tbody>
            <tr><td><strong>基金经理</strong></td><td>从业年限____年，管理这只基金____年</td><td></td><td></td></tr>
            <tr><td><strong>基金经理</strong></td><td>经历几次牛熊市？是否有稳定风格？</td><td></td><td></td></tr>
            <tr><td><strong>基金规模</strong></td><td>目前规模____亿，是否在合理区间？</td><td></td><td></td></tr>
            <tr><td><strong>历史业绩</strong></td><td>过去1年收益：____%，同类排名：____</td><td></td><td></td></tr>
            <tr><td><strong>历史业绩</strong></td><td>过去3年收益：____%，同类排名：____</td><td></td><td></td></tr>
            <tr><td><strong>业绩稳定性</strong></td><td>是否持续跑赢业绩基准？波动多大？</td><td></td><td></td></tr>
            <tr><td><strong>费率</strong></td><td>申购费____%，管理费____%/年，赎回费____%</td><td></td><td></td></tr>
            <tr><td><strong>风险指标</strong></td><td>最大回撤：____%，夏普比率：____</td><td></td><td></td></tr>
            <tr><td><strong>投资策略</strong></td><td>投资策略清晰吗？你能理解吗？</td><td></td><td></td></tr>
            <tr><td><strong>适合程度</strong></td><td>这只基金适合你的风险偏好吗？</td><td></td><td></td></tr>
          </tbody>
        </table>
        <p style="font-size:13px;font-weight:700;margin-bottom:8px;">综合评估：</p>
        <table class="data-table">
          <thead><tr><th>项目</th><th>填写</th></tr></thead>
          <tbody>
            <tr><td><strong>十维度总得分</strong></td><td>____分（满分100）</td></tr>
            <tr><td><strong>是否值得买入</strong></td><td>○ 是（80分以上）  ○ 可以考虑（60-80分）  ○ 否（60分以下）</td></tr>
            <tr><td><strong>我打算持有多久</strong></td><td>____年</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</section>
'''

append(form21)

# Form 2.2
form22 = '''
<!-- 表单 2.2 我的基金库建设表 -->
<section class="section section-alt">
  <div class="container">
    <div class="form-section reveal">
      <div class="form-header">
        <div class="form-title">表单 2.2｜我的基金库建设表</div>
        <div class="form-subtitle">目的：建立你自己的基金观察池，从中选择最适合定投的标的 | 至少关注3-5只基金 | 时间：12分钟</div>
      </div>
      <div class="form-body">
        <p style="font-size:13px;font-weight:700;margin-bottom:12px;">第一步：列出你正在关注或持有的基金</p>
        <table class="data-table" style="margin-bottom:24px;">
          <thead><tr><th>基金名称</th><th>基金代码</th><th>基金类型</th><th style="text-align:center;">我的持有金额</th><th>买入理由</th></tr></thead>
          <tbody>
            <tr><td></td><td></td><td></td><td style="text-align:center;">元</td><td></td></tr>
            <tr><td></td><td></td><td></td><td style="text-align:center;">元</td><td></td></tr>
            <tr><td></td><td></td><td></td><td style="text-align:center;">元</td><td></td></tr>
            <tr><td></td><td></td><td></td><td style="text-align:center;">元</td><td></td></tr>
            <tr><td></td><td></td><td></td><td style="text-align:center;">元</td><td></td></tr>
          </tbody>
        </table>

        <p style="font-size:13px;font-weight:700;margin-bottom:12px;">第二步：按照五维度评估你的候选基金</p>
        <table class="data-table" style="margin-bottom:24px;">
          <thead><tr><th>基金名称</th><th style="text-align:center;">基金经理（20%）</th><th style="text-align:center;">规模（15%）</th><th style="text-align:center;">业绩（30%）</th><th style="text-align:center;">费率（15%）</th><th style="text-align:center;">风险（20%）</th><th style="text-align:center;">综合得分</th></tr></thead>
          <tbody>
            <tr><td></td><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;"></td></tr>
            <tr><td></td><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;"></td></tr>
            <tr><td></td><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;"></td></tr>
          </tbody>
        </table>

        <p style="font-size:13px;font-weight:700;margin-bottom:12px;">第三步：确定我的定投基金池</p>
        <div class="exercise-form">
          <p>我最终选择定投的基金是：</p>
          <p>基金名称：____________　　基金代码：____________</p>
          <p>定投金额：____________元/次　　定投频率：____________（每周/每两周/每月）</p>
          <p>我的选择理由：____________</p>
        </div>
      </div>
    </div>
  </div>
</section>
'''

append(form22)

# Exercises for Habit 2
h2_exercises = '''
<!-- 习惯 2 练习 -->
<section class="section section-warm">
  <div class="container">
    <div class="section-head reveal">
      <p class="eyebrow">课堂练习</p>
      <h2 class="serif">第二章练习</h2>
    </div>

    <div class="exercise reveal" style="margin-bottom:24px;">
      <div class="exercise-header">
        <div class="exercise-icon"><svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg></div>
        <span class="exercise-title">练习 2-A（基础）：选基维度识别</span>
      </div>
      <div class="exercise-body">
        <p class="exercise-instruction">以下是小王选基金时考虑的因素，请判断分别属于哪个维度：</p>
        <p class="exercise-instruction">① 这只基金的基金经理从业已经8年，管理这只基金5年了</p>
        <p class="exercise-instruction">② 这只基金规模50亿，不算太大</p>
        <p class="exercise-instruction">③ 这只基金过去5年收益率128%，年化18%</p>
        <p class="exercise-instruction">④ 这只基金的手续费比较低，持有超过一年赎回费只要0.25%</p>
        <p class="exercise-instruction">⑤ 这只基金历史上最大回撤是35%</p>
        <table class="data-table" style="margin-top:16px;">
          <thead><tr><th style="width:15%;">考虑因素</th><th>维度</th></tr></thead>
          <tbody>
            <tr><td>①</td><td></td></tr>
            <tr><td>②</td><td></td></tr>
            <tr><td>③</td><td></td></tr>
            <tr><td>④</td><td></td></tr>
            <tr><td>⑤</td><td></td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="exercise reveal" style="margin-bottom:24px;">
      <div class="exercise-header">
        <div class="exercise-icon"><svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg></div>
        <span class="exercise-title">练习 2-B（应用）：基金对比分析</span>
      </div>
      <div class="exercise-body">
        <p class="exercise-instruction">小李想要在以下两只基金中选择一只进行定投，请帮他对比分析：</p>
        <p class="exercise-instruction" style="background:var(--warm);padding:12px;border-radius:4px;margin:12px 0;"><strong>基金A：</strong>基金经理：王某，从业12年，管理这只基金6年 | 规模：80亿 | 过去3年收益：95% | 最大回撤：28% | 管理费：1.5%/年</p>
        <p class="exercise-instruction" style="background:var(--warm);padding:12px;border-radius:4px;margin-bottom:16px;"><strong>基金B：</strong>基金经理：李某，从业5年，管理这只基金3年 | 规模：15亿 | 过去3年收益：110% | 最大回撤：42% | 管理费：0.8%/年</p>
        <div class="exercise-form">
          <p>对比分析：</p>
          <p>基金经理角度：____________</p>
          <p>规模角度：____________</p>
          <p>业绩角度：____________</p>
          <p>风险角度：____________</p>
          <p>费率角度：____________</p>
          <p>我的推荐及理由：____________</p>
        </div>
      </div>
    </div>

    <div class="exercise reveal">
      <div class="exercise-header">
        <div class="exercise-icon"><svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg></div>
        <span class="exercise-title">练习 2-C（拓展）：我的选基实战</span>
      </div>
      <div class="exercise-body">
        <p class="exercise-instruction">用你自己的真实基金或你正在研究的基金，完成一次完整的选基评估：</p>
        <div class="exercise-form">
          <textarea style="height:280px;" placeholder="我正在评估的基金：
基金名称：____________
基金代码：____________

五维度评估：

1. 基金经理
   从业年限：____年，管理本基金：____年
   投资风格：____________
   评分：____分

2. 基金规模
   当前规模：____亿
   评分：____分

3. 历史业绩
   过去1年：____%（同类排名____）
   过去3年：____%（同类排名____）
   评分：____分

4. 费率
   申购费：____%，管理费：____%/年
   评分：____分

5. 风险指标
   最大回撤：____%
   夏普比率：____
   评分：____分

综合得分：____分（满分100）

我的结论：____________

签名：________________　日期：________________"></textarea>
        </div>
      </div>
    </div>
  </div>
</section>
'''

append(h2_exercises)

# Habit 2 framework
h2_framework = '''
<!-- 习惯 2 知识框架 -->
<section class="section section-alt">
  <div class="container">
    <div class="kf reveal">
      <div class="kf-header">
        <div class="kf-icon"><svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg></div>
        <span class="kf-title">第二章知识框架</span>
      </div>
      <div class="kf-body">
        <div class="framework-ascii">
习惯 2：选基策略——如何挑选好基金
│
├── 五大选基维度
│   ├── 基金经理：稳定性、从业年限、投资风格
│   ├── 基金规模：太大太小都有问题，2亿-100亿为宜
│   ├── 历史业绩：看3-5年，看同类排名，看是否跑赢基准
│   ├── 费率：长期持有影响复利
│   └── 风险指标：最大回撤、夏普比率
│
├── 基金评级
│   ├── 五星前10%、四星前11%-30%
│   └── 评级是参考，不是圣旨
│
└── 常见误区
    ├── 追涨杀跌
    ├── 买冠军基金
    ├── 只看净值高低
    └── 偏好新基金
        </div>
      </div>
    </div>

    <div class="exercise reveal" style="margin-top:24px;">
      <div class="exercise-header">
        <div class="exercise-icon"><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></div>
        <span class="exercise-title">本章行为承诺</span>
      </div>
      <div class="exercise-body">
        <p style="font-size:13px;margin-bottom:12px;">从今天起，我选基金之前，一定会先问自己：</p>
        <p style="font-size:15px;font-weight:700;color:var(--red);margin-bottom:16px;font-family:var(--font-serif);">"这只基金的基金经理是谁？他靠得住吗？"</p>
        <p style="font-size:13px;margin-bottom:8px;"><strong>我承诺：</strong></p>
        <div class="checklist">
          <div class="checklist-item"><div class="checklist-box"></div><span class="checklist-text">买入前完成十维度评估表</span></div>
          <div class="checklist-item"><div class="checklist-box"></div><span class="checklist-text">不追涨杀跌，不买冠军基金</span></div>
          <div class="checklist-item"><div class="checklist-box"></div><span class="checklist-text">费率也是选基的重要考量</span></div>
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

append(h2_framework)

print("Habit 2 complete")
