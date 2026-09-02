# -*- coding: utf-8 -*-
"""Build all remaining HTML files 03-10 in one go."""
import os
import sys

OUT_DIR = r"D:\2026年课程\ai课2026整理\AI时代的家庭教育\13_HTML可视化"

# Shared design system (matches file 01/02)
CSS = r"""
:root{
  --paper:#f5f0e6;
  --paper-2:#ebe3d2;
  --ink:#0a0a0a;
  --ink-soft:#3a3530;
  --ink-mute:#6b6258;
  --gold:#c9a96e;
  --gold-deep:#8a6f3a;
  --gold-light:#e6d4ad;
  --crimson:#8b2828;
  --crimson-deep:#5c1818;
  --teal:#2d4a3e;
  --rule:rgba(10,10,10,0.12);
  --serif:'Fraunces',Georgia,serif;
  --serif-cn:'Noto Serif SC',serif;
  --sans:'Inter Tight',-apple-system,sans-serif;
  --mono:'JetBrains Mono',monospace;
}
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{
  background:var(--paper);
  color:var(--ink);
  font-family:var(--serif-cn);
  font-size:16px;
  line-height:1.75;
  -webkit-font-smoothing:antialiased;
}
.wrap{max-width:1280px;margin:0 auto;padding:0 32px}
img{max-width:100%;display:block}
a{color:inherit;text-decoration:none}

.eyebrow{
  font-family:var(--mono);
  font-size:11px;
  letter-spacing:0.32em;
  text-transform:uppercase;
  color:var(--gold-deep);
  font-weight:500;
}
h1,h2,h3,h4{font-family:var(--serif);font-weight:600;line-height:1.2;letter-spacing:-0.02em}
h1{font-size:clamp(48px,7vw,88px);font-style:italic}
h2{font-size:clamp(32px,4vw,48px);font-style:italic}
h3{font-size:24px}
h4{font-size:18px;font-weight:500}
em{font-style:italic;color:var(--crimson)}
strong{font-weight:600}

#progress{position:fixed;top:0;left:0;height:3px;background:linear-gradient(90deg,var(--gold),var(--crimson));z-index:1000;width:0;transition:width 0.1s linear}

#topnav{position:sticky;top:0;z-index:100;background:rgba(245,240,230,0.92);backdrop-filter:blur(12px);border-bottom:1px solid var(--rule)}
#topnav-inner{display:flex;align-items:center;justify-content:space-between;padding:14px 32px;max-width:1280px;margin:0 auto;flex-wrap:wrap;gap:16px}
#topnav-brand{font-family:var(--serif);font-size:18px;font-style:italic;font-weight:600}
#topnav-brand em{color:var(--crimson);font-style:normal}
#topnav-links{display:flex;gap:24px;flex-wrap:wrap}
#topnav-links a{font-family:var(--mono);font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:var(--ink-soft);padding:6px 0;border-bottom:1px solid transparent;transition:all 0.2s}
#topnav-links a:hover{color:var(--crimson);border-color:var(--crimson)}
#topnav-links a.active{color:var(--crimson);border-color:var(--crimson)}

.hero{min-height:90vh;display:flex;align-items:center;position:relative;overflow:hidden;background:linear-gradient(180deg,var(--paper) 0%,var(--paper-2) 100%)}
.hero-inner{padding:120px 32px 80px;max-width:1280px;margin:0 auto;position:relative;z-index:2}
.hero-meta{display:grid;grid-template-columns:repeat(4,1fr);gap:32px;margin-bottom:48px;padding-bottom:32px;border-bottom:1px solid var(--rule)}
.hero-meta-item .eyebrow{display:block;margin-bottom:8px}
.hero-meta-item .meta-value{font-family:var(--serif);font-size:20px;font-weight:500}
.hero-title{font-size:clamp(56px,8vw,112px);line-height:0.95;margin-bottom:32px}
.hero-subtitle{font-size:clamp(20px,2.2vw,28px);color:var(--ink-soft);max-width:780px;margin-bottom:48px}
.hero-tagline{font-family:var(--serif);font-size:24px;font-style:italic;color:var(--crimson);padding:24px 0;border-top:1px solid var(--rule);border-bottom:1px solid var(--rule)}
.hero-tagline strong{font-weight:600;font-style:normal;color:var(--ink)}

.section{padding:120px 0;position:relative}
.section-light{background:var(--paper)}
.section-cream{background:var(--paper-2)}
.section-ink{background:var(--ink);color:var(--paper)}
.section-ink .eyebrow{color:var(--gold)}
.section-ink em{color:var(--gold)}

.section-num{font-family:var(--serif);font-size:120px;font-style:italic;color:var(--gold);opacity:0.3;position:absolute;top:40px;right:40px;line-height:1;pointer-events:none}
.section-eyebrow{margin-bottom:24px}
.section-title{font-size:clamp(40px,5vw,64px);margin-bottom:32px;max-width:900px}
.section-lede{font-size:20px;color:var(--ink-soft);max-width:780px;margin-bottom:64px}

.grid-2{display:grid;grid-template-columns:1fr 1fr;gap:48px}
.grid-3{display:grid;grid-template-columns:repeat(3,1fr);gap:32px}
.grid-4{display:grid;grid-template-columns:repeat(4,1fr);gap:24px}

.card{background:#fff;border:1px solid var(--rule);padding:32px;border-radius:2px;transition:all 0.3s}
.card:hover{transform:translateY(-2px);box-shadow:0 12px 32px rgba(0,0,0,0.08)}
.card-num{font-family:var(--mono);font-size:11px;letter-spacing:0.2em;color:var(--gold-deep);margin-bottom:12px}
.card-title{font-family:var(--serif);font-size:22px;font-style:italic;margin-bottom:12px}
.card-body{color:var(--ink-soft);font-size:15px;line-height:1.7}
.card-tag{display:inline-block;font-family:var(--mono);font-size:10px;letter-spacing:0.18em;text-transform:uppercase;padding:4px 10px;background:var(--gold-light);color:var(--ink);margin-top:16px}

.pullquote{padding:48px 0;text-align:center;border-top:1px solid var(--rule);border-bottom:1px solid var(--rule);margin:64px 0}
.pullquote-text{font-family:var(--serif);font-size:clamp(24px,3vw,36px);font-style:italic;line-height:1.5;max-width:880px;margin:0 auto}
.pullquote-cite{font-family:var(--mono);font-size:11px;letter-spacing:0.32em;text-transform:uppercase;color:var(--gold-deep);margin-top:24px}
.pullquote-cite span{margin:0 12px}

#sideNav{position:fixed;right:24px;top:50%;transform:translateY(-50%);z-index:50;display:flex;flex-direction:column;gap:12px}
.chapter-side-dot{width:8px;height:8px;border-radius:50%;background:var(--rule);display:block;transition:all 0.2s;position:relative}
.chapter-side-dot:hover{background:var(--crimson);transform:scale(1.5)}
.chapter-side-dot.active{background:var(--crimson);transform:scale(1.8)}

footer{padding:80px 32px 40px;background:var(--ink);color:var(--paper);text-align:center;border-top:1px solid var(--rule)}
footer strong{font-family:var(--serif);font-size:18px;font-style:italic;display:block;margin-bottom:12px}
footer .copyright{font-family:var(--mono);font-size:11px;letter-spacing:0.18em;color:rgba(245,240,230,0.6);text-transform:uppercase}

.reveal{opacity:0;transform:translateY(20px);transition:all 0.8s ease}
.reveal.visible{opacity:1;transform:translateY(0)}

@media (max-width:1024px){
  .grid-3{grid-template-columns:repeat(2,1fr)}
  .grid-4{grid-template-columns:repeat(2,1fr)}
  .hero-meta{grid-template-columns:repeat(2,1fr)}
}
@media (max-width:768px){
  .grid-2,.grid-3,.grid-4{grid-template-columns:1fr;gap:24px}
  .hero-meta{grid-template-columns:1fr 1fr;gap:16px}
  .section{padding:64px 0}
  .wrap{padding:0 20px}
  #sideNav{display:none}
}
"""

JS = r"""
const progress=document.getElementById('progress');
function updateProgress(){
  const h=document.documentElement;
  const max=h.scrollHeight-h.clientHeight;
  const pct=max>0?(h.scrollTop/max)*100:0;
  progress.style.width=pct+'%';
}
window.addEventListener('scroll',updateProgress);
window.addEventListener('resize',updateProgress);

const observer=new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add('visible')});
},{threshold:0.1});
document.querySelectorAll('.card,.pain,.takeaway,.chapter-row,.model-block,.pullquote,.stat-block,.step,.lesson,.instruction').forEach(el=>{
  el.classList.add('reveal');observer.observe(el);
});
updateProgress();
"""

