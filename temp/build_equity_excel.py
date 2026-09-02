"""
Build 4 equity course Excel files with red-gray color scheme.
Color scheme:
  Red:   00FF0000 (headers/accents)
  Gray:  00D3D3D3 (alternating rows)
  Dark:  00808080 (secondary text)
"""

import subprocess, os, shutil

SKILL_DIR = 'C:/Users/Administrator/.claude/skills/Excel表格处理'
TEMPLATE = SKILL_DIR + '/templates/minimal_xlsx'
OUT_DIR = 'D:/新课开发/股权/01-股权顶层设计：股权结构、控制权与治理机制一体化/工具表单/'
os.makedirs(OUT_DIR, exist_ok=True)

# Color ARGB values
RED     = '00FF0000'
GRAY    = '00D3D3D3'
DKGRAY  = '00808080'
WHITE   = '00FFFFFF'
BLACK   = '00000000'
BLUE    = '000000FF'

def copy_template(work_dir):
    shutil.rmtree(work_dir, ignore_errors=True)
    shutil.copytree(TEMPLATE, work_dir)

def pack(work_dir, output_path):
    subprocess.run(['python3', SKILL_DIR + '/scripts/xlsx_pack.py', work_dir, output_path], check=True)

def build_styles(work_dir):
    """Build styles.xml with red-gray color scheme."""
    styles = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <fonts>
    <font><sz val="11"/><name val="Calibri"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="000000FF"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="00000000"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="00008000"/></font>
    <font><b/><sz val="11"/><name val="Calibri"/><color rgb="00FFFFFF"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="00808080"/></font>
    <font><b/><sz val="12"/><name val="Calibri"/><color rgb="00FFFFFF"/></font>
  </fonts>
  <fills>
    <fill><patternFill patternType="none"/></fill>
    <fill><patternFill patternType="gray125"/></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="00FF0000"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="00D3D3D3"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="00808080"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="00FFFFFF"/></patternFill></fill>
  </fills>
  <borders>
    <border><left/><right/><top/><bottom/><diagonal/></border>
    <border><left style="thin"><color rgb="00000000"/></left><right style="thin"><color rgb="00000000"/></right><top style="thin"><color rgb="00000000"/></top><bottom style="thin"><color rgb="00000000"/></bottom></border>
    <border><left style="medium"><color rgb="00000000"/></left><right style="medium"><color rgb="00000000"/></right><top style="medium"><color rgb="00000000"/></top><bottom style="medium"><color rgb="00000000"/></bottom></border>
  </borders>
  <cellStyleXfs>
    <xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/>
  </cellStyleXfs>
  <cellXfs>
    <xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0" applyFont="1" applyAlignment="1"><alignment horizontal="left" vertical="center"/></xf>
    <xf numFmtId="0" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1" applyAlignment="1"><alignment horizontal="center" vertical="center"/></xf>
    <xf numFmtId="0" fontId="2" fillId="0" borderId="0" xfId="0" applyFont="1" applyAlignment="1"><alignment horizontal="left" vertical="center"/></xf>
    <xf numFmtId="0" fontId="3" fillId="0" borderId="0" xfId="0" applyFont="1" applyAlignment="1"><alignment horizontal="center" vertical="center"/></xf>
    <xf numFmtId="0" fontId="4" fillId="2" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1" applyAlignment="1"><alignment horizontal="center" vertical="center" wrapText="1"/></xf>
    <xf numFmtId="164" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1" applyAlignment="1"><alignment horizontal="right" vertical="center"/></xf>
    <xf numFmtId="164" fontId="2" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1" applyAlignment="1"><alignment horizontal="right" vertical="center"/></xf>
    <xf numFmtId="165" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1" applyAlignment="1"><alignment horizontal="center" vertical="center"/></xf>
    <xf numFmtId="165" fontId="2" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1" applyAlignment="1"><alignment horizontal="center" vertical="center"/></xf>
    <xf numFmtId="167" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1" applyAlignment="1"><alignment horizontal="center" vertical="center"/></xf>
    <xf numFmtId="167" fontId="2" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1" applyAlignment="1"><alignment horizontal="center" vertical="center"/></xf>
    <xf numFmtId="0" fontId="5" fillId="0" borderId="0" xfId="0" applyFont="1" applyAlignment="1"><alignment horizontal="left" vertical="center"/></xf>
    <xf numFmtId="0" fontId="2" fillId="3" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1" applyAlignment="1"><alignment horizontal="center" vertical="center" wrapText="1"/></xf>
    <xf numFmtId="0" fontId="2" fillId="5" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1" applyAlignment="1"><alignment horizontal="center" vertical="center" wrapText="1"/></xf>
    <xf numFmtId="0" fontId="4" fillId="4" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1" applyAlignment="1"><alignment horizontal="center" vertical="center"/></xf>
    <xf numFmtId="0" fontId="1" fillId="5" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1" applyAlignment="1"><alignment horizontal="center" vertical="center"/></xf>
    <xf numFmtId="0" fontId="6" fillId="2" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1" applyAlignment="1"><alignment horizontal="center" vertical="center"/></xf>
  </cellXfs>
  <numFmts>
    <numFmt numFmtId="164" formatCode="$#,##0;($#,##0);'-'"/>
    <numFmt numFmtId="165" formatCode="0.0%"/>
    <numFmt numFmtId="166" formatCode="0.0x"/>
    <numFmt numFmtId="167" formatCode="#,##0"/>
  </numFmts>
