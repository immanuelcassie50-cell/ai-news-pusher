# -*- coding: utf-8 -*-
import json, os, subprocess

# Load data from JSON
with open('/tmp/career_data/data.json', 'r', encoding='utf-8') as f:
    DATA = json.load(f)

ANCHORS = DATA['anchors']
QUESTIONS = [(q[0], q[1]) for q in DATA['questions']]
INTERPRETATIONS = DATA['interpretations']

OUT_DIR = '/tmp/xlsx_work_01'
OUT_FILE = '/d/新课开发/测评表单/新员工10大测评/01_职业锚自测.xlsx'
SKILL = '/c/Users/Administrator/.claude/skills/Excel表格处理/scripts'

NS = 'http://schemas.openxmlformats.org/spreadsheetml/2006/main'
NS_R = 'http://schemas.openxmlformats.org/officeDocument/2006/relationships'
NS_PKG = 'http://schemas.openxmlformats.org/package/2006/content-types'
NS_REL = 'http://schemas.openxmlformats.org/package/2006/relationships'
NS_AC = 'http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac'

def xesc(s):
    return s.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;')

ss = []
def add(s):
    idx = len(ss)
    ss.append(s)
    return idx

# ---- Shared strings ----
idx_title = add('职业锚自测')
idx_instr = add('请根据每句话与您真实想法的符合程度，在1-6之间选择（1=完全不重要，6=极其重要）')
idx_hdr_qno = add('题号')
idx_hdr_qt = add('题目内容')
idx_opt_hdrs = [add(str(i)) for i in range(1, 7)]
idx_hdr_dim = add('维度')
idx_qtexts = [add(q[1]) for q in QUESTIONS]

idx_dim_hdr = add('维度')
idx_avg_hdr = add('均分')
idx_lvl_hdr = add('等级')
idx_main = add('主锚')
idx_sec = add('辅锚')
idx_rpt = add('职业锚深度解读报告')
idx_type_h = add('职业锚类型')
idx_interp = add('综合解读')

idx_anchor_nms = [add(a['name']) for a in ANCHORS]

idx_interp_d = {}
for k, v in INTERPRETATIONS.items():
    idx_interp_d[k] = {kk: add(vv) for kk, vv in v.items()}

idx3_qno = add('题号')
idx3_qt = add('题目内容')
idx3_opt = [add('选项' + chr(65 + i)) for i in range(6)]
idx3_dim = add('维度标签')
idx3_rule = add('计分规则')
opt_labels = ['完全不重要（1分）', '比较不重要（2分）', '有点不重要（3分）',
               '有点重要（4分）', '比较重要（5分）', '极其重要（6分）']
idx_opt_lb = [add(o) for o in opt_labels]
idx_dim_lb = {a['key']: add(a['name']) for a in ANCHORS}
idx_scoring = add('6点量表，各选项分值1-6；求5题均值')

idx4_dim = add('维度')
idx4_range = add('均分范围')
idx4_title = add('解读标题')
idx4_det = add('详细解读')
idx4_high = add('高分行为特征')
idx4_low = add('低分行为特征')
idx4_risk = add('风险与盲区')
idx4_sup = add('支持策略')

print('Total shared strings:', len(ss))

# ---- Write sharedStrings.xml ----
ss_items = ''.join('<si><t>' + xesc(s) + '</t></si>' for s in ss)
ss_xml = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><sst xmlns="' + NS + '" count="' + str(len(ss)) + '" uniqueCount="' + str(len(ss)) + '">' + ss_items + '</sst>'
with open(OUT_DIR + '/xl/sharedStrings.xml', 'w', encoding='utf-8') as f:
    f.write(ss_xml)

# ---- Write styles.xml ----
fonts = ('<fonts xmlns="' + NS + '" count="5">'
         '<font><sz val="11"/><name val="微软雅黑"/><color rgb="00000000"/></font>'
         '<font><sz val="11"/><name val="微软雅黑"/><color rgb="000000FF"/></font>'
         '<font><sz val="11"/><name val="微软雅黑"/><color rgb="00008000"/></font>'
         '<font><b/><sz val="14"/><name val="微软雅黑"/><color rgb="00000000"/></font>'
         '<font><b/><sz val="11"/><name val="微软雅黑"/><color rgb="00000000"/></font>'
         '</fonts>')
