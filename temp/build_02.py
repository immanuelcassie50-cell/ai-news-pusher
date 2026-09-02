# -*- coding: utf-8 -*-
"""Build file 02: 课程大纲_可视化版.html"""
import os

OUT = r"D:\2026年课程\ai课2026整理\AI时代的家庭教育\13_HTML可视化\02_课程大纲_可视化版.html"

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

/* Typography */
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

/* Progress bar */
#progress{
  position:fixed;top:0;left:0;height:3px;
  background:linear-gradient(90deg,var(--gold),var(--crimson));
  z-index:1000;width:0;transition:width 0.1s linear;
}

/* Top nav */
#topnav{
  position:sticky;top:0;z-index:100;
  background:rgba(245,240,230,0.92);
  backdrop-filter:blur(12px);
  border-bottom:1px solid var(--rule);
}
#topnav-inner{
  display:flex;align-items:center;justify-content:space-between;
  padding:14px 32px;max-width:1280px;margin:0 auto;
}
#topnav-brand{font-family:var(--serif);font-size:18px;font-style:italic;font-weight:600}
#topnav-brand em{color:var(--crimson);font-style:normal}
#topnav-links{display:flex;gap:24px;flex-wrap:wrap}
#topnav-links a{
  font-family:var(--mono);font-size:11px;letter-spacing:0.18em;
  text-transform:uppercase;color:var(--ink-soft);
  padding:6px 0;border-bottom:1px solid transparent;
  transition:all 0.2s;
}
#topnav-links a:hover{color:var(--crimson);border-color:var(--crimson)}
#topnav-links a.active{color:var(--crimson);border-color:var(--crimson)}

/* Hero */
.hero{
  min-height:90vh;display:flex;align-items:center;
  position:relative;overflow:hidden;
  background:linear-gradient(180deg,var(--paper) 0%,var(--paper-2) 100%);
}
.hero-inner{padding:120px 32px 80px;max-width:1280px;margin:0 auto;position:relative;z-index:2}
.hero-meta{
  display:grid;grid-template-columns:repeat(4,1fr);gap:32px;
  margin-bottom:48px;padding-bottom:32px;border-bottom:1px solid var(--rule);
}
.hero-meta-item .eyebrow{display:block;margin-bottom:8px}
.hero-meta-item .meta-value{font-family:var(--serif);font-size:20px;font-weight:500}
.hero-title{font-size:clamp(56px,8vw,112px);line-height:0.95;margin-bottom:32px}
.hero-subtitle{font-size:clamp(20px,2.2vw,28px);color:var(--ink-soft);max-width:780px;margin-bottom:48px}
.hero-tagline{
  font-family:var(--serif);font-size:24px;font-style:italic;
  color:var(--crimson);padding:24px 0;border-top:1px solid var(--rule);
  border-bottom:1px solid var(--rule);
}
.hero-tagline strong{font-weight:600;font-style:normal;color:var(--ink)}

/* Sections */
.section{padding:120px 0;position:relative}
.section-light{background:var(--paper)}
.section-cream{background:var(--paper-2)}
.section-ink{background:var(--ink);color:var(--paper)}
.section-ink .eyebrow{color:var(--gold)}
.section-ink em{color:var(--gold)}

.section-num{
  font-family:var(--serif);font-size:120px;font-style:italic;
  color:var(--gold);opacity:0.3;position:absolute;top:40px;right:40px;
  line-height:1;pointer-events:none;
}
.section-eyebrow{margin-bottom:24px}
.section-title{font-size:clamp(40px,5vw,64px);margin-bottom:32px;max-width:900px}
.section-lede{font-size:20px;color:var(--ink-soft);max-width:780px;margin-bottom:64px}

/* Grid layouts */
.grid-2{display:grid;grid-template-columns:1fr 1fr;gap:48px}
.grid-3{display:grid;grid-template-columns:repeat(3,1fr);gap:32px}
.grid-4{display:grid;grid-template-columns:repeat(4,1fr);gap:24px}

/* Card */
.card{
  background:#fff;border:1px solid var(--rule);
  padding:32px;border-radius:2px;
  transition:all 0.3s;
}
.card:hover{transform:translateY(-2px);box-shadow:0 12px 32px rgba(0,0,0,0.08)}
.card-num{
  font-family:var(--mono);font-size:11px;letter-spacing:0.2em;
  color:var(--gold-deep);margin-bottom:12px;
}
.card-title{font-family:var(--serif);font-size:22px;font-style:italic;margin-bottom:12px}
.card-body{color:var(--ink-soft);font-size:15px;line-height:1.7}
.card-tag{
  display:inline-block;font-family:var(--mono);font-size:10px;
  letter-spacing:0.18em;text-transform:uppercase;
  padding:4px 10px;background:var(--gold-light);color:var(--ink);
  margin-top:16px;
}

/* Big number stat */
.stat-block{padding:48px 0;border-top:1px solid var(--rule);border-bottom:1px solid var(--rule)}
.stat-num{
  font-family:var(--serif);font-size:clamp(80px,10vw,140px);
  font-weight:600;line-height:1;color:var(--crimson);
  letter-spacing:-0.04em;
}
.stat-label{font-family:var(--mono);font-size:12px;letter-spacing:0.2em;text-transform:uppercase;color:var(--ink-mute);margin-top:8px}

/* Pain point */
.pain{
  padding:32px;border-left:3px solid var(--crimson);
  background:#fff;margin-bottom:24px;
}
.pain-num{font-family:var(--mono);font-size:11px;letter-spacing:0.2em;color:var(--crimson);margin-bottom:8px}
.pain-title{font-family:var(--serif);font-size:22px;font-style:italic;margin-bottom:16px}
.pain-scenario{font-style:italic;color:var(--ink-mute);font-size:15px;margin:16px 0;padding:12px 16px;background:var(--paper-2);border-radius:2px}
.pain-answer{color:var(--ink);font-size:15px;line-height:1.7}
.pain-answer strong{color:var(--crimson)}

/* Outcome / takeaway list */
.takeaway{
  padding:32px;background:#fff;border:1px solid var(--rule);
  margin-bottom:16px;display:flex;align-items:start;gap:20px;
}
.takeaway-num{
  font-family:var(--serif);font-size:48px;font-style:italic;
  color:var(--gold);line-height:1;flex-shrink:0;
}
.takeaway-content h4{font-size:18px;margin-bottom:8px}
.takeaway-content p{color:var(--ink-soft);font-size:15px;line-height:1.7}

/* Chapter list */
.chapter-row{
  display:grid;grid-template-columns:80px 1fr auto;gap:24px;
  padding:32px 0;border-bottom:1px solid var(--rule);
  align-items:start;transition:all 0.2s;
}
.chapter-row:hover{background:var(--paper-2);padding-left:16px;padding-right:16px}
.chapter-num{
  font-family:var(--serif);font-size:48px;font-style:italic;
  color:var(--gold);line-height:1;
}
.chapter-content h3{font-size:22px;margin-bottom:8px}
.chapter-content p{color:var(--ink-soft);font-size:15px;line-height:1.7;margin-bottom:12px}
.chapter-tag{
  display:inline-block;font-family:var(--mono);font-size:10px;
  letter-spacing:0.18em;text-transform:uppercase;
  padding:4px 10px;background:var(--gold-light);color:var(--ink);margin-right:8px;
}
.chapter-cta{color:var(--crimson);font-family:var(--mono);font-size:11px;letter-spacing:0.18em;text-transform:uppercase;align-self:center}

