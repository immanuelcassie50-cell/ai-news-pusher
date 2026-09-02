"""
Build 工具表-电子版.xlsx — 6 sheets + hidden demo sheet
五张核心工具表 + 使用说明总览 + 示范数据(隐藏)
"""

import os, shutil, subprocess
from xml.sax.saxutils import escape

SKILL  = "C:/Users/Administrator/.claude/skills/Excel表格处理"
SCRIPTS= f"{SKILL}/scripts"
TMPL   = f"{SKILL}/templates/minimal_xlsx"
WORK   = "/tmp/xlsx_work2"
OUT    = "D:/新课开发/2026核心课/行动计划优化/完整课程包/02-学员系统/工具表-电子版.xlsx"

# ── style indices (from minimal_xlsx template) ──────────────────────────────
S_INP_GEN = 1   # blue, general
S_FRM_GEN = 2   # black, general
S_HDR     = 4   # bold header
S_INP_INT = 9   # blue, integer
S_FRM_INT = 10  # black, integer

# ── low-level XML helpers ────────────────────────────────────────────────────
def sc(addr, val, s=None, formula=None):
    """String cell: t=inlineStr is added only by cell() when val is not None,
    and ONLY if t was not already set."""
    a = f' r="{addr}"'
    if s is not None: a += f' s="{s}"'
    if formula:
        v = ""
        return f"<c{a}><f>{escape(formula)}</f>{v}</c>"
    return f'<c{a}><is><t>{escape(str(val))}</t></is></c>'

def nc(addr, val, s=None, formula=None):
    """Number cell."""
    a = f' r="{addr}"'
    if s is not None: a += f' s="{s}"'
    if formula:
        return f'<c{a}><f>{escape(formula)}</f><v></v></c>'
    return f'<c{a}><v>{val}</v></c>'

def rc(num, cells_xml, ht=None):
    attrs = f' r="{num}"'
    if ht:
        attrs += f' ht="{ht}" customHeight="1"'
    return f"<row{attrs}>{cells_xml}</row>"

def ac(addr, text, s):
    """Header cell (bold), string type via inlineStr."""
    a = f' r="{addr}" s="{s}"'
    return f'<c{a}><is><t>{escape(str(text))}</t></is></c>'

def col_w(d):
    lines = []
    for col, w in sorted(d.items()):
        lines.append(f'  <col min="{col}" max="{col}" width="{w}" customWidth="1"/>')
    return '\n'.join(lines)

