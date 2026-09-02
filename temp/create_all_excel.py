# -*- coding: utf-8 -*-
import zipfile
import os

def create_xlsx(output_path, sheets_data):
    """Create an xlsx file from sheet data."""
    base_dir = '/tmp/xlsx_build'
    for d in [base_dir, f'{base_dir}/xl/worksheets', f'{base_dir}/xl/_rels', f'{base_dir}/_rels']:
        os.makedirs(d, exist_ok=True)

    content_types = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
  <Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>
  <Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/>
</Types>'''

    sheet_overrides = ''
    for i in range(len(sheets_data)):
        sheet_overrides += f'  <Override PartName="/xl/worksheets/sheet{i+1}.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>\n'
    content_types = content_types.replace('  <Override PartName="/xl/worksheets/sheet1.xml"', sheet_overrides + '  <Override PartName="/xl/worksheets/sheet1.xml"')

    root_rels = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/>
</Relationships>'''

    sheet_refs = ''
    sheet_rels = ''
    for i, sheet in enumerate(sheets_data, 1):
        sheet_refs += f'    <sheet name="{sheet["name"]}" sheetId="{i}" r:id="rId{i}"/>\n'
        sheet_rels += f'  <Relationship Id="rId{i}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet{i}.xml"/>\n'

    workbook = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <bookViews><workbookView xWindow="0" yWindow="0" windowWidth="20140" windowHeight="10960"/></bookViews>
  <sheets>
{sheet_refs}  </sheets>
  <calcPr calcId="191029"/>
</workbook>'''

    workbook_rels = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
{sheet_rels}  <Relationship Id="rId{len(sheets_data)+1}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
  <Relationship Id="rId{len(sheets_data)+2}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml"/>
</Relationships>'''

    # Collect all strings
    all_strings = []
    for sheet in sheets_data:
        for s in sheet.get('shared_strings', []):
            if s not in all_strings:
                all_strings.append(s)

    si_items = ''
    for s in all_strings:
        s = s.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;')
        si_items += f'  <si><t>{s}</t></si>\n'

    shared_strings = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="{len(all_strings)}" uniqueCount="{len(all_strings)}">
{si_items}</sst>'''

    styles = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <fonts count="5">
    <font><sz val="11"/><name val="Calibri"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="000000FF"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="00000000"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="00008000"/></font>
    <font><sz val="11"/><name val="Calibri"/><b/></font>
  </fonts>
  <fills count="3">
    <fill><patternFill patternType="none"/></fill>
    <fill><patternFill patternType="gray125"/></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="00D9E1F2"/></patternFill></fill>
  </fills>
  <borders count="1">
    <border><left/><right/><top/><bottom/><diagonal/></border>
  </borders>
  <cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>
  <cellXfs count="13">
    <xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/>
    <xf numFmtId="0" fontId="1" fillId="0" borderId="0" xfId="0"/>
    <xf numFmtId="0" fontId="2" fillId="0" borderId="0" xfId="0"/>
    <xf numFmtId="0" fontId="3" fillId="0" borderId="0" xfId="0"/>
    <xf numFmtId="0" fontId="4" fillId="0" borderId="0" xfId="0"/>
    <xf numFmtId="164" fontId="1" fillId="0" borderId="0" xfId="0"/>
    <xf numFmtId="164" fontId="2" fillId="0" borderId="0" xfId="0"/>
    <xf numFmtId="165" fontId="1" fillId="0" borderId="0" xfId="0"/>
    <xf numFmtId="165" fontId="2" fillId="0" borderId="0" xfId="0"/>
    <xf numFmtId="167" fontId="1" fillId="0" borderId="0" xfId="0"/>
    <xf numFmtId="167" fontId="2" fillId="0" borderId="0" xfId="0"/>
    <xf numFmtId="1" fontId="1" fillId="0" borderId="0" xfId="0"/>
    <xf numFmtId="14" fontId="1" fillId="0" borderId="0" xfId="0"/>
  </cellXfs>
  <numFmts count="4">
    <numFmt numFmtId="164" formatCode="$#,##0;($#,##0);&quot;-&quot;"/>
    <numFmt numFmtId="165" formatCode="0.0%"/>
    <numFmt numFmtId="167" formatCode="#,##0"/>
    <numFmt numFmtId="14" formatCode="yyyy/mm/dd"/>
  </numFmts>
</styleSheet>'''

    with open(f'{base_dir}/[Content_Types].xml', 'w', encoding='utf-8') as f:
        f.write(content_types)
    with open(f'{base_dir}/_rels/.rels', 'w', encoding='utf-8') as f:
        f.write(root_rels)
    with open(f'{base_dir}/xl/workbook.xml', 'w', encoding='utf-8') as f:
        f.write(workbook)
    with open(f'{base_dir}/xl/_rels/workbook.xml.rels', 'w', encoding='utf-8') as f:
        f.write(workbook_rels)
    with open(f'{base_dir}/xl/sharedStrings.xml', 'w', encoding='utf-8') as f:
        f.write(shared_strings)
    with open(f'{base_dir}/xl/styles.xml', 'w', encoding='utf-8') as f:
        f.write(styles)

    for i, sheet in enumerate(sheets_data, 1):
        with open(f'{base_dir}/xl/worksheets/sheet{i}.xml', 'w', encoding='utf-8') as f:
            f.write(sheet['sheet_xml'])

    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    with zipfile.ZipFile(output_path, 'w', zipfile.ZIP_DEFLATED) as zf:
        for root, dirs, files in os.walk(base_dir):
            for file in files:
                file_path = os.path.join(root, file)
                arcname = os.path.relpath(file_path, base_dir)
                zf.write(file_path, arcname)

    print(f'Created: {output_path}')


