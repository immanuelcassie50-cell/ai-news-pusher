#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Append F5-F6 to complete content.json"""
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

# ==================== F5 ====================
blocks.append(pagebreak())
blocks.append(h1("F5 · 正面·全面·情面·事面话术对比"))
blocks.append(callout("说真话不难，难的是说「让员工听得进去」的真话——四原则不是约束，是真话能落地的支撑。"))
blocks.append(h2("使用步骤"))
for t in [
    "先想「我接下来要说的那句话属于四原则里的哪一条」",
    "拿出对应原则的对比组（A 错 B 对）",
    "把 A 改成 B，按 B 的字面级说出来",
    "说出来后等员工回应，不抢话",
]:
    blocks.append(numbered(t))

blocks.append(divider())
blocks.append(h2("正面：直接说出问题，不绕弯"))
blocks.append(body(q("直接 = 不绕弯 + 不暗示 + 不让他人转达 + 不留到背后说。")))

blocks.append(h3("对比组 1"))
blocks.append({"type": "table", "headers": ["A 常见错误", "B 四原则版本"],
    "rows": [
        ["「最近工作还顺利吧？状态怎么样？」（绕）", "<b>我直接说——这个季度我有几个地方想和你聊。</b>第一个是 Q3 的 X 项目。"],
    ], "col_widths": [0.45, 0.55]})

blocks.append(h3("对比组 2"))
blocks.append({"type": "table", "headers": ["A 常见错误", "B 四原则版本"],
    "rows": [
        ["「我听别人说你……」（让他人传话）", "<b>这是我观察到的</b>——在 Q3 的三个会议上，你打断了同事至少五次。我想和你直接谈这件事。"],
    ], "col_widths": [0.45, 0.55]})

blocks.append(h3("对比组 3（AI 时代特有）"))
blocks.append({"type": "table", "headers": ["A 常见错误", "B 四原则版本"],
    "rows": [
        ["「你这个成绩怎么算你自己呢？」（暗示、嘲讽）", "<b>我想直接问你——在这个成果里，你的判断体现在哪里？</b>"],
    ], "col_widths": [0.45, 0.55]})

blocks.append(body(q("为什么 B 更有效：「正面」不是说狠话，是「问题能被清楚听见」。绕弯会让员工怀疑你没把握，正面才有信任基础。")))

blocks.append(divider())
blocks.append(h2("全面：看到整体，不以偏概全"))
blocks.append(body(q("全面 = 同时看到做到和没做到 + 不以单一事件定性 + 考虑外部因素（含 AI 工具的影响）。")))

blocks.append(h3("对比组 1"))
blocks.append({"type": "table", "headers": ["A 常见错误", "B 四原则版本"],
    "rows": [
        ["「你这个项目搞砸了。」（单一事件定性）", "这个项目里，<b>目标设定和团队协调这两块你做得不错</b>——但客户预期管理这部分有明显差距。我们一个一个看。"],
    ], "col_widths": [0.45, 0.55]})

blocks.append(h3("对比组 2"))
blocks.append({"type": "table", "headers": ["A 常见错误", "B 四原则版本"],
    "rows": [
        ["「你最近表现太差了。」（以偏概全）", "<b>9 月之前你的客户反馈一直很好</b>；9 月之后的两件事让我担心。我们先看看 9 月发生了什么。"],
    ], "col_widths": [0.45, 0.55]})

blocks.append(h3("对比组 3（AI 时代特有）"))
blocks.append({"type": "table", "headers": ["A 常见错误", "B 四原则版本"],
    "rows": [
        ["「你用的 AI 是给你做的吧？」（只看 AI 不看人）", "我看到这个产出质量很高——<b>但我也注意到你在分析阶段加入了一个很关键的判断，这是 AI 不太会自己想到的</b>。我们来一起看看人的部分和 AI 的部分。"],
    ], "col_widths": [0.45, 0.55]})

blocks.append(body(q("为什么 B 更有效：全面让员工有「被看见」的感觉——他做到的部分被肯定，没做到的部分才愿意听进去。")))

blocks.append(divider())
blocks.append(h2("情面：照顾情感，保护尊严"))
blocks.append(body(q("情面 = 区分批评行为和批评人 + 给出负面反馈时承认改进的难度 + 保护员工「想做好」的自尊。")))

blocks.append(h3("对比组 1"))
blocks.append({"type": "table", "headers": ["A 常见错误", "B 四原则版本"],
    "rows": [
        ["「你怎么这点事都做不好？」（批评人）", "<b>这件事比我预期的难度大</b>——你当时资源也不够。我想看看接下来怎么帮你解决。"],
    ], "col_widths": [0.45, 0.55]})

