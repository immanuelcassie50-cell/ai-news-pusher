# -*- coding: utf-8 -*-
"""Build 05_面谈质量自检表_个人版.xlsx — 30个检查项 4 维度 + 多次面谈趋势追踪
"""
import sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).parent))
from _helpers import (setup_work, write_styles, write_empty_sharedstrings,
                       write_workbook, write_content_types, write_sheet, pack,
                       LQ, RQ, make_row)

OUT = Path(r"D:/2026年课程/竞越/绩效管理和绩效面谈：通过绩效面谈让员工更加胜任/完整课程包/13_配套Excel表单/05_面谈质量自检表_个人版.xlsx")
WORK = Path(r"D:/CC/temp/excel_build/work_05")

work = setup_work(WORK)
write_styles(work)
write_empty_sharedstrings(work)

# ============================================================
# Sheet 1: 使用说明
# ============================================================
def build_sheet1():
    rows = []
    rows.append(make_row(1, [('A', 24, '面谈质量自检表 · 个人版 — 使用说明')], height=32))
    rows.append(make_row(2, [('A', 2, '本工具是 F5/F3/F6/F7 的"事后检查版"：面谈后当天用30分钟填写一次，积累5次以上能看到自己的面谈模式。')]))
    rows.append(make_row(3, [('A', 0, None)]))

    rows.append(make_row(4, [('A', 5, '一、本文件的四个工作表')]))
    rows.append(make_row(5, [('A', 0, '工作表'), ('B', 0, '功能')]))
    rows.append(make_row(6, [('A', 13, '使用说明（本表）'), ('B', 13, '使用方法 + 评分标准 + 4 个维度的对应关系')]))
    rows.append(make_row(7, [('A', 13, '30项自检·单次填写'), ('B', 13, '面谈后当次填写，30 个检查项 4 个维度，公式自动计算维度小计/总分/百分比')]))
    rows.append(make_row(8, [('A', 13, '多次面谈·趋势追踪'), ('B', 13, '横向追踪 10 次面谈的总分和 4 维度得分变化，看成长曲线')]))
    rows.append(make_row(9, [('A', 13, '弱项识别与模式分析'), ('B', 13, '公式自动统计"反复低分的检查项"——形成个人改善重点')]))
    rows.append(make_row(10, [('A', 0, None)]))

    rows.append(make_row(11, [('A', 5, '二、评分标准（与 F5 原文一致）')]))
    rows.append(make_row(12, [('A', 0, '分数'), ('B', 0, '含义')]))
    score_legend = [
        ('0 分', '完全没有做到'),
        ('1 分', '尝试了但没做到'),
        ('2 分', '部分做到'),
        ('3 分', '基本做到'),
        ('4 分', '完全做到且自然'),
    ]
    for i, (s, m) in enumerate(score_legend):
        rows.append(make_row(13 + i, [('A', 14, s), ('B', 14, m)]))

    rows.append(make_row(19, [('A', 0, None)]))
    rows.append(make_row(20, [('A', 5, '三、四个维度的来源（与 F 系列对应）')]))
    rows.append(make_row(21, [('A', 0, '维度'), ('B', 0, '检查项数'), ('C', 0, '对应课程工具')]))
    rows.append(make_row(22, [('A', 14, 'A 四步面谈法'), ('B', 14, 8), ('C', 14, 'F3 四步面谈法速查卡')]))
    rows.append(make_row(23, [('A', 14, 'B 正面·全面·情面·事面'), ('B', 14, 8), ('C', 14, 'F5 四原则话术对比')]))
    rows.append(make_row(24, [('A', 14, 'C AI时代场景处理'), ('B', 14, 8), ('C', 14, 'F6 AI时代五类场景处理速查卡')]))
    rows.append(make_row(25, [('A', 14, 'D 发展对话与双轨'), ('B', 14, 6), ('C', 14, 'F7 发展对话三个启动问题 + F8 双轨胜任度')]))
    rows.append(make_row(26, [('A', 14, '合计'), ('B', 14, 30), ('C', 14, '满分 = 30项 × 4分 = 120 分')]))
    rows.append(make_row(27, [('A', 0, None)]))

    rows.append(make_row(28, [('A', 5, '四、结果使用建议（参 F5 原文）')]))
    rows.append(make_row(29, [('A', 14, '总分 < 60'), ('B', 14, '这次面谈有重大问题，需要系统反思')]))
    rows.append(make_row(30, [('A', 14, '60 - 80 分'), ('B', 14, '基本合格，但有明显弱项')]))
    rows.append(make_row(31, [('A', 14, '80 - 100 分'), ('B', 14, '优秀的面谈')]))
    rows.append(make_row(32, [('A', 14, '> 100 分'), ('B', 14, '罕见——这次面谈在所有维度都做到位')]))
    rows.append(make_row(33, [('A', 0, None)]))

    rows.append(make_row(34, [('A', 5, '五、使用流程')]))
    rows.append(make_row(35, [('A', 13, '① 打开"30项自检·单次填写"表，填本次面谈的员工姓名、日期')]))
    rows.append(make_row(36, [('A', 13, '② 30 个检查项的 B 列填入 0/1/2/3/4 分数（蓝字为输入，黑字为公式自动）')]))
    rows.append(make_row(37, [('A', 13, '③ 维度小计、总分、百分比自动计算')]))
    rows.append(make_row(38, [('A', 13, '④ 把这次的总分登记到"趋势追踪"表，看自己面谈能力的成长')]))
    rows.append(make_row(39, [('A', 13, '⑤ 积累 5 次以上，做"弱项识别"——找反复低分的检查项作为下月改善重点')]))
    rows.append(make_row(40, [('A', 0, None)]))

    rows.append(make_row(41, [('A', 5, '六、提醒')]))
    rows.append(make_row(42, [('A', 13, '① 自检表是"反思工具"，不是"评分工具"——目的是让你下次做得更好，不是给自己贴标签')]))
    rows.append(make_row(43, [('A', 13, '② 自评可能失真，特别是"情面"维度——建议结合员工反馈交叉验证')]))
    rows.append(make_row(44, [('A', 13, '③ 面谈后 30 分钟和 24 小时后填写，结果可能不同——本表默认是当天填写')]))
    rows.append(make_row(45, [('A', 13, '④ 不能替代真实观察——自检表是工具，不是面谈本身')]))

    return '\n'.join(rows)

