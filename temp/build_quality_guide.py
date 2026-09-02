#!/usr/bin/env python3
"""
Build 表单使用指引.xlsx - Usage instructions for quality forms
"""

import os
import shutil
from pathlib import Path

SKILL_DIR = Path("C:/Users/Administrator/.claude/skills/Excel表格处理")
TEMPLATE_DIR = Path("/tmp/xlsx_quality_guide")
OUTPUT_DIR = Path("D:/新课开发/制造/6-质量管理与质量文化重塑/配套表单Excel")

def setup_template():
    if TEMPLATE_DIR.exists():
        shutil.rmtree(TEMPLATE_DIR)
    shutil.copytree(SKILL_DIR / "templates/minimal_xlsx", TEMPLATE_DIR)

def write_xml(path, content):
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)

SHEET_NAMES = ["表单使用指引"]

ALL_STRINGS = [
    "表单使用指引",
    "质量文化重塑课程配套表单 - 使用说明",
    "",
    "表单名称",
    "表单用途",
    "使用时机",
    "填写方法",
    "注意事项",
    "",
    "质量类型判断卡",
    "快速判断质量问题的性质类型",
    "遇到任何质量问题时，首先使用此表判断问题类型",
    "1. 阅读四种问题类型描述\n2. 对照实际问题特征\n3. 按决策流程图快速判断\n4. 根据推荐行动选择处理方式",
    "四种类型可能同时存在，优先处理紧迫程度高的问题",
    "",
    "WSDF质量定义工作表",
    "对质量问题进行W/S/D/F分类和严重度评分",
    "问题分类不明确时，或需要量化风险时使用",
    "1. 填写问题描述\n2. 选择W/S/D/F分类\n3. 记录月发生频率\n4. 评估严重度1-5分\n5. 系统自动计算风险分",
    "风险分>15为高风险需立即处理，8-15为中风险需关注，<8为低风险可常规处理",
    "",
    "五问法分析单",
    "通过5层追问找到根本原因",
    "问题反复发生找不到根因时使用",
    "1. 明确要分析的问题现象\n2. 第一问：为什么发生？\n3. 后续每问都追问为什么\n4. 每问都要有证据支持\n5. 第五问后总结根因",
    "避免猜测和推断，所有结论都需要证据链支持",
    "",
    "4M鱼骨图分析",
    "从六个维度系统分析问题原因",
    "问题原因不明确，需要全面分析时使用",
    "1. 填写问题描述\n2. 从Man/Machine/Material/Method/Measurement/Environment六个分支分析\n3. 每个分支填写可能的子因素\n4. 根据分析结果汇总最可能的3个根因",
    "不要遗漏任何分支，即使某个分支没有因素也要标注'无异常'",
    "",
    "FAR方案对比评估表",
    "从可行性、适当性、风险三个维度评估方案",
    "有多个解决方案需要选择时使用",
    "1. 列出所有可行方案\n2. 每个方案从F/A/R三个维度打分(1-5分)\n3. 系统自动计算加权总分\n4. 根据排名和推荐意见选择方案",
    "评分要客观公正，避免主观偏好影响评分",
    "",
    "质量放行决策卡",
    "判断问题产品是否应该放行的核心工具",
    "生产过程中遇到质量问题，需要决定是否放行时使用",
    "1. 回答问题1：以前是否出现过？\n2. 回答问题2：影响范围多大？\n3. 回答问题3：客户能否接受？\n4. 根据C的数量判断决策\n5. 按要求完成审批记录",
    "这是核心决策工具，三个问题必须如实回答，任何一个'C'都要谨慎处理",
    "",
    "质量执行前检查清单",
    "执行前确认各项准备到位",
    "生产作业或检验执行前使用",
    "1. 逐项检查清单内容\n2. 符合要求的打勾\n3. 不符合的记录异常\n4. 全部完成后签名确认",
    "不要跳过任何检查项目，确保执行前所有条件都满足",
    "",
    "质量问题验证追踪表",
    "追踪质量问题改善进度和结果",
    "质量问题改善过程中持续使用",
    "1. 为每个问题分配编号\n2. 填写问题描述和根因\n3. 制定改善措施和责任人\n4. 设定计划完成时间\n5. 实际完成后记录并验证结果",
    "定期更新状态，确保问题得到有效解决",
    "",
    "团队质量数据台账",
    "记录和追踪团队月度质量KPI",
    "每月固定时间填写，持续追踪",
    "1. 每月填写检验批数、合格数、不良数等数据\n2. 系统自动计算合格率、不良率\n3. 记录客诉、改进项目等\n4. 年末自动汇总年度数据",
    "数据要真实准确，异常数据要标注原因",
    "",
    "课程练习成绩汇总",
    "记录学员各模块练习成绩",
    "课程结束后汇总成绩使用",
    "1. 录入学员姓名\n2. 填写各模块练习得分\n3. 系统自动计算综合评分和排名\n4. 自动统计班级平均分、最高分、及格人数",
    "成绩录入后不要随意修改，确保成绩记录准确完整",
    "",
    "使用流程总结",
    "建议按照以下顺序使用表单：",
    "1. 质量类型判断卡 → 判断问题类型\n2. 五问法分析单/4M鱼骨图 → 分析根本原因\n3. FAR方案对比评估表 → 选择解决方案\n4. 质量放行决策卡 → 做出放行决策\n5. 质量执行前检查清单 → 确认执行条件\n6. 质量问题验证追踪表 → 追踪改善结果\n7. 团队质量数据台账 → 汇总分析数据",
    "",
    "",
    "表单文件清单",
    "质量工具表单_空表.xlsx - 空白表单，供培训时使用",
    "质量工具表单_填好版.xlsx - 填写示例，包含完整案例",
    "表单使用指引.xlsx - 本文件，表单使用说明",
    "",
    "案例说明",
    "填好版包含一个完整案例：'焊点不良导致产品通电后无反应'",
    "从问题识别→原因分析→方案评估→决策放行→改善追踪的完整流程",
    "建议先学习案例，再练习填写空白表单",
]

