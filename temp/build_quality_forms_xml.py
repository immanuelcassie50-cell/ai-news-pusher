#!/usr/bin/env python3
"""
Build Quality Forms Excel files using XML template approach
Following the Excel表格处理 skill's CREATE path
"""

import os
import shutil
import zipfile
from pathlib import Path

SKILL_DIR = Path("C:/Users/Administrator/.claude/skills/Excel表格处理")
TEMPLATE_DIR = Path("/tmp/xlsx_quality_work")
OUTPUT_DIR = Path("D:/新课开发/制造/6-质量管理与质量文化重塑/配套表单Excel")

def setup_template():
    """Copy minimal template to work directory"""
    if TEMPLATE_DIR.exists():
        shutil.rmtree(TEMPLATE_DIR)
    shutil.copytree(SKILL_DIR / "templates/minimal_xlsx", TEMPLATE_DIR)
    print(f"Template copied to {TEMPLATE_DIR}")

def create_sheets_xml(num_sheets):
    """Create worksheet XML files"""
    sheets_dir = TEMPLATE_DIR / "xl" / "worksheets"
    for i in range(2, num_sheets + 1):
        shutil.copy(sheets_dir / "sheet1.xml", sheets_dir / f"sheet{i}.xml")

def build_workbook_xml(sheet_names):
    """Build workbook.xml"""
    sheets = []
    for i, name in enumerate(sheet_names, 1):
        escaped_name = name.replace("&", "&amp;")
        rid = f"rId{i+3}" if i > 1 else "rId1"
        sheets.append(f'  <sheet name="{escaped_name}" sheetId="{i}" r:id="{rid}"/>')

    return f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <bookViews>
    <workbookView tabSelections="1"/>
  </bookViews>
  <sheets>
{chr(10).join(sheets)}
  </sheets>
  <calcPr calcId="0"/>
</workbook>'''

def build_workbook_rels_xml(num_sheets):
    """Build workbook.xml.rels"""
    rels = [
        '  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>',
        '  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>',
        '  <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml"/>',
    ]
    for i in range(2, num_sheets + 1):
        rels.append(f'  <Relationship Id="rId{i+3}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet{i}.xml"/>')

    return f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
{chr(10).join(rels)}
</Relationships>'''

