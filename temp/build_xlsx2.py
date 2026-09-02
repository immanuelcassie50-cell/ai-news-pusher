import os, shutil, sys

OUT1 = 'D:/新课开发/经营/系列/09_大客户开发与管理/课程大纲/配套表单使用指引.xlsx'
OUT2 = 'D:/新课开发/经营/系列/09_大客户开发与管理/课程大纲/配套表单_空表.xlsx'
TMP1 = '/tmp/xlsx_w1'
TMP2 = '/tmp/xlsx_w2'
SKILL = 'C:/Users/Administrator/.claude/skills/Excel表格处理/scripts'

os.makedirs(os.path.dirname(OUT1), exist_ok=True)
os.makedirs(os.path.dirname(OUT2), exist_ok=True)

# Fresh copy of template
for d,tmp in [(TMP1,OUT1),(TMP2,OUT2)]:
    if os.path.exists(d):
        shutil.rmtree(d)
    shutil.copytree('C:/Users/Administrator/.claude/skills/Excel表格处理/templates/minimal_xlsx', d)

def build_ss(items):
    unique = []; idx = {}
    for x in items:
        if x not in idx:
            idx[x] = len(unique); unique.append(x)
    lines = ['<?xml version="1.0" encoding="UTF-8" standalone="yes"?>',
             '<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="{}" uniqueCount="{}">'.format(len(items),len(unique))]
    for s in unique:
        safe = str(s).replace('&','&amp;').replace('<','&lt;').replace('>','&gt;')
        lines.append('<si><t xml:space="preserve">{}</t></si>'.format(safe))
    lines.append('</sst>')
    return '\n'.join(lines)

def esc(t): return str(t).replace('&','&amp;').replace('<','&lt;').replace('>','&gt;')
def ci(r,c,text,s=0):
    return '    <c r="{}{}" t="inlineStr" s="{}"><is><t>{}</t></is></c>\n'.format(c,r,s,esc(text))
def cn(r,c,val,s=0):
    return '    <c r="{}{}" s="{}"><v>{}</v></c>\n'.format(c,r,s,val)
def cf(r,c,formula,s=6):
    return '    <c r="{}{}" s="{}"><f>{}</f><v></v></c>\n'.format(c,r,s,formula)

def sheet_xml(rows_str, col_xml=''):
    return '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0" tabSelected="true"/></sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
{}  <sheetData>
{}  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''.format(col_xml, rows_str)

def cols_xml(widths):
    c = ''.join('    <col min="{}" max="{}" width="{}" customWidth="1"/>\n'.format(i,i,w) for i,w in enumerate(widths,1))
    return '<cols>\n{}</cols>'.format(c)

def make_rows():
    rows=[];rn=[1]
    def R(cells,ht=None):
        h=' ht="{}" customHeight="1"'.format(ht) if ht else ''
        rows.append('  <row r="{}"{}>\n{}  </row>\n'.format(rn[0],h,cells));rn[0]+=1
    def B():
        rows.append('  <row r="{}">\n  </row>\n'.format(rn[0]));rn[0]+=1
    return rows,rn,R,B

# WORKBOOK 1
S1=[
    '大客户开发与管理——配套表单使用指引','说明各工具表单的使用时机和使用方法',
    '序号','表单名称','使用时机','使用目的','填写人','填写时长','注意事项',
    '大客户价值评估矩阵','课程第一章 + 日常客户分级','识别战略级大客户，建立团队分级共识','销售团队管理层','30分钟/客户','需要3个以上客户数据对比才有意义',
    '大客户画像三维图','课程第二章 + 客户初次接触前','深度了解目标客户的决策链和真实需求','大客户经理','45分钟/客户','不是一次性填写，需要持续更新',
    'SPIN-PRO开发路径图','课程第三章 + 客户开发启动时','设计完整的客户开发路径和关键动作','大客户经理','40分钟/客户','路径设计后需要根据客户反馈动态调整',
    '关键人关系导航图','课程第四章 + 客户关系深化阶段','识别所有利益相关者，制定关系突破策略','大客户经理 + 销售管理','60分钟/客户','至少包含KP和购买影响者两类关键人',
    '双赢谈判框架','课程第五章 + 谈判准备阶段','明确筹码清单，设计让步策略','大客户经理','45分钟/谈判','红线必须在谈判前设定，谈判中不能随意突破',
    '大客户服务蓝图','课程第六章 + 合同签订后','设计完整的服务交付体系和服务标准','服务经理 + 大客户经理','50分钟/客户','服务蓝图需要客户参与确认',
    '客户健康度仪表盘','课程第六章 + 持续客户管理','监测客户状态，提前预警风险','服务经理 + 客户成功','每月更新','预警阈值需要根据客户类型定制',
    '课程产出工具使用顺序','说明：以下顺序是建议使用顺序，实际使用中可根据业务场景灵活调整',
    '新客户开发：从评估矩阵→画像→开发路径→关系导航→谈判框架',
    '现有客户深化：从画像→关系导航→服务蓝图→健康度仪表盘',
    '客户风险管理：从健康度仪表盘→画像更新→关系导航→谈判筹码',
]