def build_shared_strings(strings):
    unique_strings = []
    for s in strings:
        if s not in unique_strings:
            unique_strings.append(s)

    si_items = []
    for s in unique_strings:
        escaped = s.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace('"', "&quot;")
        if "\n" in s:
            si_items.append(f'  <si><t xml:space="preserve">{escaped.replace(chr(10), "&#xA;")}</t></si>')
        else:
            si_items.append(f"  <si><t>{escaped}</t></si>")

    count = len(strings)
    unique_count = len(unique_strings)

    return f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="{count}" uniqueCount="{unique_count}">
{chr(10).join(si_items)}
</sst>'''

def build_workbook_xml():
    return '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <bookViews>
    <workbookView tabSelections="1"/>
  </bookViews>
  <sheets>
    <sheet name="表单使用指引" sheetId="1" r:id="rId1"/>
  </sheets>
  <calcPr calcId="0"/>
</workbook>'''

def build_workbook_rels_xml():
    return '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
  <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml"/>
</Relationships>'''

def build_content_types_xml():
    return '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml"  ContentType="application/xml"/>
  <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
  <Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>
  <Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/>
</Types>'''

def build_styles_xml():
    return '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" mc:Ignorable="x14ac" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac">
  <fonts count="6" x14ac:knownFonts="1">
    <font><sz val="11"/><name val="Calibri"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="000000FF"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="00000000"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="00008000"/></font>
    <font><b/><sz val="14"/><name val="Calibri"/><color rgb="00000000"/></font>
    <font><b/><sz val="12"/><name val="Calibri"/><color rgb="00FFFFFF"/></font>
  </fonts>
  <fills count="4">
    <fill><patternFill patternType="none"/></fill>
    <fill><patternFill patternType="gray125"/></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="00C00000"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="00404040"/></patternFill></fill>
  </fills>
  <borders count="2">
    <border><left/><right/><top/><bottom/><diagonal/></border>
    <border><left style="thin"/><right style="thin"/><top style="thin"/><bottom style="thin"/><diagonal/></border>
  </borders>
  <cellStyleXfs count="1">
    <xf numFmtId="0" fontId="0" fillId="0" borderId="0"/>
  </cellStyleXfs>
  <cellXfs count="16">
    <xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/>
    <xf numFmtId="0" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1"/>
    <xf numFmtId="0" fontId="2" fillId="0" borderId="0" xfId="0" applyFont="1"/>
    <xf numFmtId="0" fontId="3" fillId="0" borderId="0" xfId="0" applyFont="1"/>
    <xf numFmtId="0" fontId="4" fillId="0" borderId="0" xfId="0" applyFont="1" applyFontSize="1"/>
    <xf numFmtId="164" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>
    <xf numFmtId="164" fontId="2" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>
    <xf numFmtId="165" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>
    <xf numFmtId="165" fontId="2" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>
    <xf numFmtId="167" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>
    <xf numFmtId="167" fontId="2" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>
    <xf numFmtId="1" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>
    <xf numFmtId="0" fontId="1" fillId="2" borderId="0" xfId="0" applyFont="1" applyFill="1"/>
    <xf numFmtId="0" fontId="5" fillId="2" borderId="0" xfId="0" applyFont="1" applyFill="1"/>
    <xf numFmtId="0" fontId="5" fillId="3" borderId="0" xfId="0" applyFont="1" applyFill="1"/>
    <xf numFmtId="14" fontId="0" fillId="0" borderId="1" xfId="0" applyNumberFormat="1" applyBorder="1"/>
  </cellXfs>
  <tableStyles count="0" defaultTableStyle="TableStyleMedium2" defaultPivotTableStyle="PivotStyleMedium4"/>
