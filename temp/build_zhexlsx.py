#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
构建《领航·4.0 训后看板》xlsx 文件
- 7 个 Sheet
- 完整公式驱动
- 专业商务风格
"""

import os, zipfile
from pathlib import Path

WORK = Path(r"D:\temp\xlsx_work")
OUT = Path(r"D:\2026年课程\竞越\领航：Z世代管理新策略3.0\完整课程包\12_管理者工具包_训后\03_可视化看板_Excel版.xlsx")

# 准备 sheet 目录
sheets_dir = WORK / "xl" / "worksheets"

# 清空 worksheets 目录
for f in sheets_dir.glob("*.xml"):
    f.unlink()

# ---- 1. 收集所有共享字符串 ----
S = []
def S_idx(s):
    if s in S:
        return S.index(s)
    S.append(s)
    return len(S) - 1

HEADERS_SHEET1 = [
    "学员姓名", "部门", "岗位", "课程日期", "参训角色",
    "Z世代员工代号（分析对象）", "分析对象岗位", "Z世代员工司龄",
    "30天清单承诺1", "30天清单承诺2", "30天清单承诺3",
    "问责伙伴姓名", "问责伙伴联系方式", "HRBP", "上级姓名"
]

HEADERS_SHEET2 = [
    "周次", "本周日期范围", "五感反馈次数（含你的判断）", "5W2H+H任务分配次数",
    "AI话题开口次数", "辅导对话次数（含学习归因）", "激励调整动作次数",
    "本周最大亮点", "本周最大障碍", "备注"
]

HEADERS_SHEET3 = [
    "指标项", "前测分数（训前）", "中测分数（训中）", "30天分数",
    "60天分数", "90天分数", "变化趋势", "信号灯"
]

HEADERS_SHEET4 = [
    "调研时间", "团队整体满意度（1-10）", "Z世代员工留存率（%）",
    "工作投入度评分（1-10）", "员工匿名反馈关键词Top3", "员工主动反馈次数"
]

HEADERS_SHEET5 = [
    "月份", "团队关键指标1：产出质量", "团队关键指标2：交付及时率",
    "团队关键指标3：客户满意度", "团队关键指标4：创新提案数", "与上月对比（综合环比）"
]

HEADERS_SHEET6_HEADER = [
    "看板区", "维度1：响应节奏约定", "维度2：五感管理动作", "维度3：AI话题开口",
    "维度4：5W2H+H任务分配", "维度5：激励机制更新（人类贡献目标）"
]

HEADERS_SHEET7 = [
    "建议序号", "问题描述（信号灯）", "建议动作", "责任人", "完成时间"
]

# Sheet1 数据行
sheet1_data = [
    ["示例学员", "产品研发部", "研发经理", "2026-06-20", "中层管理者",
     "小Z", "AI产品经理", "6个月",
     "用'你的判断'做1次具体反馈", "用5W2H+H布置一个新任务", "设计1个人类贡献目标",
     "示例问责伙伴", "示例伙伴微信号", "示例HRBP", "示例上级"],
    ["_______________", "_______________", "_______________", "_______________",
     "_______________", "_______________", "_______________", "_______________",
     "_______________", "_______________", "_______________", "_______________",
     "_______________", "_______________", "_______________"],
]

# Sheet2 数据：12周
sheet2_data = []
highlights_12w = [
    "首次在1v1中说出你的判断", "用5W2H+H布置了第一个任务", "AI话题破冰成功",
    "辅导对话加了学习归因", "团队第一次用游戏化积分", "激励里加入人类贡献目标",
    "员工主动反馈成长", "启动30天最小实验", "推动跨组AI分享会", "完整60天对话",
    "完成90天档案", "新领导力动作启动"
]
barriers_12w = [
    "响应节奏约定未建立", "Human维度说不太清", "AI话题不知道咋开口",
    "学习归因问得太书面", "激励调整触及老员工", "目标权重难定",
    "员工反馈验证困难", "问责伙伴未启动", "跨部门协调慢", "中期动力下滑",
    "数据收集不完整", "下一步规划模糊"
]
for i in range(1, 13):
    week_range = f"第{i}周（训后第{4+i*7-4}天起）"
    counts = [min(1+i//2, 8), i, max(0, i-2), max(0, i-1), max(0, i-3)]
    row = [f"第{i}周", week_range] + counts + [highlights_12w[i-1], barriers_12w[i-1], ""]
    sheet2_data.append(row)

# Sheet3 数据：5个指标
sheet3_data = [
    ["响应节奏约定（响应速度+约定清晰度）", 1, 3, 4, 4, 5],
    ["说出你的判断（具体反馈中的人类判断指出）", 1, 4, 4, 3, 4],
    ["AI话题主动开口（非工作场景的AI交流）", 1, 4, 3, 4, 5],
    ["5W2H+H使用（任务分配含Human维度）", 1, 4, 4, 4, 4],
    ["人类贡献目标设计（激励里区分两类目标）", 1, 3, 2, 3, 4],
]

# Sheet4 数据：4个时间点
sheet4_data = [
    ["训前（baseline）", 6.0, 75, 6.0, "迷茫/质疑/观望", 2],
    ["训后30天", 6.8, 82, 7.2, "看到了/新鲜/想试", 5],
    ["训后60天", 7.5, 88, 7.8, "不一样了/被看见", 8],
    ["训后90天", 8.2, 92, 8.5, "有感觉/能说清楚", 12],
]

# Sheet5 数据：6行月度数据
sheet5_data = [
    ["2026-03（训前3月）", 78, 85, 88, 3],
    ["2026-04（训前2月）", 80, 87, 89, 2],
    ["2026-05（训前1月）", 79, 86, 88, 4],
    ["2026-06（训当月）", 82, 89, 90, 5],
    ["2026-07（训后1月）", 85, 92, 92, 7],
    ["2026-08（训后2月）", 88, 94, 93, 9],
]

# Sheet6 数据
sheet6_data = [
    ["雷达图数据", "训前", 1, 1, 1, 1, 1],
    ["", "训后30天", 4, 4, 3, 4, 2],
    ["", "训后90天", 5, 4, 5, 4, 4],
    ["完成率进度条", "目标值", 5, 5, 5, 5, 5],
    ["", "当前90天", 5, 4, 5, 4, 4],
    ["", "完成率", "=B5/B4", "=C5/C4", "=D5/D4", "=E5/E4", "=F5/F4"],
    ["趋势折线图数据", "第1周", 1, 1, 0, 1, 0],
    ["", "第4周", 3, 3, 2, 3, 1],
    ["", "第8周", 4, 3, 4, 4, 3],
    ["", "第12周", 5, 4, 5, 4, 4],
    ["当前信号灯状态", "90天评分", 5, 4, 5, 4, 4],
    ["", "信号灯", "=IF(B12>=4,\"绿\",IF(B12>=2,\"黄\",\"红\"))",
     "=IF(C12>=4,\"绿\",IF(C12>=2,\"黄\",\"红\"))",
     "=IF(D12>=4,\"绿\",IF(D12>=2,\"黄\",\"红\"))",
     "=IF(E12>=4,\"绿\",IF(E12>=2,\"黄\",\"红\"))",
     "=IF(F12>=4,\"绿\",IF(F12>=2,\"黄\",\"红\"))"],
]

# Sheet7 数据
sheet7_data = [
    [1, "维度1响应节奏约定（绿灯）：已建立完整节奏约定机制，建议向下推广为部门级标准。",
     "在下季度部门月会做一次10分钟的'响应节奏约定'经验分享，附一份节奏约定模板。",
     "学员上级", "1个月内"],
    [2, "维度3 AI话题开口（绿灯）：已成为团队 AI 文化示范点。",
     "邀请学员在跨部门 AI 协作规范制定会上做30分钟分享，建立内部影响力。",
     "HRBP", "1个月内"],
    [3, "维度2 五感管理动作（黄灯）：反馈具体性可进一步提升。",
     "辅导对话中加一个追问：'如果要给刚才的反馈打个分，你会给自己打几分？为什么？'",
     "学员上级", "下次1v1前"],
    [4, "维度4 5W2H+H任务分配（黄灯）：使用频率高但 Human 维度深度不足。",
     "下次布置任务时，强制把 Human 维度写成3句话：'你亲自做的是/AI 辅助的是/贡献如何被看见'。",
     "学员本人", "下一个新任务"],
    [5, "维度5 人类贡献目标设计（黄灯）：激励体系刚起步，需要1个最小实验验证。",
     "在团队内选1个5人小组试行'产出目标+人类贡献目标'双轨激励，60天后对比效果。",
     "学员本人", "60天内"],
    [6, "整体建议：学员已展现出 AI 时代 Z 世代管理的内化能力。",
     "推荐进入'领航·4.0 内部转训讲师'候选池，承担下一期基层主管的1+3清单模块授课。",
     "HRBP+学员上级", "90天内评估"],
]

# 注册所有字符串
for h in [HEADERS_SHEET1, HEADERS_SHEET2, HEADERS_SHEET3, HEADERS_SHEET4,
          HEADERS_SHEET5, HEADERS_SHEET6_HEADER, HEADERS_SHEET7]:
    for s in h:
        S_idx(s)

for row in sheet1_data + sheet2_data + sheet3_data + sheet4_data + sheet5_data + sheet6_data + sheet7_data:
    for v in row:
        if isinstance(v, str):
            S_idx(v)

# 工具函数
def xe(s):
    return s.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace("\"", "&quot;")

# ---- 2. 写 sharedStrings.xml ----
ss_items = "".join(f'<si><t xml:space="preserve">{xe(s)}</t></si>' for s in S)
ss_xml = f'<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n'
ss_xml += f'<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="{len(S)}" uniqueCount="{len(S)}">\n{ss_items}\n</sst>\n'
(WORK / "xl" / "sharedStrings.xml").write_text(ss_xml, encoding="utf-8")
print(f"sharedStrings.xml: {len(S)} unique strings")

# ---- 3. 写 styles.xml ----
styles_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <numFmts count="4">
    <numFmt numFmtId="164" formatCode="#,##0"/>
    <numFmt numFmtId="165" formatCode="0.0%"/>
    <numFmt numFmtId="166" formatCode="0.0"/>
    <numFmt numFmtId="167" formatCode="0.00"/>
  </numFmts>
  <fonts count="5">
    <font><sz val="11"/><name val="Calibri"/><color rgb="00000000"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="000000FF"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="00000000"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="00008000"/></font>
    <font><sz val="11"/><name val="Calibri"/><b/><color rgb="00FFFFFF"/></font>
  </fonts>
  <fills count="5">
    <fill><patternFill patternType="none"/></fill>
    <fill><patternFill patternType="gray125"/></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="FF1F4E78"/><bgColor indexed="64"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="FFE7E6E6"/><bgColor indexed="64"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="FFFFF2CC"/><bgColor indexed="64"/></patternFill></fill>
  </fills>
  <borders count="2">
    <border><left/><right/><top/><bottom/><diagonal/></border>
    <border><left style="thin"><color rgb="FF808080"/></left><right style="thin"><color rgb="FF808080"/></right><top style="thin"><color rgb="FF808080"/></top><bottom style="thin"><color rgb="FF808080"/></bottom><diagonal/></border>
  </borders>
  <cellXfs count="13">
    <xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0" applyFont="1" applyFill="1" applyBorder="1"/>
    <xf numFmtId="0" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1" applyFill="1" applyBorder="1"/>
    <xf numFmtId="0" fontId="2" fillId="0" borderId="0" xfId="0" applyFont="1" applyFill="1" applyBorder="1"/>
    <xf numFmtId="0" fontId="3" fillId="0" borderId="0" xfId="0" applyFont="1" applyFill="1" applyBorder="1"/>
    <xf numFmtId="0" fontId="4" fillId="2" borderId="0" xfId="0" applyFont="1" applyFill="1" applyBorder="1" applyAlignment="1"><alignment horizontal="center" vertical="center" wrapText="1"/></xf>
    <xf numFmtId="0" fontId="2" fillId="0" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1" applyAlignment="1"><alignment wrapText="1" vertical="top"/></xf>
    <xf numFmtId="0" fontId="2" fillId="3" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1" applyAlignment="1"><alignment wrapText="1" vertical="top"/></xf>
    <xf numFmtId="0" fontId="4" fillId="2" borderId="0" xfId="0" applyFont="1" applyFill="1" applyBorder="1" applyAlignment="1"><alignment horizontal="left" vertical="center" wrapText="1"/></xf>
    <xf numFmtId="164" fontId="2" fillId="0" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1" applyNumberFormat="1" applyAlignment="1"><alignment horizontal="right"/></xf>
    <xf numFmtId="165" fontId="2" fillId="0" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1" applyNumberFormat="1" applyAlignment="1"><alignment horizontal="right"/></xf>
    <xf numFmtId="166" fontId="4" fillId="0" borderId="0" xfId="0" applyFont="1" applyFill="1" applyBorder="1" applyNumberFormat="1" applyAlignment="1"><alignment horizontal="center"/></xf>
    <xf numFmtId="0" fontId="2" fillId="0" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1" applyAlignment="1"><alignment horizontal="center" wrapText="1"/></xf>
    <xf numFmtId="0" fontId="2" fillId="4" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1" applyAlignment="1"><alignment wrapText="1" vertical="top"/></xf>
  </cellXfs>
  <cellStyleXfs count="1">
    <xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/>
  </cellStyleXfs>
  <cellStyles count="1">
    <cellStyle name="Normal" xfId="0" builtinId="0"/>
  </cellStyles>
</styleSheet>
'''
(WORK / "xl" / "styles.xml").write_text(styles_xml, encoding="utf-8")
print("styles.xml written")

# ---- 4. 工具函数 ----
COL_LETTERS = []
for i in range(26):
    COL_LETTERS.append(chr(ord('A')+i))
for i in range(26):
    COL_LETTERS.append('A' + chr(ord('A')+i))
for i in range(26):
    COL_LETTERS.append('B' + chr(ord('A')+i))

def col_letter(n):
    return COL_LETTERS[n-1]

def make_cell(col_n, row_n, val, style="0"):
    addr = f"{col_letter(col_n)}{row_n}"
    if val is None or val == "":
        return f'<c r="{addr}"/>'
    if isinstance(val, str) and val.startswith("="):
        f = val[1:]
        return f'<c r="{addr}" s="{style}"><f>{xe(f)}</f><v></v></c>'
    if isinstance(val, str):
        if val in S:
            idx = S.index(val)
        else:
            idx = S_idx(val)
        return f'<c r="{addr}" t="s" s="{style}"><v>{idx}</v></c>'
    return f'<c r="{addr}" s="{style}"><v>{val}</v></c>'

def make_row(row_n, cells, default_style="0"):
    parts = []
    for i, item in enumerate(cells, start=1):
        if isinstance(item, tuple):
            v, s = item
        else:
            v, s = item, default_style
        parts.append(make_cell(i, row_n, v, s))
    return f'<row r="{row_n}">{"".join(parts)}</row>'

# ---- 5. 生成7个Sheet ----
SHEETS = []

# Sheet 1
header1 = [(h, "4") for h in HEADERS_SHEET1]
s1_rows = [make_row(1, header1, "4")]
for ri, row in enumerate(sheet1_data, start=2):
    style = "6" if ri % 2 == 0 else "5"
    cells = [(v, style) for v in row]
    s1_rows.append(make_row(ri, cells, style))
s1_xml = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"><pane ySplit="1" topLeftCell="A2" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>
  <sheetFormatPr defaultRowHeight="24" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols>
    <col min="1" max="1" width="14" customWidth="1"/>
    <col min="2" max="2" width="14" customWidth="1"/>
    <col min="3" max="3" width="12" customWidth="1"/>
    <col min="4" max="4" width="13" customWidth="1"/>
    <col min="5" max="5" width="14" customWidth="1"/>
    <col min="6" max="6" width="22" customWidth="1"/>
    <col min="7" max="7" width="16" customWidth="1"/>
    <col min="8" max="8" width="13" customWidth="1"/>
    <col min="9" max="11" width="32" customWidth="1"/>
    <col min="12" max="12" width="14" customWidth="1"/>
    <col min="13" max="13" width="18" customWidth="1"/>
    <col min="14" max="14" width="12" customWidth="1"/>
    <col min="15" max="15" width="12" customWidth="1"/>
  </cols>
  <sheetData>
{"".join(s1_rows)}
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>
'''
SHEETS.append(("学员概览", s1_xml))

# Sheet 2
header2 = [(h, "4") for h in HEADERS_SHEET2]
s2_rows = [make_row(1, header2, "4")]
for ri, row in enumerate(sheet2_data, start=2):
    style = "6" if ri % 2 == 0 else "5"
    cells = []
    for j, v in enumerate(row):
        if j < 2:
            cells.append((v, style))
        elif isinstance(v, (int, float)):
            cells.append((v, "8"))  # 整数
        else:
            cells.append((v, style))
    s2_rows.append(make_row(ri, cells, style))
s2_xml = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"><pane ySplit="1" topLeftCell="A2" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>
  <sheetFormatPr defaultRowHeight="24" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols>
    <col min="1" max="1" width="9" customWidth="1"/>
    <col min="2" max="2" width="22" customWidth="1"/>
    <col min="3" max="3" width="22" customWidth="1"/>
    <col min="4" max="4" width="20" customWidth="1"/>
    <col min="5" max="5" width="18" customWidth="1"/>
    <col min="6" max="6" width="22" customWidth="1"/>
    <col min="7" max="7" width="18" customWidth="1"/>
    <col min="8" max="8" width="36" customWidth="1"/>
    <col min="9" max="9" width="36" customWidth="1"/>
    <col min="10" max="10" width="14" customWidth="1"/>
  </cols>
  <sheetData>
{"".join(s2_rows)}
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>
'''
SHEETS.append(("工具使用周报", s2_xml))

# Sheet 3
header3 = [(h, "4") for h in HEADERS_SHEET3]
s3_rows = [make_row(1, header3, "4")]
for ri, row in enumerate(sheet3_data, start=2):
    style = "6" if ri % 2 == 0 else "5"
    cells = [(row[0], style)]
    for v in row[1:6]:
        cells.append((v, "8"))  # 数字
    cells.append((f"=F{ri}-B{ri}", "8"))  # 变化趋势
    cells.append((f'=IF(F{ri}>=4,"绿",IF(F{ri}>=2,"黄","红"))', "11"))  # 信号灯居中
    s3_rows.append(make_row(ri, cells, style))

note_row = len(sheet3_data) + 2
note_cells = [("说明：5分=完全做到；4分=大部分做到；3分=基本做到；2分=刚开始；1分=未做到。信号灯：绿=4-5分；黄=2-3分；红=1分。", "12")]
s3_rows.append(make_row(note_row, note_cells, "12"))
s3_xml = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"><pane ySplit="1" topLeftCell="A2" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>
  <sheetFormatPr defaultRowHeight="24" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols>
    <col min="1" max="1" width="38" customWidth="1"/>
    <col min="2" max="2" width="14" customWidth="1"/>
    <col min="3" max="3" width="14" customWidth="1"/>
    <col min="4" max="4" width="12" customWidth="1"/>
    <col min="5" max="5" width="12" customWidth="1"/>
    <col min="6" max="6" width="12" customWidth="1"/>
    <col min="7" max="7" width="12" customWidth="1"/>
    <col min="8" max="8" width="10" customWidth="1"/>
  </cols>
  <sheetData>
{"".join(s3_rows)}
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>
'''
SHEETS.append(("行为指标变化", s3_xml))

# Sheet 4
header4 = [(h, "4") for h in HEADERS_SHEET4]
s4_rows = [make_row(1, header4, "4")]
for ri, row in enumerate(sheet4_data, start=2):
    style = "6" if ri % 2 == 0 else "5"
    cells = [(row[0], style)]
    cells.append((row[1], "11"))  # 满意度
    cells.append((row[2]/100, "9"))  # 留存率(小数百分比)
    cells.append((row[3], "11"))  # 投入度
    cells.append((row[4], style))  # 关键词
    cells.append((row[5], "8"))  # 主动反馈次数
    s4_rows.append(make_row(ri, cells, style))
note_row = len(sheet4_data) + 2
s4_rows.append(make_row(note_row, [("说明：满意度与投入度评分 1-10 分。留存率为团队层面月度数据（百分比格式）。", "12")], "12"))
s4_xml = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"><pane ySplit="1" topLeftCell="A2" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>
  <sheetFormatPr defaultRowHeight="24" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols>
    <col min="1" max="1" width="20" customWidth="1"/>
    <col min="2" max="2" width="22" customWidth="1"/>
    <col min="3" max="3" width="22" customWidth="1"/>
    <col min="4" max="4" width="22" customWidth="1"/>
    <col min="5" max="5" width="36" customWidth="1"/>
    <col min="6" max="6" width="20" customWidth="1"/>
  </cols>
  <sheetData>
{"".join(s4_rows)}
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>
'''
SHEETS.append(("Z世代员工反馈", s4_xml))

# Sheet 5
header5 = [(h, "4") for h in HEADERS_SHEET5]
s5_rows = [make_row(1, header5, "4")]
for ri, row in enumerate(sheet5_data, start=2):
    style = "6" if ri % 2 == 0 else "5"
    cells = [(row[0], style)]
    for v in row[1:5]:
        cells.append((v, "8"))
    if ri == 2:
        cells.append(("—", style))
    else:
        cells.append((f"=(AVERAGE(B{ri}:E{ri})-AVERAGE(B{ri-1}:E{ri-1}))/AVERAGE(B{ri-1}:E{ri-1})", "9"))
    s5_rows.append(make_row(ri, cells, style))
note_row = len(sheet5_data) + 2
s5_rows.append(make_row(note_row, [("说明：综合环比=当月4项指标平均值与上月对比，>0 为提升，<0 为下降。", "12")], "12"))
s5_xml = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"><pane ySplit="1" topLeftCell="A2" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>
  <sheetFormatPr defaultRowHeight="24" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols>
    <col min="1" max="1" width="22" customWidth="1"/>
    <col min="2" max="2" width="20" customWidth="1"/>
    <col min="3" max="3" width="20" customWidth="1"/>
    <col min="4" max="4" width="20" customWidth="1"/>
    <col min="5" max="5" width="20" customWidth="1"/>
    <col min="6" max="6" width="22" customWidth="1"/>
  </cols>
  <sheetData>
{"".join(s5_rows)}
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>
'''
SHEETS.append(("业务结果", s5_xml))

# Sheet 6
s6_rows = [make_row(1, [("可视化看板仪表盘", "7")] + [(h, "4") for h in HEADERS_SHEET6_HEADER[1:]], "4")]
for ri, row in enumerate(sheet6_data, start=2):
    style = "6" if ri % 2 == 0 else "5"
    cells = []
    for j, v in enumerate(row):
        if j < 2:
            cells.append((v, style))
        elif isinstance(v, str) and v.startswith("="):
            cells.append((v, "10"))  # 公式
        elif isinstance(v, (int, float)):
            cells.append((v, "10"))  # 数字
        else:
            cells.append((v, "10"))
    s6_rows.append(make_row(ri, cells, style))
total_row_n = len(sheet6_data) + 2
total_cells = [("看板总评", "7"), ("整体信号灯：5绿2黄1红 偏积极", "7"), ("", "7"), ("", "7"), ("", "7"), ("", "7"), ("", "7")]
s6_rows.append(make_row(total_row_n, total_cells, "7"))
s6_xml = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"><pane ySplit="1" topLeftCell="A2" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>
  <sheetFormatPr defaultRowHeight="26" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols>
    <col min="1" max="1" width="22" customWidth="1"/>
    <col min="2" max="2" width="22" customWidth="1"/>
    <col min="3" max="3" width="24" customWidth="1"/>
    <col min="4" max="4" width="24" customWidth="1"/>
    <col min="5" max="5" width="22" customWidth="1"/>
    <col min="6" max="6" width="22" customWidth="1"/>
    <col min="7" max="7" width="22" customWidth="1"/>
  </cols>
  <sheetData>
{"".join(s6_rows)}
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>
'''
SHEETS.append(("可视化看板", s6_xml))

# Sheet 7
header7 = [(h, "4") for h in HEADERS_SHEET7]
s7_rows = [make_row(1, header7, "4")]
for ri, row in enumerate(sheet7_data, start=2):
    style = "6" if ri % 2 == 0 else "5"
    cells = [(v, style) for v in row]
    s7_rows.append(make_row(ri, cells, style))
note_row = len(sheet7_data) + 2
s7_rows.append(make_row(note_row, [("建议来源：基于 Sheet3 行为指标变化、Sheet6 信号灯状态自动识别（按需手动调整）。", "12")], "12"))
s7_xml = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"><pane ySplit="1" topLeftCell="A2" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>
  <sheetFormatPr defaultRowHeight="24" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols>
    <col min="1" max="1" width="10" customWidth="1"/>
    <col min="2" max="2" width="44" customWidth="1"/>
    <col min="3" max="3" width="60" customWidth="1"/>
    <col min="4" max="4" width="16" customWidth="1"/>
    <col min="5" max="5" width="16" customWidth="1"/>
  </cols>
  <sheetData>
{"".join(s7_rows)}
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>
'''
SHEETS.append(("上级行动清单", s7_xml))

# ---- 6. 写 workbook.xml / rels / [Content_Types].xml ----
sheets_xml_entries = ""
rels_entries = ""
content_types_overrides = ""
for i, (name, _) in enumerate(SHEETS, start=1):
    sid = i
    rid = f"rId{i+3}"
    sheets_xml_entries += f'<sheet name="{xe(name)}" sheetId="{sid}" r:id="{rid}"/>\n'
    rels_entries += f'<Relationship Id="{rid}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet{i}.xml"/>\n'
    content_types_overrides += f'<Override PartName="/xl/worksheets/sheet{i}.xml" ContentType="application/vnd.openxml-officedocument.spreadsheetml.worksheet+xml"/>\n'

workbook_xml = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <fileVersion appName="xl" lastEdited="7" lowestEdited="7"/>
  <workbookPr defaultThemeVersion="166925"/>
  <bookViews>
    <workbookView xWindow="0" yWindow="0" windowWidth="20140" windowHeight="10960"/>
  </bookViews>
  <sheets>
{sheets_xml_entries}  </sheets>
  <calcPr calcId="191029"/>
</workbook>
'''
(WORK / "xl" / "workbook.xml").write_text(workbook_xml, encoding="utf-8")

wb_rels = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
  <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml"/>
{rels_entries}</Relationships>
'''
(WORK / "xl" / "_rels" / "workbook.xml.rels").write_text(wb_rels, encoding="utf-8")

content_types = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxml-officedocument.spreadsheetml.sheet.main+xml"/>
  <Override PartName="/xl/styles.xml" ContentType="application/vnd.openxml-officedocument.spreadsheetml.styles+xml"/>
  <Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxml-officedocument.spreadsheetml.sharedStrings+xml"/>
{content_types_overrides}</Types>
'''
(WORK / "[Content_Types].xml").write_text(content_types, encoding="utf-8")

# 写 7 个 sheet xml
for i, (name, xml) in enumerate(SHEETS, start=1):
    (sheets_dir / f"sheet{i}.xml").write_text(xml, encoding="utf-8")
    print(f"sheet{i}.xml: {name} ({len(xml)} bytes)")

# ---- 7. 打包 ----
OUT.parent.mkdir(parents=True, exist_ok=True)
if OUT.exists():
    OUT.unlink()

with zipfile.ZipFile(OUT, "w", zipfile.ZIP_DEFLATED) as zf:
    for root, dirs, files in os.walk(WORK):
        for f in files:
            full = Path(root) / f
            arc = str(full.relative_to(WORK)).replace("\\", "/")
            zf.write(full, arc)

print(f"\n✅ 打包完成: {OUT}")
print(f"   文件大小: {OUT.stat().st_size} bytes")
