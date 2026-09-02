"""
Build 星火催化官认证营-工具表单.xlsx
Creates 7-sheet Excel file using raw XML/ZIP approach.
"""
import zipfile
import os

OUTPUT = "D:/新课开发/行动学习2026/行动学习催化师认证/完整课程包/06-工具表单/星火催化官认证营-工具表单.xlsx"
os.makedirs(os.path.dirname(OUTPUT), exist_ok=True)

# ── Color palette (AARRGGBB, alpha=FF = fully opaque) ──────────────────────
C = {
    "primary":   "FF2b2d42",   # deep gray-blue  – headers
    "secondary": "FF8d99ae",   # gray-blue       – sub-headers
    "accent":    "FFef233c",   # bright red      – accent / section titles
    "light":     "FFedf2f4",   # light gray      – alternating rows / fill
    "white":     "FFffffff",   # white           – bg
    "input":     "000000FF",   # blue            – user input cells
    "black":     "00000000",   # black           – text / formula
    "green":     "00008000",   # green           – cross-sheet reference
}

# ── Helper: build a <font> element ──────────────────────────────────────────
def font(color, bold=False, size=11, name="Microsoft YaHei"):
    b = "<b/>" if bold else ""
    return f'<font><sz val="{size}"/><name val="{name}"/>{b}<color rgb="{color}"/></font>'

# ── Helper: build a <fill> element ──────────────────────────────────────────
def solid_fill(rgb):
    return f'''<fill><patternFill patternType="solid"><fgColor rgb="{rgb}"/><bgColor indexed="64"/></patternFill></fill>'''

# ── Helper: build an <xf> element ───────────────────────────────────────────
def xf(num_fmt_id=0, font_id=0, fill_id=0, border_id=0, bold=False, halign=None):
    al = f'<alignment horizontal="{halign}"/>' if halign else ""
    return (
        f'<xf numFmtId="{num_fmt_id}" fontId="{font_id}" fillId="{fill_id}" '
        f'borderId="{border_id}" xfId="0" applyFont="1" applyNumberFormat="1" applyFill="1">'
        f'{al}</xf>'
    )

# ── Helper: build shared string ─────────────────────────────────────────────
def si(text):
    return f"<si><t>{text}</t></si>"