/* Model block */
.model-block{
  background:#fff;padding:48px;border:1px solid var(--rule);
  margin-bottom:32px;position:relative;
}
.model-block::before{
  content:"";position:absolute;top:0;left:0;width:60px;height:3px;
  background:var(--crimson);
}
.model-eyebrow{font-family:var(--mono);font-size:11px;letter-spacing:0.32em;text-transform:uppercase;color:var(--gold-deep);margin-bottom:16px}
.model-title{font-family:var(--serif);font-size:32px;font-style:italic;margin-bottom:24px}
.model-content{color:var(--ink-soft);font-size:16px;line-height:1.8}
.model-why{
  margin-top:24px;padding:24px;background:var(--paper-2);
  border-left:3px solid var(--crimson);
}
.model-why strong{color:var(--crimson);display:block;margin-bottom:8px;font-family:var(--mono);font-size:11px;letter-spacing:0.2em;text-transform:uppercase}

/* Pull quote */
.pullquote{
  padding:48px 0;text-align:center;
  border-top:1px solid var(--rule);border-bottom:1px solid var(--rule);
  margin:64px 0;
}
.pullquote-text{
  font-family:var(--serif);font-size:clamp(24px,3vw,36px);
  font-style:italic;line-height:1.5;max-width:880px;margin:0 auto;
}
.pullquote-cite{
  font-family:var(--mono);font-size:11px;letter-spacing:0.32em;
  text-transform:uppercase;color:var(--gold-deep);margin-top:24px;
}
.pullquote-cite span{margin:0 12px}

/* Side chapter nav */
#sideNav{
  position:fixed;right:24px;top:50%;transform:translateY(-50%);
  z-index:50;display:flex;flex-direction:column;gap:12px;
}
.chapter-side-dot{
  width:8px;height:8px;border-radius:50%;background:var(--rule);
  display:block;transition:all 0.2s;position:relative;
}
.chapter-side-dot:hover{background:var(--crimson);transform:scale(1.5)}
.chapter-side-dot.active{background:var(--crimson);transform:scale(1.8)}
.chapter-side-dot[data-label]:hover::after{
  content:attr(data-label);position:absolute;right:16px;top:50%;
  transform:translateY(-50%);white-space:nowrap;
  background:var(--ink);color:var(--paper);
  padding:4px 10px;font-family:var(--mono);font-size:10px;
  letter-spacing:0.18em;text-transform:uppercase;border-radius:2px;
}

/* Footer */
footer{
  padding:80px 32px 40px;background:var(--ink);color:var(--paper);
  text-align:center;border-top:1px solid var(--rule);
}
footer strong{font-family:var(--serif);font-size:18px;font-style:italic;display:block;margin-bottom:12px}
footer .copyright{font-family:var(--mono);font-size:11px;letter-spacing:0.18em;color:rgba(245,240,230,0.6);text-transform:uppercase}

/* Reveal */
.reveal{opacity:0;transform:translateY(20px);transition:all 0.8s ease}
.reveal.visible{opacity:1;transform:translateY(0)}

/* Responsive */
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
  .chapter-row{grid-template-columns:60px 1fr;gap:16px}
  .chapter-cta{grid-column:1 / -1;text-align:right}
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
document.querySelectorAll('.card,.pain,.takeaway,.chapter-row,.model-block,.pullquote,.stat-block').forEach(el=>{
  el.classList.add('reveal');observer.observe(el);
});

const navLinks=document.querySelectorAll('#topnav-links a');
const sectionIds=['hero','background','painpoints','takeaway','chapters','models','tools','method','invitation'];
const sectionMap={};
sectionIds.forEach((id,i)=>{sectionMap[id]=navLinks[i]});
const linkObserver=new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      const id=entry.target.id;
      navLinks.forEach(a=>a.classList.remove('active'));
      const link=sectionMap[id];
      if(link)link.classList.add('active');
    }
  });
},{rootMargin:'-50% 0px -50% 0px'});
sectionIds.forEach(id=>{
  const el=document.getElementById(id);
  if(el)linkObserver.observe(el);
});

const sideNav=document.getElementById('sideNav');
const sideSections=[
  {id:'hero',label:'首页'},
  {id:'background',label:'背景'},
  {id:'painpoints',label:'痛点'},
  {id:'takeaway',label:'带走'},
  {id:'chapters',label:'13讲'},
  {id:'models',label:'模型'},
  {id:'tools',label:'工具'},
  {id:'method',label:'方法'},
  {id:'invitation',label:'邀请'},
];
sideSections.forEach(s=>{
  const dot=document.createElement('a');
  dot.className='chapter-side-dot';
  dot.href='#'+s.id;
  dot.setAttribute('data-label',s.label);
  dot.title=s.label;
  sideNav.appendChild(dot);
});
const dotObserver=new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      const id=entry.target.id;
      const idx=sideSections.findIndex(s=>s.id===id);
      if(idx>=0){
        sideNav.querySelectorAll('.chapter-side-dot').forEach((d,i)=>{
          d.classList.toggle('active',i===idx);
        });
      }
    }
  });
},{rootMargin:'-50% 0px -50% 0px'});
sideSections.forEach(s=>{
  const el=document.getElementById(s.id);
  if(el)dotObserver.observe(el);
});

updateProgress();
"""

HTML_HEAD = """<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>AI 时代的家庭教育 · 课程大纲 · 罗老师</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&family=Inter+Tight:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Noto+Serif+SC:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>
""" + CSS + """
</style>
</head>
<body>
<div id="progress"></div>
<nav id="topnav">
  <div id="topnav-inner">
    <a href="#hero" id="topnav-brand">AI 时代的<em>家庭教育</em></a>
    <div id="topnav-links">
      <a href="#background">课程背景</a>
      <a href="#painpoints">8 大痛点</a>
      <a href="#takeaway">带走什么</a>
      <a href="#chapters">13 讲大纲</a>
      <a href="#models">3 大模型</a>
      <a href="#tools">10 套工具</a>
      <a href="#method">方法论</a>
      <a href="#invitation">邀请</a>
    </div>
  </div>
</nav>
<aside id="sideNav"></aside>
"""

HTML_FOOT = """
<footer>
  <strong>罗老师《AI 时代的家庭教育：从焦虑到超越竞争的家庭行动系统》</strong>
  <div class="copyright">© 罗老师《AI 时代的家庭教育》 未经授权禁止复制、传播、改编本课程内容。</div>
  <div class="copyright" style="margin-top:8px;font-size:12px">课程大纲 v1.0 · 完整版 13 讲 · 3 大原创模型 · 10 套原创工具 · 30 天行动清单 · 3 年路线图</div>
