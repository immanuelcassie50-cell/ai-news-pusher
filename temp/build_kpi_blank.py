#!/usr/bin/env python3
"""Build all KPI Excel files from scratch."""
import os
import shutil

BASE = 'D:/CC/temp/kpi_rebuild/'

# ======= Build sharedStrings for BLANK version =======
ss_blank = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="78" uniqueCount="78">
  <si><t>供应链KPI新逻辑 配套练习表单 — 空白版</t></si>
  <si><t>工具一</t></si>
  <si><t>维度</t></si>
  <si><t>评估要素</t></si>
  <si><t>具体指标</t></si>
  <si><t>指标说明</t></si>
  <si><t>重要性（1-5）</t></si>
  <si><t>AI可替代度（1-5）</t></si>
  <si><t>人工解读价值（1-5）</t></si>
  <si><t>综合评分</t></si>
  <si><t>最终决策</t></si>
  <si><t>财务维度</t></si>
  <si><t>库存周转率</t></si>
  <si><t>库存占用的资金周转效率</t></si>
  <si><t>订单履行率</t></si>
  <si><t>客户需求满足比例</t></si>
  <si><t>毛利率</t></si>
  <si><t>盈利能力</t></si>
  <si><t>客户维度</t></si>
  <si><t>准时交货率</t></si>
  <si><t>承诺时间内送达比例</t></si>
  <si><t>客户满意度</t></si>
  <si><t>客户对服务的综合评价</t></si>
  <si><t>客户投诉率</t></si>
  <si><t>客户投诉次数/总订单</t></si>
  <si><t>内部流程维度</t></si>
  <si><t>订单处理时间</t></si>
  <si><t>从接单到发货的平均时长</t></si>
  <si><t>采购周期</t></si>
  <si><t>从采购申请到到货的平均天数</t></si>
  <si><t>供应商准时交货率</t></si>
  <si><t>供应商承诺时间内到货比例</t></si>
  <si><t>学习与成长维度</t></si>
  <si><t>员工培训完成率</t></si>
  <si><t>培训计划完成比例</t></si>
  <si><t>流程优化提案数</t></si>
  <si><t>持续改进建议数量</t></si>
  <si><t>数字化工具使用率</t></si>
  <si><t>员工使用数字化工具的频率</t></si>
  <si><t>风险维度</t></si>
  <si><t>供应商集中度</t></si>
  <si><t>单一供应商采购占比</t></si>
  <si><t>紧急采购占比</t></si>
  <si><t>非计划采购占总采购比例</t></si>
  <si><t>安全库存达成率</t></si>
  <si><t>实际库存与安全库存的符合度</t></si>
  <si><t>保留/委托AI/重点关注</t></si>
  <si><t>工具二</t></si>
  <si><t>检查项目</t></si>
  <si><t>检查结果</t></si>
  <si><t>备注/人工判断</t></si>
  <si><t>数据来源核实</t></si>
  <si><t>数据是否来自可信渠道</t></si>
  <si><t>计算口径确认</t></si>
  <si><t>指标定义是否与内部标准一致</t></si>
  <si><t>时间范围合理性</t></si>
  <si><t>是否覆盖完整周期</t></si>
  <si><t>异常值识别</t></si>
  <si><t>是否存在明显异常数据点</t></si>
  <si><t>趋势合理性</t></si>
  <si><t>变化趋势是否符合业务逻辑</t></si>
  <si><t>对比基准明确</t></si>
  <si><t>是否与正确的对标对象比较</t></si>
  <si><t>业务关联性</t></si>
  <si><t>数据变化是否有可解释的业务原因</t></si>
  <si><t>战略性信号</t></si>
  <si><t>是否包含需要战略关注的信号</t></si>
  <si><t>综合判断</t></si>
  <si><t>可信/需核实/可疑</t></si>
  <si><t>工具三</t></si>
  <si><t>指标名称</t></si>
  <si><t>当前值</t></si>
  <si><t>目标值</t></si>
  <si><t>差距</t></si>
  <si><t>战略意义</t></si>
  <si><t>人工解读要点</t></si>
  <si><t>趋势</t></si>
  <si><t>上升/下降/持平</t></si>
  <si><t>工具四</t></si>
  <si><t>例外事件</t></si>
  <si><t>发现时间</t></si>
  <si><t>类型</t></si>
  <si><t>影响程度</t></si>
  <si><t>责任人</t></si>
  <si><t>处理状态</t></si>
  <si><t>已识别/分析中/已处理</t></si>
  <si><t>工具五</t></si>
  <si><t>仪表盘模块</t></si>
  <si><t>展示指标</t></si>
  <si><t>刷新频率</t></si>
  <si><t>可视化形式</t></si>
  <si><t>图表/数据表</t></si>
  <si><t>维度权重说明：财务(30%)、客户(25%)、内部流程(20%)、学习成长(10%)、风险(15%)</t></si>
  <si><t>=B*C*D 综合评分公式示例</t></si>
