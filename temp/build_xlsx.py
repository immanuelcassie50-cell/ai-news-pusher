#!/usr/bin/env python3
"""Build both Excel workbooks for 大客户开发与管理 course materials."""

import sys, os, subprocess

OUT1 = "D:/新课开发/经营/系列/09_大客户开发与管理/课程大纲/配套表单使用指引.xlsx"
OUT2 = "D:/新课开发/经营/系列/09_大客户开发与管理/课程大纲/配套表单_空表.xlsx"
TMP1 = "/tmp/xlsx_w1"
TMP2 = "/tmp/xlsx_w2"
SKILL = "C:/Users/Administrator/.claude/skills/Excel表格处理/scripts"

os.makedirs(os.path.dirname(OUT1), exist_ok=True)
os.makedirs(os.path.dirname(OUT2), exist_ok=True)

def build_ss(items):
    unique = []; idx = {}
    for x in items:
        if x not in idx:
            idx[x] = len(unique); unique.append(x)
    lines = ['<?xml version="1.0" encoding="UTF-8" standalone="yes"?>',
             '<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="{}" uniqueCount="{}">'.format(len(items), len(unique))]
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

# WORKBOOK 1 strings
S1=[
    "大客户开发与管理——配套表单使用指引","说明各工具表单的使用时机和使用方法",
    "序号","表单名称","使用时机","使用目的","填写人","填写时长","注意事项",
    "大客户价值评估矩阵","课程第一章 + 日常客户分级","识别战略级大客户，建立团队分级共识","销售团队管理层","30分钟/客户","需要3个以上客户数据对比才有意义",
    "大客户画像三维图","课程第二章 + 客户初次接触前","深度了解目标客户的决策链和真实需求","大客户经理","45分钟/客户","不是一次性填写，需要持续更新",
    "SPIN-PRO开发路径图","课程第三章 + 客户开发启动时","设计完整的客户开发路径和关键动作","大客户经理","40分钟/客户","路径设计后需要根据客户反馈动态调整",
    "关键人关系导航图","课程第四章 + 客户关系深化阶段","识别所有利益相关者，制定关系突破策略","大客户经理 + 销售管理","60分钟/客户","至少包含KP和购买影响者两类关键人",
    "双赢谈判框架","课程第五章 + 谈判准备阶段","明确筹码清单，设计让步策略","大客户经理","45分钟/谈判","红线必须在谈判前设定，谈判中不能随意突破",
    "大客户服务蓝图","课程第六章 + 合同签订后","设计完整的服务交付体系和服务标准","服务经理 + 大客户经理","50分钟/客户","服务蓝图需要客户参与确认",
    "客户健康度仪表盘","课程第六章 + 持续客户管理","监测客户状态，提前预警风险","服务经理 + 客户成功","每月更新","预警阈值需要根据客户类型定制",
    "课程产出工具使用顺序","说明：以下顺序是建议使用顺序，实际使用中可根据业务场景灵活调整",
    "新客户开发：从评估矩阵→画像→开发路径→关系导航→谈判框架",
    "现有客户深化：从画像→关系导航→服务蓝图→健康度仪表盘",
    "客户风险管理：从健康度仪表盘→画像更新→关系导航→谈判筹码",
]

# Sheet 1 of W1
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

