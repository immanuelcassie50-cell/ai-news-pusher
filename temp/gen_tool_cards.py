# -*- coding: utf-8 -*-
"""生成《厅店重生》培训课程10张A6工具卡"""
import os
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable
from reportlab.lib.pagesizes import A6
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.colors import HexColor, white, black
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.pdfbase.pdfmetrics import stringWidth

# A6: 105mm x 148mm  →  points (1mm = 2.8346pt)
A6_W = 105 * 2.8346  # ~297pt
A6_H = 148 * 2.8346  # ~420pt
MARGIN = 6

# 配色系统（与skill风格一致）
C = {
    'primary':   '#1A5276',
    'secondary': '#2E86AB',
    'accent':    '#00B4A6',
    'success':   '#27AE60',
    'warning':   '#E67E22',
    'danger':    '#E74C3C',
    'dark':      '#1A1A2E',
    'muted':     '#7F8C8D',
    'white':     '#FFFFFF',
    'bg':        '#F8F6F1',
    'light':     '#ECE8E0',
}

def ps(name, **kw):
    defaults = dict(fontName='Helvetica', fontSize=7, leading=9.5,
                    textColor=HexColor(C['dark']), spaceAfter=2, spaceBefore=0)
    defaults.update(kw)
    return ParagraphStyle(name, **defaults)

# 样式定义
S = {
    'card_title':  ps('CT', fontName='Helvetica-Bold', fontSize=10.5, leading=13,
                       textColor=white, alignment=TA_CENTER),
    'card_sub':    ps('CS', fontName='Helvetica', fontSize=6.5, leading=8.5,
                       textColor=HexColor('#D0D0D0'), alignment=TA_CENTER),
    'section':     ps('SEC', fontName='Helvetica-Bold', fontSize=8, leading=10.5,
                       textColor=HexColor(C['primary']), spaceBefore=5, spaceAfter=2),
    'body':        ps('B', fontSize=6.5, leading=9),
    'bullet':      ps('BU', fontSize=6.2, leading=8.5, leftIndent=5),
    'small':       ps('SM', fontSize=5.8, leading=7.5, textColor=HexColor(C['muted'])),
    'footer':      ps('FT', fontSize=5.2, leading=6.5, textColor=HexColor(C['muted']),
                       alignment=TA_CENTER),
    'num':         ps('NUM', fontName='Helvetica-Bold', fontSize=20, leading=24,
                       textColor=white, alignment=TA_CENTER),
    'label':       ps('LB', fontName='Helvetica-Bold', fontSize=6.5, leading=8.5,
                       textColor=HexColor(C['accent'])),
    'tag':         ps('TG', fontSize=5.8, leading=7.5),
    'callout':     ps('CAL', fontSize=6.5, leading=9, textColor=HexColor(C['dark']),
                       leftIndent=4),
}

def accent_rule(width=None):
    return HRFlowable(width=width or (A6_W - MARGIN*2), thickness=1.2,
                      color=HexColor(C['accent']), spaceAfter=3, spaceBefore=1)

def thin_rule():
    return HRFlowable(width=A6_W - MARGIN*2, thickness=0.4,
                      color=HexColor(C['light']), spaceAfter=2, spaceBefore=2)

def section_header(txt):
    return Paragraph(f'<b>{txt}</b>', S['section'])

def bul(txt, mark='*'):
    return Paragraph(f'<b>{mark}</b> {txt}', S['bullet'])

def sp(h=3):
    return Spacer(1, h)

def footer():
    return Paragraph('《厅店重生》培训课程工具卡  |  勤践勤思  知行合一', S['footer'])

# ── 卡片构建函数 ─────────────────────────────────────────────────────────────
CONTENT_W = A6_W - MARGIN * 2

