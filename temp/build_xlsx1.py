"""
Build 市场失灵诊断清单.xlsx (3 sheets)
"""
import os, zipfile, shutil

TMP_OUT = "D:/CC/temp/xlsx1_output.xlsx"
FINAL_OUT = u"D:/新课开发/经济学/03_市场失灵与外部性/配套表单/市场失灵诊断清单.xlsx"

os.makedirs(os.path.dirname(FINAL_OUT), exist_ok=True)
os.makedirs(os.path.dirname(TMP_OUT), exist_ok=True)

# ── shared strings ──────────────────────────────────────────────────────────
S1 = [
    # 0-4  Sheet titles & notes
    "市场失灵诊断清单",
    "填写说明：蓝色单元格为输入项，黑色单元格为自动计算或选项",
    "诊断清单",
    "政策工具对比",
    "案例记录",
    # 5-14  诊断清单 Sheet column headers
    "序号",
    "社会问题描述",
    "失灵类型",
    "具体类型",
    "涉及主体",
    "外部性方向",
    "推荐政策工具",
    "适用条件",
    "局限性",
    "本地适用性评估",
    # 15-22  政策工具对比 column headers
    "工具",
    "适用失灵类型",
    "优点",
    "局限性",
    "实施条件",
    "成本",
    "效果",
    "案例",
    # 23-30  案例记录 column headers + notes
    "日期",
    "问题名称",
    "失灵类型",
    "具体情况描述",
    "影响分析",
    "建议的政策工具",
    "实施难点",
    "备注",
    "请记录您发现的市场失灵案例",
    "以下为参考模板，可根据实际情况修改",
    # 31-38  皮古税
    "皮古税",
    "负外部性",
    "经济效率高",
    "税率难确定",
    "需要准确量化外部性",
    "中",
    "效率最优",
    "碳税",
    # 39-46  补贴
    "补贴",
    "正外部性",
    "鼓励生产",
    "财政负担",
    "财政负担可控",
    "高",
    "公平性高",
    "新能源补贴",
    # 47-54  产权界定
    "产权界定",
    "产权模糊",
    "激励明晰",
    "产权评估难",
    "交易成本低，产权明确",
    "高",
    "效率最优",
    "排污权交易",
    # 55-62  行政管制
    "行政管制",
    "紧急情况",
    "见效快",
    "灵活性差",
    "行政能力充足",
    "低-中",
    "短期见效",
    "禁塑令",
    # 63-70  信息引导
    "信息引导",
    "信息不对称",
    "成本低",
    "效果不确定",
    "信息充分",
    "低",
    "效果不确定",
    "食品标签",
    # 71-78  案例1
    "2024-01-15",
    "工厂污染",
    "负外部性-生产过利",
    "工厂向河流排放废水",
    "河流污染，影响周边居民饮水",
    "皮古税或行政管制",
    "污染治理成本高",
    "本地环保法规完善程度",
    # 79-86  案例2
    "2024-02-20",
    "疫苗接种不足",
    "正外部性-生产不足",
    "传染病防控接种率低",
    "群体免疫效果未达最佳",
    "补贴接种服务",
    "财政负担",
    "公平性问题",
    # 87-88  drop-down note
    "失灵类型和外部性方向列为下拉选项，请点击单元格右侧箭头选择",
]

def build_sst(strings):
    count = len(strings)
    items = "".join(f"<si><t>{s}</t></si>" for s in strings)
    return (
        f'<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n'
        f'<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" '
        f'count="{count}" uniqueCount="{count}">\n{items}\n</sst>'
    )

FILLS = """  <fills count="5">
    <fill><patternFill patternType="none"/></fill>
    <fill><patternFill patternType="gray125"/></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="002C4A7C"/><bgColor indexed="64"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="00D9E8F5"/><bgColor indexed="64"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="00FFFFFF"/><bgColor indexed="64"/></patternFill></fill>
  </fills>"""

FONTS = """  <fonts count="8">
    <font><sz val="11"/><name val="Calibri"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="000000FF"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="00000000"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="00008000"/></font>
    <font><sz val="11"/><name val="Calibri"/><b/></font>
    <font><sz val="11"/><name val="Calibri"/><b/><color rgb="FFFFFFFF"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="FFFFFFFF"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="00000000"/></font>
  </fonts>"""

