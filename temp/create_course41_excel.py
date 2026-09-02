#!/usr/bin/env python3
"""创建课程41工具表单Excel文件"""

import os
import shutil
from pathlib import Path

SKILL_DIR = r"C:\Users\Administrator\.claude\skills\Excel表格处理"
TEMPLATE_DIR = os.path.join(SKILL_DIR, "templates", "minimal_xlsx")
OUTPUT_DIR = r"D:\新课开发\管理学\41-组织内创业与创新孵化\工具表单"

def copy_template():
    """复制模板到工作目录"""
    work_dir = r"D:\CC\temp\xlsx_work"
    if os.path.exists(work_dir):
        shutil.rmtree(work_dir)
    shutil.copytree(TEMPLATE_DIR, work_dir)
    return work_dir

def build_shared_strings(strings):
    """构建sharedStrings.xml"""
    lines = ['<?xml version="1.0" encoding="UTF-8" standalone="yes"?>']
    lines.append(f'<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="{len(strings)}" uniqueCount="{len(strings)}">')
    for s in strings:
        escaped = s.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;')
        lines.append(f'  <si><t>{escaped}</t></si>')
    lines.append('</sst>')
    return '\n'.join(lines)

def pack_xlsx(work_dir, output_path):
    """打包xlsx文件"""
    import subprocess
    result = subprocess.run(
        ['python3', os.path.join(SKILL_DIR, 'scripts', 'xlsx_pack.py'), work_dir, output_path],
        capture_output=True, text=True
    )
    if result.returncode != 0:
        print(f"Pack error: {result.stderr}")
    return result.returncode == 0

def create_01_dual_org_checklist():
    """01_双元组织自检表"""
    work_dir = copy_template()

    strings = [
        "双元组织自检表", "评估维度", "评估问题", "评分（1-5）", "得分", "权重", "加权得分",
        "战略一致性", "组织是否有明确的探索性战略与利用性战略并存？", "探索与利用战略是否有定期审视和调整机制？",
        "双元战略是否与公司总体战略保持一致？", "资源配置是否体现双元战略意图？", "战略执行是否有跨部门协调机制？",
        "结构设计", "组织结构是否支持探索与利用活动的并行开展？", "是否设置了专门的创新/创业团队？",
        "是否存在正式的内部创业机制？", "组织是否有灵活的资源调配能力？", "边界跨越机制是否有效运作？",
        "资源配置", "创新项目是否有专项预算支持？", "核心业务与创新业务的资源分配比例是否合理？",
        "是否有跨部门的资源共享机制？", "资源配置决策是否有清晰的优先级标准？", "资源配置是否具备动态调整能力？",
        "考核机制", "是否建立了差异化的绩效考核体系？", "探索性业务是否有容错机制？",
        "创新成果是否有独立的激励措施？", "考核周期是否适配不同业务特性？", "是否平衡短期绩效与长期创新？",
        "文化土壤", "组织是否鼓励尝试和失败学习？", "员工是否有心理安全感敢于提出新想法？",
        "跨部门协作文化是否成熟？", "是否容忍"良性失败"并从中学习？", "创新文化是否有领导层的示范支持？",
        "领导力", "领导是否具备双元思维能力？", "高管是否亲自参与创新活动？",
        "领导是否在探索与利用间保持平衡？", "管理层是否支持突破性创新？", "领导是否赋能团队自主决策？",
        "评分标准", "5分=完全符合", "4分=基本符合", "3分=部分符合", "2分=较少符合", "1分=完全不符合",
        "改进建议", "战略层面：", "结构层面：", "资源层面：", "考核层面：", "文化层面：", "领导力层面：",
        "总分", "评价等级", "优秀（90分以上）", "良好（75-89分）", "合格（60-74分）", "需改进（60分以下）"
    ]

    with open(os.path.join(work_dir, 'xl', 'sharedStrings.xml'), 'w', encoding='utf-8') as f:
        f.write(build_shared_strings(strings))

    # 修改workbook.xml
    workbook_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheets>
    <sheet name="双元组织自检表" sheetId="1" r:id="rId1"/>
  </sheets>
  <calcPr calcId="0"/>