</sst>'''

# Sheet 1 - KPI五维筛选矩阵 (blank)
sheet1_blank = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <sheetPr><tabColor rgb="001B4F9B"/><outlinePr summaryBelow="1" summaryRight="1"/><pageSetUpPr/></sheetPr>
  <dimension ref="A1:I20"/>
  <sheetViews><sheetView workbookViewId="0"><selection activeCell="A1" sqref="A1"/></sheetView></sheetViews>
  <sheetFormatPr baseColWidth="8" defaultRowHeight="15"/>
  <cols>
    <col width="4" customWidth="1" min="1" max="1"/>
    <col width="16" customWidth="1" min="2" max="2"/>
    <col width="28" customWidth="1" min="3" max="3"/>
    <col width="36" customWidth="1" min="4" max="4"/>
    <col width="14" customWidth="1" min="5" max="5"/>
    <col width="18" customWidth="1" min="6" max="6"/>
    <col width="18" customWidth="1" min="7" max="7"/>
    <col width="16" customWidth="1" min="8" max="8"/>
    <col width="20" customWidth="1" min="9" max="9"/>
  </cols>
  <sheetData>
    <row r="1" ht="36" customHeight="1"><c r="A1" s="12" t="s"><v>0</v></c></row>
    <row r="2" ht="18" customHeight="1"><c r="A2" s="1" t="s"><v>1</v></c></row>
    <row r="3" ht="26" customHeight="1">
      <c r="A3" s="4" t="s"><v>2</v></c><c r="B3" s="4" t="s"><v>3</v></c><c r="C3" s="4" t="s"><v>4</v></c>
      <c r="D3" s="4" t="s"><v>5</v></c><c r="E3" s="4" t="s"><v>6</v></c><c r="F3" s="4" t="s"><v>7</v></c>
      <c r="G3" s="4" t="s"><v>8</v></c><c r="H3" s="4" t="s"><v>9</v></c><c r="I3" s="4" t="s"><v>10</v></c>
    </row>
    <row r="4" ht="22" customHeight="1"><c r="A4" s="2" t="s"><v>11</v></c><c r="B4" s="3" t="s"><v>12</v></c><c r="C4" s="3" t="s"><v>13</v></c><c r="D4" t="s"><v></v></c><c r="E4" s="5"><v></v></c><c r="F4" s="5"><v></v></c><c r="G4" s="5"><v></v></c><c r="H4" s="6"><f>E4*F4*G4</f><v></v></c><c r="I4" s="5" t="s"><v>40</v></c></row>
    <row r="5" ht="22" customHeight="1"><c r="A5" s="2" t="s"><v>11</v></c><c r="B5" s="3" t="s"><v>12</v></c><c r="C5" s="3" t="s"><v>14</v></c><c r="D5" t="s"><v></v></c><c r="E5" s="5"><v></v></c><c r="F5" s="5"><v></v></c><c r="G5" s="5"><v></v></c><c r="H5" s="6"><f>E5*F5*G5</f><v></v></c><c r="I5" s="5" t="s"><v>40</v></c></row>
    <row r="6" ht="22" customHeight="1"><c r="A6" s="2" t="s"><v>11</v></c><c r="B6" s="3" t="s"><v>12</v></c><c r="C6" s="3" t="s"><v>15</v></c><c r="D6" t="s"><v></v></c><c r="E6" s="5"><v></v></c><c r="F6" s="5"><v></v></c><c r="G6" s="5"><v></v></c><c r="H6" s="6"><f>E6*F6*G6</f><v></v></c><c r="I6" s="5" t="s"><v>40</v></c></row>
    <row r="7" ht="22" customHeight="1"><c r="A7" s="2" t="s"><v>16</v></c><c r="B7" s="3" t="s"><v>17</v></c><c r="C7" s="3" t="s"><v>18</v></c><c r="D7" t="s"><v></v></c><c r="E7" s="5"><v></v></c><c r="F7" s="5"><v></v></c><c r="G7" s="5"><v></v></c><c r="H7" s="6"><f>E7*F7*G7</f><v></v></c><c r="I7" s="5" t="s"><v>40</v></c></row>
    <row r="8" ht="22" customHeight="1"><c r="A8" s="2" t="s"><v>16</v></c><c r="B8" s="3" t="s"><v>17</v></c><c r="C8" s="3" t="s"><v>19</v></c><c r="D8" t="s"><v></v></c><c r="E8" s="5"><v></v></c><c r="F8" s="5"><v></v></c><c r="G8" s="5"><v></v></c><c r="H8" s="6"><f>E8*F8*G8</f><v></v></c><c r="I8" s="5" t="s"><v>40</v></c></row>
    <row r="9" ht="22" customHeight="1"><c r="A9" s="2" t="s"><v>16</v></c><c r="B9" s="3" t="s"><v>17</v></c><c r="C9" s="3" t="s"><v>20</v></c><c r="D9" t="s"><v></v></c><c r="E9" s="5"><v></v></c><c r="F9" s="5"><v></v></c><c r="G9" s="5"><v></v></c><c r="H9" s="6"><f>E9*F9*G9</f><v></v></c><c r="I9" s="5" t="s"><v>40</v></c></row>
    <row r="10" ht="22" customHeight="1"><c r="A10" s="2" t="s"><v>21</v></c><c r="B10" s="3" t="s"><v>22</v></c><c r="C10" s="3" t="s"><v>23</v></c><c r="D10" t="s"><v></v></c><c r="E10" s="5"><v></v></c><c r="F10" s="5"><v></v></c><c r="G10" s="5"><v></v></c><c r="H10" s="6"><f>E10*F10*G10</f><v></v></c><c r="I10" s="5" t="s"><v>40</v></c></row>
    <row r="11" ht="22" customHeight="1"><c r="A11" s="2" t="s"><v>21</v></c><c r="B11" s="3" t="s"><v>22</v></c><c r="C11" s="3" t="s"><v>24</v></c><c r="D11" t="s"><v></v></c><c r="E11" s="5"><v></v></c><c r="F11" s="5"><v></v></c><c r="G11" s="5"><v></v></c><c r="H11" s="6"><f>E11*F11*G11</f><v></v></c><c r="I11" s="5" t="s"><v>40</v></c></row>
    <row r="12" ht="22" customHeight="1"><c r="A12" s="2" t="s"><v>21</v></c><c r="B12" s="3" t="s"><v>22</v></c><c r="C12" s="3" t="s"><v>25</v></c><c r="D12" t="s"><v></v></c><c r="E12" s="5"><v></v></c><c r="F12" s="5"><v></v></c><c r="G12" s="5"><v></v></c><c r="H12" s="6"><f>E12*F12*G12</f><v></v></c><c r="I12" s="5" t="s"><v>40</v></c></row>
    <row r="13" ht="22" customHeight="1"><c r="A13" s="2" t="s"><v>26</v></c><c r="B13" s="3" t="s"><v>27</v></c><c r="C13" s="3" t="s"><v>28</v></c><c r="D13" t="s"><v></v></c><c r="E13" s="5"><v></v></c><c r="F13" s="5"><v></v></c><c r="G13" s="5"><v></v></c><c r="H13" s="6"><f>E13*F13*G13</f><v></v></c><c r="I13" s="5" t="s"><v>40</v></c></row>
    <row r="14" ht="22" customHeight="1"><c r="A14" s="2" t="s"><v>26</v></c><c r="B14" s="3" t="s"><v>27</v></c><c r="C14" s="3" t="s"><v>29</v></c><c r="D14" t="s"><v></v></c><c r="E14" s="5"><v></v></c><c r="F14" s="5"><v></v></c><c r="G14" s="5"><v></v></c><c r="H14" s="6"><f>E14*F14*G14</f><v></v></c><c r="I14" s="5" t="s"><v>40</v></c></row>
    <row r="15" ht="22" customHeight="1"><c r="A15" s="2" t="s"><v>26</v></c><c r="B15" s="3" t="s"><v>27</v></c><c r="C15" s="3" t="s"><v>30</v></c><c r="D15" t="s"><v></v></c><c r="E15" s="5"><v></v></c><c r="F15" s="5"><v></v></c><c r="G15" s="5"><v></v></c><c r="H15" s="6"><f>E15*F15*G15</f><v></v></c><c r="I15" s="5" t="s"><v>40</v></c></row>
    <row r="16" ht="22" customHeight="1"><c r="A16" s="2" t="s"><v>31</v></c><c r="B16" s="3" t="s"><v>32</v></c><c r="C16" s="3" t="s"><v>33</v></c><c r="D16" t="s"><v></v></c><c r="E16" s="5"><v></v></c><c r="F16" s="5"><v></v></c><c r="G16" s="5"><v></v></c><c r="H16" s="6"><f>E16*F16*G16</f><v></v></c><c r="I16" s="5" t="s"><v>40</v></c></row>
    <row r="17" ht="22" customHeight="1"><c r="A17" s="2" t="s"><v>31</v></c><c r="B17" s="3" t="s"><v>32</v></c><c r="C17" s="3" t="s"><v>34</v></c><c r="D17" t="s"><v></v></c><c r="E17" s="5"><v></v></c><c r="F17" s="5"><v></v></c><c r="G17" s="5"><v></v></c><c r="H17" s="6"><f>E17*F17*G17</f><v></v></c><c r="I17" s="5" t="s"><v>40</v></c></row>
    <row r="18" ht="22" customHeight="1"><c r="A18" s="2" t="s"><v>31</v></c><c r="B18" s="3" t="s"><v>32</v></c><c r="C18" s="3" t="s"><v>35</v></c><c r="D18" t="s"><v></v></c><c r="E18" s="5"><v></v></c><c r="F18" s="5"><v></v></c><c r="G18" s="5"><v></v></c><c r="H18" s="6"><f>E18*F18*G18</f><v></v></c><c r="I18" s="5" t="s"><v>40</v></c></row>
    <row r="19" ht="18" customHeight="1"><c r="A19" s="1" t="s"><v>76</v></c></row>
    <row r="20" ht="26" customHeight="1"><c r="A20" s="4" t="s"><v>77</v></c></row>
  </sheetData>
</worksheet>'''

