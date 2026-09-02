# Build all 3 Lean Management demo Excel files
import shutil, zipfile, os
from xml.sax.saxutils import escape

SKILL_DIR = 'C:/Users/Administrator/.claude/skills/Excel表格处理'
TEMPLATE_DIR = SKILL_DIR + '/templates/minimal_xlsx'
OUT_DIR = 'D:/Downloads/xinjian/精益管理Demo输出/'
os.makedirs(OUT_DIR, exist_ok=True)

def fresh():
    p = '/tmp/xlsx_work/'
    shutil.rmtree(p, ignore_errors=True)
    shutil.copytree(TEMPLATE_DIR, p, dirs_exist_ok=True)
    return p

def write_file(path, content):
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)

def col_letter(n):
    if n <= 26:
        return chr(64+n)
    return chr(64+(n-1)//26) + chr(65+(n-1)%26)

def make_sheet_data_rows(strings, row_defs):
    xml_rows = []
    for rnum, row in enumerate(row_defs, 1):
        if not row:
            xml_rows.append('<row r="{}"/>'.format(rnum))
            continue
        cells_xml = []
        for ci, cell in enumerate(row, 1):
            cl = col_letter(ci)
            if cell is None:
                continue
            ctype, cval = cell[0], cell[1]
            if ctype == 's':
                s = cell[2] if len(cell) > 2 else '1'
                cells_xml.append('<c r="{}{}" t="s" s="{}"><v>{}</v></c>'.format(cl, rnum, s, cval))
            elif ctype == 'n':
                s = cell[2] if len(cell) > 2 else '1'
                cells_xml.append('<c r="{}{}" s="{}"><v>{}</v></c>'.format(cl, rnum, s, cval))
            elif ctype == 'f':
                s = cell[2] if len(cell) > 2 else '2'
                cells_xml.append('<c r="{}{}" s="{}"><f>{}</f><v></v></c>'.format(cl, rnum, s, cval))
            elif ctype == 'fn':
                fstr, s = cval, cell[2]
                cells_xml.append('<c r="{}{}" s="{}"><f>{}</f><v></v></c>'.format(cl, rnum, s, fstr))
        xml_rows.append('<row r="{}">{}</row>'.format(rnum, ''.join(cells_xml)))
    return '\n'.join(xml_rows)

def make_sheet_xml(sheet_data, col_widths=None):
    col_xml = ''
    if col_widths:
        for ci, w in enumerate(col_widths, 1):
            col_xml += '<col min="{}" max="{}" width="{}" customWidth="1"/>\n'.format(ci, ci, w)
    return '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"/></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols>
{}  </cols>
  <sheetData>
{}
  </sheetData>
</worksheet>'''.format(col_xml.rstrip(), sheet_data)

def pack_xlsx(workdir, outpath):
    os.system('python3 "{}" {} {}'.format(SKILL_DIR + '/scripts/xlsx_pack.py', workdir, outpath))

# ============================================================
# DEMO A: 浪费识别与业务画卷诊断
# ============================================================
A_STRINGS = [
    "精益管理_DemoA_浪费识别与业务画卷诊断表",
    "项目名称", "项目编号", "培训师", "编写日期", "版本",
    "一、业务画卷分析表",
    "产线/工序名称", "工序序号", "加工时间C/T(秒)", "等待时间C/O(秒)", "在制品数量WIP", "瓶颈标识", "日产量(件)",
    "信息流状态", "物流状态", "等待/停滞点", "浪费类型", "关键发现", "备注",
    "二、七大浪费识别评分表",
    "浪费类型", "严重程度S(1-5)", "发生频率F(1-5)", "浪费证据/影响描述", "综合评分(S×F)", "改善难度D(1-3)", "优先等级(综合/D)",
    "① 等待浪费", "② 搬运浪费", "③ 不良浪费", "④ 动作浪费", "⑤ 库存浪费", "⑥ 加工过量浪费", "⑦ 生产过剩浪费",
    "三、浪费优先级排序表",
    "优先级排名", "浪费类型", "综合评分", "优先等级", "改善方向建议", "责任人", "计划完成日期", "备注",
    "四、TOP优先改善浪费详情（TOP3）",
    "TOP序号", "TOP浪费问题描述", "当前状态", "改善目标", "具体改善措施", "预期效果", "验证指标", "试点产线", "负责人", "完成时限",
    "TOP1", "TOP2", "TOP3",
    "五、诊断结论与后续行动",
    "诊断结论", "后续行动计划", "责任部门", "完成标准", "时间节点",
    "诊断完成", "待现场确认", "已识别TOP浪费：", "主要浪费类型：",
    "是", "否", "待确认",
]

def build_demo_a(workdir):
    # Shared strings
    ss_xml = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n'
    ss_xml += '<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="{}" uniqueCount="{}">\n'.format(len(A_STRINGS), len(A_STRINGS))
    for s in A_STRINGS:
        ss_xml += '  <si><t>{}</t></si>\n'.format(escape(s))
    ss_xml += '</sst>'
    write_file(workdir + '/xl/sharedStrings.xml', ss_xml)

    # Sheet 1: 基本信息
    s1 = make_sheet_data_rows(A_STRINGS, [
        [("s",0,"4")],
        [("s",1,"4"),("s",0,"1")],
        [("s",2,"4"),("s",1,"1")],
        [("s",3,"4"),("s",1,"1")],
        [("s",4,"4"),("s",1,"1")],
        [("s",5,"4"),("s",1,"1")],
        [None],
        [("s",63,"4"),("s",64,"1"),("s",65,"1"),("s",66,"1"),("s",67,"1"),("s",68,"1")],
        [("s",69,"4"),("s",70,"1"),("s",71,"1"),("s",72,"1"),("s",73,"1"),("s",74,"1")],
    ])
    write_file(workdir + '/xl/worksheets/sheet1.xml', make_sheet_xml(s1, [4,20,16,16,16,16,14]))

    # Sheet 2: 业务画卷分析
    s2 = make_sheet_data_rows(A_STRINGS, [
        [("s",7,"4"),("s",8,"4"),("s",9,"4"),("s",10,"4"),("s",11,"4"),("s",12,"4"),("s",13,"4")],
        [("s",7,"1"),("n",1,"1"),("n",60,"1"),("n",20,"1"),("n",10,"1"),("s",44,"1"),("n",800,"1")],
        [("s",7,"1"),("n",2,"1"),("n",120,"1"),("n",30,"1"),("n",15,"1"),("s",44,"1"),("n",600,"1")],
        [("s",7,"1"),("n",3,"1"),("n",90,"1"),("n",15,"1"),("n",8,"1"),("s",45,"1"),("n",400,"1")],
        [("s",7,"1"),("n",4,"1"),("n",45,"1"),("n",20,"1"),("n",5,"1"),("s",44,"1"),("n",900,"1")],
        [("s",7,"1"),("n",5,"1"),("n",30,"1"),("n",10,"1"),("n",3,"1"),("s",44,"1"),("n",1200,"1")],
    ])
    write_file(workdir + '/xl/worksheets/sheet2.xml', make_sheet_xml(s2, [4,18,14,14,12,12,12]))

    # Sheet 3: 七大浪费识别评分
    s3 = make_sheet_data_rows(A_STRINGS, [
        [("s",15,"4"),("s",16,"4"),("s",17,"4"),("s",18,"4"),("s",19,"4"),("s",20,"4"),("s",21,"4")],
        [("s",22,"1"),("n",4,"7"),("n",4,"7"),("s",18,"1"),("fn","C2*D2","6"),("n",2,"7"),("fn","ROUND(E2/F2,1)","8")],
        [("s",23,"1"),("n",3,"7"),("n",3,"7"),("s",18,"1"),("fn","C3*D3","6"),("n",2,"7"),("fn","ROUND(E3/F3,1)","8")],
        [("s",24,"1"),("n",5,"7"),("n",4,"7"),("s",18,"1"),("fn","C4*D4","6"),("n",3,"7"),("fn","ROUND(E4/F4,1)","8")],
        [("s",25,"1"),("n",2,"7"),("n",3,"7"),("s",18,"1"),("fn","C5*D5","6"),("n",2,"7"),("fn","ROUND(E5/F5,1)","8")],
        [("s",26,"1"),("n",3,"7"),("n",2,"7"),("s",18,"1"),("fn","C6*D6","6"),("n",2,"7"),("fn","ROUND(E6/F6,1)","8")],
        [("s",27,"1"),("n",2,"7"),("n",2,"7"),("s",18,"1"),("fn","C7*D7","6"),("n",3,"7"),("fn","ROUND(E7/F7,1)","8")],
        [("s",28,"1"),("n",4,"7"),("n",5,"7"),("s",18,"1"),("fn","C8*D8","6"),("n",2,"7"),("fn","ROUND(E8/F8,1)","8")],
    ])
    write_file(workdir + '/xl/worksheets/sheet3.xml', make_sheet_xml(s3, [4,18,12,24,14,12,16]))

    # Sheet 4: 浪费优先级排序
    s4 = make_sheet_data_rows(A_STRINGS, [
        [("s",35,"4"),("s",36,"4"),("s",37,"4"),("s",38,"4"),("s",39,"4"),("s",40,"4"),("s",41,"4"),("s",42,"4")],
        [("n",1,"1"),("s",22,"1"),("fn","'七大浪费识别评分'!E2","2"),("s",44,"1"),("s",45,"1"),("s",46,"1"),("s",47,"1"),("s",48,"1")],
        [("n",2,"1"),("s",23,"1"),("fn","'七大浪费识别评分'!E3","2"),("s",44,"1"),("s",45,"1"),("s",46,"1"),("s",47,"1"),("s",48,"1")],
        [("n",3,"1"),("s",24,"1"),("fn","'七大浪费识别评分'!E4","2"),("s",44,"1"),("s",45,"1"),("s",46,"1"),("s",47,"1"),("s",48,"1")],
        [("n",4,"1"),("s",25,"1"),("fn","'七大浪费识别评分'!E5","2"),("s",44,"1"),("s",45,"1"),("s",46,"1"),("s",47,"1"),("s",48,"1")],
        [("n",5,"1"),("s",26,"1"),("fn","'七大浪费识别评分'!E6","2"),("s",44,"1"),("s",45,"1"),("s",46,"1"),("s",47,"1"),("s",48,"1")],
        [("n",6,"1"),("s",27,"1"),("fn","七大浪费识别评分!E7","2"),("s",44,"1"),("s",45,"1"),("s",46,"1"),("s",47,"1"),("s",48,"1")],
        [("n",7,"1"),("s",28,"1"),("fn","七大浪费识别评分!E8","2"),("s",44,"1"),("s",45,"1"),("s",46,"1"),("s",47,"1"),("s",48,"1")],
    ])
    write_file(workdir + '/xl/worksheets/sheet4.xml', make_sheet_xml(s4, [4,16,12,12,16,12,14,14]))

    # Sheet 5: TOP优先改善
    s5 = make_sheet_data_rows(A_STRINGS, [
        [("s",49,"4"),("s",50,"4"),("s",51,"4"),("s",52,"4"),("s",53,"4"),("s",54,"4"),("s",55,"4"),("s",56,"4"),("s",57,"4"),("s",58,"4")],
        [("s",59,"1"),("s",22,"1"),("s",62,"1"),("s",45,"1"),("s",46,"1"),("s",47,"1"),("s",48,"1"),("s",46,"1"),("s",40,"1"),("s",41,"1")],
        [("s",60,"1"),("s",23,"1"),("s",62,"1"),("s",45,"1"),("s",46,"1"),("s",47,"1"),("s",48,"1"),("s",46,"1"),("s",40,"1"),("s",41,"1")],
        [("s",61,"1"),("s",24,"1"),("s",62,"1"),("s",45,"1"),("s",46,"1"),("s",47,"1"),("s",48,"1"),("s",46,"1"),("s",40,"1"),("s",41,"1")],
    ])
    write_file(workdir + '/xl/worksheets/sheet5.xml', make_sheet_xml(s5, [4,20,12,16,20,14,14,12,12,14]))

    # Sheet 6: 诊断结论
    s6 = make_sheet_data_rows(A_STRINGS, [
        [("s",63,"4"),("s",64,"4"),("s",65,"4"),("s",66,"4"),("s",67,"4")],
        [("s",68,"1"),("s",69,"1"),("s",70,"1"),("s",71,"1"),("s",72,"1")],
        [("s",68,"1"),("s",69,"1"),("s",70,"1"),("s",71,"1"),("s",72,"1")],
    ])
    write_file(workdir + '/xl/worksheets/sheet6.xml', make_sheet_xml(s6, [4,24,16,16,14]))

    # Workbook
    wb_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheets>
    <sheet name="基本信息" sheetId="1" r:id="rId1"/>
    <sheet name="业务画卷分析" sheetId="2" r:id="rId4"/>
    <sheet name="七大浪费识别评分" sheetId="3" r:id="rId5"/>
    <sheet name="浪费优先级排序" sheetId="4" r:id="rId6"/>
    <sheet name="TOP优先改善" sheetId="5" r:id="rId7"/>
    <sheet name="诊断结论与行动" sheetId="6" r:id="rId8"/>
  </sheets>
  <calcPr calcMode="auto"/>
</workbook>'''
    write_file(workdir + '/xl/workbook.xml', wb_xml)

    wb_rels = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
  <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml"/>
  <Relationship Id="rId4" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet2.xml"/>
  <Relationship Id="rId5" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet3.xml"/>
  <Relationship Id="rId6" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet4.xml"/>
  <Relationship Id="rId7" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet5.xml"/>
  <Relationship Id="rId8" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet6.xml"/>
</Relationships>'''
    write_file(workdir + '/xl/_rels/workbook.xml.rels', wb_rels)

    ct_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
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
</Types>'''
    write_file(workdir + '/[Content_Types].xml', ct_xml)

    outpath = OUT_DIR + '精益管理_DemoA_浪费识别与业务画卷诊断.xlsx'
    pack_xlsx(workdir, outpath)
    print("DemoA done:", outpath)

# ============================================================
# DEMO B: 改善提案与追踪表
# ============================================================
B_STRINGS = [
    "精益管理_DemoB_改善提案与追踪表",
    "项目名称", "项目编号", "培训师", "编写日期", "版本",
    "一、一般信息",
    "客户名称", "部门/车间", "成员姓名", "成员角色", "使用/改进", "填写日期", "部门负责人",
    "二、改善提案活动",
    "提案日期", "提案编号", "提案人", "所属部门", "提案名称", "提案类型", "问题描述", "改善对策", "预期效果",
    "三、改善项目执行计划",
    "项目名称", "执行措施", "计划完成日期", "实际完成日期", "负责人", "配合部门", "预算(元)", "预期效益(元)", "项目进展状态",
    "四、执行成功案例记录",
    "序号", "项目名称", "负责人", "完成时间", "实施过程", "成功原因", "可复制经验", "效益提升(元)", "状态",
    "五、提案追踪",
    "提案编号", "提案名称", "提案人", "提交日期", "审核状态", "审核意见", "是否采纳", "执行进展", "完成日期", "备注",
    "是", "否", "待审核", "已采纳", "已驳回", "执行中", "已完成", "已关闭",
    "A类-效率提升", "B类-质量改善", "C类-成本降低", "D类-安全环境", "E类-其他",
    "优秀", "良好", "一般", "待改进",
]

def build_demo_b(workdir):
    ss_xml = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n'
    ss_xml += '<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="{}" uniqueCount="{}">\n'.format(len(B_STRINGS), len(B_STRINGS))
    for s in B_STRINGS:
        ss_xml += '  <si><t>{}</t></si>\n'.format(escape(s))
    ss_xml += '</sst>'
    write_file(workdir + '/xl/sharedStrings.xml', ss_xml)

    # Sheet 1: 基本信息
    s1 = make_sheet_data_rows(B_STRINGS, [
        [("s",0,"4")],
        [("s",1,"4"),("s",0,"1")],
        [("s",2,"4"),("s",1,"1")],
        [("s",3,"4"),("s",1,"1")],
        [("s",4,"4"),("s",1,"1")],
        [("s",5,"4"),("s",1,"1")],
        [None],
        [("s",6,"4"),("s",7,"1"),("s",8,"1"),("s",9,"1"),("s",10,"1"),("s",11,"1"),("s",12,"1")],
    ])
    write_file(workdir + '/xl/worksheets/sheet1.xml', make_sheet_xml(s1, [4,20,16,16,14,14,14]))

    # Sheet 2: 改善提案活动
    s2 = make_sheet_data_rows(B_STRINGS, [
        [("s",13,"4"),("s",14,"4"),("s",15,"4"),("s",16,"4"),("s",17,"4"),("s",18,"4"),("s",19,"4"),("s",20,"4"),("s",21,"4")],
        [("n",1,"1"),("s",41,"1"),("s",22,"1"),("s",23,"1"),("s",24,"1"),("s",25,"1"),("s",26,"1"),("s",27,"1"),("s",28,"1")],
        [("n",2,"1"),("s",42,"1"),("s",22,"1"),("s",23,"1"),("s",24,"1"),("s",25,"1"),("s",26,"1"),("s",27,"1"),("s",28,"1")],
        [("n",3,"1"),("s",43,"1"),("s",22,"1"),("s",23,"1"),("s",24,"1"),("s",25,"1"),("s",26,"1"),("s",27,"1"),("s",28,"1")],
    ])
    write_file(workdir + '/xl/worksheets/sheet2.xml', make_sheet_xml(s2, [4,14,16,16,20,16,16,16,14]))

    # Sheet 3: 执行计划
    s3 = make_sheet_data_rows(B_STRINGS, [
        [("s",29,"4"),("s",30,"4"),("s",31,"4"),("s",32,"4"),("s",33,"4"),("s",34,"4"),("s",35,"4"),("s",36,"4"),("s",37,"4"),("s",38,"4")],
        [("s",24,"1"),("s",27,"1"),("s",31,"1"),("s",32,"1"),("s",33,"1"),("s",34,"1"),("n",5000,"1"),("n",20000,"1"),("s",44,"1")],
        [("s",24,"1"),("s",27,"1"),("s",31,"1"),("s",32,"1"),("s",33,"1"),("s",34,"1"),("n",3000,"1"),("n",15000,"1"),("s",45,"1")],
        [("s",24,"1"),("s",27,"1"),("s",31,"1"),("s",32,"1"),("s",33,"1"),("s",34,"1"),("n",8000,"1"),("n",35000,"1"),("s",44,"1")],
    ])
    write_file(workdir + '/xl/worksheets/sheet3.xml', make_sheet_xml(s3, [4,16,20,14,14,12,14,14,14,12]))

    # Sheet 4: 成功案例
    s4 = make_sheet_data_rows(B_STRINGS, [
        [("s",39,"4"),("s",40,"4"),("s",41,"4"),("s",42,"4"),("s",43,"4"),("s",44,"4"),("s",45,"4"),("s",46,"4"),("s",47,"4"),("s",48,"4")],
        [("n",1,"1"),("s",24,"1"),("s",22,"1"),("s",31,"1"),("s",27,"1"),("s",46,"1"),("s",28,"1"),("n",25000,"1"),("s",53,"1")],
        [("n",2,"1"),("s",24,"1"),("s",22,"1"),("s",31,"1"),("s",27,"1"),("s",46,"1"),("s",28,"1"),("n",18000,"1"),("s",54,"1")],
        [("n",3,"1"),("s",24,"1"),("s",22,"1"),("s",31,"1"),("s",27,"1"),("s",46,"1"),("s",28,"1"),("n",12000,"1"),("s",53,"1")],
    ])
    write_file(workdir + '/xl/worksheets/sheet4.xml', make_sheet_xml(s4, [4,18,12,14,22,18,18,14,14,12]))

    # Sheet 5: 提案追踪
    s5_rows = [
        [("s",49,"4"),("s",50,"4"),("s",51,"4"),("s",52,"4"),("s",53,"4"),("s",54,"4"),("s",55,"4"),("s",56,"4"),("s",57,"4"),("s",58,"4")],
        [("s",59,"1"),("s",24,"1"),("s",22,"1"),("s",31,"1"),("s",44,"1"),("s",54,"1"),("s",55,"1"),("s",45,"1"),("s",32,"1"),("s",48,"1")],
        [("s",60,"1"),("s",24,"1"),("s",22,"1"),("s",31,"1"),("s",44,"1"),("s",54,"1"),("s",55,"1"),("s",46,"1"),("s",32,"1"),("s",48,"1")],
        [("s",61,"1"),("s",24,"1"),("s",22,"1"),("s",31,"1"),("s",45,"1"),("s",56,"1"),("s",55,"1"),("s",47,"1"),("s",32,"1"),("s",48,"1")],
    ]
    s5 = make_sheet_data_rows(B_STRINGS, s5_rows)
    write_file(workdir + '/xl/worksheets/sheet5.xml', make_sheet_xml(s5, [4,14,18,12,12,12,12,12,14,14]))

    # Workbook
    wb_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheets>
    <sheet name="基本信息" sheetId="1" r:id="rId1"/>
    <sheet name="改善提案活动" sheetId="2" r:id="rId4"/>
    <sheet name="执行计划" sheetId="3" r:id="rId5"/>
    <sheet name="成功案例" sheetId="4" r:id="rId6"/>
    <sheet name="提案追踪" sheetId="5" r:id="rId7"/>
  </sheets>
  <calcPr calcMode="auto"/>
</workbook>'''
    write_file(workdir + '/xl/workbook.xml', wb_xml)

    wb_rels = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
  <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml"/>
  <Relationship Id="rId4" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet2.xml"/>
  <Relationship Id="rId5" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet3.xml"/>
  <Relationship Id="rId6" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet4.xml"/>
  <Relationship Id="rId7" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet5.xml"/>
</Relationships>'''
    write_file(workdir + '/xl/_rels/workbook.xml.rels', wb_rels)

    ct_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
  <Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet2.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet3.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet4.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet5.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>
  <Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/>
</Types>'''
    write_file(workdir + '/[Content_Types].xml', ct_xml)

    outpath = OUT_DIR + '精益管理_DemoB_改善提案与追踪表.xlsx'
    pack_xlsx(workdir, outpath)
    print("DemoB done:", outpath)

# ============================================================
# DEMO C: 方针管理与日常追踪表
# ============================================================
C_STRINGS = [
    "精益管理_DemoC_方针管理与日常追踪表",
    "项目名称", "项目编号", "培训师", "编写日期", "版本",
    "一、方针展开",
    "层级", "方针/目标", "关键指标(KPI)", "目标值", "现状值", "差距分析", "支撑举措",
    "公司级", "部门级", "科室级", "班组级", "个人级",
    "二、日常KPI追踪",
    "KPI编号", "KPI名称", "指标定义", "目标值", "实际值", "达成率(%)", "偏差原因分析", "纠正措施", "状态",
    "三、关键绩效指标管理",
    "指标编号", "指标名称", "权重(%)", "目标值", "本月实际", "累计实际", "年度目标", "完成进度(%)", "备注",
    "四、偏差纠正与改善",
    "偏差描述", "偏差原因", "改善措施", "负责人", "实施日期", "完成日期", "效果验证", "状态",
    "五、重点课题管理",
    "课题名称", "现状分析", "改善目标", "改善计划", "责任人", "计划节点", "实际进展", "课题状态",
    "优秀", "良好", "一般", "待改进",
    "进行中", "已完成", "已关闭", "已延期",
    "月度", "季度", "年度",
    "KPI追踪", "异常发现", "异常处理", "效果确认",
    "是", "否", "已纠正", "待纠正",
]

def build_demo_c(workdir):
    ss_xml = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n'
    ss_xml += '<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="{}" uniqueCount="{}">\n'.format(len(C_STRINGS), len(C_STRINGS))
    for s in C_STRINGS:
        ss_xml += '  <si><t>{}</t></si>\n'.format(escape(s))
    ss_xml += '</sst>'
    write_file(workdir + '/xl/sharedStrings.xml', ss_xml)

    # Sheet 1: 基本信息
    s1 = make_sheet_data_rows(C_STRINGS, [
        [("s",0,"4")],
        [("s",1,"4"),("s",0,"1")],
        [("s",2,"4"),("s",1,"1")],
        [("s",3,"4"),("s",1,"1")],
        [("s",4,"4"),("s",1,"1")],
        [("s",5,"4"),("s",1,"1")],
        [None],
        [("s",6,"4"),("s",39,"1"),("s",40,"1"),("s",41,"1"),("s",42,"1"),("s",43,"1"),("s",44,"1")],
    ])
    write_file(workdir + '/xl/worksheets/sheet1.xml', make_sheet_xml(s1, [4,20,16,16,14,14,14]))

    # Sheet 2: 方针展开
    s2 = make_sheet_data_rows(C_STRINGS, [
        [("s",6,"4"),("s",7,"4"),("s",8,"4"),("s",9,"4"),("s",10,"4"),("s",11,"4"),("s",12,"4")],
        [("s",13,"1"),("s",14,"1"),("s",15,"1"),("n",95,"7"),("n",82,"7"),("s",47,"1"),("s",45,"1")],
        [("s",16,"1"),("s",14,"1"),("s",15,"1"),("n",90,"7"),("n",78,"7"),("s",47,"1"),("s",46,"1")],
        [("s",17,"1"),("s",14,"1"),("s",15,"1"),("n",88,"7"),("n",75,"7"),("s",47,"1"),("s",45,"1")],
        [("s",18,"1"),("s",14,"1"),("s",15,"1"),("n",85,"7"),("n",80,"7"),("s",47,"1"),("s",45,"1")],
        [("s",19,"1"),("s",14,"1"),("s",15,"1"),("n",82,"7"),("n",76,"7"),("s",47,"1"),("s",46,"1")],
    ])
    write_file(workdir + '/xl/worksheets/sheet2.xml', make_sheet_xml(s2, [4,16,18,18,14,14,18,18]))

    # Sheet 3: 日常KPI追踪
    s3 = make_sheet_data_rows(C_STRINGS, [
        [("s",20,"4"),("s",21,"4"),("s",22,"4"),("s",23,"4"),("s",24,"4"),("s",25,"4"),("s",26,"4"),("s",27,"4"),("s",28,"4")],
        [("s",29,"1"),("s",14,"1"),("s",14,"1"),("n",95,"7"),("n",82,"7"),("fn","ROUND(F2/E2*100,1)","8"),("s",47,"1"),("s",45,"1"),("s",48,"1")],
        [("s",30,"1"),("s",14,"1"),("s",14,"1"),("n",90,"7"),("n",78,"7"),("fn","ROUND(F3/E3*100,1)","8"),("s",47,"1"),("s",46,"1"),("s",48,"1")],
        [("s",31,"1"),("s",14,"1"),("s",14,"1"),("n",88,"7"),("n",75,"7"),("fn","ROUND(F4/E4*100,1)","8"),("s",47,"1"),("s",45,"1"),("s",49,"1")],
        [("s",32,"1"),("s",14,"1"),("s",14,"1"),("n",85,"7"),("n",80,"7"),("fn","ROUND(F5/E5*100,1)","8"),("s",47,"1"),("s",45,"1"),("s",48,"1")],
        [("s",33,"1"),("s",14,"1"),("s",14,"1"),("n",82,"7"),("n",76,"7"),("fn","ROUND(F6/E6*100,1)","8"),("s",47,"1"),("s",46,"1"),("s",49,"1")],
    ])
    write_file(workdir + '/xl/worksheets/sheet3.xml', make_sheet_xml(s3, [4,14,18,16,12,12,14,20,12]))

    # Sheet 4: 关键绩效指标管理
    s4 = make_sheet_data_rows(C_STRINGS, [
        [("s",34,"4"),("s",35,"4"),("s",36,"4"),("s",37,"4"),("s",38,"4"),("s",39,"4"),("s",40,"4"),("s",41,"4"),("s",42,"4")],
        [("s",29,"1"),("s",14,"1"),("n",20,"7"),("n",95,"7"),("n",82,"7"),("n",78,"7"),("n",90,"7"),("fn","ROUND(F2/E2*100,1)","8"),("s",43,"1")],
        [("s",30,"1"),("s",14,"1"),("n",25,"7"),("n",90,"7"),("n",78,"7"),("n",72,"7"),("n",85,"7"),("fn","ROUND(F3/E3*100,1)","8"),("s",44,"1")],
        [("s",31,"1"),("s",14,"1"),("n",15,"7"),("n",88,"7"),("n",75,"7"),("n",70,"7"),("n",80,"7"),("fn","ROUND(F4/E4*100,1)","8"),("s",43,"1")],
        [("s",32,"1"),("s",14,"1"),("n",20,"7"),("n",85,"7"),("n",80,"7"),("n",76,"7"),("n",82,"7"),("fn","ROUND(F5/E5*100,1)","8"),("s",45,"1")],
        [("s",33,"1"),("s",14,"1"),("n",20,"7"),("n",82,"7"),("n",76,"7"),("n",74,"7"),("n",80,"7"),("fn","ROUND(F6/E6*100,1)","8"),("s",43,"1")],
    ])
    write_file(workdir + '/xl/worksheets/sheet4.xml', make_sheet_xml(s4, [4,14,12,12,12,12,12,14,12]))

    # Sheet 5: 偏差纠正
    s5 = make_sheet_data_rows(C_STRINGS, [
        [("s",46,"4"),("s",47,"4"),("s",48,"4"),("s",49,"4"),("s",50,"4"),("s",51,"4"),("s",52,"4"),("s",53,"4")],
        [("s",29,"1"),("s",47,"1"),("s",45,"1"),("s",22,"1"),("s",31,"1"),("s",32,"1"),("s",52,"1"),("s",48,"1")],
        [("s",30,"1"),("s",47,"1"),("s",45,"1"),("s",22,"1"),("s",31,"1"),("s",32,"1"),("s",52,"1"),("s",49,"1")],
        [("s",31,"1"),("s",47,"1"),("s",46,"1"),("s",22,"1"),("s",31,"1"),("s",32,"1"),("s",52,"1"),("s",48,"1")],
    ])
    write_file(workdir + '/xl/worksheets/sheet5.xml', make_sheet_xml(s5, [4,20,20,14,14,14,14,12]))

    # Sheet 6: 重点课题管理
    s6 = make_sheet_data_rows(C_STRINGS, [
        [("s",54,"4"),("s",55,"4"),("s",56,"4"),("s",57,"4"),("s",58,"4"),("s",59,"4"),("s",60,"4"),("s",61,"4")],
        [("s",14,"1"),("s",55,"1"),("s",56,"1"),("s",45,"1"),("s",22,"1"),("s",31,"1"),("s",45,"1"),("s",48,"1")],
        [("s",14,"1"),("s",55,"1"),("s",56,"1"),("s",45,"1"),("s",22,"1"),("s",31,"1"),("s",46,"1"),("s",49,"1")],
        [("s",14,"1"),("s",55,"1"),("s",56,"1"),("s",46,"1"),("s",22,"1"),("s",31,"1"),("s",47,"1"),("s",48,"1")],
    ])
    write_file(workdir + '/xl/worksheets/sheet6.xml', make_sheet_xml(s6, [4,18,20,14,12,14,14,12]))

    # Workbook
    wb_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheets>
    <sheet name="基本信息" sheetId="1" r:id="rId1"/>
    <sheet name="方针展开" sheetId="2" r:id="rId4"/>
    <sheet name="日常KPI追踪" sheetId="3" r:id="rId5"/>
    <sheet name="关键绩效管理" sheetId="4" r:id="rId6"/>
    <sheet name="偏差纠正" sheetId="5" r:id="rId7"/>
    <sheet name="重点课题管理" sheetId="6" r:id="rId8"/>
  </sheets>
  <calcPr calcMode="auto"/>
</workbook>'''
    write_file(workdir + '/xl/workbook.xml', wb_xml)

    wb_rels = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
  <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml"/>
  <Relationship Id="rId4" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet2.xml"/>
  <Relationship Id="rId5" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet3.xml"/>
  <Relationship Id="rId6" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet4.xml"/>
  <Relationship Id="rId7" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet5.xml"/>
  <Relationship Id="rId8" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet6.xml"/>
</Relationships>'''
    write_file(workdir + '/xl/_rels/workbook.xml.rels', wb_rels)

    ct_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
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
</Types>'''
    write_file(workdir + '/[Content_Types].xml', ct_xml)

    outpath = OUT_DIR + '精益管理_DemoC_方针管理与日常追踪表.xlsx'
    pack_xlsx(workdir, outpath)
    print("DemoC done:", outpath)

# Build all three
print("Building DemoA...")
build_demo_a(fresh())
print("Building DemoB...")
build_demo_b(fresh())
print("Building DemoC...")
build_demo_c(fresh())
print("\nAll 3 demos built successfully!")
print("Output directory:", OUT_DIR)