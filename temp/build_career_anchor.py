#!/usr/bin/env python3
"""
Build 01_职业锚自测.xlsx - Career Anchor Assessment
4 sheets: 填答 / 结果 / 题库 / 解读库
"""

import xml.etree.ElementTree as ET
import os
import zipfile
import shutil

# ── Paths ──────────────────────────────────────────────────────────────────────
OUT_DIR = "/tmp/xlsx_work_01"
OUT_FILE = "/d/新课开发/测评表单/新员工10大测评/01_职业锚自测.xlsx"

# ── Constants ──────────────────────────────────────────────────────────────────
NS = "http://schemas.openxmlformats.org/spreadsheetml/2006/main"
NS_R = "http://schemas.openxmlformats.org/officeDocument/2006/relationships"
NS_PKG = "http://schemas.openxmlformats.org/package/2006/content-types"
NS_REL = "http://schemas.openxmlformats.org/package/2006/relationships"
NS_AC = "http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"

COLORS = {
    "blue":   "000000FF",   # input
    "black":  "00000000",   # formula / label
    "green":  "00008000",   # cross-sheet
    "red":    "00FF0000",   # external
    "white":  "FFFFFFFF",
}

ANCHORS = [
    ("TF", "技术/职能型",    "Technical/Functional"),
    ("GM", "管理型",          "General Manager"),
    ("AU", "自主/独立型",      "Autonomy/Independence"),
    ("SE", "安全/稳定型",      "Security/Stability"),
    ("EC", "创业创造型",       "Entrepreneurial/Creativity"),
    ("SV", "服务奉献型",       "Service/Dedicated to Others"),
    ("CH", "纯粹挑战型",       "Pure Challenge"),
    ("LS", "生活方式型",       "Lifestyle"),
]

# 40 questions — each tuple: (anchor_key, question_text)
QUESTIONS = [
    # TF — 技术/职能型 (Q1–Q5)
    ("TF", "我希望在某个专业领域成为公认的顶尖专家，哪怕这意味着我不能带团队。"),
    ("TF", "我愿意拒绝晋升到管理层，因为做管理意味着我要花时间在我不擅长的领域。"),
    ("TF", "我找工作时最看重的条件是：能否持续学习和深化我的专业技能。"),
    ("TF", "我宁愿在一个专业团队里做独立贡献者，也不愿做一个管理他人的经理。"),
    ("TF", "能够不断接触复杂、新颖的技术问题对我来说比高薪更重要。"),
    # GM — 管理型 (Q6–Q10)
    ("GM", "我渴望有机会整合和协调不同资源，推动重大决策并承担相应责任。"),
    ("GM", "能够在组织中影响他人、带领团队达成目标，是我最重要的职业追求。"),
    ("GM", "我享受解决涉及多方利益的复杂问题，并从中获得成就感。"),
    ("GM", "我希望在职业生涯中不断晋升到更高的管理岗位。"),
    ("GM", "做一名全面管理者，比成为某一领域的专家更能实现我的价值。"),
    # AU — 自主/独立型 (Q11–Q15)
    ("AU", "我最理想的工作方式是：自己设定目标，自己决定采用什么方法。"),
    ("AU", "如果晋升意味着要放弃自主权，我宁愿留在现有岗位。"),
    ("AU", "能够按照自己认为最好的方式开展工作，对我至关重要。"),
    ("AU", "我宁愿做自由职业者或合同工，也不愿在大公司做循规蹈矩的工作。"),
    ("AU", "组织的规则和流程不应该限制我实现目标的方式。"),
    # SE — 安全/稳定型 (Q16–Q20)
    ("SE", "我偏好有明确长期合同保障的工作，哪怕薪酬不是最高的。"),
    ("SE", "公司的稳定性和财务健康状况是我择业时最重要的考量。"),
    ("SE", "我倾向于选择已建立完善制度的大型组织，而非高风险的创业公司。"),
    ("SE", "能够清楚地看到未来3–5年的职业发展路径对我来说很有吸引力。"),
    ("SE", "长期保障和福利（如退休金、医疗保险）是我不愿意放弃的。"),
    # EC — 创业创造型 (Q21–Q25)
    ("EC", "我渴望有机会创造属于我自己的东西——产品、服务或事业。"),
    ("EC", "如果有好的商业想法，我愿意承担财务风险去创业。"),
    ("EC", "能够不断推陈出新、建立新项目，比维持现有业务更让我兴奋。"),
    ("EC", "我希望我的工作成果能够打上我个人的烙印，而不只是组织的一部分。"),
    ("EC", "独立自主地创建和运营一件事，比在大组织中按指令执行更吸引我。"),
    # SV — 服务奉献型 (Q26–Q30)
    ("SV", "帮助他人、改善他人的生活，是我职业选择的核心驱动力。"),
    ("SV", "我需要在我的工作中看到对他人的积极影响，否则我会感到空虚。"),
    ("SV", "参与能够真正解决社会问题或帮助弱势群体的项目，对我最有意义。"),
    ("SV", "即便薪酬较低，我也愿意选择有意义的工作，而非纯商业化的职业。"),
    ("SV", "我拒绝参与任何以牺牲他人利益为代价来获取利润的工作。"),
    # CH — 纯粹挑战型 (Q31–Q35)
    ("CH", "我喜欢解决越来越难的问题，攻克难关是我工作的最大动力。"),
    ("CH", "我主动寻找竞争激烈的环境，从中获得成长和成就感。"),
    ("CH", "面对几乎不可能完成的任务，我反而更兴奋、更投入。"),
    ("CH", "我需要持续面对新的、不同的挑战，否则我会感到无聊。"),
    ("CH", "我喜欢把竞争和对抗视为激发潜力的机会，而非威胁。"),
    # LS — 生活方式型 (Q36–Q40)
    ("LS", "工作与生活的平衡比职级晋升对我更重要。"),
    ("LS", "我需要弹性工作时间来照顾家庭和个人生活。"),
    ("LS", "我宁愿薪酬稳定、不需要加班，也不愿接受高薪但高强度的工作。"),
    ("LS", "工作不能过度侵占我的个人时间和生活空间。"),
    ("LS", "能够有充足时间培养工作以外的兴趣爱好，是我理想生活的必要条件。"),
]

