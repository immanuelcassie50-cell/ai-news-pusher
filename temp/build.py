import os, zipfile
base = r"D:\CC\temp\xlsx_work"
out = r"D:\CC\temp\课程评估工具.xlsx"

# Sheet 2
s2 = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns=\"http://schemas.openxmlformats.org/spreadsheetml/2006/main\">
  <sheetViews><sheetView workbookViewId=\"0\" showGridLines=\"false\"><selection activeCell=\"A1\" sqref=\"A1\"/></sheetView></sheetViews>
  <sheetFormatPr defaultRowHeight=\"18\"/>
  <cols><col min=\"1\" max=\"1\" width=\"5\" hidden=\"1\"/><col min=\"2\" max=\"2\" width=\"20\"/><col min=\"3\" max=\"3\" width=\"45\"/><col min=\"4\" max=\"9\" width=\"12\"/></cols>
  <sheetData>
    <row r=\"1\" ht=\"30\" customHeight=\"1\"><c r=\"B1\" t=\"s\" s=\"4\"><v>72</v></c></row>
    <row r=\"2\" ht=\"22\" customHeight=\"1\"><c r=\"B2\" t=\"s\" s=\"4\"><v>1</v></c></row>
    <row r=\"3\" ht=\"20\" customHeight=\"1\"><c r=\"B3\" t=\"s\" s=\"0\"><v>73</v></c><c r=\"C3\" t=\"s\" s=\"1\"><v></v></c><c r=\"D3\" t=\"s\" s=\"0\"><v>74</v></c><c r=\"E3\" t=\"s\" s=\"1\"><v></v></c><c r=\"F3\" t=\"s\" s=\"0\"><v>75</v></c><c r=\"G3\" t=\"s\" s=\"1\"><v></v></c></row>
    <row r=\"4\" ht=\"22\" customHeight=\"1\"><c r=\"B4\" t=\"s\" s=\"4\"><v>76</v></c></row>
    <row r=\"5\" ht=\"18\" customHeight=\"1\"><c r=\"B5\" t=\"s\" s=\"0\"><v>77</v></c></row>
    <row r=\"6\" ht=\"18\" customHeight=\"1\"><c r=\"B6\" t=\"s\" s=\"2\"><v>78</v></c><c r=\"D6\" t=\"s\" s=\"4\"><v></v></c><c r=\"E6\" t=\"s\" s=\"4\"><v></v></c><c r=\"F6\" t=\"s\" s=\"4\"><v></v></c><c r=\"G6\" t=\"s\" s=\"4\"><v></v></c><c r=\"H6\" t=\"s\" s=\"4\"><v></v></c></row>
    <row r=\"7\" ht=\"18\" customHeight=\"1\"><c r=\"C7\" t=\"s\" s=\"4\"><v></v></c><c r=\"D7\" t=\"s\" s=\"4\"><v>1</v></c><c r=\"E7\" t=\"s\" s=\"4\"><v>2</v></c><c r=\"F7\" t=\"s\" s=\"4\"><v>3</v></c><c r=\"G7\" t=\"s\" s=\"4\"><v>4</v></c><c r=\"H7\" t=\"s\" s=\"4\"><v>5</v></c></row>