</footer>
<script>
""" + JS + """
</script>
</body>
</html>
"""

# Hero section
HERO = """
<section class="hero" id="hero">
  <div class="hero-inner">
    <div class="eyebrow" style="margin-bottom:32px">COURSE SYLLABUS · 课程大纲 v1.0</div>
    <h1 class="hero-title">AI 时代的<br>家庭<em>教育</em></h1>
    <p class="hero-subtitle">从焦虑到<em>超越竞争</em>的家庭行动系统</p>
    <div class="hero-meta">
      <div class="hero-meta-item">
        <span class="eyebrow">首席教学设计师</span>
        <div class="meta-value">罗老师</div>
      </div>
      <div class="hero-meta-item">
        <span class="eyebrow">面向人群</span>
        <div class="meta-value">3-18 岁父母 / 6-15 岁核心</div>
      </div>
      <div class="hero-meta-item">
        <span class="eyebrow">交付形式</span>
        <div class="meta-value">线下 2 天 12h / 线上 13 讲</div>
      </div>
      <div class="hero-meta-item">
        <span class="eyebrow">核心交付</span>
        <div class="meta-value">13 讲 + 10 套工具 + 30 天清单</div>
      </div>
    </div>
    <div class="hero-tagline">
      <strong>学完这门课，你不需要再听任何"AI 焦虑贩卖"。</strong><br>
      你会有一套完整的<em>家庭行动系统</em>，知道今晚该做什么、明天该做什么、未来三年怎么走。
    </div>
  </div>
</section>
"""

# Background section
BACKGROUND = """
<section class="section section-light" id="background">
  <div class="section-num">01</div>
  <div class="wrap">
    <div class="section-eyebrow eyebrow">CHAPTER 01 · 课程背景</div>
    <h2 class="section-title">从<em>焦虑</em>到<em>行动</em>：这门课要解决的核心问题</h2>
    <p class="section-lede">你最近一次因为孩子的教育问题焦虑，是什么时候？可能是看到新闻说"AI 时代，文科生将面临最大冲击"。也可能是亲戚聚会时，邻居孩子用 AI 三分钟写完作文、自己孩子还在啃笔头的那个晚上。</p>
    <p style="font-size:18px;color:var(--ink-soft);max-width:880px;margin-bottom:32px">你打开手机，搜"AI 时代 家庭教育"，弹出来 50 篇 10 万+。每一篇都在告诉你"要焦虑"、"要重视"、"要抓紧"。每一篇都让你更慌一点。</p>
    <p style="font-size:20px;font-family:var(--serif);font-style:italic;color:var(--crimson);max-width:880px;padding:24px;border-left:3px solid var(--crimson);background:var(--paper-2)">但关掉手机，你依然不知道——<br><strong>明天，我到底该做什么？</strong></p>
    <p style="font-size:18px;color:var(--ink-soft);max-width:880px;margin-top:32px">这就是这门课要解决的核心问题。焦虑的本质不是"知道得不够多"，而是"不知道接下来该做什么"。当一个家长读完一篇焦虑文章，脑子里浮现的不是具体的下一步行动，而是更大的未知——这种状态，叫<strong>认知过载，行动真空</strong>。</p>
    <h3 style="margin-top:64px;margin-bottom:24px">市面课程的 3 大盲点</h3>
    <div class="grid-3">
      <div class="card">
        <div class="card-num">层级 01</div>
        <div class="card-title">贩卖焦虑</div>
        <div class="card-body">"再不上车就晚了"——制造恐惧，刺激消费。</div>
      </div>
      <div class="card">
        <div class="card-num">层级 02</div>
        <div class="card-title">科普概念</div>
        <div class="card-body">"AI 是什么、能做什么"——认知升级，但无行动。</div>
      </div>
      <div class="card">
        <div class="card-num">层级 03</div>
        <div class="card-title">工具罗列</div>
        <div class="card-body">"这 20 个 AI 工具家长必备"——没有系统，没有方法。</div>
      </div>
    </div>
    <div class="pullquote" style="margin-top:80px">
      <p class="pullquote-text">这三个层级都有一个共同的盲点：<em>没有把 AI 变成家庭系统</em>。</p>
      <p class="pullquote-cite"><span></span>罗老师 · 课程定位<span></span></p>
    </div>
  </div>
</section>
"""

# Pain points section
PAINPOINTS = """
<section class="section section-cream" id="painpoints">
  <div class="section-num">02</div>
  <div class="wrap">
    <div class="section-eyebrow eyebrow">CHAPTER 02 · 8 大痛点</div>
    <h2 class="section-title">这门课为家庭解决的 <em>8 大痛点</em></h2>
    <p class="section-lede">过去三年，我和数百位家长深度沟通后总结出来的——每一个痛点都对应一个"家长真实场景"。你看看自己中了几条。</p>

    <div class="pain">
      <div class="pain-num">PAIN 01</div>
      <div class="pain-title">看着 AI 新闻越来越焦虑，不知道该让孩子学什么</div>
      <div class="pain-scenario">王女士的孩子今年 8 岁，三年级。半年里她给孩子报了 4 个兴趣班：编程、钢琴、围棋、英文戏剧。每一次报班的理由都是"听说 AI 时代需要这个"。半年下来，孩子每个都学了一点，但都学得不深。她看着孩子疲惫的脸，又看着账单上 3 万多的兴趣班支出，第一次怀疑：这些，真的是 AI 时代孩子需要的吗？</div>
      <div class="pain-answer"><strong>解决</strong>：重新定义什么对孩子是重要的——把核心能力（判断力、自学能力、情感连接力）夯实，不追新。</div>
    </div>

    <div class="pain">
      <div class="pain-num">PAIN 02</div>
      <div class="pain-title">知道 AI 好用，但不知道在家庭里怎么落地</div>
      <div class="pain-scenario">陈先生是产品经理，自己用 AI 写文档、做表格很溜。但他从来没想过让孩子用 AI——"AI 不是大学才用得上的吗？""孩子用了 AI 会不会变笨？""到底该让孩子用 AI 做什么？"他对 AI 的认知停留在"大人的生产力工具"。</div>
      <div class="pain-answer"><strong>解决</strong>：给你一套"家庭 Prompt 工作流"——覆盖 5 个核心场景：作业辅导、兴趣探索、问题解答、创意生成、决策辅助。</div>
    </div>

    <div class="pain">
      <div class="pain-num">PAIN 03</div>
      <div class="pain-title">担心 AI 让孩子变笨、变依赖，陷入"用 vs 不用"二选一</div>
      <div class="pain-scenario">李女士坚决不让孩子碰 AI。"AI 一用就回不去了，孩子会变得不爱思考。"她的孩子今年 10 岁，班上已经有 30% 的同学用 AI 辅助作业了。她陷入两难：完全禁止，怕孩子落后；放开了用，怕孩子依赖。</div>
      <div class="pain-answer"><strong>解决</strong>：给你"AI 家庭使用协议"模板——4 大边界（场景、时间、内容、隐私），既不禁止，也不滥用。</div>
    </div>

    <div class="pain">
      <div class="pain-num">PAIN 04</div>
      <div class="pain-title">不知道哪些能力 AI 替代不了，不知道该重点培养什么</div>
      <div class="pain-scenario">张先生最近在思考一个问题："听说 AI 时代，记忆力和计算能力会贬值，那是不是说孩子不用背单词了？不用练计算了？"他隐隐觉得这个推理哪里不对，但说不清楚。</div>
      <div class="pain-answer"><strong>解决</strong>：给你"家庭能力评估表"——10 项能力对照表，每年更新一次。看到哪些在贬值、哪些在增值。</div>
    </div>

    <div class="pain">
      <div class="pain-num">PAIN 05</div>
      <div class="pain-title">想陪孩子学 AI，但自己都不会，陷入"教不了"的尴尬</div>
      <div class="pain-scenario">刘女士的丈夫是技术背景，对 AI 工具很熟。但她自己完全不懂 AI，每次想陪孩子用 AI 探索什么，都得先问丈夫。时间一长，她觉得自己在孩子的教育里"没什么用"。</div>
      <div class="pain-answer"><strong>解决</strong>：课程设计是"父母 + 孩子共学"模式。家长不需要先成为 AI 专家，只需掌握"三锚模型 + Prompt 工作流"。</div>
    </div>

    <div class="pain">
      <div class="pain-num">PAIN 06</div>
      <div class="pain-title">花了钱报 AI 课，孩子学了几个工具，但能力没真正提升</div>
      <div class="pain-scenario">周女士给孩子报了一个少儿编程 AI 课，1 万 8 千元。孩子学了 3 个月，能熟练使用某个 AI 工具做简单作品。但周女士发现，孩子并没有因此变得"更会思考"——只是多了一个工具。</div>
      <div class="pain-answer"><strong>解决</strong>：核心不是教工具，是教"用 AI 培养能力"的方法。哪个场景用什么工具不是关键，关键是用这个工具培养什么能力。</div>
    </div>

    <div class="pain">
      <div class="pain-num">PAIN 07</div>
      <div class="pain-title">想培养孩子的自学能力，但自己也是"鸡娃"思维的受害者</div>
      <div class="pain-scenario">赵女士的孩子今年 11 岁，五年级。她嘴上说"我希望孩子能自主学习"，但每天下班第一件事就是检查孩子作业、追问今天学了什么。半年下来，她疲惫不堪，孩子也越来越不愿意主动学习。</div>
      <div class="pain-answer"><strong>解决</strong>：帮你设计"家庭真实问题池"——每月给孩子 1 个真实问题（家庭预算、旅行规划、购物决策），孩子用 AI 解决。</div>
    </div>

    <div class="pain">
      <div class="pain-num">PAIN 08</div>
      <div class="pain-title">作为教育从业者，懂教育但不懂 AI，难以跟上行业变化</div>
      <div class="pain-scenario">孙老师是一位有 10 年教龄的初中英语老师，最近明显感到"AI 时代教育要变了"，但具体怎么变、自己该怎么调整、给学生家长提供什么建议，她完全没有思路。</div>
      <div class="pain-answer"><strong>解决</strong>：不仅面向家长，也面向教育从业者。3 大原创模型 + 10 套原创工具 = 一套可复用的家庭教育赋能方案。</div>
    </div>
  </div>
