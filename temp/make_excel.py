#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Build Excel workbook for 互联网理财平台避坑指南"""
import os

work_dir = 'D:/CC/temp/xlsx_build'
os.makedirs(work_dir + '/xl/worksheets', exist_ok=True)
os.makedirs(work_dir + '/xl/_rels', exist_ok=True)
os.makedirs(work_dir + '/_rels', exist_ok=True)

shared = [
    "F1：平台类型识别卡","A6小卡 | 可打印 | 翻转使用",
    "平台类型","代表","特征","监管","收益率参考","风险等级",
    "银行系理财","券商资管","保险理财","持牌消费金融",
    "反面：无牌平台","危险信号","查询要点","使用说明",
    "第一步：要求对方出示金融牌照，用国家金融监督管理总局官网查询验证",
    "第二步：确认牌照上的机构名称与实际平台运营主体是否一致",
    "第三步：对比收益率，超过8%年化要警惕，超过12%要远离",
    "第四步：确认资金是否流向银行存管账户，不是平台账户",
    "提示：没有牌照的平台，无论宣传多好、背景多强、名人多大，都不要投！",
    "高息诱惑","保本承诺","资金池操作","虚假背书","信息不透明","拉人头模式",
    "F2：五步风险识别检查表","清单式工具卡 | 可打印 | 随身携带",
    "第一步：查资质","检查项","操作","标准答案","查询入口",
    "银保监会：www.cbirc.gov.cn","证监会：www.csrc.gov.cn","基金业协会：www.amac.org.cn",
    "第二步：看收益","风险信号","市场收益率参考","产品类型","合理收益率范围",
    "第三步：验资金","资金验证三问","第四步：核担保","担保识别要点",
    "第五步：审合同","合同必读条款","综合判断","五步得分","综合评级","行动建议",
    "使用口诀","提示：任何一步有疑问，宁可错过，不要冒险。",
    "F3：高风险平台特征卡","六大高风险特征速查卡 | 可打印 | 快速对照",
    "特征一","典型话术","危险等级","本质",
    "特征二","特征三","特征四","特征五","特征六",
    "快速对照检查","高风险平台常见组合","红色警报","橙色警报","自查清单",
    "典型庞氏骗局","收割粉丝","传销资金盘","新型骗局",
    "F4：金融科技产品甄别卡","AI理财/量化交易/加密货币三类产品鉴别要点 | 可打印",
    "第一类：AI理财","正规AI理财特征","伪AI理财特征","鉴别三问",
    "第二类：量化交易","正规量化交易特征","伪量化交易特征",
    "第三类：加密货币","中国境内合法vs违法","常见加密货币骗局","鉴别要点",
    "金融科技产品速查表","核心原则","看不懂的科技 ≠ 安全的投资",
    "F5：防骗三黄金法则卡","三个核心法则的行动指南 | 可打印 | 随身携带",
    "法则一：看不懂的不碰","为什么重要","行动指南","自问清单",
    "法则二：不碰高息诱惑","高息骗局的数学真相","法则三：先查后投","必查清单",
    "查证渠道汇总","三法则速记口诀","自测清单","最终提示",
    "F6：维权路径指引卡","投诉、报警、诉讼的具体步骤和联系方式 | 可打印",
    "第一步：证据保全","必须立即保存的证据","证据保存方法","注意",
    "第二步：判断情况","情况","判断依据","建议行动",
    "第三步：维权路径","路径一：向监管部门投诉","受理范围","投诉渠道","处理时间",
    "路径二：向公安机关报案","推荐报案方式","方式","操作","适用情况","报案材料清单",
    "路径三：民事诉讼","第四步：集体维权","常见问题处理","联系方式速查","重要提醒",
    "F7：我的避坑承诺书","学员填写 | 行动计划表 | 可打印",
    "个人信息","姓名","填写日期","承诺内容","承诺一","承诺二","承诺三",
    "承诺四","承诺五","我的理财现状自评","当前持有的理财产品","投资金额","是否核实过资质",
    "自我风险评估","行动计划","近期行动（1个月内）","中期行动（3个月内）",
    "我的避坑誓言","讲后感言（可选填写）","讲师联系方式","提示",
]

def esc(s):
    return s.replace("&","&amp;").replace("<","&lt;").replace(">","&gt;").replace('"',"&quot;")

# sharedStrings.xml
ss_lines = ['<?xml version="1.0" encoding="UTF-8" standalone="yes"?>']
ss_lines.append('<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="{n}" uniqueCount="{n}">'.format(n=len(shared)))
for s in shared:
    ss_lines.append("  <si><t>{t}</t></si>".format(t=esc(s)))