def build_content_types_xml(num_sheets):
    """Build [Content_Types].xml"""
    overrides = [
        '  <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>',
        '  <Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>',
        '  <Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/>',
    ]
    for i in range(1, num_sheets + 1):
        overrides.append(f'  <Override PartName="/xl/worksheets/sheet{i}.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>')

    return f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml"  ContentType="application/xml"/>
{chr(10).join(overrides)}
</Types>'''

def write_xml(path, content):
    """Write XML content to file"""
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)

# String table for all sheets
ALL_STRINGS = [
    # Sheet 1: 质量类型判断卡
    "质量类型判断卡 - 四种质量问题类型快速识别",
    "适用场景：判断质量问题的性质，选择合适的处理策略",
    "问题类型", "特征描述", "发生频率", "影响范围", "紧迫程度", "推荐行动",
    "突发问题", "突然发生，无预警\n之前从未出现过", "低", "可能广泛", "高", "立即响应，临时措施",
    "重复问题", "已知问题再次发生\n有历史记录", "高", "局部", "中", "按既定流程处理\n加强检验",
    "预期问题", "可预见的风险\n基于经验的预测", "中", "可控制", "低", "预防措施\n提前准备",
    "跨部门问题", "涉及多个部门\n责任不清", "不定", "广泛", "高", "协调会议\n明确责任",
    "快速判断流程",
    "Step 1", "这个问题以前出现过吗？", "否 → 突发问题 / 是 → 继续",
    "Step 2", "是否涉及多个部门？", "是 → 跨部门问题 / 否 → 继续",
    "Step 3", "可以提前预判吗？", "是 → 预期问题 / 否 → 重复问题",
    "使用说明：在遇到质量问题时，首先判断问题类型，然后根据类型选择相应的处理流程。四种类型可能同时存在，优先处理紧迫程度高的问题。",

    # Sheet 2: WSDF质量定义工作表
    "WSDF质量定义工作表 - W/S/D/F问题分类与严重度评分",
    "W=微缺陷(Weep) S=轻微(Minor) D=严重(Defect) F=致命(Fatal)",
    "问题编号", "问题描述", "W/S/D/F分类", "发生频率(次/月)", "严重度评分(1-5)", "综合风险分", "备注",
    "汇总",
    "风险分说明：综合风险分 = 发生频率 × 严重度评分。风险分 > 15 为高风险，需要立即处理；风险分 8-15 为中风险，需要关注；风险分 < 8 为低风险，可常规处理。",

    # Sheet 3: 五问法分析单
    "五问法分析单 - 5层追问找根因",
    "每次追问都要有证据支持，避免猜测",
    "层次", "问题", "回答", "证据/依据", "结论",
    "第1问", "为什么？（现象）",
    "第2问", "为什么？（原因）",
    "第3问", "为什么？（深层原因）",
    "第4问", "为什么？（根本原因）",
    "第5问", "为什么？（系统原因）",
    "根因总结",
    "根本原因：",
    "证据链：",

    # Sheet 4: 4M鱼骨图分析
    "4M鱼骨图分析 - Man/Machine/Material/Method",
    "在每个分支下填写可能的根本原因",
    "Man 人", "操作员技能不足", "培训不到位", "疲劳/压力", "注意力不集中", "沟通不畅",
    "Machine 机器", "设备老化", "维护不当", "精度下降", "故障频发", "备件质量差",
    "Material 材料", "来料不良", "储存不当", "批次差异", "规格不符", "供应商问题",
    "Method 方法", "工艺参数不当", "作业标准不清晰", "流程缺陷", "设计问题", "方法陈旧",
    "Measurement 测量", "测量系统误差", "量具精度不足", "检测方法不当", "取样问题", "读数错误",
    "Environment 环境", "温度湿度不适", "光线不足", "噪音干扰", "空间拥挤", "6S不到位",
    "根因汇总（从上述分析中识别）",
    "最可能的3个根因：",
    "根因1：", "根因2：", "根因3：",

    # Sheet 5: FAR方案对比评估表
    "FAR方案对比评估表 - F(可行性)/A(适当性)/R(风险)三维评估",
    "评分标准：1-5分，5分最优",
    "方案编号", "方案描述", "F可行性\n(1-5)", "A适当性\n(1-5)", "R风险\n(1-5)", "加权总分", "排名", "建议",
    "方案1", "方案2", "方案3", "方案4", "方案5",
    "评分权重：F可行性40%，A适当性30%，R风险30%（风险评分已反向处理，高风险=低分）",

    # Sheet 6: 质量放行决策卡
    "质量放行决策卡 - 核心决策工具",
    "三个问题，判断是否放行",
    "问题1：这个问题以前出现过吗？",
    "选项：",
    "A. 从未出现过（突发问题）", "B. 以前出现过但已解决", "C. 反复出现（重复问题）",
    "问题2：这个问题的影响范围有多大？",
    "A. 单件/单个位置", "B. 多件/多个位置", "C. 批量/整批问题",
    "问题3：客户能接受这个问题吗？",
    "A. 客户明确接受", "B. 需要特采审批", "C. 客户无法接受",
    "决策建议",
    '基于以上三个问题的回答，系统会自动给出放行建议：\n• 0个"C" → 放行（无需额外审批）\n• 1个"C" → 有条件放行（需要QA确认）\n• 2个"C" → 拒绝放行（必须改善）\n• 3个"C" → 立即停止（重大质量问题）',
    "C的数量", "决策", "说明", "审批要求",
    "0个", "放行", "符合质量标准", "操作员自主决定",
    "1个", "有条件放行", "需QA确认", "QA工程师签字",
    "2个", "拒绝放行", "必须改善", "质量经理审批",
    "3个", "立即停止", "重大质量问题", "高管层审批",
    "审批记录",
    "决策结果", "审批人", "审批时间", "签名",

    # Sheet 7: 质量执行前检查清单
    "质量执行前检查清单",
    "执行前逐项确认，异常记录在备注栏",
    "序号", "检查项目", "状态(✓/✗)", "异常记录", "确认签名",
    "操作人员已接受培训", "设备点检完成", "来料检验合格", "工艺参数符合要求",
    "测量设备校准有效", "作业指导书已更新", "6S现场符合要求", "安全防护措施到位",
    "首件检验已通过", "异常处理流程已明确",
    "执行状态汇总：",

    # Sheet 8: 质量问题验证追踪表
    "质量问题验证追踪表",
    "记录每个质量问题的根因、措施和验证结果",
    "问题编号", "问题描述", "根本原因", "改善措施", "责任人", "计划完成", "实际完成", "验证结果",
    "状态统计",
    "待处理：", "已完成：",

    # Sheet 9: 团队质量数据台账
    "团队质量数据台账 - 月度KPI追踪",
    "月份", "检验批数", "合格批数", "合格率", "不良件数", "不良率", "客诉件数", "改进项目", "培训人次", "人均产值", "备注",
    "年度汇总",

    # Sheet 10: 课程练习成绩汇总
    "课程练习成绩汇总",
    "记录学员各模块练习得分，计算综合评分和排名",
    "学员姓名", "模块1\n质量判断", "模块2\nWSDF分析", "模块3\n5问法", "模块4\n鱼骨图", "模块5\nFAR评估", "综合评分", "排名",
    "班级统计", "平均分：", "最高分：", "最低分：", "及格人数(>=60)：",
]

def build_shared_strings(strings):
    """Build sharedStrings.xml"""
    unique_strings = []
    string_indices = []

    for s in strings:
        if s not in unique_strings:
            unique_strings.append(s)
        string_indices.append(unique_strings.index(s))

    si_items = []
    for s in unique_strings:
        escaped = s.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace('"', "&quot;")
        # Handle newlines
        if "\n" in s:
            si_items.append(f'  <si><t xml:space="preserve">{escaped.replace(chr(10), "&#xA;")}</t></si>')
        else:
            si_items.append(f"  <si><t>{escaped}</t></si>")

    count = len(strings)
    unique_count = len(unique_strings)

    return f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="{count}" uniqueCount="{unique_count}">
{chr(10).join(si_items)}
</sst>''', string_indices

