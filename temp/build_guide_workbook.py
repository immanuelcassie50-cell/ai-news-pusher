#!/usr/bin/env python3
"""Build the usage guide workbook."""

import os
import zipfile

TEMPLATE_DIR = "/tmp/xlsx_guide_work"
OUTPUT_PATH = "D:/新课开发/自媒体/04商业化变现-从流量到留量的转化路径设计/配套表单和指引-Excel版/表单使用指引.xlsx"

os.makedirs(TEMPLATE_DIR, exist_ok=True)
os.makedirs(f"{TEMPLATE_DIR}/xl/worksheets", exist_ok=True)
os.makedirs(f"{TEMPLATE_DIR}/xl/_rels", exist_ok=True)
os.makedirs(f"{TEMPLATE_DIR}/_rels", exist_ok=True)

# ---- styles.xml ----
styles_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <fonts count="5">
    <font><sz val="11"/><name val="Calibri"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="000000FF"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="00000000"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="00008000"/></font>
    <font><sz val="11"/><name val="Calibri"/><b/></font>
  </fonts>
  <fills count="3">
    <fill><patternFill patternType="none"/></fill>
    <fill><patternFill patternType="gray125"/></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="00D9E1F2"/><bgColor indexed="64"/></patternFill></fill>
  </fills>
  <borders count="1">
    <border><left/><right/><top/><bottom/><diagonal/></border>
  </borders>
  <cellStyleXfs count="1">
    <xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/>
  </cellStyleXfs>
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
  <numFmts count="4">
    <numFmt numFmtId="164" formatCode="$#,##0;($#,##0);&quot;-&quot;"/>
    <numFmt numFmtId="165" formatCode="0.0%"/>
    <numFmt numFmtId="166" formatCode="0.0x"/>
    <numFmt numFmtId="167" formatCode="#,##0"/>
  </numFmts>
