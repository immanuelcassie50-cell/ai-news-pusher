import os

BASE = "D:/tmp/xlsx_trainer_tools"

_all = []

def add(*items):
    for it in items:
        _all.append(it)

# ============================================================
# Sheet 1: 现场信号判断表  (4 columns: A=现场状态, B=信号/噪音, C=判断依据, D=我的应对)
# ============================================================
S1_TITLE = add("现场信号判断表")          # 0
S1_HDR = [add("现场状态"), add("属于噪音还是信号"), add("判断依据"), add("我的应对")]  # 1,2,3,4
S1_ROWS = []
for state, noise_sig, judge in [
    ("小组讨论声音变大","通常是噪音","内容是否围绕主题"),
    ("某个组突然特别安静","需要判断","结合上下文判断"),
    ("小组连续沉默超出预期时长","需要判断","眼神是否在动"),
    ("发言人始终是同一人","信号","是否形成一言堂"),
    ("发言人频繁更换未形成结论","信号","是否无人承担梳理"),
    ("有人频繁看手机","噪音（正常走神）","不影响他人情况下，不做特别处理"),
    ("其他信号1（请填写）","",""),
    ("其他信号2（请填写）",""),(""),
    ("其他信号3（请填写）","",""),
]:
    S1_ROWS.append([add(state), add(noise_sig), add(judge), add("")])

# ============================================================
# Sheet 2: 三类退路清单 (4 columns: A=退路类型, B=最可能场景, C=我的应对, D=还没想清楚)
# ============================================================
S2_TITLE = add("三类退路清单")             # +4 = 41
S2_HDR = [add("退路类型"), add("最可能出现的场景"), add("我目前的应对方式"), add("还没想清楚的地方")]
S2_ROWS = []
for t, s1 in [
    ("流程退路","环节冷场 / 讨论超时"),
    ("流程退路","某个案例引发负面情绪"),
    ("流程退路","时间不够用需要砍环节"),
    ("情绪退路","学员情绪失控 / 崩溃哭泣"),
    ("情绪退路","公开质疑你的方法或资历"),
    ("情绪退路","消极对抗（表面配合内心抵触）"),
    ("权力退路","甲方临场插话打乱节奏"),
    ("权力退路","学员职级远超预期"),
    ("权力退路","甲方突然提出增加内容"),
]:
    S2_ROWS.append([add(t), add(s1), add(""), add("")])

# ============================================================
# Sheet 3: 气口密度自查表 (3 columns)
# ============================================================
S3_TITLE = add("气口密度自查表")            # +9 = 59
S3_HDR = [add("现场观察到的信号"), add("说明密度状态"), add("该做的调整")]
S3_ROWS = []
for sig, state, adj in [
    ("学员表情发直、身体后靠","密度过高","插入一次停顿或轻松话题"),
    ("学员开始交头接耳、注意力涣散","密度过低","收紧节奏，提高信息密度"),
    ("关键判断说完后现场安静","气口正常","保持停顿，不急于填补"),
    ("连续超过十分钟无起伏","需要立即调整","插入互动或改变语速"),
    ("有人频繁看手机","注意力下降","改变节奏，插入互动"),
    ("其他观察信号1（请填写）",""),(""),
    ("其他观察信号2（请填写）",""),(""),
]:
    S3_ROWS.append([add(sig), add(state), add(adj)])

# ============================================================
# Sheet 4: 单场复盘表 (3 columns)
# ============================================================
S4_TITLE = add("单场复盘表")               # +9 = 77
S4_HDR = [add("复盘维度"), add("这场活动的具体情况"), add("下次要调整的地方")]
S4_ROWS = []
for dim, detail in [
    ("全局判断","这场哪里是噪音、哪里是真信号，判断对了吗？"),
    ("退路准备","有没有意外是完全没想到的？"),
    ("气口节奏","哪个环节明显闷了，或者哪个环节太赶？"),
    ("沉默应对","那几个停顿用对了吗？有没有该停没停的？"),
    ("接话流畅度","接话时是在递口子还是在完成自己的问题清单？"),
    ("甲方与学员","这两条线各自的反馈是什么，有没有冲突？"),
    ("台下的紧绷","这次真正让自己焦虑的点是什么，说清楚它？"),
    ("有没有证明欲","有没有多说了证明自己的话？哪一句？"),
    ("流程调整","这次有没有临场调整？为什么调？怎么调的？"),
]:
    S4_ROWS.append([add(dim), add(detail), add("")])

