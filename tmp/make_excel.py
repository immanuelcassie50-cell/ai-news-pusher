#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Build Excel files for 管理者的AI实战课"""
import os, shutil, subprocess, sys

SKILL = "C:/Users/Administrator/.claude/skills/Excel表格处理"
OUT = "D:/新课开发/管理者的AI课/管理者AI实战课制造业版教学文档/完整课程包/11_配套表单_Excel版"
os.makedirs(OUT, exist_ok=True)

def copy_tmpl():
    d = "/tmp/xb"
    shutil.rmtree(d, ignore_errors=True)
    shutil.copytree(f"{SKILL}/templates/minimal_xlsx/", d)
    return d

def pack(src, out):
    r = subprocess.run(["python3", f"{SKILL}/scripts/xlsx_pack.py", src, out], capture_output=True, text=True, encoding="utf-8", errors="replace")
    if r.returncode:
        print(f"PACK FAIL: {r.stderr[:200]}")
        return False
    v = subprocess.run(["python3", f"{SKILL}/scripts/formula_check.py", out], capture_output=True, text=True, encoding="utf-8", errors="replace")
    if v.returncode:
        print(f"VAL FAIL: {v.stderr[:200]}")
        return False
    print(f"  OK: {os.path.basename(out)}")
    return True

def xe(s):
    return s.replace("&","&amp;").replace("<","&lt;").replace(">","&gt;").replace('"',"&quot;")

def ss_xml(strings):
    ls = [f"  <si><t>{xe(s)}</t></si>" for s in strings]
    n = len(strings)
    return f'<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="{n}" uniqueCount="{n}">\n' + "\n".join(ls) + "\n</sst>"

def c(addr, val=None, s=0, t="s"):
    if val is None: return f'<c r="{addr}" s="{s}"/>'
    if t == "s": return f'<c r="{addr}" t="s" s="{s}"><v>{val}</v></c>'
    return f'<c r="{addr}" s="{s}"><v>{val}</v></c>'

def row(r, cells):
    return f"  <row r=\"{r}\">" + "".join(cells) + "</row>"