def make_html(title, nav_links, content, filename, hero_meta, copyright_title):
    """Build a complete HTML page."""
    nav_html = ""
    for label, anchor in nav_links:
        nav_html += f'<a href="#{anchor}">{label}</a>'

    hero_meta_html = ""
    if hero_meta:
        for label, value in hero_meta:
            hero_meta_html += f"""
      <div class="hero-meta-item">
        <span class="eyebrow">{label}</span>
        <div class="meta-value">{value}</div>
      </div>"""

    html = f"""<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>{title}</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&family=Inter+Tight:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Noto+Serif+SC:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>
{CSS}
</style>
</head>
<body>
<div id="progress"></div>
<nav id="topnav">
  <div id="topnav-inner">
    <a href="#hero" id="topnav-brand">AI 时代的<em>家庭教育</em></a>
    <div id="topnav-links">
      {nav_html}
    </div>
  </div>
</nav>
<aside id="sideNav"></aside>
{content}
<footer>
  <strong>{copyright_title}</strong>
  <div class="copyright">© 罗老师《AI 时代的家庭教育》 未经授权禁止复制、传播、改编本课程内容。</div>
  <div class="copyright" style="margin-top:8px;font-size:12px">{title}</div>
</footer>
<script>
{JS}
</script>
</body>
</html>
"""
    out_path = os.path.join(OUT_DIR, filename)
    with open(out_path, 'w', encoding='utf-8') as f:
        f.write(html)
    return out_path, len(html.split('\n'))


# ============================================================
# FILE 03: 学员手册_可视化版.html
# ============================================================

