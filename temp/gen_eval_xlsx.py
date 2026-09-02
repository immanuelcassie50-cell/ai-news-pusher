#!/usr/bin/env python3
"""
Build 06_评估数据汇总_Excel版.xlsx for 领航·4.0 Z世代管理课程评估工具包.
"""
import os
import zipfile
from pathlib import Path

WORK = Path("D:/CC/temp/xlsx_work")
OUT_XLSX = Path(r"D:\2026年课程\竞越\领航：Z世代管理新策略3.0\完整课程包\11_评估工具包\06_评估数据汇总_Excel版.xlsx")

# ============================================================
# Shared strings (one source of truth, index 0-based)
# ============================================================
SHARED = []
def S(t):
    if t in SHARED:
        return SHARED.index(t)
    SHARED.append(t)
    return len(SHARED) - 1

# Common title/labels
S("领航·4.0——AI时代的Z世代管理新策略")
S("课程评估数据汇总（v1.0）")
S("罗老师课程评估系统")
S("班级编号：")
S("开课日期：")
S("HRBP：")
S("评估周期：")
S("课前7天 → 课中 → 课后当天 → 训后30天 → 训后90天")
S("填写说明")
S("1. 学员编号格式：LH4-CLASS-XX（如 LH4-S01-01 表示第1期第1位学员）")
S("2. 五感评分：每项 1-5 分，1=完全缺失，5=充分具备")
S("3. 下属评价完全匿名，HRBP 不得向管理者公开下属具体分数")
S("4. 数据录入后请按 Ctrl+S 保存；批量修改后建议重新核对公式")
S("Sheet 说明")
S("Sheet 1 学员名册：班级花名册与编号规则")
S("Sheet 2 前测数据：课前 7 天五感诊断（自评 + 下属评）")
S("Sheet 3 后测数据：课后当天管理行为变化")
S("Sheet 4 课中观察：讲师在 Day1/Day2 的实时观察")
S("Sheet 5 30-90天追踪：行为转化与业务结果")
S("Sheet 6 汇总分析：班级整体指标 + 高困境预警 + 建议输出")
S("风险信号灯说明")
S("绿色 健康：五感总分 > 18，行为稳定")
S("黄色 中等：五感总分 12-18，需要关注")
S("橙色 风险：自评-下属评差距 > 5，存在认知盲区")
S("红色 高困境：五感总分 < 12，需重点跟进")
S("数据录入区")

# Sheet 1
S("01_学员名册与编号")
S("学员编号")
S("姓名")
S("部门")
S("职务")
S("课程日期")
S("直属上级")
S("Z世代下属代号")
S("问责伙伴")
S("备注")

STUDENTS = [
    ("LH4-S01-01", "张博远", "产品研发部", "高级经理", "2026-04-15", "李明辉", "Z-01", "陈思涵", "新晋管理者"),
    ("LH4-S01-02", "陈思涵", "市场部",    "总监",     "2026-04-15", "王晓东", "Z-02", "张博远", "老带新"),
    ("LH4-S01-03", "刘静怡", "用户运营部", "经理",     "2026-04-15", "赵建国", "Z-03", "周明轩", ""),
    ("LH4-S01-04", "周明轩", "技术部",    "技术总监", "2026-04-15", "李明辉", "Z-04", "刘静怡", "技术线管理者"),
    ("LH4-S01-05", "孙雨桐", "人力资源部", "HRBP",    "2026-04-15", "钱伟杰", "Z-05", "张博远", "高困境预警"),
    ("LH4-S01-06", "吴正清", "销售部",    "区域经理", "2026-04-15", "钱伟杰", "Z-06", "陈思涵", ""),
    ("LH4-S01-07", "郑婉婷", "设计部",    "设计主管", "2026-04-15", "赵建国", "Z-07", "刘静怡", "高困境预警"),
]

# Sheet 2
S("02_前测数据_五感诊断")
S("节奏感自评")
S("存在感自评")
S("位置感自评")
S("掌控感自评")
S("价值感自评")
S("五感总分")
S("节奏感下属评")
S("存在感下属评")
S("位置感下属评")
S("掌控感下属评")
S("价值感下属评")
S("下属五感总分")
S("自评-下属评差距")
S("困境强度")
S("AI使用水平")
S("前测状态")

# Sheet 3
S("03_后测数据_管理行为变化")
S("后测五感总分")
S("三不怕认知")
S("工具应用自评")
S("信心度")
S("满意度")
S("迁移意图")
S("后测-前测提升")
S("学习获得感指数")
S("后测状态")

# Sheet 4
S("04_课中观察_汇总")
S("参与度均值")
S("开场情绪")
S("中场情绪")
S("结尾情绪")
S("情绪曲线均值")
S("工具练习完成度")
S("风险预警等级")
S("关键学习时刻")
S("课中状态")

# Sheet 5
S("05_30-90天追踪_行为转化与结果")
S("30天清单执行率_选人用人")
S("30天清单执行率_赋能授权")
S("30天清单执行率_评估激励")
S("30天清单执行率_沟通协调")
S("30天清单执行率_综合")
S("30天工具使用率")
S("30天下属满意度")
S("30天困难强度")
S("30天提交状态")
S("90天工具持续率")
S("90天Z世代员工留存")
S("90天1v1质量")
S("90天冲突次数")
S("90天冲突减少率")
S("90天NPS")
S("90天业务结果评分")
S("90天综合得分")
S("主管评价")
S("下属评价")
S("90天提交状态")
S("综合跟进状态")

# Sheet 6
S("06_汇总分析与报告")
S("区块 A：班级整体指标")
S("班级编号")
S("参训人数")
S("前测回收率")
S("后测回收率")
S("30天回收率")
S("90天回收率")
S("前测班级均分")
S("后测班级均分")
S("平均五感提升")
S("学习获得感指数")
S("满意度均值")
S("迁移意图均值")
S("班级整体NPS")
S("行为衰减学员数")
S("行为巩固学员数")
S("高困境学员数")
S("课程ROI估算")
S("区块 B：工具使用排名")
S("工具名")
S("使用率")
S("持续使用率")
S("排名")
S("区块 C：高困境学员预警")
S("前测五感总分")
S("自评-下属评差距")
S("风险等级")
S("HRBP跟进状态")
S("跟进建议")
S("区块 D：建议输出")
S("重点跟进学员")
S("课程迭代建议")
S("排名解读")
S("提交率解读")
S("NPS解读")

# Status / 风险等级 options
for s in ["已提交", "未提交", "超时", "绿", "黄", "橙", "红",
          "无", "低", "中", "高", "初级", "中级", "高级", "掌握",
          "案例代入强，主动参与", "反馈练习获突破", "AI 工具演示获认可",
          "开场注意力分散", "高能量全程投入", "三不怕工作纸引发深度反思",
          "尾场情绪略有下降", "已完成", "待跟进", "已关注", "无需跟进",
          "有显著变化", "有部分应用", "尚未应用", "管理明显改善",
          "管理有所改善", "变化不明显", "员工反馈积极", "员工反馈中性",
          "员工有保留", "建议再次面谈", "建议HRBP介入", "建议加配辅导资源",
          "建议持续观察",
          "学员满意度持续高位", "30天清单执行良好", "AI工具渗透率低于预期",
          "需要迭代1v1模板", "强化冲突管理工具示范", "增加Z世代案例库",
          "班级整体得分", "高推荐意愿", "中性", "低推荐意愿",
          "1v1 深度对话", "三不怕工作纸", "AI 教练助手", "情绪曲线图",
          "成长型反馈", "OKR 共创", "压力源清单", "LH4-S01",
          "孙雨桐", "L", "H", "4", "S", "0", "1",
          "1. 学员编号格式：LH4-CLASS-XX（如 LH4-S01-01 表示第1期第1位学员）",
          "2. Z世代下属代号（Z-XX）由HRBP统一编排，下属评价全程匿名",
          "3. 问责伙伴由Day 2下午配对产生，互为督促",
          "4. 备注列记录特殊关注点（如高困境预警、需重点观察）",
          "人", "提升≥5（绿灯）人数", "提升>5：显著学习获得感",
          "提升2-5：中度提升", "提升<2：提升有限，需关注",
          "提升幅度信号灯说明", "—",
          "高困境学员数（总分<12）", "30天清单执行率_综合",
          "工具持续率 30%  → L 列（% 表示）",
          "Z世代员工留存 30%  → M 列（% 表示）",
          "1v1 质量 20%  → N 列（满分 5 分，按比例换算 100 分）",
          "冲突减少率 20%  → P 列 = (基线5次 - 当前冲突次数) / 5",
          "总分范围：0-100。≥70 已完成 / 50-70 待跟进 / <50 已关注",
          "90天综合得分公式", "30天回收率", "90天回收率",
          "= COUNTIF(H6:H12, \"<12\")", "= COUNTIF(I6:I12, \"橙\")+COUNTIF(I6:I12, \"红\")",
          "= COUNTIF(I6:I12, \">=5\")", "= COUNTIF(K6:K12, \"已提交\")/7",
          "= COUNTIF(V6:V12, \"已提交\")/7", "目标 ≥70%", "目标 ≥60%",
          "30天回收率", "90天回收率",
          "选人用人", "赋能授权", "评估激励", "沟通协调",
          "班级整体得分", "工具渗透率Top1", "工具渗透率Bottom1",
          "NPS解读", "回收率解读", "重点跟进学员", "课程ROI",
          "项目", "数值/结论", "行动建议",
          "≥4 健康，3-4 待提升，<3 需重新审视课程设计",
          "重点保留并在下一班级强化",
          "诊断：复杂度/示范/适用边界",
          "高推荐可作标杆案例",
          "未达标者加强问责伙伴机制",
          "HRBP 1对1 + 线上答疑会",
          "≥1.0 达标，<1.0 需重新设计",
          "≥10人", "≥95%", "≥70%", "≥60%",
          "≥5", "≥20%", "≥4.5", "≥4.0", "≥40", "≤2", "≥4", "≥1.0",
          "≥20", "—", "≥10人", "目标", "数值", "状态", "指标",
          "达标", "待催", "不足", "健康", "中等", "高困境", "需关注",
          "显著", "中等", "有限", "待提升",
          "30天回收率", "90天回收率",
          "工具渗透率Top1", "工具渗透率Bottom1", "班级整体得分",
          "NPS解读", "回收率解读", "重点跟进学员", "课程ROI",
          "高推荐可作标杆案例", "未达标者加强问责伙伴机制",
          "HRBP 1对1 + 线上答疑会", "≥1.0 达标，<1.0 需重新设计",
          "≥4 健康，3-4 待提升，<3 需重新审视课程设计",
          "重点保留并在下一班级强化", "诊断：复杂度/示范/适用边界",
          ]:
    S(s)

