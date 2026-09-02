# -*- coding: utf-8 -*-
"""Build 06_课程效果评估数据汇总.xlsx — 课程效果评估问卷的班级数据汇总
- 4 个工作表：使用说明 / 原始数据(24份匿名问卷) / 维度汇总与公式 / 图表与解读
"""
import sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).parent))
from _helpers import (setup_work, write_styles, write_empty_sharedstrings,
                       write_workbook, write_content_types, write_sheet, pack,
                       LQ, RQ, make_row)
import random

OUT = Path(r"D:/2026年课程/竞越/绩效管理和绩效面谈：通过绩效面谈让员工更加胜任/完整课程包/13_配套Excel表单/06_课程效果评估数据汇总.xlsx")
WORK = Path(r"D:/CC/temp/excel_build/work_06")

work = setup_work(WORK)
write_styles(work)
write_empty_sharedstrings(work)

# 固定随机种子以保证可复现
random.seed(20260618)

# ============================================================
# Sheet 1: 使用说明
# ============================================================
def build_sheet1():
    rows = []
    rows.append(make_row(1, [('A', 24, '课程效果评估数据汇总 - 班级整体报告模板')], height=32))
    rows.append(make_row(2, [('A', 2, '本表是《课程效果评估问卷》填答后的"班级整体报告"模板——把每份匿名问卷的分数录入"原始数据"表，公式自动算出维度汇总、NPS分布、满意度排名等。')]))
    rows.append(make_row(3, [('A', 0, None)]))

    rows.append(make_row(4, [('A', 5, '一、四个工作表的功能')]))
    rows.append(make_row(5, [('A', 0, '工作表'), ('B', 0, '功能')]))
    rows.append(make_row(6, [('A', 13, '使用说明（本表）'), ('B', 13, '使用方法 + 评估项说明 + 解读规则')]))
    rows.append(make_row(7, [('A', 13, '原始数据(匿名)'), ('B', 13, '24份匿名问卷的4个维度+24项得分+NPS+开放题简要')]))
    rows.append(make_row(8, [('A', 13, '维度汇总与公式'), ('B', 13, '按维度算平均分、标准差、≥4分占比、Top/Bottom 5项')]))
    rows.append(make_row(9, [('A', 13, '图表与解读'), ('B', 13, '4维度平均分对比 + NPS分布柱图（条形数据） + 关键发现与改进建议')]))
    rows.append(make_row(10, [('A', 0, None)]))

    rows.append(make_row(11, [('A', 5, '二、评估项与维度对应（与课程评估问卷一致）')]))
    rows.append(make_row(12, [('A', 0, '维度'), ('B', 0, '题号'), ('C', 0, '满分')]))
    rows.append(make_row(13, [('A', 14, '课程内容'), ('B', 14, '1-8'), ('C', 14, 40)]))
    rows.append(make_row(14, [('A', 14, '讲师表现'), ('B', 14, '9-14'), ('C', 14, 30)]))
    rows.append(make_row(15, [('A', 14, '课程形式'), ('B', 14, '15-20'), ('C', 14, 30)]))
    rows.append(make_row(16, [('A', 14, '组织工作'), ('B', 14, '21-24'), ('C', 14, 20)]))
    rows.append(make_row(17, [('A', 14, '合计'), ('B', 14, '1-24'), ('C', 14, 120)]))
    rows.append(make_row(18, [('A', 0, None)]))

    rows.append(make_row(19, [('A', 5, '三、关键指标解读规则')]))
    rows.append(make_row(20, [('A', 14, '维度平均分'), ('B', 14, '≥4.5 优秀 / 4.0-4.5 良好 / 3.5-4.0 合格 / <3.5 待改善')]))
    rows.append(make_row(21, [('A', 14, '≥4分占比'), ('B', 14, '≥85% 强满意 / 70-85% 满意 / 50-70% 一般 / <50% 弱满意')]))
    rows.append(make_row(22, [('A', 14, 'NPS'), ('B', 14, '推荐者(9-10) % - 贬损者(0-6) %；≥50 强 / 0-50 良好 / <0 待改善')]))
    rows.append(make_row(23, [('A', 14, '低分项'), ('B', 14, '平均分 < 4.0 视为"需重点改进项"')]))
    rows.append(make_row(24, [('A', 0, None)]))

    rows.append(make_row(25, [('A', 5, '四、使用流程')]))
    rows.append(make_row(26, [('A', 13, '① 打开"原始数据"表，把每份匿名问卷的分数按列填入（蓝字为输入）')]))
    rows.append(make_row(27, [('A', 13, '② "维度汇总"表的所有指标都是公式自动算的——不需手算')]))
    rows.append(make_row(28, [('A', 13, '③ "图表与解读"表用条形图（不是真正图表，是字符条）展示对比——可直接读出来')]))
    rows.append(make_row(29, [('A', 13, '④ 根据"低分项"和"NPS"找改进重点')]))
    rows.append(make_row(30, [('A', 0, None)]))

    rows.append(make_row(31, [('A', 5, '五、本表配套使用')]))
    rows.append(make_row(32, [('A', 13, '上接：课程评估问卷（学员填答版）')]))
    rows.append(make_row(33, [('A', 13, '下接：班级整体报告（讲师/组织方对内发布版）')]))
    rows.append(make_row(34, [('A', 13, '配套：09_评估工具包 中的 04_行为观察量表（讲师版）')]))

    return '\n'.join(rows)

# ============================================================
# Sheet 2: 原始数据（24 份匿名问卷）
# ============================================================
# 24 个真实化数据：混合岗位类型、下属规模、得分范围 3-5 分
# 课程内容(1-8)、讲师(9-14)、形式(15-20)、组织(21-24)

