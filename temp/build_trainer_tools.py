import os

BASE = "D:/tmp/xlsx_trainer_tools"

# All strings in order (166 total)
STRINGS = [
    # Sheet 1 - 现场信号判断表 (indices 0-40)
    "现场信号判断表", "现场状态", "属于噪音还是信号", "判断依据", "我的应对",
    "小组讨论声音变大", "通常是噪音", "内容是否围绕主题", "不介入，远观即可",
    "某个组突然特别安静", "需要判断", "结合上下文判断", "走过去，轻声询问",
    "小组连续沉默超出预期时长", "眼神是否在动", "眼神发直则上前询问",
    "发言人始终是同一人", "信号", "是否形成一言堂", "引导追问其他人意见",
    "发言人频繁更换未形成结论", "是否无人承担梳理", "指定一人先做小结",
    "有人频繁看手机", "噪音（正常走神）", "不影响他人情况下，不做特别处理",
    "其他信号1（请填写）", "其他信号2（请填写）", "其他信号3（请填写）",
    # Sheet 2 - 三类退路清单 (29-57)
    "三类退路清单", "退路类型", "最可能出现的场景", "我目前的应对方式", "还没想清楚的地方",
    "流程退路", "环节冷场 / 讨论超时", "某个案例引发负面情绪", "时间不够用需要砍环节",
    "情绪退路", "学员情绪失控 / 崩溃哭泣", "公开质疑你的方法或资历", "消极对抗（表面配合内心抵触）",
    "权力退路", "甲方临场插话打乱节奏", "学员职级远超预期", "甲方突然提出增加内容",
    # Sheet 3 - 气口密度自查表 (58-81)
    "气口密度自查表", "现场观察到的信号", "说明密度状态", "该做的调整",
    "学员表情发直、身体后靠", "密度过高", "插入一次停顿或轻松话题",
    "学员开始交头接耳、注意力涣散", "密度过低", "收紧节奏，提高信息密度",
    "关键判断说完后现场安静", "气口正常", "保持停顿，不急于填补",
    "连续超过十分钟无起伏", "需要立即调整", "插入互动或改变语速",
    "有人频繁看手机", "注意力下降", "改变节奏，插入互动",
    "其他观察信号1（请填写）", "其他观察信号2（请填写）",
    # Sheet 4 - 单场复盘表 (82-105)
    "单场复盘表", "复盘维度", "这场活动的具体情况", "下次要调整的地方",
    "全局判断", "这场哪里是噪音、哪里是真信号，判断对了吗？",
    "退路准备", "有没有意外是完全没想到的？",
    "气口节奏", "哪个环节明显闷了，或者哪个环节太赶？",
    "沉默应对", "那几个停顿用对了吗？有没有该停没停的？",
    "接话流畅度", "接话时是在递口子还是在完成自己的问题清单？",
    "甲方与学员", "这两条线各自的反馈是什么，有没有冲突？",
    "台下的紧绷", "这次真正让自己焦虑的点是什么，说清楚它？",
    "有没有证明欲", "有没有多说了证明自己的话？哪一句？",
    "流程调整", "这次有没有临场调整？为什么调？怎么调的？",
    # Sheet 5 - 课前调研表 (106-120)
    "课前调研表", "调研维度", "具体内容", "备注",
    "学员背景", "职级分布 / 工作经验 / 培训经历",
    "培训需求", "最想解决的问题 / 期望的收获",
    "担心问题", "最担心出现的场面 / 担心被问到的问题",
    "特殊学员", "沉默型 / 好斗型 / 消极型 / 话痨型 / 表演型",
    "甲方关注点", "关键决策人 / 评估标准 / 特别注意事项",
    # Sheet 6 - 培训师自检表 (121-145)
    "培训师自检表", "检查维度", "检查要点", "准备状态", "备注",
    "基本功", "教学流程是否清晰", "已确认 / 待确认",
    "案例和素材是否准备就绪", "时间分配是否合理",
    "状态准备", "身体状态（睡眠/饮食）", "心理状态（紧张点/担心的事）", "上台感觉（松弛/紧绷）",
    "物料检查", "PPT/投影/音响", "教材/道具/白板笔", "应急预案（备用方案等）",
    # Sheet 7 - 学员类型应对卡 (146-165)
    "学员类型应对卡", "学员类型", "典型表现", "应对策略",
    "沉默型", "全程不发言，或只在被点名时说话", "降低难度；开放式问题引导；请人复述给台阶",
    "好斗型", "喜欢质疑、挑战培训师权威", "不当场对抗；承认其问题有价值；私下处理情绪",
    "消极型", "表面配合但内心抵触", "找到利益关联点；用选择题而非判断题",
    "话痨型", "一个人说太多，占用其他人时间", "翻译复述法收住话头；时间提醒温和打断",
    "表演型", "把场合当个人秀场", "给表演欲合法出口；用记录工具收住",
    # Sheet 8 - 课程落地计划表 (166-171)
    "课程落地计划表", "行动计划", "时间节点", "资源需求", "效果检验", "备注",
]

