# -*- coding: utf-8 -*-
"""
Build file 02: 下次面谈准备清单_范例填好版.xlsx
"""
import os
import shutil
import zipfile
from pathlib import Path

TEMPLATE = Path(r"C:/Users/Administrator/.claude/skills/Excel表格处理/templates/minimal_xlsx")
OUT_DIR = Path(r"D:/2026年课程/竞越/绩效管理和绩效面谈：通过绩效面谈让员工更加胜任/完整课程包/13_配套Excel表单")
WORK = Path(r"D:/CC/temp/excel_build/work_02")

# Clean and copy template
if WORK.exists():
    shutil.rmtree(WORK)
shutil.copytree(TEMPLATE, WORK)

# Chinese curly quote characters (U+201C, U+201D) - explicit unicode
LQ = '“'  # left double curly quote
RQ = '”'  # right double curly quote

def esc(s):
    """Escape XML special chars."""
    return (str(s)
            .replace('&', '&amp;')
            .replace('<', '&lt;')
            .replace('>', '&gt;')
            .replace('"', '&quot;'))

def cell_str(col, n, style, text):
    return f'<c r="{col}{n}" s="{style}" t="inlineStr"><is><t>{esc(text)}</t></is></c>'

def cell_empty(col, n, style):
    return f'<c r="{col}{n}" s="{style}"/>'

def cell_formula(col, n, style, formula):
    return f'<c r="{col}{n}" s="{style}"><f>{formula}</f><v></v></c>'

# === Build styles.xml ===
STYLES_XML = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <numFmts count="6">
    <numFmt numFmtId="164" formatCode="$#,##0;($#,##0);&quot;-&quot;"/>
    <numFmt numFmtId="165" formatCode="0.0%"/>
    <numFmt numFmtId="166" formatCode="0.0"/>
    <numFmt numFmtId="167" formatCode="#,##0"/>
    <numFmt numFmtId="168" formatCode="0"/>
    <numFmt numFmtId="169" formatCode="yyyy-mm-dd"/>
  </numFmts>
  <fonts count="6">
    <font><sz val="11"/><name val="Calibri"/><color rgb="00000000"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="000000FF"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="00000000"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="00008000"/></font>
    <font><sz val="11"/><name val="Calibri"/><b/><color rgb="00000000"/></font>
    <font><sz val="10"/><name val="Calibri"/><color rgb="00595959"/></font>
  </fonts>
  <fills count="6">
    <fill><patternFill patternType="none"/></fill>
    <fill><patternFill patternType="gray125"/></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="00FFF2CC"/><bgColor indexed="64"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="00D9E1F2"/><bgColor indexed="64"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="00E2EFDA"/><bgColor indexed="64"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="00FCE4D6"/><bgColor indexed="64"/></patternFill></fill>
  </fills>
  <borders count="3">
    <border><left/><right/><top/><bottom/><diagonal/></border>
    <border><left/><right/><top style="thin"><color rgb="00BFBFBF"/></top><bottom style="thin"><color rgb="00BFBFBF"/></bottom><diagonal/></border>
    <border><left/><right/><top style="medium"><color rgb="00000000"/></top><bottom style="medium"><color rgb="00000000"/></bottom><diagonal/></border>
  </borders>
  <cellStyleXfs count="1">
    <xf numFmtId="0" fontId="0" fillId="0" borderId="0"/>
  </cellStyleXfs>
  <cellXfs count="20">
    <xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/>
    <xf numFmtId="0" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1"/>
    <xf numFmtId="0" fontId="2" fillId="0" borderId="0" xfId="0" applyFont="1"/>
    <xf numFmtId="0" fontId="3" fillId="0" borderId="0" xfId="0" applyFont="1"/>
    <xf numFmtId="0" fontId="4" fillId="0" borderId="0" xfId="0" applyFont="1"/>
    <xf numFmtId="0" fontId="4" fillId="2" borderId="0" xfId="0" applyFont="1" applyFill="1"/>
    <xf numFmtId="0" fontId="0" fillId="3" borderId="0" xfId="0" applyFill="1"/>
    <xf numFmtId="0" fontId="0" fillId="4" borderId="0" xfId="0" applyFill="1"/>
    <xf numFmtId="0" fontId="0" fillId="5" borderId="0" xfId="0" applyFill="1"/>
    <xf numFmtId="0" fontId="4" fillId="3" borderId="0" xfId="0" applyFont="1" applyFill="1"/>
    <xf numFmtId="0" fontId="4" fillId="4" borderId="0" xfId="0" applyFont="1" applyFill="1"/>
    <xf numFmtId="0" fontId="4" fillId="5" borderId="0" xfId="0" applyFont="1" applyFill="1"/>
    <xf numFmtId="0" fontId="0" fillId="0" borderId="1" xfId="0" applyBorder="1"/>
    <xf numFmtId="0" fontId="1" fillId="0" borderId="1" xfId="0" applyFont="1" applyBorder="1"/>
    <xf numFmtId="0" fontId="4" fillId="0" borderId="1" xfId="0" applyFont="1" applyBorder="1"/>
    <xf numFmtId="0" fontId="0" fillId="3" borderId="1" xfId="0" applyFill="1" applyBorder="1"/>
    <xf numFmtId="0" fontId="1" fillId="3" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1"/>
    <xf numFmtId="0" fontId="2" fillId="4" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1"/>
    <xf numFmtId="0" fontId="2" fillId="5" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1"/>
    <xf numFmtId="0" fontId="2" fillId="3" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1"/>
  </cellXfs>
  <cellStyles count="1">
    <cellStyle name="Normal" xfId="0" builtinId="0"/>
  </cellStyles>
