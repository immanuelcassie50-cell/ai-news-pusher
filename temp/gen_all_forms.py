#!/usr/bin/env python3
"""Generate all 7 Excel forms for 组织行为学基础 course."""

import os, shutil, subprocess

SKILL_DIR = "C:/Users/Administrator/.claude/skills/Excel表格处理"
TEMPLATE_DIR = f"{SKILL_DIR}/templates/minimal_xlsx"
SCRIPTS_DIR = f"{SKILL_DIR}/scripts"
OUT_DIR = "D:/新课开发/管理学/26-组织行为学基础/配套表单和指引-Excel版"
os.makedirs(OUT_DIR, exist_ok=True)

NS   = "http://schemas.openxmlformats.org/spreadsheetml/2006/main"
RNS  = "http://schemas.openxmlformats.org/officeDocument/2006/relationships"
PNS  = "http://schemas.openxmlformats.org/package/2006/content-types"

def xml_esc(s):
    if s is None: return ""
    return str(s).replace("&","&amp;").replace("<","&lt;").replace(">", "&gt;").replace('"',"&quot;")

# ── Build sharedStrings ─────────────────────────────────────────────────────
def build_ss(strings):
    unique, seen = [], set()
    for s in strings:
        if s not in seen:
            unique.append(s)
            seen.add(s)
    items = "".join(f"<si><t>{xml_esc(s)}</t></si>" for s in unique)
    total = sum(1 for s in strings for _ in [None])
    return (f'<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n'
            f'<sst xmlns="{NS}" count="{total}" uniqueCount="{len(unique)}">\n'
            f'{items}\n</sst>')

# ── Build workbook ───────────────────────────────────────────────────────────
def build_wb(names):
    sh = ""
    for i, n in enumerate(names, 1):
        sh += f'\n  <sheet name="{xml_esc(n)}" sheetId="{i}" r:id="rId{i}"/>'
    return (f'<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n'
            f'<workbook xmlns="{NS}" xmlns:r="{RNS}">\n'
            f'  <fileVersion appName="xl" lastEdited="7" lowestEdited="7"/>\n'
            f'  <workbookPr defaultThemeVersion="166925"/>\n'
            f'  <bookViews><workbookView xWindow="0" yWindow="0" windowWidth="20140" windowHeight="10960"/></bookViews>\n'
            f'  <sheets>{sh}\n  </sheets>\n'
            f'  <calcPr calcId="191029"/>\n</workbook>')

def build_wb_rels(n):
    r = ('<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>\n'
         '<Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>\n'
         '<Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml"/>')
    for i in range(2, n+1):
        r += f'\n<Relationship Id="rId{i+3}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet{i}.xml"/>'
    return (f'<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n'
            f'<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">\n'
            f'  {r}\n</Relationships>')

def build_ct(n):
    p = ('<Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>\n'
         '<Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>\n'
         '<Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>\n'
         '<Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/>')
    for i in range(2, n+1):
        p += f'\n<Override PartName="/xl/worksheets/sheet{i}.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>'
    return (f'<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n'
            f'<Types xmlns="{PNS}">\n'
            f'  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>\n'
            f'  <Default Extension="xml" ContentType="application/xml"/>\n'
            f'  {p}\n</Types>')

def build_styles():
    with open(f"{TEMPLATE_DIR}/xl/styles.xml", "r", encoding="utf-8") as f:
        return f.read()

def build_ws(cols_xml, rows_xml, freeze=""):
    return (f'<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n'
            f'<worksheet xmlns="{NS}" xmlns:r="{RNS}">\n'
            f'  <sheetViews>\n'
            f'    <sheetView tabSelected="1" workbookViewId="0"{freeze}/>\n'
            f'  </sheetViews>\n'
            f'  <sheetFormatPr defaultRowHeight="15" x14ac:dyDesent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>\n'
            f'  {cols_xml}\n'
            f'  <sheetData>\n'
            f'  {rows_xml}\n'
            f'  </sheetData>\n'
            f'  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>\n'
            f'</worksheet>')

def build_cols(lst):
    c = ""
    for min_c, max_c, w in lst:
        c += f'<col min="{min_c}" max="{max_c}" width="{w}" customWidth="1"/>\n  '
    return c

def cell_s(addr, si_i, style="s='4'"):
    return f'<c r="{addr}" t="s" {style}><v>{si_i}</v></c>'
def cell_n(addr, val, style="s='6'"):
    return f'<c r="{addr}" {style}><v>{val}</v></c>'
def cell_f(addr, formula, style="s='6'"):
    return f'<c r="{addr}" {style}><f>{formula}</f><v></v></c>'
def cell_i(addr, text, style="s='0'"):
    return f'<c r="{addr}" {style} t="inlineStr"><is><t>{xml_esc(text)}</t></is></c>'

def row_el(r_num, cells, ht=None):
    h = f' ht="{ht}" customHeight="1"' if ht else ""
    c = "\n    ".join(cells)
    return f'  <row r="{r_num}"{h}>\n    {c}\n  </row>'

# ── Pack helper ──────────────────────────────────────────────────────────────
def pack(work_dir, out_file):
    subprocess.run(["python3", f"{SCRIPTS_DIR}/xlsx_pack.py", work_dir, out_file], check=True)
    print(f"  -> {out_file}")

# ══════════════════════════════════════════════════════════════════════════════
# FILE 1: 00_表单使用指引.xlsx
# ══════════════════════════════════════════════════════════════════════════════
def create_00():
    print("Creating 00_表单使用指引.xlsx...")
    work = "/tmp/w00"
    if os.path.exists(work):
        shutil.rmtree(work)
    shutil.copytree(TEMPLATE_DIR, work)

    # Strings for sheet 1
    s1 = [
        # 0
        "组织行为学基础 - 表单使用指引", "一、课程简介", "二、表单清单与使用顺序", "三、常见问题解答",
        "《组织行为学基础》培训课程配套表单包", "课程简介", "本表单包为《组织行为学基础》培训课程设计，贯穿培训前、培训中、培训后全流程",
        "包含学员信息管理、成绩测试、行为观察、效果分析和行动跟踪五大模块，共7个表单", "", "表单清单", "序号", "表单名称", "用途", "使用时机", "完成时间", "备注",
        "1", "00_表单使用指引", "本表 - 表单使用说明和指南", "随时", "阅读", "",
        "2", "01_学员信息表", "收集学员基本信息，了解学员背景", "培训前", "课程开始前", "了解学员背景",
        "3", "02_前测成绩记录表", "测量培训前知识水平，建立基准", "培训前", "培训开始前", "建立评估基准",
        "4", "03_后测成绩记录表", "测量培训后知识水平，评估效果", "培训后", "培训结束后", "评估培训效果",
        "5", "04_课堂行为观察记录表", "记录学员课堂行为表现", "培训中", "培训过程中", "实时观察记录",
        "6", "05_培训效果综合分析表", "综合分析培训效果，生成报告", "培训后", "培训结束后", "生成分析报告",
        "7", "06_30天行动计划跟踪表", "跟踪培训后行为改变", "培训后", "培训后30天", "习惯养成跟踪",
        "常见问题", "问", "答",
        "Q1", "如何选择表单？", "按培训阶段选择：培训前用01-02，培训中用04，培训后用03+05+06",
        "Q2", "数据会自动汇总吗？", "是的，带有汇总表的表单会自动计算平均分、标准差等统计指标",
        "Q3", "表单可以修改吗？", "可以修改，但建议先复制备份，保留原始版本",
        "Q4", "忘记填表怎么办？", "可以补填，但在备注栏说明补填原因和实际填表日期",
        "Q5", "如何保护隐私？", "建议对包含个人信息的表单进行加密或保密处理后再存档",
        "Q6", "表单填写格式？", "日期请使用YYYY-MM-DD格式，评分请使用1-5分制",
    ]
    ss = build_ss(s1)
    with open(f"{work}/xl/sharedStrings.xml", "w", encoding="utf-8") as f:
        f.write(ss)

    wb = build_wb(["使用说明", "表单清单"])
    with open(f"{work}/xl/workbook.xml", "w", encoding="utf-8") as f:
        f.write(wb)
    with open(f"{work}/xl/_rels/workbook.xml.rels", "w", encoding="utf-8") as f:
        f.write(build_wb_rels(2))
    with open(f"{work}/[Content_Types].xml", "w", encoding="utf-8") as f:
        f.write(build_ct(2))
    with open(f"{work}/xl/styles.xml", "w", encoding="utf-8") as f:
        f.write(build_styles())

    cols1 = build_cols([(1,1,30),(2,2,20),(3,3,42),(4,4,16),(5,5,14),(6,6,14),(7,7,20)])
    rows1 = (
        row_el(1,[cell_s("A1","0","s='4'")],32)
        +row_el(2,[cell_s("A2","1","s='4'")],20)
        +row_el(3,[cell_s("A3","5","s='1'")])
        +row_el(4,[cell_s("A4","6","s='0'")])
        +row_el(5,[cell_s("A5","7","s='0'")])
        +row_el(6,[cell_s("A6","2","s='4'")],20)
        +row_el(7,[cell_s("A7","9","s='4'"),cell_s("B7","10","s='4'"),cell_s("C7","11","s='4'"),cell_s("D7","12","s='4'"),cell_s("E7","13","s='4'"),cell_s("F7","14","s='4'")],20)
        +row_el(8,[cell_s("A8","15","s='9'"),cell_s("B8","16","s='0'"),cell_s("C8","17","s='0'"),cell_s("D8","18","s='0'"),cell_s("E8","19","s='0'"),cell_s("F8","20","s='0'")])
        +row_el(9,[cell_s("A9","21","s='9'"),cell_s("B9","22","s='0'"),cell_s("C9","23","s='0'"),cell_s("D9","24","s='0'"),cell_s("E9","25","s='0'"),cell_s("F9","26","s='0'")])
        +row_el(10,[cell_s("A10","27","s='9'"),cell_s("B10","28","s='0'"),cell_s("C10","29","s='0'"),cell_s("D10","30","s='0'"),cell_s("E10","31","s='0'"),cell_s("F10","32","s='0'")])
        +row_el(11,[cell_s("A11","33","s='9'"),cell_s("B11","34","s='0'"),cell_s("C11","35","s='0'"),cell_s("D11","36","s='0'"),cell_s("E11","37","s='0'"),cell_s("F11","38","s='0'")])
        +row_el(12,[cell_s("A12","39","s='9'"),cell_s("B12","40","s='0'"),cell_s("C12","41","s='0'"),cell_s("D12","42","s='0'"),cell_s("E12","43","s='0'"),cell_s("F12","44","s='0'")])
        +row_el(13,[cell_s("A13","45","s='9'"),cell_s("B13","46","s='0'"),cell_s("C13","47","s='0'"),cell_s("D13","48","s='0'"),cell_s("E13","49","s='0'"),cell_s("F13","50","s='0'")])
        +row_el(14,[cell_s("A14","3","s='4'")],20)
        +row_el(15,[cell_s("A15","51","s='4'"),cell_s("B15","52","s='4'"),cell_s("C15","53","s='4'")],20)
        +row_el(16,[cell_s("A16","54","s='0'"),cell_s("B16","55","s='1'"),cell_s("C16","56","s='0'")])
        +row_el(17,[cell_s("A17","57","s='0'"),cell_s("B17","58","s='1'"),cell_s("C17","59","s='0'")])
        +row_el(18,[cell_s("A18","60","s='0'"),cell_s("B18","61","s='1'"),cell_s("C18","62","s='0'")])
        +row_el(19,[cell_s("A19","63","s='0'"),cell_s("B19","64","s='1'"),cell_s("C19","65","s='0'")])
        +row_el(20,[cell_s("A20","66","s='0'"),cell_s("B20","67","s='1'"),cell_s("C20","68","s='0'")])
        +row_el(21,[cell_s("A21","69","s='0'"),cell_s("B21","70","s='1'"),cell_s("C21","71","s='0'")])
    )
    ws1 = build_ws(cols1, rows1, freeze=' ySplit="2" topLeftCell="A3" activePane="bottomLeft" state="frozen"')
    with open(f"{work}/xl/worksheets/sheet1.xml", "w", encoding="utf-8") as f:
        f.write(ws1)

    # Sheet 2 strings
    s2 = [
        "表单清单", "序号", "表单名称", "用途", "使用时机", "完成时间", "备注",
        "1","00_表单使用指引","本表 - 表单使用说明和指南","随时","阅读","",
        "2","01_学员信息表","收集学员基本信息","培训前","课程开始前","了解学员背景",
        "3","02_前测成绩记录表","测量培训前知识水平","培训前","培训开始前","建立评估基准",
        "4","03_后测成绩记录表","测量培训后知识水平","培训后","培训结束后","评估培训效果",
        "5","04_课堂行为观察记录表","记录课堂行为表现","培训中","培训过程中","实时观察记录",
        "6","05_培训效果综合分析表","综合分析培训效果","培训后","培训结束后","生成分析报告",
        "7","06_30天行动计划跟踪表","跟踪行为改变","培训后","培训后30天","习惯养成跟踪",
        "使用顺序：按序号从小到大使用，培训前→培训中→培训后依次进行","","","","","","",
    ]
    with open(f"{work}/xl/sharedStrings.xml", "w", encoding="utf-8") as f:
        f.write(build_ss(s2))

    cols2 = build_cols([(1,1,8),(2,2,30),(3,3,42),(4,4,14),(5,5,14),(6,6,12),(7,7,20)])
    rows2 = (
        row_el(1,[cell_s("A1","0","s='4'")],28)
        +row_el(2,[cell_s("A2","1","s='4'"),cell_s("B2","2","s='4'"),cell_s("C2","3","s='4'"),cell_s("D2","4","s='4'"),cell_s("E2","5","s='4'"),cell_s("F2","6","s='4'")],20)
        +row_el(3,[cell_s("A3","7","s='9'"),cell_s("B3","8","s='0'"),cell_s("C3","9","s='0'"),cell_s("D3","10","s='0'"),cell_s("E3","11","s='0'"),cell_s("F3","12","s='0'")])
        +row_el(4,[cell_s("A4","13","s='9'"),cell_s("B4","14","s='0'"),cell_s("C4","15","s='0'"),cell_s("D4","16","s='0'"),cell_s("E4","17","s='0'"),cell_s("F4","18","s='0'")])
        +row_el(5,[cell_s("A5","19","s='9'"),cell_s("B5","20","s='0'"),cell_s("C5","21","s='0'"),cell_s("D5","22","s='0'"),cell_s("E5","23","s='0'"),cell_s("F5","24","s='0'")])
        +row_el(6,[cell_s("A6","25","s='9'"),cell_s("B6","26","s='0'"),cell_s("C6","27","s='0'"),cell_s("D6","28","s='0'"),cell_s("E6","29","s='0'"),cell_s("F6","30","s='0'")])
        +row_el(7,[cell_s("A7","31","s='9'"),cell_s("B7","32","s='0'"),cell_s("C7","33","s='0'"),cell_s("D7","34","s='0'"),cell_s("E7","35","s='0'"),cell_s("F7","36","s='0'")])
        +row_el(8,[cell_s("A8","37","s='9'"),cell_s("B8","38","s='0'"),cell_s("C8","39","s='0'"),cell_s("D8","40","s='0'"),cell_s("E8","41","s='0'"),cell_s("F8","42","s='0'")])
        +row_el(9,[cell_s("A9","43","s='9'"),cell_s("B9","44","s='0'"),cell_s("C9","45","s='0'"),cell_s("D9","46","s='0'"),cell_s("E9","47","s='0'"),cell_s("F9","48","s='0'")])
        +row_el(10,[cell_s("A10","49","s='0'")],20)
    )
    ws2 = build_ws(cols2, rows2, freeze=' ySplit="2" topLeftCell="A3" activePane="bottomLeft" state="frozen"')
    with open(f"{work}/xl/worksheets/sheet2.xml", "w", encoding="utf-8") as f:
        f.write(ws2)

    pack(work, f"{OUT_DIR}/00_表单使用指引.xlsx")