# ============================================
# FILE 1: 厅店客户数据总览表.xlsx
# ============================================
s1 = {
    'name': '客户数据总览',
    'shared_strings': [
        '序号', '客户姓名', '手机号码', '性别', '年龄', '入网时长(年)',
        '客户类型', '重要程度', '月均消费(元)', '最近到店日期',
        '本年到店次数', '累计消费(元)', '潜在价值评级', '客户标签', '备注',
        '数据统计', '总客户数', '平均月消费(元)'
    ],
    'sheet_xml': '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView workbookViewId="0">
      <pane ySplit="4" topLeftCell="A5" activePane="bottomLeft" state="frozen"/>
    </sheetView>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols>
    <col min="1" max="1" width="6" customWidth="1"/>
    <col min="2" max="2" width="10" customWidth="1"/>
    <col min="3" max="3" width="14" customWidth="1"/>
    <col min="4" max="4" width="6" customWidth="1"/>
    <col min="5" max="5" width="6" customWidth="1"/>
    <col min="6" max="6" width="10" customWidth="1"/>
    <col min="7" max="7" width="12" customWidth="1"/>
    <col min="8" max="8" width="10" customWidth="1"/>
    <col min="9" max="9" width="12" customWidth="1"/>
    <col min="10" max="10" width="12" customWidth="1"/>
    <col min="11" max="11" width="12" customWidth="1"/>
    <col min="12" max="12" width="14" customWidth="1"/>
    <col min="13" max="13" width="12" customWidth="1"/>
    <col min="14" max="14" width="14" customWidth="1"/>
    <col min="15" max="15" width="20" customWidth="1"/>
  </cols>
  <sheetData>
    <row r="1"><c r="A1" t="s" s="4"><v>15</v></c></row>
    <row r="2">
      <c r="A2" t="s" s="4"><v>16</v></c>
      <c r="B2" s="10"><f>COUNTA(B5:B104)</f><v></v></c>
      <c r="C2" t="s" s="4"><v>17</v></c>
      <c r="D2" s="6"><f>AVERAGE(I5:I104)</f><v></v></c>
    </row>
    <row r="3"><c r="A3"/></row>
    <row r="4">
      <c r="A4" t="s" s="4"><v>0</v></c>
      <c r="B4" t="s" s="4"><v>1</v></c>
      <c r="C4" t="s" s="4"><v>2</v></c>
      <c r="D4" t="s" s="4"><v>3</v></c>
      <c r="E4" t="s" s="4"><v>4</v></c>
      <c r="F4" t="s" s="4"><v>5</v></c>
      <c r="G4" t="s" s="4"><v>6</v></c>
      <c r="H4" t="s" s="4"><v>7</v></c>
      <c r="I4" t="s" s="4"><v>8</v></c>
      <c r="J4" t="s" s="4"><v>9</v></c>
      <c r="K4" t="s" s="4"><v>10</v></c>
      <c r="L4" t="s" s="4"><v>11</v></c>
      <c r="M4" t="s" s="4"><v>12</v></c>
      <c r="N4" t="s" s="4"><v>13</v></c>
      <c r="O4" t="s" s="4"><v>14</v></c>
    </row>
    <row r="5">
      <c r="A5" s="10"><v>1</v></c>
      <c r="B5" t="s" s="1"><v>1</v></c>
      <c r="C5" t="s" s="1"><v>2</v></c>
      <c r="D5" t="s" s="1"><v>3</v></c>
      <c r="E5" s="10"><v>30</v></c>
      <c r="F5" s="7"><v>2</v></c>
      <c r="G5" t="s" s="1"><v>6</v></c>
      <c r="H5" t="s" s="1"><v>7</v></c>
      <c r="I5" s="5"><v>100</v></c>
      <c r="J5" s="12"><v>44965</v></c>
      <c r="K5" s="10"><v>5</v></c>
      <c r="L5" s="6"><f>I5*K5</f><v></v></c>
      <c r="M5" t="s" s="1"><v>12</v></c>
      <c r="N5" t="s" s="1"><v>13</v></c>
      <c r="O5" t="s" s="1"><v>14</v></c>
    </row>
    <row r="6"><c r="A6" s="10"><v>2</v></c></row>
    <row r="7"><c r="A7" s="10"><v>3</v></c></row>
    <row r="8"><c r="A8" s="10"><v>4</v></c></row>
    <row r="9"><c r="A9" s="10"><v>5</v></c></row>
    <row r="10"><c r="A10" s="10"><v>6</v></c></row>
    <row r="11"><c r="A11" s="10"><v>7</v></c></row>
    <row r="12"><c r="A12" s="10"><v>8</v></c></row>
    <row r="13"><c r="A13" s="10"><v>9</v></c></row>
    <row r="14"><c r="A14" s="10"><v>10</v></c></row>
    <row r="15"><c r="A15" s="10"><v>11</v></c></row>
  </sheetData>
</worksheet>'''
}
create_xlsx('D:/新课开发/运营商/03-厅店转型/配套表单Excel/厅店客户数据总览表.xlsx', [s1])

# ============================================
# FILE 2: 客户动机分析工具.xlsx
# ============================================
s2 = {
    'name': '动机分析',
    'shared_strings': [
        '序号', '客户姓名', '手机号码', '客户画像类型', '到店场景',
        '需求紧迫度', '消费能力', '决策周期', '顾虑点', '机会点',
        '动机评分', '分析结论', '推荐策略', '备注',
        '客户画像类型说明', '效率型', '体验型', '关系型', '价格型',
        '评分标准', '1=低 2=中 3=高'
    ],
    'sheet_xml': '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView workbookViewId="0">
      <pane ySplit="4" topLeftCell="A5" activePane="bottomLeft" state="frozen"/>
    </sheetView>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols>
    <col min="1" max="1" width="6" customWidth="1"/>
    <col min="2" max="2" width="10" customWidth="1"/>
    <col min="3" max="3" width="14" customWidth="1"/>
    <col min="4" max="4" width="12" customWidth="1"/>
    <col min="5" max="5" width="10" customWidth="1"/>
    <col min="6" max="6" width="10" customWidth="1"/>
    <col min="7" max="7" width="10" customWidth="1"/>
    <col min="8" max="8" width="10" customWidth="1"/>
    <col min="9" max="9" width="12" customWidth="1"/>
    <col min="10" max="10" width="12" customWidth="1"/>
    <col min="11" max="11" width="10" customWidth="1"/>
    <col min="12" max="12" width="16" customWidth="1"/>
    <col min="13" max="13" width="16" customWidth="1"/>
    <col min="14" max="14" width="20" customWidth="1"/>
  </cols>
  <sheetData>
    <row r="1"><c r="A1" t="s" s="4"><v>14</v></c></row>
    <row r="2"><c r="A2" t="s" s="4"><v>15</v></c></row>
    <row r="3"><c r="A3" t="s" s="1"><v>16</v></c><c r="B3" t="s" s="1"><v>17</v></c><c r="C3" t="s" s="1"><v>18</v></c><c r="D3" t="s" s="1"><v>19</v></c></row>
    <row r="4">
      <c r="A4" t="s" s="4"><v>0</v></c>
      <c r="B4" t="s" s="4"><v>1</v></c>
      <c r="C4" t="s" s="4"><v>2</v></c>
      <c r="D4" t="s" s="4"><v>3</v></c>
      <c r="E4" t="s" s="4"><v>4</v></c>
      <c r="F4" t="s" s="4"><v>5</v></c>
      <c r="G4" t="s" s="4"><v>6</v></c>
      <c r="H4" t="s" s="4"><v>7</v></c>
      <c r="I4" t="s" s="4"><v>8</v></c>
      <c r="J4" t="s" s="4"><v>9</v></c>
      <c r="K4" t="s" s="4"><v>10</v></c>
      <c r="L4" t="s" s="4"><v>11</v></c>
      <c r="M4" t="s" s="4"><v>12</v></c>
      <c r="N4" t="s" s="4"><v>13</v></c>
    </row>
    <row r="5">
      <c r="A5" s="10"><v>1</v></c>
      <c r="B5" t="s" s="1"><v>1</v></c>
      <c r="C5" t="s" s="1"><v>2</v></c>
      <c r="D5" t="s" s="1"><v>3</v></c>
      <c r="E5" t="s" s="1"><v>4</v></c>
      <c r="F5" s="9"><v>2</v></c>
      <c r="G5" s="9"><v>2</v></c>
      <c r="H5" s="9"><v>2</v></c>
      <c r="I5" t="s" s="1"><v>8</v></c>
      <c r="J5" t="s" s="1"><v>9</v></c>
      <c r="K5" s="10"><f>SUM(F5:H5)</f><v></v></c>
      <c r="L5" t="s" s="1"><v>11</v></c>
      <c r="M5" t="s" s="1"><v>12</v></c>
      <c r="N5" t="s" s="1"><v>13</v></c>
    </row>
    <row r="6"><c r="A6" s="10"><v>2</v></c></row>
    <row r="7"><c r="A7" s="10"><v>3</v></c></row>
    <row r="8"><c r="A8" s="10"><v>4</v></c></row>
    <row r="9"><c r="A9" s="10"><v>5</v></c></row>
    <row r="10"><c r="A10" s="10"><v>6</v></c></row>
  </sheetData>
</worksheet>'''
}
create_xlsx('D:/新课开发/运营商/03-厅店转型/配套表单Excel/客户动机分析工具.xlsx', [s2])

