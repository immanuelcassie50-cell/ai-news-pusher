#!/usr/bin/env python3
"""
Build F10_客户关系信任健康度诊断表.xlsx
4 sheets: 诊断表, 雷达图, 行动建议, 跟进记录
"""
import zipfile, os

OUT = "D:/新课开发/信任/信任杠杆：AI时代销售信任重建工作坊/完整课程包/06_工具表单/F10_客户关系信任健康度诊断表.xlsx"
os.makedirs(os.path.dirname(OUT), exist_ok=True)

WORK_DIR = "D:/CC/temp/xlsx_work/"
for d in [WORK_DIR, WORK_DIR+"xl/_rels", WORK_DIR+"xl/worksheets", WORK_DIR+"_rels"]:
    os.makedirs(d, exist_ok=True)

# ── shared strings ──────────────────────────────────────────────────────
STRINGS = [
    "客户关系信任健康度诊断表","维度","评估问题","权重","得分","健康度",
    "1=非常不同意","2=不同意","3=一般","4=同意","5=非常同意",
    "总体健康度","红灯 (0-40)","黄灯 (41-70)","绿灯 (71-100)","加权总分",
    "AI透明度感知","证据可信度","关键时刻体验","践诺一致性","关系温度",
    "专业信任","问题响应速度","长期价值感知","沟通真实性感知","合作意愿度",
    "危机恢复力","未来期待值",
    "评分 (1-5)","维度得分","权重 (%)","颜色",
    # Dim1 q
    "AI使用说明是否清晰？","AI推荐依据是否透明可解释？","系统是否主动告知AI介入程度？","AI决策逻辑是否符合行业常识？",
    # Dim2 q
    "提供的案例数据是否可验证？","第三方认证或背书是否有效？","展示的成功案例是否有关联性？","数据来源是否有清晰的引用？",
    # Dim3 q
    "客户关键时刻是否有真人参与？","关键时刻响应是否及时？","关键时刻是否创造超预期体验？","关键决策点是否有备份方案？",
    # Dim4 q
    "过往承诺是否全部兑现？","服务响应时间是否符合约定？","交付成果是否与提案一致？","问题出现后是否主动告知？",
    # Dim5 q
    "沟通中是否感受到个性化关注？","是否记住客户的历史偏好？","是否在非商务场景保持适度联系？","是否主动分享对客户有价值的信息？",
    # Dim6 q
    "技术问题解答是否专业准确？","方案设计是否考虑客户实际情况？","建议是否具有前瞻性而非被动响应？","团队是否展现行业专家形象？",
    # Dim7 q
    "问题提交后多久得到确认？","紧急问题的响应速度是否达标？","问题解决后是否有闭环确认？","是否主动预报潜在风险？",
    # Dim8 q
    "是否帮助客户量化业务收益？","方案是否着眼长期而非短期？","是否主动提供定期复盘？","合作关系是否超越合同条款？",
    # Dim9 q
    "承诺是否有保留而非过度美化？","负面信息是否坦诚而非隐瞒？","拒绝客户请求时是否有合理解释？","沟通内容是否前后一致？",
    # Dim10 q
    "客户是否主动介绍新业务机会？","客户是否愿意参与联合创新？","合同谈判是否顺畅高效？","客户是否表现出长期续约意愿？",
    # Dim11 q
    "危机发生后是否在24h内响应？","是否主动承担应有的责任？","补救措施是否超出客户预期？","危机后信任是否得到修复甚至增强？",
    # Dim12 q
    "客户是否期待未来更多合作？","客户对行业趋势判断是否信任我们？","客户是否将我们视为战略伙伴？","合作前景描述是否令人信服？",
    # radar chart
    "雷达图","分值","客户关系信任健康度雷达图",
    # action sheet
    "行动建议","当前得分","问题诊断","建议行动","优先级","参考框架",
    "高","中","低",
    "AI透明度不足，建议主动披露AI使用逻辑",
    "证据说服力不足，建议增加可验证的第三方数据",
    "关键时刻缺少真人参与，建议固化关键人出席机制",
    "承诺一致性不足，建议建立承诺追踪系统",
    "关系温度下降，建议增加个性化关怀触点",
    "专业形象有待提升，建议深化行业知识共享",
    "响应速度有待提升，建议明确SLA并定期通报",
    "长期价值感知不足，建议季度业务复盘机制",
    "沟通真实性受质疑，建议建立坦诚沟通文化",
    "合作意愿度下降，建议共同制定发展路线图",
    "危机恢复机制薄弱，建议建立危机预案与演练",
    "未来期待值偏低，建议共同探索创新合作机会",
    # follow-up sheet
    "跟进记录","日期","跟进时间点","维度","分数变化","行动项","备注",
    "30天","60天","90天","初始","示例：","陆远","林婧",
    "云帆智控销售总监","恒信精密采购总监",
    "完成AI工具使用培训，开始主动披露AI逻辑",
    "组织双方高层战略对接会议",
    "启动信任修复联合工作坊",
    "建立月度业务复盘机制","签署长期战略合作协议",
    "客户关系显著改善，合作意愿回升",
    "危机处理得当，信任度超越初始水平",
]

