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

print("Building F1: 使命测试三问自测表.xlsx")
copy_tpl("/tmp/xl1")

S = [
    "使命测试三问自测表",
    "德鲁克《非营利精神》国企和公用版 | M2工具",
    "问题一：使命聚焦测试",
    "我们的使命是否足够聚焦，让我们能够对大多数机会说不？",
    "【填写引导】",
    "请列出至少三个你们曾经考虑过但最终决定不做的机会/项目/方向：",
    "这些机会与你们使命的关联度如何？为什么你们能对这些机会说不？",
    "",
    "【自测结论】",
    "A. 使命足够清晰，能主动拒绝偏离核心的机会",
    "B. 使命较为模糊，对部分机会难以拒绝",
    "C. 使命模糊，对大多数机会难以拒绝",
    "问题二：成果可测量性测试",
    "我们的使命能否被转化为可以测量的成果，而不是活动？",
    "请用一句话描述你们组织最重要的外部成果：",
    "请列举2-3个核心测量指标，标注哪个是活动指标、哪个是成果指标：",
    "A. 有清晰的成果指标，能区分活动与成果",
    "B. 有指标但难以清晰区分",
    "C. 仅有活动指标，缺乏成果指标",
    "问题三：使命时效性测试",
    "我们的使命是否仍然服务于当下真实的需要？",
    "请描述使命最初创立时所对应的真实需要：",
    "那个需要今天是否仍然真实存在？发生了什么变化？",
    "AI的介入是否改变了你们实现使命的方式或效率？",
    "A. 使命与当下需要高度吻合，方向清晰",
    "B. 使命基本吻合但部分内容需要更新",
    "C. 使命已严重偏离当下实际需要",
    "【综合评估】",
    "三问总分：___分",
    "关键发现：",
    "下一步行动：",
    "日期：________________"
]

si = "\n".join(f"  <si><t>{esc(s)}</t></si>" for s in S)
xml = f'<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="{len(S)}" uniqueCount="{len(S)}">\n{si}\n</sst>'
open("/tmp/xl1/xl/sharedStrings.xml", "w", encoding="utf-8").write(xml)

sh = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"/></sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols><col min="1" max="1" width="3" customWidth="1"/><col min="2" max="2" width="25" customWidth="1"/><col min="3" max="3" width="65" customWidth="1"/><col min="4" max="4" width="18" customWidth="1"/></cols>
  <sheetData>
    <row r="1" ht="32" customHeight="1"><c r="A1" t="s" s="4"><v>0</v></c></row>
    <row r="2" ht="18" customHeight="1"><c r="A2" t="s" s="0"><v>1</v></c></row>
    <row r="3"><c r="A3" t="s" s="0"><v>7</v></c></row>
    <row r="4" ht="24" customHeight="1"><c r="A4" t="s" s="4"><v>2</v></c></row>
    <row r="5"><c r="A5" t="s" s="0"><v>3</v></c></row>
    <row r="6"><c r="A6" t="s" s="1"><v>4</v></c></row>
    <row r="7"><c r="C7" t="s" s="0"><v>5</v></c></row>
    <row r="8"><c r="C8" t="s" s="0"><v>6</v></c></row>
    <row r="9"><c r="C9" t="s" s="0"><v>7</v></c></row>
    <row r="10"><c r="A10" t="s" s="1"><v>8</v></c></row>
    <row r="11"><c r="B11" t="s" s="0"><v>9</v></c></row>
    <row r="12"><c r="B12" t="s" s="0"><v>10</v></c></row>
    <row r="13"><c r="B13" t="s" s="0"><v>11</v></c></row>
    <row r="14"><c r="A14" t="s" s="0"><v>7</v></c></row>
    <row r="15" ht="24" customHeight="1"><c r="A15" t="s" s="4"><v>12</v></c></row>
    <row r="16"><c r="A16" t="s" s="0"><v>13</v></c></row>
    <row r="17"><c r="A17" t="s" s="1"><v>4</v></c></row>
    <row r="18"><c r="C18" t="s" s="0"><v>14</v></c></row>
    <row r="19"><c r="A19" t="s" s="0"><v>7</v></c></row>
    <row r="20"><c r="C20" t="s" s="0"><v>15</v></c></row>
    <row r="21"><c r="A21" t="s" s="0"><v>7</v></c></row>
    <row r="22"><c r="A22" t="s" s="1"><v>8</v></c></row>
    <row r="23"><c r="B23" t="s" s="0"><v>16</v></c></row>
    <row r="24"><c r="B24" t="s" s="0"><v>17</v></c></row>
    <row r="25"><c r="B25" t="s" s="0"><v>18</v></c></row>
    <row r="26"><c r="A26" t="s" s="0"><v>7</v></c></row>
    <row r="27" ht="24" customHeight="1"><c r="A27" t="s" s="4"><v>19</v></c></row>
    <row r="28"><c r="A28" t="s" s="0"><v>20</v></c></row>
    <row r="29"><c r="A29" t="s" s="1"><v>4</v></c></row>
    <row r="30"><c r="C30" t="s" s="0"><v>21</v></c></row>
    <row r="31"><c r="C31" t="s" s="0"><v>22</v></c></row>
    <row r="32"><c r="C32" t="s" s="0"><v>23</v></c></row>
    <row r="33"><c r="A33" t="s" s="1"><v>8</v></c></row>
    <row r="34"><c r="B34" t="s" s="0"><v>24</v></c></row>
    <row r="35"><c r="B35" t="s" s="0"><v>25</v></c></row>
    <row r="36"><c r="B36" t="s" s="0"><v>26</v></c></row>
    <row r="37"><c r="A37" t="s" s="0"><v>7</v></c></row>
    <row r="38" ht="24" customHeight="1"><c r="A38" t="s" s="4"><v>27</v></c></row>
    <row r="39"><c r="B39" t="s" s="0"><v>28</v></c></row>
    <row r="40"><c r="B40" t="s" s="0"><v>29</v></c></row>
    <row r="41"><c r="B41" t="s" s="0"><v>30</v></c></row>
    <row r="42"><c r="A42" t="s" s="0"><v>7</v></c></row>
    <row r="43"><c r="B43" t="s" s="0"><v>31</v></c></row>
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''
open("/tmp/xl1/xl/worksheets/sheet1.xml", "w", encoding="utf-8").write(sh)

if pack("/tmp/xl1", OUT + "/使命测试三问自测表.xlsx"):
    print("F1 SUCCESS")
else:
    print("F1 FAILED")
