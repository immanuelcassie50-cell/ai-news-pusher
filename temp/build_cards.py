# -*- coding: utf-8 -*-
"""
英为®课程 · 8 张可打印工具卡 · A4 横向打印优化
"""
import os

OUT_DIR = r"D:/2026年课程/竞越/英为®：创新思维与实用工具/完整课程包/15_可打印工具卡"
os.makedirs(OUT_DIR, exist_ok=True)

CSS = """
:root {
  --paper: #F5F1E8;
  --ink: #1A1A1A;
  --red: #D4361F;
  --gold: #F2C75C;
  --sage: #5C8068;
  --pink: #FBE9E3;
  --line: #6B6358;
}
* { box-sizing: border-box; margin: 0; padding: 0; }
@page { size: A4 landscape; margin: 0; }
body {
  font-family: 'Noto Serif SC', 'Fraunces', 'Cormorant Garamond', Georgia, serif;
  background: var(--paper);
  color: var(--ink);
  width: 297mm;
  height: 210mm;
  padding: 12mm 14mm;
  position: relative;
  overflow: hidden;
}
.head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 3px solid var(--ink);
  padding-bottom: 6mm;
  margin-bottom: 6mm;
}
.brand {
  font-family: 'Fraunces', Georgia, serif;
  font-weight: 900;
  font-size: 18pt;
  letter-spacing: 1px;
}
.brand .sub {
  font-size: 9pt;
  color: var(--line);
  letter-spacing: 0;
  font-weight: 400;
  margin-left: 6mm;
}
.no {
  font-family: 'JetBrains Mono', monospace;
  font-size: 9pt;
  color: var(--red);
  letter-spacing: 1px;
}
h1 {
  font-family: 'Fraunces', Georgia, serif;
  font-weight: 900;
  font-size: 36pt;
  line-height: 1.1;
  margin-bottom: 3mm;
}
h1 .accent { color: var(--red); }
h2 {
  font-family: 'Noto Serif SC', serif;
  font-weight: 700;
  font-size: 14pt;
  margin: 4mm 0 2mm 0;
  border-left: 4px solid var(--red);
  padding-left: 3mm;
}
h3 {
  font-size: 11pt;
  font-weight: 700;
  margin: 2mm 0 1mm 0;
}
.sub-title {
  font-size: 11pt;
  color: var(--line);
  font-style: italic;
  margin-bottom: 5mm;
}
.lead {
  font-size: 13pt;
  line-height: 1.6;
  margin-bottom: 5mm;
}
.grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 6mm; }
.grid-3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 5mm; }
.grid-4 { display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; gap: 4mm; }
.grid-6 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 4mm; }
.box {
  background: white;
  border: 1px solid var(--ink);
  padding: 4mm;
}
.box.gold { background: var(--gold); }
.box.red { background: var(--red); color: white; }
.box.sage { background: var(--sage); color: white; }
.box.pink { background: var(--pink); }
.box .tag {
  font-family: 'JetBrains Mono', monospace;
  font-size: 8pt;
  letter-spacing: 1px;
  display: inline-block;
  padding: 1mm 2mm;
  background: var(--ink);
  color: var(--paper);
  margin-bottom: 2mm;
}
.box .tag.red { background: var(--red); }
.box .num {
  font-family: 'Fraunces', Georgia, serif;
  font-size: 28pt;
  font-weight: 900;
  color: var(--red);
  line-height: 1;
  margin-bottom: 2mm;
}
.box .title { font-weight: 700; font-size: 12pt; margin-bottom: 1mm; }
.box .desc { font-size: 9pt; line-height: 1.5; }
ul.tight { margin-left: 5mm; font-size: 10pt; line-height: 1.6; }
ul.tight li { margin-bottom: 0.8mm; }
.note {
  margin-top: 4mm;
  padding: 3mm 4mm;
  background: var(--pink);
  border-left: 4px solid var(--red);
  font-size: 10pt;
}
.foot {
  position: absolute;
  bottom: 8mm;
  left: 14mm;
  right: 14mm;
  display: flex;
  justify-content: space-between;
  font-family: 'JetBrains Mono', monospace;
  font-size: 8pt;
  color: var(--line);
  border-top: 1px solid var(--line);
  padding-top: 2mm;
}
.cycle {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 4mm 0;
}
.stage {
  flex: 1;
  text-align: center;
  padding: 6mm 3mm;
  background: white;
  border: 2px solid var(--ink);
  position: relative;
}
.stage .big {
  font-family: 'Fraunces', Georgia, serif;
  font-size: 48pt;
  font-weight: 900;
  line-height: 1;
  color: var(--red);
}
.stage .name {
  font-size: 14pt;
  font-weight: 700;
  margin: 2mm 0 1mm 0;
}
.stage .en {
  font-family: 'JetBrains Mono', monospace;
  font-size: 9pt;
  color: var(--line);
  margin-bottom: 2mm;
}
.stage .desc { font-size: 9pt; line-height: 1.4; }
.arrow {
  font-size: 24pt;
  color: var(--red);
  font-weight: 900;
  padding: 0 4mm;
}
.formula {
  background: var(--ink);
  color: var(--paper);
  padding: 6mm 8mm;
  font-size: 16pt;
  font-weight: 700;
  text-align: center;
  margin: 4mm 0;
  letter-spacing: 0.5px;
}
.formula .red { color: var(--red); }
.formula .gold { color: var(--gold); }
.checklist .item {
  display: flex;
  align-items: flex-start;
  padding: 1.5mm 0;
  border-bottom: 1px dashed var(--line);
  font-size: 10pt;
}
.checklist .item::before {
  content: '☐';
  margin-right: 3mm;
  font-size: 12pt;
  color: var(--red);
  font-weight: 700;
}
.warn .item::before { content: '⚠'; color: var(--red); }
.radar {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4mm;
}
.cap {
  display: flex;
  align-items: center;
  padding: 3mm;
  background: white;
  border: 1px solid var(--ink);
}
.cap .n {
  font-family: 'Fraunces', Georgia, serif;
  font-size: 22pt;
  font-weight: 900;
  color: var(--red);
  width: 16mm;
  text-align: center;
}
.cap .t { font-weight: 700; font-size: 11pt; }
.cap .d { font-size: 9pt; color: var(--line); }
@media print {
  body { width: 297mm; height: 210mm; }
}
"""

