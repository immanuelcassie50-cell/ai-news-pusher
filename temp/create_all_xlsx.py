#!/usr/bin/env python3

"』』批量创建测评xlsx文件 - Windows路径版』』"

import os, shutil, subprocess, glob



SKILL_DIR = r"C:\Users\Administrator\.claude\skills\Excel表格处理"

OUT_DIR = r"D:\新课开发\测评表单"

TMP = r"D:\temp"

SPIN_REF = r"D:\temp\spin_unpack"  # Reference from earlier



def cygpath_to_win(upath):

    """Convert Unix path to Windows"""

    result = subprocess.run(['cygpath','-w', upath], capture_output=True, text=True)

    return result.stdout.strip()



def shell(cmd):

    """Run bash command"""

    return subprocess.run(cmd, shell=True, capture_output=True, text=True)



def pack(work_dir, output_path):

    """Pack xlsx from directory"""

    script = os.path.join(SKILL_DIR, "scripts", "xlsx_pack.py")

    # Use Unix paths for the script since it uses python3/bash

    work_unix = f"/{work_dir[0].lower()}/{work_dir[3:].replace(chr(92), '/')}".replace("//", "/")

    result = shell(f'python3 "{script}" "{work_unix}" "{output_unix(output_path)}"')

    return result.returncode == 0



def output_unix(win_path):

    """Convert Windows output path to Unix for bash"""

    # D:\foo -> /d/foo

    if win_path[1] == ':':

        return f"/{win_path[0].lower()}/{win_path[3:].replace(chr(92), '/')}".replace("//", "/")

    return win_path



def input_unix(win_path):

    """Convert Windows input path to Unix for bash"""

    if win_path[1] == ':':

        return f"/{win_path[0].lower()}/{win_path[3:].replace(chr(92), '/')}".replace("//", "/")

    return win_path



def copy_template(work_dir):

    """Copy minimal_xlsx template to work dir"""

    src = os.path.join(SKILL_DIR, "templates", "minimal_xlsx")

    if os.path.exists(work_dir):

        shutil.rmtree(work_dir)

    shutil.copytree(src, work_dir)

    print(f"  Template copied to {work_dir}")



def make_sheet1(num_qs, dim_map, base_idx=46, scale=6):

    "』』Create sheet1 XML (填答)』』"

    rows = []

    rows.append('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>')

    rows.append('<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">')

    rows.append('  <sheetViews>')

    rows.append('    <sheetView workbookViewId="0">')

    rows.append('      <pane ySplit="3" topLeftCell="A4" activePane="bottomLeft" state="frozen"/>')

    rows.append('    </sheetView>')

    rows.append('  </sheetViews>')

    rows.append('  <sheetFormatPr defaultRowHeight="15"/>')

    rows.append('  <cols>')

    rows.append('    <col min="1" max="1" width="8" customWidth="1"/>')

    rows.append('    <col min="2" max="2" width="62" customWidth="1"/>')

    rows.append('    <col min="3" max="3" width="14" customWidth="1"/>')

    rows.append('  </cols>')

    rows.append('  <sheetData>')

    rows.append('    <row r="1"><c r="A1" t="s" s="4"><v>10</v></c></row>')

    rows.append('    <row r="2"><c r="A2" t="s"><v>11</v></c></row>')

    rows.append('    <row r="3">')

    rows.append('      <c r="A3" t="s" s="4"><v>4</v></c>')

    rows.append('      <c r="B3" t="s" s="4"><v>5</v></c>')

    rows.append('      <c r="C3" t="s" s="4"><v>6</v></c>')

    rows.append('    </row>')

    for i in range(num_qs):

        r = i + 4

        q_idx = base_idx + i

        rows.append(f'    <row r="{r}">')

        rows.append(f'      <c r="A{r}"><v>{i+1}</v></c>')

        rows.append(f'      <c r="B{r}" t="s"><v>{q_idx}</v></c>')

        rows.append(f'      <c r="C{r}" s="1"><v>3</v></c>')

        rows.append(f'    </row>')

    rows.append('  </sheetData>')

    rows.append('</worksheet>')

    return '\n'.join(rows)



