#!/usr/bin/env python3
"""Build the three Excel tool files for 出海战略定盘 course."""

import os
import shutil
import zipfile

SKILL_DIR = "C:/Users/Administrator/.claude/skills/Excel表格处理"
OUTPUT_DIR = "D:/新课开发/出海/1、出海战略定盘/完整课程包/06_工具表单/"

# ─────────────────────────────────────────────────────────────────────────────
# Helper: copy minimal_xlsx template to a working dir
# ─────────────────────────────────────────────────────────────────────────────
def copy_template(work_dir):
    src = f"{SKILL_DIR}/templates/minimal_xlsx"
    # Manual recursive copy to avoid shutil.copytree dirs_exist_ok issues on some Python versions
    import shutil as _sh
    if os.path.exists(work_dir):
        _sh.rmtree(work_dir)
    os.makedirs(work_dir)
    for item in os.listdir(src):
        s = os.path.join(src, item)
        d = os.path.join(work_dir, item)
        if os.path.isdir(s):
            _sh.copytree(s, d)
        else:
            _sh.copy2(s, d)

# ─────────────────────────────────────────────────────────────────────────────
# Helper: build sharedStrings.xml from a list of strings
# ─────────────────────────────────────────────────────────────────────────────
def build_shared_strings(strings):
    """Returns XML content for sharedStrings.xml."""
    unique = []
    idx_map = {}
    for s in strings:
        if s not in idx_map:
            idx_map[s] = len(unique)
            unique.append(s)
    lines = ['<?xml version="1.0" encoding="UTF-8" standalone="yes"?>']
    lines.append(f'<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="{len(strings)}" uniqueCount="{len(unique)}">')
    for s in unique:
        escaped = s.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;').replace('"', '&quot;')
        lines.append(f'<si><t>{escaped}</t></si>')
    lines.append('</sst>')
    return '\n'.join(lines)

# ─────────────────────────────────────────────────────────────────────────────
# Helper: pack xlsx from working dir
# ─────────────────────────────────────────────────────────────────────────────
def pack_xlsx(work_dir, output_path):
    with zipfile.ZipFile(output_path, 'w', zipfile.ZIP_DEFLATED) as zf:
        for root, dirs, files in os.walk(work_dir):
            for file in files:
                full_path = os.path.join(root, file)
                arcname = os.path.relpath(full_path, work_dir)
                zf.write(full_path, arcname)
    print(f"  Packed -> {output_path}")

# ─────────────────────────────────────────────────────────────────────────────
# Helper: update workbook.xml to add sheets
# ─────────────────────────────────────────────────────────────────────────────
def update_workbook(work_dir, sheet_names):
    wb_path = os.path.join(work_dir, 'xl', 'workbook.xml')
    with open(wb_path, 'r', encoding='utf-8') as f:
        content = f.read()
    # Replace the sheets section
    import re
    sheets_xml = ''
    for i, name in enumerate(sheet_names, 1):
        r_id = f'rId{i}'
        sheets_xml += f'<sheet name="{name}" sheetId="{i}" r:id="{r_id}"/>'
    content = re.sub(r'<sheets>.*?</sheets>', f'<sheets>{sheets_xml}</sheets>', content, flags=re.DOTALL)
    with open(wb_path, 'w', encoding='utf-8') as f:
        f.write(content)

def update_workbook_rels(work_dir, num_sheets):
    rels_path = os.path.join(work_dir, 'xl', '_rels', 'workbook.xml.rels')
    with open(rels_path, 'r', encoding='utf-8') as f:
        content = f.read()
    import re
    # Add relationship entries for sheets 2+
    new_rels = ''
    for i in range(2, num_sheets + 1):
        new_rels += f'<Relationship Id="rId{i+3}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet{i}.xml"/>'
    content = content.replace('</Relationships>', f'{new_rels}</Relationships>')
    with open(rels_path, 'w', encoding='utf-8') as f:
        f.write(content)

def update_content_types(work_dir, num_sheets):
    ct_path = os.path.join(work_dir, '[Content_Types].xml')
    with open(ct_path, 'r', encoding='utf-8') as f:
        content = f.read()
    import re
    new_overrides = ''
    for i in range(2, num_sheets + 1):
        new_overrides += f'<Override PartName="/xl/worksheets/sheet{i}.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>'
    content = content.replace('</Types>', f'{new_overrides}</Types>')
    with open(ct_path, 'w', encoding='utf-8') as f:
        f.write(content)

