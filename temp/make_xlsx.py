#!/usr/bin/env python3
"""Build SPIN assessment xlsx using pure Python zipfile/xml approach - no external dependencies."""
import zipfile, os

OUT = "D:/新课开发/测评表单/销售10大测评/01_SPIN销售提问行为自测.xlsx"
os.makedirs(os.path.dirname(OUT), exist_ok=True)

STRINGS = [
    "填答","结果","题库","解读库",
    "题号","题目内容","得分(1-5)",
    "维度","平均得分","等级","关键发现",
    "背景问题(BG)","难点问题(PB)","暗示问题(IM)","需求效益问题(NP)",
    "待发展","基础","良好","优秀","卓越",
    "S1_均衡型","S2_事务型","S3_激进型","S4_被动型","S5_咨询型","S6_价值型",
    "您的SPIN四项技能发展均衡，能够根据客户情况灵活调整提问策略。",
    "您更擅长处理事务性问题，专注于产品细节和操作层面的沟通。",
    "您倾向于激进提问方式，可能在挖掘客户深层需求时表现强势。",
    "您的提问相对被动，需要更主动地探索客户的需求和痛点。",
    "您具备较强的顾问式提问能力，擅长引导客户思考和决策。",
    "您擅长价值导向的提问，能够有效传递解决方案的商业价值。",
    "您的模式判定",
    "请根据您的实际销售行为，选择最符合的频率选项：1=几乎从不，5=每次都这样做",
    "SPIN销售提问行为自测",
    "","模式判定结果","综合分析",
    "各维度均衡发展，SPIN技能成熟稳定。",
    "建议持续关注暗示问题和需求效益问题的深度应用。",
    "可在日常销售拜访中增加情境演练，强化短板维度。",
    "整体评估：您的销售提问技巧处于良好至优秀水平。",
]

def s(t): return t.replace("&","&amp;").replace("<","&lt;").replace(">","&gt;")

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

def nc(ref, val=None, s_idx=0, f=None):
    a = f'r="{ref}"'
    if s_idx: a += f' s="{s_idx}"'
    if f: return f'<c {a}><f>{f}</f><v></v></c>'
    return f'<c {a}><v>{val}</v></c>'

def str_c(ref, idx, s_idx=0):
    a = f'r="{ref}" t="s"'
    if s_idx: a += f' s="{s_idx}"'
    return f'<c {a}><v>{idx}</v></c>'

def inl(ref, text, s_idx=0):
    a = f'r="{ref}" t="inlineStr"'
    if s_idx: a += f' s="{s_idx}"'
    return f'<c {a}><is><t>{s(text)}</t></is></c>'

def row(r_num, cells):
    return f'<row r="{r_num}">{"".join(cells)}</row>'

def sheet1_xml():
    cells = [row(1,[str_c("A1",29,s_idx=4)]),
             row(2,[str_c("A2",28)]),
             row(3,[str_c("A3",4,s_idx=4),str_c("B3",5,s_idx=4),str_c("C3",6,s_idx=4)])]
    for i,(dim,q) in enumerate(QUESTIONS):
        r=i+4
        cells.append(row(r,[nc(f"A{r}",i+1),inl(f"B{r}",q),nc(f"C{r}",3,s_idx=1)]))
    return f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0">
    <pane ySplit="3" topLeftCell="A4" activePane="bottomLeft" state="frozen"/>
  </sheetView></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols>
    <col min="1" max="1" width="8" customWidth="1"/>
    <col min="2" max="2" width="55" customWidth="1"/>
    <col min="3" max="3" width="14" customWidth="1"/>
  </cols>
  <sheetData>{"".join(cells)}</sheetData>
  <dataValidations>
    <dataValidation type="list" formula1="&quot;1,2,3,4,5&quot;" showDropDown="0" sqref="C4:C27"/>
  </dataValidations>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

def lf(c): return f"IF({c}&lt;2,&quot;待发展&quot;,IF({c}&lt;2.8,&quot;基础&quot;,IF({c}&lt;3.5,&quot;良好&quot;,IF({c}&lt;4.2,&quot;优秀&quot;,&quot;卓越&quot;))))"