def build_styles_xml():
    """Build styles.xml with quality form specific styles"""
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

def build_numFmts():
    return '''  <numFmts count="4">
    <numFmt numFmtId="164" formatCode="$#,##0;($#,##0);&quot;-&quot;"/>
    <numFmt numFmtId="165" formatCode="0.0%"/>
    <numFmt numFmtId="166" formatCode="0.0x"/>
    <numFmt numFmtId="167" formatCode="#,##0"/>
  </numFmts>'''

# Sheet builder functions return (row_count, cells_data)
# cells_data is list of tuples: (row, col, value, style, type)
# type: 's' = shared string, 'n' = number, 'f' = formula

def build_sheet1():
    """Build 质量类型判断卡"""
    cells = []

    def s(row, col, val): cells.append((row, col, val, 13, 's'))  # header style (red bg, white text)
    def l(row, col, val): cells.append((row, col, val, 0, 's'))  # label style
    def b(row, col, val): cells.append((row, col, val, 3, 's'))  # bold

    # Title row 1
    s(1, 1, 0)
    # Row 2 description
    l(2, 1, 1)
    # Row 4: headers
    for col, idx in enumerate([2, 3, 4, 5, 6, 7], 1):
        s(4, col, idx + 1)
    # Data rows 5-8
    types = [
        (8, 9, 10, 11, 12, 13),   # 突发问题
        (14, 15, 16, 17, 18, 19), # 重复问题
        (20, 21, 22, 23, 24, 25), # 预期问题
        (26, 27, 28, 29, 30, 31), # 跨部门问题
    ]
    for type_idx, row in enumerate(range(5, 9)):
        for col, str_idx in enumerate(types[type_idx]):
            if col == 0:
                cells.append((row, col+1, str_idx, 3, 's'))  # bold for type name
            else:
                cells.append((row, col+1, str_idx, 0, 's'))

    # Flow section row 11
    s(11, 1, 32)
    # Flow steps rows 12-14
    cells.append((12, 1, 33, 1, 's'))  # Step 1 - red text
    cells.append((12, 2, 34, 0, 's'))
    cells.append((12, 4, 35, 0, 's'))
    cells.append((13, 1, 36, 1, 's'))  # Step 2
    cells.append((13, 2, 37, 0, 's'))
    cells.append((13, 4, 38, 0, 's'))
    cells.append((14, 1, 39, 1, 's'))  # Step 3
    cells.append((14, 2, 40, 0, 's'))
    cells.append((14, 4, 41, 0, 's'))

    # Note row 16
    l(16, 1, 42)

    return 16, cells