# ─────────────────────────────────────────────────────────────────────────────
# FILE 1: F10_团队出海战略台账.xlsx
# ─────────────────────────────────────────────────────────────────────────────
def build_file1(work_dir):
    print("Building File 1: F10_团队出海战略台账.xlsx")
    copy_template(work_dir)

    sheets = ['市场优先级总表', '验证方案追踪', '战略假设追踪', '风险预警清单', '决策记录']

    # Shared strings - collect all text used across sheets
    all_strings = [
        # Sheet1: 市场优先级总表
        '市场优先级总表', '候选市场', '市场规模(亿美元)', '市场增速(%)', '竞争强度(1-5)',
        '政策友好度(1-5)', '进入壁垒(1-5)', '综合评分', '优先级排名', '市场名称',
        '备注', '数据更新时间', '数据来源',
        # Sheet2: 验证方案追踪
        '验证方案追踪', '市场', '验证假设', '验证方法', '验证进度(%)', '验证结果',
        '结论', '负责人', '截止日期', '状态', '关键里程碑', '证据/数据来源',
        # Sheet3: 战略假设追踪
        '战略假设追踪', '假设ID', '假设描述', '所属市场', '假设类型', '验证状态',
        '验证方法', '最后验证时间', '下次验证时间', '风险等级', '应对策略',
        # Sheet4: 风险预警清单
        '风险预警清单', '风险ID', '风险描述', '影响市场', '风险类型', '发生概率(%)',
        '影响程度(1-5)', '风险评分', '应对措施', '预警等级', '监控指标', '触发条件',
        # Sheet5: 决策记录
        '决策记录', '决策ID', '决策日期', '决策标题', '决策类型', '相关市场',
        '决策依据', '决策结果', '评估时间', '评估结果', '备注',
    ]

    # Build shared strings
    ss_content = build_shared_strings(all_strings)
    with open(os.path.join(work_dir, 'xl', 'sharedStrings.xml'), 'w', encoding='utf-8') as f:
        f.write(ss_content)

    # Update workbook structure for 5 sheets
    update_workbook(work_dir, sheets)
    update_workbook_rels(work_dir, 5)
    update_content_types(work_dir, 5)

    # Create additional sheet XML files (copy from sheet1)
    src_sheet = os.path.join(work_dir, 'xl', 'worksheets', 'sheet1.xml')
    for i in range(2, 6):
        shutil.copy(src_sheet, os.path.join(work_dir, 'xl', 'worksheets', f'sheet{i}.xml'))

    # ── Sheet 1: 市场优先级总表 ──────────────────────────────────────────────
    sheet1_content = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"><pane ySplit="3" topLeftCell="A4" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols>
    <col min="1" max="1" width="18" customWidth="1"/>
    <col min="2" max="2" width="14" customWidth="1"/>
    <col min="3" max="3" width="12" customWidth="1"/>
    <col min="4" max="4" width="10" customWidth="1"/>
    <col min="5" max="5" width="12" customWidth="1"/>
    <col min="6" max="6" width="12" customWidth="1"/>
    <col min="7" max="7" width="10" customWidth="1"/>
    <col min="8" max="8" width="10" customWidth="1"/>
    <col min="9" max="9" width="12" customWidth="1"/>
    <col min="10" max="10" width="20" customWidth="1"/>
  </cols>
  <sheetData>
    <row r="1">
      <c r="A1" t="s" s="4"><v>0</v></c>
    </row>
    <row r="2">
      <c r="A2" t="s" s="0"><v>11</v></c>
      <c r="B2" t="s" s="1"><v></v></c>
    </row>
    <row r="3">
      <c r="A3" t="s" s="4"><v>8</v></c>
      <c r="B3" t="s" s="4"><v>2</v></c>
      <c r="C3" t="s" s="4"><v>3</v></c>
      <c r="D3" t="s" s="4"><v>4</v></c>
      <c r="E3" t="s" s="4"><v>5</v></c>
      <c r="F3" t="s" s="4"><v>6</v></c>
      <c r="G3" t="s" s="4"><v>7</v></c>
      <c r="H3" t="s" s="4"><v>9</v></c>
      <c r="I3" t="s" s="4"><v>10</v></c>
    </row>
    <row r="4">
      <c r="A4" t="s" s="1"><v>12</v></c>
      <c r="B4" s="5"><v>5000</v></c>
      <c r="C4" s="7"><v>0.15</v></c>
      <c r="D4" s="9"><v>3</v></c>
      <c r="E4" s="9"><v>4</v></c>
      <c r="F4" s="9"><v>3</v></c>
      <c r="G4" s="6"><f>(B4/5000*0.3+C4*0.25+D4/5*0.15+E4/5*0.15+F4/5*0.15)*100</f><v></v></c>
      <c r="H4" s="10"><f>RANK(G4,G4:G8,0)</f><v></v></c>
      <c r="I4" t="s" s="1"><v></v></c>
    </row>
    <row r="5">
      <c r="A5" t="s" s="1"><v></v></c>
      <c r="B5" s="5"><v>3000</v></c>
      <c r="C5" s="7"><v>0.22</v></c>
      <c r="D5" s="9"><v>4</v></c>
      <c r="E5" s="9"><v>3</v></c>
      <c r="F5" s="9"><v>2</v></c>
      <c r="G5" s="6"><f>(B5/5000*0.3+C5*0.25+D5/5*0.15+E5/5*0.15+F5/5*0.15)*100</f><v></v></c>
      <c r="H5" s="10"><f>RANK(G5,G4:G8,0)</f><v></v></c>
      <c r="I5" t="s" s="1"><v></v></c>
    </row>
    <row r="6">
      <c r="A6" t="s" s="1"><v></v></c>
      <c r="B6" s="5"><v>8000</v></c>
      <c r="C6" s="7"><v>0.08</v></c>
      <c r="D6" s="9"><v>2</v></c>
      <c r="E6" s="9"><v>5</v></c>
      <c r="F6" s="9"><v>4</v></c>
      <c r="G6" s="6"><f>(B6/5000*0.3+C6*0.25+D6/5*0.15+E6/5*0.15+F6/5*0.15)*100</f><v></v></c>
      <c r="H6" s="10"><f>RANK(G6,G4:G8,0)</f><v></v></c>
      <c r="I6" t="s" s="1"><v></v></c>
    </row>
    <row r="7">
      <c r="A7" t="s" s="1"><v></v></c>
      <c r="B7" s="5"><v>2000</v></c>
      <c r="C7" s="7"><v>0.18</v></c>
      <c r="D7" s="9"><v>3</v></c>
      <c r="E7" s="9"><v>2</v></c>
      <c r="F7" s="9"><v>3</v></c>
      <c r="G7" s="6"><f>(B7/5000*0.3+C7*0.25+D7/5*0.15+E7/5*0.15+F7/5*0.15)*100</f><v></v></c>
      <c r="H7" s="10"><f>RANK(G7,G4:G8,0)</f><v></v></c>
      <c r="I7" t="s" s="1"><v></v></c>
    </row>
    <row r="8">
      <c r="A8" t="s" s="1"><v></v></c>
      <c r="B8" s="5"><v>4500</v></c>
      <c r="C8" s="7"><v>0.12</v></c>
      <c r="D8" s="9"><v>3</v></c>
      <c r="E8" s="9"><v>3</v></c>
      <c r="F8" s="9"><v>3</v></c>
      <c r="G8" s="6"><f>(B8/5000*0.3+C8*0.25+D8/5*0.15+E8/5*0.15+F8/5*0.15)*100</f><v></v></c>
      <c r="H8" s="10"><f>RANK(G8,G4:G8,0)</f><v></v></c>
      <c r="I8" t="s" s="1"><v></v></c>
    </row>
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

    # Write correct sheet1 with proper string indices
    # String mapping: 0=市场优先级总表, 1=备注, 2=市场规模(亿美元), 3=市场增速(%),
    # 4=竞争强度(1-5), 5=政策友好度(1-5), 6=进入壁垒(1-5), 7=综合评分, 8=市场名称,
    # 9=优先级排名, 10=数据更新时间, 11=数据来源, 12=(blank)
    # But we also need the actual market names at indices 12-16 (after the ones above)

    # Let me redo with correct string indexing
    all_strs_file1 = [
        '市场优先级总表', '备注', '市场规模(亿美元)', '市场增速(%)', '竞争强度(1-5)',
        '政策友好度(1-5)', '进入壁垒(1-5)', '综合评分', '市场名称', '优先级排名',
        '数据更新时间', '数据来源',
        '东南亚', '北美', '欧洲', '中东', '南美',  # market names
        '示例市场1', '示例市场2', '示例市场3', '示例市场4',  # extra names
    ]
    ss1 = build_shared_strings(all_strs_file1)
    with open(os.path.join(work_dir, 'xl', 'sharedStrings.xml'), 'w', encoding='utf-8') as f:
        f.write(ss1)

    # Recalculate indices:
    # 0=市场优先级总表, 1=备注, 2=市场规模(亿美元), 3=市场增速(%),
    # 4=竞争强度(1-5), 5=政策友好度(1-5), 6=进入壁垒(1-5), 7=综合评分, 8=市场名称,
    # 9=优先级排名, 10=数据更新时间, 11=数据来源,
    # 12=东南亚, 13=北美, 14=欧洲, 15=中东, 16=南美

    sheet1_xml = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"><pane ySplit="4" topLeftCell="A5" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols>
    <col min="1" max="1" width="18" customWidth="1"/>
    <col min="2" max="2" width="14" customWidth="1"/>
    <col min="3" max="3" width="12" customWidth="1"/>
    <col min="4" max="4" width="10" customWidth="1"/>
    <col min="5" max="5" width="12" customWidth="1"/>
    <col min="6" max="6" width="12" customWidth="1"/>
    <col min="7" max="7" width="10" customWidth="1"/>
    <col min="8" max="8" width="10" customWidth="1"/>
    <col min="9" max="9" width="12" customWidth="1"/>
    <col min="10" max="10" width="22" customWidth="1"/>
  </cols>
  <sheetData>
    <row r="1">
      <c r="A1" t="s" s="4"><v>0</v></c>
    </row>
    <row r="2">
      <c r="A2" t="s" s="0"><v>10</v></c>
      <c r="B2" s="11"><v>2026</v></c>
      <c r="C2" t="s" s="0"><v>11</v></c>
    </row>
    <row r="3">
      <c r="A3" t="s" s="0"><v></v></c>
      <c r="B3" t="s" s="0"><v></v></c>
      <c r="C3" t="s" s="0"><v></v></c>
    </row>
    <row r="4">
      <c r="A4" t="s" s="4"><v>8</v></c>
      <c r="B4" t="s" s="4"><v>2</v></c>
      <c r="C4" t="s" s="4"><v>3</v></c>
      <c r="D4" t="s" s="4"><v>4</v></c>
      <c r="E4" t="s" s="4"><v>5</v></c>
      <c r="F4" t="s" s="4"><v>6</v></c>
      <c r="G4" t="s" s="4"><v>7</v></c>
      <c r="H4" t="s" s="4"><v>9</v></c>
      <c r="I4" t="s" s="4"><v>1</v></c>
    </row>
    <row r="5">
      <c r="A5" t="s" s="1"><v>12</v></c>
      <c r="B5" s="5"><v>5000</v></c>
      <c r="C5" s="7"><v>0.15</v></c>
      <c r="D5" s="9"><v>3</v></c>
      <c r="E5" s="9"><v>4</v></c>
      <c r="F5" s="9"><v>3</v></c>
      <c r="G5" s="6"><f>(B5/5000*0.3+C5*0.25+D5/5*0.15+E5/5*0.15+F5/5*0.15)*100</f><v></v></c>
      <c r="H5" s="10"><f>RANK(G5,G5:G9,0)</f><v></v></c>
      <c r="I5" t="s" s="1"><v></v></c>
    </row>
    <row r="6">
      <c r="A6" t="s" s="1"><v>13</v></c>
      <c r="B6" s="5"><v>3000</v></c>
      <c r="C6" s="7"><v>0.22</v></c>
      <c r="D6" s="9"><v>4</v></c>
      <c r="E6" s="9"><v>3</v></c>
      <c r="F6" s="9"><v>2</v></c>
      <c r="G6" s="6"><f>(B6/5000*0.3+C6*0.25+D6/5*0.15+E6/5*0.15+F6/5*0.15)*100</f><v></v></c>
      <c r="H6" s="10"><f>RANK(G6,G5:G9,0)</f><v></v></c>
      <c r="I6" t="s" s="1"><v></v></c>
    </row>
    <row r="7">
      <c r="A7" t="s" s="1"><v>14</v></c>
      <c r="B7" s="5"><v>8000</v></c>
      <c r="C7" s="7"><v>0.08</v></c>
      <c r="D7" s="9"><v>2</v></c>
      <c r="E7" s="9"><v>5</v></c>
      <c r="F7" s="9"><v>4</v></c>
      <c r="G7" s="6"><f>(B7/5000*0.3+C7*0.25+D7/5*0.15+E7/5*0.15+F7/5*0.15)*100</f><v></v></c>
      <c r="H7" s="10"><f>RANK(G7,G5:G9,0)</f><v></v></c>
      <c r="I7" t="s" s="1"><v></v></c>
    </row>
    <row r="8">
      <c r="A8" t="s" s="1"><v>15</v></c>
      <c r="B8" s="5"><v>2000</v></c>
      <c r="C8" s="7"><v>0.18</v></c>
      <c r="D8" s="9"><v>3</v></c>
      <c r="E8" s="9"><v>2</v></c>
      <c r="F8" s="9"><v>3</v></c>
      <c r="G8" s="6"><f>(B8/5000*0.3+C8*0.25+D8/5*0.15+E8/5*0.15+F8/5*0.15)*100</f><v></v></c>
      <c r="H8" s="10"><f>RANK(G8,G5:G9,0)</f><v></v></c>
      <c r="I8" t="s" s="1"><v></v></c>
    </row>
    <row r="9">
      <c r="A9" t="s" s="1"><v>16</v></c>
      <c r="B9" s="5"><v>4500</v></c>
      <c r="C9" s="7"><v>0.12</v></c>
      <c r="D9" s="9"><v>3</v></c>
      <c r="E9" s="9"><v>3</v></c>
      <c r="F9" s="9"><v>3</v></c>
      <c r="G9" s="6"><f>(B9/5000*0.3+C9*0.25+D9/5*0.15+E9/5*0.15+F9/5*0.15)*100</f><v></v></c>
      <c r="H9" s="10"><f>RANK(G9,G5:G9,0)</f><v></v></c>
      <c r="I9" t="s" s="1"><v></v></c>
    </row>
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

    with open(os.path.join(work_dir, 'xl', 'worksheets', 'sheet1.xml'), 'w', encoding='utf-8') as f:
        f.write(sheet1_xml)

    # ── Sheet 2: 验证方案追踪 ─────────────────────────────────────────────────
    ss2 = build_shared_strings([
        '验证方案追踪', '市场', '验证假设', '验证方法', '验证进度(%)', '验证结果',
        '结论', '负责人', '截止日期', '状态', '关键里程碑', '证据/数据来源',
        '待验证', '进行中', '已通过', '未通过', '假设A', '假设B', '假设C',
    ])
    # Indices: 0=验证方案追踪, 1=市场, 2=验证假设, 3=验证方法, 4=验证进度(%),
    # 5=验证结果, 6=结论, 7=负责人, 8=截止日期, 9=状态, 10=关键里程碑, 11=证据/数据来源,
    # 12=待验证, 13=进行中, 14=已通过, 15=未通过, 16=假设A, 17=假设B, 18=假设C

    sheet2_xml = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"><pane ySplit="3" topLeftCell="A4" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols>
    <col min="1" max="1" width="14" customWidth="1"/>
    <col min="2" max="2" width="18" customWidth="1"/>
    <col min="3" max="3" width="20" customWidth="1"/>
    <col min="4" max="4" width="14" customWidth="1"/>
    <col min="5" max="5" width="12" customWidth="1"/>
    <col min="6" max="6" width="20" customWidth="1"/>
    <col min="7" max="7" width="14" customWidth="1"/>
    <col min="8" max="8" width="10" customWidth="1"/>
    <col min="9" max="9" width="12" customWidth="1"/>
  </cols>
  <sheetData>
    <row r="1">
      <c r="A1" t="s" s="4"><v>0</v></c>
    </row>
    <row r="2">
      <c r="A2" t="s" s="0"><v></v></c>
    </row>
    <row r="3">
      <c r="A3" t="s" s="4"><v>1</v></c>
      <c r="B3" t="s" s="4"><v>2</v></c>
      <c r="C3" t="s" s="4"><v>3</v></c>
      <c r="D3" t="s" s="4"><v>10</v></c>
      <c r="E3" t="s" s="4"><v>4</v></c>
      <c r="F3" t="s" s="4"><v>5</v></c>
      <c r="G3" t="s" s="4"><v>6</v></c>
      <c r="H3" t="s" s="4"><v>7</v></c>
      <c r="I3" t="s" s="4"><v>8</v></c>
    </row>
    <row r="4">
      <c r="A4" t="s" s="1"><v>16</v></c>
      <c r="B4" t="s" s="1"><v></v></c>
      <c r="C4" t="s" s="1"><v></v></c>
      <c r="D4" t="s" s="1"><v>12</v></c>
      <c r="E4" s="7"><v>0</v></c>
      <c r="F4" t="s" s="1"><v></v></c>
      <c r="G4" t="s" s="1"><v></v></c>
      <c r="H4" t="s" s="1"><v></v></c>
      <c r="I4" t="s" s="1"><v></v></c>
    </row>
    <row r="5">
      <c r="A5" t="s" s="1"><v>17</v></c>
      <c r="B5" t="s" s="1"><v></v></c>
      <c r="C5" t="s" s="1"><v></v></c>
      <c r="D5" t="s" s="1"><v>13</v></c>
      <c r="E5" s="7"><v>0.5</v></c>
      <c r="F5" t="s" s="1"><v></v></c>
      <c r="G5" t="s" s="1"><v></v></c>
      <c r="H5" t="s" s="1"><v></v></c>
      <c r="I5" t="s" s="1"><v></v></c>
    </row>
    <row r="6">
      <c r="A6" t="s" s="1"><v>18</v></c>
      <c r="B6" t="s" s="1"><v></v></c>
      <c r="C6" t="s" s="1"><v></v></c>
      <c r="D6" t="s" s="1"><v>14</v></c>
      <c r="E6" s="7"><v>1</v></c>
      <c r="F6" t="s" s="1"><v></v></c>
      <c r="G6" t="s" s="1"><v></v></c>
      <c r="H6" t="s" s="1"><v></v></c>
      <c r="I6" t="s" s="1"><v></v></c>
    </row>
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''
    with open(os.path.join(work_dir, 'xl', 'worksheets', 'sheet2.xml'), 'w', encoding='utf-8') as f:
        f.write(sheet2_xml)
    # Update sharedStrings
    with open(os.path.join(work_dir, 'xl', 'sharedStrings.xml'), 'w', encoding='utf-8') as f:
        f.write(ss2)

    # ── Sheet 3: 战略假设追踪 ────────────────────────────────────────────────
    sheet3_xml = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"><pane ySplit="3" topLeftCell="A4" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols>
    <col min="1" max="1" width="10" customWidth="1"/>
    <col min="2" max="2" width="24" customWidth="1"/>
    <col min="3" max="3" width="14" customWidth="1"/>
    <col min="4" max="4" width="12" customWidth="1"/>
    <col min="5" max="5" width="12" customWidth="1"/>
    <col min="6" max="6" width="12" customWidth="1"/>
    <col min="7" max="7" width="12" customWidth="1"/>
    <col min="8" max="8" width="12" customWidth="1"/>
    <col min="9" max="9" width="12" customWidth="1"/>
    <col min="10" max="10" width="16" customWidth="1"/>
  </cols>
  <sheetData>
    <row r="1">
      <c r="A1" t="s" s="4"><v>0</v></c>
    </row>
    <row r="2">
      <c r="A2" t="s" s="0"><v></v></c>
    </row>
    <row r="3">
      <c r="A3" t="s" s="4"><v>1</v></c>
      <c r="B3" t="s" s="4"><v>2</v></c>
      <c r="C3" t="s" s="4"><v>3</v></c>
      <c r="D3" t="s" s="4"><v>4</v></c>
      <c r="E3" t="s" s="4"><v>9</v></c>
      <c r="F3" t="s" s="4"><v>5</v></c>
      <c r="G3" t="s" s="4"><v>6</v></c>
      <c r="H3" t="s" s="4"><v>7</v></c>
      <c r="I3" t="s" s="4"><v>8</v></c>
    </row>
    <row r="4">
      <c r="A4" t="s" s="1"><v></v></c>
      <c r="B4" t="s" s="1"><v></v></c>
      <c r="C4" t="s" s="1"><v></v></c>
      <c r="D4" t="s" s="1"><v></v></c>
      <c r="E4" t="s" s="1"><v></v></c>
      <c r="F4" t="s" s="1"><v></v></c>
      <c r="G4" t="s" s="1"><v></v></c>
      <c r="H4" t="s" s="1"><v></v></c>
      <c r="I4" t="s" s="1"><v></v></c>
    </row>
    <row r="5">
      <c r="A5" t="s" s="1"><v></v></c>
      <c r="B5" t="s" s="1"><v></v></c>
      <c r="C5" t="s" s="1"><v></v></c>
      <c r="D5" t="s" s="1"><v></v></c>
      <c r="E5" t="s" s="1"><v></v></c>
      <c r="F5" t="s" s="1"><v></v></c>
      <c r="G5" t="s" s="1"><v></v></c>
      <c r="H5" t="s" s="1"><v></v></c>
      <c r="I5" t="s" s="1"><v></v></c>
    </row>
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''
    with open(os.path.join(work_dir, 'xl', 'worksheets', 'sheet3.xml'), 'w', encoding='utf-8') as f:
        f.write(sheet3_xml)

    # ── Sheet 4: 风险预警清单 ────────────────────────────────────────────────
    sheet4_xml = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"><pane ySplit="3" topLeftCell="A4" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols>
    <col min="1" max="1" width="10" customWidth="1"/>
    <col min="2" max="2" width="22" customWidth="1"/>
    <col min="3" max="3" width="14" customWidth="1"/>
    <col min="4" max="4" width="12" customWidth="1"/>
    <col min="5" max="5" width="10" customWidth="1"/>
    <col min="6" max="6" width="10" customWidth="1"/>
    <col min="7" max="7" width="10" customWidth="1"/>
    <col min="8" max="8" width="18" customWidth="1"/>
    <col min="9" max="9" width="10" customWidth="1"/>
    <col min="10" max="10" width="16" customWidth="1"/>
    <col min="11" max="11" width="16" customWidth="1"/>
  </cols>
  <sheetData>
    <row r="1">
      <c r="A1" t="s" s="4"><v>0</v></c>
    </row>
    <row r="2">
      <c r="A2" t="s" s="0"><v></v></c>
    </row>
    <row r="3">
      <c r="A3" t="s" s="4"><v>1</v></c>
      <c r="B3" t="s" s="4"><v>2</v></c>
      <c r="C3" t="s" s="4"><v>3</v></c>
      <c r="D3" t="s" s="4"><v>4</v></c>
      <c r="E3" t="s" s="4"><v>9</v></c>
      <c r="F3" t="s" s="4"><v>5</v></c>
      <c r="G3" t="s" s="4"><v>6</v></c>
      <c r="H3" t="s" s="4"><v>7</v></c>
      <c r="I3" t="s" s="4"><v>8</v></c>
    </row>
    <row r="4">
      <c r="A4" t="s" s="1"><v></v></c>
      <c r="B4" t="s" s="1"><v></v></c>
      <c r="C4" t="s" s="1"><v></v></c>
      <c r="D4" t="s" s="1"><v></v></c>
      <c r="E4" s="7"><v>0.5</v></c>
      <c r="F4" s="9"><v>3</v></c>
      <c r="G4" s="6"><f>E4*F4</f><v></v></c>
      <c r="H4" t="s" s="1"><v></v></c>
      <c r="I4" t="s" s="1"><v></v></c>
    </row>
    <row r="5">
      <c r="A5" t="s" s="1"><v></v></c>
      <c r="B5" t="s" s="1"><v></v></c>
      <c r="C5" t="s" s="1"><v></v></c>
      <c r="D5" t="s" s="1"><v></v></c>
      <c r="E5" s="7"><v>0.3</v></c>
      <c r="F5" s="9"><v>4</v></c>
      <c r="G5" s="6"><f>E5*F5</f><v></v></c>
      <c r="H5" t="s" s="1"><v></v></c>
      <c r="I5" t="s" s="1"><v></v></c>
    </row>
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''
    with open(os.path.join(work_dir, 'xl', 'worksheets', 'sheet4.xml'), 'w', encoding='utf-8') as f:
        f.write(sheet4_xml)

    # ── Sheet 5: 决策记录 ────────────────────────────────────────────────────
    sheet5_xml = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"><pane ySplit="3" topLeftCell="A4" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols>
    <col min="1" max="1" width="10" customWidth="1"/>
    <col min="2" max="2" width="12" customWidth="1"/>
    <col min="3" max="3" width="20" customWidth="1"/>
    <col min="4" max="4" width="12" customWidth="1"/>
    <col min="5" max="5" width="14" customWidth="1"/>
    <col min="6" max="6" width="20" customWidth="1"/>
    <col min="7" max="7" width="16" customWidth="1"/>
    <col min="8" max="8" width="12" customWidth="1"/>
    <col min="9" max="9" width="14" customWidth="1"/>
    <col min="10" max="10" width="18" customWidth="1"/>
  </cols>
  <sheetData>
    <row r="1">
      <c r="A1" t="s" s="4"><v>0</v></c>
    </row>
    <row r="2">
      <c r="A2" t="s" s="0"><v></v></c>
    </row>
    <row r="3">
      <c r="A3" t="s" s="4"><v>1</v></c>
      <c r="B3" t="s" s="4"><v>2</v></c>
      <c r="C3" t="s" s="4"><v>3</v></c>
      <c r="D3" t="s" s="4"><v>4</v></c>
      <c r="E3" t="s" s="4"><v>5</v></c>
      <c r="F3" t="s" s="4"><v>6</v></c>
      <c r="G3" t="s" s="4"><v>7</v></c>
      <c r="H3" t="s" s="4"><v>8</v></c>
    </row>
    <row r="4">
      <c r="A4" t="s" s="1"><v></v></c>
      <c r="B4" t="s" s="1"><v></v></c>
      <c r="C4" t="s" s="1"><v></v></c>
      <c r="D4" t="s" s="1"><v></v></c>
      <c r="E4" t="s" s="1"><v></v></c>
      <c r="F4" t="s" s="1"><v></v></c>
      <c r="G4" t="s" s="1"><v></v></c>
      <c r="H4" t="s" s="1"><v></v></c>
    </row>
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''
    with open(os.path.join(work_dir, 'xl', 'worksheets', 'sheet5.xml'), 'w', encoding='utf-8') as f:
        f.write(sheet5_xml)

    # Add 使用说明 sheet at position 6
    # For simplicity, let's keep it to 5 sheets but add instructions to sheet1 title

    output = os.path.join(OUTPUT_DIR, 'F10_团队出海战略台账.xlsx')
    pack_xlsx(work_dir, output)
    return output