</section>
"""

# Takeaway section
TAKEAWAY = """
<section class="section section-light" id="takeaway">
  <div class="section-num">03</div>
  <div class="wrap">
    <div class="section-eyebrow eyebrow">CHAPTER 03 · 学完带走什么</div>
    <h2 class="section-title">学完这门课，你会带走<em>两样东西</em>：能力 + 成果</h2>
    <p class="section-lede">能力是迁移的，成果是具体的。下面 6 项能力和 10 项成果，你离开课程时具体带走的：</p>

    <h3 style="margin-top:48px;margin-bottom:24px;font-family:var(--serif);font-style:italic">能力层面 · 6 项可迁移能力</h3>
    <div class="grid-2">
      <div class="takeaway">
        <div class="takeaway-num">01</div>
        <div class="takeaway-content">
          <h4>3 大原创模型的完整应用能力</h4>
          <p>"三锚模型"（目标-边界-反馈）、"超越竞争能力图谱"（3 大核心能力）、"家庭 Prompt 工作流"（5 大场景）</p>
        </div>
      </div>
      <div class="takeaway">
        <div class="takeaway-num">02</div>
        <div class="takeaway-content">
          <h4>13 讲完整知识地图</h4>
          <p>从认知觉醒到行动系统的完整链路。每一讲都是下一讲的前提。</p>
        </div>
      </div>
      <div class="takeaway">
        <div class="takeaway-num">03</div>
        <div class="takeaway-content">
          <h4>10 套原创工具的全部使用方法</h4>
          <p>每套工具都讲透、配套练习、能立即用。直接打印就能用。</p>
        </div>
      </div>
      <div class="takeaway">
        <div class="takeaway-num">04</div>
        <div class="takeaway-content">
          <h4>30 天家庭 AI 行动清单的执行能力</h4>
          <p>从 0 到 1 跑通家庭 AI 协作流程。每天 1 个小任务，可执行可衡量。</p>
        </div>
      </div>
      <div class="takeaway">
        <div class="takeaway-num">05</div>
        <div class="takeaway-content">
          <h4>3 年家庭 AI 教育路线图的规划能力</h4>
          <p>从入门到熟练到创新，分阶段推进。每年更新一次。</p>
        </div>
      </div>
      <div class="takeaway">
        <div class="takeaway-num">06</div>
        <div class="takeaway-content">
          <h4>对孩子能力的评估和识别能力</h4>
          <p>知道哪些能力在增值/贬值，知道该重点培养什么。让孩子走在对的赛道上。</p>
        </div>
      </div>
    </div>

    <h3 style="margin-top:64px;margin-bottom:24px;font-family:var(--serif);font-style:italic">成果层面 · 10 项具体带走</h3>
    <div class="grid-2">
      <div class="card">
        <div class="card-tag">已完成</div>
        <div class="card-title">家庭能力评估表</div>
        <div class="card-body">已填写版——识别出 3 项增值能力 + 3 项需警惕能力</div>
      </div>
      <div class="card">
        <div class="card-tag">已完成</div>
        <div class="card-title">家庭 Prompt 工作流</div>
        <div class="card-body">5 个核心场景的可直接套用模板——作业、兴趣、问题、创意、决策</div>
      </div>
      <div class="card">
        <div class="card-tag">已签署</div>
        <div class="card-title">AI 家庭使用协议</div>
        <div class="card-body">全家共同签署版——含 4 大边界（场景/时间/内容/隐私）+ 违约责任</div>
      </div>
      <div class="card">
        <div class="card-tag">已设计</div>
        <div class="card-title">家庭真实问题池</div>
        <div class="card-body">10 个预设问题 + 创建规则 + 评估标准——每月 1 个真实问题</div>
      </div>
      <div class="card">
        <div class="card-tag">已使用</div>
        <div class="card-title">AI 输出三审表</div>
        <div class="card-body">已使用过至少 5 次——3 维度（事实/逻辑/价值观）+ 10 个检查点</div>
      </div>
      <div class="card">
        <div class="card-tag">已记录</div>
        <div class="card-title">亲子共学记录表</div>
        <div class="card-body">已记录至少 1 次亲子共学——3 法则（共同提问/评估/创作）</div>
      </div>
      <div class="card">
        <div class="card-tag">已执行</div>
        <div class="card-title">30 天家庭 AI 行动日志</div>
        <div class="card-body">已执行至少 7 天——每天 1 个小任务，可执行可衡量</div>
      </div>
      <div class="card">
        <div class="card-tag">已规划</div>
        <div class="card-title">3 年家庭 AI 教育路线图</div>
        <div class="card-body">已规划完家庭未来 3 年方向——入门 → 熟练 → 创新</div>
      </div>
      <div class="card">
        <div class="card-tag">已自查</div>
        <div class="card-title">AI 家庭教育误区自查表</div>
        <div class="card-body">已完成自查——识别家庭当前误区 + 应对策略</div>
      </div>
      <div class="card">
        <div class="card-tag">已认证</div>
        <div class="card-title">课程结业证书</div>
        <div class="card-body">可作为家长持续学习的见证——10 项成果的官方认证</div>
      </div>
    </div>

    <p style="text-align:center;margin-top:48px;font-family:var(--serif);font-size:22px;font-style:italic;color:var(--crimson)">这不是课程作业，是<strong>明天就能用上的真东西</strong>。</p>
  </div>
