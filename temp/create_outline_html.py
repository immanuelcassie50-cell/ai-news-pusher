#!/usr/bin/env python3
"""
Create course outline HTML for 情绪信号与冲突预警
"""

# Color scheme
RED = "#C41E3A"
RED_LIGHT = "#FAF0F1"
RED_GHOST = "rgba(196, 30, 58, 0.06)"
INK = "#1A1A1A"
GRAY_70 = "#4A4A4A"
GRAY_50 = "#7A7678"
GRAY_30 = "#B8B4B5"
GRAY_10 = "#EAE6E4"
WARM = "#F6F3EF"
SURFACE = "#FFFFFF"
DARK = "#1C1A1B"
DARKER = "#141213"

CSS = f"""
:root {{
  --red: {RED};
  --red-hi: #D4122B;
  --red-wash: {RED_LIGHT};
  --red-ghost: {RED_GHOST};
  --ink: {INK};
  --gray-70: {GRAY_70};
  --gray-50: {GRAY_50};
  --gray-30: {GRAY_30};
  --gray-10: {GRAY_10};
  --warm: {WARM};
  --surface: {SURFACE};
  --dark: {DARK};
  --darker: {DARKER};
  --font-serif: 'Didot', 'Bodoni MT', 'Bodoni 72', 'Times New Roman', Georgia, serif;
  --font-body: 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, sans-serif;
  --ease: cubic-bezier(.4,0,.2,1);
}}

*, *::before, *::after {{ box-sizing: border-box; margin: 0; padding: 0; }}
html {{ scroll-behavior: smooth; font-size: 16px; }}

body {{
  background: var(--surface);
  color: var(--ink);
  font-family: var(--font-body);
  line-height: 1.75;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
}}

.container {{ max-width: 1100px; margin: 0 auto; padding: 0 48px; }}
.eyebrow {{
  font-size: 10.5px; letter-spacing: .2em; text-transform: uppercase;
  font-weight: 700; color: var(--red); display: flex; align-items: center; gap: 10px;
}}
.eyebrow::before {{
  content: ''; display: block; width: 24px; height: 1.5px; background: var(--red);
}}
.serif {{ font-family: var(--font-serif); }}

/* Hero */
.hero {{
  background: var(--surface);
  padding: 0;
  position: relative;
  border-bottom: 1px solid var(--gray-10);
}}

.hero-stripe {{
  position: absolute; top: 0; left: 0;
  width: 5px; height: 100%; background: var(--red);
}}

.hero-inner {{
  padding: 64px 48px 72px;
  max-width: 1100px; margin: 0 auto;
}}

.hero-top {{
  display: flex; justify-content: space-between; align-items: center;
  margin-bottom: 56px;
  padding-bottom: 28px;
  border-bottom: 1px solid var(--gray-10);
}}

.brand-badge {{
  display: flex; align-items: center; gap: 0;
}}
.brand-rect {{
  background: var(--red); color: #fff;
  font-size: 13px; font-weight: 700; letter-spacing: .06em;
  padding: 7px 16px; line-height: 1;
}}
.brand-en {{
  font-size: 10px; letter-spacing: .12em; color: var(--gray-50);
  text-transform: uppercase; padding-left: 14px;
  border-left: 1px solid var(--gray-10); margin-left: 14px;
  line-height: 1.5;
}}

.hero-tag {{
  font-size: 11px; color: var(--gray-50); letter-spacing: .08em;
  border: 1px solid var(--gray-10); padding: 6px 14px; border-radius: 2px;
}}

.hero-body {{
  display: grid; grid-template-columns: 1fr auto; gap: 64px; align-items: end;
}}

.hero-eyebrow {{ margin-bottom: 20px; }}

.hero-h1 {{
  font-family: var(--font-serif);
  font-size: 44px; font-weight: 400; line-height: 1.25;
  color: var(--ink); margin-bottom: 18px; letter-spacing: -.01em;
}}
.hero-h1 em {{ font-style: normal; color: var(--red); }}

.hero-lead {{
  font-size: 15px; color: var(--gray-50); max-width: 520px; line-height: 1.85;
}}

.hero-metrics {{
  display: flex; flex-direction: column; gap: 0;
  align-self: stretch; justify-content: flex-end;
  border-left: 1px solid var(--gray-10); padding-left: 48px;
}}
.metric {{
  padding: 20px 0;
  border-bottom: 1px solid var(--gray-10);
  text-align: right;
}}
.metric:last-child {{ border-bottom: none; }}
.metric-val {{
  font-family: var(--font-serif);
  font-size: 52px; font-weight: 400; color: var(--red);
  line-height: 1; display: block; letter-spacing: -.02em;
}}
.metric-lbl {{
  font-size: 11px; color: var(--gray-50); letter-spacing: .06em; margin-top: 4px; display: block;
}}

/* Pain section */
.pain {{
  background: var(--dark); color: #fff;
  padding: 88px 0;
  position: relative; overflow: hidden;
}}
.pain::after {{
  content: '';
  position: absolute; bottom: 0; left: 0; right: 0; height: 1px;
  background: linear-gradient(90deg, var(--red) 0%, transparent 60%);
}}

.pain-grid {{
  display: grid; grid-template-columns: 5fr 4fr; gap: 80px; align-items: center;
}}

.pain-quote {{
  font-family: var(--font-serif);
  font-size: 26px; line-height: 1.55; color: #fff;
  font-weight: 400;
  position: relative; padding-left: 28px;
}}
.pain-quote::before {{
  content: '';
  position: absolute; left: 0; top: 4px; bottom: 4px;
  width: 3px; background: var(--red);
}}

.pain-list {{ display: flex; flex-direction: column; gap: 28px; }}
.pain-item {{ display: flex; gap: 18px; }}
.pain-dot {{
  width: 5px; height: 5px; border-radius: 50%;
  background: var(--red); flex-shrink: 0; margin-top: 10px;
}}
.pain-text {{ font-size: 14px; color: rgba(255,255,255,.65); line-height: 1.85; }}
.pain-text strong {{ color: rgba(255,255,255,.92); }}

/* Modules section */
.modules {{
  background: var(--warm);
  padding: 88px 0;
}}

.modules-head {{ margin-bottom: 48px; }}
.modules-head h2 {{
  font-family: var(--font-serif); font-size: 30px; font-weight: 400;
  color: var(--ink); margin: 14px 0 10px; line-height: 1.35;
}}
.modules-head p {{ font-size: 14px; color: var(--gray-50); }}

.modules-grid {{
  display: grid; grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}}

.module-card {{
  background: var(--surface);
  border-radius: 4px;
  border: 1px solid var(--gray-10); overflow: hidden;
  box-shadow: 0 2px 16px rgba(0,0,0,.04);
  transition: box-shadow .3s var(--ease), transform .3s var(--ease);
}}
.module-card:hover {{
  box-shadow: 0 12px 40px rgba(0,0,0,.09);
  transform: translateY(-3px);
}}

.module-hd {{
  padding: 26px 32px; border-bottom: 1px solid var(--gray-10);
  display: flex; align-items: flex-end; justify-content: space-between;
}}
.module-ordinal {{
  font-size: 10px; letter-spacing: .18em; color: var(--red);
  text-transform: uppercase; font-weight: 700; margin-bottom: 6px;
}}
.module-theme-txt {{
  font-family: var(--font-serif); font-size: 19px; font-weight: 400; color: var(--ink);
}}
.module-badge {{
  font-size: 10.5px; font-weight: 700; letter-spacing: .06em;
  background: var(--red-wash); color: var(--red);
  padding: 5px 12px; border-radius: 20px;
}}

.session-list {{ padding: 6px 0; }}
.session {{
  display: flex; gap: 20px; padding: 16px 32px;
  border-bottom: 1px solid var(--warm);
}}
.session:last-child {{ border-bottom: none; }}
.session-slot {{
  font-size: 11px; color: var(--gray-30); letter-spacing: .05em;
  flex-shrink: 0; min-width: 40px; padding-top: 2px;
}}
.session-title {{
  font-size: 13.5px; font-weight: 700; color: var(--ink); margin-bottom: 5px; line-height: 1.4;
}}
.session-chip {{
  display: inline-block; font-size: 11px; color: var(--red);
  background: var(--red-wash); padding: 2px 9px; border-radius: 10px;
}}

/* Values section */
.values {{
  background: var(--surface);
  padding: 88px 0;
}}

.values-head {{ margin-bottom: 48px; }}
.values-head h2 {{
  font-family: var(--font-serif); font-size: 30px; font-weight: 400;
  color: var(--ink); margin: 14px 0 10px; line-height: 1.35;
}}
.values-head p {{ font-size: 14px; color: var(--gray-50); }}

.values-grid {{
  display: grid; grid-template-columns: 1fr 1fr; gap: 20px;
}}

.val-card {{
  background: var(--surface);
  border-radius: 4px;
  padding: 36px 36px 32px;
  border: 1px solid var(--gray-10);
  box-shadow: 0 2px 16px rgba(0,0,0,.04);
  position: relative; overflow: hidden;
  transition: box-shadow .3s var(--ease), transform .3s var(--ease);
}}
.val-card:hover {{
  box-shadow: 0 12px 40px rgba(0,0,0,.09);
  transform: translateY(-3px);
}}
.val-card::after {{
  content: ''; position: absolute;
  top: 0; left: 0; right: 0; height: 2px;
  background: var(--gray-10);
  transition: background .3s var(--ease);
}}
.val-card:hover::after {{ background: var(--red); }}

.val-card.wide {{ grid-column: 1 / -1; }}

.val-ghost-num {{
  position: absolute; top: 12px; right: 24px;
  font-family: var(--font-serif); font-size: 96px; font-weight: 400;
  color: rgba(196,30,58,.05); line-height: 1; pointer-events: none;
  letter-spacing: -.04em;
}}

.val-num-small {{
  font-size: 10.5px; letter-spacing: .16em; text-transform: uppercase;
  color: var(--red); font-weight: 700; margin-bottom: 20px; display: block;
}}

.val-before {{
  font-size: 12.5px; color: var(--gray-30);
  text-decoration: line-through; margin-bottom: 6px; line-height: 1.5;
}}
.val-after {{
  font-size: 17px; font-weight: 700; color: var(--ink);
  line-height: 1.4; margin-bottom: 18px;
}}
.val-desc {{
  font-size: 13.5px; color: var(--gray-50); line-height: 1.85;
  border-top: 1px solid var(--gray-10); padding-top: 16px;
}}

/* Schedule */
.schedule {{
  background: var(--warm);
  padding: 88px 0;
}}

.schedule-head {{ margin-bottom: 48px; }}
.schedule-head h2 {{
  font-family: var(--font-serif); font-size: 30px; font-weight: 400;
  color: var(--ink); margin: 14px 0 10px; line-height: 1.35;
}}
.schedule-head p {{ font-size: 14px; color: var(--gray-50); }}

.days-grid {{
  display: grid; grid-template-columns: 1fr 1fr; gap: 24px;
}}

.day-card {{
  background: var(--surface); border-radius: 4px;
  border: 1px solid var(--gray-10); overflow: hidden;
  box-shadow: 0 2px 16px rgba(0,0,0,.04);
}}

.day-hd {{
  padding: 26px 32px; border-bottom: 1px solid var(--gray-10);
  display: flex; align-items: flex-end; justify-content: space-between;
}}
.day-ordinal {{
  font-size: 10px; letter-spacing: .18em; color: var(--red);
  text-transform: uppercase; font-weight: 700; margin-bottom: 6px;
}}
.day-theme-txt {{
  font-family: var(--font-serif); font-size: 19px; font-weight: 400; color: var(--ink);
}}
.day-badge {{
  font-size: 10.5px; font-weight: 700; letter-spacing: .06em;
  background: var(--red-wash); color: var(--red);
  padding: 5px 12px; border-radius: 20px;
}}

/* Outputs */
.outputs {{
  background: var(--surface);
  padding: 88px 0;
}}

.outputs-head {{ margin-bottom: 48px; }}
.outputs-head h2 {{
  font-family: var(--font-serif); font-size: 30px; font-weight: 400;
  color: var(--ink); margin: 14px 0 10px; line-height: 1.35;
}}
.outputs-head p {{ font-size: 14px; color: var(--gray-50); }}

.outputs-layout {{
  display: grid; grid-template-columns: 1fr 320px; gap: 48px; align-items: start;
}}

.output-rows {{ display: flex; flex-direction: column; gap: 10px; }}
.output-row {{
  display: flex; align-items: flex-start; gap: 20px;
  padding: 18px 22px; border-radius: 3px;
  background: var(--warm);
  border-left: 3px solid transparent;
  transition: border-color .25s var(--ease), background .25s var(--ease);
}}
.output-row:hover {{
  border-color: var(--red); background: var(--red-wash);
}}
.output-num {{
  font-family: var(--font-serif);
  font-size: 13px; font-weight: 400; color: var(--red);
  flex-shrink: 0; width: 20px; padding-top: 1px;
}}
.output-name {{
  font-size: 14px; font-weight: 700; color: var(--ink); margin-bottom: 3px;
}}
.output-note {{
  font-size: 12px; color: var(--gray-50); line-height: 1.65;
}}

.matrix-box {{
  background: var(--red); border-radius: 4px;
  padding: 36px 30px; color: #fff; position: sticky; top: 24px;
}}
.matrix-lbl {{
  font-size: 10px; letter-spacing: .2em; text-transform: uppercase;
  color: rgba(255,255,255,.55); margin-bottom: 24px; font-weight: 700;
}}
.matrix-items {{ display: flex; flex-direction: column; gap: 12px; margin-bottom: 28px; }}
.matrix-item {{
  display: flex; align-items: center; gap: 10px;
  font-size: 13px; color: rgba(255,255,255,.88);
}}
.matrix-item::before {{
  content: ''; width: 5px; height: 5px; border-radius: 50%;
  background: rgba(255,255,255,.4); flex-shrink: 0;
}}
.matrix-divider {{
  height: 1px; background: rgba(255,255,255,.15); margin-bottom: 24px;
}}
.matrix-total-num {{
  font-family: var(--font-serif); font-size: 52px; font-weight: 400;
  color: #fff; line-height: 1; display: block; letter-spacing: -.02em;
}}
.matrix-total-lbl {{
  font-size: 12px; color: rgba(255,255,255,.55); margin-top: 8px; line-height: 1.65;
}}

/* Footer */
.foot {{
  background: var(--darker); padding: 56px 0;
}}
.foot-inner {{
  display: flex; justify-content: space-between; align-items: center;
}}
.foot-left {{ display: flex; align-items: center; gap: 20px; }}
.foot-mark {{
  background: var(--red); color: #fff;
  font-size: 13px; font-weight: 700; letter-spacing: .06em;
  padding: 8px 18px; border-radius: 2px;
}}
.foot-title {{ font-size: 14px; font-weight: 700; color: rgba(255,255,255,.85); margin-bottom: 3px; }}
.foot-sub {{ font-size: 12px; color: rgba(255,255,255,.35); letter-spacing: .04em; }}
.foot-note {{
  text-align: right; font-size: 11.5px; color: rgba(255,255,255,.28); line-height: 1.8;
}}

/* Print */
@media print {{
  @page {{
    size: A3 landscape;
    margin: 1.5cm;
  }}
  body {{
    font-size: 10pt;
    line-height: 1.5;
    color: #000;
    background: #fff;
  }}
  .hero, .pain, .modules, .values, .schedule, .outputs, .foot {{
    page-break-inside: avoid;
  }}
  .hero {{
    border: none;
  }}
  .hero-stripe {{
    display: none;
  }}
  .card:hover, .module-card:hover {{
    transform: none;
    box-shadow: none;
  }}
  .container {{
    max-width: 100%;
    padding: 0;
  }}
  .modules-grid {{
    grid-template-columns: repeat(2, 1fr);
  }}
}}

@media (max-width: 860px) {{
  .container, .hero-inner {{ padding-left: 24px; padding-right: 24px; }}
  .hero-body {{ grid-template-columns: 1fr; }}
  .hero-metrics {{ flex-direction: row; border-left: none; padding-left: 0; border-top: 1px solid var(--gray-10); padding-top: 32px; margin-top: 32px; }}
  .metric {{ padding: 0 24px 0 0; border-bottom: none; text-align: left; }}
  .pain-grid {{ grid-template-columns: 1fr; gap: 48px; }}
  .modules-grid {{ grid-template-columns: 1fr; }}
  .values-grid {{ grid-template-columns: 1fr; }}
  .val-card.wide {{ grid-column: 1; }}
  .outputs-layout {{ grid-template-columns: 1fr; }}
  .matrix-box {{ position: static; }}
  .days-grid {{ grid-template-columns: 1fr; }}
  .foot-inner {{ flex-direction: column; gap: 28px; align-items: flex-start; }}
  .foot-note {{ text-align: left; }}
}}
"""


