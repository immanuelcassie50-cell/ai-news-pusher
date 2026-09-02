#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Build 21-Forms Workbook for AI时代经验传承-岗位手册批量开发工作坊
"""
import os
import shutil

WORK_DIR = r'D:\CC\temp\xlsx_work_21forms'
OUTPUT_PATH = r'D:\新课开发\经验萃取\手册\完整手册\完整课程包\06_全流程工具表单\A1_配套表单集_空白版.xlsx'
os.makedirs(os.path.dirname(OUTPUT_PATH), exist_ok=True)

SHEET_NAMES = [
    "目录",
    "Form0-课前准备检查表",
    "Form1-手册类型判断",
    "Form2-课题定位表",
    "Form3-访谈准备清单",
    "Form4-A角色访谈记录",
    "Form5-B角色访谈记录",
    "Form6-C角色访谈记录",
    "Form7-操作手册素材整理",
    "Form8-带教手册素材整理",
    "Form9-应知应会素材整理",
    "Form10-Skill提交前自查",
    "Form11-初稿速览检查",
    "Form12-A角色审阅记录",
    "Form13-B角色审阅记录",
    "Form14-C角色审阅记录",
    "Form15-优先级排序汇总",
    "Form16-操作手册校验清单",
    "Form17-带教手册校验清单",
    "Form18-应知应会校验清单",
    "Form19-五步优化工作表",
    "Form20-跨手册交叉审阅",
    "Form21-课后迭代计划表",
]

def e(s):
    """Escape XML special chars"""
    return s.replace('&','&amp;').replace('<','&lt;').replace('>','&gt;')

def make_cell(ref, style, text):
    return f'<c r="{ref}" s="{style}" t="inlineStr"><is><t>{e(text)}</t></is></c>'

def make_row(rnum, cells, ht=None):
    attrs = f'r="{rnum}"'
    if ht:
        attrs += f' ht="{ht}" customHeight="1"'
    cell_xml = '\n    '.join(cells)
    return f'<row {attrs}>\n    {cell_xml}\n  </row>'

# ===== STYLES =====
STYLES = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <numFmts count="0"/>
  <fonts>
    <font><name val="Arial"/><sz val="11"/></font>
    <font><name val="Arial"/><b/><sz val="14"/><color rgb="00FFFFFF"/></font>
    <font><name val="Arial"/><b/><sz val="11"/><color rgb="00FFFFFF"/></font>
    <font><name val="Arial"/><b/><sz val="11"/><color rgb="001B4F9B"/></font>
    <font><name val="Arial"/><sz val="10"/></font>
    <font><name val="Arial"/><i/><sz val="9"/><color rgb="00706060"/></font>
    <font><name val="Arial"/><sz val="9"/><color rgb="00C00000"/></font>
  </fonts>
  <fills>
    <fill><patternFill patternType="none"/></fill>
    <fill><patternFill patternType="gray125"/></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="001B4F9B"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="00DEEAF1"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="00F2F2F2"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="00FFFFC0"/></patternFill></fill>
  </fills>
  <borders>
    <border><left/><right/><top/><bottom/><diagonal/></border>
    <border>
      <left style="thin"><color rgb="00AAAAAA"/></left>
      <right style="thin"><color rgb="00AAAAAA"/></right>
      <top style="thin"><color rgb="00AAAAAA"/></top>
      <bottom style="thin"><color rgb="00AAAAAA"/></bottom>
    </border>
  </borders>
  <cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>
  <cellXfs>
    <xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/>
    <xf numFmtId="0" fontId="1" fillId="2" borderId="0" xfId="0" applyAlignment="1"><alignment horizontal="center" vertical="center" wrapText="1"/></xf>
    <xf numFmtId="0" fontId="2" fillId="2" borderId="1" xfId="0" applyAlignment="1"><alignment horizontal="center" vertical="center" wrapText="1"/></xf>
    <xf numFmtId="0" fontId="3" fillId="3" borderId="1" xfId="0" applyAlignment="1"><alignment horizontal="center" vertical="center" wrapText="1"/></xf>
    <xf numFmtId="0" fontId="4" fillId="4" borderId="0" xfId="0" applyAlignment="1"><alignment horizontal="left" vertical="center" wrapText="1"/></xf>
    <xf numFmtId="0" fontId="0" fillId="5" borderId="1" xfId="0" applyAlignment="1"><alignment horizontal="left" vertical="center" wrapText="1"/></xf>
    <xf numFmtId="0" fontId="0" fillId="0" borderId="1" xfId="0" applyAlignment="1"><alignment horizontal="left" vertical="center" wrapText="1"/></xf>
    <xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0" applyAlignment="1"><alignment horizontal="left" vertical="center" wrapText="1"/></xf>
    <xf numFmtId="0" fontId="5" fillId="4" borderId="0" xfId="0" applyAlignment="1"><alignment horizontal="left" vertical="center" wrapText="1"/></xf>
    <xf numFmtId="0" fontId="2" fillId="2" borderId="1" xfId="0" applyAlignment="1"><alignment horizontal="center" vertical="center" wrapText="1"/></xf>
    <xf numFmtId="0" fontId="6" fillId="0" borderId="0" xfId="0" applyAlignment="1"><alignment horizontal="left" vertical="center" wrapText="1"/></xf>
  </cellXfs>
</styleSheet>'''

# ===== INDEX DATA =====
INDEX_ROWS = [
    (1, "课前准备清单", "工作坊开始前", "全体学员", "Form0-课前准备检查表"),
    (2, "手册类型判断表", "第一天上午", "全组讨论", "Form1-手册类型判断"),
    (3, "课题定位表", "第一天上午", "三类人群确认", "Form2-课题定位表"),
    (4, "访谈准备清单", "访谈开始前", "访谈组织者", "Form3-访谈准备清单"),
    (5, "角色A访谈记录表", "第一天下午", "角色本人或访谈者", "Form4-A角色访谈记录"),
    (6, "角色B访谈记录表", "第一天下午", "角色本人或访谈者", "Form5-B角色访谈记录"),
    (7, "角色C访谈记录表", "第一天下午", "角色本人或访谈者", "Form6-C角色访谈记录"),
    (8, "操作手册材料组织表", "第一天下午末", "小组协作", "Form7-操作手册素材整理"),
    (9, "带教手册材料组织表", "第一天下午末", "小组协作", "Form8-带教手册素材整理"),
    (10, "应知应会手册材料组织表", "第一天下午末", "小组协作", "Form9-应知应会素材整理"),
    (11, "提交前三检查", "提交Skill前", "素材整理负责人", "Form10-Skill提交前自查"),
    (12, "初稿速览检查", "收到初稿后", "小组协作", "Form11-初稿速览检查"),
    (13, "角色A初稿标记记录表", "第二天上午", "角色A", "Form12-A角色审阅记录"),
    (14, "角色B初稿标记记录表", "第二天上午", "角色B", "Form13-B角色审阅记录"),
    (15, "角色C初稿标记记录表", "第二天上午", "角色C", "Form14-C角色审阅记录"),
    (16, "优先级排序汇总表", "第二天上午末", "全组汇总", "Form15-优先级排序汇总"),
    (17, "操作手册深度校验清单", "第二天上午", "小组协作", "Form16-操作手册校验清单"),
    (18, "带教手册深度校验清单", "第二天上午", "小组协作", "Form17-带教手册校验清单"),
    (19, "应知应会手册深度校验清单", "第二天上午", "小组协作", "Form18-应知应会校验清单"),
    (20, "五步优化工作表", "第二天下午", "手册负责人", "Form19-五步优化工作表"),
    (21, "跨手册交叉审阅表", "第二天下午", "评审双方", "Form20-跨手册交叉审阅"),
    (22, "课后迭代计划表", "工作坊收尾", "课题负责人", "Form21-课后迭代计划表"),
]

def build_index_sheet():
    rows = []
    rows.append(make_row(1, [
        make_cell("A1","1","AI时代经验传承：岗位手册批量开发工作坊"),
        make_cell("B1","1","配套表单集（空白版）"),
    ], "40"))
    rows.append(make_row(2, [make_cell("A2","0","")], "15"))
    rows.append(make_row(3, [
        make_cell("A3","2","编号"),
        make_cell("B3","2","表单名称"),
        make_cell("C3","2","使用阶段"),
        make_cell("D3","2","主要填写人"),
        make_cell("E3","2","工作表页码"),
    ], "28"))
    for i,(num,name,stage,who,sname) in enumerate(INDEX_ROWS):
        r = i+4
        bg = "3" if i%2==0 else "4"
        rows.append(make_row(r, [
            make_cell(f"A{r}",bg,str(num)),
            make_cell(f"B{r}",bg,name),
            make_cell(f"C{r}",bg,stage),
            make_cell(f"D{r}",bg,who),
            make_cell(f"E{r}",bg,sname),
        ], "22"))
    return '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <sheetPr><tabColor rgb="001B4F9B"/></sheetPr>
  <dimension ref="A1:E26"/>
  <sheetViews><sheetView workbookViewId="0"><pane ySplit="3" topLeftCell="A4" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>
  <sheetFormatPr defaultRowHeight="15" customHeight="1"/>
  <cols>
    <col min="1" max="1" width="8" customWidth="1"/>
    <col min="2" max="2" width="28" customWidth="1"/>
    <col min="3" max="3" width="18" customWidth="1"/>
    <col min="4" max="4" width="16" customWidth="1"/>
    <col min="5" max="5" width="22" customWidth="1"/>
  </cols>
  <sheetData>%s</sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75"/>
  <printOptions horizontalCentered="1"/>
  <pageSetup orientation="portrait" useFirstPageNumber="1" fitToPage="1"/>
</worksheet>''' % '\n'.join(rows)

def build_form0():
    """Form0: 课前准备检查表"""
    rows = []
    r = 1
    rows.append(make_row(r, [make_cell(f"A{r}","1","Form0-课前准备检查表")], "36")); r+=1
    rows.append(make_row(r, [make_cell(f"A{r}","8","使用说明：工作坊正式开始前,逐项确认。全部勾选后,代表你的课题已经具备开始条件。未完成项需在第一天上午前补齐。")], "40")); r+=1
    rows.append(make_row(r, [make_cell(f"A{r}","2","课题基本信息")], "24")); r+=1
    rows.append(make_row(r, [make_cell(f"A{r}","4","我准备开发的手册课题（初步想法,可以在定位阶段调整）："), make_cell(f"B{r}","5","")], "30")); r+=1
    rows.append(make_row(r, [make_cell(f"A{r}","2","材料准备")], "24")); r+=1
    rows.append(make_row(r, [
        make_cell(f"A{r}","9","准备项"),
        make_cell(f"B{r}","9","是否就绪"),
        make_cell(f"C{r}","9","备注"),
    ], "22")); r+=1
    items = [
        ("确定了课题相关的三类人群（角色A/B/C各有具体人选）","□ 是  □ 否",""),
        ("角色A人选已知情并愿意参与访谈","□ 是  □ 否","人名："),
        ("角色B人选已知情并愿意参与访谈","□ 是  □ 否","人名："),
        ("角色C人选已知情并愿意参与访谈","□ 是  □ 否","人名："),
        ("与课题相关的现有操作规程（如有,带来或存在手机里）","□ 有,已带  □ 无",""),
        ("与课题相关的现有制度文件（如有）","□ 有,已带  □ 无",""),
        ("与课题相关的现有培训课件（如有）","□ 有,已带  □ 无",""),
        ("与课题相关的现有表单样本（如有）","□ 有,已带  □ 无",""),
        ("录音设备可用（手机录音功能已测试）","□ 是  □ 否",""),
        ("语音转文字工具已准备好（微信输入法/讯飞语记/剪映等均可）","□ 是  □ 否","用哪个："),
    ]
    for i,(item,status,note) in enumerate(items):
        bg = "6" if i%2==0 else "7"
        rows.append(make_row(r, [
            make_cell(f"A{r}",bg,item),
            make_cell(f"B{r}",bg,status),
            make_cell(f"C{r}","5",note),
        ], "22")); r+=1
    rows.append(make_row(r, [make_cell(f"A{r}","2","心理准备")], "24")); r+=1
    rows.append(make_row(r, [make_cell(f"A{r}","4","这次工作坊结束时,我希望带走的东西是：")], "30")); r+=1
    rows.append(make_row(r, [make_cell(f"A{r}","5","")], "40")); r+=1
    rows.append(make_row(r, [make_cell(f"A{r}","4","我预判这个课题在开发过程中最可能遇到的困难是：")], "30")); r+=1
    rows.append(make_row(r, [make_cell(f"A{r}","5","")], "40")); r+=1
    return '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <sheetPr><tabColor rgb="001B4F9B"/></sheetPr>
  <dimension ref="A1:C{r}"/>
  <sheetViews><sheetView workbookViewId="0"><pane ySplit="3" topLeftCell="A4" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>
  <sheetFormatPr defaultRowHeight="15" customHeight="1"/>
  <cols>
    <col min="1" max="1" width="65" customWidth="1"/>
    <col min="2" max="2" width="18" customWidth="1"/>
    <col min="3" max="3" width="30" customWidth="1"/>
  </cols>
  <sheetData>{rows}</sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75"/>
  <pageSetup orientation="portrait" fitToPage="1"/>
</worksheet>'''.format(rows='\n'.join(rows), r=r)

def build_form1():
    """Form1: 手册类型判断表"""
    rows = []; r=1
    rows.append(make_row(r, [make_cell(f"A{r}","1","Form1-手册类型判断表")], "36")); r+=1
    rows.append(make_row(r, [make_cell(f"A{r}","8","使用说明：第一天上午,三类人群小组讨论,用这张表辅助确认本次课题应该开发哪类手册。逐项回答后,综合判断选择类型。")], "40")); r+=1
    rows.append(make_row(r, [make_cell(f"A{r}","2","课题描述（一句话说清楚：什么岗位、什么方面的经验）")], "24")); r+=1
    rows.append(make_row(r, [make_cell(f"A{r}","5","")], "30")); r+=1
    rows.append(make_row(r, [make_cell(f"A{r}","2","核心判断问题")], "24")); r+=1
    rows.append(make_row(r, [make_cell(f"A{r}","9","判断问题"), make_cell(f"B{r}","9","你的答案")], "22")); r+=1
    questions = [
        "这本手册的主要目标读者是谁？",
        "读者拿到这本手册,最主要的使用场景是什么？",
        "读者使用时,主要需要\"知道怎么做\"还是\"知道是什么/有什么\"？",
        "这本手册主要帮助读者\"自己操作\"还是\"带别人操作\"？",
        "读者是在做一件具体任务时翻,还是入职初期整体了解岗位时翻？",
    ]
    for q in questions:
        rows.append(make_row(r, [make_cell(f"A{r}","6",q), make_cell(f"B{r}","5","")], "22")); r+=1
    rows.append(make_row(r, [make_cell(f"A{r}","2","类型特征对照")], "24")); r+=1
    rows.append(make_row(r, [
        make_cell(f"A{r}","9","手册类型"),
        make_cell(f"B{r}","9","核心特征"),
        make_cell(f"C{r}","9","主要受益人"),
        make_cell(f"D{r}","9","使用时机"),
    ], "22")); r+=1
    type_data = [
        ("操作手册","一步一步告诉你怎么做对一件事","执行者本人","需要做这件事的时候翻"),
        ("带教手册","告诉带教人怎么教新人,分阶段推进","带教人","带新人的每个阶段翻"),
        ("应知应会手册","帮新人快速建立对岗位的整体认知","新入职员工","入职初期,全面了解时翻"),
    ]
    for td in type_data:
        rows.append(make_row(r, [make_cell(f"A{r}","6",td[0]), make_cell(f"B{r}","6",td[1]), make_cell(f"C{r}","6",td[2]), make_cell(f"D{r}","6",td[3])], "22")); r+=1
    rows.append(make_row(r, [make_cell(f"A{r}","2","判断结论")], "24")); r+=1
    rows.append(make_row(r, [make_cell(f"A{r}","6","本次课题应该开发的手册类型："), make_cell(f"B{r}","5","□ 操作手册  □ 带教手册  □ 应知应会手册")], "22")); r+=1
    rows.append(make_row(r, [make_cell(f"A{r}","4","判断理由（一两句话说明）："), make_cell(f"B{r}","5","")], "30")); r+=1
    rows.append(make_row(r, [make_cell(f"A{r}","2","三类人群确认签字")], "24")); r+=1
    rows.append(make_row(r, [
        make_cell(f"A{r}","9","角色A（读者代表）"),
        make_cell(f"B{r}","9","角色B（经验代表）"),
        make_cell(f"C{r}","9","角色C（管理者代表）"),
    ], "22")); r+=1
    rows.append(make_row(r, [make_cell(f"A{r}","5",""), make_cell(f"B{r}","5",""), make_cell(f"C{r}","5","")], "22")); r+=1
    return '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <sheetPr><tabColor rgb="001B4F9B"/></sheetPr>
  <dimension ref="A1:D{r}"/>
  <sheetViews><sheetView workbookViewId="0"><pane ySplit="2" topLeftCell="A3" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>
  <sheetFormatPr defaultRowHeight="15" customHeight="1"/>
  <cols>
    <col min="1" max="1" width="50" customWidth="1"/>
    <col min="2" max="2" width="22" customWidth="1"/>
    <col min="3" max="3" width="18" customWidth="1"/>
    <col min="4" max="4" width="20" customWidth="1"/>
  </cols>
  <sheetData>{rows}</sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75"/>
  <pageSetup orientation="portrait" fitToPage="1"/>
</worksheet>'''.format(rows='\n'.join(rows), r=r)

def build_generic_sheet(title, instructions, sections):
    """Generic sheet builder for standard forms"""
    rows = []; r = 1
    rows.append(make_row(r, [make_cell(f"A{r}","1",title)], "36")); r+=1
    if instructions:
        rows.append(make_row(r, [make_cell(f"A{r}","8",instructions)], "40")); r+=1
    for sec in sections:
        stype = sec[0]
        if stype == 'sp':
            ht = sec[1] if len(sec)>1 else "12"
            rows.append(make_row(r, [make_cell(f"A{r}","0","")], ht)); r+=1
        elif stype == 'sec':
            text = sec[1]
            ht = sec[2] if len(sec)>2 else "24"
            cols = sec[3] if len(sec)>3 else 1
            if cols == 1:
                rows.append(make_row(r, [make_cell(f"A{r}","2",text)], ht)); r+=1
            else:
                cells = [make_cell(f"{chr(65+i)}{r}","2",text if i==0 else "") for i in range(cols)]
                rows.append(make_row(r, cells, ht)); r+=1
        elif stype == 'hdr':
            headers = sec[1]
            ht = sec[2] if len(sec)>2 else "22"
            cells = [make_cell(f"{chr(65+i)}{r}","9",h) for i,h in enumerate(headers)]
            rows.append(make_row(r, cells, ht)); r+=1
        elif stype == 'row':
            cells_data = sec[1]
            ht = sec[2] if len(sec)>2 else "22"
            st = sec[3] if len(sec)>3 else "6"
            cells = []
            for i,cd in enumerate(cells_data):
                if isinstance(cd, tuple):
                    ct, cs = cd
                else:
                    ct = cd; cs = st
                cells.append(make_cell(f"{chr(65+i)}{r}",cs,str(ct)))
            rows.append(make_row(r, cells, ht)); r+=1
    max_r = r
    return '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <sheetPr><tabColor rgb="001B4F9B"/></sheetPr>
  <dimension ref="A1:F{max_r}"/>
  <sheetViews><sheetView workbookViewId="0"><pane ySplit="2" topLeftCell="A3" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>
  <sheetFormatPr defaultRowHeight="15" customHeight="1"/>
  <cols>
    <col min="1" max="1" width="55" customWidth="1"/>
    <col min="2" max="2" width="20" customWidth="1"/>
    <col min="3" max="3" width="20" customWidth="1"/>
    <col min="4" max="4" width="20" customWidth="1"/>
    <col min="5" max="5" width="15" customWidth="1"/>
    <col min="6" max="6" width="15" customWidth="1"/>
  </cols>
  <sheetData>{rows}</sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75"/>
  <pageSetup orientation="portrait" fitToPage="1"/>
</worksheet>'''.format(rows='\n'.join(rows), max_r=max_r)

def build_form2():
    return build_generic_sheet("Form2-课题定位表", "使用说明：第一天上午,三类人群共同讨论并填写。这是整个手册开发的起点。", [
        ('sp',10),
        ('sec','手册基本信息'),
        ('row',[('手册名称（暂定）：','4'),'','']),
        ('row',[('手册类型（已在表1确认）：□ 操作手册  □ 带教手册  □ 应知应会手册','4'),'','']),
        ('row',[('课题负责人：','4'),'','']),
        ('sp',10),
        ('sec','五要素填写'),
        ('sec','要素一：目标场景'),
        ('row',['这本手册覆盖哪些具体工作情境（能用"当...的时候"描述出来的情境）？','']),
        ('row',[('场景一：','5'),'']),
        ('row',[('场景二：','5'),'']),
        ('row',[('场景三：','5'),'']),
        ('row',[('场景四（如有）：','5'),'']),
        ('row',['检查标准：每个场景描述能具体到"在什么时间、在什么地点、做什么事情"。如果只能写出"负责XX工作",说明还不够具体。',''],20),
        ('sp',10),
        ('sec','要素二：目标人群'),
        ('row',['目标读者是谁（具体描述,不是宽泛的职位名称）？','']),
        ('row',['读者的基础：他们已经知道什么、已经会什么？','']),
        ('row',['读者的缺口：他们最不知道什么、最容易犯什么错？','']),
        ('sp',10),
        ('sec','要素三：核心问题'),
        ('row',['这本手册要帮读者解决哪3-5个关键问题（来自角色A的真实困惑）？','']),
        ('row',[('问题一：','5'),'']),
        ('row',[('问题二：','5'),'']),
        ('row',[('问题三：','5'),'']),
        ('row',[('问题四（如有）：','5'),'']),
        ('row',[('问题五（如有）：','5'),'']),
        ('sp',10),
        ('sec','要素四：预期效果'),
        ('row',['读者用完这本手册之后,行为上应该发生什么变化？',''],30),
        ('sp',10),
        ('sec','要素五：颗粒度说明'),
        ('row',['（仅操作手册填写）每个操作单元的颗粒度：'],20),
        ('row',['','']),
        ('row',['（仅带教手册填写）带教阶段划分：'],20),
        ('row',['','']),
        ('row',['（仅应知应会手册填写）认知地图边界：'],20),
        ('row',['','']),
        ('sp',10),
        ('sec','三类人群交叉确认'),
        ('hdr',['确认项','角色A','角色B','角色C'],22),
        ('row',['目标场景是否覆盖了读者最常遇到的情境','□ 同意  □ 需修改','□ 同意  □ 需修改','□ 同意  □ 需修改'],22),
        ('row',['目标人群描述是否准确','□ 同意  □ 需修改','□ 同意  □ 需修改','□ 同意  □ 需修改'],22),
        ('row',['核心问题是否是读者真实面临的困惑','□ 同意  □ 需修改','□ 同意  □ 需修改','□ 同意  □ 需修改'],22),
        ('row',['预期效果是否合理可实现','□ 同意  □ 需修改','□ 同意  □ 需修改','□ 同意  □ 需修改'],22),
        ('row',['定位表整体确认定稿','□ 确认','□ 确认','□ 确认'],22),
    ])

def build_form3():
    return build_generic_sheet("Form3-访谈准备清单", "使用说明：三轮访谈开始前,访谈组织者用这张表确认访谈条件已就绪。", [
        ('sp',10),
        ('sec','访谈基本安排'),
        ('hdr',['访谈对象','人名','计划时间','地点/方式','预计时长'],22),
        ('row',['角色A','','','','约20-30分钟'],22),
        ('row',['角色B','','','','约40-60分钟'],22),
        ('row',['角色C','','','','约20-30分钟'],22),
        ('sp',10),
        ('sec','准备确认'),
        ('hdr',['准备项','是否就绪'],22),
        ('row',['对应手册类型的访谈问题脚本已经读过一遍','□ 是'],22),
        ('row',['手机录音功能已开启并测试','□ 是'],22),
        ('row',['关键素材记录表已打开（用于记录要点）','□ 是'],22),
        ('row',['已告知受访者录音的目的（用于转文字、生成手册）','□ 是'],22),
        ('row',['已准备好定位表（访谈中需要参照）','□ 是'],22),
        ('row',['追问句式已熟悉（见表4-6末尾）','□ 是'],22),
        ('sp',10),
        ('sec','访谈中需要特别注意的点（针对这次课题的特殊情况）：'),
        ('row',['',''],30),
    ])

def build_form4():
    return build_generic_sheet("Form4-角色A访谈记录表", "使用说明：访谈过程中同步记录,也可以访谈后根据录音补充。", [
        ('sp',10),
        ('sec','受访信息'),
        ('row',[('角色A姓名：','4'),'',('访谈时间：','4'),'',('记录人：','4'),''],22),
        ('sp',10),
        ('sec','开场问题记录'),
        ('row',['1. 你做这件事之前,最不确定的是什么？（记录原话）',''],30),
        ('row',['',''],30),
        ('row',['2. 你入职以来,在这个方面犯过哪些错或者踩过什么坑？',''],30),
        ('row',['',''],30),
        ('row',['3. 你有没有在做这件事时,觉得不知道下一步该怎么办的经历？',''],30),
        ('row',['',''],30),
        ('sp',10),
        ('sec','核心困惑收集（尽量用原话记录）'),
        ('hdr',['困惑编号','困惑内容（原话）','触发场景（在什么情况下有这个困惑）'],30),
        ('row',['A1','',''],22),
        ('row',['A2','',''],22),
        ('row',['A3','',''],22),
        ('row',['A4','',''],22),
        ('row',['A5','',''],22),
        ('row',['A6（如有）','',''],22),
        ('sp',10),
        ('sec','你没有主动问,但其实也不清楚的事情（访谈者引导挖掘）：'),
        ('row',['',''],40),
        ('sp',10),
        ('sec','追问后获得的补充信息：'),
        ('row',['',''],40),
    ])

def build_form5():
    return build_generic_sheet("Form5-角色B访谈记录表", "使用说明：角色B是这本手册的核心经验来源。访谈的关键是把骨干员工的经验说出来。", [
        ('sp',10),
        ('sec','受访信息'),
        ('row',[('角色B姓名：','4'),'',('访谈时间：','4'),'',('记录人：','4'),''],22),
        ('sp',10),
        ('sec','操作起点'),
        ('row',['什么情况触发这个操作（是什么信号让你开始做这件事）：',''],30),
        ('row',['',''],30),
        ('sp',10),
        ('sec','逐步操作记录（每步至少包含：做什么动作、用什么工具或凭什么判断、完成标准是什么）'),
        ('row',['第一步：',''],30),
        ('row',['-> 判断标准（怎么知道这步做对了）：',''],22),
        ('row',['-> 常见错误（容易在这步做错什么）：',''],22),
        ('row',['第二步：',''],30),
        ('row',['-> 判断标准：',''],22),
        ('row',['-> 常见错误：',''],22),
        ('row',['第三步：',''],30),
        ('row',['-> 判断标准：',''],22),
        ('row',['-> 常见错误：',''],22),
        ('row',['第四步（如有）：',''],30),
        ('row',['第五步（如有）：',''],30),
        ('sp',10),
        ('sec','异常情况处理（"如果遇到...,你会怎么做？"）'),
        ('row',['异常情况一：',''],22),
        ('row',['-> 处理方法：',''],30),
        ('row',['异常情况二：',''],22),
        ('row',['-> 处理方法：',''],30),
        ('sp',10),
        ('sec','整体完成标准（怎么知道整个操作做对了、做完了）：'),
        ('row',['',''],30),
        ('sp',10),
        ('sec','关键诀窍/经验（让你比新人做得好的地方在哪里？）：'),
        ('row',['',''],40),
    ])

def build_form6():
    return build_generic_sheet("Form6-角色C访谈记录表", "使用说明：角色C提供的是"标准视角"——什么叫做合格、什么绝对不能做。", [
        ('sp',10),
        ('sec','受访信息'),
        ('row',[('角色C姓名：','4'),'',('访谈时间：','4'),'',('记录人：','4'),''],22),
        ('sp',10),
        ('sec','达标标准'),
        ('hdr',['问题','角色C回答（记录原话）'],24),
        ('row',['做这件事,达到什么水平才算"合格"？',''],30),
        ('row',['有没有你特别看重的几个评判点？',''],30),
        ('row',['新人通常在哪里没达到你的标准？',''],30),
        ('row',['有没有"一旦违反就是大问题"的红线？',''],30),
        ('sp',10),
        ('sec','合规要求与红线'),
        ('hdr',['红线','后果/原因'],24),
        ('row',['1.',''],22),
        ('row',['2.',''],22),
        ('row',['3.',''],22),
        ('sp',10),
        ('sec','组织标准依据（如果某些标准有来源文件或规范,注明）：'),
        ('row',['',''],30),
        ('sp',10),
        ('sec','验收方式（如果你要核查这件事做没做到位,你会看哪几个点）：'),
        ('row',['',''],30),
    ])

def build_form7():
    return build_generic_sheet("Form7-操作手册素材整理表", "使用说明：完成三轮访谈录音转文字后,用这张表整理素材包。", [
        ('sp',10),
        ('sec','【课题基本信息】'),
        ('row',[('手册名称：','4'),'','']),
        ('row',[('目标读者：','4'),'','']),
        ('row',[('核心场景：','4'),'','']),
        ('sp',10),
        ('sec','【任务场景列表】（从访谈中提炼出来的主要工作情境）'),
        ('row',['情境一：','']),
        ('row',['情境二：','']),
        ('row',['情境三：','']),
        ('row',['情境四（如有）：','']),
        ('row',['情境五（如有）：','']),
        ('sp',10),
        ('sec','【骨干员工操作讲解（角色B的表述,尽量保留原话）】'),
        ('row',[('操作起点：','4'),'','']),
        ('row',['第一步：','']),
        ('row',['->判断标准：','']),
        ('row',['->常见错误：','']),
        ('row',['第二步：','']),
        ('row',['第三步：','']),
        ('row',['第四步（如有）：','']),
        ('row',['第五步（如有）：','']),
        ('row',[('完成标准：','4'),'','']),
        ('row',[('异常情况一及处理方法：','4'),'',''],30),
        ('row',[('异常情况二及处理方法：','4'),'',''],30),
        ('row',[('关键诀窍：','4'),'',''],30),
        ('sp',10),
        ('sec','【角色A提供的困惑和坑】'),
        ('row',['困惑一（什么情况下有这个困惑）：','']),
        ('row',['困惑二：','']),
        ('row',['困惑三：','']),
        ('row',['踩过的坑一（发生了什么、后果是什么）：','']),
        ('sp',10),
        ('sec','【角色C确认的标准和红线】'),
        ('row',[('达标标准：','4'),'','']),
        ('row',[('验收要点：','4'),'','']),
        ('row',[('红线一（绝对不能做的事）：','4'),'','']),
        ('row',[('红线二：','4'),'','']),
        ('row',[('红线三（如有）：','4'),'','']),
        ('sp',10),
        ('sec','【现有工具/表单（如有）】'),
        ('row',[('已有表单名称及用途：','4'),'','']),
        ('row',[('已有操作规程文件名称：','4'),'','']),
        ('row',[('其他参考材料：','4'),'','']),
    ])

def build_form8():
    return build_generic_sheet("Form8-带教手册素材整理表", "使用说明：带教手册重点在于"分阶段带教路径",素材整理以"阶段"为核心组织结构。", [
        ('sp',10),
        ('sec','【课题基本信息】'),
        ('row',[('手册名称：','4'),'','']),
        ('row',[('被带教对象：','4'),'','']),
        ('row',[('带教目标：','4'),'','']),
        ('row',[('整个带教周期总时长：','4'),'','']),
        ('sp',10),
        ('sec','【带教阶段划分】'),
        ('row',[('阶段一（时间范围）：','4'),'阶段目标：','']),
        ('row',[('阶段二（时间范围）：','4'),'阶段目标：','']),
        ('row',[('阶段三（时间范围）：','4'),'阶段目标：','']),
        ('row',[('阶段四（如有）：','4'),'阶段目标：','']),
        ('sp',10),
        ('sec','【各阶段示范要点】'),
        ('row',['阶段一：','']),
        ('row',['  这阶段带教人主要做什么示范：','']),
        ('row',['  最需要重点说明的是：','']),
        ('row',['  新人最容易卡住的地方：','']),
        ('row',['  卡住了怎么引导：','']),
        ('row',['  这阶段结束的验收标准：','']),
        ('sp',10),
        ('sec','【常见带教卡点】'),
        ('row',['卡点一（什么情况、原因、有效的引导方法）：',''],30),
        ('row',['卡点二：','']),
        ('row',['卡点三（如有）：','']),
        ('sp',10),
        ('sec','【最终验收标准（角色C确认）】'),
        ('row',[('阶段一达标标准：','4'),'','']),
        ('row',[('阶段二达标标准：','4'),'','']),
        ('row',[('最终通关标准：','4'),'','']),
        ('row',[('验收方式：','4'),'','']),
    ])

def build_form9():
    return build_generic_sheet("Form9-应知应会手册素材整理表", "使用说明：应知应会手册的素材核心是"新人第一个月最需要知道的事情地图"。", [
        ('sp',10),
        ('sec','【课题基本信息】'),
        ('row',[('手册名称：','4'),'','']),
        ('row',[('目标读者（什么阶段的新人）：','4'),'','']),
        ('row',[('阅读时机：','4'),'','']),
        ('row',[('这本手册覆盖的边界：','4'),'','']),
        ('sp',10),
        ('sec','【岗位核心职责（按频次排列）】'),
        ('row',['每天都要做的：','']),
        ('row',['1.','']),
        ('row',['2.','']),
        ('row',['3.','']),
        ('row',['每周/每月做的：','']),
        ('row',['按需触发的（什么情况下需要做）：','']),
        ('sp',10),
        ('sec','【高频场景（新人第一个月最常遇到的情境）】'),
        ('row',['情境一（发生了什么->新人需要知道什么->找谁）：',''],30),
        ('row',['情境二：','']),
        ('row',['情境三：','']),
        ('row',['情境四：','']),
        ('row',['情境五：','']),
        ('sp',10),
        ('sec','【核心术语和概念】'),
        ('hdr',['术语/缩写','解释（用大白话解释）'],30),
        ('row',['','']),
        ('row',['','']),
        ('row',['','']),
        ('sp',10),
        ('sec','【雷区清单】'),
        ('row',['雷区一：','']),
        ('row',['  是什么：','']),
        ('row',['  为什么不能做：','']),
        ('row',['  踩了会怎样：','']),
        ('row',['雷区二：','']),
        ('row',['雷区三：','']),
    ])

def build_form10():
    return build_generic_sheet("Form10-Skill提交前自查表", "使用说明：把素材整理表输入给AI Skill之前,先逐项检查。全部勾选后再提交。", [
        ('sp',10),
        ('sec','课题定位表'),
        ('hdr',['检查项','状态','如未完成,需要补充的内容'],24),
        ('row',['课题定位表已经过三类人群交叉确认、定稿','□ 是  □ 未完成','']),
        ('sp',10),
        ('sec','骨干经验质量'),
        ('row',['角色B的操作讲解达到"动词+对象+判断标准"的颗粒度','□ 是  □ 部分达到','']),
        ('row',['骨干员工的讲解已完成录音转文字,原始口语化内容已整理','□ 是  □ 未完成','']),
        ('sp',10),
        ('sec','场景覆盖完整性'),
        ('row',['读者最常见的3-5个情境,在素材里都有对应内容','□ 是  □ 有遗漏',''],22),
        ('row',['遗漏的：',''],22),
        ('row',['至少有一个"异常情况或出错了怎么处理"的场景','□ 是  □ 没有','']),
        ('sp',10),
        ('sec','角色A视角'),
        ('row',['角色A提供的困惑和坑,已整理至少3条具体问题或错误','□ 是  □ 未完成','']),
        ('sp',10),
        ('sec','角色C视角'),
        ('row',['角色C的标准和红线已整理,至少有1条明确的达标标准和1条红线','□ 是  □ 未完成','']),
        ('sp',10),
        ('sec','格式准备'),
        ('row',['素材整理表已按对应手册类型的格式填写完整','□ 是  □ 未完成','']),
        ('sp',10),
        ('sec','提交Skill时附加说明（如有特殊要求或需要Skill特别注意的地方）：'),
        ('row',['',''],40),
        ('row',[('预计提交时间：','4'),'',('负责提交的人：','4'),'']),
    ])

def build_form11():
    return build_generic_sheet("Form11-初稿快速扫描记录", "使用说明：收到Skill生成的初稿后,先做一轮快速扫描（10-15分钟）。", [
        ('sp',10),
        ('sec','初稿基本信息'),
        ('row',[('收到初稿时间：','4'),'',('初稿总页数/字数（估算）：','4'),'']),
        ('sp',10),
        ('sec','维度一：结构扫描（看目录和章节标题）'),
        ('hdr',['扫描问题','发现'],24),
        ('row',['章节划分是否符合课题定位？覆盖的场景是否和定位表一致？','□ 基本符合  □ 有偏差：']),
        ('row',['有没有明显缺失的重要场景？','□ 没有  □ 有：']),
        ('row',['有没有和手册无关的内容出现在目录里？','□ 没有  □ 有：']),
        ('row',['读者遇到最常见的3个问题,能在目录里找到对应章节吗？','□ 能  □ 部分能  □ 不能']),
        ('sp',10),
        ('sec','维度二：内容扫描（抽查2-3个章节正文）'),
        ('row',['关键操作步骤,是否还原了骨干员工的真实经验？','□ 是  □ 变成了笼统描述：']),
        ('row',['有没有Skill自己生成的、与实际情况不符的内容？','□ 没有  □ 发现：']),
        ('row',['有没有把"个人经验"写成了"组织标准"的表述？','□ 没有  □ 发现：']),
        ('sp',10),
        ('sec','维度三：可用性扫描（以目标读者身份翻阅）'),
        ('row',['翻开第一页,读者知道这本手册是给谁用的吗？','□ 清楚  □ 不清楚']),
        ('row',['遇到异常情况,读者能找到对应的处理指引吗？','□ 能  □ 需要翻找  □ 找不到']),
        ('row',['随机抽查一个操作步骤,读者知道下一步做什么吗？','□ 知道  □ 需要猜  □ 不知道']),
        ('sp',10),
        ('sec','快速扫描总结'),
        ('row',['初稿整体评价：□ 方向基本对,进入细化标记  □ 有方向性问题,需要先讨论再标记']),
        ('row',['最大的问题（如果有）：',''],40),
    ])

def build_form12():
    return build_generic_sheet("Form12-角色A初稿标记记录表", "使用说明：以读者视角阅读初稿。标记符号：V（准确保留）/ △（需补充完善）/ X（有误需重写）/ ?（不确定需核实）", [
        ('sp',10),
        ('sec','标记信息'),
        ('row',[('标记人：','4'),'',('阅读日期：','4'),'']),
        ('sp',10),
        ('sec','标记记录'),
        ('hdr',['编号','位置（章节+段落描述）','标记符号','具体问题','建议方向'],30),
        ('row',['1','','','','']),
        ('row',['2','','','','']),
        ('row',['3','','','','']),
        ('row',['4','','','','']),
        ('row',['5','','','','']),
        ('row',['6（如有）','','','','']),
        ('row',['7（如有）','','','','']),
        ('sp',10),
        ('sec','你在访谈时提出的困惑,手册里有没有回答？'),
        ('hdr',['访谈中的困惑','手册里有没有对应内容','如有,是否清晰够用'],24),
        ('row',['','□ 有  □ 没有','□ 清晰  □ 还不够']),
        ('row',['','□ 有  □ 没有','□ 清晰  □ 还不够']),
        ('row',['','□ 有  □ 没有','□ 清晰  □ 还不够']),
    ])

def build_form13():
    return build_generic_sheet("Form13-角色B初稿标记记录表", "使用说明：以骨干员工的经验视角阅读初稿,找出"经验写错了"或"关键细节消失了"的地方。", [
        ('sp',10),
        ('sec','标记信息'),
        ('row',[('标记人：','4'),'',('阅读日期：','4'),'']),
        ('sp',10),
        ('sec','标记记录'),
        ('hdr',['编号','位置（章节+段落描述）','标记符号','实际情况是什么（经验描述有何差异）','修改建议'],30),
        ('row',['1','','','','']),
        ('row',['2','','','','']),
        ('row',['3','','','','']),
        ('row',['4','','','','']),
        ('row',['5','','','','']),
        ('row',['6（如有）','','','','']),
        ('sp',10),
        ('sec','初稿里有没有特别好地还原了你的经验、应该保留的内容？'),
        ('row',['',''],40),
    ])

def build_form14():
    return build_generic_sheet("Form14-角色C初稿标记记录表", "使用说明：以管理者视角阅读初稿,找出"不符合标准"或"存在合规风险"的地方。", [
        ('sp',10),
        ('sec','标记信息'),
        ('row',[('标记人：','4'),'',('阅读日期：','4'),'']),
        ('sp',10),
        ('sec','标记记录'),
        ('hdr',['编号','位置（章节+段落描述）','标记符号','标准偏差或合规问题描述','正确表述应该是'],30),
        ('row',['1','','','','']),
        ('row',['2','','','','']),
        ('row',['3','','','','']),
        ('row',['4','','','','']),
        ('row',['5（如有）','','','','']),
        ('sp',10),
        ('sec','你在访谈中明确的红线,在初稿里有没有被正确体现？'),
        ('hdr',['红线内容','初稿里的处理','是否需要修改'],24),
        ('row',['','□ 正确体现  □ 没有提到  □ 表述有误','□ 需要  □ 不需要']),
        ('row',['','□ 正确体现  □ 没有提到  □ 表述有误','□ 需要  □ 不需要']),
        ('row',['','□ 正确体现  □ 没有提到  □ 表述有误','□ 需要  □ 不需要']),
    ])

def build_form15():
    return build_generic_sheet("Form15-汇总修改优先级清单", "使用说明：三类人群各自完成标记后,汇总成这份清单。原则：先处理"被多人标记的"和"涉及核心操作步骤的"。", [
        ('sp',10),
        ('sec','汇总信息'),
        ('row',[('汇总时间：','4'),'',('汇总人：','4'),'']),
        ('sp',10),
        ('sec','修改清单'),
        ('hdr',['编号','来源（A/B/C）','位置','问题描述','优先级','修改负责人','完成状态'],24),
        ('row',['1','','','','□最优先  □优先  □一般','','□待处理  □已完成']),
        ('row',['2','','','','□最优先  □优先  □一般','','□待处理  □已完成']),
        ('row',['3','','','','□最优先  □优先  □一般','','□待处理  □已完成']),
        ('row',['4','','','','□最优先  □优先  □一般','','□待处理  □已完成']),
        ('row',['5','','','','□最优先  □优先  □一般','','□待处理  □已完成']),
        ('row',['6','','','','□最优先  □优先  □一般','','□待处理  □已完成']),
        ('row',['7','','','','□最优先  □优先  □一般','','□待处理  □已完成']),
        ('row',['8（如有）','','','','□最优先  □优先  □一般','','□待处理  □已完成']),
        ('row',['9（如有）','','','','□最优先  □优先  □一般','','□待处理  □已完成']),
        ('row',['10（如有）','','','','□最优先  □优先  □一般','','□待处理  □已完成']),
        ('sp',10),
        ('sec','优先级判断标准'),
        ('hdr',['优先级','类型','说明'],22),
        ('row',['最优先','方向性问题','整章内容方向跑偏,需要重写']),
        ('row',['优先','关键细节缺失','重要经验或步骤漏掉,需要补充']),
        ('row',['一般','表述不准确','大方向对但描述有偏差,需调整措辞']),
        ('row',['最后','语言优化','内容准确但读起来不够清晰流畅']),
    ])

def build_form16():
    return build_generic_sheet("Form16-操作手册深度校验清单", "使用说明：在三类人群标记和汇总修改之后,进行最后一轮系统性校验。", [
        ('sp',10),
        ('sec','结构层面'),
        ('hdr',['校验项','检查结果','需要补充/修改的内容'],24),
        ('row',['目录里是否有"遇到异常情况怎么处理"的章节','□ 是  □ 否','']),
        ('row',['各章节是否按照"读者会遇到什么情境"来划分（而非知识点分类）','□ 是  □ 部分','']),
        ('row',['手册开篇是否说明了"这本手册给谁用、遇到什么情况翻哪章"','□ 是  □ 否','']),
        ('sp',10),
        ('sec','准确性层面'),
        ('row',['操作步骤是否与骨干员工（角色B）的实际做法一致','□ 是  □ 部分  □ 否','']),
        ('row',['每个步骤是否有"完成标准"（做完了是什么状态）','□ 是  □ 部分  □ 否','']),
        ('row',['术语和缩写是否对目标读者解释清楚了','□ 是  □ 部分','']),
        ('row',['涉及组织规范的内容,是否与角色C确认的标准一致','□ 是  □ 部分  □ 否','']),
        ('sp',10),
        ('sec','完整性层面'),
        ('row',['角色A提出的困惑,是否都在手册里找到了对应回答','□ 是  □ 部分  □ 否','']),
        ('row',['角色B提到的关键诀窍,是否都保留在初稿中','□ 是  □ 部分  □ 否','']),
        ('row',['至少有一个"出错了/遇到异常时该怎么做"的场景描述','□ 是  □ 否','']),
        ('row',['红线内容（角色C提供）是否都有体现','□ 是  □ 部分  □ 否','']),
        ('sp',10),
        ('sec','可用性层面'),
        ('row',['步骤之间有没有"隐含步骤"（从A到B中间还需要做什么,但没写）','□ 已检查,无遗漏  □ 发现遗漏：','']),
        ('row',['角色A拿着这份初稿,能独立完成一次操作吗','□ 能  □ 部分能  □ 不能','']),
        ('row',['手册里是否有对应的表单/工具（或标明了在哪里能找到）','□ 是  □ 否','']),
    ])

def build_form17():
    return build_generic_sheet("Form17-带教手册深度校验清单", "使用说明：带教手册的校验重点在于"带教人按照这本手册,能独立完成一次带教吗"。", [
        ('sp',10),
        ('sec','结构层面'),
        ('hdr',['校验项','检查结果','需要补充/修改的内容'],24),
        ('row',['带教阶段划分是否清晰（每个阶段的时间范围和目标明确）','□ 是  □ 部分','']),
        ('row',['各阶段是否都有对应的"示范要点"和"观察要点"','□ 是  □ 部分  □ 否','']),
        ('row',['手册是否有"带教人使用说明"（这本手册怎么用,每阶段用哪部分）','□ 是  □ 否','']),
        ('sp',10),
        ('sec','准确性层面'),
        ('row',['带教方法描述是否具体到"做什么动作、说什么话"','□ 是  □ 部分','']),
        ('row',['带教人按照这本手册,能独立完成一次带教吗','□ 能  □ 部分能  □ 不能','']),
        ('row',['验收标准是否和管理者（角色C）的标准一致','□ 是  □ 部分  □ 否','']),
        ('sp',10),
        ('sec','完整性层面'),
        ('row',['是否有"常见带教卡点"的描述（新人在哪里卡住,怎么引导）','□ 是  □ 否','']),
        ('row',['是否有"带教误区"的描述（带教人可能犯的错）','□ 是  □ 否','']),
        ('row',['是否覆盖了完整的带教周期（从开始到验收通关）','□ 是  □ 部分','']),
        ('sp',10),
        ('sec','可用性层面'),
        ('row',['带教跟进记录的方法是否具体（记什么、什么时候记、记录在哪里）','□ 是  □ 部分','']),
        ('row',['带教人能从手册里找到"这阶段结束了吗"的判断标准吗','□ 是  □ 否','']),
        ('row',['带教跟进记录表/阶段验收表是否已嵌入手册','□ 是  □ 否','']),
    ])

def build_form18():
    return build_generic_sheet("Form18-应知应会手册深度校验清单", "使用说明：应知应会手册的校验重点在于"新人读完之后,对这个岗位的整体认知地图是否清晰"。", [
        ('sp',10),
        ('sec','结构层面'),
        ('hdr',['校验项','检查结果','需要补充/修改的内容'],24),
        ('row',['手册是否有"速查索引"或"按场景找内容"的入口','□ 是  □ 否','']),
        ('row',['内容颗粒度是否是"认知地图"级别,而非"操作手册"级别（偏深）','□ 是  □ 偏深需调整','']),
        ('row',['手册开篇是否说明了阅读时机和使用方法','□ 是  □ 否','']),
        ('sp',10),
        ('sec','准确性层面'),
        ('row',['核心术语解释是否准确（角色C确认）','□ 是  □ 部分  □ 否','']),
        ('row',['岗位职责描述是否与实际工作内容一致','□ 是  □ 部分','']),
        ('row',['主要对接部门/联系方式等信息是否最新有效','□ 是  □ 需核实','']),
        ('sp',10),
        ('sec','完整性层面'),
        ('row',['新人常见问题清单,是否都有对应的简短回答','□ 是  □ 部分  □ 否','']),
        ('row',['雷区清单,是否有至少3条明确的"不能做什么、为什么"','□ 是  □ 否','']),
        ('row',['高频场景,是否都有"遇到了->找谁->怎么处理"的指引','□ 是  □ 部分','']),
        ('sp',10),
        ('sec','可用性层面'),
        ('row',['角色A读完全本,能用自己的话复述这个岗位的主要工作吗','□ 能  □ 部分  □ 不能','']),
        ('row',['速查表/术语表是否清晰,方便新人翻查','□ 是  □ 需优化','']),
    ])

def build_form19():
    return build_generic_sheet("Form19-五步优化工作表", "使用说明：对手册的核心章节逐步应用五步优化法。建议先完成第一步（痛点共鸣）。", [
        ('sp',10),
        ('sec','手册信息'),
        ('row',[('手册名称：','4'),'',('本次优化的目标章节：','4'),'']),
        ('sp',10),
        ('sec','第一步：让人有意愿读——痛点共鸣'),
        ('row',['目标：开篇第一段,让读者觉得"这说的就是我"。',''],20),
        ('row',['改写前（原开篇）：',''],22),
        ('row',['',''],40),
        ('row',['改写后（痛点共鸣段落,150-200字）：',''],22),
        ('row',['',''],60),
        ('sp',10),
        ('sec','第二步：让人建立连接——场景描述'),
        ('row',['目标：把"注意X"改写成"当你在Y情境下...",让读者脑子里能看见画面。',''],20),
        ('row',['选取需要改写的原表述（1-2条）：',''],22),
        ('row',['改写后：',''],40),
        ('sp',10),
        ('sec','第三步：让人理解价值——给出理由'),
        ('row',['目标：在关键步骤后面加上"这样做的价值是什么",让读者知道为什么值得按这个要求做。',''],20),
        ('row',['选取需要补充"理由"的步骤：',''],22),
        ('row',['补充后：',''],40),
        ('sp',10),
        ('sec','第四步：让人知道下一步——行动驱动'),
        ('row',['目标：章节末尾加2-3个自查问题,或者一句话的行动提醒。',''],20),
        ('row',['本章节末尾的自查问题/行动提醒草稿：',''],40),
        ('sp',10),
        ('sec','第五步：让人带走一个信念——结尾强化'),
        ('row',['目标：全文结尾,用一段话说明"做到这件事,对读者自己意味着什么"。',''],20),
        ('row',['结尾强化段落草稿（50-100字）：',''],40),
        ('sp',10),
        ('sec','优化前后对比'),
        ('hdr',['','优化前','优化后'],22),
        ('row',['开篇吸引力','□ 低  □ 中  □ 高','□ 低  □ 中  □ 高']),
        ('row',['场景感','□ 低  □ 中  □ 高','□ 低  □ 中  □ 高']),
        ('row',['行动指引清晰度','□ 低  □ 中  □ 高','□ 低  □ 中  □ 高']),
    ])

def build_form20():
    return build_generic_sheet("Form20-交叉评审反馈表", "使用说明：同类手册互评时使用（操作手册互评/带教手册互评/应知应会手册互评）。", [
        ('sp',10),
        ('sec','评审基本信息'),
        ('hdr',['项目','信息'],22),
        ('row',['评审人','']),
        ('row',['被评审手册名称','']),
        ('row',['被评审小组','']),
        ('row',['评审日期','']),
        ('sp',10),
        ('sec','四个维度评审'),
        ('hdr',['维度','总体评价','具体发现'],24),
        ('row',['内容准确性（有没有发现错误或容易引起误解的表述）','□ 没有发现问题  □ 发现了问题','']),
        ('row',['操作可行性（目标读者按这本手册能独立完成操作吗）','□ 能  □ 部分能  □ 不能','']),
        ('row',['语言通俗性（有没有对目标读者来说太专业或解释不清的地方）','□ 通俗清晰  □ 有部分需要改','']),
        ('row',['格式规范性（格式是否清晰,工具和正文是否明确区分）','□ 规范  □ 需要调整','']),
        ('sp',10),
        ('sec','优化建议（每条建议尽量具体：位置+问题+建议方向）'),
        ('hdr',['编号','位置（第几章/第几节）','问题描述','建议方向'],24),
        ('row',['1','','','']),
        ('row',['2','','','']),
        ('row',['3','','','']),
        ('sp',10),
        ('sec','手册负责人处理决定'),
        ('hdr',['反馈编号','处理决定','理由（不采纳的说明为什么）'],24),
        ('row',['1','□ 采纳  □ 不采纳','']),
        ('row',['2','□ 采纳  □ 不采纳','']),
        ('row',['3','□ 采纳  □ 不采纳','']),
    ])

def build_form21():
    return build_generic_sheet("Form21-工作坊后迭代计划表", "使用说明：工作坊最后阶段,每个课题组填写一份,用于明确手册发布前还需要完成的工作。", [
        ('sp',10),
        ('sec','课题信息'),
        ('row',[('手册名称：','4'),'',('课题负责人：','4'),'']),
        ('sp',10),
        ('sec','工作坊结束时的完成状态'),
        ('hdr',['项目','状态'],24),
        ('row',['手册核心内容完成度','□ 80%以上  □ 50-80%  □ 50%以下']),
        ('row',['工具包是否已嵌入手册','□ 已完成  □ 部分完成  □ 未完成']),
        ('row',['典型案例是否已写入','□ 已完成  □ 部分完成  □ 未完成']),
        ('row',['五步优化是否已完成','□ 已完成  □ 部分完成  □ 未完成']),
        ('sp',10),
        ('sec','工作坊后待完成清单'),
        ('hdr',['待完成事项','负责人','预计完成时间'],24),
        ('row',['','','']),
        ('row',['','','']),
        ('row',['','','']),
        ('row',['','','']),
        ('sp',10),
        ('sec','发布前审核计划'),
        ('hdr',['审核阶段','审核内容','审核方','预计时间'],24),
        ('row',['内容审核','操作步骤与实际工作一致性确认','角色B（业务骨干）','']),
        ('row',['合规审核','规范承诺责任界定等内容合规性确认','角色C + 相关职能部门','']),
        ('row',['试用验证','2-3名真实目标读者用手册实际操作一次','角色A类型的真实用户','']),
        ('row',['发布定稿','根据试用反馈做最终调整,完成排版','课题负责人','']),
        ('sp',10),
        ('sec','持续迭代机制'),
        ('row',['更新触发条件：□ 每半年定期评审  □ 流程有重大变化时  □ 收集到明显新的案例或问题时']),
        ('row',['更新信号收集方式：',''],30),
        ('row',['版本管理方式：',''],30),
        ('sp',10),
        ('sec','工作坊总结'),
        ('row',['这次工作坊,我收获最大的一点是：',''],40),
        ('row',['这套手册发布之后,我最想看到的改变是：',''],40),
    ])

def build_form(n):
    builders = [build_form0, build_form1, build_form2, build_form3, build_form4,
                build_form5, build_form6, build_form7, build_form8, build_form9,
                build_form10, build_form11, build_form12, build_form13, build_form14,
                build_form15, build_form16, build_form17, build_form18, build_form19,
                build_form20, build_form21]
    if n < len(builders):
        return builders[n]()
    return '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><sheetData></sheetData></worksheet>'

def main():
    work = WORK_DIR
    os.makedirs(work, exist_ok=True)

    # Write styles.xml
    with open(os.path.join(work, 'xl', 'styles.xml'), 'w', encoding='utf-8') as f:
        f.write(STYLES)

    # Build workbook.xml
    wb_sheets = []
    wb_rels = ['  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>',
                '  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>',
                '  <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml"/>']
    ct_overrides = ['  <Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>',
                    '  <Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/>']

    for i, name in enumerate(SHEET_NAMES):
        sheet_num = i + 1
        rid = f'rId{sheet_num + 3}'  # Start at rId4
        wb_sheets.append(f'  <sheet name="{e(name)}" sheetId="{sheet_num}" r:id="{rid}"/>')
        wb_rels.append(f'  <Relationship Id="{rid}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet{sheet_num}.xml"/>')
        ct_overrides.append(f'  <Override PartName="/xl/worksheets/sheet{sheet_num}.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>')

    workbook_xml = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <bookViews><workbookView xWindow="0" yWindow="0" windowWidth="20140" windowHeight="12000"/></bookViews>
  <sheets>
{chr(10).join(wb_sheets)}
  </sheets>
  <calcPr calcId="191029" fullCalcOnLoad="1"/>
</workbook>'''

    workbook_rels = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
{chr(10).join(wb_rels)}
</Relationships>'''

    content_types = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
{chr(10).join(ct_overrides)}
</Types>'''

    with open(os.path.join(work, 'xl', 'workbook.xml'), 'w', encoding='utf-8') as f:
        f.write(workbook_xml)

    with open(os.path.join(work, 'xl', '_rels', 'workbook.xml.rels'), 'w', encoding='utf-8') as f:
        f.write(workbook_rels)

    with open(os.path.join(work, '[Content_Types].xml'), 'w', encoding='utf-8') as f:
        f.write(content_types)

    # Create sharedStrings.xml (empty - we use inlineStr)
    with open(os.path.join(work, 'xl', 'sharedStrings.xml'), 'w', encoding='utf-8') as f:
        f.write('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="0" uniqueCount="0"/>')

    # Create worksheets directory
    ws_dir = os.path.join(work, 'xl', 'worksheets')
    os.makedirs(ws_dir, exist_ok=True)

    # Build all sheets
    sheets_data = [build_index_sheet()] + [build_form(i) for i in range(22)]

    for i, content in enumerate(sheets_data):
        with open(os.path.join(ws_dir, f'sheet{i+1}.xml'), 'w', encoding='utf-8') as f:
            f.write(content)

    # Pack the xlsx
    import subprocess
    packer = r'C:\Users\Administrator\.claude\skills\Excel表格处理\scripts\xlsx_pack.py'
    result = subprocess.run(['python3', packer, work, OUTPUT_PATH],
                          capture_output=True, text=True)
    print("STDOUT:", result.stdout)
    print("STDERR:", result.stderr)
    print("Return code:", result.returncode)

    if result.returncode == 0:
        print(f"\nSUCCESS: Output written to {OUTPUT_PATH}")
    else:
        print("PACK FAILED")

if __name__ == '__main__':
    main()