# Sheet 1
rows,rn,R,B = make_rows()
R(ci(rn[0],'A',S1[0],4),ht=22);rn[0]+=1
R(ci(rn[0],'A',S1[1]));rn[0]+=1
B()
R(ci(rn[0],'A',S1[2],4)+ci(rn[0],'B',S1[3],4)+ci(rn[0],'C',S1[4],4)+ci(rn[0],'D',S1[5],4)+ci(rn[0],'E',S1[6],4)+ci(rn[0],'F',S1[7],4)+ci(rn[0],'G',S1[8],4));rn[0]+=1
tools=[(S1[9],S1[10],S1[11],S1[12],S1[13],S1[14]),(S1[15],S1[16],S1[17],S1[18],S1[19],S1[20]),(S1[21],S1[22],S1[23],S1[24],S1[25],S1[26]),(S1[27],S1[28],S1[29],S1[30],S1[31],S1[32]),(S1[33],S1[34],S1[35],S1[36],S1[37],S1[38]),(S1[39],S1[40],S1[41],S1[42],S1[43],S1[44]),(S1[45],S1[46],S1[47],S1[48],S1[49],S1[50])]
for i,(n,t,p,f,dl,note) in enumerate(tools):
    R(ci(rn[0],'A',str(i+1))+ci(rn[0],'B',n)+ci(rn[0],'C',t)+ci(rn[0],'D',p)+ci(rn[0],'E',f)+ci(rn[0],'F',dl)+ci(rn[0],'G',note));rn[0]+=1
B()
for txt in [S1[51],S1[52],S1[53],S1[54],S1[55]]:
    R(ci(rn[0],'A',txt,4 if txt==S1[51] else 0));rn[0]+=1

with open(TMP1+'/xl/worksheets/sheet1.xml','w',encoding='utf-8') as f:
    f.write(sheet_xml(''.join(rows), cols_xml([8,22,28,30,20,14,35])))

instr_data=[
    ('表单1：大客户价值评估矩阵',[
        ('使用场景',['什么时候用：年度客户分级评审 / 新客户准入评估 / 资源重新配置时','使用频率：每季度一次常规评审，重大决策前专项评估']),
        ('填写步骤',['Step 1: 收集数据——收集目标客户的收入数据、行业数据、竞争数据','Step 2: 逐项评分——按五维度（收入贡献/战略协同/成长潜力/关系复杂度/竞争态势）逐项打分1-5分','Step 3: 加权计算——按预设权重计算综合得分','Step 4: 团队讨论——管理层+一线销售共同讨论确认','Step 5: 输出分级——A级（战略级）/ B级（培育级）/ C级（观察级）']),
        ('评分标准参考',['收入贡献：1分（年贡献<50万）2分（50-200万）3分（200-500万）4分（500-1000万）5分（>1000万）','战略协同：1分（无协同）3分（部分协同）5分（高度协同/战略捆绑）','成长潜力：1分（零增长）3分（稳定增长）5分（高速增长/新领域拓展）','关系复杂度：1分（单一联系人）3分（3-5人决策链）5分（复杂组织/多层审批）','竞争态势：1分（竞争对手主导）3分（双方平衡）5分（我方主导/唯一供应商）'])
    ]),
    ('表单2：大客户画像三维图',[
        ('使用场景',['什么时候用：初次接触重要客户前 / 客户关系遇到瓶颈时 / 季度客户回顾时','使用频率：初次填写后每半年更新一次']),
        ('三维度说明',['维度一：基本信息（行业/企业规模/发展阶段/竞争地位/财务状况）','维度二：决策链结构（关键人/支持者/否决者/使用者及其职位和影响力评分）','维度三：核心需求（表面需求-业务需求-战略需求三层，以及各层的评估标准）']),
        ('需求深挖话术树使用要点',['S类问题（Situation状况）：了解客户的基本情况和背景','P类问题（Problem问题）：引导客户说出遇到的问题和困难','I类问题（Implication影响）：探讨问题不解决会造成的影响和后果','N类问题（Need-payoff需求回报）：引导客户说出解决问题后的价值和回报','PRO类问题（新一代方案）：探讨我们方案能带来的独特价值'])
    ]),
    ('表单3：SPIN-PRO开发路径图',[
        ('四阶段说明',['S阶段-Scoping确认机会：识别客户需求范围，评估是否值得投入','P阶段-Partnering深化关系：建立信任关系，了解客户组织和决策链','I阶段-Illuminating形成方案：基于客户需求设计定制化解决方案','N阶段-Negotiating达成合作：商务谈判，达成合作协议','PRO阶段-PRO签署执行：合同签署，进入交付阶段']),
        ('五大接触时机',['时机1：客户战略调整/组织变革——及时感知，率先介入','时机2：现有供应商出现问题——快速响应，填补空缺','时机3：行业政策/市场变化——提供专业知识，建立咨询地位','时机4：客户业务扩张/新项目启动——发现新需求，创造增购机会','时机5：竞争对手关系松动——主动接触，争夺先机'])
    ]),
    ('表单4：关键人关系导航图',[
        ('利益相关者分类',['决策者（Decision Maker）：最终批准购买的人，通常是高管','支持者（Champion）：内部推动项目的关键人物，愿意为我方背书','否决者（Blocker）：可以阻止项目的人，需要重点管理','影响者（Influencer）：虽无决定权但能影响决策的人','使用者（User）：最终使用产品/服务的人，影响满意度']),
        ('关系支持度评估',['5分：强力支持，愿意公开为我方背书','4分：支持，理解我方价值','3分：中立，不明确表态','2分：冷淡，对我方有疑虑','1分：反对，明确拒绝我方']),
        ('关系突破策略制定要点',['针对支持者：巩固关系，赋予更多参与感','针对中立者：找到共同利益点，渐进转化','针对否决者：识别核心顾虑，针对性解决或绕过','针对决策者：通过支持者间接影响，避免过度施压'])
    ]),
    ('表单5：双赢谈判框架',[
        ('四要素说明',['利益（Interests）：双方真正想要的东西，往往隐藏在立场背后','立场（Positions）：双方公开表达的要求，往往不是真实利益','选项（Options）：可能的解决方案，扩展选项才能找到双赢','标准（Criteria）：判断什么是公平合理的客观依据']),
        ('让步策略矩阵使用',['原则1：让步要有节奏——不要一次性让到底','原则2：让步要有回报——每次让步都要换取对方相应让步','原则3：让步要守红线——核心利益不能让步','原则4：记录让步过程——每次让步都要有书面记录']),
        ('常见筹码类型',['我方筹码：独特价值/替代方案/合作关系/时间压力/市场地位','对方筹码：预算压力/决策周期/竞争对比/替代选择/内部政治'])
    ]),
    ('表单6：大客户服务蓝图',[
        ('服务触点梳理',['售前触点：需求调研/方案设计/商务谈判/合同签订','售中触点：启动会议/里程碑交付/进度汇报/问题处理','售后触点：验收确认/满意度调查/续约谈判/增购沟通','增值触点：定期回顾/战略研讨/联合创新/生态共建']),
        ('服务标准设定要点',['可衡量——每个服务动作都有明确的衡量标准','可达成——标准要与客户实际需求和预算匹配','相关联——与客户业务目标直接关联','有时限——每个服务动作都有明确的时间要求'])
    ]),
    ('表单7：客户健康度仪表盘',[
        ('核心指标体系',['收入健康：合同履约率/续约率/增购率','关系健康：关键人关系评分/客户满意度/投诉率','价值健康：客户LTV/推荐意愿/案例合作意愿','风险健康：预警信号数量/问题解决时效/合同条款健康度']),
        ('预警阈值设定参考',['红色预警（立即处理）：满意度<60分 / 关键人离职 / 竞争对手渗透','黄色预警（重点关注）：满意度60-75分 / 续约前3个月无进展 / 预算削减','绿色正常（常规管理）：满意度>75分 / 关系稳定 / 无预警信号']),
        ('健康度改善行动指引',['红色预警：总经理/VP级别介入，快速解决核心问题','黄色预警：大客户经理加强拜访频率，制定专项改善计划','绿色正常：维持常规服务节奏，主动推送增值服务'])
    ]),
]
for i,(title,sections) in enumerate(instr_data):
    rows,rn,R,B = make_rows()
    R(ci(rn[0],'A',title,4),ht=20);rn[0]+=1
    B()
    for hdr,lines in sections:
        R(ci(rn[0],'A',hdr,4));rn[0]+=1
        for ln in lines:
            if ln=='':B()
            else:R(ci(rn[0],'A',ln));rn[0]+=1
        B()
    with open(TMP1+'/xl/worksheets/sheet{}.xml'.format(i+2),'w',encoding='utf-8') as f:
        f.write(sheet_xml(''.join(rows), cols_xml([100])))

