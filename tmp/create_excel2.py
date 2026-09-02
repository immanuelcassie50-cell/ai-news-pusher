# -*- coding: utf-8 -*-
import os
import shutil
import zipfile
from xml.sax.saxutils import escape

SKILL_DIR = "C:/Users/Administrator/.claude/skills/Excel表格处理"
OUTPUT_DIR = "D:/Downloads/情景领导/传统版/完整课程包/15_配套表单Excel版"

def copy_template():
    src = os.path.join(SKILL_DIR, "templates", "minimal_xlsx")
    dst = "/tmp/xlsx_work"
    if os.path.exists(dst):
        shutil.rmtree(dst)
    shutil.copytree(src, dst)
    return dst

def build_shared_strings(strings):
    count = len(strings)
    items = []
    for s in strings:
        escaped = escape(s).replace('"', '&quot;')
        items.append('<si><t xml:space="preserve">' + escaped + '</t></si>')
    return '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="%d" uniqueCount="%d">
    %s
</sst>''' % (count, count, ''.join(items))

def build_sheet(rows, col_widths=None):
    if col_widths is None:
        col_widths = {"A": 20, "B": 45}

    cols_xml = ""
    for col, width in sorted(col_widths.items()):
        cols_xml += '<col min="%d" max="%d" width="%d" customWidth="1"/>\n' % (ord(col)-64, ord(col)-64, width)

    rows_xml = ""
    for r_idx, row in enumerate(rows, 1):
        row_xml = '<row r="%d"' % r_idx
        if row.get('height'):
            row_xml += ' ht="%s" customHeight="1"' % row["height"]
        row_xml += ">"

        for cell in row.get('cells', []):
            addr = cell['addr']
            val = cell.get('v', '')
            typ = cell.get('t', 's')
            style = cell.get('s', '4')

            if typ == 's':
                row_xml += '<c r="%s" t="s" s="%s"><v>%s</v></c>\n' % (addr, style, val)
            else:
                row_xml += '<c r="%s" s="%s"><v>%s</v></c>\n' % (addr, style, val)

        row_xml += "</row>\n"
        rows_xml += row_xml

    return '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"/></sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDesent="0.25"
    xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols>%s</cols>
  <sheetData>%s</sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>''' % (cols_xml, rows_xml)

def pack_xlsx(dst, output_path):
    with zipfile.ZipFile(output_path, 'w', zipfile.ZIP_DEFLATED) as zf:
        for root, dirs, files in os.walk(dst):
            for file in files:
                file_path = os.path.join(root, file)
                arc_name = os.path.relpath(file_path, dst)
                zf.write(file_path, arc_name)
    print("Created: " + output_path)

def create_workbook_files(sheets_data, dst):
    sheets_xml = ""
    for i, (name, _, _) in enumerate(sheets_data, 1):
        safe_name = name.replace("&", "&amp;")
        sheets_xml += '<sheet name="%s" sheetId="%d" r:id="rId%d"/>\n' % (safe_name, i, i)

    workbook_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <fileVersion appName="xl" lastEdited="7" lowestEdited="7"/>
  <workbookPr defaultThemeVersion="166925"/>
  <bookViews><workbookView xWindow="0" yWindow="0" windowWidth="20140" windowHeight="10960"/></bookViews>
  <sheets>%s</sheets>
  <calcPr calcId="191029"/>
</workbook>''' % sheets_xml
    with open(os.path.join(dst, "xl", "workbook.xml"), "w", encoding="utf-8") as f:
        f.write(workbook_xml)

    rels_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
  <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml"/>
'''
    for i in range(2, len(sheets_data) + 1):
        rels_xml += '  <Relationship Id="rId%d" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet%d.xml"/>\n' % (i+2, i)
    rels_xml += '</Relationships>'
    with open(os.path.join(dst, "xl", "_rels", "workbook.xml.rels"), "w", encoding="utf-8") as f:
        f.write(rels_xml)

    ct_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
  <Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>
  <Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/>
