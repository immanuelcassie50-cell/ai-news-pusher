#!/usr/bin/env python3
"""Create HR Employee Relations tool forms as multi-sheet xlsx."""
import zipfile, os, shutil

def create_xlsx(out_path, sheets_data):
    os.makedirs(os.path.dirname(out_path), exist_ok=True)

    # Build shared strings
    all_strings = []
    str_idx = {}

    def get_idx(s):
        if s not in str_idx:
            str_idx[s] = len(all_strings)
            all_strings.append(s)
        return str_idx[s]

    # Build workbook.xml
    sheet_entries = []
    for i, sheet in enumerate(sheets_data, 1):
        sheet_entries.append(
            f'  <sheet name="{sheet["name"]}" sheetId="{i}" r:id="rId{i}"/>'
        )

    workbook_xml = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
          xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheets>
{"\n".join(sheet_entries)}
  </sheets>
</workbook>'''

    workbook_rels = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
  <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml"/>
</Relationships>'''

    content_types = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
  <Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>
  <Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/>
</Types>'''

    root_rels = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/>
</Relationships>'''

    styles_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <fonts count="2">
    <font><sz val="11"/><name val="Microsoft YaHei"/></font>
    <font><sz val="11"/><b/><name val="Microsoft YaHei"/></font>
  </fonts>
  <fills count="2">
    <fill><patternFill patternType="none"/></fill>
    <fill><patternFill patternType="gray125"/></fill>
  </fills>
  <borders count="1">
    <border><left/><right/><top/><bottom/><diagonal/></border>
  </borders>
  <cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>
  <cellXfs count="4">
    <xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/>
    <xf numFmtId="0" fontId="1" fillId="0" borderId="0" xfId="0"/>
    <xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"><alignment wrapText="1"/></xf>
    <xf numFmtId="0" fontId="1" fillId="0" borderId="0" xfId="0"><alignment wrapText="1"/></xf>
  </cellXfs>
</styleSheet>'''

    ss_parts = []
    for s in all_strings:
        ss_parts.append(f'<si><t>{s}</t></si>')
    ss_xml = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="{len(all_strings)}" uniqueCount="{len(all_strings)}">
{"".join(ss_parts)}
</sst>'''

    sheet_xmls = []
    for sheet in sheets_data:
        rows_xml = []
        for r_idx, row in enumerate(sheet.get('rows', []), 1):
            cells_xml = []
            for c_idx, cell in enumerate(row, 1):
                col_letter = chr(64 + c_idx)
                cell_ref = f'{col_letter}{r_idx}'
                style = '3' if r_idx == 1 else ('2' if c_idx == 1 else '0')
                if isinstance(cell, str):
                    cells_xml.append(f'<c r="{cell_ref}" t="s" s="{style}"><v>{get_idx(cell)}</v></c>')
                elif isinstance(cell, (int, float)):
                    cells_xml.append(f'<c r="{cell_ref}" s="{style}"><v>{cell}</v></c>')
                else:
                    cells_xml.append(f'<c r="{cell_ref}" t="s" s="{style}"><v>0</v></c>')
            rows_xml.append(f'<row r="{r_idx}">{"".join(cells_xml)}</row>')

        sheet_xml = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
           xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"/></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <sheetData>
{"".join(rows_xml)}
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''
        sheet_xmls.append(sheet_xml)

    with zipfile.ZipFile(out_path, 'w', zipfile.ZIP_DEFLATED) as zf:
        zf.writestr('[Content_Types].xml', content_types)
        zf.writestr('_rels/.rels', root_rels)
        zf.writestr('xl/workbook.xml', workbook_xml)
        zf.writestr('xl/_rels/workbook.xml.rels', workbook_rels)
        zf.writestr('xl/styles.xml', styles_xml)
        zf.writestr('xl/sharedStrings.xml', ss_xml)
        for i, sxml in enumerate(sheet_xmls, 1):
            zf.writestr(f'xl/worksheets/sheet{i}.xml', sxml)

    print(f'Created: {out_path} ({os.path.getsize(out_path)} bytes)')