ss_lines.append("</sst>")
with open(work_dir + "/xl/sharedStrings.xml", "w", encoding="utf-8") as f:
    f.write("\n".join(ss_lines))
print("sharedStrings.xml: {n} strings".format(n=len(shared)))

# workbook.xml
wb = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheets>
    <sheet name="F1_平台类型识别卡" sheetId="1" r:id="rId1"/>
    <sheet name="F2_五步风险识别检查表" sheetId="2" r:id="rId4"/>
    <sheet name="F3_高风险平台特征卡" sheetId="3" r:id="rId5"/>
    <sheet name="F4_金融科技产品甄别卡" sheetId="4" r:id="rId6"/>
    <sheet name="F5_防骗三黄金法则卡" sheetId="5" r:id="rId7"/>
    <sheet name="F6_维权路径指引卡" sheetId="6" r:id="rId8"/>
    <sheet name="F7_我的避坑承诺书" sheetId="7" r:id="rId9"/>
  </sheets>
  <calcPr calcId="0"/>
</workbook>'''
with open(work_dir + "/xl/workbook.xml", "w", encoding="utf-8") as f:
    f.write(wb)
print("workbook.xml written")

# workbook.xml.rels
wbrels = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
  <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml"/>
  <Relationship Id="rId4" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet2.xml"/>
  <Relationship Id="rId5" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet3.xml"/>
  <Relationship Id="rId6" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet4.xml"/>
  <Relationship Id="rId7" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet5.xml"/>
  <Relationship Id="rId8" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet6.xml"/>
  <Relationship Id="rId9" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet7.xml"/>
</Relationships>'''
with open(work_dir + "/xl/_rels/workbook.xml.rels", "w", encoding="utf-8") as f:
    f.write(wbrels)
print("workbook.xml.rels written")

# [Content_Types].xml
ct = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml"  ContentType="application/xml"/>
  <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
  <Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet2.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet3.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet4.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet5.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet6.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet7.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>
  <Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/>
</Types>'''
with open(work_dir + "/[Content_Types].xml", "w", encoding="utf-8") as f:
    f.write(ct)
print("[Content_Types].xml written")

# _rels/.rels
rels = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/>
</Relationships>'''
with open(work_dir + "/_rels/.rels", "w", encoding="utf-8") as f:
    f.write(rels)
print("_rels/.rels written")

# styles.xml
styles = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <numFmts count="5">
    <numFmt numFmtId="164" formatCode="$#,##0;($#,##0);&quot;-&quot;"/>
    <numFmt numFmtId="165" formatCode="0.0%"/>
    <numFmt numFmtId="166" formatCode="0.0x"/>
    <numFmt numFmtId="167" formatCode="#,##0"/>
    <numFmt numFmtId="168" formatCode="@"/>
  </numFmts>
  <fonts count="8">
    <font><sz val="11"/><name val="Calibri"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="000000FF"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="00000000"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="00008000"/></font>
    <font><b/><sz val="11"/><name val="Calibri"/><color rgb="00000000"/></font>
    <font><b/><sz val="14"/><name val="Calibri"/><color rgb="FFFFFFFF"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="00000000"/><i/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="00800000"/></font>
  </fonts>
  <fills count="5">
    <fill><patternFill patternType="none"/></fill>
    <fill><patternFill patternType="gray125"/></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="00FF0000"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="00D9D9D9"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="00FFFF00"/></patternFill></fill>
  </fills>
  <borders count="1"><border><left/><right/><top/><bottom/><diagonal/></border></borders>
  <cellXfs count="16">
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
    <xf numFmtId="0" fontId="4" fillId="3" borderId="0" xfId="0" applyFont="1" applyFill="1"/>
    <xf numFmtId="168" fontId="6" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>
    <xf numFmtId="0" fontId="7" fillId="0" borderId="0" xfId="0" applyFont="1"/>
  </cellXfs>
