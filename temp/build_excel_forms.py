#!/usr/bin/env python3
"""
Build 业务创新 course Excel forms (空表 and 填好版)
"""
import os
import shutil
import zipfile
import re

# ─────────────────────────────────────────────
# Color palette (OOXML AARRGGBB, alpha=00 opaque)
# ─────────────────────────────────────────────
C = {
    "hdr_bg":   "001B4F9B",  # dark blue header fill
    "hdr_txt":  "00FFFFFF",  # white header text
    "sub_bg":   "002E75B6",  # medium blue sub-header
    "row_alt":  "00F2F2F2",  # light gray alt row
    "white":    "00FFFFFF",
    "green_dk": "00375623",  # dark green (stage 3)
    "green_md": "00E2EFDA",  # medium green fill
    "teal_dk":  "00006B6B",  # dark teal (stage 4)
    "teal_lt":  "00E0F0F0",  # light teal fill
    "orange_dk":"00C55A11",  # dark orange
    "orange_lt":"00FCF4E1",  # light orange fill
    "brown_dk": "00803C0C",  # dark brown fill
    "brown_lt": "00BDD7EE",  # light brown fill
    "body_txt": "00262626",  # near-black body text
    "blue_txt": "001B4F9B",  # blue link text
    "red_txt":  "00C00000",  # red warning text
    "green_txt":"00375623",   # green text
    "teal_txt": "00006B6B",  # teal text
    "orange_txt":"00C55A11", # orange text
    "input_bg": "00DEEAF1",  # light blue input fill
}

def cell(r, c_addr, style, text=None, inline=True):
    """Generate a <c> XML element."""
    if text is None:
        if inline:
            return f'<c r="{c_addr}" s="{style}" t="inlineStr"><is><t></t></is></c>'
        else:
            return f'<c r="{c_addr}" s="{style}"/>'
    if inline:
        # Escape XML special chars
        text = text.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")
        return f'<c r="{c_addr}" s="{style}" t="inlineStr"><is><t>{text}</t></is></c>'
    else:
        return f'<c r="{c_addr}" s="{style}"><v>{text}</v></c>'

def num_cell(r, c_addr, style, value):
    """Numeric cell."""
    return f'<c r="{c_addr}" s="{style}"><v>{value}</v></c>'

def row(r, height, *cells):
    """Generate a <row> XML element."""
    cells_xml = "".join(cells)
    return f'<row r="{r}" ht="{height}" customHeight="1">{cells_xml}</row>'

def col(min_, max_, width):
    return f'<col width="{width}" customWidth="1" min="{min_}" max="{max_}"/>'

def freeze_pane(y_split):
    return f'<pane ySplit="{y_split}" topLeftCell="A{y_split+1}" activePane="bottomLeft" state="frozen"/>'

def sheet_view(yd=1):
    return f'''<sheetView workbookViewId="0"><selection activeCell="A1" sqref="A1"/>{freeze_pane(yd)}</sheetView>'''

def make_sheet_xml(sheet_pr_color, dimension, cols_xml, sheet_view_xml, rows_xml, extra=""):
    return f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <sheetPr><tabColor rgb="{sheet_pr_color}"/><outlinePr summaryBelow="1" summaryRight="1"/><pageSetUpPr/></sheetPr>
  <dimension ref="{dimension}"/>
  <sheetViews>{sheet_view_xml}</sheetViews>
  <sheetFormatPr baseColWidth="8" defaultRowHeight="15"/>
  <cols>{cols_xml}</cols>
  <sheetData>{rows_xml}</sheetData>
  {extra}
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

# ═══════════════════════════════════════════════════════════════
# SHEET 1: 总览 (Overview)
# ═══════════════════════════════════════════════════════════════
def build_sheet1_overview(filled=False):
    rows = []

    # Row 1: Title
    rows.append(row(1, 40,
        cell(1,"A1", 1, "业务创新：从机会试错到第二增长曲线 配套表单" + ("（填好版）" if filled else "（空白版）"))
    ))

    # Row 3: Header labels
    rows.append(row(3, 28,
        cell(3,"A3", 2, "序号"),
        cell(3,"B3", 2, "表单名称"),
        cell(3,"C3", 2, "表单说明"),
        cell(3,"D3", 2, "适用阶段"),
        cell(3,"E3", 2, "填写时间"),
        cell(3,"F3", 2, "备注"),
    ))

    forms = [
        ("表1", "主业生命周期自测表", "判断企业主业处于哪个发展阶段（导入/成长/成熟/转型/衰退）", "课程开场/个人诊断", "10分钟", "五阶段判断工具"),
        ("表2", "五维评估矩阵", "从市场、竞争、资源、能力、意愿5个维度评估新机会", "机会筛选", "20分钟", "5维度评分"),
        ("表3", "MVP实验设计表", "设计最小可行实验，验证机会假设并设定成功指标", "探索验证", "30分钟", "假设驱动"),
        ("表4", "孵化机制配置表", "配置资源比例（人力/资金/时间）和决策权限", "孵化决策", "15分钟", "资源决策"),
        ("表5", "退出决策检查表", "加码/调整/止损的条件清单和触发机制", "关键决策点", "10分钟", "3选1决策"),
        ("表6", "阶段闸门图", "可视化探索→验证→孵化→规模化四阶段及闸门条件", "全程可视化", "持续更新", "进度管理"),
        ("表7", "第二增长曲线机会池", "汇总所有待评估机会，建立优先级排序", "机会管理", "每周更新", "Pipeline管理"),
        ("表8", "团队创新项目台账", "追踪所有创新项目的进度、风险和资源使用", "项目管理", "持续追踪", "多项目管控"),
    ]

    for i, (num, name, desc, stage, time_, note) in enumerate(forms):
        r = i + 4
        s_body = 4 if i % 2 == 0 else 5
        rows.append(row(r, 22,
            cell(r,"A"+str(r), 3, num),
            cell(r,"B"+str(r), s_body, name),
            cell(r,"C"+str(r), s_body, desc),
            cell(r,"D"+str(r), s_body, stage),
            cell(r,"E"+str(r), s_body, time_),
            cell(r,"F"+str(r), s_body, note),
        ))

    cols = (col(1,1,4) + col(2,2,8) + col(3,3,28) + col(4,4,14) +
            col(5,5,10) + col(6,6,14))

    dim = f"A1:F{3+len(forms)}"
    return make_sheet_xml(C["hdr_bg"], dim, cols,
                          sheet_view(1), "".join(rows))