# ─────────────────────────────────────────────────────────────────────────────
# FILE 2: 出海投资回报预估.xlsx
# ─────────────────────────────────────────────────────────────────────────────
def build_file2(work_dir):
    print("Building File 2: 出海投资回报预估.xlsx")
    copy_template(work_dir)

    sheets = ['成本输入表', '收入预测模型', 'ROI/IRR计算', '盈亏平衡分析', '三场景对比']
    update_workbook(work_dir, sheets)
    update_workbook_rels(work_dir, 5)
    update_content_types(work_dir, 5)

    # Create sheet XML files
    for i in range(2, 6):
        shutil.copy(os.path.join(work_dir, 'xl', 'worksheets', 'sheet1.xml'),
                    os.path.join(work_dir, 'xl', 'worksheets', f'sheet{i}.xml'))

    # Shared strings
    ss2_strings = [
        # Sheet1 成本输入表
        '出海投资回报预估', '成本输入表', '成本类别', '成本项', '金额(万元)', '备注',
        '固定成本', '人员成本', '设备折旧', '办公室租金', '许可证/资质',
        '变动成本', '营销费用', '物流成本', '关税/贸易壁垒', '本地化运营',
        '机会成本', '放弃的国内收益', '沉没成本估算',
        # Sheet2 收入预测模型
        '收入预测模型', '项目', '第1年', '第2年', '第3年', '第4年', '第5年',
        '客户数量', '单客收入(万元)', '总收入', '增长率(%)',
        # Sheet3 ROI/IRR计算
        'ROI/IRR计算', '指标', '数值', '说明',
        '净现值(NPV)', '内部收益率(IRR)', '投资回收期(年)', 'ROI(%)',
        '折现率(%)', '初始投资(万元)', '年度现金流(万元)',
        # Sheet4 盈亏平衡分析
        '盈亏平衡分析', '参数', '数值', '单位',
        '固定成本', '变动成本率(%)', '单价(万元)', '盈亏平衡点(单位)',
        '当前销量', '安全边际(%)', '目标利润(万元)',
        # Sheet5 三场景对比
        '三场景对比', '指标', '乐观场景', '中性场景', '悲观场景',
        '市场渗透率(%)', '年增长率(%)', '毛利率(%)', '市占率目标(%)',
        '年收入(万元)', '年利润(万元)', '累计现金流(万元)', 'IRR(%)',
    ]

    ss2 = build_shared_strings(ss2_strings)
    with open(os.path.join(work_dir, 'xl', 'sharedStrings.xml'), 'w', encoding='utf-8') as f:
        f.write(ss2)

    # Index mapping for sheet1 (成本输入表):
    # 0=出海投资回报预估, 1=成本输入表, 2=成本类别, 3=成本项, 4=金额(万元), 5=备注,
    # 6=固定成本, 7=人员成本, 8=设备折旧, 9=办公室租金, 10=许可证/资质,
    # 11=变动成本, 12=营销费用, 13=物流成本, 14=关税/贸易壁垒, 15=本地化运营,
    # 16=机会成本, 17=放弃的国内收益, 18=沉没成本估算

    sheet1_xml = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"><pane ySplit="5" topLeftCell="A6" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols>
    <col min="1" max="1" width="14" customWidth="1"/>
    <col min="2" max="2" width="20" customWidth="1"/>
    <col min="3" max="3" width="14" customWidth="1"/>
    <col min="4" max="4" width="20" customWidth="1"/>
  </cols>
  <sheetData>
    <row r="1">
      <c r="A1" t="s" s="4"><v>0</v></c>
    </row>
    <row r="2">
      <c r="A2" t="s" s="0"><v></v></c>
    </row>
    <row r="3">
      <c r="A3" t="s" s="4"><v>2</v></c>
      <c r="B3" t="s" s="4"><v>3</v></c>
      <c r="C3" t="s" s="4"><v>4</v></c>
      <c r="D3" t="s" s="4"><v>5</v></c>
    </row>
    <!-- Fixed Cost category header -->
    <row r="4">
      <c r="A4" t="s" s="4"><v>6</v></c>
      <c r="B4" t="s" s="4"><v></v></c>
      <c r="C4" t="s" s="1"><v></v></c>
      <c r="D4" t="s" s="1"><v></v></c>
    </row>
    <row r="5">
      <c r="A5" t="s" s="1"><v>7</v></c>
      <c r="B5" t="s" s="1"><v></v></c>
      <c r="C5" s="5"><v>500</v></c>
      <c r="D5" t="s" s="1"><v></v></c>
    </row>
    <row r="6">
      <c r="A6" t="s" s="1"><v>8</v></c>
      <c r="B6" t="s" s="1"><v></v></c>
      <c r="C6" s="5"><v>100</v></c>
      <c r="D6" t="s" s="1"><v></v></c>
    </row>
    <row r="7">
      <c r="A7" t="s" s="1"><v>9</v></c>
      <c r="B7" t="s" s="1"><v></v></c>
      <c r="C7" s="5"><v>200</v></c>
      <c r="D7" t="s" s="1"><v></v></c>
    </row>
    <row r="8">
      <c r="A8" t="s" s="1"><v>10</v></c>
      <c r="B8" t="s" s="1"><v></v></c>
      <c r="C8" s="5"><v>80</v></c>
      <c r="D8" t="s" s="1"><v></v></c>
    </row>
    <!-- Variable Cost category -->
    <row r="9">
      <c r="A9" t="s" s="4"><v>11</v></c>
      <c r="B9" t="s" s="4"><v></v></c>
      <c r="C9" t="s" s="1"><v></v></c>
      <c r="D9" t="s" s="1"><v></v></c>
    </row>
    <row r="10">
      <c r="A10" t="s" s="1"><v>12</v></c>
      <c r="B10" t="s" s="1"><v></v></c>
      <c r="C10" s="5"><v>300</v></c>
      <c r="D10" t="s" s="1"><v></v></c>
    </row>
    <row r="11">
      <c r="A11" t="s" s="1"><v>13</v></c>
      <c r="B11" t="s" s="1"><v></v></c>
      <c r="C11" s="5"><v>150</v></c>
      <c r="D11" t="s" s="1"><v></v></c>
    </row>
    <row r="12">
      <c r="A12" t="s" s="1"><v>14</v></c>
      <c r="B12" t="s" s="1"><v></v></c>
      <c r="C12" s="5"><v>100</v></c>
      <c r="D12" t="s" s="1"><v></v></c>
    </row>
    <row r="13">
      <c r="A13" t="s" s="1"><v>15</v></c>
      <c r="B13" t="s" s="1"><v></v></c>
      <c r="C13" s="5"><v>50</v></c>
      <c r="D13" t="s" s="1"><v></v></c>
    </row>
    <!-- Opportunity Cost category -->
    <row r="14">
      <c r="A14" t="s" s="4"><v>16</v></c>
      <c r="B14" t="s" s="4"><v></v></c>
      <c r="C14" t="s" s="1"><v></v></c>
      <c r="D14" t="s" s="1"><v></v></c>
    </row>
    <row r="15">
      <c r="A15" t="s" s="1"><v>17</v></c>
      <c r="B15" t="s" s="1"><v></v></c>
      <c r="C15" s="5"><v>200</v></c>
      <c r="D15" t="s" s="1"><v></v></c>
    </row>
    <row r="16">
      <c r="A16" t="s" s="1"><v>18</v></c>
      <c r="B16" t="s" s="1"><v></v></c>
      <c r="C16" s="5"><v>50</v></c>
      <c r="D16" t="s" s="1"><v></v></c>
    </row>
    <!-- Total row -->
    <row r="17">
      <c r="A17" t="s" s="4"><v>2</v></c>
      <c r="C17" s="6"><f>SUM(C5:C8)+SUM(C10:C13)+SUM(C15:C16)</f><v></v></c>
    </row>
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''
    with open(os.path.join(work_dir, 'xl', 'worksheets', 'sheet1.xml'), 'w', encoding='utf-8') as f:
        f.write(sheet1_xml)

    # Sheet2 收入预测模型
    # Indices for sheet2: 0=出海投资回报预估 already used; 19=收入预测模型, 20=项目, 21=第1年...
    ss2_s2 = build_shared_strings([
        '出海投资回报预估', '收入预测模型', '项目', '第1年', '第2年', '第3年', '第4年', '第5年',
        '客户数量', '单客收入(万元)', '总收入', '增长率(%)',
    ])
    with open(os.path.join(work_dir, 'xl', 'sharedStrings.xml'), 'w', encoding='utf-8') as f:
        f.write(ss2_s2)

    # indices: 0=出海投资回报预估, 1=收入预测模型, 2=项目, 3=第1年, 4=第2年, 5=第3年, 6=第4年, 7=第5年,
    # 8=客户数量, 9=单客收入(万元), 10=总收入, 11=增长率(%)

    sheet2_xml = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"><pane ySplit="5" topLeftCell="A6" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols>
    <col min="1" max="1" width="16" customWidth="1"/>
    <col min="2" max="2" width="12" customWidth="1"/>
    <col min="3" max="3" width="12" customWidth="1"/>
    <col min="4" max="4" width="12" customWidth="1"/>
    <col min="5" max="5" width="12" customWidth="1"/>
    <col min="6" max="6" width="12" customWidth="1"/>
    <col min="7" max="7" width="12" customWidth="1"/>
    <col min="8" max="8" width="12" customWidth="1"/>
  </cols>
  <sheetData>
    <row r="1">
      <c r="A1" t="s" s="4"><v>0</v></c>
    </row>
    <row r="2">
      <c r="A2" t="s" s="0"><v></v></c>
    </row>
    <row r="3">
      <c r="A3" t="s" s="4"><v>2</v></c>
      <c r="B3" t="s" s="4"><v>3</v></c>
      <c r="C3" t="s" s="4"><v>4</v></c>
      <c r="D3" t="s" s="4"><v>5</v></c>
      <c r="E3" t="s" s="4"><v>6</v></c>
      <c r="F3" t="s" s="4"><v>7</v></c>
      <c r="G3" t="s" s="4"><v>8</v></c>
    </row>
    <row r="4">
      <c r="A4" t="s" s="4"><v>8</v></c>
      <c r="B4" s="9"><v>100</v></c>
      <c r="C4" s="9"><v>150</v></c>
      <c r="D4" s="9"><v>220</v></c>
      <c r="E4" s="9"><v>300</v></c>
      <c r="F4" s="9"><v>380</v></c>
      <c r="G4" s="9"><v>450</v></c>
    </row>
    <row r="5">
      <c r="A5" t="s" s="4"><v>9</v></c>
      <c r="B5" s="5"><v>2.5</v></c>
      <c r="C5" s="5"><v>2.8</v></c>
      <c r="D5" s="5"><v>3.0</v></c>
      <c r="E5" s="5"><v>3.2</v></c>
      <c r="F5" s="5"><v>3.5</v></c>
      <c r="G5" s="5"><v>3.8</v></c>
    </row>
    <row r="6">
      <c r="A6" t="s" s="4"><v>10</v></c>
      <c r="B6" s="6"><f>B4*B5</f><v></v></c>
      <c r="C6" s="6"><f>C4*C5</f><v></v></c>
      <c r="D6" s="6"><f>D4*D5</f><v></v></c>
      <c r="E6" s="6"><f>E4*E5</f><v></v></c>
      <c r="F6" s="6"><f>F4*F5</f><v></v></c>
      <c r="G6" s="6"><f>G4*G5</f><v></v></c>
    </row>
    <row r="7">
      <c r="A7" t="s" s="4"><v>11</v></c>
      <c r="B7" t="s" s="1"><v></v></c>
      <c r="C7" s="8"><f>IF(B6=0,0,C6/B6-1)</f><v></v></c>
      <c r="D7" s="8"><f>IF(C6=0,0,D6/C6-1)</f><v></v></c>
      <c r="E7" s="8"><f>IF(D6=0,0,E6/D6-1)</f><v></v></c>
      <c r="F7" s="8"><f>IF(E6=0,0,F6/E6-1)</f><v></v></c>
      <c r="G7" s="8"><f>IF(F6=0,0,G6/F6-1)</f><v></v></c>
    </row>
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''
    with open(os.path.join(work_dir, 'xl', 'worksheets', 'sheet2.xml'), 'w', encoding='utf-8') as f:
        f.write(sheet2_xml)

    # Sheet3 ROI/IRR计算
    ss2_s3 = build_shared_strings([
        '出海投资回报预估', 'ROI/IRR计算', '指标', '数值', '说明',
        '净现值(NPV)', '内部收益率(IRR)', '投资回收期(年)', 'ROI(%)',
        '折现率(%)', '初始投资(万元)', '年度现金流(万元)',
    ])
    # indices: 0=出海投资回报预估, 1=ROI/IRR计算, 2=指标, 3=数值, 4=说明,
    # 5=净现值(NPV), 6=内部收益率(IRR), 7=投资回收期(年), 8=ROI(%),
    # 9=折现率(%), 10=初始投资(万元), 11=年度现金流(万元)
    with open(os.path.join(work_dir, 'xl', 'sharedStrings.xml'), 'w', encoding='utf-8') as f:
        f.write(ss2_s3)

    sheet3_xml = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"/></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols>
    <col min="1" max="1" width="20" customWidth="1"/>
    <col min="2" max="2" width="14" customWidth="1"/>
    <col min="3" max="3" width="24" customWidth="1"/>
  </cols>
  <sheetData>
    <row r="1">
      <c r="A1" t="s" s="4"><v>0</v></c>
    </row>
    <row r="2">
      <c r="A2" t="s" s="0"><v></v></c>
    </row>
    <row r="3">
      <c r="A3" t="s" s="4"><v>2</v></c>
      <c r="B3" t="s" s="4"><v>3</v></c>
      <c r="C3" t="s" s="4"><v>4</v></c>
    </row>
    <row r="4">
      <c r="A4" t="s" s="1"><v>9</v></c>
      <c r="B4" s="7"><v>0.10</v></c>
      <c r="C4" t="s" s="0"><v></v></c>
    </row>
    <row r="5">
      <c r="A5" t="s" s="1"><v>10</v></c>
      <c r="B5" s="5"><v>1680</v></c>
      <c r="C5" t="s" s="0"><v></v></c>
    </row>
    <row r="6">
      <c r="A6" t="s" s="1"><v>11</v></c>
      <c r="B6" s="5"><v>400</v></c>
      <c r="C4" t="s" s="0"><v></v></c>
    </row>
    <row r="7">
      <c r="A7" t="s" s="4"><v>5</v></c>
      <c r="B7" s="6"><f>NPV(B4,B6:B10)+B5</f><v></v></c>
      <c r="C7" t="s" s="0"><v></v></c>
    </row>
    <row r="8">
      <c r="A8" t="s" s="4"><v>6</v></c>
      <c r="B8" s="8"><f>IRR(B5:B10)</f><v></v></c>
      <c r="C8" t="s" s="0"><v></v></c>
    </row>
    <row r="9">
      <c r="A9" t="s" s="4"><v>7</v></c>
      <c r="B9" s="6"><f>IF(B7&gt;0,MATCH(TRUE,ARRAYFORMULA(B6:B10&gt;=0),0),&quot;未回收&quot;)</f><v></v></c>
      <c r="C9" t="s" s="0"><v></v></c>
    </row>
    <row r="10">
      <c r="A10" t="s" s="4"><v>8</v></c>
      <c r="B10" s="8"><f>(B7/B5)</f><v></v></c>
      <c r="C10" t="s" s="0"><v></v></c>
    </row>
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''
    with open(os.path.join(work_dir, 'xl', 'worksheets', 'sheet3.xml'), 'w', encoding='utf-8') as f:
        f.write(sheet3_xml)

    # Sheet4 盈亏平衡分析
    ss2_s4 = build_shared_strings([
        '出海投资回报预估', '盈亏平衡分析', '参数', '数值', '单位',
        '固定成本', '变动成本率(%)', '单价(万元)', '盈亏平衡点(单位)',
        '当前销量', '安全边际(%)', '目标利润(万元)',
    ])
    # 0=出海投资回报预估, 1=盈亏平衡分析, 2=参数, 3=数值, 4=单位,
    # 5=固定成本, 6=变动成本率(%), 7=单价(万元), 8=盈亏平衡点(单位),
    # 9=当前销量, 10=安全边际(%), 11=目标利润(万元)
    with open(os.path.join(work_dir, 'xl', 'sharedStrings.xml'), 'w', encoding='utf-8') as f:
        f.write(ss2_s4)

    sheet4_xml = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"/></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols>
    <col min="1" max="1" width="20" customWidth="1"/>
    <col min="2" max="2" width="14" customWidth="1"/>
    <col min="3" max="3" width="12" customWidth="1"/>
  </cols>
  <sheetData>
    <row r="1">
      <c r="A1" t="s" s="4"><v>0</v></c>
    </row>
    <row r="2">
      <c r="A2" t="s" s="0"><v></v></c>
    </row>
    <row r="3">
      <c r="A3" t="s" s="4"><v>2</v></c>
      <c r="B3" t="s" s="4"><v>3</v></c>
      <c r="C3" t="s" s="4"><v>4</v></c>
    </row>
    <row r="4">
      <c r="A4" t="s" s="1"><v>5</v></c>
      <c r="B4" s="5"><v>880</v></c>
      <c r="C4" t="s" s="0"><v>万元</v></c>
    </row>
    <row r="5">
      <c r="A5" t="s" s="1"><v>6</v></c>
      <c r="B5" s="7"><v>0.60</v></c>
      <c r="C5" t="s" s="0"><v>%</v></c>
    </row>
    <row r="6">
      <c r="A6" t="s" s="1"><v>7</v></c>
      <c r="B6" s="5"><v>3.0</v></c>
      <c r="C6" t="s" s="0"><v>万元/单位</v></c>
    </row>
    <row r="7">
      <c r="A7" t="s" s="4"><v>8</v></c>
      <c r="B7" s="6"><f>B4/(B6*(1-B5))</f><v></v></c>
      <c r="C7" t="s" s="0"><v>单位</v></c>
    </row>
    <row r="8">
      <c r="A8" t="s" s="1"><v>9</v></c>
      <c r="B8" s="9"><v>500</v></c>
      <c r="C8" t="s" s="0"><v>单位</v></c>
    </row>
    <row r="9">
      <c r="A9" t="s" s="4"><v>10</v></c>
      <c r="B9" s="8"><f>IF(B7=0,0,(B8-B7)/B7)</f><v></v></c>
      <c r="C9" t="s" s="0"><v></v></c>
    </row>
    <row r="10">
      <c r="A10" t="s" s="1"><v>11</v></c>
      <c r="B10" s="5"><v>500</v></c>
      <c r="C10" t="s" s="0"><v>万元</v></c>
    </row>
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''
    with open(os.path.join(work_dir, 'xl', 'worksheets', 'sheet4.xml'), 'w', encoding='utf-8') as f:
        f.write(sheet4_xml)

    # Sheet5 三场景对比
    ss2_s5 = build_shared_strings([
        '出海投资回报预估', '三场景对比', '指标', '乐观场景', '中性场景', '悲观场景',
        '市场渗透率(%)', '年增长率(%)', '毛利率(%)', '市占率目标(%)',
        '年收入(万元)', '年利润(万元)', '累计现金流(万元)', 'IRR(%)',
    ])
    with open(os.path.join(work_dir, 'xl', 'sharedStrings.xml'), 'w', encoding='utf-8') as f:
        f.write(ss2_s5)

    # indices: 0=出海投资回报预估, 1=三场景对比, 2=指标, 3=乐观场景, 4=中性场景, 5=悲观场景,
    # 6=市场渗透率(%), 7=年增长率(%), 8=毛利率(%), 9=市占率目标(%),
    # 10=年收入(万元), 11=年利润(万元), 12=累计现金流(万元), 13=IRR(%)
    sheet5_xml = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"/></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols>
    <col min="1" max="1" width="18" customWidth="1"/>
    <col min="2" max="2" width="14" customWidth="1"/>
    <col min="3" max="3" width="14" customWidth="1"/>
    <col min="4" max="4" width="14" customWidth="1"/>
  </cols>
  <sheetData>
    <row r="1">
      <c r="A1" t="s" s="4"><v>0</v></c>
    </row>
    <row r="2">
      <c r="A2" t="s" s="0"><v></v></c>
    </row>
    <row r="3">
      <c r="A3" t="s" s="4"><v>2</v></c>
      <c r="B3" t="s" s="4"><v>3</v></c>
      <c r="C3" t="s" s="4"><v>4</v></c>
      <c r="D3" t="s" s="4"><v>5</v></c>
    </row>
    <row r="4">
      <c r="A4" t="s" s="1"><v>6</v></c>
      <c r="B4" s="7"><v>0.15</v></c>
      <c r="C4" s="7"><v>0.08</v></c>
      <c r="D4" s="7"><v>0.03</v></c>
    </row>
    <row r="5">
      <c r="A5" t="s" s="1"><v>7</v></c>
      <c r="B5" s="7"><v>0.30</v></c>
      <c r="C5" s="7"><v>0.18</v></c>
      <c r="D5" s="7"><v>0.08</v></c>
    </row>
    <row r="6">
      <c r="A6" t="s" s="1"><v>8</v></c>
      <c r="B6" s="7"><v>0.55</v></c>
      <c r="C6" s="7"><v>0.45</v></c>
      <c r="D6" s="7"><v>0.35</v></c>
    </row>
    <row r="7">
      <c r="A7" t="s" s="1"><v>9</v></c>
      <c r="B7" s="7"><v>0.10</v></c>
      <c r="C7" s="7"><v>0.05</v></c>
      <c r="D7" s="7"><v>0.02</v></c>
    </row>
    <row r="8">
      <c r="A8" t="s" s="4"><v>10</v></c>
      <c r="B8" s="6"><f>3000*(1+B5)</f><v></v></c>
      <c r="C8" s="6"><f>3000*(1+C5)</f><v></v></c>
      <c r="D8" s="6"><f>3000*(1+D5)</f><v></v></c>
    </row>
    <row r="9">
      <c r="A9" t="s" s="4"><v>11</v></c>
      <c r="B9" s="6"><f>B8*B6</f><v></v></c>
      <c r="C9" s="6"><f>C8*C6</f><v></v></c>
      <c r="D9" s="6"><f>D8*D6</f><v></v></c>
    </row>
    <row r="10">
      <c r="A10" t="s" s="4"><v>12</v></c>
      <c r="B10" s="6"><f>B9*5-1680</f><v></v></c>
      <c r="C10" s="6"><f>C9*5-1680</f><v></v></c>
      <c r="D10" s="6"><f>D9*5-1680</f><v></v></c>
    </row>
    <row r="11">
      <c r="A11" t="s" s="4"><v>13</v></c>
      <c r="B11" s="8"><f>IF(B10&lt;0,0,IRR({-1680},B9,B9,B9,B9,B9))</f><v></v></c>
      <c r="C11" s="8"><f>IF(C10&lt;0,0,IRR({-1680},C9,C9,C9,C9,C9))</f><v></v></c>
      <c r="D11" s="8"><f>IF(D10&lt;0,0,IRR({-1680},D9,D9,D9,D9,D9))</f><v></v></c>
    </row>
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''
    with open(os.path.join(work_dir, 'xl', 'worksheets', 'sheet5.xml'), 'w', encoding='utf-8') as f:
        f.write(sheet5_xml)

    output = os.path.join(OUTPUT_DIR, '出海投资回报预估.xlsx')
    pack_xlsx(work_dir, output)
    return output