# ══════════════════════════════════════════════════════════════════════════════
# FILE 2: 01_学员信息表.xlsx
# ══════════════════════════════════════════════════════════════════════════════
def create_01():
    print("Creating 01_学员信息表.xlsx...")
    work = "/tmp/w01"
    if os.path.exists(work):
        shutil.rmtree(work)
    shutil.copytree(TEMPLATE_DIR, work)

    s1 = [
        "学员信息表", "序号", "姓名", "部门", "职位", "工作年限", "课程日期", "备注",
        "1", "", "", "", "", "", "", "",
        "2", "", "", "", "", "", "", "",
        "3", "", "", "", "", "", "", "",
        "4", "", "", "", "", "", "", "",
        "5", "", "", "", "", "", "", "",
        "6", "", "", "", "", "", "", "",
        "7", "", "", "", "", "", "", "",
        "8", "", "", "", "", "", "", "",
        "9", "", "", "", "", "", "", "",
        "10", "", "", "", "", "", "", "",
        "11", "", "", "", "", "", "", "",
        "12", "", "", "", "", "", "", "",
        "汇总统计", "总人数", "平均工作年限", "部门分布", "职位分布",
    ]

    s2 = [
        "课前自评汇总", "自评维度", "平均分", "最高分", "最低分", "标准差",
        "自我认知", "", "", "", "",
        "沟通能力", "", "", "", "",
        "团队协作", "", "", "", "",
        "领导力", "", "", "", "",
        "时间管理", "", "", "", "",
        "情绪管理", "", "", "", "",
        "问题解决", "", "", "", "",
        "汇总平均", "", "", "", "",
        "说明：请在\"学员信息\"表中填写学员基本信息，各项自评维度由学员在课前自行评分（1-10分）", "", "", "", "",
    ]

    with open(f"{work}/xl/sharedStrings.xml", "w", encoding="utf-8") as f:
        f.write(build_ss(s1))
    with open(f"{work}/xl/workbook.xml", "w", encoding="utf-8") as f:
        f.write(build_wb(["学员信息", "课前自评汇总"]))
    with open(f"{work}/xl/_rels/workbook.xml.rels", "w", encoding="utf-8") as f:
        f.write(build_wb_rels(2))
    with open(f"{work}/[Content_Types].xml", "w", encoding="utf-8") as f:
        f.write(build_ct(2))
    with open(f"{work}/xl/styles.xml", "w", encoding="utf-8") as f:
        f.write(build_styles())

    # ── Sheet 1: 学员信息 ──
    cols1 = build_cols([(1,1,8),(2,2,14),(3,3,16),(4,4,20),(5,5,14),(6,6,10),(7,7,14),(8,8,20)])
    rows1 = (
        row_el(1,[cell_s("A1","0","s='4'")],28)
        +row_el(2,[cell_s("A2","1","s='4'"),cell_s("B2","2","s='4'"),cell_s("C2","3","s='4'"),cell_s("D2","4","s='4'"),cell_s("E2","5","s='4'"),cell_s("F2","6","s='4'"),cell_s("G2","7","s='4'")],20)
    )
    # Data rows 3-14
    for i in range(1, 13):
        r = i + 2
        si_i = str(i)
        rows1 += row_el(r,[cell_s(f"A{r}",si_i,"s='9'"),cell_i(f"B{r}","","s='0'"),cell_i(f"C{r}","","s='0'"),cell_i(f"D{r}","","s='0'"),cell_i(f"E{r}","","s='0'"),cell_i(f"F{r}","","s='0'"),cell_i(f"G{r}","","s='0'"),cell_i(f"H{r}","","s='0'")])

    rows1 += (
        row_el(16,[cell_s("A16","13","s='4'")],20)
        +row_el(17,[cell_s("A17","14","s='2'"),cell_f("B17","COUNTA(B3:B14)","s='9'")])
        +row_el(18,[cell_s("A18","15","s='2'"),cell_f("B18","IF(COUNTA(F3:F14)=0,\"\",AVERAGE(F3:F14))","s='6'")])
    )
    ws1 = build_ws(cols1, rows1, freeze=' ySplit="2" topLeftCell="A3" activePane="bottomLeft" state="frozen"')
    with open(f"{work}/xl/worksheets/sheet1.xml", "w", encoding="utf-8") as f:
        f.write(ws1)

    # ── Sheet 2: 课前自评汇总 ──
    with open(f"{work}/xl/sharedStrings.xml", "w", encoding="utf-8") as f:
        f.write(build_ss(s2))

    cols2 = build_cols([(1,1,20),(2,2,14),(3,3,12),(4,4,12),(5,5,12),(6,6,12)])
    rows2 = (
        row_el(1,[cell_s("A1","0","s='4'")],28)
        +row_el(2,[cell_s("A2","1","s='4'"),cell_s("B2","2","s='4'"),cell_s("C2","3","s='4'"),cell_s("D2","4","s='4'"),cell_s("E2","5","s='4'")],20)
        +row_el(3,[cell_s("A3","6","s='0'"),cell_i("B3","","s='0'"),cell_i("C3","","s='0'"),cell_i("D3","","s='0'"),cell_i("E3","","s='0'")])
        +row_el(4,[cell_s("A4","7","s='0'"),cell_i("B4","","s='0'"),cell_i("C4","","s='0'"),cell_i("D4","","s='0'"),cell_i("E4","","s='0'")])
        +row_el(5,[cell_s("A5","8","s='0'"),cell_i("B5","","s='0'"),cell_i("C5","","s='0'"),cell_i("D5","","s='0'"),cell_i("E5","","s='0'")])
        +row_el(6,[cell_s("A6","9","s='0'"),cell_i("B6","","s='0'"),cell_i("C6","","s='0'"),cell_i("D6","","s='0'"),cell_i("E6","","s='0'")])
        +row_el(7,[cell_s("A7","10","s='0'"),cell_i("B7","","s='0'"),cell_i("C7","","s='0'"),cell_i("D7","","s='0'"),cell_i("E7","","s='0'")])
        +row_el(8,[cell_s("A8","11","s='0'"),cell_i("B8","","s='0'"),cell_i("C8","","s='0'"),cell_i("D8","","s='0'"),cell_i("E8","","s='0'")])
        +row_el(9,[cell_s("A9","12","s='0'"),cell_i("B9","","s='0'"),cell_i("C9","","s='0'"),cell_i("D9","","s='0'"),cell_i("E9","","s='0'")])
        +row_el(10,[cell_s("A10","13","s='4'"),cell_f("B10","IF(COUNTA(B3:B9)=0,\"\",AVERAGE(B3:B9))","s='6'"),cell_f("C10","IF(COUNTA(C3:C9)=0,\"\",MAX(C3:C9))","s='9'"),cell_f("D10","IF(COUNTA(D3:D9)=0,\"\",MIN(D3:D9))","s='9'"),cell_f("E10","IF(COUNTA(B3:B9)&lt;2,\"\",STDEV(B3:B9))","s='6'")],20)
        +row_el(12,[cell_s("A12","14","s='0'")])
    )
    ws2 = build_ws(cols2, rows2, freeze=' ySplit="2" topLeftCell="A3" activePane="bottomLeft" state="frozen"')
    with open(f"{work}/xl/worksheets/sheet2.xml", "w", encoding="utf-8") as f:
        f.write(ws2)

    pack(work, f"{OUT_DIR}/01_学员信息表.xlsx")

