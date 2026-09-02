#!/usr/bin/env python3
"""Write 4 sheet XML files for F10."""
import os

OUT = r'D:/temp/xlsx_work_f10/f10_unpacked'

# String index map (matching build_f10.py):
# 0=智能体名称, 1=类型, 2=状态, 3=负责人, 4=所属部门, 5=创建日期, 6=备注
# 7=对话客服, 8=知识助手, 9=流程自动化, 10=数据分析, 11=文案创作, 12=图像识别
# 13=研发部, 14=市场部, 15=销售部, 16=HR部, 17=财务部, 18=客服部
# 19=运营中, 20=停用, 21=开发中, 22=已下线
# 23=张明, 24=李华, 25=王芳, 26=赵强, 27=陈静, 28=周伟
# 29=合计, 30=智能体数量
# 31=调用量(月), 32=完成率(%), 33=满意度(%), 34=响应时间(秒)
# 35=开发成本(元), 36=运营成本(元/月), 37=收益(元/月), 38=ROI(%)
# 39=上线日期, 40=最近更新时间, 41=计划下线日期, 42=当前版本
# 43=F10_组织智能体台账, 44=智能体目录, 45=使用数据, 46=成本分析, 47=生命周期管理
# 48=填写说明, 49=说明1, 50=说明2
# 51=v2.1, 52=v1.5, 53=v3.0, 54=v1.2, 55=v2.5, 56=v1.8
# 57-62=launch dates, 63-68=update dates, 69-74=eol dates

def V(i): return f'<v>{i}</v>'
def SI(i): return f'<v>{i}</v>'

