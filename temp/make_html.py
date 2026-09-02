# -*- coding: utf-8 -*-
"""Create HTML print versions for all 7 forms"""
import os

OUT = "D:/新课开发/金融学/21-互联网理财平台避坑指南与金融科技甄别/全流程工具表单-html打印版"
os.makedirs(OUT, exist_ok=True)

BASE_CSS = """
* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: "PingFang SC", "Microsoft YaHei", sans-serif; background: #f5f5f5; color: #333; line-height: 1.6; font-size: 12px; }
.page { width: 148mm; min-height: 105mm; background: white; margin: 10px auto; padding: 12mm; box-shadow: 0 2px 10px rgba(0,0,0,0.1); page-break-after: always; position: relative; }
.page:last-child { page-break-after: auto; }
h1 { font-size: 16px; color: #cc0000; margin-bottom: 6px; text-align: center; border-bottom: 2px solid #cc0000; padding-bottom: 4px; }
h2 { font-size: 13px; color: #333; margin: 8px 0 4px; border-left: 3px solid #cc0000; padding-left: 6px; }
.subtitle { font-size: 10px; color: #666; text-align: center; margin-bottom: 8px; }
.section { margin-bottom: 8px; padding: 6px 8px; border-left: 3px solid #cc0000; background: #fafafa; }
.section.green { border-color: #27ae60; }
.section.orange { border-color: #f39c12; }
.section.blue { border-color: #2980b9; }
.section-title { font-size: 12px; font-weight: bold; margin-bottom: 2px; }
.section-title.red { color: #cc0000; }
.section-title.green { color: #27ae60; }
.section-title.orange { color: #f39c12; }
.section-title.blue { color: #2980b9; }
.row { display: flex; gap: 8px; margin-bottom: 4px; }
.cell { flex: 1; }
.cell label { font-size: 10px; color: #888; display: block; }
.cell value { font-size: 11px; }
.table { width: 100%; border-collapse: collapse; margin: 6px 0; font-size: 10px; }
.table th { background: #d9d9d9; color: #333; padding: 4px 6px; text-align: left; }
.table td { padding: 3px 6px; border-bottom: 1px solid #eee; vertical-align: top; }
.warning { background: #fff3cd; padding: 6px; border-radius: 4px; font-size: 10px; margin: 6px 0; }
.warning strong { color: #856404; }
.danger { background: #ffe6e6; padding: 6px; border-radius: 4px; font-size: 10px; margin: 6px 0; border-left: 3px solid #cc0000; }
.tip { font-size: 9px; color: #888; margin-top: 4px; }
.flowchart { background: #f5f5f5; padding: 8px; border-radius: 4px; font-size: 9px; }
.flowchart pre { font-family: monospace; font-size: 9px; line-height: 1.3; white-space: pre-wrap; }
.footer { position: absolute; bottom: 6mm; right: 10mm; font-size: 8px; color: #999; }
.print-note { text-align: center; font-size: 9px; color: #aaa; margin-top: 6px; }
.signature-line { border-bottom: 1px solid #333; width: 60%; margin: 20px 0 4px; }
input[type="text"] { border: none; border-bottom: 1px solid #999; width: 60%; font-size: 11px; }
.checkbox { display: inline-block; width: 14px; height: 14px; border: 1px solid #999; margin-right: 4px; vertical-align: middle; }
@media print { body { background: white; } .page { box-shadow: none; margin: 0; page-break-after: always; } }
@page { size: A6 landscape; margin: 10mm; }
"""

def make_html(title, body_content):
    return '''<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{title}</title>
<style>{css}</style>
</head>
<body>
{body}
</body>
</html>'''.format(title=title, css=BASE_CSS, body=body_content)

