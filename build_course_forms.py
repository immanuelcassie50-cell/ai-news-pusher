#!/usr/bin/env python3
"""
Build all course forms for "人机协同权责边界与决策分级：AI出内容谁把关效果与合规"
Using the XML template approach (no openpyxl for writing).
"""

import os
import shutil
import subprocess
import sys

SKILL_DIR = "C:/Users/Administrator/.claude/skills/Excel表格处理"
TEMPLATE_DIR = f"{SKILL_DIR}/templates/minimal_xlsx"
SCRIPTS_DIR = f"{SKILL_DIR}/scripts"
OUTPUT_DIR = "D:/新课开发/HR/培训/02_人机协同权责边界与决策分级：AI出内容谁把关效果与合规/全流程工具表单"

def run_shared_strings(strings, output_path):
    """Build sharedStrings.xml from a list of strings."""
    result = subprocess.run(
        [sys.executable, f"{SCRIPTS_DIR}/shared_strings_builder.py"] + list(strings),
        capture_output=True, text=True
    )
    if result.returncode != 0:
        print(f"Error building shared strings: {result.stderr}")
        sys.exit(1)
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(result.stdout)

def pack_xlsx(work_dir, output_path):
    """Pack directory to xlsx using the skill's pack script."""
    result = subprocess.run(
        [sys.executable, f"{SCRIPTS_DIR}/xlsx_pack.py", work_dir, output_path],
        capture_output=True, text=True
    )
    if result.returncode != 0:
        print(f"Error packing xlsx: {result.stderr}")
        sys.exit(1)
    print(f"  Packed: {output_path}")

def copy_template():
    """Copy minimal template to work directory."""
    work_dir = "/tmp/xlsx_work"
    if os.path.exists(work_dir):
        shutil.rmtree(work_dir)
    shutil.copytree(TEMPLATE_DIR, work_dir)
    return work_dir

