# -*- coding: utf-8 -*-
"""Build remaining 4 Excel files for 组织风险预警话术 course"""
import os
import html
import zipfile
import shutil

OUT_DIR = r'D:\新课开发\变革管理\14-组织风险的提前预警话术：在合同签订前把话说清楚\完整课程包\07-工具表单'
WORK_DIR = r'D:\temp\risk_work2'

def clean_work():
    if os.path.exists(WORK_DIR):
        shutil.rmtree(WORK_DIR)
    for d in [WORK_DIR, f'{WORK_DIR}/_rels', f'{WORK_DIR}/xl', f'{WORK_DIR}/xl/_rels', f'{WORK_DIR}/xl/worksheets']:
        os.makedirs(d, exist_ok=True)

def write_xml(path, content):
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f'  Written: {os.path.basename(path)}')

def pack(out_path):
    os.makedirs(os.path.dirname(out_path), exist_ok=True)
    with zipfile.ZipFile(out_path, 'w', zipfile.ZIP_DEFLATED) as zf:
        for root, dirs, files in os.walk(WORK_DIR):
            for file in files:
                filepath = os.path.join(root, file)
                arcname = os.path.relpath(filepath, WORK_DIR)
                zf.write(filepath, arcname)
    print(f'  Packed: {os.path.basename(out_path)} ({os.path.getsize(out_path)} bytes)')

def make_ct():
    return '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
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

def make_rels():
    return '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/>
</Relationships>'''

def make_wbrels(sheet_count):
    sheets = []
    for i in range(1, sheet_count + 1):
        sheets.append(f'  <Relationship Id="rId{i}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet{i}.xml"/>')
    return f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
  <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml"/>
''' + '\n'.join(sheets[1:]) + '\n</Relationships>'

def make_styles():
    return '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
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