def s(i): return i

def build_shared_strings():
    items = "".join(f"<si><t>{s.replace('&','&amp;').replace('<','&lt;')}</t></si>" for s in STRINGS)
    return (f'<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n'
            f'<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="{len(STRINGS)}" uniqueCount="{len(STRINGS)}">\n'
            f'{items}\n</sst>')

def col(n):
    r = ""
    while n > 0:
        n, rem = divmod(n-1, 26)
        r = chr(65+rem) + r
    return r

# Weights per dimension (sum=100)
W = [20,20,25,8,5,5,4,4,3,3,2,1]

# Questions per dimension (4 each)
QS = [
    [s(i) for i in range(36,40)],   # dim0
    [s(i) for i in range(40,44)],   # dim1
    [s(i) for i in range(44,48)],   # dim2
    [s(i) for i in range(48,52)],   # dim3
    [s(i) for i in range(52,56)],   # dim4
    [s(i) for i in range(56,60)],   # dim5
    [s(i) for i in range(60,64)],   # dim6
    [s(i) for i in range(64,68)],   # dim7
    [s(i) for i in range(68,72)],   # dim8
    [s(i) for i in range(72,76)],  # dim9
    [s(i) for i in range(76,80)],  # dim10
    [s(i) for i in range(80,84)],  # dim11
]

def l(idx): return s(idx)  # label string index