# Sheet 2 - AI报告解读检查表 (blank)
sheet2_blank = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <sheetPr><tabColor rgb="002E75B6"/><outlinePr summaryBelow="1" summaryRight="1"/><pageSetUpPr/></sheetPr>
  <dimension ref="A1:D14"/>
  <sheetViews><sheetView workbookViewId="0"><selection activeCell="A1" sqref="A1"/></sheetView></sheetViews>
  <sheetFormatPr baseColWidth="8" defaultRowHeight="15"/>
  <cols><col width="4" customWidth="1" min="1" max="1"/><col width="32" customWidth="1" min="2" max="2"/><col width="20" customWidth="1" min="3" max="3"/><col width="36" customWidth="1" min="4" max="4"/></cols>
  <sheetData>
    <row r="1" ht="36" customHeight="1"><c r="A1" s="12" t="s"><v>41</v></c></row>
    <row r="2" ht="18" customHeight="1"><c r="A2" s="1" t="s"><v>42</v></c></row>
    <row r="3" ht="28" customHeight="1"><c r="A3" s="4" t="s"><v>43</v></c><c r="B3" s="4" t="s"><v>44</v></c><c r="C3" s="4" t="s"><v>45</v></c><c r="D3" s="4" t="s"><v>46</v></c></row>
    <row r="4" ht="24" customHeight="1"><c r="A4" s="3" t="s"><v>47</v></c><c r="B4" t="s"><v></v></c><c r="C4" s="5" t="s"><v>61</v></c><c r="D4" t="s"><v></v></c></row>
    <row r="5" ht="24" customHeight="1"><c r="A5" s="3" t="s"><v>48</v></c><c r="B5" t="s"><v></v></c><c r="C5" s="5" t="s"><v>61</v></c><c r="D5" t="s"><v></v></c></row>
    <row r="6" ht="24" customHeight="1"><c r="A6" s="3" t="s"><v>49</v></c><c r="B6" t="s"><v></v></c><c r="C6" s="5" t="s"><v>61</v></c><c r="D6" t="s"><v></v></c></row>
    <row r="7" ht="24" customHeight="1"><c r="A7" s="3" t="s"><v>50</v></c><c r="B7" t="s"><v></v></c><c r="C7" s="5" t="s"><v>61</v></c><c r="D7" t="s"><v></v></c></row>
    <row r="8" ht="24" customHeight="1"><c r="A8" s="3" t="s"><v>51</v></c><c r="B8" t="s"><v></v></c><c r="C8" s="5" t="s"><v>61</v></c><c r="D8" t="s"><v></v></c></row>
    <row r="9" ht="24" customHeight="1"><c r="A9" s="3" t="s"><v>52</v></c><c r="B9" t="s"><v></v></c><c r="C9" s="5" t="s"><v>61</v></c><c r="D9" t="s"><v></v></c></row>
    <row r="10" ht="24" customHeight="1"><c r="A10" s="3" t="s"><v>53</v></c><c r="B10" t="s"><v></v></c><c r="C10" s="5" t="s"><v>61</v></c><c r="D10" t="s"><v></v></c></row>
    <row r="11" ht="24" customHeight="1"><c r="A11" s="3" t="s"><v>54</v></c><c r="B11" t="s"><v></v></c><c r="C11" s="5" t="s"><v>61</v></c><c r="D11" t="s"><v></v></c></row>
    <row r="12" ht="24" customHeight="1"><c r="A12" s="3" t="s"><v>55</v></c><c r="B12" t="s"><v></v></c><c r="C12" s="5" t="s"><v>61</v></c><c r="D12" t="s"><v></v></c></row>
    <row r="13" ht="24" customHeight="1"><c r="A13" s="3" t="s"><v>56</v></c><c r="B13" t="s"><v></v></c><c r="C13" s="5" t="s"><v>61</v></c><c r="D13" t="s"><v></v></c></row>
    <row r="14" ht="28" customHeight="1"><c r="A14" s="4" t="s"><v>57</v></c><c r="B14" s="5" t="s"><v>61</v></c><c r="D14" t="s"><v></v></c></row>
  </sheetData>