# ============================================================
# Sheet 5: 课前调研表 (3 columns)
# ============================================================
S5_TITLE = add("课前调研表")               # +9 = 95
S5_HDR = [add("调研维度"), add("具体内容"), add("备注")]
S5_ROWS = []
for dim, detail in [
    ("学员背景","职级分布 / 工作经验 / 培训经历"),
    ("培训需求","最想解决的问题 / 期望的收获"),
    ("担心问题","最担心出现的场面 / 担心被问到的问题"),
    ("特殊学员","沉默型 / 好斗型 / 消极型 / 话痨型 / 表演型"),
    ("甲方关注点","关键决策人 / 评估标准 / 特别注意事项"),
]:
    S5_ROWS.append([add(dim), add(detail), add("")])

# ============================================================
# Sheet 6: 培训师自检表 (4 columns)
# ============================================================
S6_TITLE = add("培训师自检表")             # +5 = 109
S6_HDR = [add("检查维度"), add("检查要点"), add("准备状态"), add("备注")]
S6_ROWS = []
for cat, item in [
    ("基本功","教学流程是否清晰"),
    ("基本功","案例和素材是否准备就绪"),
    ("基本功","时间分配是否合理"),
    ("状态准备","身体状态（睡眠/饮食）"),
    ("状态准备","心理状态（紧张点/担心的事）"),
    ("状态准备","上台感觉（松弛/紧绷）"),
    ("物料检查","PPT/投影/音响"),
    ("物料检查","教材/道具/白板笔"),
    ("物料检查","应急预案（备用方案等）"),
]:
    S6_ROWS.append([add(cat), add(item), add(""), add("")])

# ============================================================
# Sheet 7: 学员类型应对卡 (3 columns)
# ============================================================
S7_TITLE = add("学员类型应对卡")           # +9 = 127
S7_HDR = [add("学员类型"), add("典型表现"), add("应对策略")]
S7_ROWS = []
for t, behavior, strategy in [
    ("沉默型","全程不发言，或只在被点名时说话","降低难度；开放式问题引导；请人复述给台阶"),
    ("好斗型","喜欢质疑、挑战培训师权威","不当场对抗；承认其问题有价值；私下处理情绪"),
    ("消极型","表面配合但内心抵触","找到利益关联点；用选择题而非判断题"),
    ("话痨型","一个人说太多，占用其他人时间","翻译复述法收住话头；时间提醒温和打断"),
    ("表演型","把场合当个人秀场","给表演欲合法出口；用记录工具收住"),
]:
    S7_ROWS.append([add(t), add(behavior), add(strategy)])

# ============================================================
# Sheet 8: 课程落地计划表 (5 columns)
# ============================================================
S8_TITLE = add("课程落地计划表")           # +5 = 141
S8_HDR = [add("行动计划"), add("时间节点"), add("资源需求"), add("效果检验"), add("备注")]
blank_si = add("")
S8_ROWS = [[blank_si]*5 for _ in range(5)]

STRINGS = _all
print(f"Total strings: {len(STRINGS)}")
idx = {s: i for i, s in enumerate(STRINGS)}
print(f"Titles: {idx['现场信号判断表']}, {idx['三类退路清单']}, {idx['气口密度自查表']}, {idx['单场复盘表']}, {idx['课前调研表']}, {idx['培训师自检表']}, {idx['学员类型应对卡']}, {idx['课程落地计划表']}")

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
with open(f"{BASE}/xl/workbook.xml", "w", encoding="utf-8") as f:
    f.write('''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
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
</workbook>''')

with open(f"{BASE}/xl/_rels/workbook.xml.rels", "w", encoding="utf-8") as f:
    f.write('''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
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
</Relationships>''')

with open(f"{BASE}/[Content_Types].xml", "w", encoding="utf-8") as f:
    f.write('''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
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
</Types>''')
print("Config files written")

