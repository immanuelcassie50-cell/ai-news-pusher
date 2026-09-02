#!/usr/bin/env python3
import os

# Create sheet1.xml - 四维指标填写表
sheet1_content = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView workbookViewId="0">
      <pane ySplit="8" topLeftCell="A9" activePane="bottomLeft" state="frozen"/>
    </sheetView>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols>
    <col min="1" max="1" width="4" customWidth="1"/>
    <col min="2" max="2" width="18" customWidth="1"/>
    <col min="3" max="3" width="30" customWidth="1"/>
    <col min="4" max="4" width="20" customWidth="1"/>
    <col min="5" max="5" width="12" customWidth="1"/>
    <col min="6" max="6" width="12" customWidth="1"/>
    <col min="7" max="7" width="25" customWidth="1"/>
    <col min="8" max="8" width="12" customWidth="1"/>
    <col min="9" max="9" width="12" customWidth="1"/>
    <col min="10" max="10" width="10" customWidth="1"/>
  </cols>
  <sheetData>
    <row r="1" ht="24" customHeight="1">
      <c r="A1" t="s" s="4"><v>0</v></c>
    </row>
    <row r="2" ht="18" customHeight="1">
      <c r="A2" t="s" s="4"><v>1</v></c>
    </row>
    <row r="3">
      <c r="B3" t="s" s="1"><v>2</v></c>
      <c r="D3" t="s" s="1"><v>3</v></c>
    </row>
    <row r="4">
      <c r="B4" t="s" s="1"><v>4</v></c>
    </row>
    <row r="5">
      <c r="B5" t="s" s="4"><v>49</v></c>
      <c r="C5" s="7"><v>0.25</v></c>
      <c r="D5" t="s" s="4"><v>50</v></c>
      <c r="E5" s="7"><v>0.25</v></c>
      <c r="F5" t="s" s="4"><v>51</v></c>
      <c r="G5" s="7"><v>0.25</v></c>
      <c r="H5" t="s" s="4"><v>52</v></c>
      <c r="I5" s="7"><v>0.25</v></c>
      <c r="J5" t="s" s="4"><v>53</v></c>
      <c r="K5" s="6"><f>SUM(C5,E5,G5,I5)</f><v></v></c>
    </row>
    <row r="6">
      <c r="B6" t="s" s="0"><v>38</v></c>
    </row>
    <row r="7" ht="18" customHeight="1">
      <c r="A7" t="s" s="4"><v>5</v></c>
      <c r="B7" t="s" s="4"><v>9</v></c>
      <c r="C7" t="s" s="4"><v>10</v></c>
      <c r="D7" t="s" s="4"><v>11</v></c>
      <c r="E7" t="s" s="4"><v>12</v></c>
      <c r="F7" t="s" s="4"><v>13</v></c>
      <c r="G7" t="s" s="4"><v>14</v></c>
      <c r="H7" t="s" s="4"><v>15</v></c>
      <c r="I7" t="s" s="4"><v>16</v></c>
      <c r="J7" t="s" s="4"><v>17</v></c>
    </row>
    <row r="8">
      <c r="A8" t="s" s="0"><v>38</v></c>
    </row>
    <row r="9">
      <c r="A9" t="s" s="4"><v>6</v></c>
    </row>
    <row r="10">
      <c r="A10" t="s" s="1"><v>18</v></c>
      <c r="B10" t="s" s="1"><v></v></c>
      <c r="C10" t="s" s="1"><v></v></c>
      <c r="D10" t="s" s="1"><v></v></c>
      <c r="E10" s="7"><v>0</v></c>
      <c r="F10" s="7"><v>0</v></c>
      <c r="G10" t="s" s="1"><v></v></c>
      <c r="H10" t="s" s="1"><v></v></c>
      <c r="I10" t="s" s="1"><v></v></c>
      <c r="J10" s="7"><v>0.1</v></c>
    </row>
    <row r="11">
      <c r="A11" t="s" s="1"><v>18</v></c>
      <c r="B11" t="s" s="1"><v></v></c>
      <c r="C11" t="s" s="1"><v></v></c>
      <c r="D11" t="s" s="1"><v></v></c>
      <c r="E11" s="7"><v>0</v></c>
      <c r="F11" s="7"><v>0</v></c>
      <c r="G11" t="s" s="1"><v></v></c>
      <c r="H11" t="s" s="1"><v></v></c>
      <c r="I11" t="s" s="1"><v></v></c>
      <c r="J11" s="7"><v>0.1</v></c>
    </row>
    <row r="12">
      <c r="A12" t="s" s="1"><v>18</v></c>
      <c r="B12" t="s" s="1"><v></v></c>
      <c r="C12" t="s" s="1"><v></v></c>
      <c r="D12" t="s" s="1"><v></v></c>
      <c r="E12" s="7"><v>0</v></c>
      <c r="F12" s="7"><v>0</v></c>
      <c r="G12" t="s" s="1"><v></v></c>
      <c r="H12" t="s" s="1"><v></v></c>
      <c r="I12" t="s" s="1"><v></v></c>
      <c r="J12" s="7"><v>0.1</v></c>
    </row>
    <row r="13">
      <c r="A13" t="s" s="1"><v>18</v></c>
      <c r="B13" t="s" s="1"><v></v></c>
      <c r="C13" t="s" s="1"><v></v></c>
      <c r="D13" t="s" s="1"><v></v></c>
      <c r="E13" s="7"><v>0</v></c>
      <c r="F13" s="7"><v>0</v></c>
      <c r="G13" t="s" s="1"><v></v></c>
      <c r="H13" t="s" s="1"><v></v></c>
      <c r="I13" t="s" s="1"><v></v></c>
      <c r="J13" s="7"><v>0.1</v></c>
    </row>
    <row r="14">
      <c r="A14" t="s" s="1"><v>18</v></c>
      <c r="B14" t="s" s="1"><v></v></c>
      <c r="C14" t="s" s="1"><v></v></c>
      <c r="D14" t="s" s="1"><v></v></c>
      <c r="E14" s="7"><v>0</v></c>
      <c r="F14" s="7"><v>0</v></c>
      <c r="G14" t="s" s="1"><v></v></c>
      <c r="H14" t="s" s="1"><v></v></c>
      <c r="I14" t="s" s="1"><v></v></c>
      <c r="J14" s="7"><v>0.1</v></c>
    </row>
    <row r="15">
      <c r="J15" s="6"><f>IF(COUNTA(B10:B14)=0,0,SUMPRODUCT((B10:B14&lt;&gt;"")*J10:J14))</f><v></v></c>
    </row>
    <row r="16">
      <c r="A16" t="s" s="0"><v>38</v></c>
    </row>
    <row r="17">
      <c r="A17" t="s" s="4"><v>7</v></c>
    </row>
    <row r="18">
      <c r="A18" t="s" s="1"><v>18</v></c>
      <c r="B18" t="s" s="1"><v></v></c>
      <c r="C18" t="s" s="1"><v></v></c>
      <c r="D18" t="s" s="1"><v></v></c>
      <c r="E18" s="7"><v>0</v></c>
      <c r="F18" s="7"><v>0</v></c>
      <c r="G18" t="s" s="1"><v></v></c>
      <c r="H18" t="s" s="1"><v></v></c>
      <c r="I18" t="s" s="1"><v></v></c>
      <c r="J18" s="7"><v>0.1</v></c>
    </row>
    <row r="19">
      <c r="A19" t="s" s="1"><v>18</v></c>
      <c r="B19" t="s" s="1"><v></v></c>
      <c r="C19" t="s" s="1"><v></v></c>
      <c r="D19" t="s" s="1"><v></v></c>
      <c r="E19" s="7"><v>0</v></c>
      <c r="F19" s="7"><v>0</v></c>
      <c r="G19" t="s" s="1"><v></v></c>
      <c r="H19" t="s" s="1"><v></v></c>
      <c r="I19" t="s" s="1"><v></v></c>
      <c r="J19" s="7"><v>0.1</v></c>
    </row>
    <row r="20">
      <c r="A20" t="s" s="1"><v>18</v></c>
      <c r="B20" t="s" s="1"><v></v></c>
      <c r="C20" t="s" s="1"><v></v></c>
      <c r="D20" t="s" s="1"><v></v></c>
      <c r="E20" s="7"><v>0</v></c>
      <c r="F20" s="7"><v>0</v></c>
      <c r="G20" t="s" s="1"><v></v></c>
      <c r="H20" t="s" s="1"><v></v></c>
      <c r="I20" t="s" s="1"><v></v></c>
      <c r="J20" s="7"><v>0.1</v></c>
    </row>
    <row r="21">
      <c r="A21" t="s" s="1"><v>18</v></c>
      <c r="B21" t="s" s="1"><v></v></c>
      <c r="C21" t="s" s="1"><v></v></c>
      <c r="D21" t="s" s="1"><v></v></c>
      <c r="E21" s="7"><v>0</v></c>
      <c r="F21" s="7"><v>0</v></c>
      <c r="G21" t="s" s="1"><v></v></c>
      <c r="H21" t="s" s="1"><v></v></c>
      <c r="I21" t="s" s="1"><v></v></c>
      <c r="J21" s="7"><v>0.1</v></c>
    </row>
    <row r="22">
      <c r="A22" t="s" s="1"><v>18</v></c>
      <c r="B22" t="s" s="1"><v></v></c>
      <c r="C22" t="s" s="1"><v></v></c>
      <c r="D22" t="s" s="1"><v></v></c>
      <c r="E22" s="7"><v>0</v></c>
      <c r="F22" s="7"><v>0</v></c>
      <c r="G22" t="s" s="1"><v></v></c>
      <c r="H22" t="s" s="1"><v></v></c>
      <c r="I22" t="s" s="1"><v></v></c>
      <c r="J22" s="7"><v>0.1</v></c>
    </row>
    <row r="23">
      <c r="J23" s="6"><f>IF(COUNTA(B18:B22)=0,0,SUMPRODUCT((B18:B22&lt;&gt;"")*J18:J22))</f><v></v></c>
    </row>
    <row r="24">
      <c r="A24" t="s" s="0"><v>38</v></c>
    </row>
    <row r="25">
      <c r="A25" t="s" s="4"><v>8</v></c>
    </row>
    <row r="26">
      <c r="A26" t="s" s="1"><v>18</v></c>
      <c r="B26" t="s" s="1"><v></v></c>
      <c r="C26" t="s" s="1"><v></v></c>
      <c r="D26" t="s" s="1"><v></v></c>
      <c r="E26" s="7"><v>0</v></c>
      <c r="F26" s="7"><v>0</v></c>
      <c r="G26" t="s" s="1"><v></v></c>
      <c r="H26" t="s" s="1"><v></v></c>
      <c r="I26" t="s" s="1"><v></v></c>
      <c r="J26" s="7"><v>0.1</v></c>
    </row>
    <row r="27">
      <c r="A27" t="s" s="1"><v>18</v></c>
      <c r="B27" t="s" s="1"><v></v></c>
      <c r="C27" t="s" s="1"><v></v></c>
      <c r="D27" t="s" s="1"><v></v></c>
      <c r="E27" s="7"><v>0</v></c>
      <c r="F27" s="7"><v>0</v></c>
      <c r="G27" t="s" s="1"><v></v></c>
      <c r="H27" t="s" s="1"><v></v></c>
      <c r="I27" t="s" s="1"><v></v></c>
      <c r="J27" s="7"><v>0.1</v></c>
    </row>
    <row r="28">
      <c r="A28" t="s" s="1"><v>18</v></c>
      <c r="B28" t="s" s="1"><v></v></c>
      <c r="C28" t="s" s="1"><v></v></c>
      <c r="D28" t="s" s="1"><v></v></c>
      <c r="E28" s="7"><v>0</v></c>
      <c r="F28" s="7"><v>0</v></c>
      <c r="G28" t="s" s="1"><v></v></c>
      <c r="H28" t="s" s="1"><v></v></c>
      <c r="I28" t="s" s="1"><v></v></c>
      <c r="J28" s="7"><v>0.1</v></c>
    </row>
    <row r="29">
      <c r="A29" t="s" s="1"><v>18</v></c>
      <c r="B29" t="s" s="1"><v></v></c>
      <c r="C29" t="s" s="1"><v></v></c>
      <c r="D29" t="s" s="1"><v></v></c>
      <c r="E29" s="7"><v>0</v></c>
      <c r="F29" s="7"><v>0</v></c>
      <c r="G29" t="s" s="1"><v></v></c>
      <c r="H29" t="s" s="1"><v></v></c>
      <c r="I29" t="s" s="1"><v></v></c>
      <c r="J29" s="7"><v>0.1</v></c>
    </row>
    <row r="30">
      <c r="A30" t="s" s="1"><v>18</v></c>
      <c r="B30" t="s" s="1"><v></v></c>
      <c r="C30" t="s" s="1"><v></v></c>
      <c r="D30" t="s" s="1"><v></v></c>
      <c r="E30" s="7"><v>0</v></c>
      <c r="F30" s="7"><v>0</v></c>
      <c r="G30" t="s" s="1"><v></v></c>
      <c r="H30" t="s" s="1"><v></v></c>
      <c r="I30" t="s" s="1"><v></v></c>
      <c r="J30" s="7"><v>0.1</v></c>
    </row>
    <row r="31">
      <c r="J31" s="6"><f>IF(COUNTA(B26:B30)=0,0,SUMPRODUCT((B26:B30&lt;&gt;"")*J26:J30))</f><v></v></c>
    </row>
    <row r="32">
      <c r="A32" t="s" s="0"><v>38</v></c>
    </row>
    <row r="33">
      <c r="A33" t="s" s="4"><v>9</v></c>
    </row>
    <row r="34">
      <c r="A34" t="s" s="1"><v>18</v></c>
      <c r="B34" t="s" s="1"><v></v></c>
      <c r="C34" t="s" s="1"><v></v></c>
      <c r="D34" t="s" s="1"><v></v></c>
      <c r="E34" s="7"><v>0</v></c>
      <c r="F34" s="7"><v>0</v></c>
      <c r="G34" t="s" s="1"><v></v></c>
      <c r="H34" t="s" s="1"><v></v></c>
      <c r="I34" t="s" s="1"><v></v></c>
      <c r="J34" s="7"><v>0.1</v></c>
    </row>
    <row r="35">
      <c r="A35" t="s" s="1"><v>18</v></c>
      <c r="B35" t="s" s="1"><v></v></c>
      <c r="C35" t="s" s="1"><v></v></c>
      <c r="D35" t="s" s="1"><v></v></c>
      <c r="E35" s="7"><v>0</v></c>
      <c r="F35" s="7"><v>0</v></c>
      <c r="G35" t="s" s="1"><v></v></c>
      <c r="H35" t="s" s="1"><v></v></c>
      <c r="I35" t="s" s="1"><v></v></c>
      <c r="J35" s="7"><v>0.1</v></c>
    </row>
    <row r="36">
      <c r="A36" t="s" s="1"><v>18</v></c>
      <c r="B36" t="s" s="1"><v></v></c>
      <c r="C36" t="s" s="1"><v></v></c>
      <c r="D36" t="s" s="1"><v></v></c>
      <c r="E36" s="7"><v>0</v></c>
      <c r="F36" s="7"><v>0</v></c>
      <c r="G36" t="s" s="1"><v></v></c>
      <c r="H36" t="s" s="1"><v></v></c>
      <c r="I36" t="s" s="1"><v></v></c>
      <c r="J36" s="7"><v>0.1</v></c>
    </row>
    <row r="37">
      <c r="A37" t="s" s="1"><v>18</v></c>
      <c r="B37" t="s" s="1"><v></v></c>
      <c r="C37" t="s" s="1"><v></v></c>
      <c r="D37" t="s" s="1"><v></v></c>
      <c r="E37" s="7"><v>0</v></c>
      <c r="F37" s="7"><v>0</v></c>
      <c r="G37" t="s" s="1"><v></v></c>
      <c r="H37" t="s" s="1"><v></v></c>
      <c r="I37" t="s" s="1"><v></v></c>
      <c r="J37" s="7"><v>0.1</v></c>
    </row>
    <row r="38">
      <c r="A38" t="s" s="1"><v>18</v></c>
      <c r="B38" t="s" s="1"><v></v></c>
      <c r="C38" t="s" s="1"><v></v></c>
      <c r="D38" t="s" s="1"><v></v></c>
      <c r="E38" s="7"><v>0</v></c>
      <c r="F38" s="7"><v>0</v></c>
      <c r="G38" t="s" s="1"><v></v></c>
      <c r="H38" t="s" s="1"><v></v></c>
      <c r="I38" t="s" s="1"><v></v></c>
      <c r="J38" s="7"><v>0.1</v></c>
    </row>
    <row r="39">
      <c r="J39" s="6"><f>IF(COUNTA(B34:B38)=0,0,SUMPRODUCT((B34:B38&lt;&gt;"")*J34:J38))</f><v></v></c>
    </row>
    <row r="40">
      <c r="A40" t="s" s="0"><v>38</v></c>
    </row>
    <row r="41" ht="20" customHeight="1">
      <c r="A41" t="s" s="4"><v>53</v></c>
      <c r="B41" s="8"><f>K5</f><v></v></c>
    </row>
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