QUESTIONS = [
    # (题号, 维度, 维度中文)
    (1,  '内容', '课程框架清晰，逻辑连贯'),
    (2,  '内容', '四步面谈法的讲授深度合适'),
    (3,  '内容', '四原则让我有具体可用的工具'),
    (4,  '内容', 'AI五类场景识别有实际帮助'),
    (5,  '内容', '双轨胜任度框架有新视角'),
    (6,  '内容', '三个发展对话启动问题可马上使用'),
    (7,  '内容', '案例库多行业覆盖度适合'),
    (8,  '内容', 'AI时代场景处理有共鸣'),
    (9,  '讲师', '讲师框架讲授清晰易懂'),
    (10, '讲师', '讲师角色扮演示范到位'),
    (11, '讲师', '讲师演练中反馈具体有建设性'),
    (12, '讲师', '讲师能识别处理学员情绪'),
    (13, '讲师', '讲师对AI场景处理有深度'),
    (14, '讲师', '讲师对学员行业有基本了解'),
    (15, '形式', '演练时长充足'),
    (16, '形式', '三人组角色扮演形式有效'),
    (17, '形式', '配对演练节奏合适'),
    (18, '形式', '课程时间分配合理'),
    (19, '形式', '案例讨论引导问题到位'),
    (20, '形式', '全班分享环节有收获'),
    (21, '组织', '场地布置适合角色扮演'),
    (22, '组织', '学员手册卡片物料到位'),
    (23, '组织', '课前通知清晰'),
    (24, '组织', '茶歇午餐安排合理'),
]

# 24 个学员的岗位+规模 + 各项得分
# 真实场景：业务管理者/HR/技术/其他；下属数 0-3 / 4-8 / 9-15 / 15+
# 得分策略：大部分集中在 4-5 分；少数 3 分（一般在"组织"或某一项）
# 让每个维度都有 1-2 个低分项以体现真实分布

PARTICIPANTS = [
    # (代号, 岗位类型, 下属规模, 维度倾向偏差)
    ('P01', '业务管理者', '4-8',    0.0),  # 平衡
    ('P02', 'HR/人才发展', '9-15',   0.3),  # 偏满意
    ('P03', '业务管理者', '15以上',  0.1),
    ('P04', '业务管理者', '4-8',    -0.2),  # 偏低
    ('P05', '技术人员', '0-3',      0.2),
    ('P06', '业务管理者', '9-15',    0.0),
    ('P07', 'HR/人才发展', '4-8',    0.4),
    ('P08', '业务管理者', '15以上',  0.1),
    ('P09', '其他', '0-3',          -0.1),
    ('P10', '业务管理者', '4-8',     0.2),
    ('P11', '业务管理者', '9-15',    0.0),
    ('P12', 'HR/人才发展', '15以上', 0.3),
    ('P13', '技术人员', '4-8',      0.1),
    ('P14', '业务管理者', '4-8',    -0.3),  # 明显偏低
    ('P15', '业务管理者', '9-15',    0.2),
    ('P16', '业务管理者', '0-3',     0.0),
    ('P17', 'HR/人才发展', '4-8',    0.1),
    ('P18', '业务管理者', '15以上',  0.0),
    ('P19', '技术人员', '4-8',       0.3),
    ('P20', '业务管理者', '9-15',   -0.1),
    ('P21', '业务管理者', '4-8',     0.2),
    ('P22', 'HR/人才发展', '0-3',    0.4),
    ('P23', '业务管理者', '15以上',  0.1),
    ('P24', '业务管理者', '4-8',     0.0),
]

# 几个低分项目（让平均分 < 4.0）：第 21 题（场地布置）和第 24 题（茶歇午餐）
# 第 16 题（三人组）和第 18 题（时间分配）也是常见痛点
WEAK_INDICES = [15, 17, 20, 23]  # 0-based: 16, 18, 21, 24 题

def gen_score(q_index, bias):
    """根据题号和学员的偏差生成 1-5 分。1-14 题基础 4.0，15-20 题基础 4.0，21-24 题基础 3.7。"""
    if q_index < 8:    # 内容
        base = 4.4
    elif q_index < 14:  # 讲师
        base = 4.5
    elif q_index < 20:  # 形式
        base = 4.2
    else:               # 组织
        base = 3.8
    # 弱项基础分更低
    if q_index in WEAK_INDICES:
        base -= 0.6
    # 加上学员偏差
    val = base + bias + random.uniform(-0.5, 0.5)
    # 截断到 1-5
    val = max(1, min(5, int(round(val))))
    return val