# === FILE 1 ===
def file1():
    d = copy_tmpl()
    S = [
        "序号","任务名称","重复度","判断复杂度","关系敏感度","AI可行性",
        "AI主导","AI辅助","人工为主","高","中","低","建议","实际做法",
        "使用说明","本表用于评估团队任务是否适合使用AI处理",
        "如何判断任务是否适合AI处理",
        "步骤一：评估重复度",
        "高重复度：日常周期性任务，如日报、周报、数据汇总",
        "中重复度：偶尔进行，如月度报告、季度总结",
        "低重复度：一次性或罕见任务",
        "步骤二：评估判断复杂度",
        "高复杂度：需要专业知识、经验判断或多方协调",
        "中复杂度：有一定规律但需人工确认",
        "低复杂度：简单判断或直接执行",
        "步骤三：评估关系敏感度",
        "高敏感度：涉及人际冲突、薪酬、绩效等敏感内容",
        "中敏感度：需要一定信任关系",
        "低敏感度：一般性工作沟通",
        "步骤四：综合判断",
        "AI主导：AI可独立完成80%以上的任务",
        "AI辅助：AI提供支持但需人工审核决策",
        "人工为主：AI仅作为辅助工具",
        "订单处理与跟进","生产日报汇总","库存盘点与预警","质量检验记录",
        "设备维护计划","员工考勤统计","周会/月会会议纪要","供应商沟通协调",
        "绩效面谈准备","流程改善提案","新员工入职引导","跨部门项目协调",
        "客户投诉处理","生产成本分析",
        "AI自动处理订单录入、状态更新、异常提醒","AI自动汇总各产线数据生成日报",
        "AI盘点库存但需人工核实异常项","AI辅助识别质量问题但需人工判定",
        "AI制定维护计划但需人工确认","系统自动打卡+AI汇总异常提醒",
        "AI录音转写+人工整理发布","AI整理供应商资料，人工进行核心谈判",
        "AI分析绩效数据生成报告，面谈人工主导","AI分析流程痛点但改善方案需人工定",
        "AI提供入职指南包，人工带教","AI辅助信息同步，冲突协调需人工",
        "AI初步分类和回复模板，人工处理复杂投诉","AI多维度成本分析，人工制定降本策略",
        "使用RPA+AI系统自动抓取邮件订单","AI系统自动提取MES数据生成报表",
        "AI生成盘点清单，人工复核差异","AI视觉检测初筛，人工确认最终结果",
        "AI基于设备数据生成维护建议，人工审批","AI自动统计考勤并生成报表",
        "AI生成初稿但需人工审核发布","AI仅辅助信息整理，核心沟通需人工",
        "AI辅助收集数据，面谈需人工进行","AI辅助提供信息，情感支持需人工",
        "AI辅助信息同步，冲突协调需人工","AI分类投诉但深度处理需人工",
        "AI分析数据但决策建议需人工",
    ]
    with open(f"{d}/xl/sharedStrings.xml", "w", encoding="utf-8") as f:
        f.write(ss_xml(S))

    tasks = [
        (1,"订单处理与跟进","高","低","低","AI主导",31,72),
        (2,"生产日报汇总","高","低","低","AI主导",32,73),
        (3,"库存盘点与预警","高","中","低","AI辅助",33,74),
        (4,"质量检验记录","高","中","中","AI辅助",34,75),
        (5,"设备维护计划","中","高","低","AI辅助",35,76),
        (6,"员工考勤统计","高","低","中","AI主导",36,77),
        (7,"周会/月会会议纪要","中","中","中","AI辅助",37,78),
        (8,"供应商沟通协调","低","高","高","人工为主",38,79),
        (9,"绩效面谈准备","低","高","高","人工为主",39,80),
        (10,"流程改善提案","中","高","中","AI辅助",40,81),
        (11,"新员工入职引导","低","中","高","人工为主",41,82),
        (12,"跨部门项目协调","中","高","高","人工为主",42,83),
        (13,"客户投诉处理","中","高","高","AI辅助",43,84),
        (14,"生产成本分析","中","中","低","AI辅助",44,85),
    ]
    rm = {"高":9,"中":10,"低":11}
    am = {"AI主导":6,"AI辅助":7,"人工为主":8}

    rows = []
    rows.append(row(1, [c("A1",0,4),c("B1",1,4),c("C1",2,4),c("D1",3,4),c("E1",4,4),c("F1",5,4),c("G1",12,4),c("H1",13,4)]))
    for seq,name,rep,comp,sens,ai_t,sug_i,act_i in tasks:
        r = seq + 1
        rows.append(row(r, [c(f"A{r}",seq,10,"n"),c(f"B{r}",name,1),c(f"C{r}",rm[rep],1),c(f"D{r}",rm[comp],1),c(f"E{r}",rm[sens],1),c(f"F{r}",am[ai_t],1),c(f"G{r}",sug_i,0),c(f"H{r}",act_i,0)]))

    s1 = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac">
  <sheetViews><sheetView workbookViewId="0"><pane ySplit="1" topLeftCell="A2" activePane="bottomLeft" state="frozen"/></sheetView>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25"/>
  <cols><col min="1" max="1" width="5" customWidth="1"/><col min="2" max="2" width="18" customWidth="1"/><col min="3" max="3" width="10" customWidth="1"/><col min="4" max="4" width="12" customWidth="1"/><col min="5" max="5" width="12" customWidth="1"/><col min="6" max="6" width="12" customWidth="1"/><col min="7" max="7" width="30" customWidth="1"/><col min="8" max="8" width="34" customWidth="1"/></cols>
  <sheetData>
{chr(10).join(rows)}
  </sheetData>
  <dataValidations><dataValidation type="list" sqref="C2:C16" formula1="&quot;高,中,低&quot;" showDropDown="0"/><dataValidation type="list" sqref="D2:D16" formula1="&quot;高,中,低&quot;" showDropDown="0"/><dataValidation type="list" sqref="E2:E16" formula1="&quot;高,中,低&quot;" showDropDown="0"/><dataValidation type="list" sqref="F2:F16" formula1="&quot;AI主导,AI辅助,人工为主&quot;" showDropDown="0"/></dataValidations>
  <conditionalFormatting sqref="F2:F16">
    <cfRule type="containsText" operator="containsText" text="AI主导" priority="1"><formula>NOT(ISERROR(SEARCH("AI主导",F2)))</formula><fill><patternFill><fgColor rgb="00E2EFDA"/></patternFill></fill></cfRule>
    <cfRule type="containsText" operator="containsText" text="AI辅助" priority="2"><formula>NOT(ISERROR(SEARCH("AI辅助",F2)))</formula><fill><patternFill><fgColor rgb="00FCE4D6"/></patternFill></fill></cfRule>
    <cfRule type="containsText" operator="containsText" text="人工为主" priority="3"><formula>NOT(ISERROR(SEARCH("人工为主",F2)))</formula><fill><patternFill><fgColor rgb="00FFDDC1"/></patternFill></fill></cfRule>
  </conditionalFormatting>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''
    with open(f"{d}/xl/worksheets/sheet1.xml", "w", encoding="utf-8") as f:
        f.write(s1)

    s2d = [(1,14,4),(3,15,0),(5,16,4),(7,17,1),(8,18,0),(9,19,0),(10,20,0),(12,21,1),(13,22,0),(14,23,0),(15,24,0),(17,25,1),(18,26,0),(19,27,0),(20,28,0),(22,29,1),(23,30,0),(24,31,0),(25,32,0)]
    s2r = [f"    <row r=\"{r}\"><c r=\"A{r}\" t=\"s\" s=\"{sty}\"><v>{idx}</v></c></row>" for r,idx,sty in s2d]
    s2 = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac">
  <sheetViews><sheetView workbookViewId="0"/></sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25"/>
  <cols><col min="1" max="1" width="4" customWidth="1"/><col min="2" max="2" width="85" customWidth="1"/></cols>
  <sheetData>
{chr(10).join(s2r)}
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''
    with open(f"{d}/xl/worksheets/sheet2.xml", "w", encoding="utf-8") as f:
        f.write(s2)

    wb = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><sheets><sheet name="TaskList" sheetId="1" r:id="rId1"/><sheet name="Guide" sheetId="2" r:id="rId4"/></sheets><calcPr calcId="0"/></workbook>'
    with open(f"{d}/xl/workbook.xml", "w", encoding="utf-8") as f: f.write(wb)
    wb_r = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/><Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml"/><Relationship Id="rId4" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet2.xml"/></Relationships>'
    with open(f"{d}/xl/_rels/workbook.xml.rels", "w", encoding="utf-8") as f: f.write(wb_r)
    ct = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml"  ContentType="application/xml"/><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/><Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/><Override PartName="/xl/worksheets/sheet2.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/><Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/><Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/></Types>'
    with open(f"{d}/[Content_Types].xml", "w", encoding="utf-8") as f: f.write(ct)
    return pack(d, f"{OUT}/TeamTaskAIFeasibility.xlsx")

