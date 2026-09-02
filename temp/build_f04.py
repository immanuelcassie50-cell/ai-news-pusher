#!/usr/bin/env python3
import os, shutil, subprocess

SKILL_DIR = "C:/Users/Administrator/.claude/skills/Excel表格处理"
TEMPLATE_DIR = SKILL_DIR + "/templates/minimal_xlsx"
OUTPUT_DIR = r"D:/新课开发/商业讲师/全域经营/完整课程包/06-工具表单"
WORK_DIR = r"D:/CC/temp/xlsx_f04"

os.makedirs(OUTPUT_DIR, exist_ok=True)
os.makedirs(WORK_DIR, exist_ok=True)
if os.path.exists(WORK_DIR): shutil.rmtree(WORK_DIR)
shutil.copytree(TEMPLATE_DIR, WORK_DIR)

strings = [
    "全域人才能力地图",
    "全域经营需要四类角色分工协作：战略管理者、用户运营、数据分析、数字导购，缺一不可。",
    "角色名称", "核心职责", "关键能力", "当前状态", "缺口评估",
    "战略管理者",
    "拍板方向、争取资源、在部门冲突时做决策，必须由一把手或一把手授权的人来扛",
    "战略决断力、部门协调能力、资源整合能力",
    "是否有专人负责？",
    "是否是一把手或授权代表？",
    "用户运营",
    "把战略方向转化成具体可执行的运营策略，设计用户分层规则，规划不同层级客户的运营路径",
    "用户分层能力、策略设计能力、跨部门沟通能力",
    "是否有专职团队？",
    "团队话语权如何？",
    "数据分析",
    "把散落在各系统的用户行为数据清洗、打通，变成用户运营能直接用的标签和洞察",
    "数据清洗能力、标签体系建设、数据解读能力",
    "是否有专职人员？",
    "数据覆盖哪些系统？",
    "数字导购",
    "站在客户面前、在企微和社群里跟客户对话，完成最后一步的真实触达",
    "话术设计能力、客户关系维护能力、异议处理能力",
    "一线导购是否培训过？",
    "话术是否有标准版本？",
    "能力缺口诊断",
    "角色", "是否有", "是否胜任", "优先级", "补齐路径",
    "战略管理者", "=IF(B3=\"是\",1,0)", "=IF(D3=\"是\",1,0)", "=IF(AND(B3=\"是\",D3=\"是\"),\"不紧急\",IF(B3=\"否\",\"紧急\",\"重要\"))", "=IF(B3=\"否\",\"先明确一把手授权\",IF(D3=\"否\",\"培训或引进人才\",\"维持现状\"))",
    "用户运营", "=IF(B4=\"是\",1,0)", "=IF(D4=\"是\",1,0)", "=IF(AND(B4=\"是\",D4=\"是\"),\"不紧急\",IF(B4=\"否\",\"紧急\",\"重要\"))", "=IF(B4=\"否\",\"尽快招聘或转岗\",IF(D4=\"否\",\"培训提升\",\"扩充团队\"))",
    "数据分析", "=IF(B5=\"是\",1,0)", "=IF(D5=\"是\",1,0)", "=IF(AND(B5=\"是\",D5=\"是\"),\"不紧急\",IF(B5=\"否\",\"紧急\",\"重要\"))", "=IF(B5=\"否\",\"尽快招聘\",IF(D5=\"否\",\"培训或引进\",\"扩充团队\"))",
    "数字导购", "=IF(B6=\"是\",1,0)", "=IF(D6=\"是\",1,0)", "=IF(AND(B6=\"是\",D6=\"是\"),\"不紧急\",IF(B6=\"否\",\"紧急\",\"重要\"))", "=IF(B6=\"否\",\"立即培训\",IF(D6=\"否\",\"标准化话术训练\",\"持续提升\"))",
    "使用说明", "请在当前状态列选择是/否，系统将自动计算优先级和补齐路径。",
]

r = subprocess.run(["python3", SKILL_DIR+"/scripts/shared_strings_builder.py"] + strings, capture_output=True, text=True)
if r.returncode != 0:
    print("Strings error:", r.stderr)
else:
    with open(WORK_DIR + "/xl/sharedStrings.xml", "w", encoding="utf-8") as f:
        f.write(r.stdout)