# ════════════════════════════════════════════════════════════════════════════
# 1.  sharedStrings.xml
# ════════════════════════════════════════════════════════════════════════════
def build_shared_strings():
    strings = [
        # ── Sheet 1 & 2: 场景卡 ────────────────────────────────────────────
        "场景卡", "场景卡-空白版", "编号", "填写项", "内容示例 / 填写说明",
        "1", "2", "3", "4", "5", "6", "7",
        "议题", "这场会议讨论的核心话题是什么？",
        "参与人员（大致人数与岗位）", "如：客服代表 8 人、客服组长 2 人、人力资源专员 1 人",
        "这场会议原本打算怎么开", "原来的计划议程、预期的讨论方式",
        "我预感这场讨论可能会遇到的困难或阻力", "可能的障碍、反对意见、时间压力等",
        "我最希望这场会议结束时，大家能达成什么样的共识或产出", "期望的结论、行动计划或决策",
        "最可能有意见分歧的人或两方", "列出可能产生分歧的双方",
        "他们各自大概会怎么说", "预判各方可能表达的观点",

        # ── Sheet 2 示例 ───────────────────────────────────────────────────
        "【示例】", "【场景卡-示例版】",
        "客服中心新员工试用期离职率偏高",
        "参与人员（示例）", "客服代表 12 人、客服组长 3 人、培训负责人 1 人、HRBP 1 人",
        "原计划", "按以往模式：先通报数据→请组长分享感受→讨论对策",
        "预感困难", "1）组长可能认为是工资低导致的；2）新员工可能不敢说真话；3）讨论容易变成诉苦会",
        "期望产出", "形成 3 条可落地的改善行动（如：增加入职辅导频次、设立导师制、优化试用期考核）",
        "分歧方", "组长一方 vs 新员工代表一方",
        "各方观点", "组长：新员工耐压性不足，来了就走是个人问题；新员工：培训太理论化，真正接电话时没人带",

        # ── Sheet 3: 开场提问链 ────────────────────────────────────────────
        "开场提问链", "提问层次", "现象层", "过程层", "卡点层", "归因层",
        "序号", "问题内容", "预判分歧出现位置",
        "提问设计说明",
        "现象层提问", "指向可观察的事实和数据（发生了什么？具体表现是什么？）",
        "过程层提问", "指向流程和分工（这件事是怎么分工的？哪些环节最容易出问题？）",
        "卡点层提问", "指向阻力根源（卡在哪里？为什么推进不下去？最大的障碍是什么？）",
        "归因层提问", "指向深层原因（为什么会有这个障碍？真正的原因是什么？）",

        # ── Sheet 3 示例 ───────────────────────────────────────────────────
        "提问链示例", "基于上述客服中心场景",
        "Q1", "最近一个月，试用期离职的人数大概是多少？", "现象层", "组长与HRBP可能对数字有分歧",
        "Q2", "这些人一般是在入职第几个月提离职的？", "现象层", "",
        "Q3", "他们离职前有没有什么共同的行为信号？", "现象层", "",
        "Q4", "试用期的培训流程是怎样的？理论课和实操课的比例是多少？", "过程层", "",
        "Q5", "新员工第一次接电话是在什么时候？有人带吗？", "过程层", "培训组与客服组互相推诿",
        "Q6", "你觉得新员工不敢说真话的原因可能是什么？", "卡点层", "组长与新员工之间的信任问题",
        "Q7", "如果你是新员工，你会希望得到什么样的支持？", "卡点层", "",
        "Q8", "为什么会出现'培训完还是不会接电话'的情况？根本原因是什么？", "归因层", "培训内容与实际工作脱节",

        # ── Sheet 4: 工具与应急预案 ─────────────────────────────────────────
        "工具与应急预案", "工具编号", "选用工具", "工具选择理由",
        "使用步骤（分步说明）",
        "预判状况", "应对预案",
        "T1", "ORID焦点讨论法", "从客观事实到主观反思，层层递进，适合挖掘真实原因", "1. Objective：刚才大家提到……这些是事实吗？\n2. Reflective：说到这个，大家的感受是什么？\n3. Interpretive：这些现象背后可能说明什么？\n4. Decisional：接下来我们决定怎么做？",
        "状况1", "有人一直在诉苦发牢骚，讨论偏离主题", "预案1", "用ORID把对方拉回来：'我听到你说到……（Reflective），我们稍后专门留时间聊。先回到今天的核心问题：……（Objective）'",
        "状况2", "两组意见对立，互相指责", "预案2", "预案：引入'对事不对人'的规则，用'我们'代替'你们'，把分歧转化为共同面对的问题：'两位的观察都很有价值，我们能不能把它们整合起来？'",
        "T2", "六顶思考帽", "结构化避免团队陷入情绪对抗", "1. 白帽：陈述事实（数据）\n2. 红帽：表达感受（直觉）\n3. 黑帽：指出风险\n4. 黄帽：挖掘价值\n5. 绿帽：创意方案\n6. 蓝帽：控制与总结",
        "状况1", "讨论陷入非理性争吵", "预案1", "立即切换到蓝帽：'我建议我们暂停情绪，先用白帽把事实列出来，大家同意吗？'",
        "状况2", "讨论过于发散，产出不聚焦", "预案2", "蓝帽主持收束：'我们已经收集了很多想法，现在用红帽选出最让大家有共鸣的3个点，继续推进'",
        "T3", "立场转换法", "让对立双方坐到对方位置思考，打破防御", "1. 请分歧双方轮流陈述对方立场\n2. 每陈述完，对方确认'这是我真正想表达的意思吗？'\n3. 催化师帮助澄清和补充\n4. 最后回到自己的立场，说出新的理解",
        "状况1", "一方拒绝换位思考", "预案1", "降低难度：不要求完全同意对方，只需陈述'如果我是对方，我可能会这么想'，不要求认同",
        "状况2", "换位后激化矛盾", "预案2", "立即喊停，引入ORID，先处理情绪（红帽），再回到事实层（白帽）",

        # ── Sheet 5: 完整催化方案 ──────────────────────────────────────────
        "完整催化方案", "现象-原因-对策看板",
        "会议主题", "（从场景卡复制）",
        "主持人", "", "日期", "",
        "序号", "现象（观察到的）", "原因分析", "对策（具体行动）", "责任人", "完成时间", "优先级",
        "1", "", "", "", "", "", "高/中/低",
        "2", "", "", "", "", "", "高/中/低",
        "3", "", "", "", "", "", "高/中/低",
        "4", "", "", "", "", "", "高/中/低",
        "5", "", "", "", "", "", "高/中/低",
        "后续跟进事项", "", "跟进人", "", "下次会议时间", "",

        # ── Sheet 6: 会议产出报告 ──────────────────────────────────────────
        "会议产出报告", "会议信息",
        "会议主题", "", "会议日期", "",
        "主持人", "", "记录人", "",
        "参与人员", "", "总人数", "",
        "会议目标回顾", "（会议开始时设定的目标）",
        "实际讨论要点", "（记录会上讨论的核心内容）",
        "共识产出", "（会上达成的共识）",
        "待决事项", "（未达成共识、需要继续讨论的）",
        "行动计划", "序号", "行动项", "负责人", "完成时间", "备注",
        "1", "", "", "", "", "",
        "2", "", "", "", "", "",
        "3", "", "", "", "", "",
        "会议满意度（可选）", "□ 很满意  □ 满意  □ 一般  □ 不满意  □ 很不满意",
        "改进建议", "",

        # ── Sheet 7: 认证评分记录 ──────────────────────────────────────────
        "认证评分记录", "星火催化官认证评估表",
        "学员姓名", "", "认证日期", "",
        "所在组织", "", "观察导师", "",
        "评估维度", "评分项目", "权重", "得分\n(1-5)", "得分说明",
        "维度一：会前准备", "1.1 场景卡填写完整度", "15%", "", "是否清晰填写了议题、参与人员、预期困难等",
        "", "1.2 提问链设计质量", "15%", "", "是否设计了从现象层到归因层的提问链",
        "", "1.3 工具选择合理性", "10%", "", "工具是否与场景匹配，预案是否充分",
        "维度二：会中引导", "2.1 开场与暖场能力", "10%", "", "是否能快速建立信任、明确会议目标",
        "", "2.2 提问与追问能力", "15%", "", "是否能用提问推动讨论，而非直接给答案",
        "", "2.3 冲突处理能力", "10%", "", "出现分歧时是否能有效化解，不回避也不激化",
        "", "2.4 总结与收敛能力", "10%", "", "能否在结束时清晰总结共识并落實行动",
        "维度三：整体表现", "3.1 综合印象评分", "15%", "", "整体从容度、专业度、控场能力",
        "总分", "", "100%", "=SUM(D10:D18)", "",
        "观察导师评语", "",
        "改进建议", "",
        "学员确认签名", "", "日期", "",
        "评分标准", "5分=优秀（超出预期）", "4分=良好（达到预期）", "3分=合格（基本达到）",
        "", "2分=较弱（部分未达）", "1分=差（明显不足）", "",
        "说明：综合得分80%以上为通过认证", "",
    ]

    unique = []
    idx_map = {}
    for s in strings:
        if s not in idx_map:
            idx_map[s] = len(unique)
            unique.append(s)

    count_total = len(strings)
    unique_count = len(unique)

    items = "".join(si(s) for s in unique)
    return (
        f'<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n'
        f'<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" '
        f'count="{count_total}" uniqueCount="{unique_count}">{items}</sst>'
    ), idx_map