# ============================================================
# helpers
# ============================================================
def col_letter(n):
    s = ""
    while n > 0:
        n, r = divmod(n - 1, 26)
        s = chr(65 + r) + s
    return s

def cstr(ref, idx, style=25):
    return f'<c r="{ref}" t="s" s="{style}"><v>{idx}</v></c>'

def cnum(ref, val, style=27):
    return f'<c r="{ref}" s="{style}"><v>{val}</v></c>'

def cdec(ref, val, style=23):
    return f'<c r="{ref}" s="{style}"><v>{val}</v></c>'

def cpct(ref, val, style=8):
    return f'<c r="{ref}" s="{style}"><v>{val}</v></c>'

def cformula(ref, f, style=2):
    return f'<c r="{ref}" s="{style}"><f>{f}</f><v></v></c>'

def cgreen(ref, f, style=3):
    return f'<c r="{ref}" s="{style}"><f>{f}</f><v></v></c>'

def cempty(ref, style=25):
    return f'<c r="{ref}" s="{style}"/>'

# ============================================================
# Sample data
# ============================================================
PRE_DATA = [
    # (节自, 存自, 位自, 掌自, 价自, 节下, 存下, 位下, 掌下, 价下, 困境强度, AI水平, 状态)
    (3, 2, 2, 2, 2, 1, 1, 2, 1, 1, 4, 1, "已提交"),  # 张博远
    (5, 4, 4, 4, 4, 4, 4, 4, 4, 3, 1, 3, "已提交"),
    (3, 3, 3, 3, 3, 2, 2, 3, 2, 2, 2, 2, "已提交"),
    (4, 4, 5, 4, 4, 4, 4, 4, 4, 4, 1, 3, "已提交"),
    (4, 5, 4, 4, 4, 4, 4, 4, 4, 4, 1, 2, "已提交"),
    (4, 4, 4, 4, 4, 3, 3, 4, 3, 3, 1, 2, "已提交"),
    (2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 4, 1, "已提交"),  # 郑婉婷
]

POST_DATA = [
    (18, 4, 4, 4, 5, 5, "已提交"),
    (22, 5, 5, 5, 5, 5, "已提交"),
    (19, 4, 4, 4, 4, 4, "已提交"),
    (22, 5, 5, 5, 5, 4, "已提交"),
    (21, 5, 4, 5, 5, 5, "已提交"),
    (20, 4, 4, 4, 5, 4, "已提交"),
    (17, 4, 4, 4, 5, 4, "已提交"),
]

OBS_DATA = [
    (4.5, 5, 5, 4, 0.9,  "黄", "三不怕工作纸引发深度反思", "已完成"),
    (4.8, 5, 4, 5, 0.95, "绿", "高能量全程投入",           "已完成"),
    (3.2, 3, 3, 3, 0.6,  "黄", "开场注意力分散",            "已完成"),
    (4.6, 4, 5, 5, 0.9,  "绿", "AI 工具演示获认可",         "已完成"),
    (4.7, 5, 5, 4, 0.85, "绿", "案例代入强，主动参与",      "已完成"),
    (3.8, 4, 4, 3, 0.7,  "黄", "尾场情绪略有下降",          "已完成"),
    (2.5, 2, 3, 3, 0.5,  "橙", "反馈练习获突破",            "待跟进"),
]

TRACK_DATA = [
    # (用人%, 赋能%, 评估%, 沟通%, 工具%, 下满, 困难, 30状态,
    #  工具%, 留存%, 1v1, 冲突, NPS, 业务, 主管, 下属, 90状态)
    (0.7, 0.6, 0.5, 0.6, 0.6, 4, 2, "已提交", 0.5, 0.85, 4, 1, 50, 7, "管理明显改善", "员工反馈中性", "已提交"),
    (0.8, 0.85, 0.8, 0.9, 0.9, 5, 1, "已提交", 0.85, 0.95, 5, 0, 70, 9, "管理明显改善", "员工反馈积极", "已提交"),
    (0.6, 0.6, 0.5, 0.55, 0.5, 3, 2, "已提交", 0.4, 0.8, 3, 2, 30, 6, "管理有所改善", "员工有保留", "已提交"),
    (0.85, 0.8, 0.75, 0.85, 0.85, 4, 1, "已提交", 0.8, 0.95, 5, 0, 65, 9, "管理明显改善", "员工反馈积极", "已提交"),
    (0.9, 0.85, 0.8, 0.85, 0.85, 4, 1, "已提交", 0.75, 0.9, 4, 1, 55, 8, "管理明显改善", "员工反馈积极", "已提交"),
    (0.55, 0.5, 0.45, 0.5, 0.5, 3, 3, "已提交", 0.4, 0.8, 3, 2, 25, 5, "管理有所改善", "员工有保留", "待跟进"),
    (0.65, 0.55, 0.5, 0.55, 0.55, 3, 3, "待跟进", 0.4, 0.75, 3, 3, 20, 5, "变化不明显", "员工有保留", "待跟进"),
]

TOOL_USAGE = [
    ("1v1 深度对话", 0.95, 0.85),
    ("三不怕工作纸", 0.90, 0.80),
    ("AI 教练助手", 0.65, 0.55),
    ("情绪曲线图", 0.75, 0.65),
    ("成长型反馈", 0.85, 0.70),
    ("OKR 共创", 0.70, 0.60),
    ("压力源清单", 0.50, 0.40),
]