for i in range(9,12):
    with open(TMP1+'/xl/worksheets/sheet{}.xml'.format(i),'w',encoding='utf-8') as f:
        f.write(sheet_xml(''))

with open(TMP1+'/xl/sharedStrings.xml','w',encoding='utf-8') as f:
    f.write(build_ss(S1))

sheets1=[('使用指引总览','rId4'),('大客户价值评估矩阵_使用说明','rId5'),('大客户画像三维图_使用说明','rId6'),('SPIN-PRO开发路径图_使用说明','rId7'),('关键人关系导航图_使用说明','rId8'),('双赢谈判框架_使用说明','rId9'),('大客户服务蓝图_使用说明','rId10'),('客户健康度仪表盘_使用说明','rId11')]
entries='\n'.join('  <sheet name="{}" sheetId="{}" r:id="{}"/>'.format(n,i+1,rid) for i,(n,rid) in enumerate(sheets1))
wb1='<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">\n  <bookViews><workbookView tabSelected="1"/></bookViews>\n  <sheets>\n{}  </sheets>\n  <calcPr calcId="0"/>\n</workbook>'.format(entries)
with open(TMP1+'/xl/workbook.xml','w',encoding='utf-8') as f:
    f.write(wb1)

rels1='''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
  <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml"/>
'''
for i in range(4,12):
    rels1+='  <Relationship Id="rId{}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet{}.xml"/>\n'.format(i,i-2)
rels1+='</Relationships>'
with open(TMP1+'/xl/_rels/workbook.xml.rels','w',encoding='utf-8') as f:
    f.write(rels1)

ct1='''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml"  ContentType="application/xml"/>
  <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
  <Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>
  <Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/>
'''
for i in range(1,12):
    ct1+='  <Override PartName="/xl/worksheets/sheet{}.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>\n'.format(i)
ct1+='</Types>'
with open(TMP1+'[Content_Types].xml','w',encoding='utf-8') as f:
    f.write(ct1)

print('Workbook 1 XML files written successfully')

