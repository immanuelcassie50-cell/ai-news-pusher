#!/usr/bin/env python3
"""Build 01_客户需求挖掘记录表.xlsx"""
import os
import shutil
import subprocess

SKILL_DIR = 'C:/Users/Administrator/.claude/skills/Excel表格处理'
TEMPLATE = os.path.join(SKILL_DIR, 'templates/minimal_xlsx')
WORK_DIR = 'D:/CC/xlsx_work_01'
OUTPUT = 'D:/新课开发/营销/一线销售/02 深度需求挖掘：比AI更懂客户的提问能力/配套表单和指引-Excel版/01_客户需求挖掘记录表.xlsx'

# Copy template
if os.path.exists(WORK_DIR):
    shutil.rmtree(WORK_DIR)
shutil.copytree(TEMPLATE, WORK_DIR)

# Shared strings
shared_strings = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="32" uniqueCount="32">
  <si><t>客户需求挖掘记录表</t></si>
  <si><t>客户名称</t></si>
  <si><t>联系人</t></si>
  <si><t>职务</t></si>
  <si><t>电话</t></si>
  <si><t>行业</t></si>
  <si><t>记录日期</t></si>
  <si><t>销售顾问</t></si>
  <si><t>四步法探挖引验</t></si>
  <si><t>探（探索）</t></si>
  <si><t>表面诉求</t></si>
  <si><t>挖（挖掘）</t></si>
  <si><t>深层需求</t></si>
  <si><t>引（引导）</t></si>
  <si><t>价值认知</t></si>
  <si><t>验（验证）</t></si>
  <si><t>承诺意愿</t></si>
  <si><t>关键洞察</t></si>
  <si><t>客户痛点</t></si>
  <si><t>潜在顾虑</t></si>
  <si><t>购买动机</t></si>
  <si><t>后续行动计划</t></si>
  <si><t>行动事项</t></si>
  <si><t>负责人</t></si>
  <si><t>完成日期</t></si>
  <si><t>备注</t></si>
  <si><t>序号</t></si>
  <si><t>问题记录</t></si>
  <si><t>客户回答</t></si>
  <si><t>技巧应用</t></si>
  <si><t>效果评估</t></si>
  <si><t>A很好</t></si>
  <si><t>B一般</t></si>
  <si><t>C较差</t></si>
