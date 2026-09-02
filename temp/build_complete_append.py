#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Append F3-F10 blocks to existing content.json"""
import json

PATH = r"D:/CC/temp/pdf_workspace/complete/content.json"
with open(PATH, encoding="utf-8") as f:
    data = json.load(f)
blocks = data["blocks"]

def h1(t): return {"type": "h1", "text": t}
def h2(t): return {"type": "h2", "text": t}
def h3(t): return {"type": "h3", "text": t}
def body(t): return {"type": "body", "text": t}
def bullet(t): return {"type": "bullet", "text": t}
def numbered(t): return {"type": "numbered", "text": t}
def callout(t): return {"type": "callout", "text": t}
def divider(): return {"type": "divider"}
def pagebreak(): return {"type": "pagebreak"}
def q(t): return f"<i>{t}</i>"

# ==================== F3 ====================
blocks.append(pagebreak())
blocks.append(h1("F3 · 四步面谈法速查卡"))
blocks.append(callout("面谈不是宣告会，是共建会——四步走完，员工自己也能讲清楚「我做了什么、要往哪走」。"))
blocks.append(h2("使用步骤"))
for t in [
    "第一步：放下你准备好的判断，先邀请员工回顾",
    "第二步：至少问一个归因问题，并真的等答案",
    "第三步：用具体事实说「事面」，不用印象",
    "第四步：先问「你觉得可以怎么做」，再说你看到的方向",
]:
    blocks.append(numbered(t))

blocks.append(divider())
blocks.append(h2("正面：四步主轴"))

# 第一步
blocks.append(h3("第一步：共看事实"))
blocks.append(body("<b>核心动作：</b>邀请、回顾、确认"))
blocks.append(body("<b>第一句话参考：</b>"))
blocks.append(callout("这个周期快结束了，我想和你一起回顾一下——你印象最深的事是什么？你觉得做得最好的、做砸的、最有感觉的，都可以聊。"))
blocks.append(body("<b>关键提醒：</b>"))
for t in ["不要先说你的判断", "不要用「你最近」开头", "要让员工先说话；你说不超过 30%", "要只描述行为，不评价"]:
    blocks.append(bullet(t))
blocks.append(body("<b>完成信号：</b>员工说出的事实和你准备的事实能对上 70% 以上。"))
blocks.append(body("<b>卡壳了？</b>参 F4 第 1 组「关于判断」。"))

# 第二步
blocks.append(h3("第二步：探寻归因"))
blocks.append(body("<b>核心动作：</b>提问、倾听、识别"))
blocks.append(body("<b>第一句话参考：</b>"))
blocks.append(callout("在这件事里，你的判断体现在哪里？当时你是怎么想到要这样做的？"))
blocks.append(body("<b>关键提醒：</b>"))
for t in ["不要用「是不是」句式（暗示答案）", "不要用「为什么没」开头（指责味）", "要好奇，不要评判", "要对 AI 的参与保持开放，先不预设", "要真的等 5—10 秒，员工在思考"]:
    blocks.append(bullet(t))
blocks.append(body("<b>完成信号：</b>员工能讲清楚「我做了什么判断」，你能识别「什么是只有他才能做的」。"))
blocks.append(body("<b>卡壳了？</b>参 F4 完整 20 题。"))

# 第三步
blocks.append(h3("第三步：分析缺口"))
blocks.append(body("<b>核心动作：</b>对照、识别、说出"))
blocks.append(body("<b>第一句话参考：</b>"))
blocks.append(callout("结合你刚才讲的，我想和你分享我看到的一个具体差距——（事实 A vs 标准 B）。你怎么看？"))
blocks.append(body("<b>关键提醒：</b>"))
for t in ["不要用「你总是」「你从来不」开头", "不要只说印象不给事实", "要先事面（具体事实），再结论", "要区分「这次没做到」和「这个人能力不足」", "要让员工回应，不抢话"]:
    blocks.append(bullet(t))
blocks.append(body("<b>完成信号：</b>员工承认了差距（即使不情愿），你能定位缺口类型。"))
blocks.append(body("<b>卡壳了？</b>缺口类型判断参 F9；话术参 F5「事面」。"))