# ── styles ───────────────────────────────────────────────────────────────
def build_styles():
    nf = ('  <numFmts count="5">\n'
          '    <numFmt numFmtId="164" formatCode="$#,##0;($#,##0);&quot;-&quot;"/>\n'
          '    <numFmt numFmtId="165" formatCode="0.0%"/>\n'
          '    <numFmt numFmtId="166" formatCode="0.0x"/>\n'
          '    <numFmt numFmtId="167" formatCode="#,##0"/>\n'
          '    <numFmt numFmtId="168" formatCode="0.0"/>\n'
          '  </numFmts>')
    fonts = ('  <fonts count="6">\n'
             '    <font><sz val="11"/><name val="Calibri"/></font>\n'
             '    <font><sz val="11"/><name val="Calibri"/><color rgb="000000FF"/></font>\n'
             '    <font><sz val="11"/><name val="Calibri"/><color rgb="00000000"/></font>\n'
             '    <font><sz val="11"/><name val="Calibri"/><color rgb="00008000"/></font>\n'
             '    <font><sz val="11"/><name val="Calibri"/><b/></font>\n'
             '    <font><sz val="11"/><name val="Calibri"/><b/><color rgb="00000000"/></font>\n'
             '  </fonts>')
    fills = ('  <fills count="7">\n'
             '    <fill><patternFill patternType="none"/></fill>\n'
             '    <fill><patternFill patternType="gray125"/></fill>\n'
             '    <fill><patternFill patternType="solid"><fgColor rgb="00D9E1F3"/><bgColor indexed="64"/></patternFill></fill>\n'
             '    <fill><patternFill patternType="solid"><fgColor rgb="00E2EFDA"/><bgColor indexed="64"/></patternFill></fill>\n'
             '    <fill><patternFill patternType="solid"><fgColor rgb="00FF6B6B"/><bgColor indexed="64"/></patternFill></fill>\n'
             '    <fill><patternFill patternType="solid"><fgColor rgb="00FFD93D"/><bgColor indexed="64"/></patternFill></fill>\n'
             '    <fill><patternFill patternType="solid"><fgColor rgb="006FFF6F"/><bgColor indexed="64"/></patternFill></fill>\n'
             '  </fills>')
    borders = ('  <borders count="2">\n'
               '    <border><left/><right/><top/><bottom/><diagonal/></border>\n'
               '    <border><left style="thin"/><right style="thin"/><top style="thin"/><bottom style="thin"/></border>\n'
               '  </borders>')
    # 20 cellXfs: 0-14 standard, 15=red fill, 16=yellow, 17=green, 18=bold, 19=thin border
    xfs = ('  <cellXfs count="20">\n'
           '    <xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/>\n'
           '    <xf numFmtId="0" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1"/>\n'
           '    <xf numFmtId="0" fontId="2" fillId="0" borderId="0" xfId="0" applyFont="1"/>\n'
           '    <xf numFmtId="0" fontId="3" fillId="0" borderId="0" xfId="0" applyFont="1"/>\n'
           '    <xf numFmtId="0" fontId="4" fillId="2" borderId="0" xfId="0" applyFont="1" applyFill="1"/>\n'
           '    <xf numFmtId="164" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>\n'
           '    <xf numFmtId="164" fontId="2" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>\n'
           '    <xf numFmtId="165" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>\n'
           '    <xf numFmtId="165" fontId="2" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>\n'
           '    <xf numFmtId="167" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>\n'
           '    <xf numFmtId="167" fontId="2" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>\n'
           '    <xf numFmtId="1" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>\n'
           '    <xf numFmtId="0" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1"/>\n'
           '    <xf numFmtId="0" fontId="4" fillId="3" borderId="0" xfId="0" applyFont="1" applyFill="1"/>\n'
           '    <xf numFmtId="0" fontId="2" fillId="0" borderId="0" xfId="0" applyFont="1"/>\n'
           '    <xf numFmtId="0" fontId="5" fillId="3" borderId="0" xfId="0" applyFont="1" applyFill="1"/>\n'
           '    <xf numFmtId="168" fontId="5" fillId="4" borderId="1" xfId="0" applyFont="1" applyFill="1" applyNumberFormat="1" applyBorder="1"/>\n'
           '    <xf numFmtId="168" fontId="2" fillId="5" borderId="1" xfId="0" applyFont="1" applyFill="1" applyNumberFormat="1" applyBorder="1"/>\n'
           '    <xf numFmtId="168" fontId="2" fillId="6" borderId="1" xfId="0" applyFont="1" applyFill="1" applyNumberFormat="1" applyBorder="1"/>\n'
           '    <xf numFmtId="0" fontId="5" fillId="0" borderId="0" xfId="0" applyFont="1"/>\n'
           '    <xf numFmtId="0" fontId="0" fillId="0" borderId="1" xfId="0" applyBorder="1"/>\n'
           '  </cellXfs>')
    return ('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n'
            '<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">\n'
            + nf + '\n' + fonts + '\n' + fills + '\n' + borders + '\n' + xfs + '\n'
            '</styleSheet>')

