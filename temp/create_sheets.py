import os

# ============================================================
# Sheet 1: 课前预习问题 (Pre-class Questions)
# Headers: 序号 | 预习主题 | 产生的疑问 | 预习后的思考 | 是否已在课堂解决
# 10 data rows
# ============================================================
sheet1 = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView tabSelected="1" workbookViewId="0"/>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="18" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols>
    <col min="1" max="1" width="8" customWidth="1"/>
    <col min="2" max="2" width="20" customWidth="1"/>
    <col min="3" max="3" width="35" customWidth="1"/>
    <col min="4" max="4" width="35" customWidth="1"/>
    <col min="5" max="5" width="15" customWidth="1"/>
  </cols>
  <sheetData>
    <row r="1" ht="30" customHeight="1">
      <c r="A1" t="s" s="4"><v>0</v></c>
    </row>
    <row r="2" ht="22" customHeight="1">
      <c r="A2" t="s" s="4"><v>1</v></c>
      <c r="B2" t="s" s="4"><v>2</v></c>
      <c r="C2" t="s" s="4"><v>3</v></c>
      <c r="D2" t="s" s="4"><v>4</v></c>
      <c r="E2" t="s" s="4"><v>5</v></c>
    </row>'''

for i in range(10):
    row_num = i + 3
    sheet1 += f'''
    <row r="{row_num}" ht="18" customHeight="1">
      <c r="A{row_num}" t="s" s="1"><v>1</v></c>
      <c r="B{row_num}" t="s" s="1"><v>2</v></c>
      <c r="C{row_num}" t="s" s="1"><v>3</v></c>
      <c r="D{row_num}" t="s" s="1"><v>4</v></c>
      <c r="E{row_num}" t="s" s="1"><v>5</v></c>
    </row>'''

sheet1 += '''
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

with open('D:/CC/temp/xlsx_work/xl/worksheets/sheet1.xml', 'w', encoding='utf-8') as f:
    f.write(sheet1)
print("sheet1.xml created")

# ============================================================
# Sheet 2: 课堂研讨记录
# ============================================================
sheet2 = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView tabSelected="0" workbookViewId="0"/>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="18" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols>
    <col min="1" max="1" width="18" customWidth="1"/>
    <col min="2" max="2" width="30" customWidth="1"/>
    <col min="3" max="3" width="30" customWidth="1"/>
    <col min="4" max="4" width="30" customWidth="1"/>
    <col min="5" max="5" width="30" customWidth="1"/>
  </cols>
  <sheetData>
    <row r="1" ht="30" customHeight="1">
      <c r="A1" t="s" s="4"><v>6</v></c>
    </row>
    <row r="2" ht="22" customHeight="1">
      <c r="A2" t="s" s="4"><v>7</v></c>
      <c r="B2" t="s" s="4"><v>8</v></c>
      <c r="C2" t="s" s="4"><v>9</v></c>
      <c r="D2" t="s" s="4"><v>10</v></c>
      <c r="E2" t="s" s="4"><v>11</v></c>
    </row>'''

for i in range(12):
    row_num = i + 3
    sheet2 += f'''
    <row r="{row_num}" ht="18" customHeight="1">
      <c r="A{row_num}" t="s" s="1"><v>7</v></c>
      <c r="B{row_num}" t="s" s="1"><v>8</v></c>
      <c r="C{row_num}" t="s" s="1"><v>9</v></c>
      <c r="D{row_num}" t="s" s="1"><v>10</v></c>
      <c r="E{row_num}" t="s" s="1"><v>11</v></c>
    </row>'''

sheet2 += '''
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

with open('D:/CC/temp/xlsx_work/xl/worksheets/sheet2.xml', 'w', encoding='utf-8') as f:
    f.write(sheet2)
print("sheet2.xml created")

