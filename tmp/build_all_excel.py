#!/usr/bin/env python3
"""Build all 情景领导 Excel files."""

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
        items.append(f'<si><t xml:space="preserve">{escaped}</t></si>')
    return f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="{count}" uniqueCount="{count}">
    {''.join(items)}
</sst>'''

def build_sheet(rows, col_widths=None):
    if col_widths is None:
        col_widths = {"A": 20, "B": 45}

    cols_xml = ""
    for col, width in sorted(col_widths.items()):
        cols_xml += f'<col min="{ord(col)-64}" max="{ord(col)-64}" width="{width}" customWidth="1"/>\n'

    rows_xml = ""
    for r_idx, row in enumerate(rows, 1):
        row_xml = f'<row r="{r_idx}"'
        if row.get('height'):
            row_xml += f' ht="{row["height"]}" customHeight="1"'
        row_xml += ">"

        for cell in row.get('cells', []):
            addr = cell['addr']
            val = cell.get('v', '')
            typ = cell.get('t', 's')
            style = cell.get('s', '4')

            if typ == 's':
                row_xml += f'<c r="{addr}" t="s" s="{style}"><v>{val}</v></c>\n'
            elif typ == 'inlineStr':
                row_xml += f'<c r="{addr}" t="inlineStr" s="{style}"><is><t>{escape(val)}</t></is></c>\n'
            elif typ == 'f':
                row_xml += f'<c r="{addr}" s="{style}"><f>{val}</f><v></v></c>\n'
            else:
                row_xml += f'<c r="{addr}" s="{style}"><v>{val}</v></c>\n'

        row_xml += "</row>\n"
        rows_xml += row_xml

    return f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"/></sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDesent="0.25"
    xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols>{cols_xml}</cols>
  <sheetData>{rows_xml}</sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

def pack_xlsx(dst, output_path):
    with zipfile.ZipFile(output_path, 'w', zipfile.ZIP_DEFLATED) as zf:
        for root, dirs, files in os.walk(dst):
            for file in files:
                file_path = os.path.join(root, file)
                arc_name = os.path.relpath(file_path, dst)
                zf.write(file_path, arc_name)
    print(f"Created: {output_path}")

def create_workbook_files(sheets_data, dst):
    """sheets_data = list of (name, rows, col_widths)"""
    # workbook.xml
    sheets_xml = ""
    for i, (name, _, _) in enumerate(sheets_data, 1):
        safe_name = name.replace("&", "&amp;")
        sheets_xml += f'<sheet name="{safe_name}" sheetId="{i}" r:id="rId{i}"/>\n'

    workbook_xml = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <fileVersion appName="xl" lastEdited="7" lowestEdited="7"/>
  <workbookPr defaultThemeVersion="166925"/>
  <bookViews><workbookView xWindow="0" yWindow="0" windowWidth="20140" windowHeight="10960"/></bookViews>
  <sheets>{sheets_xml}</sheets>
  <calcPr calcId="191029"/>
</workbook>'''
    with open(os.path.join(dst, "xl", "workbook.xml"), "w", encoding="utf-8") as f:
        f.write(workbook_xml)

    # workbook.xml.rels
    rels_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
  <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml"/>
'''
    for i in range(2, len(sheets_data) + 1):
        rels_xml += f'  <Relationship Id="rId{i+2}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet{i}.xml"/>\n'
    rels_xml += '</Relationships>'
    with open(os.path.join(dst, "xl", "_rels", "workbook.xml.rels"), "w", encoding="utf-8") as f:
        f.write(rels_xml)

    # [Content_Types].xml
    ct_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
  <Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>
  <Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/>
'''
    for i in range(1, len(sheets_data) + 1):
        ct_xml += f'  <Override PartName="/xl/worksheets/sheet{i}.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>\n'
    ct_xml += '</Types>'
    with open(os.path.join(dst, "[Content_Types].xml"), "w", encoding="utf-8") as f:
        f.write(ct_xml)

    # sheets
    for i, (name, rows, col_widths) in enumerate(sheets_data, 1):
        sheet_xml = build_sheet(rows, col_widths)
        sheet_path = os.path.join(dst, "xl", "worksheets", f"sheet{i}.xml")
        with open(sheet_path, "w", encoding="utf-8") as f:
            f.write(sheet_xml)