# WORKBOOK 2
S2=[
    '大客户价值评估矩阵','使用说明：按五维度对客户进行1-5分评分，加权计算综合得分，确定客户级别',
    '客户名称','行业','年收入贡献(万)','战略协同度(1-5)','成长潜力(1-5)','关系复杂度(1-5)','竞争态势(1-5)','加权总分','客户级别',
    '权重说明','战略协同30%','成长潜力20%','关系复杂度20%','竞争态势15%','收入贡献15%',
    '客户级别标准','A级（战略级）>=4.0','B级（培育级）3.0-3.9','C级（观察级）<3.0',
    '示例客户A','科技业','800','5','4','3','4','4.20','A级（战略级）',
    '示例客户B','制造业','300','3','3','4','3','3.30','B级（培育级）',
    '示例客户C','服务业','100','2','2','2','3','2.15','C级（观察级）',
    '示例客户D','金融业','1200','4','5','5','4','4.50','A级（战略级）',
    '示例客户E','零售业','200','3','2','3','2','2.65','C级（观察级）',
    '大客户画像三维图',
    '基本信息表',
    '客户名称','统一社会信用代码','所属行业','企业规模','发展阶段','竞争地位','年营业额','员工人数',
    '示例公司A','91110000XXXXXXXX','科技服务','中型','成熟期','领先者','5亿','500人',
    '决策链结构表',
    '姓名','职位','部门','影响力(1-5)','支持度(1-5)','关系状态','备注',
    '张总','CEO','最高管理层','5','4','良好','最终决策者',
    '李副总','VP','销售部门','4','5','优秀','支持者，内部推动者',
    '王经理','采购总监','采购部','4','3','一般','否决权，需重点管理',
    '刘主管','IT负责人','信息技术部','3','4','良好','使用者，影响满意度',
    '陈助理','董事长助理','董事会','3','3','一般','影响决策',
    '需求分析表',
    '需求层次','具体描述','提出人','评估标准','优先级',
    '表面需求','提升团队销售能力','张总','客户满意度提升30%','高',
    '业务需求','完成年度销售目标','李副总','收入增长25%','高',
    '战略需求','构建行业竞争优势','张总','市场占有率提升10%','中',
    'SPIN-PRO开发路径图','SPIN-PRO开发路径',
    '阶段','阶段名称','阶段目标','关键动作','所需资源','预期成果','完成时间','状态',
    'S','确认机会','识别客户需求范围，评估是否值得投入','需求调研/竞品分析/价值主张提炼','销售经理1名','机会评估报告','T+0~T+15','待启动',
    'P','深化关系','建立信任关系，了解客户组织和决策链','客户拜访/需求深挖/关系建立','大客户经理1名','客户画像初稿','T+15~T+45','待启动',
    'I','形成方案','基于客户需求设计定制化解决方案','方案设计/内部评审/客户沟通','解决方案专家1名','定制化方案V1','T+45~T+75','待启动',
    'N','达成合作','商务谈判，达成合作协议','商务谈判/合同条款确认','销售VP+法务','签署合同','T+75~T+105','待启动',
    'PRO','签署执行','合同签署，进入交付阶段','合同签署/交接启动/交付启动','交付经理1名','项目启动会','T+105+','待启动',
    '客户接触时机跟踪表',
    '时机类型','识别时间','客户反应','我方行动','负责人','状态',
    '客户战略调整','2024-01-15','积极','立即预约张总','李经理','跟进中',
    '现有供应商问题','2024-02-20','非常积极','提交替代方案','王总','已签约',
    '关键人关系导航图','关键人关系导航图',
    '利益相关者矩阵',
    '姓名','职位','部门','角色类型','影响力(1-5)','支持度(1-5)','当前关系','关系目标','关系策略','行动计划',
    '张总','CEO','最高管理层','决策者','5','4','良好','强力支持','巩固关系，赋予参与感','定期战略对话',
    '李副总','VP','销售部门','支持者','4','5','优秀','公开背书','赋予更多参与感','邀请担任顾问',
    '王经理','采购总监','采购部','否决者','4','2','冷淡','中立转化','找到共同利益点','解决核心顾虑',
    '刘主管','IT负责人','信息技术部','影响者','3','4','良好','持续支持','保持沟通','定期产品演示',
    '陈助理','董事长助理','董事会','影响者','3','3','一般','渐进转化','建立信任','主动提供价值',
    '赵总监','财务总监','财务部','否决者','4','1','疏远','关系修复','解决资金顾虑','单独沟通',
    '关系突破时间轴',
    '阶段','时间','目标关键人','关系目标','具体行动','所需资源','完成标志',
    '破冰期','T+0~T+30','王经理','从冷淡到中立','提供免费IT评估报告','IT专家1名','收到正面反馈',
    '建联期','T+30~T+60','张总/李副总','从良好到优秀','战略对话/联合创新讨论','销售VP','建立深度信任',
    '同盟期','T+60~T+90','所有关键人','形成支持联盟','成功案例分享/参观考察','市场部','核心人支持我方',
    '双赢谈判框架','双赢谈判框架',
    '谈判准备清单',
    '类别','我方筹码/立场','对方筹码/立场','交换逻辑','红线','备注',
    '价值类','独家技术方案','预算限制','用技术价值换价格空间','价格不低于8折','核心价值不让步',
    '关系类','长期合作关系','更换供应商成本','用关系保障换优先权','账期不超过90天','关系承诺要书面化',
    '替代方案类','多供应商策略','单一来源依赖','用备选方案换优选地位','不接受唯一供应商','保持谈判主动权',
    '时间类','项目紧迫性','决策周期长','用时间压力换快速决策',' deadline不可突破','设置合理时间底线',
    '让步策略设计',
    '让步序号','我方让步内容','换取对方让步','让步时机','让步后状态',
    '让步1','延长账期30天','价格优惠2%','第二轮谈判','双方各退一步',
    '让步2','增加培训次数','优先签约权','第三轮谈判','进入核心条款',
    '让步3','免费升级服务','延长合同年限','最终谈判','达成合作',
    '谈判记录',
    '谈判时间','谈判地点','对方出席人','我方出席人','谈判结果','关键共识','关键分歧','后续行动',
    '2024-03-15','客户会议室','张总/李副总/王经理','我方VP/李经理','达成合作意向','价格优惠5%/账期60天','合同年限条款','T+5签署合同',
    '大客户服务蓝图','大客户服务蓝图',
    '服务触点梳理',
    '阶段','触点名称','服务内容','服务标准','服务频率','负责人','客户联系人','完成状态',
    '售前','需求调研','深度了解客户业务现状和需求','输出完整需求文档','按项目','李经理','张总','已完成',
    '售前','方案设计','基于需求提供定制化解决方案','方案通过内部评审','按项目','解决方案专家','李副总','已完成',
    '售前','商务谈判','明确合同条款和交付标准','签署标准合同','按项目','VP','张总','已完成',
    '售中','启动会议','项目正式启动，明确目标和里程碑','输出项目章程','项目启动时','交付经理','李副总','进行中',
    '售中','里程碑交付','按计划完成阶段性交付物','通过客户验收','每月一次','交付团队','王经理','进行中',
    '售中','进度汇报','定期汇报项目进度和风险','书面+口头双汇报','每两周','项目经理','李副总','进行中',
    '售中','问题处理','及时响应并解决交付中的问题','24小时响应','实时','技术支持','刘主管','进行中',
    '售后','验收确认','项目最终交付验收','签署验收报告','项目结束','交付经理','张总','待启动',
    '售后','满意度调查','收集客户对项目的评价','输出满意度报告','项目结束','客服经理','李副总','待启动',
    '售后','续约谈判','讨论下一阶段合作','签署续约合同','合同到期前3个月','VP','张总','待启动',
    '增值','定期回顾','季度业务回顾和方案优化','输出回顾报告','每季度','客户经理','李副总','待启动',
    '增值','战略研讨','年度战略规划讨论','联合创新计划','每年一次','VP','张总','待启动',
    '增值','联合创新','共同探索新业务机会','创新提案','按需','BD团队','张总','待启动',
    '服务标准详情',
    '服务项目','衡量指标','达标标准','当前水平','改善目标',
    '响应速度','平均响应时间','<=4小时','3小时','<=2小时',
    '问题解决率','一次性解决率','>=85%','80%','>=90%',
    '客户满意度','季度满意度评分','>=90分','85分','>=92分',
    '客户健康度仪表盘','客户健康度仪表盘',
    '月度健康度评分',
    '客户名称','收入健康(1-10)','关系健康(1-10)','价值健康(1-10)','风险健康(1-10)','综合得分','健康等级','预警信号','行动计划',
    '示例客户A','9','8','7','8','8.00','绿色正常','无','维持常规服务节奏',
    '示例客户B','7','6','8','5','6.50','黄色预警','预算削减预警','加强拜访，制定专项改善计划',
    '示例客户C','5','4','5','4','4.50','红色预警','关键人离职风险','VP级别立即介入',
    '示例客户D','8','9','8','9','8.50','绿色正常','无','维持现状，主动推送增值服务',
    '示例客户E','6','5','6','6','5.75','黄色预警','续约前无进展','大客户经理加强跟进',
    '预警信号记录',
    '日期','客户名称','信号类型','严重程度','涉及人员','应对措施','处理状态',
    '2024-01-20','示例客户B','预算削减预警','黄色','李副总','增加价值主张沟通','处理中',
    '2024-02-15','示例客户C','关键人离职风险','红色','张总','VP直接沟通，稳定关系','紧急处理',
    '2024-03-01','示例客户E','续约前无进展','黄色','李副总','预约季度回顾会议','跟进中',
    '续约/增购跟踪',
    '客户名称','合同到期日','续约意向','增购机会','负责人','跟进状态','里程碑',
    '示例客户A','2024-12-31','积极','有','李经理','正常跟进','提前60天启动续约',
    '示例客户B','2024-09-30','待确认','待评估','王总','需高层介入','尽快安排VP拜访',
    '示例客户C','2024-06-30','消极','无','VP','紧急处理','VP直接介入',
    '示例客户D','2025-03-31','积极','有联合创新','李经理','正常跟进','纳入战略合作讨论',
    '示例客户E','2024-08-31','待确认','有','李经理','加强跟进','T+30天内完成沟通',
]

