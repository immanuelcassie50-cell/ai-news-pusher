"""
修复 2026授课PPT_优化版.pptx
问题：ZIP打包时工作目录错误，所有路径都以 ppt/ 开头，缺失根级别的
[Content_Types].xml 和 _rels/.rels

修复方式：往现有ZIP注入缺失的两个根文件，不改动其他内容。
"""

import zipfile
import shutil
import os
import re

SRC = "D:/Downloads/xinjian/2026授课PPT_优化版.pptx"
DST = "D:/Downloads/xinjian/2026授课PPT_优化版_已修复.pptx"

# ── 1. 生成 [Content_Types].xml ─────────────────────────────────────────────
# 需要列出 ZIP 内所有部件的 content type
# 已知结构：slides (1-132), slideLayouts (1), slideMasters (1),
#          notesSlides (1-132), notesMasters (1), theme (1), presProps, viewProps, tableStyles

slides = list(range(1, 133))
notes  = list(range(1, 133))

ct_parts = []
# presentation.xml
ct_parts.append('  <Override PartName="/ppt/presentation.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.presentation.main+xml"/>')
# presProps / viewProps / tableStyles
for fn in ["presProps.xml", "viewProps.xml", "tableStyles.xml"]:
    ct_parts.append(f'  <Override PartName="/ppt/{fn}" ContentType="application/vnd.openxmlformats-officedocument.presentationml.presProps+xml"/>')
# slideMasters
ct_parts.append('  <Override PartName="/ppt/slideMasters/slideMaster1.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.slideMaster+xml"/>')
# slideLayouts
ct_parts.append('  <Override PartName="/ppt/slideLayouts/slideLayout1.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.slideLayout+xml"/>')
# slides
for i in slides:
    ct_parts.append(f'  <Override PartName="/ppt/slides/slide{i}.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.slide+xml"/>')
# notesMasters
ct_parts.append('  <Override PartName="/ppt/notesMasters/notesMaster1.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.notesMaster+xml"/>')
# notesSlides
for i in notes:
    ct_parts.append(f'  <Override PartName="/ppt/notesSlides/notesSlide{i}.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.notesSlide+xml"/>')
# theme
ct_parts.append('  <Override PartName="/ppt/theme/theme1.xml" ContentType="application/vnd.openxmlformats-officedocument.theme+xml"/>')

content_types_xml = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">\n'
content_types_xml += '\n'.join(ct_parts)
content_types_xml += '\n</Types>'

# ── 2. 生成 _rels/.rels ─────────────────────────────────────────────────────
# 根 .rels 必须指向 ppt/_rels/presentation.xml.rels
rels_xml = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="ppt/presentation.xml"/>
</Relationships>'''

# ── 3. 读写 ZIP，注入两个根文件 ─────────────────────────────────────────────
TMP = DST + ".tmp"

with zipfile.ZipFile(SRC, 'r') as zin:
    with zipfile.ZipFile(TMP, 'w', compression=zipfile.ZIP_DEFLATED) as zout:
        # 先写两个根文件（放在最前面，ZIP 规范要求 [Content_Types].xml 要在开头）
        zout.writestr('[Content_Types].xml', content_types_xml)
        zout.writestr('_rels/.rels', rels_xml)
        # 然后复制所有原有内容（保持 ppt/ 前缀不变）
        for item in zin.infolist():
            zout.writestr(item, zin.read(item.filename))

print(f"✅ 修复完成: {DST}")

# 验证
with zipfile.ZipFile(DST, 'r') as z:
    names = z.namelist()
    roots = [n for n in names if '/' not in n]
    print("根目录文件:", roots)
    print("总文件数:", len(names))
