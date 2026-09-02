#!/usr/bin/env python3
"""Create F01: 向上说服四步法模板"""
import os
import shutil

# Copy template
src = "C:/Users/Administrator/.claude/skills/Excel表格处理/templates/minimal_xlsx"
dst = "D:/CC/temp/xlsx_f01"
if os.path.exists(dst):
    shutil.rmtree(dst)
shutil.copytree(src, dst)

# Write sharedStrings
shared_strings = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="24" uniqueCount="24">
  <si><t>向上说服四步法模板</t></si>
  <si><t>步骤</t></si>
  <si><t>核心任务</t></si>
  <si><t>具体行动</t></si>
  <si><t>关键要点</t></si>
  <si><t>第一步：识别类型</t></si>
  <si><t>判断高层决策者类型</t></si>
  <si><t>分析决策风格</t></si>
  <si><t>识别关键决策人</t></si>
  <si><t>财务导向型：关注ROI、回报率、风险</t></si>
  <si><t>战略导向型：关注趋势、竞争力、时机</t></si>
  <si><t>关系导向型：关注人、团队、士气</t></si>
  <si><t>第二步：调整语言</t></si>
  <si><t>用高层的语言包装提案</t></si>
  <si><t>翻译专业术语</t></si>
  <si><t>调整沟通频道</t></si>
  <si><t>第三步：建立信任</t></si>
  <si><t>展示专业能力</t></si>
  <si><t>主动坦诚风险</t></si>
  <si><t>提供验证数据</t></si>
  <si><t>第四步：争取授权</t></si>
  <si><t>明确授权请求</t></si>
  <si><t>设计最小授权</t></si>
  <si><t>设定止损边界</t></si>
</sst>'''

with open(f"{dst}/xl/sharedStrings.xml", "w", encoding="utf-8") as f:
    f.write(shared_strings)

# Write worksheet
worksheet = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView workbookViewId="0"/>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols>
    <col min="1" max="1" width="18" customWidth="1"/>
    <col min="2" max="2" width="20" customWidth="1"/>
    <col min="3" max="3" width="35" customWidth="1"/>
    <col min="4" max="4" width="45" customWidth="1"/>
  </cols>
  <sheetData>
    <row r="1" ht="24" customHeight="1">
      <c r="A1" t="s" s="4"><v>0</v></c>
      <c r="B1" t="s" s="4"><v>1</v></c>
      <c r="C1" t="s" s="4"><v>2</v></c>
      <c r="D1" t="s" s="4"><v>3</v></c>
    </row>
    <row r="2" ht="30" customHeight="1">
      <c r="A2" t="s" s="4"><v>4</v></c>
      <c r="B2" t="s" s="1"><v>5</v></c>
      <c r="C2" t="s" s="1"><v>6</v></c>
      <c r="D2" t="s" s="1"><v>7</v></c>
    </row>
    <row r="3">
      <c r="A3" t="s" s="0"><v>8</v></c>
      <c r="B3" t="s" s="0"><v>9</v></c>
      <c r="C3" t="s" s="0"><v></v></c>
      <c r="D3" t="s" s="0"><v></v></c>
    </row>
    <row r="4">
      <c r="A4" t="s" s="0"><v>10</v></c>
      <c r="B4" t="s" s="0"><v>11</v></c>
      <c r="C4" t="s" s="0"><v></v></c>
      <c r="D4" t="s" s="0"><v></v></c>
    </row>
    <row r="5">
      <c r="A5" t="s" s="0"><v>11</v></c>
      <c r="B5" t="s" s="0"><v></v></c>
      <c r="C5" t="s" s="0"><v></v></c>
      <c r="D5" t="s" s="0"><v></v></c>
    </row>
    <row r="6" ht="30" customHeight="1">
      <c r="A6" t="s" s="4"><v>12</v></c>
      <c r="B6" t="s" s="1"><v>13</v></c>
      <c r="C6" t="s" s="1"><v>14</v></c>
      <c r="D6" t="s" s="1"><v>15</v></c>
    </row>
    <row r="7">
      <c r="A7" t="s" s="0"><v></v></c>
      <c r="B7" t="s" s="0"><v></v></c>
      <c r="C7" t="s" s="0"><v></v></c>
      <c r="D7" t="s" s="0"><v></v></c>
    </row>
    <row r="8" ht="30" customHeight="1">
      <c r="A8" t="s" s="4"><v>16</v></c>
      <c r="B8" t="s" s="1"><v>17</v></c>
      <c r="C8" t="s" s="1"><v>18</v></c>
      <c r="D8" t="s" s="1"><v>19</v></c>
    </row>
    <row r="9">
      <c r="A9" t="s" s="0"><v></v></c>
      <c r="B9" t="s" s="0"><v></v></c>
      <c r="C9" t="s" s="0"><v></v></c>
      <c r="D9" t="s" s="0"><v></v></c>
    </row>
    <row r="10" ht="30" customHeight="1">
      <c r="A10" t="s" s="4"><v>20</v></c>
      <c r="B10" t="s" s="1"><v>21</v></c>
      <c r="C10" t="s" s="1"><v>22</v></c>
      <c r="D10" t="s" s="1"><v>23</v></c>
    </row>
    <row r="11">
      <c r="A11" t="s" s="0"><v></v></c>
      <c r="B11" t="s" s="0"><v></v></c>
      <c r="C11" t="s" s="0"><v></v></c>
      <c r="D11" t="s" s="0"><v></v></c>
    </row>
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

with open(f"{dst}/xl/worksheets/sheet1.xml", "w", encoding="utf-8") as f:
    f.write(worksheet)

# Update workbook sheet name
workbook = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheets>
    <sheet name="向上说服四步法" sheetId="1" r:id="rId1"/>
  </sheets>
  <calcPr calcId="0"/>
</workbook>'''

with open(f"{dst}/xl/workbook.xml", "w", encoding="utf-8") as f:
    f.write(workbook)

print("F01 template prepared at:", dst)
