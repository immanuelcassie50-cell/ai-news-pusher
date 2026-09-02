#!/usr/bin/env python3
"""Build all 10 sales assessment Excel files."""
import zipfile, os

OUT_DIR = "D:/新课开发/测评表单/销售10大测评/"
os.makedirs(OUT_DIR, exist_ok=True)

def ss(t): return t.replace("&","&amp;").replace("<","&lt;").replace(">","&gt;")

def nc(ref, val=None, s=0, f=None):
    a = f'r="{ref}"'
    if s: a += f' s="{s}"'
    if f: return f'<c {a}><f>{f}</f><v></v></c>'
    return f'<c {a}><v>{val}</v></c>'

def str_c(ref, idx, s=0):
    a = f'r="{ref}" t="s"'
    if s: a += f' s="{s}"'
    return f'<c {a}><v>{idx}</v></c>'

def inl(ref, text, s=0):
    a = f'r="{ref}" t="inlineStr"'
    if s: a += f' s="{s}"'
    return f'<c {a}><is><t>{ss(text)}</t></is></c>'

def row(r_num, cells):
    return f'<row r="{r_num}">{"".join(cells)}</row>'

def shared_strings(items):
    si = "".join(f"<si><t>{ss(t)}</t></si>" for t in items)
    return f'<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="{len(items)}" uniqueCount="{len(items)}">{si}</sst>'

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

def workbook_xml(sheets):
    names = ",".join(f'<sheet name="{n}" sheetId="{i+1}" r:id="rId{i+1}"/>' for i,n in enumerate(sheets))
    return f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <fileVersion appName="xl" lastEdited="7" lowestEdited="7"/>
  <workbookPr defaultThemeVersion="166925"/>
  <bookViews><workbookView xWindow="0" yWindow="0" windowWidth="20140" windowHeight="10960"/></bookViews>
  <sheets>{names}</sheets>
  <calcPr calcId="191029"/>
</workbook>'''

def workbook_rels(n):
    rels = ['<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>',
            '<Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>',
            '<Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml"/>']
    for i in range(2, n+1):
        rels.append(f'<Relationship Id="rId{i}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet{i}.xml"/>')
    return f'<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">\n  ' + "\n  ".join(rels) + "\n</Relationships>"

def content_types(n):
    ov = [f'<Override PartName="/xl/worksheets/sheet{i}.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>' for i in range(1, n+1)]
    return f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
  {"".join(f"  {o}\n" for o in ov)}
  <Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>
  <Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/>
</Types>'''

def root_rels():
    return '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/>
</Relationships>'''

def make_sheet(cols_xml, rows, data_validations=None):
    header = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"/></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols>{cols_xml}</cols>
  <sheetData>{"".join(rows)}</sheetData>'''
    if data_validations:
        header += f"\n  <dataValidations>{data_validations}</dataValidations>"
    header += '\n  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>\n</worksheet>'
    return header

def pack_xlsx(filename, strings, sheets_data, sheet_names):
    """sheets_data: list of (cols_xml, rows, dv) tuples"""
    n = len(sheets_data)
    files = {
        "[Content_Types].xml": content_types(n),
        "_rels/.rels": root_rels(),
        "xl/workbook.xml": workbook_xml(sheet_names),
        "xl/_rels/workbook.xml.rels": workbook_rels(n),
        "xl/sharedStrings.xml": shared_strings(strings),
        "xl/styles.xml": styles_xml(),
    }
    for i, (cols, rows, dv) in enumerate(sheets_data):
        files[f"xl/worksheets/sheet{i+1}.xml"] = make_sheet(cols, rows, dv)
    with zipfile.ZipFile(filename, "w", compression=zipfile.ZIP_DEFLATED) as zf:
        for path, content in files.items():
            zf.writestr(path, content.encode("utf-8"))

# ============================================================
# 02: 挑战者销售档案测评
# ============================================================
def build_02():
    fname = os.path.join(OUT_DIR, "02_挑战者销售档案测评.xlsx")
    S = [
        "填答","结果","题库","解读库",
        "题号","题目内容","得分(1-5)",
        "维度","平均得分","等级","关键发现",
        "教导客户","因人制宜","掌控节奏","关系维护","问题解决",
        "待发展","基础","良好","优秀","卓越",
        "挑战者型","关系型","顾问型","执行型","平衡型",
        "教导客户型：您擅长引导客户看到新的可能性，具备教导式的销售风格。",
        "因人制宜型：您擅长根据不同客户特点灵活调整销售策略，适应性极强。",
        "掌控节奏型：您能够主导销售进程，有力推动交易按计划进行。",
        "关系维护型：您注重客户关系经营，与客户建立深厚的信任基础。",
        "问题解决型：您以解决客户问题为核心，是客户信赖的问题顾问。",
        "平衡型：您在多个维度表现均衡，是全面发展的销售人才。",
        "挑战者销售档案测评",
        "请根据您的实际销售表现，选择最符合的频率选项：1=完全不符合，5=完全符合",
        "挑战者倾向得分","档案判定",
        "教导客户×掌控节奏（激进挑战者）","因人制宜×关系维护（关系型）",
        "教导客户×问题解决（顾问型）","掌控节奏×执行型（执行型）",
        "各维度均衡发展（平衡型）",
        "您的档案判定","综合分析",
        "挑战者倾向高分区（教导客户、掌控节奏、因人制宜三项均分）",
        "您的挑战者销售基因突出，具备强势引导客户的潜能。",
        "建议在教导客户时增加情感连接，避免过于强势引发抵触。",
    ]
    Q = [
        ("教导客户","在销售过程中，我经常会向客户传递新的行业趋势和理念。"),
        ("教导客户","我会主动分享其他客户的成功案例来启发当前客户。"),
        ("教导客户","我善于发现客户尚未意识到的问题或机会。"),
        ("教导客户","我会挑战客户现有的假设，让他们重新思考。"),
        ("教导客户","我能够用数据和分析帮助客户看清问题的本质。"),
        ("教导客户","我会引导客户从不同角度审视自己的业务挑战。"),
        ("因人制宜","我会根据客户的不同性格调整自己的沟通风格。"),
        ("因人制宜","我能快速识别客户的决策风格并相应调整策略。"),
        ("因人制宜","对于不同类型的客户，我会采用不同的推进节奏。"),
        ("因人制宜","我会关注客户在不同阶段的情绪变化并灵活应对。"),
        ("因人制宜","我会识别客户内部不同利益相关者的诉求。"),
        ("因人制宜","我能根据客户的行业和业务特点定制化我的方案。"),
        ("掌控节奏","我会主动制定和推进销售阶段的里程碑。"),
        ("掌控节奏","当交易停滞时，我会主动采取行动打破僵局。"),
        ("掌控节奏","我会明确要求客户做出承诺，而不仅仅是被动等待。"),
        ("掌控节奏","我会对客户的承诺进行跟进落实。"),
        ("掌控节奏","我会管理客户的期望，包括对时间和成果的预期。"),
        ("掌控节奏","当机会不成熟时，我会果断放弃并转向其他机会。"),
        ("关系维护","我会与客户的关键决策人建立个人层面的信任。"),
        ("关系维护","我会定期主动联系客户，了解他们的业务近况。"),
        ("关系维护","即使没有具体的销售事务，我也会与客户保持联系。"),
        ("关系维护","客户在遇到问题时，我会第一时间给予支持。"),
        ("关系维护","我能够将客户发展为长期合作伙伴而非一次性交易。"),
        ("关系维护","我会真诚关心客户的职业发展，而不仅仅是销售关系。"),
        ("问题解决","我会深入了解客户业务运作的每一个细节。"),
        ("问题解决","面对复杂问题，我能快速找到有效的解决方案。"),
        ("问题解决","我会将客户的挑战视为自己的挑战全力以赴。"),
        ("问题解决","我善于整合内外部资源来满足客户需求。"),
        ("问题解决","我能够帮助客户预见潜在风险并提前做好准备。"),
        ("问题解决","在客户遇到突发问题时，我能保持冷静并迅速应对。"),
    ]
    OPTS = ["完全不符合(1)","偶尔符合(2)","有时符合(3)","经常符合(4)","完全符合(5)"]
    dim_ranges = [(3,11,"AVERAGE('填答'!C4:C9)"),(4,12,"AVERAGE('填答'!C10:C15)"),
                  (5,13,"AVERAGE('填答'!C16:C21)"),(6,14,"AVERAGE('填答'!C22:C27)"),(7,15,"AVERAGE('填答'!C28:C33)")]
    lf = lambda c: f"IF({c}&lt;2,&quot;待发展&quot;,IF({c}&lt;2.8,&quot;基础&quot;,IF({c}&lt;3.5,&quot;良好&quot;,IF({c}&lt;4.2,&quot;优秀&quot;,&quot;卓越&quot;))))"
    pf = ("IF(AND(B3&gt;3.5,B5&gt;3.5,B4&lt;3),&quot;挑战者型&quot;,"
          "IF(AND(B4&gt;3.5,B6&gt;3.5),&quot;关系型&quot;,"
          "IF(AND(B3&gt;3.5,B7&gt;3.5),&quot;顾问型&quot;,"
          "IF(AND(B5&gt;3.5,B7&lt;3),&quot;执行型&quot;,&quot;平衡型&quot;))))")

    s1_cols = '<col min="1" max="1" width="8" customWidth="1"/><col min="2" max="2" width="55" customWidth="1"/><col min="3" max="3" width="14" customWidth="1"/>'
    s1_rows = [row(1,[str_c("A1",26,s=4)]),row(2,[str_c("A2",27,s=0)]),
               row(3,[str_c("A3",4,s=4),str_c("B3",5,s=4),str_c("C3",6,s=4)])]
    for i,(d,q) in enumerate(Q):
        r=i+4
        s1_rows.append(row(r,[nc(f"A{r}",i+1),inl(f"B{r}",q),nc(f"C{r}",3,s=1)]))
    s1_dv = '<dataValidation type="list" formula1="&quot;1,2,3,4,5&quot;" showDropDown="0" sqref="C4:C33"/>'

    s2_cols = '<col min="1" max="1" width="22" customWidth="1"/><col min="2" max="2" width="14" customWidth="1"/><col min="3" max="3" width="12" customWidth="1"/><col min="4" max="4" width="40" customWidth="1"/>'
    s2_rows = [row(1,[str_c("A1",26,s=4)]),
               row(2,[str_c("A2",7,s=4),str_c("B2",8,s=4),str_c("C2",9,s=4),str_c("D2",10,s=4)])]
    for r_num,str_idx,avg_f in dim_ranges:
        s2_rows.append(row(r_num,[str_c(f"A{r_num}",str_idx),nc(f"B{r_num}",s=6,f=avg_f),nc(f"C{r_num}",s=0,f=lf(f"B{r_num}")),inl(f"D{r_num}","")]))
    s2_rows.extend([row(8,[inl("A8","")]),
                    row(9,[str_c("A9",29,s=4)]),
                    row(10,[str_c("A10",30,s=0),inl("B10","教导客户×掌控节奏（激进挑战者）")]),
                    row(11,[str_c("A11",30,s=0),inl("B11","因人制宜×关系维护（关系型）")]),
                    row(12,[str_c("A12",30,s=0),inl("B12","教导客户×问题解决（顾问型）")]),
                    row(13,[str_c("A13",30,s=0),inl("B13","掌控节奏×执行型（执行型）")]),
                    row(14,[str_c("A14",30,s=0),inl("B14","各维度均衡发展（平衡型）")]),
                    row(15,[str_c("A15",29,s=4),nc("B15",s=6,f=pf)]),
                    row(16,[inl("A16","")]),
                    row(17,[str_c("A17",34,s=4)]),
                    row(18,[str_c("A18",28,s=0),nc("B18",s=6,f="AVERAGE(B3:B7)")]),
                    row(19,[inl("A19","挑战者倾向高分区（教导客户、掌控节奏、因人制宜三项均分）")]),
                    row(20,[inl("A20","您的挑战者销售基因突出，具备强势引导客户的潜能。")]),
                    row(21,[inl("A21","建议在教导客户时增加情感连接，避免过于强势引发抵触。")])])

    s3_cols = '<col min="1" max="1" width="8" customWidth="1"/><col min="2" max="2" width="55" customWidth="1"/><col min="3" max="6" width="14" customWidth="1"/><col min="7" max="7" width="20" customWidth="1"/><col min="8" max="8" width="35" customWidth="1"/>'
    s3_rows = [row(1,[inl("A1","题号",4),inl("B1","题目内容",4),inl("C1","选项A",4),inl("D1","选项B",4),inl("E1","选项C",4),inl("F1","选项D",4),inl("G1","维度标签",4),inl("H1","计分规则",4)])]
    for i,(d,q) in enumerate(Q):
        r=i+2
        c=[nc(f"A{r}",i+1),inl(f"B{r}",q)]
        for oi,opt in enumerate(OPTS): c.append(inl(f"{chr(67+oi)}{r}",opt))
        c.extend([inl(f"G{r}",d),inl(f"H{r}","5点量表1-5分，直接计分")])
        s3_rows.append(row(r,c))

    patterns=[("挑战者型","您倾向于教导和挑战客户，能够为客户带来新的视角和思考。您的销售风格强势但有见地，适合引导客户走出舒适区。"),
              ("关系型","您擅长建立和维护客户关系，是客户信赖的合作伙伴。您注重个性化沟通，能够根据不同客户调整策略。"),
              ("顾问型","您以解决客户问题为核心，具备深厚的专业知识和洞察力。您是客户信赖的咨询顾问。"),
              ("执行型","您注重销售流程的掌控和执行效率，能够有力推动交易按计划进行。"),
              ("平衡型","您在各个维度表现均衡，既能教导客户也能维护关系，是全面发展的销售人才。")]
    s4_cols = '<col min="1" max="1" width="20" customWidth="1"/><col min="2" max="2" width="80" customWidth="1"/>'
    s4_rows = [row(1,[inl("A1","类型标签",4),inl("B1","解读内容",4)])]
    for i,(p,d) in enumerate(patterns): s4_rows.append(row(i+2,[inl(f"A{i+2}",p),inl(f"B{i+2}",d)]))

    pack_xlsx(fname, S, [
        (s1_cols, s1_rows, s1_dv),
        (s2_cols, s2_rows, None),
        (s3_cols, s3_rows, None),
        (s4_cols, s4_rows, None),
    ], ["填答","结果","题库","解读库"])
    print(f"Created: {fname}")

