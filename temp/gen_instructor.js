const fs = require('fs');
const html = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>讲师手册 | RPD-07 业主信任与老龄化接受度</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;600;700&family=Noto+Sans+SC:wght@300;400;500;700&display=swap" rel="stylesheet">
  <style>
    :root { --primary: #2D2D2D; --secondary: #5A5A5A; --accent: #C41E3A; --light: #E8364F; --bg: #FAFAFA; --card: #FFFFFF; --border: #E5E5E5; --warn: #F59E0B; --success: #10B981; }
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Noto Sans SC', sans-serif; background: var(--bg); color: var(--primary); line-height: 1.8; font-size: 15px; }
    .header { background: linear-gradient(135deg, var(--primary) 0%, #1a1a1a 100%); color: white; padding: 60px 40px; position: relative; overflow: hidden; }
    .header::before { content: ''; position: absolute; top: -50%; right: -20%; width: 600px; height: 600px; background: var(--accent); opacity: 0.15; border-radius: 50%; }
    .header-content { position: relative; z-index: 1; max-width: 1200px; margin: 0 auto; }
    .course-badge { display: inline-block; background: var(--accent); color: white; padding: 6px 16px; border-radius: 20px; font-size: 13px; font-weight: 500; margin-bottom: 20px; }
    .header h1 { font-family: 'Noto Serif SC', serif; font-size: 42px; font-weight: 700; margin-bottom: 16px; }
    .header-subtitle { font-size: 20px; opacity: 0.9; font-weight: 300; }
    .header-meta { display: flex; gap: 40px; margin-top: 30px; font-size: 14px; opacity: 0.8; }
    .container { max-width: 1200px; margin: 0 auto; padding: 40px; }
    .section { margin-bottom: 60px; }
    .section-header { display: flex; align-items: center; gap: 16px; margin-bottom: 30px; padding-bottom: 16px; border-bottom: 2px solid var(--accent); }
    .section-number { width: 48px; height: 48px; background: var(--accent); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 18px; }
    .section-title { font-family: 'Noto Serif SC', serif; font-size: 28px; font-weight: 600; }
    .info-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; margin-bottom: 30px; }
    .content-card { background: var(--card); border-radius: 16px; padding: 32px; margin-bottom: 24px; box-shadow: 0 4px 20px rgba(0,0,0,0.06); }
    .content-card h3 { font-family: 'Noto Serif SC', serif; font-size: 20px; margin-bottom: 16px; color: var(--primary); display: flex; align-items: center; gap: 10px; }
    .content-card h3::before { content: ''; width: 4px; height: 24px; background: var(--accent); border-radius: 2px; }
    .tip-box { background: #FFF7ED; border-left: 4px solid var(--warn); padding: 20px 24px; border-radius: 0 12px 12px 0; margin: 20px 0; }
    .tip-box.info { background: #F0F9FF; border-color: #0EA5E9; }
    .tip-box.success { background: #ECFDF5; border-color: var(--success); }
    .tip-box.danger { background: #FEF2F2; border-color: var(--accent); }
    .tip-title { font-weight: 600; margin-bottom: 8px; display: flex; align-items: center; gap: 8px; }
    .tip-box.danger .tip-title { color: var(--accent); }
    .tip-box.info .tip-title { color: #0369A1; }
    .tip-box.success .tip-title { color: #047857; }
    .tip-box p { color: var(--secondary); font-size: 14px; }
    .quote { background: linear-gradient(135deg, #f8f8f8 0%, #fff 100%); border-left: 4px solid var(--accent); padding: 24px 30px; margin: 24px 0; border-radius: 0 12px 12px 0; font-style: italic; color: var(--secondary); }
    .quote-author { margin-top: 12px; font-style: normal; font-weight: 500; color: var(--primary); }
    .styled-list { list-style: none; }
    .styled-list li { padding: 12px 0; padding-left: 28px; position: relative; border-bottom: 1px solid var(--border); }
    .styled-list li:last-child { border-bottom: none; }
    .styled-list li::before { content: '◆'; position: absolute; left: 0; color: var(--accent); font-size: 10px; }
    .table-wrapper { overflow-x: auto; margin: 24px 0; border-radius: 12px; box-shadow: 0 2px 12px rgba(0,0,0,0.06); }
    table { width: 100%; border-collapse: collapse; background: var(--card); }
    th { background: var(--primary); color: white; padding: 16px 20px; text-align: left; font-weight: 500; }
    td { padding: 14px 20px; border-bottom: 1px solid var(--border); }
    tr:last-child td { border-bottom: none; }
    .time-badge { display: inline-block; background: var(--light); color: white; padding: 4px 12px; border-radius: 12px; font-size: 12px; font-weight: 500; margin-left: 8px; }
    .accordion { margin: 20px 0; }
    .accordion-item { background: var(--card); border-radius: 12px; margin-bottom: 12px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.04); }
    .accordion-header { padding: 20px 24px; cursor: pointer; display: flex; justify-content: space-between; align-items: center; font-weight: 600; transition: background 0.2s; }
    .accordion-header:hover { background: #f8f8f8; }
    .accordion-header::after { content: '+'; font-size: 20px; color: var(--accent); transition: transform 0.3s; }
    .accordion-item.active .accordion-header::after { transform: rotate(45deg); }
    .accordion-content { max-height: 0; overflow: hidden; transition: max-height 0.3s ease; padding: 0 24px; }
    .accordion-item.active .accordion-content { max-height: 5000px; padding: 0 24px 20px; }
    .step-list { counter-reset: step; }
    .step-item { display: flex; gap: 20px; margin-bottom: 24px; }
    .step-num { width: 36px; height: 36px; background: var(--accent); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; flex-shrink: 0; }
    .step-content { flex: 1; }
    .step-title { font-weight: 600; margin-bottom: 8px; }
    .footer { text-align: center; padding: 40px; color: var(--secondary); font-size: 13px; border-top: 1px solid var(--border); margin-top: 60px; }
    @media print { body { font-size: 12px; } .header { padding: 30px; } .content-card { box-shadow: none; border: 1px solid #ddd; } .section { page-break-inside: avoid; } }
  </style>
</head>
<body>

<header class="header">
  <div class="header-content">
    <span class="course-badge">RPD-07</span>
    <h1>业主信任与老龄化接受度</h1>
    <p class="header-subtitle">AI落地绕不开的人情关 · 讲师手册</p>
    <div class="header-meta">
      <span>课程时长：6小时（360分钟）</span>
      <span>适用对象：物业项目经理、客服主管、一线管家</span>
      <span>教学模式：工作坊式互动训练</span>
    </div>
  </div>
</header>

<div class="container">

  <section class="section">
    <div class="section-header"><span class="section-number">0</span><h2 class="section-title">讲师课前准备</h2></div>
    <div class="info-grid">
      <div class="content-card"><h3>物料清单</h3>
        <ul class="styled-list">
          <li>学员手册（每人一本）</li>
          <li>场景卡片（每组一套）</li>
          <li>白板/大白纸 + 马克笔</li>
          <li>计时机（手机即可）</li>
          <li>二维码：AIGC体验群/体验链接</li>
          <li>音响 + 麦克风（30人以上场地必备）</li>
        </ul>
      </div>
      <div class="content-card"><h3>场地要求</h3>
        <ul class="styled-list">
          <li>U型座位或分组成桌（4-6人/组）</li>
          <li>投影/大屏（播放PPT）</li>
          <li>轻松自在的氛围，避免太正式的会议室感</li>
        </ul>
      </div>
    </div>
    <div class="tip-box info"><div class="tip-title">讲师开场前</div><p>建议提前30分钟到场，测试设备，和早到的学员聊天，营造轻松氛围。课程开始前5分钟关闭会场门。</p></div>
  </section>

  <section class="section">
    <div class="section-header"><span class="section-number">1</span><h2 class="section-title">破冰与课程导入<span class="time-badge">45分钟</span></h2></div>
    <div class="content-card">
      <h3>1.1 破冰：物业人的AI吐槽大会<span class="time-badge">15分钟</span></h3>
      <p><strong>目的：</strong>让学员打开话匣子，建立安全感的课堂氛围，同时引出课程主题。</p>
      <div class="step-list">
        <div class="step-item"><span class="step-num">1</span><div class="step-content"><div class="step-title">讲师导入（2分钟）</div><p>"今天这堂课，我们不聊技术，不聊功能，聊一个物业人心里都有的困惑：为什么明明是好东西，业主就是不用？"</p></div></div>
        <div class="step-item"><span class="step-num">2</span><div class="step-content"><div class="step-title">分组讨论（8分钟）</div><p>每组列出：您在推广AI工具时，遇到业主最多的3个拒绝理由。写在白板纸上。</p></div></div>
        <div class="step-item"><span class="step-num">3</span><div class="step-content"><div class="step-title">全班汇总（5分钟）</div><p>每组派代表分享1个最典型的"拒绝理由"。讲师在大白纸上记录，不评价，只确认理解。</p></div></div>
      </div>
      <div class="tip-box"><div class="tip-title">讲师话术</div><p>"这些顾虑都对吗？今天这堂课，我们不是来说服业主的，是来理解他们的。"</p></div>
    </div>
    <div class="content-card">
      <h3>1.2 课程框架说明<span class="time-badge">10分钟</span></h3>
      <p>用PPT说明今天的学习路径：</p>
      <ul class="styled-list">
        <li><strong>第一层：理解老年人</strong> —— 他们为什么拒绝？（信任五角）</li>
        <li><strong>第二层：翻译技术</strong> —— 怎么把AI翻译成人话？（三层翻译法）</li>
        <li><strong>第三层：设计服务</strong> —— 怎么让服务有温度？（适老化五原则）</li>
        <li><strong>第四层：实战演练</strong> —— 场景练习，把话说对</li>
      </ul>
      <div class="tip-box success"><div class="tip-title">讲师要点</div><p>告诉学员：今天不是来听课的，是来练说话的。学完就能用，回去就能落地。</p></div>
    </div>
  </section>

  <section class="section">
    <div class="section-header"><span class="section-number">2</span><h2 class="section-title">信任五角模型<span class="time-badge">60分钟</span></h2></div>
    <div class="content-card">
      <h3>2.1 理论导入：信任的五个维度<span class="time-badge">20分钟</span></h3>
      <p>讲解老年业主对AI工具产生抗拒的五个核心原因。</p>
      <div class="table-wrapper">
        <table>
          <thead><tr><th>维度</th><th>本质问题</th><th>讲师关键词</th></tr></thead>
          <tbody>
            <tr><td><strong>能力信任</strong></td><td>AI能做好吗？</td><td>准确率、稳定性、人工兜底</td></tr>
            <tr><td><strong>关系信任</strong></td><td>对我有好处吗？</td><td>物业目的、服务升级、不会减少</td></tr>
            <tr><td><strong>信息信任</strong></td><td>我的信息安全吗？</td><td>数据保护、合规资质、本地存储</td></tr>
            <tr><td><strong>控制信任</strong></td><td>我能选择不用吗？</td><td>自愿原则、传统通道保留</td></tr>
            <tr><td><strong>尊严信任</strong></td><td>用这个会不会显得我很笨？</td><td>耐心教学、不嘲笑、一对一指导</td></tr>
          </tbody>
        </table>
      </div>
      <div class="tip-box"><div class="tip-title">讲师核心话术</div><p>"技术问题好解决，人心问题需要设计。今天我们学的，就是怎么设计信任。"</p></div>
    </div>
    <div class="content-card">
      <h3>2.2 小组讨论：每个维度的典型场景<span class="time-badge">20分钟</span></h3>
      <p>给每组发一个维度卡片，讨论：你项目中遇到过的这个维度的真实案例？</p>
      <ul class="styled-list"><li>每组讨论8分钟</li><li>每组分享2分钟</li><li>讲师总结2分钟</li></ul>
    </div>
    <div class="content-card">
      <h3>2.3 工具传授：信任建立检查表<span class="time-badge">20分钟</span></h3>
      <p>发给学员《信任建立检查表》，逐项确认自己的项目是否做到：</p>
      <div class="table-wrapper">
        <table>
          <thead><tr><th>信任维度</th><th>检查项</th><th>做到打勾</th></tr></thead>
          <tbody>
            <tr><td>能力信任</td><td>有AI准确率数据吗？有人工兜底机制吗？</td><td>□</td></tr>
            <tr><td>关系信任</td><td>有告诉业主"AI是来提升服务，不是来替代人"吗？</td><td>□</td></tr>
            <tr><td>信息信任</td><td>有数据安全承诺书吗？主动告知了吗？</td><td>□</td></tr>
            <tr><td>控制信任</td><td>告诉业主可以选不用了吗？传统通道畅通吗？</td><td>□</td></tr>
            <tr><td>尊严信任</td><td>有一对一教学安排吗？有人定期上门关怀吗？</td><td>□</td></tr>
          </tbody>
        </table>
      </div>
      <div class="tip-box danger"><div class="tip-title">关键提醒</div><p>不要告诉学员"这是作业"。告诉他们："这是你们回去就能用的工具，今天带回去，今天就用。"</p></div>
    </div>
  </section>

  <section class="section">
    <div class="section-header"><span class="section-number">3</span><h2 class="section-title">三层翻译法<span class="time-badge">60分钟</span></h2></div>
    <div class="content-card">
      <h3>3.1 理论讲解：为什么业主听不懂？<span class="time-badge">15分钟</span></h3>
      <p>讲解：大多数业主不是不理解AI，是没人用他们听得懂的方式解释。</p>
      <div class="quote">
        <p>"我们请了一个24小时在线的'虚拟管家'，您有任何问题，问它就行，它答不上来的，后台会有人接管。"</p>
        <p class="quote-author">—— vs ——</p>
        <p>"我们上线了基于大语言模型的智能客服系统。"</p>
      </div>
      <div class="tip-box info"><div class="tip-title">讲师核心原则</div><p>解释AI的原则：像跟爸妈说话一样。怎么跟爸妈解释新技术，就怎么跟业主解释。</p></div>
    </div>
    <div class="content-card">
      <h3>3.2 三层翻译技能讲解<span class="time-badge">25分钟</span></h3>
      <div class="accordion">
        <div class="accordion-item active">
          <div class="accordion-header">技能一：场景化（先说用在哪，再说是什么）</div>
          <div class="accordion-content">
            <p><strong>核心：</strong>先告诉业主AI能帮他们做什么具体的事，再说背后的技术是什么。</p>
            <div class="quote">
              <p>AI客服 → "像雇了一个不知疲倦的前台，24小时在线，您随时打过来都有人接"</p>
              <p>人脸识别 → "像保安认人，但不靠记性靠眼睛。您走过去门就开了，不用掏卡"</p>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <div class="accordion-header">技能二：类比法（用熟悉的东西理解陌生的东西）</div>
          <div class="accordion-content">
            <p><strong>核心：</strong>用业主生活中熟悉的东西，来理解AI的功能。</p>
            <div class="quote">
              <p>数据安全 → "像您家的保险柜，钥匙在我们手里，别人都打不开"</p>
              <p>AI推荐 → "像您去超市，店员记住您喜欢买什么，主动告诉您"</p>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <div class="accordion-header">技能三：利益化（说能给你带来什么，不说技术有多厉害）</div>
          <div class="accordion-content">
            <p><strong>核心：</strong>永远说业主能得到什么好处，不说技术参数。</p>
            <div class="quote">
              <p>95%意图识别准确率 → "您说的什么意思，AI能听懂，80%的问题当时就能答"</p>
              <p>巡检机器人上线 → "以前保安每小时巡逻一次，现在24小时自动盯着，有问题第一时间发现"</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="content-card">
      <h3>3.3 练习：翻译实战<span class="time-badge">20分钟</span></h3>
      <p>每组抽取一个"技术功能卡片"，用三层翻译法把它翻译成"业主能听懂的话"。</p>
      <div class="step-list">
        <div class="step-item"><span class="step-num">1</span><div class="step-content"><div class="step-title">分组准备（10分钟）</div><p>每组用大白纸写下原文、技术含义、翻译后的话。</p></div></div>
        <div class="step-item"><span class="step-num">2</span><div class="step-content"><div class="step-title">全班展示（10分钟）</div><p>每组派代表朗读翻译结果，全班投票选出"最接地气翻译奖"。</p></div></div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="section-header"><span class="section-number">4</span><h2 class="section-title">适老化服务设计<span class="time-badge">50分钟</span></h2></div>
    <div class="content-card">
      <h3>4.1 五原则讲解<span class="time-badge">25分钟</span></h3>
      <p>讲解适老化服务设计的五个核心原则：</p>
      <div class="table-wrapper">
        <table>
          <thead><tr><th>原则</th><th>核心要求</th><th>落地检查</th></tr></thead>
          <tbody>
            <tr><td><strong>自愿原则</strong></td><td>AI是选项，不是必须</td><td>有老人不愿意用，还能继续用卡/电话/前台吗？</td></tr>
            <tr><td><strong>温度原则</strong></td><td>让老人感到被重视</td><td>有人定期上门关心吗？叫得出老人的名字吗？</td></tr>
            <tr><td><strong>简单原则</strong></td><td>界面简单，操作少</td><td>字体够大吗？步骤超过3步吗？</td></tr>
            <tr><td><strong>耐心原则</strong></td><td>可以反复教，不考核</td><td>同一个问题能回答100遍吗？</td></tr>
            <tr><td><strong>兜底原则</strong></td><td>人工服务永不过时</td><td>在任何场景下，都能找到人工吗？</td></tr>
          </tbody>
        </table>
      </div>
      <div class="tip-box danger"><div class="tip-title">讲师警示</div><p>绝对不要说"这很简单嘛，看一遍就会了"。这句话会让老人觉得自己被嘲笑。正确的话："没关系，今天学不会，明天再来，我们天天在。"</p></div>
    </div>
    <div class="content-card">
      <h3>4.2 服务阶梯设计练习<span class="time-badge">25分钟</span></h3>
      <p>每组为自己的项目设计一个"服务阶梯"：</p>
      <div class="table-wrapper">
        <table>
          <thead><tr><th>服务层级</th><th>服务形式</th><th>适用人群</th><th>我的项目怎么做</th></tr></thead>
          <tbody>
            <tr><td>第1层：自助服务</td><td>App/小程序</td><td>年轻业主</td><td>——</td></tr>
            <tr><td>第2层：辅助服务</td><td>AI客服+人工兜底</td><td>中年业主</td><td>——</td></tr>
            <tr><td>第3层：人工服务</td><td>电话/前台</td><td>老年业主</td><td>——</td></tr>
            <tr><td>第4层：专属服务</td><td>上门/VIP管家</td><td>特殊需求</td><td>——</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="section-header"><span class="section-number">5</span><h2 class="section-title">标准回应话术<span class="time-badge">60分钟</span></h2></div>
    <div class="content-card">
      <h3>5.1 四大经典质疑回应<span class="time-badge">30分钟</span></h3>
      <p>讲解四个最经典的业主质疑及标准回应话术：</p>
      <div class="accordion">
        <div class="accordion-item active">
          <div class="accordion-header">质疑1："机器哪有真人靠谱？"</div>
          <div class="accordion-content">
            <div class="quote"><p><strong>标准回应：</strong>"您说得对，再好的机器也有处理不了的时候。所以我们设计的是'AI先接，AI处理不了的秒转人工'——您按一下'0'就行，保证有人接。"</p></div>
            <p><strong>背后的逻辑：</strong>先承认AI的局限性，再说明人工兜底机制，打消"找不到人"的担忧。</p>
          </div>
        </div>
        <div class="accordion-item">
          <div class="accordion-header">质疑2："我的信息会不会被泄露？"</div>
          <div class="accordion-content">
            <div class="quote"><p><strong>标准回应：</strong>"您的信息存在我们的服务器上，就像您家的保险柜，钥匙只有物业有。国家有数据保护法规，我们也要合规经营，泄露了要担法律责任的。"</p></div>
            <p><strong>背后的逻辑：</strong>用"保险柜"类比让抽象的数据安全具象化，同时搬出法律合规增加可信度。</p>
          </div>
        </div>
        <div class="accordion-item">
          <div class="accordion-header">质疑3："我不会用怎么办？"</div>
          <div class="accordion-content">
            <div class="quote"><p><strong>标准回应：</strong>"没关系，您可以随时来物业前台，我们有专人教您，一次不会教两次，两次不会教三次。另外，传统的方式一直保留，您怎么方便怎么来。"</p></div>
            <p><strong>背后的逻辑：</strong>强调"不会嘲笑你"和"传统方式保留"，打消"被考核"的担忧。</p>
          </div>
        </div>
        <div class="accordion-item">
          <div class="accordion-header">质疑4："物业是不是想用AI省人省钱？"</div>
          <div class="accordion-content">
            <div class="quote"><p><strong>标准回应：</strong>"您的顾虑我理解。说实话，AI客服上线后，我们客服的人均接听量反而降了——因为AI处理了重复问题，人工能腾出手来做更复杂的事情。对您来说，是服务更快了，不是更差了。"</p></div>
            <p><strong>背后的逻辑：</strong>不否认物业会提效，但强调"对业主是好事"，把物业利益和业主利益绑定。</p>
          </div>
        </div>
      </div>
    </div>
    <div class="content-card">
      <h3>5.2 话术实战演练<span class="time-badge">30分钟</span></h3>
      <p>角色扮演练习：两人一组，一人演物业管家，一人演抗拒的业主。</p>
      <div class="step-list">
        <div class="step-item"><span class="step-num">1</span><div class="step-content"><div class="step-title">分组配对（2分钟）</div><p>每组2人，抽签决定谁演物业、谁演业主。</p></div></div>
        <div class="step-item"><span class="step-num">2</span><div class="step-content"><div class="step-title">准备台词（5分钟）</div><p>物业方根据场景卡准备话术，业主方准备"挑刺"问题。</p></div></div>
        <div class="step-item"><span class="step-num">3</span><div class="step-content"><div class="step-title">角色扮演（10分钟）</div><p>物业用话术说服业主，业主可以自由发挥拒绝。</p></div></div>
        <div class="step-item"><span class="step-num">4</span><div class="step-content"><div class="step-title">观众反馈（5分钟）</div><p>旁观学员给物业方打分：哪句话说得好？哪句话可以改进？</p></div></div>
        <div class="step-item"><span class="step-num">5</span><div class="step-content"><div class="step-title">交换角色（8分钟）</div><p>互换角色，重复练习。</p></div></div>
      </div>
      <div class="tip-box info"><div class="tip-title">讲师巡场提示</div><p>讲师在学员练习时巡回观察，记录几个说得好/说得不好的例子，在全班分享时用真实的例子反馈。</p></div>
    </div>
  </section>

  <section class="section">
    <div class="section-header"><span class="section-number">6</span><h2 class="section-title">总结与行动计划<span class="time-badge">45分钟</span></h2></div>
    <div class="content-card">
      <h3>6.1 课程总结<span class="time-badge">15分钟</span></h3>
      <ul class="styled-list">
        <li><strong>一个认知：</strong>AI落地，技术是基础，人心是关键。信任不能靠时间自动解决，需要刻意设计。</li>
        <li><strong>两个方向：</strong>对上，理解业主的担忧（能力/关系/信息/控制/尊严）；对下，把AI翻译成人话（场景化/类比化/利益化）。</li>
        <li><strong>三条通道：</strong>保留人工服务通道是底线，让业主有选择权是原则，提供适老化服务是温度。</li>
        <li><strong>四个话术：</strong>遇到质疑，先理解、再解释、给方案、做承诺。</li>
      </ul>
    </div>
    <div class="content-card">
      <h3>6.2 行动计划制定<span class="time-badge">20分钟</span></h3>
      <p>每位学员填写《个人行动计划表》：</p>
      <div class="table-wrapper">
        <table>
          <thead><tr><th>时间节点</th><th>具体行动</th><th>预计困难</th><th>应对方案</th></tr></thead>
          <tbody>
            <tr><td>第一周</td><td></td><td></td><td></td></tr>
            <tr><td>第二周</td><td></td><td></td><td></td></tr>
            <tr><td>第一个月</td><td></td><td></td><td></td></tr>
            <tr><td>第三个月</td><td></td><td></td><td></td></tr>
          </tbody>
        </table>
      </div>
      <div class="tip-box success"><div class="tip-title">讲师提示</div><p>行动计划要具体到"谁、在哪一天、做什么"。不要写"加强培训"，要写"X月X日，给王阿姨上门演示人脸识别门禁"。</p></div>
    </div>
    <div class="content-card">
      <h3>6.3 结束语与后续支持<span class="time-badge">10分钟</span></h3>
      <div class="quote">
        <p>"今天学的话术，回去就能用。不要等完美了再开始，先做起来，在做的过程中优化。业主的信任是一点点积累的，不是一次性建立的。"</p>
        <p class="quote-author">—— 罗宏伟</p>
      </div>
      <p>告知后续支持渠道：AIGC体验群、课后答疑时间等。</p>
    </div>
  </section>

  <section class="section">
    <div class="section-header"><span class="section-number">附</span><h2 class="section-title">课程时间参考表</h2></div>
    <div class="table-wrapper">
      <table>
        <thead><tr><th>模块</th><th>时长</th><th>累计</th><th>备注</th></tr></thead>
        <tbody>
          <tr><td>破冰与导入</td><td>45分钟</td><td>0:45</td><td>可根据现场氛围调整</td></tr>
          <tr><td>信任五角模型</td><td>60分钟</td><td>1:45</td><td>含讨论时间</td></tr>
          <tr><td>三层翻译法</td><td>60分钟</td><td>2:45</td><td>含翻译练习</td></tr>
          <tr><td>适老化服务设计</td><td>50分钟</td><td>3:35</td><td>含服务阶梯练习</td></tr>
          <tr><td>标准回应话术</td><td>60分钟</td><td>4:35</td><td>含角色扮演</td></tr>
          <tr><td>总结与行动计划</td><td>45分钟</td><td>5:20</td><td>含行动计划制定</td></tr>
          <tr><td><strong>机动/缓冲</strong></td><td><strong>40分钟</strong></td><td><strong>6:00</strong></td><td><strong>根据现场调整</strong></td></tr>
        </tbody>
      </table>
    </div>
    <div class="tip-box info"><div class="tip-title">时间管理提示</div><p>每个模块都留有缓冲时间。如果某个模块超时，直接切到下一个模块，不要往后拖延。课程结束永远要比预定时间早5分钟，留出Q&A时间。</p></div>
  </section>

</div>

<footer class="footer">
  <p>RPD-07 业主信任与老龄化接受度——AI落地绕不开的人情关</p>
  <p>版权所有 · 罗宏伟 · 本手册仅供讲师内部使用</p>
</footer>

<script>
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => { header.parentElement.classList.toggle('active'); });
  });
</script>

</body>
</html>`;
fs.writeFileSync('D:/Downloads/xinjian/RPD-07_讲师手册.html', html);
console.log('Done');