</styleSheet>
'''
(WORK / "xl" / "styles.xml").write_text(STYLES_XML, encoding="utf-8")

# Helper: build a row
def make_row(n, cells, height=None):
    h_attr = f' ht="{height}" customHeight="1"' if height else ''
    cell_strs = []
    for col, style, content in cells:
        if content is None:
            cell_strs.append(cell_empty(col, n, style))
        elif isinstance(content, tuple) and len(content) == 2 and content[0] == 'f':
            cell_strs.append(cell_formula(col, n, style, content[1]))
        else:
            cell_strs.append(cell_str(col, n, style, content))
    return f'<row r="{n}"{h_attr}>\n  ' + '\n  '.join(cell_strs) + '\n</row>'

# === Sheet 1: 使用说明 ===
rows1 = []
r = 1
rows1.append(make_row(r, [('A', 4, '02 下次面谈准备清单（范例填好版）使用说明')], height=28))
r += 1
rows1.append(make_row(r, [('A', 6, '对应课程工具'), ('B', 2, 'F10 下次面谈准备清单（学员手册 P39-42）')]))
r += 1
rows1.append(make_row(r, [('A', 6, '范例情境'), ('B', 2, '某互联网创业公司产品经理“小周”29岁，将与团队中“小马”（高级产品经理）做半年度面谈')]))
r += 1
rows1.append(make_row(r, [('A', 6, '使用场景'), ('B', 2, '本表为完整范例，供学员参考“如何把课程工具转化为面谈准备”。不是标准答案，是范本。')]))
r += 1

r += 1  # blank
rows1.append(make_row(r, [('A', 5, '一、阅读顺序建议')], height=22))
r += 1
read_order = [
    '先看“面谈基本信息”区，理解范例情境（员工代号、岗位、考核周期）',
    '再看“第一区：事实与归因准备”，观察如何用F4探寻归因问题',
    '然后看“第二区：预估难点与准备”，重点看AI时代五类场景的标注',
    '再看“第三区：发展对话规划”，理解双轨状态判断 + 启动问题选择',
    '最后看“第四区：四步面谈预演”，学习关键词版开场语',
    '“30天回看区”可与原版对照，观察“预想 vs 实际”的差距',
]
for i, desc in enumerate(read_order, start=1):
    rows1.append(make_row(r, [('A', 14, f'{i}.'), ('B', 2, desc)]))
    r += 1

r += 1
rows1.append(make_row(r, [('A', 5, '二、范例的核心学习点')], height=22))
r += 1
learn_points = [
    ('事实归因区分', f'明确标注{LQ}归因模糊{RQ}，因此在面谈第二步需要重点探寻归因，而不是直接跳到分析缺口'),
    ('AI场景类型', f'预估难点中精确识别为B类型（方向迷失）+D类型（美化成果）'),
    ('双轨分析', f'AI协作力{LQ}够用但有边界不清问题{RQ}，人类深度{LQ}够用但在产品决策中体现不足{RQ}——具体到情境'),
    ('启动问题选择', f'选启动问题二（AI时代），理由是员工最近有{LQ}方向迷失{RQ}倾向'),
    ('备用话术', f'准备了3类回应分支：员工说{LQ}AI的局限{RQ}、员工沉默、员工说{LQ}我状态不好{RQ}'),
    ('关键词版预演', '开场语不超过30字，每步只写关键问题（不写整段话避免念稿）'),
    ('方向感', f'不是行动清单，是{LQ}我的判断力是真实的{RQ}这个具体方向感'),
    ('问责机制', f'30天内做到的事具体到{LQ}产品决策判断记录{RQ}练习，并指定验证方式'),
]
for title, desc in learn_points:
    rows1.append(make_row(r, [('A', 14, title), ('B', 2, desc)]))
    r += 1

r += 1
rows1.append(make_row(r, [('A', 5, '三、如何借鉴到自己的面谈')], height=22))
r += 1
borrow_tips = [
    ('不要复制', f'你的面谈对象、行业、情境都不同。范例展示的是{LQ}思考的深度{RQ}，不是{LQ}具体的字句{RQ}'),
    ('借结构', '四个区的结构、关键问题清单、双轨分析框架可以原样借用'),
    ('改内容', '事实、归因、回应预演必须用你自己的面谈对象的具体情境'),
    ('保深度', f'每个空格后都应有{LQ}为什么这样写{RQ}的思考——这是范例最值得学的地方'),
    ('重实践', '填完自己的清单后，配问责伙伴，30天后回看，转化为能力'),
]
for title, desc in borrow_tips:
    rows1.append(make_row(r, [('A', 14, title), ('B', 2, desc)]))
    r += 1

r += 1
rows1.append(make_row(r, [('A', 6, '金句'), ('B', 6, '范例不是答案，是镜子——照出你自己的准备深度。')]))

sheet1_body = '\n  '.join(rows1)
sheet1_xml = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView tabSelected="1" workbookViewId="0">
      <pane ySplit="1" topLeftCell="A2" activePane="bottomLeft" state="frozen"/>
    </sheetView>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols>
    <col min="1" max="1" width="18" customWidth="1"/>
    <col min="2" max="2" width="100" customWidth="1"/>
  </cols>
  <sheetData>
  {sheet1_body}
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>
'''
(WORK / "xl" / "worksheets" / "sheet1.xml").write_text(sheet1_xml, encoding="utf-8")

