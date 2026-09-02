import re

# Fix sheet1.xml
with open(r'D:\CC\temp\xlsx_work_直播复盘\xl\worksheets\sheet1.xml', 'r', encoding='utf-8') as f:
    content = f.read()

# Fix specific cells in rows 4-9 for F, G, H columns
fixes_s1 = {
    'F4': '64', 'G4': '65', 'H4': '62',
    'F5': '64', 'G5': '65', 'H5': '62',
    'F6': '66', 'G6': '65', 'H6': '62',
    'G7': '65', 'H7': '62',
    'F8': '67', 'G8': '65', 'H8': '62',
    'G9': '65', 'H9': '62',
}
for cell, val in fixes_s1.items():
    pattern = f'<c r="{cell}" t="s" s="0"><v>61</v></c>'
    replacement = f'<c r="{cell}" t="s" s="0"><v>{val}</v></c>'
    content = content.replace(pattern, replacement)

with open(r'D:\CC\temp\xlsx_work_直播复盘\xl\worksheets\sheet1.xml', 'w', encoding='utf-8') as f:
    f.write(content)
print("sheet1.xml fixed")

# Fix sheet2.xml
with open(r'D:\CC\temp\xlsx_work_直播复盘\xl\worksheets\sheet2.xml', 'r', encoding='utf-8') as f:
    content = f.read()

# Row 2 subtitle: A2 index 71 -> 81
content = content.replace('<c r="A2" t="s" s="0"><v>71</v></c>', '<c r="A2" t="s" s="0"><v>81</v></c>')

# Fix header row 3: C3=83->84, D3=84->85, E3=85->86, F3=86->87, G3=87->88, H3=88->89, I3=89->90, J3=90->91, K3=91->92
h3_fixes = [('C3','84'),('D3','85'),('E3','86'),('F3','87'),('G3','88'),('H3','89'),('I3','90'),('J3','91'),('K3','92')]
for cell, val in h3_fixes:
    content = content.replace(f'<c r="{cell}" t="s" s="2"><v>{h3_fixes[h3_fixes.index((cell,val))-1][1] if h3_fixes.index((cell,val)) > 0 else "83"}</v></c>', f'<c r="{cell}" t="s" s="2"><v>{val}</v></c>')

# Actually let me redo this more carefully - just fix by direct string replacement
# For header row 3, values were 83,84,85,86,87,88,89,90,91 and need to become 84,85,86,87,88,89,90,91,92
content = content.replace('<c r="C3" t="s" s="2"><v>83</v></c>', '<c r="C3" t="s" s="2"><v>84</v></c>')
content = content.replace('<c r="D3" t="s" s="2"><v>84</v></c>', '<c r="D3" t="s" s="2"><v>85</v></c>')
content = content.replace('<c r="E3" t="s" s="2"><v>85</v></c>', '<c r="E3" t="s" s="2"><v>86</v></c>')
content = content.replace('<c r="F3" t="s" s="2"><v>86</v></c>', '<c r="F3" t="s" s="2"><v>87</v></c>')
content = content.replace('<c r="G3" t="s" s="2"><v>87</v></c>', '<c r="G3" t="s" s="2"><v>88</v></c>')
content = content.replace('<c r="H3" t="s" s="2"><v>88</v></c>', '<c r="H3" t="s" s="2"><v>89</v></c>')
content = content.replace('<c r="I3" t="s" s="2"><v>89</v></c>', '<c r="I3" t="s" s="2"><v>90</v></c>')
content = content.replace('<c r="J3" t="s" s="2"><v>90</v></c>', '<c r="J3" t="s" s="2"><v>91</v></c>')
content = content.replace('<c r="K3" t="s" s="2"><v>91</v></c>', '<c r="K3" t="s" s="2"><v>92</v></c>')

# Fix data rows 4-13: B=83, C=84, D=85, E=86, F=87, G=88, H=89, I=90, J=91, K=92
# All B-K cells in data rows have value 71 which should be replaced per column
for row in range(4, 14):
    content = content.replace(f'<c r="B{row}" t="s" s="1"><v>71</v></c>', f'<c r="B{row}" t="s" s="1"><v>83</v></c>')
    content = content.replace(f'<c r="C{row}" t="s" s="1"><v>71</v></c>', f'<c r="C{row}" t="s" s="1"><v>84</v></c>')
    content = content.replace(f'<c r="D{row}" t="s" s="1"><v>71</v></c>', f'<c r="D{row}" t="s" s="1"><v>85</v></c>')
    content = content.replace(f'<c r="E{row}" t="s" s="1"><v>71</v></c>', f'<c r="E{row}" t="s" s="1"><v>86</v></c>')
    content = content.replace(f'<c r="F{row}" t="s" s="1"><v>71</v></c>', f'<c r="F{row}" t="s" s="1"><v>87</v></c>')
    content = content.replace(f'<c r="G{row}" t="s" s="1"><v>71</v></c>', f'<c r="G{row}" t="s" s="1"><v>88</v></c>')
    content = content.replace(f'<c r="H{row}" t="s" s="1"><v>71</v></c>', f'<c r="H{row}" t="s" s="1"><v>89</v></c>')
    content = content.replace(f'<c r="I{row}" t="s" s="1"><v>71</v></c>', f'<c r="I{row}" t="s" s="1"><v>90</v></c>')
    content = content.replace(f'<c r="J{row}" t="s" s="1"><v>71</v></c>', f'<c r="J{row}" t="s" s="1"><v>91</v></c>')
    content = content.replace(f'<c r="K{row}" t="s" s="1"><v>71</v></c>', f'<c r="K{row}" t="s" s="1"><v>92</v></c>')