# Sheets 2-8
instr_data=[
    ("表单1：大客户价值评估矩阵",[("使用场景",["什么时候用：年度客户分级评审 / 新客户准入评估 / 资源重新配置时","使用频率：每季度一次常规评审，重大决策前专项评估"]),("填写步骤",["Step 1: 收集数据——收集目标客户的收入数据、行业数据、竞争数据","Step 2: 逐项评分——按五维度（收入贡献/战略协同/成长潜力/关系复杂度/竞争态势）逐项打分1-5分","Step 3: 加权计算——按预设权重计算综合得分","Step 4: 团队讨论——管理层+一线销售共同讨论确认","Step 5: 输出分级——A级（战略级）/ B级（培育级）/ C级（观察级）"]),("评分标准参考",["收入贡献：1分（年贡献<50万）2分（50-200万）3分（200-500万）4分（500-1000万）5分（>1000万）","战略协同：1分（无协同）3分（部分协同）5分（高度协同/战略捆绑）","成长潜力：1分（零增长）3分（稳定增长）5分（高速增长/新领域拓展）","关系复杂度：1分（单一联系人）3分（3-5人决策链）5分（复杂组织/多层审批）","竞争态势：1分（竞争对手主导）3分（双方平衡）5分（我方主导/唯一供应商）"])]),
    ("表单2：大客户画像三维图",[("使用场景",["什么时候用：初次接触重要客户前 / 客户关系遇到瓶颈时 / 季度客户回顾时","使用频率：初次填写后每半年更新一次"]),("三维度说明",["维度一：基本信息（行业/企业规模/发展阶段/竞争地位/财务状况）","维度二：决策链结构（关键人/支持者/否决者/使用者及其职位和影响力评分）","维度三：核心需求（表面需求-业务需求-战略需求三层，以及各层的评估标准）"]),("需求深挖话术树使用要点",["S类问题（Situation状况）：了解客户的基本情况和背景","P类问题（Problem问题）：引导客户说出遇到的问题和困难","I类问题（Implication影响）：探讨问题不解决会造成的影响和后果","N类问题（Need-payoff需求回报）：引导客户说出解决问题后的价值和回报","PRO类问题（新一代方案）：探讨我们方案能带来的独特价值"])]),
    ("表单3：SPIN-PRO开发路径图",[("四阶段说明",["S阶段-Scoping确认机会：识别客户需求范围，评估是否值得投入","P阶段-Partnering深化关系：建立信任关系，了解客户组织和决策链","I阶段-Illuminating形成方案：基于客户需求设计定制化解决方案","N阶段-Negotiating达成合作：商务谈判，达成合作协议","PRO阶段-PRO签署执行：合同签署，进入交付阶段"]),("五大接触时机",["时机1：客户战略调整/组织变革——及时感知，率先介入","时机2：现有供应商出现问题——快速响应，填补空缺","时机3：行业政策/市场变化——提供专业知识，建立咨询地位","时机4：客户业务扩张/新项目启动——发现新需求，创造增购机会","时机5：竞争对手关系松动——主动接触，争夺先机"])]),
    ("表单4：关键人关系导航图",[("利益相关者分类",["决策者（Decision Maker）：最终批准购买的人，通常是高管","支持者（Champion）：内部推动项目的关键人物，愿意为我方背书","否决者（Blocker）：可以阻止项目的人，需要重点管理","影响者（Influencer）：虽无决定权但能影响决策的人","使用者（User）：最终使用产品/服务的人，影响满意度"]),("关系支持度评估",["5分：强力支持，愿意公开为我方背书","4分：支持，理解我方价值","3分：中立，不明确表态","2分：冷淡，对我方有疑虑","1分：反对，明确拒绝我方"]),("关系突破策略制定要点",["针对支持者：巩固关系，赋予更多参与感","针对中立者：找到共同利益点，渐进转化","针对否决者：识别核心顾虑，针对性解决或绕过","针对决策者：通过支持者间接影响，避免过度施压"])]),
    ("表单5：双赢谈判框架",[("四要素说明",["利益（Interests）：双方真正想要的东西，往往隐藏在立场背后","立场（Positions）：双方公开表达的要求，往往不是真实利益","选项（Options）：可能的解决方案，扩展选项才能找到双赢","标准（Criteria）：判断什么是公平合理的客观依据"]),("让步策略矩阵使用",["原则1：让步要有节奏——不要一次性让到底","原则2：让步要有回报——每次让步都要换取对方相应让步","原则3：让步要守红线——核心利益不能让步","原则4：记录让步过程——每次让步都要有书面记录"]),("常见筹码类型",["我方筹码：独特价值/替代方案/合作关系/时间压力/市场地位","对方筹码：预算压力/决策周期/竞争对比/替代选择/内部政治"])]),
    ("表单6：大客户服务蓝图",[("服务触点梳理",["售前触点：需求调研/方案设计/商务谈判/合同签订","售中触点：启动会议/里程碑交付/进度汇报/问题处理","售后触点：验收确认/满意度调查/续约谈判/增购沟通","增值触点：定期回顾/战略研讨/联合创新/生态共建"]),("服务标准设定要点",["可衡量——每个服务动作都有明确的衡量标准","可达成——标准要与客户实际需求和预算匹配","相关联——与客户业务目标直接关联","有时限——每个服务动作都有明确的时间要求"])]),
    ("表单7：客户健康度仪表盘",[("核心指标体系",["收入健康：合同履约率/续约率/增购率","关系健康：关键人关系评分/客户满意度/投诉率","价值健康：客户LTV/推荐意愿/案例合作意愿","风险健康：预警信号数量/问题解决时效/合同条款健康度"]),("预警阈值设定参考",["红色预警（立即处理）：满意度<60分 / 关键人离职 / 竞争对手渗透","黄色预警（重点关注）：满意度60-75分 / 续约前3个月无进展 / 预算削减","绿色正常（常规管理）：满意度>75分 / 关系稳定 / 无预警信号"]),("健康度改善行动指引",["红色预警：总经理/VP级别介入，快速解决核心问题","黄色预警：大客户经理加强拜访频率，制定专项改善计划","绿色正常：维持常规服务节奏，主动推送增值服务"])]),
]
for i,(title,sections) in enumerate(instr_data):
    rows,rn,R,B=make_rows()
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