# Interpretation text per anchor (for 解读库 sheet)
INTERPRETATIONS = {
    "TF": {
        "name": "技术/职能型",
        "desc": "你是专业深度驱动型。你最在意的是能否在某个专业领域持续深耕、成为专家。管理型晋升对你吸引力有限，因为那意味着要把时间分给不擅长的领域。你需要不断接触核心专业任务，否则容易产生"专家困境"——专业积累到一定程度后无处突破。",
        "high": "入职第一周就开始研究公司技术栈优缺点；主动向主管请教专业问题；对非专业领域的工作明确说"这不是我擅长的"；对重复行政工作有强烈抵触。",
        "low": "对专业深度没有执念，更关注职位级别和晋升通道；愿意接受跨领域任务视为拓宽视野。",
        "risk": "技术/职能型新员工最常见的职业陷阱是"专业深井"——因为太热爱专业而拒绝承担管理职责，导致职业天花板提前降临。",
        "support": "入职第30天与主管探讨专业发展路径；争取参与核心专业项目的机会。",
    },
    "GM": {
        "name": "管理型",
        "desc": "你是权力与影响驱动型。你本能地关注组织架构、汇报关系和决策链条，擅长识别组织的权力流向。你是天生的组织感知者，但在还没建立专业可信度之前就急于进入管理角色，容易被组织视为"德不配位"。",
        "high": "主动推动会议结论落地；自发承担团队协调工作；在讨论中关注"谁说了算"的结构性问题。",
        "low": "对管理权限没有强烈渴望；更愿意专注执行而非统筹。",
        "risk": "时机错配风险：在专业积累不足时过早转向管理，会在与下属的专业对话中失去底气。",
        "support": "入职第30天职业发展对话，讨论管理能力积累路径；争取带团队的机会。",
    },
    "AU": {
        "name": "自主/独立型",
        "desc": "你是自由驱动型。你需要清晰的边界和足够的空间——给你一个目标，然后放手让你自己找路，反而比步步紧盯更能激发你的创造力。你对"必须按特定流程做事""每天汇报进度"有本能抵触。",
        "high": "抵触详细的操作指令；对弹性工作有强烈偏好；倾向于拒绝重复性的标准化工作。",
        "low": "对工作方式没有强烈个人偏好；愿意接受标准化流程。",
        "risk": "流程与自由的永恒矛盾：在高度管控型组织中，自主型员工往往在入职6–12个月内产生离职念头。",
        "support": "入职第30天与主管对齐期望，明确哪些领域有自主空间；探索弹性工作制的可能性。",
    },
    "SE": {
        "name": "安全/稳定型",
        "desc": "你是可预期性驱动型。你最关心的问题是"这个公司能待多久"——你会主动了解公司的财务状况、行业地位，关注自己所在的业务线是核心还是边缘。你偏好写在合同里的明确承诺，而非"市场水平的奖金"这类不确定预期。",
        "high": "入职第一周就研究公司行业地位和财务稳健性；倾向选择核心业务而非创新业务。",
        "low": "对工作的稳定性没有强烈偏好；愿意在创业公司或高波动环境中工作。",
        "risk": "稳定性幻觉：在快速变化的行业中，越追求稳定，越容易被动淘汰。长期在提供"终身稳定"的环境中待得越久，转型成本越高。",
        "support": "清晰说明公司战略方向和稳定性保障；帮助建立"成长型稳定"的认知。",
    },
    "EC": {
        "name": "创业创造型",
        "desc": "你是创造与烙印驱动型。当一个想法或项目不属于你自己的时候，你很难对别人的事业产生真正的热情。你需要看到自己的贡献能改变什么、创造什么、打上什么烙印。",
        "high": "主动提出新想法；在现有流程和体系中寻找改善空间；对"打上自己名字"的成果有强烈渴望。",
        "low": "对创造新东西没有强烈冲动；满足于执行既定任务。",
        "risk": "创新vs稳定结构性矛盾：企业越大越需要流程和秩序，创业型员工的驱动力与标准化流程化相悖。",
        "support": "鼓励提出一个具体的改善建议并追踪落地；争取从0到1的创新型项目机会。",
    },
    "SV": {
        "name": "服务奉献型",
        "desc": "你是助人与价值驱动型。你选择工作的核心标准是"这个工作能帮到谁"——你需要时不时感知到自己的工作对他人的积极影响，否则会陷入"工具人"式的空虚感。",
        "high": "主动帮助遇到困难的同事；对客户/用户问题有强烈的解决冲动；拒绝参与任何对客户有害的项目。",
        "low": "对帮助他人没有特别的驱动力；工作动力来自个人成就而非他人认可。",
        "risk": "自我耗竭（Burnout）：因为太在意他人需求而忽视自己的边界，在客户-facing岗位中风险尤为突出。",
        "support": "强化工作与用户/社会价值的连接叙事；帮助学会说"不"，避免过度耗竭。",
    },
    "CH": {
        "name": "纯粹挑战型",
        "desc": "你是困难驱动型。你选择工作的核心标准是：这里有没有足够难的挑战让你成长。你对重复性的、"一眼看到头"的工作有本能排斥，会主动寻找困难情境并享受攻克难题的过程。",
        "high": "主动请缨困难任务；对容易的工作迅速失去兴趣；享受辩论和观点对抗。",
        "low": "对挑战没有强烈渴望；满足于稳定可预期的工作。",
        "risk": "无摩擦感带来的无聊和流失：当组织无法持续提供足够难度的挑战时，容易产生无聊感并通过换工作来寻找新的刺激。",
        "support": "确保至少有30%的工作内容具有适度挑战性；提供跨领域或跨业务线的工作体验。",
    },
    "LS": {
        "name": "生活方式型",
        "desc": "你是平衡驱动型。你的核心诉求是工作和生活要有边界——你拒绝以牺牲生活为代价来换取职业成就。你会主动了解公司的加班文化、带薪休假政策、远程工作政策，在入职前就会评估工作与生活的平衡性。",
        "high": "在入职前就详细了解加班政策；准时下班不被影响；对"工作狂"文化有强烈抵触。",
        "low": "愿意为工作牺牲个人时间；对工作时长没有强烈边界感。",
        "risk": "职业高原感：在许多行业，高强度工作往往与快速晋升耦合，生活方式型员工如果不能接受这一点，职业发展可能停滞。",
        "support": "如实说明工作节奏期望，避免信息不对称；探索弹性工作制、压缩工作周等灵活安排。",
    },
}


# ── Helper: build column letter ─────────────────────────────────────────────
def col_letter(n):
    """1-based column number → Excel letter."""
    result = ""
    while n > 0:
        n, rem = divmod(n - 1, 26)
        result = chr(65 + rem) + result
    return result


# ── Shared Strings ───────────────────────────────────────────────────────────
def build_shared_strings():
    """Return (xml_string, index_map) for all text in the workbook."""
    strings = []

    def add(s):
        idx = len(strings)
        strings.append(s)
        return idx

    # ── Sheet 1: 填答 ────────────────────────────────────────────────────────
    add("职业锚自测")
    add("请根据每句话与您真实想法的符合程度，在1–6之间选择（1=完全不重要，6=极其重要）")
    add("题号")
    add("题目内容")
    add("1")
    add("2")
    add("3")
    add("4")
    add("5")
    add("6")
    add("维度")

    for q_key, q_text in QUESTIONS:
        add(q_text)          # question text

    # ── Sheet 2: 结果 ────────────────────────────────────────────────────────
    add("维度")
    add("均分")
    add("等级")
    add("主锚")
    add("辅锚")
    add("职业锚深度解读报告")
    add("您的职业锚画像")
    add("主锚（第一职业驱动力）")
    add("辅锚（第二职业驱动力）")
    add("维度得分汇总")
    add("职业锚类型")
    add("综合解读")
    add("关键发现")
    add("管理提示")
    add("支持策略")
    add("以下为AVERAGEIF公式引用填答数据，自动计算")

    for key, cn, en in ANCHORS:
        add(cn)

    add("【高分特征】")
    add("【低分特征】")
    add("【风险与盲区】")
    add("【支持策略】")

    # Add interpretation details
    for key, info in INTERPRETATIONS.items():
        add(info["desc"])
        add(info["high"])
        add(info["low"])
        add(info["risk"])
        add(info["support"])

    # ── Sheet 3: 题库 ────────────────────────────────────────────────────────
    add("题号")
    add("题目内容")
    add("选项A")
    add("选项B")
    add("选项C")
    add("选项D")
    add("选项E")
    add("选项F")
    add("维度标签")
    add("计分规则")

    for i, (q_key, q_text) in enumerate(QUESTIONS, 1):
        add(f"Q{i}")
        add(q_text)
        add("完全不重要（1分）")
        add("比较不重要（2分）")
        add("有点不重要（3分）")
        add("有点重要（4分）")
        add("比较重要（5分）")
        add("极其重要（6分）")
        for key, cn, en in ANCHORS:
            if key == q_key:
                add(cn)
                break
        add("6点量表，各选项分值1–6；求5题均值")

    # ── Sheet 4: 解读库 ──────────────────────────────────────────────────────
    add("维度")
    add("均分范围")
    add("解读标题")
    add("详细解读")
    add("高分行为特征")
    add("低分行为特征")
    add("风险与盲区")
    add("支持策略")

    for key, info in INTERPRETATIONS.items():
        add(info["name"])
        add("4.5–6.0")
        add(f"【{info['name']}】职业锚解读")
        add(info["desc"])
        add(info["high"])
        add(info["low"])
        add(info["risk"])
        add(info["support"])

    # Pack into XML
    items = []
    for s in strings:
        escaped = s.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")
        items.append(f"<si><t>{escaped}</t></si>")

    xml = f"""<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<sst xmlns="{NS}" count="{len(strings)}" uniqueCount="{len(strings)}">
{chr(10).join(items)}
</sst>"""
    return xml, strings


