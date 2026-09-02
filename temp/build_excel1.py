import os
import shutil

base_dir = "D:/CC/temp/build_xlsx"

# ===== 财报分析框架.xlsx =====

# Workbook definition
workbook_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheets>
    <sheet name="快速导航" sheetId="1" r:id="rId1"/>
    <sheet name="重点科目核对清单" sheetId="2" r:id="rId4"/>
    <sheet name="财务比率计算" sheetId="3" r:id="rId5"/>
    <sheet name="异常信号预警" sheetId="4" r:id="rId6"/>
    <sheet name="行业对比模板" sheetId="5" r:id="rId7"/>
  </sheets>
</workbook>'''

workbook_rels = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
  <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml"/>
  <Relationship Id="rId4" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet2.xml"/>
  <Relationship Id="rId5" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet3.xml"/>
  <Relationship Id="rId6" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet4.xml"/>
  <Relationship Id="rId7" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet5.xml"/>
</Relationships>'''

content_types = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
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

# Write base files
with open(f"{base_dir}/xl/workbook.xml", "w", encoding="utf-8") as f:
    f.write(workbook_xml)
with open(f"{base_dir}/xl/_rels/workbook.xml.rels", "w", encoding="utf-8") as f:
    f.write(workbook_rels)
with open(f"{base_dir}/[Content_Types].xml", "w", encoding="utf-8") as f:
    f.write(content_types)

# Empty sharedStrings (using inlineStr instead)
with open(f"{base_dir}/xl/sharedStrings.xml", "w", encoding="utf-8") as f:
    f.write('<?xml version="1.0" encoding="UTF-8" standalone="yes"?><sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="0" uniqueCount="0"></sst>')

print("Base files written")

# ===== SHEET 1: 快速导航 =====
sheet1 = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <sheetViews>
    <sheetView workbookViewId="0">
      <pane ySplit="4" topLeftCell="A5" activePane="bottomLeft" state="frozen"/>
    </sheetView>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="18"/>
  <cols>
    <col min="1" max="1" width="14" customWidth="1"/>
    <col min="2" max="2" width="22" customWidth="1"/>
    <col min="3" max="3" width="35" customWidth="1"/>
    <col min="4" max="4" width="28" customWidth="1"/>
  </cols>
  <sheetData>
    <row r="1" ht="30" customHeight="1">
      <c r="A1" s="2" t="inlineStr"><is><t>财报分析框架</t></is></c>
    </row>
    <row r="2" ht="24" customHeight="1">
      <c r="A2" s="2" t="inlineStr"><is><t>三大报表核心科目速查</t></is></c>
    </row>
    <row r="3" ht="8"/>
    <row r="4" ht="26" customHeight="1">
      <c r="A4" s="8" t="inlineStr"><is><t>报表类型</t></is></c>
      <c r="B4" s="8" t="inlineStr"><is><t>科目类别</t></is></c>
      <c r="C4" s="8" t="inlineStr"><is><t>科目名称</t></is></c>
      <c r="D4" s="8" t="inlineStr"><is><t>说明</t></is></c>
    </row>