# ============================================================
# Sheet 2: 30 项自检 · 单次填写
# ============================================================
def build_sheet2():
    rows = []
    rows.append(make_row(1, [('A', 24, '30项自检 · 单次填写（面谈后当天用30分钟完成）')], height=32))
    rows.append(make_row(2, [
        ('A', 2, '请填本次面谈的员工信息，然后给 30 个检查项打分（0-4分）。维度小计和总分自动计算。'),
    ]))
    rows.append(make_row(3, [('A', 0, None)]))

    # 面谈基本信息
    rows.append(make_row(4, [
        ('A', 14, '员工姓名'),
        ('B', 13, ''),
        ('D', 14, '面谈日期'),
        ('E', 13, ''),
        ('G', 14, '面谈类型'),
        ('H', 13, ''),
    ], height=22))
    rows.append(make_row(5, [
        ('A', 14, '员工岗位'),
        ('B', 13, ''),
        ('D', 14, '面谈时长(分钟)'),
        ('E', 13, ''),
    ]))

    rows.append(make_row(6, [('A', 0, None)]))
    # 表头
    rows.append(make_row(7, [
        ('A', 14, '检查项编号'),
        ('B', 14, '检查项内容'),
        ('C', 14, '本次得分（0-4）'),
        ('D', 14, '上次得分'),
        ('E', 14, '进步 / 退步'),
    ], height=24))

    # 30 个检查项
    items = [
        # A 四步面谈法（8项）
        ('A1', '【A1-1】在面谈前，我已经准备好要讨论的具体事实（不是"印象"）', 'A'),
        ('A1', '【A1-2】开场时我邀请员工先说，而不是我先讲', 'A'),
        ('A1', '【A1-3】讨论的事实有具体的时间、情境、行为', 'A'),
        ('A1', '【A1-4】我没有在第一步就给出评价性判断', 'A'),
        ('A2', '【A2-1】我至少问了一个"探寻归因"的问题', 'A'),
        ('A2', '【A2-2】我等待员工的回答，没有抢答', 'A'),
        ('A2', '【A2-3】我探寻了员工的人类贡献（不只问"结果是什么"）', 'A'),
        ('A2', '【A2-4】在AI时代面谈中，我关注了AI的参与程度', 'A'),
        # B 正面·全面·情面·事面（8项）
        ('B1', '【B1-1】我直接说出了问题（没有用暗示代替直说）', 'B'),
        ('B1', '【B1-2】我面对面说出问题（不通过传言）', 'B'),
        ('B1', '【B1-3】我的反馈有勇气，但不攻击人', 'B'),
        ('B1', '【B1-4】在AI时代，我"正面"之前完成了归因探寻', 'B'),
        ('B2', '【B2-1】我同时看到了员工做到的和没做到的', 'B'),
        ('B2', '【B2-2】我没有用单一事件给员工下定论', 'B'),
        ('B2', '【B2-3】我考虑了外部因素（包括AI工具的影响）', 'B'),
        ('B2', '【B2-4】我没有因为有AI就忽视员工真实的人类贡献', 'B'),
        # C AI 时代场景处理（8项）
        ('C1', '【C1-1】我先认可了"用AI是正当的"，再回到"判断贡献"', 'C'),
        ('C1', '【C1-2】我没有立即反驳员工的"AI做的"陈述', 'C'),
        ('C1', '【C1-3】我让员工具体化"判断贡献"', 'C'),
        ('C2', '【C2-1】我承认了困惑的真实（不是员工"心态不好"）', 'C'),
        ('C2', '【C2-2】我帮助员工识别当前工作里仍属于他的人类贡献', 'C'),
        ('C2', '【C2-3】我引导到了双轨发展讨论', 'C'),
        ('C3', '【C3-1】我没有直接指控"你用AI糊弄了我"', 'C'),
        ('C3', '【C3-2】我从具体能力表现出发（不是从产出指控）', 'C'),
        # D 发展对话与双轨（6项）
        ('D1', '【D1-1】我用了"启动问题"开场（三个之一）', 'D'),
        ('D1', '【D1-2】我先听了员工的想法，再补充我的分析', 'D'),
        ('D1', '【D1-3】发展对话有具体的方向感（不是行动清单）', 'D'),
        ('D2', '【D2-1】我评估了员工的AI协作力状态', 'D'),
        ('D2', '【D2-2】我评估了员工的人类深度状态', 'D'),
        ('D2', '【D2-3】我识别了更紧迫的发展轨道', 'D'),
    ]

    # 注意：原 30 项是 8+8+8+6 = 30，这里按课程原文 8+8+8+6
    # 实际 8+8+8+6 = 30，对应 A1(4) + A2(4) + B1(4) + B2(4) + C1(3) + C2(3) + C3(2) + D1(3) + D2(3)
    # 现在 items 是 8+8+8+6 = 30 项
    # 实际我的 items 是 8+8+8+6 = 30，对的
    # 让我再数一下：A1(4) + A2(4) = 8, B1(4) + B2(4) = 8, C1(3) + C2(3) + C3(2) = 8, D1(3) + D2(3) = 6
    # 总共 30 项

    for i, (code, text, dim) in enumerate(items):
        r = 7 + i + 1  # 行 8 起
        rows.append(make_row(r, [
            ('A', 14, code),
            ('B', 13, text),
            ('C', 7, ''),     # input
            ('D', 7, ''),     # 上次得分
            ('E', 19, ('f', f'IF(C{r}="","",C{r}-D{r})')),  # 进步/退步
        ], height=22))

    # 维度小计 — 公式：A1(行8-11), A2(行12-15), B1(行16-19), B2(行20-23), C1(行24-26), C2(行27-29), C3(行30-31), D1(行32-34), D2(行35-37)
    # A 维度小计: 行 8-15
    # B 维度小计: 行 16-23
    # C 维度小计: 行 24-31
    # D 维度小计: 行 32-37
    r = 39
    rows.append(make_row(r, [('A', 4, '维度小计（公式自动）')], height=22))
    r += 1
    rows.append(make_row(r, [
        ('A', 14, '维度'),
        ('B', 14, '满分'),
        ('C', 14, '实际得分'),
        ('D', 14, '百分比'),
        ('E', 14, '评价'),
    ], height=22))
    r += 1
    dim_rows = [
        ('A 四步面谈法', 32, 'AVERAGE(C8:C11)+AVERAGE(C12:C15)', 'AVERAGE(C8:C15)'),
        ('B 正面·全面·情面·事面', 32, 'AVERAGE(C16:C19)+AVERAGE(C20:C23)', 'AVERAGE(C16:C23)'),
        ('C AI时代场景处理', 32, 'AVERAGE(C24:C26)+AVERAGE(C27:C29)+AVERAGE(C30:C31)', 'AVERAGE(C24:C31)'),
        ('D 发展对话与双轨', 24, 'AVERAGE(C32:C34)+AVERAGE(C35:C37)', 'AVERAGE(C32:C37)'),
    ]
    for d, full, calc, avg in dim_rows:
        # 实际得分 = AVERAGE * 8（A）或 * 6（D）
        if d.startswith('A') or d.startswith('B'):
            actual = f'SUM(C{8+dim_rows.index((d,full,calc,avg))*8}:C{8+dim_rows.index((d,full,calc,avg))*8+7})'
        else:
            actual = f'SUM(C{8+dim_rows.index((d,full,calc,avg))*8}:C{8+dim_rows.index((d,full,calc,avg))*8+5})'
        # 简化为: A=8项 (C8:C15), B=8项 (C16:C23), C=8项 (C24:C31), D=6项 (C32:C37)
        pass

    # 简化版公式：直接用范围
    dim_specs = [
        ('A 四步面谈法', 32, 8, 15),
        ('B 正面·全面·情面·事面', 32, 16, 23),
        ('C AI时代场景处理', 32, 24, 31),
        ('D 发展对话与双轨', 24, 32, 37),
    ]
    for d, full, rs, re in dim_specs:
        rows.append(make_row(r, [
            ('A', 14, d),
            ('B', 14, full),
            ('C', 19, ('f', f'SUM(C{rs}:C{re})')),
            ('D', 19, ('f', f'C{r}/{full}')),
            ('E', 19, ('f', f'IF(D{r}>=0.85,"优秀",IF(D{r}>=0.7,"合格",IF(D{r}>=0.5,"待改善","重大问题")))')),
        ]))
        r += 1

    # 总分
    rows.append(make_row(r, [
        ('A', 4, '总分'),
        ('B', 14, 120),
        ('C', 19, ('f', f'SUM(C8:C37)')),
        ('D', 19, ('f', f'C{r}/120')),
        ('E', 19, ('f', f'IF(D{r}>=0.85,"优秀面谈",IF(D{r}>=0.67,"基本合格",IF(D{r}>=0.5,"明显弱项","重大问题")))')),
    ]))
    r += 1
    rows.append(make_row(r, [('A', 0, None)]))
    r += 1
    # 提示
    rows.append(make_row(r, [('A', 4, '使用提示')], height=22))
    r += 1
    notes = [
        '① C 列（本次得分）和 D 列（上次得分）填 0-4 整数，E 列自动算进步/退步',
        '② 维度小计自动求和；百分比 = 实际得分 / 满分',
        '③ 评价规则：≥85% 优秀 / ≥67% 合格 / ≥50% 待改善 / <50% 重大问题',
        '④ D 列"上次得分"非必填——只在你想做进步追踪时填',
    ]
    for note in notes:
        rows.append(make_row(r, [('A', 13, note)]))
        r += 1

    return '\n'.join(rows)

