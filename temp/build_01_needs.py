#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import os
import shutil
import subprocess
import xml.sax.saxutils as saxutils

TEMPLATE = 'C:/Users/Administrator/.claude/skills/Excel表格处理/templates/minimal_xlsx'
WORK = '/tmp/xlsx_01_final'
OUT = 'D:/新课开发/专精特新/10政府关系与政策资源对接专精特新认定与产业基金经营/成果demo/01_需求分析.xlsx'

# Clean start
if os.path.exists(WORK):
    shutil.rmtree(WORK)
shutil.copytree(TEMPLATE, WORK)

# All strings for all sheets - use unique list to avoid index issues
# Each string appears exactly once in sharedStrings, data references by index
all_sheet1_strings = [
    "学员基本信息",
    "序号", "姓名", "部门", "职级", "入职时间", "学历", "参与次数", "主持次数", "备注",
    "李明华", "制造部", "P6", "2025-12", "本科", "8", "1", "前IT转产品,申报时经常被技术细节困住",
    "张磊", "研发部", "P5", "2025-11", "硕士", "6", "0", "985硕士,逻辑强但政策敏感度偏弱",
    "王芳", "财务部", "P5", "2025-10", "本科", "7", "2", "财务出身,熟悉财务指标但不懂技术描述",
    "刘强", "战略部", "P6", "2025-09", "本科", "12", "3", "资深经历,申报成功率最高但总觉得还能更高",
    "陈伟", "销售部", "P5", "2026-01", "本科", "4", "0", "校招新人,第一次接触政策申报",
    "周杰", "研发部", "P6", "2025-08", "硕士", "15", "4", "老员工,参与过多个项目申报经验",
    "吴静", "管理部", "P5", "2025-12", "本科", "5", "0", "管培生,汇报沟通能力强但缺乏实操",
    "郑鑫", "制造部", "P5", "2026-02", "本科", "3", "0", "新晋升,需要系统学习申报流程",
    "孙颖", "财务部", "P6", "2025-09", "硕士", "10", "2", "财务专家,对政策资金使用有独到见解",
    "黄山", "战略部", "P5", "2025-11", "本科", "6", "1", "对政策有兴趣,希望深入了解政府关系",
    "林霞", "销售部", "P5", "2025-12", "本科", "5", "0", "业务出身,希望拓展企业资源渠道",
    "何涛", "研发部", "P5", "2026-01", "本科", "4", "0", "技术背景,担心申报材料写不好技术部分",
]

all_sheet2_strings = [
    "使用痛点分析",
    "序号", "痛点分类", "当前痛点(业务场景)", "痛点描述", "期望解决(可测量)", "对课程的期待", "过往培训经历", "备注",
    "信息获取", "政策信息获取不及时,不知道在哪查政策", "建立政策库订阅+定向推送机制", "希望有政策库操作指南", "之前企业培训偏流程讲解", "重点是信息获取渠道",
    "材料编写", "申报材料不知道怎么做,PRD写好后不知道怎么描述", "能独立完成专精特新申报材料的初稿", "希望有模板参考", "参加过PMP培训结构化思维强", "重点是模板和写作框架",
    "政府关系", "不知道怎么维护政府关系,经信局科技局不知道怎么联系", "建立政府关系的日常维护机制", "希望有具体方法论", "没参加过此类培训缺乏政府关系经验", "重点是关系建立和维护方法",
    "现场答辩", "现场答辩时紧张,被问到技术问题就慌", "能自信应对答辩专家提问", "希望有答辩模拟练习", "公司内部分享听过", "没有实战演练",
    "指标解读", "专精特新指标看不懂,创新能力研发投入不知道如何计算", "能准确计算并优化企业指标", "希望有计算工具和方法", "财务培训有涉及需要结合政策理解", "重点是计算方法和优化策略",
    "时间管理", "申报时间节点不清楚,不知道什么时候该准备什么", "掌握申报全流程时间节点", "希望有甘特图模板", "参加过项目管理培训有基础", "重点是甘特图和节点管理",
    "跨部门协调", "申报需要多部门配合,不知道怎么协调研发财务销售", "能在申报中有效协调各部门", "希望有协调话术", "公司战略规划会议参与需要实操练习", "重点是协调机制和沟通话术",
    "合规要求", "对政策合规要求理解偏差,担心材料不符合要求被查", "准确理解合规要求并规避风险", "希望有合规检查清单", "参加过合规培训理论基础有", "需要合规检查清单",
    "后续维护", "认定后不知道怎么维护,认定后就忘了", "建立认定后持续维护机制", "希望有维护提醒工具", "没系统培训过需要流程化", "重点是维护流程和提醒工具",
    "资金使用", "政策资金不知道怎么用,怕用错被收回", "合规使用政策资金并发挥最大效益", "希望有资金使用指南", "财务培训涉及部分实操经验不足", "重点是合规使用和效益最大化",
    "竞争对手分析", "不知道同行申报情况,竞争对手可能已经认定我们还没", "了解竞争对手申报动态", "希望有信息渠道", "市场分析培训有需要结合政策", "重点是信息渠道和分析方法",
    "危机处理", "申报被打回不知道怎么办,材料被打回就慌了", "冷静处理申报被拒情况", "希望有应对话术", "没遇到过这种情况需要预案学习", "重点是应对话术和心理准备",
]

