#!/usr/bin/env python3
"""Generate 7 Excel files for 销售人员的情绪价值课 course materials."""

import shutil
import os
import zipfile

SKILL_DIR = r"C:\Users\Administrator\.claude\skills\Excel表格处理"
TEMPLATE_DIR = os.path.join(SKILL_DIR, "templates", "minimal_xlsx")
OUTPUT_DIR = r"D:\新课开发\情绪与心理学\销售人员的情绪价值课\工具表单"

def col_letter(n):
    """Convert 1-based column number to Excel letter."""
    result = ""
    while n > 0:
        n, rem = divmod(n - 1, 26)
        result = chr(65 + rem) + result
    return result

def build_shared_strings(strings):
    """Build sharedStrings.xml content."""
    unique_strings = []
    for s in strings:
        if s not in unique_strings:
            unique_strings.append(s)
    unique_count = len(unique_strings)
    items = []
    for s in unique_strings:
        s = s.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")
        items.append(f"  <si><t>{s}</t></si>")
    return f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="{len(strings)}" uniqueCount="{unique_count}">
{chr(10).join(items)}
</sst>'''

def build_styles_xml():
    """Build minimal styles.xml with 13 pre-built style slots."""
    return '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <fonts>
    <font><sz val="11"/><name val="Calibri"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="000000FF"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="00000000"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="00008000"/></font>
    <font><sz val="11"/><name val="Calibri"/><b/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="000000FF"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="00000000"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="000000FF"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="00000000"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="000000FF"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="00000000"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="000000FF"/></font>
    <font><sz val="11"/><name val="Calibri"/><b/><color rgb="00000000"/></font>
  </fonts>
  <fills>
    <fill><patternFill patternType="none"/></fill>
    <fill><patternFill patternType="gray125"/></fill>
  </fills>
  <borders>
    <border><left/><right/><top/><bottom/><diagonal/></border>
  </borders>
  <cellStyleXfs>
    <xf numFmtId="0" fontId="0" fillId="0" borderId="0"/>
  </cellStyleXfs>
  <cellXfs>
    <xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/>
    <xf numFmtId="0" fontId="1" fillId="0" borderId="0" xfId="0"/>
    <xf numFmtId="0" fontId="2" fillId="0" borderId="0" xfId="0"/>
    <xf numFmtId="0" fontId="3" fillId="0" borderId="0" xfId="0"/>
    <xf numFmtId="0" fontId="4" fillId="0" borderId="0" xfId="0"/>
    <xf numFmtId="164" fontId="5" fillId="0" borderId="0" xfId="0" applyNumberFormat="1"/>
    <xf numFmtId="164" fontId="6" fillId="0" borderId="0" xfId="0" applyNumberFormat="1"/>
    <xf numFmtId="165" fontId="7" fillId="0" borderId="0" xfId="0" applyNumberFormat="1"/>
    <xf numFmtId="165" fontId="8" fillId="0" borderId="0" xfId="0" applyNumberFormat="1"/>
    <xf numFmtId="167" fontId="9" fillId="0" borderId="0" xfId="0" applyNumberFormat="1"/>
    <xf numFmtId="167" fontId="10" fillId="0" borderId="0" xfId="0" applyNumberFormat="1"/>
    <xf numFmtId="1" fontId="11" fillId="0" borderId="0" xfId="0" applyNumberFormat="1"/>
    <xf numFmtId="0" fontId="12" fillId="0" borderId="0" xfId="0"/>
  </cellXfs>
  <numFmts>
    <numFmt numFmtId="164" formatCode="$#,##0;($#,##0);&quot;-&quot;"/>
    <numFmt numFmtId="165" formatCode="0.0%"/>
    <numFmt numFmtId="166" formatCode="0.0x"/>
    <numFmt numFmtId="167" formatCode="#,##0"/>
  </numFmts>
</styleSheet>'''

def build_sheet_xml(rows_data, col_widths=None, freeze_row=1):
    """Build worksheet XML with given row data."""
    cols_xml = ""
    if col_widths:
        for i, w in enumerate(col_widths, 1):
            cols_xml += f'  <col min="{i}" max="{i}" width="{w}" customWidth="1"/>\n'

    rows_xml = ""
    for row in rows_data:
        r = row['row_num']
        cells_xml = ""
        for cell in row['cells']:
            col_idx, value, cell_type, style = cell
            col_letter_str = col_letter(col_idx)
            if cell_type == 's':
                cells_xml += f'    <c r="{col_letter_str}{r}" t="s" s="{style}"><v>{value}</v></c>\n'
            elif cell_type == 'n':
                cells_xml += f'    <c r="{col_letter_str}{r}" s="{style}"><v>{value}</v></c>\n'
            elif cell_type == 'f':
                cells_xml += f'    <c r="{col_letter_str}{r}" s="{style}"><f>{value}</f><v></v></c>\n'
            elif cell_type == 'inlineStr':
                value = str(value).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")
                cells_xml += f'    <c r="{col_letter_str}{r}" t="inlineStr" s="{style}"><is><t>{value}</t></is></c>\n'

        rows_xml += f'  <row r="{r}">\n{cells_xml}  </row>\n'

    freeze_pane = f'<pane ySplit="{freeze_row}" topLeftCell="A{freeze_row+1}" activePane="bottomLeft" state="frozen"/>' if freeze_row > 0 else ''

    return f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView workbookViewId="0">{freeze_pane}
    </sheetView>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
{cols_xml}  <sheetData>
{rows_xml}  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

def create_multisheet_workbook(sheets_config):
    """Create a multi-sheet workbook config dict."""
    # Collect all strings and build sharedStrings
    all_strings = []
    for sheet in sheets_config:
        for s in sheet.get('strings', []):
            if s not in all_strings:
                all_strings.append(s)

    shared_strings_xml = build_shared_strings(all_strings)

    # Build sheet XMLs
    sheet_xmls = []
    for i, sheet in enumerate(sheets_config, 1):
        rows = sheet.get('rows', [])
        col_widths = sheet.get('col_widths', [15, 15, 15, 15, 15, 15])
        freeze_row = sheet.get('freeze_row', 1)
        sheet_xmls.append((f"sheet{i}.xml", build_sheet_xml(rows, col_widths, freeze_row)))

    # Build workbook.xml
    sheet_entries = []
    for i, sheet in enumerate(sheets_config, 1):
        name = sheet['name'].replace('&', '&amp;')
        sheet_entries.append(f'  <sheet name="{name}" sheetId="{i}" r:id="rId{i+3}"/>')

    num_sheets = len(sheets_config)
    workbook_xml = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheets>
{chr(10).join(sheet_entries)}
  </sheets>
  <calcPr calcId="0"/>
