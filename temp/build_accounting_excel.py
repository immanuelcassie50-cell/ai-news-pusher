import subprocess, os, shutil

SKILL_DIR = 'C:/Users/Administrator/.claude/skills/Excel表格处理'
TEMPLATE = SKILL_DIR + '/templates/minimal_xlsx'
OUT_DIR = 'D:/新课开发/财务管理/8-会计准则与管理应用/配套Excel文件/'

os.makedirs(OUT_DIR, exist_ok=True)

def copy_template(work_dir):
    if os.path.exists(work_dir):
        shutil.rmtree(work_dir)
    os.makedirs(work_dir)
    # Copy from template directly, flattening nested structure
    for item in os.listdir(TEMPLATE):
        src = os.path.join(TEMPLATE, item)
        dst = os.path.join(work_dir, item)
        if item == 'minimal_xlsx':
            # Flatten the nested minimal_xlsx directory
            for subitem in os.listdir(src):
                sub_src = os.path.join(src, subitem)
                sub_dst = os.path.join(work_dir, subitem)
                if os.path.isdir(sub_src):
                    shutil.copytree(sub_src, sub_dst)
                else:
                    shutil.copy2(sub_src, sub_dst)
        elif os.path.isdir(src):
            shutil.copytree(src, dst)
        else:
            shutil.copy2(src, dst)

def pack(work_dir, output_path):
    # Use shell=True to handle Chinese characters in path
    cmd = f'python3 "{SKILL_DIR}/scripts/xlsx_pack.py" "{work_dir}" "{output_path}"'
    print(f"Running: {cmd}")
    result = subprocess.run(cmd, shell=True, capture_output=True, text=True)
    print(f"stdout: {result.stdout}")
    print(f"stderr: {result.stderr}")
    if result.returncode != 0:
        raise subprocess.CalledProcessError(result.returncode, cmd)
    print(f"Packed to: {output_path}")

# ========== FILE 1: F10_团队准则变化追踪台账.xlsx ==========
print("Building File 1: F10_团队准则变化追踪台账.xlsx")
work_dir = '/tmp/xlsx_work_f10'
copy_template(work_dir)

strings = [
    '准则名称', '生效日期', '财务影响', '运营影响', '应对措施', '负责人', '进度', '备注', '最后更新日期',
    '待开始', '进行中', '已完成',
    '收入确认准则（ASC 606）', '2024-01-01', '对工程承包收入确认时点产生影响，需重新评估履约进度',
    '更新项目合同管理流程，培训财务和项目团队', '张明', '已完成', '已全面培训，流程已更新', '2024-03-15',
    '租赁准则（ASC 842）', '2024-01-01', '经营租赁需在资产负债表确认使用权资产和租赁负债',
    '全面梳理租赁合同，评估续租选择权', '李华', '进行中', '已完成租赁清单，正在评估重大租赁', '2024-06-20',
    '金融工具准则（ASC 326）', '2024-01-01', '需评估应收账款减值，使用预期信用损失模型',
    '建立预期信用损失模型，更新坏账准备政策', '王芳', '待开始', '计划Q3启动', '2024-06-01',
    '存货成本准则（LIFO终止）', '2025-01-01', 'LIFO方法将不再允许使用，需转换为FIFO或加权平均',
    '全面评估存货系统，必要时更换', '赵红', '进行中', '已完成系统评估', '2024-05-10',
]

with open(work_dir + '/xl/sharedStrings.xml', 'w', encoding='utf-8') as f:
    si_entries = ''.join(['<si><t>' + s + '</t></si>' for s in strings])
    f.write('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n')
    f.write('<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="' + str(len(strings)) + '" uniqueCount="' + str(len(strings)) + '">\n')
    f.write(si_entries)
    f.write('\n</sst>')

# Build sheet1.xml
rows = []
# Row 1: Title
rows.append('<row r="1"><c r="A1" t="s" s="2"><v>0</v></c></row>')

# Row 2: Headers (dark background)
rows.append('<row r="2" ht="20" customHeight="1">')
rows.append('<c r="A2" t="s" s="2"><v>0</v></c>')
rows.append('<c r="B2" t="s" s="2"><v>1</v></c>')
rows.append('<c r="C2" t="s" s="2"><v>2</v></c>')
rows.append('<c r="D2" t="s" s="2"><v>3</v></c>')
rows.append('<c r="E2" t="s" s="2"><v>4</v></c>')
rows.append('<c r="F2" t="s" s="2"><v>5</v></c>')
rows.append('<c r="G2" t="s" s="2"><v>6</v></c>')
rows.append('<c r="H2" t="s" s="2"><v>7</v></c>')
rows.append('<c r="I2" t="s" s="2"><v>8</v></c>')
rows.append('</row>')

# Data rows
data = [
    (13, 14, 15, 16, 17, 18, 12, 19, 20),
    (21, 22, 23, 24, 25, 26, 11, 27, 28),
    (29, 30, 31, 32, 33, 34, 10, 35, 36),
    (37, 38, 39, 40, 41, 42, 11, 43, 44),
]