# === FILE 2 ===
def file2():
    d = copy_tmpl()
    S = [
        "Name","Dept","Role","CourseDate",
        "Skill1-RiseReport","Skill2-StructAnalysis","Skill3-DifficultDialog",
        "Skill4-ProcessImprove","Skill5-Custom","Skill6-TeamAIClassify",
        "OutputItem","CompletionStatus","ScenarioCard","KeyPracticeResult","Notes","InstructorConfirm",
        "SkillName","Completed","ScenarioCard","PracticeResult","Issues","ImprovementPlan",
        "ToolkitChecklist","CheckItem","Done","AcquiredDate","ManualConfirmed",
        "Completed","InProgress","NotCompleted",
        "PersonalInfo","TwoDayOutputRecord","ToolkitConfirmation",
    ]
    S += ["Skill1-RiseReport","Skill2-StructAnalysis","Skill3-DifficultDialog","Skill4-ProcessImprove","Skill5-Custom","Skill6-TeamAIClassify"]
    S += ["AIPromptTemplateLib","ScenarioCardTpl","PracticeResultTpl","30DayActionPlanTpl","TeamTaskClassifyForm","ToolkitManual"]
    S += ["Completed","InProgress","NotCompleted"]

    with open(f"{d}/xl/sharedStrings.xml", "w", encoding="utf-8") as f:
        f.write(ss_xml(S))

    s1r = [
        row(1, [c("A1",31,4)]),
        row(3, [c("A3",0,1),c("B3",1,1),c("C3",2,1),c("D3",3,1)]),
        row(4, [c("A4",32,0),c("B4",None,1),c("C4",None,1),c("D4",None,1)]),
        row(6, [c("A6",4,1),c("B6",None,1)]),
        row(7, [c("A7",5,1),c("B7",None,1)]),
        row(8, [c("A8",6,1),c("B8",None,1)]),
        row(10, [c("A10",33,0)]),
    ]
    s1 = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac">
  <sheetViews><sheetView workbookViewId="0"><pane ySplit="1" topLeftCell="A2" activePane="bottomLeft" state="frozen"/></sheetView>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25"/>
  <cols><col min="1" max="1" width="12" customWidth="1"/><col min="2" max="2" width="20" customWidth="1"/><col min="3" max="3" width="16" customWidth="1"/><col min="4" max="4" width="16" customWidth="1"/></cols>
  <sheetData>
{chr(10).join(s1r)}
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''
    with open(f"{d}/xl/worksheets/sheet1.xml", "w", encoding="utf-8") as f:
        f.write(s1)

    s2r = [
        row(1, [c("A1",32,4)]),
        row(3, [c("A3",11,4),c("B3",12,4),c("C3",13,4),c("D3",14,4),c("E3",15,4),c("F3",16,4)]),
    ]
    for i in range(6):
        r = 5 + i
        s2r.append(row(r, [c(f"A{r}",39+i,1),c(f"B{r}",28,1),c(f"C{r}",None,0),c(f"D{r}",None,0),c(f"E{r}",None,0),c(f"F{r}",None,0)]))
    s2r.append(row(12, [c("A12",None,4)]))
    s2r.append(row(13, [c("A13",None,4)]))
    s2r.append(row(14, [c("A14",None,4)]))

    s2 = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac">
  <sheetViews><sheetView workbookViewId="0"><pane ySplit="3" topLeftCell="A4" activePane="bottomLeft" state="frozen"/></sheetView>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25"/>
  <cols><col min="1" max="1" width="22" customWidth="1"/><col min="2" max="2" width="10" customWidth="1"/><col min="3" max="3" width="14" customWidth="1"/><col min="4" max="4" width="28" customWidth="1"/><col min="5" max="5" width="20" customWidth="1"/><col min="6" max="6" width="14" customWidth="1"/></cols>
  <sheetData>
{chr(10).join(s2r)}
  </sheetData>
  <dataValidations><dataValidation type="list" sqref="B5:B10" formula1="&quot;Completed,InProgress,NotCompleted&quot;" showDropDown="0"/></dataValidations>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''
    with open(f"{d}/xl/worksheets/sheet2.xml", "w", encoding="utf-8") as f:
        f.write(s2)

    s3r = [
        row(1, [c("A1",33,4)]),
        row(3, [c("A3",22,4),c("B3",23,4),c("C3",24,4),c("D3",25,4)]),
    ]
    for i in range(6):
        r = 4 + i
        s3r.append(row(r, [c(f"A{r}",45+i,1),c(f"B{r}",28,1),c(f"C{r}",None,0),c(f"D{r}",None,0)]))

    s3 = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac">
  <sheetViews><sheetView workbookViewId="0"><pane ySplit="3" topLeftCell="A4" activePane="bottomLeft" state="frozen"/></sheetView>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25"/>
  <cols><col min="1" max="1" width="24" customWidth="1"/><col min="2" max="2" width="10" customWidth="1"/><col min="3" max="3" width="16" customWidth="1"/><col min="4" max="4" width="24" customWidth="1"/></cols>
  <sheetData>
{chr(10).join(s3r)}
  </sheetData>
  <dataValidations><dataValidation type="list" sqref="B4:B9" formula1="&quot;Completed,InProgress,NotCompleted&quot;" showDropDown="0"/></dataValidations>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''
    with open(f"{d}/xl/worksheets/sheet3.xml", "w", encoding="utf-8") as f:
        f.write(s3)

    wb = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><sheets><sheet name="PersonalInfo" sheetId="1" r:id="rId1"/><sheet name="OutputRecord" sheetId="2" r:id="rId4"/><sheet name="ToolkitCheck" sheetId="3" r:id="rId5"/></sheets><calcPr calcId="0"/></workbook>'
    with open(f"{d}/xl/workbook.xml", "w", encoding="utf-8") as f: f.write(wb)
    wb_r = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/><Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml"/><Relationship Id="rId4" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet2.xml"/><Relationship Id="rId5" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet3.xml"/></Relationships>'
    with open(f"{d}/xl/_rels/workbook.xml.rels", "w", encoding="utf-8") as f: f.write(wb_r)
    ct = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml"  ContentType="application/xml"/><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/><Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/><Override PartName="/xl/worksheets/sheet2.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/><Override PartName="/xl/worksheets/sheet3.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/><Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/><Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/></Types>'
    with open(f"{d}/[Content_Types].xml", "w", encoding="utf-8") as f: f.write(ct)
    return pack(d, f"{OUT}/StudentOutputRecord.xlsx")