# ============================================================
# styles.xml
# ============================================================
STYLES_XML = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <numFmts count="9">
    <numFmt numFmtId="164" formatCode="$#,##0;($#,##0);&quot;-&quot;"/>
    <numFmt numFmtId="165" formatCode="0.0%"/>
    <numFmt numFmtId="166" formatCode="0.0x"/>
    <numFmt numFmtId="167" formatCode="#,##0"/>
    <numFmt numFmtId="168" formatCode="0.0"/>
    <numFmt numFmtId="169" formatCode="0"/>
    <numFmt numFmtId="170" formatCode="0.00"/>
    <numFmt numFmtId="171" formatCode="0.000"/>
    <numFmt numFmtId="172" formatCode="m/d/yyyy"/>
  </numFmts>
  <fonts count="10">
    <font><sz val="11"/><name val="Calibri"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="000000FF"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="00000000"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="00008000"/></font>
    <font><sz val="11"/><name val="Calibri"/><b/><color rgb="00000000"/></font>
    <font><sz val="16"/><name val="Microsoft YaHei"/><b/><color rgb="00FFFFFF"/></font>
    <font><sz val="12"/><name val="Microsoft YaHei"/><b/><color rgb="00FFFFFF"/></font>
    <font><sz val="11"/><name val="Microsoft YaHei"/><b/><color rgb="00000000"/></font>
    <font><sz val="11"/><name val="Microsoft YaHei"/><color rgb="00000000"/></font>
    <font><sz val="11"/><name val="Microsoft YaHei"/><b/><color rgb="00000000"/></font>
  </fonts>
  <fills count="10">
    <fill><patternFill patternType="none"/></fill>
    <fill><patternFill patternType="gray125"/></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="00FFFF00"/><bgColor indexed="64"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="001F4E79"/><bgColor indexed="64"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="002E75B6"/><bgColor indexed="64"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="00F2F2F2"/><bgColor indexed="64"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="00E8F4F8"/><bgColor indexed="64"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="00F5F5F5"/><bgColor indexed="64"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="00FFF8E1"/><bgColor indexed="64"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="00E8F5E9"/><bgColor indexed="64"/></patternFill></fill>
  </fills>
  <borders count="2">
    <border><left/><right/><top/><bottom/><diagonal/></border>
    <border>
      <left style="thin"><color rgb="00BFBFBF"/></left>
      <right style="thin"><color rgb="00BFBFBF"/></right>
      <top style="thin"><color rgb="00BFBFBF"/></top>
      <bottom style="thin"><color rgb="00BFBFBF"/></bottom>
      <diagonal/>
    </border>
  </borders>
  <cellStyleXfs count="1">
    <xf numFmtId="0" fontId="0" fillId="0" borderId="0"/>
  </cellStyleXfs>
  <cellXfs count="40">
    <xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>
    <xf numFmtId="0" fontId="1" fillId="0" borderId="1" xfId="0" applyFont="1" applyBorder="1"/>
    <xf numFmtId="0" fontId="2" fillId="0" borderId="1" xfId="0" applyFont="1" applyBorder="1"/>
    <xf numFmtId="0" fontId="3" fillId="0" borderId="1" xfId="0" applyFont="1" applyBorder="1"/>
    <xf numFmtId="0" fontId="4" fillId="0" borderId="1" xfId="0" applyFont="1" applyBorder="1"/>
    <xf numFmtId="164" fontId="1" fillId="0" borderId="1" xfId="0" applyFont="1" applyNumberFormat="1" applyBorder="1"/>
    <xf numFmtId="164" fontId="2" fillId="0" borderId="1" xfId="0" applyFont="1" applyNumberFormat="1" applyBorder="1"/>
    <xf numFmtId="165" fontId="1" fillId="0" borderId="1" xfId="0" applyFont="1" applyNumberFormat="1" applyBorder="1"/>
    <xf numFmtId="165" fontId="2" fillId="0" borderId="1" xfId="0" applyFont="1" applyNumberFormat="1" applyBorder="1"/>
    <xf numFmtId="167" fontId="1" fillId="0" borderId="1" xfId="0" applyFont="1" applyNumberFormat="1" applyBorder="1"/>
    <xf numFmtId="167" fontId="2" fillId="0" borderId="1" xfId="0" applyFont="1" applyNumberFormat="1" applyBorder="1"/>
    <xf numFmtId="1" fontId="1" fillId="0" borderId="1" xfId="0" applyFont="1" applyNumberFormat="1" applyBorder="1"/>
    <xf numFmtId="0" fontId="1" fillId="2" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1"/>
    <xf numFmtId="0" fontId="5" fillId="3" borderId="0" xfId="0" applyFont="1" applyFill="1" applyAlignment="1">
      <alignment horizontal="center" vertical="center"/>
    </xf>
    <xf numFmtId="0" fontId="7" fillId="5" borderId="0" xfId="0" applyFont="1" applyFill="1" applyAlignment="1">
      <alignment horizontal="center" vertical="center"/>
    </xf>
    <xf numFmtId="0" fontId="6" fillId="4" borderId="0" xfId="0" applyFont="1" applyFill="1" applyAlignment="1">
      <alignment horizontal="center" vertical="center"/>
    </xf>
    <xf numFmtId="0" fontId="8" fillId="5" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1" applyAlignment="1">
      <alignment horizontal="left" vertical="center" wrapText="1"/>
    </xf>
    <xf numFmtId="0" fontId="8" fillId="5" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1" applyAlignment="1">
      <alignment horizontal="center" vertical="center"/>
    </xf>
    <xf numFmtId="0" fontId="8" fillId="6" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1" applyAlignment="1">
      <alignment horizontal="left" vertical="center" wrapText="1"/>
    </xf>
    <xf numFmtId="0" fontId="8" fillId="7" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1" applyAlignment="1">
      <alignment horizontal="left" vertical="center" wrapText="1"/>
    </xf>
    <xf numFmtId="0" fontId="8" fillId="8" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1" applyAlignment="1">
      <alignment horizontal="left" vertical="center" wrapText="1"/>
    </xf>
    <xf numFmtId="0" fontId="8" fillId="9" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1" applyAlignment="1">
      <alignment horizontal="left" vertical="center" wrapText="1"/>
    </xf>
    <xf numFmtId="0" fontId="9" fillId="5" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1" applyAlignment="1">
      <alignment horizontal="center" vertical="center"/>
    </xf>
    <xf numFmtId="168" fontId="2" fillId="0" borderId="1" xfId="0" applyFont="1" applyNumberFormat="1" applyBorder="1" applyAlignment="1">
      <alignment horizontal="center" vertical="center"/>
    </xf>
    <xf numFmtId="0" fontId="9" fillId="0" borderId="1" xfId="0" applyFont="1" applyBorder="1" applyAlignment="1">
      <alignment horizontal="center" vertical="center"/>
    </xf>
    <xf numFmtId="0" fontId="8" fillId="0" borderId="1" xfId="0" applyFont="1" applyBorder="1" applyAlignment="1">
      <alignment horizontal="center" vertical="center" wrapText="1"/>
    </xf>
    <xf numFmtId="0" fontId="9" fillId="0" borderId="1" xfId="0" applyFont="1" applyBorder="1" applyAlignment="1">
      <alignment horizontal="center" vertical="center"/>
    </xf>
    <xf numFmtId="169" fontId="2" fillId="0" borderId="1" xfId="0" applyFont="1" applyNumberFormat="1" applyBorder="1" applyAlignment="1">
      <alignment horizontal="center" vertical="center"/>
    </xf>
    <xf numFmtId="0" fontId="9" fillId="6" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1" applyAlignment="1">
      <alignment horizontal="center" vertical="center"/>
    </xf>
    <xf numFmtId="0" fontId="6" fillId="0" borderId="1" xfId="0" applyFont="1" applyBorder="1" applyAlignment="1">
      <alignment horizontal="center" vertical="center"/>
    </xf>
    <xf numFmtId="165" fontId="2" fillId="0" borderId="1" xfId="0" applyFont="1" applyNumberFormat="1" applyBorder="1" applyAlignment="1">
      <alignment horizontal="center" vertical="center"/>
    </xf>
    <xf numFmtId="167" fontId="2" fillId="0" borderId="1" xfId="0" applyFont="1" applyNumberFormat="1" applyBorder="1" applyAlignment="1">
      <alignment horizontal="center" vertical="center"/>
    </xf>
    <xf numFmtId="0" fontId="9" fillId="5" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1" applyAlignment="1">
      <alignment horizontal="center" vertical="center"/>
    </xf>
    <xf numFmtId="14" fontId="1" fillId="0" borderId="1" xfId="0" applyFont="1" applyNumberFormat="1" applyBorder="1" applyAlignment="1">
      <alignment horizontal="center" vertical="center"/>
    </xf>
    <xf numFmtId="0" fontId="9" fillId="5" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1" applyAlignment="1">
      <alignment horizontal="left" vertical="center" wrapText="1"/>
    </xf>
    <xf numFmtId="168" fontId="1" fillId="0" borderId="1" xfId="0" applyFont="1" applyNumberFormat="1" applyBorder="1" applyAlignment="1">
      <alignment horizontal="center" vertical="center"/>
    </xf>
    <xf numFmtId="169" fontId="1" fillId="0" borderId="1" xfId="0" applyFont="1" applyNumberFormat="1" applyBorder="1" applyAlignment="1">
      <alignment horizontal="center" vertical="center"/>
    </xf>
    <xf numFmtId="168" fontId="2" fillId="0" borderId="1" xfId="0" applyFont="1" applyNumberFormat="1" applyBorder="1" applyAlignment="1">
      <alignment horizontal="center" vertical="center"/>
    </xf>
    <xf numFmtId="0" fontId="9" fillId="8" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1" applyAlignment="1">
      <alignment horizontal="center" vertical="center"/>
    </xf>
    <xf numFmtId="0" fontId="8" fillId="0" borderId="1" xfId="0" applyFont="1" applyBorder="1" applyAlignment="1">
      <alignment horizontal="center" vertical="center"/>
    </xf>
  </cellXfs>
  <cellStyles count="1">
    <cellStyle name="Normal" xfId="0" builtinId="0"/>
  </cellStyles>
</styleSheet>
'''

def build_sharedstrings():
    items = "".join(f'<si><t xml:space="preserve">{s.replace("&","&amp;").replace("<","&lt;").replace(">","&gt;")}</t></si>' for s in SHARED)
    return f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="{len(SHARED)}" uniqueCount="{len(SHARED)}">
{items}
</sst>
'''

WORKBOOK_XML = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
          xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <fileVersion appName="xl" lastEdited="7" lowestEdited="7"/>
  <workbookPr defaultThemeVersion="166925"/>
  <bookViews>
    <workbookView xWindow="0" yWindow="0" windowWidth="22000" windowHeight="12000"/>
  </bookViews>
  <sheets>
    <sheet name="01_学员名册与编号" sheetId="1" r:id="rId1"/>
    <sheet name="02_前测数据_五感诊断" sheetId="2" r:id="rId4"/>
    <sheet name="03_后测数据_管理行为变化" sheetId="3" r:id="rId5"/>
    <sheet name="04_课中观察_汇总" sheetId="4" r:id="rId6"/>
    <sheet name="05_30-90天追踪" sheetId="5" r:id="rId7"/>
    <sheet name="06_汇总分析与报告" sheetId="6" r:id="rId8"/>
  </sheets>
  <calcPr calcId="191029"/>
</workbook>
'''

WORKBOOK_RELS = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
  <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml"/>
  <Relationship Id="rId4" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet2.xml"/>
  <Relationship Id="rId5" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet3.xml"/>
  <Relationship Id="rId6" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet4.xml"/>
  <Relationship Id="rId7" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet5.xml"/>
  <Relationship Id="rId8" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet6.xml"/>
</Relationships>
'''

CONTENT_TYPES = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
  <Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet2.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet3.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet4.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet5.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet6.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>
  <Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/>