# 第四步
blocks.append(h3("第四步：共建方向"))
blocks.append(body("<b>核心动作：</b>发问、共创、确认"))
blocks.append(body("<b>第一句话参考：</b>"))
blocks.append(callout("那接下来，你觉得可以从哪里开始？我看到的可能不一样——我们一起想想。"))
blocks.append(body("<b>关键提醒：</b>"))
for t in ["不要上来就发行动要求", "不要只谈意向不谈具体动作", "要先问员工，让员工先说方案", "要把你看到的作为补充，不作为答案", "要结束时有可观察的承诺 + 时间点"]:
    blocks.append(bullet(t))
blocks.append(body("<b>完成信号：</b>双方都说了「我接下来要做 X」，写下来有具体动作。"))
blocks.append(body("<b>卡壳了？</b>发展对话接 F7、F8。"))

blocks.append(divider())
blocks.append(h2("背面：四步之间的过渡句"))
blocks.append(body(q("直接从一步跳到下一步，员工会「啊？」——给一句过渡，让节奏自然。")))

blocks.append(h3("第一步 → 第二步"))
blocks.append(callout("你说的这几件事，我想多了解一下——在这件事里，你做了什么判断？"))
blocks.append(callout("听起来 X 这件事对你影响最大，能多讲讲当时你是怎么决定的吗？"))

blocks.append(h3("第二步 → 第三步"))
blocks.append(callout("谢谢你讲这些。结合你刚才讲的，我想分享我看到的一个具体差距……"))
blocks.append(callout("我现在能更清楚你做了什么——但有一个地方我还想和你对齐……"))

blocks.append(h3("第三步 → 第四步"))
blocks.append(callout("那这个差距，你觉得可以从哪一步开始缩小？"))
blocks.append(callout("我有一些具体的想法，但我想先听你的——你觉得呢？"))

blocks.append(h3("第四步 → 收尾"))
blocks.append(callout("那我们今天就约定了：(1) 你做 X；(2) 我提供 Y 支持；(3) 我们在 Z 时间再聊 5 分钟看进展。这样可以吗？"))

blocks.append(divider())
blocks.append(h2("四步里最容易犯的错"))
blocks.append({"type": "table", "headers": ["步骤", "最常见的错", "信号", "怎么救"],
    "rows": [
        ["第一步", "抢话 / 30 秒就打断", "员工说话时间 < 5 分钟", "强制自己闭嘴；把话筒递过去"],
        ["第二步", "问「为什么」开头 / 急着给答案", "员工答得很短", "换「怎么」「什么」开头；多等 5 秒"],
        ["第三步", "用印象说「你最近状态不好」", "员工反问「哪次」你答不上", "立刻翻出具体事实；说事面"],
        ["第四步", "直接发指令", "员工说「好的」但眼神空洞", "收回指令，先问「你觉得呢」"],
    ], "col_widths": [0.10, 0.30, 0.30, 0.30]})

blocks.append(divider())
blocks.append(h2("使用提醒"))
for t in [
    "四步是顺序，不是流程图——跳步会丢信任。每步没完成，不要进下一步。",
    "时间分配建议（1 小时面谈）：共看 15min / 探寻 20min / 分析 15min / 共建 10min。AI 时代面谈把「探寻」再加 5—10 分钟。",
    "卡不是速查就够——真卡住时翻 F4 找具体问题，比临时想更靠谱。",
    "AI 时代特别强调第二步——没有归因清晰，后面三步全跑空。",
    "本卡配 F4、F5、F6——这三张是本卡的「弹药库」。",
]:
    blocks.append(numbered(t))
blocks.append(body("<b>配套使用：</b>F4（归因问题弹药） / F5（四原则话术） / F6（五类场景） / F7（发展对话） / F8（双轨评估） / F9（缺口判断）。"))

# ==================== F4 ====================
blocks.append(pagebreak())
blocks.append(h1("F4 · 探寻归因参考问题清单"))
blocks.append(callout("AI 时代，归因清晰是面谈的新前提——员工说不清自己做了什么判断，管理者就没法做评估。"))
blocks.append(h2("使用步骤"))
for t in [
    "先判断「归因」处于什么状态（清晰 / 部分 / 完全不清楚）",
    "对应状态选问题组",
    "一次只问 1—2 个问题，真的等 5—10 秒",
    "听到回答后用对方的原话复述，再追问",
    "至少走到「员工能讲清楚判断」再进入第三步",
]:
    blocks.append(numbered(t))

