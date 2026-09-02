#!/usr/bin/env python3
"""Create F05: 最小授权争取策略表"""
import os, shutil

src = "C:/Users/Administrator/.claude/skills/Excel表格处理/templates/minimal_xlsx"
dst = "D:/CC/temp/xlsx_f05"
if os.path.exists(dst):
    shutil.rmtree(dst)
shutil.copytree(src, dst)

shared = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="18" uniqueCount="18">
  <si><t>最小授权争取策略表</t></si>
  <si><t>授权维度</t></si>
  <si><t>说明</t></si>
  <si><t>争取策略</t></si>
  <si><t>底线</t></si>
  <si><t>范围授权</t></si>
  <si><t>项目边界的清晰定义</t></si>
  <si><t>从小范围试点开始</t></si>
  <si><t>时间授权</t></si>
  <si><t>试点周期的明确约定</t></si>
  <si><t>分阶段节点验收</t></si>
  <si><t>资源授权</t></si>
  <si><t>预算和人力的明确额度</t></si>
  <si><t>用最小资源启动</t></si>
  <si><t>决策授权</t></si>
  <si><t>哪些决策可以自己做，哪些需要上报</t></si>
  <si><t>建立定期汇报机制</t></si>
  <si><t>分阶段授权策略</t></si>
</sst>'''

with open(f"{dst}/xl/sharedStrings.xml", "w", encoding="utf-8") as f:
    f.write(shared)

ws = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView workbookViewId="0"/>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols>
    <col min="1" max="1" width="15" customWidth="1"/>
    <col min="2" max="2" width="30" customWidth="1"/>
    <col min="3" max="3" width="35" customWidth="1"/>
    <col min="4" max="4" width="30" customWidth="1"/>
  </cols>
  <sheetData>
    <row r="1" ht="22" customHeight="1">
      <c r="A1" t="s" s="4"><v>0</v></c>
    </row>
    <row r="2" ht="20" customHeight="1">
      <c r="A2" t="s" s="4"><v>1</v></c>
      <c r="B2" t="s" s="4"><v>2</v></c>
      <c r="C2" t="s" s="4"><v>3</v></c>
      <c r="D2" t="s" s="4"><v>4</v></c>
    </row>
    <row r="3" ht="22" customHeight="1">
      <c r="A3" t="s" s="4"><v>5</v></c>
    </row>
    <row r="4">
      <c r="A4" t="s" s="0"><v>6</v></c>
      <c r="B4" t="s" s="0"><v></v></c>
      <c r="C4" t="s" s="0"><v>7</v></c>
      <c r="D4" t="s" s="0"><v></v></c>
    </row>
    <row r="5" ht="22" customHeight="1">
      <c r="A5" t="s" s="4"><v>8</v></c>
    </row>
    <row r="6">
      <c r="A6" t="s" s="0"><v>9</v></c>
      <c r="B6" t="s" s="0"><v></v></c>
      <c r="C6" t="s" s="0"><v>10</v></c>
      <c r="D6" t="s" s="0"><v></v></c>
    </row>
    <row r="7" ht="22" customHeight="1">
      <c r="A7" t="s" s="4"><v>11</v></c>
    </row>
    <row r="8">
      <c r="A8" t="s" s="0"><v>12</v></c>
      <c r="B8" t="s" s="0"><v></v></c>
      <c r="C8" t="s" s="0"><v>13</v></c>
      <c r="D8" t="s" s="0"><v></v></c>
    </row>
    <row r="9" ht="22" customHeight="1">
      <c r="A9" t="s" s="4"><v>14</v></c>
    </row>
    <row r="10">
      <c r="A10" t="s" s="0"><v>15</v></c>
      <c r="B10" t="s" s="0"><v></v></c>
      <c r="C10" t="s" s="0"><v>16</v></c>
      <c r="D10" t="s" s="0"><v></v></c>
    </row>
    <row r="11" ht="22" customHeight="1">
      <c r="A11" t="s" s="4"><v>17</v></c>
    </row>
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75"/>
</worksheet>'''

with open(f"{dst}/xl/worksheets/sheet1.xml", "w", encoding="utf-8") as f:
    f.write(ws)

wb = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheets>
    <sheet name="最小授权争取" sheetId="1" r:id="rId1"/>
  </sheets>
  <calcPr calcId="0"/>
</workbook>'''

with open(f"{dst}/xl/workbook.xml", "w", encoding="utf-8") as f:
    f.write(wb)
print("F05 prepared")