</styleSheet>'''
with open(f"{TEMPLATE_DIR}/xl/styles.xml", "w", encoding="utf-8") as f:
    f.write(styles_xml)

strings = [
    "流量到留量：自媒体商业化变现路径的系统设计",
    "表单使用指引",
    "使用说明",
    "表单概述",
    "本套表单包含3个Excel文件，共7个评估/规划工具表单",
    "配套表单_空表.xlsx",
    "包含7个空白表单，用于学员自评和规划",
    "配套表单_填好版.xlsx",
    "包含填写了示例数据的表单，展示如何正确使用",
    "表单使用指引.xlsx",
    "本文件，包含每个表单的使用说明和填写要点",
    "课程配套关系",
    "本套表单是「流量到留量：自媒体商业化变现路径的系统设计」课程的配套工具",
    "表单与课程的对应关系：",
    "Sheet1「变现现状自评」对应课程第一章：变现问题诊断",
    "Sheet2「变现路径匹配度分析」对应课程第二章：变现路径选择",
    "Sheet3「内容调性自测」对应课程第三章：内容定位校准",
    "Sheet4「信任透支风险评估」对应课程第四章：信任资产管理",
    "Sheet5「变现四季规划」对应课程第五章：四季变现模型",
    "Sheet6「收入结构现状图」对应课程第六章：收入结构优化",
    "Sheet7「30天行动计划」对应课程第七章：落地执行",
    "使用流程建议",
    "第一步：完成变现现状自评（Sheet1），了解当前变现状态",
    "第二步：进行变现路径匹配度分析（Sheet2），确定最适合的变现路径",
    "第三步：做内容调性自测（Sheet3），明确内容定位",
    "第四步：评估信任透支风险（Sheet4），检查信任资产状况",
    "第五步：制定变现四季规划（Sheet5），规划全年变现节奏",
    "第六步：分析收入结构现状（Sheet6），优化收入来源",
    "第七步：制定30天行动计划（Sheet7），开始落地执行",
    "填写要点与常见错误",
    "Sheet1：变现现状自评",
    "使用场景：学员初步评估自己的变现状态，了解优势和短板",
    "填写方法：每题根据实际情况选择1-4分，4个维度的平均分反映该维度水平",
    "结果解读：",
    "红色预警（15-25分）：存在严重问题，需要立即调整",
    "黄色预警（26-35分）：有一定风险，需要关注",
    "绿色（36-45分）：基本健康，继续保持",
    "蓝色优秀（46-60分）：非常健康，值得骄傲",
    "常见错误：",
    "1. 打分时过于乐观或悲观，没有真实反映情况",
    "2. 只看总分，忽略各维度得分的差异",
    "3. 打分时参考了别人的标准，而不是自己的实际情况",
    "Sheet2：变现路径匹配度分析",
    "使用场景：确定最适合的变现路径，避免盲目跟风",
    "填写方法：每个维度对4种变现路径分别打分（1-10分），总分最高者为推荐路径",
    "评分原则：",
    "粉丝画像匹配度：你的粉丝是否是该路径的目标用户",
    "内容形式匹配度：你的内容形式是否适合该变现路径",
    "供应链能力：你是否有该路径所需的产品/供应链",
    "交付能力：你是否能稳定交付该路径的产品/服务",
    "竞争强度：该路径的竞争激烈程度（越低分表示竞争越激烈）",
    "毛利空间：该路径的利润空间",
    "规模化潜力：该路径是否能规模化复制",
    "长期可持续性：该路径的可持续性",
    "常见错误：",
    "1. 只看哪个路径最热门，没有根据自己的实际情况评估",
    "2. 评分时主观认为「我都能做」，没有客观评估",
    "3. 忽略了供应链和交付能力的重要性",
    "Sheet3：内容调性自测",
    "使用场景：了解自己的内容特点，找到差异化定位",
    "填写方法：三维度各5题，每题1-5分，雷达图展示调性特征",
    "结果解读：",
    "专业度：内容在专业领域的深度和权威性",
    "亲近度：与粉丝的情感连接和互动程度",
    "差异化：内容的独特性和辨识度",
    "理想状态是三个维度均衡发展，但不同定位可以有不同的侧重",
    "常见错误：",
    "1. 自我评估过高，没有真实反映水平",
    "2. 追求全面均衡，没有突出自己的特长",
    "3. 忽略了差异化维度的重要性",
    "Sheet4：信任透支风险评估",
    "使用场景：检查变现过程中是否存在信任透支风险",
    "填写方法：4个维度共15题，每题1-4分，评估商业化对信任的消耗程度",
    "评分原则：分数越高表示风险越大（1=从不，4=经常）",
    "结果解读：",
    "红色高危：总分>45分，存在严重信任透支风险，需要立即改变变现方式",
    "橙色预警：总分36-45分，有一定风险，需要调整变现节奏和方式",
    "黄色注意：总分27-35分，风险可控，但需要关注和优化",
    "绿色安全：总分<27分，信任透支风险较低，继续保持",
    "常见错误：",
    "1. 自我感觉良好，低估了自己的信任透支程度",
    "2. 只关注商业化频率维度，忽略其他三个维度",
    "3. 发现问题后不及时调整，继续原来的变现方式",
    "Sheet5：变现四季规划",
    "使用场景：规划全年变现节奏，避免临时抱佛脚",
    "填写方法：填写每个季节的核心目标、关键动作和时间跨度，设置追踪指标",
    "四季模型说明：",
    "种草期（1-3月）：建立信任，让粉丝认识你",
    "培育期（4-6月）：深化关系，让粉丝了解你的价值主张",
    "收割期（7-9月）：价值变现，让粉丝付费购买",
    "维护期（10-12月）：持续经营，让粉丝复购和口碑传播",
    "常见错误：",
    "1. 只有收割期有具体规划，其他季节空着",
    "2. 关键动作和核心目标不匹配",
    "3. 指标设置过于理想化，无法落地追踪",
    "Sheet6：收入结构现状图",
    "使用场景：分析当前收入结构，发现问题和优化空间",
    "填写方法：填写各类收入的占比，总和应为100%",
    "收入分类说明：",
    "一次性收入：广告收入、品牌合作收入",
    "持续性收入：知识付费、直播带货、私域会员、其他",
    "分析重点：",
    "持续性收入占比越高，变现模式越健康",
    "理想的收入结构：持续性收入占比>60%",
    "常见错误：",
    "1. 收入分类错误，如把广告收入归为持续性收入",
    "2. 占比加起来不等于100%",
    "3. 只看总量，不看一次性vs持续性的比例",
    "Sheet7：30天行动计划",
    "使用场景：制定可执行的30天行动计划，确保学以致用",
    "填写方法：每周设定主题和任务，每天记录完成情况和效果",
    "四周主题：",
    "第1周「基础建设」：完成账号定位、内容规划等基础工作",
    "第2周「内容优化」：根据调性自测结果优化内容方向",
    "第3周「变现测试」：小规模测试选定的变现路径",
    "第4周「复盘优化」：总结30天成果，制定下月计划",
    "常见错误：",
    "1. 任务设置过于理想化，无法在规定时间内完成",
    "2. 每天的打卡流于形式，没有真正复盘效果",
    "3. 完成度低时找借口，不分析原因",
    "讲师使用建议",
    "课前：",
    "让学员提前完成表单，带着问题来上课",
    "课中：",
    "结合课程内容讲解表单的使用方法",
    "用填好版的示例帮助学员理解",
    "课后：",
    "布置作业要求学员完成自己的表单",
    "安排答疑时间解答学员在填写过程中的问题",
    "跟踪学员的执行情况，提供反馈和指导",
    "注意事项",
    "1. 这些表单是辅助工具，不要为了填表而填表",
    "2. 表单结果需要结合实际情况解读，不要机械对照",
    "3. 发现问题后要制定具体的改进计划，并付诸行动",
    "4. 定期复盘和更新表单，建议每月重新评估一次",
    "5. 如有任何疑问，请联系课程助教获取帮助",
]

ss_content = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n'
ss_content += f'<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="{len(strings)}" uniqueCount="{len(strings)}">\n'
for s in strings:
    escaped = s.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;')
    ss_content += f'  <si><t>{escaped}</t></si>\n'
ss_content += '</sst>'
with open(f"{TEMPLATE_DIR}/xl/sharedStrings.xml", "w", encoding="utf-8") as f:
    f.write(ss_content)

def create_sheet_xml(rows_data):
    col_widths = '''  <cols>
    <col min="1" max="1" width="40" customWidth="1"/>
    <col min="2" max="8" width="14" customWidth="1"/>
  </cols>'''
    xml = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView workbookViewId="0"/>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25"
    xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
{col_widths}
  <sheetData>
'''
    for row_num, cells in rows_data:
        xml += f'    <row r="{row_num}">\n'
        for col, ctype, val, style in cells:
            if ctype == 's':
                xml += f'      <c r="{col}{row_num}" t="s" s="{style}"><v>{val}</v></c>\n'
            elif ctype == 'n':
                xml += f'      <c r="{col}{row_num}" s="{style}"><v>{val}</v></c>\n'
        xml += '    </row>\n'
    xml += '''  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''
    return xml

# Sheet 1: 使用说明
sheet1_rows = [
    (1, [('A','s',0,4)]),
    (2, [('A','s',1,4)]),
    (3, [('A','s',2,4)]),
    (4, [('A','s',3,0)]),
    (5, [('A','s',4,0)]),
    (6, [('A','s',5,0)]),
    (7, [('A','s',6,0)]),
    (8, [('A','s',7,0)]),
    (9, [('A','s',8,0)]),
    (10, [('A','s',9,0)]),
    (11, [('A','s',10,0)]),
    (12, [('A','s',11,0)]),
    (13, [('A','s',12,4)]),
    (14, [('A','s',13,0)]),
    (15, [('A','s',14,0)]),
    (16, [('A','s',15,0)]),
    (17, [('A','s',16,0)]),
    (18, [('A','s',17,0)]),
    (19, [('A','s',18,0)]),
    (20, [('A','s',19,0)]),
    (21, [('A','s',20,0)]),
    (22, [('A','s',21,0)]),
    (23, [('A','s',22,4)]),
    (24, [('A','s',23,0)]),
    (25, [('A','s',24,0)]),
    (26, [('A','s',25,0)]),
    (27, [('A','s',26,0)]),
    (28, [('A','s',27,0)]),
    (29, [('A','s',28,0)]),
]

# Sheet 2: Sheet1-Sheet3 填写要点
sheet2_rows = [
    (1, [('A','s',0,4)]),
    (2, [('A','s',1,4)]),
    (3, [('A','s',29,4)]),
    (4, [('A','s',30,0)]),
    (5, [('A','s',31,0)]),
    (6, [('A','s',32,0)]),
    (7, [('A','s',33,0)]),
    (8, [('A','s',34,0)]),
    (9, [('A','s',35,0)]),
    (10, [('A','s',36,0)]),
    (11, [('A','s',37,0)]),
    (12, [('A','s',38,4)]),
    (13, [('A','s',39,4)]),
    (14, [('A','s',40,0)]),
    (15, [('A','s',41,0)]),
    (16, [('A','s',42,0)]),
    (17, [('A','s',43,0)]),
    (18, [('A','s',44,0)]),
    (19, [('A','s',45,0)]),
    (20, [('A','s',46,0)]),
    (21, [('A','s',47,0)]),
    (22, [('A','s',48,0)]),
    (23, [('A','s',49,4)]),
    (24, [('A','s',50,0)]),
    (25, [('A','s',51,0)]),
    (26, [('A','s',52,0)]),
    (27, [('A','s',53,0)]),
    (28, [('A','s',54,0)]),
    (29, [('A','s',55,0)]),
    (30, [('A','s',56,0)]),
    (31, [('A','s',57,0)]),
    (32, [('A','s',58,0)]),
    (33, [('A','s',59,0)]),
    (34, [('A','s',60,0)]),
    (35, [('A','s',61,0)]),
    (36, [('A','s',62,0)]),
    (37, [('A','s',63,0)]),
    (38, [('A','s',64,0)]),
    (39, [('A','s',65,0)]),
    (40, [('A','s',66,0)]),
]

# Sheet 3: Sheet4-Sheet7 填写要点
sheet3_rows = [
    (1, [('A','s',0,4)]),
    (2, [('A','s',1,4)]),
    (3, [('A','s',67,4)]),
    (4, [('A','s',68,0)]),
    (5, [('A','s',69,0)]),
    (6, [('A','s',70,0)]),
    (7, [('A','s',71,0)]),
    (8, [('A','s',72,0)]),
    (9, [('A','s',73,0)]),
    (10, [('A','s',74,0)]),
    (11, [('A','s',75,0)]),
    (12, [('A','s',76,0)]),
    (13, [('A','s',77,4)]),
    (14, [('A','s',78,4)]),
    (15, [('A','s',79,0)]),
    (16, [('A','s',80,0)]),
    (17, [('A','s',81,0)]),
    (18, [('A','s',82,0)]),
    (19, [('A','s',83,0)]),
    (20, [('A','s',84,0)]),
    (21, [('A','s',85,0)]),
    (22, [('A','s',86,0)]),
    (23, [('A','s',87,0)]),
    (24, [('A','s',88,0)]),
    (25, [('A','s',89,4)]),
    (26, [('A','s',90,0)]),
    (27, [('A','s',91,0)]),
    (28, [('A','s',92,0)]),
    (29, [('A','s',93,0)]),
    (30, [('A','s',94,0)]),
    (31, [('A','s',95,0)]),
    (32, [('A','s',96,0)]),
    (33, [('A','s',97,0)]),
    (34, [('A','s',98,0)]),
    (35, [('A','s',99,0)]),
    (36, [('A','s',100,0)]),
    (37, [('A','s',101,0)]),
    (38, [('A','s',102,0)]),
]

# Sheet 4: 讲师使用建议
sheet4_rows = [
    (1, [('A','s',0,4)]),
    (2, [('A','s',1,4)]),
    (3, [('A','s',103,4)]),
    (4, [('A','s',104,0)]),
    (5, [('A','s',105,0)]),
    (6, [('A','s',106,0)]),
    (7, [('A','s',107,4)]),
    (8, [('A','s',108,0)]),
    (9, [('A','s',109,0)]),
    (10, [('A','s',110,0)]),
    (11, [('A','s',111,0)]),
    (12, [('A','s',112,4)]),
    (13, [('A','s',113,0)]),
    (14, [('A','s',114,0)]),
    (15, [('A','s',115,0)]),
    (16, [('A','s',116,0)]),
    (17, [('A','s',117,0)]),
    (18, [('A','s',118,4)]),
    (19, [('A','s',119,0)]),
    (20, [('A','s',120,0)]),
    (21, [('A','s',121,0)]),
    (22, [('A','s',122,0)]),
    (23, [('A','s',123,0)]),
    (24, [('A','s',124,4)]),
    (25, [('A','s',125,0)]),
    (26, [('A','s',126,0)]),
    (27, [('A','s',127,0)]),
    (28, [('A','s',128,0)]),
    (29, [('A','s',129,0)]),
    (30, [('A','s',130,0)]),
]

sheets = [
    ("sheet1.xml", sheet1_rows),
    ("sheet2.xml", sheet2_rows),
    ("sheet3.xml", sheet3_rows),
    ("sheet4.xml", sheet4_rows),
]

for i, (filename, rows) in enumerate(sheets):
    content = create_sheet_xml(rows)
    with open(f"{TEMPLATE_DIR}/xl/worksheets/{filename}", "w", encoding="utf-8") as f:
        f.write(content)

workbook_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheets>
    <sheet name="使用说明" sheetId="1" r:id="rId1"/>
    <sheet name="表单填写要点（上）" sheetId="2" r:id="rId4"/>
    <sheet name="表单填写要点（下）" sheetId="3" r:id="rId5"/>
    <sheet name="讲师使用建议" sheetId="4" r:id="rId6"/>
  </sheets>
  <calcPr calcMode="auto"/>
</workbook>'''
with open(f"{TEMPLATE_DIR}/xl/workbook.xml", "w", encoding="utf-8") as f:
    f.write(workbook_xml)

