#!/usr/bin/env python3
"""Build F10_组织智能体台账.xlsx from minimal_xlsx template."""
import shutil, os

SRC = r'D:/temp/xlsx_work_f10/minimal_xlsx'
OUT = r'D:/temp/xlsx_work_f10/f10_unpacked'
shutil.copytree(SRC, OUT, dirs_exist_ok=True)
os.makedirs(OUT + '/xl/worksheets', exist_ok=True)

# ── sharedStrings ─────────────────────────────────────────────────────────────
strings = [
    #  0  智能体名称  1  类型  2  状态  3  负责人  4  所属部门  5  创建日期  6  备注
    "\u667a\u80fd\u4f53\u540d\u79f0", "\u7c7b\u578b", "\u72b6\u6001", "\u8d1f\u8d23\u4eba", "\u6240\u5c5e\u90e8\u95e8", "\u521b\u5efa\u65e5\u671f", "\u5907\u6ce8",
    #  7  对话客服  8  知识助手  9  流程自动化  10  数据分析  11  文案创作  12  图像识别
    "\u5bf9\u8bdd\u5ba2\u670d", "\u77e5\u8bc6\u52a9\u624b", "\u6d41\u7a0b\u81ea\u52a8\u5316", "\u6570\u636e\u5206\u6790", "\u6587\u6848\u521b\u4f5c", "\u56fe\u50cf\u8bc6\u522b",
    # 13  研发部  14  市场部  15  销售部  16  HR部  17  财务部  18  客服部
    "\u7814\u53d1\u90e8", "\u5e02\u573a\u90e8", "\u9500\u552e\u90e8", "HR\u90e8", "\u8d22\u52a1\u90e8", "\u5ba2\u670d\u90e8",
    # 19  运营中  20  停用  21  开发中  22  已下线
    "\u8fd0\u8425\u4e2d", "\u505c\u7528", "\u5f00\u53d1\u4e2d", "\u5df2\u4e0b\u7ebf",
    # 23  张明  24  李华  25  王芳  26  赵强  27  陈静  28  周伟
    "\u5f20\u660e", "\u674e\u534e", "\u738b\u82b1", "\u8d75\u5f3a", "\u9648\u9759", "\u5468\u4f1f",
    # 29  合计  30  智能体数量
    "\u5408\u8ba1", "\u667a\u80fd\u4f53\u6570\u91cf",
    # 31  调用量(月)  32  完成率(%)  33  满意度(%)  34  响应时间(秒)
    "\u8c03\u7528\u91cf(\u6708)", "\u5b8c\u6210\u7387(%)", "\u6ee1\u610f\u5ea6(%)", "\u54cd\u5e94\u65f6\u95f4(\u79d2)",
    # 35  开发成本(元)  36  运营成本(元/月)  37  收益(元/月)  38  ROI(%)
    "\u5f00\u53d1\u6210\u672c(\u5143)", "\u8fd0\u8425\u6210\u672c(\u5143/\u6708)", "\u6536\u76ca(\u5143/\u6708)", "ROI(%)",
    # 39  上线日期  40  最近更新时间  41  计划下线日期  42  当前版本
    "\u4e0a\u7ebf\u65e5\u671f", "\u6700\u8fd1\u66f4\u65b0\u65f6\u95f4", "\u8ba1\u5212\u4e0b\u7ebf\u65e5\u671f", "\u5f53\u524d\u7248\u672c",
    # 43  F10_组织智能体台账  44  智能体目录  45  使用数据  46  成本分析  47  生命周期管理
    "F10_\u7ec4\u7ec7\u667a\u80fd\u4f53\u53f0\u8d26", "\u667a\u80fd\u4f53\u76ee\u5f55", "\u4f7f\u7528\u6570\u636e", "\u6210\u672c\u5206\u6790", "\u751f\u547d\u5468\u671f\u7ba1\u7406",
    # 48  填写说明  49  说明1  50  说明2
    "\u586b\u5199\u8bf4\u660e\uff1a\u84dd\u8272\u5355\u5143\u683c\u4e3a\u53ef\u7f16\u8f91\u8f93\u5165\u9879\uff0c\u9ed1\u8272\u5355\u5143\u683c\u4e3a\u516c\u5f0f\u81ea\u52a8\u8ba1\u7b97",
    "1. \u7c7b\u578b\u5305\u62ec\uff1a\u5bf9\u8bdd\u5ba2\u670d\u3001\u77e5\u8bc6\u52a9\u624b\u3001\u6d41\u7a0b\u81ea\u52a8\u5316\u3001\u6570\u636e\u5206\u6790\u3001\u6587\u6848\u521b\u4f5c\u3001\u56fe\u50cf\u8bc6\u522b\u7b49",
    "2. \u72b6\u6001\u5305\u62ec\uff1a\u8fd0\u8425\u4e2d\u3001\u505c\u7528\u3001\u5f00\u53d1\u4e2d\u3001\u5df2\u4e0b\u7ebf",
    # 51  v2.1  52  v1.5  53  v3.0  54  v1.2  55  v2.5  56  v1.8
    "v2.1", "v1.5", "v3.0", "v1.2", "v2.5", "v1.8",
    # 57-62  launch dates
    "2025-01-15", "2025-03-20", "2025-02-10", "2025-04-05", "2025-06-18", "2025-05-22",
    # 63-68  update dates
    "2026-02-15", "2026-04-20", "2026-03-10", "2026-06-05", "2026-08-01", "2026-07-22",
    # 69-74  eol dates
    "2026-12-31", "2026-12-31", "2026-12-31", "2026-12-31", "2026-12-31", "2026-12-31",
]

