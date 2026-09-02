#!/usr/bin/env python3
"""创建《用AI传承部门能力——管理者AI课》配套表单"""

import os
import zipfile
from pathlib import Path

# 输出目录
OUT_DIR = Path("D:/新课开发/管理者的AI课/C-AI传承部门能力-共读型教学文档/全流程工具表单")
OUT_DIR.mkdir(parents=True, exist_ok=True)

# 模板样式 - 13个标准样式槽
STYLES_XML = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <numFmts count="4">
    <numFmt numFmtId="164" formatCode="$#,##0;($#,##0);&quot;-&quot;"/>
    <numFmt numFmtId="165" formatCode="0.0%"/>
    <numFmt numFmtId="166" formatCode="0.0x"/>
    <numFmt numFmtId="167" formatCode="#,##0"/>
  </numFmts>
  <fonts count="6">
    <font><sz val="11"/><name val="Calibri"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="000000FF"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="00000000"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="00008000"/></font>
    <font><sz val="11"/><name val="Calibri"/><b/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="000000FF"/><b/></font>
  </fonts>
  <fills count="3">
    <fill><patternFill patternType="none"/></fill>
    <fill><patternFill patternType="gray125"/></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="00D6E4C0"/></patternFill></fill>
  </fills>
  <borders count="1">
    <border><left/><right/><top/><bottom/><diagonal/></border>
  </borders>
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
    <xf numFmtId="0" fontId="5" fillId="2" borderId="0" xfId="0" applyFont="1" applyFill="1"/>
  </cellXfs>
</styleSheet>'''

def make_sheet_xml(rows, cols_config=""):
    """生成sheet XML"""
    return f'''<?xml version="1.0" encoding="utf-8"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <sheetViews>
    <sheetView workbookViewId="0">
      <pane ySplit="1" topLeftCell="A2" activePane="bottomLeft" state="frozen"/>
    </sheetView>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="18"/>
  {cols_config}
  <sheetData>
{rows}
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

def make_row(r, cells, ht=None):
    """生成行 XML"""
    ht_attr = f' ht="{ht}" customHeight="1"' if ht else ''
    return f'    <row r="{r}"{ht_attr}>\n' + cells + '\n    </row>'

def make_cell(addr, s, text, t="inlineStr"):
    """生成单元格 XML"""
    if t == "inlineStr":
        return f'      <c r="{addr}" s="{s}" t="inlineStr"><is><t>{text}</t></is></c>'
    else:
        return f'      <c r="{addr}" s="{s}"><v>{text}</v></c>'

def make_header_row(num_cols, headers, start_col="A"):
    """生成表头行"""
    cells = ""
    for i, h in enumerate(headers):
        col = chr(ord(start_col) + i)
        cells += make_cell(f"{col}1", 4, h) + "\n"
    return make_row(1, cells.rstrip(), ht="24")

def make_data_row(r, values, styles, start_col="A"):
    """生成数据行"""
    cells = ""
    for i, v in enumerate(values):
        col = chr(ord(start_col) + i)
        s = styles[i] if i < len(styles) else 0
        if v == "":
            cells += f'      <c r="{col}{r}"/>\n'
        else:
            cells += make_cell(f"{col}{r}", s, v) + "\n"
    return make_row(r, cells.rstrip())

