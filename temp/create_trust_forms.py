#!/usr/bin/env python3
"""
生成"信任建立与责任担当"课程的全流程工具表单 (10个xlsx文件)
红灰配色方案
"""
import os
import zipfile
import xml.etree.ElementTree as ET

OUTPUT_DIR = r"D:\新课开发\领导力\06-信任建立与责任担当：AI时代不可替代的关系资产\全流程工具表单"
SKILL_DIR = r"C:\Users\Administrator\.claude\skills\Excel表格处理"

# 红灰配色常量
HEADER_FILL = "00C05050"   # 深红(酒红)背景
HEADER_FONT = "00FFFFFF"   # 白色字体
LIGHT_GRAY = "00F2F2F2"    # 浅灰背景
MED_GRAY = "00E0E0E0"      # 中灰边框/分区
DARK_TEXT = "00404040"     # 深灰文字
INPUT_BLUE = "000000FF"    # 蓝色输入
BLACK = "00000000"         # 黑色文字
RED = "00FF0000"           # 红色强调

def ensure_dir(path):
    os.makedirs(path, exist_ok=True)

def make_content_types(sheets):
    ct = ['<?xml version="1.0" encoding="UTF-8" standalone="yes"?>',
          '<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">',
          '<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>',
          '<Default Extension="xml" ContentType="application/xml"/>',
          '<Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>']
    for s in sheets:
        ct.append(f'<Override PartName="/xl/worksheets/{s}.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>')
    ct.append('<Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>')
    ct.append('</Types>')
    return '\n'.join(ct)

def make_rels(sheets):
    rels = ['<?xml version="1.0" encoding="UTF-8" standalone="yes"?>',
            '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">',
            '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>',
            '<Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>']
    for i, s in enumerate(sheets[1:], start=4):
        rid = f"rId{i}"
        rels.append(f'<Relationship Id="{rid}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/{s}.xml"/>')
    rels.append('</Relationships>')
    return '\n'.join(rels)

def make_workbook(sheets):
    body = ['<?xml version="1.0" encoding="UTF-8" standalone="yes"?>',
            '<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">',
            '<bookViews><workbookView xWindow="0" yWindow="0" windowWidth="20140" windowHeight="10960"/></bookViews>',
            '<sheets>']
    for i, s in enumerate(sheets, start=1):
        rid = f"rId{i}"
        name = s.replace('.xml','')
        body.append(f'<sheet name="{name}" sheetId="{i}" r:id="{rid}"/>')
    body.append('</sheets><calcPr calcId="191029"/></workbook>')
    return '\n'.join(body)

def make_styles():
    """生成红灰配色的styles.xml"""
    return '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
<numFmts count="0"/>
<fonts count="7">
  <font><name val="Calibri"/><sz val="11"/><color rgb="00404040"/></font>
  <font><b val="1"/><name val="Calibri"/><sz val="14"/><color rgb="00FFFFFF"/></font>
  <font><b val="1"/><name val="Calibri"/><sz val="11"/><color rgb="00404040"/></font>
  <font><name val="Calibri"/><sz val="10"/><color rgb="00666666"/></font>
  <font><b val="1"/><name val="Calibri"/><sz val="11"/><color rgb="00FFFFFF"/></font>
  <font><name val="Calibri"/><sz val="11"/><color rgb="000000FF"/></font>
  <font><name val="Calibri"/><sz val="11"/><color rgb="00FF0000"/></font>
</fonts>
<fills count="5">
  <fill><patternFill patternType="none"/></fill>
  <fill><patternFill patternType="gray125"/></fill>
  <fill><patternFill patternType="solid"><fgColor rgb="00C05050"/><bgColor rgb="00C05050"/></patternFill></fill>
  <fill><patternFill patternType="solid"><fgColor rgb="00F2F2F2"/><bgColor rgb="00F2F2F2"/></patternFill></fill>
  <fill><patternFill patternType="solid"><fgColor rgb="00E0E0E0"/><bgColor rgb="00E0E0E0"/></patternFill></fill>
</fills>
<borders count="2">
  <border><left/><right/><top/><bottom/><diagonal/></border>
  <border><left style="thin"/><right style="thin"/><top style="thin"/><bottom style="thin"/></border>