all_sheet3_strings = [
    "痛点统计（课程内容优先级）",
    "痛点分类", "频次", "占比", "课程内容侧重",
    "信息获取", "3", "25%", "重点:政策渠道+信息订阅",
    "材料编写", "3", "25%", "重点:模板+写作框架",
    "政府关系", "2", "17%", "重点:关系建立+维护方法",
    "现场答辩", "1", "8%", "重点:答辩模拟+话术",
    "指标解读", "1", "8%", "重点:计算方法+优化策略",
    "时间管理", "1", "8%", "重点:甘特图+节点管理",
    "跨部门协调", "1", "8%", "重点:协调机制+沟通话术",
    "合计", "12", "100%", "—",
]

all_sheet4_strings = [
    "成功标准(可测量)",
    "维度", "衡量指标", "评估方式", "目标值",
    "反应层", "学员对课程的满意度评分", "课后即时评分", ">= 4.5 分",
    "学习层", "学员能独立讲出专精特新申报5步流程", "课后10分钟小测", ">= 80% 得分",
    "行为层", "学员2周内能提交一份完整的申报材料初稿", "材料提交+同伴评审", ">= 75% 完成",
    "行为层", "学员1周内建立政策信息监测机制", "提交监测方案", ">= 80% 提交",
    "结果层", "2个月后企业获得专精特新认定", "政府公开名单确认", "认定数量提升30%",
    "结果层", "2个月后政策资金使用合规率提升", "财务审计报告", "合规率100%",
]

# Combine all strings with offsets
strings = []
sheet1_offset = 0
sheet2_offset = len(all_sheet1_strings)
sheet3_offset = sheet2_offset + len(all_sheet2_strings)
sheet4_offset = sheet3_offset + len(all_sheet3_strings)

strings.extend(all_sheet1_strings)
strings.extend(all_sheet2_strings)
strings.extend(all_sheet3_strings)
strings.extend(all_sheet4_strings)

count = len(strings)
print(f"Total strings: {count}")

# Build sharedStrings.xml
ss_lines = ['<?xml version="1.0" encoding="UTF-8" standalone="yes"?>']
ss_lines.append(f'<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="{count}" uniqueCount="{count}">')
for s in strings:
    ss_lines.append(f'  <si><t>{saxutils.escape(s)}</t></si>')
ss_lines.append('</sst>')

with open(f'{WORK}/xl/sharedStrings.xml', 'w', encoding='utf-8') as f:
    f.write('\n'.join(ss_lines))

# Create string index helper
str_idx = {s: i for i, s in enumerate(strings)}
print(f"String index built: {len(str_idx)} strings")

# Update workbook.xml for 4 sheets
wb_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheets>
    <sheet name="01_学员基本信息" sheetId="1" r:id="rId1"/>
    <sheet name="02_使用痛点" sheetId="2" r:id="rId4"/>
    <sheet name="03_痛点统计" sheetId="3" r:id="rId5"/>
    <sheet name="04_成功标准" sheetId="4" r:id="rId6"/>
  </sheets>
  <calcPr calcId="0"/>
</workbook>'''
with open(f'{WORK}/xl/workbook.xml', 'w', encoding='utf-8') as f:
    f.write(wb_xml)

# Update workbook.xml.rels
wb_rels = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
  <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml"/>
  <Relationship Id="rId4" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet2.xml"/>
  <Relationship Id="rId5" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet3.xml"/>
  <Relationship Id="rId6" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet4.xml"/>
</Relationships>'''
with open(f'{WORK}/xl/_rels/workbook.xml.rels', 'w', encoding='utf-8') as f:
    f.write(wb_rels)

# Update Content_Types.xml
ct_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
  <Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet2.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet3.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet4.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>
  <Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/>