sheets1=[("使用指引总览","rId4"),("大客户价值评估矩阵_使用说明","rId5"),("大客户画像三维图_使用说明","rId6"),("SPIN-PRO开发路径图_使用说明","rId7"),("关键人关系导航图_使用说明","rId8"),("双赢谈判框架_使用说明","rId9"),("大客户服务蓝图_使用说明","rId10"),("客户健康度仪表盘_使用说明","rId11")]
entries='\n'.join('  <sheet name="{}" sheetId="{}" r:id="{}"/>'.format(n,i+1,rid) for i,(n,rid) in enumerate(sheets1))
wb1='''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <bookViews><workbookView tabSelected="1"/></bookViews>
  <sheets>
{}
  </sheets>
  <calcPr calcId="0"/>
</workbook>'''.format(entries)
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

# WORKBOOK 2 strings
S2=[
    "大客户价值评估矩阵","使用说明：按五维度对客户进行1-5分评分，加权计算综合得分，确定客户级别",
    "客户名称","行业","年收入贡献(万)","战略协同度(1-5)","成长潜力(1-5)","关系复杂度(1-5)","竞争态势(1-5)","加权总分","客户级别",
    "权重说明：战略协同30% / 成长潜力20% / 关系复杂度20% / 竞争态势15% / 收入贡献15%",
    "客户级别标准：A级（战略级）≥4.0 | B级（培育级）3.0-3.9 | C级（观察级）<3.0",
    "示例客户A（制造业龙头）","高端制造","1200","5","4","5","4",
    "示例客户B（成长型科技）","科技","300","4","5","3","3",
    "示例客户C（传统企业）","制造","80","2","2","2","2",
    "示例客户D（国际品牌）","消费品","2000","4","3","5","5",
    "示例客户E（新兴企业）","新能源","150","3","4","3","3",
    "大客户画像三维图",
    "基本信息表","客户名称","统一社会信用代码","所属行业","企业规模","发展阶段","竞争地位","年营业额","员工人数",
    "决策链结构表","姓名","职位","部门","影响力(1-5)","支持度(1-5)","关系状态","备注",
    "需求分析表","需求层次","具体描述","提出人","评估标准","优先级",
    "示例：张三","采购总监","采购部","5","4","良好","关键决策人",
    "示例：李四","IT总监","信息部","3","3","一般","技术评估人",
    "示例：王五","财务经理","财务部","2","2","需加强","预算审批人",
    "示例：赵六","CEO","管理层","5","4","良好","战略层面推动者",
    "示例：孙七","项目经理","业务部","3","3","一般","项目执行层",
    "表面需求","降低成本，提高采购效率","采购部门","成本降低10%以上","高",
    "业务需求","提升供应链稳定性，保障交付","业务部门","交付准时率>98%","高",
    "战略需求","对标行业标杆，打造数字化供应链","高管层","成为行业案例","中",
    "SPIN-PRO开发路径图",
    "阶段","阶段名称","阶段目标","关键动作","所需资源","预期成果","完成时间","状态",
    "S","确认机会","识别客户需求范围，评估是否值得投入","初步接触/需求确认/价值匹配评估","销售代表","需求确认书","","待跟进",
    "P","深化关系","建立信任关系，了解客户组织和决策链","关键人拜访/关系建立/需求深挖","销售+售前","决策链图谱","","待跟进",
    "I","形成方案","基于客户需求设计定制化解决方案","方案编写/方案呈现/客户反馈","销售+售前+产品","定制化方案","","待跟进",
    "N","达成合作","商务谈判，达成合作协议","商务谈判/合同条款确认/合同签署","销售+法务+管理层","合作协议","","待跟进",
    "PRO","签署执行","合同签署，进入交付阶段","合同签署/启动会议/交付计划","交付团队","项目启动","","待跟进",
    "客户接触时机跟踪表","时机类型","识别时间","客户反应","我方行动","负责人","状态",
    "关键人关系导航图",
    "姓名","职位","部门","角色类型","影响力(1-5)","支持度(1-5)","当前关系","关系目标","关系策略","行动计划",
    "示例：张三","VP采购","采购部","决策者","5","4","良好","强力支持","借助其推动内部批准","定期高层沟通",
    "示例：李四","IT总监","信息部","支持者","4","5","优秀","成为内部 champion","邀请参与方案设计",
    "示例：王五","财务总监","财务部","否决者","4","2","一般","转化为中立","提供ROI分析材料",
    "示例：赵六","CEO","管理层","决策者","5","4","良好","保持战略对话","定期战略回顾",
    "示例：孙七","终端用户","运维部","使用者","2","3","一般","提升满意度","收集使用反馈",
    "关系突破时间轴","阶段","时间","目标关键人","关系目标","具体行动","所需资源","完成标志",
    "双赢谈判框架",
    "类别","我方筹码/立场","对方筹码/立场","交换逻辑","红线","备注",
    "价值类","独特技术优势/行业领先解决方案","预算限制/成本压力","用技术价值换取价格空间","毛利率不低于20%","",
    "关系类","长期合作关系/战略伙伴承诺","希望更换供应商/引入竞争","用关系承诺换取首单优惠","核心条款不妥协","",
    "替代方案类","备选方案准备/可转向其他客户","已有备选供应商/谈判筹码","展示备选方案价值","不让步核心交付标准","",
    "时间类","Q4冲量/年度目标完成需求","财年截止/采购周期限制","用时间压力换取更好条款","关键时间节点前必须签约","",
    "让步策略设计","让步序号","我方让步内容","换取对方让步","让步时机","让步后状态",
    "谈判记录","谈判时间","谈判地点","对方出席人","我方出席人","谈判结果","关键共识","关键分歧","后续行动",
    "大客户服务蓝图",
    "阶段","触点名称","服务内容","服务标准","服务频率","负责人","客户联系人","完成状态",
    "售前","需求调研","深度了解客户业务需求和痛点","调研报告完整准确","项目启动时","客户经理","","",
    "售前","方案设计","基于需求提供定制化解决方案","方案通过内部评审","需求确认后1周内","解决方案经理","","",
    "售前","商务谈判","合同条款协商与确认","双方达成一致","谈判轮次≤3轮","销售负责人","","",
    "售中","启动会议","项目正式启动，交付计划确认","会议纪要双方确认","合同签订后1周内","项目经理","","",
    "售中","里程碑交付","按计划完成各阶段交付物","按时按质交付","按合同里程碑","项目经理","","",
    "售中","进度汇报","定期向客户汇报项目进展","汇报材料完整准确","每月一次","项目经理","","",
    "售中","问题处理","及时响应并解决交付中的问题","问题24小时内响应","随时","项目经理","","",
    "售后","验收确认","项目完成验收，确认交付成果","双方签署验收报告","项目结束时","项目经理","","",
    "售后","满意度调查","收集客户满意度反馈","满意度≥85分","项目结束后","客户成功经理","","",
    "售后","续约谈判","续约意向沟通与条款确认","提前6个月启动","合同到期前6个月","客户经理","","",
    "增值","定期回顾","战略业务回顾与前瞻","每季度一次","每年四次","客户总监","","",
    "增值","战略研讨","联合创新和业务拓展探讨","年度联合规划","每年一次","客户总监","","",
    "增值","联合创新","共同探索新业务场景和解决方案","有明确的联合成果","按需","产品+客户成功","","",
    "服务标准详情","服务项目","衡量指标","达标标准","当前水平","改善目标",
    "客户健康度仪表盘",
    "客户名称","收入健康(1-10)","关系健康(1-10)","价值健康(1-10)","风险健康(1-10)","综合得分","健康等级","预警信号","行动计划",
    "示例：客户A","9","8","9","7","","","良好","","",
    "示例：客户B","7","6","8","5","","","关注","关键人近期可能离职","加强关系维护",
    "示例：客户C","8","7","7","6","","","良好","","",
    "示例：客户D","5","4","6","4","","","预警","竞争对手积极接触","高管拜访",
    "示例：客户E","6","5","5","5","","","关注","预算年度调整中","持续跟踪",
    "预警信号记录","日期","客户名称","信号类型","严重程度","涉及人员","应对措施","处理状态",
    "续约/增购跟踪","客户名称","合同到期日","续约意向","增购机会","负责人","跟进状态","里程碑",
]