'''

data = [
    (5,"资产负债表","流动资产","货币资金","企业持有的现金及银行存款"),
    (6,"","","交易性金融资产","为交易目的持有的股票债券基金"),
    (7,"","","应收账款","销售商品服务应收款项"),
    (8,"","","预付款项","预付供应商款项"),
    (9,"","","存货","库存商品原材料"),
    (10,"","非流动资产","固定资产","房屋设备建筑物"),
    (11,"","","无形资产","专利商标土地使用权"),
    (12,"","","长期股权投资","对子公司联营企业投资"),
    (13,"","流动负债","应付账款","应付供应商款项"),
    (14,"","","短期借款","一年内需偿还的借款"),
    (15,"","非流动负债","长期借款","一年以上借款"),
    (16,"","","应付债券","公开发行的企业债券"),
    (17,"","所有者权益","实收资本","股东投入的资本"),
    (18,"","","未分配利润","累计净利润减已分红"),
    (19,"",""),
    (20,"利润表","营业收入","","销售商品提供服务收入"),
    (21,"","营业成本","","直接生产成本"),
    (22,"","销售费用","","广告促销渠道费用"),
    (23,"","管理费用","","管理人员工资行政开支"),
    (24,"","财务费用","","利息支出汇兑损益"),
    (25,"","投资收益","","投资实现的收益"),
    (26,"","营业利润","","主营业务利润"),
    (27,"","利润总额","","所得税前利润"),
    (28,"","所得税费用","","企业所得税"),
    (29,"","净利润","","归属于股东的净利润"),
    (30,"",""),
    (31,"现金流量表","经营活动现金流","销售商品、提供劳务收到的现金","主营业务现金流入"),
    (32,"","","购买商品、接受劳务支付的现金","采购现金流出"),
    (33,"","","支付给职工以及为职工支付的现金","员工薪酬支出"),
    (34,"","","支付的各项税费","税金支出"),
    (35,"","投资活动现金流","收回投资所收到的现金","收回投资本金"),
    (36,"","","取得投资收益所收到的现金","投资回报"),
    (37,"","","购建固定资产、无形资产和其他长期资产所支付的现金","资本支出"),
    (38,"","","投资支付的现金","对外投资支出"),
    (39,"","筹资活动现金流","吸收投资收到的现金","股权融资"),
    (40,"","","取得借款收到的现金","债务融资"),
    (41,"","","偿还债务支付的现金","还本支出"),
    (42,"","","分配股利、利润或偿付利息支付的现金","分红利息"),
    (43,"","","现金及现金等价物净增加额","期末减期初"),
    (44,"","","期末现金及现金等价物余额","现金储备"),
]

for d in data:
    if len(d) == 1:
        sheet1 += f'    <row r="{d[0]}" ht="8"/>\n'
    else:
        row_num = d[0]
        sheet1 += f'    <row r="{row_num}" ht="20" customHeight="1">\n'
        for col_idx, val in enumerate(d[1:], 1):
            if val:
                col_letter = chr(64 + col_idx)
                sheet1 += f'      <c r="{col_letter}{row_num}" s="6" t="inlineStr"><is><t>{val}</t></is></c>\n'
        sheet1 += '    </row>\n'

sheet1 += '  </sheetData>\n  <autoFilter ref="A4:D44"/>\n</worksheet>'

with open(f"{base_dir}/xl/worksheets/sheet1.xml", "w", encoding="utf-8") as f:
    f.write(sheet1)
print("Sheet 1 done")

# ===== SHEET 2: 重点科目核对清单 =====
sheet2 = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <sheetViews>
    <sheetView workbookViewId="0">
      <pane ySplit="5" topLeftCell="A6" activePane="bottomLeft" state="frozen"/>
    </sheetView>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="18"/>
  <cols>
    <col min="1" max="1" width="5" customWidth="1"/>
    <col min="2" max="2" width="22" customWidth="1"/>
    <col min="3" max="3" width="45" customWidth="1"/>
    <col min="4" max="4" width="10" customWidth="1"/>
    <col min="5" max="5" width="22" customWidth="1"/>
  </cols>
  <sheetData>
    <row r="1" ht="30" customHeight="1">
      <c r="A1" s="2" t="inlineStr"><is><t>重点科目核对清单</t></is></c>
    </row>
    <row r="2" ht="22" customHeight="1">
      <c r="A2" s="2" t="inlineStr"><is><t>核对日期：</t></is></c>
    </row>
    <row r="3" ht="8"/>
    <row r="4" ht="8"/>
    <row r="5" ht="26" customHeight="1">
      <c r="A5" s="8" t="inlineStr"><is><t>编号</t></is></c>
      <c r="B5" s="8" t="inlineStr"><is><t>核对项目</t></is></c>
      <c r="C5" s="8" t="inlineStr"><is><t>核对内容</t></is></c>
      <c r="D5" s="8" t="inlineStr"><is><t>是否异常</t></is></c>
      <c r="E5" s="8" t="inlineStr"><is><t>备注</t></is></c>
    </row>
'''