# ===== F1: 平台类型识别卡 =====
f1 = '''
<div class="page">
  <h1>F1：平台类型识别卡</h1>
  <p class="subtitle">A6小卡 | 可打印 | 翻转使用</p>
  <h2>四大平台类型</h2>
  <table class="table">
    <tr><th>平台类型</th><th>代表</th><th>特征</th><th>风险等级</th></tr>
    <tr><td><strong>银行系理财</strong></td><td>工商银行APP、招商银行APP</td><td>银行自营或代销，有存款保险（50万以内）</td><td>低</td></tr>
    <tr><td><strong>券商资管</strong></td><td>东方财富、同花顺</td><td>主要投资股票、债券、基金</td><td>中低</td></tr>
    <tr><td><strong>保险理财</strong></td><td>平安保险、中国人寿</td><td>分红险、万能险、投连险</td><td>中低</td></tr>
    <tr><td><strong>持牌消费金融</strong></td><td>蚂蚁借呗、微粒贷、京东金条</td><td>小额信贷、花呗、白条</td><td>中</td></tr>
  </table>
  <div class="section">
    <div class="section-title red">反面：无牌平台</div>
    <div class="section-title">危险信号：</div>
    <p>高息诱惑（年化超过8%）| 保本承诺 | 资金池操作 | 虚假背书 | 信息不透明 | 拉人头模式</p>
  </div>
  <div class="warning">
    <strong>使用说明：</strong><br>
    1. 要求对方出示金融牌照，用国家金融监督管理总局官网查询验证<br>
    2. 确认牌照上的机构名称与实际平台运营主体是否一致<br>
    3. 对比收益率，超过8%年化要警惕，超过12%要远离<br>
    4. 确认资金是否流向银行存管账户，不是平台账户
  </div>
  <p class="tip">提示：没有牌照的平台，无论宣传多好、背景多强、名人多大，都不要投！</p>
</div>'''

# ===== F2: 五步风险识别检查表 =====
f2 = '''
<div class="page">
  <h1>F2：五步风险识别检查表</h1>
  <p class="subtitle">清单式工具卡 | 可打印 | 随身携带</p>
  <h2>第一步：查资质</h2>
  <table class="table">
    <tr><th>检查项</th><th>操作</th><th>标准答案</th></tr>
    <tr><td>是否有牌照</td><td>银保监会/证监会官网查询</td><td>必须有，且与平台名称一致</td></tr>
    <tr><td>牌照类型</td><td>确认银行/证券/保险/基金</td><td>与产品类型匹配</td></tr>
    <tr><td>牌照有效期</td><td>查看是否在有效期内</td><td>在有效期内</td></tr>
  </table>
  <p class="tip">查询入口：银保监会www.cbirc.gov.cn | 证监会www.csrc.gov.cn | 基金业协会www.amac.org.cn</p>
  <h2>第二步：看收益</h2>
  <table class="table">
    <tr><th>检查项</th><th>风险信号</th></tr>
    <tr><td>年化收益率</td><td>超过8%需警惕</td></tr>
    <tr><td>收益来源</td><td>说不清=危险</td></tr>
    <tr><td>保本承诺</td><td>违规！正规理财不得承诺</td></tr>
  </table>
  <h2>第三步：验资金</h2>
  <p>资金验证三问：1.我的钱去了谁的账户？2.这笔钱由谁管理？3.能否看到资金流水？</p>
  <h2>第四步：核担保</h2>
  <p>平台自己担保无效 | 母公司担保需谨慎 | 名人担保无法律效力</p>
  <h2>第五步：审合同</h2>
  <p>合同必读：投资标的+风险揭示+资金托管+退出机制+违约责任</p>
  <div class="warning">
    <strong>使用口诀：</strong><br>
    查资质——牌照官网验真伪 | 看收益——超过8%要警惕<br>
    验资金——存管账户要看清 | 核担保——第三方才有效<br>
    审合同——条款不清不投资
  </div>
</div>'''

