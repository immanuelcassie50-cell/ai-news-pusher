# -*- coding: utf-8 -*-
import os

# sharedStrings.xml
sharedStrings = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="42" uniqueCount="36">
  <si><t>需求层次分析表</t></si>
  <si><t>深度需求挖掘配套工具</t></si>
  <si><t>需求类型</t></si>
  <si><t>需求项目</t></si>
  <si><t>客户原话</t></si>
  <si><t>影响程度（1-5）</t></si>
  <si><t>权重（%）</t></si>
  <si><t>优先级评分</t></si>
  <si><t>一、生存需求</t></si>
  <si><t>财务安全保障</t></si>
  <si><t>风险规避保障</t></si>
  <si><t>稳定性保障</t></si>
  <si><t>二、关系需求</t></si>
  <si><t>社会关系维护</t></si>
  <si><t>被尊重与认可</t></si>
  <si><t>归属感与认同</t></si>
  <si><t>三、成长需求</t></si>
  <si><t>自我提升追求</t></si>
  <si><t>成就感实现</t></si>
  <si><t>精神价值认同</t></si>
  <si><t>综合优先级排名</t></si>
  <si><t>最高优先级需求</t></si>
  <si><t>综合结论与建议</t></si>
  <si><t>优先级评分说明：优先级评分 = 影响程度 × 权重（%），分数越高表示需求越迫切</t></si>
  <si><t>请输入客户表达的相关内容</t></si>
  <si><t>综合评分</t></si>
</sst>'''

# workbook.xml
workbook = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <fileVersion appName="xl" lastEdited="7" lowestEdited="7"/>
  <workbookPr defaultThemeVersion="166925"/>
  <bookViews>
    <workbookView xWindow="0" yWindow="0" windowWidth="20140" windowHeight="10960"/>
  </bookViews>
  <sheets>
    <sheet name="需求层次分析" sheetId="1" r:id="rId1"/>
  </sheets>
  <calcPr calcId="191029"/>
</workbook>'''

base = '/tmp/xlsx_work/minimal_xlsx'

with open(os.path.join(base, 'xl/sharedStrings.xml'), 'w', encoding='utf-8') as f:
    f.write(sharedStrings)
print('sharedStrings.xml written')

with open(os.path.join(base, 'xl/workbook.xml'), 'w', encoding='utf-8') as f:
    f.write(workbook)
print('workbook.xml written')

