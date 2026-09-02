base_dir = 'D:/新课开发/地产/08-AI智慧营销获客与转化新工具/混合学习课前包'

# 04_我的场景卡.html
content04 = '''<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>我的场景卡 · AI获客实战</title>
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
.card-form{display:grid;gap:14px;margin-bottom:16px}
.field-card{background:var(--paper-4);border:1px solid var(--ink);padding:14px 18px}
.field-tag{font-family:var(--mono);font-size:9px;letter-spacing:0.18em;color:var(--crimson);margin-bottom:6px;font-weight:600;display:flex;justify-content:space-between;align-items:center}
.field-tag span{color:var(--ink-soft);font-weight:400}
.field-label{font-family:var(--serif);font-weight:500;font-size:15px;color:var(--ink);margin-bottom:8px}
.field-input{width:100%;border:1px solid var(--rule);background:var(--paper);padding:8px 10px;font-family:var(--sans);font-size:12.5px;color:var(--ink);outline:none;resize:vertical;min-height:70px;line-height:1.5}
.field-input:focus{border-color:var(--crimson);background:var(--paper-4)}
.field-hint{font-size:11px;color:var(--ink-soft);margin-top:4px;font-style:italic}
.method-check{margin-top:8px}
.method-check label{font-size:12px;display:flex;align-items:center;gap:6px;padding:4px 0;cursor:pointer}
.method-check input{accent-color:var(--crimson)}
.method-tags{display:flex;flex-wrap:wrap;gap:6px;margin-top:8px}
.method-tag{font-family:var(--mono);font-size:9px;letter-spacing:0.1em;padding:3px 8px;border:1px solid var(--ink);cursor:pointer;transition:all .15s}
.method-tag:hover{background:var(--paper-2)}
.method-tag.selected{background:var(--ink);color:var(--paper)}
.action-section{background:var(--paper-3);border:1px solid var(--ink);padding:14px 18px;margin-bottom:16px}
.action-tag{font-family:var(--mono);font-size:9px;letter-spacing:0.2em;color:var(--crimson);margin-bottom:6px;font-weight:600}
.action-title{font-family:var(--serif);font-size:14px;font-weight:500;margin-bottom:6px;color:var(--ink)}
.action-list{list-style:none;padding:0}
.action-list li{font-size:12px;line-height:1.8;color:var(--ink-soft);padding-left:16px;position:relative}
.action-list li::before{content:"→";position:absolute;left:0;color:var(--crimson);font-family:var(--serif)}
.submit-wrap{margin:16px 0;text-align:center}
.btn-submit{background:var(--ink);color:var(--paper);border:none;padding:12px 36px;font-family:var(--mono);font-size:11px;letter-spacing:0.2em;text-transform:uppercase;cursor:pointer;font-weight:600;transition:all .15s}
.btn-submit:hover{background:var(--crimson)}
.btn-print{background:var(--paper-2);color:var(--ink);border:1px solid var(--ink);padding:11px 28px;font-family:var(--mono);font-size:10.5px;letter-spacing:0.2em;text-transform:uppercase;cursor:pointer;font-weight:600;margin-left:8px}
.signoff{margin-top:14px;padding-top:10px;border-top:1px solid var(--rule);display:flex;justify-content:space-between;align-items:center;font-family:var(--mono);font-size:9.5px;letter-spacing:0.12em;color:var(--ink-soft)}
.signoff .seal{display:inline-block;border:1px solid var(--crimson);color:var(--crimson);padding:3px 9px;font-family:var(--serif);font-style:italic;letter-spacing:0;font-size:11px}
.preview{display:none;margin-top:14px}
.preview.show{display:block}
.preview-card{background:var(--paper-2);border:2px solid var(--ink);padding:20px 24px;position:relative}
.preview-card::before{content:"PREVIEW";position:absolute;top:-10px;left:20px;background:var(--gold);color:var(--ink);font-family:var(--mono);font-size:9px;letter-spacing:0.2em;padding:2px 8px;font-weight:600}
.preview-title{font-family:var(--serif);font-size:20px;font-weight:600;color:var(--ink);margin-bottom:8px;border-bottom:1px solid var(--rule);padding-bottom:8px}
.preview-row{display:flex;gap:20px;margin-top:10px}
.preview-item{flex:1}
.preview-label{font-family:var(--mono);font-size:8.5px;letter-spacing:0.12em;color:var(--gold-deep);margin-bottom:3px;font-weight:600}
.preview-value{font-family:var(--serif);font-size:13px;color:var(--ink);line-height:1.4}
.preview-methods{display:flex;flex-wrap:wrap;gap:6px;margin-top:8px}
.preview-method{font-family:var(--mono);font-size:9px;padding:2px 8px;background:var(--ink);color:var(--paper)}
@page{size:A4 portrait;margin:10mm}
@media print{body{background:white}.sheet{width:100%;min-height:auto;margin:0;padding:18px 24px;box-shadow:none}.submit-wrap{display:none}.preview{display:block !important}.field-card,.action-section{page-break-inside:avoid}.masthead,.intro,.card-form,.action-section,.signoff{-webkit-print-color-adjust:exact;print-color-adjust:exact}}
</style>
</head>
<body>
<div class="sheet">
<header class="masthead">
  <div class="kicker"><span class="brand-pill">PRE-WORK · 04/06</span>MY SCENARIO CARD · 我的场景卡</div>
  <h1 class="title">锁定这节课<em>你要改造的获客场景</em></h1>
  <div class="subtitle">
    <span>带着真实课题进教室，让AI获客方法真正落地</span>
    <span class="subtitle-right"><b>填写时长 · 5 分钟</b>打印后贴桌前</span>
  </div>
</header>
<div class="intro"><div class="intro-tag">关于场景卡</div>
  <p>场景卡不是"考试题"——它是你这节课的<em>主角</em>。所有练习都会围绕这张卡展开。</p>
  <p>建议选<em>你最痛</em>的那一个获客场景，而不是"最典型"的那个——痛点才是学习的动力。</p>
</div>
<div class="card-form" id="cardForm">
  <div class="field-card">
    <div class="field-tag">字段 1 <span>必填</span></div>
    <div class="field-label">我要改造的获客场景是？</div>
    <textarea class="field-input" id="f1" name="scene" placeholder="例如：开盘前朋友圈预热 / 经纪人培训的话术准备 / 首次客户咨询的开场白 / 节假日客户关怀"></textarea>
    <div class="field-hint">越具体越好，最好能说清楚是什么类型的客户、什么场景</div>
  </div>
  <div class="field-card">
    <div class="field-tag">字段 2 <span>必填</span></div>
    <div class="field-label">这个场景现在最大的挑战是什么？</div>
    <textarea class="field-input" id="f2" name="challenge" placeholder="例如：不知道发什么内容客户才看 / 客户聊着聊着就不回了 / 每次都要花2小时写文案 / 不知道什么是好的客户画像"></textarea>
    <div class="field-hint">描述具体的卡点，而不是"效率低"这种模糊词</div>
  </div>
  <div class="field-card">
    <div class="field-tag">字段 3 <span>必填</span></div>
    <div class="field-label">目标学员是谁？（这个场景主要针对哪类客户）</div>
    <textarea class="field-input" id="f3" name="audience" placeholder="例如：刚需首次置业的年轻客户 / 改善型换房客户 / 高净值投资客户 / 中介经纪人"></textarea>
    <div class="field-hint">明确客户类型，AI才能生成更精准的内容</div>
  </div>
  <div class="field-card">
    <div class="field-tag">字段 4 <span>必填</span></div>
    <div class="field-label">你想从这门课带走的一个改变是什么？</div>
    <textarea class="field-input" id="f4" name="takeaway" placeholder="例如：能快速生成一条客户愿意回复的朋友圈文案 / 建立客户分类的判断标准 / 掌握AI提示词的写法"></textarea>
    <div class="field-hint">只写一个，不要贪多。这个改变了，其他的自然会跟上</div>
  </div>
  <div class="field-card">
    <div class="field-tag">字段 5 <span>选填</span></div>
    <div class="field-label">你打算怎么用AI来解决这个场景？</div>
    <textarea class="field-input" id="f5" name="aiplan" placeholder="例如：让AI先生成3个版本的朋友圈文案，我再改 / 用AI分析客户的公开信息生成画像 / 用AI生成催单话术"></textarea>
    <div class="field-hint">如果你已经有初步想法，写下来会帮助你在课中更有针对性</div>
  </div>
  <div class="field-card">
    <div class="field-tag">字段 6 <span>选填</span></div>
    <div class="field-label">这门课你最想解决的一个问题是什么？</div>
    <textarea class="field-input" id="f6" name="question" placeholder="例如：客户不回复怎么办 / AI生成的话术太生硬怎么办 / 怎么判断客户画像准不准"></textarea>
  </div>
</div>
<div class="submit-wrap">
  <button type="button" class="btn-submit" id="submitBtn" onclick="generatePreview()">生成预览 · 打印场景卡</button>
  <button type="button" class="btn-print" onclick="window.print()">直接打印</button>
</div>
<div class="preview" id="preview">
  <div class="preview-card">
    <div class="preview-title" id="pTitle">—</div>
    <div class="preview-row">
      <div class="preview-item"><div class="preview-label">目标场景</div><div class="preview-value" id="p1">—</div></div>
      <div class="preview-item"><div class="preview-label">最大挑战</div><div class="preview-value" id="p2">—</div></div>
    </div>
    <div class="preview-row">
      <div class="preview-item"><div class="preview-label">目标客户</div><div class="preview-value" id="p3">—</div></div>
      <div class="preview-item"><div class="preview-label">想带走改变</div><div class="preview-value" id="p4">—</div></div>
    </div>
    <div class="preview-row" style="flex-direction:column">
      <div class="preview-item"><div class="preview-label">AI使用设想</div><div class="preview-value" id="p5">—</div></div>
      <div class="preview-item" style="margin-top:8px"><div class="preview-label">想问的问题</div><div class="preview-value" id="p6">—</div></div>
    </div>
  </div>
</div>
<div class="signoff">
  <span>课程 · AI获客实战：地产营销一线人员的能力重塑</span>
  <span class="seal">Pre-Work · 文件 04 / 06</span>
  <span>打印后贴在桌前，课中持续迭代</span>
</div>
</div>
<script>
function generatePreview(){
  const f1=document.getElementById("f1").value.trim();
  const f2=document.getElementById("f2").value.trim();
  const f3=document.getElementById("f3").value.trim();
  const f4=document.getElementById("f4").value.trim();
  const f5=document.getElementById("f5").value.trim();
  const f6=document.getElementById("f6").value.trim();
  if(!f1||!f2||!f3||!f4){alert("请填写必填项（字段1-4）");return;}
  document.getElementById("pTitle").textContent="场景："+f1;
  document.getElementById("p1").textContent=f1;
  document.getElementById("p2").textContent=f2;
  document.getElementById("p3").textContent=f3;
  document.getElementById("p4").textContent=f4;
  document.getElementById("p5").textContent=f5||"（未填写）";
  document.getElementById("p6").textContent=f6||"（未填写）";
  document.getElementById("preview").classList.add("show");
  document.getElementById("submitBtn").style.display="none";
  window.scrollTo({top:0,behavior:"smooth"});
}
document.querySelectorAll(".method-tag").forEach(tag=>{
  tag.addEventListener("click",function(){this.classList.toggle("selected");});
});
</script>
</body>
</html>'''

