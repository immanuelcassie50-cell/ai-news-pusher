#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import os

os.chdir('d:/CC/tmp_sales_xlsx/xl/worksheets')

# Sheet 2 - F1 客户画像分析卡
sheet2 = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <sheetViews><sheetView workbookViewId="0"/></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols>
    <col min="1" max="1" width="18" customWidth="1"/>
    <col min="2" max="2" width="20" customWidth="1"/>
    <col min="3" max="3" width="18" customWidth="1"/>
    <col min="4" max="4" width="20" customWidth="1"/>
    <col min="5" max="5" width="12" customWidth="1"/>
  </cols>
  <sheetData>
    <row r="1"><c r="A1" t="s" s="4"><v>38</v></c></row>
    <row r="2"><c r="A2" t="s" s="12"><v>39</v></c><c r="B2" t="s" s="1"><v>40</v></c><c r="C2" t="s" s="12"><v>41</v></c><c r="D2" t="s" s="1"><v>42</v></c></row>
    <row r="3"><c r="A3" t="s" s="12"><v>43</v></c><c r="B3" t="s" s="1"><v>44</v></c><c r="C3" t="s" s="12"><v>45</v></c><c r="D3" t="s" s="1"><v>46</v></c></row>
    <row r="4"><c r="A4" t="s" s="12"><v>47</v></c><c r="B4" t="s" s="1"><v>48</v></c><c r="C4" t="s" s="12"><v>49</v></c><c r="D4" t="s" s="1"><v>50</v></c></row>
    <row r="5"><c r="A5" t="s" s="12"><v>51</v></c><c r="B5" t="s" s="1"><v>52</v></c><c r="C5" t="s" s="12"><v>53</v></c><c r="D5" t="s" s="1"><v>54</v></c></row>
    <row r="7"><c r="A7" t="s" s="4"><v>55</v></c></row>
    <row r="8"><c r="A8" t="s" s="12"><v>56</v></c><c r="B8" t="s" s="1"><v>57</v></c><c r="C8" t="s" s="12"><v>58</v></c><c r="D8" t="s" s="1"><v>59</v></c><c r="E8" t="s" s="12"><v>60</v></c></row>
    <row r="9"><c r="A9" t="s" s="12"><v>61</v></c><c r="B9" t="s" s="1"><v>62</v></c><c r="C9" t="s" s="12"><v>63</v></c><c r="D9" t="s" s="1"><v>64</v></c><c r="E9" t="s" s="12"><v>65</v></c></row>
    <row r="11"><c r="A11" t="s" s="4"><v>66</v></c></row>
    <row r="12"><c r="A12" t="s" s="12"><v>67</v></c><c r="B12" t="s" s="1"><v>68</v></c><c r="C12" t="s" s="12"><v>69</v></c><c r="D12" t="s" s="1"><v>70</v></c><c r="E12" t="s" s="12"><v>71</v></c></row>
    <row r="13"><c r="A13" t="s" s="12"><v>72</v></c><c r="B13" t="s" s="1"><v>73</v></c><c r="C13" t="s" s="12"><v>74</v></c><c r="D13" t="s" s="1"><v>75</v></c><c r="E13" t="s" s="12"><v>76</v></c></row>
    <row r="14"><c r="A14" t="s" s="12"><v>77</v></c><c r="B14" t="s" s="1"><v>78</v></c><c r="C14" t="s" s="12"><v>79</v></c><c r="D14" t="s" s="1"><v>80</v></c><c r="E14" t="s" s="12"><v>81</v></c></row>
    <row r="16"><c r="A16" t="s" s="4"><v>82</v></c></row>
    <row r="17"><c r="A17" t="s" s="12"><v>83</v></c><c r="B17" t="s" s="1"><v>84</v></c></row>
    <row r="18"><c r="A18" t="s" s="12"><v>85</v></c><c r="B18" t="s" s="1"><v>86</v></c></row>
    <row r="19"><c r="A19" t="s" s="12"><v>87</v></c><c r="B19" t="s" s="1"><v>88</v></c></row>
    <row r="20"><c r="A20" t="s" s="12"><v>89</v></c><c r="B20" t="s" s="1"><v>90</v></c></row>
    <row r="21"><c r="A21" t="s" s="12"><v>91</v></c><c r="B21" t="s" s="1"><v>92</v></c></row>
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75"/>
</worksheet>'''

with open('sheet2.xml', 'w', encoding='utf-8') as f:
    f.write(sheet2)

# Sheet 3 - F2 决策链与关键人分析表
sheet3 = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <sheetViews><sheetView workbookViewId="0"/></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols>
    <col min="1" max="1" width="18" customWidth="1"/>
    <col min="2" max="2" width="15" customWidth="1"/>
    <col min="3" max="3" width="15" customWidth="1"/>
    <col min="4" max="4" width="20" customWidth="1"/>
    <col min="5" max="5" width="12" customWidth="1"/>
  </cols>
  <sheetData>
    <row r="1"><c r="A1" t="s" s="4"><v>93</v></c></row>
    <row r="2"><c r="A2" t="s" s="12"><v>94</v></c><c r="B2" t="s" s="1"><v>95</v></c><c r="C2" t="s" s="12"><v>96</v></c><c r="D2" t="s" s="1"><v>97</v></c></row>
    <row r="3"><c r="A3" t="s" s="12"><v>98</v></c><c r="B3" t="s" s="1"><v>99</v></c><c r="C3" t="s" s="12"><v>100</v></c><c r="D3" t="s" s="1"><v>101</v></c></row>
    <row r="5"><c r="A5" t="s" s="4"><v>102</v></c></row>
    <row r="6"><c r="A6" t="s" s="12"><v>103</v></c><c r="B6" t="s" s="1"><v>104</v></c><c r="C6" t="s" s="12"><v>105</v></c><c r="D6" t="s" s="1"><v>106</v></c><c r="E6" t="s" s="12"><v>107</v></c></row>
    <row r="7"><c r="A7" t="s" s="12"><v>108</v></c><c r="B7" t="s" s="1"><v>109</v></c><c r="C7" t="s" s="12"><v>110</v></c><c r="D7" t="s" s="1"><v>111</v></c><c r="E7" t="s" s="12"><v>112</v></c></row>
    <row r="8"><c r="A8" t="s" s="12"><v>113</v></c><c r="B8" t="s" s="1"><v>114</v></c><c r="C8" t="s" s="12"><v>115</v></c><c r="D8" t="s" s="1"><v>116</v></c><c r="E8" t="s" s="12"><v>117</v></c></row>
    <row r="10"><c r="A10" t="s" s="4"><v>118</v></c></row>
    <row r="11"><c r="A11" t="s" s="12"><v>119</v></c><c r="B11" t="s" s="1"><v>120</v></c></row>
    <row r="12"><c r="A12" t="s" s="12"><v>121</v></c><c r="B12" t="s" s="1"><v>122</v></c></row>
    <row r="13"><c r="A13" t="s" s="12"><v>123</v></c><c r="B13" t="s" s="1"><v>124</v></c></row>
    <row r="14"><c r="A14" t="s" s="12"><v>125</v></c><c r="B14" t="s" s="1"><v>126</v></c></row>
    <row r="16"><c r="A16" t="s" s="4"><v>127</v></c></row>
    <row r="17"><c r="A17" t="s" s="12"><v>128</v></c><c r="B17" t="s" s="1"><v>129</v></c></row>
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75"/>
</worksheet>'''