</styleSheet>'''
    with open(work_dir + '/xl/styles.xml', 'w', encoding='utf-8') as f:
        f.write(styles)


def build_shared_strings(work_dir, strings):
    """Build sharedStrings.xml from list of strings."""
    si_entries = ''
    for s in strings:
        escaped = s.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;')
        si_entries += '<si><t>' + escaped + '</t></si>'
    with open(work_dir + '/xl/sharedStrings.xml', 'w', encoding='utf-8') as f:
        f.write('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n')
        f.write('<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="' + str(len(strings)) + '" uniqueCount="' + str(len(strings)) + '">\n')
        f.write(si_entries)
        f.write('\n</sst>')


# ============================================================
# FILE 1: F3_控制权保护工具对比表_空表.xlsx
# ============================================================
print("Building File 1: F3_控制权保护工具对比表_空表.xlsx")
work_dir = '/tmp/xlsx_work_f3b'
copy_template(work_dir)

strings_f3b = [
    '控制权保护工具对比分析', '工具名称', '适用阶段', '法律复杂度',
    '税务影响', '可撤销性', '对融资影响', '实施成本', '综合评分',
    '投票权委托', '一致行动协议', '有限合伙企业', 'AB股(双层股权)', '董事会控制',
    '推荐方案选择器', '请填写以下信息', '企业阶段', '创始人持股比例(%)',
    '是否需要引入外部董事', '推荐工具', '推荐理由',
    '预种子轮/种子轮', 'A轮', 'B轮及以上', '是', '否',
    '各工具详解', '工具', '简介', '优点', '缺点', '适用场景', '实施要点',
    '投票权委托', '一致行动协议', '有限合伙企业', 'AB股(双层股权)', '董事会控制',
    '将投票权委托给创始人或持股平台', '多个股东约定共同行使投票权',
    '通过有限合伙持有股权，GP执行事务',
    '发行两类股票，A股一股一票，B股多重投票权',
    '通过董事会席位安排控制决策权',
    '可灵活调整，但对方违约风险较高', '简单直接，签订协议即可',
    '税负最优，结构稳定', '投票权放大效果明显', '最简单，无需法律程序',
    '创始人需保持较强信任关系', '需各方高度信任，立场一致',
    '设立需一定时间，GP需承担无限责任', '门槛高，需满足监管要求', '融资稀释后可能失效',
    '创始人间接持股公司', '早期创始团队联合融资时', '所有阶段，尤其融资密集期',
    'B轮后，估值已形成一定规模', '任何阶段，尤其早期',
    '签订书面委托协议，明确期限和条件',
    '明确约定一致行动的事项和期限',
    '选择合适的GP人选，合理分配LP权益',
    '做好信息披露，保护投资者知情权', '确保创始人提名权写入章程',
]
build_shared_strings(work_dir, strings_f3b)
build_styles(work_dir)

with open(work_dir + '/xl/workbook.xml', 'w', encoding='utf-8') as f:
    f.write('''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheets>
    <sheet name="工具对比分析" sheetId="1" r:id="rId1"/>
    <sheet name="推荐方案选择器" sheetId="2" r:id="rId4"/>
    <sheet name="各工具详解" sheetId="3" r:id="rId5"/>
  </sheets>
</workbook>''')

with open(work_dir + '/xl/_rels/workbook.xml.rels', 'w', encoding='utf-8') as f:
    f.write('''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
  <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml"/>
  <Relationship Id="rId4" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet2.xml"/>
  <Relationship Id="rId5" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet3.xml"/>
</Relationships>''')

with open(work_dir + '/[Content_Types].xml', 'w', encoding='utf-8') as f:
    f.write('''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
  <Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet2.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet3.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>
  <Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/>
</Types>''')

# --- Sheet 1 ---
rows_s1 = []
rows_s1.append('<row r="1"><c r="A1" t="s" s="4"><v>0</v></c></row>')
rows_s1.append('<row r="2">' +
    '<c r="A2" t="s" s="4"><v>1</v></c>' +
    '<c r="B2" t="s" s="4"><v>2</v></c>' +
    '<c r="C2" t="s" s="4"><v>3</v></c>' +
    '<c r="D2" t="s" s="4"><v>4</v></c>' +
    '<c r="E2" t="s" s="4"><v>5</v></c>' +
    '<c r="F2" t="s" s="4"><v>6</v></c>' +
    '<c r="G2" t="s" s="4"><v>7</v></c>' +
    '<c r="H2" t="s" s="4"><v>8</v></c>' +
    '</row>')
tool_indices = [9, 10, 11, 12, 13]
for i, ti in enumerate(tool_indices):
    rn = i + 3
    alt = '12' if i % 2 == 0 else '13'
    rows_s1.append(f'<row r="{rn}">' +
        f'<c r="A{rn}" t="s" s="4"><v>{ti}</v></c>' +
        f'<c r="B{rn}" t="s" s="{alt}"></c>' +
        f'<c r="C{rn}" t="s" s="{alt}"></c>' +
        f'<c r="D{rn}" t="s" s="{alt}"></c>' +
        f'<c r="E{rn}" t="s" s="{alt}"></c>' +
        f'<c r="F{rn}" t="s" s="{alt}"></c>' +
        f'<c r="G{rn}" t="s" s="{alt}"></c>' +
        f'<c r="H{rn}" s="{alt}"></c>' +
        f'</row>')
sheet1_cols = '<cols><col min="1" max="1" width="18" customWidth="1"/><col min="2" max="2" width="14" customWidth="1"/><col min="3" max="3" width="12" customWidth="1"/><col min="4" max="4" width="10" customWidth="1"/><col min="5" max="5" width="10" customWidth="1"/><col min="6" max="6" width="12" customWidth="1"/><col min="7" max="7" width="10" customWidth="1"/><col min="8" max="8" width="10" customWidth="1"/></cols>'
with open(work_dir + '/xl/worksheets/sheet1.xml', 'w', encoding='utf-8') as f:
    f.write(f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"><pane ySplit="2" topLeftCell="A3" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  {sheet1_cols}
  <sheetData>
{''.join(rows_s1)}
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>''')

# --- Sheet 2 ---
s2_rows = []
s2_rows.append('<row r="1"><c r="A1" t="s" s="4"><v>14</v></c></row>')
s2_rows.append('<row r="2"><c r="A2" t="s" s="14"><v>15</v></c></row>')
s2_rows.append('<row r="3"><c r="A3" t="s" s="11"><v>16</v></c><c r="B3" t="s" s="15"></c></row>')
s2_rows.append('<row r="4"><c r="A4" t="s" s="11"><v>17</v></c><c r="B4" s="15"></c></row>')
s2_rows.append('<row r="5"><c r="A5" t="s" s="11"><v>18</v></c><c r="B5" t="s" s="15"></c></row>')
s2_rows.append('<row r="6"></row>')
s2_rows.append('<row r="7"><c r="A7" t="s" s="16"><v>19</v></c><c r="B7" s="16"><f>IF(B4&gt;50,"有限合伙企业",IF(B4&gt;34,"一致行动协议","AB股(双层股权)"))</f><v></v></c></row>')
s2_rows.append('<row r="8"><c r="A8" t="s" s="16"><v>20</v></c><c r="B8" s="16"><f>IF(B4&gt;50,"创始人持股&gt;50%,适合用有限合伙企业保持控制权",IF(B4&gt;34,"创始人持股34-50%,一致行动协议可集中投票权","创始人持股&lt;34%,建议AB股保住控制权"))</f><v></v></c></row>')