def build_sheet2():
    """Build WSDF质量定义工作表"""
    cells = []

    def s(row, col, val): cells.append((row, col, val, 13, 's'))
    def l(row, col, val): cells.append((row, col, val, 0, 's'))
    def n(row, col, val): cells.append((row, col, val, 1, 'n'))  # blue input

    # Title
    s(1, 1, 43)
    l(2, 1, 44)
    # Headers row 4
    for col, str_idx in enumerate([45, 46, 47, 48, 49, 50, 51], 1):
        s(4, col, str_idx)
    # Data rows 5-14 (10 rows)
    for i in range(10):
        r = 5 + i
        cells.append((r, 1, f"Q{i+1:03d}", 0, 's'))  # ID
        # cols 2-5 are user input (blue)
        cells.append((r, 6, f"IF(AND(D{r}<>\"\",E{r}<>\"\"),D{r}*E{r},\"\")", 2, 'f'))
    # Summary row 16
    cells.append((16, 1, 52, 0, 's'))  # 汇总
    cells.append((16, 4, "SUM(D5:D15)", 2, 'f'))
    cells.append((16, 6, "IF(COUNT(F5:F15)>0,AVERAGE(F5:F15),\"\")", 2, 'f'))
    # Note row 18
    l(18, 1, 53)

    return 18, cells

def build_sheet3():
    """Build 五问法分析单"""
    cells = []

    def s(row, col, val): cells.append((row, col, val, 13, 's'))

    s(1, 1, 54)
    cells.append((2, 1, 55, 0, 's'))
    # Headers row 4
    for col, str_idx in enumerate([56, 57, 58, 59, 60], 1):
        s(4, col, str_idx)
    # 5 Why rows
    why_questions = [61, 62, 63, 64, 65]
    for i, q_idx in enumerate(why_questions):
        r = 5 + i
        cells.append((r, 1, q_idx, 1, 's'))  # red question number
        cells.append((r, 2, 57, 0, 's'))  # "为什么？"
    # Root cause section
    s(11, 1, 66)
    cells.append((12, 1, 67, 0, 's'))  # 根本原因：
    cells.append((13, 1, 68, 0, 's'))  # 证据链：

    return 14, cells

def build_sheet4():
    """Build 4M鱼骨图分析"""
    cells = []

    def s(row, col, val): cells.append((row, col, val, 14, 's'))  # dark gray header

    s(1, 1, 69)
    cells.append((2, 1, 70, 0, 's'))

    branches = [
        (71, [72, 73, 74, 75, 76]),  # Man
        (77, [78, 79, 80, 81, 82]),  # Machine
        (83, [84, 85, 86, 87, 88]),  # Material
        (89, [90, 91, 92, 93, 94]),  # Method
        (95, [96, 97, 98, 99, 100]), # Measurement
        (101, [102, 103, 104, 105, 106]), # Environment
    ]

    row = 4
    for branch_name_idx, factors in branches:
        s(row, 1, branch_name_idx)
        row += 1
        for i, factor_idx in enumerate(factors):
            cells.append((row, 1, f"{i+1}.", 0, 's'))
            cells.append((row, 2, factor_idx, 0, 's'))
            row += 1
        row += 1  # blank row

    # Root cause summary
    s(row, 1, 107)
    row += 1
    cells.append((row, 1, 108, 0, 's'))
    row += 1
    for i in range(1, 4):
        cells.append((row, 1, f"根因{i}：", 0, 's'))
        row += 1

    return row, cells