# ══════════════════════════════════════════════════════════════════════════════
# FILE 3: 02_前测成绩记录表.xlsx
# ══════════════════════════════════════════════════════════════════════════════
def create_02():
    print("Creating 02_前测成绩记录表.xlsx...")
    work = "/tmp/w02"
    if os.path.exists(work):
        shutil.rmtree(work)
    shutil.copytree(TEMPLATE_DIR, work)

    # Strings
    s1 = [
        "前测成绩记录表", "学员姓名", "选择题得分(15题)", "场景分析得分(3题)", "开放问题得分(2题)", "总分",
        "题1","题2","题3","题4","题5","题6","题7","题8","题9","题10","题11","题12","题13","题14","题15",
        "场景1","场景2","场景3",
        "问题1","问题2",
        "1","","0","0","0","","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0",
        "2","","0","0","0","","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0",
        "3","","0","0","0","","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0",
        "4","","0","0","0","","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0",
        "5","","0","0","0","","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0",
        "6","","0","0","0","","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0",
        "7","","0","0","0","","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0",
        "8","","0","0","0","","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0",
        "9","","0","0","0","","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0",
        "10","","0","0","0","","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0",
        "班级平均", "选择题", "场景分析", "开放问题", "总分",
        "班级中位数", "选择题", "场景分析", "开放问题", "总分",
        "班级标准差", "选择题", "场景分析", "开放问题", "总分",
        "班级最高分", "选择题", "场景分析", "开放问题", "总分",
        "班级最低分", "选择题", "场景分析", "开放问题", "总分",
    ]

    s2 = [
        "个人报告", "学员姓名", "前测成绩", "后测成绩", "进步幅度", "进步等级",
        "说明：进步幅度=(后测-前测)/前测*100%，空白表示尚未填写后测成绩", "", "", "", "",
    ]

    with open(f"{work}/xl/sharedStrings.xml", "w", encoding="utf-8") as f:
        f.write(build_ss(s1))
    with open(f"{work}/xl/workbook.xml", "w", encoding="utf-8") as f:
        f.write(build_wb(["原始成绩", "数据分析", "个人报告"]))
    with open(f"{work}/xl/_rels/workbook.xml.rels", "w", encoding="utf-8") as f:
        f.write(build_wb_rels(3))
    with open(f"{work}/[Content_Types].xml", "w", encoding="utf-8") as f:
        f.write(build_ct(3))
    with open(f"{work}/xl/styles.xml", "w", encoding="utf-8") as f:
        f.write(build_styles())

    # ── Sheet 1: 原始成绩 ──
    # Cols: A=姓名, B-P=选择题15题, Q-S=场景3题, T-U=开放2题, V=总分
    cols1 = build_cols([(1,1,14)])
    for c in range(2, 22):
        cols1 += f'<col min="{c}" max="{c}" width="8" customWidth="1"/>\n  '
    cols1 += f'<col min="22" max="22" width="10" customWidth="1"/>\n  '

    rows1 = (
        row_el(1,[cell_s("A1","0","s='4'")],28)
        +row_el(2,[
            cell_s("A2","1","s='4'"),
            cell_s("B2","2","s='4'"),cell_s("C2","3","s='4'"),cell_s("D2","4","s='4'"),cell_s("E2","5","s='4'"),cell_s("F2","6","s='4'"),cell_s("G2","7","s='4'"),cell_s("H2","8","s='4'"),cell_s("I2","9","s='4'"),cell_s("J2","10","s='4'"),
            cell_s("K2","11","s='4'"),cell_s("L2","12","s='4'"),cell_s("M2","13","s='4'"),cell_s("N2","14","s='4'"),cell_s("O2","15","s='4'"),cell_s("P2","16","s='4'"),
            cell_s("Q2","17","s='4'"),cell_s("R2","18","s='4'"),cell_s("S2","19","s='4'"),
            cell_s("T2","20","s='4'"),cell_s("U2","21","s='4'"),
            cell_s("V2","22","s='4'"),
        ],20)
    )
    # Data rows 3-12
    for i in range(1, 11):
        r = i + 2
        rows1 += row_el(r,[
            cell_i(f"A{r}","","s='0'"),
            cell_n(f"B{r}","0","s='9'"),cell_n(f"C{r}","0","s='9'"),cell_n(f"D{r}","0","s='9'"),cell_n(f"E{r}","0","s='9'"),cell_n(f"F{r}","0","s='9'"),
            cell_n(f"G{r}","0","s='9'"),cell_n(f"H{r}","0","s='9'"),cell_n(f"I{r}","0","s='9'"),cell_n(f"J{r}","0","s='9'"),cell_n(f"K{r}","0","s='9'"),
            cell_n(f"L{r}","0","s='9'"),cell_n(f"M{r}","0","s='9'"),cell_n(f"N{r}","0","s='9'"),cell_n(f"O{r}","0","s='9'"),cell_n(f"P{r}","0","s='9'"),
            cell_n(f"Q{r}","0","s='9'"),cell_n(f"R{r}","0","s='9'"),cell_n(f"S{r}","0","s='9'"),
            cell_n(f"T{r}","0","s='9'"),cell_n(f"U{r}","0","s='9'"),
            cell_f(f"V{r}",f"SUM(B{r}:P{r})+SUM(Q{r}:S{r})+SUM(T{r}:U{r})","s='6'"),
        ])

    ws1 = build_ws(cols1, rows1, freeze=' ySplit="2" topLeftCell="A3" activePane="bottomLeft" state="frozen"')
    with open(f"{work}/xl/worksheets/sheet1.xml", "w", encoding="utf-8") as f:
        f.write(ws1)

    # ── Sheet 2: 数据分析 ──
    s2_s = [
        "数据分析", "维度", "平均分", "中位数", "标准差", "最高分", "最低分",
        "选择题(15题)", "场景分析(3题)", "开放问题(2题)", "总分",
        "选择题", "", "", "", "",
        "场景分析", "", "", "", "",
        "开放问题", "", "", "", "",
        "总分", "", "", "", "",
        "说明：各维度统计数据基于原始成绩表中的学员成绩自动计算", "", "", "", "",
    ]
    with open(f"{work}/xl/sharedStrings.xml", "w", encoding="utf-8") as f:
        f.write(build_ss(s2_s))

    cols2 = build_cols([(1,1,22),(2,2,14),(3,3,12),(4,4,12),(5,5,12),(6,6,12),(7,7,12)])
    rows2 = (
        row_el(1,[cell_s("A1","0","s='4'")],28)
        +row_el(2,[cell_s("A2","1","s='4'"),cell_s("B2","2","s='4'"),cell_s("C2","3","s='4'"),cell_s("D2","4","s='4'"),cell_s("E2","5","s='4'"),cell_s("F2","6","s='4'")],20)
        +row_el(3,[cell_s("A3","7","s='4'"),cell_f("B3","IF(COUNTA(原始成绩!B3:B12)=0,\"\",AVERAGE(原始成绩!B3:B12))","s='6'"),cell_f("C3","IF(COUNTA(原始成绩!B3:B12)=0,\"\",MEDIAN(原始成绩!B3:B12))","s='6'"),cell_f("D3","IF(COUNTA(原始成绩!B3:B12)&lt;2,\"\",STDEV(原始成绩!B3:B12))","s='6'"),cell_f("E3","IF(COUNTA(原始成绩!B3:B12)=0,\"\",MAX(原始成绩!B3:B12))","s='9'"),cell_f("F3","IF(COUNTA(原始成绩!B3:B12)=0,\"\",MIN(原始成绩!B3:B12))","s='9'")])
        +row_el(4,[cell_s("A4","8","s='4'"),cell_f("B4","IF(COUNTA(原始成绩!Q3:Q12)=0,\"\",AVERAGE(原始成绩!Q3:Q12))","s='6'"),cell_f("C4","IF(COUNTA(原始成绩!Q3:Q12)=0,\"\",MEDIAN(原始成绩!Q3:Q12))","s='6'"),cell_f("D4","IF(COUNTA(原始成绩!Q3:Q12)&lt;2,\"\",STDEV(原始成绩!Q3:Q12))","s='6'"),cell_f("E4","IF(COUNTA(原始成绩!Q3:Q12)=0,\"\",MAX(原始成绩!Q3:Q12))","s='9'"),cell_f("F4","IF(COUNTA(原始成绩!Q3:Q12)=0,\"\",MIN(原始成绩!Q3:Q12))","s='9'")])
        +row_el(5,[cell_s("A5","9","s='4'"),cell_f("B5","IF(COUNTA(原始成绩!T3:T12)=0,\"\",AVERAGE(原始成绩!T3:T12))","s='6'"),cell_f("C5","IF(COUNTA(原始成绩!T3:T12)=0,\"\",MEDIAN(原始成绩!T3:T12))","s='6'"),cell_f("D5","IF(COUNTA(原始成绩!T3:T12)&lt;2,\"\",STDEV(原始成绩!T3:T12))","s='6'"),cell_f("E5","IF(COUNTA(原始成绩!T3:T12)=0,\"\",MAX(原始成绩!T3:T12))","s='9'"),cell_f("F5","IF(COUNTA(原始成绩!T3:T12)=0,\"\",MIN(原始成绩!T3:T12))","s='9'")])
        +row_el(6,[cell_s("A6","10","s='4'"),cell_f("B6","IF(COUNTA(原始成绩!V3:V12)=0,\"\",AVERAGE(原始成绩!V3:V12))","s='6'"),cell_f("C6","IF(COUNTA(原始成绩!V3:V12)=0,\"\",MEDIAN(原始成绩!V3:V12))","s='6'"),cell_f("D6","IF(COUNTA(原始成绩!V3:V12)&lt;2,\"\",STDEV(原始成绩!V3:V12))","s='6'"),cell_f("E6","IF(COUNTA(原始成绩!V3:V12)=0,\"\",MAX(原始成绩!V3:V12))","s='9'"),cell_f("F6","IF(COUNTA(原始成绩!V3:V12)=0,\"\",MIN(原始成绩!V3:V12))","s='9'")])
        +row_el(8,[cell_s("A8","11","s='0'")])
    )
    ws2 = build_ws(cols2, rows2, freeze=' ySplit="2" topLeftCell="A3" activePane="bottomLeft" state="frozen"')
    with open(f"{work}/xl/worksheets/sheet2.xml", "w", encoding="utf-8") as f:
        f.write(ws2)

    # ── Sheet 3: 个人报告 ──
    s3_s = [
        "个人报告", "学员姓名", "前测成绩", "后测成绩", "进步幅度", "进步等级",
        "说明：进步幅度=(后测-前测)/前测*100%，空白表示尚未填写后测成绩", "", "", "", "",
    ]
    with open(f"{work}/xl/sharedStrings.xml", "w", encoding="utf-8") as f:
        f.write(build_ss(s3_s))

    cols3 = build_cols([(1,1,16),(2,2,16),(3,3,16),(4,4,16),(5,5,14),(6,6,14)])
    rows3 = (
        row_el(1,[cell_s("A1","0","s='4'")],28)
        +row_el(2,[cell_s("A2","1","s='4'"),cell_s("B2","2","s='4'"),cell_s("C2","3","s='4'"),cell_s("D2","4","s='4'"),cell_s("E2","5","s='4'")],20)
    )
    for i in range(1, 11):
        r = i + 2
        rows3 += row_el(r,[cell_i(f"A{r}","","s='0'"),cell_i(f"B{r}","","s='0'"),cell_i(f"C{r}","","s='0'"),cell_f(f"D{r}",f"IF(C{r}=\"\",\"\",C{r}-B{r})","s='6'"),cell_f(f"E{r}",f'IF(D{r}="","",IF(B{r}=0,"N/A",TEXT(D{r}/B{r},"0.0%")))',"s='6'")])
    rows3 += row_el(14,[cell_s("A14","6","s='0'")])
    ws3 = build_ws(cols3, rows3, freeze=' ySplit="2" topLeftCell="A3" activePane="bottomLeft" state="frozen"')
    with open(f"{work}/xl/worksheets/sheet3.xml", "w", encoding="utf-8") as f:
        f.write(ws3)

    pack(work, f"{OUT_DIR}/02_前测成绩记录表.xlsx")

