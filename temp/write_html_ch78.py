#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Write HTML parts 4 - Chapters 7-8 + Appendix"""

output_path = "D:/新课开发/金融学/11-股票投资入门-从开户到读懂财报/学员手册/股票投资入门_学员手册_v1.0.html"

# Chapter 7 content
ch7 = '''
    <hr>

    <h1>第七章：风险管理与资产配置</h1>

    <div class="chapter-header">
        <h2>学习目标</h2>
    </div>

    <p>本章学完你能：</p>
    <ul>
        <li>理解仓位管理的核心原则</li>
        <li>掌握分批建仓和金字塔加仓的方法</li>
        <li>制定适合自己的止损策略</li>
        <li>根据资金量和风险偏好进行资产配置</li>
    </ul>

    <hr>

    <h2>内容导航</h2>

    <table>
        <tr>
            <th>类型</th>
            <th>数量</th>
            <th>内容</th>
        </tr>
        <tr>
            <td>核心概念</td>
            <td>3个</td>
            <td>仓位管理原则、止损策略、资产配置</td>
        </tr>
        <tr>
            <td>互动表单</td>
            <td>1个</td>
            <td>仓位管理计划表</td>
        </tr>
        <tr>
            <td>课堂练习</td>
            <td>2道</td>
            <td>仓位计算、风险评估</td>
        </tr>
    </table>

    <hr>

    <h2>知识点</h2>

    <h3>7.1 仓位管理原则</h3>

    <p><strong>核心原则（必背）</strong>：</p>

<pre>
1. 不重仓单一个股 ≤ 20% 总资金
2. 不重仓单一行业 ≤ 30% 总资金
3. 始终保留现金 buffer ≥ 10% 应对极端情况
4. 建仓必须分批，禁止一次性全仓
5. 亏损绝不补仓（除非有新的买入逻辑）
</pre>

    <div class="tip-box">
        <p><strong>金句</strong>: "满仓操作就像不带降落伞跳伞，一次失误就归零。仓位管理不会让你暴富，但能让你活过所有熊市。"</p>
    </div>

    <h3>7.2 分批建仓方法</h3>

    <p><strong>金字塔式建仓</strong>：</p>

    <table>
        <tr>
            <th>批次</th>
            <th>买入比例</th>
            <th>价格区间</th>
            <th>资金占比</th>
        </tr>
        <tr>
            <td>第一批</td>
            <td>20%</td>
            <td>低于10元</td>
            <td>总资金4%</td>
        </tr>
        <tr>
            <td>第二批</td>
            <td>30%</td>
            <td>9-10元</td>
            <td>总资金6%</td>
        </tr>
        <tr>
            <td>第三批</td>
            <td>30%</td>
            <td>8-9元</td>
            <td>总资金6%</td>
        </tr>
        <tr>
            <td>第四批</td>
            <td>20%</td>
            <td>低于8元</td>
            <td>总资金4%</td>
        </tr>
    </table>

    <p><strong>加仓决策检查</strong>：</p>
    <ul>
        <li>□ 追加资金来源是闲置资金</li>
        <li>○ 初始建仓逻辑未被推翻</li>
        <li>○ 大盘或行业未出现系统性风险</li>
        <li>○ 估值仍处于合理或偏低区间</li>
        <li>○ 仓位仍未达到预设上限</li>
    </ul>

    <h3>7.3 止损策略</h3>

    <p><strong>止损原则</strong>：</p>
    <ul>
        <li>个股亏损超过10%-15%必须重新评估</li>
        <li>大盘系统性下跌时，优先减仓</li>
        <li>触及止损必须执行，不要犹豫</li>
    </ul>

    <p><strong>止损方法</strong>：</p>

    <table>
        <tr>
            <th>方法</th>
            <th>说明</th>
            <th>适用场景</th>
        </tr>
        <tr>
            <td>固定比例止损</td>
            <td>亏损达到X%无条件止损</td>
            <td>短线交易</td>
        </tr>
        <tr>
            <td>均线止损</td>
            <td>跌破重要均线止损</td>
            <td>中线交易</td>
        </tr>
        <tr>
            <td>逻辑止损</td>
            <td>买入逻辑被证伪时止损</td>
            <td>长线投资</td>
        </tr>
    </table>

    <h3>7.4 资产配置</h3>

    <p><strong>不同资金量的仓位建议</strong>：</p>

    <table>
        <tr>
            <th>资金量</th>
            <th>现金储备</th>
            <th>股票/ETF</th>
            <th>债券/理财</th>
        </tr>
        <tr>
            <td>10万以下</td>
            <td>20-40%</td>
            <td>40-60%</td>
            <td>20-40%</td>
        </tr>
        <tr>
            <td>10-50万</td>
            <td>15-30%</td>
            <td>30-50%</td>
            <td>30-50%</td>
        </tr>
        <tr>
            <td>50万以上</td>
            <td>10-20%</td>
            <td>25-40%</td>
            <td>40-60%</td>
        </tr>
    </table>

    <hr>

    <h2>表单7.1：我的仓位管理计划</h2>

    <blockquote>
        <p><strong>填写说明</strong>: 根据你的实际情况，制定仓位管理计划。</p>
    </blockquote>

    <h3>基本情况</h3>

    <table>
        <tr>
            <th>项目</th>
            <th>内容</th>
        </tr>
        <tr>
            <td>可用于投资的资金</td>
            <td><span class="form-field"></span> 万元</td>
        </tr>
        <tr>
            <td>最大可接受亏损比例</td>
            <td><span class="form-field"></span> %</td>
        </tr>
        <tr>
            <td>预计投资周期</td>
            <td><span class="form-field"></span> 年</td>
        </tr>
    </table>

    <h3>仓位规划</h3>

    <table>
        <tr>
            <th>资产类型</th>
            <th>配置比例</th>
            <th>金额</th>
            <th>说明</th>
        </tr>
        <tr>
            <td>现金储备</td>
            <td><span class="form-field"></span>%</td>
            <td><span class="form-field"></span>万</td>
            <td>应对极端情况</td>
        </tr>
        <tr>
            <td>指数基金/ETF</td>
            <td><span class="form-field"></span>%</td>
            <td><span class="form-field"></span>万</td>
            <td>压舱石</td>
        </tr>
        <tr>
            <td>个股（≤3只）</td>
            <td><span class="form-field"></span>%</td>
            <td><span class="form-field"></span>万</td>
            <td>精选标的</td>
        </tr>
        <tr>
            <td>债券/理财</td>
            <td><span class="form-field"></span>%</td>
            <td><span class="form-field"></span>万</td>
            <td>稳健收益</td>
        </tr>
    </table>

    <h3>个股仓位上限</h3>

    <table>
        <tr>
            <th>规则</th>
            <th>你的设定</th>
        </tr>
        <tr>
            <td>单一个股最大持仓比例</td>
            <td><span class="form-field"></span>%</td>
        </tr>
        <tr>
            <td>单一行业最大持仓比例</td>
            <td><span class="form-field"></span>%</td>
        </tr>
    </table>

    <h3>止损规则</h3>

    <table>
        <tr>
            <th>问题</th>
            <th>你的回答</th>
        </tr>
        <tr>
            <td>单只股票止损线是多少？</td>
            <td><span class="form-field"></span>%</td>
        </tr>
        <tr>
            <td>大盘下跌多少你开始减仓？</td>
            <td><span class="form-field"></span>%</td>
        </tr>
        <tr>
            <td>什么情况下你会止损离场？</td>
            <td><span class="form-field-large"></span></td>
        </tr>
    </table>

    <hr>

    <h2>练习</h2>

    <div class="exercise">
        <div class="exercise-title">练习N：仓位计算题</div>
        <p><strong>题目</strong>: 假设你有10万元可用资金，请根据以下仓位原则规划投资。</p>
        <p><strong>原则</strong>：</p>
        <ul>
            <li>单一个股≤20%</li>
            <li>单一行业≤30%</li>
            <li>现金≥10%</li>
        </ul>

        <p><strong>规划要求</strong>：</p>

        <table>
            <tr>
                <th>资产类型</th>
                <th>金额</th>
                <th>比例</th>
                <th>是否合规</th>
            </tr>
            <tr>
                <td>现金储备</td>
                <td><span class="form-field"></span></td>
                <td><span class="form-field"></span>%</td>
                <td><span class="radio-option">○ 合规</span> <span class="radio-option">○ 违规</span></td>
            </tr>
            <tr>
                <td>招商银行</td>
                <td>2万</td>
                <td><span class="form-field"></span>%</td>
                <td></td>
            </tr>
            <tr>
                <td>贵州茅台</td>
                <td>2万</td>
                <td><span class="form-field"></span>%</td>
                <td></td>
            </tr>
            <tr>
                <td>宁德时代</td>
                <td>2万</td>
                <td><span class="form-field"></span>%</td>
                <td></td>
            </tr>
            <tr>
                <td>沪深300ETF</td>
                <td>3万</td>
                <td><span class="form-field"></span>%</td>
                <td></td>
            </tr>
            <tr>
                <td>债券基金</td>
                <td>1万</td>
                <td><span class="form-field"></span>%</td>
                <td></td>
            </tr>
            <tr>
                <td><strong>合计</strong></td>
                <td><strong>10万</strong></td>
                <td><strong>100%</strong></td>
                <td></td>
            </tr>
        </table>

        <p><strong>检查</strong>：</p>
        <ul>
            <li>白酒行业（茅台+五粮液假设占2万）占比：<span class="form-field"></span>%</li>
            <li>是否超过30%行业限制：<span class="radio-option">○ 是</span> <span class="radio-option">○ 否</span></li>
        </ul>
    </div>

    <div class="exercise">
        <div class="exercise-title">练习O：止损决策题</div>
        <p><strong>题目</strong>: 情境分析。</p>
        <p>你以10元买入某股票1000股，当前价格8.5元。</p>
        <p>1. 你的亏损比例是：<span class="form-field"></span>%</p>
        <p>2. 按照10%止损原则，你应该：</p>
        <div class="radio-option">○ 止损卖出</div>
        <div class="radio-option">○ 继续持有等待反弹</div>
        <div class="radio-option">○ 加仓摊低成本</div>
        <p>3. 如果你选择继续持有，你需要在什么条件下才应该坚持不卖？</p>
        <p><span class="form-field-large"></span></p>
    </div>

    <hr>

    <h2>知识框架图</h2>

<pre>
                        ┌─────────────────┐
                        │   风险管理与     │
                        │   资产配置       │
                        └────────┬────────┘
                                 │
       ┌─────────────────────────┼─────────────────────────┐
       │                         │                         │
       ▼                         ▼                         ▼
┌──────────────┐        ┌──────────────┐        ┌──────────────┐
│   仓位管理    │        │   止损策略    │        │   资产配置    │
│  分批建仓     │        │  纪律执行     │        │  分散化配置   │
│  金字塔加仓   │        │  原则底线     │        │  行业分散     │
└──────────────┘        └──────────────┘        └──────────────┘
       │                         │                         │
       └─────────────────────────┼─────────────────────────┘
                                 │
                        ┌────────┴────────┐
                        │   投资纪律      │
                        │  宁可少赚不大亏  │
                        └─────────────────┘
</pre>

    <hr>

    <h2>行为承诺</h2>

    <div class="behavior-promise">
        <p>我承诺：</p>
        <p class="promise-item">1. <span class="form-field-large"></span></p>
        <p class="promise-item">2. <span class="form-field-large"></span></p>
        <p class="promise-item">3. <span class="form-field-large"></span></p>
    </div>

    <hr>

    <h1>第八章：综合案例与进阶</h1>

    <div class="chapter-header">
        <h2>学习目标</h2>
    </div>

    <p>本章学完你能：</p>
    <ul>
        <li>综合运用前面7章的知识，完整分析一只股票</li>
        <li>制定投资决策并说明依据</li>
        <li>设计自己的投资策略和风控方案</li>
        <li>明确后续学习和实践的方向</li>
    </ul>

    <hr>

    <h2>内容导航</h2>

    <table>
        <tr>
            <th>类型</th>
            <th>数量</th>
            <th>内容</th>
        </tr>
        <tr>
            <td>核心概念</td>
            <td>2个</td>
            <td>投资决策流程、进阶学习路径</td>
        </tr>
        <tr>
            <td>互动表单</td>
            <td>1个</td>
            <td>综合分析报告模板</td>
        </tr>
        <tr>
            <td>课堂练习</td>
            <td>1道</td>
            <td>完整案例分析</td>
        </tr>
    </table>

    <hr>

    <h2>知识点</h2>

    <h3>8.1 投资决策流程</h3>

<pre>
 Step 1: 行业研究
    ↓
 Step 2: 公司基本面分析
    ↓
 Step 3: 估值分析
    ↓
 Step 4: 技术面确认时机
    ↓
 Step 5: 制定买入计划（仓位/价格/止损）
    ↓
 Step 6: 执行并跟踪
    ↓
 Step 7: 定期复盘调整
</pre>

    <p><strong>每个步骤的关键问题</strong>：</p>

    <table>
        <tr>
            <th>步骤</th>
            <th>关键问题</th>
        </tr>
        <tr>
            <td>行业研究</td>
            <td>这个行业未来3-5年景气度如何？</td>
        </tr>
        <tr>
            <td>公司基本面</td>
            <td>这家公司在同行中比强在哪里？</td>
        </tr>
        <tr>
            <td>估值分析</td>
            <td>现在的价格贵不贵？</td>
        </tr>
        <tr>
            <td>技术面</td>
            <td>什么时候买最好？</td>
        </tr>
        <tr>
            <td>买入计划</td>
            <td>买多少？跌了怎么办？</td>
        </tr>
        <tr>
            <td>执行跟踪</td>
            <td>和预判一致吗？</td>
        </tr>
        <tr>
            <td>复盘调整</td>
            <td>哪里判断对了，哪里错了？</td>
        </tr>
    </table>

    <h3>8.2 常见投资策略对比</h3>

    <table>
        <tr>
            <th>策略</th>
            <th>核心理念</th>
            <th>持有周期</th>
            <th>适合人群</th>
        </tr>
        <tr>
            <td><strong>价值投资</strong></td>
            <td>买入低估的好公司</td>
            <td>3-5年甚至更长</td>
            <td>有耐心、追求稳健</td>
        </tr>
        <tr>
            <td><strong>成长投资</strong></td>
            <td>买入高成长的公司</td>
            <td>1-3年</td>
            <td>能承受较大波动</td>
        </tr>
        <tr>
            <td><strong>趋势投资</strong></td>
            <td>顺势而为，跟踪趋势</td>
            <td>几周到几个月</td>
            <td>短线操作能力强</td>
        </tr>
        <tr>
            <td><strong>指数定投</strong></td>
            <td>定期买入指数基金</td>
            <td>长期坚持</td>
            <td>没时间研究、工作忙</td>
        </tr>
    </table>

    <div class="tip-box">
        <p><strong>适合普通人的策略</strong>: 如果你没有时间每天看盘，又想分享股市红利，指数定投是最适合普通人的方式。低估时多买，高估时少买，坚持3-5年，大概率能获得不错的收益。</p>
    </div>

    <h3>8.3 进阶学习路径</h3>

    <p><strong>技术分析进阶</strong>：</p>
    <ul>
        <li>MACD、KDJ、RSI、BOLL等技术指标</li>
        <li>量价关系分析</li>
        <li>主力行为识别</li>
    </ul>

    <p><strong>基本面分析进阶</strong>：</p>
    <ul>
        <li>深度财报分析（现金流量表、所有者权益变动表）</li>
        <li>行业研究框架</li>
        <li>公司竞争力分析（波特五力、护城河）</li>
    </ul>

    <p><strong>投资体系构建</strong>：</p>
    <ul>
        <li>建立自己的投资决策系统</li>
        <li>心理建设和情绪管理</li>
        <li>持续学习和复盘习惯</li>
    </ul>

    <hr>

    <h2>表单8.1：场景股综合分析报告</h2>

    <blockquote>
        <p><strong>填写说明</strong>: 综合运用前面所有知识，完成你场景股的完整分析报告。</p>
    </blockquote>

    <h3>一、基本信息</h3>

    <table>
        <tr>
            <th>项目</th>
            <th>内容</th>
        </tr>
        <tr>
            <td>股票名称</td>
            <td><span class="form-field-large"></span></td>
        </tr>
        <tr>
            <td>股票代码</td>
            <td><span class="form-field-large"></span></td>
        </tr>
        <tr>
            <td>行业</td>
            <td><span class="form-field-large"></span></td>
        </tr>
        <tr>
            <td>总市值</td>
            <td><span class="form-field-large"></span></td>
        </tr>
        <tr>
            <td>市盈率(PE)</td>
            <td><span class="form-field-large"></span></td>
        </tr>
        <tr>
            <td>市净率(PB)</td>
            <td><span class="form-field-large"></span></td>
        </tr>
    </table>

    <h3>二、基本面分析</h3>

    <table>
        <tr>
            <th>分析维度</th>
            <th>内容</th>
        </tr>
        <tr>
            <td>公司主营业务</td>
            <td><span class="form-field-large"></span></td>
        </tr>
        <tr>
            <td>核心竞争优势（护城河）</td>
            <td><span class="form-field-large"></span></td>
        </tr>
        <tr>
            <td>近3年营收增速</td>
            <td><span class="form-field-large"></span></td>
        </tr>
        <tr>
            <td>近3年净利润增速</td>
            <td><span class="form-field-large"></span></td>
        </tr>
        <tr>
            <td>ROE水平</td>
            <td><span class="form-field-large"></span></td>
        </tr>
        <tr>
            <td>主要风险点</td>
            <td><span class="form-field-large"></span></td>
        </tr>
    </table>

    <h3>三、估值分析</h3>

    <table>
        <tr>
            <th>估值方法</th>
            <th>数值</th>
            <th>判断</th>
        </tr>
        <tr>
            <td>PE估值</td>
            <td><span class="form-field"></span></td>
            <td><span class="radio-option">○ 低估</span> <span class="radio-option">○ 合理</span> <span class="radio-option">○ 高估</span></td>
        </tr>
        <tr>
            <td>PB估值</td>
            <td><span class="form-field"></span></td>
            <td><span class="radio-option">○ 低估</span> <span class="radio-option">○ 合理</span> <span class="radio-option">○ 高估</span></td>
        </tr>
        <tr>
            <td>综合判断</td>
            <td></td>
            <td><span class="form-field-large"></span></td>
        </tr>
    </table>

    <h3>四、技术面分析</h3>

    <table>
        <tr>
            <th>分析维度</th>
            <th>内容</th>
        </tr>
        <tr>
            <td>当前趋势</td>
            <td><span class="radio-option">○ 上升</span> <span class="radio-option">○ 下降</span> <span class="radio-option">○ 震荡</span></td>
        </tr>
        <tr>
            <td>均线排列</td>
            <td><span class="radio-option">○ 多头</span> <span class="radio-option">○ 空头</span> <span class="radio-option">○ 混乱</span></td>
        </tr>
        <tr>
            <td>支撑位</td>
            <td><span class="form-field"></span></td>
        </tr>
        <tr>
            <td>压力位</td>
            <td><span class="form-field"></span></td>
        </tr>
    </table>

    <h3>五、投资决策</h3>

    <table>
        <tr>
            <th>问题</th>
            <th>你的回答</th>
        </tr>
        <tr>
            <td>你认为现在值得买吗？</td>
            <td><span class="radio-option">○ 值得</span> <span class="radio-option">○ 不值得</span> <span class="radio-option">○ 观望</span></td>
        </tr>
        <tr>
            <td>买入价格区间</td>
            <td><span class="form-field-large"></span></td>
        </tr>
        <tr>
            <td>最大仓位</td>
            <td><span class="form-field"></span>%</td>
        </tr>
        <tr>
            <td>止损线</td>
            <td><span class="form-field"></span>%</td>
        </tr>
        <tr>
            <td>持有期限</td>
            <td><span class="form-field-large"></span></td>
        </tr>
    </table>

    <p><strong>投资理由简述</strong>:</p>
    <p><span class="form-field-large"></span></p>
    <p><span class="form-field-large"></span></p>
    <p><span class="form-field-large"></span></p>

    <hr>

    <h2>练习</h2>

    <div class="exercise">
        <div class="exercise-title">练习P：综合案例分析</div>
        <p><strong>题目</strong>: 综合运用本课程全部知识，完成以下分析。</p>
        <p><strong>背景</strong>：你正在考虑是否投资招商银行（600036），请从以下角度进行分析：</p>

        <p>1. <strong>行业分析</strong>：银行业的发展前景如何？招商银行在银行中的定位是什么？</p>
        <p><span class="form-field-large"></span></p>
        <p><span class="form-field-large"></span></p>
        <p><span class="form-field-large"></span></p>

        <p>2. <strong>基本面简析</strong>：招商银行相比其他银行的优势是什么？</p>
        <p><span class="form-field-large"></span></p>
        <p><span class="form-field-large"></span></p>
        <p><span class="form-field-large"></span></p>

        <p>3. <strong>估值判断</strong>：招商银行当前PE约8倍，PB约1.2倍，这算什么水平？</p>
        <p><span class="form-field-large"></span></p>
        <p><span class="form-field-large"></span></p>
        <p><span class="form-field-large"></span></p>

        <p>4. <strong>技术面</strong>：如果招商银行目前处于均线多头排列，你如何解读？</p>
        <p><span class="form-field-large"></span></p>
        <p><span class="form-field-large"></span></p>
        <p><span class="form-field-large"></span></p>

        <p>5. <strong>投资决策</strong>：基于以上分析，你会买入招商银行吗？买入计划是什么？</p>
        <p><span class="form-field-large"></span></p>
        <p><span class="form-field-large"></span></p>
        <p><span class="form-field-large"></span></p>
    </div>

    <hr>

    <h2>知识框架图</h2>

<pre>
                        ┌─────────────────┐
                        │   投资决策流程   │
                        │  从研究到执行    │
                        └────────┬────────┘
                                 │
  ┌──────────────────────────────┼──────────────────────────────┐
  │                              │                              │
  ▼                              ▼                              ▼
┌──────────────┐        ┌──────────────┐        ┌──────────────┐
│  行业研究    │        │  基本面分析   │        │   估值分析    │
│  景气度判断  │        │  竞争壁垒    │        │  贵贱判断     │
└──────────────┘        └──────────────┘        └──────────────┘
         │                    │                      │
         └────────────────────┼──────────────────────┘
                              │
                    ┌─────────┴─────────┐
                    │    技术面确认      │
                    │    入场时机        │
                    └─────────┬─────────┘
                              │
                    ┌─────────┴─────────┐
                    │    制定投资计划    │
                    │  仓位/止损/期限    │
                    └─────────┬─────────┘
                              │
                    ┌─────────┴─────────┐
                    │    执行与跟踪      │
                    │    复盘与调整      │
                    └───────────────────┘
</pre>

    <hr>

    <h2>行为承诺</h2>

    <div class="behavior-promise">
        <p>我承诺：</p>
        <p class="promise-item">1. <span class="form-field-large"></span></p>
        <p class="promise-item">2. <span class="form-field-large"></span></p>
        <p class="promise-item">3. <span class="form-field-large"></span></p>
    </div>
'''

with open(output_path, 'a', encoding='utf-8') as f:
    f.write(ch7)

print(f"Part 5 written: Chapters 7-8 ({len(ch7)} chars)")
