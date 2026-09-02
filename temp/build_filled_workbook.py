#!/usr/bin/env python3
"""Build the filled workbook with sample data."""

import os
import shutil
import zipfile

SKILL_DIR = "C:/Users/Administrator/.claude/skills/Excel表格处理"
TEMPLATE_DIR = "/tmp/xlsx_filled_work"

if os.path.exists(TEMPLATE_DIR):
    shutil.rmtree(TEMPLATE_DIR)
shutil.copytree(f"{SKILL_DIR}/templates/minimal_xlsx", TEMPLATE_DIR)

# ---- styles.xml ----
styles_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <fonts count="5">
    <font><sz val="11"/><name val="Calibri"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="000000FF"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="00000000"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="00008000"/></font>
    <font><sz val="11"/><name val="Calibri"/><b/></font>
  </fonts>
  <fills count="3">
    <fill><patternFill patternType="none"/></fill>
    <fill><patternFill patternType="gray125"/></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="00D9E1F2"/><bgColor indexed="64"/></patternFill></fill>
  </fills>
  <borders count="1">
    <border><left/><right/><top/><bottom/><diagonal/></border>
  </borders>
  <cellStyleXfs count="1">
    <xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/>
  </cellStyleXfs>
  <cellXfs count="13">
    <xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/>
    <xf numFmtId="0" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1"/>
    <xf numFmtId="0" fontId="2" fillId="0" borderId="0" xfId="0" applyFont="1"/>
    <xf numFmtId="0" fontId="3" fillId="0" borderId="0" xfId="0" applyFont="1"/>
    <xf numFmtId="0" fontId="4" fillId="0" borderId="0" xfId="0" applyFont="1"/>
    <xf numFmtId="164" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>
    <xf numFmtId="164" fontId="2" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>
    <xf numFmtId="165" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>
    <xf numFmtId="165" fontId="2" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>
    <xf numFmtId="167" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>
    <xf numFmtId="167" fontId="2" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>
    <xf numFmtId="1" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>
    <xf numFmtId="0" fontId="1" fillId="2" borderId="0" xfId="0" applyFont="1" applyFill="1"/>
  </cellXfs>
  <numFmts count="4">
    <numFmt numFmtId="164" formatCode="$#,##0;($#,##0);&quot;-&quot;"/>
    <numFmt numFmtId="165" formatCode="0.0%"/>
    <numFmt numFmtId="166" formatCode="0.0x"/>
    <numFmt numFmtId="167" formatCode="#,##0"/>
  </numFmts>