rels_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
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
</Relationships>'''
with open(f"{TEMPLATE_DIR}/xl/_rels/workbook.xml.rels", "w", encoding="utf-8") as f:
    f.write(rels_xml)

ct_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml"  ContentType="application/xml"/>
  <Override PartName="/xl/workbook.xml"
    ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
  <Override PartName="/xl/worksheets/sheet1.xml"
    ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet2.xml"
    ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet3.xml"
    ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet4.xml"
    ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/styles.xml"
    ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>
  <Override PartName="/xl/sharedStrings.xml"
    ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/>
</Types>'''
with open(f"{TEMPLATE_DIR}/[Content_Types].xml", "w", encoding="utf-8") as f:
    f.write(ct_xml)

with open(f"{TEMPLATE_DIR}/_rels/.rels", "w", encoding="utf-8") as f:
    f.write('''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1"
    Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument"
    Target="xl/workbook.xml"/>
</Relationships>''')

os.makedirs(os.path.dirname(OUTPUT_PATH), exist_ok=True)
with zipfile.ZipFile(OUTPUT_PATH, 'w', zipfile.ZIP_DEFLATED) as zf:
    for root, dirs, files in os.walk(TEMPLATE_DIR):
        for file in files:
            file_path = os.path.join(root, file)
            arcname = os.path.relpath(file_path, TEMPLATE_DIR)
            zf.write(file_path, arcname)

print(f"Created: {OUTPUT_PATH}")
print(f"Size: {os.path.getsize(OUTPUT_PATH)} bytes")
