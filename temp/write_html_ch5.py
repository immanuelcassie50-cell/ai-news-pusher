#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Write HTML parts 3 - Chapters 5-8 + Appendix"""

output_path = "D:/新课开发/金融学/11-股票投资入门-从开户到读懂财报/学员手册/股票投资入门_学员手册_v1.0.html"

# Chapter 5 content
ch5 = '''
    <hr>

    <h1>第五章：财报案例实战</h1>

    <div class="chapter-header">
        <h2>学习目标</h2>
    </div>

    <p>本章学完你能：</p>
    <ul>
        <li>运用前两章学到的框架，实际分析一家真实公司的财报</li>
        <li>从数字背后理解公司的商业模式</li>
        <li>识别财报中被低估的信息和异常信号</li>
        <li>形成自己的财报分析习惯</li>
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
            <td>商业模式理解、财报与业务对应、异常追踪</td>
        </tr>
        <tr>
            <td>互动表单</td>
            <td>1个</td>
            <td>场景股深度分析表</td>
        </tr>
        <tr>
            <td>课堂练习</td>
            <td>2道</td>
            <td>案例分析、交叉验证</td>
        </tr>
    </table>

    <hr>

    <h2>知识点</h2>

    <h3>5.1 财报与业务对应的思维</h3>

    <blockquote>
        <p>读财报不是为了算数字，而是为了理解业务。</p>
    </blockquote>

    <p><strong>问自己三个问题</strong>：</p>
    <ol>
        <li>这家公司靠什么赚钱？（商业模式）</li>
        <li>赚钱的能力在变强还是变弱？（趋势判断）</li>
        <li>和同行比，它强在哪里、弱在哪里？（竞争分析）</li>
    </ol>

    <p><strong>茅台案例</strong>：</p>

    <table>
        <tr>
            <th>财报科目</th>
            <th>数据</th>
            <th>背后业务含义</th>
        </tr>
        <tr>
            <td>毛利率90%+</td>
            <td>极高</td>
            <td>酱香酒品牌护城河，定价权超强</td>
        </tr>
        <tr>
            <td>预收账款（合同负债）高</td>
            <td>大量先款后货</td>
            <td>产品供不应求，经销商抢着打款</td>
        </tr>
        <tr>
            <td>存货不贬值</td>
            <td>酱香酒越陈越香</td>
            <td>存货不是负担，反而是资产</td>
        </tr>
    </table>

    <h3>5.2 财务数据交叉验证</h3>

    <table>
        <tr>
            <th>验证维度</th>
            <th>检查方法</th>
            <th>异常信号</th>
        </tr>
        <tr>
            <td>收入质量</td>
            <td>营收增速 vs 现金流增速</td>
            <td>两者差距过大</td>
        </tr>
        <tr>
            <td>利润质量</td>
            <td>净利润 vs 经营现金流</td>
            <td>持续背离需警惕</td>
        </tr>
        <tr>
            <td>资产质量</td>
            <td>商誉占比、无形资产</td>
            <td>占比过高风险大</td>
        </tr>
        <tr>
            <td>成长质量</td>
            <td>营收增长 vs 存货增长</td>
            <td>存货增长更快说明滞销</td>
        </tr>
    </table>

    <h3>5.3 识别"财报美化"</h3>

    <table>
        <tr>
            <th>手法</th>
            <th>识别方法</th>
            <th>风险等级</th>
        </tr>
        <tr>
            <td>虚增收入</td>
            <td>应收账款异常增长</td>
            <td>高</td>
        </tr>
        <tr>
            <td>推迟费用</td>
            <td>在建工程不转固</td>
            <td>中</td>
        </tr>
        <tr>
            <td>资产重估</td>
            <td>公允价值变动收益</td>
            <td>中</td>
        </tr>
        <tr>
            <td>一次性收益</td>
            <td>非经常性损益占比高</td>
            <td>中</td>
        </tr>
    </table>

    <hr>

    <h2>表单5.1：场景股深度分析表</h2>

    <blockquote>
        <p><strong>填写说明</strong>: 用你选择的场景股，完成这份深度分析表。</p>
    </blockquote>

    <h3>公司基本情况</h3>

    <table>
        <tr>
            <th>项目</th>
            <th>内容</th>
        </tr>
        <tr>
            <td>公司主营业务</td>
            <td><span class="form-field-large"></span></td>
        </tr>
        <tr>
            <td>核心产品/服务</td>
            <td><span class="form-field-large"></span></td>
        </tr>
        <tr>
            <td>上下游产业链位置</td>
            <td><span class="form-field-large"></span></td>
        </tr>
        <tr>
            <td>行业竞争格局</td>
            <td><span class="form-field-large"></span></td>
        </tr>
    </table>

    <h3>盈利能力分析</h3>

    <table>
        <tr>
            <th>指标</th>
            <th>三年数据</th>
            <th>趋势判断</th>
        </tr>
        <tr>
            <td>毛利率（%）</td>
            <td>2022:<span class="form-field"></span> 2023:<span class="form-field"></span> 2024:<span class="form-field"></span></td>
            <td><span class="radio-option">○ 上升</span> <span class="radio-option">○ 下降</span> <span class="radio-option">○ 持平</span></td>
        </tr>
        <tr>
            <td>净利率（%）</td>
            <td>2022:<span class="form-field"></span> 2023:<span class="form-field"></span> 2024:<span class="form-field"></span></td>
            <td><span class="radio-option">○ 上升</span> <span class="radio-option">○ 下降</span> <span class="radio-option">○ 持平</span></td>
        </tr>
        <tr>
            <td>ROE（%）</td>
            <td>2022:<span class="form-field"></span> 2023:<span class="form-field"></span> 2024:<span class="form-field"></span></td>
            <td><span class="radio-option">○ 上升</span> <span class="radio-option">○ 下降</span> <span class="radio-option">○ 持平</span></td>
        </tr>
    </table>

    <h3>现金流分析</h3>

    <table>
        <tr>
            <th>指标</th>
            <th>三年数据</th>
            <th>质量判断</th>
        </tr>
        <tr>
            <td>经营现金流（亿）</td>
            <td>2022:<span class="form-field"></span> 2023:<span class="form-field"></span> 2024:<span class="form-field"></span></td>
            <td><span class="radio-option">○ 优质</span> <span class="radio-option">○ 异常</span></td>
        </tr>
        <tr>
            <td>净利润（亿）</td>
            <td>2022:<span class="form-field"></span> 2023:<span class="form-field"></span> 2024:<span class="form-field"></span></td>
            <td>—</td>
        </tr>
        <tr>
            <td>现金流与净利润匹配度</td>
            <td></td>
            <td><span class="radio-option">○ 匹配</span> <span class="radio-option">○ 不匹配</span></td>
        </tr>
    </table>

    <h3>综合判断</h3>

    <table>
        <tr>
            <th>维度</th>
            <th>你的判断</th>
        </tr>
        <tr>
            <td>这家公司的商业模式是否可持续？</td>
            <td><span class="form-field-large"></span></td>
        </tr>
        <tr>
            <td>它的护城河是什么？</td>
            <td><span class="form-field-large"></span></td>
        </tr>
        <tr>
            <td>主要风险点是什么？</td>
            <td><span class="form-field-large"></span></td>
        </tr>
        <tr>
            <td>值得投资吗？（给出理由）</td>
            <td><span class="form-field-large"></span></td>
        </tr>
    </table>

    <hr>

    <h2>练习</h2>

    <div class="exercise">
        <div class="exercise-title">练习J：茅台财报分析</div>
        <p><strong>题目</strong>: 根据以下茅台2024年部分财报数据，回答问题。</p>

        <table>
            <tr>
                <th>科目</th>
                <th>2024年数据</th>
            </tr>
            <tr>
                <td>营业收入</td>
                <td>1,475亿</td>
            </tr>
            <tr>
                <td>净利润</td>
                <td>747亿</td>
            </tr>
            <tr>
                <td>经营现金流</td>
                <td>924亿</td>
            </tr>
            <tr>
                <td>毛利率</td>
                <td>91.9%</td>
            </tr>
            <tr>
                <td>预收账款（合同负债）</td>
                <td>148亿</td>
            </tr>
        </table>

        <p><strong>问题</strong>:</p>
        <p>1. 茅台的经营现金流大于净利润，这说明什么？</p>
        <p><span class="form-field-large"></span></p>
        <p><span class="form-field-large"></span></p>

        <p>2. 91.9%的毛利率在白酒行业中属于什么水平？这反映了什么？</p>
        <p><span class="form-field-large"></span></p>
        <p><span class="form-field-large"></span></p>

        <p>3. 148亿的预收账款对茅台意味着什么？</p>
        <p><span class="form-field-large"></span></p>
        <p><span class="form-field-large"></span></p>
    </div>

    <div class="exercise">
        <div class="exercise-title">练习K：交叉验证练习</div>
        <p><strong>题目</strong>: 某公司2024年财报显示营收增长30%，但经营现金流下降20%。请分析可能的原因和风险。</p>

        <p>可能原因（至少写出2个）:</p>
        <p>1. <span class="form-field-large"></span></p>
        <p>2. <span class="form-field-large"></span></p>

        <p>风险判断：</p>
        <div class="radio-option">○ 高风险，需要警惕</div>
        <div class="radio-option">○ 低风险，可能是季节性因素</div>
        <div class="radio-option">○ 无法判断，需要更多信息</div>
    </div>

    <hr>

    <h2>知识框架图</h2>

<pre>
                        ┌─────────────────┐
                        │   财报案例实战   │
                        │  从数字到业务    │
                        └────────┬────────┘
                                 │
       ┌────────────────────────┼────────────────────────┐
       │                        │                        │
       ▼                        ▼                        ▼
┌──────────────┐        ┌──────────────┐        ┌──────────────┐
│  商业模式理解  │        │  数据交叉验证  │        │  异常信号追踪  │
│  靠什么赚钱    │        │  利润质量/成长 │        │  预警/风险   │
└──────────────┘        │  资产质量     │        └──────────────┘
                         └──────────────┘
                                 │
                        ┌────────┴────────┐
                        │   投资决策形成    │
                        │  值得/不值得/观望  │
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

    <h1>第六章：估值方法与策略</h1>

    <div class="chapter-header">
        <h2>学习目标</h2>
    </div>

    <p>本章学完你能：</p>
    <ul>
        <li>掌握PE、PB、PS三种主流估值方法的使用场景</li>
        <li>理解PEG估值法的原理和应用</li>
        <li>根据行业特点选择合适的估值方法</li>
        <li>形成自己的估值判断框架</li>
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
            <td>4个</td>
            <td>PE估值、PB估值、PS估值、PEG估值</td>
        </tr>
        <tr>
            <td>互动表单</td>
            <td>1个</td>
            <td>估值工具卡</td>
        </tr>
        <tr>
            <td>课堂练习</td>
            <td>2道</td>
            <td>估值计算、投资决策</td>
        </tr>
    </table>

    <hr>

    <h2>知识点</h2>

    <h3>6.1 PE估值法（市盈率）</h3>

    <p><strong>适用场景</strong>：</p>
    <ul>
        <li>业绩稳定、盈利可预测的成熟行业</li>
        <li>不适用：亏损企业、强周期行业</li>
    </ul>

    <p><strong>参考范围</strong>：</p>

    <table>
        <tr>
            <th>PE区间</th>
            <th>估值水平</th>
            <th>信号</th>
        </tr>
        <tr>
            <td>PE < 10</td>
            <td>偏低估</td>
            <td>可能被低估或存在风险</td>
        </tr>
        <tr>
            <td>PE 10-20</td>
            <td>合理</td>
            <td>正常估值区间</td>
        </tr>
        <tr>
            <td>PE 20-30</td>
            <td>偏高</td>
            <td>成长预期较高</td>
        </tr>
        <tr>
            <td>PE > 30</td>
            <td>高估</td>
            <td>需要非常强的成长预期</td>
        </tr>
    </table>

    <p><strong>行业PE参考</strong>：</p>

    <table>
        <tr>
            <th>行业</th>
            <th>合理PE区间</th>
        </tr>
        <tr>
            <td>银行</td>
            <td>5-8倍</td>
        </tr>
        <tr>
            <td>保险</td>
            <td>8-15倍</td>
        </tr>
        <tr>
            <td>消费</td>
            <td>20-35倍</td>
        </tr>
        <tr>
            <td>医药</td>
            <td>25-40倍</td>
        </tr>
        <tr>
            <td>科技</td>
            <td>30-60倍</td>
        </tr>
    </table>

    <h3>6.2 PB估值法（市净率）</h3>

    <p><strong>适用场景</strong>：</p>
    <ul>
        <li>金融行业（银行、券商、保险）</li>
        <li>重资产行业、周期性行业</li>
        <li>不适用：轻资产行业（软件、互联网）</li>
    </ul>

    <p><strong>参考范围</strong>：</p>

    <table>
        <tr>
            <th>PB区间</th>
            <th>估值水平</th>
        </tr>
        <tr>
            <td>PB < 1</td>
            <td>破净，低于净资产</td>
        </tr>
        <tr>
            <td>PB 1-3</td>
            <td>正常区间</td>
        </tr>
        <tr>
            <td>PB 3-5</td>
            <td>轻资产或品牌溢价</td>
        </tr>
        <tr>
            <td>PB > 5</td>
            <td>强品牌或高成长预期</td>
        </tr>
    </table>

    <div class="tip-box">
        <p><strong>银行股案例</strong>: 银行股PB普遍低于1，因为市场担心它们的资产质量（贷款坏账）。但如果你相信中国银行体系不会崩溃，低PB的银行股可能是价值陷阱里的黄金。</p>
    </div>

    <h3>6.3 PS估值法（市销率）</h3>

    <p><strong>适用场景</strong>：</p>
    <ul>
        <li>尚无盈利或盈利不稳定的成长型公司</li>
        <li>电商、SaaS、互联网平台</li>
    </ul>

    <p><strong>参考范围</strong>：</p>

    <table>
        <tr>
            <th>PS区间</th>
            <th>估值水平</th>
        </tr>
        <tr>
            <td>PS < 1</td>
            <td>偏低估</td>
        </tr>
        <tr>
            <td>PS 1-5</td>
            <td>合理</td>
        </tr>
        <tr>
            <td>PS 5-10</td>
            <td>偏高</td>
        </tr>
        <tr>
            <td>PS > 10</td>
            <td>极高</td>
        </tr>
    </table>

    <h3>6.4 PEG估值法</h3>

    <p><strong>原理</strong>：将估值与成长性结合，避免"买贵了的好公司"。</p>

<pre>
PEG = PE ÷ 预期净利润增长率（G）
</pre>

    <p><strong>判断标准</strong>：</p>

    <table>
        <tr>
            <th>PEG值</th>
            <th>含义</th>
        </tr>
        <tr>
            <td>PEG < 1</td>
            <td>相对低估（成长性被低估）</td>
        </tr>
        <tr>
            <td>PEG = 1</td>
            <td>合理（成长与估值匹配）</td>
        </tr>
        <tr>
            <td>PEG > 1</td>
            <td>相对高估（成长被过度定价）</td>
        </tr>
        <tr>
            <td>PEG > 2</td>
            <td>明显高估</td>
        </tr>
    </table>

    <p><strong>注意</strong>：G（增长率）要用未来2-3年复合增长率，而不是过去的数据。</p>

    <hr>

    <h2>表单6.1：我的场景股估值分析</h2>

    <blockquote>
        <p><strong>填写说明</strong>: 用你场景股的数据，完成估值分析。</p>
    </blockquote>

    <h3>基本估值数据</h3>

    <table>
        <tr>
            <th>指标</th>
            <th>数值</th>
        </tr>
        <tr>
            <td>当前股价</td>
            <td><span class="form-field"></span> 元</td>
        </tr>
        <tr>
            <td>市盈率(PE)</td>
            <td><span class="form-field"></span> 倍</td>
        </tr>
        <tr>
            <td>市净率(PB)</td>
            <td><span class="form-field"></span> 倍</td>
        </tr>
        <tr>
            <td>市销率(PS)</td>
            <td><span class="form-field"></span> 倍</td>
        </tr>
        <tr>
            <td>预期净利润增速(G)</td>
            <td><span class="form-field"></span> %</td>
        </tr>
        <tr>
            <td>PEG</td>
            <td><span class="form-field"></span></td>
        </tr>
    </table>

    <h3>估值判断</h3>

    <table>
        <tr>
            <th>估值方法</th>
            <th>你的判断</th>
            <th>依据</th>
        </tr>
        <tr>
            <td>PE估值</td>
            <td><span class="radio-option">○ 低估</span> <span class="radio-option">○ 合理</span> <span class="radio-option">○ 高估</span></td>
            <td><span class="form-field"></span></td>
        </tr>
        <tr>
            <td>PB估值</td>
            <td><span class="radio-option">○ 低估</span> <span class="radio-option">○ 合理</span> <span class="radio-option">○ 高估</span></td>
            <td><span class="form-field"></span></td>
        </tr>
        <tr>
            <td>PS估值</td>
            <td><span class="radio-option">○ 低估</span> <span class="radio-option">○ 合理</span> <span class="radio-option">○ 高估</span></td>
            <td><span class="form-field"></span></td>
        </tr>
        <tr>
            <td>PEG</td>
            <td><span class="radio-option">○ 相对低估</span> <span class="radio-option">○ 合理</span> <span class="radio-option">○ 高估</span></td>
            <td><span class="form-field"></span></td>
        </tr>
    </table>

    <h3>综合判断</h3>

    <table>
        <tr>
            <th>问题</th>
            <th>你的回答</th>
        </tr>
        <tr>
            <td>综合各种估值方法，你的场景股目前贵不贵？</td>
            <td><span class="form-field-large"></span></td>
        </tr>
        <tr>
            <td>和同行比，它的估值处于什么水平？</td>
            <td><span class="form-field-large"></span></td>
        </tr>
        <tr>
            <td>如果要买，你愿意在什么价格买？</td>
            <td><span class="form-field-large"></span></td>
        </tr>
    </table>

    <hr>

    <h2>练习</h2>

    <div class="exercise">
        <div class="exercise-title">练习L：估值计算题</div>
        <p><strong>题目</strong>: 根据以下数据，计算并判断估值水平。</p>
        <p>某消费公司：</p>
        <ul>
            <li>当前股价：50元</li>
            <li>每股收益(EPS)：2.5元</li>
            <li>每股净资产：10元</li>
            <li>每股营收：20元</li>
            <li>预期未来3年净利润复合增长率：20%</li>
        </ul>

        <table>
            <tr>
                <th>计算项</th>
                <th>计算过程</th>
                <th>结果</th>
            </tr>
            <tr>
                <td>PE</td>
                <td><span class="form-field-large"></span></td>
                <td><span class="form-field"></span></td>
            </tr>
            <tr>
                <td>PB</td>
                <td><span class="form-field-large"></span></td>
                <td><span class="form-field"></span></td>
            </tr>
            <tr>
                <td>PS</td>
                <td><span class="form-field-large"></span></td>
                <td><span class="form-field"></span></td>
            </tr>
            <tr>
                <td>PEG</td>
                <td><span class="form-field-large"></span></td>
                <td><span class="form-field"></span></td>
            </tr>
        </table>

        <p><strong>判断</strong>：</p>
        <p>1. PE 20倍对于消费行业来说：<span class="radio-option">○ 便宜</span> <span class="radio-option">○ 合理</span> <span class="radio-option">○ 贵</span></p>
        <p>2. PEG = 1意味着：<span class="radio-option">○ 成长被低估</span> <span class="radio-option">○ 成长与估值匹配</span> <span class="radio-option">○ 成长被高估</span></p>
    </div>

    <div class="exercise">
        <div class="exercise-title">练习M：行业估值方法选择</div>
        <p><strong>题目</strong>: 为以下行业选择最合适的估值方法，并说明理由。</p>

        <table>
            <tr>
                <th>行业</th>
                <th>推荐估值方法</th>
                <th>理由</th>
            </tr>
            <tr>
                <td>银行（如工商银行）</td>
                <td><span class="form-field"></span></td>
                <td><span class="form-field-large"></span></td>
            </tr>
            <tr>
                <td>白酒（如贵州茅台）</td>
                <td><span class="form-field"></span></td>
                <td><span class="form-field-large"></span></td>
            </tr>
            <tr>
                <td>互联网（如腾讯控股）</td>
                <td><span class="form-field"></span></td>
                <td><span class="form-field-large"></span></td>
            </tr>
            <tr>
                <td>新能源汽车（如比亚迪）</td>
                <td><span class="form-field"></span></td>
                <td><span class="form-field-large"></span></td>
            </tr>
        </table>
    </div>

    <hr>

    <h2>知识框架图</h2>

<pre>
                        ┌─────────────────┐
                        │    估值方法      │
                        │  判断贵贱的标尺   │
                        └────────┬────────┘
                                 │
       ┌─────────────────────────┼─────────────────────────┐
       │                         │                         │
       ▼                         ▼                         ▼
┌──────────────┐        ┌──────────────┐        ┌──────────────┐
│   PE估值法    │        │   PB估值法    │        │   PS估值法    │
│  盈利稳定的   │        │  金融/重资产  │        │  成长型公司   │
│  成熟行业     │        │  周期行业     │        │  无盈利公司   │
└──────────────┘        └──────────────┘        └──────────────┘
       │
       ▼
┌──────────────┐
│  PEG估值法    │
│  成长性调整   │
│  避免买贵货   │
└──────────────┘
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
    f.write(ch5)

print(f"Part 4 written: Chapter 5-6 ({len(ch5)} chars)")