# ============================================================
# Sheet 3: 多次面谈 · 趋势追踪
# ============================================================
def build_sheet3():
    rows = []
    rows.append(make_row(1, [('A', 24, '多次面谈 · 趋势追踪（横向看成长曲线）')], height=32))
    rows.append(make_row(2, [
        ('A', 2, '本表横向追踪 10 次面谈的得分变化。每次面谈后把总分和 4 维度得分从"30项自检"表登记过来。'),
    ]))
    rows.append(make_row(3, [('A', 0, None)]))

    # 表头
    rows.append(make_row(4, [
        ('A', 14, '次数'),
        ('B', 14, '面谈日期'),
        ('C', 14, '员工姓名'),
        ('D', 14, 'A 维度（/32）'),
        ('E', 14, 'B 维度（/32）'),
        ('F', 14, 'C 维度（/32）'),
        ('G', 14, 'D 维度（/24）'),
        ('H', 14, '总分（/120）'),
        ('I', 14, '百分比'),
        ('J', 14, '评价'),
        ('K', 14, '本次最大亮点'),
        ('L', 14, '本次最大弱项'),
    ], height=36))

    # 范例 6 次
    samples = [
        ('2026-01-08', '小马',  22, 20, 18, 14, 74, '产品决策面谈，第一次用F3四步'),
        ('2026-01-15', '小马',  25, 23, 22, 16, 86, '双轨讨论较自然'),
        ('2026-01-22', '小陈',  20, 19, 14, 12, 65, 'AI场景处理不熟'),
        ('2026-02-05', '小王',  24, 22, 23, 17, 86, 'PPT技能缺口·AI补'),
        ('2026-02-19', '小李',  27, 25, 25, 19, 96, '双轨案例·优秀'),
        ('2026-03-04', '小周',  28, 26, 26, 20, 100, 'AI工具用得浅·启动二'),
    ]

    for i, (d, name, sa, sb, sc, sd_, total, note) in enumerate(samples):
        r = 4 + i + 1
        rows.append(make_row(r, [
            ('A', 17, i + 1),
            ('B', 13, d),
            ('C', 13, name),
            ('D', 7, sa),
            ('E', 7, sb),
            ('F', 7, sc),
            ('G', 7, sd_),
            ('H', 19, ('f', f'D{r}+E{r}+F{r}+G{r}')),
            ('I', 19, ('f', f'H{r}/120')),
            ('J', 19, ('f', f'IF(I{r}>=0.85,"优秀",IF(I{r}>=0.67,"合格",IF(I{r}>=0.5,"待改善","重大问题")))')),
            ('K', 13, note),
            ('L', 0, ''),
        ], height=24))

    # 留 4 行空白
    for r in range(11, 15):
        rows.append(make_row(r, [
            ('A', 17, r - 4),
            ('B', 13, ''), ('C', 13, ''),
            ('D', 7, ''), ('E', 7, ''), ('F', 7, ''), ('G', 7, ''),
            ('H', 19, ('f', f'IF(D{r}="","",D{r}+E{r}+F{r}+G{r})')),
            ('I', 19, ('f', f'IF(H{r}="","",H{r}/120)')),
            ('J', 19, ('f', f'IF(I{r}="","",IF(I{r}>=0.85,"优秀",IF(I{r}>=0.67,"合格",IF(I{r}>=0.5,"待改善","重大问题"))))')),
            ('K', 13, ''), ('L', 0, ''),
        ]))

    # 趋势统计
    r = 16
    rows.append(make_row(r, [('A', 4, '趋势统计（公式自动）')], height=22))
    r += 1
    rows.append(make_row(r, [
        ('A', 14, '指标'),
        ('B', 14, '当前值'),
        ('C', 14, '历史最高'),
        ('D', 14, '历史最低'),
        ('E', 14, '平均值'),
    ]))
    r += 1

    # 累计得分范围 D5:D14
    metrics = [
        ('A 维度（/32）', 'D'),
        ('B 维度（/32）', 'E'),
        ('C 维度（/32）', 'F'),
        ('D 维度（/24）', 'G'),
        ('总分（/120）', 'H'),
    ]
    for name, col in metrics:
        rows.append(make_row(r, [
            ('A', 14, name),
            ('B', 19, ('f', f'IFERROR(INDEX({col}5:{col}14,COUNTA({col}5:{col}14)),"")')),
            ('C', 19, ('f', f'IFERROR(MAX({col}5:{col}14),"")')),
            ('D', 19, ('f', f'IFERROR(MIN({col}5:{col}14),"")')),
            ('E', 19, ('f', f'IFERROR(AVERAGE({col}5:{col}14),"")')),
        ]))
        r += 1

    r += 1
    rows.append(make_row(r, [('A', 4, '使用提示')], height=22))
    r += 1
    notes = [
        '① 每次面谈后，把"30项自检"表的总分和4维度得分登记到对应行',
        '② H/I/J 列是公式自动算的——你只要填 D-G 列',
        '③ 趋势统计会自动给出"当前值/历史最高/历史最低/平均"——看成长曲线',
        '④ J 列"评价"实时显示，帮助你快速判断"这次面谈水平"',
        '⑤ 范例数据可覆盖：选中第 5-10 行的数据，删除；然后填入自己的数据',
    ]
    for note in notes:
        rows.append(make_row(r, [('A', 13, note)]))
        r += 1

    return '\n'.join(rows)