</styleSheet>'''
with open(f"{TEMPLATE_DIR}/xl/styles.xml", "w", encoding="utf-8") as f:
    f.write(styles_xml)

# ---- sharedStrings.xml (same as blank) ----
strings = [
    "流量到留量：自媒体商业化变现路径的系统设计",
    "配套表单_填好版",
    "变现现状自评",
    "请根据自己的实际情况，选择最符合的选项，每题1-4分",
    "维度得分",
    "总分",
    "结果解读",
    "调性匹配（题1-4）",
    "节奏设计（题5-8）",
    "信任透支（题9-12）",
    "可持续性（题13-15）",
    "1. 您的内容定位与变现方式是否一致？",
    "完全没有一致性，内容火了但无法变现",
    "有一定关联，但比较牵强",
    "基本一致，能找到结合点",
    "高度一致，内容即变现入口",
    "2. 您的变现节奏是？",
    "想起来就变现，没有规律",
    "有大概的节奏，但执行不稳定",
    "有稳定的变现节奏和节点",
    "精心设计的四季变现节奏",
    "3. 您在变现时是否考虑粉丝体验？",
    "完全不考虑，直接硬广",
    "偶尔考虑，影响不大",
    "尽量平衡，但效果有限",
    "精心设计，让变现成为服务",
    "4. 您的产品/服务交付质量是？",
    "交付不稳定，质量参差不齐",
    "基本及格，偶尔有投诉",
    "稳定可靠，粉丝满意度不错",
    "超出预期，形成口碑传播",
    "5. 您的广告接单频率是？",
    "来者不拒，只要给钱就接",
    "偶尔筛选，但还是偏多",
    "有筛选标准，控制在合理范围",
    "精心挑选，只接与调性匹配的广告",
    "6. 您的直播带货频率是？",
    "每天播，恨不得24小时播",
    "每周多次，频繁催促购买",
    "有规律节奏，但会有促销压力",
    "按需推荐，买不买你说了算",
    "7. 您的知识付费产品更新频率是？",
    "一次性割韭菜，没有后续",
    "偶尔更新，不稳定",
    "定期更新，有交付节奏",
    "持续迭代，课程不断进化",
    "8. 您的私域运营节奏是？",
    "只在需要卖货时才联系",
    "偶尔发消息，比较随意",
    "有规律互动，但偏销售导向",
    "提供价值为先，成交是自然结果",
    "9. 您在变现过程中是否过度消耗粉丝信任？",
    "严重透支，经常引起粉丝反感",
    "有一定消耗，但还在可控范围",
    "注意平衡，信任度基本稳定",
    "精心维护，信任度持续提升",
    "10. 您的粉丝对您的商业化评价是？",
    "怨声载道，很多粉丝脱粉",
    "有一些负面声音，但还能接受",
    "大部分粉丝理解，少量异议",
    "粉丝认可，甚至因为真实而更信任",
    "11. 您的内容价值与变现承诺是否匹配？",
    "严重不匹配，货不对板",
    "有一定差距，需要改进",
    "基本匹配，偶尔小失误",
    "高度匹配，甚至超出预期",
    "12. 您与粉丝的关系是？",
    "纯粹买卖关系，没有情感连接",
    "有点情感，但还是比较功利",
    "亦师亦友，关系比较健康",
    "像家人一样，形成强信任关系",
    "13. 您的变现模式是否可持续？",
    "不知道能不能继续，走一步看一步",
    "有点焦虑，担心模式会失效",
    "有规划，但还需要验证",
    "清晰的可持续变现路径",
    "14. 您是否在建立自己的竞争壁垒？",
    "没有任何壁垒，随时可被替代",
    "有一点，但不够强",
    "有一定的护城河",
    "建立了明显的竞争壁垒",
    "15. 您的个人品牌是否在持续升值？",
    "没有关注过这个问题",
    "有点下滑，在吃老本",
    "基本稳定，没有明显增长",
    "持续升值，品牌价值不断提升",
    "红色预警（15-25分）：变现存在严重问题，建议立即调整",
    "黄色预警（26-35分）：变现有一定风险，需要关注",
    "绿色（36-45分）：变现基本健康，继续保持",
    "蓝色优秀（46-60分）：变现模式非常健康，值得骄傲",
    "变现路径匹配度分析",
    "请对每种变现路径的匹配度进行10分制评估",
    "评估维度",
    "广告投放",
    "直播带货",
    "知识付费",
    "私域会员",
    "粉丝画像匹配度",
    "内容形式匹配度",
    "供应链能力",
    "交付能力",
    "竞争强度",
    "毛利空间",
    "规模化潜力",
    "长期可持续性",
    "综合得分",
    "推荐路径",
    "综合得分最高",
    "内容调性自测",
    "请根据您的内容特点评估各维度，每题1-5分",
    "专业度评估",
    "亲近度评估",
    "差异化评估",
    "您的内容在专业领域的深度是？",
    "全是表层信息，没有深度",
    "偶尔有深度内容，但不稳定",
    "有稳定的专业输出",
    "深度内容占比高，有独特见解",
    "行业标杆级别的深度",
    "您能否用通俗语言解释复杂问题？",
    "完全不会，说的话粉丝听不懂",
    "偶尔可以，但不熟练",
    "基本可以，有一定转化能力",
    "很擅长，能把复杂问题简单化",
    "大师级别，深入浅出",
    "您的内容是否有系统的知识体系？",
    "没有体系，都是碎片化的",
    "有一点，但不完整",
    "有基本框架，还在完善",
    "体系完整，逻辑清晰",
    "行业典范，知识体系完备",
    "您是否持续学习并输出新知识？",
    "基本靠吃老本",
    "偶尔学习，输出不多",
    "持续学习，转化一般",
    "学习能力强，输出稳定",
    "学习输入输出都是行业标杆",
    "您在专业领域是否有认证/背书？",
    "没有任何背书",
    "有一些，但粉丝不知道",
    "有认证，但没有展示",
    "有认证，会适度展示",
    "顶级背书，行业公认",
    "您的表达风格是否让粉丝感到亲切？",
    "很严肃，粉丝有距离感",
    "偏严肃，但偶尔有趣",
    "比较亲切，轻松",
    "很亲切，像朋友一样",
    "极度亲切，粉丝当你是自家人",
    "您是否与粉丝有互动和回应？",
    "几乎不互动，高高在上",
    "偶尔互动，比较敷衍",
    "有互动，但不够真诚",
    "经常真诚互动，粉丝粘性高",
    "把粉丝当朋友，互动是日常",
    "您的内容是否关注粉丝的反馈和需求？",
    "完全不在意，自说自话",
    "偶尔看看，但不改",
    "会参考反馈，但行动少",
    "重视反馈，积极响应",
    "以粉丝需求为导向设计内容",
    "您是否能放下架子，展现真实的自己？",
    "人设完美，拒人千里",
    "比较端着，但偶尔真实",
    "比较真实，有亲和力",
    "很真实，粉丝觉得你是活人",
    "极度真实，像家人一样",
    "您的内容是否有温度和情感？",
    "冷冰冰，没有情感",
    "偶尔有情感，但不持续",
    "有情感，但不够温暖",
    "有温度，粉丝能感受到",
    "极度温暖，是粉丝的精神支柱",
    "您的内容在表达方式上是否独特？",
    "完全同质化，没有辨识度",
    "有点不同，但不够明显",
    "有一定独特性",
    "独特性强，粉丝一眼认出",
    "个人风格鲜明，行业独一份",
    "您是否有鲜明的个人标签/符号？",
    "没有任何标签",
    "有一些，但不系统",
    "有基本标签",
    "标签清晰，有符号系统",
    "标签IP化，辨识度极高",
    "您的内容是否有独特的视角和观点？",
    "全是搬运，没有原创观点",
    "偶尔有原创，但不多",
    "有一些独特观点",
    "观点独特，有辨识度",
    "观点犀利，是行业意见领袖",
    "您的内容是否在某个细分领域做到极致？",
    "什么都有，但都不精",
    "有几个擅长的，但不够深",
    "有明确定位，还在深耕",
    "细分领域专家",
    "细分领域无可替代的专家",
    "您的内容是否有差异化壁垒？",
    "没有任何壁垒",
    "有一点壁垒，但易复制",
    "有壁垒，但不够强",
    "有较强的差异化壁垒",
    "壁垒极高，很难被超越",
    "信任透支风险评估",
    "请评估以下情况发生的频率，1=从不，4=经常",
    "风险等级",
    "商业化频率维度",
    "粉丝反应维度",
    "内容价值维度",
    "关系维护维度",
    "1. 您发布商业广告的频率是？",
    "几乎每天都有广告",
    "每周多次广告",
    "有规律，但不过度",
    "谨慎选择，只在必要时",
    "2. 您在内容中植入广告的突兀程度是？",
    "非常突兀，粉丝反馈像在看广告",
    "比较生硬，勉强能接受",
    "比较自然，但还能识别",
    "巧妙融合，粉丝不反感",
    "3. 您直播时催促购买的频率是？",
    "全程催，让人窒息",
    "多次催促，有压力",
    "偶尔提醒，给选择权",
    "引导而非强迫",
    "4. 您向粉丝推销产品的频率是？",
    "每次内容都要卖东西",
    "经常卖，但有时有价值",
    "偶尔推，以价值为基础",
    "几乎不主动推销",
    "5. 粉丝对您的商业化内容的负面反馈多吗？",
    "非常多，经常被骂",
    "有一些，能看到批评",
    "偶尔有，基本可控",
    "几乎没有，评价正面",
    "6. 粉丝取关/退群的原因是商业化吗？",
    "经常是因此流失",
    "有时是因此流失",
    "偶尔有人因此流失",
    "几乎没人因此流失",
    "7. 粉丝是否主动为您辩护过商业化行为？",
    "从来没有，还被骂",
    "偶尔有人辩护",
    "有时有人支持",
    "粉丝会主动理解和辩护",
    "8. 您的内容是否因为商业化而整体质量下滑？",
    "严重下滑，干货变少",
    "有点下滑，广告内容增加",
    "基本稳定，干货还在",
    "质量稳定，甚至更好",
    "9. 您是否为了变现而发布不实信息？",
    "经常夸大或误导",
    "偶尔会有水分",
    "基本真实，偶尔美化",
    "完全真实，绝不误导",
    "10. 您的产品/服务交付是否货真价实？",
    "经常货不对板",
    "有时有落差",
    "基本符合描述",
    "超出预期，物超所值",
    "11. 您是否在用低质高价的产品收割粉丝？",
    "经常这样做",
    "偶尔这样做",
    "很少这样",
    "绝不这样，坚持品质",
    "12. 您是否建立了有效的粉丝反馈渠道？",
    "没有任何渠道",
    "有渠道但不用",
    "有渠道，偶尔看看",
    "积极收集，认真对待",
    "13. 您是否在商业化同时持续提供免费价值？",
    "几乎没有免费价值",
    "偶尔有一点",
    "经常有免费内容",
    "持续提供高价值免费内容",
    "14. 您是否与粉丝保持真诚的情感连接？",
    "纯粹利用关系",
    "有点功利，有距离感",
    "有一定情感联系",
    "像家人一样亲密",
    "15. 您是否为粉丝的长期利益考虑？",
    "只顾眼前变现",
    "偶尔考虑长期",
    "有长期规划，但执行不够",
    "始终把粉丝利益放首位",
    "红色高危：存在严重信任透支风险，建议立即改变变现方式",
    "橙色预警：有一定风险，需要调整变现节奏和方式",
    "黄色注意：风险可控，但需要关注和优化",
    "绿色安全：信任透支风险较低，继续保持",
    "变现四季规划",
    "种草期（建立信任）",
    "培育期（深化关系）",
    "收割期（价值变现）",
    "维护期（持续经营）",
    "核心目标",
    "让粉丝认识你、记住你",
    "让粉丝了解你的价值主张",
    "让粉丝付费购买产品/服务",
    "让粉丝持续复购和口碑传播",
    "关键动作",
    "持续输出有价值的内容",
    "建立私域，深度互动",
    "推出高价值产品/服务",
    "提供优质服务，建立口碑",
    "时间跨度",
    "粉丝增长目标",
    "互动率目标",
    "转化率目标",
    "复购率目标",
    "核心指标",
    "收入结构现状图",
    "请填写您各类收入的占比（总和100%）",
    "收入类型",
    "占比（%）",
    "一次性收入",
    "持续性收入",
    "广告收入",
    "直播带货收入",
    "知识付费收入",
    "私域会员收入",
    "品牌合作收入",
    "其他收入",
    "当前结构分析",
    "一次性vs持续性收入占比",
    "30天行动计划",
    "第1周：基础建设",
    "第2周：内容优化",
    "第3周：变现测试",
    "第4周：复盘优化",
    "每天任务",
    "今日完成",
    "效果自评",
    "周一",
    "周二",
    "周三",
    "周四",
    "周五",
    "周六",
    "周日",
    "本周总结",
    "整体完成度",
    "主要收获",
    "需要改进",
    "下周计划",
]

ss_content = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n'
ss_content += f'<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="{len(strings)}" uniqueCount="{len(strings)}">\n'
for s in strings:
    escaped = s.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;')
    ss_content += f'  <si><t>{escaped}</t></si>\n'
ss_content += '</sst>'
with open(f"{TEMPLATE_DIR}/xl/sharedStrings.xml", "w", encoding="utf-8") as f:
    f.write(ss_content)

def create_sheet_xml(rows_data):
    col_widths = '''  <cols>
    <col min="1" max="1" width="35" customWidth="1"/>
    <col min="2" max="6" width="16" customWidth="1"/>
  </cols>'''
    xml = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView workbookViewId="0"/>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25"
    xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
{col_widths}
  <sheetData>
'''
    for row_num, cells in rows_data:
        xml += f'    <row r="{row_num}">\n'
        for col, ctype, val, style in cells:
            if ctype == 's':
                xml += f'      <c r="{col}{row_num}" t="s" s="{style}"><v>{val}</v></c>\n'
            elif ctype == 'n':
                xml += f'      <c r="{col}{row_num}" s="{style}"><v>{val}</v></c>\n'
            elif ctype == 'f':
                xml += f'      <c r="{col}{row_num}" s="{style}"><f>{val}</f><v></v></c>\n'
        xml += '    </row>\n'
    xml += '''  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''
    return xml

# ===== Sheet 1: 变现现状自评 - with sample data =====
sheet1_rows = [
    (1, [('A','s',0,4)]),
    (2, [('A','s',2,4), ('B','s',3,0)]),
    (3, [('A','s',4,4)]),
    (4, [('A','s',7,4), ('B','s',8,4), ('C','s',9,4), ('D','s',10,4)]),
    # Q1-Q4 with sample answers (3,3,2,3)
    (5, [('A','s',11,0), ('B','n',3,1), ('C','n',3,1), ('D','n',3,1)]),
    (6, [('A','s',12,0), ('B','n',3,1), ('C','n',3,1), ('D','n',3,1)]),
    (7, [('A','s',13,0), ('B','n',2,1), ('C','n',2,1), ('D','n',2,1)]),
    (8, [('A','s',14,0), ('B','n',3,1), ('C','n',3,1), ('D','n',3,1)]),
    (9, [('A','s',15,4), ('B','f','SUM(B5:B8)',6), ('C','f','SUM(C5:C8)',6), ('D','f','SUM(D5:D8)',6)]),
    (10, [('A','s',16,0)]),
    # Q5-Q8 with sample answers (2,3,3,2)
    (11, [('A','s',31,0), ('B','n',2,1), ('C','n',2,1), ('D','n',2,1)]),
    (12, [('A','s',32,0), ('B','n',3,1), ('C','n',3,1), ('D','n',3,1)]),
    (13, [('A','s',33,0), ('B','n',3,1), ('C','n',3,1), ('D','n',3,1)]),
    (14, [('A','s',34,0), ('B','n',2,1), ('C','n',2,1), ('D','n',2,1)]),
    (15, [('A','s',35,4), ('B','f','SUM(B11:B14)',6), ('C','f','SUM(C11:C14)',6), ('D','f','SUM(D11:D14)',6)]),
    (16, [('A','s',36,0)]),
    # Q9-Q12 with sample answers (3,3,2,3)
    (17, [('A','s',46,0), ('B','n',3,1), ('C','n',3,1), ('D','n',3,1)]),
    (18, [('A','s',47,0), ('B','n',3,1), ('C','n',3,1), ('D','n',3,1)]),
    (19, [('A','s',48,0), ('B','n',2,1), ('C','n',2,1), ('D','n',2,1)]),
    (20, [('A','s',49,0), ('B','n',3,1), ('C','n',3,1), ('D','n',3,1)]),
    (21, [('A','s',50,4), ('B','f','SUM(B17:B20)',6), ('C','f','SUM(C17:C20)',6), ('D','f','SUM(D17:D20)',6)]),
    (22, [('A','s',51,0)]),
    # Q13-Q15 with sample answers (3,2,4)
    (23, [('A','s',61,0), ('B','n',3,1), ('C','n',3,1), ('D','n',3,1)]),
    (24, [('A','s',62,0), ('B','n',2,1), ('C','n',2,1), ('D','n',2,1)]),
    (25, [('A','s',63,4), ('B','f','SUM(B23:B24)',6), ('C','f','SUM(C23:C24)',6), ('D','f','SUM(D23:D24)',6)]),
    (26, [('A','s',5,4)]),
    (27, [('A','s',6,4), ('B','f','B9+B15+B21+B25',6)]),
    (28, [('A','s',7,4)]),
    # Sample result interpretation
    (29, [('A','s',79,0)]),
    (30, [('A','s',78,0)]),
    (31, [('A','s',77,0)]),
    (32, [('A','s',76,0)]),
]

# ===== Sheet 2: 变现路径匹配度分析 - sample data =====
sheet2_rows = [
    (1, [('A','s',0,4)]),
    (2, [('A','s',80,4), ('B','s',81,0)]),
    (3, [('A','s',82,4), ('B','s',83,4), ('C','s',84,4), ('D','s',85,4), ('E','s',86,4)]),
    # Sample scores: 知识付费=57, 私域会员=55, 广告=45, 直播带货=43
    (4, [('A','s',87,0), ('B','n',5,1), ('C','n',4,1), ('D','n',8,1), ('E','n',9,1)]),
    (5, [('A','s',88,0), ('B','n',6,1), ('C','n',5,1), ('D','n',9,1), ('E','n',8,1)]),
    (6, [('A','s',89,0), ('B','n',4,1), ('C','n',6,1), ('D','n',7,1), ('E','n',5,1)]),
    (7, [('A','s',90,0), ('B','n',5,1), ('C','n',6,1), ('D','n',9,1), ('E','n',7,1)]),
    (8, [('A','s',91,0), ('B','n',7,1), ('C','n',4,1), ('D','n',6,1), ('E','n',8,1)]),
    (9, [('A','s',92,0), ('B','n',6,1), ('C','n',5,1), ('D','n',8,1), ('E','n',6,1)]),
    (10, [('A','s',93,0), ('B','n',5,1), ('C','n',6,1), ('D','n',5,1), ('E','n',7,1)]),
    (11, [('A','s',94,0), ('B','n',4,1), ('C','n',5,1), ('D','n',6,1), ('E','n',5,1)]),
    (12, [('A','s',95,0), ('B','n',3,1), ('C','n',2,1), ('D','n',5,1), ('E','n',4,1)]),
    (13, [('A','s',96,4), ('B','f','SUM(B4:B12)',6), ('C','f','SUM(C4:C12)',6), ('D','f','SUM(D4:D12)',6), ('E','f','SUM(E4:E12)',6)]),
    (14, [('A','s',97,4)]),
    (15, [('A','s',98,0), ('B','f','INDEX(B3:E3,MATCH(MAX(B13:E13),B13:E13,0))',6)]),
]

# ===== Sheet 3: 内容调性自测 - sample data =====
sheet3_rows = [
    (1, [('A','s',0,4)]),
    (2, [('A','s',100,4), ('B','s',101,0)]),
    (3, [('A','s',102,4)]),
    (4, [('A','s',103,4)]),
    # 专业度: 4,4,3,4,3 = 18
    (5, [('A','s',104,0), ('B','n',4,1)]),
    (6, [('A','s',105,0), ('B','n',4,1)]),
    (7, [('A','s',106,0), ('B','n',3,1)]),
    (8, [('A','s',107,0), ('B','n',4,1)]),
    (9, [('A','s',108,0), ('B','n',3,1)]),
    (10, [('A','s',109,4), ('B','f','SUM(B5:B9)',6)]),
    (11, [('A','s',110,4)]),
    # 亲近度: 4,3,4,4,4 = 19
    (12, [('A','s',120,0), ('B','n',4,1)]),
    (13, [('A','s',121,0), ('B','n',3,1)]),
    (14, [('A','s',122,0), ('B','n',4,1)]),
    (15, [('A','s',123,0), ('B','n',4,1)]),
    (16, [('A','s',124,0), ('B','n',4,1)]),
    (17, [('A','s',125,4), ('B','f','SUM(B12:B16)',6)]),
    (18, [('A','s',126,4)]),
    # 差异化: 3,4,4,3,4 = 18
    (19, [('A','s',140,0), ('B','n',3,1)]),
    (20, [('A','s',141,0), ('B','n',4,1)]),
    (21, [('A','s',142,0), ('B','n',4,1)]),
    (22, [('A','s',143,0), ('B','n',3,1)]),
    (23, [('A','s',144,0), ('B','n',4,1)]),
    (24, [('A','s',145,4), ('B','f','SUM(B19:B23)',6)]),
    (25, [('A','s',146,4)]),
    (26, [('A','s',147,0), ('B','f','B10',6), ('C','f','B17',6), ('D','f','B24',6)]),
]

# ===== Sheet 4: 信任透支风险评估 - sample data =====
sheet4_rows = [
    (1, [('A','s',0,4)]),
    (2, [('A','s',160,4), ('B','s',161,0)]),
    (3, [('A','s',162,4)]),
    (4, [('A','s',163,4), ('B','s',164,4), ('C','s',165,4), ('D','s',166,4), ('E','s',167,4)]),
    # 商业化频率: 2,2,2,2 = 8
    (5, [('A','s',168,0), ('B','n',2,1), ('C','n',2,1), ('D','n',2,1), ('E','n',2,1)]),
    (6, [('A','s',169,0), ('B','n',2,1), ('C','n',2,1), ('D','n',2,1), ('E','n',2,1)]),
    (7, [('A','s',170,0), ('B','n',2,1), ('C','n',2,1), ('D','n',2,1), ('E','n',2,1)]),
    (8, [('A','s',171,0), ('B','n',2,1), ('C','n',2,1), ('D','n',2,1), ('E','n',2,1)]),
    (9, [('A','s',172,4), ('B','f','SUM(B5:B8)',6), ('C','f','SUM(C5:C8)',6), ('D','f','SUM(D5:D8)',6), ('E','f','SUM(E5:E8)',6)]),
    (10, [('A','s',173,4)]),
    # 粉丝反应: 2,2,3,2 = 9
    (11, [('A','s',180,0), ('B','n',2,1), ('C','n',2,1), ('D','n',2,1), ('E','n',2,1)]),
    (12, [('A','s',181,0), ('B','n',2,1), ('C','n',2,1), ('D','n',2,1), ('E','n',2,1)]),
    (13, [('A','s',182,0), ('B','n',3,1), ('C','n',3,1), ('D','n',3,1), ('E','n',3,1)]),
    (14, [('A','s',183,0), ('B','n',2,1), ('C','n',2,1), ('D','n',2,1), ('E','n',2,1)]),
    (15, [('A','s',184,4), ('B','f','SUM(B11:B14)',6), ('C','f','SUM(C11:C14)',6), ('D','f','SUM(D11:D14)',6), ('E','f','SUM(E11:E14)',6)]),
    (16, [('A','s',185,4)]),
    # 内容价值: 2,2,2,2 = 8
    (17, [('A','s',190,0), ('B','n',2,1), ('C','n',2,1), ('D','n',2,1), ('E','n',2,1)]),
    (18, [('A','s',191,0), ('B','n',2,1), ('C','n',2,1), ('D','n',2,1), ('E','n',2,1)]),
    (19, [('A','s',192,0), ('B','n',2,1), ('C','n',2,1), ('D','n',2,1), ('E','n',2,1)]),
    (20, [('A','s',193,0), ('B','n',2,1), ('C','n',2,1), ('D','n',2,1), ('E','n',2,1)]),
    (21, [('A','s',194,4), ('B','f','SUM(B17:B20)',6), ('C','f','SUM(C17:C20)',6), ('D','f','SUM(D17:D20)',6), ('E','f','SUM(E17:E20)',6)]),
    (22, [('A','s',195,4)]),
    # 关系维护: 2,2 = 4
    (23, [('A','s',200,0), ('B','n',2,1), ('C','n',2,1), ('D','n',2,1), ('E','n',2,1)]),
    (24, [('A','s',201,0), ('B','n',2,1), ('C','n',2,1), ('D','n',2,1), ('E','n',2,1)]),
    (25, [('A','s',202,4), ('B','f','SUM(B23:B24)',6), ('C','f','SUM(C23:C24)',6), ('D','f','SUM(D23:D24)',6), ('E','f','SUM(E23:E24)',6)]),
    (26, [('A','s',206,4)]),
    (27, [('A','s',207,4), ('B','f','B9+B15+B21+B25',6)]),
    (28, [('A','s',208,4)]),
    (29, [('A','s',223,0)]),
]

# ===== Sheet 5: 变现四季规划 - sample data =====
sheet5_rows = [
    (1, [('A','s',0,4)]),
    (2, [('A','s',225,4)]),
    (3, [('A','s',226,4), ('B','s',227,4), ('C','s',228,4), ('D','s',229,4), ('E','s',230,4)]),
    (4, [('A','s',231,0), ('B','s',232,0), ('C','s',233,0), ('D','s',234,0), ('E','s',235,0)]),
    (5, [('A','s',236,4)]),
    (6, [('A','s',237,0), ('B','s',238,0), ('C','s',239,0), ('D','s',240,0), ('E','s',241,0)]),
    (7, [('A','s',242,0), ('B','s',243,0), ('C','s',244,0), ('D','s',245,0), ('E','s',246,0)]),
    (8, [('A','s',247,0)]),
    # Sample quarterly data
    (9, [('A','s',248,0), ('B','n',30,1), ('C','n',60,1), ('D','n',90,1), ('E','n',30,1)]),
    (10, [('A','s',249,0), ('B','n',500,1), ('C','n',1000,1), ('D','n',2000,1), ('E','n',500,1)]),
    (11, [('A','s',250,0), ('B','n',3,1), ('C','n',5,1), ('D','n',10,1), ('E','n',15,1)]),
    (12, [('A','s',251,0), ('B','n',0,1), ('C','n',5,1), ('D','n',20,1), ('E','n',30,1)]),
]

# ===== Sheet 6: 收入结构现状图 - sample data =====
sheet6_rows = [
    (1, [('A','s',0,4)]),
    (2, [('A','s',253,4), ('B','s',254,0)]),
    (3, [('A','s',255,4), ('B','s',256,1), ('C','s',257,0)]),
    # Sample: 广告15%, 直播25%, 知识付费20%, 私域20%, 品牌10%, 其他10%
    (4, [('A','s',258,0), ('B','n',15,1), ('C','s',259,0)]),
    (5, [('A','s',260,0), ('B','n',25,1), ('C','s',261,0)]),
    (6, [('A','s',262,0), ('B','n',20,1), ('C','s',259,0)]),
    (7, [('A','s',263,0), ('B','n',20,1), ('C','s',261,0)]),
    (8, [('A','s',264,0), ('B','n',10,1), ('C','s',259,0)]),
    (9, [('A','s',265,0), ('B','n',10,1), ('C','s',261,0)]),
    (10, [('A','s',266,4), ('B','f','SUM(B4:B9)',6)]),
    (11, [('A','s',267,4)]),
    (12, [('A','s',268,0), ('B','f','(B4+B6+B8)/B10',8)]),
    (13, [('A','s',269,0), ('B','f','(B5+B7+B9)/B10',8)]),
]

# ===== Sheet 7: 30天行动计划 - sample data =====
sheet7_rows = [
    (1, [('A','s',0,4)]),
    (2, [('A','s',271,4)]),
    (3, [('A','s',272,4), ('B','s',273,4), ('C','s',274,4)]),
    (4, [('A','s',275,0), ('B','s',276,0), ('C','s',277,0)]),
    (5, [('A','s',278,0), ('B','s',276,0), ('C','s',277,0)]),
    (6, [('A','s',279,0), ('B','s',276,0), ('C','s',277,0)]),
    (7, [('A','s',280,0), ('B','s',276,0), ('C','s',277,0)]),
    (8, [('A','s',281,0), ('B','s',276,0), ('C','s',277,0)]),
    (9, [('A','s',282,0), ('B','s',276,0), ('C','s',277,0)]),
    (10, [('A','s',283,0), ('B','s',276,0), ('C','s',277,0)]),
    (11, [('A','s',284,4)]),
    # Week 1 summary with sample completion
    (12, [('A','s',285,0), ('B','n',80,1), ('C','s',286,0)]),
    (13, [('A','s',287,0), ('B','n',80,1), ('C','s',288,0)]),
    (14, [('A','s',289,0), ('B','n',75,1)]),
    (15, [('A','s',290,0)]),
    (16, [('A','s',291,4), ('B','s',273,4), ('C','s',274,4)]),
    (17, [('A','s',275,0), ('B','s',276,0), ('C','s',277,0)]),
    (18, [('A','s',292,0), ('B','s',276,0), ('C','s',277,0)]),
    (19, [('A','s',279,0), ('B','s',276,0), ('C','s',277,0)]),
    (20, [('A','s',280,0), ('B','s',276,0), ('C','s',277,0)]),
    (21, [('A','s',281,0), ('B','s',276,0), ('C','s',277,0)]),
    (22, [('A','s',282,0), ('B','s',276,0), ('C','s',277,0)]),
    (23, [('A','s',283,0), ('B','s',276,0), ('C','s',277,0)]),
    (24, [('A','s',284,4)]),
    # Week 2 summary
    (25, [('A','s',285,0), ('B','n',85,1), ('C','s',286,0)]),
    (26, [('A','s',287,0), ('B','n',85,1), ('C','s',288,0)]),
    (27, [('A','s',289,0), ('B','n',80,1)]),
    (28, [('A','s',290,0)]),
    (29, [('A','s',293,4), ('B','s',273,4), ('C','s',274,4)]),
    (30, [('A','s',275,0), ('B','s',276,0), ('C','s',277,0)]),
    (31, [('A','s',294,0), ('B','s',276,0), ('C','s',277,0)]),
    (32, [('A','s',279,0), ('B','s',276,0), ('C','s',277,0)]),
    (33, [('A','s',280,0), ('B','s',276,0), ('C','s',277,0)]),
    (34, [('A','s',281,0), ('B','s',276,0), ('C','s',277,0)]),
    (35, [('A','s',282,0), ('B','s',276,0), ('C','s',277,0)]),
    (36, [('A','s',283,0), ('B','s',276,0), ('C','s',277,0)]),
    (37, [('A','s',284,4)]),
    # Week 3 summary
    (38, [('A','s',285,0), ('B','n',90,1), ('C','s',286,0)]),
    (39, [('A','s',287,0), ('B','n',90,1), ('C','s',288,0)]),
    (40, [('A','s',289,0), ('B','n',85,1)]),
    (41, [('A','s',290,0)]),
    (42, [('A','s',295,4), ('B','s',273,4), ('C','s',274,4)]),
    (43, [('A','s',275,0), ('B','s',276,0), ('C','s',277,0)]),
    (44, [('A','s',296,0), ('B','s',276,0), ('C','s',277,0)]),
    (45, [('A','s',279,0), ('B','s',276,0), ('C','s',277,0)]),
    (46, [('A','s',280,0), ('B','s',276,0), ('C','s',277,0)]),
    (47, [('A','s',281,0), ('B','s',276,0), ('C','s',277,0)]),
    (48, [('A','s',282,0), ('B','s',276,0), ('C','s',277,0)]),
    (49, [('A','s',283,0), ('B','s',276,0), ('C','s',277,0)]),
    (50, [('A','s',284,4)]),
    # Week 4 summary
    (51, [('A','s',285,0), ('B','n',95,1), ('C','s',286,0)]),
    (52, [('A','s',287,0), ('B','n',95,1), ('C','s',288,0)]),
    (53, [('A','s',289,0), ('B','n',90,1)]),
    (54, [('A','s',290,0)]),
]

sheets = [
    ("sheet1.xml", sheet1_rows),
    ("sheet2.xml", sheet2_rows),
    ("sheet3.xml", sheet3_rows),
    ("sheet4.xml", sheet4_rows),
    ("sheet5.xml", sheet5_rows),
    ("sheet6.xml", sheet6_rows),
    ("sheet7.xml", sheet7_rows),
]

for i, (filename, rows) in enumerate(sheets):
    content = create_sheet_xml(rows)
    with open(f"{TEMPLATE_DIR}/xl/worksheets/{filename}", "w", encoding="utf-8") as f:
        f.write(content)

workbook_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheets>
    <sheet name="变现现状自评" sheetId="1" r:id="rId1"/>
    <sheet name="变现路径匹配度分析" sheetId="2" r:id="rId4"/>
    <sheet name="内容调性自测" sheetId="3" r:id="rId5"/>
    <sheet name="信任透支风险评估" sheetId="4" r:id="rId6"/>
    <sheet name="变现四季规划" sheetId="5" r:id="rId7"/>
    <sheet name="收入结构现状图" sheetId="6" r:id="rId8"/>
    <sheet name="30天行动计划" sheetId="7" r:id="rId9"/>
  </sheets>
  <calcPr calcMode="auto"/>
</workbook>'''
with open(f"{TEMPLATE_DIR}/xl/workbook.xml", "w", encoding="utf-8") as f:
    f.write(workbook_xml)

