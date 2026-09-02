#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Build training plan Excel workbook using zipfile."""
import zipfile

OUT = 'D:/新课开发/AI落地/3.销售与市场场景深度实战：从话术生成到客户洞察/管理者工具包/团队培训计划模板.xlsx'

# All strings indexed for sharedStrings.xml
STRINGS = [
    # 0-4: Sheet1 header
    "培训目标设定", "总体目标", "3个月内团队AI工具使用率达到80%，人均节省销售准备时间30%",
    "成功指标", "负责人",
    # 5: 阶段
    "阶段",
    # 6: 目标描述
    "目标描述",
    # 7: 完成时间
    "完成时间",
    # 8-13: Phase labels + targets
    "第一阶段目标（1-2周）", "第二阶段目标（3-6周）", "第三阶段目标（7-12周）",
    "完成全员AI认知建立", "完成话术库建设", "实现人机协作常态化",
    # 14-18: Sheet2 header
    "2天培训日程", "时间段", "内容", "备注", "第一天",
    # 19: 上午
    "上午",
    # 20-29: Day1 AM slots (pairs: time, content)
    "9:00-9:30", "开班仪式与AI认知导入",
    "9:30-10:30", "AI工具基础认知（什么是AI、AI能做什么、不能做什么）",
    "10:30-10:45", "茶歇",
    "10:45-11:45", "销售场景AI应用案例分享（话术生成、客户分析、竞品研究）",
    "11:45-12:00", "上午小结与答疑",
    # 30: 下午
    "下午",
    # 31-39: Day1 PM
    "14:00-15:00", "AI工具实操演练（以ChatGPT为例）",
    "15:00-15:15", "茶歇",
    "15:15-16:15", "小组练习：让AI帮你写一段开场白",
    "16:15-17:00", "练习分享与点评",
    # 40: 第二天
    "第二天",
    # 41-55: Day2 slots
    "9:00-9:30", "昨天内容回顾与问题解答",
    "9:30-10:30", "话术库建设实操（如何收集、优化、迭代话术）",
    "10:30-10:45", "茶歇",
    "10:45-11:45", "AI人机协作技巧（如何审核AI输出、如何叠加个人经验）",
    "11:45-12:00", "上午小结",
    "14:00-15:00", "效果追踪工具使用培训",
    "15:00-15:15", "茶歇",
    "15:15-16:15", "考核与认证（理论+实操）",
    "16:15-17:00", "总结与后续计划",
    # 56-59: Sheet3 header
    "考核方式", "考核维度", "权重", "说明",
    # 60-71: Sheet3 content
    "理论考核", "30%", "AI基础认知、工具使用知识", "选择题+简答题，60分及格",
    "实操考核", "40%", "现场用AI工具完成指定任务", "现场演示，70分及格",
    "话术提交", "30%", "提交3条AI辅助生成的话术", "内容质量+创新性，70分及格",
    "通过标准：总分70分以上",
    # 72-76: Sheet4 header
    "跟进计划", "时间节点", "事项", "目标", "负责人",
    # 77-88: Sheet4 content
    "培训后1周", "单对单辅导", "针对未通过者进行补强培训", "", "",
    "培训后2周", "话术库建设启动", "全员启动话术库收集与整理", "", "",
    "培训后1个月", "第一次效果回顾", "检视AI工具使用率和效果", "", "",
    "培训后3个月", "认证升级考核", "通过升级考核获得更高认证等级", "", "",
]

def esc(s):
    return s.replace('&','&amp;').replace('<','&lt;').replace('>','&gt;')

def build_shared_strings():
    lines = ['<?xml version="1.0" encoding="UTF-8" standalone="yes"?>',
             '<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="{}" uniqueCount="{}">'.format(len(STRINGS), len(STRINGS))]
    for s in STRINGS:
        lines.append('  <si><t>{}</t></si>'.format(esc(s)))
    lines.append('</sst>')
    return '\n'.join(lines)

