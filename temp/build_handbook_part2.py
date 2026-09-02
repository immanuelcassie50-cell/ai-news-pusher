#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Build the student handbook HTML - Part 2: TOC + Hero + Intro sections."""

OUTPUT_PATH = r"D:\新课开发\金融学\03-基金定投实战-选基择时与止盈策略\学员手册\03-学员手册.html"

def append(content):
    with open(OUTPUT_PATH, 'a', encoding='utf-8') as f:
        f.write(content)
    print(f"Appended {len(content)} bytes")

# TOC
toc = '''
<!-- TOC -->
<nav class="toc">
  <div class="toc-inner">
    <h2 class="toc-title serif">课程内容导览</h2>
    <div class="toc-grid">
      <a href="#intro" class="toc-item"><span class="toc-num">00</span><span class="toc-text">引言：在我们开始之前</span></a>
      <a href="#h1" class="toc-item"><span class="toc-num">01</span><span class="toc-text">习惯1：认识基金——基金到底是什么</span></a>
      <a href="#h2" class="toc-item"><span class="toc-num">02</span><span class="toc-text">习惯2：选基策略——如何挑选好基金</span></a>
      <a href="#h3" class="toc-item"><span class="toc-num">03</span><span class="toc-text">习惯3：定投原理——让时间成为你的朋友</span></a>
      <a href="#h4" class="toc-item"><span class="toc-num">04</span><span class="toc-text">习惯4：止盈策略——会卖的是师傅</span></a>
      <a href="#h5" class="toc-item"><span class="toc-num">05</span><span class="toc-text">习惯5：基金组合——构建你的投资舰队</span></a>
      <a href="#closure" class="toc-item"><span class="toc-num">06</span><span class="toc-text">课程收尾：我的基金定投行动系统</span></a>
      <a href="#appendix" class="toc-item"><span class="toc-num">07</span><span class="toc-text">附录：术语速查 / 表单索引 / 计算参考</span></a>
    </div>
  </div>
</nav>

<!-- HERO -->
<header class="hero" id="top">
  <div class="hero-stripe"></div>
  <div class="hero-inner">
    <div class="hero-top">
      <div class="brand-badge">
        <div class="brand-rect">金融素养</div>
        <div class="brand-en">基金投资<br>管理能力</div>
      </div>
      <div class="hero-tag">课程三 · 基金定投实战</div>
    </div>
    <div class="hero-body">
      <div>
        <p class="eyebrow">学员手册</p>
        <h1 class="hero-h1 serif">基金定投实战<br><em>选基择时与止盈策略</em></h1>
        <p class="hero-lead">这不是一本讲义，不是一份笔记，而是一本在课堂上完成的工作台。每一个框架、每一张表单、每一道练习，都要在课堂上当场完成。</p>
      </div>
      <div class="hero-metrics">
        <div class="metric reveal"><span class="metric-val serif">5</span><span class="metric-lbl">核心习惯</span></div>
        <div class="metric reveal d1"><span class="metric-val serif">12</span><span class="metric-lbl">互动表单</span></div>
        <div class="metric reveal d2"><span class="metric-val serif">15</span><span class="metric-lbl">课堂练习</span></div>
      </div>
    </div>
  </div>
</header>
'''

append(toc)

# Info card + quotes
info_section = '''
<!-- INFO CARD -->
<section class="section section-alt">
  <div class="container">
    <div class="form-section reveal">
      <div class="form-header"><div class="form-title">学员信息</div></div>
      <div class="form-body">
        <div class="signature-line">
          <div class="signature-field"><span>学员姓名：</span><div class="line"></div></div>
          <div class="signature-field"><span>所在城市：</span><div class="line"></div></div>
        </div>
        <div class="signature-line" style="margin-top:16px;">
          <div class="signature-field"><span>课程日期：</span><div class="line"></div></div>
          <div class="signature-field"><span>课程讲师：</span><div class="line"></div></div>
        </div>
      </div>
    </div>
    <div class="insight-box reveal" style="margin-top:32px;">
      <p class="insight-quote">"定投不是懒人的躺平策略，而是聪明人的时间哲学。"</p>
      <p class="insight-quote" style="font-size:16px;">"基金赚钱的秘密，不在于选到最好的基金，而在于活得足够久。"</p>
    </div>
  </div>
</section>
'''

