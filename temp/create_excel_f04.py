#!/usr/bin/env python3
"""Create F04: 高频问题预备应答卡"""
import os, shutil

src = "C:/Users/Administrator/.claude/skills/Excel表格处理/templates/minimal_xlsx"
dst = "D:/CC/temp/xlsx_f04"
if os.path.exists(dst):
    shutil.rmtree(dst)
shutil.copytree(src, dst)

shared = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="20" uniqueCount="20">
  <si><t>高频问题预备应答卡</t></si>
  <si><t>高频问题</t></si>
  <si><t>问题本质</t></si>
  <si><t>应答框架</t></si>
  <si><t>参考话术</t></si>
  <si><t>问题一：失败了你负责吗？</t></si>
  <si><t>高层在问：谁承担执行责任？谁承担决策责任？</t></si>
  <si><t>责任分层：执行层vs决策层，不要说"我负全责"</t></si>
  <si><t>问题二：凭什么你觉得能成？</t></si>
  <si><t>高层在问：成功要素是什么？有什么证据？</t></si>
  <si><t>列出3个关键成功要素，每个要有验证数据/证据</t></si>
  <si><t>问题三：如果不成功呢？</t></si>
  <si><t>高层在问：止损标准是什么？最坏情况可控吗？</t></si>
  <si><t>设定明确的止损标准，说明止损后的处理方式</t></si>
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
    <col min="3" max="3" width="35" customWidth="1"/>
    <col min="4" max="4" width="40" customWidth="1"/>
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
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75"/>
</worksheet>'''

with open(f"{dst}/xl/worksheets/sheet1.xml", "w", encoding="utf-8") as f:
    f.write(ws)

wb = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheets>
    <sheet name="高频问题应答卡" sheetId="1" r:id="rId1"/>
  </sheets>
  <calcPr calcId="0"/>
</workbook>'''

with open(f"{dst}/xl/workbook.xml", "w", encoding="utf-8") as f:
    f.write(wb)
print("F04 prepared")