</styleSheet>'''

def build_sheet1():
    """Build the guide sheet"""
    cells = []

    def s(row, col, val): cells.append((row, col, val, 13, 's'))  # header style
    def t(row, col, val): cells.append((row, col, val, 4, 's'))   # title style
    def l(row, col, val): cells.append((row, col, val, 0, 's'))   # label style
    def b(row, col, val): cells.append((row, col, val, 3, 's'))   # bold

    # Title
    t(1, 1, 0)  # 表单使用指引
    l(2, 1, 1)  # 副标题

    # Header row 4
    s(4, 1, 3)   # 表单名称
    s(4, 2, 4)   # 表单用途
    s(4, 3, 5)   # 使用时机
    s(4, 4, 6)   # 填写方法
    s(4, 5, 7)   # 注意事项

    # Data rows - form entries
    # Each entry: name, purpose, when_to_use, how_to_fill, notes
    entries = [
        (8, 9, 10, 11, 12),    # 质量类型判断卡
        (14, 15, 16, 17, 18),  # WSDF
        (20, 21, 22, 23, 24),  # 五问法
        (26, 27, 28, 29, 30),  # 4M鱼骨图
        (32, 33, 34, 35, 36),  # FAR
        (38, 39, 40, 41, 42),  # 质量放行决策卡
        (44, 45, 46, 47, 48),  # 质量执行前检查清单
        (50, 51, 52, 53, 54),  # 质量问题验证追踪表
        (56, 57, 58, 59, 60),  # 团队质量数据台账
        (62, 63, 64, 65, 66),  # 课程练习成绩汇总
    ]

    for i, entry in enumerate(entries):
        name_idx, purpose_idx, when_idx, how_idx, notes_idx = entry
        row_num = 8 + i * 6
        l(row_num, 1, name_idx)
        l(row_num, 2, purpose_idx)
        l(row_num, 3, when_idx)
        l(row_num, 4, how_idx)
        l(row_num, 5, notes_idx)

    # Summary section
    s(68, 1, 67)  # 使用流程总结
    b(69, 1, 68)
    l(70, 1, 69)
    l(71, 1, 70)
    l(72, 1, 71)

    # File list
    s(74, 1, 72)  # 表单文件清单
    l(75, 1, 73)
    l(76, 1, 74)
    l(77, 1, 75)

    # Case description
    s(79, 1, 76)  # 案例说明
    l(80, 1, 77)
    l(81, 1, 78)

    return 82, cells

def build_sheet_xml(max_row, cells):
    cols_xml = '''  <cols>
    <col min="1" max="1" width="20" customWidth="1"/>
    <col min="2" max="2" width="30" customWidth="1"/>
    <col min="3" max="3" width="30" customWidth="1"/>
    <col min="4" max="4" width="40" customWidth="1"/>
    <col min="5" max="5" width="35" customWidth="1"/>
  </cols>'''

    rows_xml = []
    for row in range(1, max_row + 1):
        row_cells = [(r, c, v, st, t) for (r, c, v, st, t) in cells if r == row]
        if row_cells:
            cell_xmls = []
            for (r, col, val, style, ctype) in row_cells:
                if ctype == 's':
                    cell_xmls.append(f'    <c r="{chr(64+col)}{r}" t="s" s="{style}"><v>{val}</v></c>')
                elif ctype == 'n':
                    cell_xmls.append(f'    <c r="{chr(64+col)}{r}" s="{style}"><v>{val}</v></c>')
                elif ctype == 'f':
                    esc_val = val.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")
                    cell_xmls.append(f'    <c r="{chr(64+col)}{r}" s="{style}"><f>{esc_val}</f><v></v></c>')
            rows_xml.append(f'  <row r="{row}">\n' + '\n'.join(cell_xmls) + '\n  </row>')

    sheet_data = '\n'.join(rows_xml) if rows_xml else ''

    return f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView workbookViewId="0">
      <pane ySplit="4" topLeftCell="A5" activePane="bottomLeft" state="frozen"/>
    </sheetView>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
{cols_xml}
  <sheetData>
{sheet_data}
  </sheetData>
  <pageMargins left="0.5" right="0.5" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

def pack_xlsx(output_path):
    import subprocess
    cmd = [
        "python3",
        str(SKILL_DIR / "scripts/xlsx_pack.py"),
        str(TEMPLATE_DIR),
        str(output_path)
    ]
    result = subprocess.run(cmd, capture_output=True, text=True)
    if result.returncode != 0:
        print(f"Pack error: {result.stderr}")
        raise Exception(f"Failed to pack xlsx: {result.stderr}")
    print(f"  Packed: {output_path}")

def main():
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    setup_template()

    print("Building shared strings...")
    shared_strings_xml = build_shared_strings(ALL_STRINGS)
    write_xml(TEMPLATE_DIR / "xl/sharedStrings.xml", shared_strings_xml)
    print(f"  Created sharedStrings.xml with {len(ALL_STRINGS)} strings")

    print("Building sheet...")
    max_row, cells = build_sheet1()
    sheet_xml = build_sheet_xml(max_row, cells)
    write_xml(TEMPLATE_DIR / "xl/worksheets/sheet1.xml", sheet_xml)

    print("Updating workbook configuration...")
    write_xml(TEMPLATE_DIR / "xl/workbook.xml", build_workbook_xml())
    write_xml(TEMPLATE_DIR / "xl/_rels/workbook.xml.rels", build_workbook_rels_xml())
    write_xml(TEMPLATE_DIR / "[Content_Types].xml", build_content_types_xml())
    write_xml(TEMPLATE_DIR / "xl/styles.xml", build_styles_xml())

    print("\nPacking 表单使用指引.xlsx...")
    pack_xlsx(OUTPUT_DIR / "表单使用指引.xlsx")

    print("\nDone with usage guide!")

if __name__ == "__main__":
    main()