</section>
"""

# 13 chapters section
CHAPTERS = """
<section class="section section-cream" id="chapters">
  <div class="section-num">04</div>
  <div class="wrap">
    <div class="section-eyebrow eyebrow">CHAPTER 04 · 13 讲完整大纲</div>
    <h2 class="section-title">完整 13 讲大纲：从<em>认知觉醒</em>到<em>行动系统</em></h2>
    <p class="section-lede">每一讲都有：核心问题 + 解决思路 + 工具产出 + 30 天行动。从发刊词到结刊词，13 讲形成一套连贯的家庭行动系统。</p>

    <div class="chapter-row">
      <div class="chapter-num">00</div>
      <div class="chapter-content">
        <h3>发刊词：给孩子更多提高的可能性</h3>
        <p>AI 时代家庭教育到底发生了什么本质变化？焦虑的根源是什么？课程设计逻辑：从认知到行动，从单点到系统，从工具到方法。</p>
        <span class="chapter-tag">认知觉醒</span>
        <span class="chapter-tag">全景图</span>
      </div>
      <a class="chapter-cta">→</a>
    </div>

    <div class="chapter-row">
      <div class="chapter-num">0</div>
      <div class="chapter-content">
        <h3>先导课：孩子的未来会好吗？——完全无需焦虑</h3>
        <p>AI 时代竞争会变得更卷吗？未来到底会怎样？心态没摆正，再多工具也用不好。"AI 时代能力贬值/增值清单"——10 项能力对照表。</p>
        <span class="chapter-tag">心态建立</span>
        <span class="chapter-tag">能力地图</span>
      </div>
      <a class="chapter-cta">→</a>
    </div>

    <div class="chapter-row">
      <div class="chapter-num">01</div>
      <div class="chapter-content">
        <h3>问题一：未来社会会更卷吗？——超越竞争</h3>
        <p>李笑来老师观点：超越竞争 = 不在标准化维度竞争。你的独到见解："超越竞争" = 重新定义竞争维度。核心模型："超越竞争能力图谱"（3 大核心能力）。</p>
        <span class="chapter-tag">Tool 01</span>
        <span class="chapter-tag">家庭能力评估表</span>
      </div>
      <a class="chapter-cta">→</a>
    </div>

    <div class="chapter-row">
      <div class="chapter-num">02</div>
      <div class="chapter-content">
        <h3>问题二：怎样培养孩子的自学能力？——以生产为导向</h3>
        <p>自学能力 = "用 AI 解决问题的能力"。核心方法："以生产为导向"的自学——让孩子用 AI 产出作品。"家庭 Prompt 工作流 - 自学场景"模板（5 个 Prompt）。</p>
        <span class="chapter-tag">Tool 02</span>
        <span class="chapter-tag">自学 Prompt 模板</span>
      </div>
      <a class="chapter-cta">→</a>
    </div>

    <div class="chapter-row">
      <div class="chapter-num">03</div>
      <div class="chapter-content">
        <h3>问题三：未来社会要求更高了？——提前步入社会</h3>
        <p>核心方法："家庭真实问题池"——每月 1 个真实问题，孩子用 AI 解决。家长 3 个角色：问题提供者 / 引导者 / 复盘者。</p>
        <span class="chapter-tag">Tool 03</span>
        <span class="chapter-tag">家庭真实问题池</span>
      </div>
      <a class="chapter-cta">→</a>
    </div>

    <div class="chapter-row">
      <div class="chapter-num">04</div>
      <div class="chapter-content">
        <h3>问题四：怎样培养孩子的判断力？——AI 输出三审制</h3>
        <p>判断力 = "AI 输出评估力"（能识别 AI 何时对、何时错）。核心方法："AI 输出三审制"（审事实 / 审逻辑 / 审价值观）。</p>
        <span class="chapter-tag">Tool 04</span>
        <span class="chapter-tag">AI 输出三审表</span>
      </div>
      <a class="chapter-cta">→</a>
    </div>

    <div class="chapter-row">
      <div class="chapter-num">05</div>
      <div class="chapter-content">
        <h3>问题五：AI 来了，写作和英语还重要吗？——夯实基础</h3>
        <p>AI 替代的是"标准化写作"，强化的是"创意写作 + 深度思考"。"AI 辅助写作流程"模板（5 步：创意生成 → 结构搭建 → 内容填充 → 润色优化 → 人工审核）。</p>
        <span class="chapter-tag">Tool 05</span>
        <span class="chapter-tag">AI 辅助写作流程</span>
      </div>
      <a class="chapter-cta">→</a>
    </div>

    <div class="chapter-row">
      <div class="chapter-num">06</div>
      <div class="chapter-content">
        <h3>问题六：父母应该做什么？——三锚模型</h3>
        <p>AI 时代父母 = "AI 协作系统的设计师"。核心模型："三锚模型"（锚定目标 / 锚定边界 / 锚定反馈）。"家庭 Prompt 工作流"完整模板（5 大场景）。</p>
        <span class="chapter-tag">Tool 06</span>
        <span class="chapter-tag">家庭 Prompt 工作流（5 大场景）</span>
      </div>
      <a class="chapter-cta">→</a>
    </div>

    <div class="chapter-row">
      <div class="chapter-num">07</div>
      <div class="chapter-content">
        <h3>问题七：AI 会让孩子变笨吗？——家庭 AI 使用协议</h3>
        <p>AI 不是"变笨原因"，"无边界使用"才是。核心方法："AI 家庭使用协议"（场景 / 时间 / 内容 / 隐私 4 大边界）+ 4 级违约处理。</p>
        <span class="chapter-tag">Tool 07</span>
        <span class="chapter-tag">AI 家庭使用协议</span>
      </div>
      <a class="chapter-cta">→</a>
    </div>

    <div class="chapter-row">
      <div class="chapter-num">08</div>
      <div class="chapter-content">
        <h3>问题八：AI 来了，亲子关系会变淡吗？——亲子共学机制</h3>
        <p>AI 可以成为"亲子共学催化剂"。核心方法："亲子共学三法则"（共同提问 / 共同评估 / 共同创作）。</p>
        <span class="chapter-tag">Tool 08</span>
        <span class="chapter-tag">亲子共学记录表</span>
      </div>
      <a class="chapter-cta">→</a>
    </div>

    <div class="chapter-row">
      <div class="chapter-num">09</div>
      <div class="chapter-content">
        <h3>问题九：AI 时代，兴趣教育怎么办？——兴趣探索地图</h3>
        <p>兴趣教育 = "兴趣激发 + 工具赋能"。"AI 兴趣探索地图"（5 领域 × 3 模式：探索期/入门期/精进期）。</p>
        <span class="chapter-tag">Tool 09</span>
        <span class="chapter-tag">AI 兴趣探索地图</span>
      </div>
      <a class="chapter-cta">→</a>
    </div>

    <div class="chapter-row">
      <div class="chapter-num">10</div>
      <div class="chapter-content">
        <h3>问题十：如何评估孩子在 AI 时代的成长？——成长评估新维度</h3>
        <p>新评估维度 = "问题解决力 + 创意产出力 + 情感连接力"。"AI 时代成长评估表"（3 大维度 + 10 个指标 + 评分规则）。</p>
        <span class="chapter-tag">Tool 10</span>
        <span class="chapter-tag">AI 时代成长评估表</span>
      </div>
      <a class="chapter-cta">→</a>
    </div>

    <div class="chapter-row">
      <div class="chapter-num">11</div>
      <div class="chapter-content">
        <h3>问题十一：家庭 AI 教育 3 年路线图</h3>
        <p>路线图 = "能力评估 → Prompt 搭建 → 行动执行 → 评估更新"。"3 年家庭 AI 教育路线图"（3 阶段：入门 → 熟练 → 创新）。</p>
        <span class="chapter-tag">Tool 11</span>
        <span class="chapter-tag">3 年路线图</span>
      </div>
      <a class="chapter-cta">→</a>
    </div>

    <div class="chapter-row">
      <div class="chapter-num">12</div>
      <div class="chapter-content">
        <h3>问题十二：常见误区与应对——避坑指南</h3>
        <p>5 大误区：AI 万能论 / AI 禁止论 / 监控取代引导 / 技能取代思维 / 短期取代长期。"AI 家庭教育误区自查表"（5 误区 + 30 个自查问题）。</p>
        <span class="chapter-tag">Tool 12</span>
        <span class="chapter-tag">误区自查表</span>
      </div>
      <a class="chapter-cta">→</a>
    </div>

    <div class="chapter-row">
      <div class="chapter-num">13</div>
      <div class="chapter-content">
        <h3>结刊词：行动，是唯一的答案</h3>
        <p>13 讲回顾 + 30 天家庭 AI 行动清单完整版（每日 1 任务，30 天）。核心重申：焦虑 = 认知 - 行动，行动是唯一答案。</p>
        <span class="chapter-tag">Tool 13</span>
        <span class="chapter-tag">30 天行动清单</span>
      </div>
      <a class="chapter-cta">→</a>
    </div>
  </div>
