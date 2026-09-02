#!/usr/bin/env python3
"""
创建运营商课程【存量运营与用户价值经营】的Excel配套表单
使用XML模板方法
"""
import os
import sys
import zipfile
import shutil
import random

SKILL_DIR = "C:/Users/Administrator/.claude/skills/Excel表格处理"
TEMPLATE_DIR = os.path.join(SKILL_DIR, "templates", "minimal_xlsx")
OUTPUT_DIR = "D:/新课开发/运营商/01-存量运营与用户价值经营/配套表单和指引-Excel版"

def copy_template():
    """复制模板到临时工作目录"""
    work_dir = "D:/CC/temp/xlsx_work"
    if os.path.exists(work_dir):
        shutil.rmtree(work_dir)
    shutil.copytree(TEMPLATE_DIR, work_dir)
    return work_dir

def write_xml_file(path, content):
    """写入XML文件"""
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)

def pack_xlsx(work_dir, output_path):
    """打包xlsx文件"""
    with zipfile.ZipFile(output_path, 'w', zipfile.ZIP_DEFLATED) as zf:
        for root, dirs, files in os.walk(work_dir):
            for file in files:
                file_path = os.path.join(root, file)
                arc_name = os.path.relpath(file_path, work_dir)
                zf.write(file_path, arc_name)

def build_sheet_xml(rows_data, col_widths, freeze_row=1):
    """构建工作表XML"""
    rows_xml = []
    for row_num in sorted(rows_data.keys()):
        cells = rows_data[row_num]
        row_xml = f'<row r="{row_num}">'
        for cell in cells:
            row_xml += cell
        row_xml += '</row>'
        rows_xml.append(row_xml)

    cols_xml = ""
    for i, w in enumerate(col_widths, 1):
        cols_xml += f'<col min="{i}" max="{i}" width="{w}" customWidth="1"/>'

    return f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView workbookViewId="0">
      <pane ySplit="{freeze_row}" topLeftCell="A{freeze_row+1}" activePane="bottomLeft" state="frozen"/>
    </sheetView>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols>{cols_xml}</cols>
  <sheetData>
    {''.join(rows_xml)}
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

def header_cell(addr, str_idx):
    """表头单元格"""
    return f'<c r="{addr}" s="4" t="s"><v>{str_idx}</v></c>'

def blue_input(addr, value):
    """蓝色输入单元格"""
    return f'<c r="{addr}" s="1"><v>{value}</v></c>'

def blue_currency(addr, value):
    """蓝色货币输入"""
    return f'<c r="{addr}" s="5"><v>{value}</v></c>'

def black_formula(addr, formula):
    """黑色公式单元格"""
    return f'<c r="{addr}" s="6"><f>{formula}</f><v></v></c>'

def black_pct_formula(addr, formula):
    """黑色百分比公式"""
    return f'<c r="{addr}" s="8"><f>{formula}</f><v></v></c>'

def text_cell(addr, str_idx):
    """文本单元格"""
    return f'<c r="{addr}" s="0" t="s"><v>{str_idx}</v></c>'

def num_cell(addr, value):
    """数字单元格"""
    return f'<c r="{addr}" s="0"><v>{value}</v></c>'

def create_shared_strings(strings):
    """创建sharedStrings.xml"""
    unique = []
    seen = set()
    for s in strings:
        if s not in seen:
            unique.append(s)
            seen.add(s)

    count = len(strings)
    unique_count = len(unique)

    items = []
    for s in unique:
        escaped = s.replace("&", "&amp;").replace("<", "&lt;")
        items.append(f"<si><t>{escaped}</t></si>")

    xml = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="{count}" uniqueCount="{unique_count}">
    {''.join(items)}
