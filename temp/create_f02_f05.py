#!/usr/bin/env python3
"""Generate F02-F05 Excel tool forms."""

import os, shutil

TEMPLATE = "C:/Users/Administrator/.claude/skills/Excel表格处理/templates/minimal_xlsx"
SKILL_SCRIPTS = "C:/Users/Administrator/.claude/skills/Excel表格处理/scripts"
OUT_BASE = "D:/新课开发/家庭教育/3、家庭学习环境系统设计实战指南/完整课程包/06_工具表单"

def copy_template(work):
    if os.path.exists(work):
        shutil.rmtree(work)
    shutil.copytree(TEMPLATE, work)

def write_xml(path, content):
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)

def pack_xlsx(work, out):
    import subprocess
    result = subprocess.run(
        ['python3', f'{SKILL_SCRIPTS}/xlsx_pack.py', work, out],
        capture_output=True, text=True
    )
    print(f"  Pack: {result.stdout.strip().split(chr(10))[-1]}")
    if result.returncode != 0:
        print(f"  ERROR: {result.stderr}")

def ss(*strings):
    """Build sharedStrings.xml"""
    n = len(strings)
    items = '\n'.join(f'  <si><t>{s}</t></si>' for s in strings)
    return f'<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="{n}" uniqueCount="{n}">\n{items}\n</sst>'

# ============================================================
# F02: 家庭学习地图设计表
# ============================================================
def create_f02():
    work = "/tmp/f02_work"
    copy_template(work)

    strings = [
        "家庭学习地图设计表",                    # 0
        "用这张地图，清晰规划家庭学习目标与节奏", # 1
        "一、现状盘点",                          # 2
        "盘点项目",                              # 3
        "当前状态",                              # 4
        "期望状态",                              # 5
        "差距分析",                              # 6
        "学习目标清晰度",                        # 7
        "时间节奏稳定性",                        # 8
        "空间环境质量",                          # 9
        "工具使用能力",                          # 10
        "反馈机制完善度",                        # 11
        "家长角色定位",                          # 12
        "二、目标设定",                          # 13
        "目标类型",                              # 14
        "具体目标",                              # 15
        "衡量标准",                              # 16
        "完成时间",                              # 17
        "短期目标（1个月内）",                   # 18
        "中期目标（1-3个月）",                  # 19
        "长期目标（3个月以上）",                 # 20
        "三、周节奏表",                          # 21
        "时间段",                                # 22
        "周一",                                  # 23
        "周二",                                  # 24
        "周三",                                  # 25
        "周四",                                  # 26
        "周五",                                  # 27
        "周六",                                  # 28
        "周日",                                  # 29
        "早上时段",                              # 30
        "下午时段",                              # 31
        "晚上时段",                              # 32
        "四、周复盘模板",                        # 33
        "复盘项目",                              # 34
        "本周完成情况",                          # 35
        "做得好的地方",                          # 36
        "需要改进的地方",                        # 37
        "下周调整计划",                          # 38
        "学习目标达成率",                        # 39
        "时间利用率",                            # 40
        "孩子状态评分",                          # 41
        "家长角色评分",                          # 42
    ]
    write_xml(f"{work}/xl/sharedStrings.xml", ss(*strings))

    # 4 sheets: 现状盘点, 目标设定, 周节奏表, 周复盘
    # Only one sheet in template. Need to modify workbook.xml + Content_Types + rels + create sheet2-4

    # Modify workbook.xml for 4 sheets
    wb = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <fileVersion appName="xl" lastEdited="7" lowestEdited="7"/>
  <workbookPr defaultThemeVersion="166925"/>
  <bookViews><workbookView xWindow="0" yWindow="0" windowWidth="20140" windowHeight="10960"/></bookViews>
  <sheets>
    <sheet name="现状盘点" sheetId="1" r:id="rId1"/>
    <sheet name="目标设定" sheetId="2" r:id="rId4"/>
    <sheet name="周节奏表" sheetId="3" r:id="rId5"/>
    <sheet name="周复盘" sheetId="4" r:id="rId6"/>
  </sheets>
  <calcPr calcId="191029"/>
