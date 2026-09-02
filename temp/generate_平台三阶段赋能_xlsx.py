#!/usr/bin/env python3
"""生成产业互联网平台三阶段赋能课程成果Demo的4个Excel文件"""

import os
import shutil
from pathlib import Path

SKILL_DIR = Path("C:/Users/Administrator/.claude/skills/Excel表格处理")
TEMPLATE_DIR = SKILL_DIR / "templates" / "minimal_xlsx"
OUTPUT_DIR = Path("D:/新课开发/生态链/5.产业互联网平台三阶段赋能：平台化创新到生态化协同怎么落地/成果Demo")

def copy_template(work_dir):
    """复制模板到工作目录"""
    if os.path.exists(work_dir):
        shutil.rmtree(work_dir)
    shutil.copytree(TEMPLATE_DIR, work_dir)

def build_shared_strings(strings):
    """构建sharedStrings.xml内容"""
    unique = list(dict.fromkeys(strings))  # 去重保持顺序
    items = []
    for s in unique:
        escaped = s.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;')
        items.append(f'  <si><t>{escaped}</t></si>')
    count = len(strings)
    unique_count = len(unique)
    return f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="{count}" uniqueCount="{unique_count}">
{chr(10).join(items)}
</sst>'''

def get_string_index(strings, text):
    """获取字符串在sharedStrings中的索引"""
    unique = list(dict.fromkeys(strings))
    return unique.index(text)

def make_cell(row, col, value_idx, style=0, cell_type="s"):
    """生成单元格XML"""
    col_letter = chr(65 + col)  # A=0, B=1, etc.
    return f'    <c r="{col_letter}{row}" t="{cell_type}" s="{style}"><v>{value_idx}</v></c>'

def make_number_cell(row, col, value, style=0):
    """生成数字单元格XML"""
    col_letter = chr(65 + col)
    return f'    <c r="{col_letter}{row}" s="{style}"><v>{value}</v></c>'

def make_formula_cell(row, col, formula, style=0):
    """生成公式单元格XML"""
    col_letter = chr(65 + col)
    return f'    <c r="{col_letter}{row}" s="{style}"><f>{formula}</f><v></v></c>'

def update_workbook_xml(work_dir, sheets):
    """更新workbook.xml"""
    wb_path = work_dir / "xl" / "workbook.xml"
    sheet_entries = []
    for i, name in enumerate(sheets):
        escaped_name = name.replace('&', '&amp;')
        rid = f"rId{i+4}"  # rId4, rId5, etc.
        sheet_entries.append(f'  <sheet name="{escaped_name}" sheetId="{i+1}" r:id="{rid}"/>')

    content = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheets>
{chr(10).join(sheet_entries)}
  </sheets>
</workbook>'''
    wb_path.write_text(content, encoding='utf-8')

def update_workbook_rels(work_dir, num_sheets):
    """更新workbook.xml.rels"""
    rels_path = work_dir / "xl" / "_rels" / "workbook.xml.rels"
    entries = [
        '  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>',
        '  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>',
        '  <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml"/>',
    ]
    for i in range(num_sheets):
        rid = f"rId{i+4}"
        entries.append(f'  <Relationship Id="{rid}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet{i+2}.xml"/>')

    content = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
{chr(10).join(entries)}
</Relationships>'''
    rels_path.write_text(content, encoding='utf-8')

def update_content_types(work_dir, num_sheets):
    """更新[Content_Types].xml"""
    ct_path = work_dir / "[Content_Types].xml"
    overrides = [
        '  <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>',
        '  <Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>',
        '  <Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/>',
    ]
    for i in range(num_sheets):
        overrides.append(f'  <Override PartName="/xl/worksheets/sheet{i+1}.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>')

    content = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
{chr(10).join(overrides)}
</Types>'''
    ct_path.write_text(content, encoding='utf-8')

