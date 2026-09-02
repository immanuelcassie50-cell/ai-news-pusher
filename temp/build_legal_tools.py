"""
Build 4 legal course Excel tools using XML template approach.
D:/新课开发/法学/23-读懂中国司法：从立案到判决的全流程箱/配套工具/
"""
import shutil
import os
import re

SKILL_DIR = r"C:\Users\Administrator\.claude\skills\Excel表格处理"
TEMPLATE_DIR = os.path.join(SKILL_DIR, "templates", "minimal_xlsx")
OUT_DIR = r"D:/新课开发/法学/23-读懂中国司法：从立案到判决的全流程箱/配套工具"
SCRIPTS_DIR = os.path.join(SKILL_DIR, "scripts")

def copy_template():
    dest = r"/tmp/legal_tools_work"
    if os.path.exists(dest):
        shutil.rmtree(dest)
    shutil.copytree(TEMPLATE_DIR, dest)
    return dest

def pack_and_validate(work_dir, out_path):
    import subprocess
    # Pack
    result = subprocess.run(
        ["python3", os.path.join(SCRIPTS_DIR, "xlsx_pack.py"), work_dir, out_path],
        capture_output=True, text=True
    )
    if result.returncode != 0:
        print(f"PACK ERROR: {result.stderr}")
        return False
    # Validate
    result2 = subprocess.run(
        ["python3", os.path.join(SCRIPTS_DIR, "formula_check.py"), out_path],
        capture_output=True, text=True
    )
    if result2.returncode != 0:
        print(f"VALIDATE ERROR: {result2.stdout}")
        return False
    return True