</worksheet>'''

# Sheet 3 - 战略穿透指标卡 (blank)
sheet3_blank = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <sheetPr><tabColor rgb="00375623"/><outlinePr summaryBelow="1" summaryRight="1"/><pageSetUpPr/></sheetPr>
  <dimension ref="A1:G12"/>
  <sheetViews><sheetView workbookViewId="0"><selection activeCell="A1" sqref="A1"/></sheetView></sheetViews>
  <sheetFormatPr baseColWidth="8" defaultRowHeight="15"/>
  <cols><col width="4" customWidth="1" min="1" max="1"/><col width="20" customWidth="1" min="2" max="2"/><col width="14" customWidth="1" min="3" max="3"/><col width="14" customWidth="1" min="4" max="4"/><col width="14" customWidth="1" min="5" max="5"/><col width="28" customWidth="1" min="6" max="6"/><col width="24" customWidth="1" min="7" max="7"/></cols>
  <sheetData>
    <row r="1" ht="36" customHeight="1"><c r="A1" s="12" t="s"><v>62</v></c></row>
    <row r="2" ht="18" customHeight="1"><c r="A2" s="1" t="s"><v>42</v></c></row>
    <row r="3" ht="28" customHeight="1"><c r="A3" s="4" t="s"><v>63</v></c><c r="B3" s="4" t="s"><v>64</v></c><c r="C3" s="4" t="s"><v>65</v></c><c r="D3" s="4" t="s"><v>66</v></c><c r="E3" s="4" t="s"><v>67</v></c><c r="F3" s="4" t="s"><v>68</v></c><c r="G3" s="4" t="s"><v>69</v></c></row>
    <row r="4" ht="24" customHeight="1"><c r="A4" t="s"><v></v></c><c r="B4" s="3" t="s"><v>12</v></c><c r="C4" s="5"><v></v></c><c r="D4" s="5"><v></v></c><c r="E4" s="6"><f>C4-D4</f><v></v></c><c r="F4" t="s"><v></v></c><c r="G4" t="s"><v></v></c></row>
    <row r="5" ht="24" customHeight="1"><c r="A5" t="s"><v></v></c><c r="B5" s="3" t="s"><v>14</v></c><c r="C5" s="5"><v></v></c><c r="D5" s="5"><v></v></c><c r="E5" s="6"><f>C5-D5</f><v></v></c><c r="F5" t="s"><v></v></c><c r="G5" t="s"><v></v></c></row>
    <row r="6" ht="24" customHeight="1"><c r="A6" t="s"><v></v></c><c r="B6" s="3" t="s"><v>19</v></c><c r="C6" s="5"><v></v></c><c r="D6" s="5"><v></v></c><c r="E6" s="6"><f>C6-D6</f><v></v></c><c r="F6" t="s"><v></v></c><c r="G6" t="s"><v></v></c></row>
    <row r="7" ht="24" customHeight="1"><c r="A7" t="s"><v></v></c><c r="B7" s="3" t="s"><v>20</v></c><c r="C7" s="5"><v></v></c><c r="D7" s="5"><v></v></c><c r="E7" s="6"><f>C7-D7</f><v></v></c><c r="F7" t="s"><v></v></c><c r="G7" t="s"><v></v></c></row>
    <row r="8" ht="24" customHeight="1"><c r="A8" t="s"><v></v></c><c r="B8" s="3" t="s"><v>24</v></c><c r="C8" s="5"><v></v></c><c r="D8" s="5"><v></v></c><c r="E8" s="6"><f>C8-D8</f><v></v></c><c r="F8" t="s"><v></v></c><c r="G8" t="s"><v></v></c></row>
    <row r="9" ht="24" customHeight="1"><c r="A9" t="s"><v></v></c><c r="B9" s="3" t="s"><v>29</v></c><c r="C9" s="5"><v></v></c><c r="D9" s="5"><v></v></c><c r="E9" s="6"><f>C9-D9</f><v></v></c><c r="F9" t="s"><v></v></c><c r="G9" t="s"><v></v></c></row>
    <row r="10" ht="24" customHeight="1"><c r="A10" t="s"><v></v></c><c r="B10" s="3" t="s"><v>34</v></c><c r="C10" s="5"><v></v></c><c r="D10" s="5"><v></v></c><c r="E10" s="6"><f>C10-D10</f><v></v></c><c r="F10" t="s"><v></v></c><c r="G10" t="s"><v></v></c></row>
    <row r="11" ht="24" customHeight="1"><c r="A11" t="s"><v></v></c><c r="B11" s="3" t="s"><v>35</v></c><c r="C11" s="5"><v></v></c><c r="D11" s="5"><v></v></c><c r="E11" s="6"><f>C11-D11</f><v></v></c><c r="F11" t="s"><v></v></c><c r="G11" t="s"><v></v></c></row>
    <row r="12" ht="24" customHeight="1"><c r="A12" t="s"><v></v></c><c r="B12" s="3" t="s"><v>36</v></c><c r="C12" s="5"><v></v></c><c r="D12" s="5"><v></v></c><c r="E12" s="6"><f>C12-D12</f><v></v></c><c r="F12" t="s"><v></v></c><c r="G12" t="s"><v></v></c></row>
  </sheetData>
</worksheet>'''

