#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Build the student handbook HTML for course 03."""

import os

OUTPUT_PATH = r"D:\新课开发\金融学\03-基金定投实战-选基择时与止盈策略\学员手册\03-学员手册.html"

def write_file(path, content, mode='w'):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, mode, encoding='utf-8') as f:
        f.write(content)
    print(f"Written: {path} ({len(content)} bytes)")

# HTML Header + CSS
css_and_header = '''<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>基金定投实战 · 学员手册</title>
<style>
:root {
  --red:        #B81025;
  --red-hi:     #D4122B;
  --red-wash:   #FAF0F1;
  --ink:        #1A1A1A;
  --gray-70:    #4A4748;
  --gray-50:    #7A7678;
  --gray-30:    #B8B4B5;
  --gray-10:    #EAE6E4;
  --warm:       #F6F3EF;
  --surface:    #FFFFFF;
  --dark:       #1C1A1B;
  --darker:     #141213;
  --font-serif: 'Didot','Bodoni MT','Bodoni 72','Times New Roman',Georgia,serif;
  --font-body:  'PingFang SC','Hiragino Sans GB','Microsoft YaHei','Helvetica Neue',Helvetica,sans-serif;
  --ease:       cubic-bezier(.4,0,.2,1);
}
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
html{scroll-behavior:smooth;font-size:16px;}
body{background:var(--warm);color:var(--ink);font-family:var(--font-body);line-height:1.75;-webkit-font-smoothing:antialiased;overflow-x:hidden;}
.container{max-width:1100px;margin:0 auto;padding:0 48px;}
.eyebrow{font-size:10.5px;letter-spacing:.2em;text-transform:uppercase;font-weight:700;color:var(--red);display:flex;align-items:center;gap:10px;}
.eyebrow::before{content:'';display:block;width:24px;height:1.5px;background:var(--red);}
.serif{font-family:var(--font-serif);}
.reveal{opacity:0;transform:translateY(28px);transition:opacity .7s var(--ease),transform .7s var(--ease);}
.reveal.in{opacity:1;transform:none;}
.reveal.d1{transition-delay:.1s;}
.reveal.d2{transition-delay:.2s;}
.reveal.d3{transition-delay:.3s;}
.reveal.d4{transition-delay:.4s;}
.reveal.d5{transition-delay:.5s;}
.toc{background:var(--surface);padding:48px 0;border-bottom:1px solid var(--gray-10);}
.toc-inner{max-width:1100px;margin:0 auto;padding:0 48px;}
.toc-title{font-family:var(--font-serif);font-size:24px;color:var(--ink);margin-bottom:24px;}
.toc-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;}
.toc-item{display:flex;align-items:center;gap:12px;padding:12px 16px;background:var(--warm);border-radius:4px;border:1px solid var(--gray-10);transition:all .3s var(--ease);text-decoration:none;color:var(--ink);}
.toc-item:hover{border-color:var(--red);background:var(--red-wash);}
.toc-num{font-family:var(--font-serif);font-size:18px;color:var(--red);font-weight:700;min-width:28px;}
.toc-text{font-size:13px;line-height:1.4;}
.hero{background:var(--surface);padding:0;position:relative;border-bottom:1px solid var(--gray-10);}
.hero-stripe{position:absolute;top:0;left:0;width:5px;height:100%;background:var(--red);}
.hero-inner{padding:64px 48px 72px;max-width:1100px;margin:0 auto;}
.hero-top{display:flex;justify-content:space-between;align-items:center;margin-bottom:56px;padding-bottom:28px;border-bottom:1px solid var(--gray-10);}
.brand-badge{display:flex;align-items:center;gap:0;}
.brand-rect{background:var(--red);color:#fff;font-size:13px;font-weight:700;letter-spacing:.06em;padding:7px 16px;line-height:1;}
.brand-en{font-size:10px;letter-spacing:.12em;color:var(--gray-50);text-transform:uppercase;padding-left:14px;border-left:1px solid var(--gray-10);margin-left:14px;line-height:1.5;}
.hero-tag{font-size:11px;color:var(--gray-50);letter-spacing:.08em;border:1px solid var(--gray-10);padding:6px 14px;border-radius:2px;}
.hero-body{display:grid;grid-template-columns:1fr auto;gap:64px;align-items:end;}
.hero-h1{font-family:var(--font-serif);font-size:42px;font-weight:400;line-height:1.25;color:var(--ink);margin-bottom:18px;letter-spacing:-.01em;}
.hero-h1 em{font-style:normal;color:var(--red);}
.hero-lead{font-size:15px;color:var(--gray-50);max-width:520px;line-height:1.85;}
.hero-metrics{display:flex;flex-direction:column;gap:0;align-self:stretch;justify-content:flex-end;border-left:1px solid var(--gray-10);padding-left:48px;}
.metric{padding:20px 0;border-bottom:1px solid var(--gray-10);text-align:right;}
.metric:last-child{border-bottom:none;}
.metric-val{font-family:var(--font-serif);font-size:48px;font-weight:400;color:var(--red);line-height:1;display:block;letter-spacing:-.02em;}
.metric-lbl{font-size:11px;color:var(--gray-50);letter-spacing:.06em;margin-top:4px;display:block;}
.section{padding:88px 0;}
.section-alt{background:var(--surface);}
.section-warm{background:var(--warm);}
.section-head{margin-bottom:48px;}
.section-head h2{font-family:var(--font-serif);font-size:30px;font-weight:400;color:var(--ink);margin:14px 0 10px;line-height:1.35;}
.section-head p{font-size:14px;color:var(--gray-50);}
.kf{background:var(--surface);border-radius:8px;border:1px solid var(--gray-10);overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,.05);}
.kf-header{background:var(--ink);color:#fff;padding:20px 28px;display:flex;align-items:center;gap:16px;}
.kf-icon{width:40px;height:40px;border-radius:50%;background:var(--red);display:flex;align-items:center;justify-content:center;}
.kf-icon svg{width:20px;height:20px;fill:#fff;}
.kf-title{font-size:15px;font-weight:700;}
.kf-body{padding:28px;}
.framework-ascii{background:var(--warm);border-radius:4px;padding:24px;font-family:'Courier New',monospace;font-size:12px;line-height:1.6;color:var(--gray-70);overflow-x:auto;white-space:pre;}
.data-table{width:100%;border-collapse:collapse;background:var(--surface);border-radius:4px;overflow:hidden;box-shadow:0 2px 16px rgba(0,0,0,.04);}
.data-table th{background:var(--ink);color:#fff;font-size:11px;letter-spacing:.1em;text-transform:uppercase;font-weight:700;padding:16px 20px;text-align:left;}
.data-table td{padding:16px 20px;font-size:13px;border-bottom:1px solid var(--gray-10);vertical-align:top;}
.data-table tr:last-child td{border-bottom:none;}
.data-table tr:hover td{background:var(--red-wash);}
.data-table .highlight{color:var(--red);font-weight:700;}
.data-table .cost-high{color:#d4122b;font-weight:700;}
.data-table .cost-mid{color:#e67e22;}
.data-table .cost-low{color:#27ae60;}
.callout{display:flex;gap:16px;padding:20px 24px;border-radius:4px;margin:24px 0;}
.callout-warning{background:#fff3cd;border-left:4px solid #ffc107;}
.callout-danger{background:var(--red-wash);border-left:4px solid var(--red);}
.callout-success{background:#d4edda;border-left:4px solid #27ae60;}
.callout-icon{width:24px;height:24px;flex-shrink:0;}
.callout-warning .callout-icon{fill:#ffc107;}
.callout-danger .callout-icon{fill:var(--red);}
.callout-success .callout-icon{fill:#27ae60;}
.callout-text{font-size:13px;line-height:1.6;}
.insight-box{background:var(--dark);color:#fff;padding:32px;border-radius:4px;position:relative;overflow:hidden;}
.insight-box::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:var(--red);}
.insight-quote{font-family:var(--font-serif);font-size:20px;line-height:1.6;margin-bottom:16px;}
.insight-source{font-size:12px;color:rgba(255,255,255,.5);}
.compare-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:20px;}
.compare-card{background:var(--surface);border-radius:4px;border:1px solid var(--gray-10);padding:24px;transition:border-color .3s var(--ease);}
.compare-card:hover{border-color:var(--red);}
.compare-header{display:flex;align-items:center;gap:12px;margin-bottom:16px;padding-bottom:16px;border-bottom:1px solid var(--gray-10);}
.compare-icon{width:40px;height:40px;border-radius:50%;background:var(--red-wash);display:flex;align-items:center;justify-content:center;}
.compare-icon svg{width:20px;height:20px;fill:var(--red);}
.compare-name{font-size:15px;font-weight:700;}
.compare-desc{font-size:13px;color:var(--gray-50);margin-bottom:16px;}
.form-section{background:var(--surface);border-radius:4px;border:1px solid var(--gray-10);overflow:hidden;margin:24px 0;}
.form-header{background:var(--ink);color:#fff;padding:16px 24px;}
.form-title{font-size:14px;font-weight:700;}
.form-subtitle{font-size:11px;color:rgba(255,255,255,.6);margin-top:4px;}
.form-body{padding:24px;}
.module-card{background:var(--surface);border-radius:4px;border:1px solid var(--gray-10);overflow:hidden;margin-bottom:32px;}
.module-card-header{background:var(--ink);color:#fff;padding:24px 28px;display:flex;align-items:flex-start;gap:20px;}
.module-card-num{font-family:var(--font-serif);font-size:36px;color:var(--red);line-height:1;}
.module-card-info{flex:1;}
.module-card-time{font-size:10px;letter-spacing:.15em;text-transform:uppercase;color:rgba(255,255,255,.5);margin-bottom:6px;}
.module-card-title{font-size:18px;font-weight:700;margin-bottom:8px;}
.module-card-subtitle{font-size:13px;color:rgba(255,255,255,.6);line-height:1.5;}
.module-card-body{padding:28px;}
.habit-card{background:var(--surface);border-radius:4px;border:1px solid var(--gray-10);overflow:hidden;margin:32px 0;}
.habit-header{background:linear-gradient(135deg,var(--red) 0%,var(--red-hi) 100%);color:#fff;padding:24px 28px;}
.habit-num{font-size:10px;letter-spacing:.15em;text-transform:uppercase;color:rgba(255,255,255,.7);margin-bottom:8px;}
.habit-title{font-family:var(--font-serif);font-size:22px;font-weight:400;margin-bottom:8px;}
.habit-subtitle{font-size:13px;color:rgba(255,255,255,.7);}
.habit-body{padding:28px;}
.knowledge-point{background:var(--surface);border-radius:4px;border:1px solid var(--gray-10);padding:20px 24px;margin:20px 0;}
.knowledge-point-title{font-size:15px;font-weight:700;color:var(--ink);margin-bottom:12px;display:flex;align-items:center;gap:10px;}
.knowledge-point-title::before{content:'';width:4px;height:20px;background:var(--red);border-radius:2px;}
.knowledge-point-content{font-size:13px;color:var(--gray-70);}
.knowledge-point-content p{margin-bottom:12px;}
.knowledge-point-content p:last-child{margin-bottom:0;}
.timeline{position:relative;padding-left:32px;}
.timeline::before{content:'';position:absolute;left:6px;top:0;bottom:0;width:2px;background:linear-gradient(180deg,var(--red) 0%,var(--gray-10) 100%);}
.timeline-item{position:relative;margin-bottom:28px;padding-left:32px;}
.timeline-item:last-child{margin-bottom:0;}
.timeline-dot{position:absolute;left:-32px;top:4px;width:14px;height:14px;border-radius:50%;background:var(--red);border:3px solid var(--warm);box-shadow:0 0 0 2px var(--red);}
.timeline-time{font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:var(--red);font-weight:700;margin-bottom:4px;}
.timeline-title{font-size:14px;font-weight:700;color:var(--ink);margin-bottom:6px;}
.timeline-desc{font-size:13px;color:var(--gray-50);}
.exercise{background:var(--surface);border-radius:4px;border:1px solid var(--gray-10);border-left:4px solid var(--red);padding:24px;}
.exercise-header{display:flex;align-items:center;gap:12px;margin-bottom:16px;}
.exercise-icon{width:36px;height:36px;border-radius:50%;background:var(--red-wash);display:flex;align-items:center;justify-content:center;}
.exercise-icon svg{width:18px;height:18px;fill:var(--red);}
.exercise-title{font-size:14px;font-weight:700;color:var(--ink);}
.exercise-body{padding-left:48px;}
.exercise-instruction{font-size:13px;color:var(--gray-50);margin-bottom:12px;}
.exercise-form{background:var(--warm);border-radius:4px;padding:16px;min-height:80px;}
.exercise-form textarea,.exercise-form input[type="text"]{width:100%;border:1px solid var(--gray-10);border-radius:4px;padding:12px;font-family:var(--font-body);font-size:13px;resize:vertical;background:#fff;}
.steps{display:flex;flex-direction:column;gap:0;}
.step{display:flex;gap:20px;padding:20px 0;border-bottom:1px solid var(--gray-10);}
.step:last-child{border-bottom:none;}
.step-num{width:40px;height:40px;border-radius:50%;background:var(--red);color:#fff;display:flex;align-items:center;justify-content:center;font-family:var(--font-serif);font-size:18px;font-weight:700;flex-shrink:0;}
.step-content{flex:1;}
.step-title{font-size:14px;font-weight:700;margin-bottom:6px;}
.step-desc{font-size:13px;color:var(--gray-50);}
.checklist{background:var(--warm);border-radius:4px;padding:20px;margin:20px 0;}
.checklist-item{display:flex;align-items:flex-start;gap:12px;padding:8px 0;border-bottom:1px solid var(--gray-10);}
.checklist-item:last-child{border-bottom:none;}
.checklist-box{width:18px;height:18px;border:2px solid var(--gray-30);border-radius:3px;flex-shrink:0;margin-top:2px;}
.checklist-text{font-size:13px;color:var(--gray-70);}
.signature-line{display:flex;gap:32px;margin-top:24px;font-size:13px;color:var(--gray-50);}
.signature-field{display:flex;align-items:center;gap:8px;}
.signature-field span{white-space:nowrap;}
.signature-field .line{flex:1;min-width:120px;border-bottom:1px solid var(--gray-30);}
.answer-toggle{margin:16px 0;}
.answer-toggle summary{cursor:pointer;padding:10px 16px;background:var(--warm);border:1px solid var(--gray-10);border-radius:4px;font-size:13px;font-weight:600;color:var(--gray-70);list-style:none;display:flex;align-items:center;gap:10px;transition:all .3s var(--ease);}
.answer-toggle summary:hover{background:var(--red-wash);border-color:var(--red);color:var(--red);}
.answer-toggle summary::before{content:'\\25b6';font-size:10px;transition:transform .3s var(--ease);}
.answer-toggle[open] summary::before{transform:rotate(90deg);}
.answer-content{padding:16px;background:var(--surface);border:1px solid var(--gray-10);border-top:none;border-radius:0 0 4px 4px;font-size:13px;}
.foot{background:var(--darker);padding:56px 0;}
.foot-inner{display:flex;justify-content:space-between;align-items:center;}
.foot-left{display:flex;align-items:center;gap:20px;}
.foot-mark{background:var(--red);color:#fff;font-size:13px;font-weight:700;letter-spacing:.06em;padding:8px 18px;border-radius:2px;}
.foot-title{font-size:14px;font-weight:700;color:rgba(255,255,255,.85);margin-bottom:3px;}
.foot-sub{font-size:12px;color:rgba(255,255,255,.35);letter-spacing:.04em;}
.foot-note{text-align:right;font-size:11.5px;color:rgba(255,255,255,.28);line-height:1.8;}
.tag-module{display:inline-block;font-size:10px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;padding:4px 10px;border-radius:2px;margin-right:8px;}
.tag-m1{background:#e74c3c;color:#fff;}
.tag-m2{background:#f39c12;color:#fff;}
.tag-m3{background:#27ae60;color:#fff;}
.tag-m4{background:#9b59b6;color:#fff;}
.tag-m5{background:#3498db;color:#fff;}
.tag-m6{background:#1a5f7a;color:#fff;}
.case{background:var(--surface);border-radius:4px;border:1px solid var(--gray-10);overflow:hidden;margin:20px 0;}
.case-header{background:var(--red);color:#fff;padding:20px 24px;display:flex;align-items:center;gap:14px;}
.case-icon{width:36px;height:36px;border-radius:50%;background:rgba(255,255,255,.2);display:flex;align-items:center;justify-content:center;}
.case-icon svg{width:18px;height:18px;fill:#fff;}
.case-title{font-size:14px;font-weight:700;}
.case-body{padding:24px;}
.case-problem{background:var(--red-wash);border-left:3px solid var(--red);padding:16px 20px;margin-bottom:20px;border-radius:0 4px 4px 0;}
.case-problem strong{color:var(--red);}
.case-solution{margin-bottom:20px;}
.case-solution h4{font-size:13px;font-weight:700;color:var(--ink);margin-bottom:10px;}
.case-solution ol{padding-left:20px;display:flex;flex-direction:column;gap:8px;}
.case-solution li{font-size:13px;color:var(--gray-70);}
.case-result{background:var(--warm);border-radius:4px;padding:16px 20px;display:flex;align-items:center;gap:12px;}
.case-result-icon{width:32px;height:32px;border-radius:50%;background:#27ae60;display:flex;align-items:center;justify-content:center;flex-shrink:0;}
.case-result-icon svg{width:16px;height:16px;fill:#fff;}
.case-result-text{font-size:13px;color:var(--gray-70);}
@media(max-width:860px){.container,.hero-inner,.toc-inner{padding-left:24px;padding-right:24px;}.hero-body{grid-template-columns:1fr;}.hero-metrics{flex-direction:row;border-left:none;padding-left:0;border-top:1px solid var(--gray-10);padding-top:32px;margin-top:32px;}.metric{padding:0 24px 0 0;border-bottom:none;text-align:left;}.toc-grid{grid-template-columns:1fr;}.compare-grid{grid-template-columns:1fr;}.section{padding:56px 0;}}
@media print{@page{size:A4;margin:15mm;}body{background:#fff;font-size:11pt;}.reveal{opacity:1!important;transform:none!important;}.section{padding:32px 0;}.toc{padding:24px 0;}.hero{border:none;}.module-card,.case,.exercise,.form-section,.habit-card{break-inside:avoid;}.foot{background:#333;-webkit-print-color-adjust:exact;print-color-adjust:exact;}.data-table th{background:#333!important;-webkit-print-color-adjust:exact;print-color-adjust:exact;}.case-header,.habit-header,.form-header,.module-card-header{background:#B81025!important;-webkit-print-color-adjust:exact;print-color-adjust:exact;}.answer-toggle summary{background:#f5f5f5!important;}}
</style>
</head>
<body>
'''

write_file(OUTPUT_PATH, css_and_header)
print("Header written successfully")