checklist = [
    ("资产负债表-资产类","货币资金","检查货币资金规模是否与经营规模匹配，注意受限资金"),
    ("","交易性金融资产","关注其构成和变动，是否有操纵利润嫌疑"),
    ("","应收账款","应收账款增速是否超过营业收入增速，账龄结构是否合理"),
    ("","预付款项","预付款项异常增高可能存在关联方占用或虚构利润"),
    ("","存货","存货周转是否正常，是否存在积压或虚增"),
    ("","固定资产","固定资产原值增长是否合理，是否存在过度投资"),
    ("","无形资产","无形资产构成是否合理，摊销政策是否一致"),
    ("","长期股权投资","关注投资标的和投资收益质量"),
    ("资产负债表-负债类","短期借款","短期借款占比过高可能存在资金压力"),
    ("","应付账款","应付账款增速是否与采购规模匹配"),
    ("","长期借款","关注借款期限结构和利率风险"),
    ("","应付债券","关注债券期限和还款安排"),
    ("资产负债表-权益类","实收资本","实收资本变动是否合理"),
    ("","未分配利润","未分配利润是否为负，是否存在巨额亏损"),
    ("利润表核对","营业收入","收入确认政策是否合理，收入增速是否正常"),
    ("","营业成本","成本与收入是否匹配，毛利率是否异常"),
    ("","销售费用","销售费用率是否在合理范围，变动原因是否合理"),
    ("","管理费用","管理费用率是否过高，是否存在浪费"),
    ("","财务费用","财务费用与负债规模是否匹配"),
    ("","投资收益","投资收益的可持续性，是否为经常性收益"),
    ("","营业利润","营业利润与营业收入比例是否合理"),
    ("","净利润","净利润是否为正，是否存在大幅波动"),
    ("现金流量表核对","经营活动现金流","经营活动现金流是否为正，是否与净利润匹配"),
    ("","销售商品收到的现金","收到的现金与收入比例是否正常"),
    ("","购买商品支付的现金","支付的现金与成本比例是否正常"),
    ("","支付给职工的现金","支付的现金与员工规模是否匹配"),
    ("","支付的各项税费","税费支出与利润表税费用是否匹配"),
    ("","投资活动现金流","投资活动现金流反映公司扩张或收缩战略"),
    ("","购建固定资产支付的现金","资本支出是否合理，是否存在过度投资"),
    ("","筹资活动现金流","筹资活动反映公司融资策略"),
    ("","分配股利支付的现金","分红政策是否可持续"),
]

for i, (cat, name, content) in enumerate(checklist, 1):
    row_num = i + 5
    sheet2 += f'    <row r="{row_num}" ht="22" customHeight="1">\n'
    sheet2 += f'      <c r="A{row_num}" s="5" t="inlineStr"><is><t>{i}</t></is></c>\n'
    sheet2 += f'      <c r="B{row_num}" s="6" t="inlineStr"><is><t>{cat}</t></is></c>\n'
    sheet2 += f'      <c r="C{row_num}" s="6" t="inlineStr"><is><t>{name}</t></is></c>\n'
    sheet2 += f'      <c r="D{row_num}" s="6" t="inlineStr"><is><t>{content}</t></is></c>\n'
    sheet2 += f'      <c r="D{row_num}" s="6"/>\n'
    sheet2 += f'      <c r="E{row_num}" s="6"/>\n'
    sheet2 += '    </row>\n'

sheet2 += '  </sheetData>\n  <autoFilter ref="A5:E36"/>\n</worksheet>'

with open(f"{base_dir}/xl/worksheets/sheet2.xml", "w", encoding="utf-8") as f:
    f.write(sheet2)
print("Sheet 2 done")