def build_styles():
    return '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <numFmts count="4">
    <numFmt numFmtId="164" formatCode="$#,##0;($#,##0);&quot;-&quot;"/>
    <numFmt numFmtId="165" formatCode="0.0%"/>
    <numFmt numFmtId="166" formatCode="0.0x"/>
    <numFmt numFmtId="167" formatCode="#,##0"/>
  </numFmts>
  <fonts count="6">
    <font><sz val="11"/><name val="Calibri"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="000000FF"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="00000000"/></font>
    <font><sz val="11"/><name val="Calibri"/><color rgb="00008000"/></font>
    <font><sz val="11"/><name val="Calibri"/><b/><color rgb="00000000"/></font>
    <font><sz val="11"/><name val="Calibri"/><b/><color rgb="00000000"/></font>
  </fonts>
  <fills count="3">
    <fill><patternFill patternType="none"/></fill>
    <fill><patternFill patternType="gray125"/></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="00D3D3D3"/><bgColor indexed="64"/></patternFill></fill>
  </fills>
  <borders count="1">
    <border><left/><right/><top/><bottom/><diagonal/></border>
  </borders>
  <cellStyleXfs count="1">
    <xf numFmtId="0" fontId="0" fillId="0" borderId="0"/>
  </cellStyleXfs>
  <cellXfs count="13">
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
  </cellXfs>
</styleSheet>'''

def build_workbook():
    return '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <fileVersion appName="xl" lastEdited="7" lowestEdited="7"/>
  <workbookPr defaultThemeVersion="166925"/>
  <bookViews><workbookView xWindow="0" yWindow="0" windowWidth="20140" windowHeight="10960"/></bookViews>
  <sheets>
    <sheet name="&#x57F9;&#x8BAD;&#x76EE;&#x6807;&#x8BBE;&#x5B9A;" sheetId="1" r:id="rId1"/>
    <sheet name="2&#x5929;&#x57F9;&#x8BAD;&#x65E5;&#x7A0B;" sheetId="2" r:id="rId4"/>
    <sheet name="&#x8003;&#x6838;&#x65B9;&#x5F0F;" sheetId="3" r:id="rId5"/>
    <sheet name="&#x8DDF;&#x8FDB;&#x8BA1;&#x5212;" sheetId="4" r:id="rId6"/>
  </sheets>
  <calcPr calcId="191029"/>
</workbook>'''

def build_wb_rels():
    return '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
  <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml"/>
  <Relationship Id="rId4" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet2.xml"/>
  <Relationship Id="rId5" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet3.xml"/>
  <Relationship Id="rId6" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet4.xml"/>
</Relationships>'''

def build_root_rels():
    return '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/>
</Relationships>'''

def build_content_types():
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

# ---- Sheet 1 ----
def build_sheet1():
    return '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <sheetViews><sheetView tabSelected="1" workbookViewId="0"/></sheetViews>
  <sheetFormatPr defaultRowHeight="18" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols>
    <col min="1" max="1" width="22" customWidth="1"/>
    <col min="2" max="2" width="46" customWidth="1"/>
    <col min="3" max="3" width="35" customWidth="1"/>
    <col min="4" max="4" width="14" customWidth="1"/>
    <col min="5" max="5" width="14" customWidth="1"/>
  </cols>
  <sheetData>
    <row r="1" ht="28" customHeight="1">
      <c r="A1" t="s" s="4"><v>0</v></c>
      <c r="B1" t="s" s="4"><v>1</v></c>
      <c r="C1" t="s" s="4"><v>3</v></c>
      <c r="D1" t="s" s="4"><v>4</v></c>
      <c r="E1" t="s" s="4"><v>5</v></c>
    </row>
    <row r="2" ht="36" customHeight="1">
      <c r="A2" t="s" s="4"><v>6</v></c>
      <c r="B2" t="s" s="2"><v>2</v></c>
      <c r="C2" t="s" s="2"><v></v></c>
      <c r="D2" t="s" s="2"><v></v></c>
      <c r="E2" t="s" s="2"><v></v></c>
    </row>
    <row r="3" ht="20" customHeight="1">
      <c r="A3" t="s" s="4"><v>8</v></c>
      <c r="B3" t="s" s="2"><v>11</v></c>
      <c r="C3" t="s" s="2"><v></v></c>
      <c r="D3" t="s" s="2"><v></v></c>
      <c r="E3" t="s" s="2"><v></v></c>
    </row>
    <row r="4" ht="20" customHeight="1">
      <c r="A4" t="s" s="4"><v>9</v></c>
      <c r="B4" t="s" s="2"><v>12</v></c>
      <c r="C4" t="s" s="2"><v></v></c>
      <c r="D4" t="s" s="2"><v></v></c>
      <c r="E4" t="s" s="2"><v></v></c>
    </row>
    <row r="5" ht="20" customHeight="1">
      <c r="A5" t="s" s="4"><v>10</v></c>
      <c r="B5" t="s" s="2"><v>13</v></c>
      <c r="C5" t="s" s="2"><v></v></c>
      <c r="D5" t="s" s="2"><v></v></c>
      <c r="E5" t="s" s="2"><v></v></c>
    </row>
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