# Sheet 1 - 评估矩阵
rows,rn,R,B = make_rows()
R(ci(rn[0],'A',S2[0],4),ht=22);rn[0]+=1
R(ci(rn[0],'A',S2[1]));rn[0]+=1
B()
hdrs=[S2[2],S2[3],S2[4],S2[5],S2[6],S2[7],S2[8],S2[9],S2[10]]
R(''.join(ci(rn[0],chr(65+i),h,4) for i,h in enumerate(hdrs)));rn[0]+=1
example_data=[
    (S2[20],S2[21],S2[22],S2[23],S2[24],S2[25],S2[26],S2[27],S2[28]),
    (S2[29],S2[30],S2[31],S2[32],S2[33],S2[34],S2[35],S2[36],S2[37]),
    (S2[38],S2[39],S2[40],S2[41],S2[42],S2[43],S2[44],S2[45],S2[46]),
    (S2[47],S2[48],S2[49],S2[50],S2[51],S2[52],S2[53],S2[54],S2[55]),
    (S2[56],S2[57],S2[58],S2[59],S2[60],S2[61],S2[62],S2[63],S2[64]),
]
for row in example_data:
    R(''.join(ci(rn[0],chr(65+i),str(v)) for i,v in enumerate(row)));rn[0]+=1
B()
R(ci(rn[0],'A',S2[11],4));rn[0]+=1
R(ci(rn[0],'A',S2[12])+ci(rn[0],'C',S2[13])+ci(rn[0],'D',S2[14])+ci(rn[0],'E',S2[15])+ci(rn[0],'F',S2[16]));rn[0]+=1
B()
R(ci(rn[0],'A',S2[17],4));rn[0]+=1
R(ci(rn[0],'A',S2[18]));rn[0]+=1
R(ci(rn[0],'A',S2[19]));rn[0]+=1
with open(TMP2+'/xl/worksheets/sheet1.xml','w',encoding='utf-8') as f:
    f.write(sheet_xml(''.join(rows), cols_xml([18,15,15,14,14,14,14,12,20])))

