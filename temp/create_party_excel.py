# -*- coding: utf-8 -*-
"""
Create Party Course Tool Excel Templates using XML approach
"""
import os
import shutil
import subprocess

TEMPLATE_DIR = r"C:\Users\Administrator\AppData\Local\Temp\party-card-template"
OUTPUT_DIR = r"D:/新课开发/党业融合/经营者讲党课/完整课程包/008-工具集锦"

def copy_template():
    """Copy template to work directory"""
    work_dir = r"C:\Users\Administrator\AppData\Local\Temp\party-work"
    if os.path.exists(work_dir):
        shutil.rmtree(work_dir)
    shutil.copytree(TEMPLATE_DIR, work_dir)
    return work_dir

def build_shared_strings(strings):
    """Build sharedStrings.xml content"""
    items = []
    for s in strings:
        escaped = s.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;')
        items.append(f'  <si><t>{escaped}</t></si>')
    count = len(strings)
    return f'<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="{count}" uniqueCount="{count}">\n' + '\n'.join(items) + '\n</sst>'

def update_workbook(work_dir, sheets):
    """Update workbook.xml with sheet names"""
    sheet_xml = []
    for i, name in enumerate(sheets):
        sheet_id = i + 1
        rid = f"rId{sheet_id}"
        sheet_xml.append(f'    <sheet name="{name}" sheetId="{sheet_id}" r:id="{rid}"/>')

    content = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <fileVersion appName="xl" lastEdited="7" lowestEdited="7"/>
  <workbookPr defaultThemeVersion="166925"/>
  <bookViews>
    <workbookView xWindow="0" yWindow="0" windowWidth="20140" windowHeight="10960"/>
  </bookViews>
  <sheets>
{chr(10).join(sheet_xml)}
  </sheets>
  <calcPr calcId="191029"/>
</workbook>'''

    with open(f"{work_dir}/xl/workbook.xml", 'w', encoding='utf-8') as f:
        f.write(content)

def update_workbook_rels(work_dir, num_sheets):
    """Update workbook.xml.rels with sheet relationships"""
    rels = [
        '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>',
        '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">',
        '  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>',
        '  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>',
        '  <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml"/>',
    ]

    for i in range(2, num_sheets + 1):
        rels.append(f'  <Relationship Id="rId{i + 2}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet{i}.xml"/>')

    rels.append('</Relationships>')

    with open(f"{work_dir}/xl/_rels/workbook.xml.rels", 'w', encoding='utf-8') as f:
        f.write('\n'.join(rels))

def update_content_types(work_dir, num_sheets):
    """Update [Content_Types].xml"""
    overrides = ['  <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>',
                 '  <Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>',
                 '  <Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/>']

    for i in range(1, num_sheets + 1):
        overrides.append(f'  <Override PartName="/xl/worksheets/sheet{i}.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>')

    content = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
''' + '\n'.join(overrides) + '\n</Types>'

    with open(f"{work_dir}/[Content_Types].xml", 'w', encoding='utf-8') as f:
        f.write(content)

def create_sheet_xml(title_row, data_rows, col_widths=None):
    """Create a worksheet XML with title row and data rows"""
    if col_widths is None:
        col_widths = [20, 40]

    cols_xml = []
    for i, w in enumerate(col_widths):
        col_num = i + 1
        cols_xml.append(f'  <col min="{col_num}" max="{col_num}" width="{w}" customWidth="1"/>')

    rows_xml = []

    # Title row (style 4 = bold header)
    cells = []
    for i, text in enumerate(title_row):
        col_letter = chr(65 + i)
        cells.append(f'    <c r="{col_letter}1" t="s" s="4"><v>{text}</v></c>')
    rows_xml.append(f'  <row r="1">\n' + '\n'.join(cells) + '\n  </row>')

    # Data rows
    for row_idx, row_data in enumerate(data_rows):
        r = row_idx + 2
        cells = []
        for col_idx, val in enumerate(row_data):
            col_letter = chr(65 + col_idx)
            if isinstance(val, dict):
                # Cell with style
                s = val.get('s', '0')
                t = val.get('t', 's')
                v = val.get('v', '')
                cells.append(f'    <c r="{col_letter}{r}" t="{t}" s="{s}"><v>{v}</v></c>')
            else:
                cells.append(f'    <c r="{col_letter}{r}" t="s"><v>{val}</v></c>')
        rows_xml.append(f'  <row r="{r}">\n' + '\n'.join(cells) + '\n  </row>')

    return f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView workbookViewId="0"/>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols>
{chr(10).join(cols_xml)}
  </cols>
  <sheetData>
{chr(10).join(rows_xml)}
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

