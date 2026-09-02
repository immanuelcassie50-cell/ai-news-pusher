# -*- coding: utf-8 -*-
"""Build files 05-10: tools, scene library, demo family, pre-class pack."""
import os
import sys

# Reuse the same CSS/JS/make_html from build_all_remaining.py
exec(open(r"D:\CC\temp\build_all_remaining.py", encoding="utf-8").read().split('print("Building file 03...")')[0])

# ============================================================
# FILE 05: 工具手册_可视化版.html — 13 tools visualization
# ============================================================

FILE_05_CONTENT = """
<section class="hero" id="hero">
  <div class="hero-inner">
    <div class="eyebrow" style="margin-bottom:32px">TOOL MANUAL · 工具手册 v1.0 · 13 套原创工具</div>
    <h1 class="hero-title">13 套<em>原创工具</em></h1>
    <p class="hero-subtitle">从认知到行动的<em>完整工具集</em></p>
    <div class="hero-meta">
      <div class="hero-meta-item">
        <span class="eyebrow">工具数量</span>
        <div class="meta-value">13 套原创</div>
      </div>
      <div class="hero-meta-item">
        <span class="eyebrow">4 大层次</span>
        <div class="meta-value">基础·运行·发展·反思</div>
      </div>
      <div class="hero-meta-item">
        <span class="eyebrow">使用方式</span>
        <div class="meta-value">即学即用 · 填完即可</div>
      </div>
      <div class="hero-meta-item">
        <span class="eyebrow">更新频率</span>
        <div class="meta-value">每年大版本更新</div>
      </div>
    </div>
    <div class="hero-tagline">
      <strong>工具不是给你"知道"，是给你"做"。</strong><br>
      每套工具都讲透、配套填写说明、拿到就能用。
    </div>
  </div>
</section>

<section class="section section-light" id="framework">
  <div class="section-num">01</div>
  <div class="wrap">
    <div class="section-eyebrow eyebrow">CHAPTER 01 · 工具体系</div>
    <h2 class="section-title">13 套工具的<em>4 大层次</em></h2>
    <p class="section-lede">13 套工具不是平铺的——它们有清晰的层次结构。从"基础"到"反思"，形成一个完整的家庭 AI 教育操作系统。</p>
    <div class="grid-4">
      <div class="card" style="background:var(--paper-2)">
        <div class="card-num">第 1 层</div>
        <div class="card-title">基础层</div>
        <div class="card-body" style="margin-top:16px">
          <p style="margin-bottom:8px"><strong>1 家庭能力评估表</strong></p>
          <p style="margin-bottom:8px"><strong>2 家庭 Prompt 工作流（自学场景）</strong></p>
          <p><strong>13 家长 AI 使用自评表</strong></p>
          <p style="margin-top:12px;font-style:italic;color:var(--crimson);font-size:14px">用途：建立"基础认知"——知道你和孩子当前在哪。</p>
        </div>
        <div class="card-tag">基础层 · 3 套</div>
      </div>
      <div class="card" style="background:var(--paper-2)">
        <div class="card-num">第 2 层</div>
        <div class="card-title">运行层</div>
        <div class="card-body" style="margin-top:16px">
          <p style="margin-bottom:8px"><strong>3 家庭真实问题池</strong></p>
          <p style="margin-bottom:8px"><strong>4 AI 输出三审表</strong></p>
          <p style="margin-bottom:8px"><strong>5 AI 辅助写作流程</strong></p>
          <p style="margin-bottom:8px"><strong>6 家庭 Prompt 工作流（5 大场景）</strong></p>
          <p style="margin-bottom:8px"><strong>7 AI 家庭使用协议</strong></p>
          <p><strong>8 亲子共学记录表</strong></p>
          <p style="margin-top:12px;font-style:italic;color:var(--crimson);font-size:14px">用途：让"AI 协作"真正在家庭中跑起来。</p>
        </div>
        <div class="card-tag">运行层 · 6 套</div>
      </div>
      <div class="card" style="background:var(--paper-2)">
        <div class="card-num">第 3 层</div>
        <div class="card-title">发展层</div>
        <div class="card-body" style="margin-top:16px">
          <p style="margin-bottom:8px"><strong>9 AI 兴趣探索地图</strong></p>
          <p style="margin-bottom:8px"><strong>10 3 年家庭 AI 教育路线图</strong></p>
          <p><strong>11 AI 时代成长评估表</strong></p>
          <p style="margin-top:12px;font-style:italic;color:var(--crimson);font-size:14px">用途：让孩子的 AI 能力持续增值。</p>
        </div>
        <div class="card-tag">发展层 · 3 套</div>
      </div>
      <div class="card" style="background:var(--paper-2)">
        <div class="card-num">第 4 层</div>
        <div class="card-title">反思层</div>
        <div class="card-body" style="margin-top:16px">
          <p style="margin-bottom:8px"><strong>12 AI 家庭教育误区自查表</strong></p>
          <p><strong>13 30 天家庭 AI 行动清单</strong></p>
          <p style="margin-top:12px;font-style:italic;color:var(--crimson);font-size:14px">用途：让家庭 AI 教育始终在"对的方向"上。</p>
        </div>
        <div class="card-tag">反思层 · 2 套</div>
      </div>
    </div>
  </div>
</section>

<section class="section section-cream" id="tool01">
  <div class="section-num">02</div>
  <div class="wrap">
    <div class="section-eyebrow eyebrow">CHAPTER 02 · 基础层</div>
    <h2 class="section-title">基础层<em>3 套工具</em>：知道自己在哪</h2>
    <p class="section-lede">基础层 3 套工具，帮你建立"基础认知"——识别增值/贬值能力、建立自学 Prompt 模板、家长自评基线。</p>

    <div class="card" style="margin-bottom:32px;border-left:4px solid var(--crimson)">
      <div class="card-num">TOOL 01 · 基础层</div>
      <div class="card-title">家庭能力评估表</div>
      <div class="card-body" style="margin-top:16px">
        <p style="margin-bottom:16px"><strong>工具定位</strong>：识别孩子在 AI 时代的"增值能力" + "贬值能力"，明确家庭培养方向。</p>
        <p style="margin-bottom:8px"><strong>填写说明</strong>：</p>
        <ol style="padding-left:24px;color:var(--ink-soft)">
          <li style="margin-bottom:8px">为孩子 10 项能力分别打分（1-5 分）</li>
          <li style="margin-bottom:8px">1 分 = 完全不会，5 分 = 熟练应用</li>
          <li style="margin-bottom:8px">参考"AI 时代能力增值/贬值对照"——有些能力 5 分也可能没用</li>
          <li style="margin-bottom:8px">每年填写 1 次，对比变化</li>
          <li>分低不等于"差"——分低意味着"重点培养"</li>
        </ol>
        <p style="margin-top:16px"><strong>10 项能力清单</strong>：</p>
        <div class="grid-2" style="margin-top:16px">
          <div>
            <p style="font-weight:600;color:var(--crimson);margin-bottom:8px">问题解决类</p>
            <p style="color:var(--ink-soft);margin-bottom:4px">① 问题定义力（能否清晰定义问题）</p>
            <p style="color:var(--ink-soft);margin-bottom:4px">② 跨域整合力（能否跨学科整合）</p>
            <p style="color:var(--ink-soft);margin-bottom:4px">③ 元认知力（能否反思自己思考）</p>
            <p style="color:var(--ink-soft);margin-bottom:4px">④ 决策判断力（能否做出好决策）</p>
            <p style="color:var(--ink-soft)">⑤ 复杂协作力（能否与他人协作）</p>
          </div>
          <div>
            <p style="font-weight:600;color:var(--crimson);margin-bottom:8px">情感连接类</p>
            <p style="color:var(--ink-soft);margin-bottom:4px">⑥ 情感连接力（能否与他人共情）</p>
            <p style="color:var(--ink-soft);margin-bottom:4px">⑦ 自我认知力（是否了解自己）</p>
            <p style="color:var(--ink-soft);margin-bottom:4px">⑧ 价值判断力（是否有自己的价值标准）</p>
            <p style="color:var(--ink-soft);margin-bottom:4px">⑨ 创造力（能否产生新想法）</p>
            <p style="color:var(--ink-soft)">⑩ 表达力（能否清晰表达）</p>
          </div>
        </div>
      </div>
      <div class="card-tag">基础层</div>
    </div>

    <div class="card" style="margin-bottom:32px;border-left:4px solid var(--crimson)">
      <div class="card-num">TOOL 02 · 基础层</div>
      <div class="card-title">家庭 Prompt 工作流（自学场景）</div>
      <div class="card-body" style="margin-top:16px">
        <p style="margin-bottom:16px"><strong>工具定位</strong>：5 个自学场景的 Prompt 模板，让孩子用 AI 自学有抓手。</p>
        <p style="margin-bottom:8px"><strong>5 个自学 Prompt 模板</strong>：</p>
        <div class="grid-2" style="margin-top:16px">
          <div>
            <p style="font-weight:600">场景 1：解释概念</p>
            <p style="font-family:var(--mono);font-size:12px;background:var(--paper-2);padding:12px;margin:8px 0">请用 [年级] 能理解的方式，解释 [概念]，并给 3 个生活中的例子。</p>
            <p style="font-weight:600">场景 2：练习题</p>
            <p style="font-family:var(--mono);font-size:12px;background:var(--paper-2);padding:12px;margin:8px 0">请出 5 道 [难度] 的 [科目] 题目，附上答案和详细解析。</p>
            <p style="font-weight:600">场景 3：扩展阅读</p>
            <p style="font-family:var(--mono);font-size:12px;background:var(--paper-2);padding:12px;margin:8px 0">关于 [主题]，有哪些我应该读的 5 本书？为什么？</p>
          </div>
          <div>
            <p style="font-weight:600">场景 4：项目研究</p>
            <p style="font-family:var(--mono);font-size:12px;background:var(--paper-2);padding:12px;margin:8px 0">我想研究 [主题]，请给我一个 [时间长度] 的研究计划，包括每周任务。</p>
            <p style="font-weight:600">场景 5：错误诊断</p>
            <p style="font-family:var(--mono);font-size:12px;background:var(--paper-2);padding:12px;margin:8px 0">我做了这道题，答案是 [X]，但正确答案是 [Y]，请帮我分析错因。</p>
          </div>
        </div>
      </div>
      <div class="card-tag">基础层</div>
    </div>

    <div class="card" style="border-left:4px solid var(--crimson)">
      <div class="card-num">TOOL 13 · 基础层</div>
      <div class="card-title">家长 AI 使用自评表</div>
      <div class="card-body" style="margin-top:16px">
        <p style="margin-bottom:16px"><strong>工具定位</strong>：评估家长自己的 AI 使用能力——你是孩子的"榜样"，你的水平决定孩子的天花板。</p>
        <p style="margin-bottom:8px"><strong>5 大维度</strong>：</p>
        <ol style="padding-left:24px;color:var(--ink-soft)">
          <li style="margin-bottom:8px"><strong>工具使用</strong>：能否熟练使用 1-2 个 AI 工具？</li>
          <li style="margin-bottom:8px"><strong>Prompt 设计</strong>：能否清晰表达自己的需求给 AI？</li>
          <li style="margin-bottom:8px"><strong>输出评估</strong>：能否判断 AI 输出是否正确？</li>
          <li style="margin-bottom:8px"><strong>场景设计</strong>：能否为家庭设计 AI 使用场景？</li>
          <li>边界管理</li>：能否为家庭制定 AI 使用边界？
        </ol>
        <p style="margin-top:16px"><strong>使用建议</strong>：每季度自评 1 次，看见自己的成长曲线。</p>
      </div>
      <div class="card-tag">基础层</div>
    </div>
  </div>
</section>

<section class="section section-light" id="tool-run">
  <div class="section-num">03</div>
  <div class="wrap">
    <div class="section-eyebrow eyebrow">CHAPTER 03 · 运行层</div>
    <h2 class="section-title">运行层<em>6 套工具</em>：让 AI 协作真正跑起来</h2>
    <p class="section-lede">运行层 6 套工具，是家庭 AI 协作的"操作核心"——让 AI 真正用起来、用得稳、用得好。</p>

    <div class="grid-2">
      <div class="card"><div class="card-num">TOOL 03</div><div class="card-title">家庭真实问题池</div><div class="card-body">10 个预设真实问题 + 创建规则。每月 1 个问题，孩子用 AI 解决。</div><div class="card-tag">运行层</div></div>
      <div class="card"><div class="card-num">TOOL 04</div><div class="card-title">AI 输出三审表</div><div class="card-body">审事实/审逻辑/审价值观——3 维度 10 检查点。训练孩子判断力。</div><div class="card-tag">运行层</div></div>
      <div class="card"><div class="card-num">TOOL 05</div><div class="card-title">AI 辅助写作流程</div><div class="card-body">5 步法：创意→结构→填充→润色→审核。让 AI 赋能而非替代。</div><div class="card-tag">运行层</div></div>
      <div class="card"><div class="card-num">TOOL 06</div><div class="card-title">家庭 Prompt 工作流（5 大场景）</div><div class="card-body">作业/兴趣/问题/创意/决策——5 大场景模板全覆盖。</div><div class="card-tag">运行层</div></div>
      <div class="card"><div class="card-num">TOOL 07</div><div class="card-title">AI 家庭使用协议</div><div class="card-body">4 大边界（场景/时间/内容/隐私）+ 4 级违约处理。</div><div class="card-tag">运行层</div></div>
      <div class="card"><div class="card-num">TOOL 08</div><div class="card-title">亲子共学记录表</div><div class="card-body">3 法则（共同提问/评估/创作）+ 记录表设计。</div><div class="card-tag">运行层</div></div>
    </div>
  </div>
</section>

<section class="section section-cream" id="tool-dev">
  <div class="section-num">04</div>
  <div class="wrap">
    <div class="section-eyebrow eyebrow">CHAPTER 04 · 发展层</div>
    <h2 class="section-title">发展层<em>3 套工具</em>：让孩子的能力持续增值</h2>
    <p class="section-lede">发展层 3 套工具，让孩子的 AI 能力持续增值——从"会用"到"用得好"到"用得巧"。</p>
    <div class="grid-3">
      <div class="card"><div class="card-num">TOOL 09</div><div class="card-title">AI 兴趣探索地图</div><div class="card-body">5 领域（科学/艺术/技术/体育/社会）× 3 模式（探索/入门/精进）= 15 种典型场景。</div><div class="card-tag">发展层</div></div>
      <div class="card"><div class="card-num">TOOL 10</div><div class="card-title">3 年家庭 AI 教育路线图</div><div class="card-body">入门年 → 熟练年 → 创新年——3 阶段设计。明确每年关键目标。</div><div class="card-tag">发展层</div></div>
      <div class="card"><div class="card-num">TOOL 11</div><div class="card-title">AI 时代成长评估表</div><div class="card-body">3 维度（问题解决/创意产出/情感连接）+ 10 指标 + 评分规则。</div><div class="card-tag">发展层</div></div>
    </div>
  </div>
</section>

<section class="section section-light" id="tool-reflect">
  <div class="section-num">05</div>
  <div class="wrap">
    <div class="section-eyebrow eyebrow">CHAPTER 05 · 反思层</div>
    <h2 class="section-title">反思层<em>2 套工具</em>：始终在对的路上</h2>
    <p class="section-lede">反思层 2 套工具——避开误区、把每天的行动都串起来。让家庭 AI 教育始终在"对的方向"上。</p>
    <div class="grid-2">
      <div class="card" style="border-left:4px solid var(--crimson)">
        <div class="card-num">TOOL 12 · 反思层</div>
        <div class="card-title">AI 家庭教育误区自查表</div>
        <div class="card-body" style="margin-top:16px">
          <p style="margin-bottom:16px"><strong>5 大误区</strong> + 30 个自查问题：</p>
          <p style="margin-bottom:8px"><strong>误区 1：AI 万能论</strong>（5 个自查题）</p>
          <p style="margin-bottom:8px"><strong>误区 2：AI 禁止论</strong>（5 个自查题）</p>
          <p style="margin-bottom:8px"><strong>误区 3：监控取代引导</strong>（5 个自查题）</p>
          <p style="margin-bottom:8px"><strong>误区 4：技能取代思维</strong>（5 个自查题）</p>
          <p style="margin-bottom:8px"><strong>误区 5：短期取代长期</strong>（5 个自查题）</p>
          <p style="margin-top:16px"><strong>使用建议</strong>：每季度 1 次自查，看见"我是不是在某个误区里"。</p>
        </div>
        <div class="card-tag">反思层</div>
      </div>

      <div class="card" style="border-left:4px solid var(--crimson)">
        <div class="card-num">TOOL 13 · 反思层</div>
        <div class="card-title">30 天家庭 AI 行动清单</div>
        <div class="card-body" style="margin-top:16px">
          <p style="margin-bottom:16px"><strong>3 阶段 30 天</strong>：</p>
          <p style="margin-bottom:8px"><strong>第 1-10 天</strong>：建立基础——选定场景、起草协议、第一次共学、第一个真实问题</p>
          <p style="margin-bottom:8px"><strong>第 11-20 天</strong>：建立技能——优化协议、第二个真实问题、使用三审表、第二次共学</p>
          <p style="margin-bottom:8px"><strong>第 21-30 天</strong>：建立系统——第三个真实问题、兴趣探索、成长评估、3 年路线图</p>
          <p style="margin-top:16px"><strong>使用建议</strong>：每天 1 个小任务（5-30 分钟），做满 30 天。</p>
        </div>
        <div class="card-tag">反思层</div>
      </div>
    </div>
  </div>
</section>

<section class="section section-cream" id="how">
  <div class="section-num">06</div>
  <div class="wrap">
    <div class="section-eyebrow eyebrow">CHAPTER 06 · 工具使用指南</div>
    <h2 class="section-title">工具使用的<em>3 个原则</em></h2>
    <p class="section-lede">13 套工具不是平铺的——它们是分层次的。工具组合使用才有效。下面 3 个原则，决定你用工具的效果。</p>
    <div class="grid-3">
      <div class="card">
        <div class="card-num">原则 01</div>
        <div class="card-title">先基础后运行</div>
        <div class="card-body" style="margin-top:16px">
          <p>先做基础层 3 套（评估、自学 Prompt、自评），再做运行层 6 套。</p>
          <p style="margin-top:12px">如果你不知道孩子当前在哪，就直接用 AI 家庭使用协议——你制定的边界大概率是错的。</p>
        </div>
        <div class="card-tag">使用原则 01</div>
      </div>
      <div class="card">
        <div class="card-num">原则 02</div>
        <div class="card-title">少即是多</div>
        <div class="card-body" style="margin-top:16px">
          <p>不要一上来就用 13 套工具——先用 1 个工具跑通 1 个场景。</p>
          <p style="margin-top:12px">建议路径：选定 1 个场景 → 跑通 30 天清单 → 再加下 1 套工具。</p>
        </div>
        <div class="card-tag">使用原则 02</div>
      </div>
      <div class="card">
        <div class="card-num">原则 03</div>
        <div class="card-title">长期复盘</div>
        <div class="card-body" style="margin-top:16px">
          <p>工具不是"用了就完了"——每季度做 1 次复盘，看工具组合是否需要调整。</p>
          <p style="margin-top:12px">复盘不是"我做得对不对"——是"这个工具组合还适合我家吗"。</p>
        </div>
        <div class="card-tag">使用原则 03</div>
      </div>
    </div>
  </div>
</section>

<section class="section section-light" id="checklist">
  <div class="section-num">07</div>
  <div class="wrap">
    <div class="section-eyebrow eyebrow">CHAPTER 07 · 工具总览</div>
    <h2 class="section-title">13 套工具<em>完整对照表</em></h2>
    <p class="section-lede">一张表看清 13 套工具的关系、用途、使用频率——打印出来贴在墙上，作为家庭 AI 教育的"导航图"。</p>
    <table style="width:100%;border-collapse:collapse;background:#fff;font-family:var(--sans);font-size:14px">
      <thead>
        <tr style="background:var(--ink);color:var(--paper)">
          <th style="padding:12px;text-align:left;font-family:var(--mono);font-size:11px;letter-spacing:0.18em;text-transform:uppercase">编号</th>
          <th style="padding:12px;text-align:left;font-family:var(--mono);font-size:11px;letter-spacing:0.18em;text-transform:uppercase">工具名称</th>
          <th style="padding:12px;text-align:left;font-family:var(--mono);font-size:11px;letter-spacing:0.18em;text-transform:uppercase">所属层次</th>
          <th style="padding:12px;text-align:left;font-family:var(--mono);font-size:11px;letter-spacing:0.18em;text-transform:uppercase">使用频率</th>
          <th style="padding:12px;text-align:left;font-family:var(--mono);font-size:11px;letter-spacing:0.18em;text-transform:uppercase">难易度</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom:1px solid var(--rule)"><td style="padding:12px;font-family:var(--serif);font-style:italic;color:var(--gold)">1</td><td style="padding:12px;font-weight:600">家庭能力评估表</td><td style="padding:12px">基础层</td><td style="padding:12px">每年 1 次</td><td style="padding:12px">低</td></tr>
        <tr style="border-bottom:1px solid var(--rule);background:var(--paper-2)"><td style="padding:12px;font-family:var(--serif);font-style:italic;color:var(--gold)">2</td><td style="padding:12px;font-weight:600">家庭 Prompt 工作流（自学场景）</td><td style="padding:12px">基础层</td><td style="padding:12px">每周多次</td><td style="padding:12px">低</td></tr>
        <tr style="border-bottom:1px solid var(--rule)"><td style="padding:12px;font-family:var(--serif);font-style:italic;color:var(--gold)">3</td><td style="padding:12px;font-weight:600">家庭真实问题池</td><td style="padding:12px">运行层</td><td style="padding:12px">每月 1 个</td><td style="padding:12px">中</td></tr>
        <tr style="border-bottom:1px solid var(--rule);background:var(--paper-2)"><td style="padding:12px;font-family:var(--serif);font-style:italic;color:var(--gold)">4</td><td style="padding:12px;font-weight:600">AI 输出三审表</td><td style="padding:12px">运行层</td><td style="padding:12px">每次用 AI 后</td><td style="padding:12px">中</td></tr>
        <tr style="border-bottom:1px solid var(--rule)"><td style="padding:12px;font-family:var(--serif);font-style:italic;color:var(--gold)">5</td><td style="padding:12px;font-weight:600">AI 辅助写作流程</td><td style="padding:12px">运行层</td><td style="padding:12px">每月多次</td><td style="padding:12px">中</td></tr>
        <tr style="border-bottom:1px solid var(--rule);background:var(--paper-2)"><td style="padding:12px;font-family:var(--serif);font-style:italic;color:var(--gold)">6</td><td style="padding:12px;font-weight:600">家庭 Prompt 工作流（5 大场景）</td><td style="padding:12px">运行层</td><td style="padding:12px">每周多次</td><td style="padding:12px">中</td></tr>
        <tr style="border-bottom:1px solid var(--rule)"><td style="padding:12px;font-family:var(--serif);font-style:italic;color:var(--gold)">7</td><td style="padding:12px;font-weight:600">AI 家庭使用协议</td><td style="padding:12px">运行层</td><td style="padding:12px">每月回顾</td><td style="padding:12px">中</td></tr>
        <tr style="border-bottom:1px solid var(--rule);background:var(--paper-2)"><td style="padding:12px;font-family:var(--serif);font-style:italic;color:var(--gold)">8</td><td style="padding:12px;font-weight:600">亲子共学记录表</td><td style="padding:12px">运行层</td><td style="padding:12px">每周 1 次</td><td style="padding:12px">低</td></tr>
        <tr style="border-bottom:1px solid var(--rule)"><td style="padding:12px;font-family:var(--serif);font-style:italic;color:var(--crimson)">9</td><td style="padding:12px;font-weight:600">AI 兴趣探索地图</td><td style="padding:12px">发展层</td><td style="padding:12px">每季度 1 次</td><td style="padding:12px">中</td></tr>
        <tr style="border-bottom:1px solid var(--rule);background:var(--paper-2)"><td style="padding:12px;font-family:var(--serif);font-style:italic;color:var(--crimson)">10</td><td style="padding:12px;font-weight:600">3 年家庭 AI 教育路线图</td><td style="padding:12px">发展层</td><td style="padding:12px">每年更新</td><td style="padding:12px">中</td></tr>
        <tr style="border-bottom:1px solid var(--rule)"><td style="padding:12px;font-family:var(--serif);font-style:italic;color:var(--crimson)">11</td><td style="padding:12px;font-weight:600">AI 时代成长评估表</td><td style="padding:12px">发展层</td><td style="padding:12px">月/季/年</td><td style="padding:12px">中</td></tr>
        <tr style="border-bottom:1px solid var(--rule);background:var(--paper-2)"><td style="padding:12px;font-family:var(--serif);font-style:italic;color:var(--crimson)">12</td><td style="padding:12px;font-weight:600">AI 家庭教育误区自查表</td><td style="padding:12px">反思层</td><td style="padding:12px">每季度 1 次</td><td style="padding:12px">低</td></tr>
        <tr><td style="padding:12px;font-family:var(--serif);font-style:italic;color:var(--crimson)">13</td><td style="padding:12px;font-weight:600">30 天家庭 AI 行动清单</td><td style="padding:12px">反思层</td><td style="padding:12px">30 天循环</td><td style="padding:12px">低</td></tr>
      </tbody>
    </table>
  </div>
</section>

<section class="section section-ink" id="promise">
  <div class="wrap" style="text-align:center;padding:0 32px">
    <div class="section-eyebrow eyebrow" style="color:var(--gold)">CHAPTER 08 · 使用承诺</div>
    <h2 class="section-title" style="margin:0 auto 32px;color:var(--paper)">13 套工具的<em>3 个承诺</em></h2>
    <p style="font-size:20px;color:rgba(245,240,230,0.85);max-width:780px;margin:0 auto 64px">工具的价值不在"知道"，在"用"。下面是工具的 3 个承诺：</p>
    <div class="grid-3" style="text-align:left">
      <div class="card" style="background:rgba(245,240,230,0.05);border:1px solid rgba(201,169,110,0.3);color:var(--paper)">
        <div class="card-num" style="color:var(--gold)">承诺 01</div>
        <div class="card-title" style="color:var(--paper)">填完就能用</div>
        <div class="card-body" style="color:rgba(245,240,230,0.85)">每套工具都有"填写说明"——按说明填完就能用，不会有"还要再学一遍"的负担。</div>
      </div>
      <div class="card" style="background:rgba(245,240,230,0.05);border:1px solid rgba(201,169,110,0.3);color:var(--paper)">
        <div class="card-num" style="color:var(--gold)">承诺 02</div>
        <div class="card-title" style="color:var(--paper)">每年更新</div>
        <div class="card-body" style="color:rgba(245,240,230,0.85)">每年 1 次大版本更新。AI 怎么变，方法都在。学员可申请重听/重读。</div>
      </div>
      <div class="card" style="background:rgba(245,240,230,0.05);border:1px solid rgba(201,169,110,0.3);color:var(--paper)">
        <div class="card-num" style="color:var(--gold)">承诺 03</div>
        <div class="card-title" style="color:var(--paper)">持续陪伴</div>
        <div class="card-body" style="color:rgba(245,240,230,0.85)">学员社群 + 30/90/180 天回访——不只是发资料，是真实陪跑 1 年。</div>
      </div>
    </div>
  </div>
</section>
"""

print("Building file 05...")
path, lines = make_html(
    title="AI 时代的家庭教育 · 工具手册 · 罗老师",
    nav_links=[
        ("工具体系", "framework"),
        ("基础层 3 套", "tool01"),
        ("运行层 6 套", "tool-run"),
        ("发展层 3 套", "tool-dev"),
        ("反思层 2 套", "tool-reflect"),
        ("使用指南", "how"),
        ("总览表", "checklist"),
        ("承诺", "promise"),
    ],
    content=FILE_05_CONTENT,
    filename="05_工具手册_可视化版.html",
    hero_meta=None,
    copyright_title="罗老师《AI 时代的家庭教育：从焦虑到超越竞争的家庭行动系统》"
)
print(f"  -> file 05 done ({lines} lines)")
