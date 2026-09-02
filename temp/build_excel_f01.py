#!/usr/bin/env python3
"""Build F01: 向上说服四步法模板.xlsx"""
import sys
sys.path.insert(0, 'C:/Users/Administrator/.claude/skills/Excel表格处理/scripts')
from xlsx_pack import pack_xlsx
from shared_strings_builder import build_shared_strings
import os, shutil

WORK = '/tmp/xlsx_f01'
OUT = 'D:/新课开发/变革管理/08-向上管理与高层说服术：让决策层理解容错的成本逻辑/完整课程包/05-工具表单/F01-向上说服四步法模板.xlsx'
os.makedirs(os.path.dirname(OUT), exist_ok=True)

# === sharedStrings ===
strings = [
    "向上说服四步法模板",
    "步骤",
    "阶段名称",
    "核心动作",
    "关键要点",
    "话术示例",
    "注意事项",
    "第一步",
    "识别类型",
    "判断高层的决策类型和沟通偏好",
    "1.观察：高层的提问方式\n2.试探：用不同语言测试反应\n3.确认：找到核心关切",
    "\"您最关心这个项目的哪些方面？\"",
    "不要假设，要验证",
    "第二步",
    "调整语言",
    "用高层的语言体系包装变革提案",
    "1.财务导向型：用ROI、回报率、风险\n2.战略导向型：用趋势、竞争力、时机\n3.关系导向型：用团队、士气、人",
    "\"从投资回报角度看，这个项目...\"",
    "忌：只讲专业术语",
    "第三步",
    "建立信任",
    "展现执行能力和共担风险的意愿",
    "1.展示过往成功案例\n2.主动识别风险并给出预案\n3.表达\"共同承担\"的姿态",
    "\"这个项目的最大风险是XX，我们的应对预案是...\"",
    "忌：过度承诺",
    "第四步",
    "争取授权",
    "明确授权边界，争取最小可行授权",
    "1.提出最小授权请求\n2.设定明确的成功标准和止损线\n3.约定定期汇报节点",
    "\"您是否可以先批准第一阶段，我们用数据证明后再...\"",
    "忌：请求\"全额授权\"",
]

# Build sharedStrings
shared_xml = build_shared_strings(strings)
with open(f'{WORK}/xl/sharedStrings.xml', 'w', encoding='utf-8') as f:
    f.write(shared_xml)

# === workbook.xml ===
workbook_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
          xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <bookViews><workbookView activeTab="0"/></bookViews>
  <sheets>
    <sheet name="四步法主表" sheetId="1" r:id="rId1"/>
  </sheets>
  <calcPr calcId="0"/>
</workbook>'''

with open(f'{WORK}/xl/workbook.xml', 'w', encoding='utf-8') as f:
    f.write(workbook_xml)

# === sheet1.xml - 四步法主表 ===
sheet1_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
           xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0" showGridLines="0"/></sheetViews>
  <sheetFormatPr defaultRowHeight="18" x14ac:dyDescent="0.25"
    xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols>
    <col min="1" max="1" width="8" customWidth="1"/>
    <col min="2" max="2" width="16" customWidth="1"/>
    <col min="3" max="3" width="40" customWidth="1"/>
    <col min="4" max="4" width="45" customWidth="1"/>
    <col min="5" max="5" width="50" customWidth="1"/>
    <col min="6" max="6" width="35" customWidth="1"/>
  </cols>
  <sheetData>
    <!-- Title row -->
    <row r="1" ht="30" customHeight="1">
      <c r="A1" t="s" s="4"><v>0</v></c>
      <c r="B1" t="s" s="4"><v>1</v></c>
      <c r="C1" t="s" s="4"><v>2</v></c>
      <c r="D1" t="s" s="4"><v>3</v></c>
      <c r="E1" t="s" s="4"><v>4</v></c>
      <c r="F1" t="s" s="4"><v>5</v></c>
    </row>
    <!-- Header row 2 -->
    <row r="2" ht="22" customHeight="1">
      <c r="A2" t="s" s="4"><v>6</v></c>
      <c r="B2" t="s" s="4"><v>7</v></c>
      <c r="C2" t="s" s="4"><v>8</v></c>
      <c r="D2" t="s" s="4"><v>9</v></c>
      <c r="E2" t="s" s="4"><v>10</v></c>
      <c r="F2" t="s" s="4"><v>11</v></c>
    </row>
    <!-- Step 1 -->
    <row r="3" ht="80" customHeight="1">
      <c r="A3" t="s" s="4"><v>12</v></c>
      <c r="B3" t="s" s="1"><v>13</v></c>
      <c r="C3" t="s" s="1"><v>14</v></c>
      <c r="D3" t="s" s="1"><v>15</v></c>
      <c r="E3" t="s" s="1"><v>16</v></c>
      <c r="F3" t="s" s="1"><v>17</v></c>
    </row>
    <!-- Step 2 -->
    <row r="4" ht="80" customHeight="1">
      <c r="A4" t="s" s="4"><v>18</v></c>
      <c r="B4" t="s" s="1"><v>19</v></c>
      <c r="C4" t="s" s="1"><v>20</v></c>
      <c r="D4" t="s" s="1"><v>21</v></c>
      <c r="E4" t="s" s="1"><v>22</v></c>
      <c r="F4" t="s" s="1"><v>23</v></c>
    </row>
    <!-- Step 3 -->
    <row r="5" ht="80" customHeight="1">
      <c r="A5" t="s" s="4"><v>24</v></c>
      <c r="B5" t="s" s="1"><v>25</v></c>
      <c r="C5" t="s" s="1"><v>26</v></c>
      <c r="D5" t="s" s="1"><v>27</v></c>
      <c r="E5" t="s" s="1"><v>28</v></c>
      <c r="F5" t="s" s="1"><v>29</v></c>
    </row>
    <!-- Step 4 -->
    <row r="6" ht="80" customHeight="1">
      <c r="A6" t="s" s="4"><v>30</v></c>
      <c r="B6" t="s" s="1"><v>31</v></c>
      <c r="C6" t="s" s="1"><v>32</v></c>
      <c r="D6" t="s" s="1"><v>33</v></c>
      <c r="E6" t="s" s="1"><v>34</v></c>
      <c r="F6" t="s" s="1"><v>35</v></c>
    </row>
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

with open(f'{WORK}/xl/worksheets/sheet1.xml', 'w', encoding='utf-8') as f:
    f.write(sheet1_xml)

# === pack ===
pack_xlsx(WORK, OUT)
print(f"F01 created: {OUT}")
