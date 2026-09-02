#!/usr/bin/env python3
"""Create F03: 高层决策者画像分析表"""
import os, shutil

src = "C:/Users/Administrator/.claude/skills/Excel表格处理/templates/minimal_xlsx"
dst = "D:/CC/temp/xlsx_f03"
if os.path.exists(dst):
    shutil.rmtree(dst)
shutil.copytree(src, dst)

shared = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="25" uniqueCount="25">
  <si><t>高层决策者画像分析表</t></si>
  <si><t>分析维度</t></si>
  <si><t>财务导向型</t></si>
  <si><t>战略导向型</t></si>
  <si><t>关系导向型</t></si>
  <si><t>决策类型</t></si>
  <si><t>风险承担型/风险规避型</t></si>
  <si><t>趋势把握型/格局构建型</t></si>
  <si><t>人心导向型/稳定压倒型</t></si>
  <si><t>核心关切</t></si>
  <si><t>ROI、回报率、投资回收期</t></si>
  <si><t>行业趋势、竞争优势、时机</t></si>
  <si><t>团队稳定、人心向背、员工发展</t></si>
  <si><t>常见问题</t></si>
  <si><t>"投资回报率多少？"</t></si>
  <si><t>"竞争对手怎么做？"</t></si>
  <si><t>"团队怎么看？"</t></si>
  <si><t>沟通语言</t></si>
  <si><t>数字、计算、对比</t></si>
  <si><t>行业、竞争、方向</t></si>
  <si><t>员工、发展、关怀</t></si>
  <si><t>决策风格</t></si>
  <si><t>谨慎但果断</t></si>
  <si><t>全局视角</t></si>
  <si><t>民主协商</t></si>
  <si><t>最有效策略</t></si>
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
    <col min="2" max="2" width="25" customWidth="1"/>
    <col min="3" max="3" width="25" customWidth="1"/>
    <col min="4" max="4" width="25" customWidth="1"/>
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
    <row r="3">
      <c r="A3" t="s" s="0"><v>5</v></c>
      <c r="B3" t="s" s="0"><v>6</v></c>
      <c r="C3" t="s" s="0"><v>7</v></c>
      <c r="D3" t="s" s="0"><v>8</v></c>
    </row>
    <row r="4">
      <c r="A4" t="s" s="0"><v>9</v></c>
      <c r="B4" t="s" s="0"><v>10</v></c>
      <c r="C4" t="s" s="0"><v>11</v></c>
      <c r="D4" t="s" s="0"><v>12</v></c>
    </row>
    <row r="5">
      <c r="A5" t="s" s="0"><v>13</v></c>
      <c r="B5" t="s" s="0"><v>14</v></c>
      <c r="C5" t="s" s="0"><v>15</v></c>
      <c r="D5" t="s" s="0"><v>16</v></c>
    </row>
    <row r="6">
      <c r="A6" t="s" s="0"><v>17</v></c>
      <c r="B6" t="s" s="0"><v>18</v></c>
      <c r="C6" t="s" s="0"><v>19</v></c>
      <c r="D6" t="s" s="0"><v>20</v></c>
    </row>
    <row r="7">
      <c r="A7" t="s" s="0"><v>21</v></c>
      <c r="B7" t="s" s="0"><v>22</v></c>
      <c r="C7" t="s" s="0"><v>23</v></c>
      <c r="D7" t="s" s="0"><v>24</v></c>
    </row>
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75"/>
</worksheet>'''

with open(f"{dst}/xl/worksheets/sheet1.xml", "w", encoding="utf-8") as f:
    f.write(ws)

wb = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheets>
    <sheet name="决策者画像" sheetId="1" r:id="rId1"/>
  </sheets>
  <calcPr calcId="0"/>
</workbook>'''

with open(f"{dst}/xl/workbook.xml", "w", encoding="utf-8") as f:
    f.write(wb)
print("F03 prepared")
