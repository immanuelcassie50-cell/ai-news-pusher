#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Comprehensive edits.json generator for 秘塔多轮对话教程 PPT - 140 pages.
All in-text quotes use 「」. All slot fills respect max_chars.
"""
import json, sys, io, os
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")

from pathlib import Path
OUT = Path(r"D:\2026年课程\ai课2026整理\搜索\秘塔多轮对话教程\授课PPT\edits.json")
TEMPLATE_DETAIL = r"C:\Users\Administrator\.claude\skills\商务风格PPT\templates\mckinsey-style\detail.json"

with open(r"D:\CC\temp\ppt_extract\slot_map.json", "r", encoding="utf-8") as f:
    SM = json.load(f)
with open(TEMPLATE_DETAIL, "r", encoding="utf-8") as f:
    TD = json.load(f)

# Build slot_id -> (max_chars, level, font_size) lookup
SLOT_INFO = {}  # (slide, slot_id) -> dict
for slide_key, page in SM.items():
    slide = int(slide_key)
    for sid, info in page["slots"].items():
        SLOT_INFO[(slide, sid)] = info

def trunc(t, n):
    if t is None:
        return ""
    if len(t) <= n:
        return t
    return t[:max(0, n-1)] + "…"

def fill(slide, slot_id, text):
    """Fill a slot with text, truncating to max_chars if needed."""
    info = SLOT_INFO.get((slide, slot_id))
    if info is None:
        return None  # slot doesn't exist
    if not info.get("editable", False):
        return None
    cap = info["max_chars"]
    return trunc(text, cap) if text else ""

# =================================================================
# Per-page content functions - return list of (slot_id, text) pairs
# =================================================================

# ---------- Slide 4 universal filler ----------
def make_s4(title, blocks):
    """blocks: list of (sub, body) up to 13"""
    out = [("s4_sh4_p0r0", title)]
    smalls = ["s4_sh23_p0r0", "s4_sh24_p0r0", "s4_sh25_p0r0", "s4_sh30_p0r0",
              "s4_sh3_p0r0", "s4_sh33_p0r0", "s4_sh50_p0r0", "s4_sh53_p0r0",
              "s4_sh55_p0r0", "s4_sh77_p0r0", "s4_sh78_p0r0", "s4_sh79_p0r0", "s4_sh80_p0r0"]
    bodies = ["s4_sh31_p0r0", "s4_sh28_p0r0", "s4_sh34_p0r0", "s4_sh51_p0r0",
              "s4_sh54_p0r0", "s4_sh56_p0r0"]
    small_caps = [9, 9, 9, 9, 10, 10, 9, 9, 9, 9, 9, 9, 9]
    body_caps = [62, 72, 72, 62, 48, 48]
    for i, blk in enumerate(blocks):
        if i >= len(smalls):
            break
        sub = blk[0] if len(blk) > 0 else ""
        body = blk[1] if len(blk) > 1 else ""
        out.append((smalls[i], sub))
        if i < len(bodies):
            out.append((bodies[i], body))
    # Tag fill
    out.append(("s4_sh26_p0r0", "核心要点"))
    out.append(("s4_sh29_p0r0", "记住"))
    nums = ["一", "二", "三", "四", "五", "六", "七", "八"]
    for i, sid in enumerate(["s4_sh35_p0r0", "s4_sh36_p0r0", "s4_sh37_p0r0", "s4_sh38_p0r0",
                              "s4_sh58_p0r0", "s4_sh59_p0r0", "s4_sh60_p0r0", "s4_sh61_p0r0"]):
        out.append((sid, nums[i]))
    return out

def page_s4(title, blocks):
    return [(4, sid, t) for sid, t in make_s4(title, blocks)]

# ---------- Slide 7 chapter divider ----------
def page_div(ch_num, ch_title, key_msg, goal_msg, sub_msg):
    return [(7, "s7_sh42_p0r0", f"第{ch_num}章"),
            (7, "s7_sh14_p0r0", ch_num),
            (7, "s7_sh14_p1r0", "章"),
            (7, "s7_sh62_p0r0", ch_title[:2]),
            (7, "s7_sh15_p0r0", key_msg),
            (7, "s7_sh74_p0r0", "关键"),
            (7, "s7_sh77_p0r0", goal_msg),
            (7, "s7_sh84_p0r0", "目标"),
            (7, "s7_sh89_p0r0", sub_msg),
            (7, "s7_sh23_p0r0", "本章主轴"),
            (7, "s7_sh25_p0r0", f"本章讲{key_msg}。所有方法都服务于'信息质量 = 问题质量 × 轮次深度'这个公式。")]

# ---------- Slide 5 (五段) ----------
def page_s5(title, sec_titles, sec_bodies):
    out = [(5, "s5_sh4_p0r0", title), (5, "s5_sh43_p0r0", "核心答案")]
    pairs = [("s5_sh52_p0r0", 13, "s5_sh87_p0r0", 67),
             ("s5_sh109_p0r0", 13, "s5_sh110_p0r0", 57),
             ("s5_sh112_p0r0", 13, "s5_sh113_p0r0", 57),
             ("s5_sh115_p0r0", 13, "s5_sh116_p0r0", 28),
             ("s5_sh118_p0r0", 13, "s5_sh119_p0r0", 57)]
    for i, (ts, tc, bs, bc) in enumerate(pairs):
        if i < len(sec_titles):
            out.append((5, ts, sec_titles[i]))
        if i < len(sec_bodies):
            out.append((5, bs, sec_bodies[i]))
    sec_labels = ["s5_sh127_p0r0", "s5_sh176_p0r0", "s5_sh194_p0r0", "s5_sh212_p0r0", "s5_sh270_p0r0"]
    for i, sl in enumerate(sec_labels):
        if i < len(sec_titles):
            out.append((5, sl, sec_titles[i]))
    body2 = [("s5_sh142_p0r0", 72), ("s5_sh172_p0r0", 72), ("s5_sh190_p0r0", 43),
             ("s5_sh208_p0r0", 72), ("s5_sh280_p0r0", 72)]
    for i, (bs, bc) in enumerate(body2):
        if i < len(sec_bodies) and sec_bodies[i]:
            out.append((5, bs, sec_bodies[i]))
    return out

# ---------- Slide 10 PDCA ----------
def page_s10(title, sections):
    out = [(10, "s10_sh146_p0r0", title), (10, "s10_sh40_p0r0", "P"), (10, "s10_sh40_p1r0", "L")]
    for i, slot in enumerate(["s10_sh47_p0r0", "s10_sh181_p0r0", "s10_sh182_p0r0", "s10_sh183_p0r0"]):
        if i < len(sections):
            out.append((10, slot, sections[i][0]))
    tag_slots = ["s10_sh14_p0r0", "s10_sh16_p0r0", "s10_sh18_p0r0", "s10_sh20_p0r0"]
    sub_tag = ["s10_sh45_p0r0", "s10_sh48_p0r0", "s10_sh49_p0r0", "s10_sh50_p0r0",
               "s10_sh68_p0r0", "s10_sh70_p0r0", "s10_sh71_p0r0", "s10_sh72_p0r0",
               "s10_sh91_p0r0", "s10_sh93_p0r0", "s10_sh94_p0r0", "s10_sh95_p0r0"]
    short = [("s10_sh15_p0r0", 22), ("s10_sh22_p0r0", 22), ("s10_sh23_p0r0", 22),
             ("s10_sh24_p0r0", 22), ("s10_sh46_p0r0", 22), ("s10_sh51_p0r0", 22),
             ("s10_sh52_p0r0", 45), ("s10_sh53_p0r0", 22), ("s10_sh69_p0r0", 22),
             ("s10_sh73_p0r0", 22), ("s10_sh74_p0r0", 22), ("s10_sh75_p0r0", 22),
             ("s10_sh92_p0r0", 22), ("s10_sh128_p0r0", 22), ("s10_sh129_p0r0", 22),
             ("s10_sh130_p0r0", 22)]
    footer = [("s10_sh29_p0r0", 72), ("s10_sh56_p0r0", 72), ("s10_sh78_p0r0", 72), ("s10_sh133_p0r0", 72)]
    nums = ["一", "二", "三", "四"]
    si, ui, fi = 0, 0, 0
    for i, (lab, brief, body) in enumerate(sections[:4]):
        if i < len(tag_slots):
            out.append((10, tag_slots[i], nums[i]))
        if ui < len(sub_tag):
            out.append((10, sub_tag[ui], nums[i]))
            ui += 1
        if si < len(short):
            out.append((10, short[si][0], brief))
            si += 1
        if si < len(short):
            out.append((10, short[si][0], body[:22]))
            si += 1
        if si < len(short):
            out.append((10, short[si][0], body))
            si += 1
        if fi < len(footer):
            out.append((10, footer[fi][0], (body + " " + body)[:72]))
            fi += 1
    return out

# ---------- Slide 12 J agenda ----------
def page_s12_agenda(title, stages):
    out = [(12, "s12_sh99_p0r0", title)]
    main = [("s12_sh4_p0r0", 75, "s12_sh7_p0r0", 1, "s12_sh7_p1r0", 1),
            ("s12_sh88_p0r0", 75, "s12_sh89_p0r0", 1, "s12_sh89_p1r0", 1),
            ("s12_sh97_p0r0", 64, "s12_sh98_p0r0", 1, "s12_sh98_p1r0", 1),
            ("s12_sh110_p0r0", 64, "s12_sh111_p0r0", 1, "s12_sh111_p1r0", 1),
            ("s12_sh119_p0r0", 64, "s12_sh120_p0r0", 1, "s12_sh120_p1r0", 1)]
    label_slots = ["s12_sh6_p0r0", "s12_sh32_p0r0", "s12_sh33_p0r0", "s12_sh34_p0r0", "s12_sh35_p0r0"]
    for i, ((ms, mc, ls1, lc1, ls2, lc2), (lab, body, pair)) in enumerate(zip(main, stages)):
        out.append((12, ms, body))
        out.append((12, ls1, pair[0]))
        out.append((12, ls2, pair[1]))
        out.append((12, label_slots[i], lab))
    deco = ["s12_sh9_p0r0", "s12_sh39_p0r0", "s12_sh42_p0r0", "s12_sh43_p0r0",
            "s12_sh92_p0r0", "s12_sh93_p0r0", "s12_sh94_p0r0", "s12_sh95_p0r0"]
    nums = ["01", "02", "03", "04", "05", "06", "07", "08"]
    for i, d in enumerate(deco):
        out.append((12, d, nums[i]))
    aux3 = ["s12_sh3_p0r0", "s12_sh10_p0r0", "s12_sh12_p0r0", "s12_sh13_p0r0",
            "s12_sh14_p0r0", "s12_sh18_p0r0", "s12_sh24_p0r0", "s12_sh25_p0r0"]
    for i, a in enumerate(aux3):
        out.append((12, a, nums[i]))
    aux2 = ["s12_sh103_p0r0", "s12_sh129_p0r0", "s12_sh130_p0r0", "s12_sh134_p0r0", "s12_sh135_p0r0"]
    for i, a in enumerate(aux2):
        out.append((12, a, ["01", "02", "03", "04", "05"][i]))
    return out

# ---------- Slide 18 cover ----------
def page_s18_cover(title1, title2, year, sub1, sub2, sub3, sub4):
    big = (sub1 + " " + sub2 + " " + sub3 + " " + sub4)
    return [
        (18, "s18_sh95_p0r0", "秘塔"), (18, "s18_sh97_p0r0", "对话"), (18, "s18_sh99_p0r0", "教程"),
        (18, "s18_sh2_p0r0", title1), (18, "s18_sh14_p0r0", sub1), (18, "s18_sh17_p0r0", sub2),
        (18, "s18_sh19_p0r0", sub3), (18, "s18_sh29_p0r0", sub4), (18, "s18_sh33_p0r0", "秘塔多轮对话"),
        (18, "s18_sh49_p0r0", "讲师"), (18, "s18_sh51_p0r0", "年份"),
        (18, "s18_sh53_p0r0", "AI 时代核心技能"),
        (18, "s18_sh89_p0r0", big), (18, "s18_sh73_p0r0", big),
        (18, "s18_sh96_p0r0", "上"), (18, "s18_sh98_p0r0", "中"), (18, "s18_sh100_p0r0", "下"),
        (18, "s18_sh35_p0r0", "01"), (18, "s18_sh35_p1r0", "01"),
        (18, "s18_sh36_p0r0", "02"), (18, "s18_sh36_p1r0", "02"),
        (18, "s18_sh37_p0r0", "03"), (18, "s18_sh37_p1r0", "03"),
        (18, "s18_sh38_p0r0", "04"), (18, "s18_sh38_p1r0", "04"),
        (18, "s18_sh39_p0r0", "05"), (18, "s18_sh39_p1r0", "05"),
        (18, "s18_sh40_p0r0", "06"), (18, "s18_sh40_p1r0", "06"),
        (18, "s18_sh11_p0r0", sub1), (18, "s18_sh16_p0r0", sub2), (18, "s18_sh18_p0r0", sub3),
        (18, "s18_sh28_p0r0", sub1), (18, "s18_sh30_p0r0", sub2), (18, "s18_sh32_p0r0", sub3),
        (18, "s18_sh56_p0r0", sub1), (18, "s18_sh57_p0r0", sub2), (18, "s18_sh84_p0r0", sub3),
        (18, "s18_sh74_p0r0", year), (18, "s18_sh75_p0r0", title2),
        (18, "s18_sh90_p0r0", year), (18, "s18_sh91_p0r0", title2),
        (18, "s18_sh71_p0r0", "课程"), (18, "s18_sh72_p0r0", "讲师"),
        (18, "s18_sh87_p0r0", year), (18, "s18_sh88_p0r0", title2),
        (18, "s18_sh48_p0r0", sub1), (18, "s18_sh50_p0r0", sub2), (18, "s18_sh52_p0r0", sub3),
    ]

# ---------- Slide 22 ----------
def page_s22(title_l, title_r, names, labels):
    out = [(22, "s22_sh11_p0r0", title_l), (22, "s22_sh23_p0r0", names[0]),
           (22, "s22_sh3_p0r0", names[1]), (22, "s22_sh24_p0r0", names[2]),
           (22, "s22_sh362_p0r0", title_l), (22, "s22_sh362_p1r0", title_r)]
    short21 = ["s22_sh5_p0r0", "s22_sh6_p0r0", "s22_sh7_p0r0", "s22_sh8_p0r0",
               "s22_sh9_p0r0", "s22_sh10_p0r0", "s22_sh12_p0r0", "s22_sh13_p0r0",
               "s22_sh26_p0r0", "s22_sh30_p0r0", "s22_sh31_p0r0", "s22_sh320_p0r0"]
    for i, s in enumerate(short21):
        if i < len(labels):
            out.append((22, s, labels[i]))
    # s22_sh25 and s22_sh321 are tiny number slots (cap=4) - skip to avoid overflow
    return out

# ---------- Slide 26 (funnel) ----------
def page_s26(title, stages):
    out = [(26, "s26_sh11_p0r0", title), (26, "s26_sh5_p0r0", "圆"), (26, "s26_sh7_p0r0", "心")]
    if len(stages) >= 1:
        out.append((26, "s26_sh3_p0r0", stages[0][0]))
    if len(stages) >= 2:
        out.append((26, "s26_sh4_p0r0", stages[1][0]))
    if len(stages) >= 3:
        out.append((26, "s26_sh6_p0r0", stages[2][0]))
    if len(stages) >= 3:
        out.append((26, "s26_sh12_p0r0", stages[0][1]))
        out.append((26, "s26_sh16_p0r0", stages[0][0]))
        out.append((26, "s26_sh19_p0r0", stages[0][0]))
        out.append((26, "s26_sh23_p0r0", stages[1][1]))
        out.append((26, "s26_sh24_p0r0", stages[1][0]))
        out.append((26, "s26_sh25_p0r0", stages[2][1]))
        out.append((26, "s26_sh26_p0r0", stages[2][0]))
    if len(stages) >= 4:
        out.append((26, "s26_sh137_p0r0", stages[3][1]))
        out.append((26, "s26_sh138_p0r0", stages[3][0]))
        out.append((26, "s26_sh139_p0r0", stages[3][0]))
        out.append((26, "s26_sh140_p0r0", stages[3][0]))
    if len(stages) >= 5:
        for slot in ["s26_sh141_p0r0", "s26_sh142_p0r0", "s26_sh143_p0r0", "s26_sh144_p0r0"]:
            out.append((26, slot, stages[4][0]))
    for i, slot in enumerate(["s26_sh15_p0r0", "s26_sh129_p0r0", "s26_sh132_p0r0",
                                "s26_sh145_p0r0", "s26_sh166_p0r0", "s26_sh172_p0r0"]):
        if i < len(stages):
            out.append((26, slot, stages[i][0]))
    for i, slot in enumerate(["s26_sh147_p0r0", "s26_sh150_p0r0", "s26_sh152_p0r0",
                                "s26_sh156_p0r0", "s26_sh169_p0r0", "s26_sh173_p0r0"]):
        if i < len(stages):
            out.append((26, slot, stages[i][1]))
    return out

# ---------- Slide 29 (compare) ----------
def page_s29(title, left_items, right_items):
    out = [(29, "s29_sh11_p0r0", title), (29, "s29_sh249_p0r0", "左"), (29, "s29_sh250_p0r0", "右")]
    tags_l = ["s29_sh14_p0r0", "s29_sh15_p0r0", "s29_sh16_p0r0",
              "s29_sh18_p0r0", "s29_sh19_p0r0", "s29_sh37_p0r0"]
    nums = ["01", "02", "03", "04", "05", "06"]
    for i, s in enumerate(tags_l):
        if i < len(left_items):
            out.append((29, s, left_items[i][0]))
        else:
            out.append((29, s, nums[i]))
    body_l = ["s29_sh63_p0r0", "s29_sh140_p0r0", "s29_sh141_p0r0",
              "s29_sh142_p0r0", "s29_sh143_p0r0", "s29_sh144_p0r0"]
    for i, s in enumerate(body_l):
        if i < len(left_items):
            out.append((29, s, left_items[i][1]))
    body_r = ["s29_sh225_p0r0", "s29_sh226_p0r0", "s29_sh227_p0r0",
              "s29_sh228_p0r0", "s29_sh229_p0r0", "s29_sh230_p0r0"]
    for i, s in enumerate(body_r):
        if i < len(right_items):
            out.append((29, s, right_items[i][1]))
    return out

# ---------- Slide 36 (sum-detail) ----------
def page_s36(title, t1, t2, t3, s_l, d_l, s_r, d_r, s_m, d_m):
    return [
        (36, "s36_sh11_p0r0", title), (36, "s36_sh122_p0r0", "1"), (36, "s36_sh122_p1r0", "2"),
        (36, "s36_sh124_p0r0", s_l + s_r + s_m),
        (36, "s36_sh135_p0r0", t1), (36, "s36_sh135_p1r0", t2), (36, "s36_sh135_p2r0", t3),
        (36, "s36_sh138_p0r0", s_l[:50]), (36, "s36_sh139_p0r0", d_l[:54]),
        (36, "s36_sh140_p0r0", d_l + d_r + d_m),
        (36, "s36_sh198_p0r0", s_m[:54]), (36, "s36_sh200_p0r0", s_m[:50]),
        (36, "s36_sh200_p1r0", s_m[50:100] if len(s_m) > 50 else s_m),
        (36, "s36_sh201_p0r0", s_m[:54]),
        (36, "s36_sh202_p0r0", d_m + d_l + d_r),
        (36, "s36_sh210_p0r0", s_r[:54]), (36, "s36_sh212_p0r0", d_r[:108]),
        (36, "s36_sh214_p0r0", d_r + d_l + d_m),
        (36, "s36_sh126_p0r0", t1), (36, "s36_sh229_p0r0", t2), (36, "s36_sh231_p0r0", t3),
    ]

# =================================================================
# CONTENT per page
# =================================================================
PAGES = {}

# ===== 封面+框架 (8 pages) =====
PAGES["cover_main"] = page_s18_cover(
    "秘塔多轮对话教程", "秘塔 AI 课", "2026",
    "让秘塔从搜索变顾问", "七章掌握多轮对话方法",
    "信息质量=问题×轮次", "把普通工具用出专家价值"
)

PAGES["agenda_j"] = page_s12_agenda(
    "五步学习旅程", [
        ("顿悟", "看到单轮与多轮的差异，意识到「我还没用对」", ("觉", "醒")),
        ("认知", "理解秘塔本质，掌握多轮对话价值（模块一）", ("建", "立")),
        ("方法", "第一轮设计 + 三大追问策略（模块二三四）", ("学", "会")),
        ("实战", "三个完整案例拆解，串成可执行流程（模块五）", ("练", "透")),
        ("带走", "三件套工具卡 + 自检清单，养成习惯（模块六）", ("用", "稳")),
    ]
)

PAGES["framework_form"] = page_s4("核心公式", [
    ("信息质量", "你能从一次对话里拿到的实际价值", "结果"),
    ("问题质量", "问错了再多轮也救不回来，决定天花板", "上限"),
    ("轮次深度", "只问一轮永远停在第一层，决定深度", "挖深"),
    ("相乘关系", "两者缺一都拿不到好东西——一个拖后腿另一个全白费", "相乘"),
    ("课程主轴", "前两章攻问题质量，后两章攻轮次深度", "主轴"),
    ("本课目标", "从「百科词条」到「可决策洞见」", "目标"),
    ("天花板", "相乘关系", "相乘"), ("挖深", "递进", "递进"),
    ("协同", "缺一不可", "不可"), ("一", "二", "三"),
    ("四", "五", "六"), ("七", "八", "九"),
])

PAGES["framework_map"] = page_s4("七章学习地图", [
    ("第一章", "心智切换：从搜索引擎模式到对话顾问模式", "模式"),
    ("第二章", "第一轮问对：主题锚定 + 目的说明 + 期待明确", "公式"),
    ("第三章", "主动读懂：五种信号 + 三大追问策略", "策略"),
    ("第四章", "信息漏斗：广撒网→聚焦→深挖→验证→整合", "漏斗"),
    ("第五章", "信息判断：具体/有边界/有逻辑/有来源", "判断"),
    ("第六章", "三案例实战：医疗PM/UI转型/数据学习", "实战"),
    ("第七章", "三件套工具：漏斗卡/策略卡/自检清单", "带走"),
    ("", "", ""), ("", "", ""), ("", "", ""), ("", "", ""), ("", "", ""), ("", "", ""),
])

PAGES["framework_user"] = page_s4("学员来课前四种状态", [
    ("迷茫型", "「我用秘塔感觉就是搜一下，也没比百度强多少」", "覆盖"),
    ("期待型", "「听说 AI 很厉害，但不知道怎么用出效果来」", "想用"),
    ("自我怀疑", "「可能是我不会问问题，所以答案总是不够好」", "怀疑"),
    ("有经验型", "「我会追问，但不确定追问方向对不对」", "追问"),
    ("课程设计", "不区分起点：从基础到进阶，每章都有显性收益", "覆盖"),
    ("情感基调", "「顿悟感」而非「挫败感」——先建立信心再提升难度", "信心"),
    ("", "", ""), ("", "", ""), ("", "", ""), ("", "", ""), ("", "", ""), ("", "", ""),
])

PAGES["framework_goal"] = page_s4("三层学习目标", [
    ("认知层", "知道多轮对话的价值；知道好坏问题的本质区别", "知道"),
    ("技能层", "能写出有效第一轮；能用三种追问策略", "能做"),
    ("应用层", "能用于真实场景；能自我复盘；能内化为习惯", "会用"),
    ("终极成果", "针对陌生主题，独立完成3-5轮有方向感的对话", "对话"),
    ("产出形态", "信息密度高、结构清晰、可直接使用的认知图谱", "图谱"),
    ("", "", ""),
    ("", "", ""), ("", "", ""), ("", "", ""), ("", "", ""), ("", "", ""), ("", "", ""),
])

PAGES["framework_ethic"] = page_s4("教学理念", [
    ("顿悟感", "开头应有「原来我一直没用对」的顿悟，不是「我原来很蠢」", "不蠢"),
    ("接地气", "案例真实，允许展示「走偏」的过程，完美对话反不可信", "真实"),
    ("可复用", "三件套工具卡 + 自检清单，确保课后能稳定使用", "带走"),
    ("对话感", "避免说教，多用「你有没有遇到……」「你感觉怎么样」", "对话"),
    ("渐进式", "练习先建立信心，再逐步提升难度", "渐进"),
    ("", "", ""),
    ("", "", ""), ("", "", ""), ("", "", ""), ("", "", ""), ("", "", ""), ("", "", ""),
])

PAGES["framework_bd"] = page_s4("课程边界（不包含什么）", [
    ("外取路径", "本课是经验萃取「外取」路径——从外部知识源获取信息", "外取"),
    ("基础操作", "假设你已会打开并使用秘塔；不讲界面基础", "基础"),
    ("不比较", "不比较秘塔与 ChatGPT/Kimi 的优劣；方法通用", "通用"),
    ("不涉及", "不涉及提示词工程技术细节；本课方法是底层通用", "提示"),
    ("不涉及", "拿到信息后的内化整理属于下一课范畴", "内化"),
    ("", "", ""),
    ("", "", ""), ("", "", ""), ("", "", ""), ("", "", ""), ("", "", ""), ("", "", ""),
])

# ===== 第一章 (16 pages) =====
PAGES["div1"] = page_div("一", "你真的会用吗", "秘塔的真实价值：把用法用对",
                          "信息质量 = 问题质量 × 轮次深度", "从搜索引擎模式到对话顾问模式")

PAGES["p1_open"] = page_s4("开场：两个人同一种工具", [
    ("第一个人", "输入「内容营销是什么」→ 读完定义、形式、案例 → 关掉", "第1人"),
    ("第二个人", "完整背景 + 具体情境 + 三个问题 + 期待方向 → 拿到诊断与方向", "第2人"),
    ("结果差异", "第一个人拿到百科词条；第二个人拿到可决策洞见", "差距"),
    ("差距根源", "差距不在秘塔水平，在用法——第一轮质量 + 追问深度", "用法"),
    ("第二个人", "背景 + 情境 + 三个具体问题", "四要素"),
    ("四轮差异", "四轮对话，拿到问题诊断 + 三个改进方向 + 判断框架", "四轮"),
    ("", "", ""), ("", "", ""), ("", "", ""), ("", "", ""), ("", "", ""), ("", "", ""),
])

PAGES["p1_openA"] = page_s4("第一个人的用法", [
    ("输入", "输入「内容营销是什么」——纯关键词，无背景无目的", "输入"),
    ("过程", "读完定义、形式、大公司案例，觉得大致了解就关掉", "被动"),
    ("结果", "拿到百科词条式通用介绍——对所有人有用，对自己无价值", "结果"),
    ("问题在哪", "纯关键词等同于搜索词——秘塔不知道你的真实目的", "搜索"),
    ("心智定位", "把问题丢进去看答案，而不是带着目的一起挖", "丢进"),
    ("", "", ""),
    ("", "", ""), ("", "", ""), ("", "", ""), ("", "", ""), ("", "", ""), ("", "", ""),
])

PAGES["p1_openB"] = page_s4("第二个人的用法", [
    ("身份", "B2B SaaS 公司市场经理，50 人，制造业客户", "B2B"),
    ("情境", "公众号为主做了半年，线索转化效果不理想", "半年"),
    ("问题", "方向性错误、哪种内容形式对制造业客户有效、新人易忽略", "三问"),
    ("期待", "针对方向性错误 + 哪种内容主题效果更好——明确不要通用介绍", "明确"),
    ("四轮收获", "问题诊断 + 三个改进方向 + 评估先调哪里的判断框架", "四轮"),
    ("", "", ""),
    ("", "", ""), ("", "", ""), ("", "", ""), ("", "", ""), ("", "", ""), ("", "", ""),
])

PAGES["p1_quote"] = page_s4("核心金句", [
    ("差距", "不是来自秘塔的水平——两个案例都在同一工具上", "用法"),
    ("本质", "是来自用法——第一轮问题质量 + 后续追问深度", "用法"),
    ("一句话", "差距来自哪里？不是秘塔的水平，是用法。", "金句"),
    ("底层逻辑", "整门课程围绕这一句话展开：怎么把秘塔用对", "主轴"),
    ("不是工具", "不是工具有问题，是用法没到位——这是后续所有方法的前提", "前提"),
    ("", "", ""),
    ("", "", ""), ("", "", ""), ("", "", ""), ("", "", ""), ("", "", ""), ("", "", ""),
])

PAGES["p1_formula"] = page_s4("核心公式", [
    ("信息质量", "你能从一次对话里拿到的实际价值", "结果"),
    ("问题质量", "问错了再多轮也救不回来，决定天花板", "上限"),
    ("轮次深度", "只问一轮永远停在第一层，决定深度", "深度"),
    ("两要素", "两者缺一都拿不到好东西——一个拖后腿另一个全白费", "相乘"),
    ("课程主轴", "前两章攻问题质量，后两章攻轮次深度，第五章攻判断", "主轴"),
    ("", "", ""),
    ("", "", ""), ("", "", ""), ("", "", ""), ("", "", ""), ("", "", ""), ("", "", ""),
])

PAGES["p1_formula_x"] = page_s4("公式解读", [
    ("问题质量", "决定天花板——开局定调，开局错后面难救", "上限"),
    ("轮次深度", "决定能挖多深——只问一轮拿不到核心逻辑", "深度"),
    ("协同作用", "只提升一个，另一个拖后腿——两个都做好才有用", "相乘"),
    ("关键认识", "本课不是讲秘塔，是讲你怎么用——两件事是两回事", "认知"),
    ("学后状态", "能写出好问题 + 持续追问 + 拿到可决策信息", "目标"),
    ("", "", ""),
    ("", "", ""), ("", "", ""), ("", "", ""), ("", "", ""), ("", "", ""), ("", "", ""),
])

PAGES["p1_test8"] = page_s4("8个认知自测问题", [
    ("问题1", "通常问完一个问题，看完答案就结束了", "问1"),
    ("问题2", "会追问，但不确定追问方向对不对", "问2"),
    ("问题3", "有时觉得回答太泛泛，但不知道怎么让它更具体", "问3"),
    ("判定档", "8 题分三档——搜索引擎模式 / 有感无方法 / 已有好习惯", "判定"),
    ("问题4-8", "问前想清目的 / 引用前文 / 主动质疑", "对照"),
    ("", "", ""),
    ("", "", ""), ("", "", ""), ("", "", ""), ("", "", ""), ("", "", ""), ("", "", ""),
])

PAGES["p1_judge_table"] = page_s22(
    "三档判定", "对号入座",
    ["搜索引擎模式", "有感无方法", "已有好习惯"],
    ["问完结束", "当搜索用", "没追问习惯", "答案泛泛", "不会变具体", "命中第1、6项",
     "追问没方向", "会质疑", "命中第2、3、8项", "目的清晰", "引用前文", "命中第4、5、7项"]
)

PAGES["p1_mode_old"] = page_s4("旧模式 vs 新模式", [
    ("心理定位", "旧：把问题丢进去看答案——像搜索引擎", "旧"),
    ("结束标准", "旧：拿到了一个答案就结束", "旧"),
    ("互动方式", "旧：一次输入，一次输出，没有追问", "旧"),
    ("新模式", "新：带着目的进来，和它一起挖——像顾问对话", "新"),
    ("新结束", "新：这个问题已经被真正解决", "新"),
    ("", "", ""),
    ("", "", ""), ("", "", ""), ("", "", ""), ("", "", ""), ("", "", ""), ("", "", ""),
])

PAGES["p1_mode_detail"] = page_s4("心智切换详解", [
    ("上下文", "旧：没有上下文，每轮独立——不引用前文", "旧"),
    ("检验方式", "旧：接受回答即结束——不会质疑、不会要求反例", "旧"),
    ("结束标准", "新：结束原因不是「拿到答案」，是「问题真正被解决」", "新"),
    ("新维度", "新：每轮之间有积累，可引用前文——像下棋步步相连", "新"),
    ("新检验", "主动质疑、要求反例、换角度——把回答当起点", "新"),
    ("", "", ""),
    ("", "", ""), ("", "", ""), ("", "", ""), ("", "", ""), ("", "", ""), ("", "", ""),
])

PAGES["p1_judge5"] = page_s5(
    "三档判定与课程价值",
    ["搜索引擎模式", "有感无方法", "已有好习惯", "课程定位", "价值承诺"],
    ["问完结束 + 当搜索用——第1、6项命中两个以上",
     "会追问、但没方向——第2、3、8项命中",
     "目的清晰、引用前文、质疑结论——第4、5、7项命中",
     "本课程为「有感无方法」的你量身设计",
     "其他两档也能系统化自己的方法"]
)

PAGES["p1_summary"] = page_s4("第一章小结", [
    ("核心公式", "信息质量 = 问题质量 × 轮次深度", "公式"),
    ("心智切换", "从搜索引擎模式到对话顾问模式", "切换"),
    ("结束标准", "结束原因不是「拿到答案」，是「问题真正被解决」", "结束"),
    ("下一章", "第二章讲第一轮怎么问对——三件事 + 模板公式", "下章"),
    ("三件事", "主题锚定 + 目的说明 + 期待明确", "三件"),
    ("", "", ""),
    ("", "", ""), ("", "", ""), ("", "", ""), ("", "", ""), ("", "", ""), ("", "", ""),
])

PAGES["p1_gains"] = page_s36(
    "第一章关键收获", "认知", "技能", "应用",
    "差距来自用法——不是工具水平", "差距来自用法，不是工具水平",
    "完成自测，知道自己起点", "完成自测，知道自己起点",
    "完成心智切换", "完成心智切换——从「拿到答案」到「问题真正被解决」"
)

PAGES["p1_to_c2"] = page_s4("进入第二章", [
    ("上一章", "建立了「为什么」——为什么秘塔用不到位是用法问题", "为什么"),
    ("下一章", "讲「怎么办」——第一轮怎么问对", "怎么办"),
    ("核心问题", "同样是问秘塔，为什么有人第一轮就进入有价值的轨道", "核心"),
    ("关键转变", "从「知道差距在用法」到「学会第一轮就问对」", "转变"),
    ("章间递进", "从心智层到方法层——三个功能 + 模板公式", "递进"),
    ("", "", ""),
    ("", "", ""), ("", "", ""), ("", "", ""), ("", "", ""), ("", "", ""), ("", "", ""),
])

PAGES["p1_insights"] = page_s4("三个关键洞察", [
    ("洞察1", "差距不在工具——同一工具可以产出截然不同的结果", "用法"),
    ("洞察2", "信息质量 = 问题质量 × 轮次深度——本课唯一核心", "公式"),
    ("洞察3", "结束原因不应该是「拿到答案」，是「问题真正被解决」", "结束"),
    ("标志性", "新模式：带着目的进来、和它一起挖、像顾问对话", "标志"),
    ("自测", "8 题自测知道你处于哪一档——决定你重点看哪些章", "自测"),
    ("", "", ""),
    ("", "", ""), ("", "", ""), ("", "", ""), ("", "", ""), ("", "", ""), ("", "", ""),
])

# Save partial - we'll add chapters 2-7 next
# (removed if __name__ block to be exec-friendly)
_PAGES_C2_COUNT = len(PAGES)