# ═══════════════════════════════════════════════════════════════
# SHEET 2: 主业生命周期自测表
# ═══════════════════════════════════════════════════════════════
def build_sheet2_lifecycle(filled=False):
    rows = []

    # Row 1: Title
    rows.append(row(1, 40,
        cell(1,"A1", 1, "主业生命周期自测表（五阶段判断）")
    ))

    # Row 3: Description
    rows.append(row(3, 22,
        cell(3,"A3", 11, "目的：根据企业主业的关键特征，判断其所处生命周期阶段。"),
        cell(3,"E3", 12, "（蓝色底色为可填写输入项）")
    ))

    # Row 5: Column headers
    rows.append(row(5, 28,
        cell(5,"A5", 2, "维度"),
        cell(5,"B5", 2, "导入期"),
        cell(5,"C5", 2, "成长期"),
        cell(5,"D5", 2, "成熟期"),
        cell(5,"E5", 2, "转型期"),
        cell(5,"F5", 2, "衰退期"),
    ))

    dimensions = [
        ("市场规模", "细分小众市场", "快速扩张，抢占市场份额", "市场接近饱和，增长放缓", "新市场开拓艰难", "市场持续萎缩"),
        ("竞争格局", "蓝海，无直接对手", "竞争对手涌现", "头部集中，格局稳定", "差异化竞争加剧", "大量玩家退出"),
        ("盈利水平", "亏损，投入期", "盈亏平衡或微利", "高盈利，现金流充沛", "盈利下滑趋势", "持续亏损"),
        ("增长率", "低增长率", "30%以上复合增长", "10%-20%平稳增长", "增长率个位数", "负增长"),
        ("核心能力", "技术/产品创新", "运营/渠道扩张", "品牌/规模效应", "资源整合能力", "成本控制"),
        ("客户粘性", "用户试水", "口碑传播", "高复购高忠诚", "忠诚度下降", "客户大量流失"),
        ("资本需求", "高研发投入", "市场推广投入大", "维护性投入", "转型探索投入", "收缩投入"),
    ]

    for i, (dim, *phases) in enumerate(dimensions):
        r = i + 6
        s_body = 4 if i % 2 == 0 else 5
        rows.append(row(r, 22,
            cell(r,"A"+str(r), 6, dim),
            cell(r,"B"+str(r), s_body, phases[0] if filled else ""),
            cell(r,"C"+str(r), s_body, phases[1] if filled else ""),
            cell(r,"D"+str(r), s_body, phases[2] if filled else ""),
            cell(r,"E"+str(r), s_body, phases[3] if filled else ""),
            cell(r,"F"+str(r), s_body, phases[4] if filled else ""),
        ))

    # Result row
    r_result = 6 + len(dimensions)
    rows.append(row(r_result, 28,
        cell(r_result,"A"+str(r_result), 7, "诊断结论（打勾）"),
        cell(r_result,"B"+str(r_result), 13, "○ 导入期" if filled else ""),
        cell(r_result,"C"+str(r_result), 13, "○ 成长期" if filled else ""),
        cell(r_result,"D"+str(r_result), 13, "○ 成熟期" if filled else ""),
        cell(r_result,"E"+str(r_result), 13, "○ 转型期" if filled else ""),
        cell(r_result,"F"+str(r_result), 13, "○ 衰退期" if filled else ""),
    ))

    # Key indicators
    r_key = r_result + 2
    rows.append(row(r_key, 22,
        cell(r_key,"A"+str(r_key), 8, "关键指标补充说明"),
    ))
    indicators = [
        ("核心指标1", "填写实际数据", "例：近3年营收CAGR"),
        ("核心指标2", "填写实际数据", "例：市场份额"),
        ("核心指标3", "填写实际数据", "例：客户复购率"),
    ]
    for j, (ind, val, example) in enumerate(indicators):
        r2 = r_key + 1 + j
        rows.append(row(r2, 22,
            cell(r2,"A"+str(r2), 9, ind),
            cell(r2,"B"+str(r2), 9 if filled else 10, val if filled else ""),
            cell(r2,"C"+str(r2), 9, example),
        ))

    cols = (col(1,1,16) + col(2,2,18) + col(3,3,18) + col(4,4,18) +
            col(5,5,18) + col(6,6,18))
    dim = f"A1:F{r_key+len(indicators)}"
    return make_sheet_xml(C["hdr_bg"], dim, cols,
                          sheet_view(5), "".join(rows))


