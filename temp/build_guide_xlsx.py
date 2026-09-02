#!/usr/bin/env python3
import shutil, os, subprocess

# Copy minimal template fresh
shutil.rmtree('/tmp/xlsx_work', ignore_errors=True)
shutil.copytree('C:/Users/Administrator/.claude/skills/Excel表格处理/templates/minimal_xlsx', '/tmp/xlsx_work')

work_dir = '/tmp/xlsx_work/xl'
os.makedirs(work_dir + '/worksheets', exist_ok=True)

def esc(s):
    return s.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;').replace('"', '&quot;')

# workbook.xml - single sheet for guide
wb = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><sheets>'
wb += '<sheet name="表单使用指引" sheetId="1" r:id="rId1"/>'
wb += '</sheets></workbook>'
with open(work_dir + '/workbook.xml', 'w', encoding='utf-8') as f: f.write(wb)

# workbook.xml.rels
rels = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">'
rels += '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>'
rels += '<Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>'
rels += '<Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml"/>'
rels += '</Relationships>'
with open(work_dir + '/_rels/workbook.xml.rels', 'w', encoding='utf-8') as f: f.write(rels)

# Content_Types.xml
ct = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">'
ct += '<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>'
ct += '<Default Extension="xml" ContentType="application/xml"/>'
ct += '<Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>'
ct += '<Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>'
ct += '<Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/>'
ct += '<Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>'
ct += '</Types>'
with open('/tmp/xlsx_work/[Content_Types].xml', 'w', encoding='utf-8') as f: f.write(ct)

# Shared strings for guide
strings = [
    'AI能力认证与团队沉淀：表单使用指引', '版本：V1.0', '最后更新：2026年8月',
    '一、表单概览', '本工具包包含10张工具表单，用于支持AI能力认证与团队沉淀工作',
    '表单编号', '表单名称', '核心用途', '使用场景', '负责人',
    'F1', '岗位AI能力认证标准表', '定义AI能力标准', '能力认证启动', 'HR/AI Champion',
    'F2', '能力认证评分细则表', '行为锚定评分', '认证评估', '评估官',
    'F3', '部门AI经验分享机制方案', '设计分享机制', '机制建设', '部门负责人',
    'F4', 'AI Champion职责与激励表', '明确Champion职责', '选拔任命', '部门负责人',
    'F5', '部门AI知识库建设方案', '规划知识库', '知识沉淀', 'AI Champion',
    'F6', '知识沉淀三层结构图', '理解知识层次', '知识整理', 'AI Champion',
    'F7', '保障体系设计检查表', '检查保障完整性', '体系建设', '部门负责人',
    'F8', '激励与考核机制表', '设计激励考核', '激励实施', 'HR/部门负责人',
    'F9', '我的AI能力沉淀计划', '个人能力规划', '个人发展', '员工本人',
    'F10', '团队AI能力台账', '管理团队能力', '持续管理', 'AI Champion',
    '二、表单使用流程', '建议按以下顺序使用表单',
    '步骤', '表单', '说明',
    '第一步', 'F1岗位AI能力认证标准表', '确定本岗位需要的AI能力维度和等级要求',
    '第二步', 'F2能力认证评分细则表', '根据行为描述进行自评或他评',
    '第三步', 'F8激励与考核机制表', '设计配套的激励和考核机制',
    '第四步', 'F3经验分享机制方案', '建立部门内的经验分享机制',
    '第五步', 'F4 AI Champion职责与激励表', '选拔和明确AI Champion职责',
    '第六步', 'F5+F6知识库建设方案', '建设部门AI知识库',
    '第七步', 'F7保障体系设计检查表', '检查组织保障是否到位',
    '第八步', 'F9个人能力沉淀计划', '每位员工制定个人发展计划',
    '第九步', 'F10团队AI能力台账', '持续跟踪和管理团队能力',
    '三、关键成功要素',
    '要素', '说明',
    '高层支持', '需要部门负责人或高管的支持和推动',
    '资源投入', '保障培训时间、工具采购、知识库平台等资源',
    '持续迭代', '根据实施效果持续优化表单和流程',
    '数据驱动', '通过F10台账数据驱动决策和改进',
    '四、常见问题', 'Q: 如何确定岗位的AI能力等级要求？', 'A: 参考F1标准表，根据岗位工作性质和对AI的依赖程度确定',
    'Q: AI Champion需要多少时间投入？', 'A: 建议投入20%工作时间，具体视部门规模而定',
    'Q: 知识库内容从哪来？', 'A: 主要来自F3分享活动的沉淀，以及日常工作中的案例',
    'Q: 认证多久进行一次？', 'A: 建议每季度一次，年度全面评估',
    '五、配套资源', 'HTML打印版：全流程工具表单-html打印版', '包含10张表单的A4打印版，可直接打印使用',
    'Excel空表：配套表单和指引-Excel版', '包含所有表单的Excel版本，方便电子化填写',
    '六、版本历史', 'V1.0 (2026年8月)', '初始版本发布',
]

