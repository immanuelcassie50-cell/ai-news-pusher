#!/usr/bin/env python3
"""Build 01_SPIN销售提问行为自测.xlsx"""
import shutil, os, sys, re, subprocess

SKILL_DIR = "C:/Users/Administrator/.claude/skills/Excel表格处理"
TEMPLATE = "D:/temp/xlsx_work"
OUT = "D:/新课开发/测评表单/销售10大测评/01_SPIN销售提问行为自测.xlsx"
os.makedirs(os.path.dirname(OUT), exist_ok=True)

# ---- Strings (indices match array position) ----
STRINGS = [
    "填答", "结果", "题库", "解读库",
    "题号", "题目内容", "得分(1-5)",
    "维度", "平均得分", "等级", "关键发现",
    "背景问题(BG)", "难点问题(PB)", "暗示问题(IM)", "需求效益问题(NP)",
    "待发展", "基础", "良好", "优秀", "卓越",
    "S1_均衡型", "S2_事务型", "S3_激进型", "S4_被动型", "S5_咨询型", "S6_价值型",
    "您的SPIN四项技能发展均衡，能够根据客户情况灵活调整提问策略。",
    "您更擅长处理事务性问题，专注于产品细节和操作层面的沟通。",
    "您倾向于激进提问方式，可能在挖掘客户深层需求时表现强势。",
    "您的提问相对被动，需要更主动地探索客户的需求和痛点。",
    "您具备较强的顾问式提问能力，擅长引导客户思考和决策。",
    "您擅长价值导向的提问，能够有效传递解决方案的商业价值。",
    "您的模式判定",
    "请根据您的实际销售行为，选择最符合的频率选项：1=几乎从不，5=每次都这样做",
    "SPIN销售提问行为自测",
    "",
    "模式判定结果",
    "综合分析",
    "各维度均衡发展，SPIN技能成熟稳定。",
    "建议持续关注暗示问题和需求效益问题的深度应用。",
    "可在日常销售拜访中增加情境演练，强化短板维度。",
    "整体评估：您的销售提问技巧处于良好至优秀水平。",
]

QUESTIONS = [
    ("BG","在初次拜访客户时，我会先询问客户的基本情况和业务背景。"),
    ("BG","我会询问客户目前使用的产品或服务，以及使用年限。"),
    ("BG","我会了解客户的业务流程和主要的运营环节。"),
    ("BG","我会询问客户公司的规模、组织架构和行业地位。"),
    ("BG","我会了解客户的决策流程和关键决策人。"),
    ("BG","我会询问客户当前的主要工作职责和日常挑战。"),
    ("PB","我会主动询问客户在工作中遇到的最大困难和挑战。"),
    ("PB","我会探索客户对现有解决方案不满意的地方。"),
    ("PB","我会询问客户在采购或决策过程中遇到的问题。"),
    ("PB","我会了解客户对竞争对手产品或服务的不满。"),
    ("PB","我会询问客户在业务发展中遇到的主要障碍。"),
    ("PB","我会探索客户对当前供应商或合作伙伴的顾虑。"),
    ("IM","我会询问客户的问题对其业务造成的影响和损失。"),
    ("IM","我会探索客户问题的严重性和紧迫性。"),
    ("IM","我会询问客户问题对其个人职业发展的影响。"),
    ("IM","我会探索客户问题如果不解决会产生的后果。"),
    ("IM","我会询问客户问题对团队和部门的影响。"),
    ("IM","我会了解客户问题对客户与客户关系的影响。"),
    ("NP","我会询问客户解决问题后希望达成的目标和效果。"),
    ("NP","我会询问客户对理想解决方案的期望标准。"),
    ("NP","我会探索客户愿意为解决方案投入的预算范围。"),
    ("NP","我会询问客户的时间要求和期望实施周期。"),
    ("NP","我会询问客户成功衡量标准是什么。"),
    ("NP","我会了解客户对供应商选择的关键评估维度。"),
]

OPTS = ["几乎从不(1)","偶尔这样做(2)","有时这样做(3)","经常这样做(4)","每次都这样做(5)"]

def ss(s): return s.replace("&","&amp;").replace("<","&lt;").replace(">","&gt;")

def num_c(ref, val=None, s=0, f=None):
    attrs = f'r="{ref}"'
    if s: attrs += f' s="{s}"'
    if f: return f'<c {attrs}><f>{f}</f><v></v></c>'
    return f'<c {attrs}><v>{val}</v></c>'

def str_c(ref, idx, s=0):
    attrs = f'r="{ref}" t="s"'
    if s: attrs += f' s="{s}"'
    return f'<c {attrs}><v>{idx}</v></c>'