dv = '''  <dataValidations>
    <dataValidation type="list" sqref="B3" formula1="&quot;预种子轮/种子轮,A轮,B轮及以上&quot;" showInputMessage="1" prompt="选择企业阶段" promptTitle="企业阶段"/>
    <dataValidation type="list" sqref="B5" formula1="&quot;是,否&quot;" showInputMessage="1" prompt="是否需要引入外部董事" promptTitle="外部董事"/>
  </dataValidations>'''
with open(work_dir + '/xl/worksheets/sheet2.xml', 'w', encoding='utf-8') as f:
    f.write(f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"/></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols><col min="1" max="1" width="24" customWidth="1"/><col min="2" max="2" width="42" customWidth="1"/></cols>
  <sheetData>
{''.join(s2_rows)}
  </sheetData>
  {dv}
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>''')

# --- Sheet 3 ---
s3_rows = []
s3_rows.append('<row r="1"><c r="A1" t="s" s="4"><v>26</v></c></row>')
s3_rows.append('<row r="2">' +
    '<c r="A2" t="s" s="4"><v>27</v></c>' +
    '<c r="B2" t="s" s="4"><v>28</v></c>' +
    '<c r="C2" t="s" s="4"><v>29</v></c>' +
    '<c r="D2" t="s" s="4"><v>30</v></c>' +
    '<c r="E2" t="s" s="4"><v>31</v></c>' +
    '<c r="F2" t="s" s="4"><v>32</v></c>' +
    '</row>')
tool_details = [
    (33, 38, 39, 40, 41, 42),
    (34, 43, 44, 45, 46, 47),
    (35, 48, 49, 50, 51, 52),
    (36, 53, 54, 55, 56, 57),
    (37, 58, 59, 60, 61, 62),
]
for i, (ni, di, pi, ci, si, tii) in enumerate(tool_details):
    rn = i + 3
    alt = '12' if i % 2 == 0 else '13'
    s3_rows.append(f'<row r="{rn}">' +
        f'<c r="A{rn}" t="s" s="4"><v>{ni}</v></c>' +
        f'<c r="B{rn}" t="s" s="{alt}"><v>{di}</v></c>' +
        f'<c r="C{rn}" t="s" s="{alt}"><v>{pi}</v></c>' +
        f'<c r="D{rn}" t="s" s="{alt}"><v>{ci}</v></c>' +
        f'<c r="E{rn}" t="s" s="{alt}"><v>{si}</v></c>' +
        f'<c r="F{rn}" t="s" s="{alt}"><v>{tii}</v></c>' +
        f'</row>')
with open(work_dir + '/xl/worksheets/sheet3.xml', 'w', encoding='utf-8') as f:
    f.write(f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"><pane ySplit="2" topLeftCell="A3" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols><col min="1" max="1" width="16" customWidth="1"/><col min="2" max="2" width="30" customWidth="1"/><col min="3" max="3" width="22" customWidth="1"/><col min="4" max="4" width="22" customWidth="1"/><col min="5" max="5" width="22" customWidth="1"/><col min="6" max="6" width="28" customWidth="1"/></cols>
  <sheetData>
{''.join(s3_rows)}
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>''')

pack(work_dir, OUT_DIR + 'F3_控制权保护工具对比表_空表.xlsx')
print("Created: F3_控制权保护工具对比表_空表.xlsx")


# ============================================================
# FILE 2: F3_控制权保护工具对比表_填好版.xlsx
# ============================================================
print("Building File 2: F3_控制权保护工具对比表_填好版.xlsx")
work_dir = '/tmp/xlsx_work_f3f'
copy_template(work_dir)

strings_f3f = strings_f3b + [
    '所有阶段', '正面', '负面', '中性', '高', 'B轮后', 'A轮前',
]
build_shared_strings(work_dir, strings_f3f)
build_styles(work_dir)

with open(work_dir + '/xl/workbook.xml', 'w', encoding='utf-8') as f:
    f.write('''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheets>
    <sheet name="工具对比分析" sheetId="1" r:id="rId1"/>
    <sheet name="推荐方案选择器" sheetId="2" r:id="rId4"/>
    <sheet name="各工具详解" sheetId="3" r:id="rId5"/>
  </sheets>
</workbook>''')

with open(work_dir + '/xl/_rels/workbook.xml.rels', 'w', encoding='utf-8') as f:
    f.write('''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
  <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml"/>
  <Relationship Id="rId4" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet2.xml"/>
  <Relationship Id="rId5" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet3.xml"/>
</Relationships>''')

with open(work_dir + '/[Content_Types].xml', 'w', encoding='utf-8') as f:
    f.write('''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
  <Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet2.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet3.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>
  <Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/>
</Types>''')

# Sheet 1 with sample data
sample_data = [
    ('投票权委托', '种子轮', '中', '低', '是', '中性', '低', 4),
    ('一致行动协议', 'A轮前', '低', '低', '是', '中性', '低', 3),
    ('有限合伙企业', '所有阶段', '中', '中', '否', '正面', '中', 5),
    ('AB股(双层股权)', 'B轮后', '高', '低', '否', '中性', '高', 4),
    ('董事会控制', '所有阶段', '低', '低', '是', '负面', '低', 3),
]
s1f_rows = []
s1f_rows.append('<row r="1"><c r="A1" t="s" s="4"><v>0</v></c></row>')
s1f_rows.append('<row r="2">' +
    '<c r="A2" t="s" s="4"><v>1</v></c>' +
    '<c r="B2" t="s" s="4"><v>2</v></c>' +
    '<c r="C2" t="s" s="4"><v>3</v></c>' +
    '<c r="D2" t="s" s="4"><v>4</v></c>' +
    '<c r="E2" t="s" s="4"><v>5</v></c>' +
    '<c r="F2" t="s" s="4"><v>6</v></c>' +
    '<c r="G2" t="s" s="4"><v>7</v></c>' +
    '<c r="H2" t="s" s="4"><v>8</v></c>' +
    '</row>')
