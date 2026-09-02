"""
创建《读懂中国司法：从立案到判决的全流程》配套Excel工具
使用XML模板方式创建（遵循skill规范）
"""
import shutil
import os
import re
from datetime import datetime, timedelta

SKILL_DIR = "C:/Users/Administrator/.claude/skills/Excel表格处理"
TEMPLATE_DIR = f"{SKILL_DIR}/templates/minimal_xlsx"
OUTPUT_DIR = "D:/新课开发/法学/23-读懂中国司法：从立案到判决的全流程箱/配套工具/"

def copy_template():
    """复制模板到临时工作目录"""
    work_dir = "D:/CC/temp/xlsx_work"
    if os.path.exists(work_dir):
        shutil.rmtree(work_dir)
    shutil.copytree(TEMPLATE_DIR, work_dir)
    return work_dir

def col_letter(n):
    """1-based column number to Excel letter"""
    result = ""
    while n > 0:
        n, rem = divmod(n - 1, 26)
        result = chr(65 + rem) + result
    return result

def build_shared_strings(strings):
    """构建sharedStrings.xml"""
    lines = ['<?xml version="1.0" encoding="UTF-8" standalone="yes"?>']
    lines.append(f'<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="{len(strings)}" uniqueCount="{len(strings)}">')
    for s in strings:
        escaped = s.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;')
        lines.append(f'  <si><t>{escaped}</t></si>')
    lines.append('</sst>')
    return '\n'.join(lines)

def read_template_xml(work_dir, file_path):
    """读取模板XML文件"""
    with open(os.path.join(work_dir, file_path), 'r', encoding='utf-8') as f:
        return f.read()

def write_xml(work_dir, file_path, content):
    """写入XML文件"""
    with open(os.path.join(work_dir, file_path), 'w', encoding='utf-8') as f:
        f.write(content)