# ── sheet1: 诊断表 ───────────────────────────────────────────────────────
def build_sheet1():
    rows = []
    r = 1

    # Row 1: Title (A1:M1)
    rows.append(f'<row r="{r}" ht="32" customHeight="1">')
    rows.append(f'<c r="A{r}" t="s" s="15"><v>0</v></c>')
    for c in range(2, 14):
        rows.append(f'<c r="{col(c)}{r}" t="s" s="15"><v>0</v></c>')
    rows.append('</row>')
    r += 1

    # Row 2: Sub-header
    rows.append(f'<row r="{r}">')
    rows.append(f'<c r="A{r}" t="s" s="4"><v>1</v></c>')   # 维度
    rows.append(f'<c r="B{r}" t="s" s="4"><v>2</v></c>')   # 评估问题
    for i, lbl in enumerate(["1=非常不同意","2=不同意","3=一般","4=同意","5=非常同意"]):
        rows.append(f'<c r="{col(3+i)}{r}" t="s" s="4"><v>{7+i}</v></c>')
    rows.append(f'<c r="H{r}" t="s" s="4"><v>28</v></c>')  # 维度得分
    rows.append(f'<c r="I{r}" t="s" s="4"><v>29</v></c>')  # 权重
    rows.append(f'<c r="J{r}" t="s" s="4"><v>30</v></c>')  # 颜色
    rows.append('</row>')
    r += 1

    # Question rows: 5 rows per dimension (1 header + 4 questions)
    for dim in range(12):
        # Dim header row
        rows.append(f'<row r="{r}" ht="18" customHeight="1">')
        rows.append(f'<c r="A{r}" t="s" s="4"><v>{16+dim}</v></c>')
        rows.append(f'<c r="B{r}" t="s" s="4"><v>{16+dim}</v></c>')
        rows.append(f'<c r="H{r}" t="s" s="4"><v>{16+dim}</v></c>')
        rows.append(f'<c r="I{r}" s="1"><v>{W[dim]}</v></c>')
        rows.append('</row>')
        r += 1

        # Question rows
        for q in range(4):
            qs_idx = QS[dim][q]
            rows.append(f'<row r="{r}">')
            rows.append(f'<c r="A{r}" t="s" s="0"><v>{16+dim}</v></c>')
            rows.append(f'<c r="B{r}" t="s" s="0"><v>{qs_idx}</v></c>')
            # Score input cells C-G (blue = input)
            for sc in range(1, 6):
                rows.append(f'<c r="{col(2+sc)}{r}" s="1"><v>0</v></c>')
            # Average formula in H
            rows.append(f'<c r="H{r}" s="8"><f>IFERROR(AVERAGE(C{r}:G{r}),0)</f><v></v></c>')
            rows.append('</row>')
            r += 1

    # Color legend
    rows.append(f'<row r="{r}"><c r="A{r}" t="s" s="4"><v>12</v></c></row>')
    r += 1
    rows.append(f'<row r="{r}"><c r="A{r}" t="s" s="4"><v>13</v></c></row>')
    r += 1
    rows.append(f'<row r="{r}"><c r="A{r}" t="s" s="4"><v>14</v></c></row>')
    r += 1

    # Overall score row (row 60 based on 2 header + 12*(1+4) = 2+60 = 62)
    # Actually: r after questions = 3 + 12*5 = 63. Then 3 legend rows = 66. So overall at 64
    # Let's just place it after the legend
    # Dim scores are at: dim i starts at row = 3 + i*5 (header row), questions at +1..+4
    # For dim i: score rows = 4+i*5 through 7+i*5
    overall_row = r
    weighted_parts = []
    for i in range(12):
        sr_start = 4 + i * 5
        sr_end = sr_start + 3
        weighted_parts.append(f"AVERAGE(H{sr_start}:H{sr_end})*{W[i]}/100")
    wf = "IFERROR(" + "+".join(weighted_parts) + ",0)"

    rows.append(f'<row r="{r}" ht="24" customHeight="1">')
    rows.append(f'<c r="A{r}" t="s" s="18"><v>11</v></c>')  # 总体健康度
    rows.append(f'<c r="B{r}" t="s" s="18"><v>15</v></c>')  # 加权总分
    rows.append(f'<c r="C{r}" s="8"><f>{wf}</f><v></v></c>')
    rows.append('</row>')
    r += 1

    # Color band rows
    rows.append(f'<row r="{r}"><c r="A{r}" t="s" s="16"><v>12</v></c><c r="B{r}" t="s" s="16"><v>0-40：信任关系存在严重风险，需立即干预</v></c></row>')
    r += 1
    rows.append(f'<row r="{r}"><c r="A{r}" t="s" s="17"><v>13</v></c><c r="B{r}" t="s" s="17"><v>41-70：信任关系处于观望区，需针对性改善</v></c></row>')
    r += 1
    rows.append(f'<row r="{r}"><c r="A{r}" t="s" s="18"><v>14</v></c><c r="B{r}" t="s" s="18"><v>71-100：信任关系健康，持续维护与深化</v></c></row>')

    cols = ('  <cols>\n'
            '    <col min="1" max="1" width="18" customWidth="1"/>\n'
            '    <col min="2" max="2" width="44" customWidth="1"/>\n'
            '    <col min="3" max="7" width="10" customWidth="1"/>\n'
            '    <col min="8" max="8" width="12" customWidth="1"/>\n'
            '    <col min="9" max="9" width="10" customWidth="1"/>\n'
            '    <col min="10" max="10" width="12" customWidth="1"/>\n'
            '  </cols>')

    return ('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n'
            '<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"'
            ' xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">\n'
            '  <sheetViews><sheetView workbookViewId="0"><pane ySplit="2" topLeftCell="A3" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>\n'
            + cols + '\n'
            '  <sheetData>\n' + '\n'.join(rows) + '\n  </sheetData>\n'
            '  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>\n'
            '</worksheet>')