blocks.append(divider())
blocks.append(h2("问题使用原则（必读）"))
for t in [
    "一次只问一个——连珠炮会让员工关闭。",
    "真的等 5—10 秒——员工在思考，不是拒绝。",
    "不预设答案——「是不是 AI 做的」是质问，不是探寻。",
    "承认不知道——「我也不知道」也可以是回应。",
    "接到 AI 的关键词不急——员工主动提「AI」，正是探寻的入口。",
    "复述对方原话——「你刚才说『我主要让 AI 写了初稿』，能多讲讲吗？」",
    "不用「为什么」开头——「为什么没」带有指控味，换成「什么」或「怎么」。",
]:
    blocks.append(numbered(t))

blocks.append(divider())
blocks.append(h2("第一组：关于判断（5 问）—— 找「他做了什么判断」"))
blocks.append(body(q("适用：所有面谈第二步开场；你只知道「他做了什么」但不知道「他怎么想的」。")))
blocks.append({"type": "table", "headers": ["#", "问题", "适用场景"],
    "rows": [
        ["1", "<b>在这件事里，你的核心判断体现在哪里？</b>", "通用开场。员工经常能立刻讲出要点。"],
        ["2", "<b>当时你怎么决定要这样做的？</b> 是什么让你选了 A 而不是 B？", "当员工讲的是行动，问决策过程。"],
        ["3", "如果让一个新人做这件事，<b>他大概率会做成什么样？</b> 和你的差别在哪里？", "让员工看到自己的「不可替代性」，特别是 AI 时代。"],
        ["4", "在所有你做对的事里，<b>哪一件你当时其实最没把握？</b> 是什么让你做对了？", "找到员工的判断锚点。"],
        ["5", "<b>这件事最关键的拐点是什么？</b> 是数据？经验？直觉？别人的反馈？", "把模糊的「我判断了」具体化。"],
    ], "col_widths": [0.05, 0.50, 0.45]})

blocks.append(divider())
blocks.append(h2("第二组：关于过程（5 问）—— 找「什么是只有他才能做的」"))
blocks.append(body(q("适用：归因疑似 AI 贡献时；或员工自我评价偏低时。")))
blocks.append({"type": "table", "headers": ["#", "问题", "适用场景"],
    "rows": [
        ["1", "这个过程里，<b>什么是只有你才能做到的？</b> 什么是 AI 或别人也可以做的？", "直接问「人的不可替代性」，AI 时代必问。"],
        ["2", "从头到尾，<b>哪一步你最操心？</b> 哪一步 AI 最操心？", "把过程拆开看人的部分。"],
        ["3", "如果把这件事再做一次，<b>你会不会让 AI 多做点？</b> 你多做点什么？", "探到员工对「AI 替代」的态度。"],
        ["4", "这件事，<b>什么时候你最有「我在做决定」的感觉？</b>", "找到员工的「控制感」瞬间。"],
        ["5", "这个结果出来之后，<b>谁最有意见？</b> 你怎么应对的？那个应对是怎么想出来的？", "探到员工处理模糊和对抗的能力。"],
    ], "col_widths": [0.05, 0.50, 0.45]})

blocks.append(divider())
blocks.append(h2("第三组：关于 AI 的参与（5 问）—— AI 时代新增核心"))
blocks.append(body(q("适用：员工主动提到 AI 时；或你怀疑 AI 参与但没证据时；或绩效归因有争议时。")))
blocks.append({"type": "table", "headers": ["#", "问题", "适用场景"],
    "rows": [
        ["1", "你说 AI 帮了忙——<b>能具体讲讲 AI 做了什么、你做了什么吗？</b>", "当员工主动提 AI，先区分人和 AI 的部分。"],
        ["2", "AI 给的结果，<b>你做了哪些判断才决定用？</b> 哪一部分你改过？哪一部分你保留了？", "探到员工的「评估 AI 输出」能力（双轨之一）。"],
        ["3", "<b>你给 AI 的提示是怎么写的？</b> 是第一次就这么写，还是改过几次？", "探到员工的「提示设计」能力。"],
        ["4", "如果 AI 没参与这件事，<b>你估计会多花多少时间？</b> 结果会有差别吗？", "量化 AI 的边际贡献。"],
        ["5", "<b>这个工作里，有没有哪一步 AI 做不了，必须你来做？</b> 是因为什么 AI 做不了？", "找到「AI 的边界」= 人类深度的位置。"],
    ], "col_widths": [0.05, 0.50, 0.45]})

