#!/usr/bin/env python3
"""
Generate 21 Forms Excel Workbooks for AI时代经验传承工作坊
Creates both blank and example-filled versions
"""

import sys
import os

# Add skill scripts to path
SKILL_DIR = r"C:\Users\Administrator\.claude\skills\Excel表格处理"
sys.path.insert(0, f"{SKILL_DIR}/scripts")

import zipfile
import shutil
from copy import deepcopy

# Template minimal xlsx
TEMPLATE_DIR = f"{SKILL_DIR}/templates/minimal_xlsx"
OUTPUT_DIR_FORM = r"D:\新课开发\经验萃取\手册\完整手册\完整课程包\06_全流程工具表单"

def copy_template():
    """Copy minimal xlsx template to working directory"""
    work_dir = "/tmp/xlsx_forms_work"
    if os.path.exists(work_dir):
        shutil.rmtree(work_dir)
    shutil.copytree(TEMPLATE_DIR, work_dir)
    return work_dir

def create_shared_strings(strings):
    """Create sharedStrings.xml content"""
    unique = list(dict.fromkeys(strings))  # Preserve order, remove duplicates
    items = []
    for s in unique:
        escaped = s.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;')
        items.append(f'<si><t>{escaped}</t></si>')
    count = len(strings)
    unique_count = len(unique)
    return f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="{count}" uniqueCount="{unique_count}">
    {''.join(items)}
