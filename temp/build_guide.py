#!/usr/bin/env python3
"""
Build 表单使用指引.xlsx for 业务创新 course
"""
import os
import zipfile
import shutil

C = {
    "hdr_bg":   "001B4F9B",
    "hdr_txt":  "00FFFFFF",
    "sub_bg":   "002E75B6",
    "row_alt":  "00F2F2F2",
    "white":    "00FFFFFF",
    "green_dk": "00375623",
    "teal_dk":  "00006B6B",
    "orange_dk":"00C55A11",
    "body_txt": "00262626",
    "blue_txt": "001B4F9B",
    "green_lt": "00E2EFDA",
    "teal_lt":  "00E0F0F0",
    "orange_lt":"00FCF4E1",
}

def cell(r, c_addr, style, text=None):
    if text is None:
        return f'<c r="{c_addr}" s="{style}" t="inlineStr"><is><t></t></is></c>'
    text = text.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")
    return f'<c r="{c_addr}" s="{style}" t="inlineStr"><is><t>{text}</t></is></c>'

def row(r, height, *cells):
    return f'<row r="{r}" ht="{height}" customHeight="1">{"".join(cells)}</row>'

def col(min_, max_, width):
    return f'<col width="{width}" customWidth="1" min="{min_}" max="{max_}"/>'

def freeze_pane(y):
    return f'<pane ySplit="{y}" topLeftCell="A{y+1}" activePane="bottomLeft" state="frozen"/>'

def sv(yd=1):
    return f'<sheetView workbookViewId="0"><selection activeCell="A1" sqref="A1"/>{freeze_pane(yd)}</sheetView>'

def make_sheet(color, dim, cols, sv_xml, rows_xml):
    return f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <sheetPr><tabColor rgb="{color}"/><outlinePr summaryBelow="1" summaryRight="1"/><pageSetUpPr/></sheetPr>
  <dimension ref="{dim}"/>
  <sheetViews>{sv_xml}</sheetViews>
  <sheetFormatPr baseColWidth="8" defaultRowHeight="15"/>
  <cols>{cols}</cols>
  <sheetData>{rows_xml}</sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''


# ── Sheet 1: 使用指南首页 ──────────────────────────────────────────
def build_sheet1():
    rows = []
    rows.append(row(1, 44,
        cell(1,"A1", 1, "业务创新配套表单 使用指南")
    ))
    rows.append(row(3, 22,
        cell(3,"A3", 11, "本指南说明如何使用配套表单工具，确保团队在业务创新过程中高效协作。"),
    ))

    toc = [
        ("一", "表单总览", "了解8张表单的整体结构和用途"),
        ("二", "使用流程", "从机会识别到第二增长曲线的完整路径"),
        ("三", "表单详解", "每张表单的使用方法、填写要点和常见问题"),
        ("四", "团队协作", "多人协作时的填写规范和审核机制"),
        ("五", "进阶用法", "如何结合数据分析进行机会筛选和决策"),
    ]
    for i, (num, title, desc) in enumerate(toc):
        r = i + 5
        s = 4 if i % 2 == 0 else 5
        rows.append(row(r, 26,
            cell(r,"A"+str(r), 3, num),
            cell(r,"B"+str(r), s, title),
            cell(r,"C"+str(r), s, desc),
        ))

    cols = col(1,1,4) + col(2,2,18) + col(3,3,50)
    return make_sheet(C["hdr_bg"], f"A1:C{r+1}", cols, sv(1), "".join(rows))