# ═══════════════════════════════════════════════════════════════
# SHEET 3: 五维评估矩阵
# ═══════════════════════════════════════════════════════════════
def build_sheet3_five_dimensions(filled=False):
    rows = []

    rows.append(row(1, 40,
        cell(1,"A1", 1, "五维评估矩阵")
    ))

    rows.append(row(3, 22,
        cell(3,"A3", 11, "目的：从5个维度对潜在机会进行系统评估。每个维度1-5分，5分为最高分。"),
        cell(3,"G3", 12, "（总分最高75分）")
    ))

    rows.append(row(5, 28,
        cell(5,"A5", 2, "评估维度"),
        cell(5,"B5", 2, "评估要点"),
        cell(5,"C5", 2, "权重（%）"),
        cell(5,"D5", 2, "评分（1-5）"),
        cell(5,"E5", 2, "加权得分"),
        cell(5,"F5", 2, "评估依据/备注"),
        cell(5,"G5", 2, "建议"),
    ))

    dims_data = [
        ("市场吸引力", "市场规模、增长潜力、市场准入壁垒", "25", "3" if filled else "", "=D6*C6/100" if filled else ""),
        ("竞争强度", "竞争对手数量、质量、进入壁垒", "20", "3" if filled else "", "=D7*C7/100" if filled else ""),
        ("资源匹配度", "与现有资源、能力、渠道的协同程度", "20", "4" if filled else "", "=D8*C8/100" if filled else ""),
        ("技术可行性", "技术成熟度、研发能力、IP壁垒", "20", "3" if filled else "", "=D9*C9/100" if filled else ""),
        ("商业可行性", "盈利模型清晰度、资本回报周期", "15", "4" if filled else "", "=D10*C10/100" if filled else ""),
    ]

    for i, (dim, points, weight, score, formula) in enumerate(dims_data):
        r = i + 6
        rows.append(row(r, 22,
            cell(r,"A"+str(r), 6, dim),
            cell(r,"B"+str(r), 9, points),
            cell(r,"C"+str(r), 9, weight),
            cell(r,"D"+str(r), 9 if filled else 10, score),
            cell(r,"E"+str(r), 14, formula),
            cell(r,"F"+str(r), 9, ""),
            cell(r,"G"+str(r), 9, ""),
        ))

    r_total = 6 + len(dims_data)
    rows.append(row(r_total, 28,
        cell(r_total,"A"+str(r_total), 7, "综合得分"),
        cell(r_total,"B"+str(r_total), 7, ""),
        cell(r_total,"C"+str(r_total), 7, "100%"),
        cell(r_total,"D"+str(r_total), 7, ""),
        cell(r_total,"E"+str(r_total), 7, f"=SUM(E6:E{r_total-1})" if filled else ""),
        cell(r_total,"F"+str(r_total), 7, ""),
        cell(r_total,"G"+str(r_total), 7, ""),
    ))

    # Recommendation
    r_rec = r_total + 2
    rec_text = "优先孵化：总分≥60分，建议进入孵化阶段" if filled else ""
    rows.append(row(r_rec, 22,
        cell(r_rec,"A"+str(r_rec), 15, "综合建议"),
        cell(r_rec,"B"+str(r_rec), 16, rec_text),
    ))

    cols = (col(1,1,14) + col(2,2,28) + col(3,3,10) + col(4,4,10) +
            col(5,5,12) + col(6,6,22) + col(7,7,16))
    dim = f"A1:G{r_rec+1}"
    return make_sheet_xml(C["sub_bg"], dim, cols,
                          sheet_view(5), "".join(rows))


# ═══════════════════════════════════════════════════════════════
# SHEET 4: MVP实验设计表
# ═══════════════════════════════════════════════════════════════
def build_sheet4_mvp(filled=False):
    rows = []

    rows.append(row(1, 40,
        cell(1,"A1", 1, "MVP实验设计表")
    ))

    rows.append(row(3, 22,
        cell(3,"A3", 11, "目的：设计最小可行实验，验证机会的关键假设。格式：假设→验证方法→成功指标→实际结果→决策"),
    ))

    rows.append(row(5, 28,
        cell(5,"A5", 2, "实验编号"),
        cell(5,"B5", 2, "核心假设"),
        cell(5,"C5", 2, "假设类型"),
        cell(5,"D5", 2, "验证方法"),
        cell(5,"E5", 2, "成功指标"),
        cell(5,"F5", 2, "实验周期"),
        cell(5,"G5", 2, "所需资源"),
        cell(5,"H5", 2, "实际结果"),
        cell(5,"I5", 2, "实验结论"),
        cell(5,"J5", 2, "决策"),
    ))

    experiments = [
        ("EXP-001", "目标用户对此功能有强烈需求", "用户需求假设", "用户访谈+功能原型测试", "访谈10人，7人以上表示愿意使用", "2周", "产品经理1人+设计师1人", "8/10用户表示愿意使用", "假设验证通过" if filled else "", "进入下一阶段" if filled else ""),
        ("EXP-002", "月费99元定价用户可接受", "定价假设", "A/B定价测试", "转化率≥5%视为可接受", "4周", "研发1周+运营1周", "转化率3.2%", "定价偏高" if filled else "", "调整定价策略" if filled else ""),
        ("EXP-003", "通过社交渠道可有效获客", "增长假设", "小规模社媒投放测试", "CAC≤150元，LTV/CAC≥3", "3周", "市场费用5000元", "CAC=180元", "基本达标" if filled else "", "优化渠道ROI" if filled else ""),
    ]

    for i, exp in enumerate(experiments):
        r = i + 6
        s_body = 4 if i % 2 == 0 else 5
        row_cells = [cell(r,"A"+str(r), 3, exp[0])]
        for j in range(1, 10):
            val = exp[j] if filled and j < len(exp) else ""
            row_cells.append(cell(r, chr(ord("B")+j-1)+str(r), 9 if filled else s_body, val))
        rows.append(row(r, 22, *row_cells))

    # Add experiment row
    r_add = 6 + len(experiments)
    rows.append(row(r_add, 22,
        cell(r_add,"A"+str(r_add), 17, "+ 添加实验"),
        cell(r_add,"B"+str(r_add), 17, ""),
        cell(r_add,"C"+str(r_add), 17, ""),
        cell(r_add,"D"+str(r_add), 17, ""),
        cell(r_add,"E"+str(r_add), 17, ""),
        cell(r_add,"F"+str(r_add), 17, ""),
        cell(r_add,"G"+str(r_add), 17, ""),
        cell(r_add,"H"+str(r_add), 17, ""),
        cell(r_add,"I"+str(r_add), 17, ""),
        cell(r_add,"J"+str(r_add), 17, ""),
    ))

    cols = (col(1,1,8) + col(2,2,22) + col(3,3,12) + col(4,4,18) +
            col(5,5,20) + col(6,6,8) + col(7,7,14) + col(8,8,14) +
            col(9,9,14) + col(10,10,12))
    dim = f"A1:J{r_add}"
    return make_sheet_xml(C["green_dk"], dim, cols,
                          sheet_view(5), "".join(rows))