</Types>
'''

# ============================================================
# Sheet 1: 学员名册
# ============================================================
def build_sheet1():
    rows = []
    # Title row 1
    title = S("领航·4.0——AI时代的Z世代管理新策略 · 课程评估数据汇总")
    rows.append(f'<row r="1" ht="32" customHeight="1">'
                f'{cstr("A1", title, 13)}'
                + "".join(cempty(f"{col_letter(c)}1", 13) for c in range(2, 11))
                + '</row>')

    # Subtitle row 2
    sub = S("01_学员名册与编号 · 班级花名册与编号规则（HRBP 录入）")
    rows.append(f'<row r="2" ht="22" customHeight="1">'
                f'{cstr("A2", sub, 14)}'
                + "".join(cempty(f"{col_letter(c)}2", 14) for c in range(2, 11))
                + '</row>')

    # Meta row 3
    cn = S("班级编号："); cd = S("开课日期："); hrbp = S("HRBP："); course = S("评估周期：")
    rows.append(f'<row r="3" ht="20" customHeight="1">'
                f'{cstr("A3", cn, 16)}'
                f'{cstr("B3", S("LH4-S01"), 18)}'
                f'{cstr("C3", cd, 16)}'
                f'{cstr("D3", S("2026-04-15"), 18)}'
                f'{cstr("E3", hrbp, 16)}'
                f'{cstr("F3", S("孙雨桐"), 18)}'
                f'{cstr("G3", course, 16)}'
                f'{cstr("H3", S("课前7天 → 课中 → 课后当天 → 训后30天 → 训后90天"), 18)}'
                f'{cempty("I3", 18)}{cempty("J3", 18)}'
                f'</row>')

    rows.append('<row r="4"/>')

    rows.append(f'<row r="5" ht="22" customHeight="1">'
                f'{cstr("A5", S("数据录入区"), 15)}'
                + "".join(cempty(f"{col_letter(c)}5", 15) for c in range(2, 11))
                + '</row>')

    headers = ["学员编号", "姓名", "部门", "职务", "课程日期", "直属上级",
               "Z世代下属代号", "问责伙伴", "备注"]
    cells = "".join(cstr(f"{col_letter(i+1)}6", S(h), 15) for i, h in enumerate(headers))
    rows.append(f'<row r="6" ht="22" customHeight="1">{cells}</row>')

    for i, stu in enumerate(STUDENTS):
        r = 7 + i
        cells = [cstr(f"A{r}", S(stu[0]), 1), cstr(f"B{r}", S(stu[1]), 1),
                 cstr(f"C{r}", S(stu[2]), 1), cstr(f"D{r}", S(stu[3]), 1),
                 cstr(f"E{r}", S(stu[4]), 1), cstr(f"F{r}", S(stu[5]), 1),
                 cstr(f"G{r}", S(stu[6]), 1), cstr(f"H{r}", S(stu[7]), 1),
                 cstr(f"I{r}", S(stu[8]), 1), cempty(f"J{r}", 25)]
        rows.append(f'<row r="{r}" ht="20" customHeight="1">{"".join(cells)}</row>')

    # Total row 14
    rows.append(f'<row r="14" ht="22" customHeight="1">'
                f'{cstr("A14", S("参训人数"), 16)}'
                f'{cformula("B14", "COUNTA(B7:B13)", 22)}'
                f'{cstr("C14", S("人"), 16)}'
                f'{cempty("D14", 22)}{cempty("E14", 22)}{cempty("F14", 22)}'
                f'{cempty("G14", 22)}{cempty("H14", 22)}{cempty("I14", 22)}{cempty("J14", 22)}'
                f'</row>')

    rows.append('<row r="15"/>')
    rows.append(f'<row r="16" ht="20" customHeight="1">'
                f'{cstr("A16", S("填写说明"), 15)}'
                + "".join(cempty(f"{col_letter(c)}16", 15) for c in range(2, 11))
                + '</row>')

    notes = [
        "1. 学员编号格式：LH4-CLASS-XX（如 LH4-S01-01 表示第1期第1位学员）",
        "2. Z世代下属代号（Z-XX）由HRBP统一编排，下属评价全程匿名",
        "3. 问责伙伴由Day 2下午配对产生，互为督促",
        "4. 备注列记录特殊关注点（如高困境预警、需重点观察）",
    ]
    for i, n in enumerate(notes):
        r = 17 + i
        rows.append(f'<row r="{r}" ht="20" customHeight="1">'
                    f'{cstr(f"A{r}", S(n), 18)}'
                    + "".join(cempty(f"{col_letter(c)}{r}", 18) for c in range(2, 11))
                    + '</row>')

    body = "".join(rows)
    return f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
           xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView tabSelected="1" workbookViewId="0">
      <pane ySplit="6" topLeftCell="A7" activePane="bottomLeft" state="frozen"/>
    </sheetView>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25"
    xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols>
    <col min="1" max="1" width="16" customWidth="1"/>
    <col min="2" max="2" width="14" customWidth="1"/>
    <col min="3" max="4" width="16" customWidth="1"/>
    <col min="5" max="5" width="14" customWidth="1"/>
    <col min="6" max="6" width="14" customWidth="1"/>
    <col min="7" max="7" width="14" customWidth="1"/>
    <col min="8" max="8" width="14" customWidth="1"/>
    <col min="9" max="9" width="20" customWidth="1"/>
    <col min="10" max="10" width="6" customWidth="1"/>
  </cols>
  <sheetData>{body}</sheetData>
  <dataValidations count="1">
    <dataValidation type="list" allowBlank="1" showInputMessage="1" showErrorMessage="1" sqref="I7:I13">
      <formula1>&quot;新晋管理者,老带新,技术线管理者,高困境预警,需重点观察,无&quot;</formula1>
    </dataValidation>
  </dataValidations>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>
'''

# ============================================================
# Sheet 2
# ============================================================
def build_sheet2():
    rows = []
    title = S("02_前测数据_五感诊断 · 课前7天基线（学员自评 + 下属匿名）")
    rows.append(f'<row r="1" ht="32" customHeight="1">'
                f'{cstr("A1", title, 13)}'
                + "".join(cempty(f"{col_letter(c)}1", 13) for c in range(2, 19))
                + '</row>')

    sub = S("自评总分 = 节奏+存在+位置+掌控+价值（每项 1-5 分，共 5-25 分） · 下属评同理 · 差距越大，认知盲区越严重")
    rows.append(f'<row r="2" ht="22" customHeight="1">'
                f'{cstr("A2", sub, 14)}'
                + "".join(cempty(f"{col_letter(c)}2", 14) for c in range(2, 19))
                + '</row>')

    rows.append('<row r="3"/>')

    rows.append(f'<row r="4" ht="22" customHeight="1">'
                f'{cstr("A4", S("数据录入区"), 15)}'
                + "".join(cempty(f"{col_letter(c)}4", 15) for c in range(2, 19))
                + '</row>')

    headers = [
        "学员编号", "姓名", "节奏感自评", "存在感自评", "位置感自评", "掌控感自评", "价值感自评",
        "五感总分", "节奏感下属评", "存在感下属评", "位置感下属评", "掌控感下属评", "价值感下属评",
        "下属五感总分", "自评-下属评差距", "困境强度", "AI使用水平", "前测状态"
    ]
    cells = "".join(cstr(f"{col_letter(i+1)}5", S(h), 15) for i, h in enumerate(headers))
    rows.append(f'<row r="5" ht="36" customHeight="1">{cells}</row>')

    for i, row in enumerate(PRE_DATA):
        r = 6 + i
        s1, s2, s3, s4, s5, b1, b2, b3, b4, b5, diff, ai, status = row
        cells = []
        stu_id = STUDENTS[i][0]
        cells.append(cstr(f"A{r}", S(stu_id), 1))
        cells.append(cstr(f"B{r}", S(STUDENTS[i][1]), 1))
        for j, v in enumerate([s1, s2, s3, s4, s5]):
            cells.append(cnum(f"{col_letter(3+j)}{r}", v, 36))
        cells.append(cformula(f"H{r}", f"SUM(C{r}:G{r})", 23))
        for j, v in enumerate([b1, b2, b3, b4, b5]):
            cells.append(cnum(f"{col_letter(9+j)}{r}", v, 36))
        cells.append(cformula(f"N{r}", f"SUM(I{r}:M{r})", 23))
        cells.append(cformula(f"O{r}", f"H{r}-N{r}", 23))
        cells.append(cnum(f"P{r}", diff, 36))
        cells.append(cnum(f"Q{r}", ai, 36))
        cells.append(cstr(f"R{r}", S(status), 26))
        rows.append(f'<row r="{r}" ht="20" customHeight="1">{"".join(cells)}</row>')

    # Row 13: 班级均值
    cells = [cstr("A13", S("班级均值"), 16), cempty("B13", 22)]
    for col in range(3, 18):
        colL = col_letter(col)
        cells.append(cformula(f"{colL}13", f"AVERAGE({colL}6:{colL}12)", 23))
    cells.append(cstr("R13", S("—"), 22))
    rows.append(f'<row r="13" ht="22" customHeight="1">{"".join(cells)}</row>')

    rows.append(f'<row r="14" ht="22" customHeight="1">'
                f'{cstr("A14", S("高困境学员数（总分<12）"), 16)}'
                f'{cempty("B14", 22)}'
                f'{cstr("C14", S("= COUNTIF(H6:H12, \"<12\")"), 22)}'
                f'{cstr("D14", S("人"), 16)}'
                + "".join(cempty(f"{col_letter(c)}14", 22) for c in range(5, 19))
                + '</row>')

    rows.append('<row r="15"/>')

    rows.append(f'<row r="16" ht="20" customHeight="1">'
                f'{cstr("A16", S("风险信号灯说明"), 15)}'
                + "".join(cempty(f"{col_letter(c)}16", 15) for c in range(2, 19))
                + '</row>')

    signal_notes = [
        "绿色 健康：五感总分 > 18，行为稳定",
        "黄色 中等：五感总分 12-18，需要关注",
        "橙色 风险：自评-下属评差距 > 5，存在认知盲区",
        "红色 高困境：五感总分 < 12，需重点跟进",
    ]
    for i, n in enumerate(signal_notes):
        r = 17 + i
        rows.append(f'<row r="{r}" ht="20" customHeight="1">'
                    f'{cstr(f"A{r}", S(n), 18)}'
                    + "".join(cempty(f"{col_letter(c)}{r}", 18) for c in range(2, 19))
                    + '</row>')

    body = "".join(rows)
    return f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
           xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView workbookViewId="0">
      <pane ySplit="5" xSplit="2" topLeftCell="C6" activePane="bottomRight" state="frozen"/>
    </sheetView>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25"
    xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols>
    <col min="1" max="1" width="13" customWidth="1"/>
    <col min="2" max="2" width="11" customWidth="1"/>
    <col min="3" max="13" width="12" customWidth="1"/>
    <col min="14" max="14" width="13" customWidth="1"/>
    <col min="15" max="15" width="14" customWidth="1"/>
    <col min="16" max="17" width="13" customWidth="1"/>
    <col min="18" max="18" width="11" customWidth="1"/>
  </cols>
  <sheetData>{body}</sheetData>
  <conditionalFormatting sqref="H6:H12">
    <cfRule type="cellIs" priority="1" operator="lessThan" dxfId="0">
      <formula>12</formula>
      <color rgb="00C00000"/>
      <stopIfTrue/>
    </cfRule>
    <cfRule type="cellIs" priority="2" operator="between" dxfId="0">
      <formula>12</formula>
      <formula>18</formula>
      <color rgb="00E6B800"/>
    </cfRule>
    <cfRule type="cellIs" priority="3" operator="greaterThan" dxfId="0">
      <formula>18</formula>
      <color rgb="00008000"/>
    </cfRule>
  </conditionalFormatting>
  <conditionalFormatting sqref="O6:O12">
    <cfRule type="cellIs" priority="1" operator="greaterThan" dxfId="0">
      <formula>5</formula>
      <color rgb="00E36C09"/>
    </cfRule>
  </conditionalFormatting>
  <dataValidations count="1">
    <dataValidation type="list" allowBlank="1" showInputMessage="1" showErrorMessage="1" sqref="R6:R12">
      <formula1>&quot;已提交,未提交,超时&quot;</formula1>
    </dataValidation>
  </dataValidations>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>
