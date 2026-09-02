#!/usr/bin/env python3
"""
Generate Talent Review Excel files using XML approach.
Creates two xlsx files:
- 配套表单_空表.xlsx (blank templates)
- 配套表单_填好版.xlsx (with sample data)
"""

import os
import shutil
import zipfile

SKILL_DIR = "C:/Users/Administrator/.claude/skills/Excel表格处理"
WORK_DIR = "D:/CC/temp/talent_review_work"
OUTPUT_DIR = "D:/新课开发/管理学/11-人才盘点与梯队建设/配套表单和指引-Excel版"

def copy_template(name):
    """Copy template to working directory"""
    src = f"{SKILL_DIR}/templates/minimal_xlsx"
    dst = f"{WORK_DIR}/{name}"
    if os.path.exists(dst):
        shutil.rmtree(dst)
    shutil.copytree(src, dst)
    return dst

def create_zip(dst_dir, output_path):
    """Pack XML directory into xlsx file"""
    with zipfile.ZipFile(output_path, 'w', zipfile.ZIP_DEFLATED) as zf:
        for root, dirs, files in os.walk(dst_dir):
            for file in files:
                file_path = os.path.join(root, file)
                arcname = os.path.relpath(file_path, dst_dir)
                zf.write(file_path, arcname)
    print(f"Created: {output_path}")

# ============================================================
# Shared Strings - all text content for both files
# ============================================================

def get_shared_strings():
    """Shared strings for both versions"""
    strings = [
        # 0-5: Sheet names
        "九宫格人才评估表",
        "人才盘点会议记录表",
        "关键岗位继任地图",
        "高潜人才发展计划表",
        "人才盘点年度日历",
        "梯队建设进度追踪表",
        # 6-15: Nine-box evaluation sheet
        "九宫格人才评估表",
        "评估日期",
        "评估人",
        "被评估人",
        "所属部门",
        "岗位",
        "业绩维度评分（1-5分）",
        "目标达成",
        "绩效质量",
        "工作效率",
        "团队贡献",
        "创新能力",
        "业绩总分",
        "业绩平均分",
        "潜力维度评分（1-5分）",
        "学习能力",
        "适应性",
        "领导力潜力",
        "战略思维",
        "执行力",
        "潜力总分",
        "潜力平均分",
        "落位区域",
        "备注",
        "区域说明",
        "明星人才（高业绩+高潜力）",
        "核心人才（高业绩+中潜力）",
        "骨干人才（高业绩+低潜力）",
        "待发展人才（中业绩+高潜力）",
        "多面手（中业绩+中潜力）",
        "稳定贡献者（中业绩+低潜力）",
        "高潜力待培养（低业绩+高潜力）",
        "需改进（低业绩+中潜力）",
        "调整对象（低业绩+低潜力）",
        # 48-60: Meeting record sheet
        "人才盘点会议记录表",
        "会议日期",
        "会议时间",
        "参会人员",
        "主持人",
        "记录人",
        "会议议程",
        "议题",
        "讨论内容",
        "决议",
        "九宫格确认",
        "讨论记录",
        "关键决策",
        "行动项",
        "行动内容",
        "责任人",
        "完成时间",
        "状态",
        "下次会议安排",
        "下次会议日期",
        "下次会议议题",
        "待办",
        "进行中",
        "已完成",
        # 75-100: Succession map sheet
        "关键岗位继任地图",
        "关键岗位",
        "现任者",
        "即时空缺风险",
        "即时继任者（Ready Now）",
        "短期继任者（1-2年）",
        "中长期继任者（3+年）",
        "继任准备度",
        "发展需求",
        "岗位ID",
        "现任者姓名",
        "在职年限",
        "继任者姓名",
        "继任准备度评分",
        "已就位",
        "准备中",
        "需加速培养",
        "高",
        "中",
        "低",
        "备注",
        # 100-130: High potential development plan
        "高潜人才发展计划表",
        "人才基本信息",
        "姓名",
        "性别",
        "年龄",
        "学历",
        "入职时间",
        "当前岗位",
        "潜力评估（5个维度）",
        "评估维度",
        "评分",
        "发展建议",
        "战略思维",
        "领导能力",
        "学习敏锐度",
        "变革能力",
        "业务洞察",
        "能力短板分析",
        "短板项",
        "影响程度",
        "提升方式",
        "发展目标（SMART）",
        "目标描述",
        "具体目标",
        "可衡量",
        "可达成",
        "相关性",
        "时间节点",
        "发展路径",
        "挑战性任务",
        "轮岗计划",
        "培训课程",
        "导师辅导",
        "里程碑与评估",
        "里程碑",
        "计划时间",
        "评估方式",
        "评估结果",
        # 150-180: Annual calendar
        "人才盘点年度日历",
        "年度",
        "月份",
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
        "6月",
        "7月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月",
        "盘点计划",
        "行进跟踪",
        "关键节点",
        "责任人",
        "计划内容",
        "完成状态",
        "已启动",
        "进行中",
        "已完成",
        "延期",
        # 180-200: Pipeline tracking
        "梯队建设进度追踪表",
        "梯队层级",
        "关键岗位数量",
        "已到位数量",
        "储备中数量",
        "空缺数量",
        "建设进度",
        "风险等级",
        "第一梯队（高层管理）",
        "第二梯队（中层管理）",
        "第三梯队（基层管理）",
        "专业人才梯队",
        "高风险",
        "中风险",
        "低风险",
        "关键岗位名称",
        "当前任职者",
        "梯队建设措施",
    ]
    return strings

def build_shared_strings_xml(strings):
    """Build sharedStrings.xml content"""
    count = len(strings)
    xml_lines = ['<?xml version="1.0" encoding="UTF-8" standalone="yes"?>']
    xml_lines.append(f'<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="{count}" uniqueCount="{count}">')
    for s in strings:
        s = s.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;')
        xml_lines.append(f'  <si><t>{s}</t></si>')
    xml_lines.append('</sst>')
    return '\n'.join(xml_lines)

def build_workbook_xml(sheet_names):
    """Build workbook.xml with all sheets"""
    xml_lines = ['<?xml version="1.0" encoding="UTF-8" standalone="yes"?>']
    xml_lines.append('<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">')
    xml_lines.append('  <fileVersion appName="xl" lastEdited="7" lowestEdited="7"/>')
    xml_lines.append('  <workbookPr defaultThemeVersion="166925"/>')
    xml_lines.append('  <bookViews><workbookView xWindow="0" yWindow="0" windowWidth="20140" windowHeight="10960"/></bookViews>')
    xml_lines.append('  <sheets>')
    for i, name in enumerate(sheet_names):
        name_escaped = name.replace('&', '&amp;')
        sheet_id = i + 1
        r_id = f"rId{sheet_id}"
        xml_lines.append(f'    <sheet name="{name_escaped}" sheetId="{sheet_id}" r:id="{r_id}"/>')
    xml_lines.append('  </sheets>')
    xml_lines.append('  <calcPr calcId="191029"/>')
    xml_lines.append('</workbook>')
    return '\n'.join(xml_lines)