with open(TMP2+'/xl/sharedStrings.xml','w',encoding='utf-8') as f:
    f.write(build_ss(S2))

# Sheet 1: 大客户价值评估矩阵
rows,rn,R,B=make_rows()
R(ci(rn[0],'A',S2[0],4),ht=20);rn[0]+=1
R(ci(rn[0],'A',S2[1]));rn[0]+=1;B()
R(ci(rn[0],'A',S2[2],4)+ci(rn[0],'B',S2[3],4)+ci(rn[0],'C',S2[4],4)+ci(rn[0],'D',S2[5],4)+ci(rn[0],'E',S2[6],4)+ci(rn[0],'F',S2[7],4)+ci(rn[0],'G',S2[8],4)+ci(rn[0],'H',S2[9],4)+ci(rn[0],'I',S2[10],4));rn[0]+=1
ex=[(S2[16],S2[17],S2[18],S2[19],S2[20],S2[21],S2[22]),(S2[23],S2[24],S2[25],S2[26],S2[27],S2[28],S2[29]),(S2[30],S2[31],S2[32],S2[33],S2[34],S2[35],S2[36]),(S2[37],S2[38],S2[39],S2[40],S2[41],S2[42],S2[43]),(S2[44],S2[45],S2[46],S2[47],S2[48],S2[49],S2[50])]
for name,ind,inc,sg,gp,rc,cs in ex:
    fh='D{}*0.3+E{}*0.2+F{}*0.2+G{}*0.15+LOOKUP(C{},{{0,50,200,500,1000}},{{1,2,3,4,5}})*0.15'.format(rn[0],rn[0],rn[0],rn[0],rn[0])
    fl='IF(H{}>=4,"A级",IF(H{}>=3,"B级","C级"))'.format(rn[0],rn[0])
    R(ci(rn[0],'A',name)+ci(rn[0],'B',ind)+cn(rn[0],'C',inc)+cn(rn[0],'D',sg)+cn(rn[0],'E',gp)+cn(rn[0],'F',rc)+cn(rn[0],'G',cs)+cf(rn[0],'H',fh)+cf(rn[0],'I',fl));rn[0]+=1