def pack_and_validate(work_dir, output_path):
    """打包并验证"""
    import subprocess
    # 打包
    subprocess.run(["python3", str(SKILL_DIR / "scripts" / "xlsx_pack.py"), str(work_dir), str(output_path)], check=True)
    # 验证
    result = subprocess.run(["python3", str(SKILL_DIR / "scripts" / "formula_check.py"), str(output_path)], capture_output=True, text=True)
    print(f"Validation for {output_path.name}:")
    print(result.stdout)
    if result.returncode != 0:
        print(f"WARNING: Validation failed for {output_path}")

# ========== 文件1: 需求分析_平台三阶段赋能.xlsx ==========
def create_needs_analysis():
    work_dir = Path("/tmp/xlsx_work_需求分析")
    copy_template(work_dir)

    sheets_data = [
        ("学员基本信息", [
            ("学员背景信息", "公司行业", "公司规模", "岗位级别", "工作年限", "平台相关经验", "课程期望", "备注"),
            ("学员1", "科技/SaaS", "800人", "P5-P6", "5-8年", "有平台产品经验", "学习平台化思维", ""),
            ("学员2", "制造/工业互联网", "2000人", "P6-P7", "8-10年", "有生态建设经验", "掌握三阶段方法论", ""),
            ("学员3", "零售/电商", "500人", "P5", "3-5年", "平台运营经验较少", "了解平台落地路径", ""),
        ]),
        ("学习需求诊断", [
            ("痛点场景", "当前做法", "期望改变", "学习动机", "备注"),
            ("平台定位不清", "凭经验做定位，缺乏系统方法", "掌握平台定位画布", "解决实际工作困惑", ""),
            ("生态伙伴吸引力不足", "伙伴流失率高", "建立吸引力评估体系", "提升生态粘性", ""),
            ("协同效应难以量化", "不知道如何度量协同价值", "建立协同价值度量模板", "向领导证明投入产出", ""),
            ("三阶段演进模糊", "不清楚各阶段重点", "清晰三阶段路径和里程碑", "制定企业落地规划", ""),
        ]),
        ("平台现状评估", [
            ("评估维度", "现状描述", "评分(1-5)", "改进空间", "优先级"),
            ("平台定位清晰度", "定位描述模糊，缺乏差异化", "2", "3", "高"),
            ("生态伙伴吸引力", "伙伴满意度低，流失率30%", "2", "3", "高"),
            ("协同机制完善度", "协同流程不清晰，效率低", "2", "3", "中"),
            ("数据化度量能力", "缺乏数据支撑决策", "1", "4", "高"),
            ("生态健康度", "生态活力不足，创新少", "2", "3", "中"),
        ]),
        ("期望收获", [
            ("收获类别", "具体期望", "达成标准", "重要性"),
            ("知识层面", "理解产业互联网平台三阶段演进规律", "能完整阐述三阶段特征", "★★★★★"),
            ("技能层面", "掌握平台定位画布、生态吸引力评估、协同度量工具", "能独立完成企业现状诊断", "★★★★★"),
            ("思维层面", "建立生态化思考方式，从产品思维到生态思维", "能提出生态化创新方案", "★★★★☆"),
            ("实践层面", "制定本企业平台三阶段落地规划", "输出可执行的落地方案", "★★★★★"),
        ]),
    ]

    # 收集所有字符串
    all_strings = []
    for sheet_name, rows in sheets_data:
        all_strings.append(sheet_name)
        for row in rows:
            for cell in row:
                if cell:
                    all_strings.append(str(cell))

    # 构建sharedStrings
    shared_strings_path = work_dir / "xl" / "sharedStrings.xml"
    shared_strings_path.write_text(build_shared_strings(all_strings), encoding='utf-8')

    # 更新workbook.xml
    update_workbook_xml(work_dir, [s[0] for s in sheets_data])

    # 更新workbook.xml.rels
    update_workbook_rels(work_dir, 4)

    # 更新[Content_Types].xml
    update_content_types(work_dir, 4)

    # 创建各sheet的XML文件
    for sheet_idx, (sheet_name, rows) in enumerate(sheets_data):
        sheet_path = work_dir / "xl" / "worksheets" / f"sheet{sheet_idx+1}.xml"

        # 第一个sheet使用已存在的sheet1.xml
        # 其他sheet需要创建新文件

        # 生成sheetData
        sheet_data_rows = []
        for row_idx, row in enumerate(rows):
            cells = []
            for col_idx, cell_value in enumerate(row):
                if cell_value:
                    val_idx = get_string_index(all_strings, str(cell_value))
                    cells.append(make_cell(row_idx+1, col_idx, val_idx, style=0))
                else:
                    col_letter = chr(65 + col_idx)
                    cells.append(f'    <c r="{col_letter}{row_idx+1}"/>')
            sheet_data_rows.append(f'  <row r="{row_idx+1}">\n{chr(10).join(cells)}\n  </row>')

        content = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView workbookViewId="0"/>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <sheetData>
{chr(10).join(sheet_data_rows)}
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''
        sheet_path.write_text(content, encoding='utf-8')

    # 打包并验证
    output_path = OUTPUT_DIR / "需求分析_平台三阶段赋能.xlsx"
    pack_and_validate(work_dir, output_path)
    print(f"Created: {output_path}")