</workbook>'''
    write_xml(f"{work}/xl/workbook.xml", wb)

    # Modify workbook.xml.rels
    rels = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
  <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml"/>
  <Relationship Id="rId4" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet2.xml"/>
  <Relationship Id="rId5" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet3.xml"/>
  <Relationship Id="rId6" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet4.xml"/>
</Relationships>'''
    write_xml(f"{work}/xl/_rels/workbook.xml.rels", rels)

    # Modify Content_Types
    ct = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
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
    write_xml(f"{work}/[Content_Types].xml", ct)

    def sheet_xml(rows_data, col_widths=None):
        cols = '''  <cols>
    <col min="1" max="1" width="18" customWidth="1"/>
    <col min="2" max="2" width="20" customWidth="1"/>
    <col min="3" max="3" width="20" customWidth="1"/>
    <col min="4" max="4" width="20" customWidth="1"/>
  </cols>''' if not col_widths else f'''  <cols>\n{col_widths}\n  </cols>'''
        return f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <sheetViews><sheetView tabSelected="1" workbookViewId="0"/></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
{cols}
  <sheetData>
{rows_data}
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

    def row(n, *cells):
        return f'    <row r="{n}" ht="18" customHeight="1">\n' + '\n'.join(f'      {c}' for c in cells) + '\n    </row>'

    def caddr(r, col, v, style='s="0"', t='t="s"'):
        return f'<c r="{col}{r}" {t} {style}><v>{v}</v></c>'

    def cinput(r, col):
        return f'<c r="{col}{r}" s="1"><v></v></c>'

    # Sheet 1: 现状盘点
    s1_rows = []
    s1_rows.append(row(1, caddr(1,'A',0,'s="4"')))
    s1_rows.append(row(2, caddr(2,'A',1,'s="0"')))
    s1_rows.append(row(3, caddr(3,'A',3,'s="4"'), caddr(3,'B',4,'s="4"'), caddr(3,'C',5,'s="4"'), caddr(3,'D',6,'s="4"')))
    # data rows 4-9
    for i, idx in enumerate([7,8,9,10,11,12], start=4):
        s1_rows.append(row(i, caddr(i,'A',idx,'s="0"'), cinput(i,'B'), cinput(i,'C'), cinput(i,'D')))
    s1_data = '\n'.join(s1_rows)

    # Sheet 2: 目标设定
    s2_rows = []
    s2_rows.append(row(1, caddr(1,'A',13,'s="4"')))
    s2_rows.append(row(3, caddr(3,'A',14,'s="4"'), caddr(3,'B',15,'s="4"'), caddr(3,'C',16,'s="4"'), caddr(3,'D',17,'s="4"')))
    s2_rows.append(row(4, caddr(4,'A',18,'s="4"')))
    for r in range(5,8):
        s2_rows.append(row(r, cinput(r,'A'), cinput(r,'B'), cinput(r,'C'), cinput(r,'D')))
    s2_rows.append(row(8, caddr(8,'A',19,'s="4"')))
    for r in range(9,12):
        s2_rows.append(row(r, cinput(r,'A'), cinput(r,'B'), cinput(r,'C'), cinput(r,'D')))
    s2_rows.append(row(12, caddr(12,'A',20,'s="4"')))
    for r in range(13,16):
        s2_rows.append(row(r, cinput(r,'A'), cinput(r,'B'), cinput(r,'C'), cinput(r,'D')))
    s2_data = '\n'.join(s2_rows)

    # Sheet 3: 周节奏表 (7 columns: A=时间段, B-H=周一到周日)
    # Cols: A=时间段(18), B=周一(14), C=周二, D=周三, E=周四, F=周五, G=周六, H=周日
    s3_col_widths = '''    <col min="1" max="1" width="14" customWidth="1"/>
    <col min="2" max="2" width="14" customWidth="1"/>
    <col min="3" max="3" width="14" customWidth="1"/>
    <col min="4" max="4" width="14" customWidth="1"/>
    <col min="5" max="5" width="14" customWidth="1"/>
    <col min="6" max="6" width="14" customWidth="1"/>
    <col min="7" max="7" width="14" customWidth="1"/>
    <col min="8" max="8" width="14" customWidth="1"/>'''

    def row3(n, *cells):
        return f'    <row r="{n}" ht="36" customHeight="1">\n' + '\n'.join(f'      {c}' for c in cells) + '\n    </row>'

    s3_rows = []
    s3_rows.append(row3(1, caddr(1,'A',21,'s="4"')))
    s3_rows.append(row3(2, caddr(2,'A',22,'s="4"'), caddr(2,'B',23,'s="4"'), caddr(2,'C',24,'s="4"'), caddr(2,'D',25,'s="4"'), caddr(2,'E',26,'s="4"'), caddr(2,'F',27,'s="4"'), caddr(2,'G',28,'s="4"'), caddr(2,'H',29,'s="4"')))
    for i, idx in enumerate([30,31,32], start=3):
        s3_rows.append(row3(i, caddr(i,'A',idx,'s="0"'), cinput(i,'B'), cinput(i,'C'), cinput(i,'D'), cinput(i,'E'), cinput(i,'F'), cinput(i,'G'), cinput(i,'H')))
    s3_data = '\n'.join(s3_rows)

    # Sheet 4: 周复盘
    s4_rows = []
    s4_rows.append(row(1, caddr(1,'A',33,'s="4"')))
    s4_rows.append(row(3, caddr(3,'A',34,'s="4"'), caddr(3,'B',35,'s="4"'), caddr(3,'C',36,'s="4"'), caddr(3,'D',37,'s="4"'), caddr(3,'E',38,'s="4"')))
    for i, idx in enumerate([39,40,41,42], start=4):
        s4_rows.append(row(i, caddr(i,'A',idx,'s="0"'), cinput(i,'B'), cinput(i,'C'), cinput(i,'D'), cinput(i,'E')))
    s4_data = '\n'.join(s4_rows)

    write_xml(f"{work}/xl/worksheets/sheet1.xml", sheet_xml(s1_data))
    write_xml(f"{work}/xl/worksheets/sheet2.xml", sheet_xml(s2_data))
    write_xml(f"{work}/xl/worksheets/sheet3.xml", sheet_xml(s3_data, s3_col_widths))
    write_xml(f"{work}/xl/worksheets/sheet4.xml", sheet_xml(s4_data))

    out = f"{OUT_BASE}/F02_家庭学习地图设计表.xlsx"
    os.makedirs(OUT_BASE, exist_ok=True)
    pack_xlsx(work, out)
    print(f"  Created: F02")