def build_workbook_rels_xml(num_sheets):
    """Build workbook.xml.rels with all sheet relationships"""
    xml_lines = ['<?xml version="1.0" encoding="UTF-8" standalone="yes"?>']
    xml_lines.append('<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">')
    xml_lines.append('  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>')
    xml_lines.append('  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>')
    xml_lines.append('  <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml"/>')
    for i in range(2, num_sheets + 1):
        xml_lines.append(f'  <Relationship Id="rId{i}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet{i}.xml"/>')
    xml_lines.append('</Relationships>')
    return '\n'.join(xml_lines)

def build_content_types_xml(num_sheets):
    """Build [Content_Types].xml"""
    xml_lines = ['<?xml version="1.0" encoding="UTF-8" standalone="yes"?>']
    xml_lines.append('<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">')
    xml_lines.append('  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>')
    xml_lines.append('  <Default Extension="xml" ContentType="application/xml"/>')
    xml_lines.append('  <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>')
    xml_lines.append('  <Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>')
    xml_lines.append('  <Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/>')
    for i in range(1, num_sheets + 1):
        xml_lines.append(f'  <Override PartName="/xl/worksheets/sheet{i}.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>')
    xml_lines.append('</Types>')
    return '\n'.join(xml_lines)

# ============================================================
# Sheet 1: 九宫格人才评估表
# ============================================================
def build_nine_box_sheet(strings, filled=False):
    """Build 九宫格人才评估表 worksheet XML"""
    title = 6
    eval_date = 7
    evaluator = 8
    evaluatee = 9
    department = 10
    position = 11
    performance_dim = 12
    dims_p = ["目标达成", "绩效质量", "工作效率", "团队贡献", "创新能力"]
    perf_start = 13
    perf_total = 18
    perf_avg = 19
    potential_dim = 20
    dims_pt = ["学习能力", "适应性", "领导力潜力", "战略思维", "执行力"]
    pot_start = 21
    pot_total = 26
    pot_avg = 27
    area = 28
    remarks = 29
    area_names = [
        (30, "明星人才（高业绩+高潜力）"),
        (31, "核心人才（高业绩+中潜力）"),
        (32, "骨干人才（高业绩+低潜力）"),
        (33, "待发展人才（中业绩+高潜力）"),
        (34, "多面手（中业绩+中潜力）"),
        (35, "稳定贡献者（中业绩+低潜力）"),
        (36, "高潜力待培养（低业绩+高潜力）"),
        (37, "需改进（低业绩+中潜力）"),
        (38, "调整对象（低业绩+低潜力）"),
    ]

    rows = []
    rows.append('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>')
    rows.append('<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">')
    rows.append('  <sheetViews><sheetView tabSelected="1" workbookViewId="0"/></sheetViews>')
    rows.append('  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>')
    rows.append('  <cols>')
    rows.append('    <col min="1" max="1" width="16" customWidth="1"/>')
    rows.append('    <col min="2" max="2" width="14" customWidth="1"/>')
    rows.append('    <col min="3" max="3" width="14" customWidth="1"/>')
    rows.append('    <col min="4" max="4" width="14" customWidth="1"/>')
    rows.append('    <col min="5" max="5" width="14" customWidth="1"/>')
    rows.append('    <col min="6" max="6" width="14" customWidth="1"/>')
    rows.append('    <col min="7" max="7" width="14" customWidth="1"/>')
    rows.append('    <col min="8" max="8" width="16" customWidth="1"/>')
    rows.append('    <col min="9" max="9" width="20" customWidth="1"/>')
    rows.append('  </cols>')
    rows.append('  <sheetData>')
    rows.append(f'    <row r="1" ht="32" customHeight="1">')
    rows.append(f'      <c r="A1" t="s" s="4"><v>{title}</v></c>')
    rows.append('    </row>')
    rows.append(f'    <row r="2" ht="20" customHeight="1">')
    rows.append(f'      <c r="A2" t="s" s="1"><v>{eval_date}</v></c>')
    rows.append(f'      <c r="B2" s="11"><v>45691</v></c>')
    rows.append(f'      <c r="C2" t="s" s="1"><v>{evaluator}</v></c>')
    rows.append(f'      <c r="D2" t="s" s="1"><v>张总</v></c>')
    rows.append('    </row>')
    rows.append(f'    <row r="3" ht="20" customHeight="1">')
    rows.append(f'      <c r="A3" t="s" s="1"><v>{evaluatee}</v></c>')
    rows.append(f'      <c r="B3" t="s" s="1"><v>李明</v></c>')
    rows.append(f'      <c r="C3" t="s" s="1"><v>{department}</v></c>')
    rows.append(f'      <c r="D3" t="s" s="1"><v>技术部</v></c>')
    rows.append(f'      <c r="E3" t="s" s="1"><v>{position}</v></c>')
    rows.append(f'      <c r="F3" t="s" s="1"><v>高级工程师</v></c>')
    rows.append('    </row>')
    rows.append(f'    <row r="5" ht="22" customHeight="1">')
    rows.append(f'      <c r="A5" t="s" s="4"><v>{performance_dim}</v></c>')
    rows.append('    </row>')
    rows.append(f'    <row r="6" ht="20" customHeight="1">')
    rows.append(f'      <c r="A6" t="s" s="4"><v>评估维度</v></c>')
    for i, dim in enumerate(dims_p):
        col = chr(66 + i)
        rows.append(f'      <c r="{col}6" t="s" s="4"><v>{perf_start + i}</v></c>')
    rows.append(f'      <c r="G6" t="s" s="4"><v>{perf_total}</v></c>')
    rows.append(f'      <c r="H6" t="s" s="4"><v>{perf_avg}</v></c>')
    rows.append('    </row>')
    rows.append(f'    <row r="7" ht="20" customHeight="1">')
    rows.append(f'      <c r="A7" t="s" s="2"><v>评分</v></c>')
    scores_p = [4, 5, 4, 5, 4] if filled else [0, 0, 0, 0, 0]
    for i, score in enumerate(scores_p):
        col = chr(66 + i)
        rows.append(f'      <c r="{col}7" s="9"><v>{score}</v></c>')
    rows.append(f'      <c r="G7" s="10"><f>SUM(B7:F7)</f><v></v></c>')
    rows.append(f'      <c r="H7" s="8"><f>G7/5</f><v></v></c>')
    rows.append('    </row>')
    rows.append(f'    <row r="9" ht="22" customHeight="1">')
    rows.append(f'      <c r="A9" t="s" s="4"><v>{potential_dim}</v></c>')
    rows.append('    </row>')
    rows.append(f'    <row r="10" ht="20" customHeight="1">')
    rows.append(f'      <c r="A10" t="s" s="4"><v>评估维度</v></c>')
    for i, dim in enumerate(dims_pt):
        col = chr(66 + i)
        rows.append(f'      <c r="{col}10" t="s" s="4"><v>{pot_start + i}</v></c>')
    rows.append(f'      <c r="G10" t="s" s="4"><v>{pot_total}</v></c>')
    rows.append(f'      <c r="H10" t="s" s="4"><v>{pot_avg}</v></c>')
    rows.append('    </row>')
    rows.append(f'    <row r="11" ht="20" customHeight="1">')
    rows.append(f'      <c r="A11" t="s" s="2"><v>评分</v></c>')
    scores_pt = [5, 4, 5, 4, 5] if filled else [0, 0, 0, 0, 0]
    for i, score in enumerate(scores_pt):
        col = chr(66 + i)
        rows.append(f'      <c r="{col}11" s="9"><v>{score}</v></c>')
    rows.append(f'      <c r="G11" s="10"><f>SUM(B11:F11)</f><v></v></c>')
    rows.append(f'      <c r="H11" s="8"><f>G11/5</f><v></v></c>')
    rows.append('    </row>')
    rows.append(f'    <row r="13" ht="22" customHeight="1">')
    rows.append(f'      <c r="A13" t="s" s="4"><v>{area}</v></c>')
    if filled:
        rows.append(f'      <c r="B13" t="s" s="12"><v>{area_names[0][0]}</v></c>')
    else:
        rows.append(f'      <c r="B13" t="s" s="1"><v>请输入评分自动落位</v></c>')
    rows.append('    </row>')
    rows.append(f'    <row r="14" ht="20" customHeight="1">')
    rows.append(f'      <c r="A14" t="s" s="4"><v>{remarks}</v></c>')
    if filled:
        rows.append(f'      <c r="B14" t="s" s="1"><v>该员工表现优异，建议纳入核心人才培养计划</v></c>')
    rows.append('    </row>')
    rows.append(f'    <row r="16" ht="22" customHeight="1">')
    rows.append(f'      <c r="A16" t="s" s="4"><v>区域说明</v></c>')
    rows.append('    </row>')
    rows.append(f'    <row r="17" ht="20" customHeight="1">')
    rows.append(f'      <c r="A17" t="s" s="4"><v>业绩\\潜力</v></c>')
    rows.append(f'      <c r="B17" t="s" s="4"><v>高(4-5分)</v></c>')
    rows.append(f'      <c r="C17" t="s" s="4"><v>中(3分)</v></c>')
    rows.append(f'      <c r="D17" t="s" s="4"><v>低(1-2分)</v></c>')
    rows.append('    </row>')
    legend_areas = [
        (18, "高(4-5分)", area_names[0][0], area_names[1][0], area_names[2][0]),
        (19, "中(3分)", area_names[3][0], area_names[4][0], area_names[5][0]),
        (20, "低(1-2分)", area_names[6][0], area_names[7][0], area_names[8][0]),
    ]
    for row_num, perf_label, a1, a2, a3 in legend_areas:
        rows.append(f'    <row r="{row_num}" ht="20" customHeight="1">')
        rows.append(f'      <c r="A{row_num}" t="s" s="2"><v>{perf_label}</v></c>')
        rows.append(f'      <c r="B{row_num}" t="s" s="1"><v>{a1}</v></c>')
        rows.append(f'      <c r="C{row_num}" t="s" s="1"><v>{a2}</v></c>')
        rows.append(f'      <c r="D{row_num}" t="s" s="1"><v>{a3}</v></c>')
        rows.append('    </row>')
    rows.append('  </sheetData>')
    rows.append('  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>')
    rows.append('</worksheet>')
    return '\n'.join(rows)

