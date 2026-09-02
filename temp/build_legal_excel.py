import subprocess, os, shutil, sys

SKILL = "C:/Users/Administrator/.claude/skills/Excel表格处理"
OUT = "D:/新课开发/法学/25-世界法律地图：主要法系比较与启示/工具表单"
TEMPLATE = "/tmp/xlsx_work_faxizhiso"

def copy_template():
    dst = "/tmp/xlsx_build"
    if os.path.exists(dst):
        shutil.rmtree(dst)
    # Copy from skill template directly
    src = "C:/Users/Administrator/.claude/skills/Excel表格处理/templates/minimal_xlsx"
    shutil.copytree(src, dst)
    return dst

def build_shared_strings(strings):
    count = len(strings)
    items = ""
    for s in strings:
        escaped = s.replace("&","&amp;").replace("<","&lt;").replace(">","&gt;")
        items += f"<si><t>{escaped}</t></si>\n"
    return f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="{count}" uniqueCount="{count}">
{items}</sst>'''

def write_xml(path, content):
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)

def pack(tmpdir, outfile):
    r = subprocess.run(["python3", f"{SKILL}/scripts/xlsx_pack.py", tmpdir, outfile],
                       capture_output=True, text=True)
    return r.stdout + r.stderr

def make_col_defs(ncols):
    if ncols <= 1:
        return '<cols><col min="1" max="1" width="30" customWidth="1"/></cols>'
    return f'<cols>\n  <col min="1" max="1" width="20" customWidth="1"/>\n  <col min="2" max="{ncols}" width="24" customWidth="1"/>\n</cols>'

def make_sheet(rows, ncols):
    data = '<sheetData>\n'
    for ri, row in enumerate(rows):
        r = ri + 1
        data += f'<row r="{r}">\n'
        for ci, val in enumerate(row):
            col = chr(65+ci)
            ref = f"{col}{r}"
            if val == "":
                data += f'<c r="{ref}"/>'
            else:
                idx = get_idx(val)
                style = '4' if r == 1 else '0'
                data += f'<c r="{ref}" t="s" s="{style}"><v>{idx}</v></c>'
        data += '</row>\n'
    data += '</sheetData>'
    return f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"><pane ySplit="1" topLeftCell="A2" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  {make_col_defs(ncols)}
  {data}
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

all_strings = []
str_idx = {}
def get_idx(s):
    if s not in str_idx:
        str_idx[s] = len(all_strings)
        all_strings.append(s)
    return str_idx[s]

# ═══════════════════════════════════════════════════════════════════
# WORKBOOK 1: 法系比较矩阵.xlsx
# ═══════════════════════════════════════════════════════════════════
name = "法系比较矩阵"
tmpdir = copy_template()

sheets_data = {
    "说明": [
        ["世界主要法系横向比较矩阵", "", "", "", ""],
        ["用途", "快速对比四大法系在某个法律问题上的不同规定", "", "", ""],
        ["使用方法", "根据你要解决的问题，查找对应的矩阵；结合目标国家/交易的具体情况，选择适用规则", "", "", ""],
        ["", "", "", "", ""],
        ["法系", "大陆法系", "普通法系", "伊斯兰法系", "中华法系"],
        ["代表国家", "德国、法国、日本、中国", "美国、英国、印度、新加坡", "沙特、阿联酋、伊朗、马来西亚", "中国（含港澳台）"],
        ["法律传统", "成文法典", "判例法", "伊斯兰教法", "制定法为主"],
        ["典型特征", "法官适用法典、职权主义", "法官造法、当事人主义、陪审团", "利息禁令、宗教合规、混合法系", "调解优先"],
    ],
    "合同成立": [
        ["合同成立要件", "大陆法系", "普通法系", "伊斯兰法系", "中华法系"],
        ["要约与承诺", "到达生效", "承诺投邮生效（信箱规则）", "要约须符合教法，承诺须明确", "到达生效（《民法典》）"],
        ["约因/对价", "无须约因", "必须有有效约因", "必须有对价（对等交换）", "无须约因"],
        ["形式要求", "书面（特定合同）", "口头也可以（举证困难）", "特定合同须书面（阿拉伯语）", "书面（特定合同）"],
        ["意思表示", "真实+合法", "真实+合法+约因", "真实+合法+教法合规", "真实+合法"],
        ["未成年人", "限制民事行为能力", "未成年人合同可撤销", "教法规定（通常无效）", "限制民事行为能力"],
    ],
    "合同效力": [
        ["合同效力瑕疵", "大陆法系", "普通法系", "伊斯兰法系", "中华法系"],
        ["欺诈", "可撤销（重大误解）", "可撤销（重大事实陈述）", "可撤销（欺诈=违法行为）", "可撤销（《民法典》第148条）"],
        ["胁迫", "可撤销（违反诚实信用）", "可撤销（物理或心理胁迫）", "无效（违反自愿原则）", "可撤销（《民法典》第150条）"],
        ["重大误解", "可撤销（重大误解）", "不可撤销（约因存在时）", "可撤销（教法允许）", "可撤销（《民法典》第147条）"],
        ["趁人之危", "可撤销（显失公平）", "可撤销（不当影响）", "无效（违反公平原则）", "可撤销（《民法典》第151条）"],
        ["格式合同", "须遵循诚实信用原则", "合理注意义务", "须明确告知（教法要求）", "须遵循公平原则（《民法典》第496条）"],
    ],
    "违约救济": [
        ["违约救济", "大陆法系", "普通法系", "伊斯兰法系", "中华法系"],
        ["实际履行", "基本原则", "例外（仅限特定情形）", "强调实际履行", "基本原则（《民法典》第577条）"],
        ["损害赔偿", "完全赔偿原则", "可预见性规则限制", "禁止利息（ribawi）", "完全赔偿（《民法典》第584条）"],
        ["违约金", "约定有效，法院可调减", "约定有效，通常支持", "教法限制（不能是纯利息）", "约定有效，可申请调减（第585条）"],
        ["解除合同", "根本违约时解除", "根本违约+通知", "违约方有过错时解除", "根本违约时解除（第563条）"],
        ["减价权", "买方有减价权（CISG）", "买方有减价权（CISG）", "买方有选择权（教法）", "买方有减价权（第582条）"],
    ],
    "公司法": [
        ["公司法核心问题", "大陆法系", "普通法系", "伊斯兰法系", "中华法系"],
        ["无限责任公司", "常见（两合公司）", "较少（LLP除外）", "禁止（不符合风险分担）", "允许（个体工商户等）"],
        ["有限责任公司", "典型形式（GmbH/LLC）", "典型形式（LLC）", "允许（有限责任公司）", "典型形式（有限公司）"],
        ["股份有限公司", "典型（AG/SA）", "典型（C Corp/S Corp）", "允许（股份公司）", "典型（股份公司）"],
        ["治理模式", "双轨制（董事会+监事会）", "单轨制（董事会）", "伊斯兰监督委员会", "单轨制（董事会）"],
        ["股份转让", "相对自由（章程可限制）", "自由（上市公司）", "允许（须符合教法）", "相对自由（上市股份）"],
    ],
    "劳动法": [
        ["劳动法核心问题", "大陆法系", "普通法系", "伊斯兰法系", "中华法系"],
        ["合同形式", "书面（法定义务）", "口头也可以", "书面（教法要求）", "书面（第16条）"],
        ["试用期", "有限制（通常6个月）", "自由约定", "有限制（教法传统）", "试用期有上限（第19条）"],
        ["解雇保护", "严格（须正当事由）", "自由（employment at will）", "限制（须正当事由+通知）", "严格（须正当事由）"],
        ["经济补偿", "法定（工龄×月工资）", "通常无法定补偿", "教法规定（通知期+补偿）", "法定（N或N+1个月工资）"],
        ["标准工时", "8小时/天，40小时/周", "40小时/周（联邦）", "8小时/天（斋月特殊）", "8小时/天，40小时/周"],
    ],
    "知识产权": [
        ["知识产权法核心问题", "大陆法系", "普通法系", "伊斯兰法系", "中华法系"],
        ["专利保护期限", "20年（发明）", "20年（发明）/15年（外观设计）", "20年（发明）", "20年（发明）（第42条）"],
        ["商标注册原则", "注册在先", "使用在先（普通法）+注册（制定法）", "注册在先", "注册在先（第28条）"],
        ["著作权保护期限", "作者终生+死后50/70年", "作者终生+死后70年", "作者终生+死后50年", "作者终生+死后50年（第21条）"],
        ["合理使用", "封闭式列举", "开放式（四要素）", "有限合理使用", "封闭式列举（第24条）"],
        ["诉前保全", "诉前行为保全", "临时禁令", "紧急禁令", "诉前行为保全"],
    ],
}

all_strings.clear()
str_idx.clear()
for shname, rows in sheets_data.items():
    for row in rows:
        for val in row:
            if val:
                get_idx(val)

shnames = list(sheets_data.keys())
n = len(shnames)
wb_xml = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
<sheets>'''
for i, sn in enumerate(shnames):
    wb_xml += f'<sheet name="{sn}" sheetId="{i+1}" r:id="rId{i+1}"/>'
