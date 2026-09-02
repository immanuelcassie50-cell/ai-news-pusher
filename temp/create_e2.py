#!/usr/bin/env python3
"""Create E2_互动流程设计表.xlsx - 3 sheets: 时间轴, 互动设计, 物料清单"""
import shutil, os

SKILL_DIR = "C:/Users/Administrator/.claude/skills/Excel表格处理"
OUT_DIR = "D:/新课开发/经济学/29_工业革命"
os.makedirs(OUT_DIR, exist_ok=True)

shutil.copytree(f"{SKILL_DIR}/templates/minimal_xlsx/", "/tmp/xlsx_work_e2/", dirs_exist_ok=True)

def build_shared_strings(strings):
    count = len(strings)
    si = []
    for s in strings:
        e = s.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")
        si.append(f"  <si><t>{e}</t></si>")
    return f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="{count}" uniqueCount="{count}">
{chr(10).join(si)}
</sst>'''

strings = [
    # 0: 使用说明
    "使用说明",
    # 时间轴 sheet (1-15)
    "时间轴", "序号", "环节名称", "时长(分钟)", "开始时间", "结束时间", "核心内容", "备注",
    # 互动设计 sheet (9-30)
    "互动设计", "互动环节", "类型", "问题/讨论主题", "学员参与方式", "时长(分钟)", "设计目的", "物料准备", "序号", "环节名",
    # 物料清单 sheet (19-35)
    "物料清单", "序号", "物料名称", "数量", "规格/说明", "用途", "准备负责人", "到位时间", "状态", "备注",
]

with open("/tmp/xlsx_work_e2/xl/sharedStrings.xml", "w", encoding="utf-8") as f:
    f.write(build_shared_strings(strings))

workbook_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
          xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheets>
    <sheet name="使用说明" sheetId="1" r:id="rId1"/>
    <sheet name="时间轴" sheetId="2" r:id="rId4"/>
    <sheet name="互动设计" sheetId="3" r:id="rId5"/>
    <sheet name="物料清单" sheetId="4" r:id="rId6"/>
  </sheets>
  <calcPr calcId="0"/>
</workbook>'''
with open("/tmp/xlsx_work_e2/xl/workbook.xml", "w", encoding="utf-8") as f:
    f.write(workbook_xml)

rels_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
  <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml"/>
  <Relationship Id="rId4" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet2.xml"/>
  <Relationship Id="rId5" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet3.xml"/>
  <Relationship Id="rId6" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet4.xml"/>
</Relationships>'''
with open("/tmp/xlsx_work_e2/xl/_rels/workbook.xml.rels", "w", encoding="utf-8") as f:
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
  <Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>
  <Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/>
</Types>'''
with open("/tmp/xlsx_work_e2/[Content_Types].xml", "w", encoding="utf-8") as f:
    f.write(ct_xml)

for i in range(2, 5):
    shutil.copy("/tmp/xlsx_work_e2/xl/worksheets/sheet1.xml", f"/tmp/xlsx_work_e2/xl/worksheets/sheet{i}.xml")

# ---- Sheet1: 使用说明 ----
s1 = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"/></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols><col min="1" max="1" width="20"/><col min="2" max="2" width="60"/></cols>
  <sheetData>
    <row r="1"><c r="A1" t="s" s="4"><v>0</v></c></row>
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''
with open("/tmp/xlsx_work_e2/xl/worksheets/sheet1.xml", "w", encoding="utf-8") as f:
    f.write(s1)

# ---- Sheet2: 时间轴 ----
# strings: 时间轴=1, 序号=2, 环节名称=3, 时长=4, 开始时间=5, 结束时间=6, 核心内容=7, 备注=8
rows_s2 = ['<row r="1"><c r="A1" t="s" s="4"><v>1</v></c></row>']
rows_s2.append('<row r="2"><c r="A2" t="s" s="4"><v>2</v></c><c r="B2" t="s" s="4"><v>3</v></c><c r="C2" t="s" s="4"><v>4</v></c><c r="D2" t="s" s="4"><v>5</v></c><c r="E2" t="s" s="4"><v>6</v></c><c r="F2" t="s" s="4"><v>7</v></c><c r="G2" t="s" s="4"><v>8</v></c></row>')

