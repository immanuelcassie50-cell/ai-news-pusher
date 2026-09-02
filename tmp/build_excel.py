#!/usr/bin/env python3
"""Build all 3 Excel files for 管理者的AI实战课制造业版"""
import os, shutil, subprocess, sys

SKILL_DIR = "C:/Users/Administrator/.claude/skills/Excel表格处理"
OUT_DIR = "D:/新课开发/管理者的AI课/管理者AI实战课制造业版教学文档/完整课程包/11_配套表单_Excel版"
os.makedirs(OUT_DIR, exist_ok=True)

def copy_template():
    dst = "/tmp/xlsx_build"
    shutil.rmtree(dst, ignore_errors=True)
    shutil.copytree(f"{SKILL_DIR}/templates/minimal_xlsx/", dst)
    return dst

def pack_validate(src, out):
    r1 = subprocess.run(["python3", f"{SKILL_DIR}/scripts/xlsx_pack.py", src, out], capture_output=True, text=True, encoding='utf-8', errors='replace')
    if r1.returncode != 0:
        print(f"PACK ERR: {r1.stderr[:300]}"); return False
    r2 = subprocess.run(["python3", f"{SKILL_DIR}/scripts/formula_check.py", out], capture_output=True, text=True, encoding='utf-8', errors='replace')
    if r2.returncode != 0:
        print(f"VAL ERR: {r2.stderr[:300]}"); return False
    print(f"OK: {os.path.basename(out)}")
    return True

def xe(s):
    return s.replace("&","&amp;").replace("<","&lt;").replace(">","&gt;").replace('"',"&quot;")

def make_ss(strings):
    lines = [f'  <si><t>{xe(s)}</t></si>' for s in strings]
    n = len(strings)
    return f'<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="{n}" uniqueCount="{n}">\n' + '\n'.join(lines) + '\n</sst>'

def cc(addr, val=None, s=0, t='s'):
    if val is None:
        return f'<c r="{addr}" s="{s}"/>'
    if t == 's':
        return f'<c r="{addr}" t="s" s="{s}"><v>{val}</v></c>'
    return f'<c r="{addr}" s="{s}"><v>{val}</v></c>'