</workbook>'''
    with open(os.path.join(work_dir, 'xl', 'workbook.xml'), 'w', encoding='utf-8') as f:
        f.write(workbook_xml)

    # 创建sheet1.xml
    sheet_data = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"/></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols>
    <col min="1" max="1" width="18" customWidth="1"/>
    <col min="2" max="2" width="45" customWidth="1"/>
    <col min="3" max="3" width="12" customWidth="1"/>
    <col min="4" max="4" width="10" customWidth="1"/>
    <col min="5" max="5" width="10" customWidth="1"/>
    <col min="6" max="6" width="12" customWidth="1"/>
  </cols>
  <sheetData>
    <row r="1" ht="22" customHeight="1">
      <c r="A1" t="s" s="4"><v>0</v></c>
      <c r="B1" t="s" s="4"><v>1</v></c>
      <c r="C1" t="s" s="4"><v>2</v></c>
      <c r="D1" t="s" s="4"><v>3</v></c>
      <c r="E1" t="s" s="4"><v>4</v></c>
      <c r="F1" t="s" s="4"><v>5</v></c>
    </row>
    <row r="2" ht="15"><c r="A2" t="s" s="4"><v>1</v></c></row>
    <row r="3"><c r="A3" t="s" s="1"><v>7</v></c><c r="B3" t="s" s="0"><v>8</v></c><c r="C3" t="s" s="0"><v>9</v></c><c r="D3" t="s" s="0"><v>10</v></c><c r="E3" t="s" s="0"><v>11</v></c><c r="F3" s="6"><f>D3*E3</f><v></v></c></row>
    <row r="4"><c r="A4" t="s" s="1"><v>7</v></c><c r="B4" t="s" s="0"><v>12</v></c><c r="C4" t="s" s="0"><v>13</v></c><c r="D4" t="s" s="0"><v>14</v></c><c r="E4" t="s" s="0"><v>15</v></c><c r="F4" s="6"><f>D4*E4</f><v></v></c></row>
    <row r="5"><c r="A5" t="s" s="1"><v>7</v></c><c r="B5" t="s" s="0"><v>16</v></c><c r="C5" t="s" s="0"><v>17</v></c><c r="D5" t="s" s="0"><v>18</v></c><c r="E5" t="s" s="0"><v>19</v></c><c r="F5" s="6"><f>D5*E5</f><v></v></c></row>
    <row r="6"><c r="A6" t="s" s="1"><v>7</v></c><c r="B6" t="s" s="0"><v>20</v></c><c r="C6" t="s" s="0"><v>21</v></c><c r="D6" t="s" s="0"><v>22</v></c><c r="E6" t="s" s="0"><v>23</v></c><c r="F6" s="6"><f>D6*E6</f><v></v></c></row>
    <row r="7"><c r="A7" t="s" s="1"><v>7</v></c><c r="B7" t="s" s="0"><v>24</v></c><c r="C7" t="s" s="0"><v>25</v></c><c r="D7" t="s" s="0"><v>26</v></c><c r="E7" t="s" s="0"><v>27</v></c><c r="F7" s="6"><f>D7*E7</f><v></v></c></row>
    <row r="8"><c r="A8" t="s" s="1"><v>28</v></c><c r="B8" t="s" s="0"><v>29</v></c><c r="C8" t="s" s="0"><v>30</v></c><c r="D8" t="s" s="0"><v>31</v></c><c r="E8" t="s" s="0"><v>32</v></c><c r="F8" s="6"><f>D8*E8</f><v></v></c></row>
    <row r="9"><c r="A9" t="s" s="1"><v>28</v></c><c r="B9" t="s" s="0"><v>33</v></c><c r="C9" t="s" s="0"><v>34</v></c><c r="D9" t="s" s="0"><v>35</v></c><c r="E9" t="s" s="0"><v>36</v></c><c r="F9" s="6"><f>D9*E9</f><v></v></c></row>
    <row r="10"><c r="A10" t="s" s="1"><v>28</v></c><c r="B10" t="s" s="0"><v>37</v></c><c r="C10" t="s" s="0"><v>38</v></c><c r="D10" t="s" s="0"><v>39</v></c><c r="E10" t="s" s="0"><v>40</v></c><c r="F10" s="6"><f>D10*E10</f><v></v></c></row>
    <row r="11"><c r="A11" t="s" s="1"><v>28</v></c><c r="B11" t="s" s="0"><v>41</v></c><c r="C11" t="s" s="0"><v>42</v></c><c r="D11" t="s" s="0"><v>43</v></c><c r="E11" t="s" s="0"><v>44</v></c><c r="F11" s="6"><f>D11*E11</f><v></v></c></row>
    <row r="12"><c r="A12" t="s" s="1"><v>28</v></c><c r="B12" t="s" s="0"><v>45</v></c><c r="C12" t="s" s="0"><v>46</v></c><c r="D12" t="s" s="0"><v>47</v></c><c r="E12" t="s" s="0"><v>48</v></c><c r="F12" s="6"><f>D12*E12</f><v></v></c></row>
    <row r="13"><c r="A13" t="s" s="1"><v>49</v></c><c r="B13" t="s" s="0"><v>50</v></c><c r="C13" t="s" s="0"><v>51</v></c><c r="D13" t="s" s="0"><v>52</v></c><c r="E13" t="s" s="0"><v>53</v></c><c r="F13" s="6"><f>D13*E13</f><v></v></c></row>
    <row r="14"><c r="A14" t="s" s="1"><v>49</v></c><c r="B14" t="s" s="0"><v>54</v></c><c r="C14" t="s" s="0"><v>55</v></c><c r="D14" t="s" s="0"><v>56</v></c><c r="E14" t="s" s="0"><v>57</v></c><c r="F14" s="6"><f>D14*E14</f><v></v></c></row>
    <row r="15"><c r="A15" t="s" s="1"><v>49</v></c><c r="B15" t="s" s="0"><v>58</v></c><c r="C15" t="s" s="0"><v>59</v></c><c r="D15" t="s" s="0"><v>60</v></c><c r="E15" t="s" s="0"><v>61</v></c><c r="F15" s="6"><f>D15*E15</f><v></v></c></row>
    <row r="16"><c r="A16" t="s" s="1"><v>49</v></c><c r="B16" t="s" s="0"><v>62</v></c><c r="C16" t="s" s="0"><v>63</v></c><c r="D16" t="s" s="0"><v>64</v></c><c r="E16" t="s" s="0"><v>65</v></c><c r="F16" s="6"><f>D16*E16</f><v></v></c></row>
    <row r="17"><c r="A17" t="s" s="1"><v>49</v></c><c r="B17" t="s" s="0"><v>66</v></c><c r="C17" t="s" s="0"><v>67</v></c><c r="D17" t="s" s="0"><v>68</v></c><c r="E17" t="s" s="0"><v>69</v></c><c r="F17" s="6"><f>D17*E17</f><v></v></c></row>
    <row r="18"><c r="A18" t="s" s="1"><v>70</v></c><c r="B18" t="s" s="0"><v>71</v></c><c r="C18" t="s" s="0"><v>72</v></c><c r="D18" t="s" s="0"><v>73</v></c><c r="E18" t="s" s="0"><v>74</v></c><c r="F18" s="6"><f>D18*E18</f><v></v></c></row>
    <row r="19"><c r="A19" t="s" s="1"><v>70</v></c><c r="B19" t="s" s="0"><v>75</v></c><c r="C19" t="s" s="0"><v>76</v></c><c r="D19" t="s" s="0"><v>77</v></c><c r="E19" t="s" s="0"><v>78</v></c><c r="F19" s="6"><f>D19*E19</f><v></v></c></row>
    <row r="20"><c r="A20" t="s" s="1"><v>70</v></c><c r="B20" t="s" s="0"><v>79</v></c><c r="C20" t="s" s="0"><v>80</v></c><c r="D20" t="s" s="0"><v>81</v></c><c r="E20" t="s" s="0"><v>82</v></c><c r="F20" s="6"><f>D20*E20</f><v></v></c></row>
    <row r="21"><c r="A21" t="s" s="1"><v>70</v></c><c r="B21" t="s" s="0"><v>83</v></c><c r="C21" t="s" s="0"><v>84</v></c><c r="D21" t="s" s="0"><v>85</v></c><c r="E21" t="s" s="0"><v>86</v></c><c r="F21" s="6"><f>D21*E21</f><v></v></c></row>
    <row r="22"><c r="A22" t="s" s="1"><v>70</v></c><c r="B22" t="s" s="0"><v>87</v></c><c r="C22" t="s" s="0"><v>88</v></c><c r="D22" t="s" s="0"><v>89</v></c><c r="E22" t="s" s="0"><v>90</v></c><c r="F22" s="6"><f>D22*E22</f><v></v></c></row>
    <row r="23"><c r="A23" t="s" s="4"><v>91</v></c><c r="B23" t="s" s="4"><v>92</v></c></row>
    <row r="24"><c r="A24" t="s" s="1"><v>93</v></c><c r="B24" t="s" s="0"><v>94</v></c></row>
    <row r="25"><c r="A25" t="s" s="1"><v>95</v></c><c r="B25" t="s" s="0"><v>96</v></c></row>
    <row r="26"><c r="A26" t="s" s="1"><v>97</v></c><c r="B26" t="s" s="0"><v>98</v></c></row>
    <row r="27"><c r="A27" t="s" s="1"><v>99</v></c><c r="B27" t="s" s="0"><v>100</v></c></row>
    <row r="28"><c r="A28" t="s" s="1"><v>101</v></c><c r="B28" t="s" s="0"><v>102</v></c></row>
    <row r="29"><c r="A29" t="s" s="4"><v>103</v></c><c r="B29" t="s" s="4"><v>104</v></c><c r="C29" t="s" s="4"><v>105</v></c></row>
    <row r="30"><c r="A30" t="s" s="0"><v>106</v></c><c r="B30" s="6"><f>SUM(F3:F7)</f><v></v></c><c r="C30" t="s" s="0"><v>107</v></c></row>
    <row r="31"><c r="A31" t="s" s="0"><v>108</v></c><c r="B31" s="6"><f>SUM(F8:F12)</f><v></v></c><c r="C31" t="s" s="0"><v>109</v></c></row>
    <row r="32"><c r="A32" t="s" s="0"><v>110</v></c><c r="B32" s="6"><f>SUM(F13:F17)</f><v></v></c><c r="C32" t="s" s="0"><v>111</v></c></row>
    <row r="33"><c r="A33" t="s" s="0"><v>112</v></c><c r="B33" s="6"><f>SUM(F18:F22)</f><v></v></c><c r="C33" t="s" s="0"><v>113</v></c></row>
    <row r="34"><c r="A34" t="s" s="0"><v>114</v></c><c r="B34" s="6"><f>SUM(F23:F27)</f><v></v></c><c r="C34" t="s" s="0"><v>115</v></c></row>
    <row r="35"><c r="A35" t="s" s="0"><v>116</v></c><c r="B35" s="6"><f>SUM(F28:F32)</f><v></v></c><c r="C35" t="s" s="0"><v>117</v></c></row>
    <row r="36"><c r="A36" t="s" s="4"><v>118</v></c><c r="B36" s="6"><f>SUM(B30:B35)</f><v></v></c></row>
    <row r="37"><c r="A37" t="s" s="4"><v>119</v></c><c r="B37" t="s" s="0"><v>120</v></c></row>
    <row r="38"><c r="A38" t="s" s="0"><v>121</v></c><c r="B38" t="s" s="0"><v>122</v></c></row>
    <row r="39"><c r="A39" t="s" s="0"><v>123</v></c><c r="B39" t="s" s="0"><v>124</v></c></row>
    <row r="40"><c r="A40" t="s" s="0"><v>125</v></c><c r="B40" t="s" s="0"><v>126</v></c></row>
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75"/>
</worksheet>'''

    with open(os.path.join(work_dir, 'xl', 'worksheets', 'sheet1.xml'), 'w', encoding='utf-8') as f:
        f.write(sheet_data)

    # Content_Types.xml
    content_types = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
  <Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>
  <Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/>