# ============================================================
# F03: AI工具分级使用指南
# ============================================================
def create_f03():
    work = "/tmp/f03_work"
    copy_template(work)

    strings = [
        "AI工具分级使用指南",                    # 0
        "按年龄段推荐AI学习工具和使用规范",      # 1
        "年龄段",                                # 2
        "推荐场景",                              # 3
        "推荐工具",                              # 4
        "禁忌场景",                              # 5
        "使用判断标准",                          # 6
        "6-9岁",                                 # 7
        "10-12岁",                               # 8
        "13-15岁",                               # 9
        "16岁以上",                              # 10
        "识字与阅读启蒙",                        # 11
        "口语听说练习",                          # 12
        "简单绘画创作",                          # 13
        "禁止独立使用AI进行作文代写",            # 14
        "能够描述清楚学习需求即可使用",          # 15
        "数学基础计算辅助",                      # 16
        "英语口语对话练习",                      # 17
        "禁止长时间沉迷AI对话",                  # 18
        "每次使用不超过20分钟",                  # 19
        "作文思路启发与批改",                    # 20
        "数理化概念理解辅助",                    # 21
        "禁止直接抄写AI给出的完整答案",         # 22
        "能够区分AI辅助与自主完成",              # 23
        "深度学习研究辅助",                      # 24
        "编程与项目实践",                        # 25
        "禁止用AI完成全部作业",                  # 26
        "能够批判性评估AI输出",                  # 27
        "学习效率提升",                          # 28
        "创意激发",                              # 29
        "知识探索",                              # 30
        "学科辅导",                              # 31
        "效率工具",                              # 32
        "可汗学院少儿版",                        # 33
        "Lingumi/Oxford Reading",              # 34
        "DALL-E绘画/小画家",                     # 35
        "Duolingo/多邻国",                       # 36
        "Photomath/微软数学",                    # 37
        "ChatGPT/Kimi少儿版",                   # 38
        "Wolfram Alpha",                         # 39
        "Notion AI/飞书",                        # 40
        "Cursor/GitHub Copilot",                # 41
    ]
    write_xml(f"{work}/xl/sharedStrings.xml", ss(*strings))

    wb = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <bookViews><workbookView xWindow="0" yWindow="0" windowWidth="20140" windowHeight="10960"/></bookViews>
  <sheets>
    <sheet name="6-9岁" sheetId="1" r:id="rId1"/>
    <sheet name="10-12岁" sheetId="2" r:id="rId4"/>
    <sheet name="13-15岁" sheetId="3" r:id="rId5"/>
    <sheet name="16岁以上" sheetId="4" r:id="rId6"/>
  </sheets>
  <calcPr calcId="191029"/>