# ============================================================
# Sheet 2: 人才盘点会议记录表
# ============================================================
def build_meeting_sheet(strings, filled=False):
    """Build 人才盘点会议记录表 worksheet XML"""
    title = 48
    meeting_date = 49
    meeting_time = 50
    attendees = 51
    host = 52
    recorder = 53
    agenda = 54
    topic = 55
    discussion = 56
    resolution = 57
    nine_box = 58
    action_item = 61
    action_content = 62
    responsible = 63
    due_date = 64
    status = 65
    next_meeting = 66
    next_date = 67
    next_topic = 68
    pending = 69
    in_progress = 70
    completed = 71

    rows = []
    rows.append('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>')
    rows.append('<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">')
    rows.append('  <sheetViews><sheetView tabSelected="1" workbookViewId="0"/></sheetViews>')
    rows.append('  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>')
    rows.append('  <cols>')
    rows.append('    <col min="1" max="1" width="18" customWidth="1"/>')
    rows.append('    <col min="2" max="6" width="14" customWidth="1"/>')
    rows.append('    <col min="7" max="7" width="18" customWidth="1"/>')
    rows.append('  </cols>')
    rows.append('  <sheetData>')
    rows.append(f'    <row r="1" ht="32" customHeight="1">')
    rows.append(f'      <c r="A1" t="s" s="4"><v>{title}</v></c>')
    rows.append('    </row>')
    rows.append(f'    <row r="2" ht="20" customHeight="1">')
    rows.append(f'      <c r="A2" t="s" s="1"><v>{meeting_date}</v></c>')
    rows.append(f'      <c r="B2" s="11"><v>45701</v></c>')
    rows.append(f'      <c r="C2" t="s" s="1"><v>{meeting_time}</v></c>')
    rows.append(f'      <c r="D2" s="11"><v>14:00</v></c>')
    rows.append(f'      <c r="E2" t="s" s="1"><v>{host}</v></c>')
    rows.append(f'      <c r="F2" t="s" s="1"><v>张总</v></c>')
    rows.append('    </row>')
    rows.append(f'    <row r="3" ht="20" customHeight="1">')
    rows.append(f'      <c r="A3" t="s" s="1"><v>{attendees}</v></c>')
    rows.append(f'      <c r="B3" t="s" s="1"><v>李明、王芳、赵强、刘洋</v></c>')
    rows.append(f'      <c r="C3" t="s" s="1"><v>{recorder}</v></c>')
    rows.append(f'      <c r="D3" t="s" s="1"><v>HR陈静</v></c>')
    rows.append('    </row>')
    rows.append(f'    <row r="5" ht="22" customHeight="1">')
    rows.append(f'      <c r="A5" t="s" s="4"><v>{agenda}</v></c>')
    rows.append('    </row>')
    rows.append(f'    <row r="6" ht="20" customHeight="1">')
    rows.append(f'      <c r="A6" t="s" s="4"><v>{topic}</v></c>')
    rows.append(f'      <c r="B6" t="s" s="4"><v>讨论内容</v></c>')
    rows.append(f'      <c r="C6" t="s" s="4"><v>{resolution}</v></c>')
    rows.append('    </row>')
    agenda_items = [
        ("Q1业绩回顾", "技术部Q1目标达成率95%，重点讨论绩效突出人员", "继续推进绩效改进计划"),
        ("九宫格确认", "确认技术部核心岗位人才的九宫格分布", "已确认分布图谱"),
        ("继任计划讨论", "讨论关键岗位的继任者培养进展", "启动继任者培养项目第二期"),
    ]
    for i, (t, d, r) in enumerate(agenda_items):
        row = 7 + i
        rows.append(f'    <row r="{row}" ht="20" customHeight="1">')
        rows.append(f'      <c r="A{row}" t="s" s="1"><v>{t}</v></c>')
        rows.append(f'      <c r="B{row}" t="s" s="1"><v>{d}</v></c>')
        rows.append(f'      <c r="C{row}" t="s" s="1"><v>{r}</v></c>')
        rows.append('    </row>')
    rows.append(f'    <row r="10" ht="22" customHeight="1">')
    rows.append(f'      <c r="A10" t="s" s="4"><v>{nine_box}</v></c>')
    rows.append('    </row>')
    rows.append(f'    <row r="11" ht="20" customHeight="1">')
    rows.append(f'      <c r="A11" t="s" s="2"><v>明星人才</v></c>')
    rows.append(f'      <c r="B11" s="9"><v>3</v></c>')
    rows.append(f'      <c r="C11" t="s" s="2"><v>核心人才</v></c>')
    rows.append(f'      <c r="D11" s="9"><v>8</v></c>')
    rows.append(f'      <c r="E11" t="s" s="2"><v>骨干人才</v></c>')
    rows.append(f'      <c r="F11" s="9"><v>5</v></c>')
    rows.append('    </row>')
    rows.append(f'    <row r="12" ht="20" customHeight="1">')
    rows.append(f'      <c r="A12" t="s" s="2"><v>待发展人才</v></c>')
    rows.append(f'      <c r="B12" s="9"><v>4</v></c>')
    rows.append(f'      <c r="C12" t="s" s="2"><v>多面手</v></c>')
    rows.append(f'      <c r="D12" s="9"><v>6</v></c>')
    rows.append(f'      <c r="E12" t="s" s="2"><v>稳定贡献者</v></c>')
    rows.append(f'      <c r="F12" s="9"><v>7</v></c>')
    rows.append('    </row>')
    rows.append(f'    <row r="14" ht="22" customHeight="1">')
    rows.append(f'      <c r="A14" t="s" s="4"><v>{action_item}</v></c>')
    rows.append('    </row>')
    rows.append(f'    <row r="15" ht="20" customHeight="1">')
    rows.append(f'      <c r="A15" t="s" s="4"><v>{action_content}</v></c>')
    rows.append(f'      <c r="B15" t="s" s="4"><v>{responsible}</v></c>')
    rows.append(f'      <c r="C15" t="s" s="4"><v>{due_date}</v></c>')
    rows.append(f'      <c r="D15" t="s" s="4"><v>{status}</v></c>')
    rows.append('    </row>')
    actions = [
        ("完成技术部核心人才九宫格图谱", "HR陈静", "2026-04-15", completed),
        ("制定明星人才培养计划", "张总", "2026-04-30", in_progress),
        ("启动继任者培养项目第二期", "HR陈静", "2026-05-15", pending),
    ]
    for i, (content, resp, due, stat) in enumerate(actions):
        row = 16 + i
        rows.append(f'    <row r="{row}" ht="20" customHeight="1">')
        rows.append(f'      <c r="A{row}" t="s" s="1"><v>{content}</v></c>')
        rows.append(f'      <c r="B{row}" t="s" s="1"><v>{resp}</v></c>')
        rows.append(f'      <c r="C{row}" t="s" s="1"><v>{due}</v></c>')
        st = 12 if stat == in_progress else 1
        rows.append(f'      <c r="D{row}" t="s" s="{st}"><v>{stat}</v></c>')
        rows.append('    </row>')
    rows.append(f'    <row r="19" ht="22" customHeight="1">')
    rows.append(f'      <c r="A19" t="s" s="4"><v>{next_meeting}</v></c>')
    rows.append('    </row>')
    rows.append(f'    <row r="20" ht="20" customHeight="1">')
    rows.append(f'      <c r="A20" t="s" s="1"><v>{next_date}</v></c>')
    rows.append(f'      <c r="B20" s="11"><v>45731</v></c>')
    rows.append(f'      <c r="C20" t="s" s="1"><v>{next_topic}</v></c>')
    rows.append(f'      <c r="D20" t="s" s="1"><v>Q1复盘与下阶段人才发展计划</v></c>')
    rows.append('    </row>')
    rows.append('  </sheetData>')
    rows.append('  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>')
    rows.append('</worksheet>')
    return '\n'.join(rows)