# ===== FILE 1 =====
def build_file1():
    dst = copy_template()
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
    with open(f"{dst}/xl/sharedStrings.xml", "w", encoding="utf-8") as f:
        f.write(make_ss(S))

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
    rows.append('  <row r="1" ht="20" customHeight="1">' +
        cc("A1",0,4)+cc("B1",1,4)+cc("C1",2,4)+cc("D1",3,4)+
        cc("E1",4,4)+cc("F1",5,4)+cc("G1",12,4)+cc("H1",13,4)+'</row>')
    for seq,name,rep,comp,sens,ai_t,sug_i,act_i in tasks:
        r = seq+1
        rows.append(f'  <row r="{r}">' +
            cc(f"A{r}",seq,10,'n')+cc(f"B{r}",name,1)+cc(f"C{r}",rm[rep],1)+
            cc(f"D{r}",rm[comp],1)+cc(f"E{r}",rm[sens],1)+cc(f"F{r}",am[ai_t],1)+
            cc(f"G{r}",sug_i,0)+cc(f"H{r}",act_i,0)+'</row>')

    s1 = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"
  xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac">
  <sheetViews><sheetView workbookViewId="0"><pane ySplit="1" topLeftCell="A2" activePane="bottomLeft" state="frozen"/></sheetView>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25"/>
  <cols>
    <col min="1" max="1" width="5" customWidth="1"/>
    <col min="2" max="2" width="18" customWidth="1"/>
    <col min="3" max="3" width="10" customWidth="1"/>
    <col min="4" max="4" width="12" customWidth="1"/>
    <col min="5" max="5" width="12" customWidth="1"/>
    <col min="6" max="6" width="12" customWidth="1"/>
    <col min="7" max="7" width="30" customWidth="1"/>
    <col min="8" max="8" width="34" customWidth="1"/>
  </cols>
  <sheetData>
{chr(10).join(rows)}
  </sheetData>
  <dataValidations>
    <dataValidation type="list" sqref="C2:C16" formula1="&quot;高,中,低&quot;" showDropDown="0"/>
    <dataValidation type="list" sqref="D2:D16" formula1="&quot;高,中,低&quot;" showDropDown="0"/>
    <dataValidation type="list" sqref="E2:E16" formula1="&quot;高,中,低&quot;" showDropDown="0"/>
    <dataValidation type="list" sqref="F2:F16" formula1="&quot;AI主导,AI辅助,人工为主&quot;" showDropDown="0"/>
  </dataValidations>
  <conditionalFormatting sqref="F2:F16">
    <cfRule type="containsText" operator="containsText" text="AI主导" priority="1">
      <formula>NOT(ISERROR(SEARCH("AI主导",F2)))</formula>
      <fill><patternFill><fgColor rgb="00E2EFDA"/></patternFill></fill>
    </cfRule>
    <cfRule type="containsText" operator="containsText" text="AI辅助" priority="2">
      <formula>NOT(ISERROR(SEARCH("AI辅助",F2)))</formula>
      <fill><patternFill><fgColor rgb="00FCE4D6"/></patternFill></fill>
    </cfRule>
    <cfRule type="containsText" operator="containsText" text="人工为主" priority="3">
      <formula>NOT(ISERROR(SEARCH("人工为主",F2)))</formula>
      <fill><patternFill><fgColor rgb="00FFDDC1"/></patternFill></fill>
    </cfRule>
  </conditionalFormatting>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''
    with open(f"{dst}/xl/worksheets/sheet1.xml", "w", encoding="utf-8") as f:
        f.write(s1)

    s2d = [(1,14,4),(3,15,0),(5,16,4),(7,17,1),(8,18,0),(9,19,0),(10,20,0),
           (12,21,1),(13,22,0),(14,23,0),(15,24,0),(17,25,1),(18,26,0),
           (19,27,0),(20,28,0),(22,29,1),(23,30,0),(24,31,0),(25,32,0)]
    s2r = [f'    <row r="{r}"><c r="A{r}" t="s" s="{sty}"><v>{idx}</v></c></row>' for r,idx,sty in s2d]
    s2 = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"
  xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac">
  <sheetViews><sheetView workbookViewId="0"/></sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25"/>
  <cols><col min="1" max="1" width="4" customWidth="1"/><col min="2" max="2" width="85" customWidth="1"/></cols>
  <sheetData>
{chr(10).join(s2r)}
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''
    with open(f"{dst}/xl/worksheets/sheet2.xml", "w", encoding="utf-8") as f:
        f.write(s2)

    wb = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><sheets><sheet name="任务清单" sheetId="1" r:id="rId1"/><sheet name="使用说明" sheetId="2" r:id="rId4"/></sheets><calcPr calcId="0"/></workbook>'
    with open(f"{dst}/xl/workbook.xml", "w", encoding="utf-8") as f: f.write(wb)
    wb_r = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/><Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml"/><Relationship Id="rId4" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet2.xml"/></Relationships>'
    with open(f"{dst}/xl/_rels/workbook.xml.rels", "w", encoding="utf-8") as f: f.write(wb_r)
    ct = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml"  ContentType="application/xml"/><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/><Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/><Override PartName="/xl/worksheets/sheet2.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/><Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/><Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/></Types>'
    with open(f"{dst}/[Content_Types].xml", "w", encoding="utf-8") as f: f.write(ct)
    out = f"{OUT_DIR}/团队任务AI可行性分析表.xlsx"
    return pack_validate(dst, out)