# Sheet 4 - 例外信号捕捉追踪 (blank)
sheet4_blank = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <sheetPr><tabColor rgb="00C55A11"/><outlinePr summaryBelow="1" summaryRight="1"/><pageSetUpPr/></sheetPr>
  <dimension ref="A1:G10"/>
  <sheetViews><sheetView workbookViewId="0"><selection activeCell="A1" sqref="A1"/></sheetView></sheetViews>
  <sheetFormatPr baseColWidth="8" defaultRowHeight="15"/>
  <cols><col width="4" customWidth="1" min="1" max="1"/><col width="28" customWidth="1" min="2" max="2"/><col width="16" customWidth="1" min="3" max="3"/><col width="14" customWidth="1" min="4" max="4"/><col width="14" customWidth="1" min="5" max="5"/><col width="16" customWidth="1" min="6" max="6"/><col width="18" customWidth="1" min="7" max="7"/></cols>
  <sheetData>
    <row r="1" ht="36" customHeight="1"><c r="A1" s="12" t="s"><v>70</v></c></row>
    <row r="2" ht="18" customHeight="1"><c r="A2" s="1" t="s"><v>42</v></c></row>
    <row r="3" ht="28" customHeight="1"><c r="A3" s="4" t="s"><v>71</v></c><c r="B3" s="4" t="s"><v>72</v></c><c r="C3" s="4" t="s"><v>73</v></c><c r="D3" s="4" t="s"><v>74</v></c><c r="E3" s="4" t="s"><v>75</v></c><c r="F3" s="4" t="s"><v>76</v></c><c r="G3" s="4" t="s"><v>77</v></c></row>
    <row r="4" ht="24" customHeight="1"><c r="A4" t="s"><v></v></c><c r="B4" t="s"><v></v></c><c r="C4" t="s"><v></v></c><c r="D4" s="5" t="s"><v>78</v></c><c r="E4" s="5" t="s"><v>78</v></c><c r="F4" t="s"><v></v></c><c r="G4" s="5" t="s"><v>78</v></c></row>
    <row r="5" ht="24" customHeight="1"><c r="A5" t="s"><v></v></c><c r="B5" t="s"><v></v></c><c r="C5" t="s"><v></v></c><c r="D5" s="5" t="s"><v>78</v></c><c r="E5" s="5" t="s"><v>78</v></c><c r="F5" t="s"><v></v></c><c r="G5" s="5" t="s"><v>78</v></c></row>
    <row r="6" ht="24" customHeight="1"><c r="A6" t="s"><v></v></c><c r="B6" t="s"><v></v></c><c r="C6" t="s"><v></v></c><c r="D6" s="5" t="s"><v>78</v></c><c r="E6" s="5" t="s"><v>78</v></c><c r="F6" t="s"><v></v></c><c r="G6" s="5" t="s"><v>78</v></c></row>
    <row r="7" ht="24" customHeight="1"><c r="A7" t="s"><v></v></c><c r="B7" t="s"><v></v></c><c r="C7" t="s"><v></v></c><c r="D7" s="5" t="s"><v>78</v></c><c r="E7" s="5" t="s"><v>78</v></c><c r="F7" t="s"><v></v></c><c r="G7" s="5" t="s"><v>78</v></c></row>
    <row r="8" ht="24" customHeight="1"><c r="A8" t="s"><v></v></c><c r="B8" t="s"><v></v></c><c r="C8" t="s"><v></v></c><c r="D8" s="5" t="s"><v>78</v></c><c r="E8" s="5" t="s"><v>78</v></c><c r="F8" t="s"><v></v></c><c r="G8" s="5" t="s"><v>78</v></c></row>
    <row r="9" ht="24" customHeight="1"><c r="A9" t="s"><v></v></c><c r="B9" t="s"><v></v></c><c r="C9" t="s"><v></v></c><c r="D9" s="5" t="s"><v>78</v></c><c r="E9" s="5" t="s"><v>78</v></c><c r="F9" t="s"><v></v></c><c r="G9" s="5" t="s"><v>78</v></c></row>
    <row r="10" ht="24" customHeight="1"><c r="A10" t="s"><v></v></c><c r="B10" t="s"><v></v></c><c r="C10" t="s"><v></v></c><c r="D10" s="5" t="s"><v>78</v></c><c r="E10" s="5" t="s"><v>78</v></c><c r="F10" t="s"><v></v></c><c r="G10" s="5" t="s"><v>78</v></c></row>
  </sheetData>