# ── shared strings ────────────────────────────────────────────────────────────
# All text in the workbook; index = position in list
S = [
    # 0-5: T1 表头
    "T1", "靠谱度体检报告", "方案靠谱化工作坊", "小组：", "日期：", "版本：V",
    # 6-13: T1 A区
    "A区 假设清单", "编号", "关键假设（可判真伪的陈述句）", "重要性1-5",
    "确定性1-5", "象限", "验证动作（仅命门区必填：做什么+问谁/看什么+完成日）",
    "验证负责人（人名）",
    # 14-23: H1-H10
    "H1","H2","H3","H4","H5","H6","H7","H8","H9","H10",
    # 24-27: 象限
    "命门区", "基石区", "观察区", "背景区",
    # 28-41: T1 B/C/D区 + 说明
    "B区 外部视角记录",
    "同类项目参照（项目/来源，可用AI提示词卡P1检索）",
    "参照项目实际耗时与结果", "对本组估计的校准结论",
    "C区 因果链断点", "断点位置（如\"产出→成果\"）", "想当然的箭头是什么",
    "补上的传导机制",
    "D区 红队质询记录", "红队攻击点", "我方回应（接受并修改/已有应对/需回去核实）",
    "修改动作",
    "使用说明", "何时用", "怎么用", "常见三个错误",
    "象限判定：命门区=重要性≥4且确定性≤2；基石区=重要性≥4且确定性≥3；观察区=重要性≤3且确定性≤2；背景区=重要性≤3且确定性≥3",
    # 42: 五步加工线
    "五步加工线：验真→预演→诊断→分配→行为化",
    # ── T2 ─────────────────────────────────────────────────────────────────
    "T2", "触发式风险应对表",
    "A+B区 事前验尸风险清单与三维评估",
    "失败情景描述（过去式：\"因为……，项目死了/受重创\"）",
    "归类（人/资源/流程/外部/技术）", "概率1-5", "影响1-5", "可监测性1-5",
    "布防指数=概率×影响×(6-可监测性)",
    "R1","R2","R3","R4","R5","R6","R7","R8","R9",
    "C区 触发式预案（仅布防指数Top3）",
    "风险编号", "先兆信号X（可观测可量化；写明谁/什么系统盯着；能否AI自动监测）",
    "触发动作Y（立即做什么）", "责任人Z（人名）", "预案资源（需提前准备什么）",
    "D区 四策归类（其余风险）",
    "策略", "说明（\"接受\"必须写一句理由）",
    "规避（改方案绕开）", "转移（让更能承担方承担）", "减轻（降概率或降影响）", "接受（明确接受不再投入）",
    "可监测性打分：5=有明确数据信号可自动监控；3=有先兆但需人主动查看；1=毫无先兆突然发生。布防指数最高的前3条进入C区。",
    "何时用", "体检报告完成后，方案定稿前；每月复盘时重新评估一轮。",
    "怎么用", "1.每人静默5分钟独立书写\"一年后本方案彻底失败，它是怎么死的\"，用过去式；2.组内汇总去重，形成至少8条；3.逐条三维打分，算布防指数；4.Top3写触发式预案，信号必须落到\"谁盯着、看什么数字\"；5.其余风险归入四策；6.可自动监测的信号，用AI提示词卡P3设计监测方式。",
    "常见三个错误", "1.风险写成担忧——\"担心配合度不高\"不合格，\"三月排产高峰期，车间以生产优先为由推迟数据填报超两周\"合格；2.信号不可观测——\"士气下降\"不是信号，\"周报连续两周迟交\"才是信号；3.预案写\"届时视情况处理\"——等于没有预案，必须落到动作和人名。",
    # ── T3 ─────────────────────────────────────────────────────────────────
    "T3", "任务落地诊断表",
    "任务名称：", "执行者（人名）：", "任务在计划中的编号：",
    "六格诊断区（按固定顺序逐行诊断）",
    "六格", "诊断问句", "现状评分1-5", "缺口描述", "配套动作（评分≤3必填，编号如A-1）",
    "信息与反馈", "他清楚要做什么、标准是什么、能及时知道自己做得怎么样吗？",
    "资源与工具", "他有称手的工具、模板、时间和权限吗？",
    "激励与后果", "做好、做砸、不做，后果有差别吗？",
    "知识与技能", "他会做吗？",
    "能力与匹配", "这个人的禀赋适合这个任务吗？",
    "动机", "他内心想做吗？",
    "底部统计", "项目", "数值",
    "环境侧缺口数（前四格评分≤3的格数）",
    "个体侧缺口数（后二格评分≤3的格数）",
    "本任务配套动作清单（编入《行动计划2.0》的动作编号）",
    "何时用", "对行动计划中的关键任务（至少3项）逐项诊断，尤其是\"要求他人改变行为\"的任务。",
    "怎么用", "1.锁定一项任务和它的具体执行者（人，不是部门）；2.从\"信息与反馈\"开始，按固定顺序逐格问诊断问句并打分；3.评分≤3的格写清缺口，并当场写配套动作；4.先动前三格（环境，便宜且快），动机永远最后动；5.统计环境侧与个体侧缺口数；6.配套动作全部编号，并入《行动计划2.0》。",
    "常见三个错误", "1.六格全打高分——说明没有诚实诊断，每张表至少要找出1个≤3分的格；2.缺口一律用培训解决——先检查前三格，环境格有缺口时禁止用\"培训\"作为配套动作；3.配套动作不进计划——诊断完落不到《行动计划2.0》等于白诊断。",
    # ── T4 ─────────────────────────────────────────────────────────────────
    "T4", "人机任务分配表",
    "分配区（行动计划中所有任务全量列出）",
    "任务",
    "一级：能否消除（能→划掉写理由）",
    "一级：AI接管四标准打钩（规则清晰/出错成本可承受/有数据可依/频次高）",
    "AI接管方式（≥3钩才填：用什么AI做什么+人如何抽检）",
    "二级：技控手段（默认值/强制功能/流程内嵌/自动反馈）+具体设计",
    "三级：人控归类（只允许：判断/关系/责任）",
    "改造后责任人（人名）",
    "技控检验句（每条技控设计必须通过）：换一个状态不好的普通人来做，还能不能做对？",
    "底部统计",
    "任务总数", "消除数", "AI接管数", "技控数", "人控数", "验收线：AI+技控合计",
    "≥5项 □达标",
    "何时用", "六格诊断完成后，对计划全部任务（含新增配套动作）做控制方式升级。",
    "怎么用", "1.全量列出任务，不挑选；2.逐行先问能否消除；3.不能消除的过AI四标准，≥3个钩标AI接管并写明方式与抽检人；4.再过技控四手段，写具体设计并过检验句；5.剩下的必须归入判断/关系/责任三类之一，归不进去的退回一、二级重来；6.每行写改造后责任人，AI接管项也必须有人负责抽检。",
    "常见三个错误", "1.高估AI——规则模糊、单次出错代价大的判断类任务标成AI接管（四标准逐一打钩可防）；2.低估AI——数据汇总、提醒、纪要、初稿类还留给人；3.人控区装满杂活——留在人控区的必须能归入判断/关系/责任，归不进去就是偷懒。",
    # ── T5 ─────────────────────────────────────────────────────────────────
    "T5", "行动计划2.0",
    "课题：",
    "五张表完成勾选：□表1靠谱度体检报告 □表2触发式风险应对表 □表3任务落地诊断表（≥3张） □表4人机任务分配表 □本汇总页",
    "汇总页（路演即照此讲）",
    "板块", "内容", "来源",
    "最疼的命门假设与验证动作（1条）",
    "最大风险的触发式预案（1条，X→Y→Z格式）",
    "最重要的环境补丁（1条配套动作）",
    "交给AI/技控的任务（≥5项清单）",
    "关键If-Then行为（≥3条）",
    "If-Then合格标准：情境X具体到时间或事件触发点；动作Y是两分钟内可启动的具体动作；句式\"当……，我就……\"。对照示例：✕\"本月多拜访关键客户\" → ✓\"每周一晨会结束，当场给A客户发本周拜访邀约\"。",
    "升级后任务总表",
    "负责人", "完成标准", "时限", "控制方式（AI/技控/人控）", "关联风险预案编号",
    "何时用", "五个工位全部完成后整合；课后21天转化期作为唯一的对照基准文件。",
    "怎么用", "1.勾选封面页确认前四张表完成；2.从各表摘取最关键一条填汇总页；3.把原任务、诊断出的配套动作、AI/技控改造合并为升级后任务总表；4.每项任务标注控制方式与关联风险预案；5.按汇总页完成3分钟路演；6.装订五张表，复盘会逐项检核。",
    "常见三个错误", "1.汇总页写成总结感想——每格必须是可执行的具体条目；2.任务总表照抄初稿——升级版必须体现配套动作与控制方式变化；3.没有关联风险编号——任务与预案脱钩，复盘时无从追踪。",
    # ── 使用说明总览 ───────────────────────────────────────────────────────
    "使用说明总览",
    "表名", "课程简称", "组名", "日期", "版本",
    "五步加工线：验真→预演→诊断→分配→行为化",
    "验真", "预演", "诊断", "分配", "行为化",
    "对应工具", "T1 靠谱度体检报告", "T2 触发式风险应对表", "T3 任务落地诊断表", "T4 人机任务分配表", "T5 行动计划2.0",
    "核心问题", "方案的前提假设成立吗？", "方案最大的死法是什么？", "关键任务能落地吗？", "人与AI各自的分工最优吗？", "计划能否转化为行为？",
    "何时用", "方案初稿决策通过后、投入执行资源之前", "体检报告完成后，方案定稿前；每月复盘", "对行动计划中的关键任务（至少3项）逐项诊断", "六格诊断完成后，对全部任务做控制方式升级", "五个工位全部完成后整合；课后21天作为对照基准",
    "输出", "命门假设+验证动作+因果链断点", "触发式预案（X→Y→Z）+四策归类", "六格评分+环境/个体侧缺口+配套动作", "任务分配表（消除/AI/技控/人控）", "升级后任务总表+汇总页路演",
    "一图读懂", "A区假设清单→B区外部校准→C区因果链→D区红队",
    "T2：A+B区风险清单（三维评估）→C区Top3触发式预案→D区四策",
    "T3：锁定任务+执行者→六格逐行诊断→缺口→配套动作",
    "T4：全量任务→消除→AI接管四标准→技控四手段→人控三类",
    "T5：封面勾选→汇总页→升级后任务总表",
    "表1背面：使用说明", "表2背面：使用说明", "表3背面：使用说明", "表4背面：使用说明", "表5背面：使用说明",
    "数据验证", "评分列：1-5整数", "数据验证", "数据验证", "数据验证", "数据验证",
    "布防指数=概率×影响×(6-可监测性)", "环境/个体侧缺口自动计数", "底部统计行自动汇总", "",
    # ── 示范数据 ───────────────────────────────────────────────────────────
    "示范数据（星辉案例）",
    "以下为星辉项目完整填写示例，供一键查看参考",
    "星辉项目简介", "星辉公司数字化转型项目，周期6个月，预算200万，跨5个部门",
    "T1 靠谱度体检报告 — 填写示例",
    "命门假设示例", "IT部能在6周内排上开发资源（重要性5，确定性1）",
    "因果链断点示例", "产出（系统上线）→ 成果（业务价值）：缺少\"用户真正使用\"的传导机制",
    "T2 触发式风险应对表 — 填写示例",
    "风险示例", "三月排产高峰期，车间以生产优先为由推迟数据填报超两周",
    "T3 任务落地诊断表 — 填写示例",
    "任务示例", "完成系统上线 → 信息与反馈评分3分 → 缺口：没有上线培训 → 配套动作A-1",
    "T4 人机任务分配表 — 填写示例",
    "AI接管示例", "数据汇总类任务 → AI接管 → 用GPT-4做周报汇总，人工抽检",
    "T5 行动计划2.0 — 填写示例",
]