</borders>
<cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>
<cellXfs count="16">
  <xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/>
  <xf numFmtId="0" fontId="1" fillId="2" borderId="1" applyAlignment="1" xfId="0"><alignment horizontal="center" vertical="center" wrapText="1"/></xf>
  <xf numFmtId="0" fontId="2" fillId="3" borderId="1" applyAlignment="1" xfId="0"><alignment horizontal="left" vertical="center" wrapText="1"/></xf>
  <xf numFmtId="0" fontId="2" fillId="0" borderId="1" applyAlignment="1" xfId="0"><alignment horizontal="left" vertical="center" wrapText="1"/></xf>
  <xf numFmtId="0" fontId="3" fillId="0" borderId="0" applyAlignment="1" xfId="0"><alignment horizontal="left" vertical="center" wrapText="1"/></xf>
  <xf numFmtId="0" fontId="4" fillId="3" borderId="1" applyAlignment="1" xfId="0"><alignment horizontal="center" vertical="center" wrapText="1"/></xf>
  <xf numFmtId="0" fontId="0" fillId="4" borderId="1" applyAlignment="1" xfId="0"><alignment horizontal="center" vertical="center" wrapText="1"/></xf>
  <xf numFmtId="0" fontId="0" fillId="0" borderId="1" applyAlignment="1" xfId="0"><alignment horizontal="center" vertical="center" wrapText="1"/></xf>
  <xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyAlignment="1" xfId="0"><alignment horizontal="left" vertical="center"/></xf>
  <xf numFmtId="0" fontId="0" fillId="3" borderId="0" applyAlignment="1" xfId="0"><alignment horizontal="left" vertical="center" wrapText="1"/></xf>
  <xf numFmtId="0" fontId="5" fillId="0" borderId="0" applyAlignment="1" xfId="0"><alignment horizontal="left" vertical="center" wrapText="1"/></xf>
  <xf numFmtId="0" fontId="0" fillId="0" borderId="1" applyAlignment="1" xfId="0"><alignment horizontal="center" vertical="center" wrapText="1"/></xf>
  <xf numFmtId="0" fontId="6" fillId="0" borderId="0" applyAlignment="1" xfId="0"><alignment horizontal="center" vertical="center" wrapText="1"/></xf>
  <xf numFmtId="0" fontId="2" fillId="4" borderId="1" applyAlignment="1" xfId="0"><alignment horizontal="left" vertical="center" wrapText="1"/></xf>
  <xf numFmtId="0" fontId="0" fillId="0" borderId="1" applyAlignment="1" xfId="0"><alignment horizontal="left" vertical="center" wrapText="1"/></xf>
  <xf numFmtId="0" fontId="3" fillId="0" borderId="1" applyAlignment="1" xfId="0"><alignment horizontal="left" vertical="center" wrapText="1"/></xf>
