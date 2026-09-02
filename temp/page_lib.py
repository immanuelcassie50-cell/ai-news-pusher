#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Generate full edits.json for 秘塔多轮对话教程 PPT - 140 pages.
All in-text quotes use 「」. All slot fills respect max_chars.
"""
import json, sys, io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

from pathlib import Path
OUT = Path(r"D:\2026年课程\ai课2026整理\搜索\秘塔多轮对话教程\授课PPT\edits.json")

with open(r"D:\CC\temp\ppt_extract\slot_map.json", "r", encoding="utf-8") as f:
    SM = json.load(f)

def trunc(t, n):
    if len(t) <= n:
        return t
    return t[:max(0, n-1)] + "…"

def valid_slots_for(slide):
    """Return dict of {slot_id: max_chars} for editable slots"""
    out = {}
    for sid, info in SM[str(slide)]["slots"].items():
        if info.get("editable"):
            out[sid] = info["max_chars"]
    return out

# ===============================================================
# 140-page plan
# ===============================================================
PLAN = [
    # === 封面与框架 (8) ===
    (18, "cover_main",     "课程封面"),
    (12, "agenda_j",       "五步学习旅程"),
    (4,  "framework_form", "核心公式"),
    (4,  "framework_map",  "七章学习地图"),
    (4,  "framework_user", "学员四状态"),
    (4,  "framework_goal", "三层学习目标"),
    (4,  "framework_ethic","教学理念"),
    (4,  "framework_bd",   "课程边界"),
    # === 第一章 (16) ===
    (7,  "div1",           "第一章扉页"),
    (4,  "p1_open",        "开场：两个人同一种工具"),
    (4,  "p1_openA",       "第一个人用法"),
    (4,  "p1_openB",       "第二个人用法"),
    (4,  "p1_quote",       "核心金句"),
    (4,  "p1_formula",     "核心公式"),
    (4,  "p1_formula_x",   "公式解读"),
    (4,  "p1_test8",       "8个认知自测"),
    (22, "p1_judge_table", "三档判定"),
    (4,  "p1_mode_old",    "旧模式 vs 新模式"),
    (4,  "p1_mode_detail", "心智切换详解"),
    (5,  "p1_judge5",      "三档判定与课程价值"),
    (4,  "p1_summary",     "第一章小结"),
    (36, "p1_gains",       "关键收获"),
    (4,  "p1_to_c2",       "进入第二章"),
    (4,  "p1_insights",    "三个关键洞察"),
    # === 第二章 (20) ===
    (7,  "div2",           "第二章扉页"),
    (4,  "p2_open",        "李想 vs 张敏"),
    (4,  "p2_openB",       "张敏的三件事"),
    (4,  "p2_open_diff",   "差异的本质"),
    (4,  "p2_f1",          "功能1 主题锚定"),
    (4,  "p2_f2",          "功能2 目的说明"),
    (4,  "p2_f3",          "功能3 期待明确"),
    (4,  "p2_fcheck",      "三个功能自检法"),
    (4,  "p2_template",    "模板公式"),
    (4,  "p2_template_app","公式应用"),
    (22, "p2_template_ex", "完整示例"),
    (22, "p2_err5",        "五种错误"),
    (22, "p2_err_detail",  "错误详解"),
    (4,  "p2_err_multi",   "多问题并发警告"),
    (5,  "p2_ex1a",        "练习1-A"),
    (5,  "p2_ex1a_ans",    "练习1-A答案"),
    (5,  "p2_ex1b",        "练习1-B"),
    (4,  "p2_summary",     "第二章总结"),
    (4,  "p2_principle",   "核心原则"),
    (4,  "p2_to_c3",       "进入第三章"),
    # === 第三章 (26) ===
    (7,  "div3",           "第三章扉页"),
    (4,  "p3_active",      "主动读 vs 被动看"),
    (4,  "p3_active_diff", "差异详解"),
    (4,  "p3_active_task", "任务切换"),
    (22, "p3_signal5",     "五种信号表"),
    (4,  "p3_s1",          "信号1 模糊概念"),
    (4,  "p3_s2",          "信号2 无依据结论"),
    (4,  "p3_s3",          "信号3 有意思没展开"),
    (4,  "p3_s4",          "信号4 视角缺失"),
    (4,  "p3_s5",          "信号5 令你存疑"),
    (4,  "p3_strat",       "三大策略概览"),
    (4,  "p3_strat1_def",  "策略1 纵向深挖"),
    (22, "p3_strat1_sent", "纵向深挖句式"),
    (4,  "p3_strat1_ex",   "纵向深挖示例"),
    (4,  "p3_strat2_def",  "策略2 横向扩展"),
    (22, "p3_strat2_sent", "横向扩展句式"),
    (4,  "p3_strat2_ex",   "横向扩展示例"),
    (4,  "p3_strat3_def",  "策略3 反向验证"),
    (22, "p3_strat3_sent", "反向验证句式"),
    (4,  "p3_strat3_ex",   "反向验证示例"),
    (4,  "p3_strat3_tip",  "反向验证关键提示"),
    (22, "p3_strat_combo", "三种策略组合"),
    (4,  "p3_strat_pick",  "选策略的判断法"),
    (5,  "p3_ex",          "综合练习"),
    (4,  "p3_summary",     "第三章总结"),
    (4,  "p3_to_c4",       "进入第四章"),
    # === 第四章 (18) ===
    (7,  "div4",           "第四章扉页"),
    (4,  "p4_open",        "开场"),
    (26, "p4_funnel",      "信息漏斗模型"),
    (4,  "p4_r1",          "第一轮 广撒网"),
    (4,  "p4_r2",          "第二轮 聚焦"),
    (4,  "p4_r3",          "第三轮 深挖"),
    (4,  "p4_r4",          "第四轮 验证"),
    (4,  "p4_r5",          "第五轮 整合"),
    (4,  "p4_core",        "信息漏斗核心"),
    (4,  "p4_stop12",      "终止信号1-2"),
    (4,  "p4_stop34",      "终止信号3-4"),
    (4,  "p4_not_stop",    "不该停的时候"),
    (22, "p5_err5_draft",  "五种失误 (在第四章)"),
    (22, "p5_err5_detail", "失误详解"),
    (4,  "p4_check",       "快速自我检验"),
    (4,  "p4_summary",     "第四章总结"),
    (4,  "p4_quick",       "速查表"),
    (4,  "p4_to_c5",       "进入第五章"),
    # === 第五章 (16) ===
    (7,  "div5",           "第五章扉页"),
    (4,  "p5_open",        "开场判断练习"),
    (29, "p5_compare_AB",  "回答A vs 回答B"),
    (29, "p5_score_table", "质量评估表"),
    (4,  "p5_f1",          "特征1 具体细节"),
    (4,  "p5_f2",          "特征2 限定条件"),
    (4,  "p5_f3",          "特征3 逻辑可追溯"),
    (4,  "p5_f4",          "特征4 来源引用"),
    (22, "p5_warn4",       "四种警惕信号"),
    (4,  "p5_warn_detail", "警惕信号详解"),
    (4,  "p5_warn_combo",  "特别警惕的组合"),
    (4,  "p5_quote_use",   "来源引用方法"),
    (4,  "p5_conflict",    "矛盾信息处理"),
    (4,  "p5_summary",     "第五章总结"),
    (4,  "p5_to_c6",       "进入第六章"),
    (4,  "p5_preview",     "第六章预告"),
    # === 第六章 (24) ===
    (7,  "div6",           "第六章扉页"),
    (4,  "p6_open",        "本章读法"),
    (4,  "p6_A_bg",        "案例A 背景"),
    (4,  "p6_A_r1",        "案例A 第一轮"),
    (4,  "p6_A_r2",        "案例A 第二轮"),
    (4,  "p6_A_r3",        "案例A 第三轮"),
    (4,  "p6_A_r4",        "案例A 第四轮"),
    (22, "p6_A_sum",       "案例A 学习点"),
    (4,  "p6_B_bg",        "案例B 背景"),
    (4,  "p6_B_r1",        "案例B 第一轮"),
    (4,  "p6_B_r2",        "案例B 第二轮"),
    (4,  "p6_B_key",       "案例B 关键时刻"),
    (4,  "p6_B_r3",        "案例B 第三轮"),
    (4,  "p6_B_r4",        "案例B 第四轮"),
    (22, "p6_B_sum",       "案例B 学习点"),
    (4,  "p6_C_bg",        "案例C 背景"),
    (4,  "p6_C_r1",        "案例C 第一轮"),
    (4,  "p6_C_r2",        "案例C 第二轮"),
    (4,  "p6_C_r3",        "案例C 第三轮"),
    (4,  "p6_C_r4",        "案例C 第四轮"),
    (22, "p6_C_sum",       "案例C 学习点"),
    (4,  "p6_all",         "三案例总览"),
    (4,  "p6_to_c7",       "进入第七章"),
    (4,  "p6_key",         "实战关键洞察"),
    # === 第七章 (14) ===
    (7,  "div7",           "第七章扉页"),
    (4,  "p7_open",        "从学会到稳定会用"),
    (4,  "p7_t1_intro",    "工具一 信息漏斗卡"),
    (4,  "p7_t1_r12",      "第一轮 第二轮"),
    (4,  "p7_t1_r34",      "第三轮 第四轮"),
    (4,  "p7_t1_r5",       "第五轮 停止标准"),
    (4,  "p7_t2_intro",    "工具二 策略速查"),
    (4,  "p7_t2_drill",    "纵向深挖句式"),
    (4,  "p7_t2_broad",    "横向扩展句式"),
    (4,  "p7_t2_chk",      "反向验证句式"),
    (4,  "p7_t2_signal",   "五种信号对照"),
    (4,  "p7_t3_intro",    "工具三 自检清单"),
    (4,  "p7_t3_2week",    "两周后阶段检验"),
    (4,  "p7_migrate",     "方法迁移说明"),
    # === 收尾 (4) ===
    (4,  "end1",           "完整知识框架"),
    (4,  "end2",           "核心要点回顾"),
    (12, "end3",           "行动召唤"),
    (18, "end4",           "结束页"),
]
assert len(PLAN) == 140, f"Expected 140 pages, got {len(PLAN)}"

# ===============================================================
# Content library per page
# Each function returns {slot_id: text}
# ===============================================================

# --- Slide 4 generic (两段内容页) ---
# 30 editable slots, main: 段落标题(14) + 小标题(15) + 正文(48-72)

def s4_fill(title, blocks):
    """blocks is a list of (sub_a, body_a, sub_b, body_b, sub_c, body_c, ...)"""
    out = {"s4_sh4_p0r0": trunc(title, 14)}
    smalls = ["s4_sh23_p0r0", "s4_sh24_p0r0", "s4_sh25_p0r0", "s4_sh30_p0r0",
              "s4_sh3_p0r0", "s4_sh33_p0r0", "s4_sh50_p0r0", "s4_sh53_p0r0",
              "s4_sh55_p0r0", "s4_sh77_p0r0", "s4_sh78_p0r0", "s4_sh79_p0r0", "s4_sh80_p0r0"]
    bodies = ["s4_sh31_p0r0", "s4_sh28_p0r0", "s4_sh34_p0r0", "s4_sh51_p0r0",
              "s4_sh54_p0r0", "s4_sh56_p0r0"]
    small_caps = [9, 9, 9, 9, 10, 10, 9, 9, 9, 9, 9, 9, 9]
    body_caps = [62, 72, 72, 62, 48, 48]
    # Tag slots (small numbered 4-char)
    tags = ["s4_sh35_p0r0", "s4_sh36_p0r0", "s4_sh37_p0r0", "s4_sh38_p0r0",
            "s4_sh58_p0r0", "s4_sh59_p0r0", "s4_sh60_p0r0", "s4_sh61_p0r0"]
    # Tag pair (label + number)
    # 4 of them = pairs (4 chars each)
    # Use the label slot and a "6-char" element
    # s4_sh26_p0r0 is a 12-char 标签/序号
    # We use sh26, sh29 as the main tag
    # s4_sh29 max=6
    # s4_sh26 max=12
    # Let's fill these with topic
    if not blocks:
        return out
    # blocks: each block is (sub, body)
    idx = 0
    for sub, body in blocks:
        if idx >= len(smalls):
            break
        out[smalls[idx]] = trunc(sub, small_caps[idx])
        if idx < len(bodies):
            out[bodies[idx]] = trunc(body, body_caps[idx])
        idx += 1
    # Tag fill
    out["s4_sh26_p0r0"] = trunc("核心要点", 12)
    out["s4_sh29_p0r0"] = trunc("记住", 6)
    # Fill small numbered slots (sh35-sh38, sh58-sh61) with character labels
    nums = ["一", "二", "三", "四", "五", "六", "七", "八"]
    for i, t in enumerate(tags):
        out[t] = nums[i % len(nums)]
    return out


# --- Slide 7 generic (三段内容页 - chapter divider) ---
def div_fill(ch_num_str, ch_title, key_msg, goal_msg, sub_msg):
    out = {
        "s7_sh42_p0r0": trunc(f"第{ch_num_str}章", 15),
        "s7_sh14_p0r0": trunc(ch_num_str[:1], 4),
        "s7_sh14_p1r0": "章",
        "s7_sh62_p0r0": trunc(ch_title[:2], 2),
        "s7_sh15_p0r0": trunc(key_msg, 76),
        "s7_sh74_p0r0": "关键",
        "s7_sh77_p0r0": trunc(goal_msg, 76),
        "s7_sh84_p0r0": "目标",
        "s7_sh89_p0r0": trunc(sub_msg, 76),
        "s7_sh23_p0r0": "本章主轴",
        "s7_sh25_p0r0": trunc(f"本章讲{key_msg}。用'信息质量 = 问题质量 × 轮次深度'作为主轴，所有方法都服务于这个公式。", 205),
        "s7_sh27_p0r0": "一",
        "s7_sh117_p0r0": "二",
        "s7_sh118_p0r0": "三",
        "s7_sh119_p0r0": "四",
        "s7_sh120_p0r0": "五",
        "s7_sh121_p0r0": "六",
        "s7_sh122_p0r0": "七",
        "s7_sh123_p0r0": "八",
    }
    return out


# --- Slide 5 generic (五段内容页) ---
def s5_fill(title, sec_titles, sec_bodies):
    """sec_titles: 6 short, sec_bodies: 6 long"""
    out = {"s5_sh4_p0r0": trunc(title, 14)}
    # The slide 5 has 5 sections but more slots, let me identify
    # 段落标题: sh43 (max 22)
    # 5 sections each with: title (sh52/109/112/115/118 max 13) + body
    # s5_sh52_p0r0, s5_sh87_p0r0 = sec 1 title + body
    # s5_sh109_p0r0, s5_sh110_p0r0 = sec 2
    # s5_sh112_p0r0, s5_sh113_p0r0 = sec 3
    # s5_sh115_p0r0, s5_sh116_p0r0 = sec 4
    # s5_sh118_p0r0, s5_sh119_p0r0 = sec 5
    # Plus 5 secondary slots: sh127/176/194/212/270 (max 14) and sh138/170/188/190/206/208/278/280 (max 43-100)
    sec_pairs = [
        ("s5_sh52_p0r0", 13,  "s5_sh87_p0r0",  67),
        ("s5_sh109_p0r0", 13, "s5_sh110_p0r0", 57),
        ("s5_sh112_p0r0", 13, "s5_sh113_p0r0", 57),
        ("s5_sh115_p0r0", 13, "s5_sh116_p0r0", 28),
        ("s5_sh118_p0r0", 13, "s5_sh119_p0r0", 57),
    ]
    for i, (t_slot, t_cap, b_slot, b_cap) in enumerate(sec_pairs):
        if i < len(sec_titles):
            out[t_slot] = trunc(sec_titles[i], t_cap)
        if i < len(sec_bodies):
            out[b_slot] = trunc(sec_bodies[i], b_cap)
    # Header title
    out["s5_sh43_p0r0"] = trunc("核心答案", 22)
    # Secondary slots
    sec_labels = ["s5_sh127_p0r0", "s5_sh176_p0r0", "s5_sh194_p0r0", "s5_sh212_p0r0", "s5_sh270_p0r0"]
    sec_bodies2 = [("s5_sh138_p0r0", 43), ("s5_sh170_p0r0", 43), ("s5_sh188_p0r0", 100),
                   ("s5_sh206_p0r0", 72), ("s5_sh278_p0r0", 43)]
    for i, lab_slot in enumerate(sec_labels):
        if i < len(sec_titles):
            out[lab_slot] = trunc(sec_titles[i], 14)
    # 5 more body slots
    body_map = [
        ("s5_sh142_p0r0", 72), ("s5_sh172_p0r0", 72), ("s5_sh190_p0r0", 43),
        ("s5_sh208_p0r0", 72), ("s5_sh280_p0r0", 72)
    ]
    for i, (b_slot, b_cap) in enumerate(body_map):
        if i < len(sec_bodies) and sec_bodies[i]:
            out[b_slot] = trunc(sec_bodies[i], b_cap)
    return out


# --- Slide 10 (PDCA) ---
def s10_fill(title, sections):
    """sections: list of (label, brief, body)"""
    out = {"s10_sh146_p0r0": trunc(title, 16)}
    # 4 stages: P/D/C/A
    # sh47, sh181, sh182, sh183 (max 172) - main stage labels
    # sh40 (P/D/C/A) and sh40_p1 (max 3)
    # sh6 (max 86) - intro
    # 4 sections each with 标签(4) + 短句(22) + 短句(22-45) + 页脚(72)
    stage_labels = ["P", "D", "C", "A"]
    stage_titles = [("s10_sh47_p0r0", 172), ("s10_sh181_p0r0", 172),
                    ("s10_sh182_p0r0", 172), ("s10_sh183_p0r0", 172)]
    for i, (slot, cap) in enumerate(stage_titles):
        if i < len(sections):
            out[slot] = trunc(sections[i][0], cap)
    # Stage short tags (PDCA)
    out["s10_sh40_p0r0"] = "P"
    out["s10_sh40_p1r0"] = "L"
    # Tags (4-char 辅助): sh14, sh16, sh18, sh20 (max 4)
    tag_slots = ["s10_sh14_p0r0", "s10_sh16_p0r0", "s10_sh18_p0r0", "s10_sh20_p0r0"]
    # Short 22-char slots: sh15, sh22, sh23, sh24, sh45, sh46, sh48, sh49, sh50, sh51, sh52, sh53
    short_slots = [("s10_sh15_p0r0", 22), ("s10_sh22_p0r0", 22), ("s10_sh23_p0r0", 22),
                   ("s10_sh24_p0r0", 22), ("s10_sh46_p0r0", 22), ("s10_sh51_p0r0", 22),
                   ("s10_sh52_p0r0", 45), ("s10_sh53_p0r0", 22), ("s10_sh69_p0r0", 22),
                   ("s10_sh73_p0r0", 22), ("s10_sh74_p0r0", 22), ("s10_sh75_p0r0", 22),
                   ("s10_sh92_p0r0", 22), ("s10_sh128_p0r0", 22), ("s10_sh129_p0r0", 22),
                   ("s10_sh130_p0r0", 22)]
    footer_slots = [("s10_sh29_p0r0", 72), ("s10_sh56_p0r0", 72), ("s10_sh78_p0r0", 72), ("s10_sh133_p0r0", 72)]
    # Sub tags (4 char): sh45, sh48, sh49, sh50 (max 4)
    sub_tag_slots = ["s10_sh45_p0r0", "s10_sh48_p0r0", "s10_sh49_p0r0", "s10_sh50_p0r0",
                     "s10_sh68_p0r0", "s10_sh70_p0r0", "s10_sh71_p0r0", "s10_sh72_p0r0",
                     "s10_sh91_p0r0", "s10_sh93_p0r0", "s10_sh94_p0r0", "s10_sh95_p0r0"]
    # Distribute: for each section: 1 tag (4) + 1 short (22) + 1 short (22) + 1 short (22 or 45) + 1 footer (72)
    nums = ["一", "二", "三", "四"]
    short_idx = 0
    sub_idx = 0
    footer_idx = 0
    for i, (lab, brief, body) in enumerate(sections[:4]):
        if i < len(tag_slots):
            out[tag_slots[i]] = nums[i]
        if i < 4 and sub_idx < len(sub_tag_slots):
            out[sub_tag_slots[sub_idx]] = nums[i]
            sub_idx += 1
        if short_idx < len(short_slots):
            out[short_slots[short_idx][0]] = trunc(brief, short_slots[short_idx][1])
            short_idx += 1
        if short_idx < len(short_slots):
            out[short_slots[short_idx][0]] = trunc(body[:22], short_slots[short_idx][1])
            short_idx += 1
        if short_idx < len(short_slots):
            out[short_slots[short_idx][0]] = trunc(body, short_slots[short_idx][1])
            short_idx += 1
        if footer_idx < len(footer_slots):
            out[footer_slots[footer_idx][0]] = trunc(body + " " + body, footer_slots[footer_idx][1])
            footer_idx += 1
    return out


# --- Slide 12 (J page) ---
def s12_fill_agenda(title, stages):
    """stages: list of (label, body, double_label)"""
    out = {
        "s12_sh99_p0r0": trunc(title, 19),
        "s12_sh4_p0r0":  trunc(stages[0][1], 75),
        "s12_sh7_p0r0":  trunc(stages[0][2][0], 1),
        "s12_sh7_p1r0":  trunc(stages[0][2][1], 1),
        "s12_sh88_p0r0": trunc(stages[1][1], 75),
        "s12_sh89_p0r0": trunc(stages[1][2][0], 1),
        "s12_sh89_p1r0": trunc(stages[1][2][1], 1),
        "s12_sh97_p0r0": trunc(stages[2][1], 64),
        "s12_sh98_p0r0": trunc(stages[2][2][0], 1),
        "s12_sh98_p1r0": trunc(stages[2][2][1], 1),
        "s12_sh110_p0r0": trunc(stages[3][1], 64),
        "s12_sh111_p0r0": trunc(stages[3][2][0], 1),
        "s12_sh111_p1r0": trunc(stages[3][2][1], 1),
        "s12_sh119_p0r0": trunc(stages[4][1], 64),
        "s12_sh120_p0r0": trunc(stages[4][2][0], 1),
        "s12_sh120_p1r0": trunc(stages[4][2][1], 1),
        "s12_sh6_p0r0":  trunc(stages[0][0], 4),
        "s12_sh32_p0r0": trunc(stages[1][0], 4),
        "s12_sh33_p0r0": trunc(stages[2][0], 4),
        "s12_sh34_p0r0": trunc(stages[3][0], 4),
        "s12_sh35_p0r0": trunc(stages[4][0], 4),
    }
    # Decorative 6-char 辅助: sh9, sh39, sh42, sh43, sh92, sh93, sh94, sh95
    deco = ["s12_sh9_p0r0", "s12_sh39_p0r0", "s12_sh42_p0r0", "s12_sh43_p0r0",
            "s12_sh92_p0r0", "s12_sh93_p0r0", "s12_sh94_p0r0", "s12_sh95_p0r0"]
    nums = ["01", "02", "03", "04", "05", "06", "07", "08"]
    for i, d in enumerate(deco):
        out[d] = nums[i]
    # 3-char 辅助: sh3, sh10, sh12, sh13, sh14, sh18, sh24, sh25
    aux3 = ["s12_sh3_p0r0", "s12_sh10_p0r0", "s12_sh12_p0r0", "s12_sh13_p0r0",
            "s12_sh14_p0r0", "s12_sh18_p0r0", "s12_sh24_p0r0", "s12_sh25_p0r0"]
    for i, a in enumerate(aux3):
        out[a] = nums[i]
    # 2-char 辅助: sh103, sh129, sh130, sh134, sh135
    aux2 = ["s12_sh103_p0r0", "s12_sh129_p0r0", "s12_sh130_p0r0", "s12_sh134_p0r0", "s12_sh135_p0r0"]
    for i, a in enumerate(aux2):
        out[a] = ["01", "02", "03", "04", "05"][i]
    return out


# --- Slide 18 (标识页 - cover) ---
def s18_cover(title1, title2, year, sub1, sub2, sub3, sub4):
    out = {
        # 4-char 段落标题: sh95/97/99 (max 4)
        "s18_sh95_p0r0": trunc("秘塔", 4),
        "s18_sh97_p0r0": trunc("对话", 4),
        "s18_sh99_p0r0": trunc("教程", 4),
        "s18_sh2_p0r0":  trunc(title1, 18),
        "s18_sh14_p0r0": trunc(sub1, 13),
        "s18_sh17_p0r0": trunc(sub2, 13),
        "s18_sh19_p0r0": trunc(sub3, 13),
        "s18_sh29_p0r0": trunc(sub4, 18),
        "s18_sh33_p0r0": trunc("秘塔多轮对话", 19),
        "s18_sh49_p0r0": trunc("讲师", 13),
        "s18_sh51_p0r0": trunc("年份", 13),
        "s18_sh53_p0r0": trunc("AI 时代核心技能", 21),
        # 1056-char 注释
        "s18_sh89_p0r0": trunc(sub1 + sub2 + sub3 + sub4, 1056),
        "s18_sh73_p0r0": trunc(sub1 + sub2 + sub3 + sub4, 990),
        # 3-char 标签: sh96/98/100
        "s18_sh96_p0r0": "上",
        "s18_sh98_p0r0": "中",
        "s18_sh100_p0r0": "下",
        # 3-char 装饰: sh35-40
        "s18_sh35_p0r0": "01",
        "s18_sh35_p1r0": "01",
        "s18_sh36_p0r0": "02",
        "s18_sh36_p1r0": "02",
        "s18_sh37_p0r0": "03",
        "s18_sh37_p1r0": "03",
        "s18_sh38_p0r0": "04",
        "s18_sh38_p1r0": "04",
        "s18_sh39_p0r0": "05",
        "s18_sh39_p1r0": "05",
        "s18_sh40_p0r0": "06",
        "s18_sh40_p1r0": "06",
        # 91-char 正文: sh11, sh16, sh18
        "s18_sh11_p0r0": trunc(sub1, 91),
        "s18_sh16_p0r0": trunc(sub2, 91),
        "s18_sh18_p0r0": trunc(sub3, 91),
        # 68-char 正文: sh28, sh30, sh32
        "s18_sh28_p0r0": trunc(sub1, 68),
        "s18_sh30_p0r0": trunc(sub2, 68),
        "s18_sh32_p0r0": trunc(sub3, 68),
        # 45-char 注释: sh56, sh57, sh84
        "s18_sh56_p0r0": trunc(sub1, 45),
        "s18_sh57_p0r0": trunc(sub2, 45),
        "s18_sh84_p0r0": trunc(sub3, 45),
        # 10-char 注释
        "s18_sh74_p0r0": trunc(year, 10),
        "s18_sh75_p0r0": trunc(title2, 10),
        "s18_sh90_p0r0": trunc(year, 10),
        "s18_sh91_p0r0": trunc(title2, 10),
        "s18_sh71_p0r0": trunc("课程", 10),
        "s18_sh72_p0r0": trunc("讲师", 10),
        "s18_sh87_p0r0": trunc(year, 10),
        "s18_sh88_p0r0": trunc(title2, 10),
        # 68-char 正文: sh48, sh50, sh52
        "s18_sh48_p0r0": trunc(sub1, 68),
        "s18_sh50_p0r0": trunc(sub2, 68),
        "s18_sh52_p0r0": trunc(sub3, 68),
    }
    return out


# --- Slide 22 (三段重点工作) ---
def s22_fill(title_l, title_r, names, labels):
    """names: 3 段落标题; labels: 18 short辅助"""
    out = {
        "s22_sh11_p0r0": trunc(title_l, 13),
        "s22_sh23_p0r0": trunc(names[0], 480),
        "s22_sh3_p0r0":  trunc(names[1], 480),
        "s22_sh24_p0r0": trunc(names[2], 480),
        "s22_sh362_p0r0": trunc(title_l, 33),
        "s22_sh362_p1r0": trunc(title_r, 33),
    }
    # 18 辅助 slots (21 or 4 char)
    short21 = ["s22_sh5_p0r0", "s22_sh6_p0r0", "s22_sh7_p0r0", "s22_sh8_p0r0",
               "s22_sh9_p0r0", "s22_sh10_p0r0", "s22_sh12_p0r0", "s22_sh13_p0r0",
               "s22_sh26_p0r0", "s22_sh30_p0r0", "s22_sh31_p0r0", "s22_sh320_p0r0"]
    tag4 = ["s22_sh25_p0r0", "s22_sh321_p0r0"]
    for i, s in enumerate(short21):
        if i < len(labels):
            out[s] = trunc(labels[i], 21)
    for i, s in enumerate(tag4):
        if i < len(labels):
            out[s] = trunc(labels[i], 4)
    return out


# --- Slide 26 (漏斗模型) ---
def s26_fill(title, stages):
    """stages: list of (label, body) up to 5 stages"""
    out = {
        "s26_sh11_p0r0": trunc(title, 15),
        "s26_sh3_p0r0":  trunc(stages[0][0] if stages else "", 4),
        "s26_sh4_p0r0":  trunc(stages[1][0] if len(stages)>1 else "", 4),
        "s26_sh6_p0r0":  trunc(stages[2][0] if len(stages)>2 else "", 4),
    }
    # Tag slots sh5, sh7 (max 4)
    out["s26_sh5_p0r0"] = "圆"
    out["s26_sh7_p0r0"] = "心"
    # Stage rows
    # Row 1: sh12 (62), sh16 (9), sh19 (9)
    # Row 2: sh23 (62), sh24 (9), sh25 (62), sh26 (9)
    # Row 3: sh30 (8), sh31 (8)
    # Row 4-5: sh128 (8), sh130 (9), sh136 (9), sh137 (105), sh138 (9), sh139 (19), sh140 (19), sh141-144 (8 each)
    # Side notes: sh15, sh18 (9, 15), sh129, sh131, sh133, sh145, sh147 (39), sh149, sh150 (39), sh151, sh152 (39), sh153, sh156 (39), sh166, sh169 (39), sh172, sh173 (39)
    # Layout: top 3 row labels, then 5 column labels for funnel
    # I will use sh12, sh23, sh25 for the 3 top bodies, sh16/19/24/26 for tags
    if len(stages) >= 3:
        out["s26_sh12_p0r0"] = trunc(stages[0][1], 62)
        out["s26_sh16_p0r0"] = trunc(stages[0][0], 9)
        out["s26_sh19_p0r0"] = trunc(stages[0][0], 9)
        out["s26_sh23_p0r0"] = trunc(stages[1][1], 62)
        out["s26_sh24_p0r0"] = trunc(stages[1][0], 9)
        out["s26_sh25_p0r0"] = trunc(stages[2][1], 62)
        out["s26_sh26_p0r0"] = trunc(stages[2][0], 9)
    if len(stages) >= 4:
        out["s26_sh137_p0r0"] = trunc(stages[3][1], 105)
        out["s26_sh138_p0r0"] = trunc(stages[3][0], 9)
        out["s26_sh139_p0r0"] = trunc(stages[3][0], 19)
        out["s26_sh140_p0r0"] = trunc(stages[3][0], 19)
    if len(stages) >= 5:
        out["s26_sh141_p0r0"] = trunc(stages[4][0], 8)
        out["s26_sh142_p0r0"] = trunc(stages[4][0], 8)
        out["s26_sh143_p0r0"] = trunc(stages[4][0], 8)
        out["s26_sh144_p0r0"] = trunc(stages[4][0], 8)
    # Side notes (5 columns)
    notes_short = [("s26_sh15_p0r0", 9), ("s26_sh129_p0r0", 9), ("s26_sh132_p0r0", 9),
                   ("s26_sh145_p0r0", 9), ("s26_sh166_p0r0", 9), ("s26_sh172_p0r0", 9)]
    for i, (slot, cap) in enumerate(notes_short):
        if i < len(stages):
            out[slot] = trunc(stages[i][0], cap)
    notes_long = [("s26_sh147_p0r0", 39), ("s26_sh150_p0r0", 39), ("s26_sh152_p0r0", 39),
                  ("s26_sh156_p0r0", 39), ("s26_sh169_p0r0", 39), ("s26_sh173_p0r0", 39)]
    for i, (slot, cap) in enumerate(notes_long):
        if i < len(stages):
            out[slot] = trunc(stages[i][1], cap)
    return out


# --- Slide 29 (对比结构) ---
def s29_fill(title, left_items, right_items):
    """left_items/right_items: list of (tag, body) up to 6 each"""
    out = {"s29_sh11_p0r0": trunc(title, 15)}
    # 4 段落标题 tags: sh249, sh250 (max 4)
    out["s29_sh249_p0r0"] = "左"
    out["s29_sh250_p0r0"] = "右"
    # 6 tags 3-char: sh14-37
    tags_l = ["s29_sh14_p0r0", "s29_sh15_p0r0", "s29_sh16_p0r0",
              "s29_sh18_p0r0", "s29_sh19_p0r0", "s29_sh37_p0r0"]
    nums = ["01", "02", "03", "04", "05", "06"]
    for i, s in enumerate(tags_l):
        if i < len(left_items):
            out[s] = trunc(left_items[i][0], 3)
        else:
            out[s] = nums[i]
    # 6 bodies max=46: sh63, sh140-145
    body_l_slots = ["s29_sh63_p0r0", "s29_sh140_p0r0", "s29_sh141_p0r0",
                    "s29_sh142_p0r0", "s29_sh143_p0r0", "s29_sh144_p0r0"]
    for i, s in enumerate(body_l_slots):
        if i < len(left_items):
            out[s] = trunc(left_items[i][1], 46)
    # Sub 6-char 辅助: sh145-164
    sub_l = ["s29_sh145_p0r0", "s29_sh148_p0r0", "s29_sh149_p0r0", "s29_sh150_p0r0",
             "s29_sh151_p0r0", "s29_sh152_p0r0", "s29_sh153_p0r0", "s29_sh154_p0r0",
             "s29_sh155_p0r0", "s29_sh156_p0r0", "s29_sh157_p0r0", "s29_sh158_p0r0",
             "s29_sh159_p0r0", "s29_sh160_p0r0", "s29_sh161_p0r0", "s29_sh162_p0r0",
             "s29_sh163_p0r0", "s29_sh164_p0r0"]
    # Right side
    body_r_slots = ["s29_sh225_p0r0", "s29_sh226_p0r0", "s29_sh227_p0r0",
                    "s29_sh228_p0r0", "s29_sh229_p0r0", "s29_sh230_p0r0"]
    for i, s in enumerate(body_r_slots):
        if i < len(right_items):
            out[s] = trunc(right_items[i][1], 46)
    sub_r = ["s29_sh231_p0r0", "s29_sh232_p0r0", "s29_sh233_p0r0", "s29_sh234_p0r0",
             "s29_sh235_p0r0", "s29_sh236_p0r0", "s29_sh237_p0r0", "s29_sh238_p0r0",
             "s29_sh239_p0r0", "s29_sh240_p0r0", "s29_sh241_p0r0", "s29_sh242_p0r0",
             "s29_sh243_p0r0", "s29_sh244_p0r0", "s29_sh245_p0r0", "s29_sh246_p0r0",
             "s29_sh247_p0r0", "s29_sh248_p0r0"]
    return out


# --- Slide 36 (总分关系) ---
def s36_fill(title, t1, t2, t3, summary_l, detail_l, summary_r, detail_r, summary_m, detail_m):
    out = {
        "s36_sh11_p0r0": trunc(title, 14),
        "s36_sh122_p0r0": "1",
        "s36_sh122_p1r0": "2",
        "s36_sh124_p0r0": trunc(summary_l + summary_r + summary_m, 54),
        "s36_sh135_p0r0": trunc(t1, 19),
        "s36_sh135_p1r0": trunc(t2, 19),
        "s36_sh135_p2r0": trunc(t3, 19),
        "s36_sh138_p0r0": trunc(summary_l[:50], 50),
        "s36_sh139_p0r0": trunc(detail_l[:54], 54),
        "s36_sh140_p0r0": trunc(detail_l + detail_r + detail_m, 115),
        "s36_sh198_p0r0": trunc(summary_m[:54], 54),
        "s36_sh200_p0r0": trunc(summary_m[:50], 50),
        "s36_sh200_p1r0": trunc(summary_m[50:100] if len(summary_m)>50 else summary_m, 50),
        "s36_sh201_p0r0": trunc(summary_m[:54], 54),
        "s36_sh202_p0r0": trunc(detail_m + detail_l + detail_r, 115),
        "s36_sh210_p0r0": trunc(summary_r[:54], 54),
        "s36_sh212_p0r0": trunc(detail_r[:108], 108),
        "s36_sh214_p0r0": trunc(detail_r + detail_l + detail_m, 115),
        "s36_sh126_p0r0": trunc(t1, 7),
        "s36_sh229_p0r0": trunc(t2, 7),
        "s36_sh231_p0r0": trunc(t3, 9),
    }
    return out


# ===============================================================
# Content dispatch
# ===============================================================
CONTENT = {}

# --- Framework (slides 18, 12) ---
CONTENT["cover_main"] = lambda: s18_cover(
    "秘塔多轮对话教程", "秘塔 AI 课", "2026",
    "让秘塔从搜索工具变顾问", "七章掌握多轮对话方法", "信息质量 = 问题质量 × 轮次深度",
    "把普通 AI 工具用出专家级价值"
)

CONTENT["agenda_j"] = lambda: s12_fill_agenda(
    "五步学习旅程", [
        ("顿悟", "看到单轮与多轮的差异，意识到「我还没用对」", ("觉", "醒")),
        ("认知", "理解秘塔本质，掌握多轮对话价值（模块一）", ("建", "立")),
        ("方法", "第一轮设计 + 三大追问策略（模块二三四）", ("学", "会")),
        ("实战", "三个完整案例拆解，串成可执行流程（模块五）", ("练", "透")),
        ("带走", "三件套工具卡 + 自检清单，养成习惯（模块六）", ("用", "稳")),
    ]
)

# --- Framework pages (slide 4) ---
CONTENT["framework_form"] = lambda: s4_fill("核心公式", [
    ("信息质量", "你能从一次对话里拿到的实际价值", "结果"),
    ("问题质量", "问错了再多轮也救不回来，决定天花板", "上限"),
    ("轮次深度", "只问一轮永远停在第一层，决定深度", "挖深"),
    ("相乘关系", "两者缺一都拿不到好东西——一个拖后腿另一个全白费", "相乘"),
    ("课程主轴", "前两章攻问题质量，后两章攻轮次深度", "主轴"),
    ("本课目标", "从「百科词条」到「可决策洞见」", "目标"),
    ("天花板", "相乘", "相乘"),
    ("挖深", "递进", "递进"),
])

CONTENT["framework_map"] = lambda: s4_fill("七章学习地图", [
    ("第一章", "心智切换：从搜索引擎模式到对话顾问模式", "模式"),
    ("第二章", "第一轮问对：主题锚定 + 目的说明 + 期待明确", "公式"),
    ("第三章", "主动读懂：五种信号 + 三大追问策略", "策略"),
    ("第四章", "信息漏斗：广撒网→聚焦→深挖→验证→整合", "漏斗"),
    ("第五章", "信息判断：具体/有边界/有逻辑/有来源", "判断"),
    ("第六章", "三案例实战：医疗PM/UI转型/数据学习", "实战"),
    ("第七章", "三件套工具：漏斗卡/策略卡/自检清单", "带走"),
    ("", "", ""),
    ("", "", ""),
    ("", "", ""),
    ("", "", ""),
    ("", "", ""),
    ("", "", ""),
])

CONTENT["framework_user"] = lambda: s4_fill("学员来课前四种状态", [
    ("迷茫型", "「我用秘塔感觉就是搜一下，也没比百度强多少」", "覆盖"),
    ("期待型", "「听说 AI 很厉害，但不知道怎么用出效果来」", "想用"),
    ("自我怀疑", "「可能是我不会问问题，所以答案总是不够好」", "怀疑"),
    ("有经验型", "「我会追问，但不确定追问方向对不对」", "追问"),
    ("课程设计", "不区分起点：从基础到进阶，每章都有显性收益", "覆盖"),
    ("情感基调", "「顿悟感」而非「挫败感」——先建立信心再提升难度", "信心"),
    ("", "", ""),
    ("", "", ""),
    ("", "", ""),
    ("", "", ""),
    ("", "", ""),
    ("", "", ""),
])

CONTENT["framework_goal"] = lambda: s4_fill("三层学习目标", [
    ("认知层", "知道多轮对话的价值；知道好坏问题的本质区别", "知道"),
    ("技能层", "能写出有效第一轮；能用三种追问策略", "能做"),
    ("应用层", "能用于真实场景；能自我复盘；能内化为习惯", "会用"),
    ("终极成果", "针对陌生主题，独立完成3-5轮有方向感的对话", "对话"),
    ("产出形态", "信息密度高、结构清晰、可直接使用的认知图谱", "图谱"),
    ("", "", ""),
    ("", "", ""),
    ("", "", ""),
    ("", "", ""),
    ("", "", ""),
    ("", "", ""),
    ("", "", ""),
])

CONTENT["framework_ethic"] = lambda: s4_fill("教学理念", [
    ("顿悟感", "开头应有「原来我一直没用对」的顿悟，不是「我原来很蠢」", "不蠢"),
    ("接地气", "案例真实，允许展示「走偏」的过程，完美对话反不可信", "真实"),
    ("可复用", "三件套工具卡 + 自检清单，确保课后能稳定使用", "带走"),
    ("对话感", "避免说教，多用「你有没有遇到……」", "对话"),
    ("渐进式", "练习先建立信心，再逐步提升难度", "渐进"),
    ("", "", ""),
    ("", "", ""),
    ("", "", ""),
    ("", "", ""),
    ("", "", ""),
    ("", "", ""),
    ("", "", ""),
])

CONTENT["framework_bd"] = lambda: s4_fill("课程边界（不包含什么）", [
    ("外取路径", "本课是经验萃取「外取」路径——从外部知识源获取信息", "外取"),
    ("基础操作", "假设你已会打开并使用秘塔；不讲界面基础", "基础"),
    ("不比较", "不比较秘塔与 ChatGPT/Kimi 的优劣；方法通用", "通用"),
    ("不涉及", "不涉及提示词工程技术细节；本课方法是底层通用", "提示"),
    ("不涉及", "拿到信息后的内化整理属于下一课范畴", "内化"),
    ("", "", ""),
    ("", "", ""),
    ("", "", ""),
    ("", "", ""),
    ("", "", ""),
    ("", "", ""),
    ("", "", ""),
])

# ===============================================================
# Chapter 1 content
# ===============================================================
CONTENT["div1"] = lambda: div_fill(
    "一", "你真的会用吗",
    "秘塔的真实价值：把用法用对",
    "公式：信息质量 = 问题质量 × 轮次深度",
    "建立从「搜索引擎模式」到「对话顾问模式」的心智切换"
)

CONTENT["p1_open"] = lambda: s4_fill("开场：两个人同一种工具", [
    ("第一个人", "输入「内容营销是什么」→ 读完定义、形式、案例 → 关掉", "第1人"),
    ("第二个人", "完整背景 + 具体情境 + 三个问题 + 期待方向 → 拿到诊断与方向", "第2人"),
    ("结果差异", "第一个人拿到百科词条；第二个人拿到可决策洞见", "差距"),
    ("差距根源", "差距不在秘塔水平，在用法——第一轮质量 + 追问深度", "用法"),
    ("第二个人", "背景 + 情境 + 三个具体问题", "四要素"),
    ("四轮差异", "四轮对话，拿到问题诊断 + 三个改进方向 + 判断框架", "四轮"),
    ("", "", ""),
    ("", "", ""),
    ("", "", ""),
    ("", "", ""),
    ("", "", ""),
    ("", "", ""),
])

CONTENT["p1_openA"] = lambda: s4_fill("第一个人的用法", [
    ("输入", "输入「内容营销是什么」——纯关键词，无背景无目的", "输入"),
    ("过程", "读完定义、形式、大公司案例，觉得大致了解就关掉", "被动"),
    ("结果", "拿到百科词条式通用介绍——对所有人有用，对自己无价值", "结果"),
    ("问题在哪", "纯关键词等同于搜索词——秘塔不知道你的真实目的", "搜索"),
    ("心智定位", "把问题丢进去看答案，而不是带着目的一起挖", "丢进"),
    ("", "", ""),
    ("", "", ""),
    ("", "", ""),
    ("", "", ""),
    ("", "", ""),
    ("", "", ""),
    ("", "", ""),
])

CONTENT["p1_openB"] = lambda: s4_fill("第二个人的用法", [
    ("身份", "B2B SaaS 公司市场经理，50 人，制造业客户", "B2B"),
    ("情境", "公众号为主做了半年，线索转化效果不理想", "半年"),
    ("问题", "方向性错误、哪种内容形式对制造业客户有效、新人易忽略", "三问"),
    ("期待", "针对方向性错误 + 哪种内容主题效果更好——明确不要通用介绍", "明确"),
    ("四轮收获", "问题诊断 + 三个改进方向 + 评估先调哪里的判断框架", "四轮"),
    ("", "", ""),
    ("", "", ""),
    ("", "", ""),
    ("", "", ""),
    ("", "", ""),
    ("", "", ""),
    ("", "", ""),
])

CONTENT["p1_quote"] = lambda: s4_fill("核心金句", [
    ("差距", "不是来自秘塔的水平——两个案例都在同一工具上", "用法"),
    ("本质", "是来自用法——第一轮问题质量 + 后续追问深度", "用法"),
    ("一句话", "差距来自哪里？不是秘塔的水平，是用法。", "金句"),
    ("底层逻辑", "整门课程围绕这一句话展开：怎么把秘塔用对", "主轴"),
    ("不是工具", "不是工具有问题，是用法没到位——这是后续所有方法的前提", "前提"),
    ("", "", ""),
    ("", "", ""),
    ("", "", ""),
    ("", "", ""),
    ("", "", ""),
    ("", "", ""),
    ("", "", ""),
])

CONTENT["p1_formula"] = lambda: s4_fill("核心公式", [
    ("信息质量", "你能从一次对话里拿到的实际价值", "结果"),
    ("问题质量", "问错了再多轮也救不回来，决定天花板", "上限"),
    ("轮次深度", "只问一轮永远停在第一层，决定深度", "深度"),
    ("两要素", "两者缺一都拿不到好东西——一个拖后腿另一个全白费", "相乘"),
    ("课程主轴", "前两章攻问题质量，后两章攻轮次深度，第五章攻判断", "主轴"),
    ("", "", ""),
    ("", "", ""),
    ("", "", ""),
    ("", "", ""),
    ("", "", ""),
    ("", "", ""),
    ("", "", ""),
])

CONTENT["p1_formula_x"] = lambda: s4_fill("公式解读", [
    ("问题质量", "决定天花板——开局定调，开局错后面难救", "上限"),
    ("轮次深度", "决定能挖多深——只问一轮拿不到核心逻辑", "深度"),
    ("协同作用", "只提升一个，另一个拖后腿——两个都做好才有用", "相乘"),
    ("关键认识", "本课不是讲秘塔，是讲你怎么用——两件事是两回事", "认知"),
    ("学后状态", "能写出好问题 + 持续追问 + 拿到可决策信息", "目标"),
    ("", "", ""),
    ("", "", ""),
    ("", "", ""),
    ("", "", ""),
    ("", "", ""),
    ("", "", ""),
    ("", "", ""),
])

CONTENT["p1_test8"] = lambda: s4_fill("8个认知自测问题", [
    ("问题1", "通常问完一个问题，看完答案就结束了", "问1"),
    ("问题2", "会追问，但不确定追问方向对不对", "问2"),
    ("问题3", "有时觉得回答太泛泛，但不知道怎么让它更具体", "问3"),
    ("判定档", "8 题分三档——搜索引擎模式 / 有感无方法 / 已有好习惯", "判定"),
    ("问题4-8", "问前想清目的 / 引用前文 / 主动质疑", "对照"),
    ("", "", ""),
    ("", "", ""),
    ("", "", ""),
    ("", "", ""),
    ("", "", ""),
    ("", "", ""),
    ("", "", ""),
])

CONTENT["p1_judge_table"] = lambda: s22_fill(
    "三档判定", "对号入座",
    ["搜索引擎模式", "有感无方法", "已有好习惯"],
    ["问完结束", "当搜索用", "没追问习惯", "答案泛泛", "不会变具体", "命中第1、6项",
     "追问没方向", "会质疑", "命中第2、3、8项", "目的清晰", "引用前文", "命中第4、5、7项"]
)

CONTENT["p1_mode_old"] = lambda: s4_fill("旧模式 vs 新模式", [
    ("心理定位", "旧：把问题丢进去看答案——像搜索引擎", "旧"),
    ("结束标准", "旧：拿到了一个答案就结束", "旧"),
    ("互动方式", "旧：一次输入，一次输出，没有追问", "旧"),
    ("新模式", "新：带着目的进来，和它一起挖——像顾问对话", "新"),
    ("新结束", "新：这个问题已经被真正解决", "新"),
    ("", "", ""),
    ("", "", ""),
    ("", "", ""),
    ("", "", ""),
    ("", "", ""),
    ("", "", ""),
    ("", "", ""),
])

CONTENT["p1_mode_detail"] = lambda: s4_fill("心智切换详解", [
    ("上下文", "旧：没有上下文，每轮独立——不引用前文", "旧"),
    ("检验方式", "旧：接受回答即结束——不会质疑、不会要求反例", "旧"),
    ("结束标准", "新：结束原因不是「拿到答案」，是「问题真正被解决」", "新"),
    ("新维度", "新：每轮之间有积累，可引用前文——像下棋步步相连", "新"),
    ("新检验", "主动质疑、要求反例、换角度——把回答当起点", "新"),
    ("", "", ""),
    ("", "", ""),
    ("", "", ""),
    ("", "", ""),
    ("", "", ""),
    ("", "", ""),
    ("", "", ""),
])

CONTENT["p1_judge5"] = lambda: s5_fill(
    "三档判定与课程价值",
    ["搜索引擎模式", "有感无方法", "已有好习惯", "课程定位", "价值承诺"],
    ["问完结束 + 当搜索用——第1、6项命中两个以上",
     "会追问、但没方向——第2、3、8项命中",
     "目的清晰、引用前文、质疑结论——第4、5、7项命中",
     "本课程为「有感无方法」的你量身设计",
     "其他两档也能系统化自己的方法"]
)

CONTENT["p1_summary"] = lambda: s4_fill("第一章小结", [
    ("核心公式", "信息质量 = 问题质量 × 轮次深度", "公式"),
    ("心智切换", "从搜索引擎模式到对话顾问模式", "切换"),
    ("结束标准", "结束原因不是「拿到答案」，是「问题真正被解决」", "结束"),
    ("下一章", "第二章讲第一轮怎么问对——三件事 + 模板公式", "下章"),
    ("三件事", "主题锚定 + 目的说明 + 期待明确", "三件"),
    ("", "", ""),
    ("", "", ""),
    ("", "", ""),
    ("", "", ""),
    ("", "", ""),
    ("", "", ""),
    ("", "", ""),
])

CONTENT["p1_gains"] = lambda: s36_fill(
    "第一章关键收获", "认知", "技能", "应用",
    "差距来自用法——不是工具水平", "差距来自用法，不是工具水平",
    "完成自测，知道自己起点", "完成自测，知道自己起点",
    "完成心智切换", "完成心智切换——从「拿到答案」到「问题真正被解决」",
    "信息质量 = 问题质量 × 轮次深度", "问题质量决定上限，轮次深度决定深度，缺一不可"
)

CONTENT["p1_to_c2"] = lambda: s4_fill("进入第二章", [
    ("上一章", "建立了「为什么」——为什么秘塔用不到位是用法问题", "为什么"),
    ("下一章", "讲「怎么办」——第一轮怎么问对", "怎么办"),
    ("核心问题", "同样是问秘塔，为什么有人第一轮就进入有价值的轨道", "核心"),
    ("关键转变", "从「知道差距在用法」到「学会第一轮就问对」", "转变"),
    ("章间递进", "从心智层到方法层——三个功能 + 模板公式", "递进"),
    ("", "", ""),
    ("", "", ""),
    ("", "", ""),
    ("", "", ""),
    ("", "", ""),
    ("", "", ""),
    ("", "", ""),
])

CONTENT["p1_insights"] = lambda: s4_fill("三个关键洞察", [
    ("洞察1", "差距不在工具——同一工具可以产出截然不同的结果", "用法"),
    ("洞察2", "信息质量 = 问题质量 × 轮次深度——本课唯一核心", "公式"),
    ("洞察3", "结束原因不应该是「拿到答案」，是「问题真正被解决」", "结束"),
    ("标志性", "新模式：带着目的进来、和它一起挖、像顾问对话", "标志"),
    ("自测", "8 题自测知道你处于哪一档——决定你重点看哪些章", "自测"),
    ("", "", ""),
    ("", "", ""),
    ("", "", ""),
    ("", "", ""),
    ("", "", ""),
    ("", "", ""),
    ("", "", ""),
])

# Save what we have
if __name__ == "__main__":
    # Just print count
    print(f"PLAN length: {len(PLAN)}")
    print(f"Content functions defined: {len(CONTENT)}")
    missing = [p[1] for p in PLAN if p[1] not in CONTENT]
    print(f"Missing content for: {missing}")