# ---- Sheet 2 ----
def build_sheet2():
    rows_data = [
        # (row, A_idx_or_None, B_idx_or_None, C_idx, D_idx, E_idx)
        # -1 means empty cell
        (1,  14, 15, 16, 17, ""),          # header
        (2,  18, 19, 20, 21, ""),           # 第一天 上午 9:00-9:30
        (3,  -1, -1, 22, 23, ""),           # 9:30-10:30
        (4,  -1, -1, 24, 25, ""),           # 10:30-10:45
        (5,  -1, -1, 26, 27, ""),           # 10:45-11:45
        (6,  -1, -1, 28, 29, ""),           # 11:45-12:00
        (7,  -1, 19, 30, 31, ""),           # 第一天 下午 14:00-15:00
        (8,  -1, -1, 32, 33, ""),           # 15:00-15:15
        (9,  -1, -1, 34, 35, ""),           # 15:15-16:15
        (10, -1, -1, 36, 37, ""),           # 16:15-17:00
        (11, 38, 19, 39, 40, ""),           # 第二天 上午 9:00-9:30
        (12, -1, -1, 41, 42, ""),           # 9:30-10:30
        (13, -1, -1, 43, 44, ""),           # 10:30-10:45
        (14, -1, -1, 45, 46, ""),           # 10:45-11:45
        (15, -1, -1, 47, 48, ""),           # 11:45-12:00
        (16, -1, 19, 49, 50, ""),           # 第二天 下午 14:00-15:00
        (17, -1, -1, 51, 52, ""),           # 15:00-15:15
        (18, -1, -1, 53, 54, ""),           # 15:15-16:15
        (19, -1, -1, 55, 56, ""),           # 16:15-17:00
    ]
    lines = ['<?xml version="1.0" encoding="UTF-8" standalone="yes"?>',
             '<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">',
             '  <sheetViews><sheetView tabSelected="0" workbookViewId="0"/></sheetViews>',
             '  <sheetFormatPr defaultRowHeight="18" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>',
             '  <cols>',
             '    <col min="1" max="1" width="14" customWidth="1"/>',
             '    <col min="2" max="2" width="14" customWidth="1"/>',
             '    <col min="3" max="3" width="14" customWidth="1"/>',
             '    <col min="4" max="4" width="52" customWidth="1"/>',
             '    <col min="5" max="5" width="20" customWidth="1"/>',
             '  </cols>',
             '  <sheetData>']
    for r, a, b, c, d, e in rows_data:
        lines.append('    <row r="{}" ht="20" customHeight="1">'.format(r))
        lines.append('      <c r="A{}" t="s" s="{}"><v>{}</v></c>'.format(
            r, "4" if a != -1 else "1", "" if a == -1 else a))
        lines.append('      <c r="B{}" t="s" s="{}"><v>{}</v></c>'.format(
            r, "4" if b != -1 else "1", "" if b == -1 else b))
        lines.append('      <c r="C{}" t="s" s="1"><v>{}</v></c>'.format(r, c))
        lines.append('      <c r="D{}" t="s" s="2"><v>{}</v></c>'.format(r, d))
        lines.append('      <c r="E{}" t="s" s="2"><v>{}</v></c>'.format(r, e))
        lines.append('    </row>')
    lines.append('  </sheetData>')
    lines.append('  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>')
    lines.append('</worksheet>')
    return '\n'.join(lines)

# ---- Sheet 3 ----
def build_sheet3():
    return '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <sheetViews><sheetView tabSelected="0" workbookViewId="0"/></sheetViews>
  <sheetFormatPr defaultRowHeight="18" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols>
    <col min="1" max="1" width="18" customWidth="1"/>
    <col min="2" max="2" width="12" customWidth="1"/>
    <col min="3" max="3" width="42" customWidth="1"/>
    <col min="4" max="4" width="42" customWidth="1"/>
  </cols>
  <sheetData>
    <row r="1" ht="28" customHeight="1">
      <c r="A1" t="s" s="4"><v>56</v></c>
      <c r="B1" t="s" s="4"><v>57</v></c>
      <c r="C1" t="s" s="4"><v>58</v></c>
      <c r="D1" t="s" s="4"><v>59</v></c>
    </row>
    <row r="2" ht="20" customHeight="1">
      <c r="A2" t="s" s="2"><v>60</v></c>
      <c r="B2" t="s" s="1"><v>61</v></c>
      <c r="C2" t="s" s="2"><v>62</v></c>
      <c r="D2" t="s" s="2"><v>63</v></c>
    </row>
    <row r="3" ht="20" customHeight="1">
      <c r="A3" t="s" s="2"><v>64</v></c>
      <c r="B3" t="s" s="1"><v>65</v></c>
      <c r="C3" t="s" s="2"><v>66</v></c>
      <c r="D3" t="s" s="2"><v>67</v></c>
    </row>
    <row r="4" ht="20" customHeight="1">
      <c r="A4" t="s" s="2"><v>68</v></c>
      <c r="B4" t="s" s="1"><v>69</v></c>
      <c r="C4" t="s" s="2"><v>70</v></c>
      <c r="D4" t="s" s="2"><v>71</v></c>
    </row>
    <row r="5" ht="24" customHeight="1">
      <c r="A5" t="s" s="4"><v>72</v></c>
      <c r="B5" t="s" s="1"><v></v></c>
      <c r="C5" t="s" s="2"><v></v></c>
      <c r="D5" t="s" s="2"><v></v></c>
    </row>
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

