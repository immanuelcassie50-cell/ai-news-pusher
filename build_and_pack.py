#!/usr/bin/env python3
"""Complete build script for 10 positive psychology Excel tool forms."""

import importlib.util, os, shutil, subprocess, sys, re

SKILL_DIR = "C:/Users/Administrator/.claude/skills/Excel表格处理"
TEMPLATE  = "C:/Users/Administrator/.claude/skills/Excel表格处理/templates/minimal_xlsx"
WORK_DIR  = "D:/CC/temp_xlsx_work"
OUTPUT    = "D:/新课开发/情绪与心理学/普通人积极心理学实操课/完成课程包/07_全流程工具表单/全流程工具表单.xlsx"

os.makedirs(os.path.dirname(OUTPUT), exist_ok=True)

# ── Step 1: Copy minimal template ────────────────────────────────────────────
shutil.rmtree(WORK_DIR, ignore_errors=True)
shutil.copytree(TEMPLATE, WORK_DIR)
print("Template copied to", WORK_DIR)

# ── Step 2: Generate sheet XMLs + shared strings ─────────────────────────────
spec = importlib.util.spec_from_file_location("build_forms", "D:/CC/build_forms.py")
bf   = importlib.util.module_from_spec(spec)
spec.loader.exec_module(bf)

ss = bf.SS()
sheet_xmls = [
    bf.build_F01(ss), bf.build_F02(ss), bf.build_F03(ss),
    bf.build_F04(ss), bf.build_F05(ss), bf.build_F06(ss),
    bf.build_F07(ss), bf.build_F08(ss), bf.build_F09(ss),
    bf.build_F10(ss),
]
print(f"Generated {ss.count()} shared strings, {len(sheet_xmls)} sheets")
for i, x in enumerate(sheet_xmls):
    print(f"  Sheet {i+1}: {x.count(chr(10))} XML lines")

# ── Step 3: Write sharedStrings.xml ──────────────────────────────────────────
ss_xml = ss.xml()
with open(f"{WORK_DIR}/xl/sharedStrings.xml", "w", encoding="utf-8") as f:
    f.write(ss_xml)
print(f"Wrote sharedStrings.xml ({len(ss_xml):,} bytes)")

# ── Step 4: Write sheet XMLs ─────────────────────────────────────────────────
for idx, xml in enumerate(sheet_xmls, 1):
    with open(f"{WORK_DIR}/xl/worksheets/sheet{idx}.xml", "w", encoding="utf-8") as f:
        f.write(xml)
print("Wrote sheet1.xml … sheet10.xml")

