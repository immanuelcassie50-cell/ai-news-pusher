#!/usr/bin/env python3
import os, zipfile, json

OUT_DIR = "D:/新课开发/数字化转型/2.人机协同权责边界与决策分级：从44%分工到18%系统重构的补课/配套表单和指引-Excel版"
os.makedirs(OUT_DIR, exist_ok=True)

# Load shared strings
with open("D:/CC/str_idx.json") as f:
    data = json.load(f)
STR = data["str"]
IDX = {k: v for k, v in data["idx"].items()}

def si(s): return '<si><t>' + s + '</t></si>'

def mk_ss(strings):
    unique = []
    indices = []
    for s in strings:
        if s not in unique:
            unique.append(s)
        indices.append(unique.index(s))
    ss_content = '<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="%d" uniqueCount="%d">%s</sst>' % (len(strings), len(unique), ''.join(si(u) for u in unique))
    idx_map = {s: i for i, s in enumerate(strings)}
    return ss_content, idx_map

STYLES = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <numFmts count="4">
    <numFmt numFmtId="164" formatCode="$#,##0;($#,##0);&quot;-&quot;"/>
    <numFmt numFmtId="165" formatCode="0.0%"/>
    <numFmt numFmtId="166" formatCode="0.0x"/>
    <numFmt numFmtId="167" formatCode="#,##0"/>
  </numFmts>
  <fonts count="6">
    <font><sz val="11"/><name val="Calibri"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="000000FF"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="00000000"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="00008000"/></font>
    <font><sz val="11"/><name val="Calibri"/><b/></font>
    <font><sz val="11"/><name val="Calibri"/><b/><color rgb="00000000"/></font>
  </fonts>
  <fills count="3">
    <fill><patternFill patternType="none"/></fill>
    <fill><patternFill patternType="gray125"/></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="00D9E8F5"/><bgColor indexed="64"/></patternFill></fill>
  </fills>
  <borders count="1">
    <border><left/><right/><top/><bottom/><diagonal/></border>
  </borders>
  <cellXfs count="13">
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
  </cellXfs>