# ========== 文件2: 交互流程_平台三阶段赋能.xlsx ==========
def create_interaction_flow():
    work_dir = Path("/tmp/xlsx_work_交互流程")
    copy_template(work_dir)

    sheets_data = [
        ("课程整体流程", [
            ("模块", "时长", "核心内容", "教学方式", "产出"),
            ("模块一：平台化创新", "60分钟", "平台定位与核心能力构建", "案例+研讨", "平台定位画布"),
            ("模块二：生态化协同", "60分钟", "生态伙伴吸引与协同机制", "工具+练习", "吸引力评估"),
            ("模块三：生态化演进", "45分钟", "三阶段路径与里程碑", "规划工作坊", "三阶段规划"),
            ("综合练习", "30分钟", "企业现状诊断与方案设计", "行动学习", "落地方案"),
        ]),
        ("各模块交互设计", [
            ("模块", "时间点", "交互形式", "教师活动", "学生活动", "物料准备"),
            ("模块一", "0-10min", "破冰导入", "提问'什么是平台思维'", "自由发言", "PPT/白板"),
            ("模块一", "10-30min", "案例分析", "阿里云案例讲解", "思考+记录", "案例手册"),
            ("模块一", "30-50min", "工具练习", "平台定位画布讲解", "小组练习定位", "画布模板"),
            ("模块一", "50-60min", "汇报讨论", "引导各组汇报", "5min汇报+点评", "反馈表"),
            ("模块二", "0-10min", "回顾导入", "回顾模块一要点", "复述要点", "PPT"),
            ("模块二", "10-35min", "案例+工具", "美团/华为案例+评估工具", "练习评估", "评估模板"),
            ("模块二", "35-50min", "小组研讨", "讨论伙伴流失原因", "分析原因", "研讨指引"),
            ("模块二", "50-60min", "方法总结", "总结吸引力提升方法", "记录要点", "方法清单"),
            ("模块三", "0-15min", "理论讲解", "三阶段演进规律", "听讲+提问", "PPT/图表"),
            ("模块三", "15-35min", "工作坊", "三阶段规划练习", "制定本企业规划", "规划模板"),
            ("模块三", "35-45min", "评审优化", "各组互评方案", "提供反馈", "评审表"),
        ]),
        ("练习/讨论时间分配", [
            ("活动类型", "时长(min)", "占总时长比例", "说明"),
            ("案例分析", "60", "26%", "阿里云、华为云、美团案例深入分析"),
            ("工具练习", "45", "20%", "平台定位画布、吸引力评估、协同度量练习"),
            ("小组研讨", "40", "17%", "痛点讨论、原因分析、对策探讨"),
            ("工作坊", "35", "15%", "三阶段规划制定与评审"),
            ("汇报点评", "30", "13%", "各组方案汇报与教师点评"),
            ("破冰导入", "20", "9%", "提问互动、激活已有经验"),
        ]),
        ("评估节点", [
            ("评估节点", "评估方式", "评估内容", "评分标准", "权重"),
            ("课前测试", "问卷", "平台基础知识", "正确率>=80%", "10%"),
            ("课堂参与", "观察", "发言、讨论、练习表现", "积极发言>=3次", "20%"),
            ("工具掌握", "作品评分", "定位画布、评估模板完成质量", "完整性+准确性", "30%"),
            ("方案设计", "作品评分", "三阶段规划方案质量", "可行性+创新性+逻辑性", "30%"),
            ("课后反馈", "问卷", "课程满意度、学习收获感知", "满意度>=4.5", "10%"),
        ]),
    ]

    # 收集所有字符串
    all_strings = []
    for sheet_name, rows in sheets_data:
        all_strings.append(sheet_name)
        for row in rows:
            for cell in row:
                if cell:
                    all_strings.append(str(cell))

    # 构建sharedStrings
    shared_strings_path = work_dir / "xl" / "sharedStrings.xml"
    shared_strings_path.write_text(build_shared_strings(all_strings), encoding='utf-8')

    # 更新workbook.xml
    update_workbook_xml(work_dir, [s[0] for s in sheets_data])

    # 更新workbook.xml.rels
    update_workbook_rels(work_dir, 4)

    # 更新[Content_Types].xml
    update_content_types(work_dir, 4)

    # 创建各sheet的XML文件
    for sheet_idx, (sheet_name, rows) in enumerate(sheets_data):
        sheet_path = work_dir / "xl" / "worksheets" / f"sheet{sheet_idx+1}.xml"

        # 第一个sheet使用已存在的sheet1.xml
        # 其他sheet需要创建新文件

        # 生成sheetData
        sheet_data_rows = []
        for row_idx, row in enumerate(rows):
            cells = []
            for col_idx, cell_value in enumerate(row):
                if cell_value:
                    val_idx = get_string_index(all_strings, str(cell_value))
                    cells.append(make_cell(row_idx+1, col_idx, val_idx, style=0))
                else:
                    col_letter = chr(65 + col_idx)
                    cells.append(f'    <c r="{col_letter}{row_idx+1}"/>')
            sheet_data_rows.append(f'  <row r="{row_idx+1}">\n{chr(10).join(cells)}\n  </row>')

        content = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView workbookViewId="0"/>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <sheetData>
{chr(10).join(sheet_data_rows)}
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''
        sheet_path.write_text(content, encoding='utf-8')

    # 打包并验证
    output_path = OUTPUT_DIR / "交互流程_平台三阶段赋能.xlsx"
    pack_and_validate(work_dir, output_path)
    print(f"Created: {output_path}")

