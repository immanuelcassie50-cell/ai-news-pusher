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

# ============ FILE 2: 有组织放弃清单.xlsx ============
print("Building F2: 有组织放弃清单.xlsx")
copy_tpl("/tmp/xl2")

S2 = [
    "有组织放弃清单",
    "德鲁克《非营利精神》国企和公用版 | M3工具",
    "【第一步：系统性清点】",
    "请列出你们组织目前正在做的所有主要活动、项目和业务线，对每项回答以下三个问题：",
    "问题1：如果这件事今天才被提出来，我们还会决定做它吗？",
    "问题2：这件事在过去12个月里产生了什么可观察的外部成果？",
    "问题3：这件事今天占用的资源，是组织最优先分配它的方向吗？",
    "",
    "序号",
    "项目/活动/业务",
    "问题1：今天还会做吗？",
    "问题2：12个月外部成果",
    "问题3：资源优先度",
    "分类判断",
    "明确继续",
    "待观察",
    "主动退出",
    "",
    "【第二步：分类判断】",
    "根据清点结果，将每个项目分为三类：",
    "明确继续：有清晰的外部成果，使命贡献明显，值得持续投资",
    "待观察：还没有足够证据判断，设定一个时间窗口和评估标准",
    "主动退出：占用资源但成果不清晰，或成果与使命脱节",
    "",
    "【第三步：退出设计】",
    "对于标记为[主动退出]的项目，完成以下退出设计：",
    "退出依据：",
    "资源去向：放弃后释放的资源应该投向哪里？",
    "谁会反对：哪些利益相关者会反对这个决定？如何处理？",
    "退出方式：如何有尊严地退出？（不是悄悄停掉，而是告诉所有相关方为什么）",
    "",
    "【第四步：承诺行动】",
    "基于以上分析，选出一个你在接下来30天内将推动停止的项目：",
    "项目名称：",
    "停止的理由：",
    "你打算如何推动这个决定？",
    "预计遇到的障碍："
]

si2 = "\n".join(f"  <si><t>{esc(s)}</t></si>" for s in S2)
xml2 = f'<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="{len(S2)}" uniqueCount="{len(S2)}">\n{si2}\n</sst>'
open("/tmp/xl2/xl/sharedStrings.xml", "w", encoding="utf-8").write(xml2)

sh2 = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"/></sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols>
    <col min="1" max="1" width="4" customWidth="1"/>
    <col min="2" max="2" width="20" customWidth="1"/>
    <col min="3" max="3" width="25" customWidth="1"/>
    <col min="4" max="4" width="25" customWidth="1"/>
    <col min="5" max="5" width="15" customWidth="1"/>
    <col min="6" max="6" width="15" customWidth="1"/>
  </cols>
  <sheetData>
    <row r="1" ht="30" customHeight="1"><c r="A1" t="s" s="4"><v>0</v></c></row>
    <row r="2" ht="18" customHeight="1"><c r="A2" t="s" s="0"><v>1</v></c></row>
    <row r="3"><c r="A3" t="s" s="0"><v>2</v></c></row>
    <row r="4"><c r="A4" t="s" s="0"><v>3</v></c></row>
    <row r="5" ht="18" customHeight="1"><c r="A5" t="s" s="0"><v>4</v></c></row>
    <row r="6"><c r="A6" t="s" s="1"><v>5</v></c></row>
    <row r="7"><c r="A7" t="s" s="1"><v>6</v></c></row>
    <row r="8"><c r="A8" t="s" s="1"><v>7</v></c></row>
    <row r="9"><c r="A9" t="s" s="0"><v>8</v></c></row>
    <row r="10" ht="20" customHeight="1">
      <c r="A10" t="s" s="4"><v>9</v></c>
      <c r="B10" t="s" s="4"><v>10</v></c>
      <c r="C10" t="s" s="4"><v>11</v></c>
      <c r="D10" t="s" s="4"><v>12</v></c>
      <c r="E10" t="s" s="4"><v>13</v></c>
    </row>
    <row r="11"><c r="A11" t="s" s="0"><v>14</v></c></row>
    <row r="12"><c r="A12" t="s" s="0"><v>15</v></c></row>
    <row r="13"><c r="A13" t="s" s="0"><v>16</v></c></row>
    <row r="14"><c r="A14" t="s" s="0"><v>8</v></c></row>
    <row r="15"><c r="A15" t="s" s="0"><v>17</v></c></row>
    <row r="16"><c r="A16" t="s" s="0"><v>18</v></c></row>
    <row r="17"><c r="A17" t="s" s="0"><v>19</v></c></row>
    <row r="18"><c r="A18" t="s" s="0"><v>20</v></c></row>
    <row r="19"><c r="A19" t="s" s="0"><v>8</v></c></row>
    <row r="20"><c r="A20" t="s" s="4"><v>21</v></c></row>
    <row r="21"><c r="A21" t="s" s="0"><v>22</v></c></row>
    <row r="22"><c r="A22" t="s" s="1"><v>23</v></c></row>
    <row r="23"><c r="A23" t="s" s="1"><v>24</v></c></row>
    <row r="24"><c r="A24" t="s" s="1"><v>25</v></c></row>
    <row r="25"><c r="A25" t="s" s="1"><v>26</v></c></row>
    <row r="26"><c r="A26" t="s" s="0"><v>8</v></c></row>
    <row r="27"><c r="A27" t="s" s="4"><v>27</v></c></row>
    <row r="28"><c r="A28" t="s" s="0"><v>28</v></c></row>
    <row r="29"><c r="A29" t="s" s="0"><v>29</v></c></row>
    <row r="30"><c r="A30" t="s" s="0"><v>30</v></c></row>
    <row r="31"><c r="A31" t="s" s="0"><v>31</v></c></row>
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''
open("/tmp/xl2/xl/worksheets/sheet1.xml", "w", encoding="utf-8").write(sh2)

if pack("/tmp/xl2", OUT + "/有组织放弃清单.xlsx"):
    print("F2 SUCCESS")
else:
    print("F2 FAILED")