</section>
"""

# Models section
MODELS = """
<section class="section section-light" id="models">
  <div class="section-num">05</div>
  <div class="wrap">
    <div class="section-eyebrow eyebrow">CHAPTER 05 · 3 大原创模型</div>
    <h2 class="section-title">3 套<em>原创模型</em>：从李笑来老师认知升级，到你家的行动系统</h2>
    <p class="section-lede">我们吸收李笑来老师的核心观点（超越竞争、不焦虑、夯实基础），但在三个方向上做了关键性的二阶改造，形成了 3 套原创模型。</p>

    <div class="model-block">
      <div class="model-eyebrow">原创模型 01</div>
      <div class="model-title">AI 家庭教育<em>三锚模型</em></div>
      <div class="model-content">
        <p style="font-family:var(--mono);font-size:13px;background:var(--paper-2);padding:20px;border-left:3px solid var(--crimson);margin:24px 0;color:var(--ink)">
            三锚模型<br>
            ┌─────────────┐<br>
            │  锚定目标   │ → 明确孩子 AI 时代核心能力方向<br>
            │  锚定边界   │ → 设置 AI 使用场景/时间/内容边界<br>
            │  锚定反馈   │ → 建立 AI 输出评估 + 成长评估机制<br>
            └─────────────┘
        </p>
        <p><strong>应用场景</strong>：父母设计家庭 AI 教育方案时，先问 3 个问题：<br>
          ① <strong>目标</strong>：我想让孩子在 AI 时代具备什么核心能力？<br>
          ② <strong>边界</strong>：AI 在家庭中使用的情景/时间/内容是什么？<br>
          ③ <strong>反馈</strong>：如何评估孩子用 AI 的效果和成长？</p>
      </div>
      <div class="model-why">
        <strong>为什么是原创</strong>
        李笑来老师讲"超越竞争、不焦虑、夯实基础"，这是认知层面的方向。但"具体怎么设计家庭 AI 教育方案"，没有现成框架。我们把"目标-边界-反馈"这一企业管理方法论迁移到家庭教育场景，形成了"三锚模型"。
      </div>
    </div>

    <div class="model-block">
      <div class="model-eyebrow">原创模型 02</div>
      <div class="model-title"><em>超越竞争</em>能力图谱</div>
      <div class="model-content">
        <p style="font-family:var(--mono);font-size:13px;background:var(--paper-2);padding:20px;border-left:3px solid var(--crimson);margin:24px 0;color:var(--ink)">
              超越竞争能力图谱<br>
              <br>
            问题定义力（3-18 岁逐步培养）<br>
                  ▲<br>
                  │<br>
                  │<br>
    情感连接力 ◀────┼────▶ 跨域整合力<br>
                  │<br>
                  │<br>
                  ▼<br>
              （3 大核心能力）<br>
              <br>
   每个能力都有 3 个评估等级（启蒙 / 熟练 / 创新）
        </p>
        <p><strong>应用场景</strong>：家长用这张图谱评估孩子的能力现状，明确重点培养方向。问题定义力是基础，跨域整合力是进阶，情感连接力是底层。</p>
      </div>
      <div class="model-why">
        <strong>为什么是原创</strong>
        传统的"能力清单"是平面的（10 项能力并列）。我们用"图谱"的方式呈现能力之间的关联和优先级——问题定义力是基础，跨域整合力是进阶，情感连接力是底层。
      </div>
    </div>

    <div class="model-block">
      <div class="model-eyebrow">原创模型 03</div>
      <div class="model-title">家庭 <em>Prompt 工作流</em></div>
      <div class="model-content">
        <p style="font-family:var(--mono);font-size:13px;background:var(--paper-2);padding:20px;border-left:3px solid var(--crimson);margin:24px 0;color:var(--ink)">
            家庭 Prompt 工作流<br>
       ┌────────────────────────┐<br>
       │  场景 1：作业辅导        │<br>
       │  场景 2：兴趣探索        │<br>
       │  场景 3：问题解答        │<br>
       │  场景 4：创意生成        │<br>
       │  场景 5：决策辅助        │<br>
       └────────────────────────┘<br>
       每个场景有：核心 Prompt 模板 + 家长引导话术 + 孩子使用边界
        </p>
        <p><strong>应用场景</strong>：家长在 5 个核心场景中，直接调用 Prompt 模板。覆盖 80% 的家庭 AI 使用需求。</p>
      </div>
      <div class="model-why">
        <strong>为什么是原创</strong>
        市面上的"Prompt 模板"是给职场人用的。我们针对家庭场景做了定制化设计——5 个场景覆盖 80% 的家庭 AI 使用需求，每个场景都有"家长引导话术"，让家长知道怎么陪孩子用。
      </div>
    </div>
  </div>
