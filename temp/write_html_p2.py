#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Write Part 2: Module 1 content"""

output_path = r"D:\新课开发\金融学\03-基金定投实战-选基择时与止盈策略\教学文档\教学文档-完整版.html"

part2 = """
    <!-- ========== MODULE 1 ========== -->
    <div id="module-1" class="module-header m-1">
      <span class="module-tag t-1">模块一</span>
      <h1>基金投资基础认知</h1>
      <p class="subtitle">时长：60分钟</p>
    </div>

    <section class="section">
      <h2 class="section-title">学习目标</h2>
      <div class="objectives">
        <ul>
          <li>准确区分货币基金、债券基金、混合基金、股票基金、指数基金、ETF的核心差异</li>
          <li>用自己的话解释"为什么基金比股票更适合普通人"</li>
          <li>掌握基金的核心概念：净值/份额/申购赎回/管理费/托管费</li>
        </ul>
      </div>
    </section>

    <section class="section">
      <h2 class="section-title">知识点一：为什么选基金而不是股票（10分钟）</h2>

      <p>"先从一个数据开始。</p>
      <p>A股市场有一个说法：'七亏两平一赚'——炒股票的人，70%亏钱，20%持平，只有10%赚钱。</p>
      <p>为什么会这样？因为股票投资太难了。</p>
      <p><strong>股票投资需要什么？</strong></p>
      <p>你需要每天研究K线图、研究财报、研究行业趋势、研究宏观经济……而且就算你研究得再透彻，市场也不一定按你的判断走。机构有专业团队、有内幕信息、有量化模型，普通人炒股就像拿着小米加步枪和飞机坦克打。</p>
      <p><strong>那普通人怎么参与资本市场？</strong></p>
      <p>答案就是——<strong>基金</strong>。</p>
      <p>基金是什么？基金就是一大堆人把钱凑在一起，交给专业的基金经理和投研团队来管理。他们用这些钱同时投资几十上百只股票，分散了风险，也享受了专业研究的红利。</p>
      <p><strong>基金相比股票，有四大不可替代的优势：</strong></p>

      <div class="step-process">
        <div class="step-item">
          <div class="step-num">1</div>
          <div class="step-content">
            <h4>专业管理</h4>
            <p>基金经理不是一个人，是一个团队。好的基金公司有几十甚至上百人的研究团队，每天研究宏观经济、行业趋势、公司基本面。普通人花同样的时间研究，你研究得过他们吗？</p>
          </div>
        </div>
        <div class="step-item">
          <div class="step-num">2</div>
          <div class="step-content">
            <h4>分散投资</h4>
            <p>一只股票基金通常持有几十到上百只股票。假设你持有某只重仓股，它突然爆雷（财务造假、老板跑路），单只股票可能跌50%。但对基金来说，这只股票可能只占2%的仓位，对整体影响只有1%。</p>
          </div>
        </div>
        <div class="step-item">
          <div class="step-num">3</div>
          <div class="step-content">
            <h4>门槛低</h4>
            <p>买股票最少买100股贵州茅台，按今天的价格要十几万。但买基金，100块就能起投。基金定投每月300、500都可以，非常适合工薪族。</p>
          </div>
        </div>
        <div class="step-item">
          <div class="step-num">4</div>
          <div class="step-content">
            <h4>流动性好</h4>
            <p>大多数基金可以随时申赎，T+1到账。股票你想卖不一定卖得掉（涨跌停时），基金不存在这个问题。</p>
          </div>
        </div>
      </div>

      <div class="alert success">
        <div class="alert-title">结论</div>
        <p><strong>这就是为什么我说：基金是目前最适合普通人的投资工具。</strong></p>
        <p>基金不能让你暴富，但能让你获得市场平均收益。长期坚持年化10-12%，已经能打败市场上90%的投资者了。</p>
      </div>
    </section>

    <section class="section">
      <h2 class="section-title">知识点二：基金分类体系（20分钟）</h2>

      <p>"基金有几千只，类型完全不同。如果把基金比作水果，基金分类就是告诉你：苹果、香蕉、橘子、葡萄各自的甜度和口感。</p>
      <p><strong>基金按投资方向分，主要有六大类型：</strong></p>

      <h3>第一类：货币基金</h3>
      <p>货币基金专门投资短期国债、银行存款、央行票据等短期高信用工具。</p>
      <div class="info-grid">
        <div class="info-card"><div class="value">几乎无</div><div class="label">风险等级</div></div>
        <div class="info-card"><div class="value">约2%</div><div class="label">年化收益</div></div>
        <div class="info-card"><div class="value">极高</div><div class="label">流动性</div></div>
      </div>
      <p><strong>典型代表：余额宝、微信零钱通</strong>——其实它们本质就是货币基金。</p>
      <p><strong>适合人群：</strong>保守型投资者，或者用来存放应急账户的资金。</p>
      <p>想象你有一笔钱随时可能要动用，放货币基金比放银行活期强多了——收益是活期的5-10倍，而且随时能用。</p>

      <h3>第二类：债券基金</h3>
      <p>债券基金主要投资债券（国债、企业债、可转债等）。</p>
      <div class="info-grid">
        <div class="info-card"><div class="value">较小</div><div class="label">风险等级</div></div>
        <div class="info-card"><div class="value">4-6%</div><div class="label">年化收益</div></div>
        <div class="info-card"><div class="value">较高</div><div class="label">流动性</div></div>
      </div>
      <p><strong>债券基金为什么会波动？</strong></p>
      <ul>
        <li>市场利率上升时，存量债券价格下跌（债券价格和市场利率呈反向关系）</li>
        <li>债券发行人信用违约</li>
      </ul>
      <p>但如果你持有债券基金2-3年以上，亏钱的概率极低。</p>
      <p><strong>适合人群：</strong>稳健型投资者，或投资周期在1-3年的资金。</p>

      <h3>第三类：混合基金</h3>
      <p>混合基金同时投资股票和债券，比例灵活。</p>
      <div class="info-grid">
        <div class="info-card"><div class="value">中等</div><div class="label">风险等级</div></div>
        <div class="info-card"><div class="value">8-12%</div><div class="label">年化收益</div></div>
        <div class="info-card"><div class="value">较高</div><div class="label">流动性</div></div>
      </div>
      <p><strong>典型代表：</strong>灵活配置混合基金、偏股混合基金、偏债混合基金</p>
      <p>混合基金可以买股票（最高可达80%），债券基金只能买债券。股票占比越高，潜在收益越高，潜在风险也越大。</p>
      <p><strong>适合人群：</strong>稳健型投资者，愿意承受一定波动以获得更高收益。</p>

      <h3>第四类：股票基金</h3>
      <p>股票基金80%以上的仓位必须投资股票。</p>
      <div class="info-grid">
        <div class="info-card"><div class="value">高</div><div class="label">风险等级</div></div>
        <div class="info-card"><div class="value">10-15%</div><div class="label">年化收益</div></div>
        <div class="info-card"><div class="value">较高</div><div class="label">流动性</div></div>
      </div>
      <p><strong>一个真实案例：</strong>2020年新冠疫情期间，股票基金最大回撤普遍超过20%，有些甚至跌了30%以上。但如果你坚持持有到2021年底，很多基金不仅收复失地，还创新高。</p>
      <p><strong>这就是股票基金的特性：短期波动大，长期收益高。</strong>前提是你能承受这个波动，并且坚持持有。</p>
      <p><strong>适合人群：</strong>积极型投资者，且投资周期在3年以上。</p>

      <h3>第五类：指数基金</h3>
      <p>指数基金不选股，它按照某个指数的成分股来配置股票，完全复制指数。</p>
      <div class="info-grid">
        <div class="info-card"><div class="value">高</div><div class="label">风险等级</div></div>
        <div class="info-card"><div class="value">8-12%</div><div class="label">年化收益</div></div>
        <div class="info-card"><div class="value">较高</div><div class="label">流动性</div></div>
      </div>
      <p><strong>典型代表：</strong>沪深300指数基金、中证500指数基金、纳斯达克100指数基金</p>
      <p><strong>指数基金为什么费率低？</strong>因为它不需要基金经理主动选股——按指数配置就行了。所以管理费通常只有主动基金的1/3到1/2。</p>
      <p><strong>指数基金的核心逻辑：</strong>大多数主动基金跑不赢指数（尤其是美国市场）。长期来看，80%以上的主动基金跑不赢标普500。所以巴菲特才说：<strong>"对大多数普通人来说，买指数基金是最好的选择。"</strong></p>
      <p><strong>适合人群：</strong>所有类型投资者，尤其适合不想花时间研究基金的懒人。</p>

      <h3>第六类：ETF</h3>
      <p>ETF是"交易型开放式指数基金"，可以像股票一样在二级市场买卖。</p>
      <div class="info-grid">
        <div class="info-card"><div class="value">高</div><div class="label">风险等级</div></div>
        <div class="info-card"><div class="value">8-12%</div><div class="label">年化收益</div></div>
        <div class="info-card"><div class="value">极高</div><div class="label">流动性</div></div>
      </div>
      <p><strong>典型代表：</strong>沪深300ETF、中概互联网ETF、消费ETF</p>

      <div class="table-responsive">
        <table>
          <thead><tr><th>对比项</th><th>普通指数基金</th><th>ETF</th></tr></thead>
          <tbody>
            <tr><td>购买渠道</td><td>银行、天天基金等代销</td><td>证券账户，像股票一样买卖</td></tr>
            <tr><td>交易价格</td><td>收盘价</td><td>盘中实时价格</td></tr>
            <tr><td>费率</td><td>稍高</td><td>最低</td></tr>
            <tr><td>门槛</td><td>100元起</td><td>1手（100份）起，几十到几百元</td></tr>
          </tbody>
        </table>
      </div>
      <p><strong>ETF适合谁？</strong>有一定投资经验、在证券账户交易、追求低费率的投资者。</p>

      <h3>六大基金类型总结</h3>
      <div class="table-responsive">
        <table>
          <thead><tr><th>基金类型</th><th>风险等级</th><th>年化收益(参考)</th><th>流动性</th><th>适合人群</th></tr></thead>
          <tbody>
            <tr><td>货币基金</td><td>几乎无</td><td>2%</td><td>极高</td><td>保守型/应急资金</td></tr>
            <tr><td>债券基金</td><td>较小</td><td>4-6%</td><td>较高</td><td>稳健型/1-3年资金</td></tr>
            <tr><td>混合基金</td><td>中等</td><td>8-12%</td><td>较高</td><td>稳健型</td></tr>
            <tr><td>股票基金</td><td>高</td><td>10-15%</td><td>较高</td><td>积极型/3年以上</td></tr>
            <tr><td>指数基金</td><td>高</td><td>8-12%</td><td>较高</td><td>所有类型</td></tr>
            <tr><td>ETF</td><td>高</td><td>8-12%</td><td>极高</td><td>有证券账户者</td></tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="section">
      <h2 class="section-title">知识点三：基金核心概念解析（10分钟）</h2>

      <p>"接下来，我们来搞清楚基金交易的四个核心概念。这些概念很简单，但很多老基民都搞不清楚。</p>

      <h3>概念一：净值</h3>
      <p><strong>净值 = 基金的单价</strong></p>
      <p>就像超市里每瓶牛奶有个价格，每份基金也有个价格，叫净值。</p>
      <p>比如某基金净值是2.5元，意思就是每一份基金当前价值2.5元。</p>
      <p><strong>净值是怎么计算的？</strong></p>
      <p>（基金总资产 - 基金总负债）/ 基金总份额 = 净值</p>
      <p>基金投资的所有股票、债券、现金加总，减去管理费、托管费等费用，再除以份额，就是净值。</p>
      <p><strong>净值的高低说明什么？</strong></p>
      <p>很多人有个误区：觉得净值低的基金便宜，净值高的基金贵。这是错的。</p>
      <p>净值2元的基金和净值5元的基金，可能都"便宜"或都"贵"——关键看基金净值增长的速度，而不是净值本身的数字。</p>
      <div class="alert warning">
        <div class="alert-title">记住</div>
        <p>净值低的基金不等于便宜的基金，要看增长率。</p>
      </div>

      <h3>概念二：份额</h3>
      <p><strong>份额 = 你持有的基金数量</strong></p>
      <p>你买基金，不是买"金额"，是买"份额"。</p>
      <p>举例：某基金净值2元，你投入1000元，可以买到500份（1000÷2=500）。</p>
      <p>如果净值涨到3元，你持有的500份就价值1500元（500×3=1500），赚了500元。</p>
      <p><strong>份额是固定的，除非你买卖基金。</strong></p>

      <h3>概念三：申购与赎回</h3>
      <p><strong>申购 = 买基金</strong>（从基金公司手里买）</p>
      <p><strong>赎回 = 卖基金</strong>（卖给基金公司）</p>
      <p><strong>申购净值怎么算？</strong></p>
      <p>如果是交易日下午3点前申购，按当天净值计算；下午3点后申购，按下一个交易日净值计算。</p>
      <p><strong>赎回资金多久到账？</strong></p>
      <ul>
        <li>货币基金：T+1到账（下一个工作日）</li>
        <li>股票/混合基金：通常T+3到账</li>
      </ul>

      <h3>概念四：管理费与托管费</h3>
      <p>基金不是免费帮你管的，基金公司要收"辛苦费"。</p>
      <ul>
        <li><strong>管理费</strong>：基金公司管理基金的服务费，通常每年1-1.5%</li>
        <li><strong>托管费</strong>：银行保管基金资产的服务费，通常每年0.15-0.25%</li>
      </ul>
      <p>这两个费用是<strong>每日计提，按年扣除</strong>。你看到的基金净值，已经扣除了这些费用。</p>

      <div class="table-responsive">
        <table>
          <thead><tr><th>基金类型</th><th>管理费参考</th><th>托管费参考</th><th>合计</th></tr></thead>
          <tbody>
            <tr><td>货币基金</td><td>0.3%</td><td>0.1%</td><td>0.4%</td></tr>
            <tr><td>债券基金</td><td>0.6%</td><td>0.15%</td><td>0.75%</td></tr>
            <tr><td>股票基金</td><td>1.5%</td><td>0.25%</td><td>1.75%</td></tr>
            <tr><td>指数基金</td><td>0.5%</td><td>0.1%</td><td>0.6%</td></tr>
            <tr><td>ETF</td><td>0.5%</td><td>0.1%</td><td>0.6%</td></tr>
          </tbody>
        </table>
      </div>
      <div class="alert success">
        <div class="alert-title">结论</div>
        <p><strong>指数基金和ETF费率最低，长期持有能省不少钱。</strong></p>
      </div>
    </section>

    <!-- 互动活动 -->
    <div class="activity-box">
      <div class="activity-title">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
        互动活动一：A1-1 基金类型配对练习
      </div>
      <p><strong>活动目的：</strong>通过配对练习，让学员深入理解六大基金类型的核心差异，建立清晰的分类框架。</p>
      <p><strong>操作步骤：</strong></p>
      <ol style="padding-left: 20px; margin: 12px 0;">
        <li><strong>发放材料（2分钟）</strong>：每人发一张「基金类型配对表」。</li>
        <li><strong>独立完成（6分钟）</strong>：学员根据描述，将基金类型与特征配对。</li>
        <li><strong>同桌互评（2分钟）</strong>：两人一组交换答案，快速核对。</li>
      </ol>

      <div class="framework-diagram" style="margin-top: 20px;">
        <pre>
┌─────────────────────────────────────────────────────────────────────┐
│                    基金类型配对表                                      │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  【任务】请将左侧的基金类型与右侧的特征描述正确配对                    │
│                                                                     │
│  ═══════════════════════════════════════════════════════════════    │
│                                                                     │
│  基金类型：                                                          │
│  A. 货币基金                                                        │
│  B. 债券基金                                                        │
│  C. 混合基金                                                        │
│  D. 股票基金                                                        │
│  E. 指数基金                                                        │
│  F. ETF                                                             │
│                                                                     │
│  ═══════════════════════════════════════════════════════════════    │
│                                                                     │
│  特征描述（每个配对一个答案）：                                       │
│                                                                     │
│  1. 收益约2%，随存随取，我的钱主要用于日常消费，理应放这里    ____   │
│  2. 年化收益约10-15%，波动大，需要持有3年以上才稳妥          ____   │
│  3. 同时投资股票和债券，比例灵活，攻守兼备                      ____   │
│  4. 跟踪沪深300指数，费率低，适合不想花时间研究的人           ____   │
│  5. 主要投资国债和企业债，年化4-6%，持有1-2年风险较小        ____   │
│  6. 像股票一样在证券账户买卖，盘中实时交易，费率最低           ____   │
│                                                                     │
│  ═══════════════════════════════════════════════════════════════    │
│                                                                     │
│  【附加题】                                                          │
│  7. 我是积极型投资者，有10万闲钱可以放3-5年，应该配置         ____   │
│     （填入A-F中的1-2种类型，用逗号分隔）                          │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘</pre>
      </div>

      <div class="alert success" style="margin-top: 20px;">
        <div class="alert-title">参考答案</div>
        <p>1→A（货币基金）；2→D（股票基金）；3→C（混合基金）；4→E（指数基金）；5→B（债券基金）；6→F（ETF）</p>
        <p>附加题参考答案（积极型投资者）：D+E+F（高比例股票基金+指数基金+ETF，可配置80-90%）</p>
      </div>
      <p style="margin-top: 16px;"><strong>时间总计：10分钟</strong></p>
    </div>

    <div class="activity-box">
      <div class="activity-title">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
        互动活动二：A1-2 不同类型基金的适合人群讨论
      </div>
      <p><strong>活动目的：</strong>通过小组讨论，让学员理解"适合的才是最好的"这一核心原则。</p>
      <p><strong>操作步骤：</strong></p>
      <ol style="padding-left: 20px; margin: 12px 0;">
        <li><strong>分组（2分钟）</strong>：4-5人一组，每组讨论一个场景。</li>
        <li><strong>场景讨论（5分钟）</strong>：每组讨论该场景下，应该推荐哪种基金类型，为什么。</li>
        <li><strong>全班分享（3分钟）</strong>：每组派代表陈述。</li>
      </ol>

      <h4>讨论场景：</h4>
      <ul>
        <li><strong>场景A</strong>：小张，35岁，公务员，工作稳定，月薪8000元，能承受10%左右亏损，希望保值增值，投资周期3年。应该推荐哪种基金？</li>
        <li><strong>场景B</strong>：小李，28岁，销售，收入波动大，月薪5000-15000元，能承受15%亏损，投资周期5年。应该推荐哪种基金？</li>
        <li><strong>场景C</strong>：老王，50岁，退休人员，有50万积蓄主要用来养老，能承受5%亏损，投资周期10年（留给子孙）。应该推荐哪种基金？</li>
        <li><strong>场景D</strong>：小陈，25岁，IT工程师，月薪20000元，能承受30%亏损，投资周期10年以上，追求资产快速增值。应该推荐哪种基金？</li>
      </ul>

      <div class="alert success" style="margin-top: 20px;">
        <div class="alert-title">参考答案</div>
        <ul style="padding-left: 20px;">
          <li>小张（稳健型，3年）：债券基金+混合基金，70%债混+30%股混</li>
          <li>小李（稳健偏积极，5年）：混合基金+指数基金，50%混合+50%指数</li>
          <li>老王（保守型，10年）：债券基金+货币基金，80%债券+20%货基</li>
          <li>小陈（积极型，10年）：股票基金+指数基金+ETF，80%股基+20%指数/ETF</li>
        </ul>
      </div>
      <p style="margin-top: 16px;"><strong>时间总计：10分钟</strong></p>
    </div>

    <!-- Module 1 Summary Framework -->
    <section class="section">
      <h2 class="section-title">知识框架：模块一总结</h2>
      <div class="framework-diagram">
        <pre>
┌─────────────────────────────────────────────────────────────────────┐
│                      基金投资基础认知框架                              │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  【为什么选基金】                                                    │
│                                                                     │
│  · 专业管理 → 基金经理+投研团队，比自己研究更专业                   │
│  · 分散投资 → 一只基金持几十上百只股票，单只风险影响小                │
│  · 门槛低 → 几百元起投，工薪族定投无压力                             │
│  · 流动性好 → 大多数基金随时申赎，T+1到账                            │
│                                                                     │
│  ═══════════════════════════════════════════════════════════════    │
│                                                                     │
│  【六大基金类型】                                                     │
│                                                                     │
│  货币基金 → 约2%收益，随存随取，几乎无风险                           │
│  债券基金 → 约4-6%收益，短期有波动，长期较稳健                       │
│  混合基金 → 约8-12%收益，股债灵活配置                               │
│  股票基金 → 约10-15%收益，波动大，需长期持有                        │
│  指数基金 → 约8-12%收益，费率低，复制指数                           │
│  ETF     → 盘中实时交易，费率最低                                    │
│                                                                     │
│  ═══════════════════════════════════════════════════════════════    │
│                                                                     │
│  【核心概念】                                                         │
│                                                                     │
│  净值 → 基金单价，高低不代表贵贱                                     │
│  份额 → 持有数量，固定不变                                          │
│  申购/赎回 → 买/卖基金的操作                                        │
│  管理费/托管费 → 每日计提，净值已扣除                                │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘</pre>
      </div>

      <div class="alert">
        <div class="alert-title">过渡语</div>
        <p>"好的，到这里你已经理解了基金是什么、六大基金类型有什么区别。</p>
        <p>现在你可能会问：同一类型的基金有几千只，我该怎么选？</p>
        <p>比如都是股票基金，有涨了200%的，也有跌了50%的。选错了，收益天差地别。</p>
        <p><strong>这就是我们下一个模块要解决的问题——如何挑选好基金。</strong></p>
        <p>我会给你一套五大维度选基法，让你能够系统性地评估一只基金，而不是凭感觉、听推荐。</p>
        <p>准备好了吗？"</p>
      </div>
    </section>
"""

with open(output_path, 'a', encoding='utf-8') as f:
    f.write(part2)
print("Part 2 written, length:", len(part2))