si = f'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="{len(strings)}" uniqueCount="{len(strings)}">'
for s in strings:
    si += f'<si><t>{esc(s)}</t></si>'
si += '</sst>'
with open(work_dir + '/sharedStrings.xml', 'w', encoding='utf-8') as f: f.write(si)

# Sheet content
sheet = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"/></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols>
    <col min="1" max="1" width="15" customWidth="1"/>
    <col min="2" max="2" width="30" customWidth="1"/>
    <col min="3" max="3" width="40" customWidth="1"/>
  </cols>
  <sheetData>
    <row r="1"><c r="A1" t="s" s="4"><v>0</v></c></row>
    <row r="2"><c r="A2" t="s" s="1"><v>1</v></c><c r="C2" t="s" s="1"><v>2</v></c></row>
    <row r="3"><c r="A3" t="s" s="4"><v>3</v></c></row>
    <row r="4"><c r="A4" t="s" s="4"><v>4</v></c></row>
    <row r="5"><c r="A5" t="s" s="4"><v>5</v></c><c r="B5" t="s" s="4"><v>6</v></c><c r="C5" t="s" s="4"><v>7</v></c><c r="D5" t="s" s="4"><v>8</v></c><c r="E5" t="s" s="4"><v>9</v></c></row>
    <row r="6"><c r="A6" t="s" s="1"><v>10</v></c><c r="B6" t="s" s="1"><v>11</v></c><c r="C6" t="s" s="1"><v>12</v></c><c r="D6" t="s" s="1"><v>13</v></c><c r="E6" t="s" s="1"><v>14</v></c></row>
    <row r="7"><c r="A7" t="s" s="1"><v>15</v></c><c r="B7" t="s" s="1"><v>16</v></c><c r="C7" t="s" s="1"><v>17</v></c><c r="D7" t="s" s="1"><v>18</v></c><c r="E7" t="s" s="1"><v>19</v></c></row>
    <row r="8"><c r="A8" t="s" s="1"><v>20</v></c><c r="B8" t="s" s="1"><v>21</v></c><c r="C8" t="s" s="1"><v>22</v></c><c r="D8" t="s" s="1"><v>23</v></c><c r="E8" t="s" s="1"><v>24</v></c></row>
    <row r="9"><c r="A9" t="s" s="1"><v>25</v></c><c r="B9" t="s" s="1"><v>26</v></c><c r="C9" t="s" s="1"><v>27</v></c><c r="D9" t="s" s="1"><v>28</v></c><c r="E9" t="s" s="1"><v>29</v></c></row>
    <row r="10"><c r="A10" t="s" s="1"><v>30</v></c><c r="B10" t="s" s="1"><v>31</v></c><c r="C10" t="s" s="1"><v>32</v></c><c r="D10" t="s" s="1"><v>33</v></c><c r="E10" t="s" s="1"><v>34</v></c></row>
    <row r="11"><c r="A11" t="s" s="1"><v>35</v></c><c r="B11" t="s" s="1"><v>36</v></c><c r="C11" t="s" s="1"><v>37</v></c><c r="D11" t="s" s="1"><v>38</v></c><c r="E11" t="s" s="1"><v>39</v></c></row>
    <row r="12"><c r="A12" t="s" s="1"><v>40</v></c><c r="B12" t="s" s="1"><v>41</v></c><c r="C12" t="s" s="1"><v>42</v></c><c r="D12" t="s" s="1"><v>43</v></c><c r="E12" t="s" s="1"><v>44</v></c></row>
    <row r="13"><c r="A13" t="s" s="1"><v>45</v></c><c r="B13" t="s" s="1"><v>46</v></c><c r="C13" t="s" s="1"><v>47</v></c><c r="D13" t="s" s="1"><v>48</v></c><c r="E13" t="s" s="1"><v>49</v></c></row>
    <row r="14"><c r="A14" t="s" s="1"><v>50</v></c><c r="B14" t="s" s="1"><v>51</v></c><c r="C14" t="s" s="1"><v>52</v></c><c r="D14" t="s" s="1"><v>53</v></c><c r="E14" t="s" s="1"><v>54</v></c></row>
    <row r="15"><c r="A15" t="s" s="1"><v>55</v></c><c r="B15" t="s" s="1"><v>56</v></c><c r="C15" t="s" s="1"><v>57</v></c><c r="D15" t="s" s="1"><v>58</v></c><c r="E15" t="s" s="1"><v>59</v></c></row>
    <row r="16"><c r="A16" t="s" s="4"><v>60</v></c></row>
    <row r="17"><c r="A17" t="s" s="4"><v>61</v></c></row>
    <row r="18"><c r="A18" t="s" s="4"><v>62</v></c><c r="B18" t="s" s="4"><v>63</v></c><c r="C18" t="s" s="4"><v>64</v></c></row>
    <row r="19"><c r="A19" t="s" s="1"><v>65</v></c><c r="B19" t="s" s="1"><v>66</v></c><c r="C19" t="s" s="1"><v>67</v></c></row>
    <row r="20"><c r="A20" t="s" s="1"><v>68</v></c><c r="B20" t="s" s="1"><v>69</v></c><c r="C20" t="s" s="1"><v>70</v></c></row>
    <row r="21"><c r="A21" t="s" s="1"><v>71</v></c><c r="B21" t="s" s="1"><v>72</v></c><c r="C21" t="s" s="1"><v>73</v></c></row>
    <row r="22"><c r="A22" t="s" s="1"><v>74</v></c><c r="B22" t="s" s="1"><v>75</v></c><c r="C22" t="s" s="1"><v>76</v></c></row>
    <row r="23"><c r="A23" t="s" s="1"><v>77</v></c><c r="B23" t="s" s="1"><v>78</v></c><c r="C23" t="s" s="1"><v>79</v></c></row>
    <row r="24"><c r="A24" t="s" s="1"><v>80</v></c><c r="B24" t="s" s="1"><v>81</v></c><c r="C24" t="s" s="1"><v>82</v></c></row>
    <row r="25"><c r="A25" t="s" s="1"><v>83</v></c><c r="B25" t="s" s="1"><v>84</v></c><c r="C25" t="s" s="1"><v>85</v></c></row>
    <row r="26"><c r="A26" t="s" s="1"><v>86</v></c><c r="B26" t="s" s="1"><v>87</v></c><c r="C26" t="s" s="1"><v>88</v></c></row>
    <row r="27"><c r="A27" t="s" s="1"><v>89</v></c><c r="B27" t="s" s="1"><v>90</v></c><c r="C27" t="s" s="1"><v>91</v></c></row>
    <row r="28"><c r="A28" t="s" s="1"><v>92</v></c><c r="B28" t="s" s="1"><v>93</v></c><c r="C28" t="s" s="1"><v>94</v></c></row>
    <row r="29"><c r="A29" t="s" s="4"><v>95</v></c></row>
    <row r="30"><c r="A30" t="s" s="4"><v>96</v></c><c r="B30" t="s" s="4"><v>97</v></c></row>
    <row r="31"><c r="A31" t="s" s="1"><v>98</v></c><c r="B31" t="s" s="1"><v>99</v></c></row>
    <row r="32"><c r="A32" t="s" s="1"><v>100</v></c><c r="B32" t="s" s="1"><v>101</v></c></row>
    <row r="33"><c r="A33" t="s" s="1"><v>102</v></c><c r="B33" t="s" s="1"><v>103</v></c></row>
    <row r="34"><c r="A34" t="s" s="1"><v>104</v></c><c r="B34" t="s" s="1"><v>105</v></c></row>
    <row r="35"><c r="A35" t="s" s="4"><v>106</v></c></row>
    <row r="36"><c r="A36" t="s" s="4"><v>107</v></c><c r="B36" t="s" s="4"><v>108</v></c><c r="C36" t="s" s="4"><v>109</v></c></row>
    <row r="37"><c r="A37" t="s" s="1"><v>110</v></c><c r="B37" t="s" s="1"><v></v></c><c r="C37" t="s" s="1"><v></v></c></row>
    <row r="38"><c r="A38" t="s" s="1"><v>111</v></c><c r="B38" t="s" s="1"><v></v></c><c r="C38" t="s" s="1"><v></v></c></row>
    <row r="39"><c r="A39" t="s" s="1"><v>112</v></c><c r="B39" t="s" s="1"><v></v></c><c r="C39" t="s" s="1"><v></v></c></row>
    <row r="40"><c r="A40" t="s" s="1"><v>113</v></c><c r="B40" t="s" s="1"><v></v></c><c r="C40" t="s" s="1"><v></v></c></row>
    <row r="41"><c r="A41" t="s" s="4"><v>114</v></c></row>
    <row r="42"><c r="A42" t="s" s="4"><v>115</v></c><c r="B42" t="s" s="4"><v>116</v></c></row>
    <row r="43"><c r="A43" t="s" s="1"><v>117</v></c><c r="B43" t="s" s="1"><v></v></c></row>
    <row r="44"><c r="A44" t="s" s="1"><v>118</v></c><c r="B44" t="s" s="1"><v></v></c></row>
    <row r="45"><c r="A45" t="s" s="1"><v>119</v></c><c r="B45" t="s" s="1"><v></v></c></row>
    <row r="46"><c r="A46" t="s" s="1"><v>120</v></c><c r="B46" t="s" s="1"><v></v></c></row>
    <row r="47"><c r="A47" t="s" s="4"><v>121</v></c></row>
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

with open(work_dir + '/worksheets/sheet1.xml', 'w', encoding='utf-8') as f: f.write(sheet)

print('Guide sheet created')

# Pack
result = subprocess.run(['python3', 'C:/Users/Administrator/.claude/skills/Excel表格处理/scripts/xlsx_pack.py', '/tmp/xlsx_work/', 'D:/新课开发/AI落地/8.AI能力认证与团队沉淀：从个人熟练到组织资产/配套表单和指引-Excel版/表单使用指引.xlsx'], capture_output=True, text=True)
print(result.stdout)
if result.returncode != 0:
    print('Error:', result.stderr)
else:
    print('Guide Excel file packed successfully!')