# ============================================================
# 文件1: 诉讼费用速算表.xlsx
# ============================================================
def create_litigation_cost():
    work_dir = copy_template()

    # 所有字符串
    strings = [
        "诉讼费用速算表",  # 0
        "一、诉讼请求金额",  # 1
        "诉讼请求金额（元）",  # 2
        "二、诉讼费计算（2024年收费标准）",  # 3
        "费用区间",  # 4
        "费率",  # 5
        "速算扣除数",  # 6
        "分段计算金额",  # 7
        "1万元以下",  # 8
        "6%",  # 9
        "0",  # 10
        "1万-10万元",  # 11
        "5%",  # 12
        "100",  # 13
        "10万-50万元",  # 14
        "4%",  # 15
        "1500",  # 16
        "50万-100万元",  # 17
        "3%",  # 18
        "2500",  # 19
        "100万-500万元",  # 20
        "2%",  # 21
        "5500",  # 22
        "500万-1000万元",  # 23
        "1.5%",  # 24
        "10500",  # 25
        "1000万元以上",  # 26
        "1%",  # 27
        "15500",  # 28
        "诉讼费合计",  # 29
        "三、律师费参考",  # 30
        "案件类型",  # 31
        "参考费率",  # 32
        "最低收费",  # 33
        "民事案件（普通）",  # 34
        "8%-12%",  # 35
        "5000元",  # 36
        "民事案件（复杂）",  # 37
        "12%-18%",  # 38
        "10000元",  # 39
        "商事案件",  # 40
        "10%-15%",  # 41
        "20000元",  # 42
        "知识产权案件",  # 43
        "10%-20%",  # 44
        "10000元",  # 45
        "选择案件类型",  # 46
        "律师费（按费率计算）",  # 47
        "律师费（按最低收费）",  # 48
        "实际律师费参考",  # 49
        "四、其他成本",  # 50
        "成本项目",  # 51
        "金额（元）",  # 52
        "鉴定费",  # 53
        "公告费",  # 54
        "公证费",  # 55
        "邮寄费",  # 56
        "差旅费",  # 57
        "其他",  # 58
        "其他成本合计",  # 59
        "五、总成本汇总",  # 60
        "费用项目",  # 61
        "金额",  # 62
        "诉讼费",  # 63
        "律师费",  # 64
        "其他成本",  # 65
        "总成本",  # 66
        "说明：本表诉讼费按2024年《诉讼费用交纳办法》计算，实际费用以法院确定为准。",  # 67
    ]

    # 写入sharedStrings
    write_xml(work_dir, 'xl/sharedStrings.xml', build_shared_strings(strings))

    # 构建sheet1.xml
    sheet_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView workbookViewId="0">
      <pane ySplit="1" topLeftCell="A2" activePane="bottomLeft" state="frozen"/>
    </sheetView>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="18"/>
  <cols>
    <col min="1" max="1" width="28" customWidth="1"/>
    <col min="2" max="2" width="18" customWidth="1"/>
    <col min="3" max="3" width="16" customWidth="1"/>
    <col min="4" max="4" width="16" customWidth="1"/>
  </cols>
  <sheetData>
    <!-- 主标题 -->
    <row r="1" ht="28" customHeight="1">
      <c r="A1" t="s" s="4"><v>0</v></c>
    </row>
    <!-- 一、诉讼请求金额 -->
    <row r="3" ht="20" customHeight="1">
      <c r="A3" t="s" s="4"><v>1</v></c>
    </row>
    <row r="4">
      <c r="A4" t="s"><v>2</v></c>
      <c r="B4" s="5"><v>0</v></c>
    </row>
    <!-- 二、诉讼费计算 -->
    <row r="6" ht="20" customHeight="1">
      <c r="A6" t="s" s="4"><v>3</v></c>
    </row>
    <row r="7">
      <c r="A7" t="s" s="4"><v>4</v></c>
      <c r="B7" t="s" s="4"><v>5</v></c>
      <c r="C7" t="s" s="4"><v>6</v></c>
      <c r="D7" t="s" s="4"><v>7</v></c>
    </row>
    <!-- 分段计算行 -->
    <row r="8">
      <c r="A8" t="s"><v>8</v></c>
      <c r="B8" t="s"><v>9</v></c>
      <c r="C8" t="s"><v>10</v></c>
      <c r="D8" s="6"><f>IF(B4&lt;=10000,B4*0.06,10000*0.06)</f><v></v></c>
    </row>
    <row r="9">
      <c r="A9" t="s"><v>11</v></c>
      <c r="B9" t="s"><v>12</v></c>
      <c r="C9" t="s"><v>13</v></c>
      <c r="D9" s="6"><f>IF(AND(B4&gt;10000,B4&lt;=100000),MIN(B4,100000)*0.05-100,0)</f><v></v></c>
    </row>
    <row r="10">
      <c r="A10" t="s"><v>14</v></c>
      <c r="B10" t="s"><v>15</v></c>
      <c r="C10" t="s"><v>16</v></c>
      <c r="D10" s="6"><f>IF(AND(B4&gt;100000,B4&lt;=500000),MIN(B4,500000)*0.04-1500,0)</f><v></v></c>
    </row>
    <row r="11">
      <c r="A11" t="s"><v>17</v></c>
      <c r="B11" t="s"><v>18</v></c>
      <c r="C11" t="s"><v>19</v></c>
      <c r="D11" s="6"><f>IF(AND(B4&gt;500000,B4&lt;=1000000),MIN(B4,1000000)*0.03-2500,0)</f><v></v></c>
    </row>
    <row r="12">
      <c r="A12" t="s"><v>20</v></c>
      <c r="B12" t="s"><v>21</v></c>
      <c r="C12" t="s"><v>22</v></c>
      <c r="D12" s="6"><f>IF(AND(B4&gt;1000000,B4&lt;=5000000),MIN(B4,5000000)*0.02-5500,0)</f><v></v></c>
    </row>
    <row r="13">
      <c r="A13" t="s"><v>23</v></c>
      <c r="B13" t="s"><v>24</v></c>
      <c r="C13" t="s"><v>25</v></c>
      <c r="D13" s="6"><f>IF(AND(B4&gt;5000000,B4&lt;=10000000),MIN(B4,10000000)*0.015-10500,0)</f><v></v></c>
    </row>
    <row r="14">
      <c r="A14" t="s"><v>26</v></c>
      <c r="B14" t="s"><v>27</v></c>
      <c r="C14" t="s"><v>28</v></c>
      <c r="D14" s="6"><f>IF(B4&gt;10000000,B4*0.01-15500,0)</f><v></v></c>
    </row>
    <row r="15">
      <c r="A15" t="s" s="4"><v>29</v></c>
      <c r="D15" s="6"><f>SUM(D8:D14)</f><v></v></c>
    </row>
    <!-- 三、律师费参考 -->
    <row r="17" ht="20" customHeight="1">
      <c r="A17" t="s" s="4"><v>30</v></c>
    </row>
    <row r="18">
      <c r="A18" t="s" s="4"><v>31</v></c>
      <c r="B18" t="s" s="4"><v>32</v></c>
      <c r="C18" t="s" s="4"><v>33</v></c>
    </row>
    <row r="19">
      <c r="A19" t="s"><v>34</v></c>
      <c r="B19" t="s"><v>35</v></c>
      <c r="C19" t="s"><v>36</v></c>
    </row>
    <row r="20">
      <c r="A20" t="s"><v>37</v></c>
      <c r="B20" t="s"><v>38</v></c>
      <c r="C20" t="s"><v>39</v></c>
    </row>
    <row r="21">
      <c r="A21" t="s"><v>40</v></c>
      <c r="B21" t="s"><v>41</v></c>
      <c r="C21" t="s"><v>42</v></c>
    </row>
    <row r="22">
      <c r="A22" t="s"><v>43</v></c>
      <c r="B22" t="s"><v>44</v></c>
      <c r="C22" t="s"><v>45</v></c>
    </row>
    <row r="23">
      <c r="A23" t="s" s="1"><v>46</v></c>
      <c r="B23" s="1"><v>1</v></c>
    </row>
    <row r="24">
      <c r="A24" t="s"><v>47</v></c>
      <c r="B24" s="6"><f>CHOOSE(B23,B4*0.08,B4*0.12,B4*0.10,B4*0.10)</f><v></v></c>
    </row>
    <row r="25">
      <c r="A25" t="s"><v>48</v></c>
      <c r="B25" s="6"><f>CHOOSE(B23,5000,10000,20000,10000)</f><v></v></c>
    </row>
    <row r="26">
      <c r="A26" t="s" s="4"><v>49</v></c>
      <c r="B26" s="6"><f>MAX(B24,B25)</f><v></v></c>
    </row>
    <!-- 四、其他成本 -->
    <row r="28" ht="20" customHeight="1">
      <c r="A28" t="s" s="4"><v>50</v></c>
    </row>
    <row r="29">
      <c r="A29" t="s" s="4"><v>51</v></c>
      <c r="B29" t="s" s="4"><v>52</v></c>
    </row>
    <row r="30">
      <c r="A30" t="s"><v>53</v></c>
      <c r="B30" s="5"><v>0</v></c>
    </row>
    <row r="31">
      <c r="A31" t="s"><v>54</v></c>
      <c r="B31" s="5"><v>0</v></c>
    </row>
    <row r="32">
      <c r="A32" t="s"><v>55</v></c>
      <c r="B32" s="5"><v>0</v></c>
    </row>
    <row r="33">
      <c r="A33" t="s"><v>56</v></c>
      <c r="B33" s="5"><v>0</v></c>
    </row>
    <row r="34">
      <c r="A34" t="s"><v>57</v></c>
      <c r="B34" s="5"><v>0</v></c>
    </row>
    <row r="35">
      <c r="A35" t="s"><v>58</v></c>
      <c r="B35" s="5"><v>0</v></c>
    </row>
    <row r="36">
      <c r="A36" t="s" s="4"><v>59</v></c>
      <c r="B36" s="6"><f>SUM(B30:B35)</f><v></v></c>
    </row>
    <!-- 五、总成本汇总 -->
    <row r="38" ht="20" customHeight="1">
      <c r="A38" t="s" s="4"><v>60</v></c>
    </row>
    <row r="39">
      <c r="A39" t="s" s="4"><v>61</v></c>
      <c r="B39" t="s" s="4"><v>62</v></c>
    </row>
    <row r="40">
      <c r="A40" t="s"><v>63</v></c>
      <c r="B40" s="6"><f>D15</f><v></v></c>
    </row>
    <row r="41">
      <c r="A41" t="s"><v>64</v></c>
      <c r="B41" s="6"><f>B26</f><v></v></c>
    </row>
    <row r="42">
      <c r="A42" t="s"><v>65</v></c>
      <c r="B42" s="6"><f>B36</f><v></v></c>
    </row>
    <row r="43">
      <c r="A43" t="s" s="4"><v>66</v></c>
      <c r="B43" s="6"><f>SUM(B40:B42)</f><v></v></c>
    </row>
    <!-- 说明 -->
    <row r="45">
      <c r="A45" t="s"><v>67</v></c>
    </row>
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

    write_xml(work_dir, 'xl/worksheets/sheet1.xml', sheet_xml)

    # 更新workbook.xml
    workbook_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheets>
    <sheet name="诉讼费用速算表" sheetId="1" r:id="rId1"/>
  </sheets>
  <calcPr calcId="0"/>
