#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Write the 股票投资入门 学员手册 HTML file"""

import os

output_dir = "D:/新课开发/金融学/11-股票投资入门-从开户到读懂财报/学员手册"
os.makedirs(output_dir, exist_ok=True)
output_path = os.path.join(output_dir, "股票投资入门_学员手册_v1.0.html")

# HTML head + CSS
html_head = '''<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>股票投资入门——从开户到读懂财报 | 学员手册</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;500;700&family=Noto+Serif+SC:wght@400;600;700&display=swap" rel="stylesheet">
    <style>
        :root {
            --bg-color: #FFFFFF;
            --text-color: #333333;
            --red-accent: #C41E3A;
            --red-light: #fef2f2;
            --red-border: #f5c6cb;
            --table-border: #e5e5e5;
            --table-alt: #f9f9f9;
            --code-bg: #f5f5f5;
            --dashed-border: #cccccc;
        }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body {
            font-family: "Noto Sans SC", "Microsoft YaHei", Arial, sans-serif;
            font-size: 15px;
            line-height: 1.8;
            color: var(--text-color);
            background-color: var(--bg-color);
            max-width: 900px;
            margin: 0 auto;
            padding: 40px 20px;
        }
        h1, h2, h3, h4 {
            font-family: "Noto Serif SC", "Microsoft YaHei", serif;
            color: var(--text-color);
        }
        h1 {
            font-size: 28px;
            font-weight: 700;
            color: var(--red-accent);
            text-align: center;
            margin-bottom: 10px;
            padding-bottom: 15px;
            border-bottom: 3px solid var(--red-accent);
        }
        h2 {
            font-size: 22px;
            font-weight: 600;
            color: var(--red-accent);
            margin-top: 40px;
            margin-bottom: 15px;
            padding-left: 15px;
            border-left: 4px solid var(--red-accent);
        }
        h3 {
            font-size: 18px;
            font-weight: 600;
            margin-top: 25px;
            margin-bottom: 12px;
        }
        .subtitle {
            font-size: 20px;
            text-align: center;
            color: var(--text-color);
            margin-bottom: 30px;
        }
        .header-info {
            background-color: var(--table-alt);
            padding: 20px;
            border-radius: 8px;
            margin-bottom: 30px;
            border: 1px solid var(--table-border);
        }
        .header-info p { margin: 5px 0; }
        hr { border: none; border-top: 1px solid var(--table-border); margin: 30px 0; }
        p { margin: 12px 0; }
        ul, ol { margin: 12px 0; padding-left: 25px; }
        li { margin: 6px 0; }
        blockquote {
            margin: 20px 0;
            padding: 15px 20px;
            background-color: var(--table-alt);
            border-left: 4px solid var(--table-border);
        }
        .tip-box {
            background-color: var(--red-light);
            border-left: 4px solid var(--red-accent);
            padding: 15px 20px;
            margin: 20px 0;
        }
        .tip-box p { margin: 0; }
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
            font-size: 14px;
        }
        th, td {
            padding: 10px 12px;
            border: 1px solid var(--table-border);
            text-align: left;
        }
        th {
            background-color: var(--red-accent);
            color: white;
            font-weight: 600;
        }
        tr:nth-child(even) { background-color: var(--table-alt); }
        .form-field {
            display: inline-block;
            min-width: 150px;
            border-bottom: 2px dashed var(--dashed-border);
            margin: 0 5px;
            padding: 0 5px;
        }
        .form-field-large {
            display: inline-block;
            min-width: 200px;
            border-bottom: 2px dashed var(--dashed-border);
            margin: 0 5px;
            padding: 0 5px;
        }
        pre {
            background-color: var(--code-bg);
            padding: 15px;
            border-radius: 6px;
            overflow-x: auto;
            font-family: "Consolas", "Monaco", monospace;
            font-size: 13px;
            line-height: 1.6;
            margin: 20px 0;
            border: 1px solid var(--table-border);
        }
        code {
            font-family: "Consolas", "Monaco", monospace;
            background-color: var(--code-bg);
            padding: 2px 5px;
            border-radius: 3px;
            font-size: 0.95em;
        }
        pre code { background: none; padding: 0; }
        .radio-option { display: inline-block; margin-right: 20px; }
        .section-intro {
            background-color: var(--red-light);
            padding: 20px;
            border-radius: 8px;
            margin: 20px 0;
            border: 1px solid var(--red-border);
        }
        .exercise {
            background-color: var(--table-alt);
            padding: 20px;
            border-radius: 8px;
            margin: 20px 0;
            border: 1px solid var(--table-border);
        }
        .exercise-title {
            font-weight: 700;
            color: var(--red-accent);
            margin-bottom: 15px;
        }
        .behavior-promise {
            background-color: #f0f9f0;
            padding: 20px;
            border-radius: 8px;
            margin: 20px 0;
            border: 1px solid #c6e6c6;
        }
        .promise-item { margin: 10px 0; }
        .end-section {
            text-align: center;
            padding: 40px 20px;
            background: linear-gradient(135deg, var(--red-light) 0%, #fff 100%);
            border-radius: 8px;
            margin: 40px 0;
        }
        .chapter-header {
            text-align: center;
            margin: 30px 0;
            padding: 20px;
            background: linear-gradient(135deg, var(--red-light) 0%, #fff 100%);
            border-radius: 8px;
        }
        @media print {
            body { font-size: 12px; padding: 20px; }
            h1 { font-size: 22px; }
            h2 { font-size: 18px; }
            h3 { font-size: 15px; }
            pre { font-size: 11px; }
            table { font-size: 11px; }
        }
        @media (max-width: 600px) {
            body { padding: 20px 15px; }
            table { font-size: 12px; }
            pre { font-size: 11px; }
        }
    </style>
</head>
<body>
'''