TEMPLATE_HEAD = """<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<title>{title} · 英为®</title>
<link href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;700;900&family=Fraunces:wght@400;700;900&family=JetBrains+Mono:wght@400;700&family=Cormorant+Garamond:wght@400;700&display=swap" rel="stylesheet">
<style>{css}</style>
</head>
<body>
<div class="head">
  <div class="brand">英为® · 创新思维与实用工具<span class="sub">YINGWEI® · Innovation Thinking & Practical Tools</span></div>
  <div class="no">{card_no} · 工具卡</div>
</div>
"""

FOOTER = """
<div class="foot">
  <div>英为®课程 · 工具卡 · {title}</div>
  <div>学员随身 · 团队张贴 · 30 天回看</div>
</div>
</body>
</html>
"""

# ============ Card 1: 感·构·验 ============
card1 = TEMPLATE_HEAD.format(title="感·构·验 创新循环", card_no="C01", css=CSS) + """
<h1>感·构·<span class="accent">验</span></h1>
<div class="sub-title">Sense · Build · Validate — 创新不是天才一瞬间，是 3 段循环 7 步闭环</div>

<div class="cycle">
  <div class="stage">
    <div class="big">感</div>
    <div class="name">进入真实现场</div>
    <div class="en">SENSE</div>
    <div class="desc">看 AI 漏掉的<br>听用户没说的</div>
  </div>
  <div class="arrow">→</div>
  <div class="stage">
    <div class="big">构</div>
    <div class="name">把洞察变成方向</div>
    <div class="en">BUILD</div>
    <div class="desc">从问题到方案<br>从方案到选择</div>
  </div>
  <div class="arrow">→</div>
  <div class="stage">
    <div class="big">验</div>
    <div class="name">用最小代价验证</div>
    <div class="en">VALIDATE</div>
    <div class="desc">假装销售 · 纸面原型<br>对话 + 数据 + 调整</div>
  </div>
</div>

<div class="grid-3">
  <div class="box">
    <div class="tag">感 · 关键问题</div>
    <div class="title">用户在用什么凑合？</div>
    <div class="desc">凑合方案 = 真问题镜子。看用户用脚投票的地方，不看他嘴上说的需求。</div>
  </div>
  <div class="box">
    <div class="tag">构 · 关键问题</div>
    <div class="title">我们如何能……？</div>
    <div class="desc">HMW 公式：动词 + 对象 + 具体人 + 关键价值。5 个 HMW 中选 1 个开始。</div>
  </div>
  <div class="box red">
    <div class="tag red">验 · 关键问题</div>
    <div class="title">能在 1 周内假装做一次吗？</div>
    <div class="desc">MVP 不是产品，是实验。保真度从 1 句剧本到 1 张纸面原型，选最低的做。</div>
  </div>
</div>

<div class="note">⚠ 3 段不顺序：感不是想清楚才开始构，构不是设计完才开始验。<b>边感边构边验</b>才是真实节奏。</div>
""" + FOOTER.format(title="感·构·验创新循环")