# ===== F3: 高风险平台特征卡 =====
f3 = '''
<div class="page">
  <h1>F3：高风险平台特征卡</h1>
  <p class="subtitle">六大高风险特征速查卡 | 可打印 | 快速对照</p>
  <h2>六大危险特征</h2>
  <div class="section">
    <div class="section-title red">特征一：高息诱惑 ★★★★★</div>
    <p>典型话术："年化收益15-30%"、"保本保息，稳赚不赔"</p>
    <p class="tip">本质：超过12%的年化收益几乎可以肯定是骗局</p>
  </div>
  <div class="section">
    <div class="section-title red">特征二：保本承诺 ★★★★★</div>
    <p>典型话术："本金保障，零风险"、"保险公司承保"</p>
    <p class="tip">本质：合规理财不允许承诺保本，这是监管红线</p>
  </div>
  <div class="section">
    <div class="section-title orange">特征三：资金池操作 ★★★★☆</div>
    <p>典型话术："随时可取，T+0到账"、"活期理财"</p>
    <p class="tip">本质：真正理财产品都有期限，"随时可取"意味着借新还旧</p>
  </div>
  <div class="section">
    <div class="section-title orange">特征四：虚假背书 ★★★★☆</div>
    <p>常见伪装：央视广告、名人代言、"国资背景"、"上市公司背景"</p>
    <p class="tip">本质：广告不等于合规，央视只审广告主资质不审理财产品</p>
  </div>
  <div class="section">
    <div class="section-title red">特征五：信息不透明 ★★★★★</div>
    <p>典型表现：投资标的不清、"高科技项目，国家机密"、合同难以阅读</p>
    <p class="tip">本质：正规理财必须明确说明投资标的</p>
  </div>
  <div class="section">
    <div class="section-title red">特征六：拉人头模式 ★★★★★</div>
    <p>典型特征："推荐好友送现金"、"邀请码返利"、"发展下线得佣金"</p>
    <p class="tip">本质：金融传销特征，涉嫌非法集资</p>
  </div>
  <div class="danger">
    <strong>自查：</strong>收益率超过8%？| 有保本承诺？| 随时可取？| 名人代言？| 信息不透明？| 拉人头？<br>
    任意一项打钩，请务必谨慎对待！
  </div>
</div>'''

# ===== F4: 金融科技产品甄别卡 =====
f4 = '''
<div class="page">
  <h1>F4：金融科技产品甄别卡</h1>
  <p class="subtitle">AI理财/量化交易/加密货币三类产品鉴别要点 | 可打印</p>
  <h2>第一类：AI理财</h2>
  <div class="section">
    <div class="section-title green">正规AI理财特征</div>
    <p>持牌机构提供 | 不承诺收益 | 有风险评估 | 门槛合理（通常1000元以上）</p>
  </div>
  <div class="section orange">
    <div class="section-title orange">伪AI理财危险信号</div>
    <p>承诺AI算法稳赚 | "1元起投"低门槛+高收益 | 收益率异常高（超过10%）| 拒绝说明策略</p>
  </div>
  <h2>第二类：量化交易</h2>
  <div class="section">
    <div class="section-title green">正规量化交易特征</div>
    <p>私募基金形式（基金业协会备案）| 100万起投 | 需金融资产300万以上证明 | 不承诺收益</p>
  </div>
  <div class="section orange">
    <div class="section-title orange">伪量化交易危险信号</div>
    <p>散户可投（"10万起投"）| 保证收益 | 只展示回测不展示实盘 | 入金个人账户</p>
  </div>
  <h2>第三类：加密货币</h2>
  <div class="section">
    <div class="section-title green">合法的</div>
    <p>持有比特币（私人持有合法）| 在正规金融交易所交易 | 主流量化货币（BTC/ETH）</p>
  </div>
  <div class="section red">
    <div class="section-title red">非法的</div>
    <p>买卖比特币（境内交易所违法）| ICO/发币违法 | 挖矿违法 | 传销币、空气币</p>
  </div>
  <div class="danger">
    <strong>核心原则：</strong><br>
    看不懂的科技 ≠ 安全的投资<br>
    "高科技"外衣下往往是相同的骗局内核<br>
    任何要求你先交钱再告诉你"AI/量化/区块链帮你赚钱"的都是骗局！
  </div>
</div>'''