# === Sheet 2: 面谈准备清单_范例 ===
rows2 = []
r = 1
rows2.append(make_row(r, [('A', 4, '下次面谈准备清单（范例填好版）')], height=30))
r += 1
rows2.append(make_row(r, [('A', 2, f'范例情境：某互联网创业公司产品经理{LQ}小周{RQ}与团队成员{LQ}小马{RQ}（高级产品经理）的半年度面谈准备')]))
r += 1

r += 1
rows2.append(make_row(r, [('A', 5, '面谈基本信息')], height=22))
r += 1
rows2.append(make_row(r, [('A', 14, '项目'), ('B', 14, '内容')]))
r += 1
info_data = [
    ('员工代号', '小马'),
    ('岗位', '高级产品经理（带2人小组）'),
    ('工龄', '4年（本公司2年）'),
    ('考核周期', '2025年下半年（7-12月）'),
    ('面谈类型', '评估面谈 + 发展面谈合一'),
    ('面谈预计时间', '2026年1月15日（周三）下午3:00'),
    ('面谈地点', '11楼小会议室A（已预约，已通知小马）'),
    ('提前通知员工了', f'是（1月8日已通知，说明{LQ}半年度面谈+发展方向讨论{RQ}）'),
]
for k, v in info_data:
    rows2.append(make_row(r, [('A', 13, k), ('B', 16, v)]))
    r += 1

# 第一区
r += 1
rows2.append(make_row(r, [('A', 5, '第一区：事实与归因准备（用5-10分钟）')], height=22))
r += 1
rows2.append(make_row(r, [('A', 2, '金句：事实没填好，后面三区都白填。')]))
r += 1