def build_header(title, subtitle, accent_color, num):
    """深色头部条：左侧数字 + 中间标题 + 副标题"""
    header_bg = HexColor(accent_color)
    num_cell  = Paragraph(f'<b>{num:02d}</b>', S['num'])
    title_cell = Paragraph(f'<b>{title}</b>', S['card_title'])
    sub_cell   = Paragraph(subtitle, S['card_sub'])
    tbl = Table([[num_cell, title_cell, sub_cell]],
                colWidths=[28, CONTENT_W - 80, 52])
    tbl.setStyle(TableStyle([
        ('BACKGROUND',   (0, 0), (-1, -1), header_bg),
        ('ALIGN',        (0, 0), (0,  0),  'CENTER'),
        ('ALIGN',        (1, 0), (1,  0),  'CENTER'),
        ('ALIGN',        (2, 0), (2,  0),  'CENTER'),
        ('VALIGN',       (0, 0), (-1, -1), 'MIDDLE'),
        ('TOPPADDING',   (0, 0), (-1, -1), 6),
        ('BOTTOMPADDING',(0, 0), (-1, -1), 6),
        ('LEFTPADDING',  (0, 0), (0,  0),  4),
        ('RIGHTPADDING', (-1,0), (-1, 0),  4),
    ]))
    return tbl

def build_card(filename, accent, num, title, subtitle, content_blocks):
    """生成单张工具卡PDF"""
    out_path = os.path.join(OUT_DIR, filename)
    doc = SimpleDocTemplate(
        out_path,
        pagesize=(A6_W, A6_H),
        leftMargin=MARGIN, rightMargin=MARGIN,
        topMargin=MARGIN,  bottomMargin=MARGIN,
    )
    story = [build_header(title, subtitle, accent, num), sp(5)] + content_blocks + [sp(4), footer()]
    doc.build(story)
    print(f'  OK  {filename}')
    return out_path

OUT_DIR = 'D:/新课开发/运营商/03-厅店转型/可打印工具卡'
os.makedirs(OUT_DIR, exist_ok=True)

# ─────────────────────────────────────────────────────────────────────────────
# 01  开篇认知自测卡
# ─────────────────────────────────────────────────────────────────────────────
def card01():
    content = [
        section_header('5道判断题（每题20分）'),
        bul('厅店转型只是把柜台从直线改成弧线？'),
        bul('自助终端可以100%替代人工服务？'),
        bul('增值业务推荐就是推销贵的产品？'),
        bul('家庭客户比单体客户更有价值？'),
        bul('数据化经营就是每天填报表格？'),
        sp(3),
        section_header('自我评估量表'),
        Paragraph('<b><font color="#E74C3C">0-40分</font></b>  认知误区 — 需要全面重构认知', S['body']),
        Paragraph('<b><font color="#E67E22">60-80分</font></b>  基本认知 — 有基础，需深化理解', S['body']),
        Paragraph('<b><font color="#27AE60">100分</font></b>  转型认知 — 已建立正确认知框架', S['body']),
        sp(3),
        section_header('答案解析区'),
        Paragraph('<font color="#27AE60">✓ 家庭客户生命周期价值更高（TRUE）</font>', S['callout']),
        Paragraph('<font color="#E74C3C">✗ 厅店转型是业态根本性改变，不只是动线调整</font>', S['callout']),
        Paragraph('<font color="#E74C3C">✗ 人工服务有不可替代的信任和情感价值</font>', S['callout']),
        Paragraph('<font color="#E74C3C">✗ 增值是解决客户真实需求，而非强买强卖</font>', S['callout']),
        Paragraph('<font color="#E74C3C">✗ 数据化是为决策提供依据，而非为了填报</font>', S['callout']),
    ]
    return build_card('01-开篇认知自测卡.pdf', C['primary'], 1,
                      '开篇认知自测卡', '自我评估 · 转型认知水平诊断', content)

