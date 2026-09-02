# -*- coding: utf-8 -*-
"""构建 07_互动流程.xlsx - 120分钟课程互动流程时间表"""

import subprocess
import shutil
import os

SKILL_DIR = r"C:\Users\Administrator\.claude\skills\Excel表格处理"
TMP_DIR = r"D:\CC\temp\xlsx_work_07"
OUT_PATH = r"D:\新课开发\专精特新\10政府关系与政策资源对接专精特新认定与产业基金经营\成果demo\07_互动流程.xlsx"

# 1. 复制模板
if os.path.exists(TMP_DIR):
    shutil.rmtree(TMP_DIR)
shutil.copytree(os.path.join(SKILL_DIR, "templates", "minimal_xlsx"), TMP_DIR)

# 2. 配置多 sheet（2个sheet）
# Sheet1: 07_互动流程时间表
# Sheet2: 07_学员参与记录

# === 修改 workbook.xml ===
with open(os.path.join(TMP_DIR, "xl", "workbook.xml"), "r", encoding="utf-8") as f:
    wb_content = f.read()

wb_content = wb_content.replace(
    '<sheet name="Sheet1" sheetId="1" r:id="rId1"/>',
    '<sheet name="07_互动流程时间表" sheetId="1" r:id="rId1"/>\n  <sheet name="07_学员参与记录" sheetId="2" r:id="rId4"/>'
)
with open(os.path.join(TMP_DIR, "xl", "workbook.xml"), "w", encoding="utf-8") as f:
    f.write(wb_content)

# === 修改 workbook.xml.rels ===
with open(os.path.join(TMP_DIR, "xl", "_rels", "workbook.xml.rels"), "r", encoding="utf-8") as f:
    rels_content = f.read()

rels_content = rels_content.replace(
    "</Relationships>",
    '  <Relationship Id="rId4" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet2.xml"/>\n</Relationships>'
)
with open(os.path.join(TMP_DIR, "xl", "_rels", "workbook.xml.rels"), "w", encoding="utf-8") as f:
    f.write(rels_content)

# === 修改 [Content_Types].xml ===
with open(os.path.join(TMP_DIR, "[Content_Types].xml"), "r", encoding="utf-8") as f:
    ct_content = f.read()

ct_content = ct_content.replace(
    "</Types>",
    '  <Override PartName="/xl/worksheets/sheet2.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>\n</Types>'
)
with open(os.path.join(TMP_DIR, "[Content_Types].xml"), "w", encoding="utf-8") as f:
    f.write(ct_content)

# === 创建 sheet2.xml ===
shutil.copy(
    os.path.join(TMP_DIR, "xl", "worksheets", "sheet1.xml"),
    os.path.join(TMP_DIR, "xl", "worksheets", "sheet2.xml")
)

# 3. 构建 sharedStrings
# Sheet1 字符串
sheet1_strings = [
    "07_互动流程时间表",
    "时段",
    "分钟",
    "段落",
    "内容",
    "讲师动作",
    "学员动作",
    "互动形式",
    "开场",
    "5",
    "目标对齐",
    "直接给目标：120分钟后你能独立完成申报材料初稿",
    "说：今天的目标",
    "写下1个具体期待",
    "2人组",
    "认定前",
    "40",
    "企业自评",
    "讲：什么是企业自评（5min）",
    "听",
    "讲授",
    "互动：诊断你的企业差哪几项（15min）",
    "2人组诊断",
    "练习",
    "提炼：企业自评工具（10min）",
    "听+记",
    "讲授",
    "认定中",
    "40",
    "材料被打回",
    "案例引入：星耀科技材料被打回（5min）",
    "听",
    "案例",
    "留白引导：那一刻你做哪3件事（8min）",
    "写+2人组",
    "留白引导",
    "学员分享：6种回应类型（10min）",
    "分享",
    "讨论",
    "提炼原则：3步整改法（7min）",
    "听",
    "讲授",
    "认定后",
    "35",
    "维护与资源对接",
    "引入：认定后两个误区（5min）",
    "听",
    "案例",
    "关键概念：维护2件事（10min）",
    "听",
    "讲授",
    "产业基金对接路径（15min）",
    "练：30秒自我介绍",
    "练习",
    "收尾：3件事（5min）",
    "听+记",
    "总结",
]