with open('D:/CC/tmp_bsc_work/xl/worksheets/sheet1.xml', 'w', encoding='utf-8') as f:
    f.write(sheet1_content)
print("sheet1.xml created")

# Create sheet2.xml - 指标间因果关系图
sheet2_content = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView workbookViewId="0">
      <pane ySplit="5" topLeftCell="A6" activePane="bottomLeft" state="frozen"/>
    </sheetView>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols>
    <col min="1" max="1" width="4" customWidth="1"/>
    <col min="2" max="2" width="20" customWidth="1"/>
    <col min="3" max="3" width="30" customWidth="1"/>
    <col min="4" max="4" width="20" customWidth="1"/>
    <col min="5" max="5" width="12" customWidth="1"/>
    <col min="6" max="6" width="30" customWidth="1"/>
  </cols>
  <sheetData>
    <row r="1" ht="24" customHeight="1">
      <c r="A1" t="s" s="4"><v>0</v></c>
    </row>
    <row r="2" ht="18" customHeight="1">
      <c r="A2" t="s" s="4"><v>24</v></c>
    </row>
    <row r="3">
      <c r="B3" t="s" s="0"><v>44</v></c>
    </row>
    <row r="4">
      <c r="B4" t="s" s="0"><v>45</v></c>
    </row>
    <row r="5">
      <c r="B5" t="s" s="0"><v>46</v></c>
    </row>
    <row r="6" ht="18" customHeight="1">
      <c r="A6" t="s" s="4"><v>25</v></c>
      <c r="B6" t="s" s="4"><v>26</v></c>
      <c r="C6" t="s" s="4"><v>27</v></c>
      <c r="D6" t="s" s="4"><v>28</v></c>
      <c r="E6" t="s" s="4"><v>29</v></c>
      <c r="F6" t="s" s="4"><v>30</v></c>
    </row>
    <row r="7">
      <c r="A7" t="s" s="1"><v></v></c>
      <c r="B7" t="s" s="1"><v></v></c>
      <c r="C7" t="s" s="1"><v></v></c>
      <c r="D7" t="s" s="1"><v></v></c>
      <c r="E7" t="s" s="1"><v></v></c>
      <c r="F7" t="s" s="1"><v></v></c>
    </row>
    <row r="8">
      <c r="A8" t="s" s="1"><v></v></c>
      <c r="B8" t="s" s="1"><v></v></c>
      <c r="C8" t="s" s="1"><v></v></c>
      <c r="D8" t="s" s="1"><v></v></c>
      <c r="E8" t="s" s="1"><v></v></c>
      <c r="F8" t="s" s="1"><v></v></c>
    </row>
    <row r="9">
      <c r="A9" t="s" s="1"><v></v></c>
      <c r="B9" t="s" s="1"><v></v></c>
      <c r="C9" t="s" s="1"><v></v></c>
      <c r="D9" t="s" s="1"><v></v></c>
      <c r="E9" t="s" s="1"><v></v></c>
      <c r="F9" t="s" s="1"><v></v></c>
    </row>
    <row r="10">
      <c r="A10" t="s" s="1"><v></v></c>
      <c r="B10" t="s" s="1"><v></v></c>
      <c r="C10" t="s" s="1"><v></v></c>
      <c r="D10" t="s" s="1"><v></v></c>
      <c r="E10" t="s" s="1"><v></v></c>
      <c r="F10" t="s" s="1"><v></v></c>
    </row>
    <row r="11">
      <c r="A11" t="s" s="1"><v></v></c>
      <c r="B11" t="s" s="1"><v></v></c>
      <c r="C11" t="s" s="1"><v></v></c>
      <c r="D11" t="s" s="1"><v></v></c>
      <c r="E11" t="s" s="1"><v></v></c>
      <c r="F11" t="s" s="1"><v></v></c>
    </row>
    <row r="12">
      <c r="A12" t="s" s="1"><v></v></c>
      <c r="B12" t="s" s="1"><v></v></c>
      <c r="C12" t="s" s="1"><v></v></c>
      <c r="D12" t="s" s="1"><v></v></c>
      <c r="E12" t="s" s="1"><v></v></c>
      <c r="F12" t="s" s="1"><v></v></c>
    </row>
    <row r="13">
      <c r="A13" t="s" s="1"><v></v></c>
      <c r="B13" t="s" s="1"><v></v></c>
      <c r="C13" t="s" s="1"><v></v></c>
      <c r="D13" t="s" s="1"><v></v></c>
      <c r="E13" t="s" s="1"><v></v></c>
      <c r="F13" t="s" s="1"><v></v></c>
    </row>
    <row r="14">
      <c r="A14" t="s" s="1"><v></v></c>
      <c r="B14" t="s" s="1"><v></v></c>
      <c r="C14" t="s" s="1"><v></v></c>
      <c r="D14" t="s" s="1"><v></v></c>
      <c r="E14" t="s" s="1"><v></v></c>
      <c r="F14" t="s" s="1"><v></v></c>
    </row>
    <row r="15">
      <c r="A15" t="s" s="1"><v></v></c>
      <c r="B15" t="s" s="1"><v></v></c>
      <c r="C15" t="s" s="1"><v></v></c>
      <c r="D15" t="s" s="1"><v></v></c>
      <c r="E15" t="s" s="1"><v></v></c>
      <c r="F15" t="s" s="1"><v></v></c>
    </row>
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