append(info_section)

# How to use section
how_to_use = '''
<!-- 如何使用这本手册 -->
<section class="section section-warm">
  <div class="container">
    <div class="section-head reveal">
      <p class="eyebrow">使用指南</p>
      <h2 class="serif">如何使用这本手册</h2>
      <p>这是一本在课堂上完成的工作台，不是讲义，不是笔记，不是课后读物。</p>
    </div>
    <div class="compare-grid">
      <div class="compare-card reveal">
        <div class="compare-header">
          <div class="compare-icon"><svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg></div>
          <span class="compare-name">原则一：带着真实财务状况来</span>
        </div>
        <p class="compare-desc">手册里所有的练习都要用你自己的真实财务数据，不要虚构数字。真实的数字，才有真实的改变。</p>
      </div>
      <div class="compare-card reveal d1">
        <div class="compare-header">
          <div class="compare-icon"><svg viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg></div>
          <span class="compare-name">原则二：写下来比记下来更有价值</span>
        </div>
        <p class="compare-desc">看懂了不等于会了，写下来才是真正内化的开始。每一道练习，都请认真完成，不要留空。</p>
      </div>
      <div class="compare-card reveal d2" style="grid-column:1/-1;">
        <div class="compare-header">
          <div class="compare-icon"><svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg></div>
          <span class="compare-name">原则三：这是你的定投起点，不是终点</span>
        </div>
        <p class="compare-desc">课程结束不是学习的终点，而是定投实践的起点。手册最后一章是你的30天行动计划——回到生活中，用学到的方法开始你的第一次定投。</p>
      </div>
    </div>
  </div>
</section>
'''

append(how_to_use)

# Intro section
intro = '''
<!-- 引言：在我们开始之前 -->
<section class="section section-alt" id="intro">
  <div class="container">
    <div class="module-card reveal">
      <div class="module-card-header">
        <div class="module-card-num">00</div>
        <div class="module-card-info">
          <p class="module-card-time">引言</p>
          <h2 class="module-card-title">在我们开始之前</h2>
          <p class="module-card-subtitle">课程全景图与出发点自评</p>
        </div>
      </div>
      <div class="module-card-body">
        <div class="kf" style="margin-bottom:28px;">
          <div class="kf-header">
            <div class="kf-icon"><svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg></div>
            <span class="kf-title">课程全景图</span>
          </div>
          <div class="kf-body">
            <div class="framework-ascii">
╔════════════════════════════════════════════════════════════════╗
║        模块六：基金组合与配置——构建你的投资舰队   ↺          ║
╠════════════════════════════════════════════════════════════════╣
║     模块四：止盈策略   ｜   模块五：资产配置     ｜            ║
║               第二章：实战策略（核心技能）                       ║
╠════════════════════════════════════════════════════════════════╣
║      模块二：选基策略  ｜  模块三：定投原理     ｜              ║
║               第一章：认知框架（底层逻辑）                       ║
╠════════════════════════════════════════════════════════════════╣
║                     财务安全感（底层目标）                      ║
╚════════════════════════════════════════════════════════════════╝</div>
          </div>
        </div>
        <div class="callout callout-success">
          <svg class="callout-icon" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
          <div class="callout-text">
            <strong>第一章（底层逻辑）</strong>——先建立对基金投资的基础认知：什么是基金、定投的原理、为什么要做资产配置。<br>
            <strong>第二章（核心技能）</strong>——选基策略、定投原理、止盈设计——这是基金定投最重要的三个技能点。<br>
            <strong>第三章（实战体系）</strong>——基金组合配置，让你的定投从单兵作战升级为系统化投资。<br>
            <strong>底层目标</strong>：从"盲目投资"到"系统定投"，从"追涨杀跌"到"穿越周期"。
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
'''