def inl_c(ref, text, s=0):
    attrs = f'r="{ref}" t="inlineStr"'
    if s: attrs += f' s="{s}"'
    return f'<c {attrs}><is><t>{ss(text)}</t></is></c>'

def row(r_num, cells):
    joined = "".join(cells)
    return f"<row r=\"{r_num}\">{joined}</row>"

# ---- Build sheets ----

def build_s1():
    lines = [
        '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>',
        '<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"',
        '  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">',
        '  <sheetViews><sheetView workbookViewId="0">',
        '    <pane ySplit="3" topLeftCell="A4" activePane="bottomLeft" state="frozen"/>',
        '  </sheetView></sheetViews>',
        '  <sheetFormatPr defaultRowHeight="15"/>',
        '  <cols>',
        '    <col min="1" max="1" width="8" customWidth="1"/>',
        '    <col min="2" max="2" width="55" customWidth="1"/>',
        '    <col min="3" max="3" width="14" customWidth="1"/>',
        '  </cols>',
        '  <sheetData>',
        row(1, [str_c("A1", 29, s=4)]),   # Title
        row(2, [str_c("A2", 28, s=0)]),   # Instruction
        row(3, [str_c("A3",4,s=4), str_c("B3",5,s=4), str_c("C3",6,s=4)]),
    ]
    for i,(dim,q) in enumerate(QUESTIONS):
        r = i+4
        lines.append(row(r, [
            num_c(f"A{r}", i+1, s=0),
            inl_c(f"B{r}", q, s=0),
            num_c(f"C{r}", 3, s=1),
        ]))
    lines.extend([
        '  </sheetData>',
        '  <dataValidations>',
        '    <dataValidation type="list" formula1="&quot;1,2,3,4,5&quot;" showDropDown="0" sqref="C4:C27"/>',
        '  </dataValidations>',
        '  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>',
        '</worksheet>',
    ])
    with open(f"{TEMPLATE}/xl/worksheets/sheet1.xml","w",encoding="utf-8") as f:
        f.write("\n".join(lines))

def build_s2():
    level_f = lambda c: (
        f"IF({c}&lt;2,&quot;待发展&quot;,"
        f"IF({c}&lt;2.8,&quot;基础&quot;,"
        f"IF({c}&lt;3.5,&quot;良好&quot;,"
        f"IF({c}&lt;4.2,&quot;优秀&quot;,&quot;卓越&quot;))))"
    )
    lines = [
        '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>',
        '<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"',
        '  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">',
        '  <sheetViews><sheetView workbookViewId="0"/></sheetViews>',
        '  <sheetFormatPr defaultRowHeight="15"/>',
        '  <cols>',
        '    <col min="1" max="1" width="22" customWidth="1"/>',
        '    <col min="2" max="2" width="14" customWidth="1"/>',
        '    <col min="3" max="3" width="12" customWidth="1"/>',
        '    <col min="4" max="4" width="40" customWidth="1"/>',
        '  </cols>',
        '  <sheetData>',
        row(1, [str_c("A1",29,s=4)]),
        row(2, [str_c("A2",7,s=4), str_c("B2",8,s=4), str_c("C2",9,s=4), str_c("D2",10,s=4)]),
    ]
    # Dimension rows: 3=BG(填答 rows4-9), 4=PB(10-15), 5=IM(16-21), 6=NP(22-27)
    dim_data = [(3,11,"AVERAGE('填答'!C4:C9)"), (4,12,"AVERAGE('填答'!C10:C15)"),
                (5,13,"AVERAGE('填答'!C16:C21)"), (6,14,"AVERAGE('填答'!C22:C27)")]
    for r_num, str_idx, avg_f in dim_data:
        lines.append(row(r_num, [
            str_c(f"A{r_num}", str_idx, s=0),
            num_c(f"B{r_num}", s=6, f=avg_f),
            num_c(f"C{r_num}", s=0, f=level_f(f"B{r_num}")),
            inl_c(f"D{r_num}",""),
        ]))
    lines.append(row(7, [inl_c("A7","")]))
    lines.append(row(8, [str_c("A8",33,s=4)]))
    # Pattern rows 9-14
    pdesc = ["四项技能均衡发展，灵活调整","专注事务，细节导向","暗示为主，强势提问",
             "提问被动，需提升主动性","顾问引导，启发思考","价值导向，收益量化"]
    for i in range(6):
        r=i+9
        lines.append(row(r, [inl_c(f"A{r}", STRINGS[20+i]), inl_c(f"B{r}", pdesc[i])]))
    # Pattern formula row 15
    pf = ("IF(AND(MAX(B3:B6)-MIN(B3:B6)&lt;=0.5),&quot;S1_均衡型&quot;,"
          "IF(AND(B3&gt;B5,B4&gt;B5,B3&gt;B6,B4&gt;B6),&quot;S2_事务型&quot;,"
          "IF(AND(B5&gt;=B3,B5&gt;=B4,B5&gt;=B6,B5&gt;3.5),&quot;S3_激进型&quot;,"
          "IF(MAX(B3:B6)&lt;3,&quot;S4_被动型&quot;,"
          "IF(AND(B4&gt;B3,B5&gt;B3),&quot;S5_咨询型&quot;,"
          "IF(AND(B6&gt;=B3,B6&gt;=B4,B6&gt;=B5),&quot;S6_价值型&quot;,&quot;S1_均衡型&quot;)))))")
    lines.append(row(15, [str_c("A15",33,s=4), num_c("B15",s=6,f=pf)]))
    lines.append(row(16, [inl_c("A16","")]))
    lines.append(row(17, [str_c("A17",34,s=4)]))
    for i,txt in enumerate(["各维度均衡发展，SPIN技能成熟稳定。","建议持续关注暗示问题和需求效益问题的深度应用。","可在日常销售拜访中增加情境演练，强化短板维度。","整体评估：您的销售提问技巧处于良好至优秀水平。"]):
        lines.append(row(18+i, [inl_c(f"A{18+i}",txt)]))
    lines.extend(['  </sheetData>','  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>','</worksheet>'])
    with open(f"{TEMPLATE}/xl/worksheets/sheet2.xml","w",encoding="utf-8") as f:
        f.write("\n".join(lines))