# ── SHEET 1: 智能体目录 ─────────────────────────────────────────────────────
s1 = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView tabSelected="1" workbookViewId="0"/>
    <pane ySplit="3" topLeftCell="A4" activePane="bottomLeft" state="frozen"/>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25"
    xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols>
    <col min="1" max="1" width="18" customWidth="1"/>
    <col min="2" max="2" width="14" customWidth="1"/>
    <col min="3" max="3" width="10" customWidth="1"/>
    <col min="4" max="4" width="10" customWidth="1"/>
    <col min="5" max="5" width="12" customWidth="1"/>
    <col min="6" max="6" width="14" customWidth="1"/>
    <col min="7" max="7" width="20" customWidth="1"/>
  </cols>
  <sheetData>
    <row r="1" ht="30" customHeight="1">
      <c r="A1" t="s" s="4">{SI(43)}</c>
    </row>
    <row r="2" ht="18" customHeight="1">
      <c r="A2" t="s" s="4">{SI(44)}</c>
    </row>
    <row r="3" ht="18" customHeight="1">
      <c r="A3" t="s" s="4">{SI(0)}</c>
      <c r="B3" t="s" s="4">{SI(1)}</c>
      <c r="C3" t="s" s="4">{SI(2)}</c>
      <c r="D3" t="s" s="4">{SI(3)}</c>
      <c r="E3" t="s" s="4">{SI(4)}</c>
      <c r="F3" t="s" s="4">{SI(5)}</c>
      <c r="G3" t="s" s="4">{SI(6)}</c>
    </row>
    <!-- 对话客服 -->
    <row r="4">
      <c r="A4" t="s" s="1">{SI(7)}</c>
      <c r="B4" t="s" s="1">{SI(7)}</c>
      <c r="C4" t="s" s="1">{SI(19)}</c>
      <c r="D4" t="s" s="1">{SI(23)}</c>
      <c r="E4" t="s" s="1">{SI(13)}</c>
      <c r="F4" t="s" s="1">{SI(57)}</c>
    </row>
    <!-- 知识助手 -->
    <row r="5">
      <c r="A5" t="s" s="1">{SI(8)}</c>
      <c r="B5" t="s" s="1">{SI(8)}</c>
      <c r="C5" t="s" s="1">{SI(19)}</c>
      <c r="D5" t="s" s="1">{SI(24)}</c>
      <c r="E5" t="s" s="1">{SI(14)}</c>
      <c r="F5" t="s" s="1">{SI(58)}</c>
    </row>
    <!-- 流程自动化 -->
    <row r="6">
      <c r="A6" t="s" s="1">{SI(9)}</c>
      <c r="B6" t="s" s="1">{SI(9)}</c>
      <c r="C6" t="s" s="1">{SI(19)}</c>
      <c r="D6" t="s" s="1">{SI(25)}</c>
      <c r="E6" t="s" s="1">{SI(13)}</c>
      <c r="F6" t="s" s="1">{SI(59)}</c>
    </row>
    <!-- 数据分析 -->
    <row r="7">
      <c r="A7" t="s" s="1">{SI(10)}</c>
      <c r="B7" t="s" s="1">{SI(10)}</c>
      <c r="C7" t="s" s="1">{SI(21)}</c>
      <c r="D7" t="s" s="1">{SI(26)}</c>
      <c r="E7" t="s" s="1">{SI(15)}</c>
      <c r="F7" t="s" s="1">{SI(60)}</c>
    </row>
    <!-- 文案创作 -->
    <row r="8">
      <c r="A8" t="s" s="1">{SI(11)}</c>
      <c r="B8" t="s" s="1">{SI(11)}</c>
      <c r="C8" t="s" s="1">{SI(19)}</c>
      <c r="D8" t="s" s="1">{SI(27)}</c>
      <c r="E8" t="s" s="1">{SI(16)}</c>
      <c r="F8" t="s" s="1">{SI(61)}</c>
    </row>
    <!-- 图像识别 -->
    <row r="9">
      <c r="A9" t="s" s="1">{SI(12)}</c>
      <c r="B9" t="s" s="1">{SI(12)}</c>
      <c r="C9" t="s" s="1">{SI(19)}</c>
      <c r="D9" t="s" s="1">{SI(28)}</c>
      <c r="E9" t="s" s="1">{SI(17)}</c>
      <c r="F9" t="s" s="1">{SI(62)}</c>
    </row>
    <!-- 合计行 -->
    <row r="10" ht="18" customHeight="1">
      <c r="A10" t="s" s="4">{SI(29)}</c>
      <c r="B10" s="10"><f>COUNTA(A4:A9)</f><v></v></c>
    </row>
    <!-- 填写说明 -->
    <row r="12"><c r="A12" t="s" s="1">{SI(48)}</c></row>
    <row r="13"><c r="A13" t="s" s="1">{SI(49)}</c></row>
    <row r="14"><c r="A14" t="s" s="1">{SI(50)}</c></row>
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

with open(OUT + '/xl/worksheets/sheet1.xml', 'w', encoding='utf-8') as f:
    f.write(s1)
print("sheet1.xml done (智能体目录)")

