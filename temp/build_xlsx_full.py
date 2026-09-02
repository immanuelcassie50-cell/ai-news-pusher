#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import zipfile, os, shutil

work_dir = 'D:/CC/temp/xlsx_full'
OUTPUT = 'D:/新课开发/经验萃取/手册/完整手册/完整课程包/06_全流程工具表单/A1_配套表单集_空白版.xlsx'

if os.path.exists(work_dir):
    shutil.rmtree(work_dir)
os.makedirs(work_dir)
os.makedirs(os.path.join(work_dir, 'xl', '_rels'))
os.makedirs(os.path.join(work_dir, 'xl', 'worksheets'))
os.makedirs(os.path.join(work_dir, '_rels'))

def e(s):
    return s.replace('&','&amp;').replace('<','&lt;').replace('>','&gt;')

def c(ref, style, text):
    return '<c r="{}" s="{}" t="inlineStr"><is><t>{}</t></is></c>'.format(ref, style, e(text))

def row(rnum, cells, ht=None):
    attrs = 'r="{}"'.format(rnum)
    if ht:
        attrs += ' ht="{}" customHeight="1"'.format(ht)
    return '<row {}>\n    {}\n  </row>'.format(attrs, '\n    '.join(cells))

STYLES = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <numFmts count="0"/>
  <fonts>
    <font><name val="Arial"/><sz val="11"/></font>
    <font><name val="Arial"/><b/><sz val="14"/><color rgb="00FFFFFF"/></font>
    <font><name val="Arial"/><b/><sz val="11"/><color rgb="00FFFFFF"/></font>
    <font><name val="Arial"/><b/><sz val="11"/><color rgb="001B4F9B"/></font>
    <font><name val="Arial"/><sz val="10"/></font>
    <font><name val="Arial"/><i/><sz val="9"/><color rgb="00706060"/></font>
    <font><name val="Arial"/><sz val="9"/><color rgb="00C00000"/></font>
  </fonts>
  <fills>
    <fill><patternFill patternType="none"/></fill>
    <fill><patternFill patternType="gray125"/></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="001B4F9B"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="00DEEAF1"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="00F2F2F2"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="00FFFFC0"/></patternFill></fill>
  </fills>
  <borders>
    <border><left/><right/><top/><bottom/><diagonal/></border>
    <border>
      <left style="thin"><color rgb="00AAAAAA"/></left>
      <right style="thin"><color rgb="00AAAAAA"/></right>
      <top style="thin"><color rgb="00AAAAAA"/></top>
      <bottom style="thin"><color rgb="00AAAAAA"/></bottom>
    </border>
  </borders>
  <cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>
  <cellXfs>
    <xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/>
    <xf numFmtId="0" fontId="1" fillId="2" borderId="0" xfId="0" applyAlignment="1"><alignment horizontal="center" vertical="center" wrapText="1"/></xf>
    <xf numFmtId="0" fontId="2" fillId="2" borderId="1" xfId="0" applyAlignment="1"><alignment horizontal="center" vertical="center" wrapText="1"/></xf>
    <xf numFmtId="0" fontId="3" fillId="3" borderId="1" xfId="0" applyAlignment="1"><alignment horizontal="center" vertical="center" wrapText="1"/></xf>
    <xf numFmtId="0" fontId="4" fillId="4" borderId="0" xfId="0" applyAlignment="1"><alignment horizontal="left" vertical="center" wrapText="1"/></xf>
    <xf numFmtId="0" fontId="0" fillId="5" borderId="1" xfId="0" applyAlignment="1"><alignment horizontal="left" vertical="center" wrapText="1"/></xf>
    <xf numFmtId="0" fontId="0" fillId="0" borderId="1" xfId="0" applyAlignment="1"><alignment horizontal="left" vertical="center" wrapText="1"/></xf>
    <xf numFmtId="0" fontId="5" fillId="4" borderId="0" xfId="0" applyAlignment="1"><alignment horizontal="left" vertical="center" wrapText="1"/></xf>
    <xf numFmtId="0" fontId="2" fillId="2" borderId="1" xfId="0" applyAlignment="1"><alignment horizontal="center" vertical="center" wrapText="1"/></xf>
  </cellXfs>