numFmts = ('<numFmts xmlns="' + NS + '" count="1">'
           '<numFmt numFmtId="164" formatCode="$#,##0;($#,##0);&quot;-&quot;"/>'
           '</numFmts>')
fills = ('<fills xmlns="' + NS + '" count="3">'
         '<fill><patternFill patternType="none"/></fill>'
         '<fill><patternFill patternType="gray125"/></fill>'
         '<fill><patternFill patternType="solid"><fgColor rgb="00D3D3D3"/></patternFill></fill>'
         '</fills>')
borders = ('<borders xmlns="' + NS + '" count="1">'
           '<border><left/><right/><top/><bottom/><diagonal/></border>'
           '</borders>')
cellXfs = ('<cellXfs xmlns="' + NS + '" count="14">'
           '<xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/>'
           '<xf numFmtId="0" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1"/>'
           '<xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0" applyFont="1"/>'
           '<xf numFmtId="0" fontId="2" fillId="0" borderId="0" xfId="0" applyFont="1"/>'
           '<xf numFmtId="0" fontId="3" fillId="0" borderId="0" xfId="0" applyFont="1"/>'
           '<xf numFmtId="164" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>'
           '<xf numFmtId="164" fontId="0" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>'
           '<xf numFmtId="0" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1"/>'
           '<xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0" applyFont="1"/>'
           '<xf numFmtId="0" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1"/>'
           '<xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0" applyFont="1"/>'
           '<xf numFmtId="1" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>'
           '<xf numFmtId="0" fontId="1" fillId="2" borderId="0" xfId="0" applyFont="1" applyFill="1"/>'
           '<xf numFmtId="0" fontId="3" fillId="0" borderId="0" xfId="0" applyFont="1"><alignment wrapText="1"/></xf>'
           '</cellXfs>')
styles_xml = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><styleSheet xmlns="' + NS + '">' + numFmts + fonts + fills + borders + cellXfs + '</styleSheet>'
with open(OUT_DIR + '/xl/styles.xml', 'w', encoding='utf-8') as f:
    f.write(styles_xml)

# ---- Sheet 1: 填答 ----
s1 = []
s1.append('<cols xmlns="' + NS + '"><col min="1" max="1" width="8" customWidth="1"/><col min="2" max="2" width="55" customWidth="1"/><col min="3" max="8" width="10" customWidth="1"/><col min="9" max="9" width="14" customWidth="1"/></cols>')
s1.append('<sheetViews xmlns="' + NS + '"><sheetView workbookViewId="0"><pane ySplit="3" topLeftCell="A4" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>')
s1.append('<sheetData xmlns="' + NS + '">')
s1.append('<row r="1" ht="30" customHeight="1"><c r="A1" s="13"><f>IF(1=1,"职业锚自测","")</f><v></v></c></row>')
s1.append('<row r="2" ht="20" customHeight="1"><c r="A2" s="0"><f>IF(1=1,"请根据每句话与您真实想法的符合程度，在1-6之间选择（1=完全不重要，6=极其重要）","")</f><v></v></c></row>')
s1.append('<row r="3" ht="20" customHeight="1"><c r="A3" s="4"><v>' + str(idx_hdr_qno) + '</v></c><c r="B3" s="4"><v>' + str(idx_hdr_qt) + '</v></c><c r="C3" s="4"><v>' + str(idx_opt_hdrs[0]) + '</v></c><c r="D3" s="4"><v>' + str(idx_opt_hdrs[1]) + '</v></c><c r="E3" s="4"><v>' + str(idx_opt_hdrs[2]) + '</v></c><c r="F3" s="4"><v>' + str(idx_opt_hdrs[3]) + '</v></c><c r="G3" s="4"><v>' + str(idx_opt_hdrs[4]) + '</v></c><c r="H3" s="4"><v>' + str(idx_opt_hdrs[5]) + '</v></c><c r="I3" s="4"><v>' + str(idx_hdr_dim) + '</v></c></row>')
for i, (qk, qt) in enumerate(QUESTIONS):
    row = i + 4
    for ki, a in enumerate(ANCHORS):
        if a['key'] == qk:
            di = idx_anchor_nms[ki]
            break
    s1.append('<row r="' + str(row) + '" ht="22" customHeight="1"><c r="A' + str(row) + '" s="9"><v>' + str(i + 1) + '</v></c><c r="B' + str(row) + '" s="0" t="s"><v>' + str(idx_qtexts[i]) + '</v></c><c r="C' + str(row) + '" s="1"><v></v></c><c r="D' + str(row) + '" s="1"><v></v></c><c r="E' + str(row) + '" s="1"><v></v></c><c r="F' + str(row) + '" s="1"><v></v></c><c r="G' + str(row) + '" s="1"><v></v></c><c r="H' + str(row) + '" s="1"><v></v></c><c r="I' + str(row) + '" s="0"><v>' + str(di) + '</v></c></row>')