# ══════════════════════════════════════════════════════════════════════════════
# FILE 4: 03_后测成绩记录表.xlsx
# ══════════════════════════════════════════════════════════════════════════════
def create_03():
    print("Creating 03_后测成绩记录表.xlsx...")
    work = "/tmp/w03"
    if os.path.exists(work):
        shutil.rmtree(work)
    shutil.copytree(TEMPLATE_DIR, work)

    # Reuse same structure as 02 but with 培训效果 sheet
    s1 = [
        "后测成绩记录表", "学员姓名", "选择题得分(15题)", "场景分析得分(3题)", "开放问题得分(2题)", "总分",
        "题1","题2","题3","题4","题5","题6","题7","题8","题9","题10","题11","题12","题13","题14","题15",
        "场景1","场景2","场景3",
        "问题1","问题2",
        "1","","0","0","0","","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0",
        "2","","0","0","0","","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0",
        "3","","0","0","0","","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0",
        "4","","0","0","0","","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0",
        "5","","0","0","0","","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0",
        "6","","0","0","0","","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0",
        "7","","0","0","0","","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0",
        "8","","0","0","0","","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0",
        "9","","0","0","0","","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0",
        "10","","0","0","0","","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0",
        "班级平均", "选择题", "场景分析", "开放问题", "总分",
    ]

    with open(f"{work}/xl/sharedStrings.xml", "w", encoding="utf-8") as f:
        f.write(build_ss(s1))
    with open(f"{work}/xl/workbook.xml", "w", encoding="utf-8") as f:
        f.write(build_wb(["原始成绩", "数据分析", "个人报告", "培训效果"]))
    with open(f"{work}/xl/_rels/workbook.xml.rels", "w", encoding="utf-8") as f:
        f.write(build_wb_rels(4))
    with open(f"{work}/[Content_Types].xml", "w", encoding="utf-8") as f:
        f.write(build_ct(4))
    with open(f"{work}/xl/styles.xml", "w", encoding="utf-8") as f:
        f.write(build_styles())

    # Sheet 1 (same as 02)
    cols1 = build_cols([(1,1,14)])
    for c in range(2, 22):
        cols1 += f'<col min="{c}" max="{c}" width="8" customWidth="1"/>\n  '
    cols1 += f'<col min="22" max="22" width="10" customWidth="1"/>\n  '

    rows1 = (
        row_el(1,[cell_s("A1","0","s='4'")],28)
        +row_el(2,[
            cell_s("A2","1","s='4'"),
            cell_s("B2","2","s='4'"),cell_s("C2","3","s='4'"),cell_s("D2","4","s='4'"),cell_s("E2","5","s='4'"),cell_s("F2","6","s='4'"),cell_s("G2","7","s='4'"),cell_s("H2","8","s='4'"),cell_s("I2","9","s='4'"),cell_s("J2","10","s='4'"),
            cell_s("K2","11","s='4'"),cell_s("L2","12","s='4'"),cell_s("M2","13","s='4'"),cell_s("N2","14","s='4'"),cell_s("O2","15","s='4'"),cell_s("P2","16","s='4'"),
            cell_s("Q2","17","s='4'"),cell_s("R2","18","s='4'"),cell_s("S2","19","s='4'"),
            cell_s("T2","20","s='4'"),cell_s("U2","21","s='4'"),
            cell_s("V2","22","s='4'"),
        ],20)
    )
    for i in range(1, 11):
        r = i + 2
        rows1 += row_el(r,[
            cell_i(f"A{r}","","s='0'"),
            cell_n(f"B{r}","0","s='9'"),cell_n(f"C{r}","0","s='9'"),cell_n(f"D{r}","0","s='9'"),cell_n(f"E{r}","0","s='9'"),cell_n(f"F{r}","0","s='9'"),
            cell_n(f"G{r}","0","s='9'"),cell_n(f"H{r}","0","s='9'"),cell_n(f"I{r}","0","s='9'"),cell_n(f"J{r}","0","s='9'"),cell_n(f"K{r}","0","s='9'"),
            cell_n(f"L{r}","0","s='9'"),cell_n(f"M{r}","0","s='9'"),cell_n(f"N{r}","0","s='9'"),cell_n(f"O{r}","0","s='9'"),cell_n(f"P{r}","0","s='9'"),
            cell_n(f"Q{r}","0","s='9'"),cell_n(f"R{r}","0","s='9'"),cell_n(f"S{r}","0","s='9'"),
            cell_n(f"T{r}","0","s='9'"),cell_n(f"U{r}","0","s='9'"),
            cell_f(f"V{r}",f"SUM(B{r}:P{r})+SUM(Q{r}:S{r})+SUM(T{r}:U{r})","s='6'"),
        ])

    ws1 = build_ws(cols1, rows1, freeze=' ySplit="2" topLeftCell="A3" activePane="bottomLeft" state="frozen"')
    with open(f"{work}/xl/worksheets/sheet1.xml", "w", encoding="utf-8") as f:
        f.write(ws1)

    # Sheet 2 (数据分析)
    s2_s = [
        "数据分析", "维度", "平均分", "中位数", "标准差", "最高分", "最低分",
        "选择题(15题)", "场景分析(3题)", "开放问题(2题)", "总分",
        "选择题", "", "", "", "",
        "场景分析", "", "", "", "",
        "开放问题", "", "", "", "",
        "总分", "", "", "", "",
        "说明：各维度统计数据基于原始成绩表中的学员成绩自动计算", "", "", "", "",
    ]
    with open(f"{work}/xl/sharedStrings.xml", "w", encoding="utf-8") as f:
        f.write(build_ss(s2_s))

    cols2 = build_cols([(1,1,22),(2,2,14),(3,3,12),(4,4,12),(5,5,12),(6,6,12),(7,7,12)])
    rows2 = (
        row_el(1,[cell_s("A1","0","s='4'")],28)
        +row_el(2,[cell_s("A2","1","s='4'"),cell_s("B2","2","s='4'"),cell_s("C2","3","s='4'"),cell_s("D2","4","s='4'"),cell_s("E2","5","s='4'"),cell_s("F2","6","s='4'")],20)
        +row_el(3,[cell_s("A3","7","s='4'"),cell_f("B3","IF(COUNTA(原始成绩!B3:B12)=0,\"\",AVERAGE(原始成绩!B3:B12))","s='6'"),cell_f("C3","IF(COUNTA(原始成绩!B3:B12)=0,\"\",MEDIAN(原始成绩!B3:B12))","s='6'"),cell_f("D3","IF(COUNTA(原始成绩!B3:B12)&lt;2,\"\",STDEV(原始成绩!B3:B12))","s='6'"),cell_f("E3","IF(COUNTA(原始成绩!B3:B12)=0,\"\",MAX(原始成绩!B3:B12))","s='9'"),cell_f("F3","IF(COUNTA(原始成绩!B3:B12)=0,\"\",MIN(原始成绩!B3:B12))","s='9'")])
        +row_el(4,[cell_s("A4","8","s='4'"),cell_f("B4","IF(COUNTA(原始成绩!Q3:Q12)=0,\"\",AVERAGE(原始成绩!Q3:Q12))","s='6'"),cell_f("C4","IF(COUNTA(原始成绩!Q3:Q12)=0,\"\",MEDIAN(原始成绩!Q3:Q12))","s='6'"),cell_f("D4","IF(COUNTA(原始成绩!Q3:Q12)&lt;2,\"\",STDEV(原始成绩!Q3:Q12))","s='6'"),cell_f("E4","IF(COUNTA(原始成绩!Q3:Q12)=0,\"\",MAX(原始成绩!Q3:Q12))","s='9'"),cell_f("F4","IF(COUNTA(原始成绩!Q3:Q12)=0,\"\",MIN(原始成绩!Q3:Q12))","s='9'")])
        +row_el(5,[cell_s("A5","9","s='4'"),cell_f("B5","IF(COUNTA(原始成绩!T3:T12)=0,\"\",AVERAGE(原始成绩!T3:T12))","s='6'"),cell_f("C5","IF(COUNTA(原始成绩!T3:T12)=0,\"\",MEDIAN(原始成绩!T3:T12))","s='6'"),cell_f("D5","IF(COUNTA(原始成绩!T3:T12)&lt;2,\"\",STDEV(原始成绩!T3:T12))","s='6'"),cell_f("E5","IF(COUNTA(原始成绩!T3:T12)=0,\"\",MAX(原始成绩!T3:T12))","s='9'"),cell_f("F5","IF(COUNTA(原始成绩!T3:T12)=0,\"\",MIN(原始成绩!T3:T12))","s='9'")])
        +row_el(6,[cell_s("A6","10","s='4'"),cell_f("B6","IF(COUNTA(原始成绩!V3:V12)=0,\"\",AVERAGE(原始成绩!V3:V12))","s='6'"),cell_f("C6","IF(COUNTA(原始成绩!V3:V12)=0,\"\",MEDIAN(原始成绩!V3:V12))","s='6'"),cell_f("D6","IF(COUNTA(原始成绩!V3:V12)&lt;2,\"\",STDEV(原始成绩!V3:V12))","s='6'"),cell_f("E6","IF(COUNTA(原始成绩!V3:V12)=0,\"\",MAX(原始成绩!V3:V12))","s='9'"),cell_f("F6","IF(COUNTA(原始成绩!V3:V12)=0,\"\",MIN(原始成绩!V3:V12))","s='9'")])
        +row_el(8,[cell_s("A8","11","s='0'")])
    )
    ws2 = build_ws(cols2, rows2, freeze=' ySplit="2" topLeftCell="A3" activePane="bottomLeft" state="frozen"')
    with open(f"{work}/xl/worksheets/sheet2.xml", "w", encoding="utf-8") as f:
        f.write(ws2)

    # Sheet 3 (个人报告)
    s3_s = [
        "个人报告", "学员姓名", "前测成绩", "后测成绩", "进步幅度", "进步等级",
        "说明：进步幅度=(后测-前测)/前测*100%，空白表示尚未填写后测成绩", "", "", "", "",
    ]
    with open(f"{work}/xl/sharedStrings.xml", "w", encoding="utf-8") as f:
        f.write(build_ss(s3_s))

    cols3 = build_cols([(1,1,16),(2,2,16),(3,3,16),(4,4,16),(5,5,14),(6,6,14)])
    rows3 = (
        row_el(1,[cell_s("A1","0","s='4'")],28)
        +row_el(2,[cell_s("A2","1","s='4'"),cell_s("B2","2","s='4'"),cell_s("C2","3","s='4'"),cell_s("D2","4","s='4'"),cell_s("E2","5","s='4'")],20)
    )
    for i in range(1, 11):
        r = i + 2
        rows3 += row_el(r,[cell_i(f"A{r}","","s='0'"),cell_i(f"B{r}","","s='0'"),cell_i(f"C{r}","","s='0'"),cell_f(f"D{r}",f"IF(C{r}=\"\",\"\",C{r}-B{r})","s='6'"),cell_f(f"E{r}",f'IF(D{r}="","",IF(B{r}=0,"N/A",TEXT(D{r}/B{r},"0.0%")))',"s='6'")])
    rows3 += row_el(14,[cell_s("A14","6","s='0'")])
    ws3 = build_ws(cols3, rows3, freeze=' ySplit="2" topLeftCell="A3" activePane="bottomLeft" state="frozen"')
    with open(f"{work}/xl/worksheets/sheet3.xml", "w", encoding="utf-8") as f:
        f.write(ws3)

    # Sheet 4 (培训效果)
    s4_s = [
        "培训效果", "评估维度", "提升幅度", "效果等级", "改进建议",
        "效果等级标准：显著提升(>=20%)、明显提升(10%-19%)、轻微提升(1%-9%)、无提升(0%)、退步(<0%)",
        "选择题维度", "", "", "",
        "场景分析维度", "", "", "",
        "开放问题维度", "", "", "",
        "总分维度", "", "", "",
        "综合效果等级", "", "", "",
        "培训改进建议", "", "", "", "",
        "注：提升幅度 = (后测成绩 - 前测成绩) / 前测成绩 * 100%", "", "", "", "",
    ]
    with open(f"{work}/xl/sharedStrings.xml", "w", encoding="utf-8") as f:
        f.write(build_ss(s4_s))

    cols4 = build_cols([(1,1,20),(2,2,16),(3,3,16),(4,4,16),(5,5,36)])
    rows4 = (
        row_el(1,[cell_s("A1","0","s='4'")],28)
        +row_el(2,[cell_s("A2","1","s='4'"),cell_s("B2","2","s='4'"),cell_s("C2","3","s='4'"),cell_s("D2","4","s='4'"),cell_s("E2","5","s='4'")],20)
        +row_el(3,[cell_s("A3","6","s='4'")])
        +row_el(4,[cell_s("A4","7","s='0'"),cell_f("B4","IF(OR(个人报告!B3=\"\",个人报告!C3=\"\"),\"\",IF(个人报告!B3=0,\"N/A\",TEXT((个人报告!C3-个人报告!B3)/个人报告!B3,\"0.0%\")))","s='6'"),cell_f("C4","IF(B4=\"\",\"\",IF(VALUE(LEFT(B4,LEN(B4)-1))>=20,\"显著提升\",IF(VALUE(LEFT(B4,LEN(B4)-1))>=10,\"明显提升\",IF(VALUE(LEFT(B4,LEN(B4)-1))>=1,\"轻微提升\",IF(VALUE(LEFT(B4,LEN(B4)-1))&lt;0,\"退步\",\"无提升\")))))","s='0'"),cell_i("D4","建议加强基础概念的记忆和理解","s='0'")])
        +row_el(5,[cell_s("A5","8","s='0'"),cell_f("B5","IF(OR(个人报告!B4=\"\",个人报告!C4=\"\"),\"\",IF(个人报告!B4=0,\"N/A\",TEXT((个人报告!C4-个人报告!B4)/个人报告!B4,\"0.0%\")))","s='6'"),cell_f("C5","IF(B5=\"\",\"\",IF(VALUE(LEFT(B5,LEN(B5)-1))>=20,\"显著提升\",IF(VALUE(LEFT(B5,LEN(B5)-1))>=10,\"明显提升\",IF(VALUE(LEFT(B5,LEN(B5)-1))>=1,\"轻微提升\",IF(VALUE(LEFT(B5,LEN(B5)-1))&lt;0,\"退步\",\"无提升\")))))","s='0'"),cell_i("D5","建议增加案例分析和讨论环节","s='0'")])
        +row_el(6,[cell_s("A6","9","s='0'"),cell_f("B6","IF(OR(个人报告!B5=\"\",个人报告!C5=\"\"),\"\",IF(个人报告!B5=0,\"N/A\",TEXT((个人报告!C5-个人报告!B5)/个人报告!B5,\"0.0%\")))","s='6'"),cell_f("C6","IF(B6=\"\",\"\",IF(VALUE(LEFT(B6,LEN(B6)-1))>=20,\"显著提升\",IF(VALUE(LEFT(B6,LEN(B6)-1))>=10,\"明显提升\",IF(VALUE(LEFT(B6,LEN(B6)-1))>=1,\"轻微提升\",IF(VALUE(LEFT(B6,LEN(B6)-1))&lt;0,\"退步\",\"无提升\")))))","s='0'"),cell_i("D6","建议增加开放性问题的训练","s='0'")])
        +row_el(7,[cell_s("A7","10","s='0'"),cell_f("B7","IF(OR(个人报告!B6=\"\",个人报告!C6=\"\"),\"\",IF(个人报告!B6=0,\"N/A\",TEXT((个人报告!C6-个人报告!B6)/个人报告!B6,\"0.0%\")))","s='6'"),cell_f("C7","IF(B7=\"\",\"\",IF(VALUE(LEFT(B7,LEN(B7)-1))>=20,\"显著提升\",IF(VALUE(LEFT(B7,LEN(B7)-1))>=10,\"明显提升\",IF(VALUE(LEFT(B7,LEN(B7)-1))>=1,\"轻微提升\",IF(VALUE(LEFT(B7,LEN(B7)-1))&lt;0,\"退步\",\"无提升\")))))","s='0'"),cell_i("D7","建议加强综合应用能力的训练","s='0'")])
        +row_el(9,[cell_s("A9","11","s='0'"),cell_f("C9","IF(COUNTA(C4:C7)=0,\"\",IF(COUNTIF(C4:C7,\"显著提升\")>2,\"整体效果显著\",IF(COUNTIF(C4:C7,\"明显提升\")>2,\"整体效果明显\",IF(COUNTIF(C4:C7,\"轻微提升\")>2,\"整体效果一般\",\"需进一步改进\"))))","s='0'")])
        +row_el(11,[cell_s("A11","12","s='0'")])
        +row_el(13,[cell_s("A13","13","s='0'")])
    )
    ws4 = build_ws(cols4, rows4, freeze=' ySplit="2" topLeftCell="A3" activePane="bottomLeft" state="frozen"')
    with open(f"{work}/xl/worksheets/sheet4.xml", "w", encoding="utf-8") as f:
        f.write(ws4)

    pack(work, f"{OUT_DIR}/03_后测成绩记录表.xlsx")