for idx, row_data in enumerate(data):
    r = idx + 3
    progress = row_data[6]
    # Blue font for input cells
    rows.append('<row r="' + str(r) + '">')
    rows.append('<c r="A' + str(r) + '" t="s" s="1"><v>' + str(row_data[0]) + '</v></c>')
    rows.append('<c r="B' + str(r) + '" t="s" s="1"><v>' + str(row_data[1]) + '</v></c>')
    rows.append('<c r="C' + str(r) + '" t="s" s="0"><v>' + str(row_data[2]) + '</v></c>')
    rows.append('<c r="D' + str(r) + '" t="s" s="0"><v>' + str(row_data[3]) + '</v></c>')
    rows.append('<c r="E' + str(r) + '" t="s" s="0"><v>' + str(row_data[4]) + '</v></c>')
    rows.append('<c r="F' + str(r) + '" t="s" s="1"><v>' + str(row_data[5]) + '</v></c>')
    rows.append('<c r="G' + str(r) + '" t="s" s="1"><v>' + str(progress) + '</v></c>')
    rows.append('<c r="H' + str(r) + '" t="s" s="1"><v>' + str(row_data[7]) + '</v></c>')
    rows.append('<c r="I' + str(r) + '" t="s" s="1"><v>' + str(row_data[8]) + '</v></c>')
    rows.append('</row>')

sheet_data = '\n'.join(rows)

with open(work_dir + '/xl/worksheets/sheet1.xml', 'w', encoding='utf-8') as f:
    f.write('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n')
    f.write('<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">\n')
    f.write('  <sheetViews><sheetView workbookViewId="0"><pane ySplit="2" topLeftCell="A3" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>\n')
    f.write('  <sheetFormatPr defaultRowHeight="15"/>\n')
    f.write('  <cols>\n')
    f.write('    <col min="1" max="1" width="22" customWidth="1"/>\n')
    f.write('    <col min="2" max="2" width="14" customWidth="1"/>\n')
    f.write('    <col min="3" max="3" width="35" customWidth="1"/>\n')
    f.write('    <col min="4" max="4" width="35" customWidth="1"/>\n')
    f.write('    <col min="5" max="5" width="35" customWidth="1"/>\n')
    f.write('    <col min="6" max="6" width="10" customWidth="1"/>\n')
    f.write('    <col min="7" max="7" width="12" customWidth="1"/>\n')
    f.write('    <col min="8" max="8" width="25" customWidth="1"/>\n')
    f.write('    <col min="9" max="9" width="14" customWidth="1"/>\n')
    f.write('  </cols>\n')
    f.write('  <sheetData>\n')
    f.write(sheet_data)
    f.write('\n  </sheetData>\n')
    f.write('  <dataValidations>\n')
    f.write('    <dataValidation type="list" sqref="G3:G100" formula1="&quot;待开始,进行中,已完成&quot;" showInputMessage="1" prompt="选择进度状态" promptTitle="进度"/>\n')
    f.write('  </dataValidations>\n')
    f.write('  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>\n')
    f.write('</worksheet>')

# Write styles.xml - matching working pattern from build_files.py
with open(work_dir + '/xl/styles.xml', 'w', encoding='utf-8') as f:
    f.write('''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <fonts>
    <font><sz val="11"/><name val="Calibri"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="000000FF"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="00000000"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="00008000"/></font>
    <font><b/><sz val="12"/><name val="Calibri"/><color rgb="FFFFFFFF"/></font>
  </fonts>
  <fills>
    <fill><patternFill patternType="none"/></fill>
    <fill><patternFill patternType="gray125"/></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="001F4D4F"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="00E8F4F7"/></patternFill></fill>
  </fills>
  <borders>
    <border><left/><right/><top/><bottom/><diagonal/></border>
    <border><left style="thin"><color rgb="00000000"/></left><right style="thin"><color rgb="00000000"/></right><top style="thin"><color rgb="00000000"/></top><bottom style="thin"><color rgb="00000000"/></bottom/></border>
  </borders>
  <cellStyleXfs>
    <xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/>
  </cellStyleXfs>
  <cellXfs>
    <xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0" applyFont="1" applyAlignment="1"><alignment horizontal="left" vertical="center"/></xf>
    <xf numFmtId="0" fontId="0" fillId="3" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1" applyAlignment="1"><alignment horizontal="center" vertical="center"/></xf>
    <xf numFmtId="0" fontId="4" fillId="2" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1" applyAlignment="1"><alignment horizontal="center" vertical="center"/></xf>
    <xf numFmtId="164" fontId="2" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"><alignment horizontal="right"/></xf>
    <xf numFmtId="165" fontId="2" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"><alignment horizontal="center"/></xf>
  </cellXfs>
  <numFmts>
    <numFmt numFmtId="164" formatCode="$#,##0;($#,##0);&quot;-&quot;"/>
    <numFmt numFmtId="165" formatCode="0.0%"/>
  </numFmts>
</styleSheet>''')

# Write workbook.xml
with open(work_dir + '/xl/workbook.xml', 'w', encoding='utf-8') as f:
    f.write('''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheets>
    <sheet name="准则变化追踪" sheetId="1" r:id="rId1"/>
  </sheets>
</workbook>''')

# Write workbook.xml.rels
with open(work_dir + '/xl/_rels/workbook.xml.rels', 'w', encoding='utf-8') as f:
    f.write('''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
  <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml"/>
</Relationships>''')

# Write Content_Types.xml
with open(work_dir + '/[Content_Types].xml', 'w', encoding='utf-8') as f:
    f.write('''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
  <Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>
  <Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/>
</Types>''')

pack(work_dir, OUT_DIR + 'F10_团队准则变化追踪台账.xlsx')
print("Created: F10_团队准则变化追踪台账.xlsx")