# ============================================================
# 03: 销售漏斗管理行为诊断
# ============================================================
def build_03():
    fname = os.path.join(OUT_DIR, "03_销售漏斗管理行为诊断.xlsx")
    S = [
        "填答","结果","题库","解读库",
        "题号","题目内容","题型","得分",
        "漏斗阶段","阶段得分","健康指数","问题诊断",
        "线索开发","需求挖掘","方案呈现","成交跟进",
        "待提升","一般","良好","优秀",
        "线索开发型","需求挖掘型","方案呈现型","成交跟进型",
        "您的漏斗管理能力偏重于线索开发阶段，善于拓展新机会。",
        "您的漏斗管理能力偏重于需求挖掘阶段，擅长深入了解客户。",
        "您的漏斗管理能力偏重于方案呈现阶段，方案准备充分。",
        "您的漏斗管理能力偏重于成交跟进阶段，成交转化能力强。",
        "销售漏斗管理行为诊断",
        "频率题请选择1-5（1=从不，5=总是）；判断题请选择1（是）或0（否）",
        "漏斗健康指数","各阶段得分","优势诊断","待提升诊断",
        "线索获取能力有待加强，需要更多主动拓客行为。",
        "需求挖掘深度不足，建议加强SPIN提问技巧。",
        "方案呈现质量需要提升，个性化定制有待加强。",
        "成交跟进策略单一，需要学习多种成交策略组合。",
        "漏斗整体健康状况良好，各阶段发展均衡。",
        "您的漏斗健康指数","档案判定",
    ]
    Q = [
        ("线索开发","我会主动拓展新客户渠道，而不仅仅依赖现有资源。","频率",3),
        ("线索开发","我会通过行业活动、社媒等方式主动寻找潜在客户。","频率",3),
        ("线索开发","我对目标客户有清晰的画像定义。","判断",3),
        ("线索开发","我会记录和整理所有潜在客户信息。","判断",3),
        ("线索开发","我会定期清理无效线索，保持数据库新鲜度。","频率",3),
        ("线索开发","我对线索质量有评估标准，优先跟进高价值线索。","频率",3),
        ("线索开发","我会设置线索提醒和跟进计划。","判断",3),
        ("需求挖掘","在初次沟通中，我会倾听多于陈述。","频率",3),
        ("需求挖掘","我会用开放式问题探索客户需求。","频率",3),
        ("需求挖掘","我会确认客户对优先级和预算的想法。","判断",3),
        ("需求挖掘","我会了解客户决策链条上的所有关键人。","判断",3),
        ("需求挖掘","我会识别客户的个人动机和情感驱动因素。","频率",3),
        ("需求挖掘","我会帮助客户明确他们的真实需求。","频率",3),
        ("需求挖掘","我会将需求转化为清晰的商业价值描述。","频率",3),
        ("方案呈现","我的方案有清晰的ROI数据支撑。","判断",3),
        ("方案呈现","我会根据客户需求定制化调整方案。","频率",3),
        ("方案呈现","方案呈现前我会充分准备，预判客户问题。","频率",3),
        ("方案呈现","我能用客户行业的语言讲述方案价值。","频率",3),
        ("方案呈现","我会准备多个方案版本供客户选择。","判断",3),
        ("方案呈现","方案讲解后我会主动要求反馈。","频率",3),
        ("方案呈现","我会记录方案呈现效果用于后续改进。","判断",3),
        ("成交跟进","报价后我会主动跟进客户决策进展。","频率",3),
        ("成交跟进","我会识别并克服成交前的最后异议。","频率",3),
        ("成交跟进","我不会在客户未准备好时强行推进成交。","判断",3),
        ("成交跟进","我会使用多种成交策略组合。","频率",3),
        ("成交跟进","成交后我会及时启动交付和客户成功流程。","判断",3),
        ("成交跟进","我会与客户约定后续联络计划。","频率",3),
        ("成交跟进","我会请求客户转介绍作为持续业务来源。","频率",3),
    ]
    # 判断题计分: 3->1, 2->0.5, 1->0; 频率题直接1-5
    # 简化为: 判断题C列填1或0(Yes=1, No=0)，频率题填1-5
    # 结果计算: 频率题用AVERAGE，判断题用SUM/COUNT
    # 漏斗健康指数 = 各阶段平均分/5*100
    OPTS_F = ["从不(1)","很少(2)","有时(3)","经常(4)","总是(5)"]
    OPTS_Y = ["是(1)","否(0)"]
    dim_ranges = [(3,11,"线索开发","'填答'!C4:C10"),(4,12,"需求挖掘","'填答'!C11:C17"),
                  (5,13,"方案呈现","'填答'!C18:C24"),(6,14,"成交跟进","'填答'!C25:C31")]
    # 类型标签: str_idx 20-23
    lf = lambda c: f"IF({c}&lt;40,&quot;待提升&quot;,IF({c}&lt;60,&quot;一般&quot;,IF({c}&lt;75,&quot;良好&quot;,&quot;优秀&quot;))))"
    pf = ("IF(AND(B3=MAX(B3:B6),MAX(B3:B6)-MIN(B3:B6)&gt;15),&quot;线索开发型&quot;,"
          "IF(AND(B4=MAX(B3:B6),MAX(B3:B6)-MIN(B3:B6)&gt;15),&quot;需求挖掘型&quot;,"
          "IF(AND(B5=MAX(B3:B6),MAX(B3:B6)-MIN(B3:B6)&gt;15),&quot;方案呈现型&quot;,"
          "IF(AND(B6=MAX(B3:B6),MAX(B3:B6)-MIN(B3:B6)&gt;15),&quot;成交跟进型&quot;,&quot;均衡发展型&quot;))))")

    s1_cols = '<col min="1" max="1" width="8" customWidth="1"/><col min="2" max="2" width="55" customWidth="1"/><col min="3" max="3" width="12" customWidth="1"/>'
    s1_rows = [row(1,[str_c("A1",27,s=4)]),row(2,[str_c("A2",28,s=0)]),
               row(3,[str_c("A3",4,s=4),str_c("B3",5,s=4),str_c("C3",6,s=4)])]
    for i,(d,q,tp,defv) in enumerate(Q):
        r=i+4
        s1_rows.append(row(r,[nc(f"A{r}",i+1),inl(f"B{r}",q),nc(f"C{r}",defv,s=1)]))
    dv_parts = [f"C4:C10" for _,_,_,_ in Q[:7]]
    s1_dv = '<dataValidation type="list" formula1="&quot;1,2,3,4,5&quot;" showDropDown="0" sqref="C4:C31"/>'

    s2_cols = '<col min="1" max="1" width="22" customWidth="1"/><col min="2" max="2" width="14" customWidth="1"/><col min="3" max="3" width="12" customWidth="1"/><col min="4" max="4" width="40" customWidth="1"/>'
    s2_rows = [row(1,[str_c("A1",27,s=4)]),
               row(2,[str_c("A2",7,s=4),str_c("B2",8,s=4),str_c("C2",9,s=4),str_c("D2",10,s=4)])]
    for r_num,str_idx,dim_name,range_ref in dim_ranges:
        health_f = f"AVERAGE({range_ref})/5*100"
        s2_rows.append(row(r_num,[str_c(f"A{r_num}",str_idx),nc(f"B{r_num}",s=6,f=health_f),nc(f"C{r_num}",s=0,f=lf(f"B{r_num}")),inl(f"D{r_num}","")]))
    s2_rows.extend([
        row(7,[inl("A7","")]),
        row(8,[str_c("A8",29,s=4)]),
        row(9,[str_c("A9",30,s=0),inl("B9","线索开发型：线索获取能力强")]),
        row(10,[str_c("A10",30,s=0),inl("B10","需求挖掘型：客户需求理解深入")]),
        row(11,[str_c("A11",30,s=0),inl("B11","方案呈现型：方案准备充分专业")]),
        row(12,[str_c("A12",30,s=0),inl("B12","成交跟进型：成交转化效率高")]),
        row(13,[str_c("A13",30,s=0),inl("B13","均衡发展型：各阶段能力均衡")]),
        row(14,[str_c("A14",29,s=4),nc("B14",s=6,f=pf)]),
        row(15,[inl("A15","")]),
        row(16,[str_c("A16",34,s=4)]),
        row(17,[str_c("A17",28,s=0),nc("B17",s=6,f="AVERAGE(B3:B6)")]),
        row(18,[inl("A18","漏斗整体健康状况良好，各阶段发展均衡。")]),
    ])

    s3_cols = '<col min="1" max="1" width="8" customWidth="1"/><col min="2" max="2" width="55" customWidth="1"/><col min="3" max="3" width="12" customWidth="1"/><col min="4" max="4" width="10" customWidth="1"/>'
    s3_rows = [row(1,[inl("A1","题号",4),inl("B1","题目内容",4),inl("C1","题型",4),inl("D1","计分规则",4)])]
    for i,(d,q,tp,defv) in enumerate(Q):
        rule = "频率1-5直接计分" if tp=="频率" else "判断题:是=1分,否=0分"
        s3_rows.append(row(i+2,[nc(f"A{i+2}",i+1),inl(f"B{i+2}",q),inl(f"C{i+2}",tp),inl(f"D{i+2}",rule)]))

    patterns=[("线索开发型","您的漏斗管理能力偏重于线索开发阶段，善于拓展新机会。建议提升需求挖掘深度。"),
              ("需求挖掘型","您的漏斗管理能力偏重于需求挖掘阶段，擅长深入了解客户。建议加强方案差异化。"),
              ("方案呈现型","您的漏斗管理能力偏重于方案呈现阶段，方案准备充分。建议加强成交逼单能力。"),
              ("成交跟进型","您的漏斗管理能力偏重于成交跟进阶段，成交转化能力强。建议回头加强早期阶段管理。"),
              ("均衡发展型","您的漏斗各阶段发展均衡，是全面的销售漏斗管理者。")]
    s4_cols = '<col min="1" max="1" width="20" customWidth="1"/><col min="2" max="2" width="80" customWidth="1"/>'
    s4_rows = [row(1,[inl("A1","类型标签",4),inl("B1","解读内容",4)])]
    for i,(p,d) in enumerate(patterns): s4_rows.append(row(i+2,[inl(f"A{i+2}",p),inl(f"B{i+2}",d)]))

    pack_xlsx(fname, S, [
        (s1_cols, s1_rows, s1_dv),
        (s2_cols, s2_rows, None),
        (s3_cols, s3_rows, None),
        (s4_cols, s4_rows, None),
    ], ["填答","结果","题库","解读库"])
    print(f"Created: {fname}")