BORDERS = """  <borders count="3">
    <border><left/><right/><top/><bottom/><diagonal/></border>
    <border>
      <left style="thin"><color rgb="00000000"/></left>
      <right style="thin"><color rgb="00000000"/></right>
      <top style="thin"><color rgb="00000000"/></top>
      <bottom style="thin"><color rgb="00000000"/></bottom>
    </border>
    <border>
      <left style="medium"><color rgb="00000000"/></left>
      <right style="medium"><color rgb="00000000"/></right>
      <top style="medium"><color rgb="00000000"/></top>
      <bottom style="medium"><color rgb="00000000"/></bottom>
    </border>
  </borders>"""

#  0 default, 1 blue, 2 black, 3 green, 4 bold, 5 bold white, 6 white, 7 black (from fonts)
# Fills: 0 none, 1 gray125, 2 dark blue #2C4A7C, 3 light blue #D9E8F5, 4 white
# cellXfs indices:
# 0  default                  font=0 fill=0 border=0
# 1  blue input text          font=1 fill=0 border=0
# 2  black label/formula      font=2 fill=0 border=0
# 3  green cross-sheet        font=3 fill=0 border=0
# 4  bold header (black)      font=4 fill=0 border=0
# 5  bold white on dark blue  font=5 fill=2 border=0
# 6  bold white + thin border font=5 fill=2 border=1
# 7  blue input + thin border font=1 fill=0 border=1
# 8  black formula + thin border font=2 fill=0 border=1
# 9  blue on dark blue        font=1 fill=2 border=0
# 10 black on dark blue       font=2 fill=2 border=0
# 11 blue on light blue + thin border font=1 fill=3 border=1  (alt row light)
# 12 black on light blue + thin border font=2 fill=3 border=1
# 13 blue on white + thin border font=1 fill=4 border=1  (alt row white)
# 14 black on white + thin border font=2 fill=4 border=1

CELLXFS = """  <cellXfs count="15">
    <xf numFmtId="0"   fontId="0" fillId="0" borderId="0" xfId="0" applyFont="1"/>
    <xf numFmtId="0"   fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1"/>
    <xf numFmtId="0"   fontId="2" fillId="0" borderId="0" xfId="0" applyFont="1"/>
    <xf numFmtId="0"   fontId="3" fillId="0" borderId="0" xfId="0" applyFont="1"/>
    <xf numFmtId="0"   fontId="4" fillId="0" borderId="0" xfId="0" applyFont="1"/>
    <xf numFmtId="0"   fontId="5" fillId="2" borderId="0" xfId="0" applyFont="1" applyFill="1"/>
    <xf numFmtId="0"   fontId="5" fillId="2" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1"/>
    <xf numFmtId="0"   fontId="1" fillId="0" borderId="1" xfId="0" applyFont="1" applyBorder="1"/>
    <xf numFmtId="0"   fontId="2" fillId="0" borderId="1" xfId="0" applyFont="1" applyBorder="1"/>
    <xf numFmtId="0"   fontId="1" fillId="2" borderId="0" xfId="0" applyFont="1" applyFill="1"/>
    <xf numFmtId="0"   fontId="2" fillId="2" borderId="0" xfId="0" applyFont="1" applyFill="1"/>
    <xf numFmtId="0"   fontId="1" fillId="3" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1"/>
    <xf numFmtId="0"   fontId="2" fillId="3" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1"/>
    <xf numFmtId="0"   fontId="1" fillId="4" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1"/>
    <xf numFmtId="0"   fontId="2" fillId="4" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1"/>
  </cellXfs>"""

NUMFMTS = """  <numFmts count="4">
    <numFmt numFmtId="164" formatCode="$#,##0;($#,##0);&quot;-&quot;"/>
    <numFmt numFmtId="165" formatCode="0.0%"/>
    <numFmt numFmtId="166" formatCode="0.0x"/>
    <numFmt numFmtId="167" formatCode="#,##0"/>
  </numFmts>"""