# ======================
# 2. 表单_填好版 (Filled version with 阿俊 case)
# ======================
def create_filled_forms():
    dst = copy_template()

    # Strings for filled version (using 阿俊 case)
    strings = [
        "因人施教：经典情境带教法",
        "表单一：带教对象档案",
        "这个人是：",
        "阿俊（化名）",
        "TA目前的岗位/角色：",
        "业务专员",
        "我接下来想重点诊断的，是TA在哪一件具体任务上的状态：",
        "他主动请缨接下的一个跨领域数据分析项目，这个领域他过去并不熟悉。",
        "我目前对TA在这件事上的能力判断是：",
        "不确定，方案推进缓慢，但具体原因还需要核实。",
        "我目前对TA在这件事上的意愿判断是：",
        "表面看起来很积极，但接了任务之后迟迟没有动静，有点矛盾。",
        "我之所以想重新审视，是因为：",
        "他接这个项目时表现得很有信心，但三天过去几乎没有进展，跟他的一贯表现不太一致。",
        "表单二：能力诊断表",
        "针对这件具体任务，我打算用哪种方法验证TA的能力：",
        "☑ 试做检验",
        "看履历的具体追问问题：",
        "（暂不适用，他自己也承认这个领域不熟悉）",
        "看过往结果的具体追问问题：",
        "（暂不适用，没有相关过往产出可查）",
        "如果用试做检验，我打算安排的小任务是：",
        ""这个项目先不急着整体推进，我先给你一小部分数据，你试着做一版分析出来，我们看看思路对不对。"",
        "【验证后的结论】",
        "真实能力结论：低",
        "具体依据：",
        "试做之后发现，他在拆解问题、找关键指标这部分确实还需要打磨，但基础的逻辑思路是有的，属于经验不足，而不是完全没有方向。",
        "表单三：意愿诊断表",
        "我观察到的行为信号是：",
        "口头答应得很爽快，但接了任务后三天没有任何动静，问起来只说"还在想"，没有主动提问或者寻求帮助。",
        "我初步判断，意愿可能存在以下根源（可多选）：",
        "☑ 畏难不敢说　□ 缺乏认可　□ 人际矛盾　□ 个人状态　□ 意义感不足　□ 还不确定",
        "如果要进一步核实，我打算用哪种方法：",
        "☑ 一对一沟通",
        "具体打算怎么做：",
        "找一个轻松的场合问他："这个项目你接下来打算怎么推进，有没有什么地方不确定，咱们可以一起聊聊。"用合作式的语气，不用质问的语气。",
        "【验证后的结论】",
        "真实意愿结论：高（核实后确认）",
        "具体根源：",
        "沟通后他承认，接这个项目时有点冲动，涉及的内容不熟悉，又不好意思承认做不了，所以一直拖着没敢真正开始。",
        "表单四：双轴四型定位表",
        "能力高",
        "能力低",
        "意愿低",
        "意愿高",
        "□倦怠型",
        "□成熟型",
        "□新手型",
        "☑热血型",
        "根据前面的诊断，TA在这件事上的能力是：低",
        "根据前面的诊断，TA在这件事上的意愿是：高",
        "所以，TA当前属于：☑ 热血型",
        "判断依据：",
        "试做检验证明核心分析能力还不扎实（能力低）；一对一沟通和后续的信任试探都证明，他对这件事是真心想做好的，只是缺乏经验和自信（意愿高）。",
        "表单五：带教打法行动脚本表",
        "TA属于：热血型",
        "对应打法：☑ 边教边带",
        "我接下来打算说的开场白：",
        ""这部分你不熟悉的内容，我陪你过一遍，不是我直接告诉你答案，是想让你看看这种问题一般怎么拆解。你先说说你的初步想法。"",
        "我打算安排的下一步具体动作：",
        "针对他的初步想法，逐步提问引导（"这几个数据里，你觉得哪个最关键，为什么"），让他自己一步步想清楚，而不是直接给出现成的分析框架。",
        "如果TA出现抵触或犹豫，我打算怎么接：",
        "如果他说"我不知道，你直接告诉我答案吧"，我会说"没关系，咱们换个角度想，如果……"，用更小的提示帮他往前推一步，而不是直接放弃引导给答案。",
        "表单六：灵活切换记录表",
        "【换新任务时重新诊断】",
        "新任务是：（假设）一个他过去已经熟练操作多次的常规数据整理任务",
        "TA在这件新任务上的能力/意愿判断：这类常规任务他已经做过多次，能力意愿都应该重新评估为较高，不需要再用"边教边带"的方式，可以适当放宽自主空间。",
        "【随成长调整打法】",
        "TA在原打法下，最近的进步表现是：",
        "经过几次边教边带的练习，他独立拆解问题的速度明显加快，不再需要每一步都被引导提问。",
        "我打算如何调整检查频率或自主空间：",
        "从"每个关键节点都一起讨论"逐步过渡到"只在他主动提出疑问，或者完成阶段性成果时再对一遍"。",
        "【警惕状态滑落】",
        "我最近的哪些具体管理动作，可能正在消耗TA的状态：",
        "（暂无明显迹象，持续观察）",
        "表单七：完整带教行动方案（汇总版）",
        "研究对象：阿俊（化名）",
        "具体任务：跨领域数据分析项目",
        "【能力诊断】",
        "验证方法：试做检验",
        "结论：低　　依据：核心分析逻辑还需打磨，但基础思路是有的",
        "【意愿诊断】",
        "观察到的信号：接了任务却三天没动静，沟通后才说出真实顾虑",
        "结论：高　　可能根源：不好意思承认对这个领域不熟悉",
        "【定位结论】",
        "☑ 热血型",
        "【行动打法】",
        "对应打法：边教边带",
        "开场白：见表单五",
        "下一步具体动作：逐步提问引导，不直接给答案",
        "【检验节点】",
        "检验时间：项目阶段性节点（约两周后）",
        "期待的变化信号：能够独立完成基础的数据拆解和指标判断，减少对引导式提问的依赖",
        "表单八：反思与跟进计划表",
        "【我的收获】",
        "这门课里，让我印象最深的三个收获是：",
        "1. 能力判断要落到具体任务上，不能用整体印象推断。",
        "2. 嘴上的"没问题"不一定是真有把握，需要观察行为信号验证。",
        "3. 热血型最容易被误判为不上进，其实根源往往是不好意思承认不会。",
        "回到岗位后，我打算第一个改变的具体动作是：",
        "对所有"接了任务却迟迟没动静"的情况，先用一对一沟通了解真实原因，而不是直接催促或批评。",
        "【跟进计划】",
        "我打算在什么时间点，回头检查这份方案的执行情况：项目阶段性节点结束后。",
        "到那时候，我会重点检查：",
        "☑ TA的定位有没有发生变化",
        "☑ 打法有没有起到预期效果",
        "☑ 是否需要随TA的成长调整打法",
    ]

    with open(os.path.join(dst, "xl", "sharedStrings.xml"), "w", encoding="utf-8") as f:
        f.write(build_shared_strings(strings))

    # All 8 sheets with filled data
    sheets_data = []

    # Sheet 1
    s1 = [
        {"cells": [{"addr": "A1", "v": 0, "s": "4"}, {"addr": "B1", "v": 1, "s": "4"}]},
        {"cells": [{"addr": "A3", "v": 2, "s": "1"}, {"addr": "B3", "v": 3, "s": "0"}]},
        {"cells": [{"addr": "A4", "v": 4, "s": "1"}, {"addr": "B4", "v": 5, "s": "0"}]},
        {"cells": [{"addr": "A6", "v": 6, "s": "1"}]},
        {"cells": [{"addr": "A8", "v": 7, "s": "1"}]},
        {"cells": [{"addr": "A10", "v": 8, "s": "1"}, {"addr": "B10", "v": 9, "s": "0"}]},
        {"cells": [{"addr": "A12", "v": 10, "s": "1"}, {"addr": "B12", "v": 11, "s": "0"}]},
        {"cells": [{"addr": "A14", "v": 12, "s": "1"}, {"addr": "B14", "v": 13, "s": "0"}]},
    ]
    sheets_data.append(("表一_带教对象档案", s1, {"A": 35, "B": 60}))

    # Sheet 2
    s2 = [
        {"cells": [{"addr": "A1", "v": 14, "s": "4"}, {"addr": "B1", "v": 15, "s": "4"}]},
        {"cells": [{"addr": "A3", "v": 16, "s": "1"}]},
        {"cells": [{"addr": "A5", "v": 17, "s": "1"}, {"addr": "B5", "v": 18, "s": "0"}]},
        {"cells": [{"addr": "A7", "v": 19, "s": "1"}, {"addr": "B7", "v": 20, "s": "0"}]},
        {"cells": [{"addr": "A9", "v": 21, "s": "1"}, {"addr": "B9", "v": 22, "s": "0"}]},
        {"cells": [{"addr": "A11", "v": 23, "s": "1"}, {"addr": "B11", "v": 24, "s": "0"}]},
        {"cells": [{"addr": "A13", "v": 25, "s": "4"}, {"addr": "A14", "v": 26, "s": "1"}, {"addr": "B14", "v": 27, "s": "0"}]},
    ]
    sheets_data.append(("表二_能力诊断表", s2, {"A": 50, "B": 60}))

    # Sheet 3
    s3 = [
        {"cells": [{"addr": "A1", "v": 28, "s": "4"}]},
        {"cells": [{"addr": "A3", "v": 29, "s": "1"}, {"addr": "B3", "v": 30, "s": "0"}]},
        {"cells": [{"addr": "A5", "v": 31, "s": "1"}]},
        {"cells": [{"addr": "A7", "v": 32, "s": "1"}]},
        {"cells": [{"addr": "A9", "v": 33, "s": "1"}, {"addr": "B9", "v": 34, "s": "0"}]},
        {"cells": [{"addr": "A11", "v": 35, "s": "1"}, {"addr": "B11", "v": 36, "s": "0"}]},
        {"cells": [{"addr": "A13", "v": 37, "s": "4"}, {"addr": "A14", "v": 38, "s": "1"}, {"addr": "B14", "v": 39, "s": "0"}]},
    ]
    sheets_data.append(("表三_意愿诊断表", s3, {"A": 50, "B": 60}))

    # Sheet 4
    s4 = [
        {"cells": [{"addr": "A1", "v": 40, "s": "4"}]},
        {"height": 30, "cells": [{"addr": "B3", "v": 41, "s": "4"}, {"addr": "C3", "v": 42, "s": "4"}, {"addr": "D3", "v": 43, "s": "4"}, {"addr": "E3", "v": 44, "s": "4"}]},
        {"height": 30, "cells": [{"addr": "A4", "v": 45, "s": "4"}, {"addr": "B4", "v": 48, "s": "1"}, {"addr": "C4", "v": 46, "s": "1"}]},
        {"height": 30, "cells": [{"addr": "A5", "v": 46, "s": "4"}, {"addr": "B5", "v": 47, "s": "1"}, {"addr": "C5", "v": 49, "s": "1"}]},
        {"cells": [{"addr": "A7", "v": 50, "s": "1"}, {"addr": "A8", "v": 51, "s": "1"}]},
        {"cells": [{"addr": "A10", "v": 52, "s": "1"}]},
        {"cells": [{"addr": "A12", "v": 53, "s": "1"}]},
    ]
    sheets_data.append(("表四_双轴四型定位表", s4, {"A": 22, "B": 18, "C": 18, "D": 18, "E": 18}))

    # Sheet 5
    s5 = [
        {"cells": [{"addr": "A1", "v": 54, "s": "4"}]},
        {"cells": [{"addr": "A3", "v": 55, "s": "1"}, {"addr": "B3", "v": 56, "s": "0"}]},
        {"cells": [{"addr": "A5", "v": 57, "s": "1"}]},
        {"cells": [{"addr": "A7", "v": 58, "s": "1"}]},
        {"cells": [{"addr": "A9", "v": 59, "s": "1"}]},
        {"cells": [{"addr": "A11", "v": 60, "s": "1"}]},
    ]
    sheets_data.append(("表五_带教打法行动脚本表", s5, {"A": 40, "B": 60}))

    # Sheet 6
    s6 = [
        {"cells": [{"addr": "A1", "v": 61, "s": "4"}]},
        {"cells": [{"addr": "A3", "v": 62, "s": "4"}]},
        {"cells": [{"addr": "A4", "v": 63, "s": "1"}, {"addr": "B4", "v": 64, "s": "0"}]},
        {"cells": [{"addr": "A6", "v": 65, "s": "4"}]},
        {"cells": [{"addr": "A7", "v": 66, "s": "1"}, {"addr": "B7", "v": 67, "s": "0"}]},
        {"cells": [{"addr": "A9", "v": 68, "s": "4"}]},
        {"cells": [{"addr": "A10", "v": 69, "s": "1"}]},
    ]
    sheets_data.append(("表六_灵活切换记录表", s6, {"A": 45, "B": 60}))

    # Sheet 7
    s7 = [
        {"cells": [{"addr": "A1", "v": 70, "s": "4"}]},
        {"cells": [{"addr": "A3", "v": 71, "s": "1"}, {"addr": "B3", "v": 72, "s": "0"}]},
        {"cells": [{"addr": "A5", "v": 73, "s": "4"}]},
        {"cells": [{"addr": "A6", "v": 74, "s": "1"}, {"addr": "B6", "v": 75, "s": "0"}]},
        {"cells": [{"addr": "A8", "v": 76, "s": "4"}]},
        {"cells": [{"addr": "A9", "v": 77, "s": "1"}, {"addr": "B9", "v": 78, "s": "0"}]},
        {"cells": [{"addr": "A11", "v": 79, "s": "4"}]},
        {"cells": [{"addr": "A13", "v": 80, "s": "4"}]},
        {"cells": [{"addr": "A14", "v": 81, "s": "1"}, {"addr": "B14", "v": 82, "s": "0"}]},
        {"cells": [{"addr": "A16", "v": 83, "s": "4"}]},
        {"cells": [{"addr": "A17", "v": 84, "s": "1"}, {"addr": "B17", "v": 85, "s": "0"}]},
    ]
    sheets_data.append(("表七_完整带教行动方案", s7, {"A": 28, "B": 55}))

    # Sheet 8
    s8 = [
        {"cells": [{"addr": "A1", "v": 86, "s": "4"}]},
        {"cells": [{"addr": "A3", "v": 87, "s": "4"}]},
        {"cells": [{"addr": "A4", "v": 88, "s": "1"}, {"addr": "B4", "v": 89, "s": "0"}]},
        {"cells": [{"addr": "A5", "v": 90, "s": "1"}, {"addr": "B5", "v": 91, "s": "0"}]},
        {"cells": [{"addr": "A6", "v": 92, "s": "1"}, {"addr": "B6", "v": 93, "s": "0"}]},
        {"cells": [{"addr": "A8", "v": 94, "s": "1"}]},
        {"cells": [{"addr": "A10", "v": 95, "s": "4"}]},
        {"cells": [{"addr": "A11", "v": 96, "s": "1"}]},
        {"cells": [{"addr": "A13", "v": 97, "s": "4"}]},
        {"cells": [{"addr": "A14", "v": 98, "s": "1"}]},
        {"cells": [{"addr": "A15", "v": 99, "s": "1"}]},
        {"cells": [{"addr": "A16", "v": 100, "s": "1"}]},
    ]
    sheets_data.append(("表八_反思与跟进计划表", s8, {"A": 42, "B": 55}))

    create_workbook_files(sheets_data, dst)
    pack_xlsx(dst, os.path.join(OUTPUT_DIR, "表单_填好版.xlsx"))