</workbook>'''
    write_xml(work_dir, 'xl/workbook.xml', workbook_xml)

    # 更新[Content_Types].xml（保持模板不变，只有1个sheet）

    # 打包
    import zipfile
    output_path = os.path.join(OUTPUT_DIR, "诉讼费用速算表.xlsx")
    with zipfile.ZipFile(output_path, 'w', zipfile.ZIP_DEFLATED) as zf:
        for root, dirs, files in os.walk(work_dir):
            for file in files:
                file_path = os.path.join(root, file)
                arcname = os.path.relpath(file_path, work_dir)
                zf.write(file_path, arcname)

    print(f"创建: {output_path}")
    return output_path

# ============================================================
# 文件2: 诉讼时效追踪表.xlsx
# ============================================================
def create_limitations_period():
    work_dir = copy_template()

    strings = [
        "诉讼时效追踪表",  # 0
        "案件基本信息",  # 1
        "案件名称",  # 2
        "案号",  # 3
        "受理法院",  # 4
        "立案日期",  # 5
        "案件类型",  # 6
        "关键时限节点",  # 7
        "时效/期限类型",  # 8
        "起始日期",  # 9
        "截止日期",  # 10
        "剩余天数",  # 11
        "状态",  # 12
        "备注",  # 13
        "普通诉讼时效（3年）",  # 14
        "身体受到伤害赔偿（1年）",  # 15
        "租金纠纷（1年）",  # 16
        "产品质量纠纷（2年）",  # 17
        "行政诉讼（6个月）",  # 18
        "劳动仲裁（1年）",  # 19
        "执行申请（2年）",  # 20
        "上诉期（15日）",  # 21
        "举证时限（举证通知后）",  # 22
        "鉴定申请时限",  # 23
        "保全错误的赔偿时限",  # 24
        "票据权利（6个月）",  # 25
        "已过期限",  # 26
        "正常",  # 27
        "即将到期",  # 28
        "已失效",  # 29
        "说明：请根据具体案件补充或修改时限节点，系统将自动计算剩余天数。",  # 30
        "计算公式：剩余天数 = 截止日期 - TODAY()",  # 31
    ]

    write_xml(work_dir, 'xl/sharedStrings.xml', build_shared_strings(strings))

    # 构建sheet1.xml
    sheet_xml = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView workbookViewId="0">
      <pane ySplit="3" topLeftCell="A4" activePane="bottomLeft" state="frozen"/>
    </sheetView>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="18"/>
  <cols>
    <col min="1" max="1" width="24" customWidth="1"/>
    <col min="2" max="2" width="18" customWidth="1"/>
    <col min="3" max="3" width="14" customWidth="1"/>
    <col min="4" max="4" width="14" customWidth="1"/>
    <col min="5" max="5" width="12" customWidth="1"/>
    <col min="6" max="6" width="12" customWidth="1"/>
    <col min="7" max="7" width="20" customWidth="1"/>
  </cols>
  <sheetData>
    <!-- 主标题 -->
    <row r="1" ht="28" customHeight="1">
      <c r="A1" t="s" s="4"><v>0</v></c>
    </row>
    <!-- 案件基本信息 -->
    <row r="3" ht="20" customHeight="1">
      <c r="A3" t="s" s="4"><v>1</v></c>
    </row>
    <row r="4">
      <c r="A4" t="s"><v>2</v></c>
      <c r="B4" s="1"><v></v></c>
      <c r="A5" t="s"><v>3</v></c>
      <c r="B5" s="1"><v></v></c>
    </row>
    <row r="6">
      <c r="A6" t="s"><v>4</v></c>
      <c r="B6" s="1"><v></v></c>
      <c r="A7" t="s"><v>5</v></c>
      <c r="B7" s="1" t="d"><v>2024-01-01</v></c>
    </row>
    <row r="8">
      <c r="A8" t="s"><v>6</v></c>
      <c r="B8" s="1"><v>民事</v></c>
    </row>
    <!-- 关键时限节点 -->
    <row r="10" ht="20" customHeight="1">
      <c r="A10" t="s" s="4"><v>7</v></c>
    </row>
    <row r="11">
      <c r="A11" t="s" s="4"><v>8</v></c>
      <c r="B11" t="s" s="4"><v>9</v></c>
      <c r="C11" t="s" s="4"><v>10</v></c>
      <c r="D11" t="s" s="4"><v>11</v></c>
      <c r="E11" t="s" s="4"><v>12</v></c>
      <c r="F11" t="s" s="4"><v>13</v></c>
    </row>
    <!-- 时效行 -->
    <row r="12">
      <c r="A12" t="s"><v>14</v></c>
      <c r="B12" s="1" t="d"><v>2024-01-01</v></c>
      <c r="C12" s="6"><f>DATE(YEAR(B12),MONTH(B12)+3*12,DAY(B12))</f><v></v></c>
      <c r="D12" s="6"><f>C12-TODAY()</f><v></v></c>
      <c r="E12" s="6"><f>IF(D12&lt;0,"已过期限",IF(D12&lt;=30,"即将到期","正常"))</f><v></v></c>
      <c r="F12" t="s"><v></v></c>
    </row>
    <row r="13">
      <c r="A13" t="s"><v>15</v></c>
      <c r="B13" s="1" t="d"><v>2024-01-01</v></c>
      <c r="C13" s="6"><f>DATE(YEAR(B13),MONTH(B13)+1*12,DAY(B13))</f><v></v></c>
      <c r="D13" s="6"><f>C13-TODAY()</f><v></v></c>
      <c r="E13" s="6"><f>IF(D13&lt;0,"已过期限",IF(D13&lt;=30,"即将到期","正常"))</f><v></v></c>
      <c r="F13" t="s"><v></v></c>
    </row>
    <row r="14">
      <c r="A14" t="s"><v>16</v></c>
      <c r="B14" s="1" t="d"><v>2024-01-01</v></c>
      <c r="C14" s="6"><f>DATE(YEAR(B14),MONTH(B14)+1*12,DAY(B14))</f><v></v></c>
      <c r="D14" s="6"><f>C14-TODAY()</f><v></v></c>
      <c r="E14" s="6"><f>IF(D14&lt;0,"已过期限",IF(D14&lt;=30,"即将到期","正常"))</f><v></v></c>
      <c r="F14" t="s"><v></v></c>
    </row>
    <row r="15">
      <c r="A15" t="s"><v>17</v></c>
      <c r="B15" s="1" t="d"><v>2024-01-01</v></c>
      <c r="C15" s="6"><f>DATE(YEAR(B15),MONTH(B15)+2*12,DAY(B15))</f><v></v></c>
      <c r="D15" s="6"><f>C15-TODAY()</f><v></v></c>
      <c r="E15" s="6"><f>IF(D15&lt;0,"已过期限",IF(D15&lt;=30,"即将到期","正常"))</f><v></v></c>
      <c r="F15" t="s"><v></v></c>
    </row>
    <row r="16">
      <c r="A16" t="s"><v>18</v></c>
      <c r="B16" s="1" t="d"><v>2024-01-01</v></c>
      <c r="C16" s="6"><f>DATE(YEAR(B16),MONTH(B16)+6,DAY(B16))</f><v></v></c>
      <c r="D16" s="6"><f>C16-TODAY()</f><v></v></c>
      <c r="E16" s="6"><f>IF(D16&lt;0,"已过期限",IF(D16&lt;=30,"即将到期","正常"))</f><v></v></c>
      <c r="F16" t="s"><v></v></c>
    </row>
    <row r="17">
      <c r="A17" t="s"><v>19</v></c>
      <c r="B17" s="1" t="d"><v>2024-01-01</v></c>
      <c r="C17" s="6"><f>DATE(YEAR(B17),MONTH(B17)+1*12,DAY(B17))</f><v></v></c>
      <c r="D17" s="6"><f>C17-TODAY()</f><v></v></c>
      <c r="E17" s="6"><f>IF(D17&lt;0,"已过期限",IF(D17&lt;=30,"即将到期","正常"))</f><v></v></c>
      <c r="F17" t="s"><v></v></c>
    </row>
    <row r="18">
      <c r="A18" t="s"><v>20</v></c>
      <c r="B18" s="1" t="d"><v>2024-01-01</v></c>
      <c r="C18" s="6"><f>DATE(YEAR(B18),MONTH(B18)+2*12,DAY(B18))</f><v></v></c>
      <c r="D18" s="6"><f>C18-TODAY()</f><v></v></c>
      <c r="E18" s="6"><f>IF(D18&lt;0,"已过期限",IF(D18&lt;=30,"即将到期","正常"))</f><v></v></c>
      <c r="F18" t="s"><v></v></c>
    </row>
    <row r="19">
      <c r="A19" t="s"><v>21</v></c>
      <c r="B19" s="1" t="d"><v>2024-01-01</v></c>
      <c r="C19" s="6"><f>B19+15</f><v></v></c>
      <c r="D19" s="6"><f>C19-TODAY()</f><v></v></c>
      <c r="E19" s="6"><f>IF(D19&lt;0,"已过期限",IF(D19&lt;=5,"即将到期","正常"))</f><v></v></c>
      <c r="F19" t="s"><v></v></c>
    </row>
    <row r="20">
      <c r="A20" t="s"><v>22</v></c>
      <c r="B20" s="1" t="d"><v>2024-01-01</v></c>
      <c r="C20" s="6"><f>B20+30</f><v></v></c>
      <c r="D20" s="6"><f>C20-TODAY()</f><v></v></c>
      <c r="E20" s="6"><f>IF(D20&lt;0,"已过期限",IF(D20&lt;=7,"即将到期","正常"))</f><v></v></c>
      <c r="F20" t="s"><v></v></c>
    </row>
    <row r="21">
      <c r="A21" t="s"><v>23</v></c>
      <c r="B21" s="1" t="d"><v>2024-01-01</v></c>
      <c r="C21" s="6"><f>B21+15</f><v></v></c>
      <c r="D21" s="6"><f>C21-TODAY()</f><v></v></c>
      <c r="E21" s="6"><f>IF(D21&lt;0,"已过期限",IF(D21&lt;=7,"即将到期","正常"))</f><v></v></c>
      <c r="F21" t="s"><v></v></c>
    </row>
    <row r="22">
      <c r="A22" t="s"><v>24</v></c>
      <c r="B22" s="1" t="d"><v>2024-01-01</v></c>
      <c r="C22" s="6"><f>B22+1</f><v></v></c>
      <c r="D22" s="6"><f>C22-TODAY()</f><v></v></c>
      <c r="E22" s="6"><f>IF(D22&lt;0,"已失效","正常")</f><v></v></c>
      <c r="F22" t="s"><v></v></c>
    </row>
    <row r="23">
      <c r="A23" t="s"><v>25</v></c>
      <c r="B23" s="1" t="d"><v>2024-01-01</v></c>
      <c r="C23" s="6"><f>B23+6</f><v></v></c>
      <c r="D23" s="6"><f>C23-TODAY()</f><v></v></c>
      <c r="E23" s="6"><f>IF(D23&lt;0,"已过期限",IF(D23&lt;=30,"即将到期","正常"))</f><v></v></c>
      <c r="F23" t="s"><v></v></c>
    </row>
    <!-- 说明 -->
    <row r="25">
      <c r="A25" t="s"><v>30</v></c>
    </row>
    <row r="26">
      <c r="A26" t="s"><v>31</v></c>
    </row>
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

    write_xml(work_dir, 'xl/worksheets/sheet1.xml', sheet_xml)

    workbook_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheets>
    <sheet name="诉讼时效追踪表" sheetId="1" r:id="rId1"/>
  </sheets>
  <calcPr calcId="0"/>
</workbook>'''
    write_xml(work_dir, 'xl/workbook.xml', workbook_xml)

    import zipfile
    output_path = os.path.join(OUTPUT_DIR, "诉讼时效追踪表.xlsx")
    with zipfile.ZipFile(output_path, 'w', zipfile.ZIP_DEFLATED) as zf:
        for root, dirs, files in os.walk(work_dir):
            for file in files:
                file_path = os.path.join(root, file)
                arcname = os.path.relpath(file_path, work_dir)
                zf.write(file_path, arcname)

    print(f"创建: {output_path}")
    return output_path