# ============ Card 2: 问·解·造 ============
card2 = TEMPLATE_HEAD.format(title="问·解·造 工具地图", card_no="C02", css=CSS) + """
<h1>问·解·<span class="accent">造</span></h1>
<div class="sub-title">Inquire · Decode · Create — 3 类工具对应 3 类问题</div>

<div class="lead">拿到工具表时不要通吃 — <b>先判断你在问什么类型的问题</b>，再选工具。</div>

<div class="grid-3">
  <div class="box">
    <div class="num">问</div>
    <div class="tag red">INQUIRE</div>
    <div class="title">了解场景 · 看见信号</div>
    <div class="desc">用 5 原则问、3 双眼睛看、5 个 Why 挖<br><br>工具：T01 场景卡 · T05 情境访谈 · T07 感知计划 · T08 洞见改造</div>
  </div>
  <div class="box">
    <div class="num">解</div>
    <div class="tag red">DECODE</div>
    <div class="title">提炼洞见 · 定义问题</div>
    <div class="desc">把信号堆变成 1 句话洞见，再变 1 个真问题<br><br>工具：T09 信号归集 · T12 洞见提炼 · T13 视角阶梯 · T14 HMW 定义</div>
  </div>
  <div class="box">
    <div class="num">造</div>
    <div class="tag red">CREATE</div>
    <div class="title">生成方案 · 验证方向</div>
    <div class="desc">发散 → 收敛 → 假装销售 → 反馈调整<br><br>工具：T15 发散矩阵 · T17 三维矩阵 · T19 验证对话 · T20 反馈摘要</div>
  </div>
</div>

<h2>3 句话判断你在用哪类工具</h2>
<ul class="tight">
  <li><b>问</b>：我想看用户在做什么，他们为什么这样做 — 这是问的工具</li>
  <li><b>解</b>：我看到了一些信号，但说不出一句话 — 这是解的工具</li>
  <li><b>造</b>：我知道要解决什么，但不知道从哪个方案开始 — 这是造的工具</li>
</ul>

<div class="note">⚠ 误用 3 类工具的代价：用<b>问</b>的工具去<b>造</b>，会陷入无限调研。用<b>造</b>的工具去<b>问</b>，会假问题被反复打磨。</div>
""" + FOOTER.format(title="问·解·造工具地图")