# sheet1.xml
sheet1 = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView tabSelected="1" workbookViewId="0">
      <pane ySplit="4" topLeftCell="A5" activePane="bottomLeft" state="frozen"/>
    </sheetView>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="18" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols>
    <col min="1" max="1" width="14" customWidth="1"/>
    <col min="2" max="2" width="16" customWidth="1"/>
    <col min="3" max="3" width="28" customWidth="1"/>
    <col min="4" max="4" width="14" customWidth="1"/>
    <col min="5" max="5" width="12" customWidth="1"/>
    <col min="6" max="6" width="14" customWidth="1"/>
    <col min="7" max="7" width="14" customWidth="1"/>
  </cols>
  <sheetData>
    <row r="1" ht="30" customHeight="1">
      <c r="A1" t="s" s="4"><v>0</v></c>
    </row>
    <row r="2" ht="18" customHeight="1">
      <c r="A2" t="s" s="0"><v>1</v></c>
    </row>
    <row r="3" ht="8" customHeight="1"/>
    <row r="4" ht="20" customHeight="1">
      <c r="A4" t="s" s="15"><v>2</v></c>
      <c r="B4" t="s" s="15"><v>3</v></c>
      <c r="C4" t="s" s="15"><v>4</v></c>
      <c r="D4" t="s" s="15"><v>5</v></c>
      <c r="E4" t="s" s="15"><v>6</v></c>
      <c r="F4" t="s" s="15"><v>7</v></c>
      <c r="G4" t="s" s="15"><v>8</v></c>
    </row>
    <row r="5" ht="20" customHeight="1">
      <c r="A5" t="s" s="13"><v>8</v></c>
      <c r="B5" t="s" s="13"><v>9</v></c>
      <c r="C5" t="s" s="13"><v>23</v></c>
      <c r="D5" t="s" s="13"><v>5</v></c>
      <c r="E5" t="s" s="13"><v>6</v></c>
      <c r="F5" t="s" s="13"><v>7</v></c>
      <c r="G5" t="s" s="13"><v>8</v></c>
    </row>
    <row r="6" ht="18" customHeight="1">
      <c r="A6" t="s" s="0"><v>8</v></c>
      <c r="B6" t="s" s="0"><v>9</v></c>
      <c r="C6" t="s" s="0"><v>23</v></c>
      <c r="D6" s="1"><v>4</v></c>
      <c r="E6" s="7"><v>0.25</v></c>
      <c r="F6" s="2"><f>D6*E6</f><v></v></c>
      <c r="G6" t="s" s="0"><v>8</v></c>
    </row>
    <row r="7" ht="18" customHeight="1">
      <c r="A7" t="s" s="0"><v>8</v></c>
      <c r="B7" t="s" s="0"><v>10</v></c>
      <c r="C7" t="s" s="0"><v>23</v></c>
      <c r="D7" s="1"><v>5</v></c>
      <c r="E7" s="7"><v>0.25</v></c>
      <c r="F7" s="2"><f>D7*E7</f><v></v></c>
      <c r="G7" t="s" s="0"><v>8</v></c>
    </row>
    <row r="8" ht="18" customHeight="1">
      <c r="A8" t="s" s="0"><v>8</v></c>
      <c r="B8" t="s" s="0"><v>11</v></c>
      <c r="C8" t="s" s="0"><v>23</v></c>
      <c r="D8" s="1"><v>3</v></c>
      <c r="E8" s="7"><v>0.25</v></c>
      <c r="F8" s="2"><f>D8*E8</f><v></v></c>
      <c r="G8" t="s" s="0"><v>8</v></c>
    </row>
    <row r="9" ht="20" customHeight="1">
      <c r="A9" t="s" s="14"><v>12</v></c>
      <c r="B9" t="s" s="14"><v>13</v></c>
      <c r="C9" t="s" s="14"><v>23</v></c>
      <c r="D9" t="s" s="14"><v>5</v></c>
      <c r="E9" t="s" s="14"><v>6</v></c>
      <c r="F9" t="s" s="14"><v>7</v></c>
      <c r="G9" t="s" s="14"><v>8</v></c>
    </row>
    <row r="10" ht="18" customHeight="1">
      <c r="A10" t="s" s="0"><v>12</v></c>
      <c r="B10" t="s" s="0"><v>13</v></c>
      <c r="C10" t="s" s="0"><v>23</v></c>
      <c r="D10" s="1"><v>4</v></c>
      <c r="E10" s="7"><v>0.25</v></c>
      <c r="F10" s="2"><f>D10*E10</f><v></v></c>
      <c r="G10" t="s" s="0"><v>12</v></c>
    </row>
    <row r="11" ht="18" customHeight="1">
      <c r="A11" t="s" s="0"><v>12</v></c>
      <c r="B11" t="s" s="0"><v>14</v></c>
      <c r="C11" t="s" s="0"><v>23</v></c>
      <c r="D11" s="1"><v>5</v></c>
      <c r="E11" s="7"><v>0.25</v></c>
      <c r="F11" s="2"><f>D11*E11</f><v></v></c>
      <c r="G11" t="s" s="0"><v>12</v></c>
    </row>
    <row r="12" ht="18" customHeight="1">
      <c r="A12" t="s" s="0"><v>12</v></c>
      <c r="B12" t="s" s="0"><v>15</v></c>
      <c r="C12" t="s" s="0"><v>23</v></c>
      <c r="D12" s="1"><v>3</v></c>
      <c r="E12" s="7"><v>0.25</v></c>
      <c r="F12" s="2"><f>D12*E12</f><v></v></c>
      <c r="G12" t="s" s="0"><v>12</v></c>
    </row>
    <row r="13" ht="20" customHeight="1">
      <c r="A13" t="s" s="13"><v>16</v></c>
      <c r="B13" t="s" s="13"><v>17</v></c>
      <c r="C13" t="s" s="13"><v>23</v></c>
      <c r="D13" t="s" s="13"><v>5</v></c>
      <c r="E13" t="s" s="13"><v>6</v></c>
      <c r="F13" t="s" s="13"><v>7</v></c>
      <c r="G13" t="s" s="13"><v>8</v></c>
    </row>
    <row r="14" ht="18" customHeight="1">
      <c r="A14" t="s" s="0"><v>16</v></c>
      <c r="B14" t="s" s="0"><v>17</v></c>
      <c r="C14" t="s" s="0"><v>23</v></c>
      <c r="D14" s="1"><v>5</v></c>
      <c r="E14" s="7"><v>0.25</v></c>
      <c r="F14" s="2"><f>D14*E14</f><v></v></c>
      <c r="G14" t="s" s="0"><v>16</v></c>
    </row>
    <row r="15" ht="18" customHeight="1">
      <c r="A15" t="s" s="0"><v>16</v></c>
      <c r="B15" t="s" s="0"><v>18</v></c>
      <c r="C15" t="s" s="0"><v>23</v></c>
      <c r="D15" s="1"><v>4</v></c>
      <c r="E15" s="7"><v>0.25</v></c>
      <c r="F15" s="2"><f>D15*E15</f><v></v></c>
      <c r="G15" t="s" s="0"><v>16</v></c>
    </row>
    <row r="16" ht="18" customHeight="1">
      <c r="A16" t="s" s="0"><v>16</v></c>
      <c r="B16" t="s" s="0"><v>19</v></c>
      <c r="C16" t="s" s="0"><v>23</v></c>
      <c r="D16" s="1"><v>3</v></c>
      <c r="E16" s="7"><v>0.25</v></c>
      <c r="F16" s="2"><f>D16*E16</f><v></v></c>
      <c r="G16" t="s" s="0"><v>16</v></c>
    </row>
    <row r="17" ht="8" customHeight="1"/>
    <row r="18" ht="20" customHeight="1">
      <c r="A18" t="s" s="13"><v>20</v></c>
      <c r="B18" t="s" s="13"><v>9</v></c>
      <c r="C18" t="s" s="13"><v>10</v></c>
      <c r="D18" t="s" s="13"><v>11</v></c>
      <c r="E18" t="s" s="13"><v>6</v></c>
      <c r="F18" t="s" s="13"><v>7</v></c>
    </row>
    <row r="19" ht="18" customHeight="1">
      <c r="A19" t="s" s="0"><v>8</v></c>
      <c r="B19" t="s" s="0"><v>9</v></c>
      <c r="C19" s="1"><v>4</v></c>
      <c r="D19" s="1"><v>5</v></c>
      <c r="E19" s="1"><v>3</v></c>
      <c r="F19" s="2"><f>SUM(C19:E19)</f><v></v></c>
    </row>
    <row r="20" ht="18" customHeight="1">
      <c r="A20" t="s" s="0"><v>12</v></c>
      <c r="B20" t="s" s="0"><v>13</v></c>
      <c r="C20" s="1"><v>4</v></c>
      <c r="D20" s="1"><v>5</v></c>
      <c r="E20" s="1"><v>3</v></c>
      <c r="F20" s="2"><f>SUM(C20:E20)</f><v></v></c>
    </row>
    <row r="21" ht="18" customHeight="1">
      <c r="A21" t="s" s="0"><v>16</v></c>
      <c r="B21" t="s" s="0"><v>17</v></c>
      <c r="C21" s="1"><v>5</v></c>
      <c r="D21" s="1"><v>4</v></c>
      <c r="E21" s="1"><v>3</v></c>
      <c r="F21" s="2"><f>SUM(C21:E21)</f><v></v></c>
    </row>
    <row r="22" ht="8" customHeight="1"/>
    <row r="23" ht="20" customHeight="1">
      <c r="A23" t="s" s="4"><v>21</v></c>
      <c r="B23" t="s" s="2"><f>INDEX(B19:B21,MATCH(MAX(F19:F21),F19:F21,0))</f><v></v></c>
    </row>
    <row r="24" ht="8" customHeight="1"/>
    <row r="25" ht="20" customHeight="1">
      <c r="A25" t="s" s="4"><v>22</v></c>
    </row>
    <row r="26" ht="42" customHeight="1">
      <c r="A26" t="s" s="0"><v>24</v></c>
    </row>
  </sheetData>
  <conditionalFormatting sqref="D6:D16">
    <cfRule type="cellIs" dxfId="2" priority="1" operator="greaterThan" formulas="[&quot;3&quot;]"/>
    <cfRule type="cellIs" dxfId="0" priority="2" operator="lessThan" formulas="[&quot;3&quot;]"/>
    <cfRule type="cellIs" dxfId="3" priority="3" operator="equal" formulas="[&quot;3&quot;]"/>
  </conditionalFormatting>
  <dataValidation sqref="D6:D16" type="whole" operator="between" formula1="1" formula2="5" showInputMessage="1" promptTitle="影响程度" prompt="请输入1-5之间的整数，1=很低，5=很高"/>
  <pageMargins left="0.5" right="0.5" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
  <printOptions horizontalCentered="1"/>
  <pageSetup paperSize="9" orientation="landscape" horizontalDpi="300" verticalDpi="300"/>
  <headerFooter>
    <oddHeader>&amp;C&amp;&amp;"Calibri,Bold"&amp;14需求层次分析表</oddHeader>
    <oddFooter>&amp;C&amp;"Calibri"第 &amp;P 页，共 &amp;N 页</oddFooter>
  </headerFooter>
</worksheet>'''

with open(os.path.join(base, 'xl/worksheets/sheet1.xml'), 'w', encoding='utf-8') as f:
    f.write(sheet1)
print('sheet1.xml written')

print('All files written successfully!')