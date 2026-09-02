#!/usr/bin/env python3
"""Create E4_东西方历史比较表.xlsx - 4 sheets"""
import shutil, os, tempfile

SKILL_DIR = "C:/Users/Administrator/.claude/skills/Excel表格处理"
OUT_DIR = "D:/新课开发/经济学/29_工业革命"
os.makedirs(OUT_DIR, exist_ok=True)

work_dir = tempfile.mkdtemp().replace('\\', '/')
work_dir = work_dir + "/xlsx_work_e4"
shutil.copytree(f"{SKILL_DIR}/templates/minimal_xlsx/", work_dir, dirs_exist_ok=True)

def build_shared_strings(strings):
    count = len(strings)
    si = [f'  <si><t>{s.replace("&","&amp;").replace("<","&lt;").replace(">","&gt;")}</t></si>' for s in strings]
    return f'<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="{count}" uniqueCount="{count}">\n{chr(10).join(si)}\n</sst>'

strings = [
    "使用说明",
    "综合对比", "对比维度", "英国", "荷兰", "中国清朝",
    "制度因素", "制度维度", "具体制度", "英国做法", "荷兰做法", "清朝做法",
    "经济指标", "指标名称", "英国数据", "荷兰数据", "清朝数据", "备注",
    "时间线", "年份", "英国", "荷兰", "清朝", "关键事件",
]

with open(work_dir + "/xl/sharedStrings.xml", "w", encoding="utf-8") as f:
    f.write(build_shared_strings(strings))

workbook_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
          xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheets>
    <sheet name="使用说明" sheetId="1" r:id="rId1"/>
    <sheet name="综合对比" sheetId="2" r:id="rId4"/>
    <sheet name="制度因素" sheetId="3" r:id="rId5"/>
    <sheet name="经济指标" sheetId="4" r:id="rId6"/>
    <sheet name="时间线" sheetId="5" r:id="rId7"/>
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

# Sheet2: 综合对比 - 6维度对比英荷清
# strings: 综合对比=1, 对比维度=2, 英国=3, 荷兰=4, 中国清朝=5
rows2 = ['<row r="1"><c r="A1" t="s" s="4"><v>1</v></c></row>']
rows2.append('<row r="2"><c r="A2" t="s" s="4"><v>2</v></c><c r="B2" t="s" s="4"><v>3</v></c><c r="C2" t="s" s="4"><v>4</v></c><c r="D2" t="s" s="4"><v>5</v></c></row>')
comparisons = [
    ["政治制度", "君主立宪制，议会掌权", "联省共和制，商人参政", "君主专制，中央集权"],
    ["经济政策", "重商主义，鼓励出口", "自由贸易，金融创新", "重农抑商，闭关锁国"],
    ["金融体系", "英格兰银行，债券市场", "阿姆斯特丹银行，股票交易所", "票号钱庄，无现代金融"],
    ["产权保护", "1624年专利法，议会立法", "商业法传统，合约保护", "人治色彩浓厚，产权不稳定"],
    ["技术革新", "蒸汽机、纺织机广泛应用", "造船、望远镜等海上技术", "四大发明后续停滞，少有突破"],
    ["地理条件", "岛国，海军强大，海外殖民", "小国，擅长贸易中转，殖民印尼", "大陆国家，以农为本，防御为主"],
]
for idx in range(len(comparisons)):
    r = idx + 3
    rows2.append(f'<row r="{r}"><c r="A{r}" t="s" s="0"><v></v></c><c r="B{r}" t="s" s="0"><v></v></c><c r="C{r}" t="s" s="0"><v></v></c><c r="D{r}" t="s" s="0"><v></v></c></row>')
s2 = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"/></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols><col min="1" max="1" width="14"/><col min="2" max="2" width="30"/><col min="3" max="3" width="30"/><col min="4" max="4" width="30"/></cols>
  <sheetData>{''.join(rows2)}</sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''
with open(work_dir + "/xl/worksheets/sheet2.xml", "w", encoding="utf-8") as f:
    f.write(s2)

# Sheet3: 制度因素
# strings: 制度因素=6, 制度维度=7, 具体制度=8, 英国做法=9, 荷兰做法=10, 清朝做法=11
rows3 = ['<row r="1"><c r="A1" t="s" s="4"><v>6</v></c></row>']
rows3.append('<row r="2"><c r="A2" t="s" s="4"><v>7</v></c><c r="B2" t="s" s="4"><v>8</v></c><c r="C2" t="s" s="4"><v>9</v></c><c r="D2" t="s" s="4"><v>10</v></c><c r="E2" t="s" s="4"><v>11</v></c></row>')
institutions = [
    ["产权制度", "土地私有制", "议会立法确认，1688年后稳定", "商业资本积累，受法律保护", "土地国有/皇有，农民无恒产"],
    ["专利制度", "发明专利", "1624年《专利法》，14年垄断期", "商业方法专利，国际贸易保护", "无独立专利法，官府特批"],
    ["金融制度", "银行与债券", "英格兰银行1694年，债券市场", "阿姆斯特丹银行1609年，股票交易", "票号钱庄，无国债市场"],
    ["贸易制度", "关税与航海", "航海法保护本国航运", "自由港，低关税政策", "厘金杂税，关税不统一"],
    ["法律传统", "普通法/海商法", "判例法传统，商法成熟", "罗马法传统，商法国际领先", "刑法为主，民法薄弱"],
    ["政治参与", "议会制度", "资产阶级议会，商人利益代言", "联省议会，商业寡头参政", "科举官僚，士绅阶层垄断"],
]
for idx in range(len(institutions)):
    r = idx + 3
    rows3.append(f'<row r="{r}"><c r="A{r}" t="s" s="0"><v></v></c><c r="B{r}" t="s" s="0"><v></v></c><c r="C{r}" t="s" s="0"><v></v></c><c r="D{r}" t="s" s="0"><v></v></c><c r="E{r}" t="s" s="0"><v></v></c></row>')