# ============================================================
# 04: 顾问式销售vs交易式销售倾向测评
# ============================================================
def build_04():
    fname = os.path.join(OUT_DIR, "04_顾问式销售vs交易式销售倾向测评.xlsx")
    S = [
        "填答","结果","题库","解读库",
        "题号","题目", "选项A(顾问型)","选项B(交易型)","得分",
        "维度","维度得分","倾向判断","倾向说明",
        "需求理解力","方案定制力","关系经营力","价值传递力",
        "交易导向","过渡型","顾问导向",
        "交易导向（0-8分）：您更倾向于快速成交导向，关注短期交易成果。",
        "过渡型（9-14分）：您在顾问式和交易式之间处于平衡状态。",
        "顾问导向（15-20分）：您更倾向于长期价值导向，关注客户需求深度满足。",
        "顾问式销售vs交易式销售倾向测评",
        "每题二选一：选择更符合您实际销售行为的选项（A=顾问型，B=交易型）",
        "总得分","您的倾向判断","解读标签",
        "顾问型销售具备强大的需求理解、方案定制和关系经营能力。",
    ]
    Q = [
        ("A客户犹豫不决时，您会？","帮助客户分析犹豫的根源，找到真正的决策障碍","立即提供折扣或优惠，促使客户快速决定"),
        ("面对客户压价时，您会？","深入了解客户的预算约束和决策标准，寻找双赢方案","尽可能坚持原价，或提供最小幅度的让步"),
        ("客户需求模糊时，您会？","花时间深入探索，帮助客户明确真实需求","按照对需求的理解直接提供标准方案"),
        ("签单后客户有异议时，您会？","主动跟进，了解新出现的顾虑并提供解决方案","说明合同条款，按约定执行"),
        ("面对长期合作的客户，您会？","与客户共同制定长期合作目标和价值创造计划","按订单执行，专注于完成当期交易任务"),
        ("客户提到竞争对手时，您会？","客观分析各方案优缺点，让客户自己做判断","强调自己产品的独特优势，说服客户选择"),
        ("客户对技术细节不感兴趣时，您会？","聚焦业务价值和投资回报，用客户语言沟通","提供详细技术参数，证明产品性能优势"),
        ("发现客户有潜在需求时，您会？","与客户深入讨论这个需求的影响和解决后的价值","介绍相关产品功能，由客户自行决定是否需要"),
        ("面对多个决策人时，您会？","逐一了解各决策人的诉求，寻求整体最优方案","重点搞定最终决策人，其他人来协调"),
        ("销售周期很长时，您会？","持续为客户提供价值，保持定期沟通和关系维护","在关键节点集中发力，其他时间减少投入"),
        ("客户表示预算不足时，您会？","帮助客户分析投资回报，证明价值大于成本","寻找便宜的替代方案或缩小方案范围"),
        ("客户需要跨部门协调时，您会？","协助客户协调各方资源，推动内部决策","要求客户自己解决内部问题，我只负责产品"),
        ("客户对实施风险有顾虑时，您会？","提供风险缓解方案和成功案例，降低客户担忧","说明合同中的风险条款，明确各自责任"),
        ("面对价格敏感的中小客户，您会？","提供性价比最优的方案，强调长期合作价值","推荐基础版本，用量取胜"),
        ("发现客户的深层痛点时，您会？","针对痛点设计深度解决方案，帮助客户实现突破","提供标准化产品，快速完成交易"),
        ("客户要求演示时，您会？","根据客户情况定制演示内容，聚焦关键决策人","提供标准产品演示，让客户自行判断"),
        ("面对客户不断变化的需求，您会？","灵活调整方案，满足客户演变的真实需求","坚持初始方案框架，控制变更范围"),
        ("客户决策人更换时，您会？","重新建立信任，了解新决策人的诉求和偏好","尽快与新决策人确认原有方案的执行"),
        ("客户要求最快交付时，您会？","评估可行性，在保证质量的前提下优化交付计划","接受客户要求，承诺最快交付"),
        ("销售汇报时，您更关注？","客户需求满足度和长期关系健康度","本期签约率和销售收入"),
    ]
    # 顾问型=1分，交易型=0分，选A得分=1，选B得分=0
    # 结果: SUM A列 = 顾问型总分
    # 子维度分组: Q1-5=需求理解力,Q6-10=方案定制力,Q11-15=关系经营力,Q16-20=价值传递力
    lf = lambda c: f"IF({c}&lt;=8,&quot;交易导向&quot;,IF({c}&lt;=14,&quot;过渡型&quot;,&quot;顾问导向&quot;))"

    s1_cols = '<col min="1" max="1" width="8" customWidth="1"/><col min="2" max="2" width="40" customWidth="1"/><col min="3" max="3" width="40" customWidth="1"/><col min="4" max="4" width="12" customWidth="1"/>'
    s1_rows = [row(1,[str_c("A1",28,s=4)]),row(2,[str_c("A2",29,s=0)]),
               row(3,[str_c("A3",4,s=4),str_c("B3",5,s=4),str_c("C3",6,s=4),str_c("D3",7,s=4)])]
    for i,(q,a,b) in enumerate(Q):
        r=i+4
        # C column: 0 or 1 (A=consultant type得分1)
        s1_rows.append(row(r,[nc(f"A{r}",i+1),inl(f"B{r}",q),inl(f"C{r}",a),nc(f"D{r}",1,s=1)]))
    s1_dv = '<dataValidation type="list" formula1="&quot;0,1&quot;" showDropDown="0" sqref="D4:D23"/>'

    s2_cols = '<col min="1" max="1" width="22" customWidth="1"/><col min="2" max="2" width="14" customWidth="1"/><col min="3" max="3" width="14" customWidth="1"/><col min="4" max="4" width="40" customWidth="1"/>'
    s2_rows = [row(1,[str_c("A1",28,s=4)]),
               row(2,[str_c("A2",9,s=4),str_c("B2",10,s=4),str_c("C2",11,s=4),str_c("D2",12,s=4)])]
    dim_data = [(3,13,"SUM('填答'!D4:D8)"),(4,14,"SUM('填答'!D9:D13)"),
                (5,15,"SUM('填答'!D14:D18)"),(6,16,"SUM('填答'!D19:D23)")]
    for r_num,str_idx,f_formula in dim_data:
        s2_rows.append(row(r_num,[str_c(f"A{r_num}",str_idx),nc(f"B{r_num}",s=6,f=f_formula),inl(f"C{r_num}",""),inl(f"D{r_num}","")]))
    s2_rows.extend([
        row(7,[inl("A7","")]),
        row(8,[str_c("A8",28,s=0),nc("B8",s=6,f="SUM('填答'!D4:D23)"),nc("C8",s=0,f=lf("B8")),inl("D8","")]),
        row(9,[inl("A9","")]),
        row(10,[str_c("A10",29,s=4)]),
        row(11,[str_c("A11",27,s=0),inl("B11","交易导向（0-8分）：您更倾向于快速成交导向")]),
        row(12,[str_c("A12",27,s=0),inl("B12","过渡型（9-14分）：顾问式和交易式之间平衡")]),
        row(13,[str_c("A13",27,s=0),inl("B13","顾问导向（15-20分）：长期价值导向，关注需求深度满足")]),
        row(14,[inl("A14","")]),
        row(15,[str_c("A15",30,s=4)]),
        row(16,[inl("A16","顾问型销售具备强大的需求理解、方案定制和关系经营能力。")]),
    ])

    s3_cols = '<col min="1" max="1" width="8" customWidth="1"/><col min="2" max="2" width="45" customWidth="1"/><col min="3" max="3" width="40" customWidth="1"/><col min="4" max="4" width="40" customWidth="1"/><col min="5" max="5" width="20" customWidth="1"/>'
    s3_rows = [row(1,[inl("A1","题号",4),inl("B1","题目",4),inl("C1","选项A(顾问型)",4),inl("D1","选项B(交易型)",4),inl("E1","维度",4)])]
    dims_s3 = ["需求理解力","需求理解力","需求理解力","需求理解力","需求理解力",
               "方案定制力","方案定制力","方案定制力","方案定制力","方案定制力",
               "关系经营力","关系经营力","关系经营力","关系经营力","关系经营力",
               "价值传递力","价值传递力","价值传递力","价值传递力","价值传递力"]
    for i,(q,a,b) in enumerate(Q):
        s3_rows.append(row(i+2,[nc(f"A{i+2}",i+1),inl(f"B{i+2}",q),inl(f"C{i+2}",a),inl(f"D{i+2}",b),inl(f"E{i+2}",dims_s3[i])]))

    patterns=[("交易导向","您更倾向于快速成交导向，关注短期交易成果。在高价值复杂销售中，建议增加需求深度探索。"),
              ("过渡型","您在顾问式和交易式之间处于平衡状态，能够根据情境灵活切换销售策略。"),
              ("顾问导向","您更倾向于长期价值导向，关注客户需求深度满足。是复杂B2B销售的最佳实践者。")]
    s4_cols = '<col min="1" max="1" width="20" customWidth="1"/><col min="2" max="2" width="80" customWidth="1"/>'
    s4_rows = [row(1,[inl("A1","类型标签",4),inl("B1","解读内容",4)])]
    for i,(p,d) in enumerate(patterns): s4_rows.append(row(i+2,[inl(f"A{i+2}",p),inl(f"B{i+2}",d)]))

    pack_xlsx(fname, S, [
        (s1_cols, s1_rows, s1_dv),
        (s2_cols, s2_rows, None),
        (s3_cols, s3_rows, None),
        (s4_cols, s4_rows, None),
    ], ["填答","结果","题库","解读库"])
    print(f"Created: {fname}")