# ══════════════════════════════════════════════════════════════════════════════
# FILE 5: 04_课堂行为观察记录表.xlsx
# ══════════════════════════════════════════════════════════════════════════════
def create_04():
    print("Creating 04_课堂行为观察记录表.xlsx...")
    work = "/tmp/w04"
    if os.path.exists(work):
        shutil.rmtree(work)
    shutil.copytree(TEMPLATE_DIR, work)

    s1 = [
        "课堂行为观察记录表", "学员姓名", "观察维度", "观察项目", "观察记录", "评分(1-5)", "观察时间",
        "Individual", "Group", "Organizational",
        "专注度", "参与度", "互动质量", "发言次数", "倾听表现", "小组贡献", "合作态度",
        "冲突处理", "共识达成", "领导行为", "组织融入", "文化适应",
        "1", "", "Individual", "专注度", "", "3", "",
        "2", "", "Group", "参与度", "", "3", "",
        "3", "", "Organizational", "组织融入", "", "3", "",
        "整体课堂氛围评价", "", "", "", "", "", "",
        "关键洞察", "", "", "", "", "", "",
        "后续跟进建议", "", "", "", "", "", "",
    ]

    with open(f"{work}/xl/sharedStrings.xml", "w", encoding="utf-8") as f:
        f.write(build_ss(s1))
    with open(f"{work}/xl/workbook.xml", "w", encoding="utf-8") as f:
        f.write(build_wb(["观察记录", "群体行为观察", "汇总分析"]))
    with open(f"{work}/xl/_rels/workbook.xml.rels", "w", encoding="utf-8") as f:
        f.write(build_wb_rels(3))
    with open(f"{work}/[Content_Types].xml", "w", encoding="utf-8") as f:
        f.write(build_ct(3))
    with open(f"{work}/xl/styles.xml", "w", encoding="utf-8") as f:
        f.write(build_styles())

    # Sheet 1
    cols1 = build_cols([(1,1,14),(2,2,18),(3,3,20),(4,4,36),(5,5,12),(6,6,14),(7,7,18)])
    rows1 = (
        row_el(1,[cell_s("A1","0","s='4'")],28)
        +row_el(2,[cell_s("A2","1","s='4'"),cell_s("B2","2","s='4'"),cell_s("C2","3","s='4'"),cell_s("D2","4","s='4'"),cell_s("E2","5","s='4'"),cell_s("F2","6","s='4'")],20)
    )
    # 15 observation rows
    for i in range(1, 16):
        r = i + 2
        rows1 += row_el(r,[cell_i(f"A{r}","","s='0'"),cell_i(f"B{r}","","s='0'"),cell_i(f"C{r}","","s='0'"),cell_i(f"D{r}","","s='0'"),cell_n(f"E{r}","3","s='9'"),cell_i(f"F{r}","","s='0'")])

    rows1 += (
        row_el(18,[cell_s("A18","22","s='4'")],20)
        +row_el(19,[cell_i("A19","","s='0'"),cell_i("B19","","s='0'"),cell_i("C19","","s='0'"),cell_i("D19","","s='0'"),cell_f("E19","IF(COUNTA(E3:E17)=0,\"\",AVERAGE(E3:E17))","s='6'"),cell_i("F19","","s='0'")])
        +row_el(21,[cell_s("A21","23","s='4'")],20)
        +row_el(22,[cell_i("A22","","s='0'"),cell_i("B22","","s='0'"),cell_i("C22","","s='0'"),cell_i("D22","","s='0'"),cell_i("E22","","s='0'"),cell_i("F22","","s='0'")])
        +row_el(24,[cell_s("A24","24","s='4'")],20)
        +row_el(25,[cell_i("A25","","s='0'"),cell_i("B25","","s='0'"),cell_i("C25","","s='0'"),cell_i("D25","","s='0'"),cell_i("E25","","s='0'"),cell_i("F25","","s='0'")])
    )
    ws1 = build_ws(cols1, rows1, freeze=' ySplit="2" topLeftCell="A3" activePane="bottomLeft" state="frozen"')
    with open(f"{work}/xl/worksheets/sheet1.xml", "w", encoding="utf-8") as f:
        f.write(ws1)

    # Sheet 2
    s2 = [
        "群体行为观察", "小组编号", "小组讨论质量(1-5)", "从众行为记录", "冲突处理观察", "共识达成情况", "备注",
        "小组1", "", "3", "", "", "", "",
        "小组2", "", "3", "", "", "", "",
        "小组3", "", "3", "", "", "", "",
        "小组4", "", "3", "", "", "", "",
        "小组5", "", "3", "", "", "", "",
        "整体平均", "", "", "", "", "", "",
    ]
    with open(f"{work}/xl/sharedStrings.xml", "w", encoding="utf-8") as f:
        f.write(build_ss(s2))

    cols2 = build_cols([(1,1,12),(2,2,20),(3,3,20),(4,4,24),(5,5,24),(6,6,18),(7,7,16)])
    rows2 = (
        row_el(1,[cell_s("A1","0","s='4'")],28)
        +row_el(2,[cell_s("A2","1","s='4'"),cell_s("B2","2","s='4'"),cell_s("C2","3","s='4'"),cell_s("D2","4","s='4'"),cell_s("E2","5","s='4'"),cell_s("F2","6","s='4'")],20)
        +row_el(3,[cell_i("A3","","s='0'"),cell_n("B3","3","s='9'"),cell_i("C3","","s='0'"),cell_i("D3","","s='0'"),cell_i("E3","","s='0'"),cell_i("F3","","s='0'")])
        +row_el(4,[cell_i("A4","","s='0'"),cell_n("B4","3","s='9'"),cell_i("C4","","s='0'"),cell_i("D4","","s='0'"),cell_i("E4","","s='0'"),cell_i("F4","","s='0'")])
        +row_el(5,[cell_i("A5","","s='0'"),cell_n("B5","3","s='9'"),cell_i("C5","","s='0'"),cell_i("D5","","s='0'"),cell_i("E5","","s='0'"),cell_i("F5","","s='0'")])
        +row_el(6,[cell_i("A6","","s='0'"),cell_n("B6","3","s='9'"),cell_i("C6","","s='0'"),cell_i("D6","","s='0'"),cell_i("E6","","s='0'"),cell_i("F6","","s='0'")])
        +row_el(7,[cell_i("A7","","s='0'"),cell_n("B7","3","s='9'"),cell_i("C7","","s='0'"),cell_i("D7","","s='0'"),cell_i("E7","","s='0'"),cell_i("F7","","s='0'")])
        +row_el(9,[cell_s("A9","7","s='4'"),cell_f("B9","IF(COUNTA(B3:B7)=0,\"\",AVERAGE(B3:B7))","s='6'"),cell_i("C9","","s='0'"),cell_i("D9","","s='0'"),cell_i("E9","","s='0'"),cell_i("F9","","s='0'")])
    )
    ws2 = build_ws(cols2, rows2, freeze=' ySplit="2" topLeftCell="A3" activePane="bottomLeft" state="frozen"')
    with open(f"{work}/xl/worksheets/sheet2.xml", "w", encoding="utf-8") as f:
        f.write(ws2)

    # Sheet 3
    s3 = [
        "汇总分析", "整体课堂氛围评价", "关键洞察", "后续跟进建议",
        "氛围维度", "评分(1-5)", "说明",
        "学员参与度", "", "",
        "课堂互动质量", "", "",
        "学习氛围", "", "",
        "整体评分", "", "",
        "主要发现", "", "",
        "1. ", "", "",
        "2. ", "", "",
        "3. ", "", "",
        "改进建议", "", "",
        "建议1: ", "", "",
        "建议2: ", "", "",
        "建议3: ", "", "",
    ]
    with open(f"{work}/xl/sharedStrings.xml", "w", encoding="utf-8") as f:
        f.write(build_ss(s3))

    cols3 = build_cols([(1,1,20),(2,2,20),(3,3,48)])
    rows3 = (
        row_el(1,[cell_s("A1","0","s='4'")],28)
        +row_el(2,[cell_s("A2","1","s='4'"),cell_s("B2","2","s='4'"),cell_s("C2","3","s='4'")],20)
        +row_el(3,[cell_s("A3","4","s='4'"),cell_n("B3","3","s='9'"),cell_i("C3","","s='0'")])
        +row_el(4,[cell_s("A4","5","s='4'"),cell_n("B4","3","s='9'"),cell_i("C4","","s='0'")])
        +row_el(5,[cell_s("A5","6","s='4'"),cell_n("B5","3","s='9'"),cell_i("C5","","s='0'")])
        +row_el(6,[cell_s("A6","7","s='4'"),cell_f("B6","IF(COUNTA(B3:B5)=0,\"\",AVERAGE(B3:B5))","s='6'"),cell_i("C6","","s='0'")])
        +row_el(8,[cell_s("A8","8","s='4'"),cell_i("B8","","s='0'"),cell_i("C8","","s='0'")],20)
        +row_el(9,[cell_s("A9","9","s='0'"),cell_i("B9","","s='0'"),cell_i("C9","","s='0'")])
        +row_el(10,[cell_s("A10","10","s='0'"),cell_i("B10","","s='0'"),cell_i("C10","","s='0'")])
        +row_el(11,[cell_s("A11","11","s='0'"),cell_i("B11","","s='0'"),cell_i("C11","","s='0'")])
        +row_el(13,[cell_s("A13","12","s='4'"),cell_i("B13","","s='0'"),cell_i("C13","","s='0'")],20)
        +row_el(14,[cell_s("A14","13","s='0'"),cell_i("B14","","s='0'"),cell_i("C14","","s='0'")])
        +row_el(15,[cell_s("A15","14","s='0'"),cell_i("B15","","s='0'"),cell_i("C15","","s='0'")])
        +row_el(16,[cell_s("A16","15","s='0'"),cell_i("B16","","s='0'"),cell_i("C16","","s='0'")])
    )
    ws3 = build_ws(cols3, rows3, freeze=' ySplit="2" topLeftCell="A3" activePane="bottomLeft" state="frozen"')
    with open(f"{work}/xl/worksheets/sheet3.xml", "w", encoding="utf-8") as f:
        f.write(ws3)

    pack(work, f"{OUT_DIR}/04_课堂行为观察记录表.xlsx")

