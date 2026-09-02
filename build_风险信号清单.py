# -*- coding: utf-8 -*-
"""Build 风险信号清单.xlsx using XML template approach"""
import os
import html
import zipfile
import shutil

WORK_DIR = r'D:\temp\risk_work'
OUT_XLSX = r'D:\新课开发\变革管理\14-组织风险的提前预警话术：在合同签订前把话说清楚\完整课程包\07-工具表单\风险信号清单.xlsx'

# Clean and create dirs
if os.path.exists(WORK_DIR):
    shutil.rmtree(WORK_DIR)
for d in [WORK_DIR, f'{WORK_DIR}/_rels', f'{WORK_DIR}/xl', f'{WORK_DIR}/xl/_rels', f'{WORK_DIR}/xl/worksheets']:
    os.makedirs(d, exist_ok=True)

# =========== [Content_Types].xml ===========
ct = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
  <Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet2.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet3.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet4.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet5.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>
  <Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/>
</Types>'''
with open(f'{WORK_DIR}/[Content_Types].xml', 'w', encoding='utf-8') as f:
    f.write(ct)

# =========== _rels/.rels ===========
rels = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/>
</Relationships>'''
with open(f'{WORK_DIR}/_rels/.rels', 'w', encoding='utf-8') as f:
    f.write(rels)

# =========== xl/_rels/workbook.xml.rels ===========
wbrels = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
  <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml"/>
  <Relationship Id="rId4" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet2.xml"/>
  <Relationship Id="rId5" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet3.xml"/>
  <Relationship Id="rId6" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet4.xml"/>
  <Relationship Id="rId7" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet5.xml"/>
</Relationships>'''
with open(f'{WORK_DIR}/xl/_rels/workbook.xml.rels', 'w', encoding='utf-8') as f:
    f.write(wbrels)

# =========== xl/workbook.xml ===========
wb = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <fileVersion appName="xl" lastEdited="7" lowestEdited="7"/>
  <workbookPr defaultThemeVersion="166925"/>
  <bookViews><workbookView xWindow="0" yWindow="0" windowWidth="20140" windowHeight="10960"/></bookViews>
  <sheets>
    <sheet name="Sheet1-岗位与权力变化识别" sheetId="1" r:id="rId1"/>
    <sheet name="Sheet2-数据与权限变化识别" sheetId="2" r:id="rId4"/>
    <sheet name="Sheet3-决策权变化识别" sheetId="3" r:id="rId5"/>
    <sheet name="Sheet4-阻力信号评估" sheetId="4" r:id="rId6"/>
    <sheet name="Sheet5-综合风险评级" sheetId="5" r:id="rId7"/>
  </sheets>
  <calcPr calcId="191029"/>
</workbook>'''
with open(f'{WORK_DIR}/xl/workbook.xml', 'w', encoding='utf-8') as f:
    f.write(wb)

