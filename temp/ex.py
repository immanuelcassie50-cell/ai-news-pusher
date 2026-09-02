#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import os, shutil, subprocess

SKILL_DIR = r"C:\Users\Administrator\.claude\skills\Excel表格处理"
TEMPLATE_DIR = os.path.join(SKILL_DIR, "templates", "minimal_xlsx")
OUTPUT_DIR = r"D:\新课开发\管理学\41-组织内创业与创新孵化\工具表单"

def copy_template():
    work_dir = r"D:\CC\temp\xlsx_work"
    if os.path.exists(work_dir):
        shutil.rmtree(work_dir)
    shutil.copytree(TEMPLATE_DIR, work_dir)
    return work_dir

def build_shared_strings(strings):
    lines = ['<?xml version="1.0" encoding="UTF-8" standalone="yes"?>']
    lines.append('<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="{}" uniqueCount="{}">'.format(len(strings), len(strings)))
    for s in strings:
        esc = s.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")
        lines.append("  <si><t>{}</t></si>".format(esc))
    lines.append("</sst>")
    return "\n".join(lines)

def pack(path, out):
    r = subprocess.run(["python3", os.path.join(SKILL_DIR, "scripts", "xlsx_pack.py"), path, out], capture_output=True, text=True)
    if r.returncode != 0:
        print("Error: {}".format(r.stderr))
    return r.returncode == 0

def write(path, content):
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)