# ============ Card 3: 6 项能力 ============
card3 = TEMPLATE_HEAD.format(title="6 项创新者能力", card_no="C03", css=CSS) + """
<h1>6 项<span class="accent">创新者能力</span></h1>
<div class="sub-title">把"创新能力"拆成 6 个可训练的具体能力 — 自我评估 + 团队评估都用这套</div>

<div class="radar">
  <div class="cap">
    <div class="n">01</div>
    <div>
      <div class="t">深度感知</div>
      <div class="d">看见 AI 漏掉的真实信号 — 情绪、肢体、行为细节</div>
    </div>
  </div>
  <div class="cap">
    <div class="n">02</div>
    <div>
      <div class="t">问题聚焦</div>
      <div class="d">从现象挖到 L4/L5 真问题 — 5 Why + 用户动机</div>
    </div>
  </div>
  <div class="cap">
    <div class="n">03</div>
    <div>
      <div class="t">方向判断</div>
      <div class="d">在多个方案中选对方向 — 4 维度 + 三维矩阵</div>
    </div>
  </div>
  <div class="cap">
    <div class="n">04</div>
    <div>
      <div class="t">快速验证</div>
      <div class="d">用最小代价验证关键假设 — 假装销售 + 纸面原型</div>
    </div>
  </div>
  <div class="cap">
    <div class="n">05</div>
    <div>
      <div class="t">人机协同</div>
      <div class="d">设计好 AI 与人的分工契约 — 3 大陷阱自检</div>
    </div>
  </div>
  <div class="cap">
    <div class="n">06</div>
    <div>
      <div class="t">叙事影响</div>
      <div class="d">用故事说服关键决策者 — 5 段叙事原型</div>
    </div>
  </div>
</div>

<h2>自我评估 5 级</h2>
<ul class="tight">
  <li><b>1</b> · 完全没意识到 — 看 AI 报告就觉得够了</li>
  <li><b>2</b> · 知道重要但没方法 — 想挖但挖不下去</li>
  <li><b>3</b> · 有方法能产出 — 偶尔能挖到真问题</li>
  <li><b>4</b> · 稳定产出 — 团队能复用我的方法</li>
  <li><b>5</b> · 教别人 — 能把方法抽象成工具让别人用</li>
</ul>

<div class="note">📌 课后 30/60/90 天做 3 次自评：看见真实变化比感觉重要。</div>
""" + FOOTER.format(title="6项创新者能力")

# ============ Card 4: AI 三大陷阱 ============
card4 = TEMPLATE_HEAD.format(title="AI 时代 3 大陷阱", card_no="C04", css=CSS) + """
<h1>AI 时代 <span class="accent">3 大陷阱</span></h1>
<div class="sub-title">用 AI 越深越危险 — 3 个陷阱你必须时刻警惕</div>

<div class="grid-3">
  <div class="box red">
    <div class="tag red">陷阱 1</div>
    <div class="title" style="color:white;font-size:14pt">幻觉洞察</div>
    <div class="desc" style="color:white">
      <b>症状：</b>看完 1 份 AI 报告觉得恍然大悟，但说不清是哪个具体证据支持。<br><br>
      <b>危险：</b>用户画像变成形容词堆（年轻/品质/效率），不再是具体人。<br><br>
      <b>自检：</b>我能指出 3 个具体观察支持这个洞察吗？能用一句话说出"我看到用户做了什么"吗？
    </div>
  </div>
  <div class="box red">
    <div class="tag red">陷阱 2</div>
    <div class="title" style="color:white;font-size:14pt">问题替换</div>
    <div class="desc" style="color:white">
      <b>症状：</b>用户说我想要 X，我们做了 Y，但 Y 是行业标配不是用户的真问题。<br><br>
      <b>危险：</b>用解决方案代替了问题，方案越完美越跑偏。<br><br>
      <b>自检：</b>我问过用户为什么吗？用脚投票支持哪个方案？有没有"非 X 解"？
    </div>
  </div>
  <div class="box red">
    <div class="tag red">陷阱 3</div>
    <div class="title" style="color:white;font-size:14pt">速度加速</div>
    <div class="desc" style="color:white">
      <b>症状：</b>AI 把 3 周压到 3 天，但我没增加 1 天真实验证，直接上线。<br><br>
      <b>危险：</b>完美方案错配了真问题，错得更快。<br><br>
      <b>自检：</b>我有未验证的假设在驱动快跑吗？3 个快 vs 1 个准，哪个更重要？
    </div>
  </div>
</div>

<div class="note">⚠ 用 AI 越深越要警惕 — 自检问题越简单越好：<b>哪个具体观察支持？用户为什么？验证了吗？</b></div>
""" + FOOTER.format(title="AI三大陷阱")