# ============================================================
# 05: 销售人员抗拒处理风格测评
# ============================================================
def build_05():
    fname = os.path.join(OUT_DIR, "05_销售人员抗拒处理风格测评.xlsx")
    S = [
        "填答","结果","题库","解读库",
        "题号","情境描述","应对方式","得分",
        "异议类型","类型频次","主导风格","风格解读",
        "价格异议","时间异议","竞争异议","需求异议",
        "回避型","退让型","直面型","共赢型",
        "您的异议处理以回避为主，倾向于绕开而不是正面解决。",
        "您的异议处理以退让为主，愿意用让步换取交易。",
        "您的异议处理以直面为主，勇于面对并强力反驳。",
        "您的异议处理以共赢为主，寻求双方都接受的方案。",
        "销售人员抗拒处理风格测评",
        "每题描述一个情境，请选择您最常用的应对方式（A/B/C/D）",
        "主导风格判定","风格分布频次","综合分析",
        "回避型风格适用于建立关系初期，不适合处理核心异议。",
        "退让型风格容易牺牲利润，长期不利于销售可持续性。",
        "直面型需要高情商支撑，适合有充分证据支持的情况。",
        "共赢型是复杂异议处理的最佳实践，需要较高的谈判技巧。",
    ]
    Q = [
        ("价格异议","客户说：你们的报价比竞争对手贵多了。","强调产品的差异化和长期投资回报","同意降价以匹配竞争对手","暂停讨论，转移话题到其他方面","提出增加服务或延长合同作为替代方案"),
        ("时间异议","客户说：我们这个项目不着急，可以再等等看。","告诉客户拖延可能带来的机会成本","尊重客户决定，约定下次联系时间","表示项目紧迫性，要求尽快决策","询问客户延迟的真正原因，对症下药"),
        ("竞争异议","客户说：你们的产品和对手X差不多，没什么区别。","强调自己的独特卖点和差异化优势","承认相似但强调价格或服务优势","不再讨论竞品，聚焦自身价值","与客户一起比较双方方案的优劣势"),
        ("需求异议","客户说：我感觉我们不太需要这个功能。","解释这个功能如何解决客户的潜在问题","表示可以帮客户申请去掉该功能的折扣","先放下这个功能，谈其他部分","询问客户不需要的真正原因，再针对性回应"),
        ("价格异议","客户说：便宜点我们就签合同。","分析性价比，证明价值远超价格","直接给出最低折扣争取成交","反问客户预算范围，探知底线","提出价值交换条件，而非简单降价"),
        ("时间异议","客户说：我们部门还没讨论完，要再开会。","提醒等待期间可能的市场变化","表示理解，另约具体时间","要求参与客户内部会议，推动决策","协助客户整理内部决策材料，加速进程"),
        ("竞争异议","客户说：对手答应给我们更低的折扣。","强调价格以外的价值差异和服务保障","表示可以申请特殊折扣","强调选择低价供应商的风险","提出整体解决方案的价值而非单品价格"),
        ("需求异议","客户说：现在预算紧张，今年不做了。","说明推迟带来的额外成本和损失","尊重客户决定，改为跟进明年预算","强调市场竞争态势催促决策","协助客户制定明年预算计划并提前规划"),
        ("价格异议","客户财务说：审批通不过，太贵了。","帮助客户准备投资回报分析给上级","同意降价，减少配置","建议分阶段采购，降低单次门槛","帮客户寻找内部资源整合方案"),
        ("时间异议","客户说：负责人今天不在，签不了字。","询问负责人回来的时间，另约拜访","约定等负责人回来后再联系","要负责人联系方式，直接沟通","请客户帮忙推动，约定最晚签字时间"),
        ("竞争异议","客户说：我们已经在用对手的产品，换成本太高。","强调替换成本和长期总成本","接受现状，转为增量和续约策略","不再讨论替换，聚焦增购机会","帮助客户做竞品对比总拥有成本分析"),
        ("需求异议","客户说：这个功能我们用不上，别浪费时间。","展示该功能对其他类似客户的成功案例","调整方案，去掉不需要的功能","询问客户真正需要哪些功能","邀请客户做需求诊断，找到真实痛点"),
        ("价格异议","客户说：别家给更低的价格，你们能match吗？","提供完整价值证明，说明价格构成","直接match价格争取业务","拒绝match，强调质量差异","提出综合价值方案，价格只是因素之一"),
        ("时间异议","客户说：我们需要走招标流程，很麻烦。","解释招标条件对你们有利的方面","接受招标，参与竞争","质疑招标的必要性","帮助客户优化招标条件和评分标准"),
        ("竞争异议","客户说：你们品牌知名度不如对手。","强调自身专业性和服务口碑","降低价格弥补品牌差距","不再回应品牌话题，聚焦产品","用案例和数据说明实际使用效果"),
        ("需求异议","客户说：你们的方案不完整，缺很多东西。","详细说明方案完整性和范围边界","同意补充客户要求的内容","坚持原有方案是最好的选择","与客户一起梳理真实需求和方案范围"),
    ]
    OPTS = ["A","B","C","D"]
    # 回避=A, 退让=B, 直面=C, 共赢=D
    # Score: A=0回避,B=1退让,C=2直面,D=3共赢
    # 结果: 统计各风格频次，判断主导风格
    style_map = ["回避型","退让型","直面型","共赢型"]

    s1_cols = '<col min="1" max="1" width="8" customWidth="1"/><col min="2" max="2" width="45" customWidth="1"/><col min="3" max="3" width="35" customWidth="1"/><col min="4" max="4" width="12" customWidth="1"/>'
    s1_rows = [row(1,[str_c("A1",28,s=4)]),row(2,[str_c("A2",29,s=0)]),
               row(3,[str_c("A3",4,s=4),str_c("B3",5,s=4),str_c("C3",6,s=4),str_c("D3",7,s=4)])]
    for i,(ytype,q,a,b,c,d) in enumerate(Q):
        r=i+4
        # 选项合并显示 + 得分列(默认0)
        opt_text = f"A:{a[0:15]}... / B:{b[0:15]}... / C:{c[0:15]}... / D:{d[0:15]}..."
        s1_rows.append(row(r,[nc(f"A{r}",i+1),inl(f"B{r}",q),inl(f"C{r}",opt_text),nc(f"D{r}",0,s=1)]))
    s1_dv = '<dataValidation type="list" formula1="&quot;0,1,2,3&quot;" showDropDown="0" sqref="D4:D19"/>'

    s2_cols = '<col min="1" max="1" width="22" customWidth="1"/><col min="2" max="2" width="14" customWidth="1"/><col min="3" max="3" width="14" customWidth="1"/><col min="4" max="4" width="40" customWidth="1"/>'
    s2_rows = [row(1,[str_c("A1",28,s=4)]),
               row(2,[str_c("A2",9,s=4),str_c("B2",10,s=4),str_c("C2",11,s=4),str_c("D2",12,s=4)])]
    # 统计4种风格的COUNTIF
    for i,style in enumerate(style_map):
        r=i+3
        s2_rows.append(row(r,[str_c(f"A{r}",27+i,s=0),nc(f"B{r}",s=6,f=f"COUNTIF('填答'!D4:D19,{i})"),inl(f"C{r}",""),inl(f"D{r}","")]))
    s2_rows.extend([
        row(7,[inl("A7","")]),
        row(8,[str_c("A8",29,s=4)]),
        row(9,[str_c("A9",27,s=0),inl("B9","回避型：绕开异议，不正面解决")]),
        row(10,[str_c("A10",27,s=0),inl("B10","退让型：愿意让步换交易")]),
        row(11,[str_c("A11",27,s=0),inl("B11","直面型：强力反驳，据理力争")]),
        row(12,[str_c("A12",27,s=0),inl("B12","共赢型：寻求双方满意方案")]),
        row(13,[str_c("A13",29,s=4),
                 nc("B13",s=6,f="IF(B3=MAX(B3:B6),&quot;回避型&quot;,IF(B4=MAX(B3:B6),&quot;退让型&quot;,IF(B5=MAX(B3:B6),&quot;直面型&quot;,&quot;共赢型&quot;))))")]),
        row(14,[inl("A14","")]),
        row(15,[str_c("A15",30,s=4)]),
        row(16,[inl("A16","回避型适用于建立关系初期，不适合处理核心异议。")]),
        row(17,[inl("A17","退让型容易牺牲利润，长期不利于销售可持续性。")]),
        row(18,[inl("A18","直面型需要高情商支撑，适合有充分证据支持的情况。")]),
        row(19,[inl("A19","共赢型是复杂异议处理的最佳实践，需要较高的谈判技巧。")]),
    ])

    s3_cols = '<col min="1" max="1" width="8" customWidth="1"/><col min="2" max="2" width="45" customWidth="1"/><col min="3" max="6" width="20" customWidth="1"/><col min="7" max="7" width="12" customWidth="1"/>'
    s3_rows = [row(1,[inl("A1","题号",4),inl("B1","情境描述",4),inl("C1","A回避",4),inl("D1","B退让",4),inl("E1","C直面",4),inl("F1","D共赢",4),inl("G1","类型",4)])]
    objection_types = ["价格异议","时间异议","竞争异议","需求异议"] * 4
    for i,(ytype,q,a,b,c,d) in enumerate(Q):
        r=i+2
        s3_rows.append(row(r,[nc(f"A{r}",i+1),inl(f"B{r}",q),inl(f"C{r}",a[0:30]),inl(f"D{r}",b[0:30]),inl(f"E{r}",c[0:30]),inl(f"F{r}",d[0:30]),inl(f"G{r}",objection_types[i])]))

    patterns=[("回避型","您的异议处理以回避为主，倾向于绕开而不是正面解决。建议在核心异议上练习直面处理技巧。"),
              ("退让型","您的异议处理以退让为主，愿意用让步换取交易。建议增加共赢谈判技巧的训练，避免利润牺牲。"),
              ("直面型","您的异议处理以直面为主，勇于面对并强力反驳。建议注意客户感受，避免过度强势。"),
              ("共赢型","您的异议处理以共赢为主，寻求双方都接受的方案。这是复杂异议处理的最佳实践。")]
    s4_cols = '<col min="1" max="1" width="20" customWidth="1"/><col min="2" max="2" width="80" customWidth="1"/>'
    s4_rows = [row(1,[inl("A1","类型标签",4),inl("B1","解读内容",4)])]
    for i,(p,d) in enumerate(patterns): s4_rows.append(row(i+2,[inl(f"A{i+2}",p),inl(f"B{i+2}",d)]))

    pack_xlsx(fname, S, [
        (s1_cols, s1_rows, s1_dv),
        (s2_cols, s2_rows, None),
        (s3_cols, s3_rows, None),
        (s4_cols, s4_rows, None),
    ], ["填答","结果","题库","解读库"])
    print(f"Created: {fname}")