'''

# ============================================================
# Sheet 3
# ============================================================
def build_sheet3():
    rows = []
    title = S("03_后测数据_管理行为变化 · 课后当天即时反馈（Kirkpatrick L1-L2）")
    rows.append(f'<row r="1" ht="32" customHeight="1">'
                f'{cstr("A1", title, 13)}'
                + "".join(cempty(f"{col_letter(c)}1", 13) for c in range(2, 12))
                + '</row>')

    sub = S("后测-前测提升 = 跨表 VLOOKUP 引用前测五感总分 · 学习获得感指数 = 提升 / 前测总分")
    rows.append(f'<row r="2" ht="22" customHeight="1">'
                f'{cstr("A2", sub, 14)}'
                + "".join(cempty(f"{col_letter(c)}2", 14) for c in range(2, 12))
                + '</row>')

    rows.append('<row r="3"/>')

    rows.append(f'<row r="4" ht="22" customHeight="1">'
                f'{cstr("A4", S("数据录入区"), 15)}'
                + "".join(cempty(f"{col_letter(c)}4", 15) for c in range(2, 12))
                + '</row>')

    headers = ["学员编号", "姓名", "后测五感总分", "三不怕认知", "工具应用自评", "信心度", "满意度", "迁移意图", "后测-前测提升", "学习获得感指数", "后测状态"]
    cells = "".join(cstr(f"{col_letter(i+1)}5", S(h), 15) for i, h in enumerate(headers))
    rows.append(f'<row r="5" ht="36" customHeight="1">{cells}</row>')

    for i, row in enumerate(POST_DATA):
        r = 6 + i
        post, sanbu, tool, conf, sat, transfer, status = row
        cells = []
        stu_id = STUDENTS[i][0]
        cells.append(cstr(f"A{r}", S(stu_id), 1))
        cells.append(cstr(f"B{r}", S(STUDENTS[i][1]), 1))
        cells.append(cnum(f"C{r}", post, 36))
        cells.append(cnum(f"D{r}", sanbu, 36))
        cells.append(cnum(f"E{r}", tool, 36))
        cells.append(cnum(f"F{r}", conf, 36))
        cells.append(cnum(f"G{r}", sat, 36))
        cells.append(cnum(f"H{r}", transfer, 36))
        # I: 后测-前测提升
        cells.append(cformula(f"I{r}", f"C{r}-VLOOKUP(A{r},'02_前测数据_五感诊断'!A6:H12,8,0)", 23))
        # J: 学习获得感指数
        cells.append(cformula(f"J{r}", f"IFERROR(I{r}/VLOOKUP(A{r},'02_前测数据_五感诊断'!A6:H12,8,0),0)", 30))
        cells.append(cstr(f"K{r}", S(status), 26))
        rows.append(f'<row r="{r}" ht="20" customHeight="1">{"".join(cells)}</row>')

    # Row 13: 班级均值
    cells = [cstr("A13", S("班级均值"), 16), cempty("B13", 22)]
    for col in [3, 4, 5, 6, 7, 8]:
        colL = col_letter(col)
        cells.append(cformula(f"{colL}13", f"AVERAGE({colL}6:{colL}12)", 23))
    cells.append(cformula("I13", "AVERAGE(I6:I12)", 23))
    cells.append(cformula("J13", "AVERAGE(J6:J12)", 30))
    cells.append(cstr("K13", S("—"), 22))
    rows.append(f'<row r="13" ht="22" customHeight="1">{"".join(cells)}</row>')

    rows.append(f'<row r="14" ht="22" customHeight="1">'
                f'{cstr("A14", S("提升≥5（绿灯）人数"), 16)}'
                f'{cempty("B14", 22)}'
                f'{cstr("C14", S("= COUNTIF(I6:I12, \">=5\")"), 22)}'
                f'{cstr("D14", S("人"), 16)}'
                + "".join(cempty(f"{col_letter(c)}14", 22) for c in range(5, 12))
                + '</row>')

    rows.append('<row r="15"/>')
    rows.append(f'<row r="16" ht="20" customHeight="1">'
                f'{cstr("A16", S("提升幅度信号灯说明"), 15)}'
                + "".join(cempty(f"{col_letter(c)}16", 15) for c in range(2, 12))
                + '</row>')

    signal_notes = [
        "绿色 提升>5：显著学习获得感",
        "黄色 提升2-5：中度提升",
        "红色 提升<2：提升有限，需关注",
    ]
    for i, n in enumerate(signal_notes):
        r = 17 + i
        rows.append(f'<row r="{r}" ht="20" customHeight="1">'
                    f'{cstr(f"A{r}", S(n), 18)}'
                    + "".join(cempty(f"{col_letter(c)}{r}", 18) for c in range(2, 12))
                    + '</row>')

    body = "".join(rows)
    return f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
           xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView workbookViewId="0">
      <pane ySplit="5" xSplit="2" topLeftCell="C6" activePane="bottomRight" state="frozen"/>
    </sheetView>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25"
    xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols>
    <col min="1" max="1" width="13" customWidth="1"/>
    <col min="2" max="2" width="11" customWidth="1"/>
    <col min="3" max="3" width="13" customWidth="1"/>
    <col min="4" max="8" width="12" customWidth="1"/>
    <col min="9" max="9" width="15" customWidth="1"/>
    <col min="10" max="10" width="15" customWidth="1"/>
    <col min="11" max="11" width="11" customWidth="1"/>
  </cols>
  <sheetData>{body}</sheetData>
  <conditionalFormatting sqref="I6:I12">
    <cfRule type="cellIs" priority="1" operator="lessThan" dxfId="0">
      <formula>2</formula>
      <color rgb="00C00000"/>
    </cfRule>
    <cfRule type="cellIs" priority="2" operator="between" dxfId="0">
      <formula>2</formula>
      <formula>5</formula>
      <color rgb="00E6B800"/>
    </cfRule>
    <cfRule type="cellIs" priority="3" operator="greaterThan" dxfId="0">
      <formula>5</formula>
      <color rgb="00008000"/>
    </cfRule>
  </conditionalFormatting>
  <dataValidations count="1">
    <dataValidation type="list" allowBlank="1" showInputMessage="1" showErrorMessage="1" sqref="K6:K12">
      <formula1>&quot;已提交,未提交,超时&quot;</formula1>
    </dataValidation>
  </dataValidations>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>
'''

