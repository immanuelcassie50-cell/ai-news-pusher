#!/usr/bin/env python3
"""Generate all 14 sheets for the course tools workbook."""

import os
from xml.sax.saxutils import escape

SHEET_NAMES = [
    "课程介绍与使用说明",
    "业务流程图绘制模板",
    "信息节点识别表",
    "现有表单盘点诊断表",
    "优先开发清单",
    "表单设计工作表（七要素完整版）",
    "横向字段对比表",
    "编号体系设计表",
    "关键字段定义表",
    "流转总图数据表",
    "汇总报表设计表",
    "填写模拟验证记录表",
    "数据汇总测试记录表",
    "修改优先级汇总表",
]

def col_letter(n):
    result = ""
    while n > 0:
        n, rem = divmod(n - 1, 26)
        result = chr(65 + rem) + result
    return result

def make_shared_strings():
    strings = [
        "课程名称", "隐性经验显性化：AI赋能业务场景系列表单开发",
        "课程定位", "两天版工作坊，目标是学会用AI辅助开发业务表单体系",
        "工具表单清单总览", "表单序号", "表单名称", "所属环节", "用途说明",
        "1", "课程介绍与使用说明", "课前准备", "了解课程全貌与工具表单使用方法",
        "2", "业务流程图绘制模板", "环节一", "绘制现有业务流程，发现问题点",
        "3", "信息节点识别表", "环节二", "识别流程中的信息节点与采集点",
        "4", "现有表单盘点诊断表", "环节三", "盘点现有表单问题，分类处理",
        "5", "优先开发清单", "环节四", "确定表单开发优先级与处理策略",
        "6", "表单设计工作表（七要素完整版）", "环节五", "完整设计单个表单的七个要素",
        "7", "横向字段对比表", "环节六", "跨表单对比字段，发现重复与缺失",
        "8", "编号体系设计表", "环节七", "建立统一的表单编号体系",
        "9", "关键字段定义表", "环节八", "统一关键字段的定义与口径",
        "10", "流转总图数据表", "环节九", "梳理表单间的流转关系与数据流向",
        "11", "汇总报表设计表", "环节十", "设计管理报表与数据汇总需求",
        "12", "填写模拟验证记录表", "验证环节", "模拟填写发现设计问题",
        "13", "数据汇总测试记录表", "验证环节", "测试数据是否能有效汇总",
        "14", "修改优先级汇总表", "优化环节", "汇总所有修改需求并排优先级",
        "使用流程说明", "第一步：绘制业务流程图 → 第二步：识别信息节点 → 第三步：盘点现有表单",
        "第四步：确定优先开发清单 → 第五步：设计新表单/修改旧表单 → 第六步：横向字段对比",
        "第七步：建立编号体系 → 第八步：定义关键字段 → 第九步：梳理流转关系",
        "第十步：设计汇总报表 → 验证环节：填写模拟 + 数据汇总测试 → 优化环节：修改优先级汇总",
        "使用说明", "本工具包包含14张标准化工具表单，用于工作坊各环节任务完成。",
        "建议按顺序使用，每张表单填写完毕后进入下一环节。",
        "表单中带*号为必填项，其他为选填。",
        "业务流程图绘制模板",
        "起点定义区", "起点名称", "触发条件", "开始节点描述",
        "终点定义区", "终点名称", "结束条件", "结束节点描述",
        "关键环节列表", "环节序号", "环节名称", "环节描述", "负责角色", "耗时（分钟）",
        "角色标注区", "角色名称", "职责说明", "输入内容", "输出内容",
        "流转关系标注", "从环节", "到环节", "流转条件", "数据传递内容",
        "判断分支节点标注", "分支节点", "条件描述", "分支A", "分支B", "分支C",
        "异常路径补充区", "异常情况", "触发条件", "处理方式", "返回节点",
        "信息节点识别表",
        "环节名称", "节点名称", "追溯性检验", "传递性检验", "授权性检验", "汇总性检验", "历史性检验",
        "节点类型", "对应表单类型", "当前状态", "优先级评估", "填写说明",
        "追溯性检验", "该信息能否追溯到原始来源？", "传递性检验", "该信息是否需要在多角色间传递？",
        "授权性检验", "该信息是否需要授权签字确认？", "汇总性检验", "该信息是否需要汇总上报？",
        "历史性检验", "该信息是否需要留存作为历史记录？",
        "现有表单盘点诊断表",
        "表单名称", "对应的信息节点", "盘点类型", "主要问题", "处理建议", "是否纳入本次工作坊",
        "盘点类型说明", "类型1-新增", "现有流程中缺失的表单，需要新增",
        "类型2-修改", "现有表单存在问题，需要修改完善",
        "类型3-整合", "多个表单功能重复，需要整合",
        "类型4-废除", "表单已无存在必要，建议废除",
        "优先开发清单",
        "序号", "节点/表单名称", "处理方式", "影响程度", "当前痛感", "优先级", "选中",
        "处理方式", "新增", "修改",
        "影响程度", "大", "小",
        "当前痛感", "强", "弱",
        "优先级说明", "最高", "优先处理", "次", "次优先", "中", "可缓", "低", "暂不处理",
        "表单设计工作表（七要素完整版）",
        "要素一：表单定位", "表单名称", "所属节点", "表单类型", "填写人", "填写时机", "填写频率",
        "表单类型说明", "采集类", "信息收集", "传递类", "信息传递", "审批类", "签字确认", "记录类", "台账备查",
        "要素二+三：字段清单", "字段序号", "字段名称", "字段类型", "必填/选填", "填写说明", "选项值说明",
        "字段类型", "文本", "数字", "日期", "单选", "多选", "附件",
        "必填/选填", "必填", "选填",
        "要素四：格式布局备注", "整体布局说明", "填写规范备注", "格式要求",
        "要素五：流转路径", "当前环节", "下一个环节", "流转条件", "提交方式", "审核要求",
        "要素六：归档规则", "归档时机", "归档方式", "保存期限", "归档位置",
        "要素七：关联关系", "关联表单", "关联字段", "关联说明", "数据更新方式",
        "横向字段对比表",
        "表单名称", "字段1", "字段2", "字段3", "字段4", "字段5", "字段6", "字段7", "字段8", "字段9", "字段10",
        "重复字段", "处理方案",
        "编号体系设计表",
        "业务类别代码", "类别名称", "代码简称", "说明",
        "表单编号分配表", "表单编号", "表单名称", "版本号", "记录编号格式", "编号示例",
        "版本号格式", "如：V1.0", "记录编号格式", "如：YYYYMMDD-序号",
        "关键字段定义表",
        "字段名称（统一标准名）", "含义", "格式要求", "单位", "计算/填写规则", "出现在哪些表单中", "常见误用",
        "格式要求说明", "如：文本/数字/日期", "单位说明", "如：元/个/天",
        "流转总图数据表",
        "环节名称", "表单编号", "表单名称", "填写人", "提交对象", "审核人",
        "关联的上游表单", "关联的下游表单", "数据流向的汇总报表",
        "汇总报表设计表",
        "报表名称", "统计周期", "统计指标列表", "计算方式", "数据来源", "口径说明",
        "数据分组维度", "制表人", "数据提交截止",
        "统计周期说明", "日/周/月/季/年",
        "填写模拟验证记录表",
        "验证场景描述", "验证人", "填写时长（分钟）", "发现问题列表", "问题类型", "修改方案", "验证结论",
        "问题类型", "字段缺失", "字段冗余", "逻辑错误", "格式问题", "口径不一致", "其他",
        "数据汇总测试记录表",
        "需要的汇总指标", "能否提取", "缺的字段", "困难描述", "根本原因",
        "修改优先级汇总表",
        "序号", "发现的问题", "涉及的表单", "具体修改内容", "优先级", "完成状态",
        "优先级符号说明", "🔴最高", "🟠高", "🟡中", "🟢低",
        "完成状态", "待处理", "进行中", "已完成",
    ]
    return strings