def build_sheet5():
    """Build FAR方案对比评估表"""
    cells = []

    def s(row, col, val): cells.append((row, col, val, 13, 's'))

    s(1, 1, 109)
    cells.append((2, 1, 110, 0, 's'))
    # Headers row 4
    headers = [111, 112, 113, 114, 115, 116, 117, 118]
    for col, str_idx in enumerate(headers, 1):
        s(4, col, str_idx)
    # Data rows 5-9 (5 schemes)
    for i in range(5):
        r = 5 + i
        cells.append((r, 1, f"方案{i+1}", 0, 's'))
        cells.append((r, 3, 3, 1, 'n'))  # F score default 3
        cells.append((r, 4, 3, 1, 'n'))  # A score default 3
        cells.append((r, 5, 3, 1, 'n'))  # R score default 3
        cells.append((r, 6, f"C{r}*0.4+D{r}*0.3+(5-E{r})*0.3", 2, 'f'))
        cells.append((r, 7, f"RANK(F{r},F5:F9,0)", 2, 'f'))
        cells.append((r, 8, f'IF(F{r}=MAX($F$5:$F$9),"推荐","")', 2, 'f'))
    # Note row 12
    cells.append((12, 1, 119, 0, 's'))

    return 13, cells

def build_sheet6():
    """Build 质量放行决策卡 (CORE)"""
    cells = []

    def s(row, col, val): cells.append((row, col, val, 13, 's'))
    def l(row, col, val): cells.append((row, col, val, 0, 's'))

    s(1, 1, 120)
    cells.append((2, 1, 121, 1, 's'))  # red italic
    # Q1
    s(4, 1, 122)
    cells.append((5, 1, 123, 0, 's'))
    for i, opt_idx in enumerate([124, 125, 126]):
        cells.append((5, i*2+2, opt_idx, 0, 's'))
    # Q2
    s(7, 1, 127)
    cells.append((8, 1, 123, 0, 's'))
    for i, opt_idx in enumerate([128, 129, 130]):
        cells.append((8, i*2+2, opt_idx, 0, 's'))
    # Q3
    s(10, 1, 131)
    cells.append((11, 1, 123, 0, 's'))
    for i, opt_idx in enumerate([132, 133, 134]):
        cells.append((11, i*2+2, opt_idx, 0, 's'))
    # Decision section
    s(13, 1, 135)
    l(14, 1, 136)
    # Decision table header row 17
    for col, str_idx in enumerate([137, 138, 139, 140], 1):
        s(17, col*2-1, str_idx)
    # Decision data rows 18-21
    decisions = [(141, 142, 143, 144), (145, 146, 147, 148), (149, 150, 151, 152), (153, 154, 155, 156)]
    for i, row_data in enumerate(decisions):
        r = 18 + i
        for col, str_idx in enumerate(row_data, 1):
            cells.append((r, col*2-1, str_idx, 0, 's'))
    # Approval section
    s(23, 1, 157)
    for col, str_idx in enumerate([158, 159, 160, 161], 1):
        s(24, col, str_idx)

    return 26, cells

def build_sheet7():
    """Build 质量执行前检查清单"""
    cells = []

    def s(row, col, val): cells.append((row, col, val, 13, 's'))

    s(1, 1, 162)
    cells.append((2, 1, 163, 0, 's'))
    # Headers row 4
    for col, str_idx in enumerate([164, 165, 166, 167, 168], 1):
        s(4, col, str_idx)
    # Check items
    items = [169, 170, 171, 172, 173, 174, 175, 176, 177, 178]
    for i, item_idx in enumerate(items):
        r = 5 + i
        cells.append((r, 1, str(i+1), 0, 's'))
        cells.append((r, 2, item_idx, 0, 's'))
    # Summary row 16
    cells.append((16, 1, 179, 0, 's'))
    cells.append((16, 3, 'COUNTIF(C5:C14,"✓")&"/"&COUNTA(C5:C14)', 2, 'f'))

    return 17, cells