s1.append('</sheetData>')
dvs = '<dataValidations xmlns="' + NS + '" count="6">'
for col in ['C', 'D', 'E', 'F', 'G', 'H']:
    dvs += '<dataValidation type="list" allowBlank="1" showInputMessage="1" prompt="请选择1-6" promptTitle="评分" showErrorMessage="1" error="请输入1-6之间的整数" errorTitle="输入无效" sqref="' + col + '4:' + col + '43"><formula1>1,2,3,4,5,6</formula1></dataValidation>'
dvs += '</dataValidations>'
s1.append(dvs)
sheet1_xml = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><worksheet xmlns="' + NS + '" xmlns:r="' + NS_R + '" xmlns:x14ac="' + NS_AC + '">' + ''.join(s1) + '<pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/></worksheet>'
with open(OUT_DIR + '/xl/worksheets/sheet1.xml', 'w', encoding='utf-8') as f:
    f.write(sheet1_xml)
print('Sheet 1 done')

# ---- Sheet 2: 结果 ----
s2 = []
s2.append('<cols xmlns="' + NS + '"><col min="1" max="1" width="16" customWidth="1"/><col min="2" max="2" width="12" customWidth="1"/><col min="3" max="3" width="22" customWidth="1"/></cols>')
s2.append('<sheetViews xmlns="' + NS + '"><sheetView workbookViewId="0"><pane ySplit="1" topLeftCell="A2" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>')
s2.append('<sheetData xmlns="' + NS + '">')
s2.append('<row r="1" ht="30" customHeight="1"><c r="A1" s="4"><v>' + str(idx_rpt) + '</v></c></row>')
s2.append('<row r="2" ht="22" customHeight="1"><c r="A2" s="4"><v>' + str(idx_dim_hdr) + '</v></c><c r="B2" s="4"><v>' + str(idx_avg_hdr) + '</v></c><c r="C2" s="4"><v>' + str(idx_lvl_hdr) + '</v></c></row>')
for ri, a in enumerate(ANCHORS):
    row = ri + 3
    qs = ri * 5 + 4
    qe = qs + 4
    parts = ['AVERAGE(C' + str(r) + ',D' + str(r) + ',E' + str(r) + ',F' + str(r) + ',G' + str(r) + ',H' + str(r) + ')' for r in range(qs, qe + 1)]
    avg_f = 'AVERAGE(' + ','.join(parts) + ')'
    lvl_f = ('IF(B' + str(row) + '>=5.5,"★★★★★（极强）",IF(B' + str(row) + '>=4.5,"★★★★☆（很强）",'
             'IF(B' + str(row) + '>=3.5,"★★★☆☆（较强）",IF(B' + str(row) + '>=2.5,"★★☆☆☆（一般）",'
             'IF(B' + str(row) + '>=1.5,"★☆☆☆☆（较弱）","☆☆☆☆☆（弱）")))))')
    s2.append('<row r="' + str(row) + '"><c r="A' + str(row) + '" s="0"><v>' + str(idx_anchor_nms[ri]) + '</v></c><c r="B' + str(row) + '" s="6"><f>' + avg_f + '</f><v></v></c><c r="C' + str(row) + '" s="0"><f>' + lvl_f + '</f><v></v></c></row>')