def make_sheet2(dim_formulas, dim_names, scale=5):

    "』』Create sheet2 XML (结果)』』"

    rows = []

    rows.append('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>')

    rows.append('<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">')

    rows.append('  <sheetViews><sheetView workbookViewId="0"/></sheetViews>')

    rows.append('  <sheetFormatPr defaultRowHeight="15"/>')

    rows.append('  <cols>')

    rows.append('    <col min="1" max="1" width="22" customWidth="1"/>')

    rows.append('    <col min="2" max="2" width="14" customWidth="1"/>')

    rows.append('    <col min="3" max="3" width="14" customWidth="1"/>')

    rows.append('    <col min="4" max="4" width="50" customWidth="1"/>')

    rows.append('  </cols>')

    rows.append('  <sheetData>')

    rows.append('    <row r="1"><c r="A1" t="s" s="4"><v>10</v></c></row>')

    rows.append('    <row r="2">')

    rows.append('      <c r="A2" t="s" s="4"><v>7</v></c>')

    rows.append('      <c r="B2" t="s" s="4"><v>8</v></c>')

    rows.append('      <c r="C2" t="s" s="4"><v>9</v></c>')

    rows.append('      <c r="D2" t="s" s="4"><v>10</v></c>')

    rows.append('    </row>')

    r = 3

    dim_cells = []

    for j, (dn, formula) in enumerate(zip(dim_names, dim_formulas)):

        ss_idx = 13 + j

        if scale == 5:

            lvl = f'IF(B{r}&lt;2,"待发展",IF(B{r}&lt;2.8,"基础",IF(B{r}&lt;3.5,"良好",IF(B{r}&lt;4.2,"优秀","卓越"))))'

        else:

            lvl = f'IF(B{r}&lt;2,"待发展",IF(B{r}&lt;3,"基础",IF(B{r}&lt;4,"良好",IF(B{r}&lt;5,"优秀","卓越"))))'

        rows.append(f'    <row r="{r}">')

        rows.append(f'      <c r="A{r}" t="s"><v>{ss_idx}</v></c>')

        rows.append(f'      <c r="B{r}" s="6"><f>{formula}</f><v/></c>')

        rows.append(f'      <c r="C{r}"><f>{lvl}</f><v/></c>')

        rows.append(f'      <c r="D{r}" t="inlineStr"><is><t></t></is></c>')

        rows.append(f'    </row>')

        dim_cells.append(f"B{r}")

        r += 1

    # 综合

    if len(dim_cells) > 1:

        avg_all = "AVERAGE(" + ",".join(dim_cells) + ")"

        rows.append(f'    <row r="{r}">')

        rows.append(f'      <c r="A{r}" t="s"><v>26</v></c>')

        rows.append(f'      <c r="B{r}" s="6"><f>{avg_all}</f><v/></c>')

        rows.append(f'      <c r="C{r}』><f>IF(B{r}&lt;2,』待发展",IF(B{r}&lt;2.8,"基础",IF(B{r}&lt;3.5,"良好",IF(B{r}&lt;4.2,"优秀","卓越"))))</f><v/></c>')

        rows.append(f'    </row>')

    rows.append('  </sheetData>')

    rows.append('</worksheet>')

    return '\n'.join(rows)



def make_sheet3(q_list):

    "』』Create sheet3 XML (题库)』』"

    rows = []

    rows.append('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>')

    rows.append('<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">')

    rows.append('  <sheetViews><sheetView workbookViewId="0"/></sheetViews>')

    rows.append('  <sheetFormatPr defaultRowHeight="15"/>')

    rows.append('  <cols>')

    rows.append('    <col min="1" max="1" width="8" customWidth="1"/>')

    rows.append('    <col min="2" max="2" width="58" customWidth="1"/>')

    rows.append('    <col min="3" max="7" width="12" customWidth="1"/>')

    rows.append('  </cols>')

    rows.append('  <sheetData>')

    rows.append('    <row r="1">')

    rows.append('      <c r="A1" t="inlineStr" s="4』><is><t>题号</t></is></c>')

    rows.append('      <c r="B1" t="inlineStr" s="4』><is><t>题目内容</t></is></c>')

    rows.append('      <c r="C1" t="inlineStr" s="4』><is><t>选项A(1分)</t></is></c>')

    rows.append('      <c r="D1" t="inlineStr" s="4』><is><t>选项B(2分)</t></is></c>')

    rows.append('      <c r="E1" t="inlineStr" s="4』><is><t>选项C(3分)</t></is></c>')

    rows.append('      <c r="F1" t="inlineStr" s="4』><is><t>选项D(4分)</t></is></c>')

    rows.append('      <c r="G1" t="inlineStr" s="4』><is><t>选项E(5分)</t></is></c>')

    rows.append('    </row>')

    for i, q in enumerate(q_list):

        r = i + 2

        rows.append(f'    <row r="{r}">')

        rows.append(f'      <c r="A{r}"><v>{i+1}</v></c>')

        rows.append(f'      <c r="B{r}" t="inlineStr"><is><t>{q}</t></is></c>')

        rows.append(f'      <c r="C{r}" t="inlineStr』><is><t>完全不符合</t></is></c>')

        rows.append(f'      <c r="G{r}" t="inlineStr』><is><t>完全符合</t></is></c>')

        rows.append(f'    </row>')

    rows.append('  </sheetData>')

    rows.append('</worksheet>')

    return '\n'.join(rows)



def make_sheet4(interp_list):

    "』』Create sheet4 XML (解读库)』』"

    rows = []

    rows.append('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>')

    rows.append('<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">')

    rows.append('  <sheetViews><sheetView workbookViewId="0"/></sheetViews>')

    rows.append('  <sheetFormatPr defaultRowHeight="15"/>')

    rows.append('  <cols>')

    rows.append('    <col min="1" max="1" width="20" customWidth="1"/>')

    rows.append('    <col min="2" max="2" width="85" customWidth="1"/>')

    rows.append('  </cols>')

    rows.append('  <sheetData>')

    rows.append('    <row r="1">')

    rows.append('      <c r="A1" t="inlineStr" s="4』><is><t>类型标签</t></is></c>')

    rows.append('      <c r="B1" t="inlineStr" s="4』><is><t>解读内容</t></is></c>')

    rows.append('    </row>')

    r = 2

    for label, content in interp_list:

        content_esc = content.replace("&","&amp;").replace("<","&lt;").replace(">","&gt;")

        label_esc = label.replace("&","&amp;").replace("<","&lt;")

        rows.append(f'    <row r="{r}">')

        rows.append(f'      <c r="A{r}" t="inlineStr"><is><t>{label_esc}</t></is></c>')

        rows.append(f'      <c r="B{r}" t="inlineStr"><is><t>{content_esc}</t></is></c>')

        rows.append(f'    </row>')

        r += 1

    rows.append('  </sheetData>')

    rows.append('</worksheet>')

    return '\n'.join(rows)