# ── sheet2: 雷达图 ───────────────────────────────────────────────────────
def build_sheet2():
    rows = []
    r = 1
    rows.append(f'<row r="{r}"><c r="A{r}" t="s" s="15"><v>94</v></c></row>')  # 雷达图 title
    r += 1
    rows.append(f'<row r="{r}"><c r="A{r}" t="s" s="4"><v>16</v></c><c r="B{r}" t="s" s="4"><v>95</v></c></row>')  # 维度, 分值
    r += 1
    for i in range(12):
        score_row = 3 + i * 5  # header row in sheet1
        rows.append(f'<row r="{r}">')
        rows.append(f'<c r="A{r}" t="s" s="0"><v>{16+i}</v></c>')
        rows.append(f'<c r="B{r}" s="3"><f>IFERROR(\'诊断表\'!H{score_row},0)</f><v></v></c>')
        rows.append('</row>')
        r += 1
    rows.append(f'<row r="{r}"><c r="A{r}" t="s" s="4"><v>96</v></c></row>')
    r += 1
    rows.append(f'<row r="{r}"><c r="A{r}" t="s" s="0"><v>使用说明：请在"诊断表"中填写评分（1-5），数据自动同步到此表。在Excel中：插入&gt;图表&gt;雷达图，选择已填充雷达图类型，即可生成可视化雷达图。</v></c></row>')

    cols = ('  <cols>\n'
            '    <col min="1" max="1" width="20" customWidth="1"/>\n'
            '    <col min="2" max="2" width="12" customWidth="1"/>\n'
            '  </cols>')
    return ('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n'
            '<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"'
            ' xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">\n'
            '  <sheetViews><sheetView workbookViewId="0"/></sheetViews>\n'
            + cols + '\n'
            '  <sheetData>\n' + '\n'.join(rows) + '\n  </sheetData>\n'
            '  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>\n'
            '</worksheet>')