def build_styles():
    return (
        '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n'
        '<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">\n'
        + NUMFMTS + '\n'
        + FONTS + '\n'
        + FILLS + '\n'
        + BORDERS + '\n'
        + CELLXFS + '\n'
        '</styleSheet>'
    )

def si(idx): return f'<v>{idx}</v>'

def srow(r, cells, ht=None):
    h = f' r="{r}"' + (f' ht="{ht}" customHeight="1"' if ht else '')
    return f'<row{h}>\n  ' + '\n  '.join(cells) + '\n</row>'

# ── Sheet 1: 诊断清单 ───────────────────────────────────────────────────────
def sheet1():
    cols = """  <cols>
    <col min="1"  max="1"  width="8"   customWidth="1"/>
    <col min="2"  max="2"  width="22"  customWidth="1"/>
    <col min="3"  max="3"  width="16"  customWidth="1"/>
    <col min="4"  max="4"  width="14"  customWidth="1"/>
    <col min="5"  max="5"  width="16"  customWidth="1"/>
    <col min="6"  max="6"  width="12"  customWidth="1"/>
    <col min="7"  max="7"  width="14"  customWidth="1"/>
    <col min="8"  max="8"  width="18"  customWidth="1"/>
    <col min="9"  max="9"  width="16"  customWidth="1"/>
    <col min="10" max="10" width="18"  customWidth="1"/>
  </cols>"""

    # Row 1: Title merged A1:J1
    r1 = srow(1, ['<c r="A1" s="6"><f>"市场失灵诊断清单"</f><v></v></c>'], ht=28)
    # Row 2: usage note
    r2 = srow(2, ['<c r="A2" s="9"><f>"填写说明：蓝色单元格为输入项，黑色单元格为自动计算或选项"</f><v></v></c>'])
    # Row 3: dropdown hint
    r3 = srow(3, ['<c r="A3" s="9"><f>"失灵类型和外部性方向列为下拉选项，请点击单元格右侧箭头选择"</f><v></v></c>'])
    # Row 4: Column headers (s=6: bold white on dark blue + thin border)
    r4_hdrs = [
        '<c r="A4" s="6">' + si(5) + '</c>',
        '<c r="B4" s="6">' + si(6) + '</c>',
        '<c r="C4" s="6">' + si(7) + '</c>',
        '<c r="D4" s="6">' + si(8) + '</c>',
        '<c r="E4" s="6">' + si(9) + '</c>',
        '<c r="F4" s="6">' + si(10) + '</c>',
        '<c r="G4" s="6">' + si(11) + '</c>',
        '<c r="H4" s="6">' + si(12) + '</c>',
        '<c r="I4" s="6">' + si(13) + '</c>',
        '<c r="J4" s="6">' + si(14) + '</c>',
    ]
    r4 = srow(4, r4_hdrs, ht=20)

    # Rows 5-15: data rows (alternating light-blue s=11 / white s=13)
    data_rows = []
    for i in range(11):
        row_num = i + 5
        is_even = i % 2 == 0
        s_in = 11 if is_even else 13   # blue input
        s_fn = 12 if is_even else 14   # black formula
        # Col A: auto number
        a = f'<c r="A{row_num}" s="{s_fn}"><f>ROW()-4</f><v></v></c>'
        cells = [a] + [f'<c r="{c}{row_num}" s="{s_in}"></c>'
                        for c in ['B','C','D','E','F','G','H','I','J']]
        data_rows.append(srow(row_num, cells))

    rows_xml = '\n    '.join([r1, r2, r3, r4] + data_rows)

    dv = """  <dataValidations count="2">
    <dataValidation type="list" sqref="C5:C15" allowBlank="1" showInputMessage="1" promptTitle="失灵类型" prompt="请选择：外部性/公共品/公地悲剧/信息不对称">
      <formula1>"外部性,公共品,公地悲剧,信息不对称"</formula1>
    </dataValidation>
    <dataValidation type="list" sqref="F5:F15" allowBlank="1" showInputMessage="1" promptTitle="外部性方向" prompt="请选择：正/负">
      <formula1>"正,负"</formula1>
    </dataValidation>
  </dataValidations>"""

    return (
        '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n'
        '<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" '
        'xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">\n'
        '  <sheetViews><sheetView tabSelected="1" workbookViewId="0"/></sheetViews>\n'
        '  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" '
        'xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>\n'
        + cols + '\n'
        '  <sheetData>\n    ' + rows_xml + '\n  </sheetData>\n'
        + dv + '\n'
        '  <mergeCells count="1">\n    <mergeCell ref="A1:J1"/>\n  </mergeCells>\n'
        '  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>\n'
        '</worksheet>'
    )