</workbook>'''
    write_xml(f"{work}/xl/workbook.xml", wb)

    rels = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
  <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml"/>
  <Relationship Id="rId4" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet2.xml"/>
  <Relationship Id="rId5" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet3.xml"/>
  <Relationship Id="rId6" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet4.xml"/>
</Relationships>'''
    write_xml(f"{work}/xl/_rels/workbook.xml.rels", rels)

    ct = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
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
    write_xml(f"{work}/[Content_Types].xml", ct)

    def age_sheet(age_title_idx, rows_data):
        cols = '''  <cols>
    <col min="1" max="1" width="16" customWidth="1"/>
    <col min="2" max="2" width="32" customWidth="1"/>
    <col min="3" max="3" width="28" customWidth="1"/>
    <col min="4" max="4" width="28" customWidth="1"/>
    <col min="5" max="5" width="24" customWidth="1"/>
  </cols>'''
        return f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <sheetViews><sheetView tabSelected="1" workbookViewId="0"/></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
{cols}
  <sheetData>
{rows_data}
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

    def row(n, *cells):
        return f'    <row r="{n}" ht="36" customHeight="1">\n' + '\n'.join(f'      {c}' for c in cells) + '\n    </row>'

    def caddr(r, col, v, style='s="0"'):
        return f'<c r="{col}{r}" t="s" {style}><v>{v}</v></c>'

    def cinput(r, col):
        return f'<c r="{col}{r}" s="1"><v></v></c>'

    # Each age group sheet: Title + headers + 5 scenario rows
    age_data = [
        # (age_title_idx, scenarios_list)
        (7, [(11,33,14,15),(12,34,14,15),(13,35,14,15)]),  # 6-9岁
        (8, [(16,36,17,19),(20,37,17,19),(21,38,22,23)]),  # 10-12岁
        (9, [(20,39,24,25),(28,40,24,25),(31,41,26,27)]),  # 13-15岁
        (10,[(24,39,24,25),(29,41,26,27),(32,40,26,27)]),  # 16+岁
    ]

    for i, (age_idx, scenarios) in enumerate(age_data, start=1):
        rows_list = []
        rows_list.append(row(1, caddr(1,'A',0,'s="4"')))
        rows_list.append(row(2, caddr(2,'A',age_idx,'s="4"')))
        rows_list.append(row(3, caddr(3,'A',3,'s="4"'), caddr(3,'B',4,'s="4"'), caddr(3,'C',5,'s="4"'), caddr(3,'D',6,'s="4"')))
        for r_idx, (scene_idx, tool_idx, forbid_idx, std_idx) in enumerate(scenarios, start=4):
            rows_list.append(row(r_idx, caddr(r_idx,'A',scene_idx,'s="0"'), caddr(r_idx,'B',tool_idx,'s="0"'), caddr(r_idx,'C',forbid_idx,'s="0"'), caddr(r_idx,'D',std_idx,'s="0"')))
        data_str = '\n'.join(rows_list)
        write_xml(f"{work}/xl/worksheets/sheet{i}.xml", age_sheet(age_idx, data_str))

    out = f"{OUT_BASE}/F03_AI工具分级使用指南.xlsx"
    os.makedirs(OUT_BASE, exist_ok=True)
    pack_xlsx(work, out)
    print(f"  Created: F03")