def create_file1():
    work_dir = copy_template()
    strings = [
        "双元组织自检表", "评估维度", "评估问题", "评分（1-5）", "得分", "权重", "加权得分",
        "战略一致性", "组织是否有明确的探索性战略与利用性战略并存？", "探索与利用战略是否有定期审视和调整机制？",
        "双元战略是否与公司总体战略保持一致？", "资源配置是否体现双元战略意图？", "战略执行是否有跨部门协调机制？",
        "结构设计", "组织结构是否支持探索与利用活动的并行开展？", "是否设置了专门的创新/创业团队？",
        "是否存在正式的内部创业机制？", "组织是否有灵活的资源调配能力？", "边界跨越机制是否有效运作？",
        "资源配置", "创新项目是否有专项预算支持？", "核心业务与创新业务的资源分配比例是否合理？",
        "是否有跨部门的资源共享机制？", "资源配置决策是否有清晰的优先级标准？", "资源配置是否具备动态调整能力？",
        "考核机制", "是否建立了差异化的绩效考核体系？", "探索性业务是否有容错机制？",
        "创新成果是否有独立的激励措施？", "考核周期是否适配不同业务特性？", "是否平衡短期绩效与长期创新？",
        "文化土壤", "组织是否鼓励尝试和失败学习？", "员工是否有心理安全感敢于提出新想法？",
        "跨部门协作文化是否成熟？", "是否容忍良性失败并从中学习？", "创新文化是否有领导层的示范支持？",
        "领导力", "领导是否具备双元思维能力？", "高管是否亲自参与创新活动？",
        "领导是否在探索与利用间保持平衡？", "管理层是否支持突破性创新？", "领导是否赋能团队自主决策？",
        "评分标准", "5分=完全符合", "4分=基本符合", "3分=部分符合", "2分=较少符合", "1分=完全不符合",
        "改进建议", "战略层面：", "结构层面：", "资源层面：", "考核层面：", "文化层面：", "领导力层面：",
        "总分", "评价等级", "优秀（90分以上）", "良好（75-89分）", "合格（60-74分）", "需改进（60分以下）"
    ]
    write(os.path.join(work_dir, "xl", "sharedStrings.xml"), build_shared_strings(strings))

    wb = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><sheets><sheet name="双元组织自检表" sheetId="1" r:id="rId1"/></sheets><calcPr calcId="0"/></workbook>'
    write(os.path.join(work_dir, "xl", "workbook.xml"), wb)

    sheet = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><sheetViews><sheetView workbookViewId="0"/></sheetViews><sheetFormatPr defaultRowHeight="15"/><cols><col min="1" max="1" width="18" customWidth="1"/><col min="2" max="2" width="45" customWidth="1"/><col min="3" max="3" width="12" customWidth="1"/><col min="4" max="4" width="10" customWidth="1"/><col min="5" max="5" width="10" customWidth="1"/><col min="6" max="6" width="12" customWidth="1"/></cols><sheetData><row r="1" ht="22" customHeight="1"><c r="A1" t="s" s="4"><v>0</v></c><c r="B1" t="s" s="4"><v>1</v></c><c r="C1" t="s" s="4"><v>2</v></c><c r="D1" t="s" s="4"><v>3</v></c><c r="E1" t="s" s="4"><v>4</v></c><c r="F1" t="s" s="4"><v>5</v></c></row><row r="2"><c r="A2" t="s" s="4"><v>6</v></c></row><row r="3"><c r="A3" t="s" s="1"><v>7</v></c><c r="B3" t="s" s="0"><v>8</v></c><c r="D3" s="9"><v></v></c><c r="E3" s="7"><v>0.2</v></c><c r="F3" s="6"><f>D3*E3</f><v></v></c></row><row r="4"><c r="A4" t="s" s="1"><v>7</v></c><c r="B4" t="s" s="0"><v>9</v></c><c r="D4" s="9"><v></v></c><c r="E4" s="7"><v>0.2</v></c><c r="F4" s="6"><f>D4*E4</f><v></v></c></row><row r="5"><c r="A5" t="s" s="1"><v>7</v></c><c r="B5" t="s" s="0"><v>10</v></c><c r="D5" s="9"><v></v></c><c r="E5" s="7"><v>0.2</v></c><c r="F5" s="6"><f>D5*E5</f><v></v></c></row><row r="6"><c r="A6" t="s" s="1"><v>7</v></c><c r="B6" t="s" s="0"><v>11</v></c><c r="D6" s="9"><v></v></c><c r="E6" s="7"><v>0.2</v></c><c r="F6" s="6"><f>D6*E6</f><v></v></c></row><row r="7"><c r="A7" t="s" s="1"><v>7</v></c><c r="B7" t="s" s="0"><v>12</v></c><c r="D7" s="9"><v></v></c><c r="E7" s="7"><v>0.2</v></c><c r="F7" s="6"><f>D7*E7</f><v></v></c></row><row r="8"><c r="A8" t="s" s="4"><v>13</v></c><c r="F8" s="6"><f>SUM(F3:F7)</f><v></v></c></row><row r="9"><c r="A9" t="s" s="1"><v>14</v></c><c r="B9" t="s" s="0"><v>15</v></c><c r="D9" s="9"><v></v></c><c r="E9" s="7"><v>0.2</v></c><c r="F9" s="6"><f>D9*E9</f><v></v></c></row><row r="10"><c r="A10" t="s" s="1"><v>14</v></c><c r="B10" t="s" s="0"><v>16</v></c><c r="D10" s="9"><v></v></c><c r="E10" s="7"><v>0.2</v></c><c r="F10" s="6"><f>D10*E10</f><v></v></c></row><row r="11"><c r="A11" t="s" s="1"><v>14</v></c><c r="B11" t="s" s="0"><v>17</v></c><c r="D11" s="9"><v></v></c><c r="E11" s="7"><v>0.2</v></c><c r="F11" s="6"><f>D11*E11</f><v></v></c></row><row r="12"><c r="A12" t="s" s="1"><v>14</v></c><c r="B12" t="s" s="0"><v>18</v></c><c r="D12" s="9"><v></v></c><c r="E12" s="7"><v>0.2</v></c><c r="F12" s="6"><f>D12*E12</f><v></v></c></row><row r="13"><c r="A13" t="s" s="1"><v>14</v></c><c r="B13" t="s" s="0"><v>19</v></c><c r="D13" s="9"><v></v></c><c r="E13" s="7"><v>0.2</v></c><c r="F13" s="6"><f>D13*E13</f><v></v></c></row><row r="14"><c r="A14" t="s" s="4"><v>20</v></c><c r="F14" s="6"><f>SUM(F9:F13)</f><v></v></c></row><row r="15"><c r="A15" t="s" s="1"><v>21</v></c><c r="B15" t="s" s="0"><v>22</v></c><c r="D15" s="9"><v></v></c><c r="E15" s="7"><v>0.2</v></c><c r="F15" s="6"><f>D15*E15</f><v></v></c></row><row r="16"><c r="A16" t="s" s="1"><v>21</v></c><c r="B16" t="s" s="0"><v>23</v></c><c r="D16" s="9"><v></v></c><c r="E16" s="7"><v>0.2</v></c><c r="F16" s="6"><f>D16*E16</f><v></v></c></row><row r="17"><c r="A17" t="s" s="1"><v>21</v></c><c r="B17" t="s" s="0"><v>24</v></c><c r="D17" s="9"><v></v></c><c r="E17" s="7"><v>0.2</v></c><c r="F17" s="6"><f>D17*E17</f><v></v></c></row><row r="18"><c r="A18" t="s" s="1"><v>21</v></c><c r="B18" t="s" s="0"><v>25</v></c><c r="D18" s="9"><v></v></c><c r="E18" s="7"><v>0.2</v></c><c r="F18" s="6"><f>D18*E18</f><v></v></c></row><row r="19"><c r="A19" t="s" s="1"><v>21</v></c><c r="B19" t="s" s="0"><v>26</v></c><c r="D19" s="9"><v></v></c><c r="E19" s="7"><v>0.2</v></c><c r="F19" s="6"><f>D19*E19</f><v></v></c></row><row r="20"><c r="A20" t="s" s="4"><v>27</v></c><c r="F20" s="6"><f>SUM(F15:F19)</f><v></v></c></row><row r="21"><c r="A21" t="s" s="1"><v>28</v></c><c r="B21" t="s" s="0"><v>29</v></c><c r="D21" s="9"><v></v></c><c r="E21" s="7"><v>0.2</v></c><c r="F21" s="6"><f>D21*E21</f><v></v></c></row><row r="22"><c r="A22" t="s" s="1"><v>28</v></c><c r="B22" t="s" s="0"><v>30</v></c><c r="D22" s="9"><v></v></c><c r="E22" s="7"><v>0.2</v></c><c r="F22" s="6"><f>D22*E22</f><v></v></c></row><row r="23"><c r="A23" t="s" s="1"><v>28</v></c><c r="B23" t="s" s="0"><v>31</v></c><c r="D23" s="9"><v></v></c><c r="E23" s="7"><v>0.2</v></c><c r="F23" s="6"><f>D23*E23</f><v></v></c></row><row r="24"><c r="A24" t="s" s="1"><v>28</v></c><c r="B24" t="s" s="0"><v>32</v></c><c r="D24" s="9"><v></v></c><c r="E24" s="7"><v>0.2</v></c><c r="F24" s="6"><f>D24*E24</f><v></v></c></row><row r="25"><c r="A25" t="s" s="1"><v>28</v></c><c r="B25" t="s" s="0"><v>33</v></c><c r="D25" s="9"><v></v></c><c r="E25" s="7"><v>0.2</v></c><c r="F25" s="6"><f>D25*E25</f><v></v></c></row><row r="26"><c r="A26" t="s" s="4"><v>34</v></c><c r="F26" s="6"><f>SUM(F21:F25)</f><v></v></c></row><row r="27"><c r="A27" t="s" s="1"><v>35</v></c><c r="B27" t="s" s="0"><v>36</v></c><c r="D27" s="9"><v></v></c><c r="E27" s="7"><v>0.2</v></c><c r="F27" s="6"><f>D27*E27</f><v></v></c></row><row r="28"><c r="A28" t="s" s="1"><v>35</v></c><c r="B28" t="s" s="0"><v>37</v></c><c r="D28" s="9"><v></v></c><c r="E28" s="7"><v>0.2</v></c><c r="F28" s="6"><f>D28*E28</f><v></v></c></row><row r="29"><c r="A29" t="s" s="1"><v>35</v></c><c r="B29" t="s" s="0"><v>38</v></c><c r="D29" s="9"><v></v></c><c r="E29" s="7"><v>0.2</v></c><c r="F29" s="6"><f>D29*E29</f><v></v></c></row><row r="30"><c r="A30" t="s" s="1"><v>35</v></c><c r="B30" t="s" s="0"><v>39</v></c><c r="D30" s="9"><v></v></c><c r="E30" s="7"><v>0.2</v></c><c r="F30" s="6"><f>D30*E30</f><v></v></c></row><row r="31"><c r="A31" t="s" s="1"><v>35</v></c><c r="B31" t="s" s="0"><v>40</v></c><c r="D31" s="9"><v></v></c><c r="E31" s="7"><v>0.2</v></c><c r="F31" s="6"><f>D31*E31</f><v></v></c></row><row r="32"><c r="A32" t="s" s="4"><v>41</v></c><c r="F32" s="6"><f>SUM(F27:F31)</f><v></v></c></row><row r="33"><c r="A33" t="s" s="4"><v>42</v></c><c r="F33" s="6"><f>SUM(F8,F14,F20,F26,F32)</f><v></v></c></row><row r="34"><c r="A34" t="s" s="4"><v>43</v></c><c r="B34" t="s" s="0"><v>44</v></c></row><row r="35"><c r="A35" t="s" s="0"><v>45</v></c><c r="B35" t="s" s="0"><v>46</v></c></row><row r="36"><c r="A36" t="s" s="0"><v>47</v></c><c r="B36" t="s" s="0"><v>48</v></c></row><row r="37"><c r="A37" t="s" s="0"><v>49</v></c><c r="B37" t="s" s="0"><v>50</v></c></row><row r="38"><c r="A38" t="s" s="0"><v>51</v></c><c r="B38" t="s" s="0"><v>52</v></c></row></sheetData><pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75"/></worksheet>'
    write(os.path.join(work_dir, "xl", "worksheets", "sheet1.xml"), sheet)

    ct = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/><Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/><Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/><Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/></Types>'
    write(os.path.join(work_dir, "[Content_Types].xml"), ct)

    out = os.path.join(OUTPUT_DIR, "01_双元组织自检表.xlsx")
    if pack(work_dir, out):
        print("Created: {}".format(out))
    return work_dir

os.makedirs(OUTPUT_DIR, exist_ok=True)
print("Creating Excel files...")
create_file1()
print("Done!")