def build_shared_strings(strings):
    """Build sharedStrings.xml content."""
    unique = []
    count = 0
    for s in strings:
        if s not in unique:
            unique.append(s)
        count += 1
    items = ""
    for s in unique:
        escaped = s.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")
        items += f"<si><t>{escaped}</t></si>\n"
    return f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="{count}" uniqueCount="{len(unique)}">
{items}</sst>'''

def shared_index(strings, s):
    unique = []
    for x in strings:
        if x not in unique:
            unique.append(x)
    return unique.index(s)


# =============================================================================
# EXCEL 1: 诉讼费用速算表
# =============================================================================
def build_excel1(work_dir):
    """诉讼费用速算表"""
    shutil.rmtree(work_dir, ignore_errors=True)
    shutil.copytree(TEMPLATE_DIR, work_dir)

    strings = [
        "诉讼费用速算表", "使用说明", "填写指南", "本表用于计算诉讼总成本，请参考使用",
        "诉讼请求金额（元）", "案件类型", "财产案件", "非财产案件", "诉讼费计算",
        "诉讼请求金额", "案件类型", "费率", "速算扣除数", "诉讼费金额", "律师费参考报价",
        "案件类型", "计价方式", "参考价格区间", "备注", "其他成本估算",
        "项目", "金额（元）", "备注", "差旅费", "公证费", "鉴定费", "公告费", "其他",
        "总成本汇总", "项目", "金额（元）", "诉讼费", "律师费", "其他成本", "合计总成本",
        "说明", "1. 财产案件诉讼费按争议金额计算：10万以下5%，10-50万3.5%，50-100万2.5%，100-500万1.5%，500万以上0.8%",
        "说明", "2. 非财产案件按件收费：离婚案件50-300元，人格权案件100-500元，其他500-1000元",
        "说明", "3. 律师费为参考区间，实际费用由双方协商确定",
        "说明", "4. 蓝色单元格为输入框，请根据实际情况填写", "说明", "5. 黑色单元格为自动计算结果",
        "金额", "争议金额≥1000万", "争议金额500-1000万", "争议金额100-500万",
        "争议金额50-100万", "争议金额10-50万", "争议金额10万以下", "争议金额区间",
        "财产案件", "非财产案件", "离婚案件", "人格权纠纷", "财产保全费", "保全担保费",
        "计费方式", "按争议金额比例", "按件收费", "分段累进计算", "最低收费",
        "说明：输入诉讼请求金额，系统自动计算诉讼费", "说明：律师费参考报价，实际费用协商确定",
        "说明：可根据实际情况调整其他成本项目", "费率说明", "计算公式", "输入区", "计算结果",
        "输入您的诉讼请求金额", "案件类型选择", "计算结果", "诉讼费（元）", "律师费参考（元）",
        "其他成本合计（元）", "总成本合计（元）",
    ]

    # Build workbook with 2 sheets: 使用说明 + 主表
    wb = work_dir + "/xl/workbook.xml"
    with open(wb, "r", encoding="utf-8") as f:
        wb_content = f.read()
    wb_content = wb_content.replace("Sheet1", "使用说明")
    with open(wb, "w", encoding="utf-8") as f:
        f.write(wb_content)

    # Update workbook.xml.rels to add sheet2
    rels = work_dir + "/xl/_rels/workbook.xml.rels"
    with open(rels, "r", encoding="utf-8") as f:
        rels_content = f.read()
    rels_content = rels_content.replace("</Relationships>",
        '  <Relationship Id="rId4" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet2.xml"/>\n'
        '  <Relationship Id="rId5" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet3.xml"/>\n'
        "</Relationships>")
    with open(rels, "w", encoding="utf-8") as f:
        f.write(rels_content)

    # Update Content_Types
    ct = work_dir + "/[Content_Types].xml"
    with open(ct, "r", encoding="utf-8") as f:
        ct_content = f.read()
    ct_content = ct_content.replace("</Types>",
        '  <Override PartName="/xl/worksheets/sheet2.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>\n'
        '  <Override PartName="/xl/worksheets/sheet3.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>\n'
        "</Types>")
    with open(ct, "w", encoding="utf-8") as f:
        f.write(ct_content)

    # Copy sheet1.xml to sheet2 and sheet3
    shutil.copy(work_dir + "/xl/worksheets/sheet1.xml", work_dir + "/xl/worksheets/sheet2.xml")
    shutil.copy(work_dir + "/xl/worksheets/sheet1.xml", work_dir + "/xl/worksheets/sheet3.xml")

    # ---- sharedStrings ----
    ss_path = work_dir + "/xl/sharedStrings.xml"
    with open(ss_path, "w", encoding="utf-8") as f:
        f.write(build_shared_strings(strings))

    # ---- sheet1 (使用说明) ----
    si = shared_index(strings, "诉讼费用速算表")
    sg = shared_index(strings, "使用说明")
    s0 = shared_index(strings, "填写指南")
    s1 = shared_index(strings, "本表用于计算诉讼总成本，请参考使用")
    s2 = shared_index(strings, "说明")
    s3 = shared_index(strings, "1. 财产案件诉讼费按争议金额计算：10万以下5%，10-50万3.5%，50-100万2.5%，100-500万1.5%，500万以上0.8%")
    s4 = shared_index(strings, "2. 非财产案件按件收费：离婚案件50-300元，人格权案件100-500元，其他500-1000元")
    s5 = shared_index(strings, "3. 律师费为参考区间，实际费用由双方协商确定")
    s6 = shared_index(strings, "4. 蓝色单元格为输入框，请根据实际情况填写")
    s7 = shared_index(strings, "5. 黑色单元格为自动计算结果")

    sheet1_content = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"/></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols>
    <col min="1" max="1" width="32" customWidth="1"/>
    <col min="2" max="6" width="18" customWidth="1"/>
  </cols>
  <sheetData>
    <row r="1" ht="24" customHeight="1">
      <c r="A1" t="s" s="4"><v>{si}</v></c>
    </row>
    <row r="2" ht="18" customHeight="1">
      <c r="A2" t="s" s="4"><v>{sg}</v></c>
    </row>
    <row r="4">
      <c r="A4" t="s" s="4"><v>{s0}</v></c>
    </row>
    <row r="5">
      <c r="A5" t="s"><v>{s1}</v></c>
    </row>
    <row r="7">
      <c r="A7" t="s" s="4"><v>{s2}</v></c>
    </row>
    <row r="8">
      <c r="A8" t="s"><v>{s3}</v></c>
    </row>
    <row r="9">
      <c r="A9" t="s"><v>{s4}</v></c>
    </row>
    <row r="10">
      <c r="A10" t="s"><v>{s5}</v></c>
    </row>
    <row r="11">
      <c r="A11" t="s"><v>{s6}</v></c>
    </row>
    <row r="12">
      <c r="A12" t="s"><v>{s7}</v></c>
    </row>
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

    with open(work_dir + "/xl/worksheets/sheet1.xml", "w", encoding="utf-8") as f:
        f.write(sheet1_content)

    # ---- sheet2 (主计算表) ----
    # String indices for sheet2
    i_title = shared_index(strings, "诉讼费用速算表")
    i_jine = shared_index(strings, "诉讼请求金额（元）")
    i_anjian = shared_index(strings, "案件类型")
    i_caichan = shared_index(strings, "财产案件")
    i_feicaichan = shared_index(strings, "非财产案件")
    i_susongfei = shared_index(strings, "诉讼费计算")
    i_jinecol = shared_index(strings, "诉讼请求金额")
    i_leixingcol = shared_index(strings, "案件类型")
    i_shoufei = shared_index(strings, "费率")
    i_skccs = shared_index(strings, "速算扣除数")
    i_feijine = shared_index(strings, "诉讼费金额")
    i_lvshifei = shared_index(strings, "律师费参考报价")
    i_leixinglv = shared_index(strings, "案件类型")
    i_jifei = shared_index(strings, "计价方式")
    i_jiage = shared_index(strings, "参考价格区间")
    i_beizhu = shared_index(strings, "备注")
    i_qita = shared_index(strings, "其他成本估算")
    i_xiangmu = shared_index(strings, "项目")
    i_jine2 = shared_index(strings, "金额（元）")
    i_chailv = shared_index(strings, "差旅费")
    i_gongz = shared_index(strings, "公证费")
    i_jianding = shared_index(strings, "鉴定费")
    i_gonggao = shared_index(strings, "公告费")
    i_qita2 = shared_index(strings, "其他")
    i_zongcheng = shared_index(strings, "总成本汇总")
    i_zongji = shared_index(strings, "合计总成本")
    i_shuoming = shared_index(strings, "说明：输入诉讼请求金额，系统自动计算诉讼费")
    i_lvshi = shared_index(strings, "律师费参考（元）")
    i_qitazh = shared_index(strings, "其他成本合计（元）")
    i_zongzh = shared_index(strings, "总成本合计（元）")
    i_jine3 = shared_index(strings, "争议金额≥1000万")
    i_jine4 = shared_index(strings, "争议金额500-1000万")
    i_jine5 = shared_index(strings, "争议金额100-500万")
    i_jine6 = shared_index(strings, "争议金额50-100万")
    i_jine7 = shared_index(strings, "争议金额10-50万")
    i_jine8 = shared_index(strings, "争议金额10万以下")
    i_lihun = shared_index(strings, "离婚案件")
    i_renge = shared_index(strings, "人格权纠纷")
    i_baquan = shared_index(strings, "财产保全费")
    i_danbao = shared_index(strings, "保全担保费")
    i_shuru = shared_index(strings, "输入区")
    i_jisuan = shared_index(strings, "计算结果")
    i_jiage2 = shared_index(strings, "计算公式")
    i_shuom2 = shared_index(strings, "说明：律师费参考报价，实际费用协商确定")
    i_shuom3 = shared_index(strings, "说明：可根据实际情况调整其他成本项目")
    i_leixing3 = shared_index(strings, "费率说明")
    i_shoufei2 = shared_index(strings, "最低收费")
    i_jifei2 = shared_index(strings, "计费方式")

    # ---- sheet2 XML ----
    sheet2_content = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView workbookViewId="0"/>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols>
    <col min="1" max="1" width="28" customWidth="1"/>
    <col min="2" max="2" width="20" customWidth="1"/>
    <col min="3" max="3" width="16" customWidth="1"/>
    <col min="4" max="6" width="14" customWidth="1"/>
  </cols>
  <sheetData>
    <!-- Title -->
    <row r="1" ht="28" customHeight="1">
      <c r="A1" t="s" s="4"><v>{i_title}</v></c>
    </row>
    <!-- Section: 输入区 -->
    <row r="3">
      <c r="A3" t="s" s="4"><v>{i_shuru}</v></c>
    </row>
    <row r="4">
      <c r="A4" t="s"><v>{i_jine}</v></c>
      <c r="B4" s="5"><v>500000</v></c>
      <c r="C4" t="s"><v>{i_shuoming}</v></c>
    </row>
    <row r="5">
      <c r="A5" t="s"><v>{i_anjian}</v></c>
      <c r="B5" t="s" s="1"><v>{i_caichan}</v></c>
    </row>
    <!-- Section: 诉讼费计算 -->
    <row r="7">
      <c r="A7" t="s" s="4"><v>{i_susongfei}</v></c>
    </row>
    <row r="8">
      <c r="A8" t="s" s="4"><v>{i_leixing3}</v></c>
      <c r="B8" t="s" s="4"><v>{i_shoufei2}</v></c>
    </row>
    <row r="9">
      <c r="A9" t="s"><v>{i_jine8}</v></c>
      <c r="B9" t="s"><v>{i_shoufei2}</v></c>
      <c r="C9" s="6"><f>IF(B4&lt;=100000,B4*0.05,0)</f><v></v></c>
    </row>
    <row r="10">
      <c r="A10" t="s"><v>{i_jine7}</v></c>
      <c r="B10" t="s"><v>{i_shoufei2}</v></c>
      <c r="C10" s="6"><f>IF(AND(B4&gt;100000,B4&lt;=500000),(B4-100000)*0.035+5000,0)</f><v></v></c>
    </row>
    <row r="11">
      <c r="A11" t="s"><v>{i_jine6}</v></c>
      <c r="B11" t="s"><v>{i_shoufei2}</v></c>
      <c r="C11" s="6"><f>IF(AND(B4&gt;500000,B4&lt;=1000000),(B4-500000)*0.025+19000,0)</f><v></v></c>
    </row>
    <row r="12">
      <c r="A12" t="s"><v>{i_jine5}</v></c>
      <c r="B12" t="s"><v>{i_shoufei2}</v></c>
      <c r="C12" s="6"><f>IF(AND(B4&gt;1000000,B4&lt;=5000000),(B4-1000000)*0.015+31500,0)</f><v></v></c>
    </row>
    <row r="13">
      <c r="A13" t="s"><v>{i_jine4}</v></c>
      <c r="B13" t="s"><v>{i_shoufei2}</v></c>
      <c r="C13" s="6"><f>IF(AND(B4&gt;5000000,B4&lt;=10000000),(B4-5000000)*0.008+91500,0)</f><v></v></c>
    </row>
    <row r="14">
      <c r="A14" t="s"><v>{i_jine3}</v></c>
      <c r="B14" t="s"><v>{i_shoufei2}</v></c>
      <c r="C14" s="6"><f>IF(B4&gt;10000000,(B4-10000000)*0.008+131500,0)</f><v></v></c>
    </row>
    <row r="15">
      <c r="A15" t="s" s="4"><v>{i_feijine}</v></c>
      <c r="C15" s="6"><f>SUM(C9:C14)</f><v></v></c>
    </row>
    <!-- Section: 律师费参考报价 -->
    <row r="17">
      <c r="A17" t="s" s="4"><v>{i_lvshifei}</v></c>
      <c r="B17" t="s" s="4"><v>{i_jiage2}</v></c>
    </row>
    <row r="18">
      <c r="A18" t="s"><v>{i_jine8}</v></c>
      <c r="B18" t="s"><v>{i_jifei2}</v></c>
      <c r="C18" s="6"><f>B4*0.05</f><v></v></c>
      <c r="D18" t="s"><v>{i_shuom2}</v></c>
    </row>
    <row r="19">
      <c r="A19" t="s"><v>{i_jine7}</v></c>
      <c r="B19" t="s"><v>{i_jifei2}</v></c>
      <c r="C19" s="6"><f>B4*0.04</f><v></v></c>
    </row>
    <row r="20">
      <c r="A20" t="s"><v>{i_jine6}</v></c>
      <c r="B20" t="s"><v>{i_jifei2}</v></c>
      <c r="C20" s="6"><f>B4*0.035</f><v></v></c>
    </row>
    <row r="21">
      <c r="A21" t="s"><v>{i_jine5}</v></c>
      <c r="B21" t="s"><v>{i_jifei2}</v></c>
      <c r="C21" s="6"><f>B4*0.03</f><v></v></c>
    </row>
    <row r="22">
      <c r="A22" t="s"><v>{i_jine4}</v></c>
      <c r="B22" t="s"><v>{i_jifei2}</v></c>
      <c r="C22" s="6"><f>B4*0.025</f><v></v></c>
    </row>
    <row r="23">
      <c r="A23" t="s"><v>{i_jine3}</v></c>
      <c r="B23" t="s"><v>{i_jifei2}</v></c>
      <c r="C23" s="6"><f>B4*0.02</f><v></v></c>
    </row>
    <row r="24">
      <c r="A24" t="s" s="4"><v>{i_lvshi}</v></c>
      <c r="C24" s="6"><f>SUM(C18:C23)</f><v></v></c>
    </row>
    <!-- Section: 其他成本估算 -->
    <row r="26">
      <c r="A26" t="s" s="4"><v>{i_qita}</v></c>
    </row>
    <row r="27">
      <c r="A27" t="s"><v>{i_chailv}</v></c>
      <c r="B27" s="5"><v>0</v></c>
    </row>
    <row r="28">
      <c r="A28" t="s"><v>{i_gongz}</v></c>
      <c r="B28" s="5"><v>0</v></c>
    </row>
    <row r="29">
      <c r="A29" t="s"><v>{i_jianding}</v></c>
      <c r="B29" s="5"><v>0</v></c>
    </row>
    <row r="30">
      <c r="A30" t="s"><v>{i_gonggao}</v></c>
      <c r="B30" s="5"><v>0</v></c>
    </row>
    <row r="31">
      <c r="A31" t="s"><v>{i_qita2}</v></c>
      <c r="B31" s="5"><v>0</v></c>
    </row>
    <row r="32">
      <c r="A32" t="s" s="4"><v>{i_qitazh}</v></c>
      <c r="B32" s="6"><f>SUM(B27:B31)</f><v></v></c>
    </row>
    <!-- Section: 总成本汇总 -->
    <row r="34">
      <c r="A34" t="s" s="4"><v>{i_zongcheng}</v></c>
    </row>
    <row r="35">
      <c r="A35" t="s"><v>{i_susongfei}</v></c>
      <c r="B35" s="6"><f>C15</f><v></v></c>
    </row>
    <row r="36">
      <c r="A36" t="s"><v>{i_lvshifei}</v></c>
      <c r="B36" s="6"><f>C24</f><v></v></c>
    </row>
    <row r="37">
      <c r="A37" t="s"><v>{i_qita}</v></c>
      <c r="B37" s="6"><f>B32</f><v></v></c>
    </row>
    <row r="38">
      <c r="A38" t="s" s="4"><v>{i_zongzh}</v></c>
      <c r="B38" s="6"><f>SUM(B35:B37)</f><v></v></c>
    </row>
    <row r="40">
      <c r="A40" t="s"><v>{i_shuom3}</v></c>
    </row>
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

    with open(work_dir + "/xl/worksheets/sheet2.xml", "w", encoding="utf-8") as f:
        f.write(sheet2_content)

    # ---- sheet3 (费率说明表) ----
    # Just a reference table
    i_biaoti = shared_index(strings, "费率说明")
    i_jinecol2 = shared_index(strings, "争议金额区间")
    i_shoufei3 = shared_index(strings, "费率")
    i_sushu = shared_index(strings, "诉讼费计算公式")
    i_ermei = shared_index(strings, "非财产案件收费标准")
    i_leixing4 = shared_index(strings, "案件类型")
    i_shoufei4 = shared_index(strings, "收费标准")
    i_zengzi = shared_index(strings, "备注")

    sheet3_content = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView workbookViewId="0"/>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols>
    <col min="1" max="1" width="30" customWidth="1"/>
    <col min="2" max="2" width="20" customWidth="1"/>
    <col min="3" max="4" width="20" customWidth="1"/>
  </cols>
  <sheetData>
    <row r="1" ht="24" customHeight="1">
      <c r="A1" t="s" s="4"><v>{i_biaoti}</v></c>
    </row>
    <row r="3">
      <c r="A3" t="s" s="4"><v>{i_shuoming}</v></c>
    </row>
    <row r="5">
      <c r="A5" t="s" s="4"><v>{i_jinecol2}</v></c>
      <c r="B5" t="s" s="4"><v>{i_shoufei3}</v></c>
      <c r="C5" t="s" s="4"><v>{i_sushu}</v></c>
    </row>
    <row r="6">
      <c r="A6" t="s"><v>{i_jine8}</v></c>
      <c r="B6" t="s"><v>5%</v></c>
      <c r="C6" t="s"><v>金额×5%</v></c>
    </row>
    <row r="7">
      <c r="A7" t="s"><v>{i_jine7}</v></c>
      <c r="B7" t="s"><v>3.5%</v></c>
      <c r="C7" t="s"><v>(金额-10万)×3.5%+5000</v></c>
    </row>
    <row r="8">
      <c r="A8" t="s"><v>{i_jine6}</v></c>
      <c r="B8" t="s"><v>2.5%</v></c>
      <c r="C8" t="s"><v>(金额-50万)×2.5%+19000</v></c>
    </row>
    <row r="9">
      <c r="A9" t="s"><v>{i_jine5}</v></c>
      <c r="B9" t="s"><v>1.5%</v></c>
      <c r="C9" t="s"><v>(金额-100万)×1.5%+31500</v></c>
    </row>
    <row r="10">
      <c r="A10" t="s"><v>{i_jine4}</v></c>
      <c r="B10" t="s"><v>0.8%</v></c>
      <c r="C10" t="s"><v>(金额-500万)×0.8%+91500</v></c>
    </row>
    <row r="11">
      <c r="A11" t="s"><v>{i_jine3}</v></c>
      <c r="B11" t="s"><v>0.8%</v></c>
      <c r="C11" t="s"><v>(金额-1000万)×0.8%+131500</v></c>
    </row>
    <row r="13">
      <c r="A13" t="s" s="4"><v>{i_ermei}</v></c>
    </row>
    <row r="14">
      <c r="A14" t="s" s="4"><v>{i_leixing4}</v></c>
      <c r="B14" t="s" s="4"><v>{i_shoufei4}</v></c>
      <c r="C14" t="s" s="4"><v>{i_zengzi}</v></c>
    </row>
    <row r="15">
      <c r="A15" t="s"><v>{i_lihun}</v></c>
      <c r="B15" t="s"><v>50-300元/件</v></c>
      <c r="C15" t="s"><v>涉及财产分割按财产案件计算</v></c>
    </row>
    <row r="16">
      <c r="A16" t="s"><v>{i_renge}</v></c>
      <c r="B16" t="s"><v>100-500元/件</v></c>
      <c r="C16" t="s"><v>侵害人格权案件</v></c>
    </row>
    <row r="17">
      <c r="A17" t="s"><v>其他非财产案件</v></c>
      <c r="B17" t="s"><v>500-1000元/件</v></c>
    </row>
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

    with open(work_dir + "/xl/worksheets/sheet3.xml", "w", encoding="utf-8") as f:
        f.write(sheet3_content)

    out_path = os.path.join(OUT_DIR, "诉讼费用速算表.xlsx")
    return pack_and_validate(work_dir, out_path)


# =============================================================================
# EXCEL 2: 诉讼时效追踪表
# =============================================================================
def build_excel2(work_dir):
    """诉讼时效追踪表"""
    shutil.rmtree(work_dir, ignore_errors=True)
    shutil.copytree(TEMPLATE_DIR, work_dir)

    strings = [
        "诉讼时效追踪表", "使用说明",
        "本表用于追踪诉讼各阶段时效节点，请及时关注剩余天数",
        "案件名称", "案号", "立案日期", "审理法院", "案件类型", "当前状态",
        "时效节点", "节点说明", "起始日期", "截止日期", "剩余天数", "状态", "备注",
        "起诉时效", "民事诉讼时效为3年（特殊情况1年或20年）", "举证时限", "答辩期", "举证责任",
        "一审期限", "上诉期限", "申请执行期限", "申请再审期限",
        "时效节点", "法律依据", "正常", "即将届满", "已届满", "请填写",
        "使用说明", "请在\"案件基本信息\"表中填写案件信息", "时效节点将自动计算",
        "剩余天数小于30天显示橙色提醒", "剩余天数小于7天显示红色警告",
        "案件基本信息", "时效节点追踪", "日期格式：YYYY-MM-DD", "重要提示",
        "请及时关注各节点剩余天数，避免错失时效",
        "起诉时效（3年）", "自权利人知道或应当知道权利受到损害之日起计算",
        "举证时限", "答辩期15日内，举证期由法院指定，一般15-30日",
        "一审期限", "普通程序6个月，简易程序3个月",
        "上诉期限", "判决书送达之日起15日内",
        "申请执行期限", "判决生效后2年内",
        "申请再审期限", "判决生效后6个月内",
        "剩余30天以内", "剩余7天以内", "已超过时限",
    ]

    # Update workbook.xml for 3 sheets
    wb = work_dir + "/xl/workbook.xml"
    with open(wb, "r", encoding="utf-8") as f:
        wb_content = f.read()
    wb_content = wb_content.replace("Sheet1", "使用说明")
    with open(wb, "w", encoding="utf-8") as f:
        f.write(wb_content)

    rels = work_dir + "/xl/_rels/workbook.xml.rels"
    with open(rels, "r", encoding="utf-8") as f:
        rels_content = f.read()
    rels_content = rels_content.replace("</Relationships>",
        '  <Relationship Id="rId4" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet2.xml"/>\n'
        '  <Relationship Id="rId5" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet3.xml"/>\n'
        "</Relationships>")
    with open(rels, "w", encoding="utf-8") as f:
        f.write(rels_content)

    ct = work_dir + "/[Content_Types].xml"
    with open(ct, "r", encoding="utf-8") as f:
        ct_content = f.read()
    ct_content = ct_content.replace("</Types>",
        '  <Override PartName="/xl/worksheets/sheet2.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>\n'
        '  <Override PartName="/xl/worksheets/sheet3.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>\n'
        "</Types>")
    with open(ct, "w", encoding="utf-8") as f:
        f.write(ct_content)

    shutil.copy(work_dir + "/xl/worksheets/sheet1.xml", work_dir + "/xl/worksheets/sheet2.xml")
    shutil.copy(work_dir + "/xl/worksheets/sheet1.xml", work_dir + "/xl/worksheets/sheet3.xml")

    ss_path = work_dir + "/xl/sharedStrings.xml"
    with open(ss_path, "w", encoding="utf-8") as f:
        f.write(build_shared_strings(strings))

    def si(s): return shared_index(strings, s)

    # ---- sheet1 (使用说明) ----
    sheet1_content = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"/></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols><col min="1" max="1" width="30" customWidth="1"/><col min="2" max="4" width="20" customWidth="1"/></cols>
  <sheetData>
    <row r="1" ht="26" customHeight="1"><c r="A1" t="s" s="4"><v>{si("诉讼时效追踪表")}</v></c></row>
    <row r="3" ht="18" customHeight="1"><c r="A3" t="s" s="4"><v>{si("使用说明")}</v></c></row>
    <row r="4"><c r="A4" t="s"><v>{si("本表用于追踪诉讼各阶段时效节点，请及时关注剩余天数")}</v></c></row>
    <row r="6"><c r="A6" t="s"><v>{si("使用说明")}</v></c></row>
    <row r="7"><c r="A7" t="s"><v>{si("请在\"案件基本信息\"表中填写案件信息")}</v></c></row>
    <row r="8"><c r="A8" t="s"><v>{si("时效节点将自动计算")}</v></c></row>
    <row r="9"><c r="A9" t="s"><v>{si("剩余天数小于30天显示橙色提醒")}</v></c></row>
    <row r="10"><c r="A10" t="s"><v>{si("剩余天数小于7天显示红色警告")}</v></c></row>
    <row r="12"><c r="A12" t="s" s="4"><v>{si("重要提示")}</v></c></row>
    <row r="13"><c r="A13" t="s"><v>{si("请及时关注各节点剩余天数，避免错失时效")}</v></c></row>
    <row r="15"><c r="A15" t="s" s="4"><v>{si("时效节点说明")}</v></c></row>
    <row r="16"><c r="A16" t="s" s="4"><v>{si("时效节点")}</v></c><c r="B16" t="s" s="4"><v>{si("法律依据")}</v></c></row>
    <row r="17"><c r="A17" t="s"><v>{si("起诉时效（3年）")}</v></c><c r="B17" t="s"><v>{si("自权利人知道或应当知道权利受到损害之日起计算")}</v></c></row>
    <row r="18"><c r="A18" t="s"><v>{si("举证时限")}</v></c><c r="B18" t="s"><v>{si("答辩期15日内，举证期由法院指定，一般15-30日")}</v></c></row>
    <row r="19"><c r="A19" t="s"><v>{si("一审期限")}</v></c><c r="B19" t="s"><v>{si("普通程序6个月，简易程序3个月")}</v></c></row>
    <row r="20"><c r="A20" t="s"><v>{si("上诉期限")}</v></c><c r="B20" t="s"><v>{si("判决书送达之日起15日内")}</v></c></row>
    <row r="21"><c r="A21" t="s"><v>{si("申请执行期限")}</v></c><c r="B21" t="s"><v>{si("判决生效后2年内")}</v></c></row>
    <row r="22"><c r="A22" t="s"><v>{si("申请再审期限")}</v></c><c r="B22" t="s"><v>{si("判决生效后6个月内")}</v></c></row>
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''
    with open(work_dir + "/xl/worksheets/sheet1.xml", "w", encoding="utf-8") as f:
        f.write(sheet1_content)

    # ---- sheet2 (案件基本信息) ----
    sheet2_content = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView workbookViewId="0"/>
    <pane ySplit="3" topLeftCell="A4" activePane="bottomLeft" state="frozen"/>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols>
    <col min="1" max="1" width="24" customWidth="1"/>
    <col min="2" max="2" width="28" customWidth="1"/>
    <col min="3" max="5" width="16" customWidth="1"/>
  </cols>
  <sheetData>
    <row r="1" ht="26" customHeight="1"><c r="A1" t="s" s="4"><v>{si("诉讼时效追踪表")}</v></c></row>
    <row r="2" ht="20" customHeight="1"><c r="A2" t="s" s="4"><v>{si("案件基本信息")}</v></c></row>
    <row r="4">
      <c r="A4" t="s" s="4"><v>{si("案件名称")}</v></c>
      <c r="B4" s="5"><v></v></c>
    </row>
    <row r="5">
      <c r="A5" t="s" s="4"><v>{si("案号")}</v></c>
      <c r="B5" s="5"><v></v></c>
    </row>
    <row r="6">
      <c r="A6" t="s" s="4"><v>{si("立案日期")}</v></c>
      <c r="B6" s="5"><v>2024-01-01</v></c>
    </row>
    <row r="7">
      <c r="A7" t="s" s="4"><v>{si("审理法院")}</v></c>
      <c r="B7" s="5"><v></v></c>
    </row>
    <row r="8">
      <c r="A8" t="s" s="4"><v>{si("案件类型")}</v></c>
      <c r="B8" s="5"><v></v></c>
    </row>
    <row r="9">
      <c r="A9" t="s" s="4"><v>{si("当前状态")}</v></c>
      <c r="B9" s="5"><v></v></c>
    </row>
    <row r="11">
      <c r="A11" t="s"><v>{si("日期格式：YYYY-MM-DD")}</v></c>
    </row>
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''
    with open(work_dir + "/xl/worksheets/sheet2.xml", "w", encoding="utf-8") as f:
        f.write(sheet2_content)

    # ---- sheet3 (时效节点追踪) ----
    # Columns: 时效节点 | 节点说明 | 起始日期 | 截止日期 | 剩余天数 | 状态 | 备注
    sheet3_content = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView workbookViewId="0"/>
    <pane ySplit="2" topLeftCell="A3" activePane="bottomLeft" state="frozen"/>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols>
    <col min="1" max="1" width="20" customWidth="1"/>
    <col min="2" max="2" width="36" customWidth="1"/>
    <col min="3" max="3" width="16" customWidth="1"/>
    <col min="4" max="4" width="16" customWidth="1"/>
    <col min="5" max="5" width="14" customWidth="1"/>
    <col min="6" max="6" width="14" customWidth="1"/>
    <col min="7" max="7" width="24" customWidth="1"/>
  </cols>
  <sheetData>
    <row r="1" ht="26" customHeight="1"><c r="A1" t="s" s="4"><v>{si("诉讼时效追踪表")}</v></c></row>
    <row r="2" ht="20" customHeight="1"><c r="A2" t="s" s="4"><v>{si("时效节点追踪")}</v></c></row>
    <!-- Header row -->
    <row r="3">
      <c r="A3" t="s" s="4"><v>{si("时效节点")}</v></c>
      <c r="B3" t="s" s="4"><v>{si("节点说明")}</v></c>
      <c r="C3" t="s" s="4"><v>{si("起始日期")}</v></c>
      <c r="D3" t="s" s="4"><v>{si("截止日期")}</v></c>
      <c r="E3" t="s" s="4"><v>{si("剩余天数")}</v></c>
      <c r="F3" t="s" s="4"><v>{si("状态")}</v></c>
      <c r="G3" t="s" s="4"><v>{si("备注")}</v></c>
    </row>
    <!-- Data rows -->
    <row r="4">
      <c r="A4" t="s"><v>{si("起诉时效")}</v></c>
      <c r="B4" t="s"><v>{si("民事诉讼时效为3年（特殊情况1年或20年）")}</v></c>
      <c r="C4" s="5"><v>2024-01-01</v></c>
      <c r="D4" s="6"><f>DATE(YEAR(C4),MONTH(C4),DAY(C4))+365*3</f><v></v></c>
      <c r="E4" s="6"><f>D4-TODAY()</f><v></v></c>
      <c r="F4" s="6"><f>IF(E4&lt;0,"已届满",IF(E4&lt;7,"紧急",IF(E4&lt;30,"预警","正常")))</f><v></v></c>
      <c r="G4" s="5"><v></v></c>
    </row>
    <row r="5">
      <c r="A5" t="s"><v>{si("举证时限")}</v></c>
      <c r="B5" t="s"><v>{si("答辩期15日内，举证期由法院指定，一般15-30日")}</v></c>
      <c r="C5" s="5"><v>2024-01-01</v></c>
      <c r="D5" s="6"><f>C5+30</f><v></v></c>
      <c r="E5" s="6"><f>D5-TODAY()</f><v></v></c>
      <c r="F5" s="6"><f>IF(E5&lt;0,"已届满",IF(E5&lt;7,"紧急",IF(E5&lt;30,"预警","正常")))</f><v></v></c>
      <c r="G5" s="5"><v></v></c>
    </row>
    <row r="6">
      <c r="A6" t="s"><v>{si("一审期限")}</v></c>
      <c r="B6" t="s"><v>{si("普通程序6个月，简易程序3个月")}</v></c>
      <c r="C6" s="5"><v>2024-01-01</v></c>
      <c r="D6" s="6"><f>C6+180</f><v></v></c>
      <c r="E6" s="6"><f>D6-TODAY()</f><v></v></c>
      <c r="F6" s="6"><f>IF(E6&lt;0,"已届满",IF(E6&lt;7,"紧急",IF(E6&lt;30,"预警","正常")))</f><v></v></c>
      <c r="G6" s="5"><v></v></c>
    </row>
    <row r="7">
      <c r="A7" t="s"><v>{si("上诉期限")}</v></c>
      <c r="B7" t="s"><v>{si("判决书送达之日起15日内")}</v></c>
      <c r="C7" s="5"><v>2024-07-01</v></c>
      <c r="D7" s="6"><f>C7+15</f><v></v></c>
      <c r="E7" s="6"><f>D7-TODAY()</f><v></v></c>
      <c r="F7" s="6"><f>IF(E7&lt;0,"已届满",IF(E7&lt;7,"紧急",IF(E7&lt;30,"预警","正常")))</f><v></v></c>
      <c r="G7" s="5"><v></v></c>
    </row>
    <row r="8">
      <c r="A8" t="s"><v>{si("申请执行期限")}</v></c>
      <c r="B8" t="s"><v>{si("判决生效后2年内")}</v></c>
      <c r="C8" s="5"><v>2024-07-15</v></c>
      <c r="D8" s="6"><f>C8+365*2</f><v></v></c>
      <c r="E8" s="6"><f>D8-TODAY()</f><v></v></c>
      <c r="F8" s="6"><f>IF(E8&lt;0,"已届满",IF(E8&lt;7,"紧急",IF(E8&lt;30,"预警","正常")))</f><v></v></c>
      <c r="G8" s="5"><v></v></c>
    </row>
    <row r="9">
      <c r="A9" t="s"><v>{si("申请再审期限")}</v></c>
      <c r="B9" t="s"><v>{si("判决生效后6个月内")}</v></c>
      <c r="C9" s="5"><v>2024-07-15</v></c>
      <c r="D9" s="6"><f>C9+180</f><v></v></c>
      <c r="E9" s="6"><f>D9-TODAY()</f><v></v></c>
      <c r="F9" s="6"><f>IF(E9&lt;0,"已届满",IF(E9&lt;7,"紧急",IF(E9&lt;30,"预警","正常")))</f><v></v></c>
      <c r="G9" s="5"><v></v></c>
    </row>
    <!-- Legend -->
    <row r="11">
      <c r="A11" t="s" s="4"><v>{si("状态说明")}</v></c>
    </row>
    <row r="12">
      <c r="A12" t="s"><v>{si("正常")}</v></c><c r="B12" t="s"><v>剩余天数≥30天</v></c>
    </row>
    <row r="13">
      <c r="A13" t="s"><v>{si("预警")}</v></c><c r="B13" t="s"><v>剩余天数7-30天</v></c>
    </row>
    <row r="14">
      <c r="A14" t="s"><v>{si("紧急")}</v></c><c r="B14" t="s"><v>剩余天数1-7天</v></c>
    </row>
    <row r="15">
      <c r="A15" t="s"><v>{si("已届满")}</v></c><c r="B15" t="s"><v>已超过时限</v></c>
    </row>
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''
    with open(work_dir + "/xl/worksheets/sheet3.xml", "w", encoding="utf-8") as f:
        f.write(sheet3_content)

    out_path = os.path.join(OUT_DIR, "诉讼时效追踪表.xlsx")
    return pack_and_validate(work_dir, out_path)


# =============================================================================
# EXCEL 3: 证据清单工作表
# =============================================================================
def build_excel3(work_dir):
    """证据清单工作表"""
    shutil.rmtree(work_dir, ignore_errors=True)
    shutil.copytree(TEMPLATE_DIR, work_dir)

    strings = [
        "证据清单工作表", "使用说明",
        "本表用于记录和管理案件证据材料，支持筛选和排序",
        "编号", "证据名称", "证据类型", "证明目的", "来源/持有人", "是否原件", "收集日期", "备注",
        "书证", "物证", "视听资料", "电子数据", "证人证言", "当事人陈述", "鉴定意见", "勘验笔录",
        "是", "否", "证据清单", "序号", "证据名称", "证据类型", "证明目的", "来源", "是否原件", "收集日期", "备注",
        "使用说明：", "1. 填写证据信息，支持自动筛选", "2. 蓝色单元格为可编辑输入框",
        "3. 黑色单元格为自动计算或固定内容", "4. 使用筛选功能快速查找证据",
        "证据类型说明", "书证：合同、发票、书信等书面材料", "物证：实物、痕迹等",
        "视听资料：录音、录像、照片等", "电子数据：邮件、微信记录、网页等",
        "证人证言：知情人书面陈述", "当事人陈述：当事人陈述笔录",
        "鉴定意见：专业机构鉴定结论", "勘验笔录：现场勘验记录",
        "自动编号说明", "编号列可手动填写或使用公式自动生成",
    ]

    wb = work_dir + "/xl/workbook.xml"
    with open(wb, "r", encoding="utf-8") as f:
        wb_content = f.read()
    wb_content = wb_content.replace("Sheet1", "使用说明")
    with open(wb, "w", encoding="utf-8") as f:
        f.write(wb_content)

    rels = work_dir + "/xl/_rels/workbook.xml.rels"
    with open(rels, "r", encoding="utf-8") as f:
        rels_content = f.read()
    rels_content = rels_content.replace("</Relationships>",
        '  <Relationship Id="rId4" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet2.xml"/>\n'
        '  <Relationship Id="rId5" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet3.xml"/>\n'
        "</Relationships>")
    with open(rels, "w", encoding="utf-8") as f:
        f.write(rels_content)

    ct = work_dir + "/[Content_Types].xml"
    with open(ct, "r", encoding="utf-8") as f:
        ct_content = f.read()
    ct_content = ct_content.replace("</Types>",
        '  <Override PartName="/xl/worksheets/sheet2.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>\n'
        '  <Override PartName="/xl/worksheets/sheet3.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>\n'
        "</Types>")
    with open(ct, "w", encoding="utf-8") as f:
        f.write(ct_content)

    shutil.copy(work_dir + "/xl/worksheets/sheet1.xml", work_dir + "/xl/worksheets/sheet2.xml")
    shutil.copy(work_dir + "/xl/worksheets/sheet1.xml", work_dir + "/xl/worksheets/sheet3.xml")

    ss_path = work_dir + "/xl/sharedStrings.xml"
    with open(ss_path, "w", encoding="utf-8") as f:
        f.write(build_shared_strings(strings))

    def si(s): return shared_index(strings, s)

    # ---- sheet1 (使用说明) ----
    sheet1_content = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"/></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols><col min="1" max="1" width="30" customWidth="1"/><col min="2" max="4" width="20" customWidth="1"/></cols>
  <sheetData>
    <row r="1" ht="26" customHeight="1"><c r="A1" t="s" s="4"><v>{si("证据清单工作表")}</v></c></row>
    <row r="3" ht="18" customHeight="1"><c r="A3" t="s" s="4"><v>{si("使用说明")}</v></c></row>
    <row r="4"><c r="A4" t="s"><v>{si("本表用于记录和管理案件证据材料，支持筛选和排序")}</v></c></row>
    <row r="6"><c r="A6" t="s" s="4"><v>{si("使用说明：")}</v></c></row>
    <row r="7"><c r="A7" t="s"><v>{si("1. 填写证据信息，支持自动筛选")}</v></c></row>
    <row r="8"><c r="A8" t="s"><v>{si("2. 蓝色单元格为可编辑输入框")}</v></c></row>
    <row r="9"><c r="A9" t="s"><v>{si("3. 黑色单元格为自动计算或固定内容")}</v></c></row>
    <row r="10"><c r="A10" t="s"><v>{si("4. 使用筛选功能快速查找证据")}</v></c></row>
    <row r="12"><c r="A12" t="s" s="4"><v>{si("证据类型说明")}</v></c></row>
    <row r="13"><c r="A13" t="s"><v>{si("书证：合同、发票、书信等书面材料")}</v></c></row>
    <row r="14"><c r="A14" t="s"><v>{si("物证：实物、痕迹等")}</v></c></row>
    <row r="15"><c r="A15" t="s"><v>{si("视听资料：录音、录像、照片等")}</v></c></row>
    <row r="16"><c r="A16" t="s"><v>{si("电子数据：邮件、微信记录、网页等")}</v></c></row>
    <row r="17"><c r="A17" t="s"><v>{si("证人证言：知情人书面陈述")}</v></c></row>
    <row r="18"><c r="A18" t="s"><v>{si("当事人陈述：当事人陈述笔录")}</v></c></row>
    <row r="19"><c r="A19" t="s"><v>{si("鉴定意见：专业机构鉴定结论")}</v></c></row>
    <row r="20"><c r="A20" t="s"><v>{si("勘验笔录：现场勘验记录")}</v></c></row>
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''
    with open(work_dir + "/xl/worksheets/sheet1.xml", "w", encoding="utf-8") as f:
        f.write(sheet1_content)

    # ---- sheet2 (证据清单主表) ----
    # AutoFilter on row 3
    # Columns: 序号 | 证据名称 | 证据类型 | 证明目的 | 来源/持有人 | 是否原件 | 收集日期 | 备注
    # Rows 4-18 for data (15 rows)
    data_rows = ""
    for i in range(1, 16):
        row_num = i + 3
        data_rows += f'''
    <row r="{row_num}">
      <c r="A{row_num}" s="6"><f>ROW()-3</f><v></v></c>
      <c r="B{row_num}" s="5"><v></v></c>
      <c r="C{row_num}" t="s" s="1"><v>{si("书证")}</v></c>
      <c r="D{row_num}" s="5"><v></v></c>
      <c r="E{row_num}" s="5"><v></v></c>
      <c r="F{row_num}" t="s" s="1"><v>{si("是")}</v></c>
      <c r="G{row_num}" s="5"><v></v></c>
      <c r="H{row_num}" s="5"><v></v></c>
    </row>'''

    sheet2_content = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView workbookViewId="0"/>
    <pane ySplit="3" topLeftCell="A4" activePane="bottomLeft" state="frozen"/>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols>
    <col min="1" max="1" width="8" customWidth="1"/>
    <col min="2" max="2" width="24" customWidth="1"/>
    <col min="3" max="3" width="14" customWidth="1"/>
    <col min="4" max="4" width="30" customWidth="1"/>
    <col min="5" max="5" width="18" customWidth="1"/>
    <col min="6" max="6" width="12" customWidth="1"/>
    <col min="7" max="7" width="14" customWidth="1"/>
    <col min="8" max="8" width="20" customWidth="1"/>
  </cols>
  <sheetData>
    <row r="1" ht="26" customHeight="1"><c r="A1" t="s" s="4"><v>{si("证据清单工作表")}</v></c></row>
    <row r="2" ht="18" customHeight="1"><c r="A2" t="s" s="4"><v>{si("证据清单")}</v></c></row>
    <row r="3">
      <c r="A3" t="s" s="4"><v>{si("序号")}</v></c>
      <c r="B3" t="s" s="4"><v>{si("证据名称")}</v></c>
      <c r="C3" t="s" s="4"><v>{si("证据类型")}</v></c>
      <c r="D3" t="s" s="4"><v>{si("证明目的")}</v></c>
      <c r="E3" t="s" s="4"><v>{si("来源/持有人")}</v></c>
      <c r="F3" t="s" s="4"><v>{si("是否原件")}</v></c>
      <c r="G3" t="s" s="4"><v>{si("收集日期")}</v></c>
      <c r="H3" t="s" s="4"><v>{si("备注")}</v></c>
    </row>{data_rows}
  </sheetData>
  <autoFilter ref="A3:H18"/>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''
    with open(work_dir + "/xl/worksheets/sheet2.xml", "w", encoding="utf-8") as f:
        f.write(sheet2_content)

    # ---- sheet3 (证据类型参考) ----
    sheet3_content = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"/></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols>
    <col min="1" max="1" width="20" customWidth="1"/>
    <col min="2" max="2" width="40" customWidth="1"/>
  </cols>
  <sheetData>
    <row r="1" ht="24" customHeight="1"><c r="A1" t="s" s="4"><v>{si("证据类型参考")}</v></c></row>
    <row r="3">
      <c r="A3" t="s" s="4"><v>{si("证据类型")}</v></c>
      <c r="B3" t="s" s="4"><v>{si("说明")}</v></c>
    </row>
    <row r="4">
      <c r="A4" t="s"><v>{si("书证")}</v></c>
      <c r="B4" t="s"><v>{si("书证：合同、发票、书信等书面材料")}</v></c>
    </row>
    <row r="5">
      <c r="A5" t="s"><v>{si("物证")}</v></c>
      <c r="B5" t="s"><v>{si("物证：实物、痕迹等")}</v></c>
    </row>
    <row r="6">
      <c r="A6" t="s"><v>{si("视听资料")}</v></c>
      <c r="B6" t="s"><v>{si("视听资料：录音、录像、照片等")}</v></c>
    </row>
    <row r="7">
      <c r="A7" t="s"><v>{si("电子数据")}</v></c>
      <c r="B7" t="s"><v>{si("电子数据：邮件、微信记录、网页等")}</v></c>
    </row>
    <row r="8">
      <c r="A8" t="s"><v>{si("证人证言")}</v></c>
      <c r="B8" t="s"><v>{si("证人证言：知情人书面陈述")}</v></c>
    </row>
    <row r="9">
      <c r="A9" t="s"><v>{si("当事人陈述")}</v></c>
      <c r="B9" t="s"><v>{si("当事人陈述：当事人陈述笔录")}</v></c>
    </row>
    <row r="10">
      <c r="A10" t="s"><v>{si("鉴定意见")}</v></c>
      <c r="B10" t="s"><v>{si("鉴定意见：专业机构鉴定结论")}</v></c>
    </row>
    <row r="11">
      <c r="A11" t="s"><v>{si("勘验笔录")}</v></c>
      <c r="B11" t="s"><v>{si("勘验笔录：现场勘验记录")}</v></c>
    </row>
    <row r="13">
      <c r="A13" t="s" s="4"><v>{si("自动编号说明")}</v></c>
    </row>
    <row r="14">
      <c r="A14" t="s"><v>{si("编号列可手动填写或使用公式自动生成")}</v></c>
    </row>
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''
    with open(work_dir + "/xl/worksheets/sheet3.xml", "w", encoding="utf-8") as f:
        f.write(sheet3_content)

    out_path = os.path.join(OUT_DIR, "证据清单工作表.xlsx")
    return pack_and_validate(work_dir, out_path)


# =============================================================================
# EXCEL 4: 被执行财产线索追踪表
# =============================================================================
def build_excel4(work_dir):
    """被执行财产线索追踪表"""
    shutil.rmtree(work_dir, ignore_errors=True)
    shutil.copytree(TEMPLATE_DIR, work_dir)

    strings = [
        "被执行财产线索追踪表", "使用说明",
        "本表用于记录被执行人可供执行的财产线索，协助执行追缴",
        "财产类型", "银行账户", "房产", "车辆", "股票/基金", "应收账款", "知识产权", "其他财产",
        "财产线索", "金额/估值", "发现日期", "查封状态", "执行法院", "备注",
        "已查封", "未查封", "已执行", "调查中", "待核实",
        "线索编号", "财产类型", "财产线索描述", "金额/估值（元）", "发现日期", "查封状态", "执行法院", "备注",
        "使用说明：", "1. 记录被执行人各类财产线索", "2. 蓝色单元格为可编辑输入框",
        "3. 查封状态请选择下拉选项", "4. 定期更新查封状态和执行进展",
        "状态说明", "已查封：已被法院查封冻结", "未查封：发现但尚未查封", "已执行：已完成执行划扣",
        "调查中：法院正在调查中", "待核实：线索待进一步核实",
        "财产线索追踪", "定期更新各财产线索的查封状态和执行进展",
        "提示：发现财产线索后应尽快向执行法院申请查封保全",
        "序号", "财产类型", "财产线索", "金额/估值", "发现日期", "查封状态", "执行法院", "备注",
    ]

    wb = work_dir + "/xl/workbook.xml"
    with open(wb, "r", encoding="utf-8") as f:
        wb_content = f.read()
    wb_content = wb_content.replace("Sheet1", "使用说明")
    with open(wb, "w", encoding="utf-8") as f:
        f.write(wb_content)

    rels = work_dir + "/xl/_rels/workbook.xml.rels"
    with open(rels, "r", encoding="utf-8") as f:
        rels_content = f.read()
    rels_content = rels_content.replace("</Relationships>",
        '  <Relationship Id="rId4" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet2.xml"/>\n'
        '  <Relationship Id="rId5" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet3.xml"/>\n'
        "</Relationships>")
    with open(rels, "w", encoding="utf-8") as f:
        f.write(rels_content)

    ct = work_dir + "/[Content_Types].xml"
    with open(ct, "r", encoding="utf-8") as f:
        ct_content = f.read()
    ct_content = ct_content.replace("</Types>",
        '  <Override PartName="/xl/worksheets/sheet2.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>\n'
        '  <Override PartName="/xl/worksheets/sheet3.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>\n'
        "</Types>")
    with open(ct, "w", encoding="utf-8") as f:
        f.write(ct_content)

    shutil.copy(work_dir + "/xl/worksheets/sheet1.xml", work_dir + "/xl/worksheets/sheet2.xml")
    shutil.copy(work_dir + "/xl/worksheets/sheet1.xml", work_dir + "/xl/worksheets/sheet3.xml")

    ss_path = work_dir + "/xl/sharedStrings.xml"
    with open(ss_path, "w", encoding="utf-8") as f:
        f.write(build_shared_strings(strings))

    def si(s): return shared_index(strings, s)

    # ---- sheet1 (使用说明) ----
    sheet1_content = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"/></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols><col min="1" max="1" width="30" customWidth="1"/><col min="2" max="4" width="20" customWidth="1"/></cols>
  <sheetData>
    <row r="1" ht="26" customHeight="1"><c r="A1" t="s" s="4"><v>{si("被执行财产线索追踪表")}</v></c></row>
    <row r="3" ht="18" customHeight="1"><c r="A3" t="s" s="4"><v>{si("使用说明")}</v></c></row>
    <row r="4"><c r="A4" t="s"><v>{si("本表用于记录被执行人可供执行的财产线索，协助执行追缴")}</v></c></row>
    <row r="6"><c r="A6" t="s" s="4"><v>{si("使用说明：")}</v></c></row>
    <row r="7"><c r="A7" t="s"><v>{si("1. 记录被执行人各类财产线索")}</v></c></row>
    <row r="8"><c r="A8" t="s"><v>{si("2. 蓝色单元格为可编辑输入框")}</v></c></row>
    <row r="9"><c r="A9" t="s"><v>{si("3. 查封状态请选择下拉选项")}</v></c></row>
    <row r="10"><c r="A10" t="s"><v>{si("4. 定期更新查封状态和执行进展")}</v></c></row>
    <row r="12"><c r="A12" t="s" s="4"><v>{si("状态说明")}</v></c></row>
    <row r="13"><c r="A13" t="s"><v>{si("已查封")}</v></c><c r="B13" t="s"><v>已被法院查封冻结</v></c></row>
    <row r="14"><c r="A14" t="s"><v>{si("未查封")}</v></c><c r="B14" t="s"><v>发现但尚未查封</v></c></row>
    <row r="15"><c r="A15" t="s"><v>{si("已执行")}</v></c><c r="B15" t="s"><v>已完成执行划扣</v></c></row>
    <row r="16"><c r="A16" t="s"><v>{si("调查中")}</v></c><c r="B16" t="s"><v>法院正在调查中</v></c></row>
    <row r="17"><c r="A17" t="s"><v>{si("待核实")}</v></c><c r="B17" t="s"><v>线索待进一步核实</v></c></row>
    <row r="19"><c r="A19" t="s"><v>{si("提示：发现财产线索后应尽快向执行法院申请查封保全")}</v></c></row>
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''
    with open(work_dir + "/xl/worksheets/sheet1.xml", "w", encoding="utf-8") as f:
        f.write(sheet1_content)

    # ---- sheet2 (财产线索追踪主表) ----
    # Columns: 序号 | 财产类型 | 财产线索 | 金额/估值 | 发现日期 | 查封状态 | 执行法院 | 备注
    data_rows = ""
    for i in range(1, 16):
        row_num = i + 3
        data_rows += f'''
    <row r="{row_num}">
      <c r="A{row_num}" s="6"><f>ROW()-3</f><v></v></c>
      <c r="B{row_num}" t="s" s="1"><v>{si("银行账户")}</v></c>
      <c r="C{row_num}" s="5"><v></v></c>
      <c r="D{row_num}" s="5"><v>0</v></c>
      <c r="E{row_num}" s="5"><v></v></c>
      <c r="F{row_num}" t="s" s="1"><v>{si("未查封")}</v></c>
      <c r="G{row_num}" s="5"><v></v></c>
      <c r="H{row_num}" s="5"><v></v></c>
    </row>'''

    sheet2_content = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView workbookViewId="0"/>
    <pane ySplit="3" topLeftCell="A4" activePane="bottomLeft" state="frozen"/>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols>
    <col min="1" max="1" width="8" customWidth="1"/>
    <col min="2" max="2" width="14" customWidth="1"/>
    <col min="3" max="3" width="28" customWidth="1"/>
    <col min="4" max="4" width="18" customWidth="1"/>
    <col min="5" max="5" width="14" customWidth="1"/>
    <col min="6" max="6" width="12" customWidth="1"/>
    <col min="7" max="7" width="20" customWidth="1"/>
    <col min="8" max="8" width="20" customWidth="1"/>
  </cols>
  <sheetData>
    <row r="1" ht="26" customHeight="1"><c r="A1" t="s" s="4"><v>{si("被执行财产线索追踪表")}</v></c></row>
    <row r="2" ht="18" customHeight="1"><c r="A2" t="s" s="4"><v>{si("财产线索追踪")}</v></c></row>
    <row r="3">
      <c r="A3" t="s" s="4"><v>{si("序号")}</v></c>
      <c r="B3" t="s" s="4"><v>{si("财产类型")}</v></c>
      <c r="C3" t="s" s="4"><v>{si("财产线索")}</v></c>
      <c r="D3" t="s" s="4"><v>{si("金额/估值")}</v></c>
      <c r="E3" t="s" s="4"><v>{si("发现日期")}</v></c>
      <c r="F3" t="s" s="4"><v>{si("查封状态")}</v></c>
      <c r="G3" t="s" s="4"><v>{si("执行法院")}</v></c>
      <c r="H3" t="s" s="4"><v>{si("备注")}</v></c>
    </row>{data_rows}
    <row r="20">
      <c r="A20" t="s" s="4"><v>合计</v></c>
      <c r="D20" s="6"><f>SUM(D4:D18)</f><v></v></c>
    </row>
  </sheetData>
  <autoFilter ref="A3:H20"/>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''
    with open(work_dir + "/xl/worksheets/sheet2.xml", "w", encoding="utf-8") as f:
        f.write(sheet2_content)

    # ---- sheet3 (财产类型参考) ----
    sheet3_content = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"/></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols>
    <col min="1" max="1" width="20" customWidth="1"/>
    <col min="2" max="2" width="40" customWidth="1"/>
  </cols>
  <sheetData>
    <row r="1" ht="24" customHeight="1"><c r="A1" t="s" s="4"><v>{si("财产类型参考")}</v></c></row>
    <row r="3">
      <c r="A3" t="s" s="4"><v>{si("财产类型")}</v></c>
      <c r="B3" t="s" s="4"><v>{si("说明")}</v></c>
    </row>
    <row r="4">
      <c r="A4" t="s"><v>{si("银行账户")}</v></c>
      <c r="B4" t="s"><v>银行存款，可通过法院查询</v></c>
    </row>
    <row r="5">
      <c r="A5" t="s"><v>{si("房产")}</v></c>
      <c r="B5" t="s"><v>不动产，可通过房管局查询</v></c>
    </row>
    <row r="6">
      <c r="A6" t="s"><v>{si("车辆")}</v></c>
      <c r="B6" t="s"><v>机动车，可通过车管所查询</v></c>
    </row>
    <row r="7">
      <c r="A7" t="s"><v>{si("股票/基金")}</v></c>
      <c r="B7" t="s"><v>证券资产，可通过券商查询</v></c>
    </row>
    <row r="8">
      <c r="A8" t="s"><v>{si("应收账款")}</v></c>
      <c r="B8" t="s"><v>被执行人对第三方的债权</v></c>
    </row>
    <row r="9">
      <c r="A9" t="s"><v>{si("知识产权")}</v></c>
      <c r="B9" t="s"><v>专利、商标、著作权等</v></c>
    </row>
    <row r="10">
      <c r="A10" t="s"><v>{si("其他财产")}</v></c>
      <c r="B10" t="s"><v>其他可供执行的财产</v></c>
    </row>
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''
    with open(work_dir + "/xl/worksheets/sheet3.xml", "w", encoding="utf-8") as f:
        f.write(sheet3_content)

    out_path = os.path.join(OUT_DIR, "被执行财产线索追踪表.xlsx")
    return pack_and_validate(work_dir, out_path)


if __name__ == "__main__":
    import sys
    sys.stdout.reconfigure(encoding='utf-8')

    results = {}

    print("Building Excel 1: 诉讼费用速算表...")
    work1 = "/tmp/legal_work1"
    r1 = build_excel1(work1)
    results["诉讼费用速算表.xlsx"] = r1
    print(f"  {'OK' if r1 else 'FAIL'}")

    print("Building Excel 2: 诉讼时效追踪表...")
    work2 = "/tmp/legal_work2"
    r2 = build_excel2(work2)
    results["诉讼时效追踪表.xlsx"] = r2
    print(f"  {'OK' if r2 else 'FAIL'}")

    print("Building Excel 3: 证据清单工作表...")
    work3 = "/tmp/legal_work3"
    r3 = build_excel3(work3)
    results["证据清单工作表.xlsx"] = r3
    print(f"  {'OK' if r3 else 'FAIL'}")

    print("Building Excel 4: 被执行财产线索追踪表...")
    work4 = "/tmp/legal_work4"
    r4 = build_excel4(work4)
    results["被执行财产线索追踪表.xlsx"] = r4
    print(f"  {'OK' if r4 else 'FAIL'}")

    print("\n=== Summary ===")
    for name, ok in results.items():
        print(f"  {name}: {'OK' if ok else 'FAIL'}")
