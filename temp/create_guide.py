#!/usr/bin/env python3
"""Generate usage guide Excel for KPI course."""
import os

base_dir = 'D:/CC/temp/guide_work/xl/worksheets/'

# Guide sheet
guide_sheet = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <sheetPr><tabColor rgb="001B4F9B"/><outlinePr summaryBelow="1" summaryRight="1"/><pageSetUpPr/></sheetPr>
  <dimension ref="A1:D30"/>
  <sheetViews><sheetView workbookViewId="0"><selection activeCell="A1" sqref="A1"/></sheetView></sheetViews>
  <sheetFormatPr baseColWidth="8" defaultRowHeight="15"/>
  <cols>
    <col width="4" customWidth="1" min="1" max="1"/>
    <col width="20" customWidth="1" min="2" max="2"/>
    <col width="60" customWidth="1" min="3" max="3"/>
    <col width="20" customWidth="1" min="4" max="4"/>
  </cols>
  <sheetData>
    <row r="1" ht="40" customHeight="1"><c r="A1" s="12" t="s"><v>0</v></c></row>
    <row r="2" ht="18" customHeight="1"><c r="A2" s="1" t="s"><v>1</v></c></row>
    <row r="3" ht="28" customHeight="1"><c r="A3" s="4" t="s"><v>2</v></c><c r="B3" s="4" t="s"><v>3</v></c><c r="C3" s="4" t="s"><v>4</v></c></row>
    <row r="4" ht="60" customHeight="1"><c r="A4" s="3" t="s"><v>5</v></c><c r="B4" s="3" t="s"><v>6</v></c><c r="C4" s="3" t="s"><v>7</v></c></row>
    <row r="5" ht="80" customHeight="1"><c r="A5" s="3" t="s"><v>8</v></c><c r="B5" s="3" t="s"><v>9</v></c><c r="C5" s="3" t="s"><v>10</v></c></row>
    <row r="6" ht="60" customHeight="1"><c r="A6" s="3" t="s"><v>11</v></c><c r="B6" s="3" t="s"><v>12</v></c><c r="C6" s="3" t="s"><v>13</v></c></row>
    <row r="7" ht="18" customHeight="1"><c r="A7" s="1" t="s"><v>14</v></c></row>
    <row r="8" ht="28" customHeight="1"><c r="A8" s="4" t="s"><v>15</v></c><c r="B8" s="4" t="s"><v>16</v></c><c r="C8" s="4" t="s"><v>17</v></c></row>
    <row r="9" ht="60" customHeight="1"><c r="A9" s="3" t="s"><v>18</v></c><c r="B9" s="3" t="s"><v>19</v></c><c r="C9" s="3" t="s"><v>20</v></c></row>
    <row r="10" ht="60" customHeight="1"><c r="A10" s="3" t="s"><v>21</v></c><c r="B10" s="3" t="s"><v>22</v></c><c r="C10" s="3" t="s"><v>23</v></c></row>
    <row r="11" ht="60" customHeight="1"><c r="A11" s="3" t="s"><v>24</v></c><c r="B11" s="3" t="s"><v>25</v></c><c r="C11" s="3" t="s"><v>26</v></c></row>
    <row r="12" ht="18" customHeight="1"><c r="A12" s="1" t="s"><v>27</v></c></row>
    <row r="13" ht="28" customHeight="1"><c r="A13" s="4" t="s"><v>28</v></c><c r="B13" s="4" t="s"><v>29</v></c><c r="C13" s="4" t="s"><v>30</v></c></row>
    <row r="14" ht="60" customHeight="1"><c r="A14" s="3" t="s"><v>31</v></c><c r="B14" s="3" t="s"><v>32</v></c><c r="C14" s="3" t="s"><v>33</v></c></row>
    <row r="15" ht="60" customHeight="1"><c r="A15" s="3" t="s"><v>34</v></c><c r="B15" s="3" t="s"><v>35</v></c><c r="C15" s="3" t="s"><v>36</v></c></row>
    <row r="16" ht="60" customHeight="1"><c r="A16" s="3" t="s"><v>37</v></c><c r="B16" s="3" t="s"><v>38</v></c><c r="C16" s="3" t="s"><v>39</v></c></row>
    <row r="17" ht="18" customHeight="1"><c r="A17" s="1" t="s"><v>40</v></c></row>
    <row r="18" ht="28" customHeight="1"><c r="A18" s="4" t="s"><v>41</v></c><c r="B18" s="4" t="s"><v>42</v></c><c r="C18" s="4" t="s"><v>43</v></c></row>
    <row r="19" ht="60" customHeight="1"><c r="A19" s="3" t="s"><v>44</v></c><c r="B19" s="3" t="s"><v>45</v></c><c r="C19" s="3" t="s"><v>46</v></c></row>
    <row r="20" ht="60" customHeight="1"><c r="A20" s="3" t="s"><v>47</v></c><c r="B20" s="3" t="s"><v>48</v></c><c r="C20" s="3" t="s"><v>49</v></c></row>
    <row r="21" ht="60" customHeight="1"><c r="A21" s="3" t="s"><v>50</v></c><c r="B21" s="3" t="s"><v>51</v></c><c r="C21" s="3" t="s"><v>52</v></c></row>
    <row r="22" ht="18" customHeight="1"><c r="A22" s="1" t="s"><v>53</v></c></row>
    <row r="23" ht="28" customHeight="1"><c r="A23" s="4" t="s"><v>54</v></c><c r="B23" s="4" t="s"><v>55</v></c><c r="C23" s="4" t="s"><v>56</v></c></row>
    <row r="24" ht="60" customHeight="1"><c r="A24" s="3" t="s"><v>57</v></c><c r="B24" s="3" t="s"><v>58</v></c><c r="C24" s="3" t="s"><v>59</v></c></row>
    <row r="25" ht="60" customHeight="1"><c r="A25" s="3" t="s"><v>60</v></c><c r="B25" s="3" t="s"><v>61</v></c><c r="C25" s="3" t="s"><v>62</v></c></row>
    <row r="26" ht="60" customHeight="1"><c r="A26" s="3" t="s"><v>63</v></c><c r="B26" s="3" t="s"><v>64</v></c><c r="C26" s="3" t="s"><v>65</v></c></row>
    <row r="27" ht="18" customHeight="1"><c r="A27" s="1" t="s"><v>66</v></c></row>
    <row r="28" ht="28" customHeight="1"><c r="A28" s="4" t="s"><v>67</v></c><c r="B28" s="4" t="s"><v>68</v></c><c r="C28" s="4" t="s"><v>69</v></c></row>
    <row r="29" ht="80" customHeight="1"><c r="A29" s="3" t="s"><v>70</v></c><c r="B29" s="3" t="s"><v>71</v></c><c r="C29" s="3" t="s"><v>72</v></c></row>
    <row r="30" ht="60" customHeight="1"><c r="A30" s="3" t="s"><v>73</v></c><c r="B30" s="3" t="s"><v>74</v></c><c r="C30" s="3" t="s"><v>75</v></c></row>
  </sheetData>
</worksheet>'''

with open(base_dir + 'sheet1.xml', 'w', encoding='utf-8') as f:
    f.write(guide_sheet)

print("Guide sheet written!")