# ══════════════════════════════════════════════════════════════════════════════
# FILE 6: 05_培训效果综合分析表.xlsx
# ══════════════════════════════════════════════════════════════════════════════
def create_05():
    print("Creating 05_培训效果综合分析表.xlsx...")
    work = "/tmp/w05"
    if os.path.exists(work):
        shutil.rmtree(work)
    shutil.copytree(TEMPLATE_DIR, work)

    s1 = [
        "培训效果综合分析表", "评估维度", "评分(1-10)", "评估说明", "数据来源",
        "培训满意度", "", "学员对培训的总体满意程度", "课后调查问卷",
        "学习效果", "", "学员对知识技能的掌握程度", "前后测成绩对比",
        "行为改变", "", "培训后行为改变的明显程度", "30天行动计划跟踪",
        "业务影响", "", "培训对工作的实际影响程度", "直属上级评估",
        "综合评分", "", "四项维度的综合得分", "",
    ]

    with open(f"{work}/xl/sharedStrings.xml", "w", encoding="utf-8") as f:
        f.write(build_ss(s1))
    with open(f"{work}/xl/workbook.xml", "w", encoding="utf-8") as f:
        f.write(build_wb(["总体评估", "Kirkpatrick四级评估", "ROI计算", "可视化看板"]))
    with open(f"{work}/xl/_rels/workbook.xml.rels", "w", encoding="utf-8") as f:
        f.write(build_wb_rels(4))
    with open(f"{work}/[Content_Types].xml", "w", encoding="utf-8") as f:
        f.write(build_ct(4))
    with open(f"{work}/xl/styles.xml", "w", encoding="utf-8") as f:
        f.write(build_styles())

    # Sheet 1
    cols1 = build_cols([(1,1,18),(2,2,14),(3,3,12),(4,4,40),(5,5,20)])
    rows1 = (
        row_el(1,[cell_s("A1","0","s='4'")],28)
        +row_el(2,[cell_s("A2","1","s='4'"),cell_s("B2","2","s='4'"),cell_s("C2","3","s='4'"),cell_s("D2","4","s='4'"),cell_s("E2","5","s='4'")],20)
        +row_el(3,[cell_s("A3","6","s='0'"),cell_n("B3","8","s='9'"),cell_s("C3","7","s='0'"),cell_s("D3","8","s='0'")])
        +row_el(4,[cell_s("A4","9","s='0'"),cell_n("B4","8","s='9'"),cell_s("C4","10","s='0'"),cell_s("D4","11","s='0'")])
        +row_el(5,[cell_s("A5","12","s='0'"),cell_n("B5","8","s='9'"),cell_s("C5","13","s='0'"),cell_s("D5","14","s='0'")])
        +row_el(6,[cell_s("A6","15","s='0'"),cell_n("B6","8","s='9'"),cell_s("C6","16","s='0'"),cell_s("D6","17","s='0'")])
        +row_el(8,[cell_s("A8","18","s='4'"),cell_f("B8","IF(COUNTA(B3:B6)=0,\"\",AVERAGE(B3:B6))","s='6'"),cell_s("C8","19","s='0'"),cell_i("D8","","s='0'")])
    )
    ws1 = build_ws(cols1, rows1, freeze=' ySplit="2" topLeftCell="A3" activePane="bottomLeft" state="frozen"')
    with open(f"{work}/xl/worksheets/sheet1.xml", "w", encoding="utf-8") as f:
        f.write(ws1)

    # Sheet 2
    s2 = [
        "Kirkpatrick四级评估", "Level", "评估内容", "评估方法", "评估结果", "评估指标",
        "Level 1 反应", "学员对培训的满意程度", "课后问卷调查", "", "满意度评分(1-10)",
        "Level 2 学习", "学员知识技能的掌握程度", "前后测成绩对比", "", "知识掌握提升%",
        "Level 3 行为", "培训后行为改变程度", "30天行动计划跟踪", "", "行为改变评分(1-10)",
        "Level 4 结果", "培训对业务结果的影响", "直属上级评估/业绩对比", "", "业务影响评分(1-10)",
        "综合评估", "四级评估综合得分", "", "", "",
    ]
    with open(f"{work}/xl/sharedStrings.xml", "w", encoding="utf-8") as f:
        f.write(build_ss(s2))

    cols2 = build_cols([(1,1,16),(2,2,32),(3,3,24),(4,4,16),(5,5,18)])
    rows2 = (
        row_el(1,[cell_s("A1","0","s='4'")],28)
        +row_el(2,[cell_s("A2","1","s='4'"),cell_s("B2","2","s='4'"),cell_s("C2","3","s='4'"),cell_s("D2","4","s='4'"),cell_s("E2","5","s='4'")],20)
        +row_el(3,[cell_s("A3","6","s='4'"),cell_s("B3","7","s='0'"),cell_s("C3","8","s='0'"),cell_n("D3","8","s='9'"),cell_s("E3","9","s='0'")])
        +row_el(4,[cell_s("A4","10","s='4'"),cell_s("B4","11","s='0'"),cell_s("C4","12","s='0'"),cell_n("D4","8","s='9'"),cell_s("E4","13","s='0'")])
        +row_el(5,[cell_s("A5","14","s='4'"),cell_s("B5","15","s='0'"),cell_s("C5","16","s='0'"),cell_n("D5","8","s='9'"),cell_s("E5","17","s='0'")])
        +row_el(6,[cell_s("A6","18","s='4'"),cell_s("B6","19","s='0'"),cell_s("C6","20","s='0'"),cell_n("D6","8","s='9'"),cell_s("E6","21","s='0'")])
        +row_el(8,[cell_s("A8","22","s='4'"),cell_f("D8","IF(COUNTA(D3:D6)=0,\"\",AVERAGE(D3:D6))","s='6'"),cell_s("E8","23","s='0'")])
    )
    ws2 = build_ws(cols2, rows2, freeze=' ySplit="2" topLeftCell="A3" activePane="bottomLeft" state="frozen"')
    with open(f"{work}/xl/worksheets/sheet2.xml", "w", encoding="utf-8") as f:
        f.write(ws2)

    # Sheet 3
    s3 = [
        "ROI计算", "项目", "金额(元)", "说明",
        "培训成本", "", "", "",
        "讲师费用", "0", "外部讲师或内部讲师课酬", "",
        "场地设备", "0", "培训场地、投影、设备租赁", "",
        "教材资料", "0", "培训教材、印刷品等", "",
        "差旅费用", "0", "讲师和学员差旅费用", "",
        "其他费用", "0", "餐饮、茶歇等", "",
        "培训成本合计", "0", "SUM(讲师费用:其他费用)", "",
        "预期收益", "", "", "",
        "效率提升收益", "0", "预计每年效率提升带来的收益", "",
        "错误减少收益", "0", "预计错误减少节省的成本", "",
        "创新收益", "0", "预计创新带来的额外收益", "",
        "其他收益", "0", "其他可量化的收益", "",
        "预期收益合计", "0", "SUM(效率提升收益:其他收益)", "",
        "ROI", "0%", "ROI = (预期收益 - 培训成本) / 培训成本 * 100%", "",
        "投资回收期", "", "月", "培训成本 / (月度收益)", "",
    ]
    with open(f"{work}/xl/sharedStrings.xml", "w", encoding="utf-8") as f:
        f.write(build_ss(s3))

    cols3 = build_cols([(1,1,20),(2,2,16),(3,3,40)])
    rows3 = (
        row_el(1,[cell_s("A1","0","s='4'")],28)
        +row_el(2,[cell_s("A2","1","s='4'"),cell_s("B2","2","s='4'"),cell_s("C2","3","s='4'")],20)
        +row_el(3,[cell_s("A3","4","s='4'")])
        +row_el(4,[cell_s("A4","5","s='0'"),cell_n("B4","0","s='5'"),cell_s("C4","6","s='0'")])
        +row_el(5,[cell_s("A5","7","s='0'"),cell_n("B5","0","s='5'"),cell_s("C5","8","s='0'")])
        +row_el(6,[cell_s("A6","9","s='0'"),cell_n("B6","0","s='5'"),cell_s("C6","10","s='0'")])
        +row_el(7,[cell_s("A7","11","s='0'"),cell_n("B7","0","s='5'"),cell_s("C7","12","s='0'")])
        +row_el(8,[cell_s("A8","13","s='0'"),cell_n("B8","0","s='5'"),cell_s("C8","14","s='0'")])
        +row_el(9,[cell_s("A9","15","s='4'"),cell_f("B9","SUM(B4:B8)","s='6'"),cell_s("C9","16","s='0'")])
        +row_el(11,[cell_s("A11","17","s='4'")])
        +row_el(12,[cell_s("A12","18","s='0'"),cell_n("B12","0","s='5'"),cell_s("C12","19","s='0'")])
        +row_el(13,[cell_s("A13","20","s='0'"),cell_n("B13","0","s='5'"),cell_s("C13","21","s='0'")])
        +row_el(14,[cell_s("A14","22","s='0'"),cell_n("B14","0","s='5'"),cell_s("C14","23","s='0'")])
        +row_el(15,[cell_s("A15","24","s='0'"),cell_n("B15","0","s='5'"),cell_s("C15","25","s='0'")])
        +row_el(16,[cell_s("A16","26","s='4'"),cell_f("B16","SUM(B12:B15)","s='6'"),cell_s("C16","27","s='0'")])
        +row_el(18,[cell_s("A18","28","s='4'"),cell_f("B18","IF(B9=0,\"N/A\",TEXT((B16-B9)/B9,\"0.0%\"))","s='6'"),cell_s("C18","29","s='0'")])
        +row_el(19,[cell_s("A19","30","s='0'"),cell_f("B19","IF(B12=0,\"N/A\",TEXT(B9/(B16/12),\"0.0\"))","s='6'"),cell_s("C19","31","s='0'")])
    )
    ws3 = build_ws(cols3, rows3, freeze=' ySplit="2" topLeftCell="A3" activePane="bottomLeft" state="frozen"')
    with open(f"{work}/xl/worksheets/sheet3.xml", "w", encoding="utf-8") as f:
        f.write(ws3)

    # Sheet 4
    s4 = [
        "可视化看板", "关键指标", "数值", "目标值", "达成情况",
        "培训满意度", "", "8.0", "",
        "学习效果提升", "", "20%", "",
        "行为改变评分", "", "7.0", "",
        "业务影响评分", "", "6.0", "",
        "综合评分", "", "7.0", "",
        "ROI", "", "100%", "",
        "说明：图表数据基于以上各表自动汇总生成，填写各表数据后可自动更新", "", "", "",
    ]
    with open(f"{work}/xl/sharedStrings.xml", "w", encoding="utf-8") as f:
        f.write(build_ss(s4))

    cols4 = build_cols([(1,1,20),(2,2,16),(3,3,14),(4,3,14)])
    rows4 = (
        row_el(1,[cell_s("A1","0","s='4'")],28)
        +row_el(2,[cell_s("A2","1","s='4'"),cell_s("B2","2","s='4'"),cell_s("C2","3","s='4'"),cell_s("D2","4","s='4'")],20)
        +row_el(3,[cell_s("A3","5","s='0'"),cell_f("B3","总体评估!B3","s='6'"),cell_n("C3","8","s='9'"),cell_f("D3",'IF(B3="","",IF(B3>=C3,"达标","未达标"))',"s='0'")])
        +row_el(4,[cell_s("A4","6","s='0'"),cell_f("B4","总体评估!B4","s='6'"),cell_n("C4","20","s='7'"),cell_f("D4",'IF(B4="","",IF(B4>=20,"达标","未达标"))',"s='0'")])
        +row_el(5,[cell_s("A5","7","s='0'"),cell_f("B5","总体评估!B5","s='6'"),cell_n("C5","7","s='9'"),cell_f("D5",'IF(B5="","",IF(B5>=C5,"达标","未达标"))',"s='0'")])
        +row_el(6,[cell_s("A6","8","s='0'"),cell_f("B6","总体评估!B6","s='6'"),cell_n("C6","6","s='9'"),cell_f("D6",'IF(B6="","",IF(B6>=C6,"达标","未达标"))',"s='0'")])
        +row_el(7,[cell_s("A7","9","s='0'"),cell_f("B7","总体评估!B8","s='6'"),cell_n("C7","7","s='9'"),cell_f("D7",'IF(B7="","",IF(B7>=C7,"达标","未达标"))',"s='0'")])
        +row_el(8,[cell_s("A8","10","s='0'"),cell_f("B8","ROI计算!B18","s='6'"),cell_n("C8","1","s='7'"),cell_f("D8",'IF(B8="","",IF(VALUE(LEFT(B8,LEN(B8)-1))>=100,"达标","未达标"))',"s='0'")])
        +row_el(10,[cell_s("A10","11","s='0'")])
    )
    ws4 = build_ws(cols4, rows4, freeze=' ySplit="2" topLeftCell="A3" activePane="bottomLeft" state="frozen"')
    with open(f"{work}/xl/worksheets/sheet4.xml", "w", encoding="utf-8") as f:
        f.write(ws4)

    pack(work, f"{OUT_DIR}/05_培训效果综合分析表.xlsx")