# ============================================================
# 06: 销售人员客户关系深度测评
# ============================================================
def build_06():
    fname = os.path.join(OUT_DIR, "06_销售人员客户关系深度测评.xlsx")
    S = [
        "填答","结果","题库","解读库",
        "题号","题目内容","得分(1-5)",
        "关系层次","层次得分","层次判断","层次说明",
        "供应商关系","信息提供者","问题解决者","可信赖顾问",
        "待发展","初级","中级","高级","资深",
        "您目前与客户处于供应商关系层次，关系较浅，合作稳定性低。",
        "您目前与客户处于信息提供者层次，开始建立专业认可。",
        "您目前与客户处于问题解决者层次，能够解决客户痛点。",
        "您目前与客户处于可信赖顾问层次，客户高度依赖您的建议。",
        "销售人员客户关系深度测评",
        "请根据您与客户的实际关系，选择最符合的频率选项：1=从未如此，5=一直如此",
        "关系深度指数","主导关系层次","综合分析",
        "提升建议：加强行业洞察分享，建立定期沟通机制，提升专业影响力。",
    ]
    Q = [
        ("供应商关系","客户只在有采购需求时才会联系我。"),
        ("供应商关系","我的主要价值是提供标准产品或服务。"),
        ("供应商关系","客户对我的个人了解有限，主要看公司品牌。"),
        ("供应商关系","我们的关系基于具体的交易条款。"),
        ("供应商关系","客户较少主动与我分享业务信息。"),
        ("供应商关系","竞争者很容易替代我的位置。"),
        ("信息提供者","客户会主动向我咨询行业趋势和市场动态。"),
        ("信息提供者","我能定期向客户提供有价值的市场信息。"),
        ("信息提供者","客户承认我在该领域具有专业知识。"),
        ("信息提供者","客户会引用我的分析来做内部决策。"),
        ("信息提供者","我会主动向客户分享相关案例和最佳实践。"),
        ("信息提供者","客户愿意花时间听取我的专业建议。"),
        ("问题解决者","当客户遇到问题时，我会第一时间参与解决。"),
        ("问题解决者","我能够帮助客户找到问题的根本原因。"),
        ("问题解决者","客户在遇到复杂问题时主动寻求我的帮助。"),
        ("问题解决者","我了解客户业务的细节，能够提供针对性建议。"),
        ("问题解决者","客户依赖我来跟踪和推动问题的解决。"),
        ("问题解决者","我会主动预判客户可能面临的问题并提前预警。"),
        ("可信赖顾问","客户会与我分享尚未公开的商业计划或战略。"),
        ("可信赖顾问","客户在重大决策前会征求我的意见。"),
        ("可信赖顾问","客户把我视为长期可信赖的合作伙伴。"),
        ("可信赖顾问","即使没有业务往来，客户也会与我保持联系。"),
        ("可信赖顾问","我参与过客户的高管级别战略讨论。"),
        ("可信赖顾问","我的建议能够影响客户的关键决策方向。"),
    ]
    OPTS = ["从未如此(1)","很少如此(2)","有时如此(3)","经常如此(4)","一直如此(5)"]
    dim_ranges = [(3,11,"'填答'!C4:C9"),(4,12,"'填答'!C10:C15"),(5,13,"'填答'!C16:C21"),(6,14,"'填答'!C22:C27")]
    lf = lambda c: f"IF({c}&lt;2,&quot;待发展&quot;,IF({c}&lt;2.8,&quot;初级&quot;,IF({c}&lt;3.5,&quot;中级&quot;,IF({c}&lt;4.2,&quot;高级&quot;,&quot;资深&quot;))))"
    pf = (f"IF(B3=MAX(B3:B6),&quot;供应商关系&quot;,"
          f"IF(B4=MAX(B3:B6),&quot;信息提供者&quot;,"
          f"IF(B5=MAX(B3:B6),&quot;问题解决者&quot;,&quot;可信赖顾问&quot;))))")

    s1_cols = '<col min="1" max="1" width="8" customWidth="1"/><col min="2" max="2" width="55" customWidth="1"/><col min="3" max="3" width="14" customWidth="1"/>'
    s1_rows = [row(1,[str_c("A1",28,s=4)]),row(2,[str_c("A2",29,s=0)]),
               row(3,[str_c("A3",4,s=4),str_c("B3",5,s=4),str_c("C3",6,s=4)])]
    for i,(d,q) in enumerate(Q):
        r=i+4
        s1_rows.append(row(r,[nc(f"A{r}",i+1),inl(f"B{r}",q),nc(f"C{r}",3,s=1)]))
    s1_dv = '<dataValidation type="list" formula1="&quot;1,2,3,4,5&quot;" showDropDown="0" sqref="C4:C27"/>'

    s2_cols = '<col min="1" max="1" width="22" customWidth="1"/><col min="2" max="2" width="14" customWidth="1"/><col min="3" max="3" width="12" customWidth="1"/><col min="4" max="4" width="40" customWidth="1"/>'
    s2_rows = [row(1,[str_c("A1",28,s=4)]),
               row(2,[str_c("A2",7,s=4),str_c("B2",8,s=4),str_c("C2",9,s=4),str_c("D2",10,s=4)])]
    for r_num,str_idx,range_ref in dim_ranges:
        s2_rows.append(row(r_num,[str_c(f"A{r_num}",str_idx),nc(f"B{r_num}",s=6,f=f"AVERAGE({range_ref})"),nc(f"C{r_num}",s=0,f=lf(f"B{r_num}")),inl(f"D{r_num}","")]))
    s2_rows.extend([
        row(7,[inl("A7","")]),
        row(8,[str_c("A8",29,s=4)]),
        row(9,[str_c("A9",27,s=0),inl("B9","供应商关系：关系较浅，合作稳定性低")]),
        row(10,[str_c("A10",27,s=0),inl("B10","信息提供者：建立专业认可，有一定话语权")]),
        row(11,[str_c("A11",27,s=0),inl("B11","问题解决者：能解决痛点，受客户依赖")]),
        row(12,[str_c("A12",27,s=0),inl("B12","可信赖顾问：最高层次，客户高度依赖")]),
        row(13,[str_c("A13",29,s=4),nc("B13",s=6,f=pf)]),
        row(14,[inl("A14","")]),
        row(15,[str_c("A15",30,s=4)]),
        row(16,[str_c("A16",28,s=0),nc("B16",s=6,f="AVERAGE(B3:B6)")]),
        row(17,[inl("A17","提升建议：加强行业洞察分享，建立定期沟通机制，提升专业影响力。")]),
    ])

    s3_cols = '<col min="1" max="1" width="8" customWidth="1"/><col min="2" max="2" width="55" customWidth="1"/><col min="3" max="6" width="14" customWidth="1"/><col min="7" max="7" width="20" customWidth="1"/>'
    s3_rows = [row(1,[inl("A1","题号",4),inl("B1","题目内容",4),inl("C1","选项A",4),inl("D1","选项B",4),inl("E1","选项C",4),inl("F1","选项D",4),inl("G1","维度",4)])]
    for i,(d,q) in enumerate(Q):
        r=i+2
        s3_rows.append(row(r,[nc(f"A{r}",i+1),inl(f"B{r}",q),inl(f"C{r}",OPTS[0]),inl(f"D{r}",OPTS[1]),inl(f"E{r}",OPTS[2]),inl(f"F{r}",OPTS[3]),inl(f"G{r}",d)]))

    patterns=[("供应商关系","您目前与客户处于供应商关系层次，关系较浅，合作稳定性低。建议从提供洞察和主动支持开始逐步加深关系。"),
              ("信息提供者","您目前与客户处于信息提供者层次，开始建立专业认可。建议持续输出高质量内容，强化专业形象。"),
              ("问题解决者","您目前与客户处于问题解决者层次，能够解决客户痛点。建议主动参与客户战略规划，提升影响力。"),
              ("可信赖顾问","您目前与客户处于可信赖顾问层次，客户高度依赖您的建议。这是B2B销售的最高境界，建议维护并继续深化。")]
    s4_cols = '<col min="1" max="1" width="20" customWidth="1"/><col min="2" max="2" width="80" customWidth="1"/>'
    s4_rows = [row(1,[inl("A1","类型标签",4),inl("B1","解读内容",4)])]
    for i,(p,d) in enumerate(patterns): s4_rows.append(row(i+2,[inl(f"A{i+2}",p),inl(f"B{i+2}",d)]))

    pack_xlsx(fname, S, [
        (s1_cols, s1_rows, s1_dv),
        (s2_cols, s2_rows, None),
        (s3_cols, s3_rows, None),
        (s4_cols, s4_rows, None),
    ], ["填答","结果","题库","解读库"])
    print(f"Created: {fname}")

# ============================================================
# 07: 销售人员情绪韧性测评
# ============================================================
def build_07():
    fname = os.path.join(OUT_DIR, "07_销售人员情绪韧性测评.xlsx")
    S = [
        "填答","结果","题库","解读库",
        "题号","题目内容","得分(1-5)",
        "维度","维度均分","韧性指数","解读",
        "认知解释风格","情绪恢复速度","行动持续性",
        "低韧性","中等韧性","高韧性",
        "低韧性（0-40分）：您在面对销售挫折时容易陷入消极思维，恢复周期较长。",
        "中等韧性（41-70分）：您有一定的情绪调节能力，但面对重大挫折时需要加强。",
        "高韧性（71-100分）：您具备优秀的情绪韧性，能够快速调整并持续行动。",
        "销售人员情绪韧性测评",
        "请根据您在销售工作中面对挫折时的实际反应，选择最符合的选项：1=完全不符合，5=完全符合",
        "情绪韧性总指数","主导维度","综合分析",
        "建议：通过正念练习、认知重构训练和建立支持系统来提升情绪韧性。",
    ]
    Q = [
        ("认知解释风格","丢单后，我会反复回想自己的失误。"),
        ("认知解释风格","遇到客户拒绝时，我会觉得自己不适合做销售。"),
        ("认知解释风格","当业绩不好时，我会担心被团队看不起。"),
        ("认知解释风格","失败的销售经历会让我对后续机会也失去信心。"),
        ("认知解释风格","被客户批评后，我会长时间感到沮丧。"),
        ("认知解释风格","我会把一次挫折放大为全面的能力否定。"),
        ("认知解释风格","面对连续的拒绝，我会开始怀疑自己的价值。"),
        ("认知解释风格","业绩波动时，我的情绪波动比业绩波动更大。"),
        ("情绪恢复速度","面对销售挫折，我能在一小时内调整好情绪。"),
        ("情绪恢复速度","客户发火后，我能快速平复并继续工作。"),
        ("情绪恢复速度","我会用运动或娱乐快速转换心情。"),
        ("情绪恢复速度","挫折后我能很快看到新的机会点。"),
        ("情绪恢复速度","负面情绪不会影响我第二天的正常工作。"),
        ("情绪恢复速度","我能快速从失败中学习而不是被失败拖累。"),
        ("情绪恢复速度","我会主动寻求同事或上级的支持来加速恢复。"),
        ("情绪恢复速度","即使经历重大挫折，我也能保持对销售的热情。"),
        ("行动持续性","连续被拒绝后，我会更坚持不懈地跟进下一个客户。"),
        ("行动持续性","业绩低迷期，我会主动增加拜访量。"),
        ("行动持续性","遇到困难客户，我不会轻易放弃。"),
        ("行动持续性","我会把挫折当作学习机会继续前进。"),
        ("行动持续性","即使短期内没有成交，我也会持续维护客户关系。"),
        ("行动持续性","面对激烈竞争，我会更加努力提升自己的技能。"),
        ("行动持续性","业绩目标未达成时，我会调整策略继续冲刺。"),
        ("行动持续性","我会从成功案例中汲取力量来面对挑战。"),
    ]
    OPTS = ["完全不符合(1)","偶尔符合(2)","有时符合(3)","经常符合(4)","完全符合(5)"]
    # 认知解释风格: 8题, 反向计分(需要翻转)
    # 情绪恢复速度: 8题, 正向
    # 行动持续性: 8题, 正向
    # 韧性指数 = (SUM正向 + (24-SUM反向))*100/24
    # 简化为: 全部正向计分, 认知维度用(6-AVERAGE)翻转
    dim_ranges = [(3,11,"'填答'!C4:C11"),(4,12,"'填答'!C12:C19"),(5,13,"'填答'!C20:C27")]
    # 韧性指数: (SUM(C4:C11反转) + SUM(C12:C27)) / 24 * 100
    # 反转: 5-x (如果原始1-5)
    resilience_f = "(AVERAGE('填答'!C4:C11)*5-5+SUM('填答'!C12:C27))/24*100"
    lf = lambda c: f"IF({c}&lt;41,&quot;低韧性&quot;,IF({c}&lt;71,&quot;中等韧性&quot;,&quot;高韧性&quot;))"

    s1_cols = '<col min="1" max="1" width="8" customWidth="1"/><col min="2" max="2" width="55" customWidth="1"/><col min="3" max="3" width="14" customWidth="1"/>'
    s1_rows = [row(1,[str_c("A1",28,s=4)]),row(2,[str_c("A2",29,s=0)]),
               row(3,[str_c("A3",4,s=4),str_c("B3",5,s=4),str_c("C3",6,s=4)])]
    for i,(d,q) in enumerate(Q):
        r=i+4
        s1_rows.append(row(r,[nc(f"A{r}",i+1),inl(f"B{r}",q),nc(f"C{r}",3,s=1)]))
    s1_dv = '<dataValidation type="list" formula1="&quot;1,2,3,4,5&quot;" showDropDown="0" sqref="C4:C27"/>'

    s2_cols = '<col min="1" max="1" width="22" customWidth="1"/><col min="2" max="2" width="14" customWidth="1"/><col min="3" max="3" width="12" customWidth="1"/><col min="4" max="4" width="40" customWidth="1"/>'
    s2_rows = [row(1,[str_c("A1",28,s=4)]),
               row(2,[str_c("A2",7,s=4),str_c("B2",8,s=4),str_c("C2",9,s=4),str_c("D2",10,s=4)])]
    for r_num,str_idx,range_ref in dim_ranges:
        s2_rows.append(row(r_num,[str_c(f"A{r_num}",str_idx),nc(f"B{r_num}",s=6,f=f"AVERAGE({range_ref})"),nc(f"C{r_num}",s=0,f=lf(f"B{r_num}")),inl(f"D{r_num}","")]))
    s2_rows.extend([
        row(7,[inl("A7","")]),
        row(8,[str_c("A8",29,s=4)]),
        row(9,[str_c("A9",27,s=0),inl("B9","低韧性：面对挫折容易消极，恢复慢")]),
        row(10,[str_c("A10",27,s=0),inl("B10","中等韧性：有一定调节能力，需继续提升")]),
        row(11,[str_c("A11",27,s=0),inl("B11","高韧性：快速调整，持续行动能力强")]),
        row(12,[str_c("A12",29,s=4),nc("B12",s=6,f=resilience_f),nc("C12",s=0,f=lf("B12")),inl("D12","")]),
        row(13,[inl("A13","")]),
        row(14,[str_c("A14",30,s=4)]),
        row(15,[str_c("A15",28,s=0),nc("B15",s=6,f=resilience_f)]),
        row(16,[inl("A16","建议：通过正念练习、认知重构训练和建立支持系统来提升情绪韧性。")]),
    ])

    s3_cols = '<col min="1" max="1" width="8" customWidth="1"/><col min="2" max="2" width="55" customWidth="1"/><col min="3" max="6" width="14" customWidth="1"/><col min="7" max="7" width="20" customWidth="1"/>'
    s3_rows = [row(1,[inl("A1","题号",4),inl("B1","题目内容",4),inl("C1","选项A",4),inl("D1","选项B",4),inl("E1","选项C",4),inl("F1","选项D",4),inl("G1","维度",4)])]
    for i,(d,q) in enumerate(Q):
        r=i+2
        s3_rows.append(row(r,[nc(f"A{r}",i+1),inl(f"B{r}",q),inl(f"C{r}",OPTS[0]),inl(f"D{r}",OPTS[1]),inl(f"E{r}",OPTS[2]),inl(f"F{r}",OPTS[3]),inl(f"G{r}",d)]))

    patterns=[("低韧性","您在面对销售挫折时容易陷入消极思维，恢复周期较长。建议通过正念练习、认知重构和建立支持系统来提升情绪韧性。"),
              ("中等韧性","您有一定的情绪调节能力，但面对重大挫折时需要加强。建议刻意练习挫折恢复技巧，建立积极的心态习惯。"),
              ("高韧性","您具备优秀的情绪韧性，能够快速调整并持续行动。建议继续保持并帮助团队其他成员提升。")]
    s4_cols = '<col min="1" max="1" width="20" customWidth="1"/><col min="2" max="2" width="80" customWidth="1"/>'
    s4_rows = [row(1,[inl("A1","类型标签",4),inl("B1","解读内容",4)])]
    for i,(p,d) in enumerate(patterns): s4_rows.append(row(i+2,[inl(f"A{i+2}",p),inl(f"B{i+2}",d)]))

    pack_xlsx(fname, S, [
        (s1_cols, s1_rows, s1_dv),
        (s2_cols, s2_rows, None),
        (s3_cols, s3_rows, None),
        (s4_cols, s4_rows, None),
    ], ["填答","结果","题库","解读库"])
    print(f"Created: {fname}")