# ============================================
# FILE 3: 体验场景设计工具.xlsx
# ============================================
s3 = {
    'name': '场景设计',
    'shared_strings': [
        '序号', '场景名称', '场景类型', '目标客群', '涉及产品',
        '体验时长(分钟)', '需要设备/物料', '负责人员', '触发条件',
        '预期效果', '效果评估', '改进建议', '是否启用', '备注',
        '场景类型', '智能家居', '5G体验', '全屋智能', '安防监控', '娱乐互动'
    ],
    'sheet_xml': '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView workbookViewId="0">
      <pane ySplit="4" topLeftCell="A5" activePane="bottomLeft" state="frozen"/>
    </sheetView>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols>
    <col min="1" max="1" width="6" customWidth="1"/>
    <col min="2" max="2" width="14" customWidth="1"/>
    <col min="3" max="3" width="12" customWidth="1"/>
    <col min="4" max="4" width="12" customWidth="1"/>
    <col min="5" max="5" width="14" customWidth="1"/>
    <col min="6" max="6" width="12" customWidth="1"/>
    <col min="7" max="7" width="16" customWidth="1"/>
    <col min="8" max="8" width="10" customWidth="1"/>
    <col min="9" max="9" width="12" customWidth="1"/>
    <col min="10" max="10" width="14" customWidth="1"/>
    <col min="11" max="11" width="10" customWidth="1"/>
    <col min="12" max="12" width="16" customWidth="1"/>
    <col min="13" max="13" width="8" customWidth="1"/>
    <col min="14" max="14" width="16" customWidth="1"/>
  </cols>
  <sheetData>
    <row r="1"><c r="A1" t="s" s="4"><v>13</v></c></row>
    <row r="2"><c r="A2" t="s" s="4"><v>14</v></c></row>
    <row r="3"><c r="A3" t="s" s="1"><v>15</v></c><c r="B3" t="s" s="1"><v>16</v></c><c r="C3" t="s" s="1"><v>17</v></c><c r="D3" t="s" s="1"><v>18</v></c><c r="E3" t="s" s="1"><v>19</v></c></row>
    <row r="4">
      <c r="A4" t="s" s="4"><v>0</v></c>
      <c r="B4" t="s" s="4"><v>1</v></c>
      <c r="C4" t="s" s="4"><v>2</v></c>
      <c r="D4" t="s" s="4"><v>3</v></c>
      <c r="E4" t="s" s="4"><v>4</v></c>
      <c r="F4" t="s" s="4"><v>5</v></c>
      <c r="G4" t="s" s="4"><v>6</v></c>
      <c r="H4" t="s" s="4"><v>7</v></c>
      <c r="I4" t="s" s="4"><v>8</v></c>
      <c r="J4" t="s" s="4"><v>9</v></c>
      <c r="K4" t="s" s="4"><v>10</v></c>
      <c r="L4" t="s" s="4"><v>11</v></c>
      <c r="M4" t="s" s="4"><v>12</v></c>
      <c r="N4" t="s" s="4"><v>13</v></c>
    </row>
    <row r="5">
      <c r="A5" s="10"><v>1</v></c>
      <c r="B5" t="s" s="1"><v>1</v></c>
      <c r="C5" t="s" s="1"><v>15</v></c>
      <c r="D5" t="s" s="1"><v>3</v></c>
      <c r="E5" t="s" s="1"><v>4</v></c>
      <c r="F5" s="10"><v>15</v></c>
      <c r="G5" t="s" s="1"><v>6</v></c>
      <c r="H5" t="s" s="1"><v>7</v></c>
      <c r="I5" t="s" s="1"><v>8</v></c>
      <c r="J5" t="s" s="1"><v>9</v></c>
      <c r="K5" t="s" s="1"><v>10</v></c>
      <c r="L5" t="s" s="1"><v>11</v></c>
      <c r="M5" t="s" s="1"><v>12</v></c>
      <c r="N5" t="s" s="1"><v>13</v></c>
    </row>
    <row r="6"><c r="A6" s="10"><v>2</v></c></row>
    <row r="7"><c r="A7" s="10"><v>3</v></c></row>
    <row r="8"><c r="A8" s="10"><v>4</v></c></row>
    <row r="9"><c r="A9" s="10"><v>5</v></c></row>
    <row r="10"><c r="A10" s="10"><v>6</v></c></row>
  </sheetData>
</worksheet>'''
}
create_xlsx('D:/新课开发/运营商/03-厅店转型/配套表单Excel/体验场景设计工具.xlsx', [s3])

# ============================================
# FILE 4: 增值业务推荐方案工具.xlsx
# ============================================
s4 = {
    'name': '增值推荐',
    'shared_strings': [
        '序号', '客户姓名', '手机号码', '到店场景', '识别机会',
        '推荐业务', '推荐组合', '预期月增收(元)', '价值呈现话术',
        '客户反馈', '是否成交', '实际月增收(元)', '跟进日期', '备注',
        '到店场景类型', '业务办理', '业务咨询', '设备体验', '投诉处理', '其他',
        '推荐业务类型', '流量包', '会员权益', '增值服务', '终端销售', '融合套餐'
    ],
    'sheet_xml': '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView workbookViewId="0">
      <pane ySplit="4" topLeftCell="A5" activePane="bottomLeft" state="frozen"/>
    </sheetView>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols>
    <col min="1" max="1" width="6" customWidth="1"/>
    <col min="2" max="2" width="10" customWidth="1"/>
    <col min="3" max="3" width="14" customWidth="1"/>
    <col min="4" max="4" width="12" customWidth="1"/>
    <col min="5" max="5" width="14" customWidth="1"/>
    <col min="6" max="6" width="14" customWidth="1"/>
    <col min="7" max="7" width="14" customWidth="1"/>
    <col min="8" max="8" width="12" customWidth="1"/>
    <col min="9" max="9" width="20" customWidth="1"/>
    <col min="10" max="10" width="10" customWidth="1"/>
    <col min="11" max="11" width="8" customWidth="1"/>
    <col min="12" max="12" width="12" customWidth="1"/>
    <col min="13" max="13" width="12" customWidth="1"/>
    <col min="14" max="14" width="16" customWidth="1"/>
  </cols>
  <sheetData>
    <row r="1"><c r="A1" t="s" s="4"><v>13</v></c></row>
    <row r="2"><c r="A2" t="s" s="4"><v>14</v></c></row>
    <row r="3"><c r="A3" t="s" s="1"><v>15</v></c><c r="B3" t="s" s="1"><v>16</v></c><c r="C3" t="s" s="1"><v>17</v></c><c r="D3" t="s" s="1"><v>18</v></c><c r="E3" t="s" s="1"><v>19</v></c></row>
    <row r="4">
      <c r="A4" t="s" s="4"><v>0</v></c>
      <c r="B4" t="s" s="4"><v>1</v></c>
      <c r="C4" t="s" s="4"><v>2</v></c>
      <c r="D4" t="s" s="4"><v>3</v></c>
      <c r="E4" t="s" s="4"><v>4</v></c>
      <c r="F4" t="s" s="4"><v>5</v></c>
      <c r="G4" t="s" s="4"><v>6</v></c>
      <c r="H4" t="s" s="4"><v>7</v></c>
      <c r="I4" t="s" s="4"><v>8</v></c>
      <c r="J4" t="s" s="4"><v>9</v></c>
      <c r="K4" t="s" s="4"><v>10</v></c>
      <c r="L4" t="s" s="4"><v>11</v></c>
      <c r="M4" t="s" s="4"><v>12</v></c>
      <c r="N4" t="s" s="4"><v>13</v></c>
    </row>
    <row r="5">
      <c r="A5" s="10"><v>1</v></c>
      <c r="B5" t="s" s="1"><v>1</v></c>
      <c r="C5" t="s" s="1"><v>2</v></c>
      <c r="D5" t="s" s="1"><v>15</v></c>
      <c r="E5" t="s" s="1"><v>4</v></c>
      <c r="F5" t="s" s="1"><v>20</v></c>
      <c r="G5" t="s" s="1"><v>6</v></c>
      <c r="H5" s="5"><v>30</v></c>
      <c r="I5" t="s" s="1"><v>8</v></c>
      <c r="J5" t="s" s="1"><v>9</v></c>
      <c r="K5" t="s" s="1"><v>10</v></c>
      <c r="L5" s="5"><v>0</v></c>
      <c r="M5" s="12"><v>44965</v></c>
      <c r="N5" t="s" s="1"><v>13</v></c>
    </row>
    <row r="6"><c r="A6" s="10"><v>2</v></c></row>
    <row r="7"><c r="A7" s="10"><v>3</v></c></row>
    <row r="8"><c r="A8" s="10"><v>4</v></c></row>
    <row r="9"><c r="A9" s="10"><v>5</v></c></row>
    <row r="10"><c r="A10" s="10"><v>6</v></c></row>
  </sheetData>
</worksheet>'''
}
create_xlsx('D:/新课开发/运营商/03-厅店转型/配套表单Excel/增值业务推荐方案工具.xlsx', [s4])