# ============================================================
# 文件3: 证据清单工作表.xlsx
# ============================================================
def create_evidence_list():
    work_dir = copy_template()

    strings = [
        "证据清单工作表",  # 0
        "填写说明",  # 1
        "1. 证据编号：使用字母+数字格式，如A1、A2，B1、B2等",  # 2
        "2. 证据类型：书证/物证/证人证言/鉴定意见/视听资料/电子数据/当事人陈述",  # 3
        "3. 证明目的：简述该证据要证明的事实",  # 4
        "4. 是否原件：填写是/否",  # 5
        "证据编号",  # 6
        "证据名称",  # 7
        "证据类型",  # 8
        "证明目的",  # 9
        "来源/持有人",  # 10
        "是否原件",  # 11
        "收集日期",  # 12
        "备注",  # 13
        "书证",  # 14
        "物证",  # 15
        "证人证言",  # 16
        "鉴定意见",  # 17
        "视听资料",  # 18
        "电子数据",  # 19
        "当事人陈述",  # 20
        "合计：共",  # 21
        "份证据",  # 22
        "其中原件",  # 23
        "份，复印件",  # 24
        "份",  # 25
        "说明：本表用于系统整理案件证据，建议按证据重要性和证明逻辑排列。",  # 26
    ]

    write_xml(work_dir, 'xl/sharedStrings.xml', build_shared_strings(strings))

    # 构建sheet1.xml
    sheet_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView workbookViewId="0">
      <pane ySplit="4" topLeftCell="A5" activePane="bottomLeft" state="frozen"/>
      <selection activeCell="A5" sqref="A5"/>
    </sheetView>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="18"/>
  <cols>
    <col min="1" max="1" width="10" customWidth="1"/>
    <col min="2" max="2" width="22" customWidth="1"/>
    <col min="3" max="3" width="14" customWidth="1"/>
    <col min="4" max="4" width="28" customWidth="1"/>
    <col min="5" max="5" width="16" customWidth="1"/>
    <col min="6" max="6" width="10" customWidth="1"/>
    <col min="7" max="7" width="12" customWidth="1"/>
    <col min="8" max="8" width="18" customWidth="1"/>
  </cols>
  <sheetData>
    <!-- 主标题 -->
    <row r="1" ht="28" customHeight="1">
      <c r="A1" t="s" s="4"><v>0</v></c>
    </row>
    <!-- 填写说明 -->
    <row r="3">
      <c r="A3" t="s" s="4"><v>1</v></c>
    </row>
    <row r="4">
      <c r="A4" t="s"><v>2</v></c>
    </row>
    <row r="5">
      <c r="A5" t="s"><v>3</v></c>
    </row>
    <row r="6">
      <c r="A6" t="s"><v>4</v></c>
    </row>
    <row r="7">
      <c r="A7" t="s"><v>5</v></c>
    </row>
    <!-- 表头 -->
    <row r="9">
      <c r="A9" t="s" s="4"><v>6</v></c>
      <c r="B9" t="s" s="4"><v>7</v></c>
      <c r="C9" t="s" s="4"><v>8</v></c>
      <c r="D9" t="s" s="4"><v>9</v></c>
      <c r="E9" t="s" s="4"><v>10</v></c>
      <c r="F9" t="s" s="4"><v>11</v></c>
      <c r="G9" t="s" s="4"><v>12</v></c>
      <c r="H9" t="s" s="4"><v>13</v></c>
    </row>
    <!-- 数据行1-10 -->
    <row r="10">
      <c r="A10" s="1"><v>A1</v></c>
      <c r="B10" s="1"><v></v></c>
      <c r="C10" s="1"><v>书证</v></c>
      <c r="D10" s="1"><v></v></c>
      <c r="E10" s="1"><v></v></c>
      <c r="F10" s="1"><v>是</v></c>
      <c r="G10" s="1" t="d"><v>2024-01-01</v></c>
      <c r="H10" s="1"><v></v></c>
    </row>
    <row r="11">
      <c r="A11" s="1"><v>A2</v></c>
      <c r="B11" s="1"><v></v></c>
      <c r="C11" s="1"><v>书证</v></c>
      <c r="D11" s="1"><v></v></c>
      <c r="E11" s="1"><v></v></c>
      <c r="F11" s="1"><v>是</v></c>
      <c r="G11" s="1" t="d"><v>2024-01-01</v></c>
      <c r="H11" s="1"><v></v></c>
    </row>
    <row r="12">
      <c r="A12" s="1"><v>A3</v></c>
      <c r="B12" s="1"><v></v></c>
      <c r="C12" s="1"><v>物证</v></c>
      <c r="D12" s="1"><v></v></c>
      <c r="E12" s="1"><v></v></c>
      <c r="F12" s="1"><v>是</v></c>
      <c r="G12" s="1" t="d"><v>2024-01-01</v></c>
      <c r="H12" s="1"><v></v></c>
    </row>
    <row r="13">
      <c r="A13" s="1"><v>A4</v></c>
      <c r="B13" s="1"><v></v></c>
      <c r="C13" s="1"><v>证人证言</v></c>
      <c r="D13" s="1"><v></v></c>
      <c r="E13" s="1"><v></v></c>
      <c r="F13" s="1"><v>否</v></c>
      <c r="G13" s="1" t="d"><v>2024-01-01</v></c>
      <c r="H13" s="1"><v></v></c>
    </row>
    <row r="14">
      <c r="A14" s="1"><v>A5</v></c>
      <c r="B14" s="1"><v></v></c>
      <c r="C14" s="1"><v>鉴定意见</v></c>
      <c r="D14" s="1"><v></v></c>
      <c r="E14" s="1"><v></v></c>
      <c r="F14" s="1"><v>是</v></c>
      <c r="G14" s="1" t="d"><v>2024-01-01</v></c>
      <c r="H14" s="1"><v></v></c>
    </row>
    <row r="15">
      <c r="A15" s="1"><v>A6</v></c>
      <c r="B15" s="1"><v></v></c>
      <c r="C15" s="1"><v>视听资料</v></c>
      <c r="D15" s="1"><v></v></c>
      <c r="E15" s="1"><v></v></c>
      <c r="F15" s="1"><v>是</v></c>
      <c r="G15" s="1" t="d"><v>2024-01-01</v></c>
      <c r="H15" s="1"><v></v></c>
    </row>
    <row r="16">
      <c r="A16" s="1"><v>A7</v></c>
      <c r="B16" s="1"><v></v></c>
      <c r="C16" s="1"><v>电子数据</v></c>
      <c r="D16" s="1"><v></v></c>
      <c r="E16" s="1"><v></v></c>
      <c r="F16" s="1"><v>否</v></c>
      <c r="G16" s="1" t="d"><v>2024-01-01</v></c>
      <c r="H16" s="1"><v></v></c>
    </row>
    <row r="17">
      <c r="A17" s="1"><v>A8</v></c>
      <c r="B17" s="1"><v></v></c>
      <c r="C17" s="1"><v>当事人陈述</v></c>
      <c r="D17" s="1"><v></v></c>
      <c r="E17" s="1"><v></v></c>
      <c r="F17" s="1"><v>否</v></c>
      <c r="G17" s="1" t="d"><v>2024-01-01</v></c>
      <c r="H17" s="1"><v></v></c>
    </row>
    <row r="18">
      <c r="A18" s="1"><v>B1</v></c>
      <c r="B18" s="1"><v></v></c>
      <c r="C18" s="1"><v>书证</v></c>
      <c r="D18" s="1"><v></v></c>
      <c r="E18" s="1"><v></v></c>
      <c r="F18" s="1"><v>是</v></c>
      <c r="G18" s="1" t="d"><v>2024-01-01</v></c>
      <c r="H18" s="1"><v></v></c>
    </row>
    <row r="19">
      <c r="A19" s="1"><v>B2</v></c>
      <c r="B19" s="1"><v></v></c>
      <c r="C19" s="1"><v>书证</v></c>
      <c r="D19" s="1"><v></v></c>
      <c r="E19" s="1"><v></v></c>
      <c r="F19" s="1"><v>否</v></c>
      <c r="G19" s="1" t="d"><v>2024-01-01</v></c>
      <c r="H19" s="1"><v></v></c>
    </row>
    <!-- 统计行 -->
    <row r="21">
      <c r="A21" t="s" s="4"><v>21</v></c>
      <c r="B21" s="6"><f>COUNTA(A10:A19)</f><v></v></c>
      <c r="C21" t="s" s="4"><v>22</v></c>
    </row>
    <row r="22">
      <c r="A22" t="s" s="4"><v>23</v></c>
      <c r="B22" s="6"><f>COUNTIF(F10:F19,"是")</f><v></v></c>
      <c r="C22" t="s" s="4"><v>24</v></c>
      <c r="D22" s="6"><f>COUNTA(A10:A19)-COUNTIF(F10:F19,"是")</f><v></v></c>
      <c r="E22" t="s" s="4"><v>25</v></c>
    </row>
    <!-- 说明 -->
    <row r="24">
      <c r="A24" t="s"><v>26</v></c>
    </row>
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

    write_xml(work_dir, 'xl/worksheets/sheet1.xml', sheet_xml)

    workbook_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheets>
    <sheet name="证据清单" sheetId="1" r:id="rId1"/>
  </sheets>
  <calcPr calcId="0"/>