def sheet2_xml():
    dim_data = [(3,11,"AVERAGE('填答'!C4:C9)"),(4,12,"AVERAGE('填答'!C10:C15)"),
                (5,13,"AVERAGE('填答'!C16:C21)"),(6,14,"AVERAGE('填答'!C22:C27)")]
    pf = ("IF(AND(MAX(B3:B6)-MIN(B3:B6)&lt;=0.5),&quot;S1_均衡型&quot;,"
          "IF(AND(B3&gt;B5,B4&gt;B5,B3&gt;B6,B4&gt;B6),&quot;S2_事务型&quot;,"
          "IF(AND(B5&gt;=B3,B5&gt;=B4,B5&gt;=B6,B5&gt;3.5),&quot;S3_激进型&quot;,"
          "IF(MAX(B3:B6)&lt;3,&quot;S4_被动型&quot;,"
          "IF(AND(B4&gt;B3,B5&gt;B3),&quot;S5_咨询型&quot;,"
          "IF(AND(B6&gt;=B3,B6&gt;=B4,B6&gt;=B5),&quot;S6_价值型&quot;,&quot;S1_均衡型&quot;)))))")
    pdesc=["四项技能均衡发展，灵活调整","专注事务，细节导向","暗示为主，强势提问",
           "提问被动，需提升主动性","顾问引导，启发思考","价值导向，收益量化"]
    cells=[row(1,[str_c("A1",29,s_idx=4)]),
           row(2,[str_c("A2",7,s_idx=4),str_c("B2",8,s_idx=4),str_c("C2",9,s_idx=4),str_c("D2",10,s_idx=4)])]
    for r_num,str_idx,avg_f in dim_data:
        cells.append(row(r_num,[str_c(f"A{r_num}",str_idx),nc(f"B{r_num}",s_idx=6,f=avg_f),nc(f"C{r_num}",s_idx=0,f=lf(f"B{r_num}")),inl(f"D{r_num}","")]))
    cells.extend([row(7,[inl("A7","")]),
                  row(8,[str_c("A8",33,s_idx=4)])])
    for i in range(6):
        r=i+9; cells.append(row(r,[inl(f"A{r}",STRINGS[20+i]),inl(f"B{r}",pdesc[i])]))
    cells.append(row(15,[str_c("A15",33,s_idx=4),nc("B15",s_idx=6,f=pf)]))
    cells.extend([row(16,[inl("A16","")]),
                  row(17,[str_c("A17",34,s_idx=4)])])
    for i,txt in enumerate(["各维度均衡发展，SPIN技能成熟稳定。","建议持续关注暗示问题和需求效益问题的深度应用。","可在日常销售拜访中增加情境演练，强化短板维度。","整体评估：您的销售提问技巧处于良好至优秀水平。"]):
        cells.append(row(18+i,[inl(f"A{18+i}",txt)]))
    return f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"/></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols>
    <col min="1" max="1" width="22" customWidth="1"/>
    <col min="2" max="2" width="14" customWidth="1"/>
    <col min="3" max="3" width="12" customWidth="1"/>
    <col min="4" max="4" width="40" customWidth="1"/>
  </cols>
  <sheetData>{"".join(cells)}</sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

def sheet3_xml():
    cells=[row(1,[inl("A1","题号",4),inl("B1","题目内容",4),inl("C1","选项A",4),
                inl("D1","选项B",4),inl("E1","选项C",4),inl("F1","选项D",4),
                inl("G1","维度标签",4),inl("H1","计分规则",4)])]
    for i,(dim,q) in enumerate(QUESTIONS):
        r=i+2
        c=[nc(f"A{r}",i+1),inl(f"B{r}",q)]
        for oi,opt in enumerate(OPTS): c.append(inl(f"{chr(67+oi)}{r}",opt))
        c.extend([inl(f"G{r}",dim),inl(f"H{r}","5点量表1-5分，直接计分")])
        cells.append(row(r,c))
    return f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"/></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols>
    <col min="1" max="1" width="8" customWidth="1"/>
    <col min="2" max="2" width="55" customWidth="1"/>
    <col min="3" max="6" width="14" customWidth="1"/>
    <col min="7" max="7" width="20" customWidth="1"/>
    <col min="8" max="8" width="35" customWidth="1"/>
  </cols>
  <sheetData>{"".join(cells)}</sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

def sheet4_xml():
    patterns=[("S1_均衡型","您的SPIN四项技能发展均衡，能够根据客户情况灵活调整提问策略。您在销售过程中能够自然地结合背景问题、难点问题、暗示问题和需求效益问题，表现出成熟的销售技巧。建议继续保持这种平衡，并在特定场景下进一步深化各维度的应用。"),
              ("S2_事务型","您更擅长处理事务性问题，专注于产品细节和操作层面的沟通。您的提问主要围绕具体事实和信息收集，在建立宏观视野和深度挖掘客户需求方面有提升空间。建议适当增加暗示问题和需求效益问题的使用，帮助客户看到更大的价值画面。"),
              ("S3_激进型","您倾向于激进提问方式，可能在挖掘客户深层需求时表现强势。您的暗示问题使用较多，但要注意控制提问节奏，避免给客户造成压力。建议在提问前先建立良好的信任关系，并在客户表现出兴趣时再深入挖掘。"),
              ("S4_被动型","您的提问相对被动，需要更主动地探索客户的需求和痛点。当前得分整体偏低，说明SPIN提问技巧需要系统性的提升。建议参加专业培训，在每次客户拜访前准备好SPIN提问提纲，有意识地增加提问的深度和广度。"),
              ("S5_咨询型","您具备较强的顾问式提问能力，擅长引导客户思考和决策。您的难点问题和暗示问题使用得当，能够帮助客户认识到问题的严重性和解决问题的价值。建议进一步强化需求效益问题，帮助客户明确投资回报预期。"),
              ("S6_价值型","您擅长价值导向的提问，能够有效传递解决方案的商业价值。您的需求效益问题得分最高，说明您善于帮助客户看到投资回报。但在背景问题和难点问题的深度挖掘上可以进一步加强，以建立更完整的销售对话。")]
    cells=[row(1,[inl("A1","类型标签",4),inl("B1","解读内容",4)])]
    for i,(p,d) in enumerate(patterns): cells.append(row(i+2,[inl(f"A{i+2}",p),inl(f"B{i+2}",d)]))
    return f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"/></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols>
    <col min="1" max="1" width="20" customWidth="1"/>
    <col min="2" max="2" width="80" customWidth="1"/>
  </cols>
  <sheetData>{"".join(cells)}</sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

