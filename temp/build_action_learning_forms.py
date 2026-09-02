#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Build all 7 Action Learning Facilitator Excel Tool Forms
Color scheme: Red-Gray (#C41E3A primary)
"""
import os
import shutil
import subprocess

SKILL_DIR = r'C:\Users\Administrator\.claude\skills\Excel表格处理'
TEMPLATE = SKILL_DIR + r'\templates\minimal_xlsx'
OUT_DIR = r'D:\新课开发\行动学习2026\催化师核心技术：提问与反思\完整课程包\07-工具表单' + '\\'

os.makedirs(OUT_DIR, exist_ok=True)

def copy_template(work_dir):
    shutil.rmtree(work_dir, ignore_errors=True)
    shutil.copytree(TEMPLATE, work_dir)

def pack(work_dir, output_path):
    subprocess.run(
        ['python3', SKILL_DIR + r'\scripts\xlsx_pack.py', work_dir, output_path],
        check=True, encoding='utf-8'
    )

def write_file(path, content):
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)

# Style indices:
# 0 = default (input text, left-aligned)
# 1 = header red bg, white bold text (section headers)
# 2 = gray input cells
# 3 = label text (bold, red accent)
# 4 = section header (red bg)
# 5 = light red bg (alternative rows)

STYLES_XML = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <fonts>
    <font><sz val="11"/><name val="Calibri"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="000000FF"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="00000000"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="00008000"/></font>
    <font><b/><sz val="12"/><name val="Calibri"/><color rgb="FFFFFFFF"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="00C41E3A"/></font>
    <font><b/><sz val="11"/><name val="Calibri"/><color rgb="FFFFFFFF"/></font>
  </fonts>
  <fills>
    <fill><patternFill patternType="none"/></fill>
    <fill><patternFill patternType="gray125"/></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="00C41E3A"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="00F5E6E8"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="00D9D9D9"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="00FFFFFF"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="00FFF2F2"/></patternFill></fill>
  </fills>
  <borders>
    <border><left/><right/><top/><bottom/><diagonal/></border>
    <border><left style="thin"><color rgb="00000000"/></left><right style="thin"><color rgb="00000000"/></right><top style="thin"><color rgb="00000000"/></top><bottom style="thin"><color rgb="00000000"/></bottom></border>
  </borders>
  <cellStyleXfs>
    <xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/>
  </cellStyleXfs>
  <cellXfs>
    <xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0" applyFont="1" applyAlignment="1"><alignment horizontal="left" vertical="center" wrapText="1"/></xf>
    <xf numFmtId="0" fontId="6" fillId="2" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1" applyAlignment="1"><alignment horizontal="center" vertical="center"/></xf>
    <xf numFmtId="0" fontId="0" fillId="6" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1" applyAlignment="1"><alignment horizontal="left" vertical="center" wrapText="1"/></xf>
    <xf numFmtId="0" fontId="5" fillId="3" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1" applyAlignment="1"><alignment horizontal="left" vertical="center" wrapText="1"/></xf>
    <xf numFmtId="0" fontId="0" fillId="5" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1" applyAlignment="1"><alignment horizontal="left" vertical="center" wrapText="1"/></xf>
    <xf numFmtId="0" fontId="0" fillId="4" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1" applyAlignment="1"><alignment horizontal="left" vertical="center" wrapText="1"/></xf>
  </cellXfs>
  <numFmts>
    <numFmt numFmtId="164" formatCode="$#,##0;($#,##0);&quot;-&quot;"/>
    <numFmt numFmtId="165" formatCode="0.0%"/>
  </numFmts>
</styleSheet>'''

def build_shared_strings(strings):
    si = []
    for s in strings:
        s = s.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;')
        si.append(f'<si><t>{s}</t></si>')
    n = len(strings)
    return f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="{n}" uniqueCount="{n}">
{''.join(si)}
</sst>'''

def r(col, row):
    return f'{col}{row}'

def make_sheet(rows_xml, dv_xml=None):
    sheet = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"><pane ySplit="1" topLeftCell="A2" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols>
    <col min="1" max="1" width="22" customWidth="1"/>
    <col min="2" max="2" width="45" customWidth="1"/>
    <col min="3" max="3" width="20" customWidth="1"/>
    <col min="4" max="4" width="20" customWidth="1"/>
    <col min="5" max="5" width="20" customWidth="1"/>
  </cols>
  <sheetData>
{rows_xml}  </sheetData>
'''
    if dv_xml:
        sheet += dv_xml
    sheet += '  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>\n</worksheet>'
    return sheet

def hdr(rnum, txt, col='A', style='s="1"'):
    return f'    <c r="{col}{rnum}" t="s" {style}><v>{txt}</v></c>'

def inp(rnum, col='B', style='s="0"'):
    return f'    <c r="{col}{rnum}" {style}></c>'

def row_hdr(rnum, cols):
    cells = ''.join(f'<c r="{c}" t="s" s="1"><v>{i}</v></c>' for i, c in enumerate(cols))
    return f'  <row r="{rnum}">{cells}</row>'

# ============================================================
# FILE 1: 催化师现场卡点卡.xlsx
# ============================================================
print("Building File 1: 催化师现场卡点卡.xlsx")
work = '/tmp/w01'
copy_template(work)

strs = [
    '催化师现场卡点卡', '课题背景', '请输入本次催化任务的课题背景',
    '卡点类型（单选）', '讨论表面化', '陷入抱怨', '过早收敛', '沉默僵住', '观点对立', '其他',
    '具体情境描述', '请详细描述当前讨论的卡点情境',
    '期望改变', '请描述你期望达到的改变',
    '强有力问题设计', '问题1', '问题2', '问题3',
    'O-R-I-D 脚本设计', 'Objective（客观）', '请输入Objective层问题',
    'Reflective（反映）', '请输入Reflective层问题',
    'Interpretive（诠释）', '请输入Interpretive层问题',
    'Decisional（决定）', '请输入Decisional层问题',
    '倾听复盘记录', '倾听要点', '自评(1-5)', '改进点',
    '听到的内容（事实）', '感受到的情绪（情感）', '背后的意图（意图）',
    '终局复盘', '本次催化最大的收获', '下次可以做得更好的是',
    '课程名称：行动学习催化师核心技术-提问与反思', '表单版本：v1.0'
]
write_file(work + '/xl/sharedStrings.xml', build_shared_strings(strs))
write_file(work + '/xl/styles.xml', STYLES_XML)

rows = []
rows.append(f'  <row r="1">{hdr(1,0)}</row>')
rows.append(f'  <row r="2">{hdr(2,1)} {inp(2)}</row>')
rows.append(f'  <row r="3">{hdr(3,3)}</row>')
for i, txt_idx in enumerate([4,5,6,7,8,9]):
    rows.append(f'  <row r="{4+i}">{hdr(4+i, txt_idx)}</row>')
rows.append(f'  <row r="10">{hdr(10,10)}</row>')
rows.append(f'  <row r="11">{inp(11)}</row>')
rows.append(f'  <row r="12">{hdr(12,12)}</row>')
rows.append(f'  <row r="13">{inp(13)}</row>')
rows.append(f'  <row r="14">{hdr(14,14)}</row>')
rows.append(f'  <row r="15">{hdr(15,15)} {inp(15)}</row>')
rows.append(f'  <row r="16">{hdr(16,16)} {inp(16)}</row>')
rows.append(f'  <row r="17">{hdr(17,17)} {inp(17)}</row>')
rows.append(f'  <row r="18">{hdr(18,18)}</row>')
rows.append(f'  <row r="19">{hdr(19,19)} {inp(19)}</row>')
rows.append(f'  <row r="20">{hdr(20,20)} {inp(20)}</row>')
rows.append(f'  <row r="21">{hdr(21,21)} {inp(21)}</row>')
rows.append(f'  <row r="22">{hdr(22,22)} {inp(22)}</row>')
rows.append(f'  <row r="23">{hdr(23,23)}</row>')
rows.append(f'  <row r="24">{hdr(24,24)} {hdr(24,25,'B')} {hdr(24,26,'C')}</row>')
rows.append(f'  <row r="25">{hdr(25,27)} {inp(25)} {inp(25,"C")}</row>')
rows.append(f'  <row r="26">{hdr(26,28)} {inp(26)} {inp(26,"C")}</row>')
rows.append(f'  <row r="27">{hdr(27,29)} {inp(27)} {inp(27,"C")}</row>')
rows.append(f'  <row r="28">{hdr(28,30)}</row>')
rows.append(f'  <row r="29">{hdr(29,31)} {inp(29)}</row>')
rows.append(f'  <row r="30">{hdr(30,32)} {inp(30)}</row>')
rows.append(f'  <row r="31">{hdr(31,33)}</row>')
rows.append(f'  <row r="32">{hdr(32,34)}</row>')

dv = '''  <dataValidations>
    <dataValidation type="list" sqref="B3" formula1="&quot;讨论表面化,陷入抱怨,过早收敛,沉默僵住,观点对立,其他&quot;" showInputMessage="1" prompt="选择卡点类型" promptTitle="卡点类型"/>
  </dataValidations>
'''
write_file(work + '/xl/worksheets/sheet1.xml', make_sheet('\n'.join(rows), dv))
pack(work, OUT_DIR + '1-催化师现场卡点卡.xlsx')
print("  Created: 1-催化师现场卡点卡.xlsx")

# ============================================================
# FILE 2: 强有力问题自检表.xlsx
# ============================================================
print("Building File 2: 强有力问题自检表.xlsx")
work = '/tmp/w02'
copy_template(work)

strs = [
    '强有力问题自检表', '问题文本', '请输入要检验的问题文本',
    '四维度自动评判', '维度', '评判标准', '评分(1-10)',
    '开放性', '问题是否以&quot;什么&quot;&quot;如何&quot;&quot;为什么&quot;等词开头，引导多元回答',
    '中立性', '问题是否保持中立，不预设答案或立场',
    '聚焦性', '问题是否聚焦于具体情境或核心议题',
    '行动导向', '问题是否能引导成员思考具体行动或改变',
    '综合评价', '平均分（自动计算）',
    '改进建议', '请根据评价结果撰写改进建议'
]
write_file(work + '/xl/sharedStrings.xml', build_shared_strings(strs))
write_file(work + '/xl/styles.xml', STYLES_XML)

rows = []
rows.append(f'  <row r="1">{hdr(1,0)}</row>')
rows.append(f'  <row r="2">{hdr(2,1)}</row>')
rows.append(f'  <row r="3">{inp(3)}</row>')
rows.append(f'  <row r="4">{hdr(4,3)}</row>')
rows.append(f'  <row r="5">{hdr(5,4)} {hdr(5,5,'B')} {hdr(5,6,'C')}</row>')
rows.append(f'  <row r="6">{hdr(6,7)} {hdr(6,8,'B')} {inp(6,"C")}</row>')
rows.append(f'  <row r="7">{hdr(7,9)} {hdr(7,10,'B')} {inp(7,"C")}</row>')
rows.append(f'  <row r="8">{hdr(8,11)} {hdr(8,12,'B')} {inp(8,"C")}</row>')
rows.append(f'  <row r="9">{hdr(9,13)} {hdr(9,14,'B')} {inp(9,"C")}</row>')
rows.append(f'  <row r="10">{hdr(10,15)}</row>')
rows.append(f'  <row r="11">{hdr(11,16)} <c r="B11" s="0"><f>AVERAGE(C6,C7,C8,C9)</f><v></v></c></row>')
rows.append(f'  <row r="12">{hdr(12,17)}</row>')
rows.append(f'  <row r="13">{inp(13)}</row>')

dv = '''  <dataValidations>
    <dataValidation type="list" sqref="C6" formula1="&quot;1,2,3,4,5,6,7,8,9,10&quot;" showInputMessage="1" prompt="评分1-10" promptTitle="开放性"/>
    <dataValidation type="list" sqref="C7" formula1="&quot;1,2,3,4,5,6,7,8,9,10&quot;" showInputMessage="1" prompt="评分1-10" promptTitle="中立性"/>
    <dataValidation type="list" sqref="C8" formula1="&quot;1,2,3,4,5,6,7,8,9,10&quot;" showInputMessage="1" prompt="评分1-10" promptTitle="聚焦性"/>
    <dataValidation type="list" sqref="C9" formula1="&quot;1,2,3,4,5,6,7,8,9,10&quot;" showInputMessage="1" prompt="评分1-10" promptTitle="行动导向"/>
  </dataValidations>
'''
write_file(work + '/xl/worksheets/sheet1.xml', make_sheet('\n'.join(rows), dv))
pack(work, OUT_DIR + '2-强有力问题自检表.xlsx')
print("  Created: 2-强有力问题自检表.xlsx")

# ============================================================
# FILE 3: ORID层次判断卡.xlsx
# ============================================================
print("Building File 3: ORID层次判断卡.xlsx")
work = '/tmp/w03'
copy_template(work)

strs = [
    'ORID层次判断卡', '语句输入', '请输入要判断的语句文本',
    '判断结果', '请选择判断结果',
    'O-Objective（客观）', '基于事实、数据、具体事件的描述',
    'R-Reflective（反映）', '表达情绪感受、情感反应、直觉反应',
    'I-Interpretive（诠释）', '分析意义、价值、影响、启示',
    'D-Decisional（决定）', '导向行动决策、承诺、计划',
    '对应提问句式推荐', 'O层：&quot;发生了什么？&quot;&quot;具体事实是什么？&quot;&quot;看到了什么？&quot;',
    'R层：&quot;你有什么感受？&quot;&quot;情绪反应是什么？&quot;&quot;直觉告诉你什么？&quot;',
    'I层：&quot;这意味着什么？&quot;&quot;有什么启示？&quot;&quot;为什么重要？&quot;',
    'D层：&quot;你会怎么做？&quot;&quot;下一步是什么？&quot;&quot;承诺什么行动？&quot;'
]
write_file(work + '/xl/sharedStrings.xml', build_shared_strings(strs))
write_file(work + '/xl/styles.xml', STYLES_XML)

rows = []
rows.append(f'  <row r="1">{hdr(1,0)}</row>')
rows.append(f'  <row r="2">{hdr(2,1)}</row>')
rows.append(f'  <row r="3">{inp(3)}</row>')
rows.append(f'  <row r="4">{hdr(4,3)} {inp(4,"B")}</row>')
rows.append(f'  <row r="5">{hdr(5,5)} {hdr(5,6,"B")}</row>')
rows.append(f'  <row r="6">{hdr(6,7)} {hdr(6,8,"B")}</row>')
rows.append(f'  <row r="7">{hdr(7,9)} {hdr(7,10,"B")}</row>')
rows.append(f'  <row r="8">{hdr(8,11)} {hdr(8,12,"B")}</row>')
rows.append(f'  <row r="9">{hdr(9,13)}</row>')
rows.append(f'  <row r="10">{hdr(10,14)}</row>')
rows.append(f'  <row r="11">{hdr(11,15)}</row>')
rows.append(f'  <row r="12">{hdr(12,16)}</row>')
rows.append(f'  <row r="13">{hdr(13,17)}</row>')

dv = '''  <dataValidations>
    <dataValidation type="list" sqref="B4" formula1="&quot;O-Objectve（客观）,R-Reflective（反映）,I-Interpretive（诠释）,D-Decisional（决定）&quot;" showInputMessage="1" prompt="选择ORID层次" promptTitle="层次判断"/>
  </dataValidations>
'''
write_file(work + '/xl/worksheets/sheet1.xml', make_sheet('\n'.join(rows), dv))
pack(work, OUT_DIR + '3-ORID层次判断卡.xlsx')
print("  Created: 3-ORID层次判断卡.xlsx")

# ============================================================
# FILE 4: 三层倾听觉察表.xlsx
# ============================================================
print("Building File 4: 三层倾听觉察表.xlsx")
work = '/tmp/w04'
copy_template(work)

strs = [
    '三层倾听觉察表', '层次', '层次说明', '自评得分(1-5)', '改进点',
    '第一层：内容倾听', '关注说话者的字面意思和具体内容',
    '第二层：情感倾听', '感知说话者的情绪状态和感受',
    '第三层：意图倾听', '理解话语背后的真正需求和意图',
    '每日/每次催化后复盘', '复盘日期', '本次倾听表现', '主要收获', '下次改进',
    '改进跟踪记录', '跟踪日期', '改进目标', '执行情况', '效果评估',
    '使用频率统计', '本周使用次数', '平均得分', '提升趋势'
]
write_file(work + '/xl/sharedStrings.xml', build_shared_strings(strs))
write_file(work + '/xl/styles.xml', STYLES_XML)

rows = []
rows.append(f'  <row r="1">{hdr(1,0)}</row>')
rows.append(f'  <row r="2">{hdr(2,1)} {hdr(2,2,"B")} {hdr(2,3,"C")} {hdr(2,4,"D")}</row>')
rows.append(f'  <row r="3">{hdr(3,5)} {hdr(3,6,"B")} {inp(3,"C")} {inp(3,"D")}</row>')
rows.append(f'  <row r="4">{hdr(4,7)} {hdr(4,8,"B")} {inp(4,"C")} {inp(4,"D")}</row>')
rows.append(f'  <row r="5">{hdr(5,9)} {hdr(5,10,"B")} {inp(5,"C")} {inp(5,"D")}</row>')
rows.append(f'  <row r="6">{hdr(6,11)}</row>')
rows.append(f'  <row r="7">{hdr(7,12)} {hdr(7,13,"B")} {hdr(7,14,"C")} {hdr(7,15,"D")}</row>')
rows.append(f'  <row r="8">{inp(8)} {inp(8,"B")} {inp(8,"C")} {inp(8,"D")}</row>')
rows.append(f'  <row r="9">{inp(9)} {inp(9,"B")} {inp(9,"C")} {inp(9,"D")}</row>')
rows.append(f'  <row r="10">{hdr(10,16)}</row>')
rows.append(f'  <row r="11">{hdr(11,17)} {hdr(11,18,"B")} {hdr(11,19,"C")} {hdr(11,20,"D")}</row>')
rows.append(f'  <row r="12">{inp(12)} {inp(12,"B")} {inp(12,"C")} {inp(12,"D")}</row>')
rows.append(f'  <row r="13">{hdr(13,21)}</row>')
rows.append(f'  <row r="14">{hdr(14,22)} {hdr(14,23,"B")} {hdr(14,24,"C")}</row>')
rows.append(f'  <row r="15">{inp(15)} {inp(15,"B")} {inp(15,"C")}</row>')

dv = '''  <dataValidations>
    <dataValidation type="list" sqref="C3" formula1="&quot;1,2,3,4,5&quot;" showInputMessage="1" prompt="评分1-5" promptTitle="内容倾听"/>
    <dataValidation type="list" sqref="C4" formula1="&quot;1,2,3,4,5&quot;" showInputMessage="1" prompt="评分1-5" promptTitle="情感倾听"/>
    <dataValidation type="list" sqref="C5" formula1="&quot;1,2,3,4,5&quot;" showInputMessage="1" prompt="评分1-5" promptTitle="意图倾听"/>
  </dataValidations>
'''
write_file(work + '/xl/worksheets/sheet1.xml', make_sheet('\n'.join(rows), dv))
pack(work, OUT_DIR + '4-三层倾听觉察表.xlsx')
print("  Created: 4-三层倾听觉察表.xlsx")

# ============================================================
# FILE 5: 现场自我监控清单.xlsx
# ============================================================
print("Building File 5: 现场自我监控清单.xlsx")
work = '/tmp/w05'
copy_template(work)

strs = [
    '现场自我监控清单', '监控点', '监控说明', '使用状态', '问题记录', '效果评估(1-5)',
    '1. 提问时机', '在适当的时机提出问题，不过早也不过晚',
    '2. 提问数量', '控制问题数量，避免连续追问',
    '3. 提问开放性', '使用开放式问题而非封闭式问题',
    '4. 中立性保持', '问题保持中立，不预设答案',
    '5. 追问深度', '通过追问深入挖掘，不停留在表面',
    '6. 倾听质量', '在提问前充分倾听成员发言',
    '7. 复盘及时', '在关键节点进行及时复盘',
    '使用频率打卡', '日期', '使用监控点数量', '总体效果备注',
    '效果评估说明：1=很差 2=较差 3=一般 4=较好 5=很好'
]
write_file(work + '/xl/sharedStrings.xml', build_shared_strings(strs))
write_file(work + '/xl/styles.xml', STYLES_XML)

rows = []
rows.append(f'  <row r="1">{hdr(1,0)}</row>')
rows.append(f'  <row r="2">{hdr(2,1)} {hdr(2,2,"B")} {hdr(2,3,"C")} {hdr(2,4,"D")} {hdr(2,5,"E")}</row>')
for i in range(7):
    idx = 3 + i * 2
    rows.append(f'  <row r="{3+i}">{hdr(3+i, idx)} {hdr(3+i, idx+1,"B")} {inp(3+i,"C")} {inp(3+i,"D")} {inp(3+i,"E")}</row>')
rows.append(f'  <row r="10">{hdr(10,17)}</row>')
rows.append(f'  <row r="11">{hdr(11,18)} {hdr(11,19,"B")} {hdr(11,20,"C")}</row>')
rows.append(f'  <row r="12">{inp(12)} {inp(12,"B")} {inp(12,"C")}</row>')
rows.append(f'  <row r="13">{inp(13)} {inp(13,"B")} {inp(13,"C")}</row>')
rows.append(f'  <row r="14">{hdr(14,21)}</row>')

dv = '''  <dataValidations>
    <dataValidation type="list" sqref="C3:C9" formula1="&quot;未使用,已使用-有效,已使用-无效&quot;" showInputMessage="1" prompt="选择使用状态" promptTitle="使用状态"/>
    <dataValidation type="list" sqref="E3:E9" formula1="&quot;1,2,3,4,5&quot;" showInputMessage="1" prompt="评分1-5" promptTitle="效果评估"/>
  </dataValidations>
'''
write_file(work + '/xl/worksheets/sheet1.xml', make_sheet('\n'.join(rows), dv))
pack(work, OUT_DIR + '5-现场自我监控清单.xlsx')
print("  Created: 5-现场自我监控清单.xlsx")

# ============================================================
# FILE 6: 翻车场景应对卡.xlsx
# ============================================================
print("Building File 6: 翻车场景应对卡.xlsx")
work = '/tmp/w06'
copy_template(work)

strs = [
    '翻车场景应对卡', '翻车类型', '场景描述', '应对话术模板', '练习记录-日期', '练习记录-效果',
    '讨论表面化', '讨论停留在表面，无法深入', '追问：&quot;能否举个具体的例子？&quot;&quot;背后是什么原因？&quot;',
    '一言堂', '某位成员主导讨论，其他人沉默', '转问：&quot;其他人怎么看？&quot;&quot;请不同的声音&quot;',
    '讨论跑题', '讨论偏离主题或核心问题', '拉回：&quot;这和我们刚才讨论的XX有什么关系？&quot;',
    '观点冲突', '成员之间产生对立或冲突', '缓和：&quot;两种观点都有道理，能否各自分享依据？&quot;',
    '过早收敛', '讨论很快达成一致，但未充分探讨', '挑战：&quot;还有没有其他可能性？&quot;&quot;反面意见是什么？&quot;',
    '使用说明：遇到翻车场景时，参照话术模板进行应对，并记录练习情况'
]
write_file(work + '/xl/sharedStrings.xml', build_shared_strings(strs))
write_file(work + '/xl/styles.xml', STYLES_XML)

rows = []
rows.append(f'  <row r="1">{hdr(1,0)}</row>')
rows.append(f'  <row r="2">{hdr(2,1)} {hdr(2,2,"B")} {hdr(2,3,"C")} {hdr(2,4,"D")} {hdr(2,5,"E")}</row>')
for i in range(5):
    idx = 3 + i * 2
    rows.append(f'  <row r="{3+i}">{hdr(3+i, idx)} {hdr(3+i, idx+1,"B")} {hdr(3+i, idx+2,"C")} {inp(3+i,"D")} {inp(3+i,"E")}</row>')
rows.append(f'  <row r="8">{hdr(8,13)}</row>')

write_file(work + '/xl/worksheets/sheet1.xml', make_sheet('\n'.join(rows)))
pack(work, OUT_DIR + '6-翻车场景应对卡.xlsx')
print("  Created: 6-翻车场景应对卡.xlsx")

# ============================================================
# FILE 7: 课后实践计划表.xlsx
# ============================================================
print("Building File 7: 课后实践计划表.xlsx")
work = '/tmp/w07'
copy_template(work)

strs = [
    '课后实践计划表', '实践目标', '具体目标描述', '计划时间', '完成时间', '状态', '效果评估(1-5)',
    '目标1', '掌握强有力问题的设计方法', '第1周',
    '目标2', '熟练使用ORID提问框架', '第2周',
    '目标3', '提升三层次倾听能力', '第3周',
    '目标4', '建立现场自我监控习惯', '第4周',
    '实践记录', '日期', '实践场景', '使用工具', '效果反思',
    '综合评估', '总体完成度', '平均效果得分', '下一步改进计划'
]
write_file(work + '/xl/sharedStrings.xml', build_shared_strings(strs))
write_file(work + '/xl/styles.xml', STYLES_XML)

rows = []
rows.append(f'  <row r="1">{hdr(1,0)}</row>')
rows.append(f'  <row r="2">{hdr(2,1)} {hdr(2,2,"B")} {hdr(2,3,"C")} {hdr(2,4,"D")} {hdr(2,5,"E")} {hdr(2,6,"F")} {hdr(2,7,"G")}</row>')
for i in range(4):
    idx = 3 + i * 2
    rows.append(f'  <row r="{3+i}">{hdr(3+i, idx)} {hdr(3+i, idx+1,"B")} {hdr(3+i, 10+i,"C")} {inp(3+i,"D")} {inp(3+i,"E")} {inp(3+i,"F")} {inp(3+i,"G")}</row>')
rows.append(f'  <row r="7">{hdr(7,11)}</row>')
rows.append(f'  <row r="8">{hdr(8,12)} {hdr(8,13,"B")} {hdr(8,14,"C")} {hdr(8,15,"D")}</row>')
rows.append(f'  <row r="9">{inp(9)} {inp(9,"B")} {inp(9,"C")} {inp(9,"D")}</row>')
rows.append(f'  <row r="10">{inp(10)} {inp(10,"B")} {inp(10,"C")} {inp(10,"D")}</row>')
rows.append(f'  <row r="11">{hdr(11,16)}</row>')
rows.append(f'  <row r="12">{hdr(12,17)} {inp(12,"B")} {inp(12,"C")} {inp(12,"D")}</row>')

dv = '''  <dataValidations>
    <dataValidation type="list" sqref="F3:F6" formula1="&quot;未开始,进行中,已完成&quot;" showInputMessage="1" prompt="选择状态" promptTitle="状态"/>
    <dataValidation type="list" sqref="G3:G6" formula1="&quot;1,2,3,4,5&quot;" showInputMessage="1" prompt="评分1-5" promptTitle="效果评估"/>
  </dataValidations>
'''
write_file(work + '/xl/worksheets/sheet1.xml', make_sheet('\n'.join(rows), dv))
pack(work, OUT_DIR + '7-课后实践计划表.xlsx')
print("  Created: 7-课后实践计划表.xlsx")

print('\n=== All 7 files created successfully! ===')