# ============================================================
# Sheet 3: 关键岗位继任地图
# ============================================================
def build_succession_sheet(strings, filled=False):
    """Build 关键岗位继任地图 worksheet XML"""
    title = 75
    position = 76
    current = 77
    ready_now = 79
    short_term = 80
    long_term = 81
    development = 83
    position_id = 84
    current_name = 85
    successor_name = 87
    readiness_score = 88
    ready = 89
    preparing = 90
    accelerating = 91

    rows = []
    rows.append('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>')
    rows.append('<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">')
    rows.append('  <sheetViews><sheetView tabSelected="1" workbookViewId="0"/></sheetViews>')
    rows.append('  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>')
    rows.append('  <cols>')
    rows.append('    <col min="1" max="1" width="20" customWidth="1"/>')
    rows.append('    <col min="2" max="2" width="12" customWidth="1"/>')
    rows.append('    <col min="3" max="3" width="12" customWidth="1"/>')
    rows.append('    <col min="4" max="4" width="18" customWidth="1"/>')
    rows.append('    <col min="5" max="5" width="18" customWidth="1"/>')
    rows.append('    <col min="6" max="6" width="18" customWidth="1"/>')
    rows.append('    <col min="7" max="7" width="12" customWidth="1"/>')
    rows.append('    <col min="8" max="8" width="20" customWidth="1"/>')
    rows.append('  </cols>')
    rows.append('  <sheetData>')
    rows.append(f'    <row r="1" ht="32" customHeight="1">')
    rows.append(f'      <c r="A1" t="s" s="4"><v>{title}</v></c>')
    rows.append('    </row>')
    rows.append(f'    <row r="2" ht="24" customHeight="1">')
    rows.append(f'      <c r="A2" t="s" s="4"><v>{position_id}</v></c>')
    rows.append(f'      <c r="B2" t="s" s="4"><v>{position}</v></c>')
    rows.append(f'      <c r="C2" t="s" s="4"><v>{current_name}</v></c>')
    rows.append(f'      <c r="D2" t="s" s="4"><v>{ready_now}</v></c>')
    rows.append(f'      <c r="E2" t="s" s="4"><v>{short_term}</v></c>')
    rows.append(f'      <c r="F2" t="s" s="4"><v>{long_term}</v></c>')
    rows.append(f'      <c r="G2" t="s" s="4"><v>{readiness_score}</v></c>')
    rows.append(f'      <c r="H2" t="s" s="4"><v>{development}</v></c>')
    rows.append('    </row>')
    positions_data = [
        ("P001", "技术总监", "张明", "王强", "李华", "陈伟", ready, "加强战略思维培训"),
        ("P002", "产品总监", "刘芳", "赵敏", "孙杰", "周琳", preparing, "安排跨部门轮岗"),
        ("P003", "运营总监", "陈静", "黄磊", "吴涛", "郑杰", accelerating, "急需加速培养"),
        ("P004", "财务总监", "李娜", "杨帆", "林峰", "何晨", ready, "已就位"),
    ]
    last_row = 2
    for i, (pid, pos, curr, rn, st, lt, rd, dev) in enumerate(positions_data):
        row = 3 + i
        last_row = row
        rows.append(f'    <row r="{row}" ht="20" customHeight="1">')
        rows.append(f'      <c r="A{row}" t="s" s="1"><v>{pid}</v></c>')
        rows.append(f'      <c r="B{row}" t="s" s="1"><v>{pos}</v></c>')
        rows.append(f'      <c r="C{row}" t="s" s="1"><v>{curr}</v></c>')
        rows.append(f'      <c r="D{row}" t="s" s="1"><v>{rn}</v></c>')
        rows.append(f'      <c r="E{row}" t="s" s="1"><v>{st}</v></c>')
        rows.append(f'      <c r="F{row}" t="s" s="1"><v>{lt}</v></c>')
        rows.append(f'      <c r="G{row}" t="s" s="12"><v>{rd}</v></c>')
        rows.append(f'      <c r="H{row}" t="s" s="1"><v>{dev}</v></c>')
        rows.append('    </row>')
    summary_row = last_row + 1
    rows.append(f'    <row r="{summary_row}" ht="22" customHeight="1">')
    rows.append(f'      <c r="A{summary_row}" t="s" s="4"><v>汇总</v></c>')
    rows.append(f'      <c r="B{summary_row}" t="s" s="4"><v>关键岗位总数</v></c>')
    rows.append(f'      <c r="C{summary_row}" s="10"><f>COUNTA(A3:A{last_row})</f><v></v></c>')
    rows.append(f'      <c r="D{summary_row}" t="s" s="4"><v>已就位</v></c>')
    rows.append(f'      <c r="E{summary_row}" s="10"><f>COUNTIF(G3:G{last_row},"已就位")</f><v></v></c>')
    rows.append(f'      <c r="F{summary_row}" t="s" s="4"><v>准备中</v></c>')
    rows.append(f'      <c r="G{summary_row}" s="10"><f>COUNTIF(G3:G{last_row},"准备中")</f><v></v></c>')
    rows.append(f'      <c r="H{summary_row}" t="s" s="4"><v>需加速培养</v></c>')
    rows.append(f'      <c r="I{summary_row}" s="10"><f>COUNTIF(G3:G{last_row},"需加速培养")</f><v></v></c>')
    rows.append('    </row>')
    rows.append('  </sheetData>')
    rows.append('  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>')
    rows.append('</worksheet>')
    return '\n'.join(rows)