# ============================================================
# Sheet 4
# ============================================================
def build_sheet4():
    rows = []
    title = S("04_课中观察_汇总 · 讲师对学员的实时观察（Day1 + Day2 汇总）")
    rows.append(f'<row r="1" ht="32" customHeight="1">'
                f'{cstr("A1", title, 13)}'
                + "".join(cempty(f"{col_letter(c)}1", 13) for c in range(2, 12))
                + '</row>')

    sub = S("参与度 1-5 · 情绪 1-5 · 风险 绿/黄/橙/红 · 工具练习完成度 0-1")
    rows.append(f'<row r="2" ht="22" customHeight="1">'
                f'{cstr("A2", sub, 14)}'
                + "".join(cempty(f"{col_letter(c)}2", 14) for c in range(2, 12))
                + '</row>')

    rows.append('<row r="3"/>')

    rows.append(f'<row r="4" ht="22" customHeight="1">'
                f'{cstr("A4", S("数据录入区"), 15)}'
                + "".join(cempty(f"{col_letter(c)}4", 15) for c in range(2, 12))
                + '</row>')

    headers = ["学员编号", "姓名", "参与度均值", "开场情绪", "中场情绪", "结尾情绪",
               "情绪曲线均值", "工具练习完成度", "风险预警等级", "关键学习时刻", "课中状态"]
    cells = "".join(cstr(f"{col_letter(i+1)}5", S(h), 15) for i, h in enumerate(headers))
    rows.append(f'<row r="5" ht="36" customHeight="1">{cells}</row>')

    for i, row in enumerate(OBS_DATA):
        r = 6 + i
        eng, e1, e2, e3, tool, risk, moment, status = row
        cells = []
        stu_id = STUDENTS[i][0]
        cells.append(cstr(f"A{r}", S(stu_id), 1))
        cells.append(cstr(f"B{r}", S(STUDENTS[i][1]), 1))
        cells.append(cdec(f"C{r}", eng, 35))
        cells.append(cnum(f"D{r}", e1, 36))
        cells.append(cnum(f"E{r}", e2, 36))
        cells.append(cnum(f"F{r}", e3, 36))
        cells.append(cformula(f"G{r}", f"AVERAGE(D{r}:F{r})", 37))
        cells.append(cpct(f"H{r}", tool, 7))
        cells.append(cstr(f"I{r}", S(risk), 26))
        cells.append(cstr(f"J{r}", S(moment), 1))
        cells.append(cstr(f"K{r}", S(status), 26))
        rows.append(f'<row r="{r}" ht="20" customHeight="1">{"".join(cells)}</row>')

    # Row 13: 班级均值
    cells = [cstr("A13", S("班级均值"), 16), cempty("B13", 22),
             cformula("C13", "AVERAGE(C6:C12)", 37),
             cformula("D13", "AVERAGE(D6:D12)", 27),
             cformula("E13", "AVERAGE(E6:E12)", 27),
             cformula("F13", "AVERAGE(F6:F12)", 27),
             cformula("G13", "AVERAGE(G6:G12)", 37),
             cformula("H13", "AVERAGE(H6:H12)", 8),
             cempty("I13", 22), cempty("J13", 22), cempty("K13", 22)]
    rows.append(f'<row r="13" ht="22" customHeight="1">{"".join(cells)}</row>')

    rows.append(f'<row r="14" ht="22" customHeight="1">'
                f'{cstr("A14", S("橙/红预警数"), 16)}'
                f'{cempty("B14", 22)}'
                f'{cstr("C14", S("= COUNTIF(I6:I12, \"橙\")+COUNTIF(I6:I12, \"红\")"), 22)}'
                f'{cstr("D14", S("人"), 16)}'
                + "".join(cempty(f"{col_letter(c)}14", 22) for c in range(5, 12))
                + '</row>')

    rows.append('<row r="15"/>')
    rows.append(f'<row r="16" ht="20" customHeight="1">'
                f'{cstr("A16", S("风险信号灯说明"), 15)}'
                + "".join(cempty(f"{col_letter(c)}16", 15) for c in range(2, 12))
                + '</row>')

    notes = [
        "绿色 健康：全程高参与度 + 情绪曲线平稳",
        "黄色 关注：偶有分心但可调整",
        "橙色 风险：明显分心或情绪异常，需 1对1 沟通",
        "红色 危机：拒绝参与或情绪崩溃，立即启动应急响应",
    ]
    for i, n in enumerate(notes):
        r = 17 + i
        rows.append(f'<row r="{r}" ht="20" customHeight="1">'
                    f'{cstr(f"A{r}", S(n), 18)}'
                    + "".join(cempty(f"{col_letter(c)}{r}", 18) for c in range(2, 12))
                    + '</row>')

    body = "".join(rows)
    return f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
           xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView workbookViewId="0">
      <pane ySplit="5" xSplit="2" topLeftCell="C6" activePane="bottomRight" state="frozen"/>
    </sheetView>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25"
    xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols>
    <col min="1" max="1" width="13" customWidth="1"/>
    <col min="2" max="2" width="11" customWidth="1"/>
    <col min="3" max="3" width="13" customWidth="1"/>
    <col min="4" max="6" width="11" customWidth="1"/>
    <col min="7" max="7" width="13" customWidth="1"/>
    <col min="8" max="8" width="15" customWidth="1"/>
    <col min="9" max="9" width="13" customWidth="1"/>
    <col min="10" max="10" width="28" customWidth="1"/>
    <col min="11" max="11" width="11" customWidth="1"/>
  </cols>
  <sheetData>{body}</sheetData>
  <conditionalFormatting sqref="C6:C12">
    <cfRule type="cellIs" priority="1" operator="lessThan" dxfId="0">
      <formula>3</formula>
      <color rgb="00C00000"/>
    </cfRule>
    <cfRule type="cellIs" priority="2" operator="between" dxfId="0">
      <formula>3</formula>
      <formula>4</formula>
      <color rgb="00E6B800"/>
    </cfRule>
    <cfRule type="cellIs" priority="3" operator="greaterThan" dxfId="0">
      <formula>4</formula>
      <color rgb="00008000"/>
    </cfRule>
  </conditionalFormatting>
  <dataValidations count="2">
    <dataValidation type="list" allowBlank="1" showInputMessage="1" showErrorMessage="1" sqref="I6:I12">
      <formula1>&quot;绿,黄,橙,红&quot;</formula1>
    </dataValidation>
    <dataValidation type="list" allowBlank="1" showInputMessage="1" showErrorMessage="1" sqref="K6:K12">
      <formula1>&quot;已完成,待跟进&quot;</formula1>
    </dataValidation>
  </dataValidations>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>