# ── Styles ───────────────────────────────────────────────────────────────────
def build_styles():
    """Minimal styles — 13 slots from template + 1 extra for wrap-text."""
    # Font: 微软雅黑
    FONTS = f"""<fonts xmlns="{NS}" count="6">
  <font><sz val="11"/><name val="微软雅黑"/><color rgb="00000000"/></font>
  <font><sz val="11"/><name val="微软雅黑"/><color rgb="000000FF"/></font>
  <font><sz val="11"/><name val="微软雅黑"/><color rgb="00008000"/></font>
  <font><b/><sz val="14"/><name val="微软雅黑"/><color rgb="00000000"/></font>
  <font><b/><sz val="11"/><name val="微软雅黑"/><color rgb="00000000"/></font>
  <font><sz val="10"/><name val="微软雅黑"/><color rgb="00000000"/></font>
</fonts>"""

    NUMS = f"""<numFmts xmlns="{NS}" count="4">
  <numFmt numFmtId="164" formatCode="$#,##0;($#,##0);&quot;-&quot;"/>
  <numFmt numFmtId="165" formatCode="0.0%"/>
  <numFmt numFmtId="166" formatCode="0.0&quot;分&quot;"/>
  <numFmt numFmtId="167" formatCode="#,##0"/>
</numFmts>"""

    FILLS = f"""<fills xmlns="{NS}" count="3">
  <fill><patternFill patternType="none"/></fill>
  <fill><patternFill patternType="gray125"/></fill>
  <fill><patternFill patternType="solid"><fgColor rgb="00D3D3D3"/></patternFill></fill>
</fills>"""

    BORDERS = f"""<borders xmlns="{NS}" count="1">
  <border><left/><right/><top/><bottom/><diagonal/></border>
</borders>"""

    # cellXfs: index 0-12 from template + index 13 for wrap-text header
    # 0: default, 1: blue (input), 2: black formula, 3: green cross-sheet
    # 4: bold header, 5: blue currency, 6: black currency formula
    # 7: blue %, 8: black %, 9: blue integer, 10: black integer formula
    # 11: year, 12: key assumption (blue+yellow)
    # 13: wrap-text header
    XF = f"""<cellXfs xmlns="{NS}" count="14">
  <xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/>
  <xf numFmtId="0" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1"/>
  <xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0" applyFont="1"/>
  <xf numFmtId="0" fontId="2" fillId="0" borderId="0" xfId="0" applyFont="1"/>
  <xf numFmtId="0" fontId="4" fillId="0" borderId="0" xfId="0" applyFont="1"/>
  <xf numFmtId="164" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>
  <xf numFmtId="164" fontId="0" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>
  <xf numFmtId="165" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>
  <xf numFmtId="165" fontId="0" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>
  <xf numFmtId="167" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>
  <xf numFmtId="167" fontId="0" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>
  <xf numFmtId="1" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>
  <xf numFmtId="0" fontId="1" fillId="2" borderId="0" xfId="0" applyFont="1" applyFill="1"/>
  <xf numFmtId="0" fontId="4" fillId="0" borderId="0" xfId="0" applyFont="1"><alignment wrapText="1"/></xf>
</cellXfs>"""

    return f"""<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<styleSheet xmlns="{NS}">
{NUMS}
{FONTS}
{FILLS}
{BORDERS}
{XF}
</styleSheet>"""


# ── Sheet Builders ─────────────────────────────────────────────────────────────
def cell_s(s_idx, value=None, formula=None, t="n", inline=False):
    """Build a <c> element. Returns XML string."""
    if inline:
        c = f'<c r="{value[0]}" s="{s_idx}" t="inlineStr"><is><t>{value[1]}</t></is></c>'
        return c
    if formula:
        v = f'<f>{formula}</f><v></v>'
        c = f'<c r="{formula[0]}" s="{s_idx}">{v}</c>'
        return c
    if value is None:
        return f'<c r="XXX" s="{s_idx}"/>'
    if t == "s":
        return f'<c r="{value[0]}" s="{s_idx}" t="s"><v>{value[1]}</v></c>'
    elif t == "n":
        return f'<c r="{value[0]}" s="{s_idx}"><v>{value[1]}</v></c>'
    elif t == "b":
        return f'<c r="{value[0]}" s="{s_idx}" t="b"><v>{value[1]}</v></c>'
    return f'<c r="{value[0]}" s="{s_idx}"><v>{value[1]}</v></c>'


def build_sheet1(ss_idx):
    """
    填答 sheet:
    Row 1: 标题 (merged A1:L1)
    Row 2: 说明 (merged A2:L2)
    Row 3: 表头
    Row 4-43: 40道题
    Cols: A=题号 B=题目内容 C–H=选项1–6 I=维度
    """
    lines = []

    # Col widths
    lines.append(f"""<cols xmlns="{NS}">
  <col min="1" max="1" width="8" customWidth="1"/>
  <col min="2" max="2" width="55" customWidth="1"/>
  <col min="3" max="8" width="10" customWidth="1"/>
  <col min="9" max="9" width="14" customWidth="1"/>
</cols>""")

    # Freeze panes at row 4
    lines.append(f"""<sheetViews xmlns="{NS}">
  <sheetView workbookViewId="0">
    <pane ySplit="3" topLeftCell="A4" activePane="bottomLeft" state="frozen"/>
  </sheetView>
</sheetViews>""")

    sd = ['<sheetData xmlns="{NS}">']

    # Row 1: title
    sd.append(f'<row r="1" ht="30" customHeight="1">')
    sd.append(f'<c r="A1" s="13"><f>IF(1=1,"职业锚自测","")</f><v></v></c>')  # style 13 = bold wrap
    sd.append('</row>')

    # Row 2: instruction
    sd.append('<row r="2" ht="20" customHeight="1">')
    sd.append('<c r="A2" s="0"><f>IF(1=1,"请根据每句话与您真实想法的符合程度，在1–6之间选择（1=完全不重要，6=极其重要）","")</f><v></v></c>')
    sd.append('</row>')

    # Row 3: headers
    sd.append('<row r="3" ht="20" customHeight="1">')
    sd.append(f'<c r="A3" s="4"><v>0</v></c>')  # 题号
    sd.append(f'<c r="B3" s="4"><v>1</v></c>')  # 题目内容
    sd.append(f'<c r="C3" s="4"><v>2</v></c>')  # 1
    sd.append(f'<c r="D3" s="4"><v>3</v></c>')  # 2
    sd.append(f'<c r="E3" s="4"><v>4</v></c>')  # 3
    sd.append(f'<c r="F3" s="4"><v>5</v></c>')  # 4
    sd.append(f'<c r="G3" s="4"><v>6</v></c>')  # 5
    sd.append(f'<c r="H3" s="4"><v>7</v></c>')  # 6
    sd.append(f'<c r="I3" s="4"><v>8</v></c>')  # 维度
    sd.append('</row>')

    # Rows 4-43: questions
    # Strings indices for questions start at ss_idx["Q1"]
    q_base = ss_idx["Q1"]  # index of first question text

    for i, (q_key, q_text) in enumerate(QUESTIONS):
        row = i + 4
        q_idx = q_base + i
        sd.append(f'<row r="{row}" ht="22" customHeight="1">')
        sd.append(f'<c r="A{row}" s="9"><v>{i+1}</v></c>')  # question number
        sd.append(f'<c r="B{row}" s="0" t="s"><v>{q_idx}</v></c>')  # question text
        # Options C-H: data validation via dropdown (1-6)
        for col in ["C", "D", "E", "F", "G", "H"]:
            sd.append(f'<c r="{col}{row}" s="1"><v></v></c>')  # blue = input, empty
        # Dimension column I
        for ki, (k, cn, en) in enumerate(ANCHORS):
            if k == q_key:
                sd.append(f'<c r="I{row}" s="0"><v>{ki + 24}</v></c>')  # 24 = first anchor name index
                break
        sd.append('</row>')

    sd.append('</sheetData>')

    # Data validation (dropdown 1-6) for columns C-H rows 4-43
    dvs = f"""<dataValidations xmlns="{NS}" count="6">"""
    for col in ["C", "D", "E", "F", "G", "H"]:
        dvs += f"""
  <dataValidation type="list" allowBlank="1" showInputMessage="1" prompt="请选择1-6"
    promptTitle="评分" showErrorMessage="1" error="请输入1-6之间的整数"
    errorTitle="输入无效" sqref="{col}4:{col}43">
    <formula1>1,2,3,4,5,6</formula1>
  </dataValidation>"""
    dvs += """
</dataValidations>"""

    lines.extend(sd)
    lines.append(dvs)

    return f"""<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="{NS}" xmlns:r="{NS_R}" xmlns:x14ac="{NS_AC}">
{chr(10).join(lines)}
<pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>"""