# ============================================================
# Sheet 4: 高潜人才发展计划表
# ============================================================
def build_high_potential_sheet(strings, filled=False):
    """Build 高潜人才发展计划表 worksheet XML"""
    title = 100
    basic_info = 101
    name = 102
    gender = 103
    age = 104
    education = 105
    join_date = 106
    current_position = 107
    potential_eval = 108
    eval_dim = 109
    score = 110
    suggestions = 111
    strategic = 112
    leadership = 113
    learning = 114
    change = 115
    business = 116
    smart_goal = 121
    goal_desc = 122
    specific = 123
    measurable = 124
    achievable = 125
    relevant = 126
    time_bound = 127
    development_path = 128
    challenging_task = 129
    rotation = 130
    training = 131
    mentoring = 132
    milestone = 133
    milestone_desc = 134
    plan_date = 135
    eval_method = 136

    rows = []
    rows.append('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>')
    rows.append('<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">')
    rows.append('  <sheetViews><sheetView tabSelected="1" workbookViewId="0"/></sheetViews>')
    rows.append('  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>')
    rows.append('  <cols>')
    rows.append('    <col min="1" max="1" width="18" customWidth="1"/>')
    rows.append('    <col min="2" max="2" width="14" customWidth="1"/>')
    rows.append('    <col min="3" max="3" width="14" customWidth="1"/>')
    rows.append('    <col min="4" max="4" width="14" customWidth="1"/>')
    rows.append('    <col min="5" max="5" width="14" customWidth="1"/>')
    rows.append('    <col min="6" max="6" width="14" customWidth="1"/>')
    rows.append('    <col min="7" max="7" width="20" customWidth="1"/>')
    rows.append('  </cols>')
    rows.append('  <sheetData>')
    rows.append(f'    <row r="1" ht="32" customHeight="1">')
    rows.append(f'      <c r="A1" t="s" s="4"><v>{title}</v></c>')
    rows.append('    </row>')
    rows.append(f'    <row r="2" ht="24" customHeight="1">')
    rows.append(f'      <c r="A2" t="s" s="4"><v>{basic_info}</v></c>')
    rows.append('    </row>')
    rows.append(f'    <row r="3" ht="20" customHeight="1">')
    rows.append(f'      <c r="A3" t="s" s="1"><v>{name}</v></c>')
    rows.append(f'      <c r="B3" t="s" s="1"><v>李明</v></c>')
    rows.append(f'      <c r="C3" t="s" s="1"><v>{gender}</v></c>')
    rows.append(f'      <c r="D3" t="s" s="1"><v>男</v></c>')
    rows.append(f'      <c r="E3" t="s" s="1"><v>{age}</v></c>')
    rows.append(f'      <c r="F3" s="9"><v>32</v></c>')
    rows.append('    </row>')
    rows.append(f'    <row r="4" ht="20" customHeight="1">')
    rows.append(f'      <c r="A4" t="s" s="1"><v>{education}</v></c>')
    rows.append(f'      <c r="B4" t="s" s="1"><v>硕士</v></c>')
    rows.append(f'      <c r="C4" t="s" s="1"><v>{join_date}</v></c>')
    rows.append(f'      <c r="D4" s="11"><v>2019-06-15</v></c>')
    rows.append(f'      <c r="E4" t="s" s="1"><v>{current_position}</v></c>')
    rows.append(f'      <c r="F4" t="s" s="1"><v>高级工程师</v></c>')
    rows.append('    </row>')
    rows.append(f'    <row r="6" ht="24" customHeight="1">')
    rows.append(f'      <c r="A6" t="s" s="4"><v>{potential_eval}</v></c>')
    rows.append('    </row>')
    rows.append(f'    <row r="7" ht="20" customHeight="1">')
    rows.append(f'      <c r="A7" t="s" s="4"><v>{eval_dim}</v></c>')
    rows.append(f'      <c r="B7" t="s" s="4"><v>{score}</v></c>')
    rows.append(f'      <c r="C7" t="s" s="4"><v>{suggestions}</v></c>')
    rows.append('    </row>')
    pot_dims = [
        (strategic, 5, "加强行业分析能力"),
        (leadership, 4, "提升团队管理技巧"),
        (learning, 5, "保持学习热情"),
        (change, 4, "更多参与变革项目"),
        (business, 4, "加深业务理解"),
    ]
    for i, (dim, sc, sug) in enumerate(pot_dims):
        row = 8 + i
        rows.append(f'    <row r="{row}" ht="20" customHeight="1">')
        rows.append(f'      <c r="A{row}" t="s" s="2"><v>{dim}</v></c>')
        rows.append(f'      <c r="B{row}" s="9"><v>{sc}</v></c>')
        rows.append(f'      <c r="C{row}" t="s" s="1"><v>{sug}</v></c>')
        rows.append('    </row>')
    avg_row = 8 + len(pot_dims)
    rows.append(f'    <row r="{avg_row}" ht="20" customHeight="1">')
    rows.append(f'      <c r="A{avg_row}" t="s" s="4"><v>平均分</v></c>')
    rows.append(f'      <c r="B{avg_row}" s="8"><f>AVERAGE(B8:B12)</f><v></v></c>')
    rows.append('    </row>')
    goal_row = avg_row + 2
    rows.append(f'    <row r="{goal_row}" ht="24" customHeight="1">')
    rows.append(f'      <c r="A{goal_row}" t="s" s="4"><v>{smart_goal}</v></c>')
    rows.append('    </row>')
    goal_header_row = goal_row + 1
    rows.append(f'    <row r="{goal_header_row}" ht="20" customHeight="1">')
    rows.append(f'      <c r="A{goal_header_row}" t="s" s="4"><v>{goal_desc}</v></c>')
    rows.append(f'      <c r="B{goal_header_row}" t="s" s="4"><v>{specific}</v></c>')
    rows.append(f'      <c r="C{goal_header_row}" t="s" s="4"><v>{measurable}</v></c>')
    rows.append(f'      <c r="D{goal_header_row}" t="s" s="4"><v>{achievable}</v></c>')
    rows.append(f'      <c r="E{goal_header_row}" t="s" s="4"><v>{relevant}</v></c>')
    rows.append(f'      <c r="F{goal_header_row}" t="s" s="4"><v>{time_bound}</v></c>')
    rows.append('    </row>')
    goal_content_row = goal_header_row + 1
    rows.append(f'    <row r="{goal_content_row}" ht="40" customHeight="1">')
    rows.append(f'      <c r="A{goal_content_row}" t="s" s="1"><v>12个月内晋升为技术专家</v></c>')
    rows.append(f'      <c r="B{goal_content_row}" t="s" s="1"><v>主导2个核心项目</v></c>')
    rows.append(f'      <c r="C{goal_content_row}" t="s" s="1"><v>KPI达到A级</v></c>')
    rows.append(f'      <c r="D{goal_content_row}" t="s" s="1"><v>能力评估达标</v></c>')
    rows.append(f'      <c r="E{goal_content_row}" t="s" s="1"><v>与业务战略对齐</v></c>')
    rows.append(f'      <c r="F{goal_content_row}" s="11"><v>2027-08-30</v></c>')
    rows.append('    </row>')
    path_row = goal_content_row + 2
    rows.append(f'    <row r="{path_row}" ht="24" customHeight="1">')
    rows.append(f'      <c r="A{path_row}" t="s" s="4"><v>{development_path}</v></c>')
    rows.append('    </row>')
    path_header_row = path_row + 1
    rows.append(f'    <row r="{path_header_row}" ht="20" customHeight="1">')
    rows.append(f'      <c r="A{path_header_row}" t="s" s="4"><v>发展方式</v></c>')
    rows.append(f'      <c r="B{path_header_row}" t="s" s="4"><v>具体计划</v></c>')
    rows.append(f'      <c r="C{path_header_row}" t="s" s="4"><v>时间节点</v></c>')
    rows.append(f'      <c r="D{path_header_row}" t="s" s="4"><v>{eval_method}</v></c>')
    rows.append('    </row>')
    paths = [
        (challenging_task, "主导智慧工厂数字化转型项目", "2026-Q3", "项目成果评估"),
        (rotation, "产品部轮岗3个月", "2026-Q4", "轮岗考核"),
        (training, "参加领导力培训课程", "2026-Q4", "培训结业证书"),
        (mentoring, "张总作为导师一对一辅导", "持续进行", "季度回顾"),
    ]
    for i, (ptype, plan, date, method) in enumerate(paths):
        row = path_header_row + 1 + i
        rows.append(f'    <row r="{row}" ht="20" customHeight="1">')
        rows.append(f'      <c r="A{row}" t="s" s="2"><v>{ptype}</v></c>')
        rows.append(f'      <c r="B{row}" t="s" s="1"><v>{plan}</v></c>')
        rows.append(f'      <c r="C{row}" t="s" s="1"><v>{date}</v></c>')
        rows.append(f'      <c r="D{row}" t="s" s="1"><v>{method}</v></c>')
        rows.append('    </row>')
    rows.append('  </sheetData>')
    rows.append('  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>')
    rows.append('</worksheet>')
    return '\n'.join(rows)