# ========== 文件3: 产出模板库_平台三阶段赋能.xlsx ==========
def create_template_library():
    work_dir = Path("/tmp/xlsx_work_产出模板库")
    copy_template(work_dir)

    sheets_data = [
        ("平台定位画布模板", [
            ("平台定位画布", "", "", "", ""),
            ("维度", "填写内容", "示例", "检查点", "优先级"),
            ("平台名称", "", "XX工业互联网平台", "名称清晰易记", "★"),
            ("目标用户", "", "制造业中小企业", "用户画像清晰", "★★★"),
            ("核心痛点", "", "设备维护成本高、信息孤岛", "痛点具体可量化", "★★★"),
            ("核心价值", "", "降低运维成本30%、提升生产效率", "价值主张清晰", "★★★"),
            ("关键功能", "", "设备监控、预测维护、数据分析", "功能聚焦核心价值", "★★"),
            ("差异化优势", "", "AI预测算法领先、行业深度Know-how", "与竞品明确区分", "★★"),
            ("商业模式", "", "SaaS订阅+增值服务", "收入来源清晰", "★★"),
            ("战略定位", "", "细分行业第一平台", "愿景引领发展", "★★★"),
        ]),
        ("生态伙伴吸引力评估模板", [
            ("生态伙伴吸引力评估表", "", "", "", ""),
            ("评估维度", "当前状态(1-5)", "期望状态(1-5)", "差距", "改进措施"),
            ("流量赋能", "2", "5", "=D3-C3", "提供精准客户引流"),
            ("技术赋能", "2", "4", "=D4-C4", "开放API与技术共享"),
            ("品牌赋能", "3", "5", "=D5-C5", "联合品牌推广"),
            ("资金赋能", "1", "4", "=D6-C6", "设立生态发展基金"),
            ("服务赋能", "2", "4", "=D7-C7", "提供培训与支持"),
            ("商机赋能", "2", "5", "=D8-C8", "建立商机共享机制"),
            ("总分", "=SUM(C3:C8)", "=SUM(D3:D8)", "=SUM(C9:D9)", ""),
            ("评估结论", "", "", "", ""),
        ]),
        ("协同价值度量模板", [
            ("协同价值度量表", "", "", "", ""),
            ("协同指标", "度量方法", "当前值", "目标值", "改进举措"),
            ("GMV协同规模", "统计跨伙伴交易额", "500万", "2000万", "建立跨伙伴推荐机制"),
            ("客户留存率", "计算生态内客户留存", "70%", "90%", "提供一站式服务"),
            ("伙伴活跃度", "月活跃伙伴数/总伙伴数", "40%", "70%", "定期运营活动"),
            ("创新项目数", "生态联合创新项目数", "3个", "10个", "建立创新激励机制"),
            ("协同成本节约", "流程优化节约成本", "100万", "300万", "共享基础设施"),
            ("整体协同价值", "综合评分(1-10)", "5", "8", "全面提升协同深度"),
        ]),
        ("三阶段规划模板", [
            ("三阶段规划模板", "", "", "", ""),
            ("阶段", "时间跨度", "核心目标", "关键举措", "里程碑"),
            ("第一阶段：平台化创新", "0-6个月", "完成平台定位与核心功能上线", "1.市场调研2.产品设计3.MVP开发4.首批用户验证", "平台正式发布、首批100家用户"),
            ("第二阶段：生态化协同", "6-18个月", "构建生态伙伴体系、实现协同效应", "1.伙伴招募2.赋能体系建立3.协同机制设计4.数据打通", "伙伴数量达50家、协同GMV破千万"),
            ("第三阶段：生态化演进", "18-36个月", "实现生态繁荣、引领行业标准", "1.生态健康度提升2.创新能力开放3.行业标准制定4.国际化拓展", "成为行业标杆、生态GMV破亿"),
            ("总体投入预算", "3年总投入", "3000万", "", ""),
            ("预期回报", "第3年生态GMV", "1亿+", "", ""),
        ]),
    ]

    # 收集所有字符串
    all_strings = []
    for sheet_name, rows in sheets_data:
        all_strings.append(sheet_name)
        for row in rows:
            for cell in row:
                if cell:
                    all_strings.append(str(cell))

    # 构建sharedStrings
    shared_strings_path = work_dir / "xl" / "sharedStrings.xml"
    shared_strings_path.write_text(build_shared_strings(all_strings), encoding='utf-8')

    # 更新workbook.xml
    update_workbook_xml(work_dir, [s[0] for s in sheets_data])

    # 更新workbook.xml.rels
    update_workbook_rels(work_dir, 4)

    # 更新[Content_Types].xml
    update_content_types(work_dir, 4)

    # 创建各sheet的XML文件
    for sheet_idx, (sheet_name, rows) in enumerate(sheets_data):
        sheet_path = work_dir / "xl" / "worksheets" / f"sheet{sheet_idx+1}.xml"

        # 第一个sheet使用已存在的sheet1.xml
        # 其他sheet需要创建新文件

        # 生成sheetData
        sheet_data_rows = []
        for row_idx, row in enumerate(rows):
            cells = []
            for col_idx, cell_value in enumerate(row):
                if cell_value:
                    # 检查是否是公式（以=开头）
                    if isinstance(cell_value, str) and cell_value.startswith('='):
                        cells.append(make_formula_cell(row_idx+1, col_idx, cell_value[1:], style=6))
                    elif isinstance(cell_value, str) and cell_value.startswith('=SUM'):
                        cells.append(make_formula_cell(row_idx+1, col_idx, cell_value[1:], style=6))
                    else:
                        val_idx = get_string_index(all_strings, str(cell_value))
                        cells.append(make_cell(row_idx+1, col_idx, val_idx, style=0))
                else:
                    col_letter = chr(65 + col_idx)
                    cells.append(f'    <c r="{col_letter}{row_idx+1}"/>')
            sheet_data_rows.append(f'  <row r="{row_idx+1}">\n{chr(10).join(cells)}\n  </row>')

        content = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView workbookViewId="0"/>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <sheetData>
{chr(10).join(sheet_data_rows)}
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''
        sheet_path.write_text(content, encoding='utf-8')

    # 打包并验证
    output_path = OUTPUT_DIR / "产出模板库_平台三阶段赋能.xlsx"
    pack_and_validate(work_dir, output_path)
    print(f"Created: {output_path}")