def build_shared_strings_xml(strings):
    unique = []
    indices = {}
    for s in strings:
        if s not in indices:
            indices[s] = len(unique)
            unique.append(s)
    si_elements = []
    for s in unique:
        escaped = escape(s)
        si_elements.append(f"  <si><t>{escaped}</t></si>")
    content = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
     count="{len(strings)}" uniqueCount="{len(unique)}">
{chr(10).join(si_elements)}
</sst>'''
    return content

def get_string_index(strings, text):
    if text == "":
        return -1
    unique = []
    indices = {}
    for s in strings:
        if s not in indices:
            indices[s] = len(unique)
            unique.append(s)
    return indices.get(text, -1)

def make_sheet_xml(title, headers, data_rows, col_widths, strings):
    idx = lambda t: get_string_index(strings, t)
    rows = []
    r = 1
    title_idx = idx(title)
    rows.append(f'  <row r="{r}"><c r="A{r}" t="s" s="4"><v>{title_idx}</v></c></row>')
    r += 2
    for i, h in enumerate(headers):
        col = col_letter(i + 1)
        if h == "":
            rows.append(f'  <row r="{r}"><c r="{col}{r}" t="s" s="4"><v></v></c></row>')
        else:
            rows.append(f'  <row r="{r}"><c r="{col}{r}" t="s" s="4"><v>{idx(h)}</v></c></row>')
    r += 1
    for _ in range(data_rows):
        row_vals = [f'<c r="{col_letter(i+1)}{r}" t="s" s="0"><v></v></c>' for i in range(len(headers))]
        rows.append(f'  <row r="{r}">{"".join(row_vals)}</row>')
        r += 1
    col_xml = []
    for i, w in enumerate(col_widths):
        col_xml.append(f'    <col min="{i+1}" max="{i+1}" width="{w}" customWidth="1"/>')
    return f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"/></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols>
{chr(10).join(col_xml)}
  </cols>
  <sheetData>
{chr(10).join(rows)}
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

def main():
    work_dir = "/tmp/xlsx_work"
    os.makedirs(f"{work_dir}/xl/worksheets", exist_ok=True)
    strings = make_shared_strings()

    with open(f"{work_dir}/xl/sharedStrings.xml", "w", encoding="utf-8") as f:
        f.write(build_shared_strings_xml(strings))

    idx = lambda t: get_string_index(strings, t)
    rows = []
    r = 1
    rows.append(f'  <row r="{r}"><c r="A{r}" t="s" s="4"><v>{idx("课程名称")}</v></c><c r="B{r}" t="s" s="0"><v>{idx("隐性经验显性化：AI赋能业务场景系列表单开发")}</v></c></row>')
    r += 1
    rows.append(f'  <row r="{r}"><c r="A{r}" t="s" s="4"><v>{idx("课程定位")}</v></c><c r="B{r}" t="s" s="0"><v>{idx("两天版工作坊，目标是学会用AI辅助开发业务表单体系")}</v></c></row>')
    r += 2
    rows.append(f'  <row r="{r}"><c r="A{r}" t="s" s="4"><v>{idx("工具表单清单总览")}</v></c></row>')
    r += 1
    headers = ["表单序号", "表单名称", "所属环节", "用途说明"]
    for i, h in enumerate(headers):
        col = col_letter(i + 1)
        rows.append(f'  <row r="{r}"><c r="{col}{r}" t="s" s="4"><v>{idx(h)}</v></c></row>')
    r += 1
    form_data = [
        ("1", "课程介绍与使用说明", "课前准备", "了解课程全貌与工具表单使用方法"),
        ("2", "业务流程图绘制模板", "环节一", "绘制现有业务流程，发现问题点"),
        ("3", "信息节点识别表", "环节二", "识别流程中的信息节点与采集点"),
        ("4", "现有表单盘点诊断表", "环节三", "盘点现有表单问题，分类处理"),
        ("5", "优先开发清单", "环节四", "确定表单开发优先级与处理策略"),
        ("6", "表单设计工作表（七要素完整版）", "环节五", "完整设计单个表单的七个要素"),
        ("7", "横向字段对比表", "环节六", "跨表单对比字段，发现重复与缺失"),
        ("8", "编号体系设计表", "环节七", "建立统一的表单编号体系"),
        ("9", "关键字段定义表", "环节八", "统一关键字段的定义与口径"),
        ("10", "流转总图数据表", "环节九", "梳理表单间的流转关系与数据流向"),
        ("11", "汇总报表设计表", "环节十", "设计管理报表与数据汇总需求"),
        ("12", "填写模拟验证记录表", "验证环节", "模拟填写发现设计问题"),
        ("13", "数据汇总测试记录表", "验证环节", "测试数据是否能有效汇总"),
        ("14", "修改优先级汇总表", "优化环节", "汇总所有修改需求并排优先级"),
    ]
    for row_data in form_data:
        row_vals = []
        for i, val in enumerate(row_data):
            col = col_letter(i + 1)
            row_vals.append(f'<c r="{col}{r}" t="s" s="0"><v>{idx(val)}</v></c>')
        rows.append(f'  <row r="{r}">{"".join(row_vals)}</row>')
        r += 1
    r += 1
    rows.append(f'  <row r="{r}"><c r="A{r}" t="s" s="4"><v>{idx("使用流程说明")}</v></c></row>')
    r += 1
    flow_steps = [
        "第一步：绘制业务流程图 → 第二步：识别信息节点 → 第三步：盘点现有表单",
        "第四步：确定优先开发清单 → 第五步：设计新表单/修改旧表单 → 第六步：横向字段对比",
        "第七步：建立编号体系 → 第八步：定义关键字段 → 第九步：梳理流转关系",
        "第十步：设计汇总报表 → 验证环节：填写模拟 + 数据汇总测试 → 优化环节：修改优先级汇总",
    ]
    for step in flow_steps:
        rows.append(f'  <row r="{r}"><c r="A{r}" t="s" s="0"><v>{idx(step)}</v></c></row>')
        r += 1
    r += 1
    rows.append(f'  <row r="{r}"><c r="A{r}" t="s" s="4"><v>{idx("使用说明")}</v></c></row>')
    r += 1
    notes = ["本工具包包含14张标准化工具表单，用于工作坊各环节任务完成。", "建议按顺序使用，每张表单填写完毕后进入下一环节。", "表单中带*号为必填项，其他为选填。"]
    for note in notes:
        rows.append(f'  <row r="{r}"><c r="A{r}" t="s" s="0"><v>{idx(note)}</v></c></row>')
        r += 1

    sheet1_xml = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"/></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols>
    <col min="1" max="1" width="18" customWidth="1"/>
    <col min="2" max="2" width="40" customWidth="1"/>
    <col min="3" max="3" width="15" customWidth="1"/>
    <col min="4" max="4" width="35" customWidth="1"/>
  </cols>
  <sheetData>
{chr(10).join(rows)}
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''
    with open(f"{work_dir}/xl/worksheets/sheet1.xml", "w", encoding="utf-8") as f:
        f.write(sheet1_xml)

    sheet_defs = [
        (2, "业务流程图绘制模板", ["起点名称", "触发条件", "开始节点描述", "", "终点名称", "结束条件", "结束节点描述", "", "环节序号", "环节名称", "环节描述", "负责角色", "耗时（分钟）", "", "角色名称", "职责说明", "输入内容", "输出内容", "", "从环节", "到环节", "流转条件", "数据传递内容", "", "分支节点", "条件描述", "分支A", "分支B", "分支C", "", "异常情况", "触发条件", "处理方式", "返回节点"], 15, [12, 20, 30, 15, 12]),
        (3, "信息节点识别表", ["环节名称", "节点名称", "追溯性检验", "传递性检验", "授权性检验", "汇总性检验", "历史性检验", "节点类型", "对应表单类型", "当前状态", "优先级评估", "填写说明"], 20, [15, 15, 22, 22, 22, 22, 22, 12, 12, 12, 12, 20]),
        (4, "现有表单盘点诊断表", ["表单名称", "对应的信息节点", "盘点类型", "主要问题", "处理建议", "是否纳入本次工作坊"], 25, [18, 15, 12, 15, 25, 18]),
        (5, "优先开发清单", ["序号", "节点/表单名称", "处理方式", "影响程度", "当前痛感", "优先级", "选中"], 25, [8, 20, 12, 12, 12, 12, 10]),
        (6, "表单设计工作表（七要素完整版）", ["表单名称", "所属节点", "表单类型", "填写人", "填写时机", "填写频率", "", "字段序号", "字段名称", "字段类型", "必填/选填", "填写说明", "选项值说明", "", "整体布局说明", "填写规范备注", "格式要求", "", "当前环节", "下一个环节", "流转条件", "提交方式", "审核要求", "", "归档时机", "归档方式", "保存期限", "归档位置", "", "关联表单", "关联字段", "关联说明", "数据更新方式"], 30, [15, 18, 12, 12, 25, 20]),
        (7, "横向字段对比表", ["表单名称", "字段1", "字段2", "字段3", "字段4", "字段5", "字段6", "字段7", "字段8", "字段9", "字段10", "", "重复字段", "处理方案"], 15, [18, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12]),
        (8, "编号体系设计表", ["业务类别代码", "类别名称", "代码简称", "说明", "", "表单编号", "表单名称", "版本号", "记录编号格式", "编号示例"], 10, [15, 18, 10, 18, 20]),
        (9, "关键字段定义表", ["字段名称（统一标准名）", "含义", "格式要求", "单位", "计算/填写规则", "出现在哪些表单中", "常见误用"], 30, [20, 25, 12, 10, 25, 20, 20]),
        (10, "流转总图数据表", ["环节名称", "表单编号", "表单名称", "填写人", "提交对象", "审核人", "关联的上游表单", "关联的下游表单", "数据流向的汇总报表"], 25, [15, 12, 18, 12, 12, 12, 15, 15, 20]),
        (11, "汇总报表设计表", ["报表名称", "统计周期", "统计指标列表", "计算方式", "数据来源", "口径说明", "数据分组维度", "制表人", "数据提交截止"], 15, [15, 12, 20, 18, 15, 20, 15, 12, 15]),
        (12, "填写模拟验证记录表", ["验证场景描述", "验证人", "填写时长（分钟）", "发现问题列表", "问题类型", "修改方案", "验证结论"], 20, [20, 10, 12, 25, 12, 20, 12]),
        (13, "数据汇总测试记录表", ["需要的汇总指标", "能否提取", "缺的字段", "困难描述", "根本原因"], 20, [20, 12, 15, 25, 25]),
        (14, "修改优先级汇总表", ["序号", "发现的问题", "涉及的表单", "具体修改内容", "优先级", "完成状态"], 30, [8, 25, 15, 25, 12, 12]),
    ]

    for sheet_num, title, headers, num_rows, widths in sheet_defs:
        xml = make_sheet_xml(title, headers, num_rows, widths, strings)
        with open(f"{work_dir}/xl/worksheets/sheet{sheet_num}.xml", "w", encoding="utf-8") as f:
            f.write(xml)

    sheet_entries = []
    for i, name in enumerate(SHEET_NAMES):
        sheet_id = i + 1
        rid = f"rId{sheet_id}" if sheet_id <= 3 else f"rId{sheet_id + 1}"
        sheet_entries.append(f'    <sheet name="{escape(name)}" sheetId="{sheet_id}" r:id="{rid}"/>')

    workbook_xml = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <fileVersion appName="xl" lastEdited="7" lowestEdited="7"/>
  <workbookPr defaultThemeVersion="166925"/>
  <bookViews>
    <workbookView xWindow="0" yWindow="0" windowWidth="20140" windowHeight="10960"/>
  </bookViews>
  <sheets>
{chr(10).join(sheet_entries)}
  </sheets>
  <calcPr calcId="191029"/>
</workbook>'''
    with open(f"{work_dir}/xl/workbook.xml", "w", encoding="utf-8") as f:
        f.write(workbook_xml)

    rels_entries = [
        '  <Relationship Id="rId1"\n    Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet"\n    Target="worksheets/sheet1.xml"/>',
        '  <Relationship Id="rId2"\n    Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles"\n    Target="styles.xml"/>',
        '  <Relationship Id="rId3"\n    Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings"\n    Target="sharedStrings.xml"/>',
    ]
    for i in range(2, 15):
        rid = f"rId{i + 1}"
        rels_entries.append(f'  <Relationship Id="{rid}"\n    Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet"\n    Target="worksheets/sheet{i}.xml"/>')

    workbook_rels_xml = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
{chr(10).join(rels_entries)}
</Relationships>'''
    with open(f"{work_dir}/xl/_rels/workbook.xml.rels", "w", encoding="utf-8") as f:
        f.write(workbook_rels_xml)

    override_entries = [
        '  <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>',
        '  <Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>',
        '  <Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/>',
    ]
    for i in range(1, 15):
        override_entries.append(f'  <Override PartName="/xl/worksheets/sheet{i}.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>')

    content_types_xml = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml"  ContentType="application/xml"/>
{chr(10).join(override_entries)}
</Types>'''
    with open(f"{work_dir}/[Content_Types].xml", "w", encoding="utf-8") as f:
        f.write(content_types_xml)

    print("All 14 sheets generated successfully!")

if __name__ == "__main__":
    main()