def build_s3():
    lines = [
        '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>',
        '<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"',
        '  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">',
        '  <sheetViews><sheetView workbookViewId="0"/></sheetViews>',
        '  <sheetFormatPr defaultRowHeight="15"/>',
        '  <cols>',
        '    <col min="1" max="1" width="8" customWidth="1"/>',
        '    <col min="2" max="2" width="55" customWidth="1"/>',
        '    <col min="3" max="6" width="14" customWidth="1"/>',
        '    <col min="7" max="7" width="20" customWidth="1"/>',
        '    <col min="8" max="8" width="35" customWidth="1"/>',
        '  </cols>',
        '  <sheetData>',
        row(1, [inl_c("A1","题号",s=4), inl_c("B1","题目内容",s=4),
                inl_c("C1","选项A",s=4), inl_c("D1","选项B",s=4),
                inl_c("E1","选项C",s=4), inl_c("F1","选项D",s=4),
                inl_c("G1","维度标签",s=4), inl_c("H1","计分规则",s=4)]),
    ]
    for i,(dim,q) in enumerate(QUESTIONS):
        r=i+2
        cells=[num_c(f"A{r}",i+1,s=0), inl_c(f"B{r}",q,s=0)]
        for oi,opt in enumerate(OPTS):
            cells.append(inl_c(f"{chr(67+oi)}{r}",opt,s=0))
        cells.extend([inl_c(f"G{r}",dim,s=0), inl_c(f"H{r}","5点量表1-5分，直接计分",s=0)])
        lines.append(row(r, cells))
    lines.extend(['  </sheetData>','  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>','</worksheet>'])
    with open(f"{TEMPLATE}/xl/worksheets/sheet3.xml","w",encoding="utf-8") as f:
        f.write("\n".join(lines))