</sst>'''
    return xml

def update_workbook(work_dir, sheets):
    """更新workbook.xml和相关文件"""
    # workbook.xml
    wb_path = os.path.join(work_dir, 'xl', 'workbook.xml')
    sheet_xml = ""
    for i, (name, sid) in enumerate(sheets, 1):
        rid = f"rId{i}"
        sheet_xml += f'<sheet name="{name}" sheetId="{sid}" r:id="{rid}"/>'

    content = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <workbookPr/>
  <bookViews><workbookView xWindow="0" yWindow="0" windowWidth="25600" windowHeight="19020" tabRatio="500"/></bookViews>
  <sheets>{sheet_xml}</sheets>
  <calcPr calcMode="auto"/>
</workbook>'''
    write_xml_file(wb_path, content)

    # workbook.xml.rels
    rels_path = os.path.join(work_dir, 'xl', '_rels', 'workbook.xml.rels')
    rels_content = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">'''
    for i in range(1, len(sheets) + 1):
        rels_content += f'\n  <Relationship Id="rId{i}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet{i}.xml"/>'
    rels_content += '''
  <Relationship Id="rId99" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
  <Relationship Id="rId100" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml"/>
</Relationships>'''
    write_xml_file(rels_path, rels_content)

    # Content_Types.xml
    ct_path = os.path.join(work_dir, '[Content_Types].xml')
    ct_content = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">'''
    for i in range(1, len(sheets) + 1):
        ct_content += f'\n  <Override PartName="/xl/worksheets/sheet{i}.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>'
    ct_content += '''
  <Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>
  <Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/>
</Types>'''
    write_xml_file(ct_path, ct_content)