# ════════════════════════════════════════════════════════════════════════════
# 2.  styles.xml
# ════════════════════════════════════════════════════════════════════════════
def build_styles():
    fonts = f"""<fonts>
  <font><sz val="11"/><name val="Arial"/><color rgb="00000000"/></font>
  <font><sz val="11"/><name val="Arial"/><color rgb="000000FF"/></font>
  <font><sz val="11"/><name val="Arial"/><color rgb="00000000"/></font>
  <font><sz val="11"/><name val="Arial"/><color rgb="00008000"/></font>
  <font><b/><sz val="11"/><name val="Arial"/><color rgb="00000000"/></font>
  <font><b/><sz val="14"/><name val="Microsoft YaHei"/><color rgb="{C["white"][2:]}"/></font>
  <font><b/><sz val="11"/><name val="Microsoft YaHei"/><color rgb="00000000"/></font>
  <font><sz val="11"/><name val="Microsoft YaHei"/><color rgb="00000000"/></font>
  <font><b/><sz val="11"/><name val="Microsoft YaHei"/><color rgb="{C["accent"][2:]}"/></font>
  <font><b/><sz val="12"/><name val="Microsoft YaHei"/><color rgb="{C["primary"][2:]}"/></font>
  <font><sz val="11"/><name val="Microsoft YaHei"/><color rgb="{C["secondary"][2:]}"/></font>
  <font><b/><sz val="11"/><name val="Microsoft YaHei"/><color rgb="{C["white"][2:]}"/></font>
  <font><sz val="11"/><name val="Microsoft YaHei"/><color rgb="{C["primary"][2:]}"/></font>
</fonts>"""

    fills = f"""<fills>
  <fill><patternFill patternType="none"/></fill>
  <fill><patternFill patternType="gray125"/></fill>
  <fill>{solid_fill(C["light"])}</fill>
  <fill>{solid_fill(C["primary"])}</fill>
  <fill>{solid_fill(C["accent"])}</fill>
  <fill>{solid_fill("FFD9D9D9")}</fill>
</fills>"""

    borders = """<borders>
  <border><left/><right/><top/><bottom/><diagonal/></border>
  <border><left style="thin"><color rgb="FF8d99ae"/></left><right/><top/><bottom/><diagonal/></border>
  <border><left style="medium"><color rgb="FF2b2d42"/></left><right/><top/><bottom/><diagonal/></border>
</borders>"""

    # numFmts
    num_fmts = """<numFmts>
  <numFmt numFmtId="164" formatCode="$#,##0;($#,##0);&quot;-&quot;"/>
  <numFmt numFmtId="165" formatCode="0.0%"/>
  <numFmt numFmtId="166" formatCode="0.0x"/>
  <numFmt numFmtId="167" formatCode="#,##0"/>
</numFmts>"""

    # cellXfs  (index → semantic role)
    cell_xfs = """<cellXfs>
  <!-- 0 default -->
  <xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0" applyFont="1"/>
  <!-- 1 blue input -->
  <xf numFmtId="0" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>
  <!-- 2 black formula -->
  <xf numFmtId="0" fontId="2" fillId="0" borderId="0" xfId="0" applyFont="1"/>
  <!-- 3 green cross-sheet -->
  <xf numFmtId="0" fontId="3" fillId="0" borderId="0" xfId="0" applyFont="1"/>
  <!-- 4 bold header -->
  <xf numFmtId="0" fontId="4" fillId="0" borderId="0" xfId="0" applyFont="1"/>
  <!-- 5 sheet title white on dark -->
  <xf numFmtId="0" fontId="5" fillId="3" borderId="0" xfId="0" applyFont="1" applyFill="1"/>
  <!-- 6 bold black section title -->
  <xf numFmtId="0" fontId="6" fillId="0" borderId="0" xfId="0" applyFont="1"/>
  <!-- 7 body text -->
  <xf numFmtId="0" fontId="7" fillId="0" borderId="0" xfId="0" applyFont="1"/>
  <!-- 8 accent red bold -->
  <xf numFmtId="0" fontId="8" fillId="0" borderId="0" xfId="0" applyFont="1"/>
  <!-- 9 primary bold large -->
  <xf numFmtId="0" fontId="9" fillId="0" borderId="0" xfId="0" applyFont="1"/>
  <!-- 10 secondary text -->
  <xf numFmtId="0" fontId="10" fillId="0" borderId="0" xfId="0" applyFont="1"/>
  <!-- 11 white on primary -->
  <xf numFmtId="0" fontId="11" fillId="3" borderId="0" xfId="0" applyFont="1" applyFill="1"/>
  <!-- 12 primary text -->
  <xf numFmtId="0" fontId="12" fillId="0" borderId="0" xfId="0" applyFont="1"/>
  <!-- 13 light gray fill body -->
  <xf numFmtId="0" fontId="7" fillId="2" borderId="0" xfId="0" applyFont="1" applyFill="1"/>
  <!-- 14 currency input blue -->
  <xf numFmtId="164" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>
  <!-- 15 currency formula black -->
  <xf numFmtId="164" fontId="2" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>
  <!-- 16 percentage input blue -->
  <xf numFmtId="165" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>
  <!-- 17 percentage formula black -->
  <xf numFmtId="165" fontId="2" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>
  <!-- 18 accent red header fill -->
  <xf numFmtId="0" fontId="8" fillId="4" borderId="0" xfId="0" applyFont="1" applyFill="1"/>
  <!-- 19 thin border + fill light -->
  <xf numFmtId="0" fontId="7" fillId="2" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1"/>
  <!-- 20 primary fill + white text -->
  <xf numFmtId="0" fontId="11" fillId="3" borderId="0" xfId="0" applyFont="1" applyFill="1"/>
  <!-- 21 medium left border + primary text -->
  <xf numFmtId="0" fontId="12" fillId="0" borderId="2" xfId="0" applyFont="1" applyBorder="1"/>
  <!-- 22 gray fill for example rows -->
  <xf numFmtId="0" fontId="7" fillId="5" borderId="0" xfId="0" applyFont="1" applyFill="1"/>
</cellXfs>"""

    return (
        f'<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n'
        f'<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">\n'
        f'{num_fmts}\n{fonts}\n{fills}\n{borders}\n{cell_xfs}\n</styleSheet>'
    )


# ════════════════════════════════════════════════════════════════════════════
# 3.  Cell helpers for sheets
# ════════════════════════════════════════════════════════════════════════════
# Style indices
S = {
    "title_dark": 5,     # white on dark primary
    "section": 6,        # bold black
    "body": 7,           # normal body
    "accent": 8,         # accent red bold
    "primary_bold": 9,   # primary bold
    "secondary": 10,     # secondary text
    "white_on_dark": 11, # white on primary
    "primary": 12,       # primary text
    "body_light": 13,    # body + light gray fill
    "blue_input": 1,     # blue input
    "header": 4,         # bold header
    "red_header": 18,    # accent red header fill
    "light_border": 19,  # light fill + thin border
    "default": 0,
    "currency_in": 14,
    "currency_form": 15,
    "pct_in": 16,
    "pct_form": 17,
    "example_gray": 22,  # gray fill for example rows
    "medium_border": 21,
}

def sc(row, col, text_idx, style, span=None):
    """String cell."""
    extra = f' span="{span}"' if span else ""
    return f'<c r="{col}{row}" t="s" s="{style}"{extra}><v>{text_idx}</v></c>'

def ec(row, col, value, style):
    """Empty cell with style."""
    return f'<c r="{col}{row}" s="{style}"/>'