</workbook>'''

    # Build workbook.xml.rels
    rels_entries = [
        '  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>',
        '  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>',
        '  <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml"/>',
    ]
    for i in range(1, num_sheets + 1):
        rels_entries.append(f'  <Relationship Id="rId{i+3}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet{i}.xml"/>')

    workbook_rels_xml = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
{chr(10).join(rels_entries)}
</Relationships>'''

    # Build [Content_Types].xml
    override_entries = ['  <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>']
    for i in range(1, num_sheets + 1):
        override_entries.append(f'  <Override PartName="/xl/worksheets/sheet{i}.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>')
    override_entries.append('  <Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>')
    override_entries.append('  <Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/>')

    content_types_xml = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
{chr(10).join(override_entries)}
</Types>'''

    return {
        'workbook.xml': workbook_xml,
        'workbook.xml.rels': workbook_rels_xml,
        '[Content_Types].xml': content_types_xml,
        'sharedStrings.xml': shared_strings_xml,
        'styles.xml': build_styles_xml(),
        'worksheets': sheet_xmls
    }

def write_workbook(work_dir, files):
    """Write all files to the work directory structure."""
    with open(os.path.join(work_dir, "[Content_Types].xml"), 'w', encoding='utf-8') as f:
        f.write(files['[Content_Types].xml'])

    os.makedirs(os.path.join(work_dir, "_rels"), exist_ok=True)
    with open(os.path.join(work_dir, "_rels", ".rels"), 'w', encoding='utf-8') as f:
        f.write('''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/>