</sst>'''

def get_string_index(strings, text):
    """Get index of string in list (preserving order, removing duplicates)"""
    unique = list(dict.fromkeys(strings))
    try:
        return unique.index(text)
    except ValueError:
        return 0

def create_sheet_xml(sheet_name, content_rows, strings):
    """Create a worksheet XML with the given content"""
    rows_xml = []
    for row in content_rows:
        row_num = row['row']
        cells = []
        for cell in row.get('cells', []):
            addr = cell['addr']
            style = cell.get('style', '0')
            cell_type = cell.get('type', '')
            value = cell.get('value', '')
            formula = cell.get('formula', '')

            cell_xml = f'<c r="{addr}"'
            if style and style != '0':
                cell_xml += f' s="{style}"'
            if cell_type == 'string':
                cell_xml += ' t="s"'
            elif cell_type == 'inlineStr':
                cell_xml += ' t="inlineStr"'

            cell_xml += '>'

            if formula:
                cell_xml += f'<f>{formula}</f><v></v>'
            elif cell_type == 'inlineStr':
                escaped = str(value).replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;')
                cell_xml += f'<is><t>{escaped}</t></is>'
            else:
                cell_xml += f'<v>{value}</v>'

            cell_xml += '</c>'
            cells.append(cell_xml)

        rows_xml.append(f'''<row r="{row_num}" ht="{row.get('height', '15')}" customHeight="1">
            {''.join(cells)}
        </row>''')

    return f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
           xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
    <sheetViews>
        <sheetView workbookViewId="0"/>
    </sheetViews>
    <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25"/>
    <cols>
        <col min="1" max="1" width="5" customWidth="1"/>
        <col min="2" max="2" width="25" customWidth="1"/>
        <col min="3" max="3" width="40" customWidth="1"/>
        <col min="4" max="4" width="20" customWidth="1"/>
        <col min="5" max="5" width="20" customWidth="1"/>
    </cols>
    <sheetData>
        {''.join(rows_xml)}
    </sheetData>
    <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

def build_form_0_blank():
    """Form 0: 课前准备检查表"""
    strings = ['课前准备检查表', '使用说明', '工作坊正式开始前，逐项确认。全部勾选后，代表你的课题已经具备开始条件。未完成项需在第一天上午前补齐。',
               '课题基本信息', '我准备开发的手册课题（初步想法，可以在定位阶段调整）', '材料准备', '准备项', '是否就绪', '备注',
               '确定了课题相关的三类人群（角色A/B/C各有具体人选）', '□ 是  □ 否', '角色A人选已知情并愿意参与访谈', '人名：_______',
               '角色B人选已知情并愿意参与访谈', '角色C人选已知情并愿意参与访谈', '与课题相关的现有操作规程（如有，带来或存在手机里）', '□ 有，已带 □ 无',
               '与课题相关的现有制度文件（如有）', '与课题相关的现有培训课件（如有）', '与课题相关的现有表单样本（如有）',
               '录音设备可用（手机录音功能已测试）', '语音转文字工具已准备好（微信输入法/讯飞语记/剪映等均可）', '用哪个：_____',
               '心理准备', '这次工作坊结束时，我希望带走的东西是', '我预判这个课题在开发过程中最可能遇到的困难是', '空白', '填写区域']

    content = [
        {'row': 1, 'height': '25', 'cells': [{'addr': 'A1', 'value': '课前准备检查表', 'style': '4'}, {'addr': 'C1', 'value': '使用说明', 'style': '4'}]},
        {'row': 2, 'height': '30', 'cells': [{'addr': 'C2', 'type': 'inlineStr', 'value': '工作坊正式开始前，逐项确认。全部勾选后，代表你的课题已经具备开始条件。未完成项需在第一天上午前补齐。'}]},
        {'row': 3, 'height': '18', 'cells': [{'addr': 'A3', 'value': '课题基本信息', 'style': '4'}]},
        {'row': 4, 'height': '15', 'cells': [{'addr': 'A4', 'value': '我准备开发的手册课题（初步想法，可以在定位阶段调整）'}]},
        {'row': 5, 'height': '30', 'cells': [{'addr': 'A5', 'type': 'inlineStr', 'value': ''}, {'addr': 'B5', 'type': 'inlineStr', 'value': '空白填写区域'}]},
        {'row': 6, 'height': '18', 'cells': [{'addr': 'A6', 'value': '材料准备', 'style': '4'}]},
        {'row': 7, 'height': '15', 'cells': [{'addr': 'A7', 'value': '准备项', 'style': '4'}, {'addr': 'B7', 'value': '是否就绪', 'style': '4'}, {'addr': 'C7', 'value': '备注', 'style': '4'}]},
        {'row': 8, 'height': '15', 'cells': [{'addr': 'A8', 'value': '确定了课题相关的三类人群（角色A/B/C各有具体人选）'}, {'addr': 'B8', 'value': '□ 是  □ 否'}]},
        {'row': 9, 'height': '15', 'cells': [{'addr': 'A9', 'value': '角色A人选已知情并愿意参与访谈'}, {'addr': 'B9', 'value': '□ 是  □ 否'}, {'addr': 'C9', 'value': '人名：_______'}]},
        {'row': 10, 'height': '15', 'cells': [{'addr': 'A10', 'value': '角色B人选已知情并愿意参与访谈'}, {'addr': 'B10', 'value': '□ 是  □ 否'}, {'addr': 'C10', 'value': '人名：_______'}]},
        {'row': 11, 'height': '15', 'cells': [{'addr': 'A11', 'value': '角色C人选已知情并愿意参与访谈'}, {'addr': 'B11', 'value': '□ 是  □ 否'}, {'addr': 'C11', 'value': '人名：_______'}]},
        {'row': 12, 'height': '15', 'cells': [{'addr': 'A12', 'value': '与课题相关的现有操作规程（如有，带来或存在手机里）'}, {'addr': 'B12', 'value': '□ 有，已带 □ 无'}]},
        {'row': 13, 'height': '15', 'cells': [{'addr': 'A13', 'value': '与课题相关的现有制度文件（如有）'}, {'addr': 'B13', 'value': '□ 有，已带 □ 无'}]},
        {'row': 14, 'height': '15', 'cells': [{'addr': 'A14', 'value': '与课题相关的现有培训课件（如有）'}, {'addr': 'B14', 'value': '□ 有，已带 □ 无'}]},
        {'row': 15, 'height': '15', 'cells': [{'addr': 'A15', 'value': '与课题相关的现有表单样本（如有）'}, {'addr': 'B15', 'value': '□ 有，已带 □ 无'}]},
        {'row': 16, 'height': '15', 'cells': [{'addr': 'A16', 'value': '录音设备可用（手机录音功能已测试）'}, {'addr': 'B16', 'value': '□ 是  □ 否'}]},
        {'row': 17, 'height': '15', 'cells': [{'addr': 'A17', 'value': '语音转文字工具已准备好（微信输入法/讯飞语记/剪映等均可）'}, {'addr': 'B17', 'value': '□ 是  □ 否'}, {'addr': 'C17', 'value': '用哪个：_____'}]},
        {'row': 18, 'height': '18', 'cells': [{'addr': 'A18', 'value': '心理准备', 'style': '4'}]},
        {'row': 19, 'height': '15', 'cells': [{'addr': 'A19', 'value': '这次工作坊结束时，我希望带走的东西是'}]},
        {'row': 20, 'height': '30', 'cells': [{'addr': 'A20', 'type': 'inlineStr', 'value': ''}]},
        {'row': 21, 'height': '15', 'cells': [{'addr': 'A21', 'value': '我预判这个课题在开发过程中最可能遇到的困难是'}]},
        {'row': 22, 'height': '30', 'cells': [{'addr': 'A22', 'type': 'inlineStr', 'value': ''}]},
    ]
    return create_sheet_xml('表0-课前准备检查表', content, strings)

def build_workbook_xml(sheets_info):
    """Create workbook.xml with sheet definitions"""
    sheet_entries = []
    for i, (name, sheet_id, rid) in enumerate(sheets_info, 1):
        escaped_name = name.replace('&', '&amp;')
        sheet_entries.append(f'<sheet name="{escaped_name}" sheetId="{sheet_id}" r:id="{rid}"/>')
    return f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
          xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
    <sheets>
        {''.join(sheet_entries)}
    </sheets>
    <calcPr calcId="0"/>
</workbook>'''

