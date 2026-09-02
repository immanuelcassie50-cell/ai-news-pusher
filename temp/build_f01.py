#!/usr/bin/env python3
import os, shutil, subprocess

SKILL_DIR = "C:/Users/Administrator/.claude/skills/Excel表格处理"
TEMPLATE_DIR = SKILL_DIR + "/templates/minimal_xlsx"
OUTPUT_DIR = "D:/新课开发/商业讲师/全域经营/完整课程包/06-工具表单"
WORK_DIR = "/tmp/xlsx_f01"

os.makedirs(OUTPUT_DIR, exist_ok=True)
if os.path.exists(WORK_DIR): shutil.rmtree(WORK_DIR)
shutil.copytree(TEMPLATE_DIR, WORK_DIR)
print("Template copied")

# Shared strings
strings = [
    "全域经营自测诊断表",
    "请根据您企业的实际情况，选择最符合的选项（1=完全不符合，4=完全符合），系统将自动计算您企业所在的阶段。",
    "题号", "评估维度", "问题描述", "1分", "2分", "3分", "4分", "得分",
    "组织架构",
    "我们有一个跨部门的虚拟项目组来推进全域经营",
    "我们有一个正式的、专职的用户运营团队",
    "我们公司有专门的、由一把手授权的统筹协调机制",
    "我们有统一的数据中台或用户数据平台（CDP）",
    "部门协同",
    "各部门已有统一的用户数据标准和口径",
    "各部门使用同一套KPI或关联指标体系",
    "各部门会主动配合用户运营团队的工作",
    "我们有定期的跨部门协同会议或沟通机制",
    "运营能力",
    "我们已对用户进行分层并有针对性的运营策略",
    "我们已有统一的用户标签体系和画像系统",
    "我们在线上线下各触点提供一致的用户体验",
    "我们已有完整的用户生命周期管理体系",
    "总分", "您的企业处于：", "项目制阶段", "连点成线阶段", "全域融合阶段",
    "阶段说明",
    "项目制阶段：企业小步快跑试水，通常是临时拼凑的项目组，运营精细化程度低",
    "连点成线阶段：企业开始做用户分层精细化运营，有统一标签系统，用户运营团队成为有话语权的正式部门",
    "全域融合阶段：企业成立用户运营中心，搭建数据中台，各部门使用同一套KPI",
    "建议路径",
    "【项目制阶段】建议：①组建轻量化的虚拟项目团队；②选定一个具体场景快速验证；③明确一个负责人",
    "【连点成线阶段】建议：①将项目组升级为正式部门；②建立统一用户标签系统；③设计跨部门协同的考核机制",
    "【全域融合阶段】建议：①持续迭代数据中台；②深化跨部门KPI整合；③探索私域反哺公域的精准投放模型",
    "各阶段特征对照", "特征维度", "项目制阶段", "连点成线阶段", "全域融合阶段",
    "组织形态", "临时项目组，人员兼职", "正式用户运营部门，有话语权", "用户运营中心+数据中台",
    "数据基础", "无统一数据口径", "统一用户标签系统建立", "数据中台打通各部门数据",
    "KPI体系", "各部门独立核算", "关联指标体系建立", "统一KPI或共担指标",
    "跨部门协同", "需要配合时靠感情沟通", "有正式协同机制", "主动协同，利益共享",
    "用户运营深度", "成交为唯一目标", "用户分层精细化运营", "全生命周期管理",
    "诊断结果", "综合得分", "所在阶段", "核心建议", "下一步行动",
]
r = subprocess.run(["python3", SKILL_DIR+"/scripts/shared_strings_builder.py"] + strings, capture_output=True, text=True)
if r.returncode != 0:
    print("Strings error:", r.stderr)
else:
    with open(WORK_DIR + "/xl/sharedStrings.xml", "w", encoding="utf-8") as f:
        f.write(r.stdout)
    print("Shared strings done")

# workbook.xml
wb = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
<fileVersion appName="xl" lastEdited="7" lowestEdited="7"/>
<workbookPr defaultThemeVersion="166925"/>
<bookViews><workbookView xWindow="0" yWindow="0" windowWidth="20140" windowHeight="10960"/></bookViews>
<sheets>
<sheet name="企业阶段自测" sheetId="1" r:id="rId1"/>
<sheet name="各阶段特征对照" sheetId="2" r:id="rId4"/>
<sheet name="诊断结果与建议" sheetId="3" r:id="rId5"/>
</sheets>
<calcPr calcId="191029"/>
</workbook>'''
with open(WORK_DIR + "/xl/workbook.xml", "w", encoding="utf-8") as f:
    f.write(wb)

# workbook.xml.rels
rels = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>
<Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
<Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml"/>
<Relationship Id="rId4" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet2.xml"/>
<Relationship Id="rId5" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet3.xml"/>
</Relationships>'''
with open(WORK_DIR + "/xl/_rels/workbook.xml.rels", "w", encoding="utf-8") as f:
    f.write(rels)