FILE_03_CONTENT = """
<section class="hero" id="hero">
  <div class="hero-inner">
    <div class="eyebrow" style="margin-bottom:32px">STUDENT HANDBOOK · 学员手册 v1.0</div>
    <h1 class="hero-title">AI 时代的<br>家庭<em>教育</em></h1>
    <p class="hero-subtitle">学员<em>手册</em>：从走进教室到走出教室的全程陪伴</p>
    <div class="hero-meta">
      <div class="hero-meta-item">
        <span class="eyebrow">手册定位</span>
        <div class="meta-value">学员在课程中的"操作说明书"</div>
      </div>
      <div class="hero-meta-item">
        <span class="eyebrow">配套课程</span>
        <div class="meta-value">13 讲系统课</div>
      </div>
      <div class="hero-meta-item">
        <span class="eyebrow">核心价值</span>
        <div class="meta-value">看见每一步在做什么 + 为什么</div>
      </div>
      <div class="hero-meta-item">
        <span class="eyebrow">建议使用</span>
        <div class="meta-value">课前 1 周 + 课中 + 课后 30 天</div>
      </div>
    </div>
    <div class="hero-tagline">
      <strong>这本手册，是为了让你的每一分投入都物超所值。</strong><br>
      你不需要担心"漏了什么"、"跟不上了"——按手册走，就是最完整的学习路径。
    </div>
  </div>
</section>

<section class="section section-light" id="welcome">
  <div class="section-num">01</div>
  <div class="wrap">
    <div class="section-eyebrow eyebrow">CHAPTER 01 · 手册寄语</div>
    <h2 class="section-title">写给<em>正在翻开这本手册</em>的你</h2>
    <p class="section-lede">你好，我是罗老师。这本手册不是一本"读了就完"的资料——它是一本"翻开来对照做"的工具书。</p>
    <div class="grid-2" style="margin-top:48px">
      <div class="card">
        <div class="card-num">手册的 3 个作用</div>
        <div class="card-title">理解 · 对照 · 行动</div>
        <div class="card-body">
          <p style="margin-bottom:12px"><strong>理解</strong>：让你知道每一步"在做什么" + "为什么做"——而不是被动接受指令。</p>
          <p style="margin-bottom:12px"><strong>对照</strong>：让你能在学习中随时"对位"——你当前学到第几讲、当前应做第几件事、当前在哪一阶段。</p>
          <p><strong>行动</strong>：每个章节都配有"行动清单"——看完这一讲你应该立即做什么、为什么这么做、什么时候做。</p>
        </div>
      </div>
      <div class="card">
        <div class="card-num">手册的 3 个特点</div>
        <div class="card-title">完整 · 透明 · 可执行</div>
        <div class="card-body">
          <p style="margin-bottom:12px"><strong>完整</strong>：从课前 1 周、课中 2 天、课后 30 天、长期 3 年——全周期都有指引。</p>
          <p style="margin-bottom:12px"><strong>透明</strong>：你每做一件事之前，都知道"为什么做"、"做到什么样算合格"、做完"下一步是什么"。</p>
          <p><strong>可执行</strong>：每个行动都有"具体步骤" + "完成标准"——不是抽象建议，是可以立即上手的事。</p>
        </div>
      </div>
    </div>
    <div class="pullquote" style="margin-top:64px">
      <p class="pullquote-text">如果我只能留给你 3 句话——<br>一、不要追所有 AI 工具更新；二、不要被鸡娃焦虑左右；三、建立你自己的系统。</p>
      <p class="pullquote-cite"><span></span>罗老师 · 寄语学员<span></span></p>
    </div>
  </div>
</section>

<section class="section section-cream" id="before">
  <div class="section-num">02</div>
  <div class="wrap">
    <div class="section-eyebrow eyebrow">CHAPTER 02 · 课前 1 周</div>
    <h2 class="section-title">开课前 7 天的<em>5 个准备</em></h2>
    <p class="section-lede">开课前 1 周，你不需要学完所有资料——你只需要做这 5 件事：</p>
    <div class="grid-3">
      <div class="step card">
        <div class="card-num">第 1 天</div>
        <div class="card-title">读完课前导读</div>
        <div class="card-body">
          <p>5 分钟的课前导读会让你对"这门课为什么存在"有完整理解——避免你带着"我只是想学一个 AI 工具"的浅层期待进教室。</p>
          <div class="card-tag">5 分钟</div>
        </div>
      </div>
      <div class="step card">
        <div class="card-num">第 2-3 天</div>
        <div class="card-title">速览 13 讲大纲</div>
        <div class="card-body">
          <p>用 30 分钟时间速览 13 讲大纲——不需要记住细节，只需要知道"哪几讲对我最关键"。这一遍是大脑地图的"占位"。</p>
          <div class="card-tag">30 分钟</div>
        </div>
      </div>
      <div class="step card">
        <div class="card-num">第 4-5 天</div>
        <div class="card-title">完成家庭自评</div>
        <div class="card-body">
          <p>30 题家庭现状自评问卷——拿到你的家庭诊断报告。这是你的"训前基线"，30 天后还要再做一次，看见变化。</p>
          <div class="card-tag">15 分钟</div>
        </div>
      </div>
      <div class="step card">
        <div class="card-num">第 6 天</div>
        <div class="card-title">锁定家庭场景</div>
        <div class="card-body">
          <p>填写"我的家庭场景卡"——选定一个你最想改善的家庭场景（作业辅导 / 兴趣探索 / 沟通对话等），整个课程都围绕这个场景迭代。</p>
          <div class="card-tag">10 分钟</div>
        </div>
      </div>
      <div class="step card">
        <div class="card-num">第 7 天</div>
        <div class="card-title">检查行前清单</div>
        <div class="card-body">
          <p>对照"行前清单"做最后检查——心态、约定、工具、心态 4 个维度，缺什么补什么。开课前 1 天晚上再扫一眼。</p>
          <div class="card-tag">3 分钟</div>
        </div>
      </div>
      <div class="card" style="background:var(--crimson);color:var(--paper);border-color:var(--crimson)">
        <div class="card-num" style="color:var(--gold)">重要提醒</div>
        <div class="card-title" style="color:var(--paper)">不空着进教室</div>
        <div class="card-body" style="color:rgba(245,240,230,0.85)">
          唯一一件真正重要的事：<strong style="color:var(--gold)">别空着进教室</strong>。带着你的家庭诊断报告 + 场景卡 + 一点"我想看看自己家庭能不能不一样"的好奇心，就够了。
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section section-light" id="during">
  <div class="section-num">03</div>
  <div class="wrap">
    <div class="section-eyebrow eyebrow">CHAPTER 03 · 课中 2 天</div>
    <h2 class="section-title">课堂上 12 小时<em>在做什么</em></h2>
    <p class="section-lede">线下版课程是 2 天，每天 6 小时。每天的结构都遵循"学-练-评-聊"四步循环——不是单向输入，是共同探索。</p>

    <h3 style="margin-top:48px;margin-bottom:24px;font-family:var(--serif);font-style:italic">Day 1 · 认知觉醒 + 系统建立</h3>
    <table style="width:100%;border-collapse:collapse;background:#fff;font-family:var(--sans)">
      <thead>
        <tr style="background:var(--ink);color:var(--paper)">
          <th style="padding:16px 12px;text-align:left;font-family:var(--mono);font-size:11px;letter-spacing:0.18em;text-transform:uppercase">时段</th>
          <th style="padding:16px 12px;text-align:left;font-family:var(--mono);font-size:11px;letter-spacing:0.18em;text-transform:uppercase">内容</th>
          <th style="padding:16px 12px;text-align:left;font-family:var(--mono);font-size:11px;letter-spacing:0.18em;text-transform:uppercase">你做什么</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom:1px solid var(--rule)"><td style="padding:16px 12px;font-family:var(--mono);color:var(--crimson)">9:00-9:30</td><td style="padding:16px 12px;font-weight:600">开场 + 自我介绍 + 学习公约</td><td style="padding:16px 12px;color:var(--ink-soft)">建立基本连接：我是谁、为什么来</td></tr>
        <tr style="border-bottom:1px solid var(--rule);background:var(--paper-2)"><td style="padding:16px 12px;font-family:var(--mono);color:var(--crimson)">9:30-10:30</td><td style="padding:16px 12px;font-weight:600">发刊词 + 先导课</td><td style="padding:16px 12px;color:var(--ink-soft)">建立完整认知地图</td></tr>
        <tr style="border-bottom:1px solid var(--rule)"><td style="padding:16px 12px;font-family:var(--mono);color:var(--crimson)">10:30-12:00</td><td style="padding:16px 12px;font-weight:600">问题 1-2：超越竞争 + 自学能力</td><td style="padding:16px 12px;color:var(--ink-soft)">认识"超越竞争能力图谱"和"以生产为导向"方法</td></tr>
        <tr style="border-bottom:1px solid var(--rule);background:var(--paper-2)"><td style="padding:16px 12px;font-family:var(--mono);color:var(--crimson)">12:00-13:30</td><td style="padding:16px 12px;font-weight:600">午餐 + 午休</td><td style="padding:16px 12px;color:var(--ink-soft)">鼓励跨组交流</td></tr>
        <tr style="border-bottom:1px solid var(--rule)"><td style="padding:16px 12px;font-family:var(--mono);color:var(--crimson)">13:30-15:30</td><td style="padding:16px 12px;font-weight:600">问题 3-5：真实问题 + 判断力 + 基础</td><td style="padding:16px 12px;color:var(--ink-soft)">掌握"家庭真实问题池""AI 输出三审制""AI 辅助写作"</td></tr>
        <tr style="border-bottom:1px solid var(--rule);background:var(--paper-2)"><td style="padding:16px 12px;font-family:var(--mono);color:var(--crimson)">15:30-17:00</td><td style="padding:16px 12px;font-weight:600">问题 6-7：三锚 + 协议</td><td style="padding:16px 12px;color:var(--ink-soft)">设计自己家庭的三锚 + 起草家庭 AI 使用协议</td></tr>
        <tr><td style="padding:16px 12px;font-family:var(--mono);color:var(--crimson)">17:00-18:00</td><td style="padding:16px 12px;font-weight:600">Day 1 复盘 + 家庭作业</td><td style="padding:16px 12px;color:var(--ink-soft)">家庭协议带回，配偶和孩子讨论</td></tr>
      </tbody>
    </table>

    <h3 style="margin-top:64px;margin-bottom:24px;font-family:var(--serif);font-style:italic">Day 2 · 系统优化 + 长期规划</h3>
    <table style="width:100%;border-collapse:collapse;background:#fff;font-family:var(--sans)">
      <thead>
        <tr style="background:var(--ink);color:var(--paper)">
          <th style="padding:16px 12px;text-align:left;font-family:var(--mono);font-size:11px;letter-spacing:0.18em;text-transform:uppercase">时段</th>
          <th style="padding:16px 12px;text-align:left;font-family:var(--mono);font-size:11px;letter-spacing:0.18em;text-transform:uppercase">内容</th>
          <th style="padding:16px 12px;text-align:left;font-family:var(--mono);font-size:11px;letter-spacing:0.18em;text-transform:uppercase">你做什么</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom:1px solid var(--rule)"><td style="padding:16px 12px;font-family:var(--mono);color:var(--crimson)">9:00-10:30</td><td style="padding:16px 12px;font-weight:600">问题 8-9：亲子共学 + 兴趣</td><td style="padding:16px 12px;color:var(--ink-soft)">设计"亲子共学"和"兴趣探索"机制</td></tr>
        <tr style="border-bottom:1px solid var(--rule);background:var(--paper-2)"><td style="padding:16px 12px;font-family:var(--mono);color:var(--crimson)">10:30-12:00</td><td style="padding:16px 12px;font-weight:600">问题 10-11：评估 + 路线图</td><td style="padding:16px 12px;color:var(--ink-soft)">完成"成长评估表"和"3 年路线图"</td></tr>
        <tr style="border-bottom:1px solid var(--rule)"><td style="padding:16px 12px;font-family:var(--mono);color:var(--crimson)">12:00-13:30</td><td style="padding:16px 12px;font-weight:600">午餐 + 午休</td><td style="padding:16px 12px;color:var(--ink-soft)">—</td></tr>
        <tr style="border-bottom:1px solid var(--rule);background:var(--paper-2)"><td style="padding:16px 12px;font-family:var(--mono);color:var(--crimson)">13:30-15:00</td><td style="padding:16px 12px;font-weight:600">问题 12：误区避坑 + 自查</td><td style="padding:16px 12px;color:var(--ink-soft)">完成"AI 家庭教育误区自查表"</td></tr>
        <tr style="border-bottom:1px solid var(--rule)"><td style="padding:16px 12px;font-family:var(--mono);color:var(--crimson)">15:00-16:30</td><td style="padding:16px 12px;font-weight:600">结刊词 + 30 天行动清单讲解</td><td style="padding:16px 12px;color:var(--ink-soft)">拿到 30 天清单 + 制定自己家庭的 30 天计划</td></tr>
        <tr style="border-bottom:1px solid var(--rule);background:var(--paper-2)"><td style="padding:16px 12px;font-family:var(--mono);color:var(--crimson)">16:30-17:30</td><td style="padding:16px 12px;font-weight:600">小组分享 + 课程结业</td><td style="padding:16px 12px;color:var(--ink-soft)">每个小组分享家庭方案</td></tr>
        <tr><td style="padding:16px 12px;font-family:var(--mono);color:var(--crimson)">17:30-18:00</td><td style="padding:16px 12px;font-weight:600">结业证书颁发 + 合影</td><td style="padding:16px 12px;color:var(--ink-soft)">拿到结业证书</td></tr>
      </tbody>
    </table>
  </div>
</section>

<section class="section section-cream" id="after">
  <div class="section-num">04</div>
  <div class="wrap">
    <div class="section-eyebrow eyebrow">CHAPTER 04 · 课后 30 天</div>
    <h2 class="section-title">课后 30 天的<em>3 个阶段</em></h2>
    <p class="section-lede">课后 30 天，是把"知道"变成"做到"的关键期。这个月分 3 个阶段，每个阶段有不同重点。</p>

    <div class="grid-3">
      <div class="card">
        <div class="card-num">第 1-10 天</div>
        <div class="card-title">建立基础认知</div>
        <div class="card-body" style="margin-top:16px">
          <p style="margin-bottom:8px"><strong>关键词：开始</strong></p>
          <p style="margin-bottom:8px">每天 1 个小任务，建立家庭 AI 使用习惯。</p>
          <p style="margin-bottom:8px"><strong>10 天任务示例：</strong></p>
          <ul style="list-style:none;padding:0">
            <li style="padding:4px 0;color:var(--ink-soft)">Day 1-2：选定家庭场景卡</li>
            <li style="padding:4px 0;color:var(--ink-soft)">Day 3-4：起草 AI 使用协议</li>
            <li style="padding:4px 0;color:var(--ink-soft)">Day 5-6：第一次亲子共学</li>
            <li style="padding:4px 0;color:var(--ink-soft)">Day 7-8：第一次真实问题</li>
            <li style="padding:4px 0;color:var(--ink-soft)">Day 9-10：完成第 1 周复盘</li>
          </ul>
        </div>
        <div class="card-tag">建立基础</div>
      </div>

      <div class="card">
        <div class="card-num">第 11-20 天</div>
        <div class="card-title">建立技能</div>
        <div class="card-body" style="margin-top:16px">
          <p style="margin-bottom:8px"><strong>关键词：熟练</strong></p>
          <p style="margin-bottom:8px">从"尝试"到"稳定"，形成家庭 AI 协作机制。</p>
          <p style="margin-bottom:8px"><strong>10 天任务示例：</strong></p>
          <ul style="list-style:none;padding:0">
            <li style="padding:4px 0;color:var(--ink-soft)">Day 11-12：优化协议</li>
            <li style="padding:4px 0;color:var(--ink-soft)">Day 13-14：完成 2 个真实问题</li>
            <li style="padding:4px 0;color:var(--ink-soft)">Day 15-16：使用 AI 输出三审表</li>
            <li style="padding:4px 0;color:var(--ink-soft)">Day 17-18：第二次亲子共学</li>
            <li style="padding:4px 0;color:var(--ink-soft)">Day 19-20：第 2 周复盘</li>
          </ul>
        </div>
        <div class="card-tag">建立技能</div>
      </div>

      <div class="card">
        <div class="card-num">第 21-30 天</div>
        <div class="card-title">建立系统</div>
        <div class="card-body" style="margin-top:16px">
          <p style="margin-bottom:8px"><strong>关键词：习惯</strong></p>
          <p style="margin-bottom:8px">让 AI 协作成为家庭日常，建立 3 年路线图雏形。</p>
          <p style="margin-bottom:8px"><strong>10 天任务示例：</strong></p>
          <ul style="list-style:none;padding:0">
            <li style="padding:4px 0;color:var(--ink-soft)">Day 21-22：第 3 个真实问题</li>
            <li style="padding:4px 0;color:var(--ink-soft)">Day 23-24：AI 兴趣探索</li>
            <li style="padding:4px 0;color:var(--ink-soft)">Day 25-26：完成成长评估</li>
            <li style="padding:4px 0;color:var(--ink-soft)">Day 27-28：起草 3 年路线图</li>
            <li style="padding:4px 0;color:var(--ink-soft)">Day 29-30：30 天复盘</li>
          </ul>
        </div>
        <div class="card-tag">建立系统</div>
      </div>
    </div>

    <div class="pullquote" style="margin-top:80px">
      <p class="pullquote-text">课后 30 天的复盘报告，是<em>看见自己家庭变化</em>最清晰的方式。</p>
      <p class="pullquote-cite"><span></span>罗老师 · 课后指引<span></span></p>
    </div>
  </div>
</section>

<section class="section section-light" id="longterm">
  <div class="section-num">05</div>
  <div class="wrap">
    <div class="section-eyebrow eyebrow">CHAPTER 05 · 课后 3 年</div>
    <h2 class="section-title">课后 3 年的<em>3 个阶段</em></h2>
    <p class="section-lede">课后不是终点，是起点。下面 3 个阶段帮你看清未来 3 年的家庭 AI 教育方向。</p>

    <h3 style="margin-top:48px;margin-bottom:24px;font-family:var(--serif);font-style:italic">第 1 阶段：入门年（0-12 个月）</h3>
    <div class="grid-2">
      <div class="card">
        <div class="card-title">家庭核心任务</div>
        <div class="card-body" style="margin-top:16px">
          <p style="margin-bottom:8px">✓ 跑通 1 个核心场景（30 天清单完成）</p>
          <p style="margin-bottom:8px">✓ 签署家庭 AI 使用协议</p>
          <p style="margin-bottom:8px">✓ 完成家庭能力评估表</p>
          <p style="margin-bottom:8px">✓ 完成 3 次亲子共学</p>
          <p style="margin-bottom:8px">✓ 完成 3 个家庭真实问题</p>
        </div>
        <div class="card-tag">入门年</div>
      </div>
      <div class="card">
        <div class="card-title">孩子成长标志</div>
        <div class="card-body" style="margin-top:16px">
          <p style="margin-bottom:8px">✓ 知道 AI 是什么、能做什么</p>
          <p style="margin-bottom:8px">✓ 会用 AI 完成基础任务</p>
          <p style="margin-bottom:8px">✓ 知道 AI 输出的边界</p>
          <p style="margin-bottom:8px">✓ 习惯"先想清楚再用 AI"</p>
          <p style="margin-bottom:8px">✓ 主动用 AI 探索兴趣</p>
        </div>
        <div class="card-tag">入门年</div>
      </div>
    </div>

    <h3 style="margin-top:64px;margin-bottom:24px;font-family:var(--serif);font-style:italic">第 2 阶段：熟练年（12-24 个月）</h3>
    <div class="grid-2">
      <div class="card">
        <div class="card-title">家庭核心任务</div>
        <div class="card-body" style="margin-top:16px">
          <p style="margin-bottom:8px">✓ 完成 6+ 个家庭真实问题</p>
          <p style="margin-bottom:8px">✓ 完成 6+ 次亲子共学</p>
          <p style="margin-bottom:8px">✓ 完成 1+ 个家庭 AI 作品</p>
          <p style="margin-bottom:8px">✓ 完成 AI 兴趣探索</p>
          <p style="margin-bottom:8px">✓ 复盘第一阶段，调整路线图</p>
        </div>
        <div class="card-tag">熟练年</div>
      </div>
      <div class="card">
        <div class="card-title">孩子成长标志</div>
        <div class="card-body" style="margin-top:16px">
          <p style="margin-bottom:8px">✓ 形成"以生产为导向"的自学方式</p>
          <p style="margin-bottom:8px">✓ 主动用 AI 解决真实问题</p>
          <p style="margin-bottom:8px">✓ 初步形成自己的 AI 协作风格</p>
          <p style="margin-bottom:8px">✓ 能在家庭中教父母用 AI</p>
        </div>
        <div class="card-tag">熟练年</div>
      </div>
    </div>

    <h3 style="margin-top:64px;margin-bottom:24px;font-family:var(--serif);font-style:italic">第 3 阶段：创新年（24-36 个月）</h3>
    <div class="grid-2">
      <div class="card">
        <div class="card-title">家庭核心任务</div>
        <div class="card-body" style="margin-top:16px">
          <p style="margin-bottom:8px">✓ 孩子主导 1+ 个 AI 项目</p>
          <p style="margin-bottom:8px">✓ 家庭 AI 协作机制成熟</p>
          <p style="margin-bottom:8px">✓ 完成 3 年路线图复盘</p>
          <p style="margin-bottom:8px">✓ 制定下一阶段 3 年计划</p>
        </div>
        <div class="card-tag">创新年</div>
      </div>
      <div class="card">
        <div class="card-title">孩子成长标志</div>
        <div class="card-body" style="margin-top:16px">
          <p style="margin-bottom:8px">✓ 具备"问题定义力"基础</p>
          <p style="margin-bottom:8px">✓ 具备"跨域整合力"基础</p>
          <p style="margin-bottom:8px">✓ 具备"情感连接力"基础</p>
          <p style="margin-bottom:8px">✓ 形成自己的价值观和方法论</p>
        </div>
        <div class="card-tag">创新年</div>
      </div>
    </div>
  </div>
</section>

<section class="section section-cream" id="faq">
  <div class="section-num">06</div>
  <div class="wrap">
    <div class="section-eyebrow eyebrow">CHAPTER 06 · 常见问题</div>
    <h2 class="section-title">学员<em>最常问</em>的 10 个问题</h2>
    <p class="section-lede">以下是过去 3 年学员最常问的问题——在课前/课中/课后都会遇到。建议收藏这一节，随时翻看。</p>

    <div class="grid-2">
      <div class="card">
        <div class="card-num">Q1</div>
        <div class="card-title">完全没用过 AI，能学会吗？</div>
        <div class="card-body">能。本课程为零基础设计。家长不需要先成为 AI 专家，只需掌握"三锚模型 + Prompt 工作流"。所有工具都给你模板，填进去就能用。</div>
      </div>
      <div class="card">
        <div class="card-num">Q2</div>
        <div class="card-title">孩子多大合适？</div>
        <div class="card-body">3-18 岁都适合，6-15 岁最优。小学阶段重点是"启蒙 + 习惯"；初中阶段重点是"自学 + 判断"；高中阶段重点是"创新 + 价值"。</div>
      </div>
      <div class="card">
        <div class="card-num">Q3</div>
        <div class="card-title">我一个人上课，孩子配偶不参与，能用上吗？</div>
        <div class="card-body">能。但建议至少和配偶讨论 1 次"家庭 AI 使用协议"，孩子的意见也至少征询 1 次。家庭 AI 教育不是家长独自完成的事。</div>
      </div>
      <div class="card">
        <div class="card-num">Q4</div>
        <div class="card-title">AI 工具更新太快，今天学的会不会过时？</div>
        <div class="card-body">不会。课程教的是"方法 + 模型 + 工具组合"，不是"某个 AI 工具的操作"。AI 怎么变，方法都在。本课程每年更新 1 次大版本。</div>
      </div>
      <div class="card">
        <div class="card-num">Q5</div>
        <div class="card-title">30 天清单真的能做完吗？</div>
        <div class="card-body">能。每天 1 个小任务，5-30 分钟。关键是"每天做"而不是"做多久"。我们建议家长每天固定一个时间段（如晚饭后 30 分钟）作为"家庭 AI 时光"。</div>
      </div>
      <div class="card">
        <div class="card-num">Q6</div>
        <div class="card-title">孩子不愿意用 AI 怎么办？</div>
        <div class="card-body">别强制。从孩子感兴趣的领域切入（动画/游戏/科学实验等），用"亲子共学"而非"家长教孩子用"。孩子有主动权，才会真正参与。</div>
      </div>
      <div class="card">
        <div class="card-num">Q7</div>
        <div class="card-title">孩子用了 AI 抄作业怎么办？</div>
        <div class="card-body">这是协议要解决的问题。协议要明确"作业场景的 AI 使用边界"——比如：可以问 AI 思路，不能直接抄答案；问完 AI 后必须自己写一遍等。</div>
      </div>
      <div class="card">
        <div class="card-num">Q8</div>
        <div class="card-title">需要给孩子报 AI 编程课吗？</div>
        <div class="card-body">不建议过早报班。先把家庭 AI 协作机制跑通（30 天清单），孩子有自驱力后再报。报班不能替代家庭教育。</div>
      </div>
      <div class="card">
        <div class="card-num">Q9</div>
        <div class="card-title">我家孩子 3 岁，太小了吧？</div>
        <div class="card-body">3 岁不学 AI 工具，但要学"和父母协作"——亲子共学的内容是共学，不是学 AI。3-6 岁的核心是"父母示范 + 共同探索"。</div>
      </div>
      <div class="card">
        <div class="card-num">Q10</div>
        <div class="card-title">课程学完后还会有后续支持吗？</div>
        <div class="card-body">有。课程结业后 30 天/90 天/180 天会有 3 次回访。同时有学员社群持续分享案例。每年 1 次大版本更新，可以申请重听。</div>
      </div>
    </div>
  </div>
</section>

<section class="section section-ink" id="promise">
  <div class="wrap" style="text-align:center;padding:0 32px">
    <div class="section-eyebrow eyebrow" style="color:var(--gold)">CHAPTER 07 · 我的承诺</div>
    <h2 class="section-title" style="margin:0 auto 32px;color:var(--paper)">对学员的<em>3 个承诺</em></h2>
    <p style="font-size:20px;color:rgba(245,240,230,0.85);max-width:780px;margin:0 auto 64px">这本手册里的每一个承诺，我都认真对待。</p>

    <div class="grid-3" style="text-align:left">
      <div class="card" style="background:rgba(245,240,230,0.05);border:1px solid rgba(201,169,110,0.3);color:var(--paper)">
        <div class="card-num" style="color:var(--gold)">承诺 01</div>
        <div class="card-title" style="color:var(--paper)">听得懂</div>
        <div class="card-body" style="color:rgba(245,240,230,0.85)">所有概念都用生活案例讲透。听不懂的概念，不进入课程。</div>
      </div>
      <div class="card" style="background:rgba(245,240,230,0.05);border:1px solid rgba(201,169,110,0.3);color:var(--paper)">
        <div class="card-num" style="color:var(--gold)">承诺 02</div>
        <div class="card-title" style="color:var(--paper)">用得上</div>
        <div class="card-body" style="color:rgba(245,240,230,0.85)">所有工具都有填写说明。拿到就能用，没有"还要再学一遍"的负担。</div>
      </div>
      <div class="card" style="background:rgba(245,240,230,0.05);border:1px solid rgba(201,169,110,0.3);color:var(--paper)">
        <div class="card-num" style="color:var(--gold)">承诺 03</div>
        <div class="card-title" style="color:var(--paper)">跟得上</div>
        <div class="card-body" style="color:rgba(245,240,230,0.85)">每年大版本更新。每年都有"重听通道"——不收任何额外费用。</div>
      </div>
    </div>

    <p style="margin:80px auto 0;font-family:var(--serif);font-size:28px;font-style:italic;color:var(--gold);max-width:880px">
      期待在课堂上见到你。<br>
      让我们一起，把<strong style="color:var(--paper)">"焦虑"</strong>变成<strong style="color:var(--paper)">"行动"</strong>。
    </p>
  </div>
</section>
"""