# ═══════════════════════════════════════════════════════════════
# SHEET 5: 孵化机制配置表
# ═══════════════════════════════════════════════════════════════
def build_sheet5_incubation(filled=False):
    rows = []

    rows.append(row(1, 40,
        cell(1,"A1", 1, "孵化机制配置表")
    ))

    rows.append(row(3, 22,
        cell(3,"A3", 11, "目的：为每个孵化项目配置资源比例、决策权限和里程碑，设置阶段性闸门。"),
    ))

    rows.append(row(5, 28,
        cell(5,"A5", 2, "项目名称"),
        cell(5,"B5", 2, "孵化阶段"),
        cell(5,"C5", 2, "人力投入（人）"),
        cell(5,"D5", 2, "资金投入（万元）"),
        cell(5,"E5", 2, "时间投入（月）"),
        cell(5,"F5", 2, "决策权限"),
        cell(5,"G5", 2, "关键里程碑"),
        cell(5,"H5", 2, "下一闸门日期"),
    ))

    projects = [
        ("智能硬件新品线", "探索期", "3", "50", "6", "项目负责人审批", "完成MVP原型", "2026-Q3" if filled else ""),
        ("企业级SaaS拓展", "验证期", "5", "120", "9", "事业部总经理审批", "完成10家客户POC", "2026-Q4" if filled else ""),
        ("东南亚市场拓展", "孵化期", "8", "300", "12", "CEO审批", "完成市场验证，月流水50万", "2027-Q1" if filled else ""),
    ]

    for i, proj in enumerate(projects):
        r = i + 6
        s_body = 4 if i % 2 == 0 else 5
        rows.append(row(r, 22,
            cell(r,"A"+str(r), 9 if filled else s_body, proj[0]),
            cell(r,"B"+str(r), 9 if filled else s_body, proj[1]),
            cell(r,"C"+str(r), 9 if filled else s_body, proj[2]),
            cell(r,"D"+str(r), 9 if filled else s_body, proj[3]),
            cell(r,"E"+str(r), 9 if filled else s_body, proj[4]),
            cell(r,"F"+str(r), 9 if filled else s_body, proj[5]),
            cell(r,"G"+str(r), 9 if filled else s_body, proj[6]),
            cell(r,"H"+str(r), 9 if filled else s_body, proj[7]),
        ))

    # Resource summary
    r_sum = 6 + len(projects)
    rows.append(row(r_sum, 28,
        cell(r_sum,"A"+str(r_sum), 7, "资源合计"),
        cell(r_sum,"B"+str(r_sum), 7, ""),
        cell(r_sum,"C"+str(r_sum), 7, f"=SUM(C6:C{r_sum-1})" if filled else ""),
        cell(r_sum,"D"+str(r_sum), 7, f"=SUM(D6:D{r_sum-1})" if filled else ""),
        cell(r_sum,"E"+str(r_sum), 7, f"=SUM(E6:E{r_sum-1})" if filled else ""),
        cell(r_sum,"F"+str(r_sum), 7, ""),
        cell(r_sum,"G"+str(r_sum), 7, ""),
        cell(r_sum,"H"+str(r_sum), 7, ""),
    ))

    # Policy notes
    r_pol = r_sum + 2
    rows.append(row(r_pol, 22,
        cell(r_pol,"A"+str(r_pol), 8, "资源配置政策说明"),
    ))
    policies = [
        ("探索期资源配置", "人力：1-5人；资金：≤50万；时间：≤6个月", "低风险小规模试探"),
        ("验证期资源配置", "人力：3-8人；资金：50-200万；时间：6-12个月", "验证市场假设和技术可行性"),
        ("孵化期资源配置", "人力：5-15人；资金：200-500万；时间：12-24个月", "初步商业化，建立运营模型"),
        ("规模化资源配置", "人力：10人以上；资金：500万+；时间：持续", "全力冲刺，复制成功模式"),
    ]
    for j, (policy, config, desc) in enumerate(policies):
        r2 = r_pol + 1 + j
        rows.append(row(r2, 22,
            cell(r2,"A"+str(r2), 9, policy),
            cell(r2,"B"+str(r2), 9, config),
            cell(r2,"C"+str(r2), 9, desc),
        ))

    cols = (col(1,1,18) + col(2,2,10) + col(3,3,12) + col(4,4,14) +
            col(5,5,12) + col(6,6,16) + col(7,7,18) + col(8,8,14))
    dim = f"A1:H{r_pol+len(policies)}"
    return make_sheet_xml(C["teal_dk"], dim, cols,
                          sheet_view(5), "".join(rows))