</Types>'''
with open(f'{WORK}/[Content_Types].xml', 'w', encoding='utf-8') as f:
    f.write(ct_xml)


def make_sheet_data(title_row, header_row, data_rows):
    """Create a sheet XML with title, header, and data rows"""
    rows = []
    r = 1
    # Title row (merged, bold)
    rows.append(f'<row r="{r}" ht="22" customHeight="1">')
    for c in range(len(header_row)):
        col_letter = chr(65 + c)
        rows.append(f'  <c r="{col_letter}{r}" t="s" s="4"><v>{str_idx[title_row]}</v></c>')
    rows.append('</row>')
    r = 2
    # Header row
    rows.append(f'<row r="{r}" ht="18" customHeight="1">')
    for c, h in enumerate(header_row):
        col_letter = chr(65 + c)
        rows.append(f'  <c r="{col_letter}{r}" t="s" s="4"><v>{str_idx[h]}</v></c>')
    rows.append('</row>')
    # Data rows
    for row_data in data_rows:
        r += 1
        rows.append(f'<row r="{r}">')
        for c, val in enumerate(row_data):
            col_letter = chr(65 + c)
            if isinstance(val, str):
                rows.append(f'  <c r="{col_letter}{r}" t="s"><v>{str_idx[val]}</v></c>')
            else:
                rows.append(f'  <c r="{col_letter}{r}"><v>{val}</v></c>')
        rows.append('</row>')
    return '\n'.join(rows)


def create_sheet_xml(title, header, data, col_widths):
    content = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView workbookViewId="0"/>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols>
'''
    for i, w in enumerate(col_widths, 1):
        content += f'    <col min="{i}" max="{i}" width="{w}" customWidth="1"/>\n'
    content += '  </cols>\n  <sheetData>\n'
    content += make_sheet_data(title, header, data)
    content += '\n  </sheetData>\n  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>\n</worksheet>'
    return content


# Sheet 1 data
sheet1_data = [
    [1, "李明华", "制造部", "P6", "2025-12", "本科", 8, 1, "前IT转产品,申报时经常被技术细节困住"],
    [2, "张磊", "研发部", "P5", "2025-11", "硕士", 6, 0, "985硕士,逻辑强但政策敏感度偏弱"],
    [3, "王芳", "财务部", "P5", "2025-10", "本科", 7, 2, "财务出身,熟悉财务指标但不懂技术描述"],
    [4, "刘强", "战略部", "P6", "2025-09", "本科", 12, 3, "资深经历,申报成功率最高但总觉得还能更高"],
    [5, "陈伟", "销售部", "P5", "2026-01", "本科", 4, 0, "校招新人,第一次接触政策申报"],
    [6, "周杰", "研发部", "P6", "2025-08", "硕士", 15, 4, "老员工,参与过多个项目申报经验"],
    [7, "吴静", "管理部", "P5", "2025-12", "本科", 5, 0, "管培生,汇报沟通能力强但缺乏实操"],
    [8, "郑鑫", "制造部", "P5", "2026-02", "本科", 3, 0, "新晋升,需要系统学习申报流程"],
    [9, "孙颖", "财务部", "P6", "2025-09", "硕士", 10, 2, "财务专家,对政策资金使用有独到见解"],
    [10, "黄山", "战略部", "P5", "2025-11", "本科", 6, 1, "对政策有兴趣,希望深入了解政府关系"],
    [11, "林霞", "销售部", "P5", "2025-12", "本科", 5, 0, "业务出身,希望拓展企业资源渠道"],
    [12, "何涛", "研发部", "P5", "2026-01", "本科", 4, 0, "技术背景,担心申报材料写不好技术部分"],
]

with open(f'{WORK}/xl/worksheets/sheet1.xml', 'w', encoding='utf-8') as f:
    f.write(create_sheet_xml(
        "学员基本信息",
        ["序号", "姓名", "部门", "职级", "入职时间", "学历", "参与次数", "主持次数", "备注"],
        sheet1_data,
        [8, 10, 10, 6, 10, 6, 8, 8, 35]
    ))
print("Sheet 1 created")

