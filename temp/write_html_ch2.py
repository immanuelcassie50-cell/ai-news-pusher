#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Write HTML parts 2 - Chapters 2-4"""

output_path = "D:/新课开发/金融学/11-股票投资入门-从开户到读懂财报/学员手册/股票投资入门_学员手册_v1.0.html"

# Chapter 2 content
ch2 = '''
    <hr>

    <h1>第二章：A股入市全流程</h1>

    <div class="chapter-header">
        <h2>学习目标</h2>
    </div>

    <p>本章学完你能：</p>
    <ul>
        <li>独立完成A股开户的全流程</li>
        <li>比较不同券商的优劣势，选择适合自己的券商</li>
        <li>理解A股交易规则（交易时间、费用、竞价方式）</li>
        <li>规避常见的开户和交易陷阱</li>
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
            <td>券商选择、开户流程、交易规则</td>
        </tr>
        <tr>
            <td>互动表单</td>
            <td>2个</td>
            <td>券商对比表、开户检查清单</td>
        </tr>
        <tr>
            <td>课堂练习</td>
            <td>2道</td>
            <td>流程排序题、规则应用题</td>
        </tr>
    </table>

    <hr>

    <h2>知识点</h2>

    <h3>2.1 如何选择券商</h3>

    <p><strong>券商选择要点</strong>：</p>

    <table>
        <tr>
            <th>考量因素</th>
            <th>说明</th>
            <th>重点关注</th>
        </tr>
        <tr>
            <td><strong>券商规模</strong></td>
            <td>选择A级以上券商</td>
            <td>服务更稳定</td>
        </tr>
        <tr>
            <td><strong>手续费率</strong></td>
            <td>默认万2.5，可申请调低</td>
            <td>重点比较</td>
        </tr>
        <tr>
            <td><strong>交易软件</strong></td>
            <td>易用性、稳定性</td>
            <td>是否支持条件单</td>
        </tr>
        <tr>
            <td><strong>线下网点</strong></td>
            <td>距离近方便现场办理</td>
            <td>业务咨询</td>
        </tr>
        <tr>
            <td><strong>研报质量</strong></td>
            <td>免费研报质量和数量</td>
            <td>投资决策参考</td>
        </tr>
    </table>

    <div class="tip-box">
        <p><strong>经验之谈</strong>: 券商手续费是有谈判空间的。如果你资金量较大或者交易频繁，一定要主动联系客户经理申请降佣。别不好意思省下的都是自己的钱。</p>
    </div>

    <h3>2.2 A股交易规则</h3>

    <p><strong>交易时间</strong>：</p>

    <table>
        <tr>
            <th>时段</th>
            <th>时间</th>
            <th>说明</th>
        </tr>
        <tr>
            <td>早盘集合竞价</td>
            <td>9:15-9:25</td>
            <td>可以挂单也可以撤单</td>
        </tr>
        <tr>
            <td>连续竞价</td>
            <td>9:30-11:30</td>
            <td>正常交易</td>
        </tr>
        <tr>
            <td>午间休市</td>
            <td>11:30-13:00</td>
            <td>无法交易</td>
        </tr>
        <tr>
            <td>下午连续竞价</td>
            <td>13:00-15:00</td>
            <td>正常交易</td>
        </tr>
        <tr>
            <td>收盘集合竞价</td>
            <td>14:57-15:00</td>
            <td>仅可挂单不可撤单</td>
        </tr>
    </table>

    <p><strong>费用结构</strong>：</p>

    <table>
        <tr>
            <th>费用类型</th>
            <th>收费标准</th>
            <th>备注</th>
        </tr>
        <tr>
            <td>印花税</td>
            <td>成交金额的0.1%</td>
            <td>仅卖出时收取，国家强制</td>
        </tr>
        <tr>
            <td>过户费</td>
            <td>成交金额的0.001%</td>
            <td>买卖均收，中国结算收取</td>
        </tr>
        <tr>
            <td>交易佣金</td>
            <td>不超过成交金额0.3%</td>
            <td>券商收取，可谈低</td>
        </tr>
    </table>

    <p><strong>竞价方式</strong>：</p>

    <table>
        <tr>
            <th>竞价方式</th>
            <th>说明</th>
            <th>成交价格确定原则</th>
        </tr>
        <tr>
            <td><strong>限价委托</strong></td>
            <td>指定价格买入/卖出</td>
            <td>至少一个价位成交</td>
        </tr>
        <tr>
            <td><strong>市价委托</strong></td>
            <td>以当前市场价格立即成交</td>
            <td>可能滑点，不保证价格</td>
        </tr>
    </table>

    <h3>2.3 账户类型与权限</h3>

    <table>
        <tr>
            <th>账户类型</th>
            <th>开通条件</th>
            <th>交易范围</th>
        </tr>
        <tr>
            <td>沪A账户</td>
            <td>开户即开通</td>
            <td>仅可交易上交所股票</td>
        </tr>
        <tr>
            <td>深A账户</td>
            <td>开户即开通</td>
            <td>仅可交易深交所股票</td>
        </tr>
        <tr>
            <td>创业板</td>
            <td>需单独开通</td>
            <td>交易300开头股票</td>
        </tr>
        <tr>
            <td>科创板</td>
            <td>20个交易日日均资产≥50万</td>
            <td>交易688开头股票</td>
        </tr>
        <tr>
            <td>港股通</td>
            <td>20个交易日日均资产≥50万</td>
            <td>交易部分港股</td>
        </tr>
    </table>

    <hr>

    <h2>表单2.1：券商对比表</h2>

    <blockquote>
        <p><strong>填写说明</strong>: 课前或课后对比2-3家券商，选出最适合你的。</p>
    </blockquote>

    <table>
        <tr>
            <th>对比项</th>
            <th>券商A</th>
            <th>券商B</th>
            <th>券商C</th>
        </tr>
        <tr>
            <td>券商名称</td>
            <td><span class="form-field"></span></td>
            <td><span class="form-field"></span></td>
            <td><span class="form-field"></span></td>
        </tr>
        <tr>
            <td>券商规模</td>
            <td><span class="form-field"></span></td>
            <td><span class="form-field"></span></td>
            <td><span class="form-field"></span></td>
        </tr>
        <tr>
            <td>交易佣金</td>
            <td><span class="form-field"></span></td>
            <td><span class="form-field"></span></td>
            <td><span class="form-field"></span></td>
        </tr>
        <tr>
            <td>现场/线上开户</td>
            <td><span class="form-field"></span></td>
            <td><span class="form-field"></span></td>
            <td><span class="form-field"></span></td>
        </tr>
        <tr>
            <td>交易软件体验</td>
            <td><span class="form-field"></span></td>
            <td><span class="form-field"></span></td>
            <td><span class="form-field"></span></td>
        </tr>
        <tr>
            <td>客服响应速度</td>
            <td><span class="form-field"></span></td>
            <td><span class="form-field"></span></td>
            <td><span class="form-field"></span></td>
        </tr>
        <tr>
            <td>免费研报</td>
            <td><span class="form-field"></span></td>
            <td><span class="form-field"></span></td>
            <td><span class="form-field"></span></td>
        </tr>
        <tr>
            <td><strong>我的选择</strong></td>
            <td><span class="radio-option">○</span></td>
            <td><span class="radio-option">○</span></td>
            <td><span class="radio-option">○</span></td>
        </tr>
    </table>

    <p><strong>选择理由</strong>: <span class="form-field-large"></span></p>

    <hr>

    <h2>表单2.2：开户检查清单</h2>

    <blockquote>
        <p><strong>填写说明</strong>: 开户时每完成一项就在前面打勾。</p>
    </blockquote>

    <h3>开户前准备</h3>
    <ul>
        <li>○ 身份证准备妥当（有效期内的中华人民共和国居民身份证）</li>
        <li>○ 银行卡准备妥当（工行、农行、中行、建行、交行、招行等主流银行）</li>
        <li>○ 手机号码确认（需绑定本人实名认证的手机号）</li>
        <li>○ 券商选择完成</li>
    </ul>

    <h3>开户进行中</h3>
    <ul>
        <li>○ APP下载完成（手机应用商店搜索，避免仿冒APP）</li>
        <li>○ 身份验证完成（身份证正反面拍摄+人脸识别）</li>
        <li>○ 基本信息填写完成（职业、学历、地址）</li>
        <li>○ 风险测评完成（约15-20题）</li>
        <li>○ 银行卡绑定完成</li>
        <li>○ 密码设置完成（资金密码+交易密码）</li>
        <li>○ 协议签署完成（证券交易委托代理协议、风险揭示书等）</li>
        <li>○ 审核提交完成</li>
    </ul>

    <h3>开户后设置</h3>
    <ul>
        <li>○ 账户激活完成</li>
        <li>○ 首笔银证转账完成</li>
        <li>○ 密码修改完成（如需）</li>
        <li>○ 通知设置完成（微信/短信通知）</li>
        <li>○ 交易权限开通完成（创业板等，如需要）</li>
    </ul>

    <hr>

    <h2>练习</h2>

    <div class="exercise">
        <div class="exercise-title">练习D：流程排序题</div>
        <p><strong>题目</strong>: 将A股开户流程按正确顺序排列，在横线上填写序号。</p>
<pre>
（  ）下载券商官方APP
（  ）填写基本信息（职业、学历、地址）
（  ）身份验证（身份证+人脸识别）
（  ）绑定银行卡
（  ）风险测评
（  ）设置账户密码
（  ）签署协议
（  ）提交审核并等待通过
</pre>
    </div>

    <div class="exercise">
        <div class="exercise-title">练习E：规则应用题</div>
        <p><strong>题目</strong>: 根据以下场景，选择正确的操作或判断对错。</p>
        <p>1. 小明在周五下午3点想卖出股票，他的委托会：</p>
        <div class="radio-option">○ 当天成交</div>
        <div class="radio-option">○ 下周一成交</div>
        <div class="radio-option">○ 下周二成交</div>
        <p>2. 以下哪项费用是买卖股票时都需要支付的？</p>
        <div class="radio-option">○ 印花税</div>
        <div class="radio-option">○ 过户费</div>
        <div class="radio-option">○ 交易佣金</div>
        <p>3. 判断：开户审核被拒绝后，可以直接换一家券商重新开户，不用管之前那家。</p>
        <div class="radio-option">○ 正确</div>
        <div class="radio-option">○ 错误</div>
    </div>

    <hr>

    <h2>知识框架图</h2>

<pre>
                        ┌─────────────────┐
                        │    选择券商      │
                        │  规模/佣金/软件  │
                        └────────┬────────┘
                                 │
            ┌────────────────────┼────────────────────┐
            │                    │                    │
            ▼                    ▼                    ▼
   ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐
   │    开户流程      │  │    交易规则      │  │    账户权限      │
   │  准备→验证→绑卡 │  │  时间/费用/竞价  │  │  沪A/深A/创业板  │
   │  测评→审核      │  │                  │  │  科创板/港股通   │
   └─────────────────┘  └─────────────────┘  └─────────────────┘
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

    <h1>第三章：技术分析入门</h1>

    <div class="chapter-header">
        <h2>学习目标</h2>
    </div>

    <p>本章学完你能：</p>
    <ul>
        <li>读懂K线图的基本构成（开盘价、收盘价、最高价、最低价）</li>
        <li>识别常见的K线形态（锤子线、吞没、十字星等）</li>
        <li>理解均线的概念和常用的均线组合</li>
        <li>判断均线交叉信号（金叉、死叉）</li>
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
            <td>K线基础、均线系统、趋势判断</td>
        </tr>
        <tr>
            <td>互动表单</td>
            <td>1个</td>
            <td>技术分析工作表</td>
        </tr>
        <tr>
            <td>课堂练习</td>
            <td>2道</td>
            <td>形态识别、均线判断</td>
        </tr>
    </table>

    <hr>

    <h2>知识点</h2>

    <h3>3.1 K线基础</h3>

    <p><strong>K线的构成</strong>：</p>

<pre class="kline-diagram">
    ┌─────┐
    │     │  ← 上影线（最高价）
    │  ┌──┼──┐
    │  │  │  │
    └──┼──┘  │
       │     │  ← 下影线（最低价）
       └─────┘
       ↑
    实体（开盘价到收盘价）
</pre>

    <p><strong>K线颜色</strong>：</p>
    <ul>
        <li>红色（上涨）：收盘价 > 开盘价</li>
        <li>绿色（下跌）：收盘价 < 开盘价</li>
    </ul>

    <div class="tip-box">
        <p><strong>颠覆认知</strong>: A股习惯用红色表示上涨、绿色表示下跌，和国际惯例相反。别被颜色搞混了。</p>
    </div>

    <h3>3.2 常见K线形态</h3>

    <table>
        <tr>
            <th>形态名称</th>
            <th>特征描述</th>
            <th>买卖信号</th>
        </tr>
        <tr>
            <td><strong>锤子线</strong></td>
            <td>下影线较长，实体较小，位于价格低位</td>
            <td>买入力度较强，可能见底回升</td>
        </tr>
        <tr>
            <td><strong>上吊线</strong></td>
            <td>下影线较长，实体较小，位于价格高位</td>
            <td>卖出信号，可能见顶回落</td>
        </tr>
        <tr>
            <td><strong>吞没形态</strong></td>
            <td>后一根K线完全包裹前一根K线实体</td>
            <td>阳包阴=买入，阴包阳=卖出</td>
        </tr>
        <tr>
            <td><strong>十字星</strong></td>
            <td>开盘价与收盘价接近，上下影线较长</td>
            <td>变盘信号，结合成交量判断</td>
        </tr>
        <tr>
            <td><strong>早晨之星</strong></td>
            <td>三根K线组合：下跌→十字→上涨</td>
            <td>强烈买入信号</td>
        </tr>
        <tr>
            <td><strong>黄昏之星</strong></td>
            <td>三根K线组合：上涨→十字→下跌</td>
            <td>强烈卖出信号</td>
        </tr>
    </table>

    <h3>3.3 均线系统</h3>

    <p><strong>什么是均线</strong>：</p>
    <p>均线是一定周期内收盘价的平均值连成的线。例如，5日均线就是过去5天收盘价的平均值。</p>

    <p><strong>常用均线参数</strong>：</p>

    <table>
        <tr>
            <th>均线类型</th>
            <th>参数</th>
            <th>含义</th>
        </tr>
        <tr>
            <td>短期均线</td>
            <td>5日、10日</td>
            <td>反映短期趋势</td>
        </tr>
        <tr>
            <td>中期均线</td>
            <td>20日、30日</td>
            <td>反映中期趋势</td>
        </tr>
        <tr>
            <td>长期均线</td>
            <td>60日、120日、250日</td>
            <td>反映长期趋势</td>
        </tr>
    </table>

    <p><strong>均线交叉信号</strong>：</p>

    <table>
        <tr>
            <th>交叉类型</th>
            <th>条件</th>
            <th>信号</th>
        </tr>
        <tr>
            <td><strong>金叉</strong></td>
            <td>短期均线上穿长期均线</td>
            <td>看多信号</td>
        </tr>
        <tr>
            <td><strong>死叉</strong></td>
            <td>短期均线下穿长期均线</td>
            <td>看空信号</td>
        </tr>
        <tr>
            <td><strong>多头排列</strong></td>
            <td>短期 > 中期 > 长期</td>
            <td>上升趋势</td>
        </tr>
        <tr>
            <td><strong>空头排列</strong></td>
            <td>短期 < 中期 < 长期</td>
            <td>下降趋势</td>
        </tr>
    </table>

    <div class="tip-box">
        <p><strong>实战经验</strong>: 均线最大的作用是判断趋势，而不是预测价格。不要试图用均线抄底逃顶，那是神仙做的事。</p>
    </div>

    <hr>

    <h2>表单3.1：技术分析工作表（节选）</h2>

    <blockquote>
        <p><strong>填写说明</strong>: 选取你的场景股，练习K线形态识别和均线分析。</p>
    </blockquote>

    <h3>K线形态识别记录</h3>

    <p><strong>观察对象</strong>: <span class="form-field-large"></span>（股票代码/名称）</p>
    <p><strong>观察日期</strong>: <span class="form-field-large"></span></p>

    <table>
        <tr>
            <th>序号</th>
            <th>识别到的形态</th>
            <th>出现位置</th>
            <th>你的判断</th>
            <th>实际走势验证</th>
        </tr>
        <tr>
            <td>1</td>
            <td><span class="form-field"></span></td>
            <td><span class="form-field"></span></td>
            <td><span class="form-field"></span></td>
            <td><span class="form-field"></span></td>
        </tr>
        <tr>
            <td>2</td>
            <td><span class="form-field"></span></td>
            <td><span class="form-field"></span></td>
            <td><span class="form-field"></span></td>
            <td><span class="form-field"></span></td>
        </tr>
        <tr>
            <td>3</td>
            <td><span class="form-field"></span></td>
            <td><span class="form-field"></span></td>
            <td><span class="form-field"></span></td>
            <td><span class="form-field"></span></td>
        </tr>
    </table>

    <h3>均线交叉信号记录</h3>

    <table>
        <tr>
            <th>交叉日期</th>
            <th>交叉类型</th>
            <th>交叉均线</th>
            <th>交叉位置</th>
            <th>成交量配合</th>
            <th>我的操作</th>
        </tr>
        <tr>
            <td><span class="form-field"></span></td>
            <td><span class="form-field"></span></td>
            <td><span class="form-field"></span></td>
            <td><span class="form-field"></span></td>
            <td><span class="radio-option">○ 是</span> <span class="radio-option">○ 否</span></td>
            <td><span class="form-field"></span></td>
        </tr>
        <tr>
            <td><span class="form-field"></span></td>
            <td><span class="form-field"></span></td>
            <td><span class="form-field"></span></td>
            <td><span class="form-field"></span></td>
            <td><span class="radio-option">○ 是</span> <span class="radio-option">○ 否</span></td>
            <td><span class="form-field"></span></td>
        </tr>
        <tr>
            <td><span class="form-field"></span></td>
            <td><span class="form-field"></span></td>
            <td><span class="form-field"></span></td>
            <td><span class="form-field"></span></td>
            <td><span class="radio-option">○ 是</span> <span class="radio-option">○ 否</span></td>
            <td><span class="form-field"></span></td>
        </tr>
    </table>

    <hr>

    <h2>练习</h2>

    <div class="exercise">
        <div class="exercise-title">练习F：形态识别题</div>
        <p><strong>题目</strong>: 以下描述分别对应哪种K线形态？将正确答案写在横线上。</p>
        <p>1. "下影线很长，上影线很短或没有，实体很小且位于价格区间的上部" → 形态名称：<span class="form-field"></span></p>
        <p>2. "连续三根下跌的小阴线，之后出现一根大阳线" → 形态名称：<span class="form-field"></span></p>
        <p>3. "开盘价和收盘价几乎相同，只有上下影线" → 形态名称：<span class="form-field"></span></p>
    </div>

    <div class="exercise">
        <div class="exercise-title">练习G：均线判断题</div>
        <p><strong>题目</strong>: 根据以下描述，判断均线状态。</p>
        <p>假设某股票的均线排列如下：5日均线 = 10元，20日均线 = 9.5元，60日均线 = 9元。</p>
        <p>1. 当前均线排列是：<span class="radio-option">○ 多头排列</span> <span class="radio-option">○ 空头排列</span> <span class="radio-option">○ 混乱</span></p>
        <p>2. 如果5日均线从上往下穿过20日均线，这是：<span class="radio-option">○ 金叉</span> <span class="radio-option">○ 死叉</span></p>
        <p>3. 这种交叉通常意味着：<span class="radio-option">○ 短期看多</span> <span class="radio-option">○ 短期看空</span> <span class="radio-option">○ 无意义</span></p>
    </div>

    <hr>

    <h2>知识框架图</h2>

<pre>
                        ┌─────────────────┐
                        │    技术分析      │
                        │    基本工具      │
                        └────────┬────────┘
                                 │
            ┌────────────────────┼────────────────────┐
            │                    │                    │
            ▼                    ▼                    ▼
   ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐
   │    K线基础       │  │    均线系统      │  │    趋势判断      │
   │  构成/颜色/阅读  │  │  参数/交叉/排列  │  │  支撑/压力/形态  │
   └─────────────────┘  └─────────────────┘  └─────────────────┘
            │                    │                    │
            └────────────────────┼────────────────────┘
                                 │
                        ┌────────┴────────┐
                        │   综合应用      │
                        │  形态+均线+量   │
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

    <h1>第四章：基本面分析框架</h1>

    <div class="chapter-header">
        <h2>学习目标</h2>
    </div>

    <p>本章学完你能：</p>
    <ul>
        <li>理解三大财务报表的核心结构（资产负债表、利润表、现金流量表）</li>
        <li>掌握关键财务指标的的计算方法（毛利率、净利率、ROE等）</li>
        <li>识别财报中的异常信号</li>
        <li>对一家公司进行基础的基本面评估</li>
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
            <td>财报结构、关键指标、异常识别</td>
        </tr>
        <tr>
            <td>互动表单</td>
            <td>2个</td>
            <td>财报阅读框架、关键财务指标计算表</td>
        </tr>
        <tr>
            <td>课堂练习</td>
            <td>2道</td>
            <td>指标计算、财报分析</td>
        </tr>
    </table>

    <hr>

    <h2>知识点</h2>

    <h3>4.1 财务报表结构</h3>

    <p><strong>资产负债表</strong>：</p>
    <blockquote>
        <p>资产负债表反映的是企业在某一时刻的"家底"。</p>
    </blockquote>

<pre>
资产 = 负债 + 所有者权益
</pre>

    <table>
        <tr>
            <th>资产类型</th>
            <th>例子</th>
            <th>关注点</th>
        </tr>
        <tr>
            <td>流动资产</td>
            <td>货币资金、应收账款、存货</td>
            <td>变现能力</td>
        </tr>
        <tr>
            <td>非流动资产</td>
            <td>固定资产、无形资产、商誉</td>
            <td>折旧政策</td>
        </tr>
    </table>

    <p><strong>利润表</strong>：</p>
    <blockquote>
        <p>利润表反映的是企业在一定期间赚了多少钱。</p>
    </blockquote>

    <table>
        <tr>
            <th>指标</th>
            <th>计算</th>
            <th>含义</th>
        </tr>
        <tr>
            <td>营业收入</td>
            <td>主营业务 + 其他业务</td>
            <td>规模</td>
        </tr>
        <tr>
            <td>毛利润</td>
            <td>收入 - 成本</td>
            <td>核心业务盈利能力</td>
        </tr>
        <tr>
            <td>净利润</td>
            <td>利润总额 - 所得税</td>
            <td>最终获利</td>
        </tr>
    </table>

    <p><strong>现金流量表</strong>：</p>
    <blockquote>
        <p>现金流量表反映的是企业实际收到了多少真金白银。</p>
    </blockquote>

    <table>
        <tr>
            <th>活动类型</th>
            <th>说明</th>
            <th>优质信号</th>
        </tr>
        <tr>
            <td>经营活动现金流</td>
            <td>主业经营</td>
            <td>> 净利润</td>
        </tr>
        <tr>
            <td>投资活动现金流</td>
            <td>扩张/收缩</td>
            <td>合理有序</td>
        </tr>
        <tr>
            <td>筹资活动现金流</td>
            <td>融资状况</td>
            <td>配合战略</td>
        </tr>
    </table>

    <h3>4.2 关键财务指标</h3>

    <table>
        <tr>
            <th>指标名称</th>
            <th>计算公式</th>
            <th>参考标准</th>
        </tr>
        <tr>
            <td><strong>毛利率</strong></td>
            <td>(收入 - 成本) / 收入 × 100%</td>
            <td>> 30% 较优</td>
        </tr>
        <tr>
            <td><strong>净利率</strong></td>
            <td>净利润 / 营业收入 × 100%</td>
            <td>> 10% 较优</td>
        </tr>
        <tr>
            <td><strong>ROE</strong></td>
            <td>净利润 / 净资产 × 100%</td>
            <td>> 15% 较优</td>
        </tr>
        <tr>
            <td><strong>资产负债率</strong></td>
            <td>负债 / 资产 × 100%</td>
            <td>< 60% 稳健</td>
        </tr>
        <tr>
            <td><strong>流动比率</strong></td>
            <td>流动资产 / 流动负债</td>
            <td>> 1.5 良好</td>
        </tr>
    </table>

    <div class="tip-box">
        <p><strong>茅台案例</strong>: 茅台的毛利率超过90%，ROE长期保持在30%以上，这就是为什么市场愿意给它30-40倍的PE——护城河太深了。</p>
    </div>

    <h3>4.3 财报异常信号</h3>

    <table>
        <tr>
            <th>异常类型</th>
            <th>信号</th>
            <th>风险</th>
        </tr>
        <tr>
            <td>收入与利润</td>
            <td>应收账款增幅远超营收增幅</td>
            <td>可能虚增收入</td>
        </tr>
        <tr>
            <td>盈利能力</td>
            <td>毛利率异常波动</td>
            <td>竞争力下降</td>
        </tr>
        <tr>
            <td>现金流</td>
            <td>净利润与经营现金流持续背离</td>
            <td>利润质量差</td>
        </tr>
        <tr>
            <td>资产质量</td>
            <td>存货大幅增加但周转率下降</td>
            <td>积压严重</td>
        </tr>
    </table>

    <hr>

    <h2>表单4.1：财报阅读框架</h2>

    <blockquote>
        <p><strong>填写说明</strong>: 用这个框架分析你的场景股财报。</p>
    </blockquote>

    <h3>资产负债表重点科目</h3>

    <table>
        <tr>
            <th>项目名称</th>
            <th>你的场景股数据</th>
            <th>关注点</th>
            <th>是否有异常</th>
        </tr>
        <tr>
            <td>货币资金</td>
            <td><span class="form-field"></span> 亿</td>
            <td>能否覆盖短期债务</td>
            <td><span class="radio-option">○ 有</span> <span class="radio-option">○ 无</span></td>
        </tr>
        <tr>
            <td>应收账款</td>
            <td><span class="form-field"></span> 亿</td>
            <td>回收周期</td>
            <td><span class="radio-option">○ 有</span> <span class="radio-option">○ 无</span></td>
        </tr>
        <tr>
            <td>存货</td>
            <td><span class="form-field"></span> 亿</td>
            <td>周转速度</td>
            <td><span class="radio-option">○ 有</span> <span class="radio-option">○ 无</span></td>
        </tr>
        <tr>
            <td>固定资产</td>
            <td><span class="form-field"></span> 亿</td>
            <td>折旧政策</td>
            <td><span class="radio-option">○ 有</span> <span class="radio-option">○ 无</span></td>
        </tr>
        <tr>
            <td>负债合计</td>
            <td><span class="form-field"></span> 亿</td>
            <td>资产负债率</td>
            <td><span class="radio-option">○ 有</span> <span class="radio-option">○ 无</span></td>
        </tr>
    </table>

    <h3>利润表重点科目</h3>

    <table>
        <tr>
            <th>项目名称</th>
            <th>你的场景股数据</th>
            <th>计算结果</th>
        </tr>
        <tr>
            <td>营业收入</td>
            <td><span class="form-field"></span> 亿</td>
            <td>—</td>
        </tr>
        <tr>
            <td>毛利润</td>
            <td><span class="form-field"></span> 亿</td>
            <td>毛利率 = <span class="form-field"></span>%</td>
        </tr>
        <tr>
            <td>净利润</td>
            <td><span class="form-field"></span> 亿</td>
            <td>净利率 = <span class="form-field"></span>%</td>
        </tr>
        <tr>
            <td>EPS</td>
            <td><span class="form-field"></span> 元</td>
            <td>—</td>
        </tr>
    </table>

    <h3>现金流量表重点</h3>

    <table>
        <tr>
            <th>活动类型</th>
            <th>现金净流量</th>
            <th>质量判断</th>
        </tr>
        <tr>
            <td>经营活动</td>
            <td><span class="form-field"></span> 亿</td>
            <td><span class="radio-option">○ 优质</span> <span class="radio-option">○ 异常</span></td>
        </tr>
        <tr>
            <td>投资活动</td>
            <td><span class="form-field"></span> 亿</td>
            <td><span class="radio-option">○ 合理</span> <span class="radio-option">○ 异常</span></td>
        </tr>
        <tr>
            <td>筹资活动</td>
            <td><span class="form-field"></span> 亿</td>
            <td><span class="radio-option">○ 合理</span> <span class="radio-option">○ 异常</span></td>
        </tr>
    </table>

    <hr>

    <h2>表单4.2：关键财务指标计算表</h2>

    <blockquote>
        <p><strong>填写说明</strong>: 用你场景股的数据，计算以下指标。</p>
    </blockquote>

    <h3>盈利能力指标</h3>

    <table>
        <tr>
            <th>指标名称</th>
            <th>计算公式</th>
            <th>计算过程</th>
            <th>结果</th>
        </tr>
        <tr>
            <td>毛利率</td>
            <td>(收入-成本)/收入×100%</td>
            <td><span class="form-field-large"></span></td>
            <td><span class="form-field"></span>%</td>
        </tr>
        <tr>
            <td>净利率</td>
            <td>净利润/收入×100%</td>
            <td><span class="form-field-large"></span></td>
            <td><span class="form-field"></span>%</td>
        </tr>
        <tr>
            <td>ROE</td>
            <td>净利润/净资产×100%</td>
            <td><span class="form-field-large"></span></td>
            <td><span class="form-field"></span>%</td>
        </tr>
    </table>

    <h3>偿债能力指标</h3>

    <table>
        <tr>
            <th>指标名称</th>
            <th>计算公式</th>
            <th>计算过程</th>
            <th>结果</th>
        </tr>
        <tr>
            <td>资产负债率</td>
            <td>负债/资产×100%</td>
            <td><span class="form-field-large"></span></td>
            <td><span class="form-field"></span>%</td>
        </tr>
        <tr>
            <td>流动比率</td>
            <td>流动资产/流动负债</td>
            <td><span class="form-field-large"></span></td>
            <td><span class="form-field"></span></td>
        </tr>
        <tr>
            <td>速动比率</td>
            <td>(流动资产-存货)/流动负债</td>
            <td><span class="form-field-large"></span></td>
            <td><span class="form-field"></span></td>
        </tr>
    </table>

    <hr>

    <h2>练习</h2>

    <div class="exercise">
        <div class="exercise-title">练习H：指标计算题</div>
        <p><strong>题目</strong>: 根据以下数据，计算毛利率、净利率和ROE。</p>
        <p>某公司2024年财报数据：</p>
        <ul>
            <li>营业收入：100亿元</li>
            <li>营业成本：60亿元</li>
            <li>净利润：15亿元</li>
            <li>净资产：75亿元</li>
        </ul>
        <table>
            <tr>
                <th>指标</th>
                <th>计算过程</th>
                <th>结果</th>
            </tr>
            <tr>
                <td>毛利率</td>
                <td><span class="form-field-large"></span></td>
                <td><span class="form-field"></span>%</td>
            </tr>
            <tr>
                <td>净利率</td>
                <td><span class="form-field-large"></span></td>
                <td><span class="form-field"></span>%</td>
            </tr>
            <tr>
                <td>ROE</td>
                <td><span class="form-field-large"></span></td>
                <td><span class="form-field"></span>%</td>
            </tr>
        </table>
    </div>

    <div class="exercise">
        <div class="exercise-title">练习I：财报分析题</div>
        <p><strong>题目</strong>: 以下是一家公司财报中的异常信号，请判断哪些需要警惕。</p>
        <p>请在需要警惕的项目前打勾：</p>
        <ul>
            <li>○ 应收账款同比增长50%，但营业收入只增长10%</li>
            <li>○ 经营活动现金流连续3年为负</li>
            <li>○ 毛利率连续3年稳定在35%</li>
            <li>○ 存货增长30%，但存货周转率在下降</li>
            <li>○ 审计机构连续5年由同一家事务所担任</li>
        </ul>
    </div>

    <hr>

    <h2>知识框架图</h2>

<pre>
                        ┌─────────────────┐
                        │    基本面分析    │
                        │    三大报表      │
                        └────────┬────────┘
                                 │
       ┌────────────────────────┼────────────────────────┐
       │                        │                        │
       ▼                        ▼                        ▼
┌──────────────┐        ┌──────────────┐        ┌──────────────┐
│  资产负债表   │        │   利润表     │        │  现金流量表   │
│  企业的家底   │        │  企业的成绩   │        │  企业的血脉   │
└──────────────┘        └──────────────┘        └──────────────┘
       │                        │                        │
       └────────────────────────┼────────────────────────┘
                                 │
                        ┌────────┴────────┐
                        │   关键财务指标   │
                        │  毛利率/ROE/负债率 │
                        └────────┬────────┘
                                 │
                        ┌────────┴────────┐
                        │   异常信号识别   │
                        │  预警/风险/陷阱  │
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
'''

with open(output_path, 'a', encoding='utf-8') as f:
    f.write(ch2)

print(f"Part 3 written: Chapters 2-4 ({len(ch2)} chars)")