# ============================================================
# 08: 销售目标管理与自我驱动力测评
# ============================================================
def build_08():
    fname = os.path.join(OUT_DIR, "08_销售目标管理与自我驱动力测评.xlsx")
    S = [
        "填答","结果","题库","解读库",
        "题号","题目内容","得分(1-5)",
        "维度","维度均分","驱动力矩阵","综合分析",
        "目标设定质量","行动计划执行","内在动机","外在动机",
        "高内在+高外在（燃烧型）","高内在+低外在（理想主义者）","低内在+高外在（外部驱动型）","低内在+低外在（迷茫型）",
        "燃烧型：高内在+高外在，您既有热情又有外部激励，是最佳状态。",
        "理想主义者：您出于热爱而销售，但外部激励机制不足，需要加强目标激励。",
        "外部驱动型：您受外部奖励驱动，但内在热情不足，需要找到工作的内在意义。",
        "迷茫型：您目前对销售工作缺乏内外部驱动力，建议重新审视职业方向。",
        "销售目标管理与自我驱动力测评",
        "请根据您的实际情况选择最符合的选项：1=完全不符合，5=完全符合",
        "驱动力指数","驱动力类型判定","驱动力矩阵解读",
        "建议：明确职业发展路径，设定有挑战性但可实现的目标，建立内外部双重激励机制。",
    ]
    Q = [
        ("目标设定质量","我设定的销售目标有明确的数字和时间节点。"),
        ("目标设定质量","我会将年度目标分解到季度和月度。"),
        ("目标设定质量","我的目标设定基于对市场机会的客观分析。"),
        ("目标设定质量","我会根据历史数据设定可达成的目标。"),
        ("目标设定质量","目标遇到挑战时，我会及时调整而非盲目坚持。"),
        ("目标设定质量","我会将个人目标与团队目标协同对齐。"),
        ("目标设定质量","我清楚知道达成目标需要哪些资源和支持。"),
        ("行动计划执行","我会为达成目标制定详细的行动计划。"),
        ("行动计划执行","每天开始工作前，我有明确的工作优先级。"),
        ("行动计划执行","我会定期回顾目标进度并调整行动。"),
        ("行动计划执行","即使没有监督，我也会按计划执行。"),
        ("行动计划执行","我能够克服拖延，立即行动。"),
        ("行动计划执行","我善于将大目标拆解为可执行的小步骤。"),
        ("行动计划执行","我会主动寻找达成目标的最优方法。"),
        ("行动计划执行","环境变化时，我能快速调整行动策略。"),
        ("内在动机","我热爱销售工作本身，享受解决问题的过程。"),
        ("内在动机","帮助客户成功给我带来强烈的成就感。"),
        ("内在动机","我享受不断学习和提升自己的过程。"),
        ("内在动机","我主动寻找新方法新思路，而非等待指令。"),
        ("内在动机","即使没有外部奖励，我也会努力做好工作。"),
        ("内在动机","我把每次挑战视为成长的机会。"),
        ("内在动机","我为自己是销售人员而感到自豪。"),
        ("内在动机","我享受完成困难任务带来的满足感。"),
        ("外在动机","高业绩提成能有效激发我的工作热情。"),
        ("外在动机","获得认可和晋升机会对我很重要。"),
        ("外在动机","竞争排名能激发我的好胜心。"),
        ("外在动机","获得销售冠军等荣誉对我有很大吸引力。"),
        ("外在动机","我关注同事的业绩表现并受其激励。"),
        ("外在动机","客户的好评和感谢能有效激励我。"),
        ("外在动机","我受到他人对我的销售能力评价的影响。"),
    ]
    OPTS = ["完全不符合(1)","偶尔符合(2)","有时符合(3)","经常符合(4)","完全符合(5)"]
    dim_ranges = [(3,11,"'填答'!C4:C10"),(4,12,"'填答'!C11:C17"),(5,13,"'填答'!C18:C25"),(6,14,"'填答'!C26:C33")]
    # 矩阵判断: 内在>3.5为高，<3.5为低；外在同样
    pf = ("IF(AND(B5&gt;=3.5,B6&gt;=3.5),&quot;燃烧型&quot;,"
          "IF(AND(B5&gt;=3.5,B6&lt;3.5),&quot;理想主义者&quot;,"
          "IF(AND(B5&lt;3.5,B6&gt;=3.5),&quot;外部驱动型&quot;,&quot;迷茫型&quot;))))")

    s1_cols = '<col min="1" max="1" width="8" customWidth="1"/><col min="2" max="2" width="55" customWidth="1"/><col min="3" max="3" width="14" customWidth="1"/>'
    s1_rows = [row(1,[str_c("A1",28,s=4)]),row(2,[str_c("A2",29,s=0)]),
               row(3,[str_c("A3",4,s=4),str_c("B3",5,s=4),str_c("C3",6,s=4)])]
    for i,(d,q) in enumerate(Q):
        r=i+4
        s1_rows.append(row(r,[nc(f"A{r}",i+1),inl(f"B{r}",q),nc(f"C{r}",3,s=1)]))
    s1_dv = '<dataValidation type="list" formula1="&quot;1,2,3,4,5&quot;" showDropDown="0" sqref="C4:C33"/>'

    s2_cols = '<col min="1" max="1" width="22" customWidth="1"/><col min="2" max="2" width="14" customWidth="1"/><col min="3" max="3" width="12" customWidth="1"/><col min="4" max="4" width="40" customWidth="1"/>'
    s2_rows = [row(1,[str_c("A1",28,s=4)]),
               row(2,[str_c("A2",7,s=4),str_c("B2",8,s=4),str_c("C2",9,s=4),str_c("D2",10,s=4)])]
    for r_num,str_idx,range_ref in dim_ranges:
        s2_rows.append(row(r_num,[str_c(f"A{r_num}",str_idx),nc(f"B{r_num}",s=6,f=f"AVERAGE({range_ref})"),inl(f"C{r_num}",""),inl(f"D{r_num}","")]))
    s2_rows.extend([
        row(7,[inl("A7","")]),
        row(8,[str_c("A8",29,s=4)]),
        row(9,[str_c("A9",27,s=0),inl("B9","高内在+高外在（燃烧型）")]),
        row(10,[str_c("A10",27,s=0),inl("B10","高内在+低外在（理想主义者）")]),
        row(11,[str_c("A11",27,s=0),inl("B11","低内在+高外在（外部驱动型）")]),
        row(12,[str_c("A12",27,s=0),inl("B12","低内在+低外在（迷茫型）")]),
        row(13,[str_c("A13",29,s=4),nc("B13",s=6,f=pf)]),
        row(14,[inl("A14","")]),
        row(15,[str_c("A15",30,s=4)]),
        row(16,[inl("A16","建议：明确职业发展路径，设定有挑战性但可实现的目标，建立内外部双重激励机制。")]),
    ])

    s3_cols = '<col min="1" max="1" width="8" customWidth="1"/><col min="2" max="2" width="55" customWidth="1"/><col min="3" max="6" width="14" customWidth="1"/><col min="7" max="7" width="20" customWidth="1"/>'
    s3_rows = [row(1,[inl("A1","题号",4),inl("B1","题目内容",4),inl("C1","选项A",4),inl("D1","选项B",4),inl("E1","选项C",4),inl("F1","选项D",4),inl("G1","维度",4)])]
    for i,(d,q) in enumerate(Q):
        r=i+2
        s3_rows.append(row(r,[nc(f"A{r}",i+1),inl(f"B{r}",q),inl(f"C{r}",OPTS[0]),inl(f"D{r}",OPTS[1]),inl(f"E{r}",OPTS[2]),inl(f"F{r}",OPTS[3]),inl(f"G{r}",d)]))

    patterns=[("燃烧型","高内在+高外在，您既有热情又有外部激励，是最佳状态。建议继续保持并帮助他人也达到这种状态。"),
              ("理想主义者","您出于热爱而销售，但外部激励机制不足。建议与上级沟通设定更具吸引力的激励方案。"),
              ("外部驱动型","您受外部奖励驱动，但内在热情不足。建议找到工作的内在意义，与个人价值观连接。"),
              ("迷茫型","您目前对销售工作缺乏内外部驱动力。建议重新审视职业方向，找到能激发热情的工作内容。")]
    s4_cols = '<col min="1" max="1" width="20" customWidth="1"/><col min="2" max="2" width="80" customWidth="1"/>'
    s4_rows = [row(1,[inl("A1","类型标签",4),inl("B1","解读内容",4)])]
    for i,(p,d) in enumerate(patterns): s4_rows.append(row(i+2,[inl(f"A{i+2}",p),inl(f"B{i+2}",d)]))

    pack_xlsx(fname, S, [
        (s1_cols, s1_rows, s1_dv),
        (s2_cols, s2_rows, None),
        (s3_cols, s3_rows, None),
        (s4_cols, s4_rows, None),
    ], ["填答","结果","题库","解读库"])
    print(f"Created: {fname}")