def build_workbook_rels(sheets_info):
    """Create workbook.xml.rels"""
    rels = [
        '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>',
        '<Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>',
        '<Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml"/>',
    ]
    for i in range(4, len(sheets_info) + 4):
        rels.append(f'<Relationship Id="rId{i}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet{i-3}.xml"/>')
    return f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
    {''.join(rels)}
</Relationships>'''

def build_content_types(sheets_count):
    """Create [Content_Types].xml"""
    overrides = [
        '<Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>',
        '<Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>',
        '<Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/>',
    ]
    for i in range(1, sheets_count + 1):
        overrides.append(f'<Override PartName="/xl/worksheets/sheet{i}.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>')
    return f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
    <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
    <Default Extension="xml" ContentType="application/xml"/>
    {''.join(overrides)}
</Types>'''

def create_form0_content_example():
    """Build example content for Form 0"""
    strings = ['课前准备检查表示例', '示例项目：来料验货与异常处理操作手册',
               '课题基本信息', '仓库收发员来料验货操作手册——重点是怎么验货、发现质量或数量问题怎么处理，让新人能独立做完一次标准来料验收。',
               '材料准备', '准备项', '是否就绪', '备注', '确定了课题相关的三类人群', '□ 是', '角色A人选', '□ 是', '人名：张伟（入职2个月）',
               '角色B人选', '□ 是', '人名：李建国（仓库主管，11年经验）', '角色C人选', '□ 是', '人名：陈志远（物流部经理）',
               '与课题相关的现有操作规程', '□ 有，已带', '《仓储作业管理规程》第三章', '与课题相关的现有制度文件', '□ 有，已带', '《来料检验控制程序》（质量部提供版本，2022年版）',
               '与课题相关的现有培训课件', '□ 有，已带', '入职培训PPT第5页"收货流程"（只有流程图，无细节）',
               '与课题相关的现有表单样本', '□ 有，已带', '《来料验收记录表》《异常来料处理单》',
               '录音设备可用', '□ 是', '语音转文字工具已准备好', '□ 是', '用哪个：剪映APP',
               '心理准备', '这次工作坊结束时，我希望带走的东西是', '一本新人拿到手就能用的验货操作手册——不用依赖老员工带，自己能知道每步怎么做、做错了怎么处理。',
               '我预判这个课题在开发过程中最可能遇到的困难是', '李师傅（角色B）的经验很多，但很多是"凭感觉"，怎么把感觉变成可描述的动作，这步可能需要花时间追问。']
    return strings