# ===== F5: 防骗三黄金法则卡 =====
f5 = '''
<div class="page">
  <h1>F5：防骗三黄金法则卡</h1>
  <p class="subtitle">三个核心法则的行动指南 | 可打印 | 随身携带</p>
  <h2>法则一：看不懂的不碰</h2>
  <div class="section green">
    <div class="section-title green">核心原则：不投资自己不理解的产品</div>
    <p>骗子的惯用手法：用专业术语制造"高大上"假象<br>
    正确心态：不懂就问，问不清就拒</p>
  </div>
  <div class="warning">
    <strong>自问清单：</strong><br>
    □ 我能向家人朋友解释这个投资吗？<br>
    □ 我知道我的钱去了哪里吗？<br>
    □ 我知道收益从哪里来吗？<br>
    □ 我知道风险有多大吗？<br>
    如果任何一个答案是"不知道"，就不要投！
  </div>
  <h2>法则二：不碰高息诱惑</h2>
  <div class="section green">
    <div class="section-title green">核心原则：超过8%年化要警惕，超过12%必须远离</div>
  </div>
  <table class="table">
    <tr><th>收益率</th><th>正常来源</th><th>危险信号</th></tr>
    <tr><td>1-3%</td><td>银行存款、货币基金</td><td>无</td></tr>
    <tr><td>3-5%</td><td>银行理财、债券基金</td><td>无</td></tr>
    <tr><td>5-8%</td><td>信托、保险理财</td><td>开始警惕</td></tr>
    <tr><td>8-12%</td><td>P2P、高收益债</td><td>高度警惕</td></tr>
    <tr><td style="color:#cc0000">12%+</td><td>几乎无法持续</td><td style="color:#cc0000">必有问题！</td></tr>
  </table>
  <h2>法则三：先查后投</h2>
  <div class="section green">
    <div class="section-title green">核心原则：投资前必须完成资质核实</div>
    <p>投前1小时：在官网核实牌照信息<br>
    投前30分钟：阅读完整合同，特别注意风险揭示<br>
    投前10分钟：确认资金流向，拒绝打入个人账户<br>
    投前1分钟：最后问自己：看不懂的有没有？高息有没有？</p>
  </div>
  <div class="warning">
    <strong>三法则速记口诀：</strong><br>
    一看就懂的——小心求证 | 看不懂的——坚决不碰<br>
    高收益诱惑——直接拒绝 | 投资之前——必须查证
  </div>
</div>'''

# ===== F6: 维权路径指引卡 =====
f6 = '''
<div class="page">
  <h1>F6：维权路径指引卡</h1>
  <p class="subtitle">投诉、报警、诉讼的具体步骤和联系方式 | 可打印</p>
  <h2>第一步：证据保全（发现可能被骗时立即做）</h2>
  <table class="table">
    <tr><th>证据类型</th><th>保存方法</th><th>重要性</th></tr>
    <tr><td>投资合同</td><td>截图+原件PDF</td><td>★★★★★</td></tr>
    <tr><td>付款凭证</td><td>银行流水截图/打印</td><td>★★★★★</td></tr>
    <tr><td>沟通记录</td><td>微信截图、录音</td><td>★★★★☆</td></tr>
    <tr><td>平台截图</td><td>APP首页、产品页面截图</td><td>★★★★☆</td></tr>
  </table>
  <h2>第二步：判断情况</h2>
  <table class="table">
    <tr><th>情况</th><th>建议行动</th></tr>
    <tr><td>平台还在运营</td><td>尝试小额提现测试</td></tr>
    <tr><td>平台无法提现（超过3天）</td><td>立即报警</td></tr>
    <tr><td>平台失联</td><td>立即报警</td></tr>
    <tr><td>已爆雷</td><td>抱团维权</td></tr>
  </table>
  <h2>第三步：维权路径</h2>
  <div class="section">
    <div class="section-title">路径一：向监管部门投诉</div>
    <p>银保监会12378 | 证监会12386 | 人民银行12363 | 处理时间：60日内</p>
  </div>
  <div class="section">
    <div class="section-title">路径二：向公安机关报案</div>
    <p>110报警 | 当地派出所 | 公安微警务"腾讯110" | 网络诈骗www.cyberpolice.cn</p>
  </div>
  <div class="section">
    <div class="section-title">路径三：民事诉讼</div>
    <p>适用于平台有可执行财产 | 诉讼时效3年</p>
  </div>
  <h2>联系方式速查</h2>
  <table class="table">
    <tr><td>银保监会投诉</td><td>12378</td></tr>
    <tr><td>证监会投诉</td><td>12386</td></tr>
    <tr><td>网络诈骗举报</td><td>www.cyberpolice.cn</td></tr>
    <tr><td>消费者投诉</td><td>12315</td></tr>
    <tr><td>法律援助</td><td>12348</td></tr>
    <tr><td>综合报警</td><td>110</td></tr>
  </table>
  <div class="danger">
    <strong>重要提醒：</strong>发现被骗后第一时间报案！不要相信"内部解决"！不要删除任何证据！不要继续追加投资！理性维权！
  </div>
</div>'''