# ── Sheet 2: 使用流程 ─────────────────────────────────────────────
def build_sheet2():
    rows = []
    rows.append(row(1, 44, cell(1,"A1", 1, "使用流程：从机会识别到第二增长曲线")))
    rows.append(row(3, 22,
        cell(3,"A3", 11, "完整流程分为6个阶段，每个阶段对应相应的表单工具。"),
    ))

    stages = [
        ("阶段1", "自我诊断", "主业生命周期自测表", "确定主业所处阶段，判断是否需要寻找第二增长曲线",
         "课程开场/个人诊断", "填写主业生命周期自测表，判断主业处于哪个阶段（导入/成长/成熟/转型/衰退）"),
        ("阶段2", "机会筛选", "五维评估矩阵", "系统评估潜在机会的吸引力",
         "机会筛选", "使用五维评估矩阵对候选机会进行评分（1-5分），总分≥60分进入下一流程"),
        ("阶段3", "假设验证", "MVP实验设计表", "设计最小可行实验验证关键假设",
         "探索验证", "每个机会设计1-3个MVP实验，收集数据验证核心假设是否成立"),
        ("阶段4", "资源决策", "孵化机制配置表", "配置资源比例并设置决策权限",
         "孵化决策", "根据阶段配置资源（人力/资金/时间），设置明确的里程碑和闸门评审"),
        ("阶段5", "关键决策", "退出决策检查表", "在关键节点做出加码/调整/止损决策",
         "关键决策点", "每季度进行决策检查，满足条件果断执行对应决策"),
        ("阶段6", "机会管理", "机会池+项目台账", "持续追踪和管理所有机会与项目",
         "全程可视化", "每周更新机会池，每月更新项目台账，确保管理层实时掌握进展"),
    ]

    rows.append(row(5, 28,
        cell(5,"A5", 2, "阶段编号"),
        cell(5,"B5", 2, "阶段名称"),
        cell(5,"C5", 2, "核心表单"),
        cell(5,"D5", 2, "阶段目标"),
        cell(5,"E5", 2, "适用时机"),
        cell(5,"F5", 2, "操作要点"),
    ))

    for i, s in enumerate(stages):
        r = i + 6
        bg = 4 if i % 2 == 0 else 5
        rows.append(row(r, 36,
            cell(r,"A"+str(r), 3, s[0]),
            cell(r,"B"+str(r), bg, s[1]),
            cell(r,"C"+str(r), bg, s[2]),
            cell(r,"D"+str(r), bg, s[3]),
            cell(r,"E"+str(r), bg, s[4]),
            cell(r,"F"+str(r), bg, s[5]),
        ))

    r_end = 6 + len(stages)
    cols = col(1,1,10)+col(2,2,12)+col(3,3,18)+col(4,4,26)+col(5,5,14)+col(6,6,32)
    return make_sheet(C["sub_bg"], f"A1:F{r_end}", cols, sv(5), "".join(rows))