# ---- Sheet 4 ----
def build_sheet4():
    return '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <sheetViews><sheetView tabSelected="0" workbookViewId="0"/></sheetViews>
  <sheetFormatPr defaultRowHeight="18" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols>
    <col min="1" max="1" width="18" customWidth="1"/>
    <col min="2" max="2" width="20" customWidth="1"/>
    <col min="3" max="3" width="42" customWidth="1"/>
    <col min="4" max="4" width="35" customWidth="1"/>
    <col min="5" max="5" width="14" customWidth="1"/>
  </cols>
  <sheetData>
    <row r="1" ht="28" customHeight="1">
      <c r="A1" t="s" s="4"><v>73</v></c>
      <c r="B1" t="s" s="4"><v>74</v></c>
      <c r="C1" t="s" s="4"><v>75</v></c>
      <c r="D1" t="s" s="4"><v>76</v></c>
      <c r="E1" t="s" s="4"><v>77</v></c>
    </row>
    <row r="2" ht="20" customHeight="1">
      <c r="A2" t="s" s="2"><v>78</v></c>
      <c r="B2" t="s" s="2"><v>79</v></c>
      <c r="C2" t="s" s="2"><v>80</v></c>
      <c r="D2" t="s" s="2"><v></v></c>
      <c r="E2" t="s" s="2"><v></v></c>
    </row>
    <row r="3" ht="20" customHeight="1">
      <c r="A3" t="s" s="2"><v>81</v></c>
      <c r="B3" t="s" s="2"><v>82</v></c>
      <c r="C3" t="s" s="2"><v>83</v></c>
      <c r="D3" t="s" s="2"><v></v></c>
      <c r="E3" t="s" s="2"><v></v></c>
    </row>
    <row r="4" ht="20" customHeight="1">
      <c r="A4" t="s" s="2"><v>84</v></c>
      <c r="B4" t="s" s="2"><v>85</v></c>
      <c r="C4" t="s" s="2"><v>86</v></c>
      <c r="D4" t="s" s="2"><v></v></c>
      <c r="E4" t="s" s="2"><v></v></c>
    </row>
    <row r="5" ht="20" customHeight="1">
      <c r="A5" t="s" s="2"><v>87</v></c>
      <c r="B5" t="s" s="2"><v>88</v></c>
      <c r="C5" t="s" s="2"><v>89</v></c>
      <c r="D5" t="s" s="2"><v></v></c>
      <c r="E5" t="s" s="2"><v></v></c>
    </row>
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

# ---- Build ZIP ----
zf = zipfile.ZipFile(OUT, 'w', zipfile.ZIP_DEFLATED)
zf.writestr('[Content_Types].xml', build_content_types())
zf.writestr('_rels/.rels', build_root_rels())
zf.writestr('xl/workbook.xml', build_workbook())
zf.writestr('xl/_rels/workbook.xml.rels', build_wb_rels())
zf.writestr('xl/sharedStrings.xml', build_shared_strings())
zf.writestr('xl/styles.xml', build_styles())
zf.writestr('xl/worksheets/sheet1.xml', build_sheet1())
zf.writestr('xl/worksheets/sheet2.xml', build_sheet2())
zf.writestr('xl/worksheets/sheet3.xml', build_sheet3())
zf.writestr('xl/worksheets/sheet4.xml', build_sheet4())
zf.close()

import os
size = os.path.getsize(OUT)
print('SUCCESS: wrote {} ({} bytes)'.format(OUT, size))
print('Strings count:', len(STRINGS))
