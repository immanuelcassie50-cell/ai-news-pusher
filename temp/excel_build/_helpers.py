# -*- coding: utf-8 -*-
"""Shared helpers for building xlsx files."""
import shutil
import subprocess
from pathlib import Path

TEMPLATE = Path(r"C:/Users/Administrator/.claude/skills/Excel表格处理/templates/minimal_xlsx")

LQ, RQ = '“', '”'

def esc(s):
    return (str(s)
            .replace('&', '&amp;')
            .replace('<', '&lt;')
            .replace('>', '&gt;')
            .replace('"', '&quot;'))

def cell_str(col, n, style, text):
    return f'<c r="{col}{n}" s="{style}" t="inlineStr"><is><t>{esc(text)}</t></is></c>'

def cell_empty(col, n, style):
    return f'<c r="{col}{n}" s="{style}"/>'

def cell_num(col, n, style, val):
    return f'<c r="{col}{n}" s="{style}"><v>{val}</v></c>'

def cell_formula(col, n, style, formula):
    f_esc = formula.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;')
    return f'<c r="{col}{n}" s="{style}"><f>{f_esc}</f><v></v></c>'

def make_row(n, cells, height=None):
    h_attr = f' ht="{height}" customHeight="1"' if height else ''
    parts = []
    for col, style, content in cells:
        if content is None:
            parts.append(cell_empty(col, n, style))
        elif isinstance(content, tuple) and content[0] == 'f':
            parts.append(cell_formula(col, n, style, content[1]))
        elif isinstance(content, tuple) and content[0] == 'n':
            parts.append(cell_num(col, n, style, content[1]))
        else:
            parts.append(cell_str(col, n, style, content))
    return f'<row r="{n}"{h_attr}>\n  ' + '\n  '.join(parts) + '\n</row>'

def setup_work(work_dir):
    if work_dir.exists():
        shutil.rmtree(work_dir)
    shutil.copytree(TEMPLATE, work_dir)
    return work_dir

def write_styles(work, extra_xfs_xml=""):
    """Write standard styles with optional additional xf entries."""
    xml = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <numFmts count="6">
    <numFmt numFmtId="164" formatCode="$#,##0;($#,##0);&quot;-&quot;"/>
    <numFmt numFmtId="165" formatCode="0.0%"/>
    <numFmt numFmtId="166" formatCode="0.0"/>
    <numFmt numFmtId="167" formatCode="#,##0"/>
    <numFmt numFmtId="168" formatCode="0"/>
    <numFmt numFmtId="169" formatCode="yyyy-mm-dd"/>
  </numFmts>
  <fonts count="7">
    <font><sz val="11"/><name val="Calibri"/><color rgb="00000000"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="000000FF"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="00000000"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="00008000"/></font>
    <font><sz val="11"/><name val="Calibri"/><b/><color rgb="00000000"/></font>
    <font><sz val="10"/><name val="Calibri"/><color rgb="00595959"/></font>
    <font><sz val="11"/><name val="Calibri"/><b/><color rgb="00FFFFFF"/></font>
  </fonts>
  <fills count="8">
    <fill><patternFill patternType="none"/></fill>
    <fill><patternFill patternType="gray125"/></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="00FFF2CC"/><bgColor indexed="64"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="00D9E1F2"/><bgColor indexed="64"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="00E2EFDA"/><bgColor indexed="64"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="00FCE4D6"/><bgColor indexed="64"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="004472C4"/><bgColor indexed="64"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="00FFE699"/><bgColor indexed="64"/></patternFill></fill>
  </fills>
  <borders count="3">
    <border><left/><right/><top/><bottom/><diagonal/></border>
    <border><left/><right/><top style="thin"><color rgb="00BFBFBF"/></top><bottom style="thin"><color rgb="00BFBFBF"/></bottom><diagonal/></border>
    <border><left/><right/><top style="medium"><color rgb="00000000"/></top><bottom style="medium"><color rgb="00000000"/></bottom><diagonal/></border>
  </borders>
  <cellStyleXfs count="1">
    <xf numFmtId="0" fontId="0" fillId="0" borderId="0"/>
  </cellStyleXfs>
  <cellXfs count="25">
    <xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/>
    <xf numFmtId="0" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1"/>
    <xf numFmtId="0" fontId="2" fillId="0" borderId="0" xfId="0" applyFont="1"/>
    <xf numFmtId="0" fontId="3" fillId="0" borderId="0" xfId="0" applyFont="1"/>
    <xf numFmtId="0" fontId="4" fillId="0" borderId="0" xfId="0" applyFont="1"/>
    <xf numFmtId="0" fontId="4" fillId="2" borderId="0" xfId="0" applyFont="1" applyFill="1"/>
    <xf numFmtId="0" fontId="0" fillId="3" borderId="0" xfId="0" applyFill="1"/>
    <xf numFmtId="0" fontId="0" fillId="4" borderId="0" xfId="0" applyFill="1"/>
    <xf numFmtId="0" fontId="0" fillId="5" borderId="0" xfId="0" applyFill="1"/>
    <xf numFmtId="0" fontId="4" fillId="3" borderId="0" xfId="0" applyFont="1" applyFill="1"/>
    <xf numFmtId="0" fontId="4" fillId="4" borderId="0" xfId="0" applyFont="1" applyFill="1"/>
    <xf numFmtId="0" fontId="4" fillId="5" borderId="0" xfId="0" applyFont="1" applyFill="1"/>
    <xf numFmtId="0" fontId="0" fillId="0" borderId="1" xfId="0" applyBorder="1"/>
    <xf numFmtId="0" fontId="1" fillId="0" borderId="1" xfId="0" applyFont="1" applyBorder="1"/>
    <xf numFmtId="0" fontId="4" fillId="0" borderId="1" xfId="0" applyFont="1" applyBorder="1"/>
    <xf numFmtId="0" fontId="0" fillId="3" borderId="1" xfId="0" applyFill="1" applyBorder="1"/>
    <xf numFmtId="0" fontId="1" fillId="3" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1"/>
    <xf numFmtId="0" fontId="2" fillId="4" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1"/>
    <xf numFmtId="0" fontId="2" fillId="5" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1"/>
    <xf numFmtId="0" fontId="2" fillId="3" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1"/>
    <xf numFmtId="166" fontId="2" fillId="3" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1" applyNumberFormat="1"/>
    <xf numFmtId="166" fontId="4" fillId="3" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1" applyNumberFormat="1"/>
    <xf numFmtId="166" fontId="1" fillId="3" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1" applyNumberFormat="1"/>
    <xf numFmtId="0" fontId="6" fillId="6" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1"/>
    <xf numFmtId="166" fontId="2" fillId="7" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1" applyNumberFormat="1"/>
  </cellXfs>
  <cellStyles count="1">
    <cellStyle name="Normal" xfId="0" builtinId="0"/>
  </cellStyles>