def create_form1_content_blank():
    """Form 1: 手册类型判断"""
    strings = ['手册类型判断', '使用说明', '第一天上午，三类人群小组讨论，用这张表辅助确认本次课题应该开发哪类手册。',
               '课题描述', '一句话说清楚：什么岗位、什么方面的经验', '核心判断问题', '判断问题', '你的答案',
               '这本手册的主要目标读者是谁？', '读者拿到这本手册，最主要的使用场景是什么？',
               '读者使用时，主要需要"知道怎么做"还是"知道是什么/有什么"？',
               '这本手册主要帮助读者"自己操作"还是"带别人操作"？',
               '读者是在做一件具体任务时翻，还是入职初期整体了解岗位时翻？',
               '类型特征对照', '手册类型', '核心特征', '主要受益人', '使用时机',
               '操作手册', '一步一步告诉你怎么做对一件事', '执行者本人', '需要做这件事的时候翻',
               '带教手册', '告诉带教人怎么教新人，分阶段推进', '带教人', '带新人的每个阶段翻',
               '应知应会手册', '帮新人快速建立对岗位的整体认知', '新入职员工', '入职初期，全面了解时翻',
               '判断结论', '本次课题应该开发的手册类型', '□ 操作手册　□ 带教手册　□ 应知应会手册',
               '判断理由', '三类人群确认签字', '角色A（读者代表）', '角色B（经验代表）', '角色C（管理者代表）']

    content = [
        {'row': 1, 'height': '25', 'cells': [{'addr': 'A1', 'value': '手册类型判断', 'style': '4'}, {'addr': 'C1', 'value': '使用说明', 'style': '4'}]},
        {'row': 2, 'height': '30', 'cells': [{'addr': 'C2', 'type': 'inlineStr', 'value': '第一天上午，三类人群小组讨论，用这张表辅助确认本次课题应该开发哪类手册。逐项回答后，综合判断选择类型。'}]},
        {'row': 3, 'height': '18', 'cells': [{'addr': 'A3', 'value': '课题描述', 'style': '4'}]},
        {'row': 4, 'height': '15', 'cells': [{'addr': 'A4', 'value': '一句话说清楚：什么岗位、什么方面的经验'}]},
        {'row': 5, 'height': '30', 'cells': [{'addr': 'A5', 'type': 'inlineStr', 'value': ''}]},
        {'row': 6, 'height': '18', 'cells': [{'addr': 'A6', 'value': '核心判断问题', 'style': '4'}]},
        {'row': 7, 'height': '15', 'cells': [{'addr': 'A7', 'value': '判断问题', 'style': '4'}, {'addr': 'B7', 'value': '你的答案', 'style': '4'}]},
        {'row': 8, 'height': '15', 'cells': [{'addr': 'A8', 'value': '这本手册的主要目标读者是谁？'}, {'addr': 'B8', 'type': 'inlineStr', 'value': ''}]},
        {'row': 9, 'height': '15', 'cells': [{'addr': 'A9', 'value': '读者拿到这本手册，最主要的使用场景是什么？'}, {'addr': 'B9', 'type': 'inlineStr', 'value': ''}]},
        {'row': 10, 'height': '15', 'cells': [{'addr': 'A10', 'value': '读者使用时，主要需要"知道怎么做"还是"知道是什么/有什么"？'}, {'addr': 'B10', 'type': 'inlineStr', 'value': ''}]},
        {'row': 11, 'height': '15', 'cells': [{'addr': 'A11', 'value': '这本手册主要帮助读者"自己操作"还是"带别人操作"？'}, {'addr': 'B11', 'type': 'inlineStr', 'value': ''}]},
        {'row': 12, 'height': '15', 'cells': [{'addr': 'A12', 'value': '读者是在做一件具体任务时翻，还是入职初期整体了解岗位时翻？'}, {'addr': 'B12', 'type': 'inlineStr', 'value': ''}]},
        {'row': 13, 'height': '18', 'cells': [{'addr': 'A13', 'value': '类型特征对照', 'style': '4'}]},
        {'row': 14, 'height': '15', 'cells': [{'addr': 'A14', 'value': '手册类型', 'style': '4'}, {'addr': 'B14', 'value': '核心特征', 'style': '4'}, {'addr': 'C14', 'value': '主要受益人', 'style': '4'}, {'addr': 'D14', 'value': '使用时机', 'style': '4'}]},
        {'row': 15, 'height': '15', 'cells': [{'addr': 'A15', 'value': '操作手册'}, {'addr': 'B15', 'value': '一步一步告诉你怎么做对一件事'}, {'addr': 'C15', 'value': '执行者本人'}, {'addr': 'D15', 'value': '需要做这件事的时候翻'}]},
        {'row': 16, 'height': '15', 'cells': [{'addr': 'A16', 'value': '带教手册'}, {'addr': 'B16', 'value': '告诉带教人怎么教新人，分阶段推进'}, {'addr': 'C16', 'value': '带教人'}, {'addr': 'D16', 'value': '带新人的每个阶段翻'}]},
        {'row': 17, 'height': '15', 'cells': [{'addr': 'A17', 'value': '应知应会手册'}, {'addr': 'B17', 'value': '帮新人快速建立对岗位的整体认知'}, {'addr': 'C17', 'value': '新入职员工'}, {'addr': 'D17', 'value': '入职初期，全面了解时翻'}]},
        {'row': 18, 'height': '18', 'cells': [{'addr': 'A18', 'value': '判断结论', 'style': '4'}]},
        {'row': 19, 'height': '15', 'cells': [{'addr': 'A19', 'value': '本次课题应该开发的手册类型：□ 操作手册　□ 带教手册　□ 应知应会手册'}]},
        {'row': 20, 'height': '15', 'cells': [{'addr': 'A20', 'value': '判断理由（一两句话说明）'}]},
        {'row': 21, 'height': '30', 'cells': [{'addr': 'A21', 'type': 'inlineStr', 'value': ''}]},
        {'row': 22, 'height': '18', 'cells': [{'addr': 'A22', 'value': '三类人群确认签字', 'style': '4'}]},
        {'row': 23, 'height': '20', 'cells': [{'addr': 'A23', 'value': '角色A（读者代表）'}, {'addr': 'B23', 'value': '角色B（经验代表）'}, {'addr': 'C23', 'value': '角色C（管理者代表）'}]},
        {'row': 24, 'height': '20', 'cells': [{'addr': 'A24', 'type': 'inlineStr', 'value': ''}, {'addr': 'B24', 'type': 'inlineStr', 'value': ''}, {'addr': 'C24', 'type': 'inlineStr', 'value': ''}]},
    ]
    return create_sheet_xml('表1-手册类型判断', content, strings)