def build_shared_strings(items):

    """Build sharedStrings XML"""

    cnt = len(items)

    xml = f'<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n'

    xml += f'<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="{cnt}" uniqueCount="{cnt}">\n'

    for item in items:

        item_esc = item.replace("&","&amp;").replace("<","&lt;").replace(">","&gt;")

        xml += f'  <si><t>{item_esc}</t></si>\n'

    xml += '</sst>'

    return xml



def build_workbook(sheets):

    """Build workbook.xml"""

    xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>

<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">

  <sheets>

    <sheet name="填答" sheetId="1" r:id="rId1』/>

    <sheet name="结果" sheetId="2" r:id="rId4』/>

    <sheet name="题库" sheetId="3" r:id="rId5』/>

    <sheet name="解读库" sheetId="4" r:id="rId6』/>

  </sheets>

  <calcPr calcId="191029"/>

</workbook>'''

    return xml



def build_rels():

    """Build workbook.xml.rels"""

    return '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>

<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">

  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>

  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>

  <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml"/>

  <Relationship Id="rId4" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet2.xml"/>

  <Relationship Id="rId5" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet3.xml"/>

  <Relationship Id="rId6" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet4.xml"/>

</Relationships>'''



def build_content_types():

    """Build [Content_Types].xml"""

    return '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>

<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">

  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>

  <Default Extension="xml"  ContentType="application/xml"/>

  <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>

  <Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>

  <Override PartName="/xl/worksheets/sheet2.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>

  <Override PartName="/xl/worksheets/sheet3.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>

  <Override PartName="/xl/worksheets/sheet4.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>

  <Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>

  <Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/>

