#!/usr/bin/env python3
"""Create E3_重大技术革命起飞条件清单.xlsx - 4 sheets"""
import shutil, os, tempfile

SKILL_DIR = "C:/Users/Administrator/.claude/skills/Excel表格处理"
OUT_DIR = "D:/新课开发/经济学/29_工业革命"
os.makedirs(OUT_DIR, exist_ok=True)

work_dir = tempfile.mkdtemp().replace('\\', '/')
work_dir = work_dir + "/xlsx_work_e3"
shutil.copytree(f"{SKILL_DIR}/templates/minimal_xlsx/", work_dir, dirs_exist_ok=True)

def build_shared_strings(strings):
    count = len(strings)
    si = [f'  <si><t>{s.replace("&","&amp;").replace("<","&lt;").replace(">","&gt;")}</t></si>' for s in strings]
    return f'<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="{count}" uniqueCount="{count}">\n{chr(10).join(si)}\n</sst>'

strings = [
    "使用说明",
    "工业革命起飞条件清单", "序号", "条件类别", "具体条件", "说明", "重要性评级",
    "AI革命对照分析", "对应条件", "AI时代背景", "典型案例", "差异说明",
    "自查评分表", "评分标准", "条件描述", "评分(1-5)", "具体依据", "得分说明",
    "综合结论", "综合评分", "优势条件", "薄弱条件", "关键洞察", "与工业革命类比",
]

with open(work_dir + "/xl/sharedStrings.xml", "w", encoding="utf-8") as f:
    f.write(build_shared_strings(strings))

workbook_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
          xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheets>
    <sheet name="使用说明" sheetId="1" r:id="rId1"/>
    <sheet name="工业革命条件" sheetId="2" r:id="rId4"/>
    <sheet name="AI革命对照" sheetId="3" r:id="rId5"/>
    <sheet name="自查评分" sheetId="4" r:id="rId6"/>
    <sheet name="综合结论" sheetId="5" r:id="rId7"/>
  </sheets>
  <calcPr calcId="0"/>
</workbook>'''
with open(work_dir + "/xl/workbook.xml", "w", encoding="utf-8") as f:
    f.write(workbook_xml)

rels_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
  <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml"/>
  <Relationship Id="rId4" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet2.xml"/>
  <Relationship Id="rId5" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet3.xml"/>
  <Relationship Id="rId6" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet4.xml"/>
  <Relationship Id="rId7" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet5.xml"/>
</Relationships>'''
with open(work_dir + "/xl/_rels/workbook.xml.rels", "w", encoding="utf-8") as f:
    f.write(rels_xml)

ct_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml"  ContentType="application/xml"/>
  <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
  <Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet2.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet3.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet4.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet5.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>
  <Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/>