# ===== FILE 2 =====
def build_file2():
    dst = copy_template()
    S = [
        "姓名","部门","岗位","课程日期",
        "Skill1: 向上汇报提炼","Skill2: 结构化分析","Skill3: 困难对话",
        "Skill4: 流程改善","Skill5: 自选","Skill6: 团队AI分类",
        "产出项目","完成状态","场景卡编号","重点练习成果","备注","讲师确认",
        "Skill名称","是否完成","场景卡","练习成果简述","遇到的问题","改进计划",
        "工具包清单","确认项目","是否完成","获取时间","使用说明确认",
        "已完成","进行中","未完成",
        "个人信息","两日产出记录","工具包确认清单",
    ]
    S += ["Skill1: 向上汇报提炼","Skill2: 结构化分析","Skill3: 困难对话",
          "Skill4: 流程改善","Skill5: 自选","Skill6: 团队AI分类"]
    S += ["AI提示词模板库","场景卡模板","练习成果模板",
          "30天行动计划模板","团队任务分类表","工具包使用说明"]
    S += ["已完成","进行中","未完成"]

    with open(f"{dst}/xl/sharedStrings.xml", "w", encoding="utf-8") as f:
        f.write(make_ss(S))

    # Sheet1: 个人信息
    s1r = [
        '  <row r="1" ht="20" customHeight="1"><c r="A1" t="s" s="4"><v>31</v></c></row>',
        '  <row r="3"><c r="A3" t="s" s="1"><v>0</v></c><c r="B3" t="s" s="1"><v>1</v></c><c r="C3" t="s" s="1"><v>2</v></c><c r="D3" t="s" s="1"><v>3</v></c></row>',
        '  <row r="4"><c r="A4" t="s" s="0"><v>32</v></c><c r="B4" s="1"><v></v></c><c r="C4" s="1"><v></v></c><c r="D4" s="1"><v></v></c></row>',
        '  <row r="6"><c r="A6" t="s" s="1"><v>4</v></c><c r="B6" s="1"><v></v></c></row>',
        '  <row r="7"><c r="A7" t="s" s="1"><v>5</v></c><c r="B7" s="1"><v></v></c></row>',
        '  <row r="8"><c r="A8" t="s" s="1"><v>6</v></c><c r="B8" s="1"><v></v></c></row>',
        '  <row r="10"><c r="A10" t="s" s="0"><v>33</v></c></row>',
    ]
    s1 = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"
  xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac">
  <sheetViews><sheetView workbookViewId="0"><pane ySplit="1" topLeftCell="A2" activePane="bottomLeft" state="frozen"/></sheetView>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25"/>
  <cols>
    <col min="1" max="1" width="12" customWidth="1"/>
    <col min="2" max="2" width="20" customWidth="1"/>
    <col min="3" max="3" width="16" customWidth="1"/>
    <col min="4" max="4" width="16" customWidth="1"/>
  </cols>
  <sheetData>
{chr(10).join(s1r)}
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''
    with open(f"{dst}/xl/worksheets/sheet1.xml", "w", encoding="utf-8") as f:
        f.write(s1)

    # Sheet2: 两日产出记录
    s2r = [
        '  <row r="1" ht="20" customHeight="1"><c r="A1" t="s" s="4"><v>32</v></c></row>',
        '  <row r="3" ht="18" customHeight="1"><c r="A3" t="s" s="4"><v>11</v></c><c r="B3" t="s" s="4"><v>12</v></c><c r="C3" t="s" s="4"><v>13</v></c><c r="D3" t="s" s="4"><v>14</v></c><c r="E3" t="s" s="4"><v>15</v></c><c r="F3" t="s" s="4"><v>16</v></c></row>',
    ]
    skill_base = 39
    for i in range(6):
        r = 5 + i
        s2r.append(f'  <row r="{r}"><c r="A{r}" t="s" s="1"><v>{skill_base+i}</v></c><c r="B{r}" t="s" s="1"><v>28</v></c><c r="C{r}" t="s" s="0"><v></v></c><c r="D{r}" t="s" s="0"><v></v></c><c r="E{r}" t="s" s="0"><v></v></c><c r="F{r}" t="s" s="0"><v></v></c></row>')
    s2r.append('  <row r="12"><c r="A12" t="s" s="4"><v></v></c></row>')
    s2r.append('  <row r="13" ht="18" customHeight="1"><c r="A13" t="s" s="4"><v></v></c></row>')
    s2r.append('  <row r="14"><c r="A14" t="s" s="4"><v></v></c></row>')

    s2 = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"
  xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac">
  <sheetViews><sheetView workbookViewId="0"><pane ySplit="3" topLeftCell="A4" activePane="bottomLeft" state="frozen"/></sheetView>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25"/>
  <cols>
    <col min="1" max="1" width="22" customWidth="1"/>
    <col min="2" max="2" width="10" customWidth="1"/>
    <col min="3" max="3" width="14" customWidth="1"/>
    <col min="4" max="4" width="28" customWidth="1"/>
    <col min="5" max="5" width="20" customWidth="1"/>
    <col min="6" max="6" width="14" customWidth="1"/>
  </cols>
  <sheetData>
{chr(10).join(s2r)}
  </sheetData>
  <dataValidations>
    <dataValidation type="list" sqref="B5:B10" formula1="&quot;已完成,进行中,未完成&quot;" showDropDown="0"/>
  </dataValidations>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''
    with open(f"{dst}/xl/worksheets/sheet2.xml", "w", encoding="utf-8") as f:
        f.write(s2)

    # Sheet3: 工具包确认清单
    s3r = [
        '  <row r="1" ht="20" customHeight="1"><c r="A1" t="s" s="4"><v>33</v></c></row>',
        '  <row r="3" ht="18" customHeight="1"><c r="A3" t="s" s="4"><v>22</v></c><c r="B3" t="s" s="4"><v>23</v></c><c r="C3" t="s" s="4"><v>24</v></c><c r="D3" t="s" s="4"><v>25</v></c></row>',
    ]
    tool_base = 45
    for i in range(6):
        r = 4 + i
        s3r.append(f'  <row r="{r}"><c r="A{r}" t="s" s="1"><v>{tool_base+i}</v></c><c r="B{r}" t="s" s="1"><v>28</v></c><c r="C{r}" t="s" s="0"><v></v></c><c r="D{r}" t="s" s="0"><v></v></c></row>')

    s3 = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"
  xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac">
  <sheetViews><sheetView workbookViewId="0"><pane ySplit="3" topLeftCell="A4" activePane="bottomLeft" state="frozen"/></sheetView>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25"/>
  <cols>
    <col min="1" max="1" width="24" customWidth="1"/>
    <col min="2" max="2" width="10" customWidth="1"/>
    <col min="3" max="3" width="16" customWidth="1"/>
    <col min="4" max="4" width="24" customWidth="1"/>
  </cols>
  <sheetData>
{chr(10).join(s3r)}
  </sheetData>
  <dataValidations>
    <dataValidation type="list" sqref="B4:B9" formula1="&quot;已完成,进行中,未完成&quot;" showDropDown="0"/>
  </dataValidations>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''
    with open(f"{dst}/xl/worksheets/sheet3.xml", "w", encoding="utf-8") as f:
        f.write(s3)

    wb = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><sheets><sheet name="个人信息" sheetId="1" r:id="rId1"/><sheet name="两日产出记录" sheetId="2" r:id="rId4"/><sheet name="工具包确认清单" sheetId="3" r:id="rId5"/></sheets><calcPr calcId="0"/></workbook>'
    with open(f"{dst}/xl/workbook.xml", "w", encoding="utf-8") as f: f.write(wb)
    wb_r = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/><Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml"/><Relationship Id="rId4" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet2.xml"/><Relationship Id="rId5" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet3.xml"/></Relationships>'
    with open(f"{dst}/xl/_rels/workbook.xml.rels", "w", encoding="utf-8") as f: f.write(wb_r)
    ct = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml"  ContentType="application/xml"/><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/><Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/><Override PartName="/xl/worksheets/sheet2.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/><Override PartName="/xl/worksheets/sheet3.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/><Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/><Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/></Types>'
    with open(f"{dst}/[Content_Types].xml", "w", encoding="utf-8") as f: f.write(ct)
    out = f"{OUT_DIR}/学员产出记录表.xlsx"
    return pack_validate(dst, out)

