"""
Reusable xlsx builder helpers.
"""
import shutil
import subprocess
from pathlib import Path

TEMPLATE = Path("C:/Users/Administrator/.claude/skills/Excel表格处理/templates/minimal_xlsx")

STYLES = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <numFmts count="8">
    <numFmt numFmtId="164" formatCode="&quot;¥&quot;#,##0;(&quot;¥&quot;#,##0);&quot;-&quot;"/>
    <numFmt numFmtId="165" formatCode="0.0%"/>
    <numFmt numFmtId="166" formatCode="0.0&quot;分&quot;"/>
    <numFmt numFmtId="167" formatCode="#,##0"/>
    <numFmt numFmtId="168" formatCode="m/d/yyyy"/>
    <numFmt numFmtId="169" formatCode="yyyy&quot;年&quot;m&quot;月&quot;d&quot;日&quot;"/>
    <numFmt numFmtId="170" formatCode="0.00"/>
    <numFmt numFmtId="171" formatCode="0.0"/>
  </numFmts>
  <fonts count="10">
    <font><sz val="11"/><name val="Microsoft YaHei"/></font>
    <font><sz val="11"/><name val="Microsoft YaHei"/><color rgb="000000FF"/></font>
    <font><sz val="11"/><name val="Microsoft YaHei"/><color rgb="00000000"/></font>
    <font><sz val="11"/><name val="Microsoft YaHei"/><color rgb="00008000"/></font>
    <font><sz val="13"/><name val="Microsoft YaHei"/><b/></font>
    <font><sz val="14"/><name val="Microsoft YaHei"/><b/><color rgb="FFFFFFFF"/></font>
    <font><sz val="11"/><name val="Microsoft YaHei"/><i/><color rgb="FF666666"/></font>
    <font><sz val="11"/><name val="Microsoft YaHei"/><color rgb="FFD32F2F"/></font>
    <font><sz val="11"/><name val="Microsoft YaHei"/><color rgb="0000FF"/></font>
    <font><sz val="11"/><name val="Microsoft YaHei"/><b/><color rgb="FFFFFFFF"/></font>
  </fonts>
  <fills count="7">
    <fill><patternFill patternType="none"/></fill>
    <fill><patternFill patternType="gray125"/></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="FF1F4E78"/><bgColor indexed="64"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="FFE7E6E6"/><bgColor indexed="64"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="FFFFF2CC"/><bgColor indexed="64"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="FFD9E1F2"/><bgColor indexed="64"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="FFE2EFDA"/><bgColor indexed="64"/></patternFill></fill>
  </fills>
  <borders count="2">
    <border><left/><right/><top/><bottom/><diagonal/></border>
    <border><left style="thin"><color rgb="FFCCCCCC"/></left><right style="thin"><color rgb="FFCCCCCC"/></right><top style="thin"><color rgb="FFCCCCCC"/></top><bottom style="thin"><color rgb="FFCCCCCC"/></bottom></border>
  </borders>
  <cellStyleXfs count="1">
    <xf numFmtId="0" fontId="0" fillId="0" borderId="0"/>
  </cellStyleXfs>
  <cellXfs count="22">
    <xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0" applyAlignment="1"><alignment vertical="center" wrapText="1"/></xf>
    <xf numFmtId="0" fontId="1" fillId="0" borderId="1" xfId="0" applyFont="1" applyBorder="1" applyAlignment="1"><alignment vertical="center" wrapText="1"/></xf>
    <xf numFmtId="0" fontId="2" fillId="0" borderId="1" xfId="0" applyFont="1" applyBorder="1" applyAlignment="1"><alignment vertical="center" wrapText="1"/></xf>
    <xf numFmtId="0" fontId="3" fillId="0" borderId="0" xfId="0" applyFont="1" applyAlignment="1"><alignment vertical="center" wrapText="1"/></xf>
    <xf numFmtId="0" fontId="4" fillId="0" borderId="1" xfId="0" applyFont="1" applyBorder="1" applyAlignment="1"><alignment vertical="center" wrapText="1"/></xf>
    <xf numFmtId="0" fontId="5" fillId="2" borderId="1" xfId="0" applyFont="1" applyBorder="1" applyFill="1" applyAlignment="1"><alignment horizontal="center" vertical="center"/></xf>
    <xf numFmtId="0" fontId="6" fillId="4" borderId="1" xfId="0" applyFont="1" applyBorder="1" applyFill="1" applyAlignment="1"><alignment vertical="center" wrapText="1"/></xf>
    <xf numFmtId="0" fontId="0" fillId="3" borderId="1" xfId="0" applyFill="1" applyBorder="1" applyAlignment="1"><alignment vertical="center" wrapText="1"/></xf>
    <xf numFmtId="0" fontId="8" fillId="4" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1" applyAlignment="1"><alignment vertical="center" wrapText="1"/></xf>
    <xf numFmtId="167" fontId="1" fillId="0" borderId="1" xfId="0" applyFont="1" applyNumberFormat="1" applyBorder="1" applyAlignment="1"><alignment vertical="center" wrapText="1"/></xf>
    <xf numFmtId="0" fontId="4" fillId="5" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1" applyAlignment="1"><alignment horizontal="center" vertical="center"/></xf>
    <xf numFmtId="0" fontId="0" fillId="4" borderId="1" xfId="0" applyFill="1" applyBorder="1" applyAlignment="1"><alignment horizontal="center" vertical="center" wrapText="1"/></xf>
    <xf numFmtId="168" fontId="1" fillId="0" borderId="1" xfId="0" applyFont="1" applyNumberFormat="1" applyBorder="1" applyAlignment="1"><alignment horizontal="center" vertical="center"/></xf>
    <xf numFmtId="169" fontId="1" fillId="0" borderId="1" xfId="0" applyFont="1" applyNumberFormat="1" applyBorder="1" applyAlignment="1"><alignment horizontal="center" vertical="center"/></xf>
    <xf numFmtId="0" fontId="7" fillId="0" borderId="1" xfId="0" applyFont="1" applyBorder="1" applyAlignment="1"><alignment vertical="center" wrapText="1"/></xf>
    <xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0" applyAlignment="1"><alignment vertical="top" wrapText="1"/></xf>
    <xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0" applyAlignment="1"><alignment horizontal="center" vertical="center"/></xf>
    <xf numFmtId="0" fontId="4" fillId="3" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1" applyAlignment="1"><alignment horizontal="center" vertical="center"/></xf>
    <xf numFmtId="165" fontId="1" fillId="0" borderId="1" xfId="0" applyFont="1" applyNumberFormat="1" applyBorder="1" applyAlignment="1"><alignment horizontal="center" vertical="center"/></xf>
    <xf numFmtId="165" fontId="2" fillId="0" borderId="1" xfId="0" applyFont="1" applyNumberFormat="1" applyBorder="1" applyAlignment="1"><alignment horizontal="center" vertical="center"/></xf>
    <xf numFmtId="171" fontId="1" fillId="0" borderId="1" xfId="0" applyFont="1" applyNumberFormat="1" applyBorder="1" applyAlignment="1"><alignment horizontal="center" vertical="center"/></xf>
    <xf numFmtId="171" fontId="2" fillId="6" borderId="1" xfId="0" applyFont="1" applyNumberFormat="1" applyFill="1" applyBorder="1" applyAlignment="1"><alignment horizontal="center" vertical="center"/></xf>
  </cellXfs>
  <cellStyles count="1">
    <cellStyle name="Normal" xfId="0" builtinId="0"/>
  </cellStyles>