# ═══════════════════════════════════════════════════════════════
# SHEET 6: 退出决策检查表
# ═══════════════════════════════════════════════════════════════
def build_sheet6_exit(filled=False):
    rows = []

    rows.append(row(1, 40,
        cell(1,"A1", 1, "退出决策检查表")
    ))

    rows.append(row(3, 22,
        cell(3,"A3", 11, "目的：在关键决策点，团队依据检查表做出加码、调整或止损的决策。"),
        cell(3,"F3", 12, "（每条条件满足则打勾）")
    ))

    rows.append(row(5, 28,
        cell(5,"A5", 2, "决策类型"),
        cell(5,"B5", 2, "条件编号"),
        cell(5,"C5", 2, "具体条件"),
        cell(5,"D5", 2, "是否满足"),
        cell(5,"E5", 2, "满足程度"),
        cell(5,"F5", 2, "备注/证据"),
    ))

    # Accelerate decisions
    r_accel = 6
    rows.append(row(r_accel, 22,
        cell(r_accel,"A"+str(r_accel), 18, "加码（ACCELERATE）条件", 3),
        cell(r_accel,"B"+str(r_accel), 18, ""),
        cell(r_accel,"C"+str(r_accel), 18, "以下条件满足3条以上时，可考虑加码投入"),
        cell(r_accel,"D"+str(r_accel), 18, ""),
        cell(r_accel,"E"+str(r_accel), 18, ""),
        cell(r_accel,"F"+str(r_accel), 18, ""),
    ))

    accel_items = [
        ("A1", "市场验证率≥50%（访谈用户中表示愿意付费的比例）", "✓" if filled else "", "高"),
        ("A2", "单位经济模型正向：LTV/CAC≥3，CAC回收周期≤12个月", "✓" if filled else "", "高"),
        ("A3", "收入连续3个月环比增长≥20%", "" if filled else "", "中"),
        ("A4", "核心团队无关键人员流失", "✓" if filled else "", "高"),
        ("A5", "市场空间≥10亿元，且公司可触达≥1%", "✓" if filled else "", "高"),
        ("A6", "竞争壁垒初步形成（技术/品牌/渠道三选一）", "" if filled else "", "低"),
    ]

    for i, item in enumerate(accel_items):
        r = r_accel + 1 + i
        s_body = 4 if i % 2 == 0 else 5
        rows.append(row(r, 22,
            cell(r,"A"+str(r), s_body, ""),
            cell(r,"B"+str(r), 3, item[0]),
            cell(r,"C"+str(r), s_body, item[1]),
            cell(r,"D"+str(r), 9 if filled else s_body, item[2]),
            cell(r,"E"+str(r), 9 if filled else s_body, item[3]),
            cell(r,"F"+str(r), s_body, ""),
        ))

    # Adjust decisions
    r_adj = r_accel + 1 + len(accel_items) + 1
    rows.append(row(r_adj, 22,
        cell(r_adj,"A"+str(r_adj), 19, "调整（ADJUST）条件", 3),
        cell(r_adj,"B"+str(r_adj), 19, ""),
        cell(r_adj,"C"+str(r_adj), 19, "以下条件满足3条以上时，需调整策略或缩小规模"),
        cell(r_adj,"D"+str(r_adj), 19, ""),
        cell(r_adj,"E"+str(r_adj), 19, ""),
        cell(r_adj,"F"+str(r_adj), 19, ""),
    ))

    adj_items = [
        ("J1", "市场验证率20%-50%，核心假设部分得到验证", "✓" if filled else "", "中"),
        ("J2", "单位经济模型亏损，但方向仍被团队认可", "" if filled else "", "中"),
        ("J3", "收入增长停滞或下滑，但市场反馈正面", "✓" if filled else "", "中"),
        ("J4", "资金消耗速度快于预期，但未耗尽", "" if filled else "", "低"),
        ("J5", "竞争格局恶化，但公司有差异化优势", "" if filled else "", "低"),
        ("J6", "核心假设部分被证伪，需要Pivot", "✓" if filled else "", "中"),
    ]

    for i, item in enumerate(adj_items):
        r = r_adj + 1 + i
        s_body = 4 if i % 2 == 0 else 5
        rows.append(row(r, 22,
            cell(r,"A"+str(r), s_body, ""),
            cell(r,"B"+str(r), 3, item[0]),
            cell(r,"C"+str(r), s_body, item[1]),
            cell(r,"D"+str(r), 9 if filled else s_body, item[2]),
            cell(r,"E"+str(r), 9 if filled else s_body, item[3]),
            cell(r,"F"+str(r), s_body, ""),
        ))

    # Stop decisions
    r_stop = r_adj + 1 + len(adj_items) + 1
    rows.append(row(r_stop, 22,
        cell(r_stop,"A"+str(r_stop), 20, "止损（STOP）条件", 3),
        cell(r_stop,"B"+str(r_stop), 20, ""),
        cell(r_stop,"C"+str(r_stop), 20, "以下条件满足2条以上时，应果断止损，释放资源"),
        cell(r_stop,"D"+str(r_stop), 20, ""),
        cell(r_stop,"E"+str(r_stop), 20, ""),
        cell(r_stop,"F"+str(r_stop), 20, ""),
    ))

    stop_items = [
        ("Z1", "市场验证率<20%，核心假设被证伪", "✓" if filled else "", "高"),
        ("Z2", "单位经济模型持续亏损，且无改善路径", "" if filled else "", "高"),
        ("Z3", "资金耗尽或距离下一轮融资>6个月", "" if filled else "", "高"),
        ("Z4", "核心团队关键人员流失", "" if filled else "", "高"),
        ("Z5", "市场窗口期已过，或出现颠覆性替代品", "" if filled else "", "高"),
    ]

    for i, item in enumerate(stop_items):
        r = r_stop + 1 + i
        s_body = 4 if i % 2 == 0 else 5
        rows.append(row(r, 22,
            cell(r,"A"+str(r), s_body, ""),
            cell(r,"B"+str(r), 3, item[0]),
            cell(r,"C"+str(r), s_body, item[1]),
            cell(r,"D"+str(r), 9 if filled else s_body, item[2]),
            cell(r,"E"+str(r), 9 if filled else s_body, item[3]),
            cell(r,"F"+str(r), s_body, ""),
        ))

    # Decision summary
    r_dec = r_stop + 1 + len(stop_items) + 1
    rows.append(row(r_dec, 28,
        cell(r_dec,"A"+str(r_dec), 21, "本次决策结论"),
        cell(r_dec,"B"+str(r_dec), 22, "○ 加码    ○ 调整    ○ 止损" if filled else ""),
    ))

    cols = (col(1,1,14) + col(2,2,8) + col(3,3,36) + col(4,4,10) +
            col(5,5,10) + col(6,6,22))
    dim = f"A1:F{r_dec}"
    return make_sheet_xml(C["orange_dk"], dim, cols,
                          sheet_view(5), "".join(rows))


