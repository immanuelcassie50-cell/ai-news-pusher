import shutil

WORK = "D:/CC/temp/xlsx_work_3"
TPL  = "D:/CC/temp/xlsx_work_3/xl/worksheets/sheet1.xml"

STRINGS = [
    "1929大萧条分析模板", "2008金融危机分析模板", "2020新冠冲击分析模板", "对比分析矩阵",
    "序号", "分析维度", "关键问题", "要点回答", "支撑数据/案例", "分析要点",
    "1. 危机前的泡沫特征是什么？", "2. 货币政策和利率如何演变？",
    "3. 金融机构和信贷市场出现了哪些问题？", "4. 实体经济传导路径是怎样的？",
    "5. 政府应对措施与效果如何？",
    "1. 危机的直接导火索是什么？", "2. 金融创新工具（CDO、CDS等）扮演了什么角色？",
    "3. 房地产市场如何从繁荣走向崩溃？", "4. 雷曼倒闭如何引发系统性风险？",
    "5. 全球央行协调救市的效果如何？",
    "1. 与传统经济危机的本质区别是什么？", "2. 供应链断裂的表现和影响？",
    "3. 货币政策和财政政策的空前应对？", "4. 金融市场流动性危机如何演化？",
    "5. 后疫情时代的经济新格局？",
    "对比维度", "1929大萧条", "2008金融危机", "2020新冠冲击",
    "导火索与触发机制", "金融机构脆弱点", "央行货币政策响应",
    "政府财政应对", "实体经济冲击渠道", "持续时间与恢复模式",
    "对普通人的影响", "历史启示与当前借鉴", "本次课程要点", "个人行动启示",
]

def ss():
    s = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n'
    s += '<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="{}" uniqueCount="{}">\n'.format(len(STRINGS), len(STRINGS))
    for x in STRINGS:
        x = x.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")
        s += "  <si><t>{}</t></si>\n".format(x)
    s += "</sst>"
    return s

def case_sheet(tidx, qidxs):
    rows = ['<row r="1" ht="22" customHeight="1"><c r="A1" t="s" s="4"><v>{}</v></c></row>'.format(tidx)]
    rows.append('<row r="2"><c r="A2" t="s" s="4"><v>4</v></c><c r="B2" t="s" s="4"><v>5</v></c><c r="C2" t="s" s="4"><v>6</v></c><c r="D2" t="s" s="4"><v>7</v></c><c r="E2" t="s" s="4"><v>8</v></c></row>')
    r = 3
    for qi in qidxs:
        rows.append('<row r="{}"><c r="A{}" s="10"><v>{}</v></c><c r="B{}" t="s" s="4"><v>{}</v></c><c r="C{}" t="s" s="0"><v></v></c><c r="D{}" t="s" s="0"><v></v></c><c r="E{}" t="s" s="0"><v></v></c></row>'.format(r, r, r-2, r, qi, r, r, r, r, r))
        r += 1
    sd = "<sheetData>\n" + "\n".join(rows) + "\n</sheetData>"
    return '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"><pane ySplit="2" topLeftCell="A3" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols><col min="1" max="1" width="6" customWidth="1"/><col min="2" max="2" width="36" customWidth="1"/><col min="3" max="3" width="40" customWidth="1"/><col min="4" max="4" width="30" customWidth="1"/><col min="5" max="5" width="24" customWidth="1"/></cols>
''' + sd + '''
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

def sheet4():
    rows = ['<row r="1" ht="22" customHeight="1"><c r="A1" t="s" s="4"><v>3</v></c></row>']
    rows.append('<row r="2"><c r="A2" t="s" s="4"><v>25</v></c><c r="B2" t="s" s="4"><v>26</v></c><c r="C2" t="s" s="4"><v>27</v></c><c r="D2" t="s" s="4"><v>28</v></c></row>')
    r = 3
    for dim in range(29, 39):
        rows.append('<row r="{}"><c r="A{}" t="s" s="4"><v>{}</v></c><c r="B{}" t="s" s="0"><v></v></c><c r="C{}" t="s" s="0"><v></v></c><c r="D{}" t="s" s="0"><v></v></c></row>'.format(r, r, dim, r, r, r, r))
        r += 1
    sd = "<sheetData>\n" + "\n".join(rows) + "\n</sheetData>"
    return '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"><pane ySplit="2" topLeftCell="A3" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols><col min="1" max="1" width="20" customWidth="1"/><col min="2" max="2" width="32" customWidth="1"/><col min="3" max="3" width="32" customWidth="1"/><col min="4" max="4" width="32" customWidth="1"/></cols>
''' + sd + '''
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

# copy template to all sheet files
# sheets already exist, just overwrite content below
with open(WORK + "/xl/worksheets/sheet1.xml", "w", encoding="utf-8") as f:
    f.write(case_sheet(0, [10, 11, 12, 13, 14]))
with open(WORK + "/xl/worksheets/sheet2.xml", "w", encoding="utf-8") as f:
    f.write(case_sheet(1, [15, 16, 17, 18, 19]))
with open(WORK + "/xl/worksheets/sheet3.xml", "w", encoding="utf-8") as f:
    f.write(case_sheet(2, [20, 21, 22, 23, 24]))
with open(WORK + "/xl/worksheets/sheet4.xml", "w", encoding="utf-8") as f:
    f.write(sheet4())
with open(WORK + "/xl/sharedStrings.xml", "w", encoding="utf-8") as f:
    f.write(ss())

wb = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheets>
    <sheet name="1929大萧条分析模板" sheetId="1" r:id="rId1"/>
    <sheet name="2008金融危机分析模板" sheetId="2" r:id="rId4"/>
    <sheet name="2020新冠冲击分析模板" sheetId="3" r:id="rId5"/>
    <sheet name="对比分析矩阵" sheetId="4" r:id="rId6"/>
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
  <Relationship Id="rId6" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet4.xml"/>
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
  <Override PartName="/xl/worksheets/sheet4.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>
  <Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/>
</Types>'''
with open(WORK + "/[Content_Types].xml", "w", encoding="utf-8") as f:
    f.write(ct)

print("OK")
