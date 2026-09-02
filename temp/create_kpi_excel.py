#!/usr/bin/env python3
"""Generate KPI course Excel files."""
import os
import shutil

# Paths
base_dir = 'D:/CC/temp/kpi_filled/xl/worksheets/'

# Sheet 1 - KPI五维筛选矩阵 (with example data)
sheet1 = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <sheetPr><tabColor rgb="001B4F9B"/><outlinePr summaryBelow="1" summaryRight="1"/><pageSetUpPr/></sheetPr>
  <dimension ref="A1:J20"/>
  <sheetViews><sheetView workbookViewId="0"><selection activeCell="A1" sqref="A1"/></sheetView></sheetViews>
  <sheetFormatPr baseColWidth="8" defaultRowHeight="15"/>
  <cols><col width="4" customWidth="1" min="1" max="1"/><col width="16" customWidth="1" min="2" max="2"/><col width="28" customWidth="1" min="3" max="3"/><col width="36" customWidth="1" min="4" max="4"/><col width="14" customWidth="1" min="5" max="5"/><col width="18" customWidth="1" min="6" max="6"/><col width="18" customWidth="1" min="7" max="7"/><col width="16" customWidth="1" min="8" max="8"/><col width="20" customWidth="1" min="9" max="9"/><col width="18" customWidth="1" min="10" max="10"/></cols>
  <sheetData>
    <row r="1" ht="36" customHeight="1"><c r="A1" s="12" t="s"><v>0</v></c></row>
    <row r="2" ht="18" customHeight="1"><c r="A2" s="1" t="s"><v>1</v></c></row>
    <row r="3" ht="26" customHeight="1"><c r="A3" s="4" t="s"><v>2</v></c><c r="B3" s="4" t="s"><v>3</v></c><c r="C3" s="4" t="s"><v>4</v></c><c r="D3" s="4" t="s"><v>5</v></c><c r="E3" s="4" t="s"><v>6</v></c><c r="F3" s="4" t="s"><v>7</v></c><c r="G3" s="4" t="s"><v>8</v></c><c r="H3" s="4" t="s"><v>9</v></c><c r="I3" s="4" t="s"><v>10</v></c></row>
    <row r="4" ht="22" customHeight="1"><c r="A4" s="2" t="s"><v>11</v></c><c r="B4" s="3" t="s"><v>12</v></c><c r="C4" s="3" t="s"><v>13</v></c><c r="D4" t="s"><v></v></c><c r="E4" s="5"><v>4</v></c><c r="F4" s="5"><v>2</v></c><c r="G4" s="5"><v>5</v></c><c r="H4" s="6"><f>E4*F4*G4</f><v></v></c><c r="I4" s="5" t="s"><v>33</v></c></row>
    <row r="5" ht="22" customHeight="1"><c r="A5" s="2" t="s"><v>11</v></c><c r="B5" s="3" t="s"><v>12</v></c><c r="C5" s="3" t="s"><v>14</v></c><c r="D5" t="s"><v></v></c><c r="E5" s="5"><v>5</v></c><c r="F5" s="5"><v>3</v></c><c r="G5" s="5"><v>4</v></c><c r="H5" s="6"><f>E5*F5*G5</f><v></v></c><c r="I5" s="5" t="s"><v>35</v></c></row>
    <row r="6" ht="22" customHeight="1"><c r="A6" s="2" t="s"><v>11</v></c><c r="B6" s="3" t="s"><v>12</v></c><c r="C6" s="3" t="s"><v>15</v></c><c r="D6" t="s"><v></v></c><c r="E6" s="5"><v>3</v></c><c r="F6" s="5"><v>4</v></c><c r="G6" s="5"><v>3</v></c><c r="H6" s="6"><f>E6*F6*G6</f><v></v></c><c r="I6" s="5" t="s"><v>34</v></c></row>
    <row r="7" ht="22" customHeight="1"><c r="A7" s="2" t="s"><v>16</v></c><c r="B7" s="3" t="s"><v>17</v></c><c r="C7" s="3" t="s"><v>18</v></c><c r="D7" t="s"><v></v></c><c r="E7" s="5"><v>5</v></c><c r="F7" s="5"><v>2</v></c><c r="G7" s="5"><v>5</v></c><c r="H7" s="6"><f>E7*F7*G7</f><v></v></c><c r="I7" s="5" t="s"><v>33</v></c></row>
    <row r="8" ht="22" customHeight="1"><c r="A8" s="2" t="s"><v>16</v></c><c r="B8" s="3" t="s"><v>17</v></c><c r="C8" s="3" t="s"><v>19</v></c><c r="D8" t="s"><v></v></c><c r="E8" s="5"><v>4</v></c><c r="F8" s="5"><v>3</v></c><c r="G8" s="5"><v>4</v></c><c r="H8" s="6"><f>E8*F8*G8</f><v></v></c><c r="I8" s="5" t="s"><v>34</v></c></row>
    <row r="9" ht="22" customHeight="1"><c r="A9" s="2" t="s"><v>16</v></c><c r="B9" s="3" t="s"><v>17</v></c><c r="C9" s="3" t="s"><v>20</v></c><c r="D9" t="s"><v></v></c><c r="E9" s="5"><v>2</v></c><c r="F9" s="5"><v>4</v></c><c r="G9" s="5"><v>2</v></c><c r="H9" s="6"><f>E9*F9*G9</f><v></v></c><c r="I9" s="5" t="s"><v>34</v></c></row>
    <row r="10" ht="22" customHeight="1"><c r="A10" s="2" t="s"><v>21</v></c><c r="B10" s="3" t="s"><v>22</v></c><c r="C10" s="3" t="s"><v>23</v></c><c r="D10" t="s"><v></v></c><c r="E10" s="5"><v>4</v></c><c r="F10" s="5"><v>3</v></c><c r="G10" s="5"><v>4</v></c><c r="H10" s="6"><f>E10*F10*G10</f><v></v></c><c r="I10" s="5" t="s"><v>35</v></c></row>
    <row r="11" ht="22" customHeight="1"><c r="A11" s="2" t="s"><v>21</v></c><c r="B11" s="3" t="s"><v>22</v></c><c r="C11" s="3" t="s"><v>24</v></c><c r="D11" t="s"><v></v></c><c r="E11" s="5"><v>3</v></c><c r="F11" s="5"><v>4</v></c><c r="G11" s="5"><v>3</v></c><c r="H11" s="6"><f>E11*F11*G11</f><v></v></c><c r="I11" s="5" t="s"><v>34</v></c></row>
    <row r="12" ht="22" customHeight="1"><c r="A12" s="2" t="s"><v>21</v></c><c r="B12" s="3" t="s"><v>22</v></c><c r="C12" s="3" t="s"><v>25</v></c><c r="D12" t="s"><v></v></c><c r="E12" s="5"><v>3</v></c><c r="F12" s="5"><v>3</v></c><c r="G12" s="5"><v>3</v></c><c r="H12" s="6"><f>E12*F12*G12</f><v></v></c><c r="I12" s="5" t="s"><v>34</v></c></row>
    <row r="13" ht="22" customHeight="1"><c r="A13" s="2" t="s"><v>26</v></c><c r="B13" s="3" t="s"><v>27</v></c><c r="C13" s="3" t="s"><v>28</v></c><c r="D13" t="s"><v></v></c><c r="E13" s="5"><v>2</v></c><c r="F13" s="5"><v>4</v></c><c r="G13" s="5"><v>2</v></c><c r="H13" s="6"><f>E13*F13*G13</f><v></v></c><c r="I13" s="5" t="s"><v>34</v></c></row>
    <row r="14" ht="22" customHeight="1"><c r="A14" s="2" t="s"><v>26</v></c><c r="B14" s="3" t="s"><v>27</v></c><c r="C14" s="3" t="s"><v>29</v></c><c r="D14" t="s"><v></v></c><c r="E14" s="5"><v>3</v></c><c r="F14" s="5"><v>4</v></c><c r="G14" s="5"><v>3</v></c><c r="H14" s="6"><f>E14*F14*G14</f><v></v></c><c r="I14" s="5" t="s"><v>35</v></c></row>
    <row r="15" ht="22" customHeight="1"><c r="A15" s="2" t="s"><v>26</v></c><c r="B15" s="3" t="s"><v>27</v></c><c r="C15" s="3" t="s"><v>30</v></c><c r="D15" t="s"><v></v></c><c r="E15" s="5"><v>2</v></c><c r="F15" s="5"><v>5</v></c><c r="G15" s="5"><v>2</v></c><c r="H15" s="6"><f>E15*F15*G15</f><v></v></c><c r="I15" s="5" t="s"><v>34</v></c></row>
    <row r="16" ht="22" customHeight="1"><c r="A16" s="2" t="s"><v>31</v></c><c r="B16" s="3" t="s"><v>32</v></c><c r="C16" s="3" t="s"><v>33</v></c><c r="D16" t="s"><v></v></c><c r="E16" s="5"><v>5</v></c><c r="F16" s="5"><v>2</v></c><c r="G16" s="5"><v>5</v></c><c r="H16" s="6"><f>E16*F16*G16</f><v></v></c><c r="I16" s="5" t="s"><v>33</v></c></row>
    <row r="17" ht="22" customHeight="1"><c r="A17" s="2" t="s"><v>31</v></c><c r="B17" s="3" t="s"><v>32</v></c><c r="C17" s="3" t="s"><v>34</v></c><c r="D17" t="s"><v></v></c><c r="E17" s="5"><v>4</v></c><c r="F17" s="5"><v>3</v></c><c r="G17" s="5"><v>4</v></c><c r="H17" s="6"><f>E17*F17*G17</f><v></v></c><c r="I17" s="5" t="s"><v>34</v></c></row>
    <row r="18" ht="22" customHeight="1"><c r="A18" s="2" t="s"><v>31</v></c><c r="B18" s="3" t="s"><v>32</v></c><c r="C18" s="3" t="s"><v>35</v></c><c r="D18" t="s"><v></v></c><c r="E18" s="5"><v>4</v></c><c r="F18" s="5"><v>3</v></c><c r="G18" s="5"><v>4</v></c><c r="H18" s="6"><f>E18*F18*G18</f><v></v></c><c r="I18" s="5" t="s"><v>33</v></c></row>
    <row r="19" ht="18" customHeight="1"><c r="A19" s="1" t="s"><v>89</v></c></row>
    <row r="20" ht="26" customHeight="1"><c r="A20" s="4" t="s"><v>90</v></c></row>
  </sheetData>