# Fact 1
rows2.append(make_row(r, [('A', 9, f'事实1（最重要的那个）：Q3重点项目{LQ}智能推荐{RQ}上线后数据未达预期')], height=20))
r += 1
rows2.append(make_row(r, [('A', 14, '时间/情境'), ('B', 16, f'2025年9月15日上线，原计划12月达成{LQ}日活提升15%{RQ}目标')]))
r += 1
rows2.append(make_row(r, [('A', 14, '具体行为'), ('B', 16, f'项目从立项到上线耗时4个月（原计划3个月）；上线时已有{LQ}用户反馈功能不够稳定{RQ}的内部测试结果，但按原计划发布；上线后第2周发现核心推荐算法的{LQ}冷启动{RQ}问题')]))
r += 1
rows2.append(make_row(r, [('A', 14, '结果/影响'), ('B', 16, f'项目DAU提升5%（目标15%）；团队3人4个月工作投入；客户对{LQ}AI智能推荐{RQ}信心下降，影响下半年销售线索；小马情绪明显低落')]))
r += 1
rows2.append(make_row(r, [('A', 14, '归因判断'), ('B', 16, f'{LQ}AI推荐算法本身的局限{RQ}是客观事实，但小马在已知{LQ}内部测试结果不稳定{RQ}的情况下按原计划发布——这个判断是否合理需共同探索。涉及{LQ}判断力{RQ}问题，不是{LQ}AI能力{RQ}问题。')]))
r += 1
rows2.append(make_row(r, [('A', 14, '归因是否清晰'), ('B', 16, '模糊（需要在面谈第二步探寻归因时共同探索）')]))
r += 1
rows2.append(make_row(r, [('A', 14, '使用F4探寻问题组'), ('B', 16, '第2组：关于过程（重点） + 第3组：关于AI的参与（重点）')]))
r += 1
rows2.append(make_row(r, [('A', 14, '准备的具体问题'), ('B', 16, f'1) 这个项目从立项到上线4个月里，关键决策点有几个？当时你的判断依据是什么？  2) 在知道{LQ}内部测试结果不稳定{RQ}之后，是什么让你决定按原计划发布？  3) 在这个项目里，AI工具给了你什么建议？你做了哪些AI不能替代的判断？  4) 如果再做一次，你会在哪个环节做不同决定？')]))
r += 1

# Fact 2
r += 1
rows2.append(make_row(r, [('A', 9, f'事实2：Q4主导的{LQ}用户调研报告{RQ}产出质量获部门好评')], height=20))
r += 1
rows2.append(make_row(r, [('A', 14, '时间/情境'), ('B', 16, f'2025年11月完成的{LQ}Z世代用户消费偏好{RQ}调研报告')]))
r += 1
rows2.append(make_row(r, [('A', 14, '具体行为'), ('B', 16, f'报告涵盖50个深度访谈、3轮问卷；交付时间比原计划提前2周；{LQ}用户分层{RQ}和{LQ}消费决策路径{RQ}被市场部、销售部、CEO引用')]))
r += 1
rows2.append(make_row(r, [('A', 14, '结果/影响'), ('B', 16, '报告被CEO在Q4全员会上引用；部门内对小马“判断力”评价提升；销售部主动来找小马咨询“Z世代客户开发”问题')]))
r += 1
rows2.append(make_row(r, [('A', 14, '归因判断'), ('B', 16, f'小马的{LQ}判断力{RQ}明显体现。但我注意到：小马在访谈中大量使用AI做实时转写和初步整理，但{LQ}用户分层{RQ}的判断明显是手工的。归因相对清晰。')]))
r += 1
rows2.append(make_row(r, [('A', 14, '是否需要探寻'), ('B', 16, '不需要')]))
r += 1

# Fact 3
r += 1
rows2.append(make_row(r, [('A', 9, '事实3（备选）：Q3-Q4跨部门协作中的沟通表现')], height=20))
r += 1
rows2.append(make_row(r, [('A', 14, '时间/情境'), ('B', 16, f'2025年Q3，与技术团队的{LQ}产品技术方案{RQ}沟通会')]))
r += 1
rows2.append(make_row(r, [('A', 14, '具体行为'), ('B', 16, f'沟通会上技术负责人反馈{LQ}PRD多次变更，团队工作受影响{RQ}；跨部门同事私下评价{LQ}小马经常中途改方向{RQ}；小马解释{LQ}产品需求本来就是迭代的{RQ}')]))
r += 1
rows2.append(make_row(r, [('A', 14, '结果/影响'), ('B', 16, f'技术团队对小马{LQ}沟通质量{RQ}评价降低；跨部门协作效率受影响')]))
r += 1
rows2.append(make_row(r, [('A', 14, '备注'), ('B', 16, '此项备选——根据面谈时长决定是否展开')]))
r += 1