# Sheet 2 - 画像三维图
rows,rn,R,B = make_rows()
R(ci(rn[0],'A',S2[65],4),ht=22);rn[0]+=1
B()
R(ci(rn[0],'A',S2[66],4));rn[0]+=1
basic_hdrs=[S2[67],S2[68],S2[69],S2[70],S2[71],S2[72],S2[73],S2[74]]
R(''.join(ci(rn[0],chr(65+i),h,4) for i,h in enumerate(basic_hdrs)));rn[0]+=1
basic_row=[S2[75],S2[76],S2[77],S2[78],S2[79],S2[80],S2[81],S2[82]]
R(''.join(ci(rn[0],chr(65+i),str(v)) for i,v in enumerate(basic_row)));rn[0]+=1
B()
R(ci(rn[0],'A',S2[83],4));rn[0]+=1
dec_hdrs=[S2[84],S2[85],S2[86],S2[87],S2[88],S2[89],S2[90]]
R(''.join(ci(rn[0],chr(65+i),h,4) for i,h in enumerate(dec_hdrs)));rn[0]+=1
dec_rows=[(S2[91],S2[92],S2[93],S2[94],S2[95],S2[96],S2[97]),(S2[98],S2[99],S2[100],S2[101],S2[102],S2[103],S2[104]),(S2[105],S2[106],S2[107],S2[108],S2[109],S2[110],S2[111]),(S2[112],S2[113],S2[114],S2[115],S2[116],S2[117],S2[118]),(S2[119],S2[120],S2[121],S2[122],S2[123],S2[124],S2[125])]
for row in dec_rows:
    R(''.join(ci(rn[0],chr(65+i),str(v)) for i,v in enumerate(row)));rn[0]+=1
B()
R(ci(rn[0],'A',S2[126],4));rn[0]+=1
need_hdrs=[S2[127],S2[128],S2[129],S2[130],S2[131]]
R(''.join(ci(rn[0],chr(65+i),h,4) for i,h in enumerate(need_hdrs)));rn[0]+=1
need_rows=[(S2[132],S2[133],S2[134],S2[135],S2[136]),(S2[137],S2[138],S2[139],S2[140],S2[141]),(S2[142],S2[143],S2[144],S2[145],S2[146])]
for row in need_rows:
    R(''.join(ci(rn[0],chr(65+i),str(v)) for i,v in enumerate(row)));rn[0]+=1
with open(TMP2+'/xl/worksheets/sheet2.xml','w',encoding='utf-8') as f:
    f.write(sheet_xml(''.join(rows), cols_xml([20,18,10,10,10,12,12,10])))

# Sheet 3 - SPIN-PRO开发路径图
rows,rn,R,B = make_rows()
R(ci(rn[0],'A',S2[147],4),ht=22);rn[0]+=1
R(ci(rn[0],'A',S2[148]));rn[0]+=1
B()
spin_hdrs=[S2[149],S2[150],S2[151],S2[152],S2[153],S2[154],S2[155],S2[156]]
R(''.join(ci(rn[0],chr(65+i),h,4) for i,h in enumerate(spin_hdrs)));rn[0]+=1
spin_rows=[
    (S2[157],S2[158],S2[159],S2[160],S2[161],S2[162],S2[163],S2[164]),
    (S2[165],S2[166],S2[167],S2[168],S2[169],S2[170],S2[171],S2[172]),
    (S2[173],S2[174],S2[175],S2[176],S2[177],S2[178],S2[179],S2[180]),
    (S2[181],S2[182],S2[183],S2[184],S2[185],S2[186],S2[187],S2[188]),
    (S2[189],S2[190],S2[191],S2[192],S2[193],S2[194],S2[195],S2[196]),
]
for row in spin_rows:
    R(''.join(ci(rn[0],chr(65+i),str(v)) for i,v in enumerate(row)));rn[0]+=1
B()
R(ci(rn[0],'A',S2[197],4));rn[0]+=1
contact_hdrs=[S2[198],S2[199],S2[200],S2[201],S2[202],S2[203]]
R(''.join(ci(rn[0],chr(65+i),h,4) for i,h in enumerate(contact_hdrs)));rn[0]+=1
contact_rows=[(S2[204],S2[205],S2[206],S2[207],S2[208],S2[209]),(S2[210],S2[211],S2[212],S2[213],S2[214],S2[215])]
for row in contact_rows:
    R(''.join(ci(rn[0],chr(65+i),str(v)) for i,v in enumerate(row)));rn[0]+=1
with open(TMP2+'/xl/worksheets/sheet3.xml','w',encoding='utf-8') as f:
    f.write(sheet_xml(''.join(rows), cols_xml([10,14,20,22,14,18,12,10])))

# Sheet 4 - 关键人关系导航图
rows,rn,R,B = make_rows()
R(ci(rn[0],'A',S2[216],4),ht=22);rn[0]+=1
B()
R(ci(rn[0],'A',S2[217],4));rn[0]+=1
nav_hdrs=[S2[218],S2[219],S2[220],S2[221],S2[222],S2[223],S2[224],S2[225],S2[226],S2[227]]
R(''.join(ci(rn[0],chr(65+i),h,4) for i,h in enumerate(nav_hdrs)));rn[0]+=1
nav_rows=[
    (S2[228],S2[229],S2[230],S2[231],S2[232],S2[233],S2[234],S2[235],S2[236],S2[237]),
    (S2[238],S2[239],S2[240],S2[241],S2[242],S2[243],S2[244],S2[245],S2[246],S2[247]),
    (S2[248],S2[249],S2[250],S2[251],S2[252],S2[253],S2[254],S2[255],S2[256],S2[257]),
    (S2[258],S2[259],S2[260],S2[261],S2[262],S2[263],S2[264],S2[265],S2[266],S2[267]),
    (S2[268],S2[269],S2[270],S2[271],S2[272],S2[273],S2[274],S2[275],S2[276],S2[277]),
    (S2[278],S2[279],S2[280],S2[281],S2[282],S2[283],S2[284],S2[285],S2[286],S2[287]),
]
for row in nav_rows:
    R(''.join(ci(rn[0],chr(65+i),str(v)) for i,v in enumerate(row)));rn[0]+=1