for i, (tool, stage, legal, tax, revoc, fin, cost, score) in enumerate(sample_data):
    rn = i + 3
    alt = '12' if i % 2 == 0 else '13'
    ti = strings_f3b.index(tool)
    si = strings_f3f.index(stage) if stage in strings_f3f else strings_f3b.index(stage) if stage in strings_f3b else 0
    li = strings_f3f.index(legal) if legal in strings_f3f else 0
    s1f_rows.append(f'<row r="{rn}">' +
        f'<c r="A{rn}" t="s" s="4"><v>{ti}</v></c>' +
        f'<c r="B{rn}" t="s" s="{alt}"><v>{si}</v></c>' +
        f'<c r="C{rn}" t="s" s="{alt}"><v>{li}</v></c>' +
        f'<c r="D{rn}" t="s" s="{alt}"><v>{strings_f3f.index(tax) if tax in strings_f3f else 0}</v></c>' +
        f'<c r="E{rn}" t="s" s="{alt}"><v>{strings_f3f.index(revoc) if revoc in strings_f3f else 0}</v></c>' +
        f'<c r="F{rn}" t="s" s="{alt}"><v>{strings_f3f.index(fin) if fin in strings_f3f else 0}</v></c>' +
        f'<c r="G{rn}" t="s" s="{alt}"><v>{strings_f3f.index(cost) if cost in strings_f3f else 0}</v></c>' +
        f'<c r="H{rn}" s="{alt}"><v>{score}</v></c>' +
        f'</row>')

with open(work_dir + '/xl/worksheets/sheet1.xml', 'w', encoding='utf-8') as f:
    f.write(f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"><pane ySplit="2" topLeftCell="A3" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols><col min="1" max="1" width="18" customWidth="1"/><col min="2" max="2" width="14" customWidth="1"/><col min="3" max="3" width="12" customWidth="1"/><col min="4" max="4" width="10" customWidth="1"/><col min="5" max="5" width="10" customWidth="1"/><col min="6" max="6" width="12" customWidth="1"/><col min="7" max="7" width="10" customWidth="1"/><col min="8" max="8" width="10" customWidth="1"/></cols>
  <sheetData>
{''.join(s1f_rows)}
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>''')

# Sheet 2 with sample inputs
s2f_rows = []
s2f_rows.append('<row r="1"><c r="A1" t="s" s="4"><v>14</v></c></row>')
s2f_rows.append('<row r="2"><c r="A2" t="s" s="14"><v>15</v></c></row>')
s2f_rows.append('<row r="3"><c r="A3" t="s" s="11"><v>16</v></c><c r="B3" t="s" s="1"><v>22</v></c></row>')  # A轮
s2f_rows.append('<row r="4"><c r="A4" t="s" s="11"><v>17</v></c><c r="B4" s="1"><v>38</v></c></row>')  # 38%
s2f_rows.append('<row r="5"><c r="A5" t="s" s="11"><v>18</v></c><c r="B5" t="s" s="1"><v>25</v></c></row>')  # 否
s2f_rows.append('<row r="6"></row>')
s2f_rows.append('<row r="7"><c r="A7" t="s" s="16"><v>19</v></c><c r="B7" s="16"><f>IF(B4&gt;50,&quot;有限合伙企业&quot;,IF(B4&gt;34,&quot;一致行动协议&quot;,&quot;AB股(双层股权)&quot;))</f><v></v></c></row>')
s2f_rows.append('<row r="8"><c r="A8" t="s" s="16"><v>20</v></c><c r="B8" s="16"><f>IF(B4&gt;50,&quot;创始人持股&gt;50%,适合用有限合伙企业保持控制权&quot;,IF(B4&gt;34,&quot;创始人持股34-50%,一致行动协议可集中投票权&quot;,&quot;创始人持股&lt;34%,建议AB股保住控制权&quot;))</f><v></v></c></row>')

with open(work_dir + '/xl/worksheets/sheet2.xml', 'w', encoding='utf-8') as f:
    f.write(f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"/></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols><col min="1" max="1" width="24" customWidth="1"/><col min="2" max="2" width="42" customWidth="1"/></cols>
  <sheetData>
{''.join(s2f_rows)}
  </sheetData>
  <dataValidations>
    <dataValidation type="list" sqref="B3" formula1="&quot;预种子轮/种子轮,A轮,B轮及以上&quot;" showInputMessage="1" prompt="选择企业阶段" promptTitle="企业阶段"/>
    <dataValidation type="list" sqref="B5" formula1="&quot;是,否&quot;" showInputMessage="1" prompt="是否需要引入外部董事" promptTitle="外部董事"/>
  </dataValidations>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>''')

