#!/usr/bin/env python3
"""Generate F06-F09 Excel tool forms."""

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
    n = len(strings)
    items = '\n'.join(f'  <si><t>{s}</t></si>' for s in strings)
    return f'<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="{n}" uniqueCount="{n}">\n{items}\n</sst>'

# ============================================================
# F06: 家长角色自评表
# ============================================================
def create_f06():
    work = "/tmp/f06_work"
    copy_template(work)

    strings = [
        "家长角色自评表",                        # 0
        "共12题，请根据实际情况选择A/B/C/D",      # 1
        "题号",                                  # 2
        "题目内容",                              # 3
        "A",                                    # 4
        "B",                                    # 5
        "C",                                    # 6
        "D",                                    # 7
        "得分",                                  # 8
        "题目1: 您是否清楚孩子每天的学习目标？", # 9
        "题目2: 孩子学习时，您在做什么？",       # 10
        "题目3: 孩子遇到学习困难时，您通常会？", # 11
        "题目4: 您会主动了解孩子的学习内容吗？", # 12
        "题目5: 孩子的作业/学习任务由谁主要负责监督？", # 13
        "题目6: 当孩子学习效果不理想时，您会？", # 14
        "题目7: 您会定期与孩子一起复盘学习情况吗？", # 15
        "题目8: 孩子使用AI工具学习时，您的角色是？", # 16
        "题目9: 您给孩子的学习反馈主要是什么形式？", # 17
        "题目10: 当孩子不愿意学习时，您通常会？", # 18
        "题目11: 您了解孩子在班级/学校的学习状态吗？", # 19
        "题目12: 您对自己在孩子学习中扮演的角色满意吗？", # 20
        "选项A描述: 总是/完全符合",               # 21
        "选项B描述: 经常/比较符合",               # 22
        "选项C描述: 偶尔/偶尔符合",               # 23
        "选项D描述: 几乎不/不符合",               # 24
        "评分规则：A=0分，B=1分，C=2分，D=3分",   # 25
        "总分",                                  # 26
        "诊断结果",                              # 27
        "0-3分：教练型 — 引导有力但需适度放手",  # 28
        "4-7分：混合型 — 角色平衡较好",          # 29
        "8-12分：监工型 — 监督过度需调整方式",   # 30
    ]
    write_xml(f"{work}/xl/sharedStrings.xml", ss(*strings))

    cols = '''  <cols>
    <col min="1" max="1" width="8" customWidth="1"/>
    <col min="2" max="2" width="48" customWidth="1"/>
    <col min="3" max="3" width="14" customWidth="1"/>
    <col min="4" max="4" width="14" customWidth="1"/>
    <col min="5" max="5" width="14" customWidth="1"/>
    <col min="6" max="6" width="14" customWidth="1"/>
    <col min="7" max="7" width="10" customWidth="1"/>
  </cols>'''

    rows_data = '''
    <row r="1" ht="28" customHeight="1">
      <c r="A1" t="s" s="4"><v>0</v></c>
    </row>
    <row r="2" ht="18" customHeight="1">
      <c r="A2" t="s" s="0"><v>1</v></c>
    </row>
    <row r="3" ht="36" customHeight="1">
      <c r="A3" t="s" s="4"><v>2</v></c>
      <c r="B3" t="s" s="4"><v>3</v></c>
      <c r="C3" t="s" s="4"><v>4</v></c>
      <c r="D3" t="s" s="4"><v>5</v></c>
      <c r="E3" t="s" s="4"><v>6</v></c>
      <c r="F3" t="s" s="4"><v>7</v></c>
      <c r="G3" t="s" s="4"><v>8</v></c>
    </row>
'''
    # rows 4-15: questions 1-12
    q_indices = [9,10,11,12,13,14,15,16,17,18,19,20]
    for i, q_idx in enumerate(q_indices, start=4):
        rows_data += f'    <row r="{i}" ht="36" customHeight="1">\n'
        rows_data += f'      <c r="A{i}" t="s" s="4"><v>{i-3}</v></c>\n'
        rows_data += f'      <c r="B{i}" t="s" s="0"><v>{q_idx}</v></c>\n'
        rows_data += f'      <c r="C{i}" t="s" s="1"><v>0</v></c>\n'
        rows_data += f'      <c r="D{i}" t="s" s="1"><v>1</v></c>\n'
        rows_data += f'      <c r="E{i}" t="s" s="1"><v>2</v></c>\n'
        rows_data += f'      <c r="F{i}" t="s" s="1"><v>3</v></c>\n'
        # G = score formula: if user puts marker in one of C/D/E/F, return the score
        rows_data += f'      <c r="G{i}" s="2"><f>IF(C{i}&lt;&gt;&quot;&quot;,0,IF(D{i}&lt;&gt;&quot;&quot;,1,IF(E{i}&lt;&gt;&quot;&quot;,2,IF(F{i}&lt;&gt;&quot;&quot;,3,0))))</f><v>0</v></c>\n'
        rows_data += '    </row>\n'

    # Row 16: scoring info
    rows_data += '    <row r="16" ht="18" customHeight="1">\n'
    rows_data += '      <c r="A16" t="s" s="0"><v>25</v></c>\n'
    rows_data += '    </row>\n'

    # Row 17: total
    rows_data += '    <row r="17" ht="22" customHeight="1">\n'
    rows_data += '      <c r="A17" t="s" s="4"><v>26</v></c>\n'
    rows_data += '      <c r="B17" s="6"><f>SUM(G4:G15)</f><v>0</v></c>\n'
    rows_data += '    </row>\n'

    # Row 18: diagnosis
    rows_data += '    <row r="18" ht="22" customHeight="1">\n'
    rows_data += '      <c r="A18" t="s" s="4"><v>27</v></c>\n'
    rows_data += '      <c r="B18" t="s" s="0"><v>诊断说明：</v></c>\n'
    rows_data += '      <c r="C18" s="2"><f>IF(B17&lt;=3,&quot;教练型（0-3分）：引导有力但需适度放手&quot;,IF(B17&lt;=7,&quot;混合型（4-7分）：角色平衡较好&quot;,&quot;监工型（8-12分）：监督过度需调整方式&quot;))</f><v></v></c>\n'
    rows_data += '    </row>\n'

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
    out = f"{OUT_BASE}/F06_家长角色自评表.xlsx"
    os.makedirs(OUT_BASE, exist_ok=True)
    pack_xlsx(work, out)
    print(f"  Created: F06")