def shared_strings_xml():
    si_items = "".join(f"<si><t>{s(t)}</t></si>" for t in STRINGS)
    return f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  count="{len(STRINGS)}" uniqueCount="{len(STRINGS)}">{si_items}</sst>'''

def styles_xml():
    return '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <fonts>
    <font><sz val="11"/><name val="微软雅黑"/></font>
    <font><sz val="11"/><name val="微软雅黑"/><color rgb="000000FF"/></font>
    <font><sz val="11"/><name val="微软雅黑"/><color rgb="00000000"/></font>
    <font><sz val="11"/><name val="微软雅黑"/><color rgb="00008000"/></font>
    <font><sz val="11"/><name val="微软雅黑"/><b/></font>
    <font><sz val="11"/><name val="微软雅黑"/><color rgb="000000FF"/><numFmt numFmtId="164" formatCode="$#,##0;($#,##0);&quot;-&quot;"/></font>
    <font><sz val="11"/><name val="微软雅黑"/><color rgb="00000000"/><numFmt numFmtId="164" formatCode="$#,##0;($#,##0);&quot;-&quot;"/></font>
    <font><sz val="11"/><name val="微软雅黑"/><color rgb="000000FF"/><numFmt numFmtId="165" formatCode="0.0%"/></font>
    <font><sz val="11"/><name val="微软雅黑"/><color rgb="00000000"/><numFmt numFmtId="165" formatCode="0.0%"/></font>
    <font><sz val="11"/><name val="微软雅黑"/><color rgb="000000FF"/><numFmt numFmtId="167" formatCode="#,##0"/></font>
    <font><sz val="11"/><name val="微软雅黑"/><color rgb="00000000"/><numFmt numFmtId="167" formatCode="#,##0"/></font>
    <font><sz val="11"/><name val="微软雅黑"/><color rgb="000000FF"/><numFmt numFmtId="1" formatCode="0"/></font>
  </fonts>
  <fills count="3">
    <fill><patternFill patternType="none"/></fill>
    <fill><patternFill patternType="gray125"/></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="00FFFF00"/></patternFill></fill>
  </fills>
  <borders count="1"><border><left/><right/><top/><bottom/><diagonal/></border></borders>
  <cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>
  <cellXfs count="13">
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
  </cellXfs>
</styleSheet>'''

def workbook_xml():
    return '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
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
</workbook>'''

def workbook_rels():
    return '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
  <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml"/>
  <Relationship Id="rId4" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet2.xml"/>
  <Relationship Id="rId5" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet3.xml"/>
  <Relationship Id="rId6" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet4.xml"/>
</Relationships>'''

def content_types():
    return '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
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

def root_rels():
    return '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/>
</Relationships>'''

def build():
    files = {
        "[Content_Types].xml": content_types(),
        "_rels/.rels": root_rels(),
        "xl/workbook.xml": workbook_xml(),
        "xl/_rels/workbook.xml.rels": workbook_rels(),
        "xl/sharedStrings.xml": shared_strings_xml(),
        "xl/styles.xml": styles_xml(),
        "xl/worksheets/sheet1.xml": sheet1_xml(),
        "xl/worksheets/sheet2.xml": sheet2_xml(),
        "xl/worksheets/sheet3.xml": sheet3_xml(),
        "xl/worksheets/sheet4.xml": sheet4_xml(),
    }
    with zipfile.ZipFile(OUT, "w", compression=zipfile.ZIP_DEFLATED) as zf:
        for path, content in files.items():
            zf.writestr(path, content.encode("utf-8"))
    print(f"Created: {OUT} ({os.path.getsize(OUT):,} bytes)")

if __name__ == "__main__":
    build()