# ===== SHEET 3: 财务比率计算 =====
sheet3 = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <sheetViews>
    <sheetView workbookViewId="0">
      <pane ySplit="5" topLeftCell="A6" activePane="bottomLeft" state="frozen"/>
    </sheetView>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="18"/>
  <cols>
    <col min="1" max="1" width="16" customWidth="1"/>
    <col min="2" max="2" width="20" customWidth="1"/>
    <col min="3" max="3" width="38" customWidth="1"/>
    <col min="4" max="4" width="38" customWidth="1"/>
    <col min="5" max="5" width="18" customWidth="1"/>
  </cols>
  <sheetData>
    <row r="1" ht="30" customHeight="1">
      <c r="A1" s="2" t="inlineStr"><is><t>财务比率计算</t></is></c>
    </row>
    <row r="2" ht="22" customHeight="1">
      <c r="A2" s="2" t="inlineStr"><is><t>填入数据后自动计算各项比率</t></is></c>
    </row>
    <row r="3" ht="8"/>
    <row r="4" ht="8"/>
    <row r="5" ht="26" customHeight="1">
      <c r="A5" s="8" t="inlineStr"><is><t>比率类型</t></is></c>
      <c r="B5" s="8" t="inlineStr"><is><t>比率名称</t></is></c>
      <c r="C5" s="8" t="inlineStr"><is><t>计算公式</t></is></c>
      <c r="D5" s="8" t="inlineStr"><is><t>说明</t></is></c>
      <c r="E5" s="8" t="inlineStr"><is><t>参考值</t></is></c>
    </row>
    <row r="6" ht="20" customHeight="1">
      <c r="A6" s="9" t="inlineStr"><is><t>盈利能力比率</t></is></c>
      <c r="B6" s="6" t="inlineStr"><is><t>毛利率</t></is></c>
      <c r="C6" s="6" t="inlineStr"><is><t>(营业收入-营业成本)/营业收入</t></is></c>
      <c r="D6" s="6" t="inlineStr"><is><t>反映产品或服务的基础盈利能力</t></is></c>
      <c r="E6" s="6" t="inlineStr"><is><t>30%-60%</t></is></c>
    </row>
    <row r="7" ht="20" customHeight="1">
      <c r="A7" s="6"/>
      <c r="B7" s="6" t="inlineStr"><is><t>净利率</t></is></c>
      <c r="C7" s="6" t="inlineStr"><is><t>净利润/营业收入</t></is></c>
      <c r="D7" s="6" t="inlineStr"><is><t>反映最终获利能力</t></is></c>
      <c r="E7" s="6" t="inlineStr"><is><t>5%-20%</t></is></c>
    </row>
    <row r="8" ht="20" customHeight="1">
      <c r="A8" s="6"/>
      <c r="B8" s="6" t="inlineStr"><is><t>净资产收益率(ROE)</t></is></c>
      <c r="C8" s="6" t="inlineStr"><is><t>净利润/平均所有者权益</t></is></c>
      <c r="D8" s="6" t="inlineStr"><is><t>反映股东权益的回报水平</t></is></c>
      <c r="E8" s="6" t="inlineStr"><is><t>10%-20%</t></is></c>
    </row>
    <row r="9" ht="20" customHeight="1">
      <c r="A9" s="6"/>
      <c r="B9" s="6" t="inlineStr"><is><t>总资产收益率(ROA)</t></is></c>
      <c r="C9" s="6" t="inlineStr"><is><t>净利润/平均总资产</t></is></c>
      <c r="D9" s="6" t="inlineStr"><is><t>反映企业整体资产的获利能力</t></is></c>
      <c r="E9" s="6" t="inlineStr"><is><t>5%-10%</t></is></c>
    </row>
    <row r="10" ht="8"/>
    <row r="11" ht="20" customHeight="1">
      <c r="A11" s="10" t="inlineStr"><is><t>偿债能力比率</t></is></c>
      <c r="B11" s="6" t="inlineStr"><is><t>流动比率</t></is></c>
      <c r="C11" s="6" t="inlineStr"><is><t>流动资产/流动负债</t></is></c>
      <c r="D11" s="6" t="inlineStr"><is><t>反映短期偿债能力</t></is></c>
      <c r="E11" s="6" t="inlineStr"><is><t>1.5-2.0</t></is></c>
    </row>
    <row r="12" ht="20" customHeight="1">
      <c r="A12" s="6"/>
      <c r="B12" s="6" t="inlineStr"><is><t>速动比率</t></is></c>
      <c r="C12" s="6" t="inlineStr"><is><t>(流动资产-存货)/流动负债</t></is></c>
      <c r="D12" s="6" t="inlineStr"><is><t>剔除存货后的短期偿债能力</t></is></c>
      <c r="E12" s="6" t="inlineStr"><is><t>1.0-1.5</t></is></c>
    </row>
    <row r="13" ht="20" customHeight="1">
      <c r="A13" s="6"/>
      <c r="B13" s="6" t="inlineStr"><is><t>资产负债率</t></is></c>
      <c r="C13" s="6" t="inlineStr"><is><t>负债总额/资产总额</t></is></c>
      <c r="D13" s="6" t="inlineStr"><is><t>反映总体负债水平</t></is></c>
      <c r="E13" s="6" t="inlineStr"><is><t>40%-60%</t></is></c>
    </row>
    <row r="14" ht="8"/>
    <row r="15" ht="20" customHeight="1">
      <c r="A15" s="9" t="inlineStr"><is><t>运营能力比率</t></is></c>
      <c r="B15" s="6" t="inlineStr"><is><t>存货周转率</t></is></c>
      <c r="C15" s="6" t="inlineStr"><is><t>营业成本/平均存货</t></is></c>
      <c r="D15" s="6" t="inlineStr"><is><t>反映存货周转速度</t></is></c>
      <c r="E15" s="6" t="inlineStr"><is><t>4-8次</t></is></c>
    </row>
    <row r="16" ht="20" customHeight="1">
      <c r="A16" s="6"/>
      <c r="B16" s="6" t="inlineStr"><is><t>应收账款周转率</t></is></c>
      <c r="C16" s="6" t="inlineStr"><is><t>营业收入/平均应收账款</t></is></c>
      <c r="D16" s="6" t="inlineStr"><is><t>反映应收账款周转速度</t></is></c>
      <c r="E16" s="6" t="inlineStr"><is><t>6-12次</t></is></c>
    </row>
    <row r="17" ht="20" customHeight="1">
      <c r="A17" s="6"/>
      <c r="B17" s="6" t="inlineStr"><is><t>总资产周转率</t></is></c>
      <c r="C17" s="6" t="inlineStr"><is><t>营业收入/平均总资产</t></is></c>
      <c r="D17" s="6" t="inlineStr"><is><t>反映资产使用效率</t></is></c>
      <c r="E17" s="6" t="inlineStr"><is><t>0.5-2.0次</t></is></c>
    </row>
  </sheetData>