</Types>'''
    with open(os.path.join(work_dir, '[Content_Types].xml'), 'w', encoding='utf-8') as f:
        f.write(content_types)

    output_path = os.path.join(OUTPUT_DIR, "01_双元组织自检表.xlsx")
    if pack_xlsx(work_dir, output_path):
        print(f"Created: {output_path}")

def create_02_accounting_mechanism():
    """02_独立核算机制设计表"""
    work_dir = copy_template()

    strings = [
        "独立核算机制设计表", "成本分摊规则", "分摊维度", "分摊规则说明", "分摊比例", "金额（元）",
        "直接成本", "研发人员薪酬", "研发人员实际工时占比", "0.35", "", "设备折旧", "创新项目专用设备折旧", "0.15", "",
        "运营成本分摊", "行政支持费用", "按项目人数分摊", "0.1", "", "房租水电", "按使用面积分摊", "0.08", "",
        "管理费用分摊", "高管管理时间", "按项目预算占比", "0.12", "",
        "成本分摊合计", "", "", "=SUM(C6,C9,C12,C15)", "",
        "收益分配设计", "收益类型", "分配规则", "创业团队", "公司总部", "母公司",
        "营业收入", "按月度结算", "0.4", "0.4", "0.2",
        "利润分享", "扣除成本后利润", "0.5", "0.35", "0.15",
        "股权增值", "项目估值增长", "0.6", "0.3", "0.1",
        "知识产权收益", "技术授权收入", "0.3", "0.5", "0.2",
        "收益分配合计", "", "=SUM(C19:C22)", "=SUM(D19:D22)", "=SUM(E19:E22)",
        "结算周期设置", "结算项目", "结算周期", "结算时点", "备注",
        "日常运营收支", "月度结算", "每月25日", "按权责发生制",
        "利润核算", "季度结算", "每季末月", "需审计确认",
        "年度分红", "年度结算", "每年12月", "结合KPI考核",
        "股权增值", "项目退出时", "退出时点", "一次性结算",
        "风险共担机制", "风险类型", "触发条件", "共担比例", "备注",
        "市场风险", "收入低于预算70%", "团队30%/公司70%", "市场不可抗力",
        "技术风险", "研发失败或延期", "团队20%/公司80%", "技术路线错误",
        "运营风险", "管理失误导致损失", "团队50%/公司50%", "重大过失",
        "外部风险", "政策/法规变化", "团队10%/公司90%", "不可抗力因素",
        "风险准备金", "按收益的10%计提", "", "", "用于风险缓冲"
    ]

    with open(os.path.join(work_dir, 'xl', 'sharedStrings.xml'), 'w', encoding='utf-8') as f:
        f.write(build_shared_strings(strings))

    workbook_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheets>
    <sheet name="独立核算机制设计" sheetId="1" r:id="rId1"/>
  </sheets>
  <calcPr calcId="0"/>
</workbook>'''
    with open(os.path.join(work_dir, 'xl', 'workbook.xml'), 'w', encoding='utf-8') as f:
        f.write(workbook_xml)

    sheet_data = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"/></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols>
    <col min="1" max="1" width="20" customWidth="1"/>
    <col min="2" max="2" width="35" customWidth="1"/>
    <col min="3" max="3" width="30" customWidth="1"/>
    <col min="4" max="4" width="12" customWidth="1"/>
    <col min="5" max="5" width="15" customWidth="1"/>
  </cols>
  <sheetData>
    <row r="1" ht="22" customHeight="1">
      <c r="A1" t="s" s="4"><v>0</v></c>
    </row>
    <row r="2"><c r="A2" t="s" s="4"><v>1</v></c></row>
    <row r="3"><c r="A3" t="s" s="4"><v>2</v></c><c r="B3" t="s" s="4"><v>3</v></c><c r="C3" t="s" s="4"><v>4</v></c><c r="D3" t="s" s="4"><v>5</v></c><c r="E3" t="s" s="4"><v>6</v></c></row>
    <row r="4"><c r="A4" t="s" s="1"><v>7</v></c><c r="B4" t="s" s="0"><v>8</v></c><c r="C4" t="s" s="0"><v>9</v></c><c r="D4" s="7"><v>0.35</v></c><c r="E4" s="6"><f>E36*D4</f><v></v></c></row>
    <row r="5"><c r="A5" t="s" s="1"><v>10</v></c><c r="B5" t="s" s="0"><v>11</v></c><c r="C5" t="s" s="0"><v>12</v></c><c r="D5" s="7"><v>0.15</v></c><c r="E5" s="6"><f>E36*D5</f><v></v></c></row>
    <row r="6"><c r="A6" t="s" s="1"><v>13</v></c><c r="B6" t="s" s="0"><v>14</v></c><c r="C6" t="s" s="0"><v>15</v></c><c r="D6" s="7"><v>0.1</v></c><c r="E6" s="6"><f>E36*D6</f><v></v></c></row>
    <row r="7"><c r="A7" t="s" s="1"><v>16</v></c><c r="B7" t="s" s="0"><v>17</v></c><c r="C7" t="s" s="0"><v>18</v></c><c r="D7" s="7"><v>0.08</v></c><c r="E7" s="6"><f>E36*D7</f><v></v></c></row>
    <row r="8"><c r="A8" t="s" s="1"><v>19</v></c><c r="B8" t="s" s="0"><v>20</v></c><c r="C8" t="s" s="0"><v>21</v></c><c r="D8" s="7"><v>0.12</v></c><c r="E8" s="6"><f>E36*D8</f><v></v></c></row>
    <row r="9"><c r="A9" t="s" s="4"><v>22</v></c><c r="B9" t="s" s="4"><v></v></c><c r="C9" t="s" s="4"><v></v></c><c r="D9" t="s" s="4"><v></v></c><c r="E9" s="6"><f>SUM(E4:E8)</f><v></v></c></row>
    <row r="10"><c r="A10" t="s" s="4"><v>23</v></c></row>
    <row r="11"><c r="A11" t="s" s="4"><v>24</v></c><c r="B11" t="s" s="4"><v>25</v></c><c r="C11" t="s" s="4"><v>26</v></c><c r="D11" t="s" s="4"><v>27</v></c><c r="E11" t="s" s="4"><v>28</v></c></row>
    <row r="12"><c r="A12" t="s" s="1"><v>29</v></c><c r="B12" t="s" s="0"><v>30</v></c><c r="C12" s="7"><v>0.4</v></c><c r="D12" s="7"><v>0.4</v></c><c r="E12" s="7"><v>0.2</v></c></row>
    <row r="13"><c r="A13" t="s" s="1"><v>31</v></c><c r="B13" t="s" s="0"><v>32</v></c><c r="C13" s="7"><v>0.5</v></c><c r="D13" s="7"><v>0.35</v></c><c r="E13" s="7"><v>0.15</v></c></row>
    <row r="14"><c r="A14" t="s" s="1"><v>33</v></c><c r="B14" t="s" s="0"><v>34</v></c><c r="C14" s="7"><v>0.6</v></c><c r="D14" s="7"><v>0.3</v></c><c r="E14" s="7"><v>0.1</v></c></row>
    <row r="15"><c r="A15" t="s" s="1"><v>35</v></c><c r="B15" t="s" s="0"><v>36</v></c><c r="C15" s="7"><v>0.3</v></c><c r="D15" s="7"><v>0.5</v></c><c r="E15" s="7"><v>0.2</v></c></row>
    <row r="16"><c r="A16" t="s" s="4"><v>37</v></c><c r="B16" t="s" s="4"><v></v></c><c r="C16" s="6"><f>SUM(C12:C15)</f><v></v></c><c r="D16" s="6"><f>SUM(D12:D15)</f><v></v></c><c r="E16" s="6"><f>SUM(E12:E15)</f><v></v></c></row>
    <row r="17"><c r="A17" t="s" s="4"><v>38</v></c></row>
    <row r="18"><c r="A18" t="s" s="4"><v>39</v></c><c r="B18" t="s" s="4"><v>40</v></c><c r="C18" t="s" s="4"><v>41</v></c><c r="D18" t="s" s="4"><v>42</v></c></row>
    <row r="19"><c r="A19" t="s" s="1"><v>43</v></c><c r="B19" t="s" s="0"><v>44</v></c><c r="C19" t="s" s="0"><v>45</v></c><c r="D19" t="s" s="0"><v>46</v></c></row>
    <row r="20"><c r="A20" t="s" s="1"><v>47</v></c><c r="B20" t="s" s="0"><v>48</v></c><c r="C20" t="s" s="0"><v>49</v></c><c r="D20" t="s" s="0"><v>50</v></c></row>
    <row r="21"><c r="A21" t="s" s="1"><v>51</v></c><c r="B21" t="s" s="0"><v>52</v></c><c r="C21" t="s" s="0"><v>53</v></c><c r="D21" t="s" s="0"><v>54</v></c></row>
    <row r="22"><c r="A22" t="s" s="1"><v>55</v></c><c r="B22" t="s" s="0"><v>56</v></c><c r="C22" t="s" s="0"><v>57</v></c><c r="D22" t="s" s="0"><v>58</v></c></row>
    <row r="23"><c r="A23" t="s" s="4"><v>59</v></c></row>
    <row r="24"><c r="A24" t="s" s="4"><v>60</v></c><c r="B24" t="s" s="4"><v>61</v></c><c r="C24" t="s" s="4"><v>62</v></c><c r="D24" t="s" s="4"><v>63</v></c></row>
    <row r="25"><c r="A25" t="s" s="1"><v>64</v></c><c r="B25" t="s" s="0"><v>65</v></c><c r="C25" t="s" s="0"><v>66</v></c><c r="D25" t="s" s="0"><v>67</v></c></row>
    <row r="26"><c r="A26" t="s" s="1"><v>68</v></c><c r="B26" t="s" s="0"><v>69</v></c><c r="C26" t="s" s="0"><v>70</v></c><c r="D26" t="s" s="0"><v>71</v></c></row>
    <row r="27"><c r="A27" t="s" s="1"><v>72</v></c><c r="B27" t="s" s="0"><v>73</v></c><c r="C27" t="s" s="0"><v>74</v></c><c r="D27" t="s" s="0"><v>75</v></c></row>
    <row r="28"><c r="A28" t="s" s="1"><v>76</v></c><c r="B28" t="s" s="0"><v>77</v></c><c r="C28" t="s" s="0"><v>78</v></c><c r="D28" t="s" s="0"><v>79</v></c></row>
    <row r="29"><c r="A29" t="s" s="1"><v>80</v></c><c r="B29" t="s" s="0"><v>81</v></c><c r="C29" t="s" s="0"><v></v></c><c r="D29" t="s" s="0"><v>82</v></c></row>
    <row r="36"><c r="E36" s="5"><v>1000000</v></c></row>
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75"/>
</worksheet>'''

    with open(os.path.join(work_dir, 'xl', 'worksheets', 'sheet1.xml'), 'w', encoding='utf-8') as f:
        f.write(sheet_data)

    content_types = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
  <Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>
  <Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/>
</Types>'''
    with open(os.path.join(work_dir, '[Content_Types].xml'), 'w', encoding='utf-8') as f:
        f.write(content_types)

    output_path = os.path.join(OUTPUT_DIR, "02_独立核算机制设计表.xlsx")
    if pack_xlsx(work_dir, output_path):
        print(f"Created: {output_path}")

def create_03_resource_application():
    """03_资源申请评估表"""
    work_dir = copy_template()

    strings = [
        "资源申请评估表", "项目名称", "", "申请日期", "", "申请人", "",
        "资源阶段", "资源包类型", "资源内容", "申请金额（元）", "评估得分", "加权得分", "审批状态",
        "种子轮", "种子轮A", "研发启动资金、人员招聘", "50000-150000", "", "0.25", "待审批",
        "种子轮", "种子轮B", "产品原型开发、市场验证", "150000-300000", "", "0.25", "待审批",
        "A轮", "A轮A", "产品化、市场推广", "300000-800000", "", "0.3", "待审批",
        "A轮", "A轮B", "规模化运营", "800000-2000000", "", "0.3", "待审批",
        "B轮", "B轮", "市场扩张、团队扩充", "2000000-5000000", "", "0.35", "待审批",
        "评估维度", "评估标准", "权重", "评分（1-10）", "得分",
        "创新性", "产品/服务创新程度、技术领先性、差异化程度", "0.25", "", "=C16*D16",
        "可行性", "技术实现路径、商业模式清晰度、资源获取能力", "0.25", "", "=C17*D17",
        "市场潜力", "目标市场规模、增长预期、竞争壁垒", "0.25", "", "=C18*D18",
        "团队能力", "团队背景、执行力、行业经验", "0.25", "", "=C19*D19",
        "总分", "", "1", "", "=SUM(E16:E19)",
        "评估等级", "A级（8-10分）优先审批", "B级（6-8分）正常审批", "C级（4-6分）补充材料", "D级（4分以下）不建议",
        "资源审批流程", "审批节点", "审批人", "审批时限", "审批意见",
        "1. 材料受理", "项目经理", "1个工作日", "",
        "2. 初审评估", "创新委员会", "3个工作日", "",
        "3. 尽职调查", "财务/法务", "5个工作日", "",
        "4. 最终审批", "CEO/董事会", "3个工作日", "",
        "5. 合同签署", "法务/财务", "2个工作日", "",
        "审批通过后", "资金拨付", "按里程碑分批拨付", "", ""
    ]

    with open(os.path.join(work_dir, 'xl', 'sharedStrings.xml'), 'w', encoding='utf-8') as f:
        f.write(build_shared_strings(strings))

    workbook_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheets>
    <sheet name="资源申请评估" sheetId="1" r:id="rId1"/>
  </sheets>
  <calcPr calcId="0"/>