</worksheet>'''

# Sheet 5 - KPI仪表盘设计 (blank)
sheet5_blank = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <sheetPr><tabColor rgb="006B6B6B"/><outlinePr summaryBelow="1" summaryRight="1"/><pageSetUpPr/></sheetPr>
  <dimension ref="A1:E8"/>
  <sheetViews><sheetView workbookViewId="0"><selection activeCell="A1" sqref="A1"/></sheetView></sheetViews>
  <sheetFormatPr baseColWidth="8" defaultRowHeight="15"/>
  <cols><col width="4" customWidth="1" min="1" max="1"/><col width="20" customWidth="1" min="2" max="2"/><col width="40" customWidth="1" min="3" max="3"/><col width="14" customWidth="1" min="4" max="4"/><col width="18" customWidth="1" min="5" max="5"/></cols>
  <sheetData>
    <row r="1" ht="36" customHeight="1"><c r="A1" s="12" t="s"><v>79</v></c></row>
    <row r="2" ht="18" customHeight="1"><c r="A2" s="1" t="s"><v>42</v></c></row>
    <row r="3" ht="28" customHeight="1"><c r="A3" s="4" t="s"><v>80</v></c><c r="B3" s="4" t="s"><v>81</v></c><c r="C3" s="4" t="s"><v>82</v></c><c r="D3" s="4" t="s"><v>83</v></c><c r="E3" s="4" t="s"><v>84</v></c></row>
    <row r="4" ht="24" customHeight="1"><c r="A4" t="s"><v></v></c><c r="B4" t="s"><v></v></c><c r="C4" t="s"><v></v></c><c r="D4" s="5" t="s"><v>78</v></c><c r="E4" t="s"><v></v></c></row>
    <row r="5" ht="24" customHeight="1"><c r="A5" t="s"><v></v></c><c r="B5" t="s"><v></v></c><c r="C5" t="s"><v></v></c><c r="D5" s="5" t="s"><v>78</v></c><c r="E5" t="s"><v></v></c></row>
    <row r="6" ht="24" customHeight="1"><c r="A6" t="s"><v></v></c><c r="B6" t="s"><v></v></c><c r="C6" t="s"><v></v></c><c r="D6" s="5" t="s"><v>78</v></c><c r="E6" t="s"><v></v></c></row>
    <row r="7" ht="24" customHeight="1"><c r="A7" t="s"><v></v></c><c r="B7" t="s"><v></v></c><c r="C7" t="s"><v></v></c><c r="D7" s="5" t="s"><v>78</v></c><c r="E7" t="s"><v></v></c></row>
    <row r="8" ht="24" customHeight="1"><c r="A8" t="s"><v></v></c><c r="B8" t="s"><v></v></c><c r="C8" t="s"><v></v></c><c r="D8" s="5" t="s"><v>78</v></c><c r="E8" t="s"><v></v></c></row>
  </sheetData>
</worksheet>'''

