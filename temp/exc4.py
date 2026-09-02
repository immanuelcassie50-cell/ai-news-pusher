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

# ============ FILE 4: 战略反思改善表.xlsx ============
print("Building F4: 战略反思改善表.xlsx")
copy_tpl("/tmp/xl4")

S4 = [
    "战略反思改善表",
    "德鲁克《非营利精神》国企和公用版 | 辅助工具",
    "【定期审视使命实践】",
    "本表用于定期（如每季度/每半年）审视组织使命的执行情况",
    "",
    "审视日期：",
    "审视周期：季度 / 半年 / 年度",
    "",
    "【第一：成果回顾】",
    "在过去这个周期里，我们真正产生了什么可观察的外部成果？",
    "这些成果和我们使命描述的那个世界的变化，有多大的距离？",
    "还差什么？",
    "",
    "【第二：差距分析】",
    "使命与现实之间最大的差距是什么？",
    "这个差距的根本原因是什么？",
    "",
    "【第三：资源审视】",
    "我们的资源是否被投向了对使命最重要的方向？",
    "有哪些资源被用在了偏离使命的地方？",
    "",
    "【第四：改善承诺】",
    "基于以上分析，下一个周期我们承诺做哪一件具体的事来改善？",
    "这件事必须在30天内开始执行",
    "具体行动：",
    "负责人：",
    "完成时间："
]

si4 = "\n".join(f"  <si><t>{esc(s)}</t></si>" for s in S4)
xml4 = f'<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="{len(S4)}" uniqueCount="{len(S4)}">\n{si4}\n</sst>'
open("/tmp/xl4/xl/sharedStrings.xml", "w", encoding="utf-8").write(xml4)

sh4 = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
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
    <row r="5"><c r="A5" t="s" s="0"><v>4</v></c></row>
    <row r="6"><c r="A6" t="s" s="1"><v>5</v></c></row>
    <row r="7"><c r="A7" t="s" s="1"><v>6</v></c></row>
    <row r="8"><c r="A8" t="s" s="0"><v>7</v></c></row>
    <row r="9"><c r="A9" t="s" s="4"><v>8</v></c></row>
    <row r="10"><c r="C10" t="s" s="0"><v>9</v></c></row>
    <row r="11"><c r="C11" t="s" s="0"><v>10</v></c></row>
    <row r="12"><c r="C12" t="s" s="0"><v>11</v></c></row>
    <row r="13"><c r="A13" t="s" s="0"><v>7</v></c></row>
    <row r="14"><c r="A14" t="s" s="4"><v>12</v></c></row>
    <row r="15"><c r="C15" t="s" s="0"><v>13</v></c></row>
    <row r="16"><c r="C16" t="s" s="0"><v>14</v></c></row>
    <row r="17"><c r="A17" t="s" s="0"><v>7</v></c></row>
    <row r="18"><c r="A18" t="s" s="4"><v>15</v></c></row>
    <row r="19"><c r="C19" t="s" s="0"><v>16</v></c></row>
    <row r="20"><c r="C20" t="s" s="0"><v>17</v></c></row>
    <row r="21"><c r="A21" t="s" s="0"><v>7</v></c></row>
    <row r="22"><c r="A22" t="s" s="4"><v>18</v></c></row>
    <row r="23"><c r="A23" t="s" s="0"><v>19</v></c></row>
    <row r="24"><c r="A24" t="s" s="0"><v>20</v></c></row>
    <row r="25"><c r="C25" t="s" s="1"><v>21</v></c></row>
    <row r="26"><c r="A26" t="s" s="1"><v>22</v></c></row>
    <row r="27"><c r="A27" t="s" s="1"><v>23</v></c></row>
    <row r="28"><c r="A28" t="s" s="1"><v>24</v></c></row>
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''
open("/tmp/xl4/xl/worksheets/sheet1.xml", "w", encoding="utf-8").write(sh4)

if pack("/tmp/xl4", OUT + "/战略反思改善表.xlsx"):
    print("F4 SUCCESS")
else:
    print("F4 FAILED")