# ============================================================
# Sheet 5: 人才盘点年度日历
# ============================================================
def build_calendar_sheet(strings, filled=False):
    """Build 人才盘点年度日历 worksheet XML"""
    title = 150
    year = 151
    month = 152
    months = [153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164]
    plan = 165
    tracking = 166
    key_node = 167
    responsible = 168
    plan_content = 169
    completion = 170
    started = 171
    in_progress = 172
    completed_status = 173
    delayed = 174
    pending = 69

    rows = []
    rows.append('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>')
    rows.append('<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">')
    rows.append('  <sheetViews><sheetView tabSelected="1" workbookViewId="0"/></sheetViews>')
    rows.append('  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>')
    rows.append('  <cols>')
    rows.append('    <col min="1" max="1" width="20" customWidth="1"/>')
    for i in range(2, 14):
        rows.append(f'    <col min="{i}" max="{i}" width="12" customWidth="1"/>')
    rows.append('  </cols>')
    rows.append('  <sheetData>')
    rows.append(f'    <row r="1" ht="32" customHeight="1">')
    rows.append(f'      <c r="A1" t="s" s="4"><v>{title}</v></c>')
    rows.append('    </row>')
    rows.append(f'    <row r="2" ht="20" customHeight="1">')
    rows.append(f'      <c r="A2" t="s" s="1"><v>{year}</v></c>')
    rows.append(f'      <c r="B2" s="11"><v>2026</v></c>')
    rows.append('    </row>')
    rows.append(f'    <row r="3" ht="20" customHeight="1">')
    rows.append(f'      <c r="A3" t="s" s="4"><v>{month}</v></c>')
    for i, m in enumerate(months):
        col = chr(66 + i)
        rows.append(f'      <c r="{col}3" t="s" s="4"><v>{m}</v></c>')
    rows.append('    </row>')
    rows.append(f'    <row r="4" ht="20" customHeight="1">')
    rows.append(f'      <c r="A4" t="s" s="4"><v>{plan}</v></c>')
    plans = [
        "人才盘点启动", "", "九宫格评估", "", "继任计划制定", "",
        "发展计划实施", "", "中期回顾", "", "盘点总结", "",
    ]
    for i, pl in enumerate(plans):
        col = chr(66 + i)
        if pl:
            rows.append(f'      <c r="{col}4" t="s" s="1"><v>{pl}</v></c>')
        else:
            rows.append(f'      <c r="{col}4"/>')
    rows.append('    </row>')
    rows.append(f'    <row r="5" ht="20" customHeight="1">')
    rows.append(f'      <c r="A5" t="s" s="4"><v>{tracking}</v></c>')
    if filled:
        trackings = [
            completed_status, "", in_progress, "", pending, "",
            in_progress, "", in_progress, "", pending, "",
        ]
        status_styles = {
            completed_status: 8,
            in_progress: 12,
            pending: 1,
        }
        for i, tr in enumerate(trackings):
            col = chr(66 + i)
            if tr:
                st = status_styles.get(tr, 1)
                rows.append(f'      <c r="{col}5" t="s" s="{st}"><v>{tr}</v></c>')
            else:
                rows.append(f'      <c r="{col}5"/>')
    rows.append('    </row>')
    rows.append(f'    <row r="7" ht="22" customHeight="1">')
    rows.append(f'      <c r="A7" t="s" s="4"><v>{key_node}</v></c>')
    rows.append('    </row>')
    rows.append(f'    <row r="8" ht="20" customHeight="1">')
    rows.append(f'      <c r="A8" t="s" s="4"><v>{plan_content}</v></c>')
    rows.append(f'      <c r="B8" t="s" s="4"><v>时间</v></c>')
    rows.append(f'      <c r="C8" t="s" s="4"><v>{responsible}</v></c>')
    rows.append(f'      <c r="D8" t="s" s="4"><v>{completion}</v></c>')
    rows.append('    </row>')
    milestones = [
        ("年度人才盘点启动大会", "1月", "张总", started),
        ("全员九宫格评估完成", "3月", "HR陈静", completed_status),
        ("继任计划确认", "5月", "张总", in_progress),
        ("核心人才培养启动", "6月", "HR陈静", pending),
        ("年中盘点与计划调整", "7月", "张总", pending),
        ("年度盘点总结报告", "12月", "张总", pending),
    ]
    for i, (content, date, resp, stat) in enumerate(milestones):
        row = 9 + i
        rows.append(f'    <row r="{row}" ht="20" customHeight="1">')
        rows.append(f'      <c r="A{row}" t="s" s="1"><v>{content}</v></c>')
        rows.append(f'      <c r="B{row}" t="s" s="1"><v>{date}</v></c>')
        rows.append(f'      <c r="C{row}" t="s" s="1"><v>{resp}</v></c>')
        rows.append(f'      <c r="D{row}" t="s" s="12"><v>{stat}</v></c>')
        rows.append('    </row>')
    rows.append('  </sheetData>')
    rows.append('  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>')
    rows.append('</worksheet>')
    return '\n'.join(rows)