# Write all blank files
with open(BASE + 'xl/sharedStrings.xml', 'w', encoding='utf-8') as f:
    f.write(ss_blank)

with open(BASE + 'xl/worksheets/sheet1.xml', 'w', encoding='utf-8') as f:
    f.write(sheet1_blank)
with open(BASE + 'xl/worksheets/sheet2.xml', 'w', encoding='utf-8') as f:
    f.write(sheet2_blank)
with open(BASE + 'xl/worksheets/sheet3.xml', 'w', encoding='utf-8') as f:
    f.write(sheet3_blank)
with open(BASE + 'xl/worksheets/sheet4.xml', 'w', encoding='utf-8') as f:
    f.write(sheet4_blank)
with open(BASE + 'xl/worksheets/sheet5.xml', 'w', encoding='utf-8') as f:
    f.write(sheet5_blank)

# Write workbook.xml with 5 sheets
wb_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <fileVersion appName="xl" lastEdited="7" lowestEdited="7"/>
  <workbookPr defaultThemeVersion="166925"/>
  <bookViews><workbookView xWindow="0" yWindow="0" windowWidth="20140" windowHeight="10960"/></bookViews>
  <sheets>
    <sheet name="KPI五维筛选矩阵" sheetId="1" r:id="rId1"/>
    <sheet name="AI报告解读检查表" sheetId="2" r:id="rId4"/>
    <sheet name="战略穿透指标卡" sheetId="3" r:id="rId5"/>
    <sheet name="例外信号捕捉追踪" sheetId="4" r:id="rId6"/>
    <sheet name="KPI仪表盘设计" sheetId="5" r:id="rId7"/>
  </sheets>
  <calcPr calcId="191029"/>
</workbook>'''
with open(BASE + 'xl/workbook.xml', 'w', encoding='utf-8') as f:
    f.write(wb_xml)

# Write workbook.xml.rels
wb_rels = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
  <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml"/>
  <Relationship Id="rId4" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet2.xml"/>
  <Relationship Id="rId5" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet3.xml"/>
  <Relationship Id="rId6" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet4.xml"/>
  <Relationship Id="rId7" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet5.xml"/>
</Relationships>'''
with open(BASE + 'xl/_rels/workbook.xml.rels', 'w', encoding='utf-8') as f:
    f.write(wb_rels)

# Write Content_Types.xml
ct_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
  <Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet2.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet3.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet4.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/worksheets/sheet5.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>
  <Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/>
</Types>'''
with open(BASE + '[Content_Types].xml', 'w', encoding='utf-8') as f:
    f.write(ct_xml)

print("All blank KPI files written!")
print("Sheets:", os.listdir(BASE + 'xl/worksheets/'))
