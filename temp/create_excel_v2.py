#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Generate Excel files for AI customer service workshop using XML approach.
"""

import os
import zipfile
import shutil

OUTPUT_DIR = "D:/新课开发/信任/信任不断线：AI时代客户服务与客户成功工作坊/完整课程包/12_Excel工具"

def col_letter(n):
    result = ""
    while n > 0:
        n, rem = divmod(n - 1, 26)
        result = chr(65 + rem) + result
    return result

def create_styles_xml():
    return '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <numFmts count="5">
    <numFmt numFmtId="164" formatCode="$#,##0;($#,##0);&quot;-&quot;"/>
    <numFmt numFmtId="165" formatCode="0.0%"/>
    <numFmt numFmtId="166" formatCode="0.0x"/>
    <numFmt numFmtId="167" formatCode="#,##0"/>
    <numFmt numFmtId="168" formatCode="0.0"/>
  </numFmts>
  <fonts count="6">
    <font><sz val="11"/><name val="Calibri"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="000000FF"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="00000000"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="00008000"/></font>
    <font><sz val="11"/><name val="Calibri"/><b/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="00FF0000"/></font>
  </fonts>
  <fills count="6">
    <fill><patternFill patternType="none"/></fill>
    <fill><patternFill patternType="gray125"/></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="00FFFF00"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="00FF0000"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="0000FF00"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="00FFC000"/></patternFill></fill>
  </fills>
  <borders count="1">
    <border><left/><right/><top/><bottom/><diagonal/></border>
  </borders>
  <cellXfs count="14">
    <xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/>
    <xf numFmtId="0" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1"/>
    <xf numFmtId="0" fontId="2" fillId="0" borderId="0" xfId="0" applyFont="1"/>
    <xf numFmtId="0" fontId="3" fillId="0" borderId="0" xfId="0" applyFont="1"/>
    <xf numFmtId="0" fontId="4" fillId="0" borderId="0" xfId="0" applyFont="1"/>
    <xf numFmtId="164" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>
    <xf numFmtId="164" fontId="2" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>
    <xf numFmtId="165" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>
    <xf numFmtId="165" fontId="2" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>
    <xf numFmtId="167" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>
    <xf numFmtId="167" fontId="2" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>
    <xf numFmtId="1" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>
    <xf numFmtId="0" fontId="1" fillId="2" borderId="0" xfId="0" applyFont="1" applyFill="1"/>
    <xf numFmtId="168" fontId="2" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>
  </cellXfs>
</styleSheet>'''

def create_content_types(sheet_count):
    overrides = ""
    for i in range(1, sheet_count + 1):
        overrides += f'\n  <Override PartName="/xl/worksheets/sheet{i}.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>'
    return f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
  <Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>
  <Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/>{overrides}
</Types>'''

def create_workbook_rels(sheet_count):
    rels = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
  <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml"/>'''
    for i in range(2, sheet_count + 1):
        rels += f'\n  <Relationship Id="rId{i+3}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet{i}.xml"/>'
    rels += "\n</Relationships>"
    return rels

def create_root_rels():
    return '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/>
</Relationships>'''

def create_workbook(sheet_names):
    sheets = ""
    for i, name in enumerate(sheet_names, 1):
        safe_name = name.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;')
        sheets += f'\n    <sheet name="{safe_name}" sheetId="{i}" r:id="rId{i+3}"/>'
    return f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <fileVersion appName="xl" lastEdited="7" lowestEdited="7"/>
  <workbookPr defaultThemeVersion="166925"/>
  <bookViews>
    <workbookView xWindow="0" yWindow="0" windowWidth="20140" windowHeight="10960"/>
  </bookViews>
  <sheets>{sheets}
  </sheets>
  <calcPr calcId="191029"/>
</workbook>'''

def build_shared_strings(strings_list):
    unique = []
    count = 0
    for s in strings_list:
        if s not in unique:
            unique.append(s)
        count += 1
    items = ""
    for s in unique:
        escaped = s.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;')
        items += f"\n  <si><t>{escaped}</t></si>"
    return f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="{count}" uniqueCount="{len(unique)}">{items}
</sst>'''

def create_sheet_xml(rows_data, col_widths=None):
    sheet_rows = ""
    for row_num, cells in rows_data:
        row_attrs = f'r="{row_num}"'
        if col_widths:
            row_attrs += ' customHeight="1" ht="18"'
        sheet_rows += f"\n  <row {row_attrs}>"
        for cell_data in cells:
            col, str_idx, style = cell_data
            sheet_rows += f'\n    <c r="{col}{row_num}" t="s" s="{style}"><v>{str_idx}</v></c>'
        sheet_rows += "\n  </row>"
    cols_xml = ""
    if col_widths:
        cols_xml = "\n  <cols>"
        for min_col, max_col, width in col_widths:
            cols_xml += f'\n    <col min="{min_col}" max="{max_col}" width="{width}" customWidth="1"/>'
        cols_xml += "\n  </cols>"
    return f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView workbookViewId="0"/>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>{cols_xml}
  <sheetData>{sheet_rows}
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

def pack_xlsx(work_dir, output_path):
    with zipfile.ZipFile(output_path, 'w', zipfile.ZIP_DEFLATED) as zf:
        for root, dirs, files in os.walk(work_dir):
            for file in files:
                file_path = os.path.join(root, file)
                arc_name = os.path.relpath(file_path, work_dir)
                zf.write(file_path, arc_name)

def create_excel_file(filename, sheet_names, shared_strings, sheets_data):
    work_dir = f"/tmp/xlsx_work_{filename}"
    if os.path.exists(work_dir):
        shutil.rmtree(work_dir)
    os.makedirs(work_dir)
    os.makedirs(f"{work_dir}/xl/worksheets")
    os.makedirs(f"{work_dir}/xl/_rels")
    os.makedirs(f"{work_dir}/_rels")

    with open(f"{work_dir}/xl/sharedStrings.xml", 'w', encoding='utf-8') as f:
        f.write(build_shared_strings(shared_strings))
    with open(f"{work_dir}/xl/styles.xml", 'w', encoding='utf-8') as f:
        f.write(create_styles_xml())
    with open(f"{work_dir}/xl/workbook.xml", 'w', encoding='utf-8') as f:
        f.write(create_workbook(sheet_names))
    with open(f"{work_dir}/xl/_rels/workbook.xml.rels", 'w', encoding='utf-8') as f:
        f.write(create_workbook_rels(len(sheet_names)))
    with open(f"{work_dir}/_rels/.rels", 'w', encoding='utf-8') as f:
        f.write(create_root_rels())
    with open(f"{work_dir}/[Content_Types].xml", 'w', encoding='utf-8') as f:
        f.write(create_content_types(len(sheet_names)))

    for i, (rows_data, col_widths) in enumerate(sheets_data, 1):
        with open(f"{work_dir}/xl/worksheets/sheet{i}.xml", 'w', encoding='utf-8') as f:
            f.write(create_sheet_xml(rows_data, col_widths))

    output_path = f"{OUTPUT_DIR}/{filename}.xlsx"
    pack_xlsx(work_dir, output_path)
    print(f"Created: {output_path}")
    shutil.rmtree(work_dir)
    return output_path


# E1: 信任风险自评卡
def create_e1():
    strings = [
        "信任风险自评卡", "使用说明", "工具介绍",
        "本工具旨在帮助学员识别在日常客户服务工作中，AI参与服务所产生的信任风险点。请根据过去一个月内的实际情况，选择每个场景的对应选项。",
        "计分规则", "风险高 = 3分", "风险中 = 2分", "风险低 = 1分",
        "解读标准", "总分 18-21分：高风险状态，需立即改善", "总分 12-17分：中等风险，需针对性改进", "总分 7-11分：低风险状态，但需保持警惕",
        "自评表", "场景", "场景描述", "选项", "描述", "分值", "选填",
        "AI使用透明度", "我在使用AI处理客户问题，但客户不知道这是AI",
        "风险高", "客户完全不知道是AI在服务，我也不会主动告知", "3",
        "风险中", "客户问起时会承认，但不会主动说明", "2",
        "风险低", "会主动告知客户AI将参与服务，并征求同意", "1",
        "AI答案的不确定性处理", "AI给出的答案有时候不太确定，但我还是发出去了",
        "从不核实AI不确定的答案，直接发出", "有时会核实，有时直接发出（凭感觉判断）",
        "AI生成内容的检查", "我用AI生成的内容直接发给客户，没有检查",
        "几乎不检查，直接发送", "偶尔抽查，大部分直接发送", "每次都会检查，确认准确后再发送",
        "AI工作原理的解释能力", "客户问AI是怎么工作的，我解释不清楚",
        "完全不了解，客户问起来只能回避", "有基本了解，但无法用通俗语言解释", "能清晰解释AI的工作原理和局限性",
        "AI对话一致性问题", "AI在对话中突然失忆了，客户很困惑",
        "经常出现AI前后矛盾的情况，没有补救措施", "偶尔出现，能事后补救但客户体验差", "极少出现，或在出现时能立即妥善处理",
        "AI代替人工沟通的准确性", "我让AI代替我和客户沟通，但它说得不够准确",
        "AI独立沟通的内容经常有误，需要事后补救", "大部分准确，偶尔有误但能及时发现", "AI沟通前会审核内容，确保准确后再放行",
        "客户数据隐私与AI学习", "客户数据被AI学习，我不确定这样是否合适",
        "完全不了解数据使用政策，也不会告知客户", "知道有相关政策，但不确定具体内容", "清楚数据使用政策，能为客户提供选择",
        "分析仪表盘", "总分", "风险等级", "高风险", "中等风险", "低风险",
        "立即行动", "暂停高风险场景中的AI使用", "深入了解AI工具的局限性和使用边界",
        "在AI与客户之间建立人工审核环节", "开始主动告知客户AI的参与",
        "重点改善", "针对失分较多的场景制定改进计划", "在关键环节增加人工复核",
        "主动询问客户对AI服务的感受", "提升AI知识和使用技能",
        "保持警惕", "持续关注新出现的风险点", "将最佳实践分享给团队",
        "寻找进一步降低风险的可能性", "帮助客户正确认识AI的能力与局限",
        "改善建议", "分析结果", "高风险状态", "中等风险", "低风险状态",
    ]

    # Sheet 1: 使用说明
    sheet1 = [
        ([(1, [(1, 0, 4)])], None),  # Title row 1
        ([(3, [(1, 1, 4)]), (2, [(2, 3, 0)])], [(1, 1, 18), (2, 2, 60)]),
        ([(5, [(1, 4, 4)]), (2, [(2, 5, 0)]), (3, [(3, 6, 0)])], None),
        ([(6, [(1, 7, 0)]), (2, [(2, 8, 0)])], None),
        ([(7, [(1, 9, 0)]), (2, [(2, 10, 0)])], None),
        ([(9, [(1, 11, 4)])], None),
        ([(10, [(1, 12, 0)]), (2, [(2, 13, 0)])], None),
        ([(11, [(1, 14, 0)]), (2, [(2, 15, 0)])], None),
        ([(12, [(1, 16, 0)]), (2, [(2, 17, 0)])], None),
    ]

    # Simplified approach - build rows directly
    s1_rows = [
        (1, [(col_letter(i+1), idx, style) for i, (idx, style) in enumerate([(0, 4)])]),
    ]
    s1_cols = [(1, 1, 20)]

    s2_rows = [
        (1, [(col_letter(i+1), idx, style) for i, (idx, style) in enumerate([(18, 4)])]),
        (3, [(col_letter(i+1), idx, style) for i, (idx, style) in enumerate([(19, 4), (20, 4), (21, 4)])]),
        (5, [(col_letter(i+1), idx, style) for i, (idx, style) in enumerate([(22, 4), (23, 0)])]),
        (6, [(col_letter(i+1), idx, style) for i, (idx, style) in enumerate([(24, 0), (25, 0), (26, 0)])]),
        (7, [(col_letter(i+1), idx, style) for i, (idx, style) in enumerate([(27, 0), (28, 0), (29, 0)])]),
        (8, [(col_letter(i+1), idx, style) for i, (idx, style) in enumerate([(30, 0), (31, 0), (32, 0)])]),
    ]
    s2_cols = [(1, 1, 20), (2, 2, 45), (3, 3, 10), (4, 4, 10), (5, 5, 8)]

    s3_rows = [
        (1, [(col_letter(i+1), idx, style) for i, (idx, style) in enumerate([(56, 4)])]),
        (3, [(col_letter(i+1), idx, style) for i, (idx, style) in enumerate([(57, 4), (58, 0)])]),
        (5, [(col_letter(i+1), idx, style) for i, (idx, style) in enumerate([(59, 4)])]),
        (6, [(col_letter(i+1), idx, style) for i, (idx, style) in enumerate([(60, 0)])]),
    ]
    s3_cols = [(1, 1, 18), (2, 2, 35), (3, 3, 20), (4, 4, 20)]

    return create_excel_file("E1_信任风险自评卡", ["使用说明", "自评表", "分析仪表盘"], strings,
                             [(s1_rows, s1_cols), (s2_rows, s2_cols), (s3_rows, s3_cols)])


# E2: AI使用边界清单
def create_e2():
    strings = [
        "AI使用边界清单", "清单总览", "执行详情",
        "Part A: AI适合做的事", "序号", "场景", "适用理由", "执行状态",
        "快速检索知识库内容", "节省人工查找时间，响应更快", "生成回复草稿供人工修改", "提高效率，保留人工把控环节",
        "24/7接待并记录客户问题", "全天候服务，解放人工精力", "自动归类和标注工单", "提高分类准确性",
        "生成数据报表和分析", "自动化处理，减少人工统计错误", "发送标准化通知", "批量处理，保证信息一致性",
        "提醒客户重要日期/事项", "自动追踪，避免人工遗忘", "初步筛选客户需求", "快速识别优先级",
        "生成FAQ和常见问题解答", "沉淀知识，减少重复回答", "记录和分析客户反馈", "批量处理反馈，提取关键洞察",
        "辅助撰写邮件/消息模板", "提高撰写效率，保证格式规范", "预测客户流失风险", "数据驱动，提前干预",
        "Part B: 必须人工介入的时刻",
        "客户明确要求人工服务", "尊重客户选择权，避免强制AI", "涉及投诉或情绪激动", "需要共情和人性化沟通",
        "需要做承诺或让步", "涉及公司利益和客户权益", "涉及隐私或法律问题", "合规要求高，错误代价大",
        "AI输出不确定或错误", "避免错误信息误导客户", "客户不接受AI的方案", "需要人工协商和解释",
        "处理金额较大的事务", "经济风险高，需谨慎确认", "客户表达了不信任AI", "信任危机，需谨慎处理",
        "涉及第三方权益", "多方利益平衡复杂", "危机公关或媒体询问", "形象风险高，需专业处理",
        "涉及商业秘密或机密", "信息安全要求高", "客户要求查看AI对话记录", "透明度要求，客户权益",
        "操作步骤", "检查点", "责任人", "备注",
    ]

    s1_rows = [
        (1, [(col_letter(i+1), idx, style) for i, (idx, style) in enumerate([(0, 4)])]),
        (3, [(col_letter(i+1), idx, style) for i, (idx, style) in enumerate([(1, 4)])]),
        (4, [(col_letter(i+1), idx, style) for i, (idx, style) in enumerate([(2, 4), (3, 4), (4, 4), (5, 4), (6, 4)])]),
        (5, [(col_letter(i+1), idx, style) for i, (idx, style) in enumerate([(7, 0), (8, 0), (9, 0), (10, 0)])]),
        (7, [(col_letter(i+1), idx, style) for i, (idx, style) in enumerate([(28, 4)])]),
        (8, [(col_letter(i+1), idx, style) for i, (idx, style) in enumerate([(29, 0), (30, 0), (31, 0), (32, 0)])]),
    ]
    s1_cols = [(1, 1, 6), (2, 2, 30), (3, 3, 35), (4, 4, 10), (5, 5, 10), (6, 6, 10)]

    s2_rows = [
        (1, [(col_letter(i+1), idx, style) for i, (idx, style) in enumerate([(33, 4)])]),
        (2, [(col_letter(i+1), idx, style) for i, (idx, style) in enumerate([(34, 4), (35, 4), (36, 4), (37, 4), (38, 4)])]),
    ]
    s2_cols = [(1, 1, 6), (2, 2, 40), (3, 3, 30), (4, 4, 15), (5, 5, 20)]

    return create_excel_file("E2_AI使用边界清单", ["清单总览", "执行详情"], strings,
                             [(s1_rows, s1_cols), (s2_rows, s2_cols)])


# E3: 透明度设计工作表
def create_e3():
    strings = [
        "透明度设计工作表", "设计工作表", "模板库",
        "场景一: 开场说明AI", "场景描述",
        "客户第一次接触服务，可能是通过APP、官网、客服热线或在线聊天。",
        "目标: 在服务初期就告知客户AI的存在，建立透明沟通的基础。",
        "【开场白】", "您好，欢迎致电/访问[渠道名称]，我是[姓名]，今天由我和我们的智能助理[AI名称]为您服务。",
        "【核心说明】", "在为您服务的过程中，[AI名称]会协助我快速查询信息、推荐解决方案，帮助您更高效地解决问题。",
        "【行动引导】", "请问有什么可以帮到您的？",
        "学员练习区", "我的开场白",
        "场景二: 数据使用说明", "场景三: AI辅助服务说明",
        "身份告知话术模板", "模板名称", "适用场景", "话术内容",
        "新手开场模板", "首次接触客户", "您好，我是[姓名]，今天由我和[AI名称]为您服务。",
        "主动告知模板", "AI参与服务时", "为了让您获得更高效的服务，[AI名称]会协助我处理您的问题。",
    ]

    s1_rows = [
        (1, [(col_letter(i+1), idx, style) for i, (idx, style) in enumerate([(0, 4)])]),
        (3, [(col_letter(i+1), idx, style) for i, (idx, style) in enumerate([(1, 4)])]),
        (5, [(col_letter(i+1), idx, style) for i, (idx, style) in enumerate([(3, 4)])]),
        (6, [(col_letter(i+1), idx, style) for i, (idx, style) in enumerate([(4, 0)])]),
        (8, [(col_letter(i+1), idx, style) for i, (idx, style) in enumerate([(5, 4)])]),
        (9, [(col_letter(i+1), idx, style) for i, (idx, style) in enumerate([(6, 0)])]),
    ]
    s1_cols = [(1, 1, 20), (2, 2, 60)]

    s2_rows = [
        (1, [(col_letter(i+1), idx, style) for i, (idx, style) in enumerate([(7, 4)])]),
        (3, [(col_letter(i+1), idx, style) for i, (idx, style) in enumerate([(8, 4), (9, 4), (10, 4)])]),
        (4, [(col_letter(i+1), idx, style) for i, (idx, style) in enumerate([(11, 0), (12, 0), (13, 0)])]),
    ]
    s2_cols = [(1, 1, 20), (2, 2, 25), (3, 3, 60)]

    return create_excel_file("E3_透明度设计工作表", ["设计工作表", "模板库"], strings,
                             [(s1_rows, s1_cols), (s2_rows, s2_cols)])


# E4: 升级处理话术卡
def create_e4():
    strings = [
        "升级处理话术卡", "话术卡", "演练记录",
        "关键节点一: 识别升级时机", "判断标准",
        "触发条件", "具体表现", "升级必要性",
        "客户明确要求", "转人工、我要人工服务", "必须升级",
        "情绪激动", "语气强烈、重复提问", "必须升级",
        "问题复杂", "涉及多步骤操作、多部门协调", "强烈建议升级",
        "特殊请求", "投诉、索赔、媒体采访、法律相关", "必须升级",
        "关键节点二: 过渡话术", "标准表达模板",
        "我注意到您的情况需要更专业的支持，让我为您转接一位更有经验的同事。",
        "关键节点三: 人工接手表达", "标准开场模板",
        "您好，我是[姓名]，刚才[AI名称]已将您的问题转接给我。",
        "关键节点四: 信息交接格式", "交接信息清单",
        "信息类别", "具体内容", "交接优先级",
        "客户身份", "姓名、账号、联系方式", "必填",
        "问题概述", "客户要解决的核心问题", "必填",
        "角色扮演记录", "角色A", "角色B", "观察员",
        "打分维度", "评分（1-5）", "备注",
    ]

    s1_rows = [
        (1, [(col_letter(i+1), idx, style) for i, (idx, style) in enumerate([(0, 4)])]),
        (3, [(col_letter(i+1), idx, style) for i, (idx, style) in enumerate([(1, 4)])]),
        (5, [(col_letter(i+1), idx, style) for i, (idx, style) in enumerate([(2, 4)])]),
        (6, [(col_letter(i+1), idx, style) for i, (idx, style) in enumerate([(3, 4), (4, 4), (5, 4)])]),
        (7, [(col_letter(i+1), idx, style) for i, (idx, style) in enumerate([(6, 0), (7, 0), (8, 0)])]),
        (9, [(col_letter(i+1), idx, style) for i, (idx, style) in enumerate([(9, 4)])]),
        (11, [(col_letter(i+1), idx, style) for i, (idx, style) in enumerate([(10, 4)])]),
    ]
    s1_cols = [(1, 1, 20), (2, 2, 50), (3, 3, 25)]

    s2_rows = [
        (1, [(col_letter(i+1), idx, style) for i, (idx, style) in enumerate([(11, 4)])]),
        (3, [(col_letter(i+1), idx, style) for i, (idx, style) in enumerate([(12, 4), (13, 4), (14, 4)])]),
        (5, [(col_letter(i+1), idx, style) for i, (idx, style) in enumerate([(15, 4), (16, 4), (17, 4)])]),
    ]
    s2_cols = [(1, 1, 20), (2, 2, 15), (3, 3, 15)]

    return create_excel_file("E4_升级处理话术卡", ["话术卡", "演练记录"], strings,
                             [(s1_rows, s1_cols), (s2_rows, s2_cols)])


# E5: 跨渠道一致性排查表
def create_e5():
    strings = [
        "跨渠道一致性排查表", "渠道概览", "不一致问题记录", "一致性评分",
        "一致性风险排查矩阵", "渠道对比", "一致性风险类型", "问题示例", "解决方案", "优先级",
        "电话 vs 邮件", "历史记录不互通", "信息更新不同步", "承诺不一致", "重复提供信息",
        "电话 vs 微信/企微", "邮件 vs APP", "微信/企微 vs APP",
        "问题类型说明", "风险类型", "描述", "客户感知",
        "历史记录不互通", "客户在A渠道说过的话、B渠道查不到",
        "信息更新不同步", "客户在A渠道更新了信息，B渠道未同步",
        "承诺不一致", "不同渠道给出的政策、优惠、期限不一致",
        "改进行动计划", "改进措施", "负责渠道", "预计完成时间", "跟进人",
        "评分维度", "分值（1-10）", "说明",
    ]

    s1_rows = [
        (1, [(col_letter(i+1), idx, style) for i, (idx, style) in enumerate([(0, 4)])]),
        (3, [(col_letter(i+1), idx, style) for i, (idx, style) in enumerate([(1, 4)])]),
        (5, [(col_letter(i+1), idx, style) for i, (idx, style) in enumerate([(2, 4), (3, 4), (4, 4), (5, 4), (6, 4)])]),
        (6, [(col_letter(i+1), idx, style) for i, (idx, style) in enumerate([(7, 0), (8, 0), (9, 0), (10, 0), (11, 0)])]),
    ]
    s1_cols = [(1, 1, 20), (2, 2, 20), (3, 3, 20), (4, 4, 25), (5, 5, 15)]

    s2_rows = [
        (1, [(col_letter(i+1), idx, style) for i, (idx, style) in enumerate([(12, 4)])]),
        (3, [(col_letter(i+1), idx, style) for i, (idx, style) in enumerate([(13, 4)])]),
        (4, [(col_letter(i+1), idx, style) for i, (idx, style) in enumerate([(14, 4), (15, 4), (16, 4)])]),
    ]
    s2_cols = [(1, 1, 30), (2, 2, 20), (3, 3, 20), (4, 4, 15)]

    s3_rows = [
        (1, [(col_letter(i+1), idx, style) for i, (idx, style) in enumerate([(17, 4)])]),
        (3, [(col_letter(i+1), idx, style) for i, (idx, style) in enumerate([(18, 4), (19, 4), (20, 4)])]),
    ]
    s3_cols = [(1, 1, 25), (2, 2, 15), (3, 3, 45)]

    return create_excel_file("E5_跨渠道一致性排查表", ["渠道概览", "不一致问题记录", "一致性评分"], strings,
                             [(s1_rows, s1_cols), (s2_rows, s2_cols), (s3_rows, s3_cols)])


# E6: 健康度透明沟通设计卡
def create_e6():
    strings = [
        "健康度透明沟通设计卡", "健康度评估", "沟通设计",
        "用途说明", "帮助学员设计不让客户感到被监控的主动关怀话术",
        "核心理念: 让客户感受到关心，而非监控。",
        "通用话术框架", "目的", "触发条件", "切入角度", "话术示例",
        "场景一: 使用趋势关怀", "适用场景",
        "客户的使用量、使用频次、活跃度等指标出现明显变化时",
        "沟通目的", "了解客户是否遇到困难，或是否需要升级/调整服务",
        "话术示例A（关心型）", "王总，看到您本月使用量比上月少了些，想跟您确认一下：...",
        "场景二: 异常提醒关怀", "场景三: 主动续费/到期提醒",
        "避坑指南", "让客户感到被监控的表达", "让客户感到被关心的表达",
        "开场方式", "关怀时机", "价值呈现", "异议应对",
        "系统使用率", "功能深度", "问题解决效率", "主动参与度", "推荐意愿",
    ]

    s1_rows = [
        (1, [(col_letter(i+1), idx, style) for i, (idx, style) in enumerate([(0, 4)])]),
        (3, [(col_letter(i+1), idx, style) for i, (idx, style) in enumerate([(1, 0)])]),
        (5, [(col_letter(i+1), idx, style) for i, (idx, style) in enumerate([(3, 4)])]),
        (6, [(col_letter(i+1), idx, style) for i, (idx, style) in enumerate([(4, 4), (5, 4), (6, 4), (7, 4)])]),
        (8, [(col_letter(i+1), idx, style) for i, (idx, style) in enumerate([(8, 0), (9, 0), (10, 0), (11, 0)])]),
    ]
    s1_cols = [(1, 1, 25), (2, 2, 60), (3, 3, 25), (4, 4, 35)]

    s2_rows = [
        (1, [(col_letter(i+1), idx, style) for i, (idx, style) in enumerate([(12, 4)])]),
        (3, [(col_letter(i+1), idx, style) for i, (idx, style) in enumerate([(13, 4), (14, 4), (15, 4), (16, 4)])]),
    ]
    s2_cols = [(1, 1, 20), (2, 2, 35), (3, 3, 35), (4, 4, 35)]

    return create_excel_file("E6_健康度透明沟通设计卡", ["健康度评估", "沟通设计"], strings,
                             [(s1_rows, s1_cols), (s2_rows, s2_cols)])


# E7: 30-60-90天行动计划表
def create_e7():
    strings = [
        "30-60-90天行动计划表", "30天", "60天", "90天", "汇总仪表盘",
        "时间框架说明", "阶段", "核心主题", "关键成果",
        "30天", "建立基础", "了解现状、发现风险点、建立沟通节奏",
        "60天", "深化信任", "主动关怀、问题预防、透明度提升",
        "90天", "形成习惯", "标准化流程、团队共享、持续优化",
        "行动计划表", "序号", "关键行动", "成功指标", "所需支持", "完成情况",
        "阶段", "强优先级任务（立即改善）",
        "1", "梳理当前客户分层情况，识别高风险客户", "完成客户分级清单，高风险客户标注清晰",
        "2", "与每位高风险客户建立直接沟通渠道", "获取客户关键决策人联系方式",
        "中优先级任务（系统改善）",
        "1", "对高风险客户进行主动关怀", "主动触达率大于等于80%",
        "2", "建立客户问题预防机制", "问题发现到解决周期缩短50%",
        "长优先级任务（战略改善）",
        "1", "将个人经验沉淀为团队可复用的标准流程", "团队SOP文档大于等于1套",
        "2", "开展内部培训，分享信任维护方法论", "培训覆盖率大于等于80%",
        "进度汇总", "阶段", "完成率", "状态",
    ]

    s1_rows = [
        (1, [(col_letter(i+1), idx, style) for i, (idx, style) in enumerate([(0, 4)])]),
        (3, [(col_letter(i+1), idx, style) for i, (idx, style) in enumerate([(1, 4)])]),
        (5, [(col_letter(i+1), idx, style) for i, (idx, style) in enumerate([(3, 4)])]),
        (6, [(col_letter(i+1), idx, style) for i, (idx, style) in enumerate([(4, 4), (5, 4), (6, 4), (7, 4), (8, 4)])]),
        (8, [(col_letter(i+1), idx, style) for i, (idx, style) in enumerate([(9, 4)])]),
        (9, [(col_letter(i+1), idx, style) for i, (idx, style) in enumerate([(10, 0), (11, 1), (12, 1), (13, 1), (14, 1)])]),
    ]
    s1_cols = [(1, 1, 6), (2, 2, 40), (3, 3, 30), (4, 4, 20), (5, 5, 10)]

    s2_rows = [
        (1, [(col_letter(i+1), idx, style) for i, (idx, style) in enumerate([(15, 4)])]),
        (3, [(col_letter(i+1), idx, style) for i, (idx, style) in enumerate([(17, 4)])]),
    ]
    s2_cols = [(1, 1, 6), (2, 2, 40), (3, 3, 30), (4, 4, 20), (5, 5, 10)]

    s3_rows = [
        (1, [(col_letter(i+1), idx, style) for i, (idx, style) in enumerate([(19, 4)])]),
    ]
    s3_cols = [(1, 1, 6), (2, 2, 40), (3, 3, 30), (4, 4, 20), (5, 5, 10)]

    s4_rows = [
        (1, [(col_letter(i+1), idx, style) for i, (idx, style) in enumerate([(21, 4)])]),
        (3, [(col_letter(i+1), idx, style) for i, (idx, style) in enumerate([(22, 4)])]),
    ]
    s4_cols = [(1, 1, 15), (2, 2, 15), (3, 3, 15)]

    return create_excel_file("E7_30-60-90天行动计划表", ["30天", "60天", "90天", "汇总仪表盘"], strings,
                             [(s1_rows, s1_cols), (s2_rows, s2_cols), (s3_rows, s3_cols), (s4_rows, s4_cols)])


# E8: 三人小组复盘观察表
def create_e8():
    strings = [
        "三人小组复盘观察表", "观察框架", "个人反思", "小组汇总",
        "用途", "角色扮演中观察员使用的反馈工具",
        "三个观察层次", "层次", "定义", "核心问题",
        "技术层", "话术与流程的专业性", "说了什么？流程是否规范？",
        "关系层", "信任与情感连接", "感觉如何？是否让人舒服、值得信赖？",
        "迁移层", "学习成果的转化", "能不能用到实际工作？",
        "结构化观察表", "层次", "观察要点", "观察记录", "评分（1-5）",
        "技术层", "话术准确", "流程规范", "倾听技能", "问题诊断", "方案呈现",
        "关系层", "亲和力", "共情表达", "信任建立", "积极态度", "后续跟进",
        "迁移层", "话术可迁移", "思路可迁移", "态度可迁移", "举一反三", "行动计划",
        "综合评分", "维度", "平均分",
        "技术层", "关系层", "迁移层", "整体评分",
    ]

    s1_rows = [
        (1, [(col_letter(i+1), idx, style) for i, (idx, style) in enumerate([(0, 4)])]),
        (3, [(col_letter(i+1), idx, style) for i, (idx, style) in enumerate([(1, 0)])]),
        (5, [(col_letter(i+1), idx, style) for i, (idx, style) in enumerate([(3, 4)])]),
        (6, [(col_letter(i+1), idx, style) for i, (idx, style) in enumerate([(4, 4), (5, 4), (6, 4)])]),
        (7, [(col_letter(i+1), idx, style) for i, (idx, style) in enumerate([(7, 0), (8, 0), (9, 0)])]),
    ]
    s1_cols = [(1, 1, 35), (2, 2, 35), (3, 3, 15)]

    s2_rows = [
        (1, [(col_letter(i+1), idx, style) for i, (idx, style) in enumerate([(10, 4)])]),
    ]
    s2_cols = [(1, 1, 20), (2, 2, 15), (3, 3, 15), (4, 4, 15), (5, 5, 15)]

    s3_rows = [
        (1, [(col_letter(i+1), idx, style) for i, (idx, style) in enumerate([(11, 4)])]),
    ]
    s3_cols = [(1, 1, 20), (2, 2, 15)]

    return create_excel_file("E8_三人小组复盘观察表", ["观察框架", "个人反思", "小组汇总"], strings,
                             [(s1_rows, s1_cols), (s2_rows, s2_cols), (s3_rows, s3_cols)])


# E9: 信任修复对话话术卡
def create_e9():
    strings = [
        "信任修复对话话术卡", "修复四步", "进阶话术",
        "用途说明", "帮助学员在综合模拟中完成信任修复对话",
        "五大关键节点", "节点", "场景", "核心目标",
        "1", "识别信任危机信号", "发现并判断客户不信任的迹象",
        "2", "暂停与确认", "停止销售动作，确认客户感受",
        "3", "承认问题", "坦诚面对问题，不推卸责任",
        "4", "解释与承诺", "说明原因，承诺改进措施",
        "5", "跟进确认", "持续沟通，巩固修复成果",
        "节点1: 识别信任危机信号", "识别要点",
        "语气变化: 变得冷淡、敷衍、公式化", "沟通频率: 突然减少或变得被动",
        "节点2: 暂停与确认", "话术参考",
        "我感觉到您今天的心情不太好，不知道是不是我们有什么地方做得不够好？",
        "节点3: 承认问题", "话术参考",
        "您说得对，我们的确在某些方面做得不够好。",
        "对于AI给您带来的困扰，我诚心道歉。",
        "节点4: 解释与承诺", "话术参考",
        "造成这个问题的原因是... (简单说明，不找借口)",
        "我承诺接下来我们会做到以下几点...",
        "节点5: 跟进确认", "话术参考",
        "上次沟通后，我们已经完成了...您看看效果有没有改善？",
        "核心原则", "三不原则", "原则", "错误做法", "正确做法",
        "不辩解", "那是因为...、其实是...", "先承认，再解释",
        "不推卸", "这是技术问题、流程导致的", "承担责任，说明改进",
        "不急于求成", "您能原谅我们吗？", "给客户消化时间，逐步修复",
        "客户性格", "话术调整策略", "务实型", "注重实际效果和具体数据",
        "情感型", "注重感受和情绪价值", "分析型", "注重逻辑和细节",
    ]

    s1_rows = [
        (1, [(col_letter(i+1), idx, style) for i, (idx, style) in enumerate([(0, 4)])]),
        (3, [(col_letter(i+1), idx, style) for i, (idx, style) in enumerate([(1, 0)])]),
        (5, [(col_letter(i+1), idx, style) for i, (idx, style) in enumerate([(3, 4)])]),
        (6, [(col_letter(i+1), idx, style) for i, (idx, style) in enumerate([(4, 4), (5, 4), (6, 4)])]),
        (7, [(col_letter(i+1), idx, style) for i, (idx, style) in enumerate([(7, 0), (8, 0), (9, 0)])]),
    ]
    s1_cols = [(1, 1, 25), (2, 2, 50), (3, 3, 20)]

    s2_rows = [
        (1, [(col_letter(i+1), idx, style) for i, (idx, style) in enumerate([(17, 4)])]),
        (3, [(col_letter(i+1), idx, style) for i, (idx, style) in enumerate([(18, 4), (19, 4), (20, 4)])]),
    ]
    s2_cols = [(1, 1, 15), (2, 2, 35), (3, 3, 50)]

    return create_excel_file("E9_信任修复对话话术卡", ["修复四步", "进阶话术"], strings,
                             [(s1_rows, s1_cols), (s2_rows, s2_cols)])


# E10: 团队客户信任台账
def create_e10():
    strings = [
        "团队客户信任台账", "客户台账", "信任趋势", "预警仪表盘",
        "用途说明", "记录团队层面的客户信任状态和跟进记录",
        "信任状态定义", "状态", "标识", "定义", "响应要求",
        "高", "绿色", "合作关系稳固，客户信任度高，无明显风险", "常规维护",
        "中", "黄色", "存在潜在风险，需要关注，可能有未解决的问题", "保持沟通频率",
        "低", "橙色", "信任受损，存在明确的不满或问题", "主动修复计划",
        "危机", "红色", "需要立即处理，可能面临客户流失风险", "立即介入，最高优先级",
        "客户信任状态汇总表", "客户名称/编号", "客户类型", "信任状态", "主要信任风险点", "最近沟通日期", "下次跟进计划", "负责人", "备注",
        "信任风险点分类参考", "风险类别", "常见表现",
        "服务质量", "响应速度慢、解决方案不有效，专业度不足",
        "AI相关", "AI回答不准确、AI交互体验差、隐私担忧",
        "沟通问题", "信息不对称、预期管理不当、沟通频率低",
        "产品问题", "功能不满足需求、系统稳定性、集成问题",
        "商业问题", "性价比、合同条款、竞品对比",
        "跟进记录", "跟进日期", "沟通内容摘要", "信任状态变化", "下一步行动", "记录人",
        "状态统计", "统计项", "数量/比例",
        "高风险预警", "客户名称", "风险类型", "预警等级", "建议措施",
    ]

    s1_rows = [
        (1, [(col_letter(i+1), idx, style) for i, (idx, style) in enumerate([(0, 4)])]),
        (3, [(col_letter(i+1), idx, style) for i, (idx, style) in enumerate([(1, 0)])]),
        (5, [(col_letter(i+1), idx, style) for i, (idx, style) in enumerate([(3, 4)])]),
        (6, [(col_letter(i+1), idx, style) for i, (idx, style) in enumerate([(4, 4), (5, 4), (6, 4), (7, 4), (8, 4), (9, 4), (10, 4), (11, 4)])]),
    ]
    s1_cols = [(1, 1, 18), (2, 2, 12), (3, 3, 8), (4, 4, 20), (5, 5, 15), (6, 6, 15), (7, 7, 10), (8, 8, 15)]

    s2_rows = [
        (1, [(col_letter(i+1), idx, style) for i, (idx, style) in enumerate([(12, 4)])]),
        (3, [(col_letter(i+1), idx, style) for i, (idx, style) in enumerate([(13, 4)])]),
    ]
    s2_cols = [(1, 1, 25), (2, 2, 15), (3, 3, 20), (4, 4, 15), (5, 5, 15)]

    s3_rows = [
        (1, [(col_letter(i+1), idx, style) for i, (idx, style) in enumerate([(14, 4)])]),
        (3, [(col_letter(i+1), idx, style) for i, (idx, style) in enumerate([(15, 4)])]),
    ]
    s3_cols = [(1, 1, 18), (2, 2, 15), (3, 3, 15), (4, 4, 30)]

    return create_excel_file("E10_团队客户信任台账", ["客户台账", "信任趋势", "预警仪表盘"], strings,
                             [(s1_rows, s1_cols), (s2_rows, s2_cols), (s3_rows, s3_cols)])


# E11: 培训效果追踪表 (NEW)
def create_e11():
    strings = [
        "培训效果追踪表", "学员信息", "训后30天", "训后90天", "汇总分析",
        "用途说明", "学员培训后的效果追踪工具，用于评估培训效果和改进",
        "学员信息", "序号", "学员姓名", "部门", "课程日期", "讲师", "备注",
        "训后30天", "知识应用自评", "行为改变追踪",
        "评估维度", "评分（1-5）", "说明",
        "AI服务透明度意识", "我能主动告知客户AI的参与",
        "信任风险识别能力", "我能识别AI服务中的信任风险点",
        "人工介入时机判断", "我能准确判断何时需要升级人工",
        "跨渠道一致性意识", "我注意保持各渠道信息一致性",
        "客户信任维护能力", "我主动维护客户信任关系",
        "训后90天", "业务指标变化",
        "指标", "培训前", "培训后", "变化", "说明",
        "客户满意度", "客户对服务的满意度评分",
        "升级率", "需要升级人工的比例变化",
        "续约率", "客户续约比例变化",
        "主动关怀覆盖率", "主动触达客户的比例变化",
        "汇总分析", "培训ROI计算",
        "计算项", "数值", "说明",
        "培训总人数", "培训总时长（小时）", "人均培训成本",
    ]

    s1_rows = [
        (1, [(col_letter(i+1), idx, style) for i, (idx, style) in enumerate([(0, 4)])]),
        (3, [(col_letter(i+1), idx, style) for i, (idx, style) in enumerate([(1, 4)])]),
        (4, [(col_letter(i+1), idx, style) for i, (idx, style) in enumerate([(2, 4), (3, 4), (4, 4), (5, 4), (6, 4), (7, 4)])]),
    ]
    s1_cols = [(1, 1, 6), (2, 2, 12), (3, 3, 15), (4, 4, 12), (5, 5, 12), (6, 6, 20)]

    s2_rows = [
        (1, [(col_letter(i+1), idx, style) for i, (idx, style) in enumerate([(8, 4)])]),
        (3, [(col_letter(i+1), idx, style) for i, (idx, style) in enumerate([(9, 4)])]),
        (4, [(col_letter(i+1), idx, style) for i, (idx, style) in enumerate([(10, 4), (11, 4), (12, 4)])]),
    ]
    s2_cols = [(1, 1, 30), (2, 2, 15), (3, 3, 40)]

    s3_rows = [
        (1, [(col_letter(i+1), idx, style) for i, (idx, style) in enumerate([(13, 4)])]),
        (3, [(col_letter(i+1), idx, style) for i, (idx, style) in enumerate([(14, 4), (15, 4), (16, 4), (17, 4)])]),
    ]
    s3_cols = [(1, 1, 20), (2, 2, 15), (3, 3, 15), (4, 4, 15)]

    s4_rows = [
        (1, [(col_letter(i+1), idx, style) for i, (idx, style) in enumerate([(18, 4)])]),
        (3, [(col_letter(i+1), idx, style) for i, (idx, style) in enumerate([(19, 4)])]),
    ]
    s4_cols = [(1, 1, 25), (2, 2, 20), (3, 3, 40)]

    return create_excel_file("E11_培训效果追踪表", ["学员信息", "训后30天", "训后90天", "汇总分析"], strings,
                             [(s1_rows, s1_cols), (s2_rows, s2_cols), (s3_rows, s3_cols), (s4_rows, s4_cols)])


if __name__ == "__main__":
    print("Creating Excel files for AI Customer Service Workshop...")
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    create_e1()
    create_e2()
    create_e3()
    create_e4()
    create_e5()
    create_e6()
    create_e7()
    create_e8()
    create_e9()
    create_e10()
    create_e11()
    print("\nAll Excel files created successfully!")