def merged_cell(ref, text_idx, style):
    return f'<c r="{ref}" t="s" s="{style}"><v>{text_idx}</v></c>'

def merged_range(sheet_data, ref, text_idx, style):
    """Add a merged cell and record the merge."""
    sheet_data["merges"].append(ref)
    return merged_cell(ref, text_idx, style)


# ════════════════════════════════════════════════════════════════════════════
# 4.  Sheet builders
# ════════════════════════════════════════════════════════════════════════════

def build_sheet1(idx_map):
    """场景卡-空白版"""
    sd = {"merges": [], "rows": []}

    def row(num, *cells, ht=None):
        extra = f' ht="{ht}" customHeight="1"' if ht else ""
        sd["rows"].append(f'<row r="{num}"{extra}>{"".join(cells)}</row>')

    # ── Title ────────────────────────────────────────────────────────────────
    r = 1
    sd["merges"].append("A1:G1")
    row(r, merged_cell("A1", idx_map["场景卡"], S["title_dark"]), ht=30)

    r = 2
    sd["merges"].append("A2:G2")
    row(r, merged_cell("A2", idx_map["场景卡-空白版"], S["primary_bold"]), ht=22)

    r = 3  # spacer
    row(r, ec(r, "A", "", S["default"]), ht=10)

    # ── Column headers ───────────────────────────────────────────────────────
    r = 4
    row(r,
        sc(r, "A", idx_map["编号"], S["red_header"]),
        sc(r, "B", idx_map["填写项"], S["red_header"]),
        sc(r, "C", idx_map["内容示例 / 填写说明"], S["red_header"]),
        ht=20)

    # ── 7 items ─────────────────────────────────────────────────────────────
    items = [
        ("1", idx_map["议题"], ""),
        ("2", idx_map["参与人员（大致人数与岗位）"], ""),
        ("3", idx_map["这场会议原本打算怎么开"], ""),
        ("4", idx_map["我预感这场讨论可能会遇到的困难或阻力"], ""),
        ("5", idx_map["我最希望这场会议结束时，大家能达成什么样的共识或产出"], ""),
        ("6", idx_map["最可能有意见分歧的人或两方"], ""),
        ("7", idx_map["他们各自大概会怎么说"], ""),
    ]
    for i, (num, label, example) in enumerate(items):
        r = 5 + i
        fill = S["body_light"] if i % 2 == 0 else S["body"]
        row(r,
            sc(r, "A", idx_map[num], fill),
            sc(r, "B", label, fill),
            ec(r, "C", "", S["body"]),
            ht=30)

    # spacer
    r = 12
    row(r, ec(r, "A", "", S["default"]), ht=10)

    # ── Note row ─────────────────────────────────────────────────────────────
    r = 13
    sd["merges"].append("A13:G13")
    row(r, merged_cell("A13", idx_map["提问设计说明"], S["secondary"]), ht=18)

    return _finish_sheet(sd, col_widths={"A": 8, "B": 35, "C": 45, "D": 15, "E": 15, "F": 15, "G": 15})


def build_sheet2(idx_map):
    """场景卡-示例版"""
    sd = {"merges": [], "rows": []}

    def row(num, *cells, ht=None):
        extra = f' ht="{ht}" customHeight="1"' if ht else ""
        sd["rows"].append(f'<row r="{num}"{extra}>{"".join(cells)}</row>')

    r = 1
    sd["merges"].append("A1:G1")
    row(r, merged_cell("A1", idx_map["场景卡"], S["title_dark"]), ht=30)

    r = 2
    sd["merges"].append("A2:G2")
    row(r, merged_cell("A2", idx_map["【场景卡-示例版】"], S["accent"]), ht=22)

    r = 3
    row(r, ec(r, "A", "", S["default"]), ht=10)

    # Column headers
    r = 4
    row(r,
        sc(r, "A", idx_map["编号"], S["red_header"]),
        sc(r, "B", idx_map["填写项"], S["red_header"]),
        sc(r, "C", idx_map["内容示例 / 填写说明"], S["red_header"]),
        ht=20)

    # Example items
    items = [
        ("1", idx_map["议题"], idx_map["客服中心新员工试用期离职率偏高"]),
        ("2", idx_map["参与人员（大致人数与岗位）"], idx_map["参与人员（示例）"]),
        ("3", idx_map["这场会议原本打算怎么开"], idx_map["原计划"]),
        ("4", idx_map["我预感这场讨论可能会遇到的困难或阻力"], idx_map["预感困难"]),
        ("5", idx_map["我最希望这场会议结束时，大家能达成什么样的共识或产出"], idx_map["期望产出"]),
        ("6", idx_map["最可能有意见分歧的人或两方"], idx_map["分歧方"]),
        ("7", idx_map["他们各自大概会怎么说"], idx_map["各方观点"]),
    ]
    for i, (num, label, example) in enumerate(items):
        r = 5 + i
        row(r,
            sc(r, "A", idx_map[num], S["example_gray"]),
            sc(r, "B", label, S["example_gray"]),
            sc(r, "C", example, S["example_gray"]),
            ht=36)

    r = 12
    row(r, ec(r, "A", "", S["default"]), ht=10)

    r = 13
    sd["merges"].append("A13:G13")
    row(r, merged_cell("A13", idx_map["提问设计说明"], S["secondary"]), ht=18)

    return _finish_sheet(sd, col_widths={"A": 8, "B": 35, "C": 60, "D": 15, "E": 15, "F": 15, "G": 15})