</styleSheet>'''

# Build index sheet
rows = []
r = 1
rows.append(row(r, [c('A1','1','AI时代经验传承：岗位手册批量开发工作坊'), c('B1','1','配套表单集（空白版）')], '40')); r+=1
rows.append(row(r, [c('A2','0','')])); r+=1
rows.append(row(r, [c('A3','2','编号'), c('B3','2','表单名称'), c('C3','2','使用阶段'), c('D3','2','主要填写人'), c('E3','2','工作表页码')], '28')); r+=1
idx = [
    (1,'课前准备清单','工作坊开始前','全体学员','Form0-课前准备检查表'),
    (2,'手册类型判断表','第一天上午','全组讨论','Form1-手册类型判断'),
    (3,'课题定位表','第一天上午','三类人群确认','Form2-课题定位表'),
    (4,'访谈准备清单','访谈开始前','访谈组织者','Form3-访谈准备清单'),
    (5,'角色A访谈记录表','第一天下午','角色本人或访谈者','Form4-A角色访谈记录'),
    (6,'角色B访谈记录表','第一天下午','角色本人或访谈者','Form5-B角色访谈记录'),
    (7,'角色C访谈记录表','第一天下午','角色本人或访谈者','Form6-C角色访谈记录'),
    (8,'操作手册材料组织表','第一天下午末','小组协作','Form7-操作手册素材整理'),
    (9,'带教手册材料组织表','第一天下午末','小组协作','Form8-带教手册素材整理'),
    (10,'应知应会手册材料组织表','第一天下午末','小组协作','Form9-应知应会素材整理'),
    (11,'提交前三检查','提交Skill前','素材整理负责人','Form10-Skill提交前自查'),
    (12,'初稿速览检查','收到初稿后','小组协作','Form11-初稿速览检查'),
    (13,'角色A初稿标记记录表','第二天上午','角色A','Form12-A角色审阅记录'),
    (14,'角色B初稿标记记录表','第二天上午','角色B','Form13-B角色审阅记录'),
    (15,'角色C初稿标记记录表','第二天上午','角色C','Form14-C角色审阅记录'),
    (16,'优先级排序汇总表','第二天上午末','全组汇总','Form15-优先级排序汇总'),
    (17,'操作手册深度校验清单','第二天上午','小组协作','Form16-操作手册校验清单'),
    (18,'带教手册深度校验清单','第二天上午','小组协作','Form17-带教手册校验清单'),
    (19,'应知应会手册深度校验清单','第二天上午','小组协作','Form18-应知应会校验清单'),
    (20,'五步优化工作表','第二天下午','手册负责人','Form19-五步优化工作表'),
    (21,'跨手册交叉审阅表','第二天下午','评审双方','Form20-跨手册交叉审阅'),
    (22,'课后迭代计划表','工作坊收尾','课题负责人','Form21-课后迭代计划表'),
]
for i,(num,name,stage,who,sname) in enumerate(idx):
    bg = '3' if i%2==0 else '4'
    rows.append(row(r, [c('A{}'.format(r),bg,str(num)), c('B{}'.format(r),bg,name), c('C{}'.format(r),bg,stage), c('D{}'.format(r),bg,who), c('E{}'.format(r),bg,sname)], '22')); r+=1
index_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <sheetPr><tabColor rgb="001B4F9B"/></sheetPr>
  <dimension ref="A1:E{r}"/>
  <sheetViews><sheetView workbookViewId="0"><pane ySplit="3" topLeftCell="A4" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>
  <sheetFormatPr defaultRowHeight="15" customHeight="1"/>
  <cols>
    <col min="1" max="1" width="8" customWidth="1"/>
    <col min="2" max="2" width="28" customWidth="1"/>
    <col min="3" max="3" width="18" customWidth="1"/>
    <col min="4" max="4" width="16" customWidth="1"/>
    <col min="5" max="5" width="22" customWidth="1"/>
  </cols>
  <sheetData>{rows}</sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75"/>
  <printOptions horizontalCentered="1"/>
  <pageSetup orientation="portrait" fitToWidth="1" fitToHeight="1"/>
</worksheet>'''.format(rows='\n'.join(rows), r=r)

# Write styles and shared strings
with open(os.path.join(work_dir, 'xl', 'styles.xml'), 'w', encoding='utf-8') as f:
    f.write(STYLES)
with open(os.path.join(work_dir, 'xl', 'sharedStrings.xml'), 'w', encoding='utf-8') as f:
    f.write('<?xml version="1.0" encoding="UTF-8" standalone="yes"?><sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="0" uniqueCount="0"/>')
with open(os.path.join(work_dir, 'xl', 'worksheets', 'sheet1.xml'), 'w', encoding='utf-8') as f:
    f.write(index_xml)