B();R(ci(rn[0],'A',S2[11],4));rn[0]+=1
R(ci(rn[0],'A',S2[12]));rn[0]+=1;B()
R(ci(rn[0],'A',S2[13],4));rn[0]+=1
with open(TMP2+'/xl/worksheets/sheet1.xml','w',encoding='utf-8') as f:
    f.write(sheet_xml(''.join(rows), cols_xml([24,12,16,16,16,16,16,12,12])))

# Sheet 2: 大客户画像三维图
rows,rn,R,B=make_rows()
R(ci(rn[0],'A',S2[51],4),ht=20);rn[0]+=1;B()
R(ci(rn[0],'A',S2[52],4));rn[0]+=1
R(''.join(ci(rn[0],chr(65+i),S2[53+i],4) for i in range(8)));rn[0]+=1
R(''.join(ci(rn[0],chr(65+i),'',0) for i in range(8)));rn[0]+=1;B()
R(ci(rn[0],'A',S2[61],4));rn[0]+=1
R(''.join(ci(rn[0],chr(65+i),S2[62+i],4) for i in range(7)));rn[0]+=1
dc=[S2[69+i*7:69+i*7+7] for i in range(5)]
for rd in dc:
    R(''.join(ci(rn[0],chr(65+i),str(v),0) for i,v in enumerate(rd)));rn[0]+=1