def build_sheet3(idx_map):
    """开场提问链"""
    sd = {"merges": [], "rows": []}

    def row(num, *cells, ht=None):
        extra = f' ht="{ht}" customHeight="1"' if ht else ""
        sd["rows"].append(f'<row r="{num}"{extra}>{"".join(cells)}</row>')

    r = 1
    sd["merges"].append("A1:F1")
    row(r, merged_cell("A1", idx_map["开场提问链"], S["title_dark"]), ht=30)

    r = 2
    sd["merges"].append("A2:F2")
    row(r, merged_cell("A2", idx_map["提问设计说明"], S["secondary"]), ht=18)

    r = 3
    row(r, ec(r, "A", "", S["default"]), ht=8)

    # Column headers
    r = 4
    row(r,
        sc(r, "A", idx_map["序号"], S["red_header"]),
        sc(r, "B", idx_map["提问层次"], S["red_header"]),
        sc(r, "C", idx_map["问题内容"], S["red_header"]),
        sc(r, "D", idx_map["预判分歧出现位置"], S["red_header"]),
        ht=20)

    # Layer descriptions
    layers = [
        (idx_map["现象层"], idx_map["现象层提问"]),
        (idx_map["过程层"], idx_map["过程层提问"]),
        (idx_map["卡点层"], idx_map["卡点层提问"]),
        (idx_map["归因层"], idx_map["归因层提问"]),
    ]
    for layer_name, layer_desc in layers:
        r += 1
        sd["merges"].append(f"B{r}:D{r}")
        row(r,
            ec(r, "A", "", S["default"]),
            sc(r, "B", layer_name, S["accent"]),
            sc(r, "C", layer_desc, S["body"]),
            ec(r, "D", "", S["body"]),
            ht=20)

    r += 1
    row(r, ec(r, "A", "", S["default"]), ht=8)

    # Example section title
    r += 1
    sd["merges"].append(f"A{r}:F{r}")
    row(r, merged_cell(f"A{r}", idx_map["提问链示例"], S["primary_bold"]), ht=22)

    # Example column headers
    r += 1
    row(r,
        sc(r, "A", idx_map["序号"], S["red_header"]),
        sc(r, "B", idx_map["问题内容"], S["red_header"]),
        sc(r, "C", idx_map["提问层次"], S["red_header"]),
        sc(r, "D", idx_map["预判分歧出现位置"], S["red_header"]),
        ht=20)

    # Example rows
    examples = [
        ("Q1", idx_map["最近一个月，试用期离职的人数大概是多少？"], idx_map["现象层"], idx_map["组长与HRBP可能对数字有分歧"]),
        ("Q2", idx_map["这些人一般是在入职第几个月提离职的？"], idx_map["现象层"], ""),
        ("Q3", idx_map["他们离职前有没有什么共同的行为信号？"], idx_map["现象层"], ""),
        ("Q4", idx_map["试用期的培训流程是怎样的？理论课和实操课的比例是多少？"], idx_map["过程层"], ""),
        ("Q5", idx_map["新员工第一次接电话是在什么时候？有人带吗？"], idx_map["过程层"], idx_map["培训组与客服组互相推诿"]),
        ("Q6", idx_map["你觉得新员工不敢说真话的原因可能是什么？"], idx_map["卡点层"], idx_map["组长与新员工之间的信任问题"]),
        ("Q7", idx_map["如果你是新员工，你会希望得到什么样的支持？"], idx_map["卡点层"], ""),
        ("Q8", idx_map["为什么会出现'培训完还是不会接电话'的情况？根本原因是什么？"], idx_map["归因层"], idx_map["培训内容与实际工作脱节"]),
    ]
    for q_num, q_text, q_layer, q_split in examples:
        r += 1
        fill = S["body_light"] if int(q_num[1:]) % 2 == 0 else S["body"]
        row(r,
            sc(r, "A", idx_map[q_num], fill),
            sc(r, "B", q_text, fill),
            sc(r, "C", q_layer, fill),
            sc(r, "D", q_split, fill),
            ht=28)

    return _finish_sheet(sd, col_widths={"A": 8, "B": 55, "C": 14, "D": 35, "E": 14, "F": 14})


def build_sheet4(idx_map):
    """工具与应急预案"""
    sd = {"merges": [], "rows": []}

    def row(num, *cells, ht=None):
        extra = f' ht="{ht}" customHeight="1"' if ht else ""
        sd["rows"].append(f'<row r="{num}"{extra}>{"".join(cells)}</row>')

    r = 1
    sd["merges"].append("A1:F1")
    row(r, merged_cell("A1", idx_map["工具与应急预案"], S["title_dark"]), ht=30)

    r = 2
    row(r, ec(r, "A", "", S["default"]), ht=10)

    # Column headers
    r = 3
    row(r,
        sc(r, "A", idx_map["工具编号"], S["red_header"]),
        sc(r, "B", idx_map["选用工具"], S["red_header"]),
        sc(r, "C", idx_map["工具选择理由"], S["red_header"]),
        sc(r, "D", idx_map["使用步骤（分步说明）"], S["red_header"]),
        sc(r, "E", idx_map["预判状况"], S["red_header"]),
        sc(r, "F", idx_map["应对预案"], S["red_header"]),
        ht=20)

    tools = [
        ("T1", idx_map["ORID焦点讨论法"], idx_map["ORID焦点讨论法"], "状况1", idx_map["有人一直在诉苦发牢骚，讨论偏离主题"], "预案1", idx_map["用ORID把对方拉回来：'我听到你说到……（Reflective），我们稍后专门留时间聊。先回到今天的核心问题：……（Objective）'"]),
        ("", "", "", "状况2", idx_map["两组意见对立，互相指责"], "预案2", idx_map["预案：引入'对事不对人'的规则，用'我们'代替'你们'，把分歧转化为共同面对的问题：'两位的观察都很有价值，我们能不能把它们整合起来？'"]),
        ("T2", idx_map["六顶思考帽"], idx_map["六顶思考帽"], "状况1", idx_map["讨论陷入非理性争吵"], "预案1", idx_map["立即切换到蓝帽：'我建议我们暂停情绪，先用白帽把事实列出来，大家同意吗？'"]),
        ("", "", "", "状况2", idx_map["讨论过于发散，产出不聚焦"], "预案2", idx_map["蓝帽主持收束：'我们已经收集了很多想法，现在用红帽选出最让大家有共鸣的3个点，继续推进'"]),
        ("T3", idx_map["立场转换法"], idx_map["立场转换法"], "状况1", idx_map["一方拒绝换位思考"], "预案1", idx_map["降低难度：不要求完全同意对方，只需陈述'如果我是对方，我可能会这么想'，不要求认同"]),
        ("", "", "", "状况2", idx_map["换位后激化矛盾"], "预案2", idx_map["立即喊停，引入ORID，先处理情绪（红帽），再回到事实层（白帽）"]),
    ]

    r = 3
    for tool_data in tools:
        t_id, t_name, t_reason, s_label, s_text, p_label, p_text = tool_data
        r += 1
        is_tool_row = bool(t_id)
        style = S["body"] if is_tool_row else S["body_light"]
        ht = 60 if is_tool_row else 40
        row(r,
            sc(r, "A", idx_map.get(t_id, 0) if t_id else 0, S["default"]),
            sc(r, "B", idx_map.get(t_name, 0) if t_name else 0, S["accent"] if is_tool_row else S["default"]),
            sc(r, "C", idx_map.get(t_reason, 0) if t_reason else 0, S["default"]),
            sc(r, "D", idx_map.get(s_text, 0) if s_text else 0, S["default"]),
            sc(r, "E", idx_map.get(s_label, 0) if s_label else 0, S["secondary"]),
            sc(r, "F", idx_map.get(p_text, 0) if p_text else 0, S["default"]),
            ht=ht)

    return _finish_sheet(sd, col_widths={"A": 10, "B": 20, "C": 35, "D": 50, "E": 20, "F": 50})