</styleSheet>'''


def esc(s):
    return str(s).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")


def cell(ref, val, style="0", ctype=None):
    t_attr = f' t="{ctype}"' if ctype else ''
    if isinstance(val, tuple) and val[0] == 'f':
        f_escaped = esc(val[1])
        return f'<c r="{ref}"{t_attr} s="{style}"><f>{f_escaped}</f><v></v></c>'
    elif isinstance(val, (int, float)) and not isinstance(val, bool):
        return f'<c r="{ref}" s="{style}"><v>{val}</v></c>'
    elif isinstance(val, str):
        if val == "":
            return f'<c r="{ref}" s="{style}"/>'
        return f'<c r="{ref}" t="inlineStr" s="{style}"><is><t xml:space="preserve">{esc(val)}</t></is></c>'
    return f'<c r="{ref}" s="{style}"><v></v></c>'


def empty(ref, style="0"):
    return f'<c r="{ref}" s="{style}"/>'


def row(rnum, cells, height=None):
    ht = f' ht="{height}" customHeight="1"' if height else ''
    return f'<row r="{rnum}"{ht}>{"".join(cells)}</row>\n'


def make_sharedstrings(strings):
    s = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n'
    s += f'<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="{len(strings)}" uniqueCount="{len(strings)}">\n'
    for v in strings:
        s += f'<si><t xml:space="preserve">{esc(v)}</t></si>\n'
    s += '</sst>\n'
    return s


def make_sheet(content_cells, cols, freeze=None, col_widths=None):
    s = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n'
    s += '<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">\n'
    sv = '<sheetView workbookViewId="0"'
    if freeze:
        sv += f'><pane ySplit="{freeze}" topLeftCell="A{freeze+1}" activePane="bottomLeft" state="frozen"/></sheetView>'
    else:
        sv += '/>'
    s += f'<sheetViews>{sv}</sheetViews>\n'
    s += '<sheetFormatPr defaultRowHeight="18" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>\n'
    if col_widths:
        s += '<cols>\n'
        for c in col_widths:
            s += f'<col min="{c[0]}" max="{c[1]}" width="{c[2]}" customWidth="1"/>\n'
        s += '</cols>\n'
    s += f'<sheetData>\n{"".join(content_cells)}\n</sheetData>\n'
    s += '<pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>\n'
    s += '</worksheet>'
    return s


def make_workbook(sheets):
    """sheets = list of (sheet_name, sheetId, rId)"""
    s = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n'
    s += '<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">\n'
    s += '<fileVersion appName="xl" lastEdited="7" lowestEdited="7"/>\n'
    s += '<workbookPr defaultThemeVersion="166925"/>\n'
    s += '<bookViews><workbookView xWindow="0" yWindow="0" windowWidth="20140" windowHeight="10960"/></bookViews>\n'
    s += '<sheets>\n'
    for name, sid, rid in sheets:
        s += f'<sheet name="{esc(name)}" sheetId="{sid}" r:id="{rid}"/>\n'
    s += '</sheets>\n'
    s += '<calcPr calcId="191029"/>\n'
    s += '</workbook>'
    return s


def make_rels(n_sheets):
    s = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n'
    s += '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">\n'
    for i in range(1, n_sheets + 1):
        s += f'<Relationship Id="rId{i}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet{i}.xml"/>\n'
    s += f'<Relationship Id="rId{n_sheets+1}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>\n'
    s += f'<Relationship Id="rId{n_sheets+2}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml"/>\n'
    s += '</Relationships>'
    return s


def make_content_types(n_sheets):
    s = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n'
    s += '<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">\n'
    s += '<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>\n'
    s += '<Default Extension="xml" ContentType="application/xml"/>\n'
    s += '<Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>\n'
    for i in range(1, n_sheets + 1):
        s += f'<Override PartName="/xl/worksheets/sheet{i}.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>\n'
    s += '<Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>\n'
    s += '<Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/>\n'
    s += '</Types>'
    return s


def pack_work(work_dir, out_path, n_sheets):
    """Write all files and pack the xlsx"""
    import subprocess
    out_path = Path(out_path)
    out_path.parent.mkdir(parents=True, exist_ok=True)
    result = subprocess.run(
        ["python3", "C:/Users/Administrator/.claude/skills/Excel表格处理/scripts/xlsx_pack.py", str(work_dir), str(out_path)],
        capture_output=True, text=True
    )
    return result


def setup_work(work_dir):
    work_dir = Path(work_dir)
    if work_dir.exists():
        shutil.rmtree(work_dir)
    shutil.copytree(TEMPLATE, work_dir)
    with open(work_dir / "xl/styles.xml", "w", encoding="utf-8") as f:
        f.write(STYLES)
    return work_dir