# Sheet 3 (same as blank)
with open(work_dir + '/xl/worksheets/sheet3.xml', 'w', encoding='utf-8') as f:
    f.write(f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"><pane ySplit="2" topLeftCell="A3" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols><col min="1" max="1" width="16" customWidth="1"/><col min="2" max="2" width="30" customWidth="1"/><col min="3" max="3" width="22" customWidth="1"/><col min="4" max="4" width="22" customWidth="1"/><col min="5" max="5" width="22" customWidth="1"/><col min="6" max="6" width="28" customWidth="1"/></cols>
  <sheetData>
{''.join(s3_rows)}
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>''')

pack(work_dir, OUT_DIR + 'F3_控制权保护工具对比表_填好版.xlsx')
print("Created: F3_控制权保护工具对比表_填好版.xlsx")


# ============================================================
# FILE 3: F4_合伙人股权分配评估表_空表.xlsx
# ============================================================
print("Building File 3: F4_合伙人股权分配评估表_空表.xlsx")
work_dir = '/tmp/xlsx_work_f4b'
copy_template(work_dir)

strings_f4 = [
    # Sheet 1
    '合伙人基本信息', '合伙人姓名', '角色/职责', '出资金额(万)', '股权比例(建议)', '备注', '合计', '预留期权池',
    # Sheet 2
    '六要素打分表', '合伙人', '出资额度', '角色重要性', '责任承担', '风险承担', '贡献预期', '动态调整系数', '加权总分', '建议股比',
    '打分说明',
    '10分:出资远超平均', '8分:出资高于平均', '6分:出资等于平均', '4分:出资低于平均', '2分:出资远低于平均',
    '10分:核心不可或缺', '8分:重要岗位', '6分:重要辅助', '4分:一般岗位', '2分:辅助岗位',
    # Sheet 3
    '分配建议', '六要素加权总分', '基础股比', '调整后股比', '调整说明',
    # Sheet 4
    '动态调整机制', '触发条件', '归属期限', '悬崖期', '归属期',
    '触发条件说明',
    '融资完成', '业务里程碑', '年度评估', '提前触发:核心成员离职',
    '12个月', '48个月', '按月均匀归属',
]
build_shared_strings(work_dir, strings_f4)
build_styles(work_dir)

with open(work_dir + '/xl/workbook.xml', 'w', encoding='utf-8') as f:
    f.write('''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheets>
    <sheet name="合伙人基本信息" sheetId="1" r:id="rId1"/>
    <sheet name="六要素打分表" sheetId="2" r:id="rId4"/>
    <sheet name="分配建议" sheetId="3" r:id="rId5"/>
    <sheet name="动态调整机制" sheetId="4" r:id="rId6"/>
  </sheets>
</workbook>''')

with open(work_dir + '/xl/_rels/workbook.xml.rels', 'w', encoding='utf-8') as f:
    f.write('''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
  <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml"/>
  <Relationship Id="rId4" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet2.xml"/>
  <Relationship Id="rId5" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet3.xml"/>
  <Relationship Id="rId6" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet4.xml"/>
</Relationships>''')

with open(work_dir + '/[Content_Types].xml', 'w', encoding='utf-8') as f:
    f.write('''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
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
</Types>''')

# Sheet 1
s4b1 = []
s4b1.append('<row r="1"><c r="A1" t="s" s="4"><v>0</v></c></row>')
s4b1.append('<row r="2">' +
    '<c r="A2" t="s" s="4"><v>1</v></c>' +
    '<c r="B2" t="s" s="4"><v>2</v></c>' +
    '<c r="C2" t="s" s="4"><v>3</v></c>' +
    '<c r="D2" t="s" s="4"><v>4</v></c>' +
    '<c r="E2" t="s" s="4"><v>5</v></c>' +
    '</row>')
for i in range(6):
    rn = i + 3
    alt = '12' if i % 2 == 0 else '13'
    s4b1.append(f'<row r="{rn}"><c r="A{rn}" t="s" s="{alt}"><v>{i+1}</v></c><c r="B{rn}" t="s" s="{alt}"></c><c r="C{rn}" s="{alt}"></c><c r="D{rn}" s="{alt}"></c><c r="E{rn}" t="s" s="{alt}"></c></row>')
s4b1.append('<row r="9"><c r="A9" t="s" s="14"><v>7</v></c><c r="B9" t="s" s="14"></c><c r="C9" s="14"></c><c r="D9" s="14"></c><c r="E9" t="s" s="14"></c></row>')
s4b1.append('<row r="10"><c r="A10" t="s" s="16"><v>6</v></c><c r="B10" t="s" s="16"></c><c r="C10" s="16"><f>SUM(C3:C8)</f><v></v></c><c r="D10" s="16"><f>SUM(D3:D8)+D9</f><v></v></c><c r="E10" t="s" s="16"></c></row>')
with open(work_dir + '/xl/worksheets/sheet1.xml', 'w', encoding='utf-8') as f:
    f.write(f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"><pane ySplit="2" topLeftCell="A3" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols><col min="1" max="1" width="12" customWidth="1"/><col min="2" max="2" width="20" customWidth="1"/><col min="3" max="3" width="16" customWidth="1"/><col min="4" max="4" width="16" customWidth="1"/><col min="5" max="5" width="20" customWidth="1"/></cols>
  <sheetData>
{''.join(s4b1)}
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>''')

# Sheet 2
s4b2 = []
s4b2.append('<row r="1"><c r="A1" t="s" s="4"><v>8</v></c></row>')
s4b2.append('<row r="2">' +
    '<c r="A2" t="s" s="4"><v>9</v></c>' +
    '<c r="B2" t="s" s="4"><v>10</v></c>' +
    '<c r="C2" t="s" s="4"><v>11</v></c>' +
    '<c r="D2" t="s" s="4"><v>12</v></c>' +
    '<c r="E2" t="s" s="4"><v>13</v></c>' +
    '<c r="F2" t="s" s="4"><v>14</v></c>' +
    '<c r="G2" t="s" s="4"><v>15</v></c>' +
    '<c r="H2" t="s" s="4"><v>16</v></c>' +
    '<c r="I2" t="s" s="4"><v>17</v></c>' +
    '</row>')
for i in range(6):
    rn = i + 3
    alt = '12' if i % 2 == 0 else '13'
    s4b2.append(f'<row r="{rn}">' +
        f'<c r="A{rn}" t="s" s="{alt}"><v>{i+1}</v></c>' +
        f'<c r="B{rn}" s="{alt}"></c>' +
        f'<c r="C{rn}" s="{alt}"></c>' +
        f'<c r="D{rn}" s="{alt}"></c>' +
        f'<c r="E{rn}" s="{alt}"></c>' +
        f'<c r="F{rn}" s="{alt}"></c>' +
        f'<c r="G{rn}" s="{alt}"></c>' +
        f'<c r="H{rn}" s="{alt}"><f>SUM(B{rn}:F{rn})*G{rn}</f><v></v></c>' +
        f'<c r="I{rn}" s="{alt}"><f>H{rn}/SUM(H$3:H$8)</f><v></v></c>' +
        f'</row>')