# 第二区
r += 1
rows2.append(make_row(r, [('A', 5, '第二区：预估难点与准备（用5分钟）')], height=22))
r += 1
rows2.append(make_row(r, [('A', 2, '金句：没准备最坏情况，遇见就崩。')]))
r += 1
rows2.append(make_row(r, [('A', 14, '预计最难的时刻'), ('B', 16, f'当问到{LQ}为什么在知道测试结果不稳定后还按原计划发布{RQ}时，小马可能防御性归因到{LQ}AI推荐算法本身的局限{RQ}或{LQ}市场压力{RQ}。这可能是这次面谈的{LQ}最大挑战{RQ}')]))
r += 1
rows2.append(make_row(r, [('A', 14, '难点类型（多选）'), ('B', 16, '员工可能情绪激动（最近状态低落）；AI时代五类特有场景之B类型（方向迷失）+D类型（美化成果）')]))
r += 1
rows2.append(make_row(r, [('A', 14, '开场白（第一句话）'), ('B', 16, f'{LQ}小马，谢谢你来。今天我们做半年度面谈。我想先和你一起回顾几个具体的事，然后聊聊下个季度的发展方向。{RQ}')]))
r += 1
rows2.append(make_row(r, [('A', 14, '关键原则'), ('B', 16, f'事面为主，正面为辅——所有讨论基于{LQ}具体事件{RQ}，用{LQ}事{RQ}打开对话；用{LQ}正面{RQ}避免含糊')]))
r += 1
rows2.append(make_row(r, [('A', 14, f'备用话术（如员工反驳{LQ}AI的局限{RQ}）'), ('B', 16, f'{LQ}我听到了——AI推荐算法确实有自己的局限。但我想具体看：在9月15日发布前，你已经知道内部测试结果不稳定——这个判断是你做的还是算法告诉你的？如果再做一次，你会怎么决定？{RQ}')]))
r += 1
rows2.append(make_row(r, [('A', 14, '最坏情况：完全对抗'), ('B', 16, f'{LQ}我看到了这件事对你的压力。我们先停一下——这件事我不是要追责。我想和你一起看：哪里出了问题，下个季度怎么调整。{RQ}')]))
r += 1
rows2.append(make_row(r, [('A', 14, '最坏情况：完全沉默'), ('B', 16, f'{LQ}你可能需要一点时间整理。我们可以先停一两分钟——这场对话对我来说很重要，我想确保我们能在对的状态下继续。{RQ}')]))
r += 1

# 第三区
r += 1
rows2.append(make_row(r, [('A', 5, '第三区：发展对话规划（用5分钟）')], height=22))
r += 1
rows2.append(make_row(r, [('A', 2, '金句：评估面谈做得多，发展对话做得少；本表强制你两条腿走。')]))
r += 1
rows2.append(make_row(r, [('A', 14, 'AI协作力'), ('B', 16, f'够用——小马AI使用熟练，但存在{LQ}AI判断+我的判断{RQ}边界不清问题')]))
r += 1
rows2.append(make_row(r, [('A', 14, '人类深度'), ('B', 16, f'够用——判断力在{LQ}用户调研报告{RQ}中体现明显，但在{LQ}产品决策{RQ}中体现不足')]))
r += 1
rows2.append(make_row(r, [('A', 14, '更紧迫的发展轨道'), ('B', 16, f'人类深度（理由：在产品决策中判断力需要强化，Q3项目反映的就是这个）')]))
r += 1
rows2.append(make_row(r, [('A', 14, '最想达到的结果'), ('B', 16, f'让小马带走一个方向感：{LQ}我的判断力是这里的核心价值——下个季度在{LQ}产品决策{RQ}上，我要让我的判断更可见。{RQ}')]))
r += 1
rows2.append(make_row(r, [('A', 14, '启动问题选择'), ('B', 16, f'启动二（AI时代）：{LQ}在你用AI工具最多的那类工作里，你觉得自己做了什么？{RQ}')]))
r += 1
rows2.append(make_row(r, [('A', 14, '为什么选这个'), ('B', 16, f'启动二最适合小马——他最近有{LQ}方向迷失{RQ}倾向，Q3项目让他开始怀疑自己的价值。用{LQ}AI工具里的”我”{RQ}这个问题，可以帮他在{LQ}AI时代{RQ}重新找到{LQ}我的价值{RQ}')]))
r += 1
rows2.append(make_row(r, [('A', 14, '回应A猜+引导'), ('B', 16, f'猜{LQ}我大部分时间都在让AI帮我判断{RQ} → 引导：{LQ}我听到你说{LQ}让AI帮我判断{RQ}——能具体说说是哪部分吗？比如{LQ}智能推荐{RQ}项目的核心判断，是AI做的还是你做的？{RQ}')]))
r += 1
rows2.append(make_row(r, [('A', 14, '回应B猜+引导'), ('B', 16, f'猜{LQ}我不知道我的判断体现在哪里{RQ} → 引导：{LQ}我注意到你那份{LQ}Z世代调研报告{RQ}里，{LQ}用户分层{RQ}的判断非常清晰——那是你做的还是AI做的？如果是你做的，那你的判断是真实存在的。{RQ}')]))
r += 1
rows2.append(make_row(r, [('A', 14, '回应C猜+引导'), ('B', 16, f'猜{LQ}我最近状态不太好，可能影响判断{RQ} → 引导：{LQ}我听到了——Q3项目后你的状态确实有变化。今天我们不只谈项目，也聊聊你的方向。我关心的是{LQ}你在这里还能不能继续成长{RQ}。{RQ}')]))
r += 1
rows2.append(make_row(r, [('A', 14, '希望员工带走的方向感'), ('B', 16, f'{LQ}我的判断力是真实的——AI时代，{LQ}我{RQ}的部分不是被弱化，是被重新定义。{RQ}')]))
r += 1