# ======================
# 3. 表单使用指引
# ======================
def create_user_guide():
    dst = copy_template()

    strings = [
        "因人施教：经典情境带教法",
        "配套表单使用指引",
        "表单总览",
        "表单名称",
        "对应章节",
        "核心用途",
        "使用时机",
        "表单一：带教对象档案",
        "第一部分",
        "选定诊断对象和具体任务",
        "课程开始前或首次诊断时",
        "表二：能力诊断表",
        "第二部分",
        "验证真实能力水平",
        "完成表一后立即使用",
        "表三：意愿诊断表",
        "第三部分",
        "追溯意愿根源",
        "完成表二后立即使用",
        "表四：双轴四型定位表",
        "第四部分",
        "确定人员类型",
        "完成表三后立即使用",
        "表五：带教打法行动脚本表",
        "第五部分",
        "制定具体打法",
        "完成表四后立即使用",
        "表六：灵活切换记录表",
        "第六部分",
        "动态调整记录",
        "换任务或调整打法时使用",
        "表七：完整带教行动方案",
        "第七部分",
        "方案汇总整合",
        "全部诊断完成后汇总",
        "表八：反思与跟进计划表",
        "第七部分",
        "收获总结与跟进",
        "课程结束时使用",
        "表单一填写规范",
        "1. 每列一项信息，不要多项目混在一列",
        "2. "具体任务"栏填写要具体到"一件事"，不要写太宽泛",
        "3. 能力和意愿的判断先写初步判断，后续诊断后可修正",
        "常见问题：能不能同时诊断多个人？",
        "建议一次只诊断一个人、的一件具体任务，这样才能填得深。如果要诊断多人，复制整份表单重复使用。",
        "表二填写规范",
        "验证方法三选一：看履历、看过往结果、试做检验",
        "1. 看履历：适合有完整工作记录的岗位，追问具体经历",
        "2. 看过往结果：适合有业绩数据的岗位，找关键产出",
        "3. 试做检验：适合技能性任务，安排一个小任务看实际表现",
        "常见问题：三种方法哪个最准？",
        "试做检验最准，但成本最高。建议先用前两种筛选，再用试做检验确认有疑问的情况。",
        "表三填写规范",
        "行为信号观察是关键，同一个人可能同时有多种根源",
        "1. 行为信号要具体记录，方便后续验证",
        "2. 根源多选时，按可能性排序，最可能的放在最前面",
        "3. 核实方法：一对一沟通最有效，但要注意场合和语气",
        "表四填写规范",
        "四型定位决定了后续打法的选择",
        "1. 新手型：能力低+意愿高 → 手把手教",
        "2. 热血型：能力低+意愿高 → 边教边带",
        "3. 倦怠型：能力高+意愿低 → 多支持少指挥",
        "4. 成熟型：能力高+意愿高 → 充分放权",
        "常见问题：定位不明确怎么办？",
        "回到表二、表三重新核实。定位模糊往往是诊断信息不足，不是对象本身不明确。",
        "表五填写规范",
        "打法选择是表四定位的直接延续",
        "1. 开场白要写具体要说的话，不要只写原则",
        "2. 下一步具体动作要可操作、可观察",
        "3. 预设抵触应对方案，避免现场卡壳",
        "表六填写规范",
        "这张表可以反复使用，每次换任务或调整打法时记录",
        "1. 换新任务：从表二重新开始，不要沿用旧结论",
        "2. 调整打法：记录调整的原因和具体变化",
        "3. 警惕状态滑落：定期回顾，防止管理动作消耗员工状态",
        "表七填写规范",
        "这是前六张表的汇总，填完后是一份完整的带教方案",
        "1. 按照表格顺序逐项汇总，不要跳步",
        "2. 检验节点要写具体时间，不要写"以后"",
        "3. 期待的变化信号要可观察、可衡量",
        "表八填写规范",
        "课程结束时的收尾动作，确保学习转化",
        "1. 三个收获要具体，不要写空话",
        "2. 第一个改变要立竿见影，不要等太久",
        "3. 跟进时间点要与表七的检验节点对齐"
    ]

    with open(os.path.join(dst, "xl", "sharedStrings.xml"), "w", encoding="utf-8") as f:
        f.write(build_shared_strings(strings))

    sheets_data = []

    # Overview sheet
    overview = [
        {"cells": [{"addr": "A1", "v": 0, "s": "4"}, {"addr": "B1", "v": 1, "s": "4"}]},
        {"cells": [{"addr": "A3", "v": 2, "s": "4"}, {"addr": "B3", "v": 3, "s": "4"}, {"addr": "C3", "v": 4, "s": "4"}, {"addr": "D3", "v": 5, "s": "4"}]},
        {"cells": [{"addr": "A4", "v": 6, "s": "1"}, {"addr": "B4", "v": 7, "s": "0"}, {"addr": "C4", "v": 8, "s": "0"}, {"addr": "D4", "v": 9, "s": "0"}]},
        {"cells": [{"addr": "A5", "v": 10, "s": "1"}, {"addr": "B5", "v": 11, "s": "0"}, {"addr": "C5", "v": 12, "s": "0"}, {"addr": "D5", "v": 13, "s": "0"}]},
        {"cells": [{"addr": "A6", "v": 14, "s": "1"}, {"addr": "B6", "v": 15, "s": "0"}, {"addr": "C6", "v": 16, "s": "0"}, {"addr": "D6", "v": 17, "s": "0"}]},
        {"cells": [{"addr": "A7", "v": 18, "s": "1"}, {"addr": "B7", "v": 19, "s": "0"}, {"addr": "C7", "v": 20, "s": "0"}, {"addr": "D7", "v": 21, "s": "0"}]},
        {"cells": [{"addr": "A8", "v": 22, "s": "1"}, {"addr": "B8", "v": 23, "s": "0"}, {"addr": "C8", "v": 24, "s": "0"}, {"addr": "D8", "v": 25, "s": "0"}]},
        {"cells": [{"addr": "A9", "v": 26, "s": "1"}, {"addr": "B9", "v": 27, "s": "0"}, {"addr": "C9", "v": 28, "s": "0"}, {"addr": "D9", "v": 29, "s": "0"}]},
        {"cells": [{"addr": "A10", "v": 30, "s": "1"}, {"addr": "B10", "v": 31, "s": "0"}, {"addr": "C10", "v": 32, "s": "0"}, {"addr": "D10", "v": 33, "s": "0"}]},
        {"cells": [{"addr": "A11", "v": 34, "s": "1"}, {"addr": "B11", "v": 35, "s": "0"}, {"addr": "C11", "v": 36, "s": "0"}, {"addr": "D11", "v": 37, "s": "0"}]},
        {"cells": [{"addr": "A12", "v": 38, "s": "1"}, {"addr": "B12", "v": 39, "s": "0"}, {"addr": "C12", "v": 40, "s": "0"}, {"addr": "D12", "v": 41, "s": "0"}]},
    ]
    sheets_data.append(("指引首页", overview, {"A": 28, "B": 22, "C": 28, "D": 30}))

    # Sheet 2-9: Individual form guides
    guide_texts = [
        (42, "表单一填写规范", 43, 44, 45, 46, 47, 48, 49),
        (50, "表二填写规范", 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61),
        (62, "表三填写规范", 63, 64, 65, 66, 67, 68, 69, 70, 71),
        (72, "表四填写规范", 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83),
        (84, "表五填写规范", 85, 86, 87, 88, 89, 90),
        (91, "表六填写规范", 92, 93, 94, 95, 96, 97, 98, 99),
        (100, "表七填写规范", 101, 102, 103, 104, 105, 106, 107, 108, 109),
        (110, "表八填写规范", 111, 112, 113, 114, 115, 116, 117, 118),
    ]

    for idx, (title_idx, title, *content_indices) in enumerate(guide_texts, 2):
        sheet_rows = [
            {"cells": [{"addr": "A1", "v": title_idx, "s": "4"}]},
        ]
        for i, content_idx in enumerate(content_indices, 2):
            sheet_rows.append({"cells": [{"addr": "A" + str(i), "v": content_idx, "s": "0"}]})
        sheets_data.append((title, sheet_rows, {"A": 70}))

    create_workbook_files(sheets_data, dst)
    pack_xlsx(dst, os.path.join(OUTPUT_DIR, "表单使用指引.xlsx"))