def build_sheet5(idx_map):
    """完整催化方案"""
    sd = {"merges": [], "rows": []}

    def row(num, *cells, ht=None):
        extra = f' ht="{ht}" customHeight="1"' if ht else ""
        sd["rows"].append(f'<row r="{num}"{extra}>{"".join(cells)}</row>')

    r = 1
    sd["merges"].append("A1:G1")
    row(r, merged_cell("A1", idx_map["完整催化方案"], S["title_dark"]), ht=30)

    r = 2
    sd["merges"].append("A2:G2")
    row(r, merged_cell("A2", idx_map["现象-原因-对策看板"], S["accent"]), ht=22)

    r = 3
    row(r, ec(r, "A", "", S["default"]), ht=8)

    # Meeting info row
    r = 4
    row(r,
        sc(r, "A", idx_map["会议主题"], S["body"]),
        ec(r, "B", "", S["body"]),
        sc(r, "C", idx_map["主持人"], S["body"]),
        ec(r, "D", "", S["body"]),
        sc(r, "E", idx_map["日期"], S["body"]),
        ec(r, "F", "", S["body"]),
        ht=20)

    r = 5
    row(r, ec(r, "A", "", S["default"]), ht=8)

    # Column headers
    r = 6
    row(r,
        sc(r, "A", idx_map["序号"], S["red_header"]),
        sc(r, "B", idx_map["现象（观察到的）"], S["red_header"]),
        sc(r, "C", idx_map["原因分析"], S["red_header"]),
        sc(r, "D", idx_map["对策（具体行动）"], S["red_header"]),
        sc(r, "E", idx_map["责任人"], S["red_header"]),
        sc(r, "F", idx_map["完成时间"], S["red_header"]),
        sc(r, "G", idx_map["优先级"], S["red_header"]),
        ht=20)

    for i in range(1, 6):
        r = 6 + i
        fill = S["body_light"] if i % 2 == 0 else S["body"]
        row(r,
            sc(r, "A", idx_map.get(str(i), 0), fill),
            ec(r, "B", "", fill),
            ec(r, "C", "", fill),
            ec(r, "D", "", fill),
            ec(r, "E", "", fill),
            ec(r, "F", "", fill),
            ec(r, "G", "", fill),
            ht=30)

    r = 12
    row(r, ec(r, "A", "", S["default"]), ht=8)

    r = 13
    row(r,
        sc(r, "A", idx_map["后续跟进事项"], S["section"]),
        ec(r, "B", "", S["body"]),
        sc(r, "C", idx_map["跟进人"], S["body"]),
        ec(r, "D", "", S["body"]),
        sc(r, "E", idx_map["下次会议时间"], S["body"]),
        ec(r, "F", "", S["body"]),
        ht=20)

    return _finish_sheet(sd, col_widths={"A": 8, "B": 30, "C": 30, "D": 35, "E": 15, "F": 15, "G": 12})


def build_sheet6(idx_map):
    """会议产出报告"""
    sd = {"merges": [], "rows": []}

    def row(num, *cells, ht=None):
        extra = f' ht="{ht}" customHeight="1"' if ht else ""
        sd["rows"].append(f'<row r="{num}"{extra}>{"".join(cells)}</row>')

    r = 1
    sd["merges"].append("A1:F1")
    row(r, merged_cell("A1", idx_map["会议产出报告"], S["title_dark"]), ht=30)

    r = 2
    sd["merges"].append("A2:F2")
    row(r, merged_cell("A2", idx_map["会议信息"], S["primary_bold"]), ht=22)

    r = 3
    row(r,
        sc(r, "A", idx_map["会议主题"], S["body"]),
        ec(r, "B", "", S["body"]),
        sc(r, "C", idx_map["会议日期"], S["body"]),
        ec(r, "D", "", S["body"]),
        sc(r, "E", idx_map["总人数"], S["body"]),
        ec(r, "F", "", S["body"]),
        ht=20)

    r = 4
    row(r,
        sc(r, "A", idx_map["主持人"], S["body"]),
        ec(r, "B", "", S["body"]),
        sc(r, "C", idx_map["记录人"], S["body"]),
        ec(r, "D", "", S["body"]),
        ht=20)

    r = 5
    row(r, ec(r, "A", "", S["default"]), ht=8)

    sections = [
        (idx_map["会议目标回顾"], True),
        (idx_map["实际讨论要点"], True),
        (idx_map["共识产出"], True),
        (idx_map["待决事项"], True),
    ]
    for sec_title, needs_content in sections:
        r += 1
        sd["merges"].append(f"A{r}:F{r}")
        row(r, merged_cell(f"A{r}", sec_title, S["section"]), ht=20)
        r += 1
        sd["merges"].append(f"A{r}:F{r}")
        row(r, merged_cell(f"A{r}", 0, S["body_light"]), ht=40)

    r += 1
    row(r, ec(r, "A", "", S["default"]), ht=8)

    # Action plan table
    r += 1
    sd["merges"].append(f"A{r}:F{r}")
    row(r, merged_cell(f"A{r}", idx_map["行动计划"], S["primary_bold"]), ht=22)

    r += 1
    row(r,
        sc(r, "A", idx_map["序号"], S["red_header"]),
        sc(r, "B", idx_map["行动项"], S["red_header"]),
        sc(r, "C", idx_map["负责人"], S["red_header"]),
        sc(r, "D", idx_map["完成时间"], S["red_header"]),
        sc(r, "E", idx_map["备注"], S["red_header"]),
        ht=20)

    for i in range(1, 4):
        r += 1
        fill = S["body_light"] if i % 2 == 0 else S["body"]
        row(r,
            sc(r, "A", idx_map.get(str(i), 0), fill),
            ec(r, "B", "", fill),
            ec(r, "C", "", fill),
            ec(r, "D", "", fill),
            ec(r, "E", "", fill),
            ht=25)

    r += 1
    row(r, ec(r, "A", "", S["default"]), ht=8)

    r += 1
    row(r,
        sc(r, "A", idx_map["会议满意度（可选）"], S["body"]),
        ec(r, "B", "", S["body"]),
        ht=20)

    r += 1
    row(r, ec(r, "A", "", S["default"]), ht=8)

    r += 1
    sd["merges"].append(f"A{r}:F{r}")
    row(r, merged_cell(f"A{r}", idx_map["改进建议"], S["body"]), ht=40)

    return _finish_sheet(sd, col_widths={"A": 18, "B": 35, "C": 18, "D": 18, "E": 18, "F": 18})