s2.append('<row r="11" ht="22" customHeight="1"><c r="A11" s="4"><v>' + str(idx_main) + '</v></c><c r="B11" s="6"><f>INDEX(A3:A10,MATCH(MAX(B3:B10),B3:B10,0))</f><v></v></c></row>')
s2.append('<row r="12" ht="22" customHeight="1"><c r="A12" s="4"><v>' + str(idx_sec) + '</v></c><c r="B12" s="6"><f>LARGE(B3:B10,2)</f><v></v></c></row>')
s2.append('<row r="13" ht="22" customHeight="1"><c r="A13" s="4"><v>' + str(idx_type_h) + '</v></c><c r="B13" s="0"><f>INDEX(A3:A10,MATCH(MAX(B3:B10),B3:B10,0))</f><v></v></c></row>')
s2.append('<row r="14"><c r="A14" s="0"><v></v></c></row>')
s2.append('<row r="15" ht="22" customHeight="1"><c r="A15" s="4"><v>' + str(idx_interp) + '</v></c></row>')
for ri, a in enumerate(ANCHORS):
    row = ri + 16
    d = idx_interp_d[a['key']]
    s2.append('<row r="' + str(row) + '" ht="60" customHeight="1"><c r="A' + str(row) + '" s="0"><v>' + str(d['name']) + '</v></c><c r="B' + str(row) + '" s="0"><f>IFERROR(INDEX(解读库!D:D,MATCH(A' + str(row) + ',解读库!A:A,0)),"")</f><v></v></c><c r="C' + str(row) + '" s="0"><f>IFERROR(INDEX(解读库!E:E,MATCH(A' + str(row) + ',解读库!A:A,0)),"")</f><v></v></c><c r="D' + str(row) + '" s="0"><f>IFERROR(INDEX(解读库!F:F,MATCH(A' + str(row) + ',解读库!A:A,0)),"")</f><v></v></c><c r="E' + str(row) + '" s="0"><f>IFERROR(INDEX(解读库!G:G,MATCH(A' + str(row) + ',解读库!A:A,0)),"")</f><v></v></c><c r="F' + str(row) + '" s="0"><f>IFERROR(INDEX(解读库!H:H,MATCH(A' + str(row) + ',解读库!A:A,0)),"")</f><v></v></c></row>')
s2.append('</sheetData>')
sheet2_xml = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><worksheet xmlns="' + NS + '" xmlns:r="' + NS_R + '" xmlns:x14ac="' + NS_AC + '">' + ''.join(s2) + '<pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/></worksheet>'
with open(OUT_DIR + '/xl/worksheets/sheet2.xml', 'w', encoding='utf-8') as f:
    f.write(sheet2_xml)
print('Sheet 2 done')