def create_all_files():
    """创建所有Excel文件"""
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    random.seed(42)

    # ========== 文件1: 存量用户数据总览表.xlsx ==========
    print("Creating 文件1: 存量用户数据总览表.xlsx")

    names = ["张伟", "王芳", "李明", "刘洋", "陈静", "杨帆", "赵雷", "周琳", "吴强", "郑雪",
             "孙鹏", "马超", "朱婷", "胡涛", "林峰", "何丽", "高建", "罗欢", "郭勇", "梁晨"]

    strings = [
        "存量用户数据总览表", "用户编号", "姓名", "手机号", "ARPU(元)", "DOU(MB)", "MOU(分钟)",
        "入网时长(月)", "投诉次数", "捆绑业务数", "价值分层", "趋势信号", "流失风险等级",
        "高端用户", "中端用户", "普通用户", "低价值用户", "流失风险高", "流失风险中", "稳定",
        "用户数据统计", "指标", "最小值", "最大值", "平均值", "中位数", "说明"
    ]

    work_dir = copy_template()

    # 生成100个用户数据
    rows = {}
    rows[1] = [
        header_cell("A1", 1), header_cell("B1", 2), header_cell("C1", 3),
        header_cell("D1", 4), header_cell("E1", 5), header_cell("F1", 6),
        header_cell("G1", 7), header_cell("H1", 8), header_cell("I1", 9),
        header_cell("J1", 10), header_cell("K1", 11), header_cell("L1", 12), header_cell("M1", 13)
    ]

    for i in range(1, 101):
        idx = (i - 1) % 20
        name = names[idx]
        phone = f"138{random.randint(10000000, 99999999)}"

        if i <= 20:
            arpu = random.randint(150, 300)
            dou = random.randint(2000, 8000)
            mou = random.randint(200, 600)
            tenure = random.randint(6, 24)
            complaint = random.randint(0, 2)
            bundle = random.randint(1, 3)
        elif i <= 50:
            arpu = random.randint(50, 150)
            dou = random.randint(500, 2000)
            mou = random.randint(50, 200)
            tenure = random.randint(24, 60)
            complaint = random.randint(0, 4)
            bundle = random.randint(0, 2)
        else:
            arpu = random.randint(20, 50)
            dou = random.randint(100, 500)
            mou = random.randint(10, 50)
            tenure = random.randint(1, 6)
            complaint = random.randint(0, 6)
            bundle = random.randint(0, 1)

        if arpu >= 150:
            layer = "高端用户"
        elif arpu >= 50:
            layer = "中端用户"
        elif arpu >= 20:
            layer = "普通用户"
        else:
            layer = "低价值用户"

        if complaint >= 4:
            signal = "流失风险高"
            risk = "高"
        elif complaint >= 2 or tenure <= 6:
            signal = "流失风险中"
            risk = "中"
        else:
            signal = "稳定"
            risk = "低"

        row = i + 1
        rows[row] = [
            num_cell(f"A{row}", i),
            text_cell(f"B{row}", strings.index(name) if name in strings else 0),
            num_cell(f"C{row}", int(phone)),
            blue_input(f"D{row}", arpu),
            blue_input(f"E{row}", dou),
            blue_input(f"F{row}", mou),
            blue_input(f"G{row}", tenure),
            blue_input(f"H{row}", complaint),
            blue_input(f"I{row}", bundle),
            text_cell(f"J{row}", strings.index(layer) if layer in strings else 0),
            text_cell(f"K{row}", strings.index(signal) if signal in strings else 0),
            text_cell(f"L{row}", strings.index(risk) if risk in strings else 0)
        ]

    # 统计部分
    rows[103] = [text_cell("A103", strings.index("用户数据统计"))]
    rows[104] = [header_cell("A104", 14), header_cell("B104", 15), header_cell("C104", 16), header_cell("D104", 17), header_cell("E104", 18)]
    rows[105] = [text_cell("A105", 19), black_formula("B105", "MIN(D2:D101)"), black_formula("C105", "MAX(D2:D101)"), black_formula("D105", "AVERAGE(D2:D101)"), black_formula("E105", "MEDIAN(D2:D101)")]

    # 写文件
    sheet1_path = os.path.join(work_dir, 'xl', 'worksheets', 'sheet1.xml')
    write_xml_file(sheet1_path, build_sheet_xml(rows, [10, 10, 15, 12, 12, 12, 12, 10, 12, 12, 12, 10, 10], 1))

    ss_path = os.path.join(work_dir, 'xl', 'sharedStrings.xml')
    write_xml_file(ss_path, create_shared_strings(strings))

    update_workbook(work_dir, [("存量用户数据总览表", 1)])

    output_path = os.path.join(OUTPUT_DIR, "存量用户数据总览表.xlsx")
    pack_xlsx(work_dir, output_path)
    print(f"  Created: {output_path}")

    # ========== 文件2: 用户分层分析工具.xlsx ==========
    print("Creating 文件2: 用户分层分析工具.xlsx")

    strings2 = [
        "用户分层分析工具", "用户基础数据表", "编号", "姓名", "手机号", "ARPU(元)", "DOU(MB)",
        "MOU(分钟)", "入网时长(月)", "投诉次数", "捆绑业务数", "价值分层",
        "分层结果汇总", "类型", "人数", "平均ARPU", "平均DOU", "平均MOU", "平均入网时长",
        "高端用户", "中端用户", "普通用户", "低价值用户"
    ]

    work_dir = copy_template()

    rows2 = {}
    rows2[1] = [
        header_cell("A1", 1), header_cell("B1", 2), header_cell("C1", 3),
        header_cell("D1", 4), header_cell("E1", 5), header_cell("F1", 6),
        header_cell("G1", 7), header_cell("H1", 8), header_cell("I1", 9),
        header_cell("J1", 10)
    ]

    sample_data = [
        ("张三", "13811111111", 180, 6500, 450, 36, 1, 3),
        ("李四", "13822222222", 95, 1800, 150, 18, 2, 1),
        ("王五", "13833333333", 38, 450, 45, 8, 5, 0),
        ("赵六", "13844444444", 220, 7800, 520, 48, 0, 4),
        ("钱七", "13855555555", 68, 1200, 100, 30, 3, 2),
    ]

    for i, (name, phone, arpu, dou, mou, tenure, complaint, bundle) in enumerate(sample_data, 2):
        rows2[i] = [
            num_cell(f"A{i}", i-1),
            text_cell(f"B{i}", strings2.index(name) if name in strings2 else 0),
            num_cell(f"C{i}", int(phone)),
            blue_input(f"D{i}", arpu),
            blue_input(f"E{i}", dou),
            blue_input(f"F{i}", mou),
            blue_input(f"G{i}", tenure),
            blue_input(f"H{i}", complaint),
            blue_input(f"I{i}", bundle),
            black_formula(f"J{i}", f'IF(D{i}>=150,"高端用户",IF(D{i}>=50,"中端用户",IF(D{i}>=20,"普通用户","低价值用户")))')
        ]

    sheet1_path = os.path.join(work_dir, 'xl', 'worksheets', 'sheet1.xml')
    write_xml_file(sheet1_path, build_sheet_xml(rows2, [8, 12, 15, 12, 12, 12, 12, 10, 12, 15], 1))

    ss_path = os.path.join(work_dir, 'xl', 'sharedStrings.xml')
    write_xml_file(ss_path, create_shared_strings(strings2))

    update_workbook(work_dir, [("用户基础数据表", 1)])

    output_path = os.path.join(OUTPUT_DIR, "用户分层分析工具.xlsx")
    pack_xlsx(work_dir, output_path)
    print(f"  Created: {output_path}")

    # ========== 文件3: 需求挖掘记录表.xlsx ==========
    print("Creating 文件3: 需求挖掘记录表.xlsx")

    strings3 = [
        "需求挖掘记录表", "五问法记录模板", "用户编号", "用户姓名", "手机号", "接触日期", "接触渠道",
        "客户经理", "问题1-现状", "问题2-痛点", "问题3-目标", "问题4-障碍", "问题5-方案",
        "需求结论", "需求类型", "紧急程度"
    ]

    work_dir = copy_template()

    rows3 = {}
    rows3[1] = [
        header_cell("A1", 1), header_cell("B1", 2), header_cell("C1", 3),
        header_cell("D1", 4), header_cell("E1", 5), header_cell("F1", 6),
        header_cell("G1", 7), header_cell("H1", 8), header_cell("I1", 9),
        header_cell("J1", 10), header_cell("K1", 11)
    ]

    for i in range(2, 12):
        rows3[i] = [
            blue_input(f"A{i}", i-1),
            blue_input(f"B{i}", ""),
            blue_input(f"C{i}", ""),
            blue_input(f"D{i}", ""),
            blue_input(f"E{i}", ""),
            blue_input(f"F{i}", ""),
            blue_input(f"G{i}", ""),
            text_cell(f"H{i}", strings3.index("问题1-现状")),
            text_cell(f"I{i}", strings3.index("问题2-痛点")),
            text_cell(f"J{i}", strings3.index("问题3-目标")),
            text_cell(f"K{i}", strings3.index("问题4-障碍"))
        ]

    sheet1_path = os.path.join(work_dir, 'xl', 'worksheets', 'sheet1.xml')
    write_xml_file(sheet1_path, build_sheet_xml(rows3, [8, 12, 15, 12, 10, 12, 10, 15, 15, 15, 15], 1))

    ss_path = os.path.join(work_dir, 'xl', 'sharedStrings.xml')
    write_xml_file(ss_path, create_shared_strings(strings3))

    update_workbook(work_dir, [("五问法记录模板", 1)])

    output_path = os.path.join(OUTPUT_DIR, "需求挖掘记录表.xlsx")
    pack_xlsx(work_dir, output_path)
    print(f"  Created: {output_path}")

    # ========== 文件4: 增值业务推荐方案工具.xlsx ==========
    print("Creating 文件4: 增值业务推荐方案工具.xlsx")

    strings4 = [
        "增值业务推荐方案工具", "用户画像分析表", "用户编号", "用户姓名", "当前ARPU", "当前DOU",
        "入网时长", "投诉次数", "捆绑业务数", "用户画像标签", "推荐业务",
        "推荐理由", "预期提升ARPU", "价值重构计算器", "原ARPU", "新ARPU", "增量"
    ]

    work_dir = copy_template()

    rows4 = {}
    rows4[1] = [
        header_cell("A1", 1), header_cell("B1", 2), header_cell("C1", 3),
        header_cell("D1", 4), header_cell("E1", 5), header_cell("F1", 6),
        header_cell("G1", 7), header_cell("H1", 8), header_cell("I1", 9)
    ]

    for i in range(2, 12):
        rows4[i] = [
            blue_input(f"A{i}", i-1),
            blue_input(f"B{i}", ""),
            blue_input(f"C{i}", ""),
            blue_input(f"D{i}", ""),
            blue_input(f"E{i}", ""),
            blue_input(f"F{i}", ""),
            blue_input(f"G{i}", ""),
            text_cell(f"H{i}", strings4.index("用户画像标签")),
            blue_input(f"I{i}", "")
        ]

    sheet1_path = os.path.join(work_dir, 'xl', 'worksheets', 'sheet1.xml')
    write_xml_file(sheet1_path, build_sheet_xml(rows4, [8, 12, 12, 12, 12, 12, 12, 15, 15], 1))

    ss_path = os.path.join(work_dir, 'xl', 'sharedStrings.xml')
    write_xml_file(ss_path, create_shared_strings(strings4))

    update_workbook(work_dir, [("用户画像分析表", 1)])

    output_path = os.path.join(OUTPUT_DIR, "增值业务推荐方案工具.xlsx")
    pack_xlsx(work_dir, output_path)
    print(f"  Created: {output_path}")

    # ========== 文件5: 生命周期管理追踪表.xlsx ==========
    print("Creating 文件5: 生命周期管理追踪表.xlsx")

    strings5 = [
        "生命周期管理追踪表", "用户生命周期阶段判断表", "用户编号", "用户姓名", "入网时长(月)",
        "最近消费间隔(天)", "ARPU变化趋势", "投诉次数", "当前阶段",
        "获取期(0-6月)", "成长期(7-24月)", "成熟期(25-60月)", "衰退期(>60月)", "流失预警",
        "接触记录追踪表", "接触日期", "接触目的", "接触结果", "下次接触计划"
    ]

    work_dir = copy_template()

    rows5 = {}
    rows5[1] = [
        header_cell("A1", 1), header_cell("B1", 2), header_cell("C1", 3),
        header_cell("D1", 4), header_cell("E1", 5), header_cell("F1", 6),
        header_cell("G1", 7), header_cell("H1", 8)
    ]

    for i in range(2, 12):
        rows5[i] = [
            blue_input(f"A{i}", i-1),
            blue_input(f"B{i}", ""),
            blue_input(f"C{i}", ""),
            blue_input(f"D{i}", ""),
            blue_input(f"E{i}", ""),
            blue_input(f"F{i}", ""),
            blue_input(f"G{i}", ""),
            text_cell(f"H{i}", strings5.index("获取期(0-6月)"))
        ]

    sheet1_path = os.path.join(work_dir, 'xl', 'worksheets', 'sheet1.xml')
    write_xml_file(sheet1_path, build_sheet_xml(rows5, [8, 12, 12, 15, 12, 12, 10, 15], 1))

    ss_path = os.path.join(work_dir, 'xl', 'sharedStrings.xml')
    write_xml_file(ss_path, create_shared_strings(strings5))

    update_workbook(work_dir, [("用户生命周期阶段判断表", 1)])

    output_path = os.path.join(OUTPUT_DIR, "生命周期管理追踪表.xlsx")
    pack_xlsx(work_dir, output_path)
    print(f"  Created: {output_path}")

    # ========== 文件6: 经营优先级决策工具.xlsx ==========
    print("Creating 文件6: 经营优先级决策工具.xlsx")

    strings6 = [
        "经营优先级决策工具", "多维度评分模型", "用户编号", "用户姓名", "ARPU得分", "DOU得分",
        "入网时长得分", "投诉得分", "捆绑得分", "综合得分", "优先级排名",
        "评分标准", "ARPU:>=150=5分", "100-149=4分", "50-99=3分", "20-49=2分", "<20=1分",
        "高优先级(4.5-5分)", "中优先级(3-4.4分)", "低优先级(<3分)"
    ]

    work_dir = copy_template()

    rows6 = {}
    rows6[1] = [
        header_cell("A1", 1), header_cell("B1", 2), header_cell("C1", 3),
        header_cell("D1", 4), header_cell("E1", 5), header_cell("F1", 6),
        header_cell("G1", 7), header_cell("H1", 8), header_cell("I1", 9)
    ]

    for i in range(2, 12):
        rows6[i] = [
            blue_input(f"A{i}", i-1),
            blue_input(f"B{i}", ""),
            blue_input(f"C{i}", ""),
            blue_input(f"D{i}", ""),
            blue_input(f"E{i}", ""),
            blue_input(f"F{i}", ""),
            blue_input(f"G{i}", ""),
            blue_input(f"H{i}", ""),
            black_formula(f"I{i}", f"SUM(C{i}:H{i})")
        ]

    sheet1_path = os.path.join(work_dir, 'xl', 'worksheets', 'sheet1.xml')
    write_xml_file(sheet1_path, build_sheet_xml(rows6, [8, 12, 10, 10, 10, 10, 10, 10, 12], 1))

    ss_path = os.path.join(work_dir, 'xl', 'sharedStrings.xml')
    write_xml_file(ss_path, create_shared_strings(strings6))

    update_workbook(work_dir, [("多维度评分模型", 1)])

    output_path = os.path.join(OUTPUT_DIR, "经营优先级决策工具.xlsx")
    pack_xlsx(work_dir, output_path)
    print(f"  Created: {output_path}")

    # ========== 文件7: 综合演练评分表.xlsx ==========
    print("Creating 文件7: 综合演练评分表.xlsx")

    strings7 = [
        "综合演练评分表", "演练评分标准", "评分维度", "权重", "优秀(90-100)", "良好(80-89)",
        "合格(60-79)", "不合格(<60)", "得分",
        "用户画像分析", "需求挖掘技巧", "推荐方案设计", "沟通表达能力", "时间管理",
        "学员评分汇总", "学员姓名", "总分", "排名"
    ]

    work_dir = copy_template()

    rows7 = {}
    rows7[1] = [
        header_cell("A1", 1), header_cell("B1", 2), header_cell("C1", 3),
        header_cell("D1", 4), header_cell("E1", 5), header_cell("F1", 6)
    ]

    dimensions = ["用户画像分析", "需求挖掘技巧", "推荐方案设计", "沟通表达能力", "时间管理"]
    weights = [0.2, 0.25, 0.25, 0.15, 0.15]

    for i, (dim, weight) in enumerate(zip(dimensions, weights), 2):
        rows7[i] = [
            text_cell(f"A{i}", strings7.index(dim) if dim in strings7 else 0),
            blue_input(f"B{i}", weight),
            blue_input(f"C{i}", ""),
            blue_input(f"D{i}", ""),
            blue_input(f"E{i}", ""),
            blue_input(f"F{i}", "")
        ]

    sheet1_path = os.path.join(work_dir, 'xl', 'worksheets', 'sheet1.xml')
    write_xml_file(sheet1_path, build_sheet_xml(rows7, [15, 10, 15, 15, 15, 10], 1))

    ss_path = os.path.join(work_dir, 'xl', 'sharedStrings.xml')
    write_xml_file(ss_path, create_shared_strings(strings7))

    update_workbook(work_dir, [("演练评分标准", 1)])

    output_path = os.path.join(OUTPUT_DIR, "综合演练评分表.xlsx")
    pack_xlsx(work_dir, output_path)
    print(f"  Created: {output_path}")

    # ========== 文件8: 讲师配套工具.xlsx ==========
    print("Creating 文件8: 讲师配套工具.xlsx")

    strings8 = [
        "讲师配套工具", "课程时间轴管理", "时间节点", "模块内容", "时长(分钟)", "教学方法",
        "物料准备", "负责人", "备注",
        "物料清单", "序号", "物料名称", "数量", "规格要求", "领取状态",
        "学员考勤表", "学员姓名", "签到状态", "培训效果追踪", "评估维度", "培训前", "培训后", "提升幅度"
    ]

    work_dir = copy_template()

    rows8 = {}
    rows8[1] = [
        header_cell("A1", 1), header_cell("B1", 2), header_cell("C1", 3),
        header_cell("D1", 4), header_cell("E1", 5), header_cell("F1", 6),
        header_cell("G1", 7)
    ]

    schedule = [
        ("08:30-09:00", "签到与开场准备", 30, "物料分发", "签到表、教材", "班主任"),
        ("09:00-09:30", "课程导论与目标", 30, "讲授", "PPT", "讲师"),
        ("09:30-11:00", "存量用户数据总览表使用", 90, "演示+实操", "电脑", "讲师"),
        ("11:00-12:00", "用户分层分析工具", 60, "讲授+演练", "电脑", "讲师"),
        ("14:00-15:30", "需求挖掘记录表", 90, "角色扮演", "话术卡", "讲师"),
        ("15:30-17:00", "增值业务推荐方案", 90, "案例分析", "计算器", "讲师"),
    ]

    for i, (time, content, duration, method, material, owner) in enumerate(schedule, 2):
        rows8[i] = [
            blue_input(f"A{i}", time),
            blue_input(f"B{i}", content),
            blue_input(f"C{i}", duration),
            blue_input(f"D{i}", method),
            blue_input(f"E{i}", material),
            blue_input(f"F{i}", owner),
            blue_input(f"G{i}", "")
        ]

    sheet1_path = os.path.join(work_dir, 'xl', 'worksheets', 'sheet1.xml')
    write_xml_file(sheet1_path, build_sheet_xml(rows8, [15, 25, 10, 12, 15, 10, 15], 1))

    ss_path = os.path.join(work_dir, 'xl', 'sharedStrings.xml')
    write_xml_file(ss_path, create_shared_strings(strings8))

    update_workbook(work_dir, [("课程时间轴管理", 1)])

    output_path = os.path.join(OUTPUT_DIR, "讲师配套工具.xlsx")
    pack_xlsx(work_dir, output_path)
    print(f"  Created: {output_path}")

def main():
    print("=" * 60)
    print("开始创建运营商课程【存量运营与用户价值经营】配套表单")
    print("=" * 60)

    create_all_files()

    print("=" * 60)
    print("所有Excel文件创建完成!")
    print(f"输出目录: {OUTPUT_DIR}")
    print("=" * 60)

if __name__ == "__main__":
    main()