# ── Sheet 2: 政策工具对比 ───────────────────────────────────────────────────
def sheet2():
    cols = """  <cols>
    <col min="1" max="1" width="14" customWidth="1"/>
    <col min="2" max="2" width="16" customWidth="1"/>
    <col min="3" max="3" width="16" customWidth="1"/>
    <col min="4" max="4" width="16" customWidth="1"/>
    <col min="5" max="5" width="22" customWidth="1"/>
    <col min="6" max="6" width="10" customWidth="1"/>
    <col min="7" max="7" width="14" customWidth="1"/>
    <col min="8" max="8" width="14" customWidth="1"/>
  </cols>"""

    r1_hdrs = ['<c r="A1" s="6">' + si(15) + '</c>',
               '<c r="B1" s="6">' + si(16) + '</c>',
               '<c r="C1" s="6">' + si(17) + '</c>',
               '<c r="D1" s="6">' + si(18) + '</c>',
               '<c r="E1" s="6">' + si(19) + '</c>',
               '<c r="F1" s="6">' + si(20) + '</c>',
               '<c r="G1" s="6">' + si(21) + '</c>',
               '<c r="H1" s="6">' + si(22) + '</c>']
    r1 = srow(1, r1_hdrs, ht=20)

    tool_data = [
        (31,32,33,34,35,36,37,38),
        (39,40,41,42,43,44,45,46),
        (47,48,49,50,51,52,53,54),
        (55,56,57,58,59,60,61,62),
        (63,64,65,66,67,68,69,70),
    ]
    data_rows = []
    for i, row_idx in enumerate(range(2, 7)):
        is_even = i % 2 == 0
        s = 11 if is_even else 13
        cells = [f'<c r="{chr(65+j)}{row_idx}" s="{s}"><v>{tool_data[i][j]}</v></c>'
                 for j in range(8)]
        data_rows.append(srow(row_idx, cells))

    rows_xml = '\n    '.join([r1] + data_rows)

    return (
        '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n'
        '<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" '
        'xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">\n'
        '  <sheetViews><sheetView workbookViewId="0"/></sheetViews>\n'
        '  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" '
        'xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>\n'
        + cols + '\n'
        '  <sheetData>\n    ' + rows_xml + '\n  </sheetData>\n'
        '  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>\n'
        '</worksheet>'
    )