# ---- Sheet 3: 题库 ----
s3 = []
s3.append('<cols xmlns="' + NS + '"><col min="1" max="1" width="6" customWidth="1"/><col min="2" max="2" width="55" customWidth="1"/><col min="3" max="8" width="18" customWidth="1"/><col min="9" max="9" width="14" customWidth="1"/><col min="10" max="10" width="30" customWidth="1"/></cols>')
s3.append('<sheetData xmlns="' + NS + '">')
s3.append('<row r="1" ht="22" customHeight="1"><c r="A1" s="4"><v>' + str(idx3_qno) + '</v></c><c r="B1" s="4"><v>' + str(idx3_qt) + '</v></c><c r="C1" s="4"><v>' + str(idx3_opt[0]) + '</v></c><c r="D1" s="4"><v>' + str(idx3_opt[1]) + '</v></c><c r="E1" s="4"><v>' + str(idx3_opt[2]) + '</v></c><c r="F1" s="4"><v>' + str(idx3_opt[3]) + '</v></c><c r="G1" s="4"><v>' + str(idx3_opt[4]) + '</v></c><c r="H1" s="4"><v>' + str(idx3_opt[5]) + '</v></c><c r="I1" s="4"><v>' + str(idx3_dim) + '</v></c><c r="J1" s="4"><v>' + str(idx3_rule) + '</v></c></row>')
for i, (qk, qt) in enumerate(QUESTIONS):
    row = i + 2
    dmi = idx_dim_lb[qk]
    s3.append('<row r="' + str(row) + '"><c r="A' + str(row) + '" s="9"><v>' + str(i + 1) + '</v></c><c r="B' + str(row) + '" s="0" t="s"><v>' + str(idx_qtexts[i]) + '</v></c><c r="C' + str(row) + '" s="0"><v>' + str(idx_opt_lb[0]) + '</v></c><c r="D' + str(row) + '" s="0"><v>' + str(idx_opt_lb[1]) + '</v></c><c r="E' + str(row) + '" s="0"><v>' + str(idx_opt_lb[2]) + '</v></c><c r="F' + str(row) + '" s="0"><v>' + str(idx_opt_lb[3]) + '</v></c><c r="G' + str(row) + '" s="0"><v>' + str(idx_opt_lb[4]) + '</v></c><c r="H' + str(row) + '" s="0"><v>' + str(idx_opt_lb[5]) + '</v></c><c r="I' + str(row) + '" s="0"><v>' + str(dmi) + '</v></c><c r="J' + str(row) + '" s="0"><v>' + str(idx_scoring) + '</v></c></row>')
s3.append('</sheetData>')
sheet3_xml = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><worksheet xmlns="' + NS + '" xmlns:r="' + NS_R + '" xmlns:x14ac="' + NS_AC + '">' + ''.join(s3) + '<pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/></worksheet>'
with open(OUT_DIR + '/xl/worksheets/sheet3.xml', 'w', encoding='utf-8') as f:
    f.write(sheet3_xml)
print('Sheet 3 done')

# ---- Sheet 4: 解读库 ----
s4 = []
s4.append('<cols xmlns="' + NS + '"><col min="1" max="1" width="16" customWidth="1"/><col min="2" max="2" width="14" customWidth="1"/><col min="3" max="3" width="30" customWidth="1"/><col min="4" max="4" width="60" customWidth="1"/><col min="5" max="5" width="50" customWidth="1"/><col min="6" max="6" width="50" customWidth="1"/><col min="7" max="7" width="50" customWidth="1"/><col min="8" max="8" width="50" customWidth="1"/></cols>')
s4.append('<sheetData xmlns="' + NS + '">')
s4.append('<row r="1" ht="22" customHeight="1"><c r="A1" s="4"><v>' + str(idx4_dim) + '</v></c><c r="B1" s="4"><v>' + str(idx4_range) + '</v></c><c r="C1" s="4"><v>' + str(idx4_title) + '</v></c><c r="D1" s="4"><v>' + str(idx4_det) + '</v></c><c r="E1" s="4"><v>' + str(idx4_high) + '</v></c><c r="F1" s="4"><v>' + str(idx4_low) + '</v></c><c r="G1" s="4"><v>' + str(idx4_risk) + '</v></c><c r="H1" s="4"><v>' + str(idx4_sup) + '</v></c></row>')
for ri, a in enumerate(ANCHORS):
    row = ri + 2
    d = idx_interp_d[a['key']]
    title_val = '【' + a['name'] + '】职业锚解读'
    title_idx = add(title_val)
    s4.append('<row r="' + str(row) + '" ht="80" customHeight="1"><c r="A' + str(row) + '" s="0"><v>' + str(d['name']) + '</v></c><c r="B' + str(row) + '" s="0"><v>4.5-6.0</v></c><c r="C' + str(row) + '" s="0"><v>' + str(title_idx) + '</v></c><c r="D' + str(row) + '" s="0"><v>' + str(d['desc']) + '</v></c><c r="E' + str(row) + '" s="0"><v>' + str(d['high']) + '</v></c><c r="F' + str(row) + '" s="0"><v>' + str(d['low']) + '</v></c><c r="G' + str(row) + '" s="0"><v>' + str(d['risk']) + '</v></c><c r="H' + str(row) + '" s="0"><v>' + str(d['support']) + '</v></c></row>')