</sst>'''

with open(os.path.join(WORK_DIR, 'xl/sharedStrings.xml'), 'w', encoding='utf-8') as f:
    f.write(shared_strings)

# Sheet content
sheet1 = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView workbookViewId="0">
      <pane ySplit="5" topLeftCell="A6" activePane="bottomLeft" state="frozen"/>
    </sheetView>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="18" customHeight="1"/>
  <cols>
    <col min="1" max="1" width="12" customWidth="1"/>
    <col min="2" max="2" width="18" customWidth="1"/>
    <col min="3" max="3" width="12" customWidth="1"/>
    <col min="4" max="4" width="12" customWidth="1"/>
    <col min="5" max="5" width="14" customWidth="1"/>
    <col min="6" max="6" width="14" customWidth="1"/>
    <col min="7" max="7" width="14" customWidth="1"/>
    <col min="8" max="8" width="14" customWidth="1"/>
  </cols>
  <sheetData>
    <row r="1" ht="30" customHeight="1">
      <c r="A1" t="s" s="4"><v>0</v></c>
      <c r="B1" t="s" s="4"><v></v></c>
      <c r="C1" t="s" s="4"><v></v></c>
      <c r="D1" t="s" s="4"><v></v></c>
      <c r="E1" t="s" s="4"><v></v></c>
      <c r="F1" t="s" s="4"><v></v></c>
      <c r="G1" t="s" s="4"><v></v></c>
      <c r="H1" t="s" s="4"><v></v></c>
    </row>
    <row r="2" ht="20" customHeight="1">
      <c r="A2" t="s" s="1"><v>1</v></c>
      <c r="B2" t="s" s="0"><v></v></c>
      <c r="C2" t="s" s="1"><v>2</v></c>
      <c r="D2" t="s" s="0"><v></v></c>
      <c r="E2" t="s" s="1"><v>3</v></c>
      <c r="F2" t="s" s="0"><v></v></c>
      <c r="G2" t="s" s="1"><v>4</v></c>
      <c r="H2" t="s" s="0"><v></v></c>
    </row>
    <row r="3" ht="20" customHeight="1">
      <c r="A3" t="s" s="0"><v>5</v></c>
      <c r="B3" t="s" s="0"><v></v></c>
      <c r="C3" t="s" s="0"><v>6</v></c>
      <c r="D3" t="s" s="0"><v></v></c>
      <c r="E3" t="s" s="0"><v>7</v></c>
      <c r="F3" t="s" s="0"><v></v></c>
      <c r="G3" t="s" s="0"><v>8</v></c>
      <c r="H3" t="s" s="0"><v></v></c>
    </row>
    <row r="4" ht="20" customHeight="1">
      <c r="A4" t="s" s="1"><v>5</v></c>
      <c r="B4" t="s" s="0"><v></v></c>
      <c r="C4" t="s" s="1"><v></v></c>
      <c r="D4" t="s" s="0"><v></v></c>
      <c r="E4" t="s" s="1"><v></v></c>
      <c r="F4" t="s" s="0"><v></v></c>
      <c r="G4" t="s" s="1"><v></v></c>
      <c r="H4" t="s" s="0"><v></v></c>
    </row>
    <row r="5" ht="22" customHeight="1">
      <c r="A5" t="s" s="4"><v>9</v></c>
      <c r="B5" t="s" s="4"><v></v></c>
      <c r="C5" t="s" s="4"><v></v></c>
      <c r="D5" t="s" s="4"><v></v></c>
      <c r="E5" t="s" s="4"><v></v></c>
      <c r="F5" t="s" s="4"><v></v></c>
      <c r="G5" t="s" s="4"><v></v></c>
      <c r="H5" t="s" s="4"><v></v></c>
    </row>
    <row r="6" ht="20" customHeight="1">
      <c r="A6" t="s" s="4"><v>26</v></c>
      <c r="B6" t="s" s="4"><v>10</v></c>
      <c r="C6" t="s" s="4"><v>11</v></c>
      <c r="D6" t="s" s="4"><v>12</v></c>
      <c r="E6" t="s" s="4"><v>13</v></c>
      <c r="F6" t="s" s="4"><v>14</v></c>
      <c r="G6" t="s" s="4"><v>15</v></c>
      <c r="H6" t="s" s="4"><v>16</v></c>
    </row>'''

# Add data rows 7-14
for row_num in range(7, 15):
    sheet1 += f'''
    <row r="{row_num}" ht="40" customHeight="1">
      <c r="A{row_num}" t="s" s="0"><v></v></c>
      <c r="B{row_num}" t="s" s="0"><v></v></c>
      <c r="C{row_num}" t="s" s="0"><v></v></c>
      <c r="D{row_num}" t="s" s="0"><v></v></c>
      <c r="E{row_num}" t="s" s="0"><v></v></c>
      <c r="F{row_num}" t="s" s="0"><v></v></c>
      <c r="G{row_num}" t="s" s="0"><v></v></c>
      <c r="H{row_num}" t="s" s="0"><v></v></c>
    </row>'''

