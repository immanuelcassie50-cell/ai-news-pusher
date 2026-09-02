# -*- coding: utf-8 -*-
"""Build 04_缺口判断决策树_Excel版.xlsx — F9 决策树的 Excel 化版本
- 4 个工作表：使用说明 / 决策树四步判定 / 5个完整场景示例 / 缺口类型与发展路径速查
"""
import sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).parent))
from _helpers import (setup_work, write_styles, write_empty_sharedstrings,
                       write_workbook, write_content_types, write_sheet, pack,
                       LQ, RQ, make_row)

OUT = Path(r"D:/2026年课程/竞越/绩效管理和绩效面谈：通过绩效面谈让员工更加胜任/完整课程包/13_配套Excel表单/04_缺口判断决策树_Excel版.xlsx")
WORK = Path(r"D:/CC/temp/excel_build/work_04")

work = setup_work(WORK)
write_styles(work)
write_empty_sharedstrings(work)

# 公共：列宽
COLS_2COLS = '<cols><col min="1" max="1" width="22" customWidth="1"/><col min="2" max="2" width="80" customWidth="1"/></cols>'
COLS_4COLS = '<cols><col min="1" max="1" width="6" customWidth="1"/><col min="2" max="2" width="22" customWidth="1"/><col min="3" max="3" width="42" customWidth="1"/><col min="4" max="4" width="42" customWidth="1"/></cols>'
COLS_5COLS = '<cols><col min="1" max="1" width="6" customWidth="1"/><col min="2" max="2" width="18" customWidth="1"/><col min="3" max="3" width="22" customWidth="1"/><col min="4" max="4" width="32" customWidth="1"/><col min="5" max="5" width="32" customWidth="1"/></cols>'