# Sheet2 字符串
sheet2_strings = [
    "07_学员参与记录",
    "序号",
    "学员姓名",
    "互动环节",
    "参与方式",
    "反应层级",
    "备注",
    "1",
    "待填写",
    "开场-目标对齐",
    "写下期待",
    "反应层",
    "",
    "2",
    "待填写",
    "认定前-企业自评诊断",
    "2人组讨论",
    "学习层",
    "",
    "3",
    "待填写",
    "认定中-留白案例",
    "写+讨论",
    "学习层",
    "",
    "4",
    "待填写",
    "认定中-学员分享",
    "口头分享",
    "行为层",
    "",
    "5",
    "待填写",
    "认定后-30秒自我介绍练习",
    "练习+互评",
    "行为层",
    "",
]

all_strings = sheet1_strings + sheet2_strings
sheet1_offset = 0
sheet2_offset = len(sheet1_strings)

# 构建 sharedStrings.xml
ss_lines = ['<?xml version="1.0" encoding="UTF-8" standalone="yes"?>']
ss_lines.append('<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"')
ss_lines.append(f'  count="{len(all_strings)}" uniqueCount="{len(all_strings)}">')
for s in all_strings:
    ss_lines.append(f'  <si><t>{s}</t></si>')
ss_lines.append('</sst>')

with open(os.path.join(TMP_DIR, "xl", "sharedStrings.xml"), "w", encoding="utf-8") as f:
    f.write("\n".join(ss_lines))

# 4. 构建 sheet1.xml（互动流程时间表）
# 列：A=时段, B=分钟, C=段落, D=内容, E=讲师动作, F=学员动作, G=互动形式

def row_xml(r, cells):
    return f'  <row r="{r}">{"".join(cells)}</row>\n'

def str_cell(col, row, idx, style="0"):
    return f'<c r="{col}{row}" t="s" s="{style}"><v>{idx}</v></c>'

def num_cell(col, row, val, style="0"):
    return f'<c r="{col}{row}" s="{style}"><v>{val}</v></c>'

# 数据行（1-indexed, header=1）
# 行1: 标题行（合并A1:G1）
# 行2: 列头
# 行3-7: 开场+认定前（5行）
# 行8-11: 认定中（4行）
# 行12-16: 认定后（5行）

data_rows = []
# 行3: 开场 5min
data_rows.append((3, "0-5min", 5, "开场", "目标对齐", "直接给目标：120分钟后你能独立完成申报材料初稿", "说：今天的目标", "写下1个具体期待", "2人组"))
# 行4: 空白分隔行（略过，用段落列合并）
# 认定前段落
data_rows.append((4, "5-10min", 5, "认定前", "企业自评-讲", "讲：什么是企业自评", "听", "讲授", ""))
data_rows.append((5, "10-25min", 15, "认定前", "企业自评-诊断", "互动：诊断你的企业差哪几项", "2人组诊断", "练习", ""))
data_rows.append((6, "25-35min", 10, "认定前", "企业自评-提炼", "提炼：企业自评工具", "听+记", "讲授", ""))
# 认定中段落
data_rows.append((7, "35-40min", 5, "认定中", "材料被打回-引入", "案例引入：星耀科技材料被打回", "听", "案例", ""))
data_rows.append((8, "40-48min", 8, "认定中", "留白引导", "留白引导：那一刻你做哪3件事", "写+2人组", "留白引导", ""))
data_rows.append((9, "48-58min", 10, "认定中", "学员分享", "学员分享：6种回应类型", "分享", "讨论", ""))
data_rows.append((10, "58-65min", 7, "认定中", "提炼原则", "提炼原则：3步整改法", "听", "讲授", ""))
# 认定后段落
data_rows.append((11, "65-70min", 5, "认定后", "维护-引入", "引入：认定后两个误区", "听", "案例", ""))
data_rows.append((12, "70-80min", 10, "认定后", "维护-概念", "关键概念：维护2件事", "听", "讲授", ""))
data_rows.append((13, "80-95min", 15, "认定后", "产业基金对接", "产业基金对接路径+练习30秒自我介绍", "练：30秒自我介绍", "练习", ""))
data_rows.append((14, "95-100min", 5, "认定后", "收尾", "收尾：3件事", "听+记", "总结", ""))

sheet1_rows = []