def make_ss(strings):
    n = len(strings)
    lines = [f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="{n}" uniqueCount="{n}">''']
    for s in strings:
        lines.append(f'  <si><t>{html.escape(s)}</t></si>')
    lines.append('</sst>')
    return '\n'.join(lines)

def make_wb(sheet_names):
    sheets_xml = []
    for i, name in enumerate(sheet_names):
        rid = i + 1
        sheets_xml.append(f'    <sheet name="{html.escape(name)}" sheetId="{rid}" r:id="rId{rid}"/>')
    return f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <fileVersion appName="xl" lastEdited="7" lowestEdited="7"/>
  <workbookPr defaultThemeVersion="166925"/>
  <bookViews><workbookView xWindow="0" yWindow="0" windowWidth="20140" windowHeight="10960"/></bookViews>
  <sheets>
{chr(10).join(sheets_xml)}
  </sheets>
  <calcPr calcId="191029"/>
</workbook>'''

def build_xlsx(filename, sheet_names, shared_strings, sheets_xml):
    clean_work()
    # Write root files
    write_xml(f'{WORK_DIR}/[Content_Types].xml', make_ct())
    write_xml(f'{WORK_DIR}/_rels/.rels', make_rels())
    write_xml(f'{WORK_DIR}/xl/workbook.xml', make_wb(sheet_names))
    write_xml(f'{WORK_DIR}/xl/_rels/workbook.xml.rels', make_wbrels(len(sheet_names)))
    write_xml(f'{WORK_DIR}/xl/sharedStrings.xml', make_ss(shared_strings))
    write_xml(f'{WORK_DIR}/xl/styles.xml', make_styles())
    # Write sheets
    for i, xml in enumerate(sheets_xml):
        write_xml(f'{WORK_DIR}/xl/worksheets/sheet{i+1}.xml', xml)
    # Pack
    out_path = os.path.join(OUT_DIR, filename)
    pack(out_path)

# ============================================================
# FILE 2: 预警话术检核表.xlsx (2 sheets)
# ============================================================
def build_预警话术检核表():
    print('\n=== Building 预警话术检核表.xlsx ===')
    # Shared strings
    SS = [
        # Sheet 1 - 检核表头
        '序号','场景','预警话术','对象','时机','是否确认','备注',
        # Items
        '项目启动前','项目组名单确认','向HR确认受影响部门的关键岗位人员','HR/部门负责人','项目启动前1周','','',
        '需求调研阶段','决策者参与确认','确认一把手是否真正参与决策，而非只挂名','项目负责人','需求调研完成时','','',
        '方案设计阶段','利益相关方确认','确认方案是否影响某些人的决策范围','项目经理','方案设计完成时','','',
        '上线前','变革阻力识别','与HR或部门骨干1对1沟通，识别潜在阻力','HR/部门负责人','上线前2周','','',
        '上线前','数据权限确认','确认数据访问权限变更是否已通知到人','IT/数据负责人','上线前1周','','',
        '上线后','反馈收集','主动收集使用部门的反馈，及早发现问题','项目经理','上线后1周','','',
        '上线后','效果评估','对比承诺与实际效果，向管理层汇报','项目经理','上线后1月','','',
        # Sheet 2 - 话术模板
        '话术类型','标准话术模板','使用场景','注意事项',
        '开场白','各位领导、同事，今天我想花5分钟和大家沟通一下关于XX项目的一些安排，这个项目涉及到我们部门的一些工作流程调整','项目启动会、1对1沟通','真诚、不套话、先肯定对方价值',
        '权力确认','我想确认一下，在这个项目的决策上，您这边的意见对我们的最终方案有多大的影响力？','需求调研阶段','直接问，不要绕弯子',
        '利益确认','您觉得这个项目在实施过程中，可能会遇到哪些阻力？有没有您特别担心的地方？','1对1沟通','让对方说出来，不要替对方说',
        '顾虑挖掘','我理解您对这个变化有些顾虑，能否具体说说您最担心的是哪方面？','变革阻力识别','倾听为主，复述确认',
        '承诺获取','基于我们今天的沟通，您觉得在推进这个项目时，您这边可以提供什么支持？','阻力化解','让对方做出承诺而非我们要求',
        '风险升级','这个问题我需要向项目组汇报，看能否在XX方面做一些调整，您看是否方便？','高风险事项','及时升级，不要自己硬扛',
    ]

    # Sheet 1 XML - checklist
    def make_s1():
        rows = ['<?xml version="1.0" encoding="UTF-8" standalone="yes"?>',
                '<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">',
                '  <sheetViews><sheetView tabSelected="1" workbookViewId="0"><pane ySplit="1" topLeftCell="A2" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>',
                '  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>',
                '  <cols><col min="1" max="1" width="6" customWidth="1"/><col min="2" max="2" width="18" customWidth="1"/><col min="3" max="3" width="40" customWidth="1"/><col min="4" max="4" width="12" customWidth="1"/><col min="5" max="5" width="12" customWidth="1"/><col min="6" max="6" width="10" customWidth="1"/><col min="7" max="7" width="25" customWidth="1"/></cols>',
                '  <sheetData>',
                '  <row r="1" ht="25" customHeight="1">',
                '    <c r="A1" t="s" s="13"><v>0</v></c>',
                '    <c r="B1" t="s" s="13"><v>1</v></c>',
                '    <c r="C1" t="s" s="13"><v>2</v></c>',
                '    <c r="D1" t="s" s="13"><v>3</v></c>',
                '    <c r="E1" t="s" s="13"><v>4</v></c>',
                '    <c r="F1" t="s" s="13"><v>5</v></c>',
                '    <c r="G1" t="s" s="13"><v>6</v></c>',
                '  </row>']
        items = [
            (1,'项目启动前','项目组名单确认','向HR确认受影响部门的关键岗位人员','HR/部门负责人','项目启动前1周'),
            (2,'需求调研阶段','决策者参与确认','确认一把手是否真正参与决策，而非只挂名','项目负责人','需求调研完成时'),
            (3,'方案设计阶段','利益相关方确认','确认方案是否影响某些人的决策范围','项目经理','方案设计完成时'),
            (4,'上线前','变革阻力识别','与HR或部门骨干1对1沟通，识别潜在阻力','HR/部门负责人','上线前2周'),
            (5,'上线前','数据权限确认','确认数据访问权限变更是否已通知到人','IT/数据负责人','上线前1周'),
            (6,'上线后','反馈收集','主动收集使用部门的反馈，及早发现问题','项目经理','上线后1周'),
            (7,'上线后','效果评估','对比承诺与实际效果，向管理层汇报','项目经理','上线后1月'),
        ]
        for i, (num, scene, script, obj, timing, extra) in enumerate(items):
            r = i + 2
            bs = '15' if i % 2 == 0 else '0'
            rows.append(f'  <row r="{r}">')
            rows.append(f'    <c r="A{r}" t="n" s="15"><v>{num}</v></c>')
            rows.append(f'    <c r="B{r}" t="s" s="{bs}"><v>{7 + i*3 + 1}</v></c>')
            rows.append(f'    <c r="C{r}" t="s" s="{bs}"><v>{7 + i*3 + 2}</v></c>')
            rows.append(f'    <c r="D{r}" t="s" s="{bs}"><v>{7 + i*3 + 3}</v></c>')
            rows.append(f'    <c r="E{r}" t="s" s="{bs}"><v>{7 + i*3 + 4}</v></c>')
            rows.append(f'    <c r="F{r}" t="s" s="15"><v></v></c>')
            rows.append(f'    <c r="G{r}" t="s" s="15"><v></v></c>')
            rows.append(f'  </row>')
        rows.append('  </sheetData>')
        rows.append('  <dataValidations><dataValidation type="list" sqref="F2:F8"><formula1>"是,否,待确认"</formula1></dataValidations></dataValidations>')
        rows.append('  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>')
        rows.append('</worksheet>')
        return '\n'.join(rows)

    # Sheet 2 XML - 话术模板
    def make_s2():
        rows = ['<?xml version="1.0" encoding="UTF-8" standalone="yes"?>',
                '<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">',
                '  <sheetViews><sheetView tabSelected="0" workbookViewId="0"/></sheetViews>',
                '  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>',
                '  <cols><col min="1" max="1" width="15" customWidth="1"/><col min="2" max="2" width="50" customWidth="1"/><col min="3" max="3" width="20" customWidth="1"/><col min="4" max="4" width="30" customWidth="1"/></cols>',
                '  <sheetData>',
                '  <row r="1" ht="25" customHeight="1">',
                '    <c r="A1" t="s" s="13"><v>28</v></c>',
                '    <c r="B1" t="s" s="13"><v>29</v></c>',
                '    <c r="C1" t="s" s="13"><v>30</v></c>',
                '    <c r="D1" t="s" s="13"><v>31</v></c>',
                '  </row>']
        templates = [
            (32,33,34,35,'开场白'),
            (36,37,38,39,'权力确认'),
            (40,41,42,43,'利益确认'),
            (44,45,46,47,'顾虑挖掘'),
            (48,49,50,51,'承诺获取'),
            (52,53,54,55,'风险升级'),
        ]
        for i, (t1,t2,t3,t4,label) in enumerate(templates):
            r = i + 2
            bs = '15' if i % 2 == 0 else '0'
            rows.append(f'  <row r="{r}">')
            rows.append(f'    <c r="A{r}" t="s" s="{bs}"><v>{t1}</v></c>')
            rows.append(f'    <c r="B{r}" t="s" s="{bs}"><v>{t2}</v></c>')
            rows.append(f'    <c r="C{r}" t="s" s="{bs}"><v>{t3}</v></c>')
            rows.append(f'    <c r="D{r}" t="s" s="{bs}"><v>{t4}</v></c>')
            rows.append(f'  </row>')
        rows.append('  </sheetData>')
        rows.append('  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>')
        rows.append('</worksheet>')
        return '\n'.join(rows)

    build_xlsx('预警话术检核表.xlsx', ['预警话术检核表', '话术模板'], SS, [make_s1(), make_s2()])

# ============================================================
# FILE 3: 权力地图模板.xlsx (3 sheets)
# ============================================================
def build_权力地图模板():
    print('\n=== Building 权力地图模板.xlsx ===')
    SS = [
        # Sheet1 - 权力地图概览
        '序号','姓名','部门','职位','权力类型','影响范围','支持度','备注',
        # 10 blank rows
        '直接决策权','预算控制权','人事决策权','信息控制权','专业技术权','否决权','影响力（间接）','其他',
        'A','B','C','D','E','F','G','H',
        # Sheet2 - 利益相关方分析
        '利益相关方名称','类型','当前态度','预期态度','影响力度(1-5)','支持度(1-5)','行动策略','沟通优先级',
        # Sheet3 - 权力关系
        '关系类型','人物A','人物B','关系描述','风险点','建议策略',
        '上下级','A','B','','','',
        '同级协作','A','B','','','',
        '资源依赖','A','B','','','',
        '信息流向','A','B','','','',
        '潜在冲突','A','B','','','',
    ]

    def make_s1():
        rows = ['<?xml version="1.0" encoding="UTF-8" standalone="yes"?>',
                '<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">',
                '  <sheetViews><sheetView tabSelected="1" workbookViewId="0"><pane ySplit="1" topLeftCell="A2" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>',
                '  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>',
                '  <cols><col min="1" max="1" width="6" customWidth="1"/><col min="2" max="2" width="12" customWidth="1"/><col min="3" max="3" width="12" customWidth="1"/><col min="4" max="4" width="12" customWidth="1"/><col min="5" max="5" width="12" customWidth="1"/><col min="6" max="6" width="10" customWidth="1"/><col min="7" max="7" width="10" customWidth="1"/><col min="8" max="8" width="20" customWidth="1"/></cols>',
                '  <sheetData>',
                '  <row r="1" ht="25" customHeight="1">',
                '    <c r="A1" t="s" s="13"><v>0</v></c>',
                '    <c r="B1" t="s" s="13"><v>1</v></c>',
                '    <c r="C1" t="s" s="13"><v>2</v></c>',
                '    <c r="D1" t="s" s="13"><v>3</v></c>',
                '    <c r="E1" t="s" s="13"><v>4</v></c>',
                '    <c r="F1" t="s" s="13"><v>5</v></c>',
                '    <c r="G1" t="s" s="13"><v>6</v></c>',
                '    <c r="H1" t="s" s="13"><v>7</v></c>',
                '  </row>']
        for r in range(2, 12):
            bs = '15' if r % 2 == 0 else '0'
            rows.append(f'  <row r="{r}">')
            rows.append(f'    <c r="A{r}" t="n" s="15"><v>{r-1}</v></c>')
            for col in ['B','C','D','E','F','G','H']:
                rows.append(f'    <c r="{col}{r}" t="s" s="{bs}"><v></v></c>')
            rows.append(f'  </row>')
        rows.append('  </sheetData>')
        rows.append('  <dataValidations>')
        rows.append('    <dataValidation type="list" sqref="E2:E11"><formula1>"直接决策权,预算控制权,人事决策权,信息控制权,专业技术权,否决权,影响力（间接）,其他"</formula1></dataValidation>')
        rows.append('    <dataValidation type="list" sqref="G2:G11"><formula1>"强烈支持,支持,中立,观望,反对,强烈反对"</formula1></dataValidation>')
        rows.append('  </dataValidations>')
        rows.append('  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>')
        rows.append('</worksheet>')
        return '\n'.join(rows)

    def make_s2():
        rows = ['<?xml version="1.0" encoding="UTF-8" standalone="yes"?>',
                '<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">',
                '  <sheetViews><sheetView tabSelected="0" workbookViewId="0"/></sheetViews>',
                '  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>',
                '  <cols><col min="1" max="1" width="15" customWidth="1"/><col min="2" max="2" width="10" customWidth="1"/><col min="3" max="3" width="12" customWidth="1"/><col min="4" max="4" width="12" customWidth="1"/><col min="5" max="5" width="12" customWidth="1"/><col min="6" max="6" width="12" customWidth="1"/><col min="7" max="7" width="20" customWidth="1"/><col min="8" max="8" width="12" customWidth="1"/></cols>',
                '  <sheetData>',
                '  <row r="1" ht="25" customHeight="1">',
                '    <c r="A1" t="s" s="13"><v>18</v></c>',
                '    <c r="B1" t="s" s="13"><v>19</v></c>',
                '    <c r="C1" t="s" s="13"><v>20</v></c>',
                '    <c r="D1" t="s" s="13"><v>21</v></c>',
                '    <c r="E1" t="s" s="13"><v>22</v></c>',
                '    <c r="F1" t="s" s="13"><v>23</v></c>',
                '    <c r="G1" t="s" s="13"><v>24</v></c>',
                '    <c r="H1" t="s" s="13"><v>25</v></c>',
                '  </row>']
        for r in range(2, 12):
            bs = '15' if r % 2 == 0 else '0'
            rows.append(f'  <row r="{r}">')
            for col in ['A','B','C','D','E','F','G','H']:
                rows.append(f'    <c r="{col}{r}" t="s" s="{bs}"><v></v></c>')
            rows.append(f'  </row>')
        rows.append('  </sheetData>')
        rows.append('  <dataValidations>')
        rows.append('    <dataValidation type="list" sqref="B2:B11"><formula1>"内部,外部,高层,中层,基层"</formula1></dataValidation>')
        rows.append('    <dataValidation type="list" sqref="C2:C11"><formula1>"强烈支持,支持,中立,观望,反对,强烈反对"</formula1></dataValidation>')
        rows.append('    <dataValidation type="list" sqref="D2:D11"><formula1>"强烈支持,支持,中立,观望,反对,强烈反对"</formula1></dataValidation>')
        rows.append('    <dataValidation type="list" sqref="H2:H11"><formula1>"高,中,低"</formula1></dataValidation>')
        rows.append('  </dataValidations>')
        rows.append('  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>')
        rows.append('</worksheet>')
        return '\n'.join(rows)

    def make_s3():
        rows = ['<?xml version="1.0" encoding="UTF-8" standalone="yes"?>',
                '<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">',
                '  <sheetViews><sheetView tabSelected="0" workbookViewId="0"/></sheetViews>',
                '  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>',
                '  <cols><col min="1" max="1" width="12" customWidth="1"/><col min="2" max="2" width="15" customWidth="1"/><col min="3" max="3" width="15" customWidth="1"/><col min="4" max="4" width="30" customWidth="1"/><col min="5" max="5" width="25" customWidth="1"/><col min="6" max="6" width="25" customWidth="1"/></cols>',
                '  <sheetData>',
                '  <row r="1" ht="25" customHeight="1">',
                '    <c r="A1" t="s" s="13"><v>26</v></c>',
                '    <c r="B1" t="s" s="13"><v>27</v></c>',
                '    <c r="C1" t="s" s="13"><v>28</v></c>',
                '    <c r="D1" t="s" s="13"><v>29</v></c>',
                '    <c r="E1" t="s" s="13"><v>30</v></c>',
                '    <c r="F1" t="s" s="13"><v>31</v></c>',
                '  </row>']
        rel_types = [32,33,34,35,36]
        for i, rt in enumerate(rel_types):
            r = i + 2
            rows.append(f'  <row r="{r}">')
            rows.append(f'    <c r="A{r}" t="s" s="15"><v>{rt}</v></c>')
            for col in ['B','C','D','E','F']:
                rows.append(f'    <c r="{col}{r}" t="s" s="15"><v></v></c>')
            rows.append(f'  </row>')
        rows.append('  </sheetData>')
        rows.append('  <dataValidations>')
        rows.append('    <dataValidation type="list" sqref="A2:A6"><formula1>"上下级,同级协作,资源依赖,信息流向,潜在冲突"</formula1></dataValidation>')
        rows.append('  </dataValidations>')
        rows.append('  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>')
        rows.append('</worksheet>')
        return '\n'.join(rows)

    build_xlsx('权力地图模板.xlsx', ['权力地图概览', '利益相关方分析', '权力关系'], SS, [make_s1(), make_s2(), make_s3()])

# ============================================================
# FILE 4: 组织就绪度评估表.xlsx (4 sheets)
# ============================================================
def build_组织就绪度评估表():
    print('\n=== Building 组织就绪度评估表.xlsx ===')
    SS = [
        # Sheet1 - 变革意愿评估
        '序号','评估维度','评估问题','完全同意','部分同意','不同意','不确定','得分','权重','加权得分','备注',
        '高管支持度','一把手对项目重视程度足够','请选择','请选择','请选择','请选择','','','','',
        '高管支持度','一把手亲自参与了项目决策','请选择','请选择','请选择','请选择','','','','',
        '变革紧迫感','组织成员认识到变革的必要性','请选择','请选择','请选择','请选择','','','','',
        '变革紧迫感','员工理解不变革的后果','请选择','请选择','请选择','请选择','','','','',
        '员工接受度','员工愿意尝试新的工作方式','请选择','请选择','请选择','请选择','','','','',
        '员工接受度','员工认为变革对自己有利','请选择','请选择','请选择','请选择','','','','',
        '变革紧迫感','有明确的变革时间节点压力','请选择','请选择','请选择','请选择','','','','',
        # Sheet2 - 能力评估
        '序号','评估维度','评估问题','完全同意','部分同意','不同意','不确定','得分','权重','加权得分','备注',
        '技术能力','IT系统能够支持新流程','请选择','请选择','请选择','请选择','','','','',
        '技术能力','数据质量满足新要求','请选择','请选择','请选择','请选择','','','','',
        '人员能力','关键岗位人员具备新技能','请选择','请选择','请选择','请选择','','','','',
        '人员能力','有足够的资源完成培训','请选择','请选择','请选择','请选择','','','','',
        '流程能力','现有流程可以快速调整','请选择','请选择','请选择','请选择','','','','',
        '流程能力','有明确的流程负责人','请选择','请选择','请选择','请选择','','','','',
        # Sheet3 - 资源评估
        '序号','评估维度','评估问题','完全同意','部分同意','不同意','不确定','得分','权重','加权得分','备注',
        '预算资源','项目预算充足','请选择','请选择','请选择','请选择','','','','',
        '预算资源','预算使用有灵活性','请选择','请选择','请选择','请选择','','','','',
        '人力资源','有足够的项目人员','请选择','请选择','请选择','请选择','','','','',
        '人力资源','关键人员已到位','请选择','请选择','请选择','请选择','','','','',
        '时间资源','项目时间表合理','请选择','请选择','请选择','请选择','','','','',
        '时间资源','有缓冲时间应对意外','请选择','请选择','请选择','请选择','','','','',
        # Sheet4 - 综合评估
        '评估维度','就绪度得分','就绪度等级','建议',
        '变革意愿','','','',
        '能力评估','','','',
        '资源评估','','','',
        '综合就绪度','','','',
        '高就绪度（80分以上）','推进试点','全面就绪，可以推进试点','准备充分，但需关注细节',
        '中就绪度（60-80分）','完善方案','存在部分不足，建议先完善再推进','资源或意愿尚有欠缺',
        '低就绪度（60分以下）','重新规划','存在重大缺陷，建议重新规划','需先解决根本问题',
    ]

    def make_score_sheet(name, start_si, questions_per_dim):
        rows = ['<?xml version="1.0" encoding="UTF-8" standalone="yes"?>',
                '<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">',
                '  <sheetViews><sheetView tabSelected="0" workbookViewId="0"><pane ySplit="1" topLeftCell="A2" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>',
                '  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>',
                '  <cols><col min="1" max="1" width="6" customWidth="1"/><col min="2" max="2" width="15" customWidth="1"/><col min="3" max="3" width="40" customWidth="1"/><col min="4" max="4" width="12" customWidth="1"/><col min="5" max="5" width="12" customWidth="1"/><col min="6" max="6" width="12" customWidth="1"/><col min="7" max="7" width="12" customWidth="1"/><col min="8" max="8" width="10" customWidth="1"/><col min="9" max="9" width="10" customWidth="1"/><col min="10" max="10" width="12" customWidth="1"/><col min="11" max="11" width="25" customWidth="1"/></cols>',
                '  <sheetData>',
                '  <row r="1" ht="25" customHeight="1">']
        headers = list(range(start_si, start_si + 11))
        cols = list('ABCDEFGHIJK')
        for col, si in zip(cols, headers):
            rows.append(f'    <c r="{col}1" t="s" s="13"><v>{si}</v></c>')
        rows.append('  </row>')

        # Question rows
        q_idx = start_si + 11
        for i in range(questions_per_dim):
            r = i + 2
            bs = '15' if i % 2 == 0 else '0'
            dim_si = start_si + 11 + i * 4
            rows.append(f'  <row r="{r}">')
            rows.append(f'    <c r="A{r}" t="n" s="15"><v>{i+1}</v></c>')
            rows.append(f'    <c r="B{r}" t="s" s="{bs}"><v>{dim_si}</v></c>')
            rows.append(f'    <c r="C{r}" t="s" s="{bs}"><v>{dim_si+1}</v></c>')
            for col in ['D','E','F','G']:
                rows.append(f'    <c r="{col}{r}" t="s" s="15"><v></v></c>')
            # H = score formula
            rows.append(f'    <c r="H{r}" s="15"><f>IF(D{r}="完全同意",5,IF(E{r}="部分同意",3,IF(F{r}="不同意",1,IF(G{r}="不确定",2,0))))</f><v></v></c>')
            # I = weight (default 1)
            rows.append(f'    <c r="I{r}" t="n" s="15"><v>1</v></c>')
            # J = weighted score
            rows.append(f'    <c r="J{r}" s="15"><f>H{r}*I{r}</f><v></v></c>')
            # K = remarks
            rows.append(f'    <c r="K{r}" t="s" s="15"><v></v></c>')
            rows.append(f'  </row>')

        # Total row
        total_r = questions_per_dim + 2
        rows.append(f'  <row r="{total_r}" ht="25" customHeight="1">')
        rows.append(f'    <c r="A{total_r}" t="s" s="13"><v></v></c>')
        rows.append(f'    <c r="B{total_r}" t="s" s="13"><v>合计</v></c>')
        for col in ['C','D','E','F','G']:
            rows.append(f'    <c r="{col}{total_r}" t="s" s="13"><v></v></c>')
        rows.append(f'    <c r="H{total_r}" s="13"><f>SUM(H2:H{total_r-1})</f><v></v></c>')
        rows.append(f'    <c r="I{total_r}" s="13"><f>SUM(I2:I{total_r-1})</f><v></v></c>')
        rows.append(f'    <c r="J{total_r}" s="13"><f>SUM(J2:J{total_r-1})</f><v></v></c>')
        rows.append(f'    <c r="K{total_r}" t="s" s="13"><v></v></c>')
        rows.append(f'  </row>')
        rows.append('  </sheetData>')
        rows.append('  <dataValidations>')
        rows.append(f'    <dataValidation type="list" sqref="D2:G{questions_per_dim+1}"><formula1>"完全同意,部分同意,不同意,不确定"</formula1></dataValidation>')
        rows.append('  </dataValidations>')
        rows.append('  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>')
        rows.append('</worksheet>')
        return '\n'.join(rows)

    def make_s4():
        rows = ['<?xml version="1.0" encoding="UTF-8" standalone="yes"?>',
                '<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">',
                '  <sheetViews><sheetView tabSelected="0" workbookViewId="0"/></sheetViews>',
                '  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>',
                '  <cols><col min="1" max="1" width="20" customWidth="1"/><col min="2" max="2" width="15" customWidth="1"/><col min="3" max="3" width="20" customWidth="1"/><col min="4" max="4" width="30" customWidth="1"/></cols>',
                '  <sheetData>',
                '  <row r="1" ht="25" customHeight="1">',
                '    <c r="A1" t="s" s="13"><v>0</v></c>',
                '    <c r="B1" t="s" s="13"><v>1</v></c>',
                '    <c r="C1" t="s" s="13"><v>2</v></c>',
                '    <c r="D1" t="s" s="13"><v>3</v></c>',
                '  </row>']
        # R2: 变革意愿
        rows.append('  <row r="2">')
        rows.append('    <c r="A2" t="s" s="15"><v>4</v></c>')
        rows.append('    <c r="B2" s="15"><f>\'Sheet1-变革意愿评估\'!H9</f><v></v></c>')
        rows.append('    <c r="C2" s="15"><f>IF(B2&gt;=80,"高",IF(B2&gt;=60,"中","低"))</f><v></v></c>')
        rows.append('    <c r="D2" t="s" s="15"><v></v></c>')
        rows.append('  </row>')
        # R3: 能力评估
        rows.append('  <row r="3">')
        rows.append('    <c r="A3" t="s" s="15"><v>5</v></c>')
        rows.append('    <c r="B3" s="15"><f>\'Sheet2-能力评估\'!H9</f><v></v></c>')
        rows.append('    <c r="C3" s="15"><f>IF(B3&gt;=80,"高",IF(B3&gt;=60,"中","低"))</f><v></v></c>')
        rows.append('    <c r="D3" t="s" s="15"><v></v></c>')
        rows.append('  </row>')
        # R4: 资源评估
        rows.append('  <row r="4">')
        rows.append('    <c r="A4" t="s" s="15"><v>6</v></c>')
        rows.append('    <c r="B4" s="15"><f>\'Sheet3-资源评估\'!H9</f><v></v></c>')
        rows.append('    <c r="C4" s="15"><f>IF(B4&gt;=80,"高",IF(B4&gt;=60,"中","低"))</f><v></v></c>')
        rows.append('    <c r="D4" t="s" s="15"><v></v></c>')
        rows.append('  </row>')
        # R5: 综合
        rows.append('  <row r="5" ht="25" customHeight="1">')
        rows.append('    <c r="A5" t="s" s="13"><v>7</v></c>')
        rows.append('    <c r="B5" s="13"><f>AVERAGE(B2:B4)</f><v></v></c>')
        rows.append('    <c r="C5" s="13"><f>IF(B5&gt;=80,"高就绪",IF(B5&gt;=60,"中就绪","低就绪"))</f><v></v></c>')
        rows.append('    <c r="D5" s="13"><f>IF(B5&gt;=80,"推进试点",IF(B5&gt;=60,"完善方案","重新规划"))</f><v></v></c>')
        rows.append('  </row>')
        # R7+: Legend
        legend = [(8,9,10,11),(12,13,14,15),(16,17,18,19)]
        for i, (a,b,c,d) in enumerate(legend):
            r = 7 + i
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

    build_xlsx('组织就绪度评估表.xlsx',
               ['变革意愿评估', '能力评估', '资源评估', '综合评估'],
               SS,
               [make_score_sheet('变革意愿评估', 0, 7),
                make_score_sheet('能力评估', 22, 6),
                make_score_sheet('资源评估', 50, 6),
                make_s4()])

# ============================================================
# FILE 5: 合同风险条款示例.xlsx (3 sheets)
# ============================================================
def build_合同风险条款示例():
    print('\n=== Building 合同风险条款示例.xlsx ===')
    SS = [
        # Sheet1 - 合同风险条款总览
        '序号','风险类别','风险条款','风险描述','应对建议','示例条款','是否接受',
        # 15 items
        '知识产权归属','风险条款示例','风险描述示例','应对建议示例','示例条款示例','',
        '知识产权归属','合同应明确约定项目成果的知识产权归属','未明确约定可能导致IP争议','建议明确约定归甲方所有，或约定付费许可','乙方保证其提供的服务不侵犯第三方知识产权','',
        '数据安全','数据处理条款','数据丢失或泄露风险','建议约定数据安全标准、保密义务、违约责任','服务方应对甲方数据进行保密，未经授权不得使用','',
        '数据安全','数据归属条款','合同终止后数据返还或销毁','应明确数据归还、清退流程','合同终止后15日内归还所有甲方数据','',
        '变更管理','变更范围条款','范围蔓延导致成本失控','应明确变更流程、审批权限、成本核算','任何变更需双方书面确认，并调整合同价款','',
        '变更管理','变更审批权限','内部决策链不清晰','应明确各层级审批权限','单次变更超过10万需CEO审批','',
        '验收标准','验收标准条款','标准模糊导致验收拖延','应量化验收标准','系统上线后满足附件约定的功能清单','',
        '验收标准','验收期限条款','无限期拖延验收','应明确验收期限及默认通过条款','收到交付物后10工作日内未提出书面异议视为通过','',
        '违约责任','违约金条款','违约金过高或过低','应约定合理的违约金范围','每延迟一天按合同金额0.1%支付违约金','',
        '违约责任','单方解除权','任意解除权被滥用','应限制任意解除权的条件和补偿','甲方提前30日书面通知可解除合同，但应支付已完成工作费用','',
        '服务连续性','服务中断风险','服务方经营困难导致中断','应约定服务连续性保障措施','服务方应提供业务连续性方案，确保服务不中断','',
        '服务连续性','服务替代方案','关键服务依赖单一供应商','应约定服务替代/转移方案','合同终止时应配合进行业务移交','',
        '价格调整','价格调整条款','原材料涨价导致成本风险','应约定价格调整机制','年度价格调整不超过5%，需提前60天通知','',
        '价格调整','汇率风险条款','跨境服务汇率波动','应约定汇率风险分担机制','以外币结算的合同应约定汇率风险条款','',
        '隐性成本','后期收费条款','低价中标后通过后期服务收费','应明确所有收费项目','合同总价包含所有费用，无额外收费','',
        '隐性成本','培训支持条款','不提供充分培训导致使用障碍','应明确培训内容和费用','服务方应提供不少于8小时的免费培训','',
        # Sheet2 - 合同谈判话术
        '谈判场景','目标条款','我方立场','对方可能立场','推荐话术','注意事项',
        'IP归属谈判','争取IP归甲方所有','IP必须归甲方','对方希望保留部分IP权利','对于项目专项开发的成果，我们的原则是归甲方所有，这也能保护双方的长期合作','以长期合作为切入点',
        '数据安全条款','增加数据安全条款','必须增加数据安全条款','认为通用条款足够','数据安全是我们的底线，希望能在合同中明确约定安全标准和违约责任','强调数据安全的重要性',
        '验收标准','量化验收标准','验收标准必须可量化','认为通用描述足够','建议将验收标准量化，这样对我们双方都是保护','给出具体的量化标准示例',
        '变更管理','明确变更流程','必须明确变更流程','担心限制灵活性','我们希望在合同中明确变更的流程和成本调整机制，这样才能确保项目顺利推进','强调流程清晰对双方都有利',
        '违约条款','合理违约金','违约金要合理','违约金过高','我们理解的违约金是补偿性的而非惩罚性的，建议参考行业惯例','给出行业数据和案例',
        # Sheet3 - 合同检查清单
        '检查类别','检查项','检查标准','是否通过','问题描述','整改要求',
        '基本信息的完整性','合同双方信息','公司名称、地址、联系人完整','请选择','','',
        '基本信息的完整性','合同编号','有唯一的合同编号','请选择','','',
        '基本信息的完整性','签署日期','有明确的签署日期','请选择','','',
        '基本信息的完整性','合同有效期','有明确的开始和结束日期','请选择','','',
        '商务条款','付款方式','付款方式明确（预付/月结/里程碑）','请选择','','',
        '商务条款','付款周期','付款周期合理，与项目进度匹配','请选择','','',
        '商务条款','发票类型','发票类型符合公司财务要求','请选择','','',
        '技术条款','交付物定义','交付物清单明确、可验收','请选择','','',
        '技术条款','技术标准','技术标准符合公司要求','请选择','','',
        '技术条款','知识产权','IP归属明确','请选择','','',
        '法律条款','保密条款','有保密条款且范围合理','请选择','','',
        '法律条款','违约责任','违约责任对等、合理','请选择','','',
        '法律条款','争议解决','争议解决方式可接受','请选择','','',
        '法律条款','适用法律','适用法律明确','请选择','','',
    ]

    def make_s1():
        rows = ['<?xml version="1.0" encoding="UTF-8" standalone="yes"?>',
                '<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">',
                '  <sheetViews><sheetView tabSelected="1" workbookViewId="0"><pane ySplit="1" topLeftCell="A2" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>',
                '  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>',
                '  <cols><col min="1" max="1" width="6" customWidth="1"/><col min="2" max="2" width="12" customWidth="1"/><col min="3" max="3" width="30" customWidth="1"/><col min="4" max="4" width="30" customWidth="1"/><col min="5" max="5" width="30" customWidth="1"/><col min="6" max="6" width="40" customWidth="1"/><col min="7" max="7" width="10" customWidth="1"/></cols>',
                '  <sheetData>',
                '  <row r="1" ht="25" customHeight="1">']
        for col, si in [('A','0'),('B','1'),('C','2'),('D','3'),('E','4'),('F','5'),('G','6')]:
            rows.append(f'    <c r="{col}1" t="s" s="13"><v>{si}</v></c>')
        rows.append('  </row>')

        items = [
            (1,'知识产权归属','知识产权归属条款','明确约定IP归属','争取归甲方或付费许可','乙方保证其提供的服务不侵犯第三方知识产权'),
            (2,'知识产权归属','知识产权归属条款','未明确导致争议','必须明确约定','合同应明确约定项目成果的知识产权归属'),
            (3,'数据安全','数据安全条款','数据泄露风险','约定安全标准和违约责任','服务方应对甲方数据进行保密，未经授权不得使用'),
            (4,'数据安全','数据归属条款','合同终止后数据风险','明确返还和销毁流程','合同终止后15日内归还所有甲方数据'),
            (5,'变更管理','变更范围条款','范围蔓延导致成本失控','明确变更流程和成本调整','任何变更需双方书面确认，并调整合同价款'),
            (6,'变更管理','变更审批权限','内部决策链不清晰','明确各层级审批权限','单次变更超过10万需CEO审批'),
            (7,'验收标准','验收标准条款','标准模糊导致验收拖延','量化验收标准','系统上线后满足附件约定的功能清单'),
            (8,'验收标准','验收期限条款','无限期拖延验收','明确验收期限及默认通过条款','收到交付物后10工作日内未提出书面异议视为通过'),
            (9,'违约责任','违约金条款','违约金过高或过低','约定合理的违约金范围','每延迟一天按合同金额0.1%支付违约金'),
            (10,'违约责任','单方解除权','任意解除权被滥用','限制任意解除权的条件和补偿','甲方提前30日书面通知可解除合同，但应支付已完成工作费用'),
            (11,'服务连续性','服务中断风险','服务方经营困难导致中断','约定服务连续性保障措施','服务方应提供业务连续性方案，确保服务不中断'),
            (12,'服务连续性','服务替代方案','关键服务依赖单一供应商','约定服务替代/转移方案','合同终止时应配合进行业务移交'),
            (13,'价格调整','价格调整条款','原材料涨价导致成本风险','约定价格调整机制','年度价格调整不超过5%，需提前60天通知'),
            (14,'价格调整','汇率风险条款','跨境服务汇率波动','约定汇率风险分担机制','以外币结算的合同应约定汇率风险条款'),
            (15,'隐性成本','后期收费条款','低价中标后通过后期服务收费','明确所有收费项目','合同总价包含所有费用，无额外收费'),
            (16,'隐性成本','培训支持条款','不提供充分培训导致使用障碍','明确培训内容和费用','服务方应提供不少于8小时的免费培训'),
        ]
        for i, (num, cat, clause, desc, response, example) in enumerate(items):
            r = i + 2
            bs = '15' if i % 2 == 0 else '0'
            rows.append(f'  <row r="{r}">')
            rows.append(f'    <c r="A{r}" t="n" s="15"><v>{num}</v></c>')
            rows.append(f'    <c r="B{r}" t="s" s="{bs}"><v>{7 + i*5 + 1}</v></c>')
            rows.append(f'    <c r="C{r}" t="s" s="{bs}"><v>{7 + i*5 + 2}</v></c>')
            rows.append(f'    <c r="D{r}" t="s" s="{bs}"><v>{7 + i*5 + 3}</v></c>')
            rows.append(f'    <c r="E{r}" t="s" s="{bs}"><v>{7 + i*5 + 4}</v></c>')
            rows.append(f'    <c r="F{r}" t="s" s="{bs}"><v>{7 + i*5 + 5}</v></c>')
            rows.append(f'    <c r="G{r}" t="s" s="15"><v></v></c>')
            rows.append(f'  </row>')
        rows.append('  </sheetData>')
        rows.append('  <dataValidations><dataValidation type="list" sqref="G2:G17"><formula1>"是,否,待确认"</formula1></dataValidations></dataValidations>')
        rows.append('  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>')
        rows.append('</worksheet>')
        return '\n'.join(rows)

    def make_s2():
        rows = ['<?xml version="1.0" encoding="UTF-8" standalone="yes"?>',
                '<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">',
                '  <sheetViews><sheetView tabSelected="0" workbookViewId="0"/></sheetViews>',
                '  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>',
                '  <cols><col min="1" max="1" width="15" customWidth="1"/><col min="2" max="2" width="20" customWidth="1"/><col min="3" max="3" width="20" customWidth="1"/><col min="4" max="4" width="20" customWidth="1"/><col min="5" max="5" width="40" customWidth="1"/><col min="6" max="6" width="30" customWidth="1"/></cols>',
                '  <sheetData>',
                '  <row r="1" ht="25" customHeight="1">']
        for col, si in [('A','87'),('B','88'),('C','89'),('D','90'),('E','91'),('F','92')]:
            rows.append(f'    <c r="{col}1" t="s" s="13"><v>{si}</v></c>')
        rows.append('  </row>')

        templates = [
            (93,94,95,96,97,'IP归属谈判'),
            (98,99,100,101,102,'数据安全条款'),
            (103,104,105,106,107,'验收标准'),
            (108,109,110,111,112,'变更管理'),
            (113,114,115,116,117,'违约条款'),
        ]
        for i, (a,b,c,d,e,label) in enumerate(templates):
            r = i + 2
            bs = '15' if i % 2 == 0 else '0'
            rows.append(f'  <row r="{r}">')
            rows.append(f'    <c r="A{r}" t="s" s="{bs}"><v>{a}</v></c>')
            rows.append(f'    <c r="B{r}" t="s" s="{bs}"><v>{b}</v></c>')
            rows.append(f'    <c r="C{r}" t="s" s="{bs}"><v>{c}</v></c>')
            rows.append(f'    <c r="D{r}" t="s" s="{bs}"><v>{d}</v></c>')
            rows.append(f'    <c r="E{r}" t="s" s="{bs}"><v>{e}</v></c>')
            rows.append(f'    <c r="F{r}" t="s" s="{bs}"><v></v></c>')
            rows.append(f'  </row>')
        rows.append('  </sheetData>')
        rows.append('  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>')
        rows.append('</worksheet>')
        return '\n'.join(rows)

    def make_s3():
        rows = ['<?xml version="1.0" encoding="UTF-8" standalone="yes"?>',
                '<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">',
                '  <sheetViews><sheetView tabSelected="0" workbookViewId="0"><pane ySplit="1" topLeftCell="A2" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>',
                '  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>',
                '  <cols><col min="1" max="1" width="15" customWidth="1"/><col min="2" max="2" width="35" customWidth="1"/><col min="3" max="3" width="40" customWidth="1"/><col min="4" max="4" width="10" customWidth="1"/><col min="5" max="5" width="25" customWidth="1"/><col min="6" max="6" width="25" customWidth="1"/></cols>',
                '  <sheetData>',
                '  <row r="1" ht="25" customHeight="1">']
        for col, si in [('A','118'),('B','119'),('C','120'),('D','121'),('E','122'),('F','123')]:
            rows.append(f'    <c r="{col}1" t="s" s="13"><v>{si}</v></c>')
        rows.append('  </row>')

        checklist = [
            ('基本信息的完整性','合同双方信息','公司名称、地址、联系人完整'),
            ('基本信息的完整性','合同编号','有唯一的合同编号'),
            ('基本信息的完整性','签署日期','有明确的签署日期'),
            ('基本信息的完整性','合同有效期','有明确的开始和结束日期'),
            ('商务条款','付款方式','付款方式明确（预付/月结/里程碑）'),
            ('商务条款','付款周期','付款周期合理，与项目进度匹配'),
            ('商务条款','发票类型','发票类型符合公司财务要求'),
            ('技术条款','交付物定义','交付物清单明确、可验收'),
            ('技术条款','技术标准','技术标准符合公司要求'),
            ('技术条款','知识产权','IP归属明确'),
            ('法律条款','保密条款','有保密条款且范围合理'),
            ('法律条款','违约责任','违约责任对等、合理'),
            ('法律条款','争议解决','争议解决方式可接受'),
            ('法律条款','适用法律','适用法律明确'),
        ]
        for i, (cat, item, std) in enumerate(checklist):
            r = i + 2
            bs = '15' if i % 2 == 0 else '0'
            rows.append(f'  <row r="{r}">')
            rows.append(f'    <c r="A{r}" t="s" s="{bs}"><v>{124 + i*3}</v></c>')
            rows.append(f'    <c r="B{r}" t="s" s="{bs}"><v>{124 + i*3 + 1}</v></c>')
            rows.append(f'    <c r="C{r}" t="s" s="{bs}"><v>{124 + i*3 + 2}</v></c>')
            rows.append(f'    <c r="D{r}" t="s" s="15"><v></v></c>')
            rows.append(f'    <c r="E{r}" t="s" s="15"><v></v></c>')
            rows.append(f'    <c r="F{r}" t="s" s="15"><v></v></c>')
            rows.append(f'  </row>')
        rows.append('  </sheetData>')
        rows.append('  <dataValidations><dataValidation type="list" sqref="D2:D15"><formula1>"通过,不通过,待确认"</formula1></dataValidations></dataValidations>')
        rows.append('  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>')
        rows.append('</worksheet>')
        return '\n'.join(rows)

    build_xlsx('合同风险条款示例.xlsx',
               ['合同风险条款总览', '合同谈判话术', '合同检查清单'],
               SS,
               [make_s1(), make_s2(), make_s3()])

# Run all
build_预警话术检核表()
build_权力地图模板()
build_组织就绪度评估表()
build_合同风险条款示例()
print('\n=== ALL 4 FILES COMPLETE ===')
