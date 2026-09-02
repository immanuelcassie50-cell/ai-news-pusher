#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Build Excel forms for 正当防卫边界 course
"""

import os
import shutil
import zipfile

TEMPLATE_DIR = "D:/temp/xlsx_build"
OUTPUT_DIR = "D:/新课开发/法学/11-正当防卫边界：普通人如何合法自保/配套表单"

def copy_template(template_dir, work_dir):
    if os.path.exists(work_dir):
        shutil.rmtree(work_dir)
    shutil.copytree(template_dir, work_dir)

def create_sheet_xml(title, tab_color, headers, rows, col_widths):
    max_col = chr(ord('A') + len(headers) - 1)
    max_row = len(rows) + 2

    cols_xml = ""
    for i, width in enumerate(col_widths):
        col_min = i + 1
        col_max = i + 1
        cols_xml += '<col width="%d" customWidth="1" min="%d" max="%d"/>\n' % (width, col_min, col_max)

    sheet_data = ""
    sheet_data += '<row r="1" ht="34" customHeight="1">\n'
    sheet_data += '<c r="A1" s="1" t="inlineStr"><is><t>%s</t></is></c>\n' % title
    sheet_data += '</row>\n'

    header_cells = ""
    for i, h in enumerate(headers):
        col = chr(ord('A') + i)
        header_cells += '<c r="%s3" s="2" t="inlineStr"><is><t>%s</t></is></c>\n' % (col, h)
    sheet_data += '<row r="3" ht="28" customHeight="1">\n%s</row>\n' % header_cells

    for row_idx, row_data in enumerate(rows):
        row_num = row_idx + 4
        row_cells = ""
        for col_idx, cell_data in enumerate(row_data):
            col = chr(ord('A') + col_idx)
            style = "4" if col_idx == 0 else "5"
            row_cells += '<c r="%s%d" s="%s" t="inlineStr"><is><t>%s</t></is></c>\n' % (col, row_num, style, cell_data)
        sheet_data += '<row r="%d" ht="22" customHeight="1">\n%s</row>\n' % (row_num, row_cells)

    xml = '''<?xml version="1.0" encoding="utf-8"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <sheetPr>
    <tabColor rgb="%s"/>
    <outlinePr summaryBelow="1" summaryRight="1"/>
    <pageSetUpPr/>
  </sheetPr>
  <dimension ref="A1:%s%d"/>
  <sheetViews>
    <sheetView workbookViewId="0">
      <selection activeCell="A1" sqref="A1"/>
    </sheetView>
  </sheetViews>
  <sheetFormatPr baseColWidth="8" defaultRowHeight="15"/>
  <cols>
%s  </cols>
  <sheetData>
%s  </sheetData>
</worksheet>''' % (tab_color, max_col, max_row, cols_xml, sheet_data)
    return xml

def create_workbook_xml(sheet_names):
    sheets_xml = ""
    for i, name in enumerate(sheet_names):
        name_escaped = name.replace("&", "&amp;")
        sheets_xml += '    <sheet xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" name="%s" sheetId="%d" state="visible" r:id="rId%d"/>\n' % (name_escaped, i+1, i+4)

    return '''<?xml version="1.0" encoding="utf-8"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <workbookPr/>
  <workbookProtection/>
  <bookViews>
    <workbookView visibility="visible" minimized="0" showHorizontalScroll="1" showVerticalScroll="1" showSheetTabs="1" tabRatio="600" firstSheet="0" activeTab="0" autoFilterDateGrouping="1"/>
  </bookViews>
  <sheets>
%s  </sheets>
  <definedNames/>
  <calcPr calcId="124519" fullCalcOnLoad="1"/>
</workbook>''' % sheets_xml.strip()

def create_rels_xml(sheet_count):
    rels = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1"
    Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet"
    Target="worksheets/sheet1.xml"/>
  <Relationship Id="rId2"
    Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles"
    Target="styles.xml"/>
  <Relationship Id="rId3"
    Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings"
    Target="sharedStrings.xml"/>
'''
    for i in range(2, sheet_count + 1):
        rels += '''  <Relationship Id="rId%d"
    Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet"
    Target="worksheets/sheet%d.xml"/>
''' % (i+3, i)
    rels += "</Relationships>"
    return rels

def create_content_types_xml(sheet_count):
    overrides = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml"  ContentType="application/xml"/>
  <Override PartName="/xl/workbook.xml"
    ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
  <Override PartName="/xl/styles.xml"
    ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>
  <Override PartName="/xl/sharedStrings.xml"
    ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/>
'''
    for i in range(1, sheet_count + 1):
        overrides += '''  <Override PartName="/xl/worksheets/sheet%d.xml"
    ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
''' % i
    overrides += "</Types>"
    return overrides

def pack_xlsx(work_dir, output_path):
    with zipfile.ZipFile(output_path, 'w', zipfile.ZIP_DEFLATED) as zf:
        for root, dirs, files in os.walk(work_dir):
            for file in files:
                file_path = os.path.join(root, file)
                arc_name = os.path.relpath(file_path, work_dir)
                zf.write(file_path, arc_name)

# Empty form sheets
SHEETS = [
    {
        "name": "F1_正当防卫构成要件自检",
        "tab_color": "001B4F9B",
        "headers": ["构成要件", "法条依据", "要件解释", "本案情况", "是否符合"],
        "col_widths": [18, 22, 35, 30, 12],
        "rows": [
            ["起因条件", "《刑法》第20条第1款", "必须存在不法侵害行为", "", ""],
            ["时间条件", "《刑法》第20条第1款", "侵害正在进行（紧迫性）", "", ""],
            ["主观条件", "《刑法》第20条第1款", "具有防卫意图（保护合法权益）", "", ""],
            ["对象条件", "《刑法》第20条第1款", "必须针对侵害人本人", "", ""],
            ["限度条件", "《刑法》第20条第2款", "不超过必要限度造成重大损害", "", ""],
        ]
    },
    {
        "name": "F2_防卫限度判断",
        "tab_color": "002E75B6",
        "headers": ["判断标准", "具体情形", "典型案例", "本案自评", "备注"],
        "col_widths": [18, 28, 25, 18, 15],
        "rows": [
            ["基本适应", "防卫手段与侵害手段基本相适应", "于欢案（2018）", "", ""],
            ["特殊正当防卫", "针对行凶、杀人、抢劫等严重暴力犯罪", "昆山龙哥案（2018）", "", ""],
            ["明显超过必要限度", "显著轻伤害以上即为过当", "超过必要限度的典型表现", "", ""],
            ["重大损害", "造成重伤、死亡或重大财产损失", "判断重大的一般标准", "", ""],
            ["防卫过当", "过当+应负刑事责任但应减轻或免除处罚", "《刑法》第20条第2款", "", ""],
        ]
    },
    {
        "name": "F3_冲突升级预警",
        "tab_color": "00C55A11",
        "headers": ["层面", "预警信号", "识别要点", "应对建议", "本案观察"],
        "col_widths": [14, 22, 28, 24, 14],
        "rows": [
            ["言语层面", "威胁、恐吓、挑衅性语言", "具体到杀、伤等暴力词汇", "避免回应，保持距离", ""],
            ["肢体层面", "推搡、逼近、挥拳架势", "身体重心前移、拳头紧握", "后退+报警或逃跑", ""],
            ["工具层面", "持械、拾取周围物品", "刀、棍、酒瓶、砖头等", "立即远离并求助", ""],
            ["环境层面", "封闭空间、深夜无人区", "出口被堵、光线昏暗", "尽量不进入此类场所", ""],
        ]
    },
    {
        "name": "F4_三秒判断法训练",
        "tab_color": "00375623",
        "headers": ["问题", "判断标准", "思考要点", "本案答案", "训练记录"],
        "col_widths": [22, 25, 30, 14, 12],
        "rows": [
            ["问题一：有没有在打我？", "是否遭受实际的不法侵害", "排除已经结束或尚未开始的侵害", "", ""],
            ["问题二：现在打完了吗？", "侵害是否还在进行中", "根据客观行为和环境判断", "", ""],
            ["问题三：打死他有必要吗？", "防卫手段是否明显超过必要限度", "综合当时情境全面判断", "", ""],
        ]
    },
    {
        "name": "F5_证据保全清单",
        "tab_color": "00006B6B",
        "headers": ["证据类型", "证据状态", "获取方式", "保存行动", "完成情况"],
        "col_widths": [16, 20, 22, 22, 12],
        "rows": [
            ["现场视频/录音", "是否有现成监控或手机录像", "立即用手机录像", "第一时间固定", ""],
            ["伤痕照片", "受伤部位是否拍照留存", "自己或他人拍摄", "多角度、多距离", ""],
            ["证人信息", "现场是否有第三方目击者", "记录姓名和联系方式", "主动联系并获取证言", ""],
            ["物证", "现场是否有遗留物（凶器等）", "不要触碰，标记位置", "标记位置并报警", ""],
            ["报警记录", "110报警通话记录", "拨打110录音", "保持通话完整", ""],
            ["就医记录", "医院诊断证明、病历", "及时就医并保留所有单据", "全部复印留存", ""],
        ]
    },
    {
        "name": "F6_报警陈述记录",
        "tab_color": "00666699",
        "headers": ["时间节点", "陈述内容要点", "关键细节", "核对打勾", "补充说明"],
        "col_widths": [14, 30, 28, 12, 16],
        "rows": [
            ["事件前", "事发地点的环境描述", "具体位置、有无监控", "", ""],
            ["事件中", "侵害行为的开始和经过", "对方动作、使用的工具", "", ""],
            ["事件中", "自己的防卫行为及原因", "详细描述身体接触", "", ""],
            ["事件后", "侵害停止后的情形", "对方状态、自己的伤情", "", ""],
            ["报警时", "拨打110的时间和对话", "不要夸大或遗漏", "", ""],
        ]
    },
    {
        "name": "F7_伤情鉴定跟踪",
        "tab_color": "009C59C5",
        "headers": ["鉴定阶段", "具体事项", "截止时间", "实际完成日期", "结果/备注"],
        "col_widths": [16, 28, 14, 16, 18],
        "rows": [
            ["伤情初查", "自行就医，保留所有诊断材料", "事发后24小时内", "", ""],
            ["法医鉴定", "向公安机关申请伤情鉴定", "伤情稳定后（通常一周内）", "", ""],
            ["补充鉴定", "对鉴定结果有异议可申请", "收到鉴定书3日内申请", "", ""],
            ["重新鉴定", "不服二次鉴定可申请省级鉴定", "按程序规定时限", "", ""],
        ]
    },
    {
        "name": "F8_案例分析记录",
        "tab_color": "007B3A3A",
        "headers": ["案例要素", "具体内容", "本案对应", "分析结论", "教训总结"],
        "col_widths": [16, 24, 18, 20, 18],
        "rows": [
            ["案件名称", "（填写具体案例）", "", "", ""],
            ["基本案情", "案件的起因、经过、结果", "", "", ""],
            ["防卫意图", "行为人是否具有防卫目的", "", "", ""],
            ["侵害强度", "不法侵害的手段和严重程度", "", "", ""],
            ["防卫手段", "防卫人采取的具体防卫措施", "", "", ""],
            ["损害后果", "最终造成的具体损害结果", "", "", ""],
            ["判决结果", "法院认定的结论及法律依据", "", "", ""],
            ["案例启示", "对普通人的警示和指导意义", "", "", ""],
        ]
    },
    {
        "name": "F9_行动计划表",
        "tab_color": "0033719C",
        "headers": ["目标", "具体行动", "时间节点", "检验标准", "完成打勾"],
        "col_widths": [18, 30, 14, 22, 10],
        "rows": [
            ["提升风险意识", "学习正当防卫的法律规定", "本周内", "能准确复述5个构成要件", ""],
            ["避免冲突升级", "遇到冲突时保持冷静、不主动激化", "持续进行", "记录一次成功控制情绪的经历", ""],
            ["证据保存习惯", "手机开启自动录像功能", "3天内", "能在5秒内启动录像", ""],
            ["学习防卫技能", "参加防身术或自卫课程", "本月内", "掌握至少2种脱困技巧", ""],
            ["了解报警流程", "熟悉110报警和现场证据收集", "本周内", "能完整陈述报警要点", ""],
        ]
    },
    {
        "name": "F10_资源速查",
        "tab_color": "00455555",
        "headers": ["资源类型", "资源名称", "联系方式/获取方式", "适用场景", "备注"],
        "col_widths": [14, 20, 26, 22, 14],
        "rows": [
            ["法律援助", "12348法律服务热线", "拨打12348或当地法律援助中心", "需要法律援助时", ""],
            ["报警求助", "110报警电话", "直接拨打110", "紧急情况立即报警", ""],
            ["伤情鉴定", "公安机关物证鉴定中心", "联系当地公安局", "申请伤情鉴定时", ""],
            ["法律咨询", "律师事务所", "通过12348获取律师名录", "需要专业法律建议时", ""],
            ["心理援助", "心理援助热线", "各地心理援助热线", "冲突后心理疏导", ""],
            ["防身培训", "正规防卫术培训机构", "查询当地正规培训机构", "学习防卫技能", ""],
        ]
    },
]

def build_form(sheets, output_filename, title_prefix):
    print("Building: %s" % output_filename)
    work_dir = "/tmp/xlsx_work"

    copy_template(TEMPLATE_DIR, work_dir)

    sheet_names = [s["name"] for s in sheets]

    workbook_xml = create_workbook_xml(sheet_names)
    with open("%s/xl/workbook.xml" % work_dir, "w", encoding="utf-8") as f:
        f.write(workbook_xml)

    rels_xml = create_rels_xml(len(sheet_names))
    with open("%s/xl/_rels/workbook.xml.rels" % work_dir, "w", encoding="utf-8") as f:
        f.write(rels_xml)

    ct_xml = create_content_types_xml(len(sheet_names))
    with open("%s/[Content_Types].xml" % work_dir, "w", encoding="utf-8") as f:
        f.write(ct_xml)

    worksheets_dir = "%s/xl/worksheets" % work_dir
    for f in os.listdir(worksheets_dir):
        os.remove(os.path.join(worksheets_dir, f))

    for i, sheet in enumerate(sheets):
        sheet_xml = create_sheet_xml(
            title="%s - %s" % (title_prefix, sheet["name"]),
            tab_color=sheet["tab_color"],
            headers=sheet["headers"],
            rows=sheet["rows"],
            col_widths=sheet["col_widths"]
        )
        with open("%s/sheet%d.xml" % (worksheets_dir, i+1), "w", encoding="utf-8") as f:
            f.write(sheet_xml)

    output_path = "%s/%s" % (OUTPUT_DIR, output_filename)
    pack_xlsx(work_dir, output_path)
    print("Created: %s" % output_path)

def get_filled_rows(sheet_name, row_data):
    """Generate filled example content based on sheet type"""
    if sheet_name == "F1_正当防卫构成要件自检":
        if "起因条件" in row_data[0]:
            return ["对方持棍破门而入", "符合"]
        elif "时间条件" in row_data[0]:
            return ["正在遭受攻击时反击", "符合"]
        elif "主观条件" in row_data[0]:
            return ["为保护家人安全", "符合"]
        elif "对象条件" in row_data[0]:
            return ["直接针对侵害人本人", "符合"]
        elif "限度条件" in row_data[0]:
            return ["为阻止侵害取其性命", "存疑"]
    elif sheet_name == "F2_防卫限度判断":
        if "基本适应" in row_data[0]:
            return ["对方持棍，我方徒手", "需综合判断"]
        elif "特殊正当防卫" in row_data[0]:
            return ["对方持刀行凶", "可能适用"]
        elif "防卫过当" in row_data[0]:
            return ["存在较大争议", "需法院认定"]
    elif sheet_name == "F3_冲突升级预警":
        if "言语层面" in row_data[0]:
            return ["对方说弄死你"]
        elif "肢体层面" in row_data[0]:
            return ["对方挥拳冲来"]
        elif "工具层面" in row_data[0]:
            return ["未观察到"]
    elif sheet_name == "F4_三秒判断法训练":
        if "问题一" in row_data[0]:
            return ["有，对方在打我"]
        elif "问题二" in row_data[0]:
            return ["还没有，正在进行"]
        elif "问题三" in row_data[0]:
            return ["需要进一步分析"]
    elif sheet_name == "F5_证据保全清单":
        if "现场视频" in row_data[0]:
            return ["已用手机录像", "已完成"]
        elif "伤痕照片" in row_data[0]:
            return ["已拍照留存", "已完成"]
        elif "证人信息" in row_data[0]:
            return ["已记录2名目击者", "进行中"]
    elif sheet_name == "F8_案例分析记录":
        if "案件名称" in row_data[0]:
            return ["昆山龙哥正当防卫案", "可参考"]
        elif "基本案情" in row_data[0]:
            return ["刘海龙持刀攻击于海明，刀脱手后于海明捡刀反击"]
    return ["", ""]

def build_filled_form():
    print("\nBuilding filled form...")
    filled_sheets = []
    for sheet in SHEETS:
        filled_sheet = dict(sheet)
        filled_sheet["rows"] = []
        for row in sheet["rows"]:
            new_row = list(row)
            filled_content = get_filled_rows(sheet["name"], row)
            for j, content in enumerate(filled_content):
                if j + 3 < len(new_row):
                    new_row[j + 3] = content
            filled_sheet["rows"].append(new_row)
        filled_sheets.append(filled_sheet)
    build_form(filled_sheets, "配套表单_填好版.xlsx", "正当防卫边界 配套表单（填好版）")

# Guide sheets
GUIDE_SHEETS = [
    {
        "name": "使用说明总览",
        "tab_color": "001B4F9B",
        "headers": ["表单编号", "表单名称", "主要用途", "使用时机", "填写要点"],
        "col_widths": [14, 22, 30, 20, 30],
        "rows": [
            ["F1", "正当防卫构成要件自检", "系统梳理正当防卫的5个法律要件", "事件发生后或法律学习时", "逐项核对，确认每项是否符合"],
            ["F2", "防卫限度判断", "判断防卫行为是否超过必要限度", "案件定性分析时", "结合具体案例和法律规定判断"],
            ["F3", "冲突升级预警", "识别冲突各阶段的危险信号", "预防冲突或冲突初期", "三层面观察，及时采取应对措施"],
            ["F4", "三秒判断法训练", "训练紧急情况下的快速判断能力", "日常学习或模拟训练时", "三秒钟完成三个核心问题思考"],
            ["F5", "证据保全清单", "指导和记录证据的收集与保存", "事件发生后立即", "按清单逐项完成，不要遗漏"],
            ["F6", "报警陈述记录", "帮助准确、完整地进行报警陈述", "报警前准备或报警后补充", "时间线清晰，关键细节不遗漏"],
            ["F7", "伤情鉴定跟踪", "跟踪伤情鉴定各阶段和时间节点", "涉及人身伤害时", "注意各阶段的法定期限"],
            ["F8", "案例分析记录", "记录和分析典型案例的学习要点", "案例研究或对照自身情况", "要素完整，分析深入"],
            ["F9", "行动计划表", "制定和跟踪个人安全能力提升计划", "课程学习或自我提升时", "目标具体，行动可检验"],
            ["F10", "资源速查", "快速查找所需的法律和安全资源", "需要时查阅", "提前保存联系方式"],
        ]
    },
    {
        "name": "F1使用说明",
        "tab_color": "001B4F9B",
        "headers": ["问题", "解答", "注意事项"],
        "col_widths": [22, 40, 35],
        "rows": [
            ["为什么要自检构成要件？", "帮助当事人初步判断行为是否可能构成正当防卫，为后续法律程序提供参考。", "自检仅供参考，最终认定由司法机关作出。"],
            ["五个要件必须全部符合吗？", "是的，正当防卫的五个要件缺一不可，必须同时满足才能成立正当防卫。", "任何一项不满足都可能影响正当防卫的认定。"],
            ["要件解释栏如何填写？", "填写法律对该要件的具体要求和解释，作为判断的标准依据。", "可参考《刑法》第20条及相关司法解释。"],
            ["判断结果填符合就安全了吗？", "不一定，自检只是初步判断，最终需要司法机关根据案件具体情况认定。", "建议及时咨询专业律师。"],
        ]
    },
    {
        "name": "F2使用说明",
        "tab_color": "002E75B6",
        "headers": ["问题", "解答", "注意事项"],
        "col_widths": [22, 40, 35],
        "rows": [
            ["防卫限度为什么重要？", "防卫限度是区分正当防卫和防卫过当的关键，超越限度可能需要承担刑事责任。", "正当防卫明显超过必要限度造成重大损害的，是防卫过当。"],
            ["如何判断基本适应？", "需要综合比较侵害行为的手段、强度、后果与防卫行为的手段、强度、后果。", "不是要求完全对等，而是要符合比例原则。"],
            ["特殊正当防卫有什么条件？", "必须针对行凶、杀人、抢劫、强奸、绑架等严重暴力犯罪，且必须正在进行。", "即使超过限度也不属于防卫过当，但仍需有节制。"],
            ["防卫过当一定判刑吗？", "防卫过当应当负刑事责任，但应当减轻或免除处罚。", "具体量刑由法院根据案件情况判定。"],
        ]
    },
    {
        "name": "F3使用说明",
        "tab_color": "00C55A11",
        "headers": ["问题", "解答", "注意事项"],
        "col_widths": [22, 40, 35],
        "rows": [
            ["为什么要分三个层面？", "冲突升级通常从言语到肢体再到使用工具，分层识别有助于提前预警。", "注意观察各层面的危险信号，及时应对。"],
            ["遇到预警信号怎么办？", "首先保证自身安全，其次考虑逃离或报警，不要正面冲突。", "避免进入封闭空间或孤立无援的场所。"],
            ["如何提高预警能力？", "平时多观察、多思考，积累识别危险信号的经验；参加相关培训。", "保持警觉但不要过度紧张。"],
        ]
    },
    {
        "name": "F4使用说明",
        "tab_color": "00375623",
        "headers": ["问题", "解答", "注意事项"],
        "col_widths": [22, 40, 35],
        "rows": [
            ["为什么是三秒？", "紧急情况下没有时间详细分析，三秒是快速决策的参考时间框架。", "训练时反复练习，形成快速反应习惯。"],
            ["问题三最难在哪里？", "需要综合判断当时的具体情境，包括侵害手段、双方体力对比、环境因素等。", "没有绝对标准，需要具体问题具体分析。"],
            ["三秒判断是固定流程吗？", "是训练工具，帮助在紧急情况下快速梳理思路，不是法律规定。", "实际判断还需结合法律知识和具体情况。"],
        ]
    },
    {
        "name": "F5使用说明",
        "tab_color": "00006B6B",
        "headers": ["问题", "解答", "注意事项"],
        "col_widths": [22, 40, 35],
        "rows": [
            ["为什么证据保全很重要？", "证据是认定案件事实的依据，证据不足会直接影响正当防卫的认定。", "证据意识要贯穿事件全过程。"],
            ["现场被破坏了怎么办？", "尽量保护现场，标记物证位置；即使现场被破坏，其他证据（如证人）仍可发挥作用。", "不要触碰现场物品，保护自身安全。"],
            ["证人不愿意作证怎么办？", "可以记录证人基本信息供警方联系；警方有权要求证人作证。", "不要强迫证人，但可以说明作证的重要性。"],
            ["电子证据如何保存？", "手机录像不要删除；报警记录保持完整；聊天记录不要删除。", "注意备份，防止数据丢失。"],
        ]
    },
    {
        "name": "F6使用说明",
        "tab_color": "00666699",
        "headers": ["问题", "解答", "注意事项"],
        "col_widths": [22, 40, 35],
        "rows": [
            ["报警陈述为什么重要？", "报警陈述是案件的重要证据，陈述内容会记录在案，影响后续案件处理。", "陈述要客观、准确、完整。"],
            ["如何准备报警陈述？", "使用本表单梳理事件时间线，列出关键细节，确保不遗漏重要信息。", "提前准备可以减少报警时的紧张。"],
            ["陈述和笔录不一样吗？", "报警陈述是口头描述，笔录是书面记录，都很重要；签字前要仔细核对内容。", "有疑问可以要求修改或补充。"],
            ["遗漏了细节怎么办？", "可以补充陈述，及时联系办案民警补充说明；不要编造不存在的事实。", "保持陈述的一致性。"],
        ]
    },
    {
        "name": "F7使用说明",
        "tab_color": "009C59C5",
        "headers": ["问题", "解答", "注意事项"],
        "col_widths": [22, 40, 35],
        "rows": [
            ["伤情鉴定有时间要求吗？", "伤情鉴定应在伤情稳定后及时申请，一般不超过一周；警方也可要求重新鉴定。", "就医时要保留所有诊断材料和发票。"],
            ["对鉴定结果不满意怎么办？", "可以在收到鉴定书之日起3日内申请补充鉴定或重新鉴定。", "要有正当理由，不能无理由申请。"],
            ["没有受伤也需要鉴定吗？", "如果涉及正当防卫认定，即使没有明显外伤也建议保留相关证据。", "对方的伤情同样重要。"],
        ]
    },
    {
        "name": "F8使用说明",
        "tab_color": "007B3A3A",
        "headers": ["问题", "解答", "注意事项"],
        "col_widths": [22, 40, 35],
        "rows": [
            ["为什么要分析案例？", "通过真实案例学习正当防卫的认定标准和裁判规则，提高法律意识。", "案例分析可以帮助理解法律规定。"],
            ["案例分析要分析哪些要素？", "包括案件事实、防卫意图、侵害强度、防卫手段、损害后果、判决结果等。", "要素分析有助于全面理解案件。"],
            ["如何从案例中总结教训？", "思考案例中的关键争议点，法院的裁判理由，自己能借鉴什么。", "不要机械记忆，要理解背后的法律逻辑。"],
        ]
    },
    {
        "name": "F9使用说明",
        "tab_color": "0033719C",
        "headers": ["问题", "解答", "注意事项"],
        "col_widths": [22, 40, 35],
        "rows": [
            ["为什么要制定行动计划？", "正当防卫不仅是法律问题，更是能力问题；提升安全意识和防卫能力需要持续练习。", "计划要切实可行，不要好高骛远。"],
            ["目标如何设定？", "目标要具体、可衡量、可实现、相关、有时限（SMART原则）。", "从小目标开始，逐步提升。"],
            ["如何检验完成情况？", "设定明确的检验标准，如能准确复述、完成实操练习等。", "定期回顾和调整计划。"],
        ]
    },
    {
        "name": "F10使用说明",
        "tab_color": "00455555",
        "headers": ["问题", "解答", "注意事项"],
        "col_widths": [22, 40, 35],
        "rows": [
            ["这些资源什么时候用？", "平时了解，关键时刻求助；不要等出了事才找资源。", "提前保存联系方式。"],
            ["法律援助收费吗？", "经济困难群众可以申请免费法律援助；12348是政府提供的免费法律咨询。", "符合条件就可以申请。"],
            ["如何选择防身培训？", "选择有资质的正规机构，查看教练资质，不要轻信夸大宣传。", "防身术需要持续练习才能熟练掌握。"],
        ]
    },
]

if __name__ == "__main__":
    os.makedirs(OUTPUT_DIR, exist_ok=True)

    # Build empty form
    build_form(SHEETS, "配套表单_空表.xlsx", "正当防卫边界 配套表单")

    # Build filled form
    build_filled_form()

    # Build guide
    build_form(GUIDE_SHEETS, "表单使用指引.xlsx", "正当防卫边界 表单使用指引")

    print("\nAll done!")