# ============================================================
# Sheet 6: 梯队建设进度追踪表
# ============================================================
def build_pipeline_sheet(strings, filled=False):
    """Build 梯队建设进度追踪表 worksheet XML"""
    title = 180
    tier = 181
    key_positions = 182
    in_place = 183
    reserve = 184
    vacant = 185
    progress = 186
    risk = 187
    tier1 = 188
    tier2 = 189
    tier3 = 190
    tier4 = 191
    high_risk = 192
    medium_risk = 193
    low_risk = 194
    position_name = 195
    current_holder = 196
    measures = 197

    rows = []
    rows.append('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>')
    rows.append('<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">')
    rows.append('  <sheetViews><sheetView tabSelected="1" workbookViewId="0"/></sheetViews>')
    rows.append('  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>')
    rows.append('  <cols>')
    rows.append('    <col min="1" max="1" width="22" customWidth="1"/>')
    rows.append('    <col min="2" max="2" width="14" customWidth="1"/>')
    rows.append('    <col min="3" max="3" width="14" customWidth="1"/>')
    rows.append('    <col min="4" max="4" width="14" customWidth="1"/>')
    rows.append('    <col min="5" max="5" width="14" customWidth="1"/>')
    rows.append('    <col min="6" max="6" width="14" customWidth="1"/>')
    rows.append('    <col min="7" max="7" width="14" customWidth="1"/>')
    rows.append('  </cols>')
    rows.append('  <sheetData>')
    rows.append(f'    <row r="1" ht="32" customHeight="1">')
    rows.append(f'      <c r="A1" t="s" s="4"><v>{title}</v></c>')
    rows.append('    </row>')
    rows.append(f'    <row r="2" ht="22" customHeight="1">')
    rows.append(f'      <c r="A2" t="s" s="4"><v>{tier}</v></c>')
    rows.append(f'      <c r="B2" t="s" s="4"><v>{key_positions}</v></c>')
    rows.append(f'      <c r="C2" t="s" s="4"><v>{in_place}</v></c>')
    rows.append(f'      <c r="D2" t="s" s="4"><v>{reserve}</v></c>')
    rows.append(f'      <c r="E2" t="s" s="4"><v>{vacant}</v></c>')
    rows.append(f'      <c r="F2" t="s" s="4"><v>{progress}</v></c>')
    rows.append(f'      <c r="G2" t="s" s="4"><v>{risk}</v></c>')
    rows.append('    </row>')
    tier_data = [
        (tier1, 5, 3, 2, 0, medium_risk),
        (tier2, 12, 7, 4, 1, high_risk),
        (tier3, 25, 18, 5, 2, low_risk),
        (tier4, 40, 30, 8, 2, low_risk),
    ]
    for i, (t, kp, ip, rs, vc, rk) in enumerate(tier_data):
        row = 3 + i
        rows.append(f'    <row r="{row}" ht="20" customHeight="1">')
        rows.append(f'      <c r="A{row}" t="s" s="2"><v>{t}</v></c>')
        rows.append(f'      <c r="B{row}" s="9"><v>{kp}</v></c>')
        rows.append(f'      <c r="C{row}" s="9"><v>{ip}</v></c>')
        rows.append(f'      <c r="D{row}" s="9"><v>{rs}</v></c>')
        rows.append(f'      <c r="E{row}" s="9"><v>{vc}</v></c>')
        rows.append(f'      <c r="F{row}" s="8"><f>(C{row}+D{row})/B{row}</f><v></v></c>')
        risk_style = 12 if rk == high_risk else (1 if rk == medium_risk else 8)
        rows.append(f'      <c r="G{row}" t="s" s="{risk_style}"><v>{rk}</v></c>')
        rows.append('    </row>')
    total_row = 3 + len(tier_data)
    rows.append(f'    <row r="{total_row}" ht="24" customHeight="1">')
    rows.append(f'      <c r="A{total_row}" t="s" s="4"><v>合计</v></c>')
    rows.append(f'      <c r="B{total_row}" s="10"><f>SUM(B3:B{total_row-1})</f><v></v></c>')
    rows.append(f'      <c r="C{total_row}" s="10"><f>SUM(C3:C{total_row-1})</f><v></v></c>')
    rows.append(f'      <c r="D{total_row}" s="10"><f>SUM(D3:D{total_row-1})</f><v></v></c>')
    rows.append(f'      <c r="E{total_row}" s="10"><f>SUM(E3:E{total_row-1})</f><v></v></c>')
    rows.append(f'      <c r="F{total_row}" s="8"><f>(C{total_row}+D{total_row})/B{total_row}</f><v></v></c>')
    rows.append('    </row>')
    detail_row = total_row + 2
    rows.append(f'    <row r="{detail_row}" ht="24" customHeight="1">')
    rows.append(f'      <c r="A{detail_row}" t="s" s="4"><v>关键岗位详情</v></c>')
    rows.append('    </row>')
    detail_header_row = detail_row + 1
    rows.append(f'    <row r="{detail_header_row}" ht="20" customHeight="1">')
    rows.append(f'      <c r="A{detail_header_row}" t="s" s="4"><v>{position_name}</v></c>')
    rows.append(f'      <c r="B{detail_header_row}" t="s" s="4"><v>{current_holder}</v></c>')
    rows.append(f'      <c r="C{detail_header_row}" t="s" s="4"><v>{tier}</v></c>')
    rows.append(f'      <c r="D{detail_header_row}" t="s" s="4"><v>{risk}</v></c>')
    rows.append(f'      <c r="E{detail_header_row}" t="s" s="4"><v>{measures}</v></c>')
    rows.append('    </row>')
    details = [
        ("技术总监", "张明", tier1, high_risk, "加快继任者培养"),
        ("产品总监", "刘芳", tier1, medium_risk, "安排轮岗学习"),
        ("运营总监", "陈静", tier1, high_risk, "急需外部招聘"),
        ("财务总监", "李娜", tier1, low_risk, "继任者已就位"),
    ]
    for i, (pos, holder, t, rk, meas) in enumerate(details):
        row = detail_header_row + 1 + i
        rows.append(f'    <row r="{row}" ht="20" customHeight="1">')
        rows.append(f'      <c r="A{row}" t="s" s="1"><v>{pos}</v></c>')
        rows.append(f'      <c r="B{row}" t="s" s="1"><v>{holder}</v></c>')
        rows.append(f'      <c r="C{row}" t="s" s="1"><v>{t}</v></c>')
        risk_style = 12 if rk == high_risk else (1 if rk == medium_risk else 8)
        rows.append(f'      <c r="D{row}" t="s" s="{risk_style}"><v>{rk}</v></c>')
        rows.append(f'      <c r="E{row}" t="s" s="1"><v>{meas}</v></c>')
        rows.append('    </row>')
    rows.append('  </sheetData>')
    rows.append('  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>')
    rows.append('</worksheet>')
    return '\n'.join(rows)