# =========== xl/sharedStrings.xml ===========
STRINGS = [
    '序号','检查问题','是','否','不确定','风险等级(1-5)','备注/应对方案',
    # Sheet1 items 0-16
    '项目是否会导致某些岗位的工作内容发生重大变化？',
    '项目是否会导致某些岗位的汇报关系发生变化？',
    '项目是否会导致某些岗位的绩效考核标准发生变化？',
    '项目是否会导致某些岗位的人员编制发生变化？',
    '是否有人可能在项目中失去权力、地位或影响力？',
    '是否有人担心自己的专业价值被系统贬低？',
    '是否有人担心原有的决策方式被改变？',
    '项目是否会影响某些人的晋升机会？',
    '是否有人对变革持抵触态度？',
    '是否有人可能在项目中被边缘化？',
    # Sheet2 items 17-27
    '数据与权限变化识别',
    '是否涉及数据访问权限的变更？',
    '是否涉及数据所有权的变更？',
    '是否涉及数据存储位置的变更？',
    '是否涉及数据备份/恢复流程的变更？',
    '是否涉及数据保密等级的变更？',
    '是否涉及系统访问账户的变更？',
    '是否有人失去对某些数据的访问权？',
    '是否有人获得原本没有的数据访问权？',
    '新系统是否会影响现有数据质量？',
    '是否有人担心数据隐私泄露？',
    # Sheet3 items 28-38
    '决策权变化识别',
    '是否涉及审批流程的变更？',
    '是否涉及预算审批权限的变更？',
    '是否涉及采购权限的变更？',
    '是否涉及人事决策权的变更？',
    '是否涉及战略决策参与的变更？',
    '是否有人失去原有的决策影响力？',
    '是否有人获得新的决策权力？',
    '决策路径是否变得不清晰？',
    '是否有人担心决策被系统取代？',
    # Sheet4 items 39-57
    '阻力信号评估','级别','信号','描述','影响程度',
    '1级','完全支持','主动为项目说好话','无风险',
    '2级','策略性观望','口头支持但不行动','低风险',
    '3级','小声抱怨','私下表达不满','中风险',
    '4级','公开反对','正式场合提出反对','高风险',
    '5级','暗中破坏','拖延、散布负面信息','极高风险',
    # Sheet5 items 58-83
    '综合风险评级','评估维度','Sheet1得分','Sheet2得分',
    'Sheet3得分','Sheet4最高级别','综合风险等级','建议行动',
    '权重','加权得分',
    '岗位与权力变化','数据与权限变化','决策权变化','阻力信号',
    '高风险','中风险','低风险',
    '需立即干预，高层介入','制定应对方案，明确责任',
    '保持沟通，监控动向','持续观察，保持关注',
]

n = len(STRINGS)
lines = ['<?xml version="1.0" encoding="UTF-8" standalone="yes"?>']
lines.append(f'<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="{n}" uniqueCount="{n}">')
for s in STRINGS:
    lines.append(f'  <si><t>{html.escape(s)}</t></si>')
lines.append('</sst>')
with open(f'{WORK_DIR}/xl/sharedStrings.xml', 'w', encoding='utf-8') as f:
    f.write('\n'.join(lines) + '\n')
print(f'sharedStrings: {n} strings')

# =========== xl/styles.xml ===========
styles = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <numFmts count="5">
    <numFmt numFmtId="164" formatCode="\\$#,##0;(\\$#,##0);&quot;-&quot;"/>
    <numFmt numFmtId="165" formatCode="0.0%"/>
    <numFmt numFmtId="166" formatCode="0.0x"/>
    <numFmt numFmtId="167" formatCode="#,##0"/>
    <numFmt numFmtId="168" formatCode="0"/>
  </numFmts>
  <fonts count="8">
    <font><sz val="11"/><name val="Calibri"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="000000FF"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="00000000"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="00008000"/></font>
    <font><sz val="11"/><name val="Calibri"/><b/></font>
    <font><sz val="11"/><name val="Calibri"/><b/><color rgb="00000000"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="00C41E3A"/></font>
    <font><sz val="11"/><name val="Calibri"/><b/><color rgb="FFFFFFFF"/></font>
  </fonts>
  <fills count="5">
    <fill><patternFill patternType="none"/></fill>
    <fill><patternFill patternType="gray125"/></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="00C41E3A"/><bgColor indexed="64"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="00D9D9D9"/><bgColor indexed="64"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="00FFF0F0"/><bgColor indexed="64"/></patternFill></fill>
  </fills>
  <borders count="2">
    <border><left/><right/><top/><bottom/><diagonal/></border>
    <border><left style="thin"><color rgb="00000000"/></left><right style="thin"><color rgb="00000000"/></right><top style="thin"><color rgb="00000000"/></top><bottom style="thin"><color rgb="00000000"/></bottom/></border>
  </borders>
  <cellXfs count="16">
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
    <xf numFmtId="0" fontId="7" fillId="2" borderId="0" xfId="0" applyFont="1" applyFill="1"/>
    <xf numFmtId="0" fontId="2" fillId="3" borderId="0" xfId="0" applyFont="1" applyFill="1"/>
    <xf numFmtId="168" fontId="2" fillId="0" borderId="1" xfId="0" applyFont="1" applyNumberFormat="1" applyBorder="1"/>
  </cellXfs>