</workbook>'''
    with open(os.path.join(work_dir, 'xl', 'workbook.xml'), 'w', encoding='utf-8') as f:
        f.write(workbook_xml)

    sheet_data = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"/></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols>
    <col min="1" max="1" width="15" customWidth="1"/>
    <col min="2" max="2" width="20" customWidth="1"/>
    <col min="3" max="3" width="35" customWidth="1"/>
    <col min="4" max="4" width="15" customWidth="1"/>
    <col min="5" max="5" width="12" customWidth="1"/>
    <col min="6" max="6" width="12" customWidth="1"/>
  </cols>
  <sheetData>
    <row r="1" ht="22" customHeight="1">
      <c r="A1" t="s" s="4"><v>0</v></c>
    </row>
    <row r="2">
      <c r="A2" t="s" s="1"><v>1</v></c><c r="B2" t="s" s="0"><v></v></c>
      <c r="C2" t="s" s="1"><v>3</v></c><c r="D2" t="s" s="0"><v></v></c>
      <c r="E2" t="s" s="1"><v>5</v></c><c r="F2" t="s" s="0"><v></v></c>
    </row>
    <row r="3"><c r="A3" t="s" s="4"><v>6</v></c><c r="B3" t="s" s="4"><v>7</v></c><c r="C3" t="s" s="4"><v>8</v></c><c r="D3" t="s" s="4"><v>9</v></c><c r="E3" t="s" s="4"><v>10</v></c><c r="F3" t="s" s="4"><v>11</v></c></row>
    <row r="4"><c r="A4" t="s" s="1"><v>12</v></c><c r="B4" t="s" s="1"><v>13</v></c><c r="C4" t="s" s="0"><v>14</v></c><c r="D4" s="5"><v>50000</v></c><c r="E4" s="9"><v></v></c><c r="F4" s="6"><f>E4*D4</f><v></v></c><c r="G4" t="s" s="0"><v>15</v></c></row>
    <row r="5"><c r="A5" t="s" s="1"><v>12</v></c><c r="B5" t="s" s="1"><v>16</v></c><c r="C5" t="s" s="0"><v>17</v></c><c r="D5" s="5"><v>150000</v></c><c r="E5" s="9"><v></v></c><c r="F5" s="6"><f>E5*D5</f><v></v></c><c r="G5" t="s" s="0"><v>15</v></c></row>
    <row r="6"><c r="A6" t="s" s="1"><v>18</v></c><c r="B6" t="s" s="1"><v>19</v></c><c r="C6" t="s" s="0"><v>20</v></c><c r="D6" s="5"><v>300000</v></c><c r="E6" s="9"><v></v></c><c r="F6" s="6"><f>E6*D6</f><v></v></c><c r="G6" t="s" s="0"><v>15</v></c></row>
    <row r="7"><c r="A7" t="s" s="1"><v>18</v></c><c r="B7" t="s" s="1"><v>21</v></c><c r="C7" t="s" s="0"><v>22</v></c><c r="D7" s="5"><v>800000</v></c><c r="E7" s="9"><v></v></c><c r="F7" s="6"><f>E7*D7</f><v></v></c><c r="G7" t="s" s="0"><v>15</v></c></row>
    <row r="8"><c r="A8" t="s" s="1"><v>23</v></c><c r="B8" t="s" s="1"><v>24</v></c><c r="C8" t="s" s="0"><v>25</v></c><c r="D8" s="5"><v>2000000</v></c><c r="E8" s="9"><v></v></c><c r="F8" s="6"><f>E8*D8</f><v></v></c><c r="G8" t="s" s="0"><v>15</v></c></row>
    <row r="9"><c r="A9" t="s" s="4"><v>26</v></c><c r="B9" t="s" s="4"><v>27</v></c><c r="C9" t="s" s="4"><v>28</v></c><c r="D9" t="s" s="4"><v>29</v></c><c r="E9" t="s" s="4"><v>30</v></c></row>
    <row r="10"><c r="A10" t="s" s="1"><v>31</v></c><c r="B10" t="s" s="0"><v>32</v></c><c r="C10" s="7"><v>0.25</v></c><c r="D10" s="9"><v></v></c><c r="E10" s="6"><f>C10*D10</f><v></v></c></row>
    <row r="11"><c r="A11" t="s" s="1"><v>33</v></c><c r="B11" t="s" s="0"><v>34</v></c><c r="C11" s="7"><v>0.25</v></c><c r="D11" s="9"><v></v></c><c r="E11" s="6"><f>C11*D11</f><v></v></c></row>
    <row r="12"><c r="A12" t="s" s="1"><v>35</v></c><c r="B12" t="s" s="0"><v>36</v></c><c r="C12" s="7"><v>0.25</v></c><c r="D12" s="9"><v></v></c><c r="E12" s="6"><f>C12*D12</f><v></v></c></row>
    <row r="13"><c r="A13" t="s" s="1"><v>37</v></c><c r="B13" t="s" s="0"><v>38</v></c><c r="C13" s="7"><v>0.25</v></c><c r="D13" s="9"><v></v></c><c r="E13" s="6"><f>C13*D13</f><v></v></c></row>
    <row r="14"><c r="A14" t="s" s="4"><v>39</v></c><c r="B14" t="s" s="4"><v></v></c><c r="C14" s="7"><v>1</v></c><c r="D14" t="s" s="0"><v></v></c><c r="E14" s="6"><f>SUM(E10:E13)</f><v></v></c></row>
    <row r="15"><c r="A15" t="s" s="0"><v>40</v></c></row>
    <row r="16"><c r="A16" t="s" s="0"><v>41</v></c><c r="B16" t="s" s="0"><v>42</v></c><c r="C16" t="s" s="0"><v>43</v></c></row>
    <row r="17"><c r="A17" t="s" s="4"><v>44</v></c><c r="B17" t="s" s="4"><v>45</v></c><c r="C17" t="s" s="4"><v>46</v></c><c r="D17" t="s" s="4"><v>47</v></c></row>
    <row r="18"><c r="A18" t="s" s="1"><v>48</v></c><c r="B18" t="s" s="0"><v>49</v></c><c r="C18" t="s" s="0"><v>1个工作日</v></c><c r="D18" t="s" s="0"><v></v></c></row>
    <row r="19"><c r="A19" t="s" s="1"><v>50</v></c><c r="B19" t="s" s="0"><v>51</v></c><c r="C19" t="s" s="0"><v>3个工作日</v></c><c r="D19" t="s" s="0"><v></v></c></row>
    <row r="20"><c r="A20" t="s" s="1"><v>52</v></c><c r="B20" t="s" s="0"><v>53</v></c><c r="C20" t="s" s="0"><v>5个工作日</v></c><c r="D20" t="s" s="0"><v></v></c></row>
    <row r="21"><c r="A21" t="s" s="1"><v>54</v></c><c r="B21" t="s" s="0"><v>55</v></c><c r="C21" t="s" s="0"><v>3个工作日</v></c><c r="D21" t="s" s="0"><v></v></c></row>
    <row r="22"><c r="A22" t="s" s="1"><v>56</v></c><c r="B22" t="s" s="0"><v>57</v></c><c r="C22" t="s" s="0"><v>2个工作日</v></c><c r="D22" t="s" s="0"><v></v></c></row>
    <row r="23"><c r="A23" t="s" s="0"><v>58</v></c><c r="B23" t="s" s="0"><v>59</v></c><c r="C23" t="s" s="0"><v>60</v></c><c r="D23" t="s" s="0"><v></v></c></row>
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75"/>
</worksheet>'''

    with open(os.path.join(work_dir, 'xl', 'worksheets', 'sheet1.xml'), 'w', encoding='utf-8') as f:
        f.write(sheet_data)

    content_types = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
  <Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>
  <Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/>