def si(i): return f'<is><t>{escape(S[i])}</t></is>'

def si_cell(addr, idx, s=None):
    a = f' r="{addr}"'
    if s is not None: a += f' s="{s}"'
    return f'<c{a}><is><t>{escape(S[idx])}</t></is></c>'

# ── styles.xml ───────────────────────────────────────────────────────────────
STYLES = """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <numFmts count="5">
    <numFmt numFmtId="164" formatCode="$#,##0;($#,##0);&quot;-&quot;"/>
    <numFmt numFmtId="165" formatCode="0.0%"/>
    <numFmt numFmtId="166" formatCode="0.0x"/>
    <numFmt numFmtId="167" formatCode="#,##0"/>
    <numFmt numFmtId="168" formatCode="0"/>
  </numFmts>
  <fonts count="6">
    <font><sz val="11"/><name val="Calibri"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="000000FF"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="00000000"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="00008000"/></font>
    <font><sz val="11"/><name val="Calibri"/><b/></font>
    <font><sz val="11"/><name val="Calibri"/><b/><color rgb="00000000"/></font>
  </fonts>
  <fills count="4">
    <fill><patternFill patternType="none"/></fill>
    <fill><patternFill patternType="gray125"/></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="00D9E8F5"/><bgColor indexed="64"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="00FFBF00"/><bgColor indexed="64"/></patternFill></fill>
  </fills>
  <borders count="2">
    <border><left/><right/><top/><bottom/><diagonal/></border>
    <border><left style="thin"/><right style="thin"/><top style="thin"/><bottom style="thin"/><diagonal/></border>
  </borders>
  <cellXfs count="14">
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
    <xf numFmtId="0" fontId="2" fillId="3" borderId="0" xfId="0" applyFont="1" applyFill="1"/>
  </cellXfs>
  <dxfs count="1">
    <dxf>
      <fill>
        <patternFill patternType="solid">
          <fgColor rgb="00FFBF00"/>
        </patternFill>
      </fill>
    </dxf>
  </dxfs>
</styleSheet>"""