def build_sheet2():
    rows = []
    rows.append(make_row(1, [('A', 24, '原始数据 - 24份匿名问卷(课程效果评估问卷汇总)')], height=32))
    rows.append(make_row(2, [('A', 2, '本表是 24 份匿名问卷的原始数据。每行 = 一位学员；列 = 评估项 + 基本信息 + NPS。'), ('B', 0, None), ('C', 0, None), ('D', 0, None)]))
    rows.append(make_row(3, [('A', 0, None)]))

    # 表头（第 4 行起）
    # 列: A=序号 B=代号 C=岗位类型 D=下属规模 E-AB=24题 AC=NPS AD=最满意模块 AE=最希望加强 AF=下周第一个动作
    header = [('A', 14, '序号'), ('B', 14, '代号'), ('C', 14, '岗位类型'), ('D', 14, '下属规模')]
    for q_no, dim, _ in QUESTIONS:
        header.append((chr(ord('E') + q_no - 1) if q_no <= 18 else None, 14, f'Q{q_no}'))
    # 重新写：列 E-AB 对应 Q1-Q24
    header = [('A', 14, '序号'), ('B', 14, '代号'), ('C', 14, '岗位类型'), ('D', 14, '下属规模')]
    for q_no, dim, _ in QUESTIONS:
        col = chr(ord('D') + q_no)  # Q1=E, Q2=F, ..., Q24=AB (D+24 = 27 = AB)
        header.append((col, 14, f'Q{q_no}'))
    header.append(('AC', 14, 'NPS(0-10)'))
    header.append(('AD', 14, '最满意模块'))
    header.append(('AE', 14, '最希望加强'))
    header.append(('AF', 14, '下周第一个动作'))
    rows.append(make_row(4, header, height=42))

    # 学员数据行
    modules = ['课程内容', '讲师表现', '课程形式', '组织工作']
    actions = [
        '和小马做产品决策判断记录练习',
        '用F3四步准备Q1面谈',
        '和团队做双轨评估表',
        '在1v1里用启动问题二开场',
        '和HRBP看团队胜任度分布',
        '把F5四原则贴在工位前',
        '和下属约"30天回看"会议',
        '把AI五类场景识别给团队',
        '用F9决策树复盘下属缺口',
        '和同事组"面谈共研"小组',
        '下次面谈前用F10清单',
        '用启动问题一和团队leader聊',
    ]
    for idx, (code, role, team_size, bias) in enumerate(PARTICIPANTS):
        r = 4 + idx + 1
        row = [('A', 17, idx + 1), ('B', 13, code), ('C', 13, role), ('D', 13, team_size)]
        # 24 题
        for q_idx, (q_no, dim, _text) in enumerate(QUESTIONS):
            col = chr(ord('D') + q_no)
            score = gen_score(q_idx, bias)
            row.append((col, 7, score))
        # NPS 0-10
        nps = random.choices([9, 10, 8, 7, 6, 5], weights=[6, 8, 5, 3, 1, 1])[0]
        row.append(('AC', 7, nps))
        # 最满意模块
        fav = random.choices(modules, weights=[5, 6, 4, 1])[0]
        row.append(('AD', 13, fav))
        # 最希望加强
        weak = random.choices(['AI五类场景', '三人组演练', '时间分配', '场地布置'], weights=[2, 3, 3, 2])[0]
        row.append(('AE', 13, weak))
        # 下周第一个动作
        action = random.choice(actions)
        row.append(('AF', 13, action))
        rows.append(make_row(r, row, height=24))

    # 维度合计行
    r_avg = 4 + len(PARTICIPANTS) + 1
    r_avg2 = r_avg + 1
    r_avg3 = r_avg + 2
    r_avg4 = r_avg + 3
    r_avg5 = r_avg + 4  # 总分
    r_avg6 = r_avg + 5  # 留空
    r_avg7 = r_avg + 6  # 说明

    # 维度合计公式
    # 内容: Q1-Q8 = E-L
    # 讲师: Q9-Q14 = M-R
    # 形式: Q15-Q20 = S-X
    # 组织: Q21-Q24 = Y-AB
    # 学员行范围：5 到 4+24 = 28
    student_start = 5
    student_end = 4 + len(PARTICIPANTS)

    rows.append(make_row(r_avg, [
        ('A', 4, '课程内容平均（E-L）'),
        ('B', 0, None), ('C', 0, None), ('D', 0, None),
        ('E', 19, ('f', f'AVERAGE(E{student_start}:E{student_end})')),
        ('F', 19, ('f', f'AVERAGE(F{student_start}:F{student_end})')),
        ('G', 19, ('f', f'AVERAGE(G{student_start}:G{student_end})')),
        ('H', 19, ('f', f'AVERAGE(H{student_start}:H{student_end})')),
        ('I', 19, ('f', f'AVERAGE(I{student_start}:I{student_end})')),
        ('J', 19, ('f', f'AVERAGE(J{student_start}:J{student_end})')),
        ('K', 19, ('f', f'AVERAGE(K{student_start}:K{student_end})')),
        ('L', 19, ('f', f'AVERAGE(L{student_start}:L{student_end})')),
    ], height=22))
    rows.append(make_row(r_avg2, [
        ('A', 4, '讲师表现平均（M-R）'),
        ('B', 0, None), ('C', 0, None), ('D', 0, None),
        ('E', 19, ('f', f'AVERAGE(M{student_start}:M{student_end})')),
        ('F', 19, ('f', f'AVERAGE(N{student_start}:N{student_end})')),
        ('G', 19, ('f', f'AVERAGE(O{student_start}:O{student_end})')),
        ('H', 19, ('f', f'AVERAGE(P{student_start}:P{student_end})')),
        ('I', 19, ('f', f'AVERAGE(Q{student_start}:Q{student_end})')),
        ('J', 19, ('f', f'AVERAGE(R{student_start}:R{student_end})')),
    ], height=22))
    rows.append(make_row(r_avg3, [
        ('A', 4, '课程形式平均（S-X）'),
        ('B', 0, None), ('C', 0, None), ('D', 0, None),
        ('E', 19, ('f', f'AVERAGE(S{student_start}:S{student_end})')),
        ('F', 19, ('f', f'AVERAGE(T{student_start}:T{student_end})')),
        ('G', 19, ('f', f'AVERAGE(U{student_start}:U{student_end})')),
        ('H', 19, ('f', f'AVERAGE(V{student_start}:V{student_end})')),
        ('I', 19, ('f', f'AVERAGE(W{student_start}:W{student_end})')),
        ('J', 19, ('f', f'AVERAGE(X{student_start}:X{student_end})')),
    ], height=22))
    rows.append(make_row(r_avg4, [
        ('A', 4, '组织工作平均（Y-AB）'),
        ('B', 0, None), ('C', 0, None), ('D', 0, None),
        ('E', 19, ('f', f'AVERAGE(Y{student_start}:Y{student_end})')),
        ('F', 19, ('f', f'AVERAGE(Z{student_start}:Z{student_end})')),
        ('G', 19, ('f', f'AVERAGE(AA{student_start}:AA{student_end})')),
        ('H', 19, ('f', f'AVERAGE(AB{student_start}:AB{student_end})')),
    ], height=22))

    rows.append(make_row(r_avg6, [('A', 0, None)]))
    rows.append(make_row(r_avg7, [('A', 4, '使用提示（请阅）')], height=22))
    notes = [
        '① Q1-Q24 是 1-5 分制；NPS 是 0-10 分制',
        '② 数据行 5-28 是 24 位学员（已匿名化为 P01-P24）',
        '③ 数据按"基本满意 + 个别低分项"的真实分布生成——可整体覆盖为你的真实数据',
        '④ 行 30-33 是各维度的平均分——是公式自动算的',
        '⑤ "维度汇总"工作表是基于本表的进一步统计',
    ]
    r = r_avg7 + 1
    for note in notes:
        rows.append(make_row(r, [('A', 13, note)]))
        r += 1

    return '\n'.join(rows)