# ── sheet3: 行动建议 ─────────────────────────────────────────────────────
def build_sheet3():
    rows = []
    r = 1
    rows.append(f'<row r="{r}"><c r="A{r}" t="s" s="15"><v>97</v></c></row>')  # 行动建议
    r += 1
    # Header
    rows.append(f'<row r="{r}">')
    for c, idx in [(1,16),(2,98),(3,99),(4,100),(5,101),(6,102)]:
        rows.append(f'<c r="{col(c)}{r}" t="s" s="4"><v>{idx}</v></c>')
    rows.append('</row>')
    r += 1

    actions = [
        (0, 104, 111, 116),   # dim, priority(高), problem, action
        (1, 104, 112, 117),
        (2, 104, 113, 118),
        (3, 104, 114, 119),
        (4, 105, 115, 120),
        (5, 105, 116, 121),
        (6, 105, 117, 122),
        (7, 106, 118, 123),
        (8, 106, 119, 124),
        (9, 106, 120, 125),
        (10,106, 121, 126),
        (11,106, 122, 127),
    ]
    for dim, pri, prob, act in actions:
        score_row = 3 + dim * 5
        rows.append(f'<row r="{r}">')
        rows.append(f'<c r="A{r}" t="s" s="0"><v>{16+dim}</v></c>')
        rows.append(f'<c r="B{r}" s="3"><f>IFERROR(\'诊断表\'!H{score_row},0)</f><v></v></c>')
        rows.append(f'<c r="C{r}" t="s" s="0"><v>{prob}</v></c>')
        rows.append(f'<c r="D{r}" t="s" s="0"><v>{act}</v></c>')
        rows.append(f'<c r="E{r}" t="s" s="0"><v>{pri}</v></c>')
        rows.append(f'<c r="F{r}" t="s" s="0"><v>透证临兑</v></c>')
        rows.append('</row>')
        r += 1

    cols = ('  <cols>\n'
            '    <col min="1" max="1" width="16" customWidth="1"/>\n'
            '    <col min="2" max="2" width="12" customWidth="1"/>\n'
            '    <col min="3" max="3" width="28" customWidth="1"/>\n'
            '    <col min="4" max="4" width="42" customWidth="1"/>\n'
            '    <col min="5" max="5" width="8" customWidth="1"/>\n'
            '    <col min="6" max="6" width="12" customWidth="1"/>\n'
            '  </cols>')
    return ('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n'
            '<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"'
            ' xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">\n'
            '  <sheetViews><sheetView workbookViewId="0"/></sheetViews>\n'
            + cols + '\n'
            '  <sheetData>\n' + '\n'.join(rows) + '\n  </sheetData>\n'
            '  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>\n'
            '</worksheet>')

