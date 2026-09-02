import zipfile, os, re, subprocess

WORKDIR = "D:/CC/temp/xlsx_form_guide"
OUT = "D:/新课开发/金融学/11-股票投资入门-从开户到读懂财报/配套表单和指引-Excel版/表单使用指引.xlsx"
SKILL = "C:/Users/Administrator/.claude/skills/Excel表格处理"

os.makedirs(os.path.dirname(OUT), exist_ok=True)

RED   = "00C41E3A"
GRAY  = "006B7280"

def esc(s):
    return s.replace("&","&amp;").replace("<","&lt;").replace(">","&gt;").replace('"',"&quot;")

# ── Shared strings ────────────────────────────────────────────────────────────
raw_strings = [
    # 0-4  Sheet 1 header
    "表单名称", "所属章节", "使用时机", "目的", "填写时长",
    # 5-9  row 1
    "出发点自评表",     "引言部分",   "课前",      "认知基线评估",   "5分钟",
    # 10-14 row 2
    "我的场景卡",       "引言部分",   "课前",      "选择实战标的",   "10分钟",
    # 15-19 row 3
    "术语自测表",       "第一章",     "课中",      "概念掌握自测",   "10分钟",
    # 20-24 row 4
    "场景股分析表",     "第一章",     "课后",      "知识应用练习",   "15分钟",
    # 25-29 row 5
    "券商对比表",       "第二章",     "课前/课后", "券商选择决策",   "10分钟",
    # 30-34 row 6
    "开户检查清单",     "第二章",     "开户时",    "流程完整性确认", "5分钟",
    # 35-39 row 7
    "技术分析工作表",   "第三章",     "课中",      "K线形态练习",    "20分钟",
    # 40-44 row 8
    "财报阅读框架",     "第四章",     "课中",      "财报结构速查",   "15分钟",
    # 45-49 row 9
    "关键财务指标计算表","第四章",    "课中",      "指标计算练习",   "15分钟",
    # 50-54 row 10
    "场景股深度分析表", "第五章",     "课后",      "深度财报分析",   "30分钟",
    # 55-59 row 11
    "我的场景股估值分析","第六章",    "课后",      "估值方法应用",   "15分钟",
    # 60-64 row 12
    "仓位管理计划表",   "第七章",     "课后",      "仓位规划制定",   "15分钟",
    # 65-69 row 13
    "综合分析报告模板", "第八章",     "课程结束",  "完整投资分析",   "30分钟",
    # ── Sheet 2 ──
    "表单类型", "填写示例",
    "出发点自评表填写示例", "贵州茅台 600519",
    "【出发点自评表】",
    "在投资经验项填写：3年A股投资经历，主要持有蓝筹股",
    "在风险承受能力项填写：可接受20%以内本金亏损，追求稳健收益",
    "常见填写错误提醒",
    "1. 风险承受能力填写过于乐观（如完全不能接受亏损），导致后续策略不匹配",
    "2. 投资目标模糊（如赚钱），建议写具体数值如年化收益10%",
    "填写小技巧",
    "课前完成即可，不需要完美。目的是建立认知基线，课后对比成长。",
    "【我的场景卡填写示例】",
    "选择行业：白酒行业  选择理由：熟悉消费品赛道，身边朋友都在喝茅台  股票代码：600519  股票名称：贵州茅台",
    "常见填写错误提醒",
    "1. 行业选择过于宽泛（如银行而非具体个股方向）  2. 选择过多只股票，初学者建议聚焦1-2只",
    "填写小技巧",
    "选自己熟悉的行业，学习效率更高。不确定时就选日常生活中能接触到的品牌。",
    "【术语自测表填写说明】",
    "每章课后独立完成，对照答案自查：完全正确说明概念已掌握，部分错误回看对应章节，完全不会重新学习相关内容",
    "常见填写错误提醒",
    "1. 不自测直接看答案，失去学习意义  2. 填不会就放弃，没有回看课程",
    "填写小技巧",
    "建议用手机拍下表格，碎片时间自测。",
    "【券商对比表填写说明】",
    "对比维度：手续费、APP体验、服务质量、线下网点",
    "常见填写错误提醒",
    "1. 只看手续费，忽略服务质量  2. 被高收益理财诱惑开户，忽视本质需求",
    "填写小技巧",
    "先明确自己的核心需求（炒股/理财/打新），再针对性对比。",
    # ── Sheet 3 ──
    "使用场景", "推荐表单", "使用目的", "预期产出",
    "课程前准备",    "出发点自评表、我的场景卡",             "建立学习基线，明确实战方向",   "带着问题进课堂",
    "知识学习阶段",  "术语自测表、财报阅读框架、技术分析工作表","边学边练，及时检验理解",       "知识留存率提升",
    "实战练习阶段",  "场景股分析表、关键财务指标计算表",       "将知识转化为分析能力",         "完成初步个股分析",
    "课程总结阶段",  "综合分析报告模板",                      "全流程复盘，形成完整体系",     "可展示的投资分析报告",
    # ── Sheet 4 ──
    "表单编号", "表单名称", "核心用途", "所在章节",
    "表单总览",
    "表单填写范例",
    "使用场景说明",
    "快速索引",
    "F-01","出发点自评表",      "认知基线评估",         "引言部分",
    "F-02","我的场景卡",        "选择实战标的",           "引言部分",
    "F-03","术语自测表",        "概念掌握自测",           "第一章",
    "F-04","场景股分析表",      "知识应用练习",           "第一章",
    "F-05","券商对比表",        "券商选择决策",           "第二章",
    "F-06","开户检查清单",      "流程完整性确认",         "第二章",
    "F-07","技术分析工作表",    "K线形态练习",            "第三章",
    "F-08","财报阅读框架",      "财报结构速查",           "第四章",
    "F-09","关键财务指标计算表","指标计算练习",           "第四章",
    "F-10","场景股深度分析表",  "深度财报分析",           "第五章",
    "F-11","我的场景股估值分析","估值方法应用",           "第六章",
    "F-12","仓位管理计划表",    "仓位规划制定",           "第七章",
    "F-13","综合分析报告模板",  "完整投资分析",           "第八章",
]