print("Building file 03...")
path, lines = make_html(
    title="AI 时代的家庭教育 · 学员手册 · 罗老师",
    nav_links=[
        ("寄语", "welcome"),
        ("课前 7 天", "before"),
        ("课中 2 天", "during"),
        ("课后 30 天", "after"),
        ("课后 3 年", "longterm"),
        ("常见问题", "faq"),
        ("承诺", "promise"),
    ],
    content=FILE_03_CONTENT,
    filename="03_学员手册_可视化版.html",
    hero_meta=None,
    copyright_title="罗老师《AI 时代的家庭教育：从焦虑到超越竞争的家庭行动系统》"
)
print(f"  -> {path} ({lines} lines)")

# ============================================================
# FILE 04: 讲师手册_可视化版.html
# ============================================================

FILE_04_CONTENT = """
<section class="hero" id="hero">
  <div class="hero-inner">
    <div class="eyebrow" style="margin-bottom:32px">INSTRUCTOR HANDBOOK · 讲师手册 v1.0</div>
    <h1 class="hero-title">AI 时代的<br>家庭<em>教育</em></h1>
    <p class="hero-subtitle">讲师<em>手册</em>：把每一次授课都做成"完整可复现的体验"</p>
    <div class="hero-meta">
      <div class="hero-meta-item">
        <span class="eyebrow">手册定位</span>
        <div class="meta-value">讲师的"现场操作指南"</div>
      </div>
      <div class="hero-meta-item">
        <span class="eyebrow">配套课程</span>
        <div class="meta-value">13 讲系统课（2 天 12h 线下）</div>
      </div>
      <div class="hero-meta-item">
        <span class="eyebrow">核心价值</span>
        <div class="meta-value">完整的授课设计 + 现场话术 + 应对预案</div>
      </div>
      <div class="hero-meta-item">
        <span class="eyebrow">使用建议</span>
        <div class="meta-value">备课时 + 授课中 + 课后复盘</div>
      </div>
    </div>
    <div class="hero-tagline">
      <strong>这本手册，是为了让每一位讲师都有底气说：</strong><br>
      "我教的是罗老师的设计，我清楚每一步在做什么。"
    </div>
  </div>
</section>

<section class="section section-light" id="philosophy">
  <div class="section-num">01</div>
  <div class="wrap">
    <div class="section-eyebrow eyebrow">CHAPTER 01 · 教学哲学</div>
    <h2 class="section-title">这门课的 4 个<em>教学原则</em></h2>
    <p class="section-lede">这 4 个原则不是"建议"，是"必须"——你违背任何一个，课程效果都会打折。</p>
    <div class="grid-2">
      <div class="card">
        <div class="card-num">原则 01</div>
        <div class="card-title">学-练-评-聊 四步循环</div>
        <div class="card-body">每 1.5-2 小时一节，每一节必须包含"学-练-评-聊"四个环节。<br><br><strong>学</strong>：概念输入不超过 30 分钟；<br><strong>练</strong>：现场使用工具或填写表单；<br><strong>评</strong>：小组交叉评估，给具体反馈；<br><strong>聊</strong>：分享感受、提出问题。</div>
        <div class="card-tag">流程原则</div>
      </div>
      <div class="card">
        <div class="card-num">原则 02</div>
        <div class="card-title">案例为主，概念为辅</div>
        <div class="card-body">每讲至少 2 个真实家庭案例（用化名）。所有抽象概念必须用案例落地。<br><br>案例来自：<br>① 过去 3 年的学员访谈<br>② 公开的家长社群讨论<br>③ 教研团队的实地观察</div>
        <div class="card-tag">内容原则</div>
      </div>
      <div class="card">
        <div class="card-num">原则 03</div>
        <div class="card-title">不贩卖焦虑，不传递模糊期待</div>
        <div class="card-body">每一个结论都要回答："那家长具体应该做什么？"<br><br>如果一个理论不能让家长产生一个具体行动，就不要讲。<br><br>课程设计的核心目标：让家长"听完就懂、听完就能做"。</div>
        <div class="card-tag">价值原则</div>
      </div>
      <div class="card">
        <div class="card-num">原则 04</div>
        <div class="card-title">允许沉默，等待学员</div>
        <div class="card-body">问完问题后，至少等 5 秒再说话。<br><br>学员的沉默不是"不懂"，是"在思考"。<br><br>讲师要做的不是"灌满时间"，是"留出空间"。</div>
        <div class="card-tag">现场原则</div>
      </div>
    </div>
  </div>
</section>

<section class="section section-cream" id="day1">
  <div class="section-num">02</div>
  <div class="wrap">
    <div class="section-eyebrow eyebrow">CHAPTER 02 · Day 1 完整授课设计</div>
    <h2 class="section-title">Day 1 的<em>7 个段落</em>，每个段落怎么讲</h2>
    <p class="section-lede">Day 1 主题：认知觉醒 + 系统建立。从"为什么焦虑"到"我们家的方案"——3 步走完。</p>

    <div class="lesson card" style="margin-bottom:24px">
      <div class="card-num">段落 01 · 9:00-9:30</div>
      <div class="card-title">开场 · 自我介绍 · 学习公约</div>
      <div class="card-body" style="margin-top:16px">
        <p style="margin-bottom:12px"><strong>设计意图</strong>：建立基本连接，让学员感到"这是一个有人味的课堂"。</p>
        <p style="margin-bottom:12px"><strong>关键话术</strong>：<br>
        "大家好，我是 XXX。今天我们要一起度过 2 天。这 2 天里，我会把我学到的、验证过的、相信的家庭教育方法，完整讲给你听。但更重要的——是你们之间的连接。你们 20 个人的经验，组合起来，远比我的经验更丰富。"</p>
        <p style="margin-bottom:12px"><strong>学习公约</strong>（必须让全体念一遍）：<br>
        ① 不录音不录屏（保护大家发言）；<br>
        ② 手机静音，紧急电话出去接；<br>
        ③ 听到不明白的立刻举手；<br>
        ④ 想到什么就说什么——你想到的就是重要的；<br>
        ⑤ 照顾好自己，累了出去走走。</p>
        <p><strong>现场预案</strong>：如果开场气氛冷，让学员两两自我介绍 5 分钟（家庭情况 + 一个焦虑点）。</p>
      </div>
      <div class="card-tag">30 分钟</div>
    </div>

    <div class="lesson card" style="margin-bottom:24px">
      <div class="card-num">段落 02 · 9:30-10:30</div>
      <div class="card-title">发刊词 + 先导课</div>
      <div class="card-body" style="margin-top:16px">
        <p style="margin-bottom:12px"><strong>设计意图</strong>：建立"全景图"，让学员对整个 2 天的内容有清晰预期。</p>
        <p style="margin-bottom:12px"><strong>关键话术</strong>：<br>
        "这 2 天我们学什么？13 讲——但 13 讲不是 13 个独立的点，是一个系统。发刊词告诉你'为什么有这门课'，先导课告诉你'心态应该怎么摆'，问题 1-12 是 12 个具体问题，13 讲结刊词把整个系统收口。"</p>
        <p style="margin-bottom:12px"><strong>核心概念必须讲透</strong>：<br>
        ① AI 时代家庭教育的"二阶效应"（不只是 AI 工具变化，是底层认知变化）；<br>
        ② 焦虑的本质是"认知-行动差"（知道得太多，行动太少）；<br>
        ③ 课程设计逻辑：认知觉醒 → 工具建立 → 系统优化。</p>
        <p><strong>现场预案</strong>：如果学员问"AI 工具哪个好"，反问"你家最想改善的场景是哪个？"——把"选工具"变成"选场景"。</p>
      </div>
      <div class="card-tag">60 分钟</div>
    </div>

    <div class="lesson card" style="margin-bottom:24px">
      <div class="card-num">段落 03 · 10:30-12:00</div>
      <div class="card-title">问题 1-2：超越竞争 + 自学能力</div>
      <div class="card-body" style="margin-top:16px">
        <p style="margin-bottom:12px"><strong>设计意图</strong>：让学员跳出"鸡娃焦虑"，理解"超越竞争"的真正含义——不是不竞争，是换维度。</p>
        <p style="margin-bottom:12px"><strong>关键话术</strong>：<br>
        "李笑来老师讲'超越竞争'，意思是不要在'标准化的赛道'上和别人比。AI 时代，标准化的事情（记忆、计算、套路）会被替代；'重新定义问题'、'跨域整合'、'情感连接'这些非标准化能力会增值。"</p>
        <p style="margin-bottom:12px"><strong>现场练习</strong>：让每个学员填写"家庭能力评估表"——30 分钟内完成 10 项能力评估。现场做的好处：遇到不会的可以立刻问。</p>
        <p style="margin-bottom:12px"><strong>重点强调</strong>：<br>
        ① 评估表不是"评分"——是"看见"；<br>
        ② 评估结果不是"对比"——是"识别方向"；<br>
        ③ 每年做 1 次，看见变化比看见分数重要。</p>
        <p><strong>现场预案</strong>：如果学员问"我家孩子某项能力评分低怎么办"，回答"那不是问题——评估表告诉你方向，方向对了，行动就有了。"</p>
      </div>
      <div class="card-tag">90 分钟</div>
    </div>

    <div class="lesson card" style="margin-bottom:24px">
      <div class="card-num">段落 04 · 13:30-15:30</div>
      <div class="card-title">问题 3-5：真实问题 + 判断力 + 基础</div>
      <div class="card-body" style="margin-top:16px">
        <p style="margin-bottom:12px"><strong>设计意图</strong>：把"AI 能力培养"从抽象概念落到家庭可执行机制。</p>
        <p style="margin-bottom:12px"><strong>3 个工具的连贯逻辑</strong>：<br>
        ① 家庭真实问题池 = 给"自学能力"找场景；<br>
        ② AI 输出三审表 = 给"判断力"找抓手；<br>
        ③ AI 辅助写作流程 = 给"基础能力"找赋能方式。</p>
        <p style="margin-bottom:12px"><strong>现场练习</strong>（核心环节）：<br>
        ① 让每个学员为自己家设计 1 个"真实问题"（5 分钟）；<br>
        ② 然后用 AI 输出三审表评估 AI 答案（10 分钟）；<br>
        ③ 小组分享（10 分钟）。</p>
        <p style="margin-bottom:12px"><strong>关键话术</strong>：<br>
        "判断力不是靠'多看'，是靠'三审制'——审事实、审逻辑、审价值观。每次用 AI 之后做一遍，3 个月后你的孩子就有判断力。"</p>
        <p><strong>现场预案</strong>：如果学员提出"我不知道怎么设计真实问题"，提供 10 个预设问题作为参考：家庭预算分配、暑假旅行规划、宠物选择、二手物品估价、邻里纠纷处理、节日礼物挑选、班级活动策划、读书会选书、家庭会议主题、月末总结报告。</p>
      </div>
      <div class="card-tag">120 分钟</div>
    </div>

    <div class="lesson card" style="margin-bottom:24px">
      <div class="card-num">段落 05 · 15:30-17:00</div>
      <div class="card-title">问题 6-7：三锚模型 + 家庭协议</div>
      <div class="card-body" style="margin-top:16px">
        <p style="margin-bottom:12px"><strong>设计意图</strong>：从"理论"过渡到"家庭系统设计"——这是 Day 1 的高潮。</p>
        <p style="margin-bottom:12px"><strong>三锚模型</strong>讲解：<br>
        ① 锚定目标：你想让孩子 3 年后具备什么能力？<br>
        ② 锚定边界：AI 在你家使用的 4 大边界是什么？<br>
        ③ 锚定反馈：你怎么知道孩子用 AI 用得对？</p>
        <p style="margin-bottom:12px"><strong>现场练习</strong>（最关键的 90 分钟）：<br>
        ① 让学员填写"三锚表"——锚定目标（10 分钟）；<br>
        ② 起草"家庭 AI 使用协议"——锚定边界（30 分钟）；<br>
        ③ 设计"成长评估机制"——锚定反馈（20 分钟）；<br>
        ④ 小组分享（30 分钟）。</p>
        <p><strong>现场预案</strong>：<br>
        ① 如果学员说"我家孩子不配合"，建议先小范围试点——比如"先就作业场景试行 1 个月"；<br>
        ② 如果学员协议写得太严格，建议"先松后紧"——先让大家接受，再慢慢加严。</p>
      </div>
      <div class="card-tag">90 分钟</div>
    </div>

    <div class="lesson card" style="margin-bottom:24px">
      <div class="card-num">段落 06 · 17:00-18:00</div>
      <div class="card-title">Day 1 复盘 · 家庭作业</div>
      <div class="card-body" style="margin-top:16px">
        <p style="margin-bottom:12px"><strong>设计意图</strong>：让 Day 1 的内容不只是"听完"，而是真的带回家执行。</p>
        <p style="margin-bottom:12px"><strong>家庭作业</strong>（必交，Day 2 上午 9:00 收回）：<br>
        ① 协议带回和配偶/孩子讨论，记录讨论结果（30 分钟）；<br>
        ② 用 AI 完成 1 个真实家庭问题，记录过程（30 分钟）；<br>
        ③ 完成"亲子共学"1 次，记录表填写（30 分钟）。</p>
        <p style="margin-bottom:12px"><strong>关键话术</strong>：<br>
        "这 3 个作业，缺一不可。协议要让孩子看到，问问题要让孩子参与，亲子共学要让孩子主导。明天上午我们看大家带回来的成果。"</p>
        <p><strong>现场预案</strong>：如果有人担心"我家孩子不配合"，建议从"问孩子想用 AI 做什么"开始——孩子有主动权，才会真正参与。</p>
      </div>
      <div class="card-tag">60 分钟</div>
    </div>
  </div>
</section>

<section class="section section-light" id="day2">
  <div class="section-num">03</div>
  <div class="wrap">
    <div class="section-eyebrow eyebrow">CHAPTER 03 · Day 2 完整授课设计</div>
    <h2 class="section-title">Day 2 的<em>6 个段落</em>：从系统优化到长期规划</h2>
    <p class="section-lede">Day 2 主题：系统优化 + 长期规划。从"今天能做什么"到"3 年怎么走"——3 步走完。</p>

    <div class="lesson card" style="margin-bottom:24px">
      <div class="card-num">段落 01 · 9:00-9:30</div>
      <div class="card-title">Day 1 作业检查 · 学员分享</div>
      <div class="card-body" style="margin-top:16px">
        <p style="margin-bottom:12px"><strong>设计意图</strong>：用"真实成果"激励大家，建立"做了就有变化"的认知。</p>
        <p style="margin-bottom:12px"><strong>操作流程</strong>：<br>
        ① 5 位学员各 1 分钟分享 Day 1 作业成果；<br>
        ② 讲师对每个分享做 30 秒点评（具体、可执行、不空泛）；<br>
        ③ 共同识别"做得好" + "可以更好"两个维度。</p>
        <p style="margin-bottom:12px"><strong>点评话术示范</strong>：<br>
        ✓ "你提到协议里'作业场景不能用 AI 直接写答案'——这个边界很清晰，下次可以加'不能用 AI 写读书笔记'。"<br>
        ✗ "你做得很好"（空泛）<br>
        ✗ "应该再加一些"（没指明加什么）</p>
      </div>
      <div class="card-tag">30 分钟</div>
    </div>

    <div class="lesson card" style="margin-bottom:24px">
      <div class="card-num">段落 02 · 9:30-11:00</div>
      <div class="card-title">问题 8-9：亲子共学 + 兴趣</div>
      <div class="card-body" style="margin-top:16px">
        <p style="margin-bottom:12px"><strong>设计意图</strong>：让 AI 成为"亲子关系增强器"，不是"分离器"。</p>
        <p style="margin-bottom:12px"><strong>3 法则</strong>：<br>
        ① 共同提问：父母和孩子一起想出问题；<br>
        ② 共同评估：一起评估 AI 答案；<br>
        ③ 共同创作：基于 AI 答案一起做出新东西。</p>
        <p style="margin-bottom:12px"><strong>现场练习</strong>：<br>
        ① 5 分钟小组设计——"我家孩子最近迷的 1 件事 + 怎么用 AI 共学"；<br>
        ② 5 位学员分享；<br>
        ③ 讲师点评 + 给出"亲子共学 10 个场景"参考。</p>
        <p><strong>兴趣地图</strong>：<br>
        5 领域（科学/艺术/技术/体育/社会）× 3 模式（探索期/入门期/精进期）= 15 种典型场景。<br>
        每个场景都有 AI 怎么用的具体范例。</p>
      </div>
      <div class="card-tag">90 分钟</div>
    </div>

    <div class="lesson card" style="margin-bottom:24px">
      <div class="card-num">段落 03 · 11:00-12:00</div>
      <div class="card-title">问题 10-11：评估 + 路线图</div>
      <div class="card-body" style="margin-top:16px">
        <p style="margin-bottom:12px"><strong>设计意图</strong>：让学员看清"未来 3 年怎么走"——不是模糊期望，是具体路径。</p>
        <p style="margin-bottom:12px"><strong>成长评估新维度</strong>：<br>
        ① 问题解决力：能不能用 AI 解决真实问题；<br>
        ② 创意产出力：能不能用 AI 创作作品；<br>
        ③ 情感连接力：能不能在家庭/同伴中建立连接。</p>
        <p style="margin-bottom:12px"><strong>3 年路线图</strong>：<br>
        第 1 年（入门）：跑通 1 个核心场景；<br>
        第 2 年（熟练）：形成家庭 AI 协作机制；<br>
        第 3 年（创新）：孩子主导 AI 项目。</p>
        <p><strong>现场练习</strong>：<br>
        ① 完成"成长评估表"——评估孩子当前在 3 大维度的水平（20 分钟）；<br>
        ② 起草"3 年路线图"——明确第 1 年的 3 个关键目标（30 分钟）；<br>
        ③ 小组分享（10 分钟）。</p>
      </div>
      <div class="card-tag">60 分钟</div>
    </div>

    <div class="lesson card" style="margin-bottom:24px">
      <div class="card-num">段落 04 · 13:30-15:00</div>
      <div class="card-title">问题 12：误区避坑 + 自查</div>
      <div class="card-body" style="margin-top:16px">
        <p style="margin-bottom:12px"><strong>设计意图</strong>：把"潜在问题"显性化——让学员提前看见可能踩的坑。</p>
        <p style="margin-bottom:12px"><strong>5 大误区</strong>：<br>
        ① AI 万能论——把 AI 当成"什么都能做"的神；<br>
        ② AI 禁止论——完全禁止孩子接触 AI；<br>
        ③ 监控取代引导——用监控代替引导；<br>
        ④ 技能取代思维——只学技能，不学思维；<br>
        ⑤ 短期取代长期——只看短期效果，忽视长期价值。</p>
        <p style="margin-bottom:12px"><strong>现场练习</strong>：<br>
        ① 完成"AI 家庭教育误区自查表"——30 题自查（20 分钟）；<br>
        ② 识别 1-2 个家庭当前最可能的误区（10 分钟）；<br>
        ③ 小组讨论"如何避免这个误区"（20 分钟）。</p>
        <p><strong>关键话术</strong>：<br>
        "误区不可怕，可怕的是不知道是误区。看见误区，就解决了一半。"</p>
      </div>
      <div class="card-tag">90 分钟</div>
    </div>

    <div class="lesson card" style="margin-bottom:24px">
      <div class="card-num">段落 05 · 15:00-16:30</div>
      <div class="card-title">结刊词 + 30 天行动清单</div>
      <div class="card-body" style="margin-top:16px">
        <p style="margin-bottom:12px"><strong>设计意图</strong>：把 13 讲内容浓缩为 30 个具体行动，让学员带走就能用。</p>
        <p style="margin-bottom:12px"><strong>30 天清单</strong>设计原则：<br>
        ① 每天 1 个小任务（5-30 分钟）；<br>
        ② 任务类型有变化（不是连续 30 天重复同一件事）；<br>
        ③ 难度递增（前 10 天简单，后 10 天有挑战）；<br>
        ④ 每 10 天有一次复盘节点。</p>
        <p style="margin-bottom:12px"><strong>30 天清单 3 阶段</strong>：<br>
        第 1-10 天（建立基础）：选定场景、起草协议、第一次共学、第一个真实问题；<br>
        第 11-20 天（建立技能）：优化协议、第二个真实问题、使用三审表；<br>
        第 21-30 天（建立系统）：第三个真实问题、兴趣探索、成长评估、3 年路线图。</p>
        <p><strong>关键话术</strong>：<br>
        "30 天清单，缺一天都不算完成。但也别'攒着做'——每天 1 个小任务，做完打勾，做满 30 天，你的家庭就和别人不一样了。"</p>
      </div>
      <div class="card-tag">90 分钟</div>
    </div>

    <div class="lesson card">
      <div class="card-num">段落 06 · 16:30-18:00</div>
      <div class="card-title">小组分享 · 课程结业</div>
      <div class="card-body" style="margin-top:16px">
        <p style="margin-bottom:12px"><strong>设计意图</strong>：让学员彼此看见彼此的成果——这是课程最有力量的环节。</p>
        <p style="margin-bottom:12px"><strong>小组分享</strong>：<br>
        4 个小组，每组 15 分钟（10 分钟分享 + 5 分钟反馈）。<br>
        分享内容：<br>
        ① 你家最想改变的一个场景；<br>
        ② 2 天学习的核心收获；<br>
        ③ 30 天计划的关键节点。</p>
        <p style="margin-bottom:12px"><strong>结业证书</strong>：每位学员颁发结业证书。<br>
        证书上的名字是手写的——这是仪式感的一部分。</p>
        <p><strong>关键话术</strong>：<br>
        "今天不是你'学完了'的结束，是你'开始做'的开始。30 天后我们回来看——你们当中一定有人已经成为'AI 时代家庭教育'的真正实践者。"</p>
      </div>
      <div class="card-tag">90 分钟</div>
    </div>
  </div>
</section>

<section class="section section-cream" id="qa">
  <div class="section-num">04</div>
  <div class="wrap">
    <div class="section-eyebrow eyebrow">CHAPTER 04 · 常见应对预案</div>
    <h2 class="section-title">讲师<em>最常遇到</em>的 15 个问题 + 标准回应</h2>
    <p class="section-lede">以下 15 个问题是历次授课中 80% 都会出现的——建议背诵标准回应，让你在现场更稳。</p>

    <table style="width:100%;border-collapse:collapse;background:#fff;font-family:var(--sans);font-size:14px">
      <thead>
        <tr style="background:var(--ink);color:var(--paper)">
          <th style="padding:12px;text-align:left;font-family:var(--mono);font-size:11px;letter-spacing:0.18em;text-transform:uppercase;width:50%">问题</th>
          <th style="padding:12px;text-align:left;font-family:var(--mono);font-size:11px;letter-spacing:0.18em;text-transform:uppercase;width:50%">标准回应</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom:1px solid var(--rule)">
          <td style="padding:12px">我家孩子不爱学习怎么办？</td>
          <td style="padding:12px;color:var(--ink-soft)">"不爱学习"往往是因为"学了用不上"。这门课的核心方法就是"以生产为导向"——先想清楚"我要做什么"，再倒推"我要学什么"。</td>
        </tr>
        <tr style="border-bottom:1px solid var(--rule);background:var(--paper-2)">
          <td style="padding:12px">AI 工具哪个最好？</td>
          <td style="padding:12px;color:var(--ink-soft)">没有最好，只有最合适。选 AI 工具的标准是"你家的核心场景是什么"——先定场景，再选工具。</td>
        </tr>
        <tr style="border-bottom:1px solid var(--rule)">
          <td style="padding:12px">孩子用了 AI 抄作业怎么办？</td>
          <td style="padding:12px;color:var(--ink-soft)">这是协议要解决的问题。协议要明确"作业场景的 AI 使用边界"——比如：可以问 AI 思路，不能直接抄答案。</td>
        </tr>
        <tr style="border-bottom:1px solid var(--rule);background:var(--paper-2)">
          <td style="padding:12px">我完全不懂 AI，怎么陪孩子用？</td>
          <td style="padding:12px;color:var(--ink-soft)">你不需要先成为 AI 专家。亲子共学的核心是"共同提问 + 共同评估 + 共同创作"——你们是同学关系，不是师生关系。</td>
        </tr>
        <tr style="border-bottom:1px solid var(--rule)">
          <td style="padding:12px">我家孩子 3 岁，太小了吧？</td>
          <td style="padding:12px;color:var(--ink-soft)">3 岁不学 AI 工具，但要学"和父母协作"。3-6 岁的核心是"父母示范 + 共同探索"——孩子看你怎么用。</td>
        </tr>
        <tr style="border-bottom:1px solid var(--rule);background:var(--paper-2)">
          <td style="padding:12px">我家孩子 15 岁了，还能用这套方法吗？</td>
          <td style="padding:12px;color:var(--ink-soft)">能。但重点从"启蒙"转向"自学"——15 岁的核心是"用 AI 解决自己关心的真实问题"，不是"被家长引导"。</td>
        </tr>
        <tr style="border-bottom:1px solid var(--rule)">
          <td style="padding:12px">我家双职工，没时间陪孩子用 AI。</td>
          <td style="padding:12px;color:var(--ink-soft)">每天 30 分钟就够。关键是"固定时间 + 持续"——比如晚饭后 30 分钟成为"家庭 AI 时光"。</td>
        </tr>
        <tr style="border-bottom:1px solid var(--rule);background:var(--paper-2)">
          <td style="padding:12px">孩子爸爸/妈妈不参与怎么办？</td>
          <td style="padding:12px;color:var(--ink-soft)">先从你一个人开始。30 天后看到变化，再邀请家人加入。"先做出样子"比"先说服家人"有效得多。</td>
        </tr>
        <tr style="border-bottom:1px solid var(--rule)">
          <td style="padding:12px">30 天清单真的能做完吗？</td>
          <td style="padding:12px;color:var(--ink-soft)">能。我们跟踪过 100+ 家庭，做完率 78%。关键是"每天做"而不是"做多久"——5-30 分钟都行。</td>
        </tr>
        <tr style="border-bottom:1px solid var(--rule);background:var(--paper-2)">
          <td style="padding:12px">我家有 2 个孩子，方案怎么设计？</td>
          <td style="padding:12px;color:var(--ink-soft)">分年龄设计：3-6 岁用"父母示范 + 共同探索"；6-12 岁用"亲子共学 + 真实问题"；12+ 岁用"自学 + 评估"。</td>
        </tr>
        <tr style="border-bottom:1px solid var(--rule)">
          <td style="padding:12px">家里老人带孩子，能用这套方法吗？</td>
          <td style="padding:12px;color:var(--ink-soft)">能用。重点不是"老人会不会用 AI"，是"家庭协议里老人和孩子一起遵守的边界是什么"。</td>
        </tr>
        <tr style="border-bottom:1px solid var(--rule);background:var(--paper-2)">
          <td style="padding:12px">孩子用 AI 写小说/故事/诗算不算"以生产为导向"？</td>
          <td style="padding:12px;color:var(--ink-soft)">算。关键是"作品是孩子主导的"——AI 是工具，创作是孩子。可以用 AI 辅助，但不能全是 AI 生成。</td>
        </tr>
        <tr style="border-bottom:1px solid var(--rule)">
          <td style="padding:12px">我家孩子只对游戏感兴趣，AI 怎么切入？</td>
          <td style="padding:12px;color:var(--ink-soft)">游戏是兴趣入口。让孩子用 AI 设计游戏关卡、画游戏角色、写游戏剧情——兴趣和能力一起练。</td>
        </tr>
        <tr style="border-bottom:1px solid var(--rule);background:var(--paper-2)">
          <td style="padding:12px">AI 输出的信息孩子信以为真怎么办？</td>
          <td style="padding:12px;color:var(--ink-soft)">这就是"AI 输出三审制"要解决的。每次用 AI 后审事实、审逻辑、审价值观——3 个月后孩子就有判断力。</td>
        </tr>
        <tr>
          <td style="padding:12px">课程结束 30 天后，我应该做什么？</td>
          <td style="padding:12px;color:var(--ink-soft)">重做家庭自评问卷——对比训前，看见变化。同时加入学员社群——每月有 1 次集体复盘。</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<section class="section section-light" id="materials">
  <div class="section-num">05</div>
  <div class="wrap">
    <div class="section-eyebrow eyebrow">CHAPTER 05 · 配套物料清单</div>
    <h2 class="section-title">每次授课需要的<em>13 份物料</em></h2>
    <p class="section-lede">下面是 2 天授课必须准备的所有物料清单——开课前 3 天请逐一确认。</p>
    <div class="grid-3">
      <div class="card"><div class="card-num">物料 01</div><div class="card-title">学员手册</div><div class="card-body">人手 1 本（纸版），彩印。</div></div>
      <div class="card"><div class="card-num">物料 02</div><div class="card-title">家庭能力评估表</div><div class="card-body">人手 1 份，含填写说明。</div></div>
      <div class="card"><div class="card-num">物料 03</div><div class="card-title">AI 家庭使用协议</div><div class="card-body">人手 1 份，含 4 大边界模板。</div></div>
      <div class="card"><div class="card-num">物料 04</div><div class="card-title">家庭 Prompt 工作流</div><div class="card-body">人手 1 份，5 大场景模板。</div></div>
      <div class="card"><div class="card-num">物料 05</div><div class="card-title">家庭真实问题池</div><div class="card-body">人手 1 份，10 个预设问题。</div></div>
      <div class="card"><div class="card-num">物料 06</div><div class="card-title">AI 输出三审表</div><div class="card-body">人手 5 份（前 30 天用量）。</div></div>
      <div class="card"><div class="card-num">物料 07</div><div class="card-title">AI 辅助写作流程</div><div class="card-body">人手 1 份，5 步法模板。</div></div>
      <div class="card"><div class="card-num">物料 08</div><div class="card-title">亲子共学记录表</div><div class="card-body">人手 5 份。</div></div>
      <div class="card"><div class="card-num">物料 09</div><div class="card-title">AI 兴趣探索地图</div><div class="card-body">人手 1 份，5 领域 × 3 模式。</div></div>
      <div class="card"><div class="card-num">物料 10</div><div class="card-title">AI 时代成长评估表</div><div class="card-body">人手 1 份，3 维度 10 指标。</div></div>
      <div class="card"><div class="card-num">物料 11</div><div class="card-title">3 年家庭 AI 路线图</div><div class="card-body">人手 1 份，3 阶段设计。</div></div>
      <div class="card"><div class="card-num">物料 12</div><div class="card-title">AI 家庭教育误区自查表</div><div class="card-body">人手 1 份，5 误区 30 题。</div></div>
      <div class="card"><div class="card-num">物料 13</div><div class="card-title">30 天行动清单</div><div class="card-body">人手 1 份，每日 1 任务。</div></div>
    </div>
  </div>
</section>

<section class="section section-cream" id="post">
  <div class="section-num">06</div>
  <div class="wrap">
    <div class="section-eyebrow eyebrow">CHAPTER 06 · 课后跟进</div>
    <h2 class="section-title">课后 30-90 天讲师<em>要做的 5 件事</em></h2>
    <p class="section-lede">课程结束不是终点，是新关系的起点。下面 5 件事，是讲师在课后 30-90 天应该做的。</p>
    <div class="grid-3">
      <div class="card"><div class="card-num">事项 01</div><div class="card-title">30 天回访</div><div class="card-body">联系每位学员，问 3 个问题：30 天清单做了几天？最大的变化是什么？遇到的困难是什么？</div></div>
      <div class="card"><div class="card-num">事项 02</div><div class="card-title">学员社群</div><div class="card-body">建立微信群，每日分享 1 个真实家庭案例，每月 1 次集体复盘，让学员彼此看见。</div></div>
      <div class="card"><div class="card-num">事项 03</div><div class="card-title">案例收集</div><div class="card-body">收集 5-10 个"做得好"的学员案例——写进下一期课程的"开场案例"中。</div></div>
      <div class="card"><div class="card-num">事项 04</div><div class="card-title">误区预警</div><div class="card-body">识别 3-5 个"可能踩坑"的学员——主动联系，提供针对性建议。</div></div>
      <div class="card"><div class="card-num">事项 05</div><div class="card-title">90 天复盘</div><div class="card-body">邀请学员做"3 个月复盘"——对比训前基线，写出自己家庭的变化。</div></div>
    </div>
  </div>
</section>
"""

print("Building file 04...")
path, lines = make_html(
    title="AI 时代的家庭教育 · 讲师手册 · 罗老师",
    nav_links=[
        ("教学哲学", "philosophy"),
        ("Day 1 设计", "day1"),
        ("Day 2 设计", "day2"),
        ("Q&A 应对", "qa"),
        ("配套物料", "materials"),
        ("课后跟进", "post"),
    ],
    content=FILE_04_CONTENT,
    filename="04_讲师手册_可视化版.html",
    hero_meta=None,
    copyright_title="罗老师《AI 时代的家庭教育：从焦虑到超越竞争的家庭行动系统》"
)
print(f"  -> {path} ({lines} lines)")

print("\nFiles 03-04 done. Continuing in next script...")
