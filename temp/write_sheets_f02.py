#!/usr/bin/env python3
WORK_DIR = "/tmp/xlsx_f02"

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
<row r="1" ht="30" customHeight="1"><c r="A1" t="s" s="4"><v>37</v></c></row>
<row r="2" ht="18" customHeight="1"><c r="A2" t="s" s="4"><v>38</v></c><c r="B2" t="s" s="4"><v>39</v></c><c r="C2" t="s" s="4"><v>40</v></c><c r="D2" t="s" s="4"><v>41</v></c><c r="E2" t="s" s="4"><v>42</v></c></row>
<row r="3"><c r="A3" t="s" s="0"><v>7</v></c><c r="B3" t="s" s="0"><v>43</v></c><c r="C3" t="s" s="0"><v>44</v></c><c r="D3" t="s" s="0"><v>45</v></c><c r="E3" t="s" s="0"><v>46</v></c></row>
<row r="4"><c r="A4" t="s" s="0"><v>12</v></c><c r="B4" t="s" s="0"><v>47</v></c><c r="C4" t="s" s="0"><v>48</v></c><c r="D4" t="s" s="0"><v>49</v></c><c r="E4" t="s" s="0"><v>50</v></c></row>
<row r="5"><c r="A5" t="s" s="0"><v>17</v></c><c r="B5" t="s" s="0"><v>51</v></c><c r="C5" t="s" s="0"><v>52</v></c><c r="D5" t="s" s="0"><v>53</v></c><c r="E5" t="s" s="0"><v>54</v></c></row>
<row r="6"><c r="A6" t="s" s="0"><v>22</v></c><c r="B6" t="s" s="0"><v>55</v></c><c r="C6" t="s" s="0"><v>56</v></c><c r="D6" t="s" s="0"><v>57</v></c><c r="E6" t="s" s="0"><v>58</v></c></row>
<row r="7"><c r="A7" t="s" s="0"><v>27</v></c><c r="B7" t="s" s="0"><v>59</v></c><c r="C7" t="s" s="0"><v>60</v></c><c r="D7" t="s" s="0"><v>61</v></c><c r="E7" t="s" s="0"><v>62</v></c></row>
<row r="8"><c r="A8" t="s" s="0"><v>32</v></c><c r="B8" t="s" s="0"><v>63</v></c><c r="C8" t="s" s="0"><v>64</v></c><c r="D8" t="s" s="0"><v>65</v></c><c r="E8" t="s" s="0"><v>66</v></c></row>
<row r="9"><c r="A9" t="s" s="4"><v>67</v></c></row>
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
print("All sheets written")