def build_sheet2(ss_idx):
    """
    结果 sheet:
    Row 1: 标题
    Row 2-9: 维度得分 (AVERAGEIF from 填答 sheet)
    Row 10: 主锚/辅锚
    Row 11-18: 解读
    """
    lines = []

    lines.append(f"""<cols xmlns="{NS}">
  <col min="1" max="1" width="16" customWidth="1"/>
  <col min="2" max="2" width="12" customWidth="1"/>
  <col min="3" max="3" width="20" customWidth="1"/>
  <col min="4" max="4" width="50" customWidth="1"/>
</cols>""")

    lines.append(f"""<sheetViews xmlns="{NS}">
  <sheetView workbookViewId="0">
    <pane ySplit="1" topLeftCell="A2" activePane="bottomLeft" state="frozen"/>
  </sheetView>
</sheetViews>""")

    sd = ['<sheetData xmlns="{NS}">']

    # Row 1: title
    sd.append('<row r="1" ht="30" customHeight="1">')
    sd.append('<c r="A1" s="4"><v>12</v></c>')  # 职业锚深度解读报告
    sd.append('</row>')

    # Row 2: score table header
    sd.append('<row r="2" ht="22" customHeight="1">')
    sd.append(f'<c r="A2" s="4"><v>9</v></c>')  # 维度
    sd.append(f'<c r="B2" s="4"><v>10</v></c>')  # 均分
    sd.append(f'<c r="C2" s="4"><v>11</v></c>')  # 等级
    sd.append('</row>')

    # Rows 3-10: dimension scores (one AVERAGEIF per anchor)
    # anchor_key -> row offset: TF=3, GM=4, AU=5, SE=6, EC=7, SV=8, CH=9, LS=10
    for row_idx, (q_key, cn, en) in enumerate(ANCHORS):
        row = row_idx + 3
        # Find which column this anchor's questions are in填答 sheet
        # Questions 1-5=TF, 6-10=GM, 11-15=AU, 16-20=SE, 21-25=EC, 26-30=SV, 31-35=CH, 36-40=LS
        q_start = row_idx * 5 + 4  # row 4, 9, 14, 19, 24, 29, 34, 39
        q_end = q_start + 4

        # AVERAGEIF on column I for this anchor
        # Average score across C-H columns (we need to average all responses)
        # Simpler: average individual option columns C,D,E,F,G,H for this anchor's questions
        # Since each question gets ONE answer in one of C-H, we use AVERAGE of C:H rows
        # We'll use the dimension column I to identify anchor, then average C:H
        # Actually: average the selected options per question. Each Q row has one value in C:H.
        # A simpler formula: for each question in this anchor, average C+D+E+F+G+H (only one is filled)
        # We'll use AVERAGEIF on the score column. Score is in whichever of C-H was selected.
        # Actually we can just use the I (dimension label) and a helper.
        # For simplicity, let's compute: for each question Qn, the score = SUM(CQn:HQn) since only one cell has value.
        # But that's complex. Better: use AVERAGEIF on a helper.
        # Let's use individual column averages per anchor.

        # Simpler formula approach: average scores from each question in the anchor
        # We use INDEX/MATCH on 题库 sheet to find which option columns
        # For now, let's use a direct AVERAGE formula for each question row
        # AVERAGE(C{q_start}, D{q_start}, ... H{q_start}) would give wrong result

        # Better approach: The score for each question is the column index of the selected option
        # We use: SUMPRODUCT((C{q_start}:H{q_start})*(C{q_start}:H{q_start}<>"")) but need column position

        # Let's simplify: use a named range or just do 5 separate IFERROR AVERAGEIF
        # Since each Q row has ONE response, we use AVERAGE of the 5 question rows' responses
        # Response is in whichever of C-H was selected. Use MAX of C-H (since non-selected=0 but we use 1-6 so we need ISNUMBER check)

        # Actually let's just use: for each anchor, average across all 5 question rows
        # =AVERAGE(IF(ISNUMBER(C4:H4),IF(C4:H4<>0,COLUMN(C4:H4)-COLUMN(C3),NA()),NA()), ...) — too complex
        # Simple working approach: since user inputs 1-6 in a dropdown, use:
        # =AVERAGE(SUMIF(C4:C4,{"1","2","3","4","5","6"},{"1","2","3","4","5","6"})*1, ...) — also wrong

        # Simplest correct formula for this structure:
        # Since each question row has ONE value among C-H (user fills exactly one), we average the 5 question rows
        # =AVERAGE(IF(ISNUMBER(C4),C4,IF(ISNUMBER(D4),D4,IF(ISNUMBER(E4),E4,IF(ISNUMBER(F4),F4,IF(ISNUMBER(G4),G4,H4))))), ...)
        # Too verbose. Better: use SUMPRODUCT to get column index * value.
        # =SUMPRODUCT(MAX((ISNUMBER(C4:H4))*COLUMN(C4:H4)*(C4:H4)))/AVERAGE(...)

        # Let me use a working but slightly indirect approach:
        # Since dropdown values are 1-6, and placed in one of C-H, we can use:
        # For a question row n: score = SUMPRODUCT((ISNUMBER(Cn:Hn))*COLUMN(Cn:Hn)*(C4:H4)) / 100 — this divides by 100 which is wrong
        # Let's use: SUMPRODUCT((ISNUMBER(C4:H4))*COLUMN(C4:H4)*(C4:H4)) / SUMPRODUCT((ISNUMBER(C4:H4))*COLUMN(C4:H4))

        # This is getting complex. Let me use a simpler but practical formula:
        # Each anchor: AVERAGE of the 5 question row AVERAGEs
        # Each row AVERAGE: average across C-H (only one has value, so average = the actual value since others are empty)
        # Empty cell in AVERAGE is ignored. So: =AVERAGE(C4,D4,E4,F4,G4,H4) works!
        # AVERAGE ignores text/numbers, but empty cells are ignored in AVERAGE.
        # So for anchor TF (Q1-Q5): =AVERAGE(AVERAGE(C4,D4,E4,F4,G4,H4), AVERAGE(C5,D5,E5,F5,G5,H5), ...)
        # We'll use this approach with nested AVERAGE

        col_formula_parts = []
        for r in range(q_start, q_end + 1):
            col_formula_parts.append(f"AVERAGE(C{r},D{r},E{r},F{r},G{r},H{r})")
        avg_formula = "=AVERAGE(" + ",".join(col_formula_parts) + ")"

        # Level formula
        level_formula = f'=IF(B{row}>=5.5,"★★★★★（极强）",IF(B{row}>=4.5,"★★★★☆（很强）",IF(B{row}>=3.5,"★★★☆☆（较强）",IF(B{row}>=2.5,"★★☆☆☆（一般）",IF(B{row}>=1.5,"★☆☆☆☆（较弱）","☆☆☆☆☆（弱）"))))'

        sd.append(f'<row r="{row}">')
        sd.append(f'<c r="A{row}" s="0"><v>{row_idx + 24}</v></c>')  # anchor name
        sd.append(f'<c r="B{row}" s="6"><f>{avg_formula[1:]}</f><v></v></c>')  # avg score
        sd.append(f'<c r="C{row}" s="0"><f>{level_formula[1:]}</f><v></v></c>')  # level
        sd.append('</row>')

    # Row 11: main anchor
    sd.append('<row r="11" ht="22" customHeight="1">')
    sd.append(f'<c r="A11" s="4"><v>13</v></c>')  # 主锚
    sd.append(f'<c r="B11" s="6"><f>INDEX(A3:A10,MATCH(MAX(B3:B10),B3:B10,0))</f><v></v></c>')
    sd.append('</row>')

    # Row 12: secondary anchor
    sd.append('<row r="12" ht="22" customHeight="1">')
    sd.append(f'<c r="A12" s="4"><v>14</v></c>')  # 辅锚
    sd.append(f'<c r="B12" s="6"><f>LARGE(B3:B10,2)</f><v></v></c>')
    sd.append('</row>')

    # Row 13: 职业锚类型
    sd.append('<row r="13" ht="22" customHeight="1">')
    sd.append(f'<c r="A13" s="4"><v>15</v></c>')  # 职业锚类型
    sd.append(f'<c r="B13" s="0"><f>INDEX(A3:A10,MATCH(MAX(B3:B10),B3:B10,0))</f><v></v></c>')
    sd.append('</row>')

    # Row 14: 综合解读 header
    sd.append('<row r="14" ht="22" customHeight="1">')
    sd.append(f'<c r="A14" s="4"><v>16</v></c>')  # 综合解读
    sd.append('</row>')

    # Rows 15-22: dimension interpretations
    interp_base = 50  # approximate index where interpretation starts
    sd.append(f'<c r="A15" s="0"><f>IFERROR(INDEX(题库!A:A,MATCH(A3,题库!G:G,0)+1),"")</f><v></v></c>')

    sd.append('</sheetData>')

    lines.extend(sd)
    return f"""<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="{NS}" xmlns:r="{NS_R}" xmlns:x14ac="{NS_AC}">
{chr(10).join(lines)}
<pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>"""