s3 = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"/></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols><col min="1" max="1" width="14"/><col min="2" max="2" width="18"/><col min="3" max="3" width="28"/><col min="4" max="4" width="28"/><col min="5" max="5" width="28"/></cols>
  <sheetData>{''.join(rows3)}</sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''
with open(work_dir + "/xl/worksheets/sheet3.xml", "w", encoding="utf-8") as f:
    f.write(s3)

# Sheet4: 经济指标
# strings: 经济指标=12, 指标名称=13, 英国数据=14, 荷兰数据=15, 清朝数据=16, 备注=17
rows4 = ['<row r="1"><c r="A1" t="s" s="4"><v>12</v></c></row>']
rows4.append('<row r="2"><c r="A2" t="s" s="4"><v>13</v></c><c r="B2" t="s" s="4"><v>14</v></c><c r="C2" t="s" s="4"><v>15</v></c><c r="D2" t="s" s="4"><v>16</v></c><c r="E2" t="s" s="4"><v>17</v></c></row>')
economics = [
    ["GDP (1700年)", "约1.5亿英镑", "约2亿盾", "约8亿两白银", "荷兰人均GDP最高"],
    ["人口 (1800年)", "约900万", "约200万", "约4亿", "清朝人口优势明显"],
    ["城市化率 (1800年)", "约30%", "约40%", "约5%", "荷兰城市化最高"],
    ["铁产量 (1800年)", "约25万吨", "约10万吨", "约25万吨", "清朝与英国相当"],
    ["煤炭产量 (1800年)", "约1500万吨", "很少", "很少", "英国能源优势突出"],
    ["对外贸易额 (1800年)", "约5000万英镑", "约3亿盾", "约5000万两白银", "荷兰贸易最活跃"],
    ["银行数量 (1800年)", "约10家", "约20家", "约100家票号", "荷兰金融最发达"],
    ["铁路里程 (1850年)", "约1万公里", "无", "无", "工业革命后差距拉大"],
]
for idx in range(len(economics)):
    r = idx + 3
    rows4.append(f'<row r="{r}"><c r="A{r}" t="s" s="0"><v></v></c><c r="B{r}" t="s" s="0"><v></v></c><c r="C{r}" t="s" s="0"><v></v></c><c r="D{r}" t="s" s="0"><v></v></c><c r="E{r}" t="s" s="0"><v></v></c></row>')
s4 = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"/></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols><col min="1" max="1" width="20"/><col min="2" max="2" width="18"/><col min="3" max="3" width="18"/><col min="4" max="4" width="18"/><col min="5" max="5" width="20"/></cols>
  <sheetData>{''.join(rows4)}</sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''
with open(work_dir + "/xl/worksheets/sheet4.xml", "w", encoding="utf-8") as f:
    f.write(s4)

# Sheet5: 时间线 1500-1800
# strings: 时间线=18, 年份=19, 英国=20, 荷兰=21, 清朝=22, 关键事件=23
rows5 = ['<row r="1"><c r="A1" t="s" s="4"><v>18</v></c></row>']
rows5.append('<row r="2"><c r="A2" t="s" s="4"><v>19</v></c><c r="B2" t="s" s="4"><v>20</v></c><c r="C2" t="s" s="4"><v>21</v></c><c r="D2" t="s" s="4"><v>22</v></c><c r="E2" t="s" s="4"><v>23</v></c></row>')
timeline = [
    ["1500", "", "郑和下西洋结束", "明朝鼎盛期", "全球贸易格局开始分化"],
    ["1550", "圈地运动加速", "", "嘉庆年间，人口增长", "英国农村劳动力开始过剩"],
    ["1600", "", "东印度公司成立", "明朝衰落", "荷兰开始海上扩张"],
    ["1640", "英国内战", "", "", "英国革命与制度变革开端"],
    ["1688", "光荣革命", "", "", "英国确立君主立宪"],
    ["1694", "英格兰银行成立", "荷兰商业鼎盛", "", "现代金融体系开端"],
    ["1700", "", "股票交易所成立", "康熙朝，人口4亿", "东西差距开始显现"],
    ["1720", "南海泡沫", "", "", "英国监管觉醒"],
    ["1760", "工业革命开始", "", "", "煤炭+机器驱动生产力飞跃"],
    ["1776", "瓦特改良蒸汽机", "", "", "能源革命开启"],
    ["1789", "", "", "乾隆朝末期", "清朝盛极而衰前夜"],
    ["1800", "工厂制度确立", "", "清朝人口4亿", "工业革命起飞完成"],
]
for idx in range(len(timeline)):
    r = idx + 3
    rows5.append(f'<row r="{r}"><c r="A{r}" t="s" s="0"><v></v></c><c r="B{r}" t="s" s="0"><v></v></c><c r="C{r}" t="s" s="0"><v></v></c><c r="D{r}" t="s" s="0"><v></v></c><c r="E{r}" t="s" s="0"><v></v></c></row>')
s5 = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"/></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols><col min="1" max="1" width="10"/><col min="2" max="2" width="28"/><col min="3" max="3" width="28"/><col min="4" max="4" width="28"/><col min="5" max="5" width="30"/></cols>
  <sheetData>{''.join(rows5)}</sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''
with open(work_dir + "/xl/worksheets/sheet5.xml", "w", encoding="utf-8") as f:
    f.write(s5)

print("E4: All sheets written, work_dir:", work_dir)
