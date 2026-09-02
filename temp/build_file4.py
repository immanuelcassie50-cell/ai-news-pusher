import os

WORK = "D:/CC/temp/xlsx_work_4"

STRINGS = [
    "个人行动清单", "周期监测日历", "学习复盘表",
    "序号", "目标/行动项", "类别", "开始日期", "截止日期", "完成状态", "优先级", "备注",
    "目标设定", "风险监控", "资产配置", "应急准备", "学习计划",
    "未开始", "进行中", "已完成", "已延期",
    "高", "中", "低",
    "月度监测", "季度监测", "监测项目", "当前状态", "评估", "建议行动",
    "GDP增速", "CPI同比", "M2增速", "社融增速", "股票市场", "债券市场", "房地产市场", "就业市场",
    "学习主题", "学习内容摘要", "实践应用", "下一步计划", "完成日期", "效果评估",
    "本周期学习要点", "已应用到实际决策的内容", "待进一步深化的问题",
    "使用说明：", "请根据课程内容和个人情况填写本表", "完成一项勾选一项",
    "状态说明：未开始/进行中/已完成/已延期", "优先级说明：高=立即行动 中=本周内 低=本月内",
]

def ss():
    s = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n'
    s += '<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="{}" uniqueCount="{}">\n'.format(len(STRINGS), len(STRINGS))
    for x in STRINGS:
        x = x.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")
        s += "  <si><t>{}</t></si>\n".format(x)
    s += "</sst>"
    return s

def sheet1():
    rows = ['<row r="1" ht="22" customHeight="1"><c r="A1" t="s" s="4"><v>0</v></c></row>']
    rows.append('<row r="2"><c r="A2" t="s" s="0"><v>38</v></c></row>')
    rows.append('<row r="3"><c r="A2" t="s" s="0"><v>39</v></c></row>')
    rows.append('<row r="4">'
        '<c r="A4" t="s" s="4"><v>3</v></c>'
        '<c r="B4" t="s" s="4"><v>4</v></c>'
        '<c r="C4" t="s" s="4"><v>5</v></c>'
        '<c r="D4" t="s" s="4"><v>6</v></c>'
        '<c r="E4" t="s" s="4"><v>7</v></c>'
        '<c r="F4" t="s" s="4"><v>8</v></c>'
        '<c r="G4" t="s" s="4"><v>9</v></c>'
        '<c r="H4" t="s" s="4"><v>10</v></c>'
        '</row>')
    r = 5
    # pre-fill 10 action item rows with empty cells
    cats = [11, 12, 13, 14, 15]
    for i in range(10):
        cat_idx = cats[i % len(cats)]
        rows.append('<row r="{}">'.format(r) +
            '<c r="A{}" s="10"><v>{}</v></c>'.format(r, i+1) +
            '<c r="B{}" t="s" s="0"><v></v></c>'.format(r) +
            '<c r="C{}" t="s" s="0"><v>{}</v></c>'.format(r, cat_idx) +
            '<c r="D{}" s="5"><v></v></c>'.format(r) +
            '<c r="E{}" s="5"><v></v></c>'.format(r) +
            '<c r="F{}" t="s" s="0"><v></v></c>'.format(r) +
            '<c r="G{}" t="s" s="0"><v></v></c>'.format(r) +
            '<c r="H{}" t="s" s="0"><v></v></c>'.format(r) +
            '</row>')
        r += 1
    sd = "<sheetData>\n" + "\n".join(rows) + "\n</sheetData>"
    return '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"><pane ySplit="4" topLeftCell="A5" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols>
    <col min="1" max="1" width="6" customWidth="1"/>
    <col min="2" max="2" width="32" customWidth="1"/>
    <col min="3" max="3" width="12" customWidth="1"/>
    <col min="4" max="4" width="12" customWidth="1"/>
    <col min="5" max="5" width="12" customWidth="1"/>
    <col min="6" max="6" width="10" customWidth="1"/>
    <col min="7" max="7" width="8" customWidth="1"/>
    <col min="8" max="8" width="20" customWidth="1"/>
  </cols>
''' + sd + '''
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

