# -*- coding: utf-8 -*-
import os, shutil, subprocess

OUT = r"D:/新课开发/德鲁克/非营利精神/A-国企和公用版/完整课程包/008-课堂工具集锦"
TPL = r"C:/Users/Administrator/.claude/skills/Excel表格处理/templates/minimal_xlsx"
SKIP = r"C:/Users/Administrator/.claude/skills/Excel表格处理/scripts"

os.makedirs(OUT, exist_ok=True)

def copy_tpl(d):
    if os.path.exists(d): shutil.rmtree(d)
    shutil.copytree(TPL, d)

def pack(w, o):
    r = subprocess.run(["python3", f"{SKIP}/xlsx_pack.py", w, o], capture_output=True, text=True)
    if r.returncode != 0: print(f"ERR: {r.stderr}"); return False
    return True

def esc(s):
    return s.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace('"', "&quot;")

# ============ FILE 5: 国企使命与利润张力评估表.xlsx ============
print("Building F5: 国企使命与利润张力评估表.xlsx")
copy_tpl("/tmp/xl5")

S5 = [
    "国企使命与利润张力评估表",
    "德鲁克《非营利精神》国企和公用版 | M5专属工具",
    "【背景说明】",
    "国企和公用事业在使命与利润之间存在天然的张力。本表用于评估这种张力的具体表现和管理状态。",
    "",
    "【第一：使命层级梳理】",
    "请梳理你们组织的三个使命层级：",
    "政治使命（来自上级机构或政策文件的定性表述）：",
    "经营使命（组织对自己在市场或服务体系中的功能定位）：",
    "AI时代的价值重定义：实现政治使命的路径是否需要调整？",
    "",
    "【第二：张力点识别】",
    "在日常管理中，使命语言和利润语言发生冲突的具体场景有哪些？",
    "场景1：",
    "通常如何处理？",
    "场景2：",
    "通常如何处理？",
    "",
    "【第三：利润是条件测试】",
    "德鲁克说：利润不是目的，而是条件。请评估：",
    "你们的财务可持续性机制是什么？（财政补贴、政策支持、市场收入等）",
    "如果政策支持减少，你们是否有财务自持能力？",
    "这种依赖度是否构成对使命完成能力的威胁？",
    "",
    "【第四：AI冲击评估】",
    "AI对你们组织的使命实现方式产生了哪些具体冲击？",
    "冲击1-服务对象的变化：",
    "冲击2-竞争者性质的变化：",
    "冲击3-效率标准的重定义：",
    "",
    "【第五：管理建议】",
    "基于以上分析，你们在处理使命与利润张力时需要优先解决的是什么？",
    "优先级1：",
    "优先级2：",
    "优先级3："
]

si5 = "\n".join(f"  <si><t>{esc(s)}</t></si>" for s in S5)
xml5 = f'<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="{len(S5)}" uniqueCount="{len(S5)}">\n{si5}\n</sst>'
open("/tmp/xl5/xl/sharedStrings.xml", "w", encoding="utf-8").write(xml5)

sh5 = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"/></sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols>
    <col min="1" max="1" width="3" customWidth="1"/>
    <col min="2" max="2" width="25" customWidth="1"/>
    <col min="3" max="3" width="55" customWidth="1"/>
  </cols>
  <sheetData>
    <row r="1" ht="32" customHeight="1"><c r="A1" t="s" s="4"><v>0</v></c></row>
    <row r="2" ht="18" customHeight="1"><c r="A2" t="s" s="0"><v>1</v></c></row>
    <row r="3"><c r="A3" t="s" s="0"><v>2</v></c></row>
    <row r="4"><c r="A4" t="s" s="0"><v>3</v></c></row>
    <row r="5"><c r="A5" t="s" s="0"><v>4</v></c></row>
    <row r="6"><c r="A6" t="s" s="0"><v>5</v></c></row>
    <row r="7"><c r="A7" t="s" s="4"><v>6</v></c></row>
    <row r="8"><c r="A8" t="s" s="0"><v>7</v></c></row>
    <row r="9"><c r="C9" t="s" s="1"><v>8</v></c></row>
    <row r="10"><c r="C10" t="s" s="1"><v>9</v></c></row>
    <row r="11"><c r="C11" t="s" s="1"><v>10</v></c></row>
    <row r="12"><c r="A12" t="s" s="0"><v>11</v></c></row>
    <row r="13"><c r="A13" t="s" s="4"><v>12</v></c></row>
    <row r="14"><c r="A14" t="s" s="0"><v>13</v></c></row>
    <row r="15"><c r="C15" t="s" s="1"><v>14</v></c></row>
    <row r="16"><c r="A16" t="s" s="0"><v>15</v></c></row>
    <row r="17"><c r="C17" t="s" s="1"><v>16</v></c></row>
    <row r="18"><c r="A18" t="s" s="0"><v>11</v></c></row>
    <row r="19"><c r="A19" t="s" s="4"><v>17</v></c></row>
    <row r="20"><c r="A20" t="s" s="0"><v>18</v></c></row>
    <row r="21"><c r="C21" t="s" s="1"><v>19</v></c></row>
    <row r="22"><c r="C22" t="s" s="1"><v>20</v></c></row>
    <row r="23"><c r="C23" t="s" s="1"><v>21</v></c></row>
    <row r="24"><c r="A24" t="s" s="0"><v>11</v></c></row>
    <row r="25"><c r="A25" t="s" s="4"><v>22</v></c></row>
    <row r="26"><c r="C26" t="s" s="1"><v>23</v></c></row>
    <row r="27"><c r="C27" t="s" s="1"><v>24</v></c></row>
    <row r="28"><c r="C28" t="s" s="1"><v>25</v></c></row>
    <row r="29"><c r="A29" t="s" s="0"><v>11</v></c></row>
    <row r="30"><c r="A30" t="s" s="4"><v>26</v></c></row>
    <row r="31"><c r="A31" t="s" s="0"><v>27</v></c></row>
    <row r="32"><c r="C32" t="s" s="1"><v>28</v></c></row>
    <row r="33"><c r="C33" t="s" s="1"><v>29</v></c></row>
    <row r="34"><c r="C34" t="s" s="1"><v>30</v></c></row>
    <row r="35"><c r="A35" t="s" s="0"><v>11</v></c></row>
    <row r="36"><c r="A36" t="s" s="4"><v>31</v></c></row>
    <row r="37"><c r="C37" t="s" s="1"><v>32</v></c></row>
    <row r="38"><c r="C38" t="s" s="1"><v>33</v></c></row>
    <row r="39"><c r="C39" t="s" s="1"><v>34</v></c></row>
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''
open("/tmp/xl5/xl/worksheets/sheet1.xml", "w", encoding="utf-8").write(sh5)

if pack("/tmp/xl5", OUT + "/国企使命与利润张力评估表.xlsx"):
    print("F5 SUCCESS")
else:
    print("F5 FAILED")
