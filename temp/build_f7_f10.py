import os

work_dir = '/tmp/xlsx_work/xl'

# F7 sheet - 保障体系设计检查表
f7 = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"/></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols>
    <col min="1" max="1" width="10" customWidth="1"/>
    <col min="2" max="2" width="25" customWidth="1"/>
    <col min="3" max="3" width="35" customWidth="1"/>
    <col min="4" max="4" width="12" customWidth="1"/>
    <col min="5" max="5" width="20" customWidth="1"/>
  </cols>
  <sheetData>
    <row r="1"><c r="A1" t="s" s="4"><v>61</v></c></row>
    <row r="2"><c r="A2" t="s" s="1"><v>62</v></c></row>
    <row r="3"><c r="A3" t="s" s="4"><v>63</v></c><c r="B3" t="s" s="4"><v>64</v></c><c r="C3" t="s" s="4"><v>65</v></c><c r="D3" t="s" s="4"><v>66</v></c><c r="E3" t="s" s="4"><v>67</v></c></row>
    <row r="4"><c r="A4" t="s" s="1"><v></v></c><c r="B4" t="s" s="1"><v></v></c><c r="C4" t="s" s="1"><v></v></c><c r="D4" t="s" s="1"><v></v></c><c r="E4" t="s" s="1"><v></v></c></row>
    <row r="5"><c r="A5" t="s" s="1"><v></v></c><c r="B5" t="s" s="1"><v></v></c><c r="C5" t="s" s="1"><v></v></c><c r="D5" t="s" s="1"><v></v></c><c r="E5" t="s" s="1"><v></v></c></row>
    <row r="6"><c r="A6" t="s" s="1"><v></v></c><c r="B6" t="s" s="1"><v></v></c><c r="C6" t="s" s="1"><v></v></c><c r="D6" t="s" s="1"><v></v></c><c r="E6" t="s" s="1"><v></v></c></row>
    <row r="7"><c r="A7" t="s" s="1"><v></v></c><c r="B7" t="s" s="1"><v></v></c><c r="C7" t="s" s="1"><v></v></c><c r="D7" t="s" s="1"><v></v></c><c r="E7" t="s" s="1"><v></v></c></row>
    <row r="8"><c r="A8" t="s" s="1"><v></v></c><c r="B8" t="s" s="1"><v></v></c><c r="C8" t="s" s="1"><v></v></c><c r="D8" t="s" s="1"><v></v></c><c r="E8" t="s" s="1"><v></v></c></row>
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

# F8 sheet - 激励与考核机制表
f8 = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"/></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols>
    <col min="1" max="1" width="15" customWidth="1"/>
    <col min="2" max="2" width="30" customWidth="1"/>
    <col min="3" max="3" width="20" customWidth="1"/>
    <col min="4" max="4" width="20" customWidth="1"/>
  </cols>
  <sheetData>
    <row r="1"><c r="A1" t="s" s="4"><v>68</v></c></row>
    <row r="2"><c r="A2" t="s" s="1"><v>69</v></c></row>
    <row r="3"><c r="A3" t="s" s="4"><v>70</v></c><c r="B3" t="s" s="4"><v>71</v></c><c r="C3" t="s" s="4"><v>72</v></c><c r="D3" t="s" s="4"><v>73</v></c></row>
    <row r="4"><c r="A4" t="s" s="1"><v></v></c><c r="B4" t="s" s="1"><v></v></c><c r="C4" t="s" s="1"><v></v></c><c r="D4" t="s" s="1"><v></v></c></row>
    <row r="5"><c r="A5" t="s" s="1"><v></v></c><c r="B5" t="s" s="1"><v></v></c><c r="C5" t="s" s="1"><v></v></c><c r="D5" t="s" s="1"><v></v></c></row>
    <row r="6"><c r="A6" t="s" s="1"><v></v></c><c r="B6" t="s" s="1"><v></v></c><c r="C6" t="s" s="1"><v></v></c><c r="D6" t="s" s="1"><v></v></c></row>
    <row r="7"><c r="A7" t="s" s="1"><v></v></c><c r="B7" t="s" s="1"><v></v></c><c r="C7" t="s" s="1"><v></v></c><c r="D7" t="s" s="1"><v></v></c></row>
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