# Key insights section
sheet1 += '''
    <row r="15" ht="22" customHeight="1">
      <c r="A15" t="s" s="4"><v>17</v></c>
      <c r="B15" t="s" s="4"><v></v></c>
      <c r="C15" t="s" s="4"><v></v></c>
      <c r="D15" t="s" s="4"><v></v></c>
      <c r="E15" t="s" s="4"><v></v></c>
      <c r="F15" t="s" s="4"><v></v></c>
      <c r="G15" t="s" s="4"><v></v></c>
      <c r="H15" t="s" s="4"><v></v></c>
    </row>
    <row r="16" ht="50" customHeight="1">
      <c r="A16" t="s" s="1"><v>18</v></c>
      <c r="B16" t="s" s="0"><v></v></c>
      <c r="C16" t="s" s="1"><v>19</v></c>
      <c r="D16" t="s" s="0"><v></v></c>
      <c r="E16" t="s" s="1"><v>20</v></c>
      <c r="F16" t="s" s="0"><v></v></c>
      <c r="G16" t="s" s="0"><v></v></c>
      <c r="H16" t="s" s="0"><v></v></c>
    </row>
    <row r="17" ht="50" customHeight="1">
      <c r="A17" t="s" s="0"><v></v></c>
      <c r="B17" t="s" s="0"><v></v></c>
      <c r="C17" t="s" s="0"><v></v></c>
      <c r="D17" t="s" s="0"><v></v></c>
      <c r="E17" t="s" s="0"><v></v></c>
      <c r="F17" t="s" s="0"><v></v></c>
      <c r="G17" t="s" s="0"><v></v></c>
      <c r="H17" t="s" s="0"><v></v></c>
    </row>
    <row r="18" ht="22" customHeight="1">
      <c r="A18" t="s" s="4"><v>21</v></c>
      <c r="B18" t="s" s="4"><v></v></c>
      <c r="C18" t="s" s="4"><v></v></c>
      <c r="D18" t="s" s="4"><v></v></c>
      <c r="E18" t="s" s="4"><v></v></c>
      <c r="F18" t="s" s="4"><v></v></c>
      <c r="G18" t="s" s="4"><v></v></c>
      <c r="H18" t="s" s="4"><v></v></c>
    </row>
    <row r="19" ht="20" customHeight="1">
      <c r="A19" t="s" s="4"><v>22</v></c>
      <c r="B19" t="s" s="4"><v>23</v></c>
      <c r="C19" t="s" s="4"><v>24</v></c>
      <c r="D19" t="s" s="4"><v>25</v></c>
      <c r="E19" t="s" s="4"><v></v></c>
      <c r="F19" t="s" s="4"><v></v></c>
      <c r="G19" t="s" s="4"><v></v></c>
      <c r="H19" t="s" s="4"><v></v></c>
    </row>'''

# Add follow-up rows 20-24
for row_num in range(20, 25):
    sheet1 += f'''
    <row r="{row_num}" ht="25" customHeight="1">
      <c r="A{row_num}" t="s" s="0"><v></v></c>
      <c r="B{row_num}" t="s" s="0"><v></v></c>
      <c r="C{row_num}" t="s" s="0"><v></v></c>
      <c r="D{row_num}" t="s" s="0"><v></v></c>
      <c r="E{row_num}" t="s" s="0"><v></v></c>
      <c r="F{row_num}" t="s" s="0"><v></v></c>
      <c r="G{row_num}" t="s" s="0"><v></v></c>
      <c r="H{row_num}" t="s" s="0"><v></v></c>
    </row>'''

sheet1 += '''
    <row r="25" ht="20" customHeight="1">
      <c r="A25" t="s" s="1"><v>25</v></c>
      <c r="B25" t="s" s="0"><v></v></c>
      <c r="C25" t="s" s="0"><v></v></c>
      <c r="D25" t="s" s="0"><v></v></c>
      <c r="E25" t="s" s="0"><v></v></c>
      <c r="F25" t="s" s="0"><v></v></c>
      <c r="G25" t="s" s="0"><v></v></c>
      <c r="H25" t="s" s="0"><v></v></c>
    </row>
  </sheetData>
  <pageMargins left="0.5" right="0.5" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
  <printOptions horizontalCentered="1"/>
  <pageSetup orientation="landscape" paperSize="9" horizontalDpi="300" verticalDpi="300"/>
</worksheet>'''

with open(os.path.join(WORK_DIR, 'xl/worksheets/sheet1.xml'), 'w', encoding='utf-8') as f:
    f.write(sheet1)

# Pack to xlsx
result = subprocess.run([
    'python3', os.path.join(SKILL_DIR, 'scripts/xlsx_pack.py'),
    WORK_DIR, OUTPUT
], capture_output=True, text=True)

if result.returncode == 0:
    print(f'Successfully created: {OUTPUT}')
else:
    print(f'Error: {result.stderr}')