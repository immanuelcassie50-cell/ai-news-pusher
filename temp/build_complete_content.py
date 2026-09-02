#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Build content.json for 完整工具包_打印合订版.pdf (F1-F10)"""
import json
import os

OUT = r"D:/CC/temp/pdf_workspace/complete/content.json"

def h1(text): return {"type": "h1", "text": text}
def h2(text): return {"type": "h2", "text": text}
def h3(text): return {"type": "h3", "text": text}
def body(text): return {"type": "body", "text": text}
def bullet(text): return {"type": "bullet", "text": text}
def numbered(text): return {"type": "numbered", "text": text}
def callout(text): return {"type": "callout", "text": text}
def divider(): return {"type": "divider"}
def pagebreak(): return {"type": "pagebreak"}

# 使用 ASCII 引号包裹所有中文内容，避免任何编码问题
# 引号统一用 U+201C / U+201D 风险大，改用 <q> 标记
def q(text):
    """给引用文字加斜体"""
    return f"<i>{text}</i>"

# ==================== 标题块 ====================
blocks = []
blocks.append({"type": "cover",
    "title": "完整工具包 · 打印合订版",
    "subtitle": "F1—F10 全流程工具表单",
    "author": "绩效管理和绩效面谈课程组",
    "date": "2026 年 6 月"})

blocks.append(pagebreak())
blocks.append(h1("目录"))
toc_rows = [
    ["封面", "1"],
    ["使用说明：这套工具怎么用", "2"],
    ["F1 · 问题类型判断卡", "3"],
    ["F2 · 面谈准备一页纸", "5"],
    ["F3 · 四步面谈法速查卡", "8"],
    ["F4 · 探寻归因参考问题清单", "11"],
    ["F5 · 正面·全面·情面·事面话术对比", "14"],
    ["F6 · AI 时代五类场景处理速查卡", "17"],
    ["F7 · 发展对话三个启动问题", "20"],
    ["F8 · 双轨胜任度评估表", "22"],
    ["F9 · 缺口判断决策树", "25"],
    ["F10 · 下次面谈准备清单", "28"],
    ["封底", "31"],
]
blocks.append({"type": "table", "headers": ["章节", "页码"], "rows": toc_rows, "col_widths": [0.78, 0.22]})

# ==================== 使用说明 ====================
blocks.append(pagebreak())
blocks.append(h1("使用说明：这套工具怎么用"))
blocks.append(callout("工具是「查」的，不是「读」的——索引让你 30 秒内找到当下需要的那一张。"))
blocks.append(h2("三个核心工具（必带）"))
blocks.append(bullet("F1：30 秒判断「这是哪种面谈」"))
blocks.append(bullet("F3：全程主轴——四步不走丢"))
blocks.append(bullet("F10：把所有工具整合成「我的这次面谈」"))

blocks.append(h2("按使用流程排序"))
blocks.append(h3("一、面谈前 1 周"))
blocks.append(body("F2（30 秒自检）→ F1（识别问题类型）→ F8（双轨评估）→ F9（缺口判断）→ F10 启动（第一区事实与归因）"))
blocks.append(h3("二、面谈进行中"))
blocks.append(body("F3（走四步）→ F4（探寻归因）→ F5（说真话）→ F6（命中 AI 时代场景）→ F5（应用四原则）→ F7（开启发展对话）→ F9（识别发展路径）→ F3 第四步过渡句收尾"))
blocks.append(h3("三、面谈后 30 天"))
blocks.append(body("F10 第四区（回看预演 vs 实际）→ 30 天承诺完成度 → 问责伙伴沟通 → 下次面谈清单复用"))

blocks.append(h2("工具之间的依赖关系图"))
blocks.append({"type": "flowchart",
    "nodes": [
        {"id": "f1", "label": "F1 识别", "shape": "oval"},
        {"id": "f2", "label": "F2 准备", "shape": "rect"},
        {"id": "f3", "label": "F3 四步主轴", "shape": "rect"},
        {"id": "f6", "label": "F6 场景识别", "shape": "rect"},
        {"id": "f4", "label": "F4 归因", "shape": "rect"},
        {"id": "f5", "label": "F5 四原则", "shape": "rect"},
        {"id": "f7", "label": "F7 启动问题", "shape": "rect"},
        {"id": "f8", "label": "F8 双轨评估", "shape": "rect"},
        {"id": "f9", "label": "F9 缺口判断", "shape": "rect"},
        {"id": "f10", "label": "F10 下次面谈清单", "shape": "oval"},
    ],
    "edges": [
        {"from": "f1", "to": "f2"},
        {"from": "f1", "to": "f3"},
        {"from": "f1", "to": "f6"},
        {"from": "f2", "to": "f3"},
        {"from": "f3", "to": "f4"},
        {"from": "f4", "to": "f5"},
        {"from": "f6", "to": "f5"},
        {"from": "f5", "to": "f7"},
        {"from": "f7", "to": "f8"},
        {"from": "f8", "to": "f9"},
        {"from": "f9", "to": "f10"},
    ],
    "caption": "F1—F10 工具依赖关系图"})