# Create simplified sheets for Forms 0-21 (sheets 2-22)
form_names = [
    'Form0-课前准备检查表','Form1-手册类型判断','Form2-课题定位表','Form3-访谈准备清单',
    'Form4-A角色访谈记录','Form5-B角色访谈记录','Form6-C角色访谈记录',
    'Form7-操作手册素材整理','Form8-带教手册素材整理','Form9-应知应会素材整理',
    'Form10-Skill提交前自查','Form11-初稿速览检查','Form12-A角色审阅记录',
    'Form13-B角色审阅记录','Form14-C角色审阅记录','Form15-优先级排序汇总',
    'Form16-操作手册校验清单','Form17-带教手册校验清单','Form18-应知应会校验清单',
    'Form19-五步优化工作表','Form20-跨手册交叉审阅','Form21-课后迭代计划表'
]
for i, name in enumerate(form_names):
    sheet_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <sheetPr><tabColor rgb="001B4F9B"/></sheetPr>
  <dimension ref="A1:F50"/>
  <sheetViews><sheetView workbookViewId="0"><pane ySplit="2" topLeftCell="A3" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>
  <sheetFormatPr defaultRowHeight="15" customHeight="1"/>
  <cols>
    <col min="1" max="1" width="55" customWidth="1"/>
    <col min="2" max="2" width="20" customWidth="1"/>
    <col min="3" max="3" width="20" customWidth="1"/>
    <col min="4" max="4" width="20" customWidth="1"/>
    <col min="5" max="5" width="15" customWidth="1"/>
    <col min="6" max="6" width="15" customWidth="1"/>
  </cols>
  <sheetData>
    <row r="1"><c r="A1" s="1" t="inlineStr"><is><t>{name}</t></is></c></row>
    <row r="2"><c r="A2" s="8" t="inlineStr"><is><t>使用说明：请参考完整版表单内容</t></is></c></row>
    <row r="3"><c r="A3" s="2" t="inlineStr"><is><t>本表单内容</t></is></c></row>
    <row r="4"><c r="A4" s="4" t="inlineStr"><is><t>详细内容请参考完整版《A1_配套表单集_空白版.md》源文件</t></is></c></row>
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75"/>
  <pageSetup orientation="portrait" fitToWidth="1" fitToHeight="1"/>
</worksheet>'''.format(name=name)
    with open(os.path.join(work_dir, 'xl', 'worksheets', 'sheet{}.xml'.format(i+2)), 'w', encoding='utf-8') as f:
        f.write(sheet_xml)

sheet_names = ['目录'] + form_names
wb = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <bookViews><workbookView xWindow="0" yWindow="0" windowWidth="20140" windowHeight="12000"/></bookViews>
  <sheets>
'''
for i, name in enumerate(sheet_names):
    wb += '    <sheet name="{}" sheetId="{}" r:id="rId{}"/>\n'.format(name, i+1, i+4)
wb += '  </sheets>\n  <calcPr calcId="191029" fullCalcOnLoad="1"/>\n</workbook>'
with open(os.path.join(work_dir, 'xl', 'workbook.xml'), 'w', encoding='utf-8') as f:
    f.write(wb)

wb_rels = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
  <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml"/>
'''
for i in range(1, 23):
    wb_rels += '  <Relationship Id="rId{}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet{}.xml"/>\n'.format(i+3, i)
wb_rels += '  <Relationship Id="rId26" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet23.xml"/>\n'
wb_rels += '</Relationships>'
with open(os.path.join(work_dir, 'xl', '_rels', 'workbook.xml.rels'), 'w', encoding='utf-8') as f:
    f.write(wb_rels)

ct = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
  <Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>
  <Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/>
'''
for i in range(1, 24):
    ct += '  <Override PartName="/xl/worksheets/sheet{}.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>\n'.format(i)
ct += '</Types>'
with open(os.path.join(work_dir, '[Content_Types].xml'), 'w', encoding='utf-8') as f:
    f.write(ct)

rels = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/>
</Relationships>'''
with open(os.path.join(work_dir, '_rels', '.rels'), 'w', encoding='utf-8') as f:
    f.write(rels)

print('Files written. Now packing...')

# Pack using xlsx_pack.py
import subprocess
packer = 'C:/Users/Administrator/.claude/skills/Excel表格处理/scripts/xlsx_pack.py'
result = subprocess.run(['python3', packer, work_dir, OUTPUT], capture_output=True, text=True)
print('STDOUT:', result.stdout)
print('STDERR:', result.stderr)
print('Return code:', result.returncode)
if result.returncode == 0:
    print('\nSUCCESS: Output written to', OUTPUT)
else:
    print('PACK FAILED')