# ============================================================
# Main build functions
# ============================================================

def build_version(filled=False):
    """Build either blank or filled version"""
    version_name = "配套表单_填好版" if filled else "配套表单_空表"
    print(f"Building {version_name}...")

    work_dir = f"{WORK_DIR}/{version_name}"

    # Copy template
    os.makedirs(work_dir, exist_ok=True)
    src = f"{SKILL_DIR}/templates/minimal_xlsx"
    for item in os.listdir(src):
        s = os.path.join(src, item)
        d = os.path.join(work_dir, item)
        if os.path.isdir(s):
            if os.path.exists(d):
                shutil.rmtree(d)
            shutil.copytree(s, d)
        else:
            shutil.copy2(s, d)

    strings = get_shared_strings()
    sheet_names = [
        "九宫格人才评估表",
        "人才盘点会议记录表",
        "关键岗位继任地图",
        "高潜人才发展计划表",
        "人才盘点年度日历",
        "梯队建设进度追踪表",
    ]

    # Write sharedStrings.xml
    shared_strings_path = f"{work_dir}/xl/sharedStrings.xml"
    with open(shared_strings_path, 'w', encoding='utf-8') as f:
        f.write(build_shared_strings_xml(strings))

    # Write workbook.xml
    workbook_path = f"{work_dir}/xl/workbook.xml"
    with open(workbook_path, 'w', encoding='utf-8') as f:
        f.write(build_workbook_xml(sheet_names))

    # Write workbook.xml.rels
    rels_path = f"{work_dir}/xl/_rels/workbook.xml.rels"
    with open(rels_path, 'w', encoding='utf-8') as f:
        f.write(build_workbook_rels_xml(len(sheet_names)))

    # Write [Content_Types].xml
    ct_path = f"{work_dir}/[Content_Types].xml"
    with open(ct_path, 'w', encoding='utf-8') as f:
        f.write(build_content_types_xml(len(sheet_names)))

    # Write each sheet
    sheet_builders = [
        build_nine_box_sheet,
        build_meeting_sheet,
        build_succession_sheet,
        build_high_potential_sheet,
        build_calendar_sheet,
        build_pipeline_sheet,
    ]

    for i, builder in enumerate(sheet_builders):
        sheet_path = f"{work_dir}/xl/worksheets/sheet{i+1}.xml"
        with open(sheet_path, 'w', encoding='utf-8') as f:
            f.write(builder(strings, filled=filled))
        print(f"  Created sheet {i+1}: {sheet_names[i]}")

    # Pack to xlsx
    output_path = f"{OUTPUT_DIR}/{version_name}.xlsx"
    create_zip(work_dir, output_path)
    print(f"{version_name} saved: {output_path}")

if __name__ == "__main__":
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    os.makedirs(WORK_DIR, exist_ok=True)

    build_version(filled=False)
    build_version(filled=True)

    print("\nAll Excel files created successfully!")
    print(f"Output directory: {OUTPUT_DIR}")