# ── SHEET 2: 使用数据 ────────────────────────────────────────────────────────
s2 = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView tabSelected="0" workbookViewId="0"/>
    <pane ySplit="3" topLeftCell="A4" activePane="bottomLeft" state="frozen"/>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25"
    xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols>
    <col min="1" max="1" width="18" customWidth="1"/>
    <col min="2" max="2" width="14" customWidth="1"/>
    <col min="3" max="3" width="14" customWidth="1"/>
    <col min="4" max="4" width="14" customWidth="1"/>
    <col min="5" max="5" width="14" customWidth="1"/>
    <col min="6" max="6" width="20" customWidth="1"/>
  </cols>
  <sheetData>
    <row r="1" ht="30" customHeight="1">
      <c r="A1" t="s" s="4">{SI(43)}</c>
    </row>
    <row r="2" ht="18" customHeight="1">
      <c r="A2" t="s" s="4">{SI(45)}</c>
    </row>
    <row r="3" ht="18" customHeight="1">
      <c r="A3" t="s" s="4">{SI(0)}</c>
      <c r="B3" t="s" s="4">{SI(31)}</c>
      <c r="C3" t="s" s="4">{SI(32)}</c>
      <c r="D3" t="s" s="4">{SI(33)}</c>
      <c r="E3" t="s" s="4">{SI(34)}</c>
      <c r="F3" t="s" s="4">{SI(6)}</c>
    </row>
    <row r="4">
      <c r="A4" t="s" s="1">{SI(7)}</c>
      <c r="B4" s="9"><v>850</v></c>
      <c r="C4" s="7"><v>0.965</v></c>
      <c r="D4" s="7"><v>0.942</v></c>
      <c r="E4" s="13"><v>4.2</v></c>
    </row>
    <row r="5">
      <c r="A5" t="s" s="1">{SI(8)}</c>
      <c r="B5" s="9"><v>920</v></c>
      <c r="C5" s="7"><v>0.942</v></c>
      <c r="D5" s="7"><v>0.938</v></c>
      <c r="E5" s="13"><v>3.8</v></c>
    </row>
    <row r="6">
      <c r="A6" t="s" s="1">{SI(9)}</c>
      <c r="B6" s="9"><v>880</v></c>
      <c r="C6" s="7"><v>0.978</v></c>
      <c r="D6" s="7"><v>0.955</v></c>
      <c r="E6" s="13"><v>5.1</v></c>
    </row>
    <row r="7">
      <c r="A7" t="s" s="1">{SI(10)}</c>
      <c r="B7" s="9"><v>950</v></c>
      <c r="C7" s="7"><v>0.931</v></c>
      <c r="D7" s="7"><v>0.925</v></c>
      <c r="E7" s="13"><v>2.9</v></c>
    </row>
    <row r="8">
      <c r="A8" t="s" s="1">{SI(11)}</c>
      <c r="B8" s="9"><v>780</v></c>
      <c r="C8" s="7"><v>0.915</v></c>
      <c r="D8" s="7"><v>0.908</v></c>
      <c r="E8" s="13"><v>6.3</v></c>
    </row>
    <row r="9">
      <c r="A9" t="s" s="1">{SI(12)}</c>
      <c r="B9" s="9"><v>900</v></c>
      <c r="C9" s="7"><v>0.950</v></c>
      <c r="D9" s="7"><v>0.940</v></c>
      <c r="E9" s="13"><v>3.5</v></c>
    </row>
    <row r="10" ht="18" customHeight="1">
      <c r="A10" t="s" s="4">{SI(29)}</c>
      <c r="B10" s="10"><f>SUM(B4:B9)</f><v></v></c>
      <c r="C10" s="8"><f>AVERAGE(C4:C9)</f><v></v></c>
      <c r="D10" s="8"><f>AVERAGE(D4:D9)</f><v></v></c>
      <c r="E10" s="8"><f>AVERAGE(E4:E9)</f><v></v></c>
    </row>
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

with open(OUT + '/xl/worksheets/sheet2.xml', 'w', encoding='utf-8') as f:
    f.write(s2)
print("sheet2.xml done (使用数据)")