s4b2.append('<row r="9"><c r="A9" t="s" s="16"><v>6</v></c>' +
    '<c r="B9" s="16"></c><c r="C9" s="16"></c><c r="D9" s="16"></c><c r="E9" s="16"></c>' +
    '<c r="F9" s="16"></c><c r="G9" s="16"></c>' +
    '<c r="H9" s="16"><f>SUM(H3:H8)</f><v></v></c>' +
    '<c r="I9" s="16"><f>SUM(I3:I8)</f><v></v></c>' +
    '</row>')
s4b2.append('<row r="11"><c r="A11" t="s" s="11"><v>18</v></c></row>')
s4b2.append('<row r="12"><c r="A12" t="s" s="11"><v>19</v></c></row>')
s4b2.append('<row r="13"><c r="A13" t="s" s="11"><v>20</v></c></row>')
s4b2.append('<row r="14"><c r="A14" t="s" s="11"><v>21</v></c></row>')
s4b2.append('<row r="15"><c r="A15" t="s" s="11"><v>22</v></c></row>')
with open(work_dir + '/xl/worksheets/sheet2.xml', 'w', encoding='utf-8') as f:
    f.write(f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"><pane ySplit="2" topLeftCell="A3" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols><col min="1" max="1" width="12" customWidth="1"/><col min="2" max="2" width="12" customWidth="1"/><col min="3" max="3" width="12" customWidth="1"/><col min="4" max="4" width="12" customWidth="1"/><col min="5" max="5" width="12" customWidth="1"/><col min="6" max="6" width="12" customWidth="1"/><col min="7" max="7" width="12" customWidth="1"/><col min="8" max="8" width="12" customWidth="1"/><col min="9" max="9" width="12" customWidth="1"/></cols>
  <sheetData>
{''.join(s4b2)}
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>''')

# Sheet 3
s4b3 = []
s4b3.append('<row r="1"><c r="A1" t="s" s="4"><v>29</v></c></row>')
s4b3.append('<row r="2">' +
    '<c r="A2" t="s" s="4"><v>30</v></c>' +
    '<c r="B2" t="s" s="4"><v>31</v></c>' +
    '<c r="C2" t="s" s="4"><v>32</v></c>' +
    '<c r="D2" t="s" s="4"><v>33</v></c>' +
    '<c r="E2" t="s" s="4"><v>34</v></c>' +
    '</row>')
for i in range(6):
    rn = i + 3
    alt = '12' if i % 2 == 0 else '13'
    s4b3.append(f'<row r="{rn}">' +
        f'<c r="A{rn}" t="s" s="{alt}"><v>{i+1}</v></c>' +
        f'<c r="B{rn}" s="{alt}"><f>IFERROR(\'六要素打分表\'!H{rn},0)</f><v></v></c>' +
        f'<c r="C{rn}" s="{alt}"><f>IFERROR(\'六要素打分表\'!I{rn},0)</f><v></v></c>' +
        f'<c r="D{rn}" s="{alt}"><f>C{rn}</f><v></v></c>' +
        f'<c r="E{rn}" t="s" s="{alt}"></c>' +
        f'</row>')
s4b3.append('<row r="9"><c r="A9" t="s" s="14"><v>7</v></c>' +
    '<c r="B9" s="14"></c><c r="C9" s="14"><f>1-SUM(C3:C8)</f><v></v></c>' +
    '<c r="D9" s="14"><f>C9</f><v></v></c><c r="E9" t="s" s="14"></c></row>')
with open(work_dir + '/xl/worksheets/sheet3.xml', 'w', encoding='utf-8') as f:
    f.write(f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"><pane ySplit="2" topLeftCell="A3" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols><col min="1" max="1" width="12" customWidth="1"/><col min="2" max="2" width="16" customWidth="1"/><col min="3" max="3" width="14" customWidth="1"/><col min="4" max="4" width="14" customWidth="1"/><col min="5" max="5" width="24" customWidth="1"/></cols>
  <sheetData>
{''.join(s4b3)}
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>''')

# Sheet 4
s4b4 = []
s4b4.append('<row r="1"><c r="A1" t="s" s="4"><v>35</v></c></row>')
s4b4.append('<row r="2"><c r="A2" t="s" s="14"><v>40</v></c></row>')
s4b4.append('<row r="3">' +
    '<c r="A3" t="s" s="4"><v>36</v></c>' +
    '<c r="B3" t="s" s="4"><v>37</v></c>' +
    '<c r="C3" t="s" s="4"><v>38</v></c>' +
    '<c r="D3" t="s" s="4"><v>39</v></c>' +
    '</row>')