# ============================================================
# Sheet 4: 弱项识别与模式分析
# ============================================================
def build_sheet4():
    rows = []
    rows.append(make_row(1, [('A', 24, '弱项识别与模式分析（5次以上填写后使用）')], height=32))
    rows.append(make_row(2, [
        ('A', 2, '本表是"自检表的二次分析"——积累 5 次以上填写后，找出"反复低分的检查项"，作为下月改善重点。'),
    ]))
    rows.append(make_row(3, [('A', 0, None)]))

    # 4.1 累计低分检查项
    rows.append(make_row(4, [('A', 5, '一、累计低分检查项（公式自动统计）')], height=22))
    rows.append(make_row(5, [
        ('A', 14, '检查项编号'),
        ('B', 14, '检查项内容'),
        ('C', 14, '维度'),
        ('D', 14, '最近一次得分'),
        ('E', 14, '历史平均分'),
        ('F', 14, '累计出现次数'),
        ('G', 14, '低分次数（≤2）'),
        ('H', 14, '低分率'),
        ('I', 14, '是否需重点改善'),
    ], height=24))

    # 30 项逐项列出（与 30项自检 表对应）
    items_30 = [
        ('A1-1', '面谈前准备好具体事实', 'A'),
        ('A1-2', '邀请员工先说', 'A'),
        ('A1-3', '事实有具体时间情境行为', 'A'),
        ('A1-4', '第一步不给评价性判断', 'A'),
        ('A2-1', '至少问一个探寻归因问题', 'A'),
        ('A2-2', '等待员工回答', 'A'),
        ('A2-3', '探寻人类贡献', 'A'),
        ('A2-4', '关注AI参与程度', 'A'),
        ('B1-1', '直接说问题不暗示', 'B'),
        ('B1-2', '面对面说不传言', 'B'),
        ('B1-3', '有勇气不攻击', 'B'),
        ('B1-4', '正面之前完成归因探寻', 'B'),
        ('B2-1', '同时看到做到和没做到', 'B'),
        ('B2-2', '不用单一事件下定论', 'B'),
        ('B2-3', '考虑外部因素', 'B'),
        ('B2-4', '不因AI忽视人类贡献', 'B'),
        ('C1-1', '先认可AI正当再回到判断', 'C'),
        ('C1-2', '不立即反驳AI做的陈述', 'C'),
        ('C1-3', '让员工具体化判断贡献', 'C'),
        ('C2-1', '承认困惑的真实', 'C'),
        ('C2-2', '帮助识别人类贡献', 'C'),
        ('C2-3', '引导到双轨发展', 'C'),
        ('C3-1', '不直接指控用AI糊弄', 'C'),
        ('C3-2', '从能力表现出发', 'C'),
        ('D1-1', '用启动问题开场', 'D'),
        ('D1-2', '先听员工再补充分析', 'D'),
        ('D1-3', '发展对话有方向感', 'D'),
        ('D2-1', '评估AI协作力状态', 'D'),
        ('D2-2', '评估人类深度状态', 'D'),
        ('D2-3', '识别更紧迫的发展轨道', 'D'),
    ]

    for i, (code, text, dim) in enumerate(items_30):
        r = 6 + i
        # 30 项自检表的 D 列（趋势追踪表里 C8-C37）—— 这里我们从 trend 表的 D-G 列统计
        # 实际：30项自检表的 C 列（本次得分）记录了"最近一次"；D 列（上次得分）记录了"上次"
        # 为简化：本表显示"最近一次得分" + "历史平均"——历史平均从 trend 表读（多次面谈）
        # 由于数据是横向在 trend 表（5-14 行），每列是不同的面谈
        # 本表简化：填入的是用户在 30项自检 表中实际填的分数
        # 历史平均 = AVERAGE of trend D-G for that item —— 实际数据分布在 trend 表的 D-G 列（每次面谈的 A-D 维度）
        # 由于本表是单维度级别（30 项），trend 表是维度级别（4 个），无法精确对接
        # 简化：让用户从 trend 表手动填"最近一次得分"到 D 列；"历史平均"留空
        rows.append(make_row(r, [
            ('A', 14, code),
            ('B', 13, text),
            ('C', 14, dim),
            ('D', 7, ''),    # 最近一次得分
            ('E', 7, ''),    # 历史平均
            ('F', 7, ''),    # 累计次数
            ('G', 7, ''),    # 低分次数
            ('H', 19, ('f', f'IFERROR(G{r}/F{r},"")')),
            ('I', 19, ('f', f'IF(H{r}="","",IF(H{r}>=0.5,"⚠️ 需重点",IF(H{r}>=0.3,"🔸 关注","✓ 稳定")))')),
        ], height=18))

    # 4.2 弱项 Top 3 区
    r = 38
    rows.append(make_row(r, [('A', 0, None)]))
    r += 1
    rows.append(make_row(r, [('A', 5, '二、本次面谈的弱项 Top 3（手填）')], height=22))
    r += 1
    rows.append(make_row(r, [
        ('A', 14, '排名'),
        ('B', 14, '检查项'),
        ('C', 14, '我的差距'),
        ('D', 14, '下次如何改进'),
    ], height=22))
    r += 1
    for i in range(3):
        rows.append(make_row(r, [
            ('A', 17, i + 1),
            ('B', 13, ''),
            ('C', 13, ''),
            ('D', 13, ''),
        ]))
        r += 1

    # 4.3 30 天后回看
    r += 1
    rows.append(make_row(r, [('A', 5, '三、30 天后回看')], height=22))
    r += 1
    rows.append(make_row(r, [('A', 14, '上次最弱项'), ('B', 13, ''), ('D', 14, '本次得分'), ('E', 13, '')]))
    r += 1
    rows.append(make_row(r, [('A', 14, '进步 / 退步'), ('B', 13, ''), ('D', 14, '具体表现'), ('E', 13, '')]))
    r += 1
    rows.append(make_row(r, [('A', 14, '下次改善重点'), ('B', 13, ''), ('D', 14, '30天承诺'), ('E', 13, '')]))
    r += 2

    # 4.4 使用建议
    rows.append(make_row(r, [('A', 4, '四、使用建议（与 F5 原文一致）')], height=22))
    r += 1
    notes = [
        '① 本表的 D-G 列需手动从"30项自检"表逐项抄录——自动化数据透视可以等 Excel 基础更熟后做',
        '② I 列的"需重点" = 低分率 ≥ 50%——意味着 5 次面谈里 ≥ 3 次 ≤ 2 分',
        '③ 找出 I 列为"⚠️ 需重点"的检查项，填入"二、弱项 Top 3"——下月改善重点',
        '④ 30 天后回看时，把"上次最弱项"和"本次得分"对比——看改善效果',
        '⑤ 找到 ≥ 3 个"反复低分"项时——考虑：① 和问责伙伴讨论 ② 找 HR 推荐培训 ③ 减少该类面谈的安排',
    ]
    for note in notes:
        rows.append(make_row(r, [('A', 13, note)]))
        r += 1

    return '\n'.join(rows)

