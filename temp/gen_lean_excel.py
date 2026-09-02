#!/usr/bin/env python3
"""Generate 6 精益管理 Excel tool form files."""
import os, zipfile, shutil
from pathlib import Path

OUTPUT_DIR = Path("D:/新课开发/职能通用/精益管理/完整课程包/06-工具表单")
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
WORK_DIR = Path("/tmp/lean_xlsx_work")
WORK_DIR.mkdir(parents=True, exist_ok=True)

# ─── XML builders ────────────────────────────────────────────────────────────
def build_ss(strings):
    uniq, cmap = [], {}
    for s in strings:
        if s not in cmap:
            cmap[s] = len(uniq); uniq.append(s)
        cmap[s] += 1
    items = "".join(
        f'  <si><t>{s.replace("&","&amp;").replace("<","&lt;").replace(">","&gt;")}</t></si>\n'
        for s in uniq
    )
    return (
        f'<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n'
        f'<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" '
        f'count="{sum(cmap.values())}" uniqueCount="{len(uniq)}">\n'
        f'{items}</sst>'
    )

STYLES = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <numFmts count="4">
    <numFmt numFmtId="164" formatCode="$#,##0;($#,##0);&quot;-&quot;"/>
    <numFmt numFmtId="165" formatCode="0.0%"/>
    <numFmt numFmtId="166" formatCode="0.0x"/>
    <numFmt numFmtId="167" formatCode="#,##0"/>
  </numFmts>
  <fonts count="5">
    <font><sz val="11"/><name val="Calibri"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="000000FF"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="00000000"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="00008000"/></font>
    <font><sz val="12"/><name val="Calibri"/><b/><color rgb="00FFFFFF"/></font>
  </fonts>
  <fills count="3">
    <fill><patternFill patternType="none"/></fill>
    <fill><patternFill patternType="gray125"/></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="00C00000"/><bgColor indexed="64"/></patternFill></fill>
  </fills>
  <borders count="1">
    <border><left/><right/><top/><bottom/><diagonal/></border>
  </borders>
  <cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>
  <cellXfs count="13">
    <xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/>
    <xf numFmtId="0" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1"/>
    <xf numFmtId="0" fontId="2" fillId="0" borderId="0" xfId="0" applyFont="1"/>
    <xf numFmtId="0" fontId="3" fillId="0" borderId="0" xfId="0" applyFont="1"/>
    <xf numFmtId="0" fontId="4" fillId="2" borderId="0" xfId="0" applyFont="1" applyFill="1"/>
    <xf numFmtId="164" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>
    <xf numFmtId="164" fontId="2" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>
    <xf numFmtId="165" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>
    <xf numFmtId="165" fontId="2" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>
    <xf numFmtId="167" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>
    <xf numFmtId="167" fontId="2" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>
    <xf numFmtId="1" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>
    <xf numFmtId="0" fontId="1" fillId="2" borderId="0" xfId="0" applyFont="1" applyFill="1"/>
  </cellXfs>