# ====== 文件1: 团队知识台账.xlsx ======
def create_team_knowledge_base():
    """创建团队知识台账.xlsx"""
    sheets = {}

    # Sheet 1: 规则库台账
    headers = ["规则编号", "规则类型", "触发条件", "结论/行动", "约束条件", "优先级", "状态"]
    rows = make_header_row(7, headers)

    # 示例数据行
    sample_data = [
        (["R001", "决策规则", "下属提出多个方案时", "要求先给出推荐意见及理由", "时间紧迫时可先执行后补充", "高", "待审核"], [1,1,1,1,1,1,1]),
        (["R002", "流程规则", "跨部门协作出现分歧", "升级至共同上级协调", "涉及重大利益时可直接升级", "中", "已生效"], [1,1,1,1,1,1,1]),
        (["R003", "沟通规则", "外部客户投诉", "24小时内必须响应", "重大投诉需总监级别介入", "高", "已生效"], [1,1,1,1,1,1,1]),
    ]

    for i, (data, styles) in enumerate(sample_data, start=2):
        rows += make_data_row(i, data, styles)

    # 空行用于填写
    for i in range(len(sample_data)+2, 22):
        rows += make_data_row(i, [""] * 7, [0] * 7)

    cols_config = '''  <cols>
    <col width="10" customWidth="1" min="1" max="1"/>
    <col width="12" customWidth="1" min="2" max="2"/>
    <col width="25" customWidth="1" min="3" max="3"/>
    <col width="30" customWidth="1" min="4" max="4"/>
    <col width="25" customWidth="1" min="5" max="5"/>
    <col width="8" customWidth="1" min="6" max="6"/>
    <col width="10" customWidth="1" min="7" max="7"/>
  </cols>'''
    sheets["规则库台账"] = make_sheet_xml(rows, cols_config)

    # Sheet 2: 案例库台账
    headers2 = ["案例编号", "案例背景", "关键信号", "判断过程", "结果", "原因说明"]
    rows2 = make_header_row(6, headers2)

    sample_data2 = [
        (["C001", "团队目标无法达成", "成员频繁加班但产出低", "识别到流程瓶颈而非能力问题", "调整工作流程", "资源分配不合理"], [1,1,1,1,1,1]),
        (["C002", "跨部门项目延期", "其他部门配合度低", "未提前明确责任边界", "重新制定RACI矩阵", "职责不清"], [1,1,1,1,1,1]),
    ]

    for i, (data, styles) in enumerate(sample_data2, start=2):
        rows2 += make_data_row(i, data, styles)

    for i in range(len(sample_data2)+2, 22):
        rows2 += make_data_row(i, [""] * 6, [0] * 6)

    cols_config2 = '''  <cols>
    <col width="10" customWidth="1" min="1" max="1"/>
    <col width="20" customWidth="1" min="2" max="2"/>
    <col width="25" customWidth="1" min="3" max="3"/>
    <col width="35" customWidth="1" min="4" max="4"/>
    <col width="20" customWidth="1" min="5" max="5"/>
    <col width="25" customWidth="1" min="6" max="6"/>
  </cols>'''
    sheets["案例库台账"] = make_sheet_xml(rows2, cols_config2)

    # Sheet 3: 模板库台账
    headers3 = ["模板编号", "模板类型", "模板内容", "适用场景"]
    rows3 = make_header_row(4, headers3)

    sample_data3 = [
        (["T001", "邮件模板", "主题：{目标} | 正文：{背景}...", "跨部门沟通"],
         [1,1,1,1]),
        (["T002", "会议议程", "1.{议题} 2.{议题}...", "周会/月会"],
         [1,1,1,1]),
    ]

    for i, (data, styles) in enumerate(sample_data3, start=2):
        rows3 += make_data_row(i, data, styles)

    for i in range(len(sample_data3)+2, 22):
        rows3 += make_data_row(i, [""] * 4, [0] * 4)

    cols_config3 = '''  <cols>
    <col width="10" customWidth="1" min="1" max="1"/>
    <col width="12" customWidth="1" min="2" max="2"/>
    <col width="50" customWidth="1" min="3" max="3"/>
    <col width="25" customWidth="1" min="4" max="4"/>
  </cols>'''
    sheets["模板库台账"] = make_sheet_xml(rows3, cols_config3)

    # Sheet 4: 更新记录
    headers4 = ["日期", "更新人", "更新内容", "版本号"]
    rows4 = make_header_row(4, headers4)

    for i in range(2, 22):
        rows4 += make_data_row(i, [""] * 4, [0] * 4)

    cols_config4 = '''  <cols>
    <col width="12" customWidth="1" min="1" max="1"/>
    <col width="12" customWidth="1" min="2" max="2"/>
    <col width="50" customWidth="1" min="3" max="3"/>
    <col width="10" customWidth="1" min="4" max="4"/>
  </cols>'''
    sheets["更新记录"] = make_sheet_xml(rows4, cols_config4)

    # 创建xlsx
    create_xlsx("团队知识台账.xlsx", sheets)