OUTLINE_HTML = '''<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>课程大纲 · 情绪信号与冲突预警</title>
<style>
''' + CSS + '''
</style>
</head>
<body>

<!-- HERO -->
<header class="hero">
  <div class="hero-stripe"></div>
  <div class="hero-inner">
    <div class="hero-top">
      <div class="brand-badge">
        <div class="brand-rect">HR课程</div>
        <div class="brand-en">HR COURSE<br>MATERIALS</div>
      </div>
      <div class="hero-tag">AI赋能 · 员工关系管理</div>
    </div>
    <div class="hero-body">
      <div>
        <p class="eyebrow hero-eyebrow">课程大纲</p>
        <h1 class="hero-h1 serif">
          情绪信号与冲突预警<br><em>AI监测沟通数据之后</em><br>人该怎么介入
        </h1>
        <p class="hero-lead">帮助HR和管理者掌握AI预警信号的识别、解读与介入决策能力，在数据驱动的人文介入场景中做出正确判断。</p>
      </div>
      <div class="hero-metrics">
        <div class="metric">
          <span class="metric-val serif">1</span>
          <span class="metric-lbl">天工作坊</span>
        </div>
        <div class="metric">
          <span class="metric-val serif">7</span>
          <span class="metric-lbl">个学习模块</span>
        </div>
        <div class="metric">
          <span class="metric-val serif">∞</span>
          <span class="metric-lbl">次实践练习</span>
        </div>
      </div>
    </div>
  </div>
</header>

<!-- PAIN -->
<section class="pain">
  <div class="container">
    <div class="pain-grid">
      <blockquote class="pain-quote serif">
        GenAI可以告诉你"谁可能有问题"，但它不能告诉你"该不该介入、怎么介入"。
      </blockquote>
      <div class="pain-list">
        <div class="pain-item">
          <div class="pain-dot"></div>
          <p class="pain-text"><strong>预警信号不等于结论：</strong>AI看到的是数据变化，不是人的处境</p>
        </div>
        <div class="pain-item">
          <div class="pain-dot"></div>
          <p class="pain-text"><strong>介入时机至关重要：</strong>过早伤害信任，过晚错失窗口</p>
        </div>
        <div class="pain-item">
          <div class="pain-dot"></div>
          <p class="pain-text"><strong>方式决定效果：</strong>让介入被感知为关心，而不是监控</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- MODULES -->
<section class="modules">
  <div class="container">
    <div class="modules-head">
      <p class="eyebrow">课程结构</p>
      <h2 class="serif">七模块系统学习路径</h2>
      <p>从认知重建到实战应用，完整掌握AI预警介入决策能力</p>
    </div>
    <div class="modules-grid">

      <div class="module-card">
        <div class="module-hd">
          <div>
            <p class="module-ordinal">模块一</p>
            <h3 class="module-theme-txt serif">认知重建</h3>
          </div>
          <span class="module-badge">认知基础</span>
        </div>
        <div class="session-list">
          <div class="session">
            <span class="session-slot">核心</span>
            <div>
              <p class="session-title">AI看到了什么，人类漏掉了什么</p>
              <span class="session-chip">理解AI预警的本质</span>
            </div>
          </div>
          <div class="session">
            <span class="session-slot">关键</span>
            <div>
              <p class="session-title">三种典型信号类型</p>
              <span class="session-chip">频率异常 · 情感偏移 · 社交网络变化</span>
            </div>
          </div>
        </div>
      </div>

      <div class="module-card">
        <div class="module-hd">
          <div>
            <p class="module-ordinal">模块二</p>
            <h3 class="module-theme-txt serif">信号解读</h3>
          </div>
          <span class="module-badge">解读能力</span>
        </div>
        <div class="session-list">
          <div class="session">
            <span class="session-slot">核心</span>
            <div>
              <p class="session-title">从数字到情境的三问法</p>
              <span class="session-chip">这个人发生了什么 · 上下文是什么 · 还有谁注意到了</span>
            </div>
          </div>
          <div class="session">
            <span class="session-slot">关键</span>
            <div>
              <p class="session-title">区分真信号与噪音</p>
              <span class="session-chip">AI误报的常见场景</span>
            </div>
          </div>
        </div>
      </div>

      <div class="module-card">
        <div class="module-hd">
          <div>
            <p class="module-ordinal">模块三</p>
            <h3 class="module-theme-txt serif">介入时机决策</h3>
          </div>
          <span class="module-badge">决策能力</span>
        </div>
        <div class="session-list">
          <div class="session">
            <span class="session-slot">核心</span>
            <div>
              <p class="session-title">时机决策矩阵</p>
              <span class="session-chip">信号强度 × 持续性 × 历史关系 × 组织情境</span>
            </div>
          </div>
          <div class="session">
            <span class="session-slot">关键</span>
            <div>
              <p class="session-title">等待期的观察任务</p>
              <span class="session-chip">主动收集信息而非空等</span>
            </div>
          </div>
        </div>
      </div>

      <div class="module-card">
        <div class="module-hd">
          <div>
            <p class="module-ordinal">模块四</p>
            <h3 class="module-theme-txt serif">介入方式设计</h3>
          </div>
          <span class="module-badge">设计能力</span>
        </div>
        <div class="session-list">
          <div class="session">
            <span class="session-slot">核心</span>
            <div>
              <p class="session-title">介入方式匹配矩阵</p>
              <span class="session-chip">根据信号类型选择介入方式</span>
            </div>
          </div>
          <div class="session">
            <span class="session-slot">关键</span>
            <div>
              <p class="session-title">让关心被感知为关心</p>
              <span class="session-chip">传递关心而非监控感</span>
            </div>
          </div>
        </div>
      </div>

      <div class="module-card">
        <div class="module-hd">
          <div>
            <p class="module-ordinal">模块五</p>
            <h3 class="module-theme-txt serif">谈话实战</h3>
          </div>
          <span class="module-badge">实战能力</span>
        </div>
        <div class="session-list">
          <div class="session">
            <span class="session-slot">核心</span>
            <div>
              <p class="session-title">三段式谈话框架</p>
              <span class="session-chip">开场 · 推进 · 共识</span>
            </div>
          </div>
          <div class="session">
            <span class="session-slot">关键</span>
            <div>
              <p class="session-title">话术对照表</p>
              <span class="session-chip">常见开场白的对错示例</span>
            </div>
          </div>
        </div>
      </div>

      <div class="module-card">
        <div class="module-hd">
          <div>
            <p class="module-ordinal">模块六</p>
            <h3 class="module-theme-txt serif">跟进与闭环</h3>
          </div>
          <span class="module-badge">闭环能力</span>
        </div>
        <div class="session-list">
          <div class="session">
            <span class="session-slot">核心</span>
            <div>
              <p class="session-title">介入效果评估表</p>
              <span class="session-chip">评估介入是否有效</span>
            </div>
          </div>
          <div class="session">
            <span class="session-slot">关键</span>
            <div>
              <p class="session-title">跟进计划模板</p>
              <span class="session-chip">谈话后7天/30天跟进节奏</span>
            </div>
          </div>
        </div>
      </div>

      <div class="module-card">
        <div class="module-hd">
          <div>
            <p class="module-ordinal">模块七</p>
            <h3 class="module-theme-txt serif">法律与伦理边界</h3>
          </div>
          <span class="module-badge">合规能力</span>
        </div>
        <div class="session-list">
          <div class="session">
            <span class="session-slot">核心</span>
            <div>
              <p class="session-title">介入合规检查清单</p>
              <span class="session-chip">判断介入行为是否越界</span>
            </div>
          </div>
          <div class="session">
            <span class="session-slot">关键</span>
            <div>
              <p class="session-title">数据使用边界</p>
              <span class="session-chip">隐私保护与合规要求</span>
            </div>
          </div>
        </div>
      </div>

      <div class="module-card">
        <div class="module-hd">
          <div>
            <p class="module-ordinal">收尾</p>
            <h3 class="module-theme-txt serif">整合应用</h3>
          </div>
          <span class="module-badge">整合输出</span>
        </div>
        <div class="session-list">
          <div class="session">
            <span class="session-slot">核心</span>
            <div>
              <p class="session-title">个人介入决策流程图</p>
              <span class="session-chip">将七个模块能力整合为可复用流程</span>
            </div>
          </div>
          <div class="session">
            <span class="session-slot">产出</span>
            <div>
              <p class="session-title">课程产出链路</p>
              <span class="session-chip">完整工具包带走</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- VALUES -->
<section class="values">
  <div class="container">
    <div class="values-head">
      <p class="eyebrow">核心价值</p>
      <h2 class="serif">学完这门课，你能做到</h2>
      <p>不只是理解概念，而是掌握一套可实际运用的介入决策框架</p>
    </div>
    <div class="values-grid">

      <div class="val-card">
        <div class="val-ghost-num serif">01</div>
        <span class="val-num-small">识别能力</span>
        <p class="val-after">区分高风险信号与正常波动噪音</p>
        <p class="val-desc">能区分"值得关注的高风险信号"和"正常波动不需要介入的噪音"，不会过度反应也不会忽视警告。</p>
      </div>

      <div class="val-card">
        <div class="val-ghost-num serif">02</div>
        <span class="val-num-small">解读能力</span>
        <p class="val-after">构建信号-情境-假设三角框架</p>
        <p class="val-desc">不会直接拿预警指标当结论，而是主动构建"可能的情境假设"，避免机械归因。</p>
      </div>

      <div class="val-card">
        <div class="val-ghost-num serif">03</div>
        <span class="val-num-small">决策能力</span>
        <p class="val-after">判断最佳介入时机与方式</p>
        <p class="val-desc">能根据信号类型、团队状态、个人判断，综合决定介入时机和方式，既不过早也不过晚。</p>
      </div>

      <div class="val-card">
        <div class="val-ghost-num serif">04</div>
        <span class="val-num-small">行动能力</span>
        <p class="val-after">设计并执行有效的关怀谈话</p>
        <p class="val-desc">能设计并执行一次有效的关怀谈话，让对方感受到关心而不是监控，建立信任而不是破坏关系。</p>
      </div>

      <div class="val-card wide">
        <div class="val-ghost-num serif">05</div>
        <span class="val-num-small">闭环能力</span>
        <p class="val-after">评估介入效果，提取组织层面学习点</p>
        <p class="val-desc">能评估介入效果，并从中提取组织层面的学习点，让每一次介入都成为组织能力提升的素材。</p>
      </div>

    </div>
  </div>
</section>

<!-- SCHEDULE -->
<section class="schedule">
  <div class="container">
    <div class="schedule-head">
      <p class="eyebrow">建议学习节奏</p>
      <h2 class="serif">一天工作坊安排</h2>
      <p>上午打牢认知基础，下午聚焦实战应用</p>
    </div>
    <div class="days-grid">
      <div class="day-card">
        <div class="day-hd">
          <div>
            <p class="day-ordinal">上午</p>
            <h3 class="day-theme-txt serif">认知构建</h3>
          </div>
          <span class="day-badge">理解框架</span>
        </div>
        <div class="session-list">
          <div class="session">
            <span class="session-slot">30min</span>
            <div>
              <p class="session-title">模块一：认知重建</p>
              <span class="session-chip">AI预警的本质与三种信号类型</span>
            </div>
          </div>
          <div class="session">
            <span class="session-slot">60min</span>
            <div>
              <p class="session-title">模块二：信号解读</p>
              <span class="session-chip">三问法与噪音识别</span>
            </div>
          </div>
          <div class="session">
            <span class="session-slot">60min</span>
            <div>
              <p class="session-title">模块三：介入时机决策</p>
              <span class="session-chip">时机决策矩阵与等待期观察</span>
            </div>
          </div>
        </div>
      </div>

      <div class="day-card">
        <div class="day-hd">
          <div>
            <p class="day-ordinal">下午</p>
            <h3 class="day-theme-txt serif">实战应用</h3>
          </div>
          <span class="day-badge">能力落地</span>
        </div>
        <div class="session-list">
          <div class="session">
            <span class="session-slot">45min</span>
            <div>
              <p class="session-title">模块四：介入方式设计</p>
              <span class="session-chip">介入方式匹配矩阵</span>
            </div>
          </div>
          <div class="session">
            <span class="session-slot">90min</span>
            <div>
              <p class="session-title">模块五：谈话实战</p>
              <span class="session-chip">三段式谈话框架 + 角色扮演</span>
            </div>
          </div>
          <div class="session">
            <span class="session-slot">45min</span>
            <div>
              <p class="session-title">模块六+七：闭环与合规</p>
              <span class="session-chip">跟进评估与法律边界</span>
            </div>
          </div>
          <div class="session">
            <span class="session-slot">30min</span>
            <div>
              <p class="session-title">收尾：整合应用</p>
              <span class="session-chip">个人介入决策流程图</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- OUTPUTS -->
<section class="outputs">
  <div class="container">
    <div class="outputs-head">
      <p class="eyebrow">课程产出</p>
      <h2 class="serif">带走这套工具，即刻应用</h2>
      <p>每个模块配套实用工具，学完就能在实际工作中使用</p>
    </div>
    <div class="outputs-layout">
      <div class="output-rows">
        <div class="output-row">
          <span class="output-num serif">I</span>
          <div>
            <p class="output-name">信号-情境-假设三角框架</p>
            <p class="output-note">模块二配套 · 把预警指标还原到具体情境</p>
          </div>
        </div>
        <div class="output-row">
          <span class="output-num serif">II</span>
          <div>
            <p class="output-name">时机决策四象限</p>
            <p class="output-note">模块三配套 · 判断"现在介入"还是"再等等"</p>
          </div>
        </div>
        <div class="output-row">
          <span class="output-num serif">III</span>
          <div>
            <p class="output-name">介入方式匹配矩阵</p>
            <p class="output-note">模块四配套 · 根据信号类型选择介入方式</p>
          </div>
        </div>
        <div class="output-row">
          <span class="output-num serif">IV</span>
          <div>
            <p class="output-name">三段式谈话框架</p>
            <p class="output-note">模块五配套 · 完整谈话流程与话术参考</p>
          </div>
        </div>
        <div class="output-row">
          <span class="output-num serif">V</span>
          <div>
            <p class="output-name">介入效果评估表</p>
            <p class="output-note">模块六配套 · 评估介入是否有效的标准</p>
          </div>
        </div>
        <div class="output-row">
          <span class="output-num serif">VI</span>
          <div>
            <p class="output-name">介入合规检查清单</p>
            <p class="output-note">模块七配套 · 判断介入行为是否越界</p>
          </div>
        </div>
      </div>

      <div>
        <div class="matrix-box">
          <p class="matrix-lbl">课程核心产出</p>
          <div class="matrix-items">
            <div class="matrix-item">信号解读工具包</div>
            <div class="matrix-item">时机决策框架</div>
            <div class="matrix-item">介入方式选择指南</div>
            <div class="matrix-item">谈话话术参考</div>
            <div class="matrix-item">效果评估工具</div>
          </div>
          <div class="matrix-divider"></div>
          <span class="matrix-total-num serif">7+</span>
          <p class="matrix-total-lbl">七个模块配套工具<br>构成完整介入决策体系</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- FOOTER -->
<footer class="foot">
  <div class="container">
    <div class="foot-inner">
      <div class="foot-left">
        <div class="foot-mark">HR</div>
        <div class="foot-info">
          <p class="foot-title">情绪信号与冲突预警</p>
          <p class="foot-sub">AI监测沟通数据之后人该怎么介入</p>
        </div>
      </div>
      <div class="foot-note">
        <p>目标学员：HRBP、员工关系专员、管理者</p>
        <p>建议时长：1天工作坊</p>
      </div>
    </div>
  </div>
</footer>

</body>
</html>'''


def main():
    output_path = r"D:\新课开发\HR\员工关系\4.情绪信号与冲突预警-AI监测沟通数据之后人该怎么介入\HTML可视化\课程大纲.html"

    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(OUTLINE_HTML)

    print(f"Created: {output_path}")


if __name__ == "__main__":
    main()
    print("Course outline HTML created!")