# ── Sheet 3: 表单详解 ──────────────────────────────────────────────
def build_sheet3():
    rows = []
    rows.append(row(1, 44, cell(1,"A1", 1, "表单详解：每张表单的使用说明")))
    rows.append(row(3, 22,
        cell(3,"A3", 11, "以下为每张表单的填写说明、注意事项和常见问题解答。"),
    ))

    forms = [
        ("表1", "主业生命周期自测表", "五阶段判断工具",
         "1. 对照每个维度的特征，判断主业所处阶段\n2. 结合实际数据（营收增长率、市场份额等）综合判断\n3. 重点关注[转型期]和[衰退期]——这两个阶段需要积极寻找第二增长曲线",
         "常见问题：\nQ: 如果主业同时具备两个阶段的特征怎么办？\nA: 以主要收入来源为准，同时在备注中说明过渡状态\n\nQ: 初创企业如何判断？\nA: 收入<1000万且未盈利的企业通常处于导入期，即使有增长也归类为导入期"),
        ("表2", "五维评估矩阵", "5维度评分工具",
         "1. 每个维度1-5分，5分为最高分\n2. 权重总和=100%，可根据行业特点调整权重\n3. 综合得分=加权得分之和，总分最高75分\n4. 建议总分≥60分的机会优先进入孵化流程",
         "权重建议：\n- 成熟行业：市场吸引力30%，竞争强度25%，资源匹配20%，技术可行性15%，商业可行性10%\n- 新兴行业：技术可行性30%，市场吸引力25%，资源匹配20%，竞争强度15%，商业可行性10%"),
        ("表3", "MVP实验设计表", "假设验证工具",
         "1. 每个机会设计1-3个MVP实验\n2. 核心假设要具体可验证（避免模糊假设）\n3. 成功指标要量化，设定明确阈值\n4. 实验结论栏：验证通过/假设修正/假设证伪",
         "假设类型说明：\n- 用户需求假设：我们理解的用户痛点真实存在\n- 技术可行性假设：现有技术能够实现所需功能\n- 商业可行性假设：用户愿意为此付费且单位经济正向\n- 增长假设：获取客户的成本和方式可规模化"),
        ("表4", "孵化机制配置表", "资源配置工具",
         "1. 根据孵化阶段配置相应资源（见表单内政策说明）\n2. 决策权限要明确，避免资源滥用\n3. 里程碑设置要具体可衡量\n4. 闸门日期要与决策检查联动",
         "资源决策原则：\n- 探索期：低成本小规模试探，失败代价可控\n- 验证期：适度投入，验证核心假设\n- 孵化期：按里程碑拨付资源，避免一次性投入\n- 规模化：全力冲刺，但需上一阶段闸门通过"),
        ("表5", "退出决策检查表", "决策工具",
         "1. 在每个决策检查点，团队共同评估\n2. 满足条件就打勾（勾=满足，空白=不满足）\n3. 根据满足条件的数量做出决策：\n   - 加码：满足[加码]条件3条以上\n   - 调整：满足[调整]条件3条以上\n   - 止损：满足[止损]条件2条以上",
         "决策注意事项：\n- 避免[差不多]思维——条件不满足就是没满足\n- 止损不等于失败，及时止损释放资源用于其他机会\n- 重大决策（如止损）需上报CEO或董事会审批"),
        ("表6", "阶段闸门图", "可视化进度管理工具",
         "1. 记录每个项目的当前阶段和进入时间\n2. 关注[已持续时间]——过长需警惕\n3. 风险信号栏要如实填写，不要回避问题\n4. 闸门评审要严格执行，通过/不通过都要有明确结论",
         "四阶段定义：\n- 探索期（Exploration）：0-6个月，寻找机会假设\n- 验证期（Validation）：6-12个月，验证市场假设\n- 孵化期（Incubation）：12-24个月，建立运营体系\n- 规模化（Scaling）：24个月+，全力复制成功模式"),
        ("表7", "第二增长曲线机会池", "机会管理工具",
         "1. 每周更新一次机会池状态\n2. 优先级（P1/P2/P3/P4）根据五维评估得分确定\n3. 状态分类：想法阶段→评估中→已启动→暂停→放弃\n4. 潜在收入是参考值，不需要精确预测",
         "机会池维护原则：\n- 新想法随时可以加入机会池\n- 每月审视一次P3/P4机会，评估是否升级或放弃\n- 放弃的机会保留记录，供后续复盘"),
        ("表8", "团队创新项目台账", "多项目管理工具",
         "1. 每月更新一次项目进展\n2. 进度（%）是主观评估，基于里程碑完成情况\n3. 风险等级由负责人和上级共同评估\n4. 关键风险要具体描述，便于管理层跟进",
         "多项目管理原则：\n- 创新项目数量建议控制在3-5个，避免资源分散\n- 高风险项目要增加评审频率\n- 项目之间如果有资源冲突，优先保障P1项目"),
    ]

    rows.append(row(5, 28,
        cell(5,"A5", 2, "表单"),
        cell(5,"B5", 2, "名称"),
        cell(5,"C5", 2, "工具类型"),
        cell(5,"D5", 2, "使用说明"),
        cell(5,"E5", 2, "注意事项/FAQ"),
    ))

    for i, f in enumerate(forms):
        r = i + 6
        bg = 4 if i % 2 == 0 else 5
        rows.append(row(r, 60,
            cell(r,"A"+str(r), 3, f[0]),
            cell(r,"B"+str(r), bg, f[1]),
            cell(r,"C"+str(r), bg, f[2]),
            cell(r,"D"+str(r), bg, f[3]),
            cell(r,"E"+str(r), bg, f[4]),
        ))

    r_end = 6 + len(forms)
    cols = col(1,1,6)+col(2,2,18)+col(3,3,14)+col(4,4,40)+col(5,5,36)
    return make_sheet(C["green_dk"], f"A1:E{r_end}", cols, sv(5), "".join(rows))