# ====== 文件2: 配套表单_空表.xlsx ======
def create_support_forms():
    """创建配套表单_空表.xlsx"""
    sheets = {}

    # F2_四维度评估表
    headers = ["维度", "评估项目", "评分标准", "分数", "备注"]
    rows = make_header_row(5, headers)

    dims = [
        ("效率提升", "任务完成时间缩短", "1-5分：5=缩短50%以上"),
        ("效率提升", "重复工作自动化率", "1-5分：5=80%以上"),
        ("质量提升", "输出准确率", "1-5分：5=95%以上"),
        ("质量提升", "一致性指标", "1-5分：5=高度一致"),
        ("能力传承", "知识文档完善度", "1-5分：5=完整可执行"),
        ("能力传承", "新人上手时间", "1-5分：5=缩短70%以上"),
        ("持续迭代", "月度更新频率", "1-5分：5=每月更新"),
        ("持续迭代", "迭代参与度", "1-5分：5=全员参与"),
    ]

    for i, (d, p, s) in enumerate(dims, start=2):
        rows += make_data_row(i, [d, p, s, "", ""], [1,1,1,1,1])

    # 合计行
    rows += make_row(11, make_cell("A11", 4, "合计") + "\n" + make_cell("D11", 6, "=SUM(D2:D9)"))

    cols_config = '''  <cols>
    <col width="12" customWidth="1" min="1" max="1"/>
    <col width="20" customWidth="1" min="2" max="2"/>
    <col width="30" customWidth="1" min="3" max="3"/>
    <col width="10" customWidth="1" min="4" max="4"/>
    <col width="20" customWidth="1" min="5" max="5"/>
  </cols>'''
    sheets["F2_四维度评估表"] = make_sheet_xml(rows, cols_config)

    # F3_访谈记录表
    headers3 = ["访谈对象", "职位", "访谈日期", "访谈人", "所属部门"]
    rows3 = make_header_row(5, headers3)
    rows3 += make_data_row(2, ["", "", "", "", ""], [1,1,1,1,1])
    rows3 += make_row(3, make_cell("A3", 4, "访谈内容"))
    rows3 += make_data_row(4, ["问题1：", "", "", "", ""], [1,0,0,0,0])
    rows3 += make_data_row(5, ["问题2：", "", "", "", ""], [1,0,0,0,0])
    rows3 += make_data_row(6, ["问题3：", "", "", "", ""], [1,0,0,0,0])
    rows3 += make_row(7, make_cell("A7", 4, "关键结论"))
    rows3 += make_data_row(8, ["", "", "", "", ""], [0,0,0,0,0])
    rows3 += make_data_row(9, ["", "", "", "", ""], [0,0,0,0,0])

    cols_config3 = '''  <cols>
    <col width="12" customWidth="1" min="1" max="1"/>
    <col width="15" customWidth="1" min="2" max="2"/>
    <col width="12" customWidth="1" min="3" max="3"/>
    <col width="12" customWidth="1" min="4" max="4"/>
    <col width="15" customWidth="1" min="5" max="5"/>
  </cols>'''
    sheets["F3_访谈记录表"] = make_sheet_xml(rows3, cols_config3)

    # F4_规则清单表
    headers4 = ["规则编号", "规则名称", "适用场景", "触发条件", "行动指引", "优先级", "状态", "负责人"]
    rows4 = make_header_row(8, headers4)

    for i in range(2, 22):
        rows4 += make_data_row(i, [""] * 8, [0] * 8)

    cols_config4 = '''  <cols>
    <col width="10" customWidth="1" min="1" max="1"/>
    <col width="15" customWidth="1" min="2" max="2"/>
    <col width="20" customWidth="1" min="3" max="3"/>
    <col width="25" customWidth="1" min="4" max="4"/>
    <col width="35" customWidth="1" min="5" max="5"/>
    <col width="8" customWidth="1" min="6" max="6"/>
    <col width="10" customWidth="1" min="7" max="7"/>
    <col width="12" customWidth="1" min="8" max="8"/>
  </cols>'''
    sheets["F4_规则清单表"] = make_sheet_xml(rows4, cols_config4)

    # F5_知识原型表
    headers5 = ["知识类型", "内容摘要", "来源", "可信度", "适用边界", "数字化形式"]
    rows5 = make_header_row(6, headers5)

    rows5 += make_row(2, make_cell("A2", 4, "显性知识"))
    rows5 += make_data_row(3, ["", "", "", "", "", ""], [0,0,0,0,0,0])
    rows5 += make_data_row(4, ["", "", "", "", "", ""], [0,0,0,0,0,0])

    rows5 += make_row(6, make_cell("A6", 4, "隐性知识"))
    rows5 += make_data_row(7, ["", "", "", "", "", ""], [0,0,0,0,0,0])
    rows5 += make_data_row(8, ["", "", "", "", "", ""], [0,0,0,0,0,0])

    rows5 += make_row(10, make_cell("A10", 4, "流程知识"))
    rows5 += make_data_row(11, ["", "", "", "", "", ""], [0,0,0,0,0,0])
    rows5 += make_data_row(12, ["", "", "", "", "", ""], [0,0,0,0,0,0])

    cols_config5 = '''  <cols>
    <col width="12" customWidth="1" min="1" max="1"/>
    <col width="25" customWidth="1" min="2" max="2"/>
    <col width="15" customWidth="1" min="3" max="3"/>
    <col width="10" customWidth="1" min="4" max="4"/>
    <col width="20" customWidth="1" min="5" max="5"/>
    <col width="20" customWidth="1" min="6" max="6"/>
  </cols>'''
    sheets["F5_知识原型表"] = make_sheet_xml(rows5, cols_config5)

    # F6_验收测试表
    headers6 = ["评估维度", "测试项目", "测试方法", "通过标准", "实际结果", "是否通过", "改进建议"]
    rows6 = make_header_row(7, headers6)

    tests = [
        ("准确性", "规则判断准确率", "抽样测试100条", ">=95%"),
        ("完整性", "知识覆盖度", "对比实际场景", ">=90%"),
        ("可执行性", "流程清晰度", "新人测试", "可独立执行"),
        ("效率提升", "时间节省", "前后对比", ">=30%"),
        ("用户满意度", "使用反馈", "问卷调查", ">=4分"),
    ]

    for i, (d, p, m, s) in enumerate(tests, start=2):
        rows6 += make_data_row(i, [d, p, m, s, "", "", ""], [1,1,1,1,1,1,1])

    cols_config6 = '''  <cols>
    <col width="12" customWidth="1" min="1" max="1"/>
    <col width="18" customWidth="1" min="2" max="2"/>
    <col width="20" customWidth="1" min="3" max="3"/>
    <col width="15" customWidth="1" min="4" max="4"/>
    <col width="15" customWidth="1" min="5" max="5"/>
    <col width="10" customWidth="1" min="6" max="6"/>
    <col width="20" customWidth="1" min="7" max="7"/>
  </cols>'''
    sheets["F6_验收测试表"] = make_sheet_xml(rows6, cols_config6)

    # F10_团队台账
    headers10 = ["知识资产类型", "数量", "最新更新日期", "负责人", "状态", "备注"]
    rows10 = make_header_row(6, headers10)

    assets = [
        ("规则", "", "", "", ""],
        ("案例", "", "", "", ""],
        ("模板", "", "", "", ""],
        ("流程", "", "", "", ""],
        ("其他", "", "", "", ""],
    ]

    for i, (a, *rest) in enumerate(assets, start=2):
        rows10 += make_data_row(i, [a] + rest, [1,1,1,1,1,1])

    rows10 += make_row(8, make_cell("A8", 4, "汇总"))
    rows10 += make_data_row(9, ["总数量", "=SUM(B2:B6)", "", "", "", ""], [1,6,0,0,0,0])

    cols_config10 = '''  <cols>
    <col width="15" customWidth="1" min="1" max="1"/>
    <col width="10" customWidth="1" min="2" max="2"/>
    <col width="15" customWidth="1" min="3" max="3"/>
    <col width="12" customWidth="1" min="4" max="4"/>
    <col width="10" customWidth="1" min="5" max="5"/>
    <col width="20" customWidth="1" min="6" max="6"/>
  </cols>'''
    sheets["F10_团队台账"] = make_sheet_xml(rows10, cols_config10)

    create_xlsx("配套表单_空表.xlsx", sheets)