'''

# ============================================================
# Sheet 5
# ============================================================
def build_sheet5():
    rows = []
    title = S("05_30-90天追踪_行为转化与结果 · 训后行为转化（30天） + 业务结果（90天）")
    rows.append(f'<row r="1" ht="32" customHeight="1">'
                f'{cstr("A1", title, 13)}'
                + "".join(cempty(f"{col_letter(c)}1", 13) for c in range(2, 24))
                + '</row>')

    sub = S("30天清单执行率 = 4区域平均 · 90天综合得分 = 工具持续30% + 留存30% + 1v1质量20% + 冲突减少20%")
    rows.append(f'<row r="2" ht="22" customHeight="1">'
                f'{cstr("A2", sub, 14)}'
                + "".join(cempty(f"{col_letter(c)}2", 14) for c in range(2, 24))
                + '</row>')

    rows.append('<row r="3"/>')

    rows.append(f'<row r="4" ht="22" customHeight="1">'
                f'{cstr("A4", S("数据录入区"), 15)}'
                + "".join(cempty(f"{col_letter(c)}4", 15) for c in range(2, 24))
                + '</row>')

    headers = [
        "学员编号", "姓名",
        "30天清单执行率_选人用人", "30天清单执行率_赋能授权", "30天清单执行率_评估激励", "30天清单执行率_沟通协调",
        "30天清单执行率_综合", "30天工具使用率", "30天下属满意度", "30天困难强度", "30天提交状态",
        "90天工具持续率", "90天Z世代员工留存", "90天1v1质量", "90天冲突次数", "90天冲突减少率", "90天NPS", "90天业务结果评分",
        "90天综合得分", "主管评价", "下属评价", "90天提交状态", "综合跟进状态"
    ]
    cells = "".join(cstr(f"{col_letter(i+1)}5", S(h), 15) for i, h in enumerate(headers))
    rows.append(f'<row r="5" ht="48" customHeight="1">{cells}</row>')

    BASELINE_CONFLICT = 5
    for i, t in enumerate(TRACK_DATA):
        r = 6 + i
        (p1, p2, p3, p4, p5, d_sat, diff, s30,
         t90, r90, q90, c90, nps, biz, sup, sub_ev, s90) = t
        cells = []
        stu = STUDENTS[i]
        cells.append(cstr(f"A{r}", S(stu[0]), 1))
        cells.append(cstr(f"B{r}", S(stu[1]), 1))
        for j, v in enumerate([p1, p2, p3, p4]):
            cells.append(cpct(f"{col_letter(3+j)}{r}", v, 7))
        cells.append(cformula(f"G{r}", f"AVERAGE(C{r}:F{r})", 30))
        cells.append(cpct(f"H{r}", p5, 7))
        cells.append(cnum(f"I{r}", d_sat, 36))
        cells.append(cnum(f"J{r}", diff, 36))
        cells.append(cstr(f"K{r}", S(s30), 26))
        cells.append(cpct(f"L{r}", t90, 7))
        cells.append(cpct(f"M{r}", r90, 7))
        cells.append(cnum(f"N{r}", q90, 36))
        cells.append(cnum(f"O{r}", c90, 36))
        cells.append(cformula(f"P{r}", f"({BASELINE_CONFLICT}-O{r})/{BASELINE_CONFLICT}", 30))
        cells.append(cnum(f"Q{r}", nps, 36))
        cells.append(cdec(f"R{r}", biz, 35))
        cells.append(cformula(f"S{r}", f"L{r}*100*0.3+M{r}*100*0.3+(N{r}/5)*100*0.2+P{r}*100*0.2", 23))
        cells.append(cstr(f"T{r}", S(sup), 1))
        cells.append(cstr(f"U{r}", S(sub_ev), 1))
        cells.append(cstr(f"V{r}", S(s90), 26))
        cells.append(cformula(f"W{r}", f'IF(S{r}>=70,"已完成",IF(S{r}>=50,"待跟进","已关注"))', 26))
        rows.append(f'<row r="{r}" ht="22" customHeight="1">{"".join(cells)}</row>')

    # Row 13: 班级均值
    avg_cells = [cstr("A13", S("班级均值"), 16), cempty("B13", 22)]
    for col in range(3, 24):
        colL = col_letter(col)
        if col in (3, 4, 5, 6, 7, 8, 12, 13, 16):  # percentages
            avg_cells.append(cformula(f"{colL}13", f"AVERAGE({colL}6:{colL}12)", 30))
        elif col in (9, 10, 14, 15, 17):  # integers
            avg_cells.append(cformula(f"{colL}13", f"AVERAGE({colL}6:{colL}12)", 27))
        elif col in (18, 19):  # 1 decimal
            avg_cells.append(cformula(f"{colL}13", f"AVERAGE({colL}6:{colL}12)", 37))
        else:
            avg_cells.append(cempty(f"{colL}13", 22))
    rows.append(f'<row r="13" ht="22" customHeight="1">{"".join(avg_cells)}</row>')

    rows.append(f'<row r="14" ht="22" customHeight="1">'
                f'{cstr("A14", S("30天回收率"), 16)}'
                f'{cempty("B14", 22)}'
                f'{cstr("C14", S("= COUNTIF(K6:K12, \"已提交\")/7"), 22)}'
                f'{cstr("D14", S("目标 ≥70%"), 16)}'
                + "".join(cempty(f"{col_letter(c)}14", 22) for c in range(5, 24))
                + '</row>')

    rows.append(f'<row r="15" ht="22" customHeight="1">'
                f'{cstr("A15", S("90天回收率"), 16)}'
                f'{cempty("B15", 22)}'
                f'{cstr("C15", S("= COUNTIF(V6:V12, \"已提交\")/7"), 22)}'
                f'{cstr("D15", S("目标 ≥60%"), 16)}'
                + "".join(cempty(f"{col_letter(c)}15", 22) for c in range(5, 24))
                + '</row>')

    rows.append('<row r="16"/>')

    rows.append(f'<row r="17" ht="20" customHeight="1">'
                f'{cstr("A17", S("90天综合得分公式"), 15)}'
                + "".join(cempty(f"{col_letter(c)}17", 15) for c in range(2, 24))
                + '</row>')

    formulas = [
        "工具持续率 30%  → L 列（% 表示）",
        "Z世代员工留存 30%  → M 列（% 表示）",
        "1v1 质量 20%  → N 列（满分 5 分，按比例换算 100 分）",
        "冲突减少率 20%  → P 列 = (基线5次 - 当前冲突次数) / 5",
        "总分范围：0-100。≥70 已完成 / 50-70 待跟进 / <50 已关注",
    ]
    for i, n in enumerate(formulas):
        r = 18 + i
        rows.append(f'<row r="{r}" ht="20" customHeight="1">'
                    f'{cstr(f"A{r}", S(n), 18)}'
                    + "".join(cempty(f"{col_letter(c)}{r}", 18) for c in range(2, 24))
                    + '</row>')

    body = "".join(rows)
    return f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
           xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView workbookViewId="0">
      <pane ySplit="5" xSplit="2" topLeftCell="C6" activePane="bottomRight" state="frozen"/>
    </sheetView>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25"
    xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols>
    <col min="1" max="1" width="13" customWidth="1"/>
    <col min="2" max="2" width="11" customWidth="1"/>
    <col min="3" max="6" width="14" customWidth="1"/>
    <col min="7" max="7" width="15" customWidth="1"/>
    <col min="8" max="8" width="14" customWidth="1"/>
    <col min="9" max="9" width="14" customWidth="1"/>
    <col min="10" max="10" width="14" customWidth="1"/>
    <col min="11" max="11" width="12" customWidth="1"/>
    <col min="12" max="13" width="14" customWidth="1"/>
    <col min="14" max="14" width="12" customWidth="1"/>
    <col min="15" max="15" width="12" customWidth="1"/>
    <col min="16" max="16" width="14" customWidth="1"/>
    <col min="17" max="17" width="11" customWidth="1"/>
    <col min="18" max="18" width="15" customWidth="1"/>
    <col min="19" max="19" width="14" customWidth="1"/>
    <col min="20" max="21" width="20" customWidth="1"/>
    <col min="22" max="23" width="12" customWidth="1"/>
  </cols>
  <sheetData>{body}</sheetData>
  <conditionalFormatting sqref="G6:G12">
    <cfRule type="cellIs" priority="1" operator="lessThan" dxfId="0">
      <formula>0.5</formula>
      <color rgb="00C00000"/>
    </cfRule>
    <cfRule type="cellIs" priority="2" operator="between" dxfId="0">
      <formula>0.5</formula>
      <formula>0.7</formula>
      <color rgb="00E6B800"/>
    </cfRule>
    <cfRule type="cellIs" priority="3" operator="greaterThan" dxfId="0">
      <formula>0.7</formula>
      <color rgb="00008000"/>
    </cfRule>
  </conditionalFormatting>
  <conditionalFormatting sqref="Q6:Q12">
    <cfRule type="cellIs" priority="1" operator="lessThan" dxfId="0">
      <formula>30</formula>
      <color rgb="00C00000"/>
    </cfRule>
    <cfRule type="cellIs" priority="2" operator="between" dxfId="0">
      <formula>30</formula>
      <formula>50</formula>
      <color rgb="00E6B800"/>
    </cfRule>
    <cfRule type="cellIs" priority="3" operator="greaterThan" dxfId="0">
      <formula>50</formula>
      <color rgb="00008000"/>
    </cfRule>
  </conditionalFormatting>
  <dataValidations count="4">
    <dataValidation type="list" allowBlank="1" showInputMessage="1" showErrorMessage="1" sqref="K6:K12">
      <formula1>&quot;已提交,未提交,超时&quot;</formula1>
    </dataValidation>
    <dataValidation type="list" allowBlank="1" showInputMessage="1" showErrorMessage="1" sqref="V6:V12">
      <formula1>&quot;已提交,未提交,超时&quot;</formula1>
    </dataValidation>
    <dataValidation type="list" allowBlank="1" showInputMessage="1" showErrorMessage="1" sqref="T6:T12">
      <formula1>&quot;管理明显改善,管理有所改善,变化不明显&quot;</formula1>
    </dataValidation>
    <dataValidation type="list" allowBlank="1" showInputMessage="1" showErrorMessage="1" sqref="U6:U12">
      <formula1>&quot;员工反馈积极,员工反馈中性,员工有保留&quot;</formula1>
    </dataValidation>
  </dataValidations>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>
'''