</workbook>'''
    write_xml(work_dir, 'xl/workbook.xml', workbook_xml)

    import zipfile
    output_path = os.path.join(OUTPUT_DIR, "证据清单工作表.xlsx")
    with zipfile.ZipFile(output_path, 'w', zipfile.ZIP_DEFLATED) as zf:
        for root, dirs, files in os.walk(work_dir):
            for file in files:
                file_path = os.path.join(root, file)
                arcname = os.path.relpath(file_path, work_dir)
                zf.write(file_path, arcname)

    print(f"创建: {output_path}")
    return output_path

# ============================================================
# 文件4: 被执行财产线索追踪表.xlsx
# ============================================================
def create_property_tracking():
    work_dir = copy_template()

    strings = [
        "被执行财产线索追踪表",  # 0
        "使用说明",  # 1
        "1. 本表用于执行阶段追踪被执行人财产线索",  # 2
        "2. 发现新线索请及时填写，并注明发现日期",  # 3
        "3. 查封状态请及时更新：已查封/解封/执行中",  # 4
        "财产类型",  # 5
        "财产线索",  # 6
        "金额/估值（元）",  # 7
        "发现日期",  # 8
        "查封状态",  # 9
        "执行法院",  # 10
        "备注",  # 11
        "银行账户",  # 12
        "银行名称",  # 13
        "账号",  # 14
        "存款",  # 15
        "房产",  # 16
        "房产地址",  # 17
        "建筑面积",  # 18
        "预估价值",  # 19
        "车辆",  # 20
        "车牌号",  # 21
        "车辆品牌",  # 22
        "评估价值",  # 23
        "股票/基金",  # 24
        "证券公司",  # 25
        "账户号码",  # 26
        "市值",  # 27
        "保险产品",  # 28
        "保险公司",  # 29
        "保单号",  # 30
        "现金价值",  # 31
        "应收账款",  # 32
        "债务人",  # 33
        "欠款金额",  # 34
        "到期日",  # 35
        "其他财产",  # 36
        "财产描述",  # 37
        "估值",  # 38
        "已查封",  # 39
        "未查封",  # 40
        "执行中",  # 41
        "已执行",  # 42
        "财产汇总",  # 43
        "财产类型",  # 44
        "笔数",  # 45
        "总金额/估值",  # 46
        "说明：",  # 47
        "本表用于系统追踪被执行人可供执行的财产线索，为执行程序提供参考。",  # 48
    ]

    write_xml(work_dir, 'xl/sharedStrings.xml', build_shared_strings(strings))

    # 构建sheet1.xml
    sheet_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView workbookViewId="0">
      <pane ySplit="4" topLeftCell="A6" activePane="bottomLeft" state="frozen"/>
      <selection activeCell="A6" sqref="A6"/>
    </sheetView>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="18"/>
  <cols>
    <col min="1" max="1" width="14" customWidth="1"/>
    <col min="2" max="2" width="24" customWidth="1"/>
    <col min="3" max="3" width="18" customWidth="1"/>
    <col min="4" max="4" width="14" customWidth="1"/>
    <col min="5" max="5" width="12" customWidth="1"/>
    <col min="6" max="6" width="16" customWidth="1"/>
    <col min="7" max="7" width="20" customWidth="1"/>
  </cols>
  <sheetData>
    <!-- 主标题 -->
    <row r="1" ht="28" customHeight="1">
      <c r="A1" t="s" s="4"><v>0</v></c>
    </row>
    <!-- 使用说明 -->
    <row r="3">
      <c r="A3" t="s" s="4"><v>1</v></c>
    </row>
    <row r="4">
      <c r="A4" t="s"><v>2</v></c>
    </row>
    <row r="5">
      <c r="A5" t="s"><v>3</v></c>
    </row>
    <!-- 表头 -->
    <row r="6">
      <c r="A6" t="s" s="4"><v>5</v></c>
      <c r="B6" t="s" s="4"><v>6</v></c>
      <c r="C6" t="s" s="4"><v>7</v></c>
      <c r="D6" t="s" s="4"><v>8</v></c>
      <c r="E6" t="s" s="4"><v>9</v></c>
      <c r="F6" t="s" s="4"><v>10</v></c>
      <c r="G6" t="s" s="4"><v>11</v></c>
    </row>
    <!-- 银行账户 -->
    <row r="7">
      <c r="A7" t="s" s="4"><v>12</v></c>
      <c r="B7" s="1"><v>银行名称：</v></c>
      <c r="C7" s="1"><v>账号：</v></c>
      <c r="D7" s="1" t="d"><v>2024-01-01</v></c>
      <c r="E7" s="1"><v>未查封</v></c>
      <c r="F7" s="1"><v></v></c>
      <c r="G7" s="1"><v></v></c>
    </row>
    <row r="8">
      <c r="B8" s="1"><v></v></c>
      <c r="C8" s="1"><v></v></c>
      <c r="D8" s="1" t="d"><v>2024-01-01</v></c>
      <c r="E8" s="1"><v>未查封</v></c>
      <c r="F8" s="1"><v></v></c>
      <c r="G8" s="1"><v></v></c>
    </row>
    <!-- 房产 -->
    <row r="10">
      <c r="A10" t="s" s="4"><v>16</v></c>
      <c r="B10" s="1"><v>地址：</v></c>
      <c r="C10" s="1"><v>面积：</v></c>
      <c r="D10" s="1" t="d"><v>2024-01-01</v></c>
      <c r="E10" s="1"><v>未查封</v></c>
      <c r="F10" s="1"><v></v></c>
      <c r="G10" s="1"><v></v></c>
    </row>
    <row r="11">
      <c r="B11" s="1"><v></v></c>
      <c r="C11" s="1"><v></v></c>
      <c r="D11" s="1" t="d"><v>2024-01-01</v></c>
      <c r="E11" s="1"><v>未查封</v></c>
      <c r="F11" s="1"><v></v></c>
      <c r="G11" s="1"><v></v></c>
    </row>
    <!-- 车辆 -->
    <row r="13">
      <c r="A13" t="s" s="4"><v>20</v></c>
      <c r="B13" s="1"><v>车牌号：</v></c>
      <c r="C13" s="1"><v>品牌：</v></c>
      <c r="D13" s="1" t="d"><v>2024-01-01</v></c>
      <c r="E13" s="1"><v>未查封</v></c>
      <c r="F13" s="1"><v></v></c>
      <c r="G13" s="1"><v></v></c>
    </row>
    <row r="14">
      <c r="B14" s="1"><v></v></c>
      <c r="C14" s="1"><v></v></c>
      <c r="D14" s="1" t="d"><v>2024-01-01</v></c>
      <c r="E14" s="1"><v>未查封</v></c>
      <c r="F14" s="1"><v></v></c>
      <c r="G14" s="1"><v></v></c>
    </row>
    <!-- 股票基金 -->
    <row r="16">
      <c r="A16" t="s" s="4"><v>24</v></c>
      <c r="B16" s="1"><v>证券公司：</v></c>
      <c r="C16" s="1"><v>账户：</v></c>
      <c r="D16" s="1" t="d"><v>2024-01-01</v></c>
      <c r="E16" s="1"><v>未查封</v></c>
      <c r="F16" s="1"><v></v></c>
      <c r="G16" s="1"><v></v></c>
    </row>
    <!-- 保险产品 -->
    <row r="18">
      <c r="A18" t="s" s="4"><v>28</v></c>
      <c r="B18" s="1"><v>公司：</v></c>
      <c r="C18" s="1"><v>保单号：</v></c>
      <c r="D18" s="1" t="d"><v>2024-01-01</v></c>
      <c r="E18" s="1"><v>未查封</v></c>
      <c r="F18" s="1"><v></v></c>
      <c r="G18" s="1"><v></v></c>
    </row>
    <!-- 应收账款 -->
    <row r="20">
      <c r="A20" t="s" s="4"><v>32</v></c>
      <c r="B20" s="1"><v>债务人：</v></c>
      <c r="C20" s="1"><v>到期日：</v></c>
      <c r="D20" s="1" t="d"><v>2024-01-01</v></c>
      <c r="E20" s="1"><v>未查封</v></c>
      <c r="F20" s="1"><v></v></c>
      <c r="G20" s="1"><v></v></c>
    </row>
    <!-- 其他财产 -->
    <row r="22">
      <c r="A22" t="s" s="4"><v>36</v></c>
      <c r="B22" s="1"><v>描述：</v></c>
      <c r="C22" s="1"><v></v></c>
      <c r="D22" s="1" t="d"><v>2024-01-01</v></c>
      <c r="E22" s="1"><v>未查封</v></c>
      <c r="F22" s="1"><v></v></c>
      <c r="G22" s="1"><v></v></c>
    </row>
    <row r="23">
      <c r="B23" s="1"><v></v></c>
      <c r="C23" s="1"><v></v></c>
      <c r="D23" s="1" t="d"><v>2024-01-01</v></c>
      <c r="E23" s="1"><v>未查封</v></c>
      <c r="F23" s="1"><v></v></c>
      <c r="G23" s="1"><v></v></c>
    </row>
    <!-- 财产汇总 -->
    <row r="25">
      <c r="A25" t="s" s="4"><v>43</v></c>
    </row>
    <row r="26">
      <c r="A26" t="s" s="4"><v>44</v></c>
      <c r="B26" t="s" s="4"><v>45</v></c>
      <c r="C26" t="s" s="4"><v>46</v></c>
    </row>
    <row r="27">
      <c r="A27" t="s"><v>12</v></c>
      <c r="B27" s="6"><f>COUNTIF(A:A,"银行账户")</f><v></v></c>
      <c r="C27" s="6"><f>SUMIF(A:A,"银行账户",C:C)</f><v></v></c>
    </row>
    <row r="28">
      <c r="A28" t="s"><v>16</v></c>
      <c r="B28" s="6"><f>COUNTIF(A:A,"房产")</f><v></v></c>
      <c r="C28" s="6"><f>SUMIF(A:A,"房产",C:C)</f><v></v></c>
    </row>
    <row r="29">
      <c r="A29" t="s"><v>20</v></c>
      <c r="B29" s="6"><f>COUNTIF(A:A,"车辆")</f><v></v></c>
      <c r="C29" s="6"><f>SUMIF(A:A,"车辆",C:C)</f><v></v></c>
    </row>
    <row r="30">
      <c r="A30" t="s"><v>24</v></c>
      <c r="B30" s="6"><f>COUNTIF(A:A,"股票/基金")</f><v></v></c>
      <c r="C30" s="6"><f>SUMIF(A:A,"股票/基金",C:C)</f><v></v></c>
    </row>
    <row r="31">
      <c r="A31" t="s"><v>28</v></c>
      <c r="B31" s="6"><f>COUNTIF(A:A,"保险产品")</f><v></v></c>
      <c r="C31" s="6"><f>SUMIF(A:A,"保险产品",C:C)</f><v></v></c>
    </row>
    <row r="32">
      <c r="A32" t="s"><v>32</v></c>
      <c r="B32" s="6"><f>COUNTIF(A:A,"应收账款")</f><v></v></c>
      <c r="C32" s="6"><f>SUMIF(A:A,"应收账款",C:C)</f><v></v></c>
    </row>
    <row r="33">
      <c r="A33" t="s"><v>36</v></c>
      <c r="B33" s="6"><f>COUNTIF(A:A,"其他财产")</f><v></v></c>
      <c r="C33" s="6"><f>SUMIF(A:A,"其他财产",C:C)</f><v></v></c>
    </row>
    <row r="34">
      <c r="A34" t="s" s="4"><v>合计</v></c>
      <c r="B34" s="6"><f>SUM(B27:B33)</f><v></v></c>
      <c r="C34" s="6"><f>SUM(C27:C33)</f><v></v></c>
    </row>
    <!-- 说明 -->
    <row r="36">
      <c r="A36" t="s" s="4"><v>47</v></c>
    </row>
    <row r="37">
      <c r="A37" t="s"><v>48</v></c>
    </row>
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

    write_xml(work_dir, 'xl/worksheets/sheet1.xml', sheet_xml)

    workbook_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheets>
    <sheet name="财产线索追踪" sheetId="1" r:id="rId1"/>
  </sheets>
  <calcPr calcId="0"/>
</workbook>'''
    write_xml(work_dir, 'xl/workbook.xml', workbook_xml)

    import zipfile
    output_path = os.path.join(OUTPUT_DIR, "被执行财产线索追踪表.xlsx")
    with zipfile.ZipFile(output_path, 'w', zipfile.ZIP_DEFLATED) as zf:
        for root, dirs, files in os.walk(work_dir):
            for file in files:
                file_path = os.path.join(root, file)
                arcname = os.path.relpath(file_path, work_dir)
                zf.write(file_path, arcname)

    print(f"创建: {output_path}")
    return output_path

# 主函数
if __name__ == "__main__":
    print("开始创建Excel文件...")
    print(f"输出目录: {OUTPUT_DIR}")

    create_litigation_cost()
    create_limitations_period()
    create_evidence_list()
    create_property_tracking()

    print("\n全部创建完成！")