# ============================================================
# Sheet 1: 使用说明
# ============================================================
def build_sheet1():
    rows = []
    # 标题
    rows.append(make_row(1, [
        ('A', 24, 'F9 缺口判断决策树 · Excel 化版本 — 使用说明'),
    ], height=32))
    rows.append(make_row(2, [
        ('A', 2, '本工具是 F9 决策树的 Excel 配套表单：管理者在面谈中走完四步后，把判定结果填入本表——形成可追溯、可复用的发展依据。'),
    ], height=22))
    # 留空
    rows.append(make_row(3, [('A', 0, None)]))

    rows.append(make_row(4, [('A', 5, '一、四个工作表的功能')]))
    rows.append(make_row(5, [
        ('A', 0, '工作表'),
        ('B', 0, '功能'),
    ]))
    rows.append(make_row(6, [
        ('A', 13, '使用说明（本表）'),
        ('B', 13, '告诉你这份文件怎么用、四步怎么走'),
    ]))
    rows.append(make_row(7, [
        ('A', 13, '决策树四步判定'),
        ('B', 13, '核心工作表：每行填一个员工的判定结果，公式自动给出推荐启动问题'),
    ]))
    rows.append(make_row(8, [
        ('A', 13, '5个完整场景示例'),
        ('B', 13, 'F9 原文的 5 个案例完整填写，演示"判定→启动问题"的转化'),
    ]))
    rows.append(make_row(9, [
        ('A', 13, '缺口类型与发展路径速查'),
        ('B', 13, '纯查询表：按"缺口类型+轨道"快速找"发展路径+启动问题"'),
    ]))
    rows.append(make_row(10, [('A', 0, None)]))

    rows.append(make_row(11, [('A', 5, '二、四步走的核心逻辑（与 F9 原文一致）')]))
    rows.append(make_row(12, [
        ('A', 0, '步骤'),
        ('B', 0, '核心问题'),
        ('C', 0, '本表中的填写方式'),
    ]))
    rows.append(make_row(13, [
        ('A', 13, '第一步'),
        ('B', 13, f'员工{RQ}会不会做{RQ}这件事？'),
        ('C', 13, '从"技能/行为/认知/AI工具"中选 1 个（列 D 限定选项）'),
    ]))
    rows.append(make_row(14, [
        ('A', 13, '第二步'),
        ('B', 13, f'{LQ}AI 工具能补{RQ}还是{RQ}必须人发展{RQ}？'),
        ('C', 13, '选"AI可补/必须人发展/两者都有"（列 E 限定选项）'),
    ]))
    rows.append(make_row(15, [
        ('A', 13, '第三步'),
        ('B', 13, f'具体发展路径是什么？'),
        ('C', 13, '从下方速查表（学/练/带/反馈/实战/对齐）选 1 个（列 F）'),
    ]))
    rows.append(make_row(16, [
        ('A', 13, '第四步'),
        ('B', 13, '用 F7 哪个启动问题？'),
        ('C', 13, '公式根据前 3 步自动推荐（列 H）；可手动覆盖（列 I）'),
    ]))
    rows.append(make_row(17, [('A', 0, None)]))

    rows.append(make_row(18, [('A', 5, '三、判定选项说明（务必看一遍再开始填）')]))
    rows.append(make_row(19, [
        ('A', 4, '第一步 · 缺口类型（D列）'),
        ('C', 4, '说明'),
    ], height=22))
    rows.append(make_row(20, [
        ('A', 14, '技能'),
        ('C', 14, f'员工说{RQ}我不太会{RQ}；给他任务明显吃力、频繁问基础问题'),
    ]))
    rows.append(make_row(21, [
        ('A', 14, '行为'),
        ('C', 14, f'员工知道怎么做；被提醒后能做对；没提醒时就不做——一致性差'),
    ]))
    rows.append(make_row(22, [
        ('A', 14, '认知'),
        ('C', 14, f'员工理解的{RQ}好{RQ}和标准不一样；反复{RQ}做完了{RQ}但不符合预期'),
    ]))
    rows.append(make_row(23, [
        ('A', 14, 'AI工具'),
        ('C', 14, f'没用过/用得浅/用错/依赖但不会评估AI输出'),
    ]))
    rows.append(make_row(24, [('A', 0, None)]))

    rows.append(make_row(25, [
        ('A', 4, '第二步 · AI可补 vs 人发展（E列）'),
        ('C', 4, '说明'),
    ], height=22))
    rows.append(make_row(26, [
        ('A', 14, 'AI可补'),
        ('C', 14, f'AI做出来能直接用或略改能用；1-2周上手；不会降低判断标准'),
    ]))
    rows.append(make_row(27, [
        ('A', 14, '必须人发展'),
        ('C', 14, f'AI做不了关键判断；关于人和人的关系；专业领域深度'),
    ]))
    rows.append(make_row(28, [
        ('A', 14, '两者都有'),
        ('C', 14, f'有些部分AI能帮+有些部分必须人做；先发展更紧迫的轨'),
    ]))
    rows.append(make_row(29, [('A', 0, None)]))

    rows.append(make_row(30, [('A', 5, '四、使用流程（建议）')]))
    rows.append(make_row(31, [('A', 13, f'① 打开{LQ}决策树四步判定{RQ}表，从第 4 行开始填：员工姓名/事实/缺口类型/双轨分叉/发展路径')]))
    rows.append(make_row(32, [('A', 13, f'② 填完前 3 步后，列 H（自动推荐启动问题）会自动出现，列 I 是手动覆盖位')]))
    rows.append(make_row(33, [('A', 13, f'③ 列 J 是给员工的话术草稿；列 K 是 30 天后回看位')]))
    rows.append(make_row(34, [('A', 13, f'④ 如需查"特定缺口+轨道"的最佳发展路径，翻{LQ}速查{RQ}表')]))
    rows.append(make_row(35, [('A', 13, f'⑤ 范例参考{LQ}5个完整场景示例{RQ}表')]))
    rows.append(make_row(36, [('A', 0, None)]))

    rows.append(make_row(37, [('A', 5, '五、本表配套使用')]))
    rows.append(make_row(38, [('A', 13, f'上接：F8（双轨状态判断）/ F5（事面原则）/ F6（场景识别）')]))
    rows.append(make_row(39, [('A', 13, f'下接：F7（启动问题）/ F10（结论纳入下次面谈清单）')]))
    rows.append(make_row(40, [('A', 13, f'配套：F3 四步面谈法——决策树用于 F3 的第三步"分析缺口"')]))

    return '\n'.join(rows)

# ============================================================
# Sheet 2: 决策树四步判定 — 核心交互表
# ============================================================
# 公式规则：
#   H列（推荐启动问题）：
#     如果 E = "AI可补"            → "F7 启动二"
#     如果 E = "必须人发展" + D = "认知" → "F7 启动一"
#     如果 E = "必须人发展" + D ≠ "认知" → "F7 启动三"（默认：判断/行为/AI工具走启动三，具体看关系）
#     如果 E = "两者都有"            → "F7 启动一+二"