with open('sheet3.xml', 'w', encoding='utf-8') as f:
    f.write(sheet3)

# Sheet 4 - F3 需求挖掘SPIN
sheet4 = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <sheetViews><sheetView workbookViewId="0"/></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols>
    <col min="1" max="1" width="20" customWidth="1"/>
    <col min="2" max="2" width="45" customWidth="1"/>
    <col min="3" max="3" width="20" customWidth="1"/>
  </cols>
  <sheetData>
    <row r="1"><c r="A1" t="s" s="4"><v>130</v></c></row>
    <row r="2"><c r="A2" t="s" s="4"><v>131</v></c></row>
    <row r="3"><c r="A3" t="s" s="12"><v>132</v></c><c r="B3" t="s" s="1"><v>133</v></c></row>
    <row r="4"><c r="A4" t="s" s="12"><v>134</v></c><c r="B4" t="s" s="1"><v>135</v></c></row>
    <row r="5"><c r="A5" t="s" s="12"><v>136</v></c><c r="B5" t="s" s="1"><v>137</v></c></row>
    <row r="6"><c r="A6" t="s" s="12"><v>138</v></c><c r="B6" t="s" s="1"><v>139</v></c></row>
    <row r="8"><c r="A8" t="s" s="4"><v>140</v></c></row>
    <row r="9"><c r="A9" t="s" s="12"><v>141</v></c><c r="B9" t="s" s="1"><v>142</v></c></row>
    <row r="10"><c r="A10" t="s" s="12"><v>143</v></c><c r="B10" t="s" s="1"><v>144</v></c></row>
    <row r="11"><c r="A11" t="s" s="12"><v>145</v></c><c r="B11" t="s" s="1"><v>146</v></c></row>
    <row r="12"><c r="A12" t="s" s="12"><v>147</v></c><c r="B12" t="s" s="1"><v>148</v></c></row>
    <row r="14"><c r="A14" t="s" s="4"><v>149</v></c></row>
    <row r="15"><c r="A15" t="s" s="12"><v>150</v></c><c r="B15" t="s" s="1"><v>151</v></c><c r="C15" t="s" s="12"><v>152</v></c></row>
    <row r="16"><c r="A16" t="s" s="12"><v>153</v></c><c r="B16" t="s" s="1"><v>154</v></c><c r="C16" t="s" s="12"><v>155</v></c></row>
    <row r="17"><c r="A17" t="s" s="12"><v>156</v></c><c r="B17" t="s" s="1"><v>157</v></c><c r="C17" t="s" s="12"><v>158</v></c></row>
    <row r="19"><c r="A19" t="s" s="4"><v>159</v></c></row>
    <row r="20"><c r="A20" t="s" s="12"><v>160</v></c><c r="B20" t="s" s="1"><v>161</v></c></row>
    <row r="21"><c r="A21" t="s" s="12"><v>162</v></c><c r="B21" t="s" s="1"><v>163</v></c></row>
    <row r="23"><c r="A23" t="s" s="4"><v>164</v></c></row>
    <row r="24"><c r="A24" t="s" s="12"><v>165</v></c><c r="B24" t="s" s="1"><v>166</v></c></row>
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75"/>
</worksheet>'''

with open('sheet4.xml', 'w', encoding='utf-8') as f:
    f.write(sheet4)

# Sheet 5 - F4 价值呈现FABE
sheet5 = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <sheetViews><sheetView workbookViewId="0"/></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols>
    <col min="1" max="1" width="20" customWidth="1"/>
    <col min="2" max="2" width="40" customWidth="1"/>
  </cols>
  <sheetData>
    <row r="1"><c r="A1" t="s" s="4"><v>167</v></c></row>
    <row r="2"><c r="A2" t="s" s="4"><v>168</v></c></row>
    <row r="3"><c r="A3" t="s" s="12"><v>169</v></c><c r="B3" t="s" s="1"><v>170</v></c></row>
    <row r="4"><c r="A4" t="s" s="12"><v>171</v></c><c r="B4" t="s" s="1"><v>172</v></c></row>
    <row r="5"><c r="A5" t="s" s="12"><v>173</v></c><c r="B5" t="s" s="1"><v>174</v></c></row>
    <row r="7"><c r="A7" t="s" s="4"><v>175</v></c></row>
    <row r="8"><c r="A8" t="s" s="12"><v>176</v></c><c r="B8" t="s" s="1"><v>177</v></c></row>
    <row r="9"><c r="A9" t="s" s="12"><v>178</v></c><c r="B9" t="s" s="1"><v>179</v></c></row>
    <row r="10"><c r="A10" t="s" s="12"><v>180</v></c><c r="B10" t="s" s="1"><v>181</v></c></row>
    <row r="12"><c r="A12" t="s" s="4"><v>182</v></c></row>
    <row r="13"><c r="A13" t="s" s="12"><v>183</v></c><c r="B13" t="s" s="1"><v>184</v></c></row>
    <row r="14"><c r="A14" t="s" s="12"><v>185</v></c><c r="B14" t="s" s="1"><v>186</v></c></row>
    <row r="15"><c r="A15" t="s" s="12"><v>187</v></c><c r="B15" t="s" s="1"><v>188</v></c></row>
    <row r="17"><c r="A17" t="s" s="4"><v>189</v></c></row>
    <row r="18"><c r="A18" t="s" s="12"><v>190</v></c><c r="B18" t="s" s="1"><v>191</v></c></row>
    <row r="19"><c r="A19" t="s" s="12"><v>192</v></c><c r="B19" t="s" s="1"><v>193</v></c></row>
    <row r="20"><c r="A20" t="s" s="12"><v>194</v></c><c r="B20" t="s" s="1"><v>195</v></c></row>
    <row r="22"><c r="A22" t="s" s="4"><v>196</v></c></row>
    <row r="23"><c r="A23" t="s" s="12"><v>197</v></c><c r="B23" t="s" s="1"><v>198</v></c></row>
    <row r="25"><c r="A25" t="s" s="4"><v>199</v></c></row>
    <row r="26"><c r="A26" t="s" s="12"><v>200</v></c><c r="B26" t="s" s="1"><v>201</v></c></row>
    <row r="27"><c r="A27" t="s" s="12"><v>202</v></c><c r="B27" t="s" s="1"><v>203</v></c></row>
    <row r="28"><c r="A28" t="s" s="12"><v>204</v></c><c r="B28" t="s" s="1"><v>205</v></c></row>
    <row r="29"><c r="A29" t="s" s="12"><v>206</v></c><c r="B29" t="s" s="1"><v>207</v></c></row>
  </sheetData>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75"/>
</worksheet>'''

with open('sheet5.xml', 'w', encoding='utf-8') as f:
    f.write(sheet5)

print("Sheets 2-5 created")