# F9 sheet - 我的AI能力沉淀计划
f9 = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"/></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols>
    <col min="1" max="1" width="15" customWidth="1"/>
    <col min="2" max="2" width="25" customWidth="1"/>
    <col min="3" max="3" width="20" customWidth="1"/>
    <col min="4" max="4" width="15" customWidth="1"/>
    <col min="5" max="5" width="15" customWidth="1"/>
  </cols>
  <sheetData>
    <row r="1"><c r="A1" t="s" s="4"><v>74</v></c></row>
    <row r="2"><c r="A2" t="s" s="1"><v>75</v></c></row>
    <row r="3"><c r="A3" t="s" s="4"><v>76</v></c><c r="B3" t="s" s="4"><v>77</v></c><c r="C3" t="s" s="4"><v>78</v></c><c r="D3" t="s" s="4"><v>79</v></c><c r="E3" t="s" s="4"><v>80</v></c></row>
    <row r="4"><c r="A4" t="s" s="1"><v></v></c><c r="B4" t="s" s="1"><v></v></c><c r="C4" t="s" s="1"><v></v></c><c r="D4" t="s" s="1"><v></v></c><c r="E4" t="s" s="1"><v></v></c></row>
    <row r="5"><c r="A5" t="s" s="1"><v></v></c><c r="B5" t="s" s="1"><v></v></c><c r="C5" t="s" s="1"><v></v></c><c r="D5" t="s" s="1"><v></v></c><c r="E5" t="s" s="1"><v></v></c></row>
    <row r="6"><c r="A6" t="s" s="1"><v></v></c><c r="B6" t="s" s="1"><v></v></c><c r="C6" t="s" s="1"><v></v></c><c r="D6" t="s" s="1"><v></v></c><c r="E6" t="s" s="1"><v></v></c></row>
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

# F10 sheet - 团队AI能力台账
f10 = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"/></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols>
    <col min="1" max="1" width="8" customWidth="1"/>
    <col min="2" max="2" width="10" customWidth="1"/>
    <col min="3" max="3" width="12" customWidth="1"/>
    <col min="4" max="4" width="8" customWidth="1"/>
    <col min="5" max="5" width="8" customWidth="1"/>
    <col min="6" max="6" width="8" customWidth="1"/>
    <col min="7" max="7" width="8" customWidth="1"/>
    <col min="8" max="8" width="8" customWidth="1"/>
    <col min="9" max="9" width="10" customWidth="1"/>
    <col min="10" max="10" width="12" customWidth="1"/>
  </cols>
  <sheetData>
    <row r="1"><c r="A1" t="s" s="4"><v>81</v></c></row>
    <row r="2"><c r="A2" t="s" s="1"><v>82</v></c></row>
    <row r="3"><c r="A3" t="s" s="4"><v>83</v></c><c r="B3" t="s" s="4"><v>84</v></c><c r="C3" t="s" s="4"><v>85</v></c><c r="D3" t="s" s="4"><v>86</v></c><c r="E3" t="s" s="4"><v>87</v></c><c r="F3" t="s" s="4"><v>88</v></c><c r="G3" t="s" s="4"><v>89</v></c><c r="H3" t="s" s="4"><v>90</v></c><c r="I3" t="s" s="4"><v>91</v></c><c r="J3" t="s" s="4"><v>92</v></c></row>
    <row r="4"><c r="A4" t="s" s="1"><v></v></c><c r="B4" t="s" s="1"><v></v></c><c r="C4" t="s" s="1"><v></v></c><c r="D4" t="s" s="1"><v></v></c><c r="E4" t="s" s="1"><v></v></c><c r="F4" t="s" s="1"><v></v></c><c r="G4" t="s" s="1"><v></v></c><c r="H4" t="s" s="1"><v></v></c><c r="I4" t="s" s="1"><v></v></c><c r="J4" t="s" s="1"><v></v></c></row>
    <row r="5"><c r="A5" t="s" s="1"><v></v></c><c r="B5" t="s" s="1"><v></v></c><c r="C5" t="s" s="1"><v></v></c><c r="D5" t="s" s="1"><v></v></c><c r="E5" t="s" s="1"><v></v></c><c r="F5" t="s" s="1"><v></v></c><c r="G5" t="s" s="1"><v></v></c><c r="H5" t="s" s="1"><v></v></c><c r="I5" t="s" s="1"><v></v></c><c r="J5" t="s" s="1"><v></v></c></row>
    <row r="6"><c r="A6" t="s" s="1"><v></v></c><c r="B6" t="s" s="1"><v></v></c><c r="C6" t="s" s="1"><v></v></c><c r="D6" t="s" s="1"><v></v></c><c r="E6" t="s" s="1"><v></v></c><c r="F6" t="s" s="1"><v></v></c><c r="G6" t="s" s="1"><v></v></c><c r="H6" t="s" s="1"><v></v></c><c r="I6" t="s" s="1"><v></v></c><c r="J6" t="s" s="1"><v></v></c></row>
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>'''

with open(work_dir + '/worksheets/sheet7.xml', 'w') as f:
    f.write(f7)
with open(work_dir + '/worksheets/sheet8.xml', 'w') as f:
    f.write(f8)
with open(work_dir + '/worksheets/sheet9.xml', 'w') as f:
    f.write(f9)
with open(work_dir + '/worksheets/sheet10.xml', 'w') as f:
    f.write(f10)

print('F7-F10 sheets created')