# ====== 文件3: 表单使用指引.xlsx ======
def create_form_guide():
    """创建表单使用指引.xlsx"""
    sheets = {}

    # 总览
    rows = make_row(1, make_cell("A1", 4, "《用AI传承部门能力——管理者AI课》配套表单使用指引"))
    rows += make_row(2, make_cell("A2", 4, "版权声明：罗宏伟"))
    rows += make_row(4, make_cell("A4", 4, "表单清单"))
    rows += make_data_row(5, ["表单名称", "用途", "使用场景"], [1,1,1])
    rows += make_data_row(6, ["团队知识台账.xlsx", "沉淀团队规则、案例、模板", "日常知识管理"], [0,0,0])
    rows += make_data_row(7, ["配套表单_空表.xlsx", "配套练习使用", "课程学习过程"], [0,0,0])

    cols_config = '''  <cols>
    <col width="20" customWidth="1" min="1" max="1"/>
    <col width="30" customWidth="1" min="2" max="2"/>
    <col width="25" customWidth="1" min="3" max="3"/>
  </cols>'''
    sheets["总览"] = make_sheet_xml(rows, cols_config)

    # 团队知识台账指引
    rows2 = make_row(1, make_cell("A1", 4, "团队知识台账.xlsx 使用指引"))
    rows2 += make_data_row(2, ["表单", "用途", "填写说明"], [1,1,1])
    rows2 += make_data_row(3, ["规则库台账", "记录团队决策规则和行动准则", "1.规则编号格式：R+序号\n2.触发条件要具体可操作\n3.优先级：高/中/低\n4.状态：待审核/已生效/已废弃"], [0,0,0])
    rows2 += make_data_row(4, ["案例库台账", "记录典型问题处理案例", "1.案例编号格式：C+序号\n2.关键信号要可识别\n3.判断过程要详细\n4.原因说明要深入"], [0,0,0])
    rows2 += make_data_row(5, ["模板库台账", "记录可复用的模板", "1.模板编号格式：T+序号\n2.适用场景要明确\n3.模板内容要可直接使用"], [0,0,0])
    rows2 += make_data_row(6, ["更新记录", "记录知识库的变更历史", "每次更新都要记录，包括版本号"], [0,0,0])

    cols_config2 = '''  <cols>
    <col width="15" customWidth="1" min="1" max="1"/>
    <col width="20" customWidth="1" min="2" max="2"/>
    <col width="50" customWidth="1" min="3" max="3"/>
  </cols>'''
    sheets["团队知识台账指引"] = make_sheet_xml(rows2, cols_config2)

    # 配套表单指引
    rows3 = make_row(1, make_cell("A1", 4, "配套表单_空表.xlsx 使用指引"))
    rows3 += make_data_row(2, ["表单", "用途", "填写说明"], [1,1,1])
    rows3 += make_data_row(3, ["F2_四维度评估表", "评估AI应用的四个维度", "效率提升、质量提升、能力传承、持续迭代，每项1-5分"], [0,0,0])
    rows3 += make_data_row(4, ["F3_访谈记录表", "结构化记录访谈内容", "按模块填写，包括访谈内容和关键结论"], [0,0,0])
    rows3 += make_data_row(5, ["F4_规则清单表", "编写具体的团队规则", "规则要具体可执行，包含触发条件和行动指引"], [0,0,0])
    rows3 += make_data_row(6, ["F5_知识原型表", "整理知识资产的三种形态", "显性知识、隐性知识、流程知识"], [0,0,0])
    rows3 += make_data_row(7, ["F6_验收测试表", "测试知识整理的成效", "从准确性、完整性、可执行性等维度评估"], [0,0,0])
    rows3 += make_data_row(8, ["F10_团队台账", "总览团队知识资产", "汇总各类知识资产的数量和状态"], [0,0,0])

    cols_config3 = '''  <cols>
    <col width="20" customWidth="1" min="1" max="1"/>
    <col width="20" customWidth="1" min="2" max="2"/>
    <col width="55" customWidth="1" min="3" max="3"/>
  </cols>'''
    sheets["配套表单指引"] = make_sheet_xml(rows3, cols_config3)

    create_xlsx("表单使用指引.xlsx", sheets)