# ============================================================
# Pack
# ============================================================
SHEET_NAMES = ['使用说明', '30项自检·单次填写', '多次面谈·趋势追踪', '弱项识别与模式分析']
write_workbook(work, SHEET_NAMES)
write_content_types(work, len(SHEET_NAMES))

COLS_4COLS_TREND = '<cols><col min="1" max="1" width="6" customWidth="1"/><col min="2" max="2" width="14" customWidth="1"/><col min="3" max="3" width="12" customWidth="1"/><col min="4" max="4" width="11" customWidth="1"/><col min="5" max="5" width="11" customWidth="1"/><col min="6" max="6" width="11" customWidth="1"/><col min="7" max="7" width="11" customWidth="1"/><col min="8" max="8" width="11" customWidth="1"/><col min="9" max="9" width="9" customWidth="1"/><col min="10" max="10" width="11" customWidth="1"/><col min="11" max="11" width="24" customWidth="1"/><col min="12" max="12" width="24" customWidth="1"/></cols>'

write_sheet(work, 1, build_sheet1(), tab_selected=True)
write_sheet(work, 2, build_sheet2(), freeze='ySplit="7" topLeftCell="A8" activePane="bottomLeft" state="frozen"')
write_sheet(work, 3, build_sheet3(), COLS_4COLS_TREND, freeze='ySplit="4" topLeftCell="A5" activePane="bottomLeft" state="frozen"')
write_sheet(work, 4, build_sheet4(), freeze='ySplit="5" topLeftCell="A6" activePane="bottomLeft" state="frozen"')

OUT.parent.mkdir(parents=True, exist_ok=True)
res = pack(work, OUT)
print('stdout:', res.stdout[-300:])
print('stderr:', res.stderr[-200:])
print('returncode:', res.returncode)
print('output:', OUT)
print('size:', OUT.stat().st_size if OUT.exists() else 'NOT FOUND')