# ===== F7: 我的避坑承诺书 =====
f7 = '''
<div class="page">
  <h1>F7：我的避坑承诺书</h1>
  <p class="subtitle">学员填写 | 行动计划表 | 可打印</p>
  <h2>个人信息</h2>
  <p>姓名：<input type="text"> 填写日期：<input type="text"></p>
  <h2>承诺内容</h2>
  <div class="section green">
    <div class="section-title green">承诺一：投资前必查资质</div>
    <p>我承诺：□ 投资任何理财平台前，一定先在银保监会/证监会官网查询牌照信息<br>
    □ 不相信任何"内部渠道"、"特殊关系"的说辞<br>
    □ 牌照信息与平台名称不一致的项目，一律不投</p>
  </div>
  <div class="section green">
    <div class="section-title green">承诺二：远离高息诱惑</div>
    <p>我承诺：□ 年化收益率超过8%的项目，一定提高警惕<br>
    □ 年化收益率超过12%的项目，一律不投<br>
    □ 不相信任何"限时加息"、"活动专享"的压力销售<br>
    我给自己的"红线"：年化 <input type="text" style="width:40px"> %以上不投</p>
  </div>
  <div class="section green">
    <div class="section-title green">承诺三：不碰看不懂的产品</div>
    <p>我承诺：□ 不投资自己无法用大白话解释清楚的产品<br>
    □ 遇到"这是高科技，你看不懂"的说辞，立即远离<br>
    □ 无法回答"我的钱去了哪里"这个问题的产品，一律不投</p>
  </div>
  <div class="section green">
    <div class="section-title green">承诺四：验证资金流向</div>
    <p>我承诺：□ 只把钱转到银行或持牌支付机构<br>
    □ 绝不把钱打到个人账户<br>
    □ 每次投资前确认资金流向</p>
  </div>
  <div class="section green">
    <div class="section-title green">承诺五：告知家人朋友</div>
    <p>我承诺：□ 把防骗知识分享给家人 □ 提醒身边人不要盲目相信高收益</p>
  </div>
  <h2>我的避坑誓言</h2>
  <p>我，<input type="text" style="width:100px">，郑重承诺：</p>
  <p>从今天起，投资理财前一定先查资质，面对高息一定保持警惕，看不懂的产品一定不碰，资金流向一定核实清楚。</p>
  <p>签名：<input type="text" style="width:100px"> 日期：<input type="text" style="width:80px"></p>
  <p class="tip">提示：本承诺书请妥善保管，可贴在书房或钱包里随时提醒自己。投资理财是一辈子的事，防骗是基本功。</p>
</div>'''

files = [
    ("F1_平台类型识别卡.html", "F1：平台类型识别卡", f1),
    ("F2_五步风险识别检查表.html", "F2：五步风险识别检查表", f2),
    ("F3_高风险平台特征卡.html", "F3：高风险平台特征卡", f3),
    ("F4_金融科技产品甄别卡.html", "F4：金融科技产品甄别卡", f4),
    ("F5_防骗三黄金法则卡.html", "F5：防骗三黄金法则卡", f5),
    ("F6_维权路径指引卡.html", "F6：维权路径指引卡", f6),
    ("F7_我的避坑承诺书.html", "F7：我的避坑承诺书", f7),
]

for fname, title, body in files:
    html = make_html(title, body)
    path = os.path.join(OUT, fname)
    with open(path, "w", encoding="utf-8") as f:
        f.write(html)
    print("Created: " + fname)

print("\nAll 7 HTML files created!")
print("Output: " + OUT)