timeline = [
    ["1", "签到与开场", "15", "9:00", "9:15", "分发教材、引导就座、预热问卷"],
    ["2", "引入：什么是工业革命", "10", "9:15", "9:25", "通过图片/地图引发好奇：为什么是英国？"],
    ["3", "第一部分：技术与发明", "45", "9:25", "10:10", "蒸汽机、纺织机、煤矿的关键串联"],
    ["4", "茶歇", "10", "10:10", "10:20", "自由交流、扫码入群"],
    ["5", "第二部分：制度与金融", "50", "10:20", "11:10", "光荣革命、产权、英格兰银行、南海泡沫"],
    ["6", "互动研讨：东西方比较", "25", "11:10", "11:35", "分组讨论：中国清朝vs英国的条件对比"],
    ["7", "第三部分：能源与运输", "40", "11:35", "12:15", "煤炭、铁路、运输革命"],
    ["8", "午餐休息", "60", "12:15", "13:15", "休息、社交"],
    ["9", "第四部分：影响与遗产", "45", "13:15", "14:00", "全球影响、当代启示、AI对照"],
    ["10", "案例分析：棉花帝国", "30", "14:00", "14:30", "从棉花产业看工业革命的制度逻辑"],
    ["11", "互动问答", "20", "14:30", "14:50", "学员提问、讲师解答"],
    ["12", "总结与延伸阅读", "15", "14:50", "15:05", "关键框架总结、推荐书单"],
    ["13", "课后任务布置", "5", "15:05", "15:10", "提交学习心得、关注后续直播"],
]

for idx, row_data in enumerate(timeline):
    r = idx + 3
    rows_s2.append(f'<row r="{r}"><c r="A{r}" t="s" s="0"><v></v></c><c r="B{r}" t="s" s="0"><v></v></c><c r="C{r}" t="s" s="0"><v></v></c><c r="D{r}" t="s" s="0"><v></v></c><c r="E{r}" t="s" s="0"><v></v></c><c r="F{r}" t="s" s="0"><v></v></c><c r="G{r}" t="s" s="0"><v></v></c></row>')

s2 = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"/></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols>
    <col min="1" max="1" width="8"/><col min="2" max="2" width="20"/>
    <col min="3" max="3" width="12"/><col min="4" max="4" width="12"/>
    <col min="5" max="5" width="12"/><col min="6" max="6" width="40"/>
    <col min="7" max="7" width="25"/>
  </cols>
  <sheetData>{''.join(rows_s2)}</sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''
with open("/tmp/xlsx_work_e2/xl/worksheets/sheet2.xml", "w", encoding="utf-8") as f:
    f.write(s2)

# ---- Sheet3: 互动设计 ----
# strings: 互动设计=9, 互动环节=10, 类型=11, 问题/讨论主题=12, 学员参与方式=13, 时长=14, 设计目的=15, 物料准备=16, 序号=17, 环节名=18
rows_s3 = ['<row r="1"><c r="A1" t="s" s="4"><v>9</v></c></row>']
rows_s3.append('<row r="2"><c r="A2" t="s" s="4"><v>17</v></c><c r="B2" t="s" s="4"><v>18</v></c><c r="C2" t="s" s="4"><v>11</v></c><c r="D2" t="s" s="4"><v>12</v></c><c r="E2" t="s" s="4"><v>13</v></c><c r="F2" t="s" s="4"><v>14</v></c><c r="G2" t="s" s="4"><v>15</v></c><c r="H2" t="s" s="4"><v>16</v></c></row>')

interactions = [
    ["破冰提问", "提问", "你认为工业革命的核心驱动力是什么？", "举手回答 / 弹幕留言", "3", "激活先验知识，了解学员基础认知", "PPT展示页", ""],
    ["分组讨论", "讨论", "英国光荣革命对产权保护有什么影响？", "4-5人小组讨论，每组3分钟", "10", "理解制度与产权的关系", "分组座次表、计时器", ""],
    ["角色扮演", "角色扮演", "如果你是18世纪英国银行家，如何评估蒸汽机投资？", "自愿举手扮演，分饰银行家与发明家", "15", "理解金融与技术的互动", "角色卡", ""],
    ["案例分析", "案例分析", "从南海泡沫看金融危机的形成机制", "小组代表发言，其他组补充", "10", "理解金融风险与制度建设", "案例文字材料", ""],
    ["东西对比", "对比分析", "中国明清 vs 英国：制度差异如何影响技术发展？", "辩论形式：正反方各3分钟陈述", "15", "建立跨文明比较视野", "对比表格模板", ""],
    ["即时测验", "测验", "关于工业革命条件的5道判断题", "手机扫码答题，实时显示结果", "5", "巩固核心知识点", "问卷星/投票工具", ""],
    ["自由提问", "问答", "你最想知道关于工业革命的哪个问题？", "语音或文字提问", "10", "解决个性化疑惑", "白板/腾讯文档", ""],
]

