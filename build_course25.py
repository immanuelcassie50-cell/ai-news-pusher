#!/usr/bin/env python3
"""Build all 7 course 25 Excel forms."""

import zipfile, os, shutil

TEMPLATE_DIR = "C:/Users/Administrator/.claude/skills/Excel表格处理/templates/minimal_xlsx"
OUT_DIR = "D:/新课开发/管理学/25-创业者心智与合伙机制/配套表单"

def copy_template():
    dst = "/tmp/xlsx_work"
    if os.path.exists(dst):
        shutil.rmtree(dst)
    shutil.copytree(TEMPLATE_DIR, dst)
    return dst

def build_shared_strings(strings):
    count = len(strings)
    lines = ['<?xml version="1.0" encoding="UTF-8" standalone="yes"?>']
    lines.append(f'<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="{count}" uniqueCount="{count}">')
    for s in strings:
        escaped = s.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;')
        lines.append(f'  <si><t>{escaped}</t></si>')
    lines.append('</sst>')
    return '\n'.join(lines)

def build_workbook_xml(sheet_names):
    lines = ['<?xml version="1.0" encoding="UTF-8" standalone="yes"?>']
    lines.append('<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">')
    lines.append('  <sheets>')
    for i, name in enumerate(sheet_names, 1):
        safe_name = name.replace('&', '&amp;')
        lines.append(f'    <sheet name="{safe_name}" sheetId="{i}" r:id="rId{i}"/>')
    lines.append('  </sheets>')
    lines.append('  <calcPr calcId="0"/>')
    lines.append('</workbook>')
    return '\n'.join(lines)

def build_styles_xml():
    return '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <numFmts count="5">
    <numFmt numFmtId="164" formatCode="$#,##0;($#,##0);&quot;-&quot;"/>
    <numFmt numFmtId="165" formatCode="0.0%"/>
    <numFmt numFmtId="166" formatCode="0.0x"/>
    <numFmt numFmtId="167" formatCode="#,##0"/>
    <numFmt numFmtId="168" formatCode="0.00"/>
  </numFmts>
  <fonts count="8">
    <font><sz val="11"/><name val="Calibri"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="000000FF"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="00000000"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="00008000"/></font>
    <font><sz val="11"/><name val="Calibri"/><b/></font>
    <font><sz val="11"/><name val="Calibri"/><b/><color rgb="00000000"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="00000000"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="00C00000"/></font>
  </fonts>
  <fills count="4">
    <fill><patternFill patternType="none"/></fill>
    <fill><patternFill patternType="gray125"/></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="00D9E8F5"/><bgColor indexed="64"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="00E2EFDA"/><bgColor indexed="64"/></patternFill></fill>
  </fills>
  <borders count="3">
    <border><left/><right/><top/><bottom/><diagonal/></border>
    <border>
      <left style="thin"><color rgb="00000000"/></left>
      <right style="thin"><color rgb="00000000"/></right>
      <top style="thin"><color rgb="00000000"/></top>
      <bottom style="thin"><color rgb="00000000"/></bottom>
    </border>
    <border>
      <left style="medium"><color rgb="00000000"/></left>
      <right style="medium"><color rgb="00000000"/></right>
      <top style="medium"><color rgb="00000000"/></top>
      <bottom style="medium"><color rgb="00000000"/></bottom>
    </border>
  </borders>
  <cellXfs count="18">
    <xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0" applyFont="1"/>
    <xf numFmtId="0" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1"/>
    <xf numFmtId="0" fontId="2" fillId="0" borderId="0" xfId="0" applyFont="1"/>
    <xf numFmtId="0" fontId="3" fillId="0" borderId="0" xfId="0" applyFont="1"/>
    <xf numFmtId="0" fontId="5" fillId="0" borderId="0" xfId="0" applyFont="1"/>
    <xf numFmtId="164" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>
    <xf numFmtId="164" fontId="2" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>
    <xf numFmtId="165" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>
    <xf numFmtId="165" fontId="2" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>
    <xf numFmtId="167" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>
    <xf numFmtId="167" fontId="2" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>
    <xf numFmtId="1" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>
    <xf numFmtId="0" fontId="5" fillId="2" borderId="0" xfId="0" applyFont="1" applyFill="1"/>
    <xf numFmtId="0" fontId="6" fillId="0" borderId="1" xfId="0" applyFont="1" applyBorder="1"/>
    <xf numFmtId="0" fontId="1" fillId="0" borderId="1" xfId="0" applyFont="1" applyBorder="1"/>
    <xf numFmtId="0" fontId="5" fillId="2" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1"/>
    <xf numFmtId="168" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>
    <xf numFmtId="168" fontId="2" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>
  </cellXfs>