def build_sheet2():
    rows = []
    rows.append(make_row(1, [('A', 24, 'F9 缺口判断决策树 — 四步判定工作表')], height=32))
    rows.append(make_row(2, [
        ('A', 2, '本表是核心工作表：每行填一个员工的判定结果。第 3 行是表头；第 4 行起为数据行（可向下复制）。'),
        ('B', 0, None), ('C', 0, None), ('D', 0, None), ('E', 0, None), ('F', 0, None),
        ('G', 0, None), ('H', 0, None), ('I', 0, None), ('J', 0, None), ('K', 0, None),
    ]))
    # 表头
    rows.append(make_row(3, [
        ('A', 14, '序号'),
        ('B', 14, '员工姓名'),
        ('C', 14, '事实/差距'),
        ('D', 14, '① 缺口类型'),
        ('E', 14, '② AI可补还是人发展'),
        ('F', 14, '③ 发展路径'),
        ('G', 14, '④ 紧迫度（高/中/低）'),
        ('H', 14, '推荐启动问题'),
        ('I', 14, '实际采用'),
        ('J', 14, '话术草稿'),
        ('K', 14, '30天回看'),
    ], height=36))

    # 数据行 — 范例
    examples = [
        ('小马', '智能推荐项目上线后DAU仅提升5%（目标15%）；知道测试结果不稳定但按原计划发布', '行为', '必须人发展', '实战+反馈', '高', '“在我最近的工作里，如果让你自己说，你最满意的判断是什么？下次打算把它做得更深还是更广？”'),
        ('王晓', '不会写汇报PPT，每次自己熬夜做', '技能', 'AI可补', '学+练', '中', '“在你用AI最多的那类工作里，你觉得自己做了什么？你希望把精力放在哪里？”'),
        ('张磊', '和客户沟通时过于技术化，客户关系不深', '认知', '必须人发展', '对齐+反馈', '高', '“这个周期你最满意的成长是什么？哪里还可以不一样？”'),
        ('刘洋', '用AI生成报告很快，但自己不会评估AI输出', 'AI工具', 'AI可补', '练', '高', '“在你用AI最多的工作里……你希望把精力放在更有深度的部分，是哪部分？”'),
        ('周琳', '数据整理用AI但业务判断需要更深', '技能', '两者都有', '先发展业务判断', '中', '“在你用AI最多的那类工作里……“（先用启动一稳一下，再用启动二展开双轨）'),
    ]

    for i, (name, fact, dt, dual, path, urg, dialog) in enumerate(examples, start=1):
        r = 3 + i
        # 自动推荐启动问题公式（H列）
        # IF E = "AI可补" → "F7 启动二"
        # IF E = "必须人发展" AND D = "认知" → "F7 启动一"
        # IF E = "必须人发展" AND D <> "认知" → "F7 启动三"
        # IF E = "两者都有" → "F7 启动一+二"
        rec_formula = (
            f'IF(E{r}="AI可补","F7 启动二",'
            f'IF(E{r}="必须人发展",IF(D{r}="认知","F7 启动一","F7 启动三"),'
            f'IF(E{r}="两者都有","F7 启动一+二","—")))'
        )
        rows.append(make_row(r, [
            ('A', 17, i),
            ('B', 13, name),
            ('C', 13, fact),
            ('D', 7, dt),         # yellow — input
            ('E', 7, dual),       # yellow — input
            ('F', 7, path),       # yellow — input
            ('G', 7, urg),        # yellow — input
            ('H', 19, ('f', rec_formula)),  # formula — black bold
            ('I', 13, ''),        # manual override
            ('J', 13, dialog),
            ('K', 0, ''),
        ], height=64))

    # 留几行空白让用户扩展
    for r in range(9, 15):
        rows.append(make_row(r, [
            ('A', 17, r-3),
            ('B', 13, ''), ('C', 13, ''),
            ('D', 7, ''), ('E', 7, ''), ('F', 7, ''), ('G', 7, ''),
            ('H', 19, ('f', f'IF(E{r}="AI可补","F7 启动二",IF(E{r}="必须人发展",IF(D{r}="认知","F7 启动一","F7 启动三"),IF(E{r}="两者都有","F7 启动一+二","—")))')),
            ('I', 13, ''), ('J', 13, ''), ('K', 0, ''),
        ], height=32))

    # 公式说明
    r = 16
    rows.append(make_row(r, [('A', 4, 'H列推荐启动问题 的公式规则（参考）')], height=22))
    r += 1
    rules = [
        ('如果 E = "AI可补"', '→ 推荐"F7 启动二"（直接进入双轨讨论）'),
        ('如果 E = "必须人发展" 且 D = "认知"', '→ 推荐"F7 启动一"（通用开场最稳）'),
        ('如果 E = "必须人发展" 且 D ≠ "认知"', '→ 推荐"F7 启动三"（具体化已有深度）'),
        ('如果 E = "两者都有"', '→ 推荐"F7 启动一+二"（先稳后展）'),
    ]
    for k, v in rules:
        rows.append(make_row(r, [
            ('A', 14, k),
            ('C', 14, v),
        ]))
        r += 1

    r += 1
    rows.append(make_row(r, [('A', 4, '使用提示')], height=22))
    r += 1
    notes = [
        '① 本表第 4-8 行是范例，请参照范例从第 9 行开始填自己的员工',
        '② D/E/F/G 列是手动输入（蓝色字），H 列是公式（黑色字加粗），可手动覆盖到 I 列',
        '③ 填完一行后，选中第 4-8 行的数据区，复制 → 在下方新行粘贴，公式会自动延续',
        '④ 30 天回看时在 K 列记录"实际发展如何"——形成个人案例库',
        '⑤ 公式仅在"判定选项"严格一致时才会正确（不要写"AI可补 "带空格的写法）',
    ]
    for note in notes:
        rows.append(make_row(r, [('A', 13, note)]))
        r += 1

    return '\n'.join(rows)