with open(f'{base_dir}/04_我的场景卡.html', 'w', encoding='utf-8') as f:
    f.write(content04)
print('04_我的场景卡.html created')

# 05_行前清单.md
content05 = '''# 课前 1 天 · 行前清单

> 课前 24 小时扫一眼。
> 这份清单不是仪式感——是把你"次日的成功率"提到最高的最后一道工序。

---

## 一、物质准备

### 必带物品

- [ ] **打印好的场景卡**（`04_我的场景卡.html` 提交后打印）——贴在桌前
- [ ] **一份自评报告**（`03_自我诊断问卷.html` 提交后的报告页）——折叠放进口袋
- [ ] **一个你最想用AI改造的获客场景资料**（客户名单、之前发的朋友圈、话术文档）——课中将反复用到
- [ ] **一支笔 + 一本 A5 笔记本**——用于现场记下"明天要立刻试一下"的微行动
- [ ] **水杯**（课程期间持续讲话，必备）

### 教室设施确认

- [ ] **白板 + 4 色白板笔**（黑、红、蓝、绿）——可视化工具
- [ ] **投影仪 + 备用 HDMI / Type-C 线**——主讲师设备备份
- [ ] **计时器 / 沙漏**（手机倒计时也可）——节奏控制
- [ ] **便利贴 2-3 叠 + 马克笔**（每组 1 套）——小组演练和反馈用
- [ ] **小白板或 A3 卡纸**（每组 1 张）——小组讨论结果展示

### 现场布置

- [ ] **桌椅按"岛型"摆放**（4-6 人一组）——便于小组互动
- [ ] **每组有一面可写白板或挂墙卡纸**——避免"小组讨论只在小脑袋里发生"
- [ ] **讲师位置不固定**——前 30 分钟讲台、后 30 分钟走入小组，是双向互动的物理信号

---

## 二、心理准备

### 学员侧（自己对照）

- [ ] **明确 3 个个人目标**（`01_课前导读` 末尾的"我的学习目标"卡片已填）
- [ ] **准备 1 个最想改造的获客场景**（场景卡已锁定）
- [ ] **准备好被同伴看见**——这堂课会有演练、有反馈、有真实场景分析
- [ ] **接受"不完美"**——你不需要第一天就变成AI获客高手，带着"想试试看"的好奇心就够了

### 心态校准

| 担心 | 换个想法 |
|---|---|
| "我AI基础很差，怕跟不上" | AI工具是辅助你，不是替代你 |
| "我用不来高科技" | 这门课专治"用不来"，手把手教你从零开始 |
| "客户不接受AI内容怎么办" | 这正是课上学的方法要解决的 |
| "我怕被录像、被反馈" | 被看见才能被改进 |
| "两天学不会" | 两天学的是意识，方法是回去练出来的 |

---

## 三、数字化准备（如果使用在线工具）

### 课前同步

- [ ] **加企业微信/钉钉课程群**——群里会发每日复盘和补充材料
- [ ] **下载课件 PDF**——本地备份一份（不依赖网络）
- [ ] **收藏课程小程序/学习平台链接**——课后 30/90/180 天的复评要用

### 现场工具

- [ ] **手机充满电 + 充电宝**（演练环节会用到）
- [ ] **录音 App**（如"喜马拉雅"、"录音宝"）——记录讲师示范，便于课后复盘
- [ ] **截图工具就绪**——白板内容、关键方法卡随时拍
- [ ] **关闭所有通知**（课前 30 分钟）——避免被打断注意力

### 不需要带的

- ~~笔记本电脑~~（课程两天尽量不写笔记，专注参与互动）
- ~~厚厚的笔记本~~（A5 小本就够，重点记"明天要试一下"的微行动）
- ~~完美主义心态~~

---

## 四、课后行动预案（重要！）

> **这一栏比前三栏都重要**。
> 两天的课如果不落到行动里，30 天后会全部还给讲师。
> 课前就提前想好"课后第一个要改的获客场景"——这是把学习转化为能力的最后一道关。

### 课后 24 小时

- [ ] **回到 04 场景卡**看一眼：当时填的"想带走的 1 个改变"是什么
- [ ] **写下 1 个微行动**：下次发朋友圈时，**只**用 AI 辅助生成初稿（不要贪多）
- [ ] **记录这个微行动的预期结果**——给 30 天后的自己一个对比基准

### 课后 7 天

- [ ] **执行微行动**——下周发朋友圈时真的用 AI 生成
- [ ] **对比前后差异**——客户回复率、互动度、自己的体感
- [ ] **加 1 个微行动**（如果第一个稳定了）

### 课后 30 天

- [ ] **重做 `03_自我诊断问卷`**——对比训前基线
- [ ] **找一位同事分享你的 AI 获客经验**——教学相长
- [ ] **判断**：这个方法在我身上是真成立，还是只在课堂里成立？

### 课后 90 天

- [ ] **挑另一个获客场景，重复场景卡流程**——把方法迁移到新场景
- [ ] **如果方法没迁移成功**——回看 02 方法速览，找到对应章节重读

---

## 五、最后 1 小时

> 课前 1 小时，让自己慢下来。

- [ ] **关掉手机通知 1 小时**——给大脑一个切换的过渡
- [ ] **喝一杯水**——声音状态和身体状态都和水有关
- [ ] **默念 3 句话**：
  1. 我不是去学一套新理论，我是去练一个新习惯
  2. 我不是要立刻变厉害，我是要看到自己可以变
  3. 我不是孤身一人——我和同伴一起，被讲师陪着，被场景卡托着

---

> **讲师的最后一句话**
> 课前包的真正功能，不是让你"准备好所有知识"。
> 是让你带着"我已经想清楚了自己要什么"——进教室的那一刻起，你就不是听众，是合伙人。

*版本 v1.0 · 2026 · 适用对象：开课前一天*
'''

with open(f'{base_dir}/05_行前清单.md', 'w', encoding='utf-8') as f:
    f.write(content05)
print('05_行前清单.md created')