</cellXfs>
</styleSheet>'''

def is_cell(text):
    """将中文字符转换为Unicode转义"""
    return text.encode('utf-8').decode('utf-8')

def inline_cell(col, row, style, text):
    """生成inlineStr单元格XML"""
    safe_text = text.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;').replace('"', '&quot;')
    return f'<c r="{col}{row}" s="{style}" t="inlineStr"><is><t>{safe_text}</t></is></c>'

def empty_cell(col, row, style):
    return f'<c r="{col}{row}" s="{style}"/>'

def make_sheet(rows_data, cols_widths=None):
    """生成工作表XML"""
    rows_xml = []
    for row_num, row_cells in rows_data:
        rows_xml.append(f'<row r="{row_num}">')
        for cell_xml in row_cells:
            rows_xml.append('  ' + cell_xml)
        rows_xml.append('</row>')

    cols_xml = ''
    if cols_widths:
        cols_xml = '<cols>'
        for idx, (min_col, max_col, width) in enumerate(cols_widths):
            cols_xml += f'<col min="{min_col}" max="{max_col}" width="{width}" customWidth="1"/>'
        cols_xml += '</cols>'

    return f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
<sheetViews><sheetView workbookViewId="0"><selection activeCell="A1" sqref="A1"/></sheetView></sheetViews>
<sheetFormatPr baseColWidth="8" defaultRowHeight="15"/>
{cols_xml}
<sheetData>
{chr(10).join(rows_xml)}
</sheetData>
<pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

def pack_xlsx(work_dir, output_path, sheets_data, cols_widths=None):
    """打包xlsx文件"""
    ensure_dir(work_dir)

    sheets = [f"sheet{i+1}.xml" for i in range(len(sheets_data))]

    # 写入Content_Types.xml
    with open(os.path.join(work_dir, '[Content_Types].xml'), 'w', encoding='utf-8') as f:
        f.write(make_content_types(sheets))

    # 写入_rels/.rels
    os.makedirs(os.path.join(work_dir, '_rels'), exist_ok=True)
    with open(os.path.join(work_dir, '_rels', '.rels'), 'w', encoding='utf-8') as f:
        f.write('<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>')

    # 写入xl/workbook.xml
    os.makedirs(os.path.join(work_dir, 'xl'), exist_ok=True)
    with open(os.path.join(work_dir, 'xl', 'workbook.xml'), 'w', encoding='utf-8') as f:
        f.write(make_workbook(sheets))

    # 写入xl/_rels/workbook.xml.rels
    os.makedirs(os.path.join(work_dir, 'xl', '_rels'), exist_ok=True)
    with open(os.path.join(work_dir, 'xl', '_rels', 'workbook.xml.rels'), 'w', encoding='utf-8') as f:
        f.write(make_rels(sheets))

    # 写入xl/styles.xml
    with open(os.path.join(work_dir, 'xl', 'styles.xml'), 'w', encoding='utf-8') as f:
        f.write(make_styles())

    # 写入各工作表
    os.makedirs(os.path.join(work_dir, 'xl', 'worksheets'), exist_ok=True)
    for i, (sheet_name, rows_data) in enumerate(sheets_data):
        sheet_path = os.path.join(work_dir, 'xl', 'worksheets', f'sheet{i+1}.xml')
        with open(sheet_path, 'w', encoding='utf-8') as f:
            f.write(make_sheet(rows_data, cols_widths))

    # 打包
    with zipfile.ZipFile(output_path, 'w', zipfile.ZIP_DEFLATED) as zf:
        for dirpath, dirnames, filenames in os.walk(work_dir):
            for filename in filenames:
                filepath = os.path.join(dirpath, filename)
                arcname = os.path.relpath(filepath, work_dir)
                zf.write(filepath, arcname)

    print(f"  Created: {output_path}")

# =========================================================================
# F1: 信任现状自测表
# =========================================================================
def create_f1():
    work_dir = r"D:\CC\temp\f1_work"
    output_path = os.path.join(OUTPUT_DIR, "F1_信任现状自测表.xlsx")

    # 列宽设置: A=题目, B=从不, C=偶尔, D=有时, E=经常, F=总是
    cols = [(1,1,5), (2,2,35), (3,3,10), (4,4,10), (5,5,10), (6,6,10), (7,7,12)]

    rows = []
    # 标题行
    rows.append((1, [
        inline_cell('A', 1, 1, '信任现状自测表'),
        inline_cell('B', 1, 1, ''),
        inline_cell('C', 1, 1, ''),
        inline_cell('D', 1, 1, ''),
        inline_cell('E', 1, 1, ''),
        inline_cell('F', 1, 1, ''),
        inline_cell('G', 1, 1, '得分'),
    ]))
    # 表头
    rows.append((2, [
        inline_cell('A', 2, 2, '题号'),
        inline_cell('B', 2, 2, '题目'),
        inline_cell('C', 2, 2, '从不(1)'),
        inline_cell('D', 2, 2, '偶尔(2)'),
        inline_cell('E', 2, 2, '有时(3)'),
        inline_cell('F', 2, 2, '经常(4)'),
        inline_cell('G', 2, 2, '总是(5)'),
    ]))

    questions = [
        "1. 我在团队中主动分享信息和资源",
        "2. 我遵守对同事和客户的承诺",
        "3. 我承认自己的错误并及时修正",
        "4. 我对团队成员的工作能力有信心",
        "5. 我在困难时期支持团队成员",
        "6. 我坦诚表达不同意见",
        "7. 我信守保密责任",
        "8. 我按时完成任务并保证质量",
        "9. 我对他人表示真诚的赞赏和感谢",
        "10. 我主动帮助团队成员解决问题",
    ]

    for i, q in enumerate(questions, start=3):
        row_num = i
        rows.append((row_num, [
            inline_cell('A', row_num, 5, str(i-2)),
            inline_cell('B', row_num, 4, q),
            empty_cell('C', row_num, 7),
            empty_cell('D', row_num, 7),
            empty_cell('E', row_num, 7),
            empty_cell('F', row_num, 7),
            empty_cell('G', row_num, 7),
        ]))

    # 得分说明
    rows.append((13, [
        inline_cell('A', 13, 2, '得分解读:'),
        inline_cell('B', 13, 4, ''),
    ]))
    rows.append((14, [
        inline_cell('A', 14, 4, '40-50分: 高度信任'),
        inline_cell('B', 14, 4, '人际关系稳固，值得信赖'),
    ]))
    rows.append((15, [
        inline_cell('A', 15, 4, '30-39分: 良好信任'),
        inline_cell('B', 15, 4, '信任基础良好，有提升空间'),
    ]))
    rows.append((16, [
        inline_cell('A', 16, 4, '20-29分: 信任危机'),
        inline_cell('B', 16, 4, '存在信任问题，需要修复'),
    ]))
    rows.append((17, [
        inline_cell('A', 17, 4, '10-19分: 信任崩塌'),
        inline_cell('B', 17, 4, '严重信任问题，需要紧急重建'),
    ]))
    rows.append((18, [
        inline_cell('A', 18, 2, '改进建议:'),
        inline_cell('B', 18, 9, ''),
    ]))

    pack_xlsx(work_dir, output_path, [('信任自测', rows)], cols)
    return output_path

# =========================================================================
# F2: AI信任风险清单
# =========================================================================
def create_f2():
    work_dir = r"D:\CC\temp\f2_work"
    output_path = os.path.join(OUTPUT_DIR, "F2_AI信任风险清单.xlsx")

    cols = [(1,1,8), (2,2,40), (3,3,12), (4,4,12), (5,5,25)]

    rows = []
    rows.append((1, [
        inline_cell('A', 1, 1, 'AI信任风险清单'),
        inline_cell('B', 1, 1, ''),
        inline_cell('C', 1, 1, ''),
        inline_cell('D', 1, 1, ''),
        inline_cell('E', 1, 1, ''),
    ]))
    rows.append((2, [
        inline_cell('A', 2, 2, '序号'),
        inline_cell('B', 2, 2, '风险点'),
        inline_cell('C', 2, 2, '风险等级'),
        inline_cell('D', 2, 2, '勾选'),
        inline_cell('E', 2, 2, '行动计划'),
    ]))

    risks = [
        "AI生成信息未经验证就传播",
        "过度依赖AI建议而忽视人工判断",
        "AI决策缺乏透明度和可解释性",
        "敏感数据被用于AI训练",
        "AI系统存在偏见和歧视",
        "人类对AI能力产生盲目信任",
        "AI系统故障导致决策失误",
        "AI生成内容涉及版权和伦理问题",
    ]

    for i, risk in enumerate(risks, start=3):
        row_num = i
        rows.append((row_num, [
            inline_cell('A', row_num, 5, str(i-2)),
            inline_cell('B', row_num, 4, risk),
            empty_cell('C', row_num, 7),
            empty_cell('D', row_num, 7),
            empty_cell('E', row_num, 9),
        ]))

    rows.append((11, [
        inline_cell('A', 11, 2, '风险等级说明:'),
        inline_cell('B', 11, 4, '高/中/低'),
    ]))

    pack_xlsx(work_dir, output_path, [('AI风险清单', rows)], cols)
    return output_path

# =========================================================================
# F3: 信任破坏者识别卡
# =========================================================================
def create_f3():
    work_dir = r"D:\CC\temp\f3_work"
    output_path = os.path.join(OUTPUT_DIR, "F3_信任破坏者识别卡.xlsx")

    cols = [(1,1,15), (2,2,25), (3,3,25), (4,4,25)]

    rows = []
    rows.append((1, [
        inline_cell('A', 1, 1, '信任破坏者识别卡'),
        inline_cell('B', 1, 1, ''),
        inline_cell('C', 1, 1, ''),
        inline_cell('D', 1, 1, ''),
    ]))
    rows.append((2, [
        inline_cell('A', 2, 2, '破坏者类型'),
        inline_cell('B', 2, 2, '识别标准'),
        inline_cell('C', 2, 2, '典型行为'),
        inline_cell('D', 2, 2, '修复策略'),
    ]))

    destroyers = [
        ("说谎者", "经常编造或夸大事实", "虚假承诺、隐瞒关键信息", "建立事实核查机制"),
        ("推卸者", "遇到问题就找借口", "责备他人、拒绝承担责任", "培养担当意识"),
        ("操控者", "利用他人谋取私利", "暗中操纵决策、利用信任", "建立透明决策流程"),
        ("冷漠者", "对他人的需求漠不关心", "忽略他人感受、拒绝帮助", "培养共情能力"),
    ]

    for i, (dtype,识别,典型,修复) in enumerate(destroyers, start=3):
        row_num = i
        rows.append((row_num, [
            inline_cell('A', row_num, 5, dtype),
            inline_cell('B', row_num, 4, 识别),
            inline_cell('C', row_num, 4, 典型),
            inline_cell('D', row_num, 4, 修复),
        ]))

    pack_xlsx(work_dir, output_path, [('信任破坏者识别', rows)], cols)
    return output_path

# =========================================================================
# F4: 个人信任建立90天计划
# =========================================================================
def create_f4():
    work_dir = r"D:\CC\temp\f4_work"
    output_path = os.path.join(OUTPUT_DIR, "F4_个人信任建立90天计划.xlsx")

    cols = [(1,1,8), (2,2,18), (3,3,15), (4,4,15), (5,5,15), (6,6,15), (7,7,15), (8,8,10), (9,9,10)]

    rows = []
    rows.append((1, [
        inline_cell('A', 1, 1, '个人信任建立90天计划'),
        inline_cell('B', 1, 1, ''),
        inline_cell('C', 1, 1, ''),
        inline_cell('D', 1, 1, ''),
        inline_cell('E', 1, 1, ''),
        inline_cell('F', 1, 1, ''),
        inline_cell('G', 1, 1, ''),
        inline_cell('H', 1, 1, ''),
        inline_cell('I', 1, 1, ''),
    ]))
    rows.append((2, [
        inline_cell('A', 2, 2, '阶段'),
        inline_cell('B', 2, 2, '周次'),
        inline_cell('C', 2, 2, '目标'),
        inline_cell('D', 2, 2, '行动1'),
        inline_cell('E', 2, 2, '行动2'),
        inline_cell('F', 2, 2, '行动3'),
        inline_cell('G', 2, 2, '检验点'),
        inline_cell('H', 2, 2, '完成'),
        inline_cell('I', 2, 2, '备注'),
    ]))

    # 第一阶段：建立基础 (第1-4周)
    phase1 = [
        ("第一阶段", "第1周", "了解信任的重要性", "阅读信任相关资料", "列出自己的信任行为", "制定个人承诺", "自我评估", ""),
        ("第一阶段", "第2周", "践行透明沟通", "主动分享工作进展", "诚实表达想法", "倾听他人反馈", "同事反馈", ""),
        ("第一阶段", "第3周", "兑现承诺", "对小事说到做到", "记录承诺清单", "及时跟进", "承诺完成率", ""),
        ("第一阶段", "第4周", "承认错误并修正", "勇于认错", "分析错误原因", "制定改进措施", "错误复发率", ""),
    ]

    # 第二阶段：深化关系 (第5-8周)
    phase2 = [
        ("第二阶段", "第5周", "主动支持他人", "主动询问同事需求", "提供实际帮助", "记录支持案例", "互助次数", ""),
        ("第二阶段", "第6周", "给予建设性反馈", "学习反馈技巧", "真诚表达意见", "关注对方感受", "反馈满意度", ""),
        ("第二阶段", "第7周", "保持一致性", "言行一致", "情绪稳定", "公平对待他人", "他人评价", ""),
        ("第二阶段", "第8周", "建立信任机制", "制定信任承诺", "约定检验方式", "定期回顾调整", "机制有效性", ""),
    ]

    # 第三阶段：巩固扩展 (第9-12周)
    phase3 = [
        ("第三阶段", "第9周", "扩展信任圈", "与新同事建立联系", "参加团队活动", "主动介绍自己", "新联系人数量", ""),
        ("第三阶段", "第10周", "分享经验", "总结信任建立方法", "分享给团队", "帮助新人", "分享反馈", ""),
        ("第三阶段", "第11周", "应对信任挑战", "识别信任危机信号", "及时沟通澄清", "修复受损关系", "危机处理效果", ""),
        ("第三阶段", "第12周", "总结与展望", "回顾90天收获", "制定下一阶段目标", "建立持续改进计划", "目标达成率", ""),
    ]

    row_num = 3
    for phase in [phase1, phase2, phase3]:
        for week_data in phase:
            rows.append((row_num, [
                inline_cell('A', row_num, 5, week_data[0]),
                inline_cell('B', row_num, 6, week_data[1]),
                inline_cell('C', row_num, 4, week_data[2]),
                inline_cell('D', row_num, 4, week_data[3]),
                inline_cell('E', row_num, 4, week_data[4]),
                inline_cell('F', row_num, 4, week_data[5]),
                inline_cell('G', row_num, 4, week_data[6]),
                empty_cell('H', row_num, 7),
                empty_cell('I', row_num, 4),
            ]))
            row_num += 1

    pack_xlsx(work_dir, output_path, [('90天计划', rows)], cols)
    return output_path

# =========================================================================
# F5: 责任地图
# =========================================================================
def create_f5():
    work_dir = r"D:\CC\temp\f5_work"
    output_path = os.path.join(OUTPUT_DIR, "F5_责任地图.xlsx")

    cols = [(1,1,15), (2,2,25), (3,3,20), (4,4,20), (5,5,15)]

    rows = []
    rows.append((1, [
        inline_cell('A', 1, 1, '责任地图'),
        inline_cell('B', 1, 1, ''),
        inline_cell('C', 1, 1, ''),
        inline_cell('D', 1, 1, ''),
        inline_cell('E', 1, 1, ''),
    ]))
    rows.append((2, [
        inline_cell('A', 2, 2, '决策类型'),
        inline_cell('B', 2, 2, '场景描述'),
        inline_cell('C', 2, 2, 'AI建议'),
        inline_cell('D', 2, 2, '我的判断'),
        inline_cell('E', 2, 2, '责任归属感(1-5)'),
    ]))

    decisions = [
        ("战略决策", "重大方向选择", "", "", ""),
        ("人员决策", "团队组建、晋升、调整", "", "", ""),
        ("财务决策", "预算分配、投资决策", "", "", ""),
        ("运营决策", "日常运营流程优化", "", "", ""),
        ("危机决策", "突发问题应急处理", "", "", ""),
        ("协作决策", "跨部门资源协调", "", "", ""),
        ("创新决策", "新技术/方法尝试", "", "", ""),
        ("合规决策", "法规遵循与风险控制", "", "", ""),
    ]

    for i, dec in enumerate(decisions, start=3):
        row_num = i
        rows.append((row_num, [
            inline_cell('A', row_num, 5, dec[0]),
            inline_cell('B', row_num, 4, dec[1]),
            empty_cell('C', row_num, 9),
            empty_cell('D', row_num, 9),
            empty_cell('E', row_num, 7),
        ]))

    rows.append((11, [
        inline_cell('A', 11, 2, '责任归属感评估说明:'),
        inline_cell('B', 11, 4, '1=完全依赖AI  2=主要听AI  3=共同决策  4=主要自己判断  5=完全自己承担'),
    ]))

    pack_xlsx(work_dir, output_path, [('责任地图', rows)], cols)
    return output_path

# =========================================================================
# F6: 三问复盘法模板
# =========================================================================
def create_f6():
    work_dir = r"D:\CC\temp\f6_work"
    output_path = os.path.join(OUTPUT_DIR, "F6_三问复盘法模板.xlsx")

    cols = [(1,1,25), (2,2,50)]

    rows = []
    rows.append((1, [
        inline_cell('A', 1, 1, '三问复盘法模板'),
        inline_cell('B', 1, 1, ''),
    ]))

    # 问题描述
    rows.append((2, [
        inline_cell('A', 2, 2, '问题描述:'),
        empty_cell('B', 2, 9),
    ]))

    # 三个问题
    rows.append((4, [
        inline_cell('A', 4, 1, '问1: 这次我做对了什么?'),
        inline_cell('B', 4, 4, '(保留好的做法)'),
    ]))
    rows.append((5, [
        empty_cell('A', 5, 9),
        empty_cell('B', 5, 9),
    ]))
    rows.append((6, [
        empty_cell('A', 6, 9),
        empty_cell('B', 6, 9),
    ]))
    rows.append((7, [
        empty_cell('A', 7, 9),
        empty_cell('B', 7, 9),
    ]))

    rows.append((9, [
        inline_cell('A', 9, 1, '问2: 重来一次,会在哪里做不同的事?'),
        inline_cell('B', 9, 4, '(提炼改进点)'),
    ]))
    rows.append((10, [
        empty_cell('A', 10, 9),
        empty_cell('B', 10, 9),
    ]))
    rows.append((11, [
        empty_cell('A', 11, 9),
        empty_cell('B', 11, 9),
    ]))
    rows.append((12, [
        empty_cell('A', 12, 9),
        empty_cell('B', 12, 9),
    ]))

    rows.append((14, [
        inline_cell('A', 14, 1, '问3: 下次遇到类似问题,第一步做什么?'),
        inline_cell('B', 14, 4, '(形成行动锚点)'),
    ]))
    rows.append((15, [
        empty_cell('A', 15, 9),
        empty_cell('B', 15, 9),
    ]))
    rows.append((16, [
        empty_cell('A', 16, 9),
        empty_cell('B', 16, 9),
    ]))

    # 底部信息
    rows.append((18, [
        inline_cell('A', 18, 2, '复盘日期:'),
        empty_cell('B', 18, 4),
        inline_cell('C', 18, 2, '复盘人:'),
        empty_cell('D', 18, 4),
    ]))

    pack_xlsx(work_dir, output_path, [('三问复盘', rows)], cols)
    return output_path

# =========================================================================
# F7: 人机协同信任协议
# =========================================================================
def create_f7():
    work_dir = r"D:\CC\temp\f7_work"
    output_path = os.path.join(OUTPUT_DIR, "F7_人机协同信任协议.xlsx")

    cols = [(1,1,30), (2,2,15), (3,3,15), (4,4,15)]

    rows = []
    rows.append((1, [
        inline_cell('A', 1, 1, '人机协同信任协议'),
        inline_cell('B', 1, 1, ''),
        inline_cell('C', 1, 1, ''),
        inline_cell('D', 1, 1, ''),
    ]))
    rows.append((2, [
        inline_cell('A', 2, 2, '协议条款'),
        inline_cell('B', 2, 2, '责任人'),
        inline_cell('C', 2, 2, '执行日期'),
        inline_cell('D', 2, 2, '执行情况'),
    ]))

    clauses = [
        "我承诺在使用AI工具时,对关键决策保持人工监督",
        "我承诺对AI提供的信息进行必要的验证",
        "我承诺不向AI系统输入敏感机密信息",
        "我承诺在使用AI生成内容时标注来源",
        "我承诺定期评估AI工具的可靠性和局限性",
        "我承诺对AI系统的异常输出保持警惕",
        "我承诺建立AI使用的数据安全意识",
        "我承诺在团队中推广负责任的AI使用实践",
    ]

    for i, clause in enumerate(clauses, start=3):
        row_num = i
        rows.append((row_num, [
            inline_cell('A', row_num, 4, clause),
            empty_cell('B', row_num, 9),
            empty_cell('C', row_num, 4),
            empty_cell('D', row_num, 7),
        ]))

    # 签字区
    rows.append((12, [
        inline_cell('A', 12, 2, '协议签署人:'),
        empty_cell('B', 12, 4),
        inline_cell('C', 12, 2, '日期:'),
        empty_cell('D', 12, 4),
    ]))

    pack_xlsx(work_dir, output_path, [('人机协议', rows)], cols)
    return output_path

# =========================================================================
# F8: 团队信任仪表盘
# =========================================================================
def create_f8():
    work_dir = r"D:\CC\temp\f8_work"
    output_path = os.path.join(OUTPUT_DIR, "F8_团队信任仪表盘.xlsx")

    cols = [(1,1,20), (2,2,12), (3,3,12), (4,4,12), (5,5,12), (6,6,12), (7,7,12), (8,8,12)]

    rows = []
    rows.append((1, [
        inline_cell('A', 1, 1, '团队信任仪表盘'),
        inline_cell('B', 1, 1, ''),
        inline_cell('C', 1, 1, ''),
        inline_cell('D', 1, 1, ''),
        inline_cell('E', 1, 1, ''),
        inline_cell('F', 1, 1, ''),
        inline_cell('G', 1, 1, ''),
        inline_cell('H', 1, 1, ''),
    ]))
    rows.append((2, [
        inline_cell('A', 2, 2, '评估维度'),
        inline_cell('B', 2, 2, '月'),
        inline_cell('C', 2, 2, '月'),
        inline_cell('D', 2, 2, '月'),
        inline_cell('E', 2, 2, '月'),
        inline_cell('F', 2, 2, '月'),
        inline_cell('G', 2, 2, '月'),
        inline_cell('H', 2, 2, '趋势'),
    ]))

    dimensions = [
        "沟通透明度",
        "承诺兑现率",
        "互相支持度",
        "责任担当感",
        "冲突处理能力",
        "创新信任度",
    ]

    for i, dim in enumerate(dimensions, start=3):
        row_num = i
        rows.append((row_num, [
            inline_cell('A', row_num, 4, dim),
            empty_cell('B', row_num, 7),
            empty_cell('C', row_num, 7),
            empty_cell('D', row_num, 7),
            empty_cell('E', row_num, 7),
            empty_cell('F', row_num, 7),
            empty_cell('G', row_num, 7),
            empty_cell('H', row_num, 7),
        ]))

    rows.append((9, [
        inline_cell('A', 9, 2, '总体评分'),
        empty_cell('B', 9, 7),
        empty_cell('C', 9, 7),
        empty_cell('D', 9, 7),
        empty_cell('E', 9, 7),
        empty_cell('F', 9, 7),
        empty_cell('G', 9, 7),
        empty_cell('H', 9, 7),
    ]))

    rows.append((11, [
        inline_cell('A', 11, 2, '评分标准:'),
        inline_cell('B', 11, 4, '1-2=差  3-4=一般  5-6=良好  7-8=优秀  9-10=卓越'),
    ]))

    pack_xlsx(work_dir, output_path, [('团队仪表盘', rows)], cols)
    return output_path

# =========================================================================
# F9: 我的问题终结报告
# =========================================================================
def create_f9():
    work_dir = r"D:\CC\temp\f9_work"
    output_path = os.path.join(OUTPUT_DIR, "F9_我的问题终结报告.xlsx")

    cols = [(1,1,20), (2,2,50)]

    rows = []
    rows.append((1, [
        inline_cell('A', 1, 1, '我的问题终结报告'),
        inline_cell('B', 1, 1, ''),
    ]))

    # 问题定义
    rows.append((3, [
        inline_cell('A', 3, 5, '【问题定义】'),
        empty_cell('B', 3, 9),
    ]))
    rows.append((4, [
        inline_cell('A', 4, 2, '问题描述:'),
        empty_cell('B', 4, 9),
    ]))
    rows.append((5, [
        inline_cell('A', 5, 2, '问题类型:'),
        inline_cell('B', 5, 4, '□突发型  □重复型  □预期型  □跨部门型'),
    ]))

    # 解决方案
    rows.append((7, [
        inline_cell('A', 7, 5, '【解决方案】'),
        empty_cell('B', 7, 9),
    ]))
    rows.append((8, [
        inline_cell('A', 8, 2, '解决方案:'),
        empty_cell('B', 8, 9),
    ]))
    rows.append((9, [
        inline_cell('A', 9, 2, '实施步骤:'),
        empty_cell('B', 9, 9),
    ]))
    rows.append((10, [
        empty_cell('B', 10, 9),
    ]))

    # 结果验证
    rows.append((12, [
        inline_cell('A', 12, 5, '【结果验证】'),
        empty_cell('B', 12, 9),
    ]))
    rows.append((13, [
        inline_cell('A', 13, 2, '验证时间:'),
        empty_cell('B', 13, 4),
        inline_cell('C', 13, 2, '验证结果:'),
        empty_cell('D', 13, 4),
    ]))
    rows.append((14, [
        inline_cell('A', 14, 2, '问题是否真正解决:'),
        inline_cell('B', 14, 4, '□解决  □复发'),
    ]))

    # 报告信息
    rows.append((16, [
        inline_cell('A', 16, 2, '报告人:'),
        empty_cell('B', 16, 4),
        inline_cell('C', 16, 2, '日期:'),
        empty_cell('D', 16, 4),
    ]))

    pack_xlsx(work_dir, output_path, [('问题终结报告', rows)], cols)
    return output_path

# =========================================================================
# F10: 团队问题台账
# =========================================================================
def create_f10():
    work_dir = r"D:\CC\temp\f10_work"
    output_path = os.path.join(OUTPUT_DIR, "F10_团队问题台账.xlsx")

    cols = [(1,1,12), (2,2,30), (3,3,12), (4,4,12), (5,5,15), (6,6,12), (7,7,15), (8,8,15), (9,9,15), (10,10,10)]

    rows = []
    rows.append((1, [
        inline_cell('A', 1, 1, '团队问题台账'),
        inline_cell('B', 1, 1, ''),
        inline_cell('C', 1, 1, ''),
        inline_cell('D', 1, 1, ''),
        inline_cell('E', 1, 1, ''),
        inline_cell('F', 1, 1, ''),
        inline_cell('G', 1, 1, ''),
        inline_cell('H', 1, 1, ''),
        inline_cell('I', 1, 1, ''),
        inline_cell('J', 1, 1, ''),
    ]))
    rows.append((2, [
        inline_cell('A', 2, 2, '问题编号'),
        inline_cell('B', 2, 2, '问题描述'),
        inline_cell('C', 2, 2, '类型'),
        inline_cell('D', 2, 2, '责任人'),
        inline_cell('E', 2, 2, '创建日期'),
        inline_cell('F', 2, 2, '状态'),
        inline_cell('G', 2, 2, '计划解决日期'),
        inline_cell('H', 2, 2, '实际解决日期'),
        inline_cell('I', 2, 2, '30天追踪'),
        inline_cell('J', 2, 2, '操作'),
    ]))

    # 示例数据行
    sample_data = [
        ("P001", "设备故障导致生产线停产", "突发型", "张明", "2024/01/15", "开放", "2024/01/20", "", "否", "编辑"),
        ("P002", "订单处理流程效率低下", "重复型", "李华", "2024/01/10", "解决中", "2024/01/25", "", "否", "编辑"),
        ("P003", "客户投诉频发", "跨部门型", "王芳", "2024/01/08", "关闭", "2024/01/15", "2024/01/14", "是", "编辑"),
    ]

    for i, data in enumerate(sample_data, start=3):
        row_num = i
        rows.append((row_num, [
            inline_cell('A', row_num, 6, data[0]),
            inline_cell('B', row_num, 4, data[1]),
            inline_cell('C', row_num, 6, data[2]),
            inline_cell('D', row_num, 6, data[3]),
            inline_cell('E', row_num, 6, data[4]),
            inline_cell('F', row_num, 6, data[5]),
            inline_cell('G', row_num, 4, data[6]),
            inline_cell('H', row_num, 4, data[7]),
            inline_cell('I', row_num, 6, data[8]),
            inline_cell('J', row_num, 6, data[9]),
        ]))

    # 添加空行供填写
    for i in range(4, 14):
        row_num = i
        rows.append((row_num, [
            empty_cell('A', row_num, 6),
            empty_cell('B', row_num, 4),
            empty_cell('C', row_num, 6),
            empty_cell('D', row_num, 6),
            empty_cell('E', row_num, 4),
            empty_cell('F', row_num, 6),
            empty_cell('G', row_num, 4),
            empty_cell('H', row_num, 4),
            empty_cell('I', row_num, 6),
            empty_cell('J', row_num, 6),
        ]))

    pack_xlsx(work_dir, output_path, [('团队问题台账', rows)], cols)
    return output_path

# =========================================================================
# 主函数
# =========================================================================
def main():
    ensure_dir(OUTPUT_DIR)
    print("开始生成信任建立与责任担当课程工具表单...")
    print(f"输出目录: {OUTPUT_DIR}")

    outputs = []
    outputs.append(create_f1())
    outputs.append(create_f2())
    outputs.append(create_f3())
    outputs.append(create_f4())
    outputs.append(create_f5())
    outputs.append(create_f6())
    outputs.append(create_f7())
    outputs.append(create_f8())
    outputs.append(create_f9())
    outputs.append(create_f10())

    print("\n生成完成!")
    print(f"共生成 {len(outputs)} 个文件:")
    for o in outputs:
        print(f"  - {os.path.basename(o)}")

if __name__ == "__main__":
    main()