'''
    for i in range(1, len(sheets_data) + 1):
        ct_xml += '  <Override PartName="/xl/worksheets/sheet%d.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>\n' % i
    ct_xml += '</Types>'
    with open(os.path.join(dst, "[Content_Types].xml"), "w", encoding="utf-8") as f:
        f.write(ct_xml)

    for i, (name, rows, col_widths) in enumerate(sheets_data, 1):
        sheet_xml = build_sheet(rows, col_widths)
        sheet_path = os.path.join(dst, "xl", "worksheets", "sheet%d.xml" % i)
        with open(sheet_path, "w", encoding="utf-8") as f:
            f.write(sheet_xml)

# ======================
# 学员档案管理表
# ======================
dst = copy_template()

strings = [
    "因人施教：经典情境带教法",
    "学员档案管理表",
    "档案目录",
    "序号",
    "姓名",
    "岗位",
    "诊断任务",
    "类型",
    "培训日期",
    "跟进日期",
    "状态",
    "备注",
    "1",
    "（请填写）",
    "（请选择S1/S2/S3/S4）",
    "（待跟进/进行中/已完成）",
    "档案编号说明",
    "S1=新手型，S2=热血型，S3=倦怠型，S4=成熟型",
    "状态说明",
    "待跟进：尚未开始跟进",
    "进行中：正在执行带教方案",
    "已完成：方案完成或人员已离职",
]

with open(os.path.join(dst, "xl", "sharedStrings.xml"), "w", encoding="utf-8") as f:
    f.write(build_shared_strings(strings))

sheets_data = []

dir_rows = [
    {"cells": [{"addr": "A1", "v": 0, "s": "4"}, {"addr": "B1", "v": 1, "s": "4"}]},
    {"cells": [{"addr": "A3", "v": 2, "s": "4"}, {"addr": "B3", "v": 3, "s": "4"}, {"addr": "C3", "v": 4, "s": "4"}, {"addr": "D3", "v": 5, "s": "4"}, {"addr": "E3", "v": 6, "s": "4"}, {"addr": "F3", "v": 7, "s": "4"}, {"addr": "G3", "v": 8, "s": "4"}, {"addr": "H3", "v": 9, "s": "4"}]},
]

for i in range(20):
    row_num = i + 4
    dir_rows.append({
        "cells": [
            {"addr": "A%d" % row_num, "v": 12, "s": "1"},
            {"addr": "B%d" % row_num, "v": 13, "s": "0"},
            {"addr": "C%d" % row_num, "v": 13, "s": "0"},
            {"addr": "D%d" % row_num, "v": 13, "s": "0"},
            {"addr": "E%d" % row_num, "v": 14, "s": "0"},
            {"addr": "F%d" % row_num, "v": 15, "s": "0"},
            {"addr": "G%d" % row_num, "v": 15, "s": "0"},
            {"addr": "H%d" % row_num, "v": 15, "s": "0"},
        ]
    })

legend_start = 25
dir_rows.append({"cells": [{"addr": "A%d" % legend_start, "v": 16, "s": "4"}]})
dir_rows.append({"cells": [{"addr": "A%d" % (legend_start+1), "v": 17, "s": "0"}]})
dir_rows.append({"cells": [{"addr": "A%d" % (legend_start+3), "v": 18, "s": "4"}]})
dir_rows.append({"cells": [{"addr": "A%d" % (legend_start+4), "v": 19, "s": "0"}]})
dir_rows.append({"cells": [{"addr": "A%d" % (legend_start+5), "v": 15, "s": "0"}]})
dir_rows.append({"cells": [{"addr": "A%d" % (legend_start+6), "v": 15, "s": "0"}]})

sheets_data.append(("档案目录", dir_rows, {"A": 8, "B": 15, "C": 20, "D": 12, "E": 12, "F": 12, "G": 12, "H": 30}))

create_workbook_files(sheets_data, dst)
pack_xlsx(dst, os.path.join(OUTPUT_DIR, "学员档案管理表.xlsx"))

# ======================
# 课程评估汇总表
# ======================
dst = copy_template()

strings = [
    "因人施教：经典情境带教法",
    "课程评估汇总表",
    "评估数据录入",
    "序号",
    "课程内容",
    "讲师表达",
    "培训组织",
    "整体收获",
    "平均分",
    "学员姓名（选填）",
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
    "11", "12", "13", "14", "15",
    "自动统计",
    "评价维度",
    "5分人数",
    "4分人数",
    "3分人数",
    "2分人数",
    "1分人数",
    "平均分",
    "课程内容",
    "讲师表达",
    "培训组织",
    "整体收获",
    "汇总",
    "总评分人数",
    "图表数据",
    "各维度评分分布",
    "评分维度",
    "5分", "4分", "3分", "2分", "1分",
    "课程内容",
    "讲师表达",
    "培训组织",
    "整体收获",
    "说明：",
    "5=非常满意，4=满意，3=一般，2=不满意，1=非常不满意",
]

with open(os.path.join(dst, "xl", "sharedStrings.xml"), "w", encoding="utf-8") as f:
    f.write(build_shared_strings(strings))

sheets_data = []

data_rows = [
    {"cells": [{"addr": "A1", "v": 0, "s": "4"}, {"addr": "B1", "v": 1, "s": "4"}]},
    {"cells": [{"addr": "A3", "v": 2, "s": "4"}, {"addr": "B3", "v": 3, "s": "4"}, {"addr": "C3", "v": 4, "s": "4"}, {"addr": "D3", "v": 5, "s": "4"}, {"addr": "E3", "v": 6, "s": "4"}, {"addr": "F3", "v": 7, "s": "4"}]},
]

for i in range(15):
    row_num = i + 4
    idx = 8 + i
    data_rows.append({
        "cells": [
            {"addr": "A%d" % row_num, "v": idx, "s": "1"},
            {"addr": "B%d" % row_num, "v": 8, "s": "1"},
            {"addr": "C%d" % row_num, "v": 8, "s": "1"},
            {"addr": "D%d" % row_num, "v": 8, "s": "1"},
            {"addr": "E%d" % row_num, "v": 8, "s": "1"},
            {"addr": "F%d" % row_num, "v": 8, "s": "1"},
        ]
    })

sheets_data.append(("评估数据", data_rows, {"A": 8, "B": 15, "C": 15, "D": 15, "E": 15, "F": 15}))

stat_rows = [
    {"cells": [{"addr": "A1", "v": 24, "s": "4"}, {"addr": "B1", "v": 25, "s": "4"}]},
    {"cells": [{"addr": "A3", "v": 26, "s": "4"}, {"addr": "B3", "v": 27, "s": "4"}, {"addr": "C3", "v": 28, "s": "4"}, {"addr": "D3", "v": 29, "s": "4"}, {"addr": "E3", "v": 30, "s": "4"}, {"addr": "F3", "v": 31, "s": "4"}]},
    {"cells": [{"addr": "A4", "v": 32, "s": "0"}]},
    {"cells": [{"addr": "A5", "v": 33, "s": "0"}]},
    {"cells": [{"addr": "A6", "v": 34, "s": "0"}]},
    {"cells": [{"addr": "A7", "v": 35, "s": "0"}]},
    {"cells": [{"addr": "A9", "v": 36, "s": "4"}]},
    {"cells": [{"addr": "A10", "v": 37, "s": "0"}]},
]

sheets_data.append(("自动统计", stat_rows, {"A": 20, "B": 15, "C": 15, "D": 15, "E": 15, "F": 15}))

chart_rows = [
    {"cells": [{"addr": "A1", "v": 38, "s": "4"}, {"addr": "B1", "v": 39, "s": "4"}]},
    {"cells": [{"addr": "A3", "v": 40, "s": "4"}, {"addr": "B3", "v": 41, "s": "4"}, {"addr": "C3", "v": 42, "s": "4"}, {"addr": "D3", "v": 43, "s": "4"}, {"addr": "E3", "v": 44, "s": "4"}, {"addr": "F3", "v": 45, "s": "4"}]},
    {"cells": [{"addr": "A4", "v": 32, "s": "0"}]},
    {"cells": [{"addr": "A5", "v": 33, "s": "0"}]},
    {"cells": [{"addr": "A6", "v": 34, "s": "0"}]},
    {"cells": [{"addr": "A7", "v": 35, "s": "0"}]},
    {"cells": [{"addr": "A9", "v": 46, "s": "4"}]},
    {"cells": [{"addr": "A10", "v": 47, "s": "0"}]},
]

sheets_data.append(("图表数据", chart_rows, {"A": 15, "B": 15, "C": 15, "D": 15, "E": 15, "F": 15}))

create_workbook_files(sheets_data, dst)
pack_xlsx(dst, os.path.join(OUTPUT_DIR, "课程评估汇总表.xlsx"))

print("All remaining Excel files created!")