rels_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1"
    Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet"
    Target="worksheets/sheet1.xml"/>
  <Relationship Id="rId2"
    Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles"
    Target="styles.xml"/>
  <Relationship Id="rId3"
    Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings"
    Target="sharedStrings.xml"/>
  <Relationship Id="rId4"
    Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet"
    Target="worksheets/sheet2.xml"/>
  <Relationship Id="rId5"
    Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet"
    Target="worksheets/sheet3.xml"/>
  <Relationship Id="rId6"
    Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet"
    Target="worksheets/sheet4.xml"/>
  <Relationship Id="rId7"
    Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet"
    Target="worksheets/sheet5.xml"/>
  <Relationship Id="rId8"
    Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet"
    Target="worksheets/sheet6.xml"/>
  <Relationship Id="rId9"
    Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet"
    Target="worksheets/sheet7.xml"/>
</Relationships>'''
with open(f"{TEMPLATE_DIR}/xl/_rels/workbook.xml.rels", "w", encoding="utf-8") as f:
    f.write(rels_xml)

ct_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml"  ContentType="application/xml"/>
  <Override PartName="/xl/workbook.xml"
    ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
  <Override PartName="/xl/worksheets/sheet1.xml"
    ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet2.xml"
    ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet3.xml"
    ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet4.xml"
    ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet5.xml"
    ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet6.xml"
    ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet7.xml"
    ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/styles.xml"
    ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>
  <Override PartName="/xl/sharedStrings.xml"
    ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/>
</Types>'''
with open(f"{TEMPLATE_DIR}/[Content_Types].xml", "w", encoding="utf-8") as f:
    f.write(ct_xml)

output_path = "D:/新课开发/自媒体/04商业化变现-从流量到留量的转化路径设计/配套表单和指引-Excel版/配套表单_填好版.xlsx"
os.makedirs(os.path.dirname(output_path), exist_ok=True)

with zipfile.ZipFile(output_path, 'w', zipfile.ZIP_DEFLATED) as zf:
    for root, dirs, files in os.walk(TEMPLATE_DIR):
        for file in files:
            file_path = os.path.join(root, file)
            arcname = os.path.relpath(file_path, TEMPLATE_DIR)
            zf.write(file_path, arcname)

print(f"Created: {output_path}")
print(f"Size: {os.path.getsize(output_path)} bytes")