# Sheet 2 data
sheet2_data = [
    [1, "信息获取", "政策信息获取不及时,不知道在哪查政策", "建立政策库订阅+定向推送机制", "希望有政策库操作指南", "之前企业培训偏流程讲解", "重点是信息获取渠道"],
    [2, "材料编写", "申报材料不知道怎么做,PRD写好后不知道怎么描述", "能独立完成专精特新申报材料的初稿", "希望有模板参考", "参加过PMP培训结构化思维强", "重点是模板和写作框架"],
    [3, "政府关系", "不知道怎么维护政府关系,经信局科技局不知道怎么联系", "建立政府关系的日常维护机制", "希望有具体方法论", "没参加过此类培训缺乏政府关系经验", "重点是关系建立和维护方法"],
    [4, "现场答辩", "现场答辩时紧张,被问到技术问题就慌", "能自信应对答辩专家提问", "希望有答辩模拟练习", "公司内部分享听过", "没有实战演练"],
    [5, "指标解读", "专精特新指标看不懂,创新能力研发投入不知道如何计算", "能准确计算并优化企业指标", "希望有计算工具和方法", "财务培训有涉及需要结合政策理解", "重点是计算方法和优化策略"],
    [6, "时间管理", "申报时间节点不清楚,不知道什么时候该准备什么", "掌握申报全流程时间节点", "希望有甘特图模板", "参加过项目管理培训有基础", "重点是甘特图和节点管理"],
    [7, "跨部门协调", "申报需要多部门配合,不知道怎么协调研发财务销售", "能在申报中有效协调各部门", "希望有协调话术", "公司战略规划会议参与需要实操练习", "重点是协调机制和沟通话术"],
    [8, "合规要求", "对政策合规要求理解偏差,担心材料不符合要求被查", "准确理解合规要求并规避风险", "希望有合规检查清单", "参加过合规培训理论基础有", "需要合规检查清单"],
    [9, "后续维护", "认定后不知道怎么维护,认定后就忘了", "建立认定后持续维护机制", "希望有维护提醒工具", "没系统培训过需要流程化", "重点是维护流程和提醒工具"],
    [10, "资金使用", "政策资金不知道怎么用,怕用错被收回", "合规使用政策资金并发挥最大效益", "希望有资金使用指南", "财务培训涉及部分实操经验不足", "重点是合规使用和效益最大化"],
    [11, "竞争对手分析", "不知道同行申报情况,竞争对手可能已经认定我们还没", "了解竞争对手申报动态", "希望有信息渠道", "市场分析培训有需要结合政策", "重点是信息渠道和分析方法"],
    [12, "危机处理", "申报被打回不知道怎么办,材料被打回就慌了", "冷静处理申报被拒情况", "希望有应对话术", "没遇到过这种情况需要预案学习", "重点是应对话术和心理准备"],
]

with open(f'{WORK}/xl/worksheets/sheet2.xml', 'w', encoding='utf-8') as f:
    f.write(create_sheet_xml(
        "使用痛点分析",
        ["序号", "痛点分类", "当前痛点(业务场景)", "痛点描述", "期望解决(可测量)", "对课程的期待", "过往培训经历", "备注"],
        sheet2_data,
        [6, 12, 35, 30, 30, 25, 25, 25]
    ))
print("Sheet 2 created")

# Sheet 3 data
sheet3_data = [
    ["信息获取", 3, "25%", "重点:政策渠道+信息订阅"],
    ["材料编写", 3, "25%", "重点:模板+写作框架"],
    ["政府关系", 2, "17%", "重点:关系建立+维护方法"],
    ["现场答辩", 1, "8%", "重点:答辩模拟+话术"],
    ["指标解读", 1, "8%", "重点:计算方法+优化策略"],
    ["时间管理", 1, "8%", "重点:甘特图+节点管理"],
    ["跨部门协调", 1, "8%", "重点:协调机制+沟通话术"],
    ["合计", 12, "100%", "—"],
]

with open(f'{WORK}/xl/worksheets/sheet3.xml', 'w', encoding='utf-8') as f:
    f.write(create_sheet_xml(
        "痛点统计（课程内容优先级）",
        ["痛点分类", "频次", "占比", "课程内容侧重"],
        sheet3_data,
        [15, 8, 10, 30]
    ))
print("Sheet 3 created")

# Sheet 4 data
sheet4_data = [
    ["反应层", "学员对课程的满意度评分", "课后即时评分", ">= 4.5 分"],
    ["学习层", "学员能独立讲出专精特新申报5步流程", "课后10分钟小测", ">= 80% 得分"],
    ["行为层", "学员2周内能提交一份完整的申报材料初稿", "材料提交+同伴评审", ">= 75% 完成"],
    ["行为层", "学员1周内建立政策信息监测机制", "提交监测方案", ">= 80% 提交"],
    ["结果层", "2个月后企业获得专精特新认定", "政府公开名单确认", "认定数量提升30%"],
    ["结果层", "2个月后政策资金使用合规率提升", "财务审计报告", "合规率100%"],
]

with open(f'{WORK}/xl/worksheets/sheet4.xml', 'w', encoding='utf-8') as f:
    f.write(create_sheet_xml(
        "成功标准(可测量)",
        ["维度", "衡量指标", "评估方式", "目标值"],
        sheet4_data,
        [10, 35, 20, 15]
    ))
print("Sheet 4 created")

# Pack the xlsx
result = subprocess.run([
    'python3', 'C:/Users/Administrator/.claude/skills/Excel表格处理/scripts/xlsx_pack.py',
    WORK, OUT
], capture_output=True, text=True)
print(f"Pack result: {result.returncode}")
if result.stderr:
    print(f"Stderr: {result.stderr[:500]}")

if os.path.exists(OUT):
    size = os.path.getsize(OUT)
    print(f"Created: {OUT} ({size} bytes)")
else:
    print("ERROR: File not created!")