</Types>'''
    with open(os.path.join(work_dir, '[Content_Types].xml'), 'w', encoding='utf-8') as f:
        f.write(content_types)

    output_path = os.path.join(OUTPUT_DIR, "03_资源申请评估表.xlsx")
    if pack_xlsx(work_dir, output_path):
        print(f"Created: {output_path}")

def create_04_milestone_assessment():
    """04_里程碑考核规划表"""
    work_dir = copy_template()

    strings = [
        "里程碑考核规划表", "项目名称", "", "项目负责人", "",
        "阶段", "里程碑", "考核指标", "权重", "目标值", "实际值", "得分", "完成状态",
        "概念阶段", "M1-商业计划", "商业计划书完整度", "0.2", "90分", "", "=IF(F4>=E4,1,0.5)", "未完成",
        "概念阶段", "M1-团队组建", "核心团队到位率", "0.15", "100%", "", "=IF(F5>=E5,1,0.5)", "未完成",
        "概念阶段", "M1-市场调研", "调研报告质量", "0.15", "85分", "", "=IF(F6>=E6,1,0.5)", "未完成",
        "概念阶段", "M1-预算审批", "预算准确性", "0.1", "95%", "", "=IF(F7>=E7,1,0.5)", "未完成",
        "概念阶段", "M1-概念验证", "概念验证通过", "0.4", "通过", "", "=IF(F8=E8,1,0)", "未完成",
        "开发阶段", "M2-产品原型", "原型完成度", "0.25", "90%", "", "=IF(F10>=E10,1,0.5)", "未完成",
        "开发阶段", "M2-技术突破", "关键技术指标", "0.25", "达标", "", "=IF(F11=E11,1,0)", "未完成",
        "开发阶段", "M2-设计评审", "设计评审通过", "0.2", "通过", "", "=IF(F12=E12,1,0)", "未完成",
        "开发阶段", "M2-成本控制", "预算执行率", "0.15", "95%", "", "=IF(F13>=E13,1,0.5)", "未完成",
        "开发阶段", "M2-进度达成", "开发进度", "0.15", "100%", "", "=IF(F14>=E14,1,0.5)", "未完成",
        "测试阶段", "M3-内部测试", "测试用例通过率", "0.3", "95%", "", "=IF(F16>=E16,1,0.5)", "未完成",
        "测试阶段", "M3-用户测试", "用户满意度", "0.25", "8分", "", "=IF(F17>=E17,1,0.5)", "未完成",
        "测试阶段", "M3-性能达标", "性能指标", "0.2", "达标", "", "=IF(F18=E18,1,0)", "未完成",
        "测试阶段", "M3-安全测试", "安全测试通过", "0.15", "通过", "", "=IF(F19=E19,1,0)", "未完成",
        "测试阶段", "M3-缺陷修复", "严重缺陷清零", "0.1", "0个", "", "=IF(F20<=E20,1,0)", "未完成",
        "上线阶段", "M4-产品上线", "上线时间", "0.25", "按期", "", "=IF(F22=E22,1,0)", "未完成",
        "上线阶段", "M4-运营启动", "运营指标达成", "0.25", "达标", "", "=IF(F23=E23,1,0)", "未完成",
        "上线阶段", "M4-客户获取", "首批客户数", "0.2", "100个", "", "=IF(F24>=E24,1,0.5)", "未完成",
        "上线阶段", "M4-收入达成", "首月收入", "0.15", "50万元", "", "=IF(F25>=E25,1,0.5)", "未完成",
        "上线阶段", "M4-系统稳定", "系统可用性", "0.15", "99.5%", "", "=IF(F26>=E26,1,0.5)", "未完成",
        "红灯预警机制", "预警级别", "触发条件", "处理措施", "负责人",
        "红灯", "得分<60%或进度延迟>30天", "立即召开专题会议，制定整改方案", "项目经理",
        "黄灯", "得分60-80%或进度延迟15-30天", "加强监控，每周汇报进展", "项目经理",
        "绿灯", "得分>=80%且进度正常", "正常推进", "项目经理",
        "阶段评分汇总", "概念阶段", "开发阶段", "测试阶段", "上线阶段", "综合得分",
        "加权得分", "=SUMPRODUCT(D4:D8,C4:C8)", "=SUMPRODUCT(D10:D14,C10:C14)", "=SUMPRODUCT(D16:D20,C16:C20)", "=SUMPRODUCT(D22:D26,C22:C26)", "=SUM(B29:B32)"
    ]

    with open(os.path.join(work_dir, 'xl', 'sharedStrings.xml'), 'w', encoding='utf-8') as f:
        f.write(build_shared_strings(strings))

    workbook_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheets>
    <sheet name="里程碑考核规划" sheetId="1" r:id="rId1"/>
  </sheets>
  <calcPr calcId="0"/>
</workbook>'''
    with open(os.path.join(work_dir, 'xl', 'workbook.xml'), 'w', encoding='utf-8') as f:
        f.write(workbook_xml)

    # 构建sheet数据
    rows = []
    rows.append('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>')
    rows.append('<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">')
    rows.append('  <sheetViews><sheetView workbookViewId="0"/></sheetViews>')
    rows.append('  <sheetFormatPr defaultRowHeight="15"/>')
    rows.append('  <cols>')
    rows.append('    <col min="1" max="1" width="12" customWidth="1"/>')
    rows.append('    <col min="2" max="2" width="18" customWidth="1"/>')
    rows.append('    <col min="3" max="3" width="30" customWidth="1"/>')
    rows.append('    <col min="4" max="4" width="8" customWidth="1"/>')
    rows.append('    <col min="5" max="5" width="10" customWidth="1"/>')
    rows.append('    <col min="6" max="6" width="10" customWidth="1"/>')
    rows.append('    <col min="7" max="7" width="8" customWidth="1"/>')
    rows.append('    <col min="8" max="8" width="10" customWidth="1"/>')
    rows.append('  </cols>')
    rows.append('  <sheetData>')

    # 标题行
    rows.append('    <row r="1" ht="22" customHeight="1"><c r="A1" t="s" s="4"><v>0</v></c></row>')
    rows.append('    <row r="2"><c r="A2" t="s" s="1"><v>1</v></c><c r="B2" t="s" s="0"><v></v></c><c r="C2" t="s" s="1"><v>3</v></c><c r="D2" t="s" s="0"><v></v></c></row>')

    # 表头
    headers = ["阶段", "里程碑", "考核指标", "权重", "目标值", "实际值", "得分", "完成状态"]
    rows.append(f'    <row r="3"><c r="A3" t="s" s="4"><v>{6}</v></c><c r="B3" t="s" s="4"><v>{7}</v></c><c r="C3" t="s" s="4"><v>{8}</v></c><c r="D3" t="s" s="4"><v>{9}</v></c><c r="E3" t="s" s="4"><v>{10}</v></c><c r="F3" t="s" s="4"><v>{11}</v></c><c r="G3" t="s" s="4"><v>{12}</v></c><c r="H3" t="s" s="4"><v>{13}</v></c></row>')

    # 概念阶段数据 (行4-8)
    concept_data = [
        (14, 15, 16, 0.20, "90分", 17),
        (14, 18, 19, 0.15, "100%", 20),
        (14, 21, 22, 0.15, "85分", 23),
        (14, 24, 25, 0.10, "95%", 26),
        (14, 27, 28, 0.40, "通过", 29),
    ]
    for i, (stage, milestone, indicator, weight, target, score_idx) in enumerate(concept_data, start=4):
        rows.append(f'    <row r="{i}"><c r="A{i}" t="s" s="1"><v>{stage}</v></c><c r="B{i}" t="s" s="1"><v>{milestone}</v></c><c r="C{i}" t="s" s="0"><v>{indicator}</v></c><c r="D{i}" s="7"><v>{weight}</v></c><c r="E{i}" t="s" s="0"><v>{target}</v></c><c r="F{i}" s="9"><v></v></c><c r="G{i}" s="6"><f>IF(F{i}&gt;=E{i},1,0.5)</f><v></v></c><c r="H{i}" t="s" s="0"><v>30</v></c></row>')

    # 开发阶段数据 (行10-14)
    develop_data = [
        (31, 32, 33, 0.25, "90%", 34),
        (31, 35, 36, 0.25, "达标", 37),
        (31, 38, 39, 0.20, "通过", 40),
        (31, 41, 42, 0.15, "95%", 43),
        (31, 44, 45, 0.15, "100%", 46),
    ]
    for i, (stage, milestone, indicator, weight, target, score_idx) in enumerate(develop_data, start=10):
        rows.append(f'    <row r="{i}"><c r="A{i}" t="s" s="1"><v>{stage}</v></c><c r="B{i}" t="s" s="1"><v>{milestone}</v></c><c r="C{i}" t="s" s="0"><v>{indicator}</v></c><c r="D{i}" s="7"><v>{weight}</v></c><c r="E{i}" t="s" s="0"><v>{target}</v></c><c r="F{i}" s="9"><v></v></c><c r="G{i}" s="6"><f>IF(F{i}&gt;=E{i},1,0.5)</f><v></v></c><c r="H{i}" t="s" s="0"><v>30</v></c></row>')

    # 测试阶段数据 (行16-20)
    test_data = [
        (47, 48, 49, 0.30, "95%", 50),
        (47, 51, 52, 0.25, "8分", 53),
        (47, 54, 55, 0.20, "达标", 56),
        (47, 57, 58, 0.15, "通过", 59),
        (47, 60, 61, 0.10, "0个", 62),
    ]
    for i, (stage, milestone, indicator, weight, target, score_idx) in enumerate(test_data, start=16):
        rows.append(f'    <row r="{i}"><c r="A{i}" t="s" s="1"><v>{stage}</v></c><c r="B{i}" t="s" s="1"><v>{milestone}</v></c><c r="C{i}" t="s" s="0"><v>{indicator}</v></c><c r="D{i}" s="7"><v>{weight}</v></c><c r="E{i}" t="s" s="0"><v>{target}</v></c><c r="F{i}" s="9"><v></v></c><c r="G{i}" s="6"><f>IF(F{i}&gt;=E{i},1,0.5)</f><v></v></c><c r="H{i}" t="s" s="0"><v>30</v></c></row>')

    # 上线阶段数据 (行22-26)
    launch_data = [
        (63, 64, 65, 0.25, "按期", 66),
        (63, 67, 68, 0.25, "达标", 69),
        (63, 70, 71, 0.20, "100个", 72),
        (63, 73, 74, 0.15, "50万元", 75),
        (63, 76, 77, 0.15, "99.5%", 78),
    ]
    for i, (stage, milestone, indicator, weight, target, score_idx) in enumerate(launch_data, start=22):
        rows.append(f'    <row r="{i}"><c r="A{i}" t="s" s="1"><v>{stage}</v></c><c r="B{i}" t="s" s="1"><v>{milestone}</v></c><c r="C{i}" t="s" s="0"><v>{indicator}</v></c><c r="D{i}" s="7"><v>{weight}</v></c><c r="E{i}" t="s" s="0"><v>{target}</v></c><c r="F{i}" s="9"><v></v></c><c r="G{i}" s="6"><f>IF(F{i}&gt;=E{i},1,0.5)</f><v></v></c><c r="H{i}" t="s" s="0"><v>30</v></c></row>')

    # 红灯预警机制 (行28-31)
    rows.append('    <row r="28"><c r="A28" t="s" s="4"><v>79</v></c><c r="B28" t="s" s="4"><v>80</v></c><c r="C28" t="s" s="4"><v>81</v></c><c r="D28" t="s" s="4"><v>82</v></c></row>')
    rows.append('    <row r="29"><c r="A29" t="s" s="1"><v>83</v></c><c r="B29" t="s" s="0"><v>84</v></c><c r="C29" t="s" s="0"><v>85</v></c><c r="D29" t="s" s="0"><v>86</v></c></row>')
    rows.append('    <row r="30"><c r="A30" t="s" s="1"><v>87</v></c><c r="B30" t="s" s="0"><v>88</v></c><c r="C30" t="s" s="0"><v>89</v></c><c r="D30" t="s" s="0"><v>86</v></c></row>')
    rows.append('    <row r="31"><c r="A31" t="s" s="1"><v>90</v></c><c r="B31" t="s" s="0"><v>91</v></c><c r="C31" t="s" s="0"><v>92</v></c><c r="D31" t="s" s="0"><v>86</v></c></row>')

    # 阶段评分汇总 (行33-38)
    rows.append('    <row r="33"><c r="A33" t="s" s="4"><v>93</v></c><c r="B33" t="s" s="4"><v>94</v></c><c r="C33" t="s" s="4"><v>95</v></c><c r="D33" t="s" s="4"><v>96</v></c><c r="E33" t="s" s="4"><v>97</v></c></row>')
    rows.append('    <row r="34"><c r="A34" t="s" s="0"><v>98</v></c><c r="B34" s="6"><f>SUMPRODUCT(D4:D8,C4:C8)</f><v></v></c><c r="C34" s="6"><f>SUMPRODUCT(D10:D14,C10:C14)</f><v></v></c><c r="D34" s="6"><f>SUMPRODUCT(D16:D20,C16:C20)</f><v></v></c><c r="E34" s="6"><f>SUMPRODUCT(D22:D26,C22:C26)</f><v></v></c></row>')
    rows.append('    <row r="35"><c r="A35" t="s" s="4"><v>99</v></c><c r="B35" s="6"><f>SUM(B34:D34)</f><v></v></c></row>')

    rows.append('  </sheetData>')
    rows.append('  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75"/>')
    rows.append('</worksheet>')

    with open(os.path.join(work_dir, 'xl', 'worksheets', 'sheet1.xml'), 'w', encoding='utf-8') as f:
        f.write('\n'.join(rows))

    content_types = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
  <Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>
  <Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/>
