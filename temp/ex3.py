#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import os, shutil, subprocess

SKILL_DIR = r"C:\Users\Administrator\.claude\skills\Excel表格处理"
TEMPLATE_DIR = os.path.join(SKILL_DIR, "templates", "minimal_xlsx")
OUTPUT_DIR = r"D:\新课开发\管理学\41-组织内创业与创新孵化\工具表单"

def copy_template():
    work_dir = r"D:\CC\temp\xlsx_work"
    if os.path.exists(work_dir):
        shutil.rmtree(work_dir)
    shutil.copytree(TEMPLATE_DIR, work_dir)
    return work_dir

def build_shared_strings(strings):
    lines = ['<?xml version="1.0" encoding="UTF-8" standalone="yes"?>']
    lines.append('<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="{}" uniqueCount="{}">'.format(len(strings), len(strings)))
    for s in strings:
        esc = s.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")
        lines.append("  <si><t>{}</t></si>".format(esc))
    lines.append("</sst>")
    return "\n".join(lines)

def pack(path, out):
    r = subprocess.run(["python3", os.path.join(SKILL_DIR, "scripts", "xlsx_pack.py"), path, out], capture_output=True, text=True)
    if r.returncode != 0:
        print("Error: {}".format(r.stderr))
    return r.returncode == 0

def write(path, content):
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)