</worksheet>'''

with open(f"{base_dir}/xl/worksheets/sheet3.xml", "w", encoding="utf-8") as f:
    f.write(sheet3)
print("Sheet 3 done")

# ===== SHEET 4: 异常信号预警 =====
sheet4 = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <sheetViews>
    <sheetView workbookViewId="0">
      <pane ySplit="5" topLeftCell="A6" activePane="bottomLeft" state="frozen"/>
    </sheetView>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="18"/>
  <cols>
    <col min="1" max="1" width="16" customWidth="1"/>
    <col min="2" max="2" width="22" customWidth="1"/>
    <col min="3" max="3" width="32" customWidth="1"/>
    <col min="4" max="4" width="35" customWidth="1"/>
    <col min="5" max="5" width="35" customWidth="1"/>
  </cols>
  <sheetData>
    <row r="1" ht="30" customHeight="1">
      <c r="A1" s="2" t="inlineStr"><is><t>异常信号预警</t></is></c>
    </row>
    <row r="2" ht="22" customHeight="1">
      <c r="A2" s="2" t="inlineStr"><is><t>发现这些信号需进一步深入分析</t></is></c>
    </row>
    <row r="3" ht="8"/>
    <row r="4" ht="8"/>
    <row r="5" ht="26" customHeight="1">
      <c r="A5" s="8" t="inlineStr"><is><t>预警类型</t></is></c>
      <c r="B5" s="8" t="inlineStr"><is><t>预警指标</t></is></c>
      <c r="C5" s="8" t="inlineStr"><is><t>判断标准</t></is></c>
      <c r="D5" s="8" t="inlineStr"><is><t>可能原因</t></is></c>
      <c r="E5" s="8" t="inlineStr"><is><t>关注事项</t></is></c>
    </row>
    <row r="6" ht="28" customHeight="1">
      <c r="A6" s="6" t="inlineStr"><is><t>货币资金异常</t></is></c>
      <c r="B6" s="6" t="inlineStr"><is><t>货币资金/总资产</t></is></c>
      <c r="C6" s="6" t="inlineStr"><is><t>占比低于5%或高于50%</t></is></c>
      <c r="D6" s="6" t="inlineStr"><is><t>资金闲置或资金链紧张</t></is></c>
      <c r="E6" s="6" t="inlineStr"><is><t>关注资金使用效率和受限情况</t></is></c>
    </row>
    <row r="7" ht="28" customHeight="1">
      <c r="A7" s="6" t="inlineStr"><is><t>应收账款过大</t></is></c>
      <c r="B7" s="6" t="inlineStr"><is><t>应收账款/营业收入</t></is></c>
      <c r="C7" s="6" t="inlineStr"><is><t>占比超过30%</t></is></c>
      <c r="D7" s="6" t="inlineStr"><is><t>放宽信用政策或虚构收入</t></is></c>
      <c r="E7" s="6" t="inlineStr"><is><t>检查应收账款账龄和客户结构</t></is></c>
    </row>
    <row r="8" ht="28" customHeight="1">
      <c r="A8" s="6" t="inlineStr"><is><t>存货异常增长</t></is></c>
      <c r="B8" s="6" t="inlineStr"><is><t>存货增长率-收入增长率</t></is></c>
      <c r="C8" s="6" t="inlineStr"><is><t>连续2年差值超过20%</t></is></c>
      <c r="D8" s="6" t="inlineStr"><is><t>产品滞销或虚构存货</t></is></c>
      <c r="E8" s="6" t="inlineStr"><is><t>检查存货周转和跌价准备</t></is></c>
    </row>
    <row r="9" ht="28" customHeight="1">
      <c r="A9" s="6" t="inlineStr"><is><t>关联交易异常</t></is></c>
      <c r="B9" s="6" t="inlineStr"><is><t>关联交易占比</t></is></c>
      <c r="C9" s="6" t="inlineStr"><is><t>占比超过20%且呈上升趋势</t></is></c>
      <c r="D9" s="6" t="inlineStr"><is><t>利益输送或利润操纵</t></is></c>
      <c r="E9" s="6" t="inlineStr"><is><t>核查交易价格公允性</t></is></c>
    </row>
    <row r="10" ht="28" customHeight="1">
      <c r="A10" s="6" t="inlineStr"><is><t>利润与现金流背离</t></is></c>
      <c r="B10" s="6" t="inlineStr"><is><t>经营活动现金流/净利润</t></is></c>
      <c r="C10" s="6" t="inlineStr"><is><t>连续3年小于1</t></is></c>
      <c r="D10" s="6" t="inlineStr"><is><t>利润质量差，可能虚增利润</t></is></c>
      <c r="E10" s="6" t="inlineStr"><is><t>检查收现比和应收应付变动</t></is></c>
    </row>
  </sheetData>
  <autoFilter ref="A5:E10"/>
</worksheet>'''