B()
R(ci(rn[0],'A',S2[104],4));rn[0]+=1
R(''.join(ci(rn[0],chr(65+i),S2[105+i],4) for i in range(5)));rn[0]+=1
need=[S2[110+i*5:110+i*5+5] for i in range(3)]
for rd in need:
    R(''.join(ci(rn[0],chr(65+i),str(v),0) for i,v in enumerate(rd)));rn[0]+=1
with open(TMP2+'/xl/worksheets/sheet2.xml','w',encoding='utf-8') as f:
    f.write(sheet_xml(''.join(rows), cols_xml([20]*8)))

# Sheet 3: SPIN-PRO
rows,rn,R,B=make_rows()
R(ci(rn[0],'A',S2[125],4),ht=20);rn[0]+=1;B()
R(''.join(ci(rn[0],chr(65+i),S2[126+i],4) for i in range(8)));rn[0]+=1
spin=[S2[134+i*8:134+i*8+8] for i in range(5)]
for rd in spin:
    R(''.join(ci(rn[0],chr(65+i),str(v),0) for i,v in enumerate(rd)));rn[0]+=1
B()
R(ci(rn[0],'A',S2[174],4));rn[0]+=1
R(''.join(ci(rn[0],chr(65+i),S2[175+i],4) for i in range(6)));rn[0]+=1
R(''.join(ci(rn[0],chr(65+i),'',0) for i in range(6)));rn[0]+=1
with open(TMP2+'/xl/worksheets/sheet3.xml','w',encoding='utf-8') as f:
    f.write(sheet_xml(''.join(rows), cols_xml([16]*8)))

# Sheet 4: 关键人关系导航图
rows,rn,R,B=make_rows()
R(ci(rn[0],'A',S2[182],4),ht=20);rn[0]+=1;B()
R(ci(rn[0],'A',S2[183],4));rn[0]+=1
R(''.join(ci(rn[0],chr(65+i),S2[184+i],4) for i in range(10)));rn[0]+=1
nav=[S2[194+i*10:194+i*10+10] for i in range(5)]
for rd in nav:
    R(''.join(ci(rn[0],chr(65+i),str(v),0) for i,v in enumerate(rd)));rn[0]+=1
B()
R(ci(rn[0],'A',S2[244],4));rn[0]+=1
R(''.join(ci(rn[0],chr(65+i),S2[245+i],4) for i in range(7)));rn[0]+=1
R(''.join(ci(rn[0],chr(65+i),'',0) for i in range(7)));rn[0]+=1
with open(TMP2+'/xl/worksheets/sheet4.xml','w',encoding='utf-8') as f:
    f.write(sheet_xml(''.join(rows), cols_xml([18]*10)))

# Sheet 5: 双赢谈判框架
rows,rn,R,B=make_rows()
R(ci(rn[0],'A',S2[253],4),ht=20);rn[0]+=1;B()
R(ci(rn[0],'A',S2[254],4));rn[0]+=1
R(''.join(ci(rn[0],chr(65+i),S2[255+i],4) for i in range(6)));rn[0]+=1
neg=[S2[261+i*6:261+i*6+6] for i in range(4)]
for rd in neg:
    R(''.join(ci(rn[0],chr(65+i),str(v),0) for i,v in enumerate(rd)));rn[0]+=1
B()
R(ci(rn[0],'A',S2[285],4));rn[0]+=1
R(''.join(ci(rn[0],chr(65+i),S2[286+i],4) for i in range(5)));rn[0]+=1
R(''.join(ci(rn[0],chr(65+i),'',0) for i in range(5)));rn[0]+=1
B()
R(ci(rn[0],'A',S2[292],4));rn[0]+=1
R(''.join(ci(rn[0],chr(65+i),S2[293+i],4) for i in range(8)));rn[0]+=1
R(''.join(ci(rn[0],chr(65+i),'',0) for i in range(8)));rn[0]+=1
with open(TMP2+'/xl/worksheets/sheet5.xml','w',encoding='utf-8') as f:
    f.write(sheet_xml(''.join(rows), cols_xml([18]*6)))