def create_file6():
    """内部创业计划书模板"""
    work_dir = copy_template()
    strings = [
        "内部创业计划书", "项目名称", "", "负责人", "", "日期", "",
        "一、项目概述", "项目名称", "使命与愿景", "解决的问题", "目标市场",
        "二、产品/服务描述", "核心功能", "差异化优势", "创新点", "发展阶段规划",
        "三、市场分析", "市场规模", "目标客户画像", "竞争分析", "市场进入策略",
        "四、商业模式", "收入来源", "定价策略", "渠道策略", "客户获取成本",
        "五、团队介绍", "核心成员", "角色", "背景与经验", "分工",
        "CEO", "", "", "",
        "CTO", "", "", "",
        "COO", "", "", "",
        "六、财务预测", "项目", "第1年", "第2年", "第3年",
        "收入", "0", "0", "0",
        "研发成本", "0", "0", "0",
        "市场成本", "0", "0", "0",
        "运营成本", "0", "0", "0",
        "利润", "=B19-SUM(B20:B23)", "=C19-SUM(C20:C23)", "=D19-SUM(D20:D23)",
        "累计利润", "=B24", "=E24+B25", "=F24+C25",
        "七、里程碑规划", "阶段", "时间", "关键指标", "所需资源",
        "概念验证", "Q1", "完成原型", "研发团队2人",
        "产品开发", "Q2-Q3", "Beta版本发布", "研发+市场团队",
        "市场验证", "Q4", "首批100客户", "市场预算",
        "规模化运营", "Year2", "月流水突破", "团队扩充",
        "八、资源需求", "资源类型", "数量", "预算", "到位时间",
        "人员", "5人", "600000", "Q1",
        "设备", "服务器等", "100000", "Q1",
        "市场推广", "线上渠道", "300000", "Q2",
        "办公空间", "20工位", "120000", "Q1",
        "九、风险评估与对策", "风险类型", "发生概率", "影响程度", "应对策略",
        "技术风险", "中", "高", "技术储备+外部合作",
        "市场风险", "高", "中", "小步快跑+快速迭代",
        "人才风险", "中", "高", "股权激励+文化凝聚",
        "政策风险", "低", "中", "合规审查+政策跟踪",
        "十、审批与授权", "审批节点", "审批人", "审批意见", "签字确认",
        "创新委员会初审", "", "", "",
        "CEO审批", "", "", "",
        "董事会审批", "", "", "",
        "创业者声明", "本人确认以上信息真实有效，愿意承担创业责任", "", "", ""
    ]
    write(os.path.join(work_dir, "xl", "sharedStrings.xml"), build_shared_strings(strings))

    wb = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><sheets><sheet name="内部创业计划书" sheetId="1" r:id="rId1"/></sheets><calcPr calcId="0"/></workbook>'
    write(os.path.join(work_dir, "xl", "workbook.xml"), wb)

    rows = ['<?xml version="1.0" encoding="UTF-8" standalone="yes"?><worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><sheetViews><sheetView workbookViewId="0"/></sheetViews><sheetFormatPr defaultRowHeight="15"/><cols><col min="1" max="1" width="20" customWidth="1"/><col min="2" max="2" width="35" customWidth="1"/><col min="3" max="3" width="20" customWidth="1"/><col min="4" max="4" width="20" customWidth="1"/><col min="5" max="5" width="15" customWidth="1"/></cols><sheetData>']
    rows.append('<row r="1" ht="25" customHeight="1"><c r="A1" t="s" s="4"><v>0</v></c></row>')
    rows.append('<row r="2"><c r="A2" t="s" s="1"><v>1</v></c><c r="B2" t="s" s="0"><v></v></c><c r="C2" t="s" s="1"><v>3</v></c><c r="D2" t="s" s="0"><v></v></c><c r="E2" t="s" s="1"><v>5</v></c><c r="F2" t="s" s="0"><v></v></c></row>')
    rows.append('<row r="3" ht="20" customHeight="1"><c r="A3" t="s" s="4"><v>6</v></c></row>')
    rows.append('<row r="4"><c r="A4" t="s" s="1"><v>7</v></c><c r="B4" t="s" s="0"><v></v></c><c r="C4" t="s" s="1"><v>8</v></c><c r="D4" t="s" s="0"><v></v></c><c r="E4" t="s" s="1"><v>9</v></c><c r="F4" t="s" s="0"><v></v></c></row>')
    rows.append('<row r="5"><c r="A5" t="s" s="1"><v>10</v></c><c r="B5" t="s" s="0"><v></v></c><c r="C5" t="s" s="1"><v>11</v></c><c r="D5" t="s" s="0"><v></v></c><c r="E5" t="s" s="1"><v>12</v></c><c r="F5" t="s" s="0"><v></v></c></row>')
    rows.append('<row r="6" ht="20" customHeight="1"><c r="A6" t="s" s="4"><v>13</v></c></row>')
    rows.append('<row r="7"><c r="A7" t="s" s="1"><v>14</v></c><c r="B7" t="s" s="0"><v></v></c><c r="C7" t="s" s="1"><v>15</v></c><c r="D7" t="s" s="0"><v></v></c><c r="E7" t="s" s="1"><v>16</v></c><c r="F7" t="s" s="0"><v></v></c></row>')
    rows.append('<row r="8"><c r="A8" t="s" s="1"><v>17</v></c><c r="B8" t="s" s="0"><v></v></c><c r="C8" t="s" s="1"><v>18</v></c><c r="D8" t="s" s="0"><v></v></c><c r="E8" t="s" s="1"><v>19</v></c><c r="F8" t="s" s="0"><v></v></c></row>')
    rows.append('<row r="9" ht="20" customHeight="1"><c r="A9" t="s" s="4"><v>20</v></c></row>')
    rows.append('<row r="10"><c r="A10" t="s" s="1"><v>21</v></c><c r="B10" t="s" s="0"><v></v></c><c r="C10" t="s" s="1"><v>22</v></c><c r="D10" t="s" s="0"><v></v></c><c r="E10" t="s" s="1"><v>23</v></c><c r="F10" t="s" s="0"><v></v></c></row>')
    rows.append('<row r="11"><c r="A11" t="s" s="1"><v>24</v></c><c r="B11" t="s" s="0"><v></v></c><c r="C11" t="s" s="1"><v>25</v></c><c r="D11" t="s" s="0"><v></v></c><c r="E11" t="s" s="1"><v>26</v></c><c r="F11" t="s" s="0"><v></v></c></row>')
    rows.append('<row r="12" ht="20" customHeight="1"><c r="A12" t="s" s="4"><v>27</v></c></row>')
    rows.append('<row r="13"><c r="A13" t="s" s="1"><v>28</v></c><c r="B13" t="s" s="0"><v></v></c><c r="C13" t="s" s="1"><v>29</v></c><c r="D13" t="s" s="0"><v></v></c><c r="E13" t="s" s="1"><v>30</v></c><c r="F13" t="s" s="0"><v></v></c></row>')
    rows.append('<row r="14"><c r="A14" t="s" s="1"><v>31</v></c><c r="B14" t="s" s="0"><v></v></c><c r="C14" t="s" s="1"><v>32</v></c><c r="D14" t="s" s="0"><v></v></c><c r="E14" t="s" s="1"><v>33</v></c><c r="F14" t="s" s="0"><v></v></c></row>')
    rows.append('<row r="15" ht="20" customHeight="1"><c r="A15" t="s" s="4"><v>34</v></c></row>')
    rows.append('<row r="16"><c r="A16" t="s" s="1"><v>35</v></c><c r="B16" t="s" s="0"><v></v></c><c r="C16" t="s" s="1"><v>36</v></c><c r="D16" t="s" s="0"><v></v></c><c r="E16" t="s" s="1"><v>37</v></c><c r="F16" t="s" s="0"><v></v></c></row>')
    rows.append('<row r="17"><c r="A17" t="s" s="1"><v>38</v></c><c r="B17" t="s" s="0"><v></v></c><c r="C17" t="s" s="1"><v>39</v></c><c r="D17" t="s" s="0"><v></v></c><c r="E17" t="s" s="1"><v>40</v></c><c r="F17" t="s" s="0"><v></v></c></row>')
    rows.append('<row r="18"><c r="A18" t="s" s="1"><v>41</v></c><c r="B18" t="s" s="0"><v></v></c><c r="C18" t="s" s="1"><v>42</v></c><c r="D18" t="s" s="0"><v></v></c><c r="E18" t="s" s="1"><v>43</v></c><c r="F18" t="s" s="0"><v></v></c></row>')
    rows.append('<row r="19"><c r="A19" t="s" s="1"><v>44</v></c><c r="B19" t="s" s="0"><v></v></c><c r="C19" t="s" s="0"><v></v></c><c r="D19" t="s" s="0"><v></v></c><c r="E19" t="s" s="0"><v></v></c><c r="F19" t="s" s="0"><v></v></c></row>')
    rows.append('<row r="20"><c r="A20" t="s" s="1"><v>45</v></c><c r="B20" t="s" s="0"><v></v></c><c r="C20" t="s" s="0"><v></v></c><c r="D20" t="s" s="0"><v></v></c><c r="E20" t="s" s="0"><v></v></c><c r="F20" t="s" s="0"><v></v></c></row>')
    rows.append('<row r="21"><c r="A21" t="s" s="1"><v>46</v></c><c r="B21" t="s" s="0"><v></v></c><c r="C21" t="s" s="0"><v></v></c><c r="D21" t="s" s="0"><v></v></c><c r="E21" t="s" s="0"><v></v></c><c r="F21" t="s" s="0"><v></v></c></row>')
    rows.append('<row r="22" ht="20" customHeight="1"><c r="A22" t="s" s="4"><v>47</v></c><c r="B22" t="s" s="4"><v>48</v></c><c r="C22" t="s" s="4"><v>49</v></c><c r="D22" t="s" s="4"><v>50</v></c></row>')
    rows.append('<row r="23"><c r="A23" t="s" s="1"><v>51</v></c><c r="B23" s="5"><v>0</v></c><c r="C23" s="5"><v>0</v></c><c r="D23" s="5"><v>0</v></c></row>')
    rows.append('<row r="24"><c r="A24" t="s" s="1"><v>52</v></c><c r="B24" s="5"><v>0</v></c><c r="C24" s="5"><v>0</v></c><c r="D24" s="5"><v>0</v></c></row>')
    rows.append('<row r="25"><c r="A25" t="s" s="1"><v>53</v></c><c r="B25" s="5"><v>0</v></c><c r="C25" s="5"><v>0</v></c><c r="D25" s="5"><v>0</v></c></row>')
    rows.append('<row r="26"><c r="A26" t="s" s="1"><v>54</v></c><c r="B26" s="5"><v>0</v></c><c r="C26" s="5"><v>0</v></c><c r="D26" s="5"><v>0</v></c></row>')
    rows.append('<row r="27"><c r="A27" t="s" s="1"><v>55</v></c><c r="B27" s="5"><v>0</v></c><c r="C27" s="5"><v>0</v></c><c r="D27" s="5"><v>0</v></c></row>')
    rows.append('<row r="28"><c r="A28" t="s" s="4"><v>56</v></c><c r="B28" s="6"><f>B23-SUM(B24:B27)</f><v></v></c><c r="C28" s="6"><f>C23-SUM(C24:C27)</f><v></v></c><c r="D28" s="6"><f>D23-SUM(D24:D27)</f><v></v></c></row>')
    rows.append('<row r="29"><c r="A29" t="s" s="4"><v>57</v></c><c r="B29" s="6"><f>B28</f><v></v></c><c r="C29" s="6"><f>B29+C28</f><v></v></c><c r="D29" s="6"><f>C29+D28</f><v></v></c></row>')
    rows.append('<row r="30" ht="20" customHeight="1"><c r="A30" t="s" s="4"><v>58</v></c><c r="B30" t="s" s="4"><v>59</v></c><c r="C30" t="s" s="4"><v>60</v></c><c r="D30" t="s" s="4"><v>61</v></c></row>')
    rows.append('<row r="31"><c r="A31" t="s" s="1"><v>62</v></c><c r="B31" t="s" s="0"><v></v></c><c r="C31" t="s" s="0"><v></v></c><c r="D31" t="s" s="0"><v></v></c></row>')
    rows.append('<row r="32"><c r="A32" t="s" s="1"><v>63</v></c><c r="B32" t="s" s="0"><v></v></c><c r="C32" t="s" s="0"><v></v></c><c r="D32" t="s" s="0"><v></v></c></row>')
    rows.append('<row r="33"><c r="A33" t="s" s="1"><v>64</v></c><c r="B33" t="s" s="0"><v></v></c><c r="C33" t="s" s="0"><v></v></c><c r="D33" t="s" s="0"><v></v></c></row>')
    rows.append('<row r="34"><c r="A34" t="s" s="1"><v>65</v></c><c r="B34" t="s" s="0"><v></v></c><c r="C34" t="s" s="0"><v></v></c><c r="D34" t="s" s="0"><v></v></c></row>')
    rows.append('<row r="35" ht="20" customHeight="1"><c r="A35" t="s" s="4"><v>66</v></c><c r="B35" t="s" s="4"><v>67</v></c><c r="C35" t="s" s="4"><v>68</v></c><c r="D35" t="s" s="4"><v>69</v></c></row>')
    rows.append('<row r="36"><c r="A36" t="s" s="1"><v>70</v></c><c r="B36" t="s" s="0"><v></v></c><c r="C36" s="5"><v>600000</v></c><c r="D36" t="s" s="0"><v></v></c></row>')
    rows.append('<row r="37"><c r="A37" t="s" s="1"><v>71</v></c><c r="B37" t="s" s="0"><v></v></c><c r="C37" s="5"><v>100000</v></c><c r="D37" t="s" s="0"><v></v></c></row>')
    rows.append('<row r="38"><c r="A38" t="s" s="1"><v>72</v></c><c r="B38" t="s" s="0"><v></v></c><c r="C38" s="5"><v>300000</v></c><c r="D38" t="s" s="0"><v></v></c></row>')
    rows.append('<row r="39"><c r="A39" t="s" s="1"><v>73</v></c><c r="B39" t="s" s="0"><v></v></c><c r="C39" s="5"><v>120000</v></c><c r="D39" t="s" s="0"><v></v></c></row>')
    rows.append('<row r="40" ht="20" customHeight="1"><c r="A40" t="s" s="4"><v>74</v></c><c r="B40" t="s" s="4"><v>75</v></c><c r="C40" t="s" s="4"><v>76</v></c><c r="D40" t="s" s="4"><v>77</v></c></row>')
    rows.append('<row r="41"><c r="A41" t="s" s="1"><v>78</v></c><c r="B41" t="s" s="1"><v>79</v></c><c r="C41" t="s" s="0"><v></v></c><c r="D41" t="s" s="0"><v></v></c></row>')
    rows.append('<row r="42"><c r="A42" t="s" s="1"><v>80</v></c><c r="B42" t="s" s="1"><v>81</v></c><c r="C42" t="s" s="0"><v></v></c><c r="D42" t="s" s="0"><v></v></c></row>')
    rows.append('<row r="43"><c r="A43" t="s" s="1"><v>82</v></c><c r="B43" t="s" s="1"><v>83</v></c><c r="C43" t="s" s="0"><v></v></c><c r="D43" t="s" s="0"><v></v></c></row>')
    rows.append('<row r="44"><c r="A44" t="s" s="1"><v>84</v></c><c r="B44" t="s" s="1"><v>85</v></c><c r="C44" t="s" s="0"><v></v></c><c r="D44" t="s" s="0"><v></v></c></row>')
    rows.append('<row r="45" ht="20" customHeight="1"><c r="A45" t="s" s="4"><v>86</v></c><c r="B45" t="s" s="4"><v>87</v></c><c r="C45" t="s" s="4"><v>88</v></c><c r="D45" t="s" s="4"><v>89</v></c></row>')
    rows.append('<row r="46"><c r="A46" t="s" s="0"><v>90</v></c><c r="B46" t="s" s="0"><v></v></c><c r="C46" t="s" s="0"><v></v></c><c r="D46" t="s" s="0"><v></v></c></row>')
    rows.append('<row r="47"><c r="A47" t="s" s="0"><v>91</v></c><c r="B47" t="s" s="0"><v></v></c><c r="C47" t="s" s="0"><v></v></c><c r="D47" t="s" s="0"><v></v></c></row>')
    rows.append('<row r="48"><c r="A48" t="s" s="0"><v>92</v></c><c r="B48" t="s" s="0"><v></v></c><c r="C48" t="s" s="0"><v></v></c><c r="D48" t="s" s="0"><v></v></c></row>')
    rows.append('</sheetData><pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75"/></worksheet>')
    write(os.path.join(work_dir, "xl", "worksheets", "sheet1.xml"), "".join(rows))

    ct = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/><Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/><Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/><Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/></Types>'
    write(os.path.join(work_dir, "[Content_Types].xml"), ct)

    out = os.path.join(OUTPUT_DIR, "06_内部创业计划书模板.xlsx")
    if pack(work_dir, out):
        print("Created: {}".format(out))