def create_form1_content_example():
    """Build example content for Form 1"""
    strings = ['手册类型判断表示例', '示例项目：来料验货与异常处理操作手册',
               '课题描述', '仓库收发员的来料验货——从供应商送货到仓，如何完成数量和质量验收，以及发现问题后如何处理。',
               '核心判断问题', '这本手册的主要目标读者是谁？', '新入职仓库收发员（工作3个月内，没有验货经验）',
               '读者拿到这本手册，最主要的使用场景是什么？', '供应商来送货时，照着手册步骤验货；发现异常时，翻手册知道该怎么处理',
               '读者主要需要"知道怎么做"还是"知道是什么/有什么"？', '知道怎么做——具体操作步骤和判断标准',
               '这本手册主要帮助"自己操作"还是"带别人操作"？', '自己操作——新人自己做验货这件事',
               '读者是在做一件具体任务时翻，还是入职初期整体了解岗位时翻？', '做任务时翻——有车来送货了，打开手册按步骤做',
               '判断结论', '本次课题应该开发的手册类型', '√ 操作手册（示例选择）',
               '判断理由', '读者需要的是"步骤指引"，在有一批货到来的具体场景下照着做，而不是了解仓库工作的整体认知，也不是带别人做。',
               '三类人群确认', '张伟（A）√　李建国（B）√　陈志远（C）√']
    return strings