sheets = [
    {
        "name": "F1-角色自测",
        "headers": ["评估维度", "Lv.1纯事务型", "Lv.2偏事务型", "Lv.3偏架构型", "Lv.4架构型"],
        "rows": [
            ["评估维度", "Lv.1纯事务型", "Lv.2偏事务型", "Lv.3偏架构型", "Lv.4架构型"],
            ["核心特征", "忙于回复咨询、办理入职离职、处理考勤异常", "能独立处理大部分事务性工作，开始关注流程优化", "站在业务角度思考，主动设计冲突预防机制", "成为组织韧性的架构师，设计让组织和员工共同成长的系统"],
            ["价值感来源", "完成任务、不出错", "得到认可、效率提升", "解决复杂问题、推动组织发展", "建立健康可持续的HR系统"],
            ["主要工具", "表格、审批系统、邮件", "AI辅助工具、流程优化", "数据分析、系统设计", "战略规划、变革管理"],
            ["口头禅", "这个我不知道，要问领导", "这事能不能让AI做？", "这个现象背后是什么问题？", "我们从这个案例中学到什么？"],
        ]
    },
    {
        "name": "F2-能力图谱",
        "headers": ["能力项", "定义", "核心行为", "自测要点"],
        "rows": [
            ["能力项", "定义", "核心行为", "自测要点"],
            ["冲突预见与介入", "能识别冲突早期信号，在升级前介入", "分析AI预警信号，区分可AI处理与必须人介入的场景", "能读懂AI预警报告，有冲突分级应对策略"],
            ["员工心理支持", "感知员工情绪，在适当时候提供支持", "识别压力焦虑倦怠信号，进行有温度的对话", "员工愿意找你倾诉，知道何时转介专业资源"],
            ["组织信任建设", "通过制度/沟通/情感三个维度建设信任资本", "推动制度透明，实践沟通透明，维护情感透明", "员工相信公司制度公正，愿意坦诚表达"],
            ["合规与伦理守护", "在AI应用、数据隐私、员工权益间找到边界", "理解AI合规要求，识别潜在伦理风险", "能评估引入AI工具的合规风险"],
        ]
    },
    {
        "name": "F3-人机分工",
        "headers": ["场景类型", "AI可承接", "必须人介入", "分工比例"],
        "rows": [
            ["场景类型", "AI可承接", "必须人介入", "分工比例"],
            ["政策咨询类", "假期政策咨询、考勤规则解释、福利查询、入职手续指引", "员工表达不满、涉及多政策综合判断、要求解释为什么", "AI 80% + 人 20%"],
            ["情绪预警类", "监测沟通频率变化、识别情绪关键词、预警行为异常", "解读预警信号含义、有温度的对话、判断是否需要转介", "AI 40% + 人 60%"],
            ["冲突介入类", "整理事实信息、分析各方立场、提供过往案例参考", "当面沟通调解、敏感信息传递、关系修复信任重建", "AI 20% + 人 80%"],
            ["合规决策类", "检索法律法规、分析过往案例、整理证据材料", "最终决策、当面沟通、涉及情感和关系的判断", "AI 30% + 人 70%"],
        ]
    },
    {
        "name": "F4-AI部署评估",
        "headers": ["评估维度", "评估项", "合格标准", "自评结果", "风险等级"],
        "rows": [
            ["评估维度", "评估项", "合格标准", "自评结果", "风险等级"],
            ["技术评估", "数据安全", "国内服务器+加密传输", "", "低/中/高"],
            ["技术评估", "系统稳定性", "≥99.5%可用性", "", "低/中/高"],
            ["技术评估", "算法可解释性", "能说明AI决策逻辑", "", "低/中/高"],
            ["技术评估", "误判率", "<10%", "", "低/中/高"],
            ["技术评估", "人工干预机制", "AI建议可被人否决", "", "低/中/高"],
            ["法律合规", "个人信息保护", "获得员工明确同意", "", "低/中/高"],
            ["法律合规", "劳动法合规", "不用于考勤监控/绩效处罚", "", "低/中/高"],
            ["法律合规", "算法公平性", "通过公平性测试", "", "低/中/高"],
            ["法律合规", "员工知情权", "书面告知+选择权", "", "低/中/高"],
            ["员工心理", "员工接受度", "调查支持率>60%", "", "低/中/高"],
            ["员工心理", "信任影响", "确认信任净正增长", "", "低/中/高"],
            ["员工心理", "心理安全感", "确认不会降低心理安全感", "", "低/中/高"],
            ["组织适配", "HR能力匹配", "有培训+有专人负责", "", "低/中/高"],
            ["组织适配", "流程配套", "流程已更新并培训", "", "低/中/高"],
            ["组织适配", "应急机制", "有预案+演练过", "", "低/中/高"],
        ]
    },
    {
        "name": "F5-疑虑响应话术",
        "headers": ["员工疑虑", "回应原则", "话术示例", "注意事项"],
        "rows": [
            ["员工疑虑", "回应原则", "话术示例", "注意事项"],
            ["AI会取代我的工作吗？", "承认变化、指出机会", "AI会改变我们的工作方式，但不会取代人的判断和温度。您的经验和对员工的理解是AI无法替代的。", "避免说不会，要用转型视角"],
            ["AI的决定公平吗？", "透明可解释", "AI基于数据做建议，最终决策在人。我们有复核机制确保公平。", "强调人有最终决策权"],
            ["公司用AI监控我们？", "澄清边界、保护隐私", "AI只用于提升服务效率，不会用于监控。我们有明确的数据使用政策。", "主动说明数据保护措施"],
            ["我不会用AI怎么办？", "提供支持、降低门槛", "公司会提供培训，还有AI先锋用户可以一对一帮带。", "展示支持资源，不要让员工感到被抛弃"],
        ]
    },
    {
        "name": "F6-情绪信号识别",
        "headers": ["信号类型", "早期表现", "识别方法", "介入时机"],
        "rows": [
            ["信号类型", "早期表现", "识别方法", "介入时机"],
            ["沟通频率变化", "突然减少或停止使用AI助手", "监控使用数据变化", "连续3天以上下降时关注"],
            ["情绪关键词", "压力、焦虑、失望等词汇出现频率", "AI情绪预警系统", "预警触发时立即查看"],
            ["行为异常", "连续加班、突然缺勤、工作质量下降", "主管反馈+系统数据", "主管反馈后24小时内介入"],
            ["语气变化", "对话语气变得消极、防御、沉默", "AI对话分析", "语气明显变化时主动关心"],
        ]
    },
    {
        "name": "F7-信任建设检查",
        "headers": ["建设维度", "具体行动", "执行状态", "负责人"],
        "rows": [
            ["建设维度", "具体行动", "执行状态", "负责人"],
            ["制度透明", "公开AI使用规则和数据范围", "已执行/进行中/待启动", ""],
            ["制度透明", "明确AI不能做什么", "已执行/进行中/待启动", ""],
            ["沟通透明", "及时告知AI系统变化", "已执行/进行中/待启动", ""],
            ["沟通透明", "主动分享AI使用效果数据", "已执行/进行中/待启动", ""],
            ["情感透明", "定期收集员工对AI的感受", "已执行/进行中/待启动", ""],
            ["情感透明", "认可员工适应AI的努力", "已执行/进行中/待启动", ""],
        ]
    },
    {
        "name": "F8-冲突介入决策",
        "headers": ["冲突阶段", "识别信号", "介入方式", "行动要点"],
        "rows": [
            ["冲突阶段", "识别信号", "介入方式", "行动要点"],
            ["预防期", "沟通频率下降、语气变化、工作质量下降", "主动关心、提供支持资源", "不要等问题严重化再介入"],
            ["升级期", "员工情绪激动、出现投诉苗头", "单独沟通、倾听理解", "先处理情绪，再处理事情"],
            ["爆发期", "正式投诉、情绪激烈、影响团队", "及时介入、公正调解", "保持中立，收集事实"],
            ["恢复期", "冲突暂时平息、关系需要修复", "跟进反馈、重建信任", "不要让问题遗留成慢性问题"],
        ]
    },
    {
        "name": "F9-心理安全感评估",
        "headers": ["评估维度", "表现指标", "正向案例", "待改进项"],
        "rows": [
            ["评估维度", "表现指标", "正向案例", "待改进项"],
            ["心理安全", "员工愿意承认错误", "主动报告系统问题", ""],
            ["心理安全", "员工愿意提出不同意见", "会议上提出改进建议", ""],
            ["心理安全", "员工愿意寻求帮助", "主动约时间聊困惑", ""],
            ["人际信任", "跨部门协作顺畅", "主动分享信息和资源", ""],
            ["人际信任", "冲突能被建设性处理", "分歧后仍能合作", ""],
        ]
    },
    {
        "name": "F10-转型行动计划",
        "headers": ["行动项", "开始日期", "完成日期", "成果指标", "资源支持"],
        "rows": [
            ["行动项", "开始日期", "完成日期", "成果指标", "资源支持"],
            ["参加AI工具培训", "", "", "能独立使用AI助手完成日常工作", ""],
            ["制定人机协同流程", "", "", "明确哪些事AI处理、哪些事人处理", ""],
            ["建立员工反馈渠道", "", "", "收集到员工对AI的真实反馈", ""],
            ["设计信任建设方案", "", "", "制定3个月信任建设计划", ""],
            ["完成角色转型承诺", "", "", "90天内成为组织韧性架构师", ""],
        ]
    },
]

out_path = 'D:/CC/temp/HR工具表单_员工关系重生.xlsx'
create_xlsx(out_path, sheets)

dest = 'D:/新课开发/HR/员工关系/1.员工关系重生-从事务处理者到组织韧性架构师的角色转型/配套Excel/HR工具表单_员工关系重生.xlsx'
os.makedirs(os.path.dirname(dest), exist_ok=True)
shutil.copy2(out_path, dest)
print(f'Dest: {dest}')