# [Content_Types].xml
ct = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
<Default Extension="xml" ContentType="application/xml"/>
<Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
<Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
<Override PartName="/xl/worksheets/sheet2.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
<Override PartName="/xl/worksheets/sheet3.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
<Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>
<Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/>
</Types>'''
with open(WORK_DIR + "/[Content_Types].xml", "w", encoding="utf-8") as f:
    f.write(ct)
print("Config XMLs done")

# Sheet1
sheet1 = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
<sheetViews><sheetView workbookViewId="0"/></sheetViews>
<sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
<cols>
<col min="1" max="1" width="8" customWidth="1"/>
<col min="2" max="2" width="14" customWidth="1"/>
<col min="3" max="3" width="42" customWidth="1"/>
<col min="4" max="4" width="6" customWidth="1"/>
<col min="5" max="5" width="6" customWidth="1"/>
<col min="6" max="6" width="6" customWidth="1"/>
<col min="7" max="7" width="6" customWidth="1"/>
<col min="8" max="8" width="8" customWidth="1"/>
</cols>
<sheetData>
<row r="1" ht="30" customHeight="1"><c r="A1" t="s" s="4"><v>0</v></c></row>
<row r="2"><c r="A2" t="s" s="0"><v>1</v></c></row>
<row r="3" ht="18" customHeight="1"><c r="A3" t="s" s="4"><v>2</v></c><c r="B3" t="s" s="4"><v>3</v></c><c r="C3" t="s" s="4"><v>4</v></c><c r="D3" t="s" s="4"><v>5</v></c><c r="E3" t="s" s="4"><v>6</v></c><c r="F3" t="s" s="4"><v>7</v></c><c r="G3" t="s" s="4"><v>8</v></c><c r="H3" t="s" s="4"><v>9</v></c></row>
<row r="4"><c r="A4" t="s" s="4"><v>10</v></c></row>
<row r="5"><c r="A5" t="s" s="0"><v>11</v></c><c r="B5" t="s" s="0"><v>12</v></c><c r="D5" t="s" s="1"><v>1</v></c><c r="E5" t="s" s="1"><v>2</v></c><c r="F5" t="s" s="1"><v>3</v></c><c r="G5" t="s" s="1"><v>4</v></c><c r="H5" s="6"><f>SUM(D5:G5)</f><v></v></c></row>
<row r="6"><c r="A6" t="s" s="0"><v>11</v></c><c r="B6" t="s" s="0"><v>13</v></c><c r="D6" t="s" s="1"><v>1</v></c><c r="E6" t="s" s="1"><v>2</v></c><c r="F6" t="s" s="1"><v>3</v></c><c r="G6" t="s" s="1"><v>4</v></c><c r="H6" s="6"><f>SUM(D6:G6)</f><v></v></c></row>
<row r="7"><c r="A7" t="s" s="0"><v>11</v></c><c r="B7" t="s" s="0"><v>14</v></c><c r="D7" t="s" s="1"><v>1</v></c><c r="E7" t="s" s="1"><v>2</v></c><c r="F7" t="s" s="1"><v>3</v></c><c r="G7" t="s" s="1"><v>4</v></c><c r="H7" s="6"><f>SUM(D7:G7)</f><v></v></c></row>
<row r="8"><c r="A8" t="s" s="0"><v>11</v></c><c r="B8" t="s" s="0"><v>15</v></c><c r="D8" t="s" s="1"><v>1</v></c><c r="E8" t="s" s="1"><v>2</v></c><c r="F8" t="s" s="1"><v>3</v></c><c r="G8" t="s" s="1"><v>4</v></c><c r="H8" s="6"><f>SUM(D8:G8)</f><v></v></c></row>
<row r="9"><c r="A9" t="s" s="4"><v>16</v></c></row>
<row r="10"><c r="A10" t="s" s="0"><v>17</v></c><c r="B10" t="s" s="0"><v>18</v></c><c r="D10" t="s" s="1"><v>1</v></c><c r="E10" t="s" s="1"><v>2</v></c><c r="F10" t="s" s="1"><v>3</v></c><c r="G10" t="s" s="1"><v>4</v></c><c r="H10" s="6"><f>SUM(D10:G10)</f><v></v></c></row>
<row r="11"><c r="A11" t="s" s="0"><v>17</v></c><c r="B11" t="s" s="0"><v>19</v></c><c r="D11" t="s" s="1"><v>1</v></c><c r="E11" t="s" s="1"><v>2</v></c><c r="F11" t="s" s="1"><v>3</v></c><c r="G11" t="s" s="1"><v>4</v></c><c r="H11" s="6"><f>SUM(D11:G11)</f><v></v></c></row>
<row r="12"><c r="A12" t="s" s="0"><v>17</v></c><c r="B12" t="s" s="0"><v>20</v></c><c r="D12" t="s" s="1"><v>1</v></c><c r="E12" t="s" s="1"><v>2</v></c><c r="F12" t="s" s="1"><v>3</v></c><c r="G12" t="s" s="1"><v>4</v></c><c r="H12" s="6"><f>SUM(D12:G12)</f><v></v></c></row>
<row r="13"><c r="A13" t="s" s="0"><v>17</v></c><c r="B13" t="s" s="0"><v>21</v></c><c r="D13" t="s" s="1"><v>1</v></c><c r="E13" t="s" s="1"><v>2</v></c><c r="F13" t="s" s="1"><v>3</v></c><c r="G13" t="s" s="1"><v>4</v></c><c r="H13" s="6"><f>SUM(D13:G13)</f><v></v></c></row>
<row r="14"><c r="A14" t="s" s="4"><v>22</v></c></row>
<row r="15"><c r="A15" t="s" s="0"><v>23</v></c><c r="B15" t="s" s="0"><v>24</v></c><c r="D15" t="s" s="1"><v>1</v></c><c r="E15" t="s" s="1"><v>2</v></c><c r="F15" t="s" s="1"><v>3</v></c><c r="G15" t="s" s="1"><v>4</v></c><c r="H15" s="6"><f>SUM(D15:G15)</f><v></v></c></row>
<row r="16"><c r="A16" t="s" s="0"><v>23</v></c><c r="B16" t="s" s="0"><v>25</v></c><c r="D16" t="s" s="1"><v>1</v></c><c r="E16" t="s" s="1"><v>2</v></c><c r="F16" t="s" s="1"><v>3</v></c><c r="G16" t="s" s="1"><v>4</v></c><c r="H16" s="6"><f>SUM(D16:G16)</f><v></v></c></row>
<row r="17"><c r="A17" t="s" s="0"><v>23</v></c><c r="B17" t="s" s="0"><v>26</v></c><c r="D17" t="s" s="1"><v>1</v></c><c r="E17" t="s" s="1"><v>2</v></c><c r="F17" t="s" s="1"><v>3</v></c><c r="G17" t="s" s="1"><v>4</v></c><c r="H17" s="6"><f>SUM(D17:G17)</f><v></v></c></row>
<row r="18"><c r="A18" t="s" s="0"><v>23</v></c><c r="B18" t="s" s="0"><v>27</v></c><c r="D18" t="s" s="1"><v>1</v></c><c r="E18" t="s" s="1"><v>2</v></c><c r="F18" t="s" s="1"><v>3</v></c><c r="G18" t="s" s="1"><v>4</v></c><c r="H18" s="6"><f>SUM(D18:G18)</f><v></v></c></row>
<row r="19"><c r="A19" t="s" s="4"><v>28</v></c><c r="H19" t="s" s="4"><f>SUM(H5:H18)</f><v></v></c></row>
<row r="20"><c r="A20" t="s" s="4"><v>29</v></c><c r="H20" t="s" s="2"><f>IF(H19&lt;=24,&quot;项目制阶段&quot;,IF(H19&lt;=36,&quot;连点成线阶段&quot;,&quot;全域融合阶段&quot;))</f><v></v></c></row>
<row r="21"><c r="A21" t="s" s="4"><v>34</v></c></row>
<row r="22"><c r="A22" t="s" s="0"><f>IF(H20=&quot;项目制阶段&quot;,&quot;【项目制阶段】建议：①组建轻量化的虚拟项目团队；②选定一个具体场景快速验证；③明确一个负责人&quot;,IF(H20=&quot;连点成线阶段&quot;,&quot;【连点成线阶段】建议：①将项目组升级为正式部门；②建立统一用户标签系统；③设计跨部门协同的考核机制&quot;,&quot;【全域融合阶段】建议：①持续迭代数据中台；②深化跨部门KPI整合；③探索私域反哺公域的精准投放模型&quot;))</f><v></v></c></row>
</sheetData>
<dataValidations><dataValidation type="list" sqref="D5:G18" showInputMessage="1" prompt="请选择1-4分" promptTitle="评分"><formula1>1,2,3,4</formula1></dataValidation></dataValidations>
<pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''
with open(WORK_DIR + "/xl/worksheets/sheet1.xml", "w", encoding="utf-8") as f:
    f.write(sheet1)
print("Sheet1 done")

# Sheet2
sheet2 = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
<sheetViews><sheetView workbookViewId="0"/></sheetViews>
<sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
<cols><col min="1" max="1" width="16" customWidth="1"/><col min="2" max="2" width="28" customWidth="1"/><col min="3" max="3" width="28" customWidth="1"/><col min="4" max="4" width="28" customWidth="1"/></cols>
<sheetData>
<row r="1" ht="30" customHeight="1"><c r="A1" t="s" s="4"><v>59</v></c></row>
<row r="2"><c r="A2" t="s" s="4"><v>60</v></c><c r="B2" t="s" s="4"><v>61</v></c><c r="C2" t="s" s="4"><v>62</v></c><c r="D2" t="s" s="4"><v>63</v></c></row>
<row r="3"><c r="A3" t="s" s="0"><v>64</v></c><c r="B3" t="s" s="0"><v>65</v></c><c r="C3" t="s" s="0"><v>66</v></c><c r="D3" t="s" s="0"><v>67</v></c></row>
<row r="4"><c r="A4" t="s" s="0"><v>68</v></c><c r="B4" t="s" s="0"><v>69</v></c><c r="C4" t="s" s="0"><v>70</v></c><c r="D4" t="s" s="0"><v>71</v></c></row>
<row r="5"><c r="A5" t="s" s="0"><v>72</v></c><c r="B5" t="s" s="0"><v>73</v></c><c r="C5" t="s" s="0"><v>74</v></c><c r="D5" t="s" s="0"><v>75</v></c></row>
<row r="6"><c r="A6" t="s" s="0"><v>76</v></c><c r="B6" t="s" s="0"><v>77</v></c><c r="C6" t="s" s="0"><v>78</v></c><c r="D6" t="s" s="0"><v>79</v></c></row>
<row r="7"><c r="A7" t="s" s="0"><v>80</v></c><c r="B7" t="s" s="0"><v>81</v></c><c r="C7" t="s" s="0"><v>82</v></c><c r="D7" t="s" s="0"><v>83</v></c></row>
</sheetData>
<pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''
with open(WORK_DIR + "/xl/worksheets/sheet2.xml", "w", encoding="utf-8") as f:
    f.write(sheet2)
print("Sheet2 done")

# Sheet3
sheet3 = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
<sheetViews><sheetView workbookViewId="0"/></sheetViews>
<sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
<cols><col min="1" max="1" width="16" customWidth="1"/><col min="2" max="2" width="20" customWidth="1"/><col min="3" max="3" width="20" customWidth="1"/><col min="4" max="4" width="50" customWidth="1"/></cols>
<sheetData>
<row r="1" ht="30" customHeight="1"><c r="A1" t="s" s="4"><v>84</v></c></row>
<row r="2"><c r="A2" t="s" s="4"><v>85</v></c><c r="B2" t="s" s="3"><f>"企业阶段自测"!H19</f><v></v></c></row>
<row r="3"><c r="A3" t="s" s="4"><v>86</v></c><c r="B3" t="s" s="3"><f>"企业阶段自测"!H20</f><v></v></c></row>
<row r="4"><c r="A4" t="s" s="4"><v>87</v></c><c r="B4" t="s" s="0"><f>IF("企业阶段自测"!H20="项目制阶段","【项目制阶段】建议：①组建轻量化的虚拟项目团队；②选定一个具体场景快速验证；③明确一个负责人",IF("企业阶段自测"!H20="连点成线阶段","【连点成线阶段】建议：①将项目组升级为正式部门；②建立统一用户标签系统；③设计跨部门协同的考核机制","【全域融合阶段】建议：①持续迭代数据中台；②深化跨部门KPI整合；③探索私域反哺公域的精准投放模型"))</f><v></v></c></row>
<row r="5"><c r="A5" t="s" s="4"><v>88</v></c></row>
<row r="6"><c r="A6" t="s" s="0"><f>IF("企业阶段自测"!H20="项目制阶段","①组建轻量化的虚拟项目团队；②选定一个具体场景快速验证；③明确一个负责人",IF("企业阶段自测"!H20="连点成线阶段","①将项目组升级为正式部门；②建立统一用户标签系统；③设计跨部门协同的考核机制","①持续迭代数据中台；②深化跨部门KPI整合；③探索私域反哺公域的精准投放模型"))</f><v></v></c></row>
</sheetData>
<pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''
with open(WORK_DIR + "/xl/worksheets/sheet3.xml", "w", encoding="utf-8") as f:
    f.write(sheet3)
print("Sheet3 done")

# Pack
out_path = OUTPUT_DIR + "/01-全域经营自测诊断表.xlsx"
r = subprocess.run(["python3", SKILL_DIR+"/scripts/xlsx_pack.py", WORK_DIR, out_path], capture_output=True, text=True)
if r.returncode != 0:
    print("Pack error:", r.stderr)
else:
    print("Created:", out_path)