def build_sheet3(ss_idx):
    """
    题库 sheet:
    Row 1: headers
    Rows 2-41: 40 questions
    """
    lines = []

    lines.append(f"""<cols xmlns="{NS}">
  <col min="1" max="1" width="6" customWidth="1"/>
  <col min="2" max="2" width="55" customWidth="1"/>
  <col min="3" max="8" width="16" customWidth="1"/>
  <col min="9" max="9" width="14" customWidth="1"/>
  <col min="10" max="10" width="30" customWidth="1"/>
</cols>""")

    sd = ['<sheetData xmlns="{NS}">']

    # Row 1: headers
    sd.append('<row r="1" ht="22" customHeight="1">')
    sd.append(f'<c r="A1" s="4"><v>17</v></c>')  # 题号
    sd.append(f'<c r="B1" s="4"><v>18</v></c>')  # 题目内容
    sd.append(f'<c r="C1" s="4"><v>19</v></c>')  # A
    sd.append(f'<c r="D1" s="4"><v>20</v></c>')  # B
    sd.append(f'<c r="E1" s="4"><v>21</v></c>')  # C
    sd.append(f'<c r="F1" s="4"><v>22</v></c>')  # D
    sd.append(f'<c r="G1" s="4"><v>23</v></c>')  # E
    sd.append(f'<c r="H1" s="4"><v>24</v></c>')  # F
    sd.append(f'<c r="I1" s="4"><v>25</v></c>')  # 维度标签
    sd.append(f'<c r="J1" s="4"><v>26</v></c>')  # 计分规则
    sd.append('</row>')

    # Each question row
    q_start_idx = ss_idx.get("Q1", 37)  # start of question texts in shared strings
    # Actually we know: Q1 is at index 37 (after title+instruction+8 headers = 11, then 10 header cells = index 11-20 for headers, then questions start at 21)
    # Wait: shared strings indices we tracked: title=0, instruction=1, Q_num=2, Q_content=3, option_headers=4-9, dimension=10
    # That's 11 strings before questions. Questions start at index 11.

    # Q texts start at index 11 (since 0-10 are headers and instructions)
    q_text_start = 11

    # Dimension labels start at index 24 (after Q1-Q40 = 11-50, so dimension label Q1 = 51? No)
    # Let's just enumerate from 0 to 39
    for i, (q_key, q_text) in enumerate(QUESTIONS):
        row = i + 2
        qi = q_text_start + i  # question text index
        sd.append(f'<row r="{row}">')
        sd.append(f'<c r="A{row}" s="9"><v>{i+1}</v></c>')  # Q number
        sd.append(f'<c r="B{row}" s="0"><v>{qi}</v></c>')  # question text
        sd.append(f'<c r="C{row}" s="0"><v>{qi+40}</v></c>')  # A
        sd.append(f'<c r="D{row}" s="0"><v>{qi+41}</v></c>')  # B
        sd.append(f'<c r="E{row}" s="0"><v>{qi+42}</v></c>')  # C
        sd.append(f'<c r="F{row}" s="0"><v>{qi+43}</v></c>')  # D
        sd.append(f'<c r="G{row}" s="0"><v>{qi+44}</v></c>')  # E
        sd.append(f'<c r="H{row}" s="0"><v>{qi+45}</v></c>')  # F
        # Dimension label index
        for ki, (k, cn, en) in enumerate(ANCHORS):
            if k == q_key:
                dim_idx = 24 + ki
                break
        sd.append(f'<c r="I{row}" s="0"><v>{dim_idx}</v></c>')  # dimension label
        sd.append(f'<c r="J{row}" s="0"><v>{51 + i * 6 + 5}</v></c>')  # 计分规则 (approximate)
        sd.append('</row>')

    sd.append('</sheetData>')
    lines.extend(sd)

    return f"""<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="{NS}" xmlns:r="{NS_R}" xmlns:x14ac="{NS_AC}">
{chr(10).join(lines)}
<pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>"""


def build_sheet4(ss_idx):
    """
    解读库 sheet:
    Row 1: headers
    Rows 2-9: 8 anchors
    """
    lines = []

    lines.append(f"""<cols xmlns="{NS}">
  <col min="1" max="1" width="16" customWidth="1"/>
  <col min="2" max="2" width="14" customWidth="1"/>
  <col min="3" max="3" width="28" customWidth="1"/>
  <col min="4" max="4" width="60" customWidth="1"/>
  <col min="5" max="5" width="50" customWidth="1"/>
  <col min="6" max="6" width="50" customWidth="1"/>
  <col min="7" max="7" width="50" customWidth="1"/>
  <col min="8" max="8" width="50" customWidth="1"/>
</cols>""")

    sd = ['<sheetData xmlns="{NS}">']

    # Row 1: headers
    sd.append('<row r="1" ht="22" customHeight="1">')
    sd.append(f'<c r="A1" s="4"><v>52</v></c>')  # 维度
    sd.append(f'<c r="B1" s="4"><v>53</v></c>')  # 均分范围
    sd.append(f'<c r="C1" s="4"><v>54</v></c>')  # 解读标题
    sd.append(f'<c r="D1" s="4"><v>55</v></c>')  # 详细解读
    sd.append(f'<c r="E1" s="4"><v>56</v></c>')  # 高分行为特征
    sd.append(f'<c r="F1" s="4"><v>57</v></c>')  # 低分行为特征
    sd.append(f'<c r="G1" s="4"><v>58</v></c>')  # 风险与盲区
    sd.append(f'<c r="H1" s="4"><v>59</v></c>')  # 支持策略
    sd.append('</row>')

    # Interpretations start at index 60 in shared strings (after 52-59 for headers)
    # Actually we need to compute properly
    # Starting index after sheet3 questions: question strings 11-50 (40 questions)
    # + option A-F per question = 40*6 = 240 strings (indices 51-290 for options)
    # + dimension labels = 40 more = indices 291-330
    # + 计分规则 = 40 more
    # This is getting complex. Let me just use approximate hard-coded indices

    # Actually simpler: since I control the shared strings build order,
    # I know exactly what indices go where.
    # But I need to track all this. Let me instead use the build_shared_strings approach
    # and reference dynamically.

    # Let me redesign: build the shared strings list with clear index tracking
    # Then just reference them here.

    # For now, use offset calculations:
    # After sheet1 content (11 strings) + sheet2 content (26 strings) + sheet3 content (headers 10 + 40q*10cols = 410 strings)
    # That's 11+26+10+410 = 457... no that's not right either

    # Let me just build the sheet with hard-coded indices I compute carefully.
    # I'll track the shared string building separately.

    # Actually let me restructure the shared strings to have clear sections.
    # I'll build a map: name -> index

    # Let me compute the actual indices properly.
    # After reviewing the build_shared_strings function:
    # - Section 1 (sheet1 headers + instructions): 0-10
    #   title=0, instruction=1, headers A=2, B=3, C-H=4-9, dimension=10
    # - Section 2 (sheet2): 11-28
    #   (various labels)
    # - Section 3 (sheet3 questions): starts at some index
    # Let me just compute by counting

    # I'll write a quick function to count indices and return a map.

    sd.append('</sheetData>')
    lines.extend(sd)

    return f"""<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="{NS}" xmlns:r="{NS_R}" xmlns:x14ac="{NS_AC}">
{chr(10).join(lines)}
<pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>"""