print(f"Total strings: {len(STRINGS)}")

SIDX = {s: i for i, s in enumerate(STRINGS)}

# ============================================================
# Write sharedStrings.xml
# ============================================================
with open(f"{BASE}/xl/sharedStrings.xml", "w", encoding="utf-8") as f:
    f.write('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n')
    f.write('<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" ')
    f.write(f'count="{len(STRINGS)}" uniqueCount="{len(STRINGS)}">\n')
    for s in STRINGS:
        esc = s.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;')
        f.write(f'  <si><t>{esc}</t></si>\n')
    f.write('</sst>')
print("sharedStrings.xml written")

# ============================================================
# Write workbook.xml
# ============================================================
WB = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <fileVersion appName="xl" lastEdited="7" lowestEdited="7"/>
  <workbookPr defaultThemeVersion="166925"/>
  <bookViews><workbookView xWindow="0" yWindow="0" windowWidth="20140" windowHeight="10960"/></bookViews>
  <sheets>
    <sheet name="01现场信号判断表" sheetId="1" r:id="rId1"/>
    <sheet name="02三类退路清单" sheetId="2" r:id="rId4"/>
    <sheet name="03气口密度自查表" sheetId="3" r:id="rId5"/>
    <sheet name="04单场复盘表" sheetId="4" r:id="rId6"/>
    <sheet name="05课前调研表" sheetId="5" r:id="rId7"/>
    <sheet name="06培训师自检表" sheetId="6" r:id="rId8"/>
    <sheet name="07学员类型应对卡" sheetId="7" r:id="rId9"/>
    <sheet name="08课程落地计划表" sheetId="8" r:id="rId10"/>
  </sheets>
  <calcPr calcId="191029"/>
</workbook>'''
with open(f"{BASE}/xl/workbook.xml", "w", encoding="utf-8") as f:
    f.write(WB)

# ============================================================
# Write workbook.xml.rels
# ============================================================
RELS = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
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
</Relationships>'''
with open(f"{BASE}/xl/_rels/workbook.xml.rels", "w", encoding="utf-8") as f:
    f.write(RELS)

# ============================================================
# Write [Content_Types].xml
# ============================================================
CT = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
  <Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet2.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet3.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet4.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet5.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet6.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet7.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet8.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>
  <Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/>