# ============================================================
# F04: 回教法实施卡
# ============================================================
def create_f04():
    work = "/tmp/f04_work"
    copy_template(work)

    strings = [
        "回教法实施卡",                          # 0
        "四种场景的操作要点和话术（可打印卡片）", # 1
        "场景",                                  # 2
        "操作要点",                              # 3
        "参考话术",                              # 4
        "场景一：新知识学习",                    # 5
        "1. 先听孩子讲解（输出优先）",            # 6
        "2. 不懂时用提问引导",                   # 7
        "3. 让孩子重新复述一遍",                  # 8
        "请把你刚才学到的内容教给我，好吗？",    # 9
        "场景二：作业完成",                      # 10
        "1. 孩子先自己做",                       # 11
        "2. 完成后用自己的话讲解思路",            # 12
        "3. 不明白的地方提问讨论",                # 13
        "你能把这道题的解法讲给我听吗？",        # 14
        "场景三：阅读理解",                      # 15
        "1. 先让孩子阅读材料",                    # 16
        "2. 用自己的话复述内容",                  # 17
        "3. 提问检验理解",                        # 18
        "这篇文章/这段话说了一件什么事？",        # 19
        "场景四：复习巩固",                      # 20
        "1. 孩子假装是老师",                     # 21
        "2. 把学过的内容讲出来",                  # 22
        "3. 家长作为学生提问",                   # 23
        "现在你是老师，我是学生，来教教我吧！",  # 24
        "使用说明：打印后沿虚线裁剪，每张卡片单独使用",  # 25
        "将回教法融入日常学习，每次15-20分钟为宜",     # 26
    ]
    write_xml(f"{work}/xl/sharedStrings.xml", ss(*strings))

    def make_sheet():
        cols = '''  <cols>
    <col min="1" max="1" width="12" customWidth="1"/>
    <col min="2" max="2" width="38" customWidth="1"/>
    <col min="3" max="3" width="36" customWidth="1"/>
  </cols>'''
        rows_data = '''
    <row r="1" ht="24" customHeight="1">
      <c r="A1" t="s" s="4"><v>0</v></c>
    </row>
    <row r="2" ht="18" customHeight="1">
      <c r="A2" t="s" s="0"><v>1</v></c>
    </row>
    <row r="3" ht="18" customHeight="1">
      <c r="A3" t="s" s="4"><v>2</v></c>
      <c r="B3" t="s" s="4"><v>3</v></c>
      <c r="C3" t="s" s="4"><v>4</v></c>
    </row>
    <row r="4" ht="18" customHeight="1">
      <c r="A4" t="s" s="4"><v>5</v></c>
      <c r="B4" t="s" s="0"><v>6</v></c>
      <c r="B5" t="s" s="0"><v>7</v></c>
      <c r="B6" t="s" s="0"><v>8</v></c>
      <c r="C4" t="s" s="0"><v>9</v></c>
    </row>
    <row r="7" ht="18" customHeight="1">
      <c r="A7" t="s" s="4"><v>10</v></c>
      <c r="B7" t="s" s="0"><v>11</v></c>
      <c r="B8" t="s" s="0"><v>12</v></c>
      <c r="B9" t="s" s="0"><v>13</v></c>
      <c r="C7" t="s" s="0"><v>14</v></c>
    </row>
    <row r="10" ht="18" customHeight="1">
      <c r="A10" t="s" s="4"><v>15</v></c>
      <c r="B10" t="s" s="0"><v>16</v></c>
      <c r="B11" t="s" s="0"><v>17</v></c>
      <c r="B12" t="s" s="0"><v>18</v></c>
      <c r="C10" t="s" s="0"><v>19</v></c>
    </row>
    <row r="13" ht="18" customHeight="1">
      <c r="A13" t="s" s="4"><v>20</v></c>
      <c r="B13" t="s" s="0"><v>21</v></c>
      <c r="B14" t="s" s="0"><v>22</v></c>
      <c r="B15" t="s" s="0"><v>23</v></c>
      <c r="C13" t="s" s="0"><v>24</v></c>
    </row>
    <row r="16" ht="18" customHeight="1">
      <c r="A16" t="s" s="0"><v>25</v></c>
    </row>
    <row r="17" ht="18" customHeight="1">
      <c r="A17" t="s" s="0"><v>26</v></c>
    </row>
'''
        return f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <sheetViews><sheetView tabSelected="1" workbookViewId="0"/></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
{cols}
  <sheetData>
{rows_data}
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

    write_xml(f"{work}/xl/worksheets/sheet1.xml", make_sheet())
    out = f"{OUT_BASE}/F04_回教法实施卡.xlsx"
    os.makedirs(OUT_BASE, exist_ok=True)
    pack_xlsx(work, out)
    print(f"  Created: F04")