wb = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
<fileVersion appName="xl" lastEdited="7" lowestEdited="7"/>
<workbookPr defaultThemeVersion="166925"/>
<bookViews><workbookView xWindow="0" yWindow="0" windowWidth="20140" windowHeight="10960"/></bookViews>
<sheets>
<sheet name="四类角色定义" sheetId="1" r:id="rId1"/>
<sheet name="能力缺口诊断" sheetId="2" r:id="rId4"/>
<sheet name="补齐路径建议" sheetId="3" r:id="rId5"/>
</sheets>
<calcPr calcId="191029"/>
</workbook>'''
with open(WORK_DIR + "/xl/workbook.xml", "w", encoding="utf-8") as f:
    f.write(wb)

rels = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>
<Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
<Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml"/>
<Relationship Id="rId4" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet2.xml"/>
<Relationship Id="rId5" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet3.xml"/>
</Relationships>'''
with open(WORK_DIR + "/xl/_rels/workbook.xml.rels", "w", encoding="utf-8") as f:
    f.write(rels)

ct = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
<Default Extension="xml" ContentType="application/xml"/>
<Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
<Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
<Override PartName="/xl/worksheets/sheet2.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
<Override PartName="/xl/worksheets/sheet3.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
<Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>
<Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/>
</Types>'''
with open(WORK_DIR + "/[Content_Types].xml", "w", encoding="utf-8") as f:
    f.write(ct)

# Sheet1 - 四类角色定义
sheet1 = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
<sheetViews><sheetView workbookViewId="0"/></sheetViews>
<sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
<cols>
<col min="1" max="1" width="14" customWidth="1"/>
<col min="2" max="2" width="36" customWidth="1"/>
<col min="3" max="3" width="36" customWidth="1"/>
<col min="4" max="4" width="24" customWidth="1"/>
</cols>
<sheetData>
<row r="1" ht="30" customHeight="1"><c r="A1" t="s" s="4"><v>0</v></c></row>
<row r="2"><c r="A2" t="s" s="0"><v>1</v></c></row>
<row r="3" ht="18" customHeight="1"><c r="A3" t="s" s="4"><v>2</v></c><c r="B3" t="s" s="4"><v>3</v></c><c r="C3" t="s" s="4"><v>4</v></c><c r="D3" t="s" s="4"><v>5</v></c></row>
<row r="4"><c r="A4" t="s" s="0"><v>6</v></c><c r="B4" t="s" s="0"><v>7</v></c><c r="C4" t="s" s="0"><v>8</v></c><c r="D4" t="s" s="0"><v>9</v></c></row>
<row r="5"><c r="A5" t="s" s="0"><v>10</v></c><c r="B5" t="s" s="0"><v>11</v></c><c r="C5" t="s" s="0"><v>12</v></c><c r="D5" t="s" s="0"><v>13</v></c></row>
<row r="6"><c r="A6" t="s" s="0"><v>14</v></c><c r="B6" t="s" s="0"><v>15</v></c><c r="C6" t="s" s="0"><v>16</v></c><c r="D6" t="s" s="0"><v>17</v></c></row>
<row r="7"><c r="A7" t="s" s="0"><v>18</v></c><c r="B7" t="s" s="0"><v>19</v></c><c r="C7" t="s" s="0"><v>20</v></c><c r="D7" t="s" s="0"><v>21</v></c></row>
<row r="8"><c r="A8" t="s" s="4"><v>22</v></c></row>
</sheetData>
<pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''
with open(WORK_DIR + "/xl/worksheets/sheet1.xml", "w", encoding="utf-8") as f:
    f.write(sheet1)

# Sheet2 - 能力缺口诊断
sheet2 = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
<sheetViews><sheetView workbookViewId="0"/></sheetViews>
<sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
<cols>
<col min="1" max="1" width="14" customWidth="1"/>
<col min="2" max="2" width="12" customWidth="1"/>
<col min="3" max="3" width="12" customWidth="1"/>
<col min="4" max="4" width="14" customWidth="1"/>
<col min="5" max="5" width="36" customWidth="1"/>
</cols>
<sheetData>
<row r="1" ht="30" customHeight="1"><c r="A1" t="s" s="4"><v>22</v></c></row>
<row r="2" ht="18" customHeight="1"><c r="A2" t="s" s="4"><v>23</v></c><c r="B2" t="s" s="4"><v>24</v></c><c r="C2" t="s" s="4"><v>25</v></c><c r="D2" t="s" s="4"><v>26</v></c><c r="E2" t="s" s="4"><v>27</v></c></row>
<row r="3"><c r="A3" t="s" s="0"><v>6</v></c><c r="B3" t="s" s="1"><v>是</v></c><c r="C3" t="s" s="1"><v>是</v></c><c r="D3" t="s" s="2"><f>IF(AND(B3="是",C3="是"),"不紧急",IF(B3="否","紧急","重要"))</f><v></v></c><c r="E3" t="s" s="2"><f>IF(B3="否","先明确一把手授权",IF(C3="否","培训或引进人才","维持现状"))</f><v></v></c></row>
<row r="4"><c r="A4" t="s" s="0"><v>10</v></c><c r="B4" t="s" s="1"><v>是</v></c><c r="C4" t="s" s="1"><v>是</v></c><c r="D4" t="s" s="2"><f>IF(AND(B4="是",C4="是"),"不紧急",IF(B4="否","紧急","重要"))</f><v></v></c><c r="E4" t="s" s="2"><f>IF(B4="否","尽快招聘或转岗",IF(C4="否","培训提升","扩充团队"))</f><v></v></c></row>
<row r="5"><c r="A5" t="s" s="0"><v>14</v></c><c r="B5" t="s" s="1"><v>是</v></c><c r="C5" t="s" s="1"><v>是</v></c><c r="D5" t="s" s="2"><f>IF(AND(B5="是",C5="是"),"不紧急",IF(B5="否","紧急","重要"))</f><v></v></c><c r="E5" t="s" s="2"><f>IF(B5="否","尽快招聘",IF(C5="否","培训或引进","扩充团队"))</f><v></v></c></row>
<row r="6"><c r="A6" t="s" s="0"><v>18</v></c><c r="B6" t="s" s="1"><v>是</v></c><c r="C6" t="s" s="1"><v>是</v></c><c r="D6" t="s" s="2"><f>IF(AND(B6="是",C6="是"),"不紧急",IF(B6="否","紧急","重要"))</f><v></v></c><c r="E6" t="s" s="2"><f>IF(B6="否","立即培训",IF(C6="否","标准化话术训练","持续提升"))</f><v></v></c></row>
<row r="7"><c r="A7" t="s" s="4"><v>28</v></c></row>
</sheetData>
<dataValidations><dataValidation type="list" sqref="B3:C6" showInputMessage="1" prompt="请选择是/否" promptTitle="状态"><formula1>是,否</formula1></dataValidation></dataValidations>
<pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''
with open(WORK_DIR + "/xl/worksheets/sheet2.xml", "w", encoding="utf-8") as f:
    f.write(sheet2)

# Sheet3 - 补齐路径建议
sheet3 = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
<sheetViews><sheetView workbookViewId="0"/></sheetViews>
<sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
<cols>
<col min="1" max="1" width="14" customWidth="1"/>
<col min="2" max="2" width="50" customWidth="1"/>
</cols>
<sheetData>
<row r="1" ht="30" customHeight="1"><c r="A1" t="s" s="4"><v>22</v></c></row>
<row r="2"><c r="A2" t="s" s="4"><v>6</v></c><c r="B2" t="s" s="3"><f>"能力缺口诊断"!E3</f><v></v></c></row>
<row r="3"><c r="A3" t="s" s="4"><v>10</v></c><c r="B3" t="s" s="3"><f>"能力缺口诊断"!E4</f><v></v></c></row>
<row r="4"><c r="A4" t="s" s="4"><v>14</v></c><c r="B4" t="s" s="3"><f>"能力缺口诊断"!E5</f><v></v></c></row>
<row r="5"><c r="A5" t="s" s="4"><v>18</v></c><c r="B5" t="s" s="3"><f>"能力缺口诊断"!E6</f><v></v></c></row>
<row r="6"><c r="A6" t="s" s="4"><v>29</v></c></row>
</sheetData>
<pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''
with open(WORK_DIR + "/xl/worksheets/sheet3.xml", "w", encoding="utf-8") as f:
    f.write(sheet3)

out_path = OUTPUT_DIR + "/04-全域人才能力地图.xlsx"
r = subprocess.run(["python3", SKILL_DIR+"/scripts/xlsx_pack.py", WORK_DIR, out_path], capture_output=True, text=True)
if r.returncode != 0:
    print("Pack error:", r.stderr)
else:
    print("Created:", out_path)