</styleSheet>'''
with open(f'{WORK_DIR}/xl/styles.xml', 'w', encoding='utf-8') as f:
    f.write(styles)
print('styles.xml written')

# =========== xl/worksheets/sheet1.xml (岗位与权力变化识别) ===========
# Columns: A=序号, B=检查问题, C=是, D=否, E=不确定, F=风险等级, G=备注
# s13=red header, s15=alternating row
def make_sheet1():
    rows = []
    rows.append('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>')
    rows.append('<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">')
    rows.append('  <sheetViews><sheetView tabSelected="1" workbookViewId="0"><pane ySplit="1" topLeftCell="A2" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>')
    rows.append('  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>')
    rows.append('  <cols><col min="1" max="1" width="8" customWidth="1"/><col min="2" max="2" width="45" customWidth="1"/><col min="3" max="3" width="8" customWidth="1"/><col min="4" max="4" width="8" customWidth="1"/><col min="5" max="5" width="10" customWidth="1"/><col min="6" max="6" width="12" customWidth="1"/><col min="7" max="7" width="30" customWidth="1"/></cols>')
    rows.append('  <sheetData>')
    # Header row
    rows.append('  <row r="1" ht="25" customHeight="1">')
    for col, si in [('A','0'),('B','1'),('C','2'),('D','3'),('E','4'),('F','5'),('G','6')]:
        rows.append(f'    <c r="{col}1" t="s" s="13"><v>{si}</v></c>')
    rows.append('  </row>')
    # Data rows - items 7-16 in sharedStrings (0-indexed)
    item_indices = [7,8,9,10,11,12,13,14,15,16]
    for i, idx in enumerate(item_indices):
        row_num = i + 2
        # B col has the question text, alternating style s15
        b_style = '15' if i % 2 == 0 else '0'
        rows.append(f'  <row r="{row_num}">')
        rows.append(f'    <c r="A{row_num}" t="n" s="15"><v>{i+1}</v></c>')
        rows.append(f'    <c r="B{row_num}" t="s" s="{b_style}"><v>{idx}</v></c>')
        # C,D,E dropdown cells
        rows.append(f'    <c r="C{row_num}" t="s" s="15"><v></v></c>')
        rows.append(f'    <c r="D{row_num}" t="s" s="15"><v></v></c>')
        rows.append(f'    <c r="E{row_num}" t="s" s="15"><v></v></c>')
        # F = IF formula for risk level
        rows.append(f'    <c r="F{row_num}" s="15"><f>IF(C{row_num}="是",3,IF(D{row_num}="是",5,IF(E{row_num}="不确定",2,1)))</f><v></v></c>')
        # G = remarks
        rows.append(f'    <c r="G{row_num}" t="s" s="15"><v></v></c>')
        rows.append(f'  </row>')
    rows.append('  </sheetData>')
    rows.append('  <dataValidations>')
    rows.append('    <dataValidation type="list" sqref="C2:C11"><formula1>"是,否,不确定"</formula1></dataValidation>')
    rows.append('    <dataValidation type="list" sqref="D2:D11"><formula1>"是,否,不确定"</formula1></dataValidation>')
    rows.append('    <dataValidation type="list" sqref="E2:E11"><formula1>"是,否,不确定"</formula1></dataValidation>')
    rows.append('  </dataValidations>')
    rows.append('  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>')
    rows.append('</worksheet>')
    return '\n'.join(rows)

with open(f'{WORK_DIR}/xl/worksheets/sheet1.xml', 'w', encoding='utf-8') as f:
    f.write(make_sheet1())
print('sheet1.xml written')

# =========== xl/worksheets/sheet2.xml (数据与权限变化识别) ===========
def make_sheet2():
    rows = []
    rows.append('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>')
    rows.append('<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">')
    rows.append('  <sheetViews><sheetView tabSelected="0" workbookViewId="0"><pane ySplit="1" topLeftCell="A2" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>')
    rows.append('  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>')
    rows.append('  <cols><col min="1" max="1" width="8" customWidth="1"/><col min="2" max="2" width="45" customWidth="1"/><col min="3" max="3" width="8" customWidth="1"/><col min="4" max="4" width="8" customWidth="1"/><col min="5" max="5" width="10" customWidth="1"/><col min="6" max="6" width="12" customWidth="1"/><col min="7" max="7" width="30" customWidth="1"/></cols>')
    rows.append('  <sheetData>')
    # Header
    rows.append('  <row r="1" ht="25" customHeight="1">')
    for col, si in [('A','0'),('B','17'),('C','2'),('D','3'),('E','4'),('F','5'),('G','6')]:
        rows.append(f'    <c r="{col}1" t="s" s="13"><v>{si}</v></c>')
    rows.append('  </row>')
    # Items indices 18-27
    item_indices = [18,19,20,21,22,23,24,25,26,27]
    for i, idx in enumerate(item_indices):
        row_num = i + 2
        b_style = '15' if i % 2 == 0 else '0'
        rows.append(f'  <row r="{row_num}">')
        rows.append(f'    <c r="A{row_num}" t="n" s="15"><v>{i+1}</v></c>')
        rows.append(f'    <c r="B{row_num}" t="s" s="{b_style}"><v>{idx}</v></c>')
        rows.append(f'    <c r="C{row_num}" t="s" s="15"><v></v></c>')
        rows.append(f'    <c r="D{row_num}" t="s" s="15"><v></v></c>')
        rows.append(f'    <c r="E{row_num}" t="s" s="15"><v></v></c>')
        rows.append(f'    <c r="F{row_num}" s="15"><f>IF(C{row_num}="是",3,IF(D{row_num}="是",5,IF(E{row_num}="不确定",2,1)))</f><v></v></c>')
        rows.append(f'    <c r="G{row_num}" t="s" s="15"><v></v></c>')
        rows.append(f'  </row>')
    rows.append('  </sheetData>')
    rows.append('  <dataValidations>')
    rows.append('    <dataValidation type="list" sqref="C2:C11"><formula1>"是,否,不确定"</formula1></dataValidation>')
    rows.append('    <dataValidation type="list" sqref="D2:D11"><formula1>"是,否,不确定"</formula1></dataValidation>')
    rows.append('    <dataValidation type="list" sqref="E2:E11"><formula1>"是,否,不确定"</formula1></dataValidation>')
    rows.append('  </dataValidations>')
    rows.append('  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>')
    rows.append('</worksheet>')
    return '\n'.join(rows)

with open(f'{WORK_DIR}/xl/worksheets/sheet2.xml', 'w', encoding='utf-8') as f:
    f.write(make_sheet2())
print('sheet2.xml written')

# =========== xl/worksheets/sheet3.xml (决策权变化识别) ===========
def make_sheet3():
    rows = []
    rows.append('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>')
    rows.append('<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">')
    rows.append('  <sheetViews><sheetView tabSelected="0" workbookViewId="0"><pane ySplit="1" topLeftCell="A2" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>')
    rows.append('  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>')
    rows.append('  <cols><col min="1" max="1" width="8" customWidth="1"/><col min="2" max="2" width="45" customWidth="1"/><col min="3" max="3" width="8" customWidth="1"/><col min="4" max="4" width="8" customWidth="1"/><col min="5" max="5" width="10" customWidth="1"/><col min="6" max="6" width="12" customWidth="1"/><col min="7" max="7" width="30" customWidth="1"/></cols>')
    rows.append('  <sheetData>')
    rows.append('  <row r="1" ht="25" customHeight="1">')
    for col, si in [('A','0'),('B','28'),('C','2'),('D','3'),('E','4'),('F','5'),('G','6')]:
        rows.append(f'    <c r="{col}1" t="s" s="13"><v>{si}</v></c>')
    rows.append('  </row>')
    item_indices = [29,30,31,32,33,34,35,36,37,38]
    for i, idx in enumerate(item_indices):
        row_num = i + 2
        b_style = '15' if i % 2 == 0 else '0'
        rows.append(f'  <row r="{row_num}">')
        rows.append(f'    <c r="A{row_num}" t="n" s="15"><v>{i+1}</v></c>')
        rows.append(f'    <c r="B{row_num}" t="s" s="{b_style}"><v>{idx}</v></c>')
        rows.append(f'    <c r="C{row_num}" t="s" s="15"><v></v></c>')
        rows.append(f'    <c r="D{row_num}" t="s" s="15"><v></v></c>')
        rows.append(f'    <c r="E{row_num}" t="s" s="15"><v></v></c>')
        rows.append(f'    <c r="F{row_num}" s="15"><f>IF(C{row_num}="是",3,IF(D{row_num}="是",5,IF(E{row_num}="不确定",2,1)))</f><v></v></c>')
        rows.append(f'    <c r="G{row_num}" t="s" s="15"><v></v></c>')
        rows.append(f'  </row>')
    rows.append('  </sheetData>')
    rows.append('  <dataValidations>')
    rows.append('    <dataValidation type="list" sqref="C2:C11"><formula1>"是,否,不确定"</formula1></dataValidation>')
    rows.append('    <dataValidation type="list" sqref="D2:D11"><formula1>"是,否,不确定"</formula1></dataValidation>')
    rows.append('    <dataValidation type="list" sqref="E2:E11"><formula1>"是,否,不确定"</formula1></dataValidation>')
    rows.append('  </dataValidations>')
    rows.append('  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>')
    rows.append('</worksheet>')
    return '\n'.join(rows)

with open(f'{WORK_DIR}/xl/worksheets/sheet3.xml', 'w', encoding='utf-8') as f:
    f.write(make_sheet3())
print('sheet3.xml written')

# =========== xl/worksheets/sheet4.xml (阻力信号评估) ===========
# Columns: A=级别, B=信号, C=描述, D=影响程度
def make_sheet4():
    rows = []
    rows.append('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>')
    rows.append('<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">')
    rows.append('  <sheetViews><sheetView tabSelected="0" workbookViewId="0"/></sheetViews>')
    rows.append('  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>')
    rows.append('  <cols><col min="1" max="1" width="8" customWidth="1"/><col min="2" max="2" width="20" customWidth="1"/><col min="3" max="3" width="35" customWidth="1"/><col min="4" max="4" width="15" customWidth="1"/></cols>')
    rows.append('  <sheetData>')
    # Header
    rows.append('  <row r="1" ht="25" customHeight="1">')
    for col, si in [('A','39'),('B','40'),('C','41'),('D','42')]:
        rows.append(f'    <c r="{col}1" t="s" s="13"><v>{si}</v></c>')
    rows.append('  </row>')
    # Data rows - indices 43-57
    item_data = [
        (43,'1级','完全支持','主动为项目说好话','无风险'),
        (46,'2级','策略性观望','口头支持但不行动','低风险'),
        (49,'3级','小声抱怨','私下表达不满','中风险'),
        (52,'4级','公开反对','正式场合提出反对','高风险'),
        (55,'5级','暗中破坏','拖延、散布负面信息','极高风险'),
    ]
    for i, item in enumerate(item_data):
        si_idx = item[0]
        row_num = i + 2
        rows.append(f'  <row r="{row_num}" ht="22" customHeight="1">')
        rows.append(f'    <c r="A{row_num}" t="n" s="15"><v>{i+1}</v></c>')
        rows.append(f'    <c r="B{row_num}" t="s" s="15"><v>{si_idx}</v></c>')
        rows.append(f'    <c r="C{row_num}" t="s" s="15"><v>{si_idx+1}</v></c>')
        rows.append(f'    <c r="D{row_num}" t="s" s="15"><v>{si_idx+2}</v></c>')
        rows.append(f'  </row>')
    rows.append('  </sheetData>')
    rows.append('  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>')
    rows.append('</worksheet>')
    return '\n'.join(rows)

with open(f'{WORK_DIR}/xl/worksheets/sheet4.xml', 'w', encoding='utf-8') as f:
    f.write(make_sheet4())
print('sheet4.xml written')

# =========== xl/worksheets/sheet5.xml (综合风险评级) ===========
# A=评估维度, B=权重, C=加权得分, D=综合风险等级, E=建议行动
# Row structure:
# R1: headers
# R2-5: four dimension rows with formulas pulling from other sheets
# R6: 综合风险等级 summary row
# R7: 建议行动 row
# R9-13: risk level legend
def make_sheet5():
    rows = []
    rows.append('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>')
    rows.append('<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">')
    rows.append('  <sheetViews><sheetView tabSelected="0" workbookViewId="0"/></sheetViews>')
    rows.append('  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>')
    rows.append('  <cols>')
    rows.append('    <col min="1" max="1" width="25" customWidth="1"/>')
    rows.append('    <col min="2" max="2" width="15" customWidth="1"/>')
    rows.append('    <col min="3" max="3" width="15" customWidth="1"/>')
    rows.append('    <col min="4" max="4" width="15" customWidth="1"/>')
    rows.append('    <col min="5" max="5" width="15" customWidth="1"/>')
    rows.append('    <col min="6" max="6" width="15" customWidth="1"/>')
    rows.append('    <col min="7" max="7" width="30" customWidth="1"/>')
    rows.append('  </cols>')
    rows.append('  <sheetData>')
    # R1 Header
    rows.append('  <row r="1" ht="25" customHeight="1">')
    for col, si in [('A','58'),('B','59'),('C','60'),('D','61'),('E','62'),('F','63'),('G','64')]:
        rows.append(f'    <c r="{col}1" t="s" s="13"><v>{si}</v></c>')
    rows.append('  </row>')
    # R2: 岗位与权力变化 - SUM of F column from sheet1
    rows.append('  <row r="2">')
    rows.append('    <c r="A2" t="s" s="15"><v>65</v></c>')
    rows.append('    <c r="B2" t="n" s="15"><v>30</v></c>')
    # Weighted score = (sheet1 sum / 50) * weight
    rows.append('    <c r="C2" s="15"><f>SUM(\'Sheet1-岗位与权力变化识别\'!F2:F11)/50*B2</f><v></v></c>')
    rows.append('    <c r="D2" t="n" s="15"><v>0</v></c>')
    rows.append('    <c r="E2" t="n" s="15"><v>0</v></c>')
    rows.append('    <c r="F2" t="n" s="15"><v>0</v></c>')
    rows.append('    <c r="G2" t="s" s="15"><v></v></c>')
    rows.append('  </row>')
    # R3: 数据与权限变化
    rows.append('  <row r="3">')
    rows.append('    <c r="A3" t="s" s="15"><v>66</v></c>')
    rows.append('    <c r="B3" t="n" s="15"><v>25</v></c>')
    rows.append('    <c r="C3" s="15"><f>SUM(\'Sheet2-数据与权限变化识别\'!F2:F11)/50*B3</f><v></v></c>')
    rows.append('    <c r="D3" t="n" s="15"><v>0</v></c>')
    rows.append('    <c r="E3" t="n" s="15"><v>0</v></c>')
    rows.append('    <c r="F3" t="n" s="15"><v>0</v></c>')
    rows.append('    <c r="G3" t="s" s="15"><v></v></c>')
    rows.append('  </row>')
    # R4: 决策权变化
    rows.append('  <row r="4">')
    rows.append('    <c r="A4" t="s" s="15"><v>67</v></c>')
    rows.append('    <c r="B4" t="n" s="15"><v>25</v></c>')
    rows.append('    <c r="C4" s="15"><f>SUM(\'Sheet3-决策权变化识别\'!F2:F11)/50*B4</f><v></v></c>')
    rows.append('    <c r="D4" t="n" s="15"><v>0</v></c>')
    rows.append('    <c r="E4" t="n" s="15"><v>0</v></c>')
    rows.append('    <c r="F4" t="n" s="15"><v>0</v></c>')
    rows.append('    <c r="G4" t="s" s="15"><v></v></c>')
    rows.append('  </row>')
    # R5: 阻力信号 - max from sheet4
    rows.append('  <row r="5">')
    rows.append('    <c r="A5" t="s" s="15"><v>68</v></c>')
    rows.append('    <c r="B5" t="n" s="15"><v>20</v></c>')
    rows.append('    <c r="C5" s="15"><f>MAX(\'Sheet4-阻力信号评估\'!A2:A6)*B5/100</f><v></v></c>')
    rows.append('    <c r="D5" t="n" s="15"><v>0</v></c>')
    rows.append('    <c r="E5" t="n" s="15"><v>0</v></c>')
    rows.append('    <c r="F5" t="n" s="15"><v>0</v></c>')
    rows.append('    <c r="G5" t="s" s="15"><v></v></c>')
    rows.append('  </row>')
    # R6: 综合风险等级 (sum of weighted scores)
    rows.append('  <row r="6" ht="25" customHeight="1">')
    rows.append('    <c r="A6" t="s" s="13"><v>63</v></c>')
    rows.append('    <c r="B6" s="13"><f>SUM(C2:C5)</f><v></v></c>')
    rows.append('  </row>')
    # R7: 建议行动
    rows.append('  <row r="7" ht="25" customHeight="1">')
    rows.append('    <c r="A7" t="s" s="13"><v>64</v></c>')
    rows.append('    <c r="B7" s="14"><f>IF(B6&gt;=4,"需立即干预，高层介入",IF(B6&gt;=3,"制定应对方案，明确责任",IF(B6&gt;=2,"保持沟通，监控动向","持续观察，保持关注")))</f><v></v></c>')
    rows.append('  </row>')
    # R9-13: Legend
    legend = [
        (69, 70, 71, 72),
        (73, 74, 75, 76),
        (77, 78, 79, 80),
        (81, 82, 83, 84),
    ]
    for i, (a, b, c, d) in enumerate(legend):
        r = 9 + i
        rows.append(f'  <row r="{r}">')
        rows.append(f'    <c r="A{r}" t="s" s="15"><v>{a}</v></c>')
        rows.append(f'    <c r="B{r}" t="s" s="15"><v>{b}</v></c>')
        rows.append(f'    <c r="C{r}" t="s" s="15"><v>{c}</v></c>')
        rows.append(f'    <c r="D{r}" t="s" s="15"><v>{d}</v></c>')
        rows.append(f'  </row>')
    rows.append('  </sheetData>')
    rows.append('  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>')
    rows.append('</worksheet>')
    return '\n'.join(rows)

with open(f'{WORK_DIR}/xl/worksheets/sheet5.xml', 'w', encoding='utf-8') as f:
    f.write(make_sheet5())
print('sheet5.xml written')

# =========== PACK ===========
os.makedirs(os.path.dirname(OUT_XLSX), exist_ok=True)

with zipfile.ZipFile(OUT_XLSX, 'w', zipfile.ZIP_DEFLATED) as zf:
    for root, dirs, files in os.walk(WORK_DIR):
        for file in files:
            filepath = os.path.join(root, file)
            arcname = os.path.relpath(filepath, WORK_DIR)
            zf.write(filepath, arcname)

print(f'Packed to: {OUT_XLSX}')
print(f'File size: {os.path.getsize(OUT_XLSX)} bytes')