# ============ Card 5: 情境访谈 5 原则 ============
card5 = TEMPLATE_HEAD.format(title="情境访谈 5 原则", card_no="C05", css=CSS) + """
<h1>情境访谈 <span class="accent">5 原则</span></h1>
<div class="sub-title">Contextual Interview — 30 分钟 · 1 个目标 · 5 个原则</div>

<div class="lead">5 个原则看似简单，但每一条都会让大多数访谈失效。<b>打印贴在桌上，每次访谈前过一遍。</b></div>

<div class="grid-2">
  <div class="box">
    <div class="num">1</div>
    <div class="title">行为 > 态度</div>
    <div class="desc">不问"您怎么看" — 问"您怎么做"<br><br>用户说的 ≠ 用户做的。态度会被自我辩护污染，行为不会骗人。</div>
  </div>
  <div class="box">
    <div class="num">2</div>
    <div class="title">具体 > 一般</div>
    <div class="desc">不问"您一般怎么做" — 问"您上一次怎么做"<br><br>一般 = 平均印象 = 失真。上一次 = 具体场景 = 可分析。</div>
  </div>
  <div class="box">
    <div class="num">3</div>
    <div class="title">过去 > 假设</div>
    <div class="desc">不问"如果您会怎样" — 问"您当时是怎么做的"<br><br>假设 = 没发生的事 = 想象 = 不可分析。当时 = 真实发生。</div>
  </div>
  <div class="box">
    <div class="num">4</div>
    <div class="title">细节 > 总结</div>
    <div class="desc">不问"整体感觉" — 问"那一步具体是什么"<br><br>整体感觉 = 用户帮你总结 = 失去信号。细节 = 用户的真实路径。</div>
  </div>
  <div class="box gold">
    <div class="num">5</div>
    <div class="title">展示 > 解释</div>
    <div class="desc">不问"您为什么" — 问"您怎么做的"<br><br>为什么 = 用户的解释 = 不可信。怎么做 = 用户的行为 = 真相。</div>
  </div>
  <div class="box sage">
    <div class="num" style="color:white">+1</div>
    <div class="title" style="color:white">停顿 > 流畅</div>
    <div class="desc" style="color:white">用户停顿的地方 = 真正重要的信号<br>流畅的叙述 = 套话<br>沉默 3 秒 + 眼神飘 = 重要线索</div>
  </div>
</div>

<div class="note">⚠ 5 原则做不到位 = 访谈完感觉收获很大但写不出任何具体信号 — 这就是无效访谈。</div>
""" + FOOTER.format(title="情境访谈5原则")