# ── Step 5: Create styles.xml (red-gray theme + 13 financial slots) ───────────
# OOXML required fills: index 0=none, index 1=gray125 (spec-mandated).
# Our theme fills start at index 2.
STYLES_XML = r"""<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <numFmts count="4">
    <numFmt numFmtId="164" formatCode="$#,##0;($#,##0);&quot;-&quot;"/>
    <numFmt numFmtId="165" formatCode="0.0%"/>
    <numFmt numFmtId="166" formatCode="0.0x"/>
    <numFmt numFmtId="167" formatCode="#,##0"/>
  </numFmts>
  <fonts count="12">
    <!-- 0: default -->
    <font><sz val="11"/><name val="Calibri"/></font>
    <!-- 1: blue (input) -->
    <font><sz val="11"/><name val="Calibri"/><color rgb="000000FF"/></font>
    <!-- 2: black (formula) -->
    <font><sz val="11"/><name val="Calibri"/><color rgb="00000000"/></font>
    <!-- 3: green (cross-sheet) -->
    <font><sz val="11"/><name val="Calibri"/><color rgb="00008000"/></font>
    <!-- 4: bold (header) -->
    <font><sz val="11"/><name val="Calibri"/><b/></font>
    <!-- 5: bold blue (header input) -->
    <font><sz val="11"/><name val="Calibri"/><b/><color rgb="000000FF"/></font>
    <!-- 6: dark-red title (white on C00000) large -->
    <font><sz val="14"/><name val="Calibri"/><b/><color rgb="00FFFFFF"/></font>
    <!-- 7: red header (white on D64535) -->
    <font><sz val="11"/><name val="Calibri"/><b/><color rgb="00FFFFFF"/></font>
    <!-- 8: red label (on light-red fill) -->
    <font><sz val="11"/><name val="Calibri"/><color rgb="00C00000"/></font>
    <!-- 9: dark gray label -->
    <font><sz val="11"/><name val="Calibri"/><color rgb="00404040"/></font>
    <!-- 10: italic gray (instruction text) -->
    <font><sz val="10"/><name val="Calibri"/><i/><color rgb="00595959"/></font>
    <!-- 11: white bold (for dark fills) -->
    <font><sz val="11"/><name val="Calibri"/><b/><color rgb="00FFFFFF"/></font>
  </fonts>
  <fills count="11">
    <fill><patternFill patternType="none"/></fill>
    <fill><patternFill patternType="gray125"/></fill>
    <!-- 2: light gray background (F2F2F2) -->
    <fill><patternFill patternType="solid"><fgColor rgb="00F2F2F2"/><bgColor indexed="64"/></patternFill></fill>
    <!-- 3: light red (F5DADA) -->
    <fill><patternFill patternType="solid"><fgColor rgb="00F5DADA"/><bgColor indexed="64"/></patternFill></fill>
    <!-- 4: medium red (E8B4B4) -->
    <fill><patternFill patternType="solid"><fgColor rgb="00E8B4B4"/><bgColor indexed="64"/></patternFill></fill>
    <!-- 5: dark-red header (C00000) -->
    <fill><patternFill patternType="solid"><fgColor rgb="00C00000"/><bgColor indexed="64"/></patternFill></fill>
    <!-- 6: red accent (D64535) -->
    <fill><patternFill patternType="solid"><fgColor rgb="00D64535"/><bgColor indexed="64"/></patternFill></fill>
    <!-- 7: dark gray text area (404040) -->
    <fill><patternFill patternType="solid"><fgColor rgb="00404040"/><bgColor indexed="64"/></patternFill></fill>
    <!-- 8: medium gray (D9D9D9) -->
    <fill><patternFill patternType="solid"><fgColor rgb="00D9D9D9"/><bgColor indexed="64"/></patternFill></fill>
    <!-- 9: near-white (FAFAFA) -->
    <fill><patternFill patternType="solid"><fgColor rgb="00FAFAFA"/><bgColor indexed="64"/></patternFill></fill>
    <!-- 10: yellow highlight for special notes -->
    <fill><patternFill patternType="solid"><fgColor rgb="00FFFF00"/><bgColor indexed="64"/></patternFill></fill>
  </fills>
  <borders count="1">
    <border><left/><right/><top/><bottom/><diagonal/></border>
  </borders>
  <cellStyleXfs count="1">
    <xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/>
  </cellStyleXfs>
  <cellXfs count="23">
    <!-- 0: default text -->
    <xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/>
    <!-- 1: blue font (general input) -->
    <xf numFmtId="0" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1"/>
    <!-- 2: black font (formula) -->
    <xf numFmtId="0" fontId="2" fillId="0" borderId="0" xfId="0" applyFont="1"/>
    <!-- 3: green font (cross-sheet) -->
    <xf numFmtId="0" fontId="3" fillId="0" borderId="0" xfId="0" applyFont="1"/>
    <!-- 4: bold header (column headers) -->
    <xf numFmtId="0" fontId="4" fillId="0" borderId="0" xfId="0" applyFont="1"/>
    <!-- 5: blue currency input -->
    <xf numFmtId="164" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>
    <!-- 6: black currency formula -->
    <xf numFmtId="164" fontId="2" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>
    <!-- 7: blue percentage input (0-10 score) -->
    <xf numFmtId="165" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>
    <!-- 8: black percentage formula -->
    <xf numFmtId="165" fontId="2" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>
    <!-- 9: blue integer input -->
    <xf numFmtId="167" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>
    <!-- 10: black integer formula -->
    <xf numFmtId="167" fontId="2" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>
    <!-- 11: blue year input -->
    <xf numFmtId="1" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1" applyNumberFormat="1"/>
    <!-- 12: blue+yellow (special note / highlight) -->
    <xf numFmtId="0" fontId="1" fillId="10" borderId="0" xfId="0" applyFont="1" applyFill="1"/>
    <!-- 13: red title row (white on C00000) -->
    <xf numFmtId="0" fontId="6" fillId="5" borderId="0" xfId="0" applyFont="1" applyFill="1"/>
    <!-- 14: section header (white on D64535) -->
    <xf numFmtId="0" fontId="7" fillId="6" borderId="0" xfId="0" applyFont="1" applyFill="1"/>
    <!-- 15: column sub-header (dark gray on light gray) -->
    <xf numFmtId="0" fontId="9" fillId="2" borderId="0" xfId="0" applyFont="1" applyFill="1"/>
    <!-- 16: instruction text (italic gray) -->
    <xf numFmtId="0" fontId="10" fillId="0" borderId="0" xfId="0" applyFont="1"/>
    <!-- 17: filled input cell (light red bg) -->
    <xf numFmtId="0" fontId="1" fillId="3" borderId="0" xfId="0" applyFont="1" applyFill="1"/>
    <!-- 18: category header (white on dark red) -->
    <xf numFmtId="0" fontId="8" fillId="4" borderId="0" xfId="0" applyFont="1" applyFill="1"/>
    <!-- 19: medium gray section divider row (white text on dark) -->
    <xf numFmtId="0" fontId="11" fillId="7" borderId="0" xfId="0" applyFont="1" applyFill="1"/>
    <!-- 20: sub-header on light gray bg (dark gray text) -->
    <xf numFmtId="0" fontId="9" fillId="8" borderId="0" xfId="0" applyFont="1" applyFill="1"/>
    <!-- 21: table row alt (near-white) -->
    <xf numFmtId="0" fontId="0" fillId="9" borderId="0" xfId="0" applyFont="1" applyFill="1"/>
    <!-- 22: bold label -->
    <xf numFmtId="0" fontId="4" fillId="0" borderId="0" xfId="0" applyFont="1"/>
  </cellXfs>
</styleSheet>
"""
with open(f"{WORK_DIR}/xl/styles.xml", "w", encoding="utf-8") as f:
    f.write(STYLES_XML)