# 第四区
r += 1
rows2.append(make_row(r, [('A', 5, '第四区：四步面谈预演（关键词版，用5-10分钟）')], height=22))
r += 1
rows2.append(make_row(r, [('A', 2, '金句：写整段话会让你念稿，自然度大降——用关键词版。')]))
r += 1

rows2.append(make_row(r, [('A', 9, '第一步——共看事实')], height=20))
r += 1
rows2.append(make_row(r, [('A', 14, '开场语（不超过30字）'), ('B', 16, f'{LQ}今天我们一起回顾几个具体的事，然后聊聊发展方向。{RQ}')]))
r += 1
rows2.append(make_row(r, [('A', 14, '邀请员工先说的引导句'), ('B', 16, f'{LQ}我想先听你说——这半年你觉得做得怎么样？{RQ}')]))
r += 1

r += 1
rows2.append(make_row(r, [('A', 9, '第二步——探寻归因')], height=20))
r += 1
rows2.append(make_row(r, [('A', 14, '第一个问题'), ('B', 16, f'{LQ}在Q3的{LQ}智能推荐{RQ}项目里，关键决策点有几个？你的判断依据是什么？{RQ}')]))
r += 1
rows2.append(make_row(r, [('A', 14, f'如员工答{LQ}没什么特别的{RQ}则接'), ('B', 16, f'{LQ}我具体问——9月15日发布前，内部测试结果已经显示{LQ}功能不够稳定{RQ}。你当时的判断是什么？{RQ}')]))
r += 1
rows2.append(make_row(r, [('A', 14, f'如听到{LQ}AI参与{RQ}提法，反应是'), ('B', 16, f'{LQ}我听到了——AI推荐算法确实有自己的能力边界。我想具体看：在那个关键决策点，是AI告诉你这么做还是你的判断？{RQ}')]))
r += 1

r += 1
rows2.append(make_row(r, [('A', 9, '第三步——分析缺口')], height=20))
r += 1
rows2.append(make_row(r, [('A', 14, '事实支撑'), ('B', 16, f'{LQ}Q3项目从3个月延期到4个月；发布前已知测试结果不稳定；上线后DAU提升5%（目标15%）。{RQ}')]))
r += 1
rows2.append(make_row(r, [('A', 14, '我的结论'), ('B', 16, f'{LQ}这个项目的核心问题不是AI算法——是产品决策的判断力问题。{RQ}')]))
r += 1
rows2.append(make_row(r, [('A', 14, f'回应空间（{LQ}你怎么看{RQ}）'), ('B', 16, f'{LQ}你对这件事怎么看？你觉得判断上哪里可以不同？{RQ}')]))
r += 1

r += 1
rows2.append(make_row(r, [('A', 9, '第四步——共建方向')], height=20))
r += 1
rows2.append(make_row(r, [('A', 14, '起手问题'), ('B', 16, f'{LQ}下个季度，在{LQ}产品决策的判断力{RQ}这件事上，你想怎么调整？{RQ}')]))
r += 1
rows2.append(make_row(r, [('A', 14, '收尾语（含时间点承诺）'), ('B', 16, f'{LQ}我们今天定的是：下个季度选1-2个{LQ}重要产品决策{RQ}，做{LQ}判断记录{RQ}，每月1次30分钟{LQ}判断讨论会{RQ}。这个我们30天后回顾——具体到时点。{RQ}')]))
r += 1
r += 1
rows2.append(make_row(r, [('A', 14, '最想做到但以前没做到的一件事'), ('B', 16, f'承认小马的{LQ}判断力是真实的{RQ}，不让他带着{LQ}我可能不适合这个岗位{RQ}的感觉离开')]))
r += 1