def create_blank_workbook(filename, sheets_content):
    """Create a complete blank form workbook"""
    work_dir = "/tmp/xlsx_blank_work"
    if os.path.exists(work_dir):
        shutil.rmtree(work_dir)
    shutil.copytree(TEMPLATE_DIR, work_dir)

    num_sheets = len(sheets_content)

    # Write sharedStrings
    all_strings = []
    for sheet_data in sheets_content:
        all_strings.extend(sheet_data['strings'])
    shared_strings_xml = create_shared_strings(all_strings)
    with open(f"{work_dir}/xl/sharedStrings.xml", 'w', encoding='utf-8') as f:
        f.write(shared_strings_xml)

    # Write sheets
    for i, sheet_data in enumerate(sheets_content, 1):
        sheet_xml = sheet_data['xml']
        with open(f"{work_dir}/xl/worksheets/sheet{i}.xml", 'w', encoding='utf-8') as f:
            f.write(sheet_xml)

    # Write workbook.xml
    sheets_info = [(f"表{i}-表单{i}", i+1, f"rId{i+4}") for i in range(num_sheets)]
    # For first sheet, use rId1
    sheets_info[0] = (sheets_content[0]['name'], 1, "rId1")
    workbook_xml = build_workbook_xml(sheets_info)
    with open(f"{work_dir}/xl/workbook.xml", 'w', encoding='utf-8') as f:
        f.write(workbook_xml)

    # Write workbook.xml.rels
    workbook_rels = build_workbook_rels(sheets_content)
    with open(f"{work_dir}/xl/_rels/workbook.xml.rels", 'w', encoding='utf-8') as f:
        f.write(workbook_rels)

    # Write [Content_Types].xml
    content_types = build_content_types(num_sheets)
    with open(f"{work_dir}/[Content_Types].xml", 'w', encoding='utf-8') as f:
        f.write(content_types)

    # Pack
    output_path = os.path.join(OUTPUT_DIR_FORM, filename)
    shutil.make_archive('/tmp/xlsx_blank_output', 'zip', work_dir)
    shutil.move('/tmp/xlsx_blank_output.zip', output_path)
    print(f"Created: {output_path}")
    return output_path

def main():
    print("Creating Excel form workbooks...")

    # Create Form 0 and Form 1 as initial test
    form0_xml = build_form_0_blank()
    form0_strings = []  # Simplified

    form1_xml = create_form1_content_blank()

    sheets = [
        {'name': '表0-课前准备检查表', 'xml': form0_xml, 'strings': []},
        {'name': '表1-手册类型判断', 'xml': form1_xml, 'strings': []},
    ]

    # Create first test workbook
    create_blank_workbook("test_form.xlsx", sheets)

    print("Done!")

if __name__ == "__main__":
    main()