blocks.append(h3("对比组 2"))
blocks.append({"type": "table", "headers": ["A 常见错误", "B 四原则版本"],
    "rows": [
        ["「你的判断力不行。」（贴标签）", "<b>这个判断在那个时间点确实不容易</b>。我想和你复盘一下——当时你的依据是什么？"],
    ], "col_widths": [0.45, 0.55]})

blocks.append(h3("对比组 3（AI 时代特有，对方向迷失员工）"))
blocks.append({"type": "table", "headers": ["A 常见错误", "B 四原则版本"],
    "rows": [
        ["「你想太多了，AI 是个工具。」（否定情绪）", "<b>我能理解你这种感觉——在 AI 能做越来越多事的现在，怀疑自己的价值是真的</b>。我们不是要解决情绪，是要把你还在做的、只有你能做的那部分看清楚。"],
    ], "col_widths": [0.45, 0.55]})

blocks.append(body(q("为什么 B 更有效：情面不是软化，是承认「想做好」是真实的。员工感到被尊重，才不会把能量消耗在防御上。")))

blocks.append(divider())
blocks.append(h2("事面：基于可观察的具体事实"))
blocks.append(body(q("事面 = 描述行为，不描述人格 + 具体到情境、时间、行为 + 不用「总是」「从来不」。")))

blocks.append(h3("对比组 1"))
blocks.append({"type": "table", "headers": ["A 常见错误", "B 四原则版本"],
    "rows": [
        ["「你总是不能按时提交。」", "<b>Q3 里有三次提交比计划晚了 2 天以上</b>——7 月的 X 报告、8 月的 Y 报告、9 月的 Z 汇报。每次是什么情况？"],
    ], "col_widths": [0.45, 0.55]})

blocks.append(h3("对比组 2"))
blocks.append({"type": "table", "headers": ["A 常见错误", "B 四原则版本"],
    "rows": [
        ["「你的工作质量不稳定。」", "<b>X 项目里的客户分析部分，结论和我们自己的客户访谈数据有 3 处明显出入</b>。当时你是怎么判断的？"],
    ], "col_widths": [0.45, 0.55]})

blocks.append(h3("对比组 3（AI 时代特有）"))
blocks.append({"type": "table", "headers": ["A 常见错误", "B 四原则版本"],
    "rows": [
        ["「你最近用 AI 太依赖了。」", "<b>过去 3 次面对客户的现场分析，我注意到你需要先查手机或问 AI 才开始回答</b>——<b>而在过去你是不需要这个步骤的</b>。我想看看发生了什么。"],
    ], "col_widths": [0.45, 0.55]})

blocks.append(body(q("为什么 B 更有效：事面把「你这个人有问题」变成「这件事有个差距」——员工能接受差距，不能接受被否定。")))

blocks.append(divider())
blocks.append(h2("背面：四原则连用模板"))
blocks.append(body(q("真实场景里，四原则是同时在场的。下面给一段「完整段」的对比——把四原则都用上的版本 vs 没用上的版本。")))

blocks.append(h3("场景：员工 Q3 的 X 项目延期 2 周，影响了客户上线"))

blocks.append(body("<b>A 常见错误版本：</b>"))
blocks.append(callout("你这个项目怎么搞的？延期这么久，客户都投诉了。你最近状态真的不行，我要给你打个 C。你接下来要好好反思一下，下个季度不能再这样。"))
blocks.append(body("<b>这段话违背了：</b>"))
for t in [
    "<b>正面</b> → 没正面说问题，含糊",
    "<b>全面</b> → 只说延期，没看到他做的部分",
    "<b>情面</b> → 「你状态不行」是批评人；「好好反思」是空话",
    "<b>事面</b> → 没具体事件，没具体时间",
]:
    blocks.append(bullet(t))

blocks.append(body("<b>B 四原则应用版本：</b>"))
blocks.append(callout("<b>我直接说——X 项目延期 2 周这件事我需要和你复盘。</b>【正面】"))
blocks.append(callout("<b>但我先说做得好的部分</b>：你和客户的第一次技术对接做得很扎实，客户的李经理专门表扬了你。<b>我们今天主要看延期这部分。</b>【全面】"))
blocks.append(callout("<b>我知道这个项目压力很大</b>——三件事同时做。我不是要追责，是想看清楚接下来怎么避免。【情面】"))
blocks.append(callout("<b>具体看：第一次延期信号是 8 月 10 日，里程碑 M2 没达到</b>；8 月 20 日我们沟通时你说「还赶得上」；9 月 5 日才正式告诉我延期。这三周里发生了什么？我们一起看。<b>【事面】</b>"))
blocks.append(callout("接下来，<b>你觉得我们怎么调整能让这件事发生得不一样？</b> 【共建→F7】"))