</Types>'''
with open(f"{BASE}/[Content_Types].xml", "w", encoding="utf-8") as f:
    f.write(CT)

print("workbook.xml, workbook.xml.rels, [Content_Types].xml written")

# ============================================================
# Sheet generators
# ============================================================
def col_widths(sheet_n, widths_by_col):
    """Return <cols> element for given column widths."""
    cols = ["  <cols>"]
    for i, w in enumerate(widths_by_col, start=1):
        cols.append(f'    <col min="{i}" max="{i}" width="{w}" customWidth="1"/>')
    cols.append("  </cols>")
    return "\n".join(cols)

def make_sheet_xml(sheet_n, cols_xml, rows_xml):
    return f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"/></sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
{cols_xml}
  <sheetData>
{rows_xml}
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

# --- Sheet 1: 现场信号判断表 ---
def make_s1():
    c = col_widths(1, [22, 18, 20, 24])
    r = []
    r.append('<row r="1" ht="30" customHeight="1">')
    for col, si in [("A",0),("B",1),("C",2),("D",3),("E",4)]:
        r.append(f'<c r="{col}1" t="s" s="4"><v>{si}</v></c>')
    r.append('</row>')
    r.append('<row r="2"/>')
    # 9 data rows (indices 5-40 in STRINGS)
    signals = [
        (5,6,7,8), (9,10,11,12), (13,14,15,16), (17,18,19,20),
        (21,22,23,24), (25,26,27,28), (29,30,31,32), (33,34,35,36), (37,38,39,40)
    ]
    for row_i, (si1,si2,si3,si4) in enumerate(signals, start=3):
        r.append(f'<row r="{row_i}">')
        for col, si in [("A",si1),("B",si2),("C",si3),("D",si4)]:
            r.append(f'<c r="{col}{row_i}" t="s" s="1"><v>{si}</v></c>')
        r.append(f'<c r="E{row_i}" t="s" s="1"><v>0</v></c>')
        r.append('</row>')
    return c, "\n".join(r)

# --- Sheet 2: 三类退路清单 ---
def make_s2():
    c = col_widths(2, [18, 26, 28, 26])
    r = []
    r.append('<row r="1" ht="30" customHeight="1">')
    for col, si in [("A",41),("B",42),("C",43),("D",44)]:
        r.append(f'<c r="{col}1" t="s" s="4"><v>{si}</v></c>')
    r.append('</row>')
    r.append('<row r="2"/>')
    # 流程退路 x3
    for row_i, (t, s1) in enumerate([(45,46),(45,48),(45,49)], start=3):
        r.append(f'<row r="{row_i}"><c r="A{row_i}" t="s" s="1"><v>{t}</v></c><c r="B{row_i}" t="s" s="1"><v>{s1}</v></c><c r="C{row_i}" t="s" s="1"><v>47</v></c><c r="D{row_i}" t="s" s="1"><v>47</v></c></row>')
    # 情绪退路 x3
    for row_i, (t, s1) in enumerate([(50,51),(50,52),(50,53)], start=6):
        r.append(f'<row r="{row_i}"><c r="A{row_i}" t="s" s="1"><v>{t}</v></c><c r="B{row_i}" t="s" s="1"><v>{s1}</v></c><c r="C{row_i}" t="s" s="1"><v>47</v></c><c r="D{row_i}" t="s" s="1"><v>47</v></c></row>')
    # 权力退路 x3
    for row_i, (t, s1) in enumerate([(54,55),(54,56),(54,57)], start=9):
        r.append(f'<row r="{row_i}"><c r="A{row_i}" t="s" s="1"><v>{t}</v></c><c r="B{row_i}" t="s" s="1"><v>{s1}</v></c><c r="C{row_i}" t="s" s="1"><v>47</v></c><c r="D{row_i}" t="s" s="1"><v>47</v></c></row>')
    return c, "\n".join(r)

# --- Sheet 3: 气口密度自查表 ---
def make_s3():
    c = col_widths(3, [28, 18, 26])
    r = []
    r.append('<row r="1" ht="30" customHeight="1">')
    for col, si in [("A",58),("B",59),("C",60)]:
        r.append(f'<c r="{col}1" t="s" s="4"><v>{si}</v></c>')
    r.append('</row>')
    r.append('<row r="2"/>')
    signals = [(61,62,63),(64,65,66),(67,68,69),(70,71,72),(73,74,75),(76,77,78),(79,80,81)]
    for row_i, (si1,si2,si3) in enumerate(signals, start=3):
        r.append(f'<row r="{row_i}">')
        for col, si in [("A",si1),("B",si2),("C",si3)]:
            r.append(f'<c r="{col}{row_i}" t="s" s="1"><v>{si}</v></c>')
        r.append('</row>')
    return c, "\n".join(r)

# --- Sheet 4: 单场复盘表 ---
def make_s4():
    c = col_widths(4, [20, 32, 30])
    r = []
    r.append('<row r="1" ht="30" customHeight="1">')
    for col, si in [("A",82),("B",83),("C",84)]:
        r.append(f'<c r="{col}1" t="s" s="4"><v>{si}</v></c>')
    r.append('</row>')
    r.append('<row r="2"/>')
    dims = [(85,86,87),(88,89,87),(90,91,87),(92,93,87),(94,95,87),(96,97,87),(98,99,87),(100,101,87),(102,103,87)]
    for row_i, (si1,si2,si3) in enumerate(dims, start=3):
        r.append(f'<row r="{row_i}" ht="40" customHeight="1">')
        for col, si in [("A",si1),("B",si2),("C",si3)]:
            r.append(f'<c r="{col}{row_i}" t="s" s="1"><v>{si}</v></c>')
        r.append('</row>')
    return c, "\n".join(r)

# --- Sheet 5: 课前调研表 ---
def make_s5():
    c = col_widths(5, [20, 36, 28])
    r = []
    r.append('<row r="1" ht="30" customHeight="1">')
    for col, si in [("A",104),("B",105),("C",106)]:
        r.append(f'<c r="{col}1" t="s" s="4"><v>{si}</v></c>')
    r.append('</row>')
    r.append('<row r="2"/>')
    dims = [(107,108,109),(110,111,109),(112,113,109),(114,115,109),(116,117,109)]
    for row_i, (si1,si2,si3) in enumerate(dims, start=3):
        r.append(f'<row r="{row_i}" ht="40" customHeight="1">')
        for col, si in [("A",si1),("B",si2),("C",si3)]:
            r.append(f'<c r="{col}{row_i}" t="s" s="1"><v>{si}</v></c>')
        r.append('</row>')
    return c, "\n".join(r)

# --- Sheet 6: 培训师自检表 ---
def make_s6():
    c = col_widths(6, [18, 30, 20, 18])
    r = []
    r.append('<row r="1" ht="30" customHeight="1">')
    for col, si in [("A",118),("B",119),("C",120),("D",121)]:
        r.append(f'<c r="{col}1" t="s" s="4"><v>{si}</v></c>')
    r.append('</row>')
    r.append('<row r="2"/>')
    dims = [
        (122,123,124,125),(122,126,124,125),(122,127,124,125),
        (128,129,124,125),(128,130,124,125),(128,131,124,125),
        (132,133,124,125),(132,134,124,125),(132,135,124,125)
    ]
    for row_i, (si1,si2,si3,si4) in enumerate(dims, start=3):
        r.append(f'<row r="{row_i}" ht="35" customHeight="1">')
        for col, si in [("A",si1),("B",si2),("C",si3),("D",si4)]:
            r.append(f'<c r="{col}{row_i}" t="s" s="1"><v>{si}</v></c>')
        r.append('</row>')
    return c, "\n".join(r)

# --- Sheet 7: 学员类型应对卡 ---
def make_s7():
    c = col_widths(7, [18, 32, 36])
    r = []
    r.append('<row r="1" ht="30" customHeight="1">')
    for col, si in [("A",136),("B",137),("C",138)]:
        r.append(f'<c r="{col}1" t="s" s="4"><v>{si}</v></c>')
    r.append('</row>')
    r.append('<row r="2"/>')
    types = [(139,140,141),(142,143,144),(145,146,147),(148,149,150),(151,152,153)]
    for row_i, (si1,si2,si3) in enumerate(types, start=3):
        r.append(f'<row r="{row_i}" ht="50" customHeight="1">')
        for col, si in [("A",si1),("B",si2),("C",si3)]:
            r.append(f'<c r="{col}{row_i}" t="s" s="1"><v>{si}</v></c>')
        r.append('</row>')
    return c, "\n".join(r)

# --- Sheet 8: 课程落地计划表 ---
def make_s8():
    c = col_widths(8, [24, 22, 18, 20, 18])
    r = []
    r.append('<row r="1" ht="30" customHeight="1">')
    for col, si in [("A",154),("B",155),("C",156),("D",157),("E",158)]:
        r.append(f'<c r="{col}1" t="s" s="4"><v>{si}</v></c>')
    r.append('</row>')
    r.append('<row r="2"/>')
    for row_i in range(3, 8):
        r.append(f'<row r="{row_i}" ht="40" customHeight="1">')
        for col in "ABCDE":
            r.append(f'<c r="{col}{row_i}" t="s" s="1"><v>159</v></c>')
        r.append('</row>')
    return c, "\n".join(r)

# Write all sheets
for n, maker in [(1,make_s1),(2,make_s2),(3,make_s3),(4,make_s4),
                  (5,make_s5),(6,make_s6),(7,make_s7),(8,make_s8)]:
    cols_xml, rows_xml = maker()
    xml = make_sheet_xml(n, cols_xml, rows_xml)
    with open(f"{BASE}/xl/worksheets/sheet{n}.xml", "w", encoding="utf-8") as f:
        f.write(xml)
    print(f"sheet{n}.xml written")

print("All done!")