def sheet2():
    rows = ['<row r="1" ht="22" customHeight="1"><c r="A1" t="s" s="4"><v>1</v></c></row>']
    # monthly section
    rows.append('<row r="2"><c r="A2" t="s" s="4"><v>16</v></c></row>')
    rows.append('<row r="3">'
        '<c r="A3" t="s" s="4"><v>17</v></c>'
        '<c r="B3" t="s" s="4"><v>18</v></c>'
        '<c r="C3" t="s" s="4"><v>19</v></c>'
        '</row>')
    monthly_items = [20, 21, 22, 23, 24, 25, 26, 27]
    r = 4
    for item_si in monthly_items:
        rows.append('<row r="{}">'.format(r) +
            '<c r="A{}" t="s" s="0"><v>{}</v></c>'.format(r, item_si) +
            '<c r="B{}" t="s" s="0"><v></v></c>'.format(r) +
            '<c r="C{}" t="s" s="0"><v></v></c>'.format(r) +
            '</row>')
        r += 1
    # quarterly section
    r += 1
    rows.append('<row r="{}"><c r="A{}" t="s" s="4"><v>17</v></c></row>'.format(r, r))
    r += 1
    rows.append('<row r="{}">'.format(r) +
        '<c r="A{}" t="s" s="4"><v>17</v></c>'.format(r) +
        '<c r="B{}" t="s" s="4"><v>18</v></c>'.format(r) +
        '<c r="C{}" t="s" s="4"><v>19</v></c>'.format(r) +
        '</row>')
    r += 1
    for item_si in monthly_items:
        rows.append('<row r="{}">'.format(r) +
            '<c r="A{}" t="s" s="0"><v>{}</v></c>'.format(r, item_si) +
            '<c r="B{}" t="s" s="0"><v></v></c>'.format(r) +
            '<c r="C{}" t="s" s="0"><v></v></c>'.format(r) +
            '</row>')
        r += 1
    sd = "<sheetData>\n" + "\n".join(rows) + "\n</sheetData>"
    return '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"/></sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols>
    <col min="1" max="1" width="18" customWidth="1"/>
    <col min="2" max="2" width="28" customWidth="1"/>
    <col min="3" max="3" width="28" customWidth="1"/>
  </cols>
''' + sd + '''
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

def sheet3():
    rows = ['<row r="1" ht="22" customHeight="1"><c r="A1" t="s" s="4"><v>2</v></c></row>']
    rows.append('<row r="2">'
        '<c r="A2" t="s" s="4"><v>28</v></c>'
        '<c r="B2" t="s" s="4"><v>29</v></c>'
        '<c r="C2" t="s" s="4"><v>30</v></c>'
        '<c r="D2" t="s" s="4"><v>31</v></c>'
        '<c r="E2" t="s" s="4"><v>32</v></c>'
        '</row>')
    r = 3
    for i in range(8):
        rows.append('<row r="{}">'.format(r) +
            '<c r="A{}" t="s" s="0"><v></v></c>'.format(r) +
            '<c r="B{}" t="s" s="0"><v></v></c>'.format(r) +
            '<c r="C{}" t="s" s="0"><v></v></c>'.format(r) +
            '<c r="D{}" t="s" s="0"><v></v></c>'.format(r) +
            '<c r="E{}" s="5"><v></v></c>'.format(r) +
            '</row>')
        r += 1
    sd = "<sheetData>\n" + "\n".join(rows) + "\n</sheetData>"
    return '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"><pane ySplit="2" topLeftCell="A3" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols>
    <col min="1" max="1" width="20" customWidth="1"/>
    <col min="2" max="2" width="32" customWidth="1"/>
    <col min="3" max="3" width="32" customWidth="1"/>
    <col min="4" max="4" width="28" customWidth="1"/>
    <col min="5" max="5" width="12" customWidth="1"/>
  </cols>
''' + sd + '''
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

with open(WORK + "/xl/worksheets/sheet1.xml", "w", encoding="utf-8") as f:
    f.write(sheet1())
with open(WORK + "/xl/worksheets/sheet2.xml", "w", encoding="utf-8") as f:
    f.write(sheet2())
with open(WORK + "/xl/worksheets/sheet3.xml", "w", encoding="utf-8") as f:
    f.write(sheet3())
with open(WORK + "/xl/sharedStrings.xml", "w", encoding="utf-8") as f:
    f.write(ss())

wb = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheets>
    <sheet name="个人行动清单" sheetId="1" r:id="rId1"/>
    <sheet name="周期监测日历" sheetId="2" r:id="rId4"/>
    <sheet name="学习复盘表" sheetId="3" r:id="rId5"/>
  </sheets>
  <calcPr calcId="0"/>
</workbook>'''
with open(WORK + "/xl/workbook.xml", "w", encoding="utf-8") as f:
    f.write(wb)

rels = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
  <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml"/>
  <Relationship Id="rId4" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet2.xml"/>
  <Relationship Id="rId5" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet3.xml"/>
</Relationships>'''
with open(WORK + "/xl/_rels/workbook.xml.rels", "w", encoding="utf-8") as f:
    f.write(rels)

ct = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml"  ContentType="application/xml"/>
  <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
  <Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet2.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet3.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>
  <Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/>
</Types>'''
with open(WORK + "/[Content_Types].xml", "w", encoding="utf-8") as f:
    f.write(ct)

print("OK")