# ============================================================
# Sheet 3: 维度汇总与公式
# ============================================================
def build_sheet3():
    rows = []
    rows.append(make_row(1, [('A', 24, '维度汇总 - 公式自动统计（基于原始数据）')], height=32))
    rows.append(make_row(2, [('A', 2, '本表的所有数据都是公式自动从"原始数据"表读取——你只要在"原始数据"表录入真实数据，本表自动更新。')]))
    rows.append(make_row(3, [('A', 0, None)]))

    # 3.1 4 个维度的得分汇总
    rows.append(make_row(4, [('A', 5, '一、4 维度得分汇总（公式自动）')], height=22))
    rows.append(make_row(5, [
        ('A', 14, '维度'),
        ('B', 14, '题号'),
        ('C', 14, '满分'),
        ('D', 14, '实际平均分'),
        ('E', 14, '得分率'),
        ('F', 14, '≥4分占比'),
        ('G', 14, '评价'),
    ]))
    # 学员行范围 5-28
    ss, se = 5, 28
    dim_specs = [
        ('课程内容', 'E-L', 40, 'AVERAGE(E5:E28)+AVERAGE(F5:F28)+AVERAGE(G5:G28)+AVERAGE(H5:H28)+AVERAGE(I5:I28)+AVERAGE(J5:J28)+AVERAGE(K5:K28)+AVERAGE(L5:L28)'),
        ('讲师表现', 'M-R', 30, 'AVERAGE(M5:M28)+AVERAGE(N5:N28)+AVERAGE(O5:O28)+AVERAGE(P5:P28)+AVERAGE(Q5:Q28)+AVERAGE(R5:R28)'),
        ('课程形式', 'S-X', 30, 'AVERAGE(S5:S28)+AVERAGE(T5:T28)+AVERAGE(U5:U28)+AVERAGE(V5:V28)+AVERAGE(W5:W28)+AVERAGE(X5:X28)'),
        ('组织工作', 'Y-AB', 20, 'AVERAGE(Y5:Y28)+AVERAGE(Z5:Z28)+AVERAGE(AA5:AA28)+AVERAGE(AB5:AB28)'),
    ]
    r = 6
    for d, cols, full, calc in dim_specs:
        # 实际平均分 = 平均分(全维度)
        rows.append(make_row(r, [
            ('A', 14, d),
            ('B', 14, cols),
            ('C', 14, full),
            ('D', 19, ('f', calc)),
            ('E', 19, ('f', f'D{r}/{full}*30')),  # 假设每个维度满30分（折算）
            ('F', 19, ('f', f'COUNTIF({cols.split("-")[0]}{ss}:{cols.split("-")[1]}{se},"&gt;=4")/24*100%' if False else f'COUNTIF({cols.split("-")[0]}{ss}:{cols.split("-")[1]}{se},"&gt;=4")/24')),
            ('G', 19, ('f', f'IF(D{r}>=4.5,"优秀",IF(D{r}>=4,"良好",IF(D{r}>=3.5,"合格","待改善")))')),
        ]))
        r += 1

    # 修正 F 公式: COUNTIF >= 4 / 24
    # 实际：每个维度跨多列，COUNTIF 无法直接对范围做"多列"统计
    # 简化为: COUNTIF(E5:E28,">=4")+...+COUNTIF(L5:L28,">=4") / (24*8) for 内容
    # 重新写：
    rows2 = []
    rows2.append(make_row(1, [('A', 24, '维度汇总 - 公式自动统计（基于原始数据）')], height=32))
    rows2.append(make_row(2, [('A', 2, '本表的所有数据都是公式自动从"原始数据"表读取——你只要在"原始数据"表录入真实数据，本表自动更新。')]))
    rows2.append(make_row(3, [('A', 0, None)]))
    rows2.append(make_row(4, [('A', 5, '一、4 维度得分汇总（公式自动）')], height=22))
    rows2.append(make_row(5, [
        ('A', 14, '维度'),
        ('B', 14, '题号'),
        ('C', 14, '满分'),
        ('D', 14, '实际平均分'),
        ('E', 14, '得分率'),
        ('F', 14, '≥4分占比'),
        ('G', 14, '评价'),
    ]))
    r = 6
    # 内容: E-L = 8 列
    dim2 = [
        ('课程内容', 'E-L', 40,
         'AVERAGE(E5:E28)+AVERAGE(F5:F28)+AVERAGE(G5:G28)+AVERAGE(H5:H28)+AVERAGE(I5:I28)+AVERAGE(J5:J28)+AVERAGE(K5:K28)+AVERAGE(L5:L28)',
         '(COUNTIF(E5:E28,"&gt;=4")+COUNTIF(F5:F28,"&gt;=4")+COUNTIF(G5:G28,"&gt;=4")+COUNTIF(H5:H28,"&gt;=4")+COUNTIF(I5:I28,"&gt;=4")+COUNTIF(J5:J28,"&gt;=4")+COUNTIF(K5:K28,"&gt;=4")+COUNTIF(L5:L28,"&gt;=4"))/(24*8)'),
        ('讲师表现', 'M-R', 30,
         'AVERAGE(M5:M28)+AVERAGE(N5:N28)+AVERAGE(O5:O28)+AVERAGE(P5:P28)+AVERAGE(Q5:Q28)+AVERAGE(R5:R28)',
         '(COUNTIF(M5:M28,"&gt;=4")+COUNTIF(N5:N28,"&gt;=4")+COUNTIF(O5:O28,"&gt;=4")+COUNTIF(P5:P28,"&gt;=4")+COUNTIF(Q5:Q28,"&gt;=4")+COUNTIF(R5:R28,"&gt;=4"))/(24*6)'),
        ('课程形式', 'S-X', 30,
         'AVERAGE(S5:S28)+AVERAGE(T5:T28)+AVERAGE(U5:U28)+AVERAGE(V5:V28)+AVERAGE(W5:W28)+AVERAGE(X5:X28)',
         '(COUNTIF(S5:S28,"&gt;=4")+COUNTIF(T5:T28,"&gt;=4")+COUNTIF(U5:U28,"&gt;=4")+COUNTIF(V5:V28,"&gt;=4")+COUNTIF(W5:W28,"&gt;=4")+COUNTIF(X5:X28,"&gt;=4"))/(24*6)'),
        ('组织工作', 'Y-AB', 20,
         'AVERAGE(Y5:Y28)+AVERAGE(Z5:Z28)+AVERAGE(AA5:AA28)+AVERAGE(AB5:AB28)',
         '(COUNTIF(Y5:Y28,"&gt;=4")+COUNTIF(Z5:Z28,"&gt;=4")+COUNTIF(AA5:AA28,"&gt;=4")+COUNTIF(AB5:AB28,"&gt;=4"))/(24*4)'),
    ]
    for d, cols, full, calc, f4pct in dim2:
        # D 实际平均分 = D 列 (calc)
        # E 得分率 = D / 5 (因为每题满分是 5，跨 5 题的合计是 5*8=40 但平均分是单题平均 = D/5)
        # 重新想：D 公式算出的是 8 题的 sum 应该是 sum/8=平均。让我修一下
        # 内容 8 题：AVERAGE(E)+AVERAGE(F)+...+AVERAGE(L) = 8 个平均的和 = sum/24*8 = 全部题目总和/24 = 单题平均*8
        # 所以 D = 单题平均*8 ；得分率 = D / 8 / 5 = D/40
        rows2.append(make_row(r, [
            ('A', 14, d),
            ('B', 14, cols),
            ('C', 14, full),
            ('D', 19, ('f', calc)),
            ('E', 19, ('f', f'D{r}/{full}')),
            ('F', 19, ('f', f4pct)),
            ('G', 19, ('f', f'IF(D{r}>={full}*0.9,"优秀",IF(D{r}>={full}*0.8,"良好",IF(D{r}>={full}*0.7,"合格","待改善")))')),
        ]))
        r += 1

    # G 评价改用 D/full 比例
    r2 = r
    for i, (d, cols, full, calc, f4pct) in enumerate(dim2):
        # 在第 r2 行重写 G
        ratio_formula = f'D{r2-i}/{full}'
        rows2.append(make_row(r2 - len(dim2) + i, [
            ('A', 14, dim2[i][0]),
            ('B', 14, dim2[i][1]),
            ('C', 14, dim2[i][2]),
            ('D', 19, ('f', dim2[i][3])),
            ('E', 19, ('f', f'D{r2-i}/{dim2[i][2]}')),
            ('F', 19, ('f', dim2[i][4])),
            ('G', 19, ('f', f'IF({ratio_formula}>=0.9,"优秀",IF({ratio_formula}>=0.8,"良好",IF({ratio_formula}>=0.7,"合格","待改善")))')),
        ]))
    r = r2 + 1
    rows2.append(make_row(r, [('A', 0, None)]))
    r += 1

    # 3.2 各项 TOP 5 与 BOTTOM 5
    rows2.append(make_row(r, [('A', 5, '二、各项得分排名（公式自动）')], height=22))
    r += 1
    rows2.append(make_row(r, [
        ('A', 14, '题号'),
        ('B', 14, '维度'),
        ('C', 14, '平均分'),
        ('D', 14, '排名'),
    ]))
    r += 1
    # 24 题，每题单独排名
    q_ranges = [
        (1, 'E', '内容'),
        (2, 'F', '内容'),
        (3, 'G', '内容'),
        (4, 'H', '内容'),
        (5, 'I', '内容'),
        (6, 'J', '内容'),
        (7, 'K', '内容'),
        (8, 'L', '内容'),
        (9, 'M', '讲师'),
        (10, 'N', '讲师'),
        (11, 'O', '讲师'),
        (12, 'P', '讲师'),
        (13, 'Q', '讲师'),
        (14, 'R', '讲师'),
        (15, 'S', '形式'),
        (16, 'T', '形式'),
        (17, 'U', '形式'),
        (18, 'V', '形式'),
        (19, 'W', '形式'),
        (20, 'X', '形式'),
        (21, 'Y', '组织'),
        (22, 'Z', '组织'),
        (23, 'AA', '组织'),
        (24, 'AB', '组织'),
    ]
    start_r = r
    for q, col, dim in q_ranges:
        rows2.append(make_row(r, [
            ('A', 14, f'Q{q}'),
            ('B', 14, dim),
            ('C', 19, ('f', f'AVERAGE({col}5:{col}28)')),
            ('D', 19, ('f', f'RANK(C{r},$C${start_r}:$C${start_r+23},0)')),
        ]))
        r += 1

    rows2.append(make_row(r, [('A', 0, None)]))
    r += 1
    rows2.append(make_row(r, [('A', 5, '三、Top 5（得分最高） — 公式自动从上方表抽取')], height=22))
    r += 1
    rows2.append(make_row(r, [
        ('A', 14, '排名'),
        ('B', 14, '题号'),
        ('C', 14, '维度'),
        ('D', 14, '平均分'),
    ]))
    r += 1
    # Top 5: 排名 1, 2, 3, 4, 5
    for i in range(1, 6):
        # 用 INDEX/MATCH 找排名 = i 的项
        # MATCH(i, D-range, 0) 返回 D 列中等于 i 的位置
        rows2.append(make_row(r, [
            ('A', 17, i),
            ('B', 19, ('f', f'INDEX($A${start_r}:$A${start_r+23},MATCH({i},$D${start_r}:$D${start_r+23},0))')),
            ('C', 19, ('f', f'INDEX($B${start_r}:$B${start_r+23},MATCH({i},$D${start_r}:$D${start_r+23},0))')),
            ('D', 19, ('f', f'INDEX($C${start_r}:$C${start_r+23},MATCH({i},$D${start_r}:$D${start_r+23},0))')),
        ]))
        r += 1

    rows2.append(make_row(r, [('A', 0, None)]))
    r += 1
    rows2.append(make_row(r, [('A', 5, '四、Bottom 5（得分最低 - 需重点改进） - 公式自动')], height=22))
    r += 1
    rows2.append(make_row(r, [
        ('A', 14, '排名'),
        ('B', 14, '题号'),
        ('C', 14, '维度'),
        ('D', 14, '平均分'),
    ]))
    r += 1
    for i in range(20, 25):  # 排名 20, 21, 22, 23, 24
        rows2.append(make_row(r, [
            ('A', 17, 25 - i),
            ('B', 19, ('f', f'INDEX($A${start_r}:$A${start_r+23},MATCH({i},$D${start_r}:$D${start_r+23},0))')),
            ('C', 19, ('f', f'INDEX($B${start_r}:$B${start_r+23},MATCH({i},$D${start_r}:$D${start_r+23},0))')),
            ('D', 19, ('f', f'INDEX($C${start_r}:$C${start_r+23},MATCH({i},$D${start_r}:$D${start_r+23},0))')),
        ]))
        r += 1

    # 3.3 NPS 分布
    rows2.append(make_row(r, [('A', 0, None)]))
    r += 1
    rows2.append(make_row(r, [('A', 5, '五、NPS 分布（基于原始数据 AC5:AC28） - 公式自动')], height=22))
    r += 1
    rows2.append(make_row(r, [
        ('A', 14, '区间'),
        ('B', 14, '人数'),
        ('C', 14, '占比'),
        ('D', 14, '类型'),
    ]))
    r += 1
    nps_specs = [
        ('推荐者 (9-10)', 9, 10, '推荐者'),
        ('被动满意 (7-8)', 7, 8, '被动满意'),
        ('贬损者 (0-6)', 0, 6, '贬损者'),
    ]
    nps_start = r
    for label, lo, hi, t in nps_specs:
        # 人数 = COUNTIFS(AC5:AC28, ">="&lo, AC5:AC28, "<="&hi)
        # 这里 lo 可能是 0，">="0 包含空白。简化用 SUMPRODUCT
        rows2.append(make_row(r, [
            ('A', 14, label),
            ('B', 19, ('f', f'COUNTIF(AC5:AC28,"&gt;={lo}")-COUNTIF(AC5:AC28,"&gt;{hi}")')),
            ('C', 19, ('f', f'B{r}/24')),
            ('D', 14, t),
        ]))
        r += 1
    # 总人数
    rows2.append(make_row(r, [
        ('A', 14, 'NPS 总人数'),
        ('B', 19, ('f', f'SUM(B{nps_start}:B{nps_start+2})')),
        ('C', 19, ('f', f'SUM(C{nps_start}:C{nps_start+2})')),
    ]))
    r += 1
    # NPS = 推荐者% - 贬损者%
    rows2.append(make_row(r, [
        ('A', 4, 'NPS = 推荐者% - 贬损者%'),
        ('B', 19, ('f', f'C{nps_start}-C{nps_start+2}')),
        ('C', 19, ('f', f'IF(B{r}>=0.5,"强",IF(B{r}>=0,"良好",IF(B{r}>=-0.3,"待改善","需重大调整")))')),
    ]))
    r += 1

    # 3.4 岗位类型分布
    rows2.append(make_row(r, [('A', 0, None)]))
    r += 1
    rows2.append(make_row(r, [('A', 5, '六、岗位类型分布（基于原始数据 C5:C28）')], height=22))
    r += 1
    rows2.append(make_row(r, [
        ('A', 14, '岗位类型'),
        ('B', 14, '人数'),
        ('C', 14, '占比'),
        ('D', 14, '平均总分(24题)'),
    ]))
    r += 1
    role_specs = ['业务管理者', 'HR/人才发展', '技术人员', '其他']
    role_start = r
    for role in role_specs:
        rows2.append(make_row(r, [
            ('A', 14, role),
            ('B', 19, ('f', f'COUNTIF(C5:C28,"{role}")')),
            ('C', 19, ('f', f'B{r}/24')),
            ('D', 19, ('f', f'IFERROR(SUMIF(C5:C28,"{role}",E5:AB28)/B{r},"")')),
        ]))
        r += 1

    # 3.5 下属规模分布
    rows2.append(make_row(r, [('A', 0, None)]))
    r += 1
    rows2.append(make_row(r, [('A', 5, '七、下属规模分布（基于原始数据 D5:D28）')], height=22))
    r += 1
    rows2.append(make_row(r, [
        ('A', 14, '下属规模'),
        ('B', 14, '人数'),
        ('C', 14, '占比'),
        ('D', 14, '平均总分(24题)'),
    ]))
    r += 1
    size_specs = ['0-3', '4-8', '9-15', '15以上']
    for size in size_specs:
        rows2.append(make_row(r, [
            ('A', 14, size),
            ('B', 19, ('f', f'COUNTIF(D5:D28,"{size}")')),
            ('C', 19, ('f', f'B{r}/24')),
            ('D', 19, ('f', f'IFERROR(SUMIF(D5:D28,"{size}",E5:AB28)/B{r},"")')),
        ]))
        r += 1

    # 3.6 下周动作分布
    rows2.append(make_row(r, [('A', 0, None)]))
    r += 1
    rows2.append(make_row(r, [('A', 5, '八、"下周第一个动作"覆盖数（基于 AF5:AF28）')], height=22))
    r += 1
    rows2.append(make_row(r, [
        ('A', 14, '动作类型'),
        ('B', 14, '人数'),
        ('C', 14, '占比'),
    ]))
    r += 1
    # 简单统计"动作"中是否含 关键动作关键词
    action_keys = ['产品决策判断记录', 'F3四步', '双轨评估', '启动问题', 'F9决策树', 'F5四原则', '面谈共研']
    for k in action_keys:
        rows2.append(make_row(r, [
            ('A', 14, k),
            ('B', 19, ('f', f'COUNTIF(AF5:AF28,"*{k}*")')),
            ('C', 19, ('f', f'B{r}/24')),
        ]))
        r += 1

    return '\n'.join(rows2)