</styleSheet>
'''
    (work / "xl" / "styles.xml").write_text(xml, encoding="utf-8")

def write_empty_sharedstrings(work):
    xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="0" uniqueCount="0"/>
'''
    (work / "xl" / "sharedStrings.xml").write_text(xml, encoding="utf-8")

def write_workbook(work, sheet_names):
    """Write workbook.xml and workbook.xml.rels for given sheet names."""
    n = len(sheet_names)
    sheets_xml = '\n    '.join(
        f'<sheet name="{sn}" sheetId="{i+1}" r:id="rId{i+1}"/>' if i < 3
        else f'<sheet name="{sn}" sheetId="{i+1}" r:id="rId{i+4}"/>'
        for i, sn in enumerate(sheet_names)
    )
    wb_xml = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <fileVersion appName="xl" lastEdited="7" lowestEdited="7"/>
  <workbookPr defaultThemeVersion="166925"/>
  <bookViews>
    <workbookView xWindow="0" yWindow="0" windowWidth="20140" windowHeight="10960"/>
  </bookViews>
  <sheets>
    {sheets_xml}
  </sheets>
  <calcPr calcId="191029"/>
</workbook>
'''
    (work / "xl" / "workbook.xml").write_text(wb_xml, encoding="utf-8")
    rels_lines = ['<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>',
                  '<Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>',
                  '<Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml"/>']
    for i in range(3, n):
        rels_lines.append(f'<Relationship Id="rId{i+1}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet{i+1}.xml"/>')
    rels_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
''' + '\n  '.join(rels_lines) + '\n</Relationships>\n'
    (work / "xl" / "_rels" / "workbook.xml.rels").write_text(rels_xml, encoding="utf-8")

def write_content_types(work, n_sheets):
    overrides = ['<Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>']
    for i in range(n_sheets):
        overrides.append(f'<Override PartName="/xl/worksheets/sheet{i+1}.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>')
    overrides.append('<Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>')
    overrides.append('<Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/>')
    ct_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
''' + '\n  '.join(overrides) + '\n</Types>\n'
    (work / "[Content_Types].xml").write_text(ct_xml, encoding="utf-8")

def write_sheet(work, sheet_num, body, cols_xml="", freeze=None, tab_selected=False):
    """Write a single sheet XML file."""
    sn = f"sheet{sheet_num}.xml"
    sel_attr = ' tabSelected="1"' if tab_selected else ''
    if freeze:
        sv_xml = f'''<sheetView{sel_attr} workbookViewId="0">
      <pane {freeze}/>
    </sheetView>'''
    else:
        sv_xml = f'<sheetView{sel_attr} workbookViewId="0"/>'
    full = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    {sv_xml}
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  {cols_xml}
  <sheetData>
  {body}
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>
'''
    (work / "xl" / "worksheets" / sn).write_text(full, encoding="utf-8")

def pack(work, out_file):
    res = subprocess.run(
        ["python", r"C:/Users/Administrator/.claude/skills/Excel表格处理/scripts/xlsx_pack.py",
         str(work), str(out_file)],
        capture_output=True, text=True
    )
    return res