# ============================================
# FILE 5: 家庭生态捆绑评估表.xlsx
# ============================================
s5 = {
    'name': '家庭捆绑',
    'shared_strings': [
        '序号', '家庭名称', '联系电话', '家庭成员数', '现有宽带(是否)',
        '宽带速率', '全屋智能需求', '安防监控需求', '娱乐需求',
        '综合评分', '推荐套餐', '预估月消费(元)', '预估年消费(元)',
        '捆绑优先级', '跟进状态', '备注',
        '优先级', '高', '中', '低'
    ],
    'sheet_xml': '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView workbookViewId="0">
      <pane ySplit="4" topLeftCell="A5" activePane="bottomLeft" state="frozen"/>
    </sheetView>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols>
    <col min="1" max="1" width="6" customWidth="1"/>
    <col min="2" max="2" width="12" customWidth="1"/>
    <col min="3" max="3" width="14" customWidth="1"/>
    <col min="4" max="4" width="10" customWidth="1"/>
    <col min="5" max="5" width="12" customWidth="1"/>
    <col min="6" max="6" width="10" customWidth="1"/>
    <col min="7" max="7" width="12" customWidth="1"/>
    <col min="8" max="8" width="12" customWidth="1"/>
    <col min="9" max="9" width="10" customWidth="1"/>
    <col min="10" max="10" width="10" customWidth="1"/>
    <col min="11" max="11" width="14" customWidth="1"/>
    <col min="12" max="12" width="12" customWidth="1"/>
    <col min="13" max="13" width="14" customWidth="1"/>
    <col min="14" max="14" width="10" customWidth="1"/>
    <col min="15" max="15" width="10" customWidth="1"/>
    <col min="16" max="16" width="16" customWidth="1"/>
  </cols>
  <sheetData>
    <row r="1"><c r="A1" t="s" s="4"><v>15</v></c></row>
    <row r="4">
      <c r="A4" t="s" s="4"><v>0</v></c>
      <c r="B4" t="s" s="4"><v>1</v></c>
      <c r="C4" t="s" s="4"><v>2</v></c>
      <c r="D4" t="s" s="4"><v>3</v></c>
      <c r="E4" t="s" s="4"><v>4</v></c>
      <c r="F4" t="s" s="4"><v>5</v></c>
      <c r="G4" t="s" s="4"><v>6</v></c>
      <c r="H4" t="s" s="4"><v>7</v></c>
      <c r="I4" t="s" s="4"><v>8</v></c>
      <c r="J4" t="s" s="4"><v>9</v></c>
      <c r="K4" t="s" s="4"><v>10</v></c>
      <c r="L4" t="s" s="4"><v>11</v></c>
      <c r="M4" t="s" s="4"><v>12</v></c>
      <c r="N4" t="s" s="4"><v>13</v></c>
      <c r="O4" t="s" s="4"><v>14</v></c>
      <c r="P4" t="s" s="4"><v>15</v></c>
    </row>
    <row r="5">
      <c r="A5" s="10"><v>1</v></c>
      <c r="B5" t="s" s="1"><v>1</v></c>
      <c r="C5" t="s" s="1"><v>2</v></c>
      <c r="D5" s="10"><v>4</v></c>
      <c r="E5" t="s" s="1"><v>4</v></c>
      <c r="F5" t="s" s="1"><v>5</v></c>
      <c r="G5" t="s" s="1"><v>6</v></c>
      <c r="H5" t="s" s="1"><v>7</v></c>
      <c r="I5" t="s" s="1"><v>8</v></c>
      <c r="J5" s="10"><f>SUM(E5,I5)</f><v></v></c>
      <c r="K5" t="s" s="1"><v>10</v></c>
      <c r="L5" s="5"><v>200</v></c>
      <c r="M5" s="6"><f>L5*12</f><v></v></c>
      <c r="N5" t="s" s="1"><v>16</v></c>
      <c r="O5" t="s" s="1"><v>14</v></c>
      <c r="P5" t="s" s="1"><v>15</v></c>
    </row>
    <row r="6"><c r="A6" s="10"><v>2</v></c></row>
    <row r="7"><c r="A7" s="10"><v>3</v></c></row>
    <row r="8"><c r="A8" s="10"><v>4</v></c></row>
    <row r="9"><c r="A9" s="10"><v>5</v></c></row>
    <row r="10"><c r="A10" s="10"><v>6</v></c></row>
  </sheetData>
</worksheet>'''
}
create_xlsx('D:/新课开发/运营商/03-厅店转型/配套表单Excel/家庭生态捆绑评估表.xlsx', [s5])

# ============================================
# FILE 6: 厅店经营数据追踪表.xlsx
# ============================================
s6 = {
    'name': '经营追踪',
    'shared_strings': [
        '日期', '星期', '到店客流', '业务咨询量', '业务办理量',
        '体验参与量', '成交单数', '客单价(元)', '总销售额(元)',
        '转化率', '环比变化', '备注',
        '统计周期', '日均客流', '日均销售额', '月合计'
    ],
    'sheet_xml': '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView workbookViewId="0">
      <pane ySplit="5" topLeftCell="A6" activePane="bottomLeft" state="frozen"/>
    </sheetView>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols>
    <col min="1" max="1" width="12" customWidth="1"/>
    <col min="2" max="2" width="8" customWidth="1"/>
    <col min="3" max="3" width="10" customWidth="1"/>
    <col min="4" max="4" width="10" customWidth="1"/>
    <col min="5" max="5" width="10" customWidth="1"/>
    <col min="6" max="6" width="12" customWidth="1"/>
    <col min="7" max="7" width="10" customWidth="1"/>
    <col min="8" max="8" width="12" customWidth="1"/>
    <col min="9" max="9" width="14" customWidth="1"/>
    <col min="10" max="10" width="10" customWidth="1"/>
    <col min="11" max="11" width="10" customWidth="1"/>
    <col min="12" max="12" width="16" customWidth="1"/>
  </cols>
  <sheetData>
    <row r="1">
      <c r="A1" t="s" s="4"><v>12</v></c>
    </row>
    <row r="2">
      <c r="A2" t="s" s="4"><v>13</v></c>
      <c r="C2" s="10"><f>AVERAGE(C6:C36)</f><v></v></c>
      <c r="D2" t="s" s="4"><v>14</v></c>
      <c r="E2" s="6"><f>SUM(I6:I36)</f><v></v></c>
    </row>
    <row r="3"><c r="A3"/></row>
    <row r="4"><c r="A4" t="s" s="4"><v>15</v></c></row>
    <row r="5">
      <c r="A5" t="s" s="4"><v>0</v></c>
      <c r="B5" t="s" s="4"><v>1</v></c>
      <c r="C5" t="s" s="4"><v>2</v></c>
      <c r="D5" t="s" s="4"><v>3</v></c>
      <c r="E5" t="s" s="4"><v>4</v></c>
      <c r="F5" t="s" s="4"><v>5</v></c>
      <c r="G5" t="s" s="4"><v>6</v></c>
      <c r="H5" t="s" s="4"><v>7</v></c>
      <c r="I5" t="s" s="4"><v>8</v></c>
      <c r="J5" t="s" s="4"><v>9</v></c>
      <c r="K5" t="s" s="4"><v>10</v></c>
      <c r="L5" t="s" s="4"><v>11</v></c>
    </row>
    <row r="6">
      <c r="A6" s="12"><v>44965</v></c>
      <c r="B6" t="s" s="1"><v>1</v></c>
      <c r="C6" s="10"><v>100</v></c>
      <c r="D6" s="10"><v>30</v></c>
      <c r="E6" s="10"><v>20</v></c>
      <c r="F6" s="10"><v>15</v></c>
      <c r="G6" s="10"><v>10</v></c>
      <c r="H6" s="6"><f>I6/G6</f><v></v></c>
      <c r="I6" s="6"><f>G6*H6</f><v></v></c>
      <c r="J6" s="8"><f>G6/C6</f><v></v></c>
      <c r="K6" t="s" s="1"><v>11</v></c>
      <c r="L6" t="s" s="1"><v>11</v></c>
    </row>
    <row r="7"><c r="A7" s="12"><v>44966</v></c><c r="B7" t="s" s="1"><v>1</v></c></row>
    <row r="8"><c r="A8" s="12"><v>44967</v></c><c r="B8" t="s" s="1"><v>1</v></c></row>
    <row r="9"><c r="A9" s="12"><v>44968</v></c><c r="B9" t="s" s="1"><v>1</v></c></row>
    <row r="10"><c r="A10" s="12"><v>44969</v></c><c r="B10" t="s" s="1"><v>1</v></c></row>
    <row r="11"><c r="A11" s="12"><v>44970</v></c><c r="B11" t="s" s="1"><v>1</v></c></row>
    <row r="12"><c r="A12" s="12"><v>44971</v></c><c r="B12" t="s" s="1"><v>1</v></c></row>
  </sheetData>
</worksheet>'''
}
create_xlsx('D:/新课开发/运营商/03-厅店转型/配套表单Excel/厅店经营数据追踪表.xlsx', [s6])