# ── SHEET 3: 成本分析 ────────────────────────────────────────────────────────
s3 = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView tabSelected="0" workbookViewId="0"/>
    <pane ySplit="3" topLeftCell="A4" activePane="bottomLeft" state="frozen"/>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25"
    xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols>
    <col min="1" max="1" width="18" customWidth="1"/>
    <col min="2" max="2" width="16" customWidth="1"/>
    <col min="3" max="3" width="18" customWidth="1"/>
    <col min="4" max="4" width="16" customWidth="1"/>
    <col min="5" max="5" width="12" customWidth="1"/>
    <col min="6" max="6" width="20" customWidth="1"/>
  </cols>
  <sheetData>
    <row r="1" ht="30" customHeight="1">
      <c r="A1" t="s" s="4">{SI(43)}</c>
    </row>
    <row r="2" ht="18" customHeight="1">
      <c r="A2" t="s" s="4">{SI(46)}</c>
    </row>
    <row r="3" ht="18" customHeight="1">
      <c r="A3" t="s" s="4">{SI(0)}</c>
      <c r="B3" t="s" s="4">{SI(35)}</c>
      <c r="C3" t="s" s="4">{SI(36)}</c>
      <c r="D3" t="s" s="4">{SI(37)}</c>
      <c r="E3" t="s" s="4">{SI(38)}</c>
      <c r="F3" t="s" s="4">{SI(6)}</c>
    </row>
    <row r="4">
      <c r="A4" t="s" s="1">{SI(7)}</c>
      <c r="B4" s="5"><v>50000</v></c>
      <c r="C4" s="5"><v>2800</v></c>
      <c r="D4" s="5"><v>8500</v></c>
      <c r="E4" s="8"><f>(D4-C4)/B4</f><v></v></c>
    </row>
    <row r="5">
      <c r="A5" t="s" s="1">{SI(8)}</c>
      <c r="B5" s="5"><v>80000</v></c>
      <c r="C5" s="5"><v>4200</v></c>
      <c r="D5" s="5"><v>12000</v></c>
      <c r="E5" s="8"><f>(D5-C5)/B5</f><v></v></c>
    </row>
    <row r="6">
      <c r="A6" t="s" s="1">{SI(9)}</c>
      <c r="B6" s="5"><v>35000</v></c>
      <c r="C6" s="5"><v>1800</v></c>
      <c r="D6" s="5"><v>5500</v></c>
      <c r="E6" s="8"><f>(D6-C6)/B6</f><v></v></c>
    </row>
    <row r="7">
      <c r="A7" t="s" s="1">{SI(10)}</c>
      <c r="B7" s="5"><v>120000</v></c>
      <c r="C7" s="5"><v>6500</v></c>
      <c r="D7" s="5"><v>18000</v></c>
      <c r="E7" s="8"><f>(D7-C7)/B7</f><v></v></c>
    </row>
    <row r="8">
      <c r="A8" t="s" s="1">{SI(11)}</c>
      <c r="B8" s="5"><v>25000</v></c>
      <c r="C8" s="5"><v>1200</v></c>
      <c r="D8" s="5"><v>3800</v></c>
      <c r="E8" s="8"><f>(D8-C8)/B8</f><v></v></c>
    </row>
    <row r="9">
      <c r="A9" t="s" s="1">{SI(12)}</c>
      <c r="B9" s="5"><v>60000</v></c>
      <c r="C9" s="5"><v>3100</v></c>
      <c r="D9" s="5"><v>9200</v></c>
      <c r="E9" s="8"><f>(D9-C9)/B9</f><v></v></c>
    </row>
    <row r="10" ht="18" customHeight="1">
      <c r="A10" t="s" s="4">{SI(29)}</c>
      <c r="B10" s="6"><f>SUM(B4:B9)</f><v></v></c>
      <c r="C10" s="6"><f>SUM(C4:C9)</f><v></v></c>
      <c r="D10" s="6"><f>SUM(D4:D9)</f><v></v></c>
      <c r="E10" s="8"><f>AVERAGE(E4:E9)</f><v></v></c>
    </row>
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

with open(OUT + '/xl/worksheets/sheet3.xml', 'w', encoding='utf-8') as f:
    f.write(s3)
print("sheet3.xml done (成本分析)")