# ============================================================
# F07: 三个行为替换实践记录
# ============================================================
def create_f07():
    work = "/tmp/f07_work"
    copy_template(work)

    strings = [
        "三个行为替换实践记录",                  # 0
        "选择三个需要改变的行为，用新行为替代，追踪21天", # 1
        "行为编号",                              # 2
        "原行为",                                # 3
        "新行为",                                # 4
        "执行记录（第X天）",                    # 5
        "第1天",                                 # 6
        "第2天",                                 # 7
        "第3天",                                 # 8
        "第4天",                                 # 9
        "第5天",                                 # 10
        "第6天",                                 # 11
        "第7天",                                 # 12
        "第8天",                                 # 13
        "第9天",                                 # 14
        "第10天",                                # 15
        "第11天",                                # 16
        "第12天",                                # 17
        "第13天",                                # 18
        "第14天",                                # 19
        "第15天",                                # 20
        "第16天",                                # 21
        "第17天",                                # 22
        "第18天",                                # 23
        "第19天",                                # 24
        "第20天",                                # 25
        "第21天",                                # 26
        "完成情况",                              # 27
        "坚持完成",                              # 28
        "部分完成",                              # 29
        "未执行",                                # 30
    ]
    write_xml(f"{work}/xl/sharedStrings.xml", ss(*strings))

    # 3 rows for 3 behaviors, 21 columns for days
    cols = '  <cols>\n    <col min="1" max="1" width="10" customWidth="1"/>\n    <col min="2" max="2" width="20" customWidth="1"/>\n    <col min="3" max="3" width="20" customWidth="1"/>\n'
    for i in range(4, 27):  # columns D to Z (day 1-21 = columns D-AB... actually 21 days = 21 cols)
        cols += f'    <col min="{i}" max="{i}" width="8" customWidth="1"/>\n'
    cols += f'    <col min="26" max="26" width="12" customWidth="1"/>\n'
    cols += '  </cols>'

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
      <c r="G3" t="s" s="4"><v>8</v></c>
      <c r="H3" t="s" s="4"><v>9</v></c>
      <c r="I3" t="s" s="4"><v>10</v></c>
      <c r="J3" t="s" s="4"><v>11</v></c>
      <c r="K3" t="s" s="4"><v>12</v></c>
      <c r="L3" t="s" s="4"><v>13</v></c>
      <c r="M3" t="s" s="4"><v>14</v></c>
      <c r="N3" t="s" s="4"><v>15</v></c>
      <c r="O3" t="s" s="4"><v>16</v></c>
      <c r="P3" t="s" s="4"><v>17</v></c>
      <c r="Q3" t="s" s="4"><v>18</v></c>
      <c r="R3" t="s" s="4"><v>19</v></c>
      <c r="S3" t="s" s="4"><v>20</v></c>
      <c r="T3" t="s" s="4"><v>21</v></c>
      <c r="U3" t="s" s="4"><v>22</v></c>
      <c r="V3" t="s" s="4"><v>23</v></c>
      <c r="W3" t="s" s="4"><v>24</v></c>
      <c r="X3" t="s" s="4"><v>25</v></c>
      <c r="Y3" t="s" s="4"><v>26</v></c>
      <c r="Z3" t="s" s="4"><v>27</v></c>
    </row>