</styleSheet>'''

def xml_esc(s):
    return str(s).replace('&','&amp;').replace('<','&lt;').replace('>','&gt;')

def c(addr, s=None, v=None, f=None):
    a = 'r="%s"' % addr
    if s is not None: a += ' s="%d"' % s
    tag = '<c %s>' % a
    if v is not None: return tag + '<v>' + xml_esc(v) + '</v></c>'
    elif f is not None: return tag + '<f>' + xml_esc(f) + '</f><v></v></c>'
    else: return tag + '<v></v></c>'

def row(r, ht=None):
    attrs = 'r="%d"' % r
    if ht: attrs += ' ht="%s" customHeight="1"' % ht
    return '<row %s>' % attrs

def end_row(): return '</row>'

def make_cols(widths):
    return ''.join('<col min="%d" max="%d" width="%d" customWidth="1"/>' % (i+1,i+1,w) for i,w in enumerate(widths))

def make_sheet(rows_xml, cols_xml=''):
    hdr = '<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><sheetViews><sheetView workbookViewId="0"/></sheetViews><sheetFormatPr defaultRowHeight="18"/>'
    return hdr + cols_xml + '<sheetData>' + rows_xml + '</sheetData><pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/></worksheet>'

WB_XML = '<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><sheets>%s</sheets><calcPr calcId="191029"/></workbook>'
WB_RELS = '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/><Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml"/>%s</Relationships>'
CT_XML = '<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">%s</Types>'
ROOT_RELS = '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>'

def build_xlsm(path, sheets_xml, ss_content, sheet_count, sheet_names):
    sheet_rels = ''.join('<Relationship Id="rId%d" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet%d.xml"/>' % (i+4,i) for i in range(2, sheet_count+1))
    safe_names = [n.replace('&','&amp;') for n in sheet_names]
    sheets_xml_str = ''.join('<sheet name="%s" sheetId="%d" r:id="rId%d"/>' % (safe_names[i], i+1, i+1) for i in range(sheet_count))
    wb_xml = WB_XML % sheets_xml_str
    wb_rels = WB_RELS % sheet_rels
    overrides = ''.join('<Override PartName="/xl/worksheets/sheet%d.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>' % i for i in range(1, sheet_count+1))
    ct_xml = CT_XML % ('<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/><Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/><Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/>' + overrides)
    with zipfile.ZipFile(path, 'w', zipfile.ZIP_DEFLATED) as zf:
        zf.writestr('[Content_Types].xml', ct_xml)
        zf.writestr('_rels/.rels', ROOT_RELS)
        zf.writestr('xl/workbook.xml', wb_xml)
        zf.writestr('xl/_rels/workbook.xml.rels', wb_rels)
        zf.writestr('xl/styles.xml', STYLES)
        zf.writestr('xl/sharedStrings.xml', ss_content)
        for i, sx in enumerate(sheets_xml):
            zf.writestr('xl/worksheets/sheet%d.xml' % (i+1), sx)

# ==============================================================
# F1: 5维度诊断卡
# ==============================================================
def f1(empty=True, im=None):
    im = im or {}
    def g(k): return im.get(k, '')
    r = []
    r.append(row(1,32) + c('A1',12,str(IDX.get('F1_人机协同现状诊断卡',''))) + c('B1',12) + c('C1',12) + c('D1',12) + c('E1',12) + c('F1',12) + end_row())
    r.append(row(2,20) + c('A2',4,str(IDX.get('维度',''))) + c('B2',4,str(IDX.get('评估要点',''))) + c('C2',1,str(IDX.get('现状描述（请填写）',''))) + c('D2',1,str(IDX.get('评分（1-5分）',''))) + c('E2',1,str(IDX.get('优先级',''))) + c('F2',1,str(IDX.get('备注',''))) + end_row())
    dims = [
        ('业务连续性','AI与人协作时业务中断风险的控制能力'),
        ('决策一致性','人机决策结果的一致性和可解释性'),
        ('效率与创新平衡','AI提升效率与保持创新活力的平衡'),
        ('风险管控','AI决策风险的识别、评估与管控能力'),
        ('员工能力发展','员工在人机协同中的能力提升意愿'),
    ]
    for i,(n,desc) in enumerate(dims):
        score = ''
        if not empty:
            if i == 0: score = '3'
            elif i in [1,2]: score = '2'
            else: score = '3'
        r.append(row(3+i) + c('A%d'%(3+i),4,str(IDX.get(n,''))) + c('B%d'%(3+i),0,str(IDX.get(desc,''))) + c('C%d'%(3+i),1) + c('D%d'%(3+i),1,score) + c('E%d'%(3+i),1) + c('F%d'%(3+i),1) + end_row())
    # Total
    total_f = 'AVERAGE(D3:D7)' if empty else '2.4'
    r.append(row(8,20) + c('A8',4,str(IDX.get('综合得分',''))) + c('B8',4) + c('C8',4) + c('D8',8,total_f if not empty else '', 'AVERAGE(D3:D7)' if empty else '') + c('E8',4) + c('F8',4) + end_row())
    r.append(row(9,20) + c('A9',4,str(IDX.get('诊断结论',''))) + c('B9',0) + end_row())
    r.append(row(10,20) + c('A10',4,str(IDX.get('需要重点突破领域',''))) + c('B10',0) + end_row())
    cols = make_cols([16,30,24,14,10,20])
    return make_sheet(''.join(r), cols)

# ==============================================================
# F2: 四象限决策分级
# ==============================================================
def f2(empty=True, im=None):
    im = im or {}
    r = []
    r.append(row(1,32) + c('A1',12,str(IDX.get('F2_决策分级设计工作表（四象限模板）',''))) + c('B1',12) + c('C1',12) + c('D1',12) + c('E1',12) + c('F1',12) + c('G1',12) + c('H1',12) + end_row())
    r.append(row(2,20) + c('A2',4,str(IDX.get('象限',''))) + c('B2',4,str(IDX.get('决策类型',''))) + c('C2',4,str(IDX.get('特征描述',''))) + c('D2',4,str(IDX.get('适用场景',''))) + c('E2',4,str(IDX.get('决策主体',''))) + c('F2',4,str(IDX.get('AI介入程度',''))) + c('G2',4,str(IDX.get('人工审核要求',''))) + c('H2',4,str(IDX.get('升级条件',''))) + end_row())
    quads = [
        ('第Ⅰ象限（战略型）','战略性、全局性、影响深远','涉及重大投资、组织变革','董事会/高管层','AI提供分析建议，人工最终决策','必须审核','重大偏差或例外事项'),
        ('第Ⅱ象限（优化型）','效率提升、流程优化','日常运营效率提升','运营管理层','AI主导优化，人工监督','定期抽检','优化效果不达预期'),
        ('第Ⅲ象限（创新型）','探索性、试验性决策','新产品/市场/模式探索','创新团队/业务负责人','AI辅助创意生成，人工决策','关键节点审核','创新方向偏离主航道'),
        ('第Ⅳ象限（例行型）','标准化、重复性决策','日常事务、常规审批','一线员工/系统自动','AI全自动执行','事后备案','出现异常或边界情况'),
    ]
    for i,q in enumerate(quads):
        row_n = 3+i
        e_val = '' if empty else q[3]
        g_val = '' if empty else q[5]
        h_val = '' if empty else q[6]
        r.append(row(row_n) + c('A%d'%row_n,4,str(IDX.get(q[0],''))) + c('B%d'%row_n,0,str(IDX.get(q[1],''))) + c('C%d'%row_n,0,str(IDX.get(q[2],''))) + c('D%d'%row_n,0,str(IDX.get(q[3],''))) + c('E%d'%row_n,1,e_val) + c('F%d'%row_n,0,str(IDX.get(q[4],''))) + c('G%d'%row_n,1,g_val) + c('H%d'%row_n,1,h_val) + end_row())
    cols = make_cols([20,22,24,20,16,26,14,18])
    return make_sheet(''.join(r), cols)

# ==============================================================
# F3: RACI矩阵
# ==============================================================
def f3(empty=True, im=None):
    im = im or {}
    r = []
    r.append(row(1,32) + c('A1',12,str(IDX.get('F3_RACI矩阵模板（8类决策×6角色）',''))) + c('B1',12) + c('C1',12) + c('D1',12) + c('E1',12) + c('F1',12) + end_row())
    r.append(row(2,20) + c('A2',4,str(IDX.get('决策类型',''))) + c('B2',4,str(IDX.get('R=负责(Responsible)',''))) + c('C2',4,str(IDX.get('A=审批(Accountable)',''))) + c('D2',4,str(IDX.get('C=咨询(Consulted)',''))) + c('E2',4,str(IDX.get('I=知会(Informed)',''))) + c('F2',4,str(IDX.get('说明',''))) + end_row())
    raci_data = [
        ('战略决策','CEO','董事会','CFO/CTO','全体员工'),
        ('运营决策','COO','运营总监','业务单元','相关部门'),
        ('投资决策','CFO','CEO','战略部','董事会'),
        ('人才决策','CHRO','CEO','业务负责人','HR部门'),
        ('技术决策','CTO','CEO','技术团队','业务部门'),
        ('合规决策','法务负责人','CEO/董事会','合规部','全员'),
        ('创新决策','创新负责人','CEO','R&D/市场','全体员工'),
        ('危机决策','危机响应小组','CEO','公关/法务','全员'),
    ]
    for i,rd in enumerate(raci_data):
        rn = 3+i
        r_val = '' if empty else rd[1]
        a_val = '' if empty else rd[2]
        c_val = '' if empty else rd[3]
        i_val = '' if empty else rd[4]
        r.append(row(rn) + c('A%d'%rn,4,str(IDX.get(rd[0],''))) + c('B%d'%rn,1,r_val) + c('C%d'%rn,1,a_val) + c('D%d'%rn,1,c_val) + c('E%d'%rn,1,i_val) + c('F%d'%rn,1) + end_row())
    cols = make_cols([14,20,20,20,20,30])
    return make_sheet(''.join(r), cols)

# ==============================================================
# F4: 3级决策触发机制
# ==============================================================
def f4(empty=True, im=None):
    im = im or {}
    r = []
    r.append(row(1,32) + c('A1',12,str(IDX.get('F4_决策触发机制设计表（3级升级）',''))) + c('B1',12) + c('C1',12) + c('D1',12) + c('E1',12) + c('F1',12) + c('G1',12) + end_row())
    r.append(row(2,20) + c('A2',4,str(IDX.get('决策级别',''))) + c('B2',4,str(IDX.get('触发条件',''))) + c('C2',4,str(IDX.get('响应时限',''))) + c('D2',4,str(IDX.get('决策流程',''))) + c('E2',4,str(IDX.get('责任人',''))) + c('F2',4,str(IDX.get('升级路径',''))) + c('G2',4,str(IDX.get('记录要求',''))) + end_row())
    levels = [
        ('一级触发（日常决策）','常规业务场景，可预见、可标准化处理','24小时内','AI系统自动决策 → 结果备案','AI系统','升级至二级处理','决策日志自动记录'),
        ('二级触发（管理决策）','涉及资源调配、跨部门协调、风险敞口','72小时内','AI分析建议 → 人工审核 → 决策执行','部门负责人','升级至三级处理','决策记录表+分析报告'),
        ('三级触发（战略/危机决策）','重大不确定性、潜在重大风险、战略方向','即时响应','紧急会议 → AI数据支持 → 高管决策','高管层','董事会介入','完整决策链条记录+复盘报告'),
    ]
    for i,lv in enumerate(levels):
        rn = 3+i
        t_val = '' if empty else lv[2]
        p_val = '' if empty else lv[4]
        r.append(row(rn) + c('A%d'%rn,4,str(IDX.get(lv[0],''))) + c('B%d'%rn,0,str(IDX.get(lv[1],''))) + c('C%d'%rn,1,t_val) + c('D%d'%rn,0,str(IDX.get(lv[3],''))) + c('E%d'%rn,1,p_val) + c('F%d'%rn,0,str(IDX.get(lv[5],''))) + c('G%d'%rn,0,str(IDX.get(lv[6],''))) + end_row())
    cols = make_cols([22,34,12,34,14,18,26])
    return make_sheet(''.join(r), cols)

# ==============================================================
# F5: 权责边界检验卡
# ==============================================================
def f5(empty=True, im=None):
    im = im or {}
    r = []
    r.append(row(1,32) + c('A1',12,str(IDX.get('F5_权责边界检验卡（10个边界场景）',''))) + c('B1',12) + c('C1',12) + c('D1',12) + c('E1',12) + c('F1',12) + c('G1',12) + end_row())
    r.append(row(2,20) + c('A2',4,str(IDX.get('序号',''))) + c('B2',4,str(IDX.get('边界场景描述',''))) + c('C2',4,str(IDX.get('AI自主决策',''))) + c('D2',4,str(IDX.get('人工审批',''))) + c('E2',4,str(IDX.get('混合决策',''))) + c('F2',4,str(IDX.get('适用条件',''))) + c('G2',4,str(IDX.get('风险提示',''))) + end_row())
    scenes = [
        ('1','日常数据修改/更正','R','','','数据来源明确、影响范围小','需保留修改痕迹'),
        ('2','客户投诉处理方案选择','','A','','涉及品牌形象、复杂情感因素','注意客户情感和预期管理'),
        ('3','库存补货建议生成','R','','','标准品、需求可预测','需设置库存上限'),
        ('4','营销方案预算调整','','','C','金额在部门授权范围内','注意预算超支风险'),
        ('5','员工绩效初步评定','','A','','涉及职业发展、激励公平性','员工有申诉权利'),
        ('6','供应链中断应急响应','','','C','有预先定义的应急预案','确保信息传递到位'),
        ('7','新产品功能上线决策','','A','','涉及用户体验、品牌承诺','灰度发布+监控'),
        ('8','关键人才引进薪酬定级','','A','','市场稀缺性、薪酬保密性','薪酬公平性影响'),
        ('9','重大客户合同风险条款审批','','A','','涉及法律合规、商业秘密','法务全程介入'),
        ('10','组织架构调整方案设计','','A','','涉及员工利益、文化变革','充分沟通和预期管理'),
    ]
    mode_map = {'R':'AI自主决策','A':'人工审批','C':'混合决策'}
    for i,sc in enumerate(scenes):
        rn = 3+i
        if empty:
            r.append(row(rn) + c('A%d'%rn,1,str(IDX.get(sc[0],''))) + c('B%d'%rn,0,str(IDX.get(sc[1],''))) + c('C%d'%rn,1) + c('D%d'%rn,1) + c('E%d'%rn,1) + c('F%d'%rn,1) + c('G%d'%rn,1) + end_row())
        else:
            r.append(row(rn) + c('A%d'%rn,1,str(IDX.get(sc[0],''))) + c('B%d'%rn,0,str(IDX.get(sc[1],''))) + c('C%d'%rn,1,mode_map.get(sc[2],'')) + c('D%d'%rn,1,mode_map.get(sc[3],'')) + c('E%d'%rn,1,mode_map.get(sc[4],'')) + c('F%d'%rn,1,str(IDX.get(sc[5],''))) + c('G%d'%rn,1,str(IDX.get(sc[6],''))) + end_row())
    cols = make_cols([6,26,14,12,12,30,24])
    return make_sheet(''.join(r), cols)

# ==============================================================
# F6: 重构路径规划表
# ==============================================================
def f6(empty=True, im=None):
    im = im or {}
    r = []
    r.append(row(1,32) + c('A1',12,str(IDX.get('F6_系统性重构路径规划表（4阶段）',''))) + c('B1',12) + c('C1',12) + c('D1',12) + c('E1',12) + c('F1',12) + c('G1',12) + c('H1',12) + c('I1',12) + end_row())
    r.append(row(2,20) + c('A2',4,str(IDX.get('阶段',''))) + c('B2',4,str(IDX.get('阶段名称',''))) + c('C2',4,str(IDX.get('目标描述',''))) + c('D2',4,str(IDX.get('关键任务',''))) + c('E2',4,str(IDX.get('开始时间',''))) + c('F2',4,str(IDX.get('结束时间',''))) + c('G2',4,str(IDX.get('负责人',''))) + c('H2',4,str(IDX.get('里程碑',''))) + c('I2',4,str(IDX.get('状态',''))) + end_row())
    stages = [
        ('阶段一','诊断与设计','明确现状差距，设计目标架构','现状诊断、差距分析、目标设计、方案评审','2024-01','2024-02','张三','诊断报告+设计方案通过评审','已完成'),
        ('阶段二','试点与验证','在局部范围验证方案的可行性','试点选择、方案实施、效果评估、问题修正','2024-03','2024-05','李四','试点达成预期目标','进行中'),
        ('阶段三','推广与深化','将验证方案推广至全组织','全面部署、培训赋能、流程固化、绩效挂钩','2024-06','2024-09','王五','80%以上业务单元完成切换','未开始'),
        ('阶段四','优化与迭代','持续优化，形成长效机制','效果评估、机制优化、经验沉淀、知识传承','2024-10','2024-12','赵六','形成可复制的最佳实践','未开始'),
    ]
    for i,st in enumerate(stages):
        rn = 3+i
        e_val = '' if empty else st[4]
        f_val = '' if empty else st[5]
        g_val = '' if empty else st[6]
        i_val = '未开始' if empty else st[8]
        r.append(row(rn) + c('A%d'%rn,4,str(IDX.get(st[0],''))) + c('B%d'%rn,0,str(IDX.get(st[1],''))) + c('C%d'%rn,0,str(IDX.get(st[2],''))) + c('D%d'%rn,0,str(IDX.get(st[3],''))) + c('E%d'%rn,1,e_val) + c('F%d'%rn,1,f_val) + c('G%d'%rn,1,g_val) + c('H%d'%rn,0,str(IDX.get(st[7],''))) + c('I%d'%rn,1,i_val) + end_row())
    cols = make_cols([10,16,28,38,12,12,12,30,10])
    return make_sheet(''.join(r), cols)

# ==============================================================
# F7: 变革管理检查清单
# ==============================================================
def f7(empty=True, im=None):
    im = im or {}
    r = []
    r.append(row(1,32) + c('A1',12,str(IDX.get('F7_变革管理检查清单',''))) + c('B1',12) + c('C1',12) + c('D1',12) + c('E1',12) + c('F1',12) + c('G1',12) + c('H1',12) + end_row())
    r.append(row(2,20) + c('A2',4,str(IDX.get('检查维度',''))) + c('B2',4,str(IDX.get('检查事项',''))) + c('C2',4,str(IDX.get('完成标准',''))) + c('D2',4,str(IDX.get('负责人',''))) + c('E2',4,str(IDX.get('状态',''))) + c('F2',4,str(IDX.get('完成时间',''))) + c('G2',4,str(IDX.get('备注',''))) + end_row())
    checks = [
        ('领导力','高管对AI赋能的认知统一','高管参与培训并表态支持','CEO','进行中' if not empty else '未完成','2024-01-15'),
        ('领导力','中层管理者的变革意愿','中层培训覆盖率达100%','CHO','',''),
        ('领导力','变革愿景的清晰传达','全体员工清晰理解变革目标','CEO','',''),
        ('能力建设','AI技能培训体系建立','培训课程上线+员工参与率80%','培训负责人','',''),
        ('能力建设','新流程的操作培训','相关人员全部通过实操考核','培训负责人','',''),
        ('能力建设','变革冠军（Champion）网络建立','每个业务单元至少1名Champion','变革负责人','',''),
        ('激励考核','新流程与绩效考核的挂钩','绩效方案经HR和业务共同确认','CHRO','',''),
        ('激励考核','正向激励机制的建立','激励方案向早期 adopters 倾斜','CHRO','',''),
        ('激励考核','容错免责机制的明确','明确AI决策错误的处理流程','法务负责人','',''),
        ('沟通传播','变革故事的定期分享','至少每月一次成功案例分享','PR负责人','',''),
        ('沟通传播','反馈渠道的畅通','员工反馈响应率100%','HR负责人','',''),
        ('沟通传播','阻力识别与专项沟通','阻力点有应对方案并落实','变革负责人','',''),
        ('技术支撑','AI系统的稳定性和可用性','系统可用性>=99.5%','CTO','',''),
        ('技术支撑','数据质量和数据安全','数据治理报告通过审计','CDO','',''),
        ('技术支撑','与现有系统的集成','无数据孤岛，流程无缝衔接','CTO','',''),
        ('整体进度','阶段性评审与调整机制','每月一次阶段评审会议','PMO负责人','',''),
        ('整体进度','变革成效的量化评估','建立数字化评估看板','数据负责人','',''),
    ]
    for i,ch in enumerate(checks):
        rn = 3+i
        d_val = '' if empty else ch[3]
        e_val = ch[4] if not empty else ''
        f_val = ch[5] if not empty else ''
        r.append(row(rn) + c('A%d'%rn,0,str(IDX.get(ch[0],''))) + c('B%d'%rn,0,str(IDX.get(ch[1],''))) + c('C%d'%rn,0,str(IDX.get(ch[2],'')).replace('≥','>= ')) + c('D%d'%rn,1,d_val) + c('E%d'%rn,1,e_val) + c('F%d'%rn,1,f_val) + c('G%d'%rn,1) + end_row())
    cols = make_cols([14,32,34,14,10,12,18])
    return make_sheet(''.join(r), cols)

# ==============================================================
# F8: 效果验证追踪表
# ==============================================================
def f8(empty=True, im=None):
    im = im or {}
    r = []
    r.append(row(1,32) + c('A1',12,str(IDX.get('F8_效果验证追踪表（30/90天检查点）',''))) + c('B1',12) + c('C1',12) + c('D1',12) + c('E1',12) + c('F1',12) + c('G1',12) + c('H1',12) + c('I1',12) + c('J1',12) + end_row())
    r.append(row(2,20) + c('A2',4,str(IDX.get('指标类别',''))) + c('B2',4,str(IDX.get('指标名称',''))) + c('C2',4,str(IDX.get('基线值',''))) + c('D2',4,str(IDX.get('30天目标',''))) + c('E2',4,str(IDX.get('90天目标',''))) + c('F2',4,str(IDX.get('实际值（30天）',''))) + c('G2',4,str(IDX.get('实际值（90天）',''))) + c('H2',4,str(IDX.get('达成率',''))) + c('I2',4,str(IDX.get('趋势分析',''))) + c('J2',4,str(IDX.get('备注',''))) + end_row())
    kpis = [
        ('效率提升','决策周期缩短比例','0%','10%','25%','8%','待评估'),
        ('效率提升','流程自动化覆盖率','0%','20%','50%','18%','待评估'),
        ('效率提升','人工重复工作减少工时（小时/月）','0','10','40','8','待评估'),
        ('质量改进','决策一致率','0%','60%','85%','55%','待评估'),
        ('质量改进','决策可解释性评分','0','3','4','2','待评估'),
        ('风险管控','AI决策风险事件数','0','减少50%','减少80%','2',''),
        ('风险管控','人工复核率','100%','70%','40%','80%','待评估'),
        ('员工发展','员工AI技能认证通过率','0%','30%','80%','25%','待评估'),
        ('员工发展','员工满意度（人机协作）','0','3','4','2','待评估'),
        ('成本效益','AI系统投入成本（万元）','0','实际发生','实际发生','',''),
        ('成本效益','人均产出提升比例','0%','5%','15%','3%','待评估'),
        ('综合评估','系统性重构完成度','0%','25%','70%','20%','待评估'),
    ]
    for i,kpi in enumerate(kpis):
        rn = 3+i
        f_val = kpi[5] if not empty else ''
        g_val = kpi[6] if not empty else ''
        h_f = 'IF(D%d=0,"-",IF(F%d="","待评估",F%d/D%d))' % (rn,rn,rn,rn)
        r.append(row(rn) + c('A%d'%rn,0,str(IDX.get(kpi[0],''))) + c('B%d'%rn,0,str(IDX.get(kpi[1],''))) + c('C%d'%rn,1,kpi[2]) + c('D%d'%rn,1,kpi[3]) + c('E%d'%rn,1,kpi[4]) + c('F%d'%rn,1,f_val) + c('G%d'%rn,1,g_val) + c('H%d'%rn,8,None,h_f) + c('I%d'%rn,1) + c('J%d'%rn,1) + end_row())
    # Notes
    notes = ['基线值填写变革前的实际测量值','30天/90天目标填写预期达到的数值','实际值在对应时间节点后填写','达成率=实际值/目标值']
    for i,n in enumerate(notes):
        rn = 15+i
        r.append(row(rn) + c('A%d'%rn,4,str(IDX.get('填表说明',''))) + c('B%d'%rn,0,str(IDX.get(n,''))) + end_row())
    cols = make_cols([14,32,10,10,10,14,14,10,14,16])
    return make_sheet(''.join(r), cols)

# ==============================================================
# GUIDE SHEET
# ==============================================================
GUIDE_STR = [
    "人机协同权责边界与决策分级工具表单使用指引",
    "表单编号","表单名称","用途说明","填写周期","预计耗时","主要使用者",
    "使用流程","第一步","使用F1进行现状诊断，识别改进重点领域",
    "第二步","使用F2和F3明确决策分类和RACI分工",
    "第三步","使用F4和F5设计触发机制并检验边界场景",
    "第四步","使用F6规划重构路径，设置里程碑",
    "第五步","执行过程中使用F7检查清单监控进度",
    "第六步","使用F8在30天和90天节点验证效果",
    "关键成功因素",
    "1. 高层承诺","高管层对AI赋能转型的坚定承诺和持续支持",
    "2. 业务主导","AI权责设计必须由业务部门主导，IT提供技术支撑",
    "3. 渐进迭代","通过试点验证后再推广，避免大规模推倒重来",
    "4. 持续反馈","建立常态化的反馈机制，及时调整优化方向",
]
guide_idx = {s: i for i, s in enumerate(GUIDE_STR)}

def guide_sheet(im=None):
    im = im or {}
    r = []
    r.append(row(1,36) + c('A1',12,str(guide_idx.get('人机协同权责边界与决策分级工具表单使用指引',''))) + c('B1',12) + end_row())
    r.append(row(2,24) + c('A2',4,str(guide_idx.get('表单编号',''))) + c('B2',4,str(guide_idx.get('表单名称',''))) + c('C2',4,str(guide_idx.get('用途说明',''))) + c('D2',4,str(guide_idx.get('填写周期',''))) + c('E2',4,str(guide_idx.get('预计耗时',''))) + c('F2',4,str(guide_idx.get('主要使用者',''))) + end_row())
    guide_items = [
        ('F1','F1_人机协同现状诊断卡','评估组织在人机协同五个维度上的当前成熟度','项目启动时','30分钟','项目负责人/变革小组'),
        ('F2','F2_决策分级设计工作表（四象限模板）','将企业决策按战略性和创新性分为四类','设计阶段','2小时','高管/业务负责人'),
        ('F3','F3_RACI矩阵模板（8类决策×6角色）','明确八类核心决策中各角色的RACI职责分工','设计阶段','1-2小时','HR/运营负责人'),
        ('F4','F4_决策触发机制设计表（3级升级）','设计三级决策升级机制','设计阶段','1小时','运营/IT负责人'),
        ('F5','F5_权责边界检验卡（10个边界场景）','检验常见边界场景下的人机分工是否清晰','设计阶段','1小时','业务/HR负责人'),
        ('F6','F6_系统性重构路径规划表（4阶段）','规划从诊断到优化的四阶段重构路径','规划阶段','1小时','PMO/变革负责人'),
        ('F7','F7_变革管理检查清单','覆盖领导力、能力建设、激励考核等五大维度','持续执行','每月2小时','变革负责人/PMO'),
        ('F8','F8_效果验证追踪表（30/90天检查点）','追踪效率、质量、风险等五大类指标','30天/90天','1小时','数据/运营负责人'),
    ]
    for i,gi in enumerate(guide_items):
        rn = 3+i
        r.append(row(rn) + c('A%d'%rn,1,gi[0]) + c('B%d'%rn,0,gi[1]) + c('C%d'%rn,0,gi[2]) + c('D%d'%rn,1,gi[3]) + c('E%d'%rn,1,gi[4]) + c('F%d'%rn,1,gi[5]) + end_row())
    r.append(row(12,24) + c('A12',12,str(guide_idx.get('使用流程',''))) + end_row())
    steps = [
        ('第一步','使用F1进行现状诊断，识别改进重点领域'),
        ('第二步','使用F2和F3明确决策分类和RACI分工'),
        ('第三步','使用F4和F5设计触发机制并检验边界场景'),
        ('第四步','使用F6规划重构路径，设置里程碑'),
        ('第五步','执行过程中使用F7检查清单监控进度'),
        ('第六步','使用F8在30天和90天节点验证效果'),
    ]
    for i,st in enumerate(steps):
        rn = 13+i
        r.append(row(rn,20) + c('A%d'%rn,4,str(guide_idx.get(st[0],''))) + c('B%d'%rn,0,str(guide_idx.get(st[1],''))) + end_row())
    r.append(row(20,24) + c('A20',12,str(guide_idx.get('关键成功因素',''))) + end_row())
    factors = [
        ('1. 高层承诺','高管层对AI赋能转型的坚定承诺和持续支持'),
        ('2. 业务主导','AI权责设计必须由业务部门主导，IT提供技术支撑'),
        ('3. 渐进迭代','通过试点验证后再推广，避免大规模推倒重来'),
        ('4. 持续反馈','建立常态化的反馈机制，及时调整优化方向'),
    ]
    for i,fa in enumerate(factors):
        rn = 21+i
        r.append(row(rn) + c('A%d'%rn,0,str(guide_idx.get(fa[0],''))) + c('B%d'%rn,0,str(guide_idx.get(fa[1],''))) + end_row())
    cols = make_cols([10,38,52,14,10,18])
    return make_sheet(''.join(r), cols)

# ==============================================================
# MAIN
# ==============================================================
print("Building Excel files...")

# Build main 8-sheet shared strings
main_ss, main_idx = mk_ss(STR)
guide_ss, guide_idx_internal = mk_ss(GUIDE_STR)

sheet_names = [
    'F1_人机协同现状诊断卡',
    'F2_决策分级设计工作表',
    'F3_RACI矩阵模板',
    'F4_决策触发机制设计表',
    'F5_权责边界检验卡',
    'F6_系统性重构路径规划表',
    'F7_变革管理检查清单',
    'F8_效果验证追踪表',
]

# FILE 1: Empty template
print("Creating 配套表单_空表.xlsx...")
sheets_empty = [
    f1(True, main_idx),
    f2(True, main_idx),
    f3(True, main_idx),
    f4(True, main_idx),
    f5(True, main_idx),
    f6(True, main_idx),
    f7(True, main_idx),
    f8(True, main_idx),
]
out1 = os.path.join(OUT_DIR, '配套表单_空表.xlsx')
build_xlsm(out1, sheets_empty, main_ss, 8, sheet_names)
print(f"  Created: {out1}")

# FILE 2: Filled example
print("Creating 配套表单_填好版.xlsx...")
sheets_filled = [
    f1(False, main_idx),
    f2(False, main_idx),
    f3(False, main_idx),
    f4(False, main_idx),
    f5(False, main_idx),
    f6(False, main_idx),
    f7(False, main_idx),
    f8(False, main_idx),
]
out2 = os.path.join(OUT_DIR, '配套表单_填好版.xlsx')
build_xlsm(out2, sheets_filled, main_ss, 8, sheet_names)
print(f"  Created: {out2}")

# FILE 3: Guide
print("Creating 表单使用指引.xlsx...")
guide_sheets = [guide_sheet(guide_idx_internal)]
out3 = os.path.join(OUT_DIR, '表单使用指引.xlsx')
build_xlsm(out3, guide_sheets, guide_ss, 1, ['表单使用指引'])
print(f"  Created: {out3}")

print("\nALL DONE!")
print("Output:", OUT_DIR)