# Body content
body = '''
    <h1>股票投资入门——从开户到读懂财报</h1>
    <p class="subtitle">学员手册</p>

    <hr>

    <div class="header-info">
        <p><strong>课程名称</strong>: 股票投资入门——从开户到读懂财报</p>
        <p><strong>目标学员</strong>: 零基础想进入股市的普通人</p>
        <p><strong>课程时长</strong>: 2天（12小时）</p>
        <p><strong>学员姓名</strong>: <span class="form-field-large"></span></p>
        <p><strong>所属部门</strong>: <span class="form-field-large"></span></p>
        <p><strong>填写日期</strong>: <span class="form-field-large"></span></p>
    </div>

    <hr>

    <h2>使用说明</h2>

    <p>本手册是你在课程中的工作台，不是讲义、不是笔记、不是课后读物。</p>
    <p>每一个框架、每一张表单、每一道练习，都要在课堂上完成。你做完的每一页，都是你带走的真实成果。</p>

    <p><strong>如何使用本手册</strong>:</p>
    <ol>
        <li>课前完成"出发点自评表"，建立认知基线</li>
        <li>课中跟随课程进度，逐章完成表单和练习</li>
        <li>课后填写"30天行动计划"，将学习转化为行动</li>
    </ol>

    <div class="tip-box">
        <p><strong>记住</strong>: 投资是一场认知变现的游戏。你在这门课上建立的框架，比任何"牛股推荐"都更有价值。</p>
    </div>

    <hr>

    <h1>引言部分</h1>

    <h2>一、课程全景图</h2>

<pre>
                          股票投资入门课程体系
                                   │
                    ┌──────────────┼──────────────┐
                    │              │              │
              ┌─────▼─────┐  ┌─────▼─────┐  ┌─────▼─────┐
              │ 第一天    │  │ 第一天    │  │ 第二天   │
              │ 认知建立  │  │ 工具掌握  │  │ 能力进阶  │
              └─────┬─────┘  └─────┬─────┘  └─────┬─────┘
                    │              │              │
        ┌───────────┼───────────┐  │  ┌───────────┼───────────┐
        │           │           │  │  │           │           │
  ┌─────▼─────┐┌───▼───┐┌─────▼──┐ │┌───▼───┐┌───▼────┐┌───▼─────┐
  │第一章     ││第二章  ││第三章  │ ││第四章  ││第五章   ││第六章    │
  │股票投资   ││A股入市││技术分析│ ││基本面  ││财报案例││估值方法 │
  │底层逻辑   ││全流程 ││入门    │ ││分析框架││实战    ││与策略    │
  └───────────┘└───────┘└────────┘ │└───────┘└────────┘└──────────┘
        │           │           │  │      │           │           │
        │           │           │  │      │           │           │
  ┌─────▼───────────────────────┐  │┌───▼───────────┴───────────┴───▼─────┐
  │ 第七章                        │  │ 第八章                              │
  │ 风险管理与资产配置             │  │ 综合案例与进阶                      │
  └───────────────────────────────┘  └────────────────────────────────────┘
</pre>

    <hr>

    <h2>二、出发点自评表</h2>

    <blockquote>
        <p><strong>填写说明</strong>: 请凭直觉作答，不要查资料。这是评估你认知基线的时刻，不是考试。</p>
    </blockquote>

    <h3>判断题（共8题，每题10分，满分80分）</h3>

    <p><strong>题目1</strong><br>
    股票本质上是一张"借据"，代表你对公司的债权。</p>
    <div class="radio-option">○ 正确</div>
    <div class="radio-option">○ 错误</div>

    <hr>

    <p><strong>题目2</strong><br>
    "A股"是指在中国境内注册的公司在中国境内证券交易所上市的股票，以人民币认购和交易。</p>
    <div class="radio-option">○ 正确</div>
    <div class="radio-option">○ 错误</div>

    <hr>

    <p><strong>题目3</strong><br>
    股价下跌就意味着这家公司经营不好，股价上涨就意味着这家公司经营好。</p>
    <div class="radio-option">○ 正确</div>
    <div class="radio-option">○ 错误</div>

    <hr>

    <p><strong>题目4</strong><br>
    沪深300指数由上海和深圳两家交易所中市值最大、流动性最好的300只股票组成。</p>
    <div class="radio-option">○ 正确</div>
    <div class="radio-option">○ 错误</div>

    <hr>

    <p><strong>题目5</strong><br>
    A股实行"T+0"交易制度，即当天买入的股票可以当天卖出。</p>
    <div class="radio-option">○ 正确</div>
    <div class="radio-option">○ 错误</div>

    <hr>

    <p><strong>题目6</strong><br>
    "市盈率（PE）"越高，说明这只股票越贵，投资价值越低。</p>
    <div class="radio-option">○ 正确</div>
    <div class="radio-option">○ 错误</div>

    <hr>

    <p><strong>题目7</strong><br>
    某股票前一天收盘价是10元，第二天开盘前（9:15-9:25集合竞价期间）挂单买入，最高可以挂10.5元。</p>
    <div class="radio-option">○ 正确</div>
    <div class="radio-option">○ 错误</div>

    <hr>

    <p><strong>题目8</strong><br>
    技术分析只能看K线图，基本面分析只能看财务报表，两者毫无关系。</p>
    <div class="radio-option">○ 正确</div>
    <div class="radio-option">○ 错误</div>

    <hr>

    <h3>评分标准</h3>

    <table>
        <tr>
            <th>得分</th>
            <th>认知水平</th>
            <th>建议</th>
        </tr>
        <tr>
            <td>80分</td>
            <td>基础认知扎实</td>
            <td>专注于进阶内容，查漏补缺</td>
        </tr>
        <tr>
            <td>60-70分</td>
            <td>良好，有一些概念需要纠正</td>
            <td>认真听讲，重点突破薄弱环节</td>
        </tr>
        <tr>
            <td>40-60分</td>
            <td>正常，零基础学员通常在这个区间</td>
            <td>从基础概念开始，建立完整框架</td>
        </tr>
        <tr>
            <td>40分以下</td>
            <td>别担心，这正是你来上课的原因</td>
            <td>跟着课程节奏，每一个概念都吃透</td>
        </tr>
    </table>

    <div class="tip-box">
        <p><strong>课程结束后</strong>，你将重新做这8道题，见证认知的提升。</p>
    </div>

    <hr>

    <h2>三、我的场景卡</h2>

    <blockquote>
        <p><strong>填写说明</strong>: 选择一只你感兴趣的A股股票作为"场景股"，整个课程中所有分析工具都围绕这只股票展开。这是你带走的第一份实战成果。</p>
    </blockquote>

    <h3>选择标准</h3>
    <ul>
        <li>你听说过这家公司（哪怕没买过它的产品）</li>
        <li>它是主板上市公司（非ST、非科创板）</li>
        <li>你能轻易查到它的行情和财报</li>
    </ul>

    <h3>推荐场景股（供选择参考）</h3>

    <table>
        <tr>
            <th>股票名称</th>
            <th>股票代码</th>
            <th>特点</th>
        </tr>
        <tr>
            <td>贵州茅台</td>
            <td>600519</td>
            <td>消费品龙头，财务简单易懂</td>
        </tr>
        <tr>
            <td>中国平安</td>
            <td>601318</td>
            <td>金融综合集团，覆盖多个业务</td>
        </tr>
        <tr>
            <td>招商银行</td>
            <td>600036</td>
            <td>银行零售之王，业绩稳定</td>
        </tr>
        <tr>
            <td>万科A</td>
            <td>000002</td>
            <td>房地产行业代表，周期性强</td>
        </tr>
        <tr>
            <td>格力电器</td>
            <td>000651</td>
            <td>白电龙头，知名品牌</td>
        </tr>
    </table>

    <h3>基本信息</h3>

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
            <td>交易所</td>
            <td><span class="radio-option">○ 上交所（601/600开头）</span> <span class="radio-option">○ 深交所（000开头）</span></td>
        </tr>
        <tr>
            <td>所属行业</td>
            <td><span class="form-field-large"></span></td>
        </tr>
        <tr>
            <td>选择理由</td>
            <td><span class="form-field-large"></span></td>
        </tr>
    </table>

    <h3>行情数据（今日收盘）</h3>

    <table>
        <tr>
            <th>项目</th>
            <th>数值</th>
        </tr>
        <tr>
            <td>当前股价</td>
            <td><span class="form-field"></span> 元</td>
        </tr>
        <tr>
            <td>总股本</td>
            <td><span class="form-field"></span> 亿股</td>
        </tr>
        <tr>
            <td>总市值</td>
            <td><span class="form-field"></span> 亿元</td>
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
            <td>股息率</td>
            <td><span class="form-field"></span> %</td>
        </tr>
        <tr>
            <td>52周最高价</td>
            <td><span class="form-field"></span> 元</td>
        </tr>
        <tr>
            <td>52周最低价</td>
            <td><span class="form-field"></span> 元</td>
        </tr>
    </table>

    <h3>初步观察（学完第一章后填写）</h3>

    <table>
        <tr>
            <th>问题</th>
            <th>你的回答</th>
        </tr>
        <tr>
            <td>这家公司在哪个指数成分股？</td>
            <td><span class="form-field-large"></span></td>
        </tr>
        <tr>
            <td>它的PE在同行业中偏高还是偏低？</td>
            <td><span class="form-field-large"></span></td>
        </tr>
        <tr>
            <td>这家公司最近有分红吗？股息率是多少？</td>
            <td><span class="form-field-large"></span></td>
        </tr>
        <tr>
            <td>你认为它的股价波动大吗？（看52周数据）</td>
            <td><span class="form-field-large"></span></td>
        </tr>
    </table>

    <hr>

    <h1>第一章：股票投资底层逻辑</h1>

    <div class="chapter-header">
        <h2>学习目标</h2>
    </div>

    <p>本章学完你能：</p>
    <ul>
        <li>用自己的话解释"股票是什么"</li>
        <li>区分一级市场和二级市场</li>
        <li>说出PE、PB、EPS、股息率的核心含义</li>
        <li>理解A股特有的涨跌停板和T+1制度</li>
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
            <td>股票的本质、一级市场vs二级市场、关键术语、A股市场特点</td>
        </tr>
        <tr>
            <td>互动表单</td>
            <td>2个</td>
            <td>术语自测表、场景股分析</td>
        </tr>
        <tr>
            <td>课堂练习</td>
            <td>3道</td>
            <td>概念辨析、计算题、场景应用</td>
        </tr>
    </table>

    <hr>

    <h2>知识点</h2>

    <h3>1.1 股票的本质</h3>

    <p>股票的本质是一份<strong>所有权凭证</strong>。当你买入一家公司的股票，你就成为了这家公司的股东。</p>

    <blockquote>
        <p><strong>场景类比</strong>：想象你和朋友合伙开了一家火锅店，你出资10万占股30%。你拿到的"股权证明"就是股票——它证明你拥有这家店30%的所有权。</p>
    </blockquote>

    <p><strong>三个关键词理解股票：</strong></p>

    <table>
        <tr>
            <th>关键词</th>
            <th>含义</th>
            <th>股票中的对应</th>
        </tr>
        <tr>
            <td><strong>所有权凭证</strong></td>
            <td>证明你持有多少份额</td>
            <td>股东账户里的持仓数量</td>
        </tr>
        <tr>
            <td><strong>收益权</strong></td>
            <td>享有公司利润分配</td>
            <td>分红、股东大会投票权</td>
        </tr>
        <tr>
            <td><strong>企业融资</strong></td>
            <td>企业通过发行股票向公众募集资金</td>
            <td>IPO、定向增发</td>
        </tr>
    </table>

    <p><strong>关键洞察</strong>：</p>
    <ul>
        <li>发行股票是<strong>溢价变现</strong>的过程——创始团队和早期投资人通过股票把自己的所有权卖给公众</li>
        <li>买入股票的投资者，赌的是公司未来会更值钱</li>
        <li><strong>股价和企业价值长期来看是正相关的</strong>，但短期价格由供需决定</li>
    </ul>

    <h3>1.2 一级市场 vs 二级市场</h3>

    <table>
        <tr>
            <th>市场</th>
            <th>定义</th>
            <th>特点</th>
            <th>参与者</th>
        </tr>
        <tr>
            <td><strong>一级市场</strong></td>
            <td>企业首次发行股票卖给投资者</td>
            <td>"发行市场"，不公开透明</td>
            <td>机构、战略投资者</td>
        </tr>
        <tr>
            <td><strong>二级市场</strong></td>
            <td>投资者之间互相买卖已上市的股票</td>
            <td>"流通市场"，公开竞价</td>
            <td>散户、机构、公募基金</td>
        </tr>
    </table>

    <p><strong>生活类比</strong>：</p>
    <blockquote>
        <p>一级市场 = 新房预售市场（开发商卖给第一批购房者）<br>
        二级市场 = 二手房交易市场（购房者之间互相买卖）</p>
    </blockquote>

    <p><strong>重要结论</strong>：</p>
    <ul>
        <li>你在证券公司App上买卖股票，都是和其他投资者在二级市场交易</li>
        <li>你买股票的钱<strong>不会直接进入上市公司口袋</strong>（除非是打新股）</li>
    </ul>

    <h3>1.3 关键术语解释</h3>

    <table>
        <tr>
            <th>术语</th>
            <th>定义</th>
            <th>计算公式</th>
            <th>案例</th>
        </tr>
        <tr>
            <td><strong>市值</strong></td>
            <td>公司的总市场价值</td>
            <td>股价 × 总股本</td>
            <td>茅台约2.3万亿元</td>
        </tr>
        <tr>
            <td><strong>PE（市盈率）</strong></td>
            <td>每股市价与每股收益的比值</td>
            <td>股价 ÷ 每股收益</td>
            <td>茅台PE约30倍</td>
        </tr>
        <tr>
            <td><strong>PB（市净率）</strong></td>
            <td>每股市价与每股净资产的比值</td>
            <td>股价 ÷ 每股净资产</td>
            <td>茅台PB约10倍</td>
        </tr>
        <tr>
            <td><strong>EPS（每股收益）</strong></td>
            <td>公司税后净利润除以总股本</td>
            <td>净利润 ÷ 总股本</td>
            <td>茅台EPS约60元</td>
        </tr>
        <tr>
            <td><strong>股息率</strong></td>
            <td>每股分红除以股价</td>
            <td>分红 ÷ 股价 × 100%</td>
            <td>工商银行约5.5%</td>
        </tr>
    </table>

    <p><strong>PE的解读方式</strong>：</p>

    <table>
        <tr>
            <th>PE水平</th>
            <th>含义</th>
            <th>适用场景</th>
        </tr>
        <tr>
            <td>PE < 10</td>
            <td>相对便宜</td>
            <td>成熟行业：银行、地产</td>
        </tr>
        <tr>
            <td>PE 10-20</td>
            <td>合理区间</td>
            <td>消费类：茅台、伊利</td>
        </tr>
        <tr>
            <td>PE 20-40</td>
            <td>偏贵</td>
            <td>成长型：医药、科技</td>
        </tr>
        <tr>
            <td>PE > 40</td>
            <td>非常贵</td>
            <td>题材炒作或高增速预期</td>
        </tr>
    </table>

    <div class="tip-box">
        <p><strong>金句</strong>：华尔街有句老话——"牛市是散户亏损的主要原因。"不是因为牛市股票跌了，而是因为牛市里散户仓位最重、交易最频繁。</p>
    </div>

    <h3>1.4 A股市场特点</h3>

    <p><strong>涨跌停板制度</strong>：</p>

    <table>
        <tr>
            <th>规定</th>
            <th>内容</th>
        </tr>
        <tr>
            <td>普通股票</td>
            <td>单日最大涨跌幅10%</td>
        </tr>
        <tr>
            <td>ST股票</td>
            <td>单日最大涨跌幅5%</td>
        </tr>
        <tr>
            <td>科创板/创业板</td>
            <td>单日最大涨跌幅20%</td>
        </tr>
    </table>

    <p><strong>T+1交易制度</strong>：</p>
    <ul>
        <li>当天买入的股票，<strong>当天不能卖出</strong>，必须等到下一个交易日才能交易</li>
        <li>"T"=Today，T+1就是"今天+1天"</li>
    </ul>

    <p><strong>散户行为偏差</strong>：</p>

    <table>
        <tr>
            <th>偏差</th>
            <th>表现</th>
            <th>后果</th>
        </tr>
        <tr>
            <td><strong>处置效应</strong></td>
            <td>亏钱的股票拿着不卖，赚钱的股票早早卖掉</td>
            <td>永远持有垃圾股</td>
        </tr>
        <tr>
            <td><strong>羊群效应</strong></td>
            <td>看到大家买就跟着买</td>
            <td>买在高点</td>
        </tr>
        <tr>
            <td><strong>锚定效应</strong></td>
            <td>股价跌到成本价以下就死守</td>
            <td>错过止损时机</td>
        </tr>
    </table>

    <hr>

    <h2>表单1.1：股票术语自测表</h2>

    <blockquote>
        <p><strong>填写说明</strong>: 以下术语你都能用自己的话说清楚吗？每题用自己的语言写下定义，不需要死记硬背。</p>
    </blockquote>

    <table>
        <tr>
            <th>序号</th>
            <th>术语</th>
            <th>你的定义（用自己的话）</th>
            <th>是否掌握</th>
        </tr>
        <tr>
            <td>1</td>
            <td>股票</td>
            <td><span class="form-field-large"></span></td>
            <td><span class="radio-option">○ 掌握</span> <span class="radio-option">○ 再看看</span></td>
        </tr>
        <tr>
            <td>2</td>
            <td>一级市场</td>
            <td><span class="form-field-large"></span></td>
            <td><span class="radio-option">○ 掌握</span> <span class="radio-option">○ 再看看</span></td>
        </tr>
        <tr>
            <td>3</td>
            <td>二级市场</td>
            <td><span class="form-field-large"></span></td>
            <td><span class="radio-option">○ 掌握</span> <span class="radio-option">○ 再看看</span></td>
        </tr>
        <tr>
            <td>4</td>
            <td>市值</td>
            <td><span class="form-field-large"></span></td>
            <td><span class="radio-option">○ 掌握</span> <span class="radio-option">○ 再看看</span></td>
        </tr>
        <tr>
            <td>5</td>
            <td>PE（市盈率）</td>
            <td><span class="form-field-large"></span></td>
            <td><span class="radio-option">○ 掌握</span> <span class="radio-option">○ 再看看</span></td>
        </tr>
        <tr>
            <td>6</td>
            <td>PB（市净率）</td>
            <td><span class="form-field-large"></span></td>
            <td><span class="radio-option">○ 掌握</span> <span class="radio-option">○ 再看看</span></td>
        </tr>
        <tr>
            <td>7</td>
            <td>EPS（每股收益）</td>
            <td><span class="form-field-large"></span></td>
            <td><span class="radio-option">○ 掌握</span> <span class="radio-option">○ 再看看</span></td>
        </tr>
        <tr>
            <td>8</td>
            <td>股息率</td>
            <td><span class="form-field-large"></span></td>
            <td><span class="radio-option">○ 掌握</span> <span class="radio-option">○ 再看看</span></td>
        </tr>
        <tr>
            <td>9</td>
            <td>涨跌停板</td>
            <td><span class="form-field-large"></span></td>
            <td><span class="radio-option">○ 掌握</span> <span class="radio-option">○ 再看看</span></td>
        </tr>
        <tr>
            <td>10</td>
            <td>T+1交易</td>
            <td><span class="form-field-large"></span></td>
            <td><span class="radio-option">○ 掌握</span> <span class="radio-option">○ 再看看</span></td>
        </tr>
    </table>

    <p><strong>达标线</strong>: 至少8个"掌握"</p>

    <hr>

    <h2>表单1.2：我的场景股分析（续）</h2>

    <blockquote>
        <p><strong>填写说明</strong>: 现在你已经学完第一章，用学到的知识重新审视你的场景股。</p>
    </blockquote>

    <h3>学完本章后的分析</h3>

    <table>
        <tr>
            <th>分析维度</th>
            <th>你的场景股</th>
            <th>分析结论</th>
        </tr>
        <tr>
            <td>这家公司是一级市场还是二级市场交易？</td>
            <td><span class="form-field-large"></span></td>
            <td><span class="form-field-large"></span></td>
        </tr>
        <tr>
            <td>它的市值大约是多少亿？</td>
            <td><span class="form-field-large"></span></td>
            <td><span class="form-field-large"></span></td>
        </tr>
        <tr>
            <td>它的PE处于什么水平？（高/低/合理）</td>
            <td><span class="form-field-large"></span></td>
            <td><span class="form-field-large"></span></td>
        </tr>
        <tr>
            <td>它最近有分红吗？股息率有竞争力吗？</td>
            <td><span class="form-field-large"></span></td>
            <td><span class="form-field-large"></span></td>
        </tr>
    </table>

    <hr>

    <h2>练习</h2>

    <div class="exercise">
        <div class="exercise-title">练习A：概念辨析</div>
        <p><strong>题目</strong>: 判断以下说法是否正确，并说明理由。</p>
        <p>1. "买股票就是买公司的一部分所有权"——这句话对吗？为什么？</p>
        <p><span class="form-field-large"></span></p>
        <p><span class="form-field-large"></span></p>
        <p><span class="form-field-large"></span></p>
        <p>2. "在一级市场买股票，价格更便宜，因为是直接从公司买的"——这句话对吗？为什么？</p>
        <p><span class="form-field-large"></span></p>
        <p><span class="form-field-large"></span></p>
        <p><span class="form-field-large"></span></p>
        <p>3. "PE越低的股票越值得买"——这句话对吗？什么情况下不适用？</p>
        <p><span class="form-field-large"></span></p>
        <p><span class="form-field-large"></span></p>
        <p><span class="form-field-large"></span></p>
    </div>

    <div class="exercise">
        <div class="exercise-title">练习B：计算题</div>
        <p><strong>题目</strong>: 根据以下数据，计算相关指标。</p>
        <p>假设：</p>
        <ul>
            <li>某股票当前股价：50元</li>
            <li>公司总股本：10亿股</li>
            <li>年度净利润：50亿元</li>
            <li>每股净资产：25元</li>
            <li>去年每股分红：1元</li>
        </ul>
        <p>请计算：</p>
        <table>
            <tr>
                <th>计算项</th>
                <th>计算过程</th>
                <th>结果</th>
            </tr>
            <tr>
                <td>公司总市值</td>
                <td><span class="form-field-large"></span></td>
                <td><span class="form-field"></span></td>
            </tr>
            <tr>
                <td>市盈率（PE）</td>
                <td><span class="form-field-large"></span></td>
                <td><span class="form-field"></span></td>
            </tr>
            <tr>
                <td>市净率（PB）</td>
                <td><span class="form-field-large"></span></td>
                <td><span class="form-field"></span></td>
            </tr>
            <tr>
                <td>股息率</td>
                <td><span class="form-field-large"></span></td>
                <td><span class="form-field"></span></td>
            </tr>
        </table>
    </div>

    <div class="exercise">
        <div class="exercise-title">练习C：场景应用</div>
        <p><strong>题目</strong>: 打开你的股票行情App，搜索你选择的场景股，尝试找到以下信息：</p>
        <ol>
            <li>当前股价和市值</li>
            <li>市盈率和市净率</li>
            <li>是否有分红，股息率是多少</li>
            <li>52周内最高价和最低价</li>
        </ol>
        <p><strong>记录</strong>:</p>
        <ul>
            <li>当前股价: <span class="form-field"></span> 元，市值: <span class="form-field"></span> 亿元</li>
            <li>市盈率: <span class="form-field"></span> 倍，市净率: <span class="form-field"></span> 倍</li>
            <li>分红: <span class="radio-option">○ 有</span> <span class="radio-option">○ 无</span>，股息率: <span class="form-field"></span> %</li>
            <li>52周最高价: <span class="form-field"></span> 元，52周最低价: <span class="form-field"></span> 元</li>
        </ul>
    </div>

    <hr>

    <h2>知识框架图</h2>

<pre>
                        ┌─────────────────┐
                        │    股票的本质    │
                        │   所有权凭证    │
                        │   企业融资工具   │
                        └────────┬────────┘
                                 │
            ┌────────────────────┼────────────────────┐
            │                    │                    │
            ▼                    ▼                    ▼
   ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐
   │    一级市场      │  │    二级市场      │  │    收益来源      │
   │  企业发行股票    │  │  投资者间交易    │  │  分红+资本增值   │
   └─────────────────┘  └─────────────────┘  └─────────────────┘
            │                    │                    │
            └────────────────────┼────────────────────┘
                                 │
                        ┌────────┴────────┐
                        │   A股市场特点    │
                        │  涨跌停板+T+1   │
                        │   散户占比高    │
                        └─────────────────┘
                                 │
            ┌────────────────────┼────────────────────┐
            │                    │                    │
            ▼                    ▼                    ▼
   ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐
   │    关键术语      │  │    估值指标      │  │    市场结构      │
   │  股价/市值       │  │  PE/PB/EPS      │  │  交易所/指数    │
   │  股息率          │  │  股息率          │  │  参与者          │
   └─────────────────┘  └─────────────────┘  └─────────────────┘
</pre>

    <hr>

    <h2>行为承诺</h2>

    <blockquote>
        <p><strong>填写说明</strong>: 学完这章，你承诺在接下来的投资实践中做到什么？写下来，课后监督自己。</p>
    </blockquote>

    <div class="behavior-promise">
        <p>我承诺：</p>
        <p class="promise-item">1. <span class="form-field-large"></span></p>
        <p class="promise-item">2. <span class="form-field-large"></span></p>
        <p class="promise-item">3. <span class="form-field-large"></span></p>
    </div>
'''

with open(output_path, 'w', encoding='utf-8') as f:
    f.write(html_head)
    f.write(body)

print(f"Part 1 + Part 2 written: Introduction + Chapter 1 ({len(html_head + body)} chars)")