</section>
"""

# Tools section
TOOLS = """
<section class="section section-cream" id="tools">
  <div class="section-num">06</div>
  <div class="wrap">
    <div class="section-eyebrow eyebrow">CHAPTER 06 · 10 套原创工具</div>
    <h2 class="section-title">10 套<em>原创工具</em>：从认知到行动的桥梁</h2>
    <p class="section-lede">工具不是给你"知道"，是给你"做"——每套工具都配填写说明，拿到就会用。下面是完整索引：</p>

    <table style="width:100%;border-collapse:collapse;background:#fff;font-family:var(--sans)">
      <thead>
        <tr style="background:var(--ink);color:var(--paper)">
          <th style="padding:16px 12px;text-align:left;font-family:var(--mono);font-size:11px;letter-spacing:0.18em;text-transform:uppercase">编号</th>
          <th style="padding:16px 12px;text-align:left;font-family:var(--mono);font-size:11px;letter-spacing:0.18em;text-transform:uppercase">工具名称</th>
          <th style="padding:16px 12px;text-align:left;font-family:var(--mono);font-size:11px;letter-spacing:0.18em;text-transform:uppercase">主要用途</th>
          <th style="padding:16px 12px;text-align:left;font-family:var(--mono);font-size:11px;letter-spacing:0.18em;text-transform:uppercase">使用频率</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom:1px solid var(--rule)">
          <td style="padding:16px 12px;font-family:var(--serif);font-style:italic;font-size:24px;color:var(--gold)">1</td>
          <td style="padding:16px 12px;font-weight:600">家庭能力评估表</td>
          <td style="padding:16px 12px;color:var(--ink-soft)">识别孩子增值/贬值能力</td>
          <td style="padding:16px 12px;color:var(--ink-soft)">每年 1 次</td>
        </tr>
        <tr style="border-bottom:1px solid var(--rule);background:var(--paper-2)">
          <td style="padding:16px 12px;font-family:var(--serif);font-style:italic;font-size:24px;color:var(--gold)">2</td>
          <td style="padding:16px 12px;font-weight:600">家庭 Prompt 工作流（自学场景）</td>
          <td style="padding:16px 12px;color:var(--ink-soft)">5 个自学 Prompt 模板</td>
          <td style="padding:16px 12px;color:var(--ink-soft)">每周多次</td>
        </tr>
        <tr style="border-bottom:1px solid var(--rule)">
          <td style="padding:16px 12px;font-family:var(--serif);font-style:italic;font-size:24px;color:var(--gold)">3</td>
          <td style="padding:16px 12px;font-weight:600">家庭真实问题池</td>
          <td style="padding:16px 12px;color:var(--ink-soft)">10 个真实问题 + 创建规则</td>
          <td style="padding:16px 12px;color:var(--ink-soft)">每月 1 个</td>
        </tr>
        <tr style="border-bottom:1px solid var(--rule);background:var(--paper-2)">
          <td style="padding:16px 12px;font-family:var(--serif);font-style:italic;font-size:24px;color:var(--gold)">4</td>
          <td style="padding:16px 12px;font-weight:600">AI 输出三审表</td>
          <td style="padding:16px 12px;color:var(--ink-soft)">训练孩子的 AI 输出判断力</td>
          <td style="padding:16px 12px;color:var(--ink-soft)">每次用 AI 后</td>
        </tr>
        <tr style="border-bottom:1px solid var(--rule)">
          <td style="padding:16px 12px;font-family:var(--serif);font-style:italic;font-size:24px;color:var(--gold)">5</td>
          <td style="padding:16px 12px;font-weight:600">AI 辅助写作流程</td>
          <td style="padding:16px 12px;color:var(--ink-soft)">5 步法（创意→结构→填充→润色→审核）</td>
          <td style="padding:16px 12px;color:var(--ink-soft)">每月多次</td>
        </tr>
        <tr style="border-bottom:1px solid var(--rule);background:var(--paper-2)">
          <td style="padding:16px 12px;font-family:var(--serif);font-style:italic;font-size:24px;color:var(--gold)">6</td>
          <td style="padding:16px 12px;font-weight:600">家庭 Prompt 工作流（5 大场景）</td>
          <td style="padding:16px 12px;color:var(--ink-soft)">作业、兴趣、问题、创意、决策</td>
          <td style="padding:16px 12px;color:var(--ink-soft)">每周多次</td>
        </tr>
        <tr style="border-bottom:1px solid var(--rule)">
          <td style="padding:16px 12px;font-family:var(--serif);font-style:italic;font-size:24px;color:var(--gold)">7</td>
          <td style="padding:16px 12px;font-weight:600">AI 家庭使用协议</td>
          <td style="padding:16px 12px;color:var(--ink-soft)">明确 4 大边界</td>
          <td style="padding:16px 12px;color:var(--ink-soft)">每月 1 次回顾</td>
        </tr>
        <tr style="border-bottom:1px solid var(--rule);background:var(--paper-2)">
          <td style="padding:16px 12px;font-family:var(--serif);font-style:italic;font-size:24px;color:var(--gold)">8</td>
          <td style="padding:16px 12px;font-weight:600">亲子共学记录表</td>
          <td style="padding:16px 12px;color:var(--ink-soft)">3 法则 + 记录表</td>
          <td style="padding:16px 12px;color:var(--ink-soft)">每周 1 次</td>
        </tr>
        <tr style="border-bottom:1px solid var(--rule)">
          <td style="padding:16px 12px;font-family:var(--serif);font-style:italic;font-size:24px;color:var(--gold)">9</td>
          <td style="padding:16px 12px;font-weight:600">AI 兴趣探索地图</td>
          <td style="padding:16px 12px;color:var(--ink-soft)">5 领域 + 3 模式</td>
          <td style="padding:16px 12px;color:var(--ink-soft)">每季度 1 次</td>
        </tr>
        <tr style="border-bottom:1px solid var(--rule);background:var(--paper-2)">
          <td style="padding:16px 12px;font-family:var(--serif);font-style:italic;font-size:24px;color:var(--gold)">10</td>
          <td style="padding:16px 12px;font-weight:600">3 年家庭 AI 教育路线图</td>
          <td style="padding:16px 12px;color:var(--ink-soft)">入门 → 熟练 → 创新</td>
          <td style="padding:16px 12px;color:var(--ink-soft)">每年 1 次更新</td>
        </tr>
        <tr style="border-bottom:1px solid var(--rule)">
          <td style="padding:16px 12px;font-family:var(--serif);font-style:italic;font-size:24px;color:var(--crimson)">11</td>
          <td style="padding:16px 12px;font-weight:600">AI 时代成长评估表</td>
          <td style="padding:16px 12px;color:var(--ink-soft)">3 维度 + 10 指标</td>
          <td style="padding:16px 12px;color:var(--ink-soft)">每月小评/每季中评/每年总评</td>
        </tr>
        <tr style="border-bottom:1px solid var(--rule);background:var(--paper-2)">
          <td style="padding:16px 12px;font-family:var(--serif);font-style:italic;font-size:24px;color:var(--crimson)">12</td>
          <td style="padding:16px 12px;font-weight:600">AI 家庭教育误区自查表</td>
          <td style="padding:16px 12px;color:var(--ink-soft)">5 误区 + 30 自查题</td>
          <td style="padding:16px 12px;color:var(--ink-soft)">每季度 1 次</td>
        </tr>
        <tr>
          <td style="padding:16px 12px;font-family:var(--serif);font-style:italic;font-size:24px;color:var(--crimson)">13</td>
          <td style="padding:16px 12px;font-weight:600">30 天家庭 AI 行动清单</td>
          <td style="padding:16px 12px;color:var(--ink-soft)">每日 1 任务</td>
          <td style="padding:16px 12px;color:var(--ink-soft)">30 天一个循环</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>