blocks.append(body("<b>这段话做对了：</b>"))
for t in [
    "<b>正面</b>：第一句直接说「延期要复盘」",
    "<b>全面</b>：先肯定再做差距",
    "<b>情面</b>：承认压力、说明「不是追责」",
    "<b>事面</b>：具体到日期、里程碑、对话时间",
    "自然过渡到第四步共建",
]:
    blocks.append(bullet(t))

blocks.append(divider())
blocks.append(h2("四原则的「使用提醒」"))
for t in [
    "四原则不是四个步骤，是同时在场——一段话里尽量都体现；不必每个对比组都用。",
    "正面 ≠ 狠——正面是把问题说清楚，不是说难听。",
    "全面 ≠ 讨好——全面是给员工「我被看见了」的感觉，不是回避问题。",
    "情面 ≠ 软化——情面是承认「想做好」是真的，不是降低标准。",
    "事面 ≠ 列流水账——事面是挑能说明问题的 1—2 个事实，不是把所有事都列出来。",
    "四原则要练字面级——嘴上说「我做到了全面」但员工听到的是「我还是被你否定了」，这种情况最常见。建议每组对比反复读出声。",
]:
    blocks.append(numbered(t))

blocks.append(divider())
blocks.append(h2("速查：四原则的「过没过」自检"))
blocks.append(body(q("说完一段话，问自己三个问题：")))
for t in [
    "我<b>直接</b>说了吗？（没绕弯？没说一半？）",
    "我<b>事面</b>了吗？（有具体的事件+时间+行为？）",
    "员工听完后能<b>复述出我说了什么</b>吗？（听不清 = 没说）",
]:
    blocks.append(bullet(t))
blocks.append(body(q("高级自检（更难的）：")))
for t in [
    "我看到员工<b>做到的部分</b>了吗？",
    "我承认了「想做好是真的」吗？",
    "员工<b>没在防御</b>吗？（表情/语气/沉默都是信号）",
]:
    blocks.append(bullet(t))
blocks.append(body("<b>配套使用：</b>F3 第三步「分析缺口」 / F4 探寻归因时也用事面 / F6 全部五类场景都靠四原则打底。"))

# ==================== F6 ====================
blocks.append(pagebreak())
blocks.append(h1("F6 · AI 时代五类场景处理速查卡"))
blocks.append(callout("AI 时代最大的面谈难题，不是「员工不行」——是「我们都不知道该怎么评估他了」。"))
blocks.append(h2("使用步骤"))
for t in [
    "看识别信号，3—4 条命中 → 锁定类型",
    "拿出该类型「第一句话」作开场白",
    "跟着「处理关键」3 条走",
    "严格守住「不要做什么」3 条红线",
    "走出场景后立即接 F7 发展对话 / F8 双轨评估",
]:
    blocks.append(numbered(t))

blocks.append(divider())
blocks.append(h2("正面：五类场景速查"))

# 类型 A
blocks.append(h3("类型 A · 归因抗议型"))
blocks.append(body("<b>员工原话参考：</b>"))
blocks.append(callout("这个成果是 AI 帮我做的，你这样评不公平。"))
blocks.append(callout("这工作 AI 做的比我好，干嘛要我？"))
blocks.append(body("<b>识别信号：</b>"))
for t in ["员工主动提出「AI 参与」作为评分争议", "员工质疑评估的公平性、合理性", "员工用「AI 也能做」作为不接受评估的依据"]:
    blocks.append(bullet(t))
blocks.append(body("<b>第一句话（开场白）：</b>"))
blocks.append(callout("<b>你提到了 AI 的参与——这个点很重要。</b> 我不是来争论谁做得多谁做得少，<b>我是来和你一起看清楚：你在这个过程里做了什么判断。</b> 我们来回顾一下。"))
blocks.append(body("<b>处理关键（3 点）：</b>"))
for t in [
    "不急于判断对错——把争论转成「共同探索」",
    "走 F4 第三组问题——区分「人的部分」和「AI 的部分」",
    "让员工自己讲出判断——比你说十句都管用",
]:
    blocks.append(numbered(t))
blocks.append(body("<b>不要做什么（3 条红线）：</b>"))
for t in [
    "不要说「那 AI 做的部分我扣分」——这种话一出，面谈就死了",
    "不要说「你也用了啊」——回避了员工的真实困惑",
    "不要急着给评分结论——先识别贡献，再谈评分",
]:
    blocks.append(bullet(t))