def build_sheet8():
    """Build 质量问题验证追踪表"""
    cells = []

    def s(row, col, val): cells.append((row, col, val, 13, 's'))

    s(1, 1, 180)
    cells.append((2, 1, 181, 0, 's'))
    # Headers row 4
    for col, str_idx in enumerate([182, 183, 184, 185, 186, 187, 188, 189], 1):
        s(4, col, str_idx)
    # Data rows 5-19 (15 problems)
    for i in range(15):
        r = 5 + i
        cells.append((r, 1, f"Q{i+1:03d}", 0, 's'))
    # Status section
    s(21, 1, 190)
    cells.append((22, 1, 191, 0, 's'))
    cells.append((22, 2, 'COUNTIF(I5:I19,"待验证")', 2, 'f'))
    cells.append((23, 1, 192, 0, 's'))
    cells.append((23, 2, 'COUNTIF(I5:I19,"通过")', 2, 'f'))

    return 24, cells

def build_sheet9():
    """Build 团队质量数据台账"""
    cells = []

    def s(row, col, val): cells.append((row, col, val, 13, 's'))

    s(1, 1, 193)
    # Headers row 3
    for col, str_idx in enumerate([194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204], 1):
        s(3, col, str_idx)
    # Month rows 4-15
    for i in range(12):
        r = 4 + i
        cells.append((r, 1, f"{i+1}月", 0, 's'))
        cells.append((r, 4, f"IF(B{r}>0,C{r}/B{r},\"\")", 2, 'f'))
        cells.append((r, 4, "IF(B4>0,C4/B4,\"\")", 2, 'f'))  # pass rate
        cells.append((r, 6, f"IF(B{r}>0,E{r}/B{r},\"\")", 2, 'f'))  # defect rate
    # Summary row 16
    cells.append((16, 1, 205, 0, 's'))
    cells.append((16, 2, "SUM(B4:B15)", 2, 'f'))
    cells.append((16, 3, "SUM(C4:C15)", 2, 'f'))
    cells.append((16, 4, "IF(B16>0,C16/B16,\"\")", 2, 'f'))
    cells.append((16, 5, "SUM(E4:E15)", 2, 'f'))
    cells.append((16, 6, "IF(B16>0,E16/B16,\"\")", 2, 'f'))
    cells.append((16, 7, "SUM(G4:G15)", 2, 'f'))
    cells.append((16, 8, "SUM(H4:H15)", 2, 'f'))
    cells.append((16, 9, "SUM(I4:I15)", 2, 'f'))

    return 17, cells

def build_sheet10():
    """Build 课程练习成绩汇总"""
    cells = []

    def s(row, col, val): cells.append((row, col, val, 13, 's'))

    s(1, 1, 206)
    cells.append((2, 1, 207, 0, 's'))
    # Headers row 4
    for col, str_idx in enumerate([208, 209, 210, 211, 212, 213, 214, 215], 1):
        s(4, col, str_idx)
    # Student rows 5-24 (20 students)
    for i in range(20):
        r = 5 + i
        cells.append((r, 7, f"IF(COUNTA(B{r}:F{r})>0,AVERAGE(B{r}:F{r}),\"\")", 2, 'f'))
        cells.append((r, 8, f"IF(G{r}<>\"\",RANK(G{r},$G$5:$G$24,0),\"\")", 2, 'f'))
    # Stats section row 26
    cells.append((26, 1, 216, 0, 's'))
    cells.append((27, 1, 217, 0, 's'))
    cells.append((27, 2, "IF(COUNT(G5:G24)>0,AVERAGE(G5:G24),\"\")", 2, 'f'))
    cells.append((28, 1, 218, 0, 's'))
    cells.append((28, 2, "IF(COUNT(G5:G24)>0,MAX(G5:G24),\"\")", 2, 'f'))
    cells.append((29, 1, 219, 0, 's'))
    cells.append((29, 2, "IF(COUNT(G5:G24)>0,MIN(G5:G24),\"\")", 2, 'f'))
    cells.append((30, 1, 220, 0, 's'))
    cells.append((30, 2, 'COUNTIF(G5:G24,">=60")', 2, 'f'))

    return 31, cells