with open(f"{base_dir}/xl/worksheets/sheet4.xml", "w", encoding="utf-8") as f:
    f.write(sheet4)
print("Sheet 4 done")

# ===== SHEET 5: 行业对比模板 =====
sheet5 = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <sheetViews>
    <sheetView workbookViewId="0">
      <pane ySplit="7" topLeftCell="A8" activePane="bottomLeft" state="frozen"/>
    </sheetView>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="18"/>
  <cols>
    <col min="1" max="1" width="16" customWidth="1"/>
    <col min="2" max="2" width="14" customWidth="1"/>
    <col min="3" max="3" width="14" customWidth="1"/>
    <col min="4" max="4" width="14" customWidth="1"/>
    <col min="5" max="5" width="14" customWidth="1"/>
    <col min="6" max="6" width="14" customWidth="1"/>
    <col min="7" max="7" width="14" customWidth="1"/>
  </cols>
  <sheetData>
    <row r="1" ht="30" customHeight="1">
      <c r="A1" s="2" t="inlineStr"><is><t>行业对比模板</t></is></c>
    </row>
    <row r="2" ht="22" customHeight="1">
      <c r="A2" s="6" t="inlineStr"><is><t>输入同业公司数据，自动计算行业平均值</t></is></c>
    </row>
    <row r="3" ht="8"/>
    <row r="4" ht="22" customHeight="1">
      <c r="A4" s="6" t="inlineStr"><is><t>公司名称</t></is></c>
      <c r="B4" s="5"/>
      <c r="C4" s="5"/>
      <c r="D4" s="5"/>
      <c r="E4" s="5"/>
      <c r="F4" s="5"/>
    </row>
    <row r="5" ht="8"/>
    <row r="6" ht="22" customHeight="1">
      <c r="A6" s="8" t="inlineStr"><is><t>指标类别</t></is></c>
      <c r="B6" s="8" t="inlineStr"><is><t>指标名称</t></is></c>
      <c r="C6" s="8" t="inlineStr"><is><t>公司A</t></is></c>
      <c r="D6" s="8" t="inlineStr"><is><t>公司B</t></is></c>
      <c r="E6" s="8" t="inlineStr"><is><t>公司C</t></is></c>
      <c r="F6" s="8" t="inlineStr"><is><t>公司D</t></is></c>
      <c r="G6" s="8" t="inlineStr"><is><t>行业平均</t></is></c>
    </row>
    <row r="7" ht="8"/>
    <row r="8" ht="20" customHeight="1">
      <c r="A8" s="9" t="inlineStr"><is><t>盈利能力</t></is></c>
    </row>
    <row r="9" ht="20" customHeight="1">
      <c r="A9" s="6"/>
      <c r="B9" s="6" t="inlineStr"><is><t>毛利率</t></is></c>
      <c r="C9" s="5"/>
      <c r="D9" s="5"/>
      <c r="E9" s="5"/>
      <c r="F9" s="5"/>
      <c r="G9" s="6"><f>IFERROR(AVERAGE(C9:F9),0)</f><v></v></c>
    </row>
    <row r="10" ht="20" customHeight="1">
      <c r="A10" s="6"/>
      <c r="B10" s="6" t="inlineStr"><is><t>净利率</t></is></c>
      <c r="C10" s="5"/>
      <c r="D10" s="5"/>
      <c r="E10" s="5"/>
      <c r="F10" s="5"/>
      <c r="G10" s="6"><f>IFERROR(AVERAGE(C10:F10),0)</f><v></v></c>
    </row>
    <row r="11" ht="20" customHeight="1">
      <c r="A11" s="6"/>
      <c r="B11" s="6" t="inlineStr"><is><t>ROE</t></is></c>
      <c r="C11" s="5"/>
      <c r="D11" s="5"/>
      <c r="E11" s="5"/>
      <c r="F11" s="5"/>
      <c r="G11" s="6"><f>IFERROR(AVERAGE(C11:F11),0)</f><v></v></c>
    </row>
    <row r="12" ht="20" customHeight="1">
      <c r="A12" s="6"/>
      <c r="B12" s="6" t="inlineStr"><is><t>ROA</t></is></c>
      <c r="C12" s="5"/>
      <c r="D12" s="5"/>
      <c r="E12" s="5"/>
      <c r="F12" s="5"/>
      <c r="G12" s="6"><f>IFERROR(AVERAGE(C12:F12),0)</f><v></v></c>
    </row>
    <row r="13" ht="8"/>
    <row r="14" ht="20" customHeight="1">
      <c r="A14" s="9" t="inlineStr"><is><t>偿债能力</t></is></c>
    </row>
    <row r="15" ht="20" customHeight="1">
      <c r="A15" s="6"/>
      <c r="B15" s="6" t="inlineStr"><is><t>流动比率</t></is></c>
      <c r="C15" s="5"/>
      <c r="D15" s="5"/>
      <c r="E15" s="5"/>
      <c r="F15" s="5"/>
      <c r="G15" s="6"><f>IFERROR(AVERAGE(C15:F15),0)</f><v></v></c>
    </row>
    <row r="16" ht="20" customHeight="1">
      <c r="A16" s="6"/>
      <c r="B16" s="6" t="inlineStr"><is><t>速动比率</t></is></c>
      <c r="C16" s="5"/>
      <c r="D16" s="5"/>
      <c r="E16" s="5"/>
      <c r="F16" s="5"/>
      <c r="G16" s="6"><f>IFERROR(AVERAGE(C16:F16),0)</f><v></v></c>
    </row>
    <row r="17" ht="20" customHeight="1">
      <c r="A17" s="6"/>
      <c r="B17" s="6" t="inlineStr"><is><t>资产负债率</t></is></c>
      <c r="C17" s="5"/>
      <c r="D17" s="5"/>
      <c r="E17" s="5"/>
      <c r="F17" s="5"/>
      <c r="G17" s="6"><f>IFERROR(AVERAGE(C17:F17),0)</f><v></v></c>
    </row>
    <row r="18" ht="8"/>
    <row r="19" ht="20" customHeight="1">
      <c r="A19" s="9" t="inlineStr"><is><t>运营能力</t></is></c>
    </row>
    <row r="20" ht="20" customHeight="1">
      <c r="A20" s="6"/>
      <c r="B20" s="6" t="inlineStr"><is><t>存货周转率</t></is></c>
      <c r="C20" s="5"/>
      <c r="D20" s="5"/>
      <c r="E20" s="5"/>
      <c r="F20" s="5"/>
      <c r="G20" s="6"><f>IFERROR(AVERAGE(C20:F20),0)</f><v></v></c>
    </row>
    <row r="21" ht="20" customHeight="1">
      <c r="A21" s="6"/>
      <c r="B21" s="6" t="inlineStr"><is><t>应收账款周转率</t></is></c>
      <c r="C21" s="5"/>
      <c r="D21" s="5"/>
      <c r="E21" s="5"/>
      <c r="F21" s="5"/>
      <c r="G21" s="6"><f>IFERROR(AVERAGE(C21:F21),0)</f><v></v></c>
    </row>
    <row r="22" ht="20" customHeight="1">
      <c r="A22" s="6"/>
      <c r="B22" s="6" t="inlineStr"><is><t>总资产周转率</t></is></c>
      <c r="C22" s="5"/>
      <c r="D22" s="5"/>
      <c r="E22" s="5"/>
      <c r="F22" s="5"/>
      <c r="G22" s="6"><f>IFERROR(AVERAGE(C22:F22),0)</f><v></v></c>
    </row>
  </sheetData>
  <autoFilter ref="A6:G22"/>
</worksheet>'''

with open(f"{base_dir}/xl/worksheets/sheet5.xml", "w", encoding="utf-8") as f:
    f.write(sheet5)
print("Sheet 5 done")

print("All sheets built for 财报分析框架.xlsx")