# ── Sheet 4: 团队协作规范 ─────────────────────────────────────────
def build_sheet4():
    rows = []
    rows.append(row(1, 44, cell(1,"A1", 1, "团队协作规范")))
    rows.append(row(3, 22,
        cell(3,"A3", 11, "多人协作时，为确保数据一致性和决策效率，请遵循以下规范。"),
    ))

    sections = [
        ("填写规范", [
            ("谁是填写人", "每张表单指定1名主要负责人（如项目经理），负责定期更新表单数据。"),
            ("数据来源", "所有评分和判断必须有数据支撑，避免主观臆断。引用数据来源并记录在备注栏。"),
            ("更新频率", "机会池每周更新，项目台账每月更新，决策检查表每季度更新。"),
            ("版本管理", "重大决策后的版本保存为新文件（文件名加日期后缀），保留历史版本备查。"),
        ]),
        ("审核规范", [
            ("谁负责审核", "项目负责人自评 → 直接上级复核 → 决策委员会审批（重大决策）。"),
            ("审核内容", "数据真实性、假设合理性、决策合规性。"),
            ("审核时限", "一般数据：3个工作日内完成审核；紧急决策：24小时内完成。"),
            ("异议处理", "审核中有异议，直接在表单备注栏标注[有异议：原因]，发起讨论。"),
        ]),
        ("决策规范", [
            ("决策频率", "常规决策检查：每季度一次；重大决策（如止损）：可临时召集。"),
            ("决策记录", "所有决策记录在[退出决策检查表]的备注栏，并抄送所有相关方。"),
            ("决策执行", "决策结果在1周内执行，负责人要在项目台账中记录执行进展。"),
        ]),
    ]

    r_cur = 5
    for sec_title, items in sections:
        rows.append(row(r_cur, 26,
            cell(r_cur,"A"+str(r_cur), 7, sec_title),
        ))
        r_cur += 1
        for j, (k, v) in enumerate(items):
            bg = 4 if j % 2 == 0 else 5
            rows.append(row(r_cur, 28,
                cell(r_cur,"A"+str(r_cur), 9, k),
                cell(r_cur,"B"+str(r_cur), bg, v),
            ))
            r_cur += 1
        r_cur += 1  # blank row between sections

    cols = col(1,1,20)+col(2,2,60)
    return make_sheet(C["teal_dk"], f"A1:B{r_cur}", cols, sv(1), "".join(rows))


# ── Sheet 5: 进阶用法 ──────────────────────────────────────────────
def build_sheet5():
    rows = []
    rows.append(row(1, 44, cell(1,"A1", 1, "进阶用法：数据分析与决策支持")))
    rows.append(row(3, 22,
        cell(3,"A3", 11, "以下进阶技巧可帮助团队更好地利用表单数据进行机会筛选和决策支持。"),
    ))

    tips = [
        ("机会漏斗分析", "用五维评估矩阵对所有机会评分后，按P1/P2/P3/P4分类，统计各级别数量和潜在收入合计，观察机会漏斗是否健康。\n分析要点：P1机会是否足够？P3/P4是否过多占用了资源？"),
        ("阶段转化率追踪", "在阶段闸门图中，记录每个项目在各阶段的停留时间。\n分析要点：验证期>12个月的项目往往面临更大的市场风险，需要重点关注。"),
        ("实验成功率统计", "定期统计MVP实验的验证通过率（假设验证通过/总实验数）。\n分析要点：成功率<30%说明假设过于乐观，需要降低预期或调整方向。"),
        ("资源效率分析", "在项目台账中，用"已投入资金/预算总额"计算资源消耗比例，对比同阶段项目的平均消耗。\n分析要点：资源消耗过快且进度不达预期的项目需要预警。"),
        ("风险相关性分析", "当多个项目同时出现高风险时，往往意味着外部环境变化，需要评估是否存在系统性风险。\n分析要点：高风险项目数量>总数50%时，建议暂停新项目启动，集中资源解决问题。"),
        ("决策回顾分析", "定期回顾"退出决策检查表"，统计加码/调整/止损的决策分布。\n分析要点：如果止损决策<10%，说明团队可能过于乐观，需要调整决策标准。"),
    ]

    rows.append(row(5, 28,
        cell(5,"A5", 2, "分析主题"),
        cell(5,"B5", 2, "操作方法"),
        cell(5,"C5", 2, "分析要点"),
    ))

    for i, (topic, method, points) in enumerate(tips):
        r = i + 6
        bg = 4 if i % 2 == 0 else 5
        rows.append(row(r, 52,
            cell(r,"A"+str(r), 6, topic),
            cell(r,"B"+str(r), bg, method),
            cell(r,"C"+str(r), bg, points),
        ))

    r_end = 6 + len(tips)
    cols = col(1,1,18)+col(2,2,44)+col(3,3,42)
    return make_sheet(C["orange_dk"], f"A1:C{r_end}", cols, sv(5), "".join(rows))