# === FILE 3 ===
def file3():
    d = copy_tmpl()
    S = [
        "Session","Time","Duration","Content","Instructor","PIC",
        "Day1-Registration","Day1-Intro","Skill1-RiseReport",
        "Break","Skill2-StructAnalysis","Lunch","Skill3-DifficultDialog",
        "PracticeAndReview","Day1Summary","Day2Preview",
        "Day2-Registration","Skill4-ProcessImprove","Break","Skill5-Custom",
        "Lunch","Skill6-TeamAIClassify","PracticeAndPresentation","30DayActionPlan",
        "CourseSummary","ClosingAndPhoto",
        "CheckCategory","CheckItem","Yes","No","Notes",
        "Pre-Course","EquipmentTest","ParticipantList","MaterialsPrep","CateringConfirm",
        "During-Course","EngagementObservation","TimeControl",
        "Post-Course","OutputCollection","FeedbackCollection",
        "MaterialName","Quantity","Needed","Actual","Status",
        "ParticipantManual","PracticeForms","Breaks","Lunch",
        "Projector","WhiteboardMarkers","LaptopPresenter",
        "TwoDayTimeline","InstructorChecklist","MaterialPrepList",
    ]

    with open(f"{d}/xl/sharedStrings.xml", "w", encoding="utf-8") as f:
        f.write(ss_xml(S))

    day1 = [
        ("Day1-Registration","08:30","30"),
        ("Day1-Intro","09:00","30"),
        ("Skill1-RiseReport","09:30","90"),
        ("Break","11:00","15"),
        ("Skill2-StructAnalysis","11:15","90"),
        ("Lunch","12:45","60"),
        ("Skill3-DifficultDialog","13:45","120"),
        ("PracticeAndReview","15:45","60"),
        ("Day1Summary","16:45","30"),
        ("Day2Preview","17:15","15"),
    ]
    day2 = [
        ("Day2-Registration","08:30","30"),
        ("Skill4-ProcessImprove","09:00","90"),
        ("Break","10:30","15"),
        ("Skill5-Custom","10:45","90"),
        ("Lunch","12:15","60"),
        ("Skill6-TeamAIClassify","13:15","90"),
        ("PracticeAndPresentation","14:45","60"),
        ("30DayActionPlan","15:45","60"),
        ("CourseSummary","16:45","30"),
        ("ClosingAndPhoto","17:15","30"),
    ]

    s1r = [
        row(1, [c("A1",46,4)]),
        row(3, [c("A3",0,4),c("B3",1,4),c("C3",2,4),c("D3",3,4),c("E3",4,4),c("F3",5,4)]),
        row(4, [c("A4",None,4),c("B4",None,4),c("C4",None,4),c("D4",None,4),c("E4",None,4),c("F4",None,4)]),
    ]

    d1s = 6
    s1r.append(row(d1s, [c(f"A{d1s}",None,4),c(f"B{d1s}",None,4),c(f"C{d1s}",None,4),c(f"D{d1s}",None,4),c(f"E{d1s}",None,4),c(f"F{d1s}",None,4)]))
    s1r.append(row(d1s+1, [c(f"A{d1s+1}",0,4),c(f"B{d1s+1}",1,4),c(f"C{d1s+1}",2,4),c(f"D{d1s+1}",3,4),c(f"E{d1s+1}",4,4),c(f"F{d1s+1}",5,4)]))

    for i,(name,t,dur) in enumerate(day1):
        r = d1s + 2 + i
        s1r.append(row(r, [c(f"A{r}",6+i,0),c(f"B{r}",t,1),c(f"C{r}",dur,9),c(f"D{r}",None,0),c(f"E{r}",None,1),c(f"F{r}",None,1)]))

    d2s = d1s + 2 + len(day1) + 2
    s1r.append(row(d2s, [c(f"A{d2s}",None,4),c(f"B{d2s}",None,4),c(f"C{d2s}",None,4),c(f"D{d2s}",None,4),c(f"E{d2s}",None,4),c(f"F{d2s}",None,4)]))
    s1r.append(row(d2s+1, [c(f"A{d2s+1}",0,4),c(f"B{d2s+1}",1,4),c(f"C{d2s+1}",2,4),c(f"D{d2s+1}",3,4),c(f"E{d2s+1}",4,4),c(f"F{d2s+1}",5,4)]))

    for i,(name,t,dur) in enumerate(day2):
        r = d2s + 2 + i
        s1r.append(row(r, [c(f"A{r}",16+i,0),c(f"B{r}",t,1),c(f"C{r}",dur,9),c(f"D{r}",None,0),c(f"E{r}",None,1),c(f"F{r}",None,1)]))

    s1 = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac">
  <sheetViews><sheetView workbookViewId="0"><pane ySplit="3" topLeftCell="A4" activePane="bottomLeft" state="frozen"/></sheetView>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25"/>
  <cols><col min="1" max="1" width="26" customWidth="1"/><col min="2" max="2" width="10" customWidth="1"/><col min="3" max="3" width="8" customWidth="1"/><col min="4" max="4" width="32" customWidth="1"/><col min="5" max="5" width="12" customWidth="1"/><col min="6" max="6" width="12" customWidth="1"/></cols>
  <sheetData>
{chr(10).join(s1r)}
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''
    with open(f"{d}/xl/worksheets/sheet1.xml", "w", encoding="utf-8") as f:
        f.write(s1)

    checks = [
        ("Pre-Course","EquipmentTest"),("Pre-Course","ParticipantList"),
        ("Pre-Course","MaterialsPrep"),("Pre-Course","CateringConfirm"),
        ("During-Course","EngagementObservation"),("During-Course","TimeControl"),
        ("Post-Course","OutputCollection"),("Post-Course","FeedbackCollection"),
    ]
    s2r = [
        row(1, [c("A1",47,4)]),
        row(3, [c("A3",26,4),c("B3",27,4),c("C3",28,4),c("D3",29,4),c("E3",30,4)]),
    ]
    for i,(cat,item) in enumerate(checks):
        r = 4 + i
        s2r.append(row(r, [c(f"A{r}",31+i*2,1),c(f"B{r}",32+i*2,0),c(f"C{r}",None,1),c(f"D{r}",None,1),c(f"E{r}",None,0)]))

    s2 = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac">
  <sheetViews><sheetView workbookViewId="0"><pane ySplit="3" topLeftCell="A4" activePane="bottomLeft" state="frozen"/></sheetView>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25"/>
  <cols><col min="1" max="1" width="14" customWidth="1"/><col min="2" max="2" width="32" customWidth="1"/><col min="3" max="3" width="6" customWidth="1"/><col min="4" max="4" width="6" customWidth="1"/><col min="5" max="5" width="20" customWidth="1"/></cols>
  <sheetData>
{chr(10).join(s2r)}
  </sheetData>
  <dataValidations><dataValidation type="list" sqref="C4:C11" formula1="&quot;Yes,No&quot;" showDropDown="0"/><dataValidation type="list" sqref="D4:D11" formula1="&quot;Yes,No&quot;" showDropDown="0"/></dataValidations>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''
    with open(f"{d}/xl/worksheets/sheet2.xml", "w", encoding="utf-8") as f:
        f.write(s2)

    items = ["ParticipantManual","PracticeForms","Breaks","Lunch","Projector","WhiteboardMarkers","LaptopPresenter"]
    s3r = [
        row(1, [c("A1",48,4)]),
        row(3, [c("A3",36,4),c("B3",37,4),c("C3",38,4),c("D3",39,4),c("E3",40,4)]),
    ]
    for i,item in enumerate(items):
        r = 4 + i
        s3r.append(row(r, [c(f"A{r}",41+i,1),c(f"B{r}",None,1),c(f"C{r}",None,1),c(f"D{r}",None,0),c(f"E{r}",None,1)]))

    s3 = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac">
  <sheetViews><sheetView workbookViewId="0"><pane ySplit="3" topLeftCell="A4" activePane="bottomLeft" state="frozen"/></sheetView>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25"/>
  <cols><col min="1" max="1" width="20" customWidth="1"/><col min="2" max="2" width="10" customWidth="1"/><col min="3" max="3" width="14" customWidth="1"/><col min="4" max="4" width="14" customWidth="1"/><col min="5" max="5" width="14" customWidth="1"/></cols>
  <sheetData>
{chr(10).join(s3r)}
  </sheetData>
  <dataValidations><dataValidation type="list" sqref="E4:E10" formula1="&quot;Ready,NotReady,Partial&quot;" showDropDown="0"/></dataValidations>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''
    with open(f"{d}/xl/worksheets/sheet3.xml", "w", encoding="utf-8") as f:
        f.write(s3)

    wb = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><sheets><sheet name="TwoDayTimeline" sheetId="1" r:id="rId1"/><sheet name="InstructorChecklist" sheetId="2" r:id="rId4"/><sheet name="MaterialPrepList" sheetId="3" r:id="rId5"/></sheets><calcPr calcId="0"/></workbook>'
    with open(f"{d}/xl/workbook.xml", "w", encoding="utf-8") as f: f.write(wb)
    wb_r = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/><Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml"/><Relationship Id="rId4" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet2.xml"/><Relationship Id="rId5" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet3.xml"/></Relationships>'
    with open(f"{d}/xl/_rels/workbook.xml.rels", "w", encoding="utf-8") as f: f.write(wb_r)
    ct = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml"  ContentType="application/xml"/><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/><Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/><Override PartName="/xl/worksheets/sheet2.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/><Override PartName="/xl/worksheets/sheet3.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/><Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/><Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/></Types>'
    with open(f"{d}/[Content_Types].xml", "w", encoding="utf-8") as f: f.write(ct)
    return pack(d, f"{OUT}/CourseProgressTracker.xlsx")

if __name__ == "__main__":
    print("Building File 1 (TeamTaskAIFeasibility.xlsx)...")
    ok1 = file1()
    print("Building File 2 (StudentOutputRecord.xlsx)...")
    ok2 = file2()
    print("Building File 3 (CourseProgressTracker.xlsx)...")
    ok3 = file3()
    print(f"\nResult: F1={ok1} F2={ok2} F3={ok3}")