# ============================================================
# Build sheets
# ============================================================
def build_sheet(num, title_si, hdr_sis, widths, row_data_list, ht=40):
    cols_letters = [chr(65+i) for i in range(num)]
    rows_xml = []
    # Title row (A=title, B-E=column headers)
    rows_xml.append(f'<row r="1" ht="30" customHeight="1">')
    rows_xml.append(f'<c r="A1" t="s" s="4"><v>{title_si}</v></c>')
    for col, si in zip(cols_letters[1:], hdr_sis):
        rows_xml.append(f'<c r="{col}1" t="s" s="4"><v>{si}</v></c>')
    rows_xml.append('</row>')
    # Blank row
    rows_xml.append('<row r="2"/>')
    # Data rows
    for ri, rd in enumerate(row_data_list, 3):
        rows_xml.append(f'<row r="{ri}" ht="{ht}" customHeight="1">')
        for col, si in zip(cols_letters, rd):
            rows_xml.append(f'<c r="{col}{ri}" t="s" s="1"><v>{si}</v></c>')
        rows_xml.append('</row>')

    cols_xml = "  <cols>\n"
    for i, w in enumerate(widths, 1):
        cols_xml += f'    <col min="{i}" max="{i}" width="{w}" customWidth="1"/>\n'
    cols_xml += "  </cols>"

    return f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"/></sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  {cols_xml}
  <sheetData>
{chr(10).join(rows_xml)}
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

# Sheet 1: 4 cols
xml = build_sheet(4, S1_TITLE, S1_HDR, [22, 18, 20, 24], S1_ROWS, 35)
with open(f"{BASE}/xl/worksheets/sheet1.xml", "w", encoding="utf-8") as f:
    f.write(xml)
print(f"sheet1.xml: {len(S1_ROWS)} rows")

# Sheet 2: 4 cols
xml = build_sheet(4, S2_TITLE, S2_HDR, [18, 26, 28, 26], S2_ROWS, 35)
with open(f"{BASE}/xl/worksheets/sheet2.xml", "w", encoding="utf-8") as f:
    f.write(xml)
print(f"sheet2.xml: {len(S2_ROWS)} rows")

# Sheet 3: 3 cols
xml = build_sheet(3, S3_TITLE, S3_HDR, [28, 18, 26], S3_ROWS, 35)
with open(f"{BASE}/xl/worksheets/sheet3.xml", "w", encoding="utf-8") as f:
    f.write(xml)
print(f"sheet3.xml: {len(S3_ROWS)} rows")

# Sheet 4: 3 cols
xml = build_sheet(3, S4_TITLE, S4_HDR, [20, 32, 30], S4_ROWS, 40)
with open(f"{BASE}/xl/worksheets/sheet4.xml", "w", encoding="utf-8") as f:
    f.write(xml)
print(f"sheet4.xml: {len(S4_ROWS)} rows")

# Sheet 5: 3 cols
xml = build_sheet(3, S5_TITLE, S5_HDR, [20, 36, 28], S5_ROWS, 40)
with open(f"{BASE}/xl/worksheets/sheet5.xml", "w", encoding="utf-8") as f:
    f.write(xml)
print(f"sheet5.xml: {len(S5_ROWS)} rows")

# Sheet 6: 4 cols
xml = build_sheet(4, S6_TITLE, S6_HDR, [18, 30, 20, 18], S6_ROWS, 35)
with open(f"{BASE}/xl/worksheets/sheet6.xml", "w", encoding="utf-8") as f:
    f.write(xml)
print(f"sheet6.xml: {len(S6_ROWS)} rows")

# Sheet 7: 3 cols
xml = build_sheet(3, S7_TITLE, S7_HDR, [18, 32, 36], S7_ROWS, 50)
with open(f"{BASE}/xl/worksheets/sheet7.xml", "w", encoding="utf-8") as f:
    f.write(xml)
print(f"sheet7.xml: {len(S7_ROWS)} rows")

# Sheet 8: 5 cols
xml = build_sheet(5, S8_TITLE, S8_HDR, [24, 22, 18, 20, 18], S8_ROWS, 40)
with open(f"{BASE}/xl/worksheets/sheet8.xml", "w", encoding="utf-8") as f:
    f.write(xml)
print(f"sheet8.xml: {len(S8_ROWS)} rows")

print("All sheets written!")