</styleSheet>'''

def workbook_xml(names):
    sheets = "".join(
        f'    <sheet name="{n.replace("&","&amp;")}" sheetId="{i}" r:id="rId{i}"/>\n'
        for i, n in enumerate(names, 1)
    )
    return (
        f'<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n'
        f'<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" '
        f'xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">\n'
        f'  <fileVersion appName="xl" lastEdited="7" lowestEdited="7"/>\n'
        f'  <workbookPr defaultThemeVersion="166925"/>\n'
        f'  <bookViews><workbookView xWindow="0" yWindow="0" windowWidth="20140" windowHeight="10960"/></bookViews>\n'
        f'  <sheets>\n{sheets}  </sheets>\n'
        f'  <calcPr calcId="191029"/>\n'
        f'</workbook>'
    )

def wb_rels(n):
    r = (
        '  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>\n'
        '  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>\n'
        '  <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml"/>\n'
    )
    for i in range(2, n + 1):
        r += f'  <Relationship Id="rId{i+1}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet{i}.xml"/>\n'
    return f'<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">\n{r}</Relationships>'

def ct_xml(n):
    o = (
        '  <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>\n'
        '  <Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>\n'
        '  <Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/>\n'
    )
    for i in range(1, n + 1):
        o += f'  <Override PartName="/xl/worksheets/sheet{i}.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>\n'
    return f'<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">\n  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>\n  <Default Extension="xml" ContentType="application/xml"/>\n{o}</Types>'

RELS = (
    '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n'
    '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">\n'
    '  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/>\n'
    '</Relationships>'
)

def col_ref(row, col):
    """Convert (1-based row, 1-based col) to cell address like B5."""
    letters = ""
    while col > 0:
        col, rem = divmod(col - 1, 26)
        letters = chr(65 + rem) + letters
    return f"{letters}{row}"

def cell_s(addr, style, v=None, formula=None):
    if formula:
        return f'<c r="{addr}" s="{style}"><f>{formula}</f><v></v></c>'
    if v is not None:
        return f'<c r="{addr}" s="{style}" t="s"><v>{v}</v></c>'
    return f'<c r="{addr}" s="{style}"/>'

def cell_n(addr, style, v):
    return f'<c r="{addr}" s="{style}"><v>{v}</v></c>'

def build_ws(cols_cfg, row_data, freeze=None):
    col_xml = "  <cols>\n"
    col_xml += "".join(f'  <col min="{m}" max="{M}" width="{w}" customWidth="1"/>\n' for m, M, w in cols_cfg)
    col_xml += "  </cols>\n"
    freeze_xml = ""
    if freeze:
        freeze_xml = f'  <pane ySplit="{freeze}" topLeftCell="A{freeze+1}" activePane="bottomLeft" state="frozen"/>\n'
    rows_xml = ""
    for r, cells in row_data:
        rows_xml += f"  <row r=\"{r}\">\n"
        rows_xml += "".join(f"    {c}\n" for c in cells)
        rows_xml += "  </row>\n"
    return (
        f'<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n'
        f'<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" '
        f'xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">\n'
        f'  <sheetViews>\n    <sheetView tabSelected="1" workbookViewId="0">\n'
        f'{freeze_xml}    </sheetView>\n  </sheetViews>\n'
        f'  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" '
        f'xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>\n'
        f'{col_xml}  <sheetData>\n{rows_xml}  </sheetData>\n'
        f'  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>\n'
        f'</worksheet>'
    )

def pack_xlsx(xlsx_name, sheet_names, ws_list, sst_content):
    wb = workbook_xml(sheet_names)
    br = wb_rels(len(sheet_names))
    ct = ct_xml(len(sheet_names))
    path = WORK_DIR / xlsx_name
    with zipfile.ZipFile(path, "w", zipfile.ZIP_DEFLATED) as zf:
        zf.writestr("[Content_Types].xml", ct)
        zf.writestr("_rels/.rels", RELS)
        zf.writestr("xl/workbook.xml", wb)
        zf.writestr("xl/_rels/workbook.xml.rels", br)
        zf.writestr("xl/styles.xml", STYLES)
        zf.writestr("xl/sharedStrings.xml", sst_content)
        for i, ws in enumerate(ws_list, 1):
            zf.writestr(f"xl/worksheets/sheet{i}.xml", ws)
    return path

# ─── Helpers to build rows ────────────────────────────────────────────────────
def hdr_row(row_num, headers, idx):
    return (row_num, [cell_s(col_ref(row_num, c), 4, idx.get(h, 0)) for c, h in enumerate(headers, 1)])

def data_row(row_num, values, idx, start_col=1):
    cells = []
    for c, val in enumerate(values, start_col):
        addr = col_ref(row_num, c)
        if isinstance(val, str):
            if val.startswith("="):
                cells.append(cell_s(addr, 2, formula=val[1:]))
            else:
                cells.append(cell_s(addr, 1, idx.get(val, 0)))
        elif isinstance(val, (int, float)):
            cells.append(cell_n(addr, 2, val))
        else:
            cells.append(cell_s(addr, 1, 0))
    return (row_num, cells)

# ════════════════════════════════════════════════════════════════════════════════
# FILE 1: 精益管理_Day1_浪费识别与业务画卷诊断.xlsx
# ════════════════════════════════════════════════════════════════════════════════
def create_file1():
    S = [
        "精益管理工具表单", "课程名称：精益管理", "版本：完整版 v2.0",
        "浪费识别与业务画卷诊断", "七种浪费识别+业务画卷绘制+OEE计算+优先改善矩阵", "Day1 上午",
        "序号", "浪费类型", "日语", "定义", "典型场景", "位置/场景", "是否存在(是/否)", "严重程度(轻/中/重)", "判断理由",
        "工序编号", "工序名称", "进料形态", "出料形态", "C/T(秒/件)", "C/O(分钟)", "操作员数", "备注",
        "计算项目", "计算公式", "数据", "结果",
        "计划运行时间", "实际运行时间", "理论产能", "实际产量", "合格品数量",
        "可用率", "性能率", "良品率", "OEE", "OEE计算表",
        "优先改善矩阵",
    ]
    I = {s: i for i, s in enumerate(S)}

    # ── Cover ──────────────────────────────────────────────────────────────
    cover_rows = [
        (1, [cell_s("A1", 4, I["精益管理工具表单"])]),
        (2, [cell_s("A2", 4, I["课程名称：精益管理"])]),
        (3, [cell_s("A3", 4, I["版本：完整版 v2.0"])]),
        (5, [cell_s("A5", 4, I["浪费识别与业务画卷诊断"])]),
        (6, [cell_s("A6", 4, I["七种浪费识别+业务画卷绘制+OEE计算+优先改善矩阵"])]),
        (7, [cell_s("A7", 4, I["Day1 上午"])]),
    ]
    cover_ws = build_ws([(1, 1, 8), (2, 2, 70)], cover_rows)

    # ── TOC ───────────────────────────────────────────────────────────────
    toc_data = [
        ("浪费识别表", "Day1-上午", "识别产线七种浪费，评估严重程度"),
        ("业务画卷绘制", "Day1-上午", "记录工序参数，绘制价值流现状图"),
        ("OEE计算表", "Day1-上午", "计算设备综合效率，识别六大损失"),
        ("优先改善矩阵", "Day1-上午", "综合评分排序，确定改善优先级"),
    ]
    toc_rows = [hdr_row(1, ["目录", "序号", "表单名称", "所属模块", "功能说明"], I)]
    for i, (n, m, d) in enumerate(toc_data, 2):
        toc_rows.append(data_row(i, [i, n, m, d, ""], I))
    toc_ws = build_ws([(1,1,5),(2,2,30),(3,3,20),(4,4,50)], toc_rows, freeze=1)

    # ── 浪费识别表 ───────────────────────────────────────────────────────
    waste_types = [
        ("等待浪费", "Mutsuda", "人员或设备处于空闲状态", "操作员站在设备旁等待/设备运转但无产出"),
        ("搬运浪费", "Hakobi", "不产生价值的物料移动", "物料搬运距离远、次数多"),
        ("不良浪费", "Shuryo", "产品不符合质量标准", "不良率超标、返工、报废"),
        ("动作浪费", "Shigoto", "操作员多余肢体动作", "走路多、伸手多、转身多"),
        ("库存浪费", "Zaiko", "过多WIP或成品堆积", "在制品多、库存周转慢"),
        ("加工过量", "Muri", "超出客户需求的质量/数量", "精度过高、批量过大"),
        ("生产过剩", "Over-production", "比需求早或多生产", "预测性生产、仓库越来越满"),
    ]
    waste_rows = [hdr_row(1, ["序号","浪费类型","日语","定义","典型场景","位置/场景","是否存在","严重程度","判断理由"], I)]
    for i, (wt, jp, df, sc) in enumerate(waste_types, 2):
        waste_rows.append(data_row(i, [i, wt, jp, df, sc, "","请选择","请选择",""], I))
    waste_ws = build_ws(
        [(1,1,5),(2,2,15),(3,3,12),(4,4,25),(5,5,32),(6,6,22),(7,7,12),(8,8,12),(9,9,32)],
        waste_rows, freeze=1
    )

    # ── 业务画卷绘制 ─────────────────────────────────────────────────────
    vsm_rows = [hdr_row(1, ["工序编号","工序名称","进料形态","出料形态","C/T(秒/件)","C/O(分钟)","操作员数","备注"], I)]
    for i in range(2, 12):
        vsm_rows.append(data_row(i, [f"P-{i-1:02d}","","","","","","",""], I))
    vsm_ws = build_ws(
        [(1,1,10),(2,2,18),(3,3,18),(4,4,18),(5,5,13),(6,6,13),(7,7,10),(8,8,28)],
        vsm_rows, freeze=1
    )

    # ── OEE计算表 ────────────────────────────────────────────────────────
    oee_rows = [
        (1, [cell_s("A1", 4, I["OEE计算表"])]),
        hdr_row(3, ["计算项目", "计算公式", "数据", "结果"], I),
        data_row(4, [I["计划运行时间"], "班次-计划停机", "", ""], I),
        data_row(5, [I["实际运行时间"], "计划运行-实际停机", "", ""], I),
        data_row(6, [I["理论产能"], "运行时间×标准节拍", "", ""], I),
        data_row(7, [I["实际产量"], "实际产出数量", "", ""], I),
        data_row(8, [I["合格品数量"], "实际产量-不良品", "", ""], I),
        (10, [cell_s("A10", 4, I["可用率"]), cell_s("B10", 2, I["实际运行时间÷计划运行时间"]), cell_n("C10", 1, 0), cell_s("D10", 2, "")]),
        (11, [cell_s("A11", 4, I["性能率"]), cell_s("B11", 2, I["实际产量÷理论产能"]), cell_n("C11", 1, 0), cell_s("D11", 2, "")]),
        (12, [cell_s("A12", 4, I["良品率"]), cell_s("B12", 2, I["合格品数量÷实际产量"]), cell_n("C12", 1, 0), cell_s("D12", 2, "")]),
        (13, [cell_s("A13", 4, I["OEE"]), cell_s("B13", 2, I["可用率×性能率×良品率"]), cell_n("C13", 1, 0), cell_s("D13", 2, "")]),
        (14, [cell_s("D10", 8, formula="IF(C4=0,0,C5/C4)"), cell_s("D11", 8, formula="IF(C6=0,0,C7/C6)"), cell_s("D12", 8, formula="IF(C7=0,0,C8/C7)"), cell_s("D13", 8, formula="D10*D11*D12")]),
    ]
    oee_ws = build_ws([(1,1,22),(2,2,25),(3,3,15),(4,4,15)], oee_rows)

    # ── 优先改善矩阵 ─────────────────────────────────────────────────────
    matrix_rows = [hdr_row(1, ["序号","浪费类型","位置/场景","严重程度(1-5)","发生频率(1-5)","改善难度(1-5)","综合分值","优先级","备注"], I)]
    for i in range(2, 9):
        r = data_row(i, [i-1, "","","","","","",""], I)
        r[1][6] = cell_s(col_ref(i, 7), 8, formula=f"D{i}*0.4+E{i}*0.3+F{i}*0.3")
        matrix_rows.append(r)
    matrix_ws = build_ws(
        [(1,1,5),(2,2,15),(3,3,28),(4,4,13),(5,5,13),(6,6,13),(7,7,10),(8,8,10),(9,9,28)],
        matrix_rows, freeze=1
    )

    sheet_names = ["封面", "目录", "浪费识别表", "业务画卷绘制", "OEE计算表", "优先改善矩阵"]
    ws_list = [cover_ws, toc_ws, waste_ws, vsm_ws, oee_ws, matrix_ws]
    path = pack_xlsx("精益管理_Day1_浪费识别与业务画卷诊断.xlsx", sheet_names, ws_list, build_ss(S))
    print(f"Created: {path.name}")
    return path

# ════════════════════════════════════════════════════════════════════════════════
# FILE 2: 精益管理_Day1_精益工具实操.xlsx
# ════════════════════════════════════════════════════════════════════════════════
def create_file2():
    S = [
        "精益管理工具表单", "课程名称：精益管理", "版本：完整版 v2.0",
        "精益工具实操工作表",
        "序号", "工位名称", "客户需求节拍", "信号触发点", "信号类型", "信号内容", "补充说明",
        "步骤", "具体动作", "时间(分钟)", "内/外部", "改善方向", "责任人",
        "当前总时间", "目标总时间", "改善幅度",
        "核心动作", "完成标准", "自检(√/×)", "问题记录",
        "Why层级", "问题描述", "回答", "是否根因",
        "类别", "具体原因", "影响程度(高/中/低)",
        "内部作业", "外部作业", "内部→外部转化", "并行化处理",
        "节拍时间(秒)", "换产时间现状(分钟)", "改善后目标(分钟)",
    ]
    I = {s: i for i, s in enumerate(S)}

    cover_rows = [
        (1, [cell_s("A1", 4, I["精益管理工具表单"])]),
        (2, [cell_s("A2", 4, I["课程名称：精益管理"])]),
        (3, [cell_s("A3", 4, I["版本：完整版 v2.0"])]),
        (5, [cell_s("A5", 4, I["精益工具实操工作表"])]),
    ]
    cover_ws = build_ws([(1, 1, 8), (2, 2, 55)], cover_rows)

    # Pull signal
    pull_rows = [hdr_row(1, ["序号","工位名称","客户需求节拍","信号触发点","信号类型","信号内容","补充说明"], I)]
    for i in range(2, 12):
        pull_rows.append(data_row(i, [i-1,"","","","","",""], I))
    pull_ws = build_ws([(1,1,5),(2,2,18),(3,3,15),(4,4,20),(5,5,12),(6,6,22),(7,7,22)], pull_rows, freeze=1)

    # SMED
    smed_rows = [hdr_row(1, ["步骤","具体动作","时间(分钟)","内/外部","改善方向","责任人"], I)]
    smed_rows.append((2, [cell_s("A2", 4, I["第一步：现状动作分解"])] + [cell_s(col_ref(2, c), 1, 0) for c in range(2, 7)]))
    for i in range(3, 13):
        smed_rows.append(data_row(i, [i-2, "","","内部/外部","",""], I))
    smed_rows.append((13, [cell_s("A13", 4, I["当前总时间"]), cell_s("C13", 6, formula="SUM(C3:C12)"), cell_s("D13", 1, 0), cell_s("E13", 1, 0), cell_s("F13", 1, 0), cell_s("G13", 1, 0)]))
    smed_rows.append((15, [cell_s("A15", 4, I["第二步：外部作业优化"])] + [cell_s(col_ref(15, c), 1, 0) for c in range(2, 7)]))
    for i in range(16, 21):
        smed_rows.append(data_row(i, [i-15, "","","", "", ""], I))
    smed_rows.append((22, [cell_s("A22", 4, I["目标总时间"]), cell_n("C22", 1, 0)]))
    smed_ws = build_ws([(1,1,5),(2,2,32),(3,3,13),(4,4,12),(5,5,28),(6,6,15)], smed_rows, freeze=1)

    # Autonomous maintenance 7-step
    atz_data = [
        ("步骤1", "初期清扫", "设备表面无灰尘油污，发现3个以上异常点"),
        ("步骤2", "发生源对策", "脏污不再反复产生"),
        ("步骤3", "困难源对策", "清扫困难点变得容易清扫"),
        ("步骤4", "制定基准", "基准书张贴在设备旁"),
        ("步骤5", "总点检", "操作工能说出关键部件名称和作用"),
        ("步骤6", "自主点检", "点检执行率≥95%"),
        ("步骤7", "持续改善", "每季度至少更新一次基准"),
    ]
    atz_rows = [hdr_row(1, ["步骤","核心动作","完成标准","自检(√/×)","问题记录","负责人","完成日期"], I)]
    for i, (step, action, std) in enumerate(atz_data, 2):
        atz_rows.append(data_row(i, [step, action, std, "","","",""], I))
    atz_ws = build_ws([(1,1,10),(2,2,20),(3,3,38),(4,4,12),(5,5,28),(6,6,12),(7,7,15)], atz_rows, freeze=1)

    # 5Why
    why_rows = [hdr_row(1, ["Why层级","问题描述","回答","是否根因"], I)]
    for i, wl in enumerate(["Why 1","Why 2","Why 3","Why 4","Why 5（根因）"], 2):
        why_rows.append(data_row(i, [wl, "", "", ""], I))
    why_rows.append(data_row(8, ["对应对策", "", "", ""], I))
    why_ws = build_ws([(1,1,12),(2,2,42),(3,3,42),(4,4,15)], why_rows, freeze=1)

    # Fishbone
    fish_data = ["人(Man)","机器(Machine)","材料(Material)","方法(Method)","环境(Environment)","测量(Measurement)"]
    fish_rows = [hdr_row(1, ["类别","具体原因","影响程度(高/中/低)"], I)]
    for i, cat in enumerate(fish_data, 2):
        fish_rows.append(data_row(i, [cat, "", ""], I))
    fish_rows.append(data_row(9, ["问题描述（鱼头）", "", ""], I))
    fish_ws = build_ws([(1,1,22),(2,2,58),(3,3,22)], fish_rows, freeze=1)

    sheet_names = ["封面","拉动信号设计表","SMED分析表","自主保全七步法检查表","5Why分析表","鱼骨图模板"]
    ws_list = [cover_ws, pull_ws, smed_ws, atz_ws, why_ws, fish_ws]
    path = pack_xlsx("精益管理_Day1_精益工具实操.xlsx", sheet_names, ws_list, build_ss(S))
    print(f"Created: {path.name}")
    return path

# ════════════════════════════════════════════════════════════════════════════════
# FILE 3: 精益管理_Day2_专业保全与产线效率.xlsx
# ════════════════════════════════════════════════════════════════════════════════
def create_file3():
    S = [
        "精益管理工具表单", "课程名称：精益管理", "版本：完整版 v2.0",
        "专业保全与产线效率",
        "月份", "设备/产线", "计划运行时间(h)", "实际运行时间(h)", "理论产量(件)", "实际产量(件)", "合格品(件)", "可用率(%)", "性能率(%)", "良品率(%)", "OEE(%)", "最大损失来源", "改善动作",
        "损失类型", "现象描述", "损失时间/数量", "占总损失比例(%)", "根本原因", "可快速改善?",
        "工序", "C/T(秒/件)", "操作员数", "备注",
        "日期", "设备编号", "故障停机时间(分钟)", "修复时间(分钟)", "MTBF(小时)", "MTTR(分钟)",
        "阶段", "改善主题", "目标指标", "当前值", "目标值", "关键动作", "负责人", "完成时间",
        "最长工序时间", "产线平衡率",
    ]
    I = {s: i for i, s in enumerate(S)}

    cover_rows = [
        (1, [cell_s("A1", 4, I["精益管理工具表单"])]),
        (2, [cell_s("A2", 4, I["课程名称：精益管理"])]),
        (3, [cell_s("A3", 4, I["版本：完整版 v2.0"])]),
        (5, [cell_s("A5", 4, I["专业保全与产线效率"])]),
    ]
    cover_ws = build_ws([(1,1,8),(2,2,55)], cover_rows)

    # OEE月报
    hdrs = ["月份","设备/产线","计划运行时间(h)","实际运行时间(h)","理论产量(件)","实际产量(件)","合格品(件)","可用率(%)","性能率(%)","良品率(%)","OEE(%)","最大损失来源","改善动作"]
    oee_rows = [hdr_row(1, hdrs, I)]
    for i in range(2, 14):
        r_data = ["", "", 0, 0, 0, 0, 0, "", "", "", "", "", ""]
        oee_rows.append(data_row(i, r_data, I))
        oee_rows[-1][1][7] = cell_s(col_ref(i, 8), 8, formula=f"IF(C{i}=0,0,D{i}/C{i})")
        oee_rows[-1][1][8] = cell_s(col_ref(i, 9), 8, formula=f"IF(E{i}=0,0,F{i}/E{i})")
        oee_rows[-1][1][9] = cell_s(col_ref(i, 10), 8, formula=f"IF(F{i}=0,0,G{i}/F{i})")
        oee_rows[-1][1][10] = cell_s(col_ref(i, 11), 8, formula=f"H{i}*I{i}*J{i}")
    oee_ws = build_ws(
        [(1,1,8),(2,2,18),(3,3,16),(4,4,16),(5,5,14),(6,6,14),(7,7,12),(8,8,10),(9,9,10),(10,10,10),(11,11,10),(12,12,20),(13,13,28)],
        oee_rows, freeze=1
    )

    # 六大损失
    loss_hdrs = ["损失类型","现象描述","损失时间/数量","占总损失比例(%)","根本原因","可快速改善?"]
    loss_types = ["设备故障停机","换产/换模停机","空转/小停顿","速度降低","不良/返工","启动废品","合计"]
    loss_rows = [hdr_row(1, loss_hdrs, I)]
    for i, lt in enumerate(loss_types, 2):
        r = data_row(i, [lt, "","","", "", ""], I)
        if lt == "合计":
            r[1][3] = cell_s(col_ref(i, 4), 6, formula="SUM(D3:D8)")
        else:
            r[1][3] = cell_s(col_ref(i, 4), 8, formula=f"C{i}/C9")
        loss_rows.append(r)
    loss_ws = build_ws([(1,1,18),(2,2,32),(3,3,18),(4,4,16),(5,5,32),(6,6,16)], loss_rows, freeze=1)

    # 产线平衡
    lb_rows = [hdr_row(1, ["工序","C/T(秒/件)","操作员数","备注"], I)]
    for i in range(2, 12):
        lb_rows.append(data_row(i, [f"工序{i-1}","","",""], I))
    lb_rows.append((12, [cell_s("A12", 1, I["最长工序时间"]), cell_s("B12", 8, formula="MAX(B2:B11)"), cell_s("C12", 1, 0), cell_s("D12", 1, 0)]))
    lb_rows.append((13, [cell_s("A13", 1, I["产线平衡率"]), cell_s("B13", 8, formula="SUM(B2:B11)/(B12*COUNTA(B2:B11))"), cell_s("C13", 1, 0), cell_s("D13", 1, 0)]))
    lb_ws = build_ws([(1,1,12),(2,2,16),(3,3,12),(4,4,32)], lb_rows, freeze=1)

    # MTBF/MTTR
    mt_hdrs = ["日期","设备编号","故障停机时间(分钟)","修复时间(分钟)","MTBF(小时)","MTTR(分钟)","备注"]
    mt_rows = [hdr_row(1, mt_hdrs, I)]
    for i in range(2, 22):
        mt_rows.append(data_row(i, ["","",0,0,"","",""], I))
        mt_rows[-1][1][4] = cell_s(col_ref(i, 5), 8, formula=f"IF(C{i}=0,0,Ework!D{i}/C{i})".replace("Ework!",""))
        mt_rows[-1][1][5] = cell_s(col_ref(i, 6), 8, formula=f"D{i}")
    mt_ws = build_ws([(1,1,12),(2,2,15),(3,3,20),(4,4,15),(5,5,12),(6,6,12),(7,7,25)], mt_rows, freeze=1)

    # 改善路线图
    road_hdrs = ["阶段","改善主题","目标指标","当前值","目标值","关键动作","负责人","完成时间"]
    road_stages = ["现状诊断(Day1)","快速改善(1-4周)","深度改善(1-3月)","标准化固化(3-6月)","持续优化(6月+)"]
    road_rows = [hdr_row(1, road_hdrs, I)]
    for i, stage in enumerate(road_stages, 2):
        road_rows.append(data_row(i, [stage,"","","","","","",""], I))
    road_ws = build_ws([(1,1,20),(2,2,22),(3,3,15),(4,4,10),(5,5,10),(6,6,32),(7,7,12),(8,8,15)], road_rows, freeze=1)

    sheet_names = ["封面","OEE月报追踪","六大损失分析","产线平衡计算","MTBF/MTTR记录表","产线效率改善路线图"]
    ws_list = [cover_ws, oee_ws, loss_ws, lb_ws, mt_ws, road_ws]
    path = pack_xlsx("精益管理_Day2_专业保全与产线效率.xlsx", sheet_names, ws_list, build_ss(S))
    print(f"Created: {path.name}")
    return path

# ════════════════════════════════════════════════════════════════════════════════
# FILE 4: 精益管理_Day2_方针管理与改善提案.xlsx
# ════════════════════════════════════════════════════════════════════════════════
def create_file4():
    S = [
        "精益管理工具表单", "课程名称：精益管理", "版本：完整版 v2.0",
        "方针管理与改善提案",
        "层级", "内容", "衡量指标", "目标值", "现状值", "差距", "关键策略/措施",
        "KPI名称", "目标值", "衡量周期", "责任人", "实际值", "达成率(%)", "同比/环比", "状态",
        "监查日期", "被查部门", "KPI项", "偏差(%)", "原因分析", "改善对策", "下次监查日",
        "提案编号", "提案人", "提案日期", "问题描述", "改善建议", "预期效益", "评审结果", "采纳状态", "实施反馈", "奖励积分",
        "偏差描述", "KPI项", "根因分析(5Why)", "改善对策", "完成期限",
        "工具名称", "适用场景", "核心步骤", "模板说明",
        "公司级方针", "部门级展开", "班组/个人KPI",
    ]
    I = {s: i for i, s in enumerate(S)}

    cover_rows = [
        (1, [cell_s("A1", 4, I["精益管理工具表单"])]),
        (2, [cell_s("A2", 4, I["课程名称：精益管理"])]),
        (3, [cell_s("A3", 4, I["版本：完整版 v2.0"])]),
        (5, [cell_s("A5", 4, I["方针管理与改善提案"])]),
    ]
    cover_ws = build_ws([(1,1,8),(2,2,55)], cover_rows)

    # 方针展开
    pol_hdrs = ["层级","内容","衡量指标","目标值","现状值","差距","关键策略/措施"]
    pol_levels = [I["公司级方针"], I["部门级展开"], I["班组/个人KPI"]]
    pol_rows = [hdr_row(1, pol_hdrs, I)]
    for i, lvl in enumerate(pol_levels, 2):
        pol_rows.append((i, [
            cell_s(col_ref(i, 1), 1, I.get(lvl, 0)),
            cell_s(col_ref(i, 2), 1, 0),
            cell_s(col_ref(i, 3), 1, 0),
            cell_s(col_ref(i, 4), 1, 0),
            cell_s(col_ref(i, 5), 1, 0),
            cell_s(col_ref(i, 6), 8, formula=f"D{i}-E{i}"),
            cell_s(col_ref(i, 7), 1, 0),
        ]))
    pol_ws = build_ws([(1,1,16),(2,2,28),(3,3,22),(4,4,10),(5,5,10),(6,6,10),(7,7,32)], pol_rows, freeze=1)

    # KPI追踪
    kpi_hdrs = ["KPI名称","目标值","衡量周期","责任人","实际值","达成率(%)","同比/环比","状态"]
    kpi_rows = [hdr_row(1, kpi_hdrs, I)]
    for i in range(2, 12):
        r = data_row(i, ["","","","","","","",""], I)
        r[1][5] = cell_s(col_ref(i, 6), 8, formula=f"IF(B{i}=0,0,E{i}/B{i})")
        kpi_rows.append(r)
    kpi_ws = build_ws([(1,1,28),(2,2,12),(3,3,12),(4,4,12),(5,5,12),(6,6,12),(7,7,12),(8,8,12)], kpi_rows, freeze=1)

    # 方针监查
    aud_hdrs = ["监查日期","被查部门","KPI项","目标值","实际值","偏差(%)","原因分析","改善对策","下次监查日"]
    aud_rows = [hdr_row(1, aud_hdrs, I)]
    for i in range(2, 12):
        r = data_row(i, ["","","","","","","","",""], I)
        r[1][5] = cell_s(col_ref(i, 6), 8, formula=f"IF(D{i}=0,0,(E{i}-D{i})/D{i})")
        aud_rows.append(r)
    aud_ws = build_ws([(1,1,12),(2,2,15),(3,3,20),(4,4,10),(5,5,10),(6,6,10),(7,7,28),(8,8,28),(9,9,12)], aud_rows, freeze=1)

    # 改善提案
    prop_hdrs = ["提案编号","提案人","提案日期","问题描述","改善建议","预期效益","评审结果","采纳状态","实施反馈","奖励积分"]
    prop_rows = [hdr_row(1, prop_hdrs, I)]
    for i in range(2, 17):
        prop_rows.append(data_row(i, ["","","","","","","","","",""], I))
    prop_ws = build_ws([(1,1,12),(2,2,10),(3,3,12),(4,4,32),(5,4,28),(6,6,22),(7,7,12),(8,8,12),(9,9,22),(10,10,10)], prop_rows, freeze=1)

    # 偏差分析
    dev_hdrs = ["偏差描述","KPI项","目标值","实际值","偏差率","根因分析(5Why)","改善对策","完成期限","责任人"]
    dev_rows = [hdr_row(1, dev_hdrs, I)]
    for i in range(2, 12):
        r = data_row(i, ["","","","","","","","",""], I)
        r[1][4] = cell_s(col_ref(i, 5), 8, formula=f"IF(C{i}=0,0,(D{i}-C{i})/C{i})")
        dev_rows.append(r)
    dev_ws = build_ws([(1,1,28),(2,2,20),(3,3,10),(4,4,10),(5,5,10),(6,6,32),(7,7,28),(8,8,12),(9,9,12)], dev_rows, freeze=1)

    # 7个改善工具
    tools = [
        ("5Why分析法", "质量/效率问题根因分析", "问5层为什么找到系统根因", "问题→Why1→Why2→Why3→Why4→Why5(根因)→对策"),
        ("鱼骨图(因果图)", "多因素问题分析", "人机料法环测分类列举", "头部=问题 spine=原因类别=具体原因"),
        ("PDCA循环", "任何改善项目的行动计划", "Plan-Do-Check-Act四步", "计划→执行→检查→处置标准化"),
        ("A3报告", "复杂改善项目的结构化报告", "问题背景→现状→目标→根因→对策→执行→追踪", "一张A3纸说清楚整个改善故事"),
        ("甘特图", "改善项目时间计划管理", "列出任务+开始/完成时间+责任人", "时间轴可视化，关键路径标记"),
        ("改善提案管理", "员工改善建议收集与追踪", "提案→评审→采纳→实施→反馈→奖励", "建立改善创意库，激发全员参与"),
        ("标准化作业书(SOP)", "改善成果固化", "目的→适用范围→作业步骤→检查点→记录", "正确作业方法文件化，防止退化"),
    ]
    tools_hdrs = ["工具名称","适用场景","核心步骤","模板说明"]
    tools_rows = [hdr_row(1, tools_hdrs, I)]
    for i, (n, s, st, d) in enumerate(tools, 2):
        tools_rows.append(data_row(i, [n, s, st, d], I))
    tools_ws = build_ws([(1,1,22),(2,2,24),(3,3,38),(4,4,48)], tools_rows, freeze=1)

    sheet_names = ["封面","方针展开图","KPI追踪表","方针监查记录","改善提案表","偏差分析表","7个改善工具模板"]
    ws_list = [cover_ws, pol_ws, kpi_ws, aud_ws, prop_ws, dev_ws, tools_ws]
    path = pack_xlsx("精益管理_Day2_方针管理与改善提案.xlsx", sheet_names, ws_list, build_ss(S))
    print(f"Created: {path.name}")
    return path

# ════════════════════════════════════════════════════════════════════════════════
# FILE 5: 精益管理_当场确认与深化方案.xlsx
# ════════════════════════════════════════════════════════════════════════════════
def create_file5():
    S = [
        "精益管理工具表单", "课程名称：精益管理", "版本：完整版 v2.0",
        "当场确认与深化方案",
        "模块", "确认内容", "业务方反馈", "确认结论", "需修改/跟进内容",
        "原改善方向", "深化内容", "具体措施", "责任人", "完成时间", "预期效果",
        "检查节点", "检查日期", "执行状态", "实际效果", "偏差分析", "调整措施", "下次检查日",
        "序号", "准备项目", "负责人", "完成标准", "完成状态", "备注",
    ]
    I = {s: i for i, s in enumerate(S)}

    cover_rows = [
        (1, [cell_s("A1", 4, I["精益管理工具表单"])]),
        (2, [cell_s("A2", 4, I["课程名称：精益管理"])]),
        (3, [cell_s("A3", 4, I["版本：完整版 v2.0"])]),
        (5, [cell_s("A5", 4, I["当场确认与深化方案"])]),
    ]
    cover_ws = build_ws([(1,1,8),(2,2,55)], cover_rows)

    # 确认记录表
    confirm_hdrs = ["模块","确认内容","业务方反馈","确认结论","需修改/跟进内容"]
    confirm_modules = ["浪费诊断全景图","改善优先级清单","精益工具适用性","改善方向初步判断","一线代表认同度"]
    confirm_rows = [hdr_row(1, confirm_hdrs, I)]
    for i, mod in enumerate(confirm_modules, 2):
        confirm_rows.append(data_row(i, [mod,"","", "确认OK/需修改/非优先级/不适合",""], I))
    confirm_ws = build_ws([(1,1,20),(2,2,32),(3,2,32),(4,4,22),(5,5,32)], confirm_rows, freeze=1)

    # 改善深化模板
    deepen_hdrs = ["原改善方向","深化内容","具体措施","责任人","完成时间","预期效果"]
    deepen_rows = [hdr_row(1, deepen_hdrs, I)]
    for i in range(2, 12):
        deepen_rows.append(data_row(i, ["","","","","",""], I))
    deepen_ws = build_ws([(1,1,22),(2,2,28),(3,3,38),(4,4,12),(5,5,15),(6,6,28)], deepen_rows, freeze=1)

    # 30天跟踪
    track_hdrs = ["检查节点","检查日期","执行状态","实际效果","偏差分析","调整措施","下次检查日"]
    track_cps = [I["Day3检查"], I["Day5检查"], "Week2检查", "Week4检查"]
    track_rows = [hdr_row(1, track_hdrs, I)]
    for i, cp in enumerate(track_cps, 2):
        track_rows.append(data_row(i, [cp,"","","","","",""], I))
    track_ws = build_ws([(1,1,15),(2,2,12),(3,3,15),(4,4,28),(5,5,28),(6,6,28),(7,7,12)], track_rows, freeze=1)

    # 成果展示准备清单
    display_items = [
        ("改善前后数据对比图", "数据记录表/趋势图"),
        ("Before/After现场照片", "改善前后各3张以上"),
        ("改善故事PPT/A3报告", "结构化呈现改善全过程"),
        ("标准化作业文件", "更新后的SOP/点检基准"),
        ("员工改善提案记录", "展示提案活动的参与度"),
        ("30天追踪数据", "证明改善效果可持续"),
        ("下一步改善计划", "基于深化分析的下一轮改善方向"),
    ]
    display_hdrs = ["序号","准备项目","负责人","完成标准","完成状态","备注"]
    display_rows = [hdr_row(1, display_hdrs, I)]
    for i, (item, std) in enumerate(display_items, 2):
        display_rows.append(data_row(i, [i-1, item, "", std, "", ""], I))
    display_ws = build_ws([(1,1,5),(2,2,32),(3,3,12),(4,4,32),(5,5,12),(6,6,22)], display_rows, freeze=1)

    sheet_names = ["封面","确认记录表","改善深化模板","30天跟踪检查表","成果展示准备清单"]
    ws_list = [cover_ws, confirm_ws, deepen_ws, track_ws, display_ws]
    path = pack_xlsx("精益管理_当场确认与深化方案.xlsx", sheet_names, ws_list, build_ss(S))
    print(f"Created: {path.name}")
    return path

# ════════════════════════════════════════════════════════════════════════════════
# FILE 6: 精益管理_课后30天实践追踪.xlsx
# ════════════════════════════════════════════════════════════════════════════════
def create_file6():
    S = [
        "精益管理工具表单", "课程名称：精益管理", "版本：完整版 v2.0",
        "课后30天实践追踪",
        "任务项", "具体行动", "完成标准", "责任人", "完成日期", "执行结果", "状态",
        "实践主题", "实践日期", "参与人员", "观察发现", "初步结论", "下步计划",
        "回顾项目", "内容", "备注",
    ]
    I = {s: i for i, s in enumerate(S)}

    cover_rows = [
        (1, [cell_s("A1", 4, I["精益管理工具表单"])]),
        (2, [cell_s("A2", 4, I["课程名称：精益管理"])]),
        (3, [cell_s("A3", 4, I["版本：完整版 v2.0"])]),
        (5, [cell_s("A5", 4, I["课后30天实践追踪"])]),
    ]
    cover_ws = build_ws([(1,1,8),(2,2,55)], cover_rows)

    week_hdrs = ["任务项","具体行动","完成标准","责任人","完成日期","执行结果","状态"]

    def week_sheet(week_name, tasks):
        rows = [hdr_row(1, week_hdrs, I)]
        for i, task in enumerate(tasks, 2):
            rows.append(data_row(i, [task,"","","","","",""], I))
        return build_ws([(1,1,28),(2,2,38),(3,3,28),(4,4,12),(5,5,12),(6,6,28),(7,7,12)], rows, freeze=1)

    w1_tasks = ["产线浪费现场观察记录(至少3处)","完成1份浪费识别表","绘制简化版业务画卷(核心工序5-7步)","OEE数据实测与计算","与班组长确认浪费点优先级"]
    w2_tasks = ["SMED分析(选取1个换产场景)","自主保全第一步：初期清扫","5Why分析练习(1个实际问题)","鱼骨图画法练习","改善提案提交(至少1条)"]
    w3_tasks = ["OEE数据追踪(每日记录)","六大损失分析完成","产线平衡率计算","改善措施实施(优先改善TOP1)","方针展开图部门级分解"]
    w4_tasks = ["30天改善效果数据汇总","改善提案实施反馈","标准化作业文件更新","下一阶段改善计划制定","月度KPI达成情况回顾"]

    w1_ws = week_sheet("第一周任务", w1_tasks)
    w2_ws = week_sheet("第二周任务", w2_tasks)
    w3_ws = week_sheet("第三周任务", w3_tasks)
    w4_ws = week_sheet("第四周任务", w4_tasks)

    # 月度总结
    summary_items = [
        ("30天整体成果", "最显著的3个改善成果"),
        ("最有效的工具", "哪个工具最实用，为什么"),
        ("最大挑战", "遇到了什么阻力，如何克服"),
        ("未完成事项", "哪些计划没有按期完成，原因"),
        ("员工参与情况", "提案数量/参与度/反馈"),
        ("第二个月改善方向", "基于30天经验的下一阶段重点"),
        ("对课程的建议", "哪些内容最有价值，哪些需要补充"),
    ]
    summary_hdrs = ["回顾项目","内容","备注"]
    summary_rows = [hdr_row(1, summary_hdrs, I)]
    for i, (item, desc) in enumerate(summary_items, 2):
        summary_rows.append(data_row(i, [item, desc, ""], I))
    summary_ws = build_ws([(1,1,22),(2,2,55),(3,3,32)], summary_rows, freeze=1)

    sheet_names = ["封面","第一周任务","第二周任务","第三周任务","第四周任务","月度总结"]
    ws_list = [cover_ws, w1_ws, w2_ws, w3_ws, w4_ws, summary_ws]
    path = pack_xlsx("精益管理_课后30天实践追踪.xlsx", sheet_names, ws_list, build_ss(S))
    print(f"Created: {path.name}")
    return path

# ─── MAIN ────────────────────────────────────────────────────────────────────
if __name__ == "__main__":
    print("Generating 精益管理 Excel tool form files...")
    files = []
    files.append(create_file1())
    files.append(create_file2())
    files.append(create_file3())
    files.append(create_file4())
    files.append(create_file5())
    files.append(create_file6())
    for f in files:
        dest = OUTPUT_DIR / f.name
        shutil.copy(f, dest)
        print(f"Copied to: {dest}")
    print(f"\nAll 6 files created in: {OUTPUT_DIR}")
