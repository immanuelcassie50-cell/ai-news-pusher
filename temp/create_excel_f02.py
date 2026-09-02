#!/usr/bin/env python3
"""Create F02: 容错成本量化计算表"""
import os, shutil

src = "C:/Users/Administrator/.claude/skills/Excel表格处理/templates/minimal_xlsx"
dst = "D:/CC/temp/xlsx_f02"
if os.path.exists(dst):
    shutil.rmtree(dst)
shutil.copytree(src, dst)

shared = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="30" uniqueCount="30">
  <si><t>容错成本量化计算表</t></si>
  <si><t>成本类型</t></si>
  <si><t>计算依据</t></si>
  <si><t>金额（万元）</t></si>
  <si><t>说明</t></si>
  <si><t>一、变革失败成本（Error Cost）</t></si>
  <si><t>直接成本损失</t></si>
  <si><t>系统投资+实施+培训费用</t></si>
  <si><t>间接成本损失</t></si>
  <si><t>机会成本+时间成本</t></si>
  <si><t>声誉成本损失</t></si>
  <si><t>项目失败对团队士气影响</t></si>
  <si><t>最坏情况成本</t></si>
  <si><t>假设完全失败的极端情况</t></si>
  <si><t>小计</t></si>
  <si><t>二、不变革成本（Inaction Cost）</t></si>
  <si><t>效率损失</t></si>
  <si><t>竞争对手每年领先幅度估算</t></si>
  <si><t>能力损失</t></si>
  <si><t>团队学习机会的丧失</t></si>
  <si><t>市场损失</t></si>
  <si><t>客户需求未被满足的损失</t></si>
  <si><t>战略损失</t></si>
  <si><t>未来转型成本增加</t></si>
  <si><t>小计</t></si>
  <si><t>三、综合计算</t></si>
  <si><t>变革净收益</t></si>
  <si><t>变革收益 - 变革成本×失败概率 - 不变革成本</t></si>
  <si><t>授权价值</t></si>
  <si><t>争取到的容错空间价值</t></si>
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
    <col min="1" max="1" width="22" customWidth="1"/>
    <col min="2" max="2" width="35" customWidth="1"/>
    <col min="3" max="3" width="18" customWidth="1"/>
    <col min="4" max="4" width="35" customWidth="1"/>
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
      <c r="B4" t="s" s="0"><v>7</v></c>
      <c r="C4" s="5"><v></v></c>
      <c r="D4" t="s" s="0"><v></v></c>
    </row>
    <row r="5">
      <c r="A5" t="s" s="0"><v>8</v></c>
      <c r="B5" t="s" s="0"><v>9</v></c>
      <c r="C5" s="5"><v></v></c>
      <c r="D5" t="s" s="0"><v></v></c>
    </row>
    <row r="6">
      <c r="A6" t="s" s="0"><v>10</v></c>
      <c r="B6" t="s" s="0"><v>11</v></c>
      <c r="C6" s="5"><v></v></c>
      <c r="D6" t="s" s="0"><v></v></c>
    </row>
    <row r="7">
      <c r="A7" t="s" s="0"><v>12</v></c>
      <c r="B7" t="s" s="0"><v>13</v></c>
      <c r="C7" s="5"><v></v></c>
      <c r="D7" t="s" s="0"><v></v></c>
    </row>
    <row r="8">
      <c r="A8" t="s" s="4"><v>14</v></c>
      <c r="C8" s="6"><f>SUM(C4:C7)</f><v></v></c>
    </row>
    <row r="9" ht="22" customHeight="1">
      <c r="A9" t="s" s="4"><v>15</v></c>
    </row>
    <row r="10">
      <c r="A10" t="s" s="0"><v>16</v></c>
      <c r="B10" t="s" s="0"><v>17</v></c>
      <c r="C10" s="5"><v></v></c>
      <c r="D10" t="s" s="0"><v></v></c>
    </row>
    <row r="11">
      <c r="A11" t="s" s="0"><v>18</v></c>
      <c r="B11" t="s" s="0"><v>19</v></c>
      <c r="C11" s="5"><v></v></c>
      <c r="D11" t="s" s="0"><v></v></c>
    </row>
    <row r="12">
      <c r="A12" t="s" s="0"><v>20</v></c>
      <c r="B12" t="s" s="0"><v>21</v></c>
      <c r="C12" s="5"><v></v></c>
      <c r="D12" t="s" s="0"><v></v></c>
    </row>
    <row r="13">
      <c r="A13" t="s" s="0"><v>22</v></c>
      <c r="B13" t="s" s="0"><v>23</v></c>
      <c r="C13" s="5"><v></v></c>
      <c r="D13" t="s" s="0"><v></v></c>
    </row>
    <row r="14">
      <c r="A14" t="s" s="4"><v>24</v></c>
      <c r="C14" s="6"><f>SUM(C10:C13)</f><v></v></c>
    </row>
    <row r="15" ht="22" customHeight="1">
      <c r="A15" t="s" s="4"><v>25</v></c>
    </row>
    <row r="16">
      <c r="A16" t="s" s="0"><v>26</v></c>
      <c r="C16" s="6"><v></v></c>
    </row>
    <row r="17">
      <c r="A17" t="s" s="0"><v>27</v></c>
      <c r="C17" s="5"><v></v></c>
    </row>
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75"/>
</worksheet>'''

with open(f"{dst}/xl/worksheets/sheet1.xml", "w", encoding="utf-8") as f:
    f.write(ws)

wb = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheets>
    <sheet name="容错成本量化" sheetId="1" r:id="rId1"/>
  </sheets>
  <calcPr calcId="0"/>
</workbook>'''

with open(f"{dst}/xl/workbook.xml", "w", encoding="utf-8") as f:
    f.write(wb)

print("F02 prepared")