</styleSheet>'''
with open(work_dir + "/xl/styles.xml", "w", encoding="utf-8") as f:
    f.write(styles)
print("styles.xml written")

# Sheet rows
def mk_sheet(rows_xml):
    return '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"/></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols>
    <col min="1" max="1" width="28" customWidth="1"/>
    <col min="2" max="2" width="32" customWidth="1"/>
    <col min="3" max="3" width="22" customWidth="1"/>
    <col min="4" max="4" width="22" customWidth="1"/>
  </cols>
  <sheetData>
{rows}
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''.format(rows=rows_xml)

# s1: F1 (indices 0-32)
s1 = """
    <row r="1" ht="24" customHeight="1"><c r="A1" t="s" s="12"><v>0</v></c></row>
    <row r="2" ht="16" customHeight="1"><c r="A2" t="s" s="13"><v>1</v></c></row>
    <row r="3"><c r="A3" t="s" s="13"><v>2</v></c><c r="B3" t="s" s="13"><v>3</v></c><c r="C3" t="s" s="13"><v>4</v></c><c r="D3" t="s" s="13"><v>5</v></c></row>
    <row r="4"><c r="A4" t="s" s="0"><v>6</v></c><c r="B4" t="s" s="6"><v>7</v></c><c r="C4" t="s" s="0"><v>8</v></c><c r="D4" t="s" s="0"><v>9</v></c></row>
    <row r="5"><c r="A5" t="s" s="0"><v>10</v></c><c r="B5" t="s" s="6"><v>11</v></c><c r="C5" t="s" s="0"><v>12</v></c><c r="D5" t="s" s="0"><v>13</v></c></row>
    <row r="6"><c r="A6" t="s" s="0"><v>14</v></c><c r="B6" t="s" s="6"><v>15</v></c><c r="C6" t="s" s="0"><v>16</v></c><c r="D6" t="s" s="0"><v>17</v></c></row>
    <row r="7"><c r="A7" t="s" s="0"><v>18</v></c><c r="B7" t="s" s="6"><v>19</v></c><c r="C7" t="s" s="0"><v>20</v></c><c r="D7" t="s" s="0"><v>21</v></c></row>
    <row r="8"><c r="A8" t="s" s="13"><v>22</v></c><c r="B8" t="s" s="13"><v>3</v></c><c r="C8" t="s" s="13"><v>4</v></c><c r="D8" t="s" s="13"><v>5</v></c></row>
    <row r="9"><c r="A9" t="s" s="15"><v>23</v></c><c r="B9" t="s" s="0"><v>24</v></c><c r="C9" t="s" s="0"><v>25</v></c><c r="D9" t="s" s="0"><v>26</v></c></row>
    <row r="10"><c r="A10" t="s" s="13"><v>27</v></c></row>
    <row r="11"><c r="A11" t="s" s="0"><v>28</v></c></row>
    <row r="12"><c r="A12" t="s" s="0"><v>29</v></c></row>
    <row r="13"><c r="A13" t="s" s="0"><v>30</v></c></row>
    <row r="14"><c r="A14" t="s" s="0"><v>31</v></c></row>
    <row r="15"><c r="A15" t="s" s="15"><v>32</v></c></row>"""

# s2: F2 (indices 33-57)
s2 = """
    <row r="1" ht="24" customHeight="1"><c r="A1" t="s" s="12"><v>33</v></c></row>
    <row r="2" ht="16" customHeight="1"><c r="A2" t="s" s="13"><v>34</v></c></row>
    <row r="3"><c r="A3" t="s" s="13"><v>35</v></c><c r="B3" t="s" s="13"><v>36</v></c><c r="C3" t="s" s="13"><v>37</v></c></row>
    <row r="4"><c r="A4" t="s" s="0"><v>38</v></c><c r="B4" t="s" s="0"><v>39</v></c><c r="C4" t="s" s="0"><v>40</v></c></row>
    <row r="5"><c r="A5" t="s" s="0"><v>41</v></c><c r="B5" t="s" s="0"><v>42</v></c><c r="C5" t="s" s="0"><v>43</v></c></row>
    <row r="6"><c r="A6" t="s" s="13"><v>44</v></c></row>
    <row r="7"><c r="A7" t="s" s="6"><v>45</v></c></row>
    <row r="8"><c r="A8" t="s" s="6"><v>46</v></c></row>
    <row r="9"><c r="A9" t="s" s="13"><v>47</v></c></row>
    <row r="10"><c r="A10" t="s" s="0"><v>48</v></c></row>
    <row r="11"><c r="A11" t="s" s="13"><v>49</v></c></row>
    <row r="12"><c r="A12" t="s" s="0"><v>50</v></c></row>
    <row r="13"><c r="A13" t="s" s="0"><v>51</v></c></row>
    <row r="14"><c r="A14" t="s" s="13"><v>52</v></c></row>
    <row r="15"><c r="A15" t="s" s="0"><v>53</v></c></row>
    <row r="16"><c r="A16" t="s" s="0"><v>54</v></c></row>
    <row r="17"><c r="A17" t="s" s="13"><v>55</v></c></row>
    <row r="18"><c r="A18" t="s" s="0"><v>56</v></c></row>
    <row r="19"><c r="A19" t="s" s="15"><v>57</v></c></row>"""

# s3: F3 (indices 58-85)
s3 = """
    <row r="1" ht="24" customHeight="1"><c r="A1" t="s" s="12"><v>58</v></c></row>
    <row r="2" ht="16" customHeight="1"><c r="A2" t="s" s="13"><v>59</v></c></row>
    <row r="3"><c r="A3" t="s" s="13"><v>60</v></c><c r="B3" t="s" s="13"><v>61</v></c><c r="C3" t="s" s="13"><v>62</v></c></row>
    <row r="4"><c r="A4" t="s" s="0"><v>63</v></c><c r="B4" t="s" s="6"><v>64</v></c><c r="C4" t="s" s="0"><v>65</v></c></row>
    <row r="5"><c r="A5" t="s" s="0"><v>66</v></c><c r="B5" t="s" s="6"><v>67</v></c><c r="C5" t="s" s="0"><v>68</v></c></row>
    <row r="6"><c r="A6" t="s" s="0"><v>69</v></c><c r="B6" t="s" s="6"><v>70</v></c><c r="C6" t="s" s="0"><v>71</v></c></row>
    <row r="7"><c r="A7" t="s" s="0"><v>72</v></c><c r="B7" t="s" s="6"><v>73</v></c><c r="C7" t="s" s="0"><v>74</v></c></row>
    <row r="8"><c r="A8" t="s" s="0"><v>75</v></c><c r="B8" t="s" s="6"><v>76</v></c><c r="C8" t="s" s="0"><v>77</v></c></row>
    <row r="9"><c r="A9" t="s" s="0"><v>78</v></c><c r="B9" t="s" s="6"><v>79</v></c><c r="C9" t="s" s="0"><v>80</v></c></row>
    <row r="10"><c r="A10" t="s" s="13"><v>81</v></c></row>
    <row r="11"><c r="A11" t="s" s="0"><v>82</v></c></row>
    <row r="12"><c r="A12" t="s" s="13"><v>83</v></c></row>
    <row r="13"><c r="A13" t="s" s="0"><v>84</v></c></row>
    <row r="14"><c r="A14" t="s" s="15"><v>85</v></c></row>"""

# s4: F4 (indices 86-103)
s4 = """
    <row r="1" ht="24" customHeight="1"><c r="A1" t="s" s="12"><v>86</v></c></row>
    <row r="2" ht="16" customHeight="1"><c r="A2" t="s" s="13"><v>87</v></c></row>
    <row r="3"><c r="A3" t="s" s="13"><v>88</v></c><c r="B3" t="s" s="13"><v>4</v></c></row>
    <row r="4"><c r="A4" t="s" s="0"><v>89</v></c><c r="B4" t="s" s="0"><v>90</v></c></row>
    <row r="5"><c r="A5" t="s" s="0"><v>91</v></c><c r="B5" t="s" s="0"><v>92</v></c></row>
    <row r="6"><c r="A6" t="s" s="13"><v>93</v></c></row>
    <row r="7"><c r="A7" t="s" s="0"><v>94</v></c></row>
    <row r="8"><c r="A8" t="s" s="0"><v>95</v></c></row>
    <row r="9"><c r="A9" t="s" s="13"><v>96</v></c></row>
    <row r="10"><c r="A10" t="s" s="0"><v>97</v></c></row>
    <row r="11"><c r="A11" t="s" s="13"><v>98</v></c></row>
    <row r="12"><c r="A12" t="s" s="0"><v>99</v></c></row>
    <row r="13"><c r="A13" t="s" s="0"><v>100</v></c></row>
    <row r="14"><c r="A14" t="s" s="13"><v>101</v></c></row>
    <row r="15"><c r="A15" t="s" s="0"><v>102</v></c></row>
    <row r="16"><c r="A16" t="s" s="15"><v>103</v></c></row>"""

# s5: F5 (indices 104-120)
s5 = """
    <row r="1" ht="24" customHeight="1"><c r="A1" t="s" s="12"><v>104</v></c></row>
    <row r="2" ht="16" customHeight="1"><c r="A2" t="s" s="13"><v>105</v></c></row>
    <row r="3"><c r="A3" t="s" s="13"><v>106</v></c><c r="B3" t="s" s="13"><v>107</v></c></row>
    <row r="4"><c r="A4" t="s" s="0"><v>108</v></c><c r="B4" t="s" s="0"><v>109</v></c></row>
    <row r="5"><c r="A5" t="s" s="13"><v>110</v></c></row>
    <row r="6"><c r="A6" t="s" s="0"><v>111</v></c></row>
    <row r="7"><c r="A7" t="s" s="13"><v>112</v></c></row>
    <row r="8"><c r="A8" t="s" s="0"><v>113</v></c></row>
    <row r="9"><c r="A9" t="s" s="0"><v>114</v></c></row>
    <row r="10"><c r="A10" t="s" s="13"><v>115</v></c></row>
    <row r="11"><c r="A11" t="s" s="0"><v>116</v></c></row>
    <row r="12"><c r="A12" t="s" s="0"><v>117</v></c></row>
    <row r="13"><c r="A13" t="s" s="13"><v>118</v></c></row>
    <row r="14"><c r="A14" t="s" s="0"><v>119</v></c></row>
    <row r="15"><c r="A15" t="s" s="15"><v>120</v></c></row>"""

# s6: F6 (indices 121-141)
s6 = """
    <row r="1" ht="24" customHeight="1"><c r="A1" t="s" s="12"><v>121</v></c></row>
    <row r="2" ht="16" customHeight="1"><c r="A2" t="s" s="13"><v>122</v></c></row>
    <row r="3"><c r="A3" t="s" s="13"><v>123</v></c><c r="B3" t="s" s="13"><v>124</v></c><c r="C3" t="s" s="13"><v>125</v></c></row>
    <row r="4"><c r="A4" t="s" s="0"><v>126</v></c><c r="B4" t="s" s="0"><v>127</v></c><c r="C4" t="s" s="0"><v>128</v></c></row>
    <row r="5"><c r="A5" t="s" s="0"><v>129</v></c><c r="B5" t="s" s="0"><v>130</v></c><c r="C5" t="s" s="0"><v>131</v></c></row>
    <row r="6"><c r="A6" t="s" s="13"><v>132</v></c></row>
    <row r="7"><c r="A7" t="s" s="0"><v>133</v></c></row>
    <row r="8"><c r="A8" t="s" s="13"><v>134</v></c></row>
    <row r="9"><c r="A9" t="s" s="0"><v>135</v></c></row>
    <row r="10"><c r="A10" t="s" s="13"><v>136</v></c></row>
    <row r="11"><c r="A11" t="s" s="0"><v>137</v></c></row>
    <row r="12"><c r="A12" t="s" s="0"><v>138</v></c></row>
    <row r="13"><c r="A13" t="s" s="13"><v>139</v></c></row>
    <row r="14"><c r="A14" t="s" s="0"><v>140</v></c></row>
    <row r="15"><c r="A15" t="s" s="15"><v>141</v></c></row>"""

# s7: F7 (indices 142-157)
s7 = """
    <row r="1" ht="24" customHeight="1"><c r="A1" t="s" s="12"><v>142</v></c></row>
    <row r="2" ht="16" customHeight="1"><c r="A2" t="s" s="13"><v>143</v></c></row>
    <row r="3"><c r="A3" t="s" s="13"><v>144</v></c><c r="B3" t="s" s="13"><v>145</v></c></row>
    <row r="4"><c r="A4" t="s" s="0"><v>146</v></c><c r="B4" t="s" s="0"><v></v></c></row>
    <row r="5"><c r="A5" t="s" s="13"><v>147</v></c><c r="B5" t="s" s="0"><v></v></c></row>
    <row r="6"><c r="A6" t="s" s="13"><v>148</v></c></row>
    <row r="7"><c r="A7" t="s" s="0"><v>149</v></c></row>
    <row r="8"><c r="A8" t="s" s="0"><v>150</v></c></row>
    <row r="9"><c r="A9" t="s" s="0"><v>151</v></c></row>
    <row r="10"><c r="A10" t="s" s="13"><v>152</v></c></row>
    <row r="11"><c r="A11" t="s" s="0"><v>153</v></c></row>
    <row r="12"><c r="A12" t="s" s="0"><v>154</v></c></row>
    <row r="13"><c r="A13" t="s" s="13"><v>155</v></c></row>
    <row r="14"><c r="A14" t="s" s="0"><v>156</v></c></row>
    <row r="15"><c r="A15" t="s" s="15"><v>157</v></c></row>"""

sheets = [("sheet1.xml", s1), ("sheet2.xml", s2), ("sheet3.xml", s3),
           ("sheet4.xml", s4), ("sheet5.xml", s5), ("sheet6.xml", s6), ("sheet7.xml", s7)]

for fname, rows in sheets:
    path = work_dir + "/xl/worksheets/" + fname
    with open(path, "w", encoding="utf-8") as f:
        f.write(mk_sheet(rows))
    print("Created " + fname)

print("\nAll 7 worksheets done!")
print("Work dir: " + work_dir)