# ── sheet builders ────────────────────────────────────────────────────────────
HDR_COLS_A = {1:8, 2:35, 3:8, 4:8, 5:10, 6:30, 7:12}
HDR_COLS_BC = {1:30, 2:30, 3:12, 4:12, 5:14, 6:14, 7:14}

def hdr_row(r, title_si, title_s, subtitle_si, subtitle_s, extra_cells=""):
    """Standard table header row 1 and 2."""
    t1 = si_cell(f"A{r}", title_si, title_s)
    t2 = si_cell(f"B{r}", title_si, title_s)
    t3 = si_cell(f"C{r}", subtitle_si, subtitle_s)
    t4 = si_cell(f"D{r}", subtitle_si, subtitle_s)
    t5 = si_cell(f"E{r}", subtitle_si, subtitle_s)
    t6 = si_cell(f"F{r}", subtitle_si, subtitle_s)
    return rc(r, t1 + t2 + t3 + t4 + t5 + t6 + extra_cells, ht=20)

def hdr_row2(r, t1_si, t2_si, t3_si, t4_si, t5_si, t6_si, s=S_HDR):
    def h(addr, idx): return si_cell(addr, idx, s)
    return rc(r, h("A",t1_si)+h("B",t2_si)+h("C",t3_si)+h("D",t4_si)+h("E",t5_si)+h("F",t6_si), ht=18)

def col_headers(r, si_list, cols):
    """One row of column headers."""
    cells = "".join(si_cell(f"{cols[i]}{r}", si_list[i], S_HDR) for i in range(len(si_list)))
    return rc(r, cells, ht=16)

def empty_row(r, ncols=7):
    """Empty fill row for input."""
    cells = "".join(sc(f"{chr(64+i)}{r}", "", S_INP_GEN) for i in range(1, ncols+1))
    return rc(r, cells, ht=15)

def sheet_header():
    return """  <sheetViews>
    <sheetView workbookViewId="0">
      <pane ySplit="4" topLeftCell="A5" activePane="bottomLeft" state="frozen"/>
    </sheetView>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25"
    xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>"""

def data_validations_1_to_5(sqref):
    return f"""  <dataValidations>
    <dataValidation type="whole" operator="between" formula1="1" formula2="5" sqref="{sqref}">
      <formula1>1</formula1>
      <formula2>5</formula2>
    </dataValidation>
  </dataValidations>"""

def page_margins():
    return """  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>"""

def wrap_sheet(cols_dict, rows_xml, extra=""):
    return f"""<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
{sheet_header()}
  <cols>
{col_w(cols_dict)}
  </cols>
  <sheetData>
{rows_xml}
  </sheetData>
{extra}
{page_margins()}
</worksheet>"""

def instr_block(r, items):
    """Usage instruction block: (label_si, content_si) pairs."""
    rows = []
    rows.append(rc(r, si_cell("A", 54, S_HDR), ht=16))  # 使用说明
    r += 1
    for label_si, content_si in items:
        rows.append(rc(r, si_cell("A", label_si, S_INP_GEN) +
                          si_cell(f"B{r}", content_si, S_INP_GEN), ht=30))
        r += 1
    return "\n".join(rows), r