# ========== 文件4: 案例分析_平台三阶段赋能.xlsx ==========
def create_case_study():
    work_dir = Path("/tmp/xlsx_work_案例分析")
    copy_template(work_dir)

    sheets_data = [
        ("阿里云案例数据", [
            ("属性", "数据/描述", "", "", ""),
            ("企业名称", "阿里云", "", "", ""),
            ("行业", "云计算/基础设施", "", "", ""),
            ("平台规模", "年营收超千亿，付费用户超300万", "", "", ""),
            ("发展阶段", "第三阶段：生态化演进", "", "", ""),
            ("核心数据", "指标", "数值", "说明", ""),
            ("", "算力规模", "500PFLOPS+", "亚洲第一", ""),
            ("", "生态伙伴数", "10000+", "覆盖全行业", ""),
            ("", "年营收", "1000亿+", "连续多年高速增长", ""),
            ("", "客户留存率", "95%", "极高粘性", ""),
            ("平台定位", "做数字化基础设施，赋能企业数智化转型", "", "", ""),
            ("生态策略", "技术赋能+商机共享+品牌背书", "", "", ""),
            ("三阶段特征", "阶段一(2010前):电商云化;阶段二(2010-2017):全面开放;阶段三(2017至今):生态繁荣", "", "", ""),
        ]),
        ("华为云案例数据", [
            ("属性", "数据/描述", "", "", ""),
            ("企业名称", "华为云", "", "", ""),
            ("行业", "云计算/ICT", "", "", ""),
            ("平台规模", "年营收超400亿，付费用户超200万", "", "", ""),
            ("发展阶段", "第二阶段：生态化协同", "", "", ""),
            ("核心数据", "指标", "数值", "说明", ""),
            ("", "计算资源", "200PFLOPS+", "国内前三", ""),
            ("", "生态伙伴数", "5000+", "主要ISV伙伴", ""),
            ("", "年营收", "400亿+", "快速增长中", ""),
            ("", "客户留存率", "90%", "较高粘性", ""),
            ("平台定位", "做智能世界黑土地，赋能千行百业数字化转型", "", "", ""),
            ("生态策略", "技术共享+开放架构+联合创新", "", "", ""),
            ("三阶段特征", "阶段一:内部IT云化;阶段二(2017-今):全面对外开放;阶段三:生态共建中", "", "", ""),
        ]),
        ("美团案例数据", [
            ("属性", "数据/描述", "", "", ""),
            ("企业名称", "美团", "", "", ""),
            ("行业", "本地生活服务平台", "", "", ""),
            ("平台规模", "年营收超1000亿，活跃商家超900万", "", "", ""),
            ("发展阶段", "第三阶段：生态化演进", "", "", ""),
            ("核心数据", "指标", "数值", "说明", ""),
            ("", "日均订单", "5000万+", "外卖订单", ""),
            ("", "活跃商家", "900万+", "餐饮、休娱等", ""),
            ("", "年营收", "1000亿+", "本地生活龙头", ""),
            ("", "骑手数量", "700万+", "灵活就业", ""),
            ("平台定位", "做本地生活服务基础设施，美好生活一键直达", "", "", ""),
            ("生态策略", "流量赋能+配送网络+数字化工具+金融支持", "", "", ""),
            ("三阶段特征", "阶段一:团购聚合;阶段二:外卖平台化;阶段三:万物到家生态", "", "", ""),
        ]),
        ("字节跳动案例数据", [
            ("属性", "数据/描述", "", "", ""),
            ("企业名称", "字节跳动", "", "", ""),
            ("行业", "内容平台/算法科技", "", "", ""),
            ("平台规模", "年营收超8000亿，全球用户超15亿", "", "", ""),
            ("发展阶段", "第三阶段：生态化演进", "", "", ""),
            ("核心数据", "指标", "数值", "说明", ""),
            ("", "日活用户", "15亿+", "抖音/TikTok等", ""),
            ("", "内容创作者", "2000万+", "活跃创作者", ""),
            ("", "年营收", "8000亿+", "全球前三", ""),
            ("", "广告收入", "占比约70%", "核心收入来源", ""),
            ("平台定位", "做全球创作与交流平台，激发无限创意", "", "", ""),
            ("生态策略", "算法推荐+内容分成+创作者赋能+商业化闭环", "", "", ""),
            ("三阶段特征", "阶段一:今日头条;阶段二:抖音爆发;阶段三:全球化生态扩张", "", "", ""),
        ]),
    ]

    # 收集所有字符串
    all_strings = []
    for sheet_name, rows in sheets_data:
        all_strings.append(sheet_name)
        for row in rows:
            for cell in row:
                if cell:
                    all_strings.append(str(cell))

    # 构建sharedStrings
    shared_strings_path = work_dir / "xl" / "sharedStrings.xml"
    shared_strings_path.write_text(build_shared_strings(all_strings), encoding='utf-8')

    # 更新workbook.xml
    update_workbook_xml(work_dir, [s[0] for s in sheets_data])

    # 更新workbook.xml.rels
    update_workbook_rels(work_dir, 4)

    # 更新[Content_Types].xml
    update_content_types(work_dir, 4)

    # 创建各sheet的XML文件
    for sheet_idx, (sheet_name, rows) in enumerate(sheets_data):
        sheet_path = work_dir / "xl" / "worksheets" / f"sheet{sheet_idx+1}.xml"

        # 第一个sheet使用已存在的sheet1.xml
        # 其他sheet需要创建新文件

        # 生成sheetData
        sheet_data_rows = []
        for row_idx, row in enumerate(rows):
            cells = []
            for col_idx, cell_value in enumerate(row):
                if cell_value:
                    val_idx = get_string_index(all_strings, str(cell_value))
                    cells.append(make_cell(row_idx+1, col_idx, val_idx, style=0))
                else:
                    col_letter = chr(65 + col_idx)
                    cells.append(f'    <c r="{col_letter}{row_idx+1}"/>')
            sheet_data_rows.append(f'  <row r="{row_idx+1}">\n{chr(10).join(cells)}\n  </row>')

        content = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView workbookViewId="0"/>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <sheetData>
{chr(10).join(sheet_data_rows)}
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''
        sheet_path.write_text(content, encoding='utf-8')

    # 打包并验证
    output_path = OUTPUT_DIR / "案例分析_平台三阶段赋能.xlsx"
    pack_and_validate(work_dir, output_path)
    print(f"Created: {output_path}")

if __name__ == "__main__":
    print("Starting to generate Excel files...")
    create_needs_analysis()
    create_interaction_flow()
    create_template_library()
    create_case_study()
    print("\nAll Excel files generated successfully!")