</Relationships>''')

    os.makedirs(os.path.join(work_dir, "xl", "worksheets"), exist_ok=True)
    os.makedirs(os.path.join(work_dir, "xl", "_rels"), exist_ok=True)

    with open(os.path.join(work_dir, "xl", "workbook.xml"), 'w', encoding='utf-8') as f:
        f.write(files['workbook.xml'])
    with open(os.path.join(work_dir, "xl", "sharedStrings.xml"), 'w', encoding='utf-8') as f:
        f.write(files['sharedStrings.xml'])
    with open(os.path.join(work_dir, "xl", "workbook.xml.rels"), 'w', encoding='utf-8') as f:
        f.write(files['workbook.xml.rels'])
    with open(os.path.join(work_dir, "xl", "styles.xml"), 'w', encoding='utf-8') as f:
        f.write(files['styles.xml'])

    for ws_file, content in files['worksheets']:
        with open(os.path.join(work_dir, "xl", "worksheets", ws_file), 'w', encoding='utf-8') as f:
            f.write(content)

def pack_xlsx(work_dir, output_path):
    """Pack the work directory into an xlsx file."""
    with zipfile.ZipFile(output_path, 'w', zipfile.ZIP_DEFLATED) as zf:
        for root, dirs, files in os.walk(work_dir):
            for file in files:
                file_path = os.path.join(root, file)
                arcname = os.path.relpath(file_path, work_dir)
                zf.write(file_path, arcname)

def build_01_teaching_progress():
    """01-教学进度与检查表.xlsx"""
    config = {
        'name': '课程概览',
        'strings': [
            '课程概览', '模块编号', '模块名称', '主要内容', '学时建议',
            '模块一', '自我认知：压抑/表演/真实处理', '认识三种情绪处理模式', '4',
            '模块二', '情绪工具箱', '认知重构/进出仪式/边界表达', '4',
            '模块三', '情绪转嫁与承接', '识别客户情绪信号并回应', '3',
            '模块四', '人性需求识别', '被看见/被重视/安全感等', '4',
            '模块五', '全周期情绪节点', '挖掘/塑造/共识/承诺/执行', '4',
            '模块六', '节奏与尺度', '收/放节奏判断、尺度拿捏', '3',
            '模块七', '综合实战', '四维度框架综合应用', '4',
        ],
        'rows': [
            {'row_num': 1, 'cells': [(1, 0, 's', 4), (2, 1, 's', 4), (3, 2, 's', 4), (4, 3, 's', 4), (5, 4, 's', 4)]},
            {'row_num': 2, 'cells': [(1, 5, 'inlineStr', 0), (2, 6, 'inlineStr', 0), (3, 7, 'inlineStr', 0), (4, 8, 'n', 0)]},
            {'row_num': 3, 'cells': [(1, 9, 'inlineStr', 0), (2, 10, 'inlineStr', 0), (3, 11, 'inlineStr', 0), (4, 12, 'n', 0)]},
            {'row_num': 4, 'cells': [(1, 13, 'inlineStr', 0), (2, 14, 'inlineStr', 0), (3, 15, 'inlineStr', 0), (4, 16, 'n', 0)]},
            {'row_num': 5, 'cells': [(1, 17, 'inlineStr', 0), (2, 18, 'inlineStr', 0), (3, 19, 'inlineStr', 0), (4, 20, 'n', 0)]},
            {'row_num': 6, 'cells': [(1, 21, 'inlineStr', 0), (2, 22, 'inlineStr', 0), (3, 23, 'inlineStr', 0), (4, 24, 'n', 0)]},
            {'row_num': 7, 'cells': [(1, 25, 'inlineStr', 0), (2, 26, 'inlineStr', 0), (3, 27, 'inlineStr', 0), (4, 28, 'n', 0)]},
            {'row_num': 8, 'cells': [(1, 29, 'inlineStr', 0), (2, 30, 'inlineStr', 0), (3, 31, 'inlineStr', 0), (4, 32, 'n', 0)]},
        ],
        'freeze_row': 1,
        'col_widths': [12, 28, 35, 12]
    }

    config2 = {
        'name': '教学进度',
        'strings': [
            '日期', '模块', '内容', '完成状态', '检查项',
            '未完成', '进行中', '已完成', '出勤', '缺勤', '请假'
        ],
        'rows': [
            {'row_num': 1, 'cells': [(1, 0, 's', 4), (2, 1, 's', 4), (3, 2, 's', 4), (4, 3, 's', 4), (5, 4, 's', 4)]},
            {'row_num': 2, 'cells': [(1, '', 'inlineStr', 0), (2, '', 'inlineStr', 0), (3, '', 'inlineStr', 0), (4, 5, 'inlineStr', 0), (5, '', 'inlineStr', 0)]},
            {'row_num': 3, 'cells': [(1, '', 'inlineStr', 0), (2, '', 'inlineStr', 0), (3, '', 'inlineStr', 0), (4, 5, 'inlineStr', 0), (5, '', 'inlineStr', 0)]},
            {'row_num': 4, 'cells': [(1, '', 'inlineStr', 0), (2, '', 'inlineStr', 0), (3, '', 'inlineStr', 0), (4, 5, 'inlineStr', 0), (5, '', 'inlineStr', 0)]},
            {'row_num': 5, 'cells': [(1, '', 'inlineStr', 0), (2, '', 'inlineStr', 0), (3, '', 'inlineStr', 0), (4, 5, 'inlineStr', 0), (5, '', 'inlineStr', 0)]},
        ],
        'freeze_row': 1,
        'col_widths': [15, 15, 30, 12, 35]
    }

    config3 = {
        'name': '学员考勤',
        'strings': ['姓名', '第1天', '第2天', '第3天', '备注'],
        'rows': [
            {'row_num': 1, 'cells': [(1, 0, 's', 4), (2, 1, 's', 4), (3, 2, 's', 4), (4, 3, 's', 4), (5, 4, 's', 4)]},
            {'row_num': 2, 'cells': [(1, '', 'inlineStr', 0), (2, '出勤', 'inlineStr', 0), (3, '出勤', 'inlineStr', 0), (4, '出勤', 'inlineStr', 0), (5, '', 'inlineStr', 0)]},
            {'row_num': 3, 'cells': [(1, '', 'inlineStr', 0), (2, '出勤', 'inlineStr', 0), (3, '出勤', 'inlineStr', 0), (4, '出勤', 'inlineStr', 0), (5, '', 'inlineStr', 0)]},
            {'row_num': 4, 'cells': [(1, '', 'inlineStr', 0), (2, '出勤', 'inlineStr', 0), (3, '出勤', 'inlineStr', 0), (4, '出勤', 'inlineStr', 0), (5, '', 'inlineStr', 0)]},
            {'row_num': 5, 'cells': [(1, '', 'inlineStr', 0), (2, '出勤', 'inlineStr', 0), (3, '出勤', 'inlineStr', 0), (4, '出勤', 'inlineStr', 0), (5, '', 'inlineStr', 0)]},
        ],
        'freeze_row': 1,
        'col_widths': [15, 10, 10, 10, 25]
    }

    config4 = {
        'name': '课堂表现',
        'strings': ['姓名', '参与度', '练习完成', '提问次数', '备注'],
        'rows': [
            {'row_num': 1, 'cells': [(1, 0, 's', 4), (2, 1, 's', 4), (3, 2, 's', 4), (4, 3, 's', 4), (5, 4, 's', 4)]},
            {'row_num': 2, 'cells': [(1, '', 'inlineStr', 0), (2, '高', 'inlineStr', 0), (3, '优', 'inlineStr', 0), (4, 0, 'n', 0), (5, '', 'inlineStr', 0)]},
            {'row_num': 3, 'cells': [(1, '', 'inlineStr', 0), (2, '高', 'inlineStr', 0), (3, '优', 'inlineStr', 0), (4, 0, 'n', 0), (5, '', 'inlineStr', 0)]},
            {'row_num': 4, 'cells': [(1, '', 'inlineStr', 0), (2, '高', 'inlineStr', 0), (3, '优', 'inlineStr', 0), (4, 0, 'n', 0), (5, '', 'inlineStr', 0)]},
            {'row_num': 5, 'cells': [(1, '', 'inlineStr', 0), (2, '高', 'inlineStr', 0), (3, '优', 'inlineStr', 0), (4, 0, 'n', 0), (5, '', 'inlineStr', 0)]},
        ],
        'freeze_row': 1,
        'col_widths': [15, 12, 12, 12, 25]
    }

    return [config, config2, config3, config4]

def build_02_student_registration():
    """02-学员信息登记表.xlsx"""
    config1 = {
        'name': '基本信息',
        'strings': ['姓名', '部门', '岗位', '入职时间', '销售经验年限'],
        'rows': [
            {'row_num': 1, 'cells': [(1, 0, 's', 4), (2, 1, 's', 4), (3, 2, 's', 4), (4, 3, 's', 4), (5, 4, 's', 4)]},
            {'row_num': 2, 'cells': [(1, '', 'inlineStr', 0), (2, '', 'inlineStr', 0), (3, '', 'inlineStr', 0), (4, '', 'inlineStr', 0), (5, '', 'inlineStr', 0)]},
            {'row_num': 3, 'cells': [(1, '', 'inlineStr', 0), (2, '', 'inlineStr', 0), (3, '', 'inlineStr', 0), (4, '', 'inlineStr', 0), (5, '', 'inlineStr', 0)]},
            {'row_num': 4, 'cells': [(1, '', 'inlineStr', 0), (2, '', 'inlineStr', 0), (3, '', 'inlineStr', 0), (4, '', 'inlineStr', 0), (5, '', 'inlineStr', 0)]},
            {'row_num': 5, 'cells': [(1, '', 'inlineStr', 0), (2, '', 'inlineStr', 0), (3, '', 'inlineStr', 0), (4, '', 'inlineStr', 0), (5, '', 'inlineStr', 0)]},
        ],
        'freeze_row': 1,
        'col_widths': [15, 20, 20, 18, 15]
    }

    config2 = {
        'name': '销售背景',
        'strings': ['所在行业', '销售模式', '客单价特征', '主要产品'],
        'rows': [
            {'row_num': 1, 'cells': [(1, 0, 's', 4), (2, 1, 's', 4), (3, 2, 's', 4), (4, 3, 's', 4)]},
            {'row_num': 2, 'cells': [(1, '', 'inlineStr', 0), (2, '', 'inlineStr', 0), (3, '', 'inlineStr', 0), (4, '', 'inlineStr', 0)]},
            {'row_num': 3, 'cells': [(1, '', 'inlineStr', 0), (2, '', 'inlineStr', 0), (3, '', 'inlineStr', 0), (4, '', 'inlineStr', 0)]},
            {'row_num': 4, 'cells': [(1, '', 'inlineStr', 0), (2, '', 'inlineStr', 0), (3, '', 'inlineStr', 0), (4, '', 'inlineStr', 0)]},
            {'row_num': 5, 'cells': [(1, '', 'inlineStr', 0), (2, '', 'inlineStr', 0), (3, '', 'inlineStr', 0), (4, '', 'inlineStr', 0)]},
        ],
        'freeze_row': 1,
        'col_widths': [20, 20, 25, 30]
    }

    config3 = {
        'name': '学习期待',
        'strings': ['参加课程的原因', '最希望解决的问题', '期望带走什么'],
        'rows': [
            {'row_num': 1, 'cells': [(1, 0, 's', 4), (2, 1, 's', 4), (3, 2, 's', 4)]},
            {'row_num': 2, 'cells': [(1, '', 'inlineStr', 0), (2, '', 'inlineStr', 0), (3, '', 'inlineStr', 0)]},
            {'row_num': 3, 'cells': [(1, '', 'inlineStr', 0), (2, '', 'inlineStr', 0), (3, '', 'inlineStr', 0)]},
            {'row_num': 4, 'cells': [(1, '', 'inlineStr', 0), (2, '', 'inlineStr', 0), (3, '', 'inlineStr', 0)]},
            {'row_num': 5, 'cells': [(1, '', 'inlineStr', 0), (2, '', 'inlineStr', 0), (3, '', 'inlineStr', 0)]},
        ],
        'freeze_row': 1,
        'col_widths': [35, 35, 35]
    }

    config4 = {
        'name': '联系方式',
        'strings': ['手机', '邮箱', '微信'],
        'rows': [
            {'row_num': 1, 'cells': [(1, 0, 's', 4), (2, 1, 's', 4), (3, 2, 's', 4)]},
            {'row_num': 2, 'cells': [(1, '', 'inlineStr', 0), (2, '', 'inlineStr', 0), (3, '', 'inlineStr', 0)]},
            {'row_num': 3, 'cells': [(1, '', 'inlineStr', 0), (2, '', 'inlineStr', 0), (3, '', 'inlineStr', 0)]},
            {'row_num': 4, 'cells': [(1, '', 'inlineStr', 0), (2, '', 'inlineStr', 0), (3, '', 'inlineStr', 0)]},
            {'row_num': 5, 'cells': [(1, '', 'inlineStr', 0), (2, '', 'inlineStr', 0), (3, '', 'inlineStr', 0)]},
        ],
        'freeze_row': 1,
        'col_widths': [18, 30, 20]
    }

    return [config1, config2, config3, config4]

def build_03_action_plan():
    """03-课后实践行动计划表.xlsx"""
    config1 = {
        'name': '行动计划',
        'strings': ['编号', '行动项', '具体做法', '完成时间', '预计困难', '应对方法'],
        'rows': [
            {'row_num': 1, 'cells': [(1, 0, 's', 4), (2, 1, 's', 4), (3, 2, 's', 4), (4, 3, 's', 4), (5, 4, 's', 4), (6, 5, 's', 4)]},
            {'row_num': 2, 'cells': [(1, 1, 'n', 0), (2, '', 'inlineStr', 0), (3, '', 'inlineStr', 0), (4, '', 'inlineStr', 0), (5, '', 'inlineStr', 0), (6, '', 'inlineStr', 0)]},
            {'row_num': 3, 'cells': [(1, 2, 'n', 0), (2, '', 'inlineStr', 0), (3, '', 'inlineStr', 0), (4, '', 'inlineStr', 0), (5, '', 'inlineStr', 0), (6, '', 'inlineStr', 0)]},
            {'row_num': 4, 'cells': [(1, 3, 'n', 0), (2, '', 'inlineStr', 0), (3, '', 'inlineStr', 0), (4, '', 'inlineStr', 0), (5, '', 'inlineStr', 0), (6, '', 'inlineStr', 0)]},
            {'row_num': 5, 'cells': [(1, 4, 'n', 0), (2, '', 'inlineStr', 0), (3, '', 'inlineStr', 0), (4, '', 'inlineStr', 0), (5, '', 'inlineStr', 0), (6, '', 'inlineStr', 0)]},
            {'row_num': 6, 'cells': [(1, 5, 'n', 0), (2, '', 'inlineStr', 0), (3, '', 'inlineStr', 0), (4, '', 'inlineStr', 0), (5, '', 'inlineStr', 0), (6, '', 'inlineStr', 0)]},
        ],
        'freeze_row': 1,
        'col_widths': [8, 20, 30, 15, 25, 25]
    }

    config2 = {
        'name': '周检视',
        'strings': ['周次', '计划行动', '实际完成', '状态', '调整说明', '已完成', '进行中', '未开始'],
        'rows': [
            {'row_num': 1, 'cells': [(1, 0, 's', 4), (2, 1, 's', 4), (3, 2, 's', 4), (4, 3, 's', 4), (5, 4, 's', 4)]},
            {'row_num': 2, 'cells': [(1, '第1周', 'inlineStr', 0), (2, '', 'inlineStr', 0), (3, '', 'inlineStr', 0), (4, 5, 'inlineStr', 0), (5, '', 'inlineStr', 0)]},
            {'row_num': 3, 'cells': [(1, '第2周', 'inlineStr', 0), (2, '', 'inlineStr', 0), (3, '', 'inlineStr', 0), (4, 5, 'inlineStr', 0), (5, '', 'inlineStr', 0)]},
            {'row_num': 4, 'cells': [(1, '第3周', 'inlineStr', 0), (2, '', 'inlineStr', 0), (3, '', 'inlineStr', 0), (4, 5, 'inlineStr', 0), (5, '', 'inlineStr', 0)]},
            {'row_num': 5, 'cells': [(1, '第4周', 'inlineStr', 0), (2, '', 'inlineStr', 0), (3, '', 'inlineStr', 0), (4, 5, 'inlineStr', 0), (5, '', 'inlineStr', 0)]},
        ],
        'freeze_row': 1,
        'col_widths': [10, 30, 30, 12, 30]
    }

    config3 = {
        'name': '月度复盘',
        'strings': ['月份', '主要进展', '收获与反思', '下月重点'],
        'rows': [
            {'row_num': 1, 'cells': [(1, 0, 's', 4), (2, 1, 's', 4), (3, 2, 's', 4), (4, 3, 's', 4)]},
            {'row_num': 2, 'cells': [(1, '', 'inlineStr', 0), (2, '', 'inlineStr', 0), (3, '', 'inlineStr', 0), (4, '', 'inlineStr', 0)]},
            {'row_num': 3, 'cells': [(1, '', 'inlineStr', 0), (2, '', 'inlineStr', 0), (3, '', 'inlineStr', 0), (4, '', 'inlineStr', 0)]},
            {'row_num': 4, 'cells': [(1, '', 'inlineStr', 0), (2, '', 'inlineStr', 0), (3, '', 'inlineStr', 0), (4, '', 'inlineStr', 0)]},
            {'row_num': 5, 'cells': [(1, '', 'inlineStr', 0), (2, '', 'inlineStr', 0), (3, '', 'inlineStr', 0), (4, '', 'inlineStr', 0)]},
        ],
        'freeze_row': 1,
        'col_widths': [12, 35, 40, 35]
    }

    config4 = {
        'name': '成果记录',
        'strings': ['日期', '场景描述', '应用工具', '效果', '反思'],
        'rows': [
            {'row_num': 1, 'cells': [(1, 0, 's', 4), (2, 1, 's', 4), (3, 2, 's', 4), (4, 3, 's', 4), (5, 4, 's', 4)]},
            {'row_num': 2, 'cells': [(1, '', 'inlineStr', 0), (2, '', 'inlineStr', 0), (3, '', 'inlineStr', 0), (4, '', 'inlineStr', 0), (5, '', 'inlineStr', 0)]},
            {'row_num': 3, 'cells': [(1, '', 'inlineStr', 0), (2, '', 'inlineStr', 0), (3, '', 'inlineStr', 0), (4, '', 'inlineStr', 0), (5, '', 'inlineStr', 0)]},
            {'row_num': 4, 'cells': [(1, '', 'inlineStr', 0), (2, '', 'inlineStr', 0), (3, '', 'inlineStr', 0), (4, '', 'inlineStr', 0), (5, '', 'inlineStr', 0)]},
            {'row_num': 5, 'cells': [(1, '', 'inlineStr', 0), (2, '', 'inlineStr', 0), (3, '', 'inlineStr', 0), (4, '', 'inlineStr', 0), (5, '', 'inlineStr', 0)]},
        ],
        'freeze_row': 1,
        'col_widths': [12, 35, 20, 30, 30]
    }

    return [config1, config2, config3, config4]

def build_04_self_check():
    """04-自我状态自检工具.xlsx"""
    config1 = {
        'name': '自检三问卡',
        'strings': [
            '问题', '选项(压抑/表演/真实处理)', '需要工具', '行动',
            '我现在真实感受是什么？', '压抑', '表演', '真实处理',
            '我现在的身体信号是什么？', '紧绷/疲惫', '兴奋/亢奋', '放松/自然',
            '我想要的结果是什么？', '控制局面', '获得认可', '真诚连接'
        ],
        'rows': [
            {'row_num': 1, 'cells': [(1, 0, 's', 4), (2, 1, 's', 4), (3, 2, 's', 4), (4, 3, 's', 4)]},
            {'row_num': 2, 'cells': [(1, 4, 'inlineStr', 0), (2, 5, 'inlineStr', 0), (3, 6, 'inlineStr', 0), (4, 7, 'inlineStr', 0)]},
            {'row_num': 3, 'cells': [(1, 8, 'inlineStr', 0), (2, 9, 'inlineStr', 0), (3, 10, 'inlineStr', 0), (4, 11, 'inlineStr', 0)]},
            {'row_num': 4, 'cells': [(1, 12, 'inlineStr', 0), (2, 13, 'inlineStr', 0), (3, 14, 'inlineStr', 0), (4, 15, 'inlineStr', 0)]},
        ],
        'freeze_row': 1,
        'col_widths': [30, 15, 15, 20]
    }

    config2 = {
        'name': '状态日志',
        'strings': ['日期', '时间', '触发事件', '当时状态', '处理方式', '下场对话状态'],
        'rows': [
            {'row_num': 1, 'cells': [(1, 0, 's', 4), (2, 1, 's', 4), (3, 2, 's', 4), (4, 3, 's', 4), (5, 4, 's', 4), (6, 5, 's', 4)]},
            {'row_num': 2, 'cells': [(1, '', 'inlineStr', 0), (2, '', 'inlineStr', 0), (3, '', 'inlineStr', 0), (4, '', 'inlineStr', 0), (5, '', 'inlineStr', 0), (6, '', 'inlineStr', 0)]},
            {'row_num': 3, 'cells': [(1, '', 'inlineStr', 0), (2, '', 'inlineStr', 0), (3, '', 'inlineStr', 0), (4, '', 'inlineStr', 0), (5, '', 'inlineStr', 0), (6, '', 'inlineStr', 0)]},
            {'row_num': 4, 'cells': [(1, '', 'inlineStr', 0), (2, '', 'inlineStr', 0), (3, '', 'inlineStr', 0), (4, '', 'inlineStr', 0), (5, '', 'inlineStr', 0), (6, '', 'inlineStr', 0)]},
            {'row_num': 5, 'cells': [(1, '', 'inlineStr', 0), (2, '', 'inlineStr', 0), (3, '', 'inlineStr', 0), (4, '', 'inlineStr', 0), (5, '', 'inlineStr', 0), (6, '', 'inlineStr', 0)]},
        ],
        'freeze_row': 1,
        'col_widths': [12, 10, 30, 15, 20, 18]
    }

    config3 = {
        'name': '工具使用记录',
        'strings': ['日期', '工具类型', '场景', '效果', '认知重构', '进出仪式', '边界表达', '意义连接', '同伴支持'],
        'rows': [
            {'row_num': 1, 'cells': [(1, 0, 's', 4), (2, 1, 's', 4), (3, 2, 's', 4), (4, 3, 's', 4)]},
            {'row_num': 2, 'cells': [(1, '', 'inlineStr', 0), (2, '', 'inlineStr', 0), (3, '', 'inlineStr', 0), (4, '', 'inlineStr', 0)]},
            {'row_num': 3, 'cells': [(1, '', 'inlineStr', 0), (2, '', 'inlineStr', 0), (3, '', 'inlineStr', 0), (4, '', 'inlineStr', 0)]},
            {'row_num': 4, 'cells': [(1, '', 'inlineStr', 0), (2, '', 'inlineStr', 0), (3, '', 'inlineStr', 0), (4, '', 'inlineStr', 0)]},
            {'row_num': 5, 'cells': [(1, '', 'inlineStr', 0), (2, '', 'inlineStr', 0), (3, '', 'inlineStr', 0), (4, '', 'inlineStr', 0)]},
        ],
        'freeze_row': 1,
        'col_widths': [12, 15, 35, 30]
    }

    return [config1, config2, config3]

def build_05_human_needs():
    """05-人性需求识别练习表.xlsx"""
    needs_strings = [
        '类型名称', '一句话描述', '典型信号', '有效回应要点',
        '被看见', '感受到自己的存在和价值', '眼神接触、点名、肯定', '具体认可+命名感受',
        '被重视', '感到自己比别人更重要', '特殊请求、优先考虑', '优先响应+说明原因',
        '安全感', '远离风险和不确定', '反复确认、犹豫不决', '明确底线+降低风险描述',
        '掌控感', '对局面有主导权', '提要求、下指令、质疑', '给选择+确认自主',
        '胜任感', '证明自己能行', '炫耀经验、跳过说明', '请教+肯定专业',
        '归属感', '成为群体一员', '问同事做法、提团队', '强调共同身份'
    ]

    config1 = {
        'name': '需求类型',
        'strings': needs_strings,
        'rows': [
            {'row_num': 1, 'cells': [(1, 0, 's', 4), (2, 1, 's', 4), (3, 2, 's', 4), (4, 3, 's', 4)]},
            {'row_num': 2, 'cells': [(1, 4, 'inlineStr', 0), (2, 5, 'inlineStr', 0), (3, 6, 'inlineStr', 0), (4, 7, 'inlineStr', 0)]},
            {'row_num': 3, 'cells': [(1, 8, 'inlineStr', 0), (2, 9, 'inlineStr', 0), (3, 10, 'inlineStr', 0), (4, 11, 'inlineStr', 0)]},
            {'row_num': 4, 'cells': [(1, 12, 'inlineStr', 0), (2, 13, 'inlineStr', 0), (3, 14, 'inlineStr', 0), (4, 15, 'inlineStr', 0)]},
            {'row_num': 5, 'cells': [(1, 16, 'inlineStr', 0), (2, 17, 'inlineStr', 0), (3, 18, 'inlineStr', 0), (4, 19, 'inlineStr', 0)]},
            {'row_num': 6, 'cells': [(1, 20, 'inlineStr', 0), (2, 21, 'inlineStr', 0), (3, 22, 'inlineStr', 0), (4, 23, 'inlineStr', 0)]},
        ],
        'freeze_row': 1,
        'col_widths': [15, 28, 30, 30]
    }

    practice_strings = [
        '题目编号', '客户原话', '需求判断(选择)', '回应设计', '参考答案',
        '1', '这个问题很简单嘛', '胜任感', '', '您确实很专业，那我就简单说一下重点...',
        '2', '我跟你们领导很熟的', '被重视', '', '那太好了，有您这层关系，我们的合作肯定更顺畅...',
        '3', '我再考虑考虑...', '安全感', '', '完全理解，您的谨慎是对的，我先给您把风险点说清楚...',
    ]

    config2 = {
        'name': '练习题',
        'strings': practice_strings,
        'rows': [
            {'row_num': 1, 'cells': [(1, 0, 's', 4), (2, 1, 's', 4), (3, 2, 's', 4), (4, 3, 's', 4), (5, 4, 's', 4)]},
            {'row_num': 2, 'cells': [(1, 5, 'inlineStr', 0), (2, 6, 'inlineStr', 0), (3, 7, 'inlineStr', 0), (4, 8, 'inlineStr', 0), (5, 9, 'inlineStr', 0)]},
            {'row_num': 3, 'cells': [(1, 10, 'inlineStr', 0), (2, 11, 'inlineStr', 0), (3, 12, 'inlineStr', 0), (4, 13, 'inlineStr', 0), (5, 14, 'inlineStr', 0)]},
        ],
        'freeze_row': 1,
        'col_widths': [10, 30, 15, 30, 35]
    }

    config3 = {
        'name': '实战记录',
        'strings': ['日期', '客户类型', '客户原话', '识别需求', '设计回应', '实际效果'],
        'rows': [
            {'row_num': 1, 'cells': [(1, 0, 's', 4), (2, 1, 's', 4), (3, 2, 's', 4), (4, 3, 's', 4), (5, 4, 's', 4), (6, 5, 's', 4)]},
            {'row_num': 2, 'cells': [(1, '', 'inlineStr', 0), (2, '', 'inlineStr', 0), (3, '', 'inlineStr', 0), (4, '', 'inlineStr', 0), (5, '', 'inlineStr', 0), (6, '', 'inlineStr', 0)]},
            {'row_num': 3, 'cells': [(1, '', 'inlineStr', 0), (2, '', 'inlineStr', 0), (3, '', 'inlineStr', 0), (4, '', 'inlineStr', 0), (5, '', 'inlineStr', 0), (6, '', 'inlineStr', 0)]},
            {'row_num': 4, 'cells': [(1, '', 'inlineStr', 0), (2, '', 'inlineStr', 0), (3, '', 'inlineStr', 0), (4, '', 'inlineStr', 0), (5, '', 'inlineStr', 0), (6, '', 'inlineStr', 0)]},
        ],
        'freeze_row': 1,
        'col_widths': [12, 15, 30, 15, 30, 25]
    }

    return [config1, config2, config3]

def build_06_scene_scale():
    """06-场景尺度判断练习表.xlsx"""
    config1 = {
        'name': '影响因素',
        'strings': ['变量名称', '具体考量', '我的理解', '客户情绪强弱', '客户信任程度', '谈话历史深度', '当前议题重要程度', '时间压力', '环境正式程度'],
        'rows': [
            {'row_num': 1, 'cells': [(1, 0, 's', 4), (2, 1, 's', 4), (3, 2, 's', 4)]},
            {'row_num': 2, 'cells': [(1, 3, 'inlineStr', 0), (2, '客户当前情绪的强度：弱=可推进，强=需退让', 'inlineStr', 0), (3, '', 'inlineStr', 0)]},
            {'row_num': 3, 'cells': [(1, 4, 'inlineStr', 0), (2, '关系深浅决定尺度宽窄：老客户可宽，新客户要紧', 'inlineStr', 0), (3, '', 'inlineStr', 0)]},
            {'row_num': 4, 'cells': [(1, 5, 'inlineStr', 0), (2, '谈得越深，尺度越要谨慎，避免翻车', 'inlineStr', 0), (3, '', 'inlineStr', 0)]},
            {'row_num': 5, 'cells': [(1, 6, 'inlineStr', 0), (2, '核心决策议题要收敛，边缘话题可放松', 'inlineStr', 0), (3, '', 'inlineStr', 0)]},
            {'row_num': 6, 'cells': [(1, 7, 'inlineStr', 0), (2, '时间紧=尺度宽，时间松=尺度严', 'inlineStr', 0), (3, '', 'inlineStr', 0)]},
            {'row_num': 7, 'cells': [(1, 8, 'inlineStr', 0), (2, '正式场合收，非正式场合放', 'inlineStr', 0), (3, '', 'inlineStr', 0)]},
        ],
        'freeze_row': 1,
        'col_widths': [20, 40, 35]
    }

    config2 = {
        'name': '练习模板',
        'strings': ['客户原话', '人性需求判断', '场景节点判断', '节奏判断(收/放)', '尺度判断(过/欠)', '调整后回应'],
        'rows': [
            {'row_num': 1, 'cells': [(1, 0, 's', 4), (2, 1, 's', 4), (3, 2, 's', 4), (4, 3, 's', 4), (5, 4, 's', 4), (6, 5, 's', 4)]},
            {'row_num': 2, 'cells': [(1, '', 'inlineStr', 0), (2, '', 'inlineStr', 0), (3, '', 'inlineStr', 0), (4, '', 'inlineStr', 0), (5, '', 'inlineStr', 0), (6, '', 'inlineStr', 0)]},
            {'row_num': 3, 'cells': [(1, '', 'inlineStr', 0), (2, '', 'inlineStr', 0), (3, '', 'inlineStr', 0), (4, '', 'inlineStr', 0), (5, '', 'inlineStr', 0), (6, '', 'inlineStr', 0)]},
            {'row_num': 4, 'cells': [(1, '', 'inlineStr', 0), (2, '', 'inlineStr', 0), (3, '', 'inlineStr', 0), (4, '', 'inlineStr', 0), (5, '', 'inlineStr', 0), (6, '', 'inlineStr', 0)]},
        ],
        'freeze_row': 1,
        'col_widths': [25, 15, 15, 12, 12, 35]
    }

    config3 = {
        'name': '综合练习',
        'strings': ['练习编号', '场景描述', '四维度判断', '我的回应', '点评要点'],
        'rows': [
            {'row_num': 1, 'cells': [(1, 0, 's', 4), (2, 1, 's', 4), (3, 2, 's', 4), (4, 3, 's', 4), (5, 4, 's', 4)]},
            {'row_num': 2, 'cells': [(1, '练习1', 'inlineStr', 0), (2, '客户说："别废话，直接说多少钱"', 'inlineStr', 0), (3, '', 'inlineStr', 0), (4, '', 'inlineStr', 0), (5, '', 'inlineStr', 0)]},
            {'row_num': 3, 'cells': [(1, '练习2', 'inlineStr', 0), (2, '客户犹豫中："你们价格比别家贵啊"', 'inlineStr', 0), (3, '', 'inlineStr', 0), (4, '', 'inlineStr', 0), (5, '', 'inlineStr', 0)]},
            {'row_num': 4, 'cells': [(1, '练习3', 'inlineStr', 0), (2, '客户表示："我需要回去商量一下"', 'inlineStr', 0), (3, '', 'inlineStr', 0), (4, '', 'inlineStr', 0), (5, '', 'inlineStr', 0)]},
        ],
        'freeze_row': 1,
        'col_widths': [10, 35, 35, 35, 30]
    }

    return [config1, config2, config3]

def build_07_comprehensive():
    """07-综合判断工具表.xlsx"""
    config1 = {
        'name': '四维度框架',
        'strings': ['维度名称', '具体问题', '检查要点', '自我状态', '我现在的情绪处理模式是什么？', '我的身体信号是什么？', '我想要什么结果？', '人性需求', '客户此刻最想要的是什么？', '有哪些需求信号？', '场景节点', '现在处于哪个情绪节点？', '这个节点需要收还是放？', '节奏尺度', '节奏需要加快还是放慢？', '尺度需要收紧还是放宽？'],
        'rows': [
            {'row_num': 1, 'cells': [(1, 0, 's', 4), (2, 1, 's', 4), (3, 2, 's', 4)]},
            {'row_num': 2, 'cells': [(1, 3, 'inlineStr', 0), (2, 4, 'inlineStr', 0), (3, '', 'inlineStr', 0)]},
            {'row_num': 3, 'cells': [(1, 3, 'inlineStr', 0), (2, 5, 'inlineStr', 0), (3, '', 'inlineStr', 0)]},
            {'row_num': 4, 'cells': [(1, 3, 'inlineStr', 0), (2, 6, 'inlineStr', 0), (3, '', 'inlineStr', 0)]},
            {'row_num': 5, 'cells': [(1, 7, 'inlineStr', 0), (2, 8, 'inlineStr', 0), (3, '', 'inlineStr', 0)]},
            {'row_num': 6, 'cells': [(1, 7, 'inlineStr', 0), (2, 9, 'inlineStr', 0), (3, '', 'inlineStr', 0)]},
            {'row_num': 7, 'cells': [(1, 10, 'inlineStr', 0), (2, 11, 'inlineStr', 0), (3, '', 'inlineStr', 0)]},
            {'row_num': 8, 'cells': [(1, 10, 'inlineStr', 0), (2, 12, 'inlineStr', 0), (3, '', 'inlineStr', 0)]},
            {'row_num': 9, 'cells': [(1, 13, 'inlineStr', 0), (2, 14, 'inlineStr', 0), (3, '', 'inlineStr', 0)]},
            {'row_num': 10, 'cells': [(1, 13, 'inlineStr', 0), (2, 15, 'inlineStr', 0), (3, '', 'inlineStr', 0)]},
        ],
        'freeze_row': 1,
        'col_widths': [18, 40, 35]
    }

    config2 = {
        'name': '实战检视',
        'strings': ['日期', '客户场景', '自我状态', '人性需求', '场景节点', '节奏判断', '尺度判断', '最终回应', '事后复盘'],
        'rows': [
            {'row_num': 1, 'cells': [(1, 0, 's', 4), (2, 1, 's', 4), (3, 2, 's', 4), (4, 3, 's', 4), (5, 4, 's', 4), (6, 5, 's', 4), (7, 6, 's', 4), (8, 7, 's', 4), (9, 8, 's', 4)]},
            {'row_num': 2, 'cells': [(1, '', 'inlineStr', 0), (2, '', 'inlineStr', 0), (3, '', 'inlineStr', 0), (4, '', 'inlineStr', 0), (5, '', 'inlineStr', 0), (6, '', 'inlineStr', 0), (7, '', 'inlineStr', 0), (8, '', 'inlineStr', 0), (9, '', 'inlineStr', 0)]},
            {'row_num': 3, 'cells': [(1, '', 'inlineStr', 0), (2, '', 'inlineStr', 0), (3, '', 'inlineStr', 0), (4, '', 'inlineStr', 0), (5, '', 'inlineStr', 0), (6, '', 'inlineStr', 0), (7, '', 'inlineStr', 0), (8, '', 'inlineStr', 0), (9, '', 'inlineStr', 0)]},
            {'row_num': 4, 'cells': [(1, '', 'inlineStr', 0), (2, '', 'inlineStr', 0), (3, '', 'inlineStr', 0), (4, '', 'inlineStr', 0), (5, '', 'inlineStr', 0), (6, '', 'inlineStr', 0), (7, '', 'inlineStr', 0), (8, '', 'inlineStr', 0), (9, '', 'inlineStr', 0)]},
        ],
        'freeze_row': 1,
        'col_widths': [12, 25, 18, 15, 12, 12, 12, 30, 25]
    }

    config3 = {
        'name': '案例积累',
        'strings': ['编号', '日期', '客户类型', '核心场景', '判断过程', '应用工具', '最终结果', '经验教训'],
        'rows': [
            {'row_num': 1, 'cells': [(1, 0, 's', 4), (2, 1, 's', 4), (3, 2, 's', 4), (4, 3, 's', 4), (5, 4, 's', 4), (6, 5, 's', 4), (7, 6, 's', 4), (8, 7, 's', 4)]},
            {'row_num': 2, 'cells': [(1, 1, 'n', 0), (2, '', 'inlineStr', 0), (3, '', 'inlineStr', 0), (4, '', 'inlineStr', 0), (5, '', 'inlineStr', 0), (6, '', 'inlineStr', 0), (7, '', 'inlineStr', 0), (8, '', 'inlineStr', 0)]},
            {'row_num': 3, 'cells': [(1, 2, 'n', 0), (2, '', 'inlineStr', 0), (3, '', 'inlineStr', 0), (4, '', 'inlineStr', 0), (5, '', 'inlineStr', 0), (6, '', 'inlineStr', 0), (7, '', 'inlineStr', 0), (8, '', 'inlineStr', 0)]},
            {'row_num': 4, 'cells': [(1, 3, 'n', 0), (2, '', 'inlineStr', 0), (3, '', 'inlineStr', 0), (4, '', 'inlineStr', 0), (5, '', 'inlineStr', 0), (6, '', 'inlineStr', 0), (7, '', 'inlineStr', 0), (8, '', 'inlineStr', 0)]},
        ],
        'freeze_row': 1,
        'col_widths': [8, 12, 15, 30, 35, 18, 25, 30]
    }

    return [config1, config2, config3]

def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    work_dir = "/tmp/xlsx_work"

    builders = [
        (build_01_teaching_progress, "01-教学进度与检查表.xlsx"),
        (build_02_student_registration, "02-学员信息登记表.xlsx"),
        (build_03_action_plan, "03-课后实践行动计划表.xlsx"),
        (build_04_self_check, "04-自我状态自检工具.xlsx"),
        (build_05_human_needs, "05-人性需求识别练习表.xlsx"),
        (build_06_scene_scale, "06-场景尺度判断练习表.xlsx"),
        (build_07_comprehensive, "07-综合判断工具表.xlsx"),
    ]

    for builder, filename in builders:
        print(f"Building {filename}...")
        shutil.rmtree(work_dir, ignore_errors=True)
        os.makedirs(work_dir, exist_ok=True)

        sheets_config = builder()
        files = create_multisheet_workbook(sheets_config)
        write_workbook(work_dir, files)

        output_path = os.path.join(OUTPUT_DIR, filename)
        pack_xlsx(work_dir, output_path)
        print(f"Created: {output_path}")

    print("\nAll Excel files created successfully!")

if __name__ == "__main__":
    main()