# ============ Card 6: HMW 公式 ============
card6 = TEMPLATE_HEAD.format(title="HMW 公式", card_no="C06", css=CSS) + """
<h1><span class="accent">HMW</span> 公式</h1>
<div class="sub-title">How Might We — 把洞察变成可探索的问题</div>

<div class="formula">
  我们如何能 + <span class="gold">动词</span> + <span class="gold">对象</span>，让 <span class="red">具体的人</span> 在 <span class="red">具体的场景</span> 中实现 <span class="gold">关键价值</span>？
</div>

<h2>5 个 HMW 候选示例（健康场景）</h2>
<ul class="tight">
  <li>我们如何能 <b>简化</b> 健康饮食 <b>决策</b>，让 <b>35 岁职场妈妈</b> 在 <b>通勤路上</b> 实现 <b>不再内疚</b>？</li>
  <li>我们如何能 <b>推迟</b> 健康决策 <b>时刻</b>，让 <b>独居青年</b> 在 <b>周末采购时</b> 实现 <b>不焦虑</b>？</li>
  <li>我们如何能 <b>消除</b> 健身 <b>入门门槛</b>，让 <b>500 米内的居民</b> 在 <b>下班后</b> 实现 <b>自然开始</b>？</li>
  <li>我们如何能 <b>延后</b> 健康 <b>承诺</b>，让 <b>犹豫的 5 分钟用户</b> 在 <b>进店瞬间</b> 实现 <b>不被打扰</b>？</li>
  <li>我们如何能 <b>重塑</b> 健康 <b>反馈</b>，让 <b>不喜欢被监督的会员</b> 在 <b>运动后</b> 实现 <b>不被打扰的成就感</b>？</li>
</ul>

<h2>3 项自检（每条 HMW 必检）</h2>
<div class="checklist">
  <div class="item">动词是动词（<b>不是名词</b>，不是"提升/优化/改善"这类形容词）</div>
  <div class="item">对象是 1 个具体人（<b>不是用户群</b>，不是"年轻人/管理者"）</div>
  <div class="item">价值是可观察行为（<b>不是形容词</b>，不是"更好/更快/更智能"）</div>
</div>

<div class="note">📌 5 个 HMW 中至少 3 个完全符合 3 项自检才算合格。<b>没有具体人 = 不是 HMW，是主题词</b>。</div>
""" + FOOTER.format(title="HMW公式")

# ============ Card 7: MVP 不是产品是实验 ============
card7 = TEMPLATE_HEAD.format(title="MVP 不是产品是实验", card_no="C07", css=CSS) + """
<h1>MVP 不是产品<br><span class="accent">是实验</span></h1>
<div class="sub-title">Minimum Viable Experiment — 用最低保真度学最多东西</div>

<div class="lead">大多数团队的错误：把 MVP 理解成"小一号的产品"。<br>正确理解：MVP 是 <b>最小可行实验</b>，目的是<b>验证一个假设</b>，不是上线一个功能。</div>

<h2>原型保真度 5 级（从低到高）</h2>
<div class="grid-3">
  <div class="box">
    <div class="tag">L1 · 一句剧本</div>
    <div class="title">假装销售</div>
    <div class="desc">用一段话描述方案，对 5 个人讲一遍。<br><b>成本：</b>0<br><b>学到的：</b>用户的反应</div>
  </div>
  <div class="box">
    <div class="tag">L2 · 纸面原型</div>
    <div class="title">一张草图</div>
    <div class="desc">在纸上画 3-5 个界面，让用户点一遍。<br><b>成本：</b>1 小时<br><b>学到的：</b>用户的行为路径</div>
  </div>
  <div class="box">
    <div class="tag">L3 · 角色扮演</div>
    <div class="title">真实服务</div>
    <div class="desc">人工模拟服务，1 个人扮演系统，1 个扮演用户。<br><b>成本：</b>1 天<br><b>学到的：</b>真实体验</div>
  </div>
  <div class="box gold">
    <div class="tag">L4 · 单功能 demo</div>
    <div class="title">可点击 demo</div>
    <div class="desc">开发 1 个核心流程，别的都是占位。<br><b>成本：</b>1-2 周<br><b>学到的：</b>真实可用性</div>
  </div>
  <div class="box sage">
    <div class="tag">L5 · 灰度上线</div>
    <div class="title">10 个真实用户</div>
    <div class="desc">上线 1 个最小功能给 10 个真实用户用。<br><b>成本：</b>1 个月<br><b>学到的：</b>真实行为数据</div>
  </div>
  <div class="box red">
    <div class="tag">原则</div>
    <div class="title" style="color:white">从 L1 开始</div>
    <div class="desc" style="color:white"><b>永远从最低保真度开始</b>，学到了再加保真度。<br>直接做 L4 = 90% 时间浪费在错的方向上。</div>
  </div>
</div>

<div class="note">⚠ 反模式：直接做 L4 demo 因为"产品经理想看完整的"。产品经理想看的不是产品完整，是<b>假设验证完整</b>。</div>
""" + FOOTER.format(title="MVP原型光谱")