def build_all_sheets_with_indices(ss_map):
    """Build all sheets using the shared string index map."""
    # Unpack indices
    ss = ss_map  # it's the full list

    # Now let me rebuild sheets with proper indices
    # The shared strings list (in build_shared_strings order):
    # Index 0: title (职业锚自测)
    # 1: instruction
    # 2: 题号
    # 3: 题目内容
    # 4-9: option headers 1-6
    # 10: 维度
    # 11-50: question texts Q1-Q40
    # 51: 维度
    # 52: 均分
    # 53: 等级
    # ... etc.

    # Let me just use a different approach: build the sheets with explicit index mapping

    pass


# ── Main build ────────────────────────────────────────────────────────────────
def main():
    # Build shared strings
    ss_xml, ss_list = build_shared_strings()
    print(f"Total shared strings: {len(ss_list)}")

    # Write shared strings
    os.makedirs(f"{OUT_DIR}/xl", exist_ok=True)
    with open(f"{OUT_DIR}/xl/sharedStrings.xml", "w", encoding="utf-8") as f:
        f.write(ss_xml)

    # Build styles
    styles_xml = build_styles()
    with open(f"{OUT_DIR}/xl/styles.xml", "w", encoding="utf-8") as f:
        f.write(styles_xml)

    # Build sheet 1 (填答)
    # Shared string indices for sheet1 headers
    ss_map = {}
    ss_map["title"] = 0
    ss_map["instruction"] = 1
    ss_map["q_num"] = 2
    ss_map["q_content"] = 3
    ss_map["opt_headers"] = list(range(4, 10))  # 4,5,6,7,8,9 for options 1-6
    ss_map["dimension"] = 10
    ss_map["questions"] = list(range(11, 51))  # Q1-Q40 at indices 11-50

    sheet1 = build_sheet1(ss_map)
    with open(f"{OUT_DIR}/xl/worksheets/sheet1.xml", "w", encoding="utf-8") as f:
        f.write(sheet1)

    # Build sheet 2 (结果)
    sheet2 = build_sheet2(ss_map)
    with open(f"{OUT_DIR}/xl/worksheets/sheet2.xml", "w", encoding="utf-8") as f:
        f.write(sheet2)

    # Build sheet 3 (题库)
    sheet3 = build_sheet3(ss_map)
    with open(f"{OUT_DIR}/xl/worksheets/sheet3.xml", "w", encoding="utf-8") as f:
        f.write(sheet3)

    # Build sheet 4 (解读库)
    sheet4_xml = build_sheet4(ss_map)
    with open(f"{OUT_DIR}/xl/worksheets/sheet4.xml", "w", encoding="utf-8") as f:
        f.write(sheet4_xml)

    # Update workbook.xml
    workbook_xml = f"""<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="{NS}" xmlns:r="{NS_R}"
  xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
  xmlns:xrmac="urn:microsoft-com:mac:vba"
  xmlns:x15="http://schemas.microsoft.com/office/spreadsheetml/2010/11/main">
  <fileVersion appName="xl" lastEdited="7" lowestEdited="7"/>
  <workbookPr defaultThemeVersion="166925"/>
  <bookViews>
    <workbookView xWindow="0" yWindow="0" windowWidth="20140" windowHeight="10960"/>
  </bookViews>
  <sheets>
    <sheet name="填答" sheetId="1" r:id="rId1"/>
    <sheet name="结果" sheetId="2" r:id="rId4"/>
    <sheet name="题库" sheetId="3" r:id="rId5"/>
    <sheet name="解读库" sheetId="4" r:id="rId6"/>
  </sheets>
  <calcPr calcId="191029"/>
</workbook>"""
    with open(f"{OUT_DIR}/xl/workbook.xml", "w", encoding="utf-8") as f:
        f.write(workbook_xml)

    # Update workbook.xml.rels
    rels_xml = f"""<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="{NS_REL}">
  <Relationship Id="rId1"
    Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet"
    Target="worksheets/sheet1.xml"/>
  <Relationship Id="rId2"
    Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles"
    Target="styles.xml"/>
  <Relationship Id="rId3"
    Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings"
    Target="sharedStrings.xml"/>
  <Relationship Id="rId4"
    Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet"
    Target="worksheets/sheet2.xml"/>
  <Relationship Id="rId5"
    Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet"
    Target="worksheets/sheet3.xml"/>
  <Relationship Id="rId6"
    Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet"
    Target="worksheets/sheet4.xml"/>
</Relationships>"""
    with open(f"{OUT_DIR}/xl/_rels/workbook.xml.rels", "w", encoding="utf-8") as f:
        f.write(rels_xml)

    # Update [Content_Types].xml
    ct_xml = f"""<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="{NS_PKG}">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/xl/workbook.xml"
    ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
  <Override PartName="/xl/worksheets/sheet1.xml"
    ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet2.xml"
    ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet3.xml"
    ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet4.xml"
    ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/styles.xml"
    ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>
  <Override PartName="/xl/sharedStrings.xml"
    ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/>
</Types>"""
    with open(f"{OUT_DIR}/[Content_Types].xml", "w", encoding="utf-8") as f:
        f.write(ct_xml)

    # Copy sheet1.xml to sheet2, sheet3, sheet4 (then we'll overwrite)
    for n in [2, 3, 4]:
        shutil.copy(f"{OUT_DIR}/xl/worksheets/sheet1.xml",
                    f"{OUT_DIR}/xl/worksheets/sheet{n}.xml")

    # Now overwrite with actual content
    sheet2 = build_sheet2({})
    with open(f"{OUT_DIR}/xl/worksheets/sheet2.xml", "w", encoding="utf-8") as f:
        f.write(sheet2)

    # Build sheet 3 with correct indices
    # Shared string index map for sheet 3:
    # - Headers (10): 题号=17, 题目内容=18, A=19, B=20, C=21, D=22, E=23, F=24, 维度标签=25, 计分规则=26
    # - Question texts: start at index 27 (after all previous strings)
    # Let me count: section1 (11) + section2 (26) + section3 questions (40*9 = 360? No 10 cols each)
    # Let me just compute by enumerating the actual strings

    # Build shared strings with a proper index map
    ss_entries = []

    def add_ss(s):
        idx = len(ss_entries)
        ss_entries.append(s)
        return idx

    # Section 1: sheet1
    idx_title = add_ss("职业锚自测")
    idx_instr = add_ss("请根据每句话与您真实想法的符合程度，在1–6之间选择（1=完全不重要，6=极其重要）")
    idx_q_num_h = add_ss("题号")
    idx_q_cont_h = add_ss("题目内容")
    idx_opt_h = [add_ss(str(i)) for i in range(1, 7)]
    idx_dim_h = add_ss("维度")
    idx_q_texts = [add_ss(q[1]) for q in QUESTIONS]  # Q1-Q40 texts

    # Section 2: sheet2
    idx_dim = add_ss("维度")
    idx_avg = add_ss("均分")
    idx_level = add_ss("等级")
    idx_main_anchor = add_ss("主锚")
    idx_sec_anchor = add_ss("辅锚")
    idx_report_title = add_ss("职业锚深度解读报告")
    idx_profile = add_ss("您的职业锚画像")
    idx_main_label = add_ss("主锚（第一职业驱动力）")
    idx_sec_label = add_ss("辅锚（第二职业驱动力）")
    idx_summary = add_ss("维度得分汇总")
    idx_type = add_ss("职业锚类型")
    idx_interp = add_ss("综合解读")
    idx_finding = add_ss("关键发现")
    idx_mgmt = add_ss("管理提示")
    idx_support = add_ss("支持策略")
    idx_auto_note = add_ss("以下为AVERAGEIF公式引用填答数据，自动计算")
    idx_anchor_names = [add_ss(cn) for _, cn, _ in ANCHORS]
    idx_high_lbl = add_ss("【高分特征】")
    idx_low_lbl = add_ss("【低分特征】")
    idx_risk_lbl = add_ss("【风险与盲区】")
    idx_sup_lbl = add_ss("【支持策略】")

    # Interpretation details
    idx_interp_details = {}
    for key, info in INTERPRETATIONS.items():
        idx_interp_details[key] = {
            "desc": add_ss(info["desc"]),
            "high": add_ss(info["high"]),
            "low": add_ss(info["low"]),
            "risk": add_ss(info["risk"]),
            "support": add_ss(info["support"]),
        }

    # Section 3: sheet3
    idx_q_num_h3 = add_ss("题号")
    idx_q_cont_h3 = add_ss("题目内容")
    idx_opt_h3 = [add_ss(f"选项{chr(65+i)}") for i in range(6)]  # A-F
    idx_dim_lbl_h3 = add_ss("维度标签")
    idx_rule_h3 = add_ss("计分规则")

    # Option labels for sheet3
    opt_labels = ["完全不重要（1分）", "比较不重要（2分）", "有点不重要（3分）",
                  "有点重要（4分）", "比较重要（5分）", "极其重要（6分）"]
    idx_opt_labels = [add_ss(l) for l in opt_labels]

    # Dimension labels for sheet3
    idx_dim_labels = {}
    for key, cn, _ in ANCHORS:
        idx_dim_labels[key] = add_ss(cn)

    idx_rule = add_ss("6点量表，各选项分值1–6；求5题均值")

    # Section 4: sheet4
    idx_dim_h4 = add_ss("维度")
    idx_range_h4 = add_ss("均分范围")
    idx_title_h4 = add_ss("解读标题")
    idx_detail_h4 = add_ss("详细解读")
    idx_high_h4 = add_ss("高分行为特征")
    idx_low_h4 = add_ss("低分行为特征")
    idx_risk_h4 = add_ss("风险与盲区")
    idx_sup_h4 = add_ss("支持策略")

    print(f"Total shared strings: {len(ss_entries)}")

    # Rebuild sharedStrings.xml
    items = []
    for s in ss_entries:
        escaped = s.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")
        items.append(f"<si><t>{escaped}</t></si>")
    ss_xml = f"""<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<sst xmlns="{NS}" count="{len(ss_entries)}" uniqueCount="{len(ss_entries)}">
{chr(10).join(items)}
</sst>"""
    with open(f"{OUT_DIR}/xl/sharedStrings.xml", "w", encoding="utf-8") as f:
        f.write(ss_xml)

    # Now rebuild sheets with correct indices

    # ── Sheet 1: 填答 ────────────────────────────────────────────────────────
    sd1 = [f'<cols xmlns="{NS}"><col min="1" max="1" width="8" customWidth="1"/><col min="2" max="2" width="55" customWidth="1"/><col min="3" max="8" width="10" customWidth="1"/><col min="9" max="9" width="14" customWidth="1"/></cols>']
    sd1.append(f'<sheetViews xmlns="{NS}"><sheetView workbookViewId="0"><pane ySplit="3" topLeftCell="A4" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>')
    sd1.append(f'<sheetData xmlns="{NS}">')

    sd1.append('<row r="1" ht="30" customHeight="1"><c r="A1" s="13"><f>IF(1=1,"职业锚自测","")</f><v></v></c></row>')
    sd1.append('<row r="2" ht="20" customHeight="1"><c r="A2" s="0"><f>IF(1=1,"请根据每句话与您真实想法的符合程度，在1–6之间选择（1=完全不重要，6=极其重要）","")</f><v></v></c></row>')
    sd1.append(f'<row r="3" ht="20" customHeight="1"><c r="A3" s="4"><v>{idx_q_num_h}</v></c><c r="B3" s="4"><v>{idx_q_cont_h}</v></c><c r="C3" s="4"><v>{idx_opt_h[0]}</v></c><c r="D3" s="4"><v>{idx_opt_h[1]}</v></c><c r="E3" s="4"><v>{idx_opt_h[2]}</v></c><c r="F3" s="4"><v>{idx_opt_h[3]}</v></c><c r="G3" s="4"><v>{idx_opt_h[4]}</v></c><c r="H3" s="4"><v>{idx_opt_h[5]}</v></c><c r="I3" s="4"><v>{idx_dim_h}</v></c></row>')

    for i, (q_key, q_text) in enumerate(QUESTIONS):
        row = i + 4
        sd1.append(f'<row r="{row}" ht="22" customHeight="1">')
        sd1.append(f'<c r="A{row}" s="9"><v>{i+1}</v></c>')
        sd1.append(f'<c r="B{row}" s="0" t="s"><v>{idx_q_texts[i]}</v></c>')
        for col in ["C", "D", "E", "F", "G", "H"]:
            sd1.append(f'<c r="{col}{row}" s="1"><v></v></c>')
        for ki, (k, cn, en) in enumerate(ANCHORS):
            if k == q_key:
                sd1.append(f'<c r="I{row}" s="0"><v>{idx_anchor_names[ki]}</v></c>')
                break
        sd1.append('</row>')
    sd1.append('</sheetData>')

    dvs = f'<dataValidations xmlns="{NS}" count="6">'
    for col in ["C", "D", "E", "F", "G", "H"]:
        dvs += f'<dataValidation type="list" allowBlank="1" showInputMessage="1" prompt="请选择1-6" promptTitle="评分" showErrorMessage="1" error="请输入1-6之间的整数" errorTitle="输入无效" sqref="{col}4:{col}43"><formula1>1,2,3,4,5,6</formula1></dataValidation>'
    dvs += '</dataValidations>'

    sheet1_xml = f"""<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="{NS}" xmlns:r="{NS_R}" xmlns:x14ac="{NS_AC}">
{chr(10).join(sd1)}
{dvs}
<pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>"""
    with open(f"{OUT_DIR}/xl/worksheets/sheet1.xml", "w", encoding="utf-8") as f:
        f.write(sheet1_xml)

    # ── Sheet 2: 结果 ────────────────────────────────────────────────────────
    sd2 = [f'<cols xmlns="{NS}"><col min="1" max="1" width="16" customWidth="1"/><col min="2" max="2" width="12" customWidth="1"/><col min="3" max="3" width="22" customWidth="1"/></cols>']
    sd2.append(f'<sheetViews xmlns="{NS}"><sheetView workbookViewId="0"><pane ySplit="1" topLeftCell="A2" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>')
    sd2.append('<sheetData xmlns="{NS}">')

    sd2.append(f'<row r="1" ht="30" customHeight="1"><c r="A1" s="4"><v>{idx_report_title}</v></c></row>')
    sd2.append(f'<row r="2" ht="22" customHeight="1"><c r="A2" s="4"><v>{idx_dim}</v></c><c r="B2" s="4"><v>{idx_avg}</v></c><c r="C2" s="4"><v>{idx_level}</v></c></row>')

    # Rows 3-10: dimension averages
    for row_idx, (q_key, cn, en) in enumerate(ANCHORS):
        row = row_idx + 3
        q_start = row_idx * 5 + 4
        q_end = q_start + 4
        col_parts = []
        for r in range(q_start, q_end + 1):
            col_parts.append(f"AVERAGE(C{r},D{r},E{r},F{r},G{r},H{r})")
        avg_formula = "AVERAGE(" + ",".join(col_parts) + ")"
        level_f = f'IF(B{row}>=5.5,"★★★★★（极强）",IF(B{row}>=4.5,"★★★★☆（很强）",IF(B{row}>=3.5,"★★★☆☆（较强）",IF(B{row}>=2.5,"★★☆☆☆（一般）",IF(B{row}>=1.5,"★☆☆☆☆（较弱）","☆☆☆☆☆（弱）"))))'

        sd2.append(f'<row r="{row}">')
        sd2.append(f'<c r="A{row}" s="0"><v>{idx_anchor_names[row_idx]}</v></c>')
        sd2.append(f'<c r="B{row}" s="6"><f>{avg_formula}</f><v></v></c>')
        sd2.append(f'<c r="C{row}" s="0"><f>{level_f}</f><v></v></c>')
        sd2.append('</row>')

    # Row 11: main anchor
    sd2.append(f'<row r="11" ht="22" customHeight="1"><c r="A11" s="4"><v>{idx_main_anchor}</v></c><c r="B11" s="6"><f>INDEX(A3:A10,MATCH(MAX(B3:B10),B3:B10,0))</f><v></v></c></row>')

    # Row 12: secondary anchor
    sd2.append(f'<row r="12" ht="22" customHeight="1"><c r="A12" s="4"><v>{idx_sec_anchor}</v></c><c r="B12" s="6"><f>LARGE(B3:B10,2)</f><v></v></c></row>')

    # Row 13: 职业锚类型
    sd2.append(f'<row r="13" ht="22" customHeight="1"><c r="A13" s="4"><v>{idx_type}</v></c><c r="B13" s="0"><f>INDEX(A3:A10,MATCH(MAX(B3:B10),B3:B10,0))</f><v></v></c></row>')

    # Row 14: blank
    sd2.append('<row r="14"><c r="A14" s="0"><v></v></c></row>')

    # Row 15: 综合解读
    sd2.append(f'<row r="15" ht="22" customHeight="1"><c r="A15" s="4"><v>{idx_interp}</v></c></row>')

    # Rows 16-23: interpretation details per anchor (using VLOOKUP on 解读库)
    for row_idx, (q_key, cn, en) in enumerate(ANCHORS):
        row = row_idx + 16
        # 解读库 sheet: anchor name is in column A, so we use MATCH to find the row
        # then INDEX to get the description from column D (detail)
        sd2.append(f'<row r="{row}" ht="60" customHeight="1">')
        sd2.append(f'<c r="A{row}" s="0"><v>{idx_anchor_names[row_idx]}</v></c>')
        # Description from 解读库
        sd2.append(f'<c r="B{row}" s="0"><f>IFERROR(INDEX(解读库!D:D,MATCH(A{row},解读库!A:A,0)),"")</f><v></v></c>')
        sd2.append(f'<c r="C{row}" s="0"><f>IFERROR(INDEX(解读库!E:E,MATCH(A{row},解读库!A:A,0)),"")</f><v></v></c>')
        sd2.append(f'<c r="D{row}" s="0"><f>IFERROR(INDEX(解读库!F:F,MATCH(A{row},解读库!A:A,0)),"")</f><v></v></c>')
        sd2.append(f'<c r="E{row}" s="0"><f>IFERROR(INDEX(解读库!G:G,MATCH(A{row},解读库!A:A,0)),"")</f><v></v></c>')
        sd2.append(f'<c r="F{row}" s="0"><f>IFERROR(INDEX(解读库!H:H,MATCH(A{row},解读库!A:A,0)),"")</f><v></v></c>')
        sd2.append('</row>')

    sd2.append('</sheetData>')

    sheet2_xml = f"""<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="{NS}" xmlns:r="{NS_R}" xmlns:x14ac="{NS_AC}">
{chr(10).join(sd2)}
<pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>"""
    with open(f"{OUT_DIR}/xl/worksheets/sheet2.xml", "w", encoding="utf-8") as f:
        f.write(sheet2_xml)

    # ── Sheet 3: 题库 ────────────────────────────────────────────────────────
    sd3 = [f'<cols xmlns="{NS}"><col min="1" max="1" width="6" customWidth="1"/><col min="2" max="2" width="55" customWidth="1"/><col min="3" max="8" width="18" customWidth="1"/><col min="9" max="9" width="14" customWidth="1"/><col min="10" max="10" width="30" customWidth="1"/></cols>']
    sd3.append('<sheetData xmlns="{NS}">')

    # Header row
    sd3.append(f'<row r="1" ht="22" customHeight="1"><c r="A1" s="4"><v>{idx_q_num_h3}</v></c><c r="B1" s="4"><v>{idx_q_cont_h3}</v></c><c r="C1" s="4"><v>{idx_opt_h3[0]}</v></c><c r="D1" s="4"><v>{idx_opt_h3[1]}</v></c><c r="E1" s="4"><v>{idx_opt_h3[2]}</v></c><c r="F1" s="4"><v>{idx_opt_h3[3]}</v></c><c r="G1" s="4"><v>{idx_opt_h3[4]}</v></c><c r="H1" s="4"><v>{idx_opt_h3[5]}</v></c><c r="I1" s="4"><v>{idx_dim_lbl_h3}</v></c><c r="J1" s="4"><v>{idx_rule_h3}</v></c></row>')

    # Question rows
    opt_label_indices = idx_opt_labels  # [0]=1分, [1]=2分, etc.
    for i, (q_key, q_text) in enumerate(QUESTIONS):
        row = i + 2
        # Find dimension index
        for ki, (k, cn, en) in enumerate(ANCHORS):
            if k == q_key:
                dim_idx = idx_dim_labels[k]
                break
        sd3.append(f'<row r="{row}">')
        sd3.append(f'<c r="A{row}" s="9"><v>{i+1}</v></c>')
        sd3.append(f'<c r="B{row}" s="0" t="s"><v>{idx_q_texts[i]}</v></c>')
        for j, opt_idx in enumerate(opt_label_indices):
            sd3.append(f'<c r="{chr(67+j)}{row}" s="0"><v>{opt_idx}</v></c>')
        sd3.append(f'<c r="I{row}" s="0"><v>{dim_idx}</v></c>')
        sd3.append(f'<c r="J{row}" s="0"><v>{idx_rule}</v></c>')
        sd3.append('</row>')

    sd3.append('</sheetData>')

    sheet3_xml = f"""<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="{NS}" xmlns:r="{NS_R}" xmlns:x14ac="{NS_AC}">
{chr(10).join(sd3)}
<pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>"""
    with open(f"{OUT_DIR}/xl/worksheets/sheet3.xml", "w", encoding="utf-8") as f:
        f.write(sheet3_xml)

    # ── Sheet 4: 解读库 ────────────────────────────────────────────────────────
    sd4 = [f'<cols xmlns="{NS}"><col min="1" max="1" width="16" customWidth="1"/><col min="2" max="2" width="14" customWidth="1"/><col min="3" max="3" width="28" customWidth="1"/><col min="4" max="4" width="60" customWidth="1"/><col min="5" max="5" width="50" customWidth="1"/><col min="6" max="6" width="50" customWidth="1"/><col min="7" max="7" width="50" customWidth="1"/><col min="8" max="8" width="50" customWidth="1"/></cols>']
    sd4.append('<sheetData xmlns="{NS}">')

    sd4.append(f'<row r="1" ht="22" customHeight="1"><c r="A1" s="4"><v>{idx_dim_h4}</v></c><c r="B1" s="4"><v>{idx_range_h4}</v></c><c r="C1" s="4"><v>{idx_title_h4}</v></c><c r="D1" s="4"><v>{idx_detail_h4}</v></c><c r="E1" s="4"><v>{idx_high_h4}</v></c><c r="F1" s="4"><v>{idx_low_h4}</v></c><c r="G1" s="4"><v>{idx_risk_h4}</v></c><c r="H1" s="4"><v>{idx_sup_h4}</v></c></row>')

    for row_idx, (q_key, cn, en) in enumerate(ANCHORS):
        row = row_idx + 2
        info = INTERPRETATIONS[q_key]
        d = idx_interp_details[q_key]
        sd4.append(f'<row r="{row}" ht="80" customHeight="1">')
        sd4.append(f'<c r="A{row}" s="0"><v>{idx_anchor_names[row_idx]}</v></c>')
        sd4.append(f'<c r="B{row}" s="0"><v>4.5–6.0</v></c>')
        sd4.append(f'<c r="C{row}" s="0"><v>{d["desc"]}</v></c>')
        sd4.append(f'<c r="D{row}" s="0"><v>{d["desc"]}</v></c>')
        sd4.append(f'<c r="E{row}" s="0"><v>{d["high"]}</v></c>')
        sd4.append(f'<c r="F{row}" s="0"><v>{d["low"]}</v></c>')
        sd4.append(f'<c r="G{row}" s="0"><v>{d["risk"]}</v></c>')
        sd4.append(f'<c r="H{row}" s="0"><v>{d["support"]}</v></c>')
        sd4.append('</row>')

    sd4.append('</sheetData>')

    sheet4_xml = f"""<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="{NS}" xmlns:r="{NS_R}" xmlns:x14ac="{NS_AC}">
{chr(10).join(sd4)}
<pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>"""
    with open(f"{OUT_DIR}/xl/worksheets/sheet4.xml", "w", encoding="utf-8") as f:
        f.write(sheet4_xml)

    print("All sheets written.")

    # Pack the xlsx
    import subprocess
    result = subprocess.run(
        ["python3", "/c/Users/Administrator/.claude/skills/Excel表格处理/scripts/xlsx_pack.py",
         OUT_DIR, OUT_FILE],
        capture_output=True, text=True
    )
    print("Pack result:", result.returncode)
    if result.stdout:
        print("STDOUT:", result.stdout[:500])
    if result.stderr:
        print("STDERR:", result.stderr[:500])

    print(f"Output: {OUT_FILE}")


if __name__ == "__main__":
    main()