append(intro)

# Form 0.1
form01 = '''
<!-- 表单 0.1 出发点自评 -->
<section class="section section-warm">
  <div class="container">
    <div class="form-section reveal">
      <div class="form-header">
        <div class="form-title">表单 0.1｜出发点自评</div>
        <div class="form-subtitle">目的：了解你现在的基金投资认知起点，课程结束后用同一张表重测，看清变化 | 时间：5分钟</div>
      </div>
      <div class="form-body">
        <p style="font-size:13px;color:var(--gray-50);margin-bottom:16px;">请对照下表，如实标注你目前的状态：</p>
        <table class="data-table">
          <thead><tr><th style="width:60%;">行为特征</th><th style="text-align:center;">几乎从不</th><th style="text-align:center;">偶尔如此</th><th style="text-align:center;">经常这样</th><th style="text-align:center;">基本如此</th></tr></thead>
          <tbody>
            <tr><td>1. 我清楚基金和股票的区别</td><td style="text-align:center;">○</td><td style="text-align:center;">○</td><td style="text-align:center;">○</td><td style="text-align:center;">○</td></tr>
            <tr><td>2. 我知道什么是定投以及它的原理</td><td style="text-align:center;">○</td><td style="text-align:center;">○</td><td style="text-align:center;">○</td><td style="text-align:center;">○</td></tr>
            <tr><td>3. 我有至少一只正在定投的基金</td><td style="text-align:center;">○</td><td style="text-align:center;">○</td><td style="text-align:center;">○</td><td style="text-align:center;">○</td></tr>
            <tr><td>4. 我选基金时会看基金经理、规模、评级等指标</td><td style="text-align:center;">○</td><td style="text-align:center;">○</td><td style="text-align:center;">○</td><td style="text-align:center;">○</td></tr>
            <tr><td>5. 我有明确的止盈止损策略</td><td style="text-align:center;">○</td><td style="text-align:center;">○</td><td style="text-align:center;">○</td><td style="text-align:center;">○</td></tr>
            <tr><td>6. 我做过基金组合配置</td><td style="text-align:center;">○</td><td style="text-align:center;">○</td><td style="text-align:center;">○</td><td style="text-align:center;">○</td></tr>
            <tr><td>7. 我了解自己的风险承受能力</td><td style="text-align:center;">○</td><td style="text-align:center;">○</td><td style="text-align:center;">○</td><td style="text-align:center;">○</td></tr>
          </tbody>
        </table>
        <p style="margin-top:16px;font-size:13px;">我的"几乎从不"或"偶尔如此"共有 <strong style="color:var(--red);">______</strong> 行。这些就是你在这门课里的重点方向。</p>
      </div>
    </div>
  </div>
</section>
'''

append(form01)

# Form 0.2
form02 = '''
<!-- 表单 0.2 我的投资现状卡 -->
<section class="section section-alt">
  <div class="container">
    <div class="form-section reveal">
      <div class="form-header">
        <div class="form-title">表单 0.2｜我的投资现状卡</div>
        <div class="form-subtitle">目的：选定一个贯穿整个课程的真实定投任务，后续所有练习都围绕它展开 | 时间：5分钟</div>
      </div>
      <div class="form-body">
        <table class="data-table">
          <thead><tr><th style="width:50%;">投资现状</th><th>你的填写</th></tr></thead>
          <tbody>
            <tr><td>我目前有定投基金吗？如果有，是哪只？</td><td></td></tr>
            <tr><td>我每月用于基金定投的金额大约是</td><td>______ 元</td></tr>
            <tr><td>我目前的基金账户总市值大约是</td><td>______ 元</td></tr>
            <tr><td>我觉得自己在基金投资上最大的问题是</td><td></td></tr>
            <tr><td>如果只能提升一个投资习惯，我最想改的是</td><td></td></tr>
            <tr><td>1年后，我希望基金账户达到多少？</td><td>______ 元</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</section>
'''

append(form02)

print("Part 2 complete - TOC, Hero, Intro, Forms 0.1, 0.2 written")