# 列定义
col_widths = """<cols>
  <col min="1" max="1" width="12" customWidth="1"/>
  <col min="2" max="2" width="8" customWidth="1"/>
  <col min="3" max="3" width="10" customWidth="1"/>
  <col min="4" max="4" width="18" customWidth="1"/>
  <col min="5" max="5" width="28" customWidth="1"/>
  <col min="6" max="6" width="18" customWidth="1"/>
  <col min="7" max="7" width="14" customWidth="1"/>
</cols>"""

# 行1: 大标题
sheet1_rows.append(f'  <row r="1" ht="22" customHeight="1">{str_cell("A",1,0,"4")}</row>\n')

# 行2: 列头
sheet1_rows.append(f'  <row r="2" ht="18" customHeight="1">{str_cell("A",2,1,"4")}{str_cell("B",2,2,"4")}{str_cell("C",2,3,"4")}{str_cell("D",2,4,"4")}{str_cell("E",2,5,"4")}{str_cell("F",2,6,"4")}{str_cell("G",2,7,"4")}</row>\n')

# 数据行
# 字符串索引映射（sheet1_offset=0）
# 0:07_互动流程时间表, 1:时段, 2:分钟, 3:段落, 4:内容, 5:讲师动作, 6:学员动作, 7:互动形式
# 8:开场, 9:5, 10:目标对齐, 11:直接给目标..., 12:说..., 13:写下..., 14:2人组
# 15:认定前, 16:40, 17:企业自评, 18:讲：什么是..., 19:听, 20:讲授
# 21:互动：诊断..., 22:2人组诊断, 23:练习, 24:提炼：企业自评工具, 25:听+记, 26:讲授
# 27:认定中, 28:40, 29:材料被打回, 30:案例引入..., 31:听, 32:案例
# 33:留白引导..., 34:写+2人组, 35:留白引导, 36:学员分享..., 37:分享, 38:讨论
# 39:提炼原则..., 40:听, 41:讲授
# 42:认定后, 43:35, 44:维护与资源对接, 45:引入..., 46:听, 47:案例
# 48:关键概念..., 49:听, 50:讲授, 51:产业基金对接路径+练习..., 52:练..., 53:练习
# 54:收尾..., 55:听+记, 56:总结

# 数据行的字符串索引
row_strings = [
    # row3 开场
    (3, 8, 9, 10, 11, 12, 13, 14),  # A=时段idx8, B=分钟idx9, C=段落idx10, D=内容idx11, E=讲师idx12, F=学员idx13, G=互动idx14
    # row4 认定前-讲
    (4, 15, 9, 16, 17, 18, 19, 20),  # 5min
    # row5 认定前-诊断
    (5, 15, 21, 16, 22, 21, 22, 23),
    # row6 认定前-提炼
    (6, 15, 24, 16, 25, 24, 25, 26),
    # row7 认定中-引入
    (7, 27, 28, 29, 30, 31, 32, 33),
    # row8 认定中-留白
    (8, 27, 34, 28, 35, 33, 35, 36),
    # row9 认定中-分享
    (9, 27, 37, 28, 38, 36, 37, 38),
    # row10 认定中-提炼
    (10, 27, 39, 28, 40, 39, 40, 41),
    # row11 认定后-引入
    (11, 42, 43, 44, 45, 46, 47, 48),
    # row12 认定后-概念
    (12, 42, 49, 43, 50, 48, 49, 50),
    # row13 认定后-基金
    (13, 42, 51, 43, 52, 51, 52, 53),
    # row14 认定后-收尾
    (14, 42, 54, 43, 55, 54, 55, 56),
]

for (r, ta, tb, tc, td, te, tf, tg) in row_strings:
    a_idx = ta
    b_idx = tb
    c_idx = tc
    d_idx = td
    e_idx = te
    f_idx = tf
    g_idx = tg
    # 判断是不是分钟数列（B列），用数字
    if b_idx == 9 or b_idx == 21 or b_idx == 28 or b_idx == 34 or b_idx == 37 or b_idx == 39 or b_idx == 43 or b_idx == 49 or b_idx == 51 or b_idx == 54:
        # 分钟数
        minutes_map = {9: 5, 21: 5, 28: 8, 34: 8, 37: 10, 39: 7, 43: 5, 49: 10, 51: 15, 54: 5}
        mval = minutes_map.get(b_idx, 0)
        row_str = f'  <row r="{r}">{str_cell("A",r,a_idx,"0")}{num_cell("B",r,mval,"0")}{str_cell("C",r,c_idx,"0")}{str_cell("D",r,d_idx,"0")}{str_cell("E",r,e_idx,"0")}{str_cell("F",r,f_idx,"0")}{str_cell("G",r,g_idx,"0")}</row>\n'
    else:
        row_str = f'  <row r="{r}">{str_cell("A",r,a_idx,"0")}{num_cell("B",r,b_idx,"0")}{str_cell("C",r,c_idx,"0")}{str_cell("D",r,d_idx,"0")}{str_cell("E",r,e_idx,"0")}{str_cell("F",r,f_idx,"0")}{str_cell("G",r,g_idx,"0")}</row>\n'
    sheet1_rows.append(row_str)