# ============ Card 8: 30/60/90 回看 ============
card8 = TEMPLATE_HEAD.format(title="30/60/90 天回看节奏", card_no="C08", css=CSS) + """
<h1>30 / 60 / 90 <span class="accent">回看</span></h1>
<div class="sub-title">课程结束不是终点 — 3 个时间窗口看真实变化</div>

<div class="lead">课程满意度是<b>最危险的评估指标</b>。满意度高 ≠ 行为变化。<br>30/60/90 天用<b>可观察行为</b>评估，不用意愿。</div>

<div class="grid-3">
  <div class="box">
    <div class="tag">30 天</div>
    <div class="num" style="font-size:36pt">30</div>
    <div class="title">完成 1 次小实验</div>
    <div class="desc">
      <b>任务：</b>完成承诺卡上的 1 个小实验<br>
      <b>自评：</b>用 T02 重新打分 6 维度<br>
      <b>提交：</b>30 天实验记录 1 份
    </div>
  </div>
  <div class="box gold">
    <div class="tag">60 天</div>
    <div class="num" style="font-size:36pt">60</div>
    <div class="title">形成自己的节拍</div>
    <div class="desc">
      <b>任务：</b>选 1 个轻量应用坚持 30 天<br>
      <b>团队：</b>每月 1 次 HMW 分享会<br>
      <b>管理者：</b>1 对 1 辅导 1 次
    </div>
  </div>
  <div class="box red">
    <div class="tag">90 天</div>
    <div class="num" style="font-size:36pt;color:white">90</div>
    <div class="title" style="color:white">看见行为 / 业务变化</div>
    <div class="desc" style="color:white">
      <b>任务：</b>用 T24 完整旅程记录回看<br>
      <b>评估：</b>用具体数据（不是感受）<br>
      <b>呈现：</b>团队 / 上级 1 次汇报
    </div>
  </div>
</div>

<h2>每个时间窗口的"看见 vs 没看见"判断</h2>
<div class="checklist">
  <div class="item">我能说出 1 个具体行为变化吗？— 看具体行为，不看感受</div>
  <div class="item">这个变化能用 1 个数字描述吗？— 数字 = 可信度</div>
  <div class="item">我有没有重新启动 1 个 HMW？— 持续探索 = 内化</div>
  <div class="item">团队有没有人开始用我的方法？— 教别人 = 真掌握</div>
</div>

<div class="note">📌 3 个时间窗口都 <b>"没有"</b> = 课程失效，回去看 T22 承诺卡是不是写得太模糊。</div>
""" + FOOTER.format(title="30/60/90回看")

# Save
cards = {
    "01_感构验创新循环.html": card1,
    "02_问解造工具地图.html": card2,
    "03_6项创新者能力.html": card3,
    "04_AI时代三大陷阱.html": card4,
    "05_情境访谈5原则.html": card5,
    "06_HMW公式.html": card6,
    "07_MVP原型光谱.html": card7,
    "08_30-60-90天回看.html": card8,
}

for filename, content in cards.items():
    path = os.path.join(OUT_DIR, filename)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
import sys
sys.stdout.buffer.write(f"[OK] {path}\n".encode('utf-8'))
sys.stdout.buffer.write(f"[Total] {len(cards)} cards\n".encode('utf-8'))