# ── sheet4: 跟进记录 ─────────────────────────────────────────────────────
def build_sheet4():
    rows = []
    r = 1
    rows.append(f'<row r="{r}"><c r="A{r}" t="s" s="15"><v>129</v></c></row>')  # 跟进记录
    r += 1
    rows.append(f'<row r="{r}">')
    for c, idx in [(1,130),(2,131),(3,16),(4,132),(5,133),(6,134)]:
        rows.append(f'<c r="{col(c)}{r}" t="s" s="4"><v>{idx}</v></c>')
    rows.append('</row>')
    r += 1

    # 30-day section
    rows.append(f'<row r="{r}"><c r="A{r}" t="s" s="4"><v>135</v></c></row>')  # 30天
    r += 1
    # Example rows for 陆远 and 林婧
    rows.append(f'<row r="{r}">')
    rows.append(f'<c r="A{r}" t="s" s="12"><v>54301</v></c>')  # date placeholder
    rows.append(f'<c r="B{r}" t="s" s="0"><v>135</v></c>')   # 30天
    rows.append(f'<c r="C{r}" t="s" s="0"><v>139</v></c>')   # 陆远
    rows.append(f'<c r="D{r}" t="s" s="1"><v>0</v></c>')     # initial score
    rows.append(f'<c r="E{r}" t="s" s="0"><v>141</v></c>')  # action item
    rows.append(f'<c r="F{r}" t="s" s="0"><v>140</v></c>')   # notes
    rows.append('</row>')
    r += 1
    rows.append(f'<row r="{r}">')
    rows.append(f'<c r="A{r}" t="s" s="12"><v>54301</v></c>')
    rows.append(f'<c r="B{r}" t="s" s="0"><v>135</v></c>')
    rows.append(f'<c r="C{r}" t="s" s="0"><v>140</v></c>')   # 林婧
    rows.append(f'<c r="D{r}" t="s" s="1"><v>0</v></c>')
    rows.append(f'<c r="E{r}" t="s" s="0"><v>142</v></c>')
    rows.append(f'<c r="F{r}" t="s" s="0"><v>140</v></c>')
    rows.append('</row>')
    r += 1

    # 60-day section
    rows.append(f'<row r="{r}"><c r="A{r}" t="s" s="4"><v>136</v></c></row>')  # 60天
    r += 1
    rows.append(f'<row r="{r}">')
    rows.append(f'<c r="A{r}" t="s" s="12"><v>54331</v></c>')
    rows.append(f'<c r="B{r}" t="s" s="0"><v>136</v></c>')
    rows.append(f'<c r="C{r}" t="s" s="0"><v>139</v></c>')
    rows.append(f'<c r="D{r}" t="s" s="1"><v>0</v></c>')
    rows.append(f'<c r="E{r}" t="s" s="0"><v>143</v></c>')
    rows.append(f'<c r="F{r}" t="s" s="0"><v>142</v></c>')
    rows.append('</row>')
    r += 1
    rows.append(f'<row r="{r}">')
    rows.append(f'<c r="A{r}" t="s" s="12"><v>54331</v></c>')
    rows.append(f'<c r="B{r}" t="s" s="0"><v>136</v></c>')
    rows.append(f'<c r="C{r}" t="s" s="0"><v>140</v></c>')
    rows.append(f'<c r="D{r}" t="s" s="1"><v>0</v></c>')
    rows.append(f'<c r="E{r}" t="s" s="0"><v>143</v></c>')
    rows.append(f'<c r="F{r}" t="s" s="0"><v>142</v></c>')
    rows.append('</row>')
    r += 1

    # 90-day section
    rows.append(f'<row r="{r}"><c r="A{r}" t="s" s="4"><v>137</v></c></row>')  # 90天
    r += 1
    rows.append(f'<row r="{r}">')
    rows.append(f'<c r="A{r}" t="s" s="12"><v>54361</v></c>')
    rows.append(f'<c r="B{r}" t="s" s="0"><v>137</v></c>')
    rows.append(f'<c r="C{r}" t="s" s="0"><v>139</v></c>')
    rows.append(f'<c r="D{r}" t="s" s="1"><v>0</v></c>')
    rows.append(f'<c r="E{r}" t="s" s="0"><v>144</v></c>')
    rows.append(f'<c r="F{r}" t="s" s="0"><v>145</v></c>')
    rows.append('</row>')
    r += 1
    rows.append(f'<row r="{r}">')
    rows.append(f'<c r="A{r}" t="s" s="12"><v>54361</v></c>')
    rows.append(f'<c r="B{r}" t="s" s="0"><v>137</v></c>')
    rows.append(f'<c r="C{r}" t="s" s="0"><v>140</v></c>')
    rows.append(f'<c r="D{r}" t="s" s="1"><v>0</v></c>')
    rows.append(f'<c r="E{r}" t="s" s="0"><v>145</v></c>')
    rows.append(f'<c r="F{r}" t="s" s="0"><v>146</v></c>')
    rows.append('</row>')

    cols = ('  <cols>\n'
            '    <col min="1" max="1" width="14" customWidth="1"/>\n'
            '    <col min="2" max="2" width="12" customWidth="1"/>\n'
            '    <col min="3" max="3" width="14" customWidth="1"/>\n'
            '    <col min="4" max="4" width="12" customWidth="1"/>\n'
            '    <col min="5" max="5" width="38" customWidth="1"/>\n'
            '    <col min="6" max="6" width="32" customWidth="1"/>\n'
            '  </cols>')
    return ('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n'
            '<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"'
            ' xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">\n'
            '  <sheetViews><sheetView workbookViewId="0"/></sheetViews>\n'
            + cols + '\n'
            '  <sheetData>\n' + '\n'.join(rows) + '\n  </sheetData>\n'
            '  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>\n'
            '</worksheet>')