with open(r'D:\CC\temp\xlsx_work_直播复盘\xl\worksheets\sheet2.xml', 'w', encoding='utf-8') as f:
    f.write(content)
print("sheet2.xml fixed")

# Fix sheet3.xml
with open(r'D:\CC\temp\xlsx_work_直播复盘\xl\worksheets\sheet3.xml', 'r', encoding='utf-8') as f:
    content = f.read()

# Row 1: title index 71 -> 93
content = content.replace('<c r="A1" t="s" s="2"><v>71</v></c>', '<c r="A1" t="s" s="2"><v>93</v></c>')
# Row 2: subtitle index 71 -> 81
content = content.replace('<c r="A2" t="s" s="0"><v>71</v></c>', '<c r="A2" t="s" s="0"><v>81</v></c>')

# Header row 3: A=94, B=95, C=96, D=97, E=98, F=99, G=100, H=101, I=102
# Currently has A=72, B=73, C=74, D=75, E=76, F=77, G=78, H=79, I=80
content = content.replace('<c r="A3" t="s" s="2"><v>72</v></c>', '<c r="A3" t="s" s="2"><v>94</v></c>')
content = content.replace('<c r="B3" t="s" s="2"><v>73</v></c>', '<c r="B3" t="s" s="2"><v>95</v></c>')
content = content.replace('<c r="C3" t="s" s="2"><v>74</v></c>', '<c r="C3" t="s" s="2"><v>96</v></c>')
content = content.replace('<c r="D3" t="s" s="2"><v>75</v></c>', '<c r="D3" t="s" s="2"><v>97</v></c>')
content = content.replace('<c r="E3" t="s" s="2"><v>76</v></c>', '<c r="E3" t="s" s="2"><v>98</v></c>')
content = content.replace('<c r="F3" t="s" s="2"><v>77</v></c>', '<c r="F3" t="s" s="2"><v>99</v></c>')
content = content.replace('<c r="G3" t="s" s="2"><v>78</v></c>', '<c r="G3" t="s" s="2"><v>100</v></c>')
content = content.replace('<c r="H3" t="s" s="2"><v>79</v></c>', '<c r="H3" t="s" s="2"><v>101</v></c>')
content = content.replace('<c r="I3" t="s" s="2"><v>80</v></c>', '<c r="I3" t="s" s="2"><v>102</v></c>')

# Data rows 4-13: A=84, B=85, C=106, D=107, E=108, F=109, G=110, H=111, I=112
# A and B columns already have values 84 and 85, C-I need fixing
for row in range(4, 14):
    content = content.replace(f'<c r="C{row}" t="s" s="1"><v></v></c>', f'<c r="C{row}" t="s" s="1"><v>106</v></c>')
    content = content.replace(f'<c r="D{row}" t="s" s="1"><v></v></c>', f'<c r="D{row}" t="s" s="1"><v>107</v></c>')
    content = content.replace(f'<c r="E{row}" t="s" s="1"><v></v></c>', f'<c r="E{row}" t="s" s="1"><v>108</v></c>')
    content = content.replace(f'<c r="F{row}" t="s" s="1"><v></v></c>', f'<c r="F{row}" t="s" s="1"><v>109</v></c>')
    content = content.replace(f'<c r="G{row}" t="s" s="1"><v></v></c>', f'<c r="G{row}" t="s" s="1"><v>110</v></c>')
    content = content.replace(f'<c r="H{row}" t="s" s="1"><v></v></c>', f'<c r="H{row}" t="s" s="1"><v>111</v></c>')
    content = content.replace(f'<c r="I{row}" t="s" s="1"><v></v></c>', f'<c r="I{row}" t="s" s="1"><v>112</v></c>')

with open(r'D:\CC\temp\xlsx_work_直播复盘\xl\worksheets\sheet3.xml', 'w', encoding='utf-8') as f:
    f.write(content)
print("sheet3.xml fixed")
print("All done!")