s4.append('</sheetData>')
sheet4_xml = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><worksheet xmlns="' + NS + '" xmlns:r="' + NS_R + '" xmlns:x14ac="' + NS_AC + '">' + ''.join(s4) + '<pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/></worksheet>'
with open(OUT_DIR + '/xl/worksheets/sheet4.xml', 'w', encoding='utf-8') as f:
    f.write(sheet4_xml)
print('Sheet 4 done')

# Re-write sharedStrings with new entries (sheet4 titles)
ss_items2 = ''.join('<si><t>' + xesc(s) + '</t></si>' for s in ss)
ss_xml2 = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><sst xmlns="' + NS + '" count="' + str(len(ss)) + '" uniqueCount="' + str(len(ss)) + '">' + ss_items2 + '</sst>'
with open(OUT_DIR + '/xl/sharedStrings.xml', 'w', encoding='utf-8') as f:
    f.write(ss_xml2)
print('Shared strings updated, total:', len(ss))

# ---- workbook.xml ----
wb = ('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
      '<workbook xmlns="' + NS + '" xmlns:r="' + NS_R + '">'
      '<fileVersion appName="xl" lastEdited="7" lowestEdited="7"/>'
      '<workbookPr defaultThemeVersion="166925"/>'
      '<bookViews><workbookView xWindow="0" yWindow="0" windowWidth="20140" windowHeight="10960"/></bookViews>'
      '<sheets>'
      '<sheet name="填答" sheetId="1" r:id="rId1"/>'
      '<sheet name="结果" sheetId="2" r:id="rId4"/>'
      '<sheet name="题库" sheetId="3" r:id="rId5"/>'
      '<sheet name="解读库" sheetId="4" r:id="rId6"/>'
      '</sheets>'
      '<calcPr calcId="191029"/>'
      '</workbook>')
with open(OUT_DIR + '/xl/workbook.xml', 'w', encoding='utf-8') as f:
    f.write(wb)

# ---- workbook.xml.rels ----
rel = ('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
       '<Relationships xmlns="' + NS_REL + '">'
       '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>'
       '<Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>'
       '<Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml"/>'
       '<Relationship Id="rId4" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet2.xml"/>'
       '<Relationship Id="rId5" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet3.xml"/>'
       '<Relationship Id="rId6" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet4.xml"/>'
       '</Relationships>')
with open(OUT_DIR + '/xl/_rels/workbook.xml.rels', 'w', encoding='utf-8') as f:
    f.write(rel)

# ---- Content_Types ----
ct = ('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
      '<Types xmlns="' + NS_PKG + '">'
      '<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>'
      '<Default Extension="xml" ContentType="application/xml"/>'
      '<Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>'
      '<Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>'
      '<Override PartName="/xl/worksheets/sheet2.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>'
      '<Override PartName="/xl/worksheets/sheet3.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>'
      '<Override PartName="/xl/worksheets/sheet4.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>'
      '<Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>'
      '<Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/>'
      '</Types>')
with open(OUT_DIR + '/[Content_Types].xml', 'w', encoding='utf-8') as f:
    f.write(ct)

print('All XML written. Packing...')
res = subprocess.run(
    ['python3', SKILL + '/xlsx_pack.py', OUT_DIR, OUT_FILE],
    capture_output=True, text=True
)
print('Pack exit:', res.returncode)
if res.stdout:
    print('STDOUT:', res.stdout[:300])
if res.stderr:
    print('STDERR:', res.stderr[:300])
print('Output:', OUT_FILE)