</styleSheet>'''

def pack_xlsx(work_dir, output_path):
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    with zipfile.ZipFile(output_path, 'w', zipfile.ZIP_DEFLATED) as zf:
        for root, dirs, files in os.walk(work_dir):
            for file in files:
                file_path = os.path.join(root, file)
                arcname = os.path.relpath(file_path, work_dir)
                zf.write(file_path, arcname)
    print(f"Packed: {output_path}")


def write_files(work_dir, ss_xml, wb_xml, sheet_xml, output):
    with open(f"{work_dir}/xl/sharedStrings.xml", "w", encoding="utf-8") as f:
        f.write(ss_xml)
    with open(f"{work_dir}/xl/workbook.xml", "w", encoding="utf-8") as f:
        f.write(wb_xml)
    with open(f"{work_dir}/xl/worksheets/sheet1.xml", "w", encoding="utf-8") as f:
        f.write(sheet_xml)
    with open(f"{work_dir}/xl/styles.xml", "w", encoding="utf-8") as f:
        f.write(build_styles_xml())
    pack_xlsx(work_dir, output)


# ===== F1 =====
print("Building F1...")
work_dir = copy_template()
strings = [
    "合伙人选择评估卡", "姓名", "角色/身份", "评估日期", "评估维度",
    "权重(%)", "说明", "价值观契合度", "专业能力", "承诺度", "互补性",
    "合计加权分", "候选人", "打分(1-5)", "加权得分", "评估结论",
    "初筛通过", "需要进一步了解", "暂不考虑", "总分", "建议", "备注",
    "模块一：创始人心智与角色认知", "模块二：合伙人选择与尽调"
]
sheet_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView tabSelected="1" workbookViewId="0"><pane ySplit="4" topLeftCell="A5" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols><col min="1" max="1" width="18" customWidth="1"/><col min="2" max="2" width="14" customWidth="1"/><col min="3" max="3" width="12" customWidth="1"/><col min="4" max="4" width="12" customWidth="1"/><col min="5" max="5" width="12" customWidth="1"/></cols>
  <sheetData>
    <row r="1" ht="32" customHeight="1"><c r="A1" t="s" s="4"><v>0</v></c></row>
    <row r="2" ht="20" customHeight="1"><c r="A2" t="s" s="1"><v>1</v></c><c r="B2" t="s" s="14"><v></v></c><c r="C2" t="s" s="1"><v>2</v></c><c r="D2" t="s" s="14"><v></v></c><c r="E2" t="s" s="1"><v>3</v></c><c r="F2" t="s" s="11"><v></v></c></row>
    <row r="3" ht="20" customHeight="1"><c r="A3" t="s" s="4"><v>22</v></c></row>
    <row r="4" ht="20" customHeight="1"><c r="A4" t="s" s="4"><v>4</v></c><c r="B4" t="s" s="4"><v>5</v></c><c r="C4" t="s" s="4"><v>6</v></c><c r="D4" t="s" s="4"><v>13</v></c><c r="E4" t="s" s="4"><v>14</v></c></row>
    <row r="5"><c r="A5" t="s" s="2"><v>7</v></c><c r="B5" s="8"><v>25</v></c><c r="C5" t="s" s="2"><v>6</v></c><c r="D5" s="1"><v></v></c><c r="E5" s="17"><f>IF(D5=&quot;&quot;,&quot;&quot;,D5*B5/100)</f><v></v></c></row>
    <row r="6"><c r="A6" t="s" s="2"><v>8</v></c><c r="B6" s="8"><v>30</v></c><c r="C6" t="s" s="2"><v>6</v></c><c r="D6" s="1"><v></v></c><c r="E6" s="17"><f>IF(D6=&quot;&quot;,&quot;&quot;,D6*B6/100)</f><v></v></c></row>
    <row r="7"><c r="A7" t="s" s="2"><v>9</v></c><c r="B7" s="8"><v>25</v></c><c r="C7" t="s" s="2"><v>6</v></c><c r="D7" s="1"><v></v></c><c r="E7" s="17"><f>IF(D7=&quot;&quot;,&quot;&quot;,D7*B7/100)</f><v></v></c></row>
    <row r="8"><c r="A8" t="s" s="2"><v>10</v></c><c r="B8" s="8"><v>20</v></c><c r="C8" t="s" s="2"><v>6</v></c><c r="D8" s="1"><v></v></c><c r="E8" s="17"><f>IF(D8=&quot;&quot;,&quot;&quot;,D8*B8/100)</f><v></v></c></row>
    <row r="9" ht="20" customHeight="1"><c r="A9" t="s" s="4"><v>11</v></c><c r="B9" s="8"><v>100</v></c><c r="D9" t="s" s="4"><v>19</v></c><c r="E9" s="6"><f>IF(ISNUMBER(E5),SUM(E5:E8),0)</f><v></v></c></row>
    <row r="10" ht="20" customHeight="1"><c r="A10" t="s" s="4"><v>15</v></c></row>
    <row r="11"><c r="A11" t="s" s="2"><v>16</v></c><c r="B11" t="s" s="2"><v>17</v></c><c r="C11" t="s" s="2"><v>18</v></c></row>
    <row r="12" ht="20" customHeight="1"><c r="A12" t="s" s="1"><v>20</v></c><c r="B12" t="s" s="2"><v></v></c></row>
    <row r="13" ht="20" customHeight="1"><c r="A13" t="s" s="1"><v>21</v></c><c r="B13" t="s" s="2"><v></v></c></row>
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''
write_files(work_dir, build_shared_strings(strings), build_workbook_xml(["合伙人选择评估卡"]), sheet_xml, f"{OUT_DIR}/F1_合伙人选择评估卡.xlsx")


# ===== F2 =====
print("Building F2...")
work_dir = copy_template()
strings = [
    "股权分配计算表", "合伙人姓名", "角色", "资本贡献(万元)", "人力贡献权重(%)",
    "资源贡献权重(%)", "综合权重(%)", "股权比例(%)", "股权比例(稀释前)",
    "Vesting期限(月)", "成熟进度(%)", "已成熟股权(%)", "备注", "授予日期",
    "资本贡献", "人力贡献", "资源贡献", "权重合计", "股权比例", "合伙人A",
    "合伙人B", "创始人", "联合创始人", "备注说明"
]
sheet_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView tabSelected="1" workbookViewId="0"><pane ySplit="5" topLeftCell="A6" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols><col min="1" max="1" width="16" customWidth="1"/><col min="2" max="2" width="12" customWidth="1"/><col min="3" max="3" width="14" customWidth="1"/><col min="4" max="4" width="14" customWidth="1"/><col min="5" max="5" width="14" customWidth="1"/><col min="6" max="6" width="12" customWidth="1"/><col min="7" max="7" width="12" customWidth="1"/><col min="8" max="8" width="12" customWidth="1"/><col min="9" max="9" width="12" customWidth="1"/><col min="10" max="10" width="12" customWidth="1"/><col min="11" max="11" width="18" customWidth="1"/></cols>
  <sheetData>
    <row r="1" ht="30" customHeight="1"><c r="A1" t="s" s="4"><v>0</v></c></row>
    <row r="2" ht="20" customHeight="1"><c r="A2" t="s" s="4"><v>17</v></c></row>
    <row r="3"><c r="A3" t="s" s="1"><v>14</v></c><c r="B3" s="8"><v>40</v></c><c r="C3" t="s" s="1"><v>15</v></c><c r="D3" s="8"><v>35</v></c><c r="E3" t="s" s="1"><v>16</v></c><c r="F3" s="8"><v>25</v></c></row>
    <row r="4"/>
    <row r="5" ht="20" customHeight="1"><c r="A5" t="s" s="4"><v>1</v></c><c r="B5" t="s" s="4"><v>2</v></c><c r="C5" t="s" s="4"><v>3</v></c><c r="D5" t="s" s="4"><v>4</v></c><c r="E5" t="s" s="4"><v>5</v></c><c r="F5" t="s" s="4"><v>6</v></c><c r="G5" t="s" s="4"><v>7</v></c><c r="H5" t="s" s="4"><v>8</v></c><c r="I5" t="s" s="4"><v>9</v></c><c r="J5" t="s" s="4"><v>10</v></c><c r="K5" t="s" s="4"><v>11</v></c></row>
    <row r="6"><c r="A6" t="s" s="2"><v>19</v></c><c r="B6" t="s" s="2"><v>21</v></c><c r="C6" s="5"><v>100</v></c><c r="D6" s="8"><v>0.35</v></c><c r="E6" s="8"><v>0.25</v></c><c r="F6" s="17"><f>C6*$B$3+D6*$D$3+E6*$F$3</f><v></v></c><c r="G6" s="8"><f>F6/SUM($F$6:$F$10)*100</f><v></v></c><c r="H6" s="8"><f>G6</f><v></v></c><c r="I6" s="10"><v>48</v></c><c r="J6" s="17"><f>IF(I6&gt;0,MIN(1,MONTH(TODAY())/I6),0)</f><v></v></c><c r="K6" s="17"><f>H6*J6</f><v></v></c></row>
    <row r="7"><c r="A7" t="s" s="2"><v>20</v></c><c r="B7" t="s" s="2"><v>22</v></c><c r="C7" s="5"><v>50</v></c><c r="D7" s="8"><v>0.40</v></c><c r="E7" s="8"><v>0.15</v></c><c r="F7" s="17"><f>C7*$B$3+D7*$D$3+E7*$F$3</f><v></v></c><c r="G7" s="8"><f>F7/SUM($F$6:$F$10)*100</f><v></v></c><c r="H7" s="8"><f>G7</f><v></v></c><c r="I7" s="10"><v>48</v></c><c r="J7" s="17"><f>IF(I7&gt;0,MIN(1,MONTH(TODAY())/I7),0)</f><v></v></c><c r="K7" s="17"><f>H7*J7</f><v></v></c></row>
    <row r="8"><c r="A8" t="s" s="1"><v></v></c><c r="B8" t="s" s="1"><v></v></c><c r="C8" s="5"><v></v></c><c r="D8" s="8"><v></v></c><c r="E8" s="8"><v></v></c><c r="F8" s="17"><f>IF(C8=&quot;&quot;,0,C8*$B$3+D8*$D$3+E8*$F$3)</f><v></v></c><c r="G8" s="8"><f>IF(F8=0,0,F8/SUM($F$6:$F$10)*100)</f><v></v></c><c r="H8" s="8"><f>G8</f><v></v></c><c r="I8" s="10"><v></v></c><c r="J8" s="17"><f>IF(AND(I8&gt;0,I8&lt;&gt;&quot;&quot;),MIN(1,MONTH(TODAY())/I8),0)</f><v></v></c><c r="K8" s="17"><f>H8*J8</f><v></v></c></row>
    <row r="9"><c r="A9" t="s" s="1"><v></v></c><c r="B9" t="s" s="1"><v></v></c><c r="C9" s="5"><v></v></c><c r="D9" s="8"><v></v></c><c r="E9" s="8"><v></v></c><c r="F9" s="17"><f>IF(C9=&quot;&quot;,0,C9*$B$3+D9*$D$3+E9*$F$3)</f><v></v></c><c r="G9" s="8"><f>IF(F9=0,0,F9/SUM($F$6:$F$10)*100)</f><v></v></c><c r="H9" s="8"><f>G9</f><v></v></c><c r="I9" s="10"><v></v></c><c r="J9" s="17"><f>IF(AND(I9&gt;0,I9&lt;&gt;&quot;&quot;),MIN(1,MONTH(TODAY())/I9),0)</f><v></v></c><c r="K9" s="17"><f>H9*J9</f><v></v></c></row>
    <row r="10" ht="20" customHeight="1"><c r="A10" t="s" s="4"><v>18</v></c><c r="C10" s="5"><f>SUM(C6:C9)</f><v></v></c><c r="F10" s="17"><f>SUM(F6:F9)</f><v></v></c><c r="G10" s="8"><f>SUM(G6:G9)</f><v></v></c><c r="H10" s="8"><f>SUM(H6:H9)</f><v></v></c><c r="K10" s="17"><f>SUM(K6:K9)</f><v></v></c></row>
    <row r="11"><c r="A11" t="s" s="1"><v>23</v></c></row>
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''
write_files(work_dir, build_shared_strings(strings), build_workbook_xml(["股权分配计算表"]), sheet_xml, f"{OUT_DIR}/F2_股权分配计算表.xlsx")


# ===== F3 =====
print("Building F3...")
work_dir = copy_template()
strings = [
    "合伙人协议检查清单", "章节", "检查项", "重要性", "完成状态", "重点提示", "备注",
    "未完成", "已完成", "待确认", "高", "中", "低",
    "第一章：总则与定义", "第二章：合伙人权利与义务", "第三章：股权分配与Vest",
    "第四章：决策机制", "第五章：争议解决", "第六章：退出机制",
    "第七章：保密与竞业", "第八章：其他条款", "协议版本", "签署日期", "签署人"
]
chapters = [
    (13, ["定义与解释清晰", "协议目的与背景陈述", "合伙人身份确认"]),
    (14, ["利润分配权条款", "管理参与权条款", "信息知情权条款", "优先购买权条款"]),
    (15, ["股权比例明确", "Vesting安排细化", "成熟条件与时间表", "回购条款约定"]),
    (16, ["决策权限分级", "表决机制(一人一票/股权加权)", "会议召集与议事规则", "重大事项清单"]),
    (17, ["友好协商期限", "调解机构指定", "仲裁条款", "法律适用与管辖"]),
    (18, ["主动退出触发条件", "被动退出(除名)条件", "退出价格计算方式", "竞业限制条款"]),
    (19, ["保密范围定义", "保密期限", "竞业禁止范围与期限", "违约责任"]),
    (20, ["不可抗力条款", "协议修订程序", "可分割性条款", "完整协议条款"]),
]
rows = []
rows.append('    <row r="1" ht="30" customHeight="1"><c r="A1" t="s" s="4"><v>0</v></c></row>')
rows.append('    <row r="2" ht="20" customHeight="1"><c r="A2" t="s" s="1"><v>21</v></c><c r="B2" t="s" s="14"><v></v></c><c r="C2" t="s" s="1"><v>22</v></c><c r="D2" t="s" s="11"><v></v></c></row>')
rows.append('    <row r="3" ht="20" customHeight="1"><c r="A3" t="s" s="4"><v>1</v></c><c r="B3" t="s" s="4"><v>2</v></c><c r="C3" t="s" s="4"><v>3</v></c><c r="D3" t="s" s="4"><v>4</v></c><c r="E3" t="s" s="4"><v>5</v></c></row>')
row_num = 4
for chapter_str_idx, items in chapters:
    rows.append(f'    <row r="{row_num}" ht="18" customHeight="1"><c r="A{row_num}" t="s" s="4"><v>{chapter_str_idx}</v></c></row>')
    row_num += 1
    for j, item in enumerate(items):
        importance = 10 + (j % 3)
        status = 7 + (j % 3)
        rows.append(f'    <row r="{row_num}"><c r="A{row_num}" t="s" s="2"><v>{item}</v></c><c r="B{row_num}" t="s" s="2"><v>{importance}</v></c><c r="C{row_num}" t="s" s="2"><v>{status}</v></c><c r="D{row_num}" t="s" s="1"><v></v></c></row>')
        row_num += 1
rows.append(f'    <row r="{row_num}" ht="20" customHeight="1"><c r="A{row_num}" t="s" s="1"><v>23</v></c><c r="B{row_num}" t="s" s="14"><v></v></c></row>')
sheet_xml = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView tabSelected="1" workbookViewId="0"><pane ySplit="3" topLeftCell="A4" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols><col min="1" max="1" width="32" customWidth="1"/><col min="2" max="2" width="10" customWidth="1"/><col min="3" max="3" width="10" customWidth="1"/><col min="4" max="4" width="40" customWidth="1"/><col min="5" max="5" width="18" customWidth="1"/></cols>
  <sheetData>
{"".join(rows)}
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''
write_files(work_dir, build_shared_strings(strings), build_workbook_xml(["合伙人协议检查清单"]), sheet_xml, f"{OUT_DIR}/F3_合伙人协议检查清单.xlsx")


# ===== F4 =====
print("Building F4...")
work_dir = copy_template()
strings = [
    "决策权限矩阵(RACI)", "决策类型", "创始人", "联合创始人A", "联合创始人B",
    "CEO", "CTO", "CMO", "CFO", "R=执行  A=批准  C=咨询  I=知会",
    "战略与方向", "年度预算", "重大投资(>100万)", "产品路线图", "营销策略",
    "技术架构", "人员招聘(高管)", "人员招聘(普通)", "薪酬调整", "股权激励",
    "法律合规", "危机处理", "升级路径", "董事会", "CEO", "相关创始人"
]
raci_data = [
    (10, "A", "A", "C", "I", "I", "I", "I"),
    (11, "A", "R", "R", "C", "I", "I", "C"),
    (12, "A", "C", "C", "R", "C", "I", "C"),
    (13, "A", "I", "C", "R", "R", "I", "I"),
    (14, "I", "I", "A", "R", "C", "R", "I"),
    (15, "I", "C", "I", "A", "R", "C", "I"),
    (16, "A", "R", "R", "R", "I", "I", "I"),
    (17, "I", "I", "A", "R", "R", "I", "I"),
    (18, "A", "C", "C", "R", "I", "I", "R"),
    (19, "A", "R", "R", "C", "I", "I", "C"),
    (20, "A", "C", "C", "C", "I", "I", "R"),
    (21, "A", "R", "R", "R", "R", "R", "R"),
]
rows = []
rows.append('    <row r="1" ht="30" customHeight="1"><c r="A1" t="s" s="4"><v>0</v></c></row>')
rows.append('    <row r="2" ht="18" customHeight="1"><c r="A2" t="s" s="2"><v>9</v></c></row>')
rows.append('    <row r="3" ht="20" customHeight="1"><c r="A3" t="s" s="4"><v>1</v></c><c r="B3" t="s" s="4"><v>2</v></c><c r="C3" t="s" s="4"><v>3</v></c><c r="D3" t="s" s="4"><v>4</v></c><c r="E3" t="s" s="4"><v>5</v></c><c r="F3" t="s" s="4"><v>6</v></c><c r="G3" t="s" s="4"><v>7</v></c><c r="H3" t="s" s="4"><v>8</v></c></row>')
for i, (str_idx, r1, r2, r3, r4, r5, r6, r7) in enumerate(raci_data, 4):
    rows.append(f'    <row r="{i}"><c r="A{i}" t="s" s="2"><v>{str_idx}</v></c><c r="B{i}" t="s" s="1"><v>{r1}</v></c><c r="C{i}" t="s" s="1"><v>{r2}</v></c><c r="D{i}" t="s" s="1"><v>{r3}</v></c><c r="E{i}" t="s" s="1"><v>{r4}</v></c><c r="F{i}" t="s" s="1"><v>{r5}</v></c><c r="G{i}" t="s" s="1"><v>{r6}</v></c><c r="H{i}" t="s" s="1"><v>{r7}</v></c></row>')
row_num = len(raci_data) + 4
rows.append(f'    <row r="{row_num}" ht="20" customHeight="1"><c r="A{row_num}" t="s" s="4"><v>22</v></c></row>')
row_num += 1
rows.append(f'    <row r="{row_num}"><c r="A{row_num}" t="s" s="2"><v>23</v></c><c r="B{row_num}" t="s" s="2"><v>24</v></c><c r="C{row_num}" t="s" s="2"><v>25</v></c></row>')
sheet_xml = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView tabSelected="1" workbookViewId="0"><pane ySplit="3" topLeftCell="A4" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols><col min="1" max="1" width="24" customWidth="1"/><col min="2" max="8" width="12" customWidth="1"/></cols>
  <sheetData>
{"".join(rows)}
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''
write_files(work_dir, build_shared_strings(strings), build_workbook_xml(["决策权限矩阵"]), sheet_xml, f"{OUT_DIR}/F4_决策权限矩阵.xlsx")


# ===== F5 =====
print("Building F5...")
work_dir = copy_template()
strings = [
    "冲突处理记录表", "记录编号", "冲突日期", "冲突类型", "涉及方", "冲突描述",
    "处理方式", "处理日期", "处理结果", "状态", "复盘总结", "预防措施",
    "未解决", "处理中", "已解决", "战略分歧", "权益纠纷", "沟通障碍",
    "角色冲突", "资源分配", "私下沟通", "调解介入", "仲裁决定", "其他",
    "完全一致", "部分一致", "存在分歧"
]
rows = []
rows.append('    <row r="1" ht="30" customHeight="1"><c r="A1" t="s" s="4"><v>0</v></c></row>')
rows.append('    <row r="2" ht="20" customHeight="1"><c r="A2" t="s" s="4"><v>1</v></c><c r="B2" t="s" s="4"><v>2</v></c><c r="C2" t="s" s="4"><v>3</v></c><c r="D2" t="s" s="4"><v>4</v></c><c r="E2" t="s" s="4"><v>5</v></c><c r="F2" t="s" s="4"><v>6</v></c><c r="G2" t="s" s="4"><v>7</v></c><c r="H2" t="s" s="4"><v>8</v></c><c r="I2" t="s" s="4"><v>9</v></c><c r="J2" t="s" s="4"><v>10</v></c></row>')
for i in range(3, 11):
    rows.append(f'    <row r="{i}"><c r="A{i}" t="s" s="1"><v></v></c><c r="B{i}" t="s" s="11"><v></v></c><c r="C{i}" t="s" s="2"><v></v></c><c r="D{i}" t="s" s="1"><v></v></c><c r="E{i}" t="s" s="2"><v></v></c><c r="F{i}" t="s" s="1"><v></v></c><c r="G{i}" t="s" s="11"><v></v></c><c r="H{i}" t="s" s="2"><v></v></c><c r="I{i}" t="s" s="2"><v></v></c><c r="J{i}" t="s" s="2"><v></v></c></row>')
rows.append('    <row r="11" ht="18" customHeight="1"><c r="A11" t="s" s="2"><v>12</v></c><c r="B11" t="s" s="2"><v>13</v></c><c r="C11" t="s" s="2"><v>14</v></c></row>')
sheet_xml = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView tabSelected="1" workbookViewId="0"><pane ySplit="2" topLeftCell="A3" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols><col min="1" max="1" width="10" customWidth="1"/><col min="2" max="2" width="12" customWidth="1"/><col min="3" max="3" width="10" customWidth="1"/><col min="4" max="4" width="12" customWidth="1"/><col min="5" max="5" width="28" customWidth="1"/><col min="6" max="6" width="10" customWidth="1"/><col min="7" max="7" width="12" customWidth="1"/><col min="8" max="8" width="12" customWidth="1"/><col min="9" max="9" width="10" customWidth="1"/><col min="10" max="10" width="28" customWidth="1"/></cols>
  <sheetData>
{"".join(rows)}
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''
write_files(work_dir, build_shared_strings(strings), build_workbook_xml(["冲突处理记录表"]), sheet_xml, f"{OUT_DIR}/F5_冲突处理记录表.xlsx")


# ===== F6 =====
print("Building F6...")
work_dir = copy_template()
strings = [
    "团队问题台账", "问题编号", "问题描述", "所属模块", "责任人", "发起日期",
    "计划解决日期", "实际解决日期", "处理进度(%)", "解决状态", "优先级", "解决方案",
    "未开始", "进行中", "已解决", "已搁置", "高", "中", "低", "P25-001",
    "模块一：创始人心智与角色认知", "模块二：合伙人选择与尽调",
    "模块三：股权设计与分配机制", "模块四：合伙人协议与退出机制",
    "模块五：决策机制与冲突解决", "共", "个问题"
]
rows = []
rows.append('    <row r="1" ht="30" customHeight="1"><c r="A1" t="s" s="4"><v>0</v></c></row>')
rows.append('    <row r="2" ht="20" customHeight="1"><c r="A2" t="s" s="4"><v>1</v></c><c r="B2" t="s" s="4"><v>2</v></c><c r="C2" t="s" s="4"><v>3</v></c><c r="D2" t="s" s="4"><v>4</v></c><c r="E2" t="s" s="4"><v>5</v></c><c r="F2" t="s" s="4"><v>6</v></c><c r="G2" t="s" s="4"><v>7</v></c><c r="H2" t="s" s="4"><v>8</v></c><c r="I2" t="s" s="4"><v>9</v></c><c r="J2" t="s" s="4"><v>10</v></c><c r="K2" t="s" s="4"><v>11</v></c></row>')
for i in range(3, 13):
    rows.append(f'    <row r="{i}"><c r="A{i}" t="s" s="1"><v></v></c><c r="B{i}" t="s" s="2"><v></v></c><c r="C{i}" t="s" s="1"><v></v></c><c r="D{i}" t="s" s="1"><v></v></c><c r="E{i}" t="s" s="11"><v></v></c><c r="F{i}" t="s" s="11"><v></v></c><c r="G{i}" t="s" s="11"><v></v></c><c r="H{i}" s="8"><v></v></c><c r="I{i}" t="s" s="1"><v></v></c><c r="J{i}" t="s" s="2"><v></v></c><c r="K{i}" t="s" s="1"><v></v></c></row>')
rows.append('    <row r="13" ht="20" customHeight="1"><c r="A13" t="s" s="4"><v>25</v></c><c r="B13" s="10"><f>COUNTA(A3:A12)</f><v></v></c><c r="C13" t="s" s="4"><v>26</v></c></row>')
sheet_xml = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView tabSelected="1" workbookViewId="0"><pane ySplit="2" topLeftCell="A3" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols><col min="1" max="1" width="12" customWidth="1"/><col min="2" max="2" width="32" customWidth="1"/><col min="3" max="3" width="12" customWidth="1"/><col min="4" max="4" width="12" customWidth="1"/><col min="5" max="5" width="12" customWidth="1"/><col min="6" max="6" width="12" customWidth="1"/><col min="7" max="7" width="12" customWidth="1"/><col min="8" max="8" width="12" customWidth="1"/><col min="9" max="9" width="12" customWidth="1"/><col min="10" max="10" width="28" customWidth="1"/><col min="11" max="11" width="28" customWidth="1"/></cols>
  <sheetData>
{"".join(rows)}
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''
write_files(work_dir, build_shared_strings(strings), build_workbook_xml(["团队问题台账"]), sheet_xml, f"{OUT_DIR}/F6_团队问题台账.xlsx")


# ===== GUIDE =====
print("Building guide...")
work_dir = copy_template()
strings = [
    "配套表单使用指引", "表单名称", "文件编号", "用途说明", "使用场景",
    "使用阶段", "关键用户", "使用要点",
    "F1_合伙人选择评估卡", "F2_股权分配计算表", "F3_合伙人协议检查清单",
    "F4_决策权限矩阵", "F5_冲突处理记录表", "F6_团队问题台账",
    "合伙人选择评估与加权打分", "股权比例分配与Vesting追踪",
    "协议条款完整性检查与签署追踪", "企业决策权限分配与升级路径",
    "合伙人冲突记录与处理追踪", "团队问题记录与解决进度管理",
    "合伙前尽调阶段", "公司设立阶段", "协议签署阶段", "日常运营阶段",
    "创始人/联合创始人", "HR/运营负责人", "法务/外部顾问",
    "模块一：创始人心智与角色认知", "模块二：合伙人选择与尽调",
    "模块三：股权设计与分配机制", "模块四：合伙人协议与退出机制",
    "模块五：决策机制与冲突解决",
    "建议结合课程内容配套使用", "可打印后集体讨论"
]
forms = [
    (8, "F1", 14, 20, 28, 24, 33),
    (9, "F2", 15, 21, 29, 24, "股权分配需结合贡献权重动态调整"),
    (10, "F3", 16, 22, 30, 26, "建议外部律师参与审核"),
    (11, "F4", 17, 23, 31, 25, "定期回顾决策效率"),
    (12, "F5", 18, 23, 31, 24, "冲突处理后及时复盘"),
    (13, "F6", 19, 23, 31, 25, "问题责任到人，进度可视化"),
]
rows = []
rows.append('    <row r="1" ht="32" customHeight="1"><c r="A1" t="s" s="4"><v>0</v></c></row>')
rows.append('    <row r="2" ht="18" customHeight="1"><c r="A2" t="s" s="2"><v>32</v></c></row>')
rows.append('    <row r="3" ht="20" customHeight="1"><c r="A3" t="s" s="4"><v>1</v></c><c r="B3" t="s" s="4"><v>2</v></c><c r="C3" t="s" s="4"><v>3</v></c><c r="D3" t="s" s="4"><v>4</v></c><c r="E3" t="s" s="4"><v>5</v></c></row>')
row_num = 4
for name_idx, code, usage_idx, scene_idx, module_idx, user_idx, tip in forms:
    rows.append(f'    <row r="{row_num}"><c r="A{row_num}" t="s" s="2"><v>{name_idx}</v></c><c r="B{row_num}" t="s" s="1"><v>{code}</v></c><c r="C{row_num}" t="s" s="2"><v>{usage_idx}</v></c><c r="D{row_num}" t="s" s="1"><v>{scene_idx}</v></c><c r="E{row_num}" t="s" s="2"><v>{module_idx}</v></c></row>')
    row_num += 1
    rows.append(f'    <row r="{row_num}"><c r="A{row_num}" t="s" s="1"><v>6</v></c><c r="B{row_num}" t="s" s="2"><v>{user_idx}</v></c><c r="C{row_num}" t="s" s="1"><v>7</v></c><c r="D{row_num}" t="s" s="2"><v>{tip}</v></c></row>')
    row_num += 1
sheet_xml = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView tabSelected="1" workbookViewId="0"><pane ySplit="3" topLeftCell="A4" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols><col min="1" max="1" width="22" customWidth="1"/><col min="2" max="2" width="10" customWidth="1"/><col min="3" max="3" width="32" customWidth="1"/><col min="4" max="4" width="14" customWidth="1"/><col min="5" max="5" width="28" customWidth="1"/></cols>
  <sheetData>
{"".join(rows)}
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''
write_files(work_dir, build_shared_strings(strings), build_workbook_xml(["使用指引"]), sheet_xml, f"{OUT_DIR}/配套表单使用指引.xlsx")

print("\n=== ALL DONE ===")
os.system(f'ls -la "{OUT_DIR}"')