# ── Sheet 3: 案例记录 ───────────────────────────────────────────────────────
def sheet3():
    cols = """  <cols>
    <col min="1" max="1" width="14" customWidth="1"/>
    <col min="2" max="2" width="16" customWidth="1"/>
    <col min="3" max="3" width="18" customWidth="1"/>
    <col min="4" max="4" width="22" customWidth="1"/>
    <col min="5" max="5" width="22" customWidth="1"/>
    <col min="6" max="6" width="18" customWidth="1"/>
    <col min="7" max="7" width="16" customWidth="1"/>
    <col min="8" max="8" width="16" customWidth="1"/>
  </cols>"""

    r1 = srow(1, ['<c r="A1" s="6"><f>"案例记录"</f><v></v></c>'], ht=28)
    r2 = srow(2, ['<c r="A2" s="9"><f>"请记录您发现的市场失灵案例"</f><v></v></c>'])
    r3 = srow(3, ['<c r="A3" s="9"><f>"以下为参考模板，可根据实际情况修改"</f><v></v></c>'])

    r4_hdrs = ['<c r="A4" s="6">' + si(23) + '</c>',
               '<c r="B4" s="6">' + si(24) + '</c>',
               '<c r="C4" s="6">' + si(25) + '</c>',
               '<c r="D4" s="6">' + si(26) + '</c>',
               '<c r="E4" s="6">' + si(27) + '</c>',
               '<c r="F4" s="6">' + si(28) + '</c>',
               '<c r="G4" s="6">' + si(29) + '</c>',
               '<c r="H4" s="6">' + si(30) + '</c>']
    r4 = srow(4, r4_hdrs, ht=20)

    # Example rows 5-6
    ex_data = [
        (5, [71,72,73,74,75,76,77,78], 11),
        (6, [79,80,81,82,83,84,85,86], 13),
    ]
    data_rows = []
    for row_num, indices, style in ex_data:
        cells = [f'<c r="{chr(65+j)}{row_num}" s="{style}"><v>{indices[j]}</v></c>'
                 for j in range(8)]
        data_rows.append(srow(row_num, cells))

    # Empty rows 7-15
    for i in range(9):
        row_num = i + 7
        is_even = i % 2 == 0
        s = 11 if is_even else 13
        cells = [f'<c r="{chr(65+j)}{row_num}" s="{s}"></c>' for j in range(8)]
        data_rows.append(srow(row_num, cells))

    rows_xml = '\n    '.join([r1, r2, r3, r4] + data_rows)

    return (
        '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n'
        '<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" '
        'xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">\n'
        '  <sheetViews><sheetView workbookViewId="0"/></sheetViews>\n'
        '  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" '
        'xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>\n'
        + cols + '\n'
        '  <sheetData>\n    ' + rows_xml + '\n  </sheetData>\n'
        '  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>\n'
        '</worksheet>'
    )

def build_workbook():
    return (
        '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n'
        '<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" '
        'xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">\n'
        '  <fileVersion appName="xl" lastEdited="7" lowestEdited="7"/>\n'
        '  <workbookPr defaultThemeVersion="166925"/>\n'
        '  <bookViews>\n'
        '    <workbookView xWindow="0" yWindow="0" windowWidth="20140" windowHeight="10960"/>\n'
        '  </bookViews>\n'
        '  <sheets>\n'
        '    <sheet name="诊断清单"    sheetId="1" r:id="rId1"/>\n'
        '    <sheet name="政策工具对比" sheetId="2" r:id="rId4"/>\n'
        '    <sheet name="案例记录"    sheetId="3" r:id="rId5"/>\n'
        '  </sheets>\n'
        '  <calcPr calcId="191029"/>\n'
        '</workbook>'
    )

def build_workbook_rels():
    return (
        '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n'
        '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">\n'
        '  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>\n'
        '  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>\n'
        '  <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml"/>\n'
        '  <Relationship Id="rId4" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet2.xml"/>\n'
        '  <Relationship Id="rId5" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet3.xml"/>\n'
        '</Relationships>'
    )

def build_content_types():
    return (
        '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n'
        '<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">\n'
        '  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>\n'
        '  <Default Extension="xml"  ContentType="application/xml"/>\n'
        '  <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>\n'
        '  <Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>\n'
        '  <Override PartName="/xl/worksheets/sheet2.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>\n'
        '  <Override PartName="/xl/worksheets/sheet3.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>\n'
        '  <Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>\n'
        '  <Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/>\n'
        '</Types>'
    )

def build_rels():
    return (
        '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n'
        '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">\n'
        '  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/>\n'
        '</Relationships>'
    )

def pack(out, sst, styles, s1, s2, s3):
    with zipfile.ZipFile(out, 'w', zipfile.ZIP_DEFLATED) as z:
        z.writestr('[Content_Types].xml', build_content_types())
        z.writestr('_rels/.rels', build_rels())
        z.writestr('xl/workbook.xml', build_workbook())
        z.writestr('xl/_rels/workbook.xml.rels', build_workbook_rels())
        z.writestr('xl/styles.xml', styles)
        z.writestr('xl/sharedStrings.xml', sst)
        z.writestr('xl/worksheets/sheet1.xml', s1)
        z.writestr('xl/worksheets/sheet2.xml', s2)
        z.writestr('xl/worksheets/sheet3.xml', s3)

pack(TMP_OUT, build_sst(S1), build_styles(), sheet1(), sheet2(), sheet3())
shutil.copy2(TMP_OUT, FINAL_OUT)
print(f"Created: {FINAL_OUT}")