'''
    # behavior rows 4, 5, 6
    for b_row in [4, 5, 6]:
        rows_data += f'    <row r="{b_row}" ht="30" customHeight="1">\n'
        rows_data += f'      <c r="A{b_row}" t="s" s="4"><v>行为{b_row-3}</v></c>\n'
        rows_data += f'      <c r="B{b_row}" s="1"><v></v></c>\n'
        rows_data += f'      <c r="C{b_row}" s="1"><v></v></c>\n'
        for day_col_idx, col_letter in enumerate(['D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X'], start=0):
            rows_data += f'      <c r="{col_letter}{b_row}" s="1"><v></v></c>\n'
        # Y = completion formula (count non-empty)
        rows_data += f'      <c r="Y{b_row}" s="2"><f>COUNTA(D{b_row}:X{b_row})</f><v>0</v></c>\n'
        rows_data += '    </row>\n'

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
    out = f"{OUT_BASE}/F07_三个行为替换实践记录.xlsx"
    os.makedirs(OUT_BASE, exist_ok=True)
    pack_xlsx(work, out)
    print(f"  Created: F07")

# ============================================================
# F08: 家庭AI学习系统方案模板
# ============================================================
def create_f08():
    work = "/tmp/f08_work"
    copy_template(work)

    strings = [
        "家庭AI学习系统方案模板",               # 0
        "使用SMART原则设定学习目标，系统规划家庭学习", # 1
        "一、学习目标",                          # 2
        "目标描述",                              # 3
        "SMART要素",                             # 4
        "具体（Specific）",                     # 5
        "可衡量（Measurable）",                 # 6
        "可达成（Achievable）",                  # 7
        "相关性（Relevant）",                    # 8
        "时限（Time-bound）",                   # 9
        "目标1",                                 # 10
        "目标2",                                 # 11
        "目标3",                                 # 12
        "二、学习地图",                          # 13
        "当前位置",                              # 14
        "目标位置",                              # 15
        "路径规划",                              # 16
        "里程碑",                                # 17
        "三、工具矩阵",                          # 18
        "工具类型",                              # 19
        "工具名称",                              # 20
        "使用场景",                              # 21
        "使用频率",                              # 22
        "辅助工具",                              # 23
        "学习工具",                              # 24
        "AI工具",                                # 25
        "四、输出机制",                          # 26
        "输出形式",                              # 27
        "频率",                                  # 28
        "质量标准",                              # 29
        "口头讲解",                              # 30
        "书面作业",                              # 31
        "项目成果",                              # 32
        "五、角色承诺",                          # 33
        "角色",                                  # 34
        "主要职责",                              # 35
        "承诺事项",                              # 36
        "孩子",                                  # 37
        "家长",                                  # 38
        "执行开始日期",                          # 39
        "执行结束日期",                          # 40
        "制定日期",                              # 41
    ]
    write_xml(f"{work}/xl/sharedStrings.xml", ss(*strings))

    wb = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <bookViews><workbookView xWindow="0" yWindow="0" windowWidth="20140" windowHeight="10960"/></bookViews>
  <sheets>
    <sheet name="学习目标" sheetId="1" r:id="rId1"/>
    <sheet name="学习地图" sheetId="2" r:id="rId4"/>
    <sheet name="工具矩阵" sheetId="3" r:id="rId5"/>
    <sheet name="输出机制" sheetId="4" r:id="rId6"/>
    <sheet name="角色承诺" sheetId="5" r:id="rId7"/>
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
  <Relationship Id="rId7" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet5.xml"/>
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
  <Override PartName="/xl/worksheets/sheet5.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>
  <Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/>
</Types>'''
    write_xml(f"{work}/[Content_Types].xml", ct)

    def make_s(data, cols_xml):
        return f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <sheetViews><sheetView tabSelected="1" workbookViewId="0"/></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
{cols_xml}
  <sheetData>
{data}
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

    def row(n, *cells):
        return f'    <row r="{n}" ht="18" customHeight="1">\n' + '\n'.join(f'      {c}' for c in cells) + '\n    </row>'

    def caddr(r, col, v, style='s="0"'):
        return f'<c r="{col}{r}" t="s" {style}><v>{v}</v></c>'

    def cinput(r, col):
        return f'<c r="{col}{r}" s="1"><v></v></c>'

    # Sheet1: 学习目标 (SMART table)
    s1_cols = '''  <cols>
    <col min="1" max="1" width="10" customWidth="1"/>
    <col min="2" max="2" width="28" customWidth="1"/>
    <col min="3" max="3" width="18" customWidth="1"/>
    <col min="4" max="4" width="18" customWidth="1"/>
    <col min="5" max="5" width="18" customWidth="1"/>
    <col min="6" max="6" width="18" customWidth="1"/>
    <col min="7" max="7" width="18" customWidth="1"/>
  </cols>'''
    s1 = ''
    s1 += row(1, caddr(1,'A',0,'s="4"'))
    s1 += row(2, caddr(2,'A',1,'s="0"'))
    s1 += row(3, caddr(3,'A',3,'s="4"'), caddr(3,'B',4,'s="4"'), caddr(3,'C',5,'s="4"'), caddr(3,'D',6,'s="4"'), caddr(3,'E',7,'s="4"'), caddr(3,'F',8,'s="4"'), caddr(3,'G',9,'s="4"'))
    for i, goal_idx in enumerate([10,11,12], start=4):
        s1 += row(i, caddr(i,'A',goal_idx,'s="0"'), cinput(i,'B'), cinput(i,'C'), cinput(i,'D'), cinput(i,'E'), cinput(i,'F'), cinput(i,'G'))
    write_xml(f"{work}/xl/worksheets/sheet1.xml", make_s(s1, s1_cols))

    # Sheet2: 学习地图
    s2_cols = '''  <cols>
    <col min="1" max="1" width="12" customWidth="1"/>
    <col min="2" max="2" width="24" customWidth="1"/>
    <col min="3" max="3" width="24" customWidth="1"/>
    <col min="4" max="4" width="24" customWidth="1"/>
    <col min="5" max="5" width="18" customWidth="1"/>
  </cols>'''
    s2 = ''
    s2 += row(1, caddr(1,'A',13,'s="4"'))
    s2 += row(3, caddr(3,'A',14,'s="4"'), caddr(3,'B',15,'s="4"'), caddr(3,'C',16,'s="4"'), caddr(3,'D',17,'s="4"'))
    for r in range(4,8):
        s2 += row(r, cinput(r,'A'), cinput(r,'B'), cinput(r,'C'), cinput(r,'D'))
    write_xml(f"{work}/xl/worksheets/sheet2.xml", make_s(s2, s2_cols))

    # Sheet3: 工具矩阵
    s3_cols = '''  <cols>
    <col min="1" max="1" width="12" customWidth="1"/>
    <col min="2" max="2" width="20" customWidth="1"/>
    <col min="3" max="3" width="24" customWidth="1"/>
    <col min="4" max="4" width="14" customWidth="1"/>
  </cols>'''
    s3 = ''
    s3 += row(1, caddr(1,'A',18,'s="4"'))
    s3 += row(3, caddr(3,'A',19,'s="4"'), caddr(3,'B',20,'s="4"'), caddr(3,'C',21,'s="4"'), caddr(3,'D',22,'s="4"'))
    for r in [4,5,6]:
        tool_idx = 23 if r==4 else (24 if r==5 else 25)
        s3 += row(r, caddr(r,'A',tool_idx,'s="0"'), cinput(r,'B'), cinput(r,'C'), cinput(r,'D'))
    write_xml(f"{work}/xl/worksheets/sheet3.xml", make_s(s3, s3_cols))

    # Sheet4: 输出机制
    s4_cols = '''  <cols>
    <col min="1" max="1" width="12" customWidth="1"/>
    <col min="2" max="2" width="20" customWidth="1"/>
    <col min="3" max="3" width="14" customWidth="1"/>
    <col min="4" max="4" width="20" customWidth="1"/>
  </cols>'''
    s4 = ''
    s4 += row(1, caddr(1,'A',26,'s="4"'))
    s4 += row(3, caddr(3,'A',27,'s="4"'), caddr(3,'B',28,'s="4"'), caddr(3,'C',29,'s="4"'))
    for r, idx in zip([4,5,6],[30,31,32]):
        s4 += row(r, caddr(r,'A',idx,'s="0"'), cinput(r,'B'), cinput(r,'C'))
    write_xml(f"{work}/xl/worksheets/sheet4.xml", make_s(s4, s4_cols))

    # Sheet5: 角色承诺
    s5_cols = '''  <cols>
    <col min="1" max="1" width="10" customWidth="1"/>
    <col min="2" max="2" width="20" customWidth="1"/>
    <col min="3" max="3" width="36" customWidth="1"/>
    <col min="4" max="4" width="18" customWidth="1"/>
    <col min="5" max="5" width="18" customWidth="1"/>
  </cols>'''
    s5 = ''
    s5 += row(1, caddr(1,'A',33,'s="4"'))
    s5 += row(3, caddr(3,'A',34,'s="4"'), caddr(3,'B',35,'s="4"'), caddr(3,'C',36,'s="4"'), caddr(3,'D',39,'s="4"'), caddr(3,'E',40,'s="4"'))
    for r, idx in zip([4,5],[37,38]):
        s5 += row(r, caddr(r,'A',idx,'s="0"'), cinput(r,'B'), cinput(r,'C'), cinput(r,'D'), cinput(r,'E'))
    s5 += row(6, caddr(6,'A',41,'s="0"'), cinput(6,'B'), cinput(6,'C'), cinput(6,'D'), cinput(6,'E'))
    write_xml(f"{work}/xl/worksheets/sheet5.xml", make_s(s5, s5_cols))

    out = f"{OUT_BASE}/F08_家庭AI学习系统方案模板.xlsx"
    os.makedirs(OUT_BASE, exist_ok=True)
    pack_xlsx(work, out)
    print(f"  Created: F08")

