content = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews>
    <sheetView tabSelected="1" workbookViewId="0">
      <pane ySplit="1" topLeftCell="A2" activePane="bottomLeft" state="frozen"/>
    </sheetView>
  </sheetViews>
  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>
  <cols>
    <col min="1" max="1" width="24" customWidth="1"/>
    <col min="2" max="2" width="16" customWidth="1"/>
    <col min="3" max="3" width="16" customWidth="1"/>
    <col min="4" max="4" width="16" customWidth="1"/>
    <col min="5" max="5" width="16" customWidth="1"/>
  </cols>
  <sheetData>
    <row r="1">
      <c r="A1" t="s" s="4"><v>0</v></c>
      <c r="B1" t="s" s="4"><v>1</v></c>
      <c r="C1" t="s" s="4"><v>2</v></c>
      <c r="D1" t="s" s="4"><v>3</v></c>
      <c r="E1" t="s" s="4"><v>4</v></c>
    </row>
    <row r="2">
      <c r="A2" t="s" s="1"><v>5</v></c>
      <c r="B2" t="s" s="1"><v>6</v></c>
    </row>
    <row r="3">
      <c r="A3" t="s" s="4"><v>7</v></c>
      <c r="B3" t="s" s="4"><v>8</v></c>
      <c r="C3" t="s" s="4"><v>9</v></c>
      <c r="D3" t="s" s="4"><v>10</v></c>
      <c r="E3" t="s" s="4"><v>11</v></c>
    </row>
    <row r="4">
      <c r="A4" t="s" s="1"><v>12</v></c>
      <c r="B4" s="5"><v>25000</v></c>
    </row>
    <row r="5">
      <c r="A5" t="s" s="1"><v>13</v></c>
      <c r="B5" s="5"><v>25000</v></c>
    </row>
    <row r="6">
      <c r="A6" t="s" s="1"><v>14</v></c>
      <c r="B6" s="5"><v>20000</v></c>
    </row>
    <row r="7">
      <c r="A7" t="s" s="1"><v>15</v></c>
      <c r="B7" s="5"><v>15000</v></c>
    </row>
    <row r="8">
      <c r="A8" t="s" s="1"><v>16</v></c>
      <c r="B8" s="5"><v>15000</v></c>
    </row>
    <row r="9">
      <c r="A9" t="s" s="2"><v>17</v></c>
      <c r="B9" s="5"><f>SUM(B4:B8)</f><v></v></c>
    </row>
    <row r="11">
      <c r="A11" t="s" s="4"><v>18</v></c>
    </row>
    <row r="12">
      <c r="A12" t="s" s="1"><v>19</v></c>
      <c r="B12" s="5"><f>B4*$B$2</f><v></v></c>
      <c r="C12" s="5"><f>B5*$B$2</f><v></v></c>
      <c r="D12" s="5"><f>B6*$B$2</f><v></v></c>
      <c r="E12" s="5"><f>B7*$B$2</f><v></v></c>
    </row>
    <row r="13">
      <c r="A13" t="s" s="1"><v>20</v></c>
      <c r="B13" s="5"><f>B4*$B$3</f><v></v></c>
      <c r="C13" s="5"><f>B5*$B$3</f><v></v></c>
      <c r="D13" s="5"><f>B6*$B$3</f><v></v></c>
      <c r="E13" s="5"><f>B7*$B$3</f><v></v></c>
    </row>
    <row r="14">
      <c r="A14" t="s" s="1"><v>21</v></c>
      <c r="B14" s="5"><f>B4*$B$4</f><v></v></c>
      <c r="C14" s="5"><f>B5*$B$4</f><v></v></c>
      <c r="D14" s="5"><f>B6*$B$4</f><v></v></c>
      <c r="E14" s="5"><f>B7*$B$4</f><v></v></c>
    </row>
    <row r="15">
      <c r="A15" t="s" s="2"><v>22</v></c>
      <c r="B15" s="5"><f>B12+B13+B14</f><v></v></c>
      <c r="C15" s="5"><f>C12+C13+C14</f><v></v></c>
      <c r="D15" s="5"><f>D12+D13+D14</f><v></v></c>
      <c r="E15" s="5"><f>E12+E13+E14</f><v></v></c>
    </row>
    <row r="17">
      <c r="A17" t="s" s="4"><v>23</v></c>
    </row>
    <row r="18">
      <c r="A18" t="s" s="2"><v>24</v></c>
      <c r="B18" s="8"><f>B15/$B$9</f><v></v></c>
      <c r="C18" s="8"><f>C15/$B$9</f><v></v></c>
      <c r="D18" s="8"><f>D15/$B$9</f><v></v></c>
      <c r="E18" s="8"><f>E15/$B$9</f><v></v></c>
    </row>
    <row r="19">
      <c r="A19" t="s" s="2"><v>25</v></c>
      <c r="B19" s="7"><f>MAX(B18:E18)</f><v></v></c>
    </row>
    <row r="21">
      <c r="A21" t="s" s="4"><v>26</v></c>
    </row>
    <row r="22">
      <c r="A22" t="s" s="1"><v>27</v></c>
      <c r="B22" s="1"><v>0</v></c>
    </row>
    <row r="23">
      <c r="A23" t="s" s="1"><v>28</v></c>
      <c r="B23" s="1"><v>0</v></c>
    </row>
    <row r="24">
      <c r="A24" t="s" s="1"><v>29</v></c>
      <c r="B24" s="1"><v>0</v></c>
    </row>
    <row r="25">
      <c r="A25" t="s" s="1"><v>30</v></c>
      <c r="B25" s="1"><v>0</v></c>
    </row>
    <row r="26">
      <c r="A26" t="s" s="1"><v>31</v></c>
      <c r="B26" s="1"><v>0</v></c>
    </row>
    <row r="27">
      <c r="A27" t="s" s="2"><v>32</v></c>
      <c r="B27" s="8"><f>AVERAGE(B22:B26)</f><v></v></c>
    </row>
    <row r="28">
      <c r="A28" t="s" s="2"><v>33</v></c>
      <c r="B28" s="5"><f>B19*B27</f><v></v></c>
      <c r="C28" s="5"><f>C19*B27</f><v></v></c>
      <c r="D28" s="5"><f>D19*B27</f><v></v></c>
      <c r="E28" s="5"><f>E19*B27</f><v></v></c>
    </row>
    <row r="29">
      <c r="A29" t="s" s="2"><v>34</v></c>
      <c r="B29" s="5"><f>B28*B9</f><v></v></c>
      <c r="C29" s="5"><f>C28*B9</f><v></v></c>
      <c r="D29" s="5"><f>D28*B9</f><v></v></c>
      <c r="E29" s="5"><f>E28*B9</f><v></v></c>
    </row>
    <row r="31">
      <c r="A31" t="s" s="4"><v>35</v></c>
    </row>
    <row r="32">
      <c r="A32" t="s" s="2"><v>36</v></c>
      <c r="B32" s="5"><f>B29*$B$27</f><v></v></c>
      <c r="C32" s="5"><f>C29*$B$27</f><v></v></c>
      <c r="D32" s="5"><f>D29*$B$27</f><v></v></c>
      <c r="E32" s="5"><f>E29*$B$27</f><v></v></c>
    </row>
    <row r="33">
      <c r="A33" t="s" s="2"><v>37</v></c>
      <c r="B33" s="5"><f>B29*$B$27</f><v></v></c>
      <c r="C33" s="5"><f>C29*$B$27</f><v></v></c>
      <c r="D33" s="5"><f>D29*$B$27</f><v></v></c>
      <c r="E33" s="5"><f>E29*$B$27</f><v></v></c>
    </row>
    <row r="34">
      <c r="A34" t="s" s="2"><v>38</v></c>
      <c r="B34" s="5"><f>B29*$B$27</f><v></v></c>
      <c r="C34" s="5"><f>C29*$B$27</f><v></v></c>
      <c r="D34" s="5"><f>D29*$B$27</f><v></v></c>
      <c r="E34" s="5"><f>E29*$B$27</f><v></v></c>
    </row>
    <row r="35">
      <c r="A35" t="s" s="2"><v>39</v></c>
      <c r="B35" s="5"><f>B29*$B$27</f><v></v></c>
      <c r="C35" s="5"><f>C29*$B$27</f><v></v></c>
      <c r="D35" s="5"><f>D29*$B$27</f><v></v></c>
      <c r="E35" s="5"><f>E29*$B$27</f><v></v></c>
    </row>
    <row r="36">
      <c r="A36" t="s" s="2"><v>40</v></c>
      <c r="B36" s="5"><f>B29*$B$27</f><v></v></c>
      <c r="C36" s="5"><f>C29*$B$27</f><v></v></c>
      <c r="D36" s="5"><f>D29*$B$27</f><v></v></c>
      <c r="E36" s="5"><f>E29*$B$27</f><v></v></c>
    </row>
    <row r="37">
      <c r="A37" t="s" s="2"><v>41</v></c>
      <c r="B37" s="6"><f>SUM(B32:B36)</f><v></v></c>
      <c r="C37" s="6"><f>SUM(C32:C36)</f><v></v></c>
      <c r="D37" s="6"><f>SUM(D32:D36)</f><v></v></c>
      <c r="E37" s="6"><f>SUM(E32:E36)</f><v></v></c>
    </row>
    <row r="39">
      <c r="A39" t="s" s="4"><v>42</v></c>
    </row>
    <row r="40">
      <c r="A40" t="s" s="2"><v>43</v></c>
      <c r="B40" s="6"><f>B2-B37</f><v></v></c>
    </row>
    <row r="41">
      <c r="A41" t="s" s="2"><v>44</v></c>
      <c r="B41" s="6"><f>B40</f><v></v></c>
    </row>
    <row r="42">
      <c r="A42" t="s" s="2"><v>45</v></c>
      <c r="B42" s="6"><f>SUM(B32:B32)</f><v></v></c>
    </row>
    <row r="43">
      <c r="A43" t="s" s="2"><v>46</v></c>
      <c r="B43" s="6"><f>SUM(B33:B33)</f><v></v></c>
    </row>
    <row r="44">
      <c r="A44" t="s" s="2"><v>47</v></c>
      <c r="B44" s="6"><f>SUM(B34:B34)</f><v></v></c>
    </row>
    <row r="45">
      <c r="A45" t="s" s="2"><v>48</v></c>
      <c r="B45" s="6"><f>SUM(B35:B35)</f><v></v></c>
    </row>
    <row r="46">
      <c r="A46" t="s" s="2"><v>49</v></c>
      <c r="B46" s="6"><f>SUM(B36:B36)</f><v></v></c>
    </row>
    <row r="47">
      <c r="A47" t="s" s="2"><v>50</v></c>
      <c r="B47" s="6"><f>SUM(B41:B46)</f><v></v></c>
    </row>
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

with open('D:/temp/xlsx_work/F4_work_template/xl/worksheets/sheet1.xml', 'w', encoding='utf-8') as f:
    f.write(content)
print('Done')
