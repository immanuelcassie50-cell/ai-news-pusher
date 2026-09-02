import re

# Fix sheet1.xml - wrong shared string indices in columns F,G,H for rows 4-9
with open(r'D:\CC\temp\xlsx_work_直播复盘\xl\worksheets\sheet1.xml', 'r', encoding='utf-8') as f:
    content = f.read()

# Row 4: F4=61->64, G4=61->65, H4=61->62
content = content.replace('<c r="F4" t="s" s="0"><v>61</v></c>', '<c r="F4" t="s" s="0"><v>64</v></c>')
content = content.replace('<c r="G4" t="s" s="0"><v>61</v></c>', '<c r="G4" t="s" s="0"><v>65</v></c>')
content = content.replace('<c r="H4" t="s" s="0"><v>61</v></c>', '<c r="H4" t="s" s="0"><v>62</v></c>')

# Row 5: F5=63->64, G5=61->65, H5=61->62
content = content.replace('<c r="F5" t="s" s="0"><v>63</v></c>', '<c r="F5" t="s" s="0"><v>64</v></c>')
content = content.replace('<c r="G5" t="s" s="0"><v>61</v></c>', '<c r="G5" t="s" s="0"><v>65</v></c>')
content = content.replace('<c r="H5" t="s" s="0"><v>61</v></c>', '<c r="H5" t="s" s="0"><v>62</v></c>')

# Row 6: F6=64->66, G6=61->65, H6=61->62
content = content.replace('<c r="F6" t="s" s="0"><v>64</v></c>', '<c r="F6" t="s" s="0"><v>66</v></c>')
content = content.replace('<c r="G6" t="s" s="0"><v>61</v></c>', '<c r="G6" t="s" s="0"><v>65</v></c>')
content = content.replace('<c r="H6" t="s" s="0"><v>61</v></c>', '<c r="H6" t="s" s="0"><v>62</v></c>')

# Row 7: F7=64->64 (already correct), G7=61->65, H7=61->62
content = content.replace('<c r="G7" t="s" s="0"><v>61</v></c>', '<c r="G7" t="s" s="0"><v>65</v></c>')
content = content.replace('<c r="H7" t="s" s="0"><v>61</v></c>', '<c r="H7" t="s" s="0"><v>62</v></c>')

# Row 8: F8=63->67, G8=61->65, H8=61->62
content = content.replace('<c r="F8" t="s" s="0"><v>63</v></c>', '<c r="F8" t="s" s="0"><v>67</v></c>')
content = content.replace('<c r="G8" t="s" s="0"><v>61</v></c>', '<c r="G8" t="s" s="0"><v>65</v></c>')
content = content.replace('<c r="H8" t="s" s="0"><v>61</v></c>', '<c r="H8" t="s" s="0"><v>62</v></c>')

# Row 9: F9=66->66 (correct), G9=61->65, H9=61->62
content = content.replace('<c r="G9" t="s" s="0"><v>61</v></c>', '<c r="G9" t="s" s="0"><v>65</v></c>')
content = content.replace('<c r="H9" t="s" s="0"><v>61</v></c>', '<c r="H9" t="s" s="0"><v>62</v></c>')

with open(r'D:\CC\temp\xlsx_work_直播复盘\xl\worksheets\sheet1.xml', 'w', encoding='utf-8') as f:
    f.write(content)

print("sheet1.xml fixed")

# Fix sheet2.xml
with open(r'D:\CC\temp\xlsx_work_直播复盘\xl\worksheets\sheet2.xml', 'r', encoding='utf-8') as f:
    content = f.read()

# Row 2: subtitle index 71 -> 81
content = content.replace('<c r="A2" t="s" s="0"><v>71</v></c>', '<c r="A2" t="s" s="0"><v>81</v></c>')

# Rows 4-13: B=83, C=84, D=85, E=86, F=87, G=88, H=89, I=90, J=91, K=92
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

# Row 3: B=95, C=96, D=97, E=98, F=99, G=100, H=101, I=102
content = content.replace('<c r="B3" t="s" s="2"><v>72</v></c>', '<c r="B3" t="s" s="2"><v>95</v></c>')
content = content.replace('<c r="C3" t="s" s="2"><v>73</v></c>', '<c r="C3" t="s" s="2"><v>96</v></c>')
content = content.replace('<c r="D3" t="s" s="2"><v>74</v></c>', '<c r="D3" t="s" s="2"><v>97</v></c>')
content = content.replace('<c r="E3" t="s" s="2"><v>75</v></c>', '<c r="E3" t="s" s="2"><v>98</v></c>')
content = content.replace('<c r="F3" t="s" s="2"><v>76</v></c>', '<c r="F3" t="s" s="2"><v>99</v></c>')
content = content.replace('<c r="G3" t="s" s="2"><v>77</v></c>', '<c r="G3" t="s" s="2"><v>100</v></c>')
content = content.replace('<c r="H3" t="s" s="2"><v>78</v></c>', '<c r="H3" t="s" s="2"><v>101</v></c>')
content = content.replace('<c r="I3" t="s" s="2"><v>79</v></c>', '<c r="I3" t="s" s="2"><v>102</v></c>')

# Rows 4-13: B=104, C=105, D=106, E=107, F=108, G=109, H=110, I=111
for row in range(4, 14):
    content = content.replace(f'<c r="B{row}" t="s" s="1"><v>84</v></c>', f'<c r="B{row}" t="s" s="1"><v>104</v></c>')
    content = content.replace(f'<c r="C{row}" t="s" s="1"><v>85</v></c>', f'<c r="C{row}" t="s" s="1"><v>105</v></c>')
    content = content.replace(f'<c r="D{row}" t="s" s="1"><v></v></c>', f'<c r="D{row}" t="s" s="1"><v>106</v></c>')
    content = content.replace(f'<c r="E{row}" t="s" s="1"><v></v></c>', f'<c r="E{row}" t="s" s="1"><v>107</v></c>')
    content = content.replace(f'<c r="F{row}" t="s" s="1"><v></v></c>', f'<c r="F{row}" t="s" s="1"><v>108</v></c>')
    content = content.replace(f'<c r="G{row}" t="s" s="1"><v></v></c>', f'<c r="G{row}" t="s" s="1"><v>109</v></c>')
    content = content.replace(f'<c r="H{row}" t="s" s="1"><v></v></c>', f'<c r="H{row}" t="s" s="1"><v>110</v></c>')
    content = content.replace(f'<c r="I{row}" t="s" s="1"><v></v></c>', f'<c r="I{row}" t="s" s="1"><v>111</v></c>')

with open(r'D:\CC\temp\xlsx_work_直播复盘\xl\worksheets\sheet3.xml', 'w', encoding='utf-8') as f:
    f.write(content)

print("sheet3.xml fixed")
print("All fixes complete!")