# ── write files ──────────────────────────────────────────────────────────
def w(path, content):
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)

w(WORK_DIR + 'xl/workbook.xml',
  '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n'
  '<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"'
  ' xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">\n'
  '  <fileVersion appName="xl" lastEdited="7" lowestEdited="7"/>\n'
  '  <workbookPr defaultThemeVersion="166925"/>\n'
  '  <bookViews><workbookView xWindow="0" yWindow="0" windowWidth="20140" windowHeight="10960"/></bookViews>\n'
  '  <sheets>\n'
  '    <sheet name="诊断表" sheetId="1" r:id="rId1"/>\n'
  '    <sheet name="雷达图" sheetId="2" r:id="rId4"/>\n'
  '    <sheet name="行动建议" sheetId="3" r:id="rId5"/>\n'
  '    <sheet name="跟进记录" sheetId="4" r:id="rId6"/>\n'
  '  </sheets>\n'
  '  <calcPr calcId="191029"/>\n'
  '</workbook>')

w(WORK_DIR + 'xl/_rels/workbook.xml.rels',
  '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n'
  '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">\n'
  '  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>\n'
  '  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>\n'
  '  <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml"/>\n'
  '  <Relationship Id="rId4" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet2.xml"/>\n'
  '  <Relationship Id="rId5" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet3.xml"/>\n'
  '  <Relationship Id="rId6" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet4.xml"/>\n'
  '</Relationships>')

w(WORK_DIR + '[Content_Types].xml',
  '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n'
  '<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">\n'
  '  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>\n'
  '  <Default Extension="xml" ContentType="application/xml"/>\n'
  '  <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>\n'
  '  <Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>\n'
  '  <Override PartName="/xl/worksheets/sheet2.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>\n'
  '  <Override PartName="/xl/worksheets/sheet3.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>\n'
  '  <Override PartName="/xl/worksheets/sheet4.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>\n'
  '  <Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>\n'
  '  <Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/>\n'
  '</Types>')

w(WORK_DIR + '_rels/.rels',
  '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n'
  '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">\n'
  '  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/>\n'
  '</Relationships>')

w(WORK_DIR + 'xl/styles.xml', build_styles())
w(WORK_DIR + 'xl/sharedStrings.xml', build_shared_strings())
w(WORK_DIR + 'xl/worksheets/sheet1.xml', build_sheet1())
w(WORK_DIR + 'xl/worksheets/sheet2.xml', build_sheet2())
w(WORK_DIR + 'xl/worksheets/sheet3.xml', build_sheet3())
w(WORK_DIR + 'xl/worksheets/sheet4.xml', build_sheet4())

# Pack
if os.path.exists(OUT):
    os.remove(OUT)
with zipfile.ZipFile(OUT, 'w', zipfile.ZIP_DEFLATED) as zf:
    for root, dirs, files in os.walk(WORK_DIR):
        for file in files:
            fp = os.path.join(root, file)
            zf.write(fp, os.path.relpath(fp, WORK_DIR))

print(f"Written: {OUT}")
print(f"Strings: {len(STRINGS)}")

# Validate
import subprocess
r = subprocess.run(
    ['python3', 'C:/Users/Administrator/.claude/skills/Excel表格处理/scripts/formula_check.py', OUT],
    capture_output=True, text=True
)
print("formula_check stdout:", r.stdout[:2000])
print("formula_check stderr:", r.stderr[:500] if r.stderr else "")
print("Return code:", r.returncode)