with open('D:/CC/tmp_bsc_work/xl/worksheets/sheet2.xml', 'w', encoding='utf-8') as f:
    f.write(sheet2_content)
print("sheet2.xml created")

# Create sheet3.xml - 战略目标分解表
sheet3_content = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView workbookViewId="0">
      <pane ySplit="6" topLeftCell="A7" activePane="bottomLeft" state="frozen"/>
    </sheetView>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols>
    <col min="1" max="1" width="4" customWidth="1"/>
    <col min="2" max="2" width="18" customWidth="1"/>
    <col min="3" max="3" width="8" customWidth="1"/>
    <col min="4" max="4" width="18" customWidth="1"/>
    <col min="5" max="5" width="8" customWidth="1"/>
    <col min="6" max="6" width="18" customWidth="1"/>
    <col min="7" max="7" width="8" customWidth="1"/>
    <col min="8" max="8" width="15" customWidth="1"/>
  </cols>
  <sheetData>
    <row r="1" ht="24" customHeight="1">
      <c r="A1" t="s" s="4"><v>0</v></c>
    </row>
    <row r="2" ht="18" customHeight="1">
      <c r="A2" t="s" s="4"><v>31</v></c>
    </row>
    <row r="3">
      <c r="B3" t="s" s="0"><v>38</v></c>
    </row>
    <row r="4">
      <c r="B4" t="s" s="0"><v>39</v></c>
    </row>
    <row r="5">
      <c r="B5" t="s" s="0"><v>40</v></c>
    </row>
    <row r="6">
      <c r="B6" t="s" s="0"><v>41</v></c>
    </row>
    <row r="7" ht="18" customHeight="1">
      <c r="A7" t="s" s="4"><v>32</v></c>
      <c r="B7" t="s" s="4"><v>18</v></c>
      <c r="C7" t="s" s="4"><v>36</v></c>
      <c r="D7" t="s" s="4"><v>33</v></c>
      <c r="E7" t="s" s="4"><v>36</v></c>
      <c r="F7" t="s" s="4"><v>34</v></c>
      <c r="G7" t="s" s="4"><v>36</v></c>
      <c r="H7" t="s" s="4"><v>37</v></c>
    </row>
    <row r="8">
      <c r="A8" t="s" s="1"><v></v></c>
      <c r="B8" t="s" s="1"><v></v></c>
      <c r="C8" s="7"><v>0</v></c>
      <c r="D8" t="s" s="1"><v></v></c>
      <c r="E8" s="7"><v>0</v></c>
      <c r="F8" t="s" s="1"><v></v></c>
      <c r="G8" s="7"><v>0</v></c>
      <c r="H8" t="s" s="1"><v></v></c>
    </row>
    <row r="9">
      <c r="A9" t="s" s="1"><v></v></c>
      <c r="B9" t="s" s="1"><v></v></c>
      <c r="C9" s="7"><v>0</v></c>
      <c r="D9" t="s" s="1"><v></v></c>
      <c r="E9" s="7"><v>0</v></c>
      <c r="F9" t="s" s="1"><v></v></c>
      <c r="G9" s="7"><v>0</v></c>
      <c r="H9" t="s" s="1"><v></v></c>
    </row>
    <row r="10">
      <c r="A10" t="s" s="1"><v></v></c>
      <c r="B10" t="s" s="1"><v></v></c>
      <c r="C10" s="7"><v>0</v></c>
      <c r="D10" t="s" s="1"><v></v></c>
      <c r="E10" s="7"><v>0</v></c>
      <c r="F10" t="s" s="1"><v></v></c>
      <c r="G10" s="7"><v>0</v></c>
      <c r="H10" t="s" s="1"><v></v></c>
    </row>
    <row r="11">
      <c r="A11" t="s" s="1"><v></v></c>
      <c r="B11" t="s" s="1"><v></v></c>
      <c r="C11" s="7"><v>0</v></c>
      <c r="D11" t="s" s="1"><v></v></c>
      <c r="E11" s="7"><v>0</v></c>
      <c r="F11" t="s" s="1"><v></v></c>
      <c r="G11" s="7"><v>0</v></c>
      <c r="H11" t="s" s="1"><v></v></c>
    </row>
    <row r="12">
      <c r="A12" t="s" s="1"><v></v></c>
      <c r="B12" t="s" s="1"><v></v></c>
      <c r="C12" s="7"><v>0</v></c>
      <c r="D12" t="s" s="1"><v></v></c>
      <c r="E12" s="7"><v>0</v></c>
      <c r="F12" t="s" s="1"><v></v></c>
      <c r="G12" s="7"><v>0</v></c>
      <c r="H12" t="s" s="1"><v></v></c>
    </row>
    <row r="13">
      <c r="A13" t="s" s="1"><v></v></c>
      <c r="B13" t="s" s="1"><v></v></c>
      <c r="C13" s="7"><v>0</v></c>
      <c r="D13" t="s" s="1"><v></v></c>
      <c r="E13" s="7"><v>0</v></c>
      <c r="F13" t="s" s="1"><v></v></c>
      <c r="G13" s="7"><v>0</v></c>
      <c r="H13" t="s" s="1"><v></v></c>
    </row>
    <row r="14">
      <c r="A14" t="s" s="1"><v></v></c>
      <c r="B14" t="s" s="1"><v></v></c>
      <c r="C14" s="7"><v>0</v></c>
      <c r="D14" t="s" s="1"><v></v></c>
      <c r="E14" s="7"><v>0</v></c>
      <c r="F14" t="s" s="1"><v></v></c>
      <c r="G14" s="7"><v>0</v></c>
      <c r="H14" t="s" s="1"><v></v></c>
    </row>
    <row r="15">
      <c r="A15" t="s" s="1"><v></v></c>
      <c r="B15" t="s" s="1"><v></v></c>
      <c r="C15" s="7"><v>0</v></c>
      <c r="D15" t="s" s="1"><v></v></c>
      <c r="E15" s="7"><v>0</v></c>
      <c r="F15" t="s" s="1"><v></v></c>
      <c r="G15" s="7"><v>0</v></c>
      <c r="H15" t="s" s="1"><v></v></c>
    </row>
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

with open('D:/CC/tmp_bsc_work/xl/worksheets/sheet3.xml', 'w', encoding='utf-8') as f:
    f.write(sheet3_content)
print("sheet3.xml created")

print("All BSC sheets created successfully")