# 类型 B
blocks.append(h3("类型 B · 方向迷失型"))
blocks.append(body("<b>员工原话参考：</b>"))
blocks.append(callout("我在 AI 时代感觉不知道自己的价值在哪里。"))
blocks.append(callout("我做的工作 AI 都能做，我学的东西还有用吗？"))
blocks.append(body("<b>识别信号：</b>"))
for t in ["员工表达对自身价值的不确定、失落、空虚", "员工说不出「我有什么不可替代的」", "员工出现明显的低落、回避、空转、流失倾向"]:
    blocks.append(bullet(t))
blocks.append(body("<b>第一句话（开场白）：</b>"))
blocks.append(callout("<b>我听到你说你最近在想「我还有没有价值」——这件事我认真对待。</b> 我不会用「你想多了」敷衍你，<b>也不会用「你很重要」来哄你</b>。我想和你一起看——你现在的工作里，<b>什么是你自己仍然在做的、AI 还做不了的</b>。"))
blocks.append(body("<b>处理关键（3 点）：</b>"))
for t in [
    "先承认困惑是真的——不是员工「状态差」，是 AI 时代真实的不确定感",
    "识别他当前的人类贡献——具体到本周/本月的 1—2 件事",
    "引导到双轨发展——AI 承接一部分后，把精力放在更有深度的部分",
]:
    blocks.append(numbered(t))
blocks.append(body("<b>不要做什么（3 条红线）：</b>"))
for t in [
    "不要说「AI 是个工具，你别想太多」——否定了他的真实感受",
    "不要说「公司不会裁你的」——回避了价值问题",
    "不要急着给「解决方案」——先承接情绪，再识别贡献，再引导方向",
]:
    blocks.append(bullet(t))

# 类型 C
blocks.append(h3("类型 C · 漂移识别型"))
blocks.append(body("<b>员工原话参考：</b>"))
blocks.append(callout("我觉得我做得还行啊，没什么问题。（但你观察到了落差）"))
blocks.append(body("<b>识别信号：</b>"))
for t in [
    "员工自我感觉正常",
    "管理者观察到产出质量与员工实际判断能力的系统性落差",
    "出现「工具依赖但判断力退化」迹象（不查 AI 就不会分析、不会决策）",
]:
    blocks.append(bullet(t))
blocks.append(body("<b>第一句话（开场白）：</b>"))
blocks.append(callout("<b>我观察到一个现象想和你聊</b>——过去 3 次面对客户的现场分析，我注意到你需要先查手机或问 AI 才开始回答，<b>而在过去你是不需要这个步骤的</b>。<b>我不是来指控你糊弄</b>，我是来和你一起看——你的判断力在哪个环节发生了变化。"))
blocks.append(body("<b>处理关键（3 点）：</b>"))
for t in [
    "不直接指控「你用 AI 糊弄了我」——指控只会让他防御",
    "从具体的能力表现出发——观察，不是猜测",
    "引出发展面谈——把漂移问题转化为双轨发展问题（F8、F9）",
]:
    blocks.append(numbered(t))
blocks.append(body("<b>不要做什么（3 条红线）：</b>"))
for t in [
    "不要翻旧账追究过去——这是为了未来，不是为了证明「我早就看出来了」",
    "不要用「你最近用 AI 太依赖」这种印象话——必须说事面",
    "不要在这次面谈里下结论——漂移判断需要多次观察，这次只是开启对话",
]:
    blocks.append(bullet(t))

blocks.append(divider())
blocks.append(h2("背面：另两类场景"))

# 类型 D
blocks.append(h3("类型 D · 美化成果型"))
blocks.append(body("<b>员工原话参考：</b>"))
blocks.append(callout("这个报告我自己做的。（但你高度怀疑 AI 做的，且他在被追问「你怎么想到的」时说不清楚）"))
blocks.append(body("<b>识别信号：</b>"))
for t in [
    "产出质量系统性高于该员工可观察的判断水平",
    "员工在被追问「你是怎么判断的」时无法说清楚过程",
    "后续工作中能力与已提交成果明显不匹配",
]:
    blocks.append(bullet(t))