# 问责伙伴
r += 1
rows2.append(make_row(r, [('A', 5, '问责伙伴（没有问责伙伴的本表，等于没填）')], height=22))
r += 1
rows2.append(make_row(r, [('A', 14, '问责伙伴姓名'), ('B', 16, '张磊（同组产品经理，也是课程的同事）')]))
r += 1
rows2.append(make_row(r, [('A', 14, '联系方式（微信）'), ('B', 16, 'zl_2025')]))
r += 1
rows2.append(make_row(r, [('A', 14, '面谈完成后会告诉张磊'), ('B', 16, '面谈是否发生、小马的反应、我做到了什么、没做到什么')]))
r += 1
r += 1
rows2.append(make_row(r, [('A', 14, '30天内要做到的一件事'), ('B', 16, f'在和小马的1v1里，做一次{LQ}产品决策判断记录{RQ}练习（不是正式面谈，是{LQ}过程性跟进{RQ}）')]))
r += 1
rows2.append(make_row(r, [('A', 14, '对应员工'), ('B', 16, '小马')]))
r += 1
rows2.append(make_row(r, [('A', 14, '验证方式'), ('B', 16, f'张磊在3周后问小马{LQ}你最近和周哥聊了什么{RQ}，看小马是否能复述出{LQ}判断记录{RQ}这件事')]))
r += 1
r += 1
rows2.append(make_row(r, [('A', 14, '30天后回看时最想看到'), ('B', 16, f'①面谈真实发生了 ②小马的方向感{LQ}我的判断力是真实的{RQ}被强化了 ③我自己的{LQ}情面{RQ}原则用得到位——没有因为Q3项目的事而{LQ}批判{RQ}小马 ④问责伙伴张磊也认可这次面谈')]))
r += 1

# 30天回看
r += 1
rows2.append(make_row(r, [('A', 5, '30天后回看区（预填）')], height=22))
r += 1
rows2.append(make_row(r, [('A', 14, '面谈实际发生日期'), ('B', 16, '2026年1月15日（按计划）')]))
r += 1
rows2.append(make_row(r, [('A', 14, '30天后回顾日期'), ('B', 16, '2026年2月15日')]))
r += 1
rows2.append(make_row(r, [('A', 14, '30天后回看维度'), ('B', 16, f'1) 面谈中最让我意外的是？小马的反应是？ 2) 我有没有用上{LQ}先认可AI正当性再回到判断{RQ}的话术？ 3) 小马是否带走了{LQ}我的判断力是真实的{RQ}这个方向感？ 4) 我的{LQ}四步预演{RQ}在面谈中真的用到了吗？哪里偏离了预演？')]))
r += 1

# Footer
r += 1
rows2.append(make_row(r, [('A', 6, '金句'), ('B', 6, f'范例不是答案，是镜子——照出你自己的准备深度。')]))
r += 1
rows2.append(make_row(r, [('A', 5, '本表配套使用：F1（识别问题）/ F2（自检）/ F3（四步面谈）/ F4（归因问题）/ F5（四原则话术）/ F6（五类场景）/ F7（启动问题）/ F8（双轨评估）/ F9（缺口判断）')]))