# ======================
# 4. 学员档案管理表
# ======================
def create_student_file():
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
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
    ]

    with open(os.path.join(dst, "xl", "sharedStrings.xml"), "w", encoding="utf-8") as f:
        f.write(build_shared_strings(strings))

    sheets_data = []

    # Directory sheet
    dir_rows = [
        {"cells": [{"addr": "A1", "v": 0, "s": "4"}, {"addr": "B1", "v": 1, "s": "4"}]},
        {"cells": [{"addr": "A3", "v": 2, "s": "4"}, {"addr": "B3", "v": 3, "s": "4"}, {"addr": "C3", "v": 4, "s": "4"}, {"addr": "D3", "v": 5, "s": "4"}, {"addr": "E3", "v": 6, "s": "4"}, {"addr": "F3", "v": 7, "s": "4"}, {"addr": "G3", "v": 8, "s": "4"}, {"addr": "H3", "v": 9, "s": "4"}]},
    ]

    # Add 15 student rows
    for i in range(15):
        row_num = i + 4
        idx = 19 + i  # strings[19] = "1", etc.
        dir_rows.append({
            "cells": [
                {"addr": f"A{row_num}", "v": idx, "s": "1"},
                {"addr": f"B{row_num}", "v": 13, "s": "0"},
                {"addr": f"C{row_num}", "v": 13, "s": "0"},
                {"addr": f"D{row_num}", "v": 13, "s": "0"},
                {"addr": f"E{row_num}", "v": 14, "s": "0"},
                {"addr": f"F{row_num}", "v": 15, "s": "0"},
                {"addr": f"G{row_num}", "v": 15, "s": "0"},
                {"addr": f"H{row_num}", "v": 15, "s": "0"},
            ]
        })

    # Add legend at bottom
    legend_start = 20
    dir_rows.append({"cells": [{"addr": f"A{legend_start}", "v": 16, "s": "4"}]})
    dir_rows.append({"cells": [{"addr": f"A{legend_start+1}", "v": 17, "s": "0"}]})
    dir_rows.append({"cells": [{"addr": f"A{legend_start+3}", "v": 18, "s": "4"}]})
    dir_rows.append({"cells": [{"addr": f"A{legend_start+4}", "v": 19, "s": "0"}]})
    dir_rows.append({"cells": [{"addr": f"A{legend_start+5}", "v": 15, "s": "0"}]})
    dir_rows.append({"cells": [{"addr": f"A{legend_start+6}", "v": 15, "s": "0"}]})

    sheets_data.append(("档案目录", dir_rows, {"A": 8, "B": 15, "C": 20, "D": 25, "E": 10, "F": 15, "G": 15, "H": 30}))

    create_workbook_files(sheets_data, dst)
    pack_xlsx(dst, os.path.join(OUTPUT_DIR, "学员档案管理表.xlsx"))