# ===== FILE 3 =====
def build_file3():
    dst = copy_template()
    S = [
        "环节","时间","时长","内容","讲师","负责人",
        "签到与开场","课程介绍与目标","Skill1: 向上汇报提炼",
        "茶歇","Skill2: 结构化分析","午餐","Skill3: 困难对话",
        "练习与点评","当日复盘","第二天预告",
        "签到与开场","Skill4: 流程改善","茶歇","Skill5: 自选",
        "午餐","Skill6: 团队AI分类","练习与汇报","30天行动计划制定",
        "课程总结","结业与合影",
        "检查项目","检查内容","是","否","备注",
        "课前检查","设备测试（投影/音响/白板）",
        "学员名单确认","教材与表单准备","茶歇与餐饮确认",
        "课间检查","学员参与度观察","时间控制",
        "课后跟进","学员产出收集","课程反馈收集",
        "物料名称","数量","需要准备","实际准备","状态",
        "学员手册","练习表单","茶歇","午餐",
        "投影设备","白板/马克笔","电脑/翻页笔",
        "两日课程时间轴","讲师用检查清单","物料准备清单",
    ]

    with open(f"{dst}/xl/sharedStrings.xml", "w", encoding="utf-8") as f:
        f.write(make_ss(S))

    day1 = [
        ("签到与开场","08:30","30"),
        ("课程介绍与目标","09:00","30"),
        ("Skill1: 向上汇报提炼","09:30","90"),
        ("茶歇","11:00","15"),
        ("Skill2: 结构化分析","11:15","90"),
        ("午餐","12:45","60"),
        ("Skill3: 困难对话","13:45","120"),
        ("练习与点评","15:45","60"),
        ("当日复盘","16:45","30"),
        ("第二天预告","17:15","15"),
    ]
    day2 = [
        ("签到与开场","08:30","30"),
        ("Skill4: 流程改善","09:00","90"),
        ("茶歇","10:30","15"),
        ("Skill5: 自选","10:45","90"),
        ("午餐","12:15","60"),
        ("Skill6: 团队AI分类","13:15","90"),
        ("练习与汇报","14:45","60"),
        ("30天行动计划制定","15:45","60"),
        ("课程总结","16:45","30"),
        ("结业与合影","17:15","30"),
    ]

    s1r = [
        '  <row r="1" ht="22" customHeight="1"><c r="A1" t="s" s="4"><v>46</v></c></row>',
        '  <row r="3" ht="18" customHeight="1"><c r="A3" t="s" s="4"><v>0</v></c><c r="B3" t="s" s="4"><v>1</v></c><c r="C3" t="s" s="4"><v>2</v></c><c r="D3" t="s" s="4"><v>3</v></c><c r="E3" t="s" s="4"><v>4</v></c><c r="F3" t="s" s="4"><v>5</v></c></row>',
        '  <row r="4" ht="18" customHeight="1"><c r="A4" t="s" s="4"><v></v></c><c r="B4" t="s" s="4"><v></v></c><c r="C4" t="s" s="4"><v></v></c><c r="D4" t="s" s="4"><v></v></c><c r="E4" t="s" s="4"><v></v></c><c r="F4" t="s" s="4"><v></v></c></row>',
    ]

    day1_start = 6
    s1r.append(f'  <row r="{day1_start}" ht="18" customHeight="1"><c r="A{day1_start}" t="s" s="4"><v>第一日（日期：___________）</v></c><c r="B{day1_start}" t="s" s="4"><v></v></c><c r="C{day1_start}" t="s" s="4"><v></v></c><c r="D{day1_start}" t="s" s="4"><v></v></c><c r="E{day1_start}" t="s" s="4"><v></v></c><c r="F{day1_start}" t="s" s="4"><v></v></c></row>')
    s1r.append(f'  <row r="{day1_start+1}" ht="18" customHeight="1"><c r="A{day1_start+1}" t="s" s="4"><v>0</v></c><c r="B{day1_start+1}" t="s" s="4"><v>1</v></c><c r="C{day1_start+1}" t="s" s="4"><v>2</v></c><c r="D{day1_start+1}" t="s" s="4"><v>3</v></c><c r="E{day1_start+1}" t="s" s="4"><v>4</v></c><c r="F{day1_start+1}" t="s" s="4"><v>5</v></c></row>')

    for i, (name, t, d) in enumerate(day1):
        r = day1_start + 2 + i
        s1r.append(f'  <row r="{r}"><c r="A{r}" t="s" s="0"><v>{6+i}</v></c><c r="B{r}" t="s" s="1"><v>{t}</v></c><c r="C{r}" s="9"><v>{d}</v></c><c r="D{r}" t="s" s="0"><v></v></c><c r="E{r}" t="s" s="1"><v></v></c><c r="F{r}" t="s" s="1"><v></v></c></row>')

    day2_start = day1_start + 2 + len(day1) + 2
    s1r.append(f'  <row r="{day2_start}" ht="18" customHeight="1"><c r="A{day2_start}" t="s" s="4"><v>第二日（日期：___________）</v></c><c r="B{day2_start}" t="s" s="4"><v></v></c><c r="C{day2_start}" t="s" s="4"><v></v></c><c r="D{day2_start}" t="s" s="4"><v></v></c><c r="E{day2_start}" t="s" s="4"><v></v></c><c r="F{day2_start}" t="s" s="4"><v></v></c></row>')
    s1r.append(f'  <row r="{day2_start+1}" ht="18" customHeight="1"><c r="A{day2_start+1}" t="s" s="4"><v>0</v></c><c r="B{day2_start+1}" t="s" s="4"><v>1</v></c><c r="C{day2_start+1}" t="s" s="4"><v>2</v></c><c r="D{day2_start+1}" t="s" s="4"><v>3</v></c><c r="E{day2_start+1}" t="s" s="4"><v>4</v></c><c r="F{day2_start+1}" t="s" s="4"><v>5</v></c></row>')

    for i, (name, t, d) in enumerate(day2):
        r = day2_start + 2 + i
        s1r.append(f'  <row r="{r}"><c r="A{r}" t="s" s="0"><v>{16+i}</v></c><c r="B{r}" t="s" s="1"><v>{t}</v></c><c r="C{r}" s="9"><v>{d}</v></c><c r="D{r}" t="s" s="0"><v></v></c><c r="E{r}" t="s" s="1"><v></v></c><c r="F{r}" t="s" s="1"><v></v></c></row>')

    s1 = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"
  xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac">
  <sheetViews><sheetView workbookViewId="0"><pane ySplit="3" topLeftCell="A4" activePane="bottomLeft" state="frozen"/></sheetView>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25"/>
  <cols>
    <col min="1" max="1" width="26" customWidth="1"/>
    <col min="2" max="2" width="10" customWidth="1"/>
    <col min="3" max="3" width="8" customWidth="1"/>
    <col min="4" max="4" width="32" customWidth="1"/>
    <col min="5" max="5" width="12" customWidth="1"/>
    <col min="6" max="6" width="12" customWidth="1"/>
  </cols>
  <sheetData>
{chr(10).join(s1r)}
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''
    with open(f"{dst}/xl/worksheets/sheet1.xml", "w", encoding="utf-8") as f:
        f.write(s1)

    # Sheet2: 讲师用检查清单
    checks = [
        ("课前检查","设备测试（投影/音响/白板）"),
        ("课前检查","学员名单确认"),
        ("课前检查","教材与表单准备"),
        ("课前检查","茶歇与餐饮确认"),
        ("课间检查","学员参与度观察"),
        ("课间检查","时间控制"),
        ("课后跟进","学员产出收集"),
        ("课后跟进","课程反馈收集"),
    ]
    s2r = [
        '  <row r="1" ht="20" customHeight="1"><c r="A1" t="s" s="4"><v>47</v></c></row>',
        '  <row r="3" ht="18" customHeight="1"><c r="A3" t="s" s="4"><v>26</v></c><c r="B3" t="s" s="4"><v>27</v></c><c r="C3" t="s" s="4"><v>28</v></c><c r="D3" t="s" s="4"><v>29</v></c><c r="E3" t="s" s="4"><v>30</v></c></row>',
    ]
    for i, (cat, item) in enumerate(checks):
        r = 4 + i
        s2r.append(f'  <row r="{r}"><c r="A{r}" t="s" s="1"><v>{31+i*2}</v></c><c r="B{r}" t="s" s="0"><v>{32+i*2}</v></c><c r="C{r}" t="s" s="1"><v></v></c><c r="D{r}" t="s" s="1"><v></v></c><c r="E{r}" t="s" s="0"><v></v></c></row>')

    s2 = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"
  xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac">
  <sheetViews><sheetView workbookViewId="0"><pane ySplit="3" topLeftCell="A4" activePane="bottomLeft" state="frozen"/></sheetView>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25"/>
  <cols>
    <col min="1" max="1" width="14" customWidth="1"/>
    <col min="2" max="2" width="32" customWidth="1"/>
    <col min="3" max="3" width="6" customWidth="1"/>
    <col min="4" max="4" width="6" customWidth="1"/>
    <col min="5" max="5" width="20" customWidth="1"/>
  </cols>
  <sheetData>
{chr(10).join(s2r)}
  </sheetData>
  <dataValidations>
    <dataValidation type="list" sqref="C4:C11" formula1="&quot;是,否&quot;" showDropDown="0"/>
    <dataValidation type="list" sqref="D4:D11" formula1="&quot;是,否&quot;" showDropDown="0"/>
  </dataValidations>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''
    with open(f"{dst}/xl/worksheets/sheet2.xml", "w", encoding="utf-8") as f:
        f.write(s2)

    # Sheet3: 物料准备清单
    items = ["学员手册","练习表单","茶歇","午餐","投影设备","白板/马克笔","电脑/翻页笔"]
    s3r = [
        '  <row r="1" ht="20" customHeight="1"><c r="A1" t="s" s="4"><v>48</v></c></row>',
        '  <row r="3" ht="18" customHeight="1"><c r="A3" t="s" s="4"><v>36</v></c><c r="B3" t="s" s="4"><v>37</v></c><c r="C3" t="s" s="4"><v>38</v></c><c r="D3" t="s" s="4"><v>39</v></c><c r="E3" t="s" s="4"><v>40</v></c></row>',
    ]
    for i, item in enumerate(items):
        r = 4 + i
        s3r.append(f'  <row r="{r}"><c r="A{r}" t="s" s="1"><v>{41+i}</v></c><c r="B{r}" t="s" s="1"><v></v></c><c r="C{r}" t="s" s="1"><v></v></c><c r="D{r}" t="s" s="0"><v></v></c><c r="E{r}" t="s" s="1"><v></v></c></row>')

    s3 = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"
  xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac">
  <sheetViews><sheetView workbookViewId="0"><pane ySplit="3" topLeftCell="A4" activePane="bottomLeft" state="frozen"/></sheetView>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25"/>
  <cols>
    <col min="1" max="1" width="20" customWidth="1"/>
    <col min="2" max="2" width="10" customWidth="1"/>
    <col min="3" max="3" width="14" customWidth="1"/>
    <col min="4" max="4" width="14" customWidth="1"/>
    <col min="5" max="5" width="14" customWidth="1"/>
  </cols>
  <sheetData>
{chr(10).join(s3r)}
  </sheetData>
  <dataValidations>
    <dataValidation type="list" sqref="E4:E10" formula1="&quot;已准备,未准备,部分准备&quot;" showDropDown="0"/>
  </dataValidations>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''
    with open(f"{dst}/xl/worksheets/sheet3.xml", "w", encoding="utf-8") as f:
        f.write(s3)

    wb = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><sheets><sheet name="两日课程时间轴" sheetId="1" r:id="rId1"/><sheet name="讲师用检查清单" sheetId="2" r:id="rId4"/><sheet name="物料准备清单" sheetId="3" r:id="rId5"/></sheets><calcPr calcId="0"/></workbook>'
    with open(f"{dst}/xl/workbook.xml", "w", encoding="utf-8") as f: f.write(wb)
    wb_r = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/><Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml"/><Relationship Id="rId4" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet2.xml"/><Relationship Id="rId5" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet3.xml"/></Relationships>'
    with open(f"{dst}/xl/_rels/workbook.xml.rels", "w", encoding="utf-8") as f: f.write(wb_r)
    ct = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml"  ContentType="application/xml"/><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/><Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/><Override PartName="/xl/worksheets/sheet2.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/><Override PartName="/xl/worksheets/sheet3.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/><Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/><Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/></Types>'
    with open(f"{dst}/[Content_Types].xml", "w", encoding="utf-8") as f: f.write(ct)
    out = f"{OUT_DIR}/课程进度追踪表.xlsx"
    return pack_validate(dst, out)

# ===== RUN ALL =====
print("=== Building File 1 ===")
ok1 = build_file1()
print("=== Building File 2 ===")
ok2 = build_file2()
print("=== Building File 3 ===")
ok3 = build_file3()
print(f"\nSUMMARY: F1={ok1} F2={ok2} F3={ok3}")