</Types>'''



def create_and_pack(work_num, title, num_qs, dims, scale, q_lists, interp_list, out_path):

    "』』通用创建函数』』"

    wd = os.path.join(TMP, f"xlsx_{work_num:02d}")

    os.makedirs(os.path.join(wd, "xl", "worksheets"), exist_ok=True)

    os.makedirs(os.path.join(wd, "xl", "_rels"), exist_ok=True)



    # sharedStrings

    base_strings = [

        "填答","结果","题库","解读库","题号","题目内容",f"得分(1-{scale})",

        "维度","平均得分","等级","关键发现",title,

        "请根据您的实际体验选择合适的选项",

        "题目","选项A","选项B","选项C","选项D",

    ]

    dim_names = list(dims.keys())

    base_strings.extend(dim_names)

    base_strings.extend(["综合得分","等级说明","类型标签","解读内容","综合","维度分析』])



    base_idx = len(base_strings)

    all_qs = []

    for qs in q_lists:

        all_qs.extend(qs)



    strings = base_strings + all_qs



    # Write sharedStrings

    ss = build_shared_strings(strings)

    with open(os.path.join(wd, "xl", "sharedStrings.xml"), "w", encoding="utf-8") as f:

        f.write(ss)



    # Write workbook, rels, content_types, styles

    with open(os.path.join(wd, "xl", "workbook.xml"), "w", encoding="utf-8") as f:

        f.write(build_workbook(None))

    with open(os.path.join(wd, "xl", "_rels", "workbook.xml.rels"), "w", encoding="utf-8") as f:

        f.write(build_rels())

    with open(os.path.join(wd, "[Content_Types].xml"), "w", encoding="utf-8") as f:

        f.write(build_content_types())



    # Copy styles from template

    src_styles = os.path.join(SKILL_DIR, "templates", "minimal_xlsx", "xl", "styles.xml")

    dst_styles = os.path.join(wd, "xl", "styles.xml")

    shutil.copy(src_styles, dst_styles)



    # Build dim formulas

    dim_formulas = []

    start = 4

    for dim_name, qs in zip(dim_names, q_lists):

        n = len(qs)

        dim_formulas.append(f"AVERAGE('填答'!C{start}:C{start+n-1})")

        start += n



    # Sheet 1

    s1 = make_sheet1(num_qs, None, base_idx, scale)

    with open(os.path.join(wd, "xl", "worksheets", "sheet1.xml"), "w", encoding="utf-8") as f:

        f.write(s1)



    # Sheet 2

    s2 = make_sheet2(dim_formulas, dim_names, scale)

    with open(os.path.join(wd, "xl", "worksheets", "sheet2.xml"), "w", encoding="utf-8") as f:

        f.write(s2)



    # Sheet 3

    s3 = make_sheet3(all_qs)

    with open(os.path.join(wd, "xl", "worksheets", "sheet3.xml"), "w", encoding="utf-8") as f:

        f.write(s3)



    # Sheet 4

    s4 = make_sheet4(interp_list)

    with open(os.path.join(wd, "xl", "worksheets", "sheet4.xml"), "w", encoding="utf-8") as f:

        f.write(s4)



    # Pack

    script = os.path.join(SKILL_DIR, "scripts", "xlsx_pack.py")

    wd_unix = f"/d/temp/xlsx_{work_num:02d}".replace("//", "/")

    out_unix = output_unix(out_path)

    result = shell(f'python3 "{script}" "{wd_unix}" "{out_unix}"')



    ok = result.returncode == 0

    status = "✓" if ok else "✗"

    print(f"  {status} {title}: {'OK' if ok else 'FAIL'}")

    if not ok:

        print(f"     stderr: {result.stderr[:200]}")

    return ok



# ===== 01 职业锚自测 =====

def make_01():

    title = "职业锚自测"

    out = os.path.join(OUT_DIR, "新员工10大测评", "01_职业锚自测.xlsx")

    dims = {"技术/职能型』:5,』管理型』:5,』自主/独立型』:5,』安全/稳定型』:5,』创业创造型』:5,』服务奉献型』:5,』纯粹挑战型』:5,』生活方式型』:5}

    scale = 6

    q_lists = [

        ["能够深入探索一个专业领域","成为某个领域的顶尖专家","运用专业技能解决复杂问题","保持对技术趋势的持续跟进","做专业领域的权威人士』],

        ["整合不同部门的工作","承担最终结果的责任","影响他人的职业发展","制定影响整个组织的决策","带领团队达成目标』],

        ["按自己的方式安排工作","选择工作的时间和地点","避免被制度约束","拥有完全的工作自主权","自己决定工作方法』],

        ["有稳定的工作保障","拥有可预期的收入","长期服务同一家公司","在一家公司长期发展","有明确的退休保障』],

        ["创造新产品或服务","提出全新的商业想法","发起自己的事业","开发全新的解决方案","通过创新推动行业变革』],

        ["帮助他人解决重要问题","为社会做出贡献","改善他人的生活","从事有意义的工作","让世界变得更美好』],

        ["解决别人无法解决的难题","面对强大的竞争对手","攻克高挑战性的项目","追求卓越的表现","不断突破极限』],

        ["灵活安排工作和生活","享受工作之外的私人时间","拥有平衡的生活方式","自主决定工作节奏","工作不要太影响家庭』],

    ]

    interp = [

        ("技术/职能型","您追求在专业领域成为专家，职业驱动力来自持续深化专业知识。最不能妥协的是专业性和技术成长。适合在技术导向型组织中发展。"),

        ("管理型","您渴望整合资源、做决策、担责任，职业驱动力来自影响力和控制感。适合走上管理岗位，承担更大的组织责任。"),

        ("自主/独立型","您希望按自己的方式工作，职业驱动力来自工作自主权。适合创业或需要高度自主的岗位。"),

        ("安全/稳定型","您重视可预期性和长期承诺，职业驱动力来自稳定感。适合在成熟稳定的组织中发展。"),

        ("创业创造型","您渴望创造属于自己的东西，职业驱动力来自创造欲和成就感。适合在创新型组织或创业环境中发展。"),

        ("服务奉献型","您以帮助他人为核心动力，职业驱动力来自对他人需求的满足。适合从事教育、医疗、社会服务等领域的工作。"),

        ("纯粹挑战型","您被解决难题和战胜挑战所驱动，职业驱动力来自竞争和征服。适合在高挑战性、高压力的环境中发展。"),

        ("生活方式型","您追求工作与生活的平衡，职业驱动力来自生活质量。适合在重视Work-Life Balance的组织中发展。"),

    ]

    return create_and_pack(1, title, 40, dims, scale, q_lists, interp, out)



# ===== 02 新员工组织社会化适应量表 =====

def make_02():

    title = "新员工组织社会化适应量表"

    out = os.path.join(OUT_DIR, "新员工10大测评", "02_新员工组织社会化适应量表.xlsx")

    dims = {"任务社会化』:10,』群体社会化』:10,』组织社会化』:10}

    scale = 5

    q_lists = [

        ["我清楚自己的岗位职责和工作要求","我掌握了完成工作所需的基本技能","我知道遇到问题应该找谁求助","我能获取到完成工作所需的资源","我了解公司的工作流程和制度","我能独立完成核心工作任务","我知道如何在公司内部协调推进工作","我的工作优先级排序清晰","我能判断哪些事需要自己解决、哪些需要上报","我能适应不同类型的工作任务』],

        ["我能叫出团队中大多数同事的名字","我和团队同事相处融洽","我知道团队的一些非正式工作惯例","我参与团队活动时不感到尴尬","我能自然地和同事进行日常交流","我在团队中有时可以发挥影响力","我与跨部门同事建立了初步的工作关系","我理解团队内部的沟通方式","我知道团队中的关键影响者是谁","我在团队中找到了自己的位置』],

        ["我理解公司的核心价值观","我能用自己的话解释公司战略","我认同公司的企业文化","我了解公司在行业中的竞争地位","我知道公司近期最重要的工作目标","我对作为公司一员感到自豪","我理解公司的决策背后的逻辑","我相信公司的发展方向","我愿意主动维护公司形象","我愿意为公司的目标付出额外努力』],

    ]

    interp = [

        ("任务社会化-高","您在任务层面已经较好地适应了工作。建议继续保持，主动寻求更具挑战性的任务。"),

        ("任务社会化-低","建议与主管深入沟通，明确岗位职责边界；主动向同事请教；要求参与具体项目。"),

        ("群体社会化-高","您在人际层面已经融入了团队，与同事建立了良好的工作关系。"),

        ("群体社会化-低","建议主动参与团队活动，主动发起与同事的午餐/咖啡交流，主动了解团队中的非正式结构。"),

        ("组织社会化-高","您在组织层面有较强的认同感，对作为公司一员感到自豪。"),

        ("组织社会化-低","建议主动参加公司层面的大小会议和活动，阅读公司历史和战略文档，与不同部门的同事建立联系。"),

        ("综合-高适应","您在三个维度上都表现良好，是一个全面适应的新员工，离职风险较低。"),

        ("综合-待发展","建议识别短板维度，制定针对性的适应计划；与HR或主管沟通，寻求必要的支持资源。"),

    ]

    return create_and_pack(2, title, 30, dims, scale, q_lists, interp, out)



# ===== 03 职场局促感诊断量表 =====

def make_03():

    title = "职场局促感诊断量表"

    out = os.path.join(OUT_DIR, "新员工10大测评", "03_职场局促感诊断量表.xlsx")

    dims = {"行为局促』:6,』认知局促』:6,』情感局促』:6,』回避行为』:6}

    scale = 5

    q_lists = [

        ["在正式会议中发言时感到紧张","当众表达不同意见时感到不自在","被突然点名发言时大脑一片空白","在团队讨论中主动发言感到困难","公开发表演讲时感到心跳加速","需要即兴发言时总是推脱』],

        ["我担心同事对我的工作表现评价不好","我经常觉得别人在注意我","我害怕在工作中犯错误被公开批评","我担心自己不符合同事的期待","我害怕在职场中暴露自己的弱点","我认为别人比我更胜任目前的工作』],

        ["与高层领导交谈时我会感到紧张","参加跨部门会议时我感到局促","在社交场合与陌生人交流让我不自在","被邀请参加同事聚会时我经常找借口推脱","我觉得职场社交很累人","我避免在工作中表现得太活跃』],

        ["我会尽量避免需要当众发言的场合","我经常推迟或回避需要与陌生人交流的任务","我尽量不参加非必要的工作社交活动","在可以选择的条件下，我宁愿用书面沟通而非当面交流","我回避需要展示自己的工作","我尽量避免在会议上被注意到』],

    ]

    interp = [

        ("行为局促-高","您在行为层面表现出明显的职场局促感。建议通过刻意练习（如演讲俱乐部、模拟演练）逐步降低敏感性。"),

        ("认知局促-高","您对他人评价的担忧程度较高，经常处于「被评价」的焦虑中。建议尝试认知重构，将「被评价」的担忧转化为「被反馈」的机会。"),

        ("情感局促-高","您在情感层面感受到较强的职场不适感，建议从小范围、低强度的社交练习开始，逐步建立自信。"),

        ("回避行为-高","您表现出明显的回避倾向，可能会因为回避而错过重要的发展机会。建议反思回避的具体场景，有针对性地进行暴露练习。"),

        ("四维度综合分析","请关注得分最高的维度——这通常是您职场局促感的最主要来源，针对性地进行改善效果最佳。"),

    ]

    return create_and_pack(3, title, 24, dims, scale, q_lists, interp, out)



# ===== 04 职场学习行为风格测评 =====

def make_04():

    title = "职场学习行为风格测评"

    out = os.path.join(OUT_DIR, "新员工10大测评", "04_职场学习行为风格测评.xlsx")

    dims = {"主动探索型』:5,』反思内化型』:5,』实践应用型』:5,』社交学习型』:5,』系统结构型』:5}

    scale = 5

    q_lists = [

        ["我会主动寻找新工具或方法来改进工作","遇到不熟悉的问题我会自己先研究","我会主动向有经验的同事请教","我经常在工作之外自主学习相关知识","我会关注行业最新动态并尝试应用到工作中』],

        ["我会定期反思自己的工作方式和效果","我会从错误中提取经验教训","我喜欢在行动前先充分思考","我会记录工作心得以便复盘","独处思考对我来说是重要的学习方式』],

        ["我更倾向于边做边学而非先学后做","我会尽快把学到的新知识应用到实际工作中","看实际的案例比听理论讲解对我更有用","我通过试错来学习新事物","动手操作比单纯阅读更能帮助我掌握技能』],

        ["与他人讨论能帮助我更好地理解问题","我会通过观察他人的做法来学习","团队学习的气氛能提高我的投入度","我向同事解释所学内容能加深自己的理解","案例讨论和角色扮演对我特别有效』],

        ["我习惯先建立完整的知识框架再深入学习","我喜欢有结构和计划的学习方式","我会在学习前先确定明确的目标","我偏好系统的课程或教材而非零散的知识点","我会对所学内容做笔记和整理以便复习』],

    ]

    interp = [

        ("主动探索型-主导","您是主动探索型的学习者，善于自我驱动、持续学习。建议寻找能给您自主空间的学习环境。"),

        ("反思内化型-主导","您是反思内化型的学习者，善于从经验中提炼智慧。建议建立固定的反思习惯。"),

        ("实践应用型-主导","您是实践应用型的学习者，偏好『从做中学』。建议争取更多实践机会，在试错中快速成长。"),

        ("社交学习型-主导","您是社交学习型的学习者，偏好协作和讨论。建议多参与团队讨论、工作坊和社群活动。"),

        ("系统结构型-主导","您是系统结构型的学习者，偏好有框架的学习方式。建议使用笔记系统、知识管理工具。"),

        ("混合型","您的学习风格较为多元，没有单一主导类型。这种灵活性使您能适应不同的学习情境。"),

    ]

    return create_and_pack(4, title, 25, dims, scale, q_lists, interp, out)



# ===== 05 组织承诺感诊断量表 =====

def make_05():

    title = "组织承诺感诊断量表"

    out = os.path.join(OUT_DIR, "新员工10大测评", "05_组织承诺感诊断量表.xlsx")

    dims = {"情感承诺』:6,』规范承诺』:6,』持续承诺』:6}

    scale = 5

    q_lists = [

        ["我真心喜欢这家公司的文化和价值观","我愿意把这份工作视为长期事业","我对公司有强烈的归属感","我会因为公司的成功而感到骄傲","我希望能够在这家公司长期发展","我关心公司的未来发展』],

        ["我留在公司是因为我觉得有道义责任","我应该对公司的培养心存感激","我有责任为公司的发展贡献力量","我尽量不在公司困难时离开","我觉得离职会对不起主管的信任","我认同『忠诚』是重要的职业品质』],

        ["离职对我来说是困难的，因为我已经投入了很多","如果离开，我会失去许多已积累的专业资质和福利","目前的工作机会不如从前，离职并不划算","我在公司积累了丰富的经验，离开成本很高","外部的工作机会不足以吸引我离开","我已经在这家公司建立了广泛的人脉，离开代价太大』],

    ]

    interp = [

        ("情感承诺-高","您对公司有强烈的情感认同，对组织的依恋程度高。这种高情感承诺带来更高的组织公民行为和更低的离职意向。"),

        ("情感承诺-低","您对公司的情感联结较弱，可能将当前工作视为纯粹的利益交换。建议寻找与个人价值观更契合的组织元素。"),

        ("规范承诺-高","您有较强的职业责任感和忠诚度。这种承诺较为稳定。"),

        ("持续承诺-高","您留在这家公司主要是因为』不得不』——已积累的资历、福利、人脉等使离职成本较高。这是成本驱动的承诺，而非真正的认同。"),

        ("高综合承诺","您在三个维度上都表现出较高的承诺水平，是高度投入的组织成员。"),

        ("低情感承诺+高持续承诺","您留在这家公司主要是因为』不得不』，而非真正的认同。需要注意这种状态可能带来职业倦怠。"),

    ]

    return create_and_pack(5, title, 18, dims, scale, q_lists, interp, out)



# ===== 06 新员工期望落差测评 =====

def make_06():

    title = "新员工期望落差测评"

    out = os.path.join(OUT_DIR, "新员工10大测评", "06_新员工期望落差测评.xlsx")

    dims = {"工作内容』:4,』成长机会』:4,』上级关系』:4,』组织文化』:4,』薪酬福利』:4}

    scale = 5

    q_lists = [

        ["我原本预期工作会更有挑战性","实际工作的自主程度符合我的预期","我原本以为能更快地承担重要任务","实际工作中我的专业能力得到了充分发挥』],

        ["公司提供的学习资源超出我的预期","晋升机会比我预想的要多","培训和发展支持达到了我的期望","职业发展路径比我预想的更清晰』],

        ["我与直接主管的关系比我预期要好","主管给予我的指导超出我的预期","我获得的工作反馈比我预想的要及时","主管对我的支持和信任符合预期』],

        ["公司实际的文化氛围比我预期更开放","团队的协作方式符合我的预期","工作与生活的平衡比我预想的要好","同事之间的信任和尊重达到我的预期』],

        ["薪酬水平比我预期的要有竞争力","福利待遇满足了我的期望","整体收入水平与我的预期相符","公司的物质激励超出我的预期』],

    ]

    interp = [

        ("工作内容-正落差","您对工作内容现实的评价高于预期，实际工作比您入职前的想象更具挑战性和吸引力。"),

        ("工作内容-负落差","您觉得实际工作比预期更缺乏挑战性或自主性，可能存在』大材小用』的感觉。建议与主管沟通，寻求更具挑战性的任务。"),

        ("成长机会-负落差","您感受到明显的成长落差，实际发展机会少于预期。这是新员工离职的主要驱动因素之一，建议与HR或主管讨论发展计划。"),

        ("上级关系-正落差","您与上级的关系体验超出预期，这是入职适应的良好基础。"),

        ("上级关系-负落差","您与上级的关系体验低于预期。建议主动与主管进行1on1，清晰表达您的期望和需求。"),

        ("综合-低落差","您在各维度的期望与现实较为匹配，入职体验整体满意度较高。"),

        ("综合-高落差","您在多个维度都感受到了期望落差。这种状态若持续，可能导致早期离职风险。建议识别落差最大的维度，针对性地进行期望管理或寻求改变。"),

    ]

    return create_and_pack(6, title, 20, dims, scale, q_lists, interp, out)



# ===== 07 新员工角色清晰度测评 =====

def make_07():

    title = "新员工角色清晰度测评"

    out = os.path.join(OUT_DIR, "新员工10大测评", "07_新员工角色清晰度测评.xlsx")

    dims = {"任务角色清晰』:10,』关系角色清晰』:10}

    scale = 5

    q_lists = [

        ["我清楚自己的岗位职责范围","我知道哪些工作属于我的职责，哪些不属于","我了解自己工作与其他同事工作的边界","我清楚完成工作需要与哪些部门协调","我明白上级对我的核心期望是什么","我知道自己的绩效考核标准","我了解公司的决策哪些需要我的参与","我能判断哪些事情需要向上级汇报","我清楚哪些情况下可以自己做决定","我知道哪些是公司的核心业务，我的岗位在其中扮演什么角色』],

        ["我知道在团队中我的位置是什么","我了解自己在跨部门协作中应该扮演什么角色","我清楚自己在项目中的角色定位","我知道与哪些人建立关系对我最重要","我理解组织中的正式和非正式权力结构","我能判断哪些同事可以给我提供工作支持","我知道如何处理与主管的期望差异","我了解自己在组织中影响力的边界","我能识别谁是对我最有影响力的人","我清楚自己在组织政治中应该扮演什么角色』],

    ]

    interp = [

        ("任务角色清晰-高","您对任务角色的认知非常清晰，能够准确理解自己的职责边界和上级期望。"),

        ("任务角色清晰-低","您在任务角色认知上存在模糊感，可能导致工作方向偏差或责任推诿。建议主动与主管对齐期望。"),

        ("关系角色清晰-高","您对关系角色的认知较为成熟，能较好地理解组织中的位置和人际结构。"),

        ("关系角色清晰-低","您在关系角色认知上较为迷茫，可能在组织政治和跨部门协作中感到困惑。建议主动观察和请教。"),

        ("双高-清晰型","您在任务和关系两个维度都有较高的角色清晰度，是快速适应的新员工。"),

        ("双低-迷茫型","您在两个维度都表现出较低的角色清晰度，这是入职适应困难的高风险信号。建议立即与主管进行深度对齐。"),

    ]

    return create_and_pack(7, title, 20, dims, scale, q_lists, interp, out)



# ===== 08 职场人际网络建设行为量表 =====

def make_08():

    title = "职场人际网络建设行为量表"

    out = os.path.join(OUT_DIR, "新员工10大测评", "08_职场人际网络建设行为量表.xlsx")

    dims = {"内部网络建设』:5,』外部网络建设』:5,』网络维护』:5,』网络利用』:5}

    scale = 5

    q_lists = [

        ["我会主动与跨部门的同事建立工作关系","我主动参加公司内部的各种活动和社群","我会主动联系可能对我工作有帮助的同事","我主动邀请同事共进午餐或咖啡交流","我会在团队中寻找可以互相学习的伙伴』],

        ["我主动与行业同行建立联系","我参加行业会议、论坛以拓展专业人脉","我与供应商、客户等外部利益相关者保持沟通","我维护着一个行业专业人士的社交网络","我主动加入专业社群或学习组织』],

        ["我会定期与重要的工作关系保持联系","我记得重要关系人的关键信息（如生日、岗位变动）","我会对他人的重要时刻（如晋升、项目成功）给予关注","我会平衡不同关系人的时间和精力投入","我定期整理和更新自己的人际网络信息』],

        ["当需要信息或资源时，我知道应该联系谁","我能有效地通过人际网络获取所需的支持","我在需要帮助时能调动自己的关系资源","我能评估何时应该使用网络关系而非正式渠道","我知道如何在组织中通过关系链获取信息』],

    ]

    interp = [

        ("内部网络建设-高","您在组织内部的人际网络建设上表现积极，与跨部门同事建立了良好的关系。"),

        ("内部网络建设-低","您在组织内部的关系建设上较为被动，可能只与直接工作接触的同事有交流。建议主动拓展边界。"),

        ("外部网络建设-高","您在组织外部的 networking 上表现积极，与行业同行保持着良好的关系。"),

        ("外部网络建设-低","您在外部网络建设上投入较少，可能限制了对行业动态的了解和职业发展的视野。"),

        ("网络维护-高","您注重关系的维护，能够保持人际网络的活力。"),

        ("网络利用-高","您善于利用人际网络获取信息和资源，能在需要时有效地调动关系。"),

        ("综合-高","您在网络建设的各个环节都表现良好，拥有丰富且活跃的人际网络。这是职业发展的重要资产。"),

    ]

    return create_and_pack(8, title, 20, dims, scale, q_lists, interp, out)



# ===== 09 新员工价值观与企业文化契合度测评 =====

def make_09():

    title = "新员工价值观与企业文化契合度测评"

    out = os.path.join(OUT_DIR, "新员工10大测评", "09_新员工价值观与企业文化契合度测评.xlsx")

    dims = {"个人价值观』:12,』组织文化认知』:12}

    scale = 5

    q_lists = [

        ["对我而言，工作的意义比薪酬更重要","我希望在一个开放透明的环境中工作","我重视团队协作而非个人英雄主义","我相信诚信是职场中最重要的品质","我希望有自主决策的空间","我重视工作的稳定性而非高风险高回报","我追求卓越的工作表现","我相信应该不断学习和成长","我重视工作与生活的平衡","我希望帮助他人并为社会做出贡献","我相信创新和变革是组织发展的重要动力","我重视公平和公正的组织环境』],

        ["我认为这家公司重视工作的意义而非仅仅是薪酬","我认为这家公司的文化是开放透明的","我认为这家公司倡导团队协作而非个人英雄","我认为这家公司的员工普遍讲诚信","我认为这家公司给员工提供自主决策的空间","我认为这家公司提供稳定的工作环境","我认为这家公司追求卓越的工作表现","我认为这家公司的员工不断学习和成长","我认为这家公司支持工作与生活的平衡","我认为这家公司的员工愿意帮助他人","我认为这家公司鼓励创新和变革","我认为这家公司提供公平公正的工作环境』],

    ]

    interp = [

        ("高度契合","您的个人价值观与公司文化高度匹配，这是最佳的工作体验基础。离职风险极低。"),

        ("中度契合","您的价值观与公司文化有较好的匹配，但存在一些可能的摩擦点。建议识别落差最大的维度。"),

        ("低度契合","您在某些核心价值观上与公司文化存在明显差异。建议与直接主管或HR进行坦诚对话。"),

        ("严重不契合","您的核心价值观与公司文化存在较大冲突。在这种状态下，强行适应可能导致长期的内心消耗和倦怠。"),

        ("契合维度分析-优势","在以下维度您的价值观与组织文化高度一致：这些优势维度应该是您在这家公司最舒适和最能发挥的地方。"),

        ("契合维度分析-风险","在以下维度您的价值观与组织文化存在落差：这些风险维度是需要您特别注意或进行预期管理的领域。"),

    ]

    return create_and_pack(9, title, 24, dims, scale, q_lists, interp, out)



# ===== 10 新员工自我效能感诊断量表 =====

def make_10():

    title = "新员工自我效能感诊断量表"

    out = os.path.join(OUT_DIR, "新员工10大测评", "10_新员工自我效能感诊断量表.xlsx")

    dims = {"任务效能感』:6,』社交效能感』:6,』学习效能感』:6,』适应效能感』:6}

    scale = 5

    q_lists = [

        ["我有信心能够胜任目前的工作任务","我相信自己能高质量地完成工作","我对自己解决工作中遇到问题的能力有信心","我相信自己能够在规定时间内完成工作任务","我对自己在专业领域的表现有信心","我能够独立完成大部分分配给我的工作』],

        ["我能够与同事建立良好的工作关系","我有信心在团队讨论中表达自己的观点","我能够有效地与不同风格的同事协作","我能够在需要时寻求同事的帮助而不感到尴尬","我有信心在跨部门协作中发挥积极作用","我能够处理工作中的冲突和分歧』],

        ["我有信心能够学会工作中所需的新技能","我相信自己能够适应新的工作要求","我对自己学习新工具的能力有信心","我相信自己能够从错误中学习和成长","我有信心在面对未知挑战时能够找到解决方法","我相信自己能够持续提升自己的专业能力』],

        ["我有信心能够适应新的工作环境","我能够调整自己的行为以适应不同的情境","我对自己应对工作压力的能力有信心","我相信自己能够处理工作中的不确定性","我能够在新团队中找到自己的位置","我有信心能够度过入职适应的困难期』],

    ]

    interp = [

        ("任务效能感-高","您对完成工作任务有较强的信心。这种高任务效能感是高效工作的心理基础。"),

        ("任务效能感-低","您对任务完成缺乏信心，可能经常担心自己的工作表现。建议从力所能及的小任务开始，通过成功体验逐步建立信心。"),

        ("社交效能感-高","您在人际互动方面有较强的信心，能够较好地处理职场关系。"),

        ("社交效能感-低","您在人际互动方面缺乏信心，可能回避社交场合或在人际冲突中感到无力。"),

        ("学习效能感-高","您对学习新事物的能力充满信心。这种成长型思维使您在面对未知挑战时更加从容。"),

        ("学习效能感-低","您对学习新事物的信心不足，可能对新任务感到恐惧。建议关注自己的成长轨迹。"),

        ("适应效能感-高","您对适应新环境有信心。这种心理弹性使您能够更好地应对变化和不确定性。"),

        ("适应效能感-低","您对适应新环境缺乏信心，对变化和未知感到焦虑。建议建立支持系统，与导师或同事保持沟通。"),

        ("综合-高自我效能","您在各个维度都表现出较高的自我效能感，这是职业发展的重要心理资本。"),

        ("综合-低自我效能","您在自我效能感上整体偏低，可能需要外部的支持和肯定来建立信心。"),

    ]

    return create_and_pack(10, title, 24, dims, scale, q_lists, interp, out)



# ===== Run all =====

if __name__ == "__main__":

    os.makedirs(os.path.join(OUT_DIR, "新员工10大测评"), exist_ok=True)



    results = {}

    for name, fn in [

        ("01_职业锚自测", make_01),

        ("02_新员工组织社会化适应量表", make_02),

        ("03_职场局促感诊断量表", make_03),

        ("04_职场学习行为风格测评", make_04),

        ("05_组织承诺感诊断量表", make_05),

        ("06_新员工期望落差测评", make_06),

        ("07_新员工角色清晰度测评", make_07),

        ("08_职场人际网络建设行为量表", make_08),

        ("09_新员工价值观与企业文化契合度测评", make_09),

        ("10_新员工自我效能感诊断量表", make_10),

    ]:

        print(f"\n>>> Creating {name}...")

        try:

            results[name] = fn()

        except Exception as e:

            print(f"  ✗ ERROR: {e}")

            results[name] = False



    print("\n" + "="*50)

    print("RESULTS:")

    for k, v in results.items():

        print(f"  {'✓' if v else '✗'} {k}")

    passed = sum(1 for v in results.values() if v)

    print(f"\nTotal: {passed}/{len(results)} passed")