def build_sheet7(idx_map):
    """认证评分记录"""
    sd = {"merges": [], "rows": []}

    def row(num, *cells, ht=None):
        extra = f' ht="{ht}" customHeight="1"' if ht else ""
        sd["rows"].append(f'<row r="{num}"{extra}>{"".join(cells)}</row>')

    r = 1
    sd["merges"].append("A1:E1")
    row(r, merged_cell("A1", idx_map["认证评分记录"], S["title_dark"]), ht=30)

    r = 2
    sd["merges"].append("A2:E2")
    row(r, merged_cell("A2", idx_map["星火催化官认证评估表"], S["accent"]), ht=22)

    r = 3
    row(r, ec(r, "A", "", S["default"]), ht=8)

    # Info block
    r = 4
    row(r,
        sc(r, "A", idx_map["学员姓名"], S["body"]),
        ec(r, "B", "", S["body"]),
        sc(r, "C", idx_map["认证日期"], S["body"]),
        ec(r, "D", "", S["body"]),
        ht=20)

    r = 5
    row(r,
        sc(r, "A", idx_map["所在组织"], S["body"]),
        ec(r, "B", "", S["body"]),
        sc(r, "C", idx_map["观察导师"], S["body"]),
        ec(r, "D", "", S["body"]),
        ht=20)

    r = 6
    row(r, ec(r, "A", "", S["default"]), ht=8)

    # Evaluation table headers
    r = 7
    row(r,
        sc(r, "A", idx_map["评估维度"], S["red_header"]),
        sc(r, "B", idx_map["评分项目"], S["red_header"]),
        sc(r, "C", idx_map["权重"], S["red_header"]),
        sc(r, "D", idx_map["得分\n(1-5)"], S["red_header"]),
        sc(r, "E", idx_map["得分说明"], S["red_header"]),
        ht=30)

    # Evaluation items: (dimension, item_text, weight)
    items = [
        (idx_map["维度一：会前准备"], idx_map["1.1 场景卡填写完整度"], "15%"),
        ("", idx_map["1.2 提问链设计质量"], "15%"),
        ("", idx_map["1.3 工具选择合理性"], "10%"),
        (idx_map["维度二：会中引导"], idx_map["2.1 开场与暖场能力"], "10%"),
        ("", idx_map["2.2 提问与追问能力"], "15%"),
        ("", idx_map["2.3 冲突处理能力"], "10%"),
        ("", idx_map["2.4 总结与收敛能力"], "10%"),
        (idx_map["维度三：整体表现"], idx_map["3.1 综合印象评分"], "15%"),
    ]

    for i, (dim, item, weight) in enumerate(items):
        r += 1
        is_dim = bool(dim)
        fill = S["body_light"] if i % 2 == 0 else S["body"]
        dim_style = S["section"] if is_dim else fill
        row(r,
            sc(r, "A", idx_map.get(dim, 0) if dim else 0, dim_style),
            sc(r, "B", idx_map.get(item, 0), fill),
            sc(r, "C", idx_map.get(weight, 0), fill),
            ec(r, "D", "", fill),
            ec(r, "E", "", fill),
            ht=25)

    # Total row
    r += 1
    sd["merges"].append(f"A{r}:C{r}")
    row(r,
        merged_cell(f"A{r}", idx_map["总分"], S["accent"]),
        ec(r, "D", "", S["accent"]),
        ec(r, "E", "", S["body"]),
        ht=25)

    r += 1
    row(r, ec(r, "A", "", S["default"]), ht=8)

    # Comments
    r += 1
    sd["merges"].append(f"A{r}:E{r}")
    row(r, merged_cell(f"A{r}", idx_map["观察导师评语"], S["section"]), ht=20)

    r += 1
    sd["merges"].append(f"A{r}:E{r}")
    row(r, merged_cell(f"A{r}", 0, S["body_light"]), ht=50)

    r += 1
    sd["merges"].append(f"A{r}:E{r}")
    row(r, merged_cell(f"A{r}", idx_map["改进建议"], S["section"]), ht=20)

    r += 1
    sd["merges"].append(f"A{r}:E{r}")
    row(r, merged_cell(f"A{r}", 0, S["body_light"]), ht=50)

    r += 1
    row(r, ec(r, "A", "", S["default"]), ht=8)

    # Signature
    r += 1
    row(r,
        sc(r, "A", idx_map["学员确认签名"], S["body"]),
        ec(r, "B", "", S["body"]),
        sc(r, "C", idx_map["日期"], S["body"]),
        ec(r, "D", "", S["body"]),
        ht=20)

    r += 1
    row(r, ec(r, "A", "", S["default"]), ht=10)

    # Rating criteria
    r += 1
    sd["merges"].append(f"A{r}:E{r}")
    row(r, merged_cell(f"A{r}", idx_map["评分标准"], S["section"]), ht=20)

    criteria = [
        ("5分=优秀（超出预期）", "4分=良好（达到预期）", "3分=合格（基本达到）"),
        ("2分=较弱（部分未达）", "1分=差（明显不足）", ""),
    ]
    for crit_row in criteria:
        r += 1
        cols = ["A", "B", "C", "D", "E"]
        cells = []
        for j, crit in enumerate(crit_row):
            if crit:
                cells.append(sc(r, cols[j], idx_map.get(crit, 0), S["body"]))
            else:
                cells.append(ec(r, cols[j], "", S["body"]))
        row(r, *cells, ht=18)

    r += 1
    sd["merges"].append(f"A{r}:E{r}")
    row(r, merged_cell(f"A{r}", idx_map["说明：综合得分80%以上为通过认证"], S["secondary"]), ht=18)

    return _finish_sheet(sd, col_widths={"A": 25, "B": 45, "C": 10, "D": 12, "E": 35})