# ── SHEET 4: 生命周期管理 ───────────────────────────────────────────────────
s4 = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView tabSelected="0" workbookViewId="0"/>
    <pane ySplit="3" topLeftCell="A4" activePane="bottomLeft" state="frozen"/>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25"
    xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols>
    <col min="1" max="1" width="18" customWidth="1"/>
    <col min="2" max="2" width="14" customWidth="1"/>
    <col min="3" max="3" width="14" customWidth="1"/>
    <col min="4" max="4" width="14" customWidth="1"/>
    <col min="5" max="5" width="10" customWidth="1"/>
    <col min="6" max="6" width="12" customWidth="1"/>
    <col min="7" max="7" width="20" customWidth="1"/>
  </cols>
  <sheetData>
    <row r="1" ht="30" customHeight="1">
      <c r="A1" t="s" s="4">{SI(43)}</c>
    </row>
    <row r="2" ht="18" customHeight="1">
      <c r="A2" t="s" s="4">{SI(47)}</c>
    </row>
    <row r="3" ht="18" customHeight="1">
      <c r="A3" t="s" s="4">{SI(0)}</c>
      <c r="B3" t="s" s="4">{SI(39)}</c>
      <c r="C3" t="s" s="4">{SI(40)}</c>
      <c r="D3" t="s" s="4">{SI(41)}</c>
      <c r="E3" t="s" s="4">{SI(2)}</c>
      <c r="F3" t="s" s="4">{SI(42)}</c>
      <c r="G3" t="s" s="4">{SI(6)}</c>
    </row>
    <!-- 对话客服 -->
    <row r="4">
      <c r="A4" t="s" s="1">{SI(7)}</c>
      <c r="B4" t="s" s="1">{SI(57)}</c>
      <c r="C4" t="s" s="1">{SI(63)}</c>
      <c r="D4" t="s" s="1">{SI(69)}</c>
      <c r="E4" t="s" s="1">{SI(19)}</c>
      <c r="F4" t="s" s="1">{SI(51)}</c>
    </row>
    <!-- 知识助手 -->
    <row r="5">
      <c r="A5" t="s" s="1">{SI(8)}</c>
      <c r="B5" t="s" s="1">{SI(58)}</c>
      <c r="C5" t="s" s="1">{SI(64)}</c>
      <c r="D5" t="s" s="1">{SI(70)}</c>
      <c r="E5" t="s" s="1">{SI(19)}</c>
      <c r="F5" t="s" s="1">{SI(52)}</c>
    </row>
    <!-- 流程自动化 -->
    <row r="6">
      <c r="A6" t="s" s="1">{SI(9)}</c>
      <c r="B6" t="s" s="1">{SI(59)}</c>
      <c r="C6" t="s" s="1">{SI(65)}</c>
      <c r="D6" t="s" s="1">{SI(71)}</c>
      <c r="E6" t="s" s="1">{SI(19)}</c>
      <c r="F6" t="s" s="1">{SI(53)}</c>
    </row>
    <!-- 数据分析 -->
    <row r="7">
      <c r="A7" t="s" s="1">{SI(10)}</c>
      <c r="B7" t="s" s="1">{SI(60)}</c>
      <c r="C7" t="s" s="1">{SI(66)}</c>
      <c r="D7" t="s" s="1">{SI(72)}</c>
      <c r="E7" t="s" s="1">{SI(21)}</c>
      <c r="F7" t="s" s="1">{SI(54)}</c>
    </row>
    <!-- 文案创作 -->
    <row r="8">
      <c r="A8" t="s" s="1">{SI(11)}</c>
      <c r="B8" t="s" s="1">{SI(61)}</c>
      <c r="C8" t="s" s="1">{SI(67)}</c>
      <c r="D8" t="s" s="1">{SI(73)}</c>
      <c r="E8" t="s" s="1">{SI(19)}</c>
      <c r="F8" t="s" s="1">{SI(55)}</c>
    </row>
    <!-- 图像识别 -->
    <row r="9">
      <c r="A9" t="s" s="1">{SI(12)}</c>
      <c r="B9" t="s" s="1">{SI(62)}</c>
      <c r="C9" t="s" s="1">{SI(68)}</c>
      <c r="D9" t="s" s="1">{SI(74)}</c>
      <c r="E9" t="s" s="1">{SI(19)}</c>
      <c r="F9" t="s" s="1">{SI(56)}</c>
    </row>
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

with open(OUT + '/xl/worksheets/sheet4.xml', 'w', encoding='utf-8') as f:
    f.write(s4)
print("sheet4.xml done (生命周期管理)")
print("All 4 sheets written.")