sheet1_content = f"""<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet
  xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView workbookViewId="0"/>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDesent="0.25"
    xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  {col_widths}
  <sheetData>
{"".join(sheet1_rows)}  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>"""

with open(os.path.join(TMP_DIR, "xl", "worksheets", "sheet1.xml"), "w", encoding="utf-8") as f:
    f.write(sheet1_content)

# 5. 构建 sheet2.xml（学员参与记录）
# 列: A=序号, B=学员姓名, C=互动环节, D=参与方式, E=反应层级, F=备注
sheet2_rows = []
sheet2_rows.append(f'  <row r="1" ht="22" customHeight="1">{str_cell("A",1,0,"4")}</row>\n')
sheet2_rows.append(f'  <row r="2" ht="18" customHeight="1">{str_cell("A",2,1,"4")}{str_cell("B",2,2,"4")}{str_cell("C",2,3,"4")}{str_cell("D",2,4,"4")}{str_cell("E",2,5,"4")}{str_cell("F",2,6,"4")}</row>\n')

# 数据行
# 字符串索引（sheet2_offset={sheet2_offset}）
# 0:07_学员参与记录, 1:序号, 2:学员姓名, 3:互动环节, 4:参与方式, 5:反应层级, 6:备注
# 7:1, 8:待填写, 9:开场-目标对齐, 10:写下期待, 11:反应层, 12:空
# 13:2, 14:待填写, 15:认定前-企业自评诊断, 16:2人组讨论, 17:学习层, 18:空
# 19:3, 20:待填写, 21:认定中-留白案例, 22:写+讨论, 23:学习层, 24:空
# 25:4, 26:待填写, 27:认定中-学员分享, 28:口头分享, 29:行为层, 30:空
# 31:5, 32:待填写, 33:认定后-30秒自我介绍练习, 34:练习+互评, 35:行为层, 36:空

row2_data = [
    (3, 7, 8, 9, 10, 11, 12),
    (4, 13, 14, 15, 16, 17, 18),
    (5, 19, 20, 21, 22, 23, 24),
    (6, 25, 26, 27, 28, 29, 30),
    (7, 31, 32, 33, 34, 35, 36),
]

for (r, ra, rb, rc, rd, re, rf) in row2_data:
    sheet2_rows.append(f'  <row r="{r}">{str_cell("A",r,ra,"0")}{str_cell("B",r,rb,"0")}{str_cell("C",r,rc,"0")}{str_cell("D",r,rd,"0")}{str_cell("E",r,re,"0")}{str_cell("F",r,rf,"0")}</row>\n')

col_widths2 = """<cols>
  <col min="1" max="1" width="6" customWidth="1"/>
  <col min="2" max="2" width="12" customWidth="1"/>
  <col min="3" max="3" width="22" customWidth="1"/>
  <col min="4" max="4" width="14" customWidth="1"/>
  <col min="5" max="5" width="10" customWidth="1"/>
  <col min="6" max="6" width="20" customWidth="1"/>
</cols>"""

sheet2_content = f"""<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet
  xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView workbookViewId="0"/>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDesent="0.25"
    xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  {col_widths2}
  <sheetData>
{"".join(sheet2_rows)}  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>"""

with open(os.path.join(TMP_DIR, "xl", "worksheets", "sheet2.xml"), "w", encoding="utf-8") as f:
    f.write(sheet2_content)

# 6. 打包
subprocess.run(["python3", os.path.join(SKILL_DIR, "scripts", "xlsx_pack.py"), TMP_DIR, OUT_PATH], check=True)
print(f"Created: {OUT_PATH}")