</worksheet>'''

# Sheet 2 - AI报告解读检查表
sheet2 = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <sheetPr><tabColor rgb="002E75B6"/><outlinePr summaryBelow="1" summaryRight="1"/><pageSetUpPr/></sheetPr>
  <dimension ref="A1:D14"/>
  <sheetViews><sheetView workbookViewId="0"><selection activeCell="A1" sqref="A1"/></sheetView></sheetViews>
  <sheetFormatPr baseColWidth="8" defaultRowHeight="15"/>
  <cols><col width="4" customWidth="1" min="1" max="1"/><col width="32" customWidth="1" min="2" max="2"/><col width="20" customWidth="1" min="3" max="3"/><col width="36" customWidth="1" min="4" max="4"/></cols>
  <sheetData>
    <row r="1" ht="36" customHeight="1"><c r="A1" s="12" t="s"><v>36</v></c></row>
    <row r="2" ht="18" customHeight="1"><c r="A2" s="1" t="s"><v>37</v></c></row>
    <row r="3" ht="28" customHeight="1"><c r="A3" s="4" t="s"><v>38</v></c><c r="B3" s="4" t="s"><v>39</v></c><c r="C3" s="4" t="s"><v>40</v></c><c r="D3" s="4" t="s"><v>41</v></c></row>
    <row r="4" ht="24" customHeight="1"><c r="A4" s="3" t="s"><v>42</v></c><c r="B4" s="3" t="s"><v>43</v></c><c r="C4" s="5" t="s"><v>54</v></c><c r="D4" s="3" t="s"><v></v></c></row>
    <row r="5" ht="24" customHeight="1"><c r="A5" s="3" t="s"><v>44</v></c><c r="B5" s="3" t="s"><v>45</v></c><c r="C5" s="5" t="s"><v>54</v></c><c r="D5" s="3" t="s"><v></v></c></row>
    <row r="6" ht="24" customHeight="1"><c r="A6" s="3" t="s"><v>46</v></c><c r="B6" s="3" t="s"><v>47</v></c><c r="C6" s="5" t="s"><v>55</v></c><c r="D6" s="3" t="s"><v>原材料价格波动较大</v></c></row>
    <row r="7" ht="24" customHeight="1"><c r="A7" s="3" t="s"><v>48</v></c><c r="B7" s="3" t="s"><v>49</v></c><c r="C7" s="5" t="s"><v>54</v></c><c r="D7" s="3" t="s"><v></v></c></row>
    <row r="8" ht="24" customHeight="1"><c r="A8" s="3" t="s"><v>50</v></c><c r="B8" s="3" t="s"><v>51</v></c><c r="C8" s="5" t="s"><v>55</v></c><c r="D8" s="3" t="s"><v>2月数据明显异常</v></c></row>
    <row r="9" ht="24" customHeight="1"><c r="A9" s="3" t="s"><v>52</v></c><c r="B9" s="3" t="s"><v>53</v></c><c r="C9" s="5" t="s"><v>54</v></c><c r="D9" s="3" t="s"><v></v></c></row>
    <row r="10" ht="24" customHeight="1"><c r="A10" s="3" t="s"><v>56</v></c><c r="B10" s="3" t="s"><v>57</v></c><c r="C10" s="5" t="s"><v>54</v></c><c r="D10" s="3" t="s"><v></v></c></row>
    <row r="11" ht="24" customHeight="1"><c r="A11" s="3" t="s"><v>58</v></c><c r="B11" s="3" t="s"><v>59</v></c><c r="C11" s="5" t="s"><v>55</v></c><c r="D11" s="3" t="s"><v>需与销售数据交叉验证</v></c></row>
    <row r="12" ht="24" customHeight="1"><c r="A12" s="3" t="s"><v>60</v></c><c r="B12" s="3" t="s"><v>61</v></c><c r="C12" s="5" t="s"><v>54</v></c><c r="D12" s="3" t="s"><v></v></c></row>
    <row r="13" ht="24" customHeight="1"><c r="A13" s="3" t="s"><v>62</v></c><c r="B13" s="3" t="s"><v>63</v></c><c r="C13" s="5" t="s"><v>54</v></c><c r="D13" s="3" t="s"><v></v></c></row>
    <row r="14" ht="28" customHeight="1"><c r="A14" s="4" t="s"><v>64</v></c><c r="B14" s="5" t="s"><v>54</v></c><c r="D14" s="3" t="s"><v></v></c></row>
  </sheetData>
</worksheet>'''

