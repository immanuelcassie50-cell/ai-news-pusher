#!/usr/bin/env python3
import os, shutil, subprocess
SKILL_DIR = r"C:/Users/Administrator/.claude/skills/Excel表格处理"
TEMPLATE_DIR = SKILL_DIR + "/templates/minimal_xlsx"
OUTPUT_DIR = r"D:/新课开发/商业讲师/全域经营/完整课程包/06-工具表单"
TEMP_DIR = "/tmp/xlsx_build"

def copy_template(work_dir):
    if os.path.exists(work_dir): shutil.rmtree(work_dir)
    shutil.copytree(TEMPLATE_DIR, work_dir)

def run_builder(strings, out_path):
    r = subprocess.run(["python3", SKILL_DIR+"/scripts/shared_strings_builder.py"] + list(strings), capture_output=True, text=True)
    if r.returncode != 0: print("Builder error:", r.stderr); return False
    with open(out_path, "w", encoding="utf-8") as f: f.write(r.stdout)
    return True

def pack_xlsx(work_dir, out_path):
    r = subprocess.run(["python3", SKILL_DIR+"/scripts/xlsx_pack.py", work_dir, out_path], capture_output=True, text=True)
    if r.returncode != 0: print("Pack error:", r.stderr); return False
    print("Created:", out_path)
    return True

os.makedirs(TEMP_DIR, exist_ok=True)
os.makedirs(OUTPUT_DIR, exist_ok=True)

# FILE 1
work_dir = TEMP_DIR + '/f01'
copy_template(work_dir)

strings = [
    "全域经营自测诊断表",
    "请根据您企业的实际情况，选择最符合的选项（1=完全不符合，4=完全符合），系统将自动计算您企业所在的阶段。",
    "题号", "评估维度", "问题描述", "1分", "2分", "3分", "4分", "得分",
    "组织架构",
    "我们有一个跨部门的虚拟项目组来推进全域经营",
    "我们有一个正式的、专职的用户运营团队",
    "我们公司有专门的、由一把手授权的统筹协调机制",
    "我们有统一的数据中台或用户数据平台（CDP）",
    "部门协同",
    "各部门已有统一的用户数据标准和口径",
    "各部门使用同一套KPI或关联指标体系",
    "各部门会主动配合用户运营团队的工作",
    "我们有定期的跨部门协同会议或沟通机制",
    "运营能力",
    "我们已对用户进行分层并有针对性的运营策略",
    "我们已有统一的用户标签体系和画像系统",
    "我们在线上线下各触点提供一致的用户体验",
    "我们已有完整的用户生命周期管理体系",
    "总分", "您的企业处于：", "项目制阶段", "连点成线阶段", "全域融合阶段",
    "阶段说明",
    "项目制阶段：企业小步快跑试水，通常是临时拼凑的项目组，运营精细化程度低",
    "连点成线阶段：企业开始做用户分层精细化运营，有统一标签系统，用户运营团队成为有话语权的正式部门",
    "全域融合阶段：企业成立用户运营中心，搭建数据中台，各部门使用同一套KPI",
    "建议路径",
    "【项目制阶段】建议：①组建轻量化的虚拟项目团队；②选定一个具体场景快速验证；③明确一个负责人",
    "【连点成线阶段】建议：①将项目组升级为正式部门；②建立统一用户标签系统；③设计跨部门协同的考核机制",
    "【全域融合阶段】建议：①持续迭代数据中台；②深化跨部门KPI整合；③探索私域反哺公域的精准投放模型",
    "各阶段特征对照", "特征维度", "项目制阶段", "连点成线阶段", "全域融合阶段",
    "组织形态", "临时项目组，人员兼职", "正式用户运营部门，有话语权", "用户运营中心+数据中台",
    "数据基础", "无统一数据口径", "统一用户标签系统建立", "数据中台打通各部门数据",
    "KPI体系", "各部门独立核算", "关联指标体系建立", "统一KPI或共担指标",
    "跨部门协同", "需要配合时靠感情沟通", "有正式协同机制", "主动协同，利益共享",
    "用户运营深度", "成交为唯一目标", "用户分层精细化运营", "全生命周期管理",
    "诊断结果", "综合得分", "所在阶段", "核心建议", "下一步行动",
]
run_builder(strings, work_dir + "/xl/sharedStrings.xml")

# Workbook, rels, content types
workbook_xml = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><fileVersion appName="xl" lastEdited="7" lowestEdited="7"/><workbookPr defaultThemeVersion="166925"/><bookViews><workbookView xWindow="0" yWindow="0" windowWidth="20140" windowHeight="10960"/></bookViews><sheets><sheet name="企业阶段自测" sheetId="1" r:id="rId1"/><sheet name="各阶段特征对照" sheetId="2" r:id="rId4"/><sheet name="诊断结果与建议" sheetId="3" r:id="rId5"/></sheets><calcPr calcId="191029"/></workbook>'
with open(work_dir + "/xl/workbook.xml", "w", encoding="utf-8") as f:
    f.write(workbook_xml)

rels_xml = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/><Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml"/><Relationship Id="rId4" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet2.xml"/><Relationship Id="rId5" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet3.xml"/></Relationships>'
with open(work_dir + "/xl/_rels/workbook.xml.rels", "w", encoding="utf-8") as f:
    f.write(rels_xml)

ct_xml = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/><Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/><Override PartName="/xl/worksheets/sheet2.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/><Override PartName="/xl/worksheets/sheet3.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/><Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/><Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/></Types>'
with open(work_dir + "/[Content_Types].xml", "w", encoding="utf-8") as f:
    f.write(ct_xml)
print('XML configs written')