blocks.append(divider())
blocks.append(h2("第四组：关于改进（5 问）—— 为第三步和第四步做铺垫"))
blocks.append(body(q("适用：归因已经清晰，准备进入「分析缺口」或「共建方向」时。")))
blocks.append({"type": "table", "headers": ["#", "问题", "适用场景"],
    "rows": [
        ["1", "下次类似的事，<b>你希望自己怎么做？</b> 哪些地方想不一样？", "直接进入第四步共建方向。"],
        ["2", "<b>这件事哪个部分你回头看最不满意？</b> 那时你意识到问题了吗？", "探到员工的自我觉察能力。"],
        ["3", "如果让你带一个新人做这件事，<b>你最想提醒他注意什么？</b>", "把员工的「教训」显性化。"],
        ["4", "要改进这个，<b>你需要我或公司提供什么支持？</b>", "邀请员工主动提出支持需求。"],
        ["5", "<b>这个改进对你的工作意味着什么？</b> 会不会影响到你的时间分配？", "把「改进」和「工作量」连起来，避免空头承诺。"],
    ], "col_widths": [0.05, 0.50, 0.45]})

blocks.append(divider())
blocks.append(h2("第五组：备选追问（按需使用）—— 对应「卡住」的情况"))
blocks.append({"type": "table", "headers": ["#", "情况", "追问"],
    "rows": [
        ["1", "员工说「没什么特别的」", "<b>有没有哪个瞬间你印象比较深？</b> 不一定是大事。"],
        ["2", "员工说「我也不知道为什么」", "<b>如果让你现在猜一下呢？</b> 你的直觉会说什么？"],
        ["3", "员工沉默超过 10 秒", "<b>不急，慢慢想</b>。我等你的答案。（然后闭嘴）"],
        ["4", "员工开始指责别人", "我听到了<b>你对 X 部分的看法</b>。我还想多了解你自己做的那部分——（拉回员工自身）"],
        ["5", "员工情绪激动", "<b>我看到你很在意这件事</b>。我们能不能先把刚才那段事实过完，情绪的部分一会儿专门说？（用「事面」先把节奏稳住）"],
    ], "col_widths": [0.05, 0.30, 0.65]})

blocks.append(divider())
blocks.append(h2("探寻归因的「完成信号」"))
blocks.append(body(q("进入第三步的判断标准——满足以下至少 3 项：")))
for t in [
    "员工能讲出至少 1 个具体的判断点（「我当时判断……」）",
    "员工能区分人的部分和 AI 的部分（AI 时代必填）",
    "员工能说出至少一个具体的归因（「我做对/做错了 X」）",
    "你作为管理者能识别「什么是只有他才能做的」",
    "员工没有明显回避（沉默/打断/反击）——若有，回到 F5 的「情面」",
]:
    blocks.append(bullet(t))
blocks.append(callout("完成前不要进入第三步。"))

blocks.append(divider())
blocks.append(h2("使用提醒"))
for t in [
    "问题不是话术，是邀请——语气比内容更重要。",
    "不抢话——员工在答时你闭嘴；他停顿时你等 3—5 秒再问下一句。",
    "不评判——员工答案不达预期时，不用皱眉/叹气。",
    "AI 时代必问第 3 组——只要面谈涉及 AI 辅助的工作，至少问其中 1—2 个。",
    "本表是「弹药库」不是「剧本」——挑当下合适的问，不要按顺序念。",
    "复述是关键动作——用员工自己的话回他，他才会继续讲。",
]:
    blocks.append(numbered(t))
blocks.append(body("<b>配套使用：</b>F3 第二步 / F5「事面」 / F6 类型 A 归因抗议型 / F8 双轨评估 / F9 缺口判断。"))

with open(PATH, "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print(f"Appended F3+F4, total blocks: {len(blocks)}")
