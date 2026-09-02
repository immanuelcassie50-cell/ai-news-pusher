#!/usr/bin/env python3
import os, shutil, subprocess

SKILL_DIR = "C:/Users/Administrator/.claude/skills/Excel表格处理"
TEMPLATE_DIR = SKILL_DIR + "/templates/minimal_xlsx"
OUTPUT_DIR = "D:/新课开发/商业讲师/全域经营/完整课程包/06-工具表单"
WORK_DIR = "/tmp/xlsx_f02"

os.makedirs(OUTPUT_DIR, exist_ok=True)
if os.path.exists(WORK_DIR): shutil.rmtree(WORK_DIR)
shutil.copytree(TEMPLATE_DIR, WORK_DIR)
print("Template copied")

# Shared strings - 43 strings
strings = [
    "用户全生命周期管理表",
    "基于用户从认识品牌到成为忠诚用户的完整旅程，追踪各环节转化情况，识别流失节点。",
    "环节序号", "环节名称", "环节定义", "核心问题", "关键指标",
    "唤醒",
    "客户首次注意到品牌存在的时刻，可能是内容触达、门店路过等",
    "客户最常在哪个场景第一次注意到我？",
    "触达率",
    "对比",
    "客户注意到后不会立刻下单，习惯性比较同类产品",
    "客户在对比时，我有没有给他一个停止比较、选择我的理由？",
    "对比率",
    "激活",
    "客户已心动但差一个"推一下"的动作才会行动",
    "我有没有设计过这样一个具体的"推一下"的动作？",
    "激活率",
    "转化",
    "客户真正完成第一次购买的关键时刻",
    "我的首次购买转化路径是否顺畅？",
    "转化率",
    "互动",
    "买完后与客户建立除买卖关系之外的持续连接",
    "我有没有设计让客户持续对话的动作？",
    "互动率",
    "忠诚",
    "客户形成稳定复购习惯甚至主动推荐",
    "我有没有办法识别出走到忠诚阶段的客户？",
    "复购率",
    "生命周期追踪看板",
    "环节", "本月新进", "本月转化至下环节", "本月末存量", "环比变化", "预警",
    "唤醒", "=COUNTIF(B表!C:C,A4)", "=COUNTIF(C表!C:C,A4)", "=B4-D4", "=IF(D3=0,0,(D4-D3)/D3)", "=IF(E4<-0.1,"下滑","正常")",
    "对比", "=COUNTIF(B表!C:C,A5)", "=COUNTIF(C表!C:C,A5)", "=D4+E4-D5", "=IF(D4=0,0,(D5-D4)/D4)", "=IF(E5<-0.1,"下滑","正常")",
    "激活", "=COUNTIF(B表!C:C,A6)", "=COUNTIF(C表!C:C,A6)", "=D5+E5-D6", "=IF(D5=0,0,(D6-D5)/D5)", "=IF(E6<-0.1,"下滑","正常")",
    "转化", "=COUNTIF(B表!C:C,A7)", "=COUNTIF(C表!C:C,A7)", "=D6+E6-D7", "=IF(D6=0,0,(D7-D6)/D6)", "=IF(E7<-0.1,"下滑","正常")",
    "互动", "=COUNTIF(B表!C:C,A8)", "=COUNTIF(C表!C:C,A8)", "=D7+E7-D8", "=IF(D7=0,0,(D8-D7)/D8)", "=IF(E8<-0.1,"下滑","正常")",
    "忠诚", "=COUNTIF(B表!C:C,A9)", "=COUNTIF(C表!C:C,A9)", "=D8+E8-D9", "=IF(D8=0,0,(D9-D8)/D8)", "=IF(E9<-0.1,"下滑","正常")",
    "各环节关键动作",
    "环节", "引流动作", "转化动作", "留存动作", "话术要点",
    "唤醒", "内容种草、门店曝光、社群推广", "优惠引导、体验邀请", "关注有礼、加入社群", "引起注意，建立初印象",
    "对比", "差异化内容输出、用户评价管理", "对比优势说明、限时限量", "持续种草、内容陪伴", "给出停止比较的理由",
    "激活", "限时优惠、朋友推荐、试用体验", "首单优惠、买赠活动", "短信关怀、售后跟进", "给出"推一下"的动力",
    "转化", "优化下单路径、提供安全保障", "信赖背书、购买保障", "使用教程、注意事项", "消除购买顾虑",
    "互动", "社群运营、内容推送、积分体系", "复购提醒、会员专享", "售后关怀、使用反馈", "建立买卖外的关系",
    "忠诚", "会员权益、积分兑换、专属服务", "老客专享、复购优惠", "荣誉勋章、推荐奖励", "让忠诚客户获得尊严",
    "使用说明", "请在"各环节关键动作" sheet填写各环节的具体运营动作，看板将自动计算转化情况。",
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
<sheet name="生命周期六环节定义" sheetId="1" r:id="rId1"/>
<sheet name="各环节关键动作" sheetId="2" r:id="rId4"/>
<sheet name="生命周期追踪看板" sheetId="3" r:id="rId5"/>
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

# Sheet1 - 生命周期六环节定义
sheet1 = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
<sheetViews><sheetView workbookViewId="0"/></sheetViews>
<sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
<cols>
<col min="1" max="1" width="10" customWidth="1"/>
<col min="2" max="2" width="12" customWidth="1"/>
<col min="3" max="3" width="36" customWidth="1"/>
<col min="4" max="4" width="42" customWidth="1"/>
<col min="5" max="5" width="16" customWidth="1"/>
</cols>
<sheetData>
<row r="1" ht="30" customHeight="1"><c r="A1" t="s" s="4"><v>0</v></c></row>
<row r="2"><c r="A2" t="s" s="0"><v>1</v></c></row>
<row r="3" ht="18" customHeight="1"><c r="A3" t="s" s="4"><v>2</v></c><c r="B3" t="s" s="4"><v>3</v></c><c r="C3" t="s" s="4"><v>4</v></c><c r="D3" t="s" s="4"><v>5</v></c><c r="E3" t="s" s="4"><v>6</v></c></row>
<row r="4"><c r="A4" t="s" s="0"><v>7</v></c><c r="B4" t="s" s="0"><v>8</v></c><c r="C4" t="s" s="0"><v>9</v></c><c r="D4" t="s" s="0"><v>10</v></c><c r="E4" t="s" s="0"><v>11</v></c></row>
<row r="5"><c r="A5" t="s" s="0"><v>12</v></c><c r="B5" t="s" s="0"><v>13</v></c><c r="C5" t="s" s="0"><v>14</v></c><c r="D5" t="s" s="0"><v>15</v></c><c r="E5" t="s" s="0"><v>16</v></c></row>
<row r="6"><c r="A6" t="s" s="0"><v>17</v></c><c r="B6" t="s" s="0"><v>18</v></c><c r="C6" t="s" s="0"><v>19</v></c><c r="D6" t="s" s="0"><v>20</v></c><c r="E6" t="s" s="0"><v>21</v></c></row>
<row r="7"><c r="A7" t="s" s="0"><v>22</v></c><c r="B7" t="s" s="0"><v>23</v></c><c r="C7" t="s" s="0"><v>24</v></c><c r="D7" t="s" s="0"><v>25</v></c><c r="E7" t="s" s="0"><v>26</v></c></row>
<row r="8"><c r="A8" t="s" s="0"><v>27</v></c><c r="B8" t="s" s="0"><v>28</v></c><c r="C8" t="s" s="0"><v>29</v></c><c r="D8" t="s" s="0"><v>30</v></c><c r="E8" t="s" s="0"><v>31</v></c></row>
<row r="9"><c r="A9" t="s" s="0"><v>32</v></c><c r="B9" t="s" s="0"><v>33</v></c><c r="C9" t="s" s="0"><v>34</v></c><c r="D9" t="s" s="0"><v>35</v></c><c r="E9" t="s" s="0"><v>36</v></c></row>
</sheetData>
<pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''
with open(WORK_DIR + "/xl/worksheets/sheet1.xml", "w", encoding="utf-8") as f:
    f.write(sheet1)
print("Sheet1 done")

# Sheet2 - 各环节关键动作
sheet2 = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
<sheetViews><sheetView workbookViewId="0"/></sheetViews>
<sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
<cols>
<col min="1" max="1" width="10" customWidth="1"/>
<col min="2" max="2" width="22" customWidth="1"/>
<col min="3" max="3" width="22" customWidth="1"/>
<col min="4" max="4" width="22" customWidth="1"/>
<col min="5" max="5" width="28" customWidth="1"/>
</cols>
<sheetData>
<row r="1" ht="30" customHeight="1"><c r="A1" t="s" s="4"><v>43</v></c></row>
<row r="2" ht="18" customHeight="1"><c r="A2" t="s" s="4"><v>44</v></c><c r="B2" t="s" s="4"><v>45</v></c><c r="C2" t="s" s="4"><v>46</v></c><c r="D2" t="s" s="4"><v>47</v></c><c r="E2" t="s" s="4"><v>48</v></c></row>
<row r="3"><c r="A3" t="s" s="0"><v>7</v></c><c r="B3" t="s" s="0"><v>49</v></c><c r="C3" t="s" s="0"><v>50</v></c><c r="D3" t="s" s="0"><v>51</v></c><c r="E3" t="s" s="0"><v>52</v></c></row>
<row r="4"><c r="A4" t="s" s="0"><v>12</v></c><c r="B4" t="s" s="0"><v>53</v></c><c r="C4" t="s" s="0"><v>54</v></c><c r="D4" t="s" s="0"><v>55</v></c><c r="E4" t="s" s="0"><v>56</v></c></row>
<row r="5"><c r="A5" t="s" s="0"><v>17</v></c><c r="B5" t="s" s="0"><v>57</v></c><c r="C5" t="s" s="0"><v>58</v></c><c r="D5" t="s" s="0"><v>59</v></c><c r="E5" t="s" s="0"><v>60</v></c></row>
<row r="6"><c r="A6" t="s" s="0"><v>22</v></c><c r="B6" t="s" s="0"><v>61</v></c><c r="C6" t="s" s="0"><v>62</v></c><c r="D6" t="s" s="0"><v>63</v></c><c r="E6" t="s" s="0"><v>64</v></c></row>
<row r="7"><c r="A7" t="s" s="0"><v>27</v></c><c r="B7" t="s" s="0"><v>65</v></c><c r="C7" t="s" s="0"><v>66</v></c><c r="D7" t="s" s="0"><v>67</v></c><c r="E7" t="s" s="0"><v>68</v></c></row>
<row r="8"><c r="A8" t="s" s="0"><v>32</v></c><c r="B8" t="s" s="0"><v>69</v></c><c r="C8" t="s" s="0"><v>70</v></c><c r="D8" t="s" s="0"><v>71</v></c><c r="E8" t="s" s="0"><v>72</v></c></row>
<row r="9"><c r="A9" t="s" s="4"><v>73</v></c></row>
</sheetData>
<pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''
with open(WORK_DIR + "/xl/worksheets/sheet2.xml", "w", encoding="utf-8") as f:
    f.write(sheet2)
print("Sheet2 done")

# Sheet3 - 生命周期追踪看板
sheet3 = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
<sheetViews><sheetView workbookViewId="0"/></sheetViews>
<sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
<cols>
<col min="1" max="1" width="10" customWidth="1"/>
<col min="2" max="2" width="14" customWidth="1"/>
<col min="3" max="3" width="18" customWidth="1"/>
<col min="4" max="4" width="14" customWidth="1"/>
<col min="5" max="5" width="14" customWidth="1"/>
<col min="6" max="6" width="12" customWidth="1"/>
</cols>
<sheetData>
<row r="1" ht="30" customHeight="1"><c r="A1" t="s" s="4"><v>37</v></c></row>
<row r="2" ht="18" customHeight="1"><c r="A2" t="s" s="4"><v>38</v></c><c r="B2" t="s" s="4"><v>39</v></c><c r="C2" t="s" s="4"><v>40</v></c><c r="D2" t="s" s="4"><v>41</v></c><c r="E2" t="s" s="4"><v>42</v></c></row>
<row r="3"><c r="A3" t="s" s="0"><v>7</v></c><c r="B3" t="s" s="1"><v>0</v></c><c r="C3" t="s" s="1"><v>0</v></c><c r="D3" t="s" s="6"><f>B3-C3</f><v></v></c><c r="E3" t="s" s="2"><f>IF(D2=0,0,(D3-D2)/D2)</f><v></v></c><c r="F3" t="s" s="2"><f>IF(E3&lt;-0.1,"下滑","正常")</f><v></v></c></row>
<row r="4"><c r="A4" t="s" s="0"><v>12</v></c><c r="B4" t="s" s="1"><v>0</v></c><c r="C4" t="s" s="1"><v>0</v></c><c r="D4" t="s" s="6"><f>D3+C4-C4</f><v></v></c><c r="E4" t="s" s="2"><f>IF(D3=0,0,(D4-D3)/D3)</f><v></v></c><c r="F4" t="s" s="2"><f>IF(E4&lt;-0.1,"下滑","正常")</f><v></v></c></row>
<row r="5"><c r="A5" t="s" s="0"><v>17</v></c><c r="B5" t="s" s="1"><v>0</v></c><c r="C5" t="s" s="1"><v>0</v></c><c r="D5" t="s" s="6"><f>D4+C5-C5</f><v></v></c><c r="E5" t="s" s="2"><f>IF(D4=0,0,(D5-D4)/D4)</f><v></v></c><c r="F5" t="s" s="2"><f>IF(E5&lt;-0.1,"下滑","正常")</f><v></v></c></row>
<row r="6"><c r="A6" t="s" s="0"><v>22</v></c><c r="B6" t="s" s="1"><v>0</v></c><c r="C6" t="s" s="1"><v>0</v></c><c r="D6" t="s" s="6"><f>D5+C6-C6</f><v></v></c><c r="E6" t="s" s="2"><f>IF(D5=0,0,(D6-D5)/D5)</f><v></v></c><c r="F6" t="s" s="2"><f>IF(E6&lt;-0.1,"下滑","正常")</f><v></v></c></row>
<row r="7"><c r="A7" t="s" s="0"><v>27</v></c><c r="B7" t="s" s="1"><v>0</v></c><c r="C7" t="s" s="1"><v>0</v></c><c r="D7" t="s" s="6"><f>D6+C7-C7</f><v></v></c><c r="E7" t="s" s="2"><f>IF(D6=0,0,(D7-D6)/D6)</f><v></v></c><c r="F7" t="s" s="2"><f>IF(E7&lt;-0.1,"下滑","正常")</f><v></v></c></row>
<row r="8"><c r="A8" t="s" s="0"><v>32</v></c><c r="B8" t="s" s="1"><v>0</v></c><c r="C8" t="s" s="1"><v>0</v></c><c r="D8" t="s" s="6"><f>D7+C8-C8</f><v></v></c><c r="E8" t="s" s="2"><f>IF(D7=0,0,(D8-D7)/D7)</f><v></v></c><c r="F8" t="s" s="2"><f>IF(E8&lt;-0.1,"下滑","正常")</f><v></v></c></row>
</sheetData>
<pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''
with open(WORK_DIR + "/xl/worksheets/sheet3.xml", "w", encoding="utf-8") as f:
    f.write(sheet3)
print("Sheet3 done")

# Pack
out_path = OUTPUT_DIR + "/02-用户全生命周期管理表.xlsx"
r = subprocess.run(["python3", SKILL_DIR+"/scripts/xlsx_pack.py", WORK_DIR, out_path], capture_output=True, text=True)
if r.returncode != 0:
    print("Pack error:", r.stderr)
else:
    print("Created:", out_path)