for idx, row_data in enumerate(interactions):
    r = idx + 3
    rows_s3.append(f'<row r="{r}"><c r="A{r}" t="s" s="0"><v></v></c><c r="B{r}" t="s" s="0"><v></v></c><c r="C{r}" t="s" s="0"><v></v></c><c r="D{r}" t="s" s="0"><v></v></c><c r="E{r}" t="s" s="0"><v></v></c><c r="F{r}" t="s" s="0"><v></v></c><c r="G{r}" t="s" s="0"><v></v></c><c r="H{r}" t="s" s="0"><v></v></c></row>')

s3 = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"/></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols>
    <col min="1" max="1" width="14"/><col min="2" max="2" width="10"/>
    <col min="3" max="3" width="12"/><col min="4" max="4" width="40"/>
    <col min="5" max="5" width="22"/><col min="6" max="6" width="10"/>
    <col min="7" max="7" width="30"/><col min="8" max="8" width="20"/>
  </cols>
  <sheetData>{''.join(rows_s3)}</sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''
with open("/tmp/xlsx_work_e2/xl/worksheets/sheet3.xml", "w", encoding="utf-8") as f:
    f.write(s3)

# ---- Sheet4: 物料清单 ----
# strings: 物料清单=19, 序号=20, 物料名称=21, 数量=22, 规格=23, 用途=24, 负责人=25,到位时间=26, 状态=27, 备注=28
rows_s4 = ['<row r="1"><c r="A1" t="s" s="4"><v>19</v></c></row>']
rows_s4.append('<row r="2"><c r="A2" t="s" s="4"><v>20</v></c><c r="B2" t="s" s="4"><v>21</v></c><c r="C2" t="s" s="4"><v>22</v></c><c r="D2" t="s" s="4"><v>23</v></c><c r="E2" t="s" s="4"><v>24</v></c><c r="F2" t="s" s="4"><v>25</v></c><c r="G2" t="s" s="4"><v>26</v></c><c r="H2" t="s" s="4"><v>27</v></c><c r="I2" t="s" s="4"><v>28</v></c></row>')

materials = [
    ["课程教材/讲义", "50份", "A4彩色打印", "学员参考", "", "课前3天", "待采购", "含思维导图"],
    ["签到表", "1份", "Excel电子版", "统计出勤", "", "课前1天", "待确认", "可电子签到"],
    ["分组座次表", "10张", "A3打印", "引导就座", "", "课前1天", "待确认", "按讨论分组"],
    ["角色扮演卡片", "10套", "A5卡片纸", "角色扮演环节", "", "课前2天", "待制作", "银行家/发明家"],
    ["案例文字材料", "50份", "A4打印", "案例分析环节", "", "课前3天", "待印刷", "南海泡沫/棉花帝国"],
    ["对比表格模板", "50份", "A3单面", "东西比较讨论", "", "课前3天", "待印刷", "含6维度对比"],
    ["计时器", "1个", "手机APP", "控制讨论时间", "", "课前", "已准备", "可用PPT插件代替"],
    ["白板/大白纸", "5张", "A1", "自由提问记录", "", "课前", "已准备", "或用腾讯文档协作"],
    ["二维码/投票工具", "1套", "问卷星/投票星", "即时测验", "", "课前", "待测试", "提前测试网络"],
    ["茶歇", "1批", "咖啡+点心", "茶歇休息", "", "当天9:00前", "待定", "联系供应商"],
    ["录音/录像设备", "1套", "手机+支架", "课程记录", "", "当天", "待确认", "如需制作后续物料"],
]

for idx, row_data in enumerate(materials):
    r = idx + 3
    rows_s4.append(f'<row r="{r}"><c r="A{r}" t="s" s="0"><v></v></c><c r="B{r}" t="s" s="0"><v></v></c><c r="C{r}" t="s" s="0"><v></v></c><c r="D{r}" t="s" s="0"><v></v></c><c r="E{r}" t="s" s="0"><v></v></c><c r="F{r}" t="s" s="0"><v></v></c><c r="G{r}" t="s" s="0"><v></v></c><c r="H{r}" t="s" s="0"><v></v></c><c r="I{r}" t="s" s="0"><v></v></c></row>')

s4 = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"/></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols>
    <col min="1" max="1" width="20"/><col min="2" max="2" width="10"/>
    <col min="3" max="3" width="12"/><col min="4" max="4" width="30"/>
    <col min="5" max="5" width="25"/><col min="6" max="6" width="12"/>
    <col min="7" max="7" width="12"/><col min="8" max="8" width="10"/>
    <col min="9" max="9" width="20"/>
  </cols>
  <sheetData>{''.join(rows_s4)}</sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''
with open("/tmp/xlsx_work_e2/xl/worksheets/sheet4.xml", "w", encoding="utf-8") as f:
    f.write(s4)

print("E2: All sheets written")