# ============================================================
# Sheet 3: 5个完整场景示例
# ============================================================
def build_sheet3():
    rows = []
    rows.append(make_row(1, [('A', 24, '5个完整场景示例 — F9 决策树的标准应用范本')], height=32))
    rows.append(make_row(2, [
        ('A', 2, '本表是 F9 原文"5个完整场景"的展开版。每个场景展示：事实→四步判定→发展对话草稿。'),
    ]))
    rows.append(make_row(3, [('A', 0, None)]))

    # 每个场景的标题
    scenarios = [
        ('示例1：不会写PPT（技能缺口）', '小王', '小王是工作 2 年的运营，不会写汇报PPT，每次自己熬夜做。',
         '技能', 'AI可补', '学+练（AI生成初稿+自己改）', 'F7 启动二',
         '“在你用AI最多的那类工作里，你觉得自己做了什么？你希望在AI帮你之后，把精力放在哪里？”',
         '“小王，这次想和你聊聊PPT这件事。你试过用AI帮你生成初稿吗？……如果有AI帮你做了基础框架，你打算把精力放在哪里——是打磨逻辑，还是设计呈现？”'),
        ('示例2：客户关系处理不专业（认知缺口）', '小陈', '小陈是工作 3 年的销售，沟通很技术化，客户评价"太硬"。',
         '认知', '必须人发展', '对齐+反馈（先对齐"什么是好"）', 'F7 启动一',
         '“这个周期结束，如果让你自己来说，你最满意的成长是什么？你觉得还有哪里值得再提升？”',
         '“小陈，这季度你最满意的成长是什么？……客户关系这块，你自己觉得还可以做哪些不一样？”'),
        ('示例3：判断力退化（行为缺口·漂移型）', '小马', '小马的产品决策力这半年明显下降，归因到"AI做的"',
         '行为', '必须人发展', '实战+反馈（更难任务+复盘）', 'F7 启动二',
         '“在你用AI最多的那类工作里，你觉得自己做了什么？你希望在AI承接了一部分之后，把精力放在更有深度的那部分？”',
         '“小马，你最近用AI做的工作很多。我想听你说说——在这些工作里，你做了什么？……你希望下次把精力放在哪？”'),
        ('示例4：AI工具用得浅', '小周', '小周听说过AI但只用来写周报，潜力未释放。',
         'AI工具', 'AI可补', '练（一个月内3个核心任务用AI重做）', 'F7 启动二',
         '“在你用AI最多的那类工作里……“',
         '“小周，AI这块你目前主要用在哪？……如果你把这个能力扩展到产品分析和客户沟通上，你觉得自己会有什么不同？”'),
        ('示例5：跨情境判断力弱（数据分析师·双轨）', '小李', '数据整理用AI很快，但业务判断上不去',
         '技能', '两者都有', '先发展业务判断', 'F7 启动一+二',
         '先启动一稳一下，再启动二展开双轨',
         '“小李，这季度你最满意的成长是什么？……在你的工作里，AI帮你做了很多数据整理——你希望把精力放在哪部分？”'),
    ]

    r = 4
    for title, name, fact, dt, dual, path, start, dialog, draft in scenarios:
        rows.append(make_row(r, [('A', 9, title)], height=24))
        r += 1
        rows.append(make_row(r, [
            ('A', 0, '员工'),
            ('B', 0, name),
            ('C', 0, '事实/差距'),
            ('D', 0, fact),
        ]))
        r += 1
        rows.append(make_row(r, [
            ('A', 4, '步骤'),
            ('B', 4, '判定'),
            ('C', 4, '说明'),
        ]))
        r += 1
        steps = [
            ('① 缺口类型', dt, '对应"会不会做"的判断' if dt == '技能' else
             '对应"会但没做"或"过去会现在不会"' if dt == '行为' else
             '对应"理解偏了"' if dt == '认知' else
             '对应"没用好AI"'),
            ('② AI可补还是人发展', dual, '走 AI 协作力轨' if dual == 'AI可补' else
             '走 人类深度轨' if dual == '必须人发展' else
             '走双轨，先发展更紧迫的'),
            ('③ 发展路径', path, 'F9 第三步的具体落点'),
            ('④ 启动问题', start, dialog),
        ]
        for k, v, note in steps:
            rows.append(make_row(r, [
                ('A', 14, k),
                ('B', 14, v),
                ('C', 14, note),
            ]))
            r += 1
        # 发展对话草稿
        rows.append(make_row(r, [('A', 4, '发展对话草稿（管理者开场用）')], height=22))
        r += 1
        rows.append(make_row(r, [('A', 13, draft)], height=42))
        r += 1
        # 留空
        rows.append(make_row(r, [('A', 0, None)]))
        r += 1

    return '\n'.join(rows)