# ============================================================
# F05: 回教法一周记录表
# ============================================================
def create_f05():
    work = "/tmp/f05_work"
    copy_template(work)

    strings = [
        "回教法一周记录表",                     # 0
        "记录每天至少3个时间段的回教法实施情况", # 1
        "日期",                                 # 2
        "时间段",                               # 3
        "学习场景",                             # 4
        "回教内容",                             # 5
        "复述情况",                             # 6
        "备注",                                 # 7
        "上午",                                 # 8
        "下午",                                 # 9
        "晚上",                                 # 10
        "完全正确",                             # 11
        "部分正确",                             # 12
        "需要再练习",                           # 13
        "周一",                                 # 14
        "周二",                                 # 15
        "周三",                                 # 16
        "周四",                                 # 17
        "周五",                                 # 18
        "周六",                                 # 19
        "周日",                                 # 20
    ]
    write_xml(f"{work}/xl/sharedStrings.xml", ss(*strings))

    cols = '''  <cols>
    <col min="1" max="1" width="10" customWidth="1"/>
    <col min="2" max="2" width="12" customWidth="1"/>
    <col min="3" max="3" width="20" customWidth="1"/>
    <col min="4" max="4" width="24" customWidth="1"/>
    <col min="5" max="5" width="14" customWidth="1"/>
    <col min="6" max="6" width="18" customWidth="1"/>
  </cols>'''

    rows_data = '''
    <row r="1" ht="24" customHeight="1">
      <c r="A1" t="s" s="4"><v>0</v></c>
    </row>
    <row r="2" ht="18" customHeight="1">
      <c r="A2" t="s" s="0"><v>1</v></c>
    </row>
    <row r="3" ht="18" customHeight="1">
      <c r="A3" t="s" s="4"><v>2</v></c>
      <c r="B3" t="s" s="4"><v>3</v></c>
      <c r="C3" t="s" s="4"><v>4</v></c>
      <c r="D3" t="s" s="4"><v>5</v></c>
      <c r="E3" t="s" s="4"><v>6</v></c>
      <c r="F3" t="s" s="4"><v>7</v></c>
    </row>
'''
    day_indices = [14,15,16,17,18,19,20]
    time_indices = [8,9,10]
    row_num = 4
    for day_idx in day_indices:
        for t_idx in time_indices:
            rows_data += f'    <row r="{row_num}" ht="30" customHeight="1">\n'
            rows_data += f'      <c r="A{row_num}" t="s" s="4"><v>{day_idx}</v></c>\n'
            rows_data += f'      <c r="B{row_num}" t="s" s="0"><v>{t_idx}</v></c>\n'
            rows_data += f'      <c r="C{row_num}" s="1"><v></v></c>\n'
            rows_data += f'      <c r="D{row_num}" s="1"><v></v></c>\n'
            rows_data += f'      <c r="E{row_num}" s="1"><v></v></c>\n'
            rows_data += f'      <c r="F{row_num}" s="1"><v></v></c>\n'
            rows_data += '    </row>\n'
            row_num += 1

    sheet_xml_content = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <sheetViews><sheetView tabSelected="1" workbookViewId="0"/></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
{cols}
  <sheetData>
{rows_data}
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''
    write_xml(f"{work}/xl/worksheets/sheet1.xml", sheet_xml_content)
    out = f"{OUT_BASE}/F05_回教法一周记录表.xlsx"
    os.makedirs(OUT_BASE, exist_ok=True)
    pack_xlsx(work, out)
    print(f"  Created: F05")

# ============================================================
# Run F02-F05
# ============================================================
if __name__ == "__main__":
    print("Creating F02-F05...")
    create_f02()
    create_f03()
    create_f04()
    create_f05()
    print("All F02-F05 complete!")