s4b4.append('<row r="4"><c r="A4" t="s" s="12"><v>41</v></c><c r="B4" t="s" s="12"><v>45</v></c><c r="C4" t="s" s="12"><v>46</v></c><c r="D4" t="s" s="12"><v>47</v></c></row>')
s4b4.append('<row r="5"><c r="A5" t="s" s="13"><v>42</v></c><c r="B5" t="s" s="13"><v>45</v></c><c r="C5" t="s" s="13"><v>46</v></c><c r="D5" t="s" s="13"><v>47</v></c></row>')
s4b4.append('<row r="6"><c r="A6" t="s" s="12"><v>43</v></c><c r="B6" t="s" s="12"><v>45</v></c><c r="C6" t="s" s="12"><v>46</v></c><c r="D6" t="s" s="12"><v>47</v></c></row>')
s4b4.append('<row r="7"><c r="A7" t="s" s="13"><v>44</v></c><c r="B7" t="s" s="13"></c><c r="C7" t="s" s="13"><v>46</v></c><c r="D7" t="s" s="13"><v>47</v></c></row>')
with open(work_dir + '/xl/worksheets/sheet4.xml', 'w', encoding='utf-8') as f:
    f.write(f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"/></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols><col min="1" max="1" width="24" customWidth="1"/><col min="2" max="2" width="16" customWidth="1"/><col min="3" max="3" width="16" customWidth="1"/><col min="4" max="4" width="20" customWidth="1"/></cols>
  <sheetData>
{''.join(s4b4)}
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>''')

pack(work_dir, OUT_DIR + 'F4_合伙人股权分配评估表_空表.xlsx')
print("Created: F4_合伙人股权分配评估表_空表.xlsx")


# ============================================================
# FILE 4: F4_合伙人股权分配评估表_填好版.xlsx
# ============================================================
print("Building File 4: F4_合伙人股权分配评估表_填好版.xlsx")
work_dir = '/tmp/xlsx_work_f4f'
copy_template(work_dir)

strings_f4f = strings_f4 + [
    '张伟', '创始人/CEO', '李明', 'CTO', '王芳', 'COO', '赵强', 'CFO',
    '创始人，核心决策者', '技术负责人，核心资产', '运营管理，关键执行', '财务管理，风险控制',
]
build_shared_strings(work_dir, strings_f4f)
build_styles(work_dir)

with open(work_dir + '/xl/workbook.xml', 'w', encoding='utf-8') as f:
    f.write('''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheets>
    <sheet name="合伙人基本信息" sheetId="1" r:id="rId1"/>
    <sheet name="六要素打分表" sheetId="2" r:id="rId4"/>
    <sheet name="分配建议" sheetId="3" r:id="rId5"/>
    <sheet name="动态调整机制" sheetId="4" r:id="rId6"/>
  </sheets>
</workbook>''')

with open(work_dir + '/xl/_rels/workbook.xml.rels', 'w', encoding='utf-8') as f:
    f.write('''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
  <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml"/>
  <Relationship Id="rId4" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet2.xml"/>
  <Relationship Id="rId5" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet3.xml"/>
  <Relationship Id="rId6" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet4.xml"/>
</Relationships>''')

with open(work_dir + '/[Content_Types].xml', 'w', encoding='utf-8') as f:
    f.write('''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
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
</Types>''')

# Sheet 1 (filled)
s4f1 = []
s4f1.append('<row r="1"><c r="A1" t="s" s="4"><v>0</v></c></row>')
s4f1.append('<row r="2">' +
    '<c r="A2" t="s" s="4"><v>1</v></c>' +
    '<c r="B2" t="s" s="4"><v>2</v></c>' +
    '<c r="C2" t="s" s="4"><v>3</v></c>' +
    '<c r="D2" t="s" s="4"><v>4</v></c>' +
    '<c r="E2" t="s" s="4"><v>5</v></c>' +
    '</row>')
# 张伟(48), 李明(50), 王芳(52), 赵强(54)
partner_rows = [
    (48, 49, 300, 0.40, ''),
    (50, 51, 150, 0.25, ''),
    (52, 53, 50, 0.15, ''),
    (54, 55, 30, 0.10, ''),
]
for i, (ni, ri, invest, pct, note) in enumerate(partner_rows):
    rn = i + 3
    alt = '12' if i % 2 == 0 else '13'
    s4f1.append(f'<row r="{rn}">' +
        f'<c r="A{rn}" t="s" s="{alt}"><v>{ni}</v></c>' +
        f'<c r="B{rn}" t="s" s="{alt}"><v>{ri}</v></c>' +
        f'<c r="C{rn}" s="{alt}"><v>{invest}</v></c>' +
        f'<c r="D{rn}" s="{alt}"><v>{pct}</v></c>' +
        f'<c r="E{rn}" t="s" s="{alt}"></c>' +
        f'</row>')
# Rows 7-8 empty
for i in range(2):
    rn = i + 7
    alt = '12' if i % 2 == 0 else '13'
    s4f1.append(f'<row r="{rn}"><c r="A{rn}" t="s" s="{alt}"></c><c r="B{rn}" t="s" s="{alt}"></c><c r="C{rn}" s="{alt}"></c><c r="D{rn}" s="{alt}"></c><c r="E{rn}" t="s" s="{alt}"></c></row>')
s4f1.append('<row r="9"><c r="A9" t="s" s="14"><v>7</v></c><c r="B9" t="s" s="14"></c><c r="C9" s="14"></c><c r="D9" s="14"><v>0.1</v></c><c r="E9" t="s" s="14"></c></row>')
s4f1.append('<row r="10"><c r="A10" t="s" s="16"><v>6</v></c><c r="B10" t="s" s="16"></c><c r="C10" s="16"><f>SUM(C3:C8)</f><v></v></c><c r="D10" s="16"><f>SUM(D3:D8)+D9</f><v></v></c><c r="E10" t="s" s="16"></c></row>')
with open(work_dir + '/xl/worksheets/sheet1.xml', 'w', encoding='utf-8') as f:
    f.write(f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"><pane ySplit="2" topLeftCell="A3" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols><col min="1" max="1" width="12" customWidth="1"/><col min="2" max="2" width="20" customWidth="1"/><col min="3" max="3" width="16" customWidth="1"/><col min="4" max="4" width="16" customWidth="1"/><col min="5" max="5" width="20" customWidth="1"/></cols>
  <sheetData>
{''.join(s4f1)}
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>''')

# Sheet 2 (filled scoring)
s4f2 = []
s4f2.append('<row r="1"><c r="A1" t="s" s="4"><v>8</v></c></row>')
s4f2.append('<row r="2">' +
    '<c r="A2" t="s" s="4"><v>9</v></c>' +
    '<c r="B2" t="s" s="4"><v>10</v></c>' +
    '<c r="C2" t="s" s="4"><v>11</v></c>' +
    '<c r="D2" t="s" s="4"><v>12</v></c>' +
    '<c r="E2" t="s" s="4"><v>13</v></c>' +
    '<c r="F2" t="s" s="4"><v>14</v></c>' +
    '<c r="G2" t="s" s="4"><v>15</v></c>' +
    '<c r="H2" t="s" s="4"><v>16</v></c>' +
    '<c r="I2" t="s" s="4"><v>17</v></c>' +
    '</row>')