def build_content_risk_form():
    """Build 01_内容风险评估表.xlsx"""
    print("Building 01_内容风险评估表.xlsx...")
    work_dir = copy_template()

    strings = [
        "人机协同内容风险评估表", "评估说明", "使用本表评估AI生成内容的风险等级。",
        "第一步：逐项评估", "第二步：计算总分", "第三步：确定风险等级", "第四步：查阅建议",
        "风险因素", "评估维度", "评分标准", "得分", "权重", "加权得分", "说明",
        "一、信息来源可靠性", "1. 官方/权威机构", "2. 知名媒体/专业平台", "3. 一般网络来源", "4. 来源不明/难以核实",
        "二、内容类型", "1. 客观事实/数据", "2. 行业分析/观点", "3. 建议/推荐/预测", "4. 涉及重大决策/敏感领域",
        "三、目标受众", "1. 内部员工（通用知识）", "2. 客户/合作伙伴", "3. 公众/媒体", "4. 监管机构/敏感群体",
        "四、影响程度", "1. 无实际影响（仅参考）", "2. 轻微影响（形象/效率）", "3. 中度影响（业务/财务）", "4. 重大影响（合规/法律）",
        "五、紧急程度", "1. 长期有效（无时效性）", "2. 短期内有效（1周-3月）", "3. 时效性较强（1天-1周）", "4. 实时/突发事件",
        "六、独家性要求", "1. 通用公开信息整合", "2. 半独家（有加工处理）", "3. 较高独家性要求", "4. 完全独家/原创要求",
        "风险评分计算", "总分", "风险等级", "高风险（80分以上）", "中风险（50-79分）", "低风险（50分以下）",
        "高风险应对建议", "内容必须由业务专家深度审核，必要时召开专家评审会",
        "中风险应对建议", "内容需经过专业审核人员复核，重点关注数据和引用来源",
        "低风险应对建议", "可由AI直接生成，但需保留人工抽查机制",
        "使用示例", "假设场景：AI生成了一份行业分析报告，目标受众是公司高管",
        "信息来源：知名行业研究机构（得分2）", "内容类型：行业分析观点（得分2）",
        "目标受众：公司高管（得分2）", "影响程度：影响业务决策（得分3）",
        "紧急程度：短期内有效（得分2）", "独家性：半独家加工（得分2）",
        "加权总分：2×15+2×20+2×25+3×25+2×10+2×5 = 280", "风险等级：中风险",
        "审核方式：专业审核人员复核", "权重设定", "信息来源可靠性", "15%",
        "内容类型", "20%", "目标受众", "25%", "影响程度", "25%",
        "紧急程度", "10%", "独家性要求", "5%", "合计", "100%",
        "填写日期", "评估人", "审核人", "备注"
    ]

    run_shared_strings(strings, f"{work_dir}/xl/sharedStrings.xml")

    # Build sheet1.xml with instructions
    sheet1 = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView tabSelected="1" workbookViewId="0">
      <pane ySplit="18" topLeftCell="A19" activePane="bottomLeft" state="frozen"/>
    </sheetView>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25"
    xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols>
    <col min="1" max="1" width="18" customWidth="1"/>
    <col min="2" max="2" width="42" customWidth="1"/>
    <col min="3" max="3" width="12" customWidth="1"/>
    <col min="4" max="4" width="12" customWidth="1"/>
    <col min="5" max="5" width="12" customWidth="1"/>
    <col min="6" max="6" width="30" customWidth="1"/>
  </cols>
  <sheetData>
    <row r="1">
      <c r="A1" t="s" s="4"><v>0</v></c>
    </row>
    <row r="2">
      <c r="A2" t="s" s="4"><v>1</v></c>
    </row>
    <row r="3">
      <c r="A3" t="s" s="0"><v>2</v></c>
    </row>
    <row r="4">
      <c r="A4" t="s" s="0"><v>3</v></c>
    </row>
    <row r="5">
      <c r="A5" t="s" s="0"><v>4</v></c>
    </row>
    <row r="6">
      <c r="A6" t="s" s="0"><v>5</v></c>
    </row>
    <row r="7">
      <c r="A7" t="s" s="0"><v>6</v></c>
    </row>
    <row r="8">
      <c r="A8" t="s" s="4"><v>7</v></c>
      <c r="B8" t="s" s="4"><v>8</v></c>
      <c r="C8" t="s" s="4"><v>9</v></c>
      <c r="D8" t="s" s="4"><v>10</v></c>
      <c r="E8" t="s" s="4"><v>11</v></c>
      <c r="F8" t="s" s="4"><v>12</v></c>
    </row>
    <row r="9">
      <c r="A9" t="s" s="4"><v>13</v></c>
      <c r="B9" t="s" s="0"><v>14</v></c>
      <c r="C9" t="s" s="7"><v>1</v></c>
      <c r="D9" t="s" s="7"><v>15</v></c>
      <c r="E9" t="s" s="8"><f>C9*D9</f><v></v></c>
      <c r="F9" t="s" s="0"><v>16</v></c>
    </row>
    <row r="10">
      <c r="A10" t="s" s="4"><v>17</v></c>
      <c r="B10" t="s" s="0"><v>18</v></c>
      <c r="C10" t="s" s="7"><v>2</v></c>
      <c r="D10" t="s" s="7"><v>15</v></c>
      <c r="E10" t="s" s="8"><f>C10*D10</f><v></v></c>
      <c r="F10" t="s" s="0"><v>19</v></c>
    </row>
    <row r="11">
      <c r="A11" t="s" s="4"><v>20</v></c>
      <c r="B11" t="s" s="0"><v>21</v></c>
      <c r="C11" t="s" s="7"><v>3</v></c>
      <c r="D11" t="s" s="7"><v>20</v></c>
      <c r="E11" t="s" s="8"><f>C11*D11</f><v></v></c>
      <c r="F11" t="s" s="0"><v>22</v></c>
    </row>
    <row r="12">
      <c r="A12" t="s" s="4"><v>23</v></c>
      <c r="B12" t="s" s="0"><v>24</v></c>
      <c r="C12" t="s" s="7"><v>4</v></c>
      <c r="D12" t="s" s="7"><v>25</v></c>
      <c r="E12" t="s" s="8"><f>C12*D12</f><v></v></c>
      <c r="F12" t="s" s="0"><v>26</v></c>
    </row>
    <row r="13">
      <c r="A13" t="s" s="4"><v>27</v></c>
      <c r="B13" t="s" s="0"><v>28</v></c>
      <c r="C13" t="s" s="7"><v>1</v></c>
      <c r="D13" t="s" s="7"><v>10</v></c>
      <c r="E13" t="s" s="8"><f>C13*D13</f><v></v></c>
      <c r="F13" t="s" s="0"><v>29</v></c>
    </row>
    <row r="14">
      <c r="A14" t="s" s="4"><v>30</v></c>
      <c r="B14" t="s" s="0"><v>31</v></c>
      <c r="C14" t="s" s="7"><v>2</v></c>
      <c r="D14" t="s" s="7"><v>5</v></c>
      <c r="E14" t="s" s="8"><f>C14*D14</f><v></v></c>
      <c r="F14" t="s" s="0"><v>32</v></c>
    </row>
    <row r="15">
      <c r="A15" t="s" s="4"><v>33</v></c>
      <c r="B15" t="s" s="4"><v>34</v></c>
      <c r="C15" t="s" s="7"><v>0</v></c>
      <c r="D15" t="s" s="7"><v>5</v></c>
      <c r="E15" t="s" s="8"><f>C15*D15</f><v></v></c>
      <c r="F15" t="s" s="0"><v>35</v></c>
    </row>
    <row r="16">
      <c r="A16" t="s" s="4"><v>36</v></c>
      <c r="B16" t="s" s="4"><v>37</v></c>
      <c r="C16" t="s" s="7"><v>0</v></c>
      <c r="D16" t="s" s="7"><v>5</v></c>
      <c r="E16" t="s" s="8"><f>C16*D16</f><v></v></c>
      <c r="F16" t="s" s="0"><v>38</v></c>
    </row>
    <row r="17">
      <c r="A17" t="s" s="4"><v>39</v></c>
      <c r="B17" t="s" s="4"><v>40</v></c>
      <c r="C17" t="s" s="7"><v>0</v></c>
      <c r="D17" t="s" s="7"><v>5</v></c>
      <c r="E17" t="s" s="8"><f>C17*D17</f><v></v></c>
      <c r="F17" t="s" s="0"><v>41</v></c>
    </row>
    <row r="18">
      <c r="A18" t="s" s="4"><v>42</v></c>
      <c r="B18" t="s" s="4"><v>43</v></c>
      <c r="C18" t="s" s="7"><v>0</v></c>
      <c r="D18" t="s" s="7"><v>5</v></c>
      <c r="E18" t="s" s="8"><f>C18*D18</f><v></v></c>
      <c r="F18" t="s" s="0"><v>44</v></c>
    </row>
    <row r="19">
      <c r="A19" t="s" s="4"><v>45</v></c>
      <c r="C19" t="s" s="4"><v>46</v></c>
      <c r="E19" t="s" s="4"><v>11</v></c>
    </row>
    <row r="20">
      <c r="A20" t="s" s="0"><v>47</v></c>
      <c r="C20" t="s" s="6"><f>SUM(E9:E18)</f><v></v></c>
      <c r="E20" t="s" s="2"><f>IF(C20&gt;=80,"高风险",IF(C20&gt;=50,"中风险","低风险"))</f><v></v></c>
    </row>
    <row r="21">
      <c r="A21" t="s" s="4"><v>48</v></c>
      <c r="A22" t="s" s="0"><v>49</v></c>
    </row>
    <row r="23">
      <c r="A23" t="s" s="4"><v>50</v></c>
      <c r="A24" t="s" s="0"><v>51</v></c>
    </row>
    <row r="25">
      <c r="A25" t="s" s="4"><v>52</v></c>
      <c r="A26" t="s" s="0"><v>53</v></c>
    </row>
    <row r="27">
      <c r="A27" t="s" s="4"><v>54</v></c>
      <c r="A28" t="s" s="0"><v>55</v></c>
    </row>
    <row r="29">
      <c r="A29" t="s" s="4"><v>56</v></c>
    </row>
    <row r="30">
      <c r="A30" t="s" s="0"><v>57</v></c>
    </row>
    <row r="31">
      <c r="A31" t="s" s="0"><v>58</v></c>
    </row>
    <row r="32">
      <c r="A32" t="s" s="0"><v>59</v></c>
    </row>
    <row r="33">
      <c r="A33" t="s" s="0"><v>60</v></c>
    </row>
    <row r="34">
      <c r="A34" t="s" s="0"><v>61</v></c>
    </row>
    <row r="35">
      <c r="A35" t="s" s="0"><v>62</v></c>
    </row>
    <row r="36">
      <c r="A36" t="s" s="0"><v>63</v></c>
    </row>
    <row r="37">
      <c r="A37" t="s" s="0"><v>64</v></c>
    </row>
    <row r="38">
      <c r="A38" t="s" s="0"><v>65</v></c>
    </row>
    <row r="39">
      <c r="A39" t="s" s="0"><v>66</v></c>
    </row>
    <row r="40">
      <c r="A40" t="s" s="4"><v>67</v></c>
    </row>
    <row r="41">
      <c r="A41" t="s" s="0"><v>68</v></c>
    </row>
    <row r="42">
      <c r="A42" t="s" s="0"><v>69</v></c>
    </row>
    <row r="43">
      <c r="A43" t="s" s="0"><v>70</v></c>
    </row>
    <row r="44">
      <c r="A44" t="s" s="0"><v>71</v></c>
    </row>
    <row r="45">
      <c r="A45" t="s" s="0"><v>72</v></c>
    </row>
    <row r="46">
      <c r="A46" t="s" s="0"><v>73</v></c>
    </row>
    <row r="47">
      <c r="A47" t="s" s="0"><v>74</v></c>
    </row>
    <row r="48">
      <c r="A48" t="s" s="0"><v>75</v></c>
    </row>
    <row r="49">
      <c r="A49" t="s" s="0"><v>76</v></c>
    </row>
    <row r="50">
      <c r="A50" t="s" s="4"><v>77</v></c>
    </row>
    <row r="51">
      <c r="A51" t="s" s="0"><v>78</v></c>
    </row>
    <row r="52">
      <c r="A52" t="s" s="0"><v>79</v></c>
    </row>
    <row r="53">
      <c r="A53" t="s" s="0"><v>80</v></c>
    </row>
    <row r="54">
      <c r="A54" t="s" s="0"><v>81</v></c>
    </row>
    <row r="55">
      <c r="A55" t="s" s="0"><v>82</v></c>
    </row>
    <row r="56">
      <c r="A56" t="s" s="0"><v>83</v></c>
    </row>
    <row r="57">
      <c r="A57" t="s" s="0"><v>84</v></c>
    </row>
    <row r="58">
      <c r="A58" t="s" s="0"><v>85</v></c>
    </row>
    <row r="59">
      <c r="A59" t="s" s="0"><v>86</v></c>
    </row>
    <row r="60">
      <c r="A60" t="s" s="0"><v>87</v></c>
    </row>
    <row r="61">
      <c r="A61" t="s" s="4"><v>88</v></c>
    </row>
    <row r="62">
      <c r="A62" t="s" s="1"><v></v></c>
    </row>
    <row r="63">
      <c r="A63" t="s" s="4"><v>89</v></c>
    </row>
    <row r="64">
      <c r="A64" t="s" s="1"><v></v></c>
    </row>
    <row r="65">
      <c r="A65" t="s" s="4"><v>90</v></c>
    </row>
    <row r="66">
      <c r="A66" t="s" s="1"><v></v></c>
    </row>
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

    with open(f"{work_dir}/xl/worksheets/sheet1.xml", 'w', encoding='utf-8') as f:
        f.write(sheet1)

    # Update workbook.xml to rename sheet
    workbook = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <fileVersion appName="xl" lastEdited="7" lowestEdited="7"/>
  <workbookPr defaultThemeVersion="166925"/>
  <bookViews>
    <workbookView xWindow="0" yWindow="0" windowWidth="20140" windowHeight="10960"/>
  </bookViews>
  <sheets>
    <sheet name="内容风险评估" sheetId="1" r:id="rId1"/>
  </sheets>
  <calcPr calcId="191029"/>
</workbook>'''

    with open(f"{work_dir}/xl/workbook.xml", 'w', encoding='utf-8') as f:
        f.write(workbook)

    pack_xlsx(work_dir, f"{OUTPUT_DIR}/01_内容风险评估表.xlsx")

def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    build_content_risk_form()
    print("All forms built successfully!")

if __name__ == "__main__":
    main()