# ============================================================
# 09: B2B销售复杂度适配性测评
# ============================================================
def build_09():
    fname = os.path.join(OUT_DIR, "09_B2B销售复杂度适配性测评.xlsx")
    S = [
        "填答","结果","题库","解读库",
        "题号","题目内容","题型","得分",
        "维度","维度均分","复杂销售准备指数","维度判断",
        "决策地图","多线程关系","需求差异化","销售节奏","内部资源",
        "待发展","基础","良好","优秀","卓越",
        "低复杂度适配者","中复杂度适配者","高复杂度适配者",
        "低复杂度适配者：您更适合短平快的简单交易模式。",
        "中复杂度适配者：您能够处理中等复杂度的销售场景。",
        "高复杂度适配者：您是复杂B2B销售的高手，适合大客户经营。",
        "B2B销售复杂度适配性测评",
        "情境题请根据您最可能的行为选择（A/B/C/D）；频率题请选择1-5",
        "复杂销售准备指数","复杂度适配类型","综合分析",
        "建议：加强多线程关系管理和内部资源协调能力，提升复杂销售场景应对能力。",
    ]
    Q = [
        ("决策地图","面对一个大型企业多层级决策链条，您通常会？","绘制完整的决策地图，明确每个人的角色和影响力","重点搞定最终决策人，其他由客户内部协调","按组织架构逐级推进，不跳过任何层级","根据客户描述推断决策流程"),
        ("多线程关系","客户内部有多个利益相关者，您会？","与每个关键人建立单独的关系和沟通渠道","聚焦关键决策人，让他们影响其他人","相信最终决策人会协调内部意见","我主要通过销售窗口与客户联络"),
        ("需求差异化","面对大客户的个性化需求时，您会？","深入调研客户业务，定制化满足独特需求","提供标准产品，差异化的部分由客户自己解决","与产品团队协作寻找定制化解决方案","推荐其他更适合的标准产品的供应商"),
        ("销售节奏","面对一个6个月以上销售周期的大单，您会？","制定分阶段里程碑，持续推进，保持热度","依赖客户主动推进，我们等待结果","与客户约定每个阶段的明确交付物","同时推进多个阶段，不把鸡蛋放在一个篮子"),
        ("内部资源","需要跨部门协调资源时，您会？","主动发起跨部门会议，明确资源需求和时间表","向销售经理申请，由他协调内部资源","按流程提交资源申请，等待分配","尽量依靠自己能调动的资源完成"),
        ("决策地图","您如何识别一个项目中的最终决策者？","通过多轮对话和利益分析确认拍板人","询问客户销售窗口，由他告知","通过层级关系判断，高层一定是决策者","只与销售窗口联络，不关心背后决策链"),
        ("多线程关系","客户内部出现利益冲突时，您会？","识别各方诉求，寻求共同利益，推动共识达成","支持最强一方，其他由市场决定","不介入客户内部事务，保持中立","退出这个项目，等待局势明朗"),
        ("需求差异化","客户的需求超出产品当前能力范围时，您会？","与产品和研发协作，评估定制开发的可行性和成本","婉拒这个需求，坚持现有标准产品","寻找生态合作伙伴填补能力缺口","如实告知能力边界，由客户自行决定"),
        ("销售节奏","客户突然要求加快进度时，您会？","评估内部资源，快速调整计划并重新约定里程碑","接受要求，同时启动所有资源赶工","与客户沟通合理的最短时间窗口","按照原计划推进，不接受压缩时间"),
        ("内部资源","您所在组织的销售支持资源如何？","资源充足，支持团队专业，响应及时","资源一般，需要提前申请排队","资源有限，需要靠个人关系获取支持","资源严重不足，主要靠自己硬扛"),
        ("决策地图","您如何了解客户内部的决策流程？","系统访谈各层级，了解角色和决策权重","请客户销售窗口提供一份决策结构图","在多次接触中逐步观察和推断","不需要了解，客户会主动告诉我流程"),
        ("多线程关系","您与客户各层级沟通的频率如何？","与高层保持战略对话，与中层保持执行联络","主要与执行层接触，高层偶尔沟通","主要与高层接触，执行层由同事跟进","没有固定模式，看情况而定"),
        ("需求差异化","您如何评估客户需求的复杂程度？","从业务影响、涉及部门、预算规模等维度综合评估","根据经验直觉判断，越大的客户需求越复杂","只关注与自身产品相关的功能需求","让客户自己评估，他们最清楚自己的需求"),
        ("销售节奏","您如何管理长周期销售中的客户预期？","分阶段设置期望值，提供阶段性成果证明价值","让客户耐心等待，最终结果会证明一切","接受客户的一切要求，尽力满足","不管理预期，按最低承诺交付"),
        ("内部资源","当您需要高层支持时，如何获得？","主动定期向高层汇报，建立信任和沟通机制","只有在关键时刻才请求高层出面支持","请销售经理代为引荐和协调","尽量不麻烦高层，靠自己解决"),
        ("决策地图","客户内部出现政治斗争时，您的策略是？","保持中立，聚焦业务价值，不介入政治","选择支持获胜可能性大的一方","不参与客户内部政治，远离漩涡","趁机寻找支持我们方案的政治力量"),
        ("多线程关系","您如何维护与大客户的关系粘性？","共同制定年度合作计划，定期高层对话","有问题随时联系，没事不打扰","依靠产品和服务质量，让客户自然留存","通过返点和商业激励维持关系"),
        ("需求差异化","您如何处理客户的技术整合需求？","评估技术可行性和工作量，定制整合方案","让客户找IT部门自行解决","提供标准API和技术文档支持","建议客户使用更简单的产品避免整合"),
        ("销售节奏","当客户预算在年底突然削减时，您的应对是？","与客户一起重新评估优先级，找到关键支出点","接受现实，压缩利润维持业务","尝试从其他预算渠道申请补充","等待下一年度预算重新启动项目"),
        ("内部资源","您如何评估自己的内部影响力？","能够调动跨部门资源完成复杂项目","主要依靠经理的支持来协调资源","能完成基本销售支持，但深度协作少","主要靠自己，资源协调能力有限"),
        ("决策地图","您如何识别客户项目中的隐形决策者？","通过多角度访谈和观察，发现真正的推动力量","询问销售窗口，让他揭示非正式权威","通过行业圈子打听关键人物","不需要知道，公开的决策链条足够"),
        ("多线程关系","客户组织变动时（如换人），您的应对是？","快速建立与新人的关系，了解新的利益诉求","依靠公司品牌和产品惯性维持局面","立即启动后备方案，准备替代策略","这是客户的事，与我无关"),
        ("需求差异化","面对竞品的标准化产品低价竞争，您会？","强调定制化价值和长期总拥有成本优势","降价match竞品，保持市场份额","寻找差异化价值，不与竞品正面价格战","接受失去这个客户，转向其他机会"),
        ("销售节奏","您如何判断一个销售机会的真实热度？","通过多触点验证，确认承诺和行动的一致性","相信客户的口头承诺和积极反馈","跟随直觉和个人经验判断","设定跟进时限，过期不候则放弃"),
        ("内部资源","您如何向非销售部门证明销售支持的价值？","用数据说话，展示支持带来的成交率提升","依靠个人关系，不用数据证明","这是管理问题，不是我需要关心的","不需要证明，大家都是为了公司"),
        ("决策地图","客户决策链条复杂时，您的切入策略是？","找到最有影响力的那个人，围绕他构建支持联盟","逐一说服每个决策人","从最容易达成共识的部分开始，逐步扩大","放弃复杂项目，转向决策更简单的机会"),
        ("多线程关系","您如何在有限时间内覆盖多个利益相关者？","按影响力优先排序，重点突破关键人","扁平化沟通，一次会议覆盖所有人","委托客户内部联系人协助沟通","放弃多线程，聚焦单一联络人"),
        ("需求差异化","您如何处理客户的技术部门反对意见？","与技术负责人沟通，理解顾虑并寻找解决方案","用业务价值说服高管压技术部门","寻找双方都能接受的中间方案","将技术反对视为拒绝信号，考虑退出"),
        ("销售节奏","面对久拖不决的销售周期，您会怎么做？","重新评估机会质量，设定退出或坚持的决策点","持续保持联系，等待客户主动推进","增加资源投入和拜访频率以加速进程","缩减支持投入，转向其他更活跃的机会"),
        ("内部资源","您与售前/售后团队协作的紧密度如何？","作为虚拟团队紧密协作，共同服务大客户","只在需要时协调，日常工作独立","通过流程和系统协作，没有太多个人关系","很少协调，主要靠自己完成销售"),
    ]
    # 情境题: A=4,B=1,C=3,D=0 (最合适的得高分)
    # 频率题: 直接1-5
    # Q1-10是情境题，Q11-30是频率题
    OPTS = ["A(4分)","B(1分)","C(3分)","D(0分)"]
    OPTS_F = ["从不(1)","很少(2)","有时(3)","经常(4)","总是(5)"]
    dim_ranges = [(3,11,"'填答'!C4:C9"),(4,12,"'填答'!C10:C15"),(5,13,"'填答'!C16:C21"),(6,14,"'填答'!C22:C27"),(7,15,"'填答'!C28:C33")]
    complexity_f = "AVERAGE('填答'!C4:C33)/5*100"
    lf = lambda c: f"IF({c}&lt;40,&quot;待发展&quot;,IF({c}&lt;60,&quot;基础&quot;,IF({c}&lt;75,&quot;良好&quot;,IF({c}&lt;85,&quot;优秀&quot;,&quot;卓越&quot;))))"

    s1_cols = '<col min="1" max="1" width="8" customWidth="1"/><col min="2" max="2" width="55" customWidth="1"/><col min="3" max="3" width="12" customWidth="1"/>'
    s1_rows = [row(1,[str_c("A1",28,s=4)]),row(2,[str_c("A2",29,s=0)]),
               row(3,[str_c("A3",4,s=4),str_c("B3",5,s=4),str_c("C3",6,s=4)])]
    for i,(d,q,*_) in enumerate(Q):
        r=i+4
        s1_rows.append(row(r,[nc(f"A{r}",i+1),inl(f"B{r}",q),nc(f"C{r}",3,s=1)]))
    s1_dv = '<dataValidation type="list" formula1="&quot;0,1,3,4&quot;" showDropDown="0" sqref="C4:C13"/><dataValidation type="list" formula1="&quot;1,2,3,4,5&quot;" showDropDown="0" sqref="C14:C33"/>'

    s2_cols = '<col min="1" max="1" width="22" customWidth="1"/><col min="2" max="2" width="14" customWidth="1"/><col min="3" max="3" width="12" customWidth="1"/><col min="4" max="4" width="40" customWidth="1"/>'
    s2_rows = [row(1,[str_c("A1",28,s=4)]),
               row(2,[str_c("A2",7,s=4),str_c("B2",8,s=4),str_c("C2",9,s=4),str_c("D2",10,s=4)])]
    for r_num,str_idx,range_ref in dim_ranges:
        s2_rows.append(row(r_num,[str_c(f"A{r_num}",str_idx),nc(f"B{r_num}",s=6,f=f"AVERAGE({range_ref})"),nc(f"C{r_num}",s=0,f=lf(f"B{r_num}")),inl(f"D{r_num}","")]))
    s2_rows.extend([
        row(8,[inl("A8","")]),
        row(9,[str_c("A9",29,s=4)]),
        row(10,[nc("B10",s=6,f=complexity_f),nc("C10",s=0,f=lf("B10")),inl("D10","")]),
        row(11,[inl("A11","")]),
        row(12,[str_c("A12",30,s=4)]),
        row(13,[str_c("A13",27,s=0),inl("B13","低复杂度适配者：适合短平快的简单交易")]),
        row(14,[str_c("A14",27,s=0),inl("B14","中复杂度适配者：能够处理中等复杂度场景")]),
        row(15,[str_c("A15",27,s=0),inl("B15","高复杂度适配者：复杂B2B销售高手，大客户经营专家")]),
        row(16,[str_c("A16",29,s=4),
                 nc("B16",s=6,f=f"IF(B10&lt;40,&quot;低复杂度适配者&quot;,IF(B10&lt;70,&quot;中复杂度适配者&quot;,&quot;高复杂度适配者&quot;)))")]),
        row(17,[inl("A17","")]),
        row(18,[str_c("A18",31,s=4)]),
        row(19,[inl("A19","建议：加强多线程关系管理和内部资源协调能力，提升复杂销售场景应对能力。")]),
    ])

    s3_cols = '<col min="1" max="1" width="8" customWidth="1"/><col min="2" max="2" width="55" customWidth="1"/><col min="3" max="3" width="12" customWidth="1"/><col min="4" max="4" width="10" customWidth="1"/>'
    s3_rows = [row(1,[inl("A1","题号",4),inl("B1","题目内容",4),inl("C1","题型",4),inl("D1","维度",4)])]
    dims_s3 = ["决策地图","多线程关系","需求差异化","销售节奏","内部资源"]*6
    for i,(d,q,*_) in enumerate(Q):
        tp = "情境题" if i < 10 else "频率题"
        s3_rows.append(row(i+2,[nc(f"A{i+2}",i+1),inl(f"B{i+2}",q),inl(f"C{i+2}",tp),inl(f"D{i+2}",dims_s3[i])]))

    patterns=[("低复杂度适配者","您更适合短平快的简单交易模式。建议深耕某一垂直领域，成为该领域的快速成交专家。"),
              ("中复杂度适配者","您能够处理中等复杂度的销售场景。建议系统学习大客户销售方法论，向高复杂度领域拓展。"),
              ("高复杂度适配者","您是复杂B2B销售的高手，适合大客户经营。建议持续深化多线程关系管理和战略销售能力。")]
    s4_cols = '<col min="1" max="1" width="20" customWidth="1"/><col min="2" max="2" width="80" customWidth="1"/>'
    s4_rows = [row(1,[inl("A1","类型标签",4),inl("B1","解读内容",4)])]
    for i,(p,d) in enumerate(patterns): s4_rows.append(row(i+2,[inl(f"A{i+2}",p),inl(f"B{i+2}",d)]))

    pack_xlsx(fname, S, [
        (s1_cols, s1_rows, s1_dv),
        (s2_cols, s2_rows, None),
        (s3_cols, s3_rows, None),
        (s4_cols, s4_rows, None),
    ], ["填答","结果","题库","解读库"])
    print(f"Created: {fname}")