B()
R(ci(rn[0],'A',S2[288],4));rn[0]+=1
timeline_hdrs=[S2[289],S2[290],S2[291],S2[292],S2[293],S2[294],S2[295]]
R(''.join(ci(rn[0],chr(65+i),h,4) for i,h in enumerate(timeline_hdrs)));rn[0]+=1
timeline_rows=[
    (S2[296],S2[297],S2[298],S2[299],S2[300],S2[301],S2[302]),
    (S2[303],S2[304],S2[305],S2[306],S2[307],S2[308],S2[309]),
    (S2[310],S2[311],S2[312],S2[313],S2[314],S2[315],S2[316]),
]
for row in timeline_rows:
    R(''.join(ci(rn[0],chr(65+i),str(v)) for i,v in enumerate(row)));rn[0]+=1
with open(TMP2+'/xl/worksheets/sheet4.xml','w',encoding='utf-8') as f:
    f.write(sheet_xml(''.join(rows), cols_xml([12,12,10,16,24,16,18,10,16,18])))

# Sheet 5 - 双赢谈判框架
rows,rn,R,B = make_rows()
R(ci(rn[0],'A',S2[317],4),ht=22);rn[0]+=1
B()
R(ci(rn[0],'A',S2[318],4));rn[0]+=1
neg_hdrs=[S2[319],S2[320],S2[321],S2[322],S2[323],S2[324]]
R(''.join(ci(rn[0],chr(65+i),h,4) for i,h in enumerate(neg_hdrs)));rn[0]+=1
neg_rows=[
    (S2[325],S2[326],S2[327],S2[328],S2[329],S2[330]),
    (S2[331],S2[332],S2[333],S2[334],S2[335],S2[336]),
    (S2[337],S2[338],S2[339],S2[340],S2[341],S2[342]),
    (S2[343],S2[344],S2[345],S2[346],S2[347],S2[348]),
]
for row in neg_rows:
    R(''.join(ci(rn[0],chr(65+i),str(v)) for i,v in enumerate(row)));rn[0]+=1
B()
R(ci(rn[0],'A',S2[349],4));rn[0]+=1
yield_hdrs=[S2[350],S2[351],S2[352],S2[353],S2[354]]
R(''.join(ci(rn[0],chr(65+i),h,4) for i,h in enumerate(yield_hdrs)));rn[0]+=1
yield_rows=[
    (S2[355],S2[356],S2[357],S2[358],S2[359]),
    (S2[360],S2[361],S2[362],S2[363],S2[364]),
    (S2[365],S2[366],S2[367],S2[368],S2[369]),
]
for row in yield_rows:
    R(''.join(ci(rn[0],chr(65+i),str(v)) for i,v in enumerate(row)));rn[0]+=1
B()
R(ci(rn[0],'A',S2[370],4));rn[0]+=1
record_hdrs=[S2[371],S2[372],S2[373],S2[374],S2[375],S2[376],S2[377],S2[378]]
R(''.join(ci(rn[0],chr(65+i),h,4) for i,h in enumerate(record_hdrs)));rn[0]+=1
record_rows=[(S2[379],S2[380],S2[381],S2[382],S2[383],S2[384],S2[385],S2[386])]
for row in record_rows:
    R(''.join(ci(rn[0],chr(65+i),str(v)) for i,v in enumerate(row)));rn[0]+=1
with open(TMP2+'/xl/worksheets/sheet5.xml','w',encoding='utf-8') as f:
    f.write(sheet_xml(''.join(rows), cols_xml([12,22,22,20,12,14,20,14])))

# Sheet 6 - 大客户服务蓝图
rows,rn,R,B = make_rows()
R(ci(rn[0],'A',S2[387],4),ht=22);rn[0]+=1
B()
R(ci(rn[0],'A',S2[388],4));rn[0]+=1
svc_hdrs=[S2[389],S2[390],S2[391],S2[392],S2[393],S2[394],S2[395],S2[396]]
R(''.join(ci(rn[0],chr(65+i),h,4) for i,h in enumerate(svc_hdrs)));rn[0]+=1
svc_rows=[
    (S2[397],S2[398],S2[399],S2[400],S2[401],S2[402],S2[403],S2[404]),
    (S2[405],S2[406],S2[407],S2[408],S2[409],S2[410],S2[411],S2[412]),
    (S2[413],S2[414],S2[415],S2[416],S2[417],S2[418],S2[419],S2[420]),
    (S2[421],S2[422],S2[423],S2[424],S2[425],S2[426],S2[427],S2[428]),
    (S2[429],S2[430],S2[431],S2[432],S2[433],S2[434],S2[435],S2[436]),
    (S2[437],S2[438],S2[439],S2[440],S2[441],S2[442],S2[443],S2[444]),
    (S2[445],S2[446],S2[447],S2[448],S2[449],S2[450],S2[451],S2[452]),
    (S2[453],S2[454],S2[455],S2[456],S2[457],S2[458],S2[459],S2[460]),
    (S2[461],S2[462],S2[463],S2[464],S2[465],S2[466],S2[467],S2[468]),
    (S2[469],S2[470],S2[471],S2[472],S2[473],S2[474],S2[475],S2[476]),
    (S2[477],S2[478],S2[479],S2[480],S2[481],S2[482],S2[483],S2[484]),
    (S2[485],S2[486],S2[487],S2[488],S2[489],S2[490],S2[491],S2[492]),
    (S2[493],S2[494],S2[495],S2[496],S2[497],S2[498],S2[499],S2[500]),
]
for row in svc_rows:
    R(''.join(ci(rn[0],chr(65+i),str(v)) for i,v in enumerate(row)));rn[0]+=1
B()
R(ci(rn[0],'A',S2[501],4));rn[0]+=1
std_hdrs=[S2[502],S2[503],S2[504],S2[505],S2[506]]
R(''.join(ci(rn[0],chr(65+i),h,4) for i,h in enumerate(std_hdrs)));rn[0]+=1
std_rows=[
    (S2[507],S2[508],S2[509],S2[510],S2[511]),
    (S2[512],S2[513],S2[514],S2[515],S2[516]),
    (S2[517],S2[518],S2[519],S2[520],S2[521]),
]
for row in std_rows:
    R(''.join(ci(rn[0],chr(65+i),str(v)) for i,v in enumerate(row)));rn[0]+=1
