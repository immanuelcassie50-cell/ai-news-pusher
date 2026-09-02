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

# ============ FILE 3: 使命重建草图.xlsx ============
print("Building F3: 使命重建草图.xlsx")
copy_tpl("/tmp/xl3")

S3 = [
    "使命重建草图",
    "德鲁克《非营利精神》国企和公用版 | M6工作坊工具",
    "【第一部分：使命现状评估】",
    "基于使命测试三问，对你们组织当前使命进行评估：",
    "现有使命宣言是否通过聚焦测试？（能否帮助说不）",
    "现有使命宣言是否有可测量的外部成果定义？",
    "现有使命描述的需要，在AI介入后还有多少是真实存在的？",
    "",
    "【第二部分：有组织放弃清单】",
    "列出至少两项如果今天重新决定，不会再做的现有项目或业务：",
    "项目1：",
    "放弃的依据是什么？",
    "资源应该去哪里？",
    "谁会反对？如何处理？",
    "项目2：",
    "放弃的依据是什么？",
    "资源应该去哪里？",
    "谁会反对？如何处理？",
    "",
    "【第三部分：使命进入决策的三个机制设计】",
    "明确三个在日常管理里可以引入使命语言的具体场景：",
    "场景1：（如：预算讨论、晋升评估、新项目立项等）",
    "具体怎么引入？用什么问题？",
    "场景2：",
    "具体怎么引入？用什么问题？",
    "场景3：",
    "具体怎么引入？用什么问题？",
    "",
    "【第四部分：成果审视机制设计】",
    "我们打算多久做一次成果审视？",
    "谁参与？",
    "我们用什么指标来评估外部成果，而不是活动完成率？",
    "",
    "【第五部分：30天决定承诺】",
    "基于以上分析，选出一个在接下来30天内你将推动做出的真实决定：",
    "决定内容：",
    "你打算如何推动它？",
    "预期遇到的阻力："
]

si3 = "\n".join(f"  <si><t>{esc(s)}</t></si>" for s in S3)
xml3 = f'<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="{len(S3)}" uniqueCount="{len(S3)}">\n{si3}\n</sst>'
open("/tmp/xl3/xl/sharedStrings.xml", "w", encoding="utf-8").write(xml3)

sh3 = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"/></sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols>
    <col min="1" max="1" width="3" customWidth="1"/>
    <col min="2" max="2" width="22" customWidth="1"/>
    <col min="3" max="3" width="55" customWidth="1"/>
  </cols>
  <sheetData>
    <row r="1" ht="32" customHeight="1"><c r="A1" t="s" s="4"><v>0</v></c></row>
    <row r="2" ht="18" customHeight="1"><c r="A2" t="s" s="0"><v>1</v></c></row>
    <row r="3"><c r="A3" t="s" s="0"><v>2</v></c></row>
    <row r="4"><c r="A4" t="s" s="0"><v>3</v></c></row>
    <row r="5"><c r="A5" t="s" s="1"><v>4</v></c></row>
    <row r="6"><c r="C6" t="s" s="0"><v>5</v></c></row>
    <row r="7"><c r="C7" t="s" s="0"><v>6</v></c></row>
    <row r="8"><c r="C8" t="s" s="0"><v>7</v></c></row>
    <row r="9"><c r="A9" t="s" s="0"><v>8</v></c></row>
    <row r="10"><c r="A10" t="s" s="0"><v>9</v></c></row>
    <row r="11"><c r="A11" t="s" s="0"><v>10</v></c></row>
    <row r="12"><c r="C12" t="s" s="1"><v>11</v></c></row>
    <row r="13"><c r="C13" t="s" s="1"><v>12</v></c></row>
    <row r="14"><c r="C14" t="s" s="1"><v>13</v></c></row>
    <row r="15"><c r="A15" t="s" s="0"><v>14</v></c></row>
    <row r="16"><c r="C16" t="s" s="1"><v>15</v></c></row>
    <row r="17"><c r="C17" t="s" s="1"><v>16</v></c></row>
    <row r="18"><c r="C18" t="s" s="1"><v>17</v></c></row>
    <row r="19"><c r="A19" t="s" s="0"><v>8</v></c></row>
    <row r="20"><c r="A20" t="s" s="0"><v>18</v></c></row>
    <row r="21"><c r="A21" t="s" s="0"><v>19</v></c></row>
    <row r="22"><c r="C22" t="s" s="1"><v>20</v></c></row>
    <row r="23"><c r="C23" t="s" s="1"><v>21</v></c></row>
    <row r="24"><c r="C24" t="s" s="1"><v>22</v></c></row>
    <row r="25"><c r="C25" t="s" s="1"><v>23</v></c></row>
    <row r="26"><c r="C26" t="s" s="1"><v>24</v></c></row>
    <row r="27"><c r="C27" t="s" s="1"><v>25</v></c></row>
    <row r="28"><c r="A28" t="s" s="0"><v>8</v></c></row>
    <row r="29"><c r="A29" t="s" s="0"><v>26</v></c></row>
    <row r="30"><c r="A30" t="s" s="0"><v>27</v></c></row>
    <row r="31"><c r="C31" t="s" s="1"><v>28</v></c></row>
    <row r="32"><c r="A32" t="s" s="0"><v>8</v></c></row>
    <row r="33"><c r="A33" t="s" s="0"><v>29</v></c></row>
    <row r="34"><c r="C34" t="s" s="1"><v>30</v></c></row>
    <row r="35"><c r="C35" t="s" s="1"><v>31</v></c></row>
    <row r="36"><c r="C36" t="s" s="1"><v>32</v></c></row>
    <row r="37"><c r="A37" t="s" s="0"><v>8</v></c></row>
    <row r="38"><c r="A38" t="s" s="0"><v>33</v></c></row>
    <row r="39"><c r="C39" t="s" s="1"><v>34</v></c></row>
    <row r="40"><c r="C40" t="s" s="1"><v>35</v></c></row>
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''
open("/tmp/xl3/xl/worksheets/sheet1.xml", "w", encoding="utf-8").write(sh3)

if pack("/tmp/xl3", OUT + "/使命重建草图.xlsx"):
    print("F3 SUCCESS")
else:
    print("F3 FAILED")