# ============================================================
# Sheet 4: 图表与解读
# ============================================================
def build_sheet4():
    rows = []
    rows.append(make_row(1, [('A', 24, '图表与解读 - 班级整体报告（基于维度汇总）')], height=32))
    rows.append(make_row(2, [('A', 2, '本表是"班级整体报告"的核心展示——4 维度对比 + NPS 分布 + 关键发现与改进建议。')]))
    rows.append(make_row(3, [('A', 0, None)]))

    # 4.1 4 维度平均分对比（用字符条模拟条形图）
    rows.append(make_row(4, [('A', 5, '一、4 维度平均分对比（满分 5 分）')], height=22))
    rows.append(make_row(5, [
        ('A', 14, '维度'),
        ('B', 14, '平均分'),
        ('C', 14, '得分率'),
        ('D', 14, '条形图（每 █ = 0.2 分）'),
        ('E', 14, '评价'),
    ]))
    # 引用 维度汇总 表 D 列
    # 维度汇总表中：行 6=课程内容, 7=讲师, 8=形式, 9=组织
    dim_refs = [
        ('课程内容', 6),
        ('讲师表现', 7),
        ('课程形式', 8),
        ('组织工作', 9),
    ]
    r = 6
    for d, ref_r in dim_refs:
        # D = 维度汇总!D{ref_r} —— 但该单元格是"8 题平均分之和"，不是单题平均
        # 重新算：单题平均 = D{}/8 (内容), /6 (讲师/形式), /4 (组织)
        # 但是维度汇总表的 D 列实际上算的是"维度总平均分"——我设计上混乱了
        # 简化：直接引用 原始数据 的各列 AVERAGE
        # 课程内容（E-L 单题平均） = (AVERAGE(E5:E28)+...+AVERAGE(L5:L28))/8
        # 实际看：原 D{r} 的值 = AVERAGE(E)+AVERAGE(F)+...+AVERAGE(L) 是 8 个平均的和
        # 那么单题平均 = D{}/8
        # 这里用"原始数据"表的行 30-33（维度平均行）—— 但那里是按"各题平均"算的
        # 简化方案：在图表与解读里直接重新算单题平均
        if d == '课程内容':
            single = 'AVERAGE(\'原始数据(匿名)\'!E5:E28)'
        elif d == '讲师表现':
            single = 'AVERAGE(\'原始数据(匿名)\'!M5:M28)'
        elif d == '课程形式':
            single = 'AVERAGE(\'原始数据(匿名)\'!S5:S28)'
        else:  # 组织工作
            single = 'AVERAGE(\'原始数据(匿名)\'!Y5:Y28)'
        # 字符条公式：=REPT("█", INT(B/0.2))
        rows.append(make_row(r, [
            ('A', 14, d),
            ('B', 19, ('f', single)),
            ('C', 19, ('f', f'B{r}/5')),
            ('D', 19, ('f', f'REPT("█",INT(B{r}/0.2))')),
            ('E', 19, ('f', f'IF(B{r}>=4.5,"优秀",IF(B{r}>=4,"良好",IF(B{r}>=3.5,"合格","待改善")))')),
        ]))
        r += 1

    # 4.2 NPS 分布
    r += 1
    rows.append(make_row(r, [('A', 5, '二、NPS 分布（满分 10 分）')], height=22))
    r += 1
    rows.append(make_row(r, [
        ('A', 14, '区间'),
        ('B', 14, '人数'),
        ('C', 14, '占比'),
        ('D', 14, '条形图'),
    ]))
    r += 1
    nps_specs = [
        ('推荐者 (9-10)', 9, 10),
        ('被动满意 (7-8)', 7, 8),
        ('贬损者 (0-6)', 0, 6),
    ]
    nps_start = r
    for label, lo, hi in nps_specs:
        rows.append(make_row(r, [
            ('A', 14, label),
            ('B', 19, ('f', f'COUNTIF(\'原始数据(匿名)\'!AC5:AC28,"&gt;={lo}")-COUNTIF(\'原始数据(匿名)\'!AC5:AC28,"&gt;{hi}")')),
            ('C', 19, ('f', f'B{r}/24')),
            ('D', 19, ('f', f'REPT("█",B{r})')),
        ]))
        r += 1
    # NPS 数值
    rows.append(make_row(r, [
        ('A', 4, 'NPS = 推荐者% - 贬损者%'),
        ('B', 19, ('f', f'C{nps_start}-C{nps_start+2}')),
        ('C', 19, ('f', f'IF(B{r}>=0.5,"强",IF(B{r}>=0,"良好",IF(B{r}>=-0.3,"待改善","需重大调整")))')),
    ]))
    r += 1

    # 4.3 关键发现
    r += 1
    rows.append(make_row(r, [('A', 5, '三、关键发现（自动读取 + 手填解读）')], height=22))
    r += 1
    findings = [
        ('得分最高维度', '讲师表现', '得分最低维度', '组织工作'),
        ('最满意模块（学员最多）', '讲师表现（角色扮演示范）', '最希望加强', '时间分配 / 场地布置'),
        ('NPS 推荐者比例', '≈58%', '贬损者比例', '≈8%'),
        ('NPS 净推荐值', '≈+50（强推荐）', '总体评级', '优秀'),
    ]
    rows.append(make_row(r, [('A', 14, '维度'), ('B', 14, '值'), ('C', 14, '对比维度'), ('D', 14, '值')]))
    r += 1
    for f in findings:
        rows.append(make_row(r, [('A', 14, f[0]), ('B', 13, f[1]), ('C', 14, f[2]), ('D', 13, f[3])]))
        r += 1

    # 4.4 改进建议
    r += 1
    rows.append(make_row(r, [('A', 5, '四、改进建议（下期课程优化方向）')], height=22))
    r += 1
    suggestions = [
        '1. 场地布置：增配岛式分组空间，私密性提升——回应 Q21 低分（场地布置）',
        '2. 时间分配：把"AI五类场景"从 1.5h 调至 2h——回应 Q18 低分（时间分配）',
        '3. 三人组演练：增加"混合岗位配对"——业务管理者配技术人员，回应该群体的差异',
        '4. 茶歇安排：延长茶歇 10 分钟，增加交流区——回应 Q24 低分（茶歇）',
        '5. 课后跟进：基于 Q3 下周第一个动作，组织 30 天后的"面谈共研"小组',
    ]
    for s in suggestions:
        rows.append(make_row(r, [('A', 13, s)]))
        r += 1

    # 4.5 报告使用建议
    r += 1
    rows.append(make_row(r, [('A', 5, '五、报告使用建议')], height=22))
    r += 1
    usage = [
        '① 本报告在课程结束 1 周内对内发布（不公开个人分数）',
        '② 关键发现用于讲师/HRBP 内部 review，不直接面向学员',
        '③ 改进建议用于下一期课程的设计调整',
        '④ NPS ≥ 50 表示课程"强推荐"；如 < 0，需重大调整',
        '⑤ 报告存档作为课程的"基线数据"——后续课程可对比',
    ]
    for u in usage:
        rows.append(make_row(r, [('A', 13, u)]))
        r += 1

    return '\n'.join(rows)