def create_transformation_card_xlsx():
    """Create 党课素材转化卡.xlsx"""
    work_dir = copy_template()

    sheets = ["第一步-原始故事", "第二步-故事盘点", "第三步-主题锚定", "第四步-结构搭建", "第五步-语言转译"]
    num_sheets = len(sheets)

    update_workbook(work_dir, sheets)
    update_workbook_rels(work_dir, num_sheets)
    update_content_types(work_dir, num_sheets)

    # Build shared strings
    all_strings = [
        "要素", "内容", "填写提示",
        "何时（时间/背景）", "请描述故事发生的具体时间节点和背景环境",
        "何地（场景）", "请描述故事发生的具体场所和环境氛围",
        "何人（角色）", "请列出故事中涉及的主要人物及其角色",
        "何事（核心事件）", "请简要描述这件事的核心内容是什么",
        "维度", "内容", "引导问题",
        "冲突点", "", "这件事最大的矛盾和困难是什么？有哪些对立的观点或利益？",
        "抉择时刻", "", "当时面临哪几种选择？为什么难以抉择？",
        "最纠结的瞬间", "", "哪一刻让你真正睡不着觉？",
        "突破点", "", "最后是什么让事情有了转机？",
        "要素", "内容",
        "本次党课主题", "今天要讲的核心主题是什么？（来自组织部门要求或指定主题）",
        "故事给我的启发", "这个故事让你自己悟到了什么道理？",
        "与主题的连接", "这个道理和今天要讲的主题有什么真实的呼应？（如果连接生硬，宁可换故事）",
        "段落", "核心任务", "操作要点/填写内容",
        "开场悬念", "设置情境", "用一个画面、一个问题或一个困境开场，让听众立刻进入情境",
        "抉择还原", "制造代入感", "展示当时面临的几条路，让听众思考\"如果是我会怎么选\"",
        "转折揭示", "展现决策过程", "揭示你当时的真实选择，以及过程中的关键转折",
        "感悟自然生长", "引发思考", "通过故事的结局，让道理自然浮现，不直接说教",
        "回扣主题", "升华收尾", "用一句话回应开头，最快速度收尾",
        "整体时长", "预计时间", "预计讲完需要多少分钟？（建议3-5分钟精简版）",
        "维度", "转化要点", "具体描述",
        "画面感细节", "加入具体的场景描写", "哪个深夜？谁说了哪句话？当时的氛围？",
        "情绪细节", "表达当时的内心感受", "不只是讲事情的发展，而是表达当时的内心感受",
        "口语化调整", "转化成适合讲故事的语言", "把平时汇报用的数据、术语，转化成适合讲台表达的语言"
    ]

    with open(f"{work_dir}/xl/sharedStrings.xml", 'w', encoding='utf-8') as f:
        f.write(build_shared_strings(all_strings))

    # Create sheet 1 - 原始故事
    sheet1 = create_sheet_xml(
        ["要素", "内容", "填写提示"],
        [
            ["何时（时间/背景）", "请描述故事发生的具体时间节点和背景环境"],
            ["何地（场景）", "请描述故事发生的具体场所和环境氛围"],
            ["何人（角色）", "请列出故事中涉及的主要人物及其角色"],
            ["何事（核心事件）", "请简要描述这件事的核心内容是什么"],
        ],
        [18, 40, 40]
    )
    with open(f"{work_dir}/xl/worksheets/sheet1.xml", 'w', encoding='utf-8') as f:
        f.write(sheet1)

    # Create sheet 2 - 故事盘点
    sheet2 = create_sheet_xml(
        ["维度", "内容（请填写）", "引导问题"],
        [
            ["冲突点", "", "这件事最大的矛盾和困难是什么？有哪些对立的观点或利益？"],
            ["抉择时刻", "", "当时面临哪几种选择？为什么难以抉择？"],
            ["最纠结的瞬间", "", "哪一刻让你真正睡不着觉？"],
            ["突破点", "", "最后是什么让事情有了转机？"],
        ],
        [15, 40, 40]
    )
    with open(f"{work_dir}/xl/worksheets/sheet2.xml", 'w', encoding='utf-8') as f:
        f.write(sheet2)

    # Create sheet 3 - 主题锚定
    sheet3 = create_sheet_xml(
        ["要素", "内容（请填写）"],
        [
            ["本次党课主题", "今天要讲的核心主题是什么？（来自组织部门要求或指定主题）"],
            ["故事给我的启发", "这个故事让你自己悟到了什么道理？"],
            ["与主题的连接", "这个道理和今天要讲的主题有什么真实的呼应？（如果连接生硬，宁可换故事）"],
        ],
        [20, 50]
    )
    with open(f"{work_dir}/xl/worksheets/sheet3.xml", 'w', encoding='utf-8') as f:
        f.write(sheet3)

    # Create sheet 4 - 结构搭建
    sheet4 = create_sheet_xml(
        ["段落", "核心任务", "操作要点/填写内容"],
        [
            ["开场悬念", "设置情境", "用一个画面、一个问题或一个困境开场，让听众立刻进入情境"],
            ["抉择还原", "制造代入感", "展示当时面临的几条路，让听众思考\"如果是我会怎么选\""],
            ["转折揭示", "展现决策过程", "揭示你当时的真实选择，以及过程中的关键转折"],
            ["感悟自然生长", "引发思考", "通过故事的结局，让道理自然浮现，不直接说教"],
            ["回扣主题", "升华收尾", "用一句话回应开头，最快速度收尾"],
            ["整体时长", "预计时间", "预计讲完需要多少分钟？（建议3-5分钟精简版）"],
        ],
        [15, 15, 50]
    )
    with open(f"{work_dir}/xl/worksheets/sheet4.xml", 'w', encoding='utf-8') as f:
        f.write(sheet4)

    # Create sheet 5 - 语言转译
    sheet5 = create_sheet_xml(
        ["维度", "转化要点", "具体描述（请填写）"],
        [
            ["画面感细节", "加入具体的场景描写", "哪个深夜？谁说了哪句话？当时的氛围？"],
            ["情绪细节", "表达当时的内心感受", "不只是讲事情的发展，而是表达当时的内心感受"],
            ["口语化调整", "转化成适合讲故事的语言", "把平时汇报用的数据、术语，转化成适合讲台表达的语言"],
        ],
        [15, 20, 45]
    )
    with open(f"{work_dir}/xl/worksheets/sheet5.xml", 'w', encoding='utf-8') as f:
        f.write(sheet5)

    # Pack the xlsx
    output_path = os.path.join(OUTPUT_DIR, "党课素材转化卡.xlsx")
    pack_cmd = f'python3 "C:\\Users\\Administrator\\.claude\\skills\\Excel表格处理\\scripts\\xlsx_pack.py" {work_dir} {output_path}'
    os.system(pack_cmd)
    print(f"Created: {output_path}")