# ============================================================
# F09: 示例方案（小明家庭）
# ============================================================
def create_f09():
    work = "/tmp/f09_work"
    copy_template(work)

    # For F09, we use the same structure as F08 but filled with fictional data
    strings = [
        "示例方案——小明家庭",                   # 0
        "以下为虚构家庭案例，展示完整方案填写方式", # 1
        "一、学习目标",                          # 2
        "目标描述",                              # 3
        "SMART要素",                             # 4
        "具体（Specific）",                     # 5
        "可衡量（Measurable）",                 # 6
        "可达成（Achievable）",                  # 7
        "相关性（Relevant）",                    # 8
        "时限（Time-bound）",                   # 9
        "目标1：数学成绩提升",                   # 10
        "期末数学达到90分以上",                  # 11
        "每天做20道计算题",                      # 12
        "班级中等提升到前10名",                  # 13
        "与数学老师确认可行",                    # 14
        "期末考试（12周后）",                    # 15
        "目标2：英语口语流利",                   # 16
        "能用英语进行日常对话",                  # 17
        "每天15分钟AI口语练习",                  # 18
        "能与外教简单交流",                      # 19
        "利用AI工具辅助练习",                    # 20
        "3个月后测试",                           # 21
        "目标3：阅读习惯养成",                   # 22
        "每天阅读30分钟",                        # 23
        "每周读完1本书",                          # 24
        "完成学校阅读任务",                      # 25
        "选择孩子感兴趣的书籍",                  # 26
        "持续一学期",                            # 27
        "二、学习地图",                          # 28
        "当前位置",                              # 29
        "目标位置",                              # 30
        "路径规划",                              # 31
        "里程碑",                                # 32
        "数学：基础计算需加强",                 # 33
        "数学：期末90+",                         # 34
        "每天计算训练+错题本",                  # 35
        "第4周错题减少50%",                      # 36
        "英语：词汇量800",                       # 37
        "英语：日常对话流利",                    # 38
        "自然拼读+口语+阅读",                   # 39
        "第8周能简单自我介绍",                  # 40
        "阅读：不爱看书",                        # 41
        "阅读：养成习惯",                         # 42
        "从5分钟开始逐步增加",                  # 43
        "第6周能独立阅读",                       # 44
        "三、工具矩阵",                          # 45
        "工具类型",                              # 46
        "工具名称",                              # 47
        "使用场景",                              # 48
        "使用频率",                              # 49
        "辅助工具",                              # 50
        "词典APP",                               # 51
        "英语学习",                              # 52
        "每天",                                  # 53
        "学习工具",                              # 54
        "错题本",                                # 55
        "数学复习",                              # 56
        "每周",                                  # 57
        "AI工具",                                # 58
        "Kimi/ChatGPT",                         # 59
        "口语练习/概念解答",                    # 60
        "每天",                                  # 61
        "四、输出机制",                          # 62
        "输出形式",                              # 63
        "频率",                                  # 64
        "质量标准",                              # 65
        "口头讲解",                              # 66
        "每天",                                  # 67
        "能用自己的话讲清楚",                   # 68
        "书面作业",                              # 69
        "每天",                                  # 70
        "按时完成+正确率80%+",                  # 71
        "项目成果",                              # 72
        "每月",                                  # 73
        "完成1个主题探究",                       # 74
        "五、角色承诺",                          # 75
        "角色",                                  # 76
        "主要职责",                              # 77
        "承诺事项",                              # 78
        "孩子",                                  # 79
        "自主学习",                               # 80
        "每天按时完成学习任务",                 # 81
        "家长",                                  # 82
        "陪伴与监督",                            # 83
        "每天检查作业质量，给予反馈",           # 84
        "执行开始日期",                          # 85
        "2024年9月1日",                          # 86
        "执行结束日期",                          # 87
        "2024年12月31日",                       # 88
        "制定日期",                              # 89
        "2024年8月25日",                        # 90
    ]
    write_xml(f"{work}/xl/sharedStrings.xml", ss(*strings))

    wb = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <bookViews><workbookView xWindow="0" yWindow="0" windowWidth="20140" windowHeight="10960"/></bookViews>
  <sheets>
    <sheet name="学习目标" sheetId="1" r:id="rId1"/>
    <sheet name="学习地图" sheetId="2" r:id="rId4"/>
    <sheet name="工具矩阵" sheetId="3" r:id="rId5"/>
    <sheet name="输出机制" sheetId="4" r:id="rId6"/>
    <sheet name="角色承诺" sheetId="5" r:id="rId7"/>
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
  <Relationship Id="rId7" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet5.xml"/>
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
  <Override PartName="/xl/worksheets/sheet5.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>
  <Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/>