with open(TMP2+'/xl/worksheets/sheet6.xml','w',encoding='utf-8') as f:
    f.write(sheet_xml(''.join(rows), cols_xml([10,16,22,20,12,14,14,12])))

# Sheet 7 - 客户健康度仪表盘
rows,rn,R,B = make_rows()
R(ci(rn[0],'A',S2[522],4),ht=22);rn[0]+=1
B()
R(ci(rn[0],'A',S2[523],4));rn[0]+=1
health_hdrs=[S2[524],S2[525],S2[526],S2[527],S2[528],S2[529],S2[530],S2[531],S2[532]]
R(''.join(ci(rn[0],chr(65+i),h,4) for i,h in enumerate(health_hdrs)));rn[0]+=1
health_rows=[
    (S2[533],S2[534],S2[535],S2[536],S2[537],S2[538],S2[539],S2[540],S2[541]),
    (S2[542],S2[543],S2[544],S2[545],S2[546],S2[547],S2[548],S2[549],S2[550]),
    (S2[551],S2[552],S2[553],S2[554],S2[555],S2[556],S2[557],S2[558],S2[559]),
    (S2[560],S2[561],S2[562],S2[563],S2[564],S2[565],S2[566],S2[567],S2[568]),
    (S2[569],S2[570],S2[571],S2[572],S2[573],S2[574],S2[575],S2[576],S2[577]),
]
for row in health_rows:
    R(''.join(ci(rn[0],chr(65+i),str(v)) for i,v in enumerate(row)));rn[0]+=1
B()
R(ci(rn[0],'A',S2[578],4));rn[0]+=1
sig_hdrs=[S2[579],S2[580],S2[581],S2[582],S2[583],S2[584],S2[585]]
R(''.join(ci(rn[0],chr(65+i),h,4) for i,h in enumerate(sig_hdrs)));rn[0]+=1
sig_rows=[
    (S2[586],S2[587],S2[588],S2[589],S2[590],S2[591],S2[592]),
    (S2[593],S2[594],S2[595],S2[596],S2[597],S2[598],S2[599]),
    (S2[600],S2[601],S2[602],S2[603],S2[604],S2[605],S2[606]),
]
for row in sig_rows:
    R(''.join(ci(rn[0],chr(65+i),str(v)) for i,v in enumerate(row)));rn[0]+=1
B()
R(ci(rn[0],'A',S2[607],4));rn[0]+=1
renew_hdrs=[S2[608],S2[609],S2[610],S2[611],S2[612],S2[613],S2[614]]
R(''.join(ci(rn[0],chr(65+i),h,4) for i,h in enumerate(renew_hdrs)));rn[0]+=1
renew_rows=[
    (S2[615],S2[616],S2[617],S2[618],S2[619],S2[620],S2[621]),
    (S2[622],S2[623],S2[624],S2[625],S2[626],S2[627],S2[628]),
    (S2[629],S2[630],S2[631],S2[632],S2[633],S2[634],S2[635]),
    (S2[636],S2[637],S2[638],S2[639],S2[640],S2[641],S2[642]),
    (S2[643],S2[644],S2[645],S2[646],S2[647],S2[648],S2[649]),
]
for row in renew_rows:
    R(''.join(ci(rn[0],chr(65+i),str(v)) for i,v in enumerate(row)));rn[0]+=1
with open(TMP2+'/xl/worksheets/sheet7.xml','w',encoding='utf-8') as f:
    f.write(sheet_xml(''.join(rows), cols_xml([16,14,14,14,14,12,20,22,16])))

with open(TMP2+'/xl/sharedStrings.xml','w',encoding='utf-8') as f:
    f.write(build_ss(S2))

sheets2=[('大客户价值评估矩阵','rId4'),('大客户画像三维图','rId5'),('SPIN-PRO开发路径图','rId6'),('关键人关系导航图','rId7'),('双赢谈判框架','rId8'),('大客户服务蓝图','rId9'),('客户健康度仪表盘','rId10')]
entries2='\n'.join('  <sheet name="{}" sheetId="{}" r:id="{}"/>'.format(n,i+1,rid) for i,(n,rid) in enumerate(sheets2))
wb2='<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">\n  <bookViews><workbookView tabSelected="1"/></bookViews>\n  <sheets>\n{}  </sheets>\n  <calcPr calcId="0"/>\n</workbook>'.format(entries2)
with open(TMP2+'/xl/workbook.xml','w',encoding='utf-8') as f:
    f.write(wb2)

rels2='''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
  <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml"/>
'''
for i in range(4,11):
    rels2+='  <Relationship Id="rId{}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet{}.xml"/>\n'.format(i,i-2)
rels2+='</Relationships>'
with open(TMP2+'/xl/_rels/workbook.xml.rels','w',encoding='utf-8') as f:
    f.write(rels2)

ct2='''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml"  ContentType="application/xml"/>
  <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
  <Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>
  <Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/>
'''
for i in range(1,8):
    ct2+='  <Override PartName="/xl/worksheets/sheet{}.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>\n'.format(i)
ct2+='</Types>'
with open(TMP2+'[Content_Types].xml','w',encoding='utf-8') as f:
    f.write(ct2)

print('Workbook 2 XML files written successfully')

# Pack both
import subprocess
result1 = subprocess.run(['python3', SKILL+'/xlsx_pack.py', TMP1, OUT1], capture_output=True, text=True)
print('Pack 1:', result1.stdout, result1.stderr)
result2 = subprocess.run(['python3', SKILL+'/xlsx_pack.py', TMP2, OUT2], capture_output=True, text=True)
print('Pack 2:', result2.stdout, result2.stderr)
print('Done!')
