#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Write HTML parts 5 - Closing sections and Appendix"""

output_path = "D:/新课开发/金融学/11-股票投资入门-从开户到读懂财报/学员手册/股票投资入门_学员手册_v1.0.html"

# Closing content
closing = '''
    <hr>

    <h1>收尾部分</h1>

    <h2>综合实战：八个模块全链路</h2>

    <blockquote>
        <p><strong>填写说明</strong>: 回想整个课程，把八个模块的核心知识点串联起来，形成你的投资框架。</p>
    </blockquote>

    <h3>投资决策全流程</h3>

<pre>
        ┌─────────────────────────────────────────────────┐
        │                  我的投资框架                      │
        └─────────────────────────────────────────────────┘

  【第一步】确定投资标的
  │
  ├─ 行业景气度：_________________________________
  ├─ 公司基本面：_________________________________
  └─ 我的判断：___________________________________

  【第二步】估值分析
  │
  ├─ PE：_____ 倍（判断：_____）
  ├─ PB：_____ 倍（判断：_____）
  └─ 综合判断：___________________________________

  【第三步】技术面确认
  │
  ├─ 趋势：○ 上升 ○ 下降 ○ 震荡
  ├─ 均线：○ 多头 ○ 空头 ○ 混乱
  └─ 入场时机：___________________________________

  【第四步】制定计划
  │
  ├─ 买入价格：___________________________________
  ├─ 仓位：_____%
  ├─ 止损线：_____%
  └─ 持有期限：___________________________________

  【第五步】执行与跟踪
  │
  ├─ 执行日期：___________________________________
  ├─ 实际买入价：_________________________________
  └─ 跟踪要点：___________________________________

  【第六步】复盘总结
  │
  ├─ 与预期符合程度：_____________________________
  └─ 经验教训：___________________________________
</pre>

    <hr>

    <h2>七习惯重测自评</h2>

    <blockquote>
        <p><strong>填写说明</strong>: 回到课程开始时的8道判断题，看看现在的你能答对几道。对比出发点的得分，见证认知的提升。</p>
    </blockquote>

    <h3>判断题重测</h3>

    <p><strong>题目1</strong><br>
    股票本质上是一张"借据"，代表你对公司的债权。</p>
    <div class="radio-option">○ 正确</div>
    <div class="radio-option">○ 错误</div>
    <p>→ 答案：<span class="form-field"></span>（和开篇比，我的得分：<span class="form-field"></span>/80分）</p>

    <p>（完整重测表格见课程开始处）</p>

    <h3>认知提升总结</h3>

    <table>
        <tr>
            <th>维度</th>
            <th>课程前</th>
            <th>课程后</th>
        </tr>
        <tr>
            <td>对股票本质的理解</td>
            <td><span class="form-field-large"></span></td>
            <td><span class="form-field-large"></span></td>
        </tr>
        <tr>
            <td>对市场机制的认识</td>
            <td><span class="form-field-large"></span></td>
            <td><span class="form-field-large"></span></td>
        </tr>
        <tr>
            <td>对估值的判断能力</td>
            <td><span class="form-field-large"></span></td>
            <td><span class="form-field-large"></span></td>
        </tr>
        <tr>
            <td>对风险的理解</td>
            <td><span class="form-field-large"></span></td>
            <td><span class="form-field-large"></span></td>
        </tr>
        <tr>
            <td>综合得分</td>
            <td><span class="form-field"></span>分</td>
            <td><span class="form-field"></span>分</td>
        </tr>
    </table>

    <hr>

    <h2>30天行动计划</h2>

    <blockquote>
        <p><strong>填写说明</strong>: 课程结束不是终点，而是起点。制定一个30天的行动计划，将学习转化为行动。</p>
    </blockquote>

    <h3>我的行动计划</h3>

    <table>
        <tr>
            <th>时间</th>
            <th>行动项</th>
            <th>目标</th>
            <th>完成情况</th>
        </tr>
        <tr>
            <td>第1周</td>
            <td><span class="form-field-large"></span></td>
            <td><span class="form-field-large"></span></td>
            <td><span class="radio-option">○ 已完成</span> <span class="radio-option">○ 进行中</span> <span class="radio-option">○ 待开始</span></td>
        </tr>
        <tr>
            <td>第2周</td>
            <td><span class="form-field-large"></span></td>
            <td><span class="form-field-large"></span></td>
            <td><span class="radio-option">○ 已完成</span> <span class="radio-option">○ 进行中</span> <span class="radio-option">○ 待开始</span></td>
        </tr>
        <tr>
            <td>第3周</td>
            <td><span class="form-field-large"></span></td>
            <td><span class="form-field-large"></span></td>
            <td><span class="radio-option">○ 已完成</span> <span class="radio-option">○ 进行中</span> <span class="radio-option">○ 待开始</span></td>
        </tr>
        <tr>
            <td>第4周</td>
            <td><span class="form-field-large"></span></td>
            <td><span class="form-field-large"></span></td>
            <td><span class="radio-option">○ 已完成</span> <span class="radio-option">○ 进行中</span> <span class="radio-option">○ 待开始</span></td>
        </tr>
    </table>

    <h3>具体行动计划</h3>

    <p><strong>学习计划</strong>：</p>
    <ol>
        <li><span class="form-field-large"></span></li>
        <li><span class="form-field-large"></span></li>
        <li><span class="form-field-large"></span></li>
    </ol>

    <p><strong>模拟交易练习</strong>（如有）：</p>
    <ol>
        <li><span class="form-field-large"></span></li>
        <li><span class="form-field-large"></span></li>
        <li><span class="form-field-large"></span></li>
    </ol>

    <p><strong>阅读计划</strong>：</p>
    <ol>
        <li><span class="form-field-large"></span></li>
        <li><span class="form-field-large"></span></li>
        <li><span class="form-field-large"></span></li>
    </ol>

    <h3>30天后的目标</h3>

    <table>
        <tr>
            <th>目标</th>
            <th>我的目标</th>
        </tr>
        <tr>
            <td>对股票投资的新认知</td>
            <td><span class="form-field-large"></span></td>
        </tr>
        <tr>
            <td>掌握的技能/工具</td>
            <td><span class="form-field-large"></span></td>
        </tr>
        <tr>
            <td>投资习惯的改变</td>
            <td><span class="form-field-large"></span></td>
        </tr>
    </table>

    <hr>

    <h2>致出发的你</h2>

    <hr>

    <div class="end-section">
        <p style="font-size: 18px; font-weight: 600; color: var(--red-accent); margin-bottom: 20px;">课程结束了，但你的投资之路才刚开始。</p>

        <p>你在这门课上学到的不是"怎么炒股赚钱"——没有人能教会你这个，如果有，那一定是骗子。</p>

        <p>你学到的是：</p>

        <ul style="text-align: left; display: inline-block; margin: 20px 0;">
            <li style="margin: 10px 0;"><strong>理解股票是什么</strong>——股票是所有权凭证，不是赌博的筹码</li>
            <li style="margin: 10px 0;"><strong>看懂市场的语言</strong>——K线、均线、成交量，都是投资者情绪的反映</li>
            <li style="margin: 10px 0;"><strong>评估公司的价值</strong>——财报里有真相，也有谎言，你需要学会分辨</li>
            <li style="margin: 10px 0;"><strong>控制自己的行为</strong>——投资最大的敌人不是市场，而是你自己的情绪</li>
        </ul>

        <div class="tip-box" style="text-align: left; max-width: 600px; margin: 20px auto;">
            <p><strong>最后的话</strong>: 投资是一场马拉松，不是百米冲刺。不要想着一夜暴富，也不要指望这门课能让你立刻赚钱。但如果你能坚持用学到的框架去观察、去思考、去实践，5年、10年后，你会发现自己已经超过了大多数散户。</p>
        </div>

        <p style="font-weight: 600; margin-top: 20px;"><strong>记住三个"永远"</strong>：</p>
        <ul style="text-align: left; display: inline-block; margin: 10px 0;">
            <li>永远不要投入你输不起的钱</li>
            <li>永远不要相信"稳赚不赔"的消息</li>
            <li>永远不要停止学习</li>
        </ul>

        <hr style="max-width: 400px; margin: 30px auto;">

        <p style="font-size: 20px; font-weight: 700; color: var(--red-accent);">祝你在投资的道路上，走得稳，走得远。</p>
    </div>

    <hr>

    <h1>附录</h1>

    <h2>附录A：术语速查表</h2>

    <h3>基础术语</h3>

    <table>
        <tr>
            <th>术语</th>
            <th>定义</th>
            <th>一句话记</th>
        </tr>
        <tr>
            <td>股票</td>
            <td>股份有限公司发行的所有权凭证</td>
            <td>买股票就是当股东</td>
        </tr>
        <tr>
            <td>A股</td>
            <td>在沪深交易所上市、以人民币交易的境内股票</td>
            <td>中国人的股票市场</td>
        </tr>
        <tr>
            <td>市值</td>
            <td>股价 × 总股本</td>
            <td>公司值多少钱</td>
        </tr>
        <tr>
            <td>PE</td>
            <td>股价 ÷ 每股收益</td>
            <td>回本需要多少年</td>
        </tr>
        <tr>
            <td>PB</td>
            <td>股价 ÷ 每股净资产</td>
            <td>股价相对于净资产的溢价</td>
        </tr>
        <tr>
            <td>EPS</td>
            <td>净利润 ÷ 总股本</td>
            <td>每股赚多少钱</td>
        </tr>
    </table>

    <h3>交易术语</h3>

    <table>
        <tr>
            <th>术语</th>
            <th>定义</th>
            <th>一句话记</th>
        </tr>
        <tr>
            <td>涨停</td>
            <td>单日最大涨幅10%（ST 5%）</td>
            <td>当天最多涨这么多</td>
        </tr>
        <tr>
            <td>跌停</td>
            <td>单日最大跌幅10%（ST 5%）</td>
            <td>当天最多跌这么多</td>
        </tr>
        <tr>
            <td>T+1</td>
            <td>当天买的股票当天不能卖</td>
            <td>今天买，明天才能卖</td>
        </tr>
        <tr>
            <td>金叉</td>
            <td>短期均线上穿长期均线</td>
            <td>均线"黄金交叉"，看多信号</td>
        </tr>
        <tr>
            <td>死叉</td>
            <td>短期均线下穿长期均线</td>
            <td>均线"死亡交叉"，看空信号</td>
        </tr>
        <tr>
            <td>集合竞价</td>
            <td>开盘前一次性撮合成交</td>
            <td>9:15-9:25的竞价方式</td>
        </tr>
    </table>

    <h3>财务术语</h3>

    <table>
        <tr>
            <th>术语</th>
            <th>定义</th>
            <th>一句话记</th>
        </tr>
        <tr>
            <td>毛利率</td>
            <td>(收入-成本)/收入</td>
            <td>核心业务的盈利能力</td>
        </tr>
        <tr>
            <td>ROE</td>
            <td>净利润/净资产</td>
            <td>股东权益回报率</td>
        </tr>
        <tr>
            <td>资产负债率</td>
            <td>负债/资产</td>
            <td>财务杠杆水平</td>
        </tr>
        <tr>
            <td>经营现金流</td>
            <td>经营活动的现金净流量</td>
            <td>主业赚了多少真金白银</td>
        </tr>
    </table>

    <h3>技术分析术语</h3>

    <table>
        <tr>
            <th>术语</th>
            <th>定义</th>
            <th>一句话记</th>
        </tr>
        <tr>
            <td>K线</td>
            <td>展示开盘、收盘、最高、最低价</td>
            <td>蜡烛图，价格的"素描"</td>
        </tr>
        <tr>
            <td>均线</td>
            <td>收盘价的移动平均线</td>
            <td>过滤噪音，看清趋势</td>
        </tr>
        <tr>
            <td>MACD</td>
            <td>趋势判断指标</td>
            <td>金叉死叉来判断多空</td>
        </tr>
        <tr>
            <td>RSI</td>
            <td>超买超卖指标</td>
            <td>超过70可能跌，低于30可能涨</td>
        </tr>
        <tr>
            <td>布林带</td>
            <td>以均线为中心的波动通道</td>
            <td>上轨压力，下轨支撑</td>
        </tr>
    </table>

    <hr>

    <h2>附录B：工具速查索引</h2>

    <h3>课程表单清单</h3>

    <table>
        <tr>
            <th>表单名称</th>
            <th>所在章节</th>
            <th>用途</th>
        </tr>
        <tr>
            <td>术语自测表</td>
            <td>第一章</td>
            <td>自测术语掌握程度</td>
        </tr>
        <tr>
            <td>场景股分析表</td>
            <td>第一章</td>
            <td>选择并分析场景股</td>
        </tr>
        <tr>
            <td>券商对比表</td>
            <td>第二章</td>
            <td>选择券商</td>
        </tr>
        <tr>
            <td>开户检查清单</td>
            <td>第二章</td>
            <td>规范开户流程</td>
        </tr>
        <tr>
            <td>技术分析工作表</td>
            <td>第三章</td>
            <td>K线和均线练习</td>
        </tr>
        <tr>
            <td>财报阅读框架</td>
            <td>第四章</td>
            <td>财报结构速查</td>
        </tr>
        <tr>
            <td>关键财务指标计算表</td>
            <td>第四章</td>
            <td>财务指标计算</td>
        </tr>
        <tr>
            <td>场景股深度分析表</td>
            <td>第五章</td>
            <td>深度财报分析</td>
        </tr>
        <tr>
            <td>估值工具卡</td>
            <td>第六章</td>
            <td>估值方法速查</td>
        </tr>
        <tr>
            <td>仓位管理计划表</td>
            <td>第七章</td>
            <td>仓位规划</td>
        </tr>
        <tr>
            <td>综合分析报告模板</td>
            <td>第八章</td>
            <td>完整投资分析</td>
        </tr>
    </table>

    <h3>推荐工具</h3>

    <table>
        <tr>
            <th>工具类型</th>
            <th>推荐</th>
            <th>用途</th>
        </tr>
        <tr>
            <td>行情软件</td>
            <td>东方财富、同花顺</td>
            <td>看行情、读财报</td>
        </tr>
        <tr>
            <td>财报获取</td>
            <td>巨潮资讯网</td>
            <td>下载上市公司年报</td>
        </tr>
        <tr>
            <td>资讯</td>
            <td>雪球</td>
            <td>投资社区、资讯聚合</td>
        </tr>
        <tr>
            <td>数据</td>
            <td>Wind（万得）</td>
            <td>专业金融数据（付费）</td>
        </tr>
    </table>

    <h3>推荐阅读</h3>

    <table>
        <tr>
            <th>书名</th>
            <th>作者</th>
            <th>简介</th>
        </tr>
        <tr>
            <td>《巴菲特致股东的信》</td>
            <td>沃伦·巴菲特</td>
            <td>价值投资理念精华</td>
        </tr>
        <tr>
            <td>《聪明的投资者》</td>
            <td>本杰明·格雷厄姆</td>
            <td>价值投资的奠基之作</td>
        </tr>
        <tr>
            <td>《穷爸爸富爸爸》</td>
            <td>罗伯特·清崎</td>
            <td>财商教育入门</td>
        </tr>
        <tr>
            <td>《小狗钱钱》</td>
            <td>博多·舍费尔</td>
            <td>理财启蒙读物</td>
        </tr>
    </table>

    <hr>

    <h2>附录C：课程评估表</h2>

    <blockquote>
        <p><strong>填写说明</strong>: 请帮助我们改进课程，您的反馈非常重要。</p>
    </blockquote>

    <h3>课程满意度调查</h3>

    <table>
        <tr>
            <th>评估维度</th>
            <th>评分（1-5分）</th>
            <th>建议</th>
        </tr>
        <tr>
            <td>课程内容实用性</td>
            <td><span class="form-field"></span></td>
            <td><span class="form-field-large"></span></td>
        </tr>
        <tr>
            <td>讲师讲解清晰度</td>
            <td><span class="form-field"></span></td>
            <td><span class="form-field-large"></span></td>
        </tr>
        <tr>
            <td>表单练习有效性</td>
            <td><span class="form-field"></span></td>
            <td><span class="form-field-large"></span></td>
        </tr>
        <tr>
            <td>案例选择贴切性</td>
            <td><span class="form-field"></span></td>
            <td><span class="form-field-large"></span></td>
        </tr>
        <tr>
            <td>整体课程满意度</td>
            <td><span class="form-field"></span></td>
            <td><span class="form-field-large"></span></td>
        </tr>
    </table>

    <h3>您最喜欢的内容</h3>
    <ol>
        <li><span class="form-field-large"></span></li>
        <li><span class="form-field-large"></span></li>
        <li><span class="form-field-large"></span></li>
    </ol>

    <h3>您认为可以改进的地方</h3>
    <ol>
        <li><span class="form-field-large"></span></li>
        <li><span class="form-field-large"></span></li>
    </ol>

    <h3>您还希望学习哪些内容</h3>
    <ol>
        <li><span class="form-field-large"></span></li>
    </ol>

    <hr>

    <div style="text-align: center; padding: 30px 0;">
        <p><strong>感谢您的参与，祝投资顺利！</strong></p>
    </div>

    <hr>

    <div style="text-align: center; color: #666; font-size: 13px; padding: 20px 0;">
        <p><strong>手册版本</strong>: v1.0</p>
        <p><strong>最后更新</strong>: 2026-08-19</p>
        <p><strong>课程名称</strong>: 股票投资入门——从开户到读懂财报</p>
    </div>

</body>
</html>
'''

with open(output_path, 'a', encoding='utf-8') as f:
    f.write(closing)

print(f"Part 6 written: Closing + Appendix ({len(closing)} chars)")