# ─────────────────────────────────────────────────────────────────────────────
# 02  厅店转型认知卡
# ─────────────────────────────────────────────────────────────────────────────
def card02():
    content = [
        section_header('转型三个方向'),
        Paragraph('<b><font color="#1A5276">体验化</font></b>  从交易场所 → 体验空间', S['body']),
        Paragraph('让客户亲身感受产品/服务的价值', S['small']),
        Paragraph('<b><font color="#1A5276">服务化</font></b>  从业务办理 → 价值服务', S['body']),
        Paragraph('专业咨询 + 个性化方案设计', S['small']),
        Paragraph('<b><font color="#1A5276">生态化</font></b>  从单品销售 → 生态捆绑', S['body']),
        Paragraph('构建客户长期依赖，提升LTV', S['small']),
        sp(3),
        section_header('转型评估维度对照'),
        bul('空间利用：传统厅店最大化工位 vs 转型厅店体验动线优先', '▸'),
        bul('人员定位：业务办理员 → 顾问/设计师', '▸'),
        bul('考核指标：业务量 → 客户满意度 + 增值转化', '▸'),
        bul('客户动线：被动等待 → 主动引导体验', '▸'),
        sp(3),
        section_header('关键指标速查'),
        bul('体验转化率：进店深度体验的客户占比', '▸'),
        bul('客单价提升：转型后平均消费金额增幅', '▸'),
        bul('口碑推荐率：主动推荐新客户的比例', '▸'),
        bul('生态捆绑率：办理多业务家庭客户占比', '▸'),
    ]
    return build_card('02-厅店转型认知卡.pdf', C['secondary'], 2,
                      '厅店转型认知卡', '转型方向 · 评估维度 · 关键指标', content)

# ─────────────────────────────────────────────────────────────────────────────
# 03  客户动机识别卡
# ─────────────────────────────────────────────────────────────────────────────
def card03():
    content = [
        section_header('四类客户画像速查'),
        Paragraph('<b><font color="#27AE60">效率型</font></b>  快速办理，不想等待', S['body']),
        Paragraph('→ 提供自助终端 + 快速通道', S['small']),
        Paragraph('<b><font color="#27AE60">探索型</font></b>  喜欢体验，了解产品', S['body']),
        Paragraph('→ 引导体验区，专业讲解演示', S['small']),
        Paragraph('<b><font color="#27AE60">比较型</font></b>  精打细算，价比三家', S['body']),
        Paragraph('→ 突出价值，展示差异化', S['small']),
        Paragraph('<b><font color="#27AE60">社交型</font></b>  爱聊天，注重氛围', S['body']),
        Paragraph('→ 热情接待，建立信任关系', S['small']),
        sp(3),
        section_header('五问法提示'),
        bul('问现状 — 现在用的是什么产品/服务？'),
        bul('问痛点 — 使用中有什么不方便？'),
        bul('问期望 — 希望能解决什么问题？'),
        bul('问预算 — 心理预期大概是多少？'),
        bul('问决策 — 是自己决定还是家人商量？'),
        sp(3),
        section_header('动机判断决策树'),
        Paragraph('<b>客户进门时表情？</b>', S['label']),
        bul('主动微笑 → 社交型/探索型', '→'),
        bul('径直走向柜台 → 效率型', '→'),
        bul('环顾四周 → 探索型', '→'),
        Paragraph('<b>沟通中客户反馈？</b>', S['label']),
        bul('积极提问 → 有需求，热情跟进', '→'),
        bul('简短回答 → 需观察，可能是比较型', '→'),
        bul('心不在焉 → 效率型为主', '→'),
    ]
    return build_card('03-客户动机识别卡.pdf', '#27AE60', 3,
                      '客户动机识别卡', '客户画像 · 五问法 · 决策树', content)