# 张伟: 10,10,10,10,10,1.0  李明: 8,8,8,8,8,1.0  王芳: 6,7,7,7,7,1.0  赵强: 4,6,6,6,6,0.9
scoring = [(10,10,10,10,10,1.0), (8,8,8,8,8,1.0), (6,7,7,7,7,1.0), (4,6,6,6,6,0.9)]
for i, (b,c,d,e,f,g) in enumerate(scoring):
    rn = i + 3
    alt = '12' if i % 2 == 0 else '13'
    s4f2.append(f'<row r="{rn}">' +
        f'<c r="A{rn}" t="s" s="{alt}"><v>{48+i*2}</v></c>' +
        f'<c r="B{rn}" s="{alt}"><v>{b}</v></c>' +
        f'<c r="C{rn}" s="{alt}"><v>{c}</v></c>' +
        f'<c r="D{rn}" s="{alt}"><v>{d}</v></c>' +
        f'<c r="E{rn}" s="{alt}"><v>{e}</v></c>' +
        f'<c r="F{rn}" s="{alt}"><v>{f}</v></c>' +
        f'<c r="G{rn}" s="{alt}"><v>{g}</v></c>' +
        f'<c r="H{rn}" s="{alt}"><f>SUM(B{rn}:F{rn})*G{rn}</f><v></v></c>' +
        f'<c r="I{rn}" s="{alt}"><f>H{rn}/SUM(H$3:H$6)</f><v></v></c>' +
        f'</row>')
# Rows 7-8 empty
for i in range(2):
    rn = i + 7
    alt = '12' if i % 2 == 0 else '13'
    s4f2.append(f'<row r="{rn}"><c r="A{rn}" t="s" s="{alt}"></c><c r="B{rn}" s="{alt}"></c><c r="C{rn}" s="{alt}"></c><c r="D{rn}" s="{alt}"></c><c r="E{rn}" s="{alt}"></c><c r="F{rn}" s="{alt}"></c><c r="G{rn}" s="{alt}"></c><c r="H{rn}" s="{alt}"></c><c r="I{rn}" s="{alt}"></c></row>')
s4f2.append('<row r="9"><c r="A9" t="s" s="16"><v>6</v></c>' +
    '<c r="B9" s="16"></c><c r="C9" s="16"></c><c r="D9" s="16"></c><c r="E9" s="16"></c>' +
    '<c r="F9" s="16"></c><c r="G9" s="16"></c>' +
    '<c r="H9" s="16"><f>SUM(H3:H8)</f><v></v></c>' +
    '<c r="I9" s="16"><f>SUM(I3:I8)</f><v></v></c></row>')
with open(work_dir + '/xl/worksheets/sheet2.xml', 'w', encoding='utf-8') as f:
    f.write(f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"><pane ySplit="2" topLeftCell="A3" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols><col min="1" max="1" width="12" customWidth="1"/><col min="2" max="2" width="12" customWidth="1"/><col min="3" max="3" width="12" customWidth="1"/><col min="4" max="4" width="12" customWidth="1"/><col min="5" max="5" width="12" customWidth="1"/><col min="6" max="6" width="12" customWidth="1"/><col min="7" max="7" width="12" customWidth="1"/><col min="8" max="8" width="12" customWidth="1"/><col min="9" max="9" width="12" customWidth="1"/></cols>
  <sheetData>
{''.join(s4f2)}
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>''')

# Sheet 3 (filled)
s4f3 = []
s4f3.append('<row r="1"><c r="A1" t="s" s="4"><v>29</v></c></row>')
s4f3.append('<row r="2">' +
    '<c r="A2" t="s" s="4"><v>30</v></c>' +
    '<c r="B2" t="s" s="4"><v>31</v></c>' +
    '<c r="C2" t="s" s="4"><v>32</v></c>' +
    '<c r="D2" t="s" s="4"><v>33</v></c>' +
    '<c r="E2" t="s" s="4"><v>34</v></c>' +
    '</row>')
adj_notes = ['创始人，核心决策者', '技术负责人，核心资产', '运营管理，关键执行', '财务管理，风险控制']
for i in range(4):
    rn = i + 3
    alt = '12' if i % 2 == 0 else '13'
    note_idx = strings_f4f.index(adj_notes[i])
    s4f3.append(f'<row r="{rn}">' +
        f'<c r="A{rn}" t="s" s="{alt}"><v>{48+i*2}</v></c>' +
        f'<c r="B{rn}" s="{alt}"><f>IFERROR(\'六要素打分表\'!H{rn},0)</f><v></v></c>' +
        f'<c r="C{rn}" s="{alt}"><f>IFERROR(\'六要素打分表\'!I{rn},0)</f><v></v></c>' +
        f'<c r="D{rn}" s="{alt}"><f>C{rn}</f><v></v></c>' +
        f'<c r="E{rn}" t="s" s="{alt}"><v>{note_idx}</v></c>' +
        f'</row>')
for i in range(2):
    rn = i + 7
    alt = '12' if i % 2 == 0 else '13'
    s4f3.append(f'<row r="{rn}"><c r="A{rn}" t="s" s="{alt}"></c><c r="B{rn}" s="{alt}"></c><c r="C{rn}" s="{alt}"></c><c r="D{rn}" s="{alt}"></c><c r="E{rn}" t="s" s="{alt}"></c></row>')
s4f3.append('<row r="9"><c r="A9" t="s" s="14"><v>7</v></c>' +
    '<c r="B9" s="14"></c><c r="C9" s="14"><f>1-SUM(C3:C8)</f><v></v></c>' +
    '<c r="D9" s="14"><f>C9</f><v></v></c><c r="E9" t="s" s="14"></c></row>')
with open(work_dir + '/xl/worksheets/sheet3.xml', 'w', encoding='utf-8') as f:
    f.write(f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"><pane ySplit="2" topLeftCell="A3" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols><col min="1" max="1" width="12" customWidth="1"/><col min="2" max="2" width="16" customWidth="1"/><col min="3" max="3" width="14" customWidth="1"/><col min="4" max="4" width="14" customWidth="1"/><col min="5" max="5" width="24" customWidth="1"/></cols>
  <sheetData>
{''.join(s4f3)}
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>''')

# Sheet 4 (same as blank)
with open(work_dir + '/xl/worksheets/sheet4.xml', 'w', encoding='utf-8') as f:
    f.write(f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"/></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols><col min="1" max="1" width="24" customWidth="1"/><col min="2" max="2" width="16" customWidth="1"/><col min="3" max="3" width="16" customWidth="1"/><col min="4" max="4" width="20" customWidth="1"/></cols>
  <sheetData>
{''.join(s4b4)}
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>''')

pack(work_dir, OUT_DIR + 'F4_合伙人股权分配评估表_填好版.xlsx')
print("Created: F4_合伙人股权分配评估表_填好版.xlsx")

print("\nAll 4 files created successfully!")