wb_xml += '</sheets></workbook>'

wb_rels = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">'''
for i in range(n):
    wb_rels += f'<Relationship Id="rId{i+1}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet{i+1}.xml"/>\n'
wb_rels += f'<Relationship Id="rId{n+1}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>\n<Relationship Id="rId{n+2}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml"/>\n</Relationships>'

ct = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
<Default Extension="xml"  ContentType="application/xml"/>
<Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
<Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>
<Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/>
'''
for i in range(n):
    ct += f'<Override PartName="/xl/worksheets/sheet{i+1}.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>\n'
ct += '</Types>'

write_xml(f"{tmpdir}/xl/sharedStrings.xml", build_shared_strings(all_strings))
write_xml(f"{tmpdir}/xl/workbook.xml", wb_xml)
write_xml(f"{tmpdir}/xl/_rels/workbook.xml.rels", wb_rels)
write_xml(f"{tmpdir}/[Content_Types].xml", ct)

for i, (shname, rows) in enumerate(sheets_data.items()):
    ncols = len(rows[0]) if rows else 5
    write_xml(f"{tmpdir}/xl/worksheets/sheet{i+1}.xml", make_sheet(rows, ncols))

print(pack(tmpdir, f"{OUT}/{name}.xlsx"))
print(f"Done: {name}.xlsx")