def build_sheet_xml(sheet_idx, max_row, cells):
    """Build a complete sheet XML with the given cells"""

    # Build column definitions (A-G width)
    cols_xml = '''  <cols>
    <col min="1" max="1" width="15" customWidth="1"/>
    <col min="2" max="2" width="25" customWidth="1"/>
    <col min="3" max="3" width="15" customWidth="1"/>
    <col min="4" max="4" width="15" customWidth="1"/>
    <col min="5" max="5" width="15" customWidth="1"/>
    <col min="6" max="6" width="15" customWidth="1"/>
    <col min="7" max="7" width="15" customWidth="1"/>
  </cols>'''

    # Build row XML
    rows_xml = []
    for row in range(1, max_row + 1):
        row_cells = [(r, c, v, s, t) for (r, c, v, s, t) in cells if r == row]
        if row_cells:
            cell_xmls = []
            for (r, col, val, style, ctype) in row_cells:
                if ctype == 's':
                    cell_xmls.append(f'    <c r="{chr(64+col)}{r}" t="s" s="{style}"><v>{val}</v></c>')
                elif ctype == 'n':
                    cell_xmls.append(f'    <c r="{chr(64+col)}{r}" s="{style}"><v>{val}</v></c>')
                elif ctype == 'f':
                    # Escape XML special chars in formulas
                    esc_val = val.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")
                    cell_xmls.append(f'    <c r="{chr(64+col)}{r}" s="{style}"><f>{esc_val}</f><v></v></c>')
            rows_xml.append(f'  <row r="{row}">\n' + '\n'.join(cell_xmls) + '\n  </row>')

    sheet_data = '\n'.join(rows_xml) if rows_xml else ''

    return f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView workbookViewId="0">
      <pane ySplit="3" topLeftCell="A4" activePane="bottomLeft" state="frozen"/>
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
    """Pack the template directory into an xlsx file"""
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

    # Copy template
    setup_template()

    # Sheet names
    SHEET_NAMES = [
        "质量类型判断卡",
        "WSDF质量定义工作表",
        "五问法分析单",
        "4M鱼骨图分析",
        "FAR方案对比评估表",
        "质量放行决策卡",
        "质量执行前检查清单",
        "质量问题验证追踪表",
        "团队质量数据台账",
        "课程练习成绩汇总",
    ]

    # Build shared strings
    print("Building shared strings...")
    shared_strings_xml, string_indices = build_shared_strings(ALL_STRINGS)
    write_xml(TEMPLATE_DIR / "xl/sharedStrings.xml", shared_strings_xml)
    print(f"  Created sharedStrings.xml with {len(ALL_STRINGS)} strings")

    # Create sheet XML files
    print("Building sheets...")
    sheet_builders = [
        build_sheet1,
        build_sheet2,
        build_sheet3,
        build_sheet4,
        build_sheet5,
        build_sheet6,
        build_sheet7,
        build_sheet8,
        build_sheet9,
        build_sheet10,
    ]

    # Update workbook.xml
    write_xml(TEMPLATE_DIR / "xl/workbook.xml", build_workbook_xml(SHEET_NAMES))
    write_xml(TEMPLATE_DIR / "xl/_rels/workbook.xml.rels", build_workbook_rels_xml(len(SHEET_NAMES)))
    write_xml(TEMPLATE_DIR / "[Content_Types].xml", build_content_types_xml(len(SHEET_NAMES)))

    # Create additional sheet XML files
    for i in range(2, len(SHEET_NAMES) + 1):
        shutil.copy(TEMPLATE_DIR / "xl/worksheets/sheet1.xml", TEMPLATE_DIR / f"xl/worksheets/sheet{i}.xml")

    # Write styles
    write_xml(TEMPLATE_DIR / "xl/styles.xml", build_styles_xml())

    # Build each sheet
    for i, builder in enumerate(sheet_builders, 1):
        print(f"  Building sheet {i}: {SHEET_NAMES[i-1]}...")
        max_row, cells = builder()
        sheet_xml = build_sheet_xml(i, max_row, cells)
        write_xml(TEMPLATE_DIR / "xl/worksheets" / f"sheet{i}.xml", sheet_xml)

    # Pack blank template
    print("\nPacking 质量工具表单_空表.xlsx...")
    pack_xlsx(OUTPUT_DIR / "质量工具表单_空表.xlsx")

    print("\nDone with blank template!")

if __name__ == "__main__":
    main()