# ============================================================
# Pack
# ============================================================
SHEET_NAMES = ['使用说明', '原始数据(匿名)', '维度汇总与公式', '图表与解读']
write_workbook(work, SHEET_NAMES)
write_content_types(work, len(SHEET_NAMES))

# 列宽
# 原始数据 28 列
COLS_RAW = '<cols><col min="1" max="1" width="6" customWidth="1"/><col min="2" max="4" width="11" customWidth="1"/>'
for c in range(5, 29):  # E-AB
    COLS_RAW += f'<col min="{c}" max="{c}" width="6" customWidth="1"/>'
COLS_RAW += '<col min="29" max="29" width="8" customWidth="1"/>'  # AC NPS
COLS_RAW += '<col min="30" max="32" width="20" customWidth="1"/></cols>'

# 维度汇总 — 6 列
COLS_DIM = '<cols><col min="1" max="1" width="14" customWidth="1"/><col min="2" max="2" width="14" customWidth="1"/><col min="3" max="3" width="14" customWidth="1"/><col min="4" max="4" width="14" customWidth="1"/><col min="5" max="5" width="14" customWidth="1"/><col min="6" max="6" width="40" customWidth="1"/><col min="7" max="7" width="14" customWidth="1"/></cols>'

# 图表与解读 — 5 列
COLS_CHART = '<cols><col min="1" max="1" width="22" customWidth="1"/><col min="2" max="2" width="14" customWidth="1"/><col min="3" max="3" width="14" customWidth="1"/><col min="4" max="4" width="40" customWidth="1"/><col min="5" max="5" width="20" customWidth="1"/></cols>'

write_sheet(work, 1, build_sheet1(), tab_selected=True)
write_sheet(work, 2, build_sheet2(), COLS_RAW, freeze='ySplit="4" topLeftCell="A5" activePane="bottomLeft" state="frozen"')
write_sheet(work, 3, build_sheet3(), COLS_DIM)
write_sheet(work, 4, build_sheet4(), COLS_CHART)

OUT.parent.mkdir(parents=True, exist_ok=True)
res = pack(work, OUT)
print('stdout:', res.stdout[-300:])
print('stderr:', res.stderr[-200:])
print('returncode:', res.returncode)
print('output:', OUT)
print('size:', OUT.stat().st_size if OUT.exists() else 'NOT FOUND')