# ─────────────────────────────────────────────────────────────────────────────
# 04  人工服务价值证明卡
# ─────────────────────────────────────────────────────────────────────────────
def card04():
    content = [
        section_header('AI / 自助设备局限清单'),
        bul('无法处理复杂、个性化问题', '✗'),
        bul('不能识别客户情绪和潜在需求', '✗'),
        bul('无法提供情感支持和信任建立', '✗'),
        bul('复杂业务讲解困难，客户理解度低', '✗'),
        bul('老年客户/特殊群体使用存在障碍', '✗'),
        sp(3),
        section_header('人工服务价值维度'),
        Paragraph('<b><font color="#E67E22">信任价值</font></b>  专业形象建立长期关系', S['body']),
        Paragraph('<b><font color="#E67E22">情感价值</font></b>  温度感让客户感到被重视', S['body']),
        Paragraph('<b><font color="#E67E22">专业价值</font></b>  复杂问题的最佳解决方案', S['body']),
        Paragraph('<b><font color="#E67E22">便利价值</font></b>  全程代办，省心省力', S['body']),
        sp(3),
        section_header('价值证明话术'),
        Paragraph('"我理解您可能觉得自助更方便，但这个套餐涉及多产品组合，我帮您做个全面规划。"', S['callout']),
        Paragraph('"您这个问题比较特殊，我遇到过类似情况，一般我们可以这样处理..."', S['callout']),
        Paragraph('"您是我们的钻石客户，我专门申请了一个专属优惠给您。"', S['callout']),
    ]
    return build_card('04-人工服务价值证明卡.pdf', '#E74C3C', 4,
                      '人工服务价值证明卡', 'AI局限 · 人工价值 · 话术指南', content)

# ─────────────────────────────────────────────────────────────────────────────
# 05  体验场景设计卡
# ─────────────────────────────────────────────────────────────────────────────
def card05():
    content = [
        section_header('体验动线设计四要素'),
        bul('入口区 — 吸引注意，建立第一好感', '▸'),
        bul('体验区 — 核心产品/服务体验展示', '▸'),
        bul('洽谈区 — 私密空间，深入沟通', '▸'),
        bul('成交区 — 舒适环境，促成决定', '▸'),
        sp(3),
        section_header('场景类型速查'),
        bul('智慧家庭体验：全屋智能产品联动（15-20分钟）', '▸'),
        bul('5G手机体验：高速网络应用展示（10-15分钟）', '▸'),
        bul('家庭娱乐：宽带+电视+游戏组合（20-25分钟）', '▸'),
        bul('企业解决方案：商务专线+云服务（25-30分钟）', '▸'),
        sp(3),
        section_header('设计检查清单'),
        bul('动线流畅，无死角和阻塞'),
        bul('体验设备正常运行，定期维护'),
        bul('演示内容定期更新，不过时'),
        bul('销售人员熟练掌握演示流程'),
        bul('客户参与度高，有互动环节'),
    ]
    return build_card('05-体验场景设计卡.pdf', '#9B59B6', 5,
                      '体验场景设计卡', '动线设计 · 场景类型 · 检查清单', content)

# ─────────────────────────────────────────────────────────────────────────────
# 06  增值业务推荐卡
# ─────────────────────────────────────────────────────────────────────────────
def card06():
    content = [
        section_header('推荐话术框架'),
        Paragraph('<b>1.</b> 开场 — 建立信任，暖场破冰', S['body']),
        Paragraph('<b>2.</b> 探索 — 发现需求，挖掘痛点', S['body']),
        Paragraph('<b>3.</b> 建议 — 针对性方案，价值匹配', S['body']),
        Paragraph('<b>4.</b> 承诺 — 确认意向，促成行动', S['body']),
        sp(3),
        section_header('价值呈现公式'),
        bul('【节省型】每月省XX元，全年省XXX元', '▸'),
        bul('【提升型】网速提升X倍，体验提升X倍', '▸'),
        bul('【保障型】包含XX项权益，总价值XXX元', '▸'),
        bul('【便利型】一次办理，全年无忧', '▸'),
        sp(3),
        section_header('拒绝处理技巧'),
        Paragraph('<b><font color="#E74C3C">"太贵了"</font></b>  →  拆分成本 + 价值对比', S['body']),
        Paragraph('<b><font color="#E74C3C">"不需要"</font></b>  →  深挖需求，找切入点', S['body']),
        Paragraph('<b><font color="#E74C3C">"再考虑"</font></b>  →  设定回访，创造紧迫感', S['body']),
        Paragraph('<b><font color="#E74C3C">"和现有重复"</font></b>  →  强调差异和新增价值', S['body']),
    ]
    return build_card('06-增值业务推荐卡.pdf', '#E67E22', 6,
                      '增值业务推荐卡', '推荐话术 · 价值呈现 · 拒绝处理', content)