# ═══════════════════════════════════════════════════════════════════════════════
# SHEET 1 — 靠谱度体检报告
# ═══════════════════════════════════════════════════════════════════════════════
def build_T1():
    rows = []
    r = 1

    # Row 1: 表头 (merged visual, table name + course + group + date + version)
    rows.append(hdr_row(r, 1, S_HDR, 3, S_INP_GEN)); r += 1
    rows.append(hdr_row2(r, 0, 1, 2, 3, 4, 5)); r += 1

    # A区 假设清单
    rows.append(rc(r, si_cell("A", 6, S_HDR))); r += 1
    rows.append(col_headers(r, [7,8,9,10,11,12,13], list("ABCDEFG"))); r += 1

    # 10 hypothesis rows H1-H10
    for i in range(10):
        h_si = 14 + i  # H1=H14, H10=H23
        cells = (
            si_cell(f"A{r}", h_si, S_INP_GEN) +
            sc(f"B{r}", "", S_INP_GEN) +
            nc(f"C{r}", "", S_INP_INT) +
            nc(f"D{r}", "", S_INP_INT) +
            sc(f"E{r}", "", S_INP_GEN) +
            sc(f"F{r}", "", S_INP_GEN) +
            sc(f"G{r}", "", S_INP_GEN)
        )
        rows.append(rc(r, cells, ht=15)); r += 1

    # 象限判定说明行
    rows.append(rc(r, si_cell("A", 24, S_HDR)+si_cell("B", 25, S_HDR)+
                      si_cell("C", 26, S_HDR)+si_cell("D", 27, S_HDR))); r += 1
    rows.append(rc(r, si_cell("A", 38, S_INP_GEN))); r += 1
    r += 1

    # B区 外部视角记录
    rows.append(rc(r, si_cell("A", 28, S_HDR))); r += 1
    for label_si in [29, 30, 31]:
        rows.append(rc(r, si_cell("A", label_si, S_INP_GEN) + sc(f"B{r}", "", S_INP_GEN), ht=15)); r += 1
    r += 1

    # C区 因果链断点
    rows.append(rc(r, si_cell("A", 32, S_HDR))); r += 1
    rows.append(col_headers(r, [33, 34, 35], list("ABC"))); r += 1
    for _ in range(2):
        rows.append(rc(r, sc("A","",S_INP_GEN)+sc("B","",S_INP_GEN)+sc("C","",S_INP_GEN), ht=15)); r += 1
    r += 1

    # D区 红队质询记录
    rows.append(rc(r, si_cell("A", 36, S_HDR))); r += 1
    rows.append(col_headers(r, [37, 38, 39], list("ABC"))); r += 1
    for _ in range(3):
        rows.append(rc(r, sc("A","",S_INP_GEN)+sc("B","",S_INP_GEN)+sc("C","",S_INP_GEN), ht=15)); r += 1
    r += 1

    # 使用说明 (背面的内容放在表末尾)
    instr, r = instr_block(r, [
        (55, 56),  # 何时用
        (57, 57),  # 怎么用
        (59, 59),  # 常见三个错误
        (38, 39),  # 象限判定
    ])

    rows_xml = "\n".join(rows)
    # Conditional formatting for 命门区 (E col): importance>=4 AND certainty<=2
    # Hypothesis rows are 7-16 (10 rows)
    cf = """  <conditionalFormatting sqref="E7:E16">
    <cfRule type="expression" dxfId="0" priority="1">
      <formula>AND(C7&gt;=4,D7&lt;=2)</formula>
    </cfRule>
  </conditionalFormatting>"""
    return wrap_sheet(HDR_COLS_A, rows_xml, cf)


# ═══════════════════════════════════════════════════════════════════════════════
# SHEET 2 — 触发式风险应对表
# ═══════════════════════════════════════════════════════════════════════════════
def build_T2():
    rows = []
    r = 1

    rows.append(hdr_row(r, 43, S_HDR, 3, S_INP_GEN)); r += 1
    rows.append(hdr_row2(r, 42, 43, 2, 3, 4, 5)); r += 1

    # A+B区 风险清单
    rows.append(rc(r, si_cell("A", 44, S_HDR))); r += 1
    rows.append(col_headers(r, [45,46,47,48,49,50], list("ABCDEF"))); r += 1

    # 9 risk rows R1-R9; G = 布防指数 formula
    for i in range(9):
        r_si = 51 + i  # R1=R51 ... R9=R59
        cells = (
            si_cell(f"A{r}", r_si, S_INP_GEN) +
            sc(f"B{r}", "", S_INP_GEN) +
            sc(f"C{r}", "", S_INP_GEN) +
            nc(f"D{r}", "", S_INP_INT) +
            nc(f"E{r}", "", S_INP_INT) +
            nc(f"F{r}", "", S_INP_INT) +
            nc(f"G{r}", "", S_FRM_INT, formula=f"D{r}*E{r}*(6-F{r})")
        )
        rows.append(rc(r, cells, ht=15)); r += 1

    # 可监测性说明
    rows.append(rc(r, si_cell("A", 73, S_INP_GEN))); r += 1
    r += 1

    # C区 触发式预案
    rows.append(rc(r, si_cell("A", 60, S_HDR))); r += 1
    rows.append(col_headers(r, [61,62,63,64,65], list("ABCDE"))); r += 1
    for _ in range(3):
        rows.append(rc(r, sc("A","",S_INP_GEN)+sc("B","",S_INP_GEN)+sc("C","",S_INP_GEN)+
                          sc("D","",S_INP_GEN)+sc("E","",S_INP_GEN), ht=15)); r += 1
    r += 1

    # D区 四策归类
    rows.append(rc(r, si_cell("A", 66, S_HDR))); r += 1
    rows.append(col_headers(r, [67,45,68], list("ABC"))); r += 1
    for s_si in [69, 70, 71, 72]:
        rows.append(rc(r, si_cell("A", s_si, S_INP_GEN) +
                          sc(f"B{r}", "", S_INP_GEN) + sc(f"C{r}", "", S_INP_GEN), ht=15)); r += 1
    r += 1

    # 使用说明
    instr_rows, r = instr_block(r, [
        (55, 74),  # 何时用
        (57, 75),  # 怎么用
        (59, 76),  # 常见三个错误
    ])

    rows_xml = "\n".join(rows)
    dv = data_validations_1_to_5("D7:F15")
    return wrap_sheet({1:6, 2:35, 3:10, 4:6, 5:6, 6:6, 7:14}, rows_xml, dv)