print(f"String count: {len(strings)}")

ss_items = "".join(f"<si><t>{s}</t></si>" for s in strings)
shared = f'<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="{len(strings)}" uniqueCount="{len(strings)}">{ss_items}</sst>'
with open(OUT + '/xl/sharedStrings.xml', 'w', encoding='utf-8') as f:
    f.write(shared)
print("sharedStrings.xml done")

# ── workbook.xml ─────────────────────────────────────────────────────────────
workbook = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <fileVersion appName="xl" lastEdited="7" lowestEdited="7"/>
  <workbookPr defaultThemeVersion="166925"/>
  <bookViews><workbookView xWindow="0" yWindow="0" windowWidth="20140" windowHeight="10960"/></bookViews>
  <sheets>
    <sheet name="\u667a\u80fd\u4f53\u76ee\u5f55" sheetId="1" r:id="rId1"/>
    <sheet name="\u4f7f\u7528\u6570\u636e" sheetId="2" r:id="rId4"/>
    <sheet name="\u6210\u672c\u5206\u6790" sheetId="3" r:id="rId5"/>
    <sheet name="\u751f\u547d\u5468\u671f\u7ba1\u7406" sheetId="4" r:id="rId6"/>
  </sheets>
  <calcPr calcId="191029"/>
</workbook>'''
with open(OUT + '/xl/workbook.xml', 'w', encoding='utf-8') as f:
    f.write(workbook)
print("workbook.xml done")

# ── workbook.xml.rels ───────────────────────────────────────────────────────
wb_rels = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
  <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml"/>
  <Relationship Id="rId4" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet2.xml"/>
  <Relationship Id="rId5" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet3.xml"/>
  <Relationship Id="rId6" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet4.xml"/>
</Relationships>'''
with open(OUT + '/xl/_rels/workbook.xml.rels', 'w', encoding='utf-8') as f:
    f.write(wb_rels)
print("workbook.xml.rels done")

# ── [Content_Types].xml ────────────────────────────────────────────────────
ct = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
  <Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet2.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet3.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet4.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>
  <Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/>
</Types>'''
with open(OUT + '/[Content_Types].xml', 'w', encoding='utf-8') as f:
    f.write(ct)
print("[Content_Types].xml done")

# ── styles.xml ──────────────────────────────────────────────────────────────
styles = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <numFmts count="5">
    <numFmt numFmtId="164" formatCode="$#,##0;($#,##0);&quot;-&quot;"/>
    <numFmt numFmtId="165" formatCode="0.0%"/>
    <numFmt numFmtId="166" formatCode="0.0x"/>
    <numFmt numFmtId="167" formatCode="#,##0"/>
    <numFmt numFmtId="168" formatCode="0.00"/>
  </numFmts>
  <fonts count="6">
    <font><sz val="11"/><name val="Calibri"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="000000FF"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="00000000"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="00008000"/></font>
    <font><sz val="11"/><name val="Calibri"/><b/></font>
    <font><sz val="11"/><name val="Calibri"/><b/><color rgb="00000000"/></font>
  </fonts>
  <fills count="3">
    <fill><patternFill patternType="none"/></fill>
    <fill><patternFill patternType="gray125"/></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="00D9E8F5"/><bgColor indexed="64"/></patternFill></fill>
  </fills>
  <borders count="1"><border><left/><right/><top/><bottom/><diagonal/></border></borders>
  <cellXfs count="14">
    <xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0" applyFont="1"/>
    <xf numFmtId="0" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1"/>
    <xf numFmtId="0" fontId="2" fillId="0" borderId="0" xfId="0" applyFont="1"/>
    <xf numFmtId="0" fontId="3" fillId="0" borderId="0" xfId="0" applyFont="1"/>
    <xf numFmtId="0" fontId="5" fillId="0" borderId="0" xfId="0" applyFont="1"/>
    <xf numFmtId="164" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>
    <xf numFmtId="164" fontId="2" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>
    <xf numFmtId="165" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>
    <xf numFmtId="165" fontId="2" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>
    <xf numFmtId="167" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>
    <xf numFmtId="167" fontId="2" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>
    <xf numFmtId="1" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>
    <xf numFmtId="0" fontId="5" fillId="2" borderId="0" xfId="0" applyFont="1" applyFill="1"/>
    <xf numFmtId="168" fontId="2" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>
  </cellXfs>
</styleSheet>'''
with open(OUT + '/xl/styles.xml', 'w', encoding='utf-8') as f:
    f.write(styles)
print("styles.xml done")