# ─────────────────────────────────────────────────────────────────────────────
# 07  家庭生态捆绑卡
# ─────────────────────────────────────────────────────────────────────────────
def card07():
    content = [
        section_header('家庭需求评估维度'),
        bul('成员构成：几口人，年龄分布', '▸'),
        bul('使用场景：上网、看剧、游戏、办公', '▸'),
        bul('消费习惯：当前月消费水平', '▸'),
        bul('忠诚度：在网年限，品牌偏好', '▸'),
        sp(3),
        section_header('产品组合公式'),
        Paragraph('<b>基础套餐 + 加速包 + 增值服务 + 家庭共享 = 综合解决方案</b>', S['label']),
        sp(2),
        bul('基础型：手机+宽带+电视（基础版）', '▸'),
        bul('标准型：手机×2+宽带+电视+安防', '▸'),
        bul('豪华型：全家福套餐+全屋智能+云存储', '▸'),
        sp(3),
        section_header('捆绑价值计算'),
        bul('单产品月均：100元/产品', '▸'),
        bul('2产品捆绑：优惠10%，相当于减免20元/月', '▸'),
        bul('3产品以上：优惠20%，锁定客户关系', '▸'),
        bul('客户感知：省心、省钱、获得感强', '▸'),
    ]
    return build_card('07-家庭生态捆绑卡.pdf', '#16A085', 7,
                      '家庭生态捆绑卡', '需求评估 · 产品组合 · 价值计算', content)

# ─────────────────────────────────────────────────────────────────────────────
# 08  数据化经营追踪卡
# ─────────────────────────────────────────────────────────────────────────────
def card08():
    content = [
        section_header('关键指标定义'),
        Paragraph('<b><font color="#1A5276">客流转化率</font></b>  进店人数中办理业务的比例 | 目标: >15%', S['body']),
        Paragraph('<b><font color="#1A5276">体验参与率</font></b>  办理客户参与体验的比例 | 目标: >40%', S['body']),
        Paragraph('<b><font color="#1A5276">增值推荐率</font></b>  办理客户接受推荐的比例 | 目标: >25%', S['body']),
        Paragraph('<b><font color="#1A5276">客户满意度</font></b>  服务后评分 | 目标: >4.5分', S['body']),
        sp(3),
        section_header('数据追踪频率'),
        bul('日报 — 客流、办理量  |  发现异常及时调整', '→'),
        bul('周报 — 转化率、推荐率  |  周环比分析', '→'),
        bul('月报 — 综合指标、客户反馈  |  月度复盘', '→'),
        sp(3),
        section_header('改善行动指引'),
        bul('指标下滑 → 立即分析原因（人员/产品/动线）', '→'),
        bul('客户反馈差 → 24小时内整改回访', '→'),
        bul('竞品冲击 → 快速调整价值呈现策略', '→'),
        bul('员工士气低 → 激励政策+培训提升', '→'),
    ]
    return build_card('08-数据化经营追踪卡.pdf', '#34495E', 8,
                      '数据化经营追踪卡', '指标定义 · 追踪频率 · 改善行动', content)