# ═══════════════════════════════════════════════════════════════
# SHEET 7: 阶段闸门图
# ═══════════════════════════════════════════════════════════════
def build_sheet7_gateway(filled=False):
    rows = []

    rows.append(row(1, 40,
        cell(1,"A1", 1, "阶段闸门图（探索→验证→孵化→规模化）")
    ))

    rows.append(row(3, 22,
        cell(3,"A3", 11, "目的：可视化项目在各阶段的进展、闸门条件和关键里程碑。"),
    ))

    # Phase header row
    rows.append(row(5, 32,
        cell(5,"A5", 2, "阶段"),
        cell(5,"B5", 2, "阶段定义"),
        cell(5,"C5", 2, "进入条件"),
        cell(5,"D5", 2, "闸门条件（通过/不通过）"),
        cell(5,"E5", 2, "关键里程碑"),
        cell(5,"F5", 2, "当前状态"),
    ))

    phases = [
        ("探索期\n(Exploration)", "发现并验证机会假设", "无（自主探索或任务分配）",
         "通过：假设有数据支撑，团队认可\n不通过：假设被证伪，终止项目",
         "完成1-2个MVP实验，获得初步验证数据", "✓ 进行中" if filled else ""),
        ("验证期\n(Validation)", "系统验证市场假设和解决方案", "至少1个MVP实验验证假设",
         "通过：市场验证率≥30%，单位经济正向\n不通过：验证率<20%，方向不被认可",
         "完成POC，获得10+付费意愿用户", "✓ 通过" if filled else ""),
        ("孵化期\n(Incubation)", "建立最小商业化运营体系", "验证期闸门通过",
         "通过：月收入≥10万，团队完整\n不通过：3个月无显著进展",
         "完成产品化，建立初始销售渠道", "" if filled else ""),
        ("规模化\n(Scaling)", "全力复制成功模式", "孵化期闸门通过",
         "通过：月收入≥50万，NPS≥40\n不通过：增长停滞，盈利恶化",
         "建立区域/行业复制能力", "" if filled else ""),
    ]

    colors = [C["green_dk"], C["teal_dk"], C["orange_dk"], C["hdr_bg"]]
    for i, (phase, definition, entry, gate, milestone, status) in enumerate(phases):
        r = i + 6
        s_body = 4 if i % 2 == 0 else 5
        rows.append(row(r, 44,
            cell(r,"A"+str(r), 3, phase),
            cell(r,"B"+str(r), s_body, definition),
            cell(r,"C"+str(r), s_body, entry),
            cell(r,"D"+str(r), s_body, gate),
            cell(r,"E"+str(r), s_body, milestone),
            cell(r,"F"+str(r), 9 if filled else s_body, status),
        ))

    # Project progress
    r_proj = 6 + len(phases) + 2
    rows.append(row(r_proj, 22,
        cell(r_proj,"A"+str(r_proj), 8, "项目进度追踪"),
    ))
    headers = ["项目名称", "当前阶段", "进入当前阶段日期", "已持续时间", "下次闸门评审日期", "风险信号", "备注"]
    cols_header = [3, 3, 3, 3, 3, 9, 9]
    rows.append(row(r_proj+1, 24,
        *[cell(r_proj+1, chr(ord("A")+i), cols_header[i], h)
          for i, h in enumerate(headers)]
    ))

    proj_items = [
        ("智能硬件新品线", "验证期", "2026-03-01", "6个月", "2026-09-01", "无", "进展顺利"),
        ("企业级SaaS拓展", "探索期", "2026-06-01", "3个月", "2026-09-15", "技术难度超预期", "需密切跟进"),
    ]
    for j, proj in enumerate(proj_items):
        r2 = r_proj + 2 + j
        s_body = 4 if j % 2 == 0 else 5
        rows.append(row(r2, 22,
            cell(r2,"A"+str(r2), s_body, proj[0]),
            cell(r2,"B"+str(r2), s_body, proj[1]),
            cell(r2,"C"+str(r2), s_body, proj[2]),
            cell(r2,"D"+str(r2), s_body, proj[3]),
            cell(r2,"E"+str(r2), s_body, proj[4]),
            cell(r2,"F"+str(r2), 9 if filled else s_body, proj[5]),
            cell(r2,"G"+str(r2), s_body, proj[6]),
        ))

    cols = (col(1,1,14) + col(2,2,20) + col(3,3,20) + col(4,4,28) +
            col(5,5,22) + col(6,6,16) + col(7,7,14))
    dim = f"A1:G{r_proj+2+len(proj_items)}"
    return make_sheet_xml(C["brown_dk"], dim, cols,
                          sheet_view(5), "".join(rows))