# ============================================
# FILE 7: 综合演练评分表.xlsx
# ============================================
s7 = {
    'name': '演练评分',
    'shared_strings': [
        '学员姓名', '演练主题', '评估维度', '维度权重', '维度得分',
        '加权得分', '总分', '排名', '评语', '评估日期', '评估人',
        '评估维度说明', '客户识别能力', '需求挖掘能力', '方案设计能力',
        '话术技巧', '应变能力', '总分满分', '优秀', '良好', '及格', '待提升'
    ],
    'sheet_xml': '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView workbookViewId="0">
      <pane ySplit="5" topLeftCell="A6" activePane="bottomLeft" state="frozen"/>
    </sheetView>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols>
    <col min="1" max="1" width="12" customWidth="1"/>
    <col min="2" max="2" width="14" customWidth="1"/>
    <col min="3" max="3" width="12" customWidth="1"/>
    <col min="4" max="4" width="10" customWidth="1"/>
    <col min="5" max="5" width="10" customWidth="1"/>
    <col min="6" max="6" width="10" customWidth="1"/>
    <col min="7" max="7" width="10" customWidth="1"/>
    <col min="8" max="8" width="8" customWidth="1"/>
    <col min="9" max="9" width="20" customWidth="1"/>
    <col min="10" max="10" width="12" customWidth="1"/>
    <col min="11" max="11" width="10" customWidth="1"/>
  </cols>
  <sheetData>
    <row r="1"><c r="A1" t="s" s="4"><v>11</v></c></row>
    <row r="2"><c r="A2" t="s" s="4"><v>10</v></c></row>
    <row r="3">
      <c r="A3" t="s" s="4"><v>12</v></c>
      <c r="B3" t="s" s="4"><v>13</v></c>
      <c r="C3" t="s" s="4"><v>14</v></c>
      <c r="D3" t="s" s="4"><v>15</v></c>
      <c r="E3" t="s" s="4"><v>16</v></c>
      <c r="F3" t="s" s="4"><v>17</v></c>
      <c r="G3" t="s" s="4"><v>18</v></c>
    </row>
    <row r="4">
      <c r="A4" t="s" s="4"><v>19</v></c>
      <c r="B4" t="s" s="4"><v>20</v></c>
      <c r="C4" t="s" s="4"><v>21</v></c>
      <c r="D4" t="s" s="4"><v>22</v></c>
      <c r="E4" t="s" s="4"><v>23</v></c>
      <c r="F4" t="s" s="4"><v>24</v></c>
    </row>
    <row r="5">
      <c r="A5" t="s" s="4"><v>0</v></c>
      <c r="B5" t="s" s="4"><v>1</v></c>
      <c r="C5" t="s" s="4"><v>2</v></c>
      <c r="D5" t="s" s="4"><v>3</v></c>
      <c r="E5" t="s" s="4"><v>4</v></c>
      <c r="F5" t="s" s="4"><v>5</v></c>
      <c r="G5" t="s" s="4"><v>6</v></c>
      <c r="H5" t="s" s="4"><v>7</v></c>
      <c r="I5" t="s" s="4"><v>8</v></c>
      <c r="J5" t="s" s="4"><v>9</v></c>
      <c r="K5" t="s" s="4"><v>10</v></c>
    </row>
    <row r="6">
      <c r="A6" t="s" s="1"><v>0</v></c>
      <c r="B6" t="s" s="1"><v>1</v></c>
      <c r="C6" t="s" s="1"><v>13</v></c>
      <c r="D6" s="7"><v>0.2</v></c>
      <c r="E6" s="9"><v>80</v></c>
      <c r="F6" s="6"><f>E6*D6</f><v></v></c>
      <c r="G6" s="10"><f>SUM(F6:F10)</f><v></v></c>
      <c r="H6" s="10"><f>RANK(G6,$G$6:$G$15,0)</f><v></v></c>
      <c r="I6" t="s" s="1"><v>8</v></c>
      <c r="J6" s="12"><v>44965</v></c>
      <c r="K6" t="s" s="1"><v>10</v></c>
    </row>
    <row r="7"><c r="A7" t="s" s="1"><v>0</v></c><c r="B7" t="s" s="1"><v>1</v></c><c r="C7" t="s" s="1"><v>14</v></c><c r="D7" s="7"><v>0.2</v></c><c r="E7" s="9"><v>80</v></c><c r="F7" s="6"><f>E7*D7</f><v></v></c></row>
    <row r="8"><c r="A8" t="s" s="1"><v>0</v></c><c r="B8" t="s" s="1"><v>1</v></c><c r="C8" t="s" s="1"><v>15</v></c><c r="D8" s="7"><v>0.2</v></c><c r="E8" s="9"><v>80</v></c><c r="F8" s="6"><f>E8*D8</f><v></v></c></row>
    <row r="9"><c r="A9" t="s" s="1"><v>0</v></c><c r="B9" t="s" s="1"><v>1</v></c><c r="C9" t="s" s="1"><v>16</v></c><c r="D9" s="7"><v>0.2</v></c><c r="E9" s="9"><v>80</v></c><c r="F9" s="6"><f>E9*D9</f><v></v></c></row>
    <row r="10"><c r="A10" t="s" s="1"><v>0</v></c><c r="B10" t="s" s="1"><v>1</v></c><c r="C10" t="s" s="1"><v>17</v></c><c r="D10" s="7"><v>0.2</v></c><c r="E10" s="9"><v>80</v></c><c r="F10" s="6"><f>E10*D10</f><v></v></c></row>
    <row r="11"><c r="A11" t="s" s="1"><v>0</v></c><c r="B11" t="s" s="1"><v>1</v></c><c r="C11" t="s" s="1"><v>21</v></c><c r="D11" s="7"><v>0.1</v></c><c r="E11" s="9"><v>80</v></c><c r="F11" s="6"><f>E11*D11</f><v></v></c></row>
    <row r="12"><c r="A12" t="s" s="1"><v>0</v></c><c r="B12" t="s" s="1"><v>1</v></c><c r="C12" t="s" s="1"><v>21</v></c><c r="D12" s="7"><v>0.1</v></c><c r="E12" s="9"><v>80</v></c><c r="F12" s="6"><f>E12*D12</f><v></v></c></row>
  </sheetData>
</worksheet>'''
}
create_xlsx('D:/新课开发/运营商/03-厅店转型/配套表单Excel/综合演练评分表.xlsx', [s7])

# ============================================
# FILE 8: 讲师配套工具.xlsx
# ============================================
s8 = {
    'name': '讲师工具',
    'shared_strings': [
        '序号', '课程模块', '模块时长(分钟)', '已完成', '学员表现',
        '重点记录', '物料准备', '是否齐备', '备注',
        '进度说明', '未开始', '进行中', '已完成'
    ],
    'sheet_xml': '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView workbookViewId="0">
      <pane ySplit="4" topLeftCell="A5" activePane="bottomLeft" state="frozen"/>
    </sheetView>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols>
    <col min="1" max="1" width="6" customWidth="1"/>
    <col min="2" max="2" width="16" customWidth="1"/>
    <col min="3" max="3" width="12" customWidth="1"/>
    <col min="4" max="4" width="10" customWidth="1"/>
    <col min="5" max="5" width="14" customWidth="1"/>
    <col min="6" max="6" width="16" customWidth="1"/>
    <col min="7" max="7" width="14" customWidth="1"/>
    <col min="8" max="8" width="10" customWidth="1"/>
    <col min="9" max="9" width="16" customWidth="1"/>
  </cols>
  <sheetData>
    <row r="1"><c r="A1" t="s" s="4"><v>9</v></c></row>
    <row r="2"><c r="A2" t="s" s="4"><v>10</v></c></row>
    <row r="3"><c r="A3" t="s" s="1"><v>11</v></c><c r="B3" t="s" s="1"><v>12</v></c><c r="C3" t="s" s="1"><v>13</v></c></row>
    <row r="4">
      <c r="A4" t="s" s="4"><v>0</v></c>
      <c r="B4" t="s" s="4"><v>1</v></c>
      <c r="C4" t="s" s="4"><v>2</v></c>
      <c r="D4" t="s" s="4"><v>3</v></c>
      <c r="E4" t="s" s="4"><v>4</v></c>
      <c r="F4" t="s" s="4"><v>5</v></c>
      <c r="G4" t="s" s="4"><v>6</v></c>
      <c r="H4" t="s" s="4"><v>7</v></c>
      <c r="I4" t="s" s="4"><v>8</v></c>
    </row>
    <row r="5">
      <c r="A5" s="10"><v>1</v></c>
      <c r="B5" t="s" s="1"><v>1</v></c>
      <c r="C5" s="10"><v>60</v></c>
      <c r="D5" t="s" s="1"><v>11</v></c>
      <c r="E5" t="s" s="1"><v>4</v></c>
      <c r="F5" t="s" s="1"><v>5</v></c>
      <c r="G5" t="s" s="1"><v>6</v></c>
      <c r="H5" t="s" s="1"><v>7</v></c>
      <c r="I5" t="s" s="1"><v>8</v></c>
    </row>
    <row r="6"><c r="A6" s="10"><v>2</v></c></row>
    <row r="7"><c r="A7" s="10"><v>3</v></c></row>
    <row r="8"><c r="A8" s="10"><v>4</v></c></row>
    <row r="9"><c r="A9" s="10"><v>5</v></c></row>
    <row r="10"><c r="A10" s="10"><v>6</v></c></row>
    <row r="11"><c r="A11" s="10"><v>7</v></c></row>
    <row r="12"><c r="A12" s="10"><v>8</v></c></row>
  </sheetData>
</worksheet>'''
}
create_xlsx('D:/新课开发/运营商/03-厅店转型/配套表单Excel/讲师配套工具.xlsx', [s8])

print('\nAll 8 Excel files created successfully!')