si_items = "".join("<si><t>" + esc(s) + "</t></si>" for s in raw_strings)
ss_count = len(raw_strings)
shared = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="{}" uniqueCount="{}">\n{}\n</sst>'.format(ss_count, ss_count, si_items)
with open(WORKDIR + "/xl/sharedStrings.xml","w",encoding="utf-8") as f:
    f.write(shared)

# ── Styles ─────────────────────────────────────────────────────────────────────
with open(WORKDIR + "/xl/styles.xml","r",encoding="utf-8") as f:
    sty = f.read()

# Add red and gray fonts (ids 5 and 6)
sty = sty.replace('<fonts count="5">', '<fonts count="7">', 1)
red_font = '  <font><sz val="11"/><name val="Calibri"/><color rgb="' + RED + '"/></font>\n'
gray_font = '  <font><sz val="11"/><name val="Calibri"/><color rgb="' + GRAY + '"/></font>\n'
sty = sty.replace("</fonts>", red_font + gray_font + "</fonts>", 1)

# Add two new xf: red-header (s=13), gray-header (s=14)
sty = sty.replace('<cellXfs count="13">', '<cellXfs count="15">', 1)
new_xfs = '  <xf numFmtId="0" fontId="5" fillId="0" borderId="0" xfId="0" applyFont="1"/>\n  <xf numFmtId="0" fontId="6" fillId="0" borderId="0" xfId="0" applyFont="1"/>\n'
sty = sty.replace("</cellXfs>", new_xfs + "</cellXfs>", 1)

with open(WORKDIR + "/xl/styles.xml","w",encoding="utf-8") as f:
    f.write(sty)

# ── Helpers ───────────────────────────────────────────────────────────────────
def row(rn, cells):
    return '<row r="{}">{}</row>\n'.format(rn, cells)

def sc(addr, si_idx, style="0"):
    return '<c r="{}" t="s" s="{}"><v>{}</v></c>'.format(addr, style, si_idx)

# ── SHEET 1 – 表单总览 ─────────────────────────────────────────────────────────
s1 = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0">
    <pane ySplit="2" topLeftCell="A3" activePane="bottomLeft" state="frozen"/>
  </sheetView></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols>
    <col min="1" max="1" width="26" customWidth="1"/>
    <col min="2" max="2" width="14" customWidth="1"/>
    <col min="3" max="3" width="12" customWidth="1"/>
    <col min="4" max="4" width="20" customWidth="1"/>
    <col min="5" max="5" width="10" customWidth="1"/>
  </cols>
  <sheetData>