# ══════════════════════════════════════════════════════════════════════════════
# FILE 7: 06_30天行动计划跟踪表.xlsx
# ══════════════════════════════════════════════════════════════════════════════
def create_06():
    print("Creating 06_30天行动计划跟踪表.xlsx...")
    work = "/tmp/w06"
    if os.path.exists(work):
        shutil.rmtree(work)
    shutil.copytree(TEMPLATE_DIR, work)

    s1 = [
        "30天行动计划跟踪表", "序号", "目标行为", "具体行动", "开始日期", "完成日期", "状态", "备注",
        "1", "", "", "", "", "", "进行中", "",
        "2", "", "", "", "", "", "进行中", "",
        "3", "", "", "", "", "", "进行中", "",
        "4", "", "", "", "", "", "进行中", "",
        "5", "", "", "", "", "", "进行中", "",
        "完成统计", "已完成", "进行中", "未开始",
    ]

    with open(f"{work}/xl/sharedStrings.xml", "w", encoding="utf-8") as f:
        f.write(build_ss(s1))
    with open(f"{work}/xl/workbook.xml", "w", encoding="utf-8") as f:
        f.write(build_wb(["行动计划", "每周检查点", "习惯追踪", "效果总结"]))
    with open(f"{work}/xl/_rels/workbook.xml.rels", "w", encoding="utf-8") as f:
        f.write(build_wb_rels(4))
    with open(f"{work}/[Content_Types].xml", "w", encoding="utf-8") as f:
        f.write(build_ct(4))
    with open(f"{work}/xl/styles.xml", "w", encoding="utf-8") as f:
        f.write(build_styles())

    # Sheet 1
    cols1 = build_cols([(1,1,8),(2,2,24),(3,3,36),(4,4,14),(5,5,14),(6,6,14),(7,7,12),(8,8,20)])
    rows1 = (
        row_el(1,[cell_s("A1","0","s='4'")],28)
        +row_el(2,[cell_s("A2","1","s='4'"),cell_s("B2","2","s='4'"),cell_s("C2","3","s='4'"),cell_s("D2","4","s='4'"),cell_s("E2","5","s='4'"),cell_s("F2","6","s='4'"),cell_s("G2","7","s='4'")],20)
    )
    for i in range(1, 6):
        r = i + 2
        rows1 += row_el(r,[
            cell_s(f"A{r}",str(i),"s='9'"),
            cell_i(f"B{r}","","s='0'"),
            cell_i(f"C{r}","","s='0'"),
            cell_i(f"D{r}","","s='0'"),
            cell_i(f"E{r}","","s='0'"),
            cell_i(f"F{r}","进行中","s='1'"),
            cell_i(f"G{r}","","s='0'"),
        ])
    rows1 += (
        row_el(8,[cell_s("A8","8","s='4'"),cell_f("B8","COUNTIF(G3:G7,\"已完成\")","s='9'"),cell_f("C8","COUNTIF(G3:G7,\"进行中\")","s='9'"),cell_f("D8","COUNTIF(G3:G7,\"未开始\")","s='9'")])
    )
    ws1 = build_ws(cols1, rows1, freeze=' ySplit="2" topLeftCell="A3" activePane="bottomLeft" state="frozen"')
    with open(f"{work}/xl/worksheets/sheet1.xml", "w", encoding="utf-8") as f:
        f.write(ws1)

    # Sheet 2
    s2 = [
        "每周检查点", "周次", "完成情况", "主要成果", "遇到的问题", "改进措施",
        "第一周", "", "", "", "",
        "第二周", "", "", "", "",
        "第三周", "", "", "", "",
        "第四周", "", "", "", "",
        "周度总结", "", "", "", "",
    ]
    with open(f"{work}/xl/sharedStrings.xml", "w", encoding="utf-8") as f:
        f.write(build_ss(s2))

    cols2 = build_cols([(1,1,12),(2,2,14),(3,3,36),(4,4,36),(5,5,28)])
    rows2 = (
        row_el(1,[cell_s("A1","0","s='4'")],28)
        +row_el(2,[cell_s("A2","1","s='4'"),cell_s("B2","2","s='4'"),cell_s("C2","3","s='4'"),cell_s("D2","4","s='4'"),cell_s("E2","5","s='4'")],20)
        +row_el(3,[cell_s("A3","6","s='4'"),cell_i("B3","","s='0'"),cell_i("C3","","s='0'"),cell_i("D3","","s='0'"),cell_i("E3","","s='0'")])
        +row_el(4,[cell_s("A4","7","s='4'"),cell_i("B4","","s='0'"),cell_i("C4","","s='0'"),cell_i("D4","","s='0'"),cell_i("E4","","s='0'")])
        +row_el(5,[cell_s("A5","8","s='4'"),cell_i("B5","","s='0'"),cell_i("C5","","s='0'"),cell_i("D5","","s='0'"),cell_i("E5","","s='0'")])
        +row_el(6,[cell_s("A6","9","s='4'"),cell_i("B6","","s='0'"),cell_i("C6","","s='0'"),cell_i("D6","","s='0'"),cell_i("E6","","s='0'")])
        +row_el(8,[cell_s("A8","10","s='4'"),cell_i("B8","","s='0'"),cell_i("C8","","s='0'"),cell_i("D8","","s='0'"),cell_i("E8","","s='0'")])
    )
    ws2 = build_ws(cols2, rows2, freeze=' ySplit="2" topLeftCell="A3" activePane="bottomLeft" state="frozen"')
    with open(f"{work}/xl/worksheets/sheet2.xml", "w", encoding="utf-8") as f:
        f.write(ws2)

    # Sheet 3
    s3 = [
        "习惯追踪", "日期", "打卡", "备注",
        "第1天", "", "完成/未完成", "",
        "第2天", "", "完成/未完成", "",
        "第3天", "", "完成/未完成", "",
        "第4天", "", "完成/未完成", "",
        "第5天", "", "完成/未完成", "",
        "第6天", "", "完成/未完成", "",
        "第7天", "", "完成/未完成", "",
        "第8天", "", "完成/未完成", "",
        "第9天", "", "完成/未完成", "",
        "第10天", "", "完成/未完成", "",
        "第11天", "", "完成/未完成", "",
        "第12天", "", "完成/未完成", "",
        "第13天", "", "完成/未完成", "",
        "第14天", "", "完成/未完成", "",
        "第15天", "", "完成/未完成", "",
        "第16天", "", "完成/未完成", "",
        "第17天", "", "完成/未完成", "",
        "第18天", "", "完成/未完成", "",
        "第19天", "", "完成/未完成", "",
        "第20天", "", "完成/未完成", "",
        "第21天", "", "完成/未完成", "",
        "21天完成率", "", "", "=COUNTIF(B3:B23,\"完成\")/21",
    ]
    with open(f"{work}/xl/sharedStrings.xml", "w", encoding="utf-8") as f:
        f.write(build_ss(s3))

    cols3 = build_cols([(1,1,12),(2,2,16),(3,3,18),(4,3,36)])
    rows3 = (
        row_el(1,[cell_s("A1","0","s='4'")],28)
        +row_el(2,[cell_s("A2","1","s='4'"),cell_s("B2","2","s='4'"),cell_s("C2","3","s='4'")],20)
    )
    for i in range(1, 22):
        r = i + 2
        rows3 += row_el(r,[cell_s(f"A{r}",str(i+2),"s='0'"),cell_i(f"B{r}","","s='0'"),cell_i(f"C{r}","完成/未完成","s='1'"),cell_i(f"D{r}","","s='0'")])
    rows3 += row_el(24,[cell_s("A24","25","s='4'"),cell_f("B24",'COUNTIF(C3:C23,"完成")',"s='9'"),cell_f("C24","TEXT(B24/21,\"0.0%\"))","s='6'"),cell_i("D24","","s='0'")])
    ws3 = build_ws(cols3, rows3, freeze=' ySplit="2" topLeftCell="A3" activePane="bottomLeft" state="frozen"')
    with open(f"{work}/xl/worksheets/sheet3.xml", "w", encoding="utf-8") as f:
        f.write(ws3)

    # Sheet 4
    s4 = [
        "效果总结", "目标达成情况", "遇到的挑战", "解决方法", "经验总结",
        "目标1", "", "", "", "",
        "目标2", "", "", "", "",
        "目标3", "", "", "", "",
        "总体评价", "", "", "", "",
        "成功关键因素", "", "", "", "",
        "可改进之处", "", "", "", "",
        "后续行动计划", "", "", "", "",
    ]
    with open(f"{work}/xl/sharedStrings.xml", "w", encoding="utf-8") as f:
        f.write(build_ss(s4))

    cols4 = build_cols([(1,1,16),(2,2,28),(3,3,28),(4,3,28),(5,5,28)])
    rows4 = (
        row_el(1,[cell_s("A1","0","s='4'")],28)
        +row_el(2,[cell_s("A2","1","s='4'"),cell_s("B2","2","s='4'"),cell_s("C2","3","s='4'"),cell_s("D2","4","s='4'"),cell_s("E2","5","s='4'")],20)
        +row_el(3,[cell_s("A3","6","s='4'"),cell_i("B3","","s='0'"),cell_i("C3","","s='0'"),cell_i("D3","","s='0'"),cell_i("E3","","s='0'")])
        +row_el(4,[cell_s("A4","7","s='4'"),cell_i("B4","","s='0'"),cell_i("C4","","s='0'"),cell_i("D4","","s='0'"),cell_i("E4","","s='0'")])
        +row_el(5,[cell_s("A5","8","s='4'"),cell_i("B5","","s='0'"),cell_i("C5","","s='0'"),cell_i("D5","","s='0'"),cell_i("E5","","s='0'")])
        +row_el(7,[cell_s("A7","9","s='4'"),cell_i("B7","","s='0'"),cell_i("C7","","s='0'"),cell_i("D7","","s='0'"),cell_i("E7","","s='0'")])
        +row_el(9,[cell_s("A9","10","s='4'"),cell_i("B9","","s='0'"),cell_i("C9","","s='0'"),cell_i("D9","","s='0'"),cell_i("E9","","s='0'")])
        +row_el(10,[cell_s("A10","11","s='4'"),cell_i("B10","","s='0'"),cell_i("C10","","s='0'"),cell_i("D10","","s='0'"),cell_i("E10","","s='0'")])
        +row_el(12,[cell_s("A12","12","s='4'"),cell_i("B12","","s='0'"),cell_i("C12","","s='0'"),cell_i("D12","","s='0'"),cell_i("E12","","s='0'")])
    )
    ws4 = build_ws(cols4, rows4, freeze=' ySplit="2" topLeftCell="A3" activePane="bottomLeft" state="frozen"')
    with open(f"{work}/xl/worksheets/sheet4.xml", "w", encoding="utf-8") as f:
        f.write(ws4)

    pack(work, f"{OUT_DIR}/06_30天行动计划跟踪表.xlsx")

# ══════════════════════════════════════════════════════════════════════════════
# RUN ALL
# ══════════════════════════════════════════════════════════════════════════════
if __name__ == "__main__":
    create_00()
    create_01()
    create_02()
    create_03()
    create_04()
    create_05()
    create_06()
    print("\nAll 7 files created successfully!")