# ═══════════════════════════════════════════════════════════════
# SHEET 8: 第二增长曲线机会池
# ═══════════════════════════════════════════════════════════════
def build_sheet8_opportunity(filled=False):
    rows = []

    rows.append(row(1, 40,
        cell(1,"A1", 1, "第二增长曲线机会池")
    ))

    rows.append(row(3, 22,
        cell(3,"A3", 11, "目的：汇总所有待评估机会，建立机会优先级排序和管理机制。"),
        cell(3,"I3", 12, "（每周更新一次）")
    ))

    rows.append(row(5, 28,
        cell(5,"A5", 2, "机会编号"),
        cell(5,"B5", 2, "机会名称"),
        cell(5,"C5", 2, "机会描述"),
        cell(5,"D5", 2, "目标市场"),
        cell(5,"E5", 2, "潜在收入（万元/年）"),
        cell(5,"F5", 2, "与主业协同度"),
        cell(5,"G5", 2, "技术可行性"),
        cell(5,"H5", 2, "综合评分"),
        cell(5,"I5", 2, "优先级"),
        cell(5,"J5", 2, "负责人"),
        cell(5,"K5", 2, "状态"),
        cell(5,"L5", 2, "下次评审日期"),
    ))

    opportunities = [
        ("OPC-001", "智能硬件新品线", "基于现有技术积累，拓展智能硬件产品线", "消费电子", "500", "高", "高", "75", "P1" if filled else "", "张明", "已启动" if filled else ""),
        ("OPC-002", "企业级SaaS", "面向中小企业的SaaS化管理工具", "B2B软件", "300", "中", "高", "62", "P2" if filled else "", "李华", "评估中" if filled else ""),
        ("OPC-003", "东南亚市场拓展", "将现有产品推向东南亚市场", "跨境电商", "200", "低", "中", "55", "P3" if filled else "", "王强", "探索中" if filled else ""),
        ("OPC-004", "内容电商", "基于品牌内容资产的电商变现", "内容电商", "150", "高", "高", "68", "P2" if filled else "", "赵丽", "暂停" if filled else ""),
        ("OPC-005", "数据服务", "将运营数据产品化，对外提供数据洞察服务", "数据服务", "100", "中", "中", "48", "P4" if filled else "", "刘洋", "想法阶段" if filled else ""),
    ]

    for i, opp in enumerate(opportunities):
        r = i + 6
        s_body = 4 if i % 2 == 0 else 5
        row_cells = [cell(r,"A"+str(r), 3, opp[0])]
        for j in range(1, 12):
            val = opp[j] if filled and j < len(opp) else ""
            row_cells.append(cell(r, chr(ord("B")+j-1)+str(r), 9 if filled else s_body, val))
        rows.append(row(r, 22, *row_cells))

    # Add row
    r_add = 6 + len(opportunities)
    rows.append(row(r_add, 22,
        *[cell(r_add, chr(ord("A")+i)+str(r_add), 17, "") for i in range(12)]
    ))

    # Summary
    r_sum = r_add + 2
    rows.append(row(r_sum, 22,
        cell(r_sum,"A"+str(r_sum), 8, "机会池统计"),
        cell(r_sum,"B"+str(r_sum), 8, f"总机会数：{len(opportunities)}个" if filled else ""),
        cell(r_sum,"E"+str(r_sum), 8, f"潜在收入合计：{sum(int(o[4]) for o in opportunities)}万元/年" if filled else ""),
    ))

    cols = (col(1,1,10) + col(2,2,16) + col(3,3,26) + col(4,4,12) +
            col(5,5,16) + col(6,6,12) + col(7,7,12) + col(8,8,10) +
            col(9,9,8) + col(10,10,10) + col(11,11,10) + col(12,12,14))
    dim = f"A1:L{r_sum}"
    return make_sheet_xml(C["hdr_bg"], dim, cols,
                          sheet_view(5), "".join(rows))


# ═══════════════════════════════════════════════════════════════
# SHEET 9: 团队创新项目台账
# ═══════════════════════════════════════════════════════════════
def build_sheet9_project(filled=False):
    rows = []

    rows.append(row(1, 40,
        cell(1,"A1", 1, "团队创新项目台账")
    ))

    rows.append(row(3, 22,
        cell(3,"A3", 11, "目的：追踪所有创新项目的进度、资源使用、风险状态，支持多项目并行管理。"),
        cell(3,"L3", 12, "（每月更新一次）")
    ))

    rows.append(row(5, 28,
        cell(5,"A5", 2, "项目编号"),
        cell(5,"B5", 2, "项目名称"),
        cell(5,"C5", 2, "所属机会"),
        cell(5,"D5", 2, "当前阶段"),
        cell(5,"E5", 2, "负责人"),
        cell(5,"F5", 2, "团队规模"),
        cell(5,"G5", 2, "已投入资金（万元）"),
        cell(5,"H5", 2, "预算余额（万元）"),
        cell(5,"I5", 2, "进度（%）"),
        cell(5,"J5", 2, "风险等级"),
        cell(5,"K5", 2, "关键风险"),
        cell(5,"L5", 2, "下次评审"),
    ))

    projects = [
        ("PRJ-001", "智能硬件新品线", "OPC-001", "验证期", "张明", "5人", "45", "55", "60", "中" if filled else "", "技术方案未定型", "2026-09-15"),
        ("PRJ-002", "企业级SaaS POC", "OPC-002", "探索期", "李华", "3人", "20", "80", "30", "低" if filled else "", "需求范围待确认", "2026-09-20"),
        ("PRJ-003", "东南亚市场调研", "OPC-003", "探索期", "王强", "2人", "15", "35", "25", "高" if filled else "", "本地化成本超预期", "2026-09-10"),
    ]

    for i, proj in enumerate(projects):
        r = i + 6
        s_body = 4 if i % 2 == 0 else 5
        row_cells = [cell(r,"A"+str(r), 3, proj[0])]
        for j in range(1, 12):
            val = proj[j] if filled and j < len(proj) else ""
            row_cells.append(cell(r, chr(ord("B")+j-1)+str(r), 9 if filled else s_body, val))
        rows.append(row(r, 22, *row_cells))

    # Summary
    r_sum = 6 + len(projects)
    rows.append(row(r_sum, 28,
        cell(r_sum,"A"+str(r_sum), 7, "项目组合汇总"),
        cell(r_sum,"B"+str(r_sum), 7, ""),
        cell(r_sum,"C"+str(r_sum), 7, ""),
        cell(r_sum,"D"+str(r_sum), 7, ""),
        cell(r_sum,"E"+str(r_sum), 7, ""),
        cell(r_sum,"F"+str(r_sum), 7, f"=SUM(F6:F{r_sum-1})" if filled else ""),
        cell(r_sum,"G"+str(r_sum), 7, f"=SUM(G6:G{r_sum-1})" if filled else ""),
        cell(r_sum,"H"+str(r_sum), 7, f"=SUM(H6:H{r_sum-1})" if filled else ""),
        cell(r_sum,"I"+str(r_sum), 7, f"=AVERAGE(I6:I{r_sum-1})" if filled else ""),
        cell(r_sum,"J"+str(r_sum), 7, ""),
        cell(r_sum,"K"+str(r_sum), 7, ""),
        cell(r_sum,"L"+str(r_sum), 7, ""),
    ))

    # Risk legend
    r_leg = r_sum + 2
    rows.append(row(r_leg, 22,
        cell(r_leg,"A"+str(r_leg), 8, "风险等级说明"),
    ))
    legend = [
        ("高风险（红色）", "方向性挑战或资源严重不足，可能影响项目存续"),
        ("中风险（黄色）", "进度延迟或成本超支，需要密切关注"),
        ("低风险（绿色）", "在可控范围内，按计划推进"),
    ]
    for j, (level, desc) in enumerate(legend):
        r2 = r_leg + 1 + j
        rows.append(row(r2, 22,
            cell(r2,"A"+str(r2), 9, level),
            cell(r2,"B"+str(r2), 9, desc),
        ))

    cols = (col(1,1,10) + col(2,2,18) + col(3,3,10) + col(4,4,10) +
            col(5,5,10) + col(6,6,10) + col(7,7,16) + col(8,8,14) +
            col(9,9,10) + col(10,10,10) + col(11,11,20) + col(12,12,14))
    dim = f"A1:L{r_leg+len(legend)}"
    return make_sheet_xml(C["sub_bg"], dim, cols,
                          sheet_view(5), "".join(rows))