def create_strategic_reflection_xlsx():
    """Create 战略反思改善表.xlsx"""
    work_dir = copy_template()

    sheets = ["战略反思", "改善计划", "跟踪验证"]
    num_sheets = len(sheets)

    update_workbook(work_dir, sheets)
    update_workbook_rels(work_dir, num_sheets)
    update_content_types(work_dir, num_sheets)

    all_strings = [
        "维度", "反思内容", "具体描述",
        "业务层面", "在党课教学中，哪些业务目标没有达成？原因是什么？", "",
        "能力层面", "在登台表达方面，哪些能力还需要提升？", "",
        "心态层面", "在准备和讲授过程中，心态有哪些变化？", "",
        "团队层面", "在带领团队参与过程中，有哪些发现？", "",
        "阶段", "改善措施", "负责人", "完成时间", "备注",
        "短期（1周内）", "", "", "", "",
        "中期（1个月内）", "", "", "", "",
        "长期（3个月）", "", "", "", "",
        "验证维度", "验证方法", "验证结果", "验证时间", "备注",
        "内容质量", "学员反馈/考核成绩", "", "", "",
        "表达提升", "登台录像对比", "", "", "",
        "行为改变", "实际应用情况", "", "", "",
    ]

    with open(f"{work_dir}/xl/sharedStrings.xml", 'w', encoding='utf-8') as f:
        f.write(build_shared_strings(all_strings))

    # Sheet 1 - 战略反思
    sheet1 = create_sheet_xml(
        ["维度", "反思内容", "具体描述（请填写）"],
        [
            ["业务层面", "在党课教学中，哪些业务目标没有达成？原因是什么？", ""],
            ["能力层面", "在登台表达方面，哪些能力还需要提升？", ""],
            ["心态层面", "在准备和讲授过程中，心态有哪些变化？", ""],
            ["团队层面", "在带领团队参与过程中，有哪些发现？", ""],
        ],
        [15, 40, 40]
    )
    with open(f"{work_dir}/xl/worksheets/sheet1.xml", 'w', encoding='utf-8') as f:
        f.write(sheet1)

    # Sheet 2 - 改善计划
    sheet2 = create_sheet_xml(
        ["阶段", "改善措施", "负责人", "完成时间", "备注"],
        [
            ["短期（1周内）", "", "", "", ""],
            ["中期（1个月内）", "", "", "", ""],
            ["长期（3个月）", "", "", "", ""],
        ],
        [18, 40, 15, 15, 20]
    )
    with open(f"{work_dir}/xl/worksheets/sheet2.xml", 'w', encoding='utf-8') as f:
        f.write(sheet2)

    # Sheet 3 - 跟踪验证
    sheet3 = create_sheet_xml(
        ["验证维度", "验证方法", "验证结果", "验证时间", "备注"],
        [
            ["内容质量", "学员反馈/考核成绩", "", "", ""],
            ["表达提升", "登台录像对比", "", "", ""],
            ["行为改变", "实际应用情况", "", "", ""],
        ],
        [15, 25, 25, 15, 20]
    )
    with open(f"{work_dir}/xl/worksheets/sheet3.xml", 'w', encoding='utf-8') as f:
        f.write(sheet3)

    output_path = os.path.join(OUTPUT_DIR, "战略反思改善表.xlsx")
    pack_cmd = f'python3 "C:\\Users\\Administrator\\.claude\\skills\\Excel表格处理\\scripts\\xlsx_pack.py" {work_dir} {output_path}'
    os.system(pack_cmd)
    print(f"Created: {output_path}")

if __name__ == "__main__":
    create_transformation_card_xlsx()
    create_strategic_reflection_xlsx()
    print("All Excel templates created!")