# ============================================================
# Sheet 4: 缺口类型与发展路径速查
# ============================================================
def build_sheet4():
    rows = []
    rows.append(make_row(1, [('A', 24, '缺口类型与发展路径速查 — 按"缺口+轨道"找"路径+启动问题"')], height=32))
    rows.append(make_row(2, [
        ('A', 2, '本表是纯查询表：在面谈中临时忘了"这种缺口该走哪条路"，翻这一页就能找到。'),
    ]))
    rows.append(make_row(3, [('A', 0, None)]))

    # ===== AI 协作力轨 =====
    rows.append(make_row(4, [('A', 6, '【走 AI 协作力轨】— 适合：技能缺口（AI可补）+ AI工具缺口 + 部分行为缺口')], height=24))
    rows.append(make_row(5, [
        ('A', 14, '缺口类型'),
        ('B', 14, '推荐路径'),
        ('C', 14, '具体动作'),
        ('D', 14, '启动问题'),
    ]))
    ai_paths = [
        ('AI工具缺口（没用过）', '学', '选1-2个高频任务开始用——让员工下周用AI写一份周报', 'F7 启动二'),
        ('AI工具缺口（用得浅）', '练', '设"AI使用挑战"——一个月内把3个核心任务用AI重做', 'F7 启动二'),
        ('技能缺口（AI可补）', '学+练', '先学提示词基础，再用一个真实任务练', 'F7 启动二'),
        ('行为缺口（AI使用不稳定）', '反馈+流程', '把AI使用流程化——在SOP里加入"AI使用环节"', 'F7 启动二'),
    ]
    for k, p, act, q in ai_paths:
        rows.append(make_row(6 + ai_paths.index((k, p, act, q)), [
            ('A', 7, k),
            ('B', 7, p),
            ('C', 14, act),
            ('D', 7, q),
        ]))

    # ===== 人类深度轨 =====
    r = 6 + len(ai_paths) + 1
    rows.append(make_row(r, [('A', 5, '【走 人类深度轨】— 适合：大部分认知缺口 + 部分行为缺口 + 复杂判断/关系力')], height=24))
    r += 1
    rows.append(make_row(r, [
        ('A', 14, '缺口类型'),
        ('B', 14, '推荐路径'),
        ('C', 14, '具体动作'),
        ('D', 14, '启动问题'),
    ]))
    r += 1
    hu_paths = [
        ('判断力缺口', '实战+反馈', '让员工独立处理一次跨部门问题，复盘决策', 'F7 启动三'),
        ('关系力缺口', '带教+演练', '配导师+角色扮演；让员工参加F4这类对话演练', 'F7 启动一'),
        ('领域深度缺口', '深学+输出', '选一个细分领域深入；针对该领域做一份分析输出', 'F7 启动三'),
        ('认知缺口（理解偏了）', '对齐+反馈', '先对齐"什么是好"——和员工一起看3个范例，明确标准', 'F7 启动一'),
    ]
    for i, (k, p, act, q) in enumerate(hu_paths):
        rows.append(make_row(r, [
            ('A', 7, k),
            ('B', 7, p),
            ('C', 14, act),
            ('D', 7, q),
        ]))
        r += 1

    # ===== 双轨 =====
    r += 1
    rows.append(make_row(r, [('A', 6, f'【走 双轨】— 适合：缺口里{LQ}AI可补+人发展{RQ}两部分都有')], height=24))
    r += 1
    rows.append(make_row(r, [
        ('A', 14, '判断标准'),
        ('B', 14, '具体动作'),
        ('C', 14, '示例'),
        ('D', 14, '启动问题'),
    ]))
    r += 1
    dual_paths = [
        ('业务影响', '缺了这块业务卡在哪——优先级最高', '客户开发做不出来→先发展客户关系（人轨）', 'F7 启动一+二'),
        ('员工自驱', '员工自己更想提升哪边——自驱效率高', '员工主动学AI→先发展AI轨（人轨后做）', 'F7 启动一+二'),
        ('时间窗口', '三个月内能见效的优先', '业务判断 3 个月可建框架→先人轨；AI使用 1 周可上手→先AI轨', 'F7 启动一+二'),
    ]
    for k, p, act, q in dual_paths:
        rows.append(make_row(r, [
            ('A', 7, k),
            ('B', 7, p),
            ('C', 14, act),
            ('D', 7, q),
        ]))
        r += 1

    # ===== 第一步速查（综合） =====
    r += 1
    rows.append(make_row(r, [('A', 4, '【附】第一步"缺口类型"速查（与 F9 原文一致）')], height=22))
    r += 1
    rows.append(make_row(r, [
        ('A', 14, '缺口类型'),
        ('B', 14, '核心信号'),
        ('C', 14, '一句话判断'),
    ]))
    r += 1
    first_step = [
        ('技能', '不会做', '“我不太会”'),
        ('行为', '会但没做', '“我知道但没做到”'),
        ('认知', '理解偏了', '“我以为是这样”'),
        ('AI工具', '没用好AI', '“我用AI但效果一般”'),
    ]
    for k, sig, judge in first_step:
        rows.append(make_row(r, [
            ('A', 7, k),
            ('B', 7, sig),
            ('C', 14, judge),
        ]))
        r += 1

    return '\n'.join(rows)

# ============================================================
# Pack
# ============================================================
SHEET_NAMES = ['使用说明', '决策树四步判定', '5个完整场景示例', '缺口类型与发展路径速查']
write_workbook(work, SHEET_NAMES)
write_content_types(work, len(SHEET_NAMES))

write_sheet(work, 1, build_sheet1(), COLS_2COLS, tab_selected=True)
write_sheet(work, 2, build_sheet2(), COLS_5COLS, freeze='ySplit="3" topLeftCell="A4" activePane="bottomLeft" state="frozen"')
write_sheet(work, 3, build_sheet3(), COLS_2COLS)
write_sheet(work, 4, build_sheet4(), COLS_5COLS)

OUT.parent.mkdir(parents=True, exist_ok=True)
res = pack(work, OUT)
print('stdout:', res.stdout)
print('stderr:', res.stderr)
print('returncode:', res.returncode)
print('output:', OUT)
print('size:', OUT.stat().st_size if OUT.exists() else 'NOT FOUND')