</Types>'''
    with open(os.path.join(work_dir, '[Content_Types].xml'), 'w', encoding='utf-8') as f:
        f.write(content_types)

    output_path = os.path.join(OUTPUT_DIR, "04_里程碑考核规划表.xlsx")
    if pack_xlsx(work_dir, output_path):
        print(f"Created: {output_path}")

def create_05_innovation_opportunity():
    """05_创新机会识别矩阵"""
    work_dir = copy_template()

    strings = [
        "创新机会识别矩阵", "机会名称", "", "评估日期", "", "评估人", "",
        "评估维度", "评估标准", "权重", "评分（1-10）", "加权得分", "优先级",
        "市场需求", "市场规模、增长潜力、需求紧迫性", "0.25", "", "=C13*D13", "",
        "技术可行性", "技术成熟度、研发能力、知识产权", "0.20", "", "=C14*D14", "",
        "竞争强度", "市场竞争格局、竞争对手实力、进入壁垒", "0.15", "", "=C15*D15", "",
        "资源需求", "资金投入、人才需求、时间周期", "0.20", "", "=C16*D16", "",
        "组织适配度", "与公司战略协同、资源匹配度、文化兼容", "0.20", "", "=C17*D17", "",
        "总分", "", "1", "", "=SUM(E13:E17)", "",
        "评分标准", "9-10分：优秀，优先投入", "7-8分：良好，可考虑投入", "5-6分：一般，需进一步论证", "3-4分：较差，不建议投入", "1-2分：差，坚决放弃",
        "优先级排序", "优先级", "机会名称", "总分", "建议决策",
        "A类", "", "", "", "优先投入资源，全力推进",
        "B类", "", "", "", "纳入观察名单，适时推进",
        "C类", "", "", "", "暂缓推进，待条件成熟",
        "D类", "", "", "", "不建议投入",
        "推荐决策", "总分>=8.5：A类（优先投入）", "总分7.0-8.4：B类（可考虑）", "总分5.5-6.9：C类（暂缓）", "总分<5.5：D类（不建议）"
    ]

    with open(os.path.join(work_dir, 'xl', 'sharedStrings.xml'), 'w', encoding='utf-8') as f:
        f.write(build_shared_strings(strings))

    workbook_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheets>
    <sheet name="创新机会识别矩阵" sheetId="1" r:id="rId1"/>
  </sheets>
  <calcPr calcId="0"/>
</workbook>'''
    with open(os.path.join(work_dir, 'xl', 'workbook.xml'), 'w', encoding='utf-8') as f:
        f.write(workbook_xml)

    rows = []
    rows.append('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>')
    rows.append('<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">')
    rows.append('  <sheetViews><sheetView workbookViewId="0"/></sheetViews>')
    rows.append('  <sheetFormatPr defaultRowHeight="15"/>')
    rows.append('  <cols>')
    rows.append('    <col min="1" max="1" width="15" customWidth="1"/>')
    rows.append('    <col min="2" max="2" width="40" customWidth="1"/>')
    rows.append('    <col min="3" max="3" width="10" customWidth="1"/>')
    rows.append('    <col min="4" max="4" width="12" customWidth="1"/>')
    rows.append('    <col min="5" max="5" width="12" customWidth="1"/>')
    rows.append('    <col min="6" max="6" width="15" customWidth="1"/>')
    rows.append('  </cols>')
    rows.append('  <sheetData>')

    rows.append('    <row r="1" ht="22" customHeight="1"><c r="A1" t="s" s="4"><v>0</v></c></row>')
    rows.append('    <row r="2"><c r="A2" t="s" s="1"><v>1</v></c><c r="B2" t="s" s="0"><v></v></c><c r="C2" t="s" s="1"><v>3</v></c><c r="D2" t="s" s="0"><v></v></c><c r="E2" t="s" s="1"><v>5</v></c><c r="F2" t="s" s="0"><v></v></c></row>')
    rows.append('    <row r="3"><c r="A3" t="s" s="4"><v>6</v></c><c r="B3" t="s" s="4"><v>7</v></c><c r="C3" t="s" s="4"><v>8</v></c><c r="D3" t="s" s="4"><v>9</v></c><c r="E3" t="s" s="4"><v>10</v></c><c r="F3" t="s" s="4"><v>11</v></c></row>')
    rows.append('    <row r="4"><c r="A4" t="s" s="1"><v>12</v></c><c r="B4" t="s" s="0"><v>13</v></c><c r="C4" s="7"><v>0.25</v></c><c r="D4" s="9"><v></v></c><c r="E4" s="6"><f>C4*D4</f><v></v></c><c r="F4" t="s" s="0"><v></v></c></row>')
    rows.append('    <row r="5"><c r="A5" t="s" s="1"><v>14</v></c><c r="B5" t="s" s="0"><v>15</v></c><c r="C5" s="7"><v>0.20</v></c><c r="D5" s="9"><v></v></c><c r="E5" s="6"><f>C5*D5</f><v></v></c><c r="F5" t="s" s="0"><v></v></c></row>')
    rows.append('    <row r="6"><c r="A6" t="s" s="1"><v>16</v></c><c r="B6" t="s" s="0"><v>17</v></c><c r="C6" s="7"><v>0.15</v></c><c r="D6" s="9"><v></v></c><c r="E6" s="6"><f>C6*D6</f><v></v></c><c r="F6" t="s" s="0"><v></v></c></row>')
    rows.append('    <row r="7"><c r="A7" t="s" s="1"><v>18</v></c><c r="B7" t="s" s="0"><v>19</v></c><c r="C7" s="7"><v>0.20</v></c><c r="D7" s="9"><v></v></c><c r="E7" s="6"><f>C7*D7</f><v></v></c><c r="F7" t="s" s="0"><v></v></c></row>')
    rows.append('    <row r="8"><c r="A8" t="s" s="1"><v>20</v></c><c r="B8" t="s" s="0"><v>21</v></c><c r="C8" s="7"><v>0.20</v></c><c r="D8" s="9"><v></v></c><c r="E8" s="6"><f>C8*D8</f><v></v></c><c r="F8" t="s" s="0"><v></v></c></row>')
    rows.append('    <row r="9"><c r="A9" t="s" s="4"><v>22</v></c><c r="B9" t="s" s="4"><v></v></c><c r="C9" s="7"><v>1</v></c><c r="D9" t="s" s="0"><v></v></c><c r="E9" s="6"><f>SUM(E4:E8)</f><v></v></c><c r="F9" t="s" s="0"><v></v></c></row>')
    rows.append('    <row r="10"><c r="A10" t="s" s="0"><v>23</v></c></row>')
    rows.append('    <row r="11"><c r="A11" t="s" s="0"><v>24</v></c><c r="B11" t="s" s="0"><v>25</v></c><c r="C11" t="s" s="0"><v>26</v></c><c r="D11" t="s" s="0"><v>27</v></c></row>')
    rows.append('    <row r="12"><c r="A12" t="s" s="4"><v>28</v></c><c r="B12" t="s" s="4"><v>29</v></c><c r="C12" t="s" s="4"><v>30</v></c><c r="D12" t="s" s="4"><v>31</v></c><c r="E12" t="s" s="4"><v>32</v></c></row>')
    rows.append('    <row r="13"><c r="A13" t="s" s="1"><v>33</v></c><c r="B13" t="s" s="0"><v></v></c><c r="C13" t="s" s="0"><v></v></c><c r="D13" t="s" s="0"><v></v></c><c r="E13" t="s" s="0"><v></v></c></row>')
    rows.append('    <row r="14"><c r="A14" t="s" s="1"><v>34</v></c><c r="B14" t="s" s="0"><v></v></c><c r="C14" t="s" s="0"><v></v></c><c r="D14" t="s" s="0"><v></v></c><c r="E14" t="s" s="0"><v></v></c></row>')
    rows.append('    <row r="15"><c r="A15" t="s" s="1"><v>35</v></c><c r="B15" t="s" s="0"><v></v></c><c r="C15" t="s" s="0"><v></v></c><c r="D15" t="s" s="0"><v></v></c><c r="E15" t="s" s="0"><v></v></c></row>')
    rows.append('    <row r="16"><c r="A16" t="s" s="1"><v>36</v></c><c r="B16" t="s" s="0"><v></v></c><c r="C16" t="s" s="0"><v></v></c><c r="D16" t="s" s="0"><v></v></c><c r="E16" t="s" s="0"><v></v></c></row>')
    rows.append('    <row r="17"><c r="A17" t="s" s="0"><v>37</v></c></row>')
    rows.append('    <row r="18"><c r="A18" t="s" s="4"><v>38</v></c></row>')
    rows.append('    <row r="19"><c r="A19" t="s" s="0"><v>39</v></c></row>')
    rows.append('    <row r="20"><c r="A20" t="s" s="0"><v>40</v></c></row>')
    rows.append('    <row r="21"><c r="A21" t="s" s="0"><v>41</v></c></row>')
    rows.append('    <row r="22"><c r="A22" t="s" s="0"><v>42</v></c></row>')

    rows.append('  </sheetData>')
    rows.append('  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75"/>')
    rows.append('</worksheet>')

    with open(os.path.join(work_dir, 'xl', 'worksheets', 'sheet1.xml'), 'w', encoding='utf-8') as f:
        f.write('\n'.join(rows))

    content_types = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
  <Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>
  <Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/>