# ═══════════════════════════════════════════════════════════════
# BUILD WORKBOOK
# ═══════════════════════════════════════════════════════════════
def build_workbook(filled=False):
    """Build complete workbook XML."""
    sheets_xml = ""
    rels_xml = """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
  <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml"/>
  <Relationship Id="rId4" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet2.xml"/>
  <Relationship Id="rId5" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet3.xml"/>
  <Relationship Id="rId6" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet4.xml"/>
  <Relationship Id="rId7" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet5.xml"/>
  <Relationship Id="rId8" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet6.xml"/>
  <Relationship Id="rId9" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet7.xml"/>
  <Relationship Id="rId10" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet8.xml"/>
  <Relationship Id="rId11" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet9.xml"/>
</Relationships>"""

    wb_xml = """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <workbookPr/>
  <bookViews><workbookView visibility="visible" minimized="0" showHorizontalScroll="1" showVerticalScroll="1" showSheetTabs="1" tabRatio="600" firstSheet="0" activeTab="0"/></bookViews>
  <sheets>
    <sheet xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" name="总览" sheetId="1" state="visible" r:id="rId1"/>
    <sheet xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" name="主业生命周期自测表" sheetId="2" state="visible" r:id="rId4"/>
    <sheet xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" name="五维评估矩阵" sheetId="3" state="visible" r:id="rId5"/>
    <sheet xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" name="MVP实验设计表" sheetId="4" state="visible" r:id="rId6"/>
    <sheet xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" name="孵化机制配置表" sheetId="5" state="visible" r:id="rId7"/>
    <sheet xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" name="退出决策检查表" sheetId="6" state="visible" r:id="rId8"/>
    <sheet xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" name="阶段闸门图" sheetId="7" state="visible" r:id="rId9"/>
    <sheet xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" name="第二增长曲线机会池" sheetId="8" state="visible" r:id="rId10"/>
    <sheet xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" name="团队创新项目台账" sheetId="9" state="visible" r:id="rId11"/>
  </sheets>
  <calcPr calcId="124519" fullCalcOnLoad="1"/>
</workbook>"""

    ct_xml = """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
  <Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>
  <Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/>
  <Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet2.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet3.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet4.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet5.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet6.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet7.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet8.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet9.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
</Types>"""

    root_rels = """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/>
</Relationships>"""

    # Build sheet data
    sheets_data = [
        build_sheet1_overview(filled),
        build_sheet2_lifecycle(filled),
        build_sheet3_five_dimensions(filled),
        build_sheet4_mvp(filled),
        build_sheet5_incubation(filled),
        build_sheet6_exit(filled),
        build_sheet7_gateway(filled),
        build_sheet8_opportunity(filled),
        build_sheet9_project(filled),
    ]

    return {
        "workbook.xml": wb_xml,
        "workbook.xml.rels": rels_xml,
        "[Content_Types].xml": ct_xml,
        "_rels/.rels": root_rels,
        "styles.xml": None,  # Will copy from demo
        "sharedStrings.xml": "",  # Empty (using inlineStr)
        **{f"worksheets/sheet{i+1}.xml": data
           for i, data in enumerate(sheets_data)},
    }


def create_xlsx(output_path, filled=False):
    """Create xlsx file, extracting template from demo zip."""
    demo_zip = "D:/2026年课程/新课开发demo/配套表单和指引-Excel版/配套表单_空表.xlsx"

    work_dir = f"/tmp/xlsx_build_{'filled' if filled else 'blank'}"
    if os.path.exists(work_dir):
        shutil.rmtree(work_dir)
    os.makedirs(work_dir)

    # Extract demo zip as base
    with zipfile.ZipFile(demo_zip, "r") as z:
        z.extractall(work_dir)

    # Build content
    content = build_workbook(filled)

    # Write all content files
    for name, data in content.items():
        fpath = os.path.join(work_dir, name)
        os.makedirs(os.path.dirname(fpath), exist_ok=True)
        if data is not None:
            with open(fpath, "w", encoding="utf-8") as f:
                f.write(data)

    # Pack
    with zipfile.ZipFile(output_path, "w", zipfile.ZIP_DEFLATED) as zf:
        for root, dirs, files in os.walk(work_dir):
            for file in files:
                filepath = os.path.join(root, file)
                arcname = os.path.relpath(filepath, work_dir)
                zf.write(filepath, arcname)

    print(f"Created: {output_path}")


# ─── Main ────────────────────────────────────────────────────
OUTPUT_BASE = "D:/新课开发/经营/系列/16_业务创新——从机会试错到第二增长曲线/配套表单和指引-Excel版"
os.makedirs(OUTPUT_BASE, exist_ok=True)

create_xlsx(f"{OUTPUT_BASE}/配套表单_空表.xlsx", filled=False)
create_xlsx(f"{OUTPUT_BASE}/配套表单_填好版.xlsx", filled=True)
print("Done!")