# ============================================================
# Sheet 3: 小组观点汇总
# ============================================================
sheet3 = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView tabSelected="0" workbookViewId="0"/>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="18" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols>
    <col min="1" max="1" width="12" customWidth="1"/>
    <col min="2" max="2" width="25" customWidth="1"/>
    <col min="3" max="3" width="25" customWidth="1"/>
    <col min="4" max="4" width="25" customWidth="1"/>
    <col min="5" max="5" width="25" customWidth="1"/>
    <col min="6" max="6" width="25" customWidth="1"/>
    <col min="7" max="7" width="12" customWidth="1"/>
  </cols>
  <sheetData>
    <row r="1" ht="30" customHeight="1">
      <c r="A1" t="s" s="4"><v>12</v></c>
    </row>
    <row r="2" ht="22" customHeight="1">
      <c r="A2" t="s" s="4"><v>13</v></c>
      <c r="B2" t="s" s="4"><v>14</v></c>
      <c r="C2" t="s" s="4"><v>15</v></c>
      <c r="D2" t="s" s="4"><v>16</v></c>
      <c r="E2" t="s" s="4"><v>17</v></c>
      <c r="F2" t="s" s="4"><v>18</v></c>
      <c r="G2" t="s" s="4"><v>19</v></c>
    </row>'''

for i in range(6):
    row_num = i + 3
    sheet3 += f'''
    <row r="{row_num}" ht="18" customHeight="1">
      <c r="A{row_num}" t="s" s="1"><v>13</v></c>
      <c r="B{row_num}" t="s" s="1"><v>14</v></c>
      <c r="C{row_num}" t="s" s="1"><v>15</v></c>
      <c r="D{row_num}" t="s" s="1"><v>16</v></c>
      <c r="E{row_num}" t="s" s="1"><v>17</v></c>
      <c r="F{row_num}" t="s" s="1"><v>18</v></c>
      <c r="G{row_num}" t="s" s="1"><v>19</v></c>
    </row>'''

sheet3 += '''
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

with open('D:/CC/temp/xlsx_work/xl/worksheets/sheet3.xml', 'w', encoding='utf-8') as f:
    f.write(sheet3)
print("sheet3.xml created")

# ============================================================
# Sheet 4: 个人洞察笔记
# ============================================================
sheet4 = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView tabSelected="0" workbookViewId="0"/>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="18" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols>
    <col min="1" max="1" width="8" customWidth="1"/>
    <col min="2" max="2" width="30" customWidth="1"/>
    <col min="3" max="3" width="25" customWidth="1"/>
    <col min="4" max="4" width="30" customWidth="1"/>
    <col min="5" max="5" width="12" customWidth="1"/>
  </cols>
  <sheetData>
    <row r="1" ht="30" customHeight="1">
      <c r="A1" t="s" s="4"><v>20</v></c>
    </row>
    <row r="2" ht="22" customHeight="1">
      <c r="A2" t="s" s="4"><v>1</v></c>
      <c r="B2" t="s" s="4"><v>21</v></c>
      <c r="C2" t="s" s="4"><v>22</v></c>
      <c r="D2" t="s" s="4"><v>23</v></c>
      <c r="E2" t="s" s="4"><v>24</v></c>
    </row>'''

for i in range(10):
    row_num = i + 3
    sheet4 += f'''
    <row r="{row_num}" ht="18" customHeight="1">
      <c r="A{row_num}" t="s" s="1"><v>1</v></c>
      <c r="B{row_num}" t="s" s="1"><v>21</v></c>
      <c r="C{row_num}" t="s" s="1"><v>22</v></c>
      <c r="D{row_num}" t="s" s="1"><v>23</v></c>
      <c r="E{row_num}" t="s" s="1"><v>24</v></c>
    </row>'''

sheet4 += '''
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

with open('D:/CC/temp/xlsx_work/xl/worksheets/sheet4.xml', 'w', encoding='utf-8') as f:
    f.write(sheet4)
print("sheet4.xml created")

print("\nAll 4 worksheet files created successfully!")