# ═══════════════════════════════════════════════════════════════════════════════
# SHEET 3 — 任务落地诊断表
# ═══════════════════════════════════════════════════════════════════════════════
def build_T3():
    rows = []
    r = 1

    rows.append(hdr_row(r, 77, S_HDR, 3, S_INP_GEN)); r += 1
    rows.append(hdr_row2(r, 78, 79, 80, 81, 82, 5)); r += 1

    # 六格诊断区
    rows.append(rc(r, si_cell("A", 83, S_HDR))); r += 1
    rows.append(col_headers(r, [84,85,86,87,88], list("ABCDE"))); r += 1

    grids = [
        (89, 90), (91, 92), (93, 94), (95, 96), (97, 98), (99, 100)
    ]
    for gname_si, gq_si in grids:
        cells = (
            si_cell(f"A{r}", gname_si, S_INP_GEN) +
            si_cell(f"B{r}", gq_si, S_INP_GEN) +
            nc(f"C{r}", "", S_INP_INT) +
            sc(f"D{r}", "", S_INP_GEN) +
            sc(f"E{r}", "", S_INP_GEN)
        )
        rows.append(rc(r, cells, ht=18)); r += 1

    # 底部统计
    rows.append(rc(r, si_cell("A", 101, S_HDR))); r += 1
    # 环境侧缺口数（前四格 C7:C10）
    rows.append(rc(r, si_cell("A", 104, S_INP_GEN) +
                      nc(f"B{r}", "", S_FRM_GEN, formula=f'COUNTIF(C7:C10,"&lt;=3")'), ht=15)); r += 1
    # 个体侧缺口数（后二格 C11:C12）
    rows.append(rc(r, si_cell("A", 105, S_INP_GEN) +
                      nc(f"B{r}", "", S_FRM_GEN, formula=f'COUNTIF(C11:C12,"&lt;=3")'), ht=15)); r += 1
    # 配套动作清单
    rows.append(rc(r, si_cell("A", 106, S_INP_GEN) + sc(f"B{r}", "", S_INP_GEN), ht=15)); r += 1
    r += 1

    # 使用说明
    instr_rows, r = instr_block(r, [
        (55, 107),
        (57, 108),
        (59, 109),
    ])

    rows_xml = "\n".join(rows)
    dv = data_validations_1_to_5("C7:C12")
    return wrap_sheet({1:14, 2:40, 3:8, 4:25, 5:20}, rows_xml, dv)


# ═══════════════════════════════════════════════════════════════════════════════
# SHEET 4 — 人机任务分配表
# ═══════════════════════════════════════════════════════════════════════════════
def build_T4():
    rows = []
    r = 1

    rows.append(hdr_row(r, 110, S_HDR, 3, S_INP_GEN)); r += 1
    rows.append(hdr_row2(r, 109, 110, 2, 3, 4, 5)); r += 1

    # 分配区
    rows.append(rc(r, si_cell("A", 111, S_HDR))); r += 1
    rows.append(col_headers(r, [112,113,114,115,116,117,118], list("ABCDEFG"))); r += 1

    task_start = r
    for _ in range(12):
        cells = (
            sc(f"A{r}", "", S_INP_GEN) + sc(f"B{r}", "", S_INP_GEN) +
            sc(f"C{r}", "", S_INP_GEN) + sc(f"D{r}", "", S_INP_GEN) +
            sc(f"E{r}", "", S_INP_GEN) + sc(f"F{r}", "", S_INP_GEN) +
            sc(f"G{r}", "", S_INP_GEN)
        )
        rows.append(rc(r, cells, ht=15)); r += 1
    task_end = r - 1

    # 技控检验句
    rows.append(rc(r, si_cell("A", 119, S_HDR) + si_cell("B", 120, S_INP_GEN))); r += 1
    r += 1

    # 底部统计
    rows.append(rc(r, si_cell("A", 121, S_HDR))); r += 1
    rows.append(col_headers(r, [122,123,124,125,126,127], list("ABCDEF"))); r += 1
    stat_formulas = [
        f"COUNTA(A{task_start}:A{task_end})",
        f'COUNTIF(B{task_start}:B{task_end},"能")',
        f'COUNTIF(D{task_start}:D{task_end},"AI")',
        f'COUNTIF(E{task_start}:E{task_end},"技控")',
        f'COUNTIF(F{task_start}:F{task_end},"人控")',
        f'COUNTIF(D{task_start}:D{task_end},"AI")+COUNTIF(E{task_start}:E{task_end},"技控")',
    ]
    stat_cells = "".join(nc(f"{c}{r}", "", S_FRM_INT, formula=stat_formulas[i])
                          for i, c in enumerate("ABCDEF"))
    rows.append(rc(r, stat_cells, ht=16)); r += 1

    rows.append(rc(r, si_cell("F", 128, S_HDR) + si_cell("G", 128, S_HDR))); r += 1
    r += 1

    # 使用说明
    instr_rows, r = instr_block(r, [
        (55, 129),
        (57, 130),
        (59, 131),
    ])

    rows_xml = "\n".join(rows)
    return wrap_sheet({1:6, 2:30, 3:14, 4:25, 5:25, 6:12, 7:14}, rows_xml)