# ======================
# 5. 课程评估汇总表
# ======================
def create_evaluation_summary():
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
        "满意度",
        "学员姓名",
        "（选填）",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "自动统计",
        "评价维度",
        "非常满意",
        "满意",
        "一般",
        "不满意",
        "非常不满意",
        "平均分",
        "课程内容",
        "讲师表达",
        "培训组织",
        "整体收获",
        "满意度",
        "汇总",
        "总评分人数",
        "平均分",
        "可视化图表",
        "各维度评分分布",
        "评分维度",
        "5分",
        "4分",
        "3分",
        "2分",
        "1分",
        "课程内容",
        "讲师表达",
        "培训组织",
        "整体收获",
        "满意度",
        "注：评分标准",
        "5=非常满意，4=满意，3=一般，2=不满意，1=非常不满意",
    ]

    with open(os.path.join(dst, "xl", "sharedStrings.xml"), "w", encoding="utf-8") as f:
        f.write(build_shared_strings(strings))

    sheets_data = []

    # Sheet 1: Data entry
    data_rows = [
        {"cells": [{"addr": "A1", "v": 0, "s": "4"}, {"addr": "B1", "v": 1, "s": "4"}]},
        {"cells": [{"addr": "A3", "v": 2, "s": "4"}, {"addr": "B3", "v": 3, "s": "4"}, {"addr": "C3", "v": 4, "s": "4"}, {"addr": "D3", "v": 5, "s": "4"}, {"addr": "E3", "v": 6, "s": "4"}, {"addr": "F3", "v": 7, "s": "4"}]},
        {"cells": [{"addr": "A4", "v": 8, "s": "1"}]},
    ]

    # Add 15 data entry rows
    for i in range(15):
        row_num = i + 5
        idx = 9 + i  # strings[9] = "1", etc.
        data_rows.append({
            "cells": [
                {"addr": f"A{row_num}", "v": idx, "s": "1"},
                {"addr": f"B{row_num}", "v": 9, "s": "1"},
                {"addr": f"C{row_num}", "v": 9, "s": "1"},
                {"addr": f"D{row_num}", "v": 9, "s": "1"},
                {"addr": f"E{row_num}", "v": 9, "s": "1"},
                {"addr": f"F{row_num}", "v": 9, "s": "1"},
            ]
        })

    sheets_data.append(("评估数据", data_rows, {"A": 8, "B": 15, "C": 15, "D": 15, "E": 15, "F": 15}))

    # Sheet 2: Auto stats
    stat_rows = [
        {"cells": [{"addr": "A1", "v": 10, "s": "4"}, {"addr": "B1", "v": 11, "s": "4"}]},
        {"cells": [{"addr": "A3", "v": 12, "s": "4"}, {"addr": "B3", "v": 13, "s": "4"}, {"addr": "C3", "v": 14, "s": "4"}, {"addr": "D3", "v": 15, "s": "4"}, {"addr": "E3", "v": 16, "s": "4"}, {"addr": "F3", "v": 17, "s": "4"}]},
        {"cells": [{"addr": "A4", "v": 18, "s": "1"}]},
        {"cells": [{"addr": "A5", "v": 19, "s": "1"}]},
        {"cells": [{"addr": "A6", "v": 20, "s": "1"}]},
        {"cells": [{"addr": "A7", "v": 21, "s": "1"}]},
        {"cells": [{"addr": "A8", "v": 22, "s": "1"}]},
        {"cells": [{"addr": "A10", "v": 23, "s": "4"}]},
        {"cells": [{"addr": "A11", "v": 24, "s": "1"}]},
        {"cells": [{"addr": "A12", "v": 25, "s": "1"}]},
    ]

    sheets_data.append(("自动统计", stat_rows, {"A": 20, "B": 15, "C": 15, "D": 15, "E": 15, "F": 15}))

    # Sheet 3: Charts
    chart_rows = [
        {"cells": [{"addr": "A1", "v": 26, "s": "4"}, {"addr": "B1", "v": 27, "s": "4"}]},
        {"cells": [{"addr": "A3", "v": 28, "s": "4"}, {"addr": "B3", "v": 29, "s": "4"}, {"addr": "C3", "v": 30, "s": "4"}, {"addr": "D3", "v": 31, "s": "4"}, {"addr": "E3", "v": 32, "s": "4"}, {"addr": "F3", "v": 33, "s": "4"}]},
        {"cells": [{"addr": "A4", "v": 18, "s": "0"}]},
        {"cells": [{"addr": "A5", "v": 19, "s": "0"}]},
        {"cells": [{"addr": "A6", "v": 20, "s": "0"}]},
        {"cells": [{"addr": "A7", "v": 21, "s": "0"}]},
        {"cells": [{"addr": "A8", "v": 22, "s": "0"}]},
        {"cells": [{"addr": "A10", "v": 34, "s": "4"}]},
        {"cells": [{"addr": "A11", "v": 35, "s": "0"}]},
    ]

    sheets_data.append(("可视化图表", chart_rows, {"A": 15, "B": 15, "C": 15, "D": 15, "E": 15, "F": 15}))

    create_workbook_files(sheets_data, dst)
    pack_xlsx(dst, os.path.join(OUTPUT_DIR, "课程评估汇总表.xlsx"))

# ======================
# Main
# ======================
if __name__ == "__main__":
    create_filled_forms()
    create_user_guide()
    create_student_file()
    create_evaluation_summary()
    print("All Excel files created!")