# ── Build workbook ─────────────────────────────────────────────────
def build_guide_workbook():
    wb = """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <workbookPr/>
  <bookViews><workbookView visibility="visible" minimized="0" showHorizontalScroll="1" showVerticalScroll="1" showSheetTabs="1" tabRatio="600" firstSheet="0" activeTab="0"/></bookViews>
  <sheets>
    <sheet xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" name="使用指南" sheetId="1" state="visible" r:id="rId1"/>
    <sheet xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" name="使用流程" sheetId="2" state="visible" r:id="rId4"/>
    <sheet xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" name="表单详解" sheetId="3" state="visible" r:id="rId5"/>
    <sheet xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" name="团队协作规范" sheetId="4" state="visible" r:id="rId6"/>
    <sheet xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" name="进阶用法" sheetId="5" state="visible" r:id="rId7"/>
  </sheets>
  <calcPr calcId="124519" fullCalcOnLoad="1"/>
</workbook>"""

    rels = """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
  <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml"/>
  <Relationship Id="rId4" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet2.xml"/>
  <Relationship Id="rId5" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet3.xml"/>
  <Relationship Id="rId6" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet4.xml"/>
  <Relationship Id="rId7" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet5.xml"/>
</Relationships>"""

    ct = """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
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
</Types>"""

    root_rels = """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/>
</Relationships>"""

    return {
        "workbook.xml": wb,
        "xl/workbook.xml.rels": rels,
        "[Content_Types].xml": ct,
        "_rels/.rels": root_rels,
        "xl/worksheets/sheet1.xml": build_sheet1(),
        "xl/worksheets/sheet2.xml": build_sheet2(),
        "xl/worksheets/sheet3.xml": build_sheet3(),
        "xl/worksheets/sheet4.xml": build_sheet4(),
        "xl/worksheets/sheet5.xml": build_sheet5(),
    }


def create_guide(output_path):
    demo_zip = "D:/2026年课程/新课开发demo/配套表单和指引-Excel版/配套表单_空表.xlsx"
    work_dir = "/tmp/guide_build"
    if os.path.exists(work_dir):
        shutil.rmtree(work_dir)
    os.makedirs(work_dir)

    with zipfile.ZipFile(demo_zip, "r") as z:
        z.extractall(work_dir)

    content = build_guide_workbook()
    for name, data in content.items():
        fpath = os.path.join(work_dir, name)
        os.makedirs(os.path.dirname(fpath), exist_ok=True)
        if data is not None:
            with open(fpath, "w", encoding="utf-8") as f:
                f.write(data)

    with zipfile.ZipFile(output_path, "w", zipfile.ZIP_DEFLATED) as zf:
        for root, dirs, files in os.walk(work_dir):
            for file in files:
                filepath = os.path.join(root, file)
                arcname = os.path.relpath(filepath, work_dir)
                zf.write(filepath, arcname)

    print(f"Created: {output_path}")


OUTPUT_BASE = "D:/新课开发/经营/系列/16_业务创新——从机会试错到第二增长曲线/配套表单和指引-Excel版"
create_guide(f"{OUTPUT_BASE}/表单使用指引.xlsx")
print("All done!")