# ═══════════════════════════════════════════════════════════════════════════════
# SHEET 5 — 行动计划2.0
# ═══════════════════════════════════════════════════════════════════════════════
def build_T5():
    rows = []
    r = 1

    # 封面页
    rows.append(hdr_row(r, 132, S_HDR, 3, S_INP_GEN,
                        si_cell(f"G{r}", 4, S_INP_GEN) + si_cell(f"H{r}", 5, S_INP_GEN))); r += 1
    rows.append(hdr_row2(r, 133, 132, 2, 3, 154, 4, 5)); r += 1

    # 五张表勾选行
    rows.append(rc(r, si_cell("A", 133, S_INP_GEN) + si_cell(f"B{r}", 134, S_INP_GEN), ht=15)); r += 1
    r += 1

    # 汇总页
    rows.append(rc(r, si_cell("A", 135, S_HDR))); r += 1
    rows.append(col_headers(r, [136,137,138], list("ABC"))); r += 1

    summary_items = [
        (139, 1),   # 最疼的命门假设 → T1
        (140, 43),  # 最大风险 → T2
        (141, 78),  # 最重要的环境补丁 → T3
        (142, 110), # 交给AI/技控的任务 → T4
        (143, 146), # 关键If-Then → T5
    ]
    for item_si, src_si in summary_items:
        rows.append(rc(r, si_cell("A", item_si, S_INP_GEN) +
                          sc(f"B{r}", "", S_INP_GEN) + si_cell(f"C{r}", src_si, S_INP_GEN), ht=18)); r += 1

    # If-Then合格标准
    rows.append(rc(r, si_cell("A", 144, S_HDR))); r += 1
    r += 1

    # 升级后任务总表
    rows.append(rc(r, si_cell("A", 145, S_HDR))); r += 1
    rows.append(col_headers(r, [112, 147, 148, 149, 150, 151], list("ABCDEF"))); r += 1
    for _ in range(12):
        cells = (
            sc(f"A{r}", "", S_INP_GEN) + sc(f"B{r}", "", S_INP_GEN) +
            sc(f"C{r}", "", S_INP_GEN) + sc(f"D{r}", "", S_INP_GEN) +
            sc(f"E{r}", "", S_INP_GEN) + sc(f"F{r}", "", S_INP_GEN)
        )
        rows.append(rc(r, cells, ht=15)); r += 1
    r += 1

    # 使用说明
    instr_rows, r = instr_block(r, [
        (55, 152),
        (57, 153),
        (59, 154),
    ])

    rows_xml = "\n".join(rows)
    return wrap_sheet({1:30, 2:30, 3:12, 4:12, 5:14, 6:14, 7:14, 8:10}, rows_xml)


# ═══════════════════════════════════════════════════════════════════════════════
# SHEET 6 — 使用说明总览
# ═══════════════════════════════════════════════════════════════════════════════
def build_overview():
    rows = []
    r = 1

    # Title
    rows.append(rc(r, si_cell("A", 155, S_HDR) + si_cell("B", 155, S_HDR) +
                      si_cell("C", 155, S_HDR) + si_cell("D", 155, S_HDR) +
                      si_cell("E", 155, S_HDR), ht=24)); r += 1
    rows.append(rc(r, si_cell("A", 156, S_HDR) + si_cell("B", 157, S_HDR) +
                      si_cell("C", 158, S_HDR) + si_cell("D", 159, S_HDR) +
                      si_cell("E", 160, S_HDR), ht=18)); r += 1

    # 五步加工线 header
    steps = [161, 162, 163, 164, 165]
    step_tools = [166, 167, 168, 169, 170]
    step_questions = [171, 172, 173, 174, 175]
    step_when = [176, 177, 178, 179, 180]
    step_output = [181, 182, 183, 184, 185]

    cols = list("ABCDE")
    rows.append(rc(r, "".join(si_cell(f"{c}{r}", steps[i], S_HDR) for i,c in enumerate(cols)), ht=18)); r += 1
    rows.append(rc(r, "".join(si_cell(f"{c}{r}", step_tools[i], S_INP_GEN) for i,c in enumerate(cols)), ht=18)); r += 1
    rows.append(rc(r, "".join(si_cell(f"{c}{r}", step_questions[i], S_INP_GEN) for i,c in enumerate(cols)), ht=22)); r += 1
    rows.append(rc(r, "".join(si_cell(f"{c}{r}", step_when[i], S_INP_GEN) for i,c in enumerate(cols)), ht=30)); r += 1
    rows.append(rc(r, "".join(si_cell(f"{c}{r}", step_output[i], S_INP_GEN) for i,c in enumerate(cols)), ht=22)); r += 1
    r += 1

    # 一图读懂
    rows.append(rc(r, si_cell("A", 186, S_HDR))); r += 1
    for item_si in [187, 188, 189, 190, 191]:
        rows.append(rc(r, si_cell("A", item_si, S_INP_GEN), ht=18)); r += 1
    r += 1

    # 表背面使用说明索引
    rows.append(rc(r, si_cell("A", 192, S_HDR))); r += 1
    for b_si in [193, 194, 195, 196, 197]:
        rows.append(rc(r, si_cell("A", b_si, S_INP_GEN), ht=18)); r += 1
    r += 1

    # 特殊功能说明
    rows.append(rc(r, si_cell("A", 198, S_HDR))); r += 1
    for f_si in [199, 200, 201, 202]:
        rows.append(rc(r, si_cell("A", f_si, S_INP_GEN), ht=18)); r += 1

    rows_xml = "\n".join(rows)
    return wrap_sheet({1:35, 2:35, 3:35, 4:35, 5:35}, rows_xml)


