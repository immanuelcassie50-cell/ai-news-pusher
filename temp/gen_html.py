#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Generate 招商证券高净值可视化HTML"""

import os

output_path = r'D:\Downloads\xinjian\招商证券高净值服务模式教学文档.html'
os.makedirs(os.path.dirname(output_path), exist_ok=True)

html = """<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>招商证券 · 高净值客户服务经验萃取工作坊</title>
<style>
:root{
--bg:#f7f5f0;--surface:#fff;--surface2:#faf9f6;--border:#e2ddd5;--border2:#ede9e2;
--text:#1a1a1a;--text2:#5c5a56;--text3:#9a9690;
--red:#b91c1c;--red2:#dc2626;--red3:#fef2f2;--red4:#fecaca;
--orange:#c2410c;--orange2:#fff7ed;--orange3:#fed7aa;
--blue:#1e40af;--blue2:#eff6ff;--blue3:#bfdbfe;
--green:#166534;--green2:#f0fdf4;--green3:#bbf7d0;
--gray:#374151;--gray2:#6b7280;--gray3:#9ca3af;--gray4:#f3f4f6;
--shadow:0 2px 8px rgba(0,0,0,.08);--shadow2:0 4px 20px rgba(0,0,0,.12);
--radius:10px;--radius2:14px;
}
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:"Noto Sans CJK SC","PingFang SC","Microsoft YaHei","Helvetica Neue",Arial,sans-serif;background:var(--bg);color:var(--text);line-height:1.8;font-size:15px}
a{color:var(--red);text-decoration:none}
a:hover{text-decoration:underline}

/* HEADER */
.header{
background:linear-gradient(135deg,#1a1a1a 0%,#2d2520 55%,#4a1515 100%);
color:#fff;padding:60px 48px 52px;position:relative;overflow:hidden;
}
.header::before{
content:'';position:absolute;top:-60px;right:-60px;width:480px;height:480px;
background:radial-gradient(circle,rgba(185,28,28,.22) 0%,transparent 70%);pointer-events:none;
}
.header::after{
content:'';position:absolute;bottom:0;left:0;right:0;height:3px;
background:linear-gradient(90deg,var(--red),#f59e0b 40%,var(--red));
}
.header-inner{max-width:1200px;margin:0 auto;position:relative;z-index:1}
.header-badge{
display:inline-flex;align-items:center;gap:6px;
background:rgba(185,28,28,.25);border:1px solid rgba(185,28,28,.4);
color:#fca5a5;font-size:11px;font-weight:600;letter-spacing:1.5px;
padding:4px 14px;border-radius:20px;margin-bottom:20px;
}
.header h1{font-size:clamp(24px,4vw,40px);font-weight:700;line-height:1.25;
letter-spacing:-.5px;margin-bottom:16px}
.header h1 span{color:#fca5a5}
.header-desc{font-size:16px;color:rgba(255,255,255,.7);max-width:700px;line-height:1.7;margin-bottom:28px}
.header-meta{display:flex;gap:24px;flex-wrap:wrap}
.header-meta span{font-size:13px;color:rgba(255,255,255,.55);display:flex;align-items:center;gap:6px}

/* NAV */
.nav-wrap{background:var(--surface);border-bottom:1px solid var(--border);position:sticky;top:0;z-index:100;box-shadow:var(--shadow)}
.nav{max-width:1200px;margin:0 auto;display:flex;gap:0;overflow-x:auto;scrollbar-width:none}
.nav::-webkit-scrollbar{display:none}
.nav a{display:inline-flex;align-items:center;padding:13px 16px;font-size:13px;color:var(--text2);white-space:nowrap;border-bottom:3px solid transparent;transition:all .2s;flex-shrink:0}
.nav a:hover{color:var(--red);text-decoration:none}
.nav a.active{color:var(--red);border-bottom-color:var(--red);font-weight:600}
.nav .num{display:inline-flex;align-items:center;justify-content:center;width:18px;height:18px;background:var(--gray4);border-radius:50%;font-size:10px;color:var(--gray2);margin-right:5px;transition:all .2s}
.nav a:hover .num,.nav a.active .num{background:var(--red4);color:var(--red)}

/* MAIN */
.main{max-width:1200px;margin:0 auto;padding:40px 24px 80px}

/* SECTION */
.section{margin-bottom:56px;scroll-margin-top:70px}
.section-header{display:flex;align-items:flex-start;gap:16px;margin-bottom:28px;padding-bottom:20px;border-bottom:2px solid var(--border)}
.section-num{flex-shrink:0;width:46px;height:46px;border-radius:11px;background:linear-gradient(135deg,var(--red),var(--red2));color:#fff;font-size:20px;font-weight:800;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 12px rgba(185,28,28,.3)}
.section-title{font-size:21px;font-weight:700;color:var(--text);line-height:1.3;letter-spacing:-.3px}
.section-subtitle{font-size:13px;color:var(--text3);margin-top:4px}

/* CARD */
.card{background:var(--surface);border:1px solid var(--border);border-radius:var(--radius2);padding:26px 30px;margin-bottom:20px;box-shadow:var(--shadow)}
.card-title{font-size:15px;font-weight:700;color:var(--text);margin-bottom:12px;padding-bottom:10px;border-bottom:1px solid var(--border2);display:flex;align-items:center;gap:10px}
.card-title::before{content:'';display:block;width:4px;height:17px;background:var(--red);border-radius:2px;flex-shrink:0}
.card p{margin-bottom:10px;color:var(--text2);font-size:14.5px}
.card p:last-child{margin-bottom:0}

/* GRID */
.grid-2{display:grid;grid-template-columns:1fr 1fr;gap:20px}
.grid-3{display:grid;grid-template-columns:1fr 1fr 1fr;gap:16px}
.grid-4{display:grid;grid-template-columns:repeat(4,1fr);gap:14px}
@media(max-width:900px){.grid-2,.grid-3,.grid-4{grid-template-columns:1fr 1fr}.matrix-grid,.term-grid{grid-template-columns:1fr}}
@media(max-width:600px){.grid-2,.grid-3,.grid-4{grid-template-columns:1fr}.header{padding:40px 20px 36px}.main{padding:24px 16px 60px}}

/* QUOTE */
.quote{background:var(--surface2);border:1px solid var(--border);border-left:4px solid var(--red);border-radius:0 var(--radius) var(--radius) 0;padding:18px 22px;margin:16px 0}
.quote p{color:var(--text2);font-size:14.5px}
.quote strong{color:var(--text)}

/* CALLOUT */
.callout{border:1px solid var(--border);border-left:4px solid var(--red);border-radius:var(--radius);padding:16px 20px;margin:16px 0;background:var(--surface)}
.callout-title{font-weight:700;color:var(--red);margin-bottom:8px;font-size:13.5px;letter-spacing:.5px}
.callout p{font-size:14px;color:var(--text2);margin:0}

/* TAGS */
.tag{display:inline-flex;align-items:center;padding:3px 11px;border-radius:20px;font-size:11.5px;font-weight:600;margin-right:5px;margin-bottom:5px}
.tag-red{background:var(--red3);color:var(--red);border:1px solid var(--red4)}
.tag-orange{background:var(--orange2);color:var(--orange);border:1px solid var(--orange3)}
.tag-blue{background:var(--blue2);color:var(--blue);border:1px solid var(--blue3)}
.tag-green{background:var(--green2);color:var(--green);border:1px solid var(--green3)}
.tag-gray{background:var(--gray4);color:var(--gray);border:1px solid #d1d5db}

/* STEPS */
.step{display:flex;gap:14px;margin-bottom:14px}
.step-num{flex-shrink:0;width:30px;height:30px;border-radius:50%;background:var(--red);color:#fff;font-size:13px;font-weight:700;display:flex;align-items:center;justify-content:center}
.step-content{flex:1;padding-top:3px}
.step-title{font-weight:700;color:var(--text);margin-bottom:3px;font-size:14.5px}
.step-desc{font-size:13.5px;color:var(--text2)}

/* TABLES */
.table-wrap{overflow-x:auto;margin:14px 0;border-radius:var(--radius);border:1px solid var(--border)}
table{width:100%;border-collapse:collapse;font-size:13.5px}
thead{background:var(--gray4)}
th{padding:11px 15px;text-align:left;font-weight:600;color:var(--gray);font-size:12px;letter-spacing:.5px;border-bottom:1px solid var(--border)}
td{padding:11px 15px;border-bottom:1px solid var(--border2);color:var(--text2);vertical-align:top}
tbody tr:last-child td{border-bottom:none}
tbody tr:hover{background:var(--surface2)}

/* BANNER */
.banner{background:linear-gradient(135deg,#1a1a1a,#2d2520);color:#fff;border-radius:var(--radius2);padding:26px 30px;margin:20px 0;position:relative;overflow:hidden}
.banner::before{content:'';position:absolute;top:0;right:0;width:280px;height:100%;background:radial-gradient(circle at 80% 50%,rgba(185,28,28,.2),transparent 70%);pointer-events:none}
.banner h3{font-size:17px;font-weight:700;margin-bottom:9px;color:#fff}
.banner p{color:rgba(255,255,255,.7);font-size:14px;margin:0}

/* HIGHLIGHT BOX */
.hbox{border:1px solid var(--border);border-radius:var(--radius);padding:18px 22px;margin:14px 0}
.hbox-red{border-color:var(--red4);background:var(--red3)}
.hbox-orange{border-color:var(--orange3);background:var(--orange2)}
.hbox-blue{border-color:var(--blue3);background:var(--blue2)}
.hbox-title{font-size:12.5px;font-weight:700;letter-spacing:.5px;margin-bottom:8px;display:flex;align-items:center;gap:5px}
.hbox-red .hbox-title{color:var(--red)}
.hbox-orange .hbox-title{color:var(--orange)}
.hbox-blue .hbox-title{color:var(--blue)}

/* FLOW CHART */
.flow{display:flex;align-items:stretch;flex-wrap:wrap;margin:20px 0;gap:6px}
.flow-node{flex:1;min-width:180px;background:var(--surface);border:2px solid var(--border);border-radius:var(--radius);padding:14px 16px;text-align:center;position:relative}
.flow-node h4{font-size:13.5px;font-weight:700;color:var(--text);margin-bottom:5px}
.flow-node p{font-size:12px;color:var(--text3);margin:0}
.flow-node.active{border-color:var(--red);background:var(--red3)}
.flow-node.active h4{color:var(--red)}
.flow-node .node-tag{position:absolute;top:-1px;right:-1px;font-size:10px;font-weight:700;padding:2px 8px;border-radius:0 var(--radius) 0 8px}
.flow-node.active .node-tag{background:var(--red);color:#fff}
.flow-arrow{display:flex;align-items:center;justify-content:center;width:28px;flex-shrink:0;color:var(--gray3);font-size:18px}

/* MATRIX GRID */
.matrix-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin:20px 0}
.matrix-cell{border:2px solid var(--border);border-radius:var(--radius2);padding:18px 22px;position:relative;overflow:hidden}
.matrix-cell::before{content:'';position:absolute;top:0;left:0;right:0;height:3px}
.matrix-cell.main-top::before{background:linear-gradient(90deg,var(--red),var(--orange))}
.matrix-cell.sub-top::before{background:linear-gradient(90deg,var(--gray3),var(--gray2))}
.matrix-cell h4{font-size:14px;font-weight:700;margin-bottom:7px;color:var(--text)}
.matrix-cell .cell-tag{display:inline-flex;align-items:center;font-size:10.5px;font-weight:700;padding:2px 9px;border-radius:20px;margin-bottom:8px}
.matrix-cell .cell-tag.main{background:var(--red3);color:var(--red)}
.matrix-cell .cell-tag.sub{background:var(--gray4);color:var(--gray2)}
.matrix-cell p{font-size:13px;color:var(--text2);margin:0}

/* DIALOG */
.dialog-box{background:var(--surface2);border:1px solid var(--border);border-radius:var(--radius);padding:16px 20px;margin:12px 0;position:relative}
.dialog-tag{position:absolute;top:-1px;right:14px;background:var(--surface);border:1px solid var(--border);border-radius:0 0 7px 7px;padding:2px 12px;font-size:10.5px;font-weight:700;color:var(--gray2);letter-spacing:.5px}
.dlg-q{font-weight:700;color:var(--blue);font-size:13.5px;margin-bottom:7px;padding-top:4px}
.dlg-a{font-weight:700;color:var(--red);font-size:13.5px;margin-bottom:7px;padding-top:4px}
.dlg-a::before{content:'A: ';color:var(--gray2)}
.dlg-q::before{content:'Q: ';color:var(--gray2)}
.dlg-text{font-size:13.5px;color:var(--text2);margin-bottom:6px;padding-left:14px}
.dlg-text:last-child{margin-bottom:0}
.dlg-note{font-size:12.5px;color:var(--text3);font-style:italic;margin-top:6px;padding-top:6px;border-top:1px dashed var(--border2)}

/* MINI CARD */
.mini-card{background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:14px 18px;margin-bottom:10px}
.mini-card h5{font-size:13.5px;font-weight:700;color:var(--text);margin-bottom:6px}
.mini-card p{font-size:13px;color:var(--text2);margin:0}

/* BADGE ROW */
.badge-row{display:flex;gap:6px;flex-wrap:wrap;margin:8px 0}

/* CHECKLIST */
.checklist{list-style:none;margin:10px 0}
.checklist li{display:flex;align-items:flex-start;gap:10px;padding:8px 0;border-bottom:1px solid var(--border2);font-size:14px;color:var(--text2)}
.checklist li:last-child{border-bottom:none}
.checklist li::before{content:'☐';color:var(--gray3);flex-shrink:0;font-size:14px;margin-top:1px}

/* APPENDIX */
.appendix{background:linear-gradient(135deg,#f0ede8,#f7f5f0);border:1px solid var(--border);border-radius:var(--radius2);padding:30px 34px;margin-top:48px}
.appendix h2{font-size:19px;font-weight:700;color:var(--text);margin-bottom:18px;letter-spacing:-.3px}
.term-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px}
.term-item{display:flex;gap:10px;padding:9px 13px;background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);font-size:13px}
.term-key{font-weight:700;color:var(--red);white-space:nowrap;min-width:85px}
.term-val{color:var(--text2)}

/* FOOTER */
.footer{background:#1a1a1a;color:rgba(255,255,255,.4);text-align:center;padding:30px;font-size:12.5px}

/* PRINT */
@media print{
body{background:#fff;font-size:13px}
.header{background:#1a1a1a!important;-webkit-print-color-adjust:exact;print-color-adjust:exact}
.section{page-break-inside:avoid}
.card{box-shadow:none}
.nav-wrap,.footer{display:none}
}
</style>
</head>
<body>

<!-- HEADER -->
<header class="header">
<div class="header-inner">
<div class="header-badge">招商证券 · 内部教学资料</div>
<h1>高净值客户服务<span>经验萃取工作坊</span></h1>
<p class="header-desc">两天时间，把你和团队"会做但说不清"的真实经验，变成一套谁都能用的工具卡。<br>不是听课，是做东西——跟着做，两天后你手里会有一张直接能打开用的场景工具卡。</p>
<div class="header-meta">
<span>适用对象：理财顾问 / 客户经理 / 团队培训负责人</span>
<span>学习周期：2天工作坊</span>
<span>交付成果：HTML单文件场景工具卡</span>
</div>
</div>
</header>

<!-- NAV -->
<nav class="nav-wrap">
<div class="nav">
<a href="#p1" class="active"><span class="num">01</span>总览与认领</a>
<a href="#p2"><span class="num">02</span>结构化访谈</a>
<a href="#p3"><span class="num">03</span>服务流程梳理</a>
<a href="#p4"><span class="num">04</span>工具产出</a>
<a href="#p5"><span class="num">05</span>案例萃取</a>
<a href="#p6"><span class="num">06</span>工具卡制作</a>
<a href="#p7"><span class="num">07</span>交叉验证</a>
<a href="#p8"><span class="num">08</span>成果展示</a>
<a href="#appendix"><span class="num">附</span>附录</a>
</div>
</nav>

<!-- MAIN -->
<main class="main">

<!-- ═══════════════ PART 1 ═══════════════ -->
<section class="section" id="p1">
<div class="section-header">
<div class="section-num">01</div>
<div>
<div class="section-title">总览与认领场景</div>
<div class="section-subtitle">Part 1 · 认领场景，搞清楚两天要交出什么</div>
</div>
</div>

<!-- 开场 -->
<div class="banner">
<h3>开场：一个真实的提问</h3>
<p>一位银行私行的客户把上千万资产的客户转给你。客户一坐下就说：<strong style="color:#fca5a5">"我跟你说实话，我不太相信你们证券公司，我身边有朋友炒股亏了很多钱，我这些钱是养老的，不能冒险。"</strong><br><br>这句话之后，你会怎么接？大部分顾问第一反应是解释"我们和炒股不一样"——然后客户礼貌点头，会议很快结束。<br><br>但总有那么一两个人，能把这种开局一步步聊成客户愿意认真听一次配置建议。他们是怎么做到的？</p>
</div>

<div class="card">
<div class="card-title">关于这两天，你需要知道的三件事</div>
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<div class="step-title">不是来听课，是来萃取经验</div>
<div class="step-desc">把你和你身边的人已经会做、但从没说清楚过的东西，变成一份真正能复制给别人用的东西。</div>
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<div class="step-title">不需要从零开始想新方法</div>
<div class="step-desc">如果你或某个同事已经在某个场景上做得不错——这两天要做的，就是把这件事拆开看清楚，再变成一份谁都能学的东西。</div>
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<div class="step-title">AI是辅助，不是主角</div>
<div class="step-desc">AI负责把你说的话转成文字、把零散的要点整理成草稿。真正值钱的判断——这一步该不该这么做、这句话客户听了会不会反感——还是要靠你和你的小组成员。</div>
</div>
</div>
</div>

<div class="card">
<div class="card-title">全景坐标：识 · 破 · 落 · 耕</div>
<p style="font-size:14px;color:var(--text2);margin-bottom:16px">把客户服务按关系阶段拆开看，大致分四步——这四步连起来，就是一张完整的高净值客户服务地图。</p>
<div class="matrix-grid">
<div class="matrix-cell main-top">
<span class="cell-tag main">识</span>
<h4>找到值得投入的目标客户</h4>
<p>判断客户值不值得花时间重点跟进，建立判断清单而不是凭印象</p>
</div>
<div class="matrix-cell main-top">
<span class="cell-tag main">破</span>
<h4>建立信任，客户愿意听你说话</h4>
<p>从陌生或弱关系，推进到客户愿意认真听你说话——先认同后诊断</p>
</div>
<div class="matrix-cell main-top">
<span class="cell-tag main">落</span>
<h4>推动完成第一次配置</h4>
<p>推动客户完成第一次配置，或把外部资产迁移进来——找到真实理由</p>
</div>
<div class="matrix-cell main-top">
<span class="cell-tag main">耕</span>
<h4>信任深化，转介绍闭环</h4>
<p>信任深化、持续运营、转介绍闭环——转介绍时机由客户信号决定</p>
</div>
</div>
</div>

<div class="card">
<div class="card-title">五个可能的方向，你的小组会落在其中一个</div>
<div class="grid-2" style="gap:12px">
<div>
<div class="mini-card">
<h5>🏦 识别筛选</h5>
<p>怎么判断一个银行客户值不值得花时间重点跟进</p>
<div class="badge-row"><span class="tag tag-gray">识</span></div>
</div>
<div class="mini-card">
<h5>🤝 活动现场转化</h5>
<p>怎么在一场银行联合活动现场抓住真正有价值的客户</p>
<div class="badge-row"><span class="tag tag-gray">识→破</span></div>
</div>
</div>
<div>
<div class="mini-card">
<h5>💬 破冰建信</h5>
<p>怎么和对权益市场有戒心的客户建立信任</p>
<div class="badge-row"><span class="tag tag-red">破</span></div>
</div>
<div class="mini-card">
<h5">🔍 资产识别</h5>
<p>怎么发现一个老客户其实还有很多资产放在别的机构</p>
<div class="badge-row"><span class="tag tag-gray">落</span></div>
</div>
</div>
</div>
<div class="mini-card" style="margin-top:12px">
<h5>📦 资产迁移与转介绍</h5>
<p>怎么推动客户把外部资产搬过来，并顺势让他介绍朋友</p>
<div class="badge-row"><span class="tag tag-gray">落→耕</span></div>
</div>
<div class="callout" style="margin-top:16px">
<div class="callout-title">💡 关键认知</div>
<p>两天时间，做透一个场景，比蜻蜓点水做五个场景更有价值。一组对应一个场景，不交叉，这样产出的东西才能立得住。一个能直接打开用的工具，比一本谁都没读完的厚手册值钱得多。</p>
</div>
</div>

<div class="card">
<div class="card-title">认知自测：五句话，判断对错</div>
<table class="table-wrap">
<thead><tr><th>说法</th><th style="width:100px;text-align:center">判断</th></tr></thead>
<tbody>
<tr><td>一个顾问业绩好，说明他在所有场景上都做得好</td><td style="text-align:center;color:var(--gray3)">___</td></tr>
<tr><td>经验丰富的人，自己说不清楚自己为什么这么做，是正常的</td><td style="text-align:center;color:var(--gray3)">___</td></tr>
<tr><td>把经验写成标准流程，新人照着做，效果就能和老手一样好</td><td style="text-align:center;color:var(--gray3)">___</td></tr>
<tr><td>一个场景如果团队里没有人真正做成过，靠大家讨论凑出来的流程也是有价值的</td><td style="text-align:center;color:var(--gray3)">___</td></tr>
<tr><td>AI可以帮你把经验"写出来"，但写不出"你没说过的经验"</td><td style="text-align:center;color:var(--gray3)">___</td></tr>
</tbody>
</table>
<div class="callout" style="margin-top:14px">
<div class="callout-title">📌 参考思路</div>
<p>①错 ②对 ③错 ④错 ⑤对 &nbsp;|&nbsp; 参考思路详见附录</p>
</div>
</div>

<div class="card">
<div class="card-title">定位草稿：填写说明</div>
<div class="quote">
<p><strong>📌 填写说明：</strong>用一两句大白话写清楚，不需要书面语。第一行写清楚这个场景里客户是什么状态；第二行写清楚现在组里谁在这件事上做得最好；第三行写清楚如果两天后这件事做成了，长什么样。</p>
</div>
<div class="hbox hbox-blue" style="margin-top:14px">
<div class="hbox-title">📋 定位草稿模板</div>
<p>我们组的场景：_____________________________</p>
<p style="margin-top:8px">客户的真实状态（他在想什么、担心什么）：_____________________________________________</p>
<p style="margin-top:8px">组内谁在这件事上做得最好，他大概做对了什么：_____________________________________________</p>
<p style="margin-top:8px">两天后，我们希望交出的东西能解决一线的什么具体问题：_____________________________________________</p>
</div>
<div class="callout" style="margin-top:16px">
<div class="callout-title">📖 填好的示例</div>
<p><strong>场景：</strong>对权益认知保守的银行私行客户，建立信任并推进第一次有效对话</p>
<p style="margin-top:6px"><strong>客户状态：</strong>资产主要在银行保本理财，听朋友说炒股亏过钱，对证券公司有戒备心理，担心养老钱受损失</p>
<p style="margin-top:6px"><strong>组内谁做得好：</strong>陈姐，去年成功转化过三个类似背景的客户，感觉她不会一上来就推销，先让客户卸下防备</p>
<p style="margin-top:6px"><strong>要解决什么问题：</strong>让没经验的新人，第一次遇到客户说"不信任证券公司"时，知道该怎么接</p>
</div>
</div>

<div class="card">
<div class="card-title">AI使用常见误区</div>
<table class="table-wrap">
<thead><tr><th>误区</th><th>症状</th><th>正确做法</th></tr></thead>
<tbody>
<tr><td>把AI当成"知道正确答案"的老师</td><td>直接照抄AI给的话术，不做修改</td><td>把AI给的当草稿，对照真实判断，逐句改</td></tr>
<tr><td>给AI的描述太笼统</td><td>AI输出放哪个行业都通用</td><td>把客户具体状态、顾虑写进描述里</td></tr>
<tr><td>一次性想让AI把所有东西都做完</td><td>输出冗长但没有重点</td><td>一次只让AI解决一个具体小问题，分步来</td></tr>
</tbody>
</table>
</div>

<div class="callout" style="margin-top:8px">
<div class="callout-title">📌 下一部分预告</div>
<p>接下来要做的事，是把你们组里那个"做得好但说不清楚为什么"的人，通过一场结构化的访谈，把他脑子里的判断挖出来变成文字——这是两天里最核心的一步。</p>
</div>

</section>

<!-- ═══════════════ PART 2 ═══════════════ -->
<section class="section" id="p2">
<div class="section-header">
<div class="section-num">02</div>
<div>
<div class="section-title">结构化访谈萃取</div>
<div class="section-subtitle">Part 2 · 把经验从脑子里"说"出来</div>
</div>
</div>

<div class="card">
<div class="card-title">两份"经验总结"的差距</div>
<div class="grid-2">
<div class="hbox hbox-blue">
<div class="hbox-title">❌ 写出来的（没用）</div>
<p>"服务高净值客户要注重专业性，建立长期信任关系，深入了解客户需求，提供个性化的资产配置方案，做好后续跟进服务。"</p>
<p style="font-size:12px;color:var(--text3);margin-top:8px">→ 看完什么都记不住，没有一个具体动作</p>
</div>
<div class="hbox hbox-red">
<div class="hbox-title">✓ 说出来的（有用）</div>
<p>"他一说朋友炒股亏了多少，我就没接这话。我问他朋友炒的什么，是自己瞎炒的。我说是的，普通人自己炒大概率亏，这跟我们做的不是一回事。然后我没往下推销，我说我可以帮他先看一眼他那几个理财产品的真实收益率，不涉及任何推荐。"</p>
<p style="font-size:12px;color:var(--text3);margin-top:8px">→ 能直接学到至少两个可以照做的动作</p>
</div>
</div>
</div>

<div class="card">
<div class="card-title">三层访谈框架</div>
<p style="margin-bottom:14px">不是漫无目的地聊，访谈要带着三层提问框架去挖，每一层挖的东西不一样：</p>
<div class="grid-3">
<div class="hbox hbox-blue">
<div class="hbox-title">🟦 第一层 · 新手易错点</div>
<p>刚开始做这类场景时踩过什么坑？新人最容易在哪里出问题？</p>
<p style="font-size:12px;color:var(--text3);margin-top:8px">→ 用来给新人"避雷"，保住基本盘</p>
</div>
<div class="hbox hbox-orange">
<div class="hbox-title">🟧 第二层 · 老手易忽视点</div>
<p>有没有已经变成习惯但自己都没意识到在做的动作？什么时候感觉"这里就该这么处理"但说不清为什么？</p>
<p style="font-size:12px;color:var(--text3);margin-top:8px">→ 往往是新人最缺的隐性判断</p>
</div>
<div class="hbox hbox-red">
<div class="hbox-title">🟥 第三层 · 致命点</div>
<p>有没有一旦处理不好就直接失去客户的情况？哪些话绝对不能说，哪些时机绝对不能错过？</p>
<p style="font-size:12px;color:var(--text3);margin-top:8px">→ 工具卡里"红线提醒"的部分</p>
</div>
</div>
<div class="callout" style="margin-top:16px">
<div class="callout-title">⚠️ 为什么要分开问</div>
<p>抛出一个笼统的大问题，对方大脑会自动进入"总结模式"，给出"建立信任、注重专业"式的正确废话。三层提问锁定三个不同的记忆入口——"刚开始"的具体场景、"现在"的具体习惯、"那一次"的具体教训，挖出来的是三种不同性质、互不重复的真实内容。</p>
</div>
</div>

<div class="card">
<div class="card-title">追问技巧：把"我就是有感觉"挖成具体动作</div>
<div class="grid-2">
<div>
<div class="dialog-box">
<div class="dialog-tag">案例</div>
<div class="dlg-q">对方说"我就是感觉这个客户能聊得下去"</div>
<div class="dlg-a">→ 追问："是他说的某句话、还是他当时的表情或动作，让你有了这个感觉？"</div>
<div class="dlg-a" style="padding-left:14px;margin-top:4px">→ 追问："如果让你把这个'感觉'拆成三个信号，会是哪三个？"</div>
</div>
</div>
<div>
<div class="dialog-box">
<div class="dialog-tag">案例</div>
<div class="dlg-q">对方说"到这一步我就知道该往下推了"</div>
<div class="dlg-a">→ 追问："如果客户没有问你刚才那个问题，而是沉默了，你还会往下推吗？"</div>
<div class="dlg-a" style="padding-left:14px;margin-top:4px">→ 追问："你是看到他做了什么具体的事，才决定往下走的？"</div>
</div>
</div>
</div>
<div class="callout" style="margin-top:14px">
<div class="callout-title">💡 核心思路</div>
<p><strong>用"具体换抽象"</strong>——每当对方说出一个抽象判断（感觉、看情况、差不多），就追问背后那个具体的触发信号是什么。</p>
</div>
</div>

<div class="card">
<div class="card-title">三类素材，访谈时心里要分着装</div>
<div class="grid-3">
<div class="mini-card">
<h5>🔧 操作步骤类</h5>
<p>做了什么——"先帮客户看了一眼现有理财的真实收益率"</p>
</div>
<div class="mini-card">
<h5>🧠 判断逻辑类</h5>
<p>为什么这么做、什么时候这么做——"如果客户一上来就很抵触，就不能直接谈产品"</p>
</div>
<div class="mini-card">
<h5>💬 沟通话术类</h5>
<p>具体怎么说的——原话怎么说的，尽量保留原始措辞</p>
</div>
</div>
<div class="callout" style="margin-top:12px">
<div class="callout-title">💡 关键认知</div>
<p><strong>操作步骤保下限，判断逻辑保上限，沟通话术是连接两者的桥。</strong>三类都要挖，但判断逻辑往往是最容易被漏掉、也是最值钱的一类。</p>
</div>
</div>

<div class="card">
<div class="card-title">⚡ 完整访谈示范（陈姐 × 张总）</div>
<div class="dialog-box">
<div class="dialog-tag">对话转写</div>
<div class="dlg-q">小李：陈姐，上次张总一上来就说不信任证券公司，后来还是被你聊成了，能具体说说吗？</div>
<div class="dlg-text">陈姐：第一次见面他确实一上来就这么说，说他朋友炒股亏了不少，他这些钱是给孩子留学和养老用的。</div>
<div class="dlg-q">小李：你当时是怎么接的？是马上解释你们和炒股不一样吗？</div>
<div class="dlg-text">陈姐：没有，我反而先顺着他说——"您说的这个情况确实常见，很多人自己炒股是没有方法的，亏钱很正常"。</div>
<div class="dlg-note">关键判断：客户这句话不是在讨论专业问题，是在试探你的反应。你越急着反驳，他越觉得你在硬推销。</div>
<div class="dlg-q">小李：松一点之后，下一步做了什么？</div>
<div class="dlg-text">陈姐：我没有马上谈产品，我说"我可以先帮您看一眼，您现在那几个理财产品的真实到期收益率，不涉及任何推荐"。</div>
<div class="dlg-note">关键判断："不涉及任何推荐"这句话，把这件事从"顾问想卖我东西"变成了"单纯帮我看一眼"，客户防御心态就放下了。</div>
<div class="dlg-q">小李：那他答应之后呢？</div>
<div class="dlg-text">陈姐：大概又见了两次。第二次我把诊断结果给他看，里面有两笔产品实际收益比宣传的预期低了不少。他自己看出了落差，是他自己问我"那你们这边一般怎么配置"，不是我主动提的。</div>
<div class="dlg-q">小李：这个时间点很关键，是他自己问的。如果他没主动问呢？</div>
<div class="dlg-text">陈姐：那就再等等，不能急。我带过的新人最容易在这里出问题——诊断报告一发完就马上追着问"那您看要不要了解一下我们的产品"，客户立刻就警觉了，前面建立的那点信任一下就没了。</div>
<div class="dlg-note">致命点：发了诊断报告之后没有下文，很多人觉得是客户的问题，其实多半是自己太急。</div>
<div class="dlg-q">小李：整个过程从陌生到他主动问配置，大概多久？</div>
<div class="dlg-text">陈姐：前后大概两周，中间有十来天的间隔，没有催他。</div>
</div>
</div>

<div class="card">
<div class="card-title">AI辅助整理提示词模板</div>
<div class="quote">
<p><strong>完整示例输入：</strong></p>
<p style="margin-top:8px;font-size:13.5px">请把以下一段顾问访谈的转写文字，按三类整理成要点列表：</p>
<p style="margin-top:8px;font-size:13.5px">1. 操作步骤类（具体做了什么动作）</p>
<p style="font-size:13.5px">2. 判断逻辑类（为什么这么做、什么时候这么做、依据是什么）</p>
<p style="font-size:13.5px">3. 沟通话术类（原话怎么说的，尽量保留原始措辞）</p>
<p style="font-size:13.5px;margin-top:8px">每类用简洁的短句列出，不要展开解释，保留场景细节。</p>
</div>
<div class="callout" style="margin-top:12px">
<div class="callout-title">⚠️ 常见误区</div>
<p>① AI整理完直接拿去用，不核对 ② 只挖操作步骤，漏掉判断逻辑 ③ 访谈对象说"差不多就这样"就停下 &nbsp;|&nbsp; 正确做法：逐条对照录音确认 · 每个动作追问"为什么" · 至少追问两次"还有别的情况吗"</p>
</div>
</div>

<div class="card">
<div class="card-title">三组 · 其他场景访谈方向参考</div>
<div class="table-wrap">
<table>
<thead><tr><th>场景</th><th>新手易错点</th><th>老手易忽视点</th><th>致命点</th></tr></thead>
<tbody>
<tr><td><strong>识别筛选</strong></td><td>判断客户值不值得跟进时有没有判断错过？</td><td>现在拿到新客户信息，第一眼会看哪几样？</td><td>有没有把时间压在一个不值得的客户身上？</td></tr>
<tr><td><strong>活动现场转化</strong></td><td>第一次参加联合活动，名片换了一堆没下文？</td><td>在活动现场几分钟内怎么判断谁值得多聊？</td><td>活动结束后跟进太晚或方式不对？</td></tr>
<tr><td><strong>资产识别</strong></td><td>直接问"您还有多少钱"，结果对方很警惕？</td><td>判断老客户应该还有更多资产在别处靠哪些信号？</td><td>问得太直接或时机不对，让客户觉得被冒犯？</td></tr>
<tr><td><strong>资产迁移</strong></td><td>靠费率优势去说服，效果不好？</td><td>判断客户差不多可以开口请他介绍朋友，靠什么信号？</td><td>开口请转介绍的时机或方式不对，让客户觉得有压力？</td></tr>
</tbody>
</table>
</div>
</div>

<div class="card">
<div class="card-title">致命点 vs 老手易忽视点：怎么区分</div>
<div class="table-wrap">
<thead><tr><th>判断问题</th><th>答案是"差一点"</th><th>答案是"机会没了"</th></tr></thead>
<tbody>
<tr><td>不做这个动作，会怎样</td><td>老手易忽视点</td><td>致命点</td></tr>
<tr><td>工具卡呈现方式</td><td>建议性提示，说明为什么这么做更好</td><td>红色警示，明确说"绝对不能"</td></tr>
<tr><td>访谈追问方向</td><td>"你是什么时候养成这个习惯的"</td><td>"有没有真的因为这个丢过客户"</td></tr>
</tbody>
</table>
<p style="font-size:12.5px;color:var(--text3);margin-top:10px">举例：<strong>先认同不反驳</strong>是老手易忽视点——新人没做到，对话依然能往下走，只是效果打折扣；<strong>诊断讲完立刻追问产品</strong>是致命点——一旦踩中，客户大概率直接关闭对话，不是"效果差一点"，是"机会没了"。</p>
</div>

<div class="callout" style="margin-top:8px">
<div class="callout-title">📌 下一部分预告</div>
<p>手里这份按三类整理好的要点记录，接下来要被梳理成一条清楚的服务流程，并且标注出哪几个节点最容易出问题——从"一堆要点"变成"一张图"。</p>
</div>

</section>

<!-- ═══════════════ PART 3 ═══════════════ -->
<section class="section" id="p3">
<div class="section-header">
<div class="section-num">03</div>
<div>
<div class="section-title">服务流程梳理与关键点标注</div>
<div class="section-subtitle">Part 3 · 把经验整理成一条清楚的路</div>
</div>
</div>

<div class="card">
<div class="card-title">两种写法，差的不只是好不好看</div>
<div class="grid-2">
<div>
<div class="hbox hbox-blue">
<div class="hbox-title">❌ 常见写法（没用）</div>
<p>第一步：建立联系<br>第二步：了解需求<br>第三步：建立信任<br>第四步：推荐配置<br>第五步：促成成交</p>
<p style="font-size:12px;color:var(--text3);margin-top:8px">→ 谁都能写，写完没人能照着用</p>
</div>
</div>
<div>
<div class="hbox hbox-red">
<div class="hbox-title">✓ 正确写法（能用）</div>
<p><strong>节点：</strong>客户提到"不信任证券公司/朋友炒股亏钱"<br><strong>客户状态：</strong>防御，在试探你的反应，不是真的在讨论专业问题<br><strong>顾问动作：</strong>先口头认同"这种情况确实常见，自己炒确实容易亏"，不反驳不解释<br><strong>进入下一节点信号：</strong>客户情绪松动，话题没有立刻结束<br><strong>风险点：</strong>直接反驳或马上解释"我们和炒股不一样"，客户大概率礼貌结束对话</p>
</div>
</div>
</div>
</div>

<div class="card">
<div class="card-title">服务路径图四要素（每个节点都要包含）</div>
<div class="grid-4">
<div class="mini-card">
<h5>👤 客户状态</h5>
<p>客户在这一步处于什么阶段、什么情绪状态、说了什么或做了什么典型表现</p>
</div>
<div class="mini-card">
<h5>🎯 顾问核心动作</h5>
<p>这个状态下，最关键的那一个动作是什么——不是一堆动作的罗列</p>
</div>
<div class="mini-card">
<h5>➡️ 进阶信号</h5>
<p>怎么知道这一步已经走通了，可以往下推进——新人最缺的</p>
</div>
<div class="mini-card">
<h5>⚠️ 典型风险点</h5>
<p>这一步最容易在哪里出问题，出了问题会怎样</p>
</div>
</div>
<div class="callout" style="margin-top:14px">
<div class="callout-title">💡 排序原则</div>
<p>按<strong>客户实际经历的先后顺序</strong>排列，不是按重要程度。永远是先有客户的状态变化，才有顾问对应的动作——不是顾问做了什么然后客户跟着反应。</p>
</div>
</div>

<div class="card">
<div class="card-title">完整服务流程图示例：先认同后诊断</div>
<div class="flow">
<div class="flow-node active">
<span class="node-tag">节点一</span>
<h4>客户表达防御</h4>
<p style="color:var(--red);font-size:11.5px">先认同，不反驳</p>
</div>
<div class="flow-arrow">→</div>
<div class="flow-node">
<span class="node-tag">节点二</span>
<h4>提出账户诊断</h4>
<p style="color:var(--text2);font-size:11.5px">明确"不涉及推荐"</p>
</div>
<div class="flow-arrow">→</div>
<div class="flow-node">
<span class="node-tag">节点三</span>
<h4>诊断结果讲解</h4>
<p style="color:var(--text2);font-size:11.5px">当面讲，不追问</p>
</div>
<div class="flow-arrow">→</div>
<div class="flow-node">
<span class="node-tag">节点四</span>
<h4>进入配置话题</h4>
<p style="color:var(--text2);font-size:11.5px">等客户主动发问</p>
</div>
</div>

<div class="table-wrap" style="margin-top:16px">
<table>
<thead><tr><th>节点</th><th>客户状态</th><th>顾问核心动作</th><th>进阶信号</th><th>风险点</th></tr></thead>
<tbody>
<tr>
<td><strong>节点一<br>客户表达防御</strong></td>
<td>提到"不信任"/"朋友炒股亏钱"，语气带试探，观察顾问会不会急着反驳或推销</td>
<td>口头认同客户的顾虑，<strong>不解释、不反驳</strong></td>
<td>客户情绪松动，没有终止对话的意思</td>
<td><span class="tag tag-orange" style="margin-right:4px">老手易忽视</span>经验丰富的顾问会本能不反驳，但对新人不是本能，需要明确提醒</td>
</tr>
<tr>
<td><strong>节点二<br>提出账户诊断</strong></td>
<td>戒备有所放松，但仍处于观望</td>
<td>提出一次免费、明确<strong>"不涉及推荐"</strong>的账户诊断</td>
<td>客户同意接受诊断</td>
<td><span class="tag tag-red" style="margin-right:4px">致命点</span>如果诊断邀约里带了任何推荐意味，客户防御心态会立刻反弹</td>
</tr>
<tr>
<td><strong>节点三<br>诊断结果讲解</strong></td>
<td>看到自己产品真实收益和银行宣传预期的落差，开始主动思考</td>
<td>当面讲解，<strong>不通过文字单独发送</strong>；观察客户反应再决定节奏</td>
<td>客户主动问"那你们这边一般怎么配置"</td>
<td><span class="tag tag-red" style="margin-right:4px">致命点</span>讲解完不主动追问产品，等客户自己开口——这是最容易被新人忽略、也最容易出问题的节点</td>
</tr>
<tr>
<td><strong>节点四<br>进入配置话题</strong></td>
<td>主动表达兴趣</td>
<td>正式展开资产配置逻辑沟通</td>
<td>客户主动发问后的自然延续</td>
<td><span class="tag tag-blue" style="margin-right:4px">新手易错</span>进度过快，跳过KYC风险测评等合规前置环节</td>
</tr>
</tbody>
</table>
</div>
</div>

<div class="card">
<div class="card-title">打法命名示例</div>
<div class="grid-3" style="gap:10px">
<div class="mini-card"><h5>破冰建信</h5><p><strong>先认同后诊断</strong><br>或"不推销的第一次见面"</p></div>
<div class="mini-card"><h5>活动现场转化</h5><p><strong>接话题，不递名片</strong><br>用客户自己抛出的问题切入</p></div>
<div class="mini-card"><h5>资产识别</h5><p><strong>整体梳理，不打听金额</strong><br>包装成整体配置梳理</p></div>
</div>
<div class="mini-card" style="margin-top:10px">
<h5>资产迁移与转介绍</h5>
<p><strong>找真理由，不比费率</strong><br>找到让客户"现在就行动"的真实理由，而不是比拼费率</p>
</div>
<div class="callout" style="margin-top:12px">
<div class="callout-title">💡 关键认知</div>
<p>好记的名字不是用来显得专业的，是用来让这套打法在团队里传开的。"先认同后诊断"比"以客户为中心的服务理念"有用得多，因为前者能直接指导下一次见面该怎么做。</p>
</div>
</div>

<div class="card">
<div class="card-title">其他场景节点骨架参考</div>
<div class="table-wrap">
<table>
<thead><tr><th>场景</th><th>节点骨架</th></tr></thead>
<tbody>
<tr><td><strong>识别筛选</strong></td><td>①信息初步获取 → ②价值判断（值不值得投入） → ③行动决策（优先跟进/观察/暂不跟进）</td></tr>
<tr><td><strong>活动现场转化</strong></td><td>①现场识别 → ②现场破冰（茶歇切入） → ③48小时跟进 → ④二次约见</td></tr>
<tr><td><strong>资产识别</strong></td><td>①信号观察 → ②诊断切入（不让客户觉得被窥探） → ③信息呈现 → ④推进对话</td></tr>
<tr><td><strong>资产迁移与转介绍</strong></td><td>①触发因素识别 → ②迁移节奏决策 → ③转介绍时机 → ④转介绍话术</td></tr>
</tbody>
</table>
</div>
</div>

<div class="card">
<div class="card-title">场景判断练习</div>
<table class="table-wrap">
<thead><tr><th>客户的反应</th><th>对应节点</th><th>顾问下一步该做什么</th></tr></thead>
<tbody>
<tr><td>"你们这个诊断要收费吗？"</td><td>节点二</td><td>明确告知完全免费、不涉及任何产品推荐</td></tr>
<tr><td>看完诊断报告沉默不说话</td><td>节点三</td><td>耐心等待，不主动追问产品——沉默不等于拒绝</td></tr>
<tr><td>主动问"那你们这边一般怎么配置"</td><td>节点三→四</td><td>顺势展开配置话题</td></tr>
<tr><td>诊断报告发完，三天没有回复</td><td>待判断</td><td>回到正常客户消化期判断，避免过早/过频追问，用不涉及产品的理由自然跟进</td></tr>
</tbody>
</table>
</div>

<div class="callout" style="margin-top:8px">
<div class="callout-title">📌 下一部分预告</div>
<p>流程图画清楚之后，接下来要把每一个节点变成具体能用的工具——该用话术的地方写出话术，该用清单的地方做出清单。从"知道该怎么做"到"拿出去能直接用"。</p>
</div>

</section>

<!-- ═══════════════ PART 4 ═══════════════ -->
<section class="section" id="p4">
<div class="section-header">
<div class="section-num">04</div>
<div>
<div class="section-title">工具产出——话术、SOP、清单</div>
<div class="section-subtitle">Part 4 · 从"知道"到"能用"</div>
</div>
</div>

<div class="card">
<div class="card-title">两版话术的差距</div>
<div class="grid-2">
<div class="hbox hbox-blue">
<div class="hbox-title">❌ 第一版（没用）</div>
<p>"您放心，我们公司是专业的资产管理机构，和散户自己炒股完全不一样，我们有专业的投研团队和风控体系，会根据您的风险承受能力为您量身定制配置方案。"</p>
<p style="font-size:12px;color:var(--text3);margin-top:8px">→ 客户礼貌"嗯嗯"然后找借口结束——听起来在反驳他、卖他东西</p>
</div>
<div class="hbox hbox-red">
<div class="hbox-title">✓ 第二版（能用）</div>
<p>"您说的这个情况确实常见，很多人自己炒股是没有方法的，亏钱很正常。我倒不是来跟您聊产品的，我可以先免费帮您看一眼，您现在这几个理财产品的真实到期收益率，不涉及任何推荐。"</p>
<p style="font-size:12px;color:var(--text3);margin-top:8px">→ 客户愿意往下听——先认同感受，又提出对客户单方面有用的事</p>
</div>
</div>
</div>

<div class="card">
<div class="card-title">三类工具适用场景</div>
<div class="grid-3">
<div class="hbox hbox-red">
<div class="hbox-title">💬 话术</div>
<p><strong>适用：</strong>客户情绪敏感的对话节点、需要应对异议的节点、关系推进的关键切入节点</p>
<p style="font-size:12px;color:var(--text3);margin-top:6px">"怎么说"比"做什么"更关键，差一个字效果都可能不一样</p>
</div>
<div class="hbox hbox-blue">
<div class="hbox-title">📋 SOP</div>
<p><strong>适用：</strong>需要标准化操作步骤的服务环节——首次拜访准备、诊断报告呈现、转介绍时机把握</p>
<p style="font-size:12px;color:var(--text3);margin-top:6px">重要的是"按顺序做对每一步"</p>
</div>
<div class="hbox hbox-orange">
<div class="hbox-title">✅ 清单</div>
<p><strong>适用：</strong>需要记录、核查、留存服务轨迹的节点——关键拜访前信息确认、客户状态评估、跟进追踪</p>
<p style="font-size:12px;color:var(--text3);margin-top:6px">重要的是"别漏掉关键项"</p>
</div>
</div>
<div class="callout" style="margin-top:14px">
<div class="callout-title">💡 判断方法</div>
<p>这个节点的风险点是"说错话"→ 配话术 &nbsp;|&nbsp; 风险点是"漏掉一步"或"顺序错了"→ 配SOP &nbsp;|&nbsp; 风险点是"忘了确认某个信息"→ 配清单。不强求每个节点三种都配齐，按需要来。</p>
</div>
</div>

<div class="card">
<div class="card-title">⚡ 话术生成完整示例</div>
<div class="grid-2">
<div>
<div class="mini-card">
<h5>【标准话术】</h5>
<p>"您说的这个情况确实常见，很多人自己炒股是没有方法的，亏钱很正常。我倒不是来跟您聊产品的，我可以先免费帮您看一眼，您现在这几个理财产品的真实到期收益率，不涉及任何推荐。"</p>
</div>
</div>
<div>
<div class="mini-card">
<h5>【客户反应变体】</h5>
<p><strong>反应一：</strong>客户问"这个要收费吗？"<br>→ "完全不收费，就是帮您看一眼现状，不涉及任何产品推荐。"</p>
<p style="margin-top:8px"><strong>反应二：</strong>客户说"那行，你看看吧"<br>→ "好的，麻烦您把目前持有的产品清单给我看一下，我大概一周内给您一份诊断结果。"</p>
<p style="margin-top:8px"><strong>反应三：</strong>客户沉默或犹豫<br>→ "您不着急决定，这个本身就是免费帮您看一眼，想做的时候随时联系我。"</p>
</div>
</div>
</div>
<div class="grid-2" style="margin-top:12px">
<div class="hbox hbox-red">
<div class="hbox-title">🚫 禁区提示</div>
<p>• 不能说"我们和炒股不一样，我们更专业"——这是反驳，容易激起防御<br>• 不能在这一步提到任何具体产品名称或预期收益数字<br>• 不能贬低客户朋友的炒股经历或评价同业机构</p>
</div>
<div class="hbox hbox-green">
<div class="hbox-title">✅ 合规核对</div>
<p>□ 全程未承诺任何收益或保本<br>□ "诊断"定位为信息呈现，不构成投资建议<br>□ 未对同业或其他金融机构做负面评价</p>
</div>
</div>
<div class="callout" style="margin-top:12px">
<div class="callout-title">💡 验证方法</div>
<p>话术写完之后，<strong>自己大声读一遍</strong>——书面语和口语的差距，默读时很难察觉，读出声就会立刻发现哪里别扭。</p>
</div>
</div>

<div class="card">
<div class="card-title">⚡ SOP生成完整示例：账户诊断操作流程</div>
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<div class="step-title">确认诊断意愿</div>
<div class="step-desc">用标准话术邀约客户做免费账户诊断。判断节点：客户同意 → 进入第二步；客户犹豫或拒绝 → 不强求，礼貌结束本次话题，约定下次见面再提</div>
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<div class="step-title">收集诊断材料</div>
<div class="step-desc">询问客户索要现持有产品清单或对账单。常见失误：一次性索要过多个人财务信息，让客户产生被窥探感——只问与本次诊断直接相关的产品信息</div>
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<div class="step-title">整理诊断结果</div>
<div class="step-desc">对照产品当时宣传的预期收益与实际到期收益，整理成对比。合规要点：呈现的是客观历史数据对比，不掺杂任何产品推荐或收益预测</div>
</div>
</div>
<div class="step">
<div class="step-num">4</div>
<div class="step-content">
<div class="step-title">当面讲解诊断结果</div>
<div class="step-desc">当面讲解，不通过文字单独发送。讲解时观察客户反应，不主动追问是否需要产品配置。判断节点：客户主动问配置 → 可顺势展开；客户没有主动提问 → 礼貌结束本次见面，不追问、不施压</div>
</div>
</div>
<div class="step">
<div class="step-num">5</div>
<div class="step-content">
<div class="step-title">跟进记录</div>
<div class="step-desc">见面后整理本次沟通要点，记录客户反应和后续跟进时间。常见失误：诊断后超过两周未跟进，错过客户主动表达兴趣的窗口期</div>
</div>
</div>
</div>

<div class="card">
<div class="card-title">⚡ 清单生成示例：首次拜访前准备清单</div>
<div class="checklist">
<li>已了解客户当前持有产品的大致类型（通过渠道方初步沟通获取）</li>
<li>已准备好"不涉及推荐"的诊断邀约话术</li>
<li>已确认本次见面不携带任何具体产品资料或宣传册</li>
<li>已明确本次见面的目标是"建立初步信任"，不是"促成配置"</li>
<li>已了解客户的基本顾虑方向（如有渠道方信息）</li>
<li>已准备好应对"不信任证券公司"类话题的认同式回应</li>
</div>
</div>

<div class="card">
<div class="card-title">合规红线对照表：这些话不能说</div>
<table class="table-wrap">
<thead><tr><th>不能说的话</th><th>问题在哪</th><th>可以换成</th></tr></thead>
<tbody>
<tr><td>"这个产品稳赚不赔"</td><td>承诺收益、暗示无风险</td><td>"历史业绩仅供参考，不代表未来表现，具体风险请参阅产品说明书"</td></tr>
<tr><td>"买这个肯定比银行理财强"</td><td>比较性收益承诺</td><td>"我们可以一起看看这个产品和您现在持有产品的风险收益特征有什么不同"</td></tr>
<tr><td>"这是内部消息，错过这次没有了"</td><td>制造虚假紧迫感</td><td>"建议您按照自己的节奏决定，不用着急"</td></tr>
<tr><td>"跟着我做就行，不用看那些条款"</td><td>规避信息披露义务</td><td>"这是产品说明书，建议您看一下风险提示部分，有问题随时问我"</td></tr>
<tr><td>"XX银行理财根本不行，远不如我们"</td><td>贬低同业</td><td>"不同机构的产品各有特点，我可以帮您客观比较一下"</td></tr>
</tbody>
</table>
<div class="callout" style="margin-top:12px">
<div class="callout-title">💡 使用方法</div>
<p>这张表不是用来背的，是用来养成习惯的——每次写完一段话术，照着这张表的逻辑检查一遍：<strong>有没有收益承诺、有没有制造紧迫感、有没有规避信息披露、有没有贬低同业。</strong>四项都没有，这段话术才算合规过关。</p>
</div>
</div>

<div class="card">
<div class="card-title">各场景工具组合侧重点</div>
<table class="table-wrap">
<thead><tr><th>场景</th><th>最需要的工具</th><th>原因</th></tr></thead>
<tbody>
<tr><td>识别筛选</td><td>判断清单</td><td>把"值得投入"的信号列成清单，比写大段话术更有用</td></tr>
<tr><td>活动现场转化</td><td>SOP + 检查清单</td><td>现场时间紧节奏快，需要清楚步骤和不能漏掉的动作，话术次要</td></tr>
<tr><td>破冰建信</td><td>话术 + SOP</td><td>情绪敏感节点需要话术，诊断操作需要SOP</td></tr>
<tr><td>资产识别</td><td>话术</td><td>怎么自然聊出客户全貌，每一句怎么说至关重要</td></tr>
<tr><td>资产迁移与转介绍</td><td>三类都要</td><td>说服性话术 + 迁移节奏SOP + 转介绍时机判断清单</td></tr>
</tbody>
</table>
</div>

<div class="callout" style="margin-top:8px">
<div class="callout-title">📌 下一部分预告</div>
<p>标准动作和工具确保了不出大错，但顶尖顾问做的事往往比标准动作多一点。下一部分要把那"多一点"萃取成一两个真实案例——新人靠流程图和工具保住基本盘，靠案例知道顶尖顾问还多做了什么。</p>
</div>

</section>

<!-- ═══════════════ PART 5 ═══════════════ -->
<section class="section" id="p5">
<div class="section-header">
<div class="section-num">05</div>
<div>
<div class="section-title">案例萃取——拉上限的亮点</div>
<div class="section-subtitle">Part 5 · 把"多一点"萃取成可学习的经验</div>
</div>
</div>

<div class="card">
<div class="card-title">一句"我们有个成功案例"，和一个真案例的差距</div>
<div class="grid-2">
<div class="hbox hbox-blue">
<div class="hbox-title">❌ 业绩总结式案例（没用）</div>
<p>"我们团队的王顾问，成功将一位原本只信任银行的客户发展为高净值客户，资产规模达到千万级别，充分体现了我们专业的服务能力。"</p>
<p style="font-size:12px;color:var(--text3);margin-top:8px">→ 新人看完不知道具体做对了什么、换了客户还管不管用</p>
</div>
<div class="hbox hbox-red">
<div class="hbox-title">✓ 真实叙事式案例（有用）</div>
<p>有具体开场对话、有客户当时真实的反应、有顾问当下的判断和选择、有选择背后的道理——新人读完能在遇到类似客户时，想起"对，当时就是这么处理的"</p>
</div>
</div>
</div>

<div class="card">
<div class="card-title">案例要同时回答两个问题</div>
<div class="grid-2">
<div class="hbox hbox-red">
<div class="hbox-title">✅ 正面案例</div>
<p><strong>解决"为什么这样做"</strong><br>在一个具体情境里，顾问做对了哪个关键选择，这个选择带来了什么结果</p>
</div>
<div class="hbox hbox-orange">
<div class="hbox-title">⚠️ 反面案例</div>
<p><strong>解决"不这样做会怎样"</strong><br>一个不那么妥当的处理方式，会带来什么后果——往往比正面案例更让人记住教训</p>
</div>
</div>
</div>

<div class="card">
<div class="card-title">⚡ 正面案例完整示例：先认同后诊断——陈姐怎么打开张总的第一次对话</div>
<div class="dialog-box">
<div class="dialog-tag">叙事</div>
<p style="margin-bottom:12px"><strong>背景：</strong>客户张总，银行私行客户，资产主要在保本理财，第一次见面提到不信任证券公司，朋友炒股亏钱，担心养老钱受损失。</p>

<p style="margin-bottom:10px;font-weight:700;color:var(--text)">第一次见面，张总开门见山："我跟你说实话，我不太相信你们证券公司，我身边有朋友炒股亏了很多钱，我这些钱是养老的，不能冒险。"</p>

<p style="margin-bottom:12px">陈姐没有解释证券公司和炒股有什么不同，而是先认同了这句话："您说的这个情况确实常见，很多人自己炒股是没有方法的，亏钱很正常。"</p>

<p style="font-size:13px;color:var(--text3);margin-bottom:12px;padding:10px;background:var(--surface2);border-radius:6px;border-left:3px solid var(--red)"><strong>第一个关键判断点：</strong>张总这句开场白，本质上不是在讨论专业问题，是在试探陈姐会不会急着反驳、急着推销。陈姐选择先站在客户这边，这让张总的防御心态松动了一些。</p>

<p style="margin-bottom:12px">紧接着，陈姐没有趁热打铁谈产品，而是提出一件对张总单方面有用的事："我可以先免费帮您看一眼，您现在这几个理财产品的真实到期收益率，不涉及任何推荐。"</p>

<p style="font-size:13px;color:var(--text3);margin-bottom:12px;padding:10px;background:var(--surface2);border-radius:6px;border-left:3px solid var(--red)"><strong>第二个关键判断点：</strong>"不涉及任何推荐"这句话，把这件事从"顾问想卖我东西"变成了"单纯帮我看一眼"，张总的戒备进一步放下，同意了。</p>

<p style="margin-bottom:12px">第二次见面，陈姐当面讲解诊断结果——张总持有的两笔理财产品，实际到期收益比当初宣传的预期收益低了不少。陈姐讲解完没有主动追问"那您要不要了解一下我们的产品"，而是等张总自己反应。张总看着这个落差，自己问了一句"那你们这边一般怎么配置？"——这正是陈姐一直在等的信号，此时她才正式展开配置话题。</p>
</div>
<div class="callout" style="margin-top:12px">
<div class="callout-title">💡 启示</div>
<p><strong>客户带着防御开场时，最先要做的不是证明自己专业，是让客户感到"你不是来卖我东西的"。一个不涉及推荐的工具，往往比任何说服性的话术都更能打开第一道门。</strong></p>
</div>
</div>

<div class="card">
<div class="card-title">⚡ 反面案例：急一步，前功尽弃</div>
<div class="dialog-box">
<div class="dialog-tag">反面案例</div>
<p style="margin-bottom:12px">某顾问对一位类似背景的客户做完账户诊断讲解后，看客户没有立刻反应，担心错过机会，主动追问了一句"那您看要不要了解一下我们的资产配置方案"。</p>
<p style="margin-bottom:12px">客户的反应是礼貌地说"我再考虑一下"，之后再约见面，对方一直推托，最终没有再进一步推进。</p>
<p style="font-size:13px;color:var(--text3);margin-bottom:12px;padding:10px;background:var(--surface2);border-radius:6px;border-left:3px solid var(--red)"><strong>问题分析：</strong>不在诊断本身，在于最后这一句主动追问——客户原本因为"这件事不涉及推荐"而放下的戒备，在这一句话出现的瞬间又重新立起来了。</p>
</div>
<div class="callout">
<div class="callout-title">💡 启示</div>
<p><strong>诊断讲解完之后的沉默，不一定是拒绝信号，更多时候是客户在消化信息。这个时候保持耐心，比急着往下推更重要。</strong></p>
</div>
</div>

<div class="card">
<div class="card-title">案例质量三标准</div>
<div class="grid-3">
<div class="mini-card">
<h5>✅ 有真实感</h5>
<p>基于真实情境改编，对话和细节经得起当事人自己审视，不是编造的理想化故事</p>
</div>
<div class="mini-card">
<h5>✅ 代表一类场景</h5>
<p>呈现的判断逻辑能用到其他类似客户身上，不是只对这一个客户管用的偶然情况</p>
</div>
<div class="mini-card">
<h5>✅ 结论可迁移</h5>
<p>结尾提炼出一句话启示，让读到的人知道"这个道理下次遇到类似情况可以怎么用"</p>
</div>
</div>
<div class="callout" style="margin-top:12px">
<div class="callout-title">⚠️ 常见误区</div>
<p>① 案例写成业绩总结（只有结果没有过程）→ 还原具体对话和顾问当下的判断<br>② 案例细节夸大或美化 → 对照访谈原始记录核对，不夸大<br>③ 启示写成空话 → 必须是可直接用在下次类似场景的判断</p>
</div>
</div>

<div class="card">
<div class="card-title">正面案例 vs 反面案例，选哪个</div>
<div class="grid-2">
<div class="hbox hbox-blue">
<div class="hbox-title">优先选正面案例的场景</div>
<p>如果这个场景里，新人最大的问题是"不知道该做什么"——给出清楚示范</p>
</div>
<div class="hbox hbox-orange">
<div class="hbox-title">优先选反面案例的场景</div>
<p>如果新人最大的问题是"容易在某个地方好心办坏事"——给出清楚警示</p>
</div>
</div>
<p style="margin-top:14px;font-size:14px;color:var(--text2)">两种都有的话，<strong>正反各放一个</strong>是最好的组合，能同时覆盖"该怎么做"和"千万别怎么做"。</p>
</div>

<div class="callout" style="margin-top:8px">
<div class="callout-title">📌 下一部分预告</div>
<p>流程图、配套工具、案例，三样东西现在都已经准备好了。下一部分要把它们拼到一起，做成一张真正会被打开使用的场景工具卡。</p>
</div>

</section>

<!-- ═══════════════ PART 6 ═══════════════ -->
<section class="section" id="p6">
<div class="section-header">
<div class="section-num">06</div>
<div>
<div class="section-title">场景工具卡制作</div>
<div class="section-subtitle">Part 6 · 拼成一张真正会被打开用的工具卡</div>
</div>
</div>

<div class="card">
<div class="card-title">工具卡和课件的区别</div>
<div class="grid-2">
<div class="hbox hbox-blue">
<div class="hbox-title">📝 课件</div>
<p>用来"讲一遍"的，按时间顺序从头讲到尾，听众跟着讲者的节奏走</p>
</div>
<div class="hbox hbox-red">
<div class="hbox-title">🃏 工具卡</div>
<p>用来"反复查"的，按查阅需求排列，使用者带着具体问题打开它——几秒钟内找到对应内容，不是从头看到尾</p>
</div>
</div>
</div>

<div class="card">
<div class="card-title">工具卡五个内容板块</div>
<div class="grid-5" style="display:grid;grid-template-columns:repeat(5,1fr);gap:12px">
<div class="mini-card">
<h5>📍 场景定位卡</h5>
<p>客户是谁、核心障碍是什么、服务目标是什么——打开工具卡第一眼要看到的东西</p>
</div>
<div class="mini-card">
<h5>💡 核心方法论</h5>
<p>本组打法的一句话名字，加上简要的逻辑说明</p>
</div>
<div class="mini-card">
<h5>🗺️ 服务流程图</h5>
<p>第三部分整理的节点，含客户状态、顾问动作、进阶信号、风险点</p>
</div>
<div class="mini-card">
<h5>🧰 配套工具索引</h5>
<p>话术、SOP、清单，按节点分类放好，方便对应查找</p>
</div>
<div class="mini-card">
<h5>⚠️ 关键点速查</h5>
<p>新手易错点、老手易忽视点、致命点汇总，方便快速避坑</p>
</div>
</div>
</div>

<div class="card">
<div class="card-title">颜色与样式规范</div>
<div class="grid-3">
<div class="hbox hbox-red">
<div class="hbox-title">🔴 致命点</div>
<p>最醒目的颜色（深红底白字或红边框），出现频率最低、但一旦出现必须第一眼被看到</p>
</div>
<div class="hbox hbox-orange">
<div class="hbox-title">🟠 老手易忽视点</div>
<p>偏中性的提醒色（橙色），表示"重要但不是红线"</p>
</div>
<div class="hbox hbox-blue">
<div class="hbox-title">🔵 新手易错点</div>
<p>偏温和的颜色（蓝色），表示"提醒性质"</p>
</div>
</div>
<div class="callout" style="margin-top:14px">
<div class="callout-title">💡 字号与行距</div>
<p>工具卡很多时候是在和客户见面前的几分钟内被翻看的，<strong>正文字号不低于15像素，行距适当放宽</strong>，方便快速扫读。</p>
</div>
</div>

<div class="card">
<div class="card-title">三秒测试</div>
<div class="banner">
<h3>怎么做三秒测试</h3>
<p>假设你现在正坐在一个类似客户面前，遇到了流程图里的某个节点，打开这份工具卡，能不能在<strong style="color:#fca5a5">三秒内</strong>找到对应的内容。如果找不到，说明板块划分或者标题写得不够清楚，需要调整。</p>
</div>
<div class="callout" style="margin-top:14px">
<div class="callout-title">💡 关键认知</div>
<p><strong>工具卡好不好，不取决于内容写得多不多，取决于"现在需要的时候，能不能马上找到"。</strong>内容再全，找不到也等于没有。</p>
</div>
</div>

<div class="card">
<div class="card-title">定稿前12项检查清单</div>
<div class="checklist">
<li>单文件可以离线打开，没有依赖外部链接或图片</li>
<li>五个板块（或精简版的三个板块）内容齐全，没有占位的空白</li>
<li>三类关键点用了明显区分的颜色或标记</li>
<li>字号和行距方便快速扫读，不是密密麻麻一大段</li>
<li>话术、案例里没有遗留访谈对象的真实姓名或敏感信息</li>
<li>没有出现收益承诺或贬低同业的表述</li>
<li>场景定位卡里的客户描述是真实情况，没有夸大或想象的成分</li>
<li>每一条话术有真实访谈依据，不是临时编的</li>
<li>流程图里的风险点分类对照真实情况，分类是否准确</li>
<li>合规边界清楚——没有收益承诺、没有误导性表述</li>
<li>案例细节真实，没有夸大结果</li>
<li>展示稿示例完整，有具体的场景、核心工具和认知变化</li>
</div>
</div>

<div class="card">
<div class="card-title">为什么是HTML，不是Word或PPT</div>
<div class="quote">
<p>HTML单文件的好处是可以做出清楚的分区和导航，使用者一眼能看到入口，点哪里看哪里，而且<strong>不依赖任何软件</strong>，电脑、手机的浏览器都能直接打开，发给同事不需要对方装任何东西。</p>
</div>
<p style="margin-top:12px;font-size:14px;color:var(--text2)">AI生成完HTML内容后，把完整代码存成一个以".html"结尾的文件，比如"破冰建信工具卡.html"，<strong>双击就能用浏览器打开，不需要联网，不需要装任何软件。</strong>如果需要打印，用浏览器"打印"功能选择"另存为PDF"即可。</p>
</div>

<div class="callout" style="margin-top:8px">
<div class="callout-title">📌 下一部分预告</div>
<p>自己组做的东西，自己看顺眼是一回事，别人能不能看懂是另一回事。下一部分要让别的组来检查你们的工具卡——这是发现问题的最后一道关口。</p>
</div>

</section>

<!-- ═══════════════ PART 7 ═══════════════ -->
<section class="section" id="p7">
<div class="section-header">
<div class="section-num">07</div>
<div>
<div class="section-title">交叉验证与全景拼图</div>
<div class="section-subtitle">Part 7 · 借助"局外人"视角发现问题</div>
</div>
</div>

<div class="card">
<div class="card-title">自己写的东西，自己永远挑不出毛病</div>
<div class="quote">
<p>自己反复检查三遍都没发现的错别字，发给同事一看，立刻就被指出来了。不是因为同事更细心，是因为人对自己写的东西，大脑会自动脑补"我知道这里想表达什么"，所以看不出表达不清楚的地方。</p>
</div>
</div>

<div class="card">
<div class="card-title">三维验证：准确性 · 可用性 · 完整性</div>
<div class="grid-3">
<div class="hbox hbox-red">
<div class="hbox-title">✅ 准确性</div>
<p>业务描述是否符合真实情况，话术经不经得起实战检验，合规边界清不清楚</p>
<p style="font-size:12px;color:var(--text3);margin-top:6px">主要靠组内成员自己核对——只有真正做过这件事的人，才知道哪里写得不够真实</p>
</div>
<div class="hbox hbox-blue">
<div class="hbox-title">👁️ 可用性</div>
<p>拿到这份工具卡的人，能不能不靠额外解释就直接上手，哪里会卡住</p>
<p style="font-size:12px;color:var(--text3);margin-top:6px">最需要局外人来看——局外人才会真实地"卡住"</p>
</div>
<div class="hbox hbox-orange">
<div class="hbox-title">📋 完整性</div>
<p>是否覆盖了新手易错点、老手易忽视的客户信号、关键风险节点三个层级</p>
<p style="font-size:12px;color:var(--text3);margin-top:6px">回头对照前几个部分整理出来的内容，看有没有漏掉</p>
</div>
</div>
</div>

<div class="card">
<div class="card-title">跨组互查指引（按这个顺序看）</div>
<div class="step">
<div class="step-num">1</div>
<div class="step-content">
<div class="step-title">只看场景定位卡，不看后面的内容</div>
<div class="step-desc">问自己：我能不能在十秒内说清楚，这个场景里客户是什么状态？</div>
</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content">
<div class="step-title">看服务流程图</div>
<div class="step-desc">问自己：如果我是新人，第一次遇到这个场景，照着这张图能不能知道下一步该做什么？</div>
</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content">
<div class="step-title">看配套话术</div>
<div class="step-desc">问自己：这句话我自己说得出口吗？会不会觉得别扭、不像真人说的话？</div>
</div>
</div>
<div class="step">
<div class="step-num">4</div>
<div class="step-content">
<div class="step-title">看致命点提示</div>
<div class="step-desc">问自己：这条提示对我来说，是"早就知道"还是"原来这里有坑"？</div>
</div>
</div>
<div class="callout" style="margin-top:14px">
<div class="callout-title">💡 好的反馈不是"我觉得不错"</div>
<p>是<strong>"我在第几步卡住了，因为什么"</strong>——后一种反馈能让对方组真正改到点子上。</p>
</div>
</div>

<div class="card">
<div class="card-title">全景拼图：五块拼图拼成完整地图</div>
<p style="margin-bottom:14px">把五个小组的工具卡放回"识·破·落·耕"全景图上，看看完整的样子。</p>
<div class="banner">
<h3>全景图位置</h3>
<p>我们组的场景是：_______________<br>
落在全景图的哪一格（识 / 破 / 落 / 耕，可跨两格）：_______________<br>
和我们相邻的格子，分别是哪个组在做：_______________</p>
</div>
</div>

<div class="card">
<div class="card-title">五块拼图填满后的完整地图</div>
<table class="table-wrap">
<thead><tr><th>格子</th><th>场景</th><th>一句话核心打法</th></tr></thead>
<tbody>
<tr><td><span class="tag tag-gray">识</span></td><td>识别值得投入的银行客户</td><td>不看资产规模看行为信号，建立判断清单而不是凭印象</td></tr>
<tr><td><span class="tag tag-gray">识→破</span></td><td>活动现场识别与转化</td><td>接住客户自己抛出的问题，隔一天再跟进而非当场推销</td></tr>
<tr><td><span class="tag tag-red">破</span></td><td>对权益保守客户建立信任</td><td>先认同后诊断，不涉及推荐的工具打开第一道门</td></tr>
<tr><td><span class="tag tag-gray">落</span></td><td>识别存量客户表外资产</td><td>诊断推进对话，不是发一份报告就等结果</td></tr>
<tr><td><span class="tag tag-gray">落→耕</span></td><td>资产迁移与顺势转介绍</td><td>找到迁移的真实理由而非比拼费率，转介绍时机由客户信号决定</td></tr>
</tbody>
</table>
<div class="callout" style="margin-top:14px">
<div class="callout-title">🎉 这张表填满的意义</div>
<p>意味着团队第一次有了一套<strong>不是凭空设计、而是从真实经验里长出来的</strong>高净值客户服务工作法——既是五套马上能用的实战工具，合在一起又是一套完整的工作法。</p>
</div>
</div>

<div class="callout" style="margin-top:8px">
<div class="callout-title">📌 下一部分预告</div>
<p>工具卡定稿了，全景图也拼出来了。最后一部分，是把这两天做的事讲清楚给别人听，并且想明白这份工具卡回去之后具体怎么用。</p>
</div>

</section>

<!-- ═══════════════ PART 8 ═══════════════ -->
<section class="section" id="p8">
<div class="section-header">
<div class="section-num">08</div>
<div>
<div class="section-title">成果展示与落地规划</div>
<div class="section-subtitle">Part 8 · 做出来的东西，不用，就是白做</div>
</div>
</div>

<div class="card">
<div class="card-title">展示讲清楚三件事（控制在3-5分钟）</div>
<div class="grid-3">
<div class="mini-card">
<h5>① 场景 & 障碍</h5>
<p>我们的场景是：___________<br>客户最大的障碍是：___________</p>
</div>
<div class="mini-card">
<h5>② 最值钱的一个工具</h5>
<p>我们这套工具里，最值钱的一个是：___________<br>（一句话说清楚它为什么值钱）</p>
</div>
<div class="mini-card">
<h5>③ 最大的认知变化</h5>
<p>这两天我们组最大的认知变化是：___________<br>（往往是最没想到的那个判断点）</p>
</div>
</div>
</div>

<div class="card">
<div class="card-title">展示稿示例</div>
<div class="quote">
<p>"我们这组做的是对权益市场有戒心的银行私行客户，怎么建立信任并推进第一次有效对话。这类客户最大的障碍不是产品逻辑，是认知壁垒和情绪防线。</p>

<p style="margin-top:10px">我们这套工具里最值钱的一个，是节点一的应对话术——客户一开口说不信任证券公司，先认同他而不是反驳，这个反应看似简单，但我们访谈下来发现，新人本能反应几乎都是反驳或解释，这一条话术直接帮新人避开了最容易丢单的第一步。</p>

<p style="margin-top:10px">这两天我们组最大的认知变化，是发现真正决定结果的，不是我们最开始以为的'产品讲得专不专业'，而是'诊断报告讲完之后敢不敢不追问、等不等得起'这个很小的细节。这是我们两天前完全没想到的。"</p>
</div>
</div>

<div class="card">
<div class="card-title">工具卡回去之后，会被用在哪些场合</div>
<div class="grid-3">
<div class="hbox hbox-blue">
<div class="hbox-title">👤 新顾问入职</div>
<p>以场景为单位，系统了解这类客户的服务逻辑和关键节点，比起单独摸索三五年，能大幅缩短上手周期</p>
</div>
<div class="hbox hbox-orange">
<div class="hbox-title">📆 日常服务参考</div>
<p>遇到具体客户问题时，按场景类型打开对应工具卡，服务前快速对照一遍</p>
</div>
<div class="hbox hbox-red">
<div class="hbox-title">🔄 阶段性复盘</div>
<p>团队定期讨论时，以工具卡为底稿，讨论哪些动作需要优化、有没有新的场景需要补充</p>
</div>
</div>
</div>

<div class="card">
<div class="card-title">工具卡持续更新的方法</div>
<div class="grid-3">
<div class="mini-card">
<h5>➕ 补充新场景/话术</h5>
<p>遇到新的典型场景或话术变体，用同样的AI辅助方法继续补充</p>
</div>
<div class="mini-card">
<h5>📖 纳入新案例</h5>
<p>遇到新的真实案例，及时纳入，保持工具卡的真实感</p>
</div>
<div class="mini-card">
<h5>⚖️ 更新合规内容</div>
<p>合规要求有更新时，及时核对调整涉及产品推介的部分</p>
</div>
</div>
<div class="callout" style="margin-top:14px">
<div class="callout-title">⚠️ 发布前提醒</div>
<p>工具卡中涉及对外沟通话术、服务流程、产品推介场景等内容，目前还是初稿版本，<strong>正式对外使用前，需要经过合规部门及相关职能部门审核确认</strong>。涉及具体产品推介的话术内容，适当性管理与信息披露要求要严格依照公司合规管理规定执行。</p>
</div>
</div>

<div class="card">
<div class="card-title">两天之后，这件事并没有结束</div>
<div class="quote">
<p>工具卡做出来，不代表这个场景的经验已经被穷尽了。每一次有人用工具卡里的话术真的谈成一个客户，或者发现某句话可以说得更好，都是新的素材——把它记下来，找个时间用同样的方法补充进去。</p>
</div>
<p style="margin-top:12px;font-size:14px;color:var(--text2)">两天教会你们的，不只是做出这一张工具卡，更是一套方法：下次遇到任何一个<strong>"团队里有人做得好但说不清楚"</strong>的场景，都可以用同样的步骤——认领场景 → 结构化访谈 → 梳理流程 → 生成工具 → 萃取案例 → 做成工具卡 → 交叉验证 → 对外展示——把它变成一份可以传下去的东西。</p>
</div>

<div class="card">
<div class="card-title">两天完整知识框架</div>
<div style="background:var(--surface2);border:1px solid var(--border);border-radius:var(--radius);padding:22px 26px;font-size:13.5px;color:var(--text2);line-height:2">
<div style="color:var(--text);font-weight:700;margin-bottom:8px">├── 全景坐标：识·破·落·耕（五个场景分别落在这张图上）</div>
<div style="padding-left:20px">
<div>├── 第一部分：认领场景 → 定位草稿（客户状态 + 谁做得好 + 要交出什么）</div>
<div>├── 第二部分：结构化访谈萃取 → 三层提问框架 + 三类素材</div>
<div>├── 第三部分：服务流程梳理 → 四要素路径图 + 一句话打法命名</div>
<div>├── 第四部分：工具产出 → 话术（场景清晰/口语化/含反应变体）+ SOP + 清单</div>
<div>├── 第五部分：案例萃取 → 正面案例 + 反面案例</div>
<div>├── 第六部分：场景工具卡制作 → 五板块HTML单文件</div>
<div>├── 第七部分：交叉验证 → 三维验证 + 全景拼图</div>
<div>└── 第八部分：成果展示与落地规划 → 三大使用场景 + 持续更新</div>
</div>
</div>

<div class="card">
<div class="card-title">写给自己的三句话</div>
<div class="hbox hbox-blue" style="padding:20px 24px">
<p>这两天才我最大的三个收获：</p>
<p style="margin-top:8px">① ____________________________<br>② ____________________________<br>③ ____________________________</p>
<p style="margin-top:12px">回去之后，我打算第一个改变的具体动作是：<br>____________________________________</p>
<p style="margin-top:10px">我打算什么时候第一次用上这份工具卡（写一个具体场景或时间）：<br>____________________________________</p>
</div>
</div>

</section>

<!-- ═══════════════ APPENDIX ═══════════════ -->
<section class="section" id="appendix">
<div class="appendix">
<h2>附录</h2>

<div style="margin-bottom:28px">
<h3 style="font-size:16px;font-weight:700;color:var(--text);margin-bottom:14px">附录一：术语速查表</h3>
<div class="term-grid">
<div class="term-item"><span class="term-key">高净值客户</span><span class="term-val">本次工作坊语境下，指资产量在800万以上的客户</span></div>
<div class="term-item"><span class="term-key">私行客户</span><span class="term-val">银行私人银行体系服务的高净值客户</span></div>
<div class="term-item"><span class="term-key">账户诊断</span><span class="term-val">对客户现有持仓进行客观分析呈现，不涉及产品推荐的服务动作</span></div>
<div class="term-item"><span class="term-key">KYC</span><span class="term-val">了解你的客户，指了解客户风险承受能力、投资目标等信息的过程</span></div>
<div class="term-item"><span class="term-key">产品适当性管理</span><span class="term-val">确保推荐给客户的产品符合其风险承受能力和投资目标的合规要求</span></div>
<div class="term-item"><span class="term-key">信息披露</span><span class="term-val">向客户充分说明产品风险、收益特征等信息的合规要求</span></div>
<div class="term-item"><span class="term-key">两融</span><span class="term-val">融资融券业务</span></div>
<div class="term-item"><span class="term-key">转介绍</span><span class="term-val">现有客户主动介绍新客户的获客方式</span></div>
<div class="term-item"><span class="term-key">场景工具卡</span><span class="term-val">本次工作坊产出的HTML单文件查阅工具，整合流程图、话术、案例等内容</span></div>
<div class="term-item"><span class="term-key">风险测评</span><span class="term-val">对客户风险承受能力进行评估的标准化问卷流程，是合规前置环节</span></div>
<div class="term-item"><span class="term-key">资产配置</span><span class="term-val">根据客户风险承受能力和目标，对资金在不同类型产品间进行分配的方法</span></div>
<div class="term-item"><span class="term-key">渠道合作</span><span class="term-val">与银行等其他机构建立的客户转介或联合获客合作机制</span></div>
<div class="term-item"><span class="term-key">留存率</span><span class="term-val">客户在一段时间内持续保留资产或持续合作的比例，衡量服务质量的指标</span></div>
<div class="term-item"><span class="term-key">信任成本</span><span class="term-val">让客户从陌生或防御状态转变为信任状态所需要投入的时间和动作</span></div>
<div class="term-item"><span class="term-key">化名处理</span><span class="term-val">案例中将真实客户姓名替换为不可识别身份的称呼，保护客户隐私</span></div>
<div class="term-item"><span class="term-key">交叉验证</span><span class="term-val">多个小组或多名成员互相检验彼此产出，发现单组难以自查的问题</span></div>
<div class="term-item"><span class="term-key">三秒测试</span><span class="term-val">检验工具卡可用性的简易方法，看使用者能否在三秒内找到需要的内容</span></div>
</div>
</div>

<div style="margin-bottom:28px">
<h3 style="font-size:16px;font-weight:700;color:var(--text);margin-bottom:14px">附录二：练习参考思路</h3>
<div class="grid-2" style="gap:14px">
<div class="card" style="margin-bottom:0;padding:18px 20px">
<div class="card-title" style="font-size:14px">认知自测参考思路</div>
<p>① 错 &nbsp; ② 对 &nbsp; ③ 错 &nbsp; ④ 错 &nbsp; ⑤ 对</p>
<p style="font-size:12.5px;color:var(--text3);margin-top:8px">业绩好不等于每个场景都强；老手说不清楚是正常的；标准流程保不住顶尖水平；没人做成过的场景不硬编；AI写不出你没说过的东西</p>
</div>
<div class="card" style="margin-bottom:0;padding:18px 20px">
<div class="card-title" style="font-size:14px">场景判断练习参考思路</div>
<p>"诊断要收费吗" → 节点二，明确免费<br>"沉默不说话" → 节点三，耐心等不追问<br>"主动问配置" → 进入节点四信号<br>"三天没回复" → 正常消化期判断</p>
</div>
</div>
</div>

<div style="margin-bottom:28px">
<h3 style="font-size:16px;font-weight:700;color:var(--text);margin-bottom:14px">附录三：合规自查速查清单</h3>
<div class="checklist">
<li>没有出现任何收益承诺或保本表述</li>
<li>没有出现与同业的负面比较或贬低性表述</li>
<li>涉及产品推介的内容，已标注需经合规审核</li>
<li>案例中没有夸大或承诺具体收益结果</li>
<li>账户诊断类工具明确定位为信息呈现，不构成投资建议</li>
<li>客户信息收集仅限与当前场景直接相关的内容</li>
</div>
</div>

<div style="margin-bottom:0">
<h3 style="font-size:16px;font-weight:700;color:var(--text);margin-bottom:14px">附录四：常见问题</h3>
<div class="grid-2" style="gap:14px">
<div class="mini-card" style="margin-bottom:0">
<h5>两天时间不够用怎么办？</h5>
<p>优先保证服务流程图、核心话术或SOP、工具卡这三样基本完整，案例和交叉验证可以压缩——先保证"能用的最小版本"做出来，细节后续补充。</p>
</div>
<div class="mini-card" style="margin-bottom:0">
<h5>组内没有突出经验怎么办？</h5>
<p>如实反馈，更换一个组内确实有真实经验的场景方向。没有真人做成过的场景，不硬编。</p>
</div>
<div class="mini-card" style="margin-bottom:0">
<h5>AI生成内容差距很大怎么办？</h5>
<p>说明给AI的输入不够具体。把客户的具体状态、具体顾虑写进描述里——描述越具体，AI生成的内容越贴近真实情况。</p>
</div>
<div class="mini-card" style="margin-bottom:0">
<h5>访谈对象放不开怎么办？</h5>
<p>从对方最近一次印象深的经历问起，具体回忆比抽象总结好挖得多。先放松气氛，不要急着进入正式提问。</p>
</div>
</div>
</div>

</div>
</section>

</main>

<!-- FOOTER -->
<footer class="footer">
<p>招商证券 · 高净值客户服务经验萃取工作坊 · 内部教学资料</p>
<p style="margin-top:6px">两天时间，把团队"会做但说不清"的真实经验，变成一套谁都能用的工具</p>
</footer>

<!-- NAV ACTIVE SCRIPT -->
<script>
(function(){
  var navs = document.querySelectorAll('.nav a');
  var sections = document.querySelectorAll('.section, .appendix');
  function updateActive(){
    var scrollY = window.scrollY + 100;
    for(var i = sections.length - 1; i >= 0; i--){
      if(sections[i].offsetTop <= scrollY){
        navs.forEach(function(n){ n.classList.remove('active'); });
        var id = sections[i].id;
        navs.forEach(function(n){
          if(n.getAttribute('href') === '#' + id) n.classList.add('active');
        });
        break;
      }
    }
  }
  window.addEventListener('scroll', updateActive, {passive:true});
  updateActive();
})();
</script>

</body>
</html>"""

with open(output_path, 'w', encoding='utf-8') as f:
    f.write(html)

size = os.path.getsize(output_path)
print(f'File written: {output_path}')
print(f'File size: {size:,} bytes ({size/1024:.1f} KB)')