</Types>'''
with open(work_dir + "/[Content_Types].xml", "w", encoding="utf-8") as f:
    f.write(ct_xml)

for i in range(2, 6):
    shutil.copy(work_dir + "/xl/worksheets/sheet1.xml", work_dir + f"/xl/worksheets/sheet{i}.xml")

# Sheet1: 使用说明
s1 = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"/></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols><col min="1" max="1" width="20"/><col min="2" max="2" width="60"/></cols>
  <sheetData><row r="1"><c r="A1" t="s" s="4"><v>0</v></c></row></sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''
with open(work_dir + "/xl/worksheets/sheet1.xml", "w", encoding="utf-8") as f:
    f.write(s1)

# Sheet2: 工业革命条件
rows = ['<row r="1"><c r="A1" t="s" s="4"><v>1</v></c></row>']
rows.append('<row r="2"><c r="A2" t="s" s="4"><v>2</v></c><c r="B2" t="s" s="4"><v>3</v></c><c r="C2" t="s" s="4"><v>4</v></c><c r="D2" t="s" s="4"><v>5</v></c><c r="E2" t="s" s="4"><v>6</v></c></row>')
conditions = [
    ["1","政治制度","光荣革命后的议会制度","议会限制王权，确立君主立宪，为产权保护奠定政治基础","★★★★★"],
    ["2","产权保护","专利法与知识产权制度","1624年《专利法》确立发明者权利，激励技术创新","★★★★★"],
    ["3","金融体系","英格兰银行的建立","1694年英格兰银行成立，为工业资本提供融资渠道","★★★★★"],
    ["4","能源基础","煤炭的大规模开采","英国煤矿丰富，煤炭成为蒸汽机的能源基础","★★★★★"],
    ["5","技术积累","科学革命与实验传统","牛顿力学、波义耳化学等科学革命积累知识基础","★★★★☆"],
    ["6","市场扩张","圈地运动与国内市场","失地农民进入城市，提供工业劳动力；国内市场扩大","★★★★☆"],
    ["7","国际贸易","殖民体系与海外市场","东印度公司等海外贸易扩张，为制造业提供原料和市场","★★★★☆"],
    ["8","交通运输","运河与道路网络","18世纪英国运河网络大幅降低运输成本","★★★☆☆"],
    ["9","纺织技术","飞梭与珍妮纺纱机","纺织业技术革新是工业革命的先导产业","★★★★☆"],
    ["10","人口增长","工业革命前的人口增加","英国人口从1700年的500万增长到1800年的900万","★★★☆☆"],
    ["11","宗教改革","新教伦理与工作伦理","加尔文主义强调勤奋与节俭，为资本主义提供精神支持","★★★☆☆"],
    ["12","法治传统","普通法传统","英国普通法体系相对稳定可预期，降低商业风险","★★★★☆"],
    ["13","社会流动","相对开放的社会结构","贵族与商人阶层流动性较强，不似中国传统固化","★★★☆☆"],
    ["14","手工工匠传统","行会传统与技术传承","技术工匠传统为机器发明提供人力基础","★★★☆☆"],
    ["15","低土地压力","相对充足的土地资源","英国圈地运动提高农业效率，释放劳动力","★★★☆☆"],
    ["16","地理优势","岛国安全与海权","英吉利海峡提供天然屏障，减少军费投入","★★★★☆"],
    ["17","金融危机教训","南海泡沫的警示","1720年南海泡沫暴露金融风险，促进监管制度建设","★★★☆☆"],
]
for idx in range(len(conditions)):
    r = idx + 3
    rows.append(f'<row r="{r}"><c r="A{r}" t="s" s="0"><v></v></c><c r="B{r}" t="s" s="0"><v></v></c><c r="C{r}" t="s" s="0"><v></v></c><c r="D{r}" t="s" s="0"><v></v></c><c r="E{r}" t="s" s="0"><v></v></c></row>')
s2 = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"/></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols><col min="1" max="1" width="8"/><col min="2" max="2" width="14"/><col min="3" max="3" width="28"/><col min="4" max="4" width="50"/><col min="5" max="5" width="14"/></cols>
  <sheetData>{''.join(rows)}</sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''
with open(work_dir + "/xl/worksheets/sheet2.xml", "w", encoding="utf-8") as f:
    f.write(s2)

# Sheet3: AI革命对照
rows3 = ['<row r="1"><c r="A1" t="s" s="4"><v>7</v></c></row>']
rows3.append('<row r="2"><c r="A2" t="s" s="4"><v>8</v></c><c r="B2" t="s" s="4"><v>9</v></c><c r="C2" t="s" s="4"><v>10</v></c><c r="D2" t="s" s="4"><v>11</v></c></row>')
ai_data = [
    ["政治制度","技术治理与AI监管","欧盟AI法案、美国总统AI行政令","制度形式不同，但都在探索监管框架"],
    ["产权保护","数据产权与算法专利","训练数据的版权争议、算法可专利性","数字时代的产权问题更为复杂"],
    ["金融体系","风险投资与股权激励","英伟达、OpenAI等通过VC/PE获得巨额融资","资本形态不同，但融资逻辑类似"],
    ["能源基础","电力与算力基础设施","数据中心耗电量剧增，可再生能源投资","算力是新煤炭，电力基础设施是关键"],
    ["技术积累","深度学习理论积累","2012年AlexNet、Transformer架构突破","从知识积累到应用爆发的路径相似"],
    ["市场扩张","平台经济与用户规模","ChatGPT用户破亿，平台网络效应","数字产品边际成本接近零，扩张更快"],
    ["交通运输","自动驾驶与物流优化","特斯拉FSD、无人配送车","技术驱动的运输革命，但制度挑战更大"],
    ["人口增长","数字时代的新型劳动力","程序员、AI训练师等新职业兴起","就业结构转变，但非人口机械增长"],
    ["法治传统","数字法律体系建设","中国《生成式AI管理办法》、GDPR","法律框架建设滞后于技术发展"],
    ["社会流动","技术新贵与社会分化","AI从业者与非AI从业者收入差距","技术进步可能加剧不平等"],
]
for idx in range(len(ai_data)):
    r = idx + 3
    rows3.append(f'<row r="{r}"><c r="A{r}" t="s" s="0"><v></v></c><c r="B{r}" t="s" s="0"><v></v></c><c r="C{r}" t="s" s="0"><v></v></c><c r="D{r}" t="s" s="0"><v></v></c></row>')
s3 = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"/></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols><col min="1" max="1" width="14"/><col min="2" max="2" width="28"/><col min="3" max="3" width="40"/><col min="4" max="4" width="40"/></cols>
  <sheetData>{''.join(rows3)}</sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''
with open(work_dir + "/xl/worksheets/sheet3.xml", "w", encoding="utf-8") as f:
    f.write(s3)

# Sheet4: 自查评分
rows4 = ['<row r="1"><c r="A1" t="s" s="4"><v>12</v></c></row>']
rows4.append('<row r="2"><c r="A2" t="s" s="4"><v>14</v></c><c r="B2" t="s" s="4"><v>15</v></c><c r="C2" t="s" s="4"><v>16</v></c><c r="D2" t="s" s="4"><v>17</v></c></row>')
rows4.append('<row r="3"><c r="A3" t="s" s="4"><v>13</v></c></row>')
checks = [
    ["政治制度支持","5","中国新型举国体制可集中资源，顶层设计效率高","制度优势明显，可快速推进AI战略"],
    ["市场规模与数据优势","5","14亿人口，海量用户数据，ChatGPT对比毫不逊色","中国拥有全球最大互联网用户群"],
    ["算力基础设施","3","英伟达芯片受限，国产替代在追赶，算力瓶颈明显","短期受制裁影响，长期国产化是机会"],
    ["金融资本支持","4","科创板、北交所支持，AI公司估值高，资本获取相对容易","有制度支持但泡沫化风险并存"],
    ["制造业基础与实体应用","5","世界工厂，制造业转型需求强，AI+制造场景丰富","应用场景比工业革命英国更广泛"],
    ["能源资源禀赋","3","电力消耗大，但风光储能在建，能源结构转型中","新能源发展快，但短期电力需求匹配有挑战"],
    ["技术人才储备","4","清华北大等顶尖AI人才，华人科学家群体庞大","基础研究略弱但工程能力强"],
    ["产业政策与顶层设计","5","国家AI发展规划、新基建政策、东数西算工程","政策支持力度全球领先"],
    ["法治与监管框架","3","《生成式AI管理办法》等出台，监管框架在探索中","法规体系建设速度在追赶"],
    ["社会接受度与用户基础","4","中国用户对AI接受度高，应用普及速度快","用户基础好但内容生态需完善"],
    ["国际环境与竞争态势","2","中美科技竞争，受制裁影响，国际合作受限","外部压力是最大不确定因素"],
    ["风险防范意识","3","金融危机防范意识增强，但AI风险认知尚在形成中","需加强AI伦理和安全研究"],
]
for idx in range(len(checks)):
    r = idx + 4
    rows4.append(f'<row r="{r}"><c r="A{r}" t="s" s="0"><v></v></c><c r="B{r}" t="s" s="0"><v></v></c><c r="C{r}" t="s" s="0"><v></v></c><c r="D{r}" t="s" s="0"><v></v></c></row>')
s4 = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"/></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols><col min="1" max="1" width="24"/><col min="2" max="2" width="10"/><col min="3" max="3" width="50"/><col min="4" max="4" width="35"/></cols>
  <sheetData>{''.join(rows4)}</sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''
with open(work_dir + "/xl/worksheets/sheet4.xml", "w", encoding="utf-8") as f:
    f.write(s4)

# Sheet5: 综合结论
rows5 = ['<row r="1"><c r="A1" t="s" s="4"><v>18</v></c></row>']
for r in range(2, 20):
    rows5.append(f'<row r="{r}"><c r="A{r}" t="s" s="0"><v></v></c></row>')
s5 = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"/></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols><col min="1" max="1" width="18"/><col min="2" max="2" width="80"/></cols>
  <sheetData>{''.join(rows5)}</sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''
with open(work_dir + "/xl/worksheets/sheet5.xml", "w", encoding="utf-8") as f:
    f.write(s5)

print("E3: All sheets written, work_dir:", work_dir)