print("Wrote styles.xml")

# ── Step 6: Update workbook.xml (10 sheets) ─────────────────────────────────
sheet_names = [
    "F01_PERMA基准线自评表",
    "F02_情绪词汇积累表",
    "F03_VIA优势自评表",
    "F04_感恩三件事记录表",
    "F05_心流触发器识别表",
    "F06_个人充值菜单表",
    "F07_认知扭曲识别表",
    "F08_ABCDE重构工作表",
    "F09_韧性叙事模板",
    "F10_幸福例程设计表",
]
wb_path = f"{WORK_DIR}/xl/workbook.xml"
with open(wb_path, "r", encoding="utf-8") as f:
    wb = f.read()

sheet_entries = "\n".join(
    f'    <sheet name="{nm}" sheetId="{i+1}" r:id="rId{i+4}"/>'
    for i, nm in enumerate(sheet_names)
)
wb = re.sub(r"<sheets>.*?</sheets>", "<sheets>\n" + sheet_entries + "\n  </sheets>", wb, flags=re.DOTALL)
with open(wb_path, "w", encoding="utf-8") as f:
    f.write(wb)
print("Updated workbook.xml")

# ── Step 7: Update workbook.xml.rels ─────────────────────────────────────────
rels_path = f"{WORK_DIR}/xl/_rels/workbook.xml.rels"
with open(rels_path, "r", encoding="utf-8") as f:
    rels = f.read()

# Add rId4–rId13 for sheets 2-10 (rId1=sheet1 already present; rId2=styles, rId3=sharedStrings)
new_rels = "\n".join(
    f'  <Relationship Id="rId{i+4}"'
    f' Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet"'
    f' Target="worksheets/sheet{i+1}.xml"/>'
    for i in range(1, 10)  # sheets 2-10 → rId5-rId13
)
rels = rels.replace("</Relationships>", new_rels + "\n</Relationships>")
with open(rels_path, "w", encoding="utf-8") as f:
    f.write(rels)
print("Updated workbook.xml.rels")

# ── Step 8: Update [Content_Types].xml ──────────────────────────────────────
ct_path = f"{WORK_DIR}/[Content_Types].xml"
with open(ct_path, "r", encoding="utf-8") as f:
    ct = f.read()

new_overrides = "\n".join(
    f'  <Override PartName="/xl/worksheets/sheet{i+1}.xml"'
    f' ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>'
    for i in range(1, 10)  # sheets 2-10
)
ct = ct.replace("</Types>", new_overrides + "\n</Types>")
with open(ct_path, "w", encoding="utf-8") as f:
    f.write(ct)
print("Updated [Content_Types].xml")

# ── Step 9: Pack ─────────────────────────────────────────────────────────────
result = subprocess.run(
    ["python3", f"{SKILL_DIR}/scripts/xlsx_pack.py", WORK_DIR, OUTPUT],
    capture_output=True, text=True
)
if result.returncode != 0:
    print("PACK ERROR:", result.stderr)
    sys.exit(1)
print(f"Packed: {OUTPUT}")

# ── Step 10: Validate ────────────────────────────────────────────────────────
res = subprocess.run(
    ["python3", f"{SKILL_DIR}/scripts/formula_check.py", OUTPUT, "--report"],
    capture_output=True, text=True
)
print(f"Validation exit: {res.returncode}")
if res.stdout:
    print(res.stdout[:800])
if res.stderr:
    print("STDERR:", res.stderr[:400])

print("\nDONE — output:", OUTPUT)