# ─────────────────────────────────────────────────────────────────────────────
# 09  课程成果总结卡
# ─────────────────────────────────────────────────────────────────────────────
def card09():
    items = [
        '厅店转型的本质是从交易到体验的升级',
        '客户动机识别是精准服务的前提',
        '人工服务不可替代的核心是信任和温度',
        '体验场景设计要围绕客户旅程展开',
        '增值推荐要建立在真实需求挖掘基础上',
        '家庭生态捆绑是提升LTV的关键策略',
    ]
    content = [
        section_header('核心要点速览'),
    ]
    for i, p in enumerate(items, 1):
        content.append(Paragraph(f'<b>{i}.</b> {p}', S['body']))
    content += [
        sp(3),
        section_header('能力提升自评'),
        Paragraph('<b>客户识别</b>  □ 初级  □ 中级  □ 高级', S['body']),
        Paragraph('<b>需求挖掘</b>  □ 初级  □ 中级  □ 高级', S['body']),
        Paragraph('<b>体验设计</b>  □ 初级  □ 中级  □ 高级', S['body']),
        Paragraph('<b>价值呈现</b>  □ 初级  □ 中级  □ 高级', S['body']),
        Paragraph('<b>家庭营销</b>  □ 初级  □ 中级  □ 高级', S['body']),
        sp(3),
        section_header('下一步行动'),
        Paragraph('<b><font color="#00B4A6">→</font></b>  选择一个薄弱环节重点提升', S['body']),
        Paragraph('<b><font color="#00B4A6">→</font></b>  本周实践一次家庭捆绑营销', S['body']),
        Paragraph('<b><font color="#00B4A6">→</font></b>  下周分享一个成功案例到团队', S['body']),
    ]
    return build_card('09-课程成果总结卡.pdf', '#2C3E50', 9,
                      '课程成果总结卡', '核心要点 · 能力自评 · 下一步', content)

# ─────────────────────────────────────────────────────────────────────────────
# 10  30天行动计划卡
# ─────────────────────────────────────────────────────────────────────────────
def card10():
    content = [
        section_header('周计划模板'),
        Paragraph('<b><font color="#00B4A6">第1周</font></b>  客户识别与需求挖掘专项练习', S['body']),
        Paragraph('<b><font color="#00B4A6">第2周</font></b>  体验场景设计与演示优化', S['body']),
        Paragraph('<b><font color="#00B4A6">第3周</font></b>  增值推荐与话术打磨', S['body']),
        Paragraph('<b><font color="#00B4A6">第4周</font></b>  家庭捆绑实战与数据复盘', S['body']),
        sp(3),
        section_header('月度目标设定'),
        Paragraph('转化率：<b>提升至15%以上</b>  |  当前______%', S['body']),
        Paragraph('体验参与：<b>提升至40%以上</b>  |  当前______%', S['body']),
        Paragraph('增值推荐：<b>提升至25%以上</b>  |  当前______%', S['body']),
        Paragraph('客户满意度：<b>保持4.5分以上</b>  |  当前______分', S['body']),
        sp(3),
        section_header('成果检验标准'),
        Paragraph('<b><font color="#27AE60">✓</font></b>  能够独立完成一次完整的家庭营销', S['body']),
        Paragraph('<b><font color="#27AE60">✓</font></b>  客户满意度评分达到4.5分以上', S['body']),
        Paragraph('<b><font color="#27AE60">✓</font></b>  至少分享2个成功案例到团队', S['body']),
        Paragraph('<b><font color="#27AE60">✓</font></b>  提出1条体验动线优化建议', S['body']),
    ]
    return build_card('10-30天行动计划卡.pdf', C['accent'], 10,
                      '30天行动计划卡', '周计划模板 · 月度目标 · 成果检验', content)

# ─────────────────────────────────────────────────────────────────────────────
if __name__ == '__main__':
    print('=' * 60)
    print('《厅店重生》培训工具卡生成器')
    print(f'输出目录: {OUT_DIR}')
    print('=' * 60)
    card01()
    card02()
    card03()
    card04()
    card05()
    card06()
    card07()
    card08()
    card09()
    card10()
    print('=' * 60)
    print('全部10张工具卡生成完成！')
    print('=' * 60)