"""

# Method section
METHOD = """
<section class="section section-light" id="method">
  <div class="section-num">07</div>
  <div class="wrap">
    <div class="section-eyebrow eyebrow">CHAPTER 07 · 3 大核心方法论</div>
    <h2 class="section-title">3 套核心<em>方法论</em>：把工具串成系统</h2>
    <p class="section-lede">工具是死的，方法是活的。下面 3 套方法论，是把 10 套工具串成"家庭 AI 教育操作系统"的关键。</p>

    <div class="grid-3">
      <div class="card" style="grid-column:span 1">
        <div class="card-num">方法论 01</div>
        <div class="card-title">以<em>生产为导向</em>的自学</div>
        <div class="card-body" style="margin-top:16px">
          <p style="margin-bottom:12px">传统自学是"看书-做题-考试"的循环——<strong>学的知识没有用</strong>，孩子学完就忘，因为没机会用。</p>
          <p style="margin-bottom:12px">"以生产为导向"的自学是<em>倒过来的</em>——先有一个要产出的作品（文章 / 视频 / 代码 / 海报），再倒推需要学什么知识。</p>
          <p style="margin-bottom:12px">这种自学的优势是——<strong>学的东西马上用、用了马上有反馈、反馈马上能改进</strong>。</p>
          <p>AI 让"以生产为导向"的自学成为可能——任何知识盲区，AI 都能补上。</p>
        </div>
        <div class="card-tag">核心方法 01</div>
      </div>

      <div class="card">
        <div class="card-num">方法论 02</div>
        <div class="card-title">三锚<em>家庭协作</em>机制</div>
        <div class="card-body" style="margin-top:16px">
          <p style="margin-bottom:12px">父母在家庭 AI 教育中不是"操作员"，是"系统设计师"。</p>
          <p style="margin-bottom:12px"><strong>锚定目标</strong>：明确家庭未来 3 年的能力培养方向</p>
          <p style="margin-bottom:12px"><strong>锚定边界</strong>：明确 AI 在家庭中的使用规则</p>
          <p><strong>锚定反馈</strong>：建立成长评估机制，及时调整方向</p>
        </div>
        <div class="card-tag">核心方法 02</div>
      </div>

      <div class="card">
        <div class="card-num">方法论 03</div>
        <div class="card-title"><em>30 天-3 月-3 年</em>节奏</div>
        <div class="card-body" style="margin-top:16px">
          <p style="margin-bottom:12px"><strong>30 天</strong>：从 0 到 1，建立家庭 AI 使用习惯</p>
          <p style="margin-bottom:12px"><strong>3 月</strong>：从"尝试"到"稳定"，形成家庭 AI 协作机制</p>
          <p style="margin-bottom:12px"><strong>3 年</strong>：从"被动使用"到"主动创新"，孩子主导 AI 探索</p>
          <p>这个节奏对应"3 年家庭 AI 教育路线图"。</p>
        </div>
        <div class="card-tag">核心方法 03</div>
      </div>
    </div>

    <div class="pullquote" style="margin-top:80px">
      <p class="pullquote-text">认知升级是起点，<strong>行动系统才是终点</strong>。<br>AI 怎么变，你的系统都在。</p>
      <p class="pullquote-cite"><span></span>罗老师 · 核心方法论<span></span></p>
    </div>
  </div>
</section>
"""

# Invitation section
INVITATION = """
<section class="section section-ink" id="invitation">
  <div class="wrap" style="text-align:center;padding:0 32px">
    <div class="section-eyebrow eyebrow" style="color:var(--gold)">CHAPTER 08 · 邀请</div>
    <h2 class="section-title" style="margin:0 auto 32px">李笑来老师讲"<em>超越竞争</em>"<br>我们讲"<em>超越竞争</em>之后怎么办"</h2>
    <p style="font-size:20px;color:rgba(245,240,230,0.85);max-width:780px;margin:0 auto 64px">这门课的设计目标是：让每一位家长在课程结束时，<strong style="color:var(--gold)">手上有 10 套工具、心里有 3 大模型、家里有 30 天清单、长期有 3 年路线图</strong>。</p>
    <p style="font-size:24px;font-style:italic;font-family:var(--serif);color:var(--paper);max-width:880px;margin:0 auto 24px">你不需要再去听任何"AI 焦虑贩卖"。<br>你不需要再被"鸡娃焦虑"左右。<br>你不需要再追着 AI 工具的更新跑。</p>
    <p style="font-size:32px;font-family:var(--serif);font-weight:600;color:var(--gold);margin:48px 0 16px">你有了自己的系统。</p>
    <p style="font-size:18px;color:rgba(245,240,230,0.7);font-family:var(--mono);letter-spacing:0.18em;text-transform:uppercase">而系统的力量是——AI 怎么变，你的系统都在。</p>

    <div style="margin:80px auto 0;padding:48px;background:rgba(245,240,230,0.05);border:1px solid rgba(201,169,110,0.3);max-width:780px">
      <div class="eyebrow" style="color:var(--gold);margin-bottom:24px">适用对象</div>
      <p style="color:rgba(245,240,230,0.85);font-size:16px;line-height:1.8;text-align:left">
        <strong style="color:var(--gold)">3-18 岁孩子的父母</strong>（6-15 岁为核心）<br>
        <strong style="color:var(--gold)">教育从业者</strong>（K12 老师、教培从业者、班主任）<br>
        <strong style="color:var(--gold)">关注子女成长的职场人</strong>
      </p>
      <div class="eyebrow" style="color:var(--gold);margin:32px 0 16px">课程时长</div>
      <p style="color:rgba(245,240,230,0.85);font-size:16px;line-height:1.8;text-align:left">
        线下版：2 天，每天 6 小时，共 12 小时<br>
        线上版：13 讲音频 + 图文讲义，每讲 25-30 分钟
      </p>
      <div class="eyebrow" style="color:var(--gold);margin:32px 0 16px">核心交付物</div>
      <p style="color:rgba(245,240,230,0.85);font-size:16px;line-height:1.8;text-align:left">
        13 讲系统课 + 3 大原创模型 + 10 套原创工具 + 30 天行动清单 + 3 年家庭 AI 路线图
      </p>
    </div>

    <p style="margin:80px auto 0;font-family:var(--serif);font-size:24px;font-style:italic;color:rgba(245,240,230,0.9);max-width:880px">
      期待在课堂上见到你。<br>
      让我们一起，把<strong style="color:var(--gold)">"焦虑"</strong>变成<strong style="color:var(--gold)">"行动"</strong>。
    </p>
  </div>
</section>
"""

# Assemble
html = HTML_HEAD + HERO + BACKGROUND + PAINPOINTS + TAKEAWAY + CHAPTERS + MODELS + TOOLS + METHOD + INVITATION + HTML_FOOT

with open(OUT, 'w', encoding='utf-8') as f:
    f.write(html)

import subprocess
result = subprocess.run(['wc', '-l', OUT], capture_output=True, text=True)
print(f"File 02 written: {result.stdout.strip()}")
print(f"Size: {os.path.getsize(OUT)} bytes")
