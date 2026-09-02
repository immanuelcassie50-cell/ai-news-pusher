#!/usr/bin/env python3
"""Create F06: 汇报叙事自检清单"""
import os, shutil

src = "C:/Users/Administrator/.claude/skills/Excel表格处理/templates/minimal_xlsx"
dst = "D:/CC/temp/xlsx_f06"
if os.path.exists(dst):
    shutil.rmtree(dst)
shutil.copytree(src, dst)

shared = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="26" uniqueCount="26">
  <si><t>汇报叙事自检清单</t></si>
  <si><t>检查维度</t></si>
  <si><t>检查项</t></si>
  <si><t>是/否</t></si>
  <si><t>备注</t></si>
  <si><t>受众匹配</t></si>
  <si><t>语言是否与高层决策风格匹配</t></si>
  <si><t>重点是否与高层核心关切匹配</t></si>
  <si><t>数据是否经过高层能理解的翻译</t></si>
  <si><t>逻辑完整</t></si>
  <si><t>开场是否有明确的核心信息</t></si>
  <si><t>论证是否有足够支撑数据</t></si>
  <si><t>结尾是否有明确的行动请求</t></si>
  <si><t>风险透明</t></si>
  <si><t>是否主动坦诚已知风险</t></si>
  <si><t>风险是否有应对预案</t></si>
  <si><t>止损边界是否已明确</t></si>
  <si><t>信任建立</t></si>
  <si><t>数据来源是否可验证</t></si>
  <si><t>承诺是否有把握兑现</t></si>
  <si><t>不确定事项是否已说明</t></si>
  <si><t>授权明确</t></si>
  <si><t>请求的授权范围是否清晰</t></si>
  <si><t>最小授权是否已说明</t></si>
  <si><t>汇报频率和节点是否已约定</t></si>
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
    <col min="2" max="2" width="40" customWidth="1"/>
    <col min="3" max="3" width="12" customWidth="1"/>
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
      <c r="C4" t="s" s="0"><v></v></c>
      <c r="D4" t="s" s="0"><v></v></c>
    </row>
    <row r="5">
      <c r="A5" t="s" s="0"><v>7</v></c>
      <c r="B5" t="s" s="0"><v></v></c>
      <c r="C5" t="s" s="0"><v></v></c>
      <c r="D5" t="s" s="0"><v></v></c>
    </row>
    <row r="6">
      <c r="A6" t="s" s="0"><v>8</v></c>
      <c r="B6" t="s" s="0"><v></v></c>
      <c r="C6" t="s" s="0"><v></v></c>
      <c r="D6" t="s" s="0"><v></v></c>
    </row>
    <row r="7" ht="22" customHeight="1">
      <c r="A7" t="s" s="4"><v>9</v></c>
    </row>
    <row r="8">
      <c r="A8" t="s" s="0"><v>10</v></c>
      <c r="B8" t="s" s="0"><v></v></c>
      <c r="C8" t="s" s="0"><v></v></c>
      <c r="D8" t="s" s="0"><v></v></c>
    </row>
    <row r="9">
      <c r="A9" t="s" s="0"><v>11</v></c>
      <c r="B9" t="s" s="0"><v></v></c>
      <c r="C9" t="s" s="0"><v></v></c>
      <c r="D9" t="s" s="0"><v></v></c>
    </row>
    <row r="10">
      <c r="A10" t="s" s="0"><v>12</v></c>
      <c r="B10" t="s" s="0"><v></v></c>
      <c r="C10" t="s" s="0"><v></v></c>
      <c r="D10" t="s" s="0"><v></v></c>
    </row>
    <row r="11" ht="22" customHeight="1">
      <c r="A11" t="s" s="4"><v>13</v></c>
    </row>
    <row r="12">
      <c r="A12" t="s" s="0"><v>14</v></c>
      <c r="B12" t="s" s="0"><v></v></c>
      <c r="C12" t="s" s="0"><v></v></c>
      <c r="D12" t="s" s="0"><v></v></c>
    </row>
    <row r="13">
      <c r="A13" t="s" s="0"><v>15</v></c>
      <c r="B13" t="s" s="0"><v></v></c>
      <c r="C13" t="s" s="0"><v></v></c>
      <c r="D13" t="s" s="0"><v></v></c>
    </row>
    <row r="14">
      <c r="A14" t="s" s="0"><v>16</v></c>
      <c r="B14" t="s" s="0"><v></v></c>
      <c r="C14" t="s" s="0"><v></v></c>
      <c r="D14" t="s" s="0"><v></v></c>
    </row>
    <row r="15" ht="22" customHeight="1">
      <c r="A15" t="s" s="4"><v>17</v></c>
    </row>
    <row r="16">
      <c r="A16" t="s" s="0"><v>18</v></c>
      <c r="B16" t="s" s="0"><v></v></c>
      <c r="C16" t="s" s="0"><v></v></c>
      <c r="D16" t="s" s="0"><v></v></c>
    </row>
    <row r="17">
      <c r="A17" t="s" s="0"><v>19</v></c>
      <c r="B17" t="s" s="0"><v></v></c>
      <c r="C17" t="s" s="0"><v></v></c>
      <c r="D17" t="s" s="0"><v></v></c>
    </row>
    <row r="18">
      <c r="A18" t="s" s="0"><v>20</v></c>
      <c r="B18" t="s" s="0"><v></v></c>
      <c r="C18" t="s" s="0"><v></v></c>
      <c r="D18" t="s" s="0"><v></v></c>
    </row>
    <row r="19" ht="22" customHeight="1">
      <c r="A19" t="s" s="4"><v>21</v></c>
    </row>
    <row r="20">
      <c r="A20" t="s" s="0"><v>22</v></c>
      <c r="B20" t="s" s="0"><v></v></c>
      <c r="C20" t="s" s="0"><v></v></c>
      <c r="D20" t="s" s="0"><v></v></c>
    </row>
    <row r="21">
      <c r="A21" t="s" s="0"><v>23</v></c>
      <c r="B21" t="s" s="0"><v></v></c>
      <c r="C21" t="s" s="0"><v></v></c>
      <c r="D21" t="s" s="0"><v></v></c>
    </row>
    <row r="22">
      <c r="A22" t="s" s="0"><v>24</v></c>
      <c r="B22" t="s" s="0"><v></v></c>
      <c r="C22" t="s" s="0"><v></v></c>
      <c r="D22" t="s" s="0"><v></v></c>
    </row>
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75"/>
</worksheet>'''

with open(f"{dst}/xl/worksheets/sheet1.xml", "w", encoding="utf-8") as f:
    f.write(ws)

wb = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheets>
    <sheet name="汇报自检清单" sheetId="1" r:id="rId1"/>
  </sheets>
  <calcPr calcId="0"/>
</workbook>'''

with open(f"{dst}/xl/workbook.xml", "w", encoding="utf-8") as f:
    f.write(wb)
print("F06 prepared")