# ═══════════════════════════════════════════════════════════════════════════════
# SHEET 7 — 示范数据（隐藏）
# ═══════════════════════════════════════════════════════════════════════════════
def build_demo():
    rows = []
    r = 1

    rows.append(rc(r, si_cell("A", 203, S_HDR) + si_cell("B", 204, S_HDR), ht=20)); r += 2

    rows.append(rc(r, si_cell("A", 205, S_HDR) + si_cell("B", 206, S_INP_GEN), ht=16)); r += 2

    rows.append(rc(r, si_cell("A", 207, S_HDR), ht=18)); r += 1
    rows.append(rc(r, si_cell("A", 209, S_INP_GEN) + si_cell("B", 210, S_INP_GEN), ht=16)); r += 1
    rows.append(rc(r, si_cell("A", 211, S_INP_GEN) + si_cell("B", 212, S_INP_GEN), ht=16)); r += 1
    rows.append(rc(r, si_cell("A", 213, S_INP_GEN) + si_cell("B", 214, S_INP_GEN), ht=16)); r += 2

    rows.append(rc(r, si_cell("A", 208, S_HDR), ht=18)); r += 1
    rows.append(rc(r, si_cell("A", 215, S_INP_GEN), ht=16)); r += 2

    rows.append(rc(r, si_cell("A", 216, S_HDR), ht=18)); r += 1
    rows.append(rc(r, si_cell("A", 217, S_INP_GEN) + si_cell("B", 218, S_INP_GEN), ht=16)); r += 2

    rows.append(rc(r, si_cell("A", 219, S_HDR), ht=18)); r += 1
    rows.append(rc(r, si_cell("A", 220, S_INP_GEN), ht=16)); r += 2

    rows.append(rc(r, si_cell("A", 221, S_HDR), ht=18)); r += 1

    rows_xml = "\n".join(rows)
    return wrap_sheet({1:40, 2:40}, rows_xml)


# ═══════════════════════════════════════════════════════════════════════════════
# MAIN — assemble all files
# ═══════════════════════════════════════════════════════════════════════════════
def main():
    # Copy template
    if os.path.exists(WORK):
        shutil.rmtree(WORK)
    shutil.copytree(TMPL, WORK)

    # sharedStrings.xml
    ss_lines = [f'<?xml version="1.0" encoding="UTF-8" standalone="yes"?>',
                f'<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="{len(S)}" uniqueCount="{len(S)}">']
    for s in S:
        ss_lines.append(f'  <si><t>{escape(s)}</t></si>')
    ss_lines.append('</sst>')
    with open(f"{WORK}/xl/sharedStrings.xml", "w", encoding="utf-8") as f:
        f.write('\n'.join(ss_lines))

    # styles.xml
    with open(f"{WORK}/xl/styles.xml", "w", encoding="utf-8") as f:
        f.write(STYLES)

    # workbook.xml — 7 sheets (rId1 + rId4-rId9)
    wb_xml = """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <fileVersion appName="xl" lastEdited="7" lowestEdited="7"/>
  <workbookPr defaultThemeVersion="166925"/>
  <bookViews>
    <workbookView xWindow="0" yWindow="0" windowWidth="20140" windowHeight="10960"/>
  </bookViews>
  <sheets>
    <sheet name="T1-靠谱度体检报告" sheetId="1" r:id="rId1"/>
    <sheet name="T2-触发式风险应对表" sheetId="2" r:id="rId4"/>
    <sheet name="T3-任务落地诊断表" sheetId="3" r:id="rId5"/>
    <sheet name="T4-人机任务分配表" sheetId="4" r:id="rId6"/>
    <sheet name="T5-行动计划2.0" sheetId="5" r:id="rId7"/>
    <sheet name="使用说明总览" sheetId="6" r:id="rId8"/>
    <sheet name="示范数据" sheetId="7" r:id="rId9" state="hidden"/>
  </sheets>
  <calcPr calcId="191029"/>
</workbook>"""
    with open(f"{WORK}/xl/workbook.xml", "w", encoding="utf-8") as f:
        f.write(wb_xml)

    # workbook.xml.rels — rId4-rId9
    wb_rels = """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
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
</Relationships>"""
    with open(f"{WORK}/xl/_rels/workbook.xml.rels", "w", encoding="utf-8") as f:
        f.write(wb_rels)

    # [Content_Types].xml
    ct_xml = """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
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
</Types>"""
    with open(f"{WORK}/[Content_Types].xml", "w", encoding="utf-8") as f:
        f.write(ct_xml)

    # Build all sheets
    sheets_content = [
        build_T1(),
        build_T2(),
        build_T3(),
        build_T4(),
        build_T5(),
        build_overview(),
        build_demo(),
    ]

    for i, content in enumerate(sheets_content, 1):
        path = f"{WORK}/xl/worksheets/sheet{i}.xml"
        with open(path, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"  Written sheet{i}.xml ({len(content)} bytes)")

    # Pack
    os.makedirs(os.path.dirname(OUT), exist_ok=True)
    result = subprocess.run(
        ["python3", f"{SCRIPTS}/xlsx_pack.py", WORK, OUT],
        capture_output=True, text=True
    )
    if result.returncode != 0:
        print("PACK FAILED:", result.stderr)
        return
    print(f"\nPacked → {OUT}")

    # Validate
    result = subprocess.run(
        ["python3", f"{SCRIPTS}/formula_check.py", OUT],
        capture_output=True, text=True
    )
    out = result.stdout.strip() or result.stderr.strip()
    print("VALIDATION:", out)
    print("PASS done" if result.returncode == 0 else f"WARN exit {result.returncode}")

if __name__ == "__main__":
    main()