def create_xlsx(filename, sheets):
    """创建xlsx文件"""
    output_path = OUT_DIR / filename

    # 创建ZIP文件
    with zipfile.ZipFile(output_path, 'w', zipfile.ZIP_DEFLATED) as zf:
        # [Content_Types].xml
        content_types = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
  <Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>
'''

        # _rels/.rels
        rels = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/>
</Relationships>
'''
        zf.writestr("_rels/.rels", rels)

        # xl/_rels/workbook.xml.rels
        workbook_rels = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
'''

        # workbook.xml
        sheet_list = ""
        for i, name in enumerate(sheets.keys(), 1):
            sheet_list += f'  <sheet name="{name}" sheetId="{i}" r:id="rId{i+2}"/>\n'
            content_types += f'  <Override PartName="/xl/worksheets/sheet{i}.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>\n'
            workbook_rels += f'  <Relationship Id="rId{i+2}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet{i}.xml"/>\n'

        content_types += '  <Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>\n</Types>'
        workbook_rels += '</Relationships>'

        workbook = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <bookViews><workbookView/></bookViews>
  <sheets>
{sheet_list.strip()}
  </sheets>
  <calcPr calcId="191029"/>
</workbook>'''

        zf.writestr("[Content_Types].xml", content_types)
        zf.writestr("xl/workbook.xml", workbook)
        zf.writestr("xl/_rels/workbook.xml.rels", workbook_rels)
        zf.writestr("xl/styles.xml", STYLES_XML)

        # worksheets
        for i, content in enumerate(sheets.values(), 1):
            zf.writestr(f"xl/worksheets/sheet{i}.xml", content)

    print(f"Created: {output_path}")

if __name__ == "__main__":
    create_team_knowledge_base()
    create_support_forms()
    create_form_guide()
    print("\nAll files created successfully!")