def _finish_sheet(sd, col_widths=None):
    """Close sheet XML with sheetViews, cols, merges."""
    merges_xml = "".join(
        f'<mergeCell ref="{m}"/>' for m in sd["merges"]
    )
    cols_xml = ""
    if col_widths:
        col_items = []
        for letter, width in col_widths.items():
            # convert column letter to number
            num = 0
            for ch in letter.upper():
                num = num * 26 + (ord(ch) - ord('A') + 1)
            col_items.append(f'<col min="{num}" max="{num}" width="{width}" customWidth="1"/>')
        cols_xml = "<cols>" + "".join(col_items) + "</cols>"

    rows_xml = "".join(sd["rows"])
    return (
        f'<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n'
        f'<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"\n'
        f'  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">\n'
        f'  <sheetViews>\n'
        f'    <sheetView workbookViewId="0"/>\n'
        f'  </sheetViews>\n'
        f'  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25"\n'
        f'    xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>\n'
        f'  {cols_xml}\n'
        f'  <sheetData>{rows_xml}</sheetData>\n'
        f'  <mergeCells count="{len(sd["merges"])}">{merges_xml}</mergeCells>\n'
        f'  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>\n'
        f'</worksheet>'
    )


# ════════════════════════════════════════════════════════════════════════════
# 5.  Workbook XML
# ════════════════════════════════════════════════════════════════════════════
def build_workbook_xml():
    sheets = [
        ("场景卡-空白版", "rId1"),
        ("场景卡-示例版", "rId4"),
        ("开场提问链",    "rId5"),
        ("工具与应急预案","rId6"),
        ("完整催化方案",  "rId7"),
        ("会议产出报告",  "rId8"),
        ("认证评分记录",  "rId9"),
    ]
    sheet_elems = "".join(
        f'<sheet name="{name}" sheetId="{i+1}" r:id="{rid}"/>'
        for i, (name, rid) in enumerate(sheets)
    )
    return (
        f'<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n'
        f'<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"\n'
        f'  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">\n'
        f'  <fileVersion appName="xl" lastEdited="7" lowestEdited="7"/>\n'
        f'  <workbookPr defaultThemeVersion="166925"/>\n'
        f'  <bookViews>\n'
        f'    <workbookView xWindow="0" yWindow="0" windowWidth="20140" windowHeight="10960"/>\n'
        f'  </bookViews>\n'
        f'  <sheets>{sheet_elems}</sheets>\n'
        f'  <calcPr calcId="191029"/>\n'
        f'</workbook>'
    )


def build_workbook_rels():
    rels = [
        ('rId1', 'worksheets/sheet1.xml'),
        ('rId2', 'styles.xml'),
        ('rId3', 'sharedStrings.xml'),
        ('rId4', 'worksheets/sheet2.xml'),
        ('rId5', 'worksheets/sheet3.xml'),
        ('rId6', 'worksheets/sheet4.xml'),
        ('rId7', 'worksheets/sheet5.xml'),
        ('rId8', 'worksheets/sheet6.xml'),
        ('rId9', 'worksheets/sheet7.xml'),
    ]
    rel_elems = "".join(
        f'<Relationship Id="{rid}" '
        f'Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" '
        f'Target="{target}"/>'
        for rid, target in rels
    )
    return (
        f'<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n'
        f'<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">\n'
        f'{rel_elems}\n'
        f'</Relationships>'
    )


def build_content_types():
    sheets = [f"xl/worksheets/sheet{i}.xml" for i in range(1, 8)]
    overrides = "".join(
        f'\n  <Override PartName="/{s}" '
        f'ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>'
        for s in sheets
    )
    return (
        f'<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n'
        f'<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">\n'
        f'  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>\n'
        f'  <Default Extension="xml" ContentType="application/xml"/>\n'
        f'  <Override PartName="/xl/workbook.xml" '
        f'ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>\n'
        f'  <Override PartName="/xl/styles.xml" '
        f'ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>\n'
        f'  <Override PartName="/xl/sharedStrings.xml" '
        f'ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/>'
        f'{overrides}\n'
        f'</Types>'
    )


def build_root_rels():
    return (
        f'<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n'
        f'<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">\n'
        f'  <Relationship Id="rId1"\n'
        f'    Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument"\n'
        f'    Target="xl/workbook.xml"/>\n'
        f'</Relationships>'
    )


# ════════════════════════════════════════════════════════════════════════════
# 6.  Main build
# ════════════════════════════════════════════════════════════════════════════
def main():
    print("Building shared strings...")
    ss_xml, idx_map = build_shared_strings()

    print("Building styles...")
    styles_xml = build_styles()

    print("Building sheet 1: 场景卡-空白版...")
    sheet1 = build_sheet1(idx_map)

    print("Building sheet 2: 场景卡-示例版...")
    sheet2 = build_sheet2(idx_map)

    print("Building sheet 3: 开场提问链...")
    sheet3 = build_sheet3(idx_map)

    print("Building sheet 4: 工具与应急预案...")
    sheet4 = build_sheet4(idx_map)

    print("Building sheet 5: 完整催化方案...")
    sheet5 = build_sheet5(idx_map)

    print("Building sheet 6: 会议产出报告...")
    sheet6 = build_sheet6(idx_map)

    print("Building sheet 7: 认证评分记录...")
    sheet7 = build_sheet7(idx_map)

    wb_xml = build_workbook_xml()
    wb_rels = build_workbook_rels()
    ct_xml = build_content_types()
    root_rels = build_root_rels()

    print(f"Packing to {OUTPUT}...")
    with zipfile.ZipFile(OUTPUT, "w", zipfile.ZIP_DEFLATED) as zf:
        zf.writestr("[Content_Types].xml", ct_xml)
        zf.writestr("_rels/.rels", root_rels)
        zf.writestr("xl/workbook.xml", wb_xml)
        zf.writestr("xl/_rels/workbook.xml.rels", wb_rels)
        zf.writestr("xl/styles.xml", styles_xml)
        zf.writestr("xl/sharedStrings.xml", ss_xml)
        zf.writestr("xl/worksheets/sheet1.xml", sheet1)
        zf.writestr("xl/worksheets/sheet2.xml", sheet2)
        zf.writestr("xl/worksheets/sheet3.xml", sheet3)
        zf.writestr("xl/worksheets/sheet4.xml", sheet4)
        zf.writestr("xl/worksheets/sheet5.xml", sheet5)
        zf.writestr("xl/worksheets/sheet6.xml", sheet6)
        zf.writestr("xl/worksheets/sheet7.xml", sheet7)

    print(f"Done! File written to:\n  {OUTPUT}")
    print(f"File size: {os.path.getsize(OUTPUT):,} bytes")


if __name__ == "__main__":
    main()