# Sheet 6: 大客户服务蓝图
rows,rn,R,B=make_rows()
R(ci(rn[0],'A',S2[302],4),ht=20);rn[0]+=1;B()
R(ci(rn[0],'A',S2[303],4));rn[0]+=1
R(''.join(ci(rn[0],chr(65+i),S2[304+i],4) for i in range(8)));rn[0]+=1
svc=[S2[312+i*8:312+i*8+8] for i in range(13)]
for rd in svc:
    R(''.join(ci(rn[0],chr(65+i),str(v),0) for i,v in enumerate(rd)));rn[0]+=1
B()
R(ci(rn[0],'A',S2[416],4));rn[0]+=1
R(''.join(ci(rn[0],chr(65+i),S2[417+i],4) for i in range(5)));rn[0]+=1
R(''.join(ci(rn[0],chr(65+i),'',0) for i in range(5)));rn[0]+=1
with open(TMP2+'/xl/worksheets/sheet6.xml','w',encoding='utf-8') as f:
    f.write(sheet_xml(''.join(rows), cols_xml([14]*8)))

# Sheet 7: 客户健康度仪表盘
rows,rn,R,B=make_rows()
R(ci(rn[0],'A',S2[423],4),ht=20);rn[0]+=1;B()
R(ci(rn[0],'A',S2[424],4));rn[0]+=1
R(''.join(ci(rn[0],chr(65+i),S2[425+i],4) for i in range(9)));rn[0]+=1
hlth=[S2[434+i*9:434+i*9+9] for i in range(5)]
for rd in hlth:
    cells=''.join(ci(rn[0],chr(65+i),str(v),0) for i,v in enumerate(rd))
    cells=cells[:cells.rfind('</row>')]
    cells+=cf(rn[0],'F','AVERAGE(B{}:E{})'.format(rn[0],rn[0]))+cf(rn[0],'G','IF(F{}>=8,"良好",IF(F{}>=6,"关注","预警"))'.format(rn[0],rn[0]))+'\n  </row>\n'
    rows.append(cells);rn[0]+=1
B()
R(ci(rn[0],'A',S2[479],4));rn[0]+=1
R(''.join(ci(rn[0],chr(65+i),S2[480+i],4) for i in range(7)));rn[0]+=1
B()
R(ci(rn[0],'A',S2[488],4));rn[0]+=1
R(''.join(ci(rn[0],chr(65+i),S2[489+i],4) for i in range(7)));rn[0]+=1
R(''.join(ci(rn[0],chr(65+i),'',0) for i in range(7)));rn[0]+=1
with open(TMP2+'/xl/worksheets/sheet7.xml','w',encoding='utf-8') as f:
    f.write(sheet_xml(''.join(rows), cols_xml([18]*9)))

for i in range(8,11):
    with open(TMP2+'/xl/worksheets/sheet{}.xml'.format(i),'w',encoding='utf-8') as f:
        f.write(sheet_xml(''))

sheets2=[("大客户价值评估矩阵","rId4"),("大客户画像三维图","rId5"),("SPIN-PRO开发路径图","rId6"),("关键人关系导航图","rId7"),("双赢谈判框架","rId8"),("大客户服务蓝图","rId9"),("客户健康度仪表盘","rId10")]
entries2='\n'.join('  <sheet name="{}" sheetId="{}" r:id="{}"/>'.format(n,i+1,rid) for i,(n,rid) in enumerate(sheets2))
wb2='''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <bookViews><workbookView tabSelected="1"/></bookViews>
  <sheets>
{}
  </sheets>
  <calcPr calcId="0"/>
</workbook>'''.format(entries2)
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
for i in range(1,11):
    ct2+='  <Override PartName="/xl/worksheets/sheet{}.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>\n'.format(i)
ct2+='</Types>'
with open(TMP2+'[Content_Types].xml','w',encoding='utf-8') as f:
    f.write(ct2)

subprocess.run(["python3",SKILL+"/xlsx_pack.py",TMP1,OUT1], check=True)
print("Packed "+OUT1)
subprocess.run(["python3",SKILL+"/xlsx_pack.py",TMP2,OUT2], check=True)
print("Packed "+OUT2)
print("Done!")
