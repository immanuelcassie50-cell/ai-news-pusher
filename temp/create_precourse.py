import os

base_dir = 'D:/新课开发/地产/08-AI智慧营销获客与转化新工具/混合学习课前包'

# 03_自我诊断问卷.html
content03 = '''<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>自我诊断问卷 · AI获客实战</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..900;1,9..144,300..900&family=Noto+Serif+SC:wght@300;400;500;600;700;900&family=Inter+Tight:ital,wght@0,300..700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{--ink:#0a0a0a;--ink-soft:#1f1d1a;--paper:#f5f0e6;--paper-2:#ece5d3;--paper-3:#e3dac3;--paper-4:#f9f4e9;--mist:#cfc7b3;--gold:#c9a96e;--gold-deep:#8a6f3a;--gold-light:#f0e1bc;--crimson:#8b2828;--crimson-deep:#5e1a1a;--rule:rgba(10,10,10,0.18);--rule-soft:rgba(10,10,10,0.08);--serif:"Fraunces","Noto Serif SC",Georgia,serif;--sans:"Inter Tight","Noto Serif SC",-apple-system,sans-serif;--mono:"JetBrains Mono","SF Mono",Menlo,Consolas,monospace}
body{font-family:var(--sans);background:#d9d2bf;color:var(--ink);line-height:1.6;font-size:13px}
.sheet{width:794px;min-height:1123px;margin:0 auto;background:var(--paper);padding:24px 32px 30px;position:relative;box-shadow:0 4px 32px rgba(10,10,10,0.1)}
.masthead{border-bottom:1.5px solid var(--ink);padding-bottom:12px;margin-bottom:16px}
.kicker{font-family:var(--mono);font-size:9.5px;letter-spacing:0.2em;text-transform:uppercase;color:var(--crimson);margin-bottom:4px;display:flex;align-items:center;gap:10px;font-weight:500}
.kicker::after{content:"";flex:1;height:1px;background:var(--crimson);opacity:0.4}
.brand-pill{background:var(--ink);color:var(--paper);padding:2px 8px;font-family:var(--mono);font-size:9.5px;letter-spacing:0.18em}
.title{font-family:var(--serif);font-weight:600;font-size:32px;line-height:1.1;letter-spacing:-0.015em;color:var(--ink);margin-bottom:4px}
.title em{font-style:italic;font-weight:400;color:var(--crimson)}
.subtitle{font-family:var(--serif);font-style:italic;font-size:14px;color:var(--ink-soft);font-weight:300;display:flex;justify-content:space-between;align-items:flex-end;margin-top:4px}
.subtitle-right{font-family:var(--mono);font-size:9.5px;letter-spacing:0.1em;color:var(--ink-soft);text-align:right;line-height:1.5}
.subtitle-right b{color:var(--crimson);font-weight:600;display:block}
.intro{background:var(--paper-2);border:1px solid var(--rule);padding:13px 18px;margin-bottom:16px;position:relative}
.intro-tag{position:absolute;top:-8px;left:14px;background:var(--paper);padding:0 8px;font-family:var(--mono);font-size:9px;letter-spacing:0.18em;color:var(--crimson);text-transform:uppercase;font-weight:600}
.intro p{font-size:12.5px;line-height:1.6;color:var(--ink-soft);margin-bottom:6px}
.intro p:last-child{margin-bottom:0}
.intro p b{color:var(--crimson);font-weight:600}
.questions{margin-bottom:14px}
.q-block{background:var(--paper-4);border:1px solid var(--ink);margin-bottom:9px;padding:12px 16px 13px}
.q-num{font-family:var(--mono);font-size:9px;letter-spacing:0.18em;color:var(--crimson);font-weight:600;margin-bottom:4px}
.q-text{font-family:var(--serif);font-weight:500;font-size:14px;line-height:1.4;color:var(--ink);margin-bottom:9px}
.q-text em{font-style:italic;color:var(--crimson);font-weight:500}
.options{display:grid;gap:5px}
.opt{display:flex;align-items:center;gap:8px;padding:6px 10px;background:var(--paper);border:1px solid var(--rule-soft);cursor:pointer;font-size:12px;line-height:1.4;color:var(--ink-soft);transition:all .15s}
.opt:hover{background:var(--paper-2);border-color:var(--mist)}
.opt input{margin:0;accent-color:var(--crimson);cursor:pointer}
.opt.selected{background:var(--paper-2);border-color:var(--crimson);color:var(--ink);font-weight:500}
.opt-text{flex:1}
.opt-tag{font-family:var(--mono);font-size:9px;letter-spacing:0.1em;color:var(--gold-deep);background:var(--gold-light);padding:1px 6px;white-space:nowrap}
.text-input{width:100%;border:1px solid var(--rule);background:var(--paper);padding:7px 10px;font-family:var(--sans);font-size:12px;color:var(--ink);outline:none;resize:vertical;min-height:60px}
.text-input:focus{border-color:var(--crimson);background:var(--paper-4)}
.submit-wrap{margin:16px 0;text-align:center}
.btn-submit{background:var(--ink);color:var(--paper);border:none;padding:12px 36px;font-family:var(--mono);font-size:11px;letter-spacing:0.2em;text-transform:uppercase;cursor:pointer;font-weight:600;transition:all .15s}
.btn-submit:hover{background:var(--crimson)}
.btn-print{background:var(--paper-2);color:var(--ink);border:1px solid var(--ink);padding:11px 28px;font-family:var(--mono);font-size:10.5px;letter-spacing:0.2em;text-transform:uppercase;cursor:pointer;font-weight:600;margin-left:8px}
.report{display:none;margin-top:14px}
.report.show{display:block}
.report-head{background:var(--ink);color:var(--paper);padding:18px 24px;margin-bottom:14px;position:relative}
.report-head::after{content:"";position:absolute;bottom:-1px;left:0;right:0;height:3px;background:var(--gold)}
.report-tag{font-family:var(--mono);font-size:9.5px;letter-spacing:0.2em;color:var(--gold);margin-bottom:6px}
.report-name{font-family:var(--serif);font-size:22px;font-weight:500;margin-bottom:4px;line-height:1.25}
.report-name em{font-style:italic;color:var(--gold);font-weight:500}
.report-sub{font-family:var(--serif);font-style:italic;font-size:13px;color:var(--paper-2)}
.persona-card{background:var(--paper-2);border:1px solid var(--rule);padding:14px 18px;margin-bottom:14px;position:relative}
.persona-tag{font-family:var(--mono);font-size:9px;letter-spacing:0.2em;color:var(--crimson);margin-bottom:6px;font-weight:600}
.persona-title{font-family:var(--serif);font-size:18px;font-weight:500;margin-bottom:8px;line-height:1.3}
.persona-title em{color:var(--crimson);font-style:italic}
.persona-desc{font-size:12px;line-height:1.6;color:var(--ink-soft);margin-bottom:8px}
.persona-meta{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:8px;padding-top:8px;border-top:1px dashed var(--rule)}
.meta-item{font-size:11px;line-height:1.4}
.meta-item .meta-label{font-family:var(--mono);font-size:8.5px;letter-spacing:0.12em;color:var(--gold-deep);display:block;margin-bottom:2px;font-weight:600}
.meta-item .meta-val{font-family:var(--serif);font-size:12.5px;color:var(--ink);font-style:italic}
.radar-wrap{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:14px}
.score-card{background:var(--paper-4);border:1px solid var(--ink);padding:14px 16px}
.score-tag{font-family:var(--mono);font-size:9px;letter-spacing:0.2em;color:var(--gold-deep);margin-bottom:8px;font-weight:600}
.score-row{display:grid;grid-template-columns:90px 1fr 32px;gap:8px;align-items:center;margin-bottom:6px;font-size:11px}
.score-row:last-child{margin-bottom:0}
.score-name{font-family:var(--serif);font-size:12px;color:var(--ink)}
.score-bar{height:8px;background:var(--paper-2);border:1px solid var(--rule);position:relative;overflow:hidden}
.score-fill{height:100%;background:linear-gradient(90deg,var(--crimson) 0%,var(--gold-deep) 100%);transition:width .6s ease-out}
.score-num{font-family:var(--mono);font-size:11px;color:var(--crimson);text-align:right;font-weight:600}
.radar-card{background:var(--ink);color:var(--paper);padding:14px 16px}
.radar-tag{font-family:var(--mono);font-size:9px;letter-spacing:0.2em;color:var(--gold);margin-bottom:8px;font-weight:600}
.radar-svg{width:100%;height:auto;display:block}
.rec-card{background:var(--paper-3);border:1px solid var(--ink);border-left:3px solid var(--crimson);padding:14px 18px;margin-bottom:14px}
.rec-tag{font-family:var(--mono);font-size:9px;letter-spacing:0.2em;color:var(--crimson);margin-bottom:6px;font-weight:600}
.rec-card h3{font-family:var(--serif);font-style:italic;font-weight:500;font-size:15px;line-height:1.3;color:var(--ink);margin-bottom:6px}
.rec-card p{font-size:11.5px;line-height:1.55;color:var(--ink-soft);margin-bottom:6px}
.rec-card p:last-child{margin-bottom:0}
.rec-list{list-style:none;padding:0;margin-top:6px}
.rec-list li{padding:3px 0 3px 14px;position:relative;font-size:11.5px;line-height:1.5;color:var(--ink-soft);border-bottom:1px dashed var(--rule-soft)}
.rec-list li:last-child{border-bottom:none}
.rec-list li::before{content:"→";position:absolute;left:0;top:3px;color:var(--crimson);font-family:var(--serif);font-weight:600}
.rec-list li b{color:var(--crimson);font-weight:600}
.signoff{margin-top:14px;padding-top:10px;border-top:1px solid var(--rule);display:flex;justify-content:space-between;align-items:center;font-family:var(--mono);font-size:9.5px;letter-spacing:0.12em;color:var(--ink-soft)}
.signoff .seal{display:inline-block;border:1px solid var(--crimson);color:var(--crimson);padding:3px 9px;font-family:var(--serif);font-style:italic;letter-spacing:0;font-size:11px}
@page{size:A4 portrait;margin:10mm}
@media print{body{background:white}.sheet{width:100%;min-height:auto;margin:0;padding:18px 24px;box-shadow:none}.submit-wrap{display:none}.report{display:block !important}.q-block{page-break-inside:avoid}.report-head,.btn-submit,.report,.persona-card,.score-card,.radar-card,.rec-card{-webkit-print-color-adjust:exact;print-color-adjust:exact}}
</style>
</head>
<body>
<div class="sheet">
<header class="masthead">
  <div class="kicker"><span class="brand-pill">PRE-WORK · 03/06</span>SELF-ASSESSMENT · 自我诊断问卷</div>
  <h1 class="title">测一测，你的<em>AI获客能力</em>在哪个阶段</h1>
  <div class="subtitle">
    <span>用 10 分钟做 16 道题，拿到属于你的诊断报告和课前学习建议</span>
    <span class="subtitle-right"><b>作答时长 · 10 分钟</b>16 题 · 含文本题 · 提交后立即生成报告</span>
  </div>
</header>
<div class="intro"><div class="intro-tag">关于这份问卷</div>
  <p>这不是考试，<b>没有标准答案</b>。它的功能是帮你<em>校准自己当前在哪个起点</em>——分数低不是问题，是告诉你「这门课里哪几章对你最关键」。</p>
  <p>建议凭<em>第一印象</em>作答，不要反复纠结。所有选项分数一致，不存在「正确答案」。</p>
</div>
<form id="quizForm" class="questions" onsubmit="return false">
  <div class="q-block"><div class="q-num">Q01 · AI使用经验</div><div class="q-text">你目前使用AI工具的频率大概是？</div>
    <div class="options" data-q="1" data-type="single">
      <label class="opt"><input type="radio" name="q1" value="0"><span class="opt-text">几乎没用过</span><span class="opt-tag">零基础</span></label>
      <label class="opt"><input type="radio" name="q1" value="1"><span class="opt-text">偶尔用过一两次</span><span class="opt-tag">尝鲜</span></label>
      <label class="opt"><input type="radio" name="q1" value="2"><span class="opt-text">每周用几次</span><span class="opt-tag">日常</span></label>
      <label class="opt"><input type="radio" name="q1" value="3"><span class="opt-text">每天都在用</span><span class="opt-tag">高频</span></label>
    </div>
  </div>
  <div class="q-block"><div class="q-num">Q02 · 主要使用场景</div><div class="q-text">你主要在<em>哪个场景</em>用AI工具？（可多选）</div>
    <div class="options" data-q="2" data-type="multi">
      <label class="opt"><input type="checkbox" name="q2" value="copy"><span class="opt-text">写文案、海报、话术</span><span class="opt-tag">内容</span></label>
      <label class="opt"><input type="checkbox" name="q2" value="analyze"><span class="opt-text">分析客户、查资料</span><span class="opt-tag">分析</span></label>
      <label class="opt"><input type="checkbox" name="q2" value="follow"><span class="opt-text">客户跟进、催单</span><span class="opt-tag">跟进</span></label>
      <label class="opt"><input type="checkbox" name="q2" value="none"><span class="opt-text">还没找到适合的场景</span><span class="opt-tag">待探索</span></label>
    </div>
  </div>
  <div class="q-block"><div class="q-num">Q03 · 获客挑战</div><div class="q-text">你目前<em>最头疼</em>的获客问题是？（可多选）</div>
    <div class="options" data-q="3" data-type="multi">
      <label class="opt"><input type="checkbox" name="q3" value="cold"><span class="opt-text">拓客难，客户来源不稳定</span><span class="opt-tag">拓客</span></label>
      <label class="opt"><input type="checkbox" name="q3" value="content"><span class="opt-text">发圈没人看，文案没吸引力</span><span class="opt-tag">内容</span></label>
      <label class="opt"><input type="checkbox" name="q3" value="convert"><span class="opt-text">客户聊着聊着就不回了</span><span class="opt-tag">转化</span></label>
      <label class="opt"><input type="checkbox" name="q3" value="compete"><span class="opt-text">同行竞争激烈，差异化难</span><span class="opt-tag">竞争</span></label>
      <label class="opt"><input type="checkbox" name="q3" value="time"><span class="opt-text">时间不够用，效率低</span><span class="opt-tag">效率</span></label>
    </div>
  </div>
  <div class="q-block"><div class="q-num">Q04 · 客户分类</div><div class="q-text">你现在<em>有没有</em>对客户进行分类（如刚需/改善/投资）？</div>
    <div class="options" data-q="4" data-type="single">
      <label class="opt"><input type="radio" name="q4" value="0"><span class="opt-text">没有，所有客户一样对待</span></label>
      <label class="opt"><input type="radio" name="q4" value="1"><span class="opt-text">大概分过，但没有系统化</span></label>
      <label class="opt"><input type="radio" name="q4" value="2"><span class="opt-text">有明确标准，正在执行</span></label>
      <label class="opt"><input type="radio" name="q4" value="3"><span class="opt-text">分类清晰，而且用AI辅助分析</span></label>
    </div>
  </div>
  <div class="q-block"><div class="q-num">Q05 · 方法 1 自评</div><div class="q-text">发朋友圈或推文时，我会<em>先想好给谁看</em>，再决定内容。</div>
    <div class="options" data-q="5" data-type="single-scale">
      <label class="opt"><input type="radio" name="q5" value="1"><span class="opt-text">从不</span></label>
      <label class="opt"><input type="radio" name="q5" value="2"><span class="opt-text">偶尔</span></label>
      <label class="opt"><input type="radio" name="q5" value="3"><span class="opt-text">经常</span></label>
      <label class="opt"><input type="radio" name="q5" value="4"><span class="opt-text">总是</span></label>
    </div>
  </div>
  <div class="q-block"><div class="q-num">Q06 · 方法 2 自评</div><div class="q-text">我知道AI擅长什么、<em>不擅长什么</em>，不会过度依赖AI。</div>
    <div class="options" data-q="6" data-type="single-scale">
      <label class="opt"><input type="radio" name="q6" value="1"><span class="opt-text">从不</span></label>
      <label class="opt"><input type="radio" name="q6" value="2"><span class="opt-text">偶尔</span></label>
      <label class="opt"><input type="radio" name="q6" value="3"><span class="opt-text">经常</span></label>
      <label class="opt"><input type="radio" name="q6" value="4"><span class="opt-text">总是</span></label>
    </div>
  </div>
  <div class="q-block"><div class="q-num">Q07 · 方法 3 自评</div><div class="q-text">我能<em>把AI生成的内容改写成</em>符合我说话风格、客户能接受的话术。</div>
    <div class="options" data-q="7" data-type="single-scale">
      <label class="opt"><input type="radio" name="q7" value="1"><span class="opt-text">从不</span></label>
      <label class="opt"><input type="radio" name="q7" value="2"><span class="opt-text">偶尔</span></label>
      <label class="opt"><input type="radio" name="q7" value="3"><span class="opt-text">经常</span></label>
      <label class="opt"><input type="radio" name="q7" value="4"><span class="opt-text">总是</span></label>
    </div>
  </div>
  <div class="q-block"><div class="q-num">Q08 · 方法 4 自评</div><div class="q-text">我会<em>记录每条内容的阅读量、回复率</em>，判断效果。</div>
    <div class="options" data-q="8" data-type="single-scale">
      <label class="opt"><input type="radio" name="q8" value="1"><span class="opt-text">从不</span></label>
      <label class="opt"><input type="radio" name="q8" value="2"><span class="opt-text">偶尔</span></label>
      <label class="opt"><input type="radio" name="q8" value="3"><span class="opt-text">经常</span></label>
      <label class="opt"><input type="radio" name="q8" value="4"><span class="opt-text">总是</span></label>
    </div>
  </div>
  <div class="q-block"><div class="q-num">Q09 · 内容产出频率</div><div class="q-text">你每周<em>原创内容</em>（朋友圈/推文/话术）的产出量是？</div>
    <div class="options" data-q="9" data-type="single">
      <label class="opt"><input type="radio" name="q9" value="0"><span class="opt-text">几乎不产内容</span></label>
      <label class="opt"><input type="radio" name="q9" value="1"><span class="opt-text">1-3 条</span></label>
      <label class="opt"><input type="radio" name="q9" value="2"><span class="opt-text">4-7 条</span></label>
      <label class="opt"><input type="radio" name="q9" value="3"><span class="opt-text">7 条以上</span></label>
    </div>
  </div>
  <div class="q-block"><div class="q-num">Q10 · 客户反馈追踪</div><div class="q-text">发了内容之后，你会<em>追踪客户的反馈</em>吗？</div>
    <div class="options" data-q="10" data-type="single">
      <label class="opt"><input type="radio" name="q10" value="0"><span class="opt-text">发了就发了，不知道客户看没看</span></label>
      <label class="opt"><input type="radio" name="q10" value="1"><span class="opt-text">偶尔有客户回复，会注意</span></label>
      <label class="opt"><input type="radio" name="q10" value="2"><span class="opt-text">有记录，对谁看了、谁回复有印象</span></label>
      <label class="opt"><input type="radio" name="q10" value="3"><span class="opt-text">有系统记录，能说出哪类内容效果更好</span></label>
    </div>
  </div>
  <div class="q-block"><div class="q-num">Q11 · 遇到问题的处理</div><div class="q-text">当AI生成的内容<em>客户不接受</em>时，你会？</div>
    <div class="options" data-q="11" data-type="single">
      <label class="opt"><input type="radio" name="q11" value="a"><span class="opt-text">认为是AI的问题，换个工具试试</span></label>
      <label class="opt"><input type="radio" name="q11" value="b"><span class="opt-text">自己重写，不再用AI</span></label>
      <label class="opt"><input type="radio" name="q11" value="c"><span class="opt-text">分析客户不接受的点，调整提示词再试</span></label>
      <label class="opt"><input type="radio" name="q11" value="d"><span class="opt-text">人工改写AI内容，保留AI效率加入人工温度</span></label>
    </div>
  </div>
  <div class="q-block"><div class="q-num">Q12 · 效率对比</div><div class="q-text">用AI辅助获客后，你感觉<em>效率提升</em>了吗？</div>
    <div class="options" data-q="12" data-type="single">
      <label class="opt"><input type="radio" name="q12" value="0"><span class="opt-text">没什么感觉，时间差不多</span></label>
      <label class="opt"><input type="radio" name="q12" value="1"><span class="opt-text">有一点提升，但不明显</span></label>
      <label class="opt"><input type="radio" name="q12" value="2"><span class="opt-text">明显快了，原来2小时现在1小时</span></label>
      <label class="opt"><input type="radio" name="q12" value="3"><span class="opt-text">效率大幅提升，而且内容质量更稳定</span></label>
    </div>
  </div>
  <div class="q-block"><div class="q-num">Q13 · 最想改善的点</div><div class="q-text">你最想通过这门课<em>改善的1个点</em>是什么？</div>
    <textarea class="text-input" name="q13" placeholder="例如：不知道怎么让AI生成更贴合我风格的内容 / 客户跟进效率低 / 不知道什么是好的客户画像"></textarea>
  </div>
  <div class="q-block"><div class="q-num">Q14 · 场景设想</div><div class="q-text">学完这门课，你最想先在<em>哪个场景</em>用AI获客？</div>
    <textarea class="text-input" name="q14" placeholder="例如：开盘前的朋友圈预热 / 经纪人培训的话术准备 / 首次客户咨询的开场白"></textarea>
  </div>
  <div class="q-block"><div class="q-num">Q15 · 担心的问题</div><div class="q-text">你对AI获客<em>最大的担心</em>是什么？</div>
    <textarea class="text-input" name="q15" placeholder="例如：客户看出来是AI写的 / 不知道怎么保护客户隐私 / 担心被同行嘲笑"></textarea>
  </div>
</form>
<div class="submit-wrap">
  <button type="button" class="btn-submit" id="submitBtn" onclick="generateReport()">提交 · 生成诊断报告</button>
  <button type="button" class="btn-print" id="printBtn" onclick="window.print()" style="display:none;">打印 / 保存 PDF</button>
</div>
<div class="report" id="reportArea">
  <div class="report-head">
    <div class="report-tag">YOUR PERSONAL DIAGNOSIS · 个人诊断报告</div>
    <div class="report-name" id="rPersonaName">—</div>
    <div class="report-sub" id="rPersonaSub">—</div>
  </div>
  <div class="persona-card">
    <div class="persona-tag">你的画像标签</div>
    <div class="persona-title" id="rTag">—</div>
    <div class="persona-desc" id="rDesc">—</div>
    <div class="persona-meta">
      <div class="meta-item"><span class="meta-label">起步阶段</span><span class="meta-val" id="rStage">—</span></div>
      <div class="meta-item"><span class="meta-label">最强方法</span><span class="meta-val" id="rStrong">—</span></div>
      <div class="meta-item"><span class="meta-label">最短板</span><span class="meta-val" id="rWeak">—</span></div>
    </div>
  </div>
  <div class="radar-wrap">
    <div class="score-card"><div class="score-tag">四方法得分（满分 4）</div><div id="scoreRows"></div></div>
    <div class="radar-card"><div class="radar-tag">四方法能力雷达</div><svg class="radar-svg" viewBox="0 0 200 200" id="radarSvg"></svg></div>
  </div>
  <div class="rec-card">
    <div class="rec-tag">课前 7 天 · 学习建议</div>
    <h3>基于你的诊断，这 7 天重点做这 3 件事</h3>
    <ul class="rec-list" id="rRecList"></ul>
  </div>
  <div class="rec-card">
    <div class="rec-tag">课中重点关注</div>
    <h3 id="rFocusTitle">—</h3>
    <p id="rFocusDesc">—</p>
  </div>
</div>
<div class="signoff">
  <span>课程 · AI获客实战：地产营销一线人员的能力重塑</span>
  <span class="seal">Pre-Work · 文件 03 / 06</span>
  <span>建议做完间隔 24 小时再填 04 场景卡</span>
</div>
</div>
<script>
const METHOD_NAMES = ["AI辅助内容生成","客户画像个性化","AI+人工协同","数据驱动迭代"];
function val(name){const els=document.getElementsByName(name);for(const e of els){if(e.checked)return e.value;}return "";}
function vals(name){const els=document.getElementsByName(name);const r=[];for(const e of els){if(e.checked)r.push(e.value);}return r;}
function textVal(name){const e=document.querySelector("[name=\\""+name+"\\"]");return e?e.value.trim():"";}
document.querySelectorAll(".opt input").forEach(input=>{input.addEventListener("change",function(){const opt=this.closest(".opt");const wrap=this.closest(".options");if(this.type==="radio"){wrap.querySelectorAll(".opt").forEach(o=>o.classList.remove("selected"));opt.classList.add("selected");}else{opt.classList.toggle("selected",this.checked);}});});
function buildPersona(answers){const scores=[parseInt(answers.q5||"0",10),parseInt(answers.q6||"0",10),parseInt(answers.q7||"0",10),parseInt(answers.q8||"0",10)];const total=scores.reduce((a,b)=>a+b,0);const avg=total/4;const maxIdx=scores.indexOf(Math.max(...scores));const minIdx=scores.indexOf(Math.min(...scores));let stage="起步阶段";if(answers.q1==="3"&&avg>=3)stage="AI获客熟手";else if(answers.q1==="2"&&avg>=2.5)stage="成长期";else if(answers.q1==="1")stage="尝鲜期";else if(answers.q1==="0")stage="零基础";let tag="AI获客小白";let desc="你对AI获客还处于观望阶段，这门课会帮你建立完整的AI获客认知框架。";if(avg>=3.3){tag="AI获客先锋";desc="你已经具备较强的AI获客能力，这门课会帮你<em>系统化你的经验</em>，形成可复制的获客方法论。";}else if(avg>=2.8&&scores[0]>=3){tag="内容驱动型";desc="你擅长用AI生成内容，<em>方法1（AI辅助内容生成）</em>是你的强项。但<em>方法4（数据驱动迭代）</em>是短板——需要学会用数据验证内容效果。";}else if(avg>=2.8&&scores[2]>=3){tag="协同型获客者";desc="你知道AI和人工如何配合，<em>方法3（AI+人工协同）</em>已经上手。但<em>方法2（客户画像）</em>需要加强——个性化是转化的关键。";}else if(scores[3]<=2){tag="效果追踪缺位型";desc="你在用AI发内容，但没有<em>追踪效果</em>——不知道客户看没看、效果好不好。方法4是这堂课对你最关键的章节。";}else if(scores[0]<=2){tag="内容生成混乱型";desc="你还没建立<em>先定客户再生成内容</em>的思维。方法1和方法2是这门课的底层基础，需要先补。";}return{scores,total,avg,stage,strong:METHOD_NAMES[maxIdx],weak:METHOD_NAMES[minIdx],tag,desc};}
function buildRecs(persona,answers){const recs=[];recs.push({title:"重读 02_预习材料 中「"+persona.weak+"」一节",desc:"你的最短板是 <em>"+persona.weak+"</em>。课前7天专门花15分钟反复读这一节，并在脑子里复盘你最近一次获客内容，看看哪一步可以用上。"});const improve=textVal("q13");if(improve){recs.push({title:"把你写下的「想改善的1个点」放进 04 场景卡",desc:"你写的改善点是：<em>"+improve+"</em>。把它锁定到「我的场景卡」里，课中会围绕它做迭代。"});}recs.push({title:"挑一个你最近想发的获客内容主题",desc:"带着<em>真实的获客任务</em>进教室，而不是空想。想想你最近最想发什么内容的朋友圈，先在脑子里过一遍。"});return recs;}
function buildFocus(persona,answers){const map={"AI辅助内容生成":{title:"方法1 · AI辅助内容生成是底层基础",desc:"课程前半段会系统讲AI生成内容的正确姿势——不是让AI替你写，而是你指挥AI按你的策略写。"},"客户画像个性化":{title:"方法2 · 客户画像与个性化",desc:"第二天上午核心环节。你会学到如何用AI做客户画像、并根据不同类型客户调整内容策略。"},"AI+人工协同":{title:"方法3 · AI+人工协同闭环",desc:"最容易被忽视的环节。AI生成是起点，人工改写才是关键——这一步做不好，前面的努力都白费。"},"数据驱动迭代":{title:"方法4 · 数据驱动迭代",desc:"最后一天会让你建立<em>数据记录</em>的习惯。没有数据就没有迭代——这是AI获客持续优化的核心。"}};return map[persona.weak];}
function generateReport(){const required=["q1","q4","q5","q6","q7","q8","q9","q10"];for(const r of required){if(!val(r)){alert("请完成所有题目后再提交（缺少 "+r+"）");return;}}const answers={q1:val("q1"),q2:vals("q2"),q3:vals("q3"),q4:val("q4"),q5:val("q5"),q6:val("q6"),q7:val("q7"),q8:val("q8"),q9:val("q9"),q10:val("q10"),q11:val("q11"),q12:val("q12")};const persona=buildPersona(answers);const recs=buildRecs(persona,answers);const focus=buildFocus(persona,answers);document.getElementById("rPersonaName").innerHTML="你是 <em>"+persona.tag+"</em>";document.getElementById("rPersonaSub").innerHTML="基于你的AI使用经验 + 四方法得分";document.getElementById("rTag").innerHTML=persona.tag;document.getElementById("rDesc").innerHTML=persona.desc;document.getElementById("rStage").textContent=persona.stage;document.getElementById("rStrong").textContent=persona.strong;document.getElementById("rWeak").textContent=persona.weak;const rows=document.getElementById("scoreRows");rows.innerHTML="";persona.scores.forEach((s,i)=>{const pct=(s/4)*100;rows.insertAdjacentHTML("beforeend","<div class=\\"score-row\\"><div class=\\"score-name\\">M"+(i+1)+" "+METHOD_NAMES[i]+"</div><div class=\\"score-bar\\"><div class=\\"score-fill\\" style=\\"width:"+pct+"\\"></div></div><div class=\\"score-num\\">"+s.toFixed(1)+"</div></div>");});drawRadar(persona.scores);const recList=document.getElementById("rRecList");recList.innerHTML="";recs.forEach(r=>{recList.insertAdjacentHTML("beforeend","<li><b>"+r.title+"</b> — "+r.desc+"</li>");});document.getElementById("rFocusTitle").textContent=focus.title;document.getElementById("rFocusDesc").innerHTML=focus.desc;document.getElementById("quizForm").style.display="none";document.querySelector(".intro").style.display="none";document.getElementById("reportArea").classList.add("show");document.getElementById("submitBtn").style.display="none";document.getElementById("printBtn").style.display="inline-block";window.scrollTo({top:0,behavior:"smooth"});}
function drawRadar(scores){const svg=document.getElementById("radarSvg");const cx=100,cy=100,R=78;const n=scores.length;const angleStep=(Math.PI*2)/n;let html="";for(let level=1;level<=4;level++){const r=(R/4)*level;const points=[];for(let i=0;i<n;i++){const a=-Math.PI/2+i*angleStep;points.push((cx+r*Math.cos(a)).toFixed(1)+","+(cy+r*Math.sin(a)).toFixed(1));}html+="<polygon points=\\""+points.join(" ")+"\\" fill=\\"none\\" stroke=\\"rgba(201,169,110,"+(0.15+level*0.08)+")\\" stroke-width=\\"0.5\\"/>";}for(let i=0;i<n;i++){const a=-Math.PI/2+i*angleStep;const x2=cx+R*Math.cos(a);const y2=cy+R*Math.sin(a);html+="<line x1=\\""+cx+"\\" y1=\\""+cy+"\\" x2=\\""+x2.toFixed(1)+"\\" y2=\\""+y2.toFixed(1)+"\\" stroke=\\"rgba(201,169,110,0.25)\\" stroke-width=\\"0.5\\"/>";}const dataPoints=[];for(let i=0;i<n;i++){const a=-Math.PI/2+i*angleStep;const r=(R*scores[i])/4;dataPoints.push((cx+r*Math.cos(a)).toFixed(1)+","+(cy+r*Math.sin(a)).toFixed(1));}html+="<polygon points=\\""+dataPoints.join(" ")+"\\" fill=\\"rgba(139,40,40,0.25)\\" stroke=\\"#c9a96e\\" stroke-width=\\"1.5\\"/>";for(let i=0;i<n;i++){const a=-Math.PI/2+i*angleStep;const r=(R*scores[i])/4;const x=cx+r*Math.cos(a);const y=cy+r*Math.sin(a);html+="<circle cx=\\""+x.toFixed(1)+"\\" cy=\\""+y.toFixed(1)+"\\" r=\\"2.5\\" fill=\\"#c9a96e\\"/>";}const labels=["AI内容","客户画像","人机协同","数据迭代"];for(let i=0;i<n;i++){const a=-Math.PI/2+i*angleStep;const lr=R+12;const x=cx+lr*Math.cos(a);const y=cy+lr*Math.sin(a);let anchor="middle";if(Math.cos(a)>0.1)anchor="start";else if(Math.cos(a)<-0.1)anchor="end";html+="<text x=\\""+x.toFixed(1)+"\\" y=\\""+y.toFixed(1)+"\\" text-anchor=\\""+anchor+"\\" dominant-baseline=\\"middle\\" fill=\\"#f5f0e6\\" font-family=\\"Noto Serif SC, serif\\" font-size=\\"9\\" font-style=\\"italic\\">"+labels[i]+"</text>";}svg.innerHTML=html;}
</script>
</body>
</html>'''

with open(f'{base_dir}/03_自我诊断问卷.html', 'w', encoding='utf-8') as f:
    f.write(content03)
print('03_自我诊断问卷.html created')