blocks.append(body("<b>第一句话（开场白）：</b>"))
blocks.append(callout("<b>我想和你聊的不是「这个报告是怎么做的」，而是「下次工作怎么让你做出这种质量」</b>。我看到这个产出质量很高——<b>但我也注意到你在分析阶段加入了一个 AI 不太会自己想到的判断</b>。<b>我们不是来追责过去，是来为下一次做准备。</b>"))
blocks.append(body("<b>处理关键（3 点）：</b>"))
for t in [
    "基于能力观察而非产出指控——不直接说「你这是 AI 做的」",
    "聚焦「前向要求」——下次让员工的判断贡献可见",
    "明确指出要求——比如「下次在提交前，把『你的判断点』列出来给我看」",
]:
    blocks.append(numbered(t))
blocks.append(body("<b>不要做什么（3 条红线）：</b>"))
for t in [
    "不要下「诚信问题」的结论——除非有确凿证据员工明知 AI 做却宣称自己做的（那才进入类型 E）",
    "不要「过去翻账」——追不到结果，还会失信任",
    "不要模糊——「下次让判断可见」必须具体到做法",
]:
    blocks.append(bullet(t))

# 类型 E
blocks.append(h3("类型 E · AI 品行型"))
blocks.append(body("<b>员工原话参考：</b>"))
blocks.append(callout("（不主动说，但被追问时支支吾吾，或发现「明显不合理的 AI 使用」）"))
blocks.append(body("<b>识别信号：</b>"))
for t in [
    "员工有意识地用 AI「规避」工作（不是辅助工作）",
    "对 AI 输出不加判断就提交",
    "明知 AI 做的但呈现为自己的成果（诚信边界）",
    "抵触适当使用 AI 工具（也是一种工作品行问题）",
]:
    blocks.append(bullet(t))
blocks.append(body("<b>第一句话（开场白）：</b>"))
blocks.append(callout("<b>我直接说——这件事我不回避</b>。我看到的情况是（具体事实）：X 报告你提交时说是你做的，<b>但里面有三段的数据和 AI 第一次输出完全一致，且你无法讲出当时的判断过程</b>。<b>这不是能力问题——是工作方式和诚信问题。</b> 我需要你给我一个明确回应。"))
blocks.append(body("<b>处理关键（3 点）：</b>"))
for t in [
    "不回避这是品行问题——不要软化为「只是能力需要提升」",
    "从可观察的具体行为出发——说事实，不说「我觉得你」",
    "把改变要求具体化——可观察的行为变化（「下次提交时附加『我的判断点』清单」）",
]:
    blocks.append(numbered(t))
blocks.append(body("<b>不要做什么（3 条红线）：</b>"))
for t in [
    "不要「为员工留面子」而模糊——品行问题不处理会扩散",
    "不要「私下说几句就完」——需要正式记录",
    "不要把「AI 工具使用」全盘否定——员工的 AI 工具能力（双轨之一）也要分开评估",
]:
    blocks.append(bullet(t))

blocks.append(divider())
blocks.append(h2("五类场景的边界判断（容易混的地方）"))
blocks.append({"type": "table", "headers": ["看起来像", "实际是", "区别"],
    "rows": [
        ["A 归因抗议", "C 漂移识别", "A 是争议评分；C 是管理者观察到落差"],
        ["C 漂移识别", "D 美化成果", "C 是无意识；D 是模糊化（介于 C 和 E 之间）"],
        ["D 美化成果", "E AI 品行", "D 是能力/模糊化；E 是品行/诚信"],
        ["B 方向迷失", "E AI 品行", "B 是真的情绪；E 是用「抵制 AI」作为偷懒借口"],
    ], "col_widths": [0.25, 0.25, 0.50]})
blocks.append(callout("判定模糊时：回到「具体可观察行为」——是情绪？能力？还是品行？有意识还是无意识？"))

blocks.append(divider())
blocks.append(h2("使用提醒"))
for t in [
    "第一句话是最重要的——员工在前 30 秒判断「这次谈话是不是又是走过场」。第一句话定调。",
    "类型 A 和 C 最常被误判——A（争议）容易被当成「员工不配合」；C（漂移）容易被当成「员工没努力」。看清楚再动。",
    "B 型（方向迷失）需要专门时间——不要塞在「顺便聊聊」。给 10—15 分钟，承认这种情绪。",
    "D 和 E 的分界是「有意识 vs 无意识」——多次观察 + 直接问「你怎么想到的」是判断依据。",
    "每类场景最后都接发展对话——评估面谈不要停在「指出问题」，要给方向。",
]:
    blocks.append(numbered(t))
blocks.append(body("<b>配套使用：</b>F3（四步面谈法） / F4（归因问题） / F5（四原则话术） / F7（发展对话） / F8（双轨评估） / F9（缺口判断）。"))

with open(PATH, "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print(f"Appended F5+F6, total blocks: {len(blocks)}")