sheet2_body = '\n  '.join(rows2)
sheet2_xml = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView workbookViewId="0"/>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols>
    <col min="1" max="1" width="22" customWidth="1"/>
    <col min="2" max="2" width="115" customWidth="1"/>
  </cols>
  <sheetData>
  {sheet2_body}
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>
'''
(WORK / "xl" / "worksheets" / "sheet2.xml").write_text(sheet2_xml, encoding="utf-8")

# === Sheet 3: 范例学习要点对照 ===
rows3 = []
r = 1
rows3.append(make_row(r, [('A', 4, '范例学习要点对照'), ('B', 4, None), ('C', 4, None), ('D', 4, None)], height=28))
r += 1
rows3.append(make_row(r, [('A', 2, f'把课程工具转化为面谈准备的关键，是{LQ}在每个空格后都有一段思考{RQ}。下表是范例中最值得借鉴的几个{LQ}思考深度{RQ}。')]))
r += 1
r += 1
rows3.append(make_row(r, [('A', 14, '学习维度'), ('B', 14, '范例中怎么写的'), ('C', 14, '对应的F系列工具'), ('D', 14, '你能借鉴什么')]))
r += 1
learning_data = [
    ('事实归因区分', f'{LQ}事实1{RQ}明确标注{LQ}归因模糊{RQ}——这意味着面谈第二步需要重点探寻归因', 'F4 探寻归因', f'不要{LQ}填完事实就直接跳到分析缺口{RQ}'),
    ('AI场景类型识别', f'{LQ}预估难点{RQ}中精确识别B类型（方向迷失）+D类型（美化成果）', 'F6 五类场景', f'不要写{LQ}员工可能不接受{RQ}这种笼统判断'),
    ('双轨分析', f'AI协作力{LQ}够用但有边界不清{RQ}、人类深度{LQ}够用但在产品决策中体现不足{RQ}', 'F8 双轨评估', f'不要{LQ}贴标签{RQ}——要具体到情境'),
    ('启动问题选择理由', f'选启动二（AI时代），理由是员工最近有{LQ}方向迷失{RQ}倾向', 'F7 启动问题', f'不要随机选——要说明{LQ}为什么选这个{RQ}'),
    ('备用话术分支', f'准备3类回应：员工说{LQ}AI的局限{RQ}、员工沉默、员工说{LQ}我状态不好{RQ}', 'F5 四原则 + F6 场景', f'不要只准备{LQ}主线对话{RQ}——要准备分支'),
    ('关键词版预演', '开场语不超过30字，每步只写关键问题（不写整段话）', 'F3 四步法', f'不要写{LQ}念稿稿{RQ}——关键词版自然度更高'),
    ('方向感具体化', f'{LQ}我的判断力是真实的{RQ}——具体到感受层，不是行动清单', 'F7 发展对话', f'不要停在{LQ}做哪些事{RQ}——要给{LQ}方向感{RQ}'),
    ('问责机制可验证', f'30天内{LQ}做产品决策判断记录{RQ}练习 + 张磊3周后问小马验证', 'F10 问责机制', f'不要写{LQ}加强沟通{RQ}——要可观察、可验证'),
]
for dim, how, tool, learn in learning_data:
    rows3.append(make_row(r, [('A', 13, dim), ('B', 16, how), ('C', 16, tool), ('D', 16, learn)]))
    r += 1

r += 1
rows3.append(make_row(r, [('A', 6, '核心价值'), ('B', 6, f'这份范例的核心价值不在{LQ}具体的字句{RQ}——在{LQ}思考的深度{RQ}。一份好的清单不是{LQ}填完所有空格{RQ}，是{LQ}在每个空格后都有一段思考{RQ}。')]))

sheet3_body = '\n  '.join(rows3)
sheet3_xml = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView workbookViewId="0"/>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols>
    <col min="1" max="1" width="18" customWidth="1"/>
    <col min="2" max="2" width="50" customWidth="1"/>
    <col min="3" max="3" width="22" customWidth="1"/>
    <col min="4" max="4" width="40" customWidth="1"/>
  </cols>
  <sheetData>
  {sheet3_body}
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>
'''
(WORK / "xl" / "worksheets" / "sheet3.xml").write_text(sheet3_xml, encoding="utf-8")

# Update workbook.xml
wb_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <fileVersion appName="xl" lastEdited="7" lowestEdited="7"/>
  <workbookPr defaultThemeVersion="166925"/>
  <bookViews>
    <workbookView xWindow="0" yWindow="0" windowWidth="20140" windowHeight="10960"/>
  </bookViews>
  <sheets>
    <sheet name="使用说明" sheetId="1" r:id="rId1"/>
    <sheet name="面谈准备清单_范例" sheetId="2" r:id="rId4"/>
    <sheet name="范例学习要点" sheetId="3" r:id="rId5"/>
  </sheets>
  <calcPr calcId="191029"/>
</workbook>
'''
(WORK / "xl" / "workbook.xml").write_text(wb_xml, encoding="utf-8")

rels_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
  <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml"/>
  <Relationship Id="rId4" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet2.xml"/>
  <Relationship Id="rId5" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet3.xml"/>
</Relationships>
'''
(WORK / "xl" / "_rels" / "workbook.xml.rels").write_text(rels_xml, encoding="utf-8")

ss_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="0" uniqueCount="0"/>
'''
(WORK / "xl" / "sharedStrings.xml").write_text(ss_xml, encoding="utf-8")

ct_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
  <Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet2.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet3.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>
  <Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/>
</Types>
'''
(WORK / "[Content_Types].xml").write_text(ct_xml, encoding="utf-8")

# Pack
OUT_FILE = OUT_DIR / "02_下次面谈准备清单_范例填好版.xlsx"
import subprocess
res = subprocess.run(
    ["python", r"C:/Users/Administrator/.claude/skills/Excel表格处理/scripts/xlsx_pack.py",
     str(WORK), str(OUT_FILE)],
    capture_output=True, text=True
)
print("STDOUT:", res.stdout)
print("STDERR:", res.stderr)
print("Return code:", res.returncode)
print("Output file exists:", OUT_FILE.exists())
print("File size:", OUT_FILE.stat().st_size if OUT_FILE.exists() else "N/A")