# Sheet 3 - 战略穿透指标卡
sheet3 = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <sheetPr><tabColor rgb="00375623"/><outlinePr summaryBelow="1" summaryRight="1"/><pageSetUpPr/></sheetPr>
  <dimension ref="A1:G12"/>
  <sheetViews><sheetView workbookViewId="0"><selection activeCell="A1" sqref="A1"/></sheetView></sheetViews>
  <sheetFormatPr baseColWidth="8" defaultRowHeight="15"/>
  <cols><col width="4" customWidth="1" min="1" max="1"/><col width="20" customWidth="1" min="2" max="2"/><col width="14" customWidth="1" min="3" max="3"/><col width="14" customWidth="1" min="4" max="4"/><col width="14" customWidth="1" min="5" max="5"/><col width="28" customWidth="1" min="6" max="6"/><col width="24" customWidth="1" min="7" max="7"/></cols>
  <sheetData>
    <row r="1" ht="36" customHeight="1"><c r="A1" s="12" t="s"><v>65</v></c></row>
    <row r="2" ht="18" customHeight="1"><c r="A2" s="1" t="s"><v>66</v></c></row>
    <row r="3" ht="28" customHeight="1"><c r="A3" s="4" t="s"><v>67</v></c><c r="B3" s="4" t="s"><v>68</v></c><c r="C3" s="4" t="s"><v>69</v></c><c r="D3" s="4" t="s"><v>70</v></c><c r="E3" s="4" t="s"><v>71</v></c><c r="F3" s="4" t="s"><v>72</v></c><c r="G3" s="4" t="s"><v>73</v></c></row>
    <row r="4" ht="24" customHeight="1"><c r="A4" t="s"><v></v></c><c r="B4" s="3" t="s"><v>12</v></c><c r="C4" s="5"><v>0.92</v></c><c r="D4" s="5"><v>0.98</v></c><c r="E4" s="6"><f>C4-D4</f><v></v></c><c r="F4" s="3" t="s"><v>75</v></c><c r="G4" s="3" t="s"><v>76</v></c></row>
    <row r="5" ht="24" customHeight="1"><c r="A5" t="s"><v></v></c><c r="B5" s="3" t="s"><v>19</v></c><c r="C5" s="5"><v>4.2</v></c><c r="D5" s="5"><v>4.5</v></c><c r="E5" s="6"><f>C5-D5</f><v></v></c><c r="F5" s="3" t="s"><v>77</v></c><c r="G5" s="3" t="s"><v>78</v></c></row>
    <row r="6" ht="24" customHeight="1"><c r="A6" t="s"><v></v></c><c r="B6" s="3" t="s"><v>13</v></c><c r="C6" s="5"><v>6.5</v></c><c r="D6" s="5"><v>8.0</v></c><c r="E6" s="6"><f>C6-D6</f><v></v></c><c r="F6" s="3" t="s"><v>79</v></c><c r="G6" s="3" t="s"><v>80</v></c></row>
    <row r="7" ht="24" customHeight="1"><c r="A7" t="s"><v></v></c><c r="B7" s="3" t="s"><v>14</v></c><c r="C7" s="5"><v>0.96</v></c><c r="D7" s="5"><v>0.98</v></c><c r="E7" s="6"><f>C7-D7</f><v></v></c><c r="F7" s="3" t="s"><v></v></c><c r="G7" s="3" t="s"><v></v></c></row>
    <row r="8" ht="24" customHeight="1"><c r="A8" t="s"><v></v></c><c r="B8" s="3" t="s"><v>24</v></c><c r="C8" s="5"><v>2.5</v></c><c r="D8" s="5"><v>2.0</v></c><c r="E8" s="6"><f>C8-D8</f><v></v></c><c r="F8" s="3" t="s"><v></v></c><c r="G8" s="3" t="s"><v></v></c></row>
    <row r="9" ht="24" customHeight="1"><c r="A9" t="s"><v></v></c><c r="B9" s="3" t="s"><v>29</v></c><c r="C9" s="5"><v>15</v></c><c r="D9" s="5"><v>20</v></c><c r="E9" s="6"><f>C9-D9</f><v></v></c><c r="F9" s="3" t="s"><v></v></c><c r="G9" s="3" t="s"><v></v></c></row>
    <row r="10" ht="24" customHeight="1"><c r="A10" t="s"><v></v></c><c r="B10" s="3" t="s"><v>34</v></c><c r="C10" s="5"><v>0.35</v></c><c r="D10" s="5"><v>0.30</v></c><c r="E10" s="6"><f>C10-D10</f><v></v></c><c r="F10" s="3" t="s"><v></v></c><c r="G10" s="3" t="s"><v></v></c></row>
    <row r="11" ht="24" customHeight="1"><c r="A11" t="s"><v></v></c><c r="B11" s="3" t="s"><v>35</v></c><c r="C11" s="5"><v>0.18</v></c><c r="D11" s="5"><v>0.10</v></c><c r="E11" s="6"><f>C11-D11</f><v></v></c><c r="F11" s="3" t="s"><v></v></c><c r="G11" s="3" t="s"><v></v></c></row>
    <row r="12" ht="24" customHeight="1"><c r="A12" t="s"><v></v></c><c r="B12" s="3" t="s"><v>36</v></c><c r="C12" s="5"><v>0.85</v></c><c r="D12" s="5"><v>0.90</v></c><c r="E12" s="6"><f>C12-D12</f><v></v></c><c r="F12" s="3" t="s"><v></v></c><c r="G12" s="3" t="s"><v></v></c></row>
  </sheetData>