def create_file7():
    """容错文化建设检查表"""
    work_dir = copy_template()
    strings = [
        "容错文化建设检查表", "评估维度", "评估内容", "评分标准", "分值", "实际得分", "备注",
        "心理安全氛围", "员工敢于表达不同意见", "1-10分", "", "",
        "心理安全氛围", "失败后员工不担心被嘲笑或惩罚", "1-10分", "", "",
        "心理安全氛围", "员工愿意承认错误而不掩盖", "1-10分", "", "",
        "心理安全氛围", "团队会议中有多元观点被鼓励", "1-10分", "", "",
        "心理安全氛围", "跨层级沟通渠道畅通无阻", "1-10分", "", "",
        "支持性领导行为", "领导公开承认自己的错误", "1-10分", "", "",
        "支持性领导行为", "领导在员工失败时给予支持而非责备", "1-10分", "", "",
        "支持性领导行为", "领导鼓励创新尝试而非只关注结果", "1-10分", "", "",
        "支持性领导行为", "领导定期与团队复盘而非追究责任", "1-10分", "", "",
        "支持性领导行为", "领导对创新风险表现出理解和包容", "1-10分", "", "",
        "学习导向机制", "项目复盘会将失败经验转化为学习机会", "1-10分", "", "",
        "学习导向机制", "有明确的机制记录和分享失败教训", "1-10分", "", "",
        "学习导向机制", "员工因尝试创新获得认可即使未成功", "1-10分", "", "",
        "学习导向机制", "组织定期开展创新实验并公开结果", "1-10分", "", "",
        "学习导向机制", "成功案例与失败案例同等被分析", "1-10分", "", "",
        "适度冒险激励", "员工因创新贡献获得晋升机会", "1-10分", "", "",
        "适度冒险激励", "绩效考核包含创新尝试指标", "1-10分", "", "",
        "适度冒险激励", "有专门的创新奖励基金", "1-10分", "", "",
        "适度冒险激励", "员工因合理冒险失败不受惩罚", "1-10分", "", "",
        "适度冒险激励", "创业项目有容错期保护机制", "1-10分", "", "",
        "资源保障与授权", "创新项目有独立的预算支持", "1-10分", "", "",
        "资源保障与授权", "员工有权限调用所需资源", "1-10分", "", "",
        "资源保障与授权", "创新决策权适当下放至一线团队", "1-10分", "", "",
        "资源保障与授权", "有快速响应的小型创新团队机制", "1-10分", "", "",
        "资源保障与授权", "创新失败后资源可以被重新分配", "1-10分", "", "",
        "总分", "", "", "", "=SUM(F4:F28)", "",
        "评估等级", "A级（85-100分）：容错文化优秀", "B级（70-84分）：容错文化良好", "C级（50-69分）：容错文化一般", "D级（50分以下）：容错文化需改进",
        "改进建议", "基于评估结果，制定具体的容错文化建设计划", "", "", ""
    ]
    write(os.path.join(work_dir, "xl", "sharedStrings.xml"), build_shared_strings(strings))

    wb = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><sheets><sheet name="容错文化建设检查" sheetId="1" r:id="rId1"/></sheets><calcPr calcId="0"/></workbook>'
    write(os.path.join(work_dir, "xl", "workbook.xml"), wb)

    rows = ['<?xml version="1.0" encoding="UTF-8" standalone="yes"?><worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><sheetViews><sheetView workbookViewId="0"/></sheetViews><sheetFormatPr defaultRowHeight="15"/><cols><col min="1" max="1" width="18" customWidth="1"/><col min="2" max="2" width="35" customWidth="1"/><col min="3" max="3" width="35" customWidth="1"/><col min="4" max="4" width="10" customWidth="1"/><col min="5" max="5" width="10" customWidth="1"/><col min="6" max="6" width="10" customWidth="1"/></cols><sheetData>']
    rows.append('<row r="1" ht="22" customHeight="1"><c r="A1" t="s" s="4"><v>0</v></c></row>')
    rows.append('<row r="2"><c r="A2" t="s" s="4"><v>1</v></c><c r="B2" t="s" s="4"><v>2</v></c><c r="C2" t="s" s="4"><v>3</v></c><c r="D2" t="s" s="4"><v>4</v></c><c r="E2" t="s" s="4"><v>5</v></c><c r="F2" t="s" s="4"><v>6</v></c></row>')

    dimensions = [
        (0, "心理安全氛围", 7, 11),
        (0, "支持性领导行为", 12, 16),
        (0, "学习导向机制", 17, 21),
        (0, "适度冒险激励", 22, 26),
        (0, "资源保障与授权", 27, 31),
    ]
    row_num = 3
    for dim_idx, dim_name, start_si, end_si in dimensions:
        for i in range(start_si, end_si + 1):
            rows.append('<row r="{}"><c r="A{}" t="s" s="1"><v>{}</v></c><c r="B{}" t="s" s="0"><v>{}</v></c><c r="C{}" t="s" s="0"><v>{}</v></c><c r="D{}" t="s" s="0"><v>{}</v></c><c r="E{}" s="9"><v></v></c><c r="F{}" s="9"><v></v></c><c r="G{}" t="s" s="0"><v></v></c></row>'.format(row_num, row_num, dim_idx, row_num, i, row_num, i + 1, row_num, i + 2, row_num, row_num, row_num))
            row_num += 1

    rows.append('<row r="29"><c r="A29" t="s" s="4"><v>29</v></c><c r="B29" t="s" s="4"><v></v></c><c r="C29" t="s" s="4"><v></v></c><c r="D29" t="s" s="4"><v></v></c><c r="E29" s="6"><f>SUM(F3:F28)</f><v></v></c><c r="F29" t="s" s="0"><v></v></c></row>')
    rows.append('<row r="30"><c r="A30" t="s" s="4"><v>30</v></c></row>')
    rows.append('<row r="31"><c r="A31" t="s" s="4"><v>31</v></c></row>')
    rows.append('<row r="32"><c r="A32" t="s" s="0"><v>32</v></c></row>')
    rows.append('<row r="33"><c r="A33" t="s" s="0"><v>33</v></c></row>')
    rows.append('</sheetData><pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75"/></worksheet>')
    write(os.path.join(work_dir, "xl", "worksheets", "sheet1.xml"), "".join(rows))

    ct = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/><Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/><Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/><Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/></Types>'
    write(os.path.join(work_dir, "[Content_Types].xml"), ct)

    out = os.path.join(OUTPUT_DIR, "07_容错文化建设检查表.xlsx")
    if pack(work_dir, out):
        print("Created: {}".format(out))

os.makedirs(OUTPUT_DIR, exist_ok=True)
print("Creating files 06-07...")
create_file6()
create_file7()
print("Done with 06-07!")