# ==================== F1 ====================
blocks.append(pagebreak())
blocks.append(h1("F1 · 问题类型判断卡"))
blocks.append(callout("识别问题，是解决问题的一半；面谈的价值，从看清这次的对话困在哪里开始。"))
blocks.append(h2("使用步骤"))
for t in [
    "看卡号（1—8），快速定位「这次对话属于哪种失效」",
    "读「典型表现」判断是否命中",
    "看「关键信号」二次确认",
    "走「优先方向」决定下一步怎么动",
]:
    blocks.append(numbered(t))
blocks.append(body("<b>配套使用：</b>命中 1—3 号卡 → 走 F3 四步面谈法；命中 4—5 号卡 → 走 F5 四原则话术；命中 6—8 号卡 → 走 F6 五类场景。"))

blocks.append(divider())
blocks.append(h2("正面：五个经典失效场景"))

# 1
blocks.append(h3("【1】缺乏准备型"))
blocks.append(body(q("经理：「这个季度你总体还行，继续努力。」")))
blocks.append(body(q("员工内心：到底哪里行？哪里需要努力？")))
blocks.append(body("<b>关键信号：</b>"))
for t in ["你说不清员工具体的 3 个事实", "你说不出这次面谈想让员工带走什么", "会议一结束你就忘了讲过什么"]:
    blocks.append(bullet(t))
blocks.append(callout("优先方向：立刻停止这次面谈，回去做 F2 准备。没有准备的面谈比没有面谈更糟。"))

# 2
blocks.append(h3("【2】单向宣告型"))
blocks.append(body(q("经理：「你这个季度的问题是 A、B、C，接下来要改进 X、Y、Z。」")))
blocks.append(body(q("员工全程沉默，会后继续按原方式做。")))
blocks.append(body("<b>关键信号：</b>"))
for t in ["你说话时间超过员工的 3 倍", "员工没开口你就已经给出结论", "你的开场不是问题而是判断"]:
    blocks.append(bullet(t))
blocks.append(callout("优先方向：回到 F3 第一步——邀请员工先回顾。共看事实，不是宣告事实。"))

# 3
blocks.append(h3("【3】避重就轻型"))
blocks.append(body("经理绕开真正的核心问题，全程聊做得好的部分；员工知道「这次还是没说真话」，信任崩塌。"))
blocks.append(body("<b>关键信号：</b>"))
for t in ["你一直在说「你哪里做得好」", "你心里有一件「必须说的事」但一直在绕", "员工可能比你更先提到那个真正的问题"]:
    blocks.append(bullet(t))
blocks.append(callout("优先方向：写出「你一直在回避的那件事」是什么，把它放进开场。参 F5 的「正面」原则。"))

# 4
blocks.append(h3("【4】印象主导型"))
blocks.append(body(q("「你最近状态不太稳定啊。」——但说不出哪件事让你有这种感觉。")))
blocks.append(body(q("员工反驳：「我哪次状态不稳定？」——你答不上来。")))
blocks.append(body("<b>关键信号：</b>"))
for t in ["你的判断都是「你总是」「你最近」「你这个人不……」", "你举不出具体的事件、时间和情境", "员工反问「哪一次」时你卡住"]:
    blocks.append(bullet(t))
blocks.append(callout("优先方向：回到事实——写下 3 个具体的事件。参 F5 的「事面」原则。"))

# 5
blocks.append(h3("【5】缺乏跟进型"))
blocks.append(body("面谈里说得好，员工也答应改；一个月后员工照旧，管理者也照旧；面谈成了走过场。"))
blocks.append(body("<b>关键信号：</b>"))
for t in ["面谈结束没有书面记录", "没有 30 天内的跟进动作", "员工没有「这次面谈我必须做 X」的明确承诺"]:
    blocks.append(bullet(t))
blocks.append(callout("优先方向：当场形成可观察的承诺，并把跟进时间写进日历。参 F10 第四区。"))

blocks.append(divider())
blocks.append(h2("背面：三个 AI 时代新失效场景"))

# 6
blocks.append(h3("【6】归因混淆型（AI 时代新增）"))
blocks.append(body(q("员工：「这个成果主要是 AI 帮我做的。」")))
blocks.append(body(q("经理：（愣）「那……这个成绩算你的还是算 AI 的？」")))
blocks.append(body(q("经理陷入「该不该给高分」的纠结。")))
blocks.append(body("<b>关键信号：</b>"))
for t in ["员工主动提到 AI 在产出中的参与", "你不知道该按「产出」评还是按「判断」评", "你对员工的「真实贡献」说不清楚"]:
    blocks.append(bullet(t))
blocks.append(callout("优先方向：走 F3 第二步「探寻归因」——用 F4 的归因问题共同识别员工的人类贡献，再做评估。"))

# 7
blocks.append(h3("【7】方向迷失型（AI 时代新增）"))
blocks.append(body(q("员工：「我现在做的工作，AI 都能做。我不知道我还有没有价值。」")))
blocks.append(body(q("经理想安慰，但不知道该说「你很重要」还是「你得转型」。")))
blocks.append(body("<b>关键信号：</b>"))
for t in ["员工表达对自身价值的不确定", "员工说不清自己的「不可替代性」", "员工出现明显的低落、回避、空转"]:
    blocks.append(bullet(t))
blocks.append(callout("优先方向：先承接情绪，再识别他当前工作中仍属于他的人类贡献，最后引导到双轨发展。参 F6 类型 B。"))

# 8
blocks.append(h3("【8】能力漂移型（AI 时代新增）"))
blocks.append(body("员工交出的产出质量很高，AI 味很浓；但让员工自己分析一个复杂问题，他无法独立完成。"))
blocks.append(body("<b>关键信号：</b>"))
for t in ["产出质量与可观察的判断力有系统性落差", "员工在被追问「你是怎么判断的」时说不清楚", "后续工作中能力与已交成果明显不匹配"]:
    blocks.append(bullet(t))
blocks.append(callout("优先方向：不追究过去，从能力出发。引出发展面谈，把漂移问题转化为双轨发展问题。参 F6 类型 C/D、F8、F9。"))

blocks.append(divider())
blocks.append(h2("使用提醒"))
for t in [
    "场景可能叠加——一次面谈可能同时命中多个卡号，优先处理最影响信任的那个。",
    "「看起来命中」不等于「真的命中」——先确认「典型表现」是否真的在这次对话里出现过。",
    "正面经典 + 背面 AI——AI 时代三类新场景是这轮课的重点，不要漏看。",
    "A6 小卡建议——按本卡打印，对折两次，正反双面，揣在文件夹里随时翻。",
    "每张卡只回答一个问题——「我现在该往哪走」。具体走法交给 F3 / F5 / F6。",
]:
    blocks.append(numbered(t))
blocks.append(body("<b>配套使用：</b>F2 准备 → F3 四步 → F5 四原则 → F6 五类场景 → F10 跟进。本卡是「起点判断器」。"))

# ==================== F2 ====================
blocks.append(pagebreak())
blocks.append(h1("F2 · 面谈准备一页纸"))
blocks.append(callout("没有准备的面谈，比没有面谈更糟——你只会把含糊的判断，包装成看似清晰的废话。"))
blocks.append(h2("使用步骤"))
for t in [
    "先做「30 秒快速自检」（6 个勾选）",
    "任一项打叉 → 用对应的指引补齐",
    "6 项全部打钩 → 进入「核心三件套」填空",
    "关键判断：6 项中打叉超过 3 个 → 推迟面谈，回去补",
]:
    blocks.append(numbered(t))

blocks.append(divider())
blocks.append(h2("30 秒快速自检"))
blocks.append(body(q("以下 6 项中，如果有 3 个以上没打钩，请暂停——回去补完再开会。")))
blocks.append({"type": "table", "headers": ["#", "自检项", "打钩"],
    "rows": [
        ["1", "我有至少 3 个<b>具体的事实</b>（事件+时间+行为）", "□"],
        ["2", "我对每个事实的<b>归因有初步判断</b>（员工做了什么判断、什么是只有他能做的）", "□"],
        ["3", "我识别了<b>缺口类型</b>（技能/行为/认知/AI 工具）", "□"],
        ["4", "我<b>预判了难点</b>（员工会抗拒？会沉默？会有情绪？）", "□"],
        ["5", "我<b>准备了应对</b>（每个难点对应的开场白或处理方式）", "□"],
        ["6", "我知道这次面谈<b>要让员工带走什么</b>（一个具体的认知/方向/行动）", "□"],
    ], "col_widths": [0.06, 0.84, 0.10]})
blocks.append(body("<b>判定：</b>"))
for t in [
    "6 项全打钩 → 可以开会",
    "4—5 项打钩 → 把没打钩的项用本表下方的指引补完",
    "3 项以下打钩 → <b>推迟面谈</b>，回 F4 找归因问题清单、F6 找场景速查卡、F8 做双轨评估",
]:
    blocks.append(bullet(t))

blocks.append(divider())
blocks.append(h2("自检项打叉后的指引"))

f2_helps = [
    ("第 1 项打叉（没有具体事实）",
        "你的判断都是「他最近状态不好」「她不够积极」这种印象。",
        "翻你这个周期的沟通记录（邮件、IM、项目复盘），找出 3 个具体事件——有日期、有情境、有可观察的行为。写下来再开会。"),
    ("第 2 项打叉（归因模糊）",
        "你知道「他做了什么」，但不知道「他做这件事的判断是什么」。",
        "这是 AI 时代的核心新前提。先用 F4 的归因问题清单自问一遍——「这个成果里，他的核心判断体现在哪？」如果答不出，就带着这个问题进面谈。"),
    ("第 3 项打叉（没识别缺口类型）",
        "你只看到「做得不够好」，没拆开看是哪种不够。",
        "用 F9 决策树判断。至少要先区分「不会做」（技能）和「知道但没做」（行为）——这两类的发展路径完全不同。"),
    ("第 4 项打叉（没预判难点）",
        "你以为「就是常规聊几句」。",
        "闭上眼睛，想象员工可能在哪个时刻沉默、抗拒、反驳、流泪。写下 3 个最可能的难点。没有预判，就没有准备。"),
    ("第 5 项打叉（没准备应对）",
        "你预判了难点，但不知道怎么办。",
        "翻 F5（四原则话术）、F6（五类场景）。每个难点写一句话：你打算怎么开口。这一句话就是你的「锚」。"),
    ("第 6 项打叉（不知道要让员工带走什么）",
        "你的目标模糊到「再观察一下」。",
        "必须能写出一句具体的话——「我希望他离开时，理解到……」或「我希望他承诺……」。写不出就回去想清楚再开会。"),
]
for title, sym, guide in f2_helps:
    blocks.append(h3(title))
    blocks.append(body("<b>症状：</b>" + sym))
    blocks.append(body("<b>指引：</b>" + guide))

blocks.append(divider())
blocks.append(h2("核心三件套（6 项打钩后填写）"))

blocks.append(h3("一、最重要的 1—2 个事实"))
blocks.append(body("<b>事实 1：</b>"))
for t in ["时间/情境：______________________________", "具体行为：______________________________", "结果/影响：______________________________"]:
    blocks.append(bullet(t))
blocks.append(body("<b>事实 2（如有）：</b>"))
for t in ["时间/情境：______________________________", "具体行为：______________________________", "结果/影响：______________________________"]:
    blocks.append(bullet(t))

blocks.append(h3("二、归因判断"))
for t in [
    "事实 1 的归因：______________________________",
    "归因是否清晰：□ 清晰  □ 模糊（要在面谈第二步共同探索）",
    "事实 2 的归因：______________________________",
    "归因是否清晰：□ 清晰  □ 模糊（要在面谈第二步共同探索）",
]:
    blocks.append(bullet(t))

blocks.append(h3("三、员工要带走什么"))
blocks.append(body(q("用一句话写：这次面谈结束，我希望员工带走一个 ___________（认知/方向/行动）。")))
blocks.append(body("句子：_______________________________________________________________"))

blocks.append(divider())
blocks.append(h2("进阶：AI 时代额外准备（建议补做）"))
for t in [
    "我识别了这次面谈是否涉及 AI 时代的五类场景之一（参 F6）",
    "我识别了员工的双轨状态（参 F8）",
    "我准备了发展对话的开场问题（参 F7）",
    "我通知了员工面谈时间和大致方向（让他有机会自我准备）",
]:
    blocks.append(bullet(t))

blocks.append(divider())
blocks.append(h2("使用提醒"))
for t in [
    "本表不是负担，是保险——填完大概 15—20 分钟，能避免一场 1 小时的事故面谈。",
    "打叉不丢人——打叉越多，越能提前发现问题。面谈里发现，比面谈后补救便宜 100 倍。",
    "核心三件套填完就能开会——其他都是加分项。",
    "本表用完不扔——面谈后 30 天回顾时再翻出来，看你预判的难点和员工的实际反应差距在哪。",
    "不要把准备当完美主义——你不可能准备好所有事；准备是让你「心里有底」。",
]:
    blocks.append(numbered(t))
blocks.append(body("<b>配套使用：</b>准备时配合 F4 找归因问题、F6 找场景对策、F8 做双轨评估；面谈中配合 F3 速查四步、F5 速查话术。"))

# 保存中间结果
out = {
    "doc_type": "general",
    "title": "完整工具包 · 打印合订版",
    "subtitle": "F1—F10 全流程工具表单",
    "author": "绩效管理和绩效面谈课程组",
    "date": "2026 年 6 月",
    "accent": "#1C3A5E",
    "cover_bg": "#F2F0EC",
    "blocks": blocks,
}

with open(OUT, "w", encoding="utf-8") as f:
    json.dump(out, f, ensure_ascii=False, indent=2)

print(f"Wrote {OUT}, blocks: {len(blocks)}")