'''
s1 += row("1", sc("A1","81","4") + sc("B1","0","4") + sc("C1","1","4") + sc("D1","2","4") + sc("E1","3","4"))
s1 += row("2", sc("A2","4","4"))

data_rows = [
    ("出发点自评表","引言部分","课前","认知基线评估","5分钟"),
    ("我的场景卡","引言部分","课前","选择实战标的","10分钟"),
    ("术语自测表","第一章","课中","概念掌握自测","10分钟"),
    ("场景股分析表","第一章","课后","知识应用练习","15分钟"),
    ("券商对比表","第二章","课前/课后","券商选择决策","10分钟"),
    ("开户检查清单","第二章","开户时","流程完整性确认","5分钟"),
    ("技术分析工作表","第三章","课中","K线形态练习","20分钟"),
    ("财报阅读框架","第四章","课中","财报结构速查","15分钟"),
    ("关键财务指标计算表","第四章","课中","指标计算练习","15分钟"),
    ("场景股深度分析表","第五章","课后","深度财报分析","30分钟"),
    ("我的场景股估值分析","第六章","课后","估值方法应用","15分钟"),
    ("仓位管理计划表","第七章","课后","仓位规划制定","15分钟"),
    ("综合分析报告模板","第八章","课程结束","完整投资分析","30分钟"),
]
for i, (a,b,c,d,e) in enumerate(data_rows):
    rn = i + 3
    base = 5 + i*5
    s1 += row(str(rn),
        sc("A"+str(rn), str(base), "0") +
        sc("B"+str(rn), str(base+1), "0") +
        sc("C"+str(rn), str(base+2), "0") +
        sc("D"+str(rn), str(base+3), "0") +
        sc("E"+str(rn), str(base+4), "0"))

s1 += "  </sheetData>\n</worksheet>"
with open(WORKDIR + "/xl/worksheets/sheet1.xml","w",encoding="utf-8") as f:
    f.write(s1)

# ── SHEET 2 – 表单填写范例 ────────────────────────────────────────────────────
s2 = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0">
    <pane xSplit="1" topLeftCell="B1" activePane="topRight" state="frozen"/>
  </sheetView></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols>
    <col min="1" max="1" width="24" customWidth="1"/>
    <col min="2" max="2" width="65" customWidth="1"/>
  </cols>
  <sheetData>
'''
s2 += row("1", sc("A1","82","4") + sc("B1","83","4"))

sections = [
    (24, 25), (26, 27), (28, 29), (31, 32),
    (33, 34), (36, 37), (39, 40),
    (41, 42), (44, 45), (47, 48),
    (49, 50), (52, 53), (55, 56),
]
rn = 2
for (a_si, b_si) in sections:
    s2 += row(str(rn), sc("A"+str(rn), str(a_si), "0") + sc("B"+str(rn), str(b_si), "0"))
    rn += 1

s2 += "  </sheetData>\n</worksheet>"
with open(WORKDIR + "/xl/worksheets/sheet2.xml","w",encoding="utf-8") as f:
    f.write(s2)

# ── SHEET 3 – 使用场景说明 ────────────────────────────────────────────────────
s3 = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0">
    <pane ySplit="2" topLeftCell="A3" activePane="bottomLeft" state="frozen"/>
  </sheetView></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols>
    <col min="1" max="1" width="18" customWidth="1"/>
    <col min="2" max="2" width="42" customWidth="1"/>
    <col min="3" max="3" width="24" customWidth="1"/>
    <col min="4" max="4" width="22" customWidth="1"/>
  </cols>
  <sheetData>