</Types>'''
    with open(os.path.join(work_dir, '[Content_Types].xml'), 'w', encoding='utf-8') as f:
        f.write(content_types)

    output_path = os.path.join(OUTPUT_DIR, "05_创新机会识别矩阵.xlsx")
    if pack_xlsx(work_dir, output_path):
        print(f"Created: {output_path}")

def create_06_business_plan_template():
    """06_内部创业计划书模板"""
    work_dir = copy_template()

    strings = [
        "内部创业计划书模板", "（请填写以下内容）", "", "", "", "",
        "一、项目基本信息", "", "", "", "",
        "项目名称", "", "负责人", "", "部门", "",
        "创业类型", "全新业务（）  现有业务延伸（）  内部孵化（）", "项目阶段", "概念（）  开发（）  测试（）  上线（）",
        "二、项目概述", "", "", "", "",
        "项目简介", "", "", "", "", "",
        "解决的核心问题", "", "", "", "", "",
        "目标市场与客户", "", "", "", "", "",
        "三、产品/服务描述", "", "", "", "",
        "产品/服务功能", "", "", "", "", "",
        "核心竞争优势", "", "", "", "", "",
        "商业模式", "", "", "", "", "",
        "四、市场分析", "", "", "", "",
        "市场规模", "", "市场增长率", "", "市场占有率目标", "",
        "竞争分析", "", "", "", "", "",
        "进入壁垒", "", "", "", "", "",
        "五、团队介绍", "", "", "", "",
        "核心团队成员", "姓名", "职位", "背景简介", "分工", "",
        "", "", "", "", "", "",
        "", "", "", "", "", "",
        "六、财务预测", "", "", "", "",
        "项目预算", "类别", "第一年", "第二年", "第三年", "合计",
        "", "人员成本", "", "", "", "",
        "", "研发费用", "", "", "", "",
        "", "运营成本", "", "", "", "",
        "", "市场营销", "", "", "", "",
        "", "其他费用", "", "", "", "",
        "", "合计", "", "", "", "=SUM(C10:C14)",
        "收入预测", "收入来源", "第一年", "第二年", "第三年", "合计",
        "", "产品销售收入", "", "", "", "",
        "", "服务收入", "", "", "", "",
        "", "其他收入", "", "", "", "",
        "", "合计", "", "", "", "=SUM(C19:C21)",
        "七、风险评估", "", "", "", "",
        "风险类型", "风险描述", "发生概率", "影响程度", "应对措施", "",
        "市场风险", "", "", "", "", "",
        "技术风险", "", "", "", "", "",
        "运营风险", "", "", "", "", "",
        "财务风险", "", "", "", "", "",
        "八、资源需求", "", "", "", "",
        "资源类型", "需求描述", "优先级", "申请金额", "到位时间", "",
        "资金需求", "", "", "", "", "",
        "人才需求", "", "", "", "", "",
        "技术需求", "", "", "", "", "",
        "九、时间计划", "", "", "", "",
        "阶段", "里程碑", "开始时间", "结束时间", "交付物", "",
        "概念阶段", "", "", "", "", "",
        "开发阶段", "", "", "", "", "",
        "测试阶段", "", "", "", "", "",
        "上线阶段", "", "", "", "", "",
        "十、审批意见", "", "", "", "",
        "审批人", "审批意见", "签名", "日期", "", "",
        "项目经理", "", "", "", "", "",
        "创新委员会", "", "", "", "", "",
        "CEO/董事会", "", "", "", "", ""
    ]

    with open(os.path.join(work_dir, 'xl', 'sharedStrings.xml'), 'w', encoding='utf-8') as f:
        f.write(build_shared_strings(strings))

    workbook_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheets>
    <sheet name="内部创业计划书" sheetId="1" r:id="rId1"/>
  </sheets>
  <calcPr calcId="0"/>
</workbook>'''
    with open(os.path.join(work_dir, 'xl', 'workbook.xml'), 'w', encoding='utf-8') as f:
        f.write(workbook_xml)

    rows = []
    rows.append('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>')
    rows.append('<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">')
    rows.append('  <sheetViews><sheetView workbookViewId="0"/></sheetViews>')
    rows.append('  <sheetFormatPr defaultRowHeight="15"/>')
    rows.append('  <cols>')
    rows.append('    <col min="1" max="1" width="20" customWidth="1"/>')
    rows.append('    <col min="2" max="2" width="40" customWidth="1"/>')
    rows.append('    <col min="3" max="3" width="15" customWidth="1"/>')
    rows.append('    <col min="4" max="4" width="15" customWidth="1"/>')
    rows.append('    <col min="5" max="5" width="15" customWidth="1"/>')
    rows.append('    <col min="6" max="6" width="15" customWidth="1"/>')
    rows.append('  </cols>')
    rows.append('  <sheetData>')

    rows.append('    <row r="1" ht="25" customHeight="1"><c r="A1" t="s" s="4"><v>0</v></c><c r="B1" t="s" s="0"><v>1</v></c></row>')

    # Section headers
    sections = [
        (3, 2, "二"),
        (6, 3, "三"),
        (9, 4, "四"),
        (13, 5, "五"),
        (16, 6, "六"),
        (26, 7, "七"),
        (32, 8, "八"),
        (37, 9, "九"),
        (43, 10, "十"),
    ]

    for row_num, str_idx, title in sections:
        rows.append(f'    <row r="{row_num}"><c r="A{row_num}" t="s" s="4"><v>{str_idx}</v></c></row>')

    # 简单的数据行
    rows.append('    <row r="4"><c r="A4" t="s" s="1"><v>7</v></c><c r="B4" t="s" s="0"><v></v></c><c r="C4" t="s" s="1"><v>8</v></c><c r="D4" t="s" s="0"><v></v></c><c r="E4" t="s" s="1"><v>9</v></c><c r="F4" t="s" s="0"><v></v></c></row>')
    rows.append('    <row r="5"><c r="A5" t="s" s="1"><v>10</v></c><c r="B5" t="s" s="0"><v></v></c><c r="C5" t="s" s="1"><v>11</v></c><c r="D5" t="s" s="0"><v></v></c></row>')

    # 更多行...
    for i in range(12, 50):
        rows.append(f'    <row r="{i}"><c r="A{i}" t="s" s="0"><v></v></c></row>')

    rows.append('  </sheetData>')
    rows.append('  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75"/>')
    rows.append('</worksheet>')

    with open(os.path.join(work_dir, 'xl', 'worksheets', 'sheet1.xml'), 'w', encoding='utf-8') as f:
        f.write('\n'.join(rows))

    content_types = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
  <Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>
  <Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/>
