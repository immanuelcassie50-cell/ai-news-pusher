import xml.sax.saxutils as saxutils

rows = []
rows.append('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>')
rows.append('<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">')
rows.append('  <sheetViews>')
rows.append('    <sheetView tabSelected="0" workbookViewId="0"/>')
rows.append('  </sheetViews>')
rows.append('  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>')
rows.append('  <cols>')
rows.append('    <col min="1" max="1" width="12" customWidth="1"/>')
rows.append('    <col min="2" max="2" width="16" customWidth="1"/>')
rows.append('    <col min="3" max="3" width="36" customWidth="1"/>')
rows.append('    <col min="4" max="4" width="22" customWidth="1"/>')
rows.append('    <col min="5" max="5" width="28" customWidth="1"/>')
rows.append('    <col min="6" max="6" width="18" customWidth="1"/>')
rows.append('  </cols>')
rows.append('  <sheetData>')

# Header row
rows.append('    <row r="1" ht="24" customHeight="1">')
rows.append('      <c r="A1" t="s" s="4"><v>4</v></c>')
rows.append('      <c r="B1" t="s" s="4"><v>1</v></c>')
rows.append('      <c r="C1" t="s" s="4"><v>2</v></c>')
rows.append('      <c r="D1" t="s" s="4"><v>3</v></c>')
rows.append('      <c r="E1" t="s" s="4"><v>25</v></c>')
rows.append('      <c r="F1" t="s" s="4"><v>26</v></c>')
rows.append('    </row>')

# Data rows 2-24 with module data
data = [
    (0, 5, 5, 5, 30, 31),  # Row 2: 课程导入 0:00
    (0, 5, 32, 5, 30, 33), # Row 3:
    (0, 5, 34, 5, 30, 35), # Row 4:
    (7, 8, 36, 27, 37, 38), # Row 5: 模块一 研发
    (7, 8, 39, 27, 37, 40),
    (7, 8, 41, 27, 37, 42),
    (7, 8, 43, 27, 37, 44),
    (10, 8, 45, 37, 46, 47), # Row 9: 模块二 制造
    (10, 8, 48, 37, 46, 49),
    (10, 8, 50, 37, 46, 51),
    (10, 8, 52, 37, 46, 53),
    (13, 8, 54, 37, 46, 55), # Row 13: 模块三 营销
    (13, 8, 56, 37, 46, 57),
    (13, 8, 58, 37, 46, 59),
    (13, 8, 60, 37, 46, 61),
    (16, 8, 62, 37, 46, 63), # Row 17: 模块四 服务
    (16, 8, 64, 37, 46, 65),
    (16, 8, 66, 37, 46, 67),
    (16, 8, 68, 37, 46, 69),
    (19, 8, 70, 37, 46, 71), # Row 21: 整合落地
    (19, 8, 72, 37, 46, 73),
    (19, 8, 74, 37, 46, 75),
    (19, 8, 76, 37, 46, 77),
]

for i, (a, b, c, d, e, f) in enumerate(data):
    row_num = i + 2
    rows.append(f'    <row r="{row_num}">')
    rows.append(f'      <c r="A{row_num}" t="s" s="1"><v>{a}</v></c>')
    rows.append(f'      <c r="B{row_num}" t="s" s="1"><v>{b}</v></c>')
    rows.append(f'      <c r="C{row_num}" t="s" s="2"><v>{c}</v></c>')
    rows.append(f'      <c r="D{row_num}" t="s" s="2"><v>{d}</v></c>')
    rows.append(f'      <c r="E{row_num}" t="s" s="2"><v>{e}</v></c>')
    rows.append(f'      <c r="F{row_num}" t="s" s="2"><v>{f}</v></c>')
    rows.append(f'    </row>')

# Total row 25
rows.append('    <row r="25">')
rows.append('      <c r="A25" t="s" s="2"><v>19</v></c>')
rows.append('      <c r="B25" t="s" s="2"><v>20</v></c>')
rows.append('      <c r="C25" t="s" s="2"><v>78</v></c>')
rows.append('      <c r="D25" t="s" s="2"><v>52</v></c>')
rows.append('      <c r="E25" t="s" s="2"><v>46</v></c>')
rows.append('      <c r="F25" t="s" s="2"><v>79</v></c>')
rows.append('    </row>')

rows.append('  </sheetData>')
rows.append('  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>')
rows.append('</worksheet>')

with open('/tmp/xlsx_ecoincentive_work/xl/worksheets/sheet4.xml', 'w', encoding='utf-8') as f:
    f.write('\n'.join(rows))
print('sheet4 written')