</worksheet>'''

# Sheet 4 - 例外信号捕捉追踪
sheet4 = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <sheetPr><tabColor rgb="00C55A11"/><outlinePr summaryBelow="1" summaryRight="1"/><pageSetUpPr/></sheetPr>
  <dimension ref="A1:G10"/>
  <sheetViews><sheetView workbookViewId="0"><selection activeCell="A1" sqref="A1"/></sheetView></sheetViews>
  <sheetFormatPr baseColWidth="8" defaultRowHeight="15"/>
  <cols><col width="4" customWidth="1" min="1" max="1"/><col width="28" customWidth="1" min="2" max="2"/><col width="16" customWidth="1" min="3" max="3"/><col width="14" customWidth="1" min="4" max="4"/><col width="14" customWidth="1" min="5" max="5"/><col width="16" customWidth="1" min="6" max="6"/><col width="18" customWidth="1" min="7" max="7"/></cols>
  <sheetData>
    <row r="1" ht="36" customHeight="1"><c r="A1" s="12" t="s"><v>81</v></c></row>
    <row r="2" ht="18" customHeight="1"><c r="A2" s="1" t="s"><v>82</v></c></row>
    <row r="3" ht="28" customHeight="1"><c r="A3" s="4" t="s"><v>83</v></c><c r="B3" s="4" t="s"><v>84</v></c><c r="C3" s="4" t="s"><v>85</v></c><c r="D3" s="4" t="s"><v>86</v></c><c r="E3" s="4" t="s"><v>87</v></c><c r="F3" s="4" t="s"><v>88</v></c><c r="G3" s="4" t="s"><v>89</v></c></row>
    <row r="4" ht="24" customHeight="1"><c r="A4" s="3" t="s"><v>96</v></c><c r="B4" s="3" t="s"><v>97</v></c><c r="C4" s="3" t="s"><v>98</v></c><c r="D4" s="5" t="s"><v>92</v></c><c r="E4" s="5" t="s"><v>93</v></c><c r="F4" s="3" t="s"><v>95</v></c><c r="G4" s="5" t="s"><v>99</v></c></row>
    <row r="5" ht="24" customHeight="1"><c r="A5" s="3" t="s"><v>100</v></c><c r="B5" s="3" t="s"><v>101</v></c><c r="C5" s="3" t="s"><v>102</v></c><c r="D5" s="5" t="s"><v>92</v></c><c r="E5" s="5" t="s"><v>93</v></c><c r="F5" s="3" t="s"><v>95</v></c><c r="G5" s="5" t="s"><v>100</v></c></row>
    <row r="6" ht="24" customHeight="1"><c r="A6" t="s"><v></v></c><c r="B6" t="s"><v></v></c><c r="C6" t="s"><v></v></c><c r="D6" s="5" t="s"><v>92</v></c><c r="E6" s="5" t="s"><v>93</v></c><c r="F6" t="s"><v></v></c><c r="G6" s="5" t="s"><v>100</v></c></row>
    <row r="7" ht="24" customHeight="1"><c r="A7" t="s"><v></v></c><c r="B7" t="s"><v></v></c><c r="C7" t="s"><v></v></c><c r="D7" s="5" t="s"><v>92</v></c><c r="E7" s="5" t="s"><v>93</v></c><c r="F7" t="s"><v></v></c><c r="G7" s="5" t="s"><v>100</v></c></row>
    <row r="8" ht="24" customHeight="1"><c r="A8" t="s"><v></v></c><c r="B8" t="s"><v></v></c><c r="C8" t="s"><v></v></c><c r="D8" s="5" t="s"><v>92</v></c><c r="E8" s="5" t="s"><v>93</v></c><c r="F8" t="s"><v></v></c><c r="G8" s="5" t="s"><v>100</v></c></row>
    <row r="9" ht="24" customHeight="1"><c r="A9" t="s"><v></v></c><c r="B9" t="s"><v></v></c><c r="C9" t="s"><v></v></c><c r="D9" s="5" t="s"><v>92</v></c><c r="E9" s="5" t="s"><v>93</v></c><c r="F9" t="s"><v></v></c><c r="G9" s="5" t="s"><v>100</v></c></row>
    <row r="10" ht="24" customHeight="1"><c r="A10" t="s"><v></v></c><c r="B10" t="s"><v></v></c><c r="C10" t="s"><v></v></c><c r="D10" s="5" t="s"><v>92</v></c><c r="E10" s="5" t="s"><v>93</v></c><c r="F10" t="s"><v></v></c><c r="G10" s="5" t="s"><v>100</v></c></row>
  </sheetData>
</worksheet>'''

# Sheet 5 - KPI仪表盘设计
sheet5 = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <sheetPr><tabColor rgb="006B6B6B"/><outlinePr summaryBelow="1" summaryRight="1"/><pageSetUpPr/></sheetPr>
  <dimension ref="A1:E8"/>
  <sheetViews><sheetView workbookViewId="0"><selection activeCell="A1" sqref="A1"/></sheetView></sheetViews>
  <sheetFormatPr baseColWidth="8" defaultRowHeight="15"/>
  <cols><col width="4" customWidth="1" min="1" max="1"/><col width="20" customWidth="1" min="2" max="2"/><col width="40" customWidth="1" min="3" max="3"/><col width="14" customWidth="1" min="4" max="4"/><col width="18" customWidth="1" min="5" max="5"/></cols>
  <sheetData>
    <row r="1" ht="36" customHeight="1"><c r="A1" s="12" t="s"><v>103</v></c></row>
    <row r="2" ht="18" customHeight="1"><c r="A2" s="1" t="s"><v>104</v></c></row>
    <row r="3" ht="28" customHeight="1"><c r="A3" s="4" t="s"><v>105</v></c><c r="B3" s="4" t="s"><v>106</v></c><c r="C3" s="4" t="s"><v>107</v></c><c r="D3" s="4" t="s"><v>108</v></c><c r="E3" s="4" t="s"><v>109</v></c></row>
    <row r="4" ht="24" customHeight="1"><c r="A4" s="3" t="s"><v>111</v></c><c r="B4" s="3" t="s"><v>112</v></c><c r="C4" s="3" t="s"><v>113</v></c><c r="D4" s="5" t="s"><v>110</v></c><c r="E4" s="3" t="s"><v>114</v></c></row>
    <row r="5" ht="24" customHeight="1"><c r="A5" s="3" t="s"><v>115</v></c><c r="B5" s="3" t="s"><v>116</v></c><c r="C5" s="3" t="s"><v>117</v></c><c r="D5" s="5" t="s"><v>109</v></c><c r="E5" s="3" t="s"><v>114</v></c></row>
    <row r="6" ht="24" customHeight="1"><c r="A6" s="3" t="s"><v>118</v></c><c r="B6" s="3" t="s"><v>119</v></c><c r="C6" s="3" t="s"><v>120</v></c><c r="D6" s="5" t="s"><v>110</v></c><c r="E6" s="3" t="s"><v>114</v></c></row>
    <row r="7" ht="24" customHeight="1"><c r="A7" t="s"><v></v></c><c r="B7" t="s"><v></v></c><c r="C7" t="s"><v></v></c><c r="D7" s="5" t="s"><v>110</v></c><c r="E7" t="s"><v></v></c></row>
    <row r="8" ht="24" customHeight="1"><c r="A8" t="s"><v></v></c><c r="B8" t="s"><v></v></c><c r="C8" t="s"><v></v></c><c r="D8" s="5" t="s"><v>110</v></c><c r="E8" t="s"><v></v></c></row>
  </sheetData>
</worksheet>'''

# Write all sheets
with open(base_dir + 'sheet1.xml', 'w', encoding='utf-8') as f:
    f.write(sheet1)
with open(base_dir + 'sheet2.xml', 'w', encoding='utf-8') as f:
    f.write(sheet2)
with open(base_dir + 'sheet3.xml', 'w', encoding='utf-8') as f:
    f.write(sheet3)
with open(base_dir + 'sheet4.xml', 'w', encoding='utf-8') as f:
    f.write(sheet4)
with open(base_dir + 'sheet5.xml', 'w', encoding='utf-8') as f:
    f.write(sheet5)

print("All worksheets written successfully!")