</Types>'''
    with open(os.path.join(work_dir, '[Content_Types].xml'), 'w', encoding='utf-8') as f:
        f.write(content_types)

    output_path = os.path.join(OUTPUT_DIR, "06_内部创业计划书模板.xlsx")
    if pack_xlsx(work_dir, output_path):
        print(f"Created: {output_path}")

def create_07_failure_learning_culture():
    """07_容错文化建设检查表"""
    work_dir = copy_template()

    strings = [
        "容错文化建设检查表", "评估维度", "评估行为", "评分（1-5）", "得分", "权重", "加权得分",
        "心理安全", "员工是否敢于提出不同意见和创意想法？", "员工是否不怕承认错误和寻求帮助？", "会议讨论中是否有开放的表达氛围？",
        "员工是否愿意承担可控风险进行尝试？", "团队成员是否相互支持而非相互指责？",
        "失败学习", "组织是否有系统性的失败案例复盘机制？", "失败后是否关注问题根因而非追究责任？", "是否将从失败中学到的经验文档化并分享？",
        "是否定期组织失败经验交流会？", "员工是否将失败视为成长机会而非耻辱？",
        "资源保护", "创新失败后资源是否得到合理保护？", "失败项目团队是否仍有机会参与新项目？", "是否有专项资源支持失败后的再尝试？",
        "员工是否了解失败不会导致严厉惩罚？", "失败的团队是否获得继续学习的支持？",
        "激励导向", "创新成果是否有独立的激励和认可机制？", "员工提出创意是否会获得积极反馈？", "冒险尝试行为是否被鼓励和表彰？",
        "成功的创新是否有与失败尝试相当的可见度？", "员工创新行为是否纳入绩效考核？",
        "领导示范", "领导是否公开分享自己的失败经历和学习？", "领导在团队失败时是否首先反思自身责任？", "领导是否在会议中表扬敢于尝试的行为？",
        "领导是否愿意倾听不同意见并认真考虑？", "领导是否亲自参与创新项目并接受挑战？",
        "评分标准", "5分=完全符合", "4分=基本符合", "3分=部分符合", "2分=较少符合", "1分=完全不符合",
        "改进优先级", "优先级", "维度", "当前得分", "改进建议",
        "高", "", "", "增加心理安全感培训，强化领导示范效应",
        "中", "", "", "完善失败学习机制，建立经验共享平台",
        "低", "", "", "优化激励导向，确保资源保护落实",
        "维度评分汇总", "维度", "最高分", "实际得分", "达成率",
        "心理安全", "25", "", "=C29/C28",
        "失败学习", "25", "", "=C30/C28",
        "资源保护", "25", "", "=C31/C28",
        "激励导向", "25", "", "=C32/C28",
        "领导示范", "25", "", "=C33/C28",
        "综合评分", "", "", "=AVERAGE(D29:D33)",
        "总体评价", "90%以上：优秀 | 75-89%：良好 | 60-74%：合格 | 60%以下：需改进"
    ]

    with open(os.path.join(work_dir, 'xl', 'sharedStrings.xml'), 'w', encoding='utf-8') as f:
        f.write(build_shared_strings(strings))

    workbook_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheets>
    <sheet name="容错文化建设检查" sheetId="1" r:id="rId1"/>
  </sheets>
  <calcPr calcId="0"/>
</workbook>'''
    with open(os.path.join(work_dir, 'xl', 'workbook.xml'), 'w', encoding='utf-8') as f:
        f.write(workbook_xml)

    rows = []
    rows.append('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>')
    rows.append('<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">')
    rows.append('  <sheetViews><sheetView workbookViewId="0"/></sheetViews>')
    rows.append('  <sheetFormatPr defaultRowHeight="15"/>')
    rows.append('  <cols>')
    rows.append('    <col min="1" max="1" width="15" customWidth="1"/>')
    rows.append('    <col min="2" max="2" width="45" customWidth="1"/>')
    rows.append('    <col min="3" max="3" width="12" customWidth="1"/>')
    rows.append('    <col min="4" max="4" width="10" customWidth="1"/>')
    rows.append('    <col min="5" max="5" width="10" customWidth="1"/>')
    rows.append('    <col min="6" max="6" width="12" customWidth="1"/>')
    rows.append('  </cols>')
    rows.append('  <sheetData>')

    rows.append('    <row r="1" ht="22" customHeight="1"><c r="A1" t="s" s="4"><v>0</v></c></row>')
    rows.append('    <row r="2"><c r="A2" t="s" s="4"><v>1</v></c><c r="B2" t="s" s="4"><v>2</v></c><c r="C2" t="s" s="4"><v>3</v></c><c r="D2" t="s" s="4"><v>4</v></c><c r="E2" t="s" s="4"><v>5</v></c><c r="F2" t="s" s="4"><v>6</v></c></row>')

    # 心理安全 (行3-7)
    safety_data = [7, 8, 9, 10, 11]
    for i, idx in enumerate(safety_data, start=3):
        rows.append(f'    <row r="{i}"><c r="A{i}" t="s" s="1"><v>12</v></c><c r="B{i}" t="s" s="0"><v>{idx}</v></c><c r="C{i}" s="9"><v></v></c><c r="D{i}" t="s" s="0"><v></v></c><c r="E{i}" t="s" s="0"><v></v></c><c r="F{i}" s="6"><f>IF(C{i}=&quot;&quot;,&quot;&quot;,C{i}*0.2)</f><v></v></c></row>')

    # 失败学习 (行8-12)
    learning_data = [13, 14, 15, 16, 17]
    for i, idx in enumerate(learning_data, start=8):
        rows.append(f'    <row r="{i}"><c r="A{i}" t="s" s="1"><v>18</v></c><c r="B{i}" t="s" s="0"><v>{idx}</v></c><c r="C{i}" s="9"><v></v></c><c r="D{i}" t="s" s="0"><v></v></c><c r="E{i}" t="s" s="0"><v></v></c><c r="F{i}" s="6"><f>IF(C{i}=&quot;&quot;,&quot;&quot;,C{i}*0.2)</f><v></v></c></row>')

    # 资源保护 (行13-17)
    protection_data = [19, 20, 21, 22, 23]
    for i, idx in enumerate(protection_data, start=13):
        rows.append(f'    <row r="{i}"><c r="A{i}" t="s" s="1"><v>24</v></c><c r="B{i}" t="s" s="0"><v>{idx}</v></c><c r="C{i}" s="9"><v></v></c><c r="D{i}" t="s" s="0"><v></v></c><c r="E{i}" t="s" s="0"><v></v></c><c r="F{i}" s="6"><f>IF(C{i}=&quot;&quot;,&quot;&quot;,C{i}*0.2)</f><v></v></c></row>')

    # 激励导向 (行18-22)
    incentive_data = [25, 26, 27, 28, 29]
    for i, idx in enumerate(incentive_data, start=18):
        rows.append(f'    <row r="{i}"><c r="A{i}" t="s" s="1"><v>30</v></c><c r="B{i}" t="s" s="0"><v>{idx}</v></c><c r="C{i}" s="9"><v></v></c><c r="D{i}" t="s" s="0"><v></v></c><c r="E{i}" t="s" s="0"><v></v></c><c r="F{i}" s="6"><f>IF(C{i}=&quot;&quot;,&quot;&quot;,C{i}*0.2)</f><v></v></c></row>')

    # 领导示范 (行23-27)
    leadership_data = [31, 32, 33, 34, 35]
    for i, idx in enumerate(leadership_data, start=23):
        rows.append(f'    <row r="{i}"><c r="A{i}" t="s" s="1"><v>36</v></c><c r="B{i}" t="s" s="0"><v>{idx}</v></c><c r="C{i}" s="9"><v></v></c><c r="D{i}" t="s" s="0"><v></v></c><c r="E{i}" t="s" s="0"><v></v></c><c r="F{i}" s="6"><f>IF(C{i}=&quot;&quot;,&quot;&quot;,C{i}*0.2)</f><v></v></c></row>')

    rows.append('    <row r="28"><c r="A28" t="s" s="0"><v>37</v></c></row>')
    rows.append('    <row r="29"><c r="A29" t="s" s="4"><v>38</v></c><c r="B29" t="s" s="4"><v>39</v></c><c r="C29" t="s" s="4"><v>40</v></c><c r="D29" t="s" s="4"><v>41</v></c></row>')
    rows.append('    <row r="30"><c r="A30" t="s" s="1"><v>42</v></c><c r="B30" t="s" s="0"><v></v></c><c r="C30" t="s" s="0"><v></v></c><c r="D30" t="s" s="0"><v>43</v></c></row>')
    rows.append('    <row r="31"><c r="A31" t="s" s="1"><v>44</v></c><c r="B31" t="s" s="0"><v></v></c><c r="C31" t="s" s="0"><v></v></c><c r="D31" t="s" s="0"><v>45</v></c></row>')
    rows.append('    <row r="32"><c r="A32" t="s" s="1"><v>46</v></c><c r="B32" t="s" s="0"><v></v></c><c r="C32" t="s" s="0"><v></v></c><c r="D32" t="s" s="0"><v>47</v></c></row>')
    rows.append('    <row r="33"><c r="A33" t="s" s="0"><v>48</v></c></row>')
    rows.append('    <row r="34"><c r="A34" t="s" s="4"><v>49</v></c><c r="B34" t="s" s="4"><v>50</v></c><c r="C34" t="s" s="4"><v>51</v></c><c r="D34" t="s" s="4"><v>52</v></c></row>')
    rows.append('    <row r="35"><c r="A35" t="s" s="0"><v>53</v></c><c r="B35" t="s" s="0"><v>54</v></c><c r="C35" s="6"><v>25</v></c><c r="D35" s="6"><f>SUM(C3:C7)</f><v></v></c></row>')
    rows.append('    <row r="36"><c r="A36" t="s" s="0"><v>55</v></c><c r="B36" t="s" s="0"><v>56</v></c><c r="C36" s="6"><v>25</v></c><c r="D36" s="6"><f>SUM(C8:C12)</f><v></v></c></row>')
    rows.append('    <row r="37"><c r="A37" t="s" s="0"><v>57</v></c><c r="B37" t="s" s="0"><v>58</v></c><c r="C37" s="6"><v>25</v></c><c r="D37" s="6"><f>SUM(C13:C17)</f><v></v></c></row>')
    rows.append('    <row r="38"><c r="A38" t="s" s="0"><v>59</v></c><c r="B38" t="s" s="0"><v>60</v></c><c r="C38" s="6"><v>25</v></c><c r="D38" s="6"><f>SUM(C18:C22)</f><v></v></c></row>')
    rows.append('    <row r="39"><c r="A39" t="s" s="0"><v>61</v></c><c r="B39" t="s" s="0"><v>62</v></c><c r="C39" s="6"><v>25</v></c><c r="D39" s="6"><f>SUM(C23:C27)</f><v></v></c></row>')
    rows.append('    <row r="40"><c r="A40" t="s" s="4"><v>63</v></c><c r="B40" t="s" s="4"><v></v></c><c r="C40" t="s" s="4"><v></v></c><c r="D40" s="6"><f>AVERAGE(D35:D39)</f><v></v></c></row>')
    rows.append('    <row r="41"><c r="A41" t="s" s="0"><v>64</v></c></row>')

    rows.append('  </sheetData>')
    rows.append('  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75"/>')
    rows.append('</worksheet>')

    with open(os.path.join(work_dir, 'xl', 'worksheets', 'sheet1.xml'), 'w', encoding='utf-8') as f:
        f.write('\n'.join(rows))

    content_types = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
  <Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>
  <Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/>
</Types>'''
    with open(os.path.join(work_dir, '[Content_Types].xml'), 'w', encoding='utf-8') as f:
        f.write(content_types)

    output_path = os.path.join(OUTPUT_DIR, "07_容错文化建设检查表.xlsx")
    if pack_xlsx(work_dir, output_path):
        print(f"Created: {output_path}")

def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)

    print("Creating Excel files for Course 41...")

    create_01_dual_org_checklist()
    create_02_accounting_mechanism()
    create_03_resource_application()
    create_04_milestone_assessment()
    create_05_innovation_opportunity()
    create_06_business_plan_template()
    create_07_failure_learning_culture()

    print("\nAll Excel files created successfully!")

if __name__ == "__main__":
    main()