# ─────────────────────────────────────────────────────────────────────────────
# FILE 3: 配套表单_空表.xlsx
# ─────────────────────────────────────────────────────────────────────────────
def build_file3(work_dir):
    print("Building File 3: 配套表单_空表.xlsx")
    copy_template(work_dir)

    sheets = ['出海模式自测表', '五维市场评估矩阵', '验证方案设计表', 'One-Page Strategy Brief', '战略动态追踪表']
    update_workbook(work_dir, sheets)
    update_workbook_rels(work_dir, 5)
    update_content_types(work_dir, 5)

    for i in range(2, 6):
        shutil.copy(os.path.join(work_dir, 'xl', 'worksheets', 'sheet1.xml'),
                    os.path.join(work_dir, 'xl', 'worksheets', f'sheet{i}.xml'))

    # Shared strings
    ss3_strings = [
        # Sheet1
        '配套表单_空表', '出海模式自测表', '问题', '选项', '得分', '说明',
        '您的团队规模是?', '1-10人/11-50人/51-200人/200人以上',
        '您的主要产品/服务类型?', '标准化产品/定制化服务/软硬件结合/平台型',
        '您目标市场的法规环境?', '非常开放/较为开放/限制较多/高度限制',
        '您对本地化运营的需求?', '低(可远程)/中(需本地团队)/高(需深度本地化)',
        '您可承受的投资周期?', '1年以内/1-3年/3-5年/5年以上',
        '您的出海经验水平?', '初次出海/有过小规模尝试/有成熟经验/全球化企业',
        '总分', '建议出海模式',
        # Sheet2
        '五维市场评估矩阵', '评估维度', '权重(%)', '市场A', '市场B', '市场C', '市场D', '市场E',
        '市场规模', '市场增速', '竞争强度', '政策环境', '进入壁垒',
        '综合得分',
        # Sheet3
        '验证方案设计表', '验证假设', '验证目标', '验证方法', '成功标准', '所需资源',
        '时间周期', '负责人', '风险预案',
        # Sheet4
        'One-Page Strategy Brief', '战略主题', '市场选择', '核心假设', '关键验证里程碑',
        '资源投入预算', '风险与应对', '决策标准', '审核日期',
        # Sheet5
        '战略动态追踪表', '更新日期', '市场/战略项', '上次状态', '当前状态', '变化趋势',
        '关键驱动因素', '下一步行动', '负责人', '备注',
    ]

    ss3 = build_shared_strings(ss3_strings)
    with open(os.path.join(work_dir, 'xl', 'sharedStrings.xml'), 'w', encoding='utf-8') as f:
        f.write(ss3)

    # Indices Sheet1:
    # 0=配套表单_空表, 1=出海模式自测表, 2=问题, 3=选项, 4=得分, 5=说明,
    # 6-12 = questions, 13=总分, 14=建议出海模式

    sheet1_xml = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"><pane ySplit="4" topLeftCell="A5" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols>
    <col min="1" max="1" width="32" customWidth="1"/>
    <col min="2" max="2" width="30" customWidth="1"/>
    <col min="3" max="3" width="10" customWidth="1"/>
    <col min="4" max="4" width="24" customWidth="1"/>
  </cols>
  <sheetData>
    <row r="1">
      <c r="A1" t="s" s="4"><v>0</v></c>
    </row>
    <row r="2">
      <c r="A2" t="s" s="0"><v></v></c>
    </row>
    <row r="3">
      <c r="A3" t="s" s="4"><v>2</v></c>
      <c r="B3" t="s" s="4"><v>3</v></c>
      <c r="C3" t="s" s="4"><v>4</v></c>
      <c r="D3" t="s" s="4"><v>5</v></c>
    </row>
    <row r="4">
      <c r="A4" t="s" s="1"><v>6</v></c>
      <c r="B4" t="s" s="1"><v></v></c>
      <c r="C4" s="9"><v>0</v></c>
      <c r="D4" t="s" s="1"><v></v></c>
    </row>
    <row r="5">
      <c r="A5" t="s" s="1"><v>7</v></c>
      <c r="B5" t="s" s="1"><v></v></c>
      <c r="C5" s="9"><v>0</v></c>
      <c r="D5" t="s" s="1"><v></v></c>
    </row>
    <row r="6">
      <c r="A6" t="s" s="1"><v>8</v></c>
      <c r="B6" t="s" s="1"><v></v></c>
      <c r="C6" s="9"><v>0</v></c>
      <c r="D6" t="s" s="1"><v></v></c>
    </row>
    <row r="7">
      <c r="A7" t="s" s="1"><v>9</v></c>
      <c r="B7" t="s" s="1"><v></v></c>
      <c r="C7" s="9"><v>0</v></c>
      <c r="D7" t="s" s="1"><v></v></c>
    </row>
    <row r="8">
      <c r="A8" t="s" s="1"><v>10</v></c>
      <c r="B8" t="s" s="1"><v></v></c>
      <c r="C8" s="9"><v>0</v></c>
      <c r="D8" t="s" s="1"><v></v></c>
    </row>
    <row r="9">
      <c r="A9" t="s" s="1"><v>11</v></c>
      <c r="B9" t="s" s="1"><v></v></c>
      <c r="C9" s="9"><v>0</v></c>
      <c r="D9" t="s" s="1"><v></v></c>
    </row>
    <row r="10">
      <c r="A10" t="s" s="4"><v>13</v></c>
      <c r="C10" s="10"><f>SUM(C4:C9)</f><v></v></c>
    </row>
    <row r="11">
      <c r="A11" t="s" s="4"><v>14</v></c>
      <c r="C11" t="s" s="1"><v></v></c>
    </row>
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''
    with open(os.path.join(work_dir, 'xl', 'worksheets', 'sheet1.xml'), 'w', encoding='utf-8') as f:
        f.write(sheet1_xml)

    # Sheet2 五维市场评估矩阵
    ss3_s2 = build_shared_strings([
        '配套表单_空表', '五维市场评估矩阵', '评估维度', '权重(%)', '市场A', '市场B', '市场C', '市场D', '市场E',
        '市场规模', '市场增速', '竞争强度', '政策环境', '进入壁垒',
        '综合得分',
    ])
    # indices: 0=配套表单_空表, 1=五维市场评估矩阵, 2=评估维度, 3=权重(%), 4=市场A, 5=市场B, 6=市场C, 7=市场D, 8=市场E,
    # 9=市场规模, 10=市场增速, 11=竞争强度, 12=政策环境, 13=进入壁垒, 14=综合得分
    with open(os.path.join(work_dir, 'xl', 'sharedStrings.xml'), 'w', encoding='utf-8') as f:
        f.write(ss3_s2)

    sheet2_xml = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"><pane ySplit="4" topLeftCell="A5" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols>
    <col min="1" max="1" width="16" customWidth="1"/>
    <col min="2" max="2" width="12" customWidth="1"/>
    <col min="3" max="3" width="12" customWidth="1"/>
    <col min="4" max="4" width="12" customWidth="1"/>
    <col min="5" max="5" width="12" customWidth="1"/>
    <col min="6" max="6" width="12" customWidth="1"/>
    <col min="7" max="7" width="12" customWidth="1"/>
    <col min="8" max="8" width="12" customWidth="1"/>
  </cols>
  <sheetData>
    <row r="1">
      <c r="A1" t="s" s="4"><v>0</v></c>
    </row>
    <row r="2">
      <c r="A2" t="s" s="0"><v></v></c>
    </row>
    <row r="3">
      <c r="A3" t="s" s="4"><v>2</v></c>
      <c r="B3" t="s" s="4"><v>3</v></c>
      <c r="C3" t="s" s="4"><v>4</v></c>
      <c r="D3" t="s" s="4"><v>5</v></c>
      <c r="E3" t="s" s="4"><v>6</v></c>
      <c r="F3" t="s" s="4"><v>7</v></c>
      <c r="G3" t="s" s="4"><v>8</v></c>
    </row>
    <row r="4">
      <c r="A4" t="s" s="1"><v>9</v></c>
      <c r="B4" s="7"><v>0.30</v></c>
      <c r="C4" s="9"><v>0</v></c>
      <c r="D4" s="9"><v>0</v></c>
      <c r="E4" s="9"><v>0</v></c>
      <c r="F4" s="9"><v>0</v></c>
      <c r="G4" s="9"><v>0</v></c>
    </row>
    <row r="5">
      <c r="A5" t="s" s="1"><v>10</v></c>
      <c r="B5" s="7"><v>0.25</v></c>
      <c r="C5" s="9"><v>0</v></c>
      <c r="D5" s="9"><v>0</v></c>
      <c r="E5" s="9"><v>0</v></c>
      <c r="F5" s="9"><v>0</v></c>
      <c r="G5" s="9"><v>0</v></c>
    </row>
    <row r="6">
      <c r="A6" t="s" s="1"><v>11</v></c>
      <c r="B6" s="7"><v>0.15</v></c>
      <c r="C6" s="9"><v>0</v></c>
      <c r="D6" s="9"><v>0</v></c>
      <c r="E6" s="9"><v>0</v></c>
      <c r="F6" s="9"><v>0</v></c>
      <c r="G6" s="9"><v>0</v></c>
    </row>
    <row r="7">
      <c r="A7" t="s" s="1"><v>12</v></c>
      <c r="B7" s="7"><v>0.15</v></c>
      <c r="C7" s="9"><v>0</v></c>
      <c r="D7" s="9"><v>0</v></c>
      <c r="E7" s="9"><v>0</v></c>
      <c r="F7" s="9"><v>0</v></c>
      <c r="G7" s="9"><v>0</v></c>
    </row>
    <row r="8">
      <c r="A8" t="s" s="1"><v>13</v></c>
      <c r="B8" s="7"><v>0.15</v></c>
      <c r="C8" s="9"><v>0</v></c>
      <c r="D8" s="9"><v>0</v></c>
      <c r="E8" s="9"><v>0</v></c>
      <c r="F8" s="9"><v>0</v></c>
      <c r="G8" s="9"><v>0</v></c>
    </row>
    <row r="9">
      <c r="A9" t="s" s="4"><v>14</v></c>
      <c r="B9" t="s" s="0"><v></v></c>
      <c r="C9" s="6"><f>SUMPRODUCT(C4:C8,$B$4:$B$8)</f><v></v></c>
      <c r="D9" s="6"><f>SUMPRODUCT(D4:D8,$B$4:$B$8)</f><v></v></c>
      <c r="E9" s="6"><f>SUMPRODUCT(E4:E8,$B$4:$B$8)</f><v></v></c>
      <c r="F9" s="6"><f>SUMPRODUCT(F4:F8,$B$4:$B$8)</f><v></v></c>
      <c r="G9" s="6"><f>SUMPRODUCT(G4:G8,$B$4:$B$8)</f><v></v></c>
    </row>
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''
    with open(os.path.join(work_dir, 'xl', 'worksheets', 'sheet2.xml'), 'w', encoding='utf-8') as f:
        f.write(sheet2_xml)

    # Sheet3 验证方案设计表
    ss3_s3 = build_shared_strings([
        '配套表单_空表', '验证方案设计表', '验证假设', '验证目标', '验证方法', '成功标准', '所需资源',
        '时间周期', '负责人', '风险预案',
    ])
    # 0=配套表单_空表, 1=验证方案设计表, 2=验证假设, 3=验证目标, 4=验证方法, 5=成功标准, 6=所需资源, 7=时间周期, 8=负责人, 9=风险预案
    with open(os.path.join(work_dir, 'xl', 'sharedStrings.xml'), 'w', encoding='utf-8') as f:
        f.write(ss3_s3)

    sheet3_xml = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"><pane ySplit="3" topLeftCell="A4" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols>
    <col min="1" max="1" width="20" customWidth="1"/>
    <col min="2" max="2" width="18" customWidth="1"/>
    <col min="3" max="3" width="16" customWidth="1"/>
    <col min="4" max="4" width="18" customWidth="1"/>
    <col min="5" max="5" width="16" customWidth="1"/>
    <col min="6" max="6" width="12" customWidth="1"/>
    <col min="7" max="7" width="10" customWidth="1"/>
    <col min="8" max="8" width="16" customWidth="1"/>
  </cols>
  <sheetData>
    <row r="1">
      <c r="A1" t="s" s="4"><v>0</v></c>
    </row>
    <row r="2">
      <c r="A2" t="s" s="0"><v></v></c>
    </row>
    <row r="3">
      <c r="A3" t="s" s="4"><v>2</v></c>
      <c r="B3" t="s" s="4"><v>3</v></c>
      <c r="C3" t="s" s="4"><v>4</v></c>
      <c r="D3" t="s" s="4"><v>5</v></c>
      <c r="E3" t="s" s="4"><v>6</v></c>
      <c r="F3" t="s" s="4"><v>7</v></c>
      <c r="G3" t="s" s="4"><v>8</v></c>
      <c r="H3" t="s" s="4"><v>9</v></c>
    </row>
    <row r="4">
      <c r="A4" t="s" s="1"><v></v></c>
      <c r="B4" t="s" s="1"><v></v></c>
      <c r="C4" t="s" s="1"><v></v></c>
      <c r="D4" t="s" s="1"><v></v></c>
      <c r="E4" t="s" s="1"><v></v></c>
      <c r="F4" t="s" s="1"><v></v></c>
      <c r="G4" t="s" s="1"><v></v></c>
      <c r="H4" t="s" s="1"><v></v></c>
    </row>
    <row r="5">
      <c r="A5" t="s" s="1"><v></v></c>
      <c r="B5" t="s" s="1"><v></v></c>
      <c r="C5" t="s" s="1"><v></v></c>
      <c r="D5" t="s" s="1"><v></v></c>
      <c r="E5" t="s" s="1"><v></v></c>
      <c r="F5" t="s" s="1"><v></v></c>
      <c r="G5" t="s" s="1"><v></v></c>
      <c r="H5" t="s" s="1"><v></v></c>
    </row>
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''
    with open(os.path.join(work_dir, 'xl', 'worksheets', 'sheet3.xml'), 'w', encoding='utf-8') as f:
        f.write(sheet3_xml)

    # Sheet4 One-Page Strategy Brief
    ss3_s4 = build_shared_strings([
        '配套表单_空表', 'One-Page Strategy Brief', '战略主题', '市场选择', '核心假设', '关键验证里程碑',
        '资源投入预算', '风险与应对', '决策标准', '审核日期',
    ])
    with open(os.path.join(work_dir, 'xl', 'sharedStrings.xml'), 'w', encoding='utf-8') as f:
        f.write(ss3_s4)

    sheet4_xml = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"/></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols>
    <col min="1" max="1" width="18" customWidth="1"/>
    <col min="2" max="2" width="30" customWidth="1"/>
    <col min="3" max="3" width="18" customWidth="1"/>
  </cols>
  <sheetData>
    <row r="1">
      <c r="A1" t="s" s="4"><v>0</v></c>
    </row>
    <row r="2">
      <c r="A2" t="s" s="0"><v></v></c>
    </row>
    <row r="3">
      <c r="A3" t="s" s="1"><v>2</v></c>
      <c r="B3" t="s" s="1"><v></v></c>
    </row>
    <row r="4">
      <c r="A4" t="s" s="1"><v>3</v></c>
      <c r="B4" t="s" s="1"><v></v></c>
    </row>
    <row r="5">
      <c r="A5" t="s" s="1"><v>4</v></c>
      <c r="B5" t="s" s="1"><v></v></c>
    </row>
    <row r="6">
      <c r="A6" t="s" s="1"><v>5</v></c>
      <c r="B6" t="s" s="1"><v></v></c>
    </row>
    <row r="7">
      <c r="A7" t="s" s="1"><v>6</v></c>
      <c r="B7" t="s" s="1"><v></v></c>
    </row>
    <row r="8">
      <c r="A8" t="s" s="1"><v>7</v></c>
      <c r="B8" t="s" s="1"><v></v></c>
    </row>
    <row r="9">
      <c r="A9" t="s" s="1"><v>8</v></c>
      <c r="B9" t="s" s="1"><v></v></c>
    </row>
    <row r="10">
      <c r="A10" t="s" s="1"><v>9</v></c>
      <c r="B10" t="s" s="1"><v></v></c>
    </row>
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''
    with open(os.path.join(work_dir, 'xl', 'worksheets', 'sheet4.xml'), 'w', encoding='utf-8') as f:
        f.write(sheet4_xml)

    # Sheet5 战略动态追踪表
    ss3_s5 = build_shared_strings([
        '配套表单_空表', '战略动态追踪表', '更新日期', '市场/战略项', '上次状态', '当前状态', '变化趋势',
        '关键驱动因素', '下一步行动', '负责人', '备注',
    ])
    with open(os.path.join(work_dir, 'xl', 'sharedStrings.xml'), 'w', encoding='utf-8') as f:
        f.write(ss3_s5)

    sheet5_xml = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"><pane ySplit="3" topLeftCell="A4" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols>
    <col min="1" max="1" width="12" customWidth="1"/>
    <col min="2" max="2" width="18" customWidth="1"/>
    <col min="3" max="3" width="14" customWidth="1"/>
    <col min="4" max="4" width="14" customWidth="1"/>
    <col min="5" max="5" width="12" customWidth="1"/>
    <col min="6" max="6" width="20" customWidth="1"/>
    <col min="7" max="7" width="18" customWidth="1"/>
    <col min="8" max="8" width="10" customWidth="1"/>
    <col min="9" max="9" width="18" customWidth="1"/>
  </cols>
  <sheetData>
    <row r="1">
      <c r="A1" t="s" s="4"><v>0</v></c>
    </row>
    <row r="2">
      <c r="A2" t="s" s="0"><v></v></c>
    </row>
    <row r="3">
      <c r="A3" t="s" s="4"><v>2</v></c>
      <c r="B3" t="s" s="4"><v>3</v></c>
      <c r="C3" t="s" s="4"><v>4</v></c>
      <c r="D3" t="s" s="4"><v>5</v></c>
      <c r="E3" t="s" s="4"><v>6</v></c>
      <c r="F3" t="s" s="4"><v>7</v></c>
      <c r="G3" t="s" s="4"><v>8</v></c>
      <c r="H3" t="s" s="4"><v>9</v></c>
    </row>
    <row r="4">
      <c r="A4" t="s" s="1"><v></v></c>
      <c r="B4" t="s" s="1"><v></v></c>
      <c r="C4" t="s" s="1"><v></v></c>
      <c r="D4" t="s" s="1"><v></v></c>
      <c r="E4" t="s" s="1"><v></v></c>
      <c r="F4" t="s" s="1"><v></v></c>
      <c r="G4" t="s" s="1"><v></v></c>
      <c r="H4" t="s" s="1"><v></v></c>
    </row>
    <row r="5">
      <c r="A5" t="s" s="1"><v></v></c>
      <c r="B5" t="s" s="1"><v></v></c>
      <c r="C5" t="s" s="1"><v></v></c>
      <c r="D5" t="s" s="1"><v></v></c>
      <c r="E5" t="s" s="1"><v></v></c>
      <c r="F5" t="s" s="1"><v></v></c>
      <c r="G5" t="s" s="1"><v></v></c>
      <c r="H5" t="s" s="1"><v></v></c>
    </row>
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''
    with open(os.path.join(work_dir, 'xl', 'worksheets', 'sheet5.xml'), 'w', encoding='utf-8') as f:
        f.write(sheet5_xml)

    output = os.path.join(OUTPUT_DIR, '配套表单_空表.xlsx')
    pack_xlsx(work_dir, output)
    return output


# ─────────────────────────────────────────────────────────────────────────────
# MAIN
# ─────────────────────────────────────────────────────────────────────────────
if __name__ == '__main__':
    os.makedirs(OUTPUT_DIR, exist_ok=True)

    # Use D:/temp as base for Windows
    BASE = "D:/temp"
    os.makedirs(BASE, exist_ok=True)
    for d in [f"{BASE}/xlsx_work1", f"{BASE}/xlsx_work2", f"{BASE}/xlsx_work3"]:
        import shutil as _sh
        if os.path.exists(d):
            _sh.rmtree(d)
    f1 = build_file1(f"{BASE}/xlsx_work1")
    f2 = build_file2(f"{BASE}/xlsx_work2")
    f3 = build_file3(f"{BASE}/xlsx_work3")

    print("\n=== ALL FILES CREATED ===")
    print(f"1. {f1}")
    print(f"2. {f2}")
    print(f"3. {f3}")