# ============================================================
# Sheet 6
# ============================================================
def build_sheet6():
    rows = []
    title = S("06_汇总分析与报告 · 班级整体指标 + 高困境预警 + 课程ROI")
    rows.append(f'<row r="1" ht="32" customHeight="1">'
                f'{cstr("A1", title, 13)}'
                + "".join(cempty(f"{col_letter(c)}1", 13) for c in range(2, 8))
                + '</row>')

    sub = S("所有指标基于 Sheet 2-5 真实数据自动聚合 · 修改源数据后此页同步刷新")
    rows.append(f'<row r="2" ht="22" customHeight="1">'
                f'{cstr("A2", sub, 14)}'
                + "".join(cempty(f"{col_letter(c)}2", 14) for c in range(2, 8))
                + '</row>')

    rows.append('<row r="3"/>')

    rows.append(f'<row r="4" ht="24" customHeight="1">'
                f'{cstr("A4", S("区块 A：班级整体指标"), 15)}'
                + "".join(cempty(f"{col_letter(c)}4", 15) for c in range(2, 8))
                + '</row>')

    a_headers = ["指标", "数值", "目标", "状态"]
    cells = "".join(cstr(f"{col_letter(i+1)}5", S(h), 28) for i, h in enumerate(a_headers))
    rows.append(f'<row r="5" ht="22" customHeight="1">{cells}</row>')

    a_rows = [
        ("参训人数",          "COUNTA('01_学员名册与编号'!B7:B13)",     "≥10人",  'IF(B6>=10,"达标","不足")', 27),
        ("前测回收率",        "COUNTIF('02_前测数据_五感诊断'!R6:R12,\"已提交\")/7", "≥95%", 'IF(B7>=0.95,"达标","待催")', 30),
        ("后测回收率",        "COUNTIF('03_后测数据_管理行为变化'!K6:K12,\"已提交\")/7", "≥95%", 'IF(B8>=0.95,"达标","待催")', 30),
        ("30天回收率",        "COUNTIF('05_30-90天追踪'!K6:K12,\"已提交\")/7", "≥70%", 'IF(B9>=0.7,"达标","待催")', 30),
        ("90天回收率",        "COUNTIF('05_30-90天追踪'!V6:V12,\"已提交\")/7", "≥60%", 'IF(B10>=0.6,"达标","待催")', 30),
        ("前测班级均分",      "AVERAGE('02_前测数据_五感诊断'!H6:H12)", "—",     'IF(B11>=18,"健康",IF(B11>=12,"中等","高困境"))', 37),
        ("后测班级均分",      "AVERAGE('03_后测数据_管理行为变化'!C6:C12)", "≥20", 'IF(B12>=20,"达标","待提升")', 37),
        ("平均五感提升",      "AVERAGE('03_后测数据_管理行为变化'!I6:I12)", "≥5",   'IF(B13>=5,"显著",IF(B13>=2,"中等","有限"))', 37),
        ("学习获得感指数",    "AVERAGE('03_后测数据_管理行为变化'!J6:J12)", "≥20%", 'IF(B14>=0.2,"达标","待提升")', 30),
        ("满意度均值",        "AVERAGE('03_后测数据_管理行为变化'!G6:G12)", "≥4.5", 'IF(B15>=4.5,"达标","待提升")', 37),
        ("迁移意图均值",      "AVERAGE('03_后测数据_管理行为变化'!H6:H12)", "≥4.0", 'IF(B16>=4,"达标","待提升")', 37),
        ("班级整体NPS",       "AVERAGE('05_30-90天追踪'!Q6:Q12)",        "≥40",   'IF(B17>=40,"达标","待提升")', 27),
        ("行为衰减学员数",    "COUNTIF('05_30-90天追踪'!W6:W12,\"已关注\")", "≤2",   'IF(B18<=2,"健康","需关注")', 27),
        ("行为巩固学员数",    "COUNTIF('05_30-90天追踪'!W6:W12,\"已完成\")", "≥4",   'IF(B19>=4,"达标","待提升")', 27),
        ("高困境学员数",      "COUNTIF('02_前测数据_五感诊断'!H6:H12,\"<12\")", "≤2",  'IF(B20<=2,"健康","需关注")', 27),
        ("课程ROI估算",       "(B12-B11)/B11*0.3+0.7",                  "≥1.0",  'IF(B21>=1,"达标","待提升")', 37),
    ]
    for i, (label, f, target, sf, st) in enumerate(a_rows):
        r = 6 + i
        cells = [cstr(f"A{r}", S(label), 18),
                 cformula(f"B{r}", f, st),
                 cstr(f"C{r}", S(target), 19),
                 cformula(f"D{r}", sf, 26)]
        rows.append(f'<row r="{r}" ht="20" customHeight="1">{"".join(cells)}</row>')

    b_start = 6 + len(a_rows) + 2
    rows.append(f'<row r="{b_start-1}" ht="24" customHeight="1">'
                f'{cstr(f"A{b_start-1}", S("区块 B：工具使用排名"), 15)}'
                + "".join(cempty(f"{col_letter(c)}{b_start-1}", 15) for c in range(2, 8))
                + '</row>')

    b_headers = ["工具名", "30天使用率", "90天持续使用率", "持续率排名"]
    cells = "".join(cstr(f"{col_letter(i+1)}{b_start}", S(h), 28) for i, h in enumerate(b_headers))
    rows.append(f'<row r="{b_start}" ht="22" customHeight="1">{cells}</row>')

    for i, (tn, u, ret) in enumerate(TOOL_USAGE):
        r = b_start + 1 + i
        cells = [cstr(f"A{r}", S(tn), 1),
                 cpct(f"B{r}", u, 7),
                 cpct(f"C{r}", ret, 7),
                 cformula(f"D{r}", f"RANK(C{r},$C${b_start+1}:$C${b_start+len(TOOL_USAGE)},0)", 27)]
        rows.append(f'<row r="{r}" ht="20" customHeight="1">{"".join(cells)}</row>')

    c_start = b_start + len(TOOL_USAGE) + 2
    rows.append(f'<row r="{c_start-1}" ht="24" customHeight="1">'
                f'{cstr(f"A{c_start-1}", S("区块 C：高困境学员预警"), 15)}'
                + "".join(cempty(f"{col_letter(c)}{c_start-1}", 15) for c in range(2, 8))
                + '</row>')

    c_headers = ["学员编号", "姓名", "前测五感总分", "自评-下属评差距", "风险等级", "HRBP跟进状态", "跟进建议"]
    cells = "".join(cstr(f"{col_letter(i+1)}{c_start}", S(h), 28) for i, h in enumerate(c_headers))
    rows.append(f'<row r="{c_start}" ht="22" customHeight="1">{cells}</row>')

    for i, stu in enumerate(STUDENTS):
        r = c_start + 1 + i
        sid, name = stu[0], stu[1]
        cells = [cstr(f"A{r}", S(sid), 1),
                 cstr(f"B{r}", S(name), 1),
                 cgreen(f"C{r}", f"VLOOKUP(A{r},'02_前测数据_五感诊断'!A6:H12,8,0)", 23),
                 cgreen(f"D{r}", f"VLOOKUP(A{r},'02_前测数据_五感诊断'!A6:O12,15,0)", 23),
                 cformula(f"E{r}", f'IF(C{r}<12,"红",IF(OR(C{r}<18,D{r}>5),"黄",IF(D{r}>5,"橙","绿")))', 26),
                 cstr(f"F{r}", S("待跟进"), 26),
                 cformula(f"G{r}", f'IF(C{r}<12,"建议加配辅导资源",IF(D{r}>5,"建议再次面谈",IF(C{r}<18,"建议HRBP介入","建议持续观察")))', 1)]
        rows.append(f'<row r="{r}" ht="22" customHeight="1">{"".join(cells)}</row>')

    d_start = c_start + 1 + len(STUDENTS) + 2
    rows.append(f'<row r="{d_start-1}" ht="24" customHeight="1">'
                f'{cstr(f"A{d_start-1}", S("区块 D：建议输出"), 15)}'
                + "".join(cempty(f"{col_letter(c)}{d_start-1}", 15) for c in range(2, 8))
                + '</row>')

    d_headers = ["项目", "数值/结论", "行动建议"]
    cells = "".join(cstr(f"{col_letter(i+1)}{d_start}", S(h), 28) for i, h in enumerate(d_headers))
    rows.append(f'<row r="{d_start}" ht="22" customHeight="1">{cells}</row>')

    d_rows = [
        ("班级整体得分",        "B19",                                  "≥4 健康，3-4 待提升，<3 需重新审视课程设计"),
        ("工具渗透率Top1",      f"INDEX(A{b_start+1}:A{b_start+len(TOOL_USAGE)},MATCH(MAX(C{b_start+1}:C{b_start+len(TOOL_USAGE)}),C{b_start+1}:C{b_start+len(TOOL_USAGE)},0))",  "重点保留并在下一班级强化"),
        ("工具渗透率Bottom1",   f"INDEX(A{b_start+1}:A{b_start+len(TOOL_USAGE)},MATCH(MIN(C{b_start+1}:C{b_start+len(TOOL_USAGE)}),C{b_start+1}:C{b_start+len(TOOL_USAGE)},0))",  "诊断：复杂度/示范/适用边界"),
        ("NPS解读",             "IF(B17>=40,\"高推荐意愿\",IF(B17>=0,\"中性\",\"低推荐意愿\"))",  "高推荐可作标杆案例"),
        ("回收率解读",          "IF(B10>=0.6,\"90天回收率达标\",IF(B9>=0.7,\"30天达标，90天待提升\",\"30天未达标\"))",  "未达标者加强问责伙伴机制"),
        ("重点跟进学员",        "COUNTIF('05_30-90天追踪'!W6:W12,\"已关注\")+COUNTIF('05_30-90天追踪'!W6:W12,\"待跟进\")",  "HRBP 1对1 + 线上答疑会"),
        ("课程ROI",             "B21",                                   "≥1.0 达标，<1.0 需重新设计"),
    ]
    for i, (label, val_f, sug) in enumerate(d_rows):
        r = d_start + 1 + i
        cells = [cstr(f"A{r}", S(label), 18),
                 cformula(f"B{r}", val_f, 22),
                 cstr(f"C{r}", S(sug), 18)]
        rows.append(f'<row r="{r}" ht="22" customHeight="1">{"".join(cells)}</row>')

    body = "".join(rows)
    return f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
           xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView tabSelected="0" workbookViewId="0">
      <pane ySplit="4" topLeftCell="A5" activePane="bottomLeft" state="frozen"/>
    </sheetView>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25"
    xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols>
    <col min="1" max="1" width="22" customWidth="1"/>
    <col min="2" max="2" width="18" customWidth="1"/>
    <col min="3" max="3" width="14" customWidth="1"/>
    <col min="4" max="4" width="14" customWidth="1"/>
    <col min="5" max="5" width="14" customWidth="1"/>
    <col min="6" max="6" width="18" customWidth="1"/>
    <col min="7" max="7" width="36" customWidth="1"/>
  </cols>
  <sheetData>{body}</sheetData>
  <dataValidations count="1">
    <dataValidation type="list" allowBlank="1" showInputMessage="1" showErrorMessage="1" sqref="F{c_start+1}:F{c_start+7}">
      <formula1>&quot;待跟进,已关注,无需跟进&quot;</formula1>
    </dataValidation>
  </dataValidations>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>
'''

# ============================================================
# Main
# ============================================================
def main():
    print(f"Total shared strings: {len(SHARED)}")

    (WORK / "xl" / "sharedStrings.xml").write_text(build_sharedstrings(), encoding="utf-8")
    (WORK / "xl" / "styles.xml").write_text(STYLES_XML, encoding="utf-8")
    (WORK / "xl" / "workbook.xml").write_text(WORKBOOK_XML, encoding="utf-8")
    (WORK / "xl" / "_rels" / "workbook.xml.rels").write_text(WORKBOOK_RELS, encoding="utf-8")
    (WORK / "[Content_Types].xml").write_text(CONTENT_TYPES, encoding="utf-8")
    (WORK / "xl" / "worksheets" / "sheet1.xml").write_text(build_sheet1(), encoding="utf-8")
    (WORK / "xl" / "worksheets" / "sheet2.xml").write_text(build_sheet2(), encoding="utf-8")
    (WORK / "xl" / "worksheets" / "sheet3.xml").write_text(build_sheet3(), encoding="utf-8")
    (WORK / "xl" / "worksheets" / "sheet4.xml").write_text(build_sheet4(), encoding="utf-8")
    (WORK / "xl" / "worksheets" / "sheet5.xml").write_text(build_sheet5(), encoding="utf-8")
    (WORK / "xl" / "worksheets" / "sheet6.xml").write_text(build_sheet6(), encoding="utf-8")

    if OUT_XLSX.exists():
        OUT_XLSX.unlink()
    OUT_XLSX.parent.mkdir(parents=True, exist_ok=True)

    with zipfile.ZipFile(OUT_XLSX, "w", zipfile.ZIP_DEFLATED) as zf:
        for root, _, files in os.walk(WORK):
            for f in files:
                full = Path(root) / f
                arcname = full.relative_to(WORK).as_posix()
                zf.write(full, arcname)

    print(f"Wrote: {OUT_XLSX}")
    print(f"Size: {OUT_XLSX.stat().st_size:,} bytes")

if __name__ == "__main__":
    main()