'''
s3 += row("1", sc("A1","84","4") + sc("B1","86","4") + sc("C1","87","4") + sc("D1","88","4"))
s3 += row("2", sc("A2","89","4"))
scene_data = [
    ("课程前准备",    "出发点自评表、我的场景卡",             "建立学习基线，明确实战方向",   "带着问题进课堂"),
    ("知识学习阶段",  "术语自测表、财报阅读框架、技术分析工作表","边学边练，及时检验理解",       "知识留存率提升"),
    ("实战练习阶段",  "场景股分析表、关键财务指标计算表",       "将知识转化为分析能力",         "完成初步个股分析"),
    ("课程总结阶段",  "综合分析报告模板",                      "全流程复盘，形成完整体系",     "可展示的投资分析报告"),
]
for i, (a,b,c,d) in enumerate(scene_data):
    rn = i + 3
    base = 90 + i*4
    s3 += row(str(rn),
        sc("A"+str(rn), str(base), "0") +
        sc("B"+str(rn), str(base+1), "0") +
        sc("C"+str(rn), str(base+2), "0") +
        sc("D"+str(rn), str(base+3), "0"))

s3 += "  </sheetData>\n</worksheet>"
with open(WORKDIR + "/xl/worksheets/sheet3.xml","w",encoding="utf-8") as f:
    f.write(s3)

# ── SHEET 4 – 快速索引 (red header, gray col A codes) ─────────────────────────
s4 = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0">
    <pane ySplit="2" topLeftCell="A3" activePane="bottomLeft" state="frozen"/>
  </sheetView></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols>
    <col min="1" max="1" width="10" customWidth="1"/>
    <col min="2" max="2" width="22" customWidth="1"/>
    <col min="3" max="3" width="32" customWidth="1"/>
    <col min="4" max="4" width="14" customWidth="1"/>
  </cols>
  <sheetData>
'''
s4 += row("1", sc("A1","85","13") + sc("B1","94","13") + sc("C1","95","13") + sc("D1","96","13"))
s4 += row("2", sc("A2","97","4"))
qi_data = [
    ("F-01","出发点自评表",      "认知基线评估",         "引言部分"),
    ("F-02","我的场景卡",        "选择实战标的",           "引言部分"),
    ("F-03","术语自测表",        "概念掌握自测",           "第一章"),
    ("F-04","场景股分析表",      "知识应用练习",           "第一章"),
    ("F-05","券商对比表",        "券商选择决策",           "第二章"),
    ("F-06","开户检查清单",      "流程完整性确认",         "第二章"),
    ("F-07","技术分析工作表",    "K线形态练习",            "第三章"),
    ("F-08","财报阅读框架",      "财报结构速查",           "第四章"),
    ("F-09","关键财务指标计算表","指标计算练习",           "第四章"),
    ("F-10","场景股深度分析表",  "深度财报分析",           "第五章"),
    ("F-11","我的场景股估值分析","估值方法应用",           "第六章"),
    ("F-12","仓位管理计划表",    "仓位规划制定",           "第七章"),
    ("F-13","综合分析报告模板",  "完整投资分析",           "第八章"),
]
for i, (a,b,c,d) in enumerate(qi_data):
    rn = i + 3
    base = 98 + i*4
    s4 += row(str(rn),
        sc("A"+str(rn), str(base), "14") +
        sc("B"+str(rn), str(base+1), "0") +
        sc("C"+str(rn), str(base+2), "0") +
        sc("D"+str(rn), str(base+3), "0"))

s4 += "  </sheetData>\n</worksheet>"
with open(WORKDIR + "/xl/worksheets/sheet4.xml","w",encoding="utf-8") as f:
    f.write(s4)

# ── workbook.xml ──────────────────────────────────────────────────────────────
wb = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <fileVersion appName="xl" lastEdited="7" lowestEdited="7"/>
  <workbookPr defaultThemeVersion="166925"/>
  <bookViews><workbookView xWindow="0" yWindow="0" windowWidth="20140" windowHeight="10960"/></bookViews>
  <sheets>
    <sheet name="表单总览"   sheetId="1" r:id="rId1"/>
    <sheet name="表单填写范例" sheetId="2" r:id="rId4"/>
    <sheet name="使用场景说明" sheetId="3" r:id="rId5"/>
    <sheet name="快速索引"   sheetId="4" r:id="rId6"/>
  </sheets>
  <calcPr calcId="191029"/>
</workbook>'''
with open(WORKDIR + "/xl/workbook.xml","w",encoding="utf-8") as f:
    f.write(wb)

# ── workbook.xml.rels ──────────────────────────────────────────────────────────
wb_rels = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
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
</Relationships>'''
with open(WORKDIR + "/xl/_rels/workbook.xml.rels","w",encoding="utf-8") as f:
    f.write(wb_rels)

# ── [Content_Types].xml ───────────────────────────────────────────────────────
ct = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml"  ContentType="application/xml"/>
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
</Types>'''
with open(WORKDIR + "/[Content_Types].xml","w",encoding="utf-8") as f:
    f.write(ct)

# ── Pack ───────────────────────────────────────────────────────────────────────
result = subprocess.run(
    ["python3", SKILL + "/scripts/xlsx_pack.py", WORKDIR, OUT],
    capture_output=True, text=True
)
print("STDOUT:", result.stdout)
print("STDERR:", result.stderr)
print("RC:", result.returncode)