</Types>'''
    write_xml(f"{work}/[Content_Types].xml", ct)

    def make_s(data, cols_xml):
        return f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <sheetViews><sheetView tabSelected="1" workbookViewId="0"/></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
{cols_xml}
  <sheetData>
{data}
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

    def row(n, *cells):
        return f'    <row r="{n}" ht="18" customHeight="1">\n' + '\n'.join(f'      {c}' for c in cells) + '\n    </row>'

    def caddr(r, col, v, style='s="0"'):
        return f'<c r="{col}{r}" t="s" {style}><v>{v}</v></c>'

    def cinput(r, col):
        return f'<c r="{col}{r}" s="1"><v></v></c>'

    def cfilled(r, col, v, style='s="0"'):
        return f'<c r="{col}{r}" t="s" {style}><v>{v}</v></c>'

    # Sheet1: 学习目标 (filled)
    s1_cols = '''  <cols>
    <col min="1" max="1" width="10" customWidth="1"/>
    <col min="2" max="2" width="28" customWidth="1"/>
    <col min="3" max="3" width="18" customWidth="1"/>
    <col min="4" max="4" width="18" customWidth="1"/>
    <col min="5" max="5" width="18" customWidth="1"/>
    <col min="6" max="6" width="18" customWidth="1"/>
    <col min="7" max="7" width="18" customWidth="1"/>
  </cols>'''
    s1 = ''
    s1 += row(1, caddr(1,'A',0,'s="4"'))
    s1 += row(2, caddr(2,'A',1,'s="0"'))
    s1 += row(3, caddr(3,'A',3,'s="4"'), caddr(3,'B',4,'s="4"'), caddr(3,'C',5,'s="4"'), caddr(3,'D',6,'s="4"'), caddr(3,'E',7,'s="4"'), caddr(3,'F',8,'s="4"'), caddr(3,'G',9,'s="4"'))
    # Goal 1
    s1 += row(4, caddr(4,'A',10,'s="0"'), cfilled(4,'B',11), cfilled(4,'C',12), cfilled(4,'D',13), cfilled(4,'E',14), cfilled(4,'F',15))
    # Goal 2
    s1 += row(5, caddr(5,'A',16,'s="0"'), cfilled(5,'B',17), cfilled(5,'C',18), cfilled(5,'D',19), cfilled(5,'E',20), cfilled(5,'F',21))
    # Goal 3
    s1 += row(6, caddr(6,'A',22,'s="0"'), cfilled(6,'B',23), cfilled(6,'C',24), cfilled(6,'D',25), cfilled(6,'E',26), cfilled(6,'F',27))
    write_xml(f"{work}/xl/worksheets/sheet1.xml", make_s(s1, s1_cols))

    # Sheet2: 学习地图 (filled)
    s2_cols = '''  <cols>
    <col min="1" max="1" width="12" customWidth="1"/>
    <col min="2" max="2" width="24" customWidth="1"/>
    <col min="3" max="3" width="24" customWidth="1"/>
    <col min="4" max="4" width="24" customWidth="1"/>
    <col min="5" max="5" width="18" customWidth="1"/>
  </cols>'''
    s2 = ''
    s2 += row(1, caddr(1,'A',28,'s="4"'))
    s2 += row(3, caddr(3,'A',29,'s="4"'), caddr(3,'B',30,'s="4"'), caddr(3,'C',31,'s="4"'), caddr(3,'D',32,'s="4"'))
    # math
    s2 += row(4, cfilled(4,'A',33), cfilled(4,'B',34), cfilled(4,'C',35), cfilled(4,'D',36))
    # english
    s2 += row(5, cfilled(5,'A',37), cfilled(5,'B',38), cfilled(5,'C',39), cfilled(5,'D',40))
    # reading
    s2 += row(6, cfilled(6,'A',41), cfilled(6,'B',42), cfilled(6,'C',43), cfilled(6,'D',44))
    write_xml(f"{work}/xl/worksheets/sheet2.xml", make_s(s2, s2_cols))

    # Sheet3: 工具矩阵 (filled)
    s3_cols = '''  <cols>
    <col min="1" max="1" width="12" customWidth="1"/>
    <col min="2" max="2" width="20" customWidth="1"/>
    <col min="3" max="3" width="24" customWidth="1"/>
    <col min="4" max="4" width="14" customWidth="1"/>
  </cols>'''
    s3 = ''
    s3 += row(1, caddr(1,'A',45,'s="4"'))
    s3 += row(3, caddr(3,'A',46,'s="4"'), caddr(3,'B',47,'s="4"'), caddr(3,'C',48,'s="4"'), caddr(3,'D',49,'s="4"'))
    s3 += row(4, cfilled(4,'A',50), cfilled(4,'B',51), cfilled(4,'C',52), cfilled(4,'D',53))
    s3 += row(5, cfilled(5,'A',54), cfilled(5,'B',55), cfilled(5,'C',56), cfilled(5,'D',57))
    s3 += row(6, cfilled(6,'A',58), cfilled(6,'B',59), cfilled(6,'C',60), cfilled(6,'D',61))
    write_xml(f"{work}/xl/worksheets/sheet3.xml", make_s(s3, s3_cols))

    # Sheet4: 输出机制 (filled)
    s4_cols = '''  <cols>
    <col min="1" max="1" width="12" customWidth="1"/>
    <col min="2" max="2" width="20" customWidth="1"/>
    <col min="3" max="3" width="14" customWidth="1"/>
    <col min="4" max="4" width="20" customWidth="1"/>
  </cols>'''
    s4 = ''
    s4 += row(1, caddr(1,'A',62,'s="4"'))
    s4 += row(3, caddr(3,'A',63,'s="4"'), caddr(3,'B',64,'s="4"'), caddr(3,'C',65,'s="4"'))
    s4 += row(4, cfilled(4,'A',66), cfilled(4,'B',67), cfilled(4,'C',68))
    s4 += row(5, cfilled(5,'A',69), cfilled(5,'B',70), cfilled(5,'C',71))
    s4 += row(6, cfilled(6,'A',72), cfilled(6,'B',73), cfilled(6,'C',74))
    write_xml(f"{work}/xl/worksheets/sheet4.xml", make_s(s4, s4_cols))

    # Sheet5: 角色承诺 (filled)
    s5_cols = '''  <cols>
    <col min="1" max="1" width="10" customWidth="1"/>
    <col min="2" max="2" width="20" customWidth="1"/>
    <col min="3" max="3" width="36" customWidth="1"/>
    <col min="4" max="4" width="18" customWidth="1"/>
    <col min="5" max="5" width="18" customWidth="1"/>
  </cols>'''
    s5 = ''
    s5 += row(1, caddr(1,'A',75,'s="4"'))
    s5 += row(3, caddr(3,'A',76,'s="4"'), caddr(3,'B',77,'s="4"'), caddr(3,'C',78,'s="4"'), caddr(3,'D',85,'s="4"'), caddr(3,'E',87,'s="4"'))
    s5 += row(4, cfilled(4,'A',79), cfilled(4,'B',80), cfilled(4,'C',81), cfilled(4,'D',86), cfilled(4,'E',88))
    s5 += row(5, cfilled(5,'A',82), cfilled(5,'B',83), cfilled(5,'C',84), cfilled(5,'D',86), cfilled(5,'E',88))
    s5 += row(6, caddr(6,'A',89,'s="0"'), cfilled(6,'B',90), cinput(6,'C'), cinput(6,'D'), cinput(6,'E'))
    write_xml(f"{work}/xl/worksheets/sheet5.xml", make_s(s5, s5_cols))

    out = f"{OUT_BASE}/F09_示例方案.xlsx"
    os.makedirs(OUT_BASE, exist_ok=True)
    pack_xlsx(work, out)
    print(f"  Created: F09")

# ============================================================
# Run F06-F09
# ============================================================
if __name__ == "__main__":
    print("Creating F06-F09...")
    create_f06()
    create_f07()
    create_f08()
    create_f09()
    print("All F06-F09 complete!")