# ============================================================
# 10: 销售人员价值主张表达力测评
# ============================================================
def build_10():
    fname = os.path.join(OUT_DIR, "10_销售人员价值主张表达力测评.xlsx")
    S = [
        "填答","结果","题库","解读库",
        "题号","题目内容","得分(1-5)",
        "维度","维度均分","表达力指数","解读",
        "问题定义清晰度","差异化表达能力","收益量化习惯",
        "待发展","基础","良好","优秀","卓越",
        "价值表达初级（表达能力有待提升）",
        "价值表达中级（具备基础表达能力）",
        "价值表达高级（价值传递清晰有力）",
        "您的价值主张表达需要系统化提升，聚焦问题定义和收益量化。",
        "您具备良好的价值表达能力，建议继续强化差异化洞察和量化技巧。",
        "您的价值主张表达非常有力，是客户信赖的价值沟通专家。",
        "销售人员价值主张表达力测评",
        "请根据您在销售过程中表达价值主张的实际表现，选择最符合的选项：1=完全不符合，5=完全符合",
        "价值主张表达力总指数","关键短板维度","综合分析",
        "电梯价值主张（30秒内）：请在下方空白处用30秒时间，向一位CEO阐述您产品/解决方案的独特价值。",
        "建议：使用FAB框架（特征-优势-收益）组织表达，并养成量化收益的习惯。",
    ]
    Q = [
        ("问题定义清晰度","我能用简洁明了的语言描述客户面临的核心业务问题。"),
        ("问题定义清晰度","我会将客户的问题与其业务目标直接关联。"),
        ("问题定义清晰度","我能识别客户问题背后的根本原因，而非表面症状。"),
        ("问题定义清晰度","我会用客户行业的专业语言描述问题。"),
        ("问题定义清晰度","我能帮助客户看到他们尚未意识到的问题。"),
        ("问题定义清晰度","我会用数据和事实支撑对问题的描述。"),
        ("问题定义清晰度","我能够让客户认同我对问题的定义。"),
        ("问题定义清晰度","我的问题定义能够引起客户高层的共鸣。"),
        ("差异化表达能力","我能清晰阐述我们的解决方案与竞品的核心差异。"),
        ("差异化表达能力","我不会简单罗列功能，而是强调对客户的独特价值。"),
        ("差异化表达能力","我有具体案例和数据来证明我们的差异化优势。"),
        ("差异化表达能力","我能够根据不同客户调整差异化表达的角度。"),
        ("差异化表达能力","我能够让客户认识到选择我们而非竞品的具体理由。"),
        ("差异化表达能力","我的差异化表达能够抵挡竞品的价格攻击。"),
        ("差异化表达能力","我能够帮助客户理解为什么我们的方案最适合他们。"),
        ("差异化表达能力","我的差异化表达是客户无法从竞品那里获得的。"),
        ("收益量化习惯","我会用具体数字告诉客户我们的方案能带来多少回报。"),
        ("收益量化习惯","我会计算我们的方案为客户节省的成本或增加的收入。"),
        ("收益量化习惯","我会用ROI数据而非感性描述来证明方案价值。"),
        ("收益量化习惯","我会将收益量化到客户的具体业务指标上。"),
        ("收益量化习惯","我有客户的真实收益数据作为量化依据。"),
        ("收益量化习惯","我能计算出投资回收期，让客户看到快速回报。"),
        ("收益量化习惯","我会用行业基准来对比量化我们的方案收益。"),
        ("收益量化习惯","我的量化收益表达让客户无法否认价值。"),
    ]
    OPTS = ["完全不符合(1)","偶尔符合(2)","有时符合(3)","经常符合(4)","完全符合(5)"]
    dim_ranges = [(3,11,"'填答'!C4:C11"),(4,12,"'填答'!C12:C19"),(5,13,"'填答'!C20:C27")]
    expr_f = "AVERAGE('填答'!C4:C27)"
    lf = lambda c: f"IF({c}&lt;2,&quot;待发展&quot;,IF({c}&lt;2.8,&quot;基础&quot;,IF({c}&lt;3.5,&quot;良好&quot;,IF({c}&lt;4.2,&quot;优秀&quot;,&quot;卓越&quot;))))"

    s1_cols = '<col min="1" max="1" width="8" customWidth="1"/><col min="2" max="2" width="55" customWidth="1"/><col min="3" max="3" width="14" customWidth="1"/>'
    s1_rows = [row(1,[str_c("A1",28,s=4)]),row(2,[str_c("A2",29,s=0)]),
               row(3,[str_c("A3",4,s=4),str_c("B3",5,s=4),str_c("C3",6,s=4)])]
    for i,(d,q) in enumerate(Q):
        r=i+4
        s1_rows.append(row(r,[nc(f"A{r}",i+1),inl(f"B{r}",q),nc(f"C{r}",3,s=1)]))
    s1_dv = '<dataValidation type="list" formula1="&quot;1,2,3,4,5&quot;" showDropDown="0" sqref="C4:C27"/>'

    s2_cols = '<col min="1" max="1" width="22" customWidth="1"/><col min="2" max="2" width="14" customWidth="1"/><col min="3" max="3" width="12" customWidth="1"/><col min="4" max="4" width="40" customWidth="1"/>'
    s2_rows = [row(1,[str_c("A1",28,s=4)]),
               row(2,[str_c("A2",7,s=4),str_c("B2",8,s=4),str_c("C2",9,s=4),str_c("D2",10,s=4)])]
    for r_num,str_idx,range_ref in dim_ranges:
        s2_rows.append(row(r_num,[str_c(f"A{r_num}",str_idx),nc(f"B{r_num}",s=6,f=f"AVERAGE({range_ref})"),nc(f"C{r_num}",s=0,f=lf(f"B{r_num}")),inl(f"D{r_num}","")]))
    s2_rows.extend([
        row(7,[inl("A7","")]),
        row(8,[str_c("A8",29,s=4)]),
        row(9,[str_c("A9",27,s=0),inl("B9","价值表达初级：表达能力有待提升")]),
        row(10,[str_c("A10",27,s=0),inl("B10","价值表达中级：具备基础表达能力")]),
        row(11,[str_c("A11",27,s=0),inl("B11","价值表达高级：价值传递清晰有力")]),
        row(12,[str_c("A12",29,s=4),nc("B12",s=6,f=expr_f),nc("C12",s=0,f=lf("B12")),inl("D12","")]),
        row(13,[inl("A13","")]),
        row(14,[str_c("A14",30,s=4)]),
        row(15,[str_c("A15",28,s=0),nc("B15",s=6,f=expr_f)]),
        row(16,[inl("A16","建议：使用FAB框架（特征-优势-收益）组织表达，并养成量化收益的习惯。")]),
        row(17,[inl("A17","")]),
        row(18,[str_c("A18",31,s=4)]),
        row(19,[inl("A19","电梯价值主张：请在下方用30秒时间，向一位CEO阐述您的独特价值。")]),
    ])

    s3_cols = '<col min="1" max="1" width="8" customWidth="1"/><col min="2" max="2" width="55" customWidth="1"/><col min="3" max="6" width="14" customWidth="1"/><col min="7" max="7" width="20" customWidth="1"/>'
    s3_rows = [row(1,[inl("A1","题号",4),inl("B1","题目内容",4),inl("C1","选项A",4),inl("D1","选项B",4),inl("E1","选项C",4),inl("F1","选项D",4),inl("G1","维度",4)])]
    for i,(d,q) in enumerate(Q):
        r=i+2
        s3_rows.append(row(r,[nc(f"A{r}",i+1),inl(f"B{r}",q),inl(f"C{r}",OPTS[0]),inl(f"D{r}",OPTS[1]),inl(f"E{r}",OPTS[2]),inl(f"F{r}",OPTS[3]),inl(f"G{r}",d)]))

    patterns=[("价值表达初级","您的价值主张表达需要系统化提升。建议聚焦问题定义和收益量化两个方面加强练习。"),
              ("价值表达中级","您具备良好的价值表达能力，建议继续强化差异化洞察和量化技巧，争取达到高级水平。"),
              ("价值表达高级","您的价值主张表达非常有力，是客户信赖的价值沟通专家。建议持续深化并形成个人品牌。")]
    s4_cols = '<col min="1" max="1" width="20" customWidth="1"/><col min="2" max="2" width="80" customWidth="1"/>'
    s4_rows = [row(1,[inl("A1","类型标签",4),inl("B1","解读内容",4)])]
    for i,(p,d) in enumerate(patterns): s4_rows.append(row(i+2,[inl(f"A{i+2}",p),inl(f"B{i+2}",d)]))

    pack_xlsx(fname, S, [
        (s1_cols, s1_rows, s1_dv),
        (s2_cols, s2_rows, None),
        (s3_cols, s3_rows, None),
        (s4_cols, s4_rows, None),
    ], ["填答","结果","题库","解读库"])
    print(f"Created: {fname}")

# ============================================================
# Main
# ============================================================
if __name__ == "__main__":
    print("Building 02_挑战者销售档案测评..."); build_02()
    print("Building 03_销售漏斗管理行为诊断..."); build_03()
    print("Building 04_顾问式销售vs交易式销售倾向测评..."); build_04()
    print("Building 05_销售人员抗拒处理风格测评..."); build_05()
    print("Building 06_销售人员客户关系深度测评..."); build_06()
    print("Building 07_销售人员情绪韧性测评..."); build_07()
    print("Building 08_销售目标管理与自我驱动力测评..."); build_08()
    print("Building 09_B2B销售复杂度适配性测评..."); build_09()
    print("Building 10_销售人员价值主张表达力测评..."); build_10()
    print("\nAll files created!")