def build_s4():
    patterns=[("S1_均衡型","您的SPIN四项技能发展均衡，能够根据客户情况灵活调整提问策略。您在销售过程中能够自然地结合背景问题、难点问题、暗示问题和需求效益问题，表现出成熟的销售技巧。建议继续保持这种平衡，并在特定场景下进一步深化各维度的应用。"),
              ("S2_事务型","您更擅长处理事务性问题，专注于产品细节和操作层面的沟通。您的提问主要围绕具体事实和信息收集，在建立宏观视野和深度挖掘客户需求方面有提升空间。建议适当增加暗示问题和需求效益问题的使用，帮助客户看到更大的价值画面。"),
              ("S3_激进型","您倾向于激进提问方式，可能在挖掘客户深层需求时表现强势。您的暗示问题使用较多，但要注意控制提问节奏，避免给客户造成压力。建议在提问前先建立良好的信任关系，并在客户表现出兴趣时再深入挖掘。"),
              ("S4_被动型","您的提问相对被动，需要更主动地探索客户的需求和痛点。当前得分整体偏低，说明SPIN提问技巧需要系统性的提升。建议参加专业培训，在每次客户拜访前准备好SPIN提问提纲，有意识地增加提问的深度和广度。"),
              ("S5_咨询型","您具备较强的顾问式提问能力，擅长引导客户思考和决策。您的难点问题和暗示问题使用得当，能够帮助客户认识到问题的严重性和解决问题的价值。建议进一步强化需求效益问题，帮助客户明确投资回报预期。"),
              ("S6_价值型","您擅长价值导向的提问，能够有效传递解决方案的商业价值。您的需求效益问题得分最高，说明您善于帮助客户看到投资回报。但在背景问题和难点问题的深度挖掘上可以进一步加强，以建立更完整的销售对话。")]
    lines=['<?xml version="1.0" encoding="UTF-8" standalone="yes"?>',
           '<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"',
           '  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">',
           '  <sheetViews><sheetView workbookViewId="0"/></sheetViews>',
           '  <sheetFormatPr defaultRowHeight="15"/>',
           '  <cols><col min="1" max="1" width="20" customWidth="1"/>',
           '    <col min="2" max="2" width="80" customWidth="1"/>',
           '  </cols>',
           '  <sheetData>',
           row(1,[inl_c("A1","类型标签",s=4),inl_c("B1","解读内容",s=4)])]
    for i,(p,d) in enumerate(patterns):
        lines.append(row(i+2,[inl_c(f"A{i+2}",p,s=0),inl_c(f"B{i+2}",d,s=0)]))
    lines.extend(['  </sheetData>','  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>','</worksheet>'])
    with open(f"{TEMPLATE}/xl/worksheets/sheet4.xml","w",encoding="utf-8") as f:
        f.write("\n".join(lines))

def build_shared():
    lines=['<?xml version="1.0" encoding="UTF-8" standalone="yes"?>',
           '<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"',
           f' count="{len(STRINGS)}" uniqueCount="{len(STRINGS)}">']
    for s in STRINGS:
        lines.append(f'<si><t>{ss(s)}</t></si>')
    lines.append('</sst>')
    with open(f"{TEMPLATE}/xl/sharedStrings.xml","w",encoding="utf-8") as f:
        f.write("\n".join(lines))

def update_workbook():
    wb = f"""<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <fileVersion appName="xl" lastEdited="7" lowestEdited="7"/>
  <workbookPr defaultThemeVersion="166925"/>
  <bookViews><workbookView xWindow="0" yWindow="0" windowWidth="20140" windowHeight="10960"/></bookViews>
  <sheets>
    <sheet name="填答" sheetId="1" r:id="rId1"/>
    <sheet name="结果" sheetId="2" r:id="rId4"/>
    <sheet name="题库" sheetId="3" r:id="rId5"/>
    <sheet name="解读库" sheetId="4" r:id="rId6"/>
  </sheets>
  <calcPr calcId="191029"/>
</workbook>"""
    with open(f"{TEMPLATE}/xl/workbook.xml","w",encoding="utf-8") as f:
        f.write(wb)

    rels = f"""<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
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
  <Relationship Id="rId4"
    Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet"
    Target="worksheets/sheet2.xml"/>
  <Relationship Id="rId5"
    Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet"
    Target="worksheets/sheet3.xml"/>
  <Relationship Id="rId6"
    Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet"
    Target="worksheets/sheet4.xml"/>
</Relationships>"""
    with open(f"{TEMPLATE}/xl/_rels/workbook.xml.rels","w",encoding="utf-8") as f:
        f.write(rels)

    ct = f"""<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
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
</Types>"""
    with open(f"{TEMPLATE}/[Content_Types].xml","w",encoding="utf-8") as f:
        f.write(ct)

def main():
    print("Building shared strings..."); build_shared()
    print("Building sheet1 (填答)..."); build_s1()
    print("Building sheet2 (结果)..."); build_s2()
    print("Building sheet3 (题库)..."); build_s3()
    print("Building sheet4 (解读库)..."); build_s4()
    print("Updating workbook structure..."); update_workbook()
    print("Packing xlsx...")
    r = subprocess.run(["python3",f"{SKILL_DIR}/scripts/xlsx_pack.py",TEMPLATE,OUT],capture_output=True,text=True)
    print(r.stdout)
    if r.returncode:
        print("ERRORS:", r.stderr); sys.exit(1)
    print(f"Created: {OUT}")
    v = subprocess.run(["python3",f"{SKILL_DIR}/scripts/formula_check.py",OUT],capture_output=True,text=True)
    print(v.stdout)
    if v.returncode == 0: print("Validation passed!")
    else: print("VALIDATION:", v.stderr)

if __name__